define( [ 'jquery', 'underscore', 'recommendation' ], function ( $, _, Recommendation ) {

    return function () {
        var lastPresentedIndex = {},
            presentedIds = [],
            viewedPages = [];
        var hasBeenPresented = function ( id ) {
            return presentedIds[ id ] ? true : false;
        };
        return {
            'carousel:presented': function ( event ) {

                if ( !event.recommendationsOpts || !event.recommendationsOpts.requester || !event.zone || !event.killswitches.trackingPixel ) {
                    return;
                }

                var zone = event.zone,
                    lastIndex = lastPresentedIndex[ zone ];

                if ( lastIndex && lastIndex === event.index ) {
                    return;
                }

                lastPresentedIndex[ zone ] = event.index;

                var productIds = [],
                    choiceIds = [],
                    visitorId = Recommendation.getRTDSessionCookie(),
                    productIdsWithPos = [];

                _.each( event.thumbs, function ( thumb, index ) {
                    if ( hasBeenPresented( zone + thumb.id ) ) {
                        return;
                    }

                    presentedIds[ zone + thumb.id ] = true;
                    productIds.push( thumb.id );
                    choiceIds.push( thumb.attributes.choiceId );
                    productIdsWithPos.push( thumb.id + '_Pos' + ( ( index + 1 ) + ( event.page - 1 ) * event.pagination ) );
                } );

                productIds = productIds.join( '|' );
                choiceIds = choiceIds.join( '|' );
                productIdsWithPos = productIdsWithPos.join( '|' );

                if ( choiceIds && productIds && visitorId ) {
                    //Pixel and scrolled informant calls
                    var informantType;
                    if ( event.page === 1 && !viewedPages.length ) {
                        informantType = 'PixelPresented';
                    } else {
                        informantType = 'scrolled';
                    }
                    Recommendation.sendPixelInformantCalled(
                        event.recommendationsOpts.requester,
                        event.zone,
                        informantType,
                        choiceIds,
                        productIdsWithPos,
                        visitorId,
                        false,
                        event.bagItemHelper.getBagItemsParams()
                    );
                    viewedPages.push( event.page );
                }
            },
            'carousel:clicked': function ( event ) {

                var element = event.wrappedEvent.target;
                var trackingDiv = $( element ).parents( '.thumb' ).find( '.prosTrackingDiv' );
                if ( trackingDiv && trackingDiv[ 0 ] ) {
                    var thumbData = $( element ).parents( '.thumb' ).data();

                    Recommendation.clickNotification( {
                        url: thumbData.clickTrackingUrl
                    } );
                }
            }
        };
    };

} );
