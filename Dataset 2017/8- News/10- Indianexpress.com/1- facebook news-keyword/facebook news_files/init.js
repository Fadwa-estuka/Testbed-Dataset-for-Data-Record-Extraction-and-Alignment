function loadjscssfile(t,s,e){if("js"==s){var c=document.createElement("script");c.onload=e,c.src=t,document.getElementsByTagName("head")[0].appendChild(c)}if("css"==s){var o=document.createElement("link");o.setAttribute("rel","stylesheet"),o.setAttribute("type","text/css"),o.setAttribute("href",t),document.getElementsByTagName("head")[0].appendChild(o),e()}};
var _isLcl = window.location.host == 'sportz2:8079' || window.location.host == '192.168.100.150:8079';
window.basepath = _isLcl?'http://'+window.location.host+'/olympics_2016/':'http://olympicshub.stats.com/';
var newClient = 'indianexpress';
function fnLoadHubWidgets(){
	//loadjscssfile(basepath+"clients/ndtv/css/hub-style.css","css",function(){
		loadjscssfile(basepath+"clients/"+newClient+"/css/ie-widget-style.css","css",function(){
			loadjscssfile(basepath+"js/common.js","js",function(){
				//loadjscssfile(basepath+"js/Chart.js","js",function(){
					loadjscssfile(basepath+"js/main_hub.js","js",function(){
						loadjscssfile(basepath+"clients/"+newClient+"/js/markup.js","js",function(){
							var markup = '<div class="si-medal-tallyWrap"><div class="si-tally-head"><div class="si-left-head"><span>medal tally</span></div><!--<div class="si-right-head"><img src="http://olympicshub.stats.com/clients/'+newClient+'/images/logo.png"></div>--></div><div class="si-tally-body si-widgets" data-type="overAllMedals" data-reqfeed="overAllMedals"></div><div class="event-block si-widgets" data-type="medalEvents" data-reqfeed="overAllMedals"></div></div>';
							$('#siOlyWidgetContainer').html(markup);
							var SI_C_obj = {client:newClient,language:'en','basepath':basepath};
							SI_OLHUB.init(SI_C_obj);
						});
					});
				//});
			});
		});
	//});
}
window.onload=fnLoadHubWidgets;