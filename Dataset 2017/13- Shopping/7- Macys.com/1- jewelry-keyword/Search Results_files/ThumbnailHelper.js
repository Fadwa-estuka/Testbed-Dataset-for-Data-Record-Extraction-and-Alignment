define( [
    'jquery',
    'underscore',
    'iShip',
    'thumbnailCarousel/hbsHelpers/ProsHandlebarHelpers',
    'globals'
], function ( $, _, iShip, ProsHandlebarHelpers, Globals ) {

    function getBreakPoint() {
        return ( Globals.getValue( 'props' ) ) ? Globals.getValue( 'props' ).tabletUIPixelWidthBreakpoint : 1024;
    }

    return {
        outputPrice: ProsHandlebarHelpers.outputPrice,
        isTabletDevice: function () {
            return $( document ).width() <= getBreakPoint();
        },
        formatPrice: function ( price ) {
            if ( !price ) {
                return;
            }
            price = +price;
            if ( iShip.isInternationalMode() ) {
                price = iShip.convertPrice( price );
                if ( _.isString( price ) ) {
                    price = parseFloat( price.replace( ",", "" ) );
                }
            }
            return price.toFixed( 2 );
        },

        formatTier: function ( tierConfig ) {
            var tieredPrice = tierConfig.tieredPrice,
                isLastTier = tierConfig.treatAsLastTier,
                currency = iShip.getCurrencyCode( iShip.getShippingCountry() ),
                colorwayPrice = tierConfig.colorwayPrice;
            return {
                currency: currency + ( currency !== '$' ? ' ' : '' ),
                label: tierConfig.label ? tieredPrice.label.replace( "[PRICE]", "" ) : "",
                value: tieredPrice.value.map( function ( val ) {
                    val = this.formatPrice( val );
                    return val.replace( /(\d)(?=(\d{3})+(?!\d))/g, "$1," );
                }.bind( this ) ),
                priceType: ( colorwayPrice.upcOnSale && tieredPrice.value.length > 1 ) ? "original" : "",
                style: isLastTier ? "strong" : "",
                everyDayStyle: colorwayPrice.isEveryDayValue ? "strong" : "",
                memberProductOnSale: tierConfig.memberProductOnSale
            };
        },

        // 1. When there are no tiers no colors. means only first tier
        // 2. Last tier is RED and BOLD if there are more than one tiers.
        //2.1 While displaying a range as described in #2 if any price is not a marked down price display that in black.
        //3. Exception for #2 is - if it is a master and memberProductOnSale = true show only the last tier. ("first-tier")
        //3.1 Remove the labels.
        //3.2 No extra styling required.
        formatColorwayPrice: function ( productThumbnail ) {
            var colorwayPrice = productThumbnail.colorwayPrice,
                tieredPrices = colorwayPrice.tieredPrice,
                tiers = tieredPrices.length,
                formattedTieredPrices = [];
            var priceTypeText = colorwayPrice.priceTypeText;
            if ( priceTypeText && ( priceTypeText.indexOf( 'Everyday Value' ) !== -1 || colorwayPrice.onEdv || colorwayPrice.upcOnEdv ) ) {
                colorwayPrice.isEveryDayValue = true;
            }

            if ( productThumbnail.masterProduct && colorwayPrice.memberProductOnSale ) {
                formattedTieredPrices.push( this.formatTier( {
                    tieredPrice: tieredPrices[ tiers - 1 ], //last tier
                    treatAsLastTier: false,
                    label: false,
                    memberProductOnSale: true,
                    colorwayPrice: colorwayPrice
                } ) );
            } else {
                formattedTieredPrices.push( this.formatTier( {
                    tieredPrice: tieredPrices[ 0 ], //first tier
                    treatAsLastTier: false,
                    label: true,
                    colorwayPrice: colorwayPrice
                } ) );
                if ( tiers > 1 ) {
                    formattedTieredPrices.push( this.formatTier( {
                        tieredPrice: tieredPrices[ tiers - 1 ], //last tier
                        treatAsLastTier: true,
                        label: true,
                        colorwayPrice: colorwayPrice
                    } ) );
                }
            }
            colorwayPrice.formattedTieredPrices = formattedTieredPrices;
            var firstPromotionMap = productThumbnail.firstPromotionMap;
            if ( firstPromotionMap && firstPromotionMap.APPLICABLE_TO_ALL_UPCS === "true" ) {
                productThumbnail.firstPromotion = firstPromotionMap.BADGE_TEXT;
            } else {
                productThumbnail.firstPromotion = "";
            }
        }
    };

} );
