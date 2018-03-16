define(['core/events'],
    function (events) {

    var cards = {
        cardContentClassName: 'card__content',
        singleCardClassName: 'card-holder--single',
        cardClassName: 'card',
        visibleCardClassName: 'card--visible',
        card: 'card-holder__item',
        isSingleCard: false,
        firstCard: null,

        detectSingleCard: function () {
            this.isSingleCard = document.getElementsByClassName(this.singleCardClassName).length > 0;
        },

        restyleCards: function () {
            if (this.isSingleCard) {
                return;
            }

            // Adjust card-holder-wrap height to hide vertical scrollbars
            // Get overall height of first card allowing for box shadow
            if(this.firstCard) {
                this.fixCardHeights();
            }
        },

        /** Set the height of all cards to the tallest possible card. */
        fixCardHeights: function() {
            var tallestCard = 0;
            for (var i = 0; i < this.cardBodies.length; i++) {
                tallestCard = tallestCard < this.cardBodies[i].clientHeight ? this.cardBodies[i].clientHeight : tallestCard;
            }

            for (var i = 0; i < this.cardBodies.length; i++) {
                this.cardBodies[i].style.height = tallestCard + 'px';
            }
        },

        readjust: function () {
            if(cards.cardBodies) {
                for (var i = 0; i < cards.cardBodies.length; i++) {
                    cards.cardBodies[i].style.height = 'auto';
                }

                cards.restyleCards();
            }
        },

        showCards: function () {
            var cards = document.getElementsByClassName(this.cardClassName);

            if (cards) {
                for (var i = 0; i < cards.length; i++) {
                    cards[i].className = cards[i].className + ' ' + this.visibleCardClassName;
                }
            }
        },

        discoverElements: function() {
            var allCards = document.getElementsByClassName(this.card);
            if(allCards.length > 0) {
                this.firstCard = allCards[0];
                this.cardBodies = document.getElementsByClassName(this.cardContentClassName);
            }
        },

        init: function () {

            this.detectSingleCard();
            this.discoverElements();
            this.restyleCards();
            this.showCards();

            events.addEvent('resize', this.readjust, window);
            events.addEvent('orientationchange', this.readjust, window);
        }
    };

    return cards;
});