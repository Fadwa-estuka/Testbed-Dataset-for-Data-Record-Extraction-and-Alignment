/*JS for new NBA global navigation */
(function($) {

  $(function() {
    var module = {},
      waitForFinalEvent,
      site_url = '';

    if ((window.location.hostname).indexOf('beta.nba.com') > -1 ||
      (window.location.hostname).indexOf('local.nba.com') > -1) {
      site_url = '';
    } else {
      site_url = 'http://www.nba.com';
    }

    function setListeners() {
      $(document).on('click', '.nba-primary-nav .nba-nav__container--button', toggleMenu);
      $(document).on('click', '.nba-secondary-nav__list--item--dropdown > a', showSubNav);
      $(window).on('resize', function() {
        // Announce the new orientation number
        waitForFinalEvent(module.checkNav, 500, 'navitems');
      });
      $(document).on('click', '.nba-secondary-nav__list--item-more, .nba-secondary-nav__list--item-back', toggleSSRightNav);
    }

    function cookieCallback(msg, data) {
      renderAccountMenu(data);
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    /*
     * Nav will be used outside of NBA.com, so we have to verify
     * these variables do indeed exist.
     */
    if (window._nba &&
          window._nba.hasOwnProperty('membership') &&
          window._nba.membership.isLoggedIn()) {
      window._nba.PubSub.subscribe('dalton.success.cookie.updated', cookieCallback);
      window._nba.PubSub.subscribe('membership.unauthorized.sso.check', cookieCallback);
      window._nba.PubSub.subscribe('membership.authorized.sso.check', cookieCallback);
    }
    else {
      renderAccountMenu();
    }

    function getAccessMenuItems(data) {
      var items = [];
      var qs = '?nbaMembershipRedirectExternalUrl=' + encodeURIComponent(window.location.href);
      var itemUpgrade = { text: 'Upgrade to NBA LEAGUE PASS', href: site_url + '/leaguepass'};
      // Not Logged In.
      if (data && data.entitlements) {
        var entitlements = data.entitlements.reduce(function(result, prop){
          result[prop] = true;
          return result;
        }, {});

        // NBA LEAGUE PASS aka access to all teams (lpbp) & VIP (lpbpnb).
        if (entitlements.lpbp || entitlements.lpbpnb) {
          $('.nba-nav__account').addClass('nba-nav__account-vip');
        }
        // Team Pass (lpbc) - Audio League Pass (lprdo).
        else if (entitlements.lpbc || entitlements.lprdo || entitlements.lpsg) {
          $('.nba-nav__account').addClass('nba-nav__account-lp');
          items.push(itemUpgrade);
        }
        // General NBA Account, NBA Single Game, AND Free Trial for NBA League Pass.
        else {
          items.push(itemUpgrade);
        }
        items.push({ text: 'Account Details', href: site_url + '/membership/user/settings' + qs});
        items.push({ text: 'Sign Out', href: site_url + '/membership/user/logout' + qs});
      }
      // Not Logged In.
      else {
        items.push({ text: 'Sign In', href: site_url + '/membership/user/login' + qs});
        items.push({ text: 'Create Account', href: site_url + '/membership/user/register'});
      }
      // All Users.
      items.push({ text: 'Help', href: '//leaguepasssupport.nba.com'});
      return items;
    }

    function renderAccountMenu(data) {
      var items = getAccessMenuItems(data);
      items = items.map(function(d) {
        return $('<li>').append($('<a>').text(d.text).attr('href', d.href));
      });
      if (data && !data.errors) {
        $('.nba-nav__account').text(data.email).addClass('nba-nav__account--signed-in');
      } else {
        var memberCookie = decodeURI(getCookie('nbaMembershipInfo'));
        if (memberCookie && memberCookie.match(/"email"./)) {
          var memberEmail = memberCookie.split('"email"')[1];
          memberEmail = memberEmail.match(/"([^"]+)"/)[1] || '';
          $('.nba-nav__account').text(memberEmail).addClass('nba-nav__account--signed-in');
          items = [
            $('<li>').append($('<a>').text('Account Details').attr('href', 'http://www.nba.com/membership/user/settings?nbaMembershipRedirectExternalUrl='+encodeURIComponent(window.location))),
            $('<li>').append($('<a>').text('Sign Out').attr('href', 'http://www.nba.com/membership/user/logout?nbaMembershipRedirectExternalUrl='+encodeURIComponent(window.location))),
            $('<li>').append($('<a>').text('Help').attr('href', 'http://leaguepasssupport.nba.com/'))
          ];
        }
      }
      $('.nba-nav__account-item').addClass('nba-nav__account-loaded');
      $('.nba-nav__account').siblings('.nba-nav__submenu').html(items);
    };

    waitForFinalEvent = (function () {

      var timers = {};

      return function (callback, ms, uniqueId) {

        if (!uniqueId) {
          uniqueId = 'Don\'t call this twice without a uniqueId';
        }

        if (timers[uniqueId]) {
          clearTimeout (timers[uniqueId]);
        }

        timers[uniqueId] = setTimeout(callback, ms);
      };
    }());

    function showSubNav(event) {
      var $navLink = $(this),
        $wrapperLI = $navLink.parents('li:first'),
        $subNav = $wrapperLI.find('ul:first');

      $wrapperLI.toggleClass('nba-secondary-nav__list--item--dropdown--open');
      event.preventDefault();

      if ($subNav.is(':visible')) {
        $navLink.attr('aria-expanded', 'false');
        $subNav.hide(500);
      } else {
        $navLink.attr('aria-expanded', 'true');
        $subNav.show({duration:500, step: function(n, t){
          var liRects = $wrapperLI[0].getBoundingClientRect();
          var containerHeight = $('.nba-secondary-nav__container').height();
          if (liRects.bottom > containerHeight) {
            // To account for desktop and mobile. The element that scrolls is different.
            // We can get away with trying to assign both element as only one will scroll.
            // Note we do not have any mobile sniffing available here.
            var currScroll = $('.nba-secondary-nav__ss--right-slide').scrollTop() === 0 ?
              $('.nba-secondary-nav__container').scrollTop() : $('.nba-secondary-nav__ss--right-slide').scrollTop();
            var newScroll = currScroll + liRects.bottom - containerHeight;
            $('.nba-secondary-nav__ss--right-slide').scrollTop(newScroll);
            $('.nba-secondary-nav__container').scrollTop(newScroll);
          }
        }});
      }

      return false
    }

    function toggleSSRightNav(event) {
      var $leftNav = $('.nba-secondary-nav__wrapper'),
        $bothButtons = $('.nba-secondary-nav__list--item-more, .nba-secondary-nav__list--item-back'),
        $button = $(this);

      $bothButtons.each(function() {
        $(this).attr('aria-pressed', 'false');
      });

      if ($button.attr('aria-pressed') === 'false') {
        $button.attr('aria-pressed', 'true');
      } else {
        $button.attr('aria-pressed', 'false');
      }

      $leftNav.toggleClass('nba-secondary-nav__container--ss-slide-left');
    }

    function toggleMenu(event) {
      var $button = $(this),
        $secondaryNav = $('.nba-secondary-nav__container');

      $secondaryNav.toggleClass('nba-secondary-nav__container--open');
      $button.toggleClass('nba-nav-container__button--open');
    }

    function pinMenuLink(path) {
      var $accordionNav = $('.nba-secondary-nav__list--middle'),
        $secondaryNav = $('.nba-secondary-nav__list--top'),
        $menuLink = '';
      if ($accordionNav.find('li a[href="/' + path + '"]').length) {
        $menuLink = $accordionNav.find('li a[href="/' + path + '"]');
        if ($secondaryNav.find('li a[href="/' + path + '"]').length) {
          $secondaryNav.find('li a[href="/' + path + '"]').parent().remove();
        }
        $menuLink.parent().hide();
        $secondaryNav.prepend('<li class="nba-secondary-nav__list--item nba-secondary-nav__list--item-highlight"><a href="' + $menuLink.attr('href') + '">' + $menuLink.html() + '</a></li>');
      }
    }

    /**
     * Hightlight the selected tab in main menu.
     */
    function highlightMainMenu() {
      var currentPath = window.location.pathname;
      var currentPathFragment = currentPath.split('/');
      var $mainMenu = $('.nba-nav__container--center-menu');
      var $mainMenuItem = $('.nba-nav__container--center-menu li');
      var deepLinks = ["/games"];
      $mainMenuItem.each(function(index, element) {
        var $currentElement = $(element);
        var itemPath = $currentElement.find('a').attr('href');
        if (currentPathFragment.length < 3) {
          if (currentPath === itemPath) {
            $currentElement.addClass('active');
            return false;
          }
        } else if (deepLinks.indexOf(itemPath) !== -1 && '/' + currentPathFragment[1] === itemPath) {
          $currentElement.addClass('active');
          return false;
        }
      });
    }

    module.checkNav = function() {
      var $navItems = $('.nba-primary-nav .nba-nav__container--center-menu li'),
        $secondaryNav = $('.nba-secondary-nav__list--top'),
        $primaryRightNav = $('.nba-nav__container--right-add-to-secondary'),
        $firstElement;

      $navItems.each(function(index, element) {
        var $currentElement = $(element),
          currentPosition = $currentElement.position(),
          firstElementPosition;

        if (index === 0) {
          $firstElement = $currentElement;
        }
        var $currentElementClasses = $currentElement.attr("class").split(' nba-nav__container--center-menu-item');
        if (!$firstElement.is(':visible')) {
          if (!$secondaryNav.find('a[href="' + $currentElement.find('a:first').attr('href') + '"]').length) {
            $secondaryNav.append('<li class="nba-secondary-nav__list--item ' + $currentElementClasses[0] + '"><a href="' + $currentElement.find('a:first').attr('href') + '">' + $currentElement.find('a:first').html() + '</a></li>');
          }
        } else {
          firstElementPosition = $firstElement.position();

          if (firstElementPosition.top !== currentPosition.top) {
            if (!$secondaryNav.find('a[href="' + $currentElement.find('a:first').attr('href') + '"]').length) {
              $secondaryNav.append('<li class="nba-secondary-nav__list--item ' + $currentElementClasses[0] + '"><a href="' + $currentElement.find('a:first').attr('href') + '">' + $currentElement.find('a:first').html() + '</a></li>');
            }
          } else {
            $secondaryNav.find('a[href="' + $currentElement.find('a:first').attr('href') + '"]').parents('li:first').remove();
          }
        }

      });

        $primaryRightNav.find('.nba-nav__container--right-item').each(function(index, element) {
          var $element = $(element).find('a'),
            href = $element.attr('href');
          if (!$element.is(':visible')) {
            if (!$secondaryNav.find('a[href="' + href + '"]').length) {
              $secondaryNav.prepend('<li class="nba-secondary-nav__list--item nba-secondary-nav__list--item-highlight"><a href="' + href + '">' + $element.html() + '</a></li>');
            }
          }
          else {
            $secondaryNav.find('a[href="' + href + '"]').parents('li:first').remove();
          }

        });

      pinMenuLink('vr');
      pinMenuLink('allstar');
      pinMenuLink('leaguepass');
      highlightMainMenu();

    };

    module.start = function() {
      setListeners();
      module.checkNav();
    };

    $(module.start);

  });
})(jQuery);
