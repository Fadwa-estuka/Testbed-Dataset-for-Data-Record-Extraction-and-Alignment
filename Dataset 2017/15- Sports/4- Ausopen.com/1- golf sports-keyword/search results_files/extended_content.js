$.ajaxPrefilter('script', function(options) {
options.cache = true;
});
var ibmdebug = false; //indicates whether or not to display flash debug window
if (qsParse.get("debug") == "true"){
ibmdebug = true;
}
var script_array = [
'/aus/js/logging.js',
'/aus/js/videoController.js',
'/aus/js/radioController.js',
'/aus/js/scores/base64.js',
'/aus/js/messagesight/mqttws31.js',
'/aus/js/messagesight/ms_connect.js',
'/aus/js/scores/scores_object.js',
'/aus/js/mip/mip_display_panel.js',
'/aus/js/scores/scores_names_en_AU.js',
'/aus/js/mip/mip_main_panel.js'
]; 		
var panelDiv;
var mip_page;
var current_tab;
var container;
//console.info(document.location.pathname);
//console.info(document.location.href.indexOf("/scores/index.html") == -1);
//console.info(document.location.pathname != "/en_AU/scores/");
//console.info(document.location.href.indexOf("/en_AU/scores/stats/") == -1);
//console.info(document.location.href.indexOf("/scores/index.mip.html") == -1);
//console.info(document.location.href.indexOf("/scores/index.manual.html") == -1);
if(document.location.href.indexOf("/scores/index.html") == -1 && document.location.pathname != "/en_AU/scores/" && document.location.href.indexOf("/en_AU/scores/stats/") == -1 && document.location.href.indexOf("/scores/index.mip.html") == -1 && document.location.href.indexOf("/scores/index.manual.html") == -1) {
mip_page = false;
} else {
mip_page = true;
}
if (document.location.href.indexOf("/en_AU/scores/stats/") == -1) {
slamtracker_page = false;
} else {
slamtracker_page = true;
}
$(document).ready(function(){
if(!slamtracker_page) {
$(".sidebarTabs").tabs({
disabled: true,
active: false,
create: function(event, ui){},
activate: function(event, ui){}
});
$(".sidebarTabs li").not('.ui-state-disabled').on('click', function(){
measureApp('Scores Panel', 'Tab', $(this).find('a').html());
})
if(mip_tournStarted && !mip_page) {			
$.each(script_array, function(ind,val){
if(ind != 1 || (ind == 1 && !browser.isIE8down)) {
var script = document.createElement("script")
script.type = "text/javascript";
script.src = val;
$('#sidebarScores').append(script);
}
});
$('#sbs_live .extendedcontent').load('/en_AU/scores/courts_content.ssi', function( response, status, xhr ) {
if (status == 'error') {
//traceDebug('Error loading score tables in extended content area: '+ xhr.status + ' ' + xhr.statusText);
//console.log('Error loading score tables in extended content area: '+ xhr.status + ' ' + xhr.statusText);
} else {
$(this).attr('id','mipTables');
}
});
} 
} else {
$(".modScores").remove();
}
// if page loads at extended size, initialize the extended content area
if(windowSize == 'extended') { 
panel_initContent(); 
//initVideoController();
//initChannelController();
}
});
/**********************************************
* set cookie for which panel tab is selected
**********************************************/
function panel_setTab(which){
$.cookie('aus_tab', which, {path:'/'});
}
function panel_initContent(){
if(!pre_tourn){
if(mip_tournStarted) {
$('#ausSidebar').show();
if(!mip_page && mip_tournStarted) { 
formUpdate(); 
}
}
} else {
$('#ausSidebar').hide();
}
}
function panel_stopContent(){
if(!mip_page && mip_tournStarted) { stopMIP(); }
}