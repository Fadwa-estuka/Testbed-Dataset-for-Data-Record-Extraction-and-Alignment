var _sptinit={mask:2552,account:"112",ga_tracker:"UA-44986400-1",rsc_path:"http://t.sellpoints.com/",rsc_path_s:"https://t.sellpoints.com/",cookiedomain:".newegg.com",customdataevents:["h","f","cd"],customdata:function(f){var d={},b=0,e,c,a=function(a){try{if(utag_data&&d&&"undefined"!==typeof utag_data[a]){var c=a.replace("product_","");d[c]="function"===typeof utag_data[a].join?utag_data[a].join("|"):utag_data[a];b++}}catch(e){}};a("product_category_id");a("product_category_name");a("product_group_id");
a("product_instock");a("product_title");a("product_manufacture");a("product_model");a("product_sale_price");a("product_subcategory_id");a("product_subcategory_name");a("product_type");a("product_unit_price");a("parent_item");a("page_type");a("site_region");a("site_currency");"h"===f&&document.cookie.replace(/(sp_scores_ex[0-9]+)[ ]*=([^;]*)/gi,function(a,c,e){d[c]=e;b++});document.cookie.replace(/(sp_rosewill_visit)[ ]*=([^;]*)/i,function(a,c,e){d[c]=e;b++});document.cookie.replace(/(sp_ab_rosewill)[ ]*=([^;]*)/i,
function(a,c,e){d[c]=e;b++});try{if("undefined"!==typeof f&&"cd"==f&&"undefined"!==typeof window.optimizely){for(e=window.optimizely.activeExperiments.length-1;0<=e;e--)c=window.optimizely.activeExperiments[e],d["opt_eid_"+e]=c,d["opt_exp_"+e]=window.optimizely.data.experiments[c].name,d["opt_var_"+e]=window.optimizely.data.state.variationMap[c];b++}}catch(g){}if(0<b)return d},getElement:function(){return"undefined"!==typeof utag_data&&"undefined"!==typeof utag_data.product_id?utag_data.product_id:
document.location.pathname},customtransaction:function(){var f=!1,d=function(a,b){try{return a[b]}catch(c){return""}},b=function(a,b,c){try{if("undefined"!==typeof a&&"undefined"!==typeof a[b])return a[b]}catch(d){}return c};if("undefined"!==typeof utag_data&&"undefined"!==typeof utag_data.trans_orders)for(var e=utag_data.trans_orders.length-1;0<=e;e--){var c=utag_data.trans_orders[e];this.sp_track({sp_g:"t",transid:b(utag_data,"trans_id",""),orderid:b(c,"order_id",""),total:b(c,"order_total",""),
tax:b(c,"order_tax",""),shipping:b(c,"order_shipping_charge",""),city:b(utag_data,"trans_shipping_city",""),state_prov:b(utag_data,"trans_shipping_state",""),country:b(utag_data,"site_region",""),zipcode:b(utag_data,"trans_shipping_zipcode",""),customer_id:b(utag_data,"customer_id",""),currency:b(utag_data,"site_currency",""),firstorder:b(utag_data,"trans_first_order_flag",""),pcode_discount:b(utag_data,"order_pcode_discount",""),combo_discount:b(utag_data,"order_combo_discount",""),autoadd_combo_discount:b(utag_data,
"order_autoadd_combo_discount",""),gift_card_amount:b(utag_data,"order_gift_card_amount",""),flag_cj:b(utag_data,"int_flag_cj","")});for(var f=!0,a=c.product_id.length-1;0<=a;a--)this.sp_track({sp_g:"tp",orderid:b(c,"order_id",""),sku:d(b(c,"product_id",[]),a),product:d(b(c,"product_title",[]),a),subcategory_id:d(b(c,"product_subcategory_id",[]),a),subcategory_name:d(b(c,"product_subcategory_name",[]),a),category_id:d(b(c,"product_category_id",[]),a),category_name:d(b(c,"product_category_name",[]),
a),price:d(b(c,"product_unit_price",[]),a),sale_price:d(b(c,"product_sale_price",[]),a),count:d(b(c,"product_quantity",[]),a),manufacture:d(b(c,"product_manufacture",[]),a),web_id:d(b(c,"product_web_id",[]),a),combo_discount:d(b(c,"product_combo_discount",[]),a),autoadd_combo_discount:d(b(c,"product_autoadd_combo_discount",[]),a),model:d(b(c,"product_model",[]),a),pcode_discount:d(b(c,"product_pcode_discount",[]),a)})}return f}};
(function(f,d,b,e,c){e=f.createElement(d);e.type="text/java"+d;e.async=!0;e.src=b;c=f.getElementsByTagName(d)[0];c.parentNode.insertBefore(e,c)})(document,"script","//a.sellpoint.net/w/112/spworld.min.js");
function sptobject_setPlgReady(M){sptobject.setPlgReady(M)}
var _spt=_spt||[],_gaq=_gaq||[],sptobject=sptobject||{},__sptobject=function(M){if("function"===typeof M.init)return M;var c=this,N=window,l=navigator,W,X,Y,m,x,C,q,Z,D,E,r,$,Q,F,aa,G,ba,k,p,y,h,n,t,u,z,v,A,s,O,H,w,J,ga=[],P,K,R,B,ca=!1,L,S=N.globalStorage,T,U=0,da=[7,8,15,30,30,30,60,60,60,120,120,120],I,ea=Array.prototype.forEach,fa=Array.prototype.map;try{var V=N.sessionStorage}catch(ha){}this.each=function(a,b,c){if(null!==a)if(ea&&a.forEach===ea)a.forEach(b,c);else if(a.length===+a.length)for(var f=
0,g=a.length;f<g&&b.call(c,a[f],f,a)!=={};f++);else for(f in a)if(a.hasOwnProperty(f)&&b.call(c,a[f],f,a)==={})break};this.map=function(a,b,e){var f=[];if(null===a)return f;if(fa&&a.map===fa)return a.map(b,e);c.each(a,function(a,c,h){f[f.length]=b.call(e,a,c,h)});return f};this.init=function(a){try{m=a&&a.mask?a.mask:void 0;var b=document.readyState;if("interactive"!==b&&"complete"!==b&&!(m&4096))return setTimeout(c.init,100,a),!1;W=a&&a.rsc_path?a.rsc_path:"";X=a&&a.rsc_path_s?a.rsc_path_s:"";Y=
a&&a.ga_tracker?a.ga_tracker:"UA-41861406-6";x=["fl","sl"];C=[1,2];q=[!1,!1];Z=[10,10];D=[void 0,void 0];E=[void 0,void 0];r=[void 0,void 0];$=["Shockwave Flash","Silverlight Plug-In"];Q=["ShockwaveFlash.ShockwaveFlash","AgControl.AgControl"];F=["application/x-shockwave-flash","application/x-silverlight-2"];aa=["1.0.0.0","4.0.60310.0"];G=["sp_swfcontainer","sp_slcontainer"];ba=["spt.swf","spt.xap"];k=[void 0,void 0];p=[0,0];y=[void 0,void 0];s=A=v=z=u=t=n=h=void 0;B=-1!=l.appName.indexOf("Microsoft");
if(!B)try{L=N.localStorage}catch(e){}H=O=null;J=a&&a.account?a.account:void 0;w=a&&a.sku?a.sku:void 0;"undefined"===typeof w&&a&&"function"===typeof a.getElement&&(w=a.getElement.call(c));P=a&&a.customdata?a.customdata:void 0;K=a&&"undefined"!==typeof a.customdataevents?a.customdataevents:void 0;R=a&&"undefined"!==typeof a.customtransaction?a.customtransaction:void 0;I=a&&a.cookiedomain&&0<location.hostname.indexOf(a.cookiedomain)?";domain="+a.cookiedomain:"";ca=!0;w&&c.sp_heartBeat();c.sp_transaction()}catch(f){return!1}return!0};
this.sp_testSkip=function(a,b,c){return!(a&m)||void 0!=b&&(void 0==c||b==c)};this.hasPlugIn=function(a,b,c,f){if(a==Q[1]&&-1<l.userAgent.indexOf("Chrome"))return!1;if(void 0!=typeof l.plugins&&"object"==typeof l.plugins[b]){if((d=l.plugins[b].description)&&void 0!=typeof l.mimeTypes&&l.mimeTypes[c]&&l.mimeTypes[c].enabledPlugin&&d[0]>=f)return!0}else if(void 0!=typeof N.ActiveXObject)try{var g=new ActiveXObject(a);if(g)try{if((d=g.GetVariable("$version"))&&d[0]>=f)return!0}catch(h){if(g.IsVersionSupported(f))return!0}}catch(k){}return!1};
this.getPlgInInnerHTML=function(a){var b='<object id="'+G[a]+'" width="1" height="1"',c=("https:"==document.location.protocol?X:W)+ba[a];"fl"==x[a]?b=B?b+(' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="'+c+'">')+('<object type="'+F[a]+'" data="'+c+'" width="1" height="1"><param name="movie" value="'+c+'"/></object></object>'):b+(' type="'+F[a]+'" data="'+c+'" style="visibility: visible;"></object>'):"sl"==x[a]&&(b+=' data="data:'+F[a]+'," type="'+F[a]+'"><param name="source" value="'+
c+'"/><param name="autoUpgrade" value="false" /><param name="background" value="Transparent" /><param name="windowless" value="True" /><param name="minRuntimeVersion" value="4.0.0.0" /></object>');return b};this.createPlgElem=function(a){var b=document.createElement("div");b.innerHTML=c.getPlgInInnerHTML(a);document.body.appendChild(b);return b};this.getPlgObject=function(a){if(r[a])return r[a];var b=B?window[G[a]]:document[G[a]];r[a]="sl"==x[a]?b.Content.App:b;return r[a]};this.sp_removePlg=function(a){if(!(7>
p[a])){var b=document.getElementById(G[a]);b&&b.parentNode&&b.parentNode.removeChild(b);r[a]=void 0}};this.sp_id_plugin=function(a,b,e){if(!c.sp_testSkip(C[a],k[a],e)&&!D[a])try{if(b>Z[a])D[a]=!0;else{D[a]=!1;var f=document.getElementById(G[a]);b++;if(!r[a]){if(!q[a]){void 0===E[a]&&(E[a]=c.hasPlugIn(Q[a],$[a],F[a],aa[a]));if(!E[a])return;f||c.createPlgElem(a);if(!q[a]){setTimeout(c.sp_id_plugin,300,a,b,e);return}}c.getPlgObject(a)}k[a]=r[a].getID();k[a]&1||(p[a]|=1);e&&k[a]!=e&&(k[a]&&c.sp_track({sp_g:"ns",
type:x[a],old:k[a],newid:e}),r[a].setID(e),k[a]&2||(p[a]|=2),k[a]=e,c.sp_removePlg(a))}}catch(g){}};this.sp_id_window=function(a){if(!c.sp_testSkip(4,t,a))try{a?t!=a&&(t&&c.sp_track({sp_g:"ns",type:"wnm",old:t,newid:a}),window.name.match(/[&]*spid=[0-9a-z-]*/i)?window.name=window.name.replace(/[&]*spid=[0-9a-z-]*/i,"&spid="+a):window.name+="&spid="+a,t=a):t=window.name.replace(/^.*[&]*spid=([0-9a-z-]*).*$/i,"$1")}catch(b){}};this.sp_id_userdata=function(a){if(!c.sp_testSkip(8,u,a))try{var b=document.getElementById("sp_udata");
b||(b=document.createElement("div"),b.style.visibility="hidden",b.style.position="absolute",b.setAttribute("id","sp_udata"),document.body.appendChild(b),b.style.behavior="url(#default#userData)");void 0!==a?u!=a&&(u&&c.sp_track({sp_g:"ns",type:"h5i",old:u,newid:a}),b.setAttribute("spid",a),b.save("spid"),u=a):(b.load("spid"),u=b.getAttribute("spid"))}catch(e){}};this.sp_id_local_storage=function(a){if(!c.sp_testSkip(32,v,a))try{L&&(void 0!==a?v!=a&&(v&&c.sp_track({sp_g:"ns",type:"h5l",old:v,newid:a}),
L.setItem("spid",a),v=a):v=L.getItem("spid"))}catch(b){}};this.sp_id_database_storage=function(a){if(!c.sp_testSkip(128,s,a))try{if(window.openDatabase){var b=window.openDatabase("sqlite_sp_id","","sp_id",1048576);s!=a&&b.transaction(function(b){b.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,value TEXT NOT NULL,UNIQUE (name))",[],function(b,e){b.executeSql("SELECT value FROM cache WHERE name=?",["spid"],function(b,e){1<=e.rows.length&&
(s=e.rows.item(0).value);s&&s!=h&&c.sp_track({sp_g:"ns",type:"h5d",old:s,newid:a});b.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)",["spid",a],function(b,c){s=a})})})})}}catch(e){}};this.sp_id_session_storage=function(a){if(!c.sp_testSkip(16,z,a))try{V&&(void 0!==a?z!=a&&(z&&c.sp_track({sp_g:"ns",type:"h5s",old:z,newid:a}),V.setItem("spid",a)):z=V.getItem("spid"))}catch(b){}};this.sp_id_global_storage=function(a){if(!c.sp_testSkip(64,A,a)&&!L&&S){var b=window.location.host.replace(/:\d+/,
"");try{void 0!==a?A!=a&&(A&&c.sp_track({sp_g:"ns",type:"h5g",old:A,newid:a}),S[b].spid=a):A=S[b].spid}catch(e){}}};this.sp_setCookie=function(a,b,c,f){var g=new Date;"y"===c?g.setDate(g.getDate()+365):"h"===c?g.setMilliseconds(g.getMilliseconds()+36E5):g.setDate(g.getDate()-1);document.cookie=a+"="+b+"; expires="+g.toUTCString()+f+";path=/"};this.sp_id_cookie=function(a){if(void 0!==a)n!=a&&(n&&c.sp_track({sp_g:"ns",type:"ck",old:n,newid:a}),c.sp_setCookie("spid",a,"y",I));else if(!n){a=document.cookie;
for(var b=/(?:[^a-z0-9;]*)spid[ ]*=([^;]*)/g,e=0,f=b.exec(a);f;){if(n&&f[1]!==n){var g=n;n=f[1];c.sp_track({sp_g:"ns",type:"ck",old:g,newid:f[1]})}else n=f[1];e++;if(10<e)break;f=b.exec(a)}1<=e&&I&&0<I.length&&(c.sp_setCookie("spid","","-",""),c.sp_setCookie("spid",n,"y",I))}};this.sp_getAllSPids=function(){var a=[];a.push(h,n,A,z,s,v,u,t);k&&k instanceof Array&&2==k.length&&a.push(k[0],k[1]);return a};this.sp_setToBestSPID=function(){var a=c.sp_getAllSPids();a:{for(var b=0;b<a.length;){if(a[b]){h=
a[b];break a}b++}h=void 0}h&&"string"==typeof h&&h.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)||(h=c.sp_uuidFast())};this.sp_IsInSession=function(){var a=(new Date).getTime();if(36E5>a-c._SessionId)return!0;var b=document.cookie,e=/^.*(?:[^a-z0-9]+|^)sp_ssid[ ]*=([^;]*).*$/,f=!1;b.match(e)?(c._SessionId=b.replace(e,"$1"),f=!0):c._SessionId=a;c.sp_setCookie("sp_ssid",c._SessionId,"h",I);return f};this.sp_getSPID=function(){if(h)return h;c.sp_id_cookie();c.sp_id_session_storage();
c.sp_id_global_storage();c.sp_id_window();c.sp_id_userdata();c.sp_id_local_storage();c.sp_setToBestSPID();c.sp_id_cookie(h);c.sp_id_session_storage(h);c.sp_id_global_storage(h);c.sp_id_window(h);c.sp_id_userdata(h);c.sp_id_local_storage(h);c.sp_id_plugin(0,0,h);c.sp_id_plugin(1,0,h);c.sp_id_database_storage(h);return h};this.sp_sendFingerPrintData=function(a){a=a?a:0;a++;if(15>a&&C[0]&m&&!q[0]&&C[1]&m&&!q[1])void 0==D[0]&&c.sp_id_plugin(0,0),void 0==D[1]&&c.sp_id_plugin(1,0),setTimeout(c.sp_sendFingerPrintData,
400,a);else{var b=[];b.lg=l.language;b.sc=screen.colorDepth;b.tz=(new Date).getTimezoneOffset();b.ss=!!window.sessionStorage;var e;try{e=!!scope.localStorage}catch(f){e=!0}b.ls=e;b.db=!!window.indexedDB;b.ab=typeof document.body.addBehavior;b.od=typeof window.openDatabase;b.cp=l.cpuClass;b.pf=l.platform;b.tk=l.doNotTrack;b.ja=l.javaEnabled();b.rsl=screen.width+"x"+screen.height;b.plg=(E[0]?"t":"f")+"-"+(E[1]?"t":"f");e=!1;try{15>a&&C[0]&m&&q[0]&&(k[0]&4||(p[0]|=4),y[0]||(y[0]=c.sp_fnv_hash(c.getPlgObject(0).getFonts().join(";"))),
b.ft="f"+y[0],e=!0)}catch(g){}if(!e&&15>a&&C[1]&m&&q[1]){k[1]&4||(p[1]|=4);try{y[1]||(y[1]=c.sp_fnv_hash(c.getPlgObject(1).getFonts())),b.ft="s"+y[1],e=!0}catch(h){}}e||(b.ft="");15>a&&(c.sp_removePlg(0),c.sp_removePlg(1));a=c.map(l.plugins,function(a){var b=c.map(a,function(a){return[a.type,a.suffixes].join("~")}).join(",");return[a.name,a.description,b].join("::")},this).join(";");b.pg=c.sp_fnv_hash(a);b.sp_g="f";return c.sp_track(b)}};this.sp_appendCustomData=function(a,b){if("function"!=typeof P||
"undefined"===typeof a)return!1;var c=P(b);if(!c)return!1;if("object"==typeof c)for(var f in c)c.hasOwnProperty(f)&&(a instanceof Array?a.push(encodeURIComponent(f)+"="+encodeURIComponent(c[f])):a[f]=c[f]);else a instanceof Array?a.push("customvalue="+c):a.customvalue=c;return!0};this.sp_find_elem=function(a,b){if("undefined"!==typeof Array.prototype.indexOf)return a.indexOf(b);for(var c=a.length-1;0<=c;c--)if(a[c]===b)return c;return-1};this.sp_sendCustomData=function(){if(K&&-1<c.sp_find_elem(K,
"cd")){var a={sp_g:"cd"};c.sp_appendCustomData(a,a.sp_g)&&c.sp_track(a)}};this.sp_sendFirstPartyData=function(){if(1024&m){var a={},b=0;document.cookie.replace(/([^=; ]+)=([^;]*)/gi,function(c,f,g){"spid"!=f&&"sp_ssid"!=f&&"spuid"!=f&&(a[f]=g,b++)});a.sp_g="c";c.sp_track(a)}};this.sp_fnv_hash=function(a){for(var b=2166136261,c=0,c=0;c<a.length;c++)b=16777619*b^a.charCodeAt(c);return b};this.sp_void=function(a){};this.sp_track=function(a){try{if(!(l.doNotTrack&&m&8192)){var b=c.sp_IsInSession(),e=
[];e.push("u="+c.sp_getSPID());e.push("r="+Math.random());e.push("v=1.11");e.push("s="+c._SessionId);w&&e.push("sku="+w);J&&e.push("rtlr="+J);var f="a",g;for(g in a)a.hasOwnProperty(g)&&("sp_g"==g?f=a[g]:e.push(encodeURIComponent(g)+"="+encodeURIComponent(a[g])));K&&-1<c.sp_find_elem(K,f)&&c.sp_appendCustomData(e,f);e.push("ref="+encodeURIComponent(document.referrer));var h=location.protocol+"//t.sellpoints.com/"+f+".gif?"+e.join("&").substr(0,4089);c.sp_pix(h);b||(c.sp_sendFingerPrintData(),c.sp_sendCustomData(),
c.sp_sendFirstPartyData());return h}}catch(k){}};this.sp_track_i2=function(a){try{if(!(l.doNotTrack&&m&8192)){if(H&&(H!=a.a||"close"!=a.e)){var b=a.a,e=a.e;a.a=H;a.e="close";c.sp_track_i2(a);a.a=b;a.e=e}H=a.a;a.l||(a.l=w);if(a.l&&(a.e||(a.e="open"),a.a)){a.a+="-"+a.e;a.c||(a.c=J);a.t||(a.t=Y);var f=c.sp_getSPID(),g=new Date,b=0;O&&(b=a.v?a.v:Math.round(Math.min((g-O)/1E3,480),0));O=g;var h=encodeURIComponent(a.c+"|"+a.a+"|"+a.l);c.sp_pix("http://www.google-analytics.com/collect?v=1&t=event&ec="+encodeURIComponent(a.c)+
"&ea="+a.a+"&el="+h+"&ev="+b+"&cid="+f+"&tid="+a.t+"&z="+Math.random());a.dt=b;c.sp_track(a);"close"==a.e&&(H=void 0)}}}catch(k){}};this.sp_pix=function(a){var b=new Image;b.width=1;b.border=0;b.src=a;b.onload=function(){c.sp_void(b)};m&4096&&ga.push(a)};this.sp_uuidFast=function(){for(var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,f,g=0;36>g;g++)8==g||13==g||18==g||23==g?b[g]="-":14==g?b[g]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),f=c&15,
c>>=4,b[g]=a[19==g?f&3|8:f]);return b.join("")};this.sp_heartBeat=function(){try{T||(T=new Date),c.sp_track({sp_g:"h",t:Math.round((new Date-T)/1E3,0)}),2048&m&&da.length>U&&(setTimeout(c.sp_heartBeat,1E3*da[U]),U++)}catch(a){}};this.sp_fireGATransaction=function(a){a&&a instanceof Array&&0!==a.length&&c.sp_track({sp_g:"t",orderid:a[1],aff_store:a[2],total:a[3],tax:a[4],shipping:a[5],city:a[6],state_prov:a[7],country:a[8]})};this.sp_fireGAProduct=function(a){a&&a instanceof Array&&0!==a.length&&c.sp_track({sp_g:"tp",
orderid:a[1],sku:a[2],product:a[3],category:a[4],price:a[5],count:a[6]})};this.sp_transaction_GA_like=function(a){var b=!1,e;try{e=a.slice(0)}catch(f){}if("undefined"!==typeof e&&e instanceof Array&&0<e.length)for(a=e.length-1;0<=a;a--)e[a]&&e[a]instanceof Array&&0<e[a].length&&("_addTrans"==e[a][0]?(c.sp_fireGATransaction(e[a]),b=!0):"_addItem"==e[a][0]&&(c.sp_fireGAProduct(e[a]),b=!0));return b};this.sp_transaction_AdWords=function(){var a=!1;if("undefined"!==typeof google_conversion_order_id&&
"undefined"!==typeof google_conversion_id&&google_conversion_order_id&&google_conversion_id&&(c.sp_track({sp_g:"t",orderid:google_conversion_order_id,total:google_conversion_value,numberitems:google_conversion_items&&google_conversion_items instanceof Array?google_conversion_items.length:0}),a=!0,google_conversion_items&&google_conversion_items instanceof Array))for(var b=google_conversion_items.length-1;0<=b;b--)c.sp_track({sp_g:"tp",orderid:google_conversion_order_id,sku:google_conversion_items[b].item_id,
price:google_conversion_items[b].value,adwords_grouping:google_conversion_items[b].adwords_grouping,count:google_conversion_items[b].quantity});return a};this.sp_transaction_GTS=function(){var a=!1;if(document.getElementById("gts-order")){var b=function(a){return(a=document.getElementById(a))&&void 0!==typeof a.innerHTML?a.innerHTML:""};b("gts-o-id")&&(c.sp_track({sp_g:"t",orderid:b("gts-o-id"),aff_store:b("gts-o-domain"),total:b("gts-o-total"),currency:b("gts-o-currency"),tax:b("gts-o-tax-total"),
shipping:b("gts-o-shipping-total"),country:b("gts-o-country")}),a=!0);var e=function(a,b){if(!a||"undefined"===typeof(B?a.querySelectorAll:a.getElementsByClassName))return"";var c=B?a.querySelectorAll("."+b):a.getElementsByClassName(b);return c&&1===c.length?c[0].innerHTML:null},f=B?document.querySelectorAll(".gts-item"):document.getElementsByClassName("gts-item");if(f)for(var g=f.length-1;0<=g;g--)c.sp_track({sp_g:"tp",orderid:b("gts-o-id"),sku:e(f[g],"gts-i-prodsearch-id"),product:e(f[g],"gts-i-name"),
category:e(f[g],"gts-i-prodsearch-store-id"),price:e(f[g],"gts-i-price"),count:e(f[g],"gts-i-quantity")})}return a};this.sptobject_push=function(a){var b=[];b.push(a);c.sp_transaction_GA_like(b)};this.sp_initSPTasObject=function(){_spt=function(a){if("undefined"!==typeof a&&!(a instanceof Array)&&null!==a)return a;var b;try{a instanceof Array&&(b=a.slice(0))}catch(e){}return"undefined"!==typeof b&&b instanceof Array&&0<b.length?c.sp_transaction_GA_like(b):{push:function(a){try{c.sptobject_push(a)}catch(b){}}}}(_spt);
return!1};this.sp_transaction=function(){!ca&&!c.init()||"function"===typeof R&&R.call(c)||c.sp_initSPTasObject()||c.sp_transaction_GA_like(_gaq)||c.sp_transaction_AdWords()||c.sp_transaction_GTS()};this.setPlgReady=function(a){switch(a){case x[0]:q[0]=!0;break;case x[1]:q[1]=!0}};this.setCustomData=function(a){P=a};this.setMask=function(a){m=a};this.setSKU=function(a){w=a};this.setRetailer=function(a){J=a};"undefined"!==typeof _sptinit&&c.init(_sptinit);return{init:function(a,b,e,f,g){try{c.init({mask:a,
rsc_path:b,ga_tracker:e,account:f,sku:g})}catch(h){}},initO:function(a){try{c.init(a)}catch(b){}},setPlgReady:function(a){try{c.setPlgReady(a)}catch(b){}},track:function(a){try{c.sp_track(a)}catch(b){}},i2track:function(a){try{c.sp_track_i2(a)}catch(b){}},setCustomData:function(a){try{c.setCustomData(a)}catch(b){}},setRetailer:function(a){try{c.setRetailer(a)}catch(b){}},setSKU:function(a){try{c.setSKU(a)}catch(b){}},trackGAConversion:function(){try{c.sp_transaction()}catch(a){}}}},sptobject=new __sptobject(sptobject);
