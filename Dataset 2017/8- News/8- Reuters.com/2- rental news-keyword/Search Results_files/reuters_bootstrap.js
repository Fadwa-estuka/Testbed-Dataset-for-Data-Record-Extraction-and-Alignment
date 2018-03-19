// Begin Setup

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

// End Setup


// Rubicon Begin
//var rubicontag = rubicontag || {};
//    rubicontag.cmd = rubicontag.cmd || [];
// End Rubicon Begin

// GPT Begin
//var gptadslots=[];
//var googletag = googletag || {};
//	googletag.cmd = googletag.cmd || [];
var gptadslotsN=[];
// End GPT Begin

// GPT Initialize
//(function() {
//var gads = document.createElement("script");
//gads.async = true;
//gads.type = "text/javascript";
//var useSSL = "https:" == document.location.protocol;
//gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
//var node =document.getElementsByTagName("script")[0];
//node.parentNode.insertBefore(gads, node);
//})();
// End GPT Initialize


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



// Admantx begin

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
}

// Admantx end



// Rev Science  begin

var rsc_src= 'http://js.revsci.net/gateway/gw.js?csid=I07714&auto=t';

var rsc = document.createElement('script');
    rsc.id = "rsc";
    rsc.type = 'text/javascript';
    rsc.async = true;
    rsc.src = rsc_src;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(rsc, s);


  TR3.log("Revenue Science is loaded via bootstrap.");

var run_revsci = function() {
  I07714.DM_cat(TR3.data.adZone + " > " + TR3.data.dfpZone);
  I07714.DM_tag();

}

// Rev Science end



// Key Value Functions begin

//Admantx Begin
function returnAdmantx(){
     if (TR3.data.admantx){
		return ";admant=" + TR3.data.admantx ;
    }
}

//Admantx End    

// Lotame Begin 
function returnLotame(){
     if (lotamePid){
		return ";lpid=" + lotamePid;
    }
}
 
// Lotame End 


// Key Value Functions end


var arrayAds = [];

function gatherAd(pDivId, pSize, pSite, headerBid, type){
  arrayAds.push({
        'pDivId': pDivId,
        'pSite': pSite,
        'pSize' : pSize,
        'phb' : headerBid,
        'pType' : type
    });
      
}
       
//  Gather Page Ads end



var adParams3 ="";

function checkHB(){
			for(var k=0; k<=arrayAds.length; k++){
				if(arrayAds[k].phb=='yes'){
					//console.log('yes');
          			        return 'yes';
				}
                               else{return 'no';}
			}
		}

function setupAd(site, size, divId, ptype){
	setTimeout(function(){ 
	googletag.cmd.push(function() {
			//define slot
			gptadslotsN[divId] = googletag.defineSlot("/4735792/" + site, size, divId).setTargeting('type',[ptype]).addService(googletag.pubads());
						
			//add the targetting
			if (!!adParams3) {
				var t = adParams3.split(";");
								
				for (var k = 0; k<t.length; k++)
				{
					if (t[k].indexOf("=") > 0){
						gptadslotsN[divId].setTargeting(t[k].substr(0,t[k].indexOf("=")), t[k].substr(t[k].indexOf("=")+1));										
					}
					else{
						console.error("Targeting string index of = "+ adParams3 + " in Error for " + arrayAds[b].pDivId);
					}					
				}						
			}
						
						//--> Native Ad Setup Begin
						if(divId=='div_gpt_bi_content_landing'){
							$('#div_gpt_bi_content_landing').insertAfter($('#moreSectionNews').find('.feature')[2]);
						}
				
						if(divId=='div_gpt_bi_video'){
							$('#div_gpt_bi_video').insertAfter($('#moreVideos').find('.feature')[3]);
						}
				
						if(divId=='div_gpt_bi_feature'){   
                                                        $('#div_gpt_bi_feature').css('visibility','hidden');
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
                                                                                     $('article.story:nth-child(1)').css('max-height','130px');
                                                                                    $('#div_gpt_bi_feature').css('visibility','visible');
							}, 2000);          
						}
				
						if(divId=='div_gpt_bi_video_landing'){
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
				
						if(divId=='sponsored_content_gpt'){
							$('#ad-replacement-video').html('');
							$('#ad-replacement-video').append($('#sponsored_content_gpt'));
						}
				
						//--> Native Ad Setup End
						
						});
                                              if (checkHB() != 'yes'){
						googletag.pubads().enableSingleRequest(); 
						googletag.pubads().enableAsyncRendering(); 
						googletag.pubads().collapseEmptyDivs(true); 
						googletag.enableServices(); 
                                               }

					//display ad
					googletag.cmd.push(function() { 
						googletag.display(divId); 
						console.log("Display Ad via GPT: Site:" + site + " Target: type=" + ptype + ";" + adParams3  + " Div Slot:" + divId + " new_framework" );					
					});				
		}, 1000); 					
}

callAds = function() {

	if (TR3.data.GlobalAdsAllowed){

		var adSymbol = TR3.getURLQueryParameterByName("symbol");
		var adTest = TR3.getURLQueryParameterByName("adstest");
		var dzn = arrayAds[0].pSite.split(";");
		var pSite = arrayAds[0].pSite;

	    // adstest
        if(typeof(adTest)!='undefined'){
	     	adParams3 += "adstest=" + adTest +";";
        }
		
		// symbol
      	if(typeof(adSymbol)!='undefined'){
	     	adParams3 += "symbol=" + adSymbol+";";
		}
		
		// template
        if (dzn[0] == 'us.reuters/home'){ adParams3+="template=home"; } 
		else if (dzn[0].indexOf("article") > -1){ 
        	if (dzn[0].indexOf("article_archive") == -1){
               	adParams3+="template=article"; 
			}
        }
        else {adParams3+="template=other"; }
		
                // article ID / story channel
		 if (dzn[0].indexOf("article") > -1){
			adParams3+=";articleID="+Reuters.info.articleId;
                        adParams3+=";storychannel="+Reuters.info.channel;
		}

		// admantx
		if (TR3.data.admantx){
			adParams3+=returnAdmantx();
		}
		
		// lotame
		if (lotamePid){
			adParams3+=returnLotame();
		}

              // Ad Refresh
		if (Reuters.refresh){
			adParams3+=";prefresh=" + Reuters.refresh.prefresh;
		}
		
		//ad block plus
		if(abp){
			TR3.log('abp true');
			var label= "<div class='adv_header'>ADVERTISEMENT</div>";
			var style = "<style>.adv_header {color: #999;font-family: arial,helvetics,sans-serif;font-size: 9px;padding-bottom:2px;text-align:center;}</style>";
			
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
			
			if (checkHB() == 'yes'){
				setTimeout(function(){ 
						$("#div_gpt_lb").before(label);
						$("#div_gpt_lb").before(style);
						$("#div_gpt_mpulow").before(label);
						$("#div_gpt_mpu").before(label);
						$("#div_gpt_lb_center").before(label);
						$("#div_gpt_lb_low").before(label); }, 3000);
				
			}
			else{
				setTimeout(function(){ 
						for(var n=0; n<arrayAds.length; n++){
							$("#" + arrayAds[b].pDivId).before(label);
						}
					 }, 3000);
				
			}
		}
		
		setTimeout(function(){ 
		// header bidding 
		
		if (checkHB() == 'yes'){
			
				var gptrun = function(){		
					googletag.cmd.push(function() { 
						//--> Adslot 1 declaration 
						gptadslots[0]= googletag.defineSlot('/4735792/'+pSite, [[728, 90],[970,250],[970,90],[970,66], [970,180],[940,230],[1,1]] ,'div_gpt_lb').setTargeting('type',['leaderboard']).addService(googletag.pubads()); 
						console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboard;" + adParams3 + " Div Slot: div_gpt_lb" + " Sync FL new_framework" ); 
					
						if(TR3.extractDartZone().indexOf("jp.reuters") > -1){
							//--> Adslot 2 declaration 
							gptadslots[1]= googletag.defineSlot('/4735792/'+pSite, [[300, 250],[300,600],[300,1050]],'div_gpt_mpu').setTargeting('type',['mpu']).addService(googletag.pubads()); 
							console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu;" + adParams3 + " Div Slot: div_gpt_mpu" + " Sync FL new_framework"); 
						}
						else{
							//--> Adslot 2 declaration 
							gptadslots[1]= googletag.defineSlot('/4735792/'+ arrayAds[0].pSite, [[300, 250],[300,600],[300,1050],[160,600]],'div_gpt_mpu').setTargeting('type',['mpu']).addService(googletag.pubads()); 
							console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu;" + adParams3 + " Div Slot: div_gpt_mpu" + " Sync FL new_framework"); 
						}
						
						//--> Adslot 3 declaration 
						gptadslots[2]= googletag.defineSlot('/4735792/'+pSite, [[300, 250],[1,1],[300,600]],'div_gpt_mpulow').setTargeting('type',['mpulow']).addService(googletag.pubads()); 
						console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpulow;" + adParams3 + " Div Slot: div_gpt_mpulow" + " Sync FL new_framework");
						if((TR3.extractDartZone()=="us.reuters/home")||(TR3.extractDartZone()=="uk.reuters/home")||(TR3.extractDartZone()=="jp.reuters/home")){
							//--> Adslot 4 declaration 
							gptadslots[3]= googletag.defineSlot('/4735792/'+pSite, [[728, 90],[970,250],[970,90],[970,66], [940,230],[1,1]] ,'div_gpt_lb_center').setTargeting('type',['leaderboardcenter']).addService(googletag.pubads()); 
							console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboardcenter;" + adParams3 + " Div Slot: div_gpt_lb_center" + " Sync FL new_framework" ); 
		
								   //--> Adslot 5 declaration 
							gptadslots[4]= googletag.defineSlot('/4735792/'+pSite, [[728, 90],[970,250],[970,90],[970,66], [940,230],[1,1]] ,'div_gpt_lb_low').setTargeting('type',['leaderboardlow']).addService(googletag.pubads()); 
							console.log("Display Ad via GPT: Site:" + pSite + " Target: type=leaderboardlow;" + adParams3 + " Div Slot: div_gpt_lb_low" + " Sync FL new_framework" ); 
							}
		
						if((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone()!="jp.reuters/home")){
							//--> Adslot 5 declaration 
							gptadslots[5]= googletag.defineSlot('/4735792/'+pSite, [[300, 250],[1,1],[300,600]],'div_gpt_mpu2').setTargeting('type',['mpu2']).addService(googletag.pubads()); 
							console.log("Display Ad via GPT: Site:" + pSite + " Target: type=mpu2;" + adParams3 + " Div Slot: div_gpt_mpu2" + " Sync FL new_framework" ); 
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
						if (!!adParams3) 
						{ 
							var t = adParams3.split(";"); 
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
								console.error("Targeting string index of = "+ adParams3 ); 
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
						   
					if((TR3.extractDartZone()=="us.reuters/home")||(TR3.extractDartZone()=="uk.reuters/home")||(TR3.extractDartZone()=="jp.reuters/home"))	
					{
						googletag.cmd.push(function() { googletag.display('div_gpt_lb_center'); }); 
						googletag.cmd.push(function() { googletag.display('div_gpt_lb_low'); }); 
					}				
				}; 
				
				rubicontag.cmd.push(function(){ 
					rubicontag.defineSlot("/4735792/" + pSite, [[728, 90],[970,250],[970,90],[970,180],[1,1]], "div_gpt_lb").setPosition('atf').addFPI('type','leaderboard'); 
					rubicontag.defineSlot("/4735792/" + pSite, [[300, 250],[300,600],[300,1050],[160,600]], "div_gpt_mpu").setPosition('atf').addFPI('type','mpu'); 
					rubicontag.defineSlot("/4735792/" + pSite, [[300, 250],[300,600],[1,1]], "div_gpt_mpulow").setPosition('btf').addFPI('type','mpulow'); 
			
					if((TR3.extractDartZone().indexOf("jp.reuters") > -1) && (TR3.extractDartZone()!="jp.reuters/home")){
					   	rubicontag.defineSlot("/4735792/" + pSite, [[300, 250],[300,600],[1,1]], "div_gpt_mpu2").setPosition('btf').addFPI('type','mpu2'); 
					}  
											
					if((TR3.extractDartZone()==="us.reuters/home")||(TR3.extractDartZone()==="uk.reuters/home")||(TR3.extractDartZone()==="jp.reuters/home"))			
					{
						rubicontag.defineSlot("/4735792/" + pSite, [[728, 90],[970,250],[970,90],[1,1]], "div_gpt_lb_center").setPosition('btf').addFPI('type','leaderboardcenter'); 
						rubicontag.defineSlot("/4735792/" + pSite, [[728, 90],[970,250],[970,90],[1,1]], "div_gpt_lb_low").setPosition('btf').addFPI('type','leaderboardlow'); 
					}
			
					rubicontag.run(gptrun);                        
				});
				
			}
			
		}, 500);
		 
		// end header bidding
		
		// not header bidding
		setTimeout(function(){ 
		for(var b=0; b<arrayAds.length; b++){
				if(arrayAds[b].phb!=='yes'){
					
				setupAd(pSite, arrayAds[b].pSize, arrayAds[b].pDivId, arrayAds[b].pType);
					
				}
			}	
                  }, 600);	
	}	
	
};
