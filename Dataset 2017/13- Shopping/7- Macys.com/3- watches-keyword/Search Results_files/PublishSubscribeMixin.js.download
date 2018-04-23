//#MODULE - Pub/Sub Subscriber Mixin
//> Author: Tiago Garcia
//> Create Date: June 19, 2014
//
//##DESCRIPTION: This mixin should be extended by any object that wants to be able to fire out methods with exact same name as *message.event* from pub/sub.
define( [], function () {

    var PubSubSubscriberMixin = {

        //###Method - run
        //This method receives pub/sub messages and delegate to handlers.
        //> parameters
        //>
        //+ *message* - the pub/sub message
        //
        //> returns
        //>
        //+ (none)
        run: function ( message ) {
            var action = message.event;

            if ( typeof this[ action ] === 'function' ) {
                this[ action ]( message );
            }
        }

    };

    return PubSubSubscriberMixin;
} );

//### Example usage:
/*
    define( [ 'pubsubMixin', 'myModule' ], function ( PubSubMixin, myModule ) {
        // Binding the mixin to myModule
        var subscriber = _.bind( PubSubMixin.run, myModule ); // subscriber will now have run()

        // Now you can subscribe myModule to an observer
        PubSub.observe( 'myChannel' ).subscribe( subscriber );
    });
*/