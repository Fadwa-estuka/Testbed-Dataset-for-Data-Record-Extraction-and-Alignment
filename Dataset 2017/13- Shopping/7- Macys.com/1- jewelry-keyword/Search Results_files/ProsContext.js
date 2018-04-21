define( [ 'globals', 'thumbnailCarousel/pros/ProsEventHandler', 'prosTrackingHelper' ], function ( Globals, eventHandler ) {
    var topLevelCategoryID;
    if ( window.MACYS && window.MACYS.brightTag && window.MACYS.brightTag.product ) {
        topLevelCategoryID = window.MACYS.brightTag.product.topLevelCategoryID;
    }

    return {
        timeout: Globals.getValue( 'props.recommendationsEngineTimeout' ),
        panelTemplate: 'hbsCommonTemplates/component/thumbCarousel/commonPanel',
        pagination: 5,
        orientation: 'horizontal',
        quickview: false,
        touch: true,
        snap: true,
        pageSnap: true,
        template: 'hbsCommonTemplates/component/thumbCarousel/prosPanelThumbnail',
        tracking: {},
        productDescLimit: 30,
        categoryRecommendation: false,
        moreColors: true,
        responsive: false,
        horizontalImageSpecs: {
            width: 126,
            height: 154
        },
        verticalImageSpecs: {
            width: 99,
            height: 146
        },
        recommendationsOpts: {
            requester: 'MCOM-NAVAPP',
            maxRecommendations: 10,
            timeout: Globals.getValue( 'props.recommendationsEngineTimeout' ),
            cts: "http://www.macys.com"
        },
        drpOpts: {
            enabledCategories: {
                men: [ 1, 65, 89, 20635, 17788, 53239, 47665 ],
                women: [ 118, 255, 5449, 13247, 26846, 55285 ]
            },
            experiment: {
                show: 483,
                hide: 484
            },
            topLevelCategoryID: topLevelCategoryID
        },
        killswitches: {
            informantsEnabled: Globals.getValue( 'props.prosInformantsEnabled' ),
            colorwayPricingEnabled: Globals.getValue( 'props.colorwayPricingEnabled' ),
            trackingPixel: Globals.getValue( 'props.prosTrackingPixelEnabled' ) === 'true',
            prosDedicatedRecPageEnabled: Globals.getValue( 'props.prosDedicatedRecPageEnabled' ) === 'true',
            prosDrpTabletEnabled: Globals.getValue( 'props.prosDrpTabletEnabled' ) === 'true',
            prosDrpLinkEnabled: Globals.getValue( 'props.prosDrpLinkEnabled' ) === 'true',
            prosDrpMenEnabled: Globals.getValue( 'props.prosDrpMenEnabled' ) === 'true',
            prosQuickviewEnabled: Globals.getValue( 'props.prosQuickviewEnabled' ) === 'true'
        }
    };
} );
