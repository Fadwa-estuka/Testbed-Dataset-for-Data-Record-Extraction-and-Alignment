window.Ibles = window.Ibles || {};

// sessionReady loads scripts asynchronously after global dependencies (underscore, backbone, etc)
// have been loaded, and executes callback after the js session model loggedIn status is determined

(function(){
    // global string formating method
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) { 
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                ;
            });
        };
    } 
})();

(function($){
    Ibles.sessionReady = $.Deferred();
    Ibles.pageScripts = [];
        
    function sessionReady() {
        var args = arguments,
            callback = args[args.length - 1],
            scripts = [].slice.call(args);

        if (typeof(callback) == "function") {
            scripts.pop();
        } else {
            callback = null;
        }		
        if (args[0].constructor === Array) {
            args[0].push(callback);
            sessionReady.apply(null, args[0]);
            return;
        }		
        $.when(Ibles.sessionReady).done(function(sessionModel){
            if (!callback) {
                head.load.apply(null, scripts);				
            } else {
                var cbWrapper = function() {
                    setTimeout(function(){
                        callback(sessionModel); 
                    }, 0);                
                };
                if (!scripts.length) {
                    cbWrapper();
                } else {
                    scripts.push(cbWrapper);
                    head.load.apply(null, scripts);
                }
            }
        });	
    	Ibles.pageScripts = Ibles.pageScripts.concat(scripts);
    }
    window.sessionReady = sessionReady;
})(jQuery);
