var defaultTextGlobalNav = {
	'globalnav_header_utility_search_input': 'Search Southwest'
};

$(document).ready(function() {
    var toggle = $('#globalnav_footer_site_links_morelinks_toggle');
    toggle.css ({display:'inline-block'});

    // links are rendered on page now, so get the height of their container and save for grow/shrink operations
    var footerLinksHeight = $('#globalnav_footer_site_links_container').height();

    // set columns to all be this height
    $(".globalnav_footer_site_links").css ({height:footerLinksHeight});

    // get rendered size of footer and set style to this, so when we shrink link container, this footer container won't shrink too
    var footerContainer  = $('#globalnav_footer_container');
    footerContainer.css ({height:footerContainer.height()});

    /* If user has javascript enabled and the load expanded flag isn't set, hide extra links (user can use arrow button to expand footer). */
    if (typeof globalNavLoadFooterExpanded == 'undefined') {
        $('#globalnav_footer_site_links_container').css ({height:40});
        toggle.removeClass ('globalnav_footer_site_links_morelinks_toggle_open')
              .addClass    ('globalnav_footer_site_links_morelinks_toggle globalnav_footer_site_links_morelinks_toggle_closed');
    }

	// set up default text display
	for (var id in defaultTextGlobalNav) {
		var obj=$("#"+id);
		obj.focus(function () {
			if ($(this).hasClass("show_defaulttext")) {
				$(this).val("");
				$(this).removeClass("show_defaulttext");
			}
		});

		obj.blur(function () {
			if ($(this).val() == "") {
				$(this).addClass("show_defaulttext");
				$(this).val(defaultTextGlobalNav[$(this).attr("id")]);
			}
		});

		if ($(obj).val() == "" || $(obj).val() == defaultTextGlobalNav[id]) {
			obj.addClass("show_defaulttext");
			obj.val(defaultTextGlobalNav[id]);
		}
	}

    $("#globalnav_footer_site_links_morelinks_toggle").click (function () {
        var toggle = $(this);
        if (toggle.hasClass ("globalnav_footer_site_links_morelinks_toggle_open") && !toggle.hasClass ("globalnav_footer_site_links_morelinks_toggle_inprogress")) {
            toggle.removeClass ("globalnav_footer_site_links_morelinks_toggle_open")
                  .addClass    ("globalnav_footer_site_links_morelinks_toggle_closed globalnav_footer_site_links_morelinks_toggle_inprogress");
            growShrinkFooter (40);
        } else {
            if (toggle.hasClass ("globalnav_footer_site_links_morelinks_toggle_closed")) {
                 toggle.removeClass ("globalnav_footer_site_links_morelinks_toggle_closed")
                       .addClass    ("globalnav_footer_site_links_morelinks_toggle_open globalnav_footer_site_links_morelinks_toggle_inprogress");
                growShrinkFooter (footerLinksHeight);
            }
        }
        return false;
    });

    function growShrinkFooter (height) {
        $("#globalnav_footer_site_links_container").animate ({height:height}, function () {
            $("#globalnav_footer_site_links_morelinks_toggle").removeClass("globalnav_footer_site_links_morelinks_toggle_inprogress");
        });
    }

	$("#globalnav_header_primary .globalnav_header_primary_link").hover(
		function() {
			var obj=this;
			$(this).addClass("globalnav_header_subnav_ishovered");
			setTimeout(function(){
				if ($(obj).hasClass("globalnav_header_subnav_ishovered")) {
					showSubNav(obj);
				}
			},500);
		},
		function() {
			$(this).removeClass("globalnav_header_subnav_ishovered");
			hideSubNav(this);
		}
	);

	$("#globalnav_header_utility_travel_tools").click(function() {
		toggleTravelTools(this);
		return false;
	});

	$(document).click(function() {
		$("#globalnav_header_utility_travel_tools_hover_container").remove();
		repositionHoverBackdropIframe("hidden",0,0,0,0);
	});

	if($.browser.msie && parseInt($.browser.version, 10) == 6) {
		$(document.body).append('<iframe src="/assets/navigation/blank.html" scrolling="no" width="0" height="0" frameborder="0" id="globalnav_header_hover_backdrop_iframe"></iframe>');
	}

    /* RyanB - we can't use traditional javascript-based preloads here because our images are relative to our CSS file's
       location, not our javascript/page location. so instead, we append an effectively hidden element to the end
       of the document and apply a CSS class to it that will preload the image for us. note that the element isn't
       truly hidden because some browsers won't load background images on completely hidden elements.
       to preload multiple images, add and remove the classes one at a time
       */
    $(document.body).append("<div id='globalnav_preload_container'></div>");
    var preloadObj=$("#globalnav_preload_container");
    preloadObj.addClass("globalnav_preload_container_primary_nav_hover");
    preloadObj.hide();
});

function toggleTravelTools(link) {
	var obj=$(link);
	var parentLI=obj.parent();
	var subnavLinks=parentLI.find(".globalnav_header_utility_travel_tools_container");
	var travelToolsContainer=$("#globalnav_header_utility_travel_tools_hover_container");
	if (travelToolsContainer.size() == 0) {
		var travelToolsHTML="<div id='globalnav_header_utility_travel_tools_hover_container'>";
		travelToolsHTML+="<div id='globalnav_header_utility_travel_tools_hover_top_background_container'>&nbsp;</div>";
		travelToolsHTML+="<div id='globalnav_header_utility_travel_tools_hover_inner_container'>";
		travelToolsHTML+=subnavLinks.html();
		travelToolsHTML+="</div>";
		travelToolsHTML+="<div id='globalnav_header_utility_travel_tools_hover_close_container'>";
		travelToolsHTML+="<span id='globalnav_header_utility_travel_tools_hover_close_button'><a href='#'><span class='closeImg'></span><span>Close</span></a></span>";
		travelToolsHTML+="</div>";
		travelToolsHTML+="</div>";
		$(document.body).append(travelToolsHTML);
		travelToolsContainer=$("#globalnav_header_utility_travel_tools_hover_container");
		var offset=obj.offset();
		travelToolsContainer.click(function(event) {
			event.stopPropagation();
		});
		var travelToolsContainerTop=offset.top + obj.height();
		var travelToolsContainerLeft=offset.left + obj.width() - travelToolsContainer.width();
		travelToolsContainer.css({top: travelToolsContainerTop, left: travelToolsContainerLeft});
		repositionHoverBackdropIframe("visible", travelToolsContainerTop, travelToolsContainerLeft, travelToolsContainer.width(), travelToolsContainer.height());
		$("#globalnav_header_utility_travel_tools_hover_close_button").click(function() {
            closeTravelTools();
			return false;
		});
	} else {
        closeTravelTools();
    }
    return false;
}

function closeTravelTools() {
    $("#globalnav_header_utility_travel_tools_hover_container").remove();
    repositionHoverBackdropIframe("hidden",0,0,0,0);
}

function showSubNav(link) {
	var obj=$(link);
	var offsetObject=obj;
	var objid=obj.attr("id");
	var parentLI=obj.parent();
	var subnavLinks=parentLI.find(".globalnav_header_subnav_container");
	var hoverContainerColor="black";
	if (parentLI.hasClass("globalnav_header_primary_product")) {
		hoverContainerColor="blue";
		offsetObject=$("#globalnav_header_primary_link_air");
	}
	var hoverContainerColorClass="globalnav_header_subnav_hover_container_"+hoverContainerColor;

	var subnavContainer=$("#"+objid+"_hover_container");
	if (subnavContainer.size() == 0 && subnavLinks.size() > 0) {
		var subnavHTML="<div id='"+objid+"_hover_container' class='globalnav_header_subnav_hover_container "+hoverContainerColorClass+"'>";
		subnavHTML+="<table border=0 cellspacing=0 cellpadding=0 class='globalnav_header_subnav_hover_container_layout_table'>";
		subnavHTML+="<tr>";
		subnavHTML+="<td class='globalnav_header_subnav_hover_container_layout_table_tl globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
		subnavHTML+="<td class='globalnav_header_subnav_hover_container_layout_table_top'><span class='globalnav_header_subnav_hover_container_layout_table_arrow'></span></td>";
		subnavHTML+="<td class='globalnav_header_subnav_hover_container_layout_table_tr globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
		subnavHTML+="</tr>";
		subnavHTML+="<tr>";
		subnavHTML+="<td class='globalnav_header_subnav_hover_container_layout_table_left'>&nbsp;</td>";
		subnavHTML+="<td class='globalnav_header_subnav_hover_container_layout_table_center'>"+subnavLinks.html()+"</td>";
		subnavHTML+="<td class='globalnav_header_subnav_hover_container_layout_table_right'>&nbsp;</td>";
		subnavHTML+="</tr>";
		subnavHTML+="<tr>";
		subnavHTML+="<td class='globalnav_header_subnav_hover_container_layout_table_bl globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
		subnavHTML+="<td class='globalnav_header_subnav_hover_container_layout_table_bottom'>&nbsp;</td>";
		subnavHTML+="<td class='globalnav_header_subnav_hover_container_layout_table_br globalnav_header_subnav_hover_container_layout_table_corner'>&nbsp;</td>";
		subnavHTML+="</tr>";
		subnavHTML+="</table>";
		subnavHTML+="</div>";
		
		$(document.body).append(subnavHTML);
		var subnavContainerLocatorString = "#"+objid+"_hover_container";
		subnavContainer=$(subnavContainerLocatorString);

		hyperLinkFilterHookTrigger(subnavContainerLocatorString);

        if ($.browser.msie && $.browser.version < 7) {
            subnavContainer.find(".globalnav_header_subnav_hover_container_layout_table_corner").addClass("globalnav_header_subnav_hover_container_layout_table_corner_ie6");
            subnavContainer.find(".globalnav_header_subnav_hover_container_layout_table_arrow").addClass("globalnav_header_subnav_hover_container_layout_table_arrow_ie6");
        }

		var offset=offsetObject.offset();
		var subnavContainerTop=offset.top + offsetObject.height() - 10;
		var subnavContainerLeft=offset.left + 5;
		// we want a slightly different alignment for the product subnav hovers
		if (parentLI.hasClass("globalnav_header_primary_product_vacations")) {
			subnavContainerTop=offset.top + offsetObject.height() - 5;
			subnavContainerLeft=offset.left+140;
		} else if (parentLI.hasClass("globalnav_header_primary_product")) {
			subnavContainerTop=offset.top + offsetObject.height() - 5;
			subnavContainerLeft=offset.left;
		}
		subnavContainer.css({top: subnavContainerTop, left: subnavContainerLeft});
		// we are adding 10 to the top offset and reducing the height by 20 because, if the
		// iframe lies directly under the subnav, the rounded corners look weird
		repositionHoverBackdropIframe("visible", subnavContainerTop + 10, subnavContainerLeft, subnavContainer.width(), subnavContainer.height() - 20);
		subnavContainer.hover(
			function() {
				var parentPrimaryNavObj=obj;
				$(this).addClass("globalnav_header_subnav_ishovered");
			},
			function() {
				var parentPrimaryNavObj=obj;
				$(this).removeClass("globalnav_header_subnav_ishovered");
				setTimeout(function(){checkRemoveSubNav(link);},10);
			}
		);
	}
}

function hideSubNav(link) {
	setTimeout(function(){checkRemoveSubNav(link);},10);
}

function checkRemoveSubNav(link) {
	var obj=$(link);
	var subnavContainer=$("#"+obj.attr("id")+"_hover_container");
	if (!obj.hasClass("globalnav_header_subnav_ishovered") &&
		!subnavContainer.hasClass("globalnav_header_subnav_ishovered")) {
		subnavContainer.remove();
		repositionHoverBackdropIframe("hidden",0,0,0,0);
	}
}

function repositionHoverBackdropIframe(visibility, top, left, width, height) {
	var obj=$("#globalnav_header_hover_backdrop_iframe");
	if (obj.size() > 0) {
		obj.css({visibility: visibility, top: top, left: left, width: width, height: height});
	}
}

var hyperLinkFilterHookTrigger = function(linkSelector) {
    if (typeof setHyperLinkFilter == "function") {
        setHyperLinkFilter(linkSelector);
    }
};
