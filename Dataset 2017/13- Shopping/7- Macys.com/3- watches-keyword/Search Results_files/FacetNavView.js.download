define( [ 'jquery', 'underscore', 'backbone', 'marionette' ], function ( $, _, Backbone ) {

    return Backbone.Marionette.ItemView.extend( {
        triggers: {
            "click button": "facets:clearall"
        },
        toggleClearButton: function ( total ) {
            if ( total > 0 ) {
                $( "button", this.$el ).removeClass( "hidden" ).fadeIn();
            } else {
                $( "button", this.$el ).fadeOut();
            }
        }
    } );
} );
