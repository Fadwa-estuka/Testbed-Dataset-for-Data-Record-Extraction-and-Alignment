(function(r){var b={P:1500,H:"300x250 300x600 300x1050 300x50 320x50 320x100 728x90 160,600 120x600 970x250 970x90".split(" "),B:!1,a:{},s:[],R:{},F:!1,A:!1,C:function(){function c(a){for(var c="",q=[],d=a.l.getSizes(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight),k=0;k<d.length;k++)c=d[k].getWidth()+"x"+d[k].getHeight(),-1!=b.H.indexOf(c)&&q.push(c);q=q.join(",");a.sizes=q;""===
q?(b.log(a,"ineligible sizes - we dont support the sizes for this ad","body"),b.log(a,"disabled - this unit is disabled for cypher","body"),a.b.disabled=!0):(b.log(a,"ad unit enabled - "+a.m,"body"),a.b.disabled=!1)}b.c.f.pubads().addEventListener("slotRenderEnded",function(a){a=a.slot.getSlotElementId();b.a.hasOwnProperty(a)&&!b.a[a].b.disabled&&(a=b.a[a],a.b.N=!0,a.b.o=null,b.w(a),b.log(a,"untargeted - Sonobi targeting has been removed from this ad unit","body"))});var d=b.c.f.defineSlot;b.c.f.defineSlot=
function(){var a={m:arguments[0],u:arguments[2],b:{"new":!0,pending:null,displayed:null,fetched:null,refreshed:null,targeted:null,disabled:!1}},n=d.apply(this,arguments);a.l=n;var q=n.defineSizeMapping;n.defineSizeMapping=function(d){b.log(a,"SizeMapping set adUnit ","body");q.call(this,d);c(a);return this};c(a);b.a[a.u]=a;b.log(a,"new - ad unit created","body");var l=n.fetchStarted;n.fetchStarted=function(a,b){return function(){l.apply(b.l,arguments);b.b.I=!0;a.log(b,"fetched - ad call has been made for this ad unit",
"body")}}(b,a);return n};var a=b.c.f.enableServices;b.D=!1;b.c.f.enableServices=function(){b.log(null,"enableServices called","body");if(b.D)return a.apply(this,arguments);b.D=!0;for(var c in b.a)b.a[c].b["new"]&&!b.a[c].b.disabled&&(b.a[c].b["new"]=!1,b.a[c].b.j=!0,b.log(b.a[c],"pending - trinity request has started for this unit","body"));b.v(b.a,function(a){b.F?b.A?b.log(null,"Single Request, Disable Initial Load - Slots will only fetch after call to refresh for each one...","body"):b.log(null,
"Single Request - All slots will be fetched after the first call to display...","body"):b.log(null,"Multi Request","body");for(var c in a)null!=b.a[c].b.h&&(b.log(a[c],"display - This element has been marked as displayable","body"),b.a[c].b.h.apply(b.c.f)),null!=b.a[c].b.i&&(b.log(a[c],"refresh - This element has been refreshed","body"),b.a[c].b.i())});return a.apply(this,arguments)};var e=b.c.g.enableSingleRequest;b.c.g.enableSingleRequest=function(){b.log(null,"enableSingleRequest called","body");
var a=e.apply(this,arguments);return b.F=a};var f=b.c.g.disableInitialLoad;b.c.g.disableInitialLoad=function(){b.log(null,"disableInitialLoad called","body");b.A=!0;return f.apply(this,arguments)};var h=b.c.f.display;b.c.f.display=function(){var a=arguments,c=arguments[0];if(b.a.hasOwnProperty(c)){if(b.a[c].b.disabled&&!b.K())return b.log(null,"display initiated for non-cypher slot "+c,"body"),h.apply(this,a);b.a[c].b.h=h.bind(this,a[0]);b.a[c].b.N||b.a[c].b.o?b.a[c].b.h.apply(b.c.f):b.a[c].b["new"]&&
!b.a[c].b.disabled&&(b.a[c].b["new"]=!1,b.a[c].b.j=!0,b.log(b.a[c],"pending - trinity request has started for this unit","body"),a={},a[c]=b.a[c],b.v(a,function(a){for(var c in a)null!=b.a[c].b.h&&(b.log(a[c],"display - This element has been marked as displayable","body"),b.a[c].b.h.apply(b.c.f)),null!=b.a[c].b.i&&(b.log(a[c],"refresh - This element has been refreshed","body"),b.a[c].b.i())}))}};var m=b.c.g.refresh;b.c.g.refresh=function(){var a={};if(0<arguments.length)if("[object Array]"===Object.prototype.toString.call(arguments[0]))for(var c=
0,d;c<arguments[0].length;c++)d=arguments[0][c],d=d.getSlotElementId(),a[d]=b.a[d];else d=arguments[0].getSlotElementId(),a[d]=b.a[d];else a=b.a;var c={},l;for(l in a)b.a[l].b.i=m.bind(b.c.g,[b.a[l].l]),null!=a[l].b.o?(1==a[l].b.I&&b.log(a[l],"ad refreshed","body"),null!=a[l].b.h?b.log(a[l],"ad refreshed, and fetched","body"):b.log(a[l],"ad refreshed without first calling display","body"),b.a[l].b.i()):null==b.a[l].b.j&&(c[l]=b.a[l],b.a[l].b.j=!0);0!=Object.keys(c).length&&b.v(c,function(a){for(var c in a)b.a[c].b.i(),
b.log(a[c],"ad refreshed after new trinity","body")})}},v:function(c,d){var a=b.J(c);"{}"!==a?b.M("//apex.go.sonobi.com/trinity.js?key_maker="+a+"&s="+Math.floor(1E5*Math.random()),function(){for(var a in c)b.O(b.a[a]),b.a[a].b.o=!0,b.a[a].b.j=null,b.a[a].b.disabled||b.log(c[a],"targeted - this unit now has Sonobi key-value targeting","body");d(c)}):d(c)},J:function(c){var d={},a;for(a in c)b.a[a].b.disabled||b.a[a].b.o||(d[b.a[a].m+"|"+a]=b.a[a].sizes);return JSON.stringify(d)},L:function(){b.log(null,
"Morpheus Cypher Initialized","header");b.c={};window.googletag=window.googletag||{};b.c.f=window.googletag;b.c.f.cmd=b.c.f.cmd||[];null!=googletag.cmd.length?(b.log(null,"Cypher is probably loaded syncrhonously","header"),b.log(null,"GPT is probably loaded asyncrhonously","header"),b.log(null,"Cypher is observing the GPT cmd queue","body"),b.c.f.cmd.unshift(function(){b.c.g=googletag.pubads();b.C()})):("-1"!=function(){return b.c.f.getEventLog().getAllEvents().map(function(b){return b.getMessage().getMessageId()})}().indexOf(8)&&
b.log(null,"GPT ALREADY FULLY LOADED!! CYPHER WON'T WORK NOW!!","header"),b.c.f.cmd.push(function(){b.c.g=googletag.pubads();b.C()}))},M:function(c,d){if(null!=c){null==d&&(d=function(){});try{var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src=c;if(d!=function(){}){var e=setTimeout(function(){try{d()}catch(a){}d=function(){}},b.P);a.readyState?a.onreadystatechange=function(){clearTimeout(e);if("loaded"==a.readyState||"complete"==a.readyState){a.onreadystatechange=null;
try{d()}catch(b){}d=function(){}}}:a.onload=function(){clearTimeout(e);try{d()}catch(a){}d=function(){}}}var f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}catch(h){}}},w:function(b){b=b.l;var d=b.getTargetingMap(),a={},e=!1,f;for(f in d)"sbi"===f.substr(0,3)?e=!0:a[f]=d[f];if(e){b.clearTargeting();for(var h in a)b.setTargeting(h,a[h])}},O:function(c){if("undefined"!=typeof window.sbi_trinity){b.w(c);var d=c.l;c=c.m+"|"+c.u;if(c in window.sbi_trinity)for(var a in window.sbi_trinity[c])d.setTargeting(a,
[""+window.sbi_trinity[c][a]]);b.c.g.setTargeting("sbi_dc",window.sbi_dc)}},outputCypherLog:function(){b.B=!0;for(var c=0;c<b.s.length;c++){var d=b.s[c].slice();d.unshift("%c%s: %s - %s");console.debug.apply(console,d)}},log:function(c,d,a){c=null!=c?c.m+"|"+c.u:"Note";null==a&&(a="");var e="";switch(a){case "header":e="color: black;font-size: 20px;-webkit-text-fill-color: red;-webkit-text-stroke-width: 1px;-webkit-text-stroke-color: black;";break;case "body":e="color: #0D4F8B;font-size: 16px;";break;
default:e=""}a=Date.now();b.s.push([e,a,c,d]);b.B&&console.debug("%c%s: %s - %s",e,a,c,d)},outputDFPLog:function(){for(var c=0,d=b.c.f.getEventLog().getAllEvents();c<d.length;c++){var a=d[c].getMessage(),a=b.G(a.getMessageId(),a.getMessageArgs());b.log(null,a,"body")}},G:function(b,d){if(null==d)d=[null,null,null];else if(3>d.length)for(;3>d.length;)d.push(null);return{1:function(){return"Page load complete"},2:function(a){return"Created slot: "+a[0]},3:function(a){return"Fetching ad for slot: "+
a[0]},4:function(a){return"Receiving ad for slot: "+a[0]},5:function(a){return"Rendering ad for slot: "+a[0]},6:function(a){return"Completed rendering ad for slot: "+a[0]},8:function(){return"Google service JS loaded"},9:function(a){return"Setting attribute "+(a[0]+(" with value "+(a[1]+(" for slot "+a[2]))))},10:function(a){return"Setting attribute "+(a[0]+(" with value "+(a[1]+(" for slot "+(a[2]+" after its contents have been loaded")))))},12:function(a){return"Service "+(a[0]+(" is already associated with slot "+
a[1]))},13:function(a){return"Error in processing size mapping: "+a[0]},14:function(a){return"Setting slot level ad category exclusion: "+a[0]},16:function(){return"Clearing all slot level ad category exclusions"},17:function(a){return"Setting targeting attribute "+(a[0]+(" with value "+(a[1]+(" for slot "+a[2]))))},19:function(){return"Clearing slot targeting."},20:function(a){return"Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: "+
a[0]},21:function(a){return"Unable to write to slot "+(a[0]+". It has not yet been rendered.")},22:function(a){return"Unable to find the div container with id "+(a[0]+(" for slot "+a[1]))},23:function(a){return"Slot "+(a[0]+(" does not have a container div with id: "+(a[1]+".")))},26:function(a){return"Unknown div id in display(): "+(a[0]+".")},27:function(a){return"Div "+(a[0]+" is not mapped to a known ad unit.")},28:function(a){return"Div element "+(a[0]+" is already associated with another slot.")},
30:function(a){return"Exception when invoking function: "+a[0]},31:function(a){return"Invoked queued function. Total: "+(a[0]+(". Errors: "+(a[1]+".")))},34:function(){return"Size mapping is null because invalid mappings were added"},35:function(a){return"Created service: "+a[0]},36:function(a){return"Setting attribute "+(a[0]+(" with value "+(a[1]+(" for service "+a[2]))))},37:function(a){return"Unable to set attribute "+(a[0]+(" with value "+(a[1]+(" for service "+a[2]))))},38:function(){return"Service is already enabled"},
39:function(a){return"Failed to enable service: "+a[0]},40:function(a){return'Associated service "'+(a[0]+('" with slot "'+(a[1]+'".')))},41:function(){return"The master ad size specified is invalid."},42:function(){return"Persistent roadblock requested, but ad slots are incorrectly configured. All ad slots on page must have both pubads and companionAds services attached. Skipping refresh."},43:function(a){return a[0]+(" service is not enabled, cannot use "+(a[1]+" feature."))},44:function(){return"Pubads service is not enabled, cannot check whether slot is a persistent roadblock. Content writing allowed."},
45:function(a){return"Cannot find slot with id "+(a[0]+".")},46:function(a){return"Fetching "+(a[0]+" implementation")},47:function(a){return"Unable to fetch "+(a[0]+" implementation")},48:function(a){return a[0]+" implementation fetched."},49:function(){return"Bad call to check pending refreshes before implementation is loaded."},50:function(){return"Calling fillslot."},52:function(){return"Attempting to display ad in sync mode after page load is complete."},53:function(a){return'Delaying rendering of ad slot "'+
(a[0]+('". Pending loading of the '+(a[1]+" implementation")))},54:function(a){return'Delaying passback of ad slot "'+(a[0]+('". Pending loading ofthe '+(a[1]+" implementation")))},55:function(a){return'Skipping rendering of slot "'+(a[0]+'" due to missing GPT implementation')},98:function(a){return'Unable to process ad unit path for slot "'+a[0]},56:function(a){return'Unable to process name for slot "'+a[0]},57:function(a){return'Ignoring unknown pubads attribute "'+(a[0]+('" with value "'+(a[1]+
'"')))},58:function(a){return'Ignoring unknown pubads attribute "'+(a[0]+('" with value "'+(a[1]+('" for slot "'+(a[2]+'"')))))},59:function(a){return"Cookie options must be an integer number, 0 or greater. Ignoring value: "+a[0]},95:function(a){return"Correlator must be a positive integer number.Ignoring value: "+a[0]},60:function(a){return'Ignoring call to "'+(a[0]+'" since the service is already enabled.')},61:function(a){return'Ignoring call "'+(a[0]+('" since the '+(a[1]+" service is already enabled.")))},
62:function(a){return'Ignoring call "'+(a[0]+('" since the service is already enabled. Not setting id: '+a[1]))},63:function(a){return"Using "+(a[0]+" mode to fetch ads.")},64:function(a){return"Setting "+(a[0]+(" to "+(a[1]+".")))},65:function(a){return"Slots specified, but no valid slots found. "+(a[0]+" aborted.")},66:function(){return"The ads cannot be refreshed because the GPT implementation Javascript is not yet loaded."},67:function(){return"The no_refresh state cannot be cleared because the GPT implementation Javascript is not yet loaded."},
68:function(){return"The slots content cannot be cleared because the GPT implementation Javascript is not yet loaded."},69:function(){return"Refresh pushed on pending list until GPT implementation Javascript loads."},70:function(){return"Refreshing ads."},71:function(){return"Clearing slot contents."},72:function(){return"Clearing no_refresh state."},73:function(a){return a[0]+" must be an array."},74:function(a){return a[0]+" must be a boolean."},75:function(a){return a[0]+" must be a number."},
76:function(a){return a[0]+" must be a string."},77:function(a){return'Location "'+(a[0]+('" is longer than '+(a[1]+('.Truncating it to "'+(a[2]+'"')))))},78:function(a){return"Enabling collapsing of containers when there is no ad content. Collapse before ad fetch: "+(a[0]+".")},79:function(){return"Ignoring subsequent call to set div collapse mode (already set)."},80:function(a){return"Slot object at position "+(a[0]+" is of incorrect type.")},82:function(a){return'Clearing targeting attribute "'+
(a[0]+('" for service "'+(a[1]+'"')))},84:function(a){return'Cannot find targeting attribute "'+(a[0]+('" for service "'+(a[1]+'"')))},85:function(a){return"Setting page level ad category exclusion: "+a[0]},87:function(){return"Clearing all page level ad category exclusions"},88:function(a){return"Setting targeting attribute "+(a[0]+(" with value "+(a[1]+(" for service "+a[2]))))},90:function(a){return"Child directed treatment tag value must be an integer number. Valid values are 0 and 1. Ignoring value: "+
a[0]},97:function(a){return"Kids friendly ads tag value must be an integer number. Valid values are 0 and 1. Ignoring value: "+a[0]},92:function(a){return'Exception thrown in event listener: "'+(a[0]+'"')},93:function(a){return"Failed to register listener. Unknown event type: "+a[0]},94:function(a){return"Unknown service passed to addService() method for slot: "+(a[0]+".")},96:function(a){return"Invalid arguments: "+(a[0]+("("+(a[1]+")")))}}[b](d)},enableReactiveSizes:function(){b.log(null,"Deprecated - sbi_morpheus.enableReactiveSizes",
"body")},callOperator:function(){b.log(null,"Deprecated - sbi_morpheus.callOperator","body")},register:function(){b.log(null,"Deprecated - sbi_morpheus.register","body")},K:function(){for(var c in b.a)if(b.a[c].b.j)return!0;return!1}};window[r]=b;"object"!=typeof JSON&&(JSON={});(function(){function c(a){return 10>a?"0"+a:a}function d(a){return f.lastIndex=0,f.test(a)?'"'+a.replace(f,function(a){var b=r[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+
a+'"'}function a(b,c){var k,f,e,t,p,u=h,g=c[b];switch(g&&"object"==typeof g&&"function"==typeof g.toJSON&&(g=g.toJSON(b)),"function"==typeof n&&(g=n.call(c,b,g)),typeof g){case "string":return d(g);case "number":return isFinite(g)?g+"":"null";case "boolean":case "null":return g+"";case "object":if(!g)return"null";if(h+=m,p=[],"[object Array]"===Object.prototype.toString.apply(g)){t=g.length;for(k=0;t>k;k+=1)p[k]=a(k,g)||"null";return e=0===p.length?"[]":h?"[\n"+h+p.join(",\n"+h)+"\n"+u+"]":"["+p.join(",")+
"]",h=u,e}if(n&&"object"==typeof n)for(t=n.length,k=0;t>k;k+=1)"string"==typeof n[k]&&(f=n[k],e=a(f,g),e&&p.push(d(f)+(h?": ":":")+e));else for(f in g)Object.prototype.hasOwnProperty.call(g,f)&&(e=a(f,g),e&&p.push(d(f)+(h?": ":":")+e));return e=0===p.length?"{}":h?"{\n"+h+p.join(",\n"+h)+"\n"+u+"}":"{"+p.join(",")+"}",h=u,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(b.valueOf())?b.getUTCFullYear()+"-"+c(b.getUTCMonth()+1)+"-"+c(b.getUTCDate())+"T"+
c(b.getUTCHours())+":"+c(b.getUTCMinutes())+":"+c(b.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return b.valueOf()});var e,f,h,m,r,n;"function"!=typeof JSON.stringify&&(f=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,r={"\b":"\\b","    ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(b,c,d){var e;if(h="",m="","number"==
typeof d)for(e=0;d>e;e+=1)m+=" ";else"string"==typeof d&&(m=d);if(n=c,c&&"function"!=typeof c&&("object"!=typeof c||"number"!=typeof c.length))throw Error("JSON.stringify");return a("",{"":b})});"function"!=typeof JSON.parse&&(e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,JSON.parse=function(a,b){function c(a,d){var e,f,g=a[d];if(g&&"object"==typeof g)for(e in g)Object.prototype.hasOwnProperty.call(g,e)&&(f=c(g,e),void 0!==f?g[e]=f:delete g[e]);
return b.call(a,d,g)}var d;if(a+="",e.lastIndex=0,e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),"function"==typeof b?c({"":d},""):d;throw new SyntaxError("JSON.parse");})})();Object.keys||(Object.keys=function(){var b=Object.prototype.hasOwnProperty,
d=!{toString:null}.propertyIsEnumerable("toString"),a="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),e=a.length;return function(f){if("object"!==typeof f&&("function"!==typeof f||null===f))throw new TypeError("Object.keys called on non-object");var h=[],m;for(m in f)b.call(f,m)&&h.push(m);if(d)for(m=0;m<e;m++)b.call(f,a[m])&&h.push(a[m]);return h}}());Function.prototype.bind||(Function.prototype.bind=function(b){function d(){return f.apply(this instanceof
a?this:b,e.concat(Array.prototype.slice.call(arguments)))}function a(){}if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),f=this;return a.prototype=this.prototype,d.prototype=new a,d});window[r].L()})("sbi_morpheus");
//7304: 2.0.9