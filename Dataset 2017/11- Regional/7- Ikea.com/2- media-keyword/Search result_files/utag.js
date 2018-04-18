//~~tv:template.20150120
//~~tc:

//tealium universal tag - utag.sender.template ut4.0.201605260733, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try {

  (function (id, loader) {

    var u = {};

    utag.o[loader].sender[id] = u;

    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.35
    if (utag.ut.loader === undefined) { u.loader = function (o) { var b, c, l, a = document; if (o.type === "iframe") { b = a.createElement("iframe"); o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" }; for( l in utag.loader.GV(o.attrs) ){ b.setAttribute( l, o.attrs[l] ); } b.setAttribute("src", o.src); }else if (o.type=="img"){ utag.DB("Attach img: "+o.src); b=new Image();b.src=o.src; return; }else{ b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8"; for( l in utag.loader.GV(o.attrs) ){ b[l] = o.attrs[l]; } b.src = o.src; } if(o.id){b.id=o.id}; if (typeof o.cb=="function") { if(b.addEventListener) { b.addEventListener("load",function(){o.cb()},false); }else { /* old IE support */ b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}}; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to "+l+": "+o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } } } } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf

    u.ev = {"view" : 1};

    u.initialized = false;

    u.scriptrequested = false;

    u.queue = [];

      u.map={"flipp_merchant_id":"merchant_id","flipp_goal_id":"goal_id","order_total":"goal_value"};
  u.extend=[function(a,b){ try{ if(1){b['flipp_merchant_id']='220'} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){d=b['page_type'];if(typeof d=='undefined')return;c=[{'checkout > step4':'1'}];var m=false;for(e=0;e<c.length;e++){for(f in c[e]){if(d==f){b['flipp_goal_id']=c[e][f];m=true};};if(m)break};if(!m)b['flipp_goal_id']='2';}];


    u.send = function (a, b) {

      if (u.ev[a] || u.ev.all !== undefined) {

        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var d, e, f;

        u.data = {

          //##UTVARconfig_<id from config>##

          "merchant_id" : "", // mandatory, merchant id

          "goal_id" : "",    // mandatory, 1 (checkout tag) or 2 (visit tag)

          "goal_value" : "", // mandatory, 1 or transaction total basket size, with no commas and two decimal places

          "base_url" : "//f.wishabi.net/attribution.js",

          // E-Commerce Vars
          "product_id" : [],
          "product_name" : [],
          "product_sku" : [],
          "product_brand" : [],
          "product_category" : [],
          "product_subcategory" : [],
          "product_quantity" : [],
          "product_unit_price" : [],
          "product_discount" : []
        };

        // Start tag-scoped extensions
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};
        // End tag-scoped extensions

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {

          if (b[d] !== undefined && b[d] !== "") {

            e = u.map[d].split(",");

            for (f = 0; f < e.length; f++) {

              u.data[e[f]] = b[d];
            }
          }
        }
        // End Mapping

        // Pull E-Commerce extension values
        // Mappings override E-Commerce extension values
        u.data.order_id = u.data.order_id || b._corder || "";
        u.data.order_total = u.data.goal_value || b._ctotal || "";
        u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
        u.data.order_shipping = u.data.order_shipping || b._cship || "";
        u.data.order_tax = u.data.order_tax || b._ctax || "";
        u.data.order_store = u.data.order_store || b._cstore || "";
        u.data.order_currency = u.data.order_currency || b._ccurrency || "";
        u.data.order_coupon_code = u.data.order_coupon_code || b._cpromo || "";
        u.data.order_type = u.data.order_type || b._ctype || "";
        u.data.customer_id = u.data.customer_id || b._ccustid || "";
        u.data.customer_city = u.data.customer_city || b._ccity || "";
        u.data.customer_state = u.data.customer_state || b._cstate || "";
        u.data.customer_zip = u.data.customer_zip || b._czip || "";
        u.data.customer_country = u.data.customer_country || b._ccountry || "";

        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_name.length === 0 && b._cprodname !== undefined) { u.data.product_name = b._cprodname.slice(0); }
        if (u.data.product_sku.length === 0 && b._csku !== undefined) { u.data.product_sku = b._csku.slice(0); }
        if (u.data.product_brand.length === 0 && b._cbrand !== undefined) { u.data.product_brand = b._cbrand.slice(0); }
        if (u.data.product_category.length === 0 && b._ccat !== undefined) { u.data.product_category = b._ccat.slice(0); }
        if (u.data.product_subcategory.length === 0 && b._ccat2 !== undefined) { u.data.product_subcategory = b._ccat2.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }
        if (u.data.product_discount.length === 0 && b._cpdisc !== undefined) { u.data.product_discount = b._cpdisc.slice(0); }

        // Start Loader Callback
        u.loader_cb = function (a, b, c) {

          u.initialized = true;

        };
        // End Loader Callback

        u.callBack = function () {

          var data = {};

          while (data = u.queue.shift()) {

            u.data = data.data;

            u.loader_cb(data.a, data.b, data.c);
          }
        };

        if (u.initialized) {

          u.loader_cb(a,b,c);
        }
        else {

          u.queue.push({"data" : u.data, "a" : a, "b" : b, "c" : c});

          if (!u.scriptrequested) {

            u.scriptrequested = true;
            
            var flipp = window.___wishabi_attribution = {};

            flipp.merchant_id = u.data.merchant_id;

            if (u.data.order_id) {

              flipp.goal_id = u.data.goal_id || "1";

              flipp.goal_value = u.data.goal_value || u.data.order_total || "0.00";
            }
            else {
              
              flipp.goal_id = u.data.goal_id || "2";
              
              flipp.goal_value = u.data.goal_value || "1";
            }


            u.loader({"type" : "script",  "src" : u.data.base_url, "cb" : u.callBack, "loc" : "script", "id" : "utag_13" });
          }
        }

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("13", "ikea.ca-main"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag