function collapseRefine() {
	$("ul.collapsible").each(function(){
		if ($(this).find("li").length > 5) {
			$(this).find("li:gt(2)").hide();
			$(this).append("<li class='seeAll'><a class='more'>More...</a></li>").find("a.more").click(function(){
				$(this).toggleClass("less").text($(this).hasClass("less")?"Fewer...":"More...").parents("ul.collapsible").find("li:gt(2):not(:last)").toggle();
			});
		}
	});
}

$('html').addClass('search-page');