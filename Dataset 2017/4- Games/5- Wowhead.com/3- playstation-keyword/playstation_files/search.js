var SearchSupport={showTop10:function(u){var v=6;var b=2;var p=0,x;var m=$WH.ge("top-results");if(!m){return}var B=$WH.ce("table");B.className="top-results-wrapping-table";$WH.ae(m,B);if(!$(".graphical-guide-links").length){v=8;b=4;m.className+=" with-guides"}for(var w=0,a;a=u[w];w++){if(++p>v){break}if((p-1)%b==0){var s=$WH.ce("tr");$WH.ae(B,s)}var l=$WH.ce("td");l.className="top-results-wrapping-cell";$WH.ae(s,l);var t=$WH.ce("div");t.className="top-results-result";$WH.ae(l,t);var k="/"+g_types[a.type]+"="+a.typeId;var z=$WH.ce("table");z.className="top-results-table";$WH.ae(t,z);var A=$WH.ce("a");A.className="top-results-cover";A.href=k;if(A.setAttribute){A.setAttribute("data-whattach","true")}$WH.ae(t,A);var q=$WH.ce("tr");$WH.ae(z,q);var c=$WH.ce("td");c.className="top-results-cell top-results-name-cell";var h=c;var y=SearchSupport.getIcon(a);if(y){var g=$WH.ce("table");g.className="top-results-icon-table";var o=$WH.ce("tr");var f=$WH.ce("td");f.className="top-results-icon-cell";$WH.ae(f,Icon.create(y,1,"",k));$WH.ae(o,f);h=$WH.ce("td");h.className="top-results-icon-name-cell";$WH.ae(o,h);$WH.ae(g,o);$WH.ae(c,g)}var n=$WH.ce("div");n.className="top-results-name-box";var C=$WH.ce("a");C.className="top-results-link";C.href=k;$WH.st(C,SearchSupport.getName(a));var d;if((d=SearchSupport.getSide(a))!==false){C.className+=" icon-"+d}var r;if((r=SearchSupport.getQuality(a))!==false){C.className+=" q"+r}$WH.ae(n,C);if(x=SearchSupport.getSubtitle(a)){var j=$WH.ce("div");j.className="small q1";$WH.st(j,x);$WH.ae(n,j)}$WH.ae(h,n);$WH.ae(q,c);c=$WH.ce("td");c.className="top-results-cell top-results-type";var e=$WH.ce("span");e.className="q0";$WH.st(e,SearchSupport.getTypeName(a));$WH.ae(c,e);$WH.ae(q,c);if(p>=v){break}}if(p>0){m.className+=" withresults"}},getName:function(a){switch(g_types[a.type]){case"spell":case"item":case"transmog-set":case"itemset":case"item-set":return a.lvjson.name.substr(1);break;case"title":return a.lvjson.name.replace("%s","<"+LANG.name+">");break;default:if(a.lvjson.hasOwnProperty("name")){return a.lvjson.name}if(a.lvjson.hasOwnProperty("npc")){return SearchSupport.getName({type:1,typeId:a.lvjson.npc.id,lvjson:a.lvjson.npc})}return"["+g_types[a.type]+" #"+a.typeId+"]"}},getQuality:function(a){if(a.lvjson.hasOwnProperty("quality")){return a.lvjson.hasOwnProperty("quality")}switch(g_types[a.type]){case"item":case"spell":case"transmog-set":case"itemset":case"item-set":return(8-parseInt(a.lvjson.name.charAt(0)))}return false},getSide:function(a){switch(a.lvjson.side){case 1:return"alliance";case 2:return"horde";default:return false}},getIcon:function(a){var b=false;if(a.lvjson.hasOwnProperty("icon")){b=a.lvjson.icon}else{if(a.lvjson.hasOwnProperty("npc")){b=SearchSupport.getIcon({type:1,typeId:a.lvjson.npc.id,lvjson:a.lvjson.npc})}else{switch(g_types[a.type]){case"spell":if(g_spells.hasOwnProperty(a.typeId)){b=g_spells[a.typeId].icon}break;case"item":if(g_items.hasOwnProperty(a.typeId)){b=g_items[a.typeId].icon}break;case"achievement":if(g_achievements.hasOwnProperty(a.typeId)){b=g_achievements[a.typeId].icon}break}}}return b},getSubtitle:function(b){var a=false;if(b.lvjson.hasOwnProperty("tag")){a=b.lvjson.tag}if(a&&g_types[b.type]=="npc"){return"<"+a+">"}return a},getTypeName:function(b){var a=LANG.types[b.type][0];switch(g_types[b.type]){case"npc":if(b.lvjson.hasOwnProperty("npc")){a=SearchSupport.getTypeName({type:1,typeId:b.lvjson.npc.id,lvjson:b.lvjson.npc})}else{if(b.lvjson.hasOwnProperty("type")&&g_npc_types.hasOwnProperty(b.lvjson.type)){a=g_npc_types[b.lvjson.type]}}break;case"spell":if(b.lvjson.hasOwnProperty("cat")&&g_spell_categories_singular.hasOwnProperty(b.lvjson.cat)){a=g_spell_categories_singular[b.lvjson.cat]}break}return a},guideLinkWidth:256,totalGuideColumns:0,hiddenGuideColumns:0,updateTopResultsWidth:function(b){var a=$("#main-contents").innerWidth();if(!b){a=a/2+5}$("#top-results").css("width",Math.floor(a)+"px")},responsiveGuides:function(){if(!$(".graphical-guide-links").length){SearchSupport.updateTopResultsWidth(true);$(SearchSupport.updateTopResultsWidth.bind(null,true));$(window).resize(SearchSupport.updateTopResultsWidth.bind(null,true));return}SearchSupport.totalGuideColumns=$(".featured-guides-cell").first().parent().children().length;var a=function(c){if(!c){SearchSupport.updateTopResultsWidth()}SearchSupport.checkGuidesSize()};var b=typeof WAS!="undefined"&&WAS.showAds();a(b);$(a.bind(b));$(window).resize(a)},hideGuideColumns:function(a){a=Math.min(a,SearchSupport.totalGuideColumns-1);if(a<=0){SearchSupport.hiddenGuideColumns=0;return}SearchSupport.hiddenGuideColumns=a;$(".featured-guides-table > tbody > tr").each(function(){$(this).children().slice(a*-1).hide();SearchSupport.hiddenGuideColumns=a})},checkGuidesSize:function(){if(!$(".search-results-top-wrapper .graphical-guide-links").length){return}var e=$("#main-contents").width();var a=$(".search-results-top").width()-20;var h=a-10-e;if(h>0){var d=Math.ceil(h/SearchSupport.guideLinkWidth)+SearchSupport.hiddenGuideColumns;SearchSupport.hideGuideColumns(d)}else{if(SearchSupport.hiddenGuideColumns){var b=Math.min(Math.ceil(h*-1/SearchSupport.guideLinkWidth),SearchSupport.hiddenGuideColumns);var f=$(".featured-guides-table > tbody > tr").first().children(":visible");var c=f.length;var g=c*(f.width()-SearchSupport.guideLinkWidth-10);if(b>0&&g>SearchSupport.guideLinkWidth){b=Math.max(Math.floor(g/SearchSupport.guideLinkWidth),SearchSupport.hiddenGuideColumns);$(".featured-guides-table > tbody > tr > td").show();SearchSupport.hideGuideColumns(SearchSupport.hiddenGuideColumns-b)}}}}};