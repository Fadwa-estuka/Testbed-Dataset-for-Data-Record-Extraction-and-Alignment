/**
 * This module is to load the canvas layout media after the facet meta call.
 */
define( [ 'jquery', 'logger', 'underscore' ], function ( $, Log, _ ) {

    var dynamicCanvasUrl = '',
        canvasIds = [],
        process = 'DYNAMIC_CANVAS';

    /**
     * To construct the canvas thumbnail URL for the given canvas id array.
     */
    function getDynamicCanvasUrl( facetCanvasIds ) {
        // Preserving current faceted canvas ids.
        canvasIds = facetCanvasIds || [];
        return dynamicCanvasUrl.replace( 'canvas_ids', canvasIds.join( ',' ) );
    }

    // Public Methods and Properties.
    var module = {
        init: function ( pageApp, pageInfo ) {
            var urlType, urlParams = [ 'edge=hybrid' ];
            this.pageApp = pageApp;

            if ( pageInfo.pageType === 'search' ) {
                urlType = 'search';
                urlParams.push( 'keyword=' + pageInfo.pageId );
            } else {
                urlType = 'catalog';
                urlParams.push( 'categoryId=' + pageInfo.pageId );
            }

            if ( pageInfo.pageMode && pageInfo.pageMode === 'registry' ) {
                urlParams.push( 'registry=true' );
            }

            dynamicCanvasUrl = '/shop/' + urlType + '/product/thumbnail/canvasids/canvas_ids?' + urlParams.join( '&' );
            canvasIds = _.isArray( pageInfo.pageCanvasIds ) ? pageInfo.pageCanvasIds : [];
        },

        /**
         * To make the canvas thumbnail call to render the layout dynamically after the facet meta call.
         */
        getFacetCanvasLayout: function ( facetCanvasIds ) {
            if ( !_.isEmpty( facetCanvasIds ) && facetCanvasIds.toString() !== canvasIds.toString() ) {
                var _this = this;
                this.pageApp.execute( 'showLoader', process );

                $.get( getDynamicCanvasUrl( facetCanvasIds ), this.renderCanvasLayout, 'html' ).fail( function () {
                    Log.error( "Error in getting dynamic facet canvas layout response" );
                } ).always( function () {
                    _this.pageApp.execute( 'hideLoader', process );
                } );
            } else {
                Log.info( "No difference in rendered canvas layout for facet refinements", facetCanvasIds );
            }
        },

        /**
         * This will be overridden by brand specific rendering.
         */
        renderCanvasLayout: function ( result ) {}
    };

    return module;
} );
