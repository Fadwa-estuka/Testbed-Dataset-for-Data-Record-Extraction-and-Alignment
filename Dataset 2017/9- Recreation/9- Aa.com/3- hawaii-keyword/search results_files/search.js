AAcom("utilities","ajax",function(AAUI){AAUI.util=new aa_Utilities();AAUI.siteSearch=function(){var self={};self.debug=false;self.search=function(){AAUI.onClick(".aa-sitesearch",function(e){e.preventDefault();self.getResults({q:$j(this).data("href")?$j(this).data("href"):$j("#siteSearch").val()});});AAUI.onClick(".pagination-link",function(e){e.preventDefault();self.getResults({q:$j(this).data("search-text"),s:$j(this).data("start-offset")});});var getQueryParameters=function(str){return(str||document.location.search).replace(/(^\?)/,"").split("&").map(function(n){return n=n.split("="),this[n[0]]=n[1],this;}.bind({}))[0];};if(location.search){self.getResults(getQueryParameters());}};self.log=function(message){if(self.debug){console.log(message);}};self.getResults=function(search){$j(".message-error").remove();AAUI.ajaxRequest({url:"/search/site",type:"GET",data:{q:search.q?search.q:"",s:search.s?search.s:0},dataType:"JSON",timeout:60000,busyContainer:$j("body"),busyMessage:AAUI.getProperty("loadingTxt"),onSuccess:function(response,status){self.log({status:status});self.log(response);if(status==="success"){var _searchText=response.searchText?response.searchText:search.q.replace("+"," ");if(utag.view!=="undefined"){utag.view({internal_search_keyword:_searchText});}$j("#siteSearch").val(_searchText);if(response.hasError){parseHandlebarsTemplate([{name:"viewErrorMessages",data:{errorMessage:AAUI.getProperty("errorMessage")}}]);}else{parseHandlebarsTemplate([{name:"viewSearchResults",data:{searchItems:response.searchItems,searchText:_searchText}},{name:"viewNoResults",data:{searchItems:response.searchItems,searchText:_searchText}},{name:"viewResultsCount",data:{startCount:response.startOffset,endCount:response.nextPageStartOffset?response.nextPageStartOffset:response.totalResultsFound,totalResultsFound:response.totalResultsFound,searchText:_searchText}},{name:"viewSpellingSuggestion",data:{hasSpellingSuggestion:response.hasSpellingSuggestion,spellingSuggestion:response.suggestedSpellingText,searchText:response.suggestedSpelling}},{name:"viewRelatedSearch",data:{hasRelatedSearch:response.hasRelatedSearch,relatedSearches:response.relatedSearches,searchText:_searchText}},{name:"viewSponsoredResults",data:{hasSponsoredResults:response.hasSponsoredSearch,sponsoredResults:response.sponsoredSearches}},{name:"viewSearchPagination",data:{previousPageStartOffset:response.previousPageStartOffset,nextPageStartOffset:response.nextPageStartOffset,hasRelatedSearch:response.hasRelatedSearch,hasPrevious:response.hasPrevious,hasNext:response.hasNext,hasPagination:response.hasNext||response.hasPrevious?true:false,searchText:_searchText}}]);}}else{if(response.hasError){self.log({Error:response});}}},onError:function(response,status){$j("#aa-viewSearchResults").html(response.responseText);self.log({onError:response});},onComplete:function(response,status){var response=response.responseJSON;$j("html, body").animate({scrollTop:0});if(response.totalResultsFound){if(response.startOffset>1){$j("#aa-viewSearchResults li:first a").focus();}else{$j(".siteSearchBar").focus();}}}});var addHandleBarsTemplate=function(templates){templates.forEach(function(template){handlebarWorker.postMessage({action:"addTemplate",key:template.name,data:$j("#"+template.name+"-template").html()});});};var parseHandlebarsTemplate=function(templates){templates.forEach(function(template){handlebarWorker.postMessage({action:"parseTemplate",key:template.name,data:template.data,templateContainer:"aa-"+template.name});});};var _templates=[{name:"viewSearchResults"},{name:"viewResultsCount"},{name:"viewSpellingSuggestion"},{name:"viewRelatedSearch"},{name:"viewSponsoredResults"},{name:"viewSearchPagination"},{name:"viewErrorMessages"},{name:"viewNoResults"}];if(window.Worker){var handlebarWorker=new Worker("/apps/common/js/jquery/aacom/webworker/handlebarWorker.js");handlebarWorker.onmessage=function(e){$j("#"+e.data.templateContainer).empty().html(e.data.html);};addHandleBarsTemplate(_templates);}else{$j.getScript("/apps/common/js/jquery/aacom/webworker/handlebarNoWorker.js",function(data,textStatus,jqxhr){handlebarWorker={postMessage:onMessage};addHandleBarsTemplate(_templates);});}};return self;}();AAUI.initPage=function(pageLoad){pageLoad=pageLoad||false;if(pageLoad){AAUI.siteSearch.search();}};$j(document).ready(function(){AAUI.initPage(true);});});