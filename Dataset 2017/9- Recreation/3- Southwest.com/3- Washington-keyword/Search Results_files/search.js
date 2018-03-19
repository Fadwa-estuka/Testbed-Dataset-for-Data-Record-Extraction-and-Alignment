$(document).ready(function() {
	search_addCounts();
	search_doBrowserSpecificStuff();
	setupSearchBox();
});

function search_addCommunitySearchResults() {

	var placePhotosOnSearchPage = function(response) {
		if (response.Responses && response.Responses[0] && response.Responses[0].DiscoverContentAction) {
			var discoveredContent = response.Responses[0].DiscoverContentAction.DiscoveredContent;
			if (discoveredContent.length > 0) {
				for (var i = 0; i < discoveredContent.length; i++) {
					var photoId = discoveredContent[i].PhotoKey.Key;
					var photoSrc = discoveredContent[i].Image.Medium;
					var newPhotoDiv = $($("#results_photo_template").html().replace(/RESULT_PHOTO_ID/g, photoId).replace(/RESULT_PHOTO_SRC/g, photoSrc));
					$("#community_results_photos").append(newPhotoDiv);
				}
				$("#community_results_photos").append("<div class='clear'></div>");
				$("#community_search_results").append($("#results_photo_wrapper"));
			}
		}
	};

	var placeVideosOnSearchPage = function(response) {
		if (response.Responses && response.Responses[0] && response.Responses[0].DiscoverContentAction) {
			var discoveredContent = response.Responses[0].DiscoverContentAction.DiscoveredContent;
			if (discoveredContent.length > 0) {
				for (var i = 0; i < discoveredContent.length; i++) {
					var videoId = discoveredContent[i].VideoKey.Key;
					var videoSrc = discoveredContent[i].VideoThumbnail
					var newVideoDiv = $($("#results_video_template").html().replace(/RESULT_VIDEO_ID/g, videoId).replace(/RESULT_VIDEO_SRC/g, videoSrc));
					$("#community_results_videos").append(newVideoDiv);
				}
				$("#community_results_videos").append("<div class='clear'></div>");
				$("#community_search_results").append($("#results_video_wrapper"));
			}
		}
	};

	var searchQuery = window.searchQuery;
	if (searchQuery) {
		var photoDiscovery = new DiscoverContentAction([], swa.sitelife.util.searchCategoryTagsFromString(searchQuery), [], new Activity("Recent"), new ContentType("PublicPhoto"), PLUCK_CONTENT_MAX_AGE, 5);
		swa.sitelife.util.sendRequestBatch(photoDiscovery, placePhotosOnSearchPage);

		var videoDiscovery = new DiscoverContentAction([], swa.sitelife.util.searchCategoryTagsFromString(searchQuery), [], new Activity("Recent"), new ContentType("PublicVideo"), PLUCK_CONTENT_MAX_AGE, 5);
		swa.sitelife.util.sendRequestBatch(videoDiscovery, placeVideosOnSearchPage);
	}
}

function search_addCounts() {
	// Page numbers
//	var count = parseInt($("b.start").text());
//	$(".search_result").each(function() {
//		lineNumber = "<div class='line_number'>" + count + "</div>"
//		$(this).prepend(lineNumber);
//		count++;
//	});
}

function search_doBrowserSpecificStuff() {
//	if ($.browser.msie && $.browser.version > 6) {
//		$("div.search_result p.search_result_links").css({marginTop:"-20px", marginLeft:"50px"});
//		$("div.search_result div.search_result_snippet").css({marginTop:"10px", marginLeft:"45px"});
//	} else if ($.browser.msie && $.browser.version <= 6) {
//		$("div.search_result p.search_result_links").css({top:"-40px", left:"50px", position:"relative"});
//		$("div.search_result div.search_result_snippet").css({left:"45px", bottom:"20px", position:"relative"});
//	} else {
//		$("div.search_result p.search_result_links").css({marginTop:"-20px", marginLeft:"50px"});
//		$("div.search_result div.search_result_snippet").css({marginLeft:"45px"});
//	}
}

function setupSearchBox() {
	var defVal = 'Search';
	$('#q').val(defVal);
	$('#q').focus(function() {
		$(this).css('color', 'black');
		if(this.value == defVal){
			this.value = '';
		}
		if(this.value != defVal){
			this.select();
		}
	});
	$('#q').blur(function() {
		if($.trim(this.value) == '' || $.trim(this.value) == defVal){
			$(this).css('color', '#b7b7b7');
			this.value = (defVal ? defVal : '');
		}
	});
}


