// updated 9/20/2016 at by JS
// previous updated 8/15/2016 by KJL
// previous updated 8/05/2016 at by JS
// previous updated 7/29/2016 at by SC
// previous updated 7/14/2016 at 12:45PM by JS
// previous updated 5/04/2016 at 2:13PM by KJL
// previous updated 4/27/2016 at 1:02PM by KJL
/*
 Replacing the direct call to http://www.medscape.com/javascript/mbox.js with this file instead
 Allows Medscape to restrict where the mbox is loaded.
 */
var mboxof = false;
var mboxr = [
//To Open to the mbox to the Entire .com Site uncomment the line below this
//"www.medscape.com",
//--------------------
//To Open to the mbox to the Entire .org Site uncomment the line below this
//"www.medscape.org",
//--------------------
//Examples Currently open to the mbox: www.medscape.com/slideshow with the following line
//"slideshow"
//Open to these test articles for the multi-page nav design testing
//"/features/slideshow/public/femaleleadershipreport2015",
//"/features/slideshow/20-years",
//"/features/slideshow/neurostimulation",
//"/features/slideshow/backpain",
    "/article/1819911-overview",
    "/article/280104-overview",
    "/article/163062-overview",
    "/article/117853-overview",
    //urls for news A/b test
    "/viewarticle/864387",
    "/viewarticle/866515",
    "/viewarticle/866937",
    "/viewarticle/865613",
    "/viewarticle/779558",
    "/viewarticle/475437",
    "/viewarticle/865894",
    "/viewarticle/864808",
    "/viewarticle/711641",
    "/viewarticle/804146",
    "/viewarticle/862407",
    "/viewarticle/722513",
    "/viewarticle/715633",
    "/viewarticle/582177",
    "/viewarticle/827680",
    "/viewarticle/432534",
    "/viewarticle/477692",
    "/viewarticle/804461",
    "/viewarticle/710045",
    "/viewarticle/431617",
    "/viewarticle/865894",
    "/viewarticle/865209",
    "/viewarticle/866199",
    "/viewarticle/864966",
    "/viewarticle/866155",
    "/viewarticle/865772",
    "/viewarticle/866309",
    "/viewarticle/866060",
    "/viewarticle/863887",
    "/viewarticle/864566",
    "/viewarticle/478840",
    "/viewarticle/478840",
    "/viewarticle/778052",
    "/viewarticle/865785",
    "/viewarticle/863127",
    "/viewarticle/861379"
];
var mboxb = [
    "/features/slideshow/osteoporosis",
    "/features/slideshow/acute-stroke-signs"
];

//var mboxlocsplit = location.pathname.split("/");
//var mboxa = jQuery.inArray(location.pathname, mboxr);
var mboxa = location.pathname.indexOf("/features/slideshow");

if (mboxa != '-1') {
    if((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) === true) {
        if(jQuery.inArray(location.pathname, mboxb) !== -1) {
            document.writeln('<script type="text/javascript" src="http://img.medscape.com/pi/scripts/tandt/mbox.js"><\/script>');
            document.writeln('<script>try{mboxCreate("SiteCatalyst: event");}catch(e){}</script>');
            mboxof = true;
        }
    }
    else {
        document.writeln('<script type="text/javascript" src="http://img.medscape.com/pi/scripts/tandt/mbox.js"><\/script>');
        document.writeln('<script>try{mboxCreate("ProfMbox");}catch(e){}</script>');
        mboxof = true;
    }
}

else if(jQuery.inArray(location.pathname, mboxr) !== -1){
    document.writeln('<script type="text/javascript" src="http://img.medscape.com/pi/scripts/tandt/mbox.js"><\/script>');
    document.writeln('<script>try{mboxCreate("ProfMbox");}catch(e){}</script>');

    mboxof = true;

}

$.each(mboxr, function( index, value ) {
    if (window.location.href.indexOf(value) !== -1 || window.location.href.indexOf(value) !== -1 || window.location.href.indexOf(value) !== -1) {
        if (!mboxof) {
            document.writeln('<script type="text/javascript" src="http://img.medscape.com/pi/scripts/tandt/mbox.js"><\/script>');
            document.writeln('<script>try{mboxCreate("ProfMbox");}catch(e){}</script>');

            mboxof = true;
        }
    }
});