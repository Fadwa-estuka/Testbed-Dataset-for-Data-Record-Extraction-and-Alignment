Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.on("click","#gnavone a[href$\x3d'appointments']",function(){Bootstrapper._GAMT.__TrackIt(["send","event","appointment","global-nav-link","request-an-appointment-top-right-global-nav"])},true);Bootstrapper.on("click","#nav li li a[href$\x3d'appointments']",function(){Bootstrapper._GAMT.__TrackIt(["send","event","appointment","global-nav-dropdown-link",
"appointments-link-global-nav-dropdown"])},true);if(location.pathname.toLowerCase().match(/\/$/))Bootstrapper.on("click","#main-content a[href$\x3d'appointments']",function(){Bootstrapper._GAMT.__TrackIt(["send","event","appointment","appointments-tile","request-an-appointment-middle-of-homepage"])},true);Bootstrapper.on("click","#footer a[href$\x3d'appointments']",function(){Bootstrapper._GAMT.__TrackIt(["send","event","appointment","footer-link","request-an-appointment-footer"])},true);Bootstrapper.on("click",
"#nav li blockquote a[href$\x3d'appointments']",function(){Bootstrapper._GAMT.__TrackIt(["send","event","appointment","global-nav-dropdown-link","quality-care-link-global-nav-dropdown"])},true);Bootstrapper.on("click","#main \x3e div.other-topics \x3e ul \x3e li.t-6 \x3e a[href$\x3d'appointments']",function(){Bootstrapper._GAMT.__TrackIt(["send","event","appointment","appointments-tile","request-an-appointment-other-topics"])},true)},1736627,[1812914],240850,[265954]);
Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.on("click","#nav a[href*\x3d'/medical-professionals'] + div a[href*\x3d'medprof.mayoclinic.org']",function(){Bootstrapper._GAMT.__TrackIt(["send","event","medical professional","referral","online service global unav"])},true)},1731749,[1812914],307994,[265954]);
Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;var lpath=location.pathname.toLowerCase();if(lpath.match(/\/giving-to-mayo-clinic\/?$/)){$("div.centertopnav.extendfull ul li a[href*\x3d'sslpage.aspx']").on("click",function(){Bootstrapper._GAMT.__TrackIt(["send","event","donate","give-now-link","give-now-main-button-development-homepage"])});$("div.p-3 a span.action").parent("a.linkbox").on("click",function(){Bootstrapper._GAMT.__TrackIt(["send",
"event","donate","give-now-link","give-now-left-of-video-homepage"])})}if(lpath.match(/\/giving-to-mayo-clinic/)&&lpath.match(/\/giving-to-mayo-clinic\/?$/)===null){$('div.topnav-h ul li a[href*\x3d"give-now"]').on("click",function(){Bootstrapper._GAMT.__TrackIt(["send","event","donate","give-now-link","give-now-development-site-nav"])});$("a.linkbox.givenow").on("click",function(){Bootstrapper._GAMT.__TrackIt(["send","event","donate","give-now-tile","give-now-tile-all-development-pages"])})}if(lpath.match(/\/ways-to-give\/honoring-philanthropy\/?$/))$('#main-content p a[href*\x3d"honor-roll"]').on("click",
function(){Bootstrapper._GAMT.__TrackIt(["send","event","donate","pdf-link","see-honor-roll-pdf"])});if(lpath.match(/\/ways-to-give\/?$/))$('ul.content li a[href*\x3d"mailto:development"]').on("click",function(){Bootstrapper._GAMT.__TrackIt(["send","event","contact","email-link","email-mayo-development-department"])})},548068,[1812914],243404,[265954]);
Bootstrapper.bindDependencyDOMLoaded(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;if(window.location.pathname.match(/\/$/)!==null)$(document).on("click","#lb1 a[href\x3d'http://150years.mayoclinic.org/mobile-exhibit.php']",function(){Bootstrapper._GAMT.__TrackIt(["send","event","internal-promo","click","home-page-150-years-mobile-exhibit"])})},548056,[1812914],236949,[265954]);