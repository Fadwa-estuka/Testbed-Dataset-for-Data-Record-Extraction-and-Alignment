define( [ 'jquery', 'quickBag/models/QuickBag', 'globals', 'bagContent', 'cookie' ], function ( $, QuickBagModel, Globals, bagContent, Cookie ) {
    var quickBagModel = new QuickBagModel();
    return {

        getBagModel: function () {
            var bagModel;
            if ( Globals.getValue( "props.refactoredQuickBag" ) !== "true" ) {
                bagModel = bagContent.getBagModel();
            } else {
                bagModel = quickBagModel.getBagContents();
            }
            return bagModel;
        },
        getRestCallParams: function () {
            var params = {},
                category = $( '#categoryId' ),
                categoryIdFromUrl = location.search.match( /[&|?]CategoryID=([^&]+)/i ),
                bagModel = this.getBagModel();

            if ( bagModel.param && bagModel.param.bagContents ) {
                params.bagContents = bagModel.param.bagContents;
            }

            if ( category && category.val() ) {
                params.categoryId = category.val();
            } else if ( categoryIdFromUrl ) {
                params.categoryId = categoryIdFromUrl[ 1 ];
            } else if ( bagModel.categories && bagModel.categories.length ) {
                params.categoryId = bagModel.categories[ bagModel.categories.length - 1 ];
            }

            if ( bagModel.bagId ) {
                params.bagId = bagModel.bagId;
            }

            return params;
        },
        getBagItemsParams: function () {
            var bagItems = "",
                bagModel = this.getBagModel();
            if ( bagModel && bagModel.products && bagModel.products.length && Cookie.get( "CartItem", "GCs" ) ) {
                bagItems = '&bList=' + bagModel.products.join( '|' );
            }
            return bagItems;
        }
    };
} );
