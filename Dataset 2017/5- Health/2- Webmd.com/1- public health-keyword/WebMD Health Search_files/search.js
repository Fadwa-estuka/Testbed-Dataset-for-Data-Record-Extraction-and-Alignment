//popup hiding variables and methods
var showPopUp = false;

// this empty variable was added because the base chrome contained some code to check for this value, 
//that did not exist on the page. This was throwing and error the top links were not getting displayed. 
var s_sponsor_program = ""; 

//attach the documents click event to this hide popup function
document.onclick = hidePopUps;

//set the focus on the search box
window.onload = function() {setSearchBoxCursor()};

//this function will hide the popups after they have been displayed
function hidePopUps()
{
	if(!showPopUp)
	{
		hideAjaxPopup('webSuggestPopup','DivShimWeb');
		hideAjaxPopup('ajaxPopup', 'DivShim');
	}
	else
	{
		showPopUp = false;
	}
}
//this function cancels the bubbling of events
function cancelBubble(e)
{
	e.cancelBubble = true;
}

//cache object
var cache = new Object();

//some pages are calling this for the what is adSense ads, could not rename
function openWin()
{
	return OpenWhatis("http://www.webmd.com/content/pages/25/113998.htm?displayFormat=NoFramework");
}

function OpenWhatis(url)
{
	linkswin = window.open(url,"linkswin","resizable=yes,scrollbars=no,width=370,height=560");
	linkswin.focus();
	return false;
}

function openSubServiceWin() {
	var win
	var h = 260, w = 280;
	var arg = "resizable=yes,scrollbars=no" + ",width=" + w + ",height=" + h;
	win = window.open("/content/article/75/89663.htm", "subWin", arg );
	if (win) { win.focus(); }
	return false;
}

function setStatus(url)
{
	window.defaultStatus = "Done";
	window.status = url;
}

function filterClick(obj, queryBoxName, isLanding, omnitureValue)
{
	var query = "";
	//get the query
	query = document.getElementById(queryBoxName).value;
	
	if(query.length == 0 && isLanding == 'true' )
	{
		filterChange(obj.id);
	}
	else
	{
		try
		{
			wmdSearchTrack(omnitureValue);	//omniture function
		}
		catch(err)
		{
		}
		if(obj.id == "web_search")
		{
			//perform ajax call for suggestions
			getWebSuggestion(queryBoxName, obj);
		}
		else
		{
			webMDSearch(query, obj.id);
		}
	}
}

function submitSearchBoxLandingPage(ev)
{
	if((ev.which && ev.which == 13) || (ev.keyCode && ev.keyCode == 13))
	{
		return DoDefaultSearch();
	}
	else
	{
		return	true;
	}
}

function submitSearchBox(queryBoxName, sourceTypeBox, omnitureValue, ev)
{
	if((ev.which && ev.which == 13) || (ev.keyCode && ev.keyCode == 13))
	{
		submitSearchButton(queryBoxName, sourceTypeBox, omnitureValue); return false;
	}
	else
	{
		return	true;
	}
}

function propertyChange()
{
	//this function is used with the onproperty event for the textbox to prevent premature
	//submitting of the form through javascript from the submitSearch function when autocomplete is invoked
	return false;
}

//this function will submit the search using the given querybox and currently selected filter
function submitSearchButton(queryBoxName, sourceTypeBox, omnitureValue)
{
	var query = "";
	var sourceType = "all";	//this is the defaultResponse.Redirect("/search/default.aspx",true);
	if(queryBoxName.length > 0)
	{
		query = document.getElementById(queryBoxName).value;
	}
	
	if(sourceTypeBox.length > 0)
	{
		sourceType = document.getElementById(sourceTypeBox).value;
	}
	
	saveForm();
	
	try
	{
		wmdSearchTrack("search-bar_" + omnitureValue);	//omniture function
	}
	catch(err)
	{
	}
	if(sourceType == "offers")
	{
		//offers page performs search for all tab
		return webMDSearch(query, "all");
	}
	else
	{
		window.location.href = "?sourceType=" + sourceType + "&query=" + escape(query);
	}
	
	return false;
}

// make all links with same href look visited if popup icon is clicked
function newWindowFromSR(href_value) {
  var links = document.getElementsByTagName('a');
  for (var i=0;i<links.length;i++) {
    if (links[i].href == href_value) {
      links[i].className = 'visitedPopup';
    }
  }
  return true;
}

//javascript for psr dropdown to navigate to option value url
function gotoPSRDropDownURL(option_value, row_index, option_index)
{
	if(option_value.length > 0)
	{
		try
		{
			wmdSearchTrack("h-scn_Link" + row_index + "_" + option_index);	//omniture function
		}
		catch(err)
		{
		}
		window.location.href = option_value;
	}
}

//this function will toggle between the partial and full definition
function toggleDefinition(div_id)
{
	if(div_id.length > 0)
	{
		if(div_id == "fullDef")
		{
			document.getElementById("partialDef").style.display = "";
		}
		else
		{
			document.getElementById("fullDef").style.display = "";
		}
		document.getElementById(div_id).style.display = "none";
	}
	return true;
}

function saveForm()
{
	//only works for IE6 right now, this saves the INPUT values to the autocomplete store
	if(navigator.appName=="Microsoft Internet Explorer")
	{
		window.external.AutoCompleteSaveForm(document.forms[0]);
	}
}

function resetDropDowns()
{
	var dropdowns = document.getElementsByTagName("select");
	if(dropdowns != null)
	{
		for(i=0; i < dropdowns.length; i++)
		{
			dropdowns[i].options[0].selected = true;
		}
	}
}

function webSearch(term)
{
	if(term.length > 0)
	{
		window.location.href = "/search/search_results/web_results.aspx?sourceType=web_search&query=" + escape(term);
	}
	return false;
}

function webMDSearch(term, filter)
{
	if(term.length > 0)
	{
		window.location.href = "/search/search_results/default.aspx?sourceType=" + filter +"&query=" + escape(term);
	}
	return false;
}

function bookMarkPage(url, title)
{
	if((navigator.appName=="Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4))
	{
		window.external.AddFavorite(url, title);
	}
	else if(navigator.appName=="Netscape")
	{
		window.sidebar.addPanel(title,url,"");
	}
	else
	{
		alert("Press CTRL-D (Netscape) or CTRL-T (Opera) to bookmark");
	}
	return false;
}

function filterChange(filter)
{
	var currentFilter;
	var sourceType;

	if (document.getElementById) {
		//deselect the default filter
		unHighlight("originalSource");
	
		//get the previously selected filter and turn off highlight
		unHighlight("sourceType");
	    
		if (filter) 
		{
			currentFilter = document.getElementById(filter);
			//set the value for the hidden filter field
			document.getElementById("sourceType").value = filter;
		}
		else 
		{
			currentFilter = document.getElementById(sourceType);
		}
	    
		//highlight the newly selected filter
		if(filter == "web_search")
		{
			currentFilter.className = "current";
		}
		else
		{
			currentFilter.className = "current";
		}
	}
	return false;
}

function unHighlight(fieldName)
{
	var prevFilter;
	var sourceType;
	
	sourceType = document.getElementById(fieldName).value;
	prevFilter = document.getElementById(sourceType);
	prevFilter.className = "";
}

function  DoDefaultSearch()
{
	var query;
	var sourceType;
	var url;
	//get the query
	query = escape(document.getElementById("txtQuery").value);
	
	if(query.length > 0)
	{
		try
		{
			ctr('Search_landingSearch');	//omniture function
		}
		catch(err)
		{
		}
		sourceType = document.getElementById("sourceType").value;

		if(sourceType == "web_search")
		{
			window.location.href = "/search/search_results/web_results.aspx?query=" + query + "&sourceType=" + sourceType;
		}
		else
		{
			window.location.href = "/search/search_results/default.aspx?query=" + query + "&sourceType=" + sourceType;
		}
	}
	else
	    window.location.href = "/search/default.aspx?invalid=1&query=" + query + "&sourceType=" + sourceType;
	
	return false;
}

function OpenAdSenseResult(url)
{
	var w = screen.availWidth;
	var h = screen.availHeight;
	
	newwindow = window.open(url, "adSenseResult", "height=" + h + ", width=" + w + ", toolbar=yes,menubar=yes,titlebar=yes,location=yes,status=yes,scrollbars=yes,resizable=yes,directories=yes,screenX=0,screenY=0,left=0,top=0");
	
	if(window.focus)
	{
		newwindow.focus();
	}
	return false;
}

/*web search tab functions */
function getWebSuggestion(querybox, obj)
{
	var term = document.getElementById(querybox).value;
	var res;
	
	if(term.length > 0)
	{
		try
		{
			res = SearchResults.WebSearchSuggestion(term);
		}
		catch(err)
		{
		}
		if(res != null && res.value != null)
		{
			if(res.value.IsBlockedWord)
			{
				DisplayBlockedMessage(obj);
			}
			else if(res.value.SuggestedTerms.length > 0)
			{
				//generate suggestion list html and display
				DisplaySuggestions(term, res.value, obj);
			}
			else
			{
				//no suggestion and bot a blocked word
				webSearch(term);
			}
		}
		else
		{
			//no response from ajax call
			webSearch(term);
		}
	}
}

function DisplaySuggestions(term, suggestion, obj)
{
	var container = document.getElementById("websuggestRow");

	//clear previous suggestions
	while(container.childNodes.length > 0)
		container.removeChild(container.childNodes[0]);
	 
	var td, ul, li, a; 
	td = document.createElement("td");
	ul = document.createElement("ul");
	var trackingCode;
	
	for(var i = 0; i < suggestion.SuggestedTerms.length; i++)
	{
		if(i == (suggestion.SuggestedTerms.length - 1))
			trackingCode = "'web-tb_last'";
		else
			trackingCode = "'web-tb_s" + (i+1).toString() + "'";
		li = document.createElement("li");
		a = document.createElement("a");
		a.href = "/search/search_results/web_results.aspx?sourceType=web_search&query=" + suggestion.SuggestedTerms[i];
	    //a.href = "/search/search_results/web_results_left.aspx?sourceType=web_search&query=" + suggestion.SuggestedTerms[i];
		
		//need this because the function has to attach param immediately
		eval("a.onclick = function(){wmdSearchTrack(" + trackingCode + ")}");
		if(term.toLowerCase() != suggestion.SuggestedTerms[i])
		{
			a.href += "&trans=true&original=" + term;
		}
		a.innerHTML = suggestion.SuggestedTerms[i];
		li.appendChild(a);
		ul.appendChild(li);
	}
	td.appendChild(ul);
	container.appendChild(td);

	showAjaxPopup("webSuggestPopup", "DivShimWeb", null);
}

function DisplayBlockedMessage(obj)
{
	var container = document.getElementById("websuggestRow");

	//clear previous suggestions
	while(container.childNodes.length > 0)
		container.removeChild(container.childNodes[0]);
	
	var td, ul, li;
	td = document.createElement("td");
	ul = document.createElement("ul");
	li = document.createElement("li");
	li.innerHTML = "WebMD does not provide web search for this term.";
	ul.appendChild(li);
	td.appendChild(ul);

	container.appendChild(td);

	showAjaxPopup("webSuggestPopup", "DivShimWeb", null);
}

//can remove this before releasing
function hideSuggestion()
{
	var container = document.getElementById("webSuggestions");
	if(container != null)
	{
		container.style.visibility = "hidden";
		hide = true;
		highlightWebTab();
	}
}

var hide  = true;

//can remove this before release
function showhide(obj)
{
	var x = new getObj('webSuggestions');
	hide = !hide;
	x.style.visibility = (hide) ? 'hidden' : 'visible';
	setLyr(obj,'webSuggestions');
	highlightWebTab();
	
}

//can remove this before release
function highlightWebTab()
{
	var tab = document.getElementById('web_search');
	if(tab)
	{
		if(document.getElementById("AdSenseOptions") || (document.getElementById("sourceType") != null && document.getElementById("sourceType").value == "web_search"))
		{
			tab.className = (hide) ? "current" : "hover-lit";
		}
		else
		{
			tab.className = (hide) ? "none" : "hover-lit";
		}
	}
}

//can remove this before release
function setLyr(obj,lyr)
{
	var newX = findPosX(obj);
	var newY = findPosY(obj);
	var newWidth = 0;
	newWidth = document.getElementById("web_search").offsetWidth;
	
	if (lyr == 'webSuggestions') newY -= 0;newX -= -newWidth + 2
	var x = new getObj(lyr);
	x.style.top = newY + 'px';
	x.style.left = newX + 'px';
}

//can remove this before release
function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}

//can remove this before release
function findPosY(obj)
{
	var curtop = 0;
	var printstring = '';
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			printstring += ' element ' + obj.tagName + ' has ' + obj.offsetTop;
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;

	return curtop;
}

//can remove this before release
function getObj(name)
{
 if (document.getElementById)
 {
	   this.obj = document.getElementById(name);
	   this.style = document.getElementById(name).style;
 }
 else if (document.all)
 {
	   this.obj = document.all[name];
	   this.style = document.all[name].style;
 }
 else if (document.layers)
 {
	   if (document.layers[name])
	   {
	   	this.obj = document.layers[name];
	   	this.style = document.layers[name];
	   }
	   else
	   {
	    this.obj = document.layers.webSuggestions.layers[name];
	    this.style = document.layers.webSuggestions.layers[name];
	   }
 }
}

function customLink(cuslink)
{ 
	var s_md, _page;
	s_md=s_gi(s_account);   
	_page=_URL+"_" +cuslink.toLowerCase();  
	void(s_md.tl(true, 'o', _page));
}

//this function gets the more refinements and displays them
function GetMoreRefinements(query, nval, rootVal, navState, brand, e)
{
	try
	{
		if(cache[brand + "-" + query + "-" + nval + "-" + rootVal])
		{
			result = cache[brand + "-" + query + "-" + nval + "-" + rootVal];
		}
		else
		{
			result = SearchResults.GetMoreRefinements(query, nval, rootVal, navState, brand);
            
			if(result != null && result.value != null && result.value.length > 0)
				addToCache(brand + "-" + query + "-" + nval + "-" + rootVal, result);
		}

		ShowMoreRefinements(result, rootVal, brand, e);
	}
	catch(err)
	{
	}

	return false;
}

//function that renders the more refinements response after ajax call
function ShowMoreRefinements(ServerResponse, rootVal, brand, e)
{
	var response;
    var moduleName = "srch-pz-ref-all";
  
    if (rootVal)
    {
        if (rootVal == "21" || rootVal == "22")
           moduleName = moduleName + "-tpc";
        else if (rootVal == "23")    
            moduleName = moduleName + "-cat";
    }

	//the first item in the response object contains the refinements
	if(ServerResponse != null && ServerResponse.value[0] != null)
		response = ServerResponse.value[0];

	if(response == null || response.Value == null || response.Value.length == 0)
	{
		alert("no data retrieved from server");
		return;
	}

	//determine how many lists to show
	var numLists;
	if(response.Value.length < 21)
		numLists = 2;
	else if(response.Value.length < 31)
		numLists = 3;
	else if(response.Value.length < 41)
		numLists = 4;
	else if(response.Value.length < 51)
		numLists = 5;
	else if(response.Value.length < 61)
		numLists = 6;
	else if(response.Value.length < 71)
		numLists = 7;
	else
		numLists = 8;

	//create an array of lists and balance out the number of results that will be in each list
	var lists = new Array(numLists);
	var counter = 0;
	var listCounter = 0;

	while(counter < response.Value.length)
	{
		if(lists[listCounter] == null)
			lists[listCounter] = 1;
		else
			lists[listCounter]++;

		//reset the listCounter if it goes pass the size of the array
		listCounter++;
		if(listCounter > (numLists-1))
			listCounter = 0;
		counter++;
	}
	
	//figure out the number of columns for the table
	var colNum = numLists;
	if(numLists > 4)
		colNum = 4;		//do not exceed 4 columns

	//reset counters
	listCounter = 0;
	counter = 0;

	//draw items in first row

	var row = document.getElementById("firstRow");

    if (row == null)
        row = document.getElementById("1stRow");

    
        
	var td, ul, li, a;
	if(row)
	{
		try
		{
			while(row.childNodes.length > 0)
				row.removeChild(row.childNodes[0]);
		}
		catch(err)
		{
		}
		for(var i = 0; i<colNum; i++)
		{
			td = document.createElement("td");
			td.valign = "top";
			ul = document.createElement("ul");
			
			for(var j = 0; j<lists[listCounter]; j++)
			{
				li = document.createElement("li");
				a = document.createElement("a");
				a.id = "ref-" + moduleName + "-" + response.Value[counter].Nval + "_" + (counter + 1);
				a.href = response.Value[counter].Url;
				a.onclick = "wmdSearchTrack('" + moduleName + "-" + response.Value[counter].Nval + "_" + (counter + 1) + "');";
				a.innerHTML = response.Value[counter].Name;
				li.appendChild(a);
				li.innerHTML += " (" + response.Value[counter].RecordCount + ")";
				ul.appendChild(li);
				counter++;
			}

			td.appendChild(ul);

			row.appendChild(td);

			listCounter++;
		}
	}

	//draw divider if there are more than 4 sets of data
	if(numLists > 4)
	{
		row = document.getElementById("secondRow");
		
		if (row == null)
            row = document.getElementById("2ndRow");
        
		td = document.createElement("td");
		td.colSpan = "4";
		td.innerHTML = "<div class=\"ajaxDottedLine\"> </div>"
		row.appendChild(td);
	}
	else
	{
	    row = document.getElementById("secondRow");
	    
	    if (row == null)
            row = document.getElementById("2ndRow");
        
	    try
		{
			while(row.childNodes.length > 0)
				row.removeChild(row.childNodes[0]);
		}
		catch(err)
		{
		}
	}
    
	if(numLists > 4)
	{
		//draw items in the second row of data
		row = document.getElementById("thirdRow");
		
		if (row == null)
            row = document.getElementById("3rdRow");
        
		if(row)
		{
			try
			{
				while(row.childNodes.length > 0)
					row.removeChild(row.childNodes[0]);
			}
			catch(err)
			{
			}
			
			for(var i = 0; i<colNum; i++)
			{
				td = document.createElement("td");
				td.valign = "top";
				ul = document.createElement("ul");

				for(var j = 0; j<lists[listCounter]; j++)
				{
					li = document.createElement("li");
					a = document.createElement("a");
					a.id = "ref-" + moduleName + "-" + response.Value[counter].Nval + "_" + (counter + 1);
					a.href = response.Value[counter].Url;
		    		a.onclick = "wmdSearchTrack('" + moduleName + "-" + response.Value[counter].Nval + "_" + (counter + 1) + "');";	
					a.innerHTML = response.Value[counter].Name;
					li.appendChild(a);
					li.innerHTML += " (" + response.Value[counter].RecordCount + ")";
					ul.appendChild(li);
					counter++;
				}

				td.appendChild(ul);

				row.appendChild(td);

				listCounter++;
			}
		}
	}
    else
    {
        row = document.getElementById("thirdRow");
				
		if (row == null)
            row = document.getElementById("3rdRow");
               		
   		try
		{
			while(row.childNodes.length > 0)
				row.removeChild(row.childNodes[0]);
		}
		catch(err)
		{
		}
    }
    
    if (rootVal)
    {
        //if refine by more specific health topic, then show the title as "refine by health topic"
        if (rootVal == "22")
        {
            if (brand == "boots")
                document.getElementById("refinementCategory").innerHTML = "Refine by health topic";
            else    
                document.getElementById("refinementCategory").innerHTML = "Refine By Health Topic";
        }
        else
        {
            if (brand == "boots") 
                document.getElementById("refinementCategory").innerHTML = "Refine " + ServerResponse.value[1].Value.toLowerCase();
            else
                document.getElementById("refinementCategory").innerHTML = "Refine " + ServerResponse.value[1].Value;    
        }
    }
	else
	{
	    if (brand == "boots") 
	        document.getElementById("refinementCategory").innerHTML = "Refine " + ServerResponse.value[1].Value.toLowerCase();
	    else    
	        document.getElementById("refinementCategory").innerHTML = "Refine " + ServerResponse.value[1].Value;
    }
    
	//show the popup
	showAjaxPopup("ajaxPopup", "DivShim", e);

}

function showAjaxPopup(popupId,divshimId, e) 
{	
	if (document.getElementById('ajaxPopup')) {
		document.getElementById('ajaxPopup').style.display = "none"; 
	}
	if (document.getElementById('webSuggestPopup')) {
		document.getElementById('webSuggestPopup').style.display = "none"; 
	}
		   
	if (document.getElementById(popupId)) { 	
			
		if (document.getElementById(divshimId)) { 
			var DivRef = document.getElementById(popupId);
			var IfrRef = document.getElementById(divshimId);

			DivRef.style.display = "block";
			IfrRef.style.width = DivRef.offsetWidth;
			IfrRef.style.height = DivRef.offsetHeight;
			IfrRef.style.top = DivRef.style.top;
			IfrRef.style.left = DivRef.style.left;
			IfrRef.style.zIndex = DivRef.style.zIndex - 1;
			IfrRef.style.display = "block";
		}
	

		var yPos = "350";
		var xPos = "";
		
		try
		{
			var cursor = getPosition(e);
			var isdefaultpage = "1";
								        
	         if (document.getElementById(popupId) && 
	            document.getElementById(popupId).getAttribute("isdefaultpage") != null && 
	            document.getElementById(popupId).getAttribute("isdefaultpage") != "")
                    isdefaultpage = document.getElementById(popupId).getAttribute("isdefaultpage");
                       
			if(e == null)
				yPos = "30";	//for web suggestions
			else if(e.layerY)
			{
			     if (isdefaultpage == "1")
				   yPos = e.layerY
				else if (isdefaultpage == "0")
				    yPos = cursor.y;
			}
			else
			{
			    if (isdefaultpage == "1")
				    yPos = e.y
				else if (isdefaultpage == "0")
				    yPos = cursor.y;
			}
		}
		catch (err)
		{
		}
				
        try
		{
		    xPos = cursor.x;
				
		    if (isdefaultpage == "0")			
		    {
			    if (xPos != null && xPos != "" && xPos > 0)
			    {
			        if ((xPos + 100) * 2 >= screen.width)
    				    xPos = xPos - 300;
    			    else
    				    xPos = xPos - 100;
			    }
				
			    if (xPos != null && xPos != "" && xPos <= 0)
			        xPos = 30;
			}        
		}
		catch (err)
		{
		}
				
		if (xPos != null && xPos != "")
		    document.getElementById(popupId).style.left = xPos + "px";	
				  
		document.getElementById(popupId).style.top = yPos + "px";	
		document.getElementById(popupId).style.display = "block";
		showPopUp = true;
	}	
}

function getPosition(e) {
    e = e || window.event;
    var cursor = {x:0, y:0};
    
    try
    {
        if (e.pageX || e.pageY) {
            cursor.x = e.pageX;
            cursor.y = e.pageY;
        } 
        else {
            var de = document.documentElement;
            var b = document.body;
            cursor.x = e.clientX + 
                (de.scrollLeft || b.scrollLeft) - (de.clientLeft || 0);
            cursor.y = e.clientY + 
                (de.scrollTop || b.scrollTop) - (de.clientTop || 0);
        }
    }
    catch (err)
	{
	}
	
    return cursor;
}

function hideAjaxPopup(popupId,divshimId) 
{	
	if (document.getElementById(popupId)) {	
		
		if (document.getElementById(divshimId)) { 
			var DivRef = document.getElementById(popupId);
			var IfrRef = document.getElementById(divshimId);

			DivRef.style.display = "none";
			IfrRef.style.display = "none";
		}
		document.getElementById(popupId).style.display = "none"; 
	}	
}

function addToCache (cacheKey, result)
{
  cache[cacheKey] = result;
}

function openPopup(theUrl,w,h) 
{
	var left = (screen.availWidth - w)/2;
	var top = (screen.availHeight - h)/2;
	  
	var args = "scrollbars,resizable" + ",width=" + w + ",height=" + h + ",top=" 
		+ top + ",left= " + left;
	
	var win = window.open(theUrl, 'popup', args );
	
	/* If the window already existed, bring it to the front */
	if (win) { win.focus(); }
	
	return false;
}

function openPopupWin(url, name)
{
	newwindow = window.open(url, name, "toolbar=yes,menubar=yes,titlebar=yes,location=yes,status=yes,scrollbars=yes,resizable=yes,directories=yes");
	if(window.focus)
	{
		newwindow.focus();
	}
	return false;
}

function setSearchBoxCursor()
{
	if(document.getElementById("SubmitSearch1_QueryBox1"))
		setFocus("SubmitSearch1_QueryBox1");
	else
		setFocus("txtQuery");
	

}

function setFocus(controlName)
{
	var obj = document.getElementById(controlName);
	//alert(obj);
	if(obj)
		obj.focus();
}

/* function for omniture tracking */
/*function sl(url, link_type, bi_tag) {
    ctrs(bi_tag);
    var status, toolbar, width, height, resizable, scrollbars, menubar;
    var left = 0;
    var top = 0;
    var href = new String(url.href);
    if (href.indexOf("/video/") != -1) {
        width = 860;
        height = 730;
        top = 10;
        left = 10;
        scrollbars = "no";
        resizeable = "no";
        status = "yes";
        left = 25;
        top = 25;
    } else if (href.indexOf("/healthmanager.") != -1) {
        return openAssessPopup(url);
    } else if ((href.indexOf("/content/article") != -1 ||
        href.indexOf("/content/pages") != -1 ||
        href.indexOf("/solutions") != -1 ||
        href.indexOf("/content/Article") != -1 ||
        href.indexOf("/content/Pages") != -1) &&
        link_type != "sp") {
        return true;
    } else if (link_type == "" || link_type == "normal" || link_type == "regular") {
        return true;
    } else if (link_type == "sp") {
        width = 590;
        height = 400;
        toolbar = 0;
        resizable = 1;
        status = 0;
        scrollbars = 1;
        left = 25;
        top = 25;
    } else if (link_type == "ai") {
        width = 715;
        height = 600;
        scrollbars = 1;
        toolbar = 0;
        resizable = 1;
        status = 0;
        left = 25;
        top = 25;
    } else if (link_type == "nw") {
        width = 1000;
        height = 600;
        scrollbars = 1;
        toolbar = 1;
        resizable = 1;
        status = 1;
        left = 25;
        top = 25;
    } else {
        return true;
    }
    var newWindow = window.open(url, "", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top + ",scrollbars=" + scrollbars + ",toolbar=" + toolbar + ",resizable=" + resizable + ",status=" + status + ",menubar=" + menubar);
    return false;
}*/

// Newsletter funtions
function clearDefault(el) {
  if (el.defaultValue==el.value) el.value = ""
}

/* function to check e-mail address validity on a form */
 function checkEmailAddr2() 
 {
  illegal = /[^\w._\-]/;
  email = document.forms[0].EmailAddr.value;

	// check if valid email addr
  if (email.length<6 || email.indexOf("@")==-1 || email.indexOf('.')==-1)
  { email=""; }
  else 
  {
   At = email.indexOf("@");
   Period = email.lastIndexOf('.');
   DNS1 = email.substring(0,At);
   if (DNS1.length<1 || DNS1.match(illegal)!=null) email="";
   DNS2 = email.substring(At+1,Period);
   if (DNS2.length<1 || DNS2.match(illegal)!=null) email="";
   DNS3 = email.substring(Period+1,email.length);
   if (DNS3.length<2 || DNS3.match(illegal)!=null) email="";
  }

	// Invalid email addr message
  if (email.length==0) 
  {
   alert("The email address you have entered is invalid. Please re-enter a valid email address.\n");
   document.forms[0].EmailAddr.focus();
   return false;
  }

	// Redirect to the page that sends out the newsletter emails.
  document.forms[0].action = "https://pref.health.webmd.com/WebMD/webMDsubscription_miniform.asp";
  document.forms[0].submit();
}

// This function set the src for the iframe call for boots. 
// ***********************************************************
// Parameters:
// ***********************************************************
// searchText = auto corrected search term
// pageNumber = page number that the user is currently requested to view (by clicking on the pagination). default is 1
// navState = refinements nav state value (used to further refine the results on boots.
// frameHeight = height of the iframe (this is configurable. If the iframe should be hidden set this value to 0)
/*function GetBootsResults(bootsURL, searchText, pageNumber, navState)
{
    var srcURL = bootsURL + "?sourceType=all&query=" + searchText;
    
    if (pageNumber != null && pageNumber != "")
        srcURL = srcURL + "&pageNumber=" + pageNumber;
    
    if (navState != null && navState != "")
        srcURL = srcURL + "&navState=" + navState;
        
    if (document.getElementById("bootsIFrame"))
        document.getElementById("bootsIFrame").src = srcURL;
}
*/
