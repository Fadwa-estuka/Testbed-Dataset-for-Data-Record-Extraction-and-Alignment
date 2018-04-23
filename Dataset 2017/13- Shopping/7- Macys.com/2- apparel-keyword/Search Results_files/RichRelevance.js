//#MODULE - RichRelevance
//> Author: Rodolfo Ladeira
//> Create Date: Jan 1st, 2015
//
//##DESCRIPTION: This is used to be extended by each RichRelevancePageSpecific file.
//This is the common file on RichRelevance call.


define( [
    'jquery',
    'cookie',
    'underscore',
    'globals',
    'prosTrackingHelper',
    'recommendation'

], function ( $, Cookie, _, Globals, ProsTrackingHelper, Recommendation ) {

    'use strict';

    var instance = null;

    var RichRelevance = function ( options ) {
        if ( !instance ) {
            this.initialize( options );
        }

        return instance;
    };

    RichRelevance.prototype = {
        rrCallback: function () {
            for ( var placementName in this.placementCallbacks ) {
                if ( this.placementCallbacks.hasOwnProperty( placementName ) ) {
                    this.callPlacementCallback( placementName );
                }
            }
        },
        initialize: function ( options ) {
            var apiPath = Globals.getValue( 'props.production' ) ? '//recs.richrelevance.com/rrserver/' : '//integration.richrelevance.com/rrserver/',
                signedIn = Cookie.get( 'SignedIn' ) === '1',
                r3Common = window[ 'R3_COMMON' ],
                rr = window[ 'RR' ],
                r3ApiKey = window[ 'R3_API_KEY' ],
                r3SessionId = window[ 'R3_SESSION_ID' ];

            instance = this;

            ProsTrackingHelper.initSrcCatId( options.categoryId );

            this.placementCallbacks = {};


            var userID = ( signedIn ) ? Cookie.get( 'macys_online_uid' ) : window[ 'R3_SESSION_ID' ];

            //in case of api not available.
            if ( !rr || !r3Common || !r3ApiKey ) {
                throw new Error( 'Rich Relevance api not set up properly' );
            }


            r3Common.setApiKey( r3ApiKey );

            r3Common.setBaseUrl( window.location.protocol + apiPath );
            r3Common.setClickthruServer( window.location.protocol + '//' + window.location.host );

            r3Common.setSessionId( r3SessionId || '' );

            //no matter if its signed in or not, if no user ID is available, set this to sessionId
            r3Common.setUserId( userID );

            //Save the options so they are accessible later:
            this.options = options;

            //set up the callback function when RR response is returned
            rr.jsonCallback = this.rrCallback.bind( this );

        },

        //Called by RRCarouselFactory once for each ThumbnailCarousel on page
        getRecommendationsV2: function ( opts, callback ) {
            var rr = window[ 'RR' ],
                callbackOpts = {
                    placementName: opts.placementName,
                    callback: callback,
                    headerId: opts.headerId,
                    controlGroupId: opts.controlGroupId
                };

            if ( callbackOpts.placementName && callbackOpts.placementName.length > 0 && typeof callbackOpts.callback === 'function' ) {
                this.addRichRelevancePlacement( callbackOpts.placementName );
                this.placementCallbacks[ callbackOpts.placementName ] = callbackOpts;
                //If RichRelevance API has already returned data, do call back now:
                if ( rr && !_.isEmpty( rr.data ) ) {
                    this.callPlacementCallback( callbackOpts.placementName );
                }
            }

        },
        setMVT: function ( value ) {
            var r3Common = window[ 'R3_COMMON' ];
            r3Common.setMVTForcedTreatment( value );
        },
        callRichRelevance: function () {
            //If server side integration is enabled, do not call RichRelevance
            if ( Globals.getValue( "props.prosRRServerEnabled" ) === "true" ) {
                return;
            }
            var r3 = window[ 'r3' ];
            if ( r3 ) {
                window[ 'rr_flush_onload' ]();
                r3();
            }
        },
        addRichRelevancePlacement: function ( placementName ) {
            var r3Common = window[ 'R3_COMMON' ];
            if ( r3Common ) {
                r3Common.addPlacementType( placementName );
            }

        },

        generateUUID: function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, function ( c ) {
                var r = Math.random() * 16 | 0,
                    v = c === 'x' ? r : ( r & 0x3 | 0x8 );
                return v.toString( 16 );
            } );
        },

        getPlacementJSON: function ( json, placementName ) {
            return _.find( json.placements, function ( placement ) {
                return placement[ 'placement_name' ] === placementName;
            } );
        },

        generateChoiceIdCommon: function ( placementJson, headerId, controlGroupId ) {
            var choiceIdCommon,
                options = this.options,
                formattedHeader = placementJson.displayMessage.replace( /\s/g, '+' );
            if ( options ) {
                choiceIdCommon = 'cid' + controlGroupId + '-' + this.generateUUID() +
                    '@' + headerId +
                    '@' + formattedHeader +
                    '$' + options.categoryId +
                    '$';
            } else {
                choiceIdCommon = '';
            }
            return choiceIdCommon;
        },

        //(util function) For JSON formatting to style ThumbnailCarouselView expects
        prepareRecommendationJSON: function ( json, placementCallbackOpts ) {
            //find the specific placement json response
            var placementJson = this.getPlacementJSON( json, placementCallbackOpts.placementName ),
                responseJson,
                recommendedItems,
                choiceIdCommon;

            //map the objects to be used on creating the pros panel.
            if ( placementJson ) {
                //Build the CM ChoiceId:
                choiceIdCommon = this.generateChoiceIdCommon( placementJson, placementCallbackOpts.headerId, placementCallbackOpts.controlGroupId );
                recommendedItems = _.map( placementJson.recs, function ( obj ) {
                    return {
                        id: obj.id,
                        choiceId: choiceIdCommon + obj.id
                    };
                } );

                responseJson = {
                    recommendedIdsList: recommendedItems,
                    headerText: placementJson.displayMessage
                };
            }

            return responseJson;

        },

        callPlacementCallback: function ( placementName ) {
            var rr = window[ 'RR' ],
                rrDataJson = rr.data.JSON;

            if ( !_.isEmpty( rrDataJson.placements ) ) {
                var callbackOpts = this.placementCallbacks[ placementName ],
                    jsonData = this.prepareRecommendationJSON( rrDataJson, callbackOpts );
                if ( jsonData ) {
                    callbackOpts.callback( true, jsonData );
                }
            }
        },

        feedProsRichRelevance: function ( opts ) {
            Recommendation.feedProsRichRelevance( opts );
        }


    };

    return RichRelevance;

} );
