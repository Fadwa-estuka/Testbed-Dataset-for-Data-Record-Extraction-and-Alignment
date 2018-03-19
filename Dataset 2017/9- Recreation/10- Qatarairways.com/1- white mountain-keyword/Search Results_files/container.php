var host = ("https:" == document.location.protocol ? "https://" : "http://");
var scripts = document.getElementsByTagName('script');
var index = scripts.length - 1;
var queryString="";
var strURL="";
for(count=0;count<=index;count++)
{
	var myScript = scripts[count];
	var src=myScript.src; 
	if(src.indexOf("www/delivery/container.php?cid=1814")>-1)
	{
	  strURL=src;
              queryString=myScript.src.replace(/^[^\?]+\??/,'');
	}
}


var regex = /[?&]([^=#]+)=([^&#]*)/g,
       url = strURL,
       params = {},
       match;
   while(match = regex.exec(url)) {
       params[match[1]] = decodeURIComponent(match[2]);
   }
//alert(params['getjson']);
//console.log(params);
params=JSON.parse(params['getjson']);
//console.log(params);

var stringval = String(params);
if(params['attribution']!='TYROORT'){
	var ae_parms_kv = params;
	(function() {
    var el_adv_id = "a3ba3409c8055f7f2a1b248c3bdabd3f";
    var scr = document.createElement("script");
    var host = "//d313lzv9559yp9.cloudfront.net";
    scr.type = "text/javascript";
    scr.async = true;
    scr.src = host + "/" + el_adv_id + ".js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(scr, s);
}());
}


if(params['attribution']=='TYROORT'){
	var ae_parms_kv = params;
 (function() {
    var el_adv_id = "a3ba3409c8055f7f2a1b248c3bdabd3f";
    var scr = document.createElement("script");
    var host = "//d313lzv9559yp9.cloudfront.net";
    scr.type = "text/javascript";
    scr.async = true;
    scr.src = host + "/" + el_adv_id + ".js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(scr, s);
}());
}
