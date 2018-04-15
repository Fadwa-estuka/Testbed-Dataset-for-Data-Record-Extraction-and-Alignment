window.hjSiteSettings = window.hjSiteSettings || {"testers_widgets":[],"surveys":[],"record_targeting_rules":[{"negate":false,"pattern":"data-course-labels-experiment-hotjar","match_operation":"exact","component":"trigger"},{"negate":false,"pattern":"home\/teaching\/topics","match_operation":"contains","component":"url"}],"recording_capture_keystrokes":false,"polls":[],"site_id":298206,"forms":[],"record":true,"heatmaps":[{"created_epoch_time":1479496934,"targeting":[{"negate":false,"pattern":"master-powerpoint-2016-scratch-to-advance-in-just-4-hours","match_operation":"contains","component":"url"}],"id":930252,"selector_version":0},{"created_epoch_time":1479496883,"targeting":[{"negate":false,"pattern":"master-excel-for-vba-training","match_operation":"contains","component":"url"}],"id":930251,"selector_version":0},{"created_epoch_time":1479496772,"targeting":[{"negate":false,"pattern":"cisco-ccna-rs-200-125-practice-tests","match_operation":"contains","component":"url"}],"id":930244,"selector_version":0},{"created_epoch_time":1479337588,"targeting":[{"negate":false,"pattern":"how-to-start-a-business-with-no-money-borrowing-or-credit","match_operation":"contains","component":"url"}],"id":923702,"selector_version":0},{"created_epoch_time":1479249069,"targeting":[{"negate":false,"pattern":"krista-tippett-on-the-art-of","match_operation":"contains","component":"url"}],"id":919950,"selector_version":0},{"created_epoch_time":1479248875,"targeting":[{"negate":false,"pattern":"accounting-get-hired-without-work-experience","match_operation":"contains","component":"url"}],"id":919943,"selector_version":0},{"created_epoch_time":1479247166,"targeting":[{"negate":false,"pattern":"entrepreneurship-buy-and-sell-your-startup-or-business","match_operation":"contains","component":"url"}],"id":919871,"selector_version":0},{"created_epoch_time":1477506672,"targeting":[{"negate":false,"pattern":"seane-corn","match_operation":"contains","component":"url"}],"id":865705,"selector_version":0}],"deferred_page_contents":[],"feedback_widgets":[],"r":0.1132473221,"state_change_listen_mode":"manual"};

window.hjBootstrap = window.hjBootstrap || function (scriptUrl) {
    var b = function () {}, d = document, h = d.head || d.getElementsByTagName('head')[0], s, v, c, ct;

    if (!d.addEventListener) {
        return;
    }

    s = d.createElement('script');
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


hjBootstrap('https://script.hotjar.com/modules-c32705eea471a3b86fa01dc951b20d98.js');