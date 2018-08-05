function redirectToMobile(){
if(window.screen.width < 768){
// This array contains a list of the URL's we will redirect
var mobileBaseUrlMap = [
{
"url" : "/en_AU/news/index.html",
"mobileUrl" : "/mobile/en_AU/news/articles/index.html"
},
{
"url" : "/en_AU/news/photos/index.html",
"mobileUrl" : "/mobile/en_AU/news/galleries/index.html"
},
{
"url" : "/en_AU/scores/index.html",
"mobileUrl" : "/mobile/en_AU/scores/index.html"
},
{
"url" : "/en_AU/scores/schedule/index.html",
"mobileUrl" : "/mobile/en_AU/scores/schedule/index.html"
},
{
"url" : "/en_AU/scores/draws/"
},
{
"url" : "/en_AU/scores/completed_matches/"
},													
{
"url" : "/en_AU/news/articles/"
},
{
"url" : "/en_AU/news/match_reports/"
},
{
"url" : "/en_AU/news/interviews/"
}
];
var currentUrl = location.pathname;
if(currentUrl != '/index.html'){
for(var i = 0; i < mobileBaseUrlMap.length; i++){
if(currentUrl.indexOf(mobileBaseUrlMap[i].url) != -1){
var newUrl = "/mobile" + currentUrl + '?promo=mobileredirect';
if(mobileBaseUrlMap[i].mobileUrl != undefined){
newUrl = mobileBaseUrlMap[i].mobileUrl + "?promo=mobileredirect";
}
//Redirect the user....
i = mobileBaseUrlMap.length;
document.location = newUrl;
}
}
}
}
}
redirectToMobile();