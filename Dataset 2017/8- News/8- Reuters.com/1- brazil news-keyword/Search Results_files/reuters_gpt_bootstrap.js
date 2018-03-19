// Lotame begin

var lotamePid;

function extractPid(lotameData){ 
      lotamePid=lotameData.Profile.pid; 
}

function loadScript(url){

    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
              
            }
        };
    } else {  //Others
        script.onload = function(){
         
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript("http://ad.crwdcntrl.net/5/c=4208/pe=y/callback=extractPid");

// Lotame end


var init = true; 

window.TR3= {};
TR3.logEnabled = 1;
TR3.logs       = [];
TR3.intervals  = {};
TR3.tagEvents  = {};
TR3.sync       = {};
TR3.tags       = {};
TR3.counters   = {};
TR3.data       = {};
TR3.Ads        = {};
TR3.data.adslots = [];

TR3.data.ord = Math.floor(Math.random()*10e12);

window.WT = window.WT || {};


//DFP Premimum code
TR3.data.GlobalAdsAllowed = true;
TR3.data.sites = {};
TR3.data.sites = {
    'www.reuters.com' : {'enabled':true, 'tier2':false, 'rubicon': true},
    'uk.reuters.com' :  {'enabled':true, 'tier2':false, 'rubicon': true},
    'live.reuters.com' :  {'enabled':true, 'tier2':true},
    'ca.reuters.com' :  {'enabled':true, 'tier2':true},
    'cn.reuters.com' : {'enabled':true, 'tier2':false},
    'in.reuters.com' : {'enabled':true, 'tier2':false},
    'jp.reuters.com' : {'enabled':true, 'tier2':true},
    'blogs.reuters.com' : {'enabled':true, 'tier2':true},
    'mx.reuters.com' : {'enabled':true, 'tier2':true},
    'lta.reuters.com' : {'enabled':true, 'tier2':true},
    'ar.reuters.com'  : {'enabled':true, 'tier2':true},
    'br.reuters.com' : {'enabled':true, 'tier2':true},
    'es.reuters.com' : {'enabled':true, 'tier2':true},
    'ru.reuters.com' : {'enabled':true, 'tier2':true},
    'ara.reuters.com' : {'enabled':true, 'tier2':true},
    'fr.reuters.com' :  {'enabled':true, 'tier2':true},
    'de.reuters.com' : {'enabled':true, 'tier2':true},
    'it.reuters.com' : {'enabled':true, 'tier2':true},
    'borsaitaliana.it.reuters.com' : {'enabled':true, 'tier2':true},
    'af.reuters.com' :  {'enabled':true, 'tier2':true},
    'olyadmin.reuters.com' :  {'enabled':true, 'tier2':false},
    'betaus.admin.reuters.com' :  {'enabled':true, 'tier2':false},
    'brazil-soccer.reuters.com' :  {'enabled':true, 'tier2':false},
    'winter-games.reuters.com' :  {'enabled':true, 'tier2':false},
    'live.jp.reuters.com' :  {'enabled':true, 'tier2':true}, 
    '10.90.23.211' :  {'enabled':true, 'tier2':true},  
    '10.90.22.142' :  {'enabled':true, 'tier2':false},
    '10.90.43.101' :  {'enabled':true, 'tier2':false, 'rubicon': true},
    '10.90.43.102' :  {'enabled':true, 'tier2':false},
    '10.90.22.173' :  {'enabled':true, 'tier2':false},
    '10.90.22.174' :  {'enabled':true, 'tier2':false},
    '10.90.22.116' :  {'enabled':true, 'tier2':true},
    '10.90.22.118' :  {'enabled':true, 'tier2':true},
    '10.90.22.119' :  {'enabled':true, 'tier2':true},
    '10.90.22.120' :  {'enabled':true, 'tier2':true},
    '10.90.22.121' :  {'enabled':true, 'tier2':true},
    '10.90.22.122' :  {'enabled':true, 'tier2':true},
    '10.90.22.123' :  {'enabled':true, 'tier2':true},
    '10.90.22.124' :  {'enabled':true, 'tier2':true},
    '10.90.22.125' :  {'enabled':true, 'tier2':true},
    '10.90.22.126' :  {'enabled':true, 'tier2':true},
    '10.90.22.179' :  {'enabled':true, 'tier2':true},
    '10.90.22.175' :  {'enabled':true, 'tier2':true},
    '10.90.43.115' :  {'enabled':true, 'tier2':true},
    '10.90.43.117' :  {'enabled':true, 'tier2':true},
    '10.90.0.13'   :  {'enabled':true, 'tier2':false},
    'betacn.reuters.com' : {'enabled':true, 'tier2':false},
    '10.90.43.107' :  {'enabled':true, 'tier2':true},
    '10.90.22.166' :  {'enabled':true, 'tier2':false},
    '10.90.22.167' :  {'enabled':true, 'tier2':false},
    '10.90.22.141' :  {'enabled':true, 'tier2':false},
    '10.90.22.206': {'enabled':true, 'tier2':false},
    'betajp.reuters.com' : {'enabled':true, 'tier2':false},
    'funds.us.reuters.com' : {'enabled':true, 'tier2':false},
    'funds.uk.reuters.com' : {'enabled':true, 'tier2':false},
    'funds.in.reuters.com' : {'enabled':true, 'tier2':false},
    'portfolio.us.reuters.com' : {'enabled':true, 'tier2':false},
    'portfolio.uk.reuters.com' : {'enabled':true, 'tier2':false},
    'portfolio.in.reuters.com' : {'enabled':true, 'tier2':false},
    'alerts.us.reuters.com' : {'enabled':true, 'tier2':false},
    'alerts.uk.reuters.com' : {'enabled':true, 'tier2':false},
    'alerts.in.reuters.com' : {'enabled':true, 'tier2':false},
    'stockscreener.us.reuters.com' : {'enabled':true, 'tier2':false},
    'stockscreener.uk.reuters.com' : {'enabled':true, 'tier2':false},
    'stockscreener.in.reuters.com' : {'enabled':true, 'tier2':false},
 'betade.reuters.com' : {'enabled':true, 'tier2':false},
 '10.90.22.207' :  {'enabled':true, 'tier2':false},
'10.90.23.207':  {'enabled':true, 'tier2':false},
  '10.35.60.43' :  {'enabled':true, 'tier2':true},
  '10.35.60.44' :  {'enabled':true, 'tier2':true},
  '10.35.60.45' :  {'enabled':true, 'tier2':true},
  '10.35.60.50' :  {'enabled':true, 'tier2':true},
  '10.35.60.42' :  {'enabled':true, 'tier2':true},
  '10.35.60.19' :  {'enabled':true, 'tier2':true},
  'live.special.reuters.com' :  {'enabled':true, 'tier2':false}

};

TR3.data.DFPEnabled = !!TR3.data.sites[window.location.hostname]['enabled']  && TR3.data.GlobalAdsAllowed;

TR3.log = function(msgs) {
    TR3.logs.push([new Date()].concat(Array.prototype.slice.call(arguments)));
    if (TR3.logEnabled === 1) {
        return window.console && console.log &&
            Function.apply.call(console.log, console, arguments);
    }
};

TR3.checkHosts = function(hosts) {
    for (var i = hosts.length - 1; i >= 0; i--) {
        if (window.location.hostname.indexOf(hosts[i]) >= 0) {
            return true;
        }
    }
    return false;};

TR3.getURLQueryParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

TR3.extractDartZone = function() {
    var m = document.getElementsByTagName('meta');
    for (i=0; i<m.length; i++) {
        if(m[i].name == "DCSext.DartZone"){
            return m[i].content;
        }
    }
    return "undefined";
};

TR3.writeScript = function(url) {
    document.write('<scr'+'ipt type="text/javascript" src="' + url + '"></scr'+'ipt>');
};

TR3.addEvent = function(name) {
    TR3.log("event fired: " + name);
    TR3.tagEvents[name.toLowerCase()] = 1;
};

TR3.checkHosts = function(hosts) {
    for (var i = hosts.length - 1; i >= 0; i--) {
        if (window.location.hostname.indexOf(hosts[i]) >= 0) {
            return true;
        }
    }
    return false;};


(function() {
      TR3.data.contentType = "landing";
      var parts = window.location.pathname.split("/");
      if (parts[1] !== null && parts[1] === "article") {
        TR3.data.contentType = "articles";
    }

})();

var adSymbol = TR3.getURLQueryParameterByName("symbol");
var adTest = TR3.getURLQueryParameterByName("adstest");
var adParams ="";
var adParams2 ="";

if (TR3.data.admantx !=="" && !!TR3.data.admantx){
	adParams += "admant=" + TR3.data.admantx+";";
	adParams2 += "admant=" + TR3.data.admantx+";";
}
if(typeof(adTest)!='undefined'){
	adParams += "adstest=" + adTest +";";
	adParams2 += "adstest=" + adTest +";";
}

if(typeof(adSymbol)!='undefined'){
	adParams += "symbol=" + adSymbol;
	adParams2 += "symbol=" + adSymbol;
}
admantx_callback  = function (data) {
    TR3.data.admantx = "";
    if (data && data.admants && data.status == "OK") {
        TR3.log("admantx_callback :" + data.status);
        for (var i = 0; i < data.admants.length; i++) {
            if (i>0) TR3.data.admantx += ",";
            TR3.data.admantx += data.admants[i];
        } 
        TR3.log("admantx_callback TR3.data.admantx:" + TR3.data.admantx);
    }
};

var flag = !!(TR3.checkHosts(["www.reuters.com", "uk.reuters.com", "jp.reuters.com"])&& (!!TR3.data.contentType));

if (TR3.checkHosts(["www.reuters.com", "uk.reuters.com", "jp.reuters.com"])&& (!!TR3.data.contentType)){ 
     if ( TR3.checkHosts(["www.reuters.com"]) ){
       var adxsvcReq = '//async01.admantx.com/admantx/service?request=' + escape('{"key":"234330834c41105ad5ed794fa036e085b40225c44f9228bb9e2692f427917605", "decorator":"template.reuters", "filter":["default"], "method":"descriptor", "mode":"async", "type":"URL", "body":"' + encodeURIComponent(document.location.href) + '"}');   
}
else{
      var adxsvcReq = '//async01.admantx.com/admantx/service?request=' + escape('{"key":"234330834c41105ad5ed794fa036e085b40225c44f9228bb9e2692f427917605", "decorator":"template.reuters", "filter":["default"], "method":"descriptor", "mode":"async", "type":"URL", "body":"' + encodeURIComponent(document.location.href) + '"}');
}

    var adxsvcSE = document.createElement('script');
    adxsvcSE.id = "adxsvcSE_2";
    adxsvcSE.type = 'text/javascript';
    adxsvcSE.async = true;
    adxsvcSE.src = adxsvcReq;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(adxsvcSE, s);
}// Rubicon
var rubicontag = rubicontag || {};
    rubicontag.cmd = rubicontag.cmd || [];

// GPT Begin + Media.Net wrapper
var gptadslots=[];
var googletag = googletag || {}; 
googletag.cmd = googletag.cmd || []; 
(function (){
        window.advBidxc = window.advBidxc || {}; 
        window.advBidxc.renderAd = function (){}; 
        window.advBidxc.startTime = new Date().getTime(); 
        window.advBidxc.timeout = 300; 
        window.advBidxc.version = 3.3; 
        window.advBidxc.customerId = '8CUF1VN4G'; 
 
        function loadScript(tagSrc) { 
              if (tagSrc.substr(0, 4) !== 'http') {
                       var isSSL = 'https:' == document.location.protocol; 
                      tagSrc = (isSSL ? 'https:' : 'http:') + tagSrc; 
                } 
                var scriptTag = document.createElement('script'), placeTag = document.getElementsByTagName("script")[0];
                scriptTag.type = 'text/javascript';
                scriptTag.async = true; 
                scriptTag.src = tagSrc; 
                placeTag.parentNode.insertBefore(scriptTag, placeTag); 
            } 

            function loadGPT(){ 
                      if(!window.advBidxc.isAdServerLoaded){ 
                                 loadScript('//www.googletagservices.com/tag/js/gpt.js'); 
                                 window.advBidxc.isAdServerLoaded = true; 
                       } 
               } 
 
               window.advBidxc.loadGPT = loadGPT; 
               setTimeout(window.advBidxc.loadGPT, window.advBidxc.timeout);// Timeout in case of loading error      
                loadScript('//contextual.media.net/bidexchange.js?cid=' + window.advBidxc.customerId + '&version=' + window.advBidxc.version); // please do not put any cache-buster 
})();

// function to gather ad variables and define ad slot
displayAd = function(pDivId, pSite, pSize, pTarget) {
     
	 if (TR3.data.GlobalAdsAllowed){
       	pDivId = pDivId.trim();
        var dzn = pSite.split(";");
		
		//--> Admantx Begin
		pTarget+=";admant=" + TR3.data.admantx;
        //--> Admantx End    

           //--> Lotame Begin 
 		pTarget+=";lpid=" + lotamePid; 
               //dataLayer.push({
               //     'analyticsAttributes.lotamePID': lotamePid
               //});
     
		//--> Lotame End 



        //--> Add template variable to ad call Begin
                if (dzn[0] == 'us.reuters/home'){ pTarget+=";template=home"; } 
		else if (dzn[0].indexOf("article") > -1){ 
                            if (dzn[0].indexOf("article_archive") == -1){
                                        pTarget+=";template=article"; }
                 }
		//--> Add template variable to ad call Begin

		//--> AdBlock Plus Begin. Determine if ABP present, update dart zones, render labels	
		if(abp){
			TR3.log('abp true');
			var label= "<div class='adv_header'>ADVERTISEMENT</div>";
			var style = "<style>.adv_header {color: #999;font-family: arial,helvetics,sans-serif;font-size: 9px;padding-bottom:2px;text-align:center;}</style>";
			var secondary = pTarget;
			
			if (dzn[0].indexOf("us.reuters") > -1){
				if (dzn[0] == 'us.reuters/home'){
					pSite = 'us.reuters/adblock/homepage';
				}	
				else if (dzn[0].indexOf("article") > -1){
					pSite = 'us.reuters/adblock/article';
				}
				else if (dzn[0].indexOf("bizfinance/money") > -1){
					pSite = 'us.reuters/adblock/money';
				}
				else{
					pSite = 'us.reuters/adblock/general';
				}
			}
				
			else if (dzn[0].indexOf("uk.reuters") > -1){
				if (dzn[0] == 'uk.reuters/home'){
					pSite = 'uk.reuters/adblock/homepage';
				}
				else if (dzn[0].indexOf("article") > -1){
					pSite = 'uk.reuters/adblock/article';
				}
				else if (dzn[0].indexOf("bizfinance/money") > -1){
					pSite = 'uk.reuters/adblock/money';
				}
				else{
					pSite = 'uk.reuters/adblock/general';
				}	
			}
				
			else if (dzn[0].indexOf("in.reuters") > -1){
				if (dzn[0] == 'in.reuters/home'){
					pSite = 'in.reuters/adblock/homepage';
				}
				else if (dzn[0].indexOf("article") > -1){
					pSite = 'in.reuters/adblock/article';
				}
				else if (dzn[0].indexOf("bizfinance/money") > -1){
					pSite = 'in.reuters/adblock/money';
				}
				else{
					pSite = 'in.reuters/adblock/general';
				}	
			}

            else if (dzn[0].indexOf("reuters.de") > -1){
				if (dzn[0] == 'reuters.de/home'){
					pSite = 'reuters.de/adblock/homepage';
				}
				else if (dzn[0].indexOf("article") > -1){
					pSite = 'reuters.de/adblock/article';
				}
				else if (dzn[0].indexOf("bizfinance/money") > -1){
					pSite = 'reuters.de/adblock/money';
				}
				else{
					pSite = 'reuters.de/adblock/general';
				}	
			}
		}
		//--> AdBlock Plus End 
			
		//--> Adslot declaration Begin
        if (!!pDivId){
            googletag.cmd.push(function() {
                        
            //define slot

        if(pDivId=='div_gpt_intro'){
            gptadslots[pDivId] = googletag.defineOutOfPageSlot("/4735792/" + pSite, pDivId).addService(googletag.pubads());
         }
        else{
            gptadslots[pDivId] = googletag.defineSlot("/4735792/" + pSite, pSize, pDivId).addService(googletag.pubads());
		}


 
			//add the targetting
            if (!!pTarget) {
              	var t = pTarget.split(";");
                for (var k = 0; k<t.length; k++)
                 	if (t[k].indexOf("=") > 0){
                        	gptadslots[pDivId].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                    }
                    else{
                       console.error("Targeting string index of = "+ pTarget + " in Error for " + pDivId);
					}
                 } 
				 else console.error("Targeting string not target "+ pTarget + " in Error." + pDivId);
			});
		}
		//--> Adslot declaration End

        //--> Native Ad Setup Begin
        if(pDivId=='div_gpt_bi_content_landing'){
           	$('#div_gpt_bi_content_landing').insertAfter($('#moreSectionNews').find('.feature')[2]);
      	}

        if(pDivId=='div_gpt_bi_video'){
            $('#div_gpt_bi_video').insertAfter($('#moreVideos').find('.feature')[3]);
        }

        if(pDivId=='div_gpt_bi_feature'){
         
  setTimeout(function(){
             
                  	 $('#div_gpt_bi_feature').css('position','absolute');
                         $('#div_gpt_bi_feature').css('z-index','9');
                         var lt = $('.featured-module.left').last().offset();
                         var rt =  $('#div_gpt_bi_feature').offset();
                         var newt = lt.top-rt.top;
                          $('#div_gpt_bi_feature').css('margin-top',newt);
                          $('#div_gpt_bi_feature').css('right','334px');
                          var newh = $('.featured-module.left').last().height();
                           $('.featured-module.right').last().css('height',newh+'px');
                          $('.featured-module.right').last().css('background','#f5f5f5');

           
            }, 1000);
          
        }

        if(pDivId=='div_gpt_bi_video_landing'){
           	$('#moreVideoStrip .columnRight').hide();
            $('#div_gpt_bi_video_landing').insertAfter($('#moreVideoStrip .columnCenter'));
            $('#div_gpt_bi_video_landing').addClass('columnRight');
                 
            setTimeout(function(){
              	if($("#div_gpt_bi_video_landing").css('display') == 'none') { 
                  	$('#div_gpt_bi_video_landing').removeClass('columnRight');                      
                    $('#moreVideoStrip .columnRight').show();
				}
            }, 3000);
                 
 		}

  if(pDivId=='sponsored_content_gpt'){
           	$('#ad-replacement-video').html('')
                 $('#ad-replacement-video').append($('#sponsored_content_gpt'));
    }


		
		//--> Native Ad Setup End 
		
        googletag.cmd.push(function() { googletag.display(pDivId); });
			
	    console.log("Display Ad via GPT: Site:" + pSite + " Target:" + pTarget + " Div Slot:" + pDivId );   
     }            
};

displayAd_sync = function( pSite, pTarget) {
      if (TR3.data.GlobalAdsAllowed){
              
           //--> Admantx Begin
			pTarget+=";admant=" + TR3.data.admantx;
        	//--> Admantx End    

                 //--> Lotame Begin 
 		pTarget+=";lpid=" + lotamePid; 
               // dataLayer.push({
               //     'analyticsAttributes.lotamePID': lotamePid
               // });
     
		//--> Lotame End 
			


			var dzn = pSite.split(";");
			
			//--> Add template variable to ad call Begin
			if (dzn[0] == 'us.reuters/home'){ pTarget+=";template=home"; } 
		else if (dzn[0].indexOf("article") > -1){ 
                            if (dzn[0].indexOf("article_archive") == -1){
                                        pTarget+=";template=article"; }
                 }
			//--> Add template variable to ad call Begin
	
			//--> AdBlock Plus Begin
			if(abp){
				TR3.log('abp true');
				var label= "<div class='adv_header'>ADVERTISEMENT</div>";
				var style = "<style>.adv_header {color: #999;font-family: arial,helvetics,sans-serif;font-size: 9px;padding-bottom:2px;text-align:center;}</style>";
				
				if (dzn[0].indexOf("us.reuters") > -1){
				
					if (dzn[0] == 'us.reuters/home'){
						pSite = 'us.reuters/adblock/homepage';
						 $("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						  
						setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label);
							$("#div_gpt_lb_center").before(label);
				            $("#div_gpt_lb_low").before(label); }, 3000);
                    }
					else if (dzn[0].indexOf("article") > -1){
						pSite = 'us.reuters/adblock/article';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}
					else if (dzn[0].indexOf("bizfinance/money") > -1){
						pSite = 'us.reuters/adblock/money';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}
					else{
						pSite = 'us.reuters/adblock/general';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}	
				}
				else if (dzn[0].indexOf("uk.reuters") > -1){
				
					if (dzn[0] == 'uk.reuters/home'){
						pSite = 'uk.reuters/adblock/homepage';
						 $("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}
					else if (dzn[0].indexOf("article") > -1){
						pSite = 'uk.reuters/adblock/article';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label);
							$("#div_gpt_lb_center").before(label);
				         $("#div_gpt_lb_low").before(label); }, 3000);
					}
					else if (dzn[0].indexOf("bizfinance/money") > -1){
						pSite = 'uk.reuters/adblock/money';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}
					else{
						pSite = 'uk.reuters/adblock/general';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}	
				}
				else if (dzn[0].indexOf("in.reuters") > -1){
				
					if (dzn[0] == 'in.reuters/home'){
						pSite = 'in.reuters/adblock/homepage';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 
						  setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label);
							$("#div_gpt_lb_center").before(label);
				         $("#div_gpt_lb_low").before(label); }, 3000);
					}
					else if (dzn[0].indexOf("article") > -1){
						pSite = 'in.reuters/adblock/article';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);	
					}
					else if (dzn[0].indexOf("bizfinance/money") > -1){
						pSite = 'in.reuters/adblock/money';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}
					else{
						pSite = 'in.reuters/adblock/general';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}	
				}
                else if (dzn[0].indexOf("reuters.de") > -1){
				
					if (dzn[0] == 'reuters.de/home'){
						pSite = 'reuters.de/adblock/homepage';
						setTimeout(function(){ 
						  	$("#div_gpt_lb").before(label);
						 	$("#div_gpt_lb").before(style);
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label);
							$("#div_gpt_lb_center").before(label);
				         	$("#div_gpt_lb_low").before(label); }, 3000);
					}
					else if (dzn[0].indexOf("article") > -1){
						pSite = 'reuters.de/adblock/article';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);	
					}
					else if (dzn[0].indexOf("bizfinance/money") > -1){
						pSite = 'reuters.de/adblock/money';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}
					else{
						pSite = 'reuters.de/adblock/general';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 3000);
					}	
				}

			}
			//--> AdBlock Plus End

            googletag.cmd.push(function() {

            //--> Adslot 1 declaration
			gptadslots[1]= googletag.defineSlot('/4735792/'+pSite, [[728, 90],[970,250],[970,90],[970,66], [940,230],[1,1]],'div_gpt_lb').setTargeting('type',['leaderboard']).addService(googletag.pubads());

            console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboard;" + pTarget + " Div Slot: div_gpt_lb" + " Sync" );  
  
			//--> Adslot 2 declaration
			gptadslots[2]= googletag.defineSlot('/4735792/'+pSite,[[300, 250],[300,600],[300,1050],[160,600]],'div_gpt_mpu').setTargeting('type',['mpu']).addService(googletag.pubads());

            console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu;" + pTarget + " Div Slot: div_gpt_mpu" +  " Sync");  

	//--> Adslot 3 declaration
			gptadslots[3]= googletag.defineSlot('/4735792/'+pSite, [[300, 250],[1,1],[300,600]],'div_gpt_mpulow').setTargeting('type',['mpulow']).addService(googletag.pubads());

            console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpulow;" + pTarget + " Div Slot: div_gpt_mpulow" +  " Sync");  

                       if(TR3.extractDartZone().indexOf("reuters/home") > -1 || TR3.extractDartZone().indexOf("reuters.de/home") > -1){
                          //--> Adslot 4 declaration 
			gptadslots[4]= googletag.defineSlot('/4735792/'+pSite, [[728, 90],[970,250],[970,90],[970,66], [940,230],[1,1]] ,'div_gpt_lb_center').setTargeting('type',['leaderboardcenter']).addService(googletag.pubads()); 
			console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboardcenter;" + pTarget + " Div Slot: div_gpt_lb_center" + " Sync " ); 

                           //--> Adslot 5 declaration 
			gptadslots[5]= googletag.defineSlot('/4735792/'+pSite, [[728, 90],[970,250],[970,90],[970,66], [940,230],[1,1]] ,'div_gpt_lb_low').setTargeting('type',['leaderboardlow']).addService(googletag.pubads()); 
			console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboardlow;" + pTarget + " Div Slot: div_gpt_lb_low" + " Sync" ); 
                        }

         
			//add the targetting
            if (!!pTarget) {
               var t = pTarget.split(";");
                  	for (var k = 0; k<t.length; k++){
                         	if (t[k].indexOf("=") > 0){
                            	gptadslots[1].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                                  gptadslots[2].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                                 gptadslots[3].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                                       
                                         if(TR3.extractDartZone().indexOf("reuters/home") > -1 || TR3.extractDartZone().indexOf("reuters.de/home") > -1){
                                                 gptadslots[4].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                                                 gptadslots[5].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                                          }
                      		}
                            else{
                              	console.error("Targeting string index of = "+ pTarget ); 
							}
					}
       		} 

            googletag.pubads().enableSingleRequest();
			googletag.pubads().enableAsyncRendering();
            googletag.pubads().collapseEmptyDivs(true);
			googletag.enableServices();
			});
			
              
            googletag.cmd.push(function() { googletag.display('div_gpt_lb'); });	
            googletag.cmd.push(function() { googletag.display('div_gpt_mpu'); });
           googletag.cmd.push(function() { googletag.display('div_gpt_mpulow'); }); 
        
		
		   if(TR3.extractDartZone().indexOf("reuters/home") > -1 || TR3.extractDartZone().indexOf("reuters.de/home") > -1){
               googletag.cmd.push(function() { googletag.display('div_gpt_lb_center'); });
             googletag.cmd.push(function() { googletag.display('div_gpt_lb_low'); });	
          }
             
}	}; 

if(window.console){
console.info("GPT.js LOADED");
}// Fastlane function load LB, MPU, MPULow 

displayAd_sync_fastlane = function( pSite, pTarget) { 
	if (TR3.data.GlobalAdsAllowed){ 

	setTimeout(function(){ 

	//--> Admantx Begin 
		pTarget+=";admant=" + TR3.data.admantx; 
		//--> Admantx End 

               //--> Lotame Begin 
		pTarget+=";lpid=" + lotamePid; 
                  dataLayer.push({
                   'analyticsAttributes.lotamePID': lotamePid
                });
             
		//--> Lotame End 

  

		var dzn = pSite.split(";"); 
		//--> Add template variable to ad call Begin 
		
		if (dzn[0] == 'us.reuters/home'){ pTarget+=";template=home"; } 
		else if (dzn[0].indexOf("article") > -1){ 
                            if (dzn[0].indexOf("article_archive") == -1){
                                        pTarget+=";template=article"; }
                 }
		
		//--> Add template variable to ad call End
		
		//--> AdBlock Plus Begin
			if(abp){
				TR3.log('abp true');
				var label= "<div class='adv_header'>ADVERTISEMENT</div>";
				var style = "<style>.adv_header {color: #999;font-family: arial,helvetics,sans-serif;font-size: 9px;padding-bottom:2px;text-align:center;}</style>";
				
				if (dzn[0].indexOf("us.reuters") > -1){
				
					if (dzn[0] == 'us.reuters/home'){
						pSite = 'us.reuters/adblock/homepage';
						 $("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label);
							$("#div_gpt_lb_center").before(label);
				         $("#div_gpt_lb_low").before(label); }, 3000);
                    }
					else if (dzn[0].indexOf("article") > -1){
						pSite = 'us.reuters/adblock/article';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}
					else if (dzn[0].indexOf("bizfinance/money") > -1){
						pSite = 'us.reuters/adblock/money';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}
					else{
						pSite = 'us.reuters/adblock/general';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}	
				}
				else if (dzn[0].indexOf("uk.reuters") > -1){
				
					if (dzn[0] == 'uk.reuters/home'){
						pSite = 'uk.reuters/adblock/homepage';
						 $("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						  setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}
					else if (dzn[0].indexOf("article") > -1){
						pSite = 'uk.reuters/adblock/article';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);	
					}
					else if (dzn[0].indexOf("bizfinance/money") > -1){
						pSite = 'uk.reuters/adblock/money';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}
					else{
						pSite = 'uk.reuters/adblock/general';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}	
				}
				else if (dzn[0].indexOf("in.reuters") > -1){
				
					if (dzn[0] == 'in.reuters/home'){
						pSite = 'in.reuters/adblock/homepage';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 
						setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}
					else if (dzn[0].indexOf("article") > -1){
						pSite = 'in.reuters/adblock/article';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);	
					}
					else if (dzn[0].indexOf("bizfinance/money") > -1){
						pSite = 'in.reuters/adblock/money';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}
					else{
						pSite = 'in.reuters/adblock/general';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}	
				}
                else if (dzn[0].indexOf("reuters.de") > -1){
				
					if (dzn[0] == 'reuters.de/home'){
						pSite = 'reuters.de/adblock/homepage';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}
					else if (dzn[0].indexOf("article") > -1){
						pSite = 'reuters.de/adblock/article';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);	
					}
					else if (dzn[0].indexOf("bizfinance/money") > -1){
						pSite = 'reuters.de/adblock/money';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}
					else{
						pSite = 'reuters.de/adblock/general';
						$("#div_gpt_lb").before(label);
						 $("#div_gpt_lb").before(style);
						 setTimeout(function(){ 
						 	$("#div_gpt_mpulow").before(label);
						 	$("#div_gpt_mpu").before(label); }, 2000);
					}	
				}

			}
			//--> AdBlock Plus End 

	var gptrun = function(){		
		googletag.cmd.push(function() { 
			//--> Adslot 1 declaration 
			gptadslots[0]= googletag.defineSlot('/4735792/'+pSite, [[728, 90],[970,250],[970,90],[970,66], [940,230],[1,1]] ,'div_gpt_lb').setTargeting('type',['leaderboard']).addService(googletag.pubads()); 
			console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboard;" + pTarget + " Div Slot: div_gpt_lb" + " Sync FL" ); 
			
 if(TR3.extractDartZone().indexOf("jp.reuters") > -1){
//--> Adslot 2 declaration 
			gptadslots[1]= googletag.defineSlot('/4735792/'+pSite, [[300, 250],[300,600],[300,1050]],'div_gpt_mpu').setTargeting('type',['mpu']).addService(googletag.pubads()); 
			console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu;" + pTarget + " Div Slot: div_gpt_mpu" + " Sync FL"); 

}
else{
//--> Adslot 2 declaration 
			gptadslots[1]= googletag.defineSlot('/4735792/'+pSite, [[300, 250],[300,600],[300,1050],[160,600]],'div_gpt_mpu').setTargeting('type',['mpu']).addService(googletag.pubads()); 
			console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu;" + pTarget + " Div Slot: div_gpt_mpu" + " Sync FL"); 

}
			//--> Adslot 3 declaration 
			gptadslots[2]= googletag.defineSlot('/4735792/'+pSite, [[300, 250],[1,1],[300,600]],'div_gpt_mpulow').setTargeting('type',['mpulow']).addService(googletag.pubads()); 
			console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpulow;" + pTarget + " Div Slot: div_gpt_mpulow" + " Sync FL");
                         if((TR3.extractDartZone()=="us.reuters/home")||(TR3.extractDartZone()=="uk.reuters/home")||(TR3.extractDartZone()=="jp.reuters/home")){
                          //--> Adslot 4 declaration 
			gptadslots[3]= googletag.defineSlot('/4735792/'+pSite, [[728, 90],[970,250],[970,90],[970,66], [940,230],[1,1]] ,'div_gpt_lb_center').setTargeting('type',['leaderboardcenter']).addService(googletag.pubads()); 
			console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboardcenter;" + pTarget + " Div Slot: div_gpt_lb_center" + " Sync FL" ); 

                           //--> Adslot 5 declaration 
			gptadslots[4]= googletag.defineSlot('/4735792/'+pSite, [[728, 90],[970,250],[970,90],[970,66], [940,230],[1,1]] ,'div_gpt_lb_low').setTargeting('type',['leaderboardlow']).addService(googletag.pubads()); 
			console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboardlow;" + pTarget + " Div Slot: div_gpt_lb_low" + " Sync FL" ); 
                         }

   if((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone()!="jp.reuters/home")){
                          //--> Adslot 5 declaration 
			gptadslots[5]= googletag.defineSlot('/4735792/'+pSite, [[300, 250],[1,1],[300,600]],'div_gpt_mpu2').setTargeting('type',['mpu2']).addService(googletag.pubads()); 
			console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu2;" + pTarget + " Div Slot: div_gpt_mpu2" + " Sync FL" ); 

}
   
			for (var i=0; i<gptadslots.length; i++) 
			{ 
				if(rubicontag && rubicontag.setTargetingForGPTSlot)
					{ 
						console.log("rubicon targeting set for slot " + i); 
						rubicontag.setTargetingForGPTSlot(gptadslots[i]); 
					} 
			} 
		

			//add the targetting 
			if (!!pTarget) 
			{ 
				var t = pTarget.split(";"); 
				for (var k = 0; k<t.length; k++){ 
					if (t[k].indexOf("=") > 0){ 
						gptadslots[0].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1)); 
						gptadslots[1].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1)); 
                                                gptadslots[2].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1)); 
if((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone()!="jp.reuters/home")){

           gptadslots[5].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1)); 
}  
                                                if((TR3.extractDartZone()=="us.reuters/home")||(TR3.extractDartZone()=="uk.reuters/home")||(TR3.extractDartZone()=="jp.reuters/home")){
                                                     gptadslots[3].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1)); 
                                                     gptadslots[4].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));
                                                } 
					} 
					else{ 
						console.error("Targeting string index of = "+ pTarget ); 
					} 
				} 
			} 

  
                     			
			googletag.pubads().enableSingleRequest(); 
			googletag.pubads().enableAsyncRendering(); 
			googletag.pubads().collapseEmptyDivs(true); 
			googletag.enableServices(); 
		}); 

              googletag.cmd.push(function() { googletag.display('div_gpt_lb'); }); 
	     googletag.cmd.push(function() { googletag.display('div_gpt_mpu'); }); 
	      googletag.cmd.push(function() { googletag.display('div_gpt_mpulow'); }); 
if((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone()!="jp.reuters/home")){
   googletag.cmd.push(function() { googletag.display('div_gpt_mpu2'); }); 
}  
               
            if((TR3.extractDartZone()=="us.reuters/home")||(TR3.extractDartZone()=="uk.reuters/home")||(TR3.extractDartZone()=="jp.reuters/home")){
                  googletag.cmd.push(function() { googletag.display('div_gpt_lb_center'); }); 
                   googletag.cmd.push(function() { googletag.display('div_gpt_lb_low'); }); 
            }
	}; 

          // end gptrun
		
		rubicontag.cmd.push(function() 
			{ 
				rubicontag.defineSlot("/4735792/" + pSite, [[728, 90],[970,250],[970,90],[1,1]], "div_gpt_lb").setPosition('atf').addFPI('type','leaderboard'); 
				rubicontag.defineSlot("/4735792/" + pSite, [[300, 250],[300,600],[300,1050],[160,600]], "div_gpt_mpu").setPosition('atf').addFPI('type','mpu'); 
				rubicontag.defineSlot("/4735792/" + pSite, [[300, 250],[300,600],[1,1]], "div_gpt_mpulow").setPosition('btf').addFPI('type','mpulow'); 

if((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone()!="jp.reuters/home")){
   rubicontag.defineSlot("/4735792/" + pSite, [[300, 250],[300,600],[1,1]], "div_gpt_mpu2").setPosition('btf').addFPI('type','mpu2'); 
}  
                                
                                if((TR3.extractDartZone()=="us.reuters/home")||(TR3.extractDartZone()=="uk.reuters/home")||(TR3.extractDartZone()=="jp.reuters/home")){
                                       rubicontag.defineSlot("/4735792/" + pSite, [[728, 90],[970,250],[970,90],[1,1]], "div_gpt_lb_center").setPosition('btf').addFPI('type','leaderboardcenter'); 
                                      rubicontag.defineSlot("/4735792/" + pSite, [[728, 90],[970,250],[970,90],[1,1]], "div_gpt_lb_low").setPosition('btf').addFPI('type','leaderboardlow'); 
                                  }

				rubicontag.run(gptrun); 
                                  
		});

 }, 500);
		
	}	
};

