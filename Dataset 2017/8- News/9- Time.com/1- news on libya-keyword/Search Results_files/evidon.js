/* evidon - 2014-02-03*/
var c = document.createElement('script');
c.type = 'text/javascript';
c.async = true;
c.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/geo/c.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(c, s);

setTimeout(function() {
    if (['at', 'be', 'bg', 'cz', 'dk', 'ee', 'ie', 'gr', 'fr', 'it', 'cy', 'lv', 'lt', 'lu', 'hu', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'fi', 'se', 'is', 'si', 'gb', 'es'].indexOf(window._bap_p_country) != -1) {

        (function() {
            var hn = document.createElement('script');
            hn.type = 'text/javascript';
            hn.async = true;
            hn.setAttribute('data-ev-hover-pid', 1976);
            hn.setAttribute('data-ev-hover-ocid', 785);
            hn.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'c.betrad.com/geo/h1.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(hn, s);
        })();
    }
}, 1000);


