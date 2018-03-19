/*
OnlineOpinion v5.9.3
Released: 09/21/2015. Compiled 09/30/2015 12:09:31 PM -0500
Branch: 5.9.3 efe6bf2541deb563c2a9884b2a3034c881047acf
Components: Full
UMD: disabled
The following code is Copyright 1998-2015 Opinionlab, Inc. All rights reserved. Unauthorized use is prohibited. This product and other products of OpinionLab, Inc. are protected by U.S. Patent No. 6606581, 6421724, 6785717 B1 and other patents pending. http://www.opinionlab.com
*/

/* global window, OOo */

/* [+] Tab configuration */
(function (w, o) {
    'use strict';

    var OpinionLabInit = function () {

        o.oo_tab = new o.Ocode({
            tab: {
                position: 'right',
                title: 'Feedback',
                tabType: 1,
                verbiage: 'feedback'
            },
            tealeafCookieName: 'TLTSID',
            customVariables: {
                SkyMilesNumber: typeof CustomerInfo !== 'undefined' ? (typeof CustomerInfo.getSkyMilesNumber !== 'undefined' ? CustomerInfo.getSkyMilesNumber() : '') : '',
                SkyMilesStatus: typeof CustomerInfo !== 'undefined' ? (typeof CustomerInfo.getMembershipLevel !== 'undefined' ? CustomerInfo.getMembershipLevel() : '') : '',
                LoggedIn: typeof CustomerInfo !== 'undefined' ? (typeof CustomerInfo.isLoggedIn !== 'undefined' ? CustomerInfo.isLoggedIn() : '') : '',
                Mobile: OOo.readCookie('mobile'),
                Country: OOo.readCookie('MP_COUNTRY'),
                campaignId0: '',
                experienceId0: '',
                campaignId2: '',
                experienceId2: '',
                campaignId3: '',
                experienceId3: '',
                campaignId4: '',
                experienceId4: '',
                campaignId5: '',
                experienceId5: '',
                campaignId6: '',
                experienceId6: '',
                campaignId7: '',
                experienceId7: '',
                campaignId8: '',
                experienceId8: '',
                campaignId9: '',
                experienceId9: ''
            }
        });

        var oo_groupArray;
        if (typeof window.targetCtx !== 'undefined') {
            oo_groupArray = window.targetCtx.split(',');
            for(var i = 0; i < oo_groupArray.length; i++) {
                var group = oo_groupArray[i].split(':'),
                    campaign = group[0],
                    experience = group[1];
                OOo.oo_tab.options.customVariables['campaignId' + i] = campaign;
                OOo.oo_tab.options.customVariables['experienceId' + i] = experience;

            }
        }

    };

    o.addEventListener(w, 'load', OpinionLabInit, false);

})(window, OOo);