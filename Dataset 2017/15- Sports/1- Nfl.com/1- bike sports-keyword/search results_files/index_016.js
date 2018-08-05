YUI.add('overthrow-shadows',function(Y){var globalEnv=YUI.namespace('Env.OverthrowShadow');Y.OverthrowShadows=Y.Base.create("overthrow-shadows",Y.Base,[],{initializer:function(){this._setOverthrow();},_setOverthrow:function(){if(this.ELEMS){this.ELEMS.each(function(elem){elem.detach();});this.ELEMS=null;}
this.ELEMS=Y.all('.overthrow');this.ELEMS.each(function(elem){this._checkBoundaries({currentTarget:elem});elem.on('scroll',this._checkBoundaries);elem.on('touchmove',this._checkBoundaries);elem.on('resize',this._checkBoundaries);elem.on('orientationchange',this._checkBoundaries);elem.on('MSPointerMove',this._checkBoundaries);},this);},syncUI:function(){this._setOverthrow();},_checkBoundaries:function(e){var el=e.currentTarget,elem=el._node,scrollWidth=parseInt(elem.scrollWidth,10),scrollLeft=parseInt(elem.scrollLeft,10),offsetWidth=parseInt(elem.offsetWidth,10),offsetLeft=parseInt(elem.offsetLeft,10);if(!el.ancestor()){return false;}
if((scrollLeft+offsetWidth)>(scrollWidth-10)){el.removeClass('overthrow-shadows-right');el.ancestor().removeClass('overthrow-shadows-right');}else{if(!el.hasClass('overthrow-shadows-right')){el.addClass('overthrow-shadows-right');el.ancestor().addClass('overthrow-shadows-right');}}
if(scrollLeft<10){el.removeClass('overthrow-shadows-left');el.ancestor().removeClass('overthrow-shadows-left');}else{if(!el.hasClass('ovethrow-shadows-left')){el.addClass('overthrow-shadows-left');el.ancestor().addClass('overthrow-shadows-left');}}}},{});},'3.9.1',{requires:["base","event","event-touch","node"]});;YUI.add('patch-3141-datatype-xml-parse',function(Y,NAME){Y.mix(Y.namespace("XML"),{parse:function(data){var xmlDoc=null,win;if(typeof data==="string"){win=Y.config.win;if(win.ActiveXObject!==undefined){xmlDoc=new ActiveXObject("Microsoft.XMLDOM");xmlDoc.async=false;xmlDoc.loadXML(data);}else if(win.DOMParser!==undefined){xmlDoc=new DOMParser().parseFromString(data,"text/xml");}else if(win.Windows!==undefined){xmlDoc=new Windows.Data.Xml.Dom.XmlDocument();xmlDoc.loadXml(data);}}
if(xmlDoc===null||xmlDoc.documentElement===null||xmlDoc.documentElement.nodeName==="parsererror"){}
return xmlDoc;}});Y.namespace("Parsers").xml=Y.XML.parse;Y.namespace("DataType");Y.DataType.XML=Y.XML;},'3.14.2');;YUI.add('datasource-randomize',function(Y){function Randomizable(){this._callback={};}
Randomizable.prototype={}
Randomizable.prototype._osetInterval=Y.DataSource.Local.prototype.setInterval;Randomizable.prototype.setInterval=function(msec,callback){if(typeof callback!=='undefined'){this._callback=callback;}
var fn=Y.bind(function(){var _s=this.get('source');if(_s.indexOf('?')>-1&&_s.indexOf('random=')>-1){var _sp=_s.indexOf('random='),_ep=_s.length;if(_s.substring(_sp).indexOf('&')>-1||_s.substring(_sp).indexOf('&amp;')>-1){_ep=((_s.substring(_sp).indexOf('&amp;')>-1)?(_s.substring(_sp).indexOf('&amp;')+_sp):(_s.substring(_sp).indexOf('&')+_sp))}
_ep=(_s.substring(0,_sp).lastIndexOf('&')==_s.substring(0,_sp).length-1&&_s.substring(_ep).indexOf('&')===0)?_ep+1:_ep;this.set('source',(_s.substring(0,_sp)+_s.substring(_ep)+(((_s.substring(0,_sp)+_s.substring(_ep)).lastIndexOf('&')===(_s.substring(0,_sp)+_s.substring(_ep)).length-1)||(_s.substring(0,_sp)+_s.substring(_ep)).length==0?'':'&')));}
var _cr=(_s.indexOf('?')<0)?'?':'';_cr+=('random='+(new Date().getTime()));this._callback.request=_cr;},this);this.on('response',fn);fn();return this._osetInterval(msec,this._callback);};Y.augment(Y.DataSource.Local,Randomizable,true);},"3.1.1",{requires:['oop','datasource','datasource-local','datasource-polling']});;YUI.add("scorestrip-iframe",function(Y){"use strict";Y.ScoreStrip=Y.Base.create("scorestrip-iframe",Y.Widget,[],{CONTENT_TEMPLATE:"<iframe frameborder=\"0\"></iframe>",initializer:function(){Y.Object.each(Y.ScoreStripEngine,function(event){this.publish(event,{emitFacade:true,broadcast:2});},this);},_onScroll:function(){var bbx=this.get("boundingBox"),winY=bbx.get("docScrollY");if(this._fixed&&winY<=this._bbxy){this._fixed=false;bbx.removeClass(this._fixedClass);if(Y.UA.ie){bbx.ancestors("div",false).setStyle({position:null,zIndex:null});}}else if(!this._fixed&&winY>this._bbxy){this._fixed=true;bbx.addClass(this._fixedClass);if(Y.UA.ie){bbx.ancestors("div",false).setStyle({position:"relative",zIndex:999});}}},_getScrollbarSize:function(){var scrollDiv=Y.config.doc.createElement("div"),scrollbarWidth;scrollDiv.className="yui3-scorestrip-iframe-scrollbar-measure";Y.config.doc.body.appendChild(scrollDiv);scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;Y.config.doc.body.removeChild(scrollDiv);return scrollbarWidth;},_onBreakpointChange:function(e){var height=this._contentHeight,scrollbarSize=this._scrollbarSize;if("base"===e.newVal){if(!scrollbarSize){scrollbarSize=this._scrollbarSize=this._getScrollbarSize()||0;}
height+=scrollbarSize;}
if(height>0){this.get("contentBox").setAttribute("style","height: "+height+"px !important");}},bindUI:function(){this._scrollHandler=Y.on("scroll",this._onScroll,Y.config.win,this);Y.config.win._nflFireSSEvent=Y.bind("fire",this);this._isResponsive=this.get("boundingBox").ancestor('.responsive')!=null;var shouldCheckBreakpoint=this._isResponsive&&!nfl.constants.IS_MOBILE&&!nfl.constants.SS_CONF.responsive;if(shouldCheckBreakpoint){this._layout=Y.namespace("NFL").getLayout();}
if(this._layout){this._bpHandler=this._layout.after("breakpointChange",this._onBreakpointChange,this);}},syncUI:function(){var bbx=this.get("boundingBox"),qs=window.location.search,cb=this.get("contentBox");if(this._isResponsive){qs+=(qs.indexOf('?')!=-1?'&':'?')+'responsive=true';}
bbx.toggleClass(this.getClassName('mobile'),nfl.constants.IS_MOBILE);cb.set("src",nfl.constants.SITE_URL+"/partner/scorestrip"+qs);this._fixed=false;this._bbxy=bbx.getY();this._fixedClass=this.getClassName("fixed");if(this._layout){this._contentHeight=cb.get("offsetHeight");this._onBreakpointChange({type:"initial load",newVal:this._layout.get("breakpoint")});}
this._onScroll();},destructor:function(){if(this.get("rendered")){this._scrollHandler.detach();this._scrollHandler=null;this._bpHandler&&this._bpHandler.detach();this._bpHandler=null;this.get("contentBox").remove();delete Y.config.win._nflFireSSEvent;}}});Y.ScoreStripEngine={GC_VIDEO_ADDED:"gamecenter:video:added",UPDATE:"scorestrip-engine:update"};},"3.3.0",{requires:["base-build","widget-base","node-screen","event-base","nfl-layout"],skinnable:true,group:"nfl"});