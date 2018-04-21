define( [ 'handlebars',
        'logger',
        'jquery',
        'underscore',
        'backbone'
    ],
    function ( Handlebars, Logger, $, _, Backbone ) {

        return Backbone.Marionette.ItemView.extend( {
            tagName: 'li',
            heightSet: false,
            attributes: function () {
                var obj = {
                    tabindex: 0
                };
                var collapsed = this.model.get( "collapsed" );
                var collapsedClass = this.model.get( "collapsedClass" );
                obj.id = this.model.get( "name" );
                var cc = typeof this.model.get( "collapsedClass" ) !== "undefined" ? this.model.get( "collapsedClass" ) : "";
                obj[ 'class' ] = "typbox " + cc;
                obj[ 'aria-expanded' ] = !collapsed;
                obj[ 'aria-label' ] = this.model.get( "name" );
                obj[ 'data-uitype' ] = this.model.get( "facetType" );
                return obj;
            },

            events: function () {
                return _.extend( {}, this.originalEvents, this.facetEvents );
            },
            initialize: function ( opts ) {
                //var _this = this;
                this._super( opts );
                //To disable Expand Collapse functionality for the facets
                if ( this.model.get( 'collapseDisabled' ) ) {
                    this.events[ "click .facet_name" ] = undefined;
                    this.delegateEvents( this.events );
                }
            },
            _super: function ( opts ) {
                //put base intialize functionality here
                this.setHeight( this.$el );
                this.toggleClearButton();
            },
            facetItemClick: function ( e ) {
                e.preventDefault();
                e.stopPropagation();
                $( "li > a[data-value='" + $( e.currentTarget ).data( 'value' ) + "']", this.$el ).toggleClass( "selected" ).parent().toggleClass( "selected" );


                //NOTE --> This was a problem for Brands (cause two links) $( e.currentTarget ).toggleClass( "selected" ).parent().toggleClass( "selected" );
            },
            toggleClearButton: function () {
                var action = ( this.getSelected().length > 0 ) ? "removeClass" : "addClass";
                $( ".clearall", this.$el )[ action ]( "hidden" );
            },
            isCollapsed: function () {
                return this.$el.hasClass( "collapsed" );
            },
            getSelected: function () {
                var arr = [];
                var _this = this;
                $( "li > a.selected", this.$el ).each( function ( index ) {
                    var atag = $( this );
                    var href = atag.attr( "href" );
                    var val = atag.data( "value" );
                    var name = atag.children( '.item' );
                    // If facet value has been split & displayed then don't pass facet item text.
                    if ( name.children( 'div' ).length > 0 ) {
                        name = val;
                    } else {
                        name = name.text();
                    }
                    arr.push( {
                        val: val,
                        href: href,
                        facetType: _this.model.get( "name" ),
                        name: name
                    } );
                } );
                return _.uniq( arr, function ( a ) {
                    return a.val;
                } );
            },
            deselectFacet: function ( obj ) {
                $( "li > a.selected", this.$el ).each( function ( index ) {
                    if ( $( this ).data( "value" ).toString() === obj.facetValue.toString() ) {
                        $( this ).removeClass( "selected" );
                    }
                } );
            },
            setHeight: function () {
                var isNowCollapsed = this.$el.hasClass( "collapsed" );
                if ( this.heightSet || isNowCollapsed ) {
                    return;
                }
                //STEP: Set height of the type...this is because UI wants the list exactly its height or max-height
                //And that the animation requires it have a height set...
                this.heightSet = true;
                $( 'div.listbox', this.el ).attr( 'style', function ( i, style ) {
                    if ( style ) {
                        return style.replace( /height[^;]+;?/g, '' );
                    } else {
                        return '';
                    }
                } ).css( {
                    'height': ( $( 'div.listbox', this.el ).height() )
                } );
            },
            resetHeight: function () {
                this.heightSet = false;
                this.setHeight();
            },
            doToggle: function ( e ) {
                var shorterObj = this.$el;

                var items = $( 'div.listbox', shorterObj );
                shorterObj
                    .toggleClass( "collapsed" )
                    .attr( 'aria-expanded', !shorterObj.hasClass( "collapsed" ) );

                this.resetHeight( shorterObj );


                //STEP: Now capture data that trigger expects and then trigger facetType:toggle
                var d = {};
                d.collapsed = shorterObj.hasClass( "collapsed" );
                d.name = this.model.get( "name" );

                this.trigger( "facetType:toggle", d );
            },
            clearFacet: function ( e ) {
                $( "a", this.$el ).removeClass( "selected" );
                this.toggleClearButton();
                this.trigger( "facet:clear", {
                    'facetType': this.model.get( "name" )
                } );
            }
        } );
    } );
