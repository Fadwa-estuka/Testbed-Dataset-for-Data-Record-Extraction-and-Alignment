define( [
    'jquery',
    'underscore',
    'handlebars',
    'globals',
    'iShip',
    'prosTrackingHelper',
    'cookie'
], function ( $, _, Handlebars, Globals, iShip, ProsTrackingHelper, Cookie ) {

    function getImageHost() {
        var imageHost = Globals.getValue( "props.imageHost" );
        if ( !imageHost ) {
            imageHost = 'http://macys-o.scene7.com/is/image/MCY';
        }
        return imageHost;
    }

    function formatPrice( price ) {
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
    }

    function outputPrice( singlePrice, minPrice, maxPrice, isMaster ) {
        var price, currency;

        if ( !singlePrice && !minPrice && !maxPrice ) {
            return "";
        }

        price = ( isMaster && ( minPrice > 0 ) ) ? formatPrice( minPrice ) + " - " + formatPrice( maxPrice ) : formatPrice( singlePrice );

        price = price.replace( /\,/g, "" );

        currency = iShip.getCurrencyCode( iShip.getShippingCountry() );

        var parts = price.split( '-' );
        if ( parts[ 0 ] !== undefined ) {
            parts[ 0 ] = parseFloat( $.trim( parts[ 0 ] ) ).toFixed( 2 );
        }
        if ( parts[ 1 ] !== undefined ) {
            parts[ 1 ] = parseFloat( $.trim( parts[ 1 ] ) ).toFixed( 2 );
        }
        price = parts.join( " - " );
        price = price.replace( /(\d)(?=(\d{3})+(?!\d))/g, "$1," );
        return currency + ( currency !== '$' ? ' ' : '' ) + price;
    }

    Handlebars.registerHelper( 'getImageLink', function ( imageSource, imageSpec ) {
        if ( !imageSpec ) {
            imageSpec = {};
        }
        var width = imageSpec.width,
            height = imageSpec.height;

        var imageUrl = getImageHost() +
            "/products/" + imageSource + "?$filtersm$";
        if ( width ) {
            imageUrl = imageUrl + '&wid=' + width;
        }
        if ( height ) {
            imageUrl = imageUrl + '&hei=' + height;
        }
        return imageUrl;
    } );

    Handlebars.registerHelper( 'decodeRecommendationHeader', function ( header ) {
        var customerNameLabl = 'CustomerName',
            headerVariables,
            dynamicVariable,
            defaultVariableValue,
            username;
        header = decodeURIComponent( header.replace( /\+/g, ' ' ) );
        headerVariables = header.match( /<<(.*?)>>/g );
        if ( headerVariables ) {
            headerVariables.forEach( function ( dynamicStructure ) {
                dynamicVariable = dynamicStructure.split( '::' )[ 0 ].replace( /<</, '' );
                defaultVariableValue = dynamicStructure.split( '::' )[ 1 ].replace( />>/, '' );

                if ( ~dynamicVariable.indexOf( customerNameLabl ) ) {
                    username = Cookie.get( "UserName", "GCs" );
                    if ( username ) {
                        dynamicVariable = dynamicVariable.replace( /CustomerName/, username );
                    } else {
                        dynamicVariable = defaultVariableValue;
                    }
                } else {
                    dynamicVariable = defaultVariableValue;
                }
                header = header.replace( dynamicStructure, dynamicVariable );
            } );
        }
        return header;
    } );

    Handlebars.registerHelper( 'getProductLink', function () {
        return this.productThumbnail.semanticURL +
            "&CategoryID=" + this.productThumbnail.defaultCategoryId +
            '&' + ProsTrackingHelper.getCMQuery( this.options.tracking, this.index );
    } );



    Handlebars.registerHelper( "getImageHost", getImageHost );

    Handlebars.registerHelper( "getQuickViewClass", function ( isMasterProduct ) {
        return ( isMasterProduct ) ? "" : "qvEnabled";
    } );

    Handlebars.registerHelper( "getValues", function ( object ) {
        return object ? _.values( object ) : "";
    } );

    Handlebars.registerHelper( 'getJson', function ( object ) {
        return JSON.stringify( object );
    } );

    Handlebars.registerHelper( "elipsis", function ( description, charLimit ) {
        if ( typeof charLimit !== 'number' ) {
            charLimit = 30;
        }
        if ( description && description.length > charLimit ) {
            return description.substring( 0, charLimit - 2 ) + "...";
        } else {
            return description;
        }

    } );

    /**
     * This is to shorten the member product name by taking out the master product description
     * which will be prefixed in the member production description.
     *
     * Example Usuage:
     * 	  masterName: "Fiesta Dinnerware" or "Fiesta Dinnerware Collection"
     *    memberName: "Fiesta Dinnerware 4-Piece Place Setting Collection"
     *
     * 	  {{shortenMemberName masterName memberName}}
     *    Output: "4-Piece Place Setting Coll..."
     *
     *    {{shortenMemberName masterName memberName false}}
     *    Output: "4-Piece Place Setting Collection"
     */
    Handlebars.registerHelper( "shortenMemberName", function ( masterName, memberName, isElipsis ) {
        var retVal = memberName;

        if ( masterName && memberName ) {
            var mas = masterName.trim().split( " " ),
                masLen = mas.length,
                mem = memberName.trim().split( " " ),
                memLen = mem.length;
            for ( var i = 0; i < masLen && i < memLen; i++ ) {
                if ( mas[ i ].match( mem[ i ] ) === null ) {
                    retVal = mem.slice( i ).join( " " );
                    break;
                }
            }
        }
        return ( isElipsis === false ) ? retVal : Handlebars.helpers.elipsis( retVal );
    } );

    //Handlebars helper for rating elipses
    Handlebars.registerHelper( "rating", function ( rating ) {
        return rating * 20 + '%';
    } );

    //Handlebars helper for formatting price to two decimal
    Handlebars.registerHelper( 'formatPrice', formatPrice );

    //Handlebars helper used on PROS panel, format prices and create range prices for master products
    Handlebars.registerHelper( 'outputPrice', outputPrice );

    Handlebars.registerHelper( 'outputFormattedPrice', function ( value, symbol ) {
        var price = formatPrice( value ).toString();
        price = price.replace( /(\d)(?=(\d{3})+(?!\d))/g, "$1," );
        var currency = iShip.getCurrencyCode( iShip.getShippingCountry() );
        return symbol ? ( currency + ( currency !== '$' ? ' ' : '' ) + price ) : price;
    } );

    //Handlebars helper used on PROS panel for Colorway, format label and prices with range
    Handlebars.registerHelper( 'outputTieredPrice', function ( label, values ) {
        var price, priceRange, currency;

        if ( !values ) {
            return "";
        }

        price = ( values.length > 1 && values[ 0 ] > 0 ) ? formatPrice( values[ 0 ] ) + " - " + formatPrice( values[ 1 ] ) : formatPrice( values[ 0 ] );

        price = price.replace( /\,/g, "" );

        currency = iShip.getCurrencyCode( iShip.getShippingCountry() );

        var parts = price.split( '-' );
        if ( parts[ 0 ] !== undefined ) {
            parts[ 0 ] = parseFloat( $.trim( parts[ 0 ] ) ).toFixed( 2 );
        }
        if ( parts[ 1 ] !== undefined ) {
            parts[ 1 ] = parseFloat( $.trim( parts[ 1 ] ) ).toFixed( 2 );
        }

        currency = currency + ( currency !== '$' ? ' ' : '' );
        price = parts.join( " - " + currency );
        price = price.replace( /(\d)(?=(\d{3})+(?!\d))/g, "$1," );
        priceRange = currency + price;

        if ( values.length > 1 ) {
            priceRange = priceRange.split( '-' );
            priceRange = priceRange[ 0 ] + '- ' + parts[ 1 ];
        }

        return label.replace( '[PRICE]', priceRange );
    } );

    //Handlebars helper used on PROS panel for Colorway, choose css class according to type
    Handlebars.registerHelper( 'tieredPriceClass', function ( colorwayPrice ) {
        var type = this.type || "";
        var value = this.value || [];
        var cssClass = [ 'priceTier' ];
        cssClass.push( type.toLowerCase().replace( /(\s|_)/, "-" ) );
        if ( colorwayPrice && type !== "ORIG" && type !== "REG" ) {
            if ( colorwayPrice.onSale ) {
                cssClass.push( "markedDown" );
            } else if ( colorwayPrice.upcOnSale && value.length > 1 ) {
                cssClass.push( "upcMarkedDown" );
            }
        }
        return cssClass.join( ' ' );
    } );

    Handlebars.registerHelper( 'decoratePriceTierLabel', function ( options ) {
        if ( !this.label ) {
            return "";
        }
        var inner = $.trim( options.fn( this ) );
        return new Handlebars.SafeString( this.label.replace( '[PRICE]', inner ) );
    } );

    Handlebars.registerHelper( 'decoratePriceTierNoLabel', function ( options ) {
        if ( !this.label ) {
            return "";
        }
        var inner = $.trim( options.fn( this ) );
        return new Handlebars.SafeString( inner );
    } );

    //Handlebars helper for math operations  e.g. {{1 "+" 1}} will print 2
    Handlebars.registerHelper( "math", function ( lvalue, operator, rvalue ) {
        lvalue = parseFloat( lvalue );
        rvalue = parseFloat( rvalue );

        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[ operator ];
    } );

    /**
     * This is to convert the price values in the text to corresponding currency of the shipping country.
     *
     * Example Usuage: Consider user Shipping Country -IN
     * 	  text: "Buy 3 for $50"
     *    text1: Buy 3 for $50.00 - 60.00
     *
     * 	  {{convertPromoPrice text}}
     *    Output: "Buy 3 for INR 3,905"
     *
     *    {{convertPromoPrice text1}}
     *    Output: "Buy 3 for INR 3,905 - 4,686"
     */
    Handlebars.registerHelper( 'convertPromoPrice', function ( text ) {
        var str = ( text ) ? text : '';
        if ( iShip.isInternationalMode() ) {
            var currency = iShip.getCurrencyCode( iShip.getShippingCountry() );
            var prices = [];
            if ( str.match( /[$][\s]?[\d\.,]+ - [\d\.,]+/ ) ) {
                prices = str.match( /[\d,]+[\.][\d]+/g );
                if ( prices ) {
                    for ( var i = 0; i < 2; i++ ) {
                        prices[ i ] = prices[ i ].replace( /,/g, "" );
                        prices[ i ] = iShip.convertPrice( prices[ i ] );
                    }
                    str = str.replace( ( /[$][\d\.,]+ - [\d\.,]+/ ), currency + " " + prices[ 0 ] + " - " + prices[ 1 ] );
                }
            } else {
                prices = str.match( /[$][\s]?[\d,]+[\.][\d]+|[$][\s]?[\d,]+/g );
                if ( prices ) {
                    for ( var j = 0; j < prices.length; j++ ) {
                        prices[ j ] = prices[ j ].replace( /,/g, "" ).replace( "$", "" );
                        prices[ j ] = iShip.convertPrice( prices[ j ] );
                    }
                    var index = 0;
                    str = str.replace( ( /[$][\s]?[\d,]+[\.][\d]+|[$][\s]?[\d,]+/g ), function () {
                        return currency + " " + prices[ index++ ];
                    } );
                }
            }
            return str;
        } else {
            return str;
        }
    } );

    /**
     * This is to form the url for given src by reading the imageHost values from props.
     *
     *  Example usage:
     *
     *  imageSrc : shoes
     *
     *  {{getPromoImageLink imageSrc}}
     *  output: http://macys-o.scene7.com/products/shoes.tif?$filtersm$"
     */
    Handlebars.registerHelper( 'getPromoImageLink', function ( imageSrc ) {
        return ( imageSrc ) ? Handlebars.helpers.getImageLink( imageSrc + '.tif' ) : "";
    } );


    return {
        formatPrice: formatPrice,
        outputPrice: outputPrice
    };


} );
