// global vars
var slr_numArticles, slr_numPhotos, slr_numVideo, slr_numAll = 0;	// category counts
var slr_curPage = 0;									// currently selected page
var slr_start = 0;										// starting search result
var slr_numRows = 20;									// number of search results to show on a page
var slr_fragSize = 300;									// the result summary length
var slr_curSearchTerm = "";								// current search term
var slr_curType = "AR";									// current search category, AR = all results, A = articles, P = vhotos, V = video
var slr_resultList = null;								// array holding the list of results
var slr_highlightList = null;							// array holding highlighted content data
var slr_isPagerInit = false;							// boolean indicating if the pager is initialized
var slr_curSort;										// current sort
var slr_emptyTerm = 1;
var slr_noResults = 2;
var slr_requestError = 3;
var slr_maxScore;
/***
* function initSolrSearch(searchTerm)
* This function is called when the page loads. It kicks off the initial search
* 
* @param searchTerm
*/
function solrInit(searchTerm) {
if (searchTerm == null) {
solrSetMessage(slr_emptyTerm);
$(".searchResultsContainer ul").html("");
} else {
slr_start=0;
slr_isPagerInit = false;
$("#resultsMessage").html("");
// call solrSearch
solrSearch(searchTerm);
// now that we have the results, call function to set the pagination
solrGetPagination(slr_numAll);
// needed for jscrollpane
//wimScrollContent.reinitialise();
}
}
/***
* function solrSearch(searchTerm, type)
* This function makes the ajax call to solr to perform the search
* 
* @param searchTerm - term we are searching for
* @param type - type of results to return (all results, photos, video, articles)
* @returns
*/
function solrSearch(searchTerm) {
//facet query is used to get the counts for the categories.
//var facetQuery = 'facet=true&facet.query=Metatags:"resulttype:A"&facet.query=Metatags:"resulttype:P"&facet.query=Metatags:"resulttype:V"';
// set the global vars
slr_curSearchTerm = searchTerm;		
var sort = "";
if (slr_curSort!=undefined) {
sort="&sort="+slr_curSort+" desc";
}
if (searchTerm.length > 0 && searchTerm!="Enter Keywords" && searchTerm!="Search") {
// make the ajax call
var searchUrl = slr_searchContext+"select?indent=on&version=2.2&q=(htsearch:Players "+searchTerm+"~0.5 AND title:"+searchTerm+")^5 OR (htsearch:"+searchTerm+" OR title:"+searchTerm+") OR "+searchTerm+"&start="+slr_start+"&rows="+slr_numRows+"&fl=title,url,tstamp,mtime,htsearch,Metatags,score&qt=&wt=json&explainOther=&hl=on&hl.fl=title,url,noindexcontent&hl.fragsize="+slr_fragSize + sort;
$.ajax( {
url : encodeURI(searchUrl),
type :'GET',
timeout :10000,
dataType :'json',
contentType : 'application/json',
cache : true,
async :false,
error : function(jqXHR, textStatus, errorThrown) {
solrSetMessage(slr_requestError);
},
success: function (data, textStatus, jqXHR) {
// if we get data back, then process the results
slr_resultList = null;
slr_numAll = data.response.numFound;
slr_maxScore = data.response.maxScore;
if (data.response.numFound > 0) {
// set the resultList array
slr_resultList = data.response.docs;
// set the highlightList array
slr_highlightList = data.highlighting;
// write the results
solrWriteResults();
} else {
solrSetMessage(slr_noResults);
$(".searchResultsContainer ul").html("");
}
}
});
} else {
solrSetMessage(slr_emptyTerm);
}
}
function solrSetMessage(messageType) {
switch (messageType) {
case slr_emptyTerm:
$("#resultsMessage").html("You must enter a search term.");
$("#resultsMessage").show();
break;
case slr_noResults:
$("#resultsMessage").html("There were no search results for '"+slr_curSearchTerm+"'. Please try your search again.");
$("#resultsMessage").show();
break;
case slr_requestError:
$("#resultsMessage").html("Unable to retrieve results. Please try again.");
$("#resultsMessage").show();
break;
default:
$("#resultsMessage").html("Unable to retrieve results. Please try again.");
$("#resultsMessage").show();
break;
}
$(".searchResultsContainer").show();
}
/***
* function solrGetPagination
* This function callse the pagination plugin
* 
* @param total	// total number of items to paginate
* @returns
*/
function solrGetPagination(total) {
// we don't need this variable anymore.
//var numPages = total%slr_numRows==0?parseInt(total/slr_numRows):parseInt(total/slr_numRows)+1;
try {
var myPager = $(".paginationContainer").paging(total, {
format: "< nnnnnnnnnnn >",	// this format string gives me a next, previous and 11 page indexes at a time
perpage: slr_numRows,			// number of rows to display on a page
lapping: 0,					// i have no idea!
page: 1,					// start at page 1. The pagination code is a 1 based index.
onSelect: solrPaginationSelect,		// callback function for selecting a page, next, prev
onFormat: solrPaginationFormat		// callback function for formatting the format string in the format option
});
$(".paginationContainer").show();
} catch (e) {
//console.info(e);
}
}
/***
* function solrPaginationFormat(type)
* This is the handler for formatting the pagination elements
* 
* @param type	// refers to the type of pagination element
* @returns
*/
function solrPaginationFormat(type) {
switch (type) {
case 'block':
// these are the page numbers
var retVal = "";
if (!this.active) {
retVal = '<span class="disabled">' + this.value + '</span>';
} else if (this.value != this.page) {
retVal = '<a href="#' + this.value + '" class="plink">' + this.value + '</a>';
} else {
retVal = '<span class="current plink">' + this.value + '</span>';
}
return retVal;
case 'next':
// next link
if (this.active) {
return '<a href="#' + this.value + '" class="next nextLink">Next</a>';
}
return ""; 
case 'prev':
// previous link
if (this.active) {
return '<a href="#' + this.value + '" class="prev prevLink">Previous</a>';
}
return ""; 
case 'fill':
// not quite sure what fill is for
if (this.active) {
return "...";
}
return "";
default:
return "";
}
}
/***
* function solrGetResultsTotal(type)
* This function get the total results for the category
* 
* @param type	- the category type
* @returns
*/
function solrGetResultsTotal(type) {
if (type == "A") {
return numArticles;
} else if (type == "P") {
return numPhotos;
} else if (type == "V") {
return numVideo;
} else {
return numAll;
}
}
/***
* function solrPaginationSelect(page)
* This is the handler function for selecting a page. remember that for the pagination the page index starts at 1 and solr results index starts at 0
* 
* @param page	// page number
* @returns
*/
function solrPaginationSelect(page) {
slr_curPage = page-1;	// set the current page. we will use a 0 base index
slr_start = slr_curPage * slr_numRows;	// set the start index for the solr query
// only call the solr search if we are not initializing the pagination
if (slr_isPagerInit) {
$(".searchResultsContainer").hide();
solrSearch(slr_curSearchTerm);
$(".searchResultsContainer").show();
}
// the pager is initialized so set to true
slr_isPagerInit=true;
// now set the count message
var startPoint = slr_start+1;
var endPoint = startPoint + slr_resultList.length-1;
$("#resultsMessage").html("Documents " + startPoint + " - " + endPoint + " of " + slr_numAll + " matches").show();
// This was needed for wim jscrollpane
//$(window).resize();
//wimScrollContent.reinitialise();
return false;
}
/***
* function MetatagsObject
* Object that holds our custom metatag data
* 
* @returns
*/
function solrMetatagsObject () {
this.resulttype = null;
this.resultthumb = null;
this.resultcaption = null;
this.resultlink = null;
}
/***
* function solrGetMetatags(metadata)
* This function creates a metatagObject from the raw metadata
* 
* @param metadata
* @returns
*/
function solrGetMetatags (metadata) {
var metaObj = new solrMetatagsObject;
for (var i=0; i<metadata.length; i++) {
var item = metadata[i].split(":");
if (item.length==2) {
eval("metaObj[item[0]] = item[1]");
} else if (item.length ==3) {
eval("metaObj[item[0]] = item[1]+':'+item[2]");
}
}
return metaObj;
}
/***
* function solrWriteResults
* This function loops throught the result data and writes the results
* 
* @returns
*/
function solrWriteResults() {
var resultsHtml = "";
for (var i=0; i<slr_resultList.length;i++) {
var result = slr_resultList[i];
var metatags = null;
if (result.Metatags != undefined) {
metatags = solrGetMetatags(result.Metatags);
}
var hightlightKey = result.url;
var highlight = slr_highlightList[hightlightKey];
resultsHtml+=solrGetPlainResultHtml(result,highlight,metatags,i);
}
$(".searchResultsContainer ul").html(resultsHtml);
$(".searchResultsContainer").css("visibility","visible");
}
/***
* function solrGetPlainResultHtml(result,highlight,metatags)
* This function constructs the html for a result on the Articles or All results tab
* 
* @param result	// result object
* @param highlight	// highlight object
* @param metatags	// metatags objec
* @returns
*/
function solrGetPlainResultHtml(result,highlight,metatags,index) {
var html="";
html+="<li>";
if (metatags != null && metatags != undefined && metatags.resultthumb != "" && metatags.resultthumb != null) {
html+=" <div class='thumb'>";
html+=" <img class='photo' width='138' height='78' border='0' alt='thumbnail' src='"+metatags.resultthumb+"'>";
html+=" </div>";
}
html+="	<div class='title'><a href='"+result.url+"'>"+result.htsearch+"</a>"+getSearchWeight(result.score,index)+"</div>";
html+="	<div class='summary'>";
html+=" <span class='date'>"+solrGetDate(result)+"</span>";
html+=" &nbsp;&nbsp;" + highlight.noindexcontent + " ...";
html+=" </div>";
html+="</li>";
return html;
}
function getSearchWeight(score,index) {
var html = "";
// changing score calculation to decrease by index instead of using the score from solr.
// var scoreNum = ((score/slr_maxScore) * 10).toFixed(0);
var scoreNum = (((slr_numAll - (slr_start + index))/slr_numAll) * 10).toFixed(0);
for (var i=0; i<scoreNum; i++) {
html+='<img class="star" src="/images/search/star.gif" width="14" height="14" alt="" border="0" />';
}
return html;;
}
function solrGetDate(result) {
//result.mtime="20120209173006";
var m_names = new Array("Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec");
if (result.mtime == undefined || result.mtime==0) {
// we don't have mtime, so use tstamp
var year = result.tstamp.substring(0,4);
var month = result.tstamp.substring(5,7)-1;
var day = result.tstamp.substring(8,10);
var d = new Date(year,month,day);
//return d.toLocaleDateString();
return (d.getDate() + " " + m_names[d.getMonth()]);
} else {
// use mtime
var d = new Date(
result.mtime.substring(0,4),
parseInt(result.mtime.substring(4,6),10)-1,
parseInt(result.mtime.substring(6,8),10),
parseInt(result.mtime.substring(8,10),10),
parseInt(result.mtime.substring(10,12),10),
parseInt(result.mtime.substring(12,14),10)
);
//return d.toLocaleDateString(); // + " " + d.toLocaleTimeString();
return (d.getDate() + " " + m_names[d.getMonth()]);
}
}
/***
* Jquery code
*/
$(document).ready(function(){
/***
* Jquery click events
*/
var newQuery = qsParse.get("query");
// initialize the page with the inital search
if (newQuery == "Search" || newQuery=="Enter Keywords" || newQuery=="" || newQuery==null) {
//$('#ksearch #query').val("Enter Keywords");
$("#searchResultsPage #query").val("Enter Keywords");
solrInit("");
} else {
// $('#ksearch #query').val(newQuery);
$("#searchResultsPage #query").val(newQuery)
solrInit(newQuery);
}
$("#searchContainer").click(function() {
if ($("#searchOverlayContainer").hasClass("active")) {
$("#searchOverlayContainer").removeClass("active");
measureApp("site","search","close");
} else {
$("#searchOverlayContainer").addClass("active");
//$("#searchOverlayContainer input").focus();
measureApp("site","search","open");
}
});
$("#searchOverlayContainer").click(function(e) {
e.stopPropagation();
});
if(site.indexOf("/search/results.html") != -1){
s.prop7=newQuery;
s.linkTrackVars='prop7';
}
});