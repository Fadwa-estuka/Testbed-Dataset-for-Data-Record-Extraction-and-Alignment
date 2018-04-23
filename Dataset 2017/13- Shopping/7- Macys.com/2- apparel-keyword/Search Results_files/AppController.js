define( 'cmElement',[ 'mcomAnalytics' ], function ( Analytics ) {

    var getCoremetricsElementTag = function ( btnClickedFlag, elementId, elementCategoryId ) {
        if ( btnClickedFlag === true ) {
            var elementTagObj = {
                elementID: elementId,
                elementCategory: elementCategoryId,
                attributes: []
            };
            Analytics.elementTag( elementTagObj );
        }
    };
    var getConvertionEventTag = function ( conversionEventId, conversionActionType, conversionCategoryID ) {
        coreMetricsObj = {
            conversionTagEventId: conversionEventId,
            conversionTagEventActionType: conversionActionType,
            conversionTagEventCategoryID: conversionCategoryID

        };
        Analytics.ConversionEventTag( coreMetricsObj );
    };
    var getPageViewTag = function ( pageIDVal, categoryIDVal, searchStringVal, searchResultsVal, extraFieldsVal, attributesArr ) {
        var pageViewTag = {
            attributes: attributesArr,
            pageID: pageIDVal,
            categoryID: categoryIDVal,
            searchString: searchStringVal,
            searchResults: searchResultsVal,
            extraFields: extraFieldsVal
        };
        Analytics.pageViewTag( pageViewTag );
    };
    return {
        getCoremetricsElementTag: getCoremetricsElementTag,
        getConvertionEventTag: getConvertionEventTag,
        getPageViewTag: getPageViewTag

    };
} );

//#MODULE - HeaderApp
//> Author: Jake seymour
//>
//> Create Date: April 21, 2014
//>
//##DESCRIPTION: This extends a Backbone View for the Header on Tablet devices. Assumes
// that DOM elements will already be in place and handles event binding and animation for the element.

define( 'headerApp',[ 'jquery', 'globals', 'cmElement', 'mcomAnalytics', 'analyticsBase', 'stringUtil', 'cookie' ], function ( $, Globals, CmElement, cm, aBase, StringUtil, Cookie ) {
    var render = {},
        baseUrlLegacyAssetsStylesMin = Globals.getValue( 'baseUrlLegacyAssetsStylesMin' ),
        breakpoint = Globals.getValue( 'props.tabletUIPixelWidthBreakpoint' ),
        baseHost = Globals.getValue( 'props.baseHost' ),
        fileExtension = ''; // sets the default or experiment extension for CSS
    // files

    render.flyouts = function () {

        // bug http://mingle/projects/seo/cards/3785
        // not sure why on some pages this gets fired twice, which breaks the
        // event bindings by doubling everything
        // I suspect it's due to the large number of 3rd party JS
        // facebook, monetate, bizaarvoice, etc
        require( [ 'headerDesktop', 'segmentation' ], function ( Header, Segmentation ) {

            var $categorySelected, selectedPositionX;

            Header.init( true );

            // TODO remove this logic away from this file
            // CHECK URL is loaded from EMAIL. If URL has parameter 'ocd' or
            // 'ocoffermsg' then load PromoHandler component.
            var url = window.location.href + "";
            if ( url.indexOf( "ocoffermsg" ) !== -1 || url.indexOf( "ocd" ) !== -1 ) {
                var softSignedIn = StringUtil.getURLParameter( "softSignIn" ),
                    softSignInFromEmailEnabled = Globals.getValue( 'props.softSignInFromEmailEnabled' );
                if ( softSignedIn === "true" && softSignInFromEmailEnabled && ( Cookie.get( "SignedIn" ) !== "1" && Cookie.get( "macys_online_guid" ) !== null ) ) {
                    //User is SoftsignedIn, and KS is trurned OFF just show MVP#10 Test Version with new overlay
                    require( [ 'walletPromoHandler' ], function ( WalletPromoHandler ) {
                        WalletPromoHandler.showWalletPromoHeader();
                    } );
                } else {

                    aBase.addListener( aBase.pageViewTag, cm.pageViewTag );

                    var walletNewUxEmailMsgEnabled = Globals.getValue( 'props.walletNewUxEmailMsgEnabled' );
                    if ( walletNewUxEmailMsgEnabled ) {
                        require( [ 'walletPromoHandler' ], function ( WalletPromoHandler ) {
                            WalletPromoHandler.showWalletPromoHeader();
                        } );

                    } else {
                        require( [ 'promoHandler' ], function ( PromoHandler ) {
                            PromoHandler.showPromoHeader();
                        } );
                    }
                }
            }


            $categorySelected = $( '.globalMastheadCategorySelected' );
            selectedPositionX = $categorySelected.length > 0 ? $categorySelected.position().left - 32 : 0;
            $( "div#globalMastheadCategoryMenu ul" ).scrollLeft( selectedPositionX );
        } );
    };

    function init( val ) {
        var that = this,
            isBagPage = ( window.location.href.indexOf( "/bag/index" ) !== -1 || window.location.href.indexOf( "/bag/merge" ) !== -1 || window.location.href.indexOf( "/bag/checkout/merge/" ) !== -1 );

        $( document ).ready( function () {
            if ( !that.isMew() ) {
                render.flyouts();
                require( [ 'segmentation' ], function ( Segmentation ) {

                    //introduced 15E - tablet bag css
                    if ( isBagPage ) {
                        $( 'head' ).append( '<link href="' + baseUrlLegacyAssetsStylesMin + '/mcom/features/bag/bag-tablet-main.css" type="text/css" rel="stylesheet">' );
                    }

                    require( [ 'tabletSearch' ], function ( TabletSearch ) {
                        TabletSearch.init( val );
                    } );

                    //introduced 15D - increases navbar height for tablet
                    $( 'head' ).append( '<link href="' + baseUrlLegacyAssetsStylesMin + '/mcom/features/header/header-tablet-navbar.css" type="text/css" rel="stylesheet">' );


                } );
            }
        } );
    }


    function isMew() {
        /* Testing for MEW (mobile web) by inspecting client subdomain. Testing for these subdomain prefixes:
            m, mdev[digits], mqa[digits]
        */
        var subdomain,
            domainArray,
            mobileProdSubdomain = "m",
            mdevRegex = /^mdev\d+$/,
            mqaRegex = /^mqa\d+$/,
            domain = window.location.hostname,
            isMewResult = false;
        if ( typeof domain === "string" ) {
            domainArray = domain.split( "." );
            subdomain = domainArray[ 0 ];
        }
        if ( ( subdomain === mobileProdSubdomain ) || mdevRegex.test( subdomain ) || mqaRegex.test( subdomain ) ) {
            isMewResult = true;
        }
        return isMewResult;
    }

    return {
        init: init,
        render: render,
        isMew: isMew
    };

} );

//#MODULE - AppController
//> Author: Brenda Jin
//>
//> Create Date: 10/2/14
//>
//##DESCRIPTION: AMD module to manage page-level application after Segmentation Cookie has been set 

define( 'appController',[ 'segmentation', 'headerApp', 'globals', 'jquery' ], function ( Segmentation, HeaderApp, Globals, $ ) {

    function getBreakPoint() {
        return ( Globals.getValue( 'props' ) ) ? Globals.getValue( 'props' ).tabletUIPixelWidthBreakpoint : 1024;
    }

    function isNormalPage() {
        return !Globals.getValue( 'isRegistry' ) && !Globals.getValue( 'isChanel' ) && !Globals.getValue( 'internationalMode' );
    }

    //###Method - init
    //This method initializes components from the AppController
    //
    //
    //> returns
    //>
    //+ Boolean where true it should render a tablet experience and false when it should not

    function init() {
        HeaderApp.init();
    }

    //###Method - isTabletBreakpoint
    //This method determines whether the document is within the tablet breakpoint
    //
    //> returns
    //>
    //+ Boolean where true it is in the tablet breakpoint

    function isTabletBreakpoint() {
        return $( document ).width() <= getBreakPoint();
    }

    //###Method - matchesSegment
    //This method is to be used to determine if the segment is in the segment cookie
    //
    //> returns
    //>
    //+ Boolean where true segment value is in the cookie
    function matchesSegment( segment ) {
        var containsSegment = false;

        function initShow( val ) {
            var FEATURE_SEGMENT = parseInt( segment, 10 );

            if ( parseInt( val, 10 ) === FEATURE_SEGMENT ) {
                containsSegment = true;
            }
        }
        Segmentation.detect( [ segment ], initShow );
        return containsSegment;

    }

    return {
        init: init,
        isTabletBreakpoint: isTabletBreakpoint,
        matchesSegment: matchesSegment
    };
} );

//#MODULE - Analytics
//> Author: Joseph Acosta
//>
//> Create Date: December 18, 2013
//>
//##DESCRIPTION: AMD module that abstracts an analytics implementation via pub sub.
define( 'analyticsQueryString',[ 'underscore', 'commonUtil/PublishSubscribe', 'commonUtil/StringUtil' ], function ( _, pubsub, stringUtil ) {


    //###Namespace - querystring
    //This establishes a namespace for the following functions for code organization and readability.
    //*Description:* This namespace contains some basic procedures to use a single parameter called 'tdp' in place
    //of multiple tracking parameters.
    //
    //As far as possible, this allows backwardly-compatible functionality - existing Coremetrics
    //parameters can be passed in a URL and processed from there. e.g.:
    //
    //> ...&cm_kws_ac=calvin+k...
    //
    //or they can be included in the 'tdp' parameter:
    //
    //> ...&tdp=cm_kws_ac[mvEquator]calvin+k...
    //
    //Using a generic 'tdp' parameter allows us to include multiple tracking values in a single
    //parameter, and ensure that only the single 'tdp' parameter is excluded from Akamai cache keys:
    //
    //> ...&tdp=cm_kws_ac[mvEquator]calvin+k[mvSeparator]cm_src[mvEquator]PROS_PDPZ1_Pos2...
    //
    //The 'tdp' parameter should NOT be used to pass the following 'base' Coremetrics parameters:
    //
    //+ cm_re
    //+ cm_sp
    //+ cm_mmc
    //+ cm_lm_mo
    var querystring = {};

    /* The tracking key name that will be used in primary querystring, e.g. 'tdp=' */
    var trackingDataParam = "tdp",
        /* Equivalent of "&" within tdp */
        mvSeparator = "~x",
        /* Equivalent of "=" within tdp */
        mvEquator = "~z";

    function getQueryString( querystring ) {
        return ( ( typeof querystring !== "undefined" ) ? querystring : window.location.search );
    }

    //###Method - encodeTrackValue(str, removeKey)
    //This is a private helper function to take in the custom querystring based tracking value from "setTrackingValue/getTrackingValue"
    //and loop through it to uriEncode the values again.  Assumes a method throughout of attempting to only encode the values and not
    //allow url illegal characters in the keys.
    //
    //> parameters
    //>
    //+ *str* - This is the string to encode the values from.  Assumes the custom pattern
    //+ *removeKey* - Removes this key/value from the overall value when rebuilding and sending back.
    //
    //> returns
    //>
    //+ string.  This is the correctly encoded custom string now, minus the removeKey/value
    function encodeTrackValue( str, removeKey ) {
        var p = str.split( mvSeparator ),
            x, ret = '';
        for ( var i = 0; i < p.length; i++ ) {
            x = p[ i ].split( mvEquator );
            if ( x[ 0 ] !== removeKey ) {
                ret += x[ 0 ] + mvEquator + encodeURIComponent( x[ 1 ] ) + ( i < p.length - 1 ? mvSeparator : '' );
            }
        }
        if ( ret.endsWith( mvSeparator ) ) {
            ret = ret.substring( 0, ret.lastIndexOf( mvSeparator ) );
        }

        return ret;
    }


    //###Method - setTrackingValue ( name, value, querystring )
    //This public method will return a reformatted querystring with the name/value added to the
    //custom tracking parameter.  A note on querystring: be aware that it will attempt location.search if not passed in.
    //This assumes a window object. It is up to the caller to ensure they are in an environment with the window object and if there
    //is a doubt, then pass in '' (blank string) as a default.
    //
    //> parameters
    //>
    //+ *name* - The name of the key to add.
    //+ *value* - The value of the key that is being added.  This will be uriEncoded.
    //+ *querystring* - (optional). This is an optional string that is a formmetted querystring.  If not provided, function will attempt to get from the window.location object.
    //
    //> returns
    //>
    //+ string.  This is the reformatted querystring
    querystring.getTrackingValue = function ( trackingVariable, query ) {
        querystring = getQueryString( query );

        // First check if the parameter was passed directly in the URL
        var value = stringUtil.getURLParameter( trackingVariable, querystring );
        if ( value !== null ) {
            return value;
        }
        // If not, retrieve it from the 'tdp' multi-value parameter
        var mvValue = stringUtil.getURLParameter( trackingDataParam, querystring );
        if ( mvValue === null ) {
            return null;
        }
        var mvSubs = mvValue.split( mvSeparator );
        for ( var j = 0; j < mvSubs.length; j++ ) {
            var items = mvSubs[ j ].split( mvEquator );
            if ( items[ 0 ] === trackingVariable ) {
                return items[ 1 ];
            }
        }

        return null;
    };

    //###Method - setTrackingValue ( name, value, querystring )
    //This public method will return a reformatted querystring with the name/value added to the
    //custom tracking parameter.  A note on querystring: be aware that it will attempt location.search if not passed in.
    //This assumes a window object. It is up to the caller to ensure they are in an environment with the window object and if there
    //is a doubt, then pass in '' (blank string) as a default.
    //
    //> parameters
    //>
    //+ *name* - The name of the key to add.
    //+ *value* - The value of the key that is being added.  This will be uriEncoded.
    //+ *querystring* - (optional). This is an optional string that is a formmetted querystring.  If not provided, function will attempt to get from the window.location object.
    //
    //> returns
    //>
    //+ string.  This is the reformatted querystring
    querystring.setTrackingValue = function ( name, value, query ) {
        //STEP: Make the "querystring" an optional parameter and get from window object if not passed in
        querystring = getQueryString( query );


        //STEP: escape the value so that it is URL ready
        value = encodeURIComponent( value );

        //STEP: Set local vars for use in this function
        var mvValue = stringUtil.getURLParameter( trackingDataParam, querystring ),
            newValue = name + mvEquator + value,
            outValue = '';

        //STEP: logic matrix for the various use cases
        if ( mvValue === null ) {
            //BRANCH: 'tdp' parameter doesn't exist in URL...this expects the stringUtil funtion to return null for missing key
            //STEP: figure out if we need to prepend '&' and set up key=value
            outValue = ( querystring.length > 0 ? querystring + '&' : '' ) + trackingDataParam + "=" + newValue;
        } else {
            //BRANCH: 'tdp' parameter exists, and may or may not include this value

            //STEP: first encode the existing values in string again, and remove the update key
            mvValue = encodeTrackValue( mvValue, name );

            //STEP: now we rebuild the incoming querystring, but with the updated 'trackingDataParam' value
            var qsparts = querystring.split( '&' ),
                qs = '';
            for ( var i = 0; i < qsparts.length; i++ ) {
                if ( qsparts[ i ].indexOf( trackingDataParam + '=' ) === -1 ) {
                    qs += qsparts[ i ] + '&';
                }
            }

            //STEP: now put back together the return value.
            outValue = qs + trackingDataParam + "=" + mvValue + ( mvValue.length ? mvSeparator : '' ) + newValue;

        }
        return outValue;
    };

    //###Method - buildQueryMap ( query )
    //This public method will return a hash object containing each parameter from a query string,
    //being each property of the object a key/value from the querystring.
    //
    //> parameters
    //>
    //+ *query* - (optional). This is an optional string that is a formmatted querystring.  If not provided, function will attempt to get from the window.location object.
    //
    //> returns
    //>
    //+ string.  This is the reformatted querystring
    querystring.buildQueryMap = function ( query ) {
        return _.chain( ( query || getQueryString().slice( 1 ) ).split( '&' ) )
            .map( function ( item ) {
                if ( item ) {
                    return item.split( '=' );
                }
            } )
            .compact()
            .object()
            .value();
    };

    return querystring;
} );
define( 'headerFOBNav',[ 'jquery', 'globals', 'base', 'cookie' ], function ( $, Globals, Base, Cookie ) {
    //when
    var fobCategoryIds = [],
        IS_TOUCH,
        IS_PC,
        FLYOUTS_ENABLED,
        fobListItems,
        CLIENT_Y = 0,
        MOUSEMOVE_VDIR,
        MAX_FLYOUT_COLUMNS = 4,
        onOverCallback,
        onOutCallback,
        onMoveCallback,
        onClickCallback,
        channelOverride,
        mouseCoords,
        presstimeout;

    return {
        UP: "up",
        DOWN: "down",
        TOPNAV_CLASS: "macysDynFlyout",

        //for iship we need shipping country code
        //need to add parameter to service to accept country shipping
        //1 iteration to add per Tiago

        fetchFOBList: function () {
            var _this = this,
                base = Base.isThirdParty() ? "http://www.macys.com" : "";

            var url = base + "/shop/topnav?application=" + ( channelOverride || Base.getCurrentChannel() );
            //var url = "https://realtime-shopping.herokuapp.com/jsonp-test";

            $.ajax( {
                url: url,
                type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                jsonpCallback: 'topnavCallback',
                cache: true,
                timeout: 2000,
                success: function ( data, textStatus, xhr ) {
                    var topLinks = Base.isThirdParty() ? Base.absoluteLinkatize( data.html, "http://www.macys.com" ) : data.html;
                    _this.fetchFOBListSuccess( topLinks, textStatus, xhr );
                },
                error: function ( xhr, textStatus, errorThrown ) {
                    _this.fetchFOBListError( xhr, textStatus, errorThrown );
                }
            } );
        },
        fetchFOBListSuccess: function ( data, textStatus, xhr ) {
            var _this = this;
            if ( data.length > 0 ) {
                var menu = $( "div#globalMastheadCategoryMenu" );
                menu.html( data );
                setTimeout( function () {
                    fobListItems = $( "div#globalMastheadCategoryMenu > ul > li" );
                    $( _this ).trigger( 'FOBReady', true );
                }, 25 );


            } else {
                $( _this ).trigger( 'FOBReady', false );
            }
        },
        getFOBSelectorId: function ( id ) {
            return Base.FLEX_LABEL_PREFIX + id;
        },
        fetchFOBListError: function ( xhr, textStatus, errorThrown ) {
            $( this ).trigger( 'FOBReady', false );
        },
        //number will be passed in
        deselect: function ( id ) {
            var selector = "li#" + this.getFOBSelectorId( id );
            $( selector ).removeClass( "selected-flyout" );
            if ( Base.getIEVersion() < 10 ) {
                $( this ).removeClass( "flyout-iefix" );
            }
        },
        //de-couple css class names from component
        deselectOthers: function ( id, className ) {
            var _this = this;
            if ( className === undefined ) {
                className = "selected-flyout";
            }
            if ( id === undefined ) {
                fobListItems.removeClass( className );
            } else {
                fobListItems.each( function ( index ) {
                    if ( _this.getFOBSelectorId( id ) !== $( this ).attr( "id" ) ) {
                        $( this ).removeClass( className );
                    }
                } );
            }
        },
        getCategoryIds: function ( str ) {
            var arr, i, ids = [],
                s, tmp;
            s = str || $( "div#globalMastheadCategoryMenu > ul" ).html() || "";
            s = s.toLowerCase();
            arr = s.match( /id=("|')?(f|F)lexlabel_[0-9]+("|')?/g ); //IE 7 makes tags uppercase

            if ( arr != null && arr.length > 0 ) {
                for ( i = 0; i < arr.length; i++ ) {
                    tmp = arr[ i ];
                    if ( tmp[ tmp.length - 1 ] === '"' ) {
                        tmp = tmp.substring( 0, tmp.length - 1 );
                    }
                    var catId = tmp.substr( tmp.indexOf( "_" ) + 1 );
                    if ( !isNaN( catId ) ) {
                        ids.push( Number( catId ) );
                    }
                }
            }
            return ids;
        },
        getVerticalMouseMoveDirection: function () {
            return MOUSEMOVE_VDIR || this.UP;
        },
        trackVerticalMouseDirection: function ( event ) {
            if ( !FLYOUTS_ENABLED ) {
                return;
            }

            //ignore horizontal movement
            if ( event.clientY !== CLIENT_Y ) {
                MOUSEMOVE_VDIR = event.clientY < CLIENT_Y ? this.UP : this.DOWN;
                CLIENT_Y = event.clientY;
            }
            return;
        },
        init: function ( flyoutsEnabled, override ) {
            channelOverride = override || false;
            IS_TOUCH = Base.isTouch();
            IS_PC = Cookie.get( 'DT', 'MISCGCs' ) === "PC";
            FLYOUTS_ENABLED = flyoutsEnabled || false; //fallback to false

            if ( !Base.isNavApp() || Base.isThirdParty() ) {
                this.fetchFOBList();
            } else {
                $( this ).trigger( 'FOBReady', this.getCategoryIds().length > 0 );
            }
        },
        bind: function () {
            //don't bind events if Flyouts are NOT enabled
            if ( !FLYOUTS_ENABLED ) {
                return;
            }
            //Top FOB collection of <li>'s should already be on page
            fobListItems = $( "div#globalMastheadCategoryMenu > ul > li" );
            if ( fobListItems.length === 0 ) {
                throw new Error( "Top FOB navigation bar is empty." );
            } else {
                if ( !IS_TOUCH || IS_PC ) {
                    this.bindEvents();
                }
            }
        },
        onOver: function ( cb ) {
            onOverCallback = cb;
        },
        onOut: function ( cb ) {
            onOutCallback = cb;
        },
        onMove: function ( cb ) {
            onMoveCallback = cb;
        },
        onClick: function ( cb ) {
            onClickCallback = cb;
        },
        getMouseCoords: function () {
            return mouseCoords;
        },
        doEnter: function ( obj, cb ) {
            if ( typeof cb === "function" ) {
                var id = Base.getSuffixId( obj.attr( "id" ) );
                var totalFOBs = obj.context.parentNode.childElementCount;
                var selectedIndex = obj.index();
                var offset = obj.offset();
                cb( id, totalFOBs, selectedIndex, offset, obj );
            }
        },
        bindEvents: function () {
            var _this = this;
            fobListItems.bind( 'mouseover', function ( e ) {
                //_this.trackVerticalMouseDirection(e);
                mouseCoords = {
                    x: e.clientX,
                    y: e.clientY
                };
                onMoveCallback( e );
            } );
            //over
            fobListItems.mouseenter( function ( e ) {
                _this.doEnter( $( this ), onOverCallback );
            } );
            fobListItems.mousemove( function ( e ) {
                mouseCoords = {
                    x: e.clientX,
                    y: e.clientY
                };
                onMoveCallback( e );
            } );


            //out
            fobListItems.mouseleave( function ( e ) {
                var id = $( this ).attr( "id" ),
                    numericID;
                numericID = Base.getSuffixId( id );
                onOutCallback( numericID );
            } );

            // accessibility kill switch will be added in 15C. 
            if ( Globals.getValue( 'props.accessibleHeaderFlyoutEnabled' ) ) {
                // down arrow key or Spacebar to open the flyout, and set flyout to focus.
                fobListItems.keydown( function ( e ) {
                    if ( e.keyCode === 40 || e.keyCode === 32 ) {
                        e.preventDefault();
                        _this.doEnter( $( this ), onOverCallback );
                        var links = $( ".flyout-on a" );
                        if ( links && links.length > 0 ) {
                            links[ 0 ].focus();
                        }
                    }
                } );
            } // the end of the accessibility kill switch.
        }
    };
} );

define( 'headerFlyout',[ "jquery", 'globals', "base", "segmentation", "mcomAnalytics" ], function ( $, Globals, Base, Segmentation, cm ) {
    var IS_TOUCH = false,
        DEFAULT_COLUMNS = 4,
        MAX_FLYOUT_COLUMNS = DEFAULT_COLUMNS,
        DEFAULT_FLYOUT_COLUMN_WIDTH = 240,
        FLYOUT_COLUMN_WIDTH = DEFAULT_FLYOUT_COLUMN_WIDTH,
        FLYOUT_LAST_COLUMN_EXTRA_SPACE = 0,
        DEFAULT_FLYOUT_COLUMN_LEFT_PADDING = 0,
        FLYOUT_COLUMN_LEFT_PADDING = DEFAULT_FLYOUT_COLUMN_LEFT_PADDING,
        DEFAULT_FLYOUT_COLUMN_WIDTHS = [ '100%', '100%', '47%', '30%', '23.25%', '18%' ],
        COLUMN_WIDTHS = DEFAULT_FLYOUT_COLUMN_WIDTHS,
        DEFAULT_FLYOUTS_ENABLED = true,
        USE_FLYOUT = DEFAULT_FLYOUTS_ENABLED,
        TOP = 137,
        onOverCallback,
        onOutCallback,
        flyoutAlignment = Base.ALIGN_BOTTOM,
        channelOverride,
        flyoutRequestUrl, /*used for testing only*/
        PROTOCOL = "http://",
        flyoutLinksIndex = -1;


    return {
        TOP: TOP,
        DEFAULT_FLYOUTS_ENABLED: DEFAULT_FLYOUTS_ENABLED,
        DEFAULT_COLUMNS: DEFAULT_COLUMNS,
        DEFAULT_FLYOUT_COLUMN_LEFT_PADDING: DEFAULT_FLYOUT_COLUMN_LEFT_PADDING,
        DEFAULT_FLYOUT_COLUMN_WIDTH: DEFAULT_FLYOUT_COLUMN_WIDTH,
        getFlyoutRequestUrl: function () {
            return flyoutRequestUrl;
        },
        setMaxFlyoutColumns: function ( num ) {
            MAX_FLYOUT_COLUMNS = num || DEFAULT_COLUMNS;
        },
        setFlyoutColumnWidth: function ( num ) {
            FLYOUT_COLUMN_WIDTH = num || DEFAULT_FLYOUT_COLUMN_WIDTH;
        },
        setFlyoutColumnLeftPadding: function ( num ) {
            FLYOUT_COLUMN_LEFT_PADDING = num || DEFAULT_FLYOUT_COLUMN_LEFT_PADDING;
        },
        enabled: function () {
            return USE_FLYOUT;
        },
        disable: function () {
            USE_FLYOUT = false;
        },
        enable: function () {
            USE_FLYOUT = true;
        },
        getEdgeCoords: function ( id ) {
            var sel, obj, os, coords;
            sel = this.getFlyoutSelectorId( id );
            obj = $( sel );
            os = obj.offset();
            coords = {
                v1: {},
                v2: {}
            };
            //flyout does not exist
            if ( obj.length === 0 ) {
                return false;
            } else {
                coords.vert2 = {
                    x: os.left,
                    y: os.top
                };
                coords.vert3 = {
                    x: os.left + obj.width(),
                    y: os.top
                };
                return coords;
            }
        },
        closeAll: function () {
            if ( $( "div.flyout-on" ).length > 0 ) {
                $( "div.flyout-on" ).addClass( "flyout-off" );
                $( "div.flyout-on" ).removeClass( "flyout-on" );
            }
        },
        close: function ( id ) {
            var fid = this.getFlyoutSelectorId( id );
            var flyoutObj = $( fid );
            flyoutObj.removeClass( "flyout-on" );
            flyoutObj.addClass( "flyout-off" );
        },
        getRightAlignment: function ( columns, topNavLeftPosition ) {
            if ( columns > MAX_FLYOUT_COLUMNS ) {
                throw new Error( "header.getRightAlignment Failed! Columns argument has exceeded MAXIMUM." );
            }

            var w = FLYOUT_COLUMN_WIDTH * columns;
            var p = FLYOUT_COLUMN_LEFT_PADDING * columns;
            var offset = ( ( MAX_FLYOUT_COLUMNS * FLYOUT_COLUMN_WIDTH ) + ( MAX_FLYOUT_COLUMNS * FLYOUT_COLUMN_LEFT_PADDING ) ) - ( w + p );
            return topNavLeftPosition + offset;
        },
        //> http://mingle/projects/seo/cards/3548
        //> OLD LOGIC :: DOES NOT SUPPORT VARIABLE NUMBER OF TOPNAV ITEMS
        //> Placement, Current_Category, 1_column, 2_columns, 3-4_columns
        //> FOB-1, FOR THE HOME, left, left, left
        //> FOB-2, BED & BATH, with FOB, with FOB, left
        //> FOB-3, WOMEN, with FOB, with FOB, left
        //> FOB-4, MEN, with FOB, with FOB, left
        //> FOB-5, JUNIORS, with FOB, with FOB, left
        //> FOB-6, KIDS, with FOB, with FOB, left
        //> FOB-7, BEAUTY, with FOB, with FOB, right
        //> FOB-8, SHOES, with FOB, right, right
        //> FOB-9, HANDBAGS & ACCESSORIES, with FOB, right, right
        //> FOB-10, JEWELRY & WATCHES, right, right, right
        //> FOB-11, SALE, right, right, right
        //> selectedIndex is zero based index
        //> NEW :: UPDATED 4 JUNE 2013

        //> The follow variables are required to calculate flyout left position;
        //> Flyout megamenu will be positioned based on topnav items index
        //> LOGIC

        //> left of center FOB items selected *
        //> if FOB_SELECTED_ITEM_INDEX < (FOB_TOTAL_ITEMS/2)
        //> if FOB_SELECTED_ITEM_LEFT > FLYOUT_MIDPOINT
        //> FLYOUT_LEFT = (TOPNAV_WIDTH - FLYOUT_WIDTH) * (FOB_SELECTED_ITEM_INDEX/TOTAL_FOB_ITEMS)
        //> else
        //> FLYOUT_LEFT = TOPNAV_LEFT
        //> right of center FOB items selected *
        //> else
        //> if (FOB_SELECTED_ITEM_LEFT + FOB_SELECTED_ITEM_WIDTH) - TOPNAV_WIDTH) < (FLYOUT_LEFT + FLYOUT_MIDPOINT)
        //> FLYOUT_LEFT = 
        //> TOPNAV_WIDTH
        //> FOB_LEFT
        //> FLYOUT_LEFT
        //> FLYOUT_WIDTH

        //ulOffset = $("div#globalMastheadCategoryMenu ul").offset()

        //align left
        //if selectedIndex == 0 || (selectedFOBWidth/2 + ulOffset) < (FlyoutWidth/2 + ulOffset)



        //align right
        //else if selectedIndex == totalFOB-1 || (selectedFOBWidth/2) > (flyoutWidth/2)+ + ((ulWitdh-flyoutWIdth)+ulOffsetLeft)


        //else
        //center align


        //(flyout.width(),selectedIndex,fobOffset)
        getLeftPosition: function ( flyoutWidth, selectedIndex, fobOffsetLeft, totalFOBs, fobWidth ) {
            var ulOffsetLeft = $( "#globalMastheadCategoryMenu > ul" ).offset().left;
            var ulWidth = $( "#globalMastheadCategoryMenu > ul" ).width();
            var fobMid = fobWidth / 2;
            var flyoutMid = flyoutWidth / 2;


            //align left
            if ( ( fobMid + fobOffsetLeft ) < ( flyoutMid + ulOffsetLeft ) ) {
                return ulOffsetLeft;
            }
            //align right
            else if ( ( fobMid + fobOffsetLeft ) > ( ulOffsetLeft + ( ulWidth - flyoutWidth ) + flyoutMid ) ) {
                return ulOffsetLeft + ( ulWidth - flyoutWidth );
            }
            //center over FOB midpoint
            else {
                return fobOffsetLeft - ( flyoutMid - fobMid );
            }
        },
        init: function ( categoryIDs, alignment, override ) {
            flyoutAlignment = alignment || Base.ALIGN_BOTTOM;
            channelOverride = override || false;
            IS_TOUCH = Base.isTouch() || false;
            var $subNav = $( "div.subnav" );

            if ( ( !Base.isNavApp() && USE_FLYOUT ) || Base.isThirdParty() || $subNav.hasClass( "cnfNavFOBFlyouts" ) ) {
                this.fetchFlyouts( categoryIDs || [] );
            } else {
                $( this ).trigger( 'flyoutReady', true );
            }
            return true;
        },
        bind: function () {
            var _this = this;
            $( "div.subnav" ).mouseenter( function ( e ) {
                onOverCallback( $( this ) );
            } );

            $( "div.subnav" ).mouseleave( function ( e ) {
                var obj = $( this ),
                    id = Base.getSuffixId( obj.attr( "id" ) ); //numeric portion only flyout_XXXX
                onOutCallback( id );
            } );

            // accessibility kill switch will be added in 15C. 
            if ( Globals.getValue( 'props.accessibleHeaderFlyoutEnabled' ) ) {
                $( "div.subnav" ).keydown( function ( e ) {
                    var obj = $( this ),
                        id = Base.getSuffixId( obj.attr( "id" ) ),
                        links = $( ".flyout-on a" );

                    if ( e.keyCode === 40 ) { // down arrow key.
                        e.preventDefault();
                        _this.doDownArrow( id, links );
                    } else if ( e.keyCode === 38 ) { // up arrow key.
                        e.preventDefault();
                        _this.doUpArrow( links );
                    } else if ( e.keyCode === 9 ) { // tab key
                        if ( !e.shiftKey ) { // tab key, move down one link.                    
                            flyoutLinksIndex++;
                            if ( flyoutLinksIndex >= links.length ) {
                                _this.doFocusOnFOB( id, "current" ); //Note: when passing "next", it will skip one FOB in this case, so use current instead.
                            }
                        } else { // shift+tab, move up one link.
                            if ( flyoutLinksIndex > 0 ) {
                                flyoutLinksIndex--;
                            } else {
                                _this.doFocusOnFOB( id, "current" );
                            }
                        }
                    } else if ( e.keyCode === 27 ) { // Esc key.
                        _this.doFocusOnFOB( id, "current" );
                    }
                } );
            } // the end of the accessibility kill switch.
        },
        doFocusOnFOB: function ( id, whichFOB ) { // whichFOB should have value: current or next
            var fOBElementId, fOBLinkElement;

            // close the flyout and get/restore the FOB item focus.
            onOutCallback( id );
            flyoutLinksIndex = -1;
            if ( whichFOB === "next" ) {
                fOBElementId = $( ".selected-flyout" ).next(); // next FOB id
            } else {
                fOBElementId = $( ".selected-flyout" ); // current FOB id
            }

            fOBLinkElement = $( fOBElementId ).children();
            if ( fOBLinkElement && fOBLinkElement.length > 0 ) {
                fOBLinkElement[ 0 ].focus();
            }
        },
        doDownArrow: function ( id, links ) {
            if ( links && links.length > 0 ) {
                flyoutLinksIndex++;
                if ( flyoutLinksIndex < links.length ) {
                    links[ flyoutLinksIndex ].focus();
                } else {
                    this.doFocusOnFOB( id, "next" );
                }
            }
        },
        doUpArrow: function ( links ) {
            if ( links && links.length > 0 && flyoutLinksIndex > 0 ) {
                flyoutLinksIndex--;
                links[ flyoutLinksIndex ].focus();
            }
        },
        hideExtraColumns: function ( flyout ) {
            flyout.find( "div div" ).each( function ( index ) {
                if ( index >= MAX_FLYOUT_COLUMNS ) {
                    $( this ).css( "display", "none" );
                }
            } );
        },
        adjustFlyoutWidth: function ( flyout, columns ) {
            var width = columns * FLYOUT_COLUMN_WIDTH; //column width per spec
            var padding = columns * FLYOUT_COLUMN_LEFT_PADDING; //column left padding per spec
            var w = ( width + padding + FLYOUT_LAST_COLUMN_EXTRA_SPACE ) + "px";


            flyout.css( "width", w );
            flyout.find( "div div" ).css( "width", COLUMN_WIDTHS[ columns ] );

            var lastColumn = flyout.find( "div div:last-child" );
            if ( lastColumn.has( "img" ).length > 0 ) {
                lastColumn.css( "background", "none" ).css( "padding-left", "0px" ).css( "width", ( FLYOUT_COLUMN_WIDTH + FLYOUT_COLUMN_LEFT_PADDING + FLYOUT_LAST_COLUMN_EXTRA_SPACE ) + "px" );
            } else {
                lastColumn.css( "width", ( FLYOUT_COLUMN_WIDTH + FLYOUT_LAST_COLUMN_EXTRA_SPACE ) + "px" );
            }
            return true;
        },
        //flyoutObj, totalFOBs, selectedIndex, offset, cols, fobWidth
        adjustFlyoutPosition: function ( flyout, totalFOBs, selectedIndex, fobOffset, columns, fobWidth ) {
            if ( flyoutAlignment === Base.ALIGN_BOTTOM ) {
                var left = this.getLeftPosition( flyout.width(), selectedIndex, fobOffset.left, totalFOBs, fobWidth ); //this.getLeftPosition(totalFOBs,selectedIndex,fobOffset.left,columns);
                flyout.css( "left", left + "px" );
            }
            //add other alignments here if NEEDED ...RIGHT, LEFT, TOP
        },
        fetchFlyouts: function ( categoryIDs ) {
            var i = 0,
                tmpStr = "",
                tmp;
            if ( categoryIDs === undefined || categoryIDs.length === 0 ) {
                throw new Error( "HeaderFlyout.fetchFlyouts(ids) failed! ids are empty." );
            }
            if ( typeof categoryIDs.push === "undefined" ) {
                throw new Error( "HeaderFlyout.fetchFlyouts(ids) failed! ids must be an array." );
            }
            var _this = this,
                base = Base.isThirdParty() ? "http://www.macys.com" : "";

            flyoutRequestUrl = base + "/shop/flyout?application=" + ( channelOverride || Base.getCurrentChannel() );


            for ( i = 0; i < categoryIDs.length; i++ ) {
                tmp = categoryIDs[ i ];
                if ( typeof tmp !== "number" ) {
                    if ( tmp.match( /[^[0-9]/ ).length > 0 ) {
                        throw new Error( "HeaderFlyout.fetchFlyouts(ids) failed! id in ids is not valid id: " + tmp );
                    } else {
                        tmpStr += tmp;
                    }
                } else {
                    tmpStr += tmp;
                    if ( i < categoryIDs.length - 1 ) {
                        tmpStr += ",";
                    }
                }
            }
            flyoutRequestUrl += "&categoryIds=" + tmpStr;


            //var url = "https://realtime-shopping.herokuapp.com/jsonp-test";

            $.ajax( {
                url: flyoutRequestUrl,
                type: 'GET',
                crossDomain: true,
                dataType: 'jsonp',
                jsonpCallback: 'flyoutCallback',
                cache: true,
                timeout: 7000,
                success: function ( data, textStatus, xhr ) {
                    var contents = Base.isThirdParty() ? Base.absoluteLinkatize( data.html, "http://www.macys.com" ) : data.html;
                    _this.flyoutsLoadedSuccess( contents, textStatus, xhr );
                },
                error: function ( xhr, textStatus, errorThrown ) {
                    _this.flyoutsLoadedError( xhr, textStatus, errorThrown );
                }
            } );
            return true;
        },
        flyoutsLoadedSuccess: function ( data, textStatus, xhr ) {
            var topnav = $( "#globalMastheadCategoryMenu" ),
                _this = this;

            var $subNav = $( "div.subnav" );

            if ( !~data.indexOf( "Flyout_" ) ) {
                $( _this ).trigger( 'flyoutReady', false );
            } else {
                // append to body if not in current FOB segments
                if ( !$subNav.hasClass( "cnfNavFOBFlyouts" ) ) {
                    $( "body" ).append( "<div id='globalMastheadFlyout'></div>" );
                }
                setTimeout( function () {
                    $( "div#globalMastheadFlyout" ).html( data );
                    $( _this ).trigger( 'flyoutReady', true );
                }, 50 );
            }

        },
        flyoutsLoadedError: function ( xhr, textStatus, errorThrown ) {
            $( this ).trigger( 'flyoutReady', false );
        },
        getFlyoutSelectorId: function ( numericID ) {
            if ( typeof numericID !== "number" || !numericID ) {
                throw new Error( "header.getFlyoutSelectorId() failed! Required number is invalid or missing." );
            }

            return "div#globalMastheadFlyout > div#Flyout_" + numericID;
        },
        open: function ( id, totalFOBs, selectedIndex, offset, fobWidth ) {
            var fid = this.getFlyoutSelectorId( id );
            var flyoutObj = $( fid );
            var cols = flyoutObj.find( "div div" ).length;
            if ( cols > MAX_FLYOUT_COLUMNS ) {
                cols = MAX_FLYOUT_COLUMNS;
                this.hideExtraColumns( flyoutObj );
            }

            this.adjustFlyoutWidth( flyoutObj, cols );

            this.adjustFlyoutPosition( flyoutObj, totalFOBs, selectedIndex, offset, cols, fobWidth );


            flyoutObj.removeClass( "flyout-off" );
            flyoutObj.addClass( "flyout-on" );
            flyoutLinksIndex = 0;
        },
        onOver: function ( callback ) {
            onOverCallback = callback;
        },
        onOut: function ( callback ) {
            onOutCallback = callback;
        },

        replaceCoreMetrics: function () {
            $( "div#globalMastheadCategoryMenu>ul>li" ).each( function ( index ) {
                var categoryName = $( this ).text();
                categoryName = $.trim( categoryName );
                categoryName = categoryName.replace( / - /g, "-" );
                categoryName = categoryName.replace( / /g, "-" );
                categoryName = categoryName.toLowerCase();
                categoryName = categoryName.replace( /'/g, "%27" );
                categoryName = encodeURIComponent( categoryName );

                $( "div#Flyout_" + Base.getSuffixId( $( this ).attr( "id" ) ) ).find( "a" ).each(
                    function ( index ) {
                        $( this ).attr( "href", $( this ).attr( "href" ).replace( "flytrackingbreadcrumb", categoryName ) );
                    }
                );
            } );
        }
    };
} );

/*
 * Copyright 2013 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
;
( function ( window, document, undefined ) {
    var j = void 0,
        k = !0,
        l = null,
        p = !1;

    function q( a ) {
        return function () {
            return this[ a ]
        }
    }
    var aa = this;

    function ba( a, b ) {
        var c = a.split( "." ),
            d = aa;
        !( c[ 0 ] in d ) && d.execScript && d.execScript( "var " + c[ 0 ] );
        for ( var e; c.length && ( e = c.shift() ); )!c.length && b !== j ? d[ e ] = b : d = d[ e ] ? d[ e ] : d[ e ] = {}
    }
    aa.Ba = k;

    function ca( a, b, c ) {
        return a.call.apply( a.bind, arguments )
    }

    function da( a, b, c ) {
        if ( !a ) throw Error();
        if ( 2 < arguments.length ) {
            var d = Array.prototype.slice.call( arguments, 2 );
            return function () {
                var c = Array.prototype.slice.call( arguments );
                Array.prototype.unshift.apply( c, d );
                return a.apply( b, c )
            }
        }
        return function () {
            return a.apply( b, arguments )
        }
    }

    function s( a, b, c ) {
        s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf( "native code" ) ? ca : da;
        return s.apply( l, arguments )
    }
    var ea = Date.now || function () {
            return +new Date
        };

    function fa( a, b ) {
        this.G = a;
        this.u = b || a;
        this.z = this.u.document;
        this.R = j
    }
    fa.prototype.createElement = function ( a, b, c ) {
        a = this.z.createElement( a );
        if ( b )
            for ( var d in b )
                if ( b.hasOwnProperty( d ) )
                    if ( "style" == d ) {
                        var e = a,
                            f = b[ d ];
                        ga( this ) ? e.setAttribute( "style", f ) : e.style.cssText = f
                    } else a.setAttribute( d, b[ d ] );
        c && a.appendChild( this.z.createTextNode( c ) );
        return a
    };

    function t( a, b, c ) {
        a = a.z.getElementsByTagName( b )[ 0 ];
        a || ( a = document.documentElement );
        a && a.lastChild && a.insertBefore( c, a.lastChild )
    }

    function u( a, b ) {
        return a.createElement( "link", {
            rel: "stylesheet",
            href: b
        } )
    }

    function ha( a, b ) {
        return a.createElement( "script", {
            src: b
        } )
    }

    function v( a, b ) {
        for ( var c = a.className.split( /\s+/ ), d = 0, e = c.length; d < e; d++ )
            if ( c[ d ] == b ) return;
        c.push( b );
        a.className = c.join( " " ).replace( /\s+/g, " " ).replace( /^\s+|\s+$/, "" )
    }

    function w( a, b ) {
        for ( var c = a.className.split( /\s+/ ), d = [], e = 0, f = c.length; e < f; e++ ) c[ e ] != b && d.push( c[ e ] );
        a.className = d.join( " " ).replace( /\s+/g, " " ).replace( /^\s+|\s+$/, "" )
    }

    function ia( a, b ) {
        for ( var c = a.className.split( /\s+/ ), d = 0, e = c.length; d < e; d++ )
            if ( c[ d ] == b ) return k;
        return p
    }

    function ga( a ) {
        if ( a.R === j ) {
            var b = a.z.createElement( "p" );
            b.innerHTML = '<a style="top:1px;">w</a>';
            a.R = /top/.test( b.getElementsByTagName( "a" )[ 0 ].getAttribute( "style" ) )
        }
        return a.R
    }

    function x( a ) {
        var b = a.u.location.protocol;
        "about:" == b && ( b = a.G.location.protocol );
        return "https:" == b ? "https:" : "http:"
    };

    function y( a, b, c ) {
        this.w = a;
        this.T = b;
        this.Aa = c
    }
    ba( "webfont.BrowserInfo", y );
    y.prototype.qa = q( "w" );
    y.prototype.hasWebFontSupport = y.prototype.qa;
    y.prototype.ra = q( "T" );
    y.prototype.hasWebKitFallbackBug = y.prototype.ra;
    y.prototype.sa = q( "Aa" );
    y.prototype.hasWebKitMetricsBug = y.prototype.sa;

    function z( a, b, c, d ) {
        this.e = a != l ? a : l;
        this.o = b != l ? b : l;
        this.ba = c != l ? c : l;
        this.f = d != l ? d : l
    }
    var ja = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    z.prototype.toString = function () {
        return [ this.e, this.o || "", this.ba || "", this.f || "" ].join( "" )
    };

    function A( a ) {
        a = ja.exec( a );
        var b = l,
            c = l,
            d = l,
            e = l;
        a && ( a[ 1 ] !== l && a[ 1 ] && ( b = parseInt( a[ 1 ], 10 ) ), a[ 2 ] !== l && a[ 2 ] && ( c = parseInt( a[ 2 ], 10 ) ), a[ 3 ] !== l && a[ 3 ] && ( d = parseInt( a[ 3 ], 10 ) ), a[ 4 ] !== l && a[ 4 ] && ( e = /^[0-9]+$/.test( a[ 4 ] ) ? parseInt( a[ 4 ], 10 ) : a[ 4 ] ) );
        return new z( b, c, d, e )
    };

    function B( a, b, c, d, e, f, g, h, n, m, r ) {
        this.J = a;
        this.Ha = b;
        this.za = c;
        this.ga = d;
        this.Fa = e;
        this.fa = f;
        this.xa = g;
        this.Ga = h;
        this.wa = n;
        this.ea = m;
        this.k = r
    }
    ba( "webfont.UserAgent", B );
    B.prototype.getName = q( "J" );
    B.prototype.getName = B.prototype.getName;
    B.prototype.pa = q( "za" );
    B.prototype.getVersion = B.prototype.pa;
    B.prototype.la = q( "ga" );
    B.prototype.getEngine = B.prototype.la;
    B.prototype.ma = q( "fa" );
    B.prototype.getEngineVersion = B.prototype.ma;
    B.prototype.na = q( "xa" );
    B.prototype.getPlatform = B.prototype.na;
    B.prototype.oa = q( "wa" );
    B.prototype.getPlatformVersion = B.prototype.oa;
    B.prototype.ka = q( "ea" );
    B.prototype.getDocumentMode = B.prototype.ka;
    B.prototype.ja = q( "k" );
    B.prototype.getBrowserInfo = B.prototype.ja;

    function C( a, b ) {
        this.a = a;
        this.H = b
    }
    var ka = new B( "Unknown", new z, "Unknown", "Unknown", new z, "Unknown", "Unknown", new z, "Unknown", j, new y( p, p, p ) );
    C.prototype.parse = function () {
        var a;
        if ( -1 != this.a.indexOf( "MSIE" ) ) {
            a = D( this );
            var b = E( this ),
                c = A( b ),
                d = F( this.a, /MSIE ([\d\w\.]+)/, 1 ),
                e = A( d );
            a = new B( "MSIE", e, d, "MSIE", e, d, a, c, b, G( this.H ), new y( "Windows" == a && 6 <= e.e || "Windows Phone" == a && 8 <= c.e, p, p ) )
        } else if ( -1 != this.a.indexOf( "Opera" ) ) a: {
            a = "Unknown";
            var b = F( this.a, /Presto\/([\d\w\.]+)/, 1 ),
                c = A( b ),
                d = E( this ),
                e = A( d ),
                f = G( this.H );
            c.e !== l ? a = "Presto" : ( -1 != this.a.indexOf( "Gecko" ) && ( a = "Gecko" ), b = F( this.a, /rv:([^\)]+)/, 1 ), c = A( b ) );
            if ( -1 != this.a.indexOf( "Opera Mini/" ) ) {
                var g =
                    F( this.a, /Opera Mini\/([\d\.]+)/, 1 ),
                    h = A( g );
                a = new B( "OperaMini", h, g, a, c, b, D( this ), e, d, f, new y( p, p, p ) )
            } else {
                if ( -1 != this.a.indexOf( "Version/" ) && ( g = F( this.a, /Version\/([\d\.]+)/, 1 ), h = A( g ), h.e !== l ) ) {
                    a = new B( "Opera", h, g, a, c, b, D( this ), e, d, f, new y( 10 <= h.e, p, p ) );
                    break a
                }
                g = F( this.a, /Opera[\/ ]([\d\.]+)/, 1 );
                h = A( g );
                a = h.e !== l ? new B( "Opera", h, g, a, c, b, D( this ), e, d, f, new y( 10 <= h.e, p, p ) ) : new B( "Opera", new z, "Unknown", a, c, b, D( this ), e, d, f, new y( p, p, p ) )
            }
        } else if ( /AppleWeb(K|k)it/.test( this.a ) ) {
            a = D( this );
            var b = E( this ),
                c = A( b ),
                d = F( this.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1 ),
                e = A( d ),
                f = "Unknown",
                g = new z,
                h = "Unknown",
                n = p; - 1 != this.a.indexOf( "Chrome" ) || -1 != this.a.indexOf( "CrMo" ) || -1 != this.a.indexOf( "CriOS" ) ? f = "Chrome" : /Silk\/\d/.test( this.a ) ? f = "Silk" : "BlackBerry" == a || "Android" == a ? f = "BuiltinBrowser" : -1 != this.a.indexOf( "Safari" ) ? f = "Safari" : -1 != this.a.indexOf( "AdobeAIR" ) && ( f = "AdobeAIR" );
            "BuiltinBrowser" == f ? h = "Unknown" : "Silk" == f ? h = F( this.a, /Silk\/([\d\._]+)/, 1 ) : "Chrome" == f ? h = F( this.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2 ) : -1 !=
                this.a.indexOf( "Version/" ) ? h = F( this.a, /Version\/([\d\.\w]+)/, 1 ) : "AdobeAIR" == f && ( h = F( this.a, /AdobeAIR\/([\d\.]+)/, 1 ) );
            g = A( h );
            n = "AdobeAIR" == f ? 2 < g.e || 2 == g.e && 5 <= g.o : "BlackBerry" == a ? 10 <= c.e : "Android" == a ? 2 < c.e || 2 == c.e && 1 < c.o : 526 <= e.e || 525 <= e.e && 13 <= e.o;
            a = new B( f, g, h, "AppleWebKit", e, d, a, c, b, G( this.H ), new y( n, 536 > e.e || 536 == e.e && 11 > e.o, "iPhone" == a || "iPad" == a || "iPod" == a || "Macintosh" == a ) )
        } else -1 != this.a.indexOf( "Gecko" ) ? ( a = "Unknown", b = new z, c = "Unknown", d = E( this ), e = A( d ), f = p, -1 != this.a.indexOf( "Firefox" ) ? ( a =
            "Firefox", c = F( this.a, /Firefox\/([\d\w\.]+)/, 1 ), b = A( c ), f = 3 <= b.e && 5 <= b.o ) : -1 != this.a.indexOf( "Mozilla" ) && ( a = "Mozilla" ), g = F( this.a, /rv:([^\)]+)/, 1 ), h = A( g ), f || ( f = 1 < h.e || 1 == h.e && 9 < h.o || 1 == h.e && 9 == h.o && 2 <= h.ba || g.match( /1\.9\.1b[123]/ ) != l || g.match( /1\.9\.1\.[\d\.]+/ ) != l ), a = new B( a, b, c, "Gecko", h, g, D( this ), e, d, G( this.H ), new y( f, p, p ) ) ) : a = ka;
        return a
    };

    function D( a ) {
        var b = F( a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1 );
        if ( "" != b ) return /BB\d{2}/.test( b ) && ( b = "BlackBerry" ), b;
        a = F( a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS)/, 1 );
        return "" != a ? ( "Mac_PowerPC" == a && ( a = "Macintosh" ), a ) : "Unknown"
    }

    function E( a ) {
        var b = F( a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2 );
        if ( b || ( b = F( a.a, /Windows Phone( OS)? ([^;)]+)/, 2 ) ) || ( b = F( a.a, /(iPhone )?OS ([\d_]+)/, 2 ) ) ) return b;
        if ( b = F( a.a, /(?:Linux|CrOS) ([^;)]+)/, 1 ) )
            for ( var b = b.split( /\s/ ), c = 0; c < b.length; c += 1 )
                if ( /^[\d\._]+$/.test( b[ c ] ) ) return b[ c ];
        return ( a = F( a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2 ) ) ? a : "Unknown"
    }

    function F( a, b, c ) {
        return ( a = a.match( b ) ) && a[ c ] ? a[ c ] : ""
    }

    function G( a ) {
        if ( a.documentMode ) return a.documentMode
    };

    function la( a ) {
        this.va = a || "-"
    }
    la.prototype.f = function ( a ) {
        for ( var b = [], c = 0; c < arguments.length; c++ ) b.push( arguments[ c ].replace( /[\W_]+/g, "" ).toLowerCase() );
        return b.join( this.va )
    };

    function H( a, b ) {
        this.J = a;
        this.U = 4;
        this.K = "n";
        var c = ( b || "n4" ).match( /^([nio])([1-9])$/i );
        c && ( this.K = c[ 1 ], this.U = parseInt( c[ 2 ], 10 ) )
    }
    H.prototype.getName = q( "J" );

    function I( a ) {
        return a.K + a.U
    }

    function ma( a ) {
        var b = 4,
            c = "n",
            d = l;
        a && ( ( d = a.match( /(normal|oblique|italic)/i ) ) && d[ 1 ] && ( c = d[ 1 ].substr( 0, 1 ).toLowerCase() ), ( d = a.match( /([1-9]00|normal|bold)/i ) ) && d[ 1 ] && ( /bold/i.test( d[ 1 ] ) ? b = 7 : /[1-9]00/.test( d[ 1 ] ) && ( b = parseInt( d[ 1 ].substr( 0, 1 ), 10 ) ) ) );
        return c + b
    };

    function na( a, b, c ) {
        this.c = a;
        this.h = b;
        this.M = c;
        this.j = "wf";
        this.g = new la( "-" )
    }

    function pa( a ) {
        v( a.h, a.g.f( a.j, "loading" ) );
        J( a, "loading" )
    }

    function K( a ) {
        w( a.h, a.g.f( a.j, "loading" ) );
        ia( a.h, a.g.f( a.j, "active" ) ) || v( a.h, a.g.f( a.j, "inactive" ) );
        J( a, "inactive" )
    }

    function J( a, b, c ) {
        if ( a.M[ b ] )
            if ( c ) a.M[ b ]( c.getName(), I( c ) );
            else a.M[ b ]()
    };

    function L( a, b ) {
        this.c = a;
        this.C = b;
        this.s = this.c.createElement( "span", {
            "aria-hidden": "true"
        }, this.C )
    }

    function M( a, b ) {
        var c = a.s,
            d;
        d = [];
        for ( var e = b.J.split( /,\s*/ ), f = 0; f < e.length; f++ ) {
            var g = e[ f ].replace( /['"]/g, "" ); - 1 == g.indexOf( " " ) ? d.push( g ) : d.push( "'" + g + "'" )
        }
        d = d.join( "," );
        e = "normal";
        f = b.U + "00";
        "o" === b.K ? e = "oblique" : "i" === b.K && ( e = "italic" );
        d = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + d + ";" + ( "font-style:" + e + ";font-weight:" + f + ";" );
        ga( a.c ) ? c.setAttribute( "style", d ) : c.style.cssText =
            d
    }

    function N( a ) {
        t( a.c, "body", a.s )
    }
    L.prototype.remove = function () {
        var a = this.s;
        a.parentNode && a.parentNode.removeChild( a )
    };

    function qa( a, b, c, d, e, f, g, h ) {
        this.V = a;
        this.ta = b;
        this.c = c;
        this.q = d;
        this.C = h || "BESbswy";
        this.k = e;
        this.F = {};
        this.S = f || 5E3;
        this.Z = g || l;
        this.B = this.A = l;
        a = new L( this.c, this.C );
        N( a );
        for ( var n in O ) O.hasOwnProperty( n ) && ( M( a, new H( O[ n ], I( this.q ) ) ), this.F[ O[ n ] ] = a.s.offsetWidth );
        a.remove()
    }
    var O = {
        Ea: "serif",
        Da: "sans-serif",
        Ca: "monospace"
    };
    qa.prototype.start = function () {
        this.A = new L( this.c, this.C );
        N( this.A );
        this.B = new L( this.c, this.C );
        N( this.B );
        this.ya = ea();
        M( this.A, new H( this.q.getName() + ",serif", I( this.q ) ) );
        M( this.B, new H( this.q.getName() + ",sans-serif", I( this.q ) ) );
        ra( this )
    };

    function sa( a, b, c ) {
        for ( var d in O )
            if ( O.hasOwnProperty( d ) && b === a.F[ O[ d ] ] && c === a.F[ O[ d ] ] ) return k;
        return p
    }

    function ra( a ) {
        var b = a.A.s.offsetWidth,
            c = a.B.s.offsetWidth;
        b === a.F.serif && c === a.F[ "sans-serif" ] || a.k.T && sa( a, b, c ) ? ea() - a.ya >= a.S ? a.k.T && sa( a, b, c ) && ( a.Z === l || a.Z.hasOwnProperty( a.q.getName() ) ) ? P( a, a.V ) : P( a, a.ta ) : setTimeout( s( function () {
            ra( this )
        }, a ), 25 ) : P( a, a.V )
    }

    function P( a, b ) {
        a.A.remove();
        a.B.remove();
        b( a.q )
    };

    function R( a, b, c, d ) {
        this.c = b;
        this.t = c;
        this.N = 0;
        this.ca = this.Y = p;
        this.S = d;
        this.k = a.k
    }

    function ta( a, b, c, d, e ) {
        if ( 0 === b.length && e ) K( a.t );
        else {
            a.N += b.length;
            e && ( a.Y = e );
            for ( e = 0; e < b.length; e++ ) {
                var f = b[ e ],
                    g = c[ f.getName() ],
                    h = a.t,
                    n = f;
                v( h.h, h.g.f( h.j, n.getName(), I( n ).toString(), "loading" ) );
                J( h, "fontloading", n );
                ( new qa( s( a.ha, a ), s( a.ia, a ), a.c, f, a.k, a.S, d, g ) ).start()
            }
        }
    }
    R.prototype.ha = function ( a ) {
        var b = this.t;
        w( b.h, b.g.f( b.j, a.getName(), I( a ).toString(), "loading" ) );
        w( b.h, b.g.f( b.j, a.getName(), I( a ).toString(), "inactive" ) );
        v( b.h, b.g.f( b.j, a.getName(), I( a ).toString(), "active" ) );
        J( b, "fontactive", a );
        this.ca = k;
        ua( this )
    };
    R.prototype.ia = function ( a ) {
        var b = this.t;
        w( b.h, b.g.f( b.j, a.getName(), I( a ).toString(), "loading" ) );
        ia( b.h, b.g.f( b.j, a.getName(), I( a ).toString(), "active" ) ) || v( b.h, b.g.f( b.j, a.getName(), I( a ).toString(), "inactive" ) );
        J( b, "fontinactive", a );
        ua( this )
    };

    function ua( a ) {
        0 == --a.N && a.Y && ( a.ca ? ( a = a.t, w( a.h, a.g.f( a.j, "loading" ) ), w( a.h, a.g.f( a.j, "inactive" ) ), v( a.h, a.g.f( a.j, "active" ) ), J( a, "active" ) ) : K( a.t ) )
    };

    function S( a, b, c ) {
        this.G = a;
        this.W = b;
        this.a = c;
        this.O = this.P = 0
    }

    function T( a, b ) {
        U.W.$[ a ] = b
    }
    S.prototype.load = function ( a ) {
        var b = a.context || this.G;
        this.c = new fa( this.G, b );
        b = new na( this.c, b.document.documentElement, a );
        if ( this.a.k.w ) {
            var c = this.W,
                d = this.c,
                e = [],
                f;
            for ( f in a )
                if ( a.hasOwnProperty( f ) ) {
                    var g = c.$[ f ];
                    g && e.push( g( a[ f ], d ) )
                }
            a = a.timeout;
            this.O = this.P = e.length;
            a = new R( this.a, this.c, b, a );
            f = 0;
            for ( c = e.length; f < c; f++ ) d = e[ f ], d.v( this.a, s( this.ua, this, d, b, a ) )
        } else K( b )
    };
    S.prototype.ua = function ( a, b, c, d ) {
        var e = this;
        d ? a.load( function ( a, d, h ) {
            var n = 0 == --e.P;
            n && pa( b );
            setTimeout( function () {
                ta( c, a, d || {}, h || l, n )
            }, 0 )
        } ) : ( a = 0 == --this.P, this.O--, a && ( 0 == this.O ? K( b ) : pa( b ) ), ta( c, [], {}, l, a ) )
    };
    var va = window,
        wa = ( new C( navigator.userAgent, document ) ).parse(),
        U = va.WebFont = new S( window, new function () {
            this.$ = {}
        }, wa );
    U.load = U.load;

    function V( a, b ) {
        this.c = a;
        this.d = b
    }
    V.prototype.load = function ( a ) {
        var b, c, d = this.d.urls || [],
            e = this.d.families || [];
        b = 0;
        for ( c = d.length; b < c; b++ ) t( this.c, "head", u( this.c, d[ b ] ) );
        d = [];
        b = 0;
        for ( c = e.length; b < c; b++ ) {
            var f = e[ b ].split( ":" );
            if ( f[ 1 ] )
                for ( var g = f[ 1 ].split( "," ), h = 0; h < g.length; h += 1 ) d.push( new H( f[ 0 ], g[ h ] ) );
            else d.push( new H( f[ 0 ] ) )
        }
        a( d )
    };
    V.prototype.v = function ( a, b ) {
        return b( a.k.w )
    };
    T( "custom", function ( a, b ) {
        return new V( b, a )
    } );

    function W( a, b ) {
        this.c = a;
        this.d = b
    }
    var xa = {
        regular: "n4",
        bold: "n7",
        italic: "i4",
        bolditalic: "i7",
        r: "n4",
        b: "n7",
        i: "i4",
        bi: "i7"
    };
    W.prototype.v = function ( a, b ) {
        return b( a.k.w )
    };
    W.prototype.load = function ( a ) {
        t( this.c, "head", u( this.c, x( this.c ) + "//webfonts.fontslive.com/css/" + this.d.key + ".css" ) );
        for ( var b = this.d.families, c = [], d = 0, e = b.length; d < e; d++ ) c.push.apply( c, ya( b[ d ] ) );
        a( c )
    };

    function ya( a ) {
        var b = a.split( ":" );
        a = b[ 0 ];
        if ( b[ 1 ] ) {
            for ( var c = b[ 1 ].split( "," ), b = [], d = 0, e = c.length; d < e; d++ ) {
                var f = c[ d ];
                if ( f ) {
                    var g = xa[ f ];
                    b.push( g ? g : f )
                }
            }
            c = [];
            for ( d = 0; d < b.length; d += 1 ) c.push( new H( a, b[ d ] ) );
            return c
        }
        return [ new H( a ) ]
    }
    T( "ascender", function ( a, b ) {
        return new W( b, a )
    } );

    function X( a, b, c ) {
        this.a = a;
        this.c = b;
        this.d = c;
        this.m = []
    }
    X.prototype.v = function ( a, b ) {
        var c = this,
            d = c.d.projectId,
            e = c.d.version;
        if ( d ) {
            var f = c.c.u,
                g = c.c.createElement( "script" );
            g.id = "__MonotypeAPIScript__" + d;
            var h = p;
            g.onload = g.onreadystatechange = function () {
                if ( !h && ( !this.readyState || "loaded" === this.readyState || "complete" === this.readyState ) ) {
                    h = k;
                    if ( f[ "__mti_fntLst" + d ] ) {
                        var e = f[ "__mti_fntLst" + d ]();
                        if ( e )
                            for ( var m = 0; m < e.length; m++ ) c.m.push( new H( e[ m ].fontfamily ) )
                    }
                    b( a.k.w );
                    g.onload = g.onreadystatechange = l
                }
            };
            g.src = c.D( d, e );
            t( this.c, "head", g )
        } else b( k )
    };
    X.prototype.D = function ( a, b ) {
        var c = x( this.c ),
            d = ( this.d.api || "fast.fonts.com/jsapi" ).replace( /^.*http(s?):(\/\/)?/, "" );
        return c + "//" + d + "/" + a + ".js" + ( b ? "?v=" + b : "" )
    };
    X.prototype.load = function ( a ) {
        a( this.m )
    };
    T( "monotype", function ( a, b ) {
        var c = ( new C( navigator.userAgent, document ) ).parse();
        return new X( c, b, a )
    } );

    function Y( a, b ) {
        this.c = a;
        this.d = b;
        this.m = []
    }
    Y.prototype.D = function ( a ) {
        var b = x( this.c );
        return ( this.d.api || b + "//use.typekit.net" ) + "/" + a + ".js"
    };
    Y.prototype.v = function ( a, b ) {
        var c = this.d.id,
            d = this.d,
            e = this.c.u,
            f = this;
        c ? ( e.__webfonttypekitmodule__ || ( e.__webfonttypekitmodule__ = {} ), e.__webfonttypekitmodule__[ c ] = function ( c ) {
            c( a, d, function ( a, c, d ) {
                for ( var e = 0; e < c.length; e += 1 ) {
                    var g = d[ c[ e ] ];
                    if ( g )
                        for ( var Q = 0; Q < g.length; Q += 1 ) f.m.push( new H( c[ e ], g[ Q ] ) );
                    else f.m.push( new H( c[ e ] ) )
                }
                b( a )
            } )
        }, c = ha( this.c, this.D( c ) ), t( this.c, "head", c ) ) : b( k )
    };
    Y.prototype.load = function ( a ) {
        a( this.m )
    };
    T( "typekit", function ( a, b ) {
        return new Y( b, a )
    } );

    function za( a, b, c ) {
        this.L = a ? a : b + Aa;
        this.p = [];
        this.Q = [];
        this.da = c || ""
    }
    var Aa = "//fonts.googleapis.com/css";
    za.prototype.f = function () {
        if ( 0 == this.p.length ) throw Error( "No fonts to load !" );
        if ( -1 != this.L.indexOf( "kit=" ) ) return this.L;
        for ( var a = this.p.length, b = [], c = 0; c < a; c++ ) b.push( this.p[ c ].replace( / /g, "+" ) );
        a = this.L + "?family=" + b.join( "%7C" );
        0 < this.Q.length && ( a += "&subset=" + this.Q.join( "," ) );
        0 < this.da.length && ( a += "&text=" + encodeURIComponent( this.da ) );
        return a
    };

    function Ba( a ) {
        this.p = a;
        this.aa = [];
        this.I = {}
    }
    var Ca = {
        latin: "BESbswy",
        cyrillic: "&#1081;&#1103;&#1046;",
        greek: "&#945;&#946;&#931;",
        khmer: "&#x1780;&#x1781;&#x1782;",
        Hanuman: "&#x1780;&#x1781;&#x1782;"
    }, Da = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        }, Ea = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        }, Fa = RegExp( "^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$" );
    Ba.prototype.parse = function () {
        for ( var a = this.p.length, b = 0; b < a; b++ ) {
            var c = this.p[ b ].split( ":" ),
                d = c[ 0 ].replace( /\+/g, " " ),
                e = [ "n4" ];
            if ( 2 <= c.length ) {
                var f;
                var g = c[ 1 ];
                f = [];
                if ( g )
                    for ( var g = g.split( "," ), h = g.length, n = 0; n < h; n++ ) {
                        var m;
                        m = g[ n ];
                        if ( m.match( /^[\w]+$/ ) ) {
                            m = Fa.exec( m.toLowerCase() );
                            var r = j;
                            if ( m == l ) r = "";
                            else {
                                r = j;
                                r = m[ 1 ];
                                if ( r == l || "" == r ) r = "4";
                                else var oa = Da[ r ],
                                r = oa ? oa : isNaN( r ) ? "4" : r.substr( 0, 1 );
                                r = [ m[ 2 ] == l || "" == m[ 2 ] ? "n" : Ea[ m[ 2 ] ], r ].join( "" )
                            }
                            m = r
                        } else m = "";
                        m && f.push( m )
                    }
                0 < f.length && ( e = f );
                3 == c.length && ( c = c[ 2 ],
                    f = [], c = !c ? f : c.split( "," ), 0 < c.length && ( c = Ca[ c[ 0 ] ] ) && ( this.I[ d ] = c ) )
            }
            this.I[ d ] || ( c = Ca[ d ] ) && ( this.I[ d ] = c );
            for ( c = 0; c < e.length; c += 1 ) this.aa.push( new H( d, e[ c ] ) )
        }
    };

    function Z( a, b, c ) {
        this.a = a;
        this.c = b;
        this.d = c
    }
    var Ga = {
        Arimo: k,
        Cousine: k,
        Tinos: k
    };
    Z.prototype.v = function ( a, b ) {
        b( a.k.w )
    };
    Z.prototype.load = function ( a ) {
        var b = this.c;
        if ( "MSIE" == this.a.getName() && this.d.blocking != k ) {
            var c = s( this.X, this, a ),
                d = function () {
                    b.z.body ? c() : setTimeout( d, 0 )
                };
            d()
        } else this.X( a )
    };
    Z.prototype.X = function ( a ) {
        for ( var b = this.c, c = new za( this.d.api, x( b ), this.d.text ), d = this.d.families, e = d.length, f = 0; f < e; f++ ) {
            var g = d[ f ].split( ":" );
            3 == g.length && c.Q.push( g.pop() );
            var h = "";
            2 == g.length && "" != g[ 1 ] && ( h = ":" );
            c.p.push( g.join( h ) )
        }
        d = new Ba( d );
        d.parse();
        t( b, "head", u( b, c.f() ) );
        a( d.aa, d.I, Ga )
    };
    T( "google", function ( a, b ) {
        var c = ( new C( navigator.userAgent, document ) ).parse();
        return new Z( c, b, a )
    } );

    function $( a, b ) {
        this.c = a;
        this.d = b;
        this.m = []
    }
    $.prototype.D = function ( a ) {
        return x( this.c ) + ( this.d.api || "//f.fontdeck.com/s/css/js/" ) + ( this.c.u.location.hostname || this.c.G.location.hostname ) + "/" + a + ".js"
    };
    $.prototype.v = function ( a, b ) {
        var c = this.d.id,
            d = this.c.u,
            e = this;
        c ? ( d.__webfontfontdeckmodule__ || ( d.__webfontfontdeckmodule__ = {} ), d.__webfontfontdeckmodule__[ c ] = function ( a, c ) {
            for ( var d = 0, n = c.fonts.length; d < n; ++d ) {
                var m = c.fonts[ d ];
                e.m.push( new H( m.name, ma( "font-weight:" + m.weight + ";font-style:" + m.style ) ) )
            }
            b( a )
        }, c = ha( this.c, this.D( c ) ), t( this.c, "head", c ) ) : b( k )
    };
    $.prototype.load = function ( a ) {
        a( this.m )
    };
    T( "fontdeck", function ( a, b ) {
        return new $( b, a )
    } );
    window.WebFontConfig && U.load( window.WebFontConfig );
} )( this, document );



//#MODULE - CacheManager
//> Author: Mike Byrnes
//>
//> Create Date: January 7, 2014
//>
//##DESCRIPTION: This module will handle getting, setting, and removing items from the cache
define( 'cacheManager',[ 'commonUtil/ClientSideStorage' ], function ( ClientSideStorage ) {
    var EXP = "Exp";

    function get( storage, key ) {
        var value = null,
            now = new Date(),
            getMethod = ClientSideStorage[ 'get' + storage ],
            //adding backward compatibility
            exp = getMethod( key + EXP ) || getMethod( key + "_exp" );

        if ( exp ) {
            exp = new Date( exp );
            if ( exp > now ) {
                value = getMethod( key );
            } else {
                ClientSideStorage[ 'remove' + storage ]( key );
            }
        } else {
            value = getMethod( key );
        }

        if ( JSON && value ) {
            // not all results are JSON!
            try {
                value = JSON.parse( value );
            } catch ( e ) {}
        }

        return value;
    }

    function set( setMethod, key, data, expiration ) {
        if ( JSON ) {
            data = JSON.stringify( data );
        }

        setMethod( key, data );
        if ( expiration ) {
            var now = new Date(),
                //Convert minutes to milliseconds
                exp = new Date( now.getTime() + ( expiration * 60 * 1000 ) );
            setMethod( key + EXP, exp );
        }
    }

    function remove( storage, key ) {
        var removeMethod = ClientSideStorage[ 'remove' + storage ];

        removeMethod( key );
        removeMethod( key + EXP );
    }

    function clear( storage ) {
        var clearMethod = ClientSideStorage[ 'clear' + storage ];

        clearMethod();
    }

    //### Method - getSession(key) public method to get value from the session cache for the specified key
    //
    //> parameters
    //>
    //+ *key* - the key used to retrieve the data from the cache
    //
    //> returns
    //>
    //+ The data from the cache for the specified key or null
    function getSession( key ) {
        return get( "Session", key );
    }

    //### Method - getPersistent(key) public method to get value from the persistent cache for the specified key
    //
    //> parameters
    //>
    //+ *key* - the key used to retrieve the data from the cache
    //
    //> returns
    //>
    //+ The data from the cache for the specified key or null
    function getPersistent( key ) {
        return get( "Persistent", key );
    }

    //###Method - setSession(key, data, expiration) public method to set a session cache
    //
    //> parameters
    //>
    //+ *key* - the key to store in the cache
    //+ *data* - that data to store in the cache
    //+ *expiration* - (optional) minutes from the current time when the cache will expire
    function setSession( key, data, expiration ) {
        set( ClientSideStorage.setSession, key, data, expiration );
    }

    //###Method - setPersistent(key, data, expiration) public method to set a persistent cache
    //
    //> parameters
    //>
    //+ *key* - the key to store in the cache
    //+ *data* - that data to store in the cache
    //+ *expiration* - (optional) minutes from the current time when the cache will expire
    function setPersistent( key, data, expiration ) {
        set( ClientSideStorage.setPersistent, key, data, expiration );
    }

    function removeSession( key ) {
        remove( "Session", key );
    }

    function removePersistent( key ) {
        remove( "Persistent", key );
    }

    function clearSession() {
        clear( "Session" );
    }

    function clearPersistent() {
        clear( "Persistent" );
    }

    return {
        getSession: getSession,
        getPersistent: getPersistent,
        setSession: setSession,
        clearSession: clearSession,
        clearPersistent: clearPersistent,
        setPersistent: setPersistent,
        removeSession: removeSession,
        removePersistent: removePersistent
    };
} );
define( 'headerDesktop',[ 'analyticsQueryString', 'jquery', 'base', 'headerFOBNav', 'headerFlyout', 'cookie', 'webfont', 'require', 'segmentation', 'globals', 'cacheManager' ], function ( analyticsQueryString, $, Base, HeaderFOBNav, HeaderFlyout, Cookie, webFont, require, Segmentation, Globals, CacheManager ) {

    var NAME = "Header",
        SEARCH_BOX_HINT = "Search or enter web ID",
        SITE_CHANNEL = "SITE",
        REGISTRY_CHANNEL = "REGISTRY",
        tid, /*   timeout id   */
        pauseOnMoveDetection = false,
        selectedID,
        /*
        vars to support mouse direction movement
        used w/Base.pointInTriangle() call
        if moving towards open flyout return true
        else false
    */
        point,
        movingCounter = 0,
        vert1 = {
            x: 0,
            y: 0
        },
        vert2,
        vert3,
        sessionKey = 'qbRestKillSwitchResponse',
        cacheTimeExpiry = '5',
        toFlyoutIntent = false; //whether or not moving in direction of open flyout

    function splitCB( json ) {
        return json;
    }


    return {
        SITE: SITE_CHANNEL,
        REGISTRY: REGISTRY_CHANNEL,
        getName: function () {
            return NAME;
        },
        getCurrentChannel: function ( testURL ) {
            //Channel getter method
            var url = testURL || window.location.href;
            return~ url.indexOf( "registry" ) ? REGISTRY_CHANNEL : SITE_CHANNEL;
        },
        pdfFixToggle: function ( openFlag ) {
            var iev = Base.getIEVersion();
            var margin = openFlag ? "412px" : "0px";
            if ( iev && iev < 10 && ( window.location.href.indexOf( "privacy_dnsbank.jsp" ) > -1 ) ) {
                //fixed height
                $( "div#bd" ).css( "margin-top", margin );
            }

        },
        searchHintToggle: function ( bool, input ) {
            if ( bool && input.val() === SEARCH_BOX_HINT ) {
                input.val( "" );
            }

            if ( !bool && input.val() === "" ) {
                input.val( SEARCH_BOX_HINT );
            }

            input.css( "color", ( bool ) ? '#333' : '#8C8C8C' );
        },
        initSearchHint: function () {
            var _this = this,
                searchTextBox = $( "#nav-search-box input#globalSearchInputField" );
            if ( searchTextBox ) {
                searchTextBox.val( SEARCH_BOX_HINT );
                searchTextBox.css( "color", '#8C8C8C' );

                searchTextBox.on( "focus", function () {
                    _this.searchHintToggle( true, searchTextBox );
                } );

                searchTextBox.on( "blur", function () {
                    _this.searchHintToggle( false, searchTextBox );
                } );

                searchTextBox.parent().parent().on( "submit", function ( e ) {
                    if ( searchTextBox.val() === "" || searchTextBox.val() === SEARCH_BOX_HINT ) {
                        e.preventDefault();
                        searchTextBox.focus();
                        return false;
                    }
                    return true;
                } );
            }
        },
        loadFont: function ( cb ) {

            var fontBaseUrl = ( typeof window.macysConfig === "object" ) ? window.macysConfig.fontBaseUrl || "" : "";

            window.WebFont.load( {
                custom: {
                    families: [ 'Avenir Black', 'Avenir Black:n' ],
                    urls: [ fontBaseUrl + '/web20/assets/style/common/avenirblack.css' ]
                },
                loading: function () {},
                active: function () {},
                inactive: function () {},
                fontloading: function ( familyName, fvd ) {},
                fontactive: function ( familyName, fvd ) {
                    if ( cb ) {
                        cb();
                    }
                },
                fontinactive: function ( familyName, fvd ) {}
            } );
        },

        enableQuickBagRest: function () {
            require( [ 'quickBag/QuickBagRESTApi', 'quickBag/QuickBagActions', 'pubsub' ], function ( QuickBag, qbActions, pubsub ) {
                pubsub.observe( qbActions.INIT ).publish();
            } );
        },

        enableQuickBag: function () {
            require( [ 'quickBag/QuickBag' ], function ( QuickBag ) {
                QuickBag.init();
            } );
        },

        //sets quickBag Killswitch response in session storage
        setCacheData: function ( killSwitchValue ) {
            CacheManager.setSession( sessionKey, killSwitchValue, cacheTimeExpiry );
        },

        //returns cached quickBag Killswitch response
        getCachedData: function () {
            var cachedData = CacheManager.getSession( sessionKey );

            if ( cachedData !== null ) {
                return cachedData;
            } else {
                return null;
            }
        },

        loadQuickBag: function ( isRestQuickBag ) {
            var _this = this,
                refactoredQuickBagEnabled = Globals.getValue( 'props.refactoredQuickBag' );

            if ( isRestQuickBag ) {
                //if it is our experiment load quickbag rest or the old quickbag
                _this.enableQuickBagRest();
            } else if ( refactoredQuickBagEnabled ) {
                //unfortunately old quickbag is still under warranty period. hence cannot remove this killswitch just yet.
                _this.enableQuickBag();
            }
        },

        quickBagInitialization: function () {
            var cachedKillSwitchValue = this.getCachedData();

            if ( cachedKillSwitchValue === null ) {
                //code to get Componetized quickbag killswitch value
                //WARNING: Do not use this way of checking killswitch value. This is experimental and can be changed in future.
                //To check for componentize quickbag please use props.componentizedQuickBagEnabled from Globals
                $.ajax( {
                    url: Globals.getValue( 'props.restKillSwitchUrl' ) + "/componentizedQuickBagEnabled",
                    type: "GET",
                    cache: false,
                    success: function ( data ) {
                        this.setCacheData( data.componentizedQuickBagEnabled );
                        this.loadQuickBag( data.componentizedQuickBagEnabled );
                    }.bind( this ),
                    error: function () {
                        this.setCacheData( false );
                        this.loadQuickBag( false );
                    }.bind( this ),
                    timeout: 3000
                } );
            } else {
                this.loadQuickBag( cachedKillSwitchValue );
            }
        },

        init: function () {
            var _this = this;
            HeaderFlyout.enable();
            if ( Globals.getValue( 'props.mashupServiceProductRecommendationsEnabled' ) === true && Globals.getValue( 'props.domesticMode' ) === "true" ) {
                var urlParamObj, cmSp, kws;
                var globalSearchInputField = $( '#globalSearchInputField' );
                urlParamObj = analyticsQueryString.buildQueryMap();
                cmSp = urlParamObj[ "cm_sp" ];
                kws = urlParamObj[ "kws" ];
                if ( cmSp && kws ) {
                    var kwsTerm = decodeURIComponent( kws );
                    globalSearchInputField.val( kwsTerm );
                    globalSearchInputField.autofocus( {
                        // add options
                        disabled: true
                    } );
                }
            }
            _this.quickBagInitialization();

            if ( Base.isThirdParty() ) {
                try {
                    if ( ( typeof window.macysConfig === "undefined" ) || ( typeof window.macysConfig.headerTarget === "undefined" ) || ( typeof window.macysConfig.footerTarget === "undefined" ) ) {
                        throw new Error( "Third Party Header/Footer failed! Missing required 'macysConfig' object. Please reference guide: http://ui-standards.herokuapp.com/components/header" );
                    }
                } catch ( e ) {
                    return;
                }
                require( [ "handlebars", "headerTemplate" ], function ( Handlebars, headerTemplate ) {
                    var macysBaseUrl = window.macysConfig.fontBaseUrl || "";
                    //render header component
                    Handlebars.partials = Handlebars.templates;
                    if ( $( window.macysConfig.headerTarget ).length > 0 ) {
                        var template = headerTemplate( {
                            macysBaseUrl: macysBaseUrl
                        } );
                        $( window.macysConfig.headerTarget ).html( template );
                        setTimeout( function () {
                            _this.initSearchHint();
                        }, 100 ); //let DOM render
                    } else {
                        throw new Error( "Third party header failed! Missing required headerTarget configuration property" );
                    }

                    //get back on track with the regular Header flow of things
                    _this.start();
                } );
            } else {
                this.start();
            }
        },
        removeHiddenClass: function () {
            var m = $( "div#globalMastheadCategoryMenu" );

            if ( m.hasClass( "globalHiddenDefaultTopNav" ) ) {
                m.removeClass( "globalHiddenDefaultTopNav" );
            }
        },
        start: function () {
            var _this = this;
            $( HeaderFOBNav ).on( 'FOBReady', function ( event, success ) {
                if ( success ) {
                    var catIDs;
                    catIDs = HeaderFOBNav.getCategoryIds();
                    HeaderFlyout.init( catIDs, Base.ALIGN_BOTTOM );
                } else {
                    _this.removeHiddenClass();
                }
            } );

            //this will get triggered hover:desktop click:touchDevices
            HeaderFOBNav.onOver( function ( id, totalFOBs, selectedIndex, offset, domElement ) {
                //ensure this is set to false if we're not in pauseOnMoveDetection mode
                toFlyoutIntent = !pauseOnMoveDetection ? false : true;
                vert1.x = vert1.y = 0;
                //adding support for autocomplete
                //close autocomplete on hover
                //try{
                //MACYS.AutoComplete.globalSearchInputField.autocomplete("close");
                // }catch(e){}
                var domid = domElement.attr( "id" );
                selectedID = Base.getSuffixId( domid );
                clearTimeout( tid );
                if ( !domElement.hasClass( "selected-flyout" ) ) {
                    //short delay to allow user to mouseover corner of adjacent topnav FOB items on way to flyout
                    //onmouse enter on flyout we'll clear the timeoutID, because we know it wasn't the intention of the use to select
                    if ( toFlyoutIntent ) {
                        tid = setTimeout( function () {
                            pauseOnMoveDetection = false;
                            domElement.addClass( "selected-flyout" );
                            HeaderFOBNav.deselectOthers( selectedID, "selected-flyout" );
                            HeaderFlyout.closeAll();
                            _this.pdfFixToggle( selectedID, true );
                            HeaderFlyout.open( selectedID, totalFOBs, selectedIndex, offset, domElement.width() );
                        }, 200 );
                    } else {
                        HeaderFOBNav.deselectOthers( selectedID, "selected-flyout" );
                        HeaderFlyout.closeAll();
                        domElement.addClass( "selected-flyout" );
                        selectedID = Base.getSuffixId( domElement.attr( "id" ) );
                        _this.pdfFixToggle( selectedID, true );
                        HeaderFlyout.open( selectedID, totalFOBs, selectedIndex, offset, domElement.width() );
                    }
                } else {
                    clearTimeout( tid );
                    //dont close flyout
                }
                $( '#sortBy, #ppp' ).css( {
                    position: 'static',
                    left: '-15000px'
                } );
            } );

            HeaderFOBNav.onOut( function ( id ) {
                vert1.x = vert1.y = 0;
                movingCounter = 0;
                clearTimeout( tid );
                //moving in direction of open flyout
                if ( toFlyoutIntent ) {
                    pauseOnMoveDetection = true;
                    clearTimeout( tid );
                    tid = setTimeout( function () {
                        HeaderFOBNav.deselectOthers();
                        _this.pdfFixToggle();
                        HeaderFlyout.closeAll();
                    }, 200 );
                } else {
                    pauseOnMoveDetection = false;
                    HeaderFOBNav.deselect( id );
                    _this.pdfFixToggle();
                    HeaderFlyout.closeAll();
                }
                $( '#sortBy, #ppp' ).css( {
                    position: 'static'
                } );
            } );
            HeaderFOBNav.onMove( function ( e ) {
                if ( !selectedID || pauseOnMoveDetection ) {
                    return;
                }
                movingCounter++;

                var p = HeaderFOBNav.getMouseCoords();
                if ( vert1.x === -1 ) {
                    vert1.x = p.x;
                    vert1.y = p.y;
                }
                //don't update everytime mouse moves
                //only every other firing
                if ( movingCounter > 0 ) {
                    movingCounter = 0;
                    var tmp = HeaderFlyout.getEdgeCoords( selectedID );

                    toFlyoutIntent = tmp ? Base.pointInTriangle( p.x, p.y, vert1.x, vert1.y, tmp.vert2.x, tmp.vert2.y, tmp.vert3.x, tmp.vert3.y ) : false;
                    vert1.x = p.x;
                    vert1.y = p.y;
                }
                //mouse movemnent is towards flyout
                //if point is inside or on triangle(formed by current point, top-left of flyout, and top-right of flyout)
                //then keep flyout open otherwise close, this is the intent of the mouse movement


                //update vert1 point, thus creating a new triangle to check against on next movement
            } );

            //ONLY TOUCH DEVICES WILL FIRE THIS CALLBCK
            HeaderFOBNav.onClick( function ( id, totalFOBs, selectedIndex, offset, domElement ) {
                if ( !domElement.hasClass( "selected-flyout" ) ) {
                    domElement.addClass( "selected-flyout" );
                    selectedID = Base.getSuffixId( domElement.attr( "id" ) );
                    HeaderFOBNav.deselectOthers( selectedID, "selected-flyout" );
                    HeaderFlyout.closeAll();
                    HeaderFlyout.open( selectedID, totalFOBs, selectedIndex, offset, domElement.width() );
                } else {
                    HeaderFOBNav.deselectOthers( selectedID, "selected-flyout" );
                    HeaderFlyout.closeAll();
                    domElement.removeClass( "selected-flyout" );
                }
            } );




            //callback function for ajax support of when flyouts are loaded
            $( HeaderFlyout ).on( 'flyoutReady', function ( event, success ) {
                var isFlyoutPresent = $( "#globalMastheadFlyout" ).length > 0;
                if ( success && isFlyoutPresent ) {
                    if ( !Base.isThirdParty() ) {
                        HeaderFlyout.replaceCoreMetrics();
                    }

                    HeaderFOBNav.bind();
                    HeaderFlyout.bind();
                    _this.removeHiddenClass();

                    $( "div#globalMastheadCategoryMenu" ).addClass( "macysDynFlyout" );
                    $( "div#globalMastheadCategoryMenu > ul" ).removeClass( "nav" ).removeClass( "nav-pills" );
                    //ensure all FOB items show and links are uppercase
                    $( "div#globalMastheadCategoryMenu > ul > li > a" ).css( {
                        textTransform: "uppercase",
                        paddingRight: "0px",
                        paddingLeft: "0px"
                    } );

                    //do not load avenir black webfont when optimized home page is enabled because this font is unused.          
                    if ( !( Globals.getValue( 'props.optimizedHomePageEnabled' ) && Globals.getValue( 'props.optimizedHomePageEnabled' ) === 'true' ) ) {
                        _this.loadFont();
                    }

                } else {
                    //dont bind events if this fails
                    $( "div#globalMastheadCategoryMenu" ).removeClass( "macysDynFlyout" );
                    $( "div#globalMastheadCategoryMenu > ul" ).addClass( "nav" ).addClass( "nav-pills" );
                    _this.removeHiddenClass();

                    //do not load avenir black webfont when optimized home page is enabled because this font is unused.
                    if ( !( Globals.getValue( 'props.optimizedHomePageEnabled' ) && Globals.getValue( 'props.optimizedHomePageEnabled' ) === 'true' ) ) {
                        _this.loadFont();
                    }
                }
            } );

            HeaderFlyout.onOver( function () {
                clearTimeout( tid );
                pauseOnMoveDetection = toFlyoutIntent = false;
            } );

            HeaderFlyout.onOut( function ( id ) {
                clearTimeout( tid );
                tid = setTimeout( function () {
                    _this.pdfFixToggle();
                    HeaderFlyout.closeAll();
                    HeaderFOBNav.deselectOthers();
                }, 400 );
            } );

            //start application
            HeaderFOBNav.init( HeaderFlyout.enabled() );
        }
    };
} );

//#MODULE - Refactored QuickBag: Model
// Implements the quickbag in the header
//
//> Author: Ankit Ag, Jacob Seymour
//>
//> Create Date: April 14, 2015
//>
//##DESCRIPTION: New Quickbag code that uses backbone, jquery and handlebars - migrated from YUI

define( 'quickBag/models/QuickBag', [
    'backbone', 'jquery', 'cacheManager', 'globals', 'underscore', 'cookie'
], function ( Backbone, $, CacheManager, Globals, _, Cookie ) {

    var QBModel = Backbone.Model.extend( {

        sessionKey: 'qbResponse',
        cacheTimeExpiry: '15',
        that: this,
        model: {},
        bagType: '',
        remove: '',
        isProcessing: NaN,

        //B-45924 - We should provide default assets url if there is no 'props.imageHost' global set
        constants: {

            //This constant is dynamic because slimages host does not support https by now, it should be "//slimages.macysassets.com/is/image/MCY"
            DEFAULT_ASSETS_URL: location.protocol === 'https:' ? '/img/ts/is/image/MCY' : 'http://slimages.macysassets.com/is/image/MCY',
            BAG_URL: '/bag/index.ognc?cm_sp=navigation-_-top_nav-_-bag '

        },

        initialize: function () {},

        url: function () {
            return '/bag/' + this.bagType;
        },

        getBagUrl: function () {
            return this.bagType;
        },

        getBagContents: function () {
            var bag = {
                products: [],
                categories: [],
                param: '',
                contents: '',
                bagId: ''
            };

            var data = this.getQuickBagSession();

            if ( data !== null ) {
                bag.products = [];
                bag.categories = [];
                bag.products = _.map( data.bagItems, function ( item ) {
                    return item.productID;
                } );

                bag.categories = _.map( data.bagItems, function ( item ) {
                    return item.categoryID;
                } );

                bag.contents = encodeURIComponent( bag.products.join( '|' ) );

                bag.param = {
                    bagContents: bag.contents
                };

                if ( typeof data.bagID === "string" && $.trim( data.bagID ) !== "" ) {
                    bag.bagId = data.bagID.replace( "-", "" );
                }

            }

            return bag;

        },

        updateQuickBagModel: function ( jsonModel, options ) {
            options = options || {};
            this.bagType = 'view';
            if ( jsonModel === null ) {
                this.ajaxRequest( options );
            } else {
                this.expireCache();
                this.model = jsonModel;
                this.setQuickBagSession( jsonModel );
            }
            return this.model;
        },

        removeQuickBagModel: function ( url, options ) {
            options = options || {};
            this.expireCache();
            this.bagType = url;

            this.ajaxRequest( options );
            return this.model;
        },

        viewQuickBagModel: function ( options ) {
            options = options || {};
            this.bagType = 'view';
            if ( this.isQBSessionStorageValid() === false ) {
                this.ajaxRequest( options );

            } else {

                this.model = this.getQuickBagSession();
                if ( options.success ) {
                    options.success( this.model );
                }
            }

            return this.model;

        },

        formatColorwayPrice: function ( TieredPrice, currency ) {
            var formattedPrice;
            if ( TieredPrice.label !== "[PRICE]" ) {
                formattedPrice = TieredPrice.label.replace( ".", "" );
                formattedPrice = formattedPrice.replace( " [PRICE]", ": " + currency + TieredPrice.formattedValue[ 0 ] );
            } else {
                formattedPrice = TieredPrice.label.replace( "[PRICE]", currency + TieredPrice.formattedValue[ 0 ] );
            }

            return formattedPrice;
        },

        ajaxRequest: function ( options ) {

            if ( this.isProcessing ) {
                return;
            } else {
                this.isProcessing = true;
                options = options || {};
                var bagModel = {};
                var that = this;
                $.ajax( this.url(), {
                    type: "POST",
                    dataType: "json",
                    success: function ( collection ) {
                        bagModel = collection;
                        var assetUrl = Globals.getValue( 'props.imageHost' ) || that.constants.DEFAULT_ASSETS_URL;
                        var bagUrl = ( Globals.getValue( 'props.baseHost' ) || '' ) + that.constants.BAG_URL;
                        var shippingCurrency = Cookie.get( "currency" );
                        var country = Cookie.get( "shippingCountry" );
                        if ( Globals.getValue( 'props.colorwayPricingEnabled' ) ) {
                            bagModel.bagItems.forEach( function ( bagItem ) {
                                if ( bagItem.colorwayPrice ) {
                                    var formattedTieredPrice = bagItem.colorwayPrice.formattedTieredPrice = [];
                                    var tieredPrice = bagItem.colorwayPrice.tieredPrice;
                                    //format first tier
                                    formattedTieredPrice.push( {
                                        formattedPrice: that.formatColorwayPrice( tieredPrice[ 0 ], bagModel.currency ),
                                        type: ""
                                    } );
                                    //format last tier, and skip all in-between tiers. tieredPrice.length-1 ==> last tier index
                                    if ( tieredPrice.length > 1 ) {
                                        formattedTieredPrice.push( {
                                            formattedPrice: that.formatColorwayPrice( tieredPrice[ tieredPrice.length - 1 ], bagModel.currency ),
                                            type: "salePrice"
                                        } );
                                    }
                                }
                            } );
                        }
                        bagModel.shippingCountry = country;
                        bagModel.assetUrl = assetUrl;
                        bagModel.bagUrl = bagUrl;
                        that.expireCache();
                        that.model = bagModel;
                        that.setQuickBagSession( bagModel );

                        if ( options.success ) {
                            return options.success( bagModel );
                        }
                    },
                    error: function ( collection ) {
                        bagModel = collection;
                        this.model = bagModel;
                        if ( options.error ) {
                            return options.error( bagModel );

                        }
                    }
                } );
            }
        },

        validator: function () {
            var bagCount = this.getCachedBagCount();
            var cookie = parseInt( Cookie.get( 'CartItem', 'GCs' ), 10 );

            if ( ( isNaN( cookie ) ) && ( bagCount === 0 ) ) {
                return true;
            }

            if ( cookie !== bagCount ) {
                return false;
            } else {
                return true;
            }
        },

        setQuickBagSession: function ( model ) {

            try {
                var assetUrl = Globals.getValue( 'props.imageHost' ) || this.constants.DEFAULT_ASSETS_URL;
                var bagUrl = ( Globals.getValue( 'props.baseHost' ) || '' ) + this.constants.BAG_URL;
                model.assetUrl = assetUrl;
                model.bagUrl = bagUrl;

                CacheManager.setSession( this.sessionKey, model, this.cacheTimeExpiry );
                this.isProcessing = false;
            } catch ( e ) {
                //TODO Implement exception handling
            }
        },

        isQBSessionStorageValid: function () {

            if ( ( CacheManager.getSession( this.sessionKey ) !== null ) && ( this.validator() !== false ) ) {

                if ( ( CacheManager.getSession( this.sessionKey ) ).shippingCountry !== Cookie.get( "shippingCountry" ) ) {
                    this.expireCache();
                    return false;
                } else {
                    return true;
                }

            } else {
                this.expireCache();
                return false;
            }

        },

        getQuickBagSession: function () {
            var bagModelTemp = {};

            if ( ( CacheManager.getSession( this.sessionKey ) !== null ) || ( this.validator() === false ) ) {
                bagModelTemp = CacheManager.getSession( this.sessionKey );
                return bagModelTemp;

            } else {
                return null;
            }
        },

        /**
         * getCachedBagCount This gets the count from the cache [if available].
         *                   This along with cookie is helpful for checking when the count has been changed and calls ajax to update itself.
         * @return
         */
        getCachedBagCount: function () {
            var bagCount = -1;
            var tempBagModel = {};

            if ( CacheManager.getSession( this.sessionKey ) !== null ) {
                tempBagModel = CacheManager.getSession( this.sessionKey );

                if ( tempBagModel !== null ) {
                    bagCount = tempBagModel.totalQty;
                    return bagCount;

                }
            } else {
                return bagCount;
            }
        },

        expireCache: function () {
            try {
                CacheManager.removeSession( this.sessionKey );
            } catch ( e ) {

            }

        },

        synchronizeQBModel: function ( method, model, options ) {
            options = _.extend( {
                parse: true
            }, options || {} );

            switch ( method ) {

            case 'remove':
                this.model = this.removeQuickBagModel( model.remove, options );
                break;

            case 'view':
                this.model = this.viewQuickBagModel( options );
                break;

            case 'update':
                if ( model !== null ) {
                    this.model = this.updateQuickBagModel( model, options );

                } else {
                    this.synchronizeQBModel( 'view', model, options );

                }
                break;

            case 'read':
                return this.getBagContents();

            }

        }

    } );

    return QBModel;

} );

define('mcomQuickBagTemplate/quickBag',['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"ajaxErrorText\"><span class=\"ajaxError\">This preview is temporarily unavailable.<br>Please view your item(s) in checkout.</span>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.bagItems : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.program(66, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.bagItems : stack1)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(64, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.bagItems : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "                        <div id=\"quickBagItem"
    + alias2(alias1((depth0 != null ? depth0.sequenceNumber : depth0), depth0))
    + "\" class=\"quickBagItem "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.registry : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-upcId=\""
    + alias2(alias1((depth0 != null ? depth0.upcID : depth0), depth0))
    + "\">\n\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.gwpIndicator : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.errorCodes : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.firstRegistryItem : depth0),{"name":"if","hash":{},"fn":container.program(15, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                            <div class=\"quickBagImageContainer\" id=\"productImage_quickBagItem"
    + alias2(alias1((depth0 != null ? depth0.sequenceNumber : depth0), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.registry : depth0),{"name":"if","hash":{},"fn":container.program(17, data, 0, blockParams, depths),"inverse":container.program(19, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                                    <img src=\""
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.assetUrl : stack1), depth0))
    + "/products/"
    + alias2(alias1((depth0 != null ? depth0.productImage : depth0), depth0))
    + "?$filtersm$&amp;wid=75\" class=\"quickBagImage\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.swatchImage : depth0),{"name":"if","hash":{},"fn":container.program(21, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.isQBLam : depth0),{"name":"if","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                </a>\n                            </div>\n\n                            <div class=\"quickBagItemDetails\">\n                                <div class=\"quickBagItemDetail\">\n                                    <div class=\"quickBagItemText\">\n                                        <div>\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.registry : depth0),{"name":"if","hash":{},"fn":container.program(25, data, 0, blockParams, depths),"inverse":container.program(27, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                                        </div>\n                                        <div>\n                                            "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":container.program(29, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                                            "
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.size : depth0),{"name":"if","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                                        </div>\n\n                                    </div>\n"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias4).call(alias3,"(this.gwpIndicator === false)",{"name":"condition","hash":{},"fn":container.program(34, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias4).call(alias3,"(this.gwpIndicator === true)",{"name":"condition","hash":{},"fn":container.program(57, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                </div>\n\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.promotions : depth0),{"name":"if","hash":{},"fn":container.program(59, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n                                <div class=\"itemCommandButtons\">\n                                    <span class = \"quickBagRemoveButton\">\n                                        <button alt=\"Remove\" title=\"Remove\" class=\"button secondary tiny radius button-remove\"  data-removeAttributes=\"?source=QB&"
    + alias2((helpers.getEncodedValue || (depth0 && depth0.getEncodedValue) || alias4).call(alias3,"upcId[0]",{"name":"getEncodedValue","hash":{},"data":data}))
    + "="
    + alias2(alias1((depth0 != null ? depth0.upcID : depth0), depth0))
    + "&"
    + alias2((helpers.getEncodedValue || (depth0 && depth0.getEncodedValue) || alias4).call(alias3,"sequenceNumber[0]",{"name":"getEncodedValue","hash":{},"data":data}))
    + "="
    + alias2(alias1((depth0 != null ? depth0.sequenceNumber : depth0), depth0))
    + "&"
    + alias2((helpers.getEncodedValue || (depth0 && depth0.getEncodedValue) || alias4).call(alias3,"quantity[0]",{"name":"getEncodedValue","hash":{},"data":data}))
    + "="
    + alias2(alias1((depth0 != null ? depth0.quantity : depth0), depth0))
    + "&"
    + alias2((helpers.getEncodedValue || (depth0 && depth0.getEncodedValue) || alias4).call(alias3,"gwpIndicator[0]",{"name":"getEncodedValue","hash":{},"data":data}))
    + "="
    + alias2(alias1((depth0 != null ? depth0.gwpIndicator : depth0), depth0))
    + "\">REMOVE</button>\n                                    </span>\n                                </div>\n                            </div>\n\n                            <div class=\"clearFloats\"></div>\n                        </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.firstRegistryItem : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data) {
    return "registryQuickBagItem";
},"10":function(container,depth0,helpers,partials,data) {
    return "                                <div class=\"quickBagAlertMessage\"> This Bonus has been added to your bag</div>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.errorCodes : depth0),{"name":"each","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n                                    <div class=\"quickBagAlertMessage\"><img alt = \"errorImage\" src=\"/img/icons/icon_error.gif\"> "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</div>\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                <div class=\"registryItem\">\n                                    <img class=\"regGiftBoxImg\" alt=\"Gift\" src=\"/web20/assets/img/quickbag/gift_box.gif\">\n                                    <span class=\"regItemText\">For: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.registrantFirstName : stack1), depth0))
    + " &amp; "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.coregistrantFirstName : stack1), depth0))
    + "</span>\n                                </div>\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "                                    <a href=\""
    + alias1(((helper = (helper = helpers.secureHost || (depth0 != null ? depth0.secureHost : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"secureHost","hash":{},"data":data}) : helper)))
    + "/wgl/registry/redirectbvrgvr/"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.registryID : stack1), depth0))
    + "\">\n";
},"19":function(container,depth0,helpers,partials,data) {
    return "                                    <a href=\""
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.productURL : depth0), depth0))
    + "\">\n";
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                        <div class=\"quickBagSwatchImage\">\n                                            <img src=\""
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.assetUrl : stack1), depth0))
    + "/swatches/"
    + alias2(alias1((depth0 != null ? depth0.swatchImage : depth0), depth0))
    + "?$filtersm$&wid=19&hei=19&fit=fit,1\" style=\"width:19px;height:19px;bottom:11px;position:relative; margin-left:55px\"/>\n                                        </div>\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "                                        <div class=\"lamBag\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.isQBLam : depth0), depth0))
    + "</div>\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "                                                <a href=\""
    + alias1(((helper = (helper = helpers.secureHost || (depth0 != null ? depth0.secureHost : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"secureHost","hash":{},"data":data}) : helper)))
    + "/wgl/registry/redirectbvrgvr/"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.registryID : stack1), depth0))
    + "\">"
    + alias1(alias2((depth0 != null ? depth0.productName : depth0), depth0))
    + "</a>\n";
},"27":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                                                <a href=\""
    + alias2(alias1((depth0 != null ? depth0.productURL : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.productName : depth0), depth0))
    + "</a>\n";
},"29":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<span>Color: <span class=\"sizeColorType\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.color : depth0), depth0))
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.size : depth0),{"name":"if","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span></span>";
},"30":function(container,depth0,helpers,partials,data) {
    return ",";
},"32":function(container,depth0,helpers,partials,data) {
    return "<span> Size: <span class=\"sizeColorType\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.size : depth0), depth0))
    + "</span></span>";
},"34":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "                                    <div class=\"quickBagMemberPrice\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.colorwayPrice : depth0),{"name":"if","hash":{},"fn":container.program(35, data, 0, blockParams, depths),"inverse":container.program(39, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.giftCard : depth0),{"name":"if","hash":{},"fn":container.program(53, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.quantity : depth0),{"name":"if","hash":{},"fn":container.program(55, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                    </div>\n";
},"35":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.colorwayPrice : depth0)) != null ? stack1.formattedTieredPrice : stack1),{"name":"if","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"36":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.colorwayPrice : depth0)) != null ? stack1.formattedTieredPrice : stack1),{"name":"each","hash":{},"fn":container.program(37, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"37":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                                                    <div class=\"colorwayTiers "
    + alias2(alias1((depth0 != null ? depth0.type : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.formattedPrice : depth0), depth0))
    + "</div>\n";
},"39":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.regPrice : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0, blockParams, depths),"inverse":container.program(45, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"40":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.willBe : depth0),{"name":"if","hash":{},"fn":container.program(41, data, 0, blockParams, depths),"inverse":container.program(43, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                                            <span class=\"salePrice\">Sale: "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1((depth0 != null ? depth0.salePrice : depth0), depth0))
    + "</span>\n";
},"41":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                                    <span class=\"itemPrice\">Will Be: "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1((depth0 != null ? depth0.regPrice : depth0), depth0))
    + "</span>\n";
},"43":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                                    <span class=\"itemPrice\">Reg: "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1((depth0 != null ? depth0.regPrice : depth0), depth0))
    + "</span>\n";
},"45":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.origPrice : depth0),{"name":"if","hash":{},"fn":container.program(46, data, 0, blockParams, depths),"inverse":container.program(51, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"46":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.willBe : depth0),{"name":"if","hash":{},"fn":container.program(47, data, 0, blockParams, depths),"inverse":container.program(49, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "                                            <span class=\"salePrice\">Now: "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1((depth0 != null ? depth0.salePrice : depth0), depth0))
    + "</span>\n";
},"47":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                                    <span class=\"itemPrice\">Will Be: "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1((depth0 != null ? depth0.origPrice : depth0), depth0))
    + "</span>\n";
},"49":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                                    <span class=\"itemPrice\">Orig: "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1((depth0 != null ? depth0.origPrice : depth0), depth0))
    + "</span>\n";
},"51":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                                <span> "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1((depth0 != null ? depth0.basePrice : depth0), depth0))
    + "</span>\n                                            ";
},"53":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                            <span>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.giftCard : depth0)) != null ? stack1.emailId : stack1), depth0))
    + "</span>\n";
},"55":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                                            <span class=\"quantityText\" data-quantity=\""
    + alias2(alias1((depth0 != null ? depth0.quantity : depth0), depth0))
    + "\">x Qty. "
    + alias2(alias1((depth0 != null ? depth0.quantity : depth0), depth0))
    + "</span>\n                                            <span class=\"totalValueText\"> = "
    + alias2(alias1(((stack1 = (depths[1] != null ? depths[1].bagDetails : depths[1])) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1((depth0 != null ? depth0.originalSaleTotal : depth0), depth0))
    + "</span>\n";
},"57":function(container,depth0,helpers,partials,data) {
    return "										<div class=\"quickBagMemberPrice\">\n										<div class=\"colorwayTiers\">FREE</div>\n										</div>\n";
},"59":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.promotions : depth0),{"name":"each","hash":{},"fn":container.program(60, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"60":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                                        <div class=\"promoDesc\">\n                                            <span class=\"promoDesc\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.promoDesc : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.amountDiscounted : depth0),{"name":"if","hash":{},"fn":container.program(61, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                                        </div>\n";
},"61":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "                                                <span class=\"promoPrice\">"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"(this.gwpIndicator === false)",{"name":"condition","hash":{},"fn":container.program(62, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\r\n";
},"62":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "- "
    + alias2(alias1(((stack1 = (depths[2] != null ? depths[2].bagDetails : depths[2])) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1((depth0 != null ? depth0.amountDiscounted : depth0), depth0));
},"64":function(container,depth0,helpers,partials,data) {
    return "                    <div class=\"zeroItemCount\">0 items in your bag. Shop great deals now!</div>\n";
},"66":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"zeroItemCount\">0 items in your bag. Shop great deals now!</div>\n";
},"68":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.bagItems : stack1)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(69, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"69":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "        <div class=\"ft\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.bagAd : depth0),{"name":"if","hash":{},"fn":container.program(70, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n            <div id=\"quickBagBottom\">\n                <div id=\"myBag\">\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.discountTotal : stack1),{"name":"if","hash":{},"fn":container.program(75, data, 0),"inverse":container.program(77, data, 0),"data":data})) != null ? stack1 : "")
    + "                    <span class=\"myBagLink\"><a href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.bagUrl : stack1), depth0))
    + "\">your bag total:</a> </span>\n                    <span id=\"quickBagSubTotal\">"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.currency : stack1), depth0))
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.merchandiseTotal : stack1), depth0))
    + "</span></div>\n                <div class=\"checkoutButton\"><a class=\"button tiny radius\" href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.bagUrl : stack1), depth0))
    + "\">CHECKOUT</a></div>\n            </div>\n        </div>\n";
},"70":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.bagAd : depth0)) != null ? stack1.promotions : stack1)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(71, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.bagAd : depth0)) != null ? stack1.url : stack1),{"name":"if","hash":{},"fn":container.program(73, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"71":function(container,depth0,helpers,partials,data) {
    return "                <div id=\"orderLevelPromo\"></div>\n";
},"73":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <div id=\"qbPromoAd\">\n                    <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.bagAd : depth0)) != null ? stack1.url : stack1), depth0))
    + "\">\n                        <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.bagAd : depth0)) != null ? stack1.imgSrc : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.bagAd : depth0)) != null ? stack1.alt : stack1), depth0))
    + "\" />\n                    </a>\n                </div>\n";
},"75":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <span id=\"quickBagYouSavedTotal\">you saved: <b>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.currency : stack1), depth0))
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.discountTotal : stack1), depth0))
    + "</b></span>\n";
},"77":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"quickBag\">\n    <div id=\"quickBagContent\">\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.loadingError : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "    </div>\n\n\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.bagDetails : depth0)) != null ? stack1.bagItems : stack1),{"name":"if","hash":{},"fn":container.program(68, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"useData":true,"useDepths":true})

});
define('mcomQuickBagTemplate/quickBagPromotions',['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"promoDescOrder\">\n        <span class=\"promoDesc\">\n            "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.discount : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </span>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                <span class=\"promoPrice\"> -"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.discount : depth0), depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.bagAd : depth0)) != null ? stack1.promotions : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true})

});
//#MODULE - Refactored QuickBag: Model
// Implements the quickbag in the header
//
//> Author: Jacob seymour, Ankit Ag
//>
//> Create Date: April 14, 2015
//>
//##DESCRIPTION: New Quickbag code that uses backbone, jquery and handlebars - migrated from YUI

define( 'quickBag/views/QuickBag',[ 'jquery', 'backbone', 'underscore', 'handlebars', 'hbsHelpers', 'mcomQuickBagTemplate/quickBag', 'mcomQuickBagTemplate/quickBagPromotions', 'quickBag/models/QuickBag', 'globals', 'cacheManager', 'cookie', 'mcomAnalytics' ],
    function ( $, Backbone, _, Handlebars, helpers, QuickBagTemplate, QuickBagPromotionsTemplate, QuickBagModel, Globals, CacheManager, Cookie, Coremetrics ) {

        return Backbone.View.extend( {

            el: "#quickBagHeader",

            events: {
                'mouseenter #checkoutLink': 'showBag',
                'click .itemCommandButtons button': 'removeItem',

                //Coremetrics tags
                'click #checkoutLink': 'createCoremetricsTag',
                'click #qbPromoAd': 'createCoremetricsTag',
                'click .checkoutButton': 'createCoremetricsTag',
                'click .myBagLink': 'createCoremetricsTag',
                'click .quickBagImageContainer': 'createCoremetricsTag',
                'click .quickBagItemText': 'createCoremetricsTag',
                'click .quickBagRemoveButton': 'createCoremetricsTag'
            },

            quickBagModel: {},
            template: QuickBagTemplate,
            promotionsTemplate: QuickBagPromotionsTemplate,

            // ##Public method that invokes Quick Bag's model. Takes in parameters where
            //  1. method : Can be view update or remove.
            //  2. jsonModel : If you want to provide the updated json. [ Optional ]
            //  2. options = which can use success and error callbacks. [ Optional ]

            synchronize: function ( method, jsonModel, options ) {
                var bagModel = {};

                jsonModel = ( typeof jsonModel === 'undefined' ) ? null : jsonModel;
                options = ( typeof options === 'undefined' ) ? null : options;
                bagModel = this.quickBagModel.synchronizeQBModel( method, jsonModel, options );

            },

            showBag: function ( isTotalsOnly ) {

                isTotalsOnly = typeof isTotalsOnly !== 'undefined' ? isTotalsOnly : false;

                var deferred = $.Deferred();

                if ( ( $( 'body #shoppingBagStore' ).length > 0 ) || ( window.location.href.indexOf( '/bag/atbpage/' ) > -1 ) ) {
                    $( 'body' ).addClass( 'noBag' );
                    window.MACYS.bagCommon.setBagNumberOfItems( Cookie.get( 'CartItem', 'GCs' ) );
                    return deferred.resolve();
                }

                // This is required to prevent banner overlapping on quickbag dropdown Bug D-13499.
                $( '.widget .mainContainer .flexShadow' ).css( 'z-index', '0' );

                var that = this,
                    MACYS = window.MACYS,
                    bagModel = {},
                    assetUrl = Globals.getValue( 'props.imageHost' ),
                    bagUrl = ' /bag/index.ognc?cm_sp=navigation-_-top_nav-_-bag ',
                    bagItemsCount = Cookie.get( 'CartItem', 'GCs' ),

                    //TODO:: eliminate all MACYS.config.Base dependencies and use Globals.getValue( 'props.XXX' ); instead
                    //TODO: add the promocode logic
                    promoCode = Cookie.get( "PromoCodeOne", "SMISCGCs" );
                that.quickBagModel.bagType = 'view';
                this.synchronize( 'view', that.quickBagModel, {
                    type: "POST",

                    success: function ( collection ) {
                        if ( Globals.getValue( 'props.itemAvailabilityDisplayLAM' ) && Globals.getValue( 'props.itemAvailabilityDisplayLAMQuickBagEnabled' ) ) {
                            require( [ "mcomjs/features/itemAvailability/view/QbLamView" ], function ( Lam ) {
                                Lam = new Lam( {
                                    "response": collection,
                                    "qbrest": false
                                } );
                                that.qbData( Lam.options.response, isTotalsOnly, deferred );
                            } );
                        } else {
                            that.qbData( collection, isTotalsOnly, deferred );
                        }

                    },
                    error: function ( collection ) {
                        bagModel.loadingError = 'This preview is temporarily unavailable.<br>Please view your item(s) in checkout.';
                        $( '#quickBag', that.$el ).remove();
                        that.$el.append( that.template( {
                            bagDetails: bagModel,
                            bagAd: null
                        } ) ).promise().done( function () {
                            deferred.resolve();
                        } );
                    }
                } );

                return deferred;
            },

            removeItem: function ( e ) {
                e.preventDefault();
                var that = this,
                    target = $( e.currentTarget ),
                    parent = target.closest( '.quickBagItem' );
                $( parent ).addClass( 'shrink' );
                this.quickBagModel.remove = 'remove' + target.attr( 'data-removeattributes' );

                this.synchronize( 'remove', this.quickBagModel, {
                    success: function ( collection ) {
                        $( parent ).remove();
                        window.MACYS.bagCommon.setBagNumberOfItems( collection.totalQty );
                        that.showBag( true );
                    }
                } );
            },

            qbData: function ( bagModel, isTotalsOnly, deferred ) {
                var that = this,
                    MACYS = window.MACYS;
                if ( bagModel !== null ) {
                    MACYS.bagCommon.setBagNumberOfItems( bagModel.totalQty );
                    bagModel.bagItems = bagModel.bagItems.reverse();
                }

                var bagAd = null;

                var promoPool = bagModel && bagModel.adPools && bagModel.adPools.BAG_AD_POOL;
                if ( promoPool && promoPool.items[ 0 ] && promoPool.items[ 0 ].adLinks ) {
                    bagAd = {
                        url: promoPool.items[ 0 ].adLinks[ 0 ].url,
                        imgSrc: '/dyn_img/site_ads/' + promoPool.items[ 0 ].fileName,
                        alt: promoPool.items[ 0 ].text || ""
                    };
                }

                var promotions = bagModel && bagModel.promotions;
                if ( promotions ) {
                    bagAd = bagAd || {};
                    bagAd.promotions = null;
                    var promotionsLength = promotions.length;
                    for ( var i = 0; i < promotionsLength; i++ ) {
                        var promotion = promotions[ i ];

                        if ( promotion.incompatible === true || promotion.triggerDidNotApplied === true ) {
                            bagAd.promotions = null;
                            break;
                        }

                        if ( promotion.promoDesc && promotion.itemSequenceNumber === 0 ) {
                            bagAd.promotions = bagAd.promotions || [];
                            bagAd.promotions.push( {
                                description: promotion.promoDesc,
                                discount: promotion.amountDiscounted > 0 ? ( bagModel.currency + promotion.amountDiscounted ) : null
                            } );
                        }
                    }
                }

                if ( isTotalsOnly === true && bagModel.bagItems.length > 0 ) {
                    if ( bagModel.discountTotal > 0 ) {
                        $( '#quickBagYouSavedTotal b', that.$el ).text( bagModel.currency + bagModel.discountTotal );
                    } else {
                        $( '#quickBagYouSavedTotal', that.$el ).empty();
                    }

                    $( '#quickBagSubTotal', that.$el ).text( bagModel.currency + bagModel.merchandiseTotal );
                    $( '#itemCount', that.$el ).html( ' (' + bagModel.totalQty + ') ' );

                    if ( bagModel.newBagFlow ) {
                        that.removeUnqualifiedGwpPwpProducts( bagModel.bagItems );
                    }

                    that.$( '#orderLevelPromo' ).html( that.promotionsTemplate( {
                        bagDetails: bagModel,
                        bagAd: bagAd
                    } ) );

                    deferred.resolve();

                } else {
                    $( '#quickBag', that.$el ).remove();
                    that.$el.append( that.template( {
                        bagDetails: bagModel,
                        bagAd: bagAd
                    } ) ).promise().done( function () {
                        that.$( '#orderLevelPromo' ).html( that.promotionsTemplate( {
                            bagDetails: bagModel,
                            bagAd: bagAd
                        } ) );
                        deferred.resolve();
                    } );
                }

                that.trigger( "quickbag:fetched", bagModel );
            },

            removeUnqualifiedGwpPwpProducts: function ( bagItems ) {
                var removeItems = [];
                $( "#quickBagContent div.quickBagItem" ).each( function () {
                    var upcIdTmp = $( this ).attr( "data-upcId" );
                    var lineItemElementId = $( this ).attr( "id" );
                    var removeLineItem = true;
                    if ( upcIdTmp ) {
                        if ( bagItems ) {
                            $.each( bagItems, function ( index, value ) {
                                if ( upcIdTmp === value.upcID.toString() ) {
                                    removeLineItem = false;
                                    return false;
                                }
                            } );
                        }

                        if ( removeLineItem ) {
                            removeItems.push( lineItemElementId );
                        }
                    }
                } );

                if ( removeItems && removeItems.length > 0 ) {
                    $.each( removeItems, function ( index, value ) {
                        var removeItem = $( "#" + value );
                        if ( removeItem ) {
                            removeItem.remove();
                        }
                    } );
                }
            },

            createCoremetricsTag: function ( e ) {
                var target = e.currentTarget,
                    elementId;
                switch ( true ) {
                case target.id === 'checkoutLink':
                    elementId = 'quickbag tab click';
                    break;
                case target.id === 'qbPromoAd':
                    elementId = 'promo details link';
                    break;
                case target.className.indexOf( 'checkoutButton' ) !== -1:
                    elementId = 'checkout button';
                    break;
                case target.className.indexOf( 'myBagLink' ) !== -1:
                    elementId = 'your bag link';
                    break;
                case target.className.indexOf( 'quickBagImageContainer' ) !== -1:
                    elementId = 'product image thumbnail';
                    break;
                case target.className.indexOf( 'quickBagItemText' ) !== -1:
                    elementId = 'product name';
                    break;
                case target.className.indexOf( 'editItem' ) !== -1:
                    elementId = 'edit';
                    break;
                case target.className.indexOf( 'quickBagRemoveButton' ) !== -1:
                    elementId = 'remove';
                    break;
                }
                if ( elementId ) {
                    Coremetrics.elementTag( {
                        elementID: elementId,
                        elementCategory: 'hover_bag'
                    } );
                }
            },

            render: function ( model ) {
                var that = this;
                this.quickBagModel = model;
                return this;
            }
        } );
    } );

//#MODULE - Refactored QuickBag
// Implements the button zoomer on QV pages
//
//> Author: Jacob seymour
//>
//> Create Date: April 14, 2015
//>
//##DESCRIPTION: New Quickbag code that uses backbone, jquery and handlebars - migrated from YUI

define( 'quickBag/QuickBag',[ 'jquery', 'globals', 'quickBag/models/QuickBag', 'quickBag/views/QuickBag' ], function ( $, Globals, Model, QuickBagView ) {

    var qbv;
    var model;
    var render = {};

    function init() {
        model = new Model();
        qbv = new QuickBagView();
        qbv.render( model );
    }

    return {
        init: init,
        render: render,
        getQuickBagView: function () {
            if ( !qbv ) {
                init();
            }
            return qbv;
        },
        expireCache: function () {
            if ( model ) {
                model.expireCache();
            }
        }
    };


} );

/* files in this bundle = ["/target/classes//js/mcom/base/AppController","/src/mcom/util/CoreMetricsElement","/src/mcom/features/header/HeaderApp","/src/mcom/base/AppController","/js/common/util/AnalyticsQueryString","/src/mcom/features/header/HeaderFOBNavigation","/src/mcom/features/header/HeaderFlyout","/vendor/script/requirejs/webfont","/js/common/util/CacheManager","/src/mcom/features/header/Header","/src/mcom/features/quickBag/models/QuickBag","/templates/mcom/features/quickBag/quickBag","/templates/mcom/features/quickBag/quickBagPromotions","/src/mcom/features/quickBag/views/QuickBag","/src/mcom/features/quickBag/QuickBag"] */require.config( { bundles: {'appController': ["appController","headerApp","headerDesktop","headerFOBNav","headerFlyout","quickBag/QuickBag"]} } );