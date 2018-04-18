/*global document,$,$$,Class,window,mMinPriceRange,mMaxPriceRange,Element,Event,js_fn_PRICE_RANGE_ERROR_INVALID_NUMBER,js_fn_PRICE_RANGE_ERROR_INVALID_RANGE,irwstatSetTrailingTag,mQuery,js_fn_FILTER_MESSAGES,*/
function initUserFeedback() {
	var b = document.getElementById('sendbutton');
	if (b) {
		b.style.display = 'block';
	}
	if ($('feedback')) {
		$('feedExp').hide();
		$('feedback_result').hide();
		$('search_ack').checked = false;
	}
}

var PriceValidationClass = Class.create({
	initialize : function () {
		var vSpanShowAllOriginal, vPriceFilterButton, vLinkShowAllOriginal;

		// Determine if the price filter has been used already or not
		this.isFirst = window.location.toString().indexOf("min_price") !== -1;

		vSpanShowAllOriginal = $$('div.serpFilterFormLnk span.serpFilterLnkActive')[0];
		vLinkShowAllOriginal = $$('div.serpFilterFormLnk a.serpFilterFormLnk')[0];

		if (vSpanShowAllOriginal) {
			this.spanShowAllOriginal = vSpanShowAllOriginal.clone();
		}

		if ($('minPrice')) {
			this.minPriceOriginal = $('minPrice').clone();
		}
		if ($('maxPrice')) {
			this.maxPriceOriginal = $('maxPrice').clone();
		}

		vPriceFilterButton = $('jsButton_narrowDownSearch_01');
		if (vPriceFilterButton) {
			vPriceFilterButton.observe("click", function () {
				this.validatePriceRange();
			}.bind(this));
		}

		if (vLinkShowAllOriginal) {
			this.viewAllHref = vLinkShowAllOriginal.href;
		}
	},
	setPriceRangeError: function (pMessage) {
		var vMinPrice, vMaxPrice, vMinMaxPriceError;

		vMinPrice = $('minPrice');
		vMaxPrice = $('maxPrice');
		vMinMaxPriceError = $('minMaxPriceError');

		if (vMinPrice) {
			vMinPrice.style.backgroundColor = '#FF9797';
		}
		if (vMaxPrice) {
			vMaxPrice.style.backgroundColor = '#FF9797';
		}
		if (vMinMaxPriceError) {
			vMinMaxPriceError.show();
			if (vMinMaxPriceError.textContent) {
				vMinMaxPriceError.textContent = pMessage;
			} else {
				vMinMaxPriceError.innerHTML = pMessage;
			}
		}
	},
	clearError: function () {
		var vMinPrice, vMaxPrice, vMinMaxPriceError, vViewAllLink;

		vMinPrice = $('minPrice');
		vMaxPrice = $('maxPrice');
		vMinMaxPriceError = $('minMaxPriceError');
		vViewAllLink = $$('div.serpFilterFormLnk a.serpFilterFormLnk')[0];

		vMinPrice.replace(this.minPriceOriginal.clone());
		vMinPrice.value = mMinPriceRange;

		vMaxPrice.replace(this.maxPriceOriginal.clone());
		vMaxPrice.value = mMaxPriceRange;

		vMinMaxPriceError.hide();

		if (vViewAllLink && this.spanShowAllOriginal) {
			if (vViewAllLink.textContent) {
				this.spanShowAllOriginal.textContent = vViewAllLink.textContent;
			} else {
				this.spanShowAllOriginal.innerHTML = vViewAllLink.innerHTML;
			}
			vViewAllLink.replace(this.spanShowAllOriginal);
		}
		vViewAllLink.stopObserving("click");
	},
	validatePriceRange: function () {
		var vMinPrice, vMaxPrice, vViewAllContainer, vViewAllSpan, vViewAllLink, vLinkHref;
		vMinPrice = $('minPrice').value;
		vMaxPrice = $('maxPrice').value;

		vViewAllSpan = $$('div.serpFilterFormLnk span.serpFilterLnkActive')[0];
		vViewAllLink = $$('div.serpFilterFormLnk a.serpFilterFormLnk')[0];

		if (isNaN(vMinPrice) || isNaN(vMaxPrice)) {
			this.setPriceRangeError(js_fn_PRICE_RANGE_ERROR_INVALID_NUMBER);
			return;

			// mMinPriceRange and mMaxPriceRange are set inline in IrwSearchResult.jsp
		} else if ((parseFloat(vMinPrice) > parseFloat(vMaxPrice)) || (parseFloat(vMaxPrice) < parseFloat(vMinPrice)) ||
				(parseFloat(vMaxPrice) < parseFloat(mMinPriceRange)) || (parseFloat(vMinPrice) > parseFloat(mMaxPriceRange))) {

			this.setPriceRangeError(js_fn_PRICE_RANGE_ERROR_INVALID_RANGE);
			if (vViewAllSpan) {
				vViewAllContainer = vViewAllSpan.up();
				vViewAllLink = new Element("a", {
					"class": "serpFilterFormLnk"
				});
				vViewAllLink.update(vViewAllSpan.textContent ? vViewAllSpan.textContent : vViewAllSpan.innerHTML);
				vViewAllSpan.remove();
				vViewAllContainer.insert(vViewAllLink);
			}

			if (vViewAllLink) {
				vLinkHref = this.viewAllHref ? this.viewAllHref : "";
				vViewAllLink.writeAttribute({
					href: vLinkHref
				});
				vViewAllLink.observe("click", function (event) {
					this.clearError();
					Event.stop(event);
				}.bind(this));
			}
			return;
		}

		// Removing price details, CQ #IKEA00636144.
		irwstatSetTrailingTag("IRWStats.filter", "Price");

		document.minMaxPrice.submit();
	}
});

function setRowStatInProductList() {
	var vRowList, vRowNumber;
	vRowList = $$("table.productsContainer tbody tr");
	if (vRowList) {
		vRowNumber = 0;
		vRowList.each(function (pTr) {
			if (!pTr.hasClassName("compareRow")) {
				var vTd, vFirstDiv, vTdList, vLinkTag, i, vFirstElement;
				vTd = pTr.down();
				if (!vTd.hasClassName("productConatinerNoBorder")) {
					vFirstDiv = vTd.down();
					if (vFirstDiv.hasClassName("productContainer")) {
						vRowNumber += 1;
						vTdList = pTr.childElements();
						for (i = 0; i < vTdList.size(); i += 1) {
							if (vTdList[i] && vTdList[i].down()) {
								vFirstElement = vTdList[i].down().down();
								if (vFirstElement && vFirstElement.tagName.toLowerCase() === "img") {
									vLinkTag = vFirstElement.next().down();
								} else {
									vLinkTag = vFirstElement.down();
								}
							}
							if (vLinkTag) {
								vLinkTag.writeAttribute({
									onClick: "irwstatSetTrailingTag('IRWStats.pageArea', 'search>search_result>results_area'); " + "irwstatSetTrailingTag('IRWStats.detailedPageArea', 'search>search_result>results_area>results_row_" + vRowNumber + "'); " + vLinkTag.readAttribute("onClick")
								});
							}
						}
					}
				}
			}
		});
	}
}

var SearchFieldValueClass = Class.create({
	initialize: function () {
		// mQuery is set inline in IrwSearchResult.jsp
		if (mQuery) {
			this.execute();
		}
	},
	execute: function () {
		if (document.getElementById("search")) {
			if (mQuery !== null) {
				document.getElementById("search").value = mQuery;
			} else {
				document.getElementById("search").value = "";
			}
		}
	}
});

var FilterListClass = Class.create({
	imgDownSrc : "/ms/img/down.png",
	imgUpSrc : "/ms/img/up.png",
	visibleElements : 4,
	initialize : function () {

		var vListItems = $$(".serpFilterList ul");

		vListItems.each(function (pListItem) {
			if (pListItem.childElements().size() > this.visibleElements && pListItem.up().id !== "filter_color" && pListItem.id !== "subCatSerp") {
				pListItem.insert("<li class=\"expander-link-container\"><a href=\"javascript:void(0);\" class=\"expander-link\"></a></li>");
				var vExpanderLink = pListItem.childElements()[pListItem.childElements().size() - 1];
				vExpanderLink.observe("click", function () {
					this.toggleList(pListItem, vExpanderLink, true);
				}.bind(this));
				this.toggleList(pListItem, vExpanderLink);
			}
		}.bind(this));
	},
	toggleList : function (pListItem, pLink, forced) {
	
		var selectedIndex = 0, i, vLi, count, linkText, vId, vImgSrc, vImgElements, vHasChapters = false;
		
		for (i = 0; i < pListItem.childElements().size(); i += 1) {
			vLi = pListItem.childElements()[i];
			
			// Select always returns an array so we only have to check length to decide if there are chapters.
			if (vLi.select("#subCatSerp").length > 0) {
				vHasChapters = true;
			}			
			if (!vLi.hasClassName("expander-link-container") && (vLi.hasClassName("serpFilterListActive") || vHasChapters)) {
				selectedIndex = i;
				break;
			}
		} 

		count = 0;
		pListItem.childElements().each(function (pLi) {
		
			if (!pLi.hasClassName("expander-link-container")) {
				count += 1;
				if (!forced && selectedIndex >= this.visibleElements) {
					pLi.show();
					this.expanded = true;
				} else {
					if (count > this.visibleElements) {
						pLi.toggle();
						if (pLi.visible()) {
							this.expanded = true;
						} else {
							this.expanded = false;
						}
					}
				}
			}
		}.bind(this));
		
		vId = pListItem.up().id;
		vImgSrc = "";
		if (this.expanded) {
			if (vId) {
				linkText = js_fn_FILTER_MESSAGES[vId].less;
			} else {
				linkText = js_fn_FILTER_MESSAGES['default'].less;
			}
			vImgSrc = this.imgUpSrc;
		} else {
			if (vId) {
				linkText = js_fn_FILTER_MESSAGES[vId].more;
			} else {
				linkText = js_fn_FILTER_MESSAGES['default'].more;
			}
			vImgSrc = this.imgDownSrc;
		}

		if (pLink.down().textContent) {
			pLink.down().textContent = linkText;

		} else {
			pLink.down().innerHTML = linkText;
		}
		vImgElements = pLink.select('img');
		if (vImgElements.size() > 0) {
			vImgElements[0].src = vImgSrc;
		} else {
			pLink.insert('<img src="' + vImgSrc + '" class="serpArrowImg" />');
		}
	}
});

var LatestFilterClass = Class.create({
	LATEST_FILTER: "latestFilter",
	initialize: function () {
		// mNoHitsDueToFilter is set inline in IrwSearchResult.jsp
		if (mNoHitsDueToFilter) {
			this.undoLatestFilter();
		} else {
			this.setLatestFilter();
		}

	},
	undoLatestFilter: function () {
		if ($('undoLatestFilter') && getCookie(this.LATEST_FILTER)) {
			$('undoLatestFilter').setAttribute('href', getCookie(this.LATEST_FILTER));
		}
	},
	setLatestFilter: function () {
		document.cookie = this.LATEST_FILTER + "=" + escape(location.href) + ";path=/";
	}
});

document.observe('dom:loaded', function () {
	var searchFieldValue = new SearchFieldValueClass(),
		filterList = new FilterListClass(),
		priceValidator = new PriceValidationClass(),
		latestFilter = new LatestFilterClass();
	initUserFeedback();
	setRowStatInProductList();
	Event.observe(
		window,
		'unload', 
		function () {
			searchFieldValue = null;
			filterList = null;
			latestFilter = null;
		}
	);
});