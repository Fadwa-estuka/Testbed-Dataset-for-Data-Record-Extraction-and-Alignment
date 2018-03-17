/* Last Updated by ML 1/10/17 - Consult Widget http to https */
/* Last Updated by ML 11/1/16 - PPE-86027 */
var solr = {
	'checkQuery': function(param) {
		var resRegEx = new RegExp("[?&]" + param + "=[^&#]+", "g");
		var query = window.location.href.match(resRegEx);
		if (query != null && $.trim(query[0].split('=')[1]) != '') {
			query = query[0].split('=')[1];
		}
		return query;
	},
	'returnQueryPart': function(excludeArr) {
		var filterQuery = "";
		if (window.location.search != "") {
			filterQuery = '&' + window.location.search.split('?')[1];
			if (typeof excludeArr != 'undefined') {
				if (typeof excludeArr == 'string') {
					var regExTemp = new RegExp("&" + excludeArr + "[^&]+", "g");
					filterQuery = filterQuery.replace(regExTemp, '');
				} else {
					$(excludeArr).each(function() {
						var regExTemp = new RegExp("&" + this + "[^&]+", "g");
						filterQuery = filterQuery.replace(regExTemp, '');
					});
				}
			}
		}
		return filterQuery.replace(/&+/g, '&').replace(/^&/,'');
	},
	'checkEnv': function() {
		var envChk = "";
		if (window.location.href.indexOf(".staging.") != -1) {
			envChk = ".staging";
		} else if (window.location.href.indexOf(".proddev.") != -1) {
			envChk = ".proddev";
		}
		if (window.location.href.match(/\.qa\d\d/) != null) {
			envChk = envChk + window.location.href.match(/\.qa\d\d/)[0];
		}
		return envChk;
	},
	'inMainCol': function(site) {
		return ($('#' + site).parents('#searchResultsContainer').length > 0);
	},
	'checkCme': function() {
		var cmeTermInQuery = [];
		$(solr.srchQueryArr).each(function() {
			var resString = String(this);
			if ($.inArray(resString, cmeTerms.split(',')) >= 0) {
				cmeTermInQuery.push(resString);
			}
		});
		return cmeTermInQuery;
	},
	'bindSearchForm': function() {
		$('.searchForm').submit(function(event) {
			event.preventDefault();
			$('input.pillarSearchInput').val($.trim($('input.pillarSearchInput').val())); // Trim whitespace from Query
			if ($('input.pillarSearchInput').val() != '' && $('input.pillarSearchInput').val().indexOf('@') == -1) {	
				var currQ = $('input.pillarSearchInput').val();
				searchCp(solr.currSite.split('prof')[1], function () {
					wmdTrack('main-search');
					if (solr.checkQuery('plr') != null) {
						window.location.href = window.location.href.split('?')[0] + '?q=' + currQ + '&' + solr.returnQueryPart(['q', 'page']) + '&page=1';
					} else {
						window.location.href = window.location.href.split('?')[0] + '?q=' + currQ + '&' + solr.returnQueryPart(['q', 'page']);
					}
				}, currQ);
			} else {
				// Placeholder - Error Message for Blank Query??
			}
		});
	},
	'checkResJson': function() {
		if (result[solr.currSite].data != null) {
			/* Spell Checker Suggestions */
			if (solr.currPlr != 'mln' && result[solr.currSite].data.spellcheck.suggestions.length > 0) {
				var suggestArr = result[solr.currSite].data.spellcheck.suggestions;
				suggestArr.sort(function(a, b) {
					return Number(b.suggestion.hits) - Number(a.suggestion.hits)
				});
				$(suggestArr).each(function() {
					$('.spellCheck').append('<a href="' + window.location.href.split('?')[0] + '?q=' + this.suggestion.query.replace(/<\/?span[^>]*>/g, '') + '&' + solr.returnQueryPart(['q']) + '">' + this.suggestion.query + '</a>; ');
				});
				$('.spellCheck')[0].innerHTML = $('.spellCheck')[0].innerHTML.replace(/; $/, '');
				$('#searchTermTitle').show();
			}
			/* /Spell Checker Suggestions */
		}
		if (typeof result['indications'] != 'undefined' && result['indications'].data != null) {
			if (result['indications'].data.response.docs.length > 0 && !($.isEmptyObject(result['indications'].data.response.docs[0]))) {
				$(result['indications'].data.response.docs[0].indications).each(function(idx) {
					$('#indications').append('<div class="searchResult"><p class="searchResultTitle"><a href="?q=' + encodeURIComponent(this) + '&plr=ref" onclick="wmdTrack(\'sr-misc_' + (idx + 1) + '\',this)">' + this + '</a></p></div>');
				});
			}
			else {
				$('#indications').remove();
			}
		}
		if (typeof result['promoSpotlight'] != 'undefined' && result['promoSpotlight'].data != null && result['promoSpotlight'].data.response.docs.length > 0 && showSpotlight == true) {
			$(result['promoSpotlight'].data.response.docs).each(function() {
				$('#editorialSpotlight').after('<div id="promoSpotlight" class="srchSite"><div class="searchResult"><div class="adType">' + this.contentGroup + '</div><a href="' + this.clientUrl + '" class="title">' + this.title + '</a></div></div>');
			});
		}
		if (result[solr.currSite].data != null && result[solr.currSite].data.response.docs.length > 0) // IF THERE ARE RESULTS FOR BUCKET
		{
			/* Populate and/or Remove Irrelevant Items from Refine Submenus */
			if(solr.currPlr != 'mln') {
				$(result[solr.currSite].data.facet_counts.facet_fields.contentType).each(function () {
					$('#filter_by_content_type').append('<div class="refineOption"><a onclick="wmdTrack(\'sr-fn-srt_type\',this)">' + this.value + '</a> <input type="radio" name="contenttype" value="' + this.value + '" /></div>');
				});
				$(result[solr.currSite].data.facet_counts.facet_fields.allSpecialties).each(function () {
					$('#filter_by_specialty').append('<div class="refineOption"><a onclick="wmdTrack(\'sr-fn-srt_spec\',this)">' + this.value + '</a> <input type="radio" name="specialty" value="' + this.value + '" /></div>');
				});
				$('input[name=age]').each(function() {
					if (result[solr.currSite].data.facet_counts.facet_queries[this.value] == 0) {
						$(this).parent().remove();
					}
				});
			}
			if (solr.currPlr != 'mln' && typeof result[solr.currSite].data.facet_counts.facet_queries['0.25'] != 'undefined') {
				if (result[solr.currSite].data.facet_counts.facet_queries['0.25'] == 0) {
					$('#point_two_five').parent().remove();
				}
				if (result[solr.currSite].data.facet_counts.facet_queries['0.50'] == 0) {
					$('#point_five').parent().remove();
				}
				if (result[solr.currSite].data.facet_counts.facet_queries['0.75'] == 0) {
					$('#point_seven_five').parent().remove();
				}
				if (result[solr.currSite].data.facet_counts.facet_queries['1+'] == 0) {
					$('#one_plus').parent().remove();
				}
			}
			if (solr.currSite != 'profeducation') {
				$('input[name=credits]').parents('li').hide();
			}
			$('#refineForm .refineResults li').not('.clearli').filter(function() {return $(this).find('.refineOption').length == 1}).remove();

			/* Populate and/or Remove Irrelevant Items from Refine Submenus */
			solr.setPagination(); // Setup Pagination based on page number and how many results.
			solr.getEdSpotlight();
			$.each(result, function(site, json) {
				if (site.toLowerCase().match(/(spotlight|indication)/) == null) {
					var numFound = json.data.response.numFound;
					if (numFound == 0) { // If no results found, remove bucket
						$('#' + site).remove();
					}
					var numPages = Math.ceil(numFound / solr.pageSize);
					if (numPages > solr.pageLimit) {
						numPages = solr.pageLimit;
					}
					if (solr.inMainCol(site)) {
						var dispAmt = solr.pageSize;
					} else {
						var dispAmt = solr.rColSize;
					}
					if (typeof $('#' + site).attr('data-maxlength') != 'undefined') {
						dispAmt = Number($('#' + site).attr('data-maxlength'));
					}
					if (numFound < dispAmt) { // If not enough results, remove more link from section
						$('#' + site + ' .moreResults').remove();
					}
					$('.searchSectionHeader').show();
					$('#' + site + ' .numtotal').html(numFound);
					$('.loadicon').hide();
					$('#searchPageWrapInner, #' + site + ' .searchSectionHeader').show();
					$('#' + site + ' .numResults').css('display', 'inline');
					$(json.data.response.docs).each(function(idx) {
						solr.parseResult(idx, site, json, this);
					});
				}
			});
			// If Spotlight Results were appended, and not many results found, adjust 'numtotal'
			if (solr.pageIndex < 2) {
				if (solr.spotlightCount > 0) {
					$('#allSearchResults .numshown')[0].innerHTML = $('#allSearchResults .numshown')[0].innerHTML.replace(/-\d+/,'-' + (Number(result[solr.currSite].data.response.docs.length) + solr.spotlightCount));
					if (Number($('#allSearchResults .numtotal')[0].innerHTML) < (Number(result[solr.currSite].data.response.docs.length) + solr.spotlightCount)) {
						$('#allSearchResults .numtotal')[0].innerHTML = (Number(result[solr.currSite].data.response.docs.length) + solr.spotlightCount);
					}
				}
			}
		} else if (result[solr.currSite].data != null && result[solr.currSite].data.response.numFound > 0) { // ELSE IF RESULT SET IS EMPTY FOR CURRENT PAGE
			var numFound = result[solr.currSite].data.response.numFound;
			var numPages = Math.ceil(numFound / solr.pageSize);
			$('#searchPagination .pageNext').css('display', 'none');
			$('#searchPagination li:not(.forwardBackward)').remove();
			$('#searchPagination .pageLast').click(function() { // Bind functions to Next Button
				wmdTrack('pagenum_prev');
				window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page']) + '&plr=' + solr.currPlr + '&page=' + numPages;
			});
			solr.noBind = true;
			$('#' + solr.currSite).append('<div class="searchResult"><p class="searchResultMax">Only ' + numFound + ' results are available for this query. (You requested results starting from ' + (((solr.pageIndex - 1) * solr.pageSize) + 1) + '.)</p></div>');
			$('.loadicon, .numResults').hide();
			$('#searchPagination .pageLast').css('display', 'inline-block');
			$('#searchPageWrapInner, #searchPagination,  #' + solr.currSite + ' .searchSectionHeader, #' + solr.currSite).show();
		} else if (result[solr.currSite].data != null) { // ELSE IF NO RESULTS FOR QUERY
			$('.searchQuery').html(decodeURIComponent(solr.srchQuery));
			var numFound = result[solr.currSite].data.response.numFound;
			$('#searchPagination').hide();
			$('.loadicon, .numResults').hide();
			if (solr.currPlr != 'all') {
				$('#allSearchResults .searchSectionHeader, .refineSearch, #refineForm').hide();
			}
			else {
				$('#pillar-select, #allSearchResults .searchSectionHeader').hide();
			}
			if (solr.currSite != 'profeducation') {
				$('.noResMedLink').attr('href', 'http://' + document.domain + '/medline-search?queryText=' + decodeURIComponent(solr.srchQuery));
			} else {
				$('.noResMedLink').remove();
			}
			$('#noResultsAvail, #searchPageWrapInner, #' + solr.currSite).show();
		} else { // ELSE IF RESULT SET IS EMPTY FOR CURRENT PAGE
			$('#searchPagination .pageNext').css('display', 'none');
			$('#searchPagination li:not(.forwardBackward)').remove();
			$('#searchPagination .pageLast').click(function() { // Bind functions to Next Button
				wmdTrack('pagenum_prev');
				window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page']) + '&plr=' + solr.currPlr + '&page=' + solr.pageLimit;
			});
			solr.noBind = true;
			$('#' + solr.currSite).html('<div class="searchResult"><p class="searchResultMax">Medscape does not display more than ' + (solr.pageLimit * solr.pageSize) + ' results per query. (You requested results starting from ' + (solr.pageIndex * solr.pageSize) + '.)</p></div>');
			$('.loadicon').hide();
			$('#searchPagination .pageLast').css('display', 'inline-block');
			$('#searchPageWrapInner, #searchPagination,  #' + solr.currSite).show();
		}
		$('.searchResult').filter(function() {
			return this.innerHTML == ""
		}).remove(); // Remove Empty placeholder results
	},
	'setPagination': function() {
		var numFound = result[solr.currSite].data.response.numFound;
		var numPages = Math.ceil(numFound / solr.pageSize);
		if (numPages > solr.pageLimit) {
			numPages = solr.pageLimit;
		}
		if (solr.pageIndex <= 1) { // IF MAIN SEARCH PAGE
			$('#searchPagination .pageLast').hide();
			if (solr.isMobile) {
				$('#searchPagination li.selected').html('Page 1');
			}
			if (numFound < solr.pageSize) { // If not enough results, shorten number and remove more link from section
				$('#searchPagination .pageNext').hide();
			}
			if (numPages < 5) {
				$('#searchPagination li:not(.forwardBackward):gt(' + (numPages - 1) + ')').remove();
			}
			if (numFound < solr.pageSize) {
				$('#' + solr.currSite + ' .numshown').html('1-' + numFound);
			} else {
				$('#' + solr.currSite + ' .numshown').html('1-' + solr.pageSize);
				$('#searchPagination').show();
			}
		} else {
			if (!solr.isMobile) {
				$('#searchPagination .pageLast').css('display', 'inline-block');
			}
			$('#searchPagination .pageNext').css('display', 'inline-block');
			if (numPages < 5) {
				if (!solr.isMobile) {
					$('#searchPagination li:not(.forwardBackward):gt(' + (numPages - 1) + ')').remove();
					$('#searchPagination li a').removeClass('selected');
					$('#searchPagination li:not(.forwardBackward):eq(' + (solr.pageIndex - 1) + ')').find('a').addClass('selected');
				} else {
					$('#searchPagination li.selected').html('Page ' + solr.pageIndex);
					//$('#searchPagination li.pageLast').after('<li>Page ' + solr.pageIndex + '</a></li>');
				}
			} else {
				if (!solr.isMobile) {
					if (solr.pageIndex <= 3) {
						$('#searchPagination li a').removeClass('selected');
						$('#searchPagination li:not(.forwardBackward):eq(' + (solr.pageIndex - 1) + ')').find('a').addClass('selected');
					} else {
						$('#searchPagination li a').removeClass('selected');
						$('#searchPagination li:not(.forwardBackward)').each(function(idx) {
							$(this).find('a').html((solr.pageIndex - 2) + idx);
						});
						$('#searchPagination li:not(.forwardBackward):eq(2)').find('a').addClass('selected');
						if (numPages < (solr.pageIndex + 2)) {
							$('#searchPagination li:not(.forwardBackward):gt(' + (2 + (numPages - solr.pageIndex)) + ')').remove();
							$('#searchPagination li.pageLast').after('<li><a>' + (solr.pageIndex - 3) + '</a></li>');
							if (numPages < (solr.pageIndex + 1)) {
								$('#searchPagination li.pageLast').after('<li><a>' + (solr.pageIndex - 4) + '</a></li>');
								$('#searchPagination .pageNext').css('display', 'none');
							}
						}
					}
				} else {
					$('#searchPagination li.selected').html('Page ' + solr.pageIndex);
				}
				if (solr.pageIndex == solr.pageLimit) {
					$('#' + solr.currSite).after('<div class="searchResult"><p class="searchResultMax">Medscape does not display more than ' + (solr.pageLimit * solr.pageSize) + ' results per query. Please refine search criteria to display further results.</p></div>');
				}
			}
			if (numFound <= (solr.pageSize * (solr.pageIndex - 1) + solr.pageSize)) {
				$('#' + solr.currSite + ' .numshown').html(((solr.pageSize * (solr.pageIndex - 1)) + 1) + '-' + numFound);
				$('#searchPagination .pageNext').hide();
			} else {
				$('#' + solr.currSite + ' .numshown').html(((solr.pageSize * (solr.pageIndex - 1)) + 1) + '-' + (solr.pageSize * (solr.pageIndex - 1) + solr.pageSize));
			}
			if (numFound != 0) {
				$('#searchPagination').show();
			}
		}
	},
	'getEdSpotlight': function() {
		if (typeof result['editorialSpotlight'] != 'undefined' && result['editorialSpotlight'].data != null && result['editorialSpotlight'].data.response.docs.length > 0) {
			if (result['editorialSpotlight'].data.response.numFound > 0) {
				$('.edSpotLightTitle').html('<a href="' + result['editorialSpotlight'].data.response.docs[0].clientUrl + '">' + result['editorialSpotlight'].data.response.docs[0].title + '</a> <span class="drugbrand"></span>');
				$(result['editorialSpotlight'].data.response.docs[0].multimedia).each(function() {
					$('.edSpotLightImageInner').append('<img src="http://img' + solr.checkEnv() + '.medscapestatic.com/' + this + '" class="edSpotLight_imageGallery">');
				});
				switch (result['editorialSpotlight'].data.response.docs[0].spotlightRank) {
					case 1:
						// Resource Center (evergreen)
						$('.edSpotLightTitle').after('<div id="spotLightTeaser"><a href="' + result['editorialSpotlight'].data.response.docs[0].clientUrl + '">Resource Center</a></div>');
						break;
					case 2:
						//Drug Monograph (evergreen)
						if (qrllog == "1") {
							var urlPrefix = 'http://reference' + solr.checkEnv() + '.medscape.com/drug/';
						} else {
							var urlPrefix = 'http://reference' + solr.checkEnv() + '.medscape.com/refdrug-srch/';
						}
						$('.edSpotLightTitle').html('<a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '">' + result['editorialSpotlight'].data.response.docs[0].title + '</a> <span class="drugbrand"></span>');
						$('.edSpotLightImageInner').width(($('.edSpotLight_imageGallery').width() * $('.edSpotLight_imageGallery').length) + 1);
						if ($('.edSpotLight_imageGallery').length > 3) {
							var caroIdx = 0;
							$('.edSpotLightNext').show();
							$('.edSpotLightNext').click(function() {
								if (!$('.edSpotLightImageInner').is(':animated')) {
									caroIdx++;
									$('.edSpotLightImageInner').animate({
										'margin-left': (Number($('.edSpotLightImageInner').css('margin-left').split('px')[0]) - $('.edSpotLight_imageGallery').width()) + 'px'
									}, 200);
									$('.edSpotLightPrev').show();
									if (caroIdx == $('.edSpotLight_imageGallery').length - 4) {
										$('.edSpotLightNext').hide();
									}
								}
							});
							$('.edSpotLightPrev').click(function() {
								if (!$('.edSpotLightImageInner').is(':animated')) {
									caroIdx--;
									$('.edSpotLightImageInner').animate({
										'margin-left': (Number($('.edSpotLightImageInner').css('margin-left').split('px')[0]) + $('.edSpotLight_imageGallery').width()) + 'px'
									}, 200);
									$('.edSpotLightNext').show();
									if (caroIdx == 0) {
										$('.edSpotLightPrev').hide();
									}
								}
							});
						}
						var availSec = [];
						var drugHeads = '';
						$.each(result['editorialSpotlight'].data.response.docs[0], function(key, value) {
							if (key.match('sectionUrl') != null) {
								availSec.push(value.split('#')[1]);
							}
						})
						if ($.inArray('2', availSec) > -1) {
							drugHeads = '<li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#4">Adverse Effects</a></li><li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#0">Dosing</a></li><li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#2">Uses</a></li><li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#5">Warnings</a></li><li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#10">Pharmacology</a></li>';
						} else {
							drugHeads = '<li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#4">Adverse Effects</a></li><li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#0">Dosing &amp; Uses</a></li><li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#5">Warnings</a></li><li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#10">Pharmacology</a></li>';
						}
						if ($.inArray('3', availSec) > -1) {
							drugHeads = '<li><a href="' + urlPrefix + result['editorialSpotlight'].data.response.docs[0].clientUrl + '#3">Interactions</a></li>' + drugHeads;
						}
						$('.edSpotLightText ul').html(drugHeads);
						if (typeof result['editorialSpotlight'].data.response.docs[0].description != 'undefined' && result['editorialSpotlight'].data.response.docs[0].contentGroup == "Drugs") {
							if (result['editorialSpotlight'].data.response.docs[0].description.match(/,/g) != null && result['editorialSpotlight'].data.response.docs[0].description.match(/,/g).length > 1) {
								$('.edSpotLightText .drugbrand').html('Brand Name: ' + result['editorialSpotlight'].data.response.docs[0].description.split(',')[0] + ', ' + result['editorialSpotlight'].data.response.docs[0].description.split(',')[1] + ' ...');
							} else {
								$('.edSpotLightText .drugbrand').html('Brand Name: ' + result['editorialSpotlight'].data.response.docs[0].description.replace(',', ', '));
							}
						} else {
							$('.edSpotLightText .drugbrand').hide();
						}
						break;
					case 3:
						//Specialty Homepage (evergreen)
						$('.edSpotLightTitle').after('<div id="spotLightTeaser"><a href="' + result['editorialSpotlight'].data.response.docs[0].clientUrl + '">Homepage</a></div>');
						break;
					case 4:
						//Column/Series (as long as active)
						$('.edSpotLightTitle').after('<div id="spotLightTeaser"><a href="' + result['editorialSpotlight'].data.response.docs[0].clientUrl + '">' + result['editorialSpotlight'].data.response.docs[0].description + '</a></div>');
						break;
					case 5:
						//Conference Collection (within last 12 months)
						$('.edSpotLightTitle').after('<div id="spotLightTeaser"><a href="' + result['editorialSpotlight'].data.response.docs[0].clientUrl + '">' + result['editorialSpotlight'].data.response.docs[0].description + '</a></div>');
						break;
					case 6:
						//Special Report (within last 24 months)
						$('.edSpotLightTitle').after('<div id="spotLightTeaser"><a href="' + result['editorialSpotlight'].data.response.docs[0].clientUrl + '">' + result['editorialSpotlight'].data.response.docs[0].description + '</a></div>');
						break;
					case 7:
						//Collections (within last 24 months)
						$('.edSpotLightTitle').after('<div id="spotLightTeaser"><a href="' + result['editorialSpotlight'].data.response.docs[0].clientUrl + '">' + result['editorialSpotlight'].data.response.docs[0].description + '</a></div>');
						break;
				}
				if ($('.edSpotLight_imageGallery').length > 0) {
					if ($('.edSpotLight_imageGallery').length == 1) {
						$('.edSpotLightImage').addClass('single');
					}
					$('.edSpotLightImage').show();
				}
				$('.edSpotLightImageInner').click(function() {
					window.location.href = $('.edSpotLightTitle a').attr('href');
				});
				$('.edSpotLightText a').each(function(idx) {
					$(this).attr('onclick', 'wmdTrack\(\'sr-hlgt_' + (idx + 1) + '\',this\)');
				});
				if (!solr.isMobile) {
					$('#editorialSpotlight').show();
				}
				if (solr.pageIndex < 2 && solr.checkQuery('contenttype') == null && solr.checkQuery('sort') == null && solr.checkQuery('specialty') == null && solr.checkQuery('age') == null) {
					$(result['editorialSpotlight'].data.response.docs).each(function(idx) {
						if (!this.skip && solr.spotlightCount < 2) {
							solr.parseResult(solr.spotlightCount, $('#allSearchResults .srchSite')[0].id, result['editorialSpotlight'], this, true);
							$('#searchResultsContainer div[id*=ads-pos-]').each(function() {
								$(this).insertBefore($(this).prev());
							});
							solr.spotlightCount++;
						}
					});
				}
			}
		}
	},
	'getUrlPrefix': function(site, json, thisObj, spotlightFlag) {
		var urlPrefix = '';
		if (thisObj.clientUrl.match(/https?:\/\//) == null) {
			if (thisObj.clientUrl.charAt(0) != '/') {
				urlPrefix = '/';
			}
			if (site == 'profnews' && typeof spotlightFlag == 'undefined') {
				urlPrefix = 'http://www' + solr.checkEnv() + '.medscape.com' + urlPrefix;
			} else if (site == 'profeducation' || site == 'relatedCme') {
				urlPrefix = 'http://www' + solr.checkEnv() + '.medscape.org' + urlPrefix;
			} else if (site == 'profreference' || site == 'relatedDrugs' || site == 'relatedConditions' || site == 'indications' || site == 'profnewsref' || spotlightFlag) {
				if (thisObj.id.match(/^ref/) != null) {
					if ((typeof thisObj.contentGroup != 'undefined' && thisObj.contentGroup == 'Drugs') || (typeof thisObj.contentType != 'undefined' && thisObj.contentType == 'Drugs & Neutraceuticals')) {
						if (qrllog == "1") {
							urlPrefix = 'http://reference' + solr.checkEnv() + '.medscape.com/drug' + urlPrefix;
						} else {
							urlPrefix = 'http://reference' + solr.checkEnv() + '.medscape.com/refdrug-srch' + urlPrefix;
						}
					} else {
						if (qrllog == "1") {
							urlPrefix = 'http://reference' + solr.checkEnv() + '.medscape.com/article' + urlPrefix;
						} else {
							urlPrefix = 'http://reference' + solr.checkEnv() + '.medscape.com/refarticle-srch' + urlPrefix;
						}
					}
				} else {
					urlPrefix = 'http://www' + solr.checkEnv() + '.medscape.com' + urlPrefix;
				}
			} else if (site == 'profmedline') {
				urlPrefix = 'http://reference' + solr.checkEnv() + '.medscape.com' + urlPrefix;
			}
		}
		return urlPrefix;
	},
	'getDateStr': function(json, thisObj, ctStr) {
		var dateStr = ''
		if (typeof thisObj.printDate != 'undefined') {
			dateStr = thisObj.printDate;
		}
		return dateStr;
	},
	'getTitleStr': function(json, thisObj) {
		var titleStr = thisObj.title.replace(/([^< ]\/)/g,'$1&#x200b;');
		if (solr.currPlr != 'mln' && typeof json.data.highlighting[thisObj.id].title != 'undefined') {
			titleStr = json.data.highlighting[thisObj.id].title[0].replace(/([^< ]\/)/g,'$1&#x200b;');
		}
		return titleStr;
	},
	'getCtStr': function(json, thisObj) {
		var ctStr = '';
		if (typeof thisObj.contentType != 'undefined' && thisObj.contentType != '') {
			$(thisObj.contentType).each(function() {
				ctStr = ctStr + this + ', ';
			});
		}
		return ctStr.replace(/, $/, '');
	},
	'getRefHeads': function(thisObj, urlPrefix) {
		var refHeads = '';
		if (typeof thisObj.h2_s != 'undefined' && thisObj.h2_s.indexOf('|') != -1) {
			var refHeadsArr = thisObj.h2_s.split('|');
			$(refHeadsArr).each(function() {
				refHeads = refHeads + '<li><a href="' + urlPrefix + self.clientUrl.split('-')[0] + '-' + this.split('#')[0] + '">' + this.split('#')[1] + '</a></li>';
			});
			refHeads = '<ul class="searchResultSubLinks">' + refHeads + '</ul>';
		}
		if (thisObj.contentGroup == 'Drugs') {
			var availSec = [];
			$.each(thisObj, function(key, value) {
				if (key.match('sectionUrl') != null) {
					availSec.push(value.split('#')[1]);
				}
			})
			if ($.inArray('2', availSec) > -1) {
				refHeads = '<ul class="searchResultSubLinks"><li><a href="' + urlPrefix + thisObj.clientUrl + '#4">Adverse Effects</a></li><li><a href="' + urlPrefix + thisObj.clientUrl + '#0">Dosing</a></li><li><a href="' + urlPrefix + thisObj.clientUrl + '#2">Uses</a></li><li><a href="' + urlPrefix + thisObj.clientUrl + '#5">Warnings</a></li><li><a href="' + urlPrefix + thisObj.clientUrl + '#10">Pharmacology</a></li></ul>';
			} else {
				refHeads = '<ul class="searchResultSubLinks"><li><a href="' + urlPrefix + thisObj.clientUrl + '#4">Adverse Effects</a></li><li><a href="' + urlPrefix + thisObj.clientUrl + '#0">Dosing &amp; Uses</a></li><li><a href="' + urlPrefix + thisObj.clientUrl + '#5">Warnings</a></li><li><a href="' + urlPrefix + thisObj.clientUrl + '#10">Pharmacology</a></li></ul>';
			}
			if ($.inArray('3', availSec) > -1) {
				refHeads = refHeads.replace('<ul class="searchResultSubLinks">', '<ul class="searchResultSubLinks"><li><a href="' + urlPrefix + thisObj.clientUrl + '#3">Interactions</a></li>');
			}
		}
		return refHeads;
	},
	'getTrackCall': function(idx, site, spotlightFlag, thisObj) {
		var trackCall = "";
		if (solr.inMainCol(site) && spotlightFlag) {
			trackCall = ' onclick="wmdTrack(\'sr-msr_' + (idx + 1) + '\',this)"';
		} else if (site == 'profmedline') {		
			if (thisObj.clientUrl.match(/https?:\/\//) == null) {		
				trackCall = ' onclick="wmdTrack(\'sr-msrmn_' + (idx + 1 + solr.spotlightCount) + '\',this)"';
			} else {
				trackCall = ' onclick="wmdPageLink(\'sr-msrmn_' + (idx + 1 + solr.spotlightCount) + '\',this)"';
			}
		} else if (solr.inMainCol(site)) {
			trackCall = ' onclick="wmdTrack(\'sr-msr_' + (idx + 1 + solr.spotlightCount) + '\',this)"';
		} else if (site == 'relatedCme') {
			trackCall = ' onclick="wmdPageLink(\'sr-relcme_' + (idx + 1) + '\',this)"';
		} else if (site.match(/^related/) != null) {
			trackCall = ' onclick="wmdTrack(\'sr-misc_' + (idx + 1) + '\',this)"';
		}
		return trackCall;
	},
	'getTeaserStr': function(json, thisObj) {
		var teaserStr = '';
		if (json.data.hasOwnProperty('highlighting') && typeof json.data.highlighting[thisObj.id].description != 'undefined') {
			teaserStr = json.data.highlighting[thisObj.id].description;
		} else if (typeof thisObj.description != 'undefined') {
			teaserStr = thisObj.description;
		}
		return teaserStr;
	},
	'getCmeStrArr': function(thisObj) {
		var cmeFlag = '';
		var creditAmount = '';
		if (typeof thisObj.creditsAvailable != 'undefined' && typeof thisObj.activeCME != 'undefined' && thisObj.activeCME == 1) {
			if (typeof s_user_group != 'undefined') {
				if (s_user_group == 'Nurse/Advanced Practice Nurse') {
					var credType = "";
					$(thisObj.creditsAvailable).each(function() {
						if (this.match('Nurses:') != null) {
							credType = "CE";
							creditAmount = '<p class="searchResultCredits">' + this.split(':')[2] + ' credits</p>';
							cmeFlag = ' <span class=\"cmetag\">CE</span>';
							return false;
						}
					});
					if (credType == "CE") {
						$(thisObj.creditsAvailable).each(function() {
							if (this.match(/^Physicians:/) != null) {
								cmeFlag = ' <span class="cmetag">CME / CE</span>';
								return false;
							}
						});
					}
				} else if (s_user_group == 'Pharmacist') {
					var credType = "";
					$(thisObj.creditsAvailable).each(function() {
						if (this.match('Pharmacists:') != null) {
							credType = "CE";
							cmeFlag = ' <span class=\"cmetag\">CE</span>';
							creditAmount = '<p class="searchResultCredits">' + this.split(':')[2] + ' credits</p>';
							return false;
						}
					});
					if (credType == "CE") {
						$(thisObj.creditsAvailable).each(function() {
							if (this.match(/^Physicians:/) != null) {
								cmeFlag = ' <span class="cmetag">CME / CE</span>';
								return false;
							}
						});
					}
				} else if (s_user_group == 'Physician') {
					var credType = "";
					$(thisObj.creditsAvailable).each(function() {
						if (this.match(/^Physicians:/) != null) {
							credType = "CME";
							cmeFlag = ' <span class="cmetag">CME</span>';
							creditAmount = '<p class="searchResultCredits">' + this.split(':')[2] + ' credits</p>';
						} else if (this.match("Non-US Physicians:CPD") != null) {
							credType = "CPD";
							cmeFlag = ' <span class="cmetag">CPD</span></p>';
							creditAmount = '<p class="searchResultCredits">' + this.split(':')[2] + ' credits</p>';
						}
					});
					if (credType == "CME" || credType == "CPD") {
						$(thisObj.creditsAvailable).each(function() {
							if (this.match(/ABIM MOC:/) != null) {
								credType = credType + ' / ABIM MOC';
								cmeFlag = ' <span class="cmetag">' + credType +  '</span>';
								return false;
							}
						});
						$(thisObj.creditsAvailable).each(function() {							
							if (this.match(/^Nurses:/) != null || this.match(/^Pharmacists:/) != null) {
								cmeFlag = ' <span class="cmetag">' + credType +  ' / CE</span>';
								return false;
							}
						});
					}
				} else {
					var credType = "";					
					var credAmount = "";
					$(thisObj.creditsAvailable).each(function() {
						if (this.match(/^Physicians:/) != null) {
							credType = "CME";
							credAmount = credAmount + ' / ' + this.split(':')[2] + ' CME';
						} else if (this.match("Non-US Physicians:CPD") != null) {
							credType = "CPD";
							credAmount = credAmount + ' / ' + this.split(':')[2] + ' CPD';
						}
					});
					$(thisObj.creditsAvailable).each(function() {
						if (this.match('ABIM MOC:') != null) {
							credType = credType + ' / ABIM MOC';
							credAmount = credAmount + ' / ' + this.split(':')[2] + ' ABIM MOC';
						}
					});
					$(thisObj.creditsAvailable).each(function() {
						if (this.match('Nurses:') != null) {
							credType = credType.replace(' / CE','') + ' / CE';
							credAmount = credAmount + ' / ' + this.split(':')[2] + ' Nurse CE';
						} else if (this.match('Pharmacists:') != null) {
							credType = credType.replace(' / CE','') + ' / CE';
							credAmount = credAmount + ' / ' + this.split(':')[2] + ' Pharmacist CE';
						}
					});
					cmeFlag = ' <span class="cmetag">' + credType.replace(/^ \//, "") + '</span>';
					if (credAmount != '') {
						creditAmount = '<p class="searchResultCredits">' + credAmount.replace(/^ \/ /, "") + ' credits</p>';
					}
				}
			}
		}
		return [cmeFlag, creditAmount];
	},
	'parseResult': function(idx, site, json, thisObj, spotlightFlag) {
		var self = thisObj;
		if (typeof $('#' + site).attr('data-maxlength') != 'undefined' && idx >= Number($('#' + site).attr('data-maxlength'))) {
			return false;
		} else if ((solr.inMainCol(site) && idx >= solr.pageSize) || (!solr.inMainCol(site) && idx >= solr.rColSize)) {
			return false;
		}
		var titleStr = solr.getTitleStr(json, thisObj);
		var ctStr = solr.getCtStr(json, thisObj);
		var dateStr = solr.getDateStr(json, thisObj, ctStr);
		var urlPrefix = solr.getUrlPrefix(site, json, thisObj, spotlightFlag);
		var refHeads = solr.currPlr != 'mln' ? solr.getRefHeads(thisObj, urlPrefix) : '';
		var trackCall = solr.getTrackCall(idx, site, spotlightFlag, thisObj);
		var teaserStr = solr.getTeaserStr(json, thisObj);
		var cmeStrArr = solr.getCmeStrArr(thisObj);
		var commaSpace = '';
		if (dateStr != '' && ctStr != '') {
			commaSpace = ', ';
		}
		
		var nlmClass = '';
		var nlmTag = '';
		if (site == 'profmedline' && thisObj.clientUrl.indexOf('.nlm.') != -1) {
			nlmClass = ' class="nlm"';
			nlmTag = '<div class="nlm-tag">View on NLM</div>';
		}
		
		var resultLi = document.createElement("div");
		resultLi.setAttribute("class", "searchResult");
		resultLi.innerHTML = nlmTag + '<p class="searchResultTitle"><a' + nlmClass + ' href="' + urlPrefix + thisObj.clientUrl + '"' + trackCall + '>' + titleStr + '</a>' + cmeStrArr[0] + '</p>' + refHeads + '<div class="searchResultTeaser">' + teaserStr + '</div><p class="searchResultSources">' + ctStr + commaSpace + dateStr + '</p>' + cmeStrArr[1];
		if (typeof thisObj.spotlightRank != 'undefined') {
			if (solr.spotlightCount == 0) {
				$('#' + site + ' .searchSectionHeader:eq(0)').after(resultLi);
			} else {
				$('#allSearchResults .searchResult:eq(' + (solr.spotlightCount - 1) + ')').after(resultLi);
			}
		} else if (solr.inMainCol(site)) {
			if (solr.spotlightCount > 0) {
				$('#allSearchResults .searchResult:eq(' + (idx + solr.spotlightCount) + ')').replaceWith(resultLi);
			} else {
				$('#allSearchResults .searchResult:eq(' + idx + ')').replaceWith(resultLi);
			}
		} else {
			document.getElementById(site).appendChild(resultLi);
		}
	},
	'postPopBinds': function() {
		if (!solr.isMobile) {
			$('#searchPagination li:not(.forwardBackward)').each(function() {
				$(this).click(function() {
					wmdTrack('pagenum_' + $(this).find('a').html());
					window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page']) + '&plr=' + solr.currPlr + '&page=' + $(this).find('a').html();
				});
			});
		}
		$('.moreResults').click(function() {
			var site = $(this).parents(".srchSite")[0].id;
			if (site == 'relatedCme') {
				window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page', 'age', 'specialty', 'contenttype']) + '&plr=edu&page=1';
			} else if (site == 'relatedDrugs') {
				window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page', 'age', 'specialty', 'contenttype']) + '&plr=ref&contenttype=Drugs+%26+Neutraceuticals&page=1';
			}
		});
		$('#pillar-select li a').not('.refineSearch').click(function(event) {
			if (solr.isMobile && $(this).parent().index() == 0) {
				event.preventDefault();
				$('#pillar-select').toggleClass('menu_open');
				$('#grayOut').toggle();
			} else {
				var self = this;
				if (useCase == 'education' && solr.checkCme().length > 0) {
					var nonCmeSearchQuery = decodeURIComponent(solr.srchQuery);
					$(solr.checkCme()).each(function() {
						var cmeRegEx = new RegExp("(\\b|\\s)" + this + "(\\b|\\s)", "g");
						nonCmeSearchQuery = nonCmeSearchQuery.replace(cmeRegEx, ' ');
					});
					nonCmeSearchQuery = $.trim(nonCmeSearchQuery.replace(/\s+/g, ' '));					
					searchCp(this.className.split(' ')[0].split('prof')[1], function () {
						window.location.href = window.location.href.split('?')[0] + '?q=' + nonCmeSearchQuery + '&plr=' + solr.sitePlr[self.className.split(' ')[0]] + '&page=1';
					}, nonCmeSearchQuery);
					
				} else {
					searchCp(this.className.split(' ')[0].split('prof')[1], function () {
						window.location.href = window.location.href.split('&')[0] + '&plr=' + solr.sitePlr[self.className.split(' ')[0]] + '&page=1';
					}, solr.srchQuery);
				}
			}
		});
		$('.refineDefault, .refineNonDefault').click(function(event) {
			event.stopPropagation();
			$("html").off('click', hideOnce);
			var self = this;
			var drop = $(this).siblings('.refineDrop');
			$(this).parent().siblings().find('.refineDrop').hide();
			$(this).parent().siblings().find('.refineDefault, .refineNonDefault').removeClass('active');
			drop.toggle();
			$(this).toggleClass('active');
			function hideOnce(ev) {
				if (!$(ev.target).is('.refineDrop, .refineOption')) {
					drop.hide();
					$(self).removeClass('active');
					$("html").off('click', hideOnce);
				}
			}
			$("html").on('click', hideOnce);
		});
		if (solr.pageIndex != 0) {
			$('#searchPagination .pageNext').click(function() { // Bind functions to Next Button
				wmdTrack('pagenum_next');
				window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page']) + '&plr=' + solr.currPlr + '&page=' + (solr.pageIndex + 1);
			});
			if (solr.noBind == false) {
				if (solr.pageIndex != 1) {
					$('#searchPagination .pageLast').click(function() { // Bind functions to Previous Button
						wmdTrack('pagenum_prev');
						window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page']) + '&plr=' + solr.currPlr + '&page=' + (solr.pageIndex - 1);
					});
				}
			}
		} else {
			$('#searchPagination .pageNext').click(function() { // Bind functions to Next Button
				wmdTrack('pagenum_next');
				if (solr.currSite == 'profeducation') {
					window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page']) + '&plr=edu&page=2';
				} else {
					if (locale == "en" || locale == "us" || locale == null) {
						window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page']) + '&plr=all&page=2';
					} else {
						window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['plr', 'page']) + '&plr=nws&page=2';
					}
				}
			});
		}
		$('.refineSearch').click(function() {
			$(this).toggleClass('active');
			$('#refineForm').toggleClass('active');
		});
		$('#refineForm').submit(function(event) {
			event.preventDefault();
			if (document.getElementById('medlineabst') != null && document.getElementById('medlineabst').checked) {
				window.location.href = 'http://' + document.domain + '/medline-search?queryText=' + decodeURIComponent(solr.srchQuery);
			} else {
				window.location.href = window.location.href.split('?')[0] + '?' + (solr.returnQueryPart(['sort','age','specialty','contenttype','credits','page','mincredits']) + '&' + $('#refineForm').serialize().replace(/[^&=]+=&/g, '&').replace(/&+/g, '&').replace(/&[^&=]+=$/, '').replace(/^&/, '')).replace(/&+/g, '&').replace(/&$/, '') + '&page=1';
			}
		});
		$('#refineForm input').each(function() {
			if (this.name != '' && solr.checkQuery(this.name) != null) {
				if (this.value == decodeURIComponent(solr.checkQuery(this.name).replace(/\+/g, ' '))) {
					$(this).parent().parent().find('input').each(function() {
						this.checked = false;
					});
					this.checked = true;
					$(this).parents('li:eq(0)').find('.selected').removeClass('selected');
					$(this).parents('li:eq(0)').children('.refineDefault').html($(this).parent().html().replace(/<a onclick="[^>]+">/, '<a>').replace('</a>', ' <span class="icon-refine-arrow"></span></a>'));
					$(this).parents('li:eq(0)').children('.refineDefault')[0].className = "refineNonDefault";
					$(this).parent().addClass('selected');
					$('#refineForm, .clearall, .refineSearch').addClass('active');
					$('#pillar-select').show();
				}
			}
		});
		$('.clearall').click(function() {
			window.location.href = window.location.href.split('?')[0] + '?' + solr.returnQueryPart(['page', 'sort', 'age', 'contenttype', 'credits', 'mincredits', 'maxcredits', 'specialty']);
		});
		$('.refineOption a').click(function() {
			$(this).parent().parent().find('input').each(function() {
				this.checked = false;
			});
			$(this).siblings('input')[0].checked = true;
			$('#refineForm').submit();
		});
		$('.searchResultSubLinks').each(function() {
			$(this).find('a').each(function(idx) {
				$(this).attr('onclick','wmdTrack("sr-msr_s' + (idx + 1) + '")');
			});
		});
	},
	'docReadyInit': function() {
		solr.bindSearchForm();
		if (solr.srchQuery == null) // If No Query Exists, Display Search Home Page
		{
			$('body').addClass('noResult');
		} else {
			 if (solr.currSite != 'profeducation') {
				$('#adtagheader, #adtagfooter, .rightAd').show();
			}
			else {
				$('#searchRightRailContain').hide();
			}
			/* Convert Placeholder Bucket to Correct Bucket - Workaround for Ad-Moving issues */
			$('#' + solr.currSite + ' .searchSectionHeader').prependTo('#srchSiteInit');
			$('#' + solr.currSite).remove();
			$('#srchSiteInit').attr({
				'id': solr.currSite,
				'class': 'srchSite'
			});
			/* /Convert Placeholder Bucket to Correct Bucket - Workaround for Ad-Moving issues */
			// Populate Query Into HTML
			$('.searchQuery').html(decodeURIComponent(solr.srchQuery));
			$('.searchQueryU').html(decodeURIComponent(solr.srchQuery).toUpperCase());
			$('input.pillarSearchInput').val(decodeURIComponent(solr.srchQuery));
			// Select Current Pillar Tab
			$('#pillar-select li a.' + solr.currSite).addClass('selected');
			if (solr.isMobile) {
				$('#pillar-select li a.selected').parent().clone().prependTo($('#pillar-select ul'));
			}
			// If Collection not in Results, Remove placeholder containers
			$('.srchSite').each(function() {
				if (typeof result[this.id] == 'undefined') {
					$(this).remove()
				}
			});
			// Proceed to check results JSON
			solr.checkResJson();
			// Once all content populated, apply any necessary JS bindings
			solr.postPopBinds();
		}
	},
	'init': function() {
		solr.noBind = false;
		solr.pageLimit = 101;
		solr.pageSize = 15;
		solr.rColSize = 3;
		solr.srchQuery = solr.checkQuery('q');
		solr.srchQueryArr = decodeURIComponent($.trim(solr.srchQuery)).split(" ");
		solr.currPlr = solr.checkQuery('plr');
		solr.pageIndex = Number(solr.checkQuery('page'));
		solr.isMobile = (typeof searchMobile != 'undefined');
		solr.spotlightCount = 0;
		switch (solr.currPlr) { // Convert pillar query string to match JSON collection name AND Set pillar-based Omniture tracking vars
			case "nws":
				solr.currSite = "profnews";
				window.s_context = {
					'wb.chn': 'news',
					'wb.filter': 'news_search',
					'wb.contype': 'nav - site search [' + DFPTargetKeys.pageSegVars.cg + ']'
				};
				break;
			case "ref":
				solr.currSite = "profreference";
				window.s_context = {
					'wb.chn': 'reference',
					'wb.filter': 'reference_search',
					'wb.contype': 'nav - site search [' + DFPTargetKeys.pageSegVars.cg + ']'
				};
				break;
			case "edu":
				solr.currSite = "profeducation";
				window.s_context = {
					'wb.chn': 'education',
					'wb.filter': 'education_search',
					'wb.contype': 'nav - site search [' + DFPTargetKeys.pageSegVars.cg + ']'
				};
				break;
			case "all":
				solr.currSite = "profnewsref";
				window.s_context = {
					'wb.chn': 'other',
					'wb.filter': 'site_search',
					'wb.contype': 'nav - site search [' + DFPTargetKeys.pageSegVars.cg + ']'
				};
				break;
			case "mln":
				solr.currSite = "profmedline";
				window.s_context = {
					'wb.chn': 'other',
					'wb.filter': 'site_search',
					'wb.contype': 'nav - site search [' + DFPTargetKeys.pageSegVars.cg + ']'
				};
				break;
			default:
				if (locale == "en" || locale == "us" || locale == null) {
					solr.currSite = "profnewsref";
					solr.currPlr = "all";
					window.s_context = {
						'wb.chn': 'other',
						'wb.filter': 'site_search',
						'wb.contype': 'nav - site search [' + DFPTargetKeys.pageSegVars.cg + ']'
					};
				} else {
					solr.currSite = "profnews";
					solr.currPlr = "nws";
					window.s_context = {
						'wb.chn': 'news',
						'wb.filter': 'news_search',
						'wb.contype': 'nav - site search [' + DFPTargetKeys.pageSegVars.cg + ']'
					};
				}
				break;
		}
		solr.sitePlr = {
			"profnews": "nws",
			"profreference": "ref",
			"profeducation": "edu",
			"profnewsref": "all",
			"profmedline": "mln"
		};
		if (useCase == 'education') { // Map Education 'use case' to Education pillar
			solr.currSite = 'profeducation';
		}
		if (solr.currSite == 'profeducation') {
			window.ads2_ignore = {
				all: true
			};
		}
		if (solr.pageIndex > 1) { // Set page number Omniture variable
			window.s_context['wb.pagination'] = solr.pageIndex;
		} else {
			window.s_context['wb.pagination'] = 1;
		}
		/* Query-specific load logic */
		if (solr.srchQuery != null) {
			if (solr.checkCme().length == solr.srchQueryArr.length) { // If search query only contains CME terms, redirect to CME
				window.location.href = 'http://www' + solr.checkEnv() + '.medscape.org';
			}
			window.s_pagename = 'search' + solr.checkEnv() + '.medscape.com/search-results';
			window.s_context['wb.query'] = solr.srchQuery; // Set query Omniture variable
			if (result[solr.currSite].data != null) { // Set Result Number Omniture var
				window.s_context['wb.results'] = result[solr.currSite].data.response.numFound;
				window.s_results = String(result[solr.currSite].data.response.numFound);
			}
		}
		/*  /Query-specific load logic */

		$(document).ready(function() {
			solr.docReadyInit();
		});
	}
}
solr.init();

/* IFI Widget */
function renderIfiWidg(context) {
	if (typeof ifiWidgetData != 'undefined' && ifiWidgetData.length > 0) {
		var ifiLinkNum = 5;
		var ifiText = 'Information from Industry';
		var ifiTextMore = 'More';
		var currDom = '';
		if (typeof $(context).attr('data-ifi-link-ct') != 'undefined' && $(context).attr('data-ifi-link-ct') != '' && !isNaN($(context).attr('data-ifi-link-ct'))) {
			ifiLinkNum = Number($(context).attr('data-ifi-link-ct'));
		}
		if (typeof $(context).attr('data-ifi-translate') != 'undefined' && $(context).attr('data-ifi-translate') != '') {
			ifiText = $(context).attr('data-ifi-translate').split('|')[0];
			ifiTextMore = $(context).attr('data-ifi-translate').split('|')[1];
		}
		if (typeof getDomain != 'undefined') {
			currDom = getDomain();
		}
		$(context).replaceWith('<div class="ifi-widg"> <div class="ifi-widg-head"> <div class="ifi-widg-head-txt">' + ifiText + '</div> <div class="ifi-widg-head-more"><a href="//www.' + currDom + 'medscape.com/invitation/viewTracker.do">' + ifiTextMore + '</a></div> </div> <div class="ifi-widg-cont"> <ul class="ifi-widg-cont-list"> </ul> </div> </div>');
		$(ifiWidgetData).each(function(idx) {
			if (idx+1 > ifiLinkNum) {
				return false;
			}
			$('.ifi-widg-cont-list').append('<li><a href="//wp.' + currDom + 'medscape.com/activity/viewpresentation?action=startActivity&activityId=' + this.activityId + '&tacticId=' + this.tacticId + '">' + this.randomTitle + '</a></li>');
		});
		$('.ifi-widg').addClass('active');
	}
}

function checkIfiWidg() {
	if ($('.trig-ifi-widget').length > 0) {
		if (document.domain.indexOf('search') != -1) {
			$('.trig-ifi-widget').each(function() {
				renderIfiWidg(this);
			});
		}
		else if (document.domain.indexOf('search') == -1) {
			$.getScript('//' + document.domain + '/noscan/ifi-widget', function() {
				$('.trig-ifi-widget').each(function() {
					renderIfiWidg(this);
				});
			});
		}
	}
}

$(document).ready(function() {
	checkIfiWidg();
})

/* Consult Search Widget */
function checkCsltSrch() {
	$.ajax({
		url: 'http://api.' + getDomain('profreg') + 'medscape.com/consultservice/consultrelatedlinks',
		dataType: 'json',
		contentType: 'application/json',
		data: '{"query": "' + solr.srchQuery + '"}',
		type: 'POST',
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		success: function(json) {
			if (typeof json == 'object' && json != null && !$.isEmptyObject(json) && typeof json.StatusCode != 'undefined' && json.StatusCode == 200 && typeof json.code != 'undefined' && json.code == 1 && typeof json.data == 'object' && !$.isEmptyObject(json.data) && typeof json.data.Items != 'undefined' && json.data.Items != null && json.data.Items.length > 0) {
				try {
					$(json.data.Items).each(function(idx) {
						try {
							if (this.Title.length > 62) {
								$('.rel-links-card#consult-discussion ul').append('<li> <div class="post-header"> <a href="http://www.' + getDomain('profreg') + 'medscape.com/consult/post?id=' + this.Id + '" onclick="wmdPageLink(\'ct-srch_pst' + (idx+1) + '\');"> <div class="post-user-image"><span><img src="' + this.Author.AvatarUrl.replace(/http:/g,'https:') + '" class="avatar" border="0"></span></div> <div class="post-user">' + this.Author.DisplayName + '<div class="post-user-credentials">' + this.Author.Properties.Specialty + '</div> </div> </a> </div> <a href="http://www.' + getDomain('profreg') + 'medscape.com/consult/post?id=' + this.Id + '" class="title" onclick="wmdPageLink(\'ct-srch_pst' + (idx+1) + '\');">' + this.Title.substr(0, 62).replace(/[\S]+$/,'') + '&#8230;</a> <div class="post-footer"> <div class="comments"><a href="http://www.' + getDomain('profreg') + 'medscape.com/consult/post?id=' + this.Id + '&responses=true" onclick="wmdPageLink(\'ct-srch_reply\');">' + this.ReplyCount + ' replies</a></div> <div class="respond"><a href="http://www.' + getDomain('profreg') + 'medscape.com/consult/post?id=' + this.Id + '&respond=true" onclick="wmdPageLink(\'ct-srch_rsp\');">Respond</a></div> </div> </li>');
							}
							else {
								$('.rel-links-card#consult-discussion ul').append('<li> <div class="post-header"> <a href="http://www.' + getDomain('profreg') + 'medscape.com/consult/post?id=' + this.Id + '" onclick="wmdPageLink(\'ct-srch_pst' + (idx+1) + '\');"> <div class="post-user-image"><span><img src="' + this.Author.AvatarUrl.replace(/http:/g,'https:') + '" class="avatar" border="0"></span></div> <div class="post-user">' + this.Author.DisplayName + '<div class="post-user-credentials">' + this.Author.Properties.Specialty + '</div> </div> </a> </div> <a href="http://www.' + getDomain('profreg') + 'medscape.com/consult/post?id=' + this.Id + '" class="title" onclick="wmdPageLink(\'ct-srch_pst' + (idx+1) + '\');">' + this.Title + '</a> <div class="post-footer"> <div class="comments"><a href="http://www.' + getDomain('profreg') + 'medscape.com/consult/post?id=' + this.Id + '&responses=true" onclick="wmdPageLink(\'ct-srch_reply\');">' + this.ReplyCount + ' replies</a></div> <div class="respond"><a href="http://www.' + getDomain('profreg') + 'medscape.com/consult/post?id=' + this.Id + '&respond=true" onclick="wmdPageLink(\'ct-srch_rsp\');">Respond</a></div> </div> </li>');
							}
						} catch(e) {
							console.log(e);
						}						
					});
					$('.rel-links-card#consult-discussion .consult-bucket-footer a.consult-discussion').attr('href', 'http://www.' + getDomain('profreg') + 'medscape.com/consult/search?filterby=tag&query=' + solr.srchQuery);
					$('.rel-links-card#consult-discussion').addClass('active');
				} catch(e) {
					console.log(e);
				}
			}
		}
	});
}

$(document).ready(function() {
	checkCsltSrch();
})