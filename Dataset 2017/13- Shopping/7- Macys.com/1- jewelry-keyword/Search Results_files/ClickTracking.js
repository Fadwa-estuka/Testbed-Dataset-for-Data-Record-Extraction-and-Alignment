define( [ "jquery", "mcomAnalytics" ], function ( $, Analytics ) {

    function linkClickonAds( pageType ) {
        $( 'body' ).on( "click", ".hl-container a", function ( ev ) {
            var target = $( this ).data(),
                slot = target.hlPosition,
                productId = target.hlProductid,
                destURL = target.hlDest;

            Analytics.linkClickTag( {
                href: destURL + "&cm_sp=site_monetization-_-" + pageType + "_ad" + slot + "-_-" + productId
            } );
        } );
    }

    return {
        linkClickonAds: linkClickonAds
    };
} );
