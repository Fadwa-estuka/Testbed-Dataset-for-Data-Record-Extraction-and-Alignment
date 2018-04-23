define( [
        'handlebars',
        'logger',
        'jquery',
        'underscore',
        'backbone',
        'commonjs/features/refineByFacet/views/BaseFacetShared',
        'hbsCommonTemplates/features/refineByFacet/BaseFacetView',
        'hbsCommonTemplates/features/refineByFacet/BaseFacetViewList'
    ],
    function ( Handlebars, Logger, $, _, Backbone, BaseFacetShared, BaseFacetTemplate, BaseFacetViewList ) {

        Handlebars.registerPartial( 'BaseFacetViewList', BaseFacetViewList );
        return BaseFacetShared.extend( {
            originalEvents: {
                'click .facet_name': 'doToggleSingle',
                "click li > a": "triggerItemClick",
                'click .clearall': "clearFacet"
            },

            template: BaseFacetTemplate,
            triggerItemClick: function ( e ) {
                if ( history.pushState ) {
                    this.facetItemClick( e );
                    var value = $( e.currentTarget ).attr( "data-value" );
                    this.trigger( "facet:item:click", value, {
                        'facetValue': value,
                        'facetType': this.model.get( "name" )
                    } );

                    this.toggleClearButton();
                }
            },
            doToggleSingle: function ( e ) {
                this.doToggle( e );
                //STEP: Update the title Tag of the H2 Depending on the value of collapsed
                var o = this.$el.children( 'h2.facet_name' );
                var title = o.attr( 'title' );
                if ( this.$el.hasClass( 'collapsed' ) ) {
                    o.attr( "title", title.replace( 'Collapse', 'Expand' ) );
                } else {
                    o.attr( "title", title.replace( 'Expand', 'Collapse' ) );
                }
            }
        } );
    }
);
