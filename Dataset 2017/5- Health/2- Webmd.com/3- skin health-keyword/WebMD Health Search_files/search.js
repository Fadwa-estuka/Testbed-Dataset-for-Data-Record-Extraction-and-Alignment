/* repo: SFE2.0/HEAD@65a1308 - Package Version: 0.2.0 - 2017-01-12 05:32 pm - User:  */
// Typeahead / Form functionality
$(document).ready(function () {
	var search = (function(){
		var $searchBtn = $('.search-top-btn'),
			$searchInput = $('.masthead-search-input'),
			$searchResultsList = $('.masthead-search-results-list'),
			$searchForm = $('form[name=searchForm]');

		function handleAutocomplete (formScope) {
			var currenUrl = window.location.href,
				splitUrl = currenUrl.split('/'),
				url = splitUrl[0] + '//' + splitUrl[2],
				redirectUrl = url + '/search/2/results?query=',
				selectedvalue = $('.masthead-search-input', formScope).val().trim();
			if(selectedvalue !== '') {
				window.location.href = redirectUrl + selectedvalue;
			}
		}

		function getAutocompleteList (data) {
			var list = '',
				references = (data.types.length > 0 ) ? data.types[0].references : [],
				key = $('.masthead-search-input:focus').val().trim(),
				newkey = '<span>' + key + '</span>';

			references = $.map(references, function (item) {
				item.text = item.text.replace(key, newkey);
				return item;
			});

			for(key in references) {
				list += '<li class="typeahead_li_fmt" data-val="' + references[key].val + '">' + references[key].text + '</li>';
			}
			return list;
		}

		function getSearchData (keyword) {
			if(keyword.length > 2) {
				$.ajax({
					url: 'http://www.webmd.com/api/qrl/LookupService.ashx',
					type: 'GET',
					jsonp: 'jsonp',
					dataType: 'jsonp',
					data: {
						s: 2,
						sz: 6,
						q: keyword
					},
					success: function (data) {
						$searchResultsList.hide();

						if(data.types.length > 0) {
							$('.masthead-search-results-list', $('.masthead-search-input:focus').parents('form')).html(getAutocompleteList(data)).show();
						}
					}
				});
			}
		}

		function handleResultsList() {
			$searchInput.on('keyup', function (e) {
				e.preventDefault();
				e.stopPropagation();
				var keyword = $(this).val(),
					keyCode = e.keyCode;

				// Enable submit if there are search terms
				$searchBtn.prop('disabled', false);

				// Hide search results if there are less then 3 characters
				if(keyword.length < 3) {
					$searchResultsList.hide();
				}

				if(keyword.length > 2) {
					if(keyCode !== 40 && keyCode !== 38) {
						getSearchData(keyword);
					}

					if(e.keyCode === 13) {
						handleAutocomplete($(this).parents('form'));
					}
				}

				else {
					return;
				}
			});
		}

		function disableSubmit() {
			// Disable submit if there are no search terms
			$searchBtn.on('click', function(){
				var $searchTerm = $.trim($('#sfe-search-input').val());

				if (!$searchTerm.length) {
					$searchBtn.prop('disabled', true);
				}

				else {
					$searchBtn.prop('disabled', false);
				}
			});
		}

		function itemSelection() {
			$searchForm.on('hover', 'ul.masthead-search-results-list li', function () {
				$(this).parents('ul').find('li').removeClass('selected');
				$(this).addClass('selected');
				$(this).parents('form').find('.masthead-search-input').val($(this).text());
			});
		}

		function itemHighlight() {
			$searchForm.on('keydown', function (e) {
				var key = e.keyCode,
					$listItems = $searchResultsList.find('li'),
					$selected = $listItems.filter('.selected'),
					$current;

				if(key !== 40 && key !== 38) {
					return;
				}

				$listItems.removeClass('selected');

				if(key === 40) { // Down key

					if(!$selected.length || $selected.is(':last-child')) {
						$current = $listItems.eq(0);
					}
					else {
						$current = $selected.next();
					}
				}

				else if(key === 38) { // Up key
					if(!$selected.length || $selected.is(':first-child')) {
						$current = $listItems.last();
					}
					else {
						$current = $selected.prev();
					}
				}

				$current.addClass('selected');
				$searchInput.val($current.text());
			});
		}

		function itemClicked() {
			$searchResultsList.on('click', 'li', function (e) {
				e.preventDefault();
				e.stopPropagation();
				var $module = $searchForm.data('metrics-module'),
					index = $(this).index() + 1;

					// autocomplete results metrics
					wmdPageLink($module + '_la' + index);

				handleAutocomplete($(this).parents('form'));
				throw new Error("Throwing error to prevent further execution of typeahead submit function");
			});
		}

		function showList() {
			$searchInput.on('focus', function () {
				if($(this).val().trim().length > 2) {
					$searchResultsList.hide();

					if($(this).parents('form').find('li').length > 0) {
						$searchResultsList.show();
					}
				}
			});
		}

		function onSubmit() {
			$('.masthead-search-submit').on('click', function (e) {
				e.preventDefault();
				handleAutocomplete($(this).parents('form'));
			});
		}

		function init() {
			disableSubmit();
			handleResultsList();
			itemSelection();
			itemHighlight();
			itemClicked();
			showList();
			onSubmit();
		}

		return {
			init: init
        };

	})();

	search.init();
});

/* physician.js- Physician Directory Module*/
// $(document).ready(function () {
// 	$('.placeHolder > div:nth-child(3)').hide()
// 	//gets the query
// 	var searchWord = window.location.search.substring(window.location.search.indexOf("=") + 1);
// 	console.log("SearchWord: " + searchWord);
//
//
// 	var ulObj = $('.promo-results > ul').empty()
// 	$('.loc').empty();
// 	var docList = '<li><a href="" onclick="' + "return sl(this,'','pd-wdgt-nrby_1');\">";
// 	$.get('/api/directories/service.svc/location', function (data) {
//
// 		console.log(data);
// 		var res = JSON.parse(data);
// 		console.log(res);
// 		//$("#phys-attrib").attr("href","//doctor.webmd.com/results?city="+ res.data.City+ "&state=" + res.data.State+ "&zip=" + res.data.Zip+ "&sd=37&tname=General%20Practice");
// 		$('.loc').text(res.data.City + ", " + res.data.State);
//
// 		url = "/explore/api/physicians?term=" + searchWord + "&lat=" + res.data.Latitude + "&long=" + res.data.Longitude + "&start=0&count=2";
// 		$.get(url, function (resp) {
// 			console.log(docList)
// 			var text = "";
// 			if(resp.data.response.docs.length > 0) {
// 				$.each(resp.data.response.docs, function (index, obj) {
// 					if(index > 2)
// 						return false;
// 					text += docList + obj.q_firstname + ", " + obj.q_lastname + "</a> </br>" + res.data.City + ", " + res.data.State + "  " + res.data.Zip + "</li>";
// 				});
// 				ulObj.html(text);
// 				$('.placeHolder > div:nth-child(3)').show()
// 			}
//
// 		});
//
// 	})
// });
(function () {
	'use strict';

	$(document).ready(function () {

		var baseUrl = webmd.url.getHostname() === 'localhost' ? 'www.webmd.com' : webmd.url.getHostname();
		baseUrl = 'http://' + baseUrl;
		var locationApiUrl = baseUrl + '/api/directories/service.svc/location';

		$.get(locationApiUrl)
			.success(function (response) {

				var res = JSON.parse(response);
				var lat = res.data.Latitude;
				var long = res.data.Longitude;
				var termQuery = getURLParameter('query');
				var getPhysicianApiUrl = ('/explore/api/physicians?lat=' + lat + '&long=' + long + '&term=' + termQuery );

				$.get(getPhysicianApiUrl, function (response) {

					//if there are physician results
					if(response.data.response.docs.length > 2) {

						var docs = response.data.response.docs;
						var physician = findMostFrequentPropertyOfArray(docs, 'jobtitledesc');

						//physician header
						var practiceName = findMostFrequentPropertyOfArray(docs, 'specialtyPracticeName');
						$('.physicians-in-header').text(((practiceName && practiceName.trim() !== "")?practiceName:physician) + 's in'); //simple pluralize
						$('.physicians-in').text(res.data.City + ', ' + res.data.State);
						$('.physician-button').text('View More ' + ((practiceName && practiceName.trim() !== "")?practiceName:physician) + 's');

						//physician list
						for(var i = 0; i < 2; i++) {
							var currentDoc = docs[i];
							var docUrl = 'http://doctor.webmd.com/doctor/' + currentDoc.q_firstname + '-' + currentDoc.q_lastname + '-' + currentDoc.providerid;
							var docTitle = '';
							if(currentDoc.degreeabbr.length > 0){
								docTitle = ', ' + currentDoc.degreeabbr[0];
							}

							$('.physician-list').append(
								$('<li>').append(
									$('<a>').attr('href', docUrl).append(
									$('<div>').attr('class', 'physician-title').append(currentDoc.q_firstname + ' ' + currentDoc.q_lastname + docTitle))
								.append($('<div>').attr('class', 'physician-location').append(currentDoc.city + ', ' + currentDoc.state + ' ' + currentDoc.postalcode))
								));
						}

						//physician view more link
						var specialty = findMostFrequentPropertyOfArray(docs, 'displaySpecialty');
						var splitSpecialty = specialty.split('_');
						var name = splitSpecialty[0];
						var sd = splitSpecialty[1];

						var viewMoreUrl = 'http://doctor.webmd.com/results?so=' +
							'&city=' + res.data.City +
							'&state=' + res.data.State +
							'&zip=' + res.data.Zip +
							'&sd=' + sd +
							'&name=' + name

						$('.physician-button-link').attr('href', viewMoreUrl);

						$('.lhd-module').css('display', 'block'); //show module
					}
				});
			})
			.error(function (error) {
				console.log('lhd-no-results');
				console.log(locationApiUrl);
			});

		function getURLParameter (variable) {

			var query = window.location.search.substring(1);
			var vars = query.split('&');

			for(var i = 0; i < vars.length; i++) {
				var pair = vars[i].split('=');
				if(pair[0] == variable) {
					return pair[1];
				}
			}
			return false;
		};

		function findMostFrequentPropertyOfArray (docs, property) {

			var arrayofProperties;
			var uniqs = {};
			var max;

			arrayofProperties = $.map(docs, function (doc) {
				return doc[property];
			});

			for(var i = 0; i < arrayofProperties.length; i++) {
				uniqs[arrayofProperties[i]] = (uniqs[arrayofProperties[i]] || 0) + 1;
			}

			max = {val: arrayofProperties[0], count: 1};
			for(var u in uniqs) {
				if(max.count < uniqs[u]) {
					max = {val: u, count: uniqs[u]};
				}
			}

			return max.val;
		};

	});

})();

/**
 *
 * Mobile responsiveness and functionality for fragment-related-search-top.ejs
 *
 */

(function ($) {

	$(document).ready(function () {

		/**
		 * Adjusts related terms based on screen size using a desktop css selector
		 */

		function relatedListAdjust () {

			//check if Desktop/Tablet
			if($('.search-top-related-list').css('display') == 'block') {

				$('.search-top-related-list li').css('display', 'inline');

				$('.search-top-related-list-more').css('display', 'none');
			}

			//Mobile
			else {

				$('.search-top-related-list li:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3))').css('display', 'none');

				$('.search-top-related-list-more').css('display', 'inline');
			}
		};

		/**
		 * When mobile More text is clicked on, display the remaining hidden terms
		 */

		$('#showMoreClick').click(function () {

			$('.search-top-related-list li').css('display', 'inline');

			$('.search-top-related-list-more').css('display', 'none');
		})

		relatedListAdjust();

		$(window).resize(relatedListAdjust);

	});

})(jQuery);

/**
 *
 * bxSlider configuration and functionality for fragment-search-image-results.ejs
 *
 */

(function ($) {

	$(document).ready(function () {

		const WEBMD_LOGO_NAME = 'wbmd_bus_logo';
		const WEBMD_BASEURL = 'http://www.webmd.com/';
		const WEBMD_IMAGE_BASEURL = 'http://img.webmd.com/dtmcms/live/';
		const VALID_SLIDE_IMAGE_WIDTH = 210;
		const VALID_SLIDE_IMAGE_HEIGHT = 130;
		const DOC_URL_TYPE_DESKTOP = 'Desktop';
		const DOC_URL_TYPE_MOBILE = 'Mobile';
		const AKAMAI_SLIDE_IMAGE_RESIZE = '210:130';
		const AKAMAI_RECIPE_IMAGE_CROP = "300px:186px;*,93";
		var mediaType = findDeviceType(mediaType, DOC_URL_TYPE_MOBILE, DOC_URL_TYPE_DESKTOP);
		var searchImageQuery = getURLParameter('query');
		var searchImagePage = 2; //start querying from page 2 of api since first page has the same slide imgs

		var slider = $('.image-results-bxslider').bxSlider({
			slideWidth: 210,
			minSlides: 1,
			maxSlides: 4,
			slideMargin: 10,
			pager: false,
			infiniteLoop: false,
			prevText: '<div class="bx-prev-icon"></div>',
			nextText: '<div class="bx-next-icon"></div>',
			hideControlOnEnd: true,

			onSliderLoad: function (slider) {
				$('.image-results-bxslider').css('visibility', 'visible');
				$('.image-results-bxslider').css('height', 'auto');
				$('.ajax-loading-gif').css('display', 'none');
				$('.bx-viewport').css('display', 'block');
			},

			onSlideNext: function ($slideElement, oldIndex, newIndex) {

				if(((slider.getPagerQty() - 1) === newIndex) || slider.getPagerQty() === 2) {
					requestMoreImages(oldIndex);
				}
			}

		});

		function requestMoreImages (oldIndex) {
			$('.bx-viewport').css('display', 'none');
			$('.ajax-loading-gif').css('display', 'block');

			var getSearchApiUrl = ('/search/2/api/images?query=' + searchImageQuery + '&page=' + searchImagePage);

			$.get(getSearchApiUrl, function (response) {
				var imagesWereFound = false;
				searchImagePage++;

				if(response.data) {
					//parse for slide show images
					var dataArray = response.data;
					for(var i = 0; i < dataArray.length; i++) {
						var dataImage = dataArray[i];
						if(dataImage.images != undefined) {
							var imageArray = dataImage.images;
							var imageURLs = dataImage.urls;
							var contentType = dataImage.content_type;
							var slideImageLink = '';

							//check for urls
							if(imageURLs != undefined) {
								for(var k = 0; k < imageURLs.length; k++) {

									var urlStr = imageURLs[k];
									var url = JSON.parse(urlStr);

									if(url.type == mediaType) {
										if(url.url.indexOf('http') < 0) {
											url.url = WEBMD_BASEURL + url;
										}
										slideImageLink = url.url;
									}
								}
							}

							//display slide images
							for(var j = 0; j < imageArray.length; j++) {
								var imageStr = imageArray[j];
								var image = JSON.parse(imageStr);
								if(image.image_path != null &&
									image.image_path.length > 0 &&
									image.name != WEBMD_LOGO_NAME &&
									image.width >= VALID_SLIDE_IMAGE_WIDTH &&
									image.height >= VALID_SLIDE_IMAGE_HEIGHT &&
									(image.width / image.height > 0.9)) {
									var slideImageUrl = '';
									if (image.image_path.indexOf('http') < 0) {
										slideImageUrl = (WEBMD_IMAGE_BASEURL + image.image_path);
									} else {
										slideImageUrl = image.image_path;
									}

									imagesWereFound = true;
									if (contentType && contentType === 'Recipe') {
										slideImageUrl = getAkamaiResizedUrl(slideImageUrl, AKAMAI_SLIDE_IMAGE_RESIZE, AKAMAI_RECIPE_IMAGE_CROP);
									} else {
										slideImageUrl = getAkamaiResizedUrl(slideImageUrl, AKAMAI_SLIDE_IMAGE_RESIZE);
									}
									$('.image-results-bxslider').append('<li class="slide" ><a href="' + slideImageLink + '"><img src="' + slideImageUrl + '"  alt="Image"><p class="image-results-title">'+response.data[i].title+'</p></a></li>');
									//Only pick one image per record.
									break;
								}
							}
						}
					}
				}
				if(imagesWereFound) {
					slider.reloadSlider();
					slider.goToSlideInstant(oldIndex + 1);
					textTruncate($('.image-results-title'), 49, 50);
				} else {
					slider.reloadSlider();
					slider.goToSlideInstant(((slider.getPagerQty() - 1 > oldIndex)?(oldIndex+1):oldIndex));
					$('.bx-next').addClass('disabled');
				}
			});
		}

		//akamai resize url
		function getAkamaiResizedUrl (url, resizeRatio, crop) {
			if(url) {
				if(url.indexOf('?') < 0) {
					url += '?';
				} else {
					url += '&';
				}
				if(url.indexOf('interpolation') < 0) {
					url += 'interpolation=lanczos-none&';
				}
				if(crop){
					url += ("crop="+crop+"&");
				}
				if(url.indexOf('resize') < 0) {
					url += ('resize=' + resizeRatio);
				}
			}
			return url;
		}

		function findDeviceType (mediaType, DOC_URL_TYPE_MOBILE, DOC_URL_TYPE_DESKTOP) {
			try{
				if(window.matchMedia('screen and (max-width: 40em)').matches) {
					/* Mobile */
					mediaType = DOC_URL_TYPE_MOBILE;
				} else {
					/* Desktop */
					mediaType = DOC_URL_TYPE_DESKTOP;
				}
			}catch(e){
				mediaType = DOC_URL_TYPE_DESKTOP;
			}
			return mediaType;
		}

		function getURLParameter (variable) {
			var query = window.location.search.substring(1);
			var vars = query.split('&');
			for(var i = 0; i < vars.length; i++) {
				var pair = vars[i].split('=');
				if(pair[0] == variable) {
					return pair[1];
				}
			}
			return (false);
		}

	});

})
(jQuery);



'use strict';

! function(a, b, c, d, e, f) {
    a[d] = a[d] || function() {
        (a[d].q = a[d].q || []).push(arguments)
    }, a[d].t = 1 * new Date, e = b.createElement(c), f = b.getElementsByTagName(c)[0], e.async = 1, e.src = "//www.google.com/adsense/search/async-ads.js", f.parentNode.insertBefore(e, f)
}(window, document, "script", "_googCsa");


webmd.object.set('webmd.sfe.google.adsense');
webmd.sfe.google.adsense = {
    getLocationUrl: function() {
        return window.location.href;
    },
    getPageOptions: function(searchQuery, isDesktop) {
        return {
            "pageOptions": {
                "adtest": location.host === "www.webmd.com" ? "off" : "on",
                "colorTitleLink": "#006699",
                "colorDomainLink": "#006699",
                "colorBackground": navigator.appVersion.indexOf("Win") !== -1 ? "#FFF8E7" : "#FDF6E5",
                "detailedAttribution": !1,
                "fontSizeTitle": 14,
                "hl": "en",
                "linkTarget": "_blank",
                "noTitleUnderline": !0,
                "pubId": "partner-webmd_core",
                "query": unescape(searchQuery[1]),
                "siteLinks": !1,
                "sellerRatings": !0
            },
            "adblocktop": {
                "container": "adContainer-top",
                "channel": "webmd_top_ad2",
                "lines": 3,
                "longerHeadlines": !0,
                "number": isDesktop === false ? 1 : 3
            },
            "adblockbottom": {
                "container": "adContainer-bottom",
                "lines": 3,
                "channel": "webmd_bottom_ad2",
                "longerHeadlines": !0,
                "number": isDesktop === false ? 2 : 3,
            }
        };
    },
    initialize: function() {
        var locationurl = this.getLocationUrl(),
            searchQuery = locationurl.match('query=(.*)&'),
            isDesktop = webmd.useragent.getType() === 'desktop',
            options = null;
        if (searchQuery === null) {
            searchQuery = locationurl.match('query=(.*)$');
        }
        if (searchQuery && searchQuery !== null && searchQuery[1]) {
            options = this.getPageOptions(searchQuery, isDesktop);
            if ($("#adContainer-top").length > 0 || $("#adContainer-bottom").length > 0) {
                _googCsa('ads', options.pageOptions, options.adblocktop, options.adblockbottom);
            }

        }
    }
};
$(document).ready(function() {
    webmd.sfe.google.adsense.initialize();
});

var s_package_type;

// Cut off text after a certain character count, show ellipsis
function textTruncate(title, maxLength, subString) {
	title.each(function() {
	    var $this = $(this),
	    	text = $this.text();

	    if (text.length > maxLength) {
	        $this.text(text.substr(0, subString) + "...");
	    }
	});
}

// Hide sticky nav sharebare on search pages
function hideStickyNav(packageType, element) {
	if (s_package_type === packageType) {
   		element.hide();
   	} 
}

$(document).ready(function(){
	var $imageTitle = $('.image-results-title'),
		$searchDescription = $('.search-results-doc-description'),
		packageTypeString = 'search - nosp';

	// If image slider title is greater than 50 characters, show ellipsis	
	textTruncate($imageTitle, 49, 50);

	// If the search results text is greater than 200 characters, show ellipsis	
	textTruncate($searchDescription, 199, 200);

	$(window).scroll(function() {
		var $stickyShareNav = $('.global-sharebar-container');
		hideStickyNav(packageTypeString, $stickyShareNav);
	});
});
/*
* jQuery listnav plugin
*
* Add a slick "letter-based" navigation bar to all of your lists.
* Click a letter to quickly filter the list to items that match that letter.
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*
* Version 2.4.9 (11/03/14)
* Author: Eric Steinborn
* Compatibility: jQuery 1.3.x through 1.11.0 and jQuery 2
* Browser Compatibility: IE6+, FF, Chrome & Safari
* CSS is a little wonky in IE6, just set your listnav class to be 100% width and it works fine.
*
*/
(function ($) {

    $.fn.listnav = function (options) {

        var opts = $.extend({}, $.fn.listnav.defaults, options),
            letters = ['_', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '-'],
            firstClick = false,
            //detect if you are on a touch device easily.
            clickEventType=((document.ontouchstart!==null)?'click':'touchend');

        opts.prefixes = $.map(opts.prefixes, function (n) {

            return n.toLowerCase();

        });

        return this.each(function () {

            var $wrapper, $letters, $letterCount, left, width, count,
                id = this.id,
                $list = $(this),
                counts = {},
                allCount = 0, fullCount = 0,
                isAll = true,
                prevLetter = '';

            if ( !$('#' + id + '-nav').length ) {

                $('<div id="' + id + '-nav" class="listNav"/>').insertBefore($list);
                // Insert the nav if its not been inserted already (preferred method)
                // Legacy method was to add the nav yourself in HTML, I didn't like that requirement

            }

            $wrapper = $('#' + id + '-nav');
            // <ul id="myList"> for list and <div id="myList-nav"> for nav wrapper

            function init() {

                $wrapper.append(createLettersHtml());

                $letters = $('.ln-letters', $wrapper).slice(0, 1);

                if ( opts.showCounts ) {

                    $letterCount = $('.ln-letter-count', $wrapper).slice(0, 1);

                }

                addClasses();

                addNoMatchLI();

                bindHandlers();

                if (opts.flagDisabled) {

                    addDisabledClass();

                }

                // remove nav items we don't need

                if ( !opts.includeAll ) {

                    $('.all', $letters).remove();

                }
                if ( !opts.includeNums ) {

                    $('._', $letters).remove();

                }
                if ( !opts.includeOther ) {

                    $('.-', $letters).remove();

                }
                if ( opts.removeDisabled ) {

                    $('.ln-disabled', $letters).remove();

                }

                $(':last', $letters).addClass('ln-last');

                if ( $.cookie && (opts.cookieName !== null) ) {

                    var cookieLetter = $.cookie(opts.cookieName);

                    if ( cookieLetter !== null && typeof cookieLetter !== "undefined" ) {

                        opts.initLetter = cookieLetter;

                    }

                }

                // decide what to show first

                // Is there an initLetter set, if so, show that letter first
                if ( opts.initLetter !== '' ) {

                    firstClick = true;

                    // click the initLetter if there was one
                    $('.' + opts.initLetter.toLowerCase(), $letters).slice(0, 1).trigger(clickEventType);

                } else {

                    // If no init letter is set, and you included All, then show it
                    if ( opts.includeAll ) {

                        // make the All link look clicked, but don't actually click it
                        $('.all', $letters).addClass('ln-selected');

                    } else {

                        // All was not included, lets find the first letter with a count and show it
                        for ( var i = ((opts.includeNums) ? 0 : 1); i < letters.length; i++) {

                            if ( counts[letters[i]] > 0 ) {

                                firstClick = true;

                                $('.' + letters[i], $letters).slice(0, 1).trigger(clickEventType);

                                break;

                            }
                        }
                    }
                }
            }

            // position the letter count above the letter links
            function setLetterCountTop() {

                // we're going to need to subtract this from the top value of the wrapper to accomodate changes in font-size in CSS.
                var letterCountHeight = $letterCount.outerHeight();

                $letterCount.css({
                    top: $('a:first', $wrapper).slice(0, 1).position().top - letterCountHeight
                    // we're going to grab the first anchor in the list
                    // We can no longer guarantee that a specific letter will be present
                    // since adding the "removeDisabled" option

                });

            }

            // adds a class to each LI that has text content inside of it (ie, inside an <a>, a <div>, nested DOM nodes, etc)
            function addClasses() {

                var str, spl, $this,
                    firstChar = '',
                    hasPrefixes = (opts.prefixes.length > 0),
                    hasFilterSelector = (opts.filterSelector.length > 0);

                // Iterate over the list and set a class on each one and use that to filter by
                $($list).children().each(function () {

                    $this = $(this);

                    // I'm assuming you didn't choose a filterSelector, hopefully saving some cycles
                    if ( !hasFilterSelector ) {

                        //Grab the first text content of the LI, we'll use this to filter by
                        str = $.trim($this.text()).toLowerCase();

                    } else {

                        // You set a filterSelector so lets find it and use that to search by instead
                        str = $.trim($this.find(opts.filterSelector).text()).toLowerCase();

                    }

                    // This will run only if there is something to filter by, skipping over images and non-filterable content.
                    if (str !== '') {

                        // Apply the non-prefix class to LIs that have prefixed content in them
                        if (hasPrefixes) {
                            var prefixes = $.map(opts.prefixes, function(value) {
                                return value.indexOf(' ') <= 0 ? value + ' ' : value;
                            });
                            var matches = $.grep(prefixes, function(value) {
                                return str.indexOf(value) === 0;
                            });
                            if (matches.length > 0) {
                                var afterMatch = str.toLowerCase().split(matches[0])[1];
                                if(afterMatch != null) {
                                    firstChar = $.trim(afterMatch).charAt(0);
                                } else {
                                    firstChar = str.charAt(0);
                                }
                                addLetterClass(firstChar, $this, true);
                                return;
                            }
                        }
                        // Find the first letter in the LI, including prefixes
                        firstChar = str.charAt(0);

                        // Doesn't send true to function, which will ++ the All count on prefixed items
                        addLetterClass(firstChar, $this);
                    }
                });
            }

            // Add the appropriate letter class to the current element
            function addLetterClass(firstChar, $el, isPrefix) {

                if ( /\W/.test(firstChar) ) {

                    firstChar = '-'; // not A-Z, a-z or 0-9, so considered "other"

                }

                if ( !isNaN(firstChar) ) {

                    firstChar = '_'; // use '_' if the first char is a number

                }

                $el.addClass('ln-' + firstChar);

                if ( counts[firstChar] === undefined ) {

                    counts[firstChar] = 0;

                }

                counts[firstChar]++;

                if (!isPrefix) {

                    allCount++;

                }

            }

            function addDisabledClass() {

                for ( var i = 0; i < letters.length; i++ ) {

                    if ( counts[letters[i]] === undefined ) {

                        $('.' + letters[i], $letters).addClass('ln-disabled');

                    }
                }
            }

            function addNoMatchLI() {
                $list.append('<li class="ln-no-match listNavHide">' + opts.noMatchText + '</li>');
            }

            function getLetterCount(el) {
                if ($(el).hasClass('all')) {
                    if (opts.dontCount) {
                        fullCount = allCount - $list.find(opts.dontCount).length;
                    } else {
                        fullCount = allCount;
                    }
                    return fullCount;
                } else {
                    el = '.ln-' + $(el).attr('class').split(' ')[0];

                    if (opts.dontCount) {
                        count = $list.find(el).not(opts.dontCount).length;
                    } else {
                        count = $list.find(el).length;
                    }
                    return (count !== undefined) ? count : 0; // some letters may not have a count in the hash
                }
            }

            function bindHandlers() {

                if (opts.showCounts) {
                    // sets the top position of the count div in case something above it on the page has resized
                    $wrapper.mouseover(function () {
                        setLetterCountTop();
                    });

                    //shows the count above the letter
                    //
                    $('.ln-letters a', $wrapper).mouseover(function () {
                        left = $(this).position().left;
                        width = ($(this).outerWidth()) + 'px';
                        count = getLetterCount(this);

                        $letterCount.css({
                            left: left,
                            width: width
                        }).text(count).addClass("letterCountShow").removeClass("listNavHide"); // set left position and width of letter count, set count text and show it
                    }).mouseout(function () { // mouseout for each letter: hide the count
                        $letterCount.addClass("listNavHide").removeClass("letterCountShow");
                    });
                }

                // click handler for letters: shows/hides relevant LI's
                //
                $('a', $letters).bind(clickEventType, function (e) {
                    e.preventDefault();
                    var $this = $(this),
                        letter = $this.attr('class').split(' ')[0],
                        noMatches = $list.children('.ln-no-match');

                    if ( prevLetter !== letter ) {
                    // Only to run this once for each click, won't double up if they clicked the same letter
                    // Won't hinder firstRun

                        $('a.ln-selected', $letters).removeClass('ln-selected');

                        if ( letter === 'all' ) {
                            // If ALL button is clicked:

                            $list.children().addClass("listNavShow").removeClass("listNavHide"); // Show ALL

                            noMatches.addClass("listNavHide").removeClass("listNavShow"); // Hide the list item for no matches

                            isAll = true; // set this to quickly check later

                        } else {
                            // If you didn't click ALL

                            if ( isAll ) {
                                // since you clicked ALL last time:

                                $list.children().addClass("listNavHide").removeClass("listNavShow");

                                isAll = false;

                            } else if (prevLetter !== '') {

                                $list.children('.ln-' + prevLetter).addClass("listNavHide").removeClass("listNavShow");

                            }

                            var count = getLetterCount(this);

                            if (count > 0) {
                                $list.children('.ln-' + letter).addClass("listNavShow").removeClass("listNavHide");
                                noMatches.addClass("listNavHide").removeClass("listNavShow"); // in case it's showing
                            } else {
                                noMatches.addClass("listNavShow").removeClass("listNavHide");
                            }


                        }

                        prevLetter = letter;

                        if ($.cookie && (opts.cookieName !== null)) {
                            $.cookie(opts.cookieName, letter, {
                                expires: 999
                            });
                        }

                        $this.addClass('ln-selected');

                        $this.blur();

                        if (!firstClick && (opts.onClick !== null)) {

                            opts.onClick(letter);

                        } else {

                            firstClick = false; //return false;

                        }

                    } // end if prevLetter !== letter

                }); // end click()

            } // end BindHandlers()

            // creates the HTML for the letter links
            //
            function createLettersHtml() {
                var html = [];
                for (var i = 1; i < letters.length; i++) {
                    if (html.length === 0) {
                        html.push('<a class="all" href="#">'+ opts.allText + '</a><a class="_" href="#">0-9</a>');
                    }
                    html.push('<a class="' + letters[i] + '" href="#">' + ((letters[i] === '-') ? '...' : letters[i].toUpperCase()) + '</a>');
                }
                return '<div class="ln-letters">' + html.join('') + '</div>' + ((opts.showCounts) ? '<div class="ln-letter-count listNavHide">0</div>' : '');
                // Remove inline styles, replace with css class
                // Element will be repositioned when made visible
            }
            init();
        });
    };

    $.fn.listnav.defaults = {
        initLetter: '',
        includeAll: true,
        allText: 'All',
        includeOther: false,
        includeNums: true,
        flagDisabled: true,
        removeDisabled: false,
        noMatchText: 'No matching entries',
        showCounts: true,
        dontCount: '',
        cookieName: null,
        onClick: null,
        prefixes: [],
        filterSelector: ''
    };
})(jQuery);
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

/**
 * Modifications:
 * added public method :
 * 		el.getPagerQty
 */

;(function($){

	var plugin = {};

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,
		slideZIndex: 50,
		wrapperClass: 'bx-wrapper',

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,
		autoSlideForOnePage: false,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {},
		onSliderResize: function() {}
	}

	$.fn.bxSlider = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('img, iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img, iframe').each(function(){
				$(this).one('load', function() {
				  if(++count == total) callback();
				}).each(function() {
				  if(this.complete) $(this).load();
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true and has more than 1 page, start the show
			if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}

			if(slider.viewport.css('box-sizing') == 'border-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
							parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
			}else if(slider.viewport.css('box-sizing') == 'padding-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
			}

			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width() + slider.settings.slideMargin;
					slidesShowing = Math.floor((slider.viewport.width() +
						slider.settings.slideMargin) / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = Math.ceil(slider.children.length / getMoveBy());
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}

		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.on('click', 'a', clickPagerBind);
		}

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
			slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();

			var $module = $(this).closest('aside').data('metrics-module');
			// next button metrics
			wmdPageLink($module + '_' + 'next');

			e.preventDefault();
		}

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();

			var $module = $(this).closest('aside').data('metrics-module');
			// previous button metrics
			wmdPageLink($module + '_' + 'prev');

			e.preventDefault();
		}

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			if(pagerLink.attr('data-slide-index') !== undefined){
				var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
				// if clicked pager link is not active, continue with the goToSlide call
				if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
				e.preventDefault();
			}
		}

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if(position){
					if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
					else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
				}
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}

		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}

		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// don't do anything if slider isn't initialized.
			if(!slider.initialized) return;
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
				// Call user resize handler
				slider.settings.onSliderResize.call(el, slider.active.index);
			}
		}

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', slider.settings.slideZIndex);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}
		/**
		 * Performs slide transition to the specified slide with 1 speed
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlideInstant = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
				// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
				// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', slider.settings.slideZIndex);
					updateAfterSlideTransition();
				});
				// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
					// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
					// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ('undefined' !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', 1);
				}
			}
		}
		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}

		/**
		 * Returns current slide element
		 */
		el.getCurrentSlideElement = function(){
			return slider.children.eq(slider.active.index);
		}

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl && slider.settings.controls) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}
		/**
		 * Return the number of total slide pages
		 */
		el.getPagerQty = function(){
			return getPagerQty();
		}



		init();

		// returns the current jQuery object
		return this;
	}

})(jQuery);
