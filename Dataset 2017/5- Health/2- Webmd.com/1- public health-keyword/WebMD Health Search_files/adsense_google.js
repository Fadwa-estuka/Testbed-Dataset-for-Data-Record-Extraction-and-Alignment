/* repo: google-adsense/hotfix-PPE-47646-google-adtest-hardcoded@ - Package Version: 2.3.1 - 2016-02-22 04:39 pm - User: Mary Brewer */
!function(a,b,c,d,e,f){a[d]=a[d]||function(){(a[d].q=a[d].q||[]).push(arguments)},a[d].t=1*new Date,e=b.createElement(c),f=b.getElementsByTagName(c)[0],e.async=1,e.src="//www.google.com/adsense/search/async-ads.js",f.parentNode.insertBefore(e,f)}(window,document,"script","_googCsa");var url=window.location.href,searchQuery=url.match("query=(.*)&");null==searchQuery&&(searchQuery=url.match("query=(.*)$"));var pageOptions={pubId:"partner-webmd_core",query:unescape(searchQuery[1]),hl:"en",siteLinks:!1,sellerRatings:!0,detailedAttribution:!1,adtest:""===webmd.url.getLifecycle()&&""===webmd.url.getEnv()?"off":"on",fontSizeTitle:14,colorTitleLink:"#006699",colorDomainLink:"#006699",colorBackground:-1!==navigator.appVersion.indexOf("Win")?"#FFF8E7":"#FDF6E5",noTitleUnderline:!0,detailedAttribution:!1,linkTarget:"_blank"},adblock2={container:"adContainer2",number:3,channel:"webmd_bottom_ad",lines:3,longerHeadlines:!0},adblock1={container:"adContainer1",number:3,channel:"webmd_top_ad",lines:3,longerHeadlines:!0};null!=searchQuery&&_googCsa("ads",pageOptions,adblock1,adblock2);