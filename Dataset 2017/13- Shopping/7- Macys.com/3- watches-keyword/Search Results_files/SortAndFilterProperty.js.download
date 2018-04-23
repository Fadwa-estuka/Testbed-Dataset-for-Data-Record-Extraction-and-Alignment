define( [ "underscore" ], function ( _ ) {

    var format = function ( data ) {
        var filterData = data.meta,
            selectedFacets = filterData.selectedFacets,
            pCount = ( filterData.productIds && filterData.productIds.length ) || "0",
            pgSize = data.productsPerPage || "",
            pgN = data.pageIndex || "",
            sort = data.sortBy || "",
            excludeFromReqParam = [ 'BRAND', 'PRICE', 'CUSTRATINGS' ],
            hlfilterParams = _.omit( selectedFacets, excludeFromReqParam ),
            view = sessionStorage.getItem( 'gridType' ) || "",
            price = selectedFacets.PRICE && selectedFacets.PRICE.join( "|" ).split( "|" ),
            minPrice = ( _.isArray( price ) && price[ 0 ] ) || "",
            maxPrice = ( _.isArray( price ) && price[ price.length - 1 ] ) || "",
            minRating = ( selectedFacets.CUSTRATINGS && selectedFacets.CUSTRATINGS[ selectedFacets.CUSTRATINGS.length - 1 ].charAt( 0 ) ) || "",
            organicSKUs = "",
            brand = "",
            filters;

        _.each( selectedFacets.BRAND, function ( value, key, item ) {
            brand = ( key < selectedFacets.BRAND.length - 1 ) ? brand + item[ key ] + "|" : brand + item[ key ];
        } );

        _.each( filterData.productIds, function ( value, key, item ) {
            organicSKUs = ( key < filterData.productIds.length - 1 ) ? organicSKUs + item[ key ] + "|" : organicSKUs + item[ key ];
        } );

        filters = _.mapObject( hlfilterParams, function ( value ) {
            return value.join( "|" );
        } );

        return {
            properties: {
                minRating: minRating,
                minPrice: minPrice,
                maxPrice: maxPrice,
                view: view,
                pCount: pCount,
                pgSize: pgSize,
                pgN: pgN,
                sort: sort,
                brand: brand,
                organicSKUs: organicSKUs
            },
            filters: filters
        };
    };

    return {
        format: format
    };

} );
