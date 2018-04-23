//tealium universal tag - utag.253 ut4.0.201701261656, Copyright 2017 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){if(!utag.data['geo']){utag.data['geo']=null;}
if(!utag.data['site']){utag.data['site']=null;}
if(!utag.data['stack']){utag.data['stack']=null;}
if(!utag.data['page_name']){utag.data['page_name']=null;}
if(!utag.data['cust_segment']){utag.data['cust_segment']=null;}
if(!utag.data['winback']){utag.data['winback']=null;}
if(!utag.data['bait_buyGS']){utag.data['bait_buyGS']=null;}
if(!utag.data['bait_cSub']){utag.data['bait_cSub']=null;}
if(!utag.data['bait_cTrial']){utag.data['bait_cTrial']=null;}
if(!utag.data['bait_cancelReason']){utag.data['bait_cancelReason']=null;}
if(!utag.data['bait_dayCancel']){utag.data['bait_dayCancel']=null;}
if(!utag.data['bait_dayCreate']){utag.data['bait_dayCreate']=null;}
if(!utag.data['bait_eSub']){utag.data['bait_eSub']=null;}
if(!utag.data['bait_eTrial']){utag.data['bait_eTrial']=null;}
if(!utag.data['bait_hadGS']){utag.data['bait_hadGS']=null;}
if(!utag.data['bait_hasGS']){utag.data['bait_hasGS']=null;}
if(!utag.data['bait_newDna']){utag.data['bait_newDna']=null;}
if(!utag.data['bait_hasTree']){utag.data['bait_hasTree']=null;}
if(!utag.data['o_xid']){utag.data['external_source_id']=null;}
if(!utag.data['o_iid']){utag.data['internal_source_id']=null;}
if(!utag.data['o_sch']){utag.data['marketing_channel']=null;}
if(!utag.data['offer_duration']){utag.data['offer_duration']=null;}
if(!utag.data['offer_id']){utag.data['offer_id']=null;}
if(!utag.data['offer_name']){utag.data['offer_name']=null;}
if(!utag.data['offer_price']){utag.data['offer_price']=null;}
if(!utag.data['offer_renewal']){utag.data['offer_renewal']=null;}
if(!utag.data['order_currency']){utag.data['order_currency']=null;}
if(!utag.data['order_discount_amount']){utag.data['order_discount_amount']=null;}
if(!utag.data['order_id']){utag.data['order_id']=null;}
if(!utag.data['order_payment_type']){utag.data['order_payment_type']=null;}
if(!utag.data['order_shipping_amount']){utag.data['order_shipping_amount']=null;}
if(!utag.data['order_subtotal']){utag.data['order_subtotal']=null;}
if(!utag.data['order_tax_amount']){utag.data['order_tax_amount']=null;}
if(!utag.data['order_total']){utag.data['order_total']=null;}
if(!utag.data['product_id']){utag.data['product_id']=null;}
if(!utag.data['product_list_price']){utag.data['product_list_price']=null;}
if(!utag.data['product_name']){utag.data['product_name']=null;}
if(!utag.data['product_quantity']){utag.data['product_quantity']=null;}
if(!utag.data['product_sku']){utag.data['product_sku']=null;}
if(!utag.data['product_quantity']){utag.data['product_quantity']=null;}
if(!utag.data['product_unit_price']){utag.data['product_unit_price']=null;}
if(!utag.data['site_currency']){utag.data['site_currency']=null;}
if(!utag.data['test_order']){utag.data['test_order']=null;}
if(!utag.data['flow_type']){utag.data['flow_type']=null;}
if(!utag.data['search_dbid']){utag.data['search_dbid']=null;}
if(!utag.data['search_dbName']){utag.data['search_dbName']=null;}
if(!utag.data['search_category']){utag.data['search_category']=null;}
if(!utag.data['search_subcategory']){utag.data['search_subcategory']=null;}
if(!utag.data['search_resultsQuality']){utag.data['search_resultsQuality']=null;}
if(!utag.data['db_view']){utag.data['db_view']=null;}
if(!utag.data['content_view']){utag.data['content_view']=null;}
function makeCall(requestData,projectURL){jQuery.jqlog={_enabled:!1,_url:null,_componentId:null,_hostName:null,version:"1.3",targets:[],entryDefaults:{timestamp:null,origionUrl:"",message:"",format:function(){var msg=this.message;return typeof this.message!="object"&&(msg="["+this.timestamp.getDate()+"/"+(this.timestamp.getMonth()+1)+"/"+this.timestamp.getFullYear()+" "+this.timestamp.getHours()+":"+this.timestamp.getMinutes()+":"+this.timestamp.getSeconds()+"."+this.timestamp.getMilliseconds()+"] "+this.message.toString()),msg}},targetDefaults:{name:"",log:function(){}},init:function(url,enable){this.init(url,enable,null)},init:function(url,enable,cid){this.init(url,enable,cid,null)},init:function(url,enable,cid,host){this.enabled(enable);this.url(url);this.componentId(cid);this.hostName(host)},enabled:function(enable){return enable!==undefined&&(this._enabled=enable),this._enabled},url:function(s){return s!==undefined&&(this._url=s),this._url},componentId:function(cid){cid&&!this._componentId&&(this._componentId=cid)},hostName:function(host){host&&!this._hostName&&(this._hostName=host)},log:function(object,options){if(this.enabled()){var t,target,entry=jQuery.extend({},this.entryDefaults,{timestamp:new Date,origionUrl:this.url(),message:object},options);if(!this.isExcluded(entry))for(t in this.targets)if(this.targets.hasOwnProperty(t)&&(target=this.targets[t],target.log))try{target.log(entry)}catch(err){}}},isExcluded:function(){return!1}};jQuery.fn.log=function(options){return this.each(function(){jQuery.jqlog.log(this,options)})};jQuery.extend(jQuery.jqlog,{_level:null,levels:{debug:0,info:1,warn:2,error:3},level:function(level){return level!==undefined&&(this._level=level),this._level},isExcluded:function(entry){var excluded=!1;return this._level&&entry.level!==undefined&&(excluded=this._level>entry.level),excluded},info:function(object,options){var settings=jQuery.extend({level:this.levels.info},options);this.log(object,settings)},warn:function(object,options){var settings=jQuery.extend({level:this.levels.warn},options);this.log(object,settings)},error:function(object,options){var settings=jQuery.extend({level:this.levels.error},options);this.log(object,settings)}});jQuery.jqlog.entryDefaults.level=jQuery.jqlog.levels.info;jQuery.jqlog.targets.bd=jQuery.extend({},jQuery.jqlog.targetDefaults,{name:"bd",version:"1.0",log:function(entry){if(entry&&entry.origionUrl){var errorTransportFunc=function(jqXhr,textStatus,errorThrown){errorThrown&&errorThrown.toLowerCase()=="no transport"&&(requestProperties.type="GET",requestProperties.dataType="jsonp",requestProperties.jsonpCallback="$.noop",requestProperties.error=function(){},$.ajax(requestProperties))},requestProperties={type:"POST",url:entry.origionUrl,timeout:500,crossDomain:!0,cache:!1,data:requestData,xhrFields:{withCredentials:!0},success:function(){},error:errorTransportFunc};$.ajax(requestProperties)}}});if(window.jQuery){$.jqlog.init(projectURL,true,'FETracking','PRDDRFJFETRAC00');log({});}}
function log(entry){if($.jqlog){$.jqlog.log(entry);}}
var fet_env="";try{var domain=window.document.location.hostname.split('.');domain=(domain.length>2)?domain[1]:domain[0];if(/loc/.test(domain)||/dev/.test(domain)){fet_env='dev';}
else if(/stage/.test(domain)){fet_env='stage';}}catch(e){}
projectURL='//fel.ancestry'+fet_env+'.com/webapi/avro/FrontEnd_Page_Data';requestData=JSON.stringify({GroupName:'tealium',ServiceName:'traffic',Geo:utag.data['geo'],Site:utag.data['site'],Stack:utag.data['stack'],Url:utag.data['dom.url'],Domain:utag.data['dom.domain'],Hash:utag.data['dom.hash'],QueryString:utag.data['dom.query_string'],PathName:utag.data['dom.pathname'],Referrer:utag.data['dom.referrer'],PageName:utag.data['page_name'],PageTitle:document.title,FlowType:utag.data['flow_type'],});makeCall(requestData,projectURL);if(utag.data['external_source_id']!='unknown'&&utag.data['external_source_id']!=null&&utag.data['internal_source_id']!='unknown'&&utag.data['internal_source_id']!=null){projectURL='//fel.ancestry'+fet_env+'.com/webapi/avro/FrontEnd_Campaign';requestData=JSON.stringify({GroupName:'tealium',ServiceName:'traffic',ExternalSourceId:utag.data['external_source_id'],InternalSourceId:utag.data['internal_source_id'],MarketingChannel:utag.data['marketing_channel'],});makeCall(requestData,projectURL);}
if(utag.data['dom.domain'].indexOf('order.ancestry')!=-1||utag.data['dom.domain'].indexOf('secure.ancestry')!=-1){projectURL='//fel.ancestry'+fet_env+'.com/webapi/avro/FrontEnd_Conversion_Data';requestData=JSON.stringify({GroupName:'tealium',ServiceName:'traffic',OfferDuration:utag.data['offer_duration'],OfferId:utag.data['offer_id'],OfferName:utag.data['offer_name'],OfferPrice:utag.data['offer_price'],OfferRenewal:utag.data['offer_renewal'],OrderCurrency:utag.data['order_currency'],OrderDiscountAmount:utag.data['order_discount_amount'],OrderId:utag.data['order_id'],OrderPaymentType:utag.data['order_payment_type'],OrderShippingAmount:utag.data['order_shipping_amount'],OrderSubtotal:utag.data['order_subtotal'],OrderTaxAmount:utag.data['order_tax_amount'],OrderTotal:utag.data['order_total'],ProductId:utag.data['product_id'],ProductListPrice:utag.data['product_list_price'],ProductName:utag.data['product_name'],ProductQuantity:utag.data['product_quantity'],ProductSku:utag.data['product_sku'],ProductType:utag.data['product_quantity'],ProductUnitPrice:utag.data['product_unit_price'],SiteCurrency:utag.data['site_currency'],TestOrder:utag.data['test_order'],FlowType:utag.data['flow_type'],});makeCall(requestData,projectURL);}
}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("253","ancestry.canada");}catch(error){utag.DB(error);}
