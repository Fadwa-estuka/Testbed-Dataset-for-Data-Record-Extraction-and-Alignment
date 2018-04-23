define( [ 'logger', 'jquery', 'underscore', 'backbone', 'commonjs/features/refineByFacet/collections/FacetCollection', 'commonjs/features/refineByFacet/views/BaseFacetView', 'hbsCommonTemplates/features/refineByFacet/BaseFacetView', 'commonjs/features/refineByFacet/AttachDomToView' ],
    function ( Logger, $, _, Backbone, FacetCollection, BaseFacetView, BaseFacetTemplate, AttachDomToView ) {
        var composite = {
            tagName: 'li',
            heightSet: false,

            template: BaseFacetTemplate,

            attributes: function () {
                var obj = {
                    tabindex: 0
                };
                var collapsed = this.model.get( 'collapsed' );
                var collapsedClass = this.model.get( 'collapsedClass' );
                obj.id = this.model.get( 'name' );
                var cc = typeof this.model.get( 'collapsedClass' ) !== 'undefined' ? this.model.get( 'collapsedClass' ) : '';
                obj[ 'class' ] = 'typbox groupFacet ' + cc;
                obj[ 'aria-expanded' ] = !collapsed;
                obj[ 'aria-label' ] = this.model.get( 'name' );
                obj[ 'data-uitype' ] = this.model.get( 'facetType' );
                return obj;
            },

            getChildView: function ( item ) {
                var children = item.get( 'children' );
                if ( children && children.length > 0 ) {
                    return this.constructor;
                } else {
                    return BaseFacetView;
                }
            },

            childViewOptions: function () {
                return {
                    brand: 'mcom'
                };
            },

            childViewContainer: 'ul',

            childEvents: {
                'facet:item:click': function ( view, facetValue, data ) {
                    if ( data && data.facetType && data.facetValue ) {
                        // Constructing Root FacetName-Selected Leaf FacetName for core metrics element tag.
                        data.facetType = this.model.get( 'name' ).concat( '-', data.facetType.replace( /\w*-/, '' ) );
                        // Replacing comma including trailing spaces with underscore for core metrics element tag.
                        data.facetValue = data.facetValue.replace( /\s*,\s*/g, '_' );
                        Logger.info( 'The facet:item:click event bubbled up to the parent collection view: ' + data.facetType );
                        this.trigger( 'facet:item:click', facetValue, data );
                    }
                    this.toggleClearButton();
                },
                'facet:clear': function ( view, data ) {
                    Logger.info( 'The facet:clear event bubbled up to the parent collection view.' );
                    this.trigger( 'facet:clear', data );
                },
                'facetType:toggle': function ( view, data ) {
                    Logger.info( 'The facetType:toggle event bubbled up to the parent collection view.' );
                    this.trigger( "facetType:toggle", data );
                }
            },

            events: {
                'click > .facet_name': 'doFacetToggle',
                'click > .clearall': 'clearFacet'
            },

            initialize: function ( options ) {
                Logger.info( 'FacetCompositeView init method' );
                this.collection = new FacetCollection( this.model.get( 'children' ) );

                var parentEl = this.$el.closest( '.listbox' );
                if ( parentEl && parentEl.length > 0 ) {
                    this.setHeight();
                }

                if ( $( '#facets' ).children().length > 0 ) {
                    // Invoking method in the AttachDomToView common object.
                    this.initView( options );
                    Logger.info( 'FacetCompositeView registered via DOM.' );
                }
                this.toggleClearButton();
            },

            doFacetToggle: function ( e ) {
                this.$el
                    .toggleClass( 'collapsed' )
                    .attr( 'aria-expanded', !this.$el.hasClass( 'collapsed' ) );
                //Update the title Tag of the H2 Depending on the value of collapsed
                var facetName = this.$el.children( 'h2.facet_name' );
                var title = facetName.attr( 'title' );
                if ( this.$el.hasClass( 'collapsed' ) ) {
                    facetName.attr( "title", title.replace( 'Collapse', 'Expand' ) );
                } else {
                    facetName.attr( "title", title.replace( 'Expand', 'Collapse' ) );
                }
                var parentEl = $( e.currentTarget ).closest( '.listbox' );
                if ( parentEl && parentEl.length > 0 ) {
                    this.resetHeight();
                }

                var data = {};
                data.collapsed = this.$el.hasClass( "collapsed" );
                data.name = this.model.get( "name" );

                this.trigger( "facetType:toggle", data );
            },

            setHeight: function () {
                var isNowCollapsed = this.$el.hasClass( 'collapsed' );
                if ( this.heightSet || isNowCollapsed ) {
                    return;
                }
                //STEP: Set height of the type...this is because UI wants the list exactly its height or max-height
                //And that the animation requires it have a height set...
                this.heightSet = true;
                $( '> div.listbox', this.el ).attr( 'style', function ( i, style ) {
                    if ( style ) {
                        return style.replace( /height[^;]+;?/g, '' );
                    } else {
                        return '';
                    }
                } ).css( {
                    'height': ( $( '> div.listbox', this.el ).height() )
                } );
            },

            resetHeight: function () {
                this.heightSet = false;
                this.setHeight();
            },

            deselectFacet: function ( obj ) {
                this.children.each( function ( child ) {
                    if ( child.model.get( 'name' ) === obj.facetType || child.model.get( 'children' ) ) {
                        child.deselectFacet( obj );
                    }
                } );
            },

            getSelected: function ( type ) {
                var selected = [];
                this.children.each( function ( child ) {
                    var selectedOptions = child.getSelected();
                    //Additional check if type is not present or type equals the selected facet
                    if ( selectedOptions.length > 0 && ( typeof type === 'undefined' || type === child.model.get( 'name' ) ) ) {
                        if ( child.model.get( 'children' ) ) {
                            selected = selected.concat( selectedOptions );
                        } else {
                            selected.push( {
                                facetTypeName: child.model.get( 'name' ),
                                selectedFacetItems: selectedOptions
                            } );
                        }
                    }
                } );
                return selected;
            },

            clearFacet: function () {
                this.children.each( function ( child ) {
                    child.clearFacet();
                } );
            },

            toggleClearButton: function () {
                var action = ( this.getSelected().length > 0 ) ? 'removeClass' : 'addClass';
                $( '> .clearall', this.$el )[ action ]( 'hidden' );
            }
        };

        // Extending the Attach DOM to View methods in current composite view object.
        $.extend( composite, AttachDomToView );

        return Backbone.Marionette.CompositeView.extend( composite );
    } );
