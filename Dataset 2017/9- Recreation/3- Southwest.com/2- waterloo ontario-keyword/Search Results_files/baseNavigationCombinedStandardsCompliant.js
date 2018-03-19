
/*! omniture_helpers.js */
var SWA=typeof SWA==="undefined"?{}:SWA;
SWA.trip=typeof SWA.trip==="undefined"?{}:SWA.trip;
SWA.analytics=typeof SWA.analytics==="undefined"?{}:SWA.analytics;
SWA.trip.reviewItineraryOmniture=typeof SWA.trip.reviewItineraryOmniture==="undefined"?{}:SWA.trip.reviewItineraryOmniture;
function cleanOmnitureObjectFor(c){var a=s_gi(c);
var b=["products","events","linkTrackVars","server","channel","pageName","pageType","campaign","server","purchaseID","state","zip"];
for(var d=0;
d<100;
d++){a["prop"+d]="";
a["eVar"+d]=""
}for(var d=0;
d<b.length;
d++){a[b[d]]=""
}return a
}SWA.trip.reviewItineraryOmniture.getEventFor=function(a){if(a.find(".air_itinerary_container_with_image").length){return"event66"
}if(a.find(".car_itinerary_container_with_image").length){return"event76"
}if(a.find(".hotel_itinerary_container_with_image").length){return"event77"
}return"ERROR"
};
SWA.trip.reviewItineraryOmniture.setValues=function(a,c){var b=$(c).find("#cancellation_modal_product_of_interest");
a.events=SWA.trip.reviewItineraryOmniture.getEventFor(b);
a.channel="RETRIEVE";
a.prop50=a.channel+":TRIP";
a.pageName=a.prop50+":Review Itinerary to Cancel";
if(typeof sendAnalyticsOnLoad=="function"){sendAnalyticsOnLoad()
}};
SWA.analytics.addEvent=function(b){if(typeof s.events==="undefined"||$.trim(s.events)===""){s.events=b;
return
}else{var a=s.events.split(",");
if($.inArray(b,a)===-1){a.push(b)
}s.events=a.join(",")
}};
/*! global-header-footer.js */
var defaultTextGlobalNav={globalnav_header_utility_search_input:"Search Southwest"};
$(document).ready(function(){var a=$("#globalnav_footer_site_links_morelinks_toggle");
a.css({display:"inline-block"});
var g=$("#globalnav_footer_site_links_container").height();
$(".globalnav_footer_site_links").css({height:g});
var b=$("#globalnav_footer_container");
b.css({height:b.height()});
if(typeof globalNavLoadFooterExpanded=="undefined"){$("#globalnav_footer_site_links_container").css({height:40});
a.removeClass("globalnav_footer_site_links_morelinks_toggle_open").addClass("globalnav_footer_site_links_morelinks_toggle globalnav_footer_site_links_morelinks_toggle_closed")
}for(var f in defaultTextGlobalNav){var d=$("#"+f);
d.focus(function(){if($(this).hasClass("show_defaulttext")){$(this).val("");
$(this).removeClass("show_defaulttext")
}});
d.blur(function(){if($(this).val()==""){$(this).addClass("show_defaulttext");
$(this).val(defaultTextGlobalNav[$(this).attr("id")])
}});
if($(d).val()==""||$(d).val()==defaultTextGlobalNav[f]){d.addClass("show_defaulttext");
d.val(defaultTextGlobalNav[f])
}}$("#globalnav_footer_site_links_morelinks_toggle").click(function(){var h=$(this);
if(h.hasClass("globalnav_footer_site_links_morelinks_toggle_open")&&!h.hasClass("globalnav_footer_site_links_morelinks_toggle_inprogress")){h.removeClass("globalnav_footer_site_links_morelinks_toggle_open").addClass("globalnav_footer_site_links_morelinks_toggle_closed globalnav_footer_site_links_morelinks_toggle_inprogress");
e(40)
}else{if(h.hasClass("globalnav_footer_site_links_morelinks_toggle_closed")){h.removeClass("globalnav_footer_site_links_morelinks_toggle_closed").addClass("globalnav_footer_site_links_morelinks_toggle_open globalnav_footer_site_links_morelinks_toggle_inprogress");
e(g)
}}return false
});
function e(h){$("#globalnav_footer_site_links_container").animate({height:h},function(){$("#globalnav_footer_site_links_morelinks_toggle").removeClass("globalnav_footer_site_links_morelinks_toggle_inprogress")
})
}$("#globalnav_header_primary .globalnav_header_primary_link").hover(function(){var h=this;
$(this).addClass("globalnav_header_subnav_ishovered");
setTimeout(function(){if($(h).hasClass("globalnav_header_subnav_ishovered")){showSubNav(h)
}},500)
},function(){$(this).removeClass("globalnav_header_subnav_ishovered");
hideSubNav(this)
});
$("#globalnav_header_utility_travel_tools").click(function(){toggleTravelTools(this);
return false
});
$(document).click(function(){$("#globalnav_header_utility_travel_tools_hover_container").remove();
repositionHoverBackdropIframe("hidden",0,0,0,0)
});
if($.browser.msie&&parseInt($.browser.version,10)==6){$(document.body).append('<iframe src="/assets/navigation/blank.html" scrolling="no" width="0" height="0" frameborder="0" id="globalnav_header_hover_backdrop_iframe"></iframe>')
}$(document.body).append("<div id='globalnav_preload_container'></div>");
var c=$("#globalnav_preload_container");
c.addClass("globalnav_preload_container_primary_nav_hover");
c.hide()
});
function toggleTravelTools(g){var e=$(g);
var f=e.parent();
var c=f.find(".globalnav_header_utility_travel_tools_container");
var b=$("#globalnav_header_utility_travel_tools_hover_container");
if(b.size()==0){var a="<div id='globalnav_header_utility_travel_tools_hover_container'>";
a+="<div id='globalnav_header_utility_travel_tools_hover_top_background_container'>&nbsp;</div>";
a+="<div id='globalnav_header_utility_travel_tools_hover_inner_container'>";
a+=c.html();
a+="</div>";
a+="<div id='globalnav_header_utility_travel_tools_hover_close_container'>";
a+="<span id='globalnav_header_utility_travel_tools_hover_close_button'><a href='#'><span class='closeImg'></span><span>Close</span></a></span>";
a+="</div>";
a+="</div>";
$(document.body).append(a);
b=$("#globalnav_header_utility_travel_tools_hover_container");
var d=e.offset();
b.click(function(j){j.stopPropagation()
});
var i=d.top+e.height();
var h=d.left+e.width()-b.width();
b.css({top:i,left:h});
repositionHoverBackdropIframe("visible",i,h,b.width(),b.height());
$("#globalnav_header_utility_travel_tools_hover_close_button").click(function(){closeTravelTools();
return false
})
}else{closeTravelTools()
}return false
}function closeTravelTools(){$("#globalnav_header_utility_travel_tools_hover_container").remove();
repositionHoverBackdropIframe("hidden",0,0,0,0)
}function showSubNav(k){var e=$(k);
var i=e;
var n=e.attr("id");
var h=e.parent();
var b=h.find(".globalnav_header_subnav_container");
var l="black";
if(h.hasClass("globalnav_header_primary_product")){l="blue";
i=$("#globalnav_header_primary_link_air")
}var c="globalnav_header_subnav_hover_container_"+l;
var j=$("#"+n+"_hover_container");
if(j.size()==0&&b.size()>0){var m="<div id='"+n+"_hover_container' class='globalnav_header_subnav_hover_container "+c+"'>";
m+="<table border=0 cellspacing=0 cellpadding=0 class='globalnav_header_subnav_hover_container_layout_table'>";
m+="<tr>";
m+="<td class='globalnav_header_subnav_hover_container_layout_table_tl globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
m+="<td class='globalnav_header_subnav_hover_container_layout_table_top'><span class='globalnav_header_subnav_hover_container_layout_table_arrow'></span></td>";
m+="<td class='globalnav_header_subnav_hover_container_layout_table_tr globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
m+="</tr>";
m+="<tr>";
m+="<td class='globalnav_header_subnav_hover_container_layout_table_left'>&nbsp;</td>";
m+="<td class='globalnav_header_subnav_hover_container_layout_table_center'>"+b.html()+"</td>";
m+="<td class='globalnav_header_subnav_hover_container_layout_table_right'>&nbsp;</td>";
m+="</tr>";
m+="<tr>";
m+="<td class='globalnav_header_subnav_hover_container_layout_table_bl globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
m+="<td class='globalnav_header_subnav_hover_container_layout_table_bottom'>&nbsp;</td>";
m+="<td class='globalnav_header_subnav_hover_container_layout_table_br globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
m+="</tr>";
m+="</table>";
m+="</div>";
$(document.body).append(m);
var f="#"+n+"_hover_container";
j=$(f);
hyperLinkFilterHookTrigger(f);
if($.browser.msie&&$.browser.version<7){j.find(".globalnav_header_subnav_hover_container_layout_table_corner").addClass("globalnav_header_subnav_hover_container_layout_table_corner_ie6");
j.find(".globalnav_header_subnav_hover_container_layout_table_arrow").addClass("globalnav_header_subnav_hover_container_layout_table_arrow_ie6")
}var d=i.offset();
var g=d.top+i.height()-10;
var a=d.left+5;
if(h.hasClass("globalnav_header_primary_product_vacations")){g=d.top+i.height()-5;
a=d.left+140
}else{if(h.hasClass("globalnav_header_primary_product")){g=d.top+i.height()-5;
a=d.left
}}j.css({top:g,left:a});
repositionHoverBackdropIframe("visible",g+10,a,j.width(),j.height()-20);
j.hover(function(){var o=e;
$(this).addClass("globalnav_header_subnav_ishovered")
},function(){var o=e;
$(this).removeClass("globalnav_header_subnav_ishovered");
setTimeout(function(){checkRemoveSubNav(k)
},10)
})
}}function hideSubNav(a){setTimeout(function(){checkRemoveSubNav(a)
},10)
}function checkRemoveSubNav(a){var b=$(a);
var c=$("#"+b.attr("id")+"_hover_container");
if(!b.hasClass("globalnav_header_subnav_ishovered")&&!c.hasClass("globalnav_header_subnav_ishovered")){c.remove();
repositionHoverBackdropIframe("hidden",0,0,0,0)
}}function repositionHoverBackdropIframe(b,f,e,c,a){var d=$("#globalnav_header_hover_backdrop_iframe");
if(d.size()>0){d.css({visibility:b,top:f,left:e,width:c,height:a})
}}var hyperLinkFilterHookTrigger=function(a){if(typeof setHyperLinkFilter=="function"){setHyperLinkFilter(a)
}};
/*! global.js */
var buildDestFlyoutsOnPageLoad=true;
var buildDatePickersOnPageLoad=true;
if($.browser.msie&&parseInt($.browser.version,10)==6){try{document.execCommand("BackgroundImageCache",false,true)
}catch(err){}}$(document).ready(function(){var g=/({{\*{1,}}}|{{\‡{1,}}}|###\*{1,}###|{{\†{1,}}})/gi;
var a="</span>";
var l="]]";
var r="}}";
var k=")))";
var v='<span class="js-full-disclaimer">';
var t='<span class="screenreader-only js-disclaimer-message">';
var p='<span class="js-short-disclaimer">';
var b='<span class="screenreader-only">';
var o="[[";
var q='<span class="js-type-disclaimer" aria-hidden="true">';
var n="{{";
var B="(((";
var c="###";
var f="@@@";
var C=$(".js-rr-footnotes *:contains("+o+")");
var m;
var s;
var D;
var j=[];
var h;
var A;
var z;
var w=C.length;
var y;
var e;
var u;
var d;
if(($.browser.msie)&&(($.browser.version<8)||(document.compatMode!="CSS1Compat"))){$("SELECT.fieldError").each(function(){if($(this).css("display")!="none"){$(this).css({margin:0}).wrap("<span class='errorSelectWrapper' style='border: 1px solid red;display:inline-block'></span>")
}})
}function x(){var G=$(".js-rr-footnotes");
var F;
var E;
var I;
var i;
var K;
var L;
function J(M,N,O){N=n+N.replace(/\*/g,"\\*")+r;
E=new RegExp(N,"g");
return M.replace(E,O)
}function H(M){$.map(j,function(N){M=J(M,N.key,N.hiddenKey+N.value)
});
return M
}G.html(H(G.html()));
F=$(".js-disclaimer-message").parent().addClass("js-selector-target");
F.each(function(){L=$(this).html().split(q)[0];
L=L||"";
if(L!==""){i=$(this);
I=i.find(".js-disclaimer-message");
I.remove();
i.html("\u0020"+i.html()+"\u0020"+b+I.html()+a)
}})
}if(w>0){for(y=0;
y<w;
y+=1){h=$(C[y]).html();
if(h!==null){u=h.match(g);
if(u!==null){m=$(".js-rr-footnotes *:contains("+o+")");
e=m.length-1;
d=$(m[e]).html();
$(m[e]).addClass("js-selector-disclaimer").attr("aria-hidden",true);
m=$(".js-rr-footnotes *:contains("+f+")");
e=m.length-1;
d=$(m[e]).html();
$(m[e]).attr("aria-hidden",false);
m=$(".js-rr-footnotes *:contains("+c+")");
e=m.length-1;
$(m[e]).addClass("js-selector-disclaimer").attr("aria-hidden",false)
}}$(".js-selector-disclaimer").each(function(){z=$(this).html();
z=z.replace(c,q);
z=z.replace(c,a);
z=z.replace(o,v);
z=z.replace(l,a);
z=z.replace(f,b);
z=z.replace(f,a);
z=z.replace(n,q);
z=z.replace(r,a);
z=z.replace(B,p);
z=z.replace(k,a);
$(this).html(z)
})
}$(".js-selector-disclaimer").each(function(){s=$(this);
D=s.find(".js-short-disclaimer");
D.addClass("screenreader-only");
if(D.length>0){A=$(D[0]).html()
}else{A=s.find(".js-full-disclaimer").html()
}j.push({key:s.find(".js-type-disclaimer").text(),hiddenKey:q+s.find(".js-type-disclaimer").text()+a,value:t+A+"&nbsp;"+a});
D.remove()
});
x()
}});
function positionIframeUnder(f,d){if($.browser.msie&&$.browser.version<=6){var c=$(f);
d=$(d);
var g=d.offset();
var b=d.outerHeight();
var a=d.outerWidth();
var e=parseInt(d.css("z-index"));
c.css({top:g.top,left:g.left,height:b,width:a,display:"block",position:"absolute"}).css("z-index",e-1)
}}function toggleSelectBoxVisibilityUnderPopups(e,b){if(!$.browser.msie){return
}if(e!="visible"&&e!="hidden"){e="visible"
}var f=$(b).offset();
var a=$(b).height();
var d=$(b).width();
var c=$(b).attr("id");
$("SELECT").each(function(){if(!c||$(this).parents("#"+c).size()==0){var h=$(this).offset();
var i=$(this).height();
var m=$(this).width();
var g=between(h.left,f.left,f.left+d);
var k=between(h.left+m,f.left,f.left+d);
var l=between(h.top,f.top,f.top+a);
var j=between(h.top+i,f.top,f.top+a);
if((g||k)&&(l||j)){$(this).css("visibility",e)
}}})
}function between(c,a,b){return(c>=a&&c<=b)
}function pointerWithinObject(a,b){var d=$("#"+b);
var c=a.pageX;
var e=a.pageY;
var f=parseInt(d.css("left"));
var g=parseInt(d.css("top"));
var i=d.outerHeight();
var h=d.outerWidth();
return(between(c,f,f+h)&&between(e,g,g+i))
}function textBoxMaxLength(d,a){var c;
var b;
var e;
$(d).each(function(){c=$("#"+$(this).attr("id"));
c.keyup(function(){b=$(this).val().length;
e=$(this).val();
if(b>a){$(this).val(e.substr(0,a))
}})
})
}function growTextBoxInitialize(b){var a=$(b);
$("body").append("<div id='dummyContent'></div>");
$("#dummyContent").css({fontSize:a.css("font-size"),fontFamily:a.css("font-family"),width:a.width()-(a.outerWidth()-a.innerWidth()),lineHeight:a.css("line-height")+"px",margin:"3px",padding:"px",position:"absolute",top:0,left:-9999,visibility:"hidden"});
$(b).each(function(){var c=$("#"+$(this).attr("id"));
c.keypress(function(d){growBox($(this),d)
});
growBox(c,"")
})
}function growBox(e,b){var a=$("#"+$(e).attr("id"));
$("#dummyContent").html(a.val()+String.fromCharCode(b.which));
var d=a.innerHeight();
var c=$("#dummyContent").outerHeight();
if(c>d){a.css("height",c+10)
}}$(document).ready(function(){var b=$("#profile div.account_bar_content_box");
b.each(function(){addExpanderControls(this,"h6","box_closed")
});
var c=$("#outboundFilter, #inboundFilter");
c.each(function(){addExpanderControls(this,"h6","filter_closed")
});
b.find(".expanderImage").each(function(){toggleExpandCollapse(this,"box_closed",hasImageCousins)
});
c.find(".expanderImage").each(function(){toggleExpandCollapse(this,"filter_closed",hasImageCousins)
});
if($("#travel-tools-air").size()==1){var a=$("div.travelToolsSection");
a.each(function(){addExpanderControlsAppend(this,"h4","section_closed")
});
a.find(".expanderImage").each(function(){toggleExpandCollapse(this,"section_closed",hasImageCousins)
})
}});
function hasImageCousins(a){return($(a).parent().siblings().children().size()>0)
}function initializeToClosedState(a){$(a).addClass("closed")
}function addExpanderControls(c,a,b){if($(c).hasClass("noToggle")){return
}if($(c).hasClass("closed")){$(c).removeClass("closed").addClass(b);
$(c).children(a).prepend("<span class='expanderImage plusImage' title='expand'></span>&nbsp;")
}else{$(c).children(a).prepend("<span class='expanderImage minusImage' title='collapse'></span>&nbsp;")
}}function addExpanderControlsAppend(c,a,b){if($(c).hasClass("noToggle")){return
}if($(c).hasClass("closed")&&window.location.hash!="#"+$(c).attr("id")){$(c).removeClass("closed").addClass(b);
$(c).children(a).append("<span class='expanderImage plusImage' title='expand'></span>&nbsp;")
}else{$(c).removeClass("closed");
$(c).children(a).append("<span class='expanderImage minusImage' title='collapse'></span>&nbsp;")
}}function toggleExpandCollapse(b,a,c){$(b).parent().click(function(){if($(b).hasClass("plusImage")){if(c(b)){$(b).removeClass("plusImage").addClass("minusImage").attr("title","collapse");
$(b).parent().parent().removeClass(a);
$(b).parent().parent().find("#companionContent").removeClass("collapseContent")
}}else{if($(b).hasClass("minusImage")){$(b).removeClass("minusImage").addClass("plusImage").attr("title","expand");
$(b).parent().parent().addClass(a);
$(b).parent().parent().find("#companionContent").addClass("collapseContent")
}}})
}var sUserAgent=navigator.userAgent.toLowerCase();
var isOpera=(sUserAgent.indexOf("opera")!=-1)?true:false;
var tmStart=null;
var pTime=0;
newWindow=null;
winProps=null;
function openWindow(d,c,b,f){var e=new Date();
var a=c?c:"_blank";
if(!b){b="width=400,height=350,scrollbars,resizable,toolbar,status,menubar,location"
}var g=window.open(d,a,b);
if(g&&!isOpera){g.focus()
}if(f>0){Start(f)
}return(g)?false:true
}function Start(a){tmStart=new Date();
Timer=setTimeout(function(){UpdateTimer(a)
},1000)
}function UpdateTimer(c){if(Timer){clearTimeout(Timer);
Timer=0
}if(!tmStart){tmStart=new Date()
}var a=new Date();
var b=a.getTime()-tmStart.getTime();
a.setTime(b);
cntDown=a.getSeconds();
if(cntDown!=c){Timer=setTimeout(function(){UpdateTimer(c)
},1000)
}else{Stop()
}}function Stop(){if(Timer){clearTimeout(Timer);
Timer=0
}tmStart=null;
closeWin()
}function closeWin(){if(newWindow&&newWindow.open&&!newWindow.closed){newWindow.close()
}}function ResetTimer(){tmStart=null
}function dateWithProper4DigitYear(c){var b=new Date(c);
var a=b.getFullYear();
if(a<2000){b.setFullYear(a+100)
}return b
}var dateFromInput=function(a){if(a.length==0){return null
}return(a.val()!="")?dateWithProper4DigitYear(a.val()):""
};
(function(a){a.fn.confirmOnLeave=function(d){var b=d||swa.account.leaveEditPageConfirmation;
var e=a(this);
var c=e.serializeArray();
window.onbeforeunload=function(){if(document.activeElement&&document.activeElement.id!="cancel"&&document.activeElement.id!="submit"){var f=e.serializeArray();
for(var g in c){if(f[g].value!=c[g].value){return b
}}}};
e.submit(function(){window.onbeforeunload=null
})
}
}(jQuery));
(function(a){a.fn.queryParams=function(){var d=a(this);
var b=d.attr("href");
var e=b.substring(b.indexOf("?")+1,b.length);
var j=e.split("&");
var g={};
for(var h=0;
h<j.length;
h++){var f=j[h].split("=");
var c=decodeURIComponent(f[0]);
var k=(f.length==2)?decodeURIComponent(f[1]):c;
g[c]=k
}return g
}
}(jQuery));
Date.prototype.toMMDDYYYY=function(){function a(e){e+="";
if(e.length==1){e="0"+e
}return e
}var b=a(this.getMonth()+1);
var c=a(this.getDate());
var d=this.getFullYear();
return b+"/"+c+"/"+d
};
$(document).ready(function(){$("input:checked + label").addClass("radioCheckedHilite");
$("input:radio").change(function(){$("label.radioCheckedHilite").removeClass("radioCheckedHilite");
var a=$(this).attr("id");
$("label[for="+a+"]").addClass("radioCheckedHilite")
})
});
var SWA=typeof(SWA)==="undefined"?{}:SWA;
SWA.ExpandCollapse={toggleExpandCollapseElement:function(c,b){var e=$(c);
var a=e.attr("aria-expanded")||false;
var d=e.attr("title").length>0;
if($(c).hasClass("plusImage")){SWA.ExpandCollapse.setMinusImage(c);
SWA.ExpandCollapse.showElement(b);
if(d){e.attr("title","collapse")
}if(a){e.attr("aria-expanded","true")
}return true
}else{if($(c).hasClass("minusImage")){SWA.ExpandCollapse.setPlusImage(c);
SWA.ExpandCollapse.hideElement(b);
if(d){e.attr("title","expand")
}if(a){e.attr("aria-expanded","false")
}return false
}}},hideElement:function(a){$(a).hide()
},showElement:function(a){$(a).show()
},setPlusImage:function(a){$(a).removeClass("minusImage").addClass("plusImage")
},setMinusImage:function(a){$(a).removeClass("plusImage").addClass("minusImage")
}};
SWA.DefaultText={class_name:"form_optional",handle:function(d,b,a){var c=SWA.DefaultText.class_name;
d.blur(function(){var e=$(this);
setTimeout(function(){var h;
var f=(e[0]!==document.activeElement);
var g=e.val();
h=(g===""||g===b);
if(h&&f){e.val(b).addClass(c)
}},500)
});
d.focus(function(h,f){var g=$(this);
if(g.hasClass(c)&&g.val()==b){g.removeClass(c).val("")
}else{g.removeClass(c);
if(f&&f==="fromdatepicker"){return
}g.select()
}});
if(d.val()==""||d.val()==b){d.val(b).addClass(c)
}a.click(function(){if(d.hasClass(c)&&d.val()==b){d.val("")
}})
}};
String.prototype.trim=function(){return this.replace(/^[\s\xA0]+/,"")
};
if(!String.prototype.startsWith){String.prototype.startsWith=function(a){return !this.indexOf(a)
}
}function getParameter(b){var d=window.location.search.substring(1);
var e=d.split("&");
var c="";
for(var a=0;
a<e.length;
a++){var f=e[a].split("=");
if(f[0]==b){c=f[1]
}}return c
}function submitThisFormById(a){$("#"+a).submit()
}SWA.FeatureToggles={isFeatureOn:function(a){return SWA.FeatureToggles.getFeatureState(a+"On")
},isFeatureOff:function(a){return SWA.FeatureToggles.getFeatureState(a+"Off")
},getFeatureState:function(a){return SWA.FeatureToggles.getBody().hasClass(a)
},getBody:function(){return SWA.FeatureToggles.body=(SWA.FeatureToggles.body)||$("body")
}};
$(document).ready(function(){removeLowFareCalendarLinkFromGlobalNav()
});
function removeLowFareCalendarLinkFromGlobalNav(){if(SWA.FeatureToggles.isFeatureOff("displayLowFareCalendar")){$("a:contains('Low Fare Calendar')").remove()
}};
/*! a11y_popup.js */
var popUpAccessible=function(c,b,a,f,e,d){this._addTabbableSupport();
this._addFocusSelectorSupport();
this.popUp=c;
this.popUpTrigger=$(b);
this.popUpCloseFunction=(typeof a==="function")?a:function(){};
if(typeof d==="boolean"&&d===true){this._makeContainerTabbableFirstElement();
this._moveFocusToFirstElement()
}else{this._makeContainerTabbable();
this._moveFocusToContainer()
}if(f){if(typeof f==="string"){this.closeElements=this.popUp.find(f)
}else{if($.isArray(f)){this.closeElements=this.popUp.find(f.join())
}}this._handleCloseElements()
}this.allowEscapeClose=(typeof e!=="boolean")?true:e;
this._setFirstAndLastTabbableElements();
if(this.allowEscapeClose){this._listenEscKey()
}this._listenTabKey()
};
popUpAccessible.prototype._makeContainerTabbable=function(){var a='<div class="js-role-document" role="dialog"></div>';
this.popUp.attr({role:"document",tabindex:"-1"});
if(this.popUp.closest(".js-role-document").length===0){this.popUp.wrapAll(a)
}};
popUpAccessible.prototype._makeContainerTabbableFirstElement=function(){var a='<div class="js-role-document" role="dialog"></div>';
if(this.popUp.closest(".js-role-document").length===0){this.popUp.wrapAll(a)
}};
popUpAccessible.prototype._moveFocusToContainer=function(){setTimeout($.proxy(function(){this.popUp.focus()
},this),100)
};
popUpAccessible.prototype._moveFocusToFirstElement=function(){setTimeout($.proxy(function(){this.popUpFirstTabbableEl.focus()
},this),100)
};
popUpAccessible.prototype._returnFocusToTrigger=function(){setTimeout($.proxy(function(){this.popUp.removeAttr("tabindex");
this.popUp.removeAttr("role");
this.popUpTrigger.focus()
},this),100)
};
popUpAccessible.prototype._listenTabKey=function(){this.popUp.keydown($.proxy(function(a){this._tabCycle(a)
},this))
};
popUpAccessible.prototype._handleCloseElements=function(){this.closeElements.each($.proxy(function(a,b){$(b).attr("tabindex","0");
$(b).click($.proxy(this._closePopUp,this));
$(b).keydown($.proxy(function(c){if(c.which&&(c.which===this.KEY_ENTER)){c.preventDefault();
this._closePopUp()
}},this))
},this))
};
popUpAccessible.prototype._closePopUp=function(){this._returnFocusToTrigger();
this.popUpCloseFunction();
this._unbindKeyDown()
};
popUpAccessible.prototype._listenEscKey=function(){this.popUp.keydown($.proxy(function(a){if(a.which&&(a.which===this.KEY_ESCAPE)){this._closePopUp()
}},this))
};
popUpAccessible.prototype._unbindKeyDown=function(){this.popUp.unbind("keydown")
};
popUpAccessible.prototype._setFirstAndLastTabbableElements=function(){this.popUpTabbableEl=this.popUp.find(":tabbable, [tabindex]");
this.popUpFirstTabbableEl=this.popUpTabbableEl.first()[0];
this.popUpLastTabbableEl=this.popUpTabbableEl.last()[0]
};
popUpAccessible.prototype._tabCycle=function(b){var a;
if(b.which===this.KEY_TAB){a=$("*:focus")[0];
if(b.shiftKey&&a===this.popUpFirstTabbableEl||b.shiftKey&&this.popUp.is(":focus")){b.preventDefault();
this.popUpLastTabbableEl.focus()
}else{if(!b.shiftKey&&a===this.popUpLastTabbableEl){b.preventDefault();
this.popUpFirstTabbableEl.focus()
}}}};
popUpAccessible.prototype.reusePopUp=function(a){this.popUpTrigger=$(a);
this.popUpCloseFunction=closeProductHover;
this._makeContainerTabbable();
this._moveFocusToContainer();
this._setFirstAndLastTabbableElements();
this._listenEscKey();
this._listenTabKey()
};
popUpAccessible.prototype._addTabbableSupport=function(){this.KEY_ENTER=13;
this.KEY_ESCAPE=27;
this.KEY_TAB=9;
if(!$.expr[":"].tabbable){$.extend($.expr[":"],{data:function(c,b,a){return !!$.data(c,a[3])
},focusable:function(b){var c=b.nodeName.toLowerCase(),a=$.attr(b,"tabindex");
return(/input|select|textarea|button|object/.test(c)?!b.disabled:"a"==c||"area"==c?b.href||!isNaN(a):!isNaN(a))&&!$(b)["area"==c?"parents":"closest"](":hidden").length
},tabbable:function(b){var a=$.attr(b,"tabindex");
return(isNaN(a)||a>=0)&&$(b).is(":focusable")
}})
}};
popUpAccessible.prototype._addFocusSelectorSupport=function(){var a=$.expr[":"];
if(!a.focus){a.focus=function(b){return b===document.activeElement&&(b.type||b.href)
}
}};
/*! popups.js */
var globalPopupCallbacksInitialized=false;
var SWA=SWA||{};
SWA.PopUp={pointerDirections:{popup_open_direction_East:"popup_pointer_right",popup_open_direction_West:"popup_pointer_left",popup_open_direction_South:"popup_pointer_up",popup_open_direction_North:"popup_pointer_down",popup_open_direction_NorthWest:"popup_pointer_down",popup_open_direction_NorthEast:"popup_pointer_down",popup_open_direction_SouthWest:"popup_pointer_up",popup_open_direction_SouthEast:"popup_pointer_up",popup_open_direction_EastNorth:"popup_pointer_east_north"},pointerImages:{popup_pointer_down:["/assets/images/fare_product_pointer_noShadow.gif",31,17],popup_pointer_up:["/assets/images/fare_product_pointer_noShadow_bottom.gif",31,17],popup_pointer_left:["/assets/images/priceItin_pointer_noShadow_right.gif",16,27],popup_pointer_right:["/assets/images/priceItin_pointer_noShadow.gif",16,27],price_itinerary_pointer:["/assets/images/priceItin_pointer_noShadow.gif",16,27],popup_pointer_east_north:["/assets/images/fare_details_triangle_left.png",18,32],earlyBirdAlistPointer:["/assets/images/airItin_pointer_noShadow.gif",16,27],earlyBirdCheckinExclusionsPointer:["/assets/images/airItin_pointer_noShadow.gif",16,27],air_itinerary_pointer_white:["/assets/images/airItin_pointer_noShadow.gif",18,32],air_itinerary_pointer_gray:["/assets/images/airItin_pointer_noShadow_gray.gif",18,32]},popup_container_class:"popup_outer_container",popup_container_class_itinerary:"priceItineraryPopupTable",close_container_class:"popup_close_container",popup_is_opening:false,getAllPointerIds:function(){var b="";
for(var a in SWA.PopUp.pointerImages){if(typeof a==="string"){b+="#"+a+", "
}}return b.substr(0,b.length-2)
},register:function(b,a){if(!globalPopupCallbacksInitialized){SWA.PopUp.initialize(b,SWA.PopUp.getAllPointerIds())
}$(a).click(function(c){SWA.PopUp.popup_is_opening=true;
SWA.PopUp.hideHoverObjects();
SWA.PopUp.showHoverObjects(this,b);
c.stopPropagation();
c.preventDefault();
$(document).click();
SWA.PopUp.popup_is_opening=false;
return false
});
$(b+" ."+SWA.PopUp.close_container_class).click(function(){SWA.PopUp.hideHoverObjects()
})
},initialize:function(a,b){$(document).click(function(){if(!SWA.PopUp.popup_is_opening){SWA.PopUp.hideHoverObjects()
}});
$("#page_bottom_popup_outer_container ."+SWA.PopUp.popup_container_class_itinerary+" ,#page_bottom_popup_outer_container ."+SWA.PopUp.popup_container_class+", #page_bottom_popup_outer_container_async ."+SWA.PopUp.popup_container_class).click(function(){return false
}).find("A,INPUT").click(function(c){c.stopPropagation();
return true
});
$(b).click(function(){return false
});
globalPopupCallbacksInitialized=true
},initializePopupPointer:function(c){var b=SWA.PopUp.pointerDirections[c];
var a=SWA.PopUp.pointerImages[b];
if($("#"+b).size()==0){$(document.body).append('<img src="'+a[0]+'" width="'+a[1]+'" height="'+a[2]+'" id="'+b+'" class="popup_pointer_image" alt=""/>')
}return b
},showHoverObjects:function(b,c){var p="popup_open_direction_East";
var h=$(b).attr("class").split(/\s+/);
var l=h.length;
for(var d=0;
d<l;
d++){if(h[d].indexOf("popup_open_direction")===0){p=h[d]
}}var n=SWA.PopUp.initializePopupPointer(p);
var j=$(c);
if(j.size()>0){var e=$(b).offset();
var o=$(b).height();
var g=$(b).width()+4;
var a=$("#"+n);
a.css({display:"block"});
j.css({display:"block"});
var k=a.outerWidth();
var f=a.outerHeight();
if(p=="popup_open_direction_East"){a.css({top:e.top+o/2-f/2,left:e.left+g});
j.css({top:e.top-50,left:e.left+g+k-3})
}else{if(p.indexOf("popup_open_direction_EastNorth")===0){a.css({top:e.top+o/2-f/2,left:e.left+g});
j.css({top:e.top-70,left:e.left+g+k-8})
}else{if(p.indexOf("popup_open_direction_North")===0){a.css({top:e.top-f,left:e.left+(g/2)-(k/2)});
j.css({top:e.top-f-j.height()-2});
if(p=="popup_open_direction_North"){var m=4;
var q=e.left+(g/2)-(j.width()/2);
j.css({left:(q>m)?q:m})
}else{if(p=="popup_open_direction_NorthEast"){j.css({left:e.left})
}else{if(p=="popup_open_direction_NorthWest"){j.css({left:e.left+g-j.width()})
}}}}else{if(p.indexOf("popup_open_direction_South")===0){a.css({top:e.top+o,left:e.left+(g/2)-(k/2)});
j.css({top:e.top+o+f-3});
if(p=="popup_open_direction_South"){j.css({left:e.left+(g/2)-(j.width()/2)})
}else{if(p=="popup_open_direction_SouthEast"){j.css({left:e.left})
}else{if(p=="popup_open_direction_SouthWest"){j.css({left:e.left+g-j.width()})
}}}}else{if(p=="popup_open_direction_West"){a.css({top:e.top+o/2-f/2,left:e.left-k});
j.css({top:e.top-50,left:e.left-j.width()-k-3})
}}}}}toggleSelectBoxVisibilityUnderPopups("hidden",j);
j.find("."+SWA.PopUp.close_container_class).show();
SWA.popUpAccessible=new popUpAccessible(j,b,SWA.PopUp.hideHoverObjects,".popup_close_container")
}},hideHoverObjects:function(){var b=SWA.PopUp.getAllPointerIds();
var a=$("#page_bottom_popup_outer_container ."+SWA.PopUp.popup_container_class+", #page_bottom_popup_outer_container_async ."+SWA.PopUp.popup_container_class+", #fullFareDivReturning , .js-pointsCalcDiv , #earlyBirdCheckinExclusions , #earlyBirdAlistPopup , #fullFareDivDeparting , #routingHoverTable , #fareProductHover , #fare_product_pointer , .fullFareDiv ."+SWA.PopUp.popup_container_class+", .farePopupTable");
a.each(function(){toggleSelectBoxVisibilityUnderPopups("visible",this)
});
a.css({display:"none"});
$(b).css({display:"none"})
}};
function toggleSelectBoxVisibilityUnderPopups(e,b){if(!$.browser.msie){return
}if(e!="visible"&&e!="hidden"){e="visible"
}var f=$(b).offset();
var a=$(b).height();
var d=$(b).width();
var c=$(b).attr("id");
$("SELECT").each(function(){if(!c||$(this).parents("#"+c).size()==0){var h=$(this).offset();
var i=$(this).height();
var m=$(this).width();
var g=between(h.left,f.left,f.left+d);
var k=between(h.left+m,f.left,f.left+d);
var l=between(h.top,f.top,f.top+a);
var j=between(h.top+i,f.top,f.top+a);
if((g||k)&&(l||j)){$(this).css("visibility",e)
}}})
}function hideHoverObjects(){if(!SWA.PopUp.popup_is_opening){SWA.PopUp.hideHoverObjects();
var a=".priceItineraryPopupTable, #earlyBirdCheckinHelp, #priceItineraryKeyBusinessSelectPopup, #giftCardMessagePopup, #giftCardFAQ, .js-pointsCalcDiv, .js-taxesAndFeesDiv, js-umChargeDiv, .fullFareDiv";
if(typeof additionalPopupDivs==="function"){a+=additionalPopupDivs()
}var b=$(a);
$(b).each(function(){if($(this).css("display")!="none"){toggleSelectBoxVisibilityUnderPopups("visible",this)
}});
b.css({display:"none"});
$("#price_itinerary_pointer, #pointer_point_to_left, #pointer_point_to_right, #earlyBirdCheckinHelpPointer, #earlyBirdCheckinExclusionsPointer, #priceItineraryKeyBusinessSelectPointer, #earlyBirdAlistPointer, #giftCardMessagePopupPointer, #giftcardfaqoverlaydivpointer, #popup_pointer_down").css({display:"none"})
}}function displayHelpPopup(c,f,d,g,i,h){var e=$("#popup_help_box");
var b=$("#popup_help_box_pointer");
e.removeClass();
e.addClass(i+" popup_help_box");
e.find(".popup_help_box_header_left").html(f);
e.find(".popup_help_box_content_container").html(d);
e.find(".popup_help_box_header_right DIV").click(function(){closeHelpPopup();
return false
});
b.removeClass();
b.addClass("popup_help_box_pointer_"+g+" popup_help_box_pointer");
var a=$(c).offset();
if(g=="down"){e.css({top:a.top-e.outerHeight()-b.outerHeight()+3,left:a.left-e.outerWidth()*h,display:"block"});
b.css({top:a.top-b.outerHeight(),left:a.left+$(c).outerWidth()/2-b.outerWidth()/2,display:"block"})
}else{if(g=="up"){e.css({top:a.top+$(c).outerHeight()+b.outerHeight()-3,left:a.left-e.outerWidth()*h,display:"block"});
b.css({top:a.top+$(c).outerHeight(),left:a.left+$(c).outerWidth()/2-b.outerWidth()/2,display:"block"})
}}SWA.popUpAccessible=new popUpAccessible(e,c,closeHelpPopup,".popup_help_box_header_right DIV")
}function showHelpPopup(d,f,a,c,e,b){displayHelpPopup(d,f,a,c,e,b)
}function rrPopUpHelp(b,a){showHelpUserdPopup(b);
eventStopPropagation(a);
return false
}function eventStopPropagation(a){if(typeof a=="undefined"){var a=window.event
}a.cancelBubble=true;
if(typeof a.stopPropagation=="function"){a.stopPropagation()
}}function showHelpUserdPopup(b){var a=window.loginHelpText||"";
showHelpPopup(b,"Need help logging in?",'<strong>Forgot your Rapid Rewards Number?</strong><br />If you already have a Rapid Rewards or Account number, you may use the following link to look it up.<br/><br/><a href="/rapidrewards/rr-lookup.html">Lookup Rapid Rewards Account #</a>'+a,"down","popup_help_box_forgot_rr",0.5)
}function checkinRRPopUpHelp(b,a){showCheckinRRHelpUserPopup(b);
a.cancelBubble=true;
return false
}function showCheckinRRHelpUserPopup(a){showHelpPopup(a,"Rapid Rewards Number",'Enter your Rapid Rewards number to ensure you get points for this flight.<br /><br/>Forgot your Rapid Rewards Number?<br/><a href="/rapidrewards/rr-lookup.html" target="_blank">Lookup Rapid Rewards Account #</a><br/>',"down","popup_checkin_forgot_rr",0.5)
}function showPromoCodeHelpPopup(a){showHelpPopup(a,"<h1 class='promoCode-text--heading'>What is a promo code?</h1>","A promotion code is a series of letters and/or numbers that allow Customers to receive a discount off of Southwest Airlines' published airfares.","up","popup_help_box_promo_code popup--borderFocus",0.5)
}function showPromoCodeHelpWidgetPopup(d){var b=$(".js-wcm_booking_widget_field_help_body").html();
var a;
var c=$(".js-wcm_booking_widget_field_help_title").html();
a='<h1 class="promoCode-text--heading">'+c+"</h1>";
showHelpPopup(d,a,b,"up","popup_help_widget_box_promo_code popup--borderFocus",0.5)
}function closeHelpPopup(){var b=$("#popup_help_box");
var a=$("#popup_help_box_pointer");
b.css({display:"none"});
a.css({display:"none"});
a.removeClass();
a.addClass("popup_help_box_pointer")
}function pointerWithinObject(a,b){var d=$("#"+b);
var c=a.pageX;
var e=a.pageY;
var f=parseInt(d.css("left"));
var g=parseInt(d.css("top"));
var i=d.outerHeight();
var h=d.outerWidth();
return(between(c,f,f+h)&&between(e,g,g+i))
}function between(c,a,b){return(c>=a&&c<=b)
}$(document).ready(function(){var a=27;
$("#right_column_account_login_form_field_rr_help_link").click(function(b){return rrPopUpHelp($(this),b)
});
$(".promo-code-icon, .js-info-icon--button").click(function(c){showPromoCodeHelpPopup($(this));
SWA.PopUp.hideHoverObjects();
var b=$(".swa-component-overlay:visible, .overlay-pointer").hide();
c.stopPropagation();
return false
});
$(".js-promo-code-icon--button").click(function(b){showPromoCodeHelpWidgetPopup($(this));
SWA.PopUp.hideHoverObjects();
$(".swa-component-overlay:visible, .overlay-pointer").hide();
b.stopPropagation();
return false
});
$(document).click(function(b){if(!pointerWithinObject(b,"popup_help_box")){closeHelpPopup()
}});
$(".swa-header--link").click(function(b){if(!pointerWithinObject(b,"popup_help_box")){closeHelpPopup()
}});
$(document).keydown(function(b){if(b.keyCode==a){closeHelpPopup()
}})
});
/*! a11y_errors.js */
$(document).ready(function(){var b=$(".swa_forms_fieldError, .fieldError, .swa_forms_fieldError, .field-error, .routeMapErrorField, .loginFieldError");
var a=function(){var c=$("#error_wrapper, .oopsError_expandible_wrapper-inner, #a11y_error_wrapper, .js-request-focus-onstart, .js-rr-gh-errors-wrapper");
if(document.activeElement!==c[0]){setTimeout(function(){c.focus()
},800)
}else{if(c.length){c.before('<div class="screenreader-only a11y_error_focus_fix" tabindex="-1"></div>');
$(".a11y_error_focus_fix").focus();
a()
}}};
b.attr("aria-invalid","true");
a();
if($("#a11y_error_wrapper").length){$(".js-request-focus-onstart").removeAttr("tabindex")
}});
/*! mp_linkcode.js */
var MP={Version:"3.1.1.0",SrcLang:"en",UrlLang:"mp_js_current_lang",SrcUrl:decodeURIComponent("mp_js_orgin_url"),oSite:decodeURIComponent("mp_js_origin_baseUrl"),tSite:decodeURIComponent("mp_js_translated_baseUrl"),init:function(){if(MP.oSite.indexOf("p_js_")==1){MP.SrcUrl=window.top.document.location.href;
MP.oSite=MP.tSite=window.top.document.location.host;
MP.UrlLang=MP.SrcLang
}},switchLanguage:function(c,a,e){var e=e;
var d=MP.oSite.replace("http://","").replace("https://","").replace(/\/?$/,"");
var b=MP.tSite.replace("http://","").replace("https://","").replace(/\/?$/,"");
c=c.replace("http://","").replace("https://","").replace(/\/?$/,"");
if(e&&(typeof MpStorage!=="undefined")&&(typeof MpStorage.updatePref!=="undefined")){if(a){var f=a.substring(0,2);
a=f==MP.UrlLang?MP.SrcLang+a.substring(2):a
}MpStorage.updatePref(c,a)
}setTimeout(function(){var g=document.createElement("SCRIPT");
if(c==d){g.src=location.protocol+"//"+b+"?1023749634;"+encodeURIComponent(location.href)
}else{g.src=location.protocol+"//"+c+"?1023749632;"+encodeURIComponent(MP.SrcUrl)
}var h=document.getElementsByTagName("script")[0];
h.parentNode.insertBefore(g,h)
},500);
return false
},switchToLang:function(a){if(window.top.location.href==a){if((typeof MpStorage!=="undefined")&&(typeof MpStorage.updatePref!=="undefined")){MpStorage.updatePref(MP.oSite,MP.SrcLang)
}}else{window.top.location.href=a
}}};
/*! a11y.js */
$(function(){$.arialive=function(b,c){var a=$(".js-arialive"),c=c||"assertive";
if(a.length){a.attr("aria-live","off");
a.html("").attr("aria-live",c);
a.html(b);
return this
}}
});
$(document).ready(function(){setTimeout(function(){$("iframe").each(function(){if(!$(this).attr("title")){$(this).attr({tabindex:"-1",title:"Advertising"})
}})
},1500)
});
/*! utility.js */
var swa=typeof(swa)==="undefined"?{}:swa;
if(!String.prototype.startsWith){String.prototype.startsWith=function(a){return !this.indexOf(a)
}
}swa.getNameValuePairValue=function(d,c){var a=null;
if((arguments.length==2)&&(d!="")&&(c!="")){var b=new RegExp(c+"=([\\w|-]+)");
a=d.match(b);
if((a!=null)&&(a.length>1)){a=a[1]
}}return a
};
/*! overlay.js */
$(document).ready(function(){swa.Overlay={};
swa.Overlay.POINTER_HEIGHT=17;
swa.Overlay.POINTER_WIDTH=31;
$(".overlay-trigger").bind("click",function(u){u.stopPropagation();
u.preventDefault();
SWA.PopUp.hideHoverObjects();
closeHelpPopup();
$(".swa-component-overlay:visible, .overlay-pointer:visible").hide();
var h=$(this);
var g=h.height();
var r=h.width();
var p=h.offset();
var a=p.top;
var m=p.left;
var q=h.attr("href");
var l=h.attr("data-direction");
l=l||"BEST";
l=l.toUpperCase();
var t=swa.getNameValuePairValue(q,"page");
var s=$("."+t);
var o,b,n,f,j,v,k;
s.css({display:"block",top:-1000,left:-1000});
n=s[0].offsetHeight;
f=s[0].offsetWidth;
if(l=="BEST"){l="ABOVE";
if(a-$(window).scrollTop()<n+swa.Overlay.POINTER_HEIGHT){l="BELOW"
}}if((l=="LEFT")||(l=="RIGHT")){swa.Overlay.POINTER_HEIGHT=27;
swa.Overlay.POINTER_WIDTH=16
}switch(l){case"ABOVE":o=a-n-swa.Overlay.POINTER_HEIGHT+2;
b=m+(r/2)-(f/2);
j=a-swa.Overlay.POINTER_HEIGHT;
v=m+(r/2)-(swa.Overlay.POINTER_WIDTH/2);
k="icon-pointer-down";
break;
case"BELOW":o=a+g+swa.Overlay.POINTER_HEIGHT-2;
b=m+(r/2)-(f/2);
j=a+g;
v=m+(r/2)-(swa.Overlay.POINTER_WIDTH/2);
k="icon-pointer-up";
break;
case"LEFT":o=a+(g/2)-(n/2);
b=m-f-swa.Overlay.POINTER_WIDTH+2;
j=a+(g/2)-(swa.Overlay.POINTER_HEIGHT/2);
v=m-swa.Overlay.POINTER_WIDTH;
k="icon-pointer-right";
break;
case"RIGHT":o=a+(g/2)-(n/2);
b=m+r+swa.Overlay.POINTER_WIDTH-2;
j=a+(g/2)-(swa.Overlay.POINTER_HEIGHT/2);
v=m+r;
k="icon-pointer-left";
break;
case"ABOVE-LEFT":o=a-n-swa.Overlay.POINTER_HEIGHT+2;
b=m+(r/2)-(f/10);
j=a-swa.Overlay.POINTER_HEIGHT;
v=m+(r/2)-(swa.Overlay.POINTER_WIDTH/2);
k="icon-pointer-down";
break;
case"ABOVE-RIGHT":o=a-n-swa.Overlay.POINTER_HEIGHT+2;
b=m-(f/(1+1/10))+(r/2);
j=a-swa.Overlay.POINTER_HEIGHT;
v=m+(r/2)-(swa.Overlay.POINTER_WIDTH/2);
k="icon-pointer-down";
break;
case"BELOW-LEFT":o=a+g+swa.Overlay.POINTER_HEIGHT-2;
b=m+(r/2)-(f/10);
j=a+g;
v=m+(r/2)-(swa.Overlay.POINTER_WIDTH/2);
k="icon-pointer-up";
break;
case"BELOW-RIGHT":o=a+g+swa.Overlay.POINTER_HEIGHT-2;
b=m-(f/(1+1/10))+(r/2);
j=a+g;
v=m+(r/2)-(swa.Overlay.POINTER_WIDTH/2);
k="icon-pointer-up";
break;
case"RIGHT-TOP":o=a+(g/3)-(n/3);
b=m+r+(swa.Overlay.POINTER_WIDTH/2)-1.5;
j=a+(g/2)-(swa.Overlay.POINTER_HEIGHT/2)-6;
v=m+r;
k="icon-pointer-left";
break;
case"RIGHT-BOTTOM":o=a-(n-g)*(1-1/10);
b=m+r+(swa.Overlay.POINTER_WIDTH/2)-1.5;
j=a+(g/2)-(swa.Overlay.POINTER_HEIGHT/2)-6;
v=m+r;
k="icon-pointer-left";
break;
case"LEFT-TOP":o=a+(g/3)-(n/3);
b=m-f-(swa.Overlay.POINTER_WIDTH/2)+1.5;
j=a+(g/2)-(swa.Overlay.POINTER_HEIGHT/2)-6;
v=m-(swa.Overlay.POINTER_WIDTH/2);
k="icon-pointer-right";
break;
case"LEFT-BOTTOM":o=a-(n-g)*(1-1/10);
b=m-f-(swa.Overlay.POINTER_WIDTH/2)+1.5;
j=a+(g/2)-(swa.Overlay.POINTER_HEIGHT/2)-6;
v=m-(swa.Overlay.POINTER_WIDTH/2);
k="icon-pointer-right";
break
}var i=$(".overlay-pointer");
if(i.length==0){i=$('<div class="overlay-pointer '+k+'" style="left:'+v+"px; top:"+j+'px"></div>');
i.insertAfter(s)
}else{i[0].className="";
i.addClass("overlay-pointer "+k).css({left:v,top:j})
}var d=s.find(".heading");
if(d.find(".overlay-close").length==0){d.append('<span class="overlay-close"><span class="overlay-close-text">Close</span><span class="icon-close-overlay"></span></span>')
}new popUpAccessible(s,h,c,".overlay-close");
s.css({top:o,left:b});
i.show();
function c(){s.hide();
i.hide()
}$(document).click(function(y){var w=$(".swa-component-overlay:visible");
if(w.length){var x=$(y.target);
if(x.parents(".swa-component-overlay").length){if(x.parents(".overlay-close").length==0){return true
}}c()
}});
return false
})
});
/*! gsa-autocomplete.js */
var gsaAutocomplete=(function(b){b.Configuration=function a(k){var f={data:"list-required",url:"list-required",dataType:"json",listLocation:function(l){return l
},xmlElementName:"",getValue:function(l){return l
},autocompleteOff:true,placeholder:false,ajaxCallback:function(){},matchResponseProperty:false,list:{sort:{enabled:false,method:function(m,l){m=f.getValue(m);
l=f.getValue(l);
if(m<l){return -1
}if(m>l){return 1
}return 0
}},maxNumberOfElements:6,hideOnEmptyPhrase:true,match:{enabled:false,caseSensitive:false,method:function(m,l){if(m.search(l)>-1){return true
}else{return false
}}},showAnimation:{type:"normal",time:400,callback:function(){}},hideAnimation:{type:"normal",time:400,callback:function(){}},onClickEvent:function(){},onSelectItemEvent:function(){},onLoadEvent:function(){},onChooseEvent:function(){},onKeyEnterEvent:function(){},onMouseOverEvent:function(){},onMouseOutEvent:function(){},onShowListEvent:function(){},onHideListEvent:function(){}},highlightPhrase:true,theme:"",cssClasses:"",minCharNumber:0,requestDelay:0,adjustWidth:true,ajaxSettings:{},preparePostData:function(m,l){return m
},loggerEnabled:true,template:"",categoriesAssigned:false,categories:[{maxNumberOfElements:4}]};
var i=["ajaxSettings","template"];
this.get=function(l){return f[l]
};
this.equals=function(l,m){if(g(l)){if(f[l]===m){return true
}}return false
};
this.checkDataUrlProperties=function(){if(f.url==="list-required"&&f.data==="list-required"){return false
}return true
};
this.checkRequiredProperties=function(){for(var l in f){if(f[l]==="required"){logger.error("Option "+l+" must be defined");
return false
}}return true
};
this.printPropertiesThatDoesntExist=function(l,m){j(l,m)
};
e();
d();
if(f.loggerEnabled===true){j(console,k)
}h();
c();
function e(){if(k.dataType==="xml"){if(!k.getValue){k.getValue=function(q){return $(q).text()
}
}if(!k.list){k.list={}
}if(!k.list.sort){k.list.sort={}
}k.list.sort.method=function(r,q){r=k.getValue(r);
q=k.getValue(q);
if(r<q){return -1
}if(r>q){return 1
}return 0
};
if(!k.list.match){k.list.match={}
}k.list.match.method=function(r,q){if(r.search(q)>-1){return true
}else{return false
}}
}if(k.categories!==undefined&&k.categories instanceof Array){var l=[];
for(var m=0,o=k.categories.length;
m<o;
m+=1){var n=k.categories[m];
for(var p in f.categories[0]){if(n[p]===undefined){n[p]=f.categories[0][p]
}}l.push(n)
}k.categories=l
}}function d(){f=l(f,k);
function l(n,o){var p=n||{};
for(var m in n){if(o[m]!==undefined&&o[m]!==null){if(typeof o[m]!=="object"||o[m] instanceof Array){p[m]=o[m]
}else{l(n[m],o[m])
}}}if(o.data!==undefined&&o.data!==null&&typeof o.data==="object"){p.data=o.data
}return p
}}function c(){if(f.url!=="list-required"&&typeof f.url!=="function"){var l=f.url;
f.url=function(){return l
}
}if(f.ajaxSettings.url!==undefined&&typeof f.ajaxSettings.url!=="function"){var l=f.ajaxSettings.url;
f.ajaxSettings.url=function(){return l
}
}if(typeof f.listLocation==="string"){var m=f.listLocation;
if(f.dataType.toUpperCase()==="XML"){f.listLocation=function(o){return $(o).find(m)
}
}else{f.listLocation=function(o){return o[m]
}
}}if(typeof f.getValue==="string"){var n=f.getValue;
f.getValue=function(o){return o[n]
}
}if(k.categories!==undefined){f.categoriesAssigned=true
}}function h(){if(k.ajaxSettings!==undefined&&typeof k.ajaxSettings==="object"){f.ajaxSettings=k.ajaxSettings
}else{f.ajaxSettings={}
}}function g(l){if(f[l]!==undefined&&f[l]!==null){return true
}else{return false
}}function j(l,m){n(f,m);
function n(p,q){for(var o in q){if(p[o]===undefined){l.log("Property '"+o+"' does not exist in gsaAutocomplete options API.")
}if(typeof p[o]==="object"&&$.inArray(o,i)===-1){n(p[o],q[o])
}}}}};
return b
})(gsaAutocomplete||{});
var gsaAutocomplete=(function(b){b.Logger=function a(){this.error=function(c){console.log("ERROR: "+c)
};
this.warning=function(c){console.log("WARNING: "+c)
}
};
return b
})(gsaAutocomplete||{});
var gsaAutocomplete=(function(a){a.Constans=function b(){var c={CONTAINER_CLASS:"easy-autocomplete-container",CONTAINER_ID:"eac-container-",WRAPPER_CSS_CLASS:"easy-autocomplete",LIST_CSS_CLASS:"easy-autocomplete-list"};
this.getValue=function(d){return c[d]
}
};
return a
})(gsaAutocomplete||{});
var gsaAutocomplete=(function(b){b.ListBuilderService=function a(f,d){this.init=function(i){var h=[],g={};
g.data=f.get("listLocation")(i);
g.getValue=f.get("getValue");
g.maxListSize=f.get("list").maxNumberOfElements;
h.push(g);
return h
};
this.updateCategories=function(h,k){if(f.get("categoriesAssigned")){h=[];
for(var j=0;
j<f.get("categories").length;
j+=1){var g=c(f.get("categories")[j],k);
h.push(g)
}}return h
};
this.convertXml=function(g){if(f.get("dataType").toUpperCase()==="XML"){for(var h=0;
h<g.length;
h+=1){g[h].data=e(g[h])
}}return g
};
this.processData=function(g,k){for(var h=0,j=g.length;
h<j;
h+=1){g[h].data=d(f,g[h],k)
}return g
};
this.checkIfDataExists=function(g){for(var h=0,j=g.length;
h<j;
h+=1){if(g[h].data!==undefined&&g[h].data instanceof Array){if(g[h].data.length>0){return true
}}}return false
};
function c(i,j){var h={};
if(f.get("dataType").toUpperCase()==="XML"){h=k()
}else{h=g()
}if(i.header!==undefined){h.header=i.header
}if(i.maxNumberOfElements!==undefined){h.maxNumberOfElements=i.maxNumberOfElements
}if(f.get("list").maxNumberOfElements!==undefined){h.maxListSize=f.get("list").maxNumberOfElements
}if(i.getValue!==undefined){if(typeof i.getValue==="string"){var l=i.getValue;
h.getValue=function(m){return m[l]
}
}else{if(typeof i.getValue==="function"){h.getValue=i.getValue
}}}else{h.getValue=f.get("getValue")
}return h;
function k(){var m={},n;
if(i.xmlElementName!==undefined){m.xmlElementName=i.xmlElementName
}if(i.listLocation!==undefined){n=i.listLocation
}else{if(f.get("listLocation")!==undefined){n=f.get("listLocation")
}}if(n!==undefined){if(typeof n==="string"){m.data=$(j).find(n)
}else{if(typeof n==="function"){m.data=n(j)
}}}else{m.data=j
}return m
}function g(){var m={};
if(i.listLocation!==undefined){if(typeof i.listLocation==="string"){m.data=j[i.listLocation]
}else{if(typeof i.listLocation==="function"){m.data=i.listLocation(j)
}}}else{m.data=j
}return m
}}function e(g){var h=[];
if(g.xmlElementName===undefined){g.xmlElementName=f.get("xmlElementName")
}$(g.data).find(g.xmlElementName).each(function(){h.push(this)
});
return h
}};
return b
})(gsaAutocomplete||{});
var gsaAutocomplete=(function(a){a.proccess=function b(c,i,d){a.proccess.match=g;
var h=i.data,f=d;
h=k(h,f);
h=j(h);
h=e(h);
return h;
function k(p,l){var q=[],o="";
if(c.get("list").match.enabled){for(var m=0,n=p.length;
m<n;
m+=1){o=c.get("getValue")(p[m]);
if(g(o,l)){q.push(p[m])
}}}else{q=p
}return q
}function g(m,l){if(!c.get("list").match.caseSensitive){if(typeof m==="string"){m=m.toLowerCase()
}l=l.toLowerCase()
}if(c.get("list").match.method(m,l)){return true
}else{return false
}}function j(l){if(i.maxNumberOfElements!==undefined&&l.length>i.maxNumberOfElements){l=l.slice(0,i.maxNumberOfElements)
}return l
}function e(l){if(c.get("list").sort.enabled){l.sort(c.get("list").sort.method)
}return l
}};
return a
})(gsaAutocomplete||{});
var gsaAutocomplete=(function(a){a.Template=function b(c){var e={basic:{type:"basic",method:function(h){return h
},cssClass:""},description:{type:"description",fields:{description:"description"},method:function(h){return h+" - description"
},cssClass:"eac-description"},iconLeft:{type:"iconLeft",fields:{icon:""},method:function(h){return h
},cssClass:"eac-icon-left"},iconRight:{type:"iconRight",fields:{iconSrc:""},method:function(h){return h
},cssClass:"eac-icon-right"},links:{type:"links",fields:{link:""},method:function(h){return h
},cssClass:""},custom:{type:"custom",method:function(){},cssClass:""}},d=function(j){var h=j.fields,i;
if(j.type==="description"){i=e.description.method;
if(typeof h.description==="string"){i=function(l,k){return l+" - <span>"+k[h.description]+"</span>"
}
}else{if(typeof h.description==="function"){i=function(l,k){return l+" - <span>"+h.description(k)+"</span>"
}
}}return i
}if(j.type==="iconRight"){if(typeof h.iconSrc==="string"){i=function(l,k){return l+"<img class='eac-icon' src='"+k[h.iconSrc]+"' />"
}
}else{if(typeof h.iconSrc==="function"){i=function(l,k){return l+"<img class='eac-icon' src='"+h.iconSrc(k)+"' />"
}
}}return i
}if(j.type==="iconLeft"){if(typeof h.iconSrc==="string"){i=function(l,k){return"<img class='eac-icon' src='"+k[h.iconSrc]+"' />"+l
}
}else{if(typeof h.iconSrc==="function"){i=function(l,k){return"<img class='eac-icon' src='"+h.iconSrc(k)+"' />"+l
}
}}return i
}if(j.type==="links"){if(typeof h.link==="string"){i=function(l,k){return"<a href='"+k[h.link]+"' >"+l+"</a>"
}
}else{if(typeof h.link==="function"){i=function(l,k){return"<a href='"+h.link(k)+"' >"+l+"</a>"
}
}}return i
}if(j.type==="custom"){return j.method
}return e.basic.method
},g=function(h){if(!h||!h.type){return e.basic.method
}if(h.type&&e[h.type]){return d(h)
}else{return e.basic.method
}},f=function(h){var i=function(){return""
};
if(!h||!h.type){return i
}if(h.type&&e[h.type]){return(function(){var j=e[h.type].cssClass;
return function(){return j
}
})()
}else{return i
}};
this.getTemplateClass=f(c);
this.build=g(c)
};
return a
})(gsaAutocomplete||{});
var gsaAutocomplete=(function(a){a.main=function b(d,f){var e={name:"gsaAutocomplete",shortcut:"eac"};
var m=new a.Constans(),u=new a.Configuration(f),x=new a.Logger(),v=new a.Template(f.template),k=new a.ListBuilderService(u,a.proccess),t=u.equals,o=d,q="",y=[],r=-1,i;
a.consts=m;
this.getConstants=function(){return m
};
this.getConfiguration=function(){return u
};
this.getContainer=function(){return q
};
this.getSelectedItemIndex=function(){return r
};
this.getItems=function(){return y
};
this.getItemData=function(z){if(y.length<z||y[z]===undefined){return -1
}else{return y[z]
}};
this.getSelectedItemData=function(){return this.getItemData(r)
};
this.build=function(){w()
};
this.init=function(){s()
};
function s(){if(o.length===0){x.error("Input field doesn't exist.");
return
}if(!u.checkDataUrlProperties()){x.error("One of options variables 'data' or 'url' must be defined.");
return
}if(!u.checkRequiredProperties()){x.error("Will not work without mentioned properties.");
return
}w();
c()
}function w(){if(o.parent().hasClass(m.getValue("WRAPPER_CSS_CLASS"))){G();
F()
}z();
E();
q=$("#"+h());
if(u.get("placeholder")){o.attr("placeholder",u.get("placeholder"))
}function z(){var I=$("<div>"),H=m.getValue("WRAPPER_CSS_CLASS");
if(u.get("theme")&&u.get("theme")!==""){H+=" eac-"+u.get("theme")
}if(u.get("cssClasses")&&u.get("cssClasses")!==""){H+=" "+u.get("cssClasses")
}if(v.getTemplateClass()!==""){H+=" "+v.getTemplateClass()
}I.addClass(H);
o.wrap(I);
if(u.get("adjustWidth")===true){C()
}}function C(){o.parent().css("width","auto")
}function F(){o.unwrap()
}function E(){var H=$("<div>").addClass(m.getValue("CONTAINER_CLASS"));
H.attr("id",h()).prepend($("<ul>").attr({id:h()+"--list","aria-expanded":"true",role:"listbox"}).addClass(m.getValue("LIST_CSS_CLASS")));
(function(){H.bind("show.eac",function(){switch(u.get("list").showAnimation.type){case"slide":var I=u.get("list").showAnimation.time,J=u.get("list").showAnimation.callback;
H.find("ul").slideDown(I,J);
break;
case"fade":var I=u.get("list").showAnimation.time,J=u.get("list").showAnimation.callback;
H.find("ul").fadeIn(I),J;
break;
default:H.find("ul").show();
break
}u.get("list").onShowListEvent()
}).bind("hide.eac",function(){switch(u.get("list").hideAnimation.type){case"slide":var I=u.get("list").hideAnimation.time,J=u.get("list").hideAnimation.callback;
H.find("ul").slideUp(I,J);
break;
case"fade":var I=u.get("list").hideAnimation.time,J=u.get("list").hideAnimation.callback;
H.find("ul").fadeOut(I,J);
break;
default:H.find("ul").hide();
break
}u.get("list").onHideListEvent()
}).bind("selectElement.eac",function(){H.find("ul li").removeClass("selected");
H.find("ul li").eq(r).addClass("selected");
u.get("list").onSelectItemEvent()
}).bind("loadElements.eac",function(K,L,M){var R="",O=H.find("ul");
O.empty().detach();
y=[];
var J=0;
for(var I=0,S=L.length;
I<S;
I+=1){var P=L[I].data;
if(P.length===0){o.attr("aria-activedescendant","");
$.arialive("Your query does not give any results");
continue
}if(L[I].header!==undefined&&L[I].header.length>0){O.append("<div class='eac-category' >"+L[I].header+"</div>")
}for(var N=0,Q=P.length;
N<Q&&J<L[I].maxListSize;
N+=1){R=$("<li id='eac-"+o.attr("id")+"--item-"+N+"' aria-label='"+L[I].getValue(P[N])+"' class='easy-autocomplete-item' role='option'><div class='eac-item'></div></li>");
(function(){var U=N,T=J,V=L[I].getValue(P[U]);
R.find(" > div").bind("click",function(){o.val(V).trigger("change");
r=T;
l(T);
u.get("list").onClickEvent();
u.get("list").onChooseEvent()
}).mouseover(function(){r=T;
l(T);
u.get("list").onMouseOverEvent()
}).mouseout(function(){u.get("list").onMouseOutEvent()
}).html(v.build(B(V,M),P[U]))
})();
O.append(R);
y.push(P[N]);
J+=1
}o.focus();
$.arialive(J+" result"+((J>1)?"s":"")+" displayed for your search. Use the arrow keys to browse them")
}H.append(O);
u.get("list").onLoadEvent()
})
})();
o.after(H)
}function G(){o.next("."+m.getValue("CONTAINER_CLASS")).remove()
}function B(I,H){if(u.get("highlightPhrase")&&H!==""){return D(I,H)
}else{return I
}}function A(H){return H.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")
}function D(J,H){var I=A(H);
return(J+"").replace(new RegExp("("+I+")","gi"),"<span class='easy-autocomplete-already-typed'>$1</span>")
}}function h(){var z=o.attr("id");
z=m.getValue("CONTAINER_ID")+z;
return z
}function c(){B();
function B(){if(t("autocompleteOff",true)){E()
}A();
z();
D();
F();
C();
G()
}function A(){o.focusout(function(){var K=o.val(),H;
if(!u.get("list").match.caseSensitive){K=K.toLowerCase()
}for(var I=0,J=y.length;
I<J;
I+=1){H=u.get("getValue")(y[I]);
if(!u.get("list").match.caseSensitive){H=H.toLowerCase()
}if(H===K){r=I;
l(r);
return
}}})
}function z(){var I=o.attr("id");
var H="eac-container-"+I+"--list";
var J=$("#"+H);
o.attr({role:"combobox","aria-autocomplete":"inline","aria-owns":H,"aria-controls":H,"aria-activedescendant":""}).unbind("keyup").keyup(function(M){switch(M.keyCode){case 27:p();
o.attr("aria-activedescendant","");
break;
case 38:M.preventDefault();
if(y.length>0&&r>0){r-=1;
o.val(u.get("getValue")(y[r]));
l(r)
}o.attr("aria-activedescendant","eac-"+I+"--item-"+r);
break;
case 40:M.preventDefault();
if(y.length>0&&r<y.length-1){r+=1;
o.val(u.get("getValue")(y[r]));
l(r)
}o.attr("aria-activedescendant","eac-"+I+"--item-"+r);
break;
default:if(M.keyCode>40||M.keyCode===8){var L=o.val();
if(!(u.get("list").hideOnEmptyPhrase===true&&M.keyCode===8&&L==="")){if(u.get("requestDelay")>0){if(i!==undefined){clearTimeout(i)
}i=setTimeout(function(){K(L)
},u.get("requestDelay"))
}else{K(L)
}}else{p()
}o.attr("aria-activedescendant","")
}break
}function K(Q){if(Q.length<u.get("minCharNumber")){J.hide();
return
}if(u.get("data")!=="list-required"){var R=u.get("data");
var N=k.init(R);
N=k.updateCategories(N,R);
N=k.processData(N,Q);
n(N,Q);
if(o.parent().find("li").length>0){j()
}else{p()
}}var P=S();
if(P.url===undefined||P.url===""){P.url=u.get("url")
}if(P.dataType===undefined||P.dataType===""){P.dataType=u.get("dataType")
}if(P.url!==undefined&&P.url!=="list-required"){P.url=P.url(Q);
P.url+=Q;
P.data=u.get("preparePostData")(P.data,Q);
P.success=function(U){var T=k.init(U);
T=k.updateCategories(T,U);
T=k.convertXml(T);
if(O(Q,U)){T=k.processData(T,Q);
n(T,Q)
}if(k.checkIfDataExists(T)&&o.parent().find("li").length>0){j()
}else{p()
}u.get("ajaxCallback")()
};
P.error=function(){x.warning("Fail to load response data")
};
$.ajax(P)
}function S(){var T={},U=u.get("ajaxSettings")||{};
for(var V in U){T[V]=U[V]
}return T
}function O(T,U){if(u.get("matchResponseProperty")!==false){if(typeof u.get("matchResponseProperty")==="string"){return(U[u.get("matchResponseProperty")]===T)
}if(typeof u.get("matchResponseProperty")==="function"){return(u.get("matchResponseProperty")(U)===T)
}return true
}else{return true
}}}})
}function D(){o.bind("keydown",function(H){H=H||window.event;
var I=H.keyCode;
if(I===38){suppressKeypress=true;
return false
}}).keydown(function(H){if(H.keyCode===13&&r>-1){o.val(u.get("getValue")(y[r]));
u.get("list").onKeyEnterEvent();
u.get("list").onChooseEvent();
r=-1;
p();
H.preventDefault()
}})
}function F(){o.unbind("keypress")
}function C(){o.focus(function(){if(o.val()!==""&&y.length>0){r=-1;
j()
}})
}function G(){o.blur(function(){setTimeout(function(){r=-1;
p()
},250)
})
}function E(){o.attr("autocomplete","off")
}}function j(){q.trigger("show.eac")
}function p(){q.trigger("hide.eac")
}function l(z){q.trigger("selectElement.eac",z)
}function n(A,z){q.trigger("loadElements.eac",[A,z])
}function g(){o.trigger("blur")
}};
a.eacHandles=[];
a.getHandle=function(c){return a.eacHandles[c]
};
a.inputHasId=function(c){if($(c).attr("id")!==undefined&&$(c).attr("id").length>0){return true
}else{return false
}};
a.assignRandomId=function(d){var c="";
do{c="eac-"+Math.floor(Math.random()*10000)
}while($("#"+c).length!==0);
elementId=a.consts.getValue("CONTAINER_ID")+c;
$(d).attr("id",c)
};
a.setHandle=function(c,d){a.eacHandles[d]=c
};
return a
})(gsaAutocomplete||{});
(function(a){a.fn.gsaAutocomplete=function(b){return this.each(function(){var d=a(this),c=new gsaAutocomplete.main(d,b);
if(!gsaAutocomplete.inputHasId(d)){gsaAutocomplete.assignRandomId(d)
}c.init();
gsaAutocomplete.setHandle(c,d.attr("id"))
})
};
a.fn.getSelectedItemIndex=function(){var b=a(this).attr("id");
if(b!==undefined){return gsaAutocomplete.getHandle(b).getSelectedItemIndex()
}return -1
};
a.fn.getItems=function(){var b=a(this).attr("id");
if(b!==undefined){return gsaAutocomplete.getHandle(b).getItems()
}return -1
};
a.fn.getItemData=function(c){var b=a(this).attr("id");
if(b!==undefined&&c>-1){return gsaAutocomplete.getHandle(b).getItemData(c)
}return -1
};
a.fn.getSelectedItemData=function(){var b=a(this).attr("id");
if(b!==undefined){return gsaAutocomplete.getHandle(b).getSelectedItemData()
}return -1
}
})(jQuery);
/*! gsa-search-suggestions-autocomplete.js */
$(document).ready(function(){var b=$("#swa-header--search-input");
var a=$("#searchCustomerServiceKeywords");
var c="https://"+$(location).attr("host")+"/search/suggestions/";
options={url:c,getValue:"name",list:{match:{enabled:true}},requestDelay:500,minCharNumber:3};
$(".gsa-search-header").click(function(){setTimeout(function(){var d=$("#swa-header--search-input");
d.gsaAutocomplete(options);
d.focus()
},100)
});
if(a){a.gsaAutocomplete(options)
}});