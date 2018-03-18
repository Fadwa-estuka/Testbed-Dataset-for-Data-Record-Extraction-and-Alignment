//
// vendor/jquery/jquery-1.8.2.js
//
/*
 * jQuery JavaScript Library v1.8.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Sep 20 2012 21:13:05 GMT-0400 (Eastern Daylight Time)
 */
(function(bT,bR){var bg,aN,Q=bT.document,aq=bT.location,ar=bT.navigator,b=bT.jQuery,a=bT.$,w=Array.prototype.push,z=Array.prototype.slice,u=Array.prototype.indexOf,A=Object.prototype.toString,t=Object.prototype.hasOwnProperty,B=String.prototype.trim,ap=function(bZ,e){return new ap.fn.init(bZ,e,bg)
},v=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,x=/\S/,y=/\s+/,by=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bn=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,bv=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bF=/^[\],:{}\s]*$/,bE=/(?:^|:|,)(?:\s*\[)+/g,bG=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,bH=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,a7=/^-ms-/,aL=/-([\da-z])/gi,V=function(e,bZ){return(bZ+"").toUpperCase()
},R=function(){if(Q.addEventListener){Q.removeEventListener("DOMContentLoaded",R,false);ap.ready()}else{if(Q.readyState==="complete"){Q.detachEvent("onreadystatechange",R);
ap.ready()}}},q={};ap.fn=ap.prototype={constructor:ap,init:function(b4,e,b3){var b1,b0,b2,bZ;if(!b4){return this}if(b4.nodeType){this.context=this[0]=b4;
this.length=1;return this}if(typeof b4==="string"){if(b4.charAt(0)==="<"&&b4.charAt(b4.length-1)===">"&&b4.length>=3){b1=[null,b4,null]
}else{b1=bn.exec(b4)}if(b1&&(b1[1]||!e)){if(b1[1]){e=e instanceof ap?e[0]:e;bZ=(e&&e.nodeType?e.ownerDocument||e:Q);b4=ap.parseHTML(b1[1],bZ,true);
if(bv.test(b1[1])&&ap.isPlainObject(e)){this.attr.call(b4,e,true)}return ap.merge(this,b4)}else{b0=Q.getElementById(b1[2]);if(b0&&b0.parentNode){if(b0.id!==b1[2]){return b3.find(b4)
}this.length=1;this[0]=b0}this.context=Q;this.selector=b4;return this}}else{if(!e||e.jquery){return(e||b3).find(b4)}else{return this.constructor(e).find(b4)
}}}else{if(ap.isFunction(b4)){return b3.ready(b4)}}if(b4.selector!==bR){this.selector=b4.selector;this.context=b4.context}return ap.makeArray(b4,this)
},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return z.call(this)},get:function(e){return e==null?this.toArray():(e<0?this[this.length+e]:this[e])
},pushStack:function(e,bZ,b1){var b0=ap.merge(this.constructor(),e);b0.prevObject=this;b0.context=this.context;if(bZ==="find"){b0.selector=this.selector+(this.selector?" ":"")+b1
}else{if(bZ){b0.selector=this.selector+"."+bZ+"("+b1+")"}}return b0},each:function(bZ,e){return ap.each(this,bZ,e)},ready:function(e){ap.ready.promise().done(e);
return this},eq:function(e){e=+e;return e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)
},slice:function(){return this.pushStack(z.apply(this,arguments),"slice",z.call(arguments).join(","))},map:function(e){return this.pushStack(ap.map(this,function(bZ,b0){return e.call(bZ,b0,bZ)
}))},end:function(){return this.prevObject||this.constructor(null)},push:w,sort:[].sort,splice:[].splice};ap.fn.init.prototype=ap.fn;
ap.extend=ap.fn.extend=function(){var b5,b4,b6,bZ,b0,e,b7=arguments[0]||{},b2=1,b3=arguments.length,b1=false;if(typeof b7==="boolean"){b1=b7;
b7=arguments[1]||{};b2=2}if(typeof b7!=="object"&&!ap.isFunction(b7)){b7={}}if(b3===b2){b7=this;--b2}for(;b2<b3;b2++){if((b5=arguments[b2])!=null){for(b4 in b5){b6=b7[b4];
bZ=b5[b4];if(b7===bZ){continue}if(b1&&bZ&&(ap.isPlainObject(bZ)||(b0=ap.isArray(bZ)))){if(b0){b0=false;e=b6&&ap.isArray(b6)?b6:[]
}else{e=b6&&ap.isPlainObject(b6)?b6:{}}b7[b4]=ap.extend(b1,e,bZ)}else{if(bZ!==bR){b7[b4]=bZ}}}}}return b7};ap.extend({noConflict:function(e){if(bT.$===ap){bT.$=a
}if(e&&bT.jQuery===ap){bT.jQuery=b}return ap},isReady:false,readyWait:1,holdReady:function(e){if(e){ap.readyWait++}else{ap.ready(true)
}},ready:function(e){if(e===true?--ap.readyWait:ap.isReady){return}if(!Q.body){return setTimeout(ap.ready,1)}ap.isReady=true;
if(e!==true&&--ap.readyWait>0){return}aN.resolveWith(Q,[ap]);if(ap.fn.trigger){ap(Q).trigger("ready").off("ready")}},isFunction:function(e){return ap.type(e)==="function"
},isArray:Array.isArray||function(e){return ap.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)
},type:function(e){return e==null?String(e):q[A.call(e)]||"object"},isPlainObject:function(b1){if(!b1||ap.type(b1)!=="object"||b1.nodeType||ap.isWindow(b1)){return false
}try{if(b1.constructor&&!t.call(b1,"constructor")&&!t.call(b1.constructor.prototype,"isPrototypeOf")){return false}}catch(bZ){return false
}var b0;for(b0 in b1){}return b0===bR||t.call(b1,b0)},isEmptyObject:function(bZ){var e;for(e in bZ){return false}return true},error:function(e){throw new Error(e)
},parseHTML:function(bZ,e,b1){var b0;if(!bZ||typeof bZ!=="string"){return null}if(typeof e==="boolean"){b1=e;e=0}e=e||Q;if((b0=bv.exec(bZ))){return[e.createElement(b0[1])]
}b0=ap.buildFragment([bZ],e,b1?null:[]);return ap.merge([],(b0.cacheable?ap.clone(b0.fragment):b0.fragment).childNodes)},parseJSON:function(e){if(!e||typeof e!=="string"){return null
}e=ap.trim(e);if(bT.JSON&&bT.JSON.parse){return bT.JSON.parse(e)}if(bF.test(e.replace(bG,"@").replace(bH,"]").replace(bE,""))){return(new Function("return "+e))()
}ap.error("Invalid JSON: "+e)},parseXML:function(bZ){var b2,b1;if(!bZ||typeof bZ!=="string"){return null}try{if(bT.DOMParser){b1=new DOMParser();
b2=b1.parseFromString(bZ,"text/xml")}else{b2=new ActiveXObject("Microsoft.XMLDOM");b2.async="false";b2.loadXML(bZ)}}catch(b0){b2=bR
}if(!b2||!b2.documentElement||b2.getElementsByTagName("parsererror").length){ap.error("Invalid XML: "+bZ)}return b2},noop:function(){},globalEval:function(e){if(e&&x.test(e)){(bT.execScript||function(bZ){bT["eval"].call(bT,bZ)
})(e)}},camelCase:function(e){return e.replace(a7,"ms-").replace(aL,V)},nodeName:function(e,bZ){return e.nodeName&&e.nodeName.toLowerCase()===bZ.toLowerCase()
},each:function(b4,bZ,e){var b3,b0=0,b2=b4.length,b1=b2===bR||ap.isFunction(b4);if(e){if(b1){for(b3 in b4){if(bZ.apply(b4[b3],e)===false){break
}}}else{for(;b0<b2;){if(bZ.apply(b4[b0++],e)===false){break}}}}else{if(b1){for(b3 in b4){if(bZ.call(b4[b3],b3,b4[b3])===false){break
}}}else{for(;b0<b2;){if(bZ.call(b4[b0],b0,b4[b0++])===false){break}}}}return b4},trim:B&&!B.call("\uFEFF\xA0")?function(e){return e==null?"":B.call(e)
}:function(e){return e==null?"":(e+"").replace(by,"")},makeArray:function(e,bZ){var b1,b0=bZ||[];if(e!=null){b1=ap.type(e);if(e.length==null||b1==="string"||b1==="function"||b1==="regexp"||ap.isWindow(e)){w.call(b0,e)
}else{ap.merge(b0,e)}}return b0},inArray:function(bZ,e,b0){var b1;if(e){if(u){return u.call(e,bZ,b0)}b1=e.length;b0=b0?b0<0?Math.max(0,b1+b0):b0:0;
for(;b0<b1;b0++){if(b0 in e&&e[b0]===bZ){return b0}}}return -1},merge:function(e,b2){var b1=b2.length,bZ=e.length,b0=0;if(typeof b1==="number"){for(;
b0<b1;b0++){e[bZ++]=b2[b0]}}else{while(b2[b0]!==bR){e[bZ++]=b2[b0++]}}e.length=bZ;return e},grep:function(bZ,e,b1){var b4,b3=[],b0=0,b2=bZ.length;
b1=!!b1;for(;b0<b2;b0++){b4=!!e(bZ[b0],b0);if(b1!==b4){b3.push(bZ[b0])}}return b3},map:function(b0,bZ,e){var b6,b3,b5=[],b1=0,b4=b0.length,b2=b0 instanceof ap||b4!==bR&&typeof b4==="number"&&((b4>0&&b0[0]&&b0[b4-1])||b4===0||ap.isArray(b0));
if(b2){for(;b1<b4;b1++){b6=bZ(b0[b1],b1,e);if(b6!=null){b5[b5.length]=b6}}}else{for(b3 in b0){b6=bZ(b0[b3],b3,e);if(b6!=null){b5[b5.length]=b6
}}}return b5.concat.apply([],b5)},guid:1,proxy:function(b0,bZ){var b2,e,b1;if(typeof bZ==="string"){b2=b0[bZ];bZ=b0;b0=b2}if(!ap.isFunction(b0)){return bR
}e=z.call(arguments,2);b1=function(){return b0.apply(bZ,e.concat(z.call(arguments)))};b1.guid=b0.guid=b0.guid||ap.guid++;return b1
},access:function(b0,b3,b5,b8,bZ,b1,b7){var b2,e=b5==null,b4=0,b6=b0.length;if(b5&&typeof b5==="object"){for(b4 in b5){ap.access(b0,b3,b4,b5[b4],1,b1,b8)
}bZ=1}else{if(b8!==bR){b2=b7===bR&&ap.isFunction(b8);if(e){if(b2){b2=b3;b3=function(b9,ca,cb){return b2.call(ap(b9),cb)}}else{b3.call(b0,b8);
b3=null}}if(b3){for(;b4<b6;b4++){b3(b0[b4],b5,b2?b8.call(b0[b4],b4,b3(b0[b4],b5)):b8,b7)}}bZ=1}}return bZ?b0:e?b3.call(b0):b6?b3(b0[0],b5):b1
},now:function(){return(new Date()).getTime()}});ap.ready.promise=function(b1){if(!aN){aN=ap.Deferred();if(Q.readyState==="complete"){setTimeout(ap.ready,1)
}else{if(Q.addEventListener){Q.addEventListener("DOMContentLoaded",R,false);bT.addEventListener("load",ap.ready,false)}else{Q.attachEvent("onreadystatechange",R);
bT.attachEvent("onload",ap.ready);var b2=false;try{b2=bT.frameElement==null&&Q.documentElement}catch(b0){}if(b2&&b2.doScroll){(function bZ(){if(!ap.isReady){try{b2.doScroll("left")
}catch(b3){return setTimeout(bZ,50)}ap.ready()}})()}}}}return aN.promise(b1)};ap.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,bZ){q["[object "+bZ+"]"]=bZ.toLowerCase()
});bg=ap(Q);var ax={};function E(bZ){var e=ax[bZ]={};ap.each(bZ.split(y),function(b0,b1){e[b1]=true});return e}ap.Callbacks=function(b6){b6=typeof b6==="string"?(ax[b6]||E(b6)):ap.extend({},b6);
var b5,bZ,b0,b3,b2,b1,b4=[],b8=!b6.once&&[],e=function(b9){b5=b6.memory&&b9;bZ=true;b1=b3||0;b3=0;b2=b4.length;b0=true;for(;b4&&b1<b2;
b1++){if(b4[b1].apply(b9[0],b9[1])===false&&b6.stopOnFalse){b5=false;break}}b0=false;if(b4){if(b8){if(b8.length){e(b8.shift())
}}else{if(b5){b4=[]}else{b7.disable()}}}},b7={add:function(){if(b4){var ca=b4.length;(function b9(cb){ap.each(cb,function(cc,cd){var ce=ap.type(cd);
if(ce==="function"&&(!b6.unique||!b7.has(cd))){b4.push(cd)}else{if(cd&&cd.length&&ce!=="string"){b9(cd)}}})})(arguments);if(b0){b2=b4.length
}else{if(b5){b3=ca;e(b5)}}}return this},remove:function(){if(b4){ap.each(arguments,function(b9,ca){var cb;while((cb=ap.inArray(ca,b4,cb))>-1){b4.splice(cb,1);
if(b0){if(cb<=b2){b2--}if(cb<=b1){b1--}}}})}return this},has:function(b9){return ap.inArray(b9,b4)>-1},empty:function(){b4=[];
return this},disable:function(){b4=b8=b5=bR;return this},disabled:function(){return !b4},lock:function(){b8=bR;if(!b5){b7.disable()
}return this},locked:function(){return !b8},fireWith:function(ca,b9){b9=b9||[];b9=[ca,b9.slice?b9.slice():b9];if(b4&&(!bZ||b8)){if(b0){b8.push(b9)
}else{e(b9)}}return this},fire:function(){b7.fireWith(this,arguments);return this},fired:function(){return !!bZ}};return b7};
ap.extend({Deferred:function(bZ){var b2=[["resolve","done",ap.Callbacks("once memory"),"resolved"],["reject","fail",ap.Callbacks("once memory"),"rejected"],["notify","progress",ap.Callbacks("memory")]],b1="pending",b0={state:function(){return b1
},always:function(){e.done(arguments).fail(arguments);return this},then:function(){var b3=arguments;return ap.Deferred(function(b4){ap.each(b2,function(b7,b8){var b5=b8[0],b6=b3[b7];
e[b8[1]](ap.isFunction(b6)?function(){var b9=b6.apply(this,arguments);if(b9&&ap.isFunction(b9.promise)){b9.promise().done(b4.resolve).fail(b4.reject).progress(b4.notify)
}else{b4[b5+"With"](this===e?b4:this,[b9])}}:b4[b5])});b3=null}).promise()},promise:function(b3){return b3!=null?ap.extend(b3,b0):b0
}},e={};b0.pipe=b0.then;ap.each(b2,function(b3,b6){var b4=b6[2],b5=b6[3];b0[b6[1]]=b4.add;if(b5){b4.add(function(){b1=b5},b2[b3^1][2].disable,b2[2][2].lock)
}e[b6[0]]=b4.fire;e[b6[0]+"With"]=b4.fireWith});b0.promise(e);if(bZ){bZ.call(e,e)}return e},when:function(b6){var bZ=0,b5=z.call(arguments),b0=b5.length,b3=b0!==1||(b6&&ap.isFunction(b6.promise))?b0:0,e=b3===1?b6:ap.Deferred(),b7=function(b9,b8,ca){return function(cb){b8[b9]=this;
ca[b9]=arguments.length>1?z.call(arguments):cb;if(ca===b2){e.notifyWith(b8,ca)}else{if(!(--b3)){e.resolveWith(b8,ca)}}}},b2,b1,b4;
if(b0>1){b2=new Array(b0);b1=new Array(b0);b4=new Array(b0);for(;bZ<b0;bZ++){if(b5[bZ]&&ap.isFunction(b5[bZ].promise)){b5[bZ].promise().done(b7(bZ,b4,b5)).fail(e.reject).progress(b7(bZ,b1,b2))
}else{--b3}}}if(!b3){e.resolveWith(b4,b5)}return e.promise()}});ap.support=(function(){var cb,b0,bZ,ca,b9,b7,b5,b4,b6,b8,b1,b2=Q.createElement("div");
b2.setAttribute("className","t");b2.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";b0=b2.getElementsByTagName("*");
bZ=b2.getElementsByTagName("a")[0];bZ.style.cssText="top:1px;float:left;opacity:.5";if(!b0||!b0.length){return{}}ca=Q.createElement("select");
b9=ca.appendChild(Q.createElement("option"));b7=b2.getElementsByTagName("input")[0];cb={leadingWhitespace:(b2.firstChild.nodeType===3),tbody:!b2.getElementsByTagName("tbody").length,htmlSerialize:!!b2.getElementsByTagName("link").length,style:/top/.test(bZ.getAttribute("style")),hrefNormalized:(bZ.getAttribute("href")==="/a"),opacity:/^0.5/.test(bZ.style.opacity),cssFloat:!!bZ.style.cssFloat,checkOn:(b7.value==="on"),optSelected:b9.selected,getSetAttribute:b2.className!=="t",enctype:!!Q.createElement("form").enctype,html5Clone:Q.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(Q.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
b7.checked=true;cb.noCloneChecked=b7.cloneNode(true).checked;ca.disabled=true;cb.optDisabled=!b9.disabled;try{delete b2.test}catch(b3){cb.deleteExpando=false
}if(!b2.addEventListener&&b2.attachEvent&&b2.fireEvent){b2.attachEvent("onclick",b1=function(){cb.noCloneEvent=false});b2.cloneNode(true).fireEvent("onclick");
b2.detachEvent("onclick",b1)}b7=Q.createElement("input");b7.value="t";b7.setAttribute("type","radio");cb.radioValue=b7.value==="t";
b7.setAttribute("checked","checked");b7.setAttribute("name","t");b2.appendChild(b7);b5=Q.createDocumentFragment();b5.appendChild(b2.lastChild);
cb.checkClone=b5.cloneNode(true).cloneNode(true).lastChild.checked;cb.appendChecked=b7.checked;b5.removeChild(b7);b5.appendChild(b2);
if(b2.attachEvent){for(b6 in {submit:true,change:true,focusin:true}){b4="on"+b6;b8=(b4 in b2);if(!b8){b2.setAttribute(b4,"return;");
b8=(typeof b2[b4]==="function")}cb[b6+"Bubbles"]=b8}}ap(function(){var cc,cd,cg,cf,ce="padding:0;margin:0;border:0;display:block;overflow:hidden;",e=Q.getElementsByTagName("body")[0];
if(!e){return}cc=Q.createElement("div");cc.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
e.insertBefore(cc,e.firstChild);cd=Q.createElement("div");cc.appendChild(cd);cd.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cg=cd.getElementsByTagName("td");cg[0].style.cssText="padding:0;margin:0;border:0;display:none";b8=(cg[0].offsetHeight===0);cg[0].style.display="";
cg[1].style.display="none";cb.reliableHiddenOffsets=b8&&(cg[0].offsetHeight===0);cd.innerHTML="";cd.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
cb.boxSizing=(cd.offsetWidth===4);cb.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);if(bT.getComputedStyle){cb.pixelPosition=(bT.getComputedStyle(cd,null)||{}).top!=="1%";
cb.boxSizingReliable=(bT.getComputedStyle(cd,null)||{width:"4px"}).width==="4px";cf=Q.createElement("div");cf.style.cssText=cd.style.cssText=ce;
cf.style.marginRight=cf.style.width="0";cd.style.width="1px";cd.appendChild(cf);cb.reliableMarginRight=!parseFloat((bT.getComputedStyle(cf,null)||{}).marginRight)
}if(typeof cd.style.zoom!=="undefined"){cd.innerHTML="";cd.style.cssText=ce+"width:1px;padding:1px;display:inline;zoom:1";cb.inlineBlockNeedsLayout=(cd.offsetWidth===3);
cd.style.display="block";cd.style.overflow="visible";cd.innerHTML="<div></div>";cd.firstChild.style.width="5px";cb.shrinkWrapBlocks=(cd.offsetWidth!==3);
cc.style.zoom=1}e.removeChild(cc);cc=cd=cg=cf=null});b5.removeChild(b2);b0=bZ=ca=b9=b7=b5=b2=null;return cb})();var aD=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,a8=/([A-Z])/g;
ap.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(ap.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?ap.cache[e[ap.expando]]:e[ap.expando];
return !!e&&!am(e)},data:function(b0,b5,bZ,b6){if(!ap.acceptData(b0)){return}var b8,b7,b3=ap.expando,b1=typeof b5==="string",b4=b0.nodeType,e=b4?ap.cache:b0,b2=b4?b0[b3]:b0[b3]&&b3;
if((!b2||!e[b2]||(!b6&&!e[b2].data))&&b1&&bZ===bR){return}if(!b2){if(b4){b0[b3]=b2=ap.deletedIds.pop()||ap.guid++}else{b2=b3}}if(!e[b2]){e[b2]={};
if(!b4){e[b2].toJSON=ap.noop}}if(typeof b5==="object"||typeof b5==="function"){if(b6){e[b2]=ap.extend(e[b2],b5)}else{e[b2].data=ap.extend(e[b2].data,b5)
}}b8=e[b2];if(!b6){if(!b8.data){b8.data={}}b8=b8.data}if(bZ!==bR){b8[ap.camelCase(b5)]=bZ}if(b1){b7=b8[b5];if(b7==null){b7=b8[ap.camelCase(b5)]
}}else{b7=b8}return b7},removeData:function(bZ,b4,b5){if(!ap.acceptData(bZ)){return}var b6,b0,b3,b2=bZ.nodeType,e=b2?ap.cache:bZ,b1=b2?bZ[ap.expando]:ap.expando;
if(!e[b1]){return}if(b4){b6=b5?e[b1]:e[b1].data;if(b6){if(!ap.isArray(b4)){if(b4 in b6){b4=[b4]}else{b4=ap.camelCase(b4);if(b4 in b6){b4=[b4]
}else{b4=b4.split(" ")}}}for(b0=0,b3=b4.length;b0<b3;b0++){delete b6[b4[b0]]}if(!(b5?am:ap.isEmptyObject)(b6)){return}}}if(!b5){delete e[b1].data;
if(!am(e[b1])){return}}if(b2){ap.cleanData([bZ],true)}else{if(ap.support.deleteExpando||e!=e.window){delete e[b1]}else{e[b1]=null
}}},_data:function(bZ,b0,e){return ap.data(bZ,b0,e,true)},acceptData:function(e){var bZ=e.nodeName&&ap.noData[e.nodeName.toLowerCase()];
return !bZ||bZ!==true&&e.getAttribute("classid")===bZ}});ap.fn.extend({data:function(b2,b7){var b6,b5,e,b4,b3,b0=this[0],b1=0,bZ=null;
if(b2===bR){if(this.length){bZ=ap.data(b0);if(b0.nodeType===1&&!ap._data(b0,"parsedAttrs")){e=b0.attributes;for(b3=e.length;b1<b3;
b1++){b4=e[b1].name;if(!b4.indexOf("data-")){b4=ap.camelCase(b4.substring(5));O(b0,b4,bZ[b4])}}ap._data(b0,"parsedAttrs",true)
}}return bZ}if(typeof b2==="object"){return this.each(function(){ap.data(this,b2)})}b6=b2.split(".",2);b6[1]=b6[1]?"."+b6[1]:"";
b5=b6[1]+"!";return ap.access(this,function(b8){if(b8===bR){bZ=this.triggerHandler("getData"+b5,[b6[0]]);if(bZ===bR&&b0){bZ=ap.data(b0,b2);
bZ=O(b0,b2,bZ)}return bZ===bR&&b6[1]?this.data(b6[0]):bZ}b6[1]=b8;this.each(function(){var b9=ap(this);b9.triggerHandler("setData"+b5,b6);
ap.data(this,b2,b8);b9.triggerHandler("changeData"+b5,b6)})},null,b7,arguments.length>1,null,false)},removeData:function(e){return this.each(function(){ap.removeData(this,e)
})}});function O(b1,b2,bZ){if(bZ===bR&&b1.nodeType===1){var b3="data-"+b2.replace(a8,"-$1").toLowerCase();bZ=b1.getAttribute(b3);
if(typeof bZ==="string"){try{bZ=bZ==="true"?true:bZ==="false"?false:bZ==="null"?null:+bZ+""===bZ?+bZ:aD.test(bZ)?ap.parseJSON(bZ):bZ
}catch(b0){}ap.data(b1,b2,bZ)}else{bZ=bR}}return bZ}function am(bZ){var e;for(e in bZ){if(e==="data"&&ap.isEmptyObject(bZ[e])){continue
}if(e!=="toJSON"){return false}}return true}ap.extend({queue:function(bZ,b1,e){var b0;if(bZ){b1=(b1||"fx")+"queue";b0=ap._data(bZ,b1);
if(e){if(!b0||ap.isArray(e)){b0=ap._data(bZ,b1,ap.makeArray(e))}else{b0.push(e)}}return b0||[]}},dequeue:function(e,b4){b4=b4||"fx";
var b2=ap.queue(e,b4),b3=b2.length,bZ=b2.shift(),b0=ap._queueHooks(e,b4),b1=function(){ap.dequeue(e,b4)};if(bZ==="inprogress"){bZ=b2.shift();
b3--}if(bZ){if(b4==="fx"){b2.unshift("inprogress")}delete b0.stop;bZ.call(e,b1,b0)}if(!b3&&b0){b0.empty.fire()}},_queueHooks:function(e,b0){var bZ=b0+"queueHooks";
return ap._data(e,bZ)||ap._data(e,bZ,{empty:ap.Callbacks("once memory").add(function(){ap.removeData(e,b0+"queue",true);ap.removeData(e,bZ,true)
})})}});ap.fn.extend({queue:function(b0,e){var bZ=2;if(typeof b0!=="string"){e=b0;b0="fx";bZ--}if(arguments.length<bZ){return ap.queue(this[0],b0)
}return e===bR?this:this.each(function(){var b1=ap.queue(this,b0,e);ap._queueHooks(this,b0);if(b0==="fx"&&b1[0]!=="inprogress"){ap.dequeue(this,b0)
}})},dequeue:function(e){return this.each(function(){ap.dequeue(this,e)})},delay:function(e,bZ){e=ap.fx?ap.fx.speeds[e]||e:e;
bZ=bZ||"fx";return this.queue(bZ,function(b1,b0){var b2=setTimeout(b1,e);b0.stop=function(){clearTimeout(b2)}})},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b5,b2){var b4,e=1,bZ=ap.Deferred(),b0=this,b1=this.length,b3=function(){if(!(--e)){bZ.resolveWith(b0,[b0])
}};if(typeof b5!=="string"){b2=b5;b5=bR}b5=b5||"fx";while(b1--){b4=ap._data(b0[b1],b5+"queueHooks");if(b4&&b4.empty){e++;b4.empty.add(b3)
}}b3();return bZ.promise(b2)}});var at,o,Y,aH=/[\t\r\n]/g,bp=/\r/g,bA=/^(?:button|input)$/i,aQ=/^(?:button|input|object|select|textarea)$/i,aJ=/^a(?:rea|)$/i,aC=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,ad=ap.support.getSetAttribute;
ap.fn.extend({attr:function(e,bZ){return ap.access(this,ap.attr,e,bZ,arguments.length>1)},removeAttr:function(e){return this.each(function(){ap.removeAttr(this,e)
})},prop:function(e,bZ){return ap.access(this,ap.prop,e,bZ,arguments.length>1)},removeProp:function(e){e=ap.propFix[e]||e;return this.each(function(){try{this[e]=bR;
delete this[e]}catch(bZ){}})},addClass:function(b5){var b0,b2,b3,b1,b4,e,bZ;if(ap.isFunction(b5)){return this.each(function(b6){ap(this).addClass(b5.call(this,b6,this.className))
})}if(b5&&typeof b5==="string"){b0=b5.split(y);for(b2=0,b3=this.length;b2<b3;b2++){b1=this[b2];if(b1.nodeType===1){if(!b1.className&&b0.length===1){b1.className=b5
}else{b4=" "+b1.className+" ";for(e=0,bZ=b0.length;e<bZ;e++){if(b4.indexOf(" "+b0[e]+" ")<0){b4+=b0[e]+" "}}b1.className=ap.trim(b4)
}}}}return this},removeClass:function(b5){var b4,b0,b1,e,bZ,b2,b3;if(ap.isFunction(b5)){return this.each(function(b6){ap(this).removeClass(b5.call(this,b6,this.className))
})}if((b5&&typeof b5==="string")||b5===bR){b4=(b5||"").split(y);for(b2=0,b3=this.length;b2<b3;b2++){b1=this[b2];if(b1.nodeType===1&&b1.className){b0=(" "+b1.className+" ").replace(aH," ");
for(e=0,bZ=b4.length;e<bZ;e++){while(b0.indexOf(" "+b4[e]+" ")>=0){b0=b0.replace(" "+b4[e]+" "," ")}}b1.className=b5?ap.trim(b0):""
}}}return this},toggleClass:function(b1,bZ){var b0=typeof b1,e=typeof bZ==="boolean";if(ap.isFunction(b1)){return this.each(function(b2){ap(this).toggleClass(b1.call(this,b2,this.className,bZ),bZ)
})}return this.each(function(){if(b0==="string"){var b2,b4=0,b5=ap(this),b6=bZ,b3=b1.split(y);while((b2=b3[b4++])){b6=e?b6:!b5.hasClass(b2);
b5[b6?"addClass":"removeClass"](b2)}}else{if(b0==="undefined"||b0==="boolean"){if(this.className){ap._data(this,"__className__",this.className)
}this.className=this.className||b1===false?"":ap._data(this,"__className__")||""}}})},hasClass:function(b1){var e=" "+b1+" ",bZ=0,b0=this.length;
for(;bZ<b0;bZ++){if(this[bZ].nodeType===1&&(" "+this[bZ].className+" ").replace(aH," ").indexOf(e)>=0){return true}}return false
},val:function(b2){var bZ,b1,b0,e=this[0];if(!arguments.length){if(e){bZ=ap.valHooks[e.type]||ap.valHooks[e.nodeName.toLowerCase()];
if(bZ&&"get" in bZ&&(b1=bZ.get(e,"value"))!==bR){return b1}b1=e.value;return typeof b1==="string"?b1.replace(bp,""):b1==null?"":b1
}return}b0=ap.isFunction(b2);return this.each(function(b3){var b5,b4=ap(this);if(this.nodeType!==1){return}if(b0){b5=b2.call(this,b3,b4.val())
}else{b5=b2}if(b5==null){b5=""}else{if(typeof b5==="number"){b5+=""}else{if(ap.isArray(b5)){b5=ap.map(b5,function(b6){return b6==null?"":b6+""
})}}}bZ=ap.valHooks[this.type]||ap.valHooks[this.nodeName.toLowerCase()];if(!bZ||!("set" in bZ)||bZ.set(this,b5,"value")===bR){this.value=b5
}})}});ap.extend({valHooks:{option:{get:function(e){var bZ=e.attributes.value;return !bZ||bZ.specified?e.value:e.text}},select:{get:function(e){var b5,bZ,b1,b3,b0=e.selectedIndex,b6=[],b4=e.options,b2=e.type==="select-one";
if(b0<0){return null}bZ=b2?b0:0;b1=b2?b0+1:b4.length;for(;bZ<b1;bZ++){b3=b4[bZ];if(b3.selected&&(ap.support.optDisabled?!b3.disabled:b3.getAttribute("disabled")===null)&&(!b3.parentNode.disabled||!ap.nodeName(b3.parentNode,"optgroup"))){b5=ap(b3).val();
if(b2){return b5}b6.push(b5)}}if(b2&&!b6.length&&b4.length){return ap(b4[b0]).val()}return b6},set:function(e,bZ){var b0=ap.makeArray(bZ);
ap(e).find("option").each(function(){this.selected=ap.inArray(ap(this).val(),b0)>=0});if(!b0.length){e.selectedIndex=-1}return b0
}}},attrFn:{},attr:function(e,b0,b5,b3){var b4,bZ,b1,b2=e.nodeType;if(!e||b2===3||b2===8||b2===2){return}if(b3&&ap.isFunction(ap.fn[b0])){return ap(e)[b0](b5)
}if(typeof e.getAttribute==="undefined"){return ap.prop(e,b0,b5)}b1=b2!==1||!ap.isXMLDoc(e);if(b1){b0=b0.toLowerCase();bZ=ap.attrHooks[b0]||(aC.test(b0)?o:at)
}if(b5!==bR){if(b5===null){ap.removeAttr(e,b0);return}else{if(bZ&&"set" in bZ&&b1&&(b4=bZ.set(e,b5,b0))!==bR){return b4}else{e.setAttribute(b0,b5+"");
return b5}}}else{if(bZ&&"get" in bZ&&b1&&(b4=bZ.get(e,b0))!==null){return b4}else{b4=e.getAttribute(b0);return b4===null?bR:b4
}}},removeAttr:function(bZ,b4){var b3,e,b2,b1,b0=0;if(b4&&bZ.nodeType===1){e=b4.split(y);for(;b0<e.length;b0++){b2=e[b0];if(b2){b3=ap.propFix[b2]||b2;
b1=aC.test(b2);if(!b1){ap.attr(bZ,b2,"")}bZ.removeAttribute(ad?b2:b3);if(b1&&b3 in bZ){bZ[b3]=false}}}}},attrHooks:{type:{set:function(e,b0){if(bA.test(e.nodeName)&&e.parentNode){ap.error("type property can't be changed")
}else{if(!ap.support.radioValue&&b0==="radio"&&ap.nodeName(e,"input")){var bZ=e.value;e.setAttribute("type",b0);if(bZ){e.value=bZ
}return b0}}}},value:{get:function(e,bZ){if(at&&ap.nodeName(e,"button")){return at.get(e,bZ)}return bZ in e?e.value:null},set:function(e,b0,bZ){if(at&&ap.nodeName(e,"button")){return at.set(e,b0,bZ)
}e.value=b0}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,b0,b4){var b3,bZ,b1,b2=e.nodeType;
if(!e||b2===3||b2===8||b2===2){return}b1=b2!==1||!ap.isXMLDoc(e);if(b1){b0=ap.propFix[b0]||b0;bZ=ap.propHooks[b0]}if(b4!==bR){if(bZ&&"set" in bZ&&(b3=bZ.set(e,b4,b0))!==bR){return b3
}else{return(e[b0]=b4)}}else{if(bZ&&"get" in bZ&&(b3=bZ.get(e,b0))!==null){return b3}else{return e[b0]}}},propHooks:{tabIndex:{get:function(bZ){var e=bZ.getAttributeNode("tabindex");
return e&&e.specified?parseInt(e.value,10):aQ.test(bZ.nodeName)||aJ.test(bZ.nodeName)&&bZ.href?0:bR}}}});o={get:function(bZ,b0){var e,b1=ap.prop(bZ,b0);
return b1===true||typeof b1!=="boolean"&&(e=bZ.getAttributeNode(b0))&&e.nodeValue!==false?b0.toLowerCase():bR},set:function(e,b1,bZ){var b0;
if(b1===false){ap.removeAttr(e,bZ)}else{b0=ap.propFix[bZ]||bZ;if(b0 in e){e[b0]=true}e.setAttribute(bZ,bZ.toLowerCase())}return bZ
}};if(!ad){Y={name:true,id:true,coords:true};at=ap.valHooks.button={get:function(e,bZ){var b0;b0=e.getAttributeNode(bZ);return b0&&(Y[bZ]?b0.value!=="":b0.specified)?b0.value:bR
},set:function(e,b1,bZ){var b0=e.getAttributeNode(bZ);if(!b0){b0=Q.createAttribute(bZ);e.setAttributeNode(b0)}return(b0.value=b1+"")
}};ap.each(["width","height"],function(e,bZ){ap.attrHooks[bZ]=ap.extend(ap.attrHooks[bZ],{set:function(b0,b1){if(b1===""){b0.setAttribute(bZ,"auto");
return b1}}})});ap.attrHooks.contenteditable={get:at.get,set:function(e,b0,bZ){if(b0===""){b0="false"}at.set(e,b0,bZ)}}}if(!ap.support.hrefNormalized){ap.each(["href","src","width","height"],function(e,bZ){ap.attrHooks[bZ]=ap.extend(ap.attrHooks[bZ],{get:function(b0){var b1=b0.getAttribute(bZ,2);
return b1===null?bR:b1}})})}if(!ap.support.style){ap.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||bR
},set:function(e,bZ){return(e.style.cssText=bZ+"")}}}if(!ap.support.optSelected){ap.propHooks.selected=ap.extend(ap.propHooks.selected,{get:function(e){var bZ=e.parentNode;
if(bZ){bZ.selectedIndex;if(bZ.parentNode){bZ.parentNode.selectedIndex}}return null}})}if(!ap.support.enctype){ap.propFix.enctype="encoding"
}if(!ap.support.checkOn){ap.each(["radio","checkbox"],function(){ap.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}})}ap.each(["radio","checkbox"],function(){ap.valHooks[this]=ap.extend(ap.valHooks[this],{set:function(e,bZ){if(ap.isArray(bZ)){return(e.checked=ap.inArray(ap(e).val(),bZ)>=0)
}}})});var aS=/^(?:textarea|input|select)$/i,bB=/^([^\.]*|)(?:\.(.+)|)$/,aX=/(?:^|\s)hover(\.\S+|)\b/,a2=/^key/,a6=/^(?:mouse|contextmenu)|click/,aR=/^(?:focusinfocus|focusoutblur)$/,ah=function(e){return ap.event.special.hover?e:e.replace(aX,"mouseenter$1 mouseleave$1")
};ap.event={add:function(bZ,cd,b5,e,b8){var b0,b1,b2,ca,cb,cc,b7,b3,b4,b6,b9;if(bZ.nodeType===3||bZ.nodeType===8||!cd||!b5||!(b0=ap._data(bZ))){return
}if(b5.handler){b4=b5;b5=b4.handler;b8=b4.selector}if(!b5.guid){b5.guid=ap.guid++}b2=b0.events;if(!b2){b0.events=b2={}}b1=b0.handle;
if(!b1){b0.handle=b1=function(ce){return typeof ap!=="undefined"&&(!ce||ap.event.triggered!==ce.type)?ap.event.dispatch.apply(b1.elem,arguments):bR
};b1.elem=bZ}cd=ap.trim(ah(cd)).split(" ");for(ca=0;ca<cd.length;ca++){cb=bB.exec(cd[ca])||[];cc=cb[1];b7=(cb[2]||"").split(".").sort();
b9=ap.event.special[cc]||{};cc=(b8?b9.delegateType:b9.bindType)||cc;b9=ap.event.special[cc]||{};b3=ap.extend({type:cc,origType:cb[1],data:e,handler:b5,guid:b5.guid,selector:b8,needsContext:b8&&ap.expr.match.needsContext.test(b8),namespace:b7.join(".")},b4);
b6=b2[cc];if(!b6){b6=b2[cc]=[];b6.delegateCount=0;if(!b9.setup||b9.setup.call(bZ,e,b7,b1)===false){if(bZ.addEventListener){bZ.addEventListener(cc,b1,false)
}else{if(bZ.attachEvent){bZ.attachEvent("on"+cc,b1)}}}}if(b9.add){b9.add.call(bZ,b3);if(!b3.handler.guid){b3.handler.guid=b5.guid
}}if(b8){b6.splice(b6.delegateCount++,0,b3)}else{b6.push(b3)}ap.event.global[cc]=true}bZ=null},global:{},remove:function(e,ce,b3,b9,b5){var cb,cc,cd,b8,b6,b7,b4,b0,ca,b1,b2,bZ=ap.hasData(e)&&ap._data(e);
if(!bZ||!(b0=bZ.events)){return}ce=ap.trim(ah(ce||"")).split(" ");for(cb=0;cb<ce.length;cb++){cc=bB.exec(ce[cb])||[];cd=b8=cc[1];
b6=cc[2];if(!cd){for(cd in b0){ap.event.remove(e,cd+ce[cb],b3,b9,true)}continue}ca=ap.event.special[cd]||{};cd=(b9?ca.delegateType:ca.bindType)||cd;
b1=b0[cd]||[];b7=b1.length;b6=b6?new RegExp("(^|\\.)"+b6.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(b4=0;b4<b1.length;
b4++){b2=b1[b4];if((b5||b8===b2.origType)&&(!b3||b3.guid===b2.guid)&&(!b6||b6.test(b2.namespace))&&(!b9||b9===b2.selector||b9==="**"&&b2.selector)){b1.splice(b4--,1);
if(b2.selector){b1.delegateCount--}if(ca.remove){ca.remove.call(e,b2)}}}if(b1.length===0&&b7!==b1.length){if(!ca.teardown||ca.teardown.call(e,b6,bZ.handle)===false){ap.removeEvent(e,cd,bZ.handle)
}delete b0[cd]}}if(ap.isEmptyObject(b0)){delete bZ.handle;ap.removeData(e,"events",true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(b3,b1,b2,ca){if(b2&&(b2.nodeType===3||b2.nodeType===8)){return
}var bZ,b5,b7,b0,b9,cb,cc,b6,b4,e,cd=b3.type||b3,b8=[];if(aR.test(cd+ap.event.triggered)){return}if(cd.indexOf("!")>=0){cd=cd.slice(0,-1);
b5=true}if(cd.indexOf(".")>=0){b8=cd.split(".");cd=b8.shift();b8.sort()}if((!b2||ap.event.customEvent[cd])&&!ap.event.global[cd]){return
}b3=typeof b3==="object"?b3[ap.expando]?b3:new ap.Event(cd,b3):new ap.Event(cd);b3.type=cd;b3.isTrigger=true;b3.exclusive=b5;
b3.namespace=b8.join(".");b3.namespace_re=b3.namespace?new RegExp("(^|\\.)"+b8.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;cb=cd.indexOf(":")<0?"on"+cd:"";
if(!b2){bZ=ap.cache;for(b7 in bZ){if(bZ[b7].events&&bZ[b7].events[cd]){ap.event.trigger(b3,b1,bZ[b7].handle.elem,true)}}return
}b3.result=bR;if(!b3.target){b3.target=b2}b1=b1!=null?ap.makeArray(b1):[];b1.unshift(b3);cc=ap.event.special[cd]||{};if(cc.trigger&&cc.trigger.apply(b2,b1)===false){return
}b4=[[b2,cc.bindType||cd]];if(!ca&&!cc.noBubble&&!ap.isWindow(b2)){e=cc.delegateType||cd;b0=aR.test(e+cd)?b2:b2.parentNode;for(b9=b2;
b0;b0=b0.parentNode){b4.push([b0,e]);b9=b0}if(b9===(b2.ownerDocument||Q)){b4.push([b9.defaultView||b9.parentWindow||bT,e])}}for(b7=0;
b7<b4.length&&!b3.isPropagationStopped();b7++){b0=b4[b7][0];b3.type=b4[b7][1];b6=(ap._data(b0,"events")||{})[b3.type]&&ap._data(b0,"handle");
if(b6){b6.apply(b0,b1)}b6=cb&&b0[cb];if(b6&&ap.acceptData(b0)&&b6.apply&&b6.apply(b0,b1)===false){b3.preventDefault()}}b3.type=cd;
if(!ca&&!b3.isDefaultPrevented()){if((!cc._default||cc._default.apply(b2.ownerDocument,b1)===false)&&!(cd==="click"&&ap.nodeName(b2,"a"))&&ap.acceptData(b2)){if(cb&&b2[cd]&&((cd!=="focus"&&cd!=="blur")||b3.target.offsetWidth!==0)&&!ap.isWindow(b2)){b9=b2[cb];
if(b9){b2[cb]=null}ap.event.triggered=cd;b2[cd]();ap.event.triggered=bR;if(b9){b2[cb]=b9}}}}return b3.result},dispatch:function(b1){b1=ap.event.fix(b1||bT.event);
var b5,b6,bZ,ca,cd,b7,b8,b2,cc,b9,b4=((ap._data(this,"events")||{})[b1.type]||[]),b0=b4.delegateCount,e=z.call(arguments),cb=!b1.exclusive&&!b1.namespace,ce=ap.event.special[b1.type]||{},b3=[];
e[0]=b1;b1.delegateTarget=this;if(ce.preDispatch&&ce.preDispatch.call(this,b1)===false){return}if(b0&&!(b1.button&&b1.type==="click")){for(bZ=b1.target;
bZ!=this;bZ=bZ.parentNode||this){if(bZ.disabled!==true||b1.type!=="click"){cd={};b8=[];for(b5=0;b5<b0;b5++){b2=b4[b5];cc=b2.selector;
if(cd[cc]===bR){cd[cc]=b2.needsContext?ap(cc,this).index(bZ)>=0:ap.find(cc,this,null,[bZ]).length}if(cd[cc]){b8.push(b2)}}if(b8.length){b3.push({elem:bZ,matches:b8})
}}}}if(b4.length>b0){b3.push({elem:this,matches:b4.slice(b0)})}for(b5=0;b5<b3.length&&!b1.isPropagationStopped();b5++){b7=b3[b5];
b1.currentTarget=b7.elem;for(b6=0;b6<b7.matches.length&&!b1.isImmediatePropagationStopped();b6++){b2=b7.matches[b6];if(cb||(!b1.namespace&&!b2.namespace)||b1.namespace_re&&b1.namespace_re.test(b2.namespace)){b1.data=b2.data;
b1.handleObj=b2;ca=((ap.event.special[b2.origType]||{}).handle||b2.handler).apply(b7.elem,e);if(ca!==bR){b1.result=ca;if(ca===false){b1.preventDefault();
b1.stopPropagation()}}}}}if(ce.postDispatch){ce.postDispatch.call(this,b1)}return b1.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,bZ){if(e.which==null){e.which=bZ.charCode!=null?bZ.charCode:bZ.keyCode
}return e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b1,b4){var b2,b0,e,bZ=b4.button,b3=b4.fromElement;
if(b1.pageX==null&&b4.clientX!=null){b2=b1.target.ownerDocument||Q;b0=b2.documentElement;e=b2.body;b1.pageX=b4.clientX+(b0&&b0.scrollLeft||e&&e.scrollLeft||0)-(b0&&b0.clientLeft||e&&e.clientLeft||0);
b1.pageY=b4.clientY+(b0&&b0.scrollTop||e&&e.scrollTop||0)-(b0&&b0.clientTop||e&&e.clientTop||0)}if(!b1.relatedTarget&&b3){b1.relatedTarget=b3===b1.target?b4.toElement:b3
}if(!b1.which&&bZ!==bR){b1.which=(bZ&1?1:(bZ&2?3:(bZ&4?2:0)))}return b1}},fix:function(bZ){if(bZ[ap.expando]){return bZ}var b1,b3,b2=bZ,b0=ap.event.fixHooks[bZ.type]||{},e=b0.props?this.props.concat(b0.props):this.props;
bZ=ap.Event(b2);for(b1=e.length;b1;){b3=e[--b1];bZ[b3]=b2[b3]}if(!bZ.target){bZ.target=b2.srcElement||Q}if(bZ.target.nodeType===3){bZ.target=bZ.target.parentNode
}bZ.metaKey=!!bZ.metaKey;return b0.filter?b0.filter(bZ,b2):bZ},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,b0,bZ){if(ap.isWindow(this)){this.onbeforeunload=bZ
}},teardown:function(bZ,e){if(this.onbeforeunload===e){this.onbeforeunload=null}}}},simulate:function(b3,b1,b2,bZ){var b0=ap.extend(new ap.Event(),b2,{type:b3,isSimulated:true,originalEvent:{}});
if(bZ){ap.event.trigger(b0,null,b1)}else{ap.event.dispatch.call(b1,b0)}if(b0.isDefaultPrevented()){b2.preventDefault()}}};ap.event.handle=ap.event.dispatch;
ap.removeEvent=Q.removeEventListener?function(e,b0,bZ){if(e.removeEventListener){e.removeEventListener(b0,bZ,false)}}:function(e,b1,bZ){var b0="on"+b1;
if(e.detachEvent){if(typeof e[b0]==="undefined"){e[b0]=null}e.detachEvent(b0,bZ)}};ap.Event=function(bZ,e){if(!(this instanceof ap.Event)){return new ap.Event(bZ,e)
}if(bZ&&bZ.type){this.originalEvent=bZ;this.type=bZ.type;this.isDefaultPrevented=(bZ.defaultPrevented||bZ.returnValue===false||bZ.getPreventDefault&&bZ.getPreventDefault())?aP:aO
}else{this.type=bZ}if(e){ap.extend(this,e)}this.timeStamp=bZ&&bZ.timeStamp||ap.now();this[ap.expando]=true};function aO(){return false
}function aP(){return true}ap.Event.prototype={preventDefault:function(){this.isDefaultPrevented=aP;var bZ=this.originalEvent;
if(!bZ){return}if(bZ.preventDefault){bZ.preventDefault()}else{bZ.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=aP;
var bZ=this.originalEvent;if(!bZ){return}if(bZ.stopPropagation){bZ.stopPropagation()}bZ.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=aP;
this.stopPropagation()},isDefaultPrevented:aO,isPropagationStopped:aO,isImmediatePropagationStopped:aO};ap.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bZ,e){ap.event.special[bZ]={delegateType:e,bindType:e,handle:function(b0){var b3,b5=this,b2=b0.relatedTarget,b1=b0.handleObj,b4=b1.selector;
if(!b2||(b2!==b5&&!ap.contains(b5,b2))){b0.type=b1.origType;b3=b1.handler.apply(this,arguments);b0.type=e}return b3}}});if(!ap.support.submitBubbles){ap.event.special.submit={setup:function(){if(ap.nodeName(this,"form")){return false
}ap.event.add(this,"click._submit keypress._submit",function(bZ){var b0=bZ.target,b1=ap.nodeName(b0,"input")||ap.nodeName(b0,"button")?b0.form:bR;
if(b1&&!ap._data(b1,"_submit_attached")){ap.event.add(b1,"submit._submit",function(e){e._submit_bubble=true});ap._data(b1,"_submit_attached",true)
}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;if(this.parentNode&&!e.isTrigger){ap.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(ap.nodeName(this,"form")){return false}ap.event.remove(this,"._submit")}}}if(!ap.support.changeBubbles){ap.event.special.change={setup:function(){if(aS.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){ap.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});ap.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false}ap.event.simulate("change",this,e,true)
})}return false}ap.event.add(this,"beforeactivate._change",function(bZ){var b0=bZ.target;if(aS.test(b0.nodeName)&&!ap._data(b0,"_change_attached")){ap.event.add(b0,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){ap.event.simulate("change",this.parentNode,e,true)
}});ap._data(b0,"_change_attached",true)}})},handle:function(bZ){var e=bZ.target;if(this!==e||bZ.isSimulated||bZ.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return bZ.handleObj.handler.apply(this,arguments)
}},teardown:function(){ap.event.remove(this,"._change");return !aS.test(this.nodeName)}}}if(!ap.support.focusinBubbles){ap.each({focus:"focusin",blur:"focusout"},function(b1,bZ){var e=0,b0=function(b2){ap.event.simulate(bZ,b2.target,ap.event.fix(b2),true)
};ap.event.special[bZ]={setup:function(){if(e++===0){Q.addEventListener(b1,b0,true)}},teardown:function(){if(--e===0){Q.removeEventListener(b1,b0,true)
}}}})}ap.fn.extend({on:function(b4,b2,e,bZ,b0){var b1,b3;if(typeof b4==="object"){if(typeof b2!=="string"){e=e||b2;b2=bR}for(b3 in b4){this.on(b3,b2,e,b4[b3],b0)
}return this}if(e==null&&bZ==null){bZ=b2;e=b2=bR}else{if(bZ==null){if(typeof b2==="string"){bZ=e;e=bR}else{bZ=e;e=b2;b2=bR}}}if(bZ===false){bZ=aO
}else{if(!bZ){return this}}if(b0===1){b1=bZ;bZ=function(b5){ap().off(b5);return b1.apply(this,arguments)};bZ.guid=b1.guid||(b1.guid=ap.guid++)
}return this.each(function(){ap.event.add(this,b4,bZ,e,b2)})},one:function(b1,b0,e,bZ){return this.on(b1,b0,e,bZ,1)},off:function(b2,b0,e){var bZ,b1;
if(b2&&b2.preventDefault&&b2.handleObj){bZ=b2.handleObj;ap(b2.delegateTarget).off(bZ.namespace?bZ.origType+"."+bZ.namespace:bZ.origType,bZ.selector,bZ.handler);
return this}if(typeof b2==="object"){for(b1 in b2){this.off(b1,b0,b2[b1])}return this}if(b0===false||typeof b0==="function"){e=b0;
b0=bR}if(e===false){e=aO}return this.each(function(){ap.event.remove(this,b2,e,b0)})},bind:function(b0,e,bZ){return this.on(b0,null,e,bZ)
},unbind:function(bZ,e){return this.off(bZ,null,e)},live:function(b0,e,bZ){ap(this.context).on(b0,this.selector,e,bZ);return this
},die:function(bZ,e){ap(this.context).off(bZ,this.selector||"**",e);return this},delegate:function(b0,b1,e,bZ){return this.on(b1,b0,e,bZ)
},undelegate:function(bZ,b0,e){return arguments.length===1?this.off(bZ,"**"):this.off(b0,bZ||"**",e)},trigger:function(bZ,e){return this.each(function(){ap.event.trigger(bZ,e,this)
})},triggerHandler:function(bZ,e){if(this[0]){return ap.event.trigger(bZ,e,this[0],true)}},toggle:function(bZ){var e=arguments,b0=bZ.guid||ap.guid++,b1=0,b2=function(b3){var b4=(ap._data(this,"lastToggle"+bZ.guid)||0)%b1;
ap._data(this,"lastToggle"+bZ.guid,b4+1);b3.preventDefault();return e[b4].apply(this,arguments)||false};b2.guid=b0;while(b1<e.length){e[b1++].guid=b0
}return this.click(b2)},hover:function(bZ,e){return this.mouseenter(bZ).mouseleave(e||bZ)}});ap.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(e,bZ){ap.fn[bZ]=function(b0,b1){if(b1==null){b1=b0;
b0=null}return arguments.length>0?this.on(bZ,null,b0,b1):this.trigger(bZ)};if(a2.test(bZ)){ap.event.fixHooks[bZ]=ap.event.keyHooks
}if(a6.test(bZ)){ap.event.fixHooks[bZ]=ap.event.mouseHooks}});
/*
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function(c6,c4){var b9,b2,cr,cs,cw,cf,cc,cZ,ct,cD,b8=true,c0="undefined",cq=("sizcache"+Math.random()).replace(".",""),c1=String,cm=c6.document,cl=cm.documentElement,ck=0,cn=0,cE=[].pop,cH=[].push,cY=[].slice,cv=[].indexOf||function(e){var c7=0,c8=this.length;
for(;c7<c8;c7++){if(this[c7]===e){return c7}}return -1},cx=function(e,c7){e[cq]=c7==null||c7;return e},ch=function(){var e={},c7=[];
return cx(function(c8,c9){if(c7.push(c8)>cr.cacheLength){delete e[c7.shift()]}return(e[c8]=c9)},e)},cb=ch(),c2=ch(),cd=ch(),c5="[\\x20\\t\\r\\n\\f]",ca="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",cu=ca.replace("w","w#"),cC="([*^$|!~]?=)",b7="\\["+c5+"*("+ca+")"+c5+"*(?:"+cC+c5+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cu+")|)|)"+c5+"*\\]",cG=":("+ca+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+b7+")|[^:]|\\\\.)*|.*))\\)|)",cF=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+c5+"*((?:-\\d)?\\d*)"+c5+"*\\)|)(?=[^-]|$)",cS=new RegExp("^"+c5+"+|((?:^|[^\\\\])(?:\\\\.)*)"+c5+"+$","g"),cK=new RegExp("^"+c5+"*,"+c5+"*"),cJ=new RegExp("^"+c5+"*([\\x20\\t\\r\\n\\f>+~])"+c5+"*"),cP=new RegExp(cG),cQ=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,cO=/^:not/,cR=/[\x20\t\r\n\f]*[+~]/,cL=/:not\($/,cM=/h\d/i,cN=/input|select|textarea|button/i,cI=/\\(?!\\)/g,cA={ID:new RegExp("^#("+ca+")"),CLASS:new RegExp("^\\.("+ca+")"),NAME:new RegExp("^\\[name=['\"]?("+ca+")['\"]?\\]"),TAG:new RegExp("^("+ca.replace("w","w*")+")"),ATTR:new RegExp("^"+b7),PSEUDO:new RegExp("^"+cG),POS:new RegExp(cF,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+c5+"*(even|odd|(([+-]|)(\\d*)n|)"+c5+"*(?:([+-]|)"+c5+"*(\\d+)|))"+c5+"*\\)|)","i"),needsContext:new RegExp("^"+c5+"*[>+~]|"+cF,"i")},b0=function(c9){var c7=cm.createElement("div");
try{return c9(c7)}catch(c8){return false}finally{c7=null}},b4=b0(function(e){e.appendChild(cm.createComment(""));return !e.getElementsByTagName("*").length
}),b3=b0(function(e){e.innerHTML="<a href='#'></a>";return e.firstChild&&typeof e.firstChild.getAttribute!==c0&&e.firstChild.getAttribute("href")==="#"
}),b1=b0(function(e){e.innerHTML="<select></select>";var c7=typeof e.lastChild.getAttribute("multiple");return c7!=="boolean"&&c7!=="string"
}),b5=b0(function(e){e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){return false
}e.lastChild.className="e";return e.getElementsByClassName("e").length===2}),b6=b0(function(e){e.id=cq+0;e.innerHTML="<a name='"+cq+"'></a><div name='"+cq+"'></div>";
cl.insertBefore(e,cl.firstChild);var c7=cm.getElementsByName&&cm.getElementsByName(cq).length===2+cm.getElementsByName(cq+0).length;
b2=!cm.getElementById(cq);cl.removeChild(e);return c7});try{cY.call(cl.childNodes,0)[0].nodeType}catch(co){cY=function(c7){var e,c8=[];
for(;(e=this[c7]);c7++){c8.push(e)}return c8}}function cX(dd,e,db,dc){db=db||[];e=e||cm;var c9,c7,de,c8,da=e.nodeType;if(!dd||typeof dd!=="string"){return db
}if(da!==1&&da!==9){return[]}de=cw(e);if(!de&&!dc){if((c9=cQ.exec(dd))){if((c8=c9[1])){if(da===9){c7=e.getElementById(c8);if(c7&&c7.parentNode){if(c7.id===c8){db.push(c7);
return db}}else{return db}}else{if(e.ownerDocument&&(c7=e.ownerDocument.getElementById(c8))&&cf(e,c7)&&c7.id===c8){db.push(c7);
return db}}}else{if(c9[2]){cH.apply(db,cY.call(e.getElementsByTagName(dd),0));return db}else{if((c8=c9[3])&&b5&&e.getElementsByClassName){cH.apply(db,cY.call(e.getElementsByClassName(c8),0));
return db}}}}}return cT(dd.replace(cS,"$1"),e,db,dc,de)}cX.matches=function(c7,e){return cX(c7,null,null,e)};cX.matchesSelector=function(e,c7){return cX(c7,null,null,[e]).length>0
};function ci(e){return function(c7){var c8=c7.nodeName.toLowerCase();return c8==="input"&&c7.type===e}}function cg(e){return function(c7){var c8=c7.nodeName.toLowerCase();
return(c8==="input"||c8==="button")&&c7.type===e}}function cj(e){return cx(function(c7){c7=+c7;return cx(function(dc,da){var c9,db=e([],dc.length,c7),c8=db.length;
while(c8--){if(dc[(c9=db[c8])]){dc[c9]=!(da[c9]=dc[c9])}}})})}cs=cX.getText=function(e){var c8,da="",c7=0,c9=e.nodeType;if(c9){if(c9===1||c9===9||c9===11){if(typeof e.textContent==="string"){return e.textContent
}else{for(e=e.firstChild;e;e=e.nextSibling){da+=cs(e)}}}else{if(c9===3||c9===4){return e.nodeValue}}}else{for(;(c8=e[c7]);c7++){da+=cs(c8)
}}return da};cw=cX.isXML=function(c7){var e=c7&&(c7.ownerDocument||c7).documentElement;return e?e.nodeName!=="HTML":false};cf=cX.contains=cl.contains?function(e,c8){var c7=e.nodeType===9?e.documentElement:e,c9=c8&&c8.parentNode;
return e===c9||!!(c9&&c9.nodeType===1&&c7.contains&&c7.contains(c9))}:cl.compareDocumentPosition?function(e,c7){return c7&&!!(e.compareDocumentPosition(c7)&16)
}:function(e,c7){while((c7=c7.parentNode)){if(c7===e){return true}}return false};cX.attr=function(e,c7){var c8,c9=cw(e);if(!c9){c7=c7.toLowerCase()
}if((c8=cr.attrHandle[c7])){return c8(e)}if(c9||b1){return e.getAttribute(c7)}c8=e.getAttributeNode(c7);return c8?typeof e[c7]==="boolean"?e[c7]?c7:null:c8.specified?c8.value:null:null
};cr=cX.selectors={cacheLength:50,createPseudo:cx,match:cA,attrHandle:b3?{}:{href:function(e){return e.getAttribute("href",2)
},type:function(e){return e.getAttribute("type")}},find:{ID:b2?function(c7,e,c9){if(typeof e.getElementById!==c0&&!c9){var c8=e.getElementById(c7);
return c8&&c8.parentNode?[c8]:[]}}:function(c7,e,c9){if(typeof e.getElementById!==c0&&!c9){var c8=e.getElementById(c7);return c8?c8.id===c7||typeof c8.getAttributeNode!==c0&&c8.getAttributeNode("id").value===c7?[c8]:c4:[]
}},TAG:b4?function(c7,e){if(typeof e.getElementsByTagName!==c0){return e.getElementsByTagName(c7)}}:function(da,e){var c9=e.getElementsByTagName(da);
if(da==="*"){var c7,db=[],c8=0;for(;(c7=c9[c8]);c8++){if(c7.nodeType===1){db.push(c7)}}return db}return c9},NAME:b6&&function(c7,e){if(typeof e.getElementsByName!==c0){return e.getElementsByName(name)
}},CLASS:b5&&function(e,c7,c8){if(typeof c7.getElementsByClassName!==c0&&!c8){return c7.getElementsByClassName(e)}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cI,"");
e[3]=(e[4]||e[5]||"").replace(cI,"");if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();
if(e[1]==="nth"){if(!e[2]){cX.error(e[0])}e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd"));e[4]=+((e[6]+e[7])||e[2]==="odd")
}else{if(e[2]){cX.error(e[0])}}return e},PSEUDO:function(c7){var c8,e;if(cA.CHILD.test(c7[0])){return null}if(c7[3]){c7[2]=c7[3]
}else{if((c8=c7[4])){if(cP.test(c8)&&(e=c3(c8,true))&&(e=c8.indexOf(")",c8.length-e)-c8.length)){c8=c8.slice(0,e);c7[0]=c7[0].slice(0,e)
}c7[2]=c8}}return c7.slice(0,3)}},filter:{ID:b2?function(e){e=e.replace(cI,"");return function(c7){return c7.getAttribute("id")===e
}}:function(e){e=e.replace(cI,"");return function(c7){var c8=typeof c7.getAttributeNode!==c0&&c7.getAttributeNode("id");return c8&&c8.value===e
}},TAG:function(e){if(e==="*"){return function(){return true}}e=e.replace(cI,"").toLowerCase();return function(c7){return c7.nodeName&&c7.nodeName.toLowerCase()===e
}},CLASS:function(e){var c7=cb[cq][e];if(!c7){c7=cb(e,new RegExp("(^|"+c5+")"+e+"("+c5+"|$)"))}return function(c8){return c7.test(c8.className||(typeof c8.getAttribute!==c0&&c8.getAttribute("class"))||"")
}},ATTR:function(c7,c8,e){return function(da,c9){var db=cX.attr(da,c7);if(db==null){return c8==="!="}if(!c8){return true}db+="";
return c8==="="?db===e:c8==="!="?db!==e:c8==="^="?e&&db.indexOf(e)===0:c8==="*="?e&&db.indexOf(e)>-1:c8==="$="?e&&db.substr(db.length-e.length)===e:c8==="~="?(" "+db+" ").indexOf(e)>-1:c8==="|="?db===e||db.substr(0,e.length+1)===e+"-":false
}},CHILD:function(c9,e,c7,c8){if(c9==="nth"){return function(db){var dc,da,dd=db.parentNode;if(c7===1&&c8===0){return true}if(dd){da=0;
for(dc=dd.firstChild;dc;dc=dc.nextSibling){if(dc.nodeType===1){da++;if(db===dc){break}}}}da-=c8;return da===c7||(da%c7===0&&da/c7>=0)
}}return function(da){var db=da;switch(c9){case"only":case"first":while((db=db.previousSibling)){if(db.nodeType===1){return false
}}if(c9==="first"){return true}db=da;case"last":while((db=db.nextSibling)){if(db.nodeType===1){return false}}return true}}},PSEUDO:function(c9,c7){var e,c8=cr.pseudos[c9]||cr.setFilters[c9.toLowerCase()]||cX.error("unsupported pseudo: "+c9);
if(c8[cq]){return c8(c7)}if(c8.length>1){e=[c9,c9,"",c7];return cr.setFilters.hasOwnProperty(c9.toLowerCase())?cx(function(de,dd){var db,dc=c8(de,c7),da=dc.length;
while(da--){db=cv.call(de,dc[da]);de[db]=!(dd[db]=dc[da])}}):function(da){return c8(da,0,e)}}return c8}},pseudos:{not:cx(function(c9){var e=[],c8=[],c7=cc(c9.replace(cS,"$1"));
return c7[cq]?cx(function(de,dd,da,dg){var db,df=c7(de,null,dg,[]),dc=de.length;while(dc--){if((db=df[dc])){de[dc]=!(dd[dc]=db)
}}}):function(db,da,dc){e[0]=db;c7(e,null,dc,c8);return !c8.pop()}}),has:cx(function(e){return function(c7){return cX(e,c7).length>0
}}),contains:cx(function(e){return function(c7){return(c7.textContent||c7.innerText||cs(c7)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===false
},disabled:function(e){return e.disabled===true},checked:function(e){var c7=e.nodeName.toLowerCase();return(c7==="input"&&!!e.checked)||(c7==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},parent:function(e){return !cr.pseudos.empty(e)
},empty:function(e){var c7;e=e.firstChild;while(e){if(e.nodeName>"@"||(c7=e.nodeType)===3||c7===4){return false}e=e.nextSibling
}return true},header:function(e){return cM.test(e.nodeName)},text:function(c7){var c8,e;return c7.nodeName.toLowerCase()==="input"&&(c8=c7.type)==="text"&&((e=c7.getAttribute("type"))==null||e.toLowerCase()===c8)
},radio:ci("radio"),checkbox:ci("checkbox"),file:ci("file"),password:ci("password"),image:ci("image"),submit:cg("submit"),reset:cg("reset"),button:function(e){var c7=e.nodeName.toLowerCase();
return c7==="input"&&e.type==="button"||c7==="button"},input:function(e){return cN.test(e.nodeName)},focus:function(c7){var e=c7.ownerDocument;
return c7===e.activeElement&&(!e.hasFocus||e.hasFocus())&&!!(c7.type||c7.href)},active:function(e){return e===e.ownerDocument.activeElement
},first:cj(function(c8,c7,e){return[0]}),last:cj(function(c8,c7,e){return[c7-1]}),eq:cj(function(c8,c7,e){return[e<0?e+c7:e]}),even:cj(function(c9,c8,e){for(var c7=0;
c7<c8;c7+=2){c9.push(c7)}return c9}),odd:cj(function(c9,c8,e){for(var c7=1;c7<c8;c7+=2){c9.push(c7)}return c9}),lt:cj(function(c9,c8,e){for(var c7=e<0?e+c8:e;
--c7>=0;){c9.push(c7)}return c9}),gt:cj(function(c9,c8,e){for(var c7=e<0?e+c8:e;++c7<c8;){c9.push(c7)}return c9})}};function cW(e,c7,c9){if(e===c7){return c9
}var c8=e.nextSibling;while(c8){if(c8===c7){return -1}c8=c8.nextSibling}return 1}cZ=cl.compareDocumentPosition?function(e,c7){if(e===c7){ct=true;
return 0}return(!e.compareDocumentPosition||!c7.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(c7)&4)?-1:1
}:function(e,da){if(e===da){ct=true;return 0}else{if(e.sourceIndex&&da.sourceIndex){return e.sourceIndex-da.sourceIndex}}var c7,db,c8=[],dc=[],c9=e.parentNode,dd=da.parentNode,de=c9;
if(c9===dd){return cW(e,da)}else{if(!c9){return -1}else{if(!dd){return 1}}}while(de){c8.unshift(de);de=de.parentNode}de=dd;while(de){dc.unshift(de);
de=de.parentNode}c7=c8.length;db=dc.length;for(var df=0;df<c7&&df<db;df++){if(c8[df]!==dc[df]){return cW(c8[df],dc[df])}}return df===c7?cW(e,dc[df],-1):cW(c8[df],da,1)
};[0,0].sort(cZ);b8=!ct;cX.uniqueSort=function(c8){var e,c7=1;ct=b8;c8.sort(cZ);if(ct){for(;(e=c8[c7]);c7++){if(e===c8[c7-1]){c8.splice(c7--,1)
}}}return c8};cX.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};function c3(dc,da){var c9,c8,de,df,dd,c7,db,e=c2[cq][dc];
if(e){return da?0:e.slice(0)}dd=dc;c7=[];db=cr.preFilter;while(dd){if(!c9||(c8=cK.exec(dd))){if(c8){dd=dd.slice(c8[0].length)
}c7.push(de=[])}c9=false;if((c8=cJ.exec(dd))){de.push(c9=new c1(c8.shift()));dd=dd.slice(c9.length);c9.type=c8[0].replace(cS," ")
}for(df in cr.filter){if((c8=cA[df].exec(dd))&&(!db[df]||(c8=db[df](c8,cm,true)))){de.push(c9=new c1(c8.shift()));dd=dd.slice(c9.length);
c9.type=df;c9.matches=c8}}if(!c9){break}}return da?dd.length:dd?cX.error(dc):c2(dc,c7).slice(0)}function bZ(db,c8,e){var c9=c8.dir,c7=e&&c8.dir==="parentNode",da=cn++;
return c8.first?function(dd,dc,de){while((dd=dd[c9])){if(c7||dd.nodeType===1){return db(dd,dc,de)}}}:function(dg,de,dh){if(!dh){var dc,df=ck+" "+da+" ",dd=df+b9;
while((dg=dg[c9])){if(c7||dg.nodeType===1){if((dc=dg[cq])===dd){return dg.sizset}else{if(typeof dc==="string"&&dc.indexOf(df)===0){if(dg.sizset){return dg
}}else{dg[cq]=dd;if(db(dg,de,dh)){dg.sizset=true;return dg}dg.sizset=false}}}}}else{while((dg=dg[c9])){if(c7||dg.nodeType===1){if(db(dg,de,dh)){return dg
}}}}}}function cp(e){return e.length>1?function(c8,c7,da){var c9=e.length;while(c9--){if(!e[c9](c8,c7,da)){return false}}return true
}:e[0]}function ce(de,db,c8,e,df){var c7,dd=[],c9=0,da=de.length,dc=db!=null;for(;c9<da;c9++){if((c7=de[c9])){if(!c8||c8(c7,e,df)){dd.push(c7);
if(dc){db.push(c9)}}}}return dd}function cV(da,db,e,c7,c8,c9){if(c7&&!c7[cq]){c7=cV(c7)}if(c8&&!c8[cq]){c8=cV(c8,c9)}return cx(function(dn,dm,dc,dp){if(dn&&c8){return
}var df,dd,di,dl=[],dj=[],dk=dm.length,de=dn||cB(db||"*",dc.nodeType?[dc]:dc,[],dn),dg=da&&(dn||!db)?ce(de,dl,da,dc,dp):de,dh=e?c8||(dn?da:dk||c7)?[]:dm:dg;
if(e){e(dg,dh,dc,dp)}if(c7){di=ce(dh,dj);c7(di,[],dc,dp);df=di.length;while(df--){if((dd=di[df])){dh[dj[df]]=!(dg[dj[df]]=dd)
}}}if(dn){df=da&&dh.length;while(df--){if((dd=dh[df])){dn[dl[df]]=!(dm[dl[df]]=dd)}}}else{dh=ce(dh===dm?dh.splice(dk,dh.length):dh);
if(c8){c8(null,dm,dh,dp)}else{cH.apply(dm,dh)}}})}function cz(dg){var e,de,c9,db=dg.length,da=cr.relative[dg[0].type],c8=da||cr.relative[" "],c7=da?1:0,dd=bZ(function(dh){return dh===e
},c8,true),dc=bZ(function(dh){return cv.call(e,dh)>-1},c8,true),df=[function(di,dh,dj){return(!da&&(dj||dh!==cD))||((e=dh).nodeType?dd(di,dh,dj):dc(di,dh,dj))
}];for(;c7<db;c7++){if((de=cr.relative[dg[c7].type])){df=[bZ(cp(df),de)]}else{de=cr.filter[dg[c7].type].apply(null,dg[c7].matches);
if(de[cq]){c9=++c7;for(;c9<db;c9++){if(cr.relative[dg[c9].type]){break}}return cV(c7>1&&cp(df),c7>1&&dg.slice(0,c7-1).join("").replace(cS,"$1"),de,c7<c9&&cz(dg.slice(c7,c9)),c9<db&&cz((dg=dg.slice(c9))),c9<db&&dg.join(""))
}df.push(de)}}return cp(df)}function cy(c8,c9){var c7=c9.length>0,e=c8.length>0,da=function(dn,db,dr,dm,dg){var de,di,dk,dp=[],dj=0,dh="0",dq=dn&&[],dl=dg!=null,dc=cD,df=dn||e&&cr.find.TAG("*",dg&&db.parentNode||db),dd=(ck+=dc==null?1:Math.E);
if(dl){cD=db!==cm&&db;b9=da.el}for(;(de=df[dh])!=null;dh++){if(e&&de){for(di=0;(dk=c8[di]);di++){if(dk(de,db,dr)){dm.push(de);
break}}if(dl){ck=dd;b9=++da.el}}if(c7){if((de=!dk&&de)){dj--}if(dn){dq.push(de)}}}dj+=dh;if(c7&&dh!==dj){for(di=0;(dk=c9[di]);
di++){dk(dq,dp,db,dr)}if(dn){if(dj>0){while(dh--){if(!(dq[dh]||dp[dh])){dp[dh]=cE.call(dm)}}}dp=ce(dp)}cH.apply(dm,dp);if(dl&&!dn&&dp.length>0&&(dj+c9.length)>1){cX.uniqueSort(dm)
}}if(dl){ck=dd;cD=dc}return dq};da.el=0;return c7?cx(da):da}cc=cX.compile=function(da,c8){var c9,db=[],c7=[],e=cd[cq][da];if(!e){if(!c8){c8=c3(da)
}c9=c8.length;while(c9--){e=cz(c8[c9]);if(e[cq]){db.push(e)}else{c7.push(e)}}e=cd(da,cy(c7,db))}return e};function cB(db,e,c9,da){var c7=0,c8=e.length;
for(;c7<c8;c7++){cX(db,e[c7],c9,da)}return c9}function cT(dd,e,db,dc,dh){var c8,df,de,dg,c7,da=c3(dd),c9=da.length;if(!dc){if(da.length===1){df=da[0]=da[0].slice(0);
if(df.length>2&&(de=df[0]).type==="ID"&&e.nodeType===9&&!dh&&cr.relative[df[1].type]){e=cr.find.ID(de.matches[0].replace(cI,""),e,dh)[0];
if(!e){return db}dd=dd.slice(df.shift().length)}for(c8=cA.POS.test(dd)?-1:df.length-1;c8>=0;c8--){de=df[c8];if(cr.relative[(dg=de.type)]){break
}if((c7=cr.find[dg])){if((dc=c7(de.matches[0].replace(cI,""),cR.test(df[0].type)&&e.parentNode||e,dh))){df.splice(c8,1);dd=dc.length&&df.join("");
if(!dd){cH.apply(db,cY.call(dc,0));return db}break}}}}}cc(dd,da)(dc,e,dh,db,cR.test(dd));return db}if(cm.querySelectorAll){(function(){var e,c8=cT,dc=/'|\\/g,c9=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,db=[":focus"],da=[":active",":focus"],c7=cl.matchesSelector||cl.mozMatchesSelector||cl.webkitMatchesSelector||cl.oMatchesSelector||cl.msMatchesSelector;
b0(function(dd){dd.innerHTML="<select><option selected=''></option></select>";if(!dd.querySelectorAll("[selected]").length){db.push("\\["+c5+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!dd.querySelectorAll(":checked").length){db.push(":checked")}});b0(function(dd){dd.innerHTML="<p test=''></p>";if(dd.querySelectorAll("[test^='']").length){db.push("[*^$]="+c5+"*(?:\"\"|'')")
}dd.innerHTML="<input type='hidden'/>";if(!dd.querySelectorAll(":enabled").length){db.push(":enabled",":disabled")}});db=new RegExp(db.join("|"));
cT=function(dn,dd,dl,dm,dp){if(!dm&&!dp&&(!db||!db.test(dn))){var de,df,dj=true,di=cq,dg=dd,dh=dd.nodeType===9&&dn;if(dd.nodeType===1&&dd.nodeName.toLowerCase()!=="object"){de=c3(dn);
if((dj=dd.getAttribute("id"))){di=dj.replace(dc,"\\$&")}else{dd.setAttribute("id",di)}di="[id='"+di+"'] ";df=de.length;while(df--){de[df]=di+de[df].join("")
}dg=cR.test(dn)&&dd.parentNode||dd;dh=de.join(",")}if(dh){try{cH.apply(dl,cY.call(dg.querySelectorAll(dh),0));return dl}catch(dk){}finally{if(!dj){dd.removeAttribute("id")
}}}}return c8(dn,dd,dl,dm,dp)};if(c7){b0(function(dd){e=c7.call(dd,"div");try{c7.call(dd,"[test!='']:sizzle");da.push("!=",cG)
}catch(de){}});da=new RegExp(da.join("|"));cX.matchesSelector=function(de,df){df=df.replace(c9,"='$1']");if(!cw(de)&&!da.test(df)&&(!db||!db.test(df))){try{var dg=c7.call(de,df);
if(dg||e||de.document&&de.document.nodeType!==11){return dg}}catch(dd){}}return cX(df,null,null,[de]).length>0}}})()}cr.pseudos.nth=cr.pseudos.eq;
function cU(){}cr.filters=cU.prototype=cr.pseudos;cr.setFilters=new cU();cX.attr=ap.attr;ap.find=cX;ap.expr=cX.selectors;ap.expr[":"]=ap.expr.pseudos;
ap.unique=cX.uniqueSort;ap.text=cX.getText;ap.isXMLDoc=cX.isXML;ap.contains=cX.contains})(bT);var bC=/Until$/,bi=/^(?:parents|prev(?:Until|All))/,ao=/^.[^:#\[\.,]*$/,a9=ap.expr.match.needsContext,ag={children:true,contents:true,next:true,prev:true};
ap.fn.extend({find:function(b4){var e,bZ,b0,b1,b2,b3,b5=this;if(typeof b4!=="string"){return ap(b4).filter(function(){for(e=0,bZ=b5.length;
e<bZ;e++){if(ap.contains(b5[e],this)){return true}}})}b3=this.pushStack("","find",b4);for(e=0,bZ=this.length;e<bZ;e++){b0=b3.length;
ap.find(b4,this[e],b3);if(e>0){for(b1=b0;b1<b3.length;b1++){for(b2=0;b2<b0;b2++){if(b3[b2]===b3[b1]){b3.splice(b1--,1);break}}}}}return b3
},has:function(b0){var e,b1=ap(b0,this),bZ=b1.length;return this.filter(function(){for(e=0;e<bZ;e++){if(ap.contains(this,b1[e])){return true
}}})},not:function(e){return this.pushStack(bU(this,e,false),"not",e)},filter:function(e){return this.pushStack(bU(this,e,true),"filter",e)
},is:function(e){return !!e&&(typeof e==="string"?a9.test(e)?ap(e,this.context).index(this[0])>=0:ap.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(b4,e){var bZ,b0=0,b1=this.length,b3=[],b2=a9.test(b4)||typeof b4!=="string"?ap(b4,e||this.context):0;for(;
b0<b1;b0++){bZ=this[b0];while(bZ&&bZ.ownerDocument&&bZ!==e&&bZ.nodeType!==11){if(b2?b2.index(bZ)>-1:ap.find.matchesSelector(bZ,b4)){b3.push(bZ);
break}bZ=bZ.parentNode}}b3=b3.length>1?ap.unique(b3):b3;return this.pushStack(b3,"closest",b4)},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1
}if(typeof e==="string"){return ap.inArray(this[0],ap(e))}return ap.inArray(e.jquery?e[0]:e,this)},add:function(b0,bZ){var b1=typeof b0==="string"?ap(b0,bZ):ap.makeArray(b0&&b0.nodeType?[b0]:b0),e=ap.merge(this.get(),b1);
return this.pushStack(al(b1[0])||al(e[0])?e:ap.unique(e))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});ap.fn.andSelf=ap.fn.addBack;function al(e){return !e||!e.parentNode||e.parentNode.nodeType===11}function bM(e,bZ){do{e=e[bZ]
}while(e&&e.nodeType!==1);return e}ap.each({parent:function(e){var bZ=e.parentNode;return bZ&&bZ.nodeType!==11?bZ:null},parents:function(e){return ap.dir(e,"parentNode")
},parentsUntil:function(e,bZ,b0){return ap.dir(e,"parentNode",b0)},next:function(e){return bM(e,"nextSibling")},prev:function(e){return bM(e,"previousSibling")
},nextAll:function(e){return ap.dir(e,"nextSibling")},prevAll:function(e){return ap.dir(e,"previousSibling")},nextUntil:function(e,bZ,b0){return ap.dir(e,"nextSibling",b0)
},prevUntil:function(e,bZ,b0){return ap.dir(e,"previousSibling",b0)},siblings:function(e){return ap.sibling((e.parentNode||{}).firstChild,e)
},children:function(e){return ap.sibling(e.firstChild)},contents:function(e){return ap.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:ap.merge([],e.childNodes)
}},function(bZ,e){ap.fn[bZ]=function(b2,b1){var b0=ap.map(this,e,b2);if(!bC.test(bZ)){b1=b2}if(b1&&typeof b1==="string"){b0=ap.filter(b1,b0)
}b0=this.length>1&&!ag[bZ]?ap.unique(b0):b0;if(this.length>1&&bi.test(bZ)){b0=b0.reverse()}return this.pushStack(b0,bZ,z.call(arguments).join(","))
}});ap.extend({filter:function(bZ,e,b0){if(b0){bZ=":not("+bZ+")"}return e.length===1?ap.find.matchesSelector(e[0],bZ)?[e[0]]:[]:ap.find.matches(bZ,e)
},dir:function(b0,bZ,b2){var b1=[],e=b0[bZ];while(e&&e.nodeType!==9&&(b2===bR||e.nodeType!==1||!ap(e).is(b2))){if(e.nodeType===1){b1.push(e)
}e=e[bZ]}return b1},sibling:function(bZ,e){var b0=[];for(;bZ;bZ=bZ.nextSibling){if(bZ.nodeType===1&&bZ!==e){b0.push(bZ)}}return b0
}});function bU(e,b1,b0){b1=b1||0;if(ap.isFunction(b1)){return ap.grep(e,function(b2,b3){var b4=!!b1.call(b2,b3,b2);return b4===b0
})}else{if(b1.nodeType){return ap.grep(e,function(b2,b3){return(b2===b1)===b0})}else{if(typeof b1==="string"){var bZ=ap.grep(e,function(b2){return b2.nodeType===1
});if(ao.test(b1)){return ap.filter(b1,bZ,!b0)}else{b1=ap.filter(b1,bZ)}}}}return ap.grep(e,function(b2,b3){return(ap.inArray(b2,b1)>=0)===b0
})}function F(e){var bZ=au.split("|"),b0=e.createDocumentFragment();if(b0.createElement){while(bZ.length){b0.createElement(bZ.pop())
}}return b0}var au="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aZ=/ jQuery\d+="(?:null|\d+)"/g,a3=/^\s+/,bI=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bw=/<([\w:]+)/,bx=/<tbody/i,aY=/<|&#?\w+;/,bc=/<(?:script|style|link)/i,ba=/<(?:script|object|embed|option|style)/i,bd=new RegExp("<(?:"+au+")[\\s/>]","i"),aF=/^(?:checkbox|radio)$/,aG=/checked\s*(?:[^=]|=\s*.checked.)/i,bt=/\/(java|ecma)script/i,aI=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bV={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bJ=F(Q),Z=bJ.appendChild(Q.createElement("div"));
bV.optgroup=bV.option;bV.tbody=bV.tfoot=bV.colgroup=bV.caption=bV.thead;bV.th=bV.td;if(!ap.support.htmlSerialize){bV._default=[1,"X<div>","</div>"]
}ap.fn.extend({text:function(e){return ap.access(this,function(bZ){return bZ===bR?ap.text(this):this.empty().append((this[0]&&this[0].ownerDocument||Q).createTextNode(bZ))
},null,e,arguments.length)},wrapAll:function(e){if(ap.isFunction(e)){return this.each(function(b0){ap(this).wrapAll(e.call(this,b0))
})}if(this[0]){var bZ=ap(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){bZ.insertBefore(this[0])}bZ.map(function(){var b0=this;
while(b0.firstChild&&b0.firstChild.nodeType===1){b0=b0.firstChild}return b0}).append(this)}return this},wrapInner:function(e){if(ap.isFunction(e)){return this.each(function(bZ){ap(this).wrapInner(e.call(this,bZ))
})}return this.each(function(){var b0=ap(this),bZ=b0.contents();if(bZ.length){bZ.wrapAll(e)}else{b0.append(e)}})},wrap:function(e){var bZ=ap.isFunction(e);
return this.each(function(b0){ap(this).wrapAll(bZ?e.call(this,b0):e)})},unwrap:function(){return this.parent().each(function(){if(!ap.nodeName(this,"body")){ap(this).replaceWith(this.childNodes)
}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.appendChild(e)
}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.insertBefore(e,this.firstChild)
}})},before:function(){if(!al(this[0])){return this.domManip(arguments,false,function(bZ){this.parentNode.insertBefore(bZ,this)
})}if(arguments.length){var e=ap.clean(arguments);return this.pushStack(ap.merge(e,this),"before",this.selector)}},after:function(){if(!al(this[0])){return this.domManip(arguments,false,function(bZ){this.parentNode.insertBefore(bZ,this.nextSibling)
})}if(arguments.length){var e=ap.clean(arguments);return this.pushStack(ap.merge(this,e),"after",this.selector)}},remove:function(b1,b0){var e,bZ=0;
for(;(e=this[bZ])!=null;bZ++){if(!b1||ap.filter(b1,[e]).length){if(!b0&&e.nodeType===1){ap.cleanData(e.getElementsByTagName("*"));
ap.cleanData([e])}if(e.parentNode){e.parentNode.removeChild(e)}}}return this},empty:function(){var e,bZ=0;for(;(e=this[bZ])!=null;
bZ++){if(e.nodeType===1){ap.cleanData(e.getElementsByTagName("*"))}while(e.firstChild){e.removeChild(e.firstChild)}}return this
},clone:function(e,bZ){e=e==null?false:e;bZ=bZ==null?e:bZ;return this.map(function(){return ap.clone(this,e,bZ)})},html:function(e){return ap.access(this,function(b3){var b0=this[0]||{},b1=0,b2=this.length;
if(b3===bR){return b0.nodeType===1?b0.innerHTML.replace(aZ,""):bR}if(typeof b3==="string"&&!bc.test(b3)&&(ap.support.htmlSerialize||!bd.test(b3))&&(ap.support.leadingWhitespace||!a3.test(b3))&&!bV[(bw.exec(b3)||["",""])[1].toLowerCase()]){b3=b3.replace(bI,"<$1></$2>");
try{for(;b1<b2;b1++){b0=this[b1]||{};if(b0.nodeType===1){ap.cleanData(b0.getElementsByTagName("*"));b0.innerHTML=b3}}b0=0}catch(bZ){}}if(b0){this.empty().append(b3)
}},null,e,arguments.length)},replaceWith:function(e){if(!al(this[0])){if(ap.isFunction(e)){return this.each(function(bZ){var b1=ap(this),b0=b1.html();
b1.replaceWith(e.call(this,bZ,b0))})}if(typeof e!=="string"){e=ap(e).detach()}return this.each(function(){var bZ=this.nextSibling,b0=this.parentNode;
ap(this).remove();if(bZ){ap(bZ).before(e)}else{ap(b0).append(e)}})}return this.length?this.pushStack(ap(ap.isFunction(e)?e():e),"replaceWith",e):this
},detach:function(e){return this.remove(e,true)},domManip:function(e,b7,bZ){e=[].concat.apply([],e);var b5,b0,b1,b3,b2=0,b8=e[0],b6=[],b4=this.length;
if(!ap.support.checkClone&&b4>1&&typeof b8==="string"&&aG.test(b8)){return this.each(function(){ap(this).domManip(e,b7,bZ)})}if(ap.isFunction(b8)){return this.each(function(b9){var ca=ap(this);
e[0]=b8.call(this,b9,b7?ca.html():bR);ca.domManip(e,b7,bZ)})}if(this[0]){b5=ap.buildFragment(e,this,b6);b1=b5.fragment;b0=b1.firstChild;
if(b1.childNodes.length===1){b1=b0}if(b0){b7=b7&&ap.nodeName(b0,"tr");for(b3=b5.cacheable||b4-1;b2<b4;b2++){bZ.call(b7&&ap.nodeName(this[b2],"table")?W(this[b2],"tbody"):this[b2],b2===b3?b1:ap.clone(b1,true,true))
}}b1=b0=null;if(b6.length){ap.each(b6,function(ca,b9){if(b9.src){if(ap.ajax){ap.ajax({url:b9.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{ap.error("no ajax")}}else{ap.globalEval((b9.text||b9.textContent||b9.innerHTML||"").replace(aI,""))}if(b9.parentNode){b9.parentNode.removeChild(b9)
}})}}return this}});function W(e,bZ){return e.getElementsByTagName(bZ)[0]||e.appendChild(e.ownerDocument.createElement(bZ))}function r(b4,bZ){if(bZ.nodeType!==1||!ap.hasData(b4)){return
}var b5,b1,b2,b3=ap._data(b4),e=ap._data(bZ,b3),b0=b3.events;if(b0){delete e.handle;e.events={};for(b5 in b0){for(b1=0,b2=b0[b5].length;
b1<b2;b1++){ap.event.add(bZ,b5,b0[b5][b1])}}}if(e.data){e.data=ap.extend({},e.data)}}function s(b0,e){var bZ;if(e.nodeType!==1){return
}if(e.clearAttributes){e.clearAttributes()}if(e.mergeAttributes){e.mergeAttributes(b0)}bZ=e.nodeName.toLowerCase();if(bZ==="object"){if(e.parentNode){e.outerHTML=b0.outerHTML
}if(ap.support.html5Clone&&(b0.innerHTML&&!ap.trim(e.innerHTML))){e.innerHTML=b0.innerHTML}}else{if(bZ==="input"&&aF.test(b0.type)){e.defaultChecked=e.checked=b0.checked;
if(e.value!==b0.value){e.value=b0.value}}else{if(bZ==="option"){e.selected=b0.defaultSelected}else{if(bZ==="input"||bZ==="textarea"){e.defaultValue=b0.defaultValue
}else{if(bZ==="script"&&e.text!==b0.text){e.text=b0.text}}}}}e.removeAttribute(ap.expando)}ap.buildFragment=function(e,b1,b4){var b3,bZ,b0,b2=e[0];
b1=b1||Q;b1=!b1.nodeType&&b1[0]||b1;b1=b1.ownerDocument||b1;if(e.length===1&&typeof b2==="string"&&b2.length<512&&b1===Q&&b2.charAt(0)==="<"&&!ba.test(b2)&&(ap.support.checkClone||!aG.test(b2))&&(ap.support.html5Clone||!bd.test(b2))){bZ=true;
b3=ap.fragments[b2];b0=b3!==bR}if(!b3){b3=b1.createDocumentFragment();ap.clean(e,b1,b3,b4);if(bZ){ap.fragments[b2]=b0&&b3}}return{fragment:b3,cacheable:bZ}
};ap.fragments={};ap.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,bZ){ap.fn[e]=function(b6){var b0,b1=0,b5=[],b2=ap(b6),b3=b2.length,b4=this.length===1&&this[0].parentNode;
if((b4==null||b4&&b4.nodeType===11&&b4.childNodes.length===1)&&b3===1){b2[bZ](this[0]);return this}else{for(;b1<b3;b1++){b0=(b1>0?this.clone(true):this).get();
ap(b2[b1])[bZ](b0);b5=b5.concat(b0)}return this.pushStack(b5,e,b2.selector)}}});function ac(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")
}else{if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")}else{return[]}}}function X(e){if(aF.test(e.type)){e.defaultChecked=e.checked
}}ap.extend({clone:function(b2,bZ,b0){var b4,b1,b3,e;if(ap.support.html5Clone||ap.isXMLDoc(b2)||!bd.test("<"+b2.nodeName+">")){e=b2.cloneNode(true)
}else{Z.innerHTML=b2.outerHTML;Z.removeChild(e=Z.firstChild)}if((!ap.support.noCloneEvent||!ap.support.noCloneChecked)&&(b2.nodeType===1||b2.nodeType===11)&&!ap.isXMLDoc(b2)){s(b2,e);
b4=ac(b2);b1=ac(e);for(b3=0;b4[b3];++b3){if(b1[b3]){s(b4[b3],b1[b3])}}}if(bZ){r(b2,e);if(b0){b4=ac(b2);b1=ac(e);for(b3=0;b4[b3];
++b3){r(b4[b3],b1[b3])}}}b4=b1=null;return e},clean:function(b2,e,b3,cc){var b6,b7,b1,cd,cf,bZ,b0,b5,ce,b9,b4,b8,cb=e===Q&&bJ,ca=[];
if(!e||typeof e.createDocumentFragment==="undefined"){e=Q}for(b6=0;(b1=b2[b6])!=null;b6++){if(typeof b1==="number"){b1+=""}if(!b1){continue
}if(typeof b1==="string"){if(!aY.test(b1)){b1=e.createTextNode(b1)}else{cb=cb||F(e);b0=e.createElement("div");cb.appendChild(b0);
b1=b1.replace(bI,"<$1></$2>");cd=(bw.exec(b1)||["",""])[1].toLowerCase();cf=bV[cd]||bV._default;bZ=cf[0];b0.innerHTML=cf[1]+b1+cf[2];
while(bZ--){b0=b0.lastChild}if(!ap.support.tbody){b5=bx.test(b1);ce=cd==="table"&&!b5?b0.firstChild&&b0.firstChild.childNodes:cf[1]==="<table>"&&!b5?b0.childNodes:[];
for(b7=ce.length-1;b7>=0;--b7){if(ap.nodeName(ce[b7],"tbody")&&!ce[b7].childNodes.length){ce[b7].parentNode.removeChild(ce[b7])
}}}if(!ap.support.leadingWhitespace&&a3.test(b1)){b0.insertBefore(e.createTextNode(a3.exec(b1)[0]),b0.firstChild)}b1=b0.childNodes;
b0.parentNode.removeChild(b0)}}if(b1.nodeType){ca.push(b1)}else{ap.merge(ca,b1)}}if(b0){b1=b0=cb=null}if(!ap.support.appendChecked){for(b6=0;
(b1=ca[b6])!=null;b6++){if(ap.nodeName(b1,"input")){X(b1)}else{if(typeof b1.getElementsByTagName!=="undefined"){ap.grep(b1.getElementsByTagName("input"),X)
}}}}if(b3){b4=function(cg){if(!cg.type||bt.test(cg.type)){return cc?cc.push(cg.parentNode?cg.parentNode.removeChild(cg):cg):b3.appendChild(cg)
}};for(b6=0;(b1=ca[b6])!=null;b6++){if(!(ap.nodeName(b1,"script")&&b4(b1))){b3.appendChild(b1);if(typeof b1.getElementsByTagName!=="undefined"){b8=ap.grep(ap.merge([],b1.getElementsByTagName("script")),b4);
ca.splice.apply(ca,[b6+1,0].concat(b8));b6+=b8.length}}}}return ca},cleanData:function(b3,e){var b0,b5,b2,b8,b4=0,b6=ap.expando,bZ=ap.cache,b1=ap.support.deleteExpando,b7=ap.event.special;
for(;(b2=b3[b4])!=null;b4++){if(e||ap.acceptData(b2)){b5=b2[b6];b0=b5&&bZ[b5];if(b0){if(b0.events){for(b8 in b0.events){if(b7[b8]){ap.event.remove(b2,b8)
}else{ap.removeEvent(b2,b8,b0.handle)}}}if(bZ[b5]){delete bZ[b5];if(b1){delete b2[b6]}else{if(b2.removeAttribute){b2.removeAttribute(b6)
}else{b2[b6]=null}}ap.deletedIds.push(b5)}}}}}});(function(){var bZ,e;ap.uaMatch=function(b1){b1=b1.toLowerCase();var b0=/(chrome)[ \/]([\w.]+)/.exec(b1)||/(webkit)[ \/]([\w.]+)/.exec(b1)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b1)||/(msie) ([\w.]+)/.exec(b1)||b1.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b1)||[];
return{browser:b0[1]||"",version:b0[2]||"0"}};bZ=ap.uaMatch(ar.userAgent);e={};if(bZ.browser){e[bZ.browser]=true;e.version=bZ.version
}if(e.chrome){e.webkit=true}else{if(e.webkit){e.safari=true}}ap.browser=e;ap.sub=function(){function b1(b4,b3){return new b1.fn.init(b4,b3)
}ap.extend(true,b1,this);b1.superclass=this;b1.fn=b1.prototype=this();b1.fn.constructor=b1;b1.sub=this.sub;b1.fn.init=function b0(b4,b3){if(b3&&b3 instanceof ap&&!(b3 instanceof b1)){b3=b1(b3)
}return ap.fn.init.call(this,b4,b3,b2)};b1.fn.init.prototype=b1.fn;var b2=b1(Q);return b1}})();var N,ai,aj,aB=/alpha\([^)]*\)/i,bh=/opacity=([^)]*)/,bj=/^(top|right|bottom|left)$/,aM=/^(none|table(?!-c[ea]).+)/,a5=/^margin/,bf=new RegExp("^("+v+")(.*)$","i"),be=new RegExp("^("+v+")(?!px)[a-z%]+$","i"),bo=new RegExp("^([-+])=("+v+")","i"),T={},M={position:"absolute",visibility:"hidden",display:"block"},K={letterSpacing:0,fontWeight:400},J=["Top","Right","Bottom","Left"],L=["Webkit","O","Moz","ms"],U=ap.fn.toggle;
function bS(b2,b0){if(b0 in b2){return b0}var e=b0.charAt(0).toUpperCase()+b0.slice(1),b1=b0,bZ=L.length;while(bZ--){b0=L[bZ]+e;
if(b0 in b2){return b0}}return b1}function an(bZ,e){bZ=e||bZ;return ap.css(bZ,"display")==="none"||!ap.contains(bZ.ownerDocument,bZ)
}function bL(b0,b3){var bZ,e,b4=[],b1=0,b2=b0.length;for(;b1<b2;b1++){bZ=b0[b1];if(!bZ.style){continue}b4[b1]=ap._data(bZ,"olddisplay");
if(b3){if(!b4[b1]&&bZ.style.display==="none"){bZ.style.display=""}if(bZ.style.display===""&&an(bZ)){b4[b1]=ap._data(bZ,"olddisplay",I(bZ.nodeName))
}}else{e=N(bZ,"display");if(!b4[b1]&&e!=="none"){ap._data(bZ,"olddisplay",e)}}}for(b1=0;b1<b2;b1++){bZ=b0[b1];if(!bZ.style){continue
}if(!b3||bZ.style.display==="none"||bZ.style.display===""){bZ.style.display=b3?b4[b1]||"":"none"}}return b0}ap.fn.extend({css:function(e,bZ){return ap.access(this,function(b0,b1,b2){return b2!==bR?ap.style(b0,b1,b2):ap.css(b0,b1)
},e,bZ,arguments.length>1)},show:function(){return bL(this,true)},hide:function(){return bL(this)},toggle:function(b0,bZ){var e=typeof b0==="boolean";
if(ap.isFunction(b0)&&ap.isFunction(bZ)){return U.apply(this,arguments)}return this.each(function(){if(e?b0:an(this)){ap(this).show()
}else{ap(this).hide()}})}});ap.extend({cssHooks:{opacity:{get:function(bZ,e){if(e){var b0=N(bZ,"opacity");return b0===""?"1":b0
}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":ap.support.cssFloat?"cssFloat":"styleFloat"},style:function(b0,b3,b8,b1){if(!b0||b0.nodeType===3||b0.nodeType===8||!b0.style){return
}var b5,b7,b2,b4=ap.camelCase(b3),b6=b0.style;b3=ap.cssProps[b4]||(ap.cssProps[b4]=bS(b6,b4));b2=ap.cssHooks[b3]||ap.cssHooks[b4];
if(b8!==bR){b7=typeof b8;if(b7==="string"&&(b5=bo.exec(b8))){b8=(b5[1]+1)*b5[2]+parseFloat(ap.css(b0,b3));b7="number"}if(b8==null||b7==="number"&&isNaN(b8)){return
}if(b7==="number"&&!ap.cssNumber[b4]){b8+="px"}if(!b2||!("set" in b2)||(b8=b2.set(b0,b8,b1))!==bR){try{b6[b3]=b8}catch(bZ){}}}else{if(b2&&"get" in b2&&(b5=b2.get(b0,false,b1))!==bR){return b5
}return b6[b3]}},css:function(e,b1,b3,bZ){var b5,b2,b0,b4=ap.camelCase(b1);b1=ap.cssProps[b4]||(ap.cssProps[b4]=bS(e.style,b4));
b0=ap.cssHooks[b1]||ap.cssHooks[b4];if(b0&&"get" in b0){b5=b0.get(e,true,bZ)}if(b5===bR){b5=N(e,b1)}if(b5==="normal"&&b1 in K){b5=K[b1]
}if(b3||bZ!==bR){b2=parseFloat(b5);return b3||ap.isNumeric(b2)?b2||0:b5}return b5},swap:function(bZ,b2,e){var b3,b0,b1={};for(b0 in b2){b1[b0]=bZ.style[b0];
bZ.style[b0]=b2[b0]}b3=e.call(bZ);for(b0 in b2){bZ.style[b0]=b1[b0]}return b3}});if(bT.getComputedStyle){N=function(bZ,b2){var b3,b5,b1,b0,e=bT.getComputedStyle(bZ,null),b4=bZ.style;
if(e){b3=e[b2];if(b3===""&&!ap.contains(bZ.ownerDocument,bZ)){b3=ap.style(bZ,b2)}if(be.test(b3)&&a5.test(b2)){b5=b4.width;b1=b4.minWidth;
b0=b4.maxWidth;b4.minWidth=b4.maxWidth=b4.width=b3;b3=e.width;b4.width=b5;b4.minWidth=b1;b4.maxWidth=b0}}return b3}}else{if(Q.documentElement.currentStyle){N=function(e,b0){var bZ,b2,b1=e.currentStyle&&e.currentStyle[b0],b3=e.style;
if(b1==null&&b3&&b3[b0]){b1=b3[b0]}if(be.test(b1)&&!bj.test(b0)){bZ=b3.left;b2=e.runtimeStyle&&e.runtimeStyle.left;if(b2){e.runtimeStyle.left=e.currentStyle.left
}b3.left=b0==="fontSize"?"1em":b1;b1=b3.pixelLeft+"px";b3.left=bZ;if(b2){e.runtimeStyle.left=b2}}return b1===""?"auto":b1}}}function bK(e,b1,b0){var bZ=bf.exec(b1);
return bZ?Math.max(0,bZ[1]-(b0||0))+(bZ[2]||"px"):b1}function n(e,b2,bZ,b1){var b0=bZ===(b1?"border":"content")?4:b2==="width"?1:0,b3=0;
for(;b0<4;b0+=2){if(bZ==="margin"){b3+=ap.css(e,bZ+J[b0],true)}if(b1){if(bZ==="content"){b3-=parseFloat(N(e,"padding"+J[b0]))||0
}if(bZ!=="margin"){b3-=parseFloat(N(e,"border"+J[b0]+"Width"))||0}}else{b3+=parseFloat(N(e,"padding"+J[b0]))||0;if(bZ!=="padding"){b3+=parseFloat(N(e,"border"+J[b0]+"Width"))||0
}}}return b3}function ae(e,b1,bZ){var b2=b1==="width"?e.offsetWidth:e.offsetHeight,b3=true,b0=ap.support.boxSizing&&ap.css(e,"boxSizing")==="border-box";
if(b2<=0||b2==null){b2=N(e,b1);if(b2<0||b2==null){b2=e.style[b1]}if(be.test(b2)){return b2}b3=b0&&(ap.support.boxSizingReliable||b2===e.style[b1]);
b2=parseFloat(b2)||0}return(b2+n(e,b1,bZ||(b0?"border":"content"),b3))+"px"}function I(b0){if(T[b0]){return T[b0]}var bZ=ap("<"+b0+">").appendTo(Q.body),e=bZ.css("display");
bZ.remove();if(e==="none"||e===""){ai=Q.body.appendChild(ai||ap.extend(Q.createElement("iframe"),{frameBorder:0,width:0,height:0}));
if(!aj||!ai.createElement){aj=(ai.contentWindow||ai.contentDocument).document;aj.write("<!doctype html><html><body>");aj.close()
}bZ=aj.body.appendChild(aj.createElement(b0));e=N(bZ,"display");Q.body.removeChild(ai)}T[b0]=e;return e}ap.each(["height","width"],function(e,bZ){ap.cssHooks[bZ]={get:function(b1,b0,b2){if(b0){if(b1.offsetWidth===0&&aM.test(N(b1,"display"))){return ap.swap(b1,M,function(){return ae(b1,bZ,b2)
})}else{return ae(b1,bZ,b2)}}},set:function(b0,b2,b1){return bK(b0,b2,b1?n(b0,bZ,b1,ap.support.boxSizing&&ap.css(b0,"boxSizing")==="border-box"):0)
}}});if(!ap.support.opacity){ap.cssHooks.opacity={get:function(bZ,e){return bh.test((e&&bZ.currentStyle?bZ.currentStyle.filter:bZ.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(bZ,b3){var b2=bZ.style,e=bZ.currentStyle,b1=ap.isNumeric(b3)?"alpha(opacity="+b3*100+")":"",b0=e&&e.filter||b2.filter||"";
b2.zoom=1;if(b3>=1&&ap.trim(b0.replace(aB,""))===""&&b2.removeAttribute){b2.removeAttribute("filter");if(e&&!e.filter){return
}}b2.filter=aB.test(b0)?b0.replace(aB,b1):b0+" "+b1}}}ap(function(){if(!ap.support.reliableMarginRight){ap.cssHooks.marginRight={get:function(bZ,e){return ap.swap(bZ,{display:"inline-block"},function(){if(e){return N(bZ,"marginRight")
}})}}}if(!ap.support.pixelPosition&&ap.fn.position){ap.each(["top","left"],function(e,bZ){ap.cssHooks[bZ]={get:function(b1,b0){if(b0){var b2=N(b1,bZ);
return be.test(b2)?ap(b1).position()[bZ]+"px":b2}}}})}});if(ap.expr&&ap.expr.filters){ap.expr.filters.hidden=function(e){return(e.offsetWidth===0&&e.offsetHeight===0)||(!ap.support.reliableHiddenOffsets&&((e.style&&e.style.display)||N(e,"display"))==="none")
};ap.expr.filters.visible=function(e){return !ap.expr.filters.hidden(e)}}ap.each({margin:"",padding:"",border:"Width"},function(e,bZ){ap.cssHooks[e+bZ]={expand:function(b3){var b1,b2=typeof b3==="string"?b3.split(" "):[b3],b0={};
for(b1=0;b1<4;b1++){b0[e+J[b1]+bZ]=b2[b1]||b2[b1-2]||b2[0]}return b0}};if(!a5.test(e)){ap.cssHooks[e+bZ].set=bK}});var aA=/%20/g,aE=/\[\]$/,aK=/\r?\n/g,a0=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bu=/^(?:select|textarea)/i;
ap.fn.extend({serialize:function(){return ap.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?ap.makeArray(this.elements):this
}).filter(function(){return this.name&&!this.disabled&&(this.checked||bu.test(this.nodeName)||a0.test(this.type))}).map(function(bZ,e){var b0=ap(this).val();
return b0==null?null:ap.isArray(b0)?ap.map(b0,function(b2,b1){return{name:e.name,value:b2.replace(aK,"\r\n")}}):{name:e.name,value:b0.replace(aK,"\r\n")}
}).get()}});ap.param=function(e,b2){var b0,b1=[],bZ=function(b3,b4){b4=ap.isFunction(b4)?b4():(b4==null?"":b4);b1[b1.length]=encodeURIComponent(b3)+"="+encodeURIComponent(b4)
};if(b2===bR){b2=ap.ajaxSettings&&ap.ajaxSettings.traditional}if(ap.isArray(e)||(e.jquery&&!ap.isPlainObject(e))){ap.each(e,function(){bZ(this.name,this.value)
})}else{for(b0 in e){p(b0,e[b0],b2,bZ)}}return b1.join("&").replace(aA,"+")};function p(b1,b0,b2,e){var bZ;if(ap.isArray(b0)){ap.each(b0,function(b3,b4){if(b2||aE.test(b1)){e(b1,b4)
}else{p(b1+"["+(typeof b4==="object"?b3:"")+"]",b4,b2,e)}})}else{if(!b2&&ap.type(b0)==="object"){for(bZ in b0){p(b1+"["+bZ+"]",b0[bZ],b2,e)
}}else{e(b1,b0)}}}var j,i,aV=/#.*$/,aW=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,a4=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bb=/^(?:GET|HEAD)$/,bk=/^\/\//,bl=/\?/,bs=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bz=/([?&])_=[^&]*/,bD=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,c=ap.fn.load,ay={},bO={},k=["*/"]+["*"];
try{i=aq.href}catch(S){i=Q.createElement("a");i.href="";i=i.href}j=bD.exec(i.toLowerCase())||[];function d(e){return function(b0,b2){if(typeof b0!=="string"){b2=b0;
b0="*"}var bZ,b5,b6,b1=b0.toLowerCase().split(y),b3=0,b4=b1.length;if(ap.isFunction(b2)){for(;b3<b4;b3++){bZ=b1[b3];b6=/^\+/.test(bZ);
if(b6){bZ=bZ.substr(1)||"*"}b5=e[bZ]=e[bZ]||[];b5[b6?"unshift":"push"](b2)}}}}function ak(b8,b5,b6,b2,e,b1){e=e||b5.dataTypes[0];
b1=b1||{};b1[e]=true;var b7,b4=b8[e],b0=0,b3=b4?b4.length:0,bZ=(b8===ay);for(;b0<b3&&(bZ||!b7);b0++){b7=b4[b0](b5,b6,b2);if(typeof b7==="string"){if(!bZ||b1[b7]){b7=bR
}else{b5.dataTypes.unshift(b7);b7=ak(b8,b5,b6,b2,b7,b1)}}}if((bZ||!b7)&&!b1["*"]){b7=ak(b8,b5,b6,b2,"*",b1)}return b7}function g(b2,b1){var b0,e,bZ=ap.ajaxSettings.flatOptions||{};
for(b0 in b1){if(b1[b0]!==bR){(bZ[b0]?b2:(e||(e={})))[b0]=b1[b0]}}if(e){ap.extend(true,b2,e)}}ap.fn.load=function(b5,b0,e){if(typeof b5!=="string"&&c){return c.apply(this,arguments)
}if(!this.length){return this}var b2,b4,b1,b3=this,bZ=b5.indexOf(" ");if(bZ>=0){b2=b5.slice(bZ,b5.length);b5=b5.slice(0,bZ)}if(ap.isFunction(b0)){e=b0;
b0=bR}else{if(b0&&typeof b0==="object"){b4="POST"}}ap.ajax({url:b5,type:b4,dataType:"html",data:b0,complete:function(b6,b7){if(e){b3.each(e,b1||[b6.responseText,b7,b6])
}}}).done(function(b6){b1=arguments;b3.html(b2?ap("<div>").append(b6.replace(bs,"")).find(b2):b6)});return this};ap.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,bZ){ap.fn[bZ]=function(b0){return this.on(bZ,b0)
}});ap.each(["get","post"],function(e,bZ){ap[bZ]=function(b3,b1,b0,b2){if(ap.isFunction(b1)){b2=b2||b0;b0=b1;b1=bR}return ap.ajax({type:bZ,url:b3,data:b1,success:b0,dataType:b2})
}});ap.extend({getScript:function(bZ,e){return ap.get(bZ,bR,e,"script")},getJSON:function(b0,bZ,e){return ap.get(b0,bZ,e,"json")
},ajaxSetup:function(bZ,e){if(e){g(bZ,ap.ajaxSettings)}else{e=bZ;bZ=ap.ajaxSettings}g(bZ,e);return bZ},ajaxSettings:{url:i,isLocal:a4.test(j[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":k},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":bT.String,"text html":true,"text json":ap.parseJSON,"text xml":ap.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:d(ay),ajaxTransport:d(bO),ajax:function(cn,b9){if(typeof cn==="object"){b9=cn;
cn=bR}b9=b9||{};var b7,ce,cd,cl,ck,ca,b4,b6,cg=ap.ajaxSetup({},b9),bZ=cg.context||cg,b5=bZ!==cg&&(bZ.nodeType||bZ instanceof ap)?ap(bZ):ap.event,b1=ap.Deferred(),b0=ap.Callbacks("once memory"),ci=cg.statusCode||{},cb={},cc={},ch=0,cj="canceled",b8={readyState:0,setRequestHeader:function(co,cp){if(!ch){var e=co.toLowerCase();
co=cc[e]=cc[e]||co;cb[co]=cp}return this},getAllResponseHeaders:function(){return ch===2?ce:null},getResponseHeader:function(e){var co;
if(ch===2){if(!cd){cd={};while((co=aW.exec(ce))){cd[co[1].toLowerCase()]=co[2]}}co=cd[e.toLowerCase()]}return co===bR?null:co
},overrideMimeType:function(e){if(!ch){cg.mimeType=e}return this},abort:function(e){e=e||cj;if(cl){cl.abort(e)}b2(0,e);return this
}};function b2(cu,cr,ct,co){var cp,cw,e,cs,cq,cv=cr;if(ch===2){return}ch=2;if(ck){clearTimeout(ck)}cl=bR;ce=co||"";b8.readyState=cu>0?4:0;
if(ct){cs=h(cg,b8,ct)}if(cu>=200&&cu<300||cu===304){if(cg.ifModified){cq=b8.getResponseHeader("Last-Modified");if(cq){ap.lastModified[b7]=cq
}cq=b8.getResponseHeader("Etag");if(cq){ap.etag[b7]=cq}}if(cu===304){cv="notmodified";cp=true}else{cp=f(cg,cs);cv=cp.state;cw=cp.data;
e=cp.error;cp=!e}}else{e=cv;if(!cv||cu){cv="error";if(cu<0){cu=0}}}b8.status=cu;b8.statusText=(cr||cv)+"";if(cp){b1.resolveWith(bZ,[cw,cv,b8])
}else{b1.rejectWith(bZ,[b8,cv,e])}b8.statusCode(ci);ci=bR;if(b4){b5.trigger("ajax"+(cp?"Success":"Error"),[b8,cg,cp?cw:e])}b0.fireWith(bZ,[b8,cv]);
if(b4){b5.trigger("ajaxComplete",[b8,cg]);if(!(--ap.active)){ap.event.trigger("ajaxStop")}}}b1.promise(b8);b8.success=b8.done;
b8.error=b8.fail;b8.complete=b0.add;b8.statusCode=function(e){if(e){var co;if(ch<2){for(co in e){ci[co]=[ci[co],e[co]]}}else{co=e[b8.status];
b8.always(co)}}return this};cg.url=((cn||cg.url)+"").replace(aV,"").replace(bk,j[1]+"//");cg.dataTypes=ap.trim(cg.dataType||"*").toLowerCase().split(y);
if(cg.crossDomain==null){ca=bD.exec(cg.url.toLowerCase())||false;cg.crossDomain=ca&&(ca.join(":")+(ca[3]?"":ca[1]==="http:"?80:443))!==(j.join(":")+(j[3]?"":j[1]==="http:"?80:443))
}if(cg.data&&cg.processData&&typeof cg.data!=="string"){cg.data=ap.param(cg.data,cg.traditional)}ak(ay,cg,b9,b8);if(ch===2){return b8
}b4=cg.global;cg.type=cg.type.toUpperCase();cg.hasContent=!bb.test(cg.type);if(b4&&ap.active++===0){ap.event.trigger("ajaxStart")
}if(!cg.hasContent){if(cg.data){cg.url+=(bl.test(cg.url)?"&":"?")+cg.data;delete cg.data}b7=cg.url;if(cg.cache===false){var cm=ap.now(),cf=cg.url.replace(bz,"$1_="+cm);
cg.url=cf+((cf===cg.url)?(bl.test(cg.url)?"&":"?")+"_="+cm:"")}}if(cg.data&&cg.hasContent&&cg.contentType!==false||b9.contentType){b8.setRequestHeader("Content-Type",cg.contentType)
}if(cg.ifModified){b7=b7||cg.url;if(ap.lastModified[b7]){b8.setRequestHeader("If-Modified-Since",ap.lastModified[b7])}if(ap.etag[b7]){b8.setRequestHeader("If-None-Match",ap.etag[b7])
}}b8.setRequestHeader("Accept",cg.dataTypes[0]&&cg.accepts[cg.dataTypes[0]]?cg.accepts[cg.dataTypes[0]]+(cg.dataTypes[0]!=="*"?", "+k+"; q=0.01":""):cg.accepts["*"]);
for(b6 in cg.headers){b8.setRequestHeader(b6,cg.headers[b6])}if(cg.beforeSend&&(cg.beforeSend.call(bZ,b8,cg)===false||ch===2)){return b8.abort()
}cj="abort";for(b6 in {success:1,error:1,complete:1}){b8[b6](cg[b6])}cl=ak(bO,cg,b9,b8);if(!cl){b2(-1,"No Transport")}else{b8.readyState=1;
if(b4){b5.trigger("ajaxSend",[b8,cg])}if(cg.async&&cg.timeout>0){ck=setTimeout(function(){b8.abort("timeout")},cg.timeout)}try{ch=1;
cl.send(cb,b2)}catch(b3){if(ch<2){b2(-1,b3)}else{throw b3}}}return b8},active:0,lastModified:{},etag:{}});function h(b6,b3,b5){var bZ,b7,b1,b2,e=b6.contents,b0=b6.dataTypes,b4=b6.responseFields;
for(b7 in b4){if(b7 in b5){b3[b4[b7]]=b5[b7]}}while(b0[0]==="*"){b0.shift();if(bZ===bR){bZ=b6.mimeType||b3.getResponseHeader("content-type")
}}if(bZ){for(b7 in e){if(e[b7]&&e[b7].test(bZ)){b0.unshift(b7);break}}}if(b0[0] in b5){b1=b0[0]}else{for(b7 in b5){if(!b0[0]||b6.converters[b7+" "+b0[0]]){b1=b7;
break}if(!b2){b2=b7}}b1=b1||b2}if(b1){if(b1!==b0[0]){b0.unshift(b1)}return b5[b1]}}function f(b8,b7){var bZ,b0,b2,b9,b3=b8.dataTypes.slice(),b6=b3[0],b1={},b5=0;
if(b8.dataFilter){b7=b8.dataFilter(b7,b8.dataType)}if(b3[1]){for(bZ in b8.converters){b1[bZ.toLowerCase()]=b8.converters[bZ]}}for(;
(b2=b3[++b5]);){if(b2!=="*"){if(b6!=="*"&&b6!==b2){bZ=b1[b6+" "+b2]||b1["* "+b2];if(!bZ){for(b0 in b1){b9=b0.split(" ");if(b9[1]===b2){bZ=b1[b6+" "+b9[0]]||b1["* "+b9[0]];
if(bZ){if(bZ===true){bZ=b1[b0]}else{if(b1[b0]!==true){b2=b9[0];b3.splice(b5--,0,b2)}}break}}}}if(bZ!==true){if(bZ&&b8["throws"]){b7=bZ(b7)
}else{try{b7=bZ(b7)}catch(b4){return{state:"parsererror",error:bZ?b4:"No conversion from "+b6+" to "+b2}}}}}b6=b2}}return{state:"success",data:b7}
}var aw=[],bm=/\?/,a1=/(=)\?(?=&|$)|\?\?/,av=ap.now();ap.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=aw.pop()||(ap.expando+"_"+(av++));
this[e]=true;return e}});ap.ajaxPrefilter("json jsonp",function(b7,b2,b1){var e,b3,b6,bZ=b7.data,b8=b7.url,b0=b7.jsonp!==false,b5=b0&&a1.test(b8),b4=b0&&!b5&&typeof bZ==="string"&&!(b7.contentType||"").indexOf("application/x-www-form-urlencoded")&&a1.test(bZ);
if(b7.dataTypes[0]==="jsonp"||b5||b4){e=b7.jsonpCallback=ap.isFunction(b7.jsonpCallback)?b7.jsonpCallback():b7.jsonpCallback;
b3=bT[e];if(b5){b7.url=b8.replace(a1,"$1"+e)}else{if(b4){b7.data=bZ.replace(a1,"$1"+e)}else{if(b0){b7.url+=(bm.test(b8)?"&":"?")+b7.jsonp+"="+e
}}}b7.converters["script json"]=function(){if(!b6){ap.error(e+" was not called")}return b6[0]};b7.dataTypes[0]="json";bT[e]=function(){b6=arguments
};b1.always(function(){bT[e]=b3;if(b7[e]){b7.jsonpCallback=b2.jsonpCallback;aw.push(e)}if(b6&&ap.isFunction(b3)){b3(b6[0])}b6=b3=bR
});return"script"}});ap.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){ap.globalEval(e);
return e}}});ap.ajaxPrefilter("script",function(e){if(e.cache===bR){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false
}});ap.ajaxTransport("script",function(bZ){if(bZ.crossDomain){var b0,e=Q.head||Q.getElementsByTagName("head")[0]||Q.documentElement;
return{send:function(b1,b2){b0=Q.createElement("script");b0.async="async";if(bZ.scriptCharset){b0.charset=bZ.scriptCharset}b0.src=bZ.url;
b0.onload=b0.onreadystatechange=function(b3,b4){if(b4||!b0.readyState||/loaded|complete/.test(b0.readyState)){b0.onload=b0.onreadystatechange=null;
if(e&&b0.parentNode){e.removeChild(b0)}b0=bR;if(!b4){b2(200,"success")}}};e.insertBefore(b0,e.firstChild)},abort:function(){if(b0){b0.onload(0,1)
}}}}});var bW,bY=bT.ActiveXObject?function(){for(var e in bW){bW[e](0,1)}}:false,bX=0;function G(){try{return new bT.XMLHttpRequest()
}catch(bZ){}}function C(){try{return new bT.ActiveXObject("Microsoft.XMLHTTP")}catch(bZ){}}ap.ajaxSettings.xhr=bT.ActiveXObject?function(){return !this.isLocal&&G()||C()
}:G;(function(e){ap.extend(ap.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})})(ap.ajaxSettings.xhr());if(ap.support.ajax){ap.ajaxTransport(function(bZ){if(!bZ.crossDomain||ap.support.cors){var e;
return{send:function(b3,b1){var b2,b4,b5=bZ.xhr();if(bZ.username){b5.open(bZ.type,bZ.url,bZ.async,bZ.username,bZ.password)}else{b5.open(bZ.type,bZ.url,bZ.async)
}if(bZ.xhrFields){for(b4 in bZ.xhrFields){b5[b4]=bZ.xhrFields[b4]}}if(bZ.mimeType&&b5.overrideMimeType){b5.overrideMimeType(bZ.mimeType)
}if(!bZ.crossDomain&&!b3["X-Requested-With"]){b3["X-Requested-With"]="XMLHttpRequest"}try{for(b4 in b3){b5.setRequestHeader(b4,b3[b4])
}}catch(b0){}b5.send((bZ.hasContent&&bZ.data)||null);e=function(b6,b9){var cc,cd,ca,cb,ce;try{if(e&&(b9||b5.readyState===4)){e=bR;
if(b2){b5.onreadystatechange=ap.noop;if(bY){delete bW[b2]}}if(b9){if(b5.readyState!==4){b5.abort()}}else{cc=b5.status;ca=b5.getAllResponseHeaders();
cb={};ce=b5.responseXML;if(ce&&ce.documentElement){cb.xml=ce}try{cb.text=b5.responseText}catch(b6){}try{cd=b5.statusText}catch(b7){cd=""
}if(!cc&&bZ.isLocal&&!bZ.crossDomain){cc=cb.text?200:404}else{if(cc===1223){cc=204}}}}}catch(b8){if(!b9){b1(-1,b8)}}if(cb){b1(cc,cd,cb,ca)
}};if(!bZ.async){e()}else{if(b5.readyState===4){setTimeout(e,0)}else{b2=++bX;if(bY){if(!bW){bW={};ap(bT).unload(bY)}bW[b2]=e}b5.onreadystatechange=e
}}},abort:function(){if(e){e(0,1)}}}}})}var aa,bN,aU=/^(?:toggle|show|hide)$/,aT=new RegExp("^(?:([-+])=|)("+v+")([a-z%]*)$","i"),br=/queueHooks$/,m=[P],bQ={"*":[function(b1,b7){var e,b6,b5=this.createTween(b1,b7),b0=aT.exec(b7),b4=b5.cur(),b3=+b4||0,b2=1,bZ=20;
if(b0){e=+b0[2];b6=b0[3]||(ap.cssNumber[b1]?"":"px");if(b6!=="px"&&b3){b3=ap.css(b5.elem,b1,true)||e||1;do{b2=b2||".5";b3=b3/b2;
ap.style(b5.elem,b1,b3+b6)}while(b2!==(b2=b5.cur()/b4)&&b2!==1&&--bZ)}b5.unit=b6;b5.start=b3;b5.end=b0[1]?b3+(b0[1]+1)*e:e}return b5
}]};function D(){setTimeout(function(){aa=bR},0);return(aa=ap.now())}function H(e,bZ){ap.each(bZ,function(b3,b4){var b0=(bQ[b3]||[]).concat(bQ["*"]),b1=0,b2=b0.length;
for(;b1<b2;b1++){if(b0[b1].call(e,b3,b4)){return}}})}function l(b0,b4,b3){var b6,b1=0,b8=0,b2=m.length,bZ=ap.Deferred().always(function(){delete b7.elem
}),b7=function(){var b9=aa||D(),cd=Math.max(0,e.startTime+e.duration-b9),cc=1-(cd/e.duration||0),ca=0,cb=e.tweens.length;for(;
ca<cb;ca++){e.tweens[ca].run(cc)}bZ.notifyWith(b0,[e,cc,cd]);if(cc<1&&cb){return cd}else{bZ.resolveWith(b0,[e]);return false}},e=bZ.promise({elem:b0,props:ap.extend({},b4),opts:ap.extend(true,{specialEasing:{}},b3),originalProperties:b4,originalOptions:b3,startTime:aa||D(),duration:b3.duration,tweens:[],createTween:function(cb,ca,b9){var cc=ap.Tween(b0,e.opts,cb,ca,e.opts.specialEasing[cb]||e.opts.easing);
e.tweens.push(cc);return cc},stop:function(b9){var ca=0,cb=b9?e.tweens.length:0;for(;ca<cb;ca++){e.tweens[ca].run(1)}if(b9){bZ.resolveWith(b0,[e,b9])
}else{bZ.rejectWith(b0,[e,b9])}return this}}),b5=e.props;az(b5,e.opts.specialEasing);for(;b1<b2;b1++){b6=m[b1].call(e,b0,b5,e.opts);
if(b6){return b6}}H(e,b5);if(ap.isFunction(e.opts.start)){e.opts.start.call(b0,e)}ap.fx.timer(ap.extend(b7,{anim:e,queue:e.opts.queue,elem:b0}));
return e.progress(e.opts.progress).done(e.opts.done,e.opts.complete).fail(e.opts.fail).always(e.opts.always)}function az(b2,b3){var b0,b1,e,b4,bZ;
for(b0 in b2){b1=ap.camelCase(b0);e=b3[b1];b4=b2[b0];if(ap.isArray(b4)){e=b4[1];b4=b2[b0]=b4[0]}if(b0!==b1){b2[b1]=b4;delete b2[b0]
}bZ=ap.cssHooks[b1];if(bZ&&"expand" in bZ){b4=bZ.expand(b4);delete b2[b1];for(b0 in b4){if(!(b0 in b2)){b2[b0]=b4[b0];b3[b0]=e
}}}else{b3[b1]=e}}}ap.Animation=ap.extend(l,{tweener:function(b2,e){if(ap.isFunction(b2)){e=b2;b2=["*"]}else{b2=b2.split(" ")
}var b1,bZ=0,b0=b2.length;for(;bZ<b0;bZ++){b1=b2[bZ];bQ[b1]=bQ[b1]||[];bQ[b1].unshift(e)}},prefilter:function(e,bZ){if(bZ){m.unshift(e)
}else{m.push(e)}}});function P(b0,ca,b7){var b4,b9,cd,b5,bZ,cc,b3,b6,e=this,cb=b0.style,b8={},b1=[],b2=b0.nodeType&&an(b0);if(!b7.queue){b3=ap._queueHooks(b0,"fx");
if(b3.unqueued==null){b3.unqueued=0;b6=b3.empty.fire;b3.empty.fire=function(){if(!b3.unqueued){b6()}}}b3.unqueued++;e.always(function(){e.always(function(){b3.unqueued--;
if(!ap.queue(b0,"fx").length){b3.empty.fire()}})})}if(b0.nodeType===1&&("height" in ca||"width" in ca)){b7.overflow=[cb.overflow,cb.overflowX,cb.overflowY];
if(ap.css(b0,"display")==="inline"&&ap.css(b0,"float")==="none"){if(!ap.support.inlineBlockNeedsLayout||I(b0.nodeName)==="inline"){cb.display="inline-block"
}else{cb.zoom=1}}}if(b7.overflow){cb.overflow="hidden";if(!ap.support.shrinkWrapBlocks){e.done(function(){cb.overflow=b7.overflow[0];
cb.overflowX=b7.overflow[1];cb.overflowY=b7.overflow[2]})}}for(b4 in ca){cd=ca[b4];if(aU.exec(cd)){delete ca[b4];if(cd===(b2?"hide":"show")){continue
}b1.push(b4)}}b5=b1.length;if(b5){bZ=ap._data(b0,"fxshow")||ap._data(b0,"fxshow",{});if(b2){ap(b0).show()}else{e.done(function(){ap(b0).hide()
})}e.done(function(){var ce;ap.removeData(b0,"fxshow",true);for(ce in b8){ap.style(b0,ce,b8[ce])}});for(b4=0;b4<b5;b4++){b9=b1[b4];
cc=e.createTween(b9,b2?bZ[b9]:0);b8[b9]=bZ[b9]||ap.style(b0,b9);if(!(b9 in bZ)){bZ[b9]=cc.start;if(b2){cc.end=cc.start;cc.start=b9==="width"||b9==="height"?1:0
}}}}}function bP(bZ,b1,b2,b0,e){return new bP.prototype.init(bZ,b1,b2,b0,e)}ap.Tween=bP;bP.prototype={constructor:bP,init:function(bZ,b1,b2,b0,e,b3){this.elem=bZ;
this.prop=b2;this.easing=e||"swing";this.options=b1;this.start=this.now=this.cur();this.end=b0;this.unit=b3||(ap.cssNumber[b2]?"":"px")
},cur:function(){var e=bP.propHooks[this.prop];return e&&e.get?e.get(this):bP.propHooks._default.get(this)},run:function(b0){var e,bZ=bP.propHooks[this.prop];
if(this.options.duration){this.pos=e=ap.easing[this.easing](b0,this.options.duration*b0,0,1,this.options.duration)}else{this.pos=e=b0
}this.now=(this.end-this.start)*e+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(bZ&&bZ.set){bZ.set(this)
}else{bP.propHooks._default.set(this)}return this}};bP.prototype.init.prototype=bP.prototype;bP.propHooks={_default:{get:function(bZ){var e;
if(bZ.elem[bZ.prop]!=null&&(!bZ.elem.style||bZ.elem.style[bZ.prop]==null)){return bZ.elem[bZ.prop]}e=ap.css(bZ.elem,bZ.prop,false,"");
return !e||e==="auto"?0:e},set:function(e){if(ap.fx.step[e.prop]){ap.fx.step[e.prop](e)}else{if(e.elem.style&&(e.elem.style[ap.cssProps[e.prop]]!=null||ap.cssHooks[e.prop])){ap.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now}}}}};bP.propHooks.scrollTop=bP.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};ap.each(["toggle","show","hide"],function(bZ,b0){var e=ap.fn[b0];ap.fn[b0]=function(b3,b2,b1){return b3==null||typeof b3==="boolean"||(!bZ&&ap.isFunction(b3)&&ap.isFunction(b2))?e.apply(this,arguments):this.animate(ab(b0,true),b3,b2,b1)
}});ap.fn.extend({fadeTo:function(b0,b1,bZ,e){return this.filter(an).css("opacity",0).show().end().animate({opacity:b1},b0,bZ,e)
},animate:function(b3,b4,b0,e){var b1=ap.isEmptyObject(b3),b2=ap.speed(b4,b0,e),bZ=function(){var b5=l(this,ap.extend({},b3),b2);
if(b1){b5.stop(true)}};return b1||b2.queue===false?this.each(bZ):this.queue(b2.queue,bZ)},stop:function(b1,e,bZ){var b0=function(b2){var b3=b2.stop;
delete b2.stop;b3(bZ)};if(typeof b1!=="string"){bZ=e;e=b1;b1=bR}if(e&&b1!==false){this.queue(b1||"fx",[])}return this.each(function(){var b3=true,b4=b1!=null&&b1+"queueHooks",b5=ap.timers,b2=ap._data(this);
if(b4){if(b2[b4]&&b2[b4].stop){b0(b2[b4])}}else{for(b4 in b2){if(b2[b4]&&b2[b4].stop&&br.test(b4)){b0(b2[b4])}}}for(b4=b5.length;
b4--;){if(b5[b4].elem===this&&(b1==null||b5[b4].queue===b1)){b5[b4].anim.stop(bZ);b3=false;b5.splice(b4,1)}}if(b3||!bZ){ap.dequeue(this,b1)
}})}});function ab(b1,b0){var b2,e={height:b1},bZ=0;b0=b0?1:0;for(;bZ<4;bZ+=2-b0){b2=J[bZ];e["margin"+b2]=e["padding"+b2]=b1}if(b0){e.opacity=e.width=b1
}return e}ap.each({slideDown:ab("show"),slideUp:ab("hide"),slideToggle:ab("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,bZ){ap.fn[e]=function(b2,b1,b0){return this.animate(bZ,b2,b1,b0)
}});ap.speed=function(b1,e,bZ){var b0=b1&&typeof b1==="object"?ap.extend({},b1):{complete:bZ||!bZ&&e||ap.isFunction(b1)&&b1,duration:b1,easing:bZ&&e||e&&!ap.isFunction(e)&&e};
b0.duration=ap.fx.off?0:typeof b0.duration==="number"?b0.duration:b0.duration in ap.fx.speeds?ap.fx.speeds[b0.duration]:ap.fx.speeds._default;
if(b0.queue==null||b0.queue===true){b0.queue="fx"}b0.old=b0.complete;b0.complete=function(){if(ap.isFunction(b0.old)){b0.old.call(this)
}if(b0.queue){ap.dequeue(this,b0.queue)}};return b0};ap.easing={linear:function(e){return e},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2
}};ap.timers=[];ap.fx=bP.prototype.init;ap.fx.tick=function(){var bZ,b0=ap.timers,e=0;for(;e<b0.length;e++){bZ=b0[e];if(!bZ()&&b0[e]===bZ){b0.splice(e--,1)
}}if(!b0.length){ap.fx.stop()}};ap.fx.timer=function(e){if(e()&&ap.timers.push(e)&&!bN){bN=setInterval(ap.fx.tick,ap.fx.interval)
}};ap.fx.interval=13;ap.fx.stop=function(){clearInterval(bN);bN=null};ap.fx.speeds={slow:600,fast:200,_default:400};ap.fx.step={};
if(ap.expr&&ap.expr.filters){ap.expr.filters.animated=function(e){return ap.grep(ap.timers,function(bZ){return e===bZ.elem}).length
}}var bq=/^(?:body|html)$/i;ap.fn.offset=function(b5){if(arguments.length){return b5===bR?this:this.each(function(b9){ap.offset.setOffset(this,b5,b9)
})}var b3,e,b8,b1,b0,b7,b6,bZ={top:0,left:0},b4=this[0],b2=b4&&b4.ownerDocument;if(!b2){return}if((e=b2.body)===b4){return ap.offset.bodyOffset(b4)
}b3=b2.documentElement;if(!ap.contains(b3,b4)){return bZ}if(typeof b4.getBoundingClientRect!=="undefined"){bZ=b4.getBoundingClientRect()
}b8=af(b2);b1=b3.clientTop||e.clientTop||0;b0=b3.clientLeft||e.clientLeft||0;b7=b8.pageYOffset||b3.scrollTop;b6=b8.pageXOffset||b3.scrollLeft;
return{top:bZ.top+b7-b1,left:bZ.left+b6-b0}};ap.offset={bodyOffset:function(e){var b0=e.offsetTop,bZ=e.offsetLeft;if(ap.support.doesNotIncludeMarginInBodyOffset){b0+=parseFloat(ap.css(e,"marginTop"))||0;
bZ+=parseFloat(ap.css(e,"marginLeft"))||0}return{top:b0,left:bZ}},setOffset:function(b6,b8,b7){var b9=ap.css(b6,"position");if(b9==="static"){b6.style.position="relative"
}var b1=ap(b6),b3=b1.offset(),b0=ap.css(b6,"top"),bZ=ap.css(b6,"left"),e=(b9==="absolute"||b9==="fixed")&&ap.inArray("auto",[b0,bZ])>-1,ca={},b4={},b5,b2;
if(e){b4=b1.position();b5=b4.top;b2=b4.left}else{b5=parseFloat(b0)||0;b2=parseFloat(bZ)||0}if(ap.isFunction(b8)){b8=b8.call(b6,b7,b3)
}if(b8.top!=null){ca.top=(b8.top-b3.top)+b5}if(b8.left!=null){ca.left=(b8.left-b3.left)+b2}if("using" in b8){b8.using.call(b6,ca)
}else{b1.css(ca)}}};ap.fn.extend({position:function(){if(!this[0]){return}var e=this[0],b0=this.offsetParent(),bZ=this.offset(),b1=bq.test(b0[0].nodeName)?{top:0,left:0}:b0.offset();
bZ.top-=parseFloat(ap.css(e,"marginTop"))||0;bZ.left-=parseFloat(ap.css(e,"marginLeft"))||0;b1.top+=parseFloat(ap.css(b0[0],"borderTopWidth"))||0;
b1.left+=parseFloat(ap.css(b0[0],"borderLeftWidth"))||0;return{top:bZ.top-b1.top,left:bZ.left-b1.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||Q.body;
while(e&&(!bq.test(e.nodeName)&&ap.css(e,"position")==="static")){e=e.offsetParent}return e||Q.body})}});ap.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,bZ){var b0=/Y/.test(bZ);
ap.fn[e]=function(b1){return ap.access(this,function(b2,b3,b4){var b5=af(b2);if(b4===bR){return b5?(bZ in b5)?b5[bZ]:b5.document.documentElement[b3]:b2[b3]
}if(b5){b5.scrollTo(!b0?b4:ap(b5).scrollLeft(),b0?b4:ap(b5).scrollTop())}else{b2[b3]=b4}},e,b1,arguments.length,null)}});function af(e){return ap.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}ap.each({Height:"height",Width:"width"},function(e,bZ){ap.each({padding:"inner"+e,content:bZ,"":"outer"+e},function(b0,b1){ap.fn[b1]=function(b4,b5){var b2=arguments.length&&(b0||typeof b4!=="boolean"),b3=b0||(b4===true||b5===true?"margin":"border");
return ap.access(this,function(b7,b8,b9){var b6;if(ap.isWindow(b7)){return b7.document.documentElement["client"+e]}if(b7.nodeType===9){b6=b7.documentElement;
return Math.max(b7.body["scroll"+e],b6["scroll"+e],b7.body["offset"+e],b6["offset"+e],b6["client"+e])}return b9===bR?ap.css(b7,b8,b9,b3):ap.style(b7,b8,b9,b3)
},bZ,b2?b4:bR,b2,null)}})});bT.jQuery=bT.$=ap;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return ap
})}})(window);
//
// source/js/util/objectCloner.js
//
"use strict";var AR=AR||{};AR.Util=AR.Util||{};AR.Util.ObjectCloner=AR.Util.ObjectCloner||{};(function(c){c.clone=function(d){if(null==d||"object"!=typeof d){return null
}return a(d)};var a=function(h){var e={};if(null==h||"object"!=typeof h){return h}if(h instanceof Array){e=[];for(var f=0,g=h.length;
f<g;f++){e[f]=a(h[f])}return e}for(var d in h){if(h.hasOwnProperty(d)){e[d]=a(h[d])}}return e};var b=function(){};b()})(AR.Util.ObjectCloner=AR.Util.ObjectCloner||{});
//
// source/js/util/async-script.js
//
(function(){AR.Util=AR.Util||{};AR.Util.AsyncScript=AR.Util.AsyncScript||{};AR.Util.AsyncScript.createLink=function(d,a){var c=document.createElement("script"),b=document.getElementsByTagName("script")[0];
c.async=true;c.src="//"+d;if(a){c.addEventListener("load",function(f){a(null,f)},false)}b.parentNode.insertBefore(c,b)}}(window.AR=window.AR||{}));
//
// source/js/ads/vendor-krux.js
//
var AR=AR||{};AR.Ads=AR.Ads||{};AR.Ads.Krux=function(){this.InjectControlTag=function(a){window.Krux||((Krux=function(){Krux.q.push(arguments)
}).q=[]);(function(){var b=document.createElement("script");b.type="text/javascript";b.async=true;var c,e=(c=location.href.match(/\bkxsrc=([^&]+)/))&&decodeURIComponent(c[1]);
b.src=/^https?:\/\/([^\/]+\.)?krxd\.net(:\d{1,5})?\//i.test(e)?e:e==="disable"?"":(location.protocol==="https:"?"https:":"http:")+"//cdn.krxd.net/controltag?confid="+a;
var d=document.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)})();(function(){function c(g){var d,f="kx"+g;
return window.localStorage?window.localStorage[f]||"":navigator.cookieEnabled?(d=document.cookie.match(f+"=([^;]*)"),d&&unescape(d[1])||""):""
}Krux.user=c("user"),Krux.segments=c("segs")?c("segs").split(","):[];var b=[];Krux.user&&b.push("kuid="+Krux.user),Krux.dfppKeyValues=b.length?"&"+b.join("&"):""
})()}};
//
// source/js/pubsub/pubsub.js
//
var Pubsub=function(){var a={};var b=this;this.isListening=function(e,d){var c=false;if(a[e]){c=a[e].filter(function(f){return f.name==d
}).length>0}return c};this.listen=function(e,c,d){if(a[e]==undefined){a[e]=[]}a[e].push({name:c,func:d});console.log("pub sub is listening to "+e+" for "+c)
};this.broadcast=function(e,c){if(!a[e]||a[e].length<1){return}var d=0;do{console.log("listening function "+a[e][d].name+" firing for broadcast "+e);
a[e][d].func.apply(null,c||[]);d++}while(d<a[e].length)};this.forget=function(e,d){if(!d){a[e]=null;return}if(!b.isListening(e,d)){return
}var c=0;do{if(a[e][c].name==d){a[e].splice(c,1)}c++}while(c<a[e].length)}};
