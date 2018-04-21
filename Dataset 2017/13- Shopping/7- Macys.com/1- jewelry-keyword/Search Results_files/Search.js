//#MODULE - Header
//> Author: Narendra Akula
//>
//> Create Date: June 20, 2016
//>
//##DESCRIPTION: this module used in MacysCommonUI global header and responsive header as part of search url pattern change


define( [ 'jquery', 'redirectUtil', 'globals', 'mcomjs/features/header/SearchKeywordEncode', 'textBoxClearable', 'commonjs/components/TextBoxAnimatePlaceholder', 'mcomjs/features/search/LastSearches', 'segmentation' ], function ( $, RedirectUtil, Globals, SearchKeywordEncode, TextBoxClearable, TextBoxAnimatePlaceholder, LastSearches, Segmentation ) {

    function init( searchMetaObj ) { //object input
        var baseHostUrl = Globals.getValue( 'props.baseHost' ) || "",
            parts = searchMetaObj.pathName ? searchMetaObj.pathName.split( '/' ) : null;
        var GlobalSearch = {};
        GlobalSearch.box = $( '#globalSearchInputField' );
        GlobalSearch.container = $( 'ul.ui-autocomplete' );
        GlobalSearch.searchSubmit = $( '#subnavSearchSubmit' );
        if ( Globals.getValue( 'props.mashupServiceProductRecommendationsEnabled' ) === true ) {
            GlobalSearch.container.css( 'width', ( GlobalSearch.box.outerWidth() + GlobalSearch.searchSubmit.outerWidth() - 1 ) + "px" );
        }
        if ( Globals.getValue( 'props.lastSearchesEnabled' ) === true ) {
            GlobalSearch.display = function ( markup, eventBindings ) {
                GlobalSearch.container = $( 'ul.ui-autocomplete' );
                GlobalSearch.container.html( markup );
                GlobalSearch.container.css( 'left', GlobalSearch.box.offset().left + "px" );
                GlobalSearch.container.css( 'top', ( GlobalSearch.box.offset().top + GlobalSearch.box.height() + 2 ) + "px" );
                GlobalSearch.container.show();
                eventBindings();
            };
            LastSearches.init( GlobalSearch );
        }
        if ( parts != null && parts.length > 3 && parts[ 1 ] === 'shop' && parts[ 2 ] === 'featured' && !searchMetaObj.isDLP ) {
            GlobalSearch.box.attr( "value", searchMetaObj.searchKeyword );
        }

        TextBoxClearable.makeClearable( 'globalSearchInputField', function () {
            GlobalSearch.box.keyup();
        } );

        // NLS Call to action for search bar
        if ( String( Globals.getValue( 'props.inbentaSearchEnabled' ) ) === "true" ) {
            Segmentation.detect( [ 2197 ], function ( segmentVal ) {
                if ( segmentVal === 2197 ) {
                    TextBoxAnimatePlaceholder.animatePlaceholder( '#globalSearchInputField', {
                        defaultText: 'What are you looking for?',
                        phrases: [ 'I’m looking for a belt to match my winter boots',
                            'Show me top-rated high tech watches under $200',
                            'Do you have any formal dresses on sale?',
                            'Really soft sweatpants?'
                        ]
                    } );
                }
            } );
        }

        $( "form[name='keywordSearch']" ).submit( function ( e ) {
            var searchInput = GlobalSearch.box.val();
            searchMetaObj.searchInput = searchInput;

            var isRestfulPatternRedirection = SearchKeywordEncode.checkForRestfulPatternRedirection( searchMetaObj );
            if ( isRestfulPatternRedirection ) {
                var searchPhrase = SearchKeywordEncode.encodeSearchPhrase( searchMetaObj );
                e.preventDefault();
                if ( searchPhrase.trim().length > 0 ) {
                    var nlsQueryParam = $( "#nlsSearchQueryParam" ).val(),
                        autoCompleteKeyword = $( "#autoCompleteText" ).val(),
                        lastSearchesText = $( "#lastSearchesText" ).val(),
                        url = baseHostUrl + searchMetaObj.baseSearchUrl + '/' + searchPhrase + '?ss=true';
                    if ( nlsQueryParam ) {
                        url += '&ce=' + nlsQueryParam;
                    }
                    if ( autoCompleteKeyword ) {
                        url += '&cm_kws_ac=' + autoCompleteKeyword;
                    }
                    if ( lastSearchesText ) {
                        url += '&cm_kws_ls=' + lastSearchesText;
                    }
                    RedirectUtil.toHref( url );
                }
            }
        } );



    }

    return {
        init: init
    };
} );
