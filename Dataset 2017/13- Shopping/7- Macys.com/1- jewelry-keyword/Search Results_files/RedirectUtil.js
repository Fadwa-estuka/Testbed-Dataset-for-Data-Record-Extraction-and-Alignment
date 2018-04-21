define( [], function () {
    return {
        toLocation: function ( newLocation ) {
            window.location = newLocation;
        },

        toHref: function ( newHref ) {
            window.location.href = newHref;
        }
    };
} );