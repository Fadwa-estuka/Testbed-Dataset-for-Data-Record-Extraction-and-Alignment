//MODULE: BOPS Coremetrics
define( [ 'jquery', 'base', 'contextFramework', 'stringUtil', 'clientSideStorage', 'tracking' ], function ( $, base, context, stringUtil, Storage, tracking ) {
    'use strict';

    // local variable to track the resulting page
    // type(success(default)-(0)/location unknown-(1)/data entry
    // error-(2))
    var bopsTrackingPrevState = 'BOPS_SEARCH_COMPLETE';

    var getCategoryBreadCrumb = function () {
        var ExploreAttributes = tracking.exploreAttributes;
        var attr = new ExploreAttributes();
        var catBreadCrumbName = "";
        var catBreadCrumbEle = $( "#breadcrumb" );
        if ( catBreadCrumbEle && catBreadCrumbEle.length > 0 ) {
            catBreadCrumbName = $.trim( catBreadCrumbEle[ 0 ].value ).replace( /-[\w]+-/, "-" ).replace( /-/g, " - " );
        }
        attr.add( {
            7: catBreadCrumbName
        } );
        return attr;
    };

    var trackingData = {

        'BOPS_SEARCH_COMPLETE': {
            eventName: 'BOPS_SEARCH_COMPLETE',
            elemId: '',
            elemCatId: ''
        },
        'BOPS_MANUAL_SEARCH': {
            eventName: 'BOPS_MANUAL_SEARCH',
            elemId: '',
            elemCatId: 'bops_facet_search',
            exploreAttr: getCategoryBreadCrumb()
        },
        'LOCATION_UNKNOWN': {
            eventName: 'LOCATION_UNKNOWN',
            elemId: 'Location Unknown',
            elemCatId: 'bops_facet_error'
        },
        'DATA_ENTRY_ERROR': {
            eventName: 'DATA_ENTRY_ERROR',
            elemId: 'Data Entry Error',
            elemCatId: 'bops_facet_error'
        },
        'SELECTED_RADIUS': {
            eventName: 'SELECTED_RADIUS',
            elemId: '$1 miles',
            elemCatId: 'bops_facet_radius',
            exploreAttr: getCategoryBreadCrumb()
        },
        'UNAVAILABLE_IN_RADIUS': {
            eventName: 'UNAVAILABLE_IN_RADIUS',
            elemId: 'Unavailable In Radius',
            elemCatId: 'bops_facet_error'
        },

        // FOR OVERLAY & FACET SELECTION
        'UNAVAILABLE_LOCALLY': {
            eventName: 'UNAVAILABLE_LOCALLY',
            elemId: 'Unavailable Locally',
            elemCatId: 'bops_facet_error'
        },

        //FOR OVERLATY
        'OVERLAY_UNAVAILABLE_IN_RADIUS': {
            eventName: 'OVERLAY_UNAVAILABLE_IN_RADIUS',
            elemId: 'Overlay - Unavailable In Radius',
            elemCatId: 'bops_facet_error'
        },
        'OVERLAY_UNAVAILABLE_LOCALLY': {
            eventName: 'OVERLAY_UNAVAILABLE_LOCALLY',
            elemId: 'Overlay - Unavailable Locally',
            elemCatId: 'bops_facet_error'
        },
        'OVERLAY_DATA_ENTRY_ERR': {
            eventName: 'OVERLAY_DATA_ENTRY_ERR',
            elemId: 'Overlay - Data Entry Error',
            elemCatId: 'bops_facet_error'
        },

        // CONVERSION EVENTS
        'SHOW_BOPS_OVERLAY': {
            eventName: 'SHOW_BOPS_OVERLAY',
            eventId: 'check_other_stores',
            eventCatId: 'bops_facet',
            actionType: 1
        },
        'SAVE_OVERLAY_CHANGES': {
            eventName: 'SAVE_OVERLAY_CHANGES',
            eventId: 'check_other_stores',
            eventCatId: 'bops_facet',
            actionType: 2
        }
    };

    var getBopsTrackingData = function ( eventName ) {
        return trackingData[ eventName ];
    };

    // Method to track all Bops facet related core-metrics events
    var trackBopsFacetSearchEvents = function ( eventName, userData ) {

        if ( !eventName ) {
            // Cannot capture without an event
            return;
        }

        var trackingData = getBopsTrackingData( eventName );
        if ( trackingData ) { // Only if event data is available
            if ( !eventName.match( "^BOPS_SEARCH_COMPLETE" ) ) { // postal code search field is displayed
                // Either location unknown or data entry error
                var elemId = trackingData.elemId,
                    elemCatId = trackingData.elemCatId,
                    expAtt = trackingData.exploreAttr;

                if ( eventName.match( "^BOPS_MANUAL_SEARCH" ) ) { // Get the previous event
                    trackingData = getBopsTrackingData( bopsTrackingPrevState );
                    if ( trackingData ) {
                        elemId = trackingData.elemId;
                    }
                } else if ( eventName.match( "^SELECTED_RADIUS" ) ) { //on radius drop down change
                    elemId = stringUtil.replaceMultiple( elemId, getUserRadius() );
                }
                tracking.createPageElementTag( elemId, elemCatId, ( expAtt ? expAtt.toString() : null ) );
            }
            bopsTrackingPrevState = eventName;
        }
    };

    function getUserRadius() {
        return ( Storage.getPersistent( 'bops_selected_radius' ) || 100 );
    }

    // Method to track all coremetrics events
    var trackBopsConversionEvents = function ( eventName ) {
        var trackingData = getBopsTrackingData( eventName );
        if ( trackingData ) {
            tracking.createConversionEventTag( trackingData.eventId, trackingData.eventCatId, trackingData.actionType );
        }
        bopsTrackingPrevState = eventName;
    };

    return {
        trackBopsFacetSearchEvents: trackBopsFacetSearchEvents,
        trackBopsConversionEvents: trackBopsConversionEvents,
        trackingData: trackingData
    };

} );
