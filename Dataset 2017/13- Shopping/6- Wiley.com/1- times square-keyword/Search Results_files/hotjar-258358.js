window.hjSiteSettings = window.hjSiteSettings || {"testers_widgets":[],"surveys":[],"record_targeting_rules":[{"negate":false,"pattern":"http:\/\/www.wiley.com\/WileyCDA\/Section\/id-301905.html","match_operation":"simple","component":"url"}],"recording_capture_keystrokes":false,"polls":[],"site_id":258358,"forms":[],"record":true,"heatmaps":[{"created_epoch_time":1469820914,"targeting":[{"negate":false,"pattern":"http:\/\/www.wiley.com\/WileyCDA\/WileyTitle\/productCd-1119225418.html","match_operation":"simple","component":"url"}],"id":673320,"selector_version":0}],"deferred_page_contents":[],"feedback_widgets":[],"r":0.4879698191,"state_change_listen_mode":"manual"};

window.hjBootstrap = window.hjBootstrap || function (scriptUrl) {
    var b = function () {}, d = document, h = d.head || d.getElementsByTagName('head')[0], s, v, c, ct;

    if (!d.addEventListener) {
        return;
    }

    s = d.createElement('script');
    s.async = 1;
    s.src = scriptUrl;
    h.appendChild(s);

    ct = [
        'iframe#_hjRemoteVarsFrame {',
        'display: none !important; width: 1px !important; height: 1px !important; ' +
        'opacity: 0 !important; pointer-events: none !important;',
        '}'
    ];
    c = document.createElement('style');
    c.type = 'text/css';
    if (c.styleSheet) {
        c.styleSheet.cssText = ct.join('');
    } else {
        c.appendChild(d.createTextNode(ct.join('')));
    }
    h.appendChild(c);

    v = d.createElement('iframe');
    v.style.cssText = ct[1];
    v.name = '_hjRemoteVarsFrame';
    v.title = 'Hotjar Remote Vars Frame';
    v.id = '_hjRemoteVarsFrame';
    v.src = 'https://' + (window._hjSettings.varsHost || 'vars.hotjar.com') + '/rcj-b2c1bce0a548059f409c021a46ea2224.html';
    v.onload = function () {
        b.varsLoaded = true;
        if ((typeof hj != 'undefined') && hj.event) {
            hj.event.signal('varsLoaded');
        }
    };
    b.varsJar = v;

    if (d.body) {
        d.body.appendChild(v);
    } else {
        d.addEventListener('DOMContentLoaded', function () {
            d.body.appendChild(v);
        });
    }
    window.hjBootstrap = b;
};


hjBootstrap('https://script.hotjar.com/modules-b1f6f86937bf1d1c64228fa0d9f0f0db.js');