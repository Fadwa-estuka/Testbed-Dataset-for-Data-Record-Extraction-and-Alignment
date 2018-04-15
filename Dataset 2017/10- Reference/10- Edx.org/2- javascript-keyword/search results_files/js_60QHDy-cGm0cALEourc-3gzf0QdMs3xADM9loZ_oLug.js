(function( $ ){
    'use strict';

    var footer = (function(){
        var _fn = {
            el: '#edx-branding-footer',

            url: '/api/branding/v1/footer?language=en',

            init: function() {
                var root = false;

                _fn.$el = $( _fn.el );
                root = _fn.$el.data('base-url');

                if ( _fn.$el.length && root ) {
                    _fn.footer.get( root );
                }
            },

            footer: {
                get: function( root ) {
                    $.ajax({
                        type: 'GET',
                        dataType: 'html',
                        url: root + _fn.url,
                        success: _fn.footer.load
                    });
                },

                load: function( html ) {
                    $(html).replaceAll( _fn.$el );
                }
            }
        };

        return {
            load: _fn.init
        };
    })();

    setTimeout(function() {
        footer.load();
    }, 100);

})( jQuery );
;
