//tealium universal tag - utag.260 ut4.0.201507202212, Copyright 2015 Tealium.com Inc. All Rights Reserved.
var uetq=uetq||[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={"view":1,"link":1};u.initialized=false;u.map={"order_subtotal":"gv"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,g;u.data={"base_url":"//bat.bing.com/bat.js","tagid":"4007335","gv":"","ec":"","ea":"","el":"","ev":"","order_id":"","order_subtotal":""};g={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.order_id=u.data.order_id||b._corder;u.data.order_subtotal=u.data.order_subtotal||b._csubtotal;u.loader_cb=function(){if(!u.initialized){var o={ti:u.data.tagid};o.q=uetq;uetq=new UET(o);uetq.push("pageLoad");}
u.initialized=true;g={};if(u.data.ec){g.ec=u.data.ec;}
if(u.data.ea){g.ea=u.data.ea;}
if(u.data.el){g.el=u.data.el;}
if(u.data.ev){g.ev=u.data.ev;}
if(u.data.order_id){g.gv=u.data.order_subtotal;}
if(g.ec||g.ea||g.el||g.ev||g.gv){uetq.push(g);}};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":"utag_260"});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);}("260","newegg.newegg.com"));}catch(error){utag.DB(error);}