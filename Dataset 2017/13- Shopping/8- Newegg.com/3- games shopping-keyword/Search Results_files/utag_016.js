//tealium universal tag - utag.36 ut4.0.201611291930, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{if(!utag.libloader){utag.libloader=function(src,handler,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;if(typeof handler=='function'){b.handlerFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.handlerFlag){b.handlerFlag=1;handler()}};b.onload=function(){if(!b.handlerFlag){b.handlerFlag=1;handler()}};a.getElementsByTagName('head')[0].appendChild(b)}}};(function(id,loader,u){u=utag.o[loader].sender[id]={};u.ev={'view':1};u.map={};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){var data={};for(d in utag.loader.GV(u.map)){if(typeof b[d]!='undefined'){e=u.map[d].split(',');for(f=0;f<e.length;f++){data[e[f]]=b[d]}}}
}};try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('36','newegg.newegg.com');}catch(e){}
function getUrlParamStu(name){var reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");var r=window.location.search.substr(1).match(reg);if(r!=null)return unescape(r[2]);return null;}
function neg_ajax_refresh_view(){if(typeof HLLibrary==='undefined')
return;var b=utag_data;if(b.site_region!="USA"||b.site_currency!="USD")
return;if(getUrlParamStu('SpeTabStoreType')==='784')
return;if(!(typeof b.hl_taxonomy==='undefined')){var taxonomy=b.hl_taxonomy.toUpperCase();var black_list=new Array();for(var i=0;i<black_list.length;i++){if(taxonomy===black_list[i]){console.log("Hooklogic event bypassed for blocking subcategory.");return;}}}
var keyword="",keyword_outer="",keyword_history="",keyword_inner="";if(typeof b.search_keyword!='undefined')
keyword_outer=b.search_keyword+" ";if(typeof b["qp.hisindesc"]!='undefined')
keyword_history=b["qp.hisindesc"]+" ";if(typeof b.search_keyword_inner!='undefined')
keyword_inner=b.search_keyword_inner;keyword=keyword_outer.concat(keyword_history,keyword_inner);if(keyword&&keyword.toUpperCase().substring(0,4)=="PPSS")
return;if(keyword&&keyword.toUpperCase().indexOf('WINDOWS 10')>-1)
return;var url=window.location.href;if(url.indexOf('N=8000')>-1||url.indexOf('%208000&')>-1||url.indexOf('%208000%20')>-1)
return;if(url.indexOf('N=4825')>-1||url.indexOf('%204825&')>-1||url.indexOf('%204825%20')>-1)
return;HLLibrary.reset();HLLibrary.setProperty("clientId","132");if(b.search_keyword){HLLibrary.setProperty("pageType","search");}else{HLLibrary.setProperty("pageType","nav");}
HLLibrary.setProperty("pUserId",b.user_nvtc);HLLibrary.setProperty("cUserId",b.user_name);if(typeof b.hl_taxonomy!='undefined'){HLLibrary.setProperty("taxonomy",b.hl_taxonomy);HLLibrary.setProperty("fulltaxonomy",b.hl_fulltaxonomy);HLLibrary.setProperty("fulltaxonomy",b.hl_fulltaxonomy);}
HLLibrary.setProperty("kw",keyword);if(!(typeof b.hl_filters==='undefined')){for(var filter_name in b.hl_filters){HLLibrary.setFilter(filter_name,b.hl_filters[filter_name]);}}
if(typeof b.hl_brand!='undefined'){HLLibrary.setProperty("brand",b.hl_brand.replace(',','|'));}
if(typeof b.hl_minprice!='undefined'){HLLibrary.setProperty("minPrice",b.hl_minprice);HLLibrary.setProperty("maxPrice",b.hl_maxprice);}
HLLibrary.setProperty("organicSKUs",b.organic_skus);var leftCount=b.search_results-(b.page_number-1)*b.page_size;if(leftCount>b.page_size){HLLibrary.setProperty("pCount",b.page_size);}else{HLLibrary.setProperty("pCount",leftCount);}
HLLibrary.setProperty("pgsize",b.page_size);HLLibrary.setProperty("pgn",b.page_number);HLLibrary.setProperty("minOrganic","8");HLLibrary.setProperty("minAds","1");HLLibrary.setProperty("maxAds","4");HLLibrary.setProperty("creative","organic_M-C-IG_TI_1-4_In-Grid");HLLibrary.setProperty("clientAdvertiserId","1");HLLibrary.setLocation("hl_2_999");HLLibrary.submit();HLLibrary.reset();HLLibrary.setProperty("clientId","132");if(b.search_keyword){HLLibrary.setProperty("pageType","search");}else{HLLibrary.setProperty("pageType","nav");}
HLLibrary.setProperty("pUserId",b.user_nvtc);HLLibrary.setProperty("cUserId",b.user_name);if(typeof b.hl_taxonomy!='undefined'){HLLibrary.setProperty("taxonomy",b.hl_taxonomy);HLLibrary.setProperty("fulltaxonomy",b.hl_fulltaxonomy);}
HLLibrary.setProperty("kw",keyword);if(!(typeof b.hl_filters==='undefined')){for(var filter_name in b.hl_filters){HLLibrary.setFilter(filter_name,b.hl_filters[filter_name]);}}
if(typeof b.hl_brand!='undefined'){HLLibrary.setProperty("brand",b.hl_brand.replace(',','|'));}
if(typeof b.hl_minprice!='undefined'){HLLibrary.setProperty("minPrice",b.hl_minprice);HLLibrary.setProperty("maxPrice",b.hl_maxprice);}
HLLibrary.setProperty("organicSKUs",b.organic_skus);leftCount=b.search_results-(b.page_number-1)*b.page_size;if(leftCount>b.page_size){HLLibrary.setProperty("pCount",b.page_size);}else{HLLibrary.setProperty("pCount",leftCount);}
HLLibrary.setProperty("pgsize",b.page_size);HLLibrary.setProperty("pgn",parseInt(b.page_number)+1);HLLibrary.setProperty("minOrganic","3");HLLibrary.setProperty("minAds","1");HLLibrary.setProperty("maxAds","5");HLLibrary.setProperty("creative","160x645_M-R-OG_TI_1-5_Right-Rail");HLLibrary.setLocation("hl_1_999");HLLibrary.submit();}
function neg_ajax_refresh_view_new(){if(typeof HLLibrary==='undefined')
return;var b=utag_data;if(b.site_region!="USA"||b.site_currency!="USD")
return;if(getUrlParamStu('SpeTabStoreType')==='784')
return;if(!(typeof b.hl_taxonomy==='undefined')){var taxonomy=b.hl_taxonomy.toUpperCase();var black_list=new Array();for(var i=0;i<black_list.length;i++){if(taxonomy===black_list[i]){console.log("Hooklogic event bypassed for blocking subcategory.");return;}}}
var keyword="",keyword_outer="",keyword_history="",keyword_inner="";if(typeof b.search_keyword!='undefined')
keyword_outer=b.search_keyword+" ";if(typeof b["qp.hisindesc"]!='undefined')
keyword_history=b["qp.hisindesc"]+" ";if(typeof b.search_keyword_inner!='undefined')
keyword_inner=b.search_keyword_inner;keyword=keyword_outer.concat(keyword_history,keyword_inner);if(keyword&&keyword.toUpperCase().substring(0,4)=="PPSS")
return;if(keyword&&keyword.toUpperCase().indexOf('WINDOWS 10')>-1)
return;var url=window.location.href;if(url.indexOf('N=8000')>-1||url.indexOf('%208000&')>-1||url.indexOf('%208000%20')>-1)
return;if(url.indexOf('N=4825')>-1||url.indexOf('%204825&')>-1||url.indexOf('%204825%20')>-1)
return;if(url.indexOf("Order=BESTMATCH")>-1||url.indexOf("Order=FEATURED")>-1){var layout=Web.StateManager.Cookies.get(Web.StateManager.Cookies.Name.PRDLIST,"Layout");if(layout=="l"){layout="list";}else{layout="grid";}
var minRating=null;if(url.indexOf("N=4111")>-1||url.indexOf("%204111&")>-1||url.indexOf("%204111%20")>-1){minRating="1";}else if(url.indexOf("N=4112")>-1||url.indexOf("%204112&")>-1||url.indexOf("%204112%20")>-1){minRating="2";}else if(url.indexOf("N=4113")>-1||url.indexOf("%204113&")>-1||url.indexOf("%204113%20")>-1){minRating="3";}else if(url.indexOf("N=4114")>-1||url.indexOf("%204114&")>-1||url.indexOf("%204114%20")>-1){minRating="4";}else if(url.indexOf("N=4115")>-1||url.indexOf("%204115&")>-1||url.indexOf("%204115%20")>-1){minRating="5";}
var topLibrary=HLLibrary.newRequest();topLibrary.setModule("DesktopListingInGrid");if(b.search_keyword){topLibrary.setProperty("hlPageType","S");}else{topLibrary.setProperty("hlPageType","B");}
if(typeof b.hl_taxonomy!='undefined'){topLibrary.setTaxonomy(b.hl_taxonomy);}
topLibrary.setKeyword(keyword);if(!(typeof b.hl_filters==='undefined')){for(var filter_name in b.hl_filters){if(filter_name!="customer_ratings"){topLibrary.setFilter(filter_name,b.hl_filters[filter_name]);}}}
topLibrary.setProperty("cUserId",b.user_name);topLibrary.setProperty("view",layout);topLibrary.setProperty("allowMarketplace","0");if(typeof b.hl_brand!='undefined'){topLibrary.setProperty("brand",b.hl_brand.replace(/Manufacturer-:-/g,"").replace(',','|'));}
var leftCount=b.search_results-(b.page_number-1)*b.page_size;if(leftCount>b.page_size){topLibrary.setProperty("pCount",b.page_size);}else{topLibrary.setProperty("pCount",leftCount);}
topLibrary.setProperty("organicSKUs",b.organic_skus);topLibrary.setProperty("pgSize",b.page_size);topLibrary.setProperty("pgN",b.page_number);if(typeof b.hl_minprice!='undefined'){topLibrary.setProperty("minPrice",b.hl_minprice);}
if(typeof b.hl_maxprice!='undefined'){topLibrary.setProperty("maxPrice",b.hl_maxprice);}
if(minRating){topLibrary.setProperty("minRating",minRating);}
topLibrary._set("item_cell_selector","div.page-section-inner div.list-wrap div.items-view:last");var cells=jQuery(".items-view .item-container");var featureItemCellCount=0;if(cells&&cells.length>0){if(jQuery(cells).first().hasClass("is-feature-item")){featureItemCellCount=1;}}
var normaltemCount=cells.length-featureItemCellCount;var tagPreItemConfig=Biz.ProductList.Config.HooklogicAds.tagPosition-1;var tagPreItem=normaltemCount<tagPreItemConfig?normaltemCount:tagPreItemConfig;var adsIndex=tagPreItem+featureItemCellCount;topLibrary._set("position",adsIndex+"");topLibrary.submit();}
var rightLibrary=HLLibrary.newRequest();rightLibrary.setModule("DesktopListingRightRail");if(b.search_keyword){rightLibrary.setProperty("hlPageType","S");}else{rightLibrary.setProperty("hlPageType","B");}
if(typeof b.hl_taxonomy!='undefined'){rightLibrary.setTaxonomy(b.hl_taxonomy);}
rightLibrary.setKeyword(keyword);if(!(typeof b.hl_filters==='undefined')){for(var filter_name in b.hl_filters){if(filter_name!="customer_ratings"){rightLibrary.setFilter(filter_name,b.hl_filters[filter_name]);}}}
rightLibrary.setProperty("cUserId",b.user_name);rightLibrary.setProperty("view",layout);rightLibrary.setProperty("allowMarketplace","1");if(typeof b.hl_brand!='undefined'){rightLibrary.setProperty("brand",b.hl_brand.replace(/Manufacturer-:-/g,"").replace(',','|'));}
var leftCount=b.search_results-(b.page_number-1)*b.page_size;if(leftCount>b.page_size){rightLibrary.setProperty("pCount",b.page_size);}else{rightLibrary.setProperty("pCount",leftCount);}
rightLibrary.setProperty("organicSKUs",b.organic_skus);rightLibrary.setProperty("pgSize",b.page_size);rightLibrary.setProperty("pgN",parseInt(b.page_number)+1);if(typeof b.hl_minprice!='undefined'){rightLibrary.setProperty("minPrice",b.hl_minprice);}
if(typeof b.hl_maxprice!='undefined'){rightLibrary.setProperty("maxPrice",b.hl_maxprice);}
if(minRating){rightLibrary.setProperty("minRating",minRating);}
rightLibrary.submit("hl_1_999");}
if(window.location.href.indexOf('e3wwwtest.newegg.com')>-1){(function(){var p=document.location.protocol;if(p=="http:"||p=="https:"){var m=document.createElement('script');m.type='text/javascript';m.async=true;m.src=(p=="https:"?"https://":"http://")+"uat1.hlserve.com/Delivery/ClientPaths/Library/hook.js?apiKey=6ef21daa-7dac-4e51-9d4d-906c52cc3bc0&channel=web";var s=document.getElementsByTagName('head')[0].childNodes[0];s.parentNode.insertBefore(m,s);m.onload=function(){neg_ajax_refresh_view_new();}}}());}else if(jQuery("#productListVersion").val()==2016){(function(){var p=document.location.protocol;if(p=="http:"||p=="https:"){var m=document.createElement('script');m.type='text/javascript';m.async=true;m.src=(p=="https:"?"https://":"http://")+"www.hlserve.com/Delivery/ClientPaths/Library/hook.js?apiKey=6ef21daa-7dac-4e51-9d4d-906c52cc3bc0&channel=web";var s=document.getElementsByTagName('head')[0].childNodes[0];s.parentNode.insertBefore(m,s);m.onload=function(){neg_ajax_refresh_view_new();}}}());}else{(function(){var p=document.location.protocol;if(p=="http:"||p=="https:"){var m=document.createElement('script');m.type='text/javascript';m.async=true;m.src=(p=="https:"?"https://":"http://")+"www.hlserve.com/Delivery/ClientPaths/Library/hook.js";var s=document.getElementsByTagName('head')[0].childNodes[0];s.parentNode.insertBefore(m,s);m.onload=function(){neg_ajax_refresh_view();}}}());}
