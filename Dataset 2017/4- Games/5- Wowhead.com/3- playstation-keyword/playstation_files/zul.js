!function(e,t,i){function n(e,i){this.wrapper="string"==typeof e?t.querySelector(e):e,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var n in i)this.options[n]=i[n];this.translateZ=this.options.HWCompositing&&a.hasPerspective?" translateZ(0)":"",this.options.useTransition=a.hasTransition&&this.options.useTransition,this.options.useTransform=a.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?a.ease[this.options.bounceEasing]||a.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var o=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)},a=function(){function n(e){return s===!1?!1:""===s?e:s+e.charAt(0).toUpperCase()+e.substr(1)}var o={},a=t.createElement("div").style,s=function(){for(var e,t=["t","webkitT","MozT","msT","OT"],i=0,n=t.length;n>i;i++)if(e=t[i]+"ransform",e in a)return t[i].substr(0,t[i].length-1);return!1}();o.getTime=Date.now||function(){return(new Date).getTime()},o.extend=function(e,t){for(var i in t)e[i]=t[i]},o.addEvent=function(e,t,i,n){e.addEventListener(t,i,!!n)},o.removeEvent=function(e,t,i,n){e.removeEventListener(t,i,!!n)},o.prefixPointerEvent=function(t){return e.MSPointerEvent?"MSPointer"+t.charAt(9).toUpperCase()+t.substr(10):t},o.momentum=function(e,t,n,o,a,s){var r,l,c=e-t,u=i.abs(c)/n;return s=void 0===s?6e-4:s,r=e+u*u/(2*s)*(0>c?-1:1),l=u/s,o>r?(r=a?o-a/2.5*(u/8):o,c=i.abs(r-e),l=c/u):r>0&&(r=a?a/2.5*(u/8):0,c=i.abs(e)+r,l=c/u),{destination:i.round(r),duration:l}};var r=n("transform");return o.extend(o,{hasTransform:r!==!1,hasPerspective:n("perspective")in a,hasTouch:"ontouchstart"in e,hasPointer:e.PointerEvent||e.MSPointerEvent,hasTransition:n("transition")in a}),o.isBadAndroid=/Android /.test(e.navigator.appVersion)&&!/Chrome\/\d/.test(e.navigator.appVersion),o.extend(o.style={},{transform:r,transitionTimingFunction:n("transitionTimingFunction"),transitionDuration:n("transitionDuration"),transitionDelay:n("transitionDelay"),transformOrigin:n("transformOrigin")}),o.hasClass=function(e,t){var i=new RegExp("(^|\\s)"+t+"(\\s|$)");return i.test(e.className)},o.addClass=function(e,t){if(!o.hasClass(e,t)){var i=e.className.split(" ");i.push(t),e.className=i.join(" ")}},o.removeClass=function(e,t){if(o.hasClass(e,t)){var i=new RegExp("(^|\\s)"+t+"(\\s|$)","g");e.className=e.className.replace(i," ")}},o.offset=function(e){for(var t=-e.offsetLeft,i=-e.offsetTop;e=e.offsetParent;)t-=e.offsetLeft,i-=e.offsetTop;return{left:t,top:i}},o.preventDefaultException=function(e,t){for(var i in t)if(t[i].test(e[i]))return!0;return!1},o.extend(o.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),o.extend(o.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return i.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){var t=4;return(e-=1)*e*((t+1)*e+t)+1}},bounce:{style:"",fn:function(e){return(e/=1)<1/2.75?7.5625*e*e:2/2.75>e?7.5625*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}},elastic:{style:"",fn:function(e){var t=.22,n=.4;return 0===e?0:1==e?1:n*i.pow(2,-10*e)*i.sin((e-t/4)*(2*i.PI)/t)+1}}}),o.tap=function(e,i){var n=t.createEvent("Event");n.initEvent(i,!0,!0),n.pageX=e.pageX,n.pageY=e.pageY,e.target.dispatchEvent(n)},o.click=function(e){var i,n=e.target;/(SELECT|INPUT|TEXTAREA)/i.test(n.tagName)||(i=t.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,e.view,1,n.screenX,n.screenY,n.clientX,n.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),i._constructed=!0,n.dispatchEvent(i))},o}();n.prototype={version:"5.1.3",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(e){e.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(e){if((1==a.eventType[e.type]||0===e.button)&&this.enabled&&(!this.initiated||a.eventType[e.type]===this.initiated)){!this.options.preventDefault||a.isBadAndroid||a.preventDefaultException(e.target,this.options.preventDefaultException)||e.preventDefault();var t,n=e.touches?e.touches[0]:e;this.initiated=a.eventType[e.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=a.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,t=this.getComputedPosition(),this._translate(i.round(t.x),i.round(t.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=n.pageX,this.pointY=n.pageY,this._execEvent("beforeScrollStart")}},_move:function(e){if(this.enabled&&a.eventType[e.type]===this.initiated){this.options.preventDefault&&e.preventDefault();var t,n,o,s,r=e.touches?e.touches[0]:e,l=r.pageX-this.pointX,c=r.pageY-this.pointY,u=a.getTime();if(this.pointX=r.pageX,this.pointY=r.pageY,this.distX+=l,this.distY+=c,o=i.abs(this.distX),s=i.abs(this.distY),!(u-this.endTime>300&&10>o&&10>s)){if(this.directionLocked||this.options.freeScroll||(o>s+this.options.directionLockThreshold?this.directionLocked="h":s>=o+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)e.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);c=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)e.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}l=this.hasHorizontalScroll?l:0,c=this.hasVerticalScroll?c:0,t=this.x+l,n=this.y+c,(t>0||t<this.maxScrollX)&&(t=this.options.bounce?this.x+l/3:t>0?0:this.maxScrollX),(n>0||n<this.maxScrollY)&&(n=this.options.bounce?this.y+c/3:n>0?0:this.maxScrollY),this.directionX=l>0?-1:0>l?1:0,this.directionY=c>0?-1:0>c?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(t,n),u-this.startTime>300&&(this.startTime=u,this.startX=this.x,this.startY=this.y)}}},_end:function(e){if(this.enabled&&a.eventType[e.type]===this.initiated){this.options.preventDefault&&!a.preventDefaultException(e.target,this.options.preventDefaultException)&&e.preventDefault();var t,n,o=(e.changedTouches?e.changedTouches[0]:e,a.getTime()-this.startTime),s=i.round(this.x),r=i.round(this.y),l=i.abs(s-this.startX),c=i.abs(r-this.startY),u=0,m="";if(this.isInTransition=0,this.initiated=0,this.endTime=a.getTime(),!this.resetPosition(this.options.bounceTime))return this.scrollTo(s,r),this.moved?this._events.flick&&200>o&&100>l&&100>c?void this._execEvent("flick"):(this.options.momentum&&300>o&&(t=this.hasHorizontalScroll?a.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:s,duration:0},n=this.hasVerticalScroll?a.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:r,duration:0},s=t.destination,r=n.destination,u=i.max(t.duration,n.duration),this.isInTransition=1),s!=this.x||r!=this.y?((s>0||s<this.maxScrollX||r>0||r<this.maxScrollY)&&(m=a.ease.quadratic),void this.scrollTo(s,r,u,m)):void this._execEvent("scrollEnd")):(this.options.tap&&a.tap(e,this.options.tap),this.options.click&&a.click(e),void this._execEvent("scrollCancel"))}},_resize:function(){var e=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,i=this.y;return e=e||0,!this.hasHorizontalScroll||this.x>0?t=0:this.x<this.maxScrollX&&(t=this.maxScrollX),!this.hasVerticalScroll||this.y>0?i=0:this.y<this.maxScrollY&&(i=this.maxScrollY),t==this.x&&i==this.y?!1:(this.scrollTo(t,i,e,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=a.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)},off:function(e,t){if(this._events[e]){var i=this._events[e].indexOf(t);i>-1&&this._events[e].splice(i,1)}},_execEvent:function(e){if(this._events[e]){var t=0,i=this._events[e].length;if(i)for(;i>t;t++)this._events[e][t].apply(this,[].slice.call(arguments,1))}},scrollBy:function(e,t,i,n){e=this.x+e,t=this.y+t,i=i||0,this.scrollTo(e,t,i,n)},scrollTo:function(e,t,i,n){n=n||a.ease.circular,this.isInTransition=this.options.useTransition&&i>0,!i||this.options.useTransition&&n.style?(this._transitionTimingFunction(n.style),this._transitionTime(i),this._translate(e,t)):this._animate(e,t,i,n.fn)},scrollToElement:function(e,t,n,o,s){if(e=e.nodeType?e:this.scroller.querySelector(e)){var r=a.offset(e);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,n===!0&&(n=i.round(e.offsetWidth/2-this.wrapper.offsetWidth/2)),o===!0&&(o=i.round(e.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=n||0,r.top-=o||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,t=void 0===t||null===t||"auto"===t?i.max(i.abs(this.x-r.left),i.abs(this.y-r.top)):t,this.scrollTo(r.left,r.top,t,s)}},_transitionTime:function(e){e=e||0,this.scrollerStyle[a.style.transitionDuration]=e+"ms",!e&&a.isBadAndroid&&(this.scrollerStyle[a.style.transitionDuration]="0.001s")},_transitionTimingFunction:function(e){this.scrollerStyle[a.style.transitionTimingFunction]=e},_translate:function(e,t){this.options.useTransform?this.scrollerStyle[a.style.transform]="translate("+e+"px,"+t+"px)"+this.translateZ:(e=i.round(e),t=i.round(t),this.scrollerStyle.left=e+"px",this.scrollerStyle.top=t+"px"),this.x=e,this.y=t},_initEvents:function(t){var i=t?a.removeEvent:a.addEvent,n=this.options.bindToWrapper?this.wrapper:e;i(e,"orientationchange",this),i(e,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(n,"mousemove",this),i(n,"mousecancel",this),i(n,"mouseup",this)),a.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,a.prefixPointerEvent("pointerdown"),this),i(n,a.prefixPointerEvent("pointermove"),this),i(n,a.prefixPointerEvent("pointercancel"),this),i(n,a.prefixPointerEvent("pointerup"),this)),a.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(n,"touchmove",this),i(n,"touchcancel",this),i(n,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,n=e.getComputedStyle(this.scroller,null);return this.options.useTransform?(n=n[a.style.transform].split(")")[0].split(", "),t=+(n[12]||n[4]),i=+(n[13]||n[5])):(t=+n.left.replace(/[^-\d.]/g,""),i=+n.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_animate:function(e,t,i,n){function s(){var h,d,p,b=a.getTime();return b>=m?(r.isAnimating=!1,r._translate(e,t),void(r.resetPosition(r.options.bounceTime)||r._execEvent("scrollEnd"))):(b=(b-u)/i,p=n(b),h=(e-l)*p+l,d=(t-c)*p+c,r._translate(h,d),void(r.isAnimating&&o(s)))}var r=this,l=this.x,c=this.y,u=a.getTime(),m=u+i;this.isAnimating=!0,s()},handleEvent:function(e){switch(e.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e);break;case"click":e._constructed||(e.preventDefault(),e.stopPropagation())}}},n.utils=a,"undefined"!=typeof module&&module.exports?module.exports=n:e.IScroll=n}(window,document,Math);var ZUL=new function(){function e(){var t="zul-bar-stylesheet";if(!document.getElementById(t)){var i=te.scriptLocation+"zul.css";if((!ie.hasOwnProperty("loadStylesSynchronously")||ie.loadStylesSynchronously)&&/in/.test(document.readyState))return void document.write('<link rel="stylesheet" type="text/css" href="'+i+'" id="'+t+'">');var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=i,n.id=t,document.getElementsByTagName("head")[0].appendChild(n)}e=function(){}}function t(){if(!document.body)return void setTimeout(t,5);ne.bar&&(ne.barMobile=null,ne.bar.parentElement.removeChild(ne.bar)),ne.bar=document.createElement("div"),ne.bar.id=ne.bar.className="zul-bar",ne.bar.setAttribute("data-mobile","false");var e=!1;"function"==typeof ie.mobileLoadCheck?ie.mobileLoadCheck()&&(e=!0):ie.mobileLoadCheck&&(e=!0),k(e),ne.barInner=document.createElement("div"),ne.barInner.id=ne.barInner.className="zul-bar-inner",u(ne.barInner),p(ne.barInner),ne.bar.appendChild(ne.barInner),document.body.insertBefore(ne.bar,document.body.firstChild),document.body.className+=" has-zul-bar"+(ie.bodyIsRelative?" zul-bar-relative-to-body":""),i(),C(),"function"==typeof ie.onCreateBar&&ie.onCreateBar()}function i(){var e=!1;switch(typeof ie.mobileWidthCheck){case"function":e=ie.mobileWidthCheck();break;case"number":e=K()<ie.mobileWidthCheck;break;case"undefined":if(!ie.mobileOverlapCheck)return;break;default:e=ie.mobileWidthCheck}!e&&ie.mobileOverlapCheck&&document.getElementById("zul-bar-sites-list-cover").offsetWidth+document.getElementById("zul-bar-user").offsetWidth+10>K()&&(e=!0),k(e)}function n(){ne.barMobile||(ne.barMobile=document.createElement("div"),ne.barMobile.id=ne.barMobile.className="zul-bar-mobile",ne.barMobile.className+=" zul-bar-mobile-top-menu",ne.barMobile.setAttribute("data-tier","0"),a(ne.barMobile),o(ne.barMobile),s(ne.barMobile),ne.bar.appendChild(ne.barMobile),"function"==typeof ie.onCreateMobileBar&&ie.onCreateMobileBar())}function o(e){ne.mobileBarContent&&(ne.mobileBarContent.parentNode.removeChild(ne.mobileBarContent),ne.mobileBarContent=null);var t=function(){ne.mobileBarContent||(ne.mobileBarContent=document.createElement("div"),ne.mobileBarContent.id=ne.mobileBarContent.className="zul-bar-mobile-content")},i=F(),n=W();n.mobileBarPre&&(t(),T(ne.mobileBarContent,n.mobileBarPre)),i.mobileBarPre&&(t(),T(ne.mobileBarContent,i.mobileBarPre,!0)),n.mobileBarContent&&(t(),T(ne.mobileBarContent,n.mobileBarContent)),i.mobileBarPost&&(t(),T(ne.mobileBarContent,i.mobileBarPost,!0)),n.mobileBarPost&&(t(),T(ne.mobileBarContent,n.mobileBarPost)),ne.mobileBarContent&&e.appendChild(ne.mobileBarContent)}function a(e){ne.mobileMenuButton&&ne.mobileMenuButton.parentNode.removeChild(ne.mobileMenuButton),ne.mobileMenuButton=document.createElement("div"),ne.mobileMenuButton.id=ne.mobileMenuButton.className="zul-bar-mobile-menu-button",ne.mobileMenuButtonLink=document.createElement("a"),$(ne.mobileMenuButtonLink,"click",H),ne.mobileMenuButton.appendChild(ne.mobileMenuButtonLink),e.appendChild(ne.mobileMenuButton)}function s(e){ne.mobileMenu&&ne.mobileMenu.parentNode.removeChild(ne.mobileMenu),ne.mobileMenu=document.createElement("div"),ne.mobileMenu.id=ne.mobileMenu.className="zul-bar-mobile-menu",ne.mobileMenuList=r(),b(ne.mobileMenuList.firstChild),ne.mobileMenu.appendChild(ne.mobileMenuList),e.appendChild(ne.mobileMenu),w()}function r(e,t){var i=document.createElement("div");i.className="zul-bar-mobile-menu-list-wrapper",i.id=i.className+(e?"-"+e:""),i.setAttribute("data-tier",t||0),i.style.left=Z(t?1:0);var n=document.createElement("ul");return n.className="zul-bar-mobile-menu-list",n.id=n.className+(e?"-"+e:""),i.appendChild(n),i}function l(){var e=document.createElement("li");return e.className="zul-bar-mobile-row",e}function c(e){oe.submenuCount++;var t=r(oe.submenuCount,1);T(t.firstChild,e,!0),ne.mobileMenu.appendChild(t),E(!0)}function u(e){ne.sitesDropown&&ne.sitesDropown.parentNode.removeChild(ne.sitesDropown),ne.sitesDropown=document.createElement("div"),ne.sitesDropown.id=ne.sitesDropown.className="zul-bar-sites",ne.zamLogo=document.createElement("a"),ne.zamLogo.id=ne.zamLogo.className="zul-bar-zam-logo",("boolean"!=typeof te.smallZamLogo||te.smallZamLogo)&&(ne.sitesDropown.className+=" zul-bar-zam-logo-small"),ne.zamLogo.href="http://www.zam.com/",ne.zamLogo.title="The world's largest MMO gaming network",ne.sitesDropown.appendChild(ne.zamLogo),ne.dropdownCover=document.createElement("div"),ne.dropdownCover.id=ne.dropdownCover.className="zul-bar-sites-list-cover",ne.sitesDropown.appendChild(ne.dropdownCover),m(ne.sitesDropown),e.appendChild(ne.sitesDropown)}function m(e){var t=document.createElement("ul");t.id=t.className="zul-bar-sites-list",$(ne.sitesDropown,"mouseover",function(){oe.mouseOver=!0,oe.timers.menuOut?(ee("menuOver"),ee("menuOut"),ee("menuOutPost"),P()):oe.timers.menuOver=setTimeout(function(){P()},te.menuShowDelay)}),$(ne.sitesDropown,"mouseout",function(){oe.mouseOver=!1,oe.timers.menuOut=setTimeout(function(){I()},te.menuHideDelay)}),h(t,"Featured Sites","featured");for(var i,n=0;i=te.featuredSites[n];n++){var o=Y(i);d(t,o)}if(!te.featuredSites.indexOf)return void e.appendChild(t);var a=document.createElement("li");a.id=a.className="zul-bar-sites-extra";var s=document.createElement("div");s.id=s.className="zul-bar-sites-extra-placeholder",s.innerHTML="<span>View All <b>ZAM Network</b> Sites</span>",$(s,"mousedown",function(){return!1}),$(s,"click",function(){var e=document.getElementById("zul-bar-sites-extra");e.className+=" show",oe.timers.menuExpand=setTimeout(function(){e.className+=" animate",setTimeout(function(){oe.timers.menuExpandComplete=e.className+=" animate-complete"},150)},1)}),a.appendChild(s);var r=document.createElement("ul");h(r,"More Sites","more");for(var l=0;o=te.sites[l];l++)-1==te.featuredSites.indexOf(o.id)&&d(r,o);a.appendChild(r),t.appendChild(a),e.appendChild(t)}function h(e,t,i){var n=document.createElement("li");n.className="zul-bar-sites-list-heading",i&&(n.id=n.className+"-"+i),n.innerHTML=t,e.appendChild(n)}function d(e,t){var i=document.createElement("a");i.id=i.className="zul-bar-sites-list-"+t.id,t.title&&(i.title=t.title),i.href="http://"+t.domain+"/",i.innerHTML=t.name,i.style.backgroundImage="url("+te.scriptLocation+"icons/sites/"+t.id+".png)";var n=document.createElement("li");n.className="zul-bar-sites-list-item";var o="zul-bar-site-"+t.id;n.className+=" "+o,n.id=o,n.appendChild(i),e.appendChild(n)}function p(e){ne.userArea&&ne.userArea.parentNode.removeChild(ne.userArea),ne.userArea=document.createElement("div"),ne.userArea.id=ne.userArea.className="zul-bar-user";var t=F();t.name&&(ne.userArea.className+=" zul-bar-user-"+t.name),f(ne.userArea,!1),e.appendChild(ne.userArea)}function b(e){f(e,!0)}function f(e,t){var i=F(),n=W();T(e,n.pre,t),T(e,i.pre,t),T(e,n.content,t),T(e,i.post,t),T(e,n.post,t)}function v(e,t,i){var n=document.createElement("form");n.id="zul-bar-form-"+t.name,n.className="zul-bar-form "+n.className,"function"==typeof t.action?n.action=t.action(e,ie,i,t):n.action=t.action||"/","function"==typeof n.method?n.method=t.method(e,ie,i,t):n.method=t.method||"post";for(var o,a=0;o=t.fields[a];a++)y(n,o,i,t);e.appendChild(n)}function y(e,t,i,n){var o=!1,a=!1,s="input",r={};switch(t.type){case"text":r.type="text","function"==typeof t.label?r.placeholder=t.label(e,ie,i,t):t.label?r.placeholder=t.label:"function"==typeof t.placeholder?r.placeholder=t.placeholder(e,ie,i,t):t.placeholder&&(r.placeholder=t.placeholder),"function"==typeof t.value?r.value=t.value(e,ie,i,t):t.value&&(r.value=t.value);break;case"password":r.type="password","function"==typeof t.label?r.placeholder=t.label(e,ie,i,t):t.label?r.placeholder=t.label:"function"==typeof t.placeholder?r.placeholder=t.placeholder(e,ie,i,t):t.placeholder&&(r.placeholder=t.placeholder),"function"==typeof t.value?r.value=t.value(e,ie,i,t):t.value&&(r.value=t.value);break;case"checkbox":r.type="checkbox",a="function"==typeof t.label?t.label(e,ie,i,t):t.label,"function"==typeof t.checked?r.checked=t.value(e,ie,i,t):t.checked&&(r.checked="checked");break;case"hidden":s="hidden","function"==typeof t.value?r.value=t.value(e,ie,i,t):r.value=t.value;break;case"button":s="button","function"==typeof t.typeHTML?r.type=t.typeHTML(e,ie,i,t):t.typeHTML?r.type=t.typeHTML:r.type="button","function"==typeof t.label?r.innerHTML=t.label(e,ie,i,t):r.innerHTML=t.label;break;case"link":return M(e,t,!0,i);default:return alert("Invalid element type passed to ZUL bar: "+t.type),!1}for(var l,c=["click","mouseover","mouseout","change","keyup","keydown","focus","blur"],u=["name","innerHTML"].concat(c),m=0;l=u[m];m++)t.hasOwnProperty(l)&&(["name","innerHTML"].indexOf(l)>-1&&"function"==typeof t[l]?r[l]=t[l](e,ie,i,t):r[l]=t[l]);r.id="zul-bar-form-"+n.name+"-"+t.name,r.className="zul-bar-form-"+t.type,"function"==typeof t.className?r.className+=" "+t.className(e,ie,i,t):t.className&&(r.className+=" "+t.className);var h=document.createElement(s);for(var d in r)r.hasOwnProperty(d)&&(c.indexOf(d)>-1&&"function"==typeof r[d]?$(h,d,r[d]):h[d]=r[d]);if(o){var p=document.createElement("label");p.id=p.className=r.id+"-prelabel",p.className="zul-bar-form-prelabel zul-bar-form-"+t.type+"-prelabel "+p.className,p.htmlFor=h.id,p.innerHTML=o,$(p,"mousedown",function(){return!1}),e.appendChild(p)}if(e.appendChild(h),a){var b=document.createElement("label");b.id=b.className=r.id+"-postlabel",b.className="zul-bar-form-postlabel zul-bar-form-"+t.type+"-postlabel "+b.className,b.htmlFor=h.id,b.innerHTML=a,$(b,"mousedown",function(){return!1}),e.appendChild(b)}return!0}function g(e,t,i){for(var n,o=[],a=0;n=t[a];a++)if("concatenation"==n.type){var s=n.content(e,ie,i);s&&(o=o.concat(s))}else o.push(n);return o}function T(e,t,i){if(t instanceof Array&&t.length){t=g(e,t,i);for(var n,o=0;n=t[o];o++)if("function"!=typeof n.condition||n.condition(e,ie,i))if(i)switch(n.type){case"link":var a=l();M(a,n,!1,i),e.appendChild(a);break;case"form":var a=l();v(a,n,i),e.appendChild(a);break;case"custom":if("function"==typeof n.custom){var a=l();n.custom(a,ie,i),e.appendChild(a)}break;case"sites":var a=l();M(a,q(n),!1,i),e.appendChild(a)}else switch(n.type){case"link":M(e,n,!1,i);break;case"form":v(e,n,i);break;case"custom":"function"==typeof n.custom&&n.custom(e,ie,i)}}}function M(e,t,i,n){var o=document.createElement("a");if(o.className="zul-bar-"+(n?"mobile":"user")+"-item-"+(i?"form-":"")+t.name,"function"==typeof t.id){var a=t.id(e,ie,n,t);a&&(o.id=a)}else t.id&&(o.id=V(t.id));if("function"==typeof t.innerHTML?o.innerHTML=t.innerHTML(e,ie,n,t):t.innerHTML?o.innerHTML=V(t.innerHTML):"function"==typeof t.text?o.appendChild(document.createTextNode(t.text(e,ie,n,t))):t.text&&o.appendChild(document.createTextNode(V(t.text))),"function"==typeof t.href){var s=t.href(e,ie,n,t);s&&(o.href=s)}else t.href&&(o.href=V(t.href));"function"==typeof t.heading?t.heading(e,ie,n,t)&&(o.className+=" zul-bar-"+(n?"mobile":"user")+"-heading"):t.heading&&(o.className+=" zul-bar-"+(n?"mobile":"user")+"-heading"),"function"==typeof ie.mobileIconSpacing?ie.mobileIconSpacing(e,ie,n,t)&&(o.className+=" zul-bar-icon-spacing"):ie.mobileIconSpacing&&(o.className+=" zul-bar-icon-spacing");var r=!1;if(t.checked)switch(typeof t.checked){case"function":t.checked(e,ie,n,t)&&(o.className+=" zul-bar-checked",r=!0);break;case"string":location.href.match(t.checked)&&(o.className+=" zul-bar-checked",r=!0);break;default:o.className+=" zul-bar-checked",r=!0}if(!r){if(t.imageIcon){"function"==typeof t.imageIcon&&(t.imageIcon=t.imageIcon(e,ie,n,t));var l;"object"!=typeof t.imageIcon?l=t.imageIcon:!n&&t.imageIcon.desktop||!t.imageIcon.universal&&t.imageIcon.enlargeForMobile?l=t.imageIcon.desktop:n&&t.imageIcon.mobile?l=t.imageIcon.mobile:t.imageIcon.universal&&(l=t.imageIcon.universal),l&&(o.style.backgroundImage="url("+l+")",o.className+=" zul-bar-has-image-icon"),n&&t.imageIcon.enlargeForMobile&&(o.className+=" zul-bar-enlarge-image-icon")}var c=!1;if("function"==typeof t.fontIcon){var u=t.fontIcon(e,ie,n,t);u&&(c=u)}else t.fontIcon&&(c=t.fontIcon);if(c){o.className+=" zul-bar-has-fa";var m=document.createElement("i");m.className="fa fa-fw fa-"+c,o.insertBefore(m,o.firstChild)}}if("function"==typeof t.className){var h=t.className(e,ie,n,t);h&&(o.className+=" "+h)}else t.className&&(o.className+=" "+t.className);for(var d,p=!1,b=0;d=["click","mouseover","mouseout"][b];b++)t[d]&&("tap"==d||n&&"click"==d&&(!t.hasOwnProperty("tap")||"boolean"==typeof t.tap&&t.tap)?($(o,"tap",function(e,t){O(this),setTimeout(function(){e.call(this,t)},1)}.bind(o,t[d])),p=!0):n&&"click"==d?$(o,d,function(e,t){O(this),setTimeout(function(){e.call(this,t)},1)}.bind(o,t[d])):$(o,d,t[d]));if(n&&!p&&(!t.hasOwnProperty("tap")||"boolean"==typeof t.tap&&t.tap)&&"string"==typeof t.href&&"#"!=t.href.charAt(0)&&"javascript:"!=t.href.substring(0,11)&&($(o,"tap",function(e){var t=e.target;O(t),setTimeout(function(){window.location=t.href},1)}),p=!0),p&&(o.className+=" has-tap-event"),e.appendChild(o),n&&t.menu&&t.menu.mobile){"function"==typeof t.menu.mobile&&(t.menu.mobile=t.menu.mobile());var f;if("function"==typeof t.mobileMenuText?f=t.mobileMenuText(ne.mobileMenuBackTitleText,ie,n,t):t.mobileMenuText?f=V(t.mobileMenuText):"function"==typeof t.innerHTML?f=t.innerHTML(ne.mobileMenuBackTitleText,ie,n,t):t.innerHTML?f=t.innerHTML:"function"==typeof t.text?f=J(t.text(ne.mobileMenuBackTitleText,ie,n,t)):t.text&&(f=J(t.text)),p){e.className+=" zul-mobile-menu-action-with-submenu";var v=document.createElement("a");v.className="zul-mobile-menu-submenu-arrow has-tap-event",$(v,"tap",A.bind(v,f,t.menu.mobile)),e.appendChild(v)}else e.className+=" zul-mobile-menu-has-submenu",o.className+=" has-tap-event",$(o,"tap",A.bind(o,f,t.menu.mobile))}}function w(){ne.mobileMenuBackRow&&ne.mobileMenuBackRow.parentNode.removeChild(ne.mobileMenuBackRow),ne.mobileMenuBackRow=document.createElement("div"),ne.mobileMenuBackRow.id=ne.mobileMenuBackRow.className="zul-bar-mobile-menu-back-row",ne.mobileMenuBackButton=document.createElement("a"),ne.mobileMenuBackButton.innerHTML=ie.mobileBackText||"Back",ne.mobileMenuBackButton.id=ne.mobileMenuBackButton.className="zul-bar-mobile-menu-back-button",ne.mobileMenuBackButton.onclick=X,ne.mobileMenuBackRow.appendChild(ne.mobileMenuBackButton),ne.mobileMenuBackTitle=document.createElement("div"),ne.mobileMenuBackTitle.id=ne.mobileMenuBackTitle.className="zul-bar-mobile-menu-back-title",ne.mobileMenuBackTitleText=document.createElement("span"),ne.mobileMenuBackTitleText.id=ne.mobileMenuBackTitleText.className="zul-bar-mobile-menu-back-title-text",ne.mobileMenuBackTitle.appendChild(ne.mobileMenuBackTitleText),ne.mobileMenuBackRow.appendChild(ne.mobileMenuBackTitle),ie.mobileHeader&&(ne.mobileMenuBackHeader=document.createElement("ul"),ne.mobileMenuBackHeader.id="zul-bar-mobile-menu-back-header",ne.mobileMenuBackHeader.className=ne.mobileMenuBackHeader.id+" zul-bar-mobile-menu-list",T(ne.mobileMenuBackHeader,ie.mobileHeader,!0),ne.mobileMenuBackRow.appendChild(ne.mobileMenuBackHeader),ne.barMobile.className+=" zul-bar-mobile-menu-has-mobile-header"),ne.barMobile.appendChild(ne.mobileMenuBackRow)}function k(e){e?(n(),oe.mobile=!0,ne.bar.setAttribute("data-mobile","true"),document.body.className+=" has-mobile-zul-bar","function"==typeof ie.mobileIncreasedSize?ie.mobileIncreasedSize()&&(document.body.className+=" enlarge-mobile-zul-bar"):ie.mobileIncreasedSize&&(document.body.className+=" enlarge-mobile-zul-bar")):(oe.mobile=!1,ne.bar.setAttribute("data-mobile","false"),document.body.className=document.body.className.replace(/ *has-mobile-zul-bar\b/g,"").replace(/ *enlarge-mobile-zul-bar\b/g,""))}function N(e,t){var i;if(document.querySelectorAll){if(i=document.querySelectorAll((t||"#zul-bar-mobile-menu-list")+" .zul-bar-mobile-menu-active"))for(var n,o=0;n=i[o];o++)n.className=n.className.replace(/ *zul-bar-mobile-menu-active\b/g,"")}else if(i=(e||ne.mobileMenuList).getElementsByTagName("a"))for(var n,o=0;n=i[o];o++)n.className&&n.className.indexOf("zul-bar-mobile-menu-active")&&(n.className=n.className.replace(/ *zul-bar-mobile-menu-active\b/g,""))}function E(e){var t=e?-1:1;if(oe.submenuTier+t>0)return!1;B(),oe.submenuTier=oe.submenuTier+t,e||oe.submenuTiers.pop(),z(),ne.barMobile.setAttribute("data-tier",oe.submenuTier),0==oe.submenuTier?ne.barMobile.className+=" zul-bar-mobile-top-menu":ne.barMobile.className=ne.barMobile.className.replace(/ *zul-bar-mobile-top-menu\b/g,"");for(var i,n=ne.mobileMenu.childNodes,o=[],a=0;i=n[a];a++){var s=parseInt(i.getAttribute("data-tier"))+t;s>0?(i.setAttribute("data-tier","1"),i.style.left=Z(oe.submenuTier),setTimeout(function(e){e.parentNode.removeChild(e)}.bind(null,i),251)):(0==s&&(i.style.height="100%"),o.push(i),setTimeout(function(e,t){e.setAttribute("data-tier",t),e.style.left=Z(oe.submenuTier)}.bind(null,i,s),51))}return e||N(n[n.length-2],"#"+n[n.length-2].id),Q(ne.mobileMenu,250),setTimeout(function(e){for(var t,i=0;t=e[i];i++)i!=e.length-1&&(t.style.height="10px");L(e[e.length-1])}.bind(null,o),251),!0}function x(){if(ne.mobileMenu){for(var e,t=ne.mobileMenu.childNodes,i=0;e=t[i];i++)i>0?e.parentNode.removeChild(e):(e.setAttribute("data-tier","0"),e.style.left=Z(0));oe.submenuTiers=[],oe.submenuTier=0,ne.barMobile.setAttribute("data-tier","0"),ne.barMobile.className+=" zul-bar-mobile-top-menu"}}function z(){var e=oe.submenuTiers[-1*oe.submenuTier-1];e&&(ne.mobileMenuBackTitleText.innerHTML=e)}function C(){$(window,"resize",i),C=function(){}}function S(){if(!oe.mobileScrollSetUp){var e=function(e){oe.mobileMenuShown&&(document.getElementById("zul-bar-mobile").contains(e.target)||e.preventDefault());
};$(document.body,"touchmove",e),$(document.body,"mousewheel",e),oe.mobileScrollSetUp=!0}}function B(){oe.iScroll&&(oe.iScroll.destroy(),oe.iScroll=null)}function L(e){B(),oe.iScroll=new IScroll(e,{mouseWheel:!0,tap:!0})}function P(){if(oe.mouseOver){ee("menuOver"),ee("menuOut"),ee("menuOutPost");var e=document.getElementById("zul-bar-sites");e.className+=" show",oe.timers.menuOverPost=setTimeout(function(){e.className+=" animate"},1)}}function I(){ee("menuOver"),ee("menuOut"),ee("menuOverPost");var e=document.getElementById("zul-bar-sites");e.className=e.className.replace(/ *animate\b/g,""),oe.timers.menuOutPost=setTimeout(function(){e.className=e.className.replace(/ *animate\b/g,""),e.className=e.className.replace(/ *show\b/g,""),ee("menuExpand"),ee("menuExpandComplete");var t=document.getElementById("zul-bar-sites-extra");t.className=t.className.replace(/ *animate-complete\b/g,""),t.className=t.className.replace(/ *animate\b/g,""),t.className=t.className.replace(/ *show\b/g,"")},151)}function H(){oe.mobileMenuShown?_():D()}function D(){ee("mobileMenuToggle"),ee("mobileMenuToggleCallback"),"function"==typeof ie.onShowMobileBarStart&&ie.onShowMobileBarStart();var e=document.getElementById("zul-bar-mobile-menu-list-wrapper");e.style.height="100%",ne.fade||(ne.fade=document.createElement("div"),ne.fade.id=ne.fade.className="zul-bar-fade",$(ne.fade,"click",H),ne.bar.appendChild(ne.fade)),document.body.className+=" zul-mobile-show-menu",oe.timers.mobileMenuToggle=setTimeout(function(){document.body.className+=" zul-mobile-animate-menu"},1),"function"==typeof ie.onShowMobileBarEnd&&(oe.timers.mobileMenuToggleCallback=setTimeout(function(){ie.onShowMobileBarEnd()},152)),S(),L(e),oe.mobileMenuShown=!0}function _(){ee("mobileMenuToggle"),ee("mobileMenuToggleCallback"),"function"==typeof ie.onHideMobileBarStart&&ie.onHideMobileBarStart(),B(),ne.fade&&(ne.fade.parentNode.removeChild(ne.fade),ne.fade=null);var e=document.body;e.className=e.className.replace(/ *zul-mobile-animate-menu\b/g,""),oe.timers.mobileMenuToggle=setTimeout(function(){e.className=e.className.replace(/ *zul-mobile-animate-menu\b/g,"").replace(/ *zul-mobile-show-menu\b/g,""),N(),x(),"function"==typeof ie.onHideMobileBarEnd&&ie.onHideMobileBarEnd()},251),oe.mobileMenuShown=!1,x()}function O(e){var t=G(e,"ul");N(t,"#"+t.id),e.className+=" zul-bar-mobile-menu-active"}function A(e,t){oe.submenuTiers.push(e),O(this),setTimeout(function(){c(t)},1)}function X(){E(!1)}function Y(e){for(var t,i=0;t=te.sites[i];i++)if(t.id==e)return t;return null}function F(){if(!ie.state)return{};var e={name:ie.state};return R(ie.states,e)}function W(){return ie.states&&ie.states&&ie.states.universal?ie.states.universal:{}}function R(e,t){if(e&&"object"==typeof e[t.name])for(var i in e[t.name])e[t.name].hasOwnProperty(i)&&(t[i]=e[t.name][i]);return t}function q(e){var t={type:"link",menu:{mobile:[]}};e.innerHTML?t.innerHTML=e.innerHTML:e.text?t.text=e.text:t.text="ZAM Sites";for(var i,n,o="boolean"==typeof e.enlargeForMobile?e.enlargeForMobile:!0,a=0;n=te.featuredSites[a];a++)i=Y(n),t.menu.mobile.push(U(i,o));t.menu.mobile.push({type:"link",name:"more-sites",text:"More Sites",heading:!0});for(var s=0;i=te.sites[s];s++)-1==te.featuredSites.indexOf(i.id)&&t.menu.mobile.push(U(i,o));return t}function U(e,t){return{type:"link",text:e.name,href:"http://"+e.domain+"/",title:e.title,imageIcon:{universal:te.scriptLocation+"icons/sites/"+e.id+".png",enlargeForMobile:t}}}function Z(e){return 100*parseInt(e)+"%"}function V(e){return e.indexOf("%")>-1?j(e,ie.user):e}function j(e,t){if(!t)return e;for(var i in t)t.hasOwnProperty(i)&&(e=e.replace("%"+i.toUpperCase()+"%",t[i]));return e}function K(){var e=window.getComputedStyle(document.body,null).getPropertyValue("padding-left")||0,t=window.getComputedStyle(document.body,null).getPropertyValue("padding-right")||0;return document.body.clientWidth+parseInt(e)+parseInt(t)}function $(e,t,i,n){e.addEventListener?e.addEventListener(t,i,n):e.attachEvent&&e.attachEvent("on"+t,i)}function Q(e,t){var i=e.scrollTop/(t/15),n=e.scrollLeft/(t/15),o=setInterval(function(){0!=e.scrollTop||0!=e.scrollLeft?(e.scrollTop=Math.max(0,e.scrollTop-i),e.scrollLeft=Math.max(0,e.scrollLeft-n)):clearInterval(o)},15)}function G(e,t){for(;e.parentNode;){if(e.parentNode.tagName==t.toUpperCase())return e.parentNode;e=e.parentNode}return null}function J(e){return ne.htmlEscaper||(ne.htmlEscaper=document.createElement("div")),ne.htmlEscaper.innerHTML="",ne.htmlEscaper.appendChild(document.createTextNode(e)),ne.htmlEscaper.innerHTML}function ee(e){clearTimeout(oe.timers[e]),oe.timers[e]=null}var te={scriptLocation:function(){var e=document.getElementsByTagName("script"),t=e[e.length-1].src.split("?")[0];return t.split("/").slice(0,-1).join("/")+"/"}(),menuShowDelay:333,menuHideDelay:333,featuredSites:["zam","wowhead","hearthhead","lolking","overking","dayzdb","destinydb"],sites:[{id:"zam",name:"Gaming News & Info",domain:"www.zam.com",title:"ZAM News"},{id:"dayzdb",name:"DayZDB",domain:"dayzdb.com"},{id:"destinydb",name:"DestinyDB",domain:"www.destinydb.com"},{id:"dotaoutpost",name:"Dota Outpost",domain:"www.dotaoutpost.com",title:"Dota 2 Trading"},{id:"esohead",name:"Esohead",domain:"www.esohead.com"},{id:"hearthhead",name:"Hearthhead",domain:"www.hearthhead.com"},{id:"lolking",name:"LolKing",domain:"www.lolking.net"},{id:"opshead",name:"Opshead",domain:"opshead.com",title:"Call of Duty News and Data"},{id:"overking",name:"OverKing",domain:"overking.com",title:"Overwatch News and Data"},{id:"tf2outpost",name:"TF2 Outpost",domain:"www.tf2outpost.com",title:"TF2, Dota 2, and Steam Trading"},{id:"wowhead",name:"Wowhead",domain:"www.wowhead.com"},{id:"xivdb",name:"XIVDB",domain:"www.xivdb.com"},{id:"eq",name:"EverQuest",domain:"everquest.allakhazam.com"},{id:"eq2",name:"EverQuest 2",domain:"eq2.zam.com"},{id:"ffxi",name:"Final Fantasy XI",domain:"ffxi.allakhazam.com"},{id:"ffxiv",name:"Final Fantasy XIV",domain:"ffxiv.zam.com"}]},ie=!1,ne={},oe={mobile:!1,mobileScrollSetUp:!1,mouseOver:!1,iScroll:null,submenuCount:0,submenuTier:0,submenuTiers:[],timers:{menuExpand:null,menuExpandComplete:null,menuOut:null,menuOutPost:null,menuOverPost:null,mobileMenuToggle:null}};this.setOptions=function(t){if("object"==typeof t){"object"!=typeof ie&&(ie={});for(var i in t)t.hasOwnProperty(i)&&(ie[i]=t[i]);e()}},this.closeMobileMenu=function(){_()},this.addToMenu=function(e,t,i){ie.states||(ie.states={}),ie.states.universal||(ie.states.universal={}),ie.states.universal.content||(ie.states.universal.content=[]),e instanceof Array?ie.states.universal.content=ie.states.universal.content.concat(e):"object"==typeof e&&ie.states.universal.content.push(e),ZUL.regenerateMenu(t,i)},this.regenerateMenu=function(e,t){_(),("boolean"!=typeof e||e)&&p(ne.barInner),ne.mobileMenu&&("boolean"!=typeof t||t)&&s(ne.barMobile)},this.init=function(e){"object"==typeof e&&ZUL.setOptions(e),t()}};