/**
 * Omniture implementation file for ape-site-search.
 * The Omniture implementation includes page view call & user action tracking
 * for search button, sort options.
 * It gets the required omniture parameters from omniture-config.json.
**/
jQuery(document).ready(function($) {
  'use strict';
  if (typeof omnitureValues != 'undefined') {
    var siteName = omnitureValues.site;
    var searchQuery = omnitureValues.searchQuery;
    var omnitureConfig = omnitureValues.omnitureConfig;
    var sortLinks = $('.sortByWrapper').find('a');
    s_time.channel = siteName;
    s_time.pageName = siteName + '|search results|page' + omnitureValues.pageNumber;
    if (typeof omnitureConfig.pageNumber != 'undefined') {
      s_time[omnitureConfig.pageNumber] = omnitureValues.pageNumber;
    }

    s_time[omnitureConfig.contentType] = 'search results';
    s_time[omnitureConfig.channel] = 'search';
    s_time[omnitureConfig.url] = location.hostname;
    s_time[omnitureConfig.internalSearchTerm] = searchQuery;
    var s_code = s_time.t();
    if (s_code) {
      document.write(s_code)
    }

    $('.gsc-search-button-v2').on( "click", function() {
      if (siteName == 'golf') {
        omniTrackUA('useraction', siteName + '|search');
      } else {
        omniTrackEv(siteName + '|search');
      }
    });
    sortLinks.click(function() {
      if (sortLinks.text() == 'Date') {
        if (siteName == 'golf') {
          omniTrackUA('useraction', siteName + '|search|sort by date');
        } else {
          omniTrackEv(siteName + '|search|sort by date');
      }
    }
      else if (sortLinks.text() == 'Relevance') {
        if (siteName == 'golf') {
          omniTrackUA('useraction', siteName + '|search|sort by relevance');
        } else {
          omniTrackEv(siteName + '|search|sort by relevance');
        }
      }
    });
    if(typeof omnitureConfig.hamburger != 'undefined') {
      $(omnitureConfig.hamburger.targetItem).click(function () {
        omniTrackEv('nav-' + $.trim($(this).text()));
      });
      $(omnitureConfig.hamburger.targetMain).click(function () {
        omniTrackEv('nav-expose');
      });
    }
  }
});

