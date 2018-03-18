(function($){
	
window.Ibles = window.Ibles || {};

window.Ibles = _.extend(window.Ibles, {
    templateCache: function(selector) {
        var JST = window.Ibles.JST = window.Ibles.JST || {},
            template = JST[selector];
        if (!template) {
            template = $(selector).html();
            template = _.template(template);
            JST[selector] = template;
        }
        return template;
    },

    fetchTemplate: function(path, callback) {  
        var JST = window.Ibles.JST = window.Ibles.JST || {},
            deferred, promise;
        
        if (JST[path]) {
            promise = JST[path];
            promise.done(callback);
            return promise;
        }
    
        deferred = new $.Deferred();
        promise = JST[path] = deferred.promise();
        promise.done(callback);
    
        $.ajax({
            url: path,
            type: "get",
            dataType: "text",
            global: false,
            success: function(contents) {
                var scripts = $(contents).filter('script[type="text/template"]');
                _.each(scripts, function(script) {
                    var script = $(script);
                    JST['#' + script.attr('id')] = _.template(script.html());
                });
                if (_.isFunction(callback)) {
                    promise.done(callback);
                }
                deferred.resolve(JST);
            }
        });
        return promise;
    },

    fetchAndAppendTemplate: function(path, $container) {
        var JST = window.Ibles.JST = window.Ibles.JST || {},
            deferred, promise;
        if (JST[path]) {
            promise = JST[path];
            return promise;
        }
        deferred = new $.Deferred();
        promise = JST[path] = deferred.promise();
        $.ajax({
            url: path,
            type: "get",
            dataType: "text",
            global: false,
            success: function(contents) {
                $container.append(contents);
                deferred.resolve();
            }
        });
        return promise
    }
});

})(window.jQuery);