define(["jquery-1"],function(b){var a={config:{searchbox_selector:".se-searchbox__input__field",searchform_selector:"#searchboxDrawerForm",search_content_section_selector:"#search-content"},searchbox:null,searchForm:null,searchResults:null,getSearchBox:function(){if(this.searchbox===null){this.searchbox=b(this.config.searchbox_selector)}return this.searchbox},getSearchForm:function(){if(this.searchForm===null){this.searchForm=b(this.config.searchform_selector)}return this.searchForm},getSearchResults:function(){if(this.searchResults===null){this.searchResults=b("ol.search-results li")}return this.searchResults},getSearchContent:function(){return b(this.config.search_content_section_selector)},getSearchTerm:function(){return this.getSearchContent().attr("data-search-term")},getSearchResultCount:function(){var c=b("ol.search-results").first().attr("data-total-results");if(typeof c==="undefined"||c===null){return 0}else{return c}},hasExternalNews:function(){return b("section.external-news").length>0},hasCards:function(){return b("section.card-panel").length>0},getCardResultCount:function(){var c=b(".card-holder").data("card-count");return(typeof c==="undefined"||c===null)?0:c},enableTypingAnywhere:function(){a=this;b(document).on("keydown",function(d){if(!d){d=window.event}var c=d.keyCode;var f=b(".se-searchbox__input__field");if(!f.is(":focus")&&((c>=48&&c<=57)||(c>=65&&c<=90))&&!a.controlKeys(d)&&!b("input").is(":focus")){f.focus();f.val("");window.scrollTo(0,0)}})},controlKeys:function(c){if(c.shiftKey||c.altKey||c.ctrlKey||c.metaKey){return true}else{return false}},getParameterByName:function(d,c){d=d.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var f=new RegExp("[\\?&]"+d+"=([^&#]*)"),e=f.exec(c);return e==null?"":decodeURIComponent(e[1].replace(/\+/g," "))},hashCode:function(e){var g=0,d,f,c;if(e.length==0){return g}for(d=0,c=e.length;d<c;d++){f=e.charCodeAt(d);g=((g<<5)-g)+f;g|=0}return g},addClass:function(c,d){if(!this.hasClass(c,d)){c.className+=" "+d}},removeClass:function(c,d){if(this.hasClass(c,d)){c.className=c.className.replace(this.classRegex(d),"")}},hasClass:function(c,d){return !!c.className.match(this.classRegex(d))},classRegex:function(c){return new RegExp("(\\s|^)"+c+"(\\s|$)")}};return a});