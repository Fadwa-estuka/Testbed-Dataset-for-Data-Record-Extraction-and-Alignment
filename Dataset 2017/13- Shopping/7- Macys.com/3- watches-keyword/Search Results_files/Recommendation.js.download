//Recommendation
define( [ "jquery", "underscore", "backbone", "cookie", "logger", "commonjs/components/TrackingPixel", "prosTrackingHelper", "globals", 'thumbnailCarousel/pros/ProsEvents' ],
    function ( $, _, Backbone, Cookie, Logger, trackingPixel, ProsTrackingHelper, Globals, ProsEvents ) {
        'use strict';

        var MISCGCS = "MISCGCs",
            RTD_COOKIE_NAME = "RTD",
            SHIPPING_COUNTRY_COOKIE_NAME = "shippingCountry",
            ZIP_CODE_COOKIE_NAME = "USERPC",
            STATE_COOKIE_NAME = "USERST",
            PATH_RTO_RECOMMENDATIONS = '/sdp/rto/request/recommendations',
            PATH_RTO_INFORMANT_EVENT = '/EventsWar/events/record/customeraction',
            PATH_FCC_RECOMMENDATIONS = '/api/catalog/v2/categories/CATEGORY_ID/products?returnNavigationProductPool=true&_sortby=BEST_SELLERS&_limit=15&_offset=1',
            HEADER_SEPARATOR = "@",
            DEFAULT_HEADER_TEXT = "you might also like...",
            DEFAULT_TIME_OUT = 15000,
            DEFAULT_FCC_CATEGORY_ID = 118,
            FCC_FALLBACK_ZONES_MAP = {
                'ATBPage_ZONE_C': 'ATBPage_ZONE_C',
                'PDP_ZONE_A': 'PDP_ZONE_A',
                'SB_ZONE_A': 'SB_ZONE_A',
                'ZSR_ZONE_B': 'ZSR_ZONE_B',
                'PDP_ZONE_A|PDP_ZONE_B': 'PDP_ZONE_A',
                'ATBPage_ZONE_C|ATBPage_ZONE_D|ATBPage_ZONE_E': 'ATBPage_ZONE_C'
            };

        //initCB add global function to handle hard-coded 'initCB' in jsonp response
        var initCB = function () {
            window.splitCB = function ( json ) {
                return json;
            };
        };

        var getCustomerId = function () {
            return Cookie.get( "macys_online_uid" ) || '';
        };

        var paramsToObj = function ( parameters ) {
            var ret = {},
                seg = parameters.replace( /^\?/, '' ).split( '&' ),
                len = seg.length,
                i = 0,
                s;
            for ( ; i < len; i++ ) {
                if ( !seg[ i ] ) {
                    continue;
                }
                s = seg[ i ].split( '=' );
                ret[ s[ 0 ] ] = s[ 1 ];
            }
            return ret;
        };

        var buildFccUrl = function ( categoryId ) {
            categoryId = categoryId || DEFAULT_FCC_CATEGORY_ID;
            return PATH_FCC_RECOMMENDATIONS.replace( /CATEGORY_ID/, categoryId );
        };

        var generateUUID = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function ( c ) {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : ( r & 0x3 | 0x8 );
                return v.toString( 16 );
            } );
        };

        var buildFccRecommendationsObject = function ( data, params ) {
            if ( !data || !data.products || !data.products.navigationPoolProducts || !params ) {
                return false;
            }
            var recommendedProducts,
                recommendationResponse = {
                    status: 'SUCCESS',
                    error: null
                },
                choiceId = 'cidM01MBN-' + generateUUID() + '@H7@customers+also+shopped$' + params.categoryId + '$';

            recommendedProducts = data.products.navigationPoolProducts.length > params.maxRecommendations ?
                data.products.navigationPoolProducts.slice( 0, params.maxRecommendations ) : data.products.navigationPoolProducts;

            recommendationResponse.recommendedItems = recommendedProducts.map( function ( element, index ) {
                return {
                    choiceId: choiceId + element,
                    recommendedItemId: element,
                    productId: element
                };
            } );

            return recommendationResponse;
        };

        var getFccRecommendations = function ( params, callback ) {
            $.ajax( {
                type: 'GET',
                url: buildFccUrl( params.categoryId ),
                timeout: params.timeout,
                headers: {
                    'X-Macys-ClientId': 'PROS'
                },
                success: function ( data ) {
                    callback( true, prepareRecommendationJSON( buildFccRecommendationsObject( data, params ) ) );
                },
                error: function ( x, t, m ) {
                    callback( false, {
                        error: t + ",message:" + m.message + " |loading: " + PATH_FCC_RECOMMENDATIONS + " |with category id: " + params.categoryId
                    } );
                }
            } );
        };


        var getRecommendationsV3 = function ( opts ) {
            if ( !Globals.getValue( "props.prosPanelEnabled" ) ) {
                return;
            }
            if ( !opts.requester || !opts.productId ) {
                this.trigger( ProsEvents.recommendationCallFailure, {
                    error: "Missing mandatory parameters requester:[" + opts.requester + "], productId:[" + opts.productId + "]"
                }, opts );
                return false;
            }
            var data = _.defaults( {}, opts, {
                visitorId: this.getRTDSessionCookie() || '',
                countryCode: Cookie.get( SHIPPING_COUNTRY_COOKIE_NAME ),
                zipCode: Cookie.get( ZIP_CODE_COOKIE_NAME, MISCGCS ) || '',
                stateCode: Cookie.get( STATE_COOKIE_NAME, MISCGCS ) || '',
                customerId: this.getCustomerId()
            }, opts.params );

            data = _.omit( data, [ 'params', 'rtoPath' ] );
            data = $.param( data );

            var _this = this;

            var fccCallback = function ( success, json ) {
                if ( success ) {
                    _this.trigger( ProsEvents.recommendationCallSuccess, {
                        recommendedItems: json,
                        recommendationsOnAllZones: {},
                        context: FCC_FALLBACK_ZONES_MAP[ opts.context ]
                    }, opts );
                } else {
                    _this.trigger( ProsEvents.recommendationCallFailure, {
                        error: "FCC recommendation failed"
                    }, opts );
                }
            };

            $.ajax( {
                url: PATH_RTO_RECOMMENDATIONS,
                type: 'POST',
                data: data,
                dataType: 'json',
                timeout: opts.timeout,
                jsonp: false,
                jsonpCallback: "initCB",
                success: function ( json ) {
                    if ( needFccRecommendation( opts, json ) ) {
                        getFccRecommendations( paramsToObj( data ), fccCallback );
                    } else {
                        _this.trigger( ProsEvents.recommendationCallSuccess, prepareMultiZoneRecommendationsJSON( opts, json ), opts );
                    }
                },
                error: function ( x, t, m ) {
                    if ( needFccRecommendation( opts ) ) {
                        getFccRecommendations( paramsToObj( data ), fccCallback );
                    } else {
                        _this.trigger( ProsEvents.recommendationCallFailure, {
                            error: t + ",message:" + m.message + " loading: " + PATH_RTO_RECOMMENDATIONS
                        }, opts );
                    }
                }
            } );
        };


        var needFccRecommendation = function ( opts, json ) {
            function zoneValuesEmpty( zonesJson ) {
                if ( !zonesJson ) {
                    return true;
                }
                var zones = opts.context && opts.context.split( "|" );
                return _.find( zones, function ( zone ) {
                    return !_.isEmpty( zonesJson[ opts.requester + "-" + zone ] );
                } ) === undefined;
            }

            var needFcc = !json || ( zoneValuesEmpty( json.recommendationsOnAllZones ) && _.isEmpty( json.recommendedItems ) );

            return !!( needFcc && ( Globals.getValue( 'props.prosFallbackEnabled' ) === 'true' ) && opts.context && FCC_FALLBACK_ZONES_MAP[ opts.context ] );
        };


        var prepareMultiZoneRecommendationsJSON = function ( opts, json ) {

            var response = _.pick( json, 'status', 'error' );

            response.recommendedItems = prepareRecommendationJSON( json );
            if ( response.recommendedItems ) {
                var context = opts.context,
                    index = context.indexOf( "|" );
                context = ( index === -1 ) ? context : context.substring( 0, index );
                response.context = context;
                response.clickTrackingUrlPresent = response.recommendedItems.clickTrackingUrlPresent;
            }

            var zones = response.recommendationsOnAllZones = {};

            var recommendationsOnAllZones = json.recommendationsOnAllZones;
            if ( recommendationsOnAllZones ) {

                _.each( recommendationsOnAllZones, function ( zone, key ) {
                    if ( !zone ) {
                        return;
                    } //sometime zone data is undefined.
                    var z = zones[ key ] = _.pick( zone, 'controlGroupId', 'headerId', 'categoryId', 'deliveryId' );

                    z.headerText = addUserNameInHeader( zone.headerText );

                    z.choiceId = [ z.controlGroupId.substring( 3 ), z.deliveryId ].join( "-" );

                    var recommendedIdsList = z.recommendedIdsList = [];
                    var choiceIdWithoutProduct;
                    _.each( zone.recommendationVBList, function ( recommendation, index ) {
                        var productId = recommendation.recommendedItemId;
                        if ( index === 0 ) {
                            z.productId = productId;
                            choiceIdWithoutProduct = [
                                [ z.controlGroupId, z.deliveryId ].join( "-" ),
                                z.headerId, [ zone.headerText, z.categoryId ].join( "$" )
                            ].join( "@" );
                            z.encodedChoiceId = [ choiceIdWithoutProduct, productId ].join( "$" );
                            if ( recommendation.clickTrackingURL ) {
                                //this leads to ProsThumbnailCarouselFactory.clickTrackingUrl()->Recommendation.feedProsRichRelevance()
                                response.clickTrackingUrlPresent = true;
                            }
                        }

                        recommendedIdsList.push( {
                            id: productId,
                            choiceId: [ choiceIdWithoutProduct, productId ].join( "$" ),
                            clickTrackingUrl: protocolLessUrl( recommendation.clickTrackingURL )
                        } );

                    } );



                } );
            }

            return response;
        };

        var protocolLessUrl = function ( url ) {
            return url ? url.replace( /http[s]*:/, '' ) : null;
        };

        var addUserNameInHeader = function ( headerText ) {
            if ( headerText.indexOf( "v_username" ) !== -1 ) {
                var username = Cookie.get( "UserName", "GCs" );
                if ( username ) {
                    headerText = headerText.replace( /v_username/g, username );
                } else {
                    headerText = DEFAULT_HEADER_TEXT;
                }
            }
            return headerText;
        };

        // DEPRECATED, USE V2
        // retrieves recommendations from default recommendation engine based on given Product ID.
        var getRecommendations = function ( requester, context, productId, maxRecommendations, callback, timeout, rtoPath, params, productType ) {
            if ( !requester ) {
                throw new Error( "Recommendation.getRecommendations failure. Invalid parameter requester=" + requester );
            }

            if ( !productId ) {
                throw new Error( "Recommendation.getRecommendations failure. Invalid parameter productId=" + productId );
            }

            if ( !callback ) {
                throw new Error( "Recommendation.getRecommendations failure. Invalid parameter callback=" + callback );
            }

            var to = timeout || DEFAULT_TIME_OUT,
                maxRecs = maxRecommendations || 15,
                visitorId = this.getRTDSessionCookie() || '',
                countryCode = Cookie.get( SHIPPING_COUNTRY_COOKIE_NAME ) || '',
                zipCode = Cookie.get( ZIP_CODE_COOKIE_NAME, MISCGCS ) || '',
                stateCode = Cookie.get( STATE_COOKIE_NAME, MISCGCS ) || '';

            var data = {
                "productId": productId,
                "requester": requester,
                "visitorId": visitorId,
                "customerId": this.getCustomerId(),
                "countryCode": countryCode,
                "zipCode": zipCode,
                "stateCode": stateCode,
                "maxRecommendations": maxRecs,
                "timeout": to
            };

            if ( productType ) {
                data.productType = productType;
            }

            if ( context ) {
                data.context = context;
            }
            var dycesParams = $.param( data );
            if ( params ) {
                dycesParams += '&' + $.param( params );
            }

            // Context zone strings found in controllers directory:
            // macysJS/src/mcom/components/thumbCarousel/controller/*
            var FCC_FALLBACK_ZONES_MAP = {
                'ATBPage_ZONE_C': true,
                'PDP_ZONE_A': true,
                'SB_ZONE_A': true,
                'ZSR_ZONE_B': true
            };

            $.ajax( {
                url: PATH_RTO_RECOMMENDATIONS,
                type: 'POST',
                data: dycesParams,
                dataType: 'json',
                timeout: to,
                jsonp: false,
                jsonpCallback: "initCB",
                success: function ( json ) {
                    if ( ( json && json.status !== 'SUCCESS' ) &&
                        ( context !== undefined && FCC_FALLBACK_ZONES_MAP[ context ] === true && Globals.getValue( 'props.prosFallbackEnabled' ) === 'true' ) ) {
                        getFccRecommendations( paramsToObj( dycesParams ), callback );
                    } else {
                        callback( true, prepareRecommendationJSON( json ) );
                    }
                },
                error: function ( x, t, m ) {
                    if ( context !== undefined && FCC_FALLBACK_ZONES_MAP[ context ] === true && Globals.getValue( 'props.prosFallbackEnabled' ) === 'true' ) {
                        getFccRecommendations( paramsToObj( dycesParams ), callback );
                    } else {
                        callback( false, {
                            error: t + ",message:" + m.message + " loading: " + PATH_RTO_RECOMMENDATIONS
                        } );
                    }
                }
            } );

        }; // end getRecommendations

        //TODO: blank method so Legacy application will not break
        var sendInformantCall = function () {};

        var generateGUID = function () {
            var S4 = function () {
                var d = new Date();
                return ( ( ( d.getTime() + Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
            };

            return ( S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4() );
        };

        var prepareRecommendationJSON = function ( json ) {

            if ( !json || !json.recommendedItems || ( json.recommendedItems.length <= 0 ) ) {
                return false;
            }

            var returnJson = {};
            var recommendedItems = json.recommendedItems;
            var username = Cookie.get( "UserName", "GCs" );
            returnJson.encodedChoiceId = recommendedItems[ 0 ].choiceId;

            var encodedHeaderString = recommendedItems[ 0 ].choiceId.split( HEADER_SEPARATOR );
            if ( encodedHeaderString[ 0 ] && encodedHeaderString[ 1 ] && encodedHeaderString[ 2 ] ) {
                returnJson.choiceId = encodedHeaderString[ 0 ].substring( 3 ); //is it unique per product?
                returnJson.headerId = encodedHeaderString[ 1 ];
                returnJson.headerText = encodedHeaderString[ 2 ].split( "$" )[ 0 ];

                returnJson.headerText = returnJson.headerText.replace( /v_username/g, username );

                if ( ( !username && encodedHeaderString[ 2 ].split( "$" )[ 0 ].indexOf( "v_username" ) !== -1 ) ) {
                    returnJson.headerText = DEFAULT_HEADER_TEXT;
                }

            } else if ( encodedHeaderString[ 0 ] ) {
                returnJson.headerId = "";
                returnJson.choiceId = encodedHeaderString[ 0 ].split( "$" )[ 0 ].substring( 3 );
                returnJson.headerText = DEFAULT_HEADER_TEXT;

            } else {
                return false;
            }

            returnJson.productId = recommendedItems[ 0 ].productId;

            returnJson.recommendedIdsList = [];

            $.each( json.recommendedItems, function ( index, item ) {
                returnJson.recommendedIdsList.push( {
                    id: item.recommendedItemId,
                    choiceId: item.choiceId,
                    clickTrackingUrl: protocolLessUrl( item.clickTrackingURL )
                } );
            } );

            if ( returnJson.recommendedIdsList.length > 0 && returnJson.recommendedIdsList[ 0 ].clickTrackingUrl ) {
                returnJson.clickTrackingUrlPresent = true;
            }

            returnJson.status = json.status;
            returnJson.error = json.error;

            return returnJson;
        };

        /**
         * call this function on demand in case there is no RTD generated cookie visitor
         * ID and a RTD event needs to be sent
         */
        var getRTDSessionCookie = function () {

            var rtdCookie = $.trim( Cookie.get( RTD_COOKIE_NAME ) || '' );

            //if session hasn't been started or the user has an invalid visitor Id
            if ( !validVisitorId( rtdCookie ) ) {
                var visitorId = this.generateGUID();
                Logger.log( "generated GUID:" + visitorId );
                var d = new Date();
                d.setFullYear( d.getFullYear() + 30 );

                //push Expiration Date of Cookie
                Cookie.setExpires( d.toUTCString() );
                Cookie.set( RTD_COOKIE_NAME, visitorId ); //key/value
                rtdCookie = Cookie.get( RTD_COOKIE_NAME );
            }

            return rtdCookie;
        };

        var validVisitorId = function ( visitorId ) {
            return visitorId && visitorId.length < 100;
        };

        var sendPixelInformantCalled = function ( requester, context, eventType, choiceIds, productIdsWithPos, visitorId, callback, params ) {

            if ( Globals.getValue( "props.prosTrackingPixelEnabled" ) !== "true" ) {
                return;
            }

            if ( !requester ) {
                throw new Error( "Recommendation.sendPixelInformantCalled failure. Invalid parameter requester=" + requester );
            }
            if ( !eventType ) {
                throw new Error( "Recommendation.sendPixelInformantCalled failure. Invalid parameter eventType=" + eventType );
            }
            if ( !choiceIds ) {
                throw new Error( "Recommendation.sendPixelInformantCalled failure. Invalid parameter choiceIds=" + choiceIds );
            }
            if ( !productIdsWithPos ) {
                throw new Error( "Recommendation.sendPixelInformantCalled failure. Invalid parameter productIdsWithPos=" + productIdsWithPos );
            }

            visitorId = this.getRTDSessionCookie() || '';

            var eventData = "pList=" + productIdsWithPos + "&r=" + requester + "&rType=" + eventType + "&vId=" + visitorId + "&cId=" + this.getCustomerId();

            if ( context ) {
                eventData += '&c=' + context;
            }

            //Control Group ID
            var cgId = ProsTrackingHelper.getCGIDParamter( null, choiceIds );
            if ( cgId ) {
                eventData += '&cgId=' + cgId;
            }
            //Batch ID
            var dId = ProsTrackingHelper.getBatchId( null, choiceIds );
            if ( dId ) {
                eventData += '&dId=' + dId;
            }
            //Header ID
            var hId = ProsTrackingHelper.getHeaderId( null, choiceIds );
            if ( hId ) {
                eventData += '&hId=' + hId;
            }

            if ( params ) {
                eventData += params;
            }
            var pixelHostToAppend = Globals.getValue( 'props.baseHost' );
            if ( window.location.protocol.indexOf( 'https' ) !== -1 ) {
                if ( Globals.getValue( 'props.securePageWWWAssetsEnabled' ) === 'true' ) {
                    pixelHostToAppend = Globals.getValue( 'props.secureHost' );
                }
            }
            //logic to extract control-group-id, batch-id, header-id from choiceIds
            trackingPixel.track( eventData, {
                pixelHost: pixelHostToAppend,
                pathToPixel: '/EventsWar/events/pixel/customeraction'
            } );
        };


        var feedProsRichRelevance = function ( opts ) {
            if ( !( opts && opts.responseType ) || Globals.getValue( "props.prosRREventsEnabled" ) === 'false' ) {
                Logger.log( "[feedRichRelevance] Missing Parameter : responseType or prosRREventsEnabled is false " );
                return;
            }

            var data = $.param( _.extend( opts, {
                visitorId: this.getRTDSessionCookie(),
                customerId: this.getCustomerId()
            } ) );


            $.ajax( {
                url: PATH_RTO_INFORMANT_EVENT,
                type: 'POST',
                data: data,
                timeout: opts.timeout || 15000,
                error: function ( x, t, m ) {
                    Logger.log( t + ",message:" + m.message + " loading: " + PATH_RTO_INFORMANT_EVENT );
                }
            } );

        };

        var clickNotification = function ( opts ) {
            if ( opts.url && Globals.getValue( "props.prosRREventsEnabled" ) === 'true' ) {
                $.get( opts.url );
                //setting some delay to let click call go through, before page changes to pdp
                setTimeout( function () {}, 250 );
            }
        };

        return _.extend( {
            buildFccRecommendationsObject: buildFccRecommendationsObject,
            getFccRecommendations: getFccRecommendations,
            initCB: initCB,
            getRecommendations: getRecommendations,
            sendInformantCall: sendInformantCall,
            generateGUID: generateGUID,
            getRTDSessionCookie: getRTDSessionCookie,
            prepareRecommendationJSON: prepareRecommendationJSON,
            sendPixelInformantCalled: sendPixelInformantCalled,
            feedProsRichRelevance: feedProsRichRelevance,
            clickNotification: clickNotification,
            getRecommendationsV3: getRecommendationsV3,
            getCustomerId: getCustomerId,
            prepareMultiZoneRecommendationsJSON: prepareMultiZoneRecommendationsJSON,
            needFccRecommendation: needFccRecommendation
        }, Backbone.Events );
    } );
