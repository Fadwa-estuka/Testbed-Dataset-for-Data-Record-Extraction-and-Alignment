//tealium universal tag - utag.124 ut4.0.201701232241, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.t='@@',u.i=[],u.p=["//www.omwpx.com/@@op_id@@/c/?sub1=@@product_code@@&sub2=@@subproduct_code@@&sub3=@@page_id@@","","","","","","",""];u.cachebust="disabled";u.cachevar=""||"_rnd";u.map={};u.extend=[function(a,b){try{if(b['dom.pathname']=='/jump/mobile-payments/wells-fargo-wallet'||b['dom.pathname']=='/jump/mobile-payments/wells-fargo-wallet/'||b['dom.pathname']=='/jump/mobile-payments/wells-fargo-wallet/index'){b['op_id']='2898aa2dfd3464ce005a84c5a2ec1429'}}catch(e){utag.DB(e)}}];u.send=function(a,b,c,d,e,f){if(u.ev[a]){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};if(!b.op_id||!b.mpuid)return false;for(c=0;c<u.p.length;c++){if(u.p[c]!=""){var x=u.rp(u.p[c],b);if(x!=""){if(u.cachebust=="enabled"&&x.indexOf("_rnd")<0){x+="&"+u.cachevar+"="+Math.random();}
var img=new Image();img.src=x;u.i.push(img);}}}}}
u.rp=function(a,b){if(typeof a!="undefined"&&a.indexOf(u.t)>0){a=a.replace(/@@([^@]+)@@/g,function(m,d){if(b[d]){return encodeURIComponent(b[d]);}else{return'';}});}
return a;}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('124','wfc.main');}catch(error){utag.DB(error);}