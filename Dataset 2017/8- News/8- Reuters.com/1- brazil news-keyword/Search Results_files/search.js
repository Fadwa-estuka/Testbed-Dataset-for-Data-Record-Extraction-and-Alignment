if(typeof Reuters=="undefined"||Reuters==null)Reuters={};Reuters.namespace=function(){var a=arguments,d=null,b,c,e;for(b=0;b<a.length;b+=1){e=(""+a[b]).split(".");d=Reuters;for(c=e[0]=="Reuters"?1:0;c<e.length;c+=1)d[e[c]]=d[e[c]]||{},d=d[e[c]]}return d};Reuters.namespace("utils");Reuters.utils.newsOrStockSearchText="";
Reuters.utils.addLoadEvent=function(a,d){if(typeof a!="function")try{console.debug("function called addLoadEvent with a non-function param")}catch(b){}else{var c=window.onload;window.onload=typeof window.onload!="function"?d!==void 0?function(){a.call(d)}:a:function(){c();d!==void 0?a.call(d):a()}}};
Reuters.utils.enableSearchBox=function(a,d,b){var c=document.getElementById(a),e="",f,g="",h=document.getElementById("searchBar")==null?"#999;":"#666;";if(c){c.placeholder=$("body").hasClass("BETACN")?"\u68c0\u7d22\u8def\u900f\u7f51\u7ad9":$("body").hasClass("BETAJP")?"\u30ed\u30a4\u30bf\u30fc.co.jp\u3067\u691c\u7d22":$("body").hasClass("BETADE")?"Suche bei Reuters":"Search Reuters";c.focus();if(c.value==d)c.style.cssText="color: "+h;c.onfocus=function(){if(c.value==d)c.style.cssText="color: #fff;"};
c.onkeyup=function(b){if(a=="searchfield"){if(!b)b=window.event;if(b&&(b.keyCode===40||b.keyCode==38)){if(b=b.keyCode===40?1:-1,document.getElementById("suggestedSearchResults"))e==""?(f=e="sugg0",$("#"+e).addClass("selected")):(e=$("#suggestedSearchResults").find(".selected").attr("id"),f="sugg"+(parseInt(e.substr(4))+b)),$("#"+e).removeClass("selected"),document.getElementById(f)?($("#"+f).addClass("selected"),c.value=document.getElementById(f).getAttribute("suggSearch"),e=f):(e="",c.value=g)}else if(c.value!=
""){b=Reuters.info===null||typeof Reuters.info==="undefined"?"us":Reuters.utils.getRealEdition(Reuters.info.edition,"us");if(b=="cn"||b=="betacn"||b=="jp"||b=="betajp")return true;b="http://search."+b+".reuters.com/query/suggestion.do?q="+encodeURIComponent(c.value)+"&site="+b+"&resultsPerPage=5&callback=Reuters.utils.storeSuggestedSearchNewsResults";Reuters.utils.loadScript("suggestedSearchJSON",b);g=c.value;e=""}else if(c.value==""&&(b.keyCode==48||b.keyCode==8)){c.placeholder="Search Reuters";
if(document.getElementById("suggestedSearch"))document.getElementById("suggestedSearch").innerHTML="";e=""}}};if(b)c.onkeypress=function(a){if(!a)a=window.event;if(a&&(a.keyCode===13||a.which===13||a.charCode===13))return typeof b!="undefined"&&b(),false}}};
Reuters.utils.storeSuggestedSearchNewsResults=function(a){Reuters.utils.suggestedSearchResults=a;var d=a.edition=="US"?"www":a.edition.toLowerCase(),a=a.queryString,b=a.indexOf("."),a=b>0?a.substring(0,b):a,d="http://"+d+".reuters.com/do/marketDataAjax?type=search&searchType=symbol&search="+encodeURIComponent(a)+"&callback=Reuters.utils.storeSuggestedSearchSymbolResults";Reuters.utils.loadScript("suggestedSearchSymbolJSON",d)};
Reuters.utils.storeSuggestedSearchSymbolResults=function(a){Reuters.utils.suggestedSearchResults.quoteSearchResult=a;a=document.getElementById("searchfield").value;if(Reuters.utils.suggestedSearchResults.quoteSearchResult.length<=0)a="http://"+(Reuters.info===null||typeof Reuters.info==="undefined"?"www":Reuters.utils.getRealEdition(Reuters.info.edition,"www"))+".reuters.com/do/marketDataAjax?type=search&searchType=name&search="+encodeURIComponent(a)+"&callback=Reuters.utils.storeSuggestedSearchNameResults",
Reuters.utils.loadScript("suggestedSearchNameJSON",a);else{for(var d=[],b=0;b<Reuters.utils.suggestedSearchResults.quoteSearchResult.length;b++)Reuters.utils.suggestedSearchResults.quoteSearchResult[b].ric.toLowerCase().lastIndexOf(a.toLowerCase(),0)===0&&d.push(Reuters.utils.suggestedSearchResults.quoteSearchResult[b]);Reuters.utils.suggestedSearchResults.quoteSearchResult=d;Reuters.utils.loadSuggestedSearch(Reuters.utils.suggestedSearchResults)}};
Reuters.utils.storeSuggestedSearchNameResults=function(a){Reuters.utils.suggestedSearchResults.quoteSearchResult=a;Reuters.utils.loadSuggestedSearch(Reuters.utils.suggestedSearchResults)};
Reuters.utils.loadSuggestedSearch=function(a){function d(){var a=document.getElementById("searchBar"),b=document.createElement("div");b.id="suggestedSearch";var c=document.createElement("div");c.id="suggestedSearchResults";b.appendChild(c);document.getElementById("masthead")==null?a.appendChild(b):a.append(b)}function b(a,b){var c=document.createElement("div");c.id=a;if(b){var d=document.createElement("h5");d.innerHTML=b;c.appendChild(d)}return c}function c(b){var c=b.search(RegExp(a.queryString,
"i")),d=c+a.queryString.length;return c==-1?b:b.substr(0,c)+"<span class='query'>"+b.substr(c,a.queryString.length)+"</span>"+b.substr(d)}document.getElementById("suggestedSearch")||d();(function(){var d=document.createElement("div"),f=0;if(document.getElementById("suggestedSearchResults"))var g=document.getElementById("suggestedSearchResults");else g=document.createElement("div"),g.id="suggestedSearchResults",document.getElementById("suggestedSearch").appendChild(g);var h="http://"+(Reuters.info===
null||typeof Reuters.info==="undefined"?"www":Reuters.info.edition===null||typeof Reuters.info.edition==="undefined"?"www":Reuters.utils.getRealEdition(Reuters.info.edition,"www"))+".reuters.com";if(a.newsSearchResult.length>=1){var k=b("newsResults",""),j=document.createElement("ul");j.id="newsResultsList";k.appendChild(j);for(i=0;i<a.newsSearchResult.length;i++)result=a.newsSearchResult[i],li=document.createElement("li"),li.id="sugg"+f,li.setAttribute("suggSearch",result.queryString),li.innerHTML=
'<a href="'+h+"/search/news?blob="+result.queryString+'" onmousedown=dataLayer.push({"event":"click-event","category":"navigation","action":"search","label":$(this).attr("href")});>'+c(result.queryString)+"</a>",j.appendChild(li),f++;d.appendChild(k)}if(a.quoteSearchResult.length>=1){k=b("search-company-results","");j=document.createElement("ul");j.id="search-company-list";k.appendChild(j);for(i=0;i<a.quoteSearchResult.length&&i<5;i++)result=a.quoteSearchResult[i],tr=document.createElement("li"),
tr.innerHTML='<a href="'+h+"/finance/stocks/overview?symbol="+result.ric+'"><div class="ric">'+c(result.ric)+'</div><div class="exchange">'+result.exchange+"</div></a>",tr.id="sugg"+f,tr.setAttribute("suggSearch",result.ric),j.appendChild(tr),f++;stockLink=document.createElement("div");stockLink.id="search-company";stockLink.innerHTML='<a href="'+h+"/finance/stocks/lookup?search="+a.orignalqueryString.replace(/ /g,"+")+'&searchType=any&sortBy=&dateRange=&comSortBy=marketcap">More Stocks Results</a>';
k.appendChild(stockLink);d.appendChild(k)}g.innerHTML=d.innerHTML})()};Reuters.utils.loadScript=function(a,d){var b=document.getElementById(a),c=document.getElementsByTagName("head")[0];b!=null&&c.removeChild&&c.removeChild(b);if(document.createElement)b=document.createElement("script"),b.id=a,b.setAttribute("type","text/javascript"),b.setAttribute("src",Reuters.utils.convertStaticUrl(d)),b.setAttribute("charset","UTF-8");c.appendChild(b)};
Reuters.utils.convertStaticUrl=function(a){try{if(!parallelMediaHosts||parallelMediaHosts===null||typeof parallelMediaHosts==="undefined")return a;var d=parallelMediaHosts;if(a.indexOf("/resources")==0&&d instanceof Array&&d.length>0){var b=a.lastIndexOf("/"),c=a.toLowerCase().substring(b+1),e=c.lastIndexOf(".");e>0&&(c=c.substring(0,e));var f=c.lastIndexOf("-min");f>0&&(c=c.substring(0,f));var g=c.charCodeAt(c.length-1)%d.length;return"http://"+d[g]+a}}catch(h){console.debug("convert static url error ! "+
h),console.debug(a),console.debug(typeof a)}return a};Reuters.utils.addLoadEvent(function(){Reuters.utils.enableSearchBox("searchfield",Reuters.utils.newsOrStockSearchText)});Reuters.namespace("lang");Reuters.lang.isEmpty=function(a){return a===null||typeof a==="undefined"||typeof a=="string"&&a.length<=0};Reuters.lang.isNotEmpty=function(a){return!Reuters.lang.isEmpty(a)};Reuters.namespace("lang.Arrays");
Reuters.lang.Arrays.remove=function(a,d){if(Reuters.lang.isNotEmpty(a)&&Reuters.lang.isNotEmpty(d))for(var b=0;b<a.length;b++)if(a[b]==d)return a.splice(b,1),b};trace=function(){try{console.debug.apply(console,arguments)}catch(a){try{console.debug=function(){for(var a=0;a<arguments.length;a++)console.log(arguments[a])},console.debug.apply(console,arguments)}catch(d){}}};
Reuters.utils.submitSearch=function(){if(arguments.length==0)var a=document.getElementById("searchfield"),d=Reuters.utils.newsOrStockSearchText;else a=document.getElementById(arguments[0]),d=arguments[1];a=a.value;return a==""||a==d?false:true};Reuters.utils.submitSearchNews=function(){var a=document.getElementById("newsSearchField").value;return a==""||a=="Keyword"?false:true};
Reuters.utils.submitSearchStocks=function(){var a=document.getElementById("stockSearchField").value;return a==""||a=="Symbol"?false:true};Reuters.utils.submitSearchMedia=function(){var a=document.getElementById("multimediaSearchfield").value;return a==""||a=="Search Multimedia"?false:true};Reuters.utils.submitSearchVideo=function(){var a=document.getElementById("videoSearchField").value;return a==""||a=="Search Videos"?false:true};
Reuters.utils.getRealEdition=function(a,d){var b=a.toLowerCase();b.search(/betaus/i)>=0?b=d:b.search(/betacn/i)>=0?b="cn":b.search(/betajp/i)>=0&&(b="jp");return b};