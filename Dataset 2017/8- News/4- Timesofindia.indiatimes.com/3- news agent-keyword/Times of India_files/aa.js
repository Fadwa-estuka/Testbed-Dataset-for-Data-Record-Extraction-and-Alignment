//ver2.0.1213
var $cr={bsrc:0,cid:"2658%3A3",ckname:"_col_uuid",cnl:function(ag1,ag2){return document.querySelector("link[rel='canonical']")!=null?$cr.pcnl(document.querySelector("link[rel='canonical']").href,ag1,ag2):undefined;},ext:function(){var url=("https:"==document.location.protocol?"https://":"http://")+"ase.clmbtech.com/message";try{var dn=document.domain;if(dn!=null&&typeof $cr.cnl("/","-")!='undefined'){return(url+"?cid="+$cr.cid+"&val_101="+$cr.cid+"&val_102="+dn+"&val_120="+$cr.bsrc+"&val_101=int:"+$cr.cnl("/","-")+"&val_122="+$cr.gck());}else{if(dn!=null){return(url+"?cid="+$cr.cid+"&val_101="+$cr.cid+"&val_102="+dn+"&val_120="+$cr.bsrc+"&val_122="+$cr.gck());}}}catch(e){if(typeof console!='undefined'){console.log("Error in processing Rules: "+e);}}}};$cr.pcnl=function(cl,ag1,ag2){if(typeof cl==='undefined'||cl.indexOf('?')>-1){cl=undefined;return cl;}else{var clar=cl.replace(/\/\//g,"/").split(ag1);if(clar.length>2){var lgth=0;var lgst;for(var i=2;i<clar.length;i++){if(clar[2].length==0){cl=undefined;return cl;}
if(clar[i].length>lgth){lgth=clar[i].length;lgst=clar[i];}}
if(lgst.split(ag2).length>3){if(clar.indexOf(lgst)>2){exl=clar.length-clar.indexOf(lgst)
for(var i=0;i<exl;i++){clar.pop();}
if(clar[0]==='http:'||clar[0]==='https:'){clar.shift();}
return clar.join(ag1);}else{cl=undefined;return cl;}}else if(lgst.split(ag2).length===3){if(clar.indexOf(lgst)>1){exl=clar.length-clar.indexOf(lgst)-1
for(var i=0;i<exl;i++){clar.pop();}
if(clar[0]==='http:'||clar[0]==='https:'){clar.shift();}
return clar.join(ag1);}else{cl=undefined;return cl;}}else{if(clar[0]==='http:'||clar[0]==='https:'){clar.shift();}
if(clar[clar.length-1].indexOf("cms")>-1||clar[clar.length-1].indexOf("htm")>-1){clar.pop();if(clar.length===1){cl=undefined;return cl;}else{return clar.join(ag1);}}else{return clar.join(ag1);}}}else{cl=undefined;return cl;}}};$cr.jp=function(){var a={};return a.send=function(a,b){var c=b.callbackName,d=b.onSuccess||function(){},e=b.onTimeout||function(){};timeout=b.timeout||10;var f=window.setTimeout(function(){window[c]=function(){},e()},1e3*timeout);window[c]=function(a){window.clearTimeout(f),d(a)};var g=document.createElement("script");g.type="application/javascript",g.async=!0,g.src=a,g.onerror=function(){console.log("Error!")},document.getElementsByTagName("head")[0].appendChild(g)},a}();$cr.gck=function(){var ckv="";var ckva=document.cookie.split(";");for(var i=0;i<ckva.length;i++){if($cr.ckname==ckva[i].split("=")[0].trim()){ckv=ckva[i].split("=")[1];break;}}
return ckv;};$cr.dcc=function(ck,dn,exMins){var mdn="";var dot=".";var s=new Date();s.setTime(s.getTime()+(exMins*60*1000));if(dn.lastIndexOf("www.")==0){mdn=dn.replace("www.",".");}else if(dn.indexOf(dot)!=0){mdn=dot.concat(dn);}
document.cookie=$cr.ckname+"="+ck+";expires="+s.toGMTString()+";domain="+mdn+";path=/";};$cr.cc=function(a,b,c){try{var d,e,f,g;c?(e=new Date,e.setTime(e.getTime()+24*c*60*60*1e3),f="; expires="+e.toGMTString()):f="",g=location.host,1===g.split(".").length?document.cookie=a+"="+b+f+"; path=/":(d=(location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/)||[])[0],document.cookie=a+"="+b+f+"; path=/; domain="+d)}catch(a){console.log("ck :: "+a)}};$cr.cbkf=function(rp){try{var res;res="undefined"==typeof JSON?eval(response):JSON.parse(rp);for(var i=0;i<res.length;i++){var ckVal=res[i].uuid;$cr.dcc('',document.domain,0);$cr.cc($cr.ckname,ckVal,60);}}catch(a){console.log("jsonback:"+a);}};(function(){$cr.jp.send($cr.ext().replace(/'/g,"%27"),{callbackName:"$cr.cbkf",onSuccess:function(a){$cr.cbkf(a);},onTimeout:function(){},timeout:15});})();