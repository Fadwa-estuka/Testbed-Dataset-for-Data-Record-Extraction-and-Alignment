//#MODULE - Product Thumbnail Loader
//> Author: Tiago Garcia
//> Create Date: June 5, 2014
//
//##DESCRIPTION: This is used to load Product Thumbnails from JSON script tags.
define( [ 'jquery', 'underscore' ], function ( $, _ ) {

    "use strict";

    //### The list of current product thumbnails views
    var currentViews = [];

    //###Method - buildProductThumbnailList
    //This method loads product thumbnails from JSON script tags on the page
    //and returns a list with ProductThumbnailModels from those JSON objects.
    //> parameters
    //>
    //+ *ProductThumbnailModel* - the brand-specific model for Product Thumbnail
    //+ *parentElementSelector* - the parent element selector
    //
    //> returns
    //>
    //+ An instance of ProductThumbnailCollection with models for current color swatches.
    function buildProductThumbnailList( ProductThumbnailModel, parentElementSelector ) {
        var categoryJSON,
            categorySuppressColorSwatches,
            productThumbnailJSONElementList,
            productThumbnailList = [],
            gridParentElement = $( parentElementSelector ),
            categoryJSONElement = gridParentElement.find( 'script[data-type="category-json"]' );

        if ( categoryJSONElement.length ) {
            // Category JSON
            try {
                categoryJSON = JSON.parse( categoryJSONElement.html() );
                categorySuppressColorSwatches = categoryJSON.suppressColorSwatches;
                delete categoryJSON.suppressColorSwatches;
            } catch ( e ) {
                categoryJSON = {};
                categorySuppressColorSwatches = false;
            }

            // Product Thumbnail JSON
            productThumbnailJSONElementList = gridParentElement.find( 'script[data-type="product-thumbnail-json"]' );

            productThumbnailJSONElementList.each( function () {
                var productThumbnailModel,
                    productThumbnailJSON,
                    data,
                    $this = $( this );

                try {
                    productThumbnailJSON = JSON.parse( $this.html() );
                } catch ( e ) {
                    productThumbnailJSON = {};
                }

                data = _.extend( {}, categoryJSON, productThumbnailJSON );

                data.suppressColorSwatches = data.suppressColorSwatches || categorySuppressColorSwatches;
                data.elementId = $this.closest( '.productThumbnail, .cmioProductThumbnail' ).attr( 'id' );
                data.uniqueId = $this.attr( 'data-unique-id' ) || data.id;

                productThumbnailModel = new ProductThumbnailModel( data );
                productThumbnailList.push( productThumbnailModel );
            } );
        }

        return productThumbnailList;
    }

    //###Method - cleanCurrentViews
    //This method cleans up current product thumbnails views.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ (none)
    function cleanCurrentViews() {
        _.each( currentViews, function ( currentView, index, currentViews ) {
            currentView.remove();
            //NOTE: This is causing memory leak because it doesn't actually delete the index --> delete currentViews[ index ];
        } );
        //NOTE: This is how we will "delete" this array from now on, and not the above...remove these comments once this is verified.
        currentViews = [];
    }

    //###Method - loadProductThumbnail
    //This method coordinates the whole process of loading product thumbnails.
    //> parameters
    //>
    //+ *ProductThumbnailModel* - the brand-specific model for product thumbnails
    //+ *ProductThumbnailView* - the brand-specific view for product thumbnails
    //+ *parentElementSelector* - the parent element selector
    //+ *customGetProductThumbnailEl* - custom function for getting the product thumbnail el
    //
    //> returns
    //>
    //+ (none)
    function loadProductThumbnails( ProductThumbnailModel, ProductThumbnailView, parentElementSelector, customGetProductThumbnailEl ) {
        var productThumbnailList = buildProductThumbnailList( ProductThumbnailModel, parentElementSelector ),
            getEl = customGetProductThumbnailEl || getProductThumbnailEl;

        cleanCurrentViews();

        _.each( productThumbnailList, function ( productThumbnailModel ) {
            var productThumbnailView = new ProductThumbnailView( {
                model: productThumbnailModel,
                el: getEl( productThumbnailModel )
            } );
            productThumbnailView.render();

            currentViews.push( productThumbnailView );
        } );
    }

    //###Method - getProductThumbnailEl
    //This method gets the product thumbnail et
    //> parameters
    //>
    //+ *productThumbnailModel* - the brand-specific model instance for product thumbnails
    //
    //> returns
    //>
    //+ the el for the product thumbnail
    function getProductThumbnailEl( productThumbnailModel ) {
        return $( '#' + productThumbnailModel.get( 'elementId' ) );
    }

    //###Method - activateSelectedFacets
    //This method permanently activates color swatches selected by facets.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ (none)
    function activateSelectedFacets( selectedFacets ) {
        if ( selectedFacets && selectedFacets.length ) {

            _.each( currentViews, function ( productThumbnailView ) {
                productThumbnailView.activateSelectedFacets( selectedFacets );
            } );
        }
    }

    //###Method - selectPersistedSwatches
    //This method permanently activates color swatches persisted in cache.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ (none)
    function selectPersistedSwatches() {
        _.each( currentViews, function ( productThumbnailView ) {
            productThumbnailView.selectPersistedSwatches();
        } );
    }

    return {
        loadProductThumbnails: loadProductThumbnails,
        activateSelectedFacets: activateSelectedFacets,
        selectPersistedSwatches: selectPersistedSwatches
    };

} );
