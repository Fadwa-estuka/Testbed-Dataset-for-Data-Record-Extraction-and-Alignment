// CNBC Search Page JS file 

    function formatStoryDate(time)
   {
      var monthArr=new Array(12);
      monthArr[0]="Jan";
      monthArr[1]="Feb";
      monthArr[2]="Mar";
      monthArr[3]="Apr";
      monthArr[4]="May";
      monthArr[5]="Jun";
      monthArr[6]="Jul";
      monthArr[7]="Aug";
      monthArr[8]="Sep";
      monthArr[9]="Oct";
      monthArr[10]="Nov";
      monthArr[11]="Dec";
      
      var myDays = new Array(7);
      myDays[0]="Sunday";
      myDays[1]="Monday";
      myDays[2]="Tuesday";
      myDays[3]="Wednesday";
      myDays[4]="Thursday";
      myDays[5]="Friday";
      myDays[6]="Saturday";
      myDays[7]="Sunday";
       
      var dateTime = new Date();
      dateTime.setTime(time); 
      
      var day = myDays[dateTime.getDay()];
	  var date = dateTime.getDate();
	  var month = monthArr[dateTime.getMonth()];
	  var year = dateTime.getFullYear();
	  var currentHours = dateTime.getHours();
	  var minutes = dateTime.getMinutes();
	  var am_pm;
	  
	  
	  if(minutes < 10)
	  {
	    minutes = "0"+minutes;
	  }
	  
	  am_pm = ( currentHours < 12 ) ? "AM" : "PM";
      currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
      currentHours = ( currentHours == 0 ) ? 12 : currentHours;

	 
        return day + ", " +  date + " " + month + " " + year+ " | " + currentHours + ":" +minutes + " "+ am_pm +" "+ "ET" ;
     }

     var formatParam = " ";
     var formatValue = " ";
     var formatdiv = false;
     var datediv = false;
	 var keyWordParam = " ";
	 var trackFormat = "All";
	 var trackDateFormat = "AllT";

	 // default param for All
	 var all_default_source = '&source=CNBC.com,The Reformed Broker,Buzzfeed,Estimize,Curbed,Polygon,Racked,Eater,SB Nation,Vox,The Verge,Recode,Breakingviews,NBC News,The Today Show,Fiscal Times,The New York Times,Financial Times,USA Today';
	 var articles_default_source = '&source=CNBC.com,The Reformed Broker,Buzzfeed,Estimize,Curbed,Polygon,Racked,Eater,SB Nation,Vox,The Verge,Recode,Breakingviews,NBC News,The Today Show,Fiscal Times,The New York Times,Financial Times,USA Today';
		   
   //Below is the function for suggested symbol
     
      var SearchsymSuggester = null;
      var SearchSettings = null;

 function onSearchLoadAutoSuggest() {
 
 var symPageUrl = "http://www.cnbc.com/id/15837272";
  if(document.getElementById("cnbc_quote_box_header2") != null) 
 {
	
   
  try{
   // maxresults, pattern, count, top, left, pageUrl
   var keywordResult = document.getElementById('txtBox').value;
   keywordResult = escape(keywordResult);
   SearchSettings = new SymbolLookupSettings(cnbc_symmaxresults,",",cnbc_symSymbolCount,cnbc_symservice_url);
   
 
   var link_event = "cnbc_radiogroup_submitSlash_form_with_symbol(document.getElementById(\"cnbc_quote_box_header\"),\"##param##\");";   
   SearchSettings.setLinkEvent(link_event);

   var inputNode  = document.getElementById("cnbc_hdqbox2");
   var containerNode = document.getElementById("symDropDownMenu2");
			
            //containerNode.style.display = "none";
            containerNode.style.top  = cnbc_symDropMenuTop;
            containerNode.style.left = cnbc_symDropMenuLeft;
             
     
    var symfooterDiv = "<div id=\"dd_footer\" class=\"fL\">";
    symfooterDiv += "<div class=\"resultLink\"><span><a href=\"javascript: gotoSymLookupPage(\'"+symPageUrl+"',\'"+keywordResult+"'\);\" class=\"cFont cf12\">&raquo; View All Results for \'"+keywordResult+"\'</a></span></div>";     
    symfooterDiv += "</div>";
    var symErrorContentDiv = "<div id=\"dd_footer\" class=\"aL\">";
    symErrorContentDiv += "<span class=\"error\">There are no results for \'"+keywordResult+"\'</span>";
    symErrorContentDiv += "</div>";

   SearchSettings.setFooterContent(symfooterDiv);
   SearchSettings.setErrorContent(symErrorContentDiv);

  
  // var query = getQueryParamQ();
   SearchSettings.setSavedPrefix(keywordResult); 
   
   // new symlookupautosuggest class init
   SearchsymSuggester = new StaticSymLookup (inputNode, containerNode, SearchSettings);  
  
   var uicontrols = { "menu": "symDropDownMenu2", "menutext": "Loading...", "showLoader": cnbc_showLoader };

   /** SymbolLookup View, Model and Controller Class Declarations ******************************/
   var views = {"cnbc": new CNBCSymbolLookupView(SearchsymSuggester,uicontrols) };
  
   var symLookupController = new BaseSymbolLookupController( new SymbolLookupModel(views), new FlashProxyRequestor("flashQuoteProxy", "json"), new SymbolLookupParser() );
   
   SearchsymSuggester.setController(symLookupController);  
 
   
   if(keywordResult != "") {
   //inputNode.style.display ="none";
   inputNode.value = SearchSettings.getSavedPrefix();

   //cnbc_showLoader('symDropDownMenu2','Loading...', '');
   setTimeout("SearchsymSuggester.initShowSymSuggest()",2000);    
   //symlookupSuggester.initShowSymSuggest(); 

   } 
     
   
  } catch (e){}                  
 }
  setTimeout ( "hideMatchingSymbols()", 8000);
}

function hideMatchingSymbols()
{
	//alert(" Inside hideMatchingSymbols "+document.getElementById("dd_body"));
	if(document.getElementById("dd_body") != null)
   {	  
	   document.getElementById("matching_symbols").style.display = "block";
	 //  alert(" Inside hideMatchingSymbols "+document.getElementById("matching_symbols").style.display);
   }
   //alert("1");
}


// End of suggested symbols function 

    // *******************Pagination functionality ******************
 
 var search_TotalPageCount;
 var baseUrl = "http://search.cnbc.com/";
 var baseUrlParam = baseUrl + "rs/search/view.html?partnerId=2000&keywords=";
 var baseRssFeedUrl = baseUrl + "rs/search/all/view.rss?partnerId=2000&keywords=";
 var sponsoredURLParam = baseUrl + "rs/proxy/yahoo/view.xml?Keywords=";
 var creatorProfileUrl = baseUrl + "rs/search/all/view.js?assettype=creator&pubfreq=a&partnerId=2000&keywords=";
 var paramstatic_URL = "";
 var search_PagLinks = 10;
 var linksdisplay  = 5;
 var search_Separator = " | ";
 var pageNum;
 var pageResults; 
 var ignoreResults = "false";
 var prexclude = "&categories=exclude";
 //yahoo sponsored section 
 var uagent= navigator.userAgent;
 var serveUrl = "http://search.cnbc.com/main.do";
 var userIp;
 
 function getip(useripaddress)
 {
	 userIp = useripaddress.address;
 }

 function search_GetPagination_Clientside(totalLinks,linksperPage,linksdisplay,searchKeywords,currentPage,sortValue,formatlinkParam,pubtime,pubfreq)
   {
    search_TotalPageCount = Math.ceil(totalLinks / linksperPage);
	//searchKeywords = searchKeywords.replace(/&quot;/g,'"');
	var escapeParams = escape(searchKeywords);
	if(formatlinkParam == "&type=video")
	{
		search_pagBaseUrl = baseUrlParam+escapeParams+"&sort="+sortValue+formatlinkParam+"&pubtime="+pubtime+"&pubfreq="+pubfreq+prexclude;
	}
	else if(formatlinkParam != " " && formatlinkParam != "&type=video")
	{
       search_pagBaseUrl = baseUrlParam+escapeParams+"&sort="+sortValue+formatlinkParam+"&pubtime="+pubtime+"&pubfreq="+pubfreq;
	}
	else
	{
		search_pagBaseUrl = baseUrlParam+escapeParams+"&sort="+sortValue+"&pubtime="+pubtime+"&pubfreq="+pubfreq+prexclude;
	}
	
	//add if any cookie with name ssp present...
	var ssp=read_cookie('ssp');
	if(ssp != null && ssp != ""){
		search_pagBaseUrl = search_pagBaseUrl + "&ssp=" + ssp;
	}

	
   // document.getElementById(pagid).style.display = "none";
    
    if(search_TotalPageCount > 1) 
    {
        //create pagination links
        
            //start, end, currentPage, linksdisplay, linksdisplay
			document.getElementById("dottedLine1").style.display = "block";
	        document.getElementById("dottedLine2").style.display = "block";
			if(totalLinks >= 10000)
			{
				document.getElementById("dottedLine2").style.marginTop = "0px";
			}
            var start = 1;
            var end = Number(linksdisplay);
                       
            for (var i=1; i<=search_TotalPageCount; i++)
            {
                search_PagLinks ="";
                             
                if(Number(currentPage) < linksdisplay || search_TotalPageCount <= linksdisplay)
                {
                     
					  if(search_TotalPageCount <= linksdisplay)
					  {
					    var newcount = search_TotalPageCount;
					  } 
					   else
					   {
					   var newcount = linksdisplay;
					   }
		   // count, page, total, current, url
				   search_PagLinks = search_createLinkPages(newcount, start, search_TotalPageCount, currentPage, search_pagBaseUrl);
				   break;   
                }
    
                else if((Number(currentPage) > (search_TotalPageCount - (linksdisplay - 1))) && (Number(currentPage) <= search_TotalPageCount)) 
                {
					  var newstart = search_TotalPageCount - (linksdisplay - 1);
					  
					  search_PagLinks = search_createLinkPages (linksdisplay, newstart, search_TotalPageCount, currentPage, search_pagBaseUrl);
					  break;
                } 
                else if(start <= Number(currentPage) <= end) 
                {
					  var newstart = Number(currentPage) - 1;
					  
					  search_PagLinks = search_createLinkPages (linksdisplay, newstart, search_TotalPageCount, currentPage, search_pagBaseUrl);
					  break;
                }
                else 
                {
					  start = Number(start) + Number(linksdisplay);
					  end   = Number(end) + Number(linksdisplay);
                }
            }
        

        var pglinks;
        
        if(currentPage != 1){
            //hide first|prev links
            pglinks = document.getElementById("leftPagCol").getElementsByTagName('a');
          //  pglinks[0].setAttribute("href", search_pagBaseUrl); 
            pglinks[0].setAttribute("href", search_pagBaseUrl+"&page="+Number(currentPage-1));
             
            document.getElementById("leftPagCol").style.display = "block";
        }
        
        if(search_PagLinks != undefined) {
   
     
            document.getElementById("centerPagCol").innerHTML = search_PagLinks;
    
            if(search_TotalPageCount >= linksdisplay) {
                document.getElementById("centerPagCol").innerHTML; //+= ' of <a href="'+search_pagBaseUrl+'&amp;page='+search_TotalPageCount+'">'+search_TotalPageCount+'</a>';
            }
        }
        
        if(currentPage != search_TotalPageCount){
            //hide next|last links
            pglinks = document.getElementById("rightPagCol").getElementsByTagName('a');
            pglinks[0].setAttribute("href", search_pagBaseUrl+"&page="+(Number(currentPage)+Number(1)));
            //pglinks[1].setAttribute("href", search_pagBaseUrl+"&page="+search_TotalPageCount);
             
            document.getElementById("rightPagCol").style.display = "block";
        }
    	
    }
    
}

function search_createLinkPages (count, page, total, current, url)
{
    var Links = "";

 url = url.replace(/&/g,"&amp;");
    for (var i=1; i<=count; i++) // 5-1
    {
        if(page == current) {
            if(page == total) {
                if(i > 1) { Links += search_Separator; }
                Links += '<span class=\"cnorm\">'+ page +'<\/span>';
            
            } else {
                if(i > 1) { Links += search_Separator; }
                Links += '<span class=\"cnorm\">'+ page +'<\/span>';
                page++;
            }
        } else {
            if(page == total) {
                if(i > 1) { Links += search_Separator; }
                Links += '<a href=\"'+url+'\&amp;page='+page+'\">'+ page +'<\/a>';
            
            } else {
                if(i > 1) { Links += search_Separator; }
                Links += '<a href=\"'+url+'\&amp;page='+page+'\">'+ page +'<\/a>';
                page++;
                
            }
        }
    }
	
	
    return Links;
    
}

function display_searchPageResults(totalResults,pagesize,currentPage,keyValue)
{
	var pageCount = String(totalResults/pagesize);
	var newpageCount = pageCount.split(".");
	var search_results = document.getElementById("search_results");
	
	if(!search_results) {
		return false;
	};
	   if(keyValue != "")
	   {
		   if(totalResults < 10 && totalResults != 0)
		   {
			   pageResult = currentPage * totalResults;
			   pageNum = currentPage;
			   search_results.innerHTML = pageNum + "-" +  pageResult; 
		   }
		   else if(totalResults == 0)
		   {
			   pageResult = 0;
			   pageNum = pageResult;
			   search_results.innerHTML = pageNum + "-" +  pageResult;
			   
		   }
		   else
		   {
			   if(search_TotalPageCount != currentPage)
			   {
		         pageResult = currentPage * pagesize;
	             pageNum = pageResult - Number(pagesize - 1);
	             search_results.innerHTML = pageNum + "-" +  pageResult; 
			   }
			   else
			   {
				 pageResult = totalResults;
				 if(isNaN(newpageCount[1]))
				 {
				     newpageCount[1] = pagesize;
				 }
	             pageNum = pageResult -  (Number(newpageCount[1] - 1));
	             search_results.innerHTML = pageNum + "-" +  pageResult; 
			   }
		   }
	   }
	   else
	   {
         search_results.innerHTML = "0" + "-" + "0"; 
	   }
}

function loadCreatorProfile(keyWordParam) {
	if (typeof keyWordParam == 'undefined' || keyWordParam.trim() == '') {
		return;
	}
	keyWordParam = keyWordParam.replace(/&quot;/g,'"');	
	var escapeParams = escape(keyWordParam);
	var creator_template = '<div class="profileCard">'+
								'<div class="creator_thumbnail">'+
        							'<img src="http://fm.cnbc.com{#creator_thumbnail#}" class="creator_thumbnail"></img>'+
        						'</div>'+
        						'<div class="creator_info">'+
        							'<h3 class="title"><a href="{#creator_link#}">{#creator_title#}</a></h3>'+
        							'<p class="description">{#creator_description#}</p>'+
        						'</div>'+
    						'</div>';
	$.ajax({
		url : creatorProfileUrl+escapeParams,
		dataType: "json",
		success: function(response) {
			if (typeof response['rss']['channel']['item'] == 'undefined') {
				$(".cnbc_creator_profile").remove();
				return;
			}
			if ($.isArray(response['rss']['channel']['item']) == true) {
				// multiple creator profiles
				// no support for multiple profiles
				$(".cnbc_creator_profile").remove();
				return;
			} else {
				// single creator profile
				var creator_title = "CNBC Profile: "+response['rss']['channel']['item']['title'];
				var creator_link = response['rss']['channel']['item']['link'];
				var creator_thumbnail = response['rss']['channel']['item']['metadata:thumbnail'];
				creator_thumbnail = creator_thumbnail.replace("240x160", "60x60");
				var creator_description = typeof response['rss']['channel']['item']['description'] == 'string' ? response['rss']['channel']['item']['description'] : '';
				var creator_content = creator_template.replace("{#creator_thumbnail#}", creator_thumbnail)
													.replace("{#creator_link#}", creator_link)
													.replace("{#creator_title#}", creator_title)
													.replace("{#creator_description#}", creator_description);
				$(".cnbc_creator_profile").html(creator_content);
				$("#noResultMsg").remove();
			}
		},
		error: function(errorResponse) {
			return;
		}
	});
}

 // *******************End of Pagination functionality ****************** 
 
 
 /**************************  Sponsored Results Section ********************/
 function parseSponsoredXML(keyValue) {
	// keyValue = keyValue.replace(/&quot;/g,'"');
	/*for(var j=0; j<=ignoreSponsoredArray.length - 1; j++)
	{		
		if(ignoreSponsoredArray[j].toLowerCase() == keyValue.toLowerCase())
		{
			ignoreResults = "true";
		}
		
	}
	
	if(ignoreResults == "false")
	{
		var escapeParams = escape(keyValue);
		var yserveUrl = encodeURIComponent(serveUrl);
		var ip = userIp;
		var ua = uagent;
		var aData = "ip="+ip+"&ua="+ua;
		var affilData = encodeURIComponent(aData);
				
		var sponsoredURL = sponsoredURLParam+escapeParams+"&serveUrl="+ yserveUrl +"&Partner=nbc_cnbc_search&affilData="+affilData+"&maxCount=4";
			
			$.ajax({
				url: sponsoredURL
				,cache: true
				,success: function(rootObj) {
					//var resultDoc = transport.responseText;
				   	//var rootObj = loadXML(resultDoc);
				   	var resultsLength = rootObj.getElementsByTagName("Listing").length;
				   	if(resultsLength != 0) {
						document.getElementById('yahooSponsored').style.display = "block";
				   	}
					var sponsoredResults;
					sponsoredResults = "<div style=\"width:280px; float:left; margin-right:12px;\"><div><a class=\"cnbc_search_results_link cnbc_srch_results_link\" href ='"+rootObj.getElementsByTagName("ClickUrl")[0].childNodes[0].nodeValue +"' target=\"_blank\" style=\"text-decoration: underline\">"+rootObj.getElementsByTagName("Listing")[0].getAttribute("title") +"</a></div>";
					sponsoredResults += "<div><a class=\"SponAdBody\" href ='"+rootObj.getElementsByTagName("ClickUrl")[0].childNodes[0].nodeValue +"' target=\"_blank\"><span>"+rootObj.getElementsByTagName("Listing")[0].getAttribute("description")+"</span></a></div>";        sponsoredResults += "<div> <a  class=\"SponAdDisplayUrl\" href ='"+rootObj.getElementsByTagName("ClickUrl")[0].childNodes[0].nodeValue +"' target=\"_blank\">"+rootObj.getElementsByTagName("Listing")[0].getAttribute("siteHost")+"</a></div>";
					sponsoredResults += "</div>";
					
					for (var i=1; i<=resultsLength -2; i++) {
						sponsoredResults += "<div style=\"width:280px; float:left; margin-right:20px;\"><div><a class=\"cnbc_search_results_link cnbc_srch_results_link\" href ='"+rootObj.getElementsByTagName("ClickUrl")[i].childNodes[0].nodeValue +"' target=\"_blank\" style=\"text-decoration: underline\">"+rootObj.getElementsByTagName("Listing")[i].getAttribute("title") +"</a></div>";
						sponsoredResults += "<div><a class=\"SponAdBody\" href ='"+rootObj.getElementsByTagName("ClickUrl")[i].childNodes[0].nodeValue +"' target=\"_blank\" style=\"line-height:13.6px\"><span>"+rootObj.getElementsByTagName("Listing")[i].getAttribute("description")+"</span></a></div>";     
						sponsoredResults += "<div> <a  class=\"SponAdDisplayUrl\" href ='"+rootObj.getElementsByTagName("ClickUrl")[i].childNodes[0].nodeValue +"' target=\"_blank\">"+rootObj.getElementsByTagName("Listing")[i].getAttribute("siteHost")+"</a></div>";
						sponsoredResults += "</div>";
				  	}
				  	document.getElementById('sponsoredSection').innerHTML = sponsoredResults;
				}
				,error:function() {
					document.getElementById('sponsoredSection').innerHTML = "There is some problem in getting the Sponsored Results.";
				}
			});*/


			/*sponsoredRequest = new Ajax.Request(sponsoredURL, {
			method: 'get',
			   	onSuccess : function(transport){
				   	var resultDoc = transport.responseText;
				   	var rootObj = loadXML(resultDoc);
				   	var resultsLength = rootObj.getElementsByTagName("Listing").length;
				   	if(resultsLength != 0) {
						document.getElementById('yahooSponsored').style.display = "block";
				   	}
					var sponsoredResults;
					sponsoredResults = "<div style=\"width:280px; float:left; margin-right:12px;\"><div><a class=\"cnbc_search_results_link cnbc_srch_results_link\" href ='"+rootObj.getElementsByTagName("ClickUrl")[0].childNodes[0].nodeValue +"' target=\"_blank\" style=\"text-decoration: underline\">"+rootObj.getElementsByTagName("Listing")[0].getAttribute("title") +"</a></div>";
					sponsoredResults += "<div><a class=\"SponAdBody\" href ='"+rootObj.getElementsByTagName("ClickUrl")[0].childNodes[0].nodeValue +"' target=\"_blank\"><span>"+rootObj.getElementsByTagName("Listing")[0].getAttribute("description")+"</span></a></div>";        sponsoredResults += "<div> <a  class=\"SponAdDisplayUrl\" href ='"+rootObj.getElementsByTagName("ClickUrl")[0].childNodes[0].nodeValue +"' target=\"_blank\">"+rootObj.getElementsByTagName("Listing")[0].getAttribute("siteHost")+"</a></div>";
					sponsoredResults += "</div>";
					
					for (var i=1; i<=resultsLength -2; i++) {
						sponsoredResults += "<div style=\"width:280px; float:left; margin-right:20px;\"><div><a class=\"cnbc_search_results_link cnbc_srch_results_link\" href ='"+rootObj.getElementsByTagName("ClickUrl")[i].childNodes[0].nodeValue +"' target=\"_blank\" style=\"text-decoration: underline\">"+rootObj.getElementsByTagName("Listing")[i].getAttribute("title") +"</a></div>";
						sponsoredResults += "<div><a class=\"SponAdBody\" href ='"+rootObj.getElementsByTagName("ClickUrl")[i].childNodes[0].nodeValue +"' target=\"_blank\" style=\"line-height:13.6px\"><span>"+rootObj.getElementsByTagName("Listing")[i].getAttribute("description")+"</span></a></div>";     
						sponsoredResults += "<div> <a  class=\"SponAdDisplayUrl\" href ='"+rootObj.getElementsByTagName("ClickUrl")[i].childNodes[0].nodeValue +"' target=\"_blank\">"+rootObj.getElementsByTagName("Listing")[i].getAttribute("siteHost")+"</a></div>";
						sponsoredResults += "</div>";
				  	}
				  	document.getElementById('sponsoredSection').innerHTML = sponsoredResults;
				},
				onFailure : function(transport){
				
					 document.getElementById('sponsoredSection').innerHTML = "There is some problem in getting the Sponsored Results.";
				}
		  });*/
			
	//}
 }
 
function loadXML(xmlFile) {
	var xmlDocElement =null;
  	var xmlDoc = null;
  	if (window.ActiveXObject) {
	try {
			// code for IE
			xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async=false;
			xmlDoc.loadXML(xmlFile);
			
			
			
	} catch (e) {
		alert("inside catch::"+e.message);
	}
  	} else {
		// code for Mozilla, Firefox, Opera, etc.
		
  		parser=new DOMParser();
  		xmlDoc=parser.parseFromString(xmlFile,"text/xml");
	  	//xmlDocElement=xmlDoc.documentElement;
  	}
	
  	return xmlDoc;
}


/****************** End of Sponsored Results Section *************************/

/************  LEFT RAIL FILTER SECTION ********************************/

 function loadParamURL(keyValue,sortValue,pubtime,pubfreq,formatParamLink)
 {
     keyValue = keyValue.replace(/&quot;/g,'"');	
	 var escapeParams = escape(keyValue); 
	 var base_URL = baseUrlParam+escapeParams;
	 var paramsort_URL = "&sort="+sortValue;
	 var action_URL;
	 if(escapeParams != "")
	 {		
		 if(formatParamLink == "&type=video")
		 {
		    action_URL = base_URL+paramsort_URL+paramstatic_URL+formatParamLink+"&pubtime="+pubtime+"&pubfreq="+pubfreq;
		 }
		 else if(formatParamLink != " " && formatParamLink != "&type=video")
		 {
		   action_URL = base_URL+paramsort_URL+paramstatic_URL+formatParamLink+"&pubtime="+pubtime+"&pubfreq="+pubfreq;
		 }
		 else
		 {
			action_URL = base_URL+paramsort_URL+paramstatic_URL+"&pubtime="+pubtime+"&pubfreq="+pubfreq+prexclude; 
		 }
	 }
	 else
	 {
		 action_URL = baseUrlParam;
	 }
	 
	 //add if any cookie with name ssp present...
	 var ssp=read_cookie('ssp');
	 if(ssp != null && ssp != ""){
		 action_URL = action_URL + "&ssp=" + ssp;
	 }
	 
	 location.href = action_URL;
 }

/*********** End of function *************************/

function read_cookie(key)
 {
     var result;
     result = (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
     result = result ? result.replace(/\"/g,'') : null;
     return result;
 }

 
/** Search Field enter key check *****/

function cnbc_searchbox_submitenter(keyValue,sortValue,formatlinkParam,pubtime,pubfreq,keyEvent)
 {
		var keycode;
		
		if (keyEvent) keycode = keyEvent.keyCode;
		if (keycode == 13)
		   {
		
			var url = "";
			if (formatlinkParam.trim() == '') {
				formatlinkParam = all_default_source;
			}

			if (keyValue.trim() != '') {
		   		loadParamURL(keyValue.trim(),sortValue,pubtime,pubfreq,formatlinkParam);
			}
		 
		   return false;
		   }
			else
			{
			   	return true;
			}
	 
			 
  }

/* Method Loading the RSS Feed ***/

function loadRSSFeed(keyValue,sortValue,pubtime,pubfreq,formatParamLink)
{	
   	 var escapeParams = escape(keyValue); 
	 var base_URL = baseRssFeedUrl+escapeParams;
	 var paramsort_URL = "&sort="+sortValue;
	 var action_URL;
	 	 
		 if(formatParamLink == "&type=video")
		 {
			 action_URL = base_URL+paramsort_URL+paramstatic_URL+formatParamLink+"&pubtime="+pubtime+"&pubfreq="+pubfreq+prexclude;
		 }
		 else if(formatParamLink != " " && formatParamLink != "&type=video")
		 {
		   action_URL = base_URL+paramsort_URL+paramstatic_URL+formatParamLink+"&pubtime="+pubtime+"&pubfreq="+pubfreq;
		 }
		 else
		 {
			action_URL = base_URL+paramsort_URL+paramstatic_URL+"&pubtime="+pubtime+"&pubfreq="+pubfreq+prexclude; 
		 }
		 
	 location.href = action_URL;
	
}

function displayAllResultsLink(formatParam)
{
	if(formatParam == " " || formatParam == all_default_source)
	{
		document.getElementById("raquo_all").style.display = "block";
	}
	else
	{
		document.getElementById("normal_all").style.display = "block";
	}
}
function displayNoResultMessage(keywords, format, pubtime, totalResult){
    if(keywords != ""  && totalResult == "0"  &&  (format != " " || pubtime != "0")){
        document.getElementById("noResultMsg").innerHTML = "Currently no results for your search criteria. Expanding your criteria may provide more results.";
    }
}