/*
 * jQuery v3.1 included
 * underscore v1.8.3 included
 */

var WeeblySettings = {
	categoryNavIcons: {
		203453908: 'communitynavgettingstarted',
		203663687: 'communitynavcommerce',
		200475937: 'communitynavsiteeditor',
		203706468: 'communitypromote',
		203706488: 'communitynavdomains',
		203706508: 'bgtypevideo',
		203709387: 'communitymobile',
		203706548: 'navgroups'
	},
	requests: {
    sections: '/sections.json?include=categories&per_page=100',
		articles: '/articles.json?per_page=100'
	}
};

var WeeblyStorage = {
	init: function(){
    this.checkCacheTimeout();
		WeeblyUtils.setLocale();

    if (!this.get('hc:articles:' + this.locale())) {
        this.fetchArticles('/api/v2/help_center/' + this.locale() + WeeblySettings.requests.articles);
    }
    
		if (!this.get('hc:sections:' + this.locale())) {
      this.fetch("/api/v2/help_center/" + this.locale() + WeeblySettings.requests.sections, this.cacheSections.bind(this));
    }
    
    if (this.get('hc:nextArticleFetch')) {
      this.fetchArticles(this.get('hc:nextArticleFetch'));
    }
	},
  
  fetchArticles: function(url){
    console.log('fetch articles: ' + url);
    if (!this.get('hc:articles:' + this.locale()) && url) this.fetch(url, this.cacheArticles.bind(this));
  },

	cacheSections: function(data) {
		this.set('hc:sections:' + this.locale(), data.sections);
		this.set('hc:categories:' + this.locale(), data.categories);
    
    // After data is set, fetch articles
    this.fetchArticles();
	},

	cacheArticles: function(data) {
    var nextArticleFetch = data.next_page ? data.next_page + '&per_page=100' : null;
		this.append('hc:articles:' + this.locale(), WeeblyData.addCategoryToArticles(data.articles));
    
    this.set('hc:nextArticleFetch', nextArticleFetch);
    
		// If there's more data we need to fetch again
		if (nextArticleFetch) {			
			this.fetch(nextArticleFetch, this.cacheArticles.bind(this));
		}
	},

	set: function(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},

	append: function(key, value) {
		var partialData = this.get(key) || [{}];
		var combinedData = _.union(partialData, value);
		this.set(key, combinedData);
	},

	get: function(key) {
		var value = localStorage.getItem(key);
		return ( value && JSON.parse( value ) ) || null;
	},

	fetch: function(url, callback) {
		$.get(url).done(function(data) { if (data.count) callback(data); });
	},

	locale: function(){
		return localStorage.getItem('hc:locale');
	},
  
  whenLoaded: function(callback) {
  	var _this = this;
    var interval = setInterval(function(){
      var articles = _this.get('hc:articles:' + _this.locale()) || [];
      if (articles.length) {
       	callback();
        clearInterval(interval);
      }
    }, 1000);
  },
  
  checkCacheTimeout: function(){
  	var cacheTimeout = this.get('cacheTimeout') || null;
    var now = new Date().getTime();
    var futureTimeout = now + (24*60*60*1000); // 24 hours from now
    
    if (!cacheTimeout) {
      this.set('cacheTimeout', futureTimeout);
      return;
    }
    
    if (cacheTimeout && (cacheTimeout < now)){
      this.clearCache(this.locale());
      this.set('cacheTimeout', futureTimeout);
      return;
    }
    
  },

	clearCache: function(locale) {
    localStorage.removeItem('hc:locale');
		localStorage.removeItem('hc:sections:' + locale);
		localStorage.removeItem('hc:categories:' + locale);
		localStorage.removeItem('hc:articles:' + locale);
    localStorage.removeItem('hc:nextArticleFetch');
	}
};

var WeeblyUtils = {
	setLocale: function() {
    var	locale = $('html').attr('lang').toLowerCase();
    var currentLocale = localStorage.getItem('hc:locale');
    
    if (currentLocale && currentLocale !== locale) {
      WeeblyStorage.clearCache(currentLocale);
    }
    
		if (!localStorage.getItem('hc:locale')) {	
			localStorage.setItem('hc:locale', locale);
		}
	},

	parseUrl: function() {
		var url = window.location.pathname;
		var urlSplit = url.split("/");
		return urlSplit;
	},

	getPage: function() {
		var urlArray = this.parseUrl();
		var hcIndex = urlArray.indexOf("hc");
		var page = urlArray[hcIndex + 2] || "home";

		return page;
	},

	getPageId: function() {
		var urlArray = this.parseUrl();
		var id = urlArray[urlArray.length - 1];
		return parseInt(id, 10) || null;
	}
};


var WeeblyController = {
	load: function(page) {
		if (typeof page !== undefined && this.hasOwnProperty(page)) {
			 this[page]();
		}
	}
};

WeeblyController.home = function(){
	var categories = WeeblyStorage.get('hc:categories:' + WeeblyStorage.locale());
	var labelFilter = 'hc:featured:home';
	var filteredArticles = WeeblyData.filterArticlesByLabel(labelFilter);
	var homeCollection;

	// Convert array to indexed object (easier to work with later)
	categories = _.indexBy(categories, 'id');

	// Loop through each category
	homeCollection = _.mapObject(categories, function(cat){
		var articleLimit = 3;

		// Set filtered articles to each category
		return _.filter(filteredArticles, function(article){
			// Limit articles per category
			if (articleLimit === 0) {
				return false;
			}

			if (article.category_id === cat.id){
				articleLimit--;
				return article;
			}
		});
	});
  
	// Give homepage masthead a custom class
  $('.hc-masthead').addClass('hc-masthead--home');

	// Modify the existing homepage cards with the filtered articles
	WeeblyView.modifyHomepageCards(homeCollection);
	WeeblyView.footerFeaturedArticles();
  WeeblyView.displayFooterNavigation();
};

WeeblyController.categories = function(){
  
  var catId = $('.js-sidenav').data('category-id');
	WeeblyView.sideNav(catId);
  
  $('.js-sidenav > .nav__link').addClass('is-active');
  WeeblyView.footerFeaturedArticles();  
  WeeblyView.displayFooterNavigation();
};

WeeblyController.articles = function(){
  
  var articles = WeeblyStorage.get('hc:articles:' + WeeblyStorage.locale());
  var articleId = $('.js-sidenav').data('active-item');
  var thisArticle = _.findWhere(articles, {id: articleId});
  
  
  // Custom code for Weebly 4 article
  if (articleId == "227905047") {
      $('.hc-container').css('max-width', 1200);
      $('.hc-layout__sidebar').hide();
  } else {
  	WeeblyView.sideNav(thisArticle.category_id);
  }
  
  WeeblyView.footerFeaturedArticles();
  WeeblyView.displayFooterNavigation();
  
  

};

var WeeblyView = {};

// Loop through each category card and add featured articles
// Collection = filtered articles grouped by category id
WeeblyView.modifyHomepageCards = function(collection) {
  
	$('.js-home-grid .hc-card').each(function(card){
		var $card = $(this);
		var cardId = $card.data('category-id');
		var el = $card.find('.hc-card__nav');
    
    el.empty();

		_.each(collection[cardId], function(article){
			el.append($('<a class="hc-card__nav-item" data-icon-after="rightarrowsmall"></a>').attr('href', article.html_url).text(article.title));
		});
	});
};

// This is the tabs that's at the bottom of every page
// Going to filter articles
WeeblyView.footerFeaturedArticles = function() {
	this.displayPopularArticles();
	this.displayRecentArticles();
};

WeeblyView.displayPopularArticles = function() {
	var el = $('#popular-articles nav');
	var articles = WeeblyData.getPopularArticles();
  
  el.empty();

	_.each(articles, function(article){
		el.append($('<a class="hc-tab-content__list-item-link" data-icon-after="rightarrowsmall"></a>').attr('href', article.html_url).text(article.title));
	});
};

WeeblyView.displayRecentArticles = function() {
	var el = $('#recent-articles nav');
	var recentArticles = WeeblyStorage.get('hc:articles:' + WeeblyStorage.locale());

	// Order articles by updated date
  recentArticles = _.sortBy(recentArticles, 'updated_at');
  recentArticles = recentArticles.reverse();
  recentArticles.shift(); // Because of article json combine there's an empty element
  
	// Limit article output to ten
	recentArticles = _.first(recentArticles, 10);

	_.each(recentArticles, function(article){
		el.append($('<a class="hc-tab-content__list-item-link" data-icon-after="rightarrowsmall"></a>').attr('href', article.html_url).text(article.title));
	});
};

WeeblyView.displayFooterNavigation = function(){
	var helpCategoryNav = $('.js-footer-categories');
  var categories = WeeblyStorage.get('hc:categories:' + WeeblyStorage.locale());
  var itemLink = $('<a class="footer__nav-link"></a>');
  
  // Sort by position
  categories = _.sortBy(categories, 'position');

  _.each(categories, function(cat){
  	var catLink = itemLink.clone();
    
	  catLink
      .attr({
      	'href': cat.html_url
    	})
      .text(cat.name)

    // Insert category link / title
    helpCategoryNav.append(catLink);
  });
  
  // Show webinar articles (hard coded ID for now)
  var webinarNav = $('.js-footer-webinars');
  var webinarArticles = WeeblyData.getArticlesByCategory(203706508);
  
  _.each(webinarArticles, function(article){
  	var articleLink = itemLink.clone();
    
	  articleLink
      .attr({
      	'href': article.html_url
    	})
      .text(article.name);

    // Insert category link / title
    webinarNav.append(articleLink);
  });
  
};

WeeblyView.sideNav = function(catId) {
 	var el = $('.js-sidenav');
	var categories = WeeblyStorage.get('hc:categories:' + WeeblyStorage.locale());
	var sections = WeeblyStorage.get('hc:sections:' + WeeblyStorage.locale());
	var articles = WeeblyStorage.get('hc:articles:' + WeeblyStorage.locale());
	var thisCategory = _.find(categories, function(cat){ return cat.id == catId; });
	var catSections = _.where(sections, { category_id: catId });
	var itemLink = $('<a class="nav__link"></a>');
	var subNav = $('<nav class="nav nav--subnav is-open"></nav');
	var catLink = itemLink.clone();
  var activeLink = el.data('active-item');

	catLink
		.attr({
			'href': thisCategory.html_url,
			'data-page-id': thisCategory.id,
			'data-icon-before': WeeblySettings.categoryNavIcons[catId]
		})
		.text(thisCategory.name)

	// Insert category link / title
	el.empty().append(catLink);

	// Loop through sections
	if (catSections) {

		_.each(catSections, function(section){
			// Insert section title
			// Link section to first article in section
			var sectionArticles = _.where(articles, { section_id: section.id });
			var firstArticle = sectionArticles[0];
			var sectionLink = itemLink.clone();
			var articleNav = $('<nav class="nav nav--subnav is-hidden"></nav');

      
     	if (firstArticle) {
        sectionLink
          .attr({'href': firstArticle.html_url})
          .text(section.name);
        subNav.append(sectionLink);

        // Loop through articles in each section
        // Insert article link / title
        _.each(sectionArticles, function(article){
          var articleLink = itemLink.clone();
          articleLink
            .attr({
              'href': article.html_url,
              'data-page-id': article.id
            })
            .text(article.name);

          if (article.id === activeLink) {
            articleLink.addClass('is-active');
            articleNav.removeClass('is-hidden');
          }

          articleNav.append(articleLink);
        });

        subNav.append(articleNav);
      }

		});
		
    
		el.append(subNav);
	}

};

var WeeblyData = {};

// Modify articles data to include category id
WeeblyData.addCategoryToArticles = function(articles) {
  var sections = WeeblyStorage.get('hc:sections:' + WeeblyStorage.locale()) || null;
  
  if (!sections) {
    setTimeout(this.addCategoryToArticles(articles), 500);
  }
  
	_.mapObject(articles, function(article){
		article.category_id = WeeblyData.getCategoryFromSection(article.section_id);
	});
	return articles;
};

// Get the category id for provided section id
WeeblyData.getCategoryFromSection = function(sectionID) {
	var sections = WeeblyStorage.get('hc:sections:' + WeeblyStorage.locale());
	var mySection = _.where(sections, {'id': sectionID});
	return mySection[0].category_id;
};

// Filter articles provided label name
WeeblyData.filterArticlesByLabel = function(label) {
	var articles = WeeblyStorage.get('hc:articles:' + WeeblyStorage.locale());
	var filteredArticles = _.filter(articles, function(el){
		if (_.indexOf(el.label_names, label) > -1) {
			return el;
		}
	});

	return filteredArticles;
}

// Return section name provided section id
WeeblyData.getSectionName = function(id) {
	var sections = WeeblyStorage.get('hc:sections:' + WeeblyStorage.locale());
	var mySection = _.find(sections, function(el){
		return el.id === id;
	});

	return mySection.name;
}

// Sort articles by votes and return top 10
WeeblyData.getPopularArticles = function(){
	var articles = WeeblyStorage.get('hc:articles:' + WeeblyStorage.locale());
	var sortedArticles = _.sortBy(articles, 'vote_sum');
	return _.first(sortedArticles, 10);
}

// Return articles with specific categoryId
WeeblyData.getArticlesByCategory = function(catId) {
  var articles = WeeblyStorage.get('hc:articles:' + WeeblyStorage.locale());
  return _.where(articles, {'category_id': catId});
};


// This gets called immediately to setup the API fetch
WeeblyStorage.init();


$(document).ready(function() {
  
    // Redirect old articles to new articles
  var oldIds = ['211013717', '201193346', '201118898', '201193236', '201378113', '201118838', '216231678', '201165567', '216772767', '201897498', '217786518', '218621218', '217785598', '219336827', '201165617', '202399918', '202589008', '224984248', '224814707', '201802306', '217801018'];
  var newIds = ['227556587', '227184547', '227156528', '227050287', '227052047', '227067887', '227252188', '227186428', '227186588', '227111587', '227262168', '227130587', '227116327', '227260368', '226643147', '227306128', '227173387', '226811488', '226593727', '227067027', '227064787'];

  for (var i = 0; i < oldIds.length; i++){
    if (window.location.href.indexOf(oldIds[i]) > -1) {
      window.location.href = 'https://hc.weebly.com/hc/en-us/articles/' + newIds[i]; 
    }
  }

  
  	// Get the current page and setup page load after we've confirmed original fetch is done
  	var currentPage = WeeblyUtils.getPage();
  	var callback = function(){WeeblyController.load(currentPage)};
  	WeeblyStorage.whenLoaded(callback);

	var showLiveChat = showLiveChat || null;

	if (showLiveChat && $('.hc-btn--chat').length > 0) {
		$('.hc-btn--chat').removeClass('is-hidden');
	}

	// social share popups
	$(".share a").click(function(e) {
		e.preventDefault();
		window.open(this.href, "", "height = 500, width = 500");
	});

	// Capture search submit event
	$('form[role="search"]').on('submit', function(e) {
		var query = $(this).find('input[type="search"]').val().toLowerCase();
		ga('send', 'event', 'Search', 'Submit', query);
	});

	// Social sharing tracking
	$('.share a').on('click', function(e) {
		var path = window.location.pathname;
		ga('send', 'event', 'Social Share', 'Share', path);
	});

	// Capture submit request event
	$('a.submit-a-request, .article-more-questions a').on('click', function(e) {
		var path = window.location.pathname;
		ga('send', 'event', 'Submit Request', 'Submit Request From', path);
	});


	// toggle the share dropdown in communities
	$(".share-label").on("click", function(e) {
		e.stopPropagation();
		var isSelected = this.getAttribute("aria-selected") == "true";
		this.setAttribute("aria-selected", !isSelected);
		$(".share-label").not(this).attr("aria-selected", "false");
	});

	$(document).on("click", function() {
		$(".share-label").attr("aria-selected", "false");
	});

	// show form controls when the textarea receives focus or backbutton is used and value exists
	var $answerbodyTextarea = $(".answer-body textarea"),
	$answerFormControls = $(".answer-form-controls"),
	$commentContainerTextarea = $(".comment-container textarea"),
	$commentContainerFormControls = $(".comment-form-controls");

	$answerbodyTextarea.one("focus", function() {
		$answerFormControls.show();
	});

	$commentContainerTextarea.one("focus", function() {
		$commentContainerFormControls.show();
	});

	if ($commentContainerTextarea.val() !== "") {
		$commentContainerFormControls.show();
	}

	if ($answerbodyTextarea.val() !== "") {
		$answerFormControls.show();
	}
  
  // Table of contents for Articles
  if($('.js-article-body span.wysiwyg-font-size-x-large').length > 2){
  // create an array to put menu text in
  var menuText = [];
 
  // Find all the headers that match the formatting we want, as a list
  // anchor-ify them
  $('.js-article-body span.wysiwyg-font-size-x-large').replaceWith(function() {
      // grab the heading text as a var
      var headingText = $.trim($(this).text());
      // add the text to the menu
      menuText.push(headingText);
      return '<a name="' + headingText + '" class="wysiwyg-font-size-x-large hc-link--grey">' + headingText + '</a>';
  });
 
  // turn that text into a menu
  $(menuText).each(function(index){
    $('.js-article-toc tbody').append('<tr><td><a href="#' + menuText[index] + '" class="hc-link--grey">' + menuText[index] + '</a></td></tr>');
  });
    $('.hc-layout__sidebar-secondary').removeClass('is-hidden');
}

});

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
