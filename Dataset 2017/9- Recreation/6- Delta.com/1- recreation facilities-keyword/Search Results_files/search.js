function updatePopularHyperlinks(a){var b="/dlsearch/index.jsp?";$.each($(".popularLink"),function(c,d){var e=$(this).text();d.href=b+"searchText="+e+"&category="+a})}function displayPaginationBar(a){$("#resultDisplayed").html(a)}function paginationlinks(){n=totalnoOfChild-1,n%10==0?n/=10:n=Math.ceil(n/10),1==totalnoOfChild?($("#paginationBlock").hide(),$("#resultsList").hide()):10>=totalnoOfChild-1?0==showBestMatchFlag?($("#paginationLink").hide(),displayPaginationBar(totalnoOfChild),$("#maxResultCount").html(totalnoOfChild),$("#withoutViewLink").remove(),$("#withViewLink").remove(),$("#maxResultCount").after("<label id='withoutViewLink'>&nbsp;Results &nbsp;&nbsp;&nbsp;</label>")):($("#paginationLink").hide(),displayPaginationBar(totalnoOfChild-1),$("#maxResultCount").html(totalnoOfChild-1),$("#withoutViewLink").remove(),$("#maxResultCount").after("<label id='withoutViewLink'>&nbsp;Results &nbsp;&nbsp;&nbsp;</label>")):totalnoOfChild>10&&0==showBestMatchFlag?($("#paginationBlock").show(),$("#paginationLink").show(),displayPaginationBar(endAttribute),$("#maxResultCount").html(totalnoOfChild),$("#withViewLink").remove(),$("#maxResultCount").after("<label id='withViewLink'>&nbsp;Results: &nbsp;&nbsp;&nbsp;</label>")):totalnoOfChild-1>10&&($("#paginationBlock").show(),$("#paginationLink").show(),displayPaginationBar(endAttribute),$("#maxResultCount").html(totalnoOfChild-1),$("#withViewLink").remove(),$("#maxResultCount").after("<label id='withViewLink'>&nbsp;Results: &nbsp;&nbsp;&nbsp;</label>"))}function showBestMatchSection(a){var b="<a class='searchResultAnchor'",c="",d=unencodeHTML(a.searchSummary.replace(/<br>/,""));if(0==d.indexOf("<b>...</b>",0)&&(d=d.substring("<b>...</b>".length,d.length)),c+='<a class="result searchResultAnchor" ',c+='href="'+a.searchUrl+'" ',c+='title="'+newstripHTML(a.searchTitle)+'" onmousedown="cl_link_clicked(event)"',b+='href="'+a.searchUrl+'" onmousedown="cl_link_clicked(event)"',null!=a.bnRank&&a.bnRank>0){{a.bnRank}c+='baynote_bnrank="'+a.bnRank+'" ',b+='baynote_bnrank="'+a.bnRank+'" '}null!=a.irRank&&a.irRank>0&&(c+='baynote_irrank="'+a.irRank+'" ',b+='baynote_irrank="'+a.irRank+'" '),c+=">"+unencodeHTML(a.searchTitle.replace(/<b>/gi,'<b class="bold">'))+'</a><p id="searchResultsDescriptionID" class="searchResultsDescription">'+d.replace(/<b>/gi,'<b class="bold">')+"<br/>"+b+">"+a.searchUrl+"</a></p>",$("#bestMatchBody").html(c),$("#bestMatch").show()}function displayList(a){var b="<div id='group1'>",c=0,d=1,e=0,f=50,g=11,h=1,i=5,j="<a class='searchResultAnchor'";if(null!=a){var k=a.searchResults,l=a.suggestions;null!=l&&($("#suggestionText").html(l),$(".suggestionDiv").show(),searchquery=l),jQuery.isEmptyObject(k)?(suggestionClicked&&($(".suggestionDiv").remove(),$("#resultContWrap").remove(),$("#relatedPopularSearches").hide(),$("#defaultClusters").show(),suggestionClicked=!1),1==showOneBoxFlag?($(".noResultDiv").hide(),$("#searchTips").hide()):$(".OneBoxResults").remove(),showBestMatchFlag?($(".noResultDiv").show(),$("#searchTips").show()):($("#resultContWrap").show(),$("#paginationBlock").hide(),$(".noResultDiv").hide(),$("#searchTips").hide())):(setOmnitureTracking(searchquery,k.length),f=k.length>50?1==showBestMatchFlag?51:50:k.length,$.each(k,function(a){if(!(f>a))return!1;if(totalnoOfChild++,a==e&&1==showBestMatchFlag)showBestMatchSection(k[a]);else{if(c++,a==g?(b+='<div class="resultItem"> <a name="bookedMarkedAnchor'+h+'"',h++,g+=10):b+='<div class="resultItem"> <a ',null!=k[a].bnRank&&k[a].bnRank>0){{k[a].bnRank}b+='baynote_bnrank="'+k[a].bnRank+'" '}null!=k[a].irRank&&k[a].irRank>0&&(b+='baynote_irrank="'+k[a].irRank+'" ');var l=unencodeHTML(k[a].searchSummary.replace(/<br>/,""));if(0==l.indexOf("<b>...</b>",0)&&(l=l.substring("<b>...</b>".length,l.length)),null!=k[a].bnRank&&k[a].bnRank>0){{k[a].bnRank}j+='baynote_bnrank="'+k[a].bnRank+'" '}null!=k[a].irRank&&k[a].irRank>0&&(j+='baynote_irrank="'+k[a].irRank+'" '),b+='href="'+k[a].searchUrl+'" class="result searchResultAnchor" title="'+newstripHTML(k[a].searchTitle)+'" onmousedown="cl_link_clicked(event)"> '+unencodeHTML(k[a].searchTitle.replace(/<b>/gi,'<b class="bold">'))+'</a><p class="searchResultsDescription">'+l.replace(/<b>/gi,'<b class="bold">')+"<br/>"+j+"href='"+k[a].searchUrl+"' onmousedown='cl_link_clicked(event)'>"+k[a].searchUrl+"</a></p></div>",c%10==0&&(d++,b+="</div>",i>=d&&(b+='<div id="group'+d+'"class="noDisplay">'))}}),$("#resultsList").html(b),$("#resultsList").show(),$("#resultContWrap").show(),paginationlinks(),getClusterList(searchquery))}}function newstripHTML(a){return a.replace(/\<.+?\>/g,"")}function unencodeHTML(a){var b=a;return b=b.replace(/&lt;/g,"<"),b=b.replace(/&gt;/g,">"),b=b.replace(/&#39;/g,"'"),b=b.replace(/&amp;/g,"&"),b=b.replace(/&quot;/g,'"')}function submitForm(){querystring=$("#searchText").val(),category=$(".category:checked").val(),tabvalue=category,doSuggestions=$("#spellCheck").val(),totalnoOfChild=0,countClicks=1,endAttribute=10,showBestMatchFlag=!0,""==!querystring&&""!=tabvalue&&searchResults.getGSASearchResults(querystring,tabvalue,doSuggestions,{callback:keyMatchList,errorHandler:searchErrHandler})}function searchErrHandler(a){"GSA is down"==a&&$(".systemUnavailableDiv").show()}function getClusterList(a){queryString=a,tabvalue="delta",searchResults.getDynamicClusters(queryString,tabvalue,{callback:displayClusterList,errorHandler:function(){}})}function displayClusterList(a){var b=7,c="",d="#cluster_label";$.each(a,function(e){return c+='<a href="" onmousedown="cl_link_clicked(event)">'+a[e].data+"</a>",$(d+e).html(c),$(d+e+" a").attr("href","/dlsearch/index.jsp?searchText="+a[e].data+"&category="+category),c="",e==b?($("#relatedPopularSearches").show(),$("#defaultClusters").hide(),!1):void 0})}function showRelatedResults(a,b){$("#searchText").val(a),$("#spellCheck").val(b),submitForm()}function setTextValue(a){$("#categoryText").val(a)}function keyMatchList(a){var b=a.keymatchResults;jQuery.isEmptyObject(b)||($.each(b,function(a){var c='<a class="searchResultAnchor result" ctype="keymatch" href="'+b[a].url.replace(/<b>/gi,'<b class="bold">')+'" onmousedown="cl_link_clicked(event)">'+b[a].description.replace(/<b>/gi,'<b class="bold">')+"</a>";c+='<p id="keyMatchLink" class="searchResultsDescription">',c=c+'<a class="searchResultAnchor" ctype="keymatch" href="'+b[a].url+'" onmousedown="cl_link_clicked(event)">'+b[a].url+"</a></p>",$("#keyMatchBody").html(c),$("#keyMatch").show()}),showBestMatchFlag=!1,$("#bestMatch").hide()),oneBoxList(a)}function oneBoxList(a){var b=a.oneBoxResults;jQuery.isEmptyObject(b)||(showOneBoxFlag=!0,$.each(b,function(a){$("div.OneBoxResults").html(b[a].display),"ShopFlight_Result_Provider"!=b[a].provider&&$("div.OneBoxResults").show()})),displayList(a)}function showRandomAds(){hide("adContainer"),displayRandomAds_ad1(),displayRandomAds_ad2(),show("adContainer")}function displayRandomAds_ad1(){var a=Math.round(5*Math.random()),b=new Array;b[0]=new Array("FIRST BAG FREE &#8250;","On every Delta flight and 25,000 miles with the Gold Delta SkyMiles Credit Card.","http://www201.americanexpress.com/sbsapp/FMACServlet?request_type=alternateChannels&lpid=260&ccsgeep=37639&openeep=27438part=AMX","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/AmexGold.jpg)"),b[1]=new Array("DELTA SKY CLUB<sup>TM</sup> &#8250;","Enjoy the perks and amenities of membership.","/traveling_checkin/airport_information/delta_sky_club/perks_amenities/index.jsp","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/SkyClub.jpg)"),b[2]=new Array("FIRST BAG FREE &#8250;","On every Delta flight and 25,000 miles with the Gold Delta SkyMiles Credit Card.","http://www201.americanexpress.com/sbsapp/FMACServlet?request_type=alternateChannels&lpid=260&ccsgeep=37639&openeep=27438part=AMX","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/AmexGold.jpg)"),b[3]=new Array("BEST FARE GUARANTEE &#8250;","You won?t find a better Delta fare-period.","/planning_reservations/plan_flight/online_reservations/best_fare_guarantee/index.jsp","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/SuperGraphic.jpg)"),b[4]=new Array("FIRST BAG FREE &#8250;","On every Delta flight and 25,000 miles with the Gold Delta SkyMiles Credit Card.","http://www201.americanexpress.com/sbsapp/FMACServlet?request_type=alternateChannels&lpid=260&ccsgeep=37639&openeep=27438part=AMX","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/AmexGold.jpg)"),b[5]=new Array("FIRST BAG FREE &#8250;","On every Delta flight and 25,000 miles with the Gold Delta SkyMiles Credit Card.","http://www201.americanexpress.com/sbsapp/FMACServlet?request_type=alternateChannels&lpid=260&ccsgeep=37639&openeep=27438part=AMX","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/AmexGold.jpg)");var c=get("searchText").value.split(" ");for(i=0;i<c.length;i++){var d=c[i];for(j=0;j<b.length;j++)-1==b[j][0].toUpperCase().indexOf(d.toUpperCase())&&-1==b[j][1].toUpperCase().indexOf(d.toUpperCase())||(a=j,wordMatchedIndex=i)}setInnerHTML("ad1-link",b[a][0]),setInnerHTML("ad1-text",b[a][1]),get("ad1-link").href=b[a][2],setStyleAttr("ad1","backgroundImage",b[a][3])}function displayRandomAds_ad2(){var a=Math.round(5*Math.random()),b=new Array;b[0]=new Array("IN-FLIGHT WI-FI ACCESS &#8250;","Stay connected on the largest Wi-Fi equipped fleet.","/traveling_checkin/inflight_services/products/wi-fi.jsp","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/Laptop.jpg)"),b[1]=new Array("AWARD TICKETS &#8250;","Redeem miles and cashing in on Award Travel Tickets today.","/awards/home.do?EventId=ENTER_APPLICATION","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/Ctip.jpg)"),b[2]=new Array("IN-FLIGHT WI-FI ACCESS &#8250;","Stay connected on the largest Wi-Fi equipped fleet.","/traveling_checkin/inflight_services/products/wi-fi.jsp","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/Laptop.jpg)"),b[3]=new Array("ENJOY THE RIDE &#8250;","Save time and book your rental car in advance.","http://trip.delta.com/car_searches/new","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/GenCar.jpg)"),b[4]=new Array("IN-FLIGHT WI-FI ACCESS &#8250;","Stay connected on the largest Wi-Fi equipped fleet.","/traveling_checkin/inflight_services/products/wi-fi.jsp","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/Laptop.jpg)"),b[5]=new Array("IN-FLIGHT WI-FI ACCESS &#8250;","Stay connected on the largest Wi-Fi equipped fleet.","/traveling_checkin/inflight_services/products/wi-fi.jsp","URL(http://images.delta.com.edgesuite.net/delta/messaging/Redesign_HP90X62/Laptop.jpg)");var c=get("searchText").value.split(" "),d=wordMatchedIndex;for(i=0;i<c.length;i++){var e=c[i];for(j=0;j<b.length;j++)if(-1==b[j][0].toUpperCase().indexOf(e.toUpperCase())&&-1==b[j][1].toUpperCase().indexOf(e.toUpperCase()));else{if(i!=d&&c.length>1){a=j;continue}a=j}}setInnerHTML("ad2-link",b[a][0]),setInnerHTML("ad2-text",b[a][1]),setStyleAttr("ad2","backgroundImage",b[a][3])}function setOmnitureTracking(a,b){s.pageName="Search Results Page",s.linkTrackVars="prop21,prop22",s.prop21=a,s.prop22=b,s.tl(this,"o","site search")}for(var cl_clk=function(a,b,c,d,e,f,g,h){if(!document.images)return new Boolean(!1);var i=encodeURIComponent||escape,j=document.createElement("img");return a="/click?"+(b?"&q="+i(b):"")+(c?"&ct="+i(c):"")+(d?"&cd="+i(d):"")+(a?"&url="+i(a.replace(/#.*/,"")).replace(/\+/g,"%2B"):""),null!=e&&"undefined"!=typeof e&&(a+="&r="+i(e)),null!=f&&"undefined"!=typeof f&&(a+="&s="+i(f)),null!=g&&"undefined"!=typeof g&&(a+="&site="+i(g)),null!=h&&"undefined"!=typeof h&&(a+="&src_id="+i(h)),j.src=a,new Boolean(!0)},cl_link_clicked=function(a){var b=this;!b.getAttribute&&a&&(a.target?b=a.target:a.srcElement&&(b=a.srcElement),3==b.nodeType&&(b=b.parentNode)),a=b.getAttribute("cdata");var c=b.getAttribute("ctype"),d=b.getAttribute("rank"),e=b.getAttribute("src_id");return c||(c="OTHER"),b=b.href?b.href:"#",cl_clk(b,page_query,c,a,d,page_start,page_site,e),!0},ar=document.getElementsByTagName("a"),arlen=ar.length,i=0;arlen>i;i++){var el=ar[i];el.onmousedown||(el.onmousedown=cl_link_clicked)}cl_clk(null,page_query,new String("load"),null,null,page_start,page_site,null);var value;$(document).ready(function(){$("#searchText").autocomplete({source:predictSearchResultObj.searchAsYouTypeHandler}).each(predictSearchResultObj.searchAsYouTypeRenderer),$(".category").click(function(){value=$(this).val()})});var predictSearchResultObj={searchAsYouTypeRenderer:function(){$(this).data("uiAutocomplete")._renderItem=function(a,b){return a.css("z-index",1e3),$("<li></li>").data("ui-autocomplete-item",b).append(b.label).appendTo(a)}},searchAsYouTypeHandler:function(a,b){var c=a.term.length;c>=3&&b(searchResults.getGSAPredictions(a.term,value,"false",{callback:function(c){var d="/dlsearch/index.jsp?searchText="+a.term+"&category="+value,e=new Array,f=0;null!=c.searchResults&&($.each(c.searchResults,function(a,b){return 4>=a?(e[f]=b,void f++):!1}),e[f]=null,b($.map(e,function(a,b){if(f>0&&b==f)return{label:'<div class="view-all"><a class="ui-corner-all predlinks" href='+d+" onclick=\"window.location='"+d+"'\">View all search results</a></div>",value:""};if(a.searchTitle.length>60){var c=a.searchTitle.substring(0,58);c.lastIndexOf("<b>")>=-1&&-1==c.lastIndexOf("</b>")&&(c+="</b>"),c+="..."}else c=a.searchTitle;if(0==b)return{label:'<div class="best_match_wrap"><div class="best_match"> BEST MATCH</div><a class="predlinks" href="'+a.searchUrl+'" onclick="window.location=\''+a.searchUrl+"'\">"+c.replace(/<b>/gi,'<b class="bold">')+"</a></div>",value:""};var e="",g="";return 1==b&&(e='<div class="search-list-first">',g="</div>"),8==b&&(e='<div class="search-list-last">',g="</div>"),{label:e+'<a class="predlinks" href="'+a.searchUrl+'" onclick="window.location=\''+a.searchUrl+"'\">"+c.replace(/<b>/gi,'<b class="bold">')+"</a>"+g,value:""}})),$("a.predlinks").on("click",function(){s.pageName="Search Results Page",s.linkTrackVars="prop24",s.prop24=$(this).text(),s.tl(this,"o","site search")})),0==c.searchResults&&$(".view-all").hide()},errorHandler:function(){}}))}},totalnoOfClicks=5,countClicks=1,totalnoOfChild=0,num=1,n,endAttribute=10,resultCount=1,showBestMatchFlag=!0,suggestionClicked=!1,result_length,showOneBoxFlag=!1,initialSearchTerm;$(function(){initialSearchTerm=$("#searchText").val();0==$(".category:checked").size()&&$("#allresultsButton").attr("checked",!0),updatePopularHyperlinks($(".category:checked").val()),$(".category").click(function(){$(this).val();updatePopularHyperlinks($(this).val()),initialSearchTerm.toLowerCase()==$("#searchText").val().toLowerCase()&&(num=1,$("#resultContWrap").hide(),$(".suggestionDiv").hide(),$(".noResultDiv").hide(),$("#searchTips").hide(),$("#withoutViewLink").remove(),$("div.OneBoxResults").hide(),$("#paginationLink").attr("href","#"),submitForm()),1==showBestMatchFlag?($("#keyMatch").hide(),$("#bestMatch").show()):0==showBestMatchFlag&&($("#keyMatch").show(),$("#bestMatch").hide())}),submitForm(),$("#searchVal").on("click",function(){suggestionClicked=!0;var a=$("#searchText").val();showRelatedResults(a,"false")}),$("#paginationLink").on("click",function(){countClicks++,num++;var a="#bookedMarkedAnchor"+(countClicks-1);$("#paginationLink").attr("href",a),endAttribute+=10,endAttribute>totalnoOfChild&&0==showBestMatchFlag?endAttribute=totalnoOfChild:endAttribute>totalnoOfChild-1&&(endAttribute=totalnoOfChild-1),(countClicks>=n||5==countClicks)&&($("#paginationLink").hide(),$("#withViewLink").hide(),$("#withoutViewLink").remove(),$("#maxResultCount").after("<label id='withoutViewLink'>&nbsp;Results&nbsp;&nbsp;&nbsp;</label>")),$("#group"+num).show();var b=n+1,c=totalnoOfChild%10;if(0!=c){var d=resultCount;d++,d==b?($("#paginationLink").hide(),displayPaginationBar(totalnoOfChild-1),$("#maxResultCount").html(totalnoOfChild-1)):displayPaginationBar(endAttribute)}else displayPaginationBar(endAttribute)})});var wordMatchedIndex;$(document).ready(function(){if(!DeltaUtils.supportsPlaceholderAttr()){var a="div.keywordSearchDateFieldWrap input[placeholder]",b=$(a);b.each(function(){$(this).val()!=$(this).attr("placeholder")&&$(this).removeClass("placeholder")})}});