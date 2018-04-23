define( [ 'jquery', 'backbone', 'globals' ], function ( $, Backbone, Globals ) {
    var secureHost = Globals.getValue( "props.secureHost" ),
        MACYS = window.MACYS,
        PersonalizedModel = Backbone.Model.extend( {
            url: function () {
                var personalizedUrl = secureHost + '/account/personalizedwidget?callback=?';
                return personalizedUrl;
            }
        } );

    return PersonalizedModel;
} );
