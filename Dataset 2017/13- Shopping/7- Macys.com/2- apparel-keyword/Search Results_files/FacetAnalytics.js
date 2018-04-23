define( [ 'jquery', 'coremetricsAttributes', 'stringUtil', 'mcomAnalytics', 'segmentation', 'globals' ], function ( $, CoremetricsAttributes, StringUtil, AnalyticsCaller, Segmentation, Globals ) {

    function countArrayMinusOne( theArray ) {
        return ( theArray && theArray.length > 1 ) ? theArray.length - 1 : 0;
    }

    return {
        trackFacetTypeToggle: function ( data ) {
            AnalyticsCaller.elementTag( this.getDataForFacetTypeToggle( data ) );
        },
        trackFacetValueClick: function ( selectedFacets, data ) {
            AnalyticsCaller.elementTag( this.getDataForFacetAction( selectedFacets, data ) );
        },
        trackFacetValueDeselect: function ( data ) {
            return true;
        },
        trackFacetApply: function ( data ) {
            return true;
        },
        trackFacetClearAll: function ( data ) {
            return true;
        },
        getAttributeDataForEveryCall: function ( expAtt, data ) {
            var pageType = this.getPageType( data );

            // reset the object for your attributes
            expAtt.reset();

            //ATTR: 7 = pageType
            expAtt.addAttribute( pageType, 7 );

            //ATTR: 6 = searchTerm
            if ( pageType.indexOf( 'onsite_search' ) > -1 ) {
                expAtt.addAttribute(
                    decodeURIComponent( StringUtil.getURLParameter( 'keyword' ) || ( data ? ( data.pageId ? data.pageId : data.searchTerm ) : '' ) ), 6 );
            }
        },
        getDataForFacetTypeToggle: function ( data ) {
            this.getAttributeDataForEveryCall( CoremetricsAttributes, data );
            return {
                'elementID': data.name,
                'elementCategory': 'Facet: ' + ( !data.collapsed ? 'Expand' : 'Collapse' ),
                'attributes': CoremetricsAttributes.attributeToArray()
            };
        },
        getDataForFacetAction: function ( selectedFacets, data ) { //facetValue, facetType, facetValuesInThisTypeCount, facetTypesSelectedCount) {
            var retval = {
                'elementID': data.facetValue,
                'elementCategory': 'Facet: ' + data.facetType,
                'attributes': []
            };

            this.getAttributeDataForEveryCall( CoremetricsAttributes, data );

            var facetsArray = [];
            for ( var i = 0; i < selectedFacets.length; i++ ) {
                if ( data.facetType && data.facetType.endsWith( selectedFacets[ i ].facetTypeName ) ) {
                    facetsArray = selectedFacets[ i ].selectedFacetItems;
                }
            }

            //STEP: These counts are to represent the CURRENT STATE before applying the FACET...thus the -1
            var facetValuesInThisTypeCount = this.currentCountOfValues( facetsArray );
            var facetTypesSelectedCount = this.currentCountOfTypes( selectedFacets );

            //STEP: if the action is NOT "clear/clear all",  AND facetValueCount AND facetTypesSelectedCount was sent it, then proceed...
            if ( facetValuesInThisTypeCount !== undefined && facetTypesSelectedCount !== undefined ) {
                var brandSearch = "";

                //STEP: We want to track if the selection of a brand was influenced by the "brand search" field
                if ( $( "#filter_brand" ).length > 0 && data.facetType.match( "^(BRAND)" ) ) {
                    // To add the attribute 23 as 'Brand Search', if the brand facet selected thru brand filter box.
                    if ( $( '#lsbox_BRAND .filter-match' ).length > 0 ) {
                        brandSearch = "Brand Search";
                    }
                }

                CoremetricsAttributes.addAttribute( facetValuesInThisTypeCount.toString(), 21 );
                CoremetricsAttributes.addAttribute( facetTypesSelectedCount.toString(), 22 );
                CoremetricsAttributes.addAttribute( brandSearch, 23 );
            }
            retval.attributes = CoremetricsAttributes.attributeToArray();

            return retval;
        },
        currentCountOfValues: function ( facetsValueArray ) {
            return countArrayMinusOne( facetsValueArray );
        },
        currentCountOfTypes: function ( facetsTypeArray ) {
            return countArrayMinusOne( facetsTypeArray );
        },
        getPageType: function ( data, currentHref ) {
            var currentPageUrl = ( typeof currentHref !== 'undefined' ? currentHref : ( window && window.location && window.location.href ? window.location.href : '' ) );
            var pageType = "";

            //CONDITION: Determine if this was a category Type page...
            if ( StringUtil.getURLParameter( 'id', currentPageUrl ) !== null && currentPageUrl.indexOf( "cm_kws" ) === -1 ) {
                pageType = StringUtil.getURLParameter( 'id', currentPageUrl );
            }
            //CONDITION: Determine if this was a search type page...
            else if ( StringUtil.getURLParameter( 'keyword', currentPageUrl ) !== null || currentPageUrl.indexOf( "cm_kws" ) !== -1 || ( data && data.pageType === "search" ) ) {
                if ( currentPageUrl.indexOf( "cm_kws_ac" ) !== -1 ) {
                    pageType = "onsite_search_autocomplete";
                } else {
                    pageType = "onsite_search";
                }
            }

            if ( data && data.pageMode === "registry" ) {
                pageType = "MWEDD_" + pageType;
            }
            return pageType;
        },
        experimentLinkClickTag: function ( options ) {
            AnalyticsCaller.experimentLinkClickTag( options );
        }

    };

} );
