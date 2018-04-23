//#MODULE - Personalized Widget Flow
//>
//##DESCRIPTION: Configure the Personalized Widget Helpers

define( [ 'jquery', 'handlebars', 'globals' ], function ( $, Handlebars, Globals ) {
    Handlebars.registerHelper( 'getPersonalizedMessage', function ( obj ) {
        var MACYS = window.MACYS,
            pageId = ( $( "#pageId" ).val() ) ? ( $( "#pageId" ).val() ) : "search_results",
            message, reviewNum, reviewerPercent = 0,
            reviewStars, reviewLink;
        if ( ( Globals.getValue( 'props.gamificationEntryPointForReviewsEnabled' ) === 'true' ) ) {
            reviewLink = "/account/myreviews?cm_sp=gamification-_-" + pageId + "-_-view_myreviews";
        } else {
            reviewLink = "/service/order-status?cm_sp=gamification-_-" + pageId + "-_-review_widget";
        }


        if ( ( obj.reviewCount === 0 ) && ( obj.orderDate !== '' ) ) {
            reviewStars = '<div><span class="personalizedReview"><span id="topReviewerPercentageId" style="width: ' + reviewerPercent + '%"></span></span></div>';
            message = reviewStars + "Hi, <b>" + obj.fname + "</b>! You made a purchase on " + obj.orderDate + "—<strong>tell us what you think!</strong> <a href=" + reviewLink + ">write a review</a>";
        } else if ( ( obj.reviewCount > 0 ) && ( obj.reviewCount < 5 ) ) {
            reviewNum = 5 - obj.reviewCount;
            reviewerPercent = obj.reviewCount * 20;
            reviewStars = '<div><span class="personalizedReview"><span id="topReviewerPercentageId" style="width: ' + reviewerPercent + '%"></span></span></div>';
            message = reviewStars + "Hi, <b>" + obj.fname + "</b>!<br /> You’ve written " + obj.reviewCount + " review(s) so far—write <strong>" + reviewNum + " more</strong> to become a <b>top reviewer!</b> <a href=" + reviewLink + ">write a review</a>";
        } else {
            reviewerPercent = 100;
            reviewStars = '<div><span class="personalizedReview"><span id="topReviewerPercentageId" style="width: ' + reviewerPercent + '%"></span></span></div>';
            message = reviewStars + "Congrats, <b>" + obj.fname + "</b>! You're a <strong>top reviewer</strong> on macys.com! <a href=" + reviewLink + ">write more reviews</a>";
        }
        return new Handlebars.SafeString( message );
    } );
    return Handlebars;
} );
