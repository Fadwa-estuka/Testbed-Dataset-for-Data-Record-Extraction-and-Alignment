
/**
 * @namespace Functions for adding sponsored terms to search results page right rail.
 *
 */
webmd.p.sponsored_search_result = {	

	/**
	* Holds the user's search term.
	*/
	query : (webmd.url.getParam('query')) ? webmd.url.getParam('query').replace(/^\s+/,'').replace(/\s+$/,'').replace(/\s\s+/,' ') : '',

	/**
	 * These are the configured sponsors to be displayed on the page
	 */
	sponsors 	: {
		"generalmills"	: {
			"html_img" 	: [
				/* GK: 10.23.2012 - add multiple images to rotate through them randomly */
				'<img src="'+image_server_url+'/webmd/consumer_assets/site_images/logos/client/general_mills/yoplait_logo_47x24.png">',
				'<img src="'+image_server_url+'/webmd/consumer_assets/site_images/logos/client/general_mills/cheerios_logo_47x24.jpg">'
			],
			"title"		: "Watch Health and Nutrition",
			"metric"	: "wmdSearchTrack('sponsors_1_1')",
			"link"		: "/video-minutes/default.htm",
			"anchor"	: "Videos Now",
			"id"		: "gm"
		},
		
		"zantac" : {
			"html_img" : '<img src="'+image_server_url+'/webmd/consumer_assets/site_images/logos/client/boehringer-ingelheim/logo_zantac_63x14.gif">',
			"title" : "No Pill Relieves Heartburn Faster*",
			"metric" : "wmdSearchTrack('sponsors_1_zt')",
			"link" : "/heartburn-gerd/heartburn-relief-12/fast-heartburn-relief",
			"anchor" : "Learn More",
			"id" : "zt",
			"terms" : [
			// These are the search terms to target Zantac against
			"zantac",
			"heartburn relief",
			"heartburn treatment",
			"heartburn causes",
			"heartburn symptoms",
			"indigestion heartburn",
			"fast heartburn relief",
			"nighttime heartburn relief",
			"acid indigestion",
			"24 hr heartburn relief",
			"24hr heartburn relief"
			]
		}
	},

	/**
	 * Holds the HTML structure to use for templating the right rail links
	 */
	html_frag : '<div class="specialsSponsors specialsSponsors-sponsor"><div class="roundedBoxTop_fmt"></div><div class="roundedBoxMiddle_fmt"><div class="clear_fmt"></div><h3>WebMD Sponsor <span class="roundedBoxMiddleImg_fmt"><a onclick="return openPopup(this.href,530,310);" href="http://www.webmd.com/help/webmd-sponsors"><img width="12" border="0" height="12" alt="" src="http://img.webmd.com/search/resources/search/webmd/images/questionmarksmall.gif"></a></span></h3><ul class="sponsors"></ul><div class="clear_fmt"></div></div><div class="roundedBoxBottom_fmt"></div></div>',

	/**
	 * Initializes the 
	 * @returns {Boolean} true if all actions run, false if not running on the search results page
	 */
	 init : function() {
		var self = this,
			sponsor = {},
			i = 0;
			
		// This check is to ensure this script is not running anywhere but the search results page	
		if (s_pagename.indexOf("search/search_results") <= 0) {
			return false; //this is not the correct page ABORT!!!
		}

		/* GK 2013-02-01 - Taking down GM 
		// GENERAL MILLS
		if (self.is_impression() && !self.has_banner_ad() && !self.is_featured_sponsor()) {
			sponsor = self.sponsors['generalmills'];
			self.display_sponsor_with_logo(sponsor);
			$('#sponsorsContainer .specialsSponsors').addClass('gm');
		} */
		
		// Gilenya videos
		self.removeResultByTitle("Watch Pedro’s story (Sponsored)");
		self.removeResultByTitle("Watch Missi’s story (Sponsored)");
		self.removeResultByTitle("Watch Sybil’s story (Sponsored)");
		self.removeResultByTitle("Watch Marla’s story (Sponsored)");
		
		// ZANTAC
		if(self.query) {
			sponsor = self.sponsors['zantac'];
			for (i=0;i<sponsor.terms.length;i++) {
				if (self.query.toLowerCase() === sponsor.terms[i].toLowerCase()) {
					self.display_sponsor_with_logo(sponsor);
					$('#sponsorsContainer .specialsSponsors').addClass('zt');
					break;
				}
			}
		}	
		return true;
	},
	/**
	 * Removes search results that match the passed Title string
	 * Temporary hack function to get around sponsored results indexing limitations of sponsored daily videos
	 * @param titleStr The text string to search for 
	 * @returns {Boolean} true if successful; false if no match found
	 */
	removeResultByTitle : function(titleStr) {
		var self, results, resultsTotal;		
		self = this;
		
		$(".spotlight_results").each(function() {
			var curSpotlight;
			curSpotlight = $(this).find(".text_fmt a").text();
			// remove result that matches string from spotlight results
			if (curSpotlight === titleStr) {
				$(this).remove();
			}
		});
		
		results = $("ul.searchResults_fmt").find("li");
		resultsTotal = results.length;
		$(results).each(function () {
			var curTitle;
			curTitle = $(this).find("a").text();
			// remove result that matches string from results list
			if (curTitle === titleStr) {
				$(this).remove();
				resultsTotal--;
				// check to see if removing results would leave no search results
				if(resultsTotal == 0) {
					pageStateItems += "|nsr";
					$("#searchResults").append('<div id="spellSuggestDiv" class="searchSuggest_fmt"><div class="horz_divider_fmt"></div><div class="noresultsfound_fmt"><h3>We\'re Sorry.</h3><div>We found no results matching your search. Make sure your spelling is correct or try broadening your keywords.</div></div><br /></div>');
					$("#SearchResultsTop").find(".searchResultsTitle").after('<span id="TotalCount">(<strong>0</strong> results found)</span>');
				}
				return true;
			}
			
		});
		return false;
	},
	display_sponsor_with_logo : function(sponsor){
		//Display new sponsor section with logos
		var self = this,
			newDiv = $(self.html_frag),
			html_img = sponsor.html_img;
		
		/* GK: 10.23.2012 - support multiple images to rotate through them randomly */
		if (typeof html_img == 'object') {
			var i = Math.floor(Math.random() * html_img.length);
			html_img = html_img[i];
		}
		
		self.suppress_duplicates(sponsor);
		s_md.prop46 = "|" + sponsor.id + s_md.prop46;
		
		//add list items
		$(newDiv).find('ul.sponsors').append('<li>' + html_img + '<strong>' + sponsor.title + '</strong> <span><a onclick="' + sponsor.metric + '" href="' + sponsor.link + '">' + sponsor.anchor + '</a></span>');
	
		//add node to DOM
		$('#sponsorsContainer').prepend(newDiv);
		
	},	
	has_banner_ad : function(){
		//if the banner ad exists there is a funding conflict and logos should be suppressed
		return $("#bannerAd_Iframe").length > 0;
	},
	is_featured_sponsor : function(){
		//if TAPPremiumSearch1_tapPremium exist there is a funding conflict and logos should be suppressed
		return $("#TAPPremiumSearch1_tapPremium").length > 0;
	},
	is_impression : function(){
		//limit impressions to 50% of page loads; increasing true responses will increase the % of impressions
		//see wiki for more detail on webmd.usability.coinFlip
		var flip = webmd.usability.coinFlip({"true" : 95.0, "false" : 5.0});
		webmd.debug('webmd.p.sponsored_search_result: is_impression = '+flip);
		return flip === "true";
	},
	suppress_duplicates : function(sponsor){
		//to prevent duplicate sponsorship we will hide non-logo version if it appears
		var self = this;
		var existingUL = $('.specialsSponsors .roundedBoxMiddle_fmt ul.sponsors');

		$(existingUL).each(function(ndx, ul) {
			var matches = 0;
			$(ul).children('li').each(function(i, li) {
				if ($.trim($(li).text()) === sponsor.title + ' ' + sponsor.anchor) {
					$(li).hide();
					matches++;
				}
			});
			if (matches == $(ul).children('li').length) {
				$(ul).parent().parent('.specialsSponsors').hide(); // all li have been hidden so hide containing div
			}
		});
	}
};
/**
 * This simply attaches the init function to the search results page
 */
$(document).bind('before_pv', function() {
	webmd.p.sponsored_search_result.init();
});