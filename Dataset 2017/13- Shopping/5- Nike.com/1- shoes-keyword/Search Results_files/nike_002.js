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
(function(c){var e=function(){var h=c(".nike-cq-footer-2 .nike-cq-list-item .nike-cq-list-sublist-level1");
h.each(function(){c(this).before("<span class='nike-cq-footer-arrow-up'></span>")
});
h.parent().click(function(k){k.preventDefault();
var j=c(this).children("a");
a(j)
});
if(c("body").data("cms-mode")!="EDIT"){var i=0;
var f=60;
var g=260;
c(".nike-cq-footer-boxes-box").each(function(j,k){if(c(k).height()>i){i=c(k).height()
}});
if(i<g){i=260
}c(".nike-cq-footer-boxes-box-inner").each(function(m,o){var j=i-f;
c(o).height(j);
var k=c(o).find(".nike-cq-cta");
var n=c(k).width();
var l=-(n/2);
c(o).find(".nike-cq-cta").css({position:"absolute",bottom:"30px",left:"50%","margin-left":l})
})
}},a=function(f){var g=c(f).siblings(".nike-cq-list-sublist-level1");
d();
if(!c(f).hasClass("selected")){c(".nike-cq-footer-2 .nike-cq-list-item.nike-cq-list-item-level1 a").removeClass("selected");
b(g,c(f).parent());
c(f).addClass("selected")
}else{c(".nike-cq-footer-2 .nike-cq-list-item.nike-cq-list-item-level1 a").removeClass("selected")
}},b=function(i,h){var j=c(".nike-cq-footer-2"),k=c(i).clone(),g=c(".nike-cq-footer-2-submenu-inner");
j.addClass("move-up");
j.before('<div class="nike-cq-footer-2-submenu"><div class="nike-cq-footer-2-submenu-inner"></div></div>');
k.show();
var f=k.wrap("<div>").parent().html();
g.html("");
g.html(f);
h.addClass("darker-background")
},d=function(){var f=c(".nike-cq-footer-2");
f.removeClass("move-up");
c(".nike-cq-footer-2-submenu").remove();
c(".nike-cq-footer-2-inner ul li").removeClass("darker-background")
};
c(function(){if(c(".nike-cq-global-footer-container").length){e()
}})
})(jQuery);
nike.cq.define("nike.cq.NikeCom.GlobalFooter",["jquery"],function(b){var a=function(g){var d="nike-cq-global-footer-guides-container-active",e=".nike-cq-global-footer-guides-container",f=".nike-cq-global-footer-guides-menu";
var c=function(h){h.toggleClass(d).children(f).toggle()
};
g.on("click",e,function(h){if(h.target!==this){return
}c(b(this))
}).on("mouseleave",e,function(){if(b(this).hasClass(d)){c(b(this))
}})
};
b(function(){b(".nike-cq-global-footer-bottom-column-right, footer > .swoosh-footer").each(function(){a(b(this))
})
});
return{init:a}
});
nike.cq.define("nike.cq.NikeCom.GlobalFooterWeChatQRToggle",["jquery"],function(d){var c=false;
var e=d(".nike-cq-global-footer-2-social-wrapper span.nsg-glyph--wechat");
var a=d(".nike-cq-global-footer-2-social-wechat-qrcode");
var b=d("div.nike-cq-global-footer-2");
b.mouseup(function(f){if(!e.is(f.target)&&e.has(f.target).length===0){if(a.hasClass("show")){a.removeClass("show");
e.removeClass("qrexpanded");
c=false
}}});
e.click(function(){if(!c){e.addClass("qrexpanded");
if(!a.hasClass("show")){a.addClass("show")
}}if(c&&a.hasClass("show")){e.removeClass("qrexpanded");
e.removeClass("show")
}c=!c
});
e.hover(function(){if(!c&&!a.hasClass("show")){a.addClass("show")
}},function(){if(!c&&a.hasClass("show")){a.removeClass("show")
}})
});
nike.cq.require(["jquery","nike.cq.UI.StringReplace"],function(b,a){var c=".nike-cq-tesla-xml h1,.nike-cq-tesla-xml h2,.nike-cq-tesla-xml h3,.nike-cq-tesla-xml h4,.nike-cq-tesla-xml h5,.nike-cq-tesla-xml h6,.nike-cq-tesla-xml p,.nike-cq-tesla-xml li,.nike-cq-tesla-xml span";
if(!b("html").hasClass("ie7")){a(c,"Nike+",'Nike<span class="nikeplus">+</span>');
a(c,"NIKE+",'NIKE<span class="nikeplus">+</span>');
a(c,"dunk+",'dunk<span class="nikeplus">+</span>');
a(c,"DUNK+",'DUNK<span class="nikeplus">+</span>');
a(c,"LUNARGLIDE+",'LUNARGLIDE<span class="nikeplus">+</span>');
a(c,"LUNARTR1+",'LUNARTR1<span class="nikeplus">+</span>');
a(c,"HYPERWORKOUT+",'HYPERWORKOUT<span class="nikeplus">+</span>')
}});
$(function(){var b=$("html.touch a.nike-cq-stacked-cta-button");
var a="nike-cq-stacked-cta-active";
b.click(function(d){d.preventDefault();
var c=$(this),f=c.closest("nav"),e=f.hasClass(a);
$("."+a).removeClass(a);
if(!e){f.addClass(a)
}})
});
nike.cq.define("nike.cq.PES.BrightCovePlayer",["jquery"],function(d){var g,i=function(j){f(j);
if(j.fadeInOnHover==true){c(j)
}},f=function(j){var l,k;
if(j.thumbnailImage){l=d(j.thumbnailImage).attr("width");
k=d(j.thumbnailImage).attr("height");
if(!l&&!l){d("<img/>").attr("src",d(j.thumbnailImage).attr("src")).load(function(){l=this.width;
k=this.height;
e(j,l,k)
})
}else{if(l&&k){e(j,l,k)
}else{if(!l){d("<img/>").attr("src",d(j.thumbnailImage).attr("src")).load(function(){var o=this.width;
var m=this.height;
var n=k/m;
l=o*n;
e(j,l,k)
})
}else{if(!k){d("<img/>").attr("src",d(j.thumbnailImage).attr("src")).load(function(){var o=this.width;
var m=this.height;
var n=l/o;
k=m*n;
e(j,l,k)
})
}}}}}},e=function(j,l,k){d(j.playButton).css({width:l,height:k});
d(j.thumbnailDiv).css({width:l,height:k})
},c=function(j){d(j.thumbnailDiv).hover(function(){d(this).stop().animate({opacity:"1"},"slow")
},function(){d(this).stop().animate({opacity:"0.7"},"slow")
})
},b=function(l){var k=brightcove.api.getExperience(l);
var j=k.getModule(brightcove.api.modules.APIModules.EXPERIENCE);
g=k.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
j.addEventListener(brightcove.api.events.ExperienceEvent.TEMPLATE_READY,h);
g.addEventListener(brightcove.api.events.MediaEvent.COMPLETE,a)
},h=function(j){g.play()
},a=function(j){doHideVideoOverlay()
};
return{init:i,onTemplateLoaded:b}
});
nike.cq.define("nike.cq.PES.PESBox",["jquery"],function($){var init=function(configuration){var config=configuration;
if($(".nike-cq-pesBox").length==0){setupPESBox()
}$(config.elementSelector).click(function(){displayPESBox(config)
})
},displayPESBox=function(config){var pesBox=$(".nike-cq-pesBox"),pesBoxContent=pesBox.find("#nike-cq-pesBox-content");
$("body").css("overflow","hidden");
pesBox.css("height","100%");
var ie8=$.browser.msie&&($.browser.version==8||$.browser.version==7);
if(ie8){pesBox.css("background-color","#000000");
pesBox.css("filter","alpha(opacity=91)")
}pesBox.css("height","100%");
pesBox.show();
pesBoxContent.html("<span class='nike-cq-pesBox-close'></span>"+config.contentToDisplay);
if(config.customFunction){var customFunction=eval(config.customFunction);
if(typeof(customFunction)==="function"){customFunction.call(this)
}}},hidePESBox=function(){$(".nike-cq-pesBox").hide().find("#nike-cq-pesBox-content").html("")
},setupPESBox=function(){$("body").prepend("<div class='nike-cq-pesBox'><div id='nike-cq-pesBox-content'></div></div>");
$(".nike-cq-pesBox").delegate(".nike-cq-pesBox-close","click",function(){hidePESBox()
})
};
return{init:init,hidePESBox:hidePESBox}
});
nike.cq.define("nike.cq.PES.PreviewOptions",["jquery"],function(b){var e,d,c=function(){var f=(b(".nike-cq-element-reference").length+b(".nike-cq-carousel").length),h=b(".placeholder").length,g=b(".pesWarning").length;
b("#nike-cq-preview-options-form").hide();
if(f>0){b("#nike-cq-preview-options-form").show();
if(b(".pesWarning").length>0){b("#showPESWarningsYes").attr("checked",true)
}else{b("#showPESWarningsNo").attr("checked",true)
}b("#nike-cq-preview-options-form").delegate("input:radio","change",function(){b("#nike-cq-preview-options-form").submit()
})
}},a=function(){var f=false;
b("#phonePreview").click(function(i){i.preventDefault();
if(f){return false
}else{setTimeout(function(){f=false
},1000);
f=true
}var p=b(this).data("phoneVersion");
var m=window.location.href;
var q=m.split(".html");
m=q[0]+".phone.html?wcmmode=disabled&phone-preview";
function l(u,t,r){var s=["toolbar=no","directories=no","status=no","menubar=no","scrollbars=yes","resizable=yes","copyhistory=yes","top=0","left="+u,"width="+t,"height="+r];
return s.join(",")
}function g(){var u=document.createElement("div");
u.style.visibility="hidden";
u.style.width="100px";
document.body.appendChild(u);
var s=u.offsetWidth;
u.style.overflow="scroll";
var r=document.createElement("div");
r.style.width="100%";
u.appendChild(r);
var t=r.offsetWidth;
u.parentNode.removeChild(u);
return(s-t)
}function n(v,r,w,u){var s=v+w,x=r+w,t=20;
e=window.open(m,"portrait",l(0,s,r));
d=window.open(m,"landscape",l(s+t,x,v));
e.onload=function(){this.document.title=this.document.title+" -  PHONE PREVIEW - "+u+" IN PORTRAIT";
var y=this.document.getElementsByTagName("body")[0];
y.className=y.className+" nike-cq-phone-preview portrait device-os-ios"
};
d.onload=function(){this.document.title=this.document.title+" -  PHONE PREVIEW - "+u+" IN LANDSCAPE";
var y=this.document.getElementsByTagName("body")[0];
y.className=y.className+" nike-cq-phone-preview landscape device-os-ios"
}
}var j,h,o,k=g();
if(p==="iphone5"){j=320;
h=586;
o="iPHONE 5"
}if(e&&!e.closed){e.close()
}if(d&&!d.closed){d.close()
}n(j,h,k,o)
})
};
b(window).load(function(){c();
a()
});
return{init:c,initPhonePreview:a}
});
nike.cq.define("nike.cq.PES.ProductOptions",["jquery","nike.cq.Utils"],function(h,m){var l={productOptions:".nike-cq-product-options",thumbnailElements:"li.nike-cq-product-options-option a",imageContainerElem:".nike-cq-product-options-images img",autoRotateTime:3000,autoRotateStartDelay:3000},n=0,e=undefined,b=h(".nike-cq-p1-layout-foreground"),i=function(r,q){var p=q.find(l.imageContainerElem),s=p.filter(".active"),t=p.eq(r);
t.fadeIn(500);
s.stop().fadeOut(1000,function(){h(this).removeClass("active");
t.addClass("active")
})
},c="",f=function(q,p){var r=p.closest(".nike-cq-p1-layout-foreground").find(".nike-cq-cta-component");
if(r.length){if(!r.eq(0).find("nav").length){r.eq(0).find("a").attr("href",m.validateInternalUrl(q))
}}},g=function(s,p){p.find(l.thumbnailElements+".current").removeClass("current").find(".marker").remove();
var q=p.find(l.thumbnailElements),r=q.eq(s).addClass("current").append('<span class="marker"></span>');
return r.attr("href")
},o=function(r){var p=r.find(".nike-cq-product-options-images img"),q=r.find(l.thumbnailElements),s=p.eq(0);
s.addClass("active").fadeIn(1000,function(){var t=g(0,r);
f(t,r);
q.fadeIn(1100,function(){h(this).addClass("available")
})
})
},a=function(){setTimeout(function(){e=setInterval(d,l.autoRotateTime)
},l.autoRotateStartDelay);
b.bind("click",function(){j()
})
},d=function(){var p=h(l.productOptions),r=n+1,s=p.find("li.nike-cq-product-options-option a")[r],q=undefined;
if(s){q=h(s).attr("href")
}else{r=0;
q=p.find("li.nike-cq-product-options-option a:first").attr("href")
}i(r,p);
g(r,p);
f(q,p);
n=r
},j=function(){clearInterval(e)
},k=function(q){var p=l.thumbnailElements;
var s=function(){h(p).hide();
h(l.imageContainerElem).hide();
h(l.productOptions).each(function(){o(h(this))
});
h(".nike-cq-product-options-title").fadeIn(900);
if(q==="true"){a()
}};
var r=function(){h(l.productOptions).delegate(l.thumbnailElements,"click",function(B){B.preventDefault();
var z=h(this),v=z.closest(l.productOptions),w=v.find(":animated"),x=z.attr("href"),u=z.parent(),A=u.parent().find("li"),y=A.index(u);
n=y;
if(w.length===0&&!z.hasClass("current")&&z.hasClass("available")){i(y,v);
g(y,v);
f(x,v)
}});
h(p).hover(function(){var v=h(this),w=v.find("img"),u=w.attr("title");
if(u!==""){v.parent().append('<span class="nike-cq-p1-tooltip"><p>'+u+'</p><span class="carrot-bottom"></span></span>')
}},function(){var u=h(this);
u.parent().find(".nike-cq-p1-tooltip").remove()
})
};
function t(){if(document.readyState==="complete"){s();
r()
}else{setTimeout(t,100)
}}setTimeout(t,100)
};
return{init:k,showProductOptions:o}
});
nike.cq.define("nike.cq.PES.videoBg",["jquery"],function(j){var i={parentContainer:".nike-cq-fst",startingImage:".nike-cq-fst-video-bg-start-image",fallbackImage:".nike-cq-fst-background-image",videoContainer:".nike-cq-fst-video-bg-component",loadTimeout:10000,videoDelay:2000,autoPlay:false,videoFormat:"video/mp4",isIOSControls:false,videoMetaDataFunction:function(p){return j(p).data()
},created:null};
var h=function(s,q){var r=j("<video />"),p=j("<source />");
p.attr("src",s.videoUrl).attr("type",s.videoFormat||"video/mp4");
r.append(p);
!this.isIOSControls&&r.attr("preload","true");
s.loop&&!this.parentContainer.parents(".nike-cq-carousel-slide").length&&r.attr("loop","");
if(!s.controls){r.attr("muted","true");
r[0].muted=true
}q&&q.call(q,r[0]);
return r[0]
};
var k=function(D){var q=this;
var B=j(D);
var p=j("<div />").addClass("nike-cq-fst-video-controls");
var y=j("<a>&nbsp;</a>").attr("href","#").addClass("nike-cq-fst-video-play-pause-button");
var w=function(F){if(F){!y.hasClass("paused")&&y.addClass("paused")
}else{!F&&y.hasClass("paused")&&y.removeClass("paused")
}};
var s=function(F){F?t():v()
};
var t=function(){if(q.isIOSControls){if(D&&D.currentTime&&D.currentTime>0){D.currentTime=0
}D.play();
D.webkitEnterFullscreen()
}else{B.trigger("playVideoUserAction")
}};
var v=function(){q.pause();
B.trigger("pauseVideoUserAction")
};
var z=function(){p.stop(true,true).fadeIn()
};
var u=function(){p.is(":visible")&&!D.paused&&p.stop(true,true).fadeOut()
};
var x=function(){w(false)
};
var A=function(){w(true);
z()
};
var E=function(F){F.preventDefault();
s(y.hasClass("paused"))
};
var C=function(){z()
};
var r=function(){u()
};
p.append(y);
y.click(E);
w(D.paused);
D.addEventListener("play",x);
D.addEventListener("pause",A);
q.parentContainer.bind("mouseenter",C);
q.parentContainer.bind("mouseleave",r);
return p[0]
};
var a=function(p,q){return p.canPlayType&&p.canPlayType(q)!==""
};
var c=function(p){return p&&p.readyState>=2
};
var b=function(r,p){var q=j(r);
if(p&&p.controls()){p.startImage&&!p.startImage.is(":visible")&&p.startImage.stop(true,true).show();
if(r&&r.currentTime&&r.currentTime>0){r.currentTime=0
}}else{q.parent().fadeOut(400,function(){if(!p||!q.parents(".nike-cq-carousel-slide").length){q.remove();
r=null
}})
}q.trigger("videoFinished")
};
var d=function(r,p){var q=j(r);
if(r&&r.currentTime&&r.currentTime>0){r.currentTime=0
}p&&p.controls()&&p.startImage&&!p.startImage.is(":visible")&&p.startImage.stop(true,true).show();
p&&p.videoContainer&&!p.videoContainer.is(":visible")&&p.videoContainer.stop(true,true).show();
q.trigger("videoRewind")
};
var e=function(r,q){var p=this;
r.addEventListener("play",function(){if(!p.isIOSControls){q.fadeOut()
}});
r.addEventListener("ended",function(){b(r,p)
});
r.addEventListener("canplay",function(){n.call(p)
});
this.parentContainer.bind("videoReset",function(){d(r,p)
});
if(p.isIOSControls){r.addEventListener("webkitendfullscreen",function(){if(r&&r.currentTime&&r.currentTime>0){r.currentTime=0
}r.pause()
})
}};
var g=function(r,q,p){var s=function(){setTimeout(function(){if(c(r)){r.play()
}else{r.addEventListener("canplay",function(){r.play()
})
}},p.videoDelay)
};
j(window).load(function(){s()
})
};
var f=function(r,q,s,p){this.noLoadTimer=setTimeout(function(){if(!r||!r.readyState||r.readyState<2){q.remove();
j(s).remove();
b(r)
}},p.loadTimeout)
};
var n=function(){if(this.noLoadTimer){clearTimeout(this.noLoadTimer)
}this.noLoadTimer=null
};
var m=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);
var l=(function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var p=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
return[parseInt(p[1],10),parseInt(p[2],10),parseInt(p[3]||0,10)]
}})();
var o=function(r,p){this.config=r=j.extend({},i,r);
this.parentContainer=p||j(r.parentContainer);
var s=this.videoContainer=p.find(r.videoContainer);
var u=this.startImage=p.find(r.startingImage);
var v=this.fallbackImage=p.find(r.fallbackImage);
var t=this.videoData=r.videoMetaDataFunction.call(this,s);
this.isIOSControls=(m&&l[0]>=7&&this.controls());
var w=this.videoElement=h.call(this,t,r.created);
var q;
var x=this.noLoadTimer=null;
if((this.isIOSControls||!m)&&a(w,r.videoFormat)){u.show();
s.show();
e.call(this,w,u);
s.append(w);
if(this.controls()){q=this.videoControls=k.call(this,w);
s.after(q)
}!this.isIOSControls&&f.call(this,w,u,q,r);
this.willPlay=true
}else{s.remove();
u.remove();
this.willPlay=false
}p.data("vbgRef",this);
s.trigger("initializeVideo",{controls:this.controls()})
};
Element.prototype.isVisible=function(){function q(s){var t=s.parentNode;
if(!r(s)){return false
}if(9===t.nodeType){return true
}if("0"===p(s,"opacity")||"none"===p(s,"display")||"hidden"===p(s,"visibility")){return false
}if(t){return q(t)
}return true
}function p(s,t){if(window.getComputedStyle){return document.defaultView.getComputedStyle(s,null)[t]
}if(s.currentStyle){return s.currentStyle[t]
}}function r(s){while(s=s.parentNode){if(s==document){return true
}}return false
}return q(this)
};
o.prototype.getVideoElement=function(){return this.videoElement
};
o.prototype.calculateVisibility=function(){if(!this.willPlay||!this.canPlay()||m){return false
}var v=j(window),q,w,p=Math.max(0,j(".gnav").height()),s=v.height()-p,t=v.scrollTop()+p,r=t+s,y=this.videoContainer.offset().top,u=this.videoContainer.height(),x=y+u;
if(!this.videoElement.isVisible()){q=0
}else{if(this.controls()&&this.paused()){q=0
}else{if(y>=t&&x<=r){q=u
}else{if(y<t&&x>r){q=s
}else{if(x>=t&&x<=r){q=u-(t-y)
}else{if(y>=t&&y<=r){q=r-y
}else{q=0
}}}}}}w=(q/u)*100;
return w
};
o.prototype.getLayerIndex=function(){if(this.videoElement){for(var p,q,r=j(this.videoElement);
r.length&&r[0]!==document;
){if(p=r.css("position"),("absolute"===p||"relative"===p||"fixed"===p)&&(q=parseInt(r.css("zIndex"),10),!isNaN(q)&&0!==q)){return q
}r=r.parent()
}}return 0
};
o.prototype.pause=function(){return this.willPlay&&!this.videoElement.paused&&this.videoElement.pause()
};
o.prototype.play=function(){return this.willPlay&&this.canPlay()&&this.videoElement.paused&&this.videoElement.play()
};
o.prototype.paused=function(){return this.videoElement.paused
};
o.prototype.controls=function(){return this.videoData.controls
};
o.prototype.canPlay=function(){return c(this.videoElement)&&this.videoElement.currentTime!=this.videoElement.duration
};
return o
});
nike.cq.define("nike.cq.PES.Hotspots",["jquery","nike.cq.Utils"],function(B,F){var j=34,n=34,l=109,o=87,e=109,r=180,L=14,u=(r/2)-(j/2),I=n+L,g=function(S,Q){var X=S.width(),P=S.parents(".nike-cq-p1-layout-foreground").height(),W=Q.find(".hotspot-panel").outerHeight(),R=Q.position(),V=R.left,T=R.top,O=Q.attr("data-hotspot-x"),N=Q.attr("data-hotspot-y");
Q.removeClass("hotspot-left hotspot-right");
Q.find(".carrot").removeClass("carrot-top carrot-bottom carrot-left carrot-right");
if(V===0&&T===0&&(O!==0||N!==0)){return
}if((V+(j/2))>(X/2)){Q.find(".carrot").addClass("carrot-left");
Q.addClass("hotspot-right")
}else{Q.find(".carrot").addClass("carrot-right");
Q.addClass("hotspot-left")
}var M=0-(W/2)+(n/2);
if((T+(n/2))-(W/2)<0){M=0-T
}if((T+(n/2))+(W/2)>P){var U=(T+(n/2))+(W/2)-P;
U=U;
M=M-U
}Q.find(".hotspot-panel").css({top:M,bottom:"auto",left:""});
if(T<e){Q.find(".carrot").addClass("carrot-bottom");
Q.find(".hotspot-panel").css({top:n+12,bottom:"auto",left:-((216/2)-(j/2))})
}if(T>(P-e-n)){Q.find(".carrot").addClass("carrot-top");
Q.find(".hotspot-panel").css({top:"auto",bottom:n+12,left:-((216/2)-(j/2))})
}},x=function(M){M.find(".hotspot-panel").before('<span class="carrot"></span>')
},t=function(N){var M=N.find(".nike-cq-hotspots-component");
if(N.is(":visible")){N.find(".hotspot").each(function(P){var O=B(this);
O.hide().stop().delay(500*(P+1)).fadeIn(300,function(){g(M,O)
})
})
}},G=function(M){M.find(".hotspot a.crosshair").live("click",function(P){P.preventDefault();
var N=B(this);
var O=M.find("a.crosshair").not(N);
if(!N.hasClass("active")){A(M,N);
O.each(function(){a(M,B(this),500)
})
}else{a(M,N,500,true)
}})
},v=function(P,N){var O=P.find(".hotspot a.crosshair"),M=O.children("span").css("background-color");
if(M){var Q=M.replace("rgb","rgba").replace(")",", "+N+")");
O.css("border-color",Q)
}},A=function(N,M){C(N);
M.addClass("active").parent().find(".carrot, .hotspot-panel").fadeIn(700);
M.children("span").removeClass("nsg-glyph--plus").addClass("nsg-glyph--minus")
},a=function(P,N,O,M){if(M){N.stop().parent().find(".carrot, .hotspot-panel").fadeOut({complete:function(){N.removeClass("active");
w(P)
},duration:O});
N.children("span").toggleClass("nsg-glyph--plus nsg-glyph--minus")
}else{N.removeClass("active").stop().parent().find(".carrot, .hotspot-panel").fadeOut({complete:function(){w(P)
},duration:O});
N.children("span").removeClass("nsg-glyph--minus").addClass("nsg-glyph--plus")
}},D=function(M){M.find(".nike-cq-p1-hotspot-overlay-mask").live("click",function(O){O.preventDefault();
var N=M.find(".hotspot .active");
if(N.length){a(M,N,500)
}w(M)
})
},C=function(N){if(N.find(".nike-cq-p1-hotspot-overlay-mask").length===0){var M=B('<div class="nike-cq-p1-hotspot-overlay-mask"></div>');
N.find(".nike-cq-p1-layout-container").first().before(M)
}},w=function(M){if(!M.find(".hotspot .active").length){M.find(".nike-cq-p1-hotspot-overlay-mask").remove()
}},J=false,K=function(){if(!J){var N=[768,960,1229];
for(var M=0;
M<N.length;
++M){if(window.matchMedia){p(N[M])
}else{s(N[M])
}}J=true
}},p=function(N){var M=window.matchMedia("(max-width: "+N+"px)");
if(M.matches){h()
}M.addListener(function(){h()
})
},s=function(M){F.debounceResize(h,100,true)
},h=function(){B(".nike-cq-hotspots-component").each(function(){var N=B(this),M=N.hasClass("scaled-down-flag");
if(!M&&i(N)===464){E(N)
}if(M&&i(N)>=580){f(N)
}})
},i=function(M){return M.width()
},E=function(M){e=o;
M.find(".hotspot").each(function(){var N=B(this);
z(N);
g(M,N)
});
M.addClass("scaled-down-flag")
},z=function(N){var R=80,Q=parseInt(N.attr("data-hotspot-x"),10)/100*R,P=parseInt(N.attr("data-hotspot-y"),10)/100*R;
N.css({left:Q,top:P});
if(b(N)==="hotspot-type-invisible"){var O=parseInt(N.attr("data-hotspot-width"),10)/100*R,M=parseInt(N.attr("data-hotspot-height"),10)/100*R;
N.css({width:O,height:M})
}},f=function(M){e=l;
M.find(".hotspot").each(function(){var N=B(this);
c(N);
g(M,N)
});
M.removeClass("scaled-down-flag")
},c=function(N){var P=parseInt(N.attr("data-hotspot-x"),10),O=parseInt(N.attr("data-hotspot-y"),10);
N.css({left:P,top:O});
if(b(N)==="hotspot-type-invisible"){var M=parseInt(N.attr("data-hotspot-width"),10),Q=parseInt(N.attr("data-hotspot-height"),10);
N.css({width:M,height:Q})
}},b=function(M){return M.parent().attr("data-hotspot-type")
},H=function(){B("body").bind("touchstart",function(M){if(!B(this).hasClass("hotspot")){B("body").focus()
}})
},q=function(M){if(document.readyState==="complete"){t(M)
}else{B(window).load(function(){t(M)
})
}},y=function(O){var M=O.find(".nike-cq-touts-p1-layout-touts-p1-image-resource"),N=parseInt(M.attr("height"),10);
if(N>500){l=142;
o=120
}},d=function(M){M.find(".hotspot").stop().each(function(){a(M,B(this).find("a.crosshair"),1)
}).css({opacity:1}).hide()
},m=function(M){d(M);
t(M)
},k=function(M){y(M);
x(M);
q(M);
G(M);
v(M,0.3);
D(M);
K(M);
H()
};
return{init:k,hideHotspots:d,resetHotspots:m}
});
nike.cq.define("nike.cq.PES.HotspotSystem",["jquery","nike.cq.initializer"],function(d,c){var b,e=function(y){var u,n,D,i,v,t,x,p,m,B,C=940,A={"hotspot-type-crosshair":{ANIMATION:{showDelay:500,fadeIn:300},CLASS_LIST:"",CLICK_TO_SHOW_PANEL:true,POSITIONABLE_PANEL:true},"hotspot-type-invisible":{ANIMATION:{},CLASS_LIST:"",RESIZE_HOTSPOT:true},"hotspot-type-shop":{ANIMATION:{},CLASS_LIST:"slideIn",HOVER_PANEL:true}},s,r,j=function(){if(s){D.addClass(s)
}},w=function(I,G){var H=I.find(".hotspot a.crosshair"),F=H.children("span").css("background-color");
if(F){var J=F.replace("rgb","rgba").replace(")",", "+G+")");
H.css("border-color",J)
}},f=function(G){var F=d.Deferred(),I=i.clone().hide().appendTo("body");
I.load(F.resolve);
I.error(F.resolve);
d.when(F).done(H).then(H);
function H(L){var J=I.width(),K=I.height();
if(J!==0&&K!==0){m=J;
B=K
}}return F.promise()
},h=function(H){var R=H.data("hotspotX"),Q=H.data("hotspotY"),N=Math.ceil(((C*B)/m)),T=R/C,G=Q/N,M=i.is(":visible"),F=d(window).width(),J=M?i.height():(B*F)/m,P=M?i.width():F,O={height:H.height(),width:H.width(),top:G*100+"%",left:T*100+"%"},L,S,I,K;
if(A[x].RESIZE_HOTSPOT){L=H.data("hotspotHeight");
S=H.data("hotspotWidth");
O.height=J*L/N;
O.width=P*S/C
}I=G*(J-N)/(O.height/2);
K=T*R/2000*(P-C)/(O.width/2);
O.top=(G+I/J)*100+"%";
O.left=(T+K/P)*100+"%";
return O
},l=function(){var F=d(this);
if(F.hasClass("hotspot")){F.css(h(F))
}else{D.each(function(){var G=d(this);
G.css(h(G))
})
}},k=function(K,I){K.css({position:"absolute",top:"0"});
var Q=K.width(),H=K.height(),P=I.find(".hotspot-panel").outerHeight(),J=I.position(),N=J.left,L=J.top,O=I.width(),G=I.height();
I.removeClass("hotspot-left hotspot-right");
I.find(".carrot").removeClass("carrot-top carrot-bottom carrot-left carrot-right");
if((N+(O/2))>(Q/2)){I.find(".carrot").addClass("carrot-left");
I.addClass("hotspot-right")
}else{I.find(".carrot").addClass("carrot-right");
I.addClass("hotspot-left")
}var F=0-(P/2)+(G/2);
if((L+(G/2))-(P/2)<0){F=10-L
}if((L+(G/2))+(P/2)>H){var M=(L+(G/2))+(P/2)-H;
M=M+10;
F=F-M
}I.find(".hotspot-panel").css({top:F,bottom:"auto",left:""});
if(L<100){I.find(".carrot").addClass("carrot-bottom");
I.find(".hotspot-panel").css({top:G+12,bottom:"auto",left:-((216/2)-(O/2))})
}if(L>(H-100-G)){I.find(".carrot").addClass("carrot-top");
I.find(".hotspot-panel").css({top:"auto",bottom:G+12,left:-((216/2)-(O/2))})
}K.css("position","static")
},g=function(F){d(this).hide().stop().delay(r.showDelay*(F+1)).fadeIn(r.fadeIn)
},q=function(J,G,I){var F=G?"addClass":"removeClass",H=G?"fadeIn":"fadeOut";
if(I){J.removeClass("active").find(".carrot, .hotspot-panel").hide().end().find("a.crosshair").removeClass("active").find("span.nsg-glyph--minus").removeClass("nsg-glyph--minus").addClass("nsg-glyph--plus")
}else{J[F]("active").find(".carrot, .hotspot-panel")[H](700).end().find("a.crosshair")[F]("active").find("span").toggleClass("nsg-glyph--plus nsg-glyph--minus");
switch(F){case"addClass":J.find("span.nsg-glyph--plus").removeClass("nsg-glyph--plus").addClass("nsg-glyph--minus");
break;
case"removeClass":J.find("span.nsg-glyph--minus").removeClass("nsg-glyph--minus").addClass("nsg-glyph--plus");
break
}}},E=function(){var F=d(".nike-cq-hotspot-type-crosshair");
if(F.hasClass("active")){F.removeClass("active").find(".carrot, .hotspot-panel").fadeOut(300).end().find("a.crosshair").removeClass("active").find("span.nsg-glyph--minus").removeClass("nsg-glyph--minus").addClass("nsg-glyph--plus")
}},o=function(){d(window).on("resize",function(){clearTimeout(p);
p=setTimeout(l,50)
});
if(A[x].HOVER_PANEL){var F=D.find(".hotspot-panel");
F.on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(G){F.addClass("hotspot-panel-hidden").parent().removeClass("slideIn")
});
d(window).load(function(){d(".ie8 .hotspot-panel, .ie9 .hotspot-panel").addClass("hotspot-panel-hidden").parent().removeClass("slideIn")
});
D.on("mouseenter",function(){d(this).find(".hotspot-panel-hidden").css({height:"auto",overflow:"visible"}).addClass("hotspot-hover")
});
if(d("html.ie8").length){D.on("mouseenter",function(){var G=d(this).find(".hotspot-panel"),H=20;
G.css({marginLeft:-(G.width()-H)/2})
})
}D.on("mouseleave",function(){var G=d(this).find(".hotspot-panel-hidden");
G.removeClass("hotspot-hover").css({"pointer-events":"none"});
setTimeout(function(){G.css({height:"0",overflow:"hidden","pointer-events":"auto"})
},300)
})
}if(A[x].CLICK_TO_SHOW_PANEL){D.on("click",function(I){I.preventDefault();
var G=d(this),H=G.hasClass("active");
E();
if(!H){k(u,G)
}q(G,!H)
})
}if(v.length){v.on("slidePageIndexChange",function(H,G){v.find(".hotspot").hide();
j();
if(A[x].HOVER_PANEL){D.each(function(J){var I=d(this);
I.find(".hotspot-panel").removeClass("hotspot-panel-hidden").attr("style","").parent().addClass("slideIn")
});
d(".ie9 .hotspot-panel").addClass("hotspot-panel-hidden").parent().removeClass("slideIn")
}setTimeout(function(){D.each(function(J){var I=d(this);
if(A[x].POSITIONABLE_PANEL){q(I,false,true)
}g.call(I,J)
})
},1000)
})
}n.children().not(".nike-cq-hotspots, .hotspot-panel > *").on("click",function(G){E()
});
d(window).bind("pageshow",function(G){if(G.originalEvent.persisted){D.find(".hotspot-panel-hidden").removeClass("hotspot-hover").css({"pointer-events":"none"});
D.find("a").blur()
}})
},z=function(F){u=F.find(".hotspot-system");
if(!u){return
}t=u.data();
n=u.closest("."+t.hotspotParentContainerClass);
if(!n.length||!n.hasClass("nike-cq-fst-component")){return
}i=n.find(".nike-cq-fst-background-image img");
D=u.find(".hotspot");
v=n.parents(".nike-cq-carousel-slide:first").closest(".nike-cq-carousel");
x=t.hotspotType;
s=A[x].CLASS_LIST;
r=A[x].ANIMATION;
if(typeof m==="undefined"){f().done(function(){D.each(function(G){l.call(this,G);
g.call(this,G)
})
})
}o();
j();
w(u,0.3)
};
z(y);
return{$carousel:v,$elements:D,$parentContainer:n,init:z}
},a=function(f){return new e(d(f))
};
c.registerComponents({name:"nike-cq-hotspots",state:"ready",action:a});
return{init:a}
});
nike.cq.define("nike.cq.PES.Gestures",["jquery"],function(b){var a=function(c){var d={triggerPreviousEvent:"click",triggerNextEvent:"click"};
c=b.extend(d,c);
if(!b().hammer){return
}function e(f){f.gesture.preventDefault();
switch(f.type){case"dragleft":if(c.nextButton){c.$element.find(c.nextButton).trigger(c.triggerPreviousEvent);
f.gesture.stopDetect()
}break;
case"dragright":if(c.previousButton){c.$element.find(c.previousButton).trigger(c.triggerNextEvent);
f.gesture.stopDetect()
}break
}}c.$element.hammer({drag_lock_to_axis:true,drag_block_horizontal:true}).on("swipe dragleft dragright",e)
};
return{register:a}
});
nike.cq.define("nike.cq.PES.Tracking",["jquery","nike.cq.Tracking"],function(f,g){var k=function(s){f.extend(this,s)
};
var o={event:{"jcr:primaryType":"nt:unstructured",extend:k},extend:function(s){this.event.extend(s)
}};
function c(s,t,u){if(t&&!u.events){u.events=t
}if(typeof(nike.dispatchEvent)==="function"){nike.dispatchEvent(s,u)
}}function n(t){var s="";
if(t.el.attr("data-tracking")){s=t.el.attr("data-tracking")
}return s
}function p(s){return s?g.formatText(s.text()):""
}function e(s){var t=p(s);
if(s.data("tracking")){t=s.data("tracking")
}return t
}function r(s){var u="",t=s.data("tracking-target-index");
if(t){var v=s.children().eq(t);
if(v.attr("value")!=="#"){u=v.data("tracking")||"";
if(u.length===0){u=s.siblings("a").data("tracking");
if(v!==undefined){u+=">"+v.text().trim()
}}}}return u
}function h(){var t=window.location.pathname.split("/");
for(var s=0;
s<t.length;
++s){if(t[s]==="c"&&s<t.length-1){return t[s+1]
}}return t[t.length-1]
}function i(u){var v={};
if(typeof(u.el)!=="object"){return v
}var t=false;
var w=n(u);
var s="";
if(w!=""){t=true
}else{if(u.el.has("img").attr("alt")){w=u.el.find("img").attr("alt")
}else{if(u.el.has("span")){w=u.el.find("span").text()
}else{if(u.el.attr("href")){s=u.el.attr("href")
}}}}if(t){w=g.formatTextPreservingGreaterThanChar(w)
}else{w=g.formatText(w)
}if(typeof u.data!=="undefined"&&typeof u.data.prop3!=="undefined"){w=g.replaceValues(u.data.prop3,w)
}if(w!==""){v.prop3=w
}else{v.prop3=s
}return v
}function b(s){if(typeof s.el==="undefined"){return{}
}var u=p(s.el),t={};
if(s.data&&s.data.prop3){t.prop3=g.replaceValues(s.data.prop3,u)
}else{t.prop3=u
}return t
}function j(t,s){return q(t,d(t),s)
}function q(v,s,u){var t={campaign:a(v,"data-nike-campaign"),module:u,creative:s,category:a(v,"data-nike-category")};
if(t.campaign==="notauthored"&&t.category==="notauthored"){t=null
}return t
}function a(t,s){return t.attr(s)||"notauthored"
}function d(v){var x=v.attr("src");
if(!x||x===""){x=v.css("background-image")?v.css("background-image").slice(4,-1):""
}var u,y=x,w=x.indexOf(".dimg"),s=x.indexOf(".transform"),t=new RegExp(/(.dimg|.transform)(.*)$/ig);
if(w!==-1||s!==-1){y=x.replace(t,"")
}u=y.lastIndexOf("/")+1;
y=y.substr(u);
return y
}var m={extend:k,sendEventTrackingToThirdParty:c,getDataAttribute:n,elementText:p,getCtaText:e,getCtaSelectText:r,getSportCategory:h,ctaProcessor:i,ctaTextProcessor:b,buildEVar5:j,buildPageEVar5:q,config:o};
var l=nike.cq.ns("nike.cq.PES");
l.Tracking=m;
return m
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(v,f,h,u){var k="p1";
function r(x){var y={};
var z="teamselector:change team:";
z+=v(x.el.find("option:selected"));
y.prop3=z;
return y
}function l(x){var y={};
if(typeof(x.el)!=="object"){return y
}var z=x.el.find("img").attr("data-tracking");
y.prop3="P1 auto rotate:color chip selection:"+z;
return y
}function w(x){return x.data("slide-index")
}function d(x){return x.closest(".indexed-pes-reference").data("pes-reference-index")
}function g(x){var y=x.closest(".nike-cq-p1-layout-foreground"),z=y.find(".nike-cq-subtitle:first");
return v(z)
}function i(x){return x.closest(".nike-cq-p1-layout").find(".nike-cq-p1-layout-background img")
}function p(z){var x="";
if(z){var A=z.data("hotspotTitle");
var y=z.data("hotspotDescription");
if(A&&A!==""){x=A
}else{if(y&&y!==""){x=y
}}}return x
}function m(G){if(typeof G.el==="undefined"){return{}
}var F=G.el.parent(),z=G.el.hasClass("active"),E=p(F),C=G.el.closest(".nike-cq-carousel-slide"),A=C.length>0,y=z?"close":"open",B={};
if(A){var D=w(C),x=g(G.el);
B.prop3="p1 carousel "+D+":"+x+":hotspots:"+y+":"+f(E)
}else{B.prop3="p1 hotspots:"+y+":"+f(E)
}return B
}function n(D){if(typeof D.el==="undefined"){return{}
}var C=D.el.parent(),y=D.el.hasClass("active"),B=p(C),F=D.el.closest(".nike-cq-carousel"),A=F.length>0,x=D.el.attr("href"),z={};
z.prop3="p1 hidden hotspots:image:"+x;
var E=u(i(D.el),k);
if(E){z.eVar5=E
}return z
}function c(F){if(typeof F.el==="undefined"){return{}
}var E=F.el.closest(".hotspot"),D=p(E),y=v(F.el),B=F.el.closest(".nike-cq-carousel-slide"),z=B.length>0,A={};
if(z){var C=w(B),x=g(F.el);
A.prop3="p1 carousel "+C+":"+x+":hotspots:click:"+f(D)+":"+y
}else{A.prop3="p1 hotspots:click:"+f(D)+":"+y
}var G=u(i(F.el),k);
if(G){A.eVar5=G
}return A
}function t(x){var z={};
if(typeof x.el==="undefined"){return z
}var y=v(x.el);
z.prop3="p1 toggle:load:"+y;
return z
}function s(M){if(typeof M.el==="undefined"||M.el.attr("href")==="#"){return{}
}var z=h(M.el),H=M.el.closest(".nike-cq-carousel-slide"),E=H.length>0,x=undefined,L=M.el.closest(".nike-cq-p1-layout-foreground").find(".nike-cq-hotspot-type-invisible"),B=L.length>0,C=M.el.closest(".nike-cq-p1").find(".nike-cq-video-bg"),J=C.length>0,G=M.el.closest(".nike-cq-tout-toggle-container"),y=G.length>0,F={};
if(E){x=w(H);
var A=g(M.el);
F.prop3="p1 carousel "+x+":"+A+":"+z
}else{if(J){F.prop3="p1 animation:"+z
}else{if(B){F.prop3="p1 hidden hotspots:cta:"+z
}else{if(y){G=M.el.closest(".nike-cq-toggle");
var D=G.find(".nike-cq-toggle-component .is-selected");
var K=v(D);
var I=$(".device-type-phone").size()>0;
if(I){F.prop3=k+":"+z
}else{F.prop3="p1 toggle:click:"+K+":"+z
}}else{F.prop3=k+":"+z
}}}}var N=u(i(M.el),k);
if(N){F.eVar5=N
}return F
}function o(y){if(typeof y.el==="undefined"){return{}
}var A=y.el.siblings("a").data("tracking");
var x=y.el.find("option:selected").text(),z={};
if(y.el.find("option:selected").attr("value")==="#"){return{}
}else{z.prop3=k+":"+A+">"+x
}return z
}function q(F){var B={};
if(typeof F.el==="undefined"){return B
}var C=F.el.closest(".nike-cq-carousel-slide"),A=C.length>0,z=F.el.closest(".nike-cq-p1").find(".nike-cq-video-bg"),B={};
var E=F.el.closest(".nike-cq-p1-layout-component ").find(".nike-cq-p1-layout-background img").attr("alt");
var x=F.el.closest(".nike-cq-p1-layout-component ");
if(A){var D=w(C),y=g(F.el);
B.prop3="p1 carousel:"+D+":"+E+":image"
}else{if(z.length>0){B.prop3="p1:video:"+E+":image"
}else{B.prop3=k+":"+E+":image"
}}var G=u(i(x),k);
if(G){B.eVar5=G
}return B
}function e(z){var A={};
if(typeof z.el==="undefined"){return A
}var y=z.el.attr("href");
if(z.data&&z.data.prop3){A.prop3=b.replaceValues(z.data.prop3,y)
}else{A.prop3=y
}var x=u(z.el.closest(".nike-cq-product-wall-header").find(".nike-cq-product-wall-header-section-1 img"),"product wall header");
if(x){A.eVar5=x
}return A
}function j(z){var A={};
var y=z.el.closest(".nike-cq-p1-layout-container .nike-cq-video-component");
var C=y.find(".video-thumbnail");
var B=C.attr("data-video-url")||"";
var x=B.substring(B.lastIndexOf("/")+1);
A.prop3=k+":video:"+x+":cta";
return A
}return{p1VideoPlayProcessor:j,productOptionsProcessor:l,p1HotspotsProcessor:m,p1HotspotsCtaProcessor:c,p1InvisibleHotspotsProcessor:n,p1ToggleProcessor:t,p1CtaProcessor:s,p1PhoneStackedCtaProcessor:o,teamSelectorMobileProcessor:r,p1ImageAnchorProcessor:q,pwhAnchorProcessor:e}
})(a.elementText,b.formatText,a.getCtaText,a.buildEVar5));
a.config.extend({"nike-cq-p1-image-anchor":{elementSelector:".nike-cq-p1-layout-anchor",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1ImageAnchorProcessor"}},"nike-cq-p1-play-video":{elementSelector:".nike-cq-p1-layout-container .nike-cq-video-component",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1VideoPlayProcessor"}},"nike-cq-p1-cta-component":{elementSelector:".nike-cq-p1-layout-component .nike-cq-cta a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1CtaProcessor"}},"nike-cq-p1-phone-stacked-cta-component":{elementSelector:".nike-cq-p1-layout-component .nike-cq-cta select",eventName:"toutClickEvent",action:"change","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1PhoneStackedCtaProcessor"}},"nike-cq-hotspots-crosshair":{elementSelector:".nike-cq-p1-layout-container .nike-cq-hotspots a.crosshair",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1HotspotsProcessor"}},"nike-cq-hotspots-cta":{elementSelector:".nike-cq-p1-layout-container .nike-cq-hotspots-link-list a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1HotspotsCtaProcessor"}},"nike-cq-hotspots-invisible":{elementSelector:".nike-cq-p1-layout-container .nike-cq-hotspots a.tracking-invisible-hotspot",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1InvisibleHotspotsProcessor"}},"nike-cq-toggle-component":{elementSelector:".nike-cq-p1-toggle-container .nike-cq-toggle-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"p1 toggle:load:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1ToggleProcessor",followLink:false}},"nike-cq-product-options-option":{elementSelector:".nike-cq-product-options-thumbs a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"P1 auto rotate:color chip selection:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.productOptionsProcessor",followLink:false}},"nike-cq-product-wall-header-link":{elementSelector:".nike-cq-product-wall-header-container a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"product wall header:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.pwhAnchorProcessor",followLink:true}},"nike-cq-team-selector-links":{elementSelector:".nike-cq-team-selector-links a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"teamselector:change team:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor"}},"nike-cq-team-selector-mobile-links":{elementSelector:".nike-cq-team-selector-component select",eventName:"toutClickEvent",action:"change","jcr:primaryType":"nt:unstructured",data:{prop3:"teamselector:change team:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.teamSelectorMobileProcessor",followLink:false}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(e,d,f,h){var g="p2";
function c(j){var l={};
var n=j.el.closest(".nike-cq-p2-touts-wrapper .nike-cq-video-component");
var k=n.find(".video-thumbnail");
var m=k.attr("data-video-url")||"";
var i=m.substring(m.lastIndexOf("/")+1);
l.prop3=g+":video:"+i+":cta";
return l
}return{p2VideoPlayProcessor:c}
})(a.elementText,b.formatText,a.getCtaText,a.buildEVar5));
a.config.extend({"nike-cq-p2-play-video":{elementSelector:".nike-cq-p2-touts-wrapper .nike-cq-video-component",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p2VideoPlayProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(e,g,l,m,c){function n(q){var r={};
if(typeof(q.el)=="undefined"){return r
}var s=q.el.parents(".nike-cq-p2-image-tout-300-container").find("span.nike-cq-subtitle-line-1").text();
if(s==""){s=q.el.parents(".nike-cq-p2-image-tout-300-container").find(".nike-cq-touts-image-resource").attr("alt")
}r.prop3="p2:"+e.formatText(s);
var p=m(q.el.parents(".nike-cq-p2-image-tout-300-container").find("img"),"p2");
if(p){r.eVar5=p
}return r
}function k(p){var q={};
if(typeof(p.el)=="undefined"){return q
}var r=p.el.find("span.nike-cq-subtitle-line-1").text();
if(r!=""){r=e.formatText(r)
}else{r=p.el.find(".video-thumbnail").attr("data-video-id")
}q.prop3="p2:"+r;
return q
}function o(s,r){var t={};
if(typeof(s.el)=="undefined"){return t
}var u=s.el.closest(".slide, .nike-cq-carousel-slide").data("slideIndex");
var p=m(s.el.parents(".nike-cq-portrait-tout-300-container").find("img"),"portrait merch zone");
if(p){t.eVar5=p
}if(r){var q=g(s);
t.prop3="merch zone:"+u+":"+q
}else{var v=s.el.find(".nike-cq-image img").attr("alt");
t.prop3="merch zone:"+u+":"+v+":image"
}return t
}function j(p){return o(p,true)
}function f(p){return o(p,false)
}function i(p){return p.find(".nike-cq-image img")
}function h(t){var u={};
if(typeof(t.el)!=="object"){return u
}var r=false;
var s=t.el.closest(".nike-cq-page-section-copy-block-container");
var v=g(t);
var p="";
if(v!=""){r=true
}else{if(t.el.has("img").attr("alt")){v=t.el.find("img").attr("alt")
}else{if(t.el.has("span").length>0){v=t.el.find("span").text()
}else{if(t.el.attr("href")){p=t.el.attr("href")
}}}}if(v==""){v=t.el.text()
}if(r){v=e.formatTextPreservingGreaterThanChar(v)
}else{v=e.formatText(v)
}if(typeof t.data!=="undefined"&&typeof t.data.prop3!=="undefined"){v=e.replaceValues(t.data.prop3,v)
}if(v!==""){u.prop3=v
}else{u.prop3=p
}var q=c(s,v,"copy block");
if(q){u.eVar5=q
}return u
}function d(r){var s={};
if(typeof(r.el)=="undefined"){return s
}var p=l(r.el);
var q=r.el.closest(".nike-cq-page-menu-sublist-wrapper");
while(q.length>0){p=l(q.siblings("a"))+">"+p;
q=q.siblings("a").closest(".nike-cq-page-menu-sublist-wrapper")
}s.prop3="in page nav:"+p;
return s
}return{p2ImageTout300Processor:n,p2VideoTout300Processor:k,merchZoneToutProcessor:j,merchZoneToutImageProcessor:f,copyBlockProcessor:h,PINProcessor:d}
})(b,a.getDataAttribute,a.elementText,a.buildEVar5,a.buildPageEVar5));
a.config.extend({"nike-cq-copy-block-cta-component":{elementSelector:".nike-cq-copy-block .nike-cq-cta-component a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"copy block:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.copyBlockProcessor"}},"nike-cq-copy-block-anchors":{elementSelector:".nike-cq-copy-block .nike-cq-text-component a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"copy block:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.copyBlockProcessor"}},"nike-cq-merch-menu":{elementSelector:"ul.nike-cq-merch-menu-links a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"merch menu:[elementText]"}},"nike-cq-portrait-merch-zone-carousel":{elementSelector:".nike-cq-portrait-merch-zone-carousel .nike-cq-cta-component a, .nike-cq-portrait-merch-zone-v2 .nike-cq-cta-component a, .nike-cq-portrait-tout-300-container .nike-cq-cta-component a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.merchZoneToutProcessor"}},"nike-cq-portrait-merch-zone-carousel-image":{elementSelector:".nike-cq-portrait-tout-300-container a.slide-anchor",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.merchZoneToutImageProcessor"}},"nike-cq-notification-banner-cta":{elementSelector:".nike-cq-notification-banner-container .nike-cq-cta a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"promo:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor"}},"nike-cq-p2-image-tout-300-container":{elementSelector:".nike-cq-p2-image-tout-300-container a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p2ImageTout300Processor"}},"nike-cq-p2-video-tout-300-container":{elementSelector:".nike-cq-p2-video-tout-300-container",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p2VideoTout300Processor",followLink:false}},"nike-cq-phone-inpage-navigation-links":{elementSelector:".nike-cq-page-menu-link",eventName:"navItemSelectionEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"in page nav:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.PINProcessor",followLink:true}}})
});
nike.cq.require(["nike.cq.PES.Tracking"],function(a){a.extend((function(e,c){function b(l,h){var g="",j=l.closest(".nike-cq-carousel-container").find(".nike-cq-carousel-title-resource .nike-cq-subtitle-line-1").first(),f=l.find(".nike-cq-subtitle:first"),i=null,k=null;
if(f.size()==1){i=c(f)
}if(j.size()==1){g=c(j);
if(i!=null&&i.length>0){g+="-"+i
}}else{if(i!=null&&i.length>0){g=i
}else{k=l.find(".nike-cq-image img").attr("alt");
g=k
}}return g
}function d(g){var h={};
if(typeof(g.el)=="undefined"){return h
}var j=g.el,k=g.el.find(".slick-slide.slick-active"),i=k.data("slideIndex"),f="";
if(g.data.showCreativeText!==false){f=":"+b(k,g)
}h.prop3=g.data.carouselType+":slide change:"+i+f;
return h
}return{carouselSlideChangeProcessor:d}
}(a.getDataAttribute,a.elementText)));
a.config.extend({"nike-cq-portrait-merch-zone-slide-change":{elementSelector:".device-type-desktop .nike-cq-container",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-carousel-portrait-tout-300",delegateAction:"userDrivenSlideChange",data:{carouselType:"merch zone"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.carouselSlideChangeProcessor"}},"nike-cq-notifications-slide-change":{elementSelector:".device-type-desktop .nike-cq-container",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-carousel-notification-banner",delegateAction:"userDrivenSlideChange",data:{carouselType:"promo"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.carouselSlideChangeProcessor"}},"nike-cq-p1-carousel-slide-change":{elementSelector:".device-type-desktop .nike-cq-container",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-carousel-p1-layout",delegateAction:"userDrivenSlideChange",data:{carouselType:"p1 carousel"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.carouselSlideChangeProcessor"}},"nike-cq-fst-carousel-slide-change":{elementSelector:".device-type-desktop .nike-cq-container",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-carousel-full-screen",delegateAction:"userDrivenSlideChange",data:{carouselType:"fst"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.carouselSlideChangeProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(e,c){function d(i){var j={};
if(typeof(i.el)==="undefined"){return j
}var k=i.el.parents(".nike-cq-story-body-teaser-component").data("title");
if(k===""){k=i.el.text()
}j.prop3="story page:"+c(k);
return j
}function g(l){if(typeof l.el==="undefined"){return{}
}var m={},k=function(r){var p="",q=r.find("img");
if(r.data("title").length){p=r.data("title")
}else{if(q.attr("alt").length){return":"+q.attr("alt")
}else{if(q.data("imageName").length){return":"+q.data("imageName")
}}}return p
};
var j=l.el.closest(".nike-cq-story-hero-slideshow-component"),n=j.find(".nike-cq-story-hero-slideshow-select-slide-selected a").data("index"),o=j.find(".nike-cq-story-hero-slideshow-slide-selected:not(.clone)"),i="";
n=n+1;
if(isNaN(n)){n=1
}if(l.data.showCreativeText!==false){i=k(o)
}m.prop3="p1 hero slideshow:slide change:"+n+":"+i;
return m
}function h(m){var n={};
var l=m.el.closest(".nike-cq-story-hero-video");
var i=l.find(".video-thumbnail");
var k=i.attr("data-video-url")||"";
var j=k.substring(k.lastIndexOf("/")+1);
n.prop3="story hero:video:"+j+":cta";
return n
}function f(l){var m={};
var n=l.el.closest(".nike-cq-story-body-video");
var k=n.find(".video-thumbnail");
var i=k.attr("data-video-url")||"";
var j=i.substring(i.lastIndexOf("/")+1);
m.prop3="story body:video:"+j+":cta";
return m
}return{relatedStoryToutProcessor:d,storyHeroVideoPlayProcessor:h,storyBodyVideoPlayProcessor:f,p1StoryCarouselProcessor:g}
})(a.elementText,b.formatText));
a.config.extend({"nike-cq-story-tout":{elementSelector:".nike-cq-story-body-text a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"story page:[elementText]"}},"nike-cq-related-story-tout":{elementSelector:".nike-cq-story-body-teaser a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.relatedStoryToutProcessor"}},"nike-cq-story-body-cta-component":{elementSelector:" .nike-cq-story-sidebar .nike-cq-story-sidebar-cta a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"story page:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor"}},"nike-cq-story-related-product-cta-component":{elementSelector:".nike-cq-story-sidebar .nike-cq-related-product-cta-wrapper .nike-cq-cta-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"story page:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor"}},"nike-cq-story-carousel-navigation":{elementSelector:"body",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-story-hero-slideshow-select-slide-link, .nike-cq-story-hero-slideshow-previous-slide-button, .nike-cq-story-hero-slideshow-next-slide-button",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"p1 hero slideshow:navigation selection:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.p1StoryCarouselProcessor",followLink:false}},"nike-cq-storyHero-play-video":{elementSelector:".nike-cq-story-hero-video",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.storyHeroVideoPlayProcessor"}},"nike-cq-storyBody-play-video":{elementSelector:".nike-cq-story-body-video",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.storyBodyVideoPlayProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking"],function(a){a.extend({leftNavigationToutProcessor:function(b){var c={};
if(typeof(b.el)=="undefined"){return c
}var d=b.el.find("span").text();
c.prop3="left:shop>"+d;
return c
}});
a.config.extend({"nike-cq-left-navigation-links":{elementSelector:".nike-cq-left-navigation-nav-links a, .nike-cq-left-navigation-phone-links-container a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"left:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaProcessor",followLink:true}},"nike-cq-left-navigation-tout-link":{elementSelector:".nike-cq-left-navigation-component-tout a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.leftNavigationToutProcessor",followLink:true}},"nike-cq-left-navigation-component-tout":{elementSelector:".nike-cq-left-navigation-tout a",eventName:"storeNavChangedEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{navItems:"left:tout",clicked:"true"}}})
});
nike.cq.require(["nike.cq.PES.Tracking"],function(a){a.extend({footerLinkProcessor:function(c){var d={};
if(typeof(c.el)=="undefined"){return d
}var b=c.el.text().toLowerCase();
d.prop3="nav:footer:new:"+b;
return d
},footerLinkSocialProcessor:function(c){var d={};
if(typeof(c.el)=="undefined"){return d
}var b=c.el.attr("name").toLowerCase();
d.prop3="nav:footer:new:social:"+b;
return d
},footerLinkGuidesProcessor:function(c){var d={};
if(typeof(c.el)=="undefined"){return d
}var b=c.el.text().toLowerCase();
d.prop3="nav:footer:new:guides:"+b;
return d
}});
a.config.extend({"nike-cq-global-footer-links":{elementSelector:"footer",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-global-footer-title a, .nike-cq-global-footer-link a, .nike-cq-global-footer-locale a, .nike-cq-global-footer-terms-link a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.footerLinkProcessor",followLink:true}},"nike-cq-global-footer-social-links":{elementSelector:"footer",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-global-footer-social-container a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.footerLinkSocialProcessor",followLink:true}},"nike-cq-global-footer-guide-links":{elementSelector:"footer",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-global-footer-guides-menu a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.footerLinkGuidesProcessor",followLink:true}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(e,i,o){var n=e.elementText,c=".nike-cq-subtitle-line-1, h2 .grid-overlay-title1, .nike-cq-content-grid-image-overlay h2:not(.nike-cq-subtitle-headline)";
var g="content grid";
function k(q){if(q.el.hasClass("nike-cq-content-grid-arrow")){return n(q.el.closest(".nike-cq-content-grid-modal-foreground").find(c).eq(0))
}else{return n(q.el.closest(".nike-cq-content-grid-image").find(c).eq(0))
}}function p(q){return q.closest(".nike-cq-content-grid-image").find("img")
}function h(r){if(typeof r.el==="undefined"){return{}
}var s={},q=k(r);
s.prop21=q;
return s
}function d(q){var r={};
if(typeof q.el==="undefined"){return r
}r.prop21=k(q);
return r
}function f(x){var s={};
if(typeof(x.el)=="undefined"){return s
}var w=x.el.find(".link-item-label"),u=x.el.closest(".nike-cq-content-grid-overlay-right"),t=u.find(c).eq(0);
var q=n(w),v=n(t);
s.prop3="content grid:modal:"+v+":"+q;
var r=x.el.closest(".nike-cq-content-grid-overlay-dialog-inner").find("img");
var y=o(r,g);
if(y){s.eVar5=y
}return s
}function j(w){var s={};
if(typeof(w.el)=="undefined"){return s
}var v;
if(w.el.prop("tagName")==="A"){v=w.el.closest(".nike-cq-content-grid-image-hover-overlay.nike-cq-content-grid-image-url")
}else{v=w.el
}var y=v.find(".nike-cq-cta-component"),u=v.find(".nike-cq-content-grid-image-hover-copy-text"),q=n(y),r=n(u);
if(r==""){var t=w.el.closest(".nike-cq-content-grid-image").find("img");
r=t.attr("alt")
}s.prop3="content grid:"+q+":"+r;
var x=o(p(w.el),g);
if(x){s.eVar5=x
}return s
}function m(r){if(typeof r.el==="undefined"){return{}
}var q=r.el;
if(r.el.prop("tagName")!=="A"){q=r.el.find(".nike-cq-content-grid-image-hover-content a")
}var t=n(q),s={};
s.prop3="content grid:"+t;
return s
}function l(t){if(typeof t.el==="undefined"){return{}
}var v=n(t.el.find(".link-item-label")),q=t.el.closest(".grid-slide"),s=i(q.data("modalName")),u={};
u.prop3="content grid:modal:"+s+":"+v;
var r=o(p(t.el),g);
if(r){u.eVar5=r
}return u
}return{contentGridOverlayProcessor:h,contentGridOverlayArrowProcessor:d,contentGridHoverCtaProcessor:j,contentGridOverlayCtaProcessor:f,contentGridCtaTextProcessor:m,contentGridOverlayCtaPhoneProcessor:l}
}(a,b.formatText,a.buildEVar5)));
a.config.extend({"nike-cq-content-grid-cta-component":{elementSelector:".nike-cq-grid-lookbook-cta-wrapper a, .nike-cq-misc-content-grid-reference-component .nike-cq-container a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"content grid:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaTextProcessor",followLink:true}},"nike-cq-content-grid-image-hover-cta":{elementSelector:".nike-cq-content-grid-image-overlay, .device-type-phone .nike-cq-content-grid-image:not(.nike-cq-looks-grid-image)",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"content grid:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridCtaTextProcessor",followLink:true}},"nike-cq-content-grid-image-overlay-page-event":{elementSelector:".nike-cq-content-grid-image-overlay, .device-type-phone .nike-cq-content-grid-image:not(.nike-cq-looks-grid-image)",eventName:"modalPageEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridOverlayProcessor",followLink:false}},"nike-cq-content-grid-image-overlay-arrow-event":{elementSelector:".nike-cq-content-grid-arrow",eventName:"modalPageEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridOverlayArrowProcessor",followLink:false}},"nike-cq-content-grid-image-url":{elementSelector:".nike-cq-content-grid-image-url a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridHoverCtaProcessor",followLink:true}},"nike-cq-content-grid-overlay-cta":{elementSelector:".nike-cq-content-grid-modal-dialog",eventName:"cqModalPageActivity",action:"delegate",delegate:".nike-cq-content-grid-overlay-right a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"content grid:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridOverlayCtaProcessor",followLink:true}},"nike-cq-content-grid-overlay-cta-phone":{elementSelector:".device-type-phone .nike-cq-content-grid-container",eventName:"cqModalPageActivity",action:"delegate",delegate:".nike-cq-content-grid-carousel a",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"content grid:modal:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.contentGridOverlayCtaPhoneProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(f,h,n){var d=".nike-cq-subtitle-line-1, h2 .grid-overlay-title1, .nike-cq-looks-grid-image-overlay h2:not(.nike-cq-subtitle-headline)";
var g="looks grid";
function k(q){return q.text().replace(/\s+/g," ").trim()
}function l(r){var t=r.parents(".nike-cq-content-grid-inner:first, .nike-cq-content-grid-carousel-list:first");
var s=".nike-cq-grid-cell, .grid-slide:not(.clone)";
var q=r.parents(s+":first");
return t.find(s).index(q)+1
}function j(s){var q=l(s);
var r=s.parents(".nike-cq-looks-grid:first").find(".nike-cq-grid-cell").eq(q-1);
var t=r.find(".nike-cq-looks-grid-image-content .nike-cq-subtitle-line-1").text().replace(/\s+/g," ").trim();
return t!==""?t:e(s)
}function e(q){return q.closest(".nike-cq-looks-grid-image, .overlay-scroller-inner").find("img").attr("alt")
}function m(r){var q="";
q=r.hasClass("nike-cq-sharelinks-item-facebook")?"facebook":q;
q=r.hasClass("nike-cq-sharelinks-item-twitter")?"twitter":q;
q=r.hasClass("nike-cq-sharelinks-item-pinterest")?"pinterest":q;
q=r.hasClass("nike-cq-sharelinks-item-sinaweibo")?"sina_weibo":q;
q=r.hasClass("nike-cq-sharelinks-item-tencentweibo")?"tencent_weibo":q;
q=r.hasClass("nike-cq-sharelinks-item-qzone")?"qzone":q;
return q
}function p(r){var s=r.closest(".nike-cq-looks-grid-image").find("img");
var q=r.closest(".overlay-scroller").find("img");
if(!s.length){s=q
}return s
}function o(t){if(typeof t.el==="undefined"){return{}
}var q=t.el;
if(t.el.prop("tagName")!=="A"){q=t.el.find(".nike-cq-looks-grid-image-content .nike-cq-cta-component a")
}var w=k(q);
var s=l(q);
var v=j(q);
var u={};
u.prop3="looks grid:"+s+":"+w+":"+v;
var r=n(p(t.el),g);
if(r){u.eVar5=r
}return u
}function i(t){if(typeof t.el==="undefined"){return{}
}var q=t.el.closest(".nike-cq-looks-grid-image-overlay, .nike-cq-looks-grid-image-phone-overlay").find(".nike-cq-cta-component a");
var w=k(q);
var s=l(q);
var v=j(q);
var u={};
u.prop3="looks grid:hover:"+s+":"+w+":"+v;
var r=n(p(t.el),g);
if(r){u.eVar5=r
}return u
}function c(t){if(typeof t.el==="undefined"){return{}
}var u={},r=m(t.el),q=l(t.el),s=e(t.el);
u.shareType=r;
u.interactionType="share:looks grid";
u.prop3=g+":"+q+":"+r+":share:"+s;
return u
}return{looksGridCtaProcessor:o,looksGridCtaOverlayProcessor:i,looksGridShareLinkProcessor:c}
}(b,b.formatText,a.buildEVar5)));
a.config.extend({"nike-cq-looks-grid-cta-component":{elementSelector:".nike-cq-looks-grid-image-content .nike-cq-looks-grid-cta-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.looksGridCtaProcessor",followLink:true}},"nike-cq-looks-grid-image-hover-cta":{elementSelector:".nike-cq-looks-grid-image-overlay .nike-cq-looks-grid-cta-component a, .nike-cq-looks-grid-cta-block-link",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.looksGridCtaOverlayProcessor",followLink:true}},"nike-cq-looks-grid-share-link":{elementSelector:".nike-cq-sharelinks-item",eventName:"shareOptionClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.looksGridShareLinkProcessor",followLink:true}}})
});
nike.cq.require(["jquery","nike.cq.PES.Tracking","nike.cq.Tracking"],function(b,a,c){a.extend((function(k,A,B,g,i,w){function t(O){var I={},R="fst";
var K=O.el;
var L=K.attr("data-tracking");
var H=K.closest(".nike-cq-block-component-wrap");
var J=H.attr("data-row-position");
var N=H.attr("data-column-position");
J++;
N++;
var M=H.closest(".nike-cq-fst-component");
var F=e(M);
if(M.hasClass("nike-cq-fst-with-video")){R+=":video"
}var E=M.closest(".indexed-pes-reference");
if(E.length>0){var Q=E.attr("data-pes-reference-index");
I.prop3=R+":"+Q+":"+F+":row"+J+"col"+N+":"+L
}else{var G=M.closest(".nike-cq-carousel-slide");
if(G.length===0){I.prop3=R+":"+F+":row"+J+"col"+N+":"+L
}else{var Q=G.attr("data-slide-index");
I.prop3=R+":"+Q+":"+F+":row"+J+"col"+N+":"+L
}}var P=w(u(M),"fst");
if(P){I.eVar5=P
}return I
}function e(I){var H="";
if(I.hasClass("nike-cq-fst-with-video")){var G=I.find(".nike-cq-fst-background-video .nike-cq-fst-video-bg-component");
var F=G.attr("data-video-url")||"";
H=F?F.substring(F.lastIndexOf("/")+1):I.find(".nike-cq-fst-background-image img").attr("alt")
}else{var E=I.find(".nike-cq-fst-background-image img");
H=E.attr("alt")
}return H
}function u(E){return E.find(".nike-cq-fst-background-image img")
}function C(G){var H={};
var F=i(G.el);
var I=G.el.closest(".nike-cq-fst-component");
var K=u(I);
var J=K.attr("alt");
H.prop3="fst:label:"+J+":"+F;
var E=w(K,"fst");
if(E){H.eVar5=E
}return H
}function o(F){var G={};
if(typeof(F.el)=="undefined"){return G
}var E=x(F);
G.prop3="fst:label:"+E;
return G
}function j(M){if(typeof M.el==="undefined"){return{}
}var F=M.el.closest(".nike-cq-full-screen-container"),E=M.el.closest(".hotspot"),J=M.el.hasClass("active"),I=J?"close":"open",H="fst",L=r(E),K=D(E),G=q(E);
if(I!=="open"){return{}
}return{prop3:H+":"+I+":"+L+":"+K+":"+g(G)}
}function n(M){if(typeof M.el==="undefined"){return{}
}var F=M.el.closest(".nike-cq-full-screen-container"),E=M.el.closest(".hotspot"),I="fst",G=B(M.el),L=r(M.el),J=D(E),H=(q(E)||m(E));
var K={};
K.prop3=I+":cta:"+g(G)+":"+L+":"+J+":"+g(H);
var N=w(u(F),"fst");
if(N){K.eVar5=N
}return K
}function s(L){if(typeof L.el==="undefined"){return{}
}var F=L.el.closest(".nike-cq-full-screen-container"),E=L.el.closest(".hotspot"),H="fst",K=r(E),I=D(E),G=(q(E)||m(E));
var J={};
J.prop3=H+":click:"+K+":"+I+":"+g(G);
var M=w(u(F),"fst");
if(M){J.eVar5=M
}return J
}function v(L){if(typeof L.el==="undefined"){return{}
}var F=L.el.closest(".nike-cq-full-screen-container"),E=L.el.closest(".hotspot"),H="fst",K=r(E),I=D(E),G=(q(E)||m(E));
var J={};
J.prop3=H+":click:"+K+":"+I+":"+g(G);
var M=w(u(F),"fst");
if(M){J.eVar5=M
}return J
}function p(G){var H={};
if(typeof G.el==="undefined"){return H
}var E=b(G.el).parent().data("id"),I=b(G.el).closest(".nike-cq-tout-toggle-container").find("[data-pes-reference-index="+E+"]"),F=f(I);
H.prop3="fst:slide change:"+E+":"+F;
return H
}function l(G){if(typeof G.el==="undefined"){return{}
}if(G.el[0]&&!b(G.el[0]).hasClass("paused")){return{events:"event55"}
}var F=b(G.el).closest(".nike-cq-fst-background-video");
var E=y(F);
return{prop18:"fst:"+E,eVar47:"fst:"+E,events:"event55"}
}function d(M){if(typeof M.el==="undefined"){return{}
}var O=M.el.siblings("a").data("tracking");
var K,J,P;
J=M.el.closest(".nike-cq-carousel-slide");
var F=M.el.data("tracking-target-index");
if(!F){return{}
}var I=M.el.closest(".nike-cq-fst"),L=I.find(".nike-cq-fst-background-video"),H=M.el.children().eq(F),E=H.text().trim(),G={};
M.el.data("tracking-target-index",undefined);
if(H.attr("value")==="#"){return{}
}if(J.length>0){K=J.attr("data-slide-index");
P=J.find(".nike-cq-image img").attr("alt");
G.prop3="fst:"+K+":"+P+":"+O+">"+E
}else{if(L.length>0){G.prop3="fst:video:"+O+">"+E
}else{G.prop3="fst:"+O+">"+E
}}var N=w(u(I),"fst");
if(N){G.eVar5=N
}return G
}function h(L){var G={};
if(typeof L.el==="undefined"){return G
}var J=L.el.closest(".nike-cq-fst-component"),H=J.find(".nike-cq-fst-background-video").length>0,E="fst:"+(H?"video:":""),F=J.closest(".nike-cq-carousel-slide"),K=F.length>0?F.attr("data-slide-index")+":":"",I=u(J).attr("alt");
G.prop3=E+K+I+":image";
var M=w(u(J),"fst");
if(M){G.eVar5=M
}return G
}function y(E){var G=E.find("source");
if(G&&G[0]){var F=G[0].src;
return F.substring(F.lastIndexOf("/")+1)
}return""
}function x(E){var F,H,G;
H=E.el.closest(".nike-cq-carousel-slide");
if(H.length>0){F=H.attr("data-slide-index");
G=f(H)
}return F+":"+G+":"+i(E.el)
}function f(F){var L=B(F.find(".nike-cq-block-title")),H=B(F.find(".nike-cq-block-subtitle")),J=F.find(".nike-cq-image-component"),E=J.attr("alt"),K=J.attr("src"),I;
if(L.length){var G=[L];
if(H.length){G.push(H)
}I=G.join("-")
}else{if(H.length){I=H
}else{if(E){I=E
}else{I=K
}}}return I
}function z(G){var H={};
var I=G.el.closest(".nike-cq-block-cta .nike-cq-video-component");
var F=I.find(".video-thumbnail");
var J=F.attr("data-video-url")||"";
var E=J.substring(J.lastIndexOf("/")+1);
H.prop3="fst:video:"+E+":cta";
return H
}function r(F){var E=b(F).closest(".hotspot-system").data("hotspot-type").replace("hotspot-type-","");
if(E=="crosshair"){E="benefit"
}else{if(E=="invisible"){E="hidden"
}}return E+" hotspot"
}function m(E){return E.data("hotspot-link-0-url")
}function D(F){var E=b(F).attr("id").replace("hotspot","");
return parseInt(E)+1
}function q(E){return b(E).data("hotspot-title")||[b(E).data("hotspot-title1"),b(E).data("hotspot-title2")].join(" ").trim()||b(E).find(".nike-cq-hotspots-title").text()
}return{fstCTAProcessor:t,fstLabelProcessor:C,fstCarouselImageLabelProcessor:o,fstHotspotsProcessor:j,fstHotspotsCtaProcessor:n,fstInvisibleHotspotsProcessor:s,fstShopHotspotsProcessor:v,fstToggleProcessor:p,fstVideoPlayControlProcessor:l,fstAnchorProcessor:h,fstVideoPlayProcessor:z,fstPhoneStackedCtaProcessor:d}
}(c,a.getDataAttribute,a.elementText,c.formatText,a.getCtaText,a.buildEVar5)));
a.config.extend({"nike-cq-fst-cta":{elementSelector:".nike-cq-block-cta a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstCTAProcessor",followLink:true}},"nike-cq-fst-label-link-component":{elementSelector:".nike-cq-fst-reference .nike-cq-labels-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstLabelProcessor",followLink:true}},"nike-cq-fst-carousel-image-label":{elementSelector:".nike-cq-fst-image-carousel-reference .nike-cq-labels-label a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstCarouselImageLabelProcessor",followLink:true}},"nike-cq-fst-hotspots-crosshair":{elementSelector:".nike-cq-full-screen-container .nike-cq-hotspots a.tracking-crosshair-hotspot",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstHotspotsProcessor"}},"nike-cq-fst-hotspots-cta":{elementSelector:".nike-cq-full-screen-container .nike-cq-hotspots-link-list a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstHotspotsCtaProcessor"}},"nike-cq-fst-hotspots-invisible":{elementSelector:".nike-cq-full-screen-container .nike-cq-hotspots a.tracking-invisible-hotspot",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstInvisibleHotspotsProcessor"}},"nike-cq-fst-hotspots-shop":{elementSelector:".nike-cq-full-screen-container .nike-cq-hotspots a.tracking-shop-hotspot",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstShopHotspotsProcessor"}},"nike-cq-fst-toggle":{elementSelector:".nike-cq-fst-toggle-container .nike-cq-toggle-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstToggleProcessor",followLink:false}},"nike-cq-fst-cta-play-video":{elementSelector:".nike-cq-block-cta .nike-cq-video-component",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstVideoPlayProcessor"}},"nike-cq-fst-video-play-video-control":{elementSelector:".nike-cq-fst .nike-cq-fst-background-video a.nike-cq-fst-video-play-pause-button.paused",eventName:"fstVideoClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstVideoPlayControlProcessor"}},"nike-cq-fst-anchor":{elementSelector:".nike-cq-fst-anchor",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.fstAnchorProcessor"}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(d,e,j,k){var g="editorial grid";
function i(l){return l.closest(".nike-cq-editorial-block").find(".nike-cq-image img")
}function h(r){var s={};
if(typeof(r.el)=="undefined"){return s
}var p,m,l;
p=r.el.closest(".nike-cq-editorial-grid-grid li");
if(p.length>0){l=f(p);
var q=p.find(".nike-cq-subtitle-line-1");
m=j(q)
}var o=r.el.data("imageLinkText");
s.prop3=g+":"+l+":"+m+":image:"+o;
var n=k(i(r.el),g);
if(n){s.eVar5=n
}return s
}function f(m){var l=-1;
if(m.length>0){var n=m.parent().children();
l=n.index(m);
l=l>=0?l+1:l
}return l
}function c(r){var s={};
if(typeof(r.el)=="undefined"){return s
}var o,m,l;
o=r.el.closest(".nike-cq-editorial-grid-grid li");
if(o.length>0){l=f(o);
var p=o.find(".nike-cq-subtitle-line-1");
m=j(p)
}var q=j(r.el);
s.prop3=g+":"+l+":"+m+":"+q;
var n=k(i(r.el),g);
if(n){s.eVar5=n
}return s
}return{editorialGridImageProcessor:h,editorialGridCtaProcessor:c}
}(b,a.getDataAttribute,a.elementText,a.buildEVar5)));
a.config.extend({"nike-cq-editorial-grid-image":{elementSelector:".nike-cq-editorial-block-container>a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.editorialGridImageProcessor",followLink:true}},"nike-cq-editorial-grid-hyperlink":{elementSelector:".nike-cq-editorial-block .nike-cq-text-link a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.editorialGridCtaProcessor",followLink:true}},"nike-cq-editorial-grid-cta":{elementSelector:".nike-cq-editorial-grid .nike-cq-cta-component a",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.editorialGridCtaProcessor",followLink:true}}})
});
nike.cq.require(["nike.cq.PES.Tracking","nike.cq.Tracking"],function(a,b){a.extend((function(f,e){function d(j){var k={};
var l=j.el.closest(".nike-cq-product-launch-hero-video");
var h=l.find(".video-thumbnail");
var i=h.attr("data-video-url")||"";
var g=i.substring(i.lastIndexOf("/")+1);
k.prop3="launch hero:video:"+g+":cta";
return k
}function c(i){var j={};
var g=i.el.closest(".nike-cq-product-launch-body-video");
var k=g.find(".video-thumbnail");
var l=k.attr("data-video-url")||"";
var h=l.substring(l.lastIndexOf("/")+1);
j.prop3="launch body:video:"+h+":cta";
return j
}return{productLaunchRelatedCardProduct:function(h){if(typeof h.el==="undefined"){return{}
}var g=e(h.el.find(".nike-cq-product-launch-body-sidebar-related-card-title"));
return{prop3:f.replaceValues(h.data.prop3,g)}
},productLaunchHeroSlideshowChange:function(j){if(typeof j.el==="undefined"){return{}
}var k={},i=function(p){var n="",o=p.find("img");
if(o.attr("alt").length){return":"+o.attr("alt")
}else{if(o.data("imageName").length){return":"+o.data("imageName")
}}return n
};
if(typeof(j.el)=="undefined"){return k
}var h=j.el.closest(".nike-cq-product-launch-hero-slideshow-component"),l=h.data("current-slide-index"),m=h.find(".nike-cq-product-launch-hero-slideshow-slide-"+l+":not(.clone)"),g="";
if(j.data.showCreativeText!==false){g=i(m)
}k.prop3=f.replaceValues(j.data.prop3,l)+g;
return k
},launchHeroVideoPlayProcessor:d,launchBodyVideoPlayProcessor:c}
}(b,a.elementText)));
a.config.extend({"nike-cq-product-launch-faq-link":{elementSelector:".nike-cq-product-launch-body-sidebar-links-faq a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"launch calendar:faq:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaTextProcessor",followLink:true}},"nike-cq-product-launch-back-to-launch-link":{elementSelector:".product-launch-calendar-link a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"launch calendar:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaTextProcessor",followLink:true}},"nike-cq-product-launch-related-card-link":{elementSelector:".nike-cq-product-launch-body-sidebar-related-card a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"launch calendar:you may also like:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.productLaunchRelatedCardProduct",followLink:true}},"nike-cq-product-launch-tagcloud-link":{elementSelector:".nike-cq-product-launch-body-sidebar-tagcloud a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"launch calendar:tag selection:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.ctaTextProcessor",followLink:true}},"nike-cq-product-launch-hero-slideshow-navigation":{elementSelector:"body",eventName:"cqPageActivity",action:"delegate",delegate:".nike-cq-product-launch-hero-slideshow-component button, .nike-cq-product-launch-hero-slideshow-select-slide-link",delegateAction:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"p1 hero slideshow:slide change:[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.productLaunchHeroSlideshowChange",followLink:false}},"nike-cq-launchHero-play-video":{elementSelector:".nike-cq-product-launch-hero-video",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.launchHeroVideoPlayProcessor"}},"nike-cq-launchBody-play-video":{elementSelector:".nike-cq-product-launch-body-video",eventName:"toutClickEvent",action:"click","jcr:primaryType":"nt:unstructured",data:{},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.launchBodyVideoPlayProcessor"}}})
});
nike.cq.require(["jquery","nike.cq.PES.Tracking","nike.cq.Tracking"],function(b,a,c){a.extend((function(h,g,e,f){var i="active page title";
function d(m){var n={};
if(typeof(m.el)!=="object"){return n
}var p=g(m);
if(p!=""){p=h.formatTextPreservingGreaterThanChar(p)
}if(typeof m.data!=="undefined"&&typeof m.data.prop3!=="undefined"){p=h.replaceValues(m.data.prop3,p)
}if(p!==""){if(m.el.closest(".nike-cq-launch-story-page").length){if(m.el.closest(".nike-cq-apt-wrapper").length||m.el.closest(".nike-cq-active-page-title-wrapper").length){p="launch calendar:"+i+":"+p
}else{p="launch calendar:"+p
}}else{p=i+":"+p
}n.prop3=p
}var l=m.el.closest(".nike-cq-apt-component");
var o=l.find(".nike-cq-title-component h1");
if(!o.length){l=m.el.closest(".nike-cq-active-page-title-wrapper");
o=l.find(".nike-cq-active-page-title-title-component span")
}var j=e(o);
var k=f(l,j,i);
if(k){n.eVar5=k
}return n
}return{aptCTAProcessor:d}
})(c,a.getDataAttribute,a.elementText,a.buildPageEVar5));
a.config.extend({"nike-cq-active-page-title-cta-component":{elementSelector:".nike-cq-active-page-title-cta .nike-cq-cta-component a, .nike-cq-apt-module .nike-cq-cta-component a, .nike-cq-product-launch-body .nike-cq-cta a",eventName:"cqPageActivity",action:"click","jcr:primaryType":"nt:unstructured",data:{prop3:"[elementText]"},dataConfig:{eventProcessor:"nike.cq.PES.Tracking.aptCTAProcessor",followLink:true}}})
});
nike.cq.require(["jquery","nike.cq.Tracking","nike.cq.PES.Tracking"],function(b,c,a){b(function(){c.init(a)
})
});