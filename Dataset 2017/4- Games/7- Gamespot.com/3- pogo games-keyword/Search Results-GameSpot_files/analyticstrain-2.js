!function(a){function b(a){a=k.extend({key:"_bts",expire:36e5},a),this.key=a.key,this.expire=a.expire,this.load(),this.id||(this.id=k.UUID()),this.save()}function c(a){if(a=a||{},this.key=a.key||"_bti",this.expire=a.expire||31536e6,this.props={bsin:""},this.load(),""===this.props.bsin&&"undefined"===this.props.app_member_id&&(this.props={bsin:""},!k.cookie.get("btIdentify"))){var b=31536e6;k.cookie.set("btIdentify",k.UUID(),b,!0)}this.save()}function d(){this.version=g,this.identity=new c,this.session=new b}function e(a){this.message=a,this.name="InvalidDataException"}function f(a,b){var c=0;if(!isFinite(a))throw new e("Invalid totalPurchaseAmount");if(!Array.isArray(b))throw new e("Invalid shoppingCartItems");b.forEach(function(a){c+=a.price*a.quantity}),c!=a&&j.log("Calculated total doesnt match the totalPurchaseAmount")}var g="2.11.0",h={debug:!1,api_events_host:"https://events.api.boomtrain.com",api_host:"https://api.boomtrain.com",use_xhr:window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest},i=window.console,j={log:function(){if(h.debug&&i)try{i.log.apply(i,arguments)}catch(a){k.each(arguments,function(a){i.log(a)})}},error:function(){if(h.debug&&i)try{i.log.apply(i,arguments)}catch(a){k.each(arguments,function(a){i.log(a)})}},critical:function(){if(i)try{i.log.apply(i,arguments)}catch(a){k.each(arguments,function(a){i.log(a)})}}},k={},l={},m=Array.prototype,n=Object.prototype,o=m.slice,p=n.toString,q=n.hasOwnProperty,r=m.forEach,s=Array.isArray,t=Object.keys,u=k.each=k.forEach=function(a,b,c){if(null==a)return a;if(r&&a.forEach===r)a.forEach(b,c);else if(a.length===+a.length){for(var d=0,e=a.length;e>d;d++)if(b.call(c,a[d],d,a)===l)return}else for(var f=k.keys(a),d=0,e=f.length;e>d;d++)if(b.call(c,a[f[d]],f[d],a)===l)return;return a};if(k.extend=function(a){return u(o.call(arguments,1),function(b){if(b)for(var c in b)a[c]=b[c]}),a},k.keys=function(a){if(!k.isObject(a))return[];if(t)return t(a);var b=[];for(var c in a)k.has(a,c)&&b.push(c);return b},k.isUndefined=function(a){return void 0===a},k.has=function(a,b){return q.call(a,b)},k.isArray=s||function(a){return"[object Array]"==p.call(a)},k.isObject=function(a){return a===Object(a)},k.isString=function(a){return"[object String]"==p.call(a)},k.isInteger=function(a){return Number(a)===a&&a%1===0},k.isEpoch=function(a){return/^(\d{10}|\d{13,})$/.test(a)},k.isISOString=function(a){return/^\d{4}-[01]\d-[0-3]/.test(a)},k.pick=function(a){if(null===a)return{};var b={},c=Object(a),d=o.call(arguments).slice(1);return k.each(d,function(a){c[a]&&(b[a]=c[a])}),b},k.compactObject=function(a){var b=Object(a);return k.each(b,function(a,c){a||delete b[c]}),b},k.JSONEncode=function(){return function(a){var b=a,c=function(a){var b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return b.lastIndex=0,b.test(a)?'"'+a.replace(b,function(a){var b=c[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'},d=function(a,b){var e="",f="    ",g=0,h="",i="",j=0,k=e,l=[],m=b[a];switch(m&&"object"==typeof m&&"function"==typeof m.toJSON&&(m=m.toJSON(a)),typeof m){case"string":return c(m);case"number":return isFinite(m)?String(m):"null";case"boolean":case"null":return String(m);case"object":if(!m)return"null";if(e+=f,l=[],"[object Array]"===p.apply(m)){for(j=m.length,g=0;j>g;g+=1)l[g]=d(g,m)||"null";return i=0===l.length?"[]":e?"[\n"+e+l.join(",\n"+e)+"\n"+k+"]":"["+l.join(",")+"]",e=k,i}for(h in m)q.call(m,h)&&(i=d(h,m),i&&l.push(c(h)+(e?": ":":")+i));return i=0===l.length?"{}":e?"{"+l.join(",")+k+"}":"{"+l.join(",")+"}",e=k,i}};return d("",{"":b})}}(),k.JSONDecode=function(){var a,b,c,d,e={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"	"},f=function(b){throw{name:"SyntaxError",message:b,at:a,text:c}},g=function(d){return d&&d!==b&&f("Expected '"+d+"' instead of '"+b+"'"),b=c.charAt(a),a+=1,b},h=function(){var a,c="";for("-"===b&&(c="-",g("-"));b>="0"&&"9">=b;)c+=b,g();if("."===b)for(c+=".";g()&&b>="0"&&"9">=b;)c+=b;if("e"===b||"E"===b)for(c+=b,g(),("-"===b||"+"===b)&&(c+=b,g());b>="0"&&"9">=b;)c+=b,g();return a=+c,isFinite(a)?a:void f("Bad number")},i=function(){var a,c,d,h="";if('"'===b)for(;g();){if('"'===b)return g(),h;if("\\"===b)if(g(),"u"===b){for(d=0,c=0;4>c&&(a=parseInt(g(),16),isFinite(a));c+=1)d=16*d+a;h+=String.fromCharCode(d)}else{if("string"!=typeof e[b])break;h+=e[b]}else h+=b}f("Bad string")},j=function(){for(;b&&" ">=b;)g()},k=function(){switch(b){case"t":return g("t"),g("r"),g("u"),g("e"),!0;case"f":return g("f"),g("a"),g("l"),g("s"),g("e"),!1;case"n":return g("n"),g("u"),g("l"),g("l"),null}f("Unexpected '"+b+"'")},l=function(){var a=[];if("["===b){if(g("["),j(),"]"===b)return g("]"),a;for(;b;){if(a.push(d()),j(),"]"===b)return g("]"),a;g(","),j()}}f("Bad array")},m=function(){var a,c={};if("{"===b){if(g("{"),j(),"}"===b)return g("}"),c;for(;b;){if(a=i(),j(),g(":"),Object.hasOwnProperty.call(c,a)&&f('Duplicate key "'+a+'"'),c[a]=d(),j(),"}"===b)return g("}"),c;g(","),j()}}f("Bad object")};return d=function(){switch(j(),b){case"{":return m();case"[":return l();case'"':return i();case"-":return h();default:return b>="0"&&"9">=b?h():k()}},function(e){var g;return c=e,a=0,b=" ",g=d(),j(),b&&f("Syntax error"),g}}(),k.utf8Encode=function(a){if(null===a||"undefined"==typeof a)return"";var b,c,d=a+"",e="",f=0;b=c=0,f=d.length;for(var g=0;f>g;g++){var h=d.charCodeAt(g),i=null;if(128>h)c++;else if(h>127&&2048>h)i=String.fromCharCode(h>>6|192,63&h|128);else if(55296!=(63488&h))i=String.fromCharCode(h>>12|224,h>>6&63|128,63&h|128);else{if(55296!=(64512&h))throw new RangeError("Unmatched trail surrogate at "+g);var j=d.charCodeAt(++g);if(56320!=(64512&j))throw new RangeError("Unmatched lead surrogate at "+(g-1));h=((1023&h)<<10)+(1023&j)+65536,i=String.fromCharCode(h>>18|240,h>>12&63|128,h>>6&63|128,63&h|128)}null!==i&&(c>b&&(e+=d.slice(b,c)),e+=i,b=c=g+1)}return c>b&&(e+=d.slice(b,f)),e},k.utf8Decode=function(a){var b=[],c=0,d=0,e=0;for(a+="";c<a.length;){d=255&a.charCodeAt(c),e=0,191>=d?(d=127&d,e=1):223>=d?(d=31&d,e=2):239>=d?(d=15&d,e=3):(d=7&d,e=4);for(var f=1;e>f;++f)d=d<<6|63&a.charCodeAt(f+c);4==e?(d-=65536,b.push(String.fromCharCode(55296|d>>10&1023),String.fromCharCode(56320|1023&d))):b.push(String.fromCharCode(d)),c+=e}return b.join("")},k.base64Encode=function(a){var b,c,d,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,m=0,n="",o=[];if(!a)return a;a=k.utf8Encode(a);do b=a.charCodeAt(l++),c=a.charCodeAt(l++),d=a.charCodeAt(l++),i=b<<16|c<<8|d,e=i>>18&63,f=i>>12&63,g=i>>6&63,h=63&i,o[m++]=j.charAt(e)+j.charAt(f)+j.charAt(g)+j.charAt(h);while(l<a.length);switch(n=o.join(""),a.length%3){case 1:n=n.slice(0,-2)+"==";break;case 2:n=n.slice(0,-1)+"="}return n},k.base64Decode=function(a){var b,c,d,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,m=0,n=[];if(!a)return a;a+="";do e=j.indexOf(a.charAt(l++)),f=j.indexOf(a.charAt(l++)),g=j.indexOf(a.charAt(l++)),h=j.indexOf(a.charAt(l++)),i=e<<18|f<<12|g<<6|h,b=i>>16&255,c=i>>8&255,d=255&i,64==g?n[m++]=String.fromCharCode(b):64==h?n[m++]=String.fromCharCode(b,c):n[m++]=String.fromCharCode(b,c,d);while(l<a.length);return k.utf8Decode(n.join(""))},k.UUID=function(){var a=(new Date).getTime(),b="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var c=(a+16*Math.random())%16|0;return a=Math.floor(a/16),("x"==b?c:7&c|8).toString(16)});return b},k.md5=function(){"use strict";function a(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function b(a,b){return a<<b|a>>>32-b}function c(c,d,e,f,g,h){return a(b(a(a(d,c),a(f,h)),g),e)}function d(a,b,d,e,f,g,h){return c(b&d|~b&e,a,b,f,g,h)}function e(a,b,d,e,f,g,h){return c(b&e|d&~e,a,b,f,g,h)}function f(a,b,d,e,f,g,h){return c(b^d^e,a,b,f,g,h)}function g(a,b,d,e,f,g,h){return c(d^(b|~e),a,b,f,g,h)}function h(b,c){b[c>>5]|=128<<c%32,b[(c+64>>>9<<4)+14]=c;var h,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(h=0;h<b.length;h+=16)i=m,j=n,k=o,l=p,m=d(m,n,o,p,b[h],7,-680876936),p=d(p,m,n,o,b[h+1],12,-389564586),o=d(o,p,m,n,b[h+2],17,606105819),n=d(n,o,p,m,b[h+3],22,-1044525330),m=d(m,n,o,p,b[h+4],7,-176418897),p=d(p,m,n,o,b[h+5],12,1200080426),o=d(o,p,m,n,b[h+6],17,-1473231341),n=d(n,o,p,m,b[h+7],22,-45705983),m=d(m,n,o,p,b[h+8],7,1770035416),p=d(p,m,n,o,b[h+9],12,-1958414417),o=d(o,p,m,n,b[h+10],17,-42063),n=d(n,o,p,m,b[h+11],22,-1990404162),m=d(m,n,o,p,b[h+12],7,1804603682),p=d(p,m,n,o,b[h+13],12,-40341101),o=d(o,p,m,n,b[h+14],17,-1502002290),n=d(n,o,p,m,b[h+15],22,1236535329),m=e(m,n,o,p,b[h+1],5,-165796510),p=e(p,m,n,o,b[h+6],9,-1069501632),o=e(o,p,m,n,b[h+11],14,643717713),n=e(n,o,p,m,b[h],20,-373897302),m=e(m,n,o,p,b[h+5],5,-701558691),p=e(p,m,n,o,b[h+10],9,38016083),o=e(o,p,m,n,b[h+15],14,-660478335),n=e(n,o,p,m,b[h+4],20,-405537848),m=e(m,n,o,p,b[h+9],5,568446438),p=e(p,m,n,o,b[h+14],9,-1019803690),o=e(o,p,m,n,b[h+3],14,-187363961),n=e(n,o,p,m,b[h+8],20,1163531501),m=e(m,n,o,p,b[h+13],5,-1444681467),p=e(p,m,n,o,b[h+2],9,-51403784),o=e(o,p,m,n,b[h+7],14,1735328473),n=e(n,o,p,m,b[h+12],20,-1926607734),m=f(m,n,o,p,b[h+5],4,-378558),p=f(p,m,n,o,b[h+8],11,-2022574463),o=f(o,p,m,n,b[h+11],16,1839030562),n=f(n,o,p,m,b[h+14],23,-35309556),m=f(m,n,o,p,b[h+1],4,-1530992060),p=f(p,m,n,o,b[h+4],11,1272893353),o=f(o,p,m,n,b[h+7],16,-155497632),n=f(n,o,p,m,b[h+10],23,-1094730640),m=f(m,n,o,p,b[h+13],4,681279174),p=f(p,m,n,o,b[h],11,-358537222),o=f(o,p,m,n,b[h+3],16,-722521979),n=f(n,o,p,m,b[h+6],23,76029189),m=f(m,n,o,p,b[h+9],4,-640364487),p=f(p,m,n,o,b[h+12],11,-421815835),o=f(o,p,m,n,b[h+15],16,530742520),n=f(n,o,p,m,b[h+2],23,-995338651),m=g(m,n,o,p,b[h],6,-198630844),p=g(p,m,n,o,b[h+7],10,1126891415),o=g(o,p,m,n,b[h+14],15,-1416354905),n=g(n,o,p,m,b[h+5],21,-57434055),m=g(m,n,o,p,b[h+12],6,1700485571),p=g(p,m,n,o,b[h+3],10,-1894986606),o=g(o,p,m,n,b[h+10],15,-1051523),n=g(n,o,p,m,b[h+1],21,-2054922799),m=g(m,n,o,p,b[h+8],6,1873313359),p=g(p,m,n,o,b[h+15],10,-30611744),o=g(o,p,m,n,b[h+6],15,-1560198380),n=g(n,o,p,m,b[h+13],21,1309151649),m=g(m,n,o,p,b[h+4],6,-145523070),p=g(p,m,n,o,b[h+11],10,-1120210379),o=g(o,p,m,n,b[h+2],15,718787259),n=g(n,o,p,m,b[h+9],21,-343485551),m=a(m,i),n=a(n,j),o=a(o,k),p=a(p,l);return[m,n,o,p]}function i(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(255&a[b>>5]>>>b%32);return c}function j(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function k(a){return i(h(j(a),8*a.length))}function l(a,b){var c,d,e=j(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=h(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=h(f.concat(j(b)),512+8*b.length),i(h(g.concat(d),640))}function m(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(15&b>>>4)+d.charAt(15&b);return e}function n(a){return unescape(encodeURIComponent(a))}function o(a){return k(n(a))}function p(a){return m(o(a))}function q(a,b){return l(n(a),n(b))}function r(a,b){return m(q(a,b))}function s(a,b,c){return b?c?q(b,a):r(b,a):c?o(a):p(a)}return s}(),k.cookie={get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return decodeURIComponent(e.substring(b.length,e.length))}return null},parse:function(a){var b;try{b=k.JSONDecode(k.cookie.get(a))||{}}catch(c){j.error("cant parse:",c)}return b},set:function(a,b,c,d,e){var f="",g="",h="";if(d){var i=document.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i),j=i?i[0]:"";f=j?"; domain=."+j:""}if(c){var k=new Date;k.setTime(k.getTime()+c),g="; expires="+k.toGMTString()}e&&(h="; secure"),document.cookie=a+"="+encodeURIComponent(b)+g+"; path=/"+f+h},remove:function(a,b){k.cookie.set(a,"",-1,b)}},k.buildQueryString=function(a){var b,c,d=[];return k.each(a,function(a,e){a&&(b=encodeURIComponent(e),c=encodeURIComponent(a.toString()),d[d.length]=b+"="+c)}),d.join("&")},k.parseQueryString=function(a){a=a||window.location.search.substring(1);var b={};return k.each(a.split("&"),function(a){var c=a.split("=");b[decodeURIComponent(c[0])]=decodeURIComponent(c[1])}),b},k.getAllElementsWithAttribute=function(a){for(var b=[],c=document.getElementsByTagName("*"),d=0,e=c.length;e>d;d++)c[d].getAttribute(a)&&b.push(c[d]);return b},k.parseMeta=function(a,b){b=b||"property";for(var c=document.getElementsByTagName("meta"),d={},e=c.length-1;e>=0;e--){var f=c[e].getAttribute&&c[e].getAttribute(b);f&&f.match(a)&&(d[f.replace(a,"")]=c[e].getAttribute("content"))}return d},k.parseOGP=function(){return k.parseMeta("og:")},k.parseTwitter=function(){return k.parseMeta("twitter:","name")},k.parseBT=function(){return k.parseMeta("bt:")},k.parseBasicMeta=function(){return{url:function(){for(var a,b=document.getElementsByTagName("link"),c=b.length-1;c>=0;c--)if(a=b[c].getAttribute("rel"),"canonical"===a)return b[c].getAttribute("href")}()}},k.parseSchema=function(){for(var a=k.getAllElementsWithAttribute("itemprop"),b={},c=a.length-1;c>=0;c--)b[a[c].getAttribute("itemprop")]=a[c].textContent||a[c].innerText||a[c].getAttribute("content");return b},k.resolveRelativeUrl=function(a){var b=document.createElement("div");return b.innerHTML="<a></a>",b.firstChild.href=a,b.innerHTML=b.innerHTML,b.firstChild.href},b.prototype.load=function(){var a=k.cookie.get(this.key);a&&(this.id=a)},b.prototype.save=function(){k.cookie.set(this.key,this.id,this.expire,!0)},b.prototype.remove=function(){k.cookie.remove(this.key,!1),k.cookie.remove(this.key,!0)},c.prototype.set=function(a,b){this.props[a]=b},c.prototype.replace=function(a){return k.isObject(a)?void(this.props=k.extend({},a)):j.error("Identity properties must be an object")},c.prototype.load=function(){var a=k.cookie.parse(this.key);a&&this.replace(a)},c.prototype.save=function(){k.cookie.set(this.key,k.JSONEncode(this.props),this.expire,!0)},c.prototype.remove=function(){k.cookie.remove(this.key,!1),k.cookie.remove(this.key,!0)},d.prototype.initialize=function(a,b){return a?(b=b||{},h=k.extend(h,b),this.app=a,this._upgrade(),void this._eatQueue(this._queue)):j.critical(new Error("Must provide an app id to _bt.initialize"))},d.prototype.identify=function(a,b){b||"function"!=typeof a||(b=a,a=null);var c={};k.isObject(a)?c=a:(k.isString(a)||k.isInteger(a))&&(c={app_member_id:String(a)});for(var d in c)"bsin"!==d&&"app_member_id"!==d&&"new_bsin"!==d&&delete c[d];c.new_bsin&&c.new_bsin===this.identity.props.bsin&&delete c.new_bsin;var e=k.cookie.get("btIdentify");k.isInteger(a)&&e&&!c.bsin&&!c.new_bsin&&(c.btIdentify=e);var f=this,g=h.api_host+"/identify/resolve",i={cookie:k.extend({},this.identity.props,k.compactObject({app_member_id:c.app_member_id})),querystring:k.extend(k.compactObject({bsin:c.new_bsin}),this._getQuerystringIdentity())},j=k.JSONEncode(i),l=k.base64Encode(j);this._sendRequest(g,{data:l},function(a,d){if(a)return void("function"==typeof b&&b(a));if(d&&(f.identity.replace(d),f.identity.save()),c.new_bsin&&d&&!d.bsin&&!d.app_member_id){var e=31536e6;k.cookie.set("btIdentify",c.new_bsin,e,!0)}b&&b(a)})},d.prototype.alias=d.prototype.identify,d.prototype.setBsin=function(a,b){this.identify({new_bsin:a},b)},d.prototype.clear=function(a){this.identity.remove(),this.identity=new c,this.session.remove(),this.session=new b,this.identify(a)},d.prototype.track=function(a,b,c){b||(b={});var d=h.api_events_host+"/event/track",e=k.extend(b,{type:a,app:this.app,bsin:this.identity.props.bsin,app_member_id:this.identity.props.app_member_id,userId:this.identity.props.bsin||this.identity.props.app_member_id||k.cookie.get("btIdentify"),session:this.session.id});b.url||(e.href=window.location.href),!this.identity.props.bsin&&this.identity.props.app_member_id&&(e.userId=this.identity.props.app_member_id),this._sendRequest(d,e,c)},d.prototype.person={set:function(b,c){var d=h.api_host+"/persons",e=k.JSONEncode({$set:b,bsin:a.identity.props.bsin}),f=k.base64Encode(e);a._sendRequest(d,{data:f},function(a){c&&c(a)})}},d.prototype.getApp=function(){return this.app},d.prototype.getCurrentId=function(){return this.identity.props.app_member_id||this.identity.props.bsin||k.cookie.get("btIdentify")},d.prototype._trackInitialView=function(a){var b=k.parseBT(),c=k.parseOGP(),d=k.parseTwitter(),e=k.parseSchema(),f=k.parseBasicMeta(),g=b.modDate||c["article:modified_time"]||e.dateModified,h=b.url||f.url||c.url||d.url,i=(b.type||c.type||"item").replace(/^og:/,"").replace(/[^A-za-z0-9_-]/g,"");h&&!/^http/.test(h)&&(h=k.resolveRelativeUrl(h));var j={id:b.id||(h?k.md5(h):void 0),url:h,model:i,autoTrack:!0};(k.isEpoch(g)||k.isISOString(g))&&(j.modDate=g),this.track("viewed",j,a)},d.prototype._sendRequest=function(a,b,c){if(a+="?"+k.buildQueryString(b),h.use_xhr){var d=new XMLHttpRequest;d.open("GET",a,!0),d.onreadystatechange=function(){if(4==d.readyState)if(200===d.status||201===d.status){if(c){var b=d.responseText;try{b=k.JSONDecode(d.responseText)}catch(e){j.error(e)}c(null,b)}}else{var f="cannot GET "+a+" ("+d.status+")";j.error("_bt HTTP error: "+f),c&&c(new Error(f))}},d.setRequestHeader("x-app-id",this.app),d.send()}else{a+="&callback="+(c?this._jsonpify(c):"_bt._noop"),/app=/.test(a)||(a+="&app="+this.app);var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.defer=!0,e.src=a;var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(e,f)}},d.prototype._jsonpify=function(a){this.callbacks||(this.callbacks={});var b="cb_"+Math.ceil(1e9*Math.random()),c=this.callbacks;return c[b]=function(){delete c[b],a.apply(this,[null].concat(o.call(arguments)))},"_bt.callbacks."+b},d.prototype._getQuerystringIdentity=function(){if(this._qsIdentity)return this._qsIdentity;var a={},b=k.pick(k.parseQueryString(),"bt_bsin","bt_user_id","bt_app_member_id","bt_email","bt_ee");return k.each(b,function(b,c){a[c.replace("bt_","")]=b}),a.user_id&&(a.app_member_id=a.user_id,delete a.user_id),this._qsIdentity=a,a},d.prototype._eatQueue=function(a){function b(a){return"function"==typeof m&&m.apply(this,arguments),a?j.error("_bt identify error: could not complete initial identify call"):(g(d,c),g(e,c),void g(f,c))}var c=this,d=[],e=[],f=[];k.each(a,function(a){if(a){var b=a[0];k.isArray(a)&&"setBsin"===b&&d.push(a),k.isArray(a)&&"identify"===b?d.push(a):k.isArray(a)&&"track"===b?e.push(a):f.push(a)}});var g=function(a,b){k.each(a,function(a){var b=a[0].split("."),c=b[0],d=this[c];2===b.length&&(d=d[b[1]]),d.apply(this,a.slice(1))},b)};d.length||d.push(["identify"]),!e.length&&h.autoTrack&&e.push(["_trackInitialView"]);var i=d.shift(),l=i.slice(1),m=l[l.length-1];l.push(b),this[i[0]].apply(this,l)},d.prototype._upgrade=function(){var a=k.cookie.get("btIdentify"),b=/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;a&&(b.test(a)||(this.identity.set("app_member_id",a),this.identity.save()),(!b.test(a)||this.identity.props.bsin)&&k.cookie.remove("btIdentify",!0))},d.prototype.trackPurchase=function(a,b,c,d){f(a,b),"undefined"==typeof c&&(c={}),purchaseDetails={LAST_PURCHASE:JSON.stringify({TOTAL:parseFloat(a),ITEMS:b,DATAFIELDS:c})},this.track("purchased",purchaseDetails,function(){var a=function(){};(d=d||a)()})},d.prototype.trackUpdateCart=function(a,b,c,d){numArgs=arguments.length,"function"==typeof arguments[numArgs-1]&&(d=arguments[numArgs-1],numArgs-=1),1===numArgs&&(b=a,a=0,c={},b.forEach(function(b){a+=b.price*b.quantity})),2===numArgs&&(c={}),""===b&&(b=[]),f(a,b),a=parseFloat(a),shoppingCartDetails={SHOPPING_CART:JSON.stringify({TOTAL:a,ITEMS:b,DATAFIELDS:c})},this.track("updated_cart",shoppingCartDetails,function(){var a=function(){};(d=d||a)()})},d.prototype.trackAccountSignup=function(b,c,d){if(""===b)throw new e("Missing uid");"undefined"==typeof c&&(c={}),k.cookie.set("bt-uid",b,v,!0),a.person.set({email:b,DATAFIELDS:JSON.stringify(c)},function(){a.track("started_membership",{DATAFIELDS:JSON.stringify(c)},function(){var a=function(){};(d=d||a)()})})},k.isUndefined(a)&&(a=[]),!k.cookie.get("_bti")&&!k.cookie.get("_bts")&&!k.cookie.get("btIdentify")){var v=31536e6;k.cookie.set("btIdentify",k.UUID(),v,!0)}var w=a,x=w.shift();a=window._bt=new d,a._queue=w,k.each(window.location.search.substring(1).split("&"),function(b){var c=b.split("="),d=c[0];c[1];if(/^bt_/.test(d)&&"bt_bsin"!==d&&"bt_app_member_id"!==d&&"bt_user_id"!==d&&"bt_email"!==d&&"bt_ee"!==d){var e=d.replace("bt_","");if(!a[e])return void j.error("_bt: "+d+" is invalid. `_bt."+e+"` does not exist.");try{var f=k.JSONDecode(k.base64Decode(decodeURIComponent(c[1])))}catch(g){j.critical("Could not parse "+d+" value. Should be a base64 encoded JSON string.")}k.isArray(f)?a._queue.push([e].concat(f)):k.isObject(f)&&"alias"===e&&a._queue.push(["setBsin",f.userId])}}),x&&"initialize"===x[0]&&a[x[0]].apply(a,x.slice(1))}(window._bt);