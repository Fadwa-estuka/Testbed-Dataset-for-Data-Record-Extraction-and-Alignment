define('xbox.biTracking.pageReference', function () {
    return {
        getReferrer: function () {
            var ref = document.referrer;
            if (ref.length == 0) {
                ref = 'direct';
            } else {
                var hostName = ref.replace(/^https?\:\/\/([^\/]+).*/i, '$1');
                if (hostName.match(/\.xbox\.com$/i)) {
                    var host = hostName.replace(/\.xbox\.com/i, '')
                    var pathName = ref.replace(/^https?\:\/\/[^\/]+\/..\-..\/(.*)/i, '$1');
                    pathName = pathName.replace(/\?.*/, '');
                    ref = host + '/' + pathName;
                } else {
                    ref = 'external/' + hostName;
                }
            }
            return ref;
        }
    };
});
