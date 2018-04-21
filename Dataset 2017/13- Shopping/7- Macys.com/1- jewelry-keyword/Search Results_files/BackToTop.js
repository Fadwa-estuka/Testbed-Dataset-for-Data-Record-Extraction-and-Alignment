//#MODULE - MCOM BackToTop element
//> Author: Craig Pestell
//> Create Date: March 4, 2015
//
//##DESCRIPTION: BackToTop is a component which sits in a fixed position o the
//               page, but above the pagination, and has an onclick event which
//               scrolls the webpage to the top.

define( [ 'globals', 'jquery', 'mcomAnalytics', "contextFramework", "mcomjs/components/gridView/ProductsPerPageDropDownView", "segmentation" ],
    function ( Globals, $, cmAnalytics, ContextFramework, PPPDropDownView, Segmentation ) {

        var pageName,
            $window,
            $backToTop,
            $header,
            $container,
            $pagination,
            $footer,
            containerId = '',
            scrollThreshold = 25, //percent of screen height to scroll down
            //before showing backToTop
            scrollingOpacity = 0.1,
            MACYS = window.MACYS,
            //BEGIN: Additional variables for CnF Nav 16C experiment
            btnClass = "",
            paginationController,
            bttTestEnabled;
        //END: Additional variables for CnF Nav 16C experiment


        //###Method - initialize
        //This method initializes this component. Sets jquery selector
        //variables, sets the onclick event handler, and sets the
        //window.scroll and window.resize event handlers
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        var init = function () {
            bttTestEnabled = Globals.getValue( "props.cnfNavBackToTopTestEnabled" );
            pageName = Globals.getValue( 'page.pageName' ) || "";

            paginationController = getPaginationController();

            if ( bttTestEnabled ) {
                btnClass = "darkText";
            }

            $window = $( window );
            $backToTop = $( '<div>', {
                id: 'backToTop',
                "class": btnClass //ADDED FOR CnF Nav 16C Experiment
            } );
            $header = $( '#hd' );
            $container = $( '#globalContentContainer' );
            $pagination = $container.find( '#paginateBottom' );
            $footer = $( '#ft' );

            $backToTop.click( clickEvent );

            $container.prepend( $backToTop );

            // trigger scroll only if its tablet or browse grid ui enhancements kill switch enabled
            if ( Globals.getValue( 'props.bgvUiEnhancementsEnabled' ) || ContextFramework.device.getDevice() === "TABLET" ) {
                $window.load( function () {
                    $window.on( 'scroll', scroll );
                    $window.on( 'resize', scroll );
                    scroll();
                } );
            }
        };

        var clickEvent = function () {
            var selectedPPP = $( '#itemsPP' ).val(),
                allExpStartPageIndex = paginationController.getAllExpStartPageIndex();

            if ( "undefined" !== allExpStartPageIndex && allExpStartPageIndex > 1 && selectedPPP === 'All' ) {
                paginationController.backToTopClick = true;
                $( 'html,body' ).animate( {
                    scrollTop: 0
                }, 'slow', function () {
                    var event = $.Event( "click .pppOption" );
                    event.type = 'click';
                    event.dataVal = "BackToTopClickEvent";
                    // To trigger one time click All Event
                    $( '#filterPPP .ppp:not(.hidden) .pppOption.pppAll' ).trigger( event );
                } );
            } else {
                $( 'html,body' ).animate( {
                    scrollTop: 0
                }, 'slow' );
            }


            // hide overlay container when clicked
            if ( $( '#overlay-container' ).length !== 0 ) {
                $( '#overlay-container' ).remove();
            }

            var attrs = [];
            attrs[ 0 ] = pageName;

            //END: Handle KS Check and additional analytics attribute for CnF Nav 16C Experiment
            var trackingInfo = {
                elementID: $( '#itemsPP' ).val(),
                elementCategory: "Back to Top",
                attributes: attrs
            };

            cmAnalytics.elementTag( trackingInfo );
            return false;
        };

        //###Method - scroll
        //This method is called on $window.scroll and $window.resize events to
        //position and style the backToTop component.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        var scroll = function () {

            if ( bttTestEnabled ) {
                var left = ( $( window ).width() - $container.width() ) / 2 + $container.outerWidth() + 20,
                    breakpoint = $container.outerWidth() + ( ( $( window ).width() - $container.width() ) / 2 ) + 90;

                if ( $window.width() < breakpoint ) {
                    left = $( window ).width() - 80;
                }
                $backToTop.css( {
                    left: left + 'px'
                } );
                positionTop();
                fade();

            } else {
                var right = 0,
                    outsideGrid;

                if ( $window.width() > $container.width() ) {
                    /* to place outside the grid in desktop when no margin is available 
                     * (there is less than 8px + button width), back to top button should
                     * appear inside thumbnail grid.
                     */
                    outsideGrid = ( $window.width() < 1093 ) ? 10 : 70;
                    right = ( $window.width() - $container.outerWidth() ) / 2 - outsideGrid;
                }
                $backToTop.css( {
                    right: right + 'px'
                } );
                positionTop();
                fade();
            }
        };

        //###Method - positionTop
        //This method sets the backToTop 'top' CSS property to position the element
        //at the bottom of the window unless the pagination element is visible, in
        //which case the element is positioned on top of the pagination.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        var positionTop = function () {

            var top = $footer.offset().top,
                fromTopToFold = $window.scrollTop() + getWindowHeight(),
                adjustedTop = getWindowHeight() - $backToTop.outerHeight( true );

            /*
             * The 'top' property is defined as the height of the window minus the
             * height of the 'back to top' determining the position of the footer.
             */

            if ( fromTopToFold > top ) {
                adjustedTop = adjustedTop - ( fromTopToFold - top );
            }

            if ( bttTestEnabled ) {
                $backToTop.css( {
                    top: ( adjustedTop - 30 ) + 'px'
                } );
            } else {
                $backToTop.css( {
                    top: adjustedTop + 'px'
                } );
            }
        };

        //###Method - fade
        //This method 'fades' (sets the 'opacity' CSS property) of the backTop
        //element to 0 if the element should not be visible, or scrollingOpacity
        //otherwise.  Once that is complete, the opacity will be set to 1 if the
        //element should be visible.
        //> parameters
        //>
        //+ (none)
        //
        //> returns
        //>
        //+ (none)
        var fade = function () {
            var thresholdPx = getWindowHeight() * ( scrollThreshold / 100 );

            if ( $window.scrollTop() > thresholdPx ) {
                // Fade to scrollingOpacity if element should be visible.
                $backToTop.stop().fadeTo( 20, scrollingOpacity );
            } else {
                // Hide the element.
                $backToTop.hide();
            }

            clearTimeout( $.data( this, 'backToTopScrollTimer' ) );

            //After user stops scrolling possibly fadeIn.
            $.data( this, 'backToTopScrollTimer', setTimeout( function () {
                // Show the element if the window is scrolled past the threshold.
                if ( $window.scrollTop() > thresholdPx ) {
                    $backToTop.stop().fadeTo( 200, 1 );
                }
            }, 100 ) );
        };


        function getWindowHeight() {
            return ( window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight );
        }

        function unbind() {
            $window.off( 'scroll', scroll );
            $window.off( 'resize', scroll );
        }

        function getPaginationController() {
            //if ( typeof window.MACYS !== 'undefined' && typeof MACYS.Pagination !== 'undefined' && typeof window.MACYS.Pagination.paginationCtrl !== 'undefined' ) {
            if ( typeof MACYS.Pagination === "object" && typeof MACYS.Pagination.paginationCtrl === "object" && MACYS.Pagination.paginationCtrl.getAllExpStartPageIndex ) {
                return MACYS.Pagination.paginationCtrl;
            } else {
                //Return an object with the method we need if pagination controller isn't loaded.  Default to page 1.
                return {
                    getAllExpStartPageIndex: function () {
                        return 1;
                    }
                };
            }
        }

        function setPaginationController( obj ) {
            paginationController = obj;
        }

        return {
            init: init,
            setPaginationController: setPaginationController,
            unbind: unbind
        };
    } );
