var nike=(function(a,c){if(!Array.prototype.indexOf){Array.prototype.indexOf=function(h){if(this===null){throw new TypeError()
}var i=new Object(this);
var f=i.length>>>0;
if(f===0){return -1
}var j=0;
if(arguments.length>0){j=Number(arguments[1]);
if(j!=j){j=0
}else{if(j!==0&&j!=Infinity&&j!=-Infinity){j=(j>0||-1)*Math.floor(Math.abs(j))
}}}if(j>=f){return -1
}var g=j>=0?j:Math.max(f-Math.abs(j),0);
for(;
g<f;
g++){if(g in i&&i[g]===h){return g
}}return -1
}
}var d=a.cq=a.cq||{};
if(!d.ns){d.ns=function(){var f=arguments,m=c,l=0,k=0,g=null,h=null;
for(l=0;
l<f.length;
l=l+1){g=f[l].split(".");
for(k=0;
k<g.length;
k=k+1){h=g[k];
m[h]=m[h]||{};
m=m[h]
}}return m
}
}if(!d.define||!d.require){var e=function(){this.modules={};
this.reqs={};
this.requires=0
};
e.prototype.add=function(h,f,j){if(typeof f==="string"){f=[f]
}if(!(f instanceof Array)){f=[]
}if(h in this.modules&&"executed" in this.modules[h]){return false
}if(h===undefined){h="require_"+this.requires++
}this.modules[h]={executed:false,value:j,requirements:f};
this.reqs[h]=this.reqs[h]||[];
for(var g=0;
g<f.length;
++g){this.reqs[f[g]]=this.reqs[f[g]]||[];
if(this.reqs[f[g]].indexOf(h)===-1){this.reqs[f[g]].push(h)
}}this.execute(h)
};
e.prototype.getReqs=function(j){var h=[],f=this.modules[j].requirements||[];
if(f.length==0){return h
}for(var g=0;
g<f.length;
++g){if(!(f[g] in this.modules)||this.modules[f[g]].executed!==true){return false
}else{if(f[g] in this.modules){h.push(this.modules[f[g]].value)
}}}return h.length>0?h:false
};
e.prototype.execute=function(h){var j=this.modules[h],f=this.getReqs(h);
if(!f||j.executed===true){return false
}if(typeof j.value==="function"){j.value=j.value.apply(j.value,f)
}else{j.value=undefined
}j.executed=true;
for(var g=0;
g<this.reqs[h].length;
++g){this.execute(this.reqs[h][g])
}};
var b=new e();
d.define=function(){b.add.apply(b,arguments)
};
d.require=function(f,g){b.add(undefined,f,g)
}
}return a
}(nike||{},window));
nike.cq.define("jquery",[],function(){return window.jQuery
});
(function(){var b=0;
var c=["ms","moz","webkit","o"];
for(var a=0;
a<c.length&&!window.requestAnimationFrame;
++a){window.requestAnimationFrame=window[c[a]+"RequestAnimationFrame"];
window.cancelAnimationFrame=window[c[a]+"CancelAnimationFrame"]||window[c[a]+"CancelRequestAnimationFrame"]
}if(!window.requestAnimationFrame){window.requestAnimationFrame=function(h,e){var d=new Date().getTime();
var f=Math.max(0,16-(d-b));
var g=window.setTimeout(function(){h(d+f)
},f);
b=d+f;
return g
}
}if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(d){clearTimeout(d)
}
}}());
nike.cq.define("nike.cq.Utils",["jquery"],function(c){nike.cq.ns("nike.cq.Utils");
var b=(function(){var e={},d=function(f){if(!e.hasOwnProperty(f)){e[f]=new function(){var g=function(){},h={};
c.extend(this,{onReady:function(i){if(i){g=i
}else{return'nike.cq.Utils.FlashBridge.getSWF("'+f+'").callOnReady()'
}},callOnReady:function(){g()
},registerEvent:function(i,j){h[i]=j
},callEvent:function(i){if(h.hasOwnProperty(i)&&typeof(h[i])=="function"){h[i].call()
}},createEventHandler:function(i,j){this.registerEvent(i,j);
return[i,'nike.cq.Utils.FlashBridge.getSWF("'+f+'").callEvent("'+i+'")']
}});
return this
}
}return e[f]
};
return{getSWF:d}
})();
nike.cq.Utils.FlashBridge=b;
var a=function(f,e,d){var h;
return function g(){var k=this,j=Array.prototype.slice.call(arguments);
function i(){if(!d){f.apply(k,j)
}h=null
}if(h){clearTimeout(h)
}else{if(d){f.apply(k,j)
}}h=setTimeout(i,e||100)
}
};
return{isiOS:function(){return navigator.platform=="iPad"||navigator.platform=="iPhone"||navigator.platform=="iPod"
},iOSVersion:function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var d=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
return[parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3]||0,10)]
}},hasFlash:function(){return typeof(swfobject)!="undefined"&&swfobject.hasFlashPlayerVersion("10.3")
},FlashBridge:b,validateInternalUrl:function(d){if(d.toLowerCase().substring(0,7).indexOf("http://")==-1){if(d.toLowerCase().substring(d.length-5).indexOf(".html")==-1){d=d+".html"
}}return d
},detectLeftNav:function(d){if(d==="tesla"){return c(".exp-left-nav").length>0
}else{if(d==="cq"){return c(".nike-cq-left-navigation").length>0
}else{return c(".exp-left-nav").length>0||c(".nike-cq-left-navigation").length>0
}}},debounce:a,debounceResize:function(d){c(window).bind("resize",a(d))
}}
});
nike.cq.define("nike.cq.Content",["jquery"],function(c){var b=function(g,j){var l=typeof g=="object",h=l?c(g):null,e=!l?g:null,m=typeof j=="string",o=m&&j?j:null,n=typeof j=="function",k=(n&&j?j:j?j.onSuccess:function(){})||function(){},f=!n&&j?j.onComplete:null,i=!n&&j?j.onError:null;
if(l&&h&&o){return h.data(o.toLowerCase())
}else{if(l&&h){return h.data()
}else{if(e){c.ajax({url:e,success:function(p){if(c.isPlainObject(p)){var q=function(t){var r={};
for(var s in t){if(t.hasOwnProperty(s)&&s.replace(/sling\:key/gi,"sling_key").replace(/sling\:message/gi,"sling_message").indexOf(":")<0){if(typeof(t[s])=="string"){r[s]=t[s]
}else{if(typeof(t[s])=="object"){r[s]=q(t[s])
}}}}return r
};
k(q(p["jcr:content"]?p["jcr:content"]:p))
}else{k(p)
}},complete:f,error:i})
}}}return null
},a=b(c(".nike-cq-tesla-xml"))||{},d=function(g,k){var i=typeof(g)=="string"&&g.indexOf("/")>=0,j=!i&&typeof(g)=="string",h=typeof(g)=="function",e=i?g:window.location.href,f=j?g:"",k=i?k:j?function(){}:g;
return !j&&!i&&!h?a:j?a[f]:this.get(e.replace(/\.html/,".10.json"),k)
};
return{get:b,getPageData:d}
});
nike.cq.define("nike.cq.Tracking",["jquery","nike.cq.Content"],function($,Content){var EventManager=function(){var eventConfig,generateEventData=function(eventData){var variableData={},el=$(this),data=eventData.data,dataConfig=eventData.dataConfig;
var enhancedEventData=eventData;
enhancedEventData.el=el;
for(var i in data){if(i=="jcr:primaryType"||i=="events"){continue
}variableData[i]=data[i]
}dataConfig.elementText=(this===window)?"":formatText(el.text());
if(experienceTracking.eventsProcessor&&(typeof(experienceTracking.eventsProcessor)==="function")){var customData=experienceTracking.eventsProcessor.call(this,enhancedEventData);
if(typeof(customData)==="object"){for(var c in customData){variableData[c]=customData[c]
}}}if(dataConfig.eventProcessor){var experienceEventProcessor=eval(dataConfig.eventProcessor);
if(typeof(experienceEventProcessor)==="function"){var customData=experienceEventProcessor.call(this,enhancedEventData);
if(typeof(customData)==="object"){for(var c in customData){variableData[c]=customData[c]
}}}}for(var v in variableData){variableData[v]=replaceValues(variableData[v],dataConfig.elementText)
}return variableData
},eventProcessor=function(experienceEventProcessor,variableData){var customData=experienceEventProcessor.call(this,eventData);
if(typeof(customData)==="object"){for(var c in customData){variableData[c]=customData[c]
}}return variableData
},elementEventHandler=function(event){if(event.currentTarget===window){var events=event.data.data.events||"event13",eventName=event.data.eventName,eventData=generateEventData.call(this,event.data),dataConfig=event.data.dataConfig;
experienceTracking.sendEventTrackingToThirdParty.call(this,eventName,events,eventData)
}else{var currentTarget=$(event.currentTarget),isAnchor=currentTarget.is("a"),thisTarget=currentTarget.attr("target"),thisHref=currentTarget.attr("href")||"#";
if(isAnchor&&thisTarget!="_blank"&&thisHref!="#"){event.preventDefault()
}var events=event.data.data.events||"event13",eventName=event.data.eventName,eventData=generateEventData.call(this,event.data),dataConfig=event.data.dataConfig;
experienceTracking.sendEventTrackingToThirdParty.call(this,eventName,events,eventData)
}var currentPath=window.location.pathname.replace(/^\//,"");
if(isAnchor&&thisTarget!="_blank"&&thisHref!="#"&&!thisHref.match(currentPath+"#")){var redirectPage=dataConfig.hasOwnProperty("followLink")?dataConfig.followLink:true;
if($(this).data("followLink")!==undefined){redirectPage=$(this).data("followLink")
}if(redirectPage){window.setTimeout(function(){window.location.href=event.currentTarget.href
},300)
}}},processEventConfig=function(eventConfig){eventConfig=$.extend({elementSelector:"",action:"click",data:{},dataConfig:{generatePageActivity:false,pageActivityType:"",addFindMethod:false}},eventConfig);
if(eventConfig.elementSelector){var action=eventConfig.action;
if(action=="delegate"&&eventConfig.delegate){$(eventConfig.elementSelector).delegate(eventConfig.delegate,eventConfig.delegateAction,eventConfig,elementEventHandler)
}else{$(eventConfig.elementSelector).bind(action,eventConfig,elementEventHandler)
}}},processTrackingConfig=function(config){for(var evt in config){if(evt=="jcr:primaryType"){continue
}processEventConfig(config[evt])
}},addEvent=function(event){var events=CQ_Analytics.EventDataMgr.getProperty("events"),add=(events)?events+","+event:event;
CQ_Analytics.EventDataMgr.setProperty("events",add);
return add
},initEventTracking=function(config){eventConfig=config;
processTrackingConfig(config);
if(experienceTracking.setupEventTracking&&(typeof(experienceTracking.setupEventTracking)==="function")){experienceTracking.setupEventTracking.call()
}};
return{getEventConfig:function(){return eventConfig
},addEvent:addEvent,initEventTracking:initEventTracking,generateEventData:generateEventData}
}();
var category=Content.getPageData("category"),experienceId=Content.getPageData("experienceId"),trackingConfigPaths=[],experienceTracking,config,formatText=function(text){return $.trim(text).replace(/\s+/g,"-").replace(/[,!$@<>%;:=`~#'"_\^\*\{\}\.\(\)\[\]\?\/]/g,"").toLowerCase()
},formatTextPreservingGreaterThanChar=function(text){return $.trim(text).replace(/\s+/g,"-").replace(/[,!$@<%;:=`~#'"_\^\*\{\}\.\(\)\[\]\?\/]/g,"").toLowerCase()
},replaceValues=function(text,elementText){var ret=(text)?text:"";
if(typeof text=="string"){if(text.indexOf("[")!=-1){ret=ret.replace("[elementText]",elementText)
}}return ret
},getConfig=function(config){if(!$.isPlainObject(config)){$.ajax({url:config,dataType:"json",success:function(response){config=response;
if(config.event){EventManager.initEventTracking(config.event)
}},error:function(xhr,status,error){setupTracking()
}})
}else{if(config.event){EventManager.initEventTracking(config.event)
}}},setupTracking=function(){getConfig(config)
},init=function(experience){if(experienceTracking!==undefined){return
}experienceTracking=experience;
config=experienceTracking.config;
setupTracking()
};
var globalTracking=nike.cq.ns("nike.cq.Tracking");
globalTracking.EventManager=EventManager;
return{EventManager:EventManager,getTrackingConfig:function(){return config
},init:init,ready:function(){return PageManager.ready()
},formatText:formatText,formatTextPreservingGreaterThanChar:formatTextPreservingGreaterThanChar,replaceValues:replaceValues}
});
nike.cq.define("nike.cq.initializer",["jquery"],function(g){var h="nike-cq-initialized",f=function f(j){var i=(a.length)?g(a):g("[data-nike-cq-component-name]");
i.each(function(){var n=g(this),m=this.getAttribute("data-nike-cq-component-name"),l=c[m],q=l&&!n.data(h),k=!j||(l&&l.state==="ready"),o=(l&&!l.noEditMode)||g("body").data("cmsMode")!=="EDIT",p=q&&k&&o;
if(p){l.action.call(this,n);
n.data(h,true)
}else{a.push(this)
}});
if(!j&&a.length){a.length=0
}},e=function e(){f(true)
},b=function b(i){c[i.name]=i
},d=function d(j){if(j.length){for(var k=0;
k<j.length;
k++){b(j[k])
}}else{b(j)
}},c={},a=[];
g(function(){e()
});
g(window).load(function(){f()
});
return{ready:e,init:f,registerComponents:d}
});
nike.cq.define("nike.cq.Content.Component.Slide",["jquery","nike.cq.Content"],function(b,a){return function(c){var h=!b.isPlainObject(c),f=h?c:null,i=(h?a.get(b(f)):c)||{},j=i.title||"",g=i.description||"",e=i.imageUrl||"",d=i.links||[];
b.extend(this,{getTitle:function(){return j
},getDescription:function(){return g
},getImageUrl:function(){return e
},getLinks:function(){return d
}});
return this
}
});
nike.cq.define("nike.cq.Content.Component.Slideshow",["jquery","nike.cq.Content.Component.Slide","nike.cq.Content"],function(c,b,a){return function(k,h){var h=h?h:false,l=!c.isArray(k)&&!c.isPlainObject(k),i=l?c(k):null,g=l?a.get(i):(c.isArray(k)?{slides:k}:k)||{},p=g.slides||[],m=h?"nike-cq-carousel":"nike-cq-"+(g.componentName||"slideshow"),j=g.wait||5000,n=g.previousButtonTracking||"",e=g.nextButtonTracking||"",o=g.numberedSlideButtonTracking||"",f=g.autoSlide||"false",d=(function(){var s=[];
if(l){i.find("."+m+"-slide").each(function(){s.push(new b(this))
})
}else{for(var r=0,q=p.length;
r<q;
r++){s.push(new b(p[r]))
}}return s
})();
c.extend(this,{getSlides:function(){return d
},getWait:function(){return j
},getAutoSlide:function(){if(f){if(f==="false"){f=false
}else{if(f==="true"){f=true
}}}return f
},getComponentName:function(){return m
},getPreviousButtonTracking:function(){return n
},getNextButtonTracking:function(){return e
},getNumberedSlideButtonTracking:function(){return o
}});
return this
}
});
nike.cq.define("nike.cq.Content.PesCarousel",["jquery","nike.cq.Content"],function(b,a){return function(k){var l=!b.isPlainObject(k),i=l?(k):null,h=l?a.get(i):k||{},c=(h.width*h.numberOfSlidesInViewport)||300,o=h.height||550,j=h.delay||5000,f=h.numberOfSlidesInViewport||1,m=h.displayControlsInViewport?true:false,g=h.displayControlsAtBottom?true:false,n=h.displayCarouselAnimation?true:false,d=h.slideby||1,e=h.continuousLoop?true:false;
b.extend(this,{getWidth:function(){return c
},getHeight:function(){return o
},getDelay:function(){return j
},getNumberOfSlidesInViewPort:function(){return f
},displayControlsInViewPort:function(){return m
},displayControlsAtBottom:function(){return g
},displayCarouselAnimation:function(){return n
},getSlideBy:function(){return d
},getContinuousLoop:function(){return e
}});
return this
}
});
nike.cq.define("nike.cq.Content.Component.Carousel",["nike.cq.Content.Component.Slideshow"],function(a){return function(b){return a(b,true)
}
});
nike.cq.define("nike.cq.Content.Component.VideoPlayerType",[],function(){return{NONE:"",BRIGHTCOVE:"brightcove",SINA:"sina",YOUTUBE:"youtube",QQ:"qq"}
});
nike.cq.define("nike.cq.Content.Component.VideoPlayer",["jquery","nike.cq.Content","nike.cq.Content.Component.VideoPlayerType"],function(c,b,a){return function(i){var j=!c.isPlainObject(i),h=j?c(i):null,g=(j?b.get(h):i)||{},n=g.playerType||"",e=g.width||908,m=g.height||510;
var d=function(o){var o=c.extend({videoId:""},o);
o.playerId=(/iPhone|iPod/i).test(navigator.userAgent)?713160923001:o.playerId;
return{getPlayerId:function(){return o.playerId
},getVideoId:function(){return o.videoId
},getAutoStart:function(){if(o.autoStart=="undefined"||o.autoStart==null){return false
}else{return o.autoStart
}}}
},l=function(o){var o=c.extend({sinaVideoId:""},o);
return{getVideoId:function(){return o.sinaVideoId
}}
},f=function(o){var o=c.extend({videoId:""},o);
return{getVideoId:function(){return o.videoId
}}
},k=function(o){var o=c.extend({videoId:""},o);
return{getVideoId:function(){return o.videoId
}}
};
e=((/iPhone|iPod/i).test(navigator.userAgent))?480:e;
m=((/iPhone|iPod/i).test(navigator.userAgent))?320:m;
c.extend(this,{getWidth:function(){return e
},getHeight:function(){return m
},getPlayerType:function(){return n
}});
switch(n){case a.BRIGHTCOVE:c.extend(this,d(g));
break;
case a.SINA:c.extend(this,l(g));
break;
case a.YOUTUBE:c.extend(this,f(g));
break;
case a.QQ:c.extend(this,k(g));
break;
default:break
}return this
}
});
nike.cq.define("nike.cq.UI.Overlay",["jquery"],function(a){return function(d){d=a.extend({cssClass:"",autoOpen:true,isModal:true,onInit:function(){},onClose:function(){},open:function(){if(d.isModal){h.css("height",a(document).height()).show();
if(!b){e.css({zIndex:1000}).appendTo(document.body);
b=true
}e.show()
}this.onOpen()
},onOpen:function(){},onBeforeClose:function(){this.close()
},close:function(){if(d.isModal){h.remove();
e.remove()
}}},d);
var f="nike-cq-overlay-"+new Date().getTime()+Math.ceil(Math.random()*1000),b=false,e=a("<div>",{"class":"nike-cq-overlay"+(d.cssClass!=""?" "+d.cssClass:""),id:f}),i=a("<div>",{"class":"nike-cq-overlay-content-element"}).appendTo(e),c=a("<button>",{"class":"nike-cq-overlay-close-button"}).appendTo(e),h=document.getElementById("nike-cq-overlay-modal-background")?a("#nike-cq-overlay-modal-background").hide():a('<div id="nike-cq-overlay-modal-background">').css({position:"absolute",top:0,left:0,zIndex:999,height:a(document).height(),width:"100%"}).appendTo(document.body).hide();
a.extend(this,{getElement:function(){return e
},getContentElement:function(){return i
},open:function(){d.open.apply(this,arguments)
},onOpen:function(){d.onOpen.apply(this,arguments)
},beforeClose:function(){d.onBeforeClose.apply(this,arguments)
},close:function(){d.close.apply(this,arguments);
d.onClose.apply(this,arguments)
}});
var g=this;
c.text("close");
e.delegate(".nike-cq-overlay-close-button","click",function(){g.beforeClose()
});
d.onInit.call(this);
if(d.autoOpen){this.open()
}return this
}
});
nike.cq.define("nike.cq.UI.StringReplace",["jquery"],function(a){return function(b,c,d){a(b).filter(':contains("'+c+'")').each(function(){if(a(this).children().length==0){var e=a(this).html();
e=e.replace(c,d);
a(this).html(e)
}})
}
});
nike.cq.define("nike.cq.UI.ModalCarousel",["jquery"],function(a){return function(f){f=a.extend({dialogClass:"nike-cq-modal-dialog",arrowClass:"nike-cq-modal-arrow",leftArrowClass:"nike-cq-modal-left",rightArrowClass:"nike-cq-modal-right",closeClass:"nike-cq-modal-close-button",useCloseButton:true,clickBackgroundToClose:false,resizeDialog:false,backgroundClass:"nike-cq-modal-background",foregroundClass:"nike-cq-modal-foreground",dialogAppendSelector:"body"},f);
var h=".nike-cq-tesla-xml",e=a(h).data("language"),i=a(document.createElement("div")).addClass("modal-container nike-cq-lang-"+e).appendTo(f.dialogAppendSelector),c=a(document.createElement("div")).addClass(f.backgroundClass).appendTo(i),m=a(document.createElement("div")).addClass(f.foregroundClass).appendTo(i),l=a(document.createElement("div")).addClass(f.dialogClass).appendTo(m),b=a(document.createElement("div")).addClass(f.arrowClass+" "+f.leftArrowClass).appendTo(m),g=a(document.createElement("div")).addClass(f.arrowClass+" "+f.rightArrowClass).appendTo(m),n=[c,l,b,g];
if(f.useCloseButton){var d=a(document.createElement("div")).addClass(f.closeClass).appendTo(m);
n.push(d)
}var j=function(q){var p=q?true:false;
var r=a(document);
c.height(r.height());
a.each(n,function(s,t){t.css("display",p?"block":"none")
});
k()
};
a(window).on("resize",function(p){k()
});
function k(){m.css("height",a(window).height());
m.css("margin-top",a(window).scrollTop());
if(f.resizeDialog){o()
}}function o(){if(l&&(l.height()+100)>a(window).height()){l.css({top:"0","margin-top":"50px"});
d.css({top:"0","margin-top":"50px"})
}else{l.css({top:"","margin-top":""});
d.css({top:"","margin-top":""})
}}if(f.clickBackgroundToClose){c.click(function(p){p.preventDefault();
j(false)
})
}if(f.useCloseButton){d.click(function(p){p.preventDefault();
j(false)
})
}else{c.click(function(p){p.preventDefault();
j(false)
})
}return{getDialog:function(){return l
},getLeftArrow:function(){return b
},getRightArrow:function(){return g
},getCloseButton:function(){return d
},showModal:j,resizeForeground:k,showLeftArrow:function(p){b.css("display",p?"block":"none")
},showRightArrow:function(p){g.css("display",p?"block":"none")
}}
}
});
nike.cq.define("nike.cq.UI.Component.VideoPlayer",["jquery","nike.cq.Content","nike.cq.Content.Component.VideoPlayer","nike.cq.Content.Component.VideoPlayerType","nike.cq.Utils"],function(f,d,k,b,g){var h=null,j=null,a=null,c=null,e=function(l){c=l;
h=brightcove.getExperience(l);
j=h.getModule(APIModules.EXPERIENCE);
a=h.getModule(APIModules.VIDEO_PLAYER)
};
var i=nike.cq.ns("nike.cq.UI.Component");
i.onVideoTemplateLoaded=e;
return function(p){var m="nike-cq-video-player-component-"+new Date().getTime()+Math.floor(Math.random(1000)),t=!f.isPlainObject(p),s=(t&&p?f(p):p&&p.element?f(p.element):f("<div>",{"class":"nike-cq-video-player-component"})).attr("id",m),q=f.extend(true,{data:{},onInit:function(){},onLoad:function(){},onRemove:function(){}},!t?p:{}),o=(function(){var z=0;
for(var y in q.data){z++
}return z
})(),u=new k(o>0?q.data:s),x=function(y){this.element=null;
this.objectTag=f("<div>");
this.objectTagId="";
this.isValid=typeof(y.isValid)=="function"?y.isValid:function(){return false
};
this.remove=typeof(y.remove)=="function"?y.remove:function(){};
this.generate=typeof(y.generate)=="function"?y.generate:function(A,z){};
this.controlsElement=null;
this.getControlsElement=function(){return this.controlsElement
};
this.generateControls=function(D){D=f.extend({appendTo:f("<div>"),autoPlay:false,defaultWidth:"100%",onPlayEvent:"onVideoPlaying",onPauseEvent:"onVideoPaused",registerEvent:function(O,P){},onReady:function(){},play:function(){},pause:function(){},stop:function(){},seek:function(){},getTotalTime:function(){},getCurrentPosition:function(){}},D);
var G=D.appendTo,M="Play",E="Pause",L="Stop";
var J=f("<button>",{"class":"video-playback-control-playpause "+(D.autoPlay?"video-playback-control-pause":"video-playback-control-play")}),K=f("<button>",{"class":"video-playback-control-stop"}),F=f("<span>",{"class":"video-playback-control-playhead",css:{position:"absolute",left:0}}),z=f("<span>",{"class":"video-playback-control-progress",css:{position:"absolute"}}).append(F),I=f("<span>",{"class":"video-playback-control-progress-container",css:{position:"absolute",cursor:"hand"}}).append(z),C=f("<span>",{"class":"video-playback-control-current-time",text:"0:00"}),N=f("<span>",{"class":"video-playback-control-time-divider",text:"/"}),B=f("<span>",{"class":"video-playback-control-total-time",text:"0:00"}),H=f("<span>",{"class":"video-playback-control-time-container"}).append(C).append(N).append(B),A=f("<div>",{"class":"video-playback-controls",css:{width:D.defaultWidth}}).append(J).append(K).append(I).append(H);
this.controlsElement=A;
G.append(A);
G.delegate(".video-playback-control-pause","click",function(O){O.preventDefault();
D.pause()
}).delegate(".video-playback-control-play","click",function(O){O.preventDefault();
D.play()
}).delegate(".video-playback-control-stop","click",function(O){O.preventDefault();
D.stop()
}).delegate(".video-playback-control-progress-container","click",function(P){P.preventDefault();
F.css("left",P.offsetX);
var O=Math.round(D.getTotalTime()*(P.offsetX/f(this).width()));
D.seek(O)
});
D.onReady(function(){D.registerEvent(D.onPlayEvent,function(){J.removeClass("video-playback-control-play").addClass("video-playback-control-pause").text(E)
});
D.registerEvent(D.onPauseEvent,function(){J.removeClass("video-playback-control-pause").addClass("video-playback-control-play").text(M)
});
var R=false,Q=0,P=0;
var O=window.setInterval(function(){if(!R){Q=D.getTotalTime()/60;
var S=Math.floor(Q),V=Math.round((Q-S)*60),V=V<10&&V>=0?"0"+V:V;
if(Q>0){B.text(S+":"+V);
R=true
}}var W=D.getCurrentPosition()/60,T=Math.floor(W),U=Math.round((W-T)*60),U=U<10&&U>=0?"0"+U:U;
if(P!=W){C.text(T+":"+U);
var X=Math.round((W/Q)*I.width());
z.width(X);
F.css("left",X);
P=W
}},500)
})
};
return this
},l=new x({isValid:function(y){return y.getVideoId()!=""&&y.getPlayerId()!=""
},generate:function(B,z,A){var C="nike-cq-video-player-component-"+new Date().getTime()+Math.floor(Math.random()*1000)+"-object";
var y=f(['<video id="',C,'" ','data-account="72451143001" ','data-player="',B.getPlayerId(),'" ','data-video-id="',B.getVideoId(),'" ','data-embed="default" ','width="',B.getWidth(),'" ','height="',B.getHeight(),'" ','class="video-js" ',B.getAutoStart()?"autoplay ":"","controls>","</video>"].join(""));
z.empty();
z.append(y);
f.getScript("//players.brightcove.net/72451143001/"+B.getPlayerId()+"_default/index.min.js");
this.element=z;
this.objectTag=y;
this.objectTagId=C
},remove:function(){if(typeof brightcove=="object"&&j){j.unload();
document.getElementById(this.objectTagId).parentNode.innerHTML=""
}}}),w=new x({isValid:function(y){return y.getVideoId()!=""
},generate:function(E,z,B){var C=this;
if(g.hasFlash()){var y="nike-cq-video-player-component-"+new Date().getTime()+Math.floor(Math.random()*1000)+"-object",A=f("<div>",{id:y});
z.empty().append(A);
var D=g.FlashBridge.getSWF(y);
nike.UI.embedFlash({src:"/etc/designs/nike/resources/video/sina/SinaPlayer.swf",id:y,width:E.getWidth(),height:E.getHeight(),flashVars:{videoID:E.getVideoId(),swfLocation:"/etc/designs/nike/resources/video/sina/",autoPlay:true,onReady:D.onReady()},params:{wmode:"opaque",menu:false,allowScriptAccess:"always",bgcolor:"#000000"},onLoad:function(F){var G=F.ref;
C.generateControls({autoPlay:false,appendTo:z,play:function(){G.play()
},pause:function(){G.pause()
},stop:function(){G.stop()
},seek:function(H){G.seek(H)
},getTotalTime:function(){return G.getVideoTotalTime()
},getCurrentPosition:function(){return G.getVideoCurrentPosition()
},onPlayEvent:"onVideoPlaying",onPauseEvent:"onVideoPaused",registerEvent:function(H,I){G.addEventListener(D.createEventHandler(H,I))
},onReady:D.onReady});
B()
}})
}this.element=z
},remove:function(){q.element.remove()
}}),r=new x({isValid:function(y){return y.getVideoId()!=""
},generate:function(z,A,E){var y="nike-cq-youtubevideo-player-component-"+new Date().getTime()+Math.floor(Math.random()*1000)+"-object";
var B=f(document.createElement("div")).attr("id",y);
A.empty();
A.append(B);
var D=this;
if(f("#youtube_api_script_tag").size()<1){var G=document.createElement("script");
G.src="//www.youtube.com/iframe_api";
G.id="youtube_api_script_tag";
var F=document.getElementsByTagName("script")[0];
F.parentNode.insertBefore(G,F);
window.onYouTubeIframeAPIReady=function(){D.player=new YT.Player(y,{height:z.getHeight(),width:z.getWidth(),videoId:z.getVideoId(),playerVars:{rel:0},events:{onReady:C}})
}
}else{setTimeout(function(){D.player=new YT.Player(y,{height:z.getHeight(),width:z.getWidth(),videoId:z.getVideoId(),events:{onReady:C}})
},1000)
}function C(H){}},remove:function(){if(this.player&&this.player.stopVideo){this.player.stopVideo()
}q.element.remove()
}}),v=new x({isValid:function(y){return y.getVideoId()!=""
},generate:function(B,y,A){var C="http://v.qq.com/iframe/player.html?vid="+B.getVideoId()+"&tiny=0&auto=0",z=f('<iframe frameborder=0 src="'+C+'" allowfullscreen></iframe>');
z.width(B.getWidth());
z.height(B.getHeight());
y.empty();
y.append(z)
},remove:function(){q.element.remove()
}});
var n;
switch(u.getPlayerType()){case b.BRIGHTCOVE:n=l;
break;
case b.SINA:n=w;
break;
case b.YOUTUBE:n=r;
break;
case b.QQ:n=v;
break;
case b.NONE:default:if(!t&&!q.data.playerType){q.data.playerType=b.BRIGHTCOVE;
u=new k(o>0?q.data:s);
n=l
}else{n=new x()
}break
}f.extend(this,{getElement:function(){return q.element
},getControlsElement:function(){return n.getControlsElement()
},remove:function(){n.remove();
q.onRemove.call(this)
}});
(function(){var y=this;
q.element=s;
if(n.isValid(u)){q.onInit.call(this);
n.generate(u,q.element,function(){q.onLoad.call(y)
})
}}).call(this);
return this
}
});
nike.cq.define("nike.cq.UI.Component.PesCarousel",["jquery","nike.cq.Content.Component.PesCarousel"],function(a,b){return function(h,Q){var K=10;
var S=!a.isPlainObject(h),u=S&&h?a(h):h&&h.element?a(h.element):a(document.createElement("div")),B=a(u).clone(),x=u.children(),w=x.length,f=new b(h),r=f.getNumberOfSlidesInViewPort(),M=f.getWidth(),J=f.getHeight(),z=f.displayControlsInViewPort(),I=f.displayControlsAtBottom(),D=f.displayCarouselAnimation(),k=f.getDelay(),P=f.getSlideBy(),R=f.getContinuousLoop(),s=M/r,T=J,n=a(window).width(),m=12,C=0,j=0,c,d=140,p=(s*w)+(K*2*w),O=M+(K*2*(r-1)),L=O+d,N=L,o=J/O,F=J,g=0,q=0,t=0,G=0,v=70;
var A=a.extend({arrow:"split",loop:30,arrowClass:"arrow",leftArrowClass:"left",rightArrowClass:"right",slideClass:"slide",slideContainerClass:"slides-container",controlClass:"control",unselectableClass:" unselectable",controlActiveClass:"control-active",controlHoverClass:"control-hover",controlContainerClass:"control-container",separatorClass:"slides-seperator",pageNavClass:"nav",slidePeriod:1000},!S?h:{},Q?Q:{});
var E=function(U){u.find("."+A.controlClass).each(function(){var V=a(this);
if(R){V.css("visibility","visible");
if(!V.prop("direction")){if(V.prop("page")!=U){V.toggleClass(A.controlActiveClass,false)
}else{V.toggleClass(A.controlActiveClass,true)
}}}else{if(V.prop("direction")===1){if(U<C-1){V.css("visibility","visible")
}else{V.css("visibility","hidden")
}}else{if(V.prop("direction")===-1){if(U>0){V.css("visibility","visible")
}else{V.css("visibility","hidden")
}}else{if(V.prop("page")!=U){V.toggleClass(A.controlActiveClass,false)
}else{V.toggleClass(A.controlActiveClass,true)
}}}}})
};
var e=function(X,Z){var V=0;
if(j){var U=u.find("."+A.slideContainerClass);
if(R){var Y=false;
if(X<=0){V=(X!==0)?X:0;
U.css("margin-left",-(w-r-(r-P-V))*(s+(K*2)));
X=w+V-(2*r)
}else{if(X>=(w-(2*r-1))){V=(X!==(w-(r)))?X-(w-(r)):0;
U.css("margin-left",-(r-P+V)*(s+(K*2)));
X=r+V
}}}U.queue(function(){E(X);
a(this).prop("page",X);
a(this).dequeue()
});
var W=(-X*(s+(K*2))+g);
var X=X;
if(Z){U.css({"margin-left":(W)+"px"})
}else{U.stop().animate({"margin-left":(W)+"px"},A.slidePeriod,"swing",function(){c=window.setTimeout(function(){if(D&&R){e(X+P)
}},k)
})
}}if(a(u).find(".nike-cq-notification-banner-container").length){t=X
}};
var l=function(){if(z&&j){var X=a(document.createElement("span")).addClass(A.arrowClass),aa=a(document.createElement("div")).prop("direction",-1).addClass(A.controlClass+A.unselectableClass).append(X.clone().addClass(A.leftArrowClass).html('<span style="padding-left: 5px; width: 33px; height:59px"></span>')),U=a(document.createElement("div")).prop("direction",1).addClass(A.controlClass+A.unselectableClass).append(X.clone().addClass(A.rightArrowClass).html('<span style="padding-right: 5px; width: 33px; height:59px"></span>'));
aa.css("visibility","hidden");
U.css("visibility","hidden");
u.append(aa,U)
}if(I&&j){var Z=a(document.createElement("span")).addClass(A.pageNavClass+" "+A.controlClass+" "+A.unselectableClass).append("<span>&bull;</span>");
if(R){for(var W=1;
W<C-r;
W++){u.append(Z.clone().prop("page",W))
}}else{for(var W=0;
W<C;
W++){u.append(Z.clone().prop("page",W))
}}var V=a(document.createElement("div")).addClass(A.controlContainerClass);
var Y=a(".nike-cq-portrait-merch-zone-carousel-container .nike-cq-carousels-cta-resource");
if(Y.length){Y.addClass("spaced")
}}u.find("."+A.pageNavClass).addClass(A.controlClass).hover(function(){a(this).toggleClass(A.controlHoverClass)
}).wrapAll(V)
};
var y=function(){s=(O-(2*K*(r-1)))/r;
if(s<G){s=G
}else{if(s>300){s=300
}}p=(s*w)+(K*2*w)
};
var H=function(W){n=a(window).width();
var U=1;
if(n<=768){if(r>=3){r=3;
L=768;
O=728;
v=20
}G=217
}else{if(n<=1400){if(r>=3){r=3;
if(n<N){L=n
}O=L-(d-60)-40;
p=(s*(w+1))+(K*2*w);
var ab=O%(s+(K*2));
var ag=ab!=0;
if(L>1066&&ag){if((s-ab)<=74){O=(O-ab)+s
}else{if(ab>s){ab=ab-s;
O=(O-ab)
}else{O=(O-ab)
}}v=(n-O)/2
}else{v=60
}}var ae=3*(G+(K*2));
if(O<=ae){O=ae;
v=40
}y()
}else{if(n>1400){v=70;
p=(s*w)+(K*2*w);
O=M+(K*2*(r-1));
L=O+d
}}}j=R||(w>r);
C=(w-r)+U;
if(W){y();
u.css({width:L+"px"});
u.find("."+A.slideContainerClass).css({width:p+"px"});
u.find("."+A.slideClass).css({width:s+"px"});
u.children(".window-carousel-container").css({width:O+"px","margin-left":v+"px","margin-right":v+"px"});
u.find(".control-container").remove();
u.find(".control.unselectable").remove();
l();
E(t);
e(t,true);
u.find("."+A.controlClass).click(function(){var ai=u.find("."+A.slideContainerClass);
D=false;
window.clearTimeout(c);
var ah=a(this).prop("direction");
var ak;
if(ah){var aj=ai.prop("page")||0;
ak=(aj+ah<w&&aj+ah>=0)?aj+ah*(P):aj+(P-1)
}else{ak=a(this).prop("page")+(P-1)
}t=ak;
e(ak)
})
}else{if(R&&j){var af=a(u);
for(var Y=0;
Y<(r);
Y++){var Z=a(x[Y]).clone().addClass("clone"),ad=a(x[w-(Y+1)]).clone().addClass("clone");
af.prepend(ad).append(Z)
}x=u.children();
w=w+(r*2)
}C=(w-r)+U;
y();
u.css({width:L+"px",display:"block",position:"relative"});
var aa=a(document.createElement("div")).addClass(A.slideClass).css({width:s+"px","text-align":"center"});
x.wrap(aa);
x.each(function(ah,ai){a(ai).parent().attr("data-slide-index",ah+1)
});
var X=a(document.createElement("div")).css({width:p+"px",overflow:"hidden"}).addClass(A.slideContainerClass).prop("page",0);
var V=a(document.createElement("div")).addClass("window-carousel-container").css({width:O+"px","margin-left":v+"px",overflow:"hidden",position:"relative"});
u.children("."+A.slideClass).wrapAll(X);
u.children("."+A.slideContainerClass).wrapAll(V);
var ac=a(document.createElement("div")).addClass(A.separatorClass);
u.append(ac);
l();
if(R){u.find("."+A.slideContainerClass).css("margin-left",-(r)*(s+(K*2)));
a(this).prop("page",r);
E(r);
e(r)
}else{e(0);
E(0)
}u.find("."+A.controlClass).click(function(){var ai=u.find("."+A.slideContainerClass);
D=false;
window.clearTimeout(c);
var ah=a(this).prop("direction");
var ak;
if(ah){var aj=ai.prop("page")||0;
ak=(aj+ah<w&&aj+ah>=0)?aj+ah*(P):aj+(P-1)
}else{ak=a(this).prop("page")+(P-1)
}t=ak;
e(ak)
})
}};
var i=function(W){r=f.getNumberOfSlidesInViewPort();
n=a(window).width();
var U=1;
j=w>r;
C=(w-r)+U;
if(W){u.css({width:L+"px"});
u.find("."+A.slideContainerClass).css({width:p+"px",margin:"0px auto"});
u.find("."+A.slideClass).css({width:s+"px"});
u.children(".window-carousel-container").css({width:O+"px",margin:"0 auto"});
u.find(".control-container").remove();
u.find(".control.unselectable").remove();
l();
E(t);
e(t,true);
u.find("."+A.controlClass).click(function(){var af=u.find("."+A.slideContainerClass);
D=false;
window.clearTimeout(c);
var ae=a(this).prop("direction");
var ah;
if(ae){var ag=af.prop("page")||0;
ah=(ag+ae<w&&ag+ae>=0)?ag+ae*(P):ag+(P-1)
}else{ah=a(this).prop("page")+(P-1)
}t=ah;
e(ah)
})
}else{if(R&&j){var ad=a(u);
for(var Y=0;
Y<(r);
Y++){var Z=a(x[Y]).clone().addClass("clone"),ac=a(x[w-(Y+1)]).clone().addClass("clone");
ad.prepend(ac).append(Z)
}x=u.children();
w=w+(r*2);
p=((s+K*2)*w)
}C=(w-r)+U;
u.css({width:L+"px",display:"block",position:"relative"});
var aa=a(document.createElement("div")).addClass(A.slideClass).css({width:s+"px",height:T+"px","margin-left":K+"px","margin-right":K+"px","text-align":"center"});
x.wrap(aa);
x.each(function(ae,af){a(af).parent().attr("data-slide-index",ae+1)
});
var X=a(document.createElement("div")).css({width:p+"px",height:J+"px","margin-left":"0px",overflow:"hidden"}).addClass(A.slideContainerClass).prop("page",0);
var V;
if(a(u).find(".nike-cq-notification-banner-container").length){V=a(document.createElement("div")).addClass("window-carousel-container").css({width:O+"px",height:J+"px",margin:"0 auto ",overflow:"hidden",position:"relative"})
}u.children("."+A.slideClass).wrapAll(X);
u.children("."+A.slideContainerClass).wrapAll(V);
var ab=a(document.createElement("div")).addClass(A.separatorClass);
u.append(ab);
l();
if(R){u.find("."+A.slideContainerClass).css("margin-left",-(r)*(s+(K*2)));
a(this).prop("page",r);
E(r);
e(r)
}else{e(0);
E(0)
}u.find("."+A.controlClass).click(function(){var af=u.find("."+A.slideContainerClass);
D=false;
window.clearTimeout(c);
var ae=a(this).prop("direction");
var ah;
if(ae){var ag=af.prop("page")||0;
ah=(ag+ae<w&&ag+ae>=0)?ag+ae*(P):ag+(P-1)
}else{ah=a(this).prop("page")+(P-1)
}t=ah;
e(ah)
})
}};
(function(){if(a(u).find(".nike-cq-portrait-tout-300-container").length){g=-10;
G=220;
a(window).bind("orientationchange",function(){H(true)
});
window.onresize=function(U){H(true)
};
H()
}else{if(a(u).find(".nike-cq-notification-banner-container").length){a(window).bind("orientationchange",function(){i(true)
});
window.onresize=function(U){i(true)
};
i()
}}})();
return{slideTo:e}
}
});
nike.cq.define("nike.cq.UI.Component.Slideshow",["jquery","nike.cq.Content.Component.Carousel","nike.cq.Content.Component.Slideshow"],function(a,b,c){return function(i,s){var s=s?s:false,S=!a.isPlainObject(i),q=(S&&i?a(i):i&&i.element?a(i.element):a("<div>")),G=a.extend({data:[],autoHideControls:true,toggleButtonText:true,onInit:function(){},onSlide:function(){}},!S?i:{element:a(i)}),r=s?b:c,u=new r(S?q:G.data),y=250,k=u.getWait(),l=u.getSlides(),L=u.getAutoSlide(),g=true,M=true,o=0,e=null,v=u.getComponentName(),U=u.getPreviousButtonTracking(),P=u.getNextButtonTracking(),O=u.getNumberedSlideButtonTracking();
var F=this,T=u.getSlides(),d=G.element.find("."+v+"-slide"),V=G.element.find("."+v+"-slides").css("position","absolute"),t=d.length,A=function(){return d.eq(0).addClass(v+"-slide-selected").outerWidth(true)
},Q=A(),C=function(){if(M){var j=4;
V.width((t+j)*Q+(G.element.outerWidth(true)-Q))
}else{V.width(t*Q+(G.element.outerWidth(true)-Q))
}},h=function(){if(M){p(++o,K)
}else{if(g){if(o<t-1){p(++o,K)
}else{p(0,K)
}}else{if(o<t-1){p(++o,K)
}else{p(t-1,K)
}}}},H=function(){if(M){p(--o,K)
}else{if(g){if(o>0){p(--o,K)
}else{p(t-1,K)
}}else{if(o>0){p(--o,K)
}else{p(0,K)
}}}},D=a("<button>",{"class":v+"-previous-slide-button "+v+"-button-disabled arrowPrev","data-sitecatalyst":U}).hide(),z=a("<button>",{"class":v+"-next-slide-button "+v+"-button-disabled arrowNext","data-sitecatalyst":P}).hide(),I=(function(){if(t>1){var X=a("<ul>",{"class":v+"-select-slides"}),W=[];
for(var j=0;
j<t;
j++){W.push(['<li class="',v,"-select-slide ",v,"-select-slide-",(j+1),(j==0?" "+v+"-select-slide-selected":""),(j+1==t?" "+v+"-select-slide-last":""),'"><a data-sitecatalyst="',O,'" data-index="',j,'" class="',v,'-select-slide-link" href="#slide-',(j+1),'">',(j+1),"</a></li>"].join(""))
}return X.append(W.join(""))
}else{return null
}})(),x=false,p=function(j,X){q.trigger("slidestart");
if(!Q){Q=A();
C()
}x=true;
var W=M?2:0;
if(t>1){V.stop(true,true).animate({left:-Q*(j+W)},{duration:y,complete:function(){if(M){if(j<=-1){V.css("left",-Q*(l.length+1));
o=l.length-1;
q.find("."+v+"-select-slide-selected").removeClass(v+"-select-slide-selected");
d.removeClass(v+"-slide-selected");
q.find("."+v+"-select-slide").eq(l.length-1).addClass(v+"-select-slide-selected");
d.eq(l.length-1).addClass(v+"-slide-selected")
}else{if(j>=l.length){V.css("left",-Q*2);
q.find("."+v+"-select-slide-selected").removeClass(v+"-select-slide-selected");
d.removeClass(v+"-slide-selected");
q.find("."+v+"-select-slide").eq(0).addClass(v+"-select-slide-selected");
d.eq(0).addClass(v+"-slide-selected");
o=0
}}}x=false;
if(X){X.call(F)
}}})
}q.find("."+v+"-select-slide-selected").removeClass(v+"-select-slide-selected");
q.find("."+v+"-select-slide").eq(j).addClass(v+"-select-slide-selected");
d.removeClass(v+"-slide-selected");
if(M&&j===l.length){d.eq(0).addClass(v+"-slide-selected")
}else{d.eq(j).addClass(v+"-slide-selected")
}if(j<=0){D.addClass(v+"-button-disabled")
}else{D.removeClass(v+"-button-disabled")
}if(j>=t-1){z.addClass(v+"-button-disabled")
}else{z.removeClass(v+"-button-disabled")
}o=j;
q.trigger("slideend",o)
},B=function(W,j){return W.getTitle()==j.getTitle()&&W.getDescription()==j.getDescription()&&W.getImageUrl()==j.getImageUrl()
},f=function(j){if(typeof j=="object"){var W=0;
for(var j in T){if(T.hasOwnProperty(j)){if(B(slideInstance,j)){p(W,K);
break
}W++
}}}else{p(j,K)
}},R=G.onInit||function(){},K=G.onSlide||function(){};
a.extend(this,{next:h,previous:H,slideTo:f,getElement:function(){return G.element
},getCurrentSlide:function(){return T[o]
},getSlides:function(){return T
},getCurrentSlideIndex:function(){return o
},getSlideCount:function(){return t
},setSlideWidth:function(){Q=A();
C()
}});
C();
if(t>1){G.element.append(D).append(z).append(I);
if(M){var n=a(".nike-cq-story-hero-slideshow-slide, .nike-cq-product-launch-hero-slideshow-slide");
for(var N=0;
N<2;
N++){var J=a(n[N]).clone().addClass("clone").removeClass(v+"-slide-selected"),w=a(n[n.length-(N+1)]).clone().addClass("clone").removeClass(v+"-slide-selected");
V.prepend(w).append(J)
}V.css("left",-Q*2)
}var m=function(){D.show();
z.show()
};
var E=function(){D.hide();
z.hide()
};
q.delegate("."+v+"-previous-slide-button","click",H).delegate("."+v+"-next-slide-button","click",h);
q.delegate("."+v+"-select-slide-link","click",function(W){W.preventDefault();
e=window.clearInterval(e);
var j=a(this).data("index");
p(j,function(){e=window.clearInterval(e)
})
});
if(G.autoHideControls){q.bind("mouseenter",function(){e=window.clearInterval(e);
m()
}).bind("mouseleave",function(){e=window.clearInterval(e);
if(L){e=window.setInterval(h,k)
}E()
})
}else{m()
}if(L){e=window.setInterval(h,k)
}}R.call(this);
p(0)
}
});
nike.cq.define("nike.cq.UI.Component.Carousel",["nike.cq.UI.Component.Slideshow"],function(a){return function(b){return a(b,true)
}
});
nike.cq.define("nike.cq.UI.Component.LiquidCarousel",["jquery","nike.cq.Utils"],function(b,a){return function(d,c){var e={minShiftWidth:25,animationSpeed:100,width:1426,innerMargin:126,scrollingClass:"scrolling",multiRowClass:"multisection",multiRowSelector:"section.nike-cq-team-selector-section",wrapperClass:"nike-cq-team-selector-wrapper",outerWrapperClass:"nike-cq-team-selector-outer-wrapper",leftArrowClass:"nike-cq-team-selector-left-arrow",rightArrowClass:"nike-cq-team-selector-right-arrow",handleLeftNav:true,leftNavMinBreakpoint:1009,leftNavMaxBreakpoint:1472,leftNavPaddedClassName:"nike-cq-team-selector-pad-left-nav",leftNavPadding:243,tabContainer:null},c=b.extend(e,c||{}),h=b(d),l=this,i;
c.innerWidth=c.width-c.innerMargin;
h.css("margin-left","0px");
function k(){h.wrap('<div class="'+c.wrapperClass+'" />');
l.resourceEl=h;
l.wrapper=h.parent();
l.wrapper.css("overflow","hidden");
l.wrapper.wrap('<div class="'+c.outerWrapperClass+'" />');
l.outerWrapper=l.wrapper.parent();
l.outerWrapper.width(c.width);
var m=0;
var n;
h.find("ul").each(function(p){var r=b(this);
var o=r.find("li");
var s=o.outerWidth(true);
var q=o.length*s;
if(q>m){n=r;
m=q;
i=s
}});
h.width(m);
j();
f();
b(window).resize(function(){f()
})
}function j(){var o=b("<div />",{"class":c.leftArrowClass});
var n=b("<div />",{"class":c.rightArrowClass});
l.leftArrow=o;
l.rightArrow=n;
l.outerWrapper.append(o).append(n);
if(c.multiRowSelector&&l.wrapper.find(c.multiRowSelector).length>1){l.leftArrow.addClass(c.multiRowClass);
l.rightArrow.addClass(c.multiRowClass)
}function q(){var r=l.wrapper.width();
return(i*Math.ceil(r/i))-r
}function m(){return parseInt(h.css("margin-left").replace("px",""))
}function p(){return(m()%i)==0
}l.leftArrow.bind({click:function(){var s=m();
var r=q();
if(s<0){var t=(s+i>=0)?0:s+(p()?i:r>=c.minShiftWidth?r:(i+r));
h.animate({"margin-left":t},c.animationSpeed,g)
}}});
l.rightArrow.bind({click:function(){var s=m();
var r=q();
var t=h.width();
if(s>-t){var u=s-(p()?(r>=c.minShiftWidth?r:(i+r)):i);
h.animate({"margin-left":u},c.animationSpeed,g)
}}})
}function f(){var m=b(window).width(),q=c.handleLeftNav&&a.detectLeftNav(),o=(q&&m>c.leftNavMinBreakpoint&&m<=(c.leftNavPadding+c.innerMargin+c.width)),n,p;
if(o){l.outerWrapper.parent().addClass(c.leftNavPaddedClassName);
if(c.tabContainer){c.tabContainer.addClass(c.leftNavPaddedClassName)
}}else{l.outerWrapper.parent().removeClass(c.leftNavPaddedClassName);
if(c.tabContainer){c.tabContainer.removeClass(c.leftNavPaddedClassName)
}}if(m>c.width){n=c.innerWidth;
p=c.width
}else{n=m-c.innerMargin;
p=m
}if(o){n-=c.leftNavPadding;
p-=c.leftNavPadding
}l.wrapper.width(n);
l.outerWrapper.width(p);
if(h.width()<=l.wrapper.width()){l.leftArrow.hide();
l.rightArrow.hide();
h.removeClass(c.scrollingClass).css("margin",0);
return
}l.leftArrow.show();
l.rightArrow.show();
h.addClass(c.scrollingClass);
g()
}function g(){var o=h.css("margin-left");
if(!o){return
}var p=parseInt(o.replace("px",""),10);
if(p>=0){l.leftArrow.hide()
}else{l.leftArrow.show()
}var n=h.width()-l.wrapper.width();
var m=n*-1;
if(p<=m){l.rightArrow.hide()
}else{l.rightArrow.show()
}}k()
}
});
nike.cq.define("nike.cq.UI.VideoPlayingElement",["jquery","nike.cq.UI.Overlay","nike.cq.UI.Component.VideoPlayer"],function(b,a,c){return function(d){var e=b(d).not(".video-initialized");
var f=e.find('.video-thumbnail[data-disable-playback!="true"]').andSelf().filter('.video-thumbnail[data-disable-playback!="true"]');
if(f.length>0){f.bind("click",function(){var h=b(this);
var j=912;
var g=513;
var i="nike-cq-overlay-video-player-large";
if(b(window).width()<996){j=684;
g=385;
i="nike-cq-overlay-video-player-small"
}new a({cssClass:i,onOpen:function(){b(h).clone().appendTo(".nike-cq-overlay-content-element").attr("id","nike-cq-overlay-video-player");
var k=b("#nike-cq-overlay-video-player");
k.attr("data-width",j);
k.attr("data-height",g);
this.overlayVideo=new c(k)
},onBeforeClose:function(){this.overlayVideo.remove();
this.close()
}})
})
}e.append('<div class="faux-border"></div>').addClass("video-initialized")
}
});
nike.cq.define("nike.cq.UI.HashState",["jquery","nike.cq.Utils"],function(f,e){var c=[],g=function(){h()
},h=function(){if("onhashchange" in window){f(window).bind("hashchange",function(j){a()
})
}else{var i=window.location.hash;
window.setInterval(function(){if(window.location.hash!=i){i=window.location.hash;
a()
}},100)
}},b=function(i){if(window.location.hash.indexOf("/content")==-1){window.location.hash=i
}},d=function(){var i=window.location.hash.replace("#","");
if(i.length>0&&i.indexOf("/content")==-1){window.location.hash="";
window.location.hash=i
}};
var a=function(){var j=location.hash.replace("#",""),i=c[j];
if(j&&i){i.func.call(i.scope)
}};
g();
if(e.isiOS()){f(window).load(function(){var i=function(){if(document.readyState==="complete"){d()
}else{setTimeout(i,100)
}};
i()
})
}return{updateHash:b,registerHashCallback:function(k,j,i){c[k]={scope:j,func:i};
a()
}}
});
nike.cq.require("jquery",function(b){var a=function(){var c=b("a[href*=#]:not([href=#]):not([data-tout-id])"),e=window.location.pathname.replace(/^\//,""),f=c.filter('[href^=#], [href*="'+e+'#"]'),d=300;
f.on("click",function(l){var g=this.hash,m=b(g);
l.preventDefault();
m=m.length?m:b("[name="+this.hash.slice(1)+"]");
if(m.length){var j=5,h=b(window).scrollTop(),o=m.offset(),n=o?Math.max(o.top,0):0,k=Math.abs(n-h),i=Math.max(Math.ceil(k/j),d);
b("html,body").animate({scrollTop:n},i,function(){window.location.hash=g
})
}})
};
b(a)
});