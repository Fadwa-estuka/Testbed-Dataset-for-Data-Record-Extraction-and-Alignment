//~~tv:20010.20140827
//~~tc: Tealium Custom Container

/*
  @author: kevin thomas faurholt - tealium, inc.

  @purpose: adgear support
*/

/* Start Tag Library Code */

// @todo: most likely redundant. data source should
// be found in 1 party cookie named __utma
//var scid = document.cookie.split(';').map(function(x) {
//      return x.trim().split(/(=)/);
//  }).reduce(function(a, b) {
//      a[b[0]] = a[b[0]] ? a[b[0]] + ', ' + b.slice(2).join('') : b.slice(2).join('');
//      return a;
//  }, {})["__utma"];
/* End Tag Library Code */

//tealium universal tag - utag.sender.custom_container ut4.0.201609070801, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    
    var u = {};
    
    utag.o[loader].sender[id] = u;

    // Start Tealium loader 4.32
    // Please do not modify
    if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {"view" : 1};

    u.initialized = false;

      u.map={"__utma":"visitor_id","utmcmd":"visitor_channel","page_name":"page_name","product_ids":"product","product_units":"quantity","product_prices_vat":"price","visit_country":"province","visit_language":"language","dom.url":"page_url","dom.referrer":"referrer_url","order_total":"price","delivery_method":"delivery_method"};
  u.extend=[function(a,b){ try{ if((typeof b['page_name']!='undefined'&&b['page_name'].toString().toLowerCase().indexOf('checkout>shopping cart'.toLowerCase())>-1)){b['product_prices_vat']=b['cart_total_value_vat']} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if((typeof b['page_name']!='undefined'&&b['page_name'].toString().toLowerCase().indexOf('checkout>confirmation'.toLowerCase())>-1)){b['product_prices_vat']=b['cart_total_value_vat']} } catch(e){ utag.DB(e) }  }];


    u.send = function(a, b) {

      if (u.ev[a] || u.ev.all !== undefined) {
      
        //##UTENABLEDEBUG##utag.DB("send:##UTID##");

        var c, d, e, f, i;

        u.escape = window.encodeURIComponent || window.escape;

        u.toType = function(obj) {

          return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        };

        u.data = {

          // THIS ONE SHOULD BE AN INPUT FIELD
          adspot_id : "59",

          base_url : "dcs.adgear.com/impressions/int/",

          //page_name = window.utag_data.page_name; // Page Name (Page Title)
          //product = window.utag_data.product_names; // Product
          //quantity = window.utag_data.product_units; // Quantity
          //price = window.utag_data.product_prices_vat; // Price
          //visitor_channel = document.cookie.substring(document.cookie.indexOf("utmcmd=")+7,document.cookie.indexOf(";",document.cookie.indexOf("utmcmd="))); // Visitor channel
          //visitor_id = window.scid; // CookieID
          //transaction_timestamp : Date().toString() || "" // Transaction timestamp
          //province = window.utag_data.visit_country; // Country
          //language = window.utag_data.visit_language; // Language
          //page_url  = document.location.href; // Current Page URL
          //referrer_url  = document.referrer;      // Referrer URL
        };


        /* Start Tag-Scoped Extensions Code */
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};

        /* Start Mapping Code */
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];
            }
          }
        }
        /* End Mapping Code */

        u.loader_cb = function () {

          u.initialized = true;

          // placeholder for future adgear tracking function
        };

        /* Start Loader Function Call */
        
        if (!u.initialized) {

          var key, value, data = [];

          for (key in u.data) {

            if (u.data.hasOwnProperty(key)) {

              if (/adspot_id|base_url|transaction_timestamp/.test(key)) {

                continue;
              }

              value = u.data[key];

              if (u.toType(value) === "array") {

                value = value.join("|");
              }

              data.push(key + "=" + escape(value));
            }
          }

          data.push("transaction_timestamp=" + escape(Date().toString()));

          u.loader({ 
            "type" : "script",
            "src" : "//" + u.data.base_url + "as=" + u.data.adspot_id + ".js?AG_R=" + Math.floor(Math.random()*100000000) + "&" + data.join("&"),
            "cb" : u.loader_cb,
            "loc" : "script",
            "id" : "utag_2"
          });
        }
        else {
        
          u.loader_cb();
        }

        /* End Loader Function Call */

        //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  })("2", "ikea.ca-main");
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag