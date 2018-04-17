  $(document).ready(function () {

        /* NOTE TO FRONT END DEVELOPERS: this code to be removed when compiled in new framework */


        /*This is calling classes that triggers equal height*/        
        
        $('.link-height-wrapper').matchHeight({});
        $('.group-promo-message').matchHeight({});
        $('.product-title-wrapper').matchHeight({});
        $('.equal-height-wrapper').matchHeight({});
        $('.theme-wrapper').matchHeight({});
        $('.theme-wrapper-special').matchHeight({});
        $('.theme-wrapper-special-plain').matchHeight({});
        $('.layout-item').matchHeight({});
        $('.layout-wrapper').matchHeight({});
        
        /*This is for adding the first wrapper class on the first div with layout-wrapper*/
        
        $('#pagecontentmain2 .layout-wrapper, #pagesubcontent .layout-wrapper, #pagecontent .layout-wrapper').eq(0).addClass('first-wrapper')

  });
