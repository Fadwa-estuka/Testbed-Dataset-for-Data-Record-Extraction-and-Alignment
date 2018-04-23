//#MODULE - Personalized Widget Flow
//>
//##DESCRIPTION: Configure the Personalized Widget views

define( [ 'jquery',
        'underscore',
        'backbone',
        'logger',
        'cookie',
        'stringUtil',
        'clientSideStorage',
        'mcomTemplates/features/personalizedWidget/PersonalizedWidget',
        'mcomjs/features/personalizedWidget/PersonalizedWidgetModel',
        'mcomjs/features/personalizedWidget/PersonalizedWidgetHelpers'
    ],
    function ( $, _, Backbone, logger, Cookie, stringUtil, clientSideStorage, personalizedWidgetTemplate, PersonalizedModel, PersonalizedWidgetHelpers ) {

        var personalizedWidgetView = Backbone.View.extend( {
            el: "#personalizedWidgetContainer",
            events: {
                'click #personalizedWidgetClose': 'getWidgetClose'
            },
            template: personalizedWidgetTemplate,

            initialize: function ( options ) {
                var self = this;
                _.extend( this, options );
                self.getScrollDown();
                self.render();
            },

            render: function () {
                var self = this;
                var signedIn = Cookie.get( 'SignedIn' ) === "1";
                var userName = Cookie.get( "UserName", "GCs" );
                if ( signedIn && userName ) {
                    var showWidget = JSON.parse( clientSideStorage.getSession( 'personalizedShow' ) );
                    if ( showWidget !== 1 ) {
                        var resData = JSON.parse( clientSideStorage.getSession( 'personalizedInfo' ) );
                        if ( stringUtil.isEmptyString( resData ) ) {
                            if ( ( resData.reviewCount !== 0 ) || ( resData.orderDate !== '' ) ) {
                                self.$el.html( personalizedWidgetTemplate( resData ) );
                            }

                        } else {
                            var personalizedModel = new PersonalizedModel(),
                                callback = {
                                    success: function ( res ) {
                                        clientSideStorage.setSession( 'personalizedInfo', JSON.stringify( res ) );
                                        resData = JSON.parse( JSON.stringify( res ) );
                                        if ( ( resData.reviewCount !== 0 ) || ( resData.orderDate !== '' ) ) {
                                            self.$el.html( personalizedWidgetTemplate( resData ) );
                                        }
                                    },
                                    failure: function ( err ) {
                                        logger.log( "Failed personalized response", JSON.stringify( err ) );
                                    }
                                };
                            // invoke watch list data
                            personalizedModel.fetch( callback );

                        }
                    }
                }
            },
            getScrollDown: function () {
                $( window ).scroll( function () {
                    if ( ( $( this ).scrollTop() > 5 ) ) {
                        $( '#personalizedWidgetContainer' ).fadeIn();
                    } else {
                        $( '#personalizedWidgetContainer' ).fadeOut();
                    }
                } );
            },
            getWidgetClose: function () {
                var self = this;
                clientSideStorage.setSession( 'personalizedShow', 1 );
                $( '.personalizedWidget' ).hide();
            }

        } );
        return personalizedWidgetView;

    } );
