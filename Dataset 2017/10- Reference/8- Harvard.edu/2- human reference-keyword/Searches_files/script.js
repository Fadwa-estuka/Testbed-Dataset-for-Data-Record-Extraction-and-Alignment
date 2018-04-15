;(function () {

  var   win = $(window),
        html = $('html'),
        body = $('body'),
        page = $("#page"),
        btnMenu = $('.btn--menu'),
        mainMenu = $('#siteNavigation');

  // remove no-js class from HTML
  html.removeClass('no-js');


  // Setup ARIA attributes on hamburger menu button on page load
  btnMenu.attr({
    'role': 'button',
    'aria-controls': 'siteNavigation',
    'aria-expanded': 'false'
  });







/*
  Various things should animate into view on scrolling on certain
  screen sizes.

  If a screen size is too small for these animations, but is then
  made bigger via user browser resizing, we want to run this function
  so stuff can happen like whoa.
*/

function inView () {
  if (win.scrollTop() >= 47 && win.width() >= 600) {
    page.addClass("in-view");
  }
  else {
    page.removeClass("in-view");
  }
}

// stick a harvard campaign link in the top bar on scroll
win.scroll(inView);

// run inView on page load just in case a user has made a
// soft refresh, so as to not load the page & have the
// focus point be reset to the top of the document
inView();





/*

  Mobile Navigation Button

*/

// Toggle attribute states function for btnMenu
function toggleState ( stateOff, stateOn, attrOff, attrOn, expOff, expOn ) {
  btnMenu.attr('data-state', btnMenu.attr('data-state') === stateOff ? stateOn : stateOff);

  btnMenu.attr('aria-label', btnMenu.attr('aria-label') === attrOff ? attrOn : attrOff);

  btnMenu.attr('aria-expanded', btnMenu.attr('aria-expanded') === expOff ? expOn : expOff);
}


// Actions to fire on click of btnMenu
btnMenu.on('click', function (e) {
  e.preventDefault();
  toggleState('off', 'on', 'Reveal Navigation', 'Close Navigation', 'false', 'true');
  html.toggleClass('nav-open');
});







/*

  Check Screen Size to reset mobile nav if no longer needed

*/

  // check the screen size to determine if .js-lg-screen is on the body
  function checkScreenSize () {
    if ( $(window).width() <= 600 ) {
      body.removeClass('js-lg-screen');
    }

    if ( $(window).width() >= 600 && html.hasClass('nav-open') ) {
      html.removeClass('nav-open');

      // revert btnMenu attributes to original state
      btnMenu.attr('data-state', 'off');
      btnMenu.attr('aria-label', 'Reveal Navigation');
      btnMenu.attr('aria-expanded', false);
    }
  }

  checkScreenSize();

  $(window).on('resize', function () {
    checkScreenSize();
  });







/*

  DROP DOWN MENU FUNCTIONS

*/
// on tabbing, if a drop nav link is focused, add a class to the containing
// .has-drop-nav element, and add an is-opened class.
// on blur of drop nav link, remove the is-opened class, so when a user finally
// leaves focus from a drop nav, it will close behind them.
$('.list--drop-nav a').each( function () {
  $(this).on('blur', function () {
    $(this).closest('.has-drop-nav').removeClass('is-opened');
  });

  $(this).on('focus', function () {
    $(this).closest('.has-drop-nav').addClass('is-opened');
  });
});







/*

  Special consideration for jump links
  focusing inputs

*/

// on click of the jump link for search, instead of
// just focusing the form the search is in, actually
// auto focus the search input
$('#jumpToSearch').on('click', function (e) {
  e.preventDefault();
  $('#searchSite').focus();
});






/*

  Sub navigations

*/
// Show / hide sub nav on mobile
var subNavBtn = $('#subnavBtn'),
    subNavLabel = $('#subnavBtn span'),
    subNavMenu = $('#subNav'),
    subNavMenuFirst = $('#subNav > ul > .first a');

subNavBtn.on('click', function ( e ) {
  subNavMenu.slideToggle();

  $(this).toggleClass('sub-nav-opened');

  e.preventDefault();
  subNavMenuFirst.focus();
  subNavMenuFirst.prop('tabindex', '-1');

  // change label of sub nav button to be open/close
  subNavLabel.attr('aria-label', function(index, attr){
    return attr == "Open Sub Navigation" ? "Close Sub Navigation" : "Open Sub Navigation";
  });

});

subNavMenuFirst.on('blur', function() {
  $(this).removeAttr('tabindex');
});



// add affordance to assistive technologies for
// if a link is actually linking to the current page
var selectedPage = $('nav .selected, nav .active a');

selectedPage.each( function () {
  $(this).prepend('<span class="is-visually-hidden">Current Page:</span>');
});







/*

  Keep keyboard focus within slide out menu
  as long as it's open.

  if the dom order is reworked, these functions
  may need to be revised

*/

var homeLink = $('.harvard-heading__link'),
    searchInput = $('#searchSite');

// throw focus back to harvard home link (shield)
// if someone tries to leave the nav while it's
// covering the site's content
searchInput.on('keydown', function (e) {
  var keyCode = e.keyCode || e.which;
  if (keyCode == 9 && !e.shiftKey && html.hasClass('nav-open') ) {
    e.preventDefault();
    homeLink.focus();
  }
});

// throw focus to the search input (last item in header)
// if someone reverse tabs on the harvard home link
homeLink.on('keydown', function (e) {
  var keyCode = e.keyCode || e.which;
  if ( keyCode == 9 && e.shiftKey && html.hasClass('nav-open') ) {
    e.preventDefault();
    searchInput.focus();
  }
});







/*

  Function to close the alert message area

*/

  var closeAlert = $('#closeAlert'),
      closeIE8Alert = $('.ie-8 #closeAlert'),
      alertWrapper = $('#alertWrapper');



  closeAlert.on('click', function () {
    alertWrapper.slideUp();
  });

  closeIE8Alert.click(function () {
    alertWrapper.hide();
  });

  // additional logic should likely be placed here
  // so that if a user has already closed an alert,
  // they won't see it again on page refresh/revisit







/*

  Multimedia filtering function

*/
  // Toggle visibility of media decks
  var filterControls = $('.filter-media-input');

  function initialFilter () {
    filterControls.each( function () {
      if ( $(this).is(':checked') === false ) {
        var thisInput = $(this).attr('name');

        $('#' + thisInput).hide();
      }
    });

  }

  // if a user unchecked a box and hit refresh, the box should stay unchecked.
  // if this is the case, hide the unchecked element
  initialFilter();

  // on user checking/unchecking a filter option, slide up/down
  // the appropriate content area
  filterControls.on('change', function () {
    var thisInput = $(this).attr('name');
    $('#' + thisInput).slideToggle();
  });







/*

  Expand video cards

*/
  // expand video on user click of placeholder image
  $('.expand-video').on('click', function () {
    // get rid of the placeholder image
    $(this).slideUp();
    // slide open the video container
    $(this).next('.video-close').slideToggle();
    // now show the video
    $(this).next('.video-close').addClass('show-expanded');
  });







/*

  If Touch Device Functions

*/
  // detect if touch device
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  // Do these things if on a touch device
  if (supportsTouch) {
    body.addClass('is-touch-device');

    var currentScrollPosition = 0;

    $('.btn--mobile-site-search').on('click', function () {
      window.scrollTo(0,0);
      $('#searchSite').focus();
      body.addClass('input-mode');
      $('body').bind('touchmove', function(e){e.preventDefault();});
    });

    $('#searchSite').on('blur', function () {
      body.removeClass('input-mode');
      $('body').unbind('touchmove');
    });

  }

  // stop device zoom in focus of input elements on mobile
  var $viewportmeta = $('meta[name="viewport"]');
  $('input, select, textarea').on('focus blur', function (event) {
      $viewportmeta.attr('content', 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1));
  });



  // don't focus back on select after a selection has been made.
  // instead focus on select container to mitigate blue background
  // focus on ie8/9
  $('option').on('click', function() {
    $(this).parent().parent().attr('tabindex', '-1');
    $(this).parent().parent().focus();
  });

  $('.select-container').on('blur', function () {
    $(this).removeAttr('tabindex');
  });






  /*

  Cross browser jump link fix

  */
  // skip link fix for browsers that don't support focus
  // change after clicking a jump to link
  window.addEventListener("hashchange", function(event) {

    var element = document.getElementById(location.hash.substring(1));

    if (element) {

      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
      }

      element.focus();
    }

  }, false);

})();

;(function (document, window, $, undefined) {
    'use strict';

    var tabWidget = $('.js-tab-widget');

    // if you wanted tabs to become a collapsable menu on smaller screens
    // this would be how to show/hide the tabs
        // tabNav = $('#tabNav'),
        // mobileBtn = $(document.createElement('button')).attr({
        //     'type': 'button',
        //     'class': 'btn btn--tab-reveal',
        //     'aria-expanded' : false,
        //     'aria-controls': 'tabNav'
        // }).append('+');

        // tabNav.addClass('tabs-sm-hide');

        // $(body).addClass('has-tabs');


        // function addBtn () {
        //     tabWidget.prepend(mobileBtn);
        // }

        // addBtn();

        // mobileBtn.on('click', function () {
        //   tabNav.toggleClass('tabs-sm-hide');

        //   if ( tabNav.hasClass('tabs-sm-hide') ) {
        //     $(this).attr('aria-expanded', false);
        //     $(this).html('+ <span class="is-visually-hidden">Open Tabs</span>');
        //   }
        //   else {
        //     $(this).attr('aria-expanded', true);
        //     $(this).html('- <span class="is-visually-hidden">Close Tabs</span>');
        //     $('#tab-link-0').focus();
        //   }

        // });



    // Tab click event
    var tabClickEvent = function (thisLink, tabLinks, tabPanels, i) {
        // Other links
        tabLinks
            .attr({
                'tabindex': '-1',
                'aria-selected': 'false'
            })
            .removeClass('tab-widget__link--active');

        // This link
        thisLink
            .attr({
                'tabindex': '0',
                'aria-selected': 'true'
            })
            .addClass('tab-widget__link--active');

        // Hide other panels
        tabPanels
            .attr('aria-hidden', 'true')
            .removeClass('tab-widget__tab-content--active');

        // Show this panel
        tabPanels.eq(i)
            .attr('aria-hidden', 'false')
            .addClass('tab-widget__tab-content--active');
    };

    // Keydown event
    var keydownEvent = function (thisLink, tabLinks, tabPanels, tabItems, i, e) {
        var keyCode = e.which,
            nextTab = thisLink.parent().next().is('li') ? thisLink.parent().next().find('a') : false,
            previousTab = thisLink.parent().prev().is('li') ? thisLink.parent().prev().find('a') : false,
            firstTab = thisLink.parent().parent().find('li:first').find('a'),
            lastTab = thisLink.parent().parent().find('li:last').find('a'),
            totalTabs = tabItems.length-1;

        switch(keyCode) {
            // Left/Up
            case 37:
            case 38:
                e.preventDefault();
                e.stopPropagation();

                // Check for previous Tab
                if (!previousTab) {
                    // No previous, set focus on last Tab
                    lastTab.focus();

                    // Show answer content
                    tabClickEvent(lastTab,  tabLinks, tabPanels, totalTabs);
                } else {
                    // Move focus to previous Tab
                    previousTab.focus();

                    // Show answer content
                    tabClickEvent(previousTab,  tabLinks, tabPanels, i-1);
                }

                break;

            // Right/Down
            case 39:
            case 40:
                e.preventDefault();
                e.stopPropagation();

                // Check for next Tab
                if (!nextTab) {
                    // No next, set focus on first Tab
                    firstTab.focus();

                    // Show answer content
                    tabClickEvent(firstTab,  tabLinks, tabPanels, 0);
                } else {
                    // Move focus to next Tab
                    nextTab.focus();

                    // Show answer content
                    tabClickEvent(nextTab,  tabLinks, tabPanels, i+1);
                }

                break;

            // Home
            case 36:
                e.preventDefault();
                e.stopPropagation();

                // Set focus on first Tab
                firstTab.focus();

                // Show answer content
                tabClickEvent(firstTab,  tabLinks, tabPanels, 0);

                break;

            // End
            case 35:
                e.preventDefault();
                e.stopPropagation();

                // Set focus on last Tab
                lastTab.focus();

                // Show answer content
                tabClickEvent(lastTab,  tabLinks, tabPanels, totalTabs);

                break;

            // Enter/Space
            case 13:
            case 32:
                e.preventDefault();
                e.stopPropagation();

                break;
        }
    };

    tabWidget.each(function () {
        var $this = $(this),
            tabList = $this.find('> ul'),
            tabItems = tabList.find('li'),
            tabLinks = tabItems.find('a'),
            tabPanels = $this.find('> div > div');

        // Tab list
        tabList.attr('role', 'tablist');

        // Tab items
        tabItems.each(function () {
            $(this).attr('role', 'presentation');
        });

        // Tab links
        tabLinks.each(function (i) {
            var tabLink = $(this);

            // Set attributes
            tabLink
                .attr({
                    'id': 'tab-link-' + i,
                    'tabindex': '-1',
                    'role': 'tab',
                    'aria-selected': 'false',
                    'aria-controls': 'tab-panel-' + i
                });

            // Set for first item
            if (i === 0) {
                tabLink
                    .attr({
                        'tabindex': '0',
                        'aria-selected': 'true'
                    })
                    .addClass('tab-widget__link--active');
            }

            // Click event
            tabLink.on('click', function () {
                tabClickEvent($(this),  tabLinks, tabPanels, i);

                return false;
            });

            // Keydown event
            tabLink.on('keydown', function (e) {
                keydownEvent($(this), tabLinks, tabPanels, tabItems, i, e);
            });
        });

        // Tab panels
        tabPanels.each(function (i) {
            var tabPanel = $(this);

            // Set attributes
            tabPanel
                .attr({
                    'id': 'tab-panel-' + i,
                    'role': 'tabpanel',
                    'aria-hidden': 'true',
                    'aria-labelledby': 'tab-link-' + i
                });

            // Set for first item
            if (i === 0) {
                tabPanel
                    .attr('aria-hidden', 'false')
                    .addClass('tab-widget__tab-content--active');
            }
        });
    });

})(document, window, jQuery);
