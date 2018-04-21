//#MODULE - RRSearchPage
//> Author: Lucas Estevão
//> Create Date: Jan 12st, 2015
//
//##DESCRIPTION: Specific RichRelevance page module (Search Page).
//This will contain specific setup for RR api call.
//It must extend RichRelevance module which contains the api common setup.

define( [
    'jquery',
    'thumbnailCarousel/richRelevance/RichRelevance',
    'underscore'
], function ( $, RichRelevance, _ ) {

    'use strict';

    var RRSearchPage = function ( options ) {
        this.initialize( options );
    };

    _.extend( RRSearchPage.prototype, RichRelevance.prototype, {
        maxProdIds: 15,
        initialize: function ( options ) {

            window[ 'R3_SEARCH' ] = this.r3Search = new window[ 'r3_search' ]();


            RichRelevance.prototype.initialize( options );
            this.r3Search.setTerms( options.searchTerms );


            var prodIndex = options.products.length > this.maxProdIds ? this.maxProdIds - 1 : options.products.length - 1;
            // provide product IDs for items displayed on the search page (LIMIT of 15)
            for ( prodIndex; prodIndex >= 0; prodIndex-- ) {
                this.r3Search.addItemId( options.products[ prodIndex ].productId ); // if item has parent ID, pass the parent ID
            }


        }

    } );

    return RRSearchPage;
} );
