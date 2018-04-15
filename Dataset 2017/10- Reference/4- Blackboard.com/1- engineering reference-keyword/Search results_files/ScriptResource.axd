

/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

(function($) {
    window.initCarousels = function() {

	    // count to mark each element with a unique #
	    var carousel_count = 1;
        
        // for each carousel instance, we want to 
        // add a class to uniquely identify each by
        $(".module-carousel").each(function(){
        	
		    var $this = $(this),
				 this_length = $this.find("li").length;
				 
			if ( this_length > 1 ) {
			
				// set up unique class using the count 
				var carousel_class = "carousel" + carousel_count,
				    // add unique class to this carousel
				     $this_carousel = $this.addClass(carousel_class);
				     
			     // add unique calss to the next/prev buttons
			     $this.parent().find(".next").addClass("next" + carousel_count);
			     $this.parent().find(".prev").addClass("prev" + carousel_count);
	
			    // using the unique class call jCarouselLite
			    $this_carousel.jCarouselLite({
	        	    btnNext: ".next" + carousel_count,
	        	    btnPrev: ".prev" + carousel_count,
	        	    visible: 2
	    	    });

				if ( this_length == 2 ) {
        			$(".middleWidgetColumn .next" + carousel_count + ", .middleWidgetColumn .prev" + carousel_count).hide();
        		}

	    	    // +1 for next instance
	    	    carousel_count++;

        	} else {
        		
        		$this.parent().find(".next, .prev").hide();
        		
        	}
        	
        });

        $('.widget.photos .module-carousel a, .quickLinksModule.photos a').fancybox({
            "type": "image",
            "titlePosition" : "inside",
            "transitionIn" : "elastic",
            "transitionOut" : "none"
        });

        $('.widget.video .module-carousel a, .quickLinksModule.video a').fancybox({
            "type": "iframe",
            "titlePosition" : "inside",
            "transitionIn" : "elastic",
            "transitionOut" : "none",
            "width" : 600,
            "height" : 400
        });
        
    }
    
})(this.jQuery);

jQuery(function($) {
    if(typeof Blackboard == "undefined" || !("WidgetManager" in Blackboard)) {
        window.initCarousels();
    }
});



/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2009 M. Alsup
 * Version: 2.65 (07-APR-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Requires: jQuery v1.2.6 or later
 *
 * Originally based on the work of:
 *	1) Matt Oakes
 *	2) Torsten Baldes (http://medienfreunde.com/lab/innerfade/)
 *	3) Benjamin Sterling (http://www.benjaminsterling.com/experiments/jqShuffle/)
 */
;(function($){var ver="2.65";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function log(){if(window.console&&window.console.log){window.console.log("[cycle] "+Array.prototype.join.call(arguments," "));}}$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length==0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$(function(){$(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){options=handleArguments(this,options,arg2);if(options===false){return;}if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$(this);var $slides=options.slideExpr?$(options.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts=buildOptions($cont,$slides,els,options,o);if(opts===false){return;}if(opts.timeout||opts.continuous){this.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev);},opts.continuous?10:opts.timeout+(opts.delay||0));}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"stop":cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$(cont).removeData("cycle.opts");return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;if(arg2===true){options=$(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,1);}return false;default:options={fx:options};}}else{if(options.constructor==Number){var num=options;options=$(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];opts.after.unshift(function(){opts.busy=0;});if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,!opts.rev);});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=0;opts.startingSlide=opts.randomMap[0];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z=first?i>=first?els.length-(i-first):first-i:els.length-i;$(this).css("z-index",z);});$(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var i=0;i<els.length;i++){var $e=$(els[i]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth;}if(!h){h=e.offsetHeight;}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$(this);this.cycleH=(opts.fit&&opts.height)?opts.height:$el.height();this.cycleW=(opts.fit&&opts.width)?opts.width:$el.width();if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingOp=($.browser.opera&&this.cycleW==42&&this.cycleH==19&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);if(opts.cssFirst){$($slides[first]).css(opts.cssFirst);}if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}while((opts.timeout-opts.speed)<250){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){opts.nextSlide=opts.currSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length>1){opts.after[1].apply(e0,[e0,e0,opts,true]);}if(opts.next){$(opts.next).click(function(){return advance(opts,opts.rev?-1:1);});}if(opts.prev){$(opts.prev).click(function(){return advance(opts,opts.rev?1:-1);});}if(opts.pager){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(var i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];var tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){var tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(var i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}log("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager){$.fn.cycle.createPagerAnchor(els.length-1,s,$(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){$(els).stop(true,true);opts.busy=false;}if(opts.busy){return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}if(manual||!p.cyclePause){var fx=opts.fx;curr.cycleH=curr.cycleH||$(curr).height();curr.cycleW=curr.cycleW||$(curr).width();next.cycleH=next.cycleH||$(next).height();next.cycleW=next.cycleW||$(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};if(opts.nextSlide!=opts.currSlide){opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after);}else{$.fn.cycle.custom(curr,next,opts,after,manual&&opts.fastOnEvent);}}}opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{var roll=(opts.nextSlide+1)==els.length;opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}if(opts.pager){$.fn.cycle.updateActivePagerLink(opts.pager,opts.currSlide);}}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(curr,next,opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.rev);},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide){$(pager).find("a").removeClass("activeSlide").filter("a:eq("+currSlide+")").addClass("activeSlide");};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn(curr,next,opts,fwd);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,opts.rev?-1:1);};$.fn.cycle.prev=function(opts){advance(opts,opts.rev?1:-1);};function advance(opts,val){var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}if($.isFunction(opts.prevNextClick)){opts.prevNextClick(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,val>=0);return false;}function buildPager(els,opts){var $p=$(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});$.fn.cycle.updateActivePagerLink(opts.pager,opts.startingSlide);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a=($.isFunction(opts.pagerAnchorBuilder))?opts.pagerAnchorBuilder(i,el):'<a href="#">'+(i+1)+"</a>";if(!a){return;}var $a=$(a);if($a.parents("body").length==0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$(this).append($clone);arr.push($clone);});$a=$(arr);}else{$a.appendTo($p);}}$a.bind(opts.pagerEvent,function(){opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if($.isFunction(opts.pagerClick)){opts.pagerClick(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);return false;});if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$(opts.elements).not(curr).hide();opts.cssBefore.opacity=1;opts.cssBefore.display="block";if(w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,speedOverride){var $l=$(curr),$n=$(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,cb);};$l.animate(opts.animOut,speedOut,easeOut,function(){if(opts.cssAfter){$l.css(opts.cssAfter);}if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={fx:"fade",timeout:4000,timeoutFn:null,continuous:0,speed:1000,speedIn:null,speedOut:null,next:null,prev:null,prevNextClick:null,pager:null,pagerClick:null,pagerEvent:"click",pagerAnchorBuilder:null,before:null,after:null,end:null,easing:null,easeIn:null,easeOut:null,shuffle:null,animIn:null,animOut:null,cssBefore:null,cssAfter:null,fxFn:null,height:"auto",startingSlide:0,sync:1,random:0,fit:0,containerResize:1,pause:0,pauseOnPagerHover:0,autostop:0,autostopCount:0,delay:0,slideExpr:null,cleartype:!$.support.opacity,nowrap:0,fastOnEvent:0,randomizeEffects:1,rev:0,manualTrump:true,requeueOnImageNotLoaded:true,requeueTimeout:250};})(jQuery);

/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2008 M. Alsup
 * Version:	 2.52
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
;(function($){$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore={top:h,left:0};opts.cssFirst={top:0};opts.animIn={top:0};opts.animOut={top:-h};};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst={top:0};opts.cssBefore={top:-h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:0-w};};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst={left:0};opts.cssBefore={left:-w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst={left:0};opts.cssBefore={top:0};opts.animIn={left:0};opts.animOut={top:0};};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0};opts.animIn={top:0};opts.animOut={left:0};};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore={left:0,top:0,width:0};opts.animIn={width:"show"};opts.animOut={width:0};};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore={left:0,top:0,height:0};opts.animIn={height:"show"};opts.animOut={height:0};};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});opts.speed=opts.speed/2;opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(var i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(var i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){var $el=fwd?$(curr):$(next);$(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$(opts.els[i]).css("z-index",len-i+count);}}else{var z=$(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$(fwd?this:curr).hide();if(cb){cb();}});});};opts.cssBefore={display:"block",opacity:1,top:0,left:0};};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,height:0};opts.animIn={top:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst={top:0};opts.cssBefore={left:0,top:0,height:0};opts.animOut={height:0};};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore={top:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={top:0,left:0,width:0};opts.animIn={left:0};opts.animOut={width:0};};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};opts.animOut={width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2};});opts.cssFirst={top:0,left:0};opts.cssBefore={width:0,height:0};};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,left:0,width:next.cycleW,height:next.cycleH};});opts.cssBefore={width:0,height:0};opts.animOut={opacity:0};};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore={left:w,top:0};opts.animIn={left:0};opts.animOut={left:w};};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:0};opts.animIn={top:0};opts.animOut={top:h};};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore={top:h,left:w};opts.animIn={top:0,left:0};opts.animOut={top:h,left:w};};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:0};});opts.cssBefore={width:0,top:0};};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn={top:0,height:this.cycleH};opts.animOut={top:0};});opts.cssBefore={height:0,left:0};};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn={left:0,width:this.cycleW};opts.animOut={left:curr.cycleW/2,width:0};});opts.cssBefore={top:0,width:0};};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn={top:0,height:next.cycleH};opts.animOut={top:curr.cycleH/2,height:0};});opts.cssBefore={left:0,height:0};};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn={left:0,top:0};opts.animOut={opacity:1};opts.cssBefore={top:0,left:0};};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){opts.animOut={left:w*2,top:-h/2,opacity:0};}else{opts.animOut.opacity=0;}});opts.cssBefore={left:0,top:0};opts.animIn={left:0};};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var t=parseInt(h/2);var l=parseInt(w/2);clip="rect("+t+"px "+l+"px "+t+"px "+l+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$(curr),$next=$(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});opts.cssBefore={display:"block",opacity:1,top:0,left:0};opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){$.1g.1w=6(o){o=$.1f({r:n,x:n,N:n,17:q,J:n,L:1a,16:n,y:q,u:12,H:3,B:0,k:1,K:n,I:n},o||{});8 G.R(6(){p b=q,A=o.y?"15":"w",P=o.y?"t":"s";p c=$(G),9=$("9",c),E=$("10",9),W=E.Y(),v=o.H;7(o.u){9.1h(E.D(W-v-1+1).V()).1d(E.D(0,v).V());o.B+=v}p f=$("10",9),l=f.Y(),4=o.B;c.5("1c","H");f.5({U:"T",1b:o.y?"S":"w"});9.5({19:"0",18:"0",Q:"13","1v-1s-1r":"S","z-14":"1"});c.5({U:"T",Q:"13","z-14":"2",w:"1q"});p g=o.y?t(f):s(f);p h=g*l;p j=g*v;f.5({s:f.s(),t:f.t()});9.5(P,h+"C").5(A,-(4*g));c.5(P,j+"C");7(o.r)$(o.r).O(6(){8 m(4-o.k)});7(o.x)$(o.x).O(6(){8 m(4+o.k)});7(o.N)$.R(o.N,6(i,a){$(a).O(6(){8 m(o.u?o.H+i:i)})});7(o.17&&c.11)c.11(6(e,d){8 d>0?m(4-o.k):m(4+o.k)});7(o.J)1p(6(){m(4+o.k)},o.J+o.L);6 M(){8 f.D(4).D(0,v)};6 m(a){7(!b){7(o.K)o.K.Z(G,M());7(o.u){7(a<=o.B-v-1){9.5(A,-((l-(v*2))*g)+"C");4=a==o.B-v-1?l-(v*2)-1:l-(v*2)-o.k}F 7(a>=l-v+1){9.5(A,-((v)*g)+"C");4=a==l-v+1?v+1:v+o.k}F 4=a}F{7(a<0||a>l-v)8;F 4=a}b=12;9.1o(A=="w"?{w:-(4*g)}:{15:-(4*g)},o.L,o.16,6(){7(o.I)o.I.Z(G,M());b=q});7(!o.u){$(o.r+","+o.x).1n("X");$((4-o.k<0&&o.r)||(4+o.k>l-v&&o.x)||[]).1m("X")}}8 q}})};6 5(a,b){8 1l($.5(a[0],b))||0};6 s(a){8 a[0].1k+5(a,\'1j\')+5(a,\'1i\')};6 t(a){8 a[0].1t+5(a,\'1u\')+5(a,\'1e\')}})(1x);',62,96,'||||curr|css|function|if|return|ul|||||||||||scroll|itemLength|go|null||var|false|btnPrev|width|height|circular||left|btnNext|vertical||animCss|start|px|slice|tLi|else|this|visible|afterEnd|auto|beforeStart|speed|vis|btnGo|click|sizeCss|position|each|none|hidden|overflow|clone|tl|disabled|size|call|li|mousewheel|true|relative|index|top|easing|mouseWheel|padding|margin|200|float|visibility|append|marginBottom|extend|fn|prepend|marginRight|marginLeft|offsetWidth|parseInt|addClass|removeClass|animate|setInterval|0px|type|style|offsetHeight|marginTop|list|jCarouselLite|jQuery'.split('|'),0,{}))


$(document).ready(function() {

	//SHARE THIS PAGE
	var inputFocus = null;
	var shareTimeout;
	
	//Share this page events
	$('.share').hide();
	
	$('.ShareButton').click( function() {
		$('.share').fadeIn("slow");
		$(document).bind('mousedown', checkMouse);
	});
	    	
});


//helper methods

//close when click outside of element
var checkMouse = function(element)
{
        var element = $(element.target)[0];
        var observe = $('.shareWrap')[0];

        while(true)
        {
                if(element == observe)
                {
                        return true;
                }
                else if(element == document)
                {
                        return closeSharePage();
                }
                else
                {
                        element = $(element).parent()[0];
                }
        }

        return true;

};


function closeSharePage(){
	$('.share').fadeOut("slow");
}
/* jquery-ui.1.8.7.custom.min.js start */

/*!
* jQuery UI 1.8.7
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI
*/
(function (c, j) {
    function k(a) { return !c(a).parents().andSelf().filter(function () { return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this) }).length } c.ui = c.ui || {}; if (!c.ui.version) {
        c.extend(c.ui, { version: "1.8.7", keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91
        }
        }); c.fn.extend({ _focus: c.fn.focus, focus: function (a, b) { return typeof a === "number" ? this.each(function () { var d = this; setTimeout(function () { c(d).focus(); b && b.call(d) }, a) }) : this._focus.apply(this, arguments) }, scrollParent: function () {
            var a; a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(c.curCSS(this,
"position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function () { return /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1)) }).eq(0); return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
        }, zIndex: function (a) {
            if (a !== j) return this.css("zIndex", a); if (this.length) {
                a = c(this[0]); for (var b; a.length && a[0] !== document; ) {
                    b = a.css("position");
                    if (b === "absolute" || b === "relative" || b === "fixed") { b = parseInt(a.css("zIndex"), 10); if (!isNaN(b) && b !== 0) return b } a = a.parent()
                } 
            } return 0
        }, disableSelection: function () { return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) { a.preventDefault() }) }, enableSelection: function () { return this.unbind(".ui-disableSelection") } 
        }); c.each(["Width", "Height"], function (a, b) {
            function d(f, g, l, m) {
                c.each(e, function () {
                    g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0; if (l) g -= parseFloat(c.curCSS(f,
"border" + this + "Width", true)) || 0; if (m) g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
                }); return g
            } var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], h = b.toLowerCase(), i = { innerWidth: c.fn.innerWidth, innerHeight: c.fn.innerHeight, outerWidth: c.fn.outerWidth, outerHeight: c.fn.outerHeight }; c.fn["inner" + b] = function (f) { if (f === j) return i["inner" + b].call(this); return this.each(function () { c(this).css(h, d(this, f) + "px") }) }; c.fn["outer" + b] = function (f, g) {
                if (typeof f !== "number") return i["outer" + b].call(this, f); return this.each(function () {
                    c(this).css(h,
d(this, f, true, g) + "px")
                })
            } 
        }); c.extend(c.expr[":"], { data: function (a, b, d) { return !!c.data(a, d[3]) }, focusable: function (a) { var b = a.nodeName.toLowerCase(), d = c.attr(a, "tabindex"); if ("area" === b) { b = a.parentNode; d = b.name; if (!a.href || !d || b.nodeName.toLowerCase() !== "map") return false; a = c("img[usemap=#" + d + "]")[0]; return !!a && k(a) } return (/input|select|textarea|button|object/.test(b) ? !a.disabled : "a" == b ? a.href || !isNaN(d) : !isNaN(d)) && k(a) }, tabbable: function (a) { var b = c.attr(a, "tabindex"); return (isNaN(b) || b >= 0) && c(a).is(":focusable") } });
        c(function () { var a = document.body, b = a.appendChild(b = document.createElement("div")); c.extend(b.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }); c.support.minHeight = b.offsetHeight === 100; c.support.selectstart = "onselectstart" in b; a.removeChild(b).style.display = "none" }); c.extend(c.ui, { plugin: { add: function (a, b, d) { a = c.ui[a].prototype; for (var e in d) { a.plugins[e] = a.plugins[e] || []; a.plugins[e].push([b, d[e]]) } }, call: function (a, b, d) {
            if ((b = a.plugins[b]) && a.element[0].parentNode) for (var e = 0; e < b.length; e++) a.options[b[e][0]] &&
b[e][1].apply(a.element, d)
        } 
        }, contains: function (a, b) { return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b) }, hasScroll: function (a, b) { if (c(a).css("overflow") === "hidden") return false; b = b && b === "left" ? "scrollLeft" : "scrollTop"; var d = false; if (a[b] > 0) return true; a[b] = 1; d = a[b] > 0; a[b] = 0; return d }, isOverAxis: function (a, b, d) { return a > b && a < b + d }, isOver: function (a, b, d, e, h, i) { return c.ui.isOverAxis(a, d, h) && c.ui.isOverAxis(b, e, i) } 
        })
    } 
})(jQuery);
; /*!
 * jQuery UI Widget 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (b, j) {
    if (b.cleanData) { var k = b.cleanData; b.cleanData = function (a) { for (var c = 0, d; (d = a[c]) != null; c++) b(d).triggerHandler("remove"); k(a) } } else { var l = b.fn.remove; b.fn.remove = function (a, c) { return this.each(function () { if (!c) if (!a || b.filter(a, [this]).length) b("*", this).add([this]).each(function () { b(this).triggerHandler("remove") }); return l.call(b(this), a, c) }) } } b.widget = function (a, c, d) {
        var e = a.split(".")[0], f; a = a.split(".")[1]; f = e + "-" + a; if (!d) { d = c; c = b.Widget } b.expr[":"][f] = function (h) {
            return !!b.data(h,
a)
        }; b[e] = b[e] || {}; b[e][a] = function (h, g) { arguments.length && this._createWidget(h, g) }; c = new c; c.options = b.extend(true, {}, c.options); b[e][a].prototype = b.extend(true, c, { namespace: e, widgetName: a, widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a, widgetBaseClass: f }, d); b.widget.bridge(a, b[e][a])
    }; b.widget.bridge = function (a, c) {
        b.fn[a] = function (d) {
            var e = typeof d === "string", f = Array.prototype.slice.call(arguments, 1), h = this; d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d; if (e && d.charAt(0) === "_") return h;
            e ? this.each(function () { var g = b.data(this, a), i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g; if (i !== g && i !== j) { h = i; return false } }) : this.each(function () { var g = b.data(this, a); g ? g.option(d || {})._init() : b.data(this, a, new c(d, this)) }); return h
        } 
    }; b.Widget = function (a, c) { arguments.length && this._createWidget(a, c) }; b.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: false }, _createWidget: function (a, c) {
        b.data(c, this.widgetName, this); this.element = b(c); this.options = b.extend(true, {}, this.options,
this._getCreateOptions(), a); var d = this; this.element.bind("remove." + this.widgetName, function () { d.destroy() }); this._create(); this._trigger("create"); this._init()
    }, _getCreateOptions: function () { return b.metadata && b.metadata.get(this.element[0])[this.widgetName] }, _create: function () { }, _init: function () { }, destroy: function () { this.element.unbind("." + this.widgetName).removeData(this.widgetName); this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled") },
        widget: function () { return this.element }, option: function (a, c) { var d = a; if (arguments.length === 0) return b.extend({}, this.options); if (typeof a === "string") { if (c === j) return this.options[a]; d = {}; d[a] = c } this._setOptions(d); return this }, _setOptions: function (a) { var c = this; b.each(a, function (d, e) { c._setOption(d, e) }); return this }, _setOption: function (a, c) { this.options[a] = c; if (a === "disabled") this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c); return this },
        enable: function () { return this._setOption("disabled", false) }, disable: function () { return this._setOption("disabled", true) }, _trigger: function (a, c, d) { var e = this.options[a]; c = b.Event(c); c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(); d = d || {}; if (c.originalEvent) { a = b.event.props.length; for (var f; a; ) { f = b.event.props[--a]; c[f] = c.originalEvent[f] } } this.element.trigger(c, d); return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented()) } 
    }
})(jQuery);
; /*!
 * jQuery UI Mouse 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function (c) {
    c.widget("ui.mouse", { options: { cancel: ":input,option", distance: 1, delay: 0 }, _mouseInit: function () { var a = this; this.element.bind("mousedown." + this.widgetName, function (b) { return a._mouseDown(b) }).bind("click." + this.widgetName, function (b) { if (true === c.data(b.target, a.widgetName + ".preventClickEvent")) { c.removeData(b.target, a.widgetName + ".preventClickEvent"); b.stopImmediatePropagation(); return false } }); this.started = false }, _mouseDestroy: function () { this.element.unbind("." + this.widgetName) }, _mouseDown: function (a) {
        a.originalEvent =
a.originalEvent || {}; if (!a.originalEvent.mouseHandled) {
            this._mouseStarted && this._mouseUp(a); this._mouseDownEvent = a; var b = this, e = a.which == 1, f = typeof this.options.cancel == "string" ? c(a.target).parents().add(a.target).filter(this.options.cancel).length : false; if (!e || f || !this._mouseCapture(a)) return true; this.mouseDelayMet = !this.options.delay; if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function () { b.mouseDelayMet = true }, this.options.delay); if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) {
                this._mouseStarted =
this._mouseStart(a) !== false; if (!this._mouseStarted) { a.preventDefault(); return true } 
            } this._mouseMoveDelegate = function (d) { return b._mouseMove(d) }; this._mouseUpDelegate = function (d) { return b._mouseUp(d) }; c(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate); a.preventDefault(); return a.originalEvent.mouseHandled = true
        } 
    }, _mouseMove: function (a) {
        if (c.browser.msie && !(document.documentMode >= 9) && !a.button) return this._mouseUp(a); if (this._mouseStarted) {
            this._mouseDrag(a);
            return a.preventDefault()
        } if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== false) ? this._mouseDrag(a) : this._mouseUp(a); return !this._mouseStarted
    }, _mouseUp: function (a) {
        c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate); if (this._mouseStarted) {
            this._mouseStarted = false; a.target == this._mouseDownEvent.target && c.data(a.target, this.widgetName + ".preventClickEvent",
true); this._mouseStop(a)
        } return false
    }, _mouseDistanceMet: function (a) { return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return true } 
    })
})(jQuery);
; /*
 * jQuery UI Position 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function (c) {
    c.ui = c.ui || {}; var n = /left|center|right/, o = /top|center|bottom/, t = c.fn.position, u = c.fn.offset; c.fn.position = function (b) {
        if (!b || !b.of) return t.apply(this, arguments); b = c.extend({}, b); var a = c(b.of), d = a[0], g = (b.collision || "flip").split(" "), e = b.offset ? b.offset.split(" ") : [0, 0], h, k, j; if (d.nodeType === 9) { h = a.width(); k = a.height(); j = { top: 0, left: 0} } else if (d.setTimeout) { h = a.width(); k = a.height(); j = { top: a.scrollTop(), left: a.scrollLeft()} } else if (d.preventDefault) {
            b.at = "left top"; h = k = 0; j = { top: b.of.pageY,
                left: b.of.pageX
            }
        } else { h = a.outerWidth(); k = a.outerHeight(); j = a.offset() } c.each(["my", "at"], function () { var f = (b[this] || "").split(" "); if (f.length === 1) f = n.test(f[0]) ? f.concat(["center"]) : o.test(f[0]) ? ["center"].concat(f) : ["center", "center"]; f[0] = n.test(f[0]) ? f[0] : "center"; f[1] = o.test(f[1]) ? f[1] : "center"; b[this] = f }); if (g.length === 1) g[1] = g[0]; e[0] = parseInt(e[0], 10) || 0; if (e.length === 1) e[1] = e[0]; e[1] = parseInt(e[1], 10) || 0; if (b.at[0] === "right") j.left += h; else if (b.at[0] === "center") j.left += h / 2; if (b.at[1] === "bottom") j.top +=
k; else if (b.at[1] === "center") j.top += k / 2; j.left += e[0]; j.top += e[1]; return this.each(function () {
    var f = c(this), l = f.outerWidth(), m = f.outerHeight(), p = parseInt(c.curCSS(this, "marginLeft", true)) || 0, q = parseInt(c.curCSS(this, "marginTop", true)) || 0, v = l + p + parseInt(c.curCSS(this, "marginRight", true)) || 0, w = m + q + parseInt(c.curCSS(this, "marginBottom", true)) || 0, i = c.extend({}, j), r; if (b.my[0] === "right") i.left -= l; else if (b.my[0] === "center") i.left -= l / 2; if (b.my[1] === "bottom") i.top -= m; else if (b.my[1] === "center") i.top -= m / 2;
    i.left = Math.round(i.left); i.top = Math.round(i.top); r = { left: i.left - p, top: i.top - q }; c.each(["left", "top"], function (s, x) { c.ui.position[g[s]] && c.ui.position[g[s]][x](i, { targetWidth: h, targetHeight: k, elemWidth: l, elemHeight: m, collisionPosition: r, collisionWidth: v, collisionHeight: w, offset: e, my: b.my, at: b.at }) }); c.fn.bgiframe && f.bgiframe(); f.offset(c.extend(i, { using: b.using }))
})
    }; c.ui.position = { fit: { left: function (b, a) {
        var d = c(window); d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft(); b.left =
d > 0 ? b.left - d : Math.max(b.left - a.collisionPosition.left, b.left)
    }, top: function (b, a) { var d = c(window); d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop(); b.top = d > 0 ? b.top - d : Math.max(b.top - a.collisionPosition.top, b.top) } 
    }, flip: { left: function (b, a) {
        if (a.at[0] !== "center") {
            var d = c(window); d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft(); var g = a.my[0] === "left" ? -a.elemWidth : a.my[0] === "right" ? a.elemWidth : 0, e = a.at[0] === "left" ? a.targetWidth : -a.targetWidth, h = -2 * a.offset[0]; b.left +=
a.collisionPosition.left < 0 ? g + e + h : d > 0 ? g + e + h : 0
        } 
    }, top: function (b, a) { if (a.at[1] !== "center") { var d = c(window); d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop(); var g = a.my[1] === "top" ? -a.elemHeight : a.my[1] === "bottom" ? a.elemHeight : 0, e = a.at[1] === "top" ? a.targetHeight : -a.targetHeight, h = -2 * a.offset[1]; b.top += a.collisionPosition.top < 0 ? g + e + h : d > 0 ? g + e + h : 0 } } 
    }
    }; if (!c.offset.setOffset) {
        c.offset.setOffset = function (b, a) {
            if (/static/.test(c.curCSS(b, "position"))) b.style.position = "relative"; var d = c(b),
g = d.offset(), e = parseInt(c.curCSS(b, "top", true), 10) || 0, h = parseInt(c.curCSS(b, "left", true), 10) || 0; g = { top: a.top - g.top + e, left: a.left - g.left + h }; "using" in a ? a.using.call(b, g) : d.css(g)
        }; c.fn.offset = function (b) { var a = this[0]; if (!a || !a.ownerDocument) return null; if (b) return this.each(function () { c.offset.setOffset(this, b) }); return u.call(this) } 
    } 
})(jQuery);
; /*
 * jQuery UI Draggable 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (d) {
    d.widget("ui.draggable", d.ui.mouse, { widgetEventPrefix: "drag", options: { addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false }, _create: function () {
        if (this.options.helper ==
"original" && !/^(?:r|a|f)/.test(this.element.css("position"))) this.element[0].style.position = "relative"; this.options.addClasses && this.element.addClass("ui-draggable"); this.options.disabled && this.element.addClass("ui-draggable-disabled"); this._mouseInit()
    }, destroy: function () { if (this.element.data("draggable")) { this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"); this._mouseDestroy(); return this } }, _mouseCapture: function (a) {
        var b =
this.options; if (this.helper || b.disabled || d(a.target).is(".ui-resizable-handle")) return false; this.handle = this._getHandle(a); if (!this.handle) return false; return true
    }, _mouseStart: function (a) {
        var b = this.options; this.helper = this._createHelper(a); this._cacheHelperProportions(); if (d.ui.ddmanager) d.ui.ddmanager.current = this; this._cacheMargins(); this.cssPosition = this.helper.css("position"); this.scrollParent = this.helper.scrollParent(); this.offset = this.positionAbs = this.element.offset(); this.offset = { top: this.offset.top -
this.margins.top, left: this.offset.left - this.margins.left
        }; d.extend(this.offset, { click: { left: a.pageX - this.offset.left, top: a.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }); this.originalPosition = this.position = this._generatePosition(a); this.originalPageX = a.pageX; this.originalPageY = a.pageY; b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt); b.containment && this._setContainment(); if (this._trigger("start", a) === false) { this._clear(); return false } this._cacheHelperProportions();
        d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a); this.helper.addClass("ui-draggable-dragging"); this._mouseDrag(a, true); return true
    }, _mouseDrag: function (a, b) {
        this.position = this._generatePosition(a); this.positionAbs = this._convertPositionTo("absolute"); if (!b) { b = this._uiHash(); if (this._trigger("drag", a, b) === false) { this._mouseUp({}); return false } this.position = b.position } if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px"; if (!this.options.axis ||
this.options.axis != "x") this.helper[0].style.top = this.position.top + "px"; d.ui.ddmanager && d.ui.ddmanager.drag(this, a); return false
    }, _mouseStop: function (a) {
        var b = false; if (d.ui.ddmanager && !this.options.dropBehaviour) b = d.ui.ddmanager.drop(this, a); if (this.dropped) { b = this.dropped; this.dropped = false } if (!this.element[0] || !this.element[0].parentNode) return false; if (this.options.revert == "invalid" && !b || this.options.revert == "valid" && b || this.options.revert === true || d.isFunction(this.options.revert) && this.options.revert.call(this.element,
b)) { var c = this; d(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { c._trigger("stop", a) !== false && c._clear() }) } else this._trigger("stop", a) !== false && this._clear(); return false
    }, cancel: function () { this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(); return this }, _getHandle: function (a) {
        var b = !this.options.handle || !d(this.options.handle, this.element).length ? true : false; d(this.options.handle, this.element).find("*").andSelf().each(function () {
            if (this ==
a.target) b = true
        }); return b
    }, _createHelper: function (a) { var b = this.options; a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a])) : b.helper == "clone" ? this.element.clone() : this.element; a.parents("body").length || a.appendTo(b.appendTo == "parent" ? this.element[0].parentNode : b.appendTo); a[0] != this.element[0] && !/(fixed|absolute)/.test(a.css("position")) && a.css("position", "absolute"); return a }, _adjustOffsetFromHelper: function (a) {
        if (typeof a == "string") a = a.split(" "); if (d.isArray(a)) a = { left: +a[0], top: +a[1] ||
0
        }; if ("left" in a) this.offset.click.left = a.left + this.margins.left; if ("right" in a) this.offset.click.left = this.helperProportions.width - a.right + this.margins.left; if ("top" in a) this.offset.click.top = a.top + this.margins.top; if ("bottom" in a) this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top
    }, _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent(); var a = this.offsetParent.offset(); if (this.cssPosition == "absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0],
this.offsetParent[0])) { a.left += this.scrollParent.scrollLeft(); a.top += this.scrollParent.scrollTop() } if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie) a = { top: 0, left: 0 }; return { top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
    }, _getRelativeOffset: function () {
        if (this.cssPosition == "relative") {
            var a = this.element.position(); return { top: a.top -
(parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            }
        } else return { top: 0, left: 0}
    }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0} }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight()} }, _setContainment: function () {
        var a = this.options; if (a.containment ==
"parent") a.containment = this.helper[0].parentNode; if (a.containment == "document" || a.containment == "window") this.containment = [(a.containment == "document" ? 0 : d(window).scrollLeft()) - this.offset.relative.left - this.offset.parent.left, (a.containment == "document" ? 0 : d(window).scrollTop()) - this.offset.relative.top - this.offset.parent.top, (a.containment == "document" ? 0 : d(window).scrollLeft()) + d(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a.containment == "document" ?
0 : d(window).scrollTop()) + (d(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; if (!/^(document|window|parent)$/.test(a.containment) && a.containment.constructor != Array) {
            var b = d(a.containment)[0]; if (b) {
                a = d(a.containment).offset(); var c = d(b).css("overflow") != "hidden"; this.containment = [a.left + (parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0) - this.margins.left, a.top + (parseInt(d(b).css("borderTopWidth"),
10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0) - this.margins.top, a.left + (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"), 10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, a.top + (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"), 10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            } 
        } else if (a.containment.constructor ==
Array) this.containment = a.containment
    }, _convertPositionTo: function (a, b) {
        if (!b) b = this.position; a = a == "absolute" ? 1 : -1; var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, f = /(html|body)/i.test(c[0].tagName); return { top: b.top + this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() :
f ? 0 : c.scrollTop()) * a), left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft()) * a)
        }
    }, _generatePosition: function (a) {
        var b = this.options, c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, f = /(html|body)/i.test(c[0].tagName), e = a.pageX, g = a.pageY;
        if (this.originalPosition) {
            if (this.containment) { if (a.pageX - this.offset.click.left < this.containment[0]) e = this.containment[0] + this.offset.click.left; if (a.pageY - this.offset.click.top < this.containment[1]) g = this.containment[1] + this.offset.click.top; if (a.pageX - this.offset.click.left > this.containment[2]) e = this.containment[2] + this.offset.click.left; if (a.pageY - this.offset.click.top > this.containment[3]) g = this.containment[3] + this.offset.click.top } if (b.grid) {
                g = this.originalPageY + Math.round((g - this.originalPageY) /
b.grid[1]) * b.grid[1]; g = this.containment ? !(g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ? g : !(g - this.offset.click.top < this.containment[1]) ? g - b.grid[1] : g + b.grid[1] : g; e = this.originalPageX + Math.round((e - this.originalPageX) / b.grid[0]) * b.grid[0]; e = this.containment ? !(e - this.offset.click.left < this.containment[0] || e - this.offset.click.left > this.containment[2]) ? e : !(e - this.offset.click.left < this.containment[0]) ? e - b.grid[0] : e + b.grid[0] : e
            } 
        } return { top: g - this.offset.click.top -
this.offset.relative.top - this.offset.parent.top + (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : c.scrollTop()), left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft())
        }
    }, _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"); this.helper[0] !=
this.element[0] && !this.cancelHelperRemoval && this.helper.remove(); this.helper = null; this.cancelHelperRemoval = false
    }, _trigger: function (a, b, c) { c = c || this._uiHash(); d.ui.plugin.call(this, a, [b, c]); if (a == "drag") this.positionAbs = this._convertPositionTo("absolute"); return d.Widget.prototype._trigger.call(this, a, b, c) }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs} } 
    }); d.extend(d.ui.draggable, { version: "1.8.7" });
    d.ui.plugin.add("draggable", "connectToSortable", { start: function (a, b) { var c = d(this).data("draggable"), f = c.options, e = d.extend({}, b, { item: c.element }); c.sortables = []; d(f.connectToSortable).each(function () { var g = d.data(this, "sortable"); if (g && !g.options.disabled) { c.sortables.push({ instance: g, shouldRevert: g.options.revert }); g._refreshItems(); g._trigger("activate", a, e) } }) }, stop: function (a, b) {
        var c = d(this).data("draggable"), f = d.extend({}, b, { item: c.element }); d.each(c.sortables, function () {
            if (this.instance.isOver) {
                this.instance.isOver =
0; c.cancelHelperRemoval = true; this.instance.cancelHelperRemoval = false; if (this.shouldRevert) this.instance.options.revert = true; this.instance._mouseStop(a); this.instance.options.helper = this.instance.options._helper; c.options.helper == "original" && this.instance.currentItem.css({ top: "auto", left: "auto" })
            } else { this.instance.cancelHelperRemoval = false; this.instance._trigger("deactivate", a, f) } 
        })
    }, drag: function (a, b) {
        var c = d(this).data("draggable"), f = this; d.each(c.sortables, function () {
            this.instance.positionAbs =
c.positionAbs; this.instance.helperProportions = c.helperProportions; this.instance.offset.click = c.offset.click; if (this.instance._intersectsWith(this.instance.containerCache)) {
                if (!this.instance.isOver) {
                    this.instance.isOver = 1; this.instance.currentItem = d(f).clone().appendTo(this.instance.element).data("sortable-item", true); this.instance.options._helper = this.instance.options.helper; this.instance.options.helper = function () { return b.helper[0] }; a.target = this.instance.currentItem[0]; this.instance._mouseCapture(a,
true); this.instance._mouseStart(a, true, true); this.instance.offset.click.top = c.offset.click.top; this.instance.offset.click.left = c.offset.click.left; this.instance.offset.parent.left -= c.offset.parent.left - this.instance.offset.parent.left; this.instance.offset.parent.top -= c.offset.parent.top - this.instance.offset.parent.top; c._trigger("toSortable", a); c.dropped = this.instance.element; c.currentItem = c.element; this.instance.fromOutside = c
                } this.instance.currentItem && this.instance._mouseDrag(a)
            } else if (this.instance.isOver) {
                this.instance.isOver =
0; this.instance.cancelHelperRemoval = true; this.instance.options.revert = false; this.instance._trigger("out", a, this.instance._uiHash(this.instance)); this.instance._mouseStop(a, true); this.instance.options.helper = this.instance.options._helper; this.instance.currentItem.remove(); this.instance.placeholder && this.instance.placeholder.remove(); c._trigger("fromSortable", a); c.dropped = false
            } 
        })
    } 
    }); d.ui.plugin.add("draggable", "cursor", { start: function () {
        var a = d("body"), b = d(this).data("draggable").options; if (a.css("cursor")) b._cursor =
a.css("cursor"); a.css("cursor", b.cursor)
    }, stop: function () { var a = d(this).data("draggable").options; a._cursor && d("body").css("cursor", a._cursor) } 
    }); d.ui.plugin.add("draggable", "iframeFix", { start: function () { var a = d(this).data("draggable").options; d(a.iframeFix === true ? "iframe" : a.iframeFix).each(function () { d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1E3 }).css(d(this).offset()).appendTo("body") }) },
        stop: function () { d("div.ui-draggable-iframeFix").each(function () { this.parentNode.removeChild(this) }) } 
    }); d.ui.plugin.add("draggable", "opacity", { start: function (a, b) { a = d(b.helper); b = d(this).data("draggable").options; if (a.css("opacity")) b._opacity = a.css("opacity"); a.css("opacity", b.opacity) }, stop: function (a, b) { a = d(this).data("draggable").options; a._opacity && d(b.helper).css("opacity", a._opacity) } }); d.ui.plugin.add("draggable", "scroll", { start: function () {
        var a = d(this).data("draggable"); if (a.scrollParent[0] !=
document && a.scrollParent[0].tagName != "HTML") a.overflowOffset = a.scrollParent.offset()
    }, drag: function (a) {
        var b = d(this).data("draggable"), c = b.options, f = false; if (b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML") {
            if (!c.axis || c.axis != "x") if (b.overflowOffset.top + b.scrollParent[0].offsetHeight - a.pageY < c.scrollSensitivity) b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop + c.scrollSpeed; else if (a.pageY - b.overflowOffset.top < c.scrollSensitivity) b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop -
c.scrollSpeed; if (!c.axis || c.axis != "y") if (b.overflowOffset.left + b.scrollParent[0].offsetWidth - a.pageX < c.scrollSensitivity) b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft + c.scrollSpeed; else if (a.pageX - b.overflowOffset.left < c.scrollSensitivity) b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft - c.scrollSpeed
        } else {
            if (!c.axis || c.axis != "x") if (a.pageY - d(document).scrollTop() < c.scrollSensitivity) f = d(document).scrollTop(d(document).scrollTop() - c.scrollSpeed); else if (d(window).height() -
(a.pageY - d(document).scrollTop()) < c.scrollSensitivity) f = d(document).scrollTop(d(document).scrollTop() + c.scrollSpeed); if (!c.axis || c.axis != "y") if (a.pageX - d(document).scrollLeft() < c.scrollSensitivity) f = d(document).scrollLeft(d(document).scrollLeft() - c.scrollSpeed); else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < c.scrollSensitivity) f = d(document).scrollLeft(d(document).scrollLeft() + c.scrollSpeed)
        } f !== false && d.ui.ddmanager && !c.dropBehaviour && d.ui.ddmanager.prepareOffsets(b, a)
    } 
    }); d.ui.plugin.add("draggable",
"snap", { start: function () { var a = d(this).data("draggable"), b = a.options; a.snapElements = []; d(b.snap.constructor != String ? b.snap.items || ":data(draggable)" : b.snap).each(function () { var c = d(this), f = c.offset(); this != a.element[0] && a.snapElements.push({ item: this, width: c.outerWidth(), height: c.outerHeight(), top: f.top, left: f.left }) }) }, drag: function (a, b) {
    for (var c = d(this).data("draggable"), f = c.options, e = f.snapTolerance, g = b.offset.left, n = g + c.helperProportions.width, m = b.offset.top, o = m + c.helperProportions.height, h =
c.snapElements.length - 1; h >= 0; h--) {
        var i = c.snapElements[h].left, k = i + c.snapElements[h].width, j = c.snapElements[h].top, l = j + c.snapElements[h].height; if (i - e < g && g < k + e && j - e < m && m < l + e || i - e < g && g < k + e && j - e < o && o < l + e || i - e < n && n < k + e && j - e < m && m < l + e || i - e < n && n < k + e && j - e < o && o < l + e) {
            if (f.snapMode != "inner") {
                var p = Math.abs(j - o) <= e, q = Math.abs(l - m) <= e, r = Math.abs(i - n) <= e, s = Math.abs(k - g) <= e; if (p) b.position.top = c._convertPositionTo("relative", { top: j - c.helperProportions.height, left: 0 }).top - c.margins.top; if (q) b.position.top = c._convertPositionTo("relative",
{ top: l, left: 0 }).top - c.margins.top; if (r) b.position.left = c._convertPositionTo("relative", { top: 0, left: i - c.helperProportions.width }).left - c.margins.left; if (s) b.position.left = c._convertPositionTo("relative", { top: 0, left: k }).left - c.margins.left
            } var t = p || q || r || s; if (f.snapMode != "outer") {
                p = Math.abs(j - m) <= e; q = Math.abs(l - o) <= e; r = Math.abs(i - g) <= e; s = Math.abs(k - n) <= e; if (p) b.position.top = c._convertPositionTo("relative", { top: j, left: 0 }).top - c.margins.top; if (q) b.position.top = c._convertPositionTo("relative", { top: l - c.helperProportions.height,
                    left: 0
                }).top - c.margins.top; if (r) b.position.left = c._convertPositionTo("relative", { top: 0, left: i }).left - c.margins.left; if (s) b.position.left = c._convertPositionTo("relative", { top: 0, left: k - c.helperProportions.width }).left - c.margins.left
            } if (!c.snapElements[h].snapping && (p || q || r || s || t)) c.options.snap.snap && c.options.snap.snap.call(c.element, a, d.extend(c._uiHash(), { snapItem: c.snapElements[h].item })); c.snapElements[h].snapping = p || q || r || s || t
        } else {
            c.snapElements[h].snapping && c.options.snap.release && c.options.snap.release.call(c.element,
a, d.extend(c._uiHash(), { snapItem: c.snapElements[h].item })); c.snapElements[h].snapping = false
        } 
    } 
} 
}); d.ui.plugin.add("draggable", "stack", { start: function () { var a = d(this).data("draggable").options; a = d.makeArray(d(a.stack)).sort(function (c, f) { return (parseInt(d(c).css("zIndex"), 10) || 0) - (parseInt(d(f).css("zIndex"), 10) || 0) }); if (a.length) { var b = parseInt(a[0].style.zIndex) || 0; d(a).each(function (c) { this.style.zIndex = b + c }); this[0].style.zIndex = b + a.length } } }); d.ui.plugin.add("draggable", "zIndex", { start: function (a,
b) { a = d(b.helper); b = d(this).data("draggable").options; if (a.css("zIndex")) b._zIndex = a.css("zIndex"); a.css("zIndex", b.zIndex) }, stop: function (a, b) { a = d(this).data("draggable").options; a._zIndex && d(b.helper).css("zIndex", a._zIndex) } 
})
})(jQuery);
; /*
 * jQuery UI Droppable 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function (d) {
    d.widget("ui.droppable", { widgetEventPrefix: "drop", options: { accept: "*", activeClass: false, addClasses: true, greedy: false, hoverClass: false, scope: "default", tolerance: "intersect" }, _create: function () {
        var a = this.options, b = a.accept; this.isover = 0; this.isout = 1; this.accept = d.isFunction(b) ? b : function (c) { return c.is(b) }; this.proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }; d.ui.ddmanager.droppables[a.scope] = d.ui.ddmanager.droppables[a.scope] || []; d.ui.ddmanager.droppables[a.scope].push(this);
        a.addClasses && this.element.addClass("ui-droppable")
    }, destroy: function () { for (var a = d.ui.ddmanager.droppables[this.options.scope], b = 0; b < a.length; b++) a[b] == this && a.splice(b, 1); this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"); return this }, _setOption: function (a, b) { if (a == "accept") this.accept = d.isFunction(b) ? b : function (c) { return c.is(b) }; d.Widget.prototype._setOption.apply(this, arguments) }, _activate: function (a) {
        var b = d.ui.ddmanager.current; this.options.activeClass &&
this.element.addClass(this.options.activeClass); b && this._trigger("activate", a, this.ui(b))
    }, _deactivate: function (a) { var b = d.ui.ddmanager.current; this.options.activeClass && this.element.removeClass(this.options.activeClass); b && this._trigger("deactivate", a, this.ui(b)) }, _over: function (a) {
        var b = d.ui.ddmanager.current; if (!(!b || (b.currentItem || b.element)[0] == this.element[0])) if (this.accept.call(this.element[0], b.currentItem || b.element)) {
            this.options.hoverClass && this.element.addClass(this.options.hoverClass);
            this._trigger("over", a, this.ui(b))
        } 
    }, _out: function (a) { var b = d.ui.ddmanager.current; if (!(!b || (b.currentItem || b.element)[0] == this.element[0])) if (this.accept.call(this.element[0], b.currentItem || b.element)) { this.options.hoverClass && this.element.removeClass(this.options.hoverClass); this._trigger("out", a, this.ui(b)) } }, _drop: function (a, b) {
        var c = b || d.ui.ddmanager.current; if (!c || (c.currentItem || c.element)[0] == this.element[0]) return false; var e = false; this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
            var g =
d.data(this, "droppable"); if (g.options.greedy && !g.options.disabled && g.options.scope == c.options.scope && g.accept.call(g.element[0], c.currentItem || c.element) && d.ui.intersect(c, d.extend(g, { offset: g.element.offset() }), g.options.tolerance)) { e = true; return false } 
        }); if (e) return false; if (this.accept.call(this.element[0], c.currentItem || c.element)) {
            this.options.activeClass && this.element.removeClass(this.options.activeClass); this.options.hoverClass && this.element.removeClass(this.options.hoverClass); this._trigger("drop",
a, this.ui(c)); return this.element
        } return false
    }, ui: function (a) { return { draggable: a.currentItem || a.element, helper: a.helper, position: a.position, offset: a.positionAbs} } 
    }); d.extend(d.ui.droppable, { version: "1.8.7" }); d.ui.intersect = function (a, b, c) {
        if (!b.offset) return false; var e = (a.positionAbs || a.position.absolute).left, g = e + a.helperProportions.width, f = (a.positionAbs || a.position.absolute).top, h = f + a.helperProportions.height, i = b.offset.left, k = i + b.proportions.width, j = b.offset.top, l = j + b.proportions.height;
        switch (c) {
            case "fit": return i <= e && g <= k && j <= f && h <= l; case "intersect": return i < e + a.helperProportions.width / 2 && g - a.helperProportions.width / 2 < k && j < f + a.helperProportions.height / 2 && h - a.helperProportions.height / 2 < l; case "pointer": return d.ui.isOver((a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, j, i, b.proportions.height, b.proportions.width); case "touch": return (f >= j && f <= l || h >= j && h <= l || f < j && h > l) && (e >=
i && e <= k || g >= i && g <= k || e < i && g > k); default: return false
        } 
    }; d.ui.ddmanager = { current: null, droppables: { "default": [] }, prepareOffsets: function (a, b) {
        var c = d.ui.ddmanager.droppables[a.options.scope] || [], e = b ? b.type : null, g = (a.currentItem || a.element).find(":data(droppable)").andSelf(), f = 0; a: for (; f < c.length; f++) if (!(c[f].options.disabled || a && !c[f].accept.call(c[f].element[0], a.currentItem || a.element))) {
            for (var h = 0; h < g.length; h++) if (g[h] == c[f].element[0]) { c[f].proportions.height = 0; continue a } c[f].visible = c[f].element.css("display") !=
"none"; if (c[f].visible) { c[f].offset = c[f].element.offset(); c[f].proportions = { width: c[f].element[0].offsetWidth, height: c[f].element[0].offsetHeight }; e == "mousedown" && c[f]._activate.call(c[f], b) } 
        } 
    }, drop: function (a, b) {
        var c = false; d.each(d.ui.ddmanager.droppables[a.options.scope] || [], function () {
            if (this.options) {
                if (!this.options.disabled && this.visible && d.ui.intersect(a, this, this.options.tolerance)) c = c || this._drop.call(this, b); if (!this.options.disabled && this.visible && this.accept.call(this.element[0], a.currentItem ||
a.element)) { this.isout = 1; this.isover = 0; this._deactivate.call(this, b) } 
            } 
        }); return c
    }, drag: function (a, b) {
        a.options.refreshPositions && d.ui.ddmanager.prepareOffsets(a, b); d.each(d.ui.ddmanager.droppables[a.options.scope] || [], function () {
            if (!(this.options.disabled || this.greedyChild || !this.visible)) {
                var c = d.ui.intersect(a, this, this.options.tolerance); if (c = !c && this.isover == 1 ? "isout" : c && this.isover == 0 ? "isover" : null) {
                    var e; if (this.options.greedy) {
                        var g = this.element.parents(":data(droppable):eq(0)"); if (g.length) {
                            e =
d.data(g[0], "droppable"); e.greedyChild = c == "isover" ? 1 : 0
                        } 
                    } if (e && c == "isover") { e.isover = 0; e.isout = 1; e._out.call(e, b) } this[c] = 1; this[c == "isout" ? "isover" : "isout"] = 0; this[c == "isover" ? "_over" : "_out"].call(this, b); if (e && c == "isout") { e.isout = 0; e.isover = 1; e._over.call(e, b) } 
                } 
            } 
        })
    } 
    }
})(jQuery);
; /*
 * jQuery UI Resizable 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (e) {
    e.widget("ui.resizable", e.ui.mouse, { widgetEventPrefix: "resize", options: { alsoResize: false, animate: false, animateDuration: "slow", animateEasing: "swing", aspectRatio: false, autoHide: false, containment: false, ghost: false, grid: false, handles: "e,s,se", helper: false, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 1E3 }, _create: function () {
        var b = this, a = this.options; this.element.addClass("ui-resizable"); e.extend(this, { _aspectRatio: !!a.aspectRatio, aspectRatio: a.aspectRatio, originalElement: this.element,
            _proportionallyResizeElements: [], _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
        }); if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
            /relative/.test(this.element.css("position")) && e.browser.opera && this.element.css({ position: "relative", top: "auto", left: "auto" }); this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(),
                top: this.element.css("top"), left: this.element.css("left")
            })); this.element = this.element.parent().data("resizable", this.element.data("resizable")); this.elementIsWrapper = true; this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }); this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }); this.originalResizeStyle =
this.originalElement.css("resize"); this.originalElement.css("resize", "none"); this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })); this.originalElement.css({ margin: this.originalElement.css("margin") }); this._proportionallyResize()
        } this.handles = a.handles || (!e(".ui-resizable-handle", this.element).length ? "e,s,se" : { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne",
            nw: ".ui-resizable-nw"
        }); if (this.handles.constructor == String) { if (this.handles == "all") this.handles = "n,e,s,w,se,sw,ne,nw"; var c = this.handles.split(","); this.handles = {}; for (var d = 0; d < c.length; d++) { var f = e.trim(c[d]), g = e('<div class="ui-resizable-handle ' + ("ui-resizable-" + f) + '"></div>'); /sw|se|ne|nw/.test(f) && g.css({ zIndex: ++a.zIndex }); "se" == f && g.addClass("ui-icon ui-icon-gripsmall-diagonal-se"); this.handles[f] = ".ui-resizable-" + f; this.element.append(g) } } this._renderAxis = function (h) {
            h = h || this.element; for (var i in this.handles) {
                if (this.handles[i].constructor ==
String) this.handles[i] = e(this.handles[i], this.element).show(); if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) { var j = e(this.handles[i], this.element), k = 0; k = /sw|ne|nw|se|n|s/.test(i) ? j.outerHeight() : j.outerWidth(); j = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""); h.css(j, k); this._proportionallyResize() } e(this.handles[i])
            } 
        }; this._renderAxis(this.element); this._handles = e(".ui-resizable-handle", this.element).disableSelection();
        this._handles.mouseover(function () { if (!b.resizing) { if (this.className) var h = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i); b.axis = h && h[1] ? h[1] : "se" } }); if (a.autoHide) { this._handles.hide(); e(this.element).addClass("ui-resizable-autohide").hover(function () { e(this).removeClass("ui-resizable-autohide"); b._handles.show() }, function () { if (!b.resizing) { e(this).addClass("ui-resizable-autohide"); b._handles.hide() } }) } this._mouseInit()
    }, destroy: function () {
        this._mouseDestroy(); var b = function (c) { e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove() };
        if (this.elementIsWrapper) { b(this.element); var a = this.element; a.after(this.originalElement.css({ position: a.css("position"), width: a.outerWidth(), height: a.outerHeight(), top: a.css("top"), left: a.css("left") })).remove() } this.originalElement.css("resize", this.originalResizeStyle); b(this.originalElement); return this
    }, _mouseCapture: function (b) { var a = false; for (var c in this.handles) if (e(this.handles[c])[0] == b.target) a = true; return !this.options.disabled && a }, _mouseStart: function (b) {
        var a = this.options, c = this.element.position(),
d = this.element; this.resizing = true; this.documentScroll = { top: e(document).scrollTop(), left: e(document).scrollLeft() }; if (d.is(".ui-draggable") || /absolute/.test(d.css("position"))) d.css({ position: "absolute", top: c.top, left: c.left }); e.browser.opera && /relative/.test(d.css("position")) && d.css({ position: "relative", top: "auto", left: "auto" }); this._renderProxy(); c = m(this.helper.css("left")); var f = m(this.helper.css("top")); if (a.containment) { c += e(a.containment).scrollLeft() || 0; f += e(a.containment).scrollTop() || 0 } this.offset =
this.helper.offset(); this.position = { left: c, top: f }; this.size = this._helper ? { width: d.outerWidth(), height: d.outerHeight()} : { width: d.width(), height: d.height() }; this.originalSize = this._helper ? { width: d.outerWidth(), height: d.outerHeight()} : { width: d.width(), height: d.height() }; this.originalPosition = { left: c, top: f }; this.sizeDiff = { width: d.outerWidth() - d.width(), height: d.outerHeight() - d.height() }; this.originalMousePosition = { left: b.pageX, top: b.pageY }; this.aspectRatio = typeof a.aspectRatio == "number" ? a.aspectRatio :
this.originalSize.width / this.originalSize.height || 1; a = e(".ui-resizable-" + this.axis).css("cursor"); e("body").css("cursor", a == "auto" ? this.axis + "-resize" : a); d.addClass("ui-resizable-resizing"); this._propagate("start", b); return true
    }, _mouseDrag: function (b) {
        var a = this.helper, c = this.originalMousePosition, d = this._change[this.axis]; if (!d) return false; c = d.apply(this, [b, b.pageX - c.left || 0, b.pageY - c.top || 0]); if (this._aspectRatio || b.shiftKey) c = this._updateRatio(c, b); c = this._respectSize(c, b); this._propagate("resize",
b); a.css({ top: this.position.top + "px", left: this.position.left + "px", width: this.size.width + "px", height: this.size.height + "px" }); !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(); this._updateCache(c); this._trigger("resize", b, this.ui()); return false
    }, _mouseStop: function (b) {
        this.resizing = false; var a = this.options, c = this; if (this._helper) {
            var d = this._proportionallyResizeElements, f = d.length && /textarea/i.test(d[0].nodeName); d = f && e.ui.hasScroll(d[0], "left") ? 0 : c.sizeDiff.height;
            f = { width: c.size.width - (f ? 0 : c.sizeDiff.width), height: c.size.height - d }; d = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null; var g = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null; a.animate || this.element.css(e.extend(f, { top: g, left: d })); c.helper.height(c.size.height); c.helper.width(c.size.width); this._helper && !a.animate && this._proportionallyResize()
        } e("body").css("cursor", "auto"); this.element.removeClass("ui-resizable-resizing"); this._propagate("stop",
b); this._helper && this.helper.remove(); return false
    }, _updateCache: function (b) { this.offset = this.helper.offset(); if (l(b.left)) this.position.left = b.left; if (l(b.top)) this.position.top = b.top; if (l(b.height)) this.size.height = b.height; if (l(b.width)) this.size.width = b.width }, _updateRatio: function (b) {
        var a = this.position, c = this.size, d = this.axis; if (b.height) b.width = c.height * this.aspectRatio; else if (b.width) b.height = c.width / this.aspectRatio; if (d == "sw") { b.left = a.left + (c.width - b.width); b.top = null } if (d == "nw") {
            b.top =
a.top + (c.height - b.height); b.left = a.left + (c.width - b.width)
        } return b
    }, _respectSize: function (b) {
        var a = this.options, c = this.axis, d = l(b.width) && a.maxWidth && a.maxWidth < b.width, f = l(b.height) && a.maxHeight && a.maxHeight < b.height, g = l(b.width) && a.minWidth && a.minWidth > b.width, h = l(b.height) && a.minHeight && a.minHeight > b.height; if (g) b.width = a.minWidth; if (h) b.height = a.minHeight; if (d) b.width = a.maxWidth; if (f) b.height = a.maxHeight; var i = this.originalPosition.left + this.originalSize.width, j = this.position.top + this.size.height,
k = /sw|nw|w/.test(c); c = /nw|ne|n/.test(c); if (g && k) b.left = i - a.minWidth; if (d && k) b.left = i - a.maxWidth; if (h && c) b.top = j - a.minHeight; if (f && c) b.top = j - a.maxHeight; if ((a = !b.width && !b.height) && !b.left && b.top) b.top = null; else if (a && !b.top && b.left) b.left = null; return b
    }, _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length) for (var b = this.helper || this.element, a = 0; a < this._proportionallyResizeElements.length; a++) {
            var c = this._proportionallyResizeElements[a]; if (!this.borderDif) {
                var d = [c.css("borderTopWidth"),
c.css("borderRightWidth"), c.css("borderBottomWidth"), c.css("borderLeftWidth")], f = [c.css("paddingTop"), c.css("paddingRight"), c.css("paddingBottom"), c.css("paddingLeft")]; this.borderDif = e.map(d, function (g, h) { g = parseInt(g, 10) || 0; h = parseInt(f[h], 10) || 0; return g + h })
            } e.browser.msie && (e(b).is(":hidden") || e(b).parents(":hidden").length) || c.css({ height: b.height() - this.borderDif[0] - this.borderDif[2] || 0, width: b.width() - this.borderDif[1] - this.borderDif[3] || 0 })
        } 
    }, _renderProxy: function () {
        var b = this.options; this.elementOffset =
this.element.offset(); if (this._helper) { this.helper = this.helper || e('<div style="overflow:hidden;"></div>'); var a = e.browser.msie && e.browser.version < 7, c = a ? 1 : 0; a = a ? 2 : -1; this.helper.addClass(this._helper).css({ width: this.element.outerWidth() + a, height: this.element.outerHeight() + a, position: "absolute", left: this.elementOffset.left - c + "px", top: this.elementOffset.top - c + "px", zIndex: ++b.zIndex }); this.helper.appendTo("body").disableSelection() } else this.helper = this.element
    }, _change: { e: function (b, a) {
        return { width: this.originalSize.width +
a
        }
    }, w: function (b, a) { return { left: this.originalPosition.left + a, width: this.originalSize.width - a} }, n: function (b, a, c) { return { top: this.originalPosition.top + c, height: this.originalSize.height - c} }, s: function (b, a, c) { return { height: this.originalSize.height + c} }, se: function (b, a, c) { return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, a, c])) }, sw: function (b, a, c) { return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, a, c])) }, ne: function (b, a, c) {
        return e.extend(this._change.n.apply(this,
arguments), this._change.e.apply(this, [b, a, c]))
    }, nw: function (b, a, c) { return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, a, c])) } 
    }, _propagate: function (b, a) { e.ui.plugin.call(this, b, [a, this.ui()]); b != "resize" && this._trigger(b, a, this.ui()) }, plugins: {}, ui: function () { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition} } 
    }); e.extend(e.ui.resizable,
{ version: "1.8.7" }); e.ui.plugin.add("resizable", "alsoResize", { start: function () {
    var b = e(this).data("resizable").options, a = function (c) { e(c).each(function () { var d = e(this); d.data("resizable-alsoresize", { width: parseInt(d.width(), 10), height: parseInt(d.height(), 10), left: parseInt(d.css("left"), 10), top: parseInt(d.css("top"), 10), position: d.css("position") }) }) }; if (typeof b.alsoResize == "object" && !b.alsoResize.parentNode) if (b.alsoResize.length) { b.alsoResize = b.alsoResize[0]; a(b.alsoResize) } else e.each(b.alsoResize,
function (c) { a(c) }); else a(b.alsoResize)
}, resize: function (b, a) {
    var c = e(this).data("resizable"); b = c.options; var d = c.originalSize, f = c.originalPosition, g = { height: c.size.height - d.height || 0, width: c.size.width - d.width || 0, top: c.position.top - f.top || 0, left: c.position.left - f.left || 0 }, h = function (i, j) {
        e(i).each(function () {
            var k = e(this), q = e(this).data("resizable-alsoresize"), p = {}, r = j && j.length ? j : k.parents(a.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; e.each(r, function (n, o) {
                if ((n =
(q[o] || 0) + (g[o] || 0)) && n >= 0) p[o] = n || null
            }); if (e.browser.opera && /relative/.test(k.css("position"))) { c._revertToRelativePosition = true; k.css({ position: "absolute", top: "auto", left: "auto" }) } k.css(p)
        })
    }; typeof b.alsoResize == "object" && !b.alsoResize.nodeType ? e.each(b.alsoResize, function (i, j) { h(i, j) }) : h(b.alsoResize)
}, stop: function () {
    var b = e(this).data("resizable"), a = b.options, c = function (d) { e(d).each(function () { var f = e(this); f.css({ position: f.data("resizable-alsoresize").position }) }) }; if (b._revertToRelativePosition) {
        b._revertToRelativePosition =
false; typeof a.alsoResize == "object" && !a.alsoResize.nodeType ? e.each(a.alsoResize, function (d) { c(d) }) : c(a.alsoResize)
    } e(this).removeData("resizable-alsoresize")
} 
}); e.ui.plugin.add("resizable", "animate", { stop: function (b) {
    var a = e(this).data("resizable"), c = a.options, d = a._proportionallyResizeElements, f = d.length && /textarea/i.test(d[0].nodeName), g = f && e.ui.hasScroll(d[0], "left") ? 0 : a.sizeDiff.height; f = { width: a.size.width - (f ? 0 : a.sizeDiff.width), height: a.size.height - g }; g = parseInt(a.element.css("left"), 10) + (a.position.left -
a.originalPosition.left) || null; var h = parseInt(a.element.css("top"), 10) + (a.position.top - a.originalPosition.top) || null; a.element.animate(e.extend(f, h && g ? { top: h, left: g} : {}), { duration: c.animateDuration, easing: c.animateEasing, step: function () {
    var i = { width: parseInt(a.element.css("width"), 10), height: parseInt(a.element.css("height"), 10), top: parseInt(a.element.css("top"), 10), left: parseInt(a.element.css("left"), 10) }; d && d.length && e(d[0]).css({ width: i.width, height: i.height }); a._updateCache(i); a._propagate("resize",
b)
} 
})
} 
}); e.ui.plugin.add("resizable", "containment", { start: function () {
    var b = e(this).data("resizable"), a = b.element, c = b.options.containment; if (a = c instanceof e ? c.get(0) : /parent/.test(c) ? a.parent().get(0) : c) {
        b.containerElement = e(a); if (/document/.test(c) || c == document) { b.containerOffset = { left: 0, top: 0 }; b.containerPosition = { left: 0, top: 0 }; b.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight} } else {
            var d = e(a), f = []; e(["Top",
"Right", "Left", "Bottom"]).each(function (i, j) { f[i] = m(d.css("padding" + j)) }); b.containerOffset = d.offset(); b.containerPosition = d.position(); b.containerSize = { height: d.innerHeight() - f[3], width: d.innerWidth() - f[1] }; c = b.containerOffset; var g = b.containerSize.height, h = b.containerSize.width; h = e.ui.hasScroll(a, "left") ? a.scrollWidth : h; g = e.ui.hasScroll(a) ? a.scrollHeight : g; b.parentData = { element: a, left: c.left, top: c.top, width: h, height: g}
        } 
    } 
}, resize: function (b) {
    var a = e(this).data("resizable"), c = a.options, d = a.containerOffset,
f = a.position; b = a._aspectRatio || b.shiftKey; var g = { top: 0, left: 0 }, h = a.containerElement; if (h[0] != document && /static/.test(h.css("position"))) g = d; if (f.left < (a._helper ? d.left : 0)) { a.size.width += a._helper ? a.position.left - d.left : a.position.left - g.left; if (b) a.size.height = a.size.width / c.aspectRatio; a.position.left = c.helper ? d.left : 0 } if (f.top < (a._helper ? d.top : 0)) { a.size.height += a._helper ? a.position.top - d.top : a.position.top; if (b) a.size.width = a.size.height * c.aspectRatio; a.position.top = a._helper ? d.top : 0 } a.offset.left =
a.parentData.left + a.position.left; a.offset.top = a.parentData.top + a.position.top; c = Math.abs((a._helper ? a.offset.left - g.left : a.offset.left - g.left) + a.sizeDiff.width); d = Math.abs((a._helper ? a.offset.top - g.top : a.offset.top - d.top) + a.sizeDiff.height); f = a.containerElement.get(0) == a.element.parent().get(0); g = /relative|absolute/.test(a.containerElement.css("position")); if (f && g) c -= a.parentData.left; if (c + a.size.width >= a.parentData.width) { a.size.width = a.parentData.width - c; if (b) a.size.height = a.size.width / a.aspectRatio } if (d +
a.size.height >= a.parentData.height) { a.size.height = a.parentData.height - d; if (b) a.size.width = a.size.height * a.aspectRatio } 
}, stop: function () {
    var b = e(this).data("resizable"), a = b.options, c = b.containerOffset, d = b.containerPosition, f = b.containerElement, g = e(b.helper), h = g.offset(), i = g.outerWidth() - b.sizeDiff.width; g = g.outerHeight() - b.sizeDiff.height; b._helper && !a.animate && /relative/.test(f.css("position")) && e(this).css({ left: h.left - d.left - c.left, width: i, height: g }); b._helper && !a.animate && /static/.test(f.css("position")) &&
e(this).css({ left: h.left - d.left - c.left, width: i, height: g })
} 
}); e.ui.plugin.add("resizable", "ghost", { start: function () { var b = e(this).data("resizable"), a = b.options, c = b.size; b.ghost = b.originalElement.clone(); b.ghost.css({ opacity: 0.25, display: "block", position: "relative", height: c.height, width: c.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass(typeof a.ghost == "string" ? a.ghost : ""); b.ghost.appendTo(b.helper) }, resize: function () {
    var b = e(this).data("resizable"); b.ghost && b.ghost.css({ position: "relative",
        height: b.size.height, width: b.size.width
    })
}, stop: function () { var b = e(this).data("resizable"); b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0)) } 
}); e.ui.plugin.add("resizable", "grid", { resize: function () {
    var b = e(this).data("resizable"), a = b.options, c = b.size, d = b.originalSize, f = b.originalPosition, g = b.axis; a.grid = typeof a.grid == "number" ? [a.grid, a.grid] : a.grid; var h = Math.round((c.width - d.width) / (a.grid[0] || 1)) * (a.grid[0] || 1); a = Math.round((c.height - d.height) / (a.grid[1] || 1)) * (a.grid[1] || 1); if (/^(se|s|e)$/.test(g)) {
        b.size.width =
d.width + h; b.size.height = d.height + a
    } else if (/^(ne)$/.test(g)) { b.size.width = d.width + h; b.size.height = d.height + a; b.position.top = f.top - a } else { if (/^(sw)$/.test(g)) { b.size.width = d.width + h; b.size.height = d.height + a } else { b.size.width = d.width + h; b.size.height = d.height + a; b.position.top = f.top - a } b.position.left = f.left - h } 
} 
}); var m = function (b) { return parseInt(b, 10) || 0 }, l = function (b) { return !isNaN(parseInt(b, 10)) } 
})(jQuery);
; /*
 * jQuery UI Selectable 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (e) {
    e.widget("ui.selectable", e.ui.mouse, { options: { appendTo: "body", autoRefresh: true, distance: 0, filter: "*", tolerance: "touch" }, _create: function () {
        var c = this; this.element.addClass("ui-selectable"); this.dragged = false; var f; this.refresh = function () {
            f = e(c.options.filter, c.element[0]); f.each(function () {
                var d = e(this), b = d.offset(); e.data(this, "selectable-item", { element: this, $element: d, left: b.left, top: b.top, right: b.left + d.outerWidth(), bottom: b.top + d.outerHeight(), startselected: false, selected: d.hasClass("ui-selected"),
                    selecting: d.hasClass("ui-selecting"), unselecting: d.hasClass("ui-unselecting")
                })
            })
        }; this.refresh(); this.selectees = f.addClass("ui-selectee"); this._mouseInit(); this.helper = e("<div class='ui-selectable-helper'></div>")
    }, destroy: function () { this.selectees.removeClass("ui-selectee").removeData("selectable-item"); this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"); this._mouseDestroy(); return this }, _mouseStart: function (c) {
        var f = this; this.opos = [c.pageX,
c.pageY]; if (!this.options.disabled) {
            var d = this.options; this.selectees = e(d.filter, this.element[0]); this._trigger("start", c); e(d.appendTo).append(this.helper); this.helper.css({ left: c.clientX, top: c.clientY, width: 0, height: 0 }); d.autoRefresh && this.refresh(); this.selectees.filter(".ui-selected").each(function () {
                var b = e.data(this, "selectable-item"); b.startselected = true; if (!c.metaKey) {
                    b.$element.removeClass("ui-selected"); b.selected = false; b.$element.addClass("ui-unselecting"); b.unselecting = true; f._trigger("unselecting",
c, { unselecting: b.element })
                } 
            }); e(c.target).parents().andSelf().each(function () { var b = e.data(this, "selectable-item"); if (b) { var g = !c.metaKey || !b.$element.hasClass("ui-selected"); b.$element.removeClass(g ? "ui-unselecting" : "ui-selected").addClass(g ? "ui-selecting" : "ui-unselecting"); b.unselecting = !g; b.selecting = g; (b.selected = g) ? f._trigger("selecting", c, { selecting: b.element }) : f._trigger("unselecting", c, { unselecting: b.element }); return false } })
        } 
    }, _mouseDrag: function (c) {
        var f = this; this.dragged = true; if (!this.options.disabled) {
            var d =
this.options, b = this.opos[0], g = this.opos[1], h = c.pageX, i = c.pageY; if (b > h) { var j = h; h = b; b = j } if (g > i) { j = i; i = g; g = j } this.helper.css({ left: b, top: g, width: h - b, height: i - g }); this.selectees.each(function () {
    var a = e.data(this, "selectable-item"); if (!(!a || a.element == f.element[0])) {
        var k = false; if (d.tolerance == "touch") k = !(a.left > h || a.right < b || a.top > i || a.bottom < g); else if (d.tolerance == "fit") k = a.left > b && a.right < h && a.top > g && a.bottom < i; if (k) {
            if (a.selected) { a.$element.removeClass("ui-selected"); a.selected = false } if (a.unselecting) {
                a.$element.removeClass("ui-unselecting");
                a.unselecting = false
            } if (!a.selecting) { a.$element.addClass("ui-selecting"); a.selecting = true; f._trigger("selecting", c, { selecting: a.element }) } 
        } else {
            if (a.selecting) if (c.metaKey && a.startselected) { a.$element.removeClass("ui-selecting"); a.selecting = false; a.$element.addClass("ui-selected"); a.selected = true } else { a.$element.removeClass("ui-selecting"); a.selecting = false; if (a.startselected) { a.$element.addClass("ui-unselecting"); a.unselecting = true } f._trigger("unselecting", c, { unselecting: a.element }) } if (a.selected) if (!c.metaKey &&
!a.startselected) { a.$element.removeClass("ui-selected"); a.selected = false; a.$element.addClass("ui-unselecting"); a.unselecting = true; f._trigger("unselecting", c, { unselecting: a.element }) } 
        } 
    } 
}); return false
        } 
    }, _mouseStop: function (c) {
        var f = this; this.dragged = false; e(".ui-unselecting", this.element[0]).each(function () { var d = e.data(this, "selectable-item"); d.$element.removeClass("ui-unselecting"); d.unselecting = false; d.startselected = false; f._trigger("unselected", c, { unselected: d.element }) }); e(".ui-selecting", this.element[0]).each(function () {
            var d =
e.data(this, "selectable-item"); d.$element.removeClass("ui-selecting").addClass("ui-selected"); d.selecting = false; d.selected = true; d.startselected = true; f._trigger("selected", c, { selected: d.element })
        }); this._trigger("stop", c); this.helper.remove(); return false
    } 
    }); e.extend(e.ui.selectable, { version: "1.8.7" })
})(jQuery);
; /*
 * jQuery UI Sortable 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (d) {
    d.widget("ui.sortable", d.ui.mouse, { widgetEventPrefix: "sort", options: { appendTo: "parent", axis: false, connectWith: false, containment: false, cursor: "auto", cursorAt: false, dropOnEmpty: true, forcePlaceholderSize: false, forceHelperSize: false, grid: false, handle: false, helper: "original", items: "> *", opacity: false, placeholder: false, revert: false, scroll: true, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1E3 }, _create: function () {
        this.containerCache = {}; this.element.addClass("ui-sortable");
        this.refresh(); this.floating = this.items.length ? /left|right/.test(this.items[0].item.css("float")) : false; this.offset = this.element.offset(); this._mouseInit()
    }, destroy: function () { this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable"); this._mouseDestroy(); for (var a = this.items.length - 1; a >= 0; a--) this.items[a].item.removeData("sortable-item"); return this }, _setOption: function (a, b) {
        if (a === "disabled") { this.options[a] = b; this.widget()[b ? "addClass" : "removeClass"]("ui-sortable-disabled") } else d.Widget.prototype._setOption.apply(this,
arguments)
    }, _mouseCapture: function (a, b) {
        if (this.reverting) return false; if (this.options.disabled || this.options.type == "static") return false; this._refreshItems(a); var c = null, e = this; d(a.target).parents().each(function () { if (d.data(this, "sortable-item") == e) { c = d(this); return false } }); if (d.data(a.target, "sortable-item") == e) c = d(a.target); if (!c) return false; if (this.options.handle && !b) { var f = false; d(this.options.handle, c).find("*").andSelf().each(function () { if (this == a.target) f = true }); if (!f) return false } this.currentItem =
c; this._removeCurrentsFromItems(); return true
    }, _mouseStart: function (a, b, c) {
        b = this.options; var e = this; this.currentContainer = this; this.refreshPositions(); this.helper = this._createHelper(a); this._cacheHelperProportions(); this._cacheMargins(); this.scrollParent = this.helper.scrollParent(); this.offset = this.currentItem.offset(); this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }; this.helper.css("position", "absolute"); this.cssPosition = this.helper.css("position"); d.extend(this.offset,
{ click: { left: a.pageX - this.offset.left, top: a.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }); this.originalPosition = this._generatePosition(a); this.originalPageX = a.pageX; this.originalPageY = a.pageY; b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt); this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }; this.helper[0] != this.currentItem[0] && this.currentItem.hide(); this._createPlaceholder(); b.containment && this._setContainment();
        if (b.cursor) { if (d("body").css("cursor")) this._storedCursor = d("body").css("cursor"); d("body").css("cursor", b.cursor) } if (b.opacity) { if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity"); this.helper.css("opacity", b.opacity) } if (b.zIndex) { if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex"); this.helper.css("zIndex", b.zIndex) } if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") this.overflowOffset = this.scrollParent.offset(); this._trigger("start",
a, this._uiHash()); this._preserveHelperProportions || this._cacheHelperProportions(); if (!c) for (c = this.containers.length - 1; c >= 0; c--) this.containers[c]._trigger("activate", a, e._uiHash(this)); if (d.ui.ddmanager) d.ui.ddmanager.current = this; d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a); this.dragging = true; this.helper.addClass("ui-sortable-helper"); this._mouseDrag(a); return true
    }, _mouseDrag: function (a) {
        this.position = this._generatePosition(a); this.positionAbs = this._convertPositionTo("absolute");
        if (!this.lastPositionAbs) this.lastPositionAbs = this.positionAbs; if (this.options.scroll) {
            var b = this.options, c = false; if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < b.scrollSensitivity) this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop + b.scrollSpeed; else if (a.pageY - this.overflowOffset.top < b.scrollSensitivity) this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop - b.scrollSpeed; if (this.overflowOffset.left +
this.scrollParent[0].offsetWidth - a.pageX < b.scrollSensitivity) this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft + b.scrollSpeed; else if (a.pageX - this.overflowOffset.left < b.scrollSensitivity) this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft - b.scrollSpeed
            } else {
                if (a.pageY - d(document).scrollTop() < b.scrollSensitivity) c = d(document).scrollTop(d(document).scrollTop() - b.scrollSpeed); else if (d(window).height() - (a.pageY - d(document).scrollTop()) < b.scrollSensitivity) c = d(document).scrollTop(d(document).scrollTop() +
b.scrollSpeed); if (a.pageX - d(document).scrollLeft() < b.scrollSensitivity) c = d(document).scrollLeft(d(document).scrollLeft() - b.scrollSpeed); else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < b.scrollSensitivity) c = d(document).scrollLeft(d(document).scrollLeft() + b.scrollSpeed)
            } c !== false && d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a)
        } this.positionAbs = this._convertPositionTo("absolute"); if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left +
"px"; if (!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top + "px"; for (b = this.items.length - 1; b >= 0; b--) {
            c = this.items[b]; var e = c.item[0], f = this._intersectsWithPointer(c); if (f) if (e != this.currentItem[0] && this.placeholder[f == 1 ? "next" : "prev"]()[0] != e && !d.ui.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !d.ui.contains(this.element[0], e) : true)) {
                this.direction = f == 1 ? "down" : "up"; if (this.options.tolerance == "pointer" || this._intersectsWithSides(c)) this._rearrange(a,
c); else break; this._trigger("change", a, this._uiHash()); break
            } 
        } this._contactContainers(a); d.ui.ddmanager && d.ui.ddmanager.drag(this, a); this._trigger("sort", a, this._uiHash()); this.lastPositionAbs = this.positionAbs; return false
    }, _mouseStop: function (a, b) {
        if (a) {
            d.ui.ddmanager && !this.options.dropBehaviour && d.ui.ddmanager.drop(this, a); if (this.options.revert) {
                var c = this; b = c.placeholder.offset(); c.reverting = true; d(this.helper).animate({ left: b.left - this.offset.parent.left - c.margins.left + (this.offsetParent[0] ==
document.body ? 0 : this.offsetParent[0].scrollLeft), top: b.top - this.offset.parent.top - c.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                }, parseInt(this.options.revert, 10) || 500, function () { c._clear(a) })
            } else this._clear(a, b); return false
        } 
    }, cancel: function () {
        var a = this; if (this.dragging) {
            this._mouseUp(); this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(); for (var b = this.containers.length - 1; b >= 0; b--) {
                this.containers[b]._trigger("deactivate",
null, a._uiHash(this)); if (this.containers[b].containerCache.over) { this.containers[b]._trigger("out", null, a._uiHash(this)); this.containers[b].containerCache.over = 0 } 
            } 
        } this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]); this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove(); d.extend(this, { helper: null, dragging: false, reverting: false, _noFinalSort: null }); this.domPosition.prev ? d(this.domPosition.prev).after(this.currentItem) :
d(this.domPosition.parent).prepend(this.currentItem); return this
    }, serialize: function (a) { var b = this._getItemsAsjQuery(a && a.connected), c = []; a = a || {}; d(b).each(function () { var e = (d(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[-=_](.+)/); if (e) c.push((a.key || e[1] + "[]") + "=" + (a.key && a.expression ? e[1] : e[2])) }); !c.length && a.key && c.push(a.key + "="); return c.join("&") }, toArray: function (a) {
        var b = this._getItemsAsjQuery(a && a.connected), c = []; a = a || {}; b.each(function () {
            c.push(d(a.item || this).attr(a.attribute ||
"id") || "")
        }); return c
    }, _intersectsWith: function (a) {
        var b = this.positionAbs.left, c = b + this.helperProportions.width, e = this.positionAbs.top, f = e + this.helperProportions.height, g = a.left, h = g + a.width, i = a.top, k = i + a.height, j = this.offset.click.top, l = this.offset.click.left; j = e + j > i && e + j < k && b + l > g && b + l < h; return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? j : g < b +
this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < h && i < e + this.helperProportions.height / 2 && f - this.helperProportions.height / 2 < k
    }, _intersectsWithPointer: function (a) {
        var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height); a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width); b = b && a; a = this._getDragVerticalDirection(); var c = this._getDragHorizontalDirection(); if (!b) return false; return this.floating ? c && c == "right" || a == "down" ? 2 : 1 : a && (a == "down" ?
2 : 1)
    }, _intersectsWithSides: function (a) { var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height); a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width); var c = this._getDragVerticalDirection(), e = this._getDragHorizontalDirection(); return this.floating && e ? e == "right" && a || e == "left" && !a : c && (c == "down" && b || c == "up" && !b) }, _getDragVerticalDirection: function () { var a = this.positionAbs.top - this.lastPositionAbs.top; return a != 0 && (a > 0 ? "down" : "up") },
        _getDragHorizontalDirection: function () { var a = this.positionAbs.left - this.lastPositionAbs.left; return a != 0 && (a > 0 ? "right" : "left") }, refresh: function (a) { this._refreshItems(a); this.refreshPositions(); return this }, _connectWith: function () { var a = this.options; return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith }, _getItemsAsjQuery: function (a) {
            var b = [], c = [], e = this._connectWith(); if (e && a) for (a = e.length - 1; a >= 0; a--) for (var f = d(e[a]), g = f.length - 1; g >= 0; g--) {
                var h = d.data(f[g], "sortable"); if (h && h !=
this && !h.options.disabled) c.push([d.isFunction(h.options.items) ? h.options.items.call(h.element) : d(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
            } c.push([d.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : d(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]); for (a = c.length - 1; a >= 0; a--) c[a][0].each(function () { b.push(this) }); return d(b)
        }, _removeCurrentsFromItems: function () {
            for (var a =
this.currentItem.find(":data(sortable-item)"), b = 0; b < this.items.length; b++) for (var c = 0; c < a.length; c++) a[c] == this.items[b].item[0] && this.items.splice(b, 1)
        }, _refreshItems: function (a) {
            this.items = []; this.containers = [this]; var b = this.items, c = [[d.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, { item: this.currentItem }) : d(this.options.items, this.element), this]], e = this._connectWith(); if (e) for (var f = e.length - 1; f >= 0; f--) for (var g = d(e[f]), h = g.length - 1; h >= 0; h--) {
                var i = d.data(g[h], "sortable");
                if (i && i != this && !i.options.disabled) { c.push([d.isFunction(i.options.items) ? i.options.items.call(i.element[0], a, { item: this.currentItem }) : d(i.options.items, i.element), i]); this.containers.push(i) } 
            } for (f = c.length - 1; f >= 0; f--) { a = c[f][1]; e = c[f][0]; h = 0; for (g = e.length; h < g; h++) { i = d(e[h]); i.data("sortable-item", a); b.push({ item: i, instance: a, width: 0, height: 0, left: 0, top: 0 }) } } 
        }, refreshPositions: function (a) {
            if (this.offsetParent && this.helper) this.offset.parent = this._getParentOffset(); for (var b = this.items.length - 1; b >=
0; b--) { var c = this.items[b], e = this.options.toleranceElement ? d(this.options.toleranceElement, c.item) : c.item; if (!a) { c.width = e.outerWidth(); c.height = e.outerHeight() } e = e.offset(); c.left = e.left; c.top = e.top } if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (b = this.containers.length - 1; b >= 0; b--) {
                e = this.containers[b].element.offset(); this.containers[b].containerCache.left = e.left; this.containers[b].containerCache.top = e.top; this.containers[b].containerCache.width =
this.containers[b].element.outerWidth(); this.containers[b].containerCache.height = this.containers[b].element.outerHeight()
            } return this
        }, _createPlaceholder: function (a) {
            var b = a || this, c = b.options; if (!c.placeholder || c.placeholder.constructor == String) {
                var e = c.placeholder; c.placeholder = { element: function () { var f = d(document.createElement(b.currentItem[0].nodeName)).addClass(e || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0]; if (!e) f.style.visibility = "hidden"; return f },
                    update: function (f, g) { if (!(e && !c.forcePlaceholderSize)) { g.height() || g.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)); g.width() || g.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)) } } 
                }
            } b.placeholder = d(c.placeholder.element.call(b.element, b.currentItem)); b.currentItem.after(b.placeholder); c.placeholder.update(b, b.placeholder)
        }, _contactContainers: function (a) {
            for (var b =
null, c = null, e = this.containers.length - 1; e >= 0; e--) if (!d.ui.contains(this.currentItem[0], this.containers[e].element[0])) if (this._intersectsWith(this.containers[e].containerCache)) { if (!(b && d.ui.contains(this.containers[e].element[0], b.element[0]))) { b = this.containers[e]; c = e } } else if (this.containers[e].containerCache.over) { this.containers[e]._trigger("out", a, this._uiHash(this)); this.containers[e].containerCache.over = 0 } if (b) if (this.containers.length === 1) {
                this.containers[c]._trigger("over", a, this._uiHash(this));
                this.containers[c].containerCache.over = 1
            } else if (this.currentContainer != this.containers[c]) {
                b = 1E4; e = null; for (var f = this.positionAbs[this.containers[c].floating ? "left" : "top"], g = this.items.length - 1; g >= 0; g--) if (d.ui.contains(this.containers[c].element[0], this.items[g].item[0])) { var h = this.items[g][this.containers[c].floating ? "left" : "top"]; if (Math.abs(h - f) < b) { b = Math.abs(h - f); e = this.items[g] } } if (e || this.options.dropOnEmpty) {
                    this.currentContainer = this.containers[c]; e ? this._rearrange(a, e, null, true) : this._rearrange(a,
null, this.containers[c].element, true); this._trigger("change", a, this._uiHash()); this.containers[c]._trigger("change", a, this._uiHash(this)); this.options.placeholder.update(this.currentContainer, this.placeholder); this.containers[c]._trigger("over", a, this._uiHash(this)); this.containers[c].containerCache.over = 1
                } 
            } 
        }, _createHelper: function (a) {
            var b = this.options; a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a, this.currentItem])) : b.helper == "clone" ? this.currentItem.clone() : this.currentItem; a.parents("body").length ||
d(b.appendTo != "parent" ? b.appendTo : this.currentItem[0].parentNode)[0].appendChild(a[0]); if (a[0] == this.currentItem[0]) this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }; if (a[0].style.width == "" || b.forceHelperSize) a.width(this.currentItem.width()); if (a[0].style.height == "" || b.forceHelperSize) a.height(this.currentItem.height()); return a
        }, _adjustOffsetFromHelper: function (a) {
            if (typeof a ==
"string") a = a.split(" "); if (d.isArray(a)) a = { left: +a[0], top: +a[1] || 0 }; if ("left" in a) this.offset.click.left = a.left + this.margins.left; if ("right" in a) this.offset.click.left = this.helperProportions.width - a.right + this.margins.left; if ("top" in a) this.offset.click.top = a.top + this.margins.top; if ("bottom" in a) this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top
        }, _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent(); var a = this.offsetParent.offset(); if (this.cssPosition ==
"absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) { a.left += this.scrollParent.scrollLeft(); a.top += this.scrollParent.scrollTop() } if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie) a = { top: 0, left: 0 }; return { top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        }, _getRelativeOffset: function () {
            if (this.cssPosition ==
"relative") { var a = this.currentItem.position(); return { top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()} } else return { top: 0, left: 0}
        }, _cacheMargins: function () { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0} }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight()} },
        _setContainment: function () {
            var a = this.options; if (a.containment == "parent") a.containment = this.helper[0].parentNode; if (a.containment == "document" || a.containment == "window") this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, d(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (d(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height -
this.margins.top]; if (!/^(document|window|parent)$/.test(a.containment)) {
                var b = d(a.containment)[0]; a = d(a.containment).offset(); var c = d(b).css("overflow") != "hidden"; this.containment = [a.left + (parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0) - this.margins.left, a.top + (parseInt(d(b).css("borderTopWidth"), 10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0) - this.margins.top, a.left + (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"),
10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, a.top + (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"), 10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            } 
        }, _convertPositionTo: function (a, b) {
            if (!b) b = this.position; a = a == "absolute" ? 1 : -1; var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ?
this.offsetParent : this.scrollParent, e = /(html|body)/i.test(c[0].tagName); return { top: b.top + this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : c.scrollTop()) * a), left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : c.scrollLeft()) * a)}
        }, _generatePosition: function (a) {
            var b =
this.options, c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, e = /(html|body)/i.test(c[0].tagName); if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) this.offset.relative = this._getRelativeOffset(); var f = a.pageX, g = a.pageY; if (this.originalPosition) {
                if (this.containment) {
                    if (a.pageX - this.offset.click.left < this.containment[0]) f = this.containment[0] +
this.offset.click.left; if (a.pageY - this.offset.click.top < this.containment[1]) g = this.containment[1] + this.offset.click.top; if (a.pageX - this.offset.click.left > this.containment[2]) f = this.containment[2] + this.offset.click.left; if (a.pageY - this.offset.click.top > this.containment[3]) g = this.containment[3] + this.offset.click.top
                } if (b.grid) {
                    g = this.originalPageY + Math.round((g - this.originalPageY) / b.grid[1]) * b.grid[1]; g = this.containment ? !(g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ?
g : !(g - this.offset.click.top < this.containment[1]) ? g - b.grid[1] : g + b.grid[1] : g; f = this.originalPageX + Math.round((f - this.originalPageX) / b.grid[0]) * b.grid[0]; f = this.containment ? !(f - this.offset.click.left < this.containment[0] || f - this.offset.click.left > this.containment[2]) ? f : !(f - this.offset.click.left < this.containment[0]) ? f - b.grid[0] : f + b.grid[0] : f
                } 
            } return { top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (d.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() :
e ? 0 : c.scrollTop()), left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : c.scrollLeft())
            }
        }, _rearrange: function (a, b, c, e) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling); this.counter = this.counter ? ++this.counter : 1; var f = this, g = this.counter; window.setTimeout(function () {
                g ==
f.counter && f.refreshPositions(!e)
            }, 0)
        }, _clear: function (a, b) {
            this.reverting = false; var c = []; !this._noFinalSort && this.currentItem[0].parentNode && this.placeholder.before(this.currentItem); this._noFinalSort = null; if (this.helper[0] == this.currentItem[0]) { for (var e in this._storedCSS) if (this._storedCSS[e] == "auto" || this._storedCSS[e] == "static") this._storedCSS[e] = ""; this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") } else this.currentItem.show(); this.fromOutside && !b && c.push(function (f) {
                this._trigger("receive",
f, this._uiHash(this.fromOutside))
            }); if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !b) c.push(function (f) { this._trigger("update", f, this._uiHash()) }); if (!d.ui.contains(this.element[0], this.currentItem[0])) {
                b || c.push(function (f) { this._trigger("remove", f, this._uiHash()) }); for (e = this.containers.length - 1; e >= 0; e--) if (d.ui.contains(this.containers[e].element[0], this.currentItem[0]) && !b) {
                    c.push(function (f) {
                        return function (g) {
                            f._trigger("receive",
g, this._uiHash(this))
                        } 
                    } .call(this, this.containers[e])); c.push(function (f) { return function (g) { f._trigger("update", g, this._uiHash(this)) } } .call(this, this.containers[e]))
                } 
            } for (e = this.containers.length - 1; e >= 0; e--) {
                b || c.push(function (f) { return function (g) { f._trigger("deactivate", g, this._uiHash(this)) } } .call(this, this.containers[e])); if (this.containers[e].containerCache.over) {
                    c.push(function (f) { return function (g) { f._trigger("out", g, this._uiHash(this)) } } .call(this, this.containers[e])); this.containers[e].containerCache.over =
0
                } 
            } this._storedCursor && d("body").css("cursor", this._storedCursor); this._storedOpacity && this.helper.css("opacity", this._storedOpacity); if (this._storedZIndex) this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex); this.dragging = false; if (this.cancelHelperRemoval) { if (!b) { this._trigger("beforeStop", a, this._uiHash()); for (e = 0; e < c.length; e++) c[e].call(this, a); this._trigger("stop", a, this._uiHash()) } return false } b || this._trigger("beforeStop", a, this._uiHash()); this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.helper[0] != this.currentItem[0] && this.helper.remove(); this.helper = null; if (!b) { for (e = 0; e < c.length; e++) c[e].call(this, a); this._trigger("stop", a, this._uiHash()) } this.fromOutside = false; return true
        }, _trigger: function () { d.Widget.prototype._trigger.apply(this, arguments) === false && this.cancel() }, _uiHash: function (a) { var b = a || this; return { helper: b.helper, placeholder: b.placeholder || d([]), position: b.position, originalPosition: b.originalPosition, offset: b.positionAbs, item: b.currentItem, sender: a ? a.element : null} } 
    });
    d.extend(d.ui.sortable, { version: "1.8.7" })
})(jQuery);
; /*
 * jQuery UI Accordion 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function (c) {
    c.widget("ui.accordion", { options: { active: 0, animated: "slide", autoHeight: true, clearStyle: false, collapsible: false, event: "click", fillSpace: false, header: "> li > :first-child,> :not(li):even", icons: { header: "ui-icon-triangle-1-e", headerSelected: "ui-icon-triangle-1-s" }, navigation: false, navigationFilter: function () { return this.href.toLowerCase() === location.href.toLowerCase() } }, _create: function () {
        var a = this, b = a.options; a.running = 0; a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
        a.headers = a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () { b.disabled || c(this).addClass("ui-state-hover") }).bind("mouseleave.accordion", function () { b.disabled || c(this).removeClass("ui-state-hover") }).bind("focus.accordion", function () { b.disabled || c(this).addClass("ui-state-focus") }).bind("blur.accordion", function () { b.disabled || c(this).removeClass("ui-state-focus") }); a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
        if (b.navigation) { var d = a.element.find("a").filter(b.navigationFilter).eq(0); if (d.length) { var f = d.closest(".ui-accordion-header"); a.active = f.length ? f : d.closest(".ui-accordion-content").prev() } } a.active = a._findActive(a.active || b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"); a.active.next().addClass("ui-accordion-content-active"); a._createIcons(); a.resize(); a.element.attr("role", "tablist"); a.headers.attr("role", "tab").bind("keydown.accordion",
function (g) { return a._keydown(g) }).next().attr("role", "tabpanel"); a.headers.not(a.active || "").attr({ "aria-expanded": "false", tabIndex: -1 }).next().hide(); a.active.length ? a.active.attr({ "aria-expanded": "true", tabIndex: 0 }) : a.headers.eq(0).attr("tabIndex", 0); c.browser.safari || a.headers.find("a").attr("tabIndex", -1); b.event && a.headers.bind(b.event.split(" ").join(".accordion ") + ".accordion", function (g) { a._clickHandler.call(a, g, this); g.preventDefault() })
    }, _createIcons: function () {
        var a = this.options; if (a.icons) {
            c("<span></span>").addClass("ui-icon " +
a.icons.header).prependTo(this.headers); this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected); this.element.addClass("ui-accordion-icons")
        } 
    }, _destroyIcons: function () { this.headers.children(".ui-icon").remove(); this.element.removeClass("ui-accordion-icons") }, destroy: function () {
        var a = this.options; this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"); this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabIndex");
        this.headers.find("a").removeAttr("tabIndex"); this._destroyIcons(); var b = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled"); if (a.autoHeight || a.fillHeight) b.css("height", ""); return c.Widget.prototype.destroy.call(this)
    }, _setOption: function (a, b) {
        c.Widget.prototype._setOption.apply(this, arguments); a == "active" && this.activate(b); if (a == "icons") {
            this._destroyIcons();
            b && this._createIcons()
        } if (a == "disabled") this.headers.add(this.headers.next())[b ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
    }, _keydown: function (a) {
        if (!(this.options.disabled || a.altKey || a.ctrlKey)) {
            var b = c.ui.keyCode, d = this.headers.length, f = this.headers.index(a.target), g = false; switch (a.keyCode) {
                case b.RIGHT: case b.DOWN: g = this.headers[(f + 1) % d]; break; case b.LEFT: case b.UP: g = this.headers[(f - 1 + d) % d]; break; case b.SPACE: case b.ENTER: this._clickHandler({ target: a.target }, a.target);
                    a.preventDefault()
            } if (g) { c(a.target).attr("tabIndex", -1); c(g).attr("tabIndex", 0); g.focus(); return false } return true
        } 
    }, resize: function () {
        var a = this.options, b; if (a.fillSpace) {
            if (c.browser.msie) { var d = this.element.parent().css("overflow"); this.element.parent().css("overflow", "hidden") } b = this.element.parent().height(); c.browser.msie && this.element.parent().css("overflow", d); this.headers.each(function () { b -= c(this).outerHeight(true) }); this.headers.next().each(function () {
                c(this).height(Math.max(0, b - c(this).innerHeight() +
c(this).height()))
            }).css("overflow", "auto")
        } else if (a.autoHeight) { b = 0; this.headers.next().each(function () { b = Math.max(b, c(this).height("").height()) }).height(b) } return this
    }, activate: function (a) { this.options.active = a; a = this._findActive(a)[0]; this._clickHandler({ target: a }, a); return this }, _findActive: function (a) { return a ? typeof a === "number" ? this.headers.filter(":eq(" + a + ")") : this.headers.not(this.headers.not(a)) : a === false ? c([]) : this.headers.filter(":eq(0)") }, _clickHandler: function (a, b) {
        var d = this.options;
        if (!d.disabled) if (a.target) {
            a = c(a.currentTarget || b); b = a[0] === this.active[0]; d.active = d.collapsible && b ? false : this.headers.index(a); if (!(this.running || !d.collapsible && b)) {
                this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header); if (!b) {
                    a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);
                    a.next().addClass("ui-accordion-content-active")
                } h = a.next(); f = this.active.next(); g = { options: d, newHeader: b && d.collapsible ? c([]) : a, oldHeader: this.active, newContent: b && d.collapsible ? c([]) : h, oldContent: f }; d = this.headers.index(this.active[0]) > this.headers.index(a[0]); this.active = b ? c([]) : a; this._toggle(h, f, g, b, d)
            } 
        } else if (d.collapsible) {
            this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
            this.active.next().addClass("ui-accordion-content-active"); var f = this.active.next(), g = { options: d, newHeader: c([]), oldHeader: d.active, newContent: c([]), oldContent: f }, h = this.active = c([]); this._toggle(h, f, g)
        } 
    }, _toggle: function (a, b, d, f, g) {
        var h = this, e = h.options; h.toShow = a; h.toHide = b; h.data = d; var j = function () { if (h) return h._completed.apply(h, arguments) }; h._trigger("changestart", null, h.data); h.running = b.size() === 0 ? a.size() : b.size(); if (e.animated) {
            d = {}; d = e.collapsible && f ? { toShow: c([]), toHide: b, complete: j,
                down: g, autoHeight: e.autoHeight || e.fillSpace
            } : { toShow: a, toHide: b, complete: j, down: g, autoHeight: e.autoHeight || e.fillSpace }; if (!e.proxied) e.proxied = e.animated; if (!e.proxiedDuration) e.proxiedDuration = e.duration; e.animated = c.isFunction(e.proxied) ? e.proxied(d) : e.proxied; e.duration = c.isFunction(e.proxiedDuration) ? e.proxiedDuration(d) : e.proxiedDuration; f = c.ui.accordion.animations; var i = e.duration, k = e.animated; if (k && !f[k] && !c.easing[k]) k = "slide"; f[k] || (f[k] = function (l) { this.slide(l, { easing: k, duration: i || 700 }) });
            f[k](d)
        } else { if (e.collapsible && f) a.toggle(); else { b.hide(); a.show() } j(true) } b.prev().attr({ "aria-expanded": "false", tabIndex: -1 }).blur(); a.prev().attr({ "aria-expanded": "true", tabIndex: 0 }).focus()
    }, _completed: function (a) { this.running = a ? 0 : --this.running; if (!this.running) { this.options.clearStyle && this.toShow.add(this.toHide).css({ height: "", overflow: "" }); this.toHide.removeClass("ui-accordion-content-active"); this._trigger("change", null, this.data) } } 
    }); c.extend(c.ui.accordion, { version: "1.8.7", animations: { slide: function (a,
b) {
        a = c.extend({ easing: "swing", duration: 300 }, a, b); if (a.toHide.size()) if (a.toShow.size()) {
            var d = a.toShow.css("overflow"), f = 0, g = {}, h = {}, e; b = a.toShow; e = b[0].style.width; b.width(parseInt(b.parent().width(), 10) - parseInt(b.css("paddingLeft"), 10) - parseInt(b.css("paddingRight"), 10) - (parseInt(b.css("borderLeftWidth"), 10) || 0) - (parseInt(b.css("borderRightWidth"), 10) || 0)); c.each(["height", "paddingTop", "paddingBottom"], function (j, i) {
                h[i] = "hide"; j = ("" + c.css(a.toShow[0], i)).match(/^([\d+-.]+)(.*)$/); g[i] = { value: j[1],
                    unit: j[2] || "px"
                }
            }); a.toShow.css({ height: 0, overflow: "hidden" }).show(); a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(h, { step: function (j, i) { if (i.prop == "height") f = i.end - i.start === 0 ? 0 : (i.now - i.start) / (i.end - i.start); a.toShow[0].style[i.prop] = f * g[i.prop].value + g[i.prop].unit }, duration: a.duration, easing: a.easing, complete: function () { a.autoHeight || a.toShow.css("height", ""); a.toShow.css({ width: e, overflow: d }); a.complete() } })
        } else a.toHide.animate({ height: "hide", paddingTop: "hide",
            paddingBottom: "hide"
        }, a); else a.toShow.animate({ height: "show", paddingTop: "show", paddingBottom: "show" }, a)
    }, bounceslide: function (a) { this.slide(a, { easing: a.down ? "easeOutBounce" : "swing", duration: a.down ? 1E3 : 200 }) } 
    }
    })
})(jQuery);
; /*
 * jQuery UI Autocomplete 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function (d) {
    d.widget("ui.autocomplete", { options: { appendTo: "body", delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null }, _create: function () {
        var a = this, b = this.element[0].ownerDocument, f; this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({ role: "textbox", "aria-autocomplete": "list", "aria-haspopup": "true" }).bind("keydown.autocomplete", function (c) {
            if (!(a.options.disabled || a.element.attr("readonly"))) {
                f = false; var e = d.ui.keyCode; switch (c.keyCode) {
                    case e.PAGE_UP: a._move("previousPage",
c); break; case e.PAGE_DOWN: a._move("nextPage", c); break; case e.UP: a._move("previous", c); c.preventDefault(); break; case e.DOWN: a._move("next", c); c.preventDefault(); break; case e.ENTER: case e.NUMPAD_ENTER: if (a.menu.active) { f = true; c.preventDefault() } case e.TAB: if (!a.menu.active) return; a.menu.select(c); break; case e.ESCAPE: a.element.val(a.term); a.close(c); break; default: clearTimeout(a.searching); a.searching = setTimeout(function () { if (a.term != a.element.val()) { a.selectedItem = null; a.search(null, c) } }, a.options.delay);
                        break
                } 
            } 
        }).bind("keypress.autocomplete", function (c) { if (f) { f = false; c.preventDefault() } }).bind("focus.autocomplete", function () { if (!a.options.disabled) { a.selectedItem = null; a.previous = a.element.val() } }).bind("blur.autocomplete", function (c) { if (!a.options.disabled) { clearTimeout(a.searching); a.closing = setTimeout(function () { a.close(c); a._change(c) }, 150) } }); this._initSource(); this.response = function () { return a._response.apply(a, arguments) }; this.menu = d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo ||
"body", b)[0]).mousedown(function (c) { var e = a.menu.element[0]; d(c.target).closest(".ui-menu-item").length || setTimeout(function () { d(document).one("mousedown", function (g) { g.target !== a.element[0] && g.target !== e && !d.ui.contains(e, g.target) && a.close() }) }, 1); setTimeout(function () { clearTimeout(a.closing) }, 13) }).menu({ focus: function (c, e) { e = e.item.data("item.autocomplete"); false !== a._trigger("focus", c, { item: e }) && /^key/.test(c.originalEvent.type) && a.element.val(e.value) }, selected: function (c, e) {
    var g = e.item.data("item.autocomplete"),
h = a.previous; if (a.element[0] !== b.activeElement) { a.element.focus(); a.previous = h; setTimeout(function () { a.previous = h; a.selectedItem = g }, 1) } false !== a._trigger("select", c, { item: g }) && a.element.val(g.value); a.term = a.element.val(); a.close(c); a.selectedItem = g
}, blur: function () { a.menu.element.is(":visible") && a.element.val() !== a.term && a.element.val(a.term) } 
}).zIndex(this.element.zIndex() + 1).css({ top: 0, left: 0 }).hide().data("menu"); d.fn.bgiframe && this.menu.element.bgiframe()
    }, destroy: function () {
        this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
        this.menu.element.remove(); d.Widget.prototype.destroy.call(this)
    }, _setOption: function (a, b) { d.Widget.prototype._setOption.apply(this, arguments); a === "source" && this._initSource(); if (a === "appendTo") this.menu.element.appendTo(d(b || "body", this.element[0].ownerDocument)[0]) }, _initSource: function () {
        var a = this, b, f; if (d.isArray(this.options.source)) { b = this.options.source; this.source = function (c, e) { e(d.ui.autocomplete.filter(b, c.term)) } } else if (typeof this.options.source === "string") {
            f = this.options.source; this.source =
function (c, e) { a.xhr && a.xhr.abort(); a.xhr = d.ajax({ url: f, data: c, dataType: "json", success: function (g, h, i) { i === a.xhr && e(g); a.xhr = null }, error: function (g) { g === a.xhr && e([]); a.xhr = null } }) } 
        } else this.source = this.options.source
    }, search: function (a, b) { a = a != null ? a : this.element.val(); this.term = this.element.val(); if (a.length < this.options.minLength) return this.close(b); clearTimeout(this.closing); if (this._trigger("search", b) !== false) return this._search(a) }, _search: function (a) {
        this.element.addClass("ui-autocomplete-loading");
        this.source({ term: a }, this.response)
    }, _response: function (a) { if (a && a.length) { a = this._normalize(a); this._suggest(a); this._trigger("open") } else this.close(); this.element.removeClass("ui-autocomplete-loading") }, close: function (a) { clearTimeout(this.closing); if (this.menu.element.is(":visible")) { this.menu.element.hide(); this.menu.deactivate(); this._trigger("close", a) } }, _change: function (a) { this.previous !== this.element.val() && this._trigger("change", a, { item: this.selectedItem }) }, _normalize: function (a) {
        if (a.length &&
a[0].label && a[0].value) return a; return d.map(a, function (b) { if (typeof b === "string") return { label: b, value: b }; return d.extend({ label: b.label || b.value, value: b.value || b.label }, b) })
    }, _suggest: function (a) { var b = this.menu.element.empty().zIndex(this.element.zIndex() + 1); this._renderMenu(b, a); this.menu.deactivate(); this.menu.refresh(); b.show(); this._resizeMenu(); b.position(d.extend({ of: this.element }, this.options.position)) }, _resizeMenu: function () {
        var a = this.menu.element; a.outerWidth(Math.max(a.width("").outerWidth(),
this.element.outerWidth()))
    }, _renderMenu: function (a, b) { var f = this; d.each(b, function (c, e) { f._renderItem(a, e) }) }, _renderItem: function (a, b) { return d("<li></li>").data("item.autocomplete", b).append(d("<a></a>").text(b.label)).appendTo(a) }, _move: function (a, b) { if (this.menu.element.is(":visible")) if (this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a)) { this.element.val(this.term); this.menu.deactivate() } else this.menu[a](b); else this.search(null, b) }, widget: function () { return this.menu.element } 
    });
    d.extend(d.ui.autocomplete, { escapeRegex: function (a) { return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") }, filter: function (a, b) { var f = new RegExp(d.ui.autocomplete.escapeRegex(b), "i"); return d.grep(a, function (c) { return f.test(c.label || c.value || c) }) } })
})(jQuery);
(function (d) {
    d.widget("ui.menu", { _create: function () { var a = this; this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({ role: "listbox", "aria-activedescendant": "ui-active-menuitem" }).click(function (b) { if (d(b.target).closest(".ui-menu-item a").length) { b.preventDefault(); a.select(b) } }); this.refresh() }, refresh: function () {
        var a = this; this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function (b) { a.activate(b, d(this).parent()) }).mouseleave(function () { a.deactivate() })
    }, activate: function (a, b) { this.deactivate(); if (this.hasScroll()) { var f = b.offset().top - this.element.offset().top, c = this.element.attr("scrollTop"), e = this.element.height(); if (f < 0) this.element.attr("scrollTop", c + f); else f >= e && this.element.attr("scrollTop", c + f - e + b.height()) } this.active = b.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(); this._trigger("focus", a, { item: b }) },
        deactivate: function () { if (this.active) { this.active.children("a").removeClass("ui-state-hover").removeAttr("id"); this._trigger("blur"); this.active = null } }, next: function (a) { this.move("next", ".ui-menu-item:first", a) }, previous: function (a) { this.move("prev", ".ui-menu-item:last", a) }, first: function () { return this.active && !this.active.prevAll(".ui-menu-item").length }, last: function () { return this.active && !this.active.nextAll(".ui-menu-item").length }, move: function (a, b, f) {
            if (this.active) {
                a = this.active[a + "All"](".ui-menu-item").eq(0);
                a.length ? this.activate(f, a) : this.activate(f, this.element.children(b))
            } else this.activate(f, this.element.children(b))
        }, nextPage: function (a) {
            if (this.hasScroll()) if (!this.active || this.last()) this.activate(a, this.element.children(".ui-menu-item:first")); else {
                var b = this.active.offset().top, f = this.element.height(), c = this.element.children(".ui-menu-item").filter(function () { var e = d(this).offset().top - b - f + d(this).height(); return e < 10 && e > -10 }); c.length || (c = this.element.children(".ui-menu-item:last")); this.activate(a,
c)
            } else this.activate(a, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        }, previousPage: function (a) {
            if (this.hasScroll()) if (!this.active || this.first()) this.activate(a, this.element.children(".ui-menu-item:last")); else {
                var b = this.active.offset().top, f = this.element.height(); result = this.element.children(".ui-menu-item").filter(function () { var c = d(this).offset().top - b + f - d(this).height(); return c < 10 && c > -10 }); result.length || (result = this.element.children(".ui-menu-item:first"));
                this.activate(a, result)
            } else this.activate(a, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        }, hasScroll: function () { return this.element.height() < this.element.attr("scrollHeight") }, select: function (a) { this._trigger("selected", a, { item: this.active }) } 
    })
})(jQuery);
; /*
 * jQuery UI Button 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function (a) {
    var g, i = function (b) { a(":ui-button", b.target.form).each(function () { var c = a(this).data("button"); setTimeout(function () { c.refresh() }, 1) }) }, h = function (b) { var c = b.name, d = b.form, e = a([]); if (c) e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function () { return !this.form }); return e }; a.widget("ui.button", { options: { disabled: null, text: true, label: null, icons: { primary: null, secondary: null} }, _create: function () {
        this.element.closest("form").unbind("reset.button").bind("reset.button",
i); if (typeof this.options.disabled !== "boolean") this.options.disabled = this.element.attr("disabled"); this._determineButtonType(); this.hasTitle = !!this.buttonElement.attr("title"); var b = this, c = this.options, d = this.type === "checkbox" || this.type === "radio", e = "ui-state-hover" + (!d ? " ui-state-active" : ""); if (c.label === null) c.label = this.buttonElement.html(); if (this.element.is(":disabled")) c.disabled = true; this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button",
function () { if (!c.disabled) { a(this).addClass("ui-state-hover"); this === g && a(this).addClass("ui-state-active") } }).bind("mouseleave.button", function () { c.disabled || a(this).removeClass(e) }).bind("focus.button", function () { a(this).addClass("ui-state-focus") }).bind("blur.button", function () { a(this).removeClass("ui-state-focus") }); d && this.element.bind("change.button", function () { b.refresh() }); if (this.type === "checkbox") this.buttonElement.bind("click.button", function () {
    if (c.disabled) return false; a(this).toggleClass("ui-state-active");
    b.buttonElement.attr("aria-pressed", b.element[0].checked)
}); else if (this.type === "radio") this.buttonElement.bind("click.button", function () { if (c.disabled) return false; a(this).addClass("ui-state-active"); b.buttonElement.attr("aria-pressed", true); var f = b.element[0]; h(f).not(f).map(function () { return a(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", false) }); else {
            this.buttonElement.bind("mousedown.button", function () {
                if (c.disabled) return false; a(this).addClass("ui-state-active");
                g = this; a(document).one("mouseup", function () { g = null })
            }).bind("mouseup.button", function () { if (c.disabled) return false; a(this).removeClass("ui-state-active") }).bind("keydown.button", function (f) { if (c.disabled) return false; if (f.keyCode == a.ui.keyCode.SPACE || f.keyCode == a.ui.keyCode.ENTER) a(this).addClass("ui-state-active") }).bind("keyup.button", function () { a(this).removeClass("ui-state-active") }); this.buttonElement.is("a") && this.buttonElement.keyup(function (f) { f.keyCode === a.ui.keyCode.SPACE && a(this).click() })
        } this._setOption("disabled",
c.disabled)
    }, _determineButtonType: function () {
        this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button"; if (this.type === "checkbox" || this.type === "radio") { this.buttonElement = this.element.parents().last().find("label[for=" + this.element.attr("id") + "]"); this.element.addClass("ui-helper-hidden-accessible"); var b = this.element.is(":checked"); b && this.buttonElement.addClass("ui-state-active"); this.buttonElement.attr("aria-pressed", b) } else this.buttonElement =
this.element
    }, widget: function () { return this.buttonElement }, destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"); this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()); this.hasTitle ||
this.buttonElement.removeAttr("title"); a.Widget.prototype.destroy.call(this)
    }, _setOption: function (b, c) { a.Widget.prototype._setOption.apply(this, arguments); if (b === "disabled") c ? this.element.attr("disabled", true) : this.element.removeAttr("disabled"); this._resetButton() }, refresh: function () {
        var b = this.element.is(":disabled"); b !== this.options.disabled && this._setOption("disabled", b); if (this.type === "radio") h(this.element[0]).each(function () {
            a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true) : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", false)
        }); else if (this.type === "checkbox") this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", true) : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", false)
    }, _resetButton: function () {
        if (this.type === "input") this.options.label && this.element.val(this.options.label); else {
            var b = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c = a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), d = this.options.icons, e = d.primary && d.secondary; if (d.primary || d.secondary) {
                b.addClass("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")); d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"); d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"); if (!this.options.text) {
                    b.addClass(e ? "ui-button-icons-only" : "ui-button-icon-only").removeClass("ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary");
                    this.hasTitle || b.attr("title", c)
                } 
            } else b.addClass("ui-button-text-only")
        } 
    } 
    }); a.widget("ui.buttonset", { options: { items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)" }, _create: function () { this.element.addClass("ui-buttonset") }, _init: function () { this.refresh() }, _setOption: function (b, c) { b === "disabled" && this.buttons.button("option", b, c); a.Widget.prototype._setOption.apply(this, arguments) }, refresh: function () { this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () { return a(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end() },
        destroy: function () { this.element.removeClass("ui-buttonset"); this.buttons.map(function () { return a(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"); a.Widget.prototype.destroy.call(this) } 
    })
})(jQuery);
; /*
 * jQuery UI Dialog 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function (c, j) {
    var k = { buttons: true, height: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, width: true }, l = { maxHeight: true, maxWidth: true, minHeight: true, minWidth: true }; c.widget("ui.dialog", { options: { autoOpen: true, buttons: {}, closeOnEscape: true, closeText: "close", dialogClass: "", draggable: true, hide: null, height: "auto", maxHeight: false, maxWidth: false, minHeight: 150, minWidth: 150, modal: false, position: { my: "center", at: "center", collision: "fit", using: function (a) {
        var b = c(this).css(a).offset().top; b < 0 &&
c(this).css("top", a.top - b)
    } 
    }, resizable: true, show: null, stack: true, title: "", width: 300, zIndex: 1E3
    }, _create: function () {
        this.originalTitle = this.element.attr("title"); if (typeof this.originalTitle !== "string") this.originalTitle = ""; this.options.title = this.options.title || this.originalTitle; var a = this, b = a.options, d = b.title || "&#160;", e = c.ui.dialog.getTitleId(a.element), g = (a.uiDialog = c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b.dialogClass).css({ zIndex: b.zIndex }).attr("tabIndex",
-1).css("outline", 0).keydown(function (i) { if (b.closeOnEscape && i.keyCode && i.keyCode === c.ui.keyCode.ESCAPE) { a.close(i); i.preventDefault() } }).attr({ role: "dialog", "aria-labelledby": e }).mousedown(function (i) { a.moveToTop(false, i) }); a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g); var f = (a.uiDialogTitlebar = c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g), h = c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
"button").hover(function () { h.addClass("ui-state-hover") }, function () { h.removeClass("ui-state-hover") }).focus(function () { h.addClass("ui-state-focus") }).blur(function () { h.removeClass("ui-state-focus") }).click(function (i) { a.close(i); return false }).appendTo(f); (a.uiDialogTitlebarCloseText = c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h); c("<span></span>").addClass("ui-dialog-title").attr("id", e).html(d).prependTo(f); if (c.isFunction(b.beforeclose) && !c.isFunction(b.beforeClose)) b.beforeClose =
b.beforeclose; f.find("*").add(f).disableSelection(); b.draggable && c.fn.draggable && a._makeDraggable(); b.resizable && c.fn.resizable && a._makeResizable(); a._createButtons(b.buttons); a._isOpen = false; c.fn.bgiframe && g.bgiframe()
    }, _init: function () { this.options.autoOpen && this.open() }, destroy: function () {
        var a = this; a.overlay && a.overlay.destroy(); a.uiDialog.hide(); a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"); a.uiDialog.remove(); a.originalTitle &&
a.element.attr("title", a.originalTitle); return a
    }, widget: function () { return this.uiDialog }, close: function (a) {
        var b = this, d, e; if (false !== b._trigger("beforeClose", a)) {
            b.overlay && b.overlay.destroy(); b.uiDialog.unbind("keypress.ui-dialog"); b._isOpen = false; if (b.options.hide) b.uiDialog.hide(b.options.hide, function () { b._trigger("close", a) }); else { b.uiDialog.hide(); b._trigger("close", a) } c.ui.dialog.overlay.resize(); if (b.options.modal) {
                d = 0; c(".ui-dialog").each(function () {
                    if (this !== b.uiDialog[0]) {
                        e = c(this).css("z-index");
                        isNaN(e) || (d = Math.max(d, e))
                    } 
                }); c.ui.dialog.maxZ = d
            } return b
        } 
    }, isOpen: function () { return this._isOpen }, moveToTop: function (a, b) {
        var d = this, e = d.options; if (e.modal && !a || !e.stack && !e.modal) return d._trigger("focus", b); if (e.zIndex > c.ui.dialog.maxZ) c.ui.dialog.maxZ = e.zIndex; if (d.overlay) { c.ui.dialog.maxZ += 1; d.overlay.$el.css("z-index", c.ui.dialog.overlay.maxZ = c.ui.dialog.maxZ) } a = { scrollTop: d.element.attr("scrollTop"), scrollLeft: d.element.attr("scrollLeft") }; c.ui.dialog.maxZ += 1; d.uiDialog.css("z-index", c.ui.dialog.maxZ);
        d.element.attr(a); d._trigger("focus", b); return d
    }, open: function () {
        if (!this._isOpen) {
            var a = this, b = a.options, d = a.uiDialog; a.overlay = b.modal ? new c.ui.dialog.overlay(a) : null; a._size(); a._position(b.position); d.show(b.show); a.moveToTop(true); b.modal && d.bind("keypress.ui-dialog", function (e) { if (e.keyCode === c.ui.keyCode.TAB) { var g = c(":tabbable", this), f = g.filter(":first"); g = g.filter(":last"); if (e.target === g[0] && !e.shiftKey) { f.focus(1); return false } else if (e.target === f[0] && e.shiftKey) { g.focus(1); return false } } });
            c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(); a._isOpen = true; a._trigger("open"); return a
        } 
    }, _createButtons: function (a) {
        var b = this, d = false, e = c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), g = c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e); b.uiDialog.find(".ui-dialog-buttonpane").remove(); typeof a === "object" && a !== null && c.each(a, function () { return !(d = true) }); if (d) {
            c.each(a, function (f,
h) { h = c.isFunction(h) ? { click: h, text: f} : h; f = c('<button type="button"></button>').attr(h, true).unbind("click").click(function () { h.click.apply(b.element[0], arguments) }).appendTo(g); c.fn.button && f.button() }); e.appendTo(b.uiDialog)
        } 
    }, _makeDraggable: function () {
        function a(f) { return { position: f.position, offset: f.offset} } var b = this, d = b.options, e = c(document), g; b.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (f, h) {
            g =
d.height === "auto" ? "auto" : c(this).height(); c(this).height(c(this).height()).addClass("ui-dialog-dragging"); b._trigger("dragStart", f, a(h))
        }, drag: function (f, h) { b._trigger("drag", f, a(h)) }, stop: function (f, h) { d.position = [h.position.left - e.scrollLeft(), h.position.top - e.scrollTop()]; c(this).removeClass("ui-dialog-dragging").height(g); b._trigger("dragStop", f, a(h)); c.ui.dialog.overlay.resize() } 
        })
    }, _makeResizable: function (a) {
        function b(f) {
            return { originalPosition: f.originalPosition, originalSize: f.originalSize,
                position: f.position, size: f.size
            }
        } a = a === j ? this.options.resizable : a; var d = this, e = d.options, g = d.uiDialog.css("position"); a = typeof a === "string" ? a : "n,e,s,w,se,sw,ne,nw"; d.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: d.element, maxWidth: e.maxWidth, maxHeight: e.maxHeight, minWidth: e.minWidth, minHeight: d._minHeight(), handles: a, start: function (f, h) { c(this).addClass("ui-dialog-resizing"); d._trigger("resizeStart", f, b(h)) }, resize: function (f, h) { d._trigger("resize", f, b(h)) }, stop: function (f,
h) { c(this).removeClass("ui-dialog-resizing"); e.height = c(this).height(); e.width = c(this).width(); d._trigger("resizeStop", f, b(h)); c.ui.dialog.overlay.resize() } 
        }).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
    }, _minHeight: function () { var a = this.options; return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height) }, _position: function (a) {
        var b = [], d = [0, 0], e; if (a) {
            if (typeof a === "string" || typeof a === "object" && "0" in a) {
                b = a.split ? a.split(" ") : [a[0], a[1]]; if (b.length ===
1) b[1] = b[0]; c.each(["left", "top"], function (g, f) { if (+b[g] === b[g]) { d[g] = b[g]; b[g] = f } }); a = { my: b.join(" "), at: b.join(" "), offset: d.join(" ")}
            } a = c.extend({}, c.ui.dialog.prototype.options.position, a)
        } else a = c.ui.dialog.prototype.options.position; (e = this.uiDialog.is(":visible")) || this.uiDialog.show(); this.uiDialog.css({ top: 0, left: 0 }).position(c.extend({ of: window }, a)); e || this.uiDialog.hide()
    }, _setOptions: function (a) {
        var b = this, d = {}, e = false; c.each(a, function (g, f) {
            b._setOption(g, f); if (g in k) e = true; if (g in
l) d[g] = f
        }); e && this._size(); this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", d)
    }, _setOption: function (a, b) {
        var d = this, e = d.uiDialog; switch (a) {
            case "beforeclose": a = "beforeClose"; break; case "buttons": d._createButtons(b); break; case "closeText": d.uiDialogTitlebarCloseText.text("" + b); break; case "dialogClass": e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b); break; case "disabled": b ? e.addClass("ui-dialog-disabled") : e.removeClass("ui-dialog-disabled");
                break; case "draggable": var g = e.is(":data(draggable)"); g && !b && e.draggable("destroy"); !g && b && d._makeDraggable(); break; case "position": d._position(b); break; case "resizable": (g = e.is(":data(resizable)")) && !b && e.resizable("destroy"); g && typeof b === "string" && e.resizable("option", "handles", b); !g && b !== false && d._makeResizable(b); break; case "title": c(".ui-dialog-title", d.uiDialogTitlebar).html("" + (b || "&#160;")); break
        } c.Widget.prototype._setOption.apply(d, arguments)
    }, _size: function () {
        var a = this.options, b, d, e =
this.uiDialog.is(":visible"); this.element.show().css({ width: "auto", minHeight: 0, height: 0 }); if (a.minWidth > a.width) a.width = a.minWidth; b = this.uiDialog.css({ height: "auto", width: a.width }).height(); d = Math.max(0, a.minHeight - b); if (a.height === "auto") if (c.support.minHeight) this.element.css({ minHeight: d, height: "auto" }); else { this.uiDialog.show(); a = this.element.css("height", "auto").height(); e || this.uiDialog.hide(); this.element.height(Math.max(a, d)) } else this.element.height(Math.max(a.height - b, 0)); this.uiDialog.is(":data(resizable)") &&
this.uiDialog.resizable("option", "minHeight", this._minHeight())
    } 
    }); c.extend(c.ui.dialog, { version: "1.8.7", uuid: 0, maxZ: 0, getTitleId: function (a) { a = a.attr("id"); if (!a) { this.uuid += 1; a = this.uuid } return "ui-dialog-title-" + a }, overlay: function (a) { this.$el = c.ui.dialog.overlay.create(a) } }); c.extend(c.ui.dialog.overlay, { instances: [], oldInstances: [], maxZ: 0, events: c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (a) { return a + ".dialog-overlay" }).join(" "), create: function (a) {
        if (this.instances.length ===
0) { setTimeout(function () { c.ui.dialog.overlay.instances.length && c(document).bind(c.ui.dialog.overlay.events, function (d) { if (c(d.target).zIndex() < c.ui.dialog.overlay.maxZ) return false }) }, 1); c(document).bind("keydown.dialog-overlay", function (d) { if (a.options.closeOnEscape && d.keyCode && d.keyCode === c.ui.keyCode.ESCAPE) { a.close(d); d.preventDefault() } }); c(window).bind("resize.dialog-overlay", c.ui.dialog.overlay.resize) } var b = (this.oldInstances.pop() || c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({ width: this.width(),
    height: this.height()
}); c.fn.bgiframe && b.bgiframe(); this.instances.push(b); return b
    }, destroy: function (a) { var b = c.inArray(a, this.instances); b != -1 && this.oldInstances.push(this.instances.splice(b, 1)[0]); this.instances.length === 0 && c([document, window]).unbind(".dialog-overlay"); a.remove(); var d = 0; c.each(this.instances, function () { d = Math.max(d, this.css("z-index")) }); this.maxZ = d }, height: function () {
        var a, b; if (c.browser.msie && c.browser.version < 7) {
            a = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            b = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight); return a < b ? c(window).height() + "px" : a + "px"
        } else return c(document).height() + "px"
    }, width: function () { var a, b; if (c.browser.msie && c.browser.version < 7) { a = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth); b = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth); return a < b ? c(window).width() + "px" : a + "px" } else return c(document).width() + "px" }, resize: function () {
        var a = c([]); c.each(c.ui.dialog.overlay.instances,
function () { a = a.add(this) }); a.css({ width: 0, height: 0 }).css({ width: c.ui.dialog.overlay.width(), height: c.ui.dialog.overlay.height() })
    } 
    }); c.extend(c.ui.dialog.overlay.prototype, { destroy: function () { c.ui.dialog.overlay.destroy(this.$el) } })
})(jQuery);
; /*
 * jQuery UI Slider 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (d) {
    d.widget("ui.slider", d.ui.mouse, { widgetEventPrefix: "slide", options: { animate: false, distance: 0, max: 100, min: 0, orientation: "horizontal", range: false, step: 1, value: 0, values: null }, _create: function () {
        var b = this, a = this.options; this._mouseSliding = this._keySliding = false; this._animateOff = true; this._handleIndex = null; this._detectOrientation(); this._mouseInit(); this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"); a.disabled && this.element.addClass("ui-slider-disabled ui-disabled");
        this.range = d([]); if (a.range) { if (a.range === true) { this.range = d("<div></div>"); if (!a.values) a.values = [this._valueMin(), this._valueMin()]; if (a.values.length && a.values.length !== 2) a.values = [a.values[0], a.values[0]] } else this.range = d("<div></div>"); this.range.appendTo(this.element).addClass("ui-slider-range"); if (a.range === "min" || a.range === "max") this.range.addClass("ui-slider-range-" + a.range); this.range.addClass("ui-widget-header") } d(".ui-slider-handle", this.element).length === 0 && d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
        if (a.values && a.values.length) for (; d(".ui-slider-handle", this.element).length < a.values.length; ) d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle"); this.handles = d(".ui-slider-handle", this.element).addClass("ui-state-default ui-corner-all"); this.handle = this.handles.eq(0); this.handles.add(this.range).filter("a").click(function (c) { c.preventDefault() }).hover(function () { a.disabled || d(this).addClass("ui-state-hover") }, function () { d(this).removeClass("ui-state-hover") }).focus(function () {
            if (a.disabled) d(this).blur();
            else { d(".ui-slider .ui-state-focus").removeClass("ui-state-focus"); d(this).addClass("ui-state-focus") } 
        }).blur(function () { d(this).removeClass("ui-state-focus") }); this.handles.each(function (c) { d(this).data("index.ui-slider-handle", c) }); this.handles.keydown(function (c) {
            var e = true, f = d(this).data("index.ui-slider-handle"), h, g, i; if (!b.options.disabled) {
                switch (c.keyCode) {
                    case d.ui.keyCode.HOME: case d.ui.keyCode.END: case d.ui.keyCode.PAGE_UP: case d.ui.keyCode.PAGE_DOWN: case d.ui.keyCode.UP: case d.ui.keyCode.RIGHT: case d.ui.keyCode.DOWN: case d.ui.keyCode.LEFT: e =
false; if (!b._keySliding) { b._keySliding = true; d(this).addClass("ui-state-active"); h = b._start(c, f); if (h === false) return } break
                } i = b.options.step; h = b.options.values && b.options.values.length ? (g = b.values(f)) : (g = b.value()); switch (c.keyCode) {
                    case d.ui.keyCode.HOME: g = b._valueMin(); break; case d.ui.keyCode.END: g = b._valueMax(); break; case d.ui.keyCode.PAGE_UP: g = b._trimAlignValue(h + (b._valueMax() - b._valueMin()) / 5); break; case d.ui.keyCode.PAGE_DOWN: g = b._trimAlignValue(h - (b._valueMax() - b._valueMin()) / 5); break; case d.ui.keyCode.UP: case d.ui.keyCode.RIGHT: if (h ===
b._valueMax()) return; g = b._trimAlignValue(h + i); break; case d.ui.keyCode.DOWN: case d.ui.keyCode.LEFT: if (h === b._valueMin()) return; g = b._trimAlignValue(h - i); break
                } b._slide(c, f, g); return e
            } 
        }).keyup(function (c) { var e = d(this).data("index.ui-slider-handle"); if (b._keySliding) { b._keySliding = false; b._stop(c, e); b._change(c, e); d(this).removeClass("ui-state-active") } }); this._refreshValue(); this._animateOff = false
    }, destroy: function () {
        this.handles.remove(); this.range.remove(); this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
        this._mouseDestroy(); return this
    }, _mouseCapture: function (b) {
        var a = this.options, c, e, f, h, g; if (a.disabled) return false; this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }; this.elementOffset = this.element.offset(); c = this._normValueFromMouse({ x: b.pageX, y: b.pageY }); e = this._valueMax() - this._valueMin() + 1; h = this; this.handles.each(function (i) { var j = Math.abs(c - h.values(i)); if (e > j) { e = j; f = d(this); g = i } }); if (a.range === true && this.values(1) === a.min) { g += 1; f = d(this.handles[g]) } if (this._start(b,
g) === false) return false; this._mouseSliding = true; h._handleIndex = g; f.addClass("ui-state-active").focus(); a = f.offset(); this._clickOffset = !d(b.target).parents().andSelf().is(".ui-slider-handle") ? { left: 0, top: 0} : { left: b.pageX - a.left - f.width() / 2, top: b.pageY - a.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0) }; this.handles.hasClass("ui-state-hover") || this._slide(b, g, c); return this._animateOff = true
    }, _mouseStart: function () { return true },
        _mouseDrag: function (b) { var a = this._normValueFromMouse({ x: b.pageX, y: b.pageY }); this._slide(b, this._handleIndex, a); return false }, _mouseStop: function (b) { this.handles.removeClass("ui-state-active"); this._mouseSliding = false; this._stop(b, this._handleIndex); this._change(b, this._handleIndex); this._clickOffset = this._handleIndex = null; return this._animateOff = false }, _detectOrientation: function () { this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal" }, _normValueFromMouse: function (b) {
            var a;
            if (this.orientation === "horizontal") { a = this.elementSize.width; b = b.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0) } else { a = this.elementSize.height; b = b.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0) } a = b / a; if (a > 1) a = 1; if (a < 0) a = 0; if (this.orientation === "vertical") a = 1 - a; b = this._valueMax() - this._valueMin(); return this._trimAlignValue(this._valueMin() + a * b)
        }, _start: function (b, a) {
            var c = { handle: this.handles[a], value: this.value() }; if (this.options.values && this.options.values.length) {
                c.value =
this.values(a); c.values = this.values()
            } return this._trigger("start", b, c)
        }, _slide: function (b, a, c) {
            var e; if (this.options.values && this.options.values.length) { e = this.values(a ? 0 : 1); if (this.options.values.length === 2 && this.options.range === true && (a === 0 && c > e || a === 1 && c < e)) c = e; if (c !== this.values(a)) { e = this.values(); e[a] = c; b = this._trigger("slide", b, { handle: this.handles[a], value: c, values: e }); this.values(a ? 0 : 1); b !== false && this.values(a, c, true) } } else if (c !== this.value()) {
                b = this._trigger("slide", b, { handle: this.handles[a],
                    value: c
                }); b !== false && this.value(c)
            } 
        }, _stop: function (b, a) { var c = { handle: this.handles[a], value: this.value() }; if (this.options.values && this.options.values.length) { c.value = this.values(a); c.values = this.values() } this._trigger("stop", b, c) }, _change: function (b, a) { if (!this._keySliding && !this._mouseSliding) { var c = { handle: this.handles[a], value: this.value() }; if (this.options.values && this.options.values.length) { c.value = this.values(a); c.values = this.values() } this._trigger("change", b, c) } }, value: function (b) {
            if (arguments.length) {
                this.options.value =
this._trimAlignValue(b); this._refreshValue(); this._change(null, 0)
            } return this._value()
        }, values: function (b, a) {
            var c, e, f; if (arguments.length > 1) { this.options.values[b] = this._trimAlignValue(a); this._refreshValue(); this._change(null, b) } if (arguments.length) if (d.isArray(arguments[0])) { c = this.options.values; e = arguments[0]; for (f = 0; f < c.length; f += 1) { c[f] = this._trimAlignValue(e[f]); this._change(null, f) } this._refreshValue() } else return this.options.values && this.options.values.length ? this._values(b) : this.value();
            else return this._values()
        }, _setOption: function (b, a) {
            var c, e = 0; if (d.isArray(this.options.values)) e = this.options.values.length; d.Widget.prototype._setOption.apply(this, arguments); switch (b) {
                case "disabled": if (a) { this.handles.filter(".ui-state-focus").blur(); this.handles.removeClass("ui-state-hover"); this.handles.attr("disabled", "disabled"); this.element.addClass("ui-disabled") } else { this.handles.removeAttr("disabled"); this.element.removeClass("ui-disabled") } break; case "orientation": this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation); this._refreshValue(); break; case "value": this._animateOff = true; this._refreshValue(); this._change(null, 0); this._animateOff = false; break; case "values": this._animateOff = true; this._refreshValue(); for (c = 0; c < e; c += 1) this._change(null, c); this._animateOff = false; break
            } 
        }, _value: function () { var b = this.options.value; return b = this._trimAlignValue(b) }, _values: function (b) {
            var a, c; if (arguments.length) {
                a = this.options.values[b];
                return a = this._trimAlignValue(a)
            } else { a = this.options.values.slice(); for (c = 0; c < a.length; c += 1) a[c] = this._trimAlignValue(a[c]); return a } 
        }, _trimAlignValue: function (b) { if (b <= this._valueMin()) return this._valueMin(); if (b >= this._valueMax()) return this._valueMax(); var a = this.options.step > 0 ? this.options.step : 1, c = (b - this._valueMin()) % a; alignValue = b - c; if (Math.abs(c) * 2 >= a) alignValue += c > 0 ? a : -a; return parseFloat(alignValue.toFixed(5)) }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.options.max },
        _refreshValue: function () {
            var b = this.options.range, a = this.options, c = this, e = !this._animateOff ? a.animate : false, f, h = {}, g, i, j, l; if (this.options.values && this.options.values.length) this.handles.each(function (k) {
                f = (c.values(k) - c._valueMin()) / (c._valueMax() - c._valueMin()) * 100; h[c.orientation === "horizontal" ? "left" : "bottom"] = f + "%"; d(this).stop(1, 1)[e ? "animate" : "css"](h, a.animate); if (c.options.range === true) if (c.orientation === "horizontal") {
                    if (k === 0) c.range.stop(1, 1)[e ? "animate" : "css"]({ left: f + "%" }, a.animate);
                    if (k === 1) c.range[e ? "animate" : "css"]({ width: f - g + "%" }, { queue: false, duration: a.animate })
                } else { if (k === 0) c.range.stop(1, 1)[e ? "animate" : "css"]({ bottom: f + "%" }, a.animate); if (k === 1) c.range[e ? "animate" : "css"]({ height: f - g + "%" }, { queue: false, duration: a.animate }) } g = f
            }); else {
                i = this.value(); j = this._valueMin(); l = this._valueMax(); f = l !== j ? (i - j) / (l - j) * 100 : 0; h[c.orientation === "horizontal" ? "left" : "bottom"] = f + "%"; this.handle.stop(1, 1)[e ? "animate" : "css"](h, a.animate); if (b === "min" && this.orientation === "horizontal") this.range.stop(1,
1)[e ? "animate" : "css"]({ width: f + "%" }, a.animate); if (b === "max" && this.orientation === "horizontal") this.range[e ? "animate" : "css"]({ width: 100 - f + "%" }, { queue: false, duration: a.animate }); if (b === "min" && this.orientation === "vertical") this.range.stop(1, 1)[e ? "animate" : "css"]({ height: f + "%" }, a.animate); if (b === "max" && this.orientation === "vertical") this.range[e ? "animate" : "css"]({ height: 100 - f + "%" }, { queue: false, duration: a.animate })
            } 
        } 
    }); d.extend(d.ui.slider, { version: "1.8.7" })
})(jQuery);
; /*
 * jQuery UI Tabs 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function (d, p) {
    function u() { return ++v } function w() { return ++x } var v = 0, x = 0; d.widget("ui.tabs", { options: { add: null, ajaxOptions: null, cache: false, cookie: null, collapsible: false, disable: null, disabled: [], enable: null, event: "click", fx: null, idPrefix: "ui-tabs-", load: null, panelTemplate: "<div></div>", remove: null, select: null, show: null, spinner: "<em>Loading&#8230;</em>", tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>" }, _create: function () { this._tabify(true) }, _setOption: function (b, e) {
        if (b == "selected") this.options.collapsible &&
e == this.options.selected || this.select(e); else { this.options[b] = e; this._tabify() } 
    }, _tabId: function (b) { return b.title && b.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + u() }, _sanitizeSelector: function (b) { return b.replace(/:/g, "\\:") }, _cookie: function () { var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + w()); return d.cookie.apply(null, [b].concat(d.makeArray(arguments))) }, _ui: function (b, e) { return { tab: b, panel: e, index: this.anchors.index(b)} }, _cleanup: function () {
        this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
            var b =
d(this); b.html(b.data("label.tabs")).removeData("label.tabs")
        })
    }, _tabify: function (b) {
        function e(g, f) { g.css("display", ""); !d.support.opacity && f.opacity && g[0].style.removeAttribute("filter") } var a = this, c = this.options, h = /^#.+/; this.list = this.element.find("ol,ul").eq(0); this.lis = d(" > li:has(a[href])", this.list); this.anchors = this.lis.map(function () { return d("a", this)[0] }); this.panels = d([]); this.anchors.each(function (g, f) {
            var i = d(f).attr("href"), l = i.split("#")[0], q; if (l && (l === location.toString().split("#")[0] ||
(q = d("base")[0]) && l === q.href)) { i = f.hash; f.href = i } if (h.test(i)) a.panels = a.panels.add(a.element.find(a._sanitizeSelector(i))); else if (i && i !== "#") { d.data(f, "href.tabs", i); d.data(f, "load.tabs", i.replace(/#.*$/, "")); i = a._tabId(f); f.href = "#" + i; f = a.element.find("#" + i); if (!f.length) { f = d(c.panelTemplate).attr("id", i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g - 1] || a.list); f.data("destroy.tabs", true) } a.panels = a.panels.add(f) } else c.disabled.push(g)
        }); if (b) {
            this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
            this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"); this.lis.addClass("ui-state-default ui-corner-top"); this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"); if (c.selected === p) {
                location.hash && this.anchors.each(function (g, f) { if (f.hash == location.hash) { c.selected = g; return false } }); if (typeof c.selected !== "number" && c.cookie) c.selected = parseInt(a._cookie(), 10); if (typeof c.selected !== "number" && this.lis.filter(".ui-tabs-selected").length) c.selected =
this.lis.index(this.lis.filter(".ui-tabs-selected")); c.selected = c.selected || (this.lis.length ? 0 : -1)
            } else if (c.selected === null) c.selected = -1; c.selected = c.selected >= 0 && this.anchors[c.selected] || c.selected < 0 ? c.selected : 0; c.disabled = d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"), function (g) { return a.lis.index(g) }))).sort(); d.inArray(c.selected, c.disabled) != -1 && c.disabled.splice(d.inArray(c.selected, c.disabled), 1); this.panels.addClass("ui-tabs-hide"); this.lis.removeClass("ui-tabs-selected ui-state-active");
            if (c.selected >= 0 && this.anchors.length) { a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide"); this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active"); a.element.queue("tabs", function () { a._trigger("show", null, a._ui(a.anchors[c.selected], a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)))) }); this.load(c.selected) } d(window).bind("unload", function () { a.lis.add(a.anchors).unbind(".tabs"); a.lis = a.anchors = a.panels = null })
        } else c.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
        this.element[c.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"); c.cookie && this._cookie(c.selected, c.cookie); b = 0; for (var j; j = this.lis[b]; b++) d(j)[d.inArray(b, c.disabled) != -1 && !d(j).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled"); c.cache === false && this.anchors.removeData("cache.tabs"); this.lis.add(this.anchors).unbind(".tabs"); if (c.event !== "mouseover") {
            var k = function (g, f) { f.is(":not(.ui-state-disabled)") && f.addClass("ui-state-" + g) }, n = function (g, f) {
                f.removeClass("ui-state-" +
g)
            }; this.lis.bind("mouseover.tabs", function () { k("hover", d(this)) }); this.lis.bind("mouseout.tabs", function () { n("hover", d(this)) }); this.anchors.bind("focus.tabs", function () { k("focus", d(this).closest("li")) }); this.anchors.bind("blur.tabs", function () { n("focus", d(this).closest("li")) })
        } var m, o; if (c.fx) if (d.isArray(c.fx)) { m = c.fx[0]; o = c.fx[1] } else m = o = c.fx; var r = o ? function (g, f) {
            d(g).closest("li").addClass("ui-tabs-selected ui-state-active"); f.hide().removeClass("ui-tabs-hide").animate(o, o.duration || "normal",
function () { e(f, o); a._trigger("show", null, a._ui(g, f[0])) })
        } : function (g, f) { d(g).closest("li").addClass("ui-tabs-selected ui-state-active"); f.removeClass("ui-tabs-hide"); a._trigger("show", null, a._ui(g, f[0])) }, s = m ? function (g, f) { f.animate(m, m.duration || "normal", function () { a.lis.removeClass("ui-tabs-selected ui-state-active"); f.addClass("ui-tabs-hide"); e(f, m); a.element.dequeue("tabs") }) } : function (g, f) { a.lis.removeClass("ui-tabs-selected ui-state-active"); f.addClass("ui-tabs-hide"); a.element.dequeue("tabs") };
        this.anchors.bind(c.event + ".tabs", function () {
            var g = this, f = d(g).closest("li"), i = a.panels.filter(":not(.ui-tabs-hide)"), l = a.element.find(a._sanitizeSelector(g.hash)); if (f.hasClass("ui-tabs-selected") && !c.collapsible || f.hasClass("ui-state-disabled") || f.hasClass("ui-state-processing") || a.panels.filter(":animated").length || a._trigger("select", null, a._ui(this, l[0])) === false) { this.blur(); return false } c.selected = a.anchors.index(this); a.abort(); if (c.collapsible) if (f.hasClass("ui-tabs-selected")) {
                c.selected =
-1; c.cookie && a._cookie(c.selected, c.cookie); a.element.queue("tabs", function () { s(g, i) }).dequeue("tabs"); this.blur(); return false
            } else if (!i.length) { c.cookie && a._cookie(c.selected, c.cookie); a.element.queue("tabs", function () { r(g, l) }); a.load(a.anchors.index(this)); this.blur(); return false } c.cookie && a._cookie(c.selected, c.cookie); if (l.length) { i.length && a.element.queue("tabs", function () { s(g, i) }); a.element.queue("tabs", function () { r(g, l) }); a.load(a.anchors.index(this)) } else throw "jQuery UI Tabs: Mismatching fragment identifier.";
            d.browser.msie && this.blur()
        }); this.anchors.bind("click.tabs", function () { return false })
    }, _getIndex: function (b) { if (typeof b == "string") b = this.anchors.index(this.anchors.filter("[href$=" + b + "]")); return b }, destroy: function () {
        var b = this.options; this.abort(); this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"); this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"); this.anchors.each(function () {
            var e =
d.data(this, "href.tabs"); if (e) this.href = e; var a = d(this).unbind(".tabs"); d.each(["href", "load", "cache"], function (c, h) { a.removeData(h + ".tabs") })
        }); this.lis.unbind(".tabs").add(this.panels).each(function () { d.data(this, "destroy.tabs") ? d(this).remove() : d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide") }); b.cookie && this._cookie(null, b.cookie); return this
    }, add: function (b,
e, a) {
        if (a === p) a = this.anchors.length; var c = this, h = this.options; e = d(h.tabTemplate.replace(/#\{href\}/g, b).replace(/#\{label\}/g, e)); b = !b.indexOf("#") ? b.replace("#", "") : this._tabId(d("a", e)[0]); e.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true); var j = c.element.find("#" + b); j.length || (j = d(h.panelTemplate).attr("id", b).data("destroy.tabs", true)); j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"); if (a >= this.lis.length) { e.appendTo(this.list); j.appendTo(this.list[0].parentNode) } else {
            e.insertBefore(this.lis[a]);
            j.insertBefore(this.panels[a])
        } h.disabled = d.map(h.disabled, function (k) { return k >= a ? ++k : k }); this._tabify(); if (this.anchors.length == 1) { h.selected = 0; e.addClass("ui-tabs-selected ui-state-active"); j.removeClass("ui-tabs-hide"); this.element.queue("tabs", function () { c._trigger("show", null, c._ui(c.anchors[0], c.panels[0])) }); this.load(0) } this._trigger("add", null, this._ui(this.anchors[a], this.panels[a])); return this
    }, remove: function (b) {
        b = this._getIndex(b); var e = this.options, a = this.lis.eq(b).remove(), c = this.panels.eq(b).remove();
        if (a.hasClass("ui-tabs-selected") && this.anchors.length > 1) this.select(b + (b + 1 < this.anchors.length ? 1 : -1)); e.disabled = d.map(d.grep(e.disabled, function (h) { return h != b }), function (h) { return h >= b ? --h : h }); this._tabify(); this._trigger("remove", null, this._ui(a.find("a")[0], c[0])); return this
    }, enable: function (b) {
        b = this._getIndex(b); var e = this.options; if (d.inArray(b, e.disabled) != -1) {
            this.lis.eq(b).removeClass("ui-state-disabled"); e.disabled = d.grep(e.disabled, function (a) { return a != b }); this._trigger("enable", null,
this._ui(this.anchors[b], this.panels[b])); return this
        } 
    }, disable: function (b) { b = this._getIndex(b); var e = this.options; if (b != e.selected) { this.lis.eq(b).addClass("ui-state-disabled"); e.disabled.push(b); e.disabled.sort(); this._trigger("disable", null, this._ui(this.anchors[b], this.panels[b])) } return this }, select: function (b) { b = this._getIndex(b); if (b == -1) if (this.options.collapsible && this.options.selected != -1) b = this.options.selected; else return this; this.anchors.eq(b).trigger(this.options.event + ".tabs"); return this },
        load: function (b) {
            b = this._getIndex(b); var e = this, a = this.options, c = this.anchors.eq(b)[0], h = d.data(c, "load.tabs"); this.abort(); if (!h || this.element.queue("tabs").length !== 0 && d.data(c, "cache.tabs")) this.element.dequeue("tabs"); else {
                this.lis.eq(b).addClass("ui-state-processing"); if (a.spinner) { var j = d("span", c); j.data("label.tabs", j.html()).html(a.spinner) } this.xhr = d.ajax(d.extend({}, a.ajaxOptions, { url: h, success: function (k, n) {
                    e.element.find(e._sanitizeSelector(c.hash)).html(k); e._cleanup(); a.cache && d.data(c,
"cache.tabs", true); e._trigger("load", null, e._ui(e.anchors[b], e.panels[b])); try { a.ajaxOptions.success(k, n) } catch (m) { } 
                }, error: function (k, n) { e._cleanup(); e._trigger("load", null, e._ui(e.anchors[b], e.panels[b])); try { a.ajaxOptions.error(k, n, b, c) } catch (m) { } } 
                })); e.element.dequeue("tabs"); return this
            } 
        }, abort: function () { this.element.queue([]); this.panels.stop(false, true); this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)); if (this.xhr) { this.xhr.abort(); delete this.xhr } this._cleanup(); return this },
        url: function (b, e) { this.anchors.eq(b).removeData("cache.tabs").data("load.tabs", e); return this }, length: function () { return this.anchors.length } 
    }); d.extend(d.ui.tabs, { version: "1.8.7" }); d.extend(d.ui.tabs.prototype, { rotation: null, rotate: function (b, e) {
        var a = this, c = this.options, h = a._rotate || (a._rotate = function (j) { clearTimeout(a.rotation); a.rotation = setTimeout(function () { var k = c.selected; a.select(++k < a.anchors.length ? k : 0) }, b); j && j.stopPropagation() }); e = a._unrotate || (a._unrotate = !e ? function (j) {
            j.clientX &&
a.rotate(null)
        } : function () { t = c.selected; h() }); if (b) { this.element.bind("tabsshow", h); this.anchors.bind(c.event + ".tabs", e); h() } else { clearTimeout(a.rotation); this.element.unbind("tabsshow", h); this.anchors.unbind(c.event + ".tabs", e); delete this._rotate; delete this._unrotate } return this
    } 
    })
})(jQuery);
; /*
 * jQuery UI Datepicker 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function (d, G) {
    function K() {
        this.debug = false; this._curInst = null; this._keyEvent = false; this._disabledInputs = []; this._inDialog = this._datepickerShowing = false; this._mainDivId = "ui-datepicker-div"; this._inlineClass = "ui-datepicker-inline"; this._appendClass = "ui-datepicker-append"; this._triggerClass = "ui-datepicker-trigger"; this._dialogClass = "ui-datepicker-dialog"; this._disableClass = "ui-datepicker-disabled"; this._unselectableClass = "ui-datepicker-unselectable"; this._currentClass = "ui-datepicker-current-day"; this._dayOverClass =
"ui-datepicker-days-cell-over"; this.regional = []; this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su",
"Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: ""
}; this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10",
    minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false
}; d.extend(this._defaults, this.regional[""]); this.dpDiv = d('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')
    } function E(a, b) {
        d.extend(a, b); for (var c in b) if (b[c] ==
null || b[c] == G) a[c] = b[c]; return a
    } d.extend(d.ui, { datepicker: { version: "1.8.7"} }); var y = (new Date).getTime(); d.extend(K.prototype, { markerClassName: "hasDatepicker", log: function () { this.debug && console.log.apply("", arguments) }, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (a) { E(this._defaults, a || {}); return this }, _attachDatepicker: function (a, b) {
        var c = null; for (var e in this._defaults) { var f = a.getAttribute("date:" + e); if (f) { c = c || {}; try { c[e] = eval(f) } catch (h) { c[e] = f } } } e = a.nodeName.toLowerCase();
        f = e == "div" || e == "span"; if (!a.id) { this.uuid += 1; a.id = "dp" + this.uuid } var i = this._newInst(d(a), f); i.settings = d.extend({}, b || {}, c || {}); if (e == "input") this._connectDatepicker(a, i); else f && this._inlineDatepicker(a, i)
    }, _newInst: function (a, b) { return { id: a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"), input: a, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: b, dpDiv: !b ? this.dpDiv : d('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')} },
        _connectDatepicker: function (a, b) { var c = d(a); b.append = d([]); b.trigger = d([]); if (!c.hasClass(this.markerClassName)) { this._attachments(c, b); c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, f, h) { b.settings[f] = h }).bind("getData.datepicker", function (e, f) { return this._get(b, f) }); this._autoSize(b); d.data(a, "datepicker", b) } }, _attachments: function (a, b) {
            var c = this._get(b, "appendText"), e = this._get(b, "isRTL"); b.append &&
b.append.remove(); if (c) { b.append = d('<span class="' + this._appendClass + '">' + c + "</span>"); a[e ? "before" : "after"](b.append) } a.unbind("focus", this._showDatepicker); b.trigger && b.trigger.remove(); c = this._get(b, "showOn"); if (c == "focus" || c == "both") a.focus(this._showDatepicker); if (c == "button" || c == "both") {
                c = this._get(b, "buttonText"); var f = this._get(b, "buttonImage"); b.trigger = d(this._get(b, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({ src: f, alt: c, title: c }) : d('<button type="button"></button>').addClass(this._triggerClass).html(f ==
"" ? c : d("<img/>").attr({ src: f, alt: c, title: c }))); a[e ? "before" : "after"](b.trigger); b.trigger.click(function () { d.datepicker._datepickerShowing && d.datepicker._lastInput == a[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(a[0]); return false })
            } 
        }, _autoSize: function (a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b = new Date(2009, 11, 20), c = this._get(a, "dateFormat"); if (c.match(/[DM]/)) {
                    var e = function (f) { for (var h = 0, i = 0, g = 0; g < f.length; g++) if (f[g].length > h) { h = f[g].length; i = g } return i }; b.setMonth(e(this._get(a,
c.match(/MM/) ? "monthNames" : "monthNamesShort"))); b.setDate(e(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                } a.input.attr("size", this._formatDate(a, b).length)
            } 
        }, _inlineDatepicker: function (a, b) {
            var c = d(a); if (!c.hasClass(this.markerClassName)) {
                c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function (e, f, h) { b.settings[f] = h }).bind("getData.datepicker", function (e, f) { return this._get(b, f) }); d.data(a, "datepicker", b); this._setDate(b, this._getDefaultDate(b),
true); this._updateDatepicker(b); this._updateAlternate(b); b.dpDiv.show()
            } 
        }, _dialogDatepicker: function (a, b, c, e, f) {
            a = this._dialogInst; if (!a) { this.uuid += 1; this._dialogInput = d('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'); this._dialogInput.keydown(this._doKeyDown); d("body").append(this._dialogInput); a = this._dialogInst = this._newInst(this._dialogInput, false); a.settings = {}; d.data(this._dialogInput[0], "datepicker", a) } E(a.settings, e || {});
            b = b && b.constructor == Date ? this._formatDate(a, b) : b; this._dialogInput.val(b); this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null; if (!this._pos) this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]; this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"); a.settings.onSelect = c; this._inDialog = true; this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]); d.blockUI && d.blockUI(this.dpDiv); d.data(this._dialogInput[0], "datepicker", a); return this
        }, _destroyDatepicker: function (a) {
            var b = d(a), c = d.data(a, "datepicker"); if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase(); d.removeData(a, "datepicker"); if (e == "input") {
                    c.append.remove(); c.trigger.remove(); b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup",
this._doKeyUp)
                } else if (e == "div" || e == "span") b.removeClass(this.markerClassName).empty()
            } 
        }, _enableDatepicker: function (a) {
            var b = d(a), c = d.data(a, "datepicker"); if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase(); if (e == "input") { a.disabled = false; c.trigger.filter("button").each(function () { this.disabled = false }).end().filter("img").css({ opacity: "1.0", cursor: "" }) } else if (e == "div" || e == "span") b.children("." + this._inlineClass).children().removeClass("ui-state-disabled"); this._disabledInputs = d.map(this._disabledInputs,
function (f) { return f == a ? null : f })
            } 
        }, _disableDatepicker: function (a) {
            var b = d(a), c = d.data(a, "datepicker"); if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase(); if (e == "input") { a.disabled = true; c.trigger.filter("button").each(function () { this.disabled = true }).end().filter("img").css({ opacity: "0.5", cursor: "default" }) } else if (e == "div" || e == "span") b.children("." + this._inlineClass).children().addClass("ui-state-disabled"); this._disabledInputs = d.map(this._disabledInputs, function (f) {
                    return f == a ? null :
f
                }); this._disabledInputs[this._disabledInputs.length] = a
            } 
        }, _isDisabledDatepicker: function (a) { if (!a) return false; for (var b = 0; b < this._disabledInputs.length; b++) if (this._disabledInputs[b] == a) return true; return false }, _getInst: function (a) { try { return d.data(a, "datepicker") } catch (b) { throw "Missing instance data for this datepicker"; } }, _optionDatepicker: function (a, b, c) {
            var e = this._getInst(a); if (arguments.length == 2 && typeof b == "string") return b == "defaults" ? d.extend({}, d.datepicker._defaults) : e ? b == "all" ? d.extend({},
e.settings) : this._get(e, b) : null; var f = b || {}; if (typeof b == "string") { f = {}; f[b] = c } if (e) { this._curInst == e && this._hideDatepicker(); var h = this._getDateDatepicker(a, true); E(e.settings, f); this._attachments(d(a), e); this._autoSize(e); this._setDateDatepicker(a, h); this._updateDatepicker(e) } 
        }, _changeDatepicker: function (a, b, c) { this._optionDatepicker(a, b, c) }, _refreshDatepicker: function (a) { (a = this._getInst(a)) && this._updateDatepicker(a) }, _setDateDatepicker: function (a, b) {
            if (a = this._getInst(a)) {
                this._setDate(a, b);
                this._updateDatepicker(a); this._updateAlternate(a)
            } 
        }, _getDateDatepicker: function (a, b) { (a = this._getInst(a)) && !a.inline && this._setDateFromField(a, b); return a ? this._getDate(a) : null }, _doKeyDown: function (a) {
            var b = d.datepicker._getInst(a.target), c = true, e = b.dpDiv.is(".ui-datepicker-rtl"); b._keyEvent = true; if (d.datepicker._datepickerShowing) switch (a.keyCode) {
                case 9: d.datepicker._hideDatepicker(); c = false; break; case 13: c = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", b.dpDiv); c[0] ?
d.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, c[0]) : d.datepicker._hideDatepicker(); return false; case 27: d.datepicker._hideDatepicker(); break; case 33: d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M"); break; case 34: d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M"); break; case 35: if (a.ctrlKey || a.metaKey) d.datepicker._clearDate(a.target); c = a.ctrlKey ||
a.metaKey; break; case 36: if (a.ctrlKey || a.metaKey) d.datepicker._gotoToday(a.target); c = a.ctrlKey || a.metaKey; break; case 37: if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, e ? +1 : -1, "D"); c = a.ctrlKey || a.metaKey; if (a.originalEvent.altKey) d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M"); break; case 38: if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, -7, "D"); c = a.ctrlKey || a.metaKey; break; case 39: if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target,
e ? -1 : +1, "D"); c = a.ctrlKey || a.metaKey; if (a.originalEvent.altKey) d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M"); break; case 40: if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, +7, "D"); c = a.ctrlKey || a.metaKey; break; default: c = false
            } else if (a.keyCode == 36 && a.ctrlKey) d.datepicker._showDatepicker(this); else c = false; if (c) { a.preventDefault(); a.stopPropagation() } 
        }, _doKeyPress: function (a) {
            var b = d.datepicker._getInst(a.target); if (d.datepicker._get(b,
"constrainInput")) { b = d.datepicker._possibleChars(d.datepicker._get(b, "dateFormat")); var c = String.fromCharCode(a.charCode == G ? a.keyCode : a.charCode); return a.ctrlKey || a.metaKey || c < " " || !b || b.indexOf(c) > -1 } 
        }, _doKeyUp: function (a) { a = d.datepicker._getInst(a.target); if (a.input.val() != a.lastVal) try { if (d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, d.datepicker._getFormatConfig(a))) { d.datepicker._setDateFromField(a); d.datepicker._updateAlternate(a); d.datepicker._updateDatepicker(a) } } catch (b) { d.datepicker.log(b) } return true },
        _showDatepicker: function (a) {
            a = a.target || a; if (a.nodeName.toLowerCase() != "input") a = d("input", a.parentNode)[0]; if (!(d.datepicker._isDisabledDatepicker(a) || d.datepicker._lastInput == a)) {
                var b = d.datepicker._getInst(a); d.datepicker._curInst && d.datepicker._curInst != b && d.datepicker._curInst.dpDiv.stop(true, true); var c = d.datepicker._get(b, "beforeShow"); E(b.settings, c ? c.apply(a, [a, b]) : {}); b.lastVal = null; d.datepicker._lastInput = a; d.datepicker._setDateFromField(b); if (d.datepicker._inDialog) a.value = ""; if (!d.datepicker._pos) {
                    d.datepicker._pos =
d.datepicker._findPos(a); d.datepicker._pos[1] += a.offsetHeight
                } var e = false; d(a).parents().each(function () { e |= d(this).css("position") == "fixed"; return !e }); if (e && d.browser.opera) { d.datepicker._pos[0] -= document.documentElement.scrollLeft; d.datepicker._pos[1] -= document.documentElement.scrollTop } c = { left: d.datepicker._pos[0], top: d.datepicker._pos[1] }; d.datepicker._pos = null; b.dpDiv.empty(); b.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }); d.datepicker._updateDatepicker(b); c = d.datepicker._checkOffset(b,
c, e); b.dpDiv.css({ position: d.datepicker._inDialog && d.blockUI ? "static" : e ? "fixed" : "absolute", display: "none", left: c.left + "px", top: c.top + "px" }); if (!b.inline) {
                    c = d.datepicker._get(b, "showAnim"); var f = d.datepicker._get(b, "duration"), h = function () { d.datepicker._datepickerShowing = true; var i = b.dpDiv.find("iframe.ui-datepicker-cover"); if (i.length) { var g = d.datepicker._getBorders(b.dpDiv); i.css({ left: -g[0], top: -g[1], width: b.dpDiv.outerWidth(), height: b.dpDiv.outerHeight() }) } }; b.dpDiv.zIndex(d(a).zIndex() + 1); d.effects &&
d.effects[c] ? b.dpDiv.show(c, d.datepicker._get(b, "showOptions"), f, h) : b.dpDiv[c || "show"](c ? f : null, h); if (!c || !f) h(); b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(); d.datepicker._curInst = b
                } 
            } 
        }, _updateDatepicker: function (a) {
            var b = this, c = d.datepicker._getBorders(a.dpDiv); a.dpDiv.empty().append(this._generateHTML(a)); var e = a.dpDiv.find("iframe.ui-datepicker-cover"); e.length && e.css({ left: -c[0], top: -c[1], width: a.dpDiv.outerWidth(), height: a.dpDiv.outerHeight() }); a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",
function () { d(this).removeClass("ui-state-hover"); this.className.indexOf("ui-datepicker-prev") != -1 && d(this).removeClass("ui-datepicker-prev-hover"); this.className.indexOf("ui-datepicker-next") != -1 && d(this).removeClass("ui-datepicker-next-hover") }).bind("mouseover", function () {
    if (!b._isDisabledDatepicker(a.inline ? a.dpDiv.parent()[0] : a.input[0])) {
        d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"); d(this).addClass("ui-state-hover"); this.className.indexOf("ui-datepicker-prev") !=
-1 && d(this).addClass("ui-datepicker-prev-hover"); this.className.indexOf("ui-datepicker-next") != -1 && d(this).addClass("ui-datepicker-next-hover")
    } 
}).end().find("." + this._dayOverClass + " a").trigger("mouseover").end(); c = this._getNumberOfMonths(a); e = c[1]; e > 1 ? a.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em") : a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""); a.dpDiv[(c[0] != 1 || c[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"); a.dpDiv[(this._get(a,
"isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"); a == d.datepicker._curInst && d.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input.focus(); if (a.yearshtml) { var f = a.yearshtml; setTimeout(function () { f === a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml); f = a.yearshtml = null }, 0) } 
        }, _getBorders: function (a) { var b = function (c) { return { thin: 1, medium: 2, thick: 3}[c] || c }; return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))] },
        _checkOffset: function (a, b, c) {
            var e = a.dpDiv.outerWidth(), f = a.dpDiv.outerHeight(), h = a.input ? a.input.outerWidth() : 0, i = a.input ? a.input.outerHeight() : 0, g = document.documentElement.clientWidth + d(document).scrollLeft(), j = document.documentElement.clientHeight + d(document).scrollTop(); b.left -= this._get(a, "isRTL") ? e - h : 0; b.left -= c && b.left == a.input.offset().left ? d(document).scrollLeft() : 0; b.top -= c && b.top == a.input.offset().top + i ? d(document).scrollTop() : 0; b.left -= Math.min(b.left, b.left + e > g && g > e ? Math.abs(b.left + e -
g) : 0); b.top -= Math.min(b.top, b.top + f > j && j > f ? Math.abs(f + i) : 0); return b
        }, _findPos: function (a) { for (var b = this._get(this._getInst(a), "isRTL"); a && (a.type == "hidden" || a.nodeType != 1); ) a = a[b ? "previousSibling" : "nextSibling"]; a = d(a).offset(); return [a.left, a.top] }, _hideDatepicker: function (a) {
            var b = this._curInst; if (!(!b || a && b != d.data(a, "datepicker"))) if (this._datepickerShowing) {
                a = this._get(b, "showAnim"); var c = this._get(b, "duration"), e = function () { d.datepicker._tidyDialog(b); this._curInst = null }; d.effects && d.effects[a] ?
b.dpDiv.hide(a, d.datepicker._get(b, "showOptions"), c, e) : b.dpDiv[a == "slideDown" ? "slideUp" : a == "fadeIn" ? "fadeOut" : "hide"](a ? c : null, e); a || e(); if (a = this._get(b, "onClose")) a.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]); this._datepickerShowing = false; this._lastInput = null; if (this._inDialog) { this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }); if (d.blockUI) { d.unblockUI(); d("body").append(this.dpDiv) } } this._inDialog = false
            } 
        }, _tidyDialog: function (a) { a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") },
        _checkExternalClick: function (a) { if (d.datepicker._curInst) { a = d(a.target); a[0].id != d.datepicker._mainDivId && a.parents("#" + d.datepicker._mainDivId).length == 0 && !a.hasClass(d.datepicker.markerClassName) && !a.hasClass(d.datepicker._triggerClass) && d.datepicker._datepickerShowing && !(d.datepicker._inDialog && d.blockUI) && d.datepicker._hideDatepicker() } }, _adjustDate: function (a, b, c) {
            a = d(a); var e = this._getInst(a[0]); if (!this._isDisabledDatepicker(a[0])) {
                this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") :
0), c); this._updateDatepicker(e)
            } 
        }, _gotoToday: function (a) { a = d(a); var b = this._getInst(a[0]); if (this._get(b, "gotoCurrent") && b.currentDay) { b.selectedDay = b.currentDay; b.drawMonth = b.selectedMonth = b.currentMonth; b.drawYear = b.selectedYear = b.currentYear } else { var c = new Date; b.selectedDay = c.getDate(); b.drawMonth = b.selectedMonth = c.getMonth(); b.drawYear = b.selectedYear = c.getFullYear() } this._notifyChange(b); this._adjustDate(a) }, _selectMonthYear: function (a, b, c) {
            a = d(a); var e = this._getInst(a[0]); e._selectingMonthYear =
false; e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10); this._notifyChange(e); this._adjustDate(a)
        }, _clickMonthYear: function (a) { var b = this._getInst(d(a)[0]); b.input && b._selectingMonthYear && setTimeout(function () { b.input.focus() }, 0); b._selectingMonthYear = !b._selectingMonthYear }, _selectDay: function (a, b, c, e) {
            var f = d(a); if (!(d(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]))) {
                f = this._getInst(f[0]); f.selectedDay = f.currentDay =
d("a", e).html(); f.selectedMonth = f.currentMonth = b; f.selectedYear = f.currentYear = c; this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
            } 
        }, _clearDate: function (a) { a = d(a); this._getInst(a[0]); this._selectDate(a, "") }, _selectDate: function (a, b) {
            a = this._getInst(d(a)[0]); b = b != null ? b : this._formatDate(a); a.input && a.input.val(b); this._updateAlternate(a); var c = this._get(a, "onSelect"); if (c) c.apply(a.input ? a.input[0] : null, [b, a]); else a.input && a.input.trigger("change"); if (a.inline) this._updateDatepicker(a);
            else { this._hideDatepicker(); this._lastInput = a.input[0]; typeof a.input[0] != "object" && a.input.focus(); this._lastInput = null } 
        }, _updateAlternate: function (a) { var b = this._get(a, "altField"); if (b) { var c = this._get(a, "altFormat") || this._get(a, "dateFormat"), e = this._getDate(a), f = this.formatDate(c, e, this._getFormatConfig(a)); d(b).each(function () { d(this).val(f) }) } }, noWeekends: function (a) { a = a.getDay(); return [a > 0 && a < 6, ""] }, iso8601Week: function (a) {
            a = new Date(a.getTime()); a.setDate(a.getDate() + 4 - (a.getDay() || 7)); var b =
a.getTime(); a.setMonth(0); a.setDate(1); return Math.floor(Math.round((b - a) / 864E5) / 7) + 1
        }, parseDate: function (a, b, c) {
            if (a == null || b == null) throw "Invalid arguments"; b = typeof b == "object" ? b.toString() : b + ""; if (b == "") return null; for (var e = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff, f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, h = (c ? c.dayNames : null) || this._defaults.dayNames, i = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, g = (c ? c.monthNames : null) || this._defaults.monthNames,
j = c = -1, l = -1, u = -1, k = false, o = function (p) { (p = z + 1 < a.length && a.charAt(z + 1) == p) && z++; return p }, m = function (p) { var v = o(p); p = new RegExp("^\\d{1," + (p == "@" ? 14 : p == "!" ? 20 : p == "y" && v ? 4 : p == "o" ? 3 : 2) + "}"); p = b.substring(s).match(p); if (!p) throw "Missing number at position " + s; s += p[0].length; return parseInt(p[0], 10) }, n = function (p, v, H) { p = o(p) ? H : v; for (v = 0; v < p.length; v++) if (b.substr(s, p[v].length).toLowerCase() == p[v].toLowerCase()) { s += p[v].length; return v + 1 } throw "Unknown name at position " + s; }, r = function () {
    if (b.charAt(s) !=
a.charAt(z)) throw "Unexpected literal at position " + s; s++
}, s = 0, z = 0; z < a.length; z++) if (k) if (a.charAt(z) == "'" && !o("'")) k = false; else r(); else switch (a.charAt(z)) {
                case "d": l = m("d"); break; case "D": n("D", f, h); break; case "o": u = m("o"); break; case "m": j = m("m"); break; case "M": j = n("M", i, g); break; case "y": c = m("y"); break; case "@": var w = new Date(m("@")); c = w.getFullYear(); j = w.getMonth() + 1; l = w.getDate(); break; case "!": w = new Date((m("!") - this._ticksTo1970) / 1E4); c = w.getFullYear(); j = w.getMonth() + 1; l = w.getDate(); break;
                case "'": if (o("'")) r(); else k = true; break; default: r()
            } if (c == -1) c = (new Date).getFullYear(); else if (c < 100) c += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c <= e ? 0 : -100); if (u > -1) { j = 1; l = u; do { e = this._getDaysInMonth(c, j - 1); if (l <= e) break; j++; l -= e } while (1) } w = this._daylightSavingAdjust(new Date(c, j - 1, l)); if (w.getFullYear() != c || w.getMonth() + 1 != j || w.getDate() != l) throw "Invalid date"; return w
        }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1E7, formatDate: function (a, b, c) {
            if (!b) return ""; var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, h = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort; c = (c ? c.monthNames : null) || this._defaults.monthNames; var i = function (o) {
                (o = k + 1 < a.length && a.charAt(k + 1) == o) && k++;
                return o
            }, g = function (o, m, n) { m = "" + m; if (i(o)) for (; m.length < n; ) m = "0" + m; return m }, j = function (o, m, n, r) { return i(o) ? r[m] : n[m] }, l = "", u = false; if (b) for (var k = 0; k < a.length; k++) if (u) if (a.charAt(k) == "'" && !i("'")) u = false; else l += a.charAt(k); else switch (a.charAt(k)) {
                case "d": l += g("d", b.getDate(), 2); break; case "D": l += j("D", b.getDay(), e, f); break; case "o": l += g("o", (b.getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5, 3); break; case "m": l += g("m", b.getMonth() + 1, 2); break; case "M": l += j("M", b.getMonth(), h, c); break;
                case "y": l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100; break; case "@": l += b.getTime(); break; case "!": l += b.getTime() * 1E4 + this._ticksTo1970; break; case "'": if (i("'")) l += "'"; else u = true; break; default: l += a.charAt(k)
            } return l
        }, _possibleChars: function (a) {
            for (var b = "", c = false, e = function (h) { (h = f + 1 < a.length && a.charAt(f + 1) == h) && f++; return h }, f = 0; f < a.length; f++) if (c) if (a.charAt(f) == "'" && !e("'")) c = false; else b += a.charAt(f); else switch (a.charAt(f)) {
                case "d": case "m": case "y": case "@": b +=
"0123456789"; break; case "D": case "M": return null; case "'": if (e("'")) b += "'"; else c = true; break; default: b += a.charAt(f)
            } return b
        }, _get: function (a, b) { return a.settings[b] !== G ? a.settings[b] : this._defaults[b] }, _setDateFromField: function (a, b) {
            if (a.input.val() != a.lastVal) {
                var c = this._get(a, "dateFormat"), e = a.lastVal = a.input ? a.input.val() : null, f, h; f = h = this._getDefaultDate(a); var i = this._getFormatConfig(a); try { f = this.parseDate(c, e, i) || h } catch (g) { this.log(g); e = b ? "" : e } a.selectedDay = f.getDate(); a.drawMonth = a.selectedMonth =
f.getMonth(); a.drawYear = a.selectedYear = f.getFullYear(); a.currentDay = e ? f.getDate() : 0; a.currentMonth = e ? f.getMonth() : 0; a.currentYear = e ? f.getFullYear() : 0; this._adjustInstDate(a)
            } 
        }, _getDefaultDate: function (a) { return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date)) }, _determineDate: function (a, b, c) {
            var e = function (h) { var i = new Date; i.setDate(i.getDate() + h); return i }, f = function (h) {
                try { return d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), h, d.datepicker._getFormatConfig(a)) } catch (i) { } var g =
(h.toLowerCase().match(/^c/) ? d.datepicker._getDate(a) : null) || new Date, j = g.getFullYear(), l = g.getMonth(); g = g.getDate(); for (var u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, k = u.exec(h); k; ) { switch (k[2] || "d") { case "d": case "D": g += parseInt(k[1], 10); break; case "w": case "W": g += parseInt(k[1], 10) * 7; break; case "m": case "M": l += parseInt(k[1], 10); g = Math.min(g, d.datepicker._getDaysInMonth(j, l)); break; case "y": case "Y": j += parseInt(k[1], 10); g = Math.min(g, d.datepicker._getDaysInMonth(j, l)); break } k = u.exec(h) } return new Date(j,
l, g)
            }; if (b = (b = b == null || b === "" ? c : typeof b == "string" ? f(b) : typeof b == "number" ? isNaN(b) ? c : e(b) : new Date(b.getTime())) && b.toString() == "Invalid Date" ? c : b) { b.setHours(0); b.setMinutes(0); b.setSeconds(0); b.setMilliseconds(0) } return this._daylightSavingAdjust(b)
        }, _daylightSavingAdjust: function (a) { if (!a) return null; a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0); return a }, _setDate: function (a, b, c) {
            var e = !b, f = a.selectedMonth, h = a.selectedYear; b = this._restrictMinMax(a, this._determineDate(a, b, new Date)); a.selectedDay =
a.currentDay = b.getDate(); a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth(); a.drawYear = a.selectedYear = a.currentYear = b.getFullYear(); if ((f != a.selectedMonth || h != a.selectedYear) && !c) this._notifyChange(a); this._adjustInstDate(a); if (a.input) a.input.val(e ? "" : this._formatDate(a))
        }, _getDate: function (a) { return !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)) }, _generateHTML: function (a) {
            var b = new Date; b = this._daylightSavingAdjust(new Date(b.getFullYear(),
b.getMonth(), b.getDate())); var c = this._get(a, "isRTL"), e = this._get(a, "showButtonPanel"), f = this._get(a, "hideIfNoPrevNext"), h = this._get(a, "navigationAsDateFormat"), i = this._getNumberOfMonths(a), g = this._get(a, "showCurrentAtPos"), j = this._get(a, "stepMonths"), l = i[0] != 1 || i[1] != 1, u = this._daylightSavingAdjust(!a.currentDay ? new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay)), k = this._getMinMaxDate(a, "min"), o = this._getMinMaxDate(a, "max"); g = a.drawMonth - g; var m = a.drawYear; if (g < 0) { g += 12; m-- } if (o) {
                var n =
this._daylightSavingAdjust(new Date(o.getFullYear(), o.getMonth() - i[0] * i[1] + 1, o.getDate())); for (n = k && n < k ? k : n; this._daylightSavingAdjust(new Date(m, g, 1)) > n; ) { g--; if (g < 0) { g = 11; m-- } } 
            } a.drawMonth = g; a.drawYear = m; n = this._get(a, "prevText"); n = !h ? n : this.formatDate(n, this._daylightSavingAdjust(new Date(m, g - j, 1)), this._getFormatConfig(a)); n = this._canAdjustMonth(a, -1, m, g) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + y + ".datepicker._adjustDate('#" + a.id + "', -" + j + ", 'M');\" title=\"" + n + '"><span class="ui-icon ui-icon-circle-triangle-' +
(c ? "e" : "w") + '">' + n + "</span></a>" : f ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + n + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + n + "</span></a>"; var r = this._get(a, "nextText"); r = !h ? r : this.formatDate(r, this._daylightSavingAdjust(new Date(m, g + j, 1)), this._getFormatConfig(a)); f = this._canAdjustMonth(a, +1, m, g) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + y + ".datepicker._adjustDate('#" + a.id + "', +" + j + ", 'M');\" title=\"" + r + '"><span class="ui-icon ui-icon-circle-triangle-' +
(c ? "w" : "e") + '">' + r + "</span></a>" : f ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + r + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + r + "</span></a>"; j = this._get(a, "currentText"); r = this._get(a, "gotoCurrent") && a.currentDay ? u : b; j = !h ? j : this.formatDate(j, r, this._getFormatConfig(a)); h = !a.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + y + '.datepicker._hideDatepicker();">' + this._get(a,
"closeText") + "</button>" : ""; e = e ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? h : "") + (this._isInRange(a, r) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + y + ".datepicker._gotoToday('#" + a.id + "');\">" + j + "</button>" : "") + (c ? "" : h) + "</div>" : ""; h = parseInt(this._get(a, "firstDay"), 10); h = isNaN(h) ? 0 : h; j = this._get(a, "showWeek"); r = this._get(a, "dayNames"); this._get(a, "dayNamesShort"); var s = this._get(a, "dayNamesMin"), z =
this._get(a, "monthNames"), w = this._get(a, "monthNamesShort"), p = this._get(a, "beforeShowDay"), v = this._get(a, "showOtherMonths"), H = this._get(a, "selectOtherMonths"); this._get(a, "calculateWeek"); for (var L = this._getDefaultDate(a), I = "", C = 0; C < i[0]; C++) {
                for (var M = "", D = 0; D < i[1]; D++) {
                    var N = this._daylightSavingAdjust(new Date(m, g, a.selectedDay)), t = " ui-corner-all", x = ""; if (l) {
                        x += '<div class="ui-datepicker-group'; if (i[1] > 1) switch (D) {
                            case 0: x += " ui-datepicker-group-first"; t = " ui-corner-" + (c ? "right" : "left"); break; case i[1] -
1: x += " ui-datepicker-group-last"; t = " ui-corner-" + (c ? "left" : "right"); break; default: x += " ui-datepicker-group-middle"; t = ""; break
                        } x += '">'
                    } x += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + t + '">' + (/all|left/.test(t) && C == 0 ? c ? f : n : "") + (/all|right/.test(t) && C == 0 ? c ? n : f : "") + this._generateMonthYearHeader(a, g, m, k, o, C > 0 || D > 0, z, w) + '</div><table class="ui-datepicker-calendar"><thead><tr>'; var A = j ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : ""; for (t = 0; t < 7; t++) {
                        var q =
(t + h) % 7; A += "<th" + ((t + h + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + r[q] + '">' + s[q] + "</span></th>"
                    } x += A + "</tr></thead><tbody>"; A = this._getDaysInMonth(m, g); if (m == a.selectedYear && g == a.selectedMonth) a.selectedDay = Math.min(a.selectedDay, A); t = (this._getFirstDayOfMonth(m, g) - h + 7) % 7; A = l ? 6 : Math.ceil((t + A) / 7); q = this._daylightSavingAdjust(new Date(m, g, 1 - t)); for (var O = 0; O < A; O++) {
                        x += "<tr>"; var P = !j ? "" : '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(q) + "</td>"; for (t = 0; t < 7; t++) {
                            var F =
p ? p.apply(a.input ? a.input[0] : null, [q]) : [true, ""], B = q.getMonth() != g, J = B && !H || !F[0] || k && q < k || o && q > o; P += '<td class="' + ((t + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (B ? " ui-datepicker-other-month" : "") + (q.getTime() == N.getTime() && g == a.selectedMonth && a._keyEvent || L.getTime() == q.getTime() && L.getTime() == N.getTime() ? " " + this._dayOverClass : "") + (J ? " " + this._unselectableClass + " ui-state-disabled" : "") + (B && !v ? "" : " " + F[1] + (q.getTime() == u.getTime() ? " " + this._currentClass : "") + (q.getTime() == b.getTime() ? " ui-datepicker-today" :
"")) + '"' + ((!B || v) && F[2] ? ' title="' + F[2] + '"' : "") + (J ? "" : ' onclick="DP_jQuery_' + y + ".datepicker._selectDay('#" + a.id + "'," + q.getMonth() + "," + q.getFullYear() + ', this);return false;"') + ">" + (B && !v ? "&#xa0;" : J ? '<span class="ui-state-default">' + q.getDate() + "</span>" : '<a class="ui-state-default' + (q.getTime() == b.getTime() ? " ui-state-highlight" : "") + (q.getTime() == u.getTime() ? " ui-state-active" : "") + (B ? " ui-priority-secondary" : "") + '" href="#">' + q.getDate() + "</a>") + "</td>"; q.setDate(q.getDate() + 1); q = this._daylightSavingAdjust(q)
                        } x +=
P + "</tr>"
                    } g++; if (g > 11) { g = 0; m++ } x += "</tbody></table>" + (l ? "</div>" + (i[0] > 0 && D == i[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""); M += x
                } I += M
            } I += e + (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""); a._keyEvent = false; return I
        }, _generateMonthYearHeader: function (a, b, c, e, f, h, i, g) {
            var j = this._get(a, "changeMonth"), l = this._get(a, "changeYear"), u = this._get(a, "showMonthAfterYear"), k = '<div class="ui-datepicker-title">',
o = ""; if (h || !j) o += '<span class="ui-datepicker-month">' + i[b] + "</span>"; else { i = e && e.getFullYear() == c; var m = f && f.getFullYear() == c; o += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + y + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" onclick=\"DP_jQuery_" + y + ".datepicker._clickMonthYear('#" + a.id + "');\">"; for (var n = 0; n < 12; n++) if ((!i || n >= e.getMonth()) && (!m || n <= f.getMonth())) o += '<option value="' + n + '"' + (n == b ? ' selected="selected"' : "") + ">" + g[n] + "</option>"; o += "</select>" } u || (k += o + (h || !(j &&
l) ? "&#xa0;" : "")); a.yearshtml = ""; if (h || !l) k += '<span class="ui-datepicker-year">' + c + "</span>"; else {
                g = this._get(a, "yearRange").split(":"); var r = (new Date).getFullYear(); i = function (s) { s = s.match(/c[+-].*/) ? c + parseInt(s.substring(1), 10) : s.match(/[+-].*/) ? r + parseInt(s, 10) : parseInt(s, 10); return isNaN(s) ? r : s }; b = i(g[0]); g = Math.max(b, i(g[1] || "")); b = e ? Math.max(b, e.getFullYear()) : b; g = f ? Math.min(g, f.getFullYear()) : g; for (a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + y + ".datepicker._selectMonthYear('#" +
a.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + y + ".datepicker._clickMonthYear('#" + a.id + "');\">"; b <= g; b++) a.yearshtml += '<option value="' + b + '"' + (b == c ? ' selected="selected"' : "") + ">" + b + "</option>"; a.yearshtml += "</select>"; if (d.browser.mozilla) k += '<select class="ui-datepicker-year"><option value="' + c + '" selected="selected">' + c + "</option></select>"; else { k += a.yearshtml; a.yearshtml = null } 
            } k += this._get(a, "yearSuffix"); if (u) k += (h || !(j && l) ? "&#xa0;" : "") + o; k += "</div>"; return k
        }, _adjustInstDate: function (a, b, c) {
            var e =
a.drawYear + (c == "Y" ? b : 0), f = a.drawMonth + (c == "M" ? b : 0); b = Math.min(a.selectedDay, this._getDaysInMonth(e, f)) + (c == "D" ? b : 0); e = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(e, f, b))); a.selectedDay = e.getDate(); a.drawMonth = a.selectedMonth = e.getMonth(); a.drawYear = a.selectedYear = e.getFullYear(); if (c == "M" || c == "Y") this._notifyChange(a)
        }, _restrictMinMax: function (a, b) { var c = this._getMinMaxDate(a, "min"); a = this._getMinMaxDate(a, "max"); b = c && b < c ? c : b; return b = a && b > a ? a : b }, _notifyChange: function (a) {
            var b = this._get(a,
"onChangeMonthYear"); if (b) b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        }, _getNumberOfMonths: function (a) { a = this._get(a, "numberOfMonths"); return a == null ? [1, 1] : typeof a == "number" ? [1, a] : a }, _getMinMaxDate: function (a, b) { return this._determineDate(a, this._get(a, b + "Date"), null) }, _getDaysInMonth: function (a, b) { return 32 - (new Date(a, b, 32)).getDate() }, _getFirstDayOfMonth: function (a, b) { return (new Date(a, b, 1)).getDay() }, _canAdjustMonth: function (a, b, c, e) {
            var f = this._getNumberOfMonths(a);
            c = this._daylightSavingAdjust(new Date(c, e + (b < 0 ? b : f[0] * f[1]), 1)); b < 0 && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth())); return this._isInRange(a, c)
        }, _isInRange: function (a, b) { var c = this._getMinMaxDate(a, "min"); a = this._getMinMaxDate(a, "max"); return (!c || b.getTime() >= c.getTime()) && (!a || b.getTime() <= a.getTime()) }, _getFormatConfig: function (a) {
            var b = this._get(a, "shortYearCutoff"); b = typeof b != "string" ? b : (new Date).getFullYear() % 100 + parseInt(b, 10); return { shortYearCutoff: b, dayNamesShort: this._get(a,
"dayNamesShort"), dayNames: this._get(a, "dayNames"), monthNamesShort: this._get(a, "monthNamesShort"), monthNames: this._get(a, "monthNames")
            }
        }, _formatDate: function (a, b, c, e) { if (!b) { a.currentDay = a.selectedDay; a.currentMonth = a.selectedMonth; a.currentYear = a.selectedYear } b = b ? typeof b == "object" ? b : this._daylightSavingAdjust(new Date(e, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)); return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a)) } 
    }); d.fn.datepicker =
function (a) {
    if (!d.datepicker.initialized) { d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv); d.datepicker.initialized = true } var b = Array.prototype.slice.call(arguments, 1); if (typeof a == "string" && (a == "isDisabled" || a == "getDate" || a == "widget")) return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b)); if (a == "option" && arguments.length == 2 && typeof arguments[1] == "string") return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b));
    return this.each(function () { typeof a == "string" ? d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this].concat(b)) : d.datepicker._attachDatepicker(this, a) })
}; d.datepicker = new K; d.datepicker.initialized = false; d.datepicker.uuid = (new Date).getTime(); d.datepicker.version = "1.8.7"; window["DP_jQuery_" + y] = d
})(jQuery);
; /*
 * jQuery UI Progressbar 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function (b, d) {
    b.widget("ui.progressbar", { options: { value: 0, max: 100 }, min: 0, _create: function () { this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min, "aria-valuemax": this.options.max, "aria-valuenow": this._value() }); this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element); this.oldValue = this._value(); this._refreshValue() }, destroy: function () {
        this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
        this.valueDiv.remove(); b.Widget.prototype.destroy.apply(this, arguments)
    }, value: function (a) { if (a === d) return this._value(); this._setOption("value", a); return this }, _setOption: function (a, c) { if (a === "value") { this.options.value = c; this._refreshValue(); this._value() === this.options.max && this._trigger("complete") } b.Widget.prototype._setOption.apply(this, arguments) }, _value: function () { var a = this.options.value; if (typeof a !== "number") a = 0; return Math.min(this.options.max, Math.max(this.min, a)) }, _percentage: function () {
        return 100 *
this._value() / this.options.max
    }, _refreshValue: function () { var a = this.value(), c = this._percentage(); if (this.oldValue !== a) { this.oldValue = a; this._trigger("change") } this.valueDiv.toggleClass("ui-corner-right", a === this.options.max).width(c.toFixed(0) + "%"); this.element.attr("aria-valuenow", a) } 
    }); b.extend(b.ui.progressbar, { version: "1.8.7" })
})(jQuery);
;

/* jquery-ui.1.8.7.custom.min.js end */

/* jquery.marquee.js start */

/*
* name: jQuery marquee
*
*/
(function (window, document, $) {
    /*
    Function: $.fn.marquee

    Marquee is being used colloquially to define a slideshow-esque
    presentation layer to DOM content.

    Parameters:
    _left - Left control selector or an object collection with the
    named parameters without the preceding underscore
    _right - Right control selector
    _state - Progress control selector
    _display - Display control children selector
    _play - Play/pause button selector
    _startindex - Starting position for display images
    _active - Active elements className
    _speed - Speed at which the marquee should run
    _infinite - Marquee scrolls infinitely, defaults to false
    _increment - A number indicating how many items are moved per
    change, defaults to 1
    _start - Optional function to run before anything else
    _change - Optional animation function, will override default
    animation

    Return:
    jQuery chainables
    */
    $.fn.marquee = function (_left, _right, _state, _display, _play,
                            _startindex, _startdirection, _speed, _infinite,
                            _increment, _active, _start, _change,
                            _start_moving) {
        var test = (typeof _left === "object"),
        // Set defaults for plugin
            options = $.extend({
                // Selectors - required
                left: (test) ? "" : (_left || ""),
                right: _right || "",
                state: _state || "",
                display: _display || "",
                active: _active || "active",
                play: _play || null,
                start_moving: _start_moving || false,
                // Display optionsuration - optional
                startindex: _startindex || 0,
                startdirection: _startdirection || "left",
                speed: _speed || 0,
                infinite: _infinite || false,
                increment: _increment || 1,
                // Custom functions
                start: _start || $.noop,
                change: _change || null
            }, (test) ? _left : {});

        // Bind the change event
        if (options.change) {
            this.bind("change", options.change);
        }

        // Trigger options.start before anything else happens
        options.start.call(this, options);

        // Normalize left and right

        if (typeof options.left !== 'object' || !options.left.length) {
            options.left = $(options.left, this);
        }

        if (typeof options.right !== 'object' || !options.right.length) {
            options.right = $(options.right, this);
        }

        // Handle no left or right
        if (!options.left.length) {
            options.left = $('<div/>');
        }

        if (!options.right.length) {
            options.right = $('<div/>');
        }

        return this.each(function () {
            var $this = $(this),
                paused = !options.start_moving;
            // Cache state and display jQuery objects
            var $state = $(options.state, this),
                $display = $(options.display, this),
                $play = $(options.play, this),
            // Interval variable
                interval = null;

            var animate = function (direction, index) {
                var prev_position = $state.children("." + options.active)
                        .index(),
                    display_count = $display.length,
                    position;

                if (prev_position < 0) {
                    prev_position = 0;
                }

                if (direction === "left") {
                    position = prev_position - 1;
                } else {
                    position = prev_position + 1;
                }

                // Modulo bug fix for +/- numbers
                position = ((position % display_count) + display_count) %
                    display_count;


                if (!window.isNaN(index) && index !== null) {
                    position = index;
                }

                $display = $(options.display, $display.context);
                // Test if animation is in progress via psuedo class,
                // if not change position
                if (!$display.eq(prev_position).is(":animated")) {
                    $this.trigger("change", [position, options]);
                    if (!options.change) {
                        if (options.transition === "fade") {
                            $display.eq(prev_position).fadeOut("0");
                            $display.eq(position).fadeIn("slow");
                        } else if (options.transition === "slide") {
                            if (options.infinite) {
                                var $animated = $display.parent();
                                if (direction === "right") {
                                    $animated
                                        .stop(true, true)
                                        .animate({
                                            left: -(
                                                ($display.outerWidth() - 2) *
                                                (options.increment)
                                            )
                                        }, 500, function () {
                                            var $trim = $display
                                                .slice(0, options.increment)
                                                .detach();
                                            $trim.appendTo($animated);
                                            $animated.css("left", "0");
                                        });
                                } else {
                                    var $trim = $display
                                        .slice(-options.increment)
                                        .detach();
                                    $trim.prependTo($animated);

                                    var width = 0;
                                    $trim.each(function () {
                                        width += $(this).outerWidth();
                                    });
                                    $animated.css("left", -width +
                                        "px");

                                    $animated
                                        .stop(true, true)
                                        .animate({ left: "0" }, 500);
                                }
                            } else {
                                $display.parent().stop(true, true);
                                if (position in $display) {
                                    var animateEl = $display.eq(position);
                                    $display.parent().animate({
                                        left: -(animateEl.width() * position) +
                                            'px'
                                    });
                                }
                            }
                        }
                    }
                }

                // Set the new active class
                $state.children("." + options.active)
                    .removeClass(options.active);
                $state.children().eq(position).addClass(options.active);
            };

            if (options.transition === 'fade') {
                $.each($display.slice(1), function () {
                    $(this).hide();
                });
            }

            // External pausing
            $this.data("pause", function () {
                paused = !paused;
            });

            // Handle no state
            if (!$state.length) {
                $state = $("<ul/>");
            }

            $state.empty();

            for (var i = 0, len = $display.length; i < len; i += 1) {
                $state.prepend("<li class='inactive'>" + (len - i) + "</li>");
            }
            $state.find("li:last").addClass("last");

            if ($display.length === 1) {
                $state.hide();
            }

            // Set up the initial state and display controls
            $state.children().eq(options.start).addClass("active");
            $display.eq(options.start).show();

            $(options.state).children().eq(options.startindex)
                .addClass(options.active);

            // Auto start code
            if (options.speed > 0) {
                var startAnimate = function () {
                    if (!paused) {
                        animate(options.startdirection);

                        window.clearTimeout(interval);
                        interval = window.setTimeout(
                            startAnimate, options.speed
                        );
                    }
                };
                interval = window.setTimeout(startAnimate, options.speed);
            }

            // TODO: implement this section to fill in elements if too small
            /*
            if (options.infinite) {
            if (
            $display.parent().outerWidth() <=
            $display.parent().parent().outerWidth()) { }
            else { }
            }
            */


            $play.bind("click", function () {
                paused = !paused;

                var $this = $(this);
                if ($this.hasClass("pause")) {
                    $this.addClass("play").removeClass("pause");
                }
                else {
                    $this.addClass("pause").removeClass("play");
                }
            });

            // Li clicks
            $state.delegate(
                "li:not(." + options.active + ")", "click", function () {
                    paused = true;

                    // Cancel interval
                    if (options.speed && !$play.is(".play")) {
                        $play.trigger("click");
                    }

                    // Cache local reference
                    var index = $(this).index(),
                        direction;

                    if (index > $state.find("." + options.active).index()) {
                        direction = "right";
                    } else {
                        direction = "left";
                    }

                    animate(direction, index);
                }
            );

            options.left.add(options.right).bind("mousedown", function () {
                // Cancel interval
                if (!paused) {
                    paused = true;
                }

                // Execute change image
                var direction = (options.left[0] === this) ? "left" : "right";
                animate(direction);
            });
        });

    };
} (this, this.document, this.jQuery));


/* jquery.marquee.js end */

/* jquery.fancybox-1.3.4.pack.js start */

/*
* FancyBox - jQuery Plugin
* Simple and fancy lightbox alternative
*
* Examples and documentation at: http://fancybox.net
* 
* Copyright (c) 2008 - 2010 Janis Skarnelis
* That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
* 
* Version: 1.3.4 (11/11/2010)
* Requires: jQuery v1.3+
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/

; (function (b) {
    var m, t, u, f, D, j, E, n, z, A, q = 0, e = {}, o = [], p = 0, d = {}, l = [], G = null, v = new Image, J = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, W = /[^\.]\.(swf)\s*$/i, K, L = 1, y = 0, s = "", r, i, h = false, B = b.extend(b("<div/>")[0], { prop: 0 }), M = b.browser.msie && b.browser.version < 7 && !window.XMLHttpRequest, N = function () { t.hide(); v.onerror = v.onload = null; G && G.abort(); m.empty() }, O = function () {
        if (false === e.onError(o, q, e)) { t.hide(); h = false } else {
            e.titleShow = false; e.width = "auto"; e.height = "auto"; m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
            F()
        } 
    }, I = function () {
        var a = o[q], c, g, k, C, P, w; N(); e = b.extend({}, b.fn.fancybox.defaults, typeof b(a).data("fancybox") == "undefined" ? e : b(a).data("fancybox")); w = e.onStart(o, q, e); if (w === false) h = false; else {
            if (typeof w == "object") e = b.extend(e, w); k = e.title || (a.nodeName ? b(a).attr("title") : a.title) || ""; if (a.nodeName && !e.orig) e.orig = b(a).children("img:first").length ? b(a).children("img:first") : b(a); if (k === "" && e.orig && e.titleFromAlt) k = e.orig.attr("alt"); c = e.href || (a.nodeName ? b(a).attr("href") : a.href) || null; if (/^(?:javascript)/i.test(c) ||
c == "#") c = null; if (e.type) { g = e.type; if (!c) c = e.content } else if (e.content) g = "html"; else if (c) g = c.match(J) ? "image" : c.match(W) ? "swf" : b(a).hasClass("iframe") ? "iframe" : c.indexOf("#") === 0 ? "inline" : "ajax"; if (g) {
                if (g == "inline") { a = c.substr(c.indexOf("#")); g = b(a).length > 0 ? "inline" : "ajax" } e.type = g; e.href = c; e.title = k; if (e.autoDimensions) if (e.type == "html" || e.type == "inline" || e.type == "ajax") { e.width = "auto"; e.height = "auto" } else e.autoDimensions = false; if (e.modal) {
                    e.overlayShow = true; e.hideOnOverlayClick = false; e.hideOnContentClick =
false; e.enableEscapeButton = false; e.showCloseButton = false
                } e.padding = parseInt(e.padding, 10); e.margin = parseInt(e.margin, 10); m.css("padding", e.padding + e.margin); b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function () { b(this).replaceWith(j.children()) }); switch (g) {
                    case "html": m.html(e.content); F(); break; case "inline": if (b(a).parent().is("#fancybox-content") === true) { h = false; break } b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup", function () { b(this).replaceWith(j.children()) }).bind("fancybox-cancel",
function () { b(this).replaceWith(m.children()) }); b(a).appendTo(m); F(); break; case "image": h = false; b.fancybox.showActivity(); v = new Image; v.onerror = function () { O() }; v.onload = function () { h = true; v.onerror = v.onload = null; e.width = v.width; e.height = v.height; b("<img />").attr({ id: "fancybox-img", src: v.src, alt: e.title }).appendTo(m); Q() }; v.src = c; break; case "swf": e.scrolling = "no"; C = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + e.width + '" height="' + e.height + '"><param name="movie" value="' + c +
'"></param>'; P = ""; b.each(e.swf, function (x, H) { C += '<param name="' + x + '" value="' + H + '"></param>'; P += " " + x + '="' + H + '"' }); C += '<embed src="' + c + '" type="application/x-shockwave-flash" width="' + e.width + '" height="' + e.height + '"' + P + "></embed></object>"; m.html(C); F(); break; case "ajax": h = false; b.fancybox.showActivity(); e.ajax.win = e.ajax.success; G = b.ajax(b.extend({}, e.ajax, { url: c, data: e.ajax.data || {}, error: function (x) { x.status > 0 && O() }, success: function (x, H, R) {
    if ((typeof R == "object" ? R : G).status == 200) {
        if (typeof e.ajax.win ==
"function") { w = e.ajax.win(c, x, H, R); if (w === false) { t.hide(); return } else if (typeof w == "string" || typeof w == "object") x = w } m.html(x); F()
    } 
} 
})); break; case "iframe": Q()
                } 
            } else O()
        } 
    }, F = function () {
        var a = e.width, c = e.height; a = a.toString().indexOf("%") > -1 ? parseInt((b(window).width() - e.margin * 2) * parseFloat(a) / 100, 10) + "px" : a == "auto" ? "auto" : a + "px"; c = c.toString().indexOf("%") > -1 ? parseInt((b(window).height() - e.margin * 2) * parseFloat(c) / 100, 10) + "px" : c == "auto" ? "auto" : c + "px"; m.wrapInner('<div style="width:' + a + ";height:" + c +
";overflow: " + (e.scrolling == "auto" ? "auto" : e.scrolling == "yes" ? "scroll" : "hidden") + ';position:relative;"></div>'); e.width = m.width(); e.height = m.height(); Q()
    }, Q = function () {
        var a, c; t.hide(); if (f.is(":visible") && false === d.onCleanup(l, p, d)) { b.event.trigger("fancybox-cancel"); h = false } else {
            h = true; b(j.add(u)).unbind(); b(window).unbind("resize.fb scroll.fb"); b(document).unbind("keydown.fb"); f.is(":visible") && d.titlePosition !== "outside" && f.css("height", f.height()); l = o; p = q; d = e; if (d.overlayShow) {
                u.css({ "background-color": d.overlayColor,
                    opacity: d.overlayOpacity, cursor: d.hideOnOverlayClick ? "pointer" : "auto", height: b(document).height()
                }); if (!u.is(":visible")) { M && b("select:not(#fancybox-tmp select)").filter(function () { return this.style.visibility !== "hidden" }).css({ visibility: "hidden" }).one("fancybox-cleanup", function () { this.style.visibility = "inherit" }); u.show() } 
            } else u.hide(); i = X(); s = d.title || ""; y = 0; n.empty().removeAttr("style").removeClass(); if (d.titleShow !== false) {
                if (b.isFunction(d.titleFormat)) a = d.titleFormat(s, l, p, d); else a = s && s.length ?
d.titlePosition == "float" ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + s + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + d.titlePosition + '">' + s + "</div>" : false; s = a; if (!(!s || s === "")) {
                    n.addClass("fancybox-title-" + d.titlePosition).html(s).appendTo("body").show(); switch (d.titlePosition) {
                        case "inside": n.css({ width: i.width - d.padding * 2, marginLeft: d.padding, marginRight: d.padding });
                            y = n.outerHeight(true); n.appendTo(D); i.height += y; break; case "over": n.css({ marginLeft: d.padding, width: i.width - d.padding * 2, bottom: d.padding }).appendTo(D); break; case "float": n.css("left", parseInt((n.width() - i.width - 40) / 2, 10) * -1).appendTo(f); break; default: n.css({ width: i.width - d.padding * 2, paddingLeft: d.padding, paddingRight: d.padding }).appendTo(f)
                    } 
                } 
            } n.hide(); if (f.is(":visible")) {
                b(E.add(z).add(A)).hide(); a = f.position(); r = { top: a.top, left: a.left, width: f.width(), height: f.height() }; c = r.width == i.width && r.height ==
i.height; j.fadeTo(d.changeFade, 0.3, function () { var g = function () { j.html(m.contents()).fadeTo(d.changeFade, 1, S) }; b.event.trigger("fancybox-change"); j.empty().removeAttr("filter").css({ "border-width": d.padding, width: i.width - d.padding * 2, height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2 }); if (c) g(); else { B.prop = 0; b(B).animate({ prop: 1 }, { duration: d.changeSpeed, easing: d.easingChange, step: T, complete: g }) } })
            } else {
                f.removeAttr("style"); j.css("border-width", d.padding); if (d.transitionIn == "elastic") {
                    r = V(); j.html(m.contents());
                    f.show(); if (d.opacity) i.opacity = 0; B.prop = 0; b(B).animate({ prop: 1 }, { duration: d.speedIn, easing: d.easingIn, step: T, complete: S })
                } else { d.titlePosition == "inside" && y > 0 && n.show(); j.css({ width: i.width - d.padding * 2, height: e.autoDimensions ? "auto" : i.height - y - d.padding * 2 }).html(m.contents()); f.css(i).fadeIn(d.transitionIn == "none" ? 0 : d.speedIn, S) } 
            } 
        } 
    }, Y = function () {
        if (d.enableEscapeButton || d.enableKeyboardNav) b(document).bind("keydown.fb", function (a) {
            if (a.keyCode == 27 && d.enableEscapeButton) { a.preventDefault(); b.fancybox.close() } else if ((a.keyCode ==
37 || a.keyCode == 39) && d.enableKeyboardNav && a.target.tagName !== "INPUT" && a.target.tagName !== "TEXTAREA" && a.target.tagName !== "SELECT") { a.preventDefault(); b.fancybox[a.keyCode == 37 ? "prev" : "next"]() } 
        }); if (d.showNavArrows) { if (d.cyclic && l.length > 1 || p !== 0) z.show(); if (d.cyclic && l.length > 1 || p != l.length - 1) A.show() } else { z.hide(); A.hide() } 
    }, S = function () {
        if (!b.support.opacity) { j.get(0).style.removeAttribute("filter"); f.get(0).style.removeAttribute("filter") } e.autoDimensions && j.css("height", "auto"); f.css("height", "auto");
        s && s.length && n.show(); d.showCloseButton && E.show(); Y(); d.hideOnContentClick && j.bind("click", b.fancybox.close); d.hideOnOverlayClick && u.bind("click", b.fancybox.close); b(window).bind("resize.fb", b.fancybox.resize); d.centerOnScroll && b(window).bind("scroll.fb", b.fancybox.center); if (d.type == "iframe") b('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (b.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + e.scrolling + '" src="' + d.href + '"></iframe>').appendTo(j);
        f.show(); h = false; b.fancybox.center(); d.onComplete(l, p, d); var a, c; if (l.length - 1 > p) { a = l[p + 1].href; if (typeof a !== "undefined" && a.match(J)) { c = new Image; c.src = a } } if (p > 0) { a = l[p - 1].href; if (typeof a !== "undefined" && a.match(J)) { c = new Image; c.src = a } } 
    }, T = function (a) {
        var c = { width: parseInt(r.width + (i.width - r.width) * a, 10), height: parseInt(r.height + (i.height - r.height) * a, 10), top: parseInt(r.top + (i.top - r.top) * a, 10), left: parseInt(r.left + (i.left - r.left) * a, 10) }; if (typeof i.opacity !== "undefined") c.opacity = a < 0.5 ? 0.5 : a; f.css(c);
        j.css({ width: c.width - d.padding * 2, height: c.height - y * a - d.padding * 2 })
    }, U = function () { return [b(window).width() - d.margin * 2, b(window).height() - d.margin * 2, b(document).scrollLeft() + d.margin, b(document).scrollTop() + d.margin] }, X = function () {
        var a = U(), c = {}, g = d.autoScale, k = d.padding * 2; c.width = d.width.toString().indexOf("%") > -1 ? parseInt(a[0] * parseFloat(d.width) / 100, 10) : d.width + k; c.height = d.height.toString().indexOf("%") > -1 ? parseInt(a[1] * parseFloat(d.height) / 100, 10) : d.height + k; if (g && (c.width > a[0] || c.height > a[1])) if (e.type ==
"image" || e.type == "swf") { g = d.width / d.height; if (c.width > a[0]) { c.width = a[0]; c.height = parseInt((c.width - k) / g + k, 10) } if (c.height > a[1]) { c.height = a[1]; c.width = parseInt((c.height - k) * g + k, 10) } } else { c.width = Math.min(c.width, a[0]); c.height = Math.min(c.height, a[1]) } c.top = parseInt(Math.max(a[3] - 20, a[3] + (a[1] - c.height - 40) * 0.5), 10); c.left = parseInt(Math.max(a[2] - 20, a[2] + (a[0] - c.width - 40) * 0.5), 10); return c
    }, V = function () {
        var a = e.orig ? b(e.orig) : false, c = {}; if (a && a.length) {
            c = a.offset(); c.top += parseInt(a.css("paddingTop"),
10) || 0; c.left += parseInt(a.css("paddingLeft"), 10) || 0; c.top += parseInt(a.css("border-top-width"), 10) || 0; c.left += parseInt(a.css("border-left-width"), 10) || 0; c.width = a.width(); c.height = a.height(); c = { width: c.width + d.padding * 2, height: c.height + d.padding * 2, top: c.top - d.padding - 20, left: c.left - d.padding - 20}
        } else { a = U(); c = { width: d.padding * 2, height: d.padding * 2, top: parseInt(a[3] + a[1] * 0.5, 10), left: parseInt(a[2] + a[0] * 0.5, 10)} } return c
    }, Z = function () { if (t.is(":visible")) { b("div", t).css("top", L * -40 + "px"); L = (L + 1) % 12 } else clearInterval(K) };
    b.fn.fancybox = function (a) { if (!b(this).length) return this; b(this).data("fancybox", b.extend({}, a, b.metadata ? b(this).metadata() : {})).unbind("click.fb").bind("click.fb", function (c) { c.preventDefault(); if (!h) { h = true; b(this).blur(); o = []; q = 0; c = b(this).attr("rel") || ""; if (!c || c == "" || c === "nofollow") o.push(this); else { o = b("a[rel=" + c + "], area[rel=" + c + "]"); q = o.index(this) } I() } }); return this }; b.fancybox = function (a, c) {
        var g; if (!h) {
            h = true; g = typeof c !== "undefined" ? c : {}; o = []; q = parseInt(g.index, 10) || 0; if (b.isArray(a)) {
                for (var k =
0, C = a.length; k < C; k++) if (typeof a[k] == "object") b(a[k]).data("fancybox", b.extend({}, g, a[k])); else a[k] = b({}).data("fancybox", b.extend({ content: a[k] }, g)); o = jQuery.merge(o, a)
            } else { if (typeof a == "object") b(a).data("fancybox", b.extend({}, g, a)); else a = b({}).data("fancybox", b.extend({ content: a }, g)); o.push(a) } if (q > o.length || q < 0) q = 0; I()
        } 
    }; b.fancybox.showActivity = function () { clearInterval(K); t.show(); K = setInterval(Z, 66) }; b.fancybox.hideActivity = function () { t.hide() }; b.fancybox.next = function () {
        return b.fancybox.pos(p +
1)
    }; b.fancybox.prev = function () { return b.fancybox.pos(p - 1) }; b.fancybox.pos = function (a) { if (!h) { a = parseInt(a); o = l; if (a > -1 && a < l.length) { q = a; I() } else if (d.cyclic && l.length > 1) { q = a >= l.length ? 0 : l.length - 1; I() } } }; b.fancybox.cancel = function () { if (!h) { h = true; b.event.trigger("fancybox-cancel"); N(); e.onCancel(o, q, e); h = false } }; b.fancybox.close = function () {
        function a() { u.fadeOut("fast"); n.empty().hide(); f.hide(); b.event.trigger("fancybox-cleanup"); j.empty(); d.onClosed(l, p, d); l = e = []; p = q = 0; d = e = {}; h = false } if (!(h || f.is(":hidden"))) {
            h =
true; if (d && false === d.onCleanup(l, p, d)) h = false; else {
                N(); b(E.add(z).add(A)).hide(); b(j.add(u)).unbind(); b(window).unbind("resize.fb scroll.fb"); b(document).unbind("keydown.fb"); j.find("iframe").attr("src", M && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank"); d.titlePosition !== "inside" && n.empty(); f.stop(); if (d.transitionOut == "elastic") {
                    r = V(); var c = f.position(); i = { top: c.top, left: c.left, width: f.width(), height: f.height() }; if (d.opacity) i.opacity = 1; n.empty().hide(); B.prop = 1;
                    b(B).animate({ prop: 0 }, { duration: d.speedOut, easing: d.easingOut, step: T, complete: a })
                } else f.fadeOut(d.transitionOut == "none" ? 0 : d.speedOut, a)
            } 
        } 
    }; b.fancybox.resize = function () { u.is(":visible") && u.css("height", b(document).height()); b.fancybox.center(true) }; b.fancybox.center = function (a) {
        var c, g; if (!h) {
            g = a === true ? 1 : 0; c = U(); !g && (f.width() > c[0] || f.height() > c[1]) || f.stop().animate({ top: parseInt(Math.max(c[3] - 20, c[3] + (c[1] - j.height() - 40) * 0.5 - d.padding)), left: parseInt(Math.max(c[2] - 20, c[2] + (c[0] - j.width() - 40) * 0.5 -
d.padding))
            }, typeof a == "number" ? a : 200)
        } 
    }; b.fancybox.init = function () {
        if (!b("#fancybox-wrap").length) {
            b("body").append(m = b('<div id="fancybox-tmp"></div>'), t = b('<div id="fancybox-loading"><div></div></div>'), u = b('<div id="fancybox-overlay"></div>'), f = b('<div id="fancybox-wrap"></div>')); D = b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
            D.append(j = b('<div id="fancybox-content"></div>'), E = b('<a id="fancybox-close"></a>'), n = b('<div id="fancybox-title"></div>'), z = b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), A = b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')); E.click(b.fancybox.close); t.click(b.fancybox.cancel); z.click(function (a) { a.preventDefault(); b.fancybox.prev() }); A.click(function (a) { a.preventDefault(); b.fancybox.next() });
            b.fn.mousewheel && f.bind("mousewheel.fb", function (a, c) { if (h) a.preventDefault(); else if (b(a.target).get(0).clientHeight == 0 || b(a.target).get(0).scrollHeight === b(a.target).get(0).clientHeight) { a.preventDefault(); b.fancybox[c > 0 ? "prev" : "next"]() } }); b.support.opacity || f.addClass("fancybox-ie"); if (M) { t.addClass("fancybox-ie6"); f.addClass("fancybox-ie6"); b('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D) } 
        } 
    };
    b.fn.fancybox.defaults = { padding: 10, margin: 40, opacity: false, modal: false, cyclic: false, scrolling: "auto", width: 560, height: 340, autoScale: true, autoDimensions: true, centerOnScroll: false, ajax: {}, swf: { wmode: "transparent" }, hideOnOverlayClick: true, hideOnContentClick: false, overlayShow: true, overlayOpacity: 0.7, overlayColor: "#777", titleShow: true, titlePosition: "float", titleFormat: null, titleFromAlt: false, transitionIn: "fade", transitionOut: "fade", speedIn: 300, speedOut: 300, changeSpeed: 300, changeFade: "fast", easingIn: "swing",
        easingOut: "swing", showCloseButton: true, showNavArrows: true, enableEscapeButton: true, enableKeyboardNav: true, onStart: function () { }, onCancel: function () { }, onComplete: function () { }, onCleanup: function () { }, onClosed: function () { }, onError: function () { } 
    }; b(document).ready(function () { b.fancybox.init() })
})(jQuery);

/* jquery.fancybox-1.3.4.pack.js end */

$(window).load(
            function () {
                $("a.video").fancybox({
                    'padding': 0,
                    'overlayOpacity': 0.9,
                    'type': 'iframe',
                    'height': 400,
                    'width': 600,
                    'titleShow': false
                });
                $("a.popup").fancybox({
                    'padding': 0,
                    'overlayOpacity': 0.9,
                    'titleShow': false
                });
            }
        );


/* common.js start */

            jQuery(function ($) {

                //grab query parameters

                function getParameterByName(name) {
                    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
                    var regexS = "[\\?&]" + name + "=([^&#]*)";
                    var regex = new RegExp(regexS);
                    var results = regex.exec(window.location.href);
                    if (results == null)
                        return "";
                    else
                        return decodeURIComponent(results[1].replace(/\+/g, " "));
                }

                // tabs
                $(".tabs-container").tabs();

                $(".tabs-container .tabs a").bind("click", function () {
                    Cufon.refresh();
                });

                // Display Primary Nav and Global Nav Flyouts on Hover
                var $listItem = $("#primary-nav > li, #global-nav-inner > ul > li");
                var $flyout = $("#primary-nav > li > ul, #global-nav-inner > ul > li > ul");

                $listItem.has("ul").mouseenter(
        function () {
            clearTimeout(mytimer);
            $flyout.hide().prev("a").removeClass("hover").parent("li").next("li").removeClass("hover");
            $(this).next("li").addClass("hover").end().children("a").addClass("hover").append("<span></span>").next("ul").show();
            Cufon.refresh('#primary-nav li a, #global-nav li ul a');
        }
    );
                var mytimer = false;
                $listItem.has("ul").mouseleave(
        function () {
            clearTimeout(mytimer);
            var self = $(this).children("ul");
            mytimer = setTimeout(function () {
                self.hide().prev("a").removeClass("hover").children("span").remove().end().parent("li").next("li").removeClass("hover");
                Cufon.refresh('#primary-nav li a, #global-nav li ul a');
            },
            300
            );
        }
    );

                // Give "last" class to Primary Nav Dropdown li if it has no siblings
                var singleChildItem = $("#primary-nav ul").filter(function () { return $(this).children().length == 1 ? $(this).children() : false; });
                singleChildItem.addClass("single-child-item");


                $("div.feature ul.panels li:first").show();
                if ($("div.feature ul.panels li").length > 1) {

                    // Feature Slideshow
                    if ($("ul.controls").length > 0) {
                        $("div.feature").marquee({

                            state: "ul.controls",
                            display: "ul.panels > li",
                            speed: 10000,
                            transition: "fade",
                            play: "div.pauseFeature",
                            start_moving: true,
                            startdirection: "right"

                        });
                    } else {
                        
                        $('.feature .panels').cycle({
                            fx: 'fade',
                            pager: '#featureNav',
                            prev: '.intro .prev',
                            next: '.intro .next',
                            speed: 1000,
                            timeout: 10000,
                            manualTrump: true
                        });

                    }

                } else {
                    $("#featureNav").hide();
                    $("ul.controls").hide();
                }


                // css for ie6
                $("#explore-products .tabs-container .features .related-links li:first-child, #global-nav li:first-child, #primary-nav li:first-child, #head #global-nav .flyout li:first-child, #secondary-nav li:first-child").addClass("first-child");
                $("#left-col .widgetColumn:last,#main .widget > ul > li:last-child").addClass("last");

                $("a.contact-us").hover(function () {
                    $(this).addClass("hover");
                },
        function () {
            $(this).removeClass("hover");
        }
    );

                $("a.media").hover(function () {
                    $(this).find(".play").addClass("play-hover");
                },
        function () {
            $(this).find(".play").removeClass("play-hover");
        }
    );


                // Contact Us Fancybox
                $("a#contact-modal-link").fancybox({
                    'padding': 6,
                    'overlayOpacity': 0.4,
                    'overlayColor': '#000'
                });

                //slideshow
                // init slideshows
                var $slideshows = $(".slideshow");
                $slideshows.find(':first-child').show();

                if ($slideshows.length > 0) {
                    var interval = setInterval(
        function () {
            $slideshows.each(function () {
                // 'this' now is ref to specific slideshow
                $(this).find(':first-child').fadeOut().delay(1000).next('img').fadeIn().end().appendTo(this);
            });
        }, 5000); // 5 sec timeout
                }

                //eloqua pdf tracking url overwrite
                $("a[href*='/Collateral/']").each(function () {
                    var originalLink = this.href;
                    this.href = this.href.replace(originalLink, "http://www.blackboard.com/resources/elqNow/ElqReDir.htm?ref=" + originalLink);
                });


                //external campaign tracking
                var extCmpCookie = getParameterByName("EXTCMPID");
                if (extCmpCookie != "") {
                    $.cookie("EXTCMPID", null);
                    $.cookie("EXTCMPID", extCmpCookie, { expires: 30, path: '/' });
                }
                //google analytics click tracking

                //video play
                $('a.video').click(function () {
                    _gaq.push(['_trackEvent', 'Videos', 'Play', $(this).attr('href')]);
                });

                //external links
                $('a.external').click(function () {
                    _gaq.push(['_trackEvent', 'External Links', 'Click', $(this).attr('href')]);
                });

                //partner referrals
                $('a.partner').click(function () {
                    _gaq.push(['_trackEvent', 'Partner Referrals', 'Click', $(this).attr('href')]);
                });

                //events and webinars
                $('a.events').click(function () {
                    _gaq.push(['_trackEvent', 'Events and Webinars', 'Click', $(this).attr('href')]);
                });

                //lightbox image
                $('a.popup').click(function () {
                    _gaq.push(['_trackEvent', 'Popup', 'Enlarge', $(this).attr('href')]);
                });

                //whitepaper
                $('a.whitepaper').click(function () {
                    _gaq.push(['_trackEvent', 'Download', 'White Paper', $(this).attr('href')]);
                });

                //brochure
                $('a.brochure').click(function () {
                    _gaq.push(['_trackEvent', 'Download', 'Brochure', $(this).attr('href')]);
                });

                //datasheet
                $('a.datasheet').click(function () {
                    _gaq.push(['_trackEvent', 'Download', 'Datasheet', $(this).attr('href')]);
                });

                //casestudy
                $('a.casestudy').click(function () {
                    _gaq.push(['_trackEvent', 'Download', 'Case Study', $(this).attr('href')]);
                });

                //blog
                $('a.blog').click(function () {
                    _gaq.push(['_trackEvent', 'Blog', 'Click', $(this).attr('href')]);
                });

                //twitter
                $('a.twitter').click(function () {
                    _gaq.push(['_trackEvent', 'Twitter', 'Click', $(this).attr('href')]);
                });

                //facebook
                $('a.facebook').click(function () {
                    _gaq.push(['_trackEvent', 'Facebook', 'Click', $(this).attr('href')]);
                });

                //PR News
                $('a.media.widget').click(function () {
                    _gaq.push(['_trackEvent', 'PR and News', 'Click', $(this).attr('href')]);
                });

                //RSS
                $('a.rss.widget').click(function () {
                    _gaq.push(['_trackEvent', 'RSS', 'Click', $(this).attr('href')]);
                });

                //email link
                $('a.[href^="mailto:"]').click(function () {
                    _gaq.push(['_trackEvent', 'Contact', 'EMail', $(this).attr('href')]);
                });

                //misc download
                $('a.download').click(function () {
                    _gaq.push(['_trackEvent', 'Download', 'Misc', $(this).attr('href')]);
                });

                //contact link
                $('a.contact').click(function () {
                    _gaq.push(['_trackEvent', 'Contact link', 'Click', $(this).attr('href')]);
                });

                //link to landing page
                $('a.landingpage').click(function () {
                    _gaq.push(['_trackEvent', 'Landing Page', 'Click', $(this).attr('href')]);
                });

                //read more link
                $('a.readmore').click(function () {
                    _gaq.push(['_trackEvent', 'Read More Link', 'Click', $(this).attr('href')]);
                });

                //manual event link
                $('a.eventl').click(function () {
                    _gaq.push(['_trackEvent', 'Events and Webinars', 'Click', $(this).attr('href')]);
                });

                //manual webinar link
                $('a.webinar').click(function () {
                    _gaq.push(['_trackEvent', 'Events and Webinars', 'Click', $(this).attr('href')]);
                });

                //feature banners

                $('a.banner-home').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'bb.com home', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-learn').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Learn', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-connect').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Connect', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-collab').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Collaborate', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-transact').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Transact', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-mobile').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Mobile', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-analytics').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Analytics', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-engage').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Engage', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-k12').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'K12', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-nahe').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'NAHE', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-cc').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Career Colleges', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-corp').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Corporations', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-mil').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Military', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-gov').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Government', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-assoc').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'Associations', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });
                $('a.banner-emea').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'EMEA', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.banner-apac').click(function () {
                    _gaq.push(['_trackEvent', 'banner', 'APAC', $(this).attr('name') + '&link=' + $(this).attr('href')]);
                });

                $('a.platform-block').click(function () {
                    _gaq.push(['_trackEvent', 'Nav', 'Home Page Platforms Tab', $(this).attr('title')]);
                });
            });

/* common.js end */



// Copyright Eloqua Corporation.
var elqWDt = new Date(20020101);
var elqDt = new Date();
var elqMs = elqDt.getMilliseconds();
var elqTzo = elqWDt.getTimezoneOffset();
var elqRef2 = '';
if (typeof elqCurE != 'undefined'){
if (document.referrer) { elqRef2 = escape(document.referrer); }
if ((typeof elqRef2 == 'undefined') || (elqRef2 == 'undefined') || (elqRef2 == '')) { elqRef2 = 'elqNone'; }
if (navigator.appName == 'Netscape' || navigator.userAgent.indexOf("Opera")!=-1) { document.write('<la' + 'yer hidden=true><im' + 'g src="' + elqCurE + '?pps=3&siteid=' + elqSiteID + '&ref2=' + elqRef2 + '&tzo=' + elqTzo + '&ms=' + elqMs + '" border=0 width=1 height=1 ><\/la' + 'yer>');}
else { document.write('<im' + 'g style="display:none" src="' + elqCurE + '?pps=3&siteid=' + elqSiteID + '&ref2=' + elqRef2 + '&tzo=' + elqTzo + '&ms=' + elqMs + '" border=0 width=1 height=1 >');}
}

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
    "use strict";
    if (this == null) {
      throw new TypeError();
    }
    var t = Object(this);
    var len = t.length >>> 0;

    if (len === 0) {
      return -1;
    }
    var n = 0;
    if (arguments.length > 1) {
      n = Number(arguments[1]);
      if (n != n) { // shortcut for verifying if it's NaN
        n = 0;
      } else if (n != 0 && n != Infinity && n != -Infinity) {
        n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }
    }
    if (n >= len) {
      return -1;
    }
    var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
    for (; k < len; k++) {
      if (k in t && t[k] === searchElement) {
        return k;
      }
    }
    return -1;
  }
}
/**
 * A Twitter library in JavaScript
 *
 * @package codebird
 * @version 2.4.1
 * @author J.M. <me@mynetx.net>
 * @copyright 2010-2013 J.M. <me@mynetx.net>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/* jshint curly: true,
          eqeqeq: true,
          indent: 4,
          latedef: true,
          quotmark: double,
          undef: true,
          unused: true,
          trailing: true,
          laxbreak: true */
/* global window,
          document,
          navigator,
          console,
          XMLHttpRequest,
          ActiveXObject,
          b64pad: true,
          b64_hmac_sha1 */

/**
 * Array.indexOf polyfill
 */
if (! Array.indexOf) {
    Array.prototype.indexOf = function (obj, start) {
        for (var i = (start || 0); i < this.length; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    };
}

/**
 * A Twitter library in JavaScript
 *
 * @package codebird
 * @subpackage codebird-js
 */
/* jshint -W098 */
var Codebird = function () {
/* jshint +W098 */

    /**
     * The OAuth consumer key of your registered app
     */
    var _oauth_consumer_key = null;

    /**
     * The corresponding consumer secret
     */
    var _oauth_consumer_secret = null;

    /**
     * The app-only bearer token. Used to authorize app-only requests
     */
    var _oauth_bearer_token = null;

    /**
     * The API endpoint base to use
     */
    var _endpoint_base = "https://api.twitter.com/";

    /**
     * The API endpoint to use
     */
    var _endpoint = _endpoint_base + "1.1/";

    /**
     * The API endpoint to use for OAuth requests
     */
    var _endpoint_oauth = _endpoint_base;

    /**
     * API proxy endpoint
     */
    var _endpoint_proxy = "https://api.jublo.net/codebird/";

    /**
     * Use JSONP for GET requests in IE7-9
     */
    var _use_jsonp = (typeof navigator !== "undefined"
        && typeof navigator.userAgent !== "undefined"
        && (navigator.userAgent.indexOf("Trident/4") > -1
            || navigator.userAgent.indexOf("Trident/5") > -1
            || navigator.userAgent.indexOf("MSIE 7.0") > -1
        )
    );

    /**
     * Whether to access the API via a proxy that is allowed by CORS
     */
    var _use_proxy = true;

    /**
     * The Request or access token. Used to sign requests
     */
    var _oauth_token = null;

    /**
     * The corresponding request or access token secret
     */
    var _oauth_token_secret = null;

    /**
     * The current Codebird version
     */
    var _version = "2.4.1";

    /**
     * Sets the OAuth consumer key and secret (App key)
     *
     * @param string key    OAuth consumer key
     * @param string secret OAuth consumer secret
     *
     * @return void
     */
    var setConsumerKey = function (key, secret) {
        _oauth_consumer_key = key;
        _oauth_consumer_secret = secret;
    };

    /**
     * Sets the OAuth2 app-only auth bearer token
     *
     * @param string token OAuth2 bearer token
     *
     * @return void
     */
    var setBearerToken = function (token) {
        _oauth_bearer_token = token;
    };

    /**
     * Gets the current Codebird version
     *
     * @return string The version number
     */
    var getVersion = function () {
        return _version;
    };

    /**
     * Sets the OAuth request or access token and secret (User key)
     *
     * @param string token  OAuth request or access token
     * @param string secret OAuth request or access token secret
     *
     * @return void
     */
    var setToken = function (token, secret) {
        _oauth_token = token;
        _oauth_token_secret = secret;
    };

    /**
     * Enables or disables CORS proxy
     *
     * @param bool use_proxy Whether to use CORS proxy or not
     *
     * @return void
     */
    var setUseProxy = function (use_proxy) {
        _use_proxy = !! use_proxy;
    };

    /**
     * Sets custom CORS proxy server
     *
     * @param string proxy Address of proxy server to use
     *
     * @return void
     */
    var setProxy = function (proxy) {
        // add trailing slash if missing
        if (! proxy.match(/\/$/)) {
            proxy += "/";
        }
        _endpoint_proxy = proxy;
    };

    /**
     * Parse URL-style parameters into object
     *
     * @param string str String to parse
     * @param array array to load data into
     *
     * @return object
     */
    function parse_str(str, array) {
        // Parses GET/POST/COOKIE data and sets global variables
        //
        // version: 1109.2015
        // discuss at: http://phpjs.org/functions/parse_str    // +   original by: Cagri Ekin
        // +   improved by: Michael White (http://getsprink.com)
        // +    tweaked by: Jack
        // +   bugfixed by: Onno Marsman
        // +   reimplemented by: stag019    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
        // +   bugfixed by: stag019
        // -    depends on: urldecode
        // +   input by: Dreamer
        // +   bugfixed by: Brett Zamir (http://brett-zamir.me)    // %        note 1: When no argument is specified, will put variables in global scope.
        // *     example 1: var arr = {};
        // *     example 1: parse_str('first=foo&second=bar', arr);
        // *     results 1: arr == { first: 'foo', second: 'bar' }
        // *     example 2: var arr = {};    // *     example 2: parse_str('str_a=Jack+and+Jill+didn%27t+see+the+well.', arr);
        // *     results 2: arr == { str_a: "Jack and Jill didn't see the well." }
        var glue1 = "=",
            glue2 = "&",
            array2 = String(str).replace(/^&?([\s\S]*?)&?$/, "$1").split(glue2),
            i, j, chr, tmp, key, value, bracket, keys, evalStr,
            fixStr = function (str) {
                return decodeURIComponent(str).replace(/([\\"'])/g, "\\$1").replace(/\n/g, "\\n").replace(/\r/g, "\\r");
            };
        if (!array) {
            array = this.window;
        }

        for (i = 0; i < array2.length; i++) {
            tmp = array2[i].split(glue1);
            if (tmp.length < 2) {
                tmp = [tmp, ""];
            }
            key = fixStr(tmp[0]);
            value = fixStr(tmp[1]);
            while (key.charAt(0) === " ") {
                key = key.substr(1);
            }
            if (key.indexOf("\0") !== -1) {
                key = key.substr(0, key.indexOf("\0"));
            }
            if (key && key.charAt(0) !== "[") {
                keys = [];
                bracket = 0;
                for (j = 0; j < key.length; j++) {
                    if (key.charAt(j) === "[" && !bracket) {
                        bracket = j + 1;
                    } else if (key.charAt(j) === "]") {
                        if (bracket) {
                            if (!keys.length) {
                                keys.push(key.substr(0, bracket - 1));
                            }
                            keys.push(key.substr(bracket, j - bracket));
                            bracket = 0;
                            if (key.charAt(j + 1) !== "[") {
                                break;
                            }
                        }
                    }
                }
                if (!keys.length) {
                    keys = [key];
                }
                for (j = 0; j < keys[0].length; j++) {
                    chr = keys[0].charAt(j);
                    if (chr === " " || chr === "." || chr === "[") {
                        keys[0] = keys[0].substr(0, j) + "_" + keys[0].substr(j + 1);
                    }
                    if (chr === "[") {
                        break;
                    }
                }
                /* jshint -W061 */
                evalStr = "array";
                for (j = 0; j < keys.length; j++) {
                    key = keys[j];
                    if ((key !== "" && key !== " ") || j === 0) {
                        key = "'" + key + "'";
                    } else {
                        key = eval(evalStr + ".push([]);") - 1;
                    }
                    evalStr += "[" + key + "]";
                    if (j !== keys.length - 1 && eval("typeof " + evalStr) === "undefined") {
                        eval(evalStr + " = [];");
                    }
                }
                evalStr += " = '" + value + "';\n";
                eval(evalStr);
                /* jshint +W061 */
            }
        }
    }

    /**
     * Main API handler working on any requests you issue
     *
     * @param string   fn            The member function you called
     * @param array    params        The parameters you sent along
     * @param function callback      The callback to call with the reply
     * @param bool     app_only_auth Whether to use app-only auth
     *
     * @return mixed The API reply encoded in the set return_format
     */

    var __call = function (fn, params, callback, app_only_auth) {
        if (typeof params === "undefined") {
            params = {};
        }
        if (typeof app_only_auth === "undefined") {
            app_only_auth = false;
        }
        if (typeof callback !== "function" && typeof params === "function") {
            callback = params;
            params = {};
            if (typeof callback === "bool") {
                app_only_auth = callback;
            }
        } else if (typeof callback === "undefined") {
            callback = function () {};
        }
        switch (fn) {
        case "oauth_authenticate":
        case "oauth_authorize":
            return this[fn](params, callback);

        case "oauth2_token":
            return this[fn](callback);
        }
        // parse parameters
        var apiparams = {};
        if (typeof params === "object") {
            apiparams = params;
        } else {
            parse_str(params, apiparams); //TODO
        }

        // map function name to API method
        var method = "";
        var param, i, j;

        // replace _ by /
        var path = fn.split("_");
        for (i = 0; i < path.length; i++) {
            if (i > 0) {
                method += "/";
            }
            method += path[i];
        }

        // undo replacement for URL parameters
        var url_parameters_with_underscore = ["screen_name"];
        for (i = 0; i < url_parameters_with_underscore.length; i++) {
            param = url_parameters_with_underscore[i].toUpperCase();
            var replacement_was = param.split("_").join("/");
            method = method.split(replacement_was).join(param);
        }

        // replace AA by URL parameters
        var method_template = method;
        var match = method.match(/[A-Z_]{2,}/);
        if (match) {
            for (i = 0; i < match.length; i++) {
                param = match[i];
                var param_l = param.toLowerCase();
                method_template = method_template.split(param).join(":" + param_l);
                if (typeof apiparams[param_l] === "undefined") {
                    for (j = 0; j < 26; j++) {
                        method_template = method_template.split(String.fromCharCode(65 + j)).join("_" + String.fromCharCode(97 + j));
                    }
                    console.warn("To call the templated method \"" + method_template + "\", specify the parameter value for \"" + param_l + "\".");
                }
                method = method.split(param).join(apiparams[param_l]);
                delete apiparams[param_l];
            }
        }

        // replace A-Z by _a-z
        for (i = 0; i < 26; i++) {
            method = method.split(String.fromCharCode(65 + i)).join("_" + String.fromCharCode(97 + i));
            method_template = method_template.split(String.fromCharCode(65 + i)).join("_" + String.fromCharCode(97 + i));
        }

        var httpmethod = _detectMethod(method_template, apiparams);
        var multipart = _detectMultipart(method_template);

        return _callApi(
            httpmethod,
            method,
            method_template,
            apiparams,
            multipart,
            app_only_auth,
            callback
        );
    };

    /**
     * Gets the OAuth authenticate URL for the current request token
     *
     * @return string The OAuth authenticate URL
     */
    var oauth_authenticate = function (params, callback) {
        if (typeof params.force_login === "undefined") {
            params.force_login = null;
        }
        if (typeof params.screen_name === "undefined") {
            params.screen_name = null;
        }
        if (_oauth_token === null) {
            console.warn("To get the authenticate URL, the OAuth token must be set.");
        }
        var url = _endpoint_oauth + "oauth/authenticate?oauth_token=" + _url(_oauth_token);
        if (params.force_login === true) {
            url += "?force_login=1";
            if (params.screen_name !== null) {
                url += "&screen_name=" + params.screen_name;
            }
        }
        callback(url);
        return true;
    };

    /**
     * Gets the OAuth authorize URL for the current request token
     *
     * @return string The OAuth authorize URL
     */
    var oauth_authorize = function (params, callback) {
        if (typeof params.force_login === "undefined") {
            params.force_login = null;
        }
        if (typeof params.screen_name === "undefined") {
            params.screen_name = null;
        }
        if (_oauth_token === null) {
            console.warn("To get the authorize URL, the OAuth token must be set.");
        }
        var url = _endpoint_oauth + "oauth/authorize?oauth_token=" + _url(_oauth_token);
        if (params.force_login === true) {
            url += "?force_login=1";
            if (params.screen_name !== null) {
                url += "&screen_name=" + params.screen_name;
            }
        }
        callback(url);
        return true;
    };

    /**
     * Gets the OAuth bearer token
     *
     * @return string The OAuth bearer token
     */

    var oauth2_token = function (callback) {
        if (_oauth_consumer_key === null) {
            console.warn("To obtain a bearer token, the consumer key must be set.");
        }

        if (typeof callback === "undefined") {
            callback = function () {};
        }

        var post_fields = "grant_type=client_credentials";
        var url = _endpoint_oauth + "oauth2/token";

        if (_use_proxy) {
            url = url.replace(
                _endpoint_base,
                _endpoint_proxy
            );
        }

        var xml;
        try {
            xml = new XMLHttpRequest();
        } catch (e) {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xml.open("POST", url, true);
        xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xml.setRequestHeader(
            (_use_proxy ? "X-" : "") + "Authorization",
            "Basic " + base64_encode(_oauth_consumer_key + ":" + _oauth_consumer_secret)
        );

        xml.onreadystatechange = function () {
            if (xml.readyState >= 4) {
                var httpstatus = 12027;
                try {
                    httpstatus = xml.status;
                } catch (e) {}
                var reply = _parseApiReply("oauth2/token", xml.responseText);
                reply.httpstatus = httpstatus;
                if (httpstatus === 200) {
                    setBearerToken(reply.access_token);
                }
                callback(reply);
            }
        };
        xml.send(post_fields);

    };

    /**
     * Signing helpers
     */

    /**
     * URL-encodes the given data
     *
     * @param mixed data
     *
     * @return mixed The encoded data
     */
    var _url = function (data) {
        if (typeof data === "array") {
            /*
            return array_map(
                [ // TODO
                    this, "_url"
                ],
                data
            );
            */
        } else if ((/boolean|number|string/).test(typeof data)) {
            return encodeURIComponent(data).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
        } else {
            return "";
        }
    };

    /**
     * Gets the base64-encoded SHA1 hash for the given data
     *
     * @param string data The data to calculate the hash from
     *
     * @return string The hash
     */
    var _sha1 = function (data) {
        if (_oauth_consumer_secret === null) {
            console.warn("To generate a hash, the consumer secret must be set.");
        }
        if (typeof b64_hmac_sha1 !== "function") {
            console.warn("To generate a hash, the Javascript SHA1.js must be available.");
        }
        /*jshint -W020 */
        b64pad = "=";
        /*jshint +W020 */
        return b64_hmac_sha1(_oauth_consumer_secret + "&" + (_oauth_token_secret !== null ? _oauth_token_secret : ""), data);
    };

    var base64_encode = function (data) {
        // http://kevin.vanzonneveld.net
        // +   original by: Tyler Akins (http://rumkin.com)
        // +   improved by: Bayron Guevara
        // +   improved by: Thunder.m
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   bugfixed by: Pellentesque Malesuada
        // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   improved by: Rafał Kukawski (http://kukawski.pl)
        // *     example 1: base64_encode('Kevin van Zonneveld');
        // *     returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
        // mozilla has this native
        // - but breaks in 2.0.0.12!
        //if (typeof this.window['btoa'] == 'function') {
        //    return btoa(data);
        //}
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            enc = "",
            tmp_arr = [];

        if (! data) {
            return data;
        }

        do { // pack three octets into four hexets
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            // use hexets to index into b64, and append result to encoded string
            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);

        enc = tmp_arr.join("");

        var r = data.length % 3;

        return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
    };

    var http_build_query = function (formdata, numeric_prefix, arg_separator) {
        // http://kevin.vanzonneveld.net
        // +     original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +     improved by: Legaev Andrey
        // +     improved by: Michael White (http://getsprink.com)
        // +     improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +     improved by: Brett Zamir (http://brett-zamir.me)
        // +        revised by: stag019
        // +     input by: Dreamer
        // +     bugfixed by: Brett Zamir (http://brett-zamir.me)
        // +     bugfixed by: MIO_KODUKI (http://mio-koduki.blogspot.com/)
        // %                note 1: If the value is null, key and value is skipped in http_build_query of PHP. But, phpjs is not.
        var value, key, tmp = [];

        var _http_build_query_helper = function (key, val, arg_separator) {
            var k, tmp = [];
            if (val === true) {
                val = "1";
            } else if (val === false) {
                val = "0";
            }
            if (val !== null) {
                if(typeof(val) === "object") {
                    for (k in val) {
                        if (val[k] !== null) {
                            tmp.push(_http_build_query_helper(key + "[" + k + "]", val[k], arg_separator));
                        }
                    }
                    return tmp.join(arg_separator);
                } else if (typeof(val) !== "function") {
                    return _url(key) + "=" + _url(val);
                } else {
                    throw new Error("There was an error processing for http_build_query().");
                }
            } else {
                return "";
            }
        };

        if (!arg_separator) {
            arg_separator = "&";
        }
        for (key in formdata) {
            value = formdata[key];
            if (numeric_prefix && !isNaN(key)) {
                key = String(numeric_prefix) + key;
            }
            var query=_http_build_query_helper(key, value, arg_separator);
            if(query !== "") {
                tmp.push(query);
            }
        }

        return tmp.join(arg_separator);
    };

    /**
     * Generates a (hopefully) unique random string
     *
     * @param int optional length The length of the string to generate
     *
     * @return string The random string
     */
    var _nonce = function (length) {
        if (typeof length === "undefined") {
            length = 8;
        }
        if (length < 1) {
            console.warn("Invalid nonce length.");
        }
        var nonce = "";
        for (var i = 0; i < length; i++) {
            var character = Math.floor(Math.random() * 61);
            nonce += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".substring(character, character + 1);
        }
        return nonce;
    };

    var _ksort = function (inputArr) {
        var keys = [], sorter, k;

        sorter = function (a, b) {
            var aFloat = parseFloat(a),
            bFloat = parseFloat(b),
            aNumeric = aFloat + "" === a,
            bNumeric = bFloat + "" === b;
            if (aNumeric && bNumeric) {
                return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
            } else if (aNumeric && !bNumeric) {
                return 1;
            } else if (!aNumeric && bNumeric) {
                return -1;
            }
            return a > b ? 1 : a < b ? -1 : 0;
        };

        // Make a list of key names
        for (k in inputArr) {
            if (inputArr.hasOwnProperty(k)) {
                keys.push(k);
            }
        }
        keys.sort(sorter);
        return keys;
    };

    /**
     * Clone objects
     * 
     * @param object obj    The object to clone
     *
     * @return object clone The cloned object
     */
    var _clone = function (obj) {
        var clone = {};
        for (var i in obj) {
            if (typeof(obj[i]) === "object") {
                clone[i] = clone(obj[i]);
            } else {
                clone[i] = obj[i];
            }
        }
        return clone;
    };

    /**
     * Generates an OAuth signature
     *
     * @param string          httpmethod    Usually either 'GET' or 'POST' or 'DELETE'
     * @param string          method        The API method to call
     * @param array  optional params        The API call parameters, associative
     * @param bool   optional append_to_get Whether to append the OAuth params to GET
     *
     * @return string Authorization HTTP header
     */
    var _sign = function (httpmethod, method, params, append_to_get) {
        if (typeof params === "undefined") {
            params = {};
        }
        if (typeof append_to_get === "undefined") {
            append_to_get = false;
        }
        if (_oauth_consumer_key === null) {
            console.warn("To generate a signature, the consumer key must be set.");
        }
        var sign_params = {
            consumer_key: _oauth_consumer_key,
            version: "1.0",
            timestamp: Math.round(new Date().getTime() / 1000),
            nonce: _nonce(),
            signature_method: "HMAC-SHA1"
        };
        var sign_base_params = {};
        var value;
        for (var key in sign_params) {
            value = sign_params[key];
            sign_base_params["oauth_" + key] = _url(value);
        }
        if (_oauth_token !== null) {
            sign_base_params.oauth_token = _url(_oauth_token);
        }
        var oauth_params = _clone(sign_base_params);
        for (key in params) {
            value = params[key];
            sign_base_params[key] = value;
        }
        var keys = _ksort(sign_base_params);
        var sign_base_string = "";
        for (var i = 0; i < keys.length; i++) {
            key = keys[i];
            value = sign_base_params[key];
            sign_base_string += key + "=" + _url(value) + "&";
        }
        sign_base_string = sign_base_string.substring(0, sign_base_string.length - 1);
        var signature = _sha1(httpmethod + "&" + _url(method) + "&" + _url(sign_base_string));

        params = append_to_get ? sign_base_params : oauth_params;
        params.oauth_signature = signature;
        keys = _ksort(params);
        var authorization = "";
        if (append_to_get) {
            for(i = 0; i < keys.length; i++) {
                key = keys[i];
                value = params[key];
                authorization += key + "=" + _url(value) + "&";
            }
            return authorization.substring(0, authorization.length - 1);
        }
        authorization = "OAuth ";
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            value = params[key];
            authorization += key + "=\"" + _url(value) + "\", ";
        }
        return authorization.substring(0, authorization.length - 2);
    };

    /**
     * Detects HTTP method to use for API call
     *
     * @param string method The API method to call
     * @param array  params The parameters to send along
     *
     * @return string The HTTP method that should be used
     */
    var _detectMethod = function (method, params) {
        // multi-HTTP method endpoints
        switch(method) {
        case "account/settings":
            method = params.length ? method + "__post" : method;
            break;
        }

        var httpmethods = {};
        httpmethods.GET = [
            // Timelines
            "statuses/mentions_timeline",
            "statuses/user_timeline",
            "statuses/home_timeline",
            "statuses/retweets_of_me",

            // Tweets
            "statuses/retweets/:id",
            "statuses/show/:id",
            "statuses/oembed",

            // Search
            "search/tweets",

            // Direct Messages
            "direct_messages",
            "direct_messages/sent",
            "direct_messages/show",

            // Friends & Followers
            "friendships/no_retweets/ids",
            "friends/ids",
            "followers/ids",
            "friendships/lookup",
            "friendships/incoming",
            "friendships/outgoing",
            "friendships/show",
            "friends/list",
            "followers/list",

            // Users
            "account/settings",
            "account/verify_credentials",
            "blocks/list",
            "blocks/ids",
            "users/lookup",
            "users/show",
            "users/search",
            "users/contributees",
            "users/contributors",
            "users/profile_banner",

            // Suggested Users
            "users/suggestions/:slug",
            "users/suggestions",
            "users/suggestions/:slug/members",

            // Favorites
            "favorites/list",

            // Lists
            "lists/list",
            "lists/statuses",
            "lists/memberships",
            "lists/subscribers",
            "lists/subscribers/show",
            "lists/members/show",
            "lists/members",
            "lists/show",
            "lists/subscriptions",

            // Saved searches
            "saved_searches/list",
            "saved_searches/show/:id",

            // Places & Geo
            "geo/id/:place_id",
            "geo/reverse_geocode",
            "geo/search",
            "geo/similar_places",

            // Trends
            "trends/place",
            "trends/available",
            "trends/closest",

            // OAuth
            "oauth/authenticate",
            "oauth/authorize",

            // Help
            "help/configuration",
            "help/languages",
            "help/privacy",
            "help/tos",
            "application/rate_limit_status"
        ];
        httpmethods.POST = [
            // Tweets
            "statuses/destroy/:id",
            "statuses/update",
            "statuses/retweet/:id",
            "statuses/update_with_media",

            // Direct Messages
            "direct_messages/destroy",
            "direct_messages/new",

            // Friends & Followers
            "friendships/create",
            "friendships/destroy",
            "friendships/update",

            // Users
            "account/settings__post",
            "account/update_delivery_device",
            "account/update_profile",
            "account/update_profile_background_image",
            "account/update_profile_colors",
            "account/update_profile_image",
            "blocks/create",
            "blocks/destroy",
            "account/update_profile_banner",
            "account/remove_profile_banner",

            // Favorites
            "favorites/destroy",
            "favorites/create",

            // Lists
            "lists/members/destroy",
            "lists/subscribers/create",
            "lists/subscribers/destroy",
            "lists/members/create_all",
            "lists/members/create",
            "lists/destroy",
            "lists/update",
            "lists/create",
            "lists/members/destroy_all",

            // Saved Searches
            "saved_searches/create",
            "saved_searches/destroy/:id",

            // Places & Geo
            "geo/place",

            // Spam Reporting
            "users/report_spam",

            // OAuth
            "oauth/access_token",
            "oauth/request_token",
            "oauth2/token",
            "oauth2/invalidate_token"
        ];
        for (var httpmethod in httpmethods) {
            if (httpmethods[httpmethod].indexOf(method) > -1) {
                return httpmethod;
            }
        }
        console.warn("Can't find HTTP method to use for \"" + method + "\".");
    };

    /**
     * Detects if API call should use multipart/form-data
     *
     * @param string method The API method to call
     *
     * @return bool Whether the method should be sent as multipart
     */
    var _detectMultipart = function (method) {
        var multiparts = [
            // Tweets
            "statuses/update_with_media",

            // Users
            "account/update_profile_background_image",
            "account/update_profile_image",
            "account/update_profile_banner"
        ];
        return multiparts.indexOf(method) > -1;
    };

    /**
     * Build multipart request from upload params
     *
     * @param string method  The API method to call
     * @param array  params  The parameters to send along
     *
     * @return string The built multipart request body
     */
    var _buildMultipart = function (method, params) {
        // well, files will only work in multipart methods
        if (! _detectMultipart(method)) {
            return;
        }

        // only check specific parameters
        var possible_methods = [
            // Tweets
            "statuses/update_with_media",
            // Accounts
            "account/update_profile_background_image",
            "account/update_profile_image",
            "account/update_profile_banner"
        ];
        var possible_files = {
            // Tweets
            "statuses/update_with_media": "media[]",
            // Accounts
            "account/update_profile_background_image": "image",
            "account/update_profile_image": "image",
            "account/update_profile_banner": "banner"
        };
        // method might have files?
        if (possible_methods.indexOf(method) === -1) {
            return;
        }

        // check for filenames
        possible_files = possible_files[method].split(" ");

        var multipart_border = "--------------------" + _nonce();
        var multipart_request = "";
        for (var key in params) {
            multipart_request +=
                "--" + multipart_border + "\r\n"
                + "Content-Disposition: form-data; name=\"" + key + "\"";
            if (possible_files.indexOf(key) > -1) {
                multipart_request +=
                    "\r\nContent-Transfer-Encoding: base64";
            }
            multipart_request +=
                "\r\n\r\n" + params[key] + "\r\n";
        }
        multipart_request += "--" + multipart_border + "--";
        return multipart_request;
    };

    /**
     * Builds the complete API endpoint url
     *
     * @param string method           The API method to call
     *
     * @return string The URL to send the request to
     */
    var _getEndpoint = function (method) {
        var url;
        if (method.substring(0, 5) === "oauth") {
            url = _endpoint_oauth + method;
        } else {
            url = _endpoint + method + ".json";
        }
        return url;
    };

    /**
     * Calls the API using cURL
     *
     * @param string          httpmethod      The HTTP method to use for making the request
     * @param string          method          The API method to call
     * @param string          method_template The templated API method to call
     * @param array  optional params          The parameters to send along
     * @param bool   optional multipart       Whether to use multipart/form-data
     * @param bool   optional $app_only_auth  Whether to use app-only bearer authentication
     * @param function        callback        The function to call with the API call result
     *
     * @return mixed The API reply, encoded in the set return_format
     */

    var _callApi = function (httpmethod, method, method_template, params, multipart, app_only_auth, callback) {
        if (typeof params === "undefined") {
            params = {};
        }
        if (typeof multipart === "undefined") {
            multipart = false;
        }
        if (typeof app_only_auth === "undefined") {
            app_only_auth = false;
        }
        if (typeof callback !== "function") {
            callback = function () {};
        }

        var url = _getEndpoint(method);
        var authorization = null;

        var xml, post_fields;
        try {
            xml = new XMLHttpRequest();
        } catch (e) {
            xml = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (httpmethod === "GET") {
            var url_with_params = url;
            if (JSON.stringify(params) !== "{}") {
                url_with_params += "?" + http_build_query(params);
            }
            authorization = _sign(httpmethod, url, params);

            // append auth params to GET url for IE7-9, to send via JSONP
            if (_use_jsonp) {
                if (JSON.stringify(params) !== "{}") {
                    url_with_params += "&";
                } else {
                    url_with_params += "?";
                }
                var callback_name = _nonce();
                window[callback_name] = function (reply) {
                    reply.httpstatus = 200;
                    callback(reply);
                };
                params.callback = callback_name;
                url_with_params = url + "?" + _sign(httpmethod, url, params, true);
                var tag = document.createElement("script");
                tag.type = "text/javascript";
                tag.src = url_with_params;
                var body = document.getElementsByTagName("body")[0];
                body.appendChild(tag);
                return;

            } else if (_use_proxy) {
                url_with_params = url_with_params.replace(
                    _endpoint_base,
                    _endpoint_proxy
                );
            }
            xml.open(httpmethod, url_with_params, true);
        } else {
            if (_use_jsonp) {
                console.warn("Sending POST requests is not supported for IE7-9.");
                return;
            }
            if (multipart) {
                authorization = _sign(httpmethod, url, {});
                params        = _buildMultipart(method, params);
            } else {
                authorization = _sign(httpmethod, url, params);
                params        = http_build_query(params);
            }
            post_fields = params;
            if (_use_proxy || multipart) { // force proxy for multipart base64
                url = url.replace(
                    _endpoint_base,
                    _endpoint_proxy
                );
            }
            xml.open(httpmethod, url, true);
            if (multipart) {
                xml.setRequestHeader("Content-Type", "multipart/form-data; boundary="
                    + post_fields.split("\r\n")[0].substring(2));
            } else {
                xml.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            }
        }
        if (app_only_auth) {
            if (_oauth_consumer_key === null) {
                console.warn("To make an app-only auth API request, the consumer key must be set.");
            }
            // automatically fetch bearer token, if necessary
            if (_oauth_bearer_token === null) {
                return oauth2_token(function () {
                    _callApi(httpmethod, method, method_template, params, multipart, app_only_auth, callback);
                });
            }
            authorization = "Bearer " + _oauth_bearer_token;
        }
        if (authorization !== null) {
            xml.setRequestHeader((_use_proxy ? "X-" : "") + "Authorization", authorization);
        }
        xml.onreadystatechange = function () {
            if (xml.readyState >= 4) {
                var httpstatus = 12027;
                try {
                    httpstatus = xml.status;
                } catch (e) {}
                var reply = _parseApiReply(method_template, xml.responseText);
                reply.httpstatus = httpstatus;
                callback(reply);
            }
        };
        xml.send(httpmethod === "GET" ? null : post_fields);
        return true;
    };

    /**
     * Parses the API reply to encode it in the set return_format
     *
     * @param string method The method that has been called
     * @param string reply  The actual reply, JSON-encoded or URL-encoded
     *
     * @return array|object The parsed reply
     */
    var _parseApiReply = function (method, reply) {
        if (reply === "[]") {
            return [];
        }
        var parsed = false;
        try {
            parsed = JSON.parse(reply);
        } catch (e) {
            parsed = {};
            if (reply.indexOf("<" + "?xml version=\"1.0\" encoding=\"UTF-8\"?" + ">") === 0) {
                // we received XML...
                // since this only happens for errors,
                // don't perform a full decoding
                parsed.request = reply.match(/<request>(.*)<\/request>/)[1];
                parsed.error   = reply.match(/<error>(.*)<\/error>/)[1];
            } else {
                // assume query format
                var elements = reply.split("&");
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i].split("=", 2);
                    if (element.length > 1) {
                        parsed[element[0]] = decodeURIComponent(element[1]);
                    } else {
                        parsed[element[0]] = null;
                    }
                }
            }
        }
        return parsed;
    };

    return {
        setConsumerKey: setConsumerKey,
        getVersion: getVersion,
        setToken: setToken,
        setBearerToken: setBearerToken,
        setUseProxy: setUseProxy,
        setProxy: setProxy,
        __call: __call,
        oauth_authenticate: oauth_authenticate,
        oauth_authorize: oauth_authorize,
        oauth2_token: oauth2_token
    };
};

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1 Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

var hexcase = 0; 
var b64pad  = ""; 
var chrsz   = 8; 

function hex_sha1(s){return binb2hex(core_sha1(str2binb(s),s.length * chrsz));}
function b64_sha1(s){return binb2b64(core_sha1(str2binb(s),s.length * chrsz));}
function str_sha1(s){return binb2str(core_sha1(str2binb(s),s.length * chrsz));}
function hex_hmac_sha1(key, data){ return binb2hex(core_hmac_sha1(key, data));}
function b64_hmac_sha1(key, data){ return binb2b64(core_hmac_sha1(key, data));}
function str_hmac_sha1(key, data){ return binb2str(core_hmac_sha1(key, data));}

function sha1_vm_test()
{
  return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

function core_sha1(x, len)
{
  x[len >> 5] |= 0x80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;

  var w = Array(80);
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  var e = -1009589776;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;

    for(var j = 0; j < 80; j++)
    {
      if(j < 16) w[j] = x[i + j];
      else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)), 
                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);
  
}

function sha1_ft(t, b, c, d)
{
  if(t < 20) return (b & c) | ((~b) & d);
  if(t < 40) return b ^ c ^ d;
  if(t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}

function sha1_kt(t)
{
  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
         (t < 60) ? -1894007588 : -899497514;
}  

function core_hmac_sha1(key, data)
{
  var bkey = str2binb(key);
  if(bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++) 
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
  return core_sha1(opad.concat(hash), 512 + 160);
}

function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

function rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

function str2binb(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
  return bin;
}

function binb2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (24 - i%32)) & mask);
  return str;
}

function binb2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
  }
  return str;
}

function binb2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();