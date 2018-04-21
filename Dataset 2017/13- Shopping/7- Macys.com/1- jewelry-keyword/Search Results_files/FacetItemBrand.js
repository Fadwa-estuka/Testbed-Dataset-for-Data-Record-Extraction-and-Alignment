define( [ 'jquery', 'commonjs/features/refineByFacet/views/BaseFacetView', 'textBoxFilterList', 'textBoxClearable' ], function ( $, BaseFacetView, TextBoxFilterList, TextBoxClearable ) {
    var DEFAULT_PLACEHOLDER_TXT = "enter text to filter",
        timeoutId, initialized = false,
        numThatAreFeatured = 10;

    var featuredFilterList, allFilterList;
    return BaseFacetView.extend( {
        facetEvents: {
            "click .filter-brands": "filterBrands",
            "keyup #filter_brand": "filterKeyUp",
            "click #featured_brands": "toggleSublist",
            "click #all_brands": "toggleSublist",
            'click .facet_name': 'doToggleBrand'
        },
        toggleSublist: function ( e ) {
            var id = $( e.currentTarget ).attr( "id" );
            $( e.currentTarget ).toggleClass( "collapsed" );
            $( "#" + id + "_list", this.$el ).toggleClass( "collapsed" );
            this.resetHeight();
        },
        filterKeyUp: function ( e ) {
            clearTimeout( timeoutId );
            var _this = this;
            timeoutId = setTimeout( function () {

                //STEP: Make certain that we are in readyState before firing "keyup"
                _this.readyStateForFilter();

                allFilterList.filter( "#filter_brand", '#all_brands_list' );
                featuredFilterList.filter( "#filter_brand", '#featured_brands_list' );

            }, 300 );
        },
        readyStateForFilter: function () {
            //STEP: if there was an error message, clear it now cause we are searching again
            this.toggleErrorMsg( false );

            //STEP: the lists must be open in order to perform the filterings, so auto open here
            if ( $( '#featured_brands_list', this.$el ).hasClass( 'collapsed' ) ) {
                $( '#featured_brands', this.$el ).removeClass( "collapsed" ); // h2:nth-of-type(1)' ).trigger( 'click' );
                $( '#featured_brands_list', this.$el ).removeClass( "collapsed" ); // h2:nth-of-type(1)' ).trigger( 'click' );
            }
            if ( $( '#all_brands_list', this.$el ).hasClass( 'collapsed' ) ) {
                $( '#all_brands', this.$el ).removeClass( 'collapsed' );
                $( '#all_brands_list', this.$el ).removeClass( 'collapsed' );
            }
        },
        toggleErrorMsg: function ( boolOn ) {
            if ( boolOn ) {
                if ( $( '#filter_msg' ).length < 1 ) {
                    $( "#filter_brand" ).parent().append( "<div id='filter_msg' class='errorHiglight'>No brands match your search.</div>" );
                }
            } else {
                $( '#filter_msg' ).remove();
            }
        },
        initialize: function ( options ) {
            var _this = this;

            //lets allow a short delay to allow template to render our UL before we try to manipulate it
            setTimeout( function () {
                if ( !_this.isCollapsed() ) {
                    _this.initSeq( options );
                }
            }, 250 );
        },
        initSeq: function ( options ) {
            this.initialized = true;
            this._super( options );
            if ( $( ' ul li', this.$el ).length > numThatAreFeatured ) {
                this.addTextBoxFilter( options );
                this.splitList();
                this.makeClearable();
                this.initializeTextBoxFilterList();
            }
        },
        makeClearable: function () {
            TextBoxClearable.makeClearable( 'filter_brand', function () {
                $( '#filter_brand' ).keyup();
            } );
        },
        addTextBoxFilter: function ( options ) {
            var placeholder = options.labels ? options.lables.placeholder || DEFAULT_PLACEHOLDER_TXT : DEFAULT_PLACEHOLDER_TXT;
            $( ".clearall", this.el ).after( '<input type="text" id="filter_brand" placeholder="' + placeholder + '">' );
        },
        initializeTextBoxFilterList: function () {
            var _this = this;
            featuredFilterList = new TextBoxFilterList();
            featuredFilterList.setConfig( {
                globalMatch: false,
                casesensitive: false,
                textSelector: ".item"
            } );
            allFilterList = new TextBoxFilterList();
            allFilterList.setConfig( {
                globalMatch: false,
                casesensitive: false,
                textSelector: ".item"
            } );
            allFilterList.setEvent( "onFilterComplete", function () {
                if ( allFilterList.getProperty( "shown" ) === 0 ) {
                    _this.toggleErrorMsg( true );
                } else {
                    _this.toggleErrorMsg( false );
                }
            } );
        },
        splitList: function () {

            var copied = $( ' ul li:lt(' + numThatAreFeatured.toString() + ')', this.$el ).clone( true );
            this.sortList( $( 'ul', this.$el ).attr( {
                'id': 'all_brands_list',
                'class': 'collapsed'
            } ) ).before( $( '<h3 id="featured_brands">Featured Brands</h3>' ) ).before( '<h3 id="all_brands" class="collapsed">All Brands</h3>' );
            $( "#featured_brands" ).after( $( '<ul/>' ).attr( 'id', 'featured_brands_list' ).append( copied ) );

        },
        sortList: function ( ul ) {
            var items = $( 'li', ul ).get();
            items.sort( function ( a, b ) {
                var keyA = $( a ).text().toLowerCase();
                var keyB = $( b ).text().toLowerCase();

                if ( keyA < keyB ) {
                    return -1;
                }
                if ( keyA > keyB ) {
                    return 1;
                }
                return 0;
            } );
            return $( ul ).html( items );
        },

        doToggleBrand: function ( e ) {
            if ( !this.initialized ) {
                this.initSeq( this.options );
            }
            if ( this.isCollapsed() ) {
                $( '#clearable_filter_brand' ).fadeIn();
            } else {
                $( '#clearable_filter_brand' ).fadeOut();
            }
            this.doToggleSingle( e );
        }
    } );
} );
