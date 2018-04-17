/****************
AUTHOR: Steve Alliance
DFP: Legacy and GPT, support also ADtech
This is version 5.2.0
Update language support - two way kw and kv
update adding bga in bob :) 

*****************/
var M_TILE = M_TILE || 0;
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

	function MUTAG(){
		this.mseg = [];
		 this.network_id = "3772206";
		 this.pagename = "";
		 this.sitename = "bestbuy";
		 this.language = "en";
		 this.randoms = Math.round(Math.random()*100000000);
		 this.keywords = [];
		 this.channel = ["retail"];
		 this.keyvalues = {
			 };
		 this.thirds = false;
		 this.level = {
			 l1:"",
			 l2:"",
			 l3:"",
			 l4:"",
			 l5:""
			 
			 };
		 this.desktop = function(){
			 return this;
			 };	 
		 this.adtechname = "bestbuy_en";
		 
		 this.backup_id = {"160x600_atf":"1959621","160x600_atf_rt":"1959620","1x1_atf":"1973253","3x1_-":"2133366","3x1_atf":"2264903","600x90_atf_rt":"1959606","728x90_atf":"1959628","902x600_-":"2219552","920x70_atf":"2157455"};
		 this.dmp = false;

		 this.initDFPP = function(){
		 var ua = navigator.userAgent.toLowerCase(); 
         if (ua.indexOf('safari') != -1) { 
         if (ua.indexOf('chrome') > -1) {
            var gads = document.createElement("script");
   			gads.async = true;
   			gads.type = "text/javascript";
   			var useSSL = "https:" == document.location.protocol;
   			gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
   			var node =document.getElementsByTagName("script")[0];
   			node.parentNode.insertBefore(gads, node);// Chrome
          } else {
          if (ua.indexOf('9.1.1') > -1){
          	var gads = document.createElement("script");
   			gads.async = true;
   			gads.type = "text/javascript";
   			var useSSL = "https:" == document.location.protocol;
   			gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
   			var node =document.getElementsByTagName("script")[0];
   			node.parentNode.insertBefore(gads, node); //Latest Version of Safari
               }
          }
       } else {
       		var gads = document.createElement("script");
   			gads.async = true;
   			gads.type = "text/javascript";
   			var useSSL = "https:" == document.location.protocol;
   			gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
   			var node =document.getElementsByTagName("script")[0];
   			node.parentNode.insertBefore(gads, node);
       } 
}
		 this.initDMP = function(){
			 var mlot = document.createElement("script");
   					mlot.async = true;
   					mlot.type = "text/javascript";
   					var useSSL = "https:" == document.location.protocol;
   					mlot.src = (useSSL ? "https:" : "http:") + "//tags.crwdcntrl.net/c//cc.js?ns=_cc";
					mlot.id = "LOTCC_";
   					var node =document.getElementsByTagName("script")[0];
   					node.parentNode.insertBefore(mlot, node);
			 }
		 
		 this.internalKW = function(a){
			 for(var i = 0; i < a.length; i++){
				 this.keywords.push(a[i]);
				 }
			 }
		 this.setLang = function(a){
			 this.language = a;
			 return this;
			 }
		 this.setSection = function(a){
			 this.setPage(a);
			 return this;
			 } 	 
		 this.internalKV = function(a){
			 for(var i in a){
				 this.keyvalues[i] = a[i];
				 }
			 }	 	 
		 this.setPage = function(a,b,c){
			 
		    if(a){
		if(typeof(a) == "string"){
	this.pagename = a;
	this.level.l3 = a;
		}else{
		for(var i = 0; i<a.length;i++){
			this.level["l" + String(3 + i)]= a[i];
			}	
			}
	if(b){
	this.level.l4 = b;
	if(c){
	this.level.l5 = c;  
	}	 
	}
	} 
	return this; 
			 }
		 this.structure=(function(id){
							var _struct ="";
							_struct +=  "" + this.network_id +"/";  
							_struct += (this.level.l1 !="")?this.level.l1:"";
							_struct += (this.level.l2 !="")?"/" + this.level.l2:""; 
							_struct += (this.level.l3 !="")?"/" + this.level.l3:""; 
							_struct += (this.level.l4 !="")?"/" + this.level.l4:""; 
							_struct += (this.level.l5 !="")?"/" + this.level.l5:""; 
							return _struct;
							});	 
		 this.setSite = function(a){
			 this.sitename = a;
			 return this;
			 }
		 this.setLng = function(a){
			 this.language = a;
			 return this;
			 }	 
		 this.getKeywords = function(a){
			 try{
			 for(var i=0;i<a.length;i++){
			 this.keywords.push(a[i]);
			 }}catch(e){}
			 return this;
			 }	
		 this.getKeyValues = function(a){
			 try{
			 for(var i in a){
				this.keyvalues[i] = a[i]; 
				 }
			 }catch(e){}
			 return this;
			 }	
		 this.bob ={
			click_wallpaper:function(o){
				var mediative_one = document;
				mediative_one.onclick = MEDIATIVE_;
				mediative_one.onmouseover = _MEDIATIVE_;
				function MEDIATIVE_(e){
					var b = e?e:event;
					if(!b)return;
					var fb = b.target?b.target:b.srcElement;
					if(fb.tagName =="BODY"){
						window.open(o['click']);
						}
					}
				function _MEDIATIVE_(e){
					var b = e?e:event;
					if(!b)return;
					var fb = b.target?b.target:b.srcElement;
					if(fb.tagName == "BODY"){
						document.body.style.cursor = "pointer";
						}else{
						document.body.style.cursor ="auto";	
							}
					
					}	
				},
			collapse:function(o){
				document.getElementById(o).style.display = "none";
				},
			collapseByClass:function(o){
				var m = document.getElementsByClassName(o)[0];
				m.style.display = "none";
				},
			seeByClass:function(o){
				var m = document.getElementsByClassName(o)[0];
				m.style.display = "block";
				},
			wallpaper:function(f){ 	
					document.body.style.backgroundImage = "url("+f['src']+")";
					document.body.style.backgroundRepeat ="no-repeat";
					document.body.style.backgroundColor = f['bgc'];
					document.body.style.backgroundPosition = "top center";
					document.body.style.backgroundAttachment = f['bga'];
					this.click_wallpaper({click:f['clk']});
					return this;
					},
			bannerRezise:function(o){
				if(o['height'] != undefined){
					document.getElementById(o['div']).style.height = "auto";
				var heights = document.getElementById(o['div']);
				heights.getElementsByTagName('iframe')[0].style.height = String(o['height']) + "px";
				}
				if(o['width'] != undefined){
					document.getElementById(o['div']).style.width = "auto";
				var widths = document.getElementById(o['div']);
				widths.getElementsByTagName('iframe')[0].style.width = String(o['width']) + "px";
				}
				return this;
				},
				bannerResize:function(o){
				if(o['height'] != undefined){
					document.getElementById(o['div']).style.height = "auto";
				var heights = document.getElementById(o['div']);
				heights.getElementsByTagName('iframe')[0].style.height = String(o['height']) + "px";
				}
				if(o['width'] != undefined){
					document.getElementById(o['div']).style.width = "auto";
				var widths = document.getElementById(o['div']);
				widths.getElementsByTagName('iframe')[0].style.width = String(o['width']) + "px";
				}
				return this;
				}				
									
							}; 	
							
							
	this.kws_cleaner=function(w){
var MKEY ={
"Ã¨":"e",	
"Ã ":"a",
"Ã©":"e",
"Ã‰":"E",
"Ãˆ":"E",
"Ã€":"A",
"Ã‡":"C",
"Ã§":"c"

};
for(var i in MKEY){
	do{
	w = w.replace(i, MKEY[i]);
	}while(w.indexOf(i) !=-1);
	}
	return w;
}
		this.addseg = function(k,v){
if(window.MUTAG_RANDOM == undefined){
window.MUTAG_RANDOM = Math.round(Math.random()*100000000);
}
var mseg = {};
mseg[k]=v;
MUNIVERSAL.mseg.push(mseg);
return this;
}

this.MLoadEvent = function(){
try{
MUNIVERSAL.addseg("seg","language=" + this.language);
/*MUNIVERSAL.addseg("seg", utag_data.page);*/
/*MUNIVERSAL.populate();*/
}catch(e){

}


 try{
window.addEventListener('load', MUNIVERSAL.MLoadEvent, false);
}catch(e){
window.attachEvent('onload', MUNIVERSAL.MLoadEvent);
}
                };


		this.populate = function(){
			try{
for(i=0;i<MUNIVERSAL.mseg.length;i++){
 for(k in MUNIVERSAL.mseg[i]){
if(String(k) != "genp"){
_cc.add("seg",String(k) +"="+String(MUNIVERSAL.mseg[i][k]));
}else{
_cc.add(String(k),String(MUNIVERSAL.mseg[i][k]));
}

}}
_cc.bcp();
return this;
			}catch(e){}
}
		
							  
		 this.spot = function(a){
			 if(a['target'] == undefined){
				 a['target'] = this.sitename + "_"+ String(a['width']) + "x" + String(a['height']) +"_"+ String(M_TILE);
				 document.write("<div id=\""+this.sitename + "_"+ String(a['width']) + "x" + String(a['height']) +"_"+ String(M_TILE)+ "\"><\/div>")
				 }
				 if(window.adgroupids == undefined){
window.adgroupids=Math.round(Math.random()*100000000);

var FSPIXELXEN = {
"computer_software":"702866",
"laptop_tablets":"702868",
"home_theatre":"702869",
"cameras_camcorders":"702870",
"gps_car":"702871",
"movies_music_digital_audio":"702873",
"lifestyle":"702874",
"gaming":"702875",
"appliances":"702876",
"cellular_phones":"702877"
}; 

$(function(){
(function(){
var Lotame = {};

	if (!String.prototype.trim) {
	String.prototype.trim = function () {
	return this.replace(/^\s+|\s+$/gi, '');
	};
	}


Lotame.dept = $(".breadcrumb").text().replace(/\n|\t|\s/gi,"").replace(/&/gi,"-").split(/>|:/);
Lotame.url = window.location.href;
Lotame.lang = (Lotame.url.indexOf(/fr-CA/) != -1)?"French/":"English/";
Lotame.sites = ["Bestbuy",'Futureshop'];
Lotame.cat = MUNIVERSAL.kws_cleaner(Lotame.url.replace(/(.*)\/category\/(.*)\/(.*)/g,"$2"));
for(var i = 0; i < Lotame.sites.length;i++){
if(Lotame.url.indexOf(Lotame.sites[i].toLowerCase()) != -1){
Lotame.site = Lotame.sites[i];
}
}

var img = document.createElement("img");

$(".across-thumb,.prod-image,.product-content-wrapper h4 a").on("click",function(e){
var img = document.createElement("img");
var src = "//bcp.crwdcntrl.net/5/c=2726/";
src += "rand=" + String(Math.floor((Math.random()*100000000)+1));
src += "/pv=y";
src += "/ctax=2nd%20Party^Retail^";
src += (window.location.href.indexOf("bestbuy")!=-1)?"bestbuy^":"futureshop^";
src += "events^";
src += MUNIVERSAL.kws_cleaner(window.location.href.replace(/(.*)\/category\/(.*)\/(.*)/g,"$2"));
src += "^";
src += "view_product";
img.src = src;
img.setAttribute("height","1px");
img.setAttribute("width","1px");
img.style.display = "none";
document.getElementsByTagName("body")[0].appendChild(img);

});

$(".theme-right-column a").on("click",function(e){

var img = document.createElement("img");
var src = "//bcp.crwdcntrl.net/5/c=2726/";
src += "rand=" + String(Math.floor((Math.random()*100000000)+1));
src += "/pv=y";
src += "/ctax=2nd%20Party^Retail^";
src += (window.location.href.indexOf("bestbuy")!=-1)?"bestbuy^":"futureshop^";
src += "events^";
src += MUNIVERSAL.kws_cleaner(window.location.href.replace(/(.*)\/category\/(.*)\/(.*)/g,"$2"));
src += "^";
src += "view_product";
img.src = src;
img.setAttribute("height","1px");
img.setAttribute("width","1px");
img.style.display = "none";
document.getElementsByTagName("body")[0].appendChild(img);
});

var src = "//bcp.crwdcntrl.net/5/c=2726/";
src += "rand=" + String(Math.floor((Math.random()*100000000)+1));
src += "/pv=y";
src += "/ctax=2nd%20Party^Retail^" + Lotame.site;
src += "^";
src += MUNIVERSAL.kws_cleaner(Lotame.dept[1]);
src += "^";
src += Lotame.cat; 
src += "/";
src += "ctax=Filters^Language^"; 
src += Lotame.lang;
src +="/rt=ifr";
img.src = src;
img.setAttribute("height","1px");
img.setAttribute("width","1px");
img.style.display = "none";
document.getElementsByTagName("body")[0].appendChild(img);
})();
});	

if(MUNIVERSAL.pagename.indexOf("ros")==-1 || MUNIVERSAL.pagename.indexOf("search")==-1 ){
if(window.location.protocol == "https:"){
document.write('<img src="https://secure.adnxs.com/seg?add='+FSPIXELXEN[this.pagename]+'&t=2" width="1" height="1" style="display:none;" />');
document.write('<img src="https://secure.adnxs.com/seg?add=706116&t=2" width="1" height="1" style="display:none;" />');
}else{
document.write('<img src="http://ib.adnxs.com/seg?add='+FSPIXELXEN[this.pagename]+'&t=2" width="1" height="1" style="display:none;" />');
document.write('<img src="http://ib.adnxs.com/seg?add=706116&t=2" width="1" height="1" style="display:none;" />');
}}

}


MUNIVERSAL.internalKW = function(args){
try{
var BB = $(".breadcrumb").text();
BB = MUNIVERSAL.kws_cleaner(BB);
BB = BB.replace(/\r|\n|\t/gi,"").match(/(\w*)/gi);
}catch(e){
var BB = "";

}
	return BB;
	};
for(var i = 0;i < MUNIVERSAL.internalKW().length;i++ ){
    if(MUNIVERSAL.internalKW()[i] !="")
 this.keywords.push(MUNIVERSAL.internalKW()[i]);
}	
				 if(M_TILE == 0){
				 if(MUNIVERSAL == MUNIVERSAL.getKeywords()){
					
					 
					 }else{
						 
					 if(this.getKeywords() != undefined){
						 for(var i = 0; i < this.getKeywords().length;i++){
							 this.keywords.push(this.getKeywords()[i]);
							 }
						 }
					 }
					 if(MUNIVERSAL == MUNIVERSAL.getKeyValues()){
					
					 
					 }else{
						 
					 if(this.getKeyValues() != undefined){
						 for(var i in this.getKeyValues()){
							 this.keyvalues[i] = this.getKeyValues()[i];
							 }
						 }
					 }
					 
				 }

				 this.level.l1 = this.language;
			 this.level.l2 = this.sitename;
			 this.level.l3 = this.pagename;
				 var s = this.structure();
	 
				 googletag.cmd.push(function() {
		googletag.defineSlot(s, [a['width'], a['height']],a['target']).addService(googletag.pubads()).setTargeting('save',[a['target']]).setTargeting('site',[MUNIVERSAL.adtechname]).setTargeting('pos',[(a['position'].match(/atf/))?"above":"below"]);
		for(var b in MUNIVERSAL.keyvalues){
			
		    googletag.pubads().setTargeting(b,[MUNIVERSAL.keyvalues[b]]);
			
			}
			googletag.pubads().setTargeting("kw",[MUNIVERSAL.keywords]);
			googletag.pubads().setTargeting("channel",MUNIVERSAL.channel);
			
			  // googletag.pubads().enableAsyncRendering();
    // googletag.pubads().enableSingleRequest();
       googletag.enableServices();	

				 });
googletag.cmd.push(function() {googletag.display(a['target'])});				 
        
	    	M_TILE++;
		
		}
	}
	
	var MUNIVERSAL = new MUTAG();
	MUNIVERSAL.setSite("bestbuy");
	
	MUNIVERSAL.setSite = function(){
		return this;
		}
	

	
	
	MUNIVERSAL.initDFPP();

	if(MUNIVERSAL.dmp){
		MUNIVERSAL.initDMP();
		window.onload = function(){
	MUNIVERSAL.populate();
	};
		}
if(typeof(MUNIVERSAL_SITE) != "undefined"){
		//MUNIVERSAL.setSite((MUNIVERSAL_SITE!=undefined)?MUNIVERSAL_SITE:MUNIVERSAL.sitename);
		MUNIVERSAL.setPage((MUNIVERSAL_SECTION!=undefined)?MUNIVERSAL_SECTION:"ros");
		try{
		MUNIVERSAL.getKeywords(MUNIVERSAL_KWORD);
		}catch(e){}
		MUNIVERSAL.spot((MUNIVERSAL_COLLECTION!=undefined)?MUNIVERSAL_COLLECTION:null);
	
		}

	