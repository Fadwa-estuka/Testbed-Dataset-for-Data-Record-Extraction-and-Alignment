var loadMoreSearchResults = (function loadMoreResults() {

    var blob;
    var sortBy;
    var dateRange;
    var pageNumber;
    var columnCount;
    var numberOfResultsToShow;
    var resultsRealNumber;
    var resultsEstimatedNumber;
    var noMoreResultsStr;
    var resultsUrl;
    var $results;
    var $el = null;
    var $searchResultMoreText = $('.search-result-more-txt');

    function init() {
        getResults();
        getResultsData();
        events();
        initLoadMore();
    }

    function getResults() {
        var $pictureResults     = $('#picture-results');
        var $videoResults       = $('#video-results');
        var $videoResultsModule = $('#video-results-module');

        // determain the type of results
        if ($pictureResults.length) {

            $results = $pictureResults;

        } else if ($videoResults.length) {

            $results = $videoResults;

        } else if ($videoResultsModule.length) {

            $results = $videoResultsModule;

        }
    }

    function getResultsData() {
        // initialize the results data
        if ($results) {
            blob                   = $results.data('search-term');
            sortBy                 = $results.data('sort-by');
            dateRange              = $results.data('date-range');
            pageNumber             = $results.data('page-number');
            columnCount            = $results.data('column-count');
            numberOfResultsToShow  = $results.data('results-amount');
            resultsRealNumber      = $results.data('results-realnumber');
            resultsEstimatedNumber = $results.data('results-estimatednumber');
            noMoreResultsStr       = $results.data('no-more-results-str');
            resultsUrl             = $results.data('results-url');
        }
    }

    function events() {
        $('.picture-result:not(.slideshow-picture-result), .video-result, .video-results-module')
            .on('click', showSearchPreview);

        $('#picture-results + .search-result-more > .search-result-more-txt')
            .on('click', loadMorePictureResults);

        $('#video-results + .search-result-more > .search-result-more-txt')
            .on('click', loadMoreVideoResults);

        $('body')
            .on('keydown', nextPictureResult);

    }

    // search preview
    function showSearchPreview() {
        var resultHTML;
        var $result    = $el || $(this);
        var resultType = $result.attr('class');
        var config     = {
            url          : $result.data('image-url'),
            linkUrl      : $result.data('url'),
            caption      : $result.find('.caption').text(),
            title        : $result.data('title'),
            dataCaption  : $result.data('caption'),
            byline       : $result.data('byline'),
            date         : $result.data('date'),
            isPortrait   : $result.data('image-portrait'),
            portraitClass: this.isPortrait == true ? ' portrait-preview' : ''
        };

        removeActiveResult();

        // toggle active-result class
        $result.toggleClass('active-result');

        // if the result is a picture result and not a slideshow picture result
        if($result.hasClass('picture-result')) {

            // create resultHTML
            resultHTML = pictureSearchPreviewHTML(config, $result);

            // insert resultHTML after $result parent
            $(resultHTML).insertAfter($result.parent());

            $('html, body').animate({
                scrollTop: $('#preview-container').offset().top - 148
            }, 0);


        } else if ($result.hasClass('video-results-module')) {

            // create resultHTML
            resultHTML = videoSearchModulePreviewHTML(config);

            // insert resultHTML after $result parent
            $(resultHTML).insertAfter($result.parent());

        }

        // add click event listeners for preview container
        $('.preview-container-close')
            .on('click', removeActiveResult);

        $('.preview-container')
            .on('click', '.search-arrow-left, .search-arrow-right', nextPictureResult);

    }

    function removeActiveResult() {
        var $activeResult     = $('.active-result');
        var $previewContainer = $('.preview-container');

        $activeResult.toggleClass('active-result');


        $('.preview-container-close')
            .off('click', removeActiveResult);

        $previewContainer
            .off('click', '.search-arrow-left, .search-arrow-right', nextPictureResult);

        $previewContainer.remove();
    }

    function pictureSearchPreviewHTML(config, $result) {
        // is portrait picture give it a protrait-preview class
        var portraitClass  = config.isPortrait == true ? ' portrait-preview' : '';

        // is previous slideshow picture result in same row
        var prevPicture    = $result.prev()
                                .hasClass('slideshow-picture-result');

        // is last slideshow picture result in previous row
        var prevRowPicture = $($result.parent()
                                .prev()
                                .find('.picture-result')
                                .get(3))
                                .hasClass('slideshow-picture-result');

        // prev row exists
        var prevRowExists  = $result.parent()
                                .prev().length > 0;

        // prev picture is first picture in row
        var firstPicture   = $result.prev().length == 0;

        // next picture is last picture in row
        var lastPicture    = $result.next().length == 0;

        // determine if prev picture exists and is slideshow
        var hideArrow      = prevPicture ? true : (((!prevRowExists && firstPicture) ||
                                                    (firstPicture && prevRowPicture)) ? true : false);

        // last picture row
        var lastPictureRow = $result.parent().next().length == 0;

        // if first picture and previous row is a slideshow row, then hide left arrow
        var arrowLeft      = hideArrow ? '' : '<span class="search-arrow-left"></span>';

        // if last picture and next picture row does not exist, then hide right arrow
        var arrowRight     = lastPicture && lastPictureRow ? '' : '<span class="search-arrow-right"></span>';

        return [
            '<div id="preview-container" class="preview-container">',
                '<figure class="preview', config.portraitClass, '">',
                    '<img src="', config.url, '" alt="', config.caption, '">',
                    '<div class="preview-content">',
                    '<div class="preview-picture-full">', config.dataCaption, ' ', config.byline, ' ', config.date, '</div>',
                    '</div>',
                '</figure>',
                arrowLeft,
                arrowRight,
                '<div class="preview-container-close">X</div>',
            '</div>',
        ].join('');
    }

    function videoSearchModulePreviewHTML(config) {
        return [
            '<div class="preview-container">',
                '<figure class="preview">',
                    '<a href="', config.linkUrl, '" class="thumb"><img src="', config.url, '" alt="', config.dataCaption, '">',
                        '<div class="ico-video-lrg"></div>',
                    '</a>',
                    '<div class="preview-content">',
                    '<h3 class="preview-title"><a href="', config.linkUrl, '">', config.title, '</a></h3>',
                    '<p class="preview-caption">', config.dataCaption, '</p>',
                    '<h5 class="preview-date">', config.date, '</h5>',
                    '</div>',
                '</figure>',
                '<div class="preview-container-close">X</div>',
            '</div>',
        ].join('');
    }

    function loadMorePictureResults() {
        var url;

        pageNumber = pageNumber + 1;
        url = resultsUrl + '&pn=' + pageNumber + '&callback=addMorePictureResults';

        $('#picture-results + .search-result-more > .search-result-more-txt')
                .off('click', loadMorePictureResults);

        Reuters.utils.loadScript('sJSON', url);
    }

    function addMorePictureResults(searchResults) {
        var resultHTML;

        if (searchResults.pictures.length > 0) {

            $('.preview-container').append('<span class="search-arrow-right"></span>');

            resultHTML = pictureResultsHTML();

            $(resultHTML).appendTo($results);

            $('.picture-result:not(.slideshow-picture-result)')
                .on('click', showSearchPreview);

        }

        checkLoadMore();


    }

    function pictureResultsHTML() {
        var resultHTML;
        var results       = searchResults.pictures;
        var HTML          = ['<div class="picture-results-row group">'];
        var isPortraitPic = true;

        for (var i = 0, len = results.length; i < len; i++) {
            if (results[i].landscape) {
                isPortraitPic = false;
            }

            resultHTML = [
                '<figure class="picture-result" data-image-url="', results[i].viewUrl, '"',
                	'data-caption="', results[i].caption,'"',
                    'data-image-portrait="', isPortraitPic, '"',
                    'data-byline="', results[i].byline, '"',
                    'data-date="', results[i].date, '">',
                    '<div class="picture-result-image">',
                        '<img src="', results[i].thumbUrl,'" alt="Photo" border="0" />',
                    '</div>',
                    '<figcaption class="caption">', results[i].title, '</figcaption>',
                    '<span class="preview-container-arrow"></span>',
                '</figure>'
            ].join('');

            HTML.push(resultHTML);

            if ((i + 1) < numberOfResultsToShow &&
                (i + 1) % columnCount == 0) {
                HTML.push('</div><div class="picture-results-row group">');
            }

        }

        HTML.push('</div>');

        return HTML.join('');
    }

    function loadMoreVideoResults() {
        var url;

        pageNumber = pageNumber + 1;
        url = resultsUrl + '&pn=' + pageNumber + '&callback=addMoreVideoResults';

        Reuters.utils.loadScript('sJSON', url);
    }

    function addMoreVideoResults() {
        var resultHTML;

        if (searchResults.videos.length > 0) {

            resultHTML = videoResultsHTML();

            $(resultHTML).appendTo($results);

        }
        checkLoadMore();
    }

    function videoResultsHTML() {
        var resultHTML;
        var HTML          = [];
        var videoDateHTML = '';
        var results       = searchResults.videos;

        for (var i = 0, len = results.length; i < len; i++) {

            if (typeof results[i].videoDate != undefined &&
                results[i].videoDate != '') {
                videoDateHTML = '<time class="timestamp">' + results[i].videoDate + '</time> - ';
            }

            resultHTML = [
                '<figure class="video-result group">',
                    '<div class="thumb">',
                        '<a href="', results[i].videoUrl,'" class="thumb">',
                            '<img src="', results[i].imageUrl, '" alt="', results[i].title,'">',
                            '<div class="video-thumb-overlay"></div>',
                            '<span class="ico-video-lrg"></span>',
                        '</a>',
                    '</div>',
                    '<figcaption class="description">',
                        '<h3 class="title"><a href="', results[i].videoUrl,'">', results[i].title, '</a></h3>',
                        '<div class="caption">', results[i].caption,'</div>',
                        '<div class="video-result-meta">',
                            videoDateHTML,
                            '<span class="length">', results[i].videoLength, '</span>',
                        '</div>',
                    '</figcaption>',
                '</figure>'
            ].join('');

            HTML.push(resultHTML);

        }

        return HTML.join('');
    }

    function nextPictureResult(e) {
        var keyCode           = e.keyCode;
        var $target           = $(e.target);
        var $activeResult     = $('.active-result');
        var $previewContainer = $('.preview-container')

        // trigger the click event on the next picture
        if (keyCode == 39 ||
            $target.hasClass('search-arrow-right')) {
			
			wtNextSlide();
            $el = getNextPicture();

            // ensure an element exists
            if ($el.length > 0) {

                showSearchPreview();

            }

        } else if (keyCode == 37 ||
                   $target.hasClass('search-arrow-left')) {
			
			wtPreviousSlide();
            $el = getPreviousPicture();

            // make sure element exists and
            // previous result is not a slideshow picture result
            if ($el.length > 0 &&
                !$el.hasClass('slideshow-picture-result')) {

                showSearchPreview();

            }

        }

        // reset the element
        $el = null;
    }

    function getNextPicture() {
        var $activeResult       = $('.active-result');
        var $nextSibling        = $activeResult.next();
        var $activeResultParent = $activeResult.parent();
        var $nextResultRow      = $activeResultParent.nextAll('.picture-results-row');

        if ($nextSibling.length == 0) {

            return $($nextResultRow
                       .children('.picture-result')
                       .get(0));

        }

        return $nextSibling;
    }

    function getPreviousPicture() {
        var $activeResult       = $('.active-result');
        var $prevSibling        = $activeResult.prev();
        var $activeResultParent = $activeResult.parent();
        var $prevResultRow      = $activeResultParent.prevAll('.picture-results-row');

        if ($prevSibling.length == 0) {

            return $($prevResultRow
                       .children('.picture-result')
                       .get(3));

        }

        return $prevSibling;
    }

    function initLoadMore() {
        if (resultsRealNumber < numberOfResultsToShow ||
            resultsEstimatedNumber <= numberOfResultsToShow) {
            noMoreResults();
        }
    }

    function checkLoadMore() {
        var totalResultNumber    = searchResults.totalResultNumber;
        var totalResultNumberStr = searchResults.totalResultNumberStr;
        var nextPageStartNumber  = pageNumber * numberOfResultsToShow;

        // update search result number
        $('.search-result-count-num')
            .html(totalResultNumberStr);

        if (searchResults.videos &&
            (searchResults.videos.length < numberOfResultsToShow)) {
            noMoreResults();
        }

        if (searchResults.pictures && (searchResults.pictures.length < numberOfResultsToShow)) {
            noMoreResults();
        } else{
            $('#picture-results + .search-result-more > .search-result-more-txt')
            .on('click', loadMorePictureResults);
        }

        if (nextPageStartNumber > totalResultNumber) {
            noMoreResults();
        }
    }

    function noMoreResults() {
        $searchResultMoreText
            .addClass('search-result-no-more');

        $searchResultMoreText
            .text(noMoreResultsStr);

        $searchResultMoreText
            .off('click');
    }

	function wtNextSlide() {
    }
            
	function wtPreviousSlide() {
    }

    $(document).ready(init);

    return {
        addMorePictureResults: addMorePictureResults,
        addMoreVideoResults  : addMoreVideoResults
    };

})();

var addMorePictureResults = loadMoreSearchResults.addMorePictureResults;
var addMoreVideoResults   = loadMoreSearchResults.addMoreVideoResults;

