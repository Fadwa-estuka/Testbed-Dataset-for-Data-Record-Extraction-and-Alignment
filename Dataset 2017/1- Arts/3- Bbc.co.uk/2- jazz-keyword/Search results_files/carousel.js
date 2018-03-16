define(['search/util', 'ie8/ie8-utils', 'carousel/navigation', 'carousel/scroll', 'core/events', 'core/viewport', 'carousel/istats-carousel'],
  function (searchUtil, ie8Utils, navigation, scroll, events, viewport, istatsCarousel) {

    'use strict';

    var carousel = {
      card: 'card-holder__item',
      singleCardClassName: 'card-holder--single',
      cardHolderId: 'card-holder',
      cardHolderWrapId: 'card-holder-wrap',
      cardHolderItemClassName: 'card-holder__item',
      carouselEdgeClassName: 'carousel-edge',
      cardShadowHeight: 0, // box shadow
      carouselCardWidth: 266, // fixed card width
      gelSpacingUnit: 8, // standard gel spacing unit
      isSingleCard: false,
      isSmallDevice: false,
      smallDeviceWidth: 400,
      mediumDeviceWidth: 600,
      maxCarouselViewportWidth: 976,
      mediumCarouselViewportWidth: 600,
      minEdgeWidth: 32,
      maxEdgeWidth: 218,
      firstCard: null,
      isHandlingEvents: false,
      carouselWidth: null,
      numCards: 0,
      buttonWidth: 44,
      isSwiping: true,

      detectSingleCard: function () {
        this.isSingleCard = document.getElementsByClassName(this.singleCardClassName).length > 0;
      },

      detectSmallDevice: function () {
        var width = viewportSize.getWidth();
        this.isSmallDevice = width < this.mediumDeviceWidth;
      },

      restyleCarousel: function () {
        if (this.isSingleCard) { // Never enable carousel for single card
          return;
        }

        // also adjust card-holder-wrap height to hide scrollbars. Get overall height of first card allowing for box shadow
        this.showOrHideCarousel();

        this.fixCarouselPadding();
      },

      showOrHideCarousel: function () {
        if (carousel.shouldUseCarousel()) {
          // Add space for card shadow if required
          this.cardHolderWrap.style.height = (this.firstCard.clientHeight + this.cardShadowHeight) + 'px';

          searchUtil.addClass(this.cardHolderWrap, 'carousel');

          if (!this.isHandlingEvents) {
            this.addEventListeners();
          }
        }
        else {
          this.cardHolderWrap.style.height = '';
          searchUtil.removeClass(this.cardHolderWrap, 'carousel');

          if (this.isHandlingEvents) {
            this.removeEventListeners();
          }
        }
      },

      calcEdgeWidth: function() {
        var theViewportSize = viewportSize.getWidth();

        if(theViewportSize > (this.maxCarouselViewportWidth + this.minEdgeWidth)) { // 1008 + 32
          var windowWidth = document.body.clientWidth;
          var offset = (windowWidth - this.maxCarouselViewportWidth) / 2;
          offset = offset > this.maxEdgeWidth ? this.maxEdgeWidth : offset;
          return offset;
        }

        if(theViewportSize > this.smallDeviceWidth) {
          return 16;  // medium
        }

        return 8; // small
      },


      fixCarouselPadding: function () {
        if(! this.hasCards()) { return; }

        var firstCard = this.cardHolderItems[0];
        var lastCard = this.cardHolderItems[this.cardHolderItems.length - 1];

        if (carousel.shouldUseCarousel()) {
          var offset = this.calcEdgeWidth();

          navigation.setBtnPosition(offset);

          this.carouselEdge[0].style.width = offset + 'px';
          this.carouselEdge[1].style.width = offset + 'px';

          firstCard.style.marginLeft = (offset - this.cardSpacing()) + 'px';
          lastCard.style.marginRight = offset + 'px';
        }
        else {
          navigation.setBtnPosition(null);

          if (!ie8Utils.isIE8) {
            firstCard.style.removeProperty('margin-left');
            lastCard.style.removeProperty('margin-right');
            this.carouselEdge[0].style.removeProperty('width');
            this.carouselEdge[1].style.removeProperty('width');
          }
          else {
            firstCard.style.removeAttribute('margin-left');
            lastCard.style.removeAttribute('margin-right');
            this.carouselEdge[0].style.removeAttribute('width');
            this.carouselEdge[1].style.removeAttribute('width');
          }
        }
      },

      /**
       * Space between cards.
       * @returns {number}
       */
      cardSpacing: function() {
        if (!this.isSmallDevice) {
          return 2 * this.gelSpacingUnit;
        }
        return this.gelSpacingUnit;
      },

      /**
       * The width of a card, and the spacing around it.
       * @returns {number}
       */
      fixedCardWidth: function () {
        return this.carouselCardWidth + this.cardSpacing();
      },

      /**
       * Should the cards be displayed in a carousel?
       */
      shouldUseCarousel: function () {
        if (this.numCards === 2 || this.numCards === 3) {
          var carouselBreakpoint = this.carouselCardWidth * this.numCards + (this.numCards + 1) * this.cardSpacing();
          return document.body.clientWidth < carouselBreakpoint;
        }
        else {
          return this.firstCard.clientWidth == this.fixedCardWidth();
        }
      },

      readjust: function () {
        carousel.detectSmallDevice();
        carousel.restyleCarousel();

        if (carousel.shouldUseCarousel()) {
          var pos = carousel.cardHolder.scrollLeft;
          carousel.handleNavButtonState(pos);
        }
      },

      discoverElements: function () {
        var allCards = document.getElementsByClassName(this.card);
        if (allCards.length > 0) {
          this.firstCard = allCards[0];
          this.cardBodies = document.getElementsByClassName(this.cardContentClassName);
        }

        this.cardHolderItems = document.getElementsByClassName(this.cardHolderItemClassName);
        this.numCards = this.cardHolderItems.length;

        this.carouselEdge = document.getElementsByClassName(this.carouselEdgeClassName);

        this.cardHolder = document.getElementById(this.cardHolderId);
        this.cardHolderWrap = document.getElementById(this.cardHolderWrapId);
      },

      handleNavButtonState: function (pos) {
        if (pos <= 0) {
          navigation.disablePrevBtn();
        }
        else {
          navigation.enablePrevBtn();
        }
        if (pos >= (carousel.maxCarouselPosition())) {
          navigation.disableNextBtn();
        }
        else {
          navigation.enableNextBtn();
        }
      },

      maxCarouselPosition: function () {
        return this.cardHolder.scrollWidth - this.cardHolder.clientWidth;
      },

      registerNavigationScrollClicks: function () {
        var cardHolder = this.cardHolder;
        var carouselEdgeLeft = this.carouselEdge[0];
        var carouselEdgeRight = this.carouselEdge[1];
        var self = this;

        var calcScrollAmount = function () {
          var totalTransparentEdgeWidth = carouselEdgeRight.offsetWidth + carouselEdgeLeft.offsetWidth;
          var visiblePageSize = cardHolder.offsetWidth - totalTransparentEdgeWidth;
          var fixedCardWidth = self.fixedCardWidth();
          var numFullyVisibleCards = Math.floor(visiblePageSize / fixedCardWidth);
          if (numFullyVisibleCards <= 0) {
              return fixedCardWidth; // Always scroll at least one card width
          }
          return (numFullyVisibleCards * fixedCardWidth);
        };

        navigation.setPrevBtnAction(function () {
          carousel.isSwiping = false;
          scroll.scrollLeft(calcScrollAmount(), function () {
            istatsCarousel.trackScroll(carousel.isSwiping);
            carousel.isSwiping = true;
          });
        });

        navigation.setNextBtnAction(function () {
          carousel.isSwiping = false;
          scroll.scrollRight(calcScrollAmount(), function () {
            istatsCarousel.trackScroll(carousel.isSwiping);
            carousel.isSwiping = true;
          });
        });
      },

      carouselScrollHandler: function () {
        var pos = carousel.cardHolder.scrollLeft;
        carousel.handleNavButtonState(pos);
        // only track scroll event when the carousel position is not at thw end, as orinetationchange event will adjust
        // scroll position, causing a false positive scroll event.
        if (pos < carousel.maxCarouselPosition() && carousel.isSwiping) {
          istatsCarousel.trackScroll(carousel.isSwiping);
        }
      },

      addEventListeners: function () {
        events.addEvent('scroll', this.carouselScrollHandler, this.cardHolder);
        this.isHandlingEvents = true;
      },

      removeEventListeners: function () {
        events.removeEvent('scroll', this.carouselScrollHandler, this.cardHolder);
        this.isHandlingEvents = false;
      },

      hasCards: function () {
        return this.firstCard;
      },

      init: function () {
        this.detectSingleCard();
        this.discoverElements();

        if(this.hasCards()) {
          navigation.init();
          scroll.init(this.cardHolder);
          this.registerNavigationScrollClicks();

          this.readjust();

          istatsCarousel.init({
            swipeThreshold: this.fixedCardWidth(),
            scrollBox: this.cardHolder
          });

          events.addEvent('resize', this.readjust, window);
          events.addEvent('orientationchange', this.readjust, window);
        }
      }
    };

    return carousel;
  });
