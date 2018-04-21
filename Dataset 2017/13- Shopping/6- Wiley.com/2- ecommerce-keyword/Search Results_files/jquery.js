/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9999.5 (10-APR-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
(function(C,D){var B="2.9999.5";
if(C.support===D){C.support={opacity:!(C.browser.msie)};}function G(S){if(C.fn.cycle.debug){F(S);}}function F(){if(window.console&&console.log){console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}C.expr[":"].paused=function(S){return S.cyclePause;};C.fn.cycle=function(T,S){var U={s:this.selector,c:this.context};
if(this.length===0&&T!="stop"){if(!C.isReady&&U.s){F("DOM not ready, queuing slideshow");C(function(){C(U.s,U.c).cycle(T,S);});return this;}F("terminating; zero elements found by selector"+(C.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var Y=L(this,T,S);if(Y===false){return ;
}Y.updateActivePagerLink=Y.updateActivePagerLink||C.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;this.cycleStop=0;var Z=C(this);var a=Y.slideExpr?C(Y.slideExpr,this):Z.children();var W=a.get();if(W.length<2){F("terminating; too few slides: "+W.length);
return ;}var V=Q(Z,a,W,Y,U);if(V===false){return ;}var X=V.continuous?10:M(W[V.currSlide],W[V.nextSlide],V,!V.backwards);if(X){X+=(V.delay||0);if(X<10){X=10;}G("first timeout: "+X);this.cycleTimeout=setTimeout(function(){N(W,V,0,!Y.backwards);},X);}});};function K(S,V,U){var W=C(S).data("cycle.opts");
var T=!!S.cyclePause;if(T&&W.paused){W.paused(S,W,V,U);}else{if(!T&&W.resumed){W.resumed(S,W,V,U);}}}function L(S,V,T){if(S.cycleStop===D){S.cycleStop=0;}if(V===D||V===null){V={};}if(V.constructor==String){switch(V){case"destroy":case"stop":var X=C(S).data("cycle.opts");if(!X){return false;}S.cycleStop++;
if(S.cycleTimeout){clearTimeout(S.cycleTimeout);}S.cycleTimeout=0;if(X.elements){C(X.elements).stop();}C(S).removeData("cycle.opts");if(V=="destroy"){R(S,X);}return false;case"toggle":S.cyclePause=(S.cyclePause===1)?0:1;W(S.cyclePause,T,S);K(S);return false;case"pause":S.cyclePause=1;K(S);return false;
case"resume":S.cyclePause=0;W(false,T,S);K(S);return false;case"prev":case"next":X=C(S).data("cycle.opts");if(!X){F('options not found, "prev/next" ignored');return false;}C.fn.cycle[V](X);return false;default:V={fx:V};}return V;}else{if(V.constructor==Number){var U=V;V=C(S).data("cycle.opts");if(!V){F("options not found, can not advance slide");
return false;}if(U<0||U>=V.elements.length){F("invalid slide index: "+U);return false;}V.nextSlide=U;if(S.cycleTimeout){clearTimeout(S.cycleTimeout);S.cycleTimeout=0;}if(typeof T=="string"){V.oneTimeFx=T;}N(V.elements,V,1,U>=V.currSlide);return false;}}return V;function W(Z,a,Y){if(!Z&&a===true){var b=C(Y).data("cycle.opts");
if(!b){F("options not found, can not resume");return false;}if(Y.cycleTimeout){clearTimeout(Y.cycleTimeout);Y.cycleTimeout=0;}N(b.elements,b,1,!b.backwards);}}}function E(S,T){if(!C.support.opacity&&T.cleartype&&S.style.filter){try{S.style.removeAttribute("filter");}catch(U){}}}function R(S,T){if(T.next){C(T.next).unbind(T.prevNextEvent);
}if(T.prev){C(T.prev).unbind(T.prevNextEvent);}if(T.pager||T.pagerAnchorBuilder){C.each(T.pagerAnchors||[],function(){this.unbind().remove();});}T.pagerAnchors=null;C(S).unbind("mouseenter.cycle mouseleave.cycle");if(T.destroy){T.destroy(T);}}function Q(b,u,Y,X,m){var S;var k=C.extend({},C.fn.cycle.defaults,X||{},C.metadata?b.metadata():C.meta?b.data():{});
var f=C.isFunction(b.data)?b.data(k.metaAttr):null;if(f){k=C.extend(k,f);}if(k.autostop){k.countdown=k.autostopCount||Y.length;}var U=b[0];b.data("cycle.opts",k);k.$cont=b;k.stopCount=U.cycleStop;k.elements=Y;k.before=k.before?[k.before]:[];k.after=k.after?[k.after]:[];if(!C.support.opacity&&k.cleartype){k.after.push(function(){E(this,k);
});}if(k.continuous){k.after.push(function(){N(Y,k,0,!k.backwards);});}I(k);if(!C.support.opacity&&k.cleartype&&!k.cleartypeNoBg){A(u);}if(b.css("position")=="static"){b.css("position","relative");}if(k.width){b.width(k.width);}if(k.height&&k.height!="auto"){b.height(k.height);}if(k.startingSlide!==D){k.startingSlide=parseInt(k.startingSlide,10);
if(k.startingSlide>=Y.length||k.startSlide<0){k.startingSlide=0;}else{S=true;}}else{if(k.backwards){k.startingSlide=Y.length-1;}else{k.startingSlide=0;}}if(k.random){k.randomMap=[];for(var s=0;s<Y.length;s++){k.randomMap.push(s);}k.randomMap.sort(function(h,e){return Math.random()-0.5;});if(S){for(var q=0;
q<Y.length;q++){if(k.startingSlide==k.randomMap[q]){k.randomIndex=q;}}}else{k.randomIndex=1;k.startingSlide=k.randomMap[1];}}else{if(k.startingSlide>=Y.length){k.startingSlide=0;}}k.currSlide=k.startingSlide||0;var a=k.startingSlide;u.css({position:"absolute",top:0,left:0}).hide().each(function(e){var h;
if(k.backwards){h=a?e<=a?Y.length+(e-a):a-e:Y.length-e;}else{h=a?e>=a?Y.length-(e-a):a-e:Y.length-e;}C(this).css("z-index",h);});C(Y[a]).css("opacity",1).show();E(Y[a],k);if(k.fit){if(!k.aspect){if(k.width){u.width(k.width);}if(k.height&&k.height!="auto"){u.height(k.height);}}else{u.each(function(){var h=C(this);
var e=(k.aspect===true)?h.width()/h.height():k.aspect;if(k.width&&h.width()!=k.width){h.width(k.width);h.height(k.width/e);}if(k.height&&h.height()<k.height){h.height(k.height);h.width(k.height*e);}});}}if(k.center&&((!k.fit)||k.aspect)){u.each(function(){var e=C(this);e.css({"margin-left":k.width?((k.width-e.width())/2)+"px":0,"margin-top":k.height?((k.height-e.height())/2)+"px":0});
});}if(k.center&&!k.fit&&!k.slideResize){u.each(function(){var e=C(this);e.css({"margin-left":k.width?((k.width-e.width())/2)+"px":0,"margin-top":k.height?((k.height-e.height())/2)+"px":0});});}var l=k.containerResize&&!b.innerHeight();if(l){var Z=0,g=0;for(var p=0;p<Y.length;p++){var T=C(Y[p]),v=T[0],d=T.outerWidth(),t=T.outerHeight();
if(!d){d=v.offsetWidth||v.width||T.attr("width");}if(!t){t=v.offsetHeight||v.height||T.attr("height");}Z=d>Z?d:Z;g=t>g?t:g;}if(Z>0&&g>0){b.css({width:Z+"px",height:g+"px"});}}var W=false;if(k.pause){b.bind("mouseenter.cycle",function(){W=true;this.cyclePause++;K(U,true);}).bind("mouseleave.cycle",function(){if(W){this.cyclePause--;
}K(U,true);});}if(O(k)===false){return false;}var V=false;X.requeueAttempts=X.requeueAttempts||0;u.each(function(){var j=C(this);this.cycleH=(k.fit&&k.height)?k.height:(j.height()||this.offsetHeight||this.height||j.attr("height")||0);this.cycleW=(k.fit&&k.width)?k.width:(j.width()||this.offsetWidth||this.width||j.attr("width")||0);
if(j.is("img")){var h=(C.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var o=(C.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var i=(C.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var e=(this.cycleH===0&&this.cycleW===0&&!this.complete);
if(h||o||i||e){if(m.s&&k.requeueOnImageNotLoaded&&++X.requeueAttempts<100){F(X.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){C(m.s,m.c).cycle(X);},k.requeueTimeout);V=true;return false;}else{F("could not determine size of image: "+this.src,this.cycleW,this.cycleH);
}}}return true;});if(V){return false;}k.cssBefore=k.cssBefore||{};k.cssAfter=k.cssAfter||{};k.cssFirst=k.cssFirst||{};k.animIn=k.animIn||{};k.animOut=k.animOut||{};u.not(":eq("+a+")").css(k.cssBefore);C(u[a]).css(k.cssFirst);if(k.timeout){k.timeout=parseInt(k.timeout,10);if(k.speed.constructor==String){k.speed=C.fx.speeds[k.speed]||parseInt(k.speed,10);
}if(!k.sync){k.speed=k.speed/2;}var n=k.fx=="none"?0:k.fx=="shuffle"?500:250;while((k.timeout-k.speed)<n){k.timeout+=k.speed;}}if(k.easing){k.easeIn=k.easeOut=k.easing;}if(!k.speedIn){k.speedIn=k.speed;}if(!k.speedOut){k.speedOut=k.speed;}k.slideCount=Y.length;k.currSlide=k.lastSlide=a;if(k.random){if(++k.randomIndex==Y.length){k.randomIndex=0;
}k.nextSlide=k.randomMap[k.randomIndex];}else{if(k.backwards){k.nextSlide=k.startingSlide===0?(Y.length-1):k.startingSlide-1;}else{k.nextSlide=k.startingSlide>=(Y.length-1)?0:k.startingSlide+1;}}if(!k.multiFx){var r=C.fn.cycle.transitions[k.fx];if(C.isFunction(r)){r(b,u,k);}else{if(k.fx!="custom"&&!k.multiFx){F("unknown transition: "+k.fx,"; slideshow terminating");
return false;}}}var c=u[a];if(!k.skipInitializationCallbacks){if(k.before.length){k.before[0].apply(c,[c,c,k,true]);}if(k.after.length){k.after[0].apply(c,[c,c,k,true]);}}if(k.next){C(k.next).bind(k.prevNextEvent,function(){return H(k,1);});}if(k.prev){C(k.prev).bind(k.prevNextEvent,function(){return H(k,0);
});}if(k.pager||k.pagerAnchorBuilder){P(Y,k);}J(k,Y);return k;}function I(S){S.original={before:[],after:[]};S.original.cssBefore=C.extend({},S.cssBefore);S.original.cssAfter=C.extend({},S.cssAfter);S.original.animIn=C.extend({},S.animIn);S.original.animOut=C.extend({},S.animOut);C.each(S.before,function(){S.original.before.push(this);
});C.each(S.after,function(){S.original.after.push(this);});}function O(Y){var W,U,T=C.fn.cycle.transitions;if(Y.fx.indexOf(",")>0){Y.multiFx=true;Y.fxs=Y.fx.replace(/\s*/g,"").split(",");for(W=0;W<Y.fxs.length;W++){var X=Y.fxs[W];U=T[X];if(!U||!T.hasOwnProperty(X)||!C.isFunction(U)){F("discarding unknown transition: ",X);
Y.fxs.splice(W,1);W--;}}if(!Y.fxs.length){F("No valid transitions named; slideshow terminating.");return false;}}else{if(Y.fx=="all"){Y.multiFx=true;Y.fxs=[];for(var Z in T){if(T.hasOwnProperty(Z)){U=T[Z];if(T.hasOwnProperty(Z)&&C.isFunction(U)){Y.fxs.push(Z);}}}}}if(Y.multiFx&&Y.randomizeEffects){var V=Math.floor(Math.random()*20)+30;
for(W=0;W<V;W++){var S=Math.floor(Math.random()*Y.fxs.length);Y.fxs.push(Y.fxs.splice(S,1)[0]);}G("randomized fx sequence: ",Y.fxs);}return true;}function J(T,S){T.addSlide=function(V,W){var U=C(V),X=U[0];if(!T.autostopCount){T.countdown++;}S[W?"unshift":"push"](X);if(T.els){T.els[W?"unshift":"push"](X);
}T.slideCount=S.length;if(T.random){T.randomMap.push(T.slideCount-1);T.randomMap.sort(function(Z,Y){return Math.random()-0.5;});}U.css("position","absolute");U[W?"prependTo":"appendTo"](T.$cont);if(W){T.currSlide++;T.nextSlide++;}if(!C.support.opacity&&T.cleartype&&!T.cleartypeNoBg){A(U);}if(T.fit&&T.width){U.width(T.width);
}if(T.fit&&T.height&&T.height!="auto"){U.height(T.height);}X.cycleH=(T.fit&&T.height)?T.height:U.height();X.cycleW=(T.fit&&T.width)?T.width:U.width();U.css(T.cssBefore);if(T.pager||T.pagerAnchorBuilder){C.fn.cycle.createPagerAnchor(S.length-1,X,C(T.pager),S,T);}if(C.isFunction(T.onAddSlide)){T.onAddSlide(U);
}else{U.hide();}};}C.fn.cycle.resetState=function(T,S){S=S||T.fx;T.before=[];T.after=[];T.cssBefore=C.extend({},T.original.cssBefore);T.cssAfter=C.extend({},T.original.cssAfter);T.animIn=C.extend({},T.original.animIn);T.animOut=C.extend({},T.original.animOut);T.fxFn=null;C.each(T.original.before,function(){T.before.push(this);
});C.each(T.original.after,function(){T.after.push(this);});var U=C.fn.cycle.transitions[S];if(C.isFunction(U)){U(T.$cont,C(T.elements),T);}};function N(Y,S,X,a){var V=S.$cont[0],d=Y[S.currSlide],b=Y[S.nextSlide];if(X&&S.busy&&S.manualTrump){G("manualTrump in go(), stopping active transition");C(Y).stop(true,true);
S.busy=0;clearTimeout(V.cycleTimeout);}if(S.busy){G("transition active, ignoring new tx request");return ;}if(V.cycleStop!=S.stopCount||V.cycleTimeout===0&&!X){return ;}if(!X&&!V.cyclePause&&!S.bounce&&((S.autostop&&(--S.countdown<=0))||(S.nowrap&&!S.random&&S.nextSlide<S.currSlide))){if(S.end){S.end(S);
}return ;}var Z=false;if((X||!V.cyclePause)&&(S.nextSlide!=S.currSlide)){Z=true;var W=S.fx;d.cycleH=d.cycleH||C(d).height();d.cycleW=d.cycleW||C(d).width();b.cycleH=b.cycleH||C(b).height();b.cycleW=b.cycleW||C(b).width();if(S.multiFx){if(a&&(S.lastFx===D||++S.lastFx>=S.fxs.length)){S.lastFx=0;}else{if(!a&&(S.lastFx===D||--S.lastFx<0)){S.lastFx=S.fxs.length-1;
}}W=S.fxs[S.lastFx];}if(S.oneTimeFx){W=S.oneTimeFx;S.oneTimeFx=null;}C.fn.cycle.resetState(S,W);if(S.before.length){C.each(S.before,function(e,f){if(V.cycleStop!=S.stopCount){return ;}f.apply(b,[d,b,S,a]);});}var T=function(){S.busy=0;C.each(S.after,function(e,f){if(V.cycleStop!=S.stopCount){return ;
}f.apply(b,[d,b,S,a]);});if(!V.cycleStop){c();}};G("tx firing("+W+"); currSlide: "+S.currSlide+"; nextSlide: "+S.nextSlide);S.busy=1;if(S.fxFn){S.fxFn(d,b,S,T,a,X&&S.fastOnEvent);}else{if(C.isFunction(C.fn.cycle[S.fx])){C.fn.cycle[S.fx](d,b,S,T,a,X&&S.fastOnEvent);}else{C.fn.cycle.custom(d,b,S,T,a,X&&S.fastOnEvent);
}}}else{c();}if(Z||S.nextSlide==S.currSlide){var U;S.lastSlide=S.currSlide;if(S.random){S.currSlide=S.nextSlide;if(++S.randomIndex==Y.length){S.randomIndex=0;S.randomMap.sort(function(f,e){return Math.random()-0.5;});}S.nextSlide=S.randomMap[S.randomIndex];if(S.nextSlide==S.currSlide){S.nextSlide=(S.currSlide==S.slideCount-1)?0:S.currSlide+1;
}}else{if(S.backwards){U=(S.nextSlide-1)<0;if(U&&S.bounce){S.backwards=!S.backwards;S.nextSlide=1;S.currSlide=0;}else{S.nextSlide=U?(Y.length-1):S.nextSlide-1;S.currSlide=U?0:S.nextSlide+1;}}else{U=(S.nextSlide+1)==Y.length;if(U&&S.bounce){S.backwards=!S.backwards;S.nextSlide=Y.length-2;S.currSlide=Y.length-1;
}else{S.nextSlide=U?0:S.nextSlide+1;S.currSlide=U?Y.length-1:S.nextSlide-1;}}}}if(Z&&S.pager){S.updateActivePagerLink(S.pager,S.currSlide,S.activePagerClass);}function c(){var e=0,f=S.timeout;if(S.timeout&&!S.continuous){e=M(Y[S.currSlide],Y[S.nextSlide],S,a);if(S.fx=="shuffle"){e-=S.speedOut;}}else{if(S.continuous&&V.cyclePause){e=10;
}}if(e>0){V.cycleTimeout=setTimeout(function(){N(Y,S,0,!S.backwards);},e);}}}C.fn.cycle.updateActivePagerLink=function(S,U,T){C(S).each(function(){C(this).children().removeClass(T).eq(U).addClass(T);});};function M(W,U,V,T){if(V.timeoutFn){var S=V.timeoutFn.call(W,W,U,V,T);while(V.fx!="none"&&(S-V.speed)<250){S+=V.speed;
}G("calculated timeout: "+S+"; speed: "+V.speed);if(S!==false){return S;}}return V.timeout;}C.fn.cycle.next=function(S){H(S,1);};C.fn.cycle.prev=function(S){H(S,0);};function H(V,U){var Y=U?1:-1;var T=V.elements;var X=V.$cont[0],W=X.cycleTimeout;if(W){clearTimeout(W);X.cycleTimeout=0;}if(V.random&&Y<0){V.randomIndex--;
if(--V.randomIndex==-2){V.randomIndex=T.length-2;}else{if(V.randomIndex==-1){V.randomIndex=T.length-1;}}V.nextSlide=V.randomMap[V.randomIndex];}else{if(V.random){V.nextSlide=V.randomMap[V.randomIndex];}else{V.nextSlide=V.currSlide+Y;if(V.nextSlide<0){if(V.nowrap){return false;}V.nextSlide=T.length-1;
}else{if(V.nextSlide>=T.length){if(V.nowrap){return false;}V.nextSlide=0;}}}}var S=V.onPrevNextEvent||V.prevNextClick;if(C.isFunction(S)){S(Y>0,V.nextSlide,T[V.nextSlide]);}N(T,V,1,U);return false;}function P(T,U){var S=C(U.pager);C.each(T,function(V,W){C.fn.cycle.createPagerAnchor(V,W,S,T,U);});U.updateActivePagerLink(U.pager,U.startingSlide,U.activePagerClass);
}C.fn.cycle.createPagerAnchor=function(X,U,Z,W,T){var b;if(C.isFunction(T.pagerAnchorBuilder)){b=T.pagerAnchorBuilder(X,U);G("pagerAnchorBuilder("+X+", el) returned: "+b);}else{b='<a href="#">'+(X+1)+"</a>";}if(!b){return ;}var V=C(b);if(V.parents("body").length===0){var Y=[];if(Z.length>1){Z.each(function(){var a=V.clone(true);
C(this).append(a);Y.push(a[0]);});V=C(Y);}else{V.appendTo(Z);}}T.pagerAnchors=T.pagerAnchors||[];T.pagerAnchors.push(V);var c=function(h){h.preventDefault();T.nextSlide=X;var g=T.$cont[0],f=g.cycleTimeout;if(f){clearTimeout(f);g.cycleTimeout=0;}var a=T.onPagerEvent||T.pagerClick;if(C.isFunction(a)){a(T.nextSlide,W[T.nextSlide]);
}N(W,T,1,T.currSlide<X);};if(/mouseenter|mouseover/i.test(T.pagerEvent)){V.hover(c,function(){});}else{V.bind(T.pagerEvent,c);}if(!/^click/.test(T.pagerEvent)&&!T.allowPagerClickBubble){V.bind("click.cycle",function(){return false;});}var d=T.$cont[0];var S=false;if(T.pauseOnPagerHover){V.hover(function(){S=true;
d.cyclePause++;K(d,true,true);},function(){if(S){d.cyclePause--;}K(d,true,true);});}};C.fn.cycle.hopsFromLast=function(V,U){var T,S=V.lastSlide,W=V.currSlide;if(U){T=W>S?W-S:V.slideCount-S;}else{T=W<S?S-W:S+V.slideCount-W;}return T;};function A(U){G("applying clearType background-color hack");function T(V){V=parseInt(V,10).toString(16);
return V.length<2?"0"+V:V;}function S(X){for(;X&&X.nodeName.toLowerCase()!="html";X=X.parentNode){var V=C.css(X,"background-color");if(V&&V.indexOf("rgb")>=0){var W=V.match(/\d+/g);return"#"+T(W[0])+T(W[1])+T(W[2]);}if(V&&V!="transparent"){return V;}}return"#ffffff";}U.each(function(){C(this).css("background-color",S(this));
});}C.fn.cycle.commonReset=function(X,V,W,T,U,S){C(W.elements).not(X).hide();if(typeof W.cssBefore.opacity=="undefined"){W.cssBefore.opacity=1;}W.cssBefore.display="block";if(W.slideResize&&T!==false&&V.cycleW>0){W.cssBefore.width=V.cycleW;}if(W.slideResize&&U!==false&&V.cycleH>0){W.cssBefore.height=V.cycleH;
}W.cssAfter=W.cssAfter||{};W.cssAfter.display="none";C(X).css("zIndex",W.slideCount+(S===true?1:0));C(V).css("zIndex",W.slideCount+(S===true?0:1));};C.fn.cycle.custom=function(e,Y,S,V,X,T){var d=C(e),Z=C(Y);var U=S.speedIn,c=S.speedOut,W=S.easeIn,b=S.easeOut;Z.css(S.cssBefore);if(T){if(typeof T=="number"){U=c=T;
}else{U=c=1;}W=b=null;}var a=function(){Z.animate(S.animIn,U,W,function(){V();});};d.animate(S.animOut,c,b,function(){d.css(S.cssAfter);if(!S.sync){a();}});if(S.sync){a();}};C.fn.cycle.transitions={fade:function(T,U,S){U.not(":eq("+S.currSlide+")").css("opacity",0);S.before.push(function(X,V,W){C.fn.cycle.commonReset(X,V,W);
W.cssBefore.opacity=0;});S.animIn={opacity:1};S.animOut={opacity:0};S.cssBefore={top:0,left:0};}};C.fn.cycle.ver=function(){return B;};C.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:false,animIn:null,animOut:null,aspect:false,autostop:0,autostopCount:0,backwards:false,before:null,center:null,cleartype:!C.support.opacity,cleartypeNoBg:false,containerResize:1,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:true,metaAttr:"cycle",next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,skipInitializationCallbacks:false,slideExpr:null,slideResize:1,speed:1000,speedIn:null,speedOut:null,startingSlide:D,sync:1,timeout:4000,timeoutFn:null,updateActivePagerLink:null,width:null};
})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function(A){A.fn.cycle.transitions.none=function(C,D,B){B.fxFn=function(G,E,F,H){A(E).show();
A(G).hide();H();};};A.fn.cycle.transitions.fadeout=function(C,D,B){D.not(":eq("+B.currSlide+")").css({display:"block","opacity":1});B.before.push(function(J,H,I,F,G,E){A(J).css("zIndex",I.slideCount+(E!==true?1:0));A(H).css("zIndex",I.slideCount+(E!==true?0:1));});B.animIn.opacity=1;B.animOut.opacity=0;
B.cssBefore.opacity=1;B.cssBefore.display="block";B.cssAfter.zIndex=0;};A.fn.cycle.transitions.scrollUp=function(D,E,C){D.css("overflow","hidden");C.before.push(A.fn.cycle.commonReset);var B=D.height();C.cssBefore.top=B;C.cssBefore.left=0;C.cssFirst.top=0;C.animIn.top=0;C.animOut.top=-B;};A.fn.cycle.transitions.scrollDown=function(D,E,C){D.css("overflow","hidden");
C.before.push(A.fn.cycle.commonReset);var B=D.height();C.cssFirst.top=0;C.cssBefore.top=-B;C.cssBefore.left=0;C.animIn.top=0;C.animOut.top=B;};A.fn.cycle.transitions.scrollLeft=function(D,E,C){D.css("overflow","hidden");C.before.push(A.fn.cycle.commonReset);var B=D.width();C.cssFirst.left=0;C.cssBefore.left=B;
C.cssBefore.top=0;C.animIn.left=0;C.animOut.left=0-B;};A.fn.cycle.transitions.scrollRight=function(D,E,C){D.css("overflow","hidden");C.before.push(A.fn.cycle.commonReset);var B=D.width();C.cssFirst.left=0;C.cssBefore.left=-B;C.cssBefore.top=0;C.animIn.left=0;C.animOut.left=B;};A.fn.cycle.transitions.scrollHorz=function(C,D,B){C.css("overflow","hidden").width();
B.before.push(function(H,F,G,E){if(G.rev){E=!E;}A.fn.cycle.commonReset(H,F,G);G.cssBefore.left=E?(F.cycleW-1):(1-F.cycleW);G.animOut.left=E?-H.cycleW:H.cycleW;});B.cssFirst.left=0;B.cssBefore.top=0;B.animIn.left=0;B.animOut.top=0;};A.fn.cycle.transitions.scrollVert=function(C,D,B){C.css("overflow","hidden");
B.before.push(function(H,F,G,E){if(G.rev){E=!E;}A.fn.cycle.commonReset(H,F,G);G.cssBefore.top=E?(1-F.cycleH):(F.cycleH-1);G.animOut.top=E?H.cycleH:-H.cycleH;});B.cssFirst.top=0;B.cssBefore.left=0;B.animIn.top=0;B.animOut.left=0;};A.fn.cycle.transitions.slideX=function(C,D,B){B.before.push(function(G,E,F){A(F.elements).not(G).hide();
A.fn.cycle.commonReset(G,E,F,false,true);F.animIn.width=E.cycleW;});B.cssBefore.left=0;B.cssBefore.top=0;B.cssBefore.width=0;B.animIn.width="show";B.animOut.width=0;};A.fn.cycle.transitions.slideY=function(C,D,B){B.before.push(function(G,E,F){A(F.elements).not(G).hide();A.fn.cycle.commonReset(G,E,F,true,false);
F.animIn.height=E.cycleH;});B.cssBefore.left=0;B.cssBefore.top=0;B.cssBefore.height=0;B.animIn.height="show";B.animOut.height=0;};A.fn.cycle.transitions.shuffle=function(E,F,D){var C,B=E.css("overflow","visible").width();F.css({left:0,top:0});D.before.push(function(I,G,H){A.fn.cycle.commonReset(I,G,H,true,true,true);
});if(!D.speedAdjusted){D.speed=D.speed/2;D.speedAdjusted=true;}D.random=0;D.shuffle=D.shuffle||{left:-B,top:15};D.els=[];for(C=0;C<F.length;C++){D.els.push(F[C]);}for(C=0;C<D.currSlide;C++){D.els.push(D.els.shift());}D.fxFn=function(M,J,L,G,I){if(L.rev){I=!I;}var H=I?A(M):A(J);A(J).css(L.cssBefore);
var K=L.slideCount;H.animate(L.shuffle,L.speedIn,L.easeIn,function(){var O=A.fn.cycle.hopsFromLast(L,I);for(var P=0;P<O;P++){if(I){L.els.push(L.els.shift());}else{L.els.unshift(L.els.pop());}}if(I){for(var Q=0,N=L.els.length;Q<N;Q++){A(L.els[Q]).css("z-index",N-Q+K);}}else{var R=A(M).css("z-index");H.css("z-index",parseInt(R,10)+1+K);
}H.animate({left:0,top:0},L.speedOut,L.easeOut,function(){A(I?this:M).hide();if(G){G();}});});};A.extend(D.cssBefore,{display:"block",opacity:1,top:0,left:0});};A.fn.cycle.transitions.turnUp=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,true,false);F.cssBefore.top=E.cycleH;
F.animIn.height=E.cycleH;F.animOut.width=E.cycleW;});B.cssFirst.top=0;B.cssBefore.left=0;B.cssBefore.height=0;B.animIn.top=0;B.animOut.height=0;};A.fn.cycle.transitions.turnDown=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,true,false);F.animIn.height=E.cycleH;F.animOut.top=G.cycleH;
});B.cssFirst.top=0;B.cssBefore.left=0;B.cssBefore.top=0;B.cssBefore.height=0;B.animOut.height=0;};A.fn.cycle.transitions.turnLeft=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,false,true);F.cssBefore.left=E.cycleW;F.animIn.width=E.cycleW;});B.cssBefore.top=0;B.cssBefore.width=0;
B.animIn.left=0;B.animOut.width=0;};A.fn.cycle.transitions.turnRight=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,false,true);F.animIn.width=E.cycleW;F.animOut.left=G.cycleW;});A.extend(B.cssBefore,{top:0,left:0,width:0});B.animIn.left=0;B.animOut.width=0;};A.fn.cycle.transitions.zoom=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,false,false,true);
F.cssBefore.top=E.cycleH/2;F.cssBefore.left=E.cycleW/2;A.extend(F.animIn,{top:0,left:0,width:E.cycleW,height:E.cycleH});A.extend(F.animOut,{width:0,height:0,top:G.cycleH/2,left:G.cycleW/2});});B.cssFirst.top=0;B.cssFirst.left=0;B.cssBefore.width=0;B.cssBefore.height=0;};A.fn.cycle.transitions.fadeZoom=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,false,false);
F.cssBefore.left=E.cycleW/2;F.cssBefore.top=E.cycleH/2;A.extend(F.animIn,{top:0,left:0,width:E.cycleW,height:E.cycleH});});B.cssBefore.width=0;B.cssBefore.height=0;B.animOut.opacity=0;};A.fn.cycle.transitions.blindX=function(D,E,C){var B=D.css("overflow","hidden").width();C.before.push(function(H,F,G){A.fn.cycle.commonReset(H,F,G);
G.animIn.width=F.cycleW;G.animOut.left=H.cycleW;});C.cssBefore.left=B;C.cssBefore.top=0;C.animIn.left=0;C.animOut.left=B;};A.fn.cycle.transitions.blindY=function(D,E,C){var B=D.css("overflow","hidden").height();C.before.push(function(H,F,G){A.fn.cycle.commonReset(H,F,G);G.animIn.height=F.cycleH;G.animOut.top=H.cycleH;
});C.cssBefore.top=B;C.cssBefore.left=0;C.animIn.top=0;C.animOut.top=B;};A.fn.cycle.transitions.blindZ=function(E,F,D){var C=E.css("overflow","hidden").height();var B=E.width();D.before.push(function(I,G,H){A.fn.cycle.commonReset(I,G,H);H.animIn.height=G.cycleH;H.animOut.top=I.cycleH;});D.cssBefore.top=C;
D.cssBefore.left=B;D.animIn.top=0;D.animIn.left=0;D.animOut.top=C;D.animOut.left=B;};A.fn.cycle.transitions.growX=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,false,true);F.cssBefore.left=this.cycleW/2;F.animIn.left=0;F.animIn.width=this.cycleW;F.animOut.left=0;});B.cssBefore.top=0;
B.cssBefore.width=0;};A.fn.cycle.transitions.growY=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,true,false);F.cssBefore.top=this.cycleH/2;F.animIn.top=0;F.animIn.height=this.cycleH;F.animOut.top=0;});B.cssBefore.height=0;B.cssBefore.left=0;};A.fn.cycle.transitions.curtainX=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,false,true,true);
F.cssBefore.left=E.cycleW/2;F.animIn.left=0;F.animIn.width=this.cycleW;F.animOut.left=G.cycleW/2;F.animOut.width=0;});B.cssBefore.top=0;B.cssBefore.width=0;};A.fn.cycle.transitions.curtainY=function(C,D,B){B.before.push(function(G,E,F){A.fn.cycle.commonReset(G,E,F,true,false,true);F.cssBefore.top=E.cycleH/2;
F.animIn.top=0;F.animIn.height=E.cycleH;F.animOut.top=G.cycleH/2;F.animOut.height=0;});B.cssBefore.height=0;B.cssBefore.left=0;};A.fn.cycle.transitions.cover=function(E,F,D){var G=D.direction||"left";var B=E.css("overflow","hidden").width();var C=E.height();D.before.push(function(J,H,I){A.fn.cycle.commonReset(J,H,I);
if(G=="right"){I.cssBefore.left=-B;}else{if(G=="up"){I.cssBefore.top=C;}else{if(G=="down"){I.cssBefore.top=-C;}else{I.cssBefore.left=B;}}}});D.animIn.left=0;D.animIn.top=0;D.cssBefore.top=0;D.cssBefore.left=0;};A.fn.cycle.transitions.uncover=function(E,F,D){var G=D.direction||"left";var B=E.css("overflow","hidden").width();
var C=E.height();D.before.push(function(J,H,I){A.fn.cycle.commonReset(J,H,I,true,true,true);if(G=="right"){I.animOut.left=B;}else{if(G=="up"){I.animOut.top=-C;}else{if(G=="down"){I.animOut.top=C;}else{I.animOut.left=-B;}}}});D.animIn.left=0;D.animIn.top=0;D.cssBefore.top=0;D.cssBefore.left=0;};A.fn.cycle.transitions.toss=function(E,F,D){var B=E.css("overflow","visible").width();
var C=E.height();D.before.push(function(I,G,H){A.fn.cycle.commonReset(I,G,H,true,true,true);if(!H.animOut.left&&!H.animOut.top){A.extend(H.animOut,{left:B*2,top:-C/2,opacity:0});}else{H.animOut.opacity=0;}});D.cssBefore.left=0;D.cssBefore.top=0;D.animIn.left=0;};A.fn.cycle.transitions.wipe=function(M,I,C){var L=M.css("overflow","hidden").width();
var G=M.height();C.cssBefore=C.cssBefore||{};var E;if(C.clip){if(/l2r/.test(C.clip)){E="rect(0px 0px "+G+"px 0px)";}else{if(/r2l/.test(C.clip)){E="rect(0px "+L+"px "+G+"px "+L+"px)";}else{if(/t2b/.test(C.clip)){E="rect(0px "+L+"px 0px 0px)";}else{if(/b2t/.test(C.clip)){E="rect("+G+"px "+L+"px "+G+"px 0px)";
}else{if(/zoom/.test(C.clip)){var K=parseInt(G/2,10);var D=parseInt(L/2,10);E="rect("+K+"px "+D+"px "+K+"px "+D+"px)";}}}}}}C.cssBefore.clip=C.cssBefore.clip||E||"rect(0px 0px 0px 0px)";var H=C.cssBefore.clip.match(/(\d+)/g);var N=parseInt(H[0],10),B=parseInt(H[1],10),J=parseInt(H[2],10),F=parseInt(H[3],10);
C.before.push(function(V,Q,T){if(V==Q){return ;}var P=A(V),O=A(Q);A.fn.cycle.commonReset(V,Q,T,true,true,false);T.cssAfter.display="block";var S=1,R=parseInt((T.speedIn/13),10)-1;(function U(){var X=N?N-parseInt(S*(N/R),10):0;var Y=F?F-parseInt(S*(F/R),10):0;var Z=J<G?J+parseInt(S*((G-J)/R||1),10):G;
var W=B<L?B+parseInt(S*((L-B)/R||1),10):L;O.css({clip:"rect("+X+"px "+W+"px "+Z+"px "+Y+"px)"});(S++<=R)?setTimeout(U,13):P.css("display","none");})();});A.extend(C.cssBefore,{display:"block",opacity:1,top:0,left:0});C.animIn={left:0};C.animOut={left:0};};})(jQuery);