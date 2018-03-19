/**
* Pagination and sort functionality
* for the site templates.
**/

'use strict';

var navi = (function($) {
  $(document).ready(function() {
      var ctypeValue='';
      
        var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;
          var j;
         // alert(sURLVariables.length);
        for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          //alert(sParam);
          //alert(sParameterName[0]);
          if (sParameterName[0] === sParam) {
             // alert(sParameterName[1]);
              if ((sParameterName[1] === undefined) || (sParameterName[1] === null) || (typeof (sParameterName[1])  === "undefined" )) {
                  
              }
             else
              {
              sParameterName[1] === undefined ? true : sParameterName[1];
              var sParameterName_diff = sParameterName[1].split(',');
              for (j = 0; j < sParameterName_diff.length; j++) {
                  $('#'+sParameterName_diff[j]+' a').addClass('selected');
              }
              //return sParameterName[1];
            }
          }
          else{
             $('#all_facet a').addClass('selected'); 
             //return false;
          }
          if(j>0)
          {
              $('#all_facet a').removeClass('selected');
          }
        }
        };

        var filter = getUrlParameter('filter');
        //alert('bb');
        //alert(filter);


       $('.facet_level a').on('click', function () { 
        var facet_select = $(this).parent().attr('id');
        if(facet_select =='all_facet')
        {
            if ($(this).hasClass('selected')) { // nothing
            }
            else{
            $('.facet_level a').removeClass('selected');
            $(this).addClass('selected');
             if($('#search-form input#gsc-i-id1').val()!='')
                search_func();
            }
        }
        else{  
        if ($(this).hasClass('selected')) {
          $(this).removeClass('selected');
        }
        else
        $(this).addClass('selected');
        if($('#search-form input#gsc-i-id1').val()!='')
           search_func();
        }
        
       
        
    });
    

    $('#gsc-iw-id1').click(function(e){
        
        if(($('#gsc-i-id1').val()) !='')
        {
        e.preventDefault(e);
        }
       // $('#google-autosuggest form').submit(false);
       // search_func();
    })


//    $(".gsc-search-box-tools").submit(function(e){
//        //alert('aa');
//        e.preventDefault();
//        search_func();//
//    });


    $('#search-form .gsc-search-button-v2').click(function(e) {
      e.preventDefault();
      if($('#search-form input#gsc-i-id1').val()!='')
      search_func();
    });
    
    
    

  });

  
  //searxh with form submit
    var search_func=function(){
      var currentPath = window.location.href;
      var basePath = currentPath.split('&');
      var newBasePath = '';
      var indexVal = basePath[0].indexOf('q=');
      var siteIndexVal = basePath[0].indexOf('site=');
      var urlQuery = siteIndexVal > 0 ? '&q=' : '?q=';
      var ctypeValue='';
      
        
        $('.facet_level a.selected').each(function() {
        var ctype = $(this).parent().attr('id');
        if(ctype =='all_facet')
        {
            ctypeValue= '';
        }
        else
        {
            if(ctypeValue=='')
            {
                ctypeValue= '&filter=' + ctype;
            }
            else
            {
                ctypeValue= ctypeValue + ',' + ctype;
            }
        }
        });

        if ((ctypeValue === undefined) || (ctypeValue === null) || (typeof (ctypeValue)  === "undefined" )) {       
        }
        else
        {
            var ctype=ctypeValue;
            $('#ctypeParam').val(ctype);
        }
        
      newBasePath = indexVal > 0 ? basePath[0].substring(0, indexVal + 2) + encodeURIComponent($('#search-form input#gsc-i-id1').val()) + ctype : basePath[0] + urlQuery + encodeURIComponent($('#search-form input#gsc-i-id1').val()) + ctype;
        window.location.href = newBasePath + '&sort=relevance';
    };

  //call google ajax
  var GoogleCseAutoComplete = function(query, process) {
    $.ajax({
      url: 'http://suggestqueries.google.com/complete/search?output=firefox&hl=en&q=' + query,
      dataType: 'jsonp',
      cache: false,
    }).done(function(data) {
      process($.map(data[1], function(item) {
        return {value: item};
      }));
    });
  };

  //get sortBy value
  function getSortType(queryParam) {
    return queryParam != 'all' ? document.getElementById('sortb').value : '';
  }

  function getQueryParameters(parameter) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] == parameter) {
        return pair[1];
      }
    }

    return (false);
  }

  //navigation
  function ape_search_pagination(index, requiredResults, noOfResults, queryParam, paginationType, correctedQuery, correctedSearchTerms) {
    var siteName = getQueryParameters('site');
    var sitePath = window.location.origin;
    var searchTerm = getQueryParameters('q');
    var filterTerm = getQueryParameters('filter');
    if (correctedQuery === true) {
      searchTerm = correctedSearchTerms;
    }

    var urlQuery = sitePath + '?q=';
    if (filterTerm !=false && siteName != false){
      urlQuery = sitePath + '?site=' + siteName + '&q=' + searchTerm + '&filter=' + filterTerm;
    }else if (filterTerm !=false) {
       urlQuery = sitePath + '?q=' + searchTerm + '&filter=' + filterTerm;
    }else if (siteName != false && queryParam !== 'all') {
      urlQuery = sitePath + '?site=' + siteName + '&q=' + searchTerm;
    }else if (queryParam !== 'all') {
      urlQuery = sitePath + '?q=' + searchTerm;
    }else if (siteName != false) {
      urlQuery = sitePath + '?site=' + siteName + '&q=';
    }
    
    if (paginationType === 'prev') {
      var startIndexPagination = noOfResults - requiredResults < 0 ?  (index - requiredResults) : (index - noOfResults);
      window.location.href = urlQuery + '&startIndex=' + startIndexPagination + '&sort=' + getSortType(queryParam);
    }else if (paginationType === 'next') {
      window.location.href = urlQuery + '&startIndex=' + (index + 1) + '&sort=' + getSortType(queryParam);
    }
  }

  //navigation on sort type
  function sortBy(sortType) {
    var currentPath = window.location.href;
    var basePath = currentPath.split('&');
    var siteIndexVal = basePath[0].indexOf('site=');
    var urlQuery = siteIndexVal > 0 ?  basePath[0] + '&' + basePath[1] : basePath[0];
    window.location.href = urlQuery + '&sort=' + sortType;
  }

  //method scope to public
  return {
    ape_search_pagination:ape_search_pagination,
    sortBy:sortBy,
    getQueryParameters:getQueryParameters
  };
})(jQuery);

/**
* Google's Api to show context aware suggestions
* based on the site, eg: for EW autosuggest will show 
* keywords related to ew site instead of entire google.

* It accepts the search engine ID for the sites.
**/

var searchBoxCallback = function() {
  var siteName = navi.getQueryParameters('site');
  var filterName = navi.getQueryParameters('filter');
  //alert(filterName);
  var site = window.location.href.split('?')[0];
  if (siteName !== false) {
    site = site + '?site='+siteName;
  }
  if (document.readyState == 'complete') {
    // Document is ready when CSE element is initialized.
    // Render an element with both search box and search results in div with id 'google-autosuggest'.
    google.search.cse.element.render(
        {
          div: 'google-autosuggest',
          tag: 'searchbox-only',
          attributes: {
            resultsUrl: site,
            queryParameterName: 'q'
          }
        });
  } else {
    // Document is not ready yet, when CSE element is initialized.
    var loader_instances = [].slice.call(document.querySelectorAll('.loader'));
    loader_instances.forEach(function(loader) {
      loader.style.display = 'none';
    });
    var search_boxes = ['google-autosuggest', 'google-autosuggest-bottom', 'google-autosuggest-header'];
    // Render an element with both search box and search results in div with id 'google-autosuggest'.
    search_boxes.forEach(function(search_box) {
      google.search.cse.element.render({
        gname: 'gsearch',
        div: search_box,
        tag: 'searchbox-only',
        attributes: {
          resultsUrl: site,
          queryParameterName: 'q'
        }
      });
    });
  }
  jQuery(".gsc-input").attr("placeholder", "Search");
};
// Insert it before the CSE code snippet so that cse.js can take the script
// parameters, like parsetags, callbacks.
window.__gcse = {
  parsetags: 'explicit',
  callback: searchBoxCallback
};

(function() {
  var cx = omnitureValues.engineId; // Custom Search engine ID
  var gcse = document.createElement('script'); gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();
