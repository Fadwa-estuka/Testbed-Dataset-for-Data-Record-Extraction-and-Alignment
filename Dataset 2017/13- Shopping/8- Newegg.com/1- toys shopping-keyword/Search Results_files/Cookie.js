NEG.Module("Utility.Cookie",function(){var d={encode:function(a){for(var c=["#"],a=encodeURIComponent(a).replace(/_/g,"%5F"),b=0;b<c.length;b++)a=a.replace(encodeURIComponent(c[b]),c[b]);return a}},e={set:function(a,c,b){b=b||{};a=d.encode(a)+"="+d.encode(c);b.exp&&(a+=";expires="+(new Date(b.exp)).toGMTString());b.domain&&(a+=";domain="+b.domain);b.path&&(a+=";path="+b.path);b.secure&&(a+=";secure");document.cookie=a},get:function(a){a=d.encode(a);allCookieString=document.cookie;var c=(c=allCookieString.match(RegExp("\\b"+
a+"=([^;]*)")))&&c[1];return c?decodeURIComponent(c):""},remove:function(a){a&&e.set(a,null,{exp:new Date-1})}};return e});
