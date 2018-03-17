//WebMD Search
var SearchResults = {
WebSearchSuggestion:function(term,callback,context){return new ajax_request(this.url + '?_method=WebSearchSuggestion&_session=no','term=' + enc(term),callback, context);},
GetMoreRefinements:function(query,nval,rootVal,navState,brand,callback,context){return new ajax_request(this.url + '?_method=GetMoreRefinements&_session=no','query=' + enc(query)+ '\r\nnval=' + enc(nval)+ '\r\nrootVal=' + enc(rootVal)+ '\r\nnavState=' + enc(navState)+ '\r\nbrand=' + enc(brand),callback, context);},
url:'images/search/ajax/WebMD.Consumer.SearchFEComponents.SearchAjaxFactory,WebMD.Search.SearchFrontEnd.ashx'
}
