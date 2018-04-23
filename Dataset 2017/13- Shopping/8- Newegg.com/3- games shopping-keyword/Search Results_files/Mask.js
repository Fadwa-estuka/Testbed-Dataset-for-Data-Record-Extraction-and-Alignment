NEG.Module("NEG.Widget.Mask",function(x){var f=x("NEG.ThirdParty.jQuery"),u={style:{"background-color":"black",opacity:"0.5","z-index":"99999"},needIFrame:!1,hideWhenClick:!0,supportResize:!1},e={BEFORE_SHOW:"Widget_Mask_beforeShow",AFTER_SHOW:"Widget_Mask_afterShow",BEFORE_HIDE:"Widget_Mask_beforeHide",AFTER_HIDE:"Widget_Mask_afterHide",BEFORE_RESIZE:"Widget_Mask_beforeResize",AFTER_RESIZE:"Widget_Mask_afterResize"},l=0,o={},p={},v={},w={},h=function(a){var b;a!==document.body?(b=f(a),a=b.innerWidth()+
parseInt(b.css("border-left-width"))+parseInt(b.css("border-right-width")),b=b.innerHeight()+parseInt(b.css("border-top-width"))+parseInt(b.css("border-bottom-width"))):(a=f(document).width(),b=f(document).height());return{width:a,height:b}},m=function(a){a=f(a).offset();return{top:a.top,left:a.left}},q=function(a,b,c){a.css("height",c.height);a.css("width",c.width);a.css("top",b.top);a.css("left",b.left)},n=function(a){for(var b,c,d,i,g,e=0;e<a.length;e++)d=h(a[e]),i=m(a[e]),g={top:i.top,left:i.left},
d={top:i.top+d.height,left:i.left+d.width},b?(b.left>g.left&&(b.left=g.left),b.top>g.top&&(b.top=g.top)):b=g,c?(c.left<d.left&&(c.left=d.left),c.top<d.top&&(c.top=d.top)):c=d;return{size:{height:c.top-b.top,width:c.left-b.left},position:b}},t=function(a,b){var c=this,d,i=a.size&&{width:a.size.width,height:a.size.height},g=a.position&&{top:a.position.top,left:a.position.left};d=f("<div></div>");d.hide();f(document.body).append(d);var r=function(){return a.target?a.target.length&&0<a.target.length?
function(){NEG(c).trigger(e.BEFORE_RESIZE);d.hide();var b=n(a.target);domSize=b.size;domPosition=b.position;q(d,domPosition,domSize);d.show();NEG(c).trigger(e.AFTER_RESIZE)}:function(){NEG(c).trigger(e.BEFORE_RESIZE);d.hide();var b=jQuery(a.target);"static"==b.css("position")&&b.css("position","relative");"none"!=b.css("display")&&(domSize=h(a.target),domPosition=m(a.target),q(d,domPosition,domSize));d.show();NEG(c).trigger(e.AFTER_RESIZE)}:function(){NEG(c).trigger(e.BEFORE_RESIZE);NEG(c).trigger(e.AFTER_RESIZE)}}();
if(b.needIFrame){var k=f("<iframe>");d.append(k)}else b.hideWhenClick&&d.click(function(){NEG(c).trigger(e.BEFORE_HIDE);d.hide();b.supportResize&&f(window).off("resize",r);NEG(c).trigger(e.AFTER_HIDE)}),d.css(b.style);d.css("position","absolute");d.css("float","left");this.dom=d[0];this.targetDoms=a.target&&[].concat(a.target);this.show=function(){NEG(this).trigger(e.BEFORE_SHOW);var c,j;if(a.target){if(a.target.length&&0<a.target.length)j=n(a.target),c=j.size,j=j.position;else{var s=jQuery(a.target);
"static"==s.css("position")&&s.css("position","relative");"none"!=s.css("display")&&(c=h(a.target),j=m(a.target))}if(!c||!j)return}else c=i,j=g;b.supportResize&&f(window).on("resize",r);q(d,j,c);d.show();NEG(this).trigger(e.AFTER_SHOW)};this.hide=function(){NEG(this).trigger(e.BEFORE_HIDE);d.hide();b.supportResize&&f(window).off("resize",r);NEG(this).trigger(e.AFTER_HIDE)};this.getSize=function(){return a.target?a.target.length&&0<a.target.length?n(a.target).size:h(a.target):i};this.setSize=function(b){!a.target&&
b&&NEG.utility.isDefined(b.width)&&NEG.utility.isDefined(b.height)&&(i=b)};this.getPosition=function(){return a.target?a.target.length&&0<a.target.length?n(a.target).position:m(a.target):g};this.setPosition=function(b){!a.target&&b&&NEG.utility.isType(b.top,"Number")&&NEG.utility.isType(b.left,"Number")&&(g=b)};this.on=function(a,b){var c=e[a];if(c&&b)NEG(this).on(c,b)};this.off=function(a,b){var c=e[a];c&&b&&NEG(this).off(c,b)}};return function(a,b){if(NEG.utility.isType(a,"Object")&&(NEG.utility.isDefined(a.target)||
NEG.utility.isDefined(a.size)&&NEG.utility.isDefined(a.size.width)&&NEG.utility.isDefined(a.size.height)&&NEG.utility.isDefined(a.position)&&NEG.utility.isDefined(a.position.top)&&NEG.utility.isDefined(a.position.left))){b||(b={});b.style&&NEG.blend(b.style,u.style,{cover:!1,mergePrototype:!1});NEG.blend(b,u,{cover:!1,mergePrototype:!1});var c;if(a.target){a.target===document&&(a.target=document.body);c=!1;var d;if(a.target.length&&0<a.target.length){for(var e in p){d=e;for(var g=p[e].slice(),f=0,
k=!0,f=0;f<a.target.length&&k;f++){for(var k=!1,h=0;h<g.length;h++)if(a.target[f]===g[h]){g.splice(h,1);k=!0;break}if(!k)break}0==g.length&&k&&(c=!0)}c?c=w[d]:(c=new t(a,b),p[l]=a.target,w[l]=c,l++)}else{for(e in o)if(d=e,a.target===o[e]){c=!0;break}c?c=v[d]:(c=new t(a,b),o[l]=a.target,v[l]=c,l++)}}else c=new t(a,b);return c}}});