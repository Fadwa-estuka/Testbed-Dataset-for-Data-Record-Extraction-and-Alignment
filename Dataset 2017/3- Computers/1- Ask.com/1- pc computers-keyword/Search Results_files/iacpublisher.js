!function(){function t(t,n){var r="[\\?&]iacjs_"+n+"=([^&#]*)",e=new RegExp(r),a=e.exec(t.location.search);return a}var n=this,r=document,e=function(t,n){var r=parseFloat(t);return isNaN(r)||1<r||0>r?n:r},a=function(t,n){var r=parseInt(t,10);return isNaN(r)?n:r},o=/^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/,c=function(t,n){if(!t)return n;var r=t.match(o);return r?r[0]:n},i=e("0",0),u=(a("1.1.77",0),a("1.1.77",0),function(){return n.iacjs||(n.iacjs={})}),l=function(){return n.googletag||(n.googletag={})},s=function(t,n){var r=u();r.hasOwnProperty(t)||(r[t]=n)},d=function(t,n){var r=l();r.hasOwnProperty(t)||(r[t]=n)},f={};f["#1#"]=c("","www.iacpublish.com"),f["#2#"]=c("",".iacpublish.com"),f["#3#"]=function(t){try{for(var n=null;n!=t;n=t,t=t.parent)switch(t.location.protocol){case"https:":return!1;case"http:":case"file:":return!0}}catch(r){}return!0}(window),f["#4#"]=function(n){var r=f["#1#"];try{for(var e=null;e!=n;e=n,n=n.parent){var a=t(n,"domain");if(null===a)return r;var o=a[1].replace(/[^\w\s]/gi,"");return o+f["#2#"]}}catch(c){}return r}(window),f["#5#"]=(new Date).getTime(),f["#6#"]=i,f["#7#"]="ask/i.c",f["#8#"]=function(n){try{for(var r=null;r!=n;r=n,n=n.parent){var e=t(n,"script");if(null===e)return f["#7#"];var a=e[1].replace(/[^\w\s]/gi,"");return a}}catch(o){}return f["#7#"]}(window),f["#9#"]="1.1.77",s("_vars_",f),s("flags",{}),s("events",{}),s("_slotRenderEnded_",[]),s("getVersion",function(){return"1.1.77"}),s("client",function(){return{width:function(){var t=0;try{t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}catch(n){}return t}()}}()),d("cmd",[]),l().cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(t){var n=u().events.slotRenderEnded,r=t.slot.getSlotElementId()||"";u()._slotRenderEnded_.push({event:t,slot:r}),"function"==typeof n&&n(t,r)})}),s("que",[]);var v,p,h="1.1.77",w=function(n){try{for(var r=null;r!=n;r=n,n=n.parent){var e=t(n,"version");return null===e?w:e[1].replace(/[^\w\s\.]/gi,"")}}catch(a){}return w}(window);if(p=w||h,v=(u()._vars_["#3#"]?"http:":"https:")+"//"+f["#4#"]+"/"+f["#8#"]+"-"+p+".js",!u()._loadStarted_){var g=r.createElement("script");g.src=v,g.async=!0,(r.head||r.body||r.documentElement).appendChild(g),u()._loadStarted_=!0}}();