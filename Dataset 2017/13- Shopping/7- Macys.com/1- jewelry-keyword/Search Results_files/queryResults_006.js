MACYS.log("loading file: keywordsearchpath.js");MACYS.namespace("MACYS.KeywordSearchPath");MACYS.KeywordSearchPath.keywordSearch=function(a){this.searchPathKeyword=escape(a);this.autoCompleteKeyword=MACYS.coremetrics.Storage.getParamValue("cm_kws_ac");this.lastSearchesKeyword=MACYS.coremetrics.Storage.getParamValue("cm_kws_ls");if(this.autoCompleteKeyword){this.autoCompleteKeyword=escape(this.autoCompleteKeyword)}if(this.lastSearchesKeyword){this.lastSearchesKeyword=escape(this.lastSearchesKeyword)}};MACYS.KeywordSearchPath.keywordSearch.prototype.getSearchPathKeyword=function(){return this.searchPathKeyword};MACYS.KeywordSearchPath.keywordSearch.prototype.getAutoCompleteKeyword=function(){return this.autoCompleteKeyword};MACYS.KeywordSearchPath.keywordSearch.prototype.getLastSearchesKeyword=function(){return this.lastSearchesKeyword};MACYS.KeywordSearchPath.keywordSearch.prototype.initKeywordSearchPath=function(){var a="[\\?|&]+(id=|CategoryID=)";var b="!fn=";var c=function(h,g,e){var d="&cm_kws_path=";var f=this.href;if(f.match("(cm_kws=|cm_kws_path=)")==null&&f.search(a)!==-1){d=d+MACYS.KeywordSearchPath.keywordsearch.getSearchPathKeyword();if(MACYS.KeywordSearchPath.keywordsearch.autoCompleteKeyword){d=d+"&cm_kws_ac="+MACYS.KeywordSearchPath.keywordsearch.autoCompleteKeyword}if(f.indexOf(b)!==-1){f=f.replace("#",(d+"#"))}else{f=f+d}this.href=f}};YAHOO.util.Event.delegate("localNavigationContainer","mousedown",c,"a");YAHOO.util.Event.delegate("localContentContainer","mousedown",c,"#catSplash .row:not(.rowThumbnail) a, area, #widgetContentId a, .canvas .row:not(.rowThumbnail) a")};YAHOO.util.Event.onDOMReady(function(){var a=MACYS.coremetrics.Storage.getParamValue("cm_kws")||YAHOO.util.History.getQueryStringParameter("keyword")||YAHOO.util.History.getQueryStringParameter("cm_kws_path")||YAHOO.util.History.getQueryStringParameter("kws");if(a){MACYS.KeywordSearchPath.keywordsearch=new MACYS.KeywordSearchPath.keywordSearch(a);MACYS.KeywordSearchPath.keywordsearch.initKeywordSearchPath();MACYS.KeywordSearchPath.kwsFromCache=MACYS.coremetrics.Storage.getParamFromCache("cm_kws")?true:false;MACYS.coremetrics.Storage.clearFromCache()}});
