//tealium universal tag - utag.1994 ut4.0.201612081601, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.encode=function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e);}if(b==""){b=escape(a);}return b}
u.ev={"view":1};u.rp=function(a,b){if(typeof a!=="undefined"&&a.indexOf("@@")>0){a=a.replace(/@@([^@]+)@@/g,function(m,d){if(b[d]){return u.encode(b[d]);}else{return"";}});}
return a;};u.map={};u.extend=[function(a,b){try{if(b.product_article_id==null){return;}
b["js_page.impact_radius_product_sku"]=[];for(var i=0;i<b.product_article_id.length;i++){if(b.product_size_code[i]==null){b.product_size_code[i]="";}
b["js_page.impact_radius_product_sku"][i]=b.product_article_id[i].replace('-','')+b.product_size_code[i].replace('-','');}}catch(e){b["js_page.errors"].push("2250. [GA] Create impact_radius_product_sku from product_article_id and product_size_code, Remove any - . MSG: "+e.message);}},function(a,b){try{if(b.product_subtotal!=null){return;}
b.product_subtotal=[];for(var i=0;i<b._cprod.length;i++){b.product_subtotal[i]=parseInt(b._cquan[i])*parseFloat(b._cprice[i]);}}catch(e){b["js_page.errors"].push("2300. [IMPACT RADIUS] Set product_subtotal (depends on quantity and price). MSG: "+e.message);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"qsp_delim":"&","kvp_delim":"=","qs_delim":"?","tag_type":"script","base_url":"d3cxv97fi8q177.cloudfront.net/mediasource-A181628-c756-4c2e-895f-ba8eb10e2fc31-c-3909.js","secure_base_url":"","static_params":"","cachebust":"disabled","cachevar":""||"_rnd"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:1994:EXTENSIONS");utag.DB(b);c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(!u.data.hasOwnProperty(e[f])){c.push(e[f]+"##kvp_delim##"+u.encode(b[d]));}
u.data[e[f]]=b[d];}}}
u.data.secure_base_url=u.data.secure_base_url||u.data.base_url;u.data.url=(location.protocol==="https:"?u.data.secure_base_url:u.data.base_url);if(u.data.url.indexOf("http")!==0&&u.data.url.indexOf("/")!==0){u.data.url=location.protocol+"//"+u.data.url;}
if(u.data.static_params){c.push(u.data.static_params);}
var cb_check=new RegExp("(\\"+u.data.qs_delim+"|"+u.data.qsp_delim+")"+u.data.cachevar+"=");if(u.data.cachebust==="enabled"&&!cb_check.test(u.data.url)){c.push([u.data.cachevar,Math.random()].join(u.data.kvp_delim));}
if(c.length>0){if(u.data.url.indexOf(u.data.qs_delim)<0){u.data.url+=u.data.qs_delim;}else if(u.data.url.indexOf(u.data.qs_delim)!==(u.data.url.length-1)){u.data.url+=u.data.qsp_delim;}}
u.data.url=u.rp(u.data.url,b)+c.join(u.data.qsp_delim);u.data.url=u.data.url.replace(/##kvp_delim##/g,u.data.kvp_delim);u.loader({"type":u.data.tag_type,"src":u.data.url,"loc":"script","id":"utag_1994"});utag.DB("send:1994:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("1994","hm.us"));}catch(error){utag.DB(error);}