var i,scriptStatus;for(pswtb.responsiveContainer={containerTypes:{Embedded:0,Lightbox:1,Accordion:2,Redirect:3,FullScreenOverlay:4},show:function(n,t){var i=pswtb.core,e=pswtb.responsiveContainer,o=n.displayOptions.layout?n.displayOptions.layout.toLowerCase():"default",s=n.layouts.length,r,u,f;if(o&&s>1)for(r=0;r<s;r++)if(u=n.layouts[r],u.Layout.toLowerCase()===o&&!u.Visible)if(n.debugKey)n.debugHidden=!0,n.nonFatalError="NoSellersFoundException";else{f={instanceGuid:n.instanceGuid,sku:n.sku,error:"NoSellersFoundException",cancelShow:!0};i.onEvent(i.eventType.CancelShow,n.instanceGuid,f);if(f.cancelShow){i.remove(n.parentLoadingSplashPanel);return}}if(!t)i.onEvent(i.eventType.Show,n.instanceGuid,{instanceGuid:n.instanceGuid,sku:n.sku,productId:n.productId});if(i.continueOnStylesheetLoaded(n,e.show)){i.removeParentSplash(n);e.reInit(n);n.fromCache&&i.logImpression(n);i.onEvent(i.eventType.AfterShow,n.instanceGuid,{instanceGuid:n.instanceGuid,sku:n.sku,productId:n.productId})}},loadContentWidgetScript:function(n,t,i){var r=document._ps_EmbeddedServicesUrl+"WidgetScript.psjs?d=true&wc="+n;pswtb.core.loadJavaScript(r,t,i)},reInit:function(n){var t=pswtb.core,u=pswtb.responsiveContainer,k=n.labels,s,v=n.displayOptions.layout?n.displayOptions.layout.toLowerCase():null,d,g,i,nt,f,r,c,l,e,a,p,h,w,b,y,tt,o;if(v)for(f=0;f<n.layouts.length;f++)if(v&&n.layouts[f].Layout.toLowerCase()===v){s=v;break}if(!s&&document._ps_supportsMediaQ)for(f=0;f<n.layouts.length;f++)if(d=n.layouts[f].MediaQueryTrigger,g=d?window.matchMedia(d):null,g&&g.matches){s=n.layouts[f].Layout.toLowerCase();break}for(s||(s="default"),nt=n.layouts?n.layouts.length:0,f=0;f<nt;f++)if(n.layouts[f].Layout.toLowerCase()===s){i=n.layouts[f];break}if(r=n.content,r)if(r.layout.Layout!==i.Layout)u.overlayInstanceGuid===n.instanceGuid&&(c=!0,l=!0),t.remove(r.button),u.close(n.instanceGuid,!0);else return!1;else c=t.checkForCommand(n,"open",!0);r=n.content={layout:i};e=n.displayOptions;a=e.lightboxButtonText?e.lightboxButtonText:n.labels.wtbButtonText;i.ContainerType===u.containerTypes.Redirect&&i.RedirectUrlFormats&&(y=location.href,p=[],i.RedirectUrlFormat&&(i.RedirectUrlFormats=[{urlMatch:"*",urlFormat:i.RedirectUrlFormat}]),t.foreach(i.RedirectUrlFormats,function(n,t){p.push(t);t.urlFormat.match(/\{productGroup\}/i)&&t.urlFormat.match(/\{sku\}/i)&&p.push({urlMatch:t.urlMatch,urlFormat:t.urlFormat.replace(/[\?\&][^=\&#]+=\{sku\}/i,"")})}),t.foreach(p,function(r,f){var b=u.getUrlMatchRegex(f.urlMatch),c=f.urlFormat,w,o;if(y.match(b)){var k=t.format(c,{host:"",sku:"([^&/]+)",productGroup:"([^&/]+)"}).replace(/\?/i,"\\?.*"),d=new RegExp(k,"i"),l=d.exec(location.href);if(l){i.ContainerType=0;var s=c.match(/\[sku\]|\{sku\}/i),h=c.match(/\[productGroup\]|\{productGroup\}/i),a=s?!h||s.index<h.index?1:2:0,v=h?!s||h.index<s.index?1:2:0,e=a?decodeURIComponent(l[a]):null,p=v?decodeURIComponent(l[v]):null;return e&&(w=e.substr(0,2),w.toLowerCase()!=n.country.toLowerCase()&&(e=n.country+e.substr(2)),n.sku=e),p&&(o=p.split(","),t.foreach(o,function(t,i){if(pswtb.country.getCountryId(i))i.toLowerCase()!=n.country.toLowerCase()&&(o[t]=n.country);else{var r=i.match(/([a-z]{2}) /i);r&&pswtb.country.getCountryId(r[1])&&r[1].toLowerCase()!=n.country.toLowerCase()&&(o[t]=n.country+i.substr(2))}}),n.tags=n.productGroup=n.displayOptions.productGroup=pswtb.core.joinProductGroups(o)),!0}}}));h={href:"javascript:;"};k.wtbButtonHint&&(h.title=k.wtbButtonHint);switch(i.ContainerType){case u.containerTypes.Embedded:r.wrapper=pswtb.core.append(n.container,"div",pswtb.core.getClassAttrList(n,["responsiveContainerStyle","embeddedStyle","wrapperStyle",s+"LayoutStyle",n.country&&n.country!="UNKNOWN"?"country"+n.country:null,n.language&&n.language!="UNKNOWN"?"language"+n.language:null,t.isIE(6,9)?"IE":null,n.widgetConfigurationId.toLowerCase()]),t.getHtml("div",t.getClassAttrList(n,"headerStyle"),null,k.headerText)+t.getHtml("div",t.getClassAttrList(n,"containerStyle"),null,t.getLoadingPanelHTML(n)));w=t.generateFooter(n);n.footer=w;u.loadContentWidgetScript(i.ContentWidgetConfigurationId,function(n){var i=n.content;i.instanceGuid=t.render(t.getContentOptions(n,i.wrapper.children[1],i.layout.ContentWidgetConfigurationId,i.wrapper.children[1].children[0]))},n);pswtb.country.initSelector(n,r.wrapper.children[0]);w&&r.wrapper.appendChild(w);break;case u.containerTypes.Accordion:o=e.lightboxButtonClass?e.lightboxButtonClass:t.getClassAttrList(n,["responsiveContainerStyle","wtbButtonStyle","collapsableStyle",i.Layout+"LayoutStyle",n.country&&n.country!="UNKNOWN"?"country"+n.country:null,n.language&&n.language!="UNKNOWN"?"language"+n.language:null,(t.isIE(6,9)?"IE":null,n.widgetConfigurationId.toLowerCase())]);r.button=t.append(n.container,"a",o,a,null,h);r.button.onclick=new Function("pswtb.responsiveContainer.open('"+n.instanceGuid+"');");u.loadContentWidgetScript(i.ContentWidgetConfigurationId,function(n){n.widgetScriptLoaded=!0},r);c&&t.nextFrame(new Function(t.format("pswtb.responsiveContainer.open('{instanceGuid}', {skipAnimation});",{instanceGuid:n.instanceGuid,skipAnimation:l?!0:!1})));break;case u.containerTypes.Redirect:o=e.lightboxButtonClass?e.lightboxButtonClass:t.getClassAttrList(n,["responsiveContainerStyle","wtbButtonStyle","redirectStyle",i.Layout+"LayoutStyle",n.country&&n.country!="UNKNOWN"?"country"+n.country:null,n.language&&n.language!="UNKNOWN"?"language"+n.language:null,t.isIE(6,9)?"IE":null,n.widgetConfigurationId.toLowerCase()]);i.RedirectUrlFormat&&(i.RedirectUrlFormats=[{urlMatch:"*",urlFormat:i.RedirectUrlFormat}]);i.RedirectUrlFormats&&(y=location.href,tt="//"+location.host,t.foreach(i.RedirectUrlFormats,function(i,r){var o=u.getUrlMatchRegex(r.urlMatch),f=r.urlFormat,e;if(y.match(o))return!n.sku&&f.match(/\{productGroup\}/i)&&f.match(/\{sku\}/i)&&(f=f.replace(/[\?\&][^=\&#]+=\{sku\}/i,"")),b=t.format(f,{host:tt,sku:encodeURIComponent(n.sku),productGroup:encodeURIComponent(n.tags)}),location.search&&(e=location.search.match(/psserver=[^&]+/i),e&&(b+=(b.match(/\?/i)?"&":"?")+e[0])),h.href=b,!0}),r.button=t.append(n.container,"a",o,a,null,h),r.button.onclick=new Function("pswtb.responsiveContainer.open('"+n.instanceGuid+"');"),u.loadContentWidgetScript(i.ContentWidgetConfigurationId,function(n){n.widgetScriptLoaded=!0},r));c&&t.nextFrame(new Function(t.format("pswtb.responsiveContainer.open('{instanceGuid}', {skipAnimation});",{instanceGuid:n.instanceGuid,skipAnimation:l?!0:!1})));break;case u.containerTypes.FullScreenOverlay:o=e.lightboxButtonClass?e.lightboxButtonClass:t.getClassAttrList(n,["responsiveContainerStyle","wtbButtonStyle","fullScreenOverlayStyle",i.Layout+"LayoutStyle",n.country&&n.country!="UNKNOWN"?"country"+n.country:null,n.language&&n.language!="UNKNOWN"?"language"+n.language:null,t.isIE(6,9)?"IE":null,n.widgetConfigurationId.toLowerCase()]);r.button=t.append(n.container,"a",o,a,null,h);r.button.onclick=new Function("pswtb.responsiveContainer.open('"+n.instanceGuid+"');");u.loadContentWidgetScript(i.ContentWidgetConfigurationId,function(n){n.widgetScriptLoaded=!0},r);c&&t.nextFrame(new Function(t.format("pswtb.responsiveContainer.open('{instanceGuid}', {skipAnimation});",{instanceGuid:n.instanceGuid,skipAnimation:l?!0:!1})));break;default:o=e.lightboxButtonClass?e.lightboxButtonClass:t.getClassAttrList(n,["responsiveContainerStyle","wtbButtonStyle","lightboxStyle",i.Layout+"LayoutStyle",n.country&&n.country!="UNKNOWN"?"country"+n.country:null,n.language&&n.language!="UNKNOWN"?"language"+n.language:null,t.isIE(6,9)?"IE":null,n.widgetConfigurationId.toLowerCase()]);r.button=t.append(n.container,"a",o,a,null,h);r.button.onclick=new Function("pswtb.responsiveContainer.open('"+n.instanceGuid+"');");u.loadContentWidgetScript(i.ContentWidgetConfigurationId,function(n){n.widgetScriptLoaded=!0},r);c&&t.nextFrame(new Function(t.format("pswtb.responsiveContainer.open('{instanceGuid}', {skipAnimation});",{instanceGuid:n.instanceGuid,skipAnimation:l?!0:!1})))}return n.onResizeRegistered||(t.registerOnWindowResize(u.windowResizeCallback,n.instanceGuid),n.onResizeRegistered=!0),!0},showContentWidget:function(n){var r=pswtb.core,i=r.findWidget(n),t;i&&(t=i.content,t.widgetScriptLoaded?i.content.instanceGuid=r.render(r.getContentOptions(i,t.contentContainer,t.layout.ContentWidgetConfigurationId,t.loadingPanel)):window.setTimeout(new Function("pswtb.responsiveContainer.showContentWidget('"+n+"');"),pswtb.fx.frameTimeDuration))},triggerClickEvent:function(n){pswtb.core.onEvent(pswtb.core.eventType.Click,n.instanceGuid,{instanceGuid:n.instanceGuid,sku:n.sku,productId:n.productId,productGroup:n.productGroup})},open:function(n,t){var i=pswtb.core.findWidget(n),s,p,w,a,y,b,h,k,d,c,f,v;if(i){var e=i.content.layout,o=i.labels,r=pswtb.core,u=pswtb.responsiveContainer;switch(e.ContainerType){case u.containerTypes.Lightbox:i.content.wrapper?u.close(n):(u.overlayInstanceGuid&&u.close(u.overlayInstanceGuid,!0),u.overlayInstanceGuid=n,e.ShowModal&&r.disablePageScrolling(i),f=i.content.wrapper=r.append(document.body,"div",r.getClassAttrList(i,["responsiveContainerStyle","lightboxStyle","wrapperStyle","hiddenStyle",e.Layout+"LayoutStyle",i.country&&i.country!="UNKNOWN"?"country"+i.country:null,i.language&&i.language!="UNKNOWN"?"language"+i.language:null,r.isIE(6,9)?"IE":null,i.widgetConfigurationId.toLowerCase()]),(e.ShowModal?r.getHtml("div",r.getClassAttrList(i,["modalShadowStyle"])+" modalShadowStyle"):"")+r.getHtml("div",r.getClassAttrList(i,"lightboxStyle"),null,r.getHtml("div",r.getClassAttrList(i,["containerStyle","verticalFlexStyle"]),null,r.getHtml("div",r.getClassAttrList(i,"headerStyle"),null,(o.headerText?o.headerText:"")+r.getHtml("a",r.getClassAttrList(i,"closeStyle"),{title:o.CloseButtonHint,href:"javascript:;",onclick:"pswtb.responsiveContainer.close('"+n+"');"},o.closeButtonText))+r.getLoadingPanelHTML(i)))),s=f.style,s.position="fixed",s.left=s.top="0px",p=i.displayOptions.dockAnchor,w=i.content.shadow=e.ShowModal?f.children[0]:null,w&&(w.onclick=u.shadowClick,r.addEventListener(document.body,"keyup",u.escapePress)),a=f.children[e.ShowModal?1:0],pswtb.country.initSelector(i,a.children[0].children[0]),h=i.footer=r.generateFooter(i),h&&a.appendChild(h),i.content.contentContainer=a.children[0],i.content.loadingPanel=a.children[0].children[1],r.nextFrame(function(){u.setLightbox(e,f,p?p:i.content.button);r.removeClass(f,"ps_HiddenStyle")}),c=!t&&pswtb.fx.enableEffects&&e.Effect&&e.Effect.toLowerCase()==="fade",c?(pswtb.fx.setOpacity(f,0),pswtb.fx.fadeIn(i,f,pswtb.fx.animationDuration,function(n){u.triggerClickEvent(n);n.onFadeInEnd&&(n.onFadeInEnd(),n.onFadeInEnd=null)}),u.showContentWidget(n)):(u.showContentWidget(n),u.triggerClickEvent(i)));break;case u.containerTypes.Accordion:if(i.content.wrapper)u.close(n);else{u.overlayInstanceGuid&&u.close(u.overlayInstanceGuid,!0);u.overlayInstanceGuid=n;y=i.content.button;b=i.displayOptions.lightboxButtonText;y.innerHTML=b?b:o.wtbButtonAlternateText;y.title=o.wtbButtonAlternateHint;r.addClass(y,i.expandedStyle);var l=i.content.filler=r.append(i.container,"div",r.getClassAttrList(i,["responsiveContainerStyle","collapsableStyle","fillerStyle","hiddenStyle",e.Layout+"LayoutStyle",i.country&&i.country!="UNKNOWN"?"country"+i.country:null,i.language&&i.language!="UNKNOWN"?"language"+i.language:null,r.isIE(6,9)?"IE":null,i.widgetConfigurationId.toLowerCase()])),f=i.content.wrapper=r.append(document.body,"div",r.getClassAttrList(i,["responsiveContainerStyle","collapsableStyle","wrapperStyle",e.Layout+"LayoutStyle","hiddenStyle",i.country&&i.country!="UNKNOWN"?"country"+i.country:null,i.language&&i.language!="UNKNOWN"?"language"+i.language:null,r.isIE(6,9)?"IE":null,i.widgetConfigurationId.toLowerCase()]),r.getHtml("div",r.getClassAttrList(i,"collapsableStyle"),null,r.getHtml("div",r.getClassAttrList(i,"headerStyle"),null,(o.headerText?o.headerText:"")+r.getHtml("a",r.getClassAttrList(i,["closeStyle","topStyle"]),{title:o.CloseButtonHint,href:"javascript:;",onclick:"pswtb.responsiveContainer.close('"+n+"');"},o.closeButtonText))+r.getHtml("div",r.getClassAttrList(i,"containerStyle"),null,r.getLoadingPanelHTML(i)))),s=f.style;s.position="absolute";s.left="0px";s.margin="0";s.overflow="hidden";pswtb.country.initSelector(i,f.children[0].children[0]);h=i.footer=r.generateFooter(i);h&&(f.children[0].appendChild(h),k=r.append(h,"a",r.getClassAttrList(i,["closeStyle","bottomStyle"]),o.closeButtonText,null,{href:"javascript:;"}),o.CloseButtonHint&&(k.title=o.CloseButtonHint),k.onclick=new Function("pswtb.responsiveContainer.close('"+n+"');"));d=i.content.contentContainer=f.children[0].children[1];i.content.loadingPanel=d.children[0];u.showContentWidget(n);window.setTimeout(function(){u.setAccordion(e,f,i.content.button)},0);i.content.fillerRefreshTimer=window.setInterval(new Function("pswtb.responsiveContainer.windowResizeCallback('"+n+"');"),pswtb.fx.animationDuration);r.registerOnActionScriptCallback(u.windowResizeCallback,n);c=!t&&pswtb.fx.enableEffects&&e.Effect&&e.Effect.toLowerCase()==="slide";c?(s.height=l.style.height="0px",l.className=l.className.replace(/ ps_HiddenStyle/,""),f.className=f.className.replace(/ ps_HiddenStyle/,""),pswtb.fx.expand(i,f,pswtb.fx.animationDuration,function(n,t,i){i.style.height=t.offsetHeight+"px";u.triggerClickEvent(n);n.onFadeInEnd&&(n.onFadeInEnd(),n.onFadeInEnd=null)},l)):(r.removeClass(f,"ps_HiddenStyle"),r.removeClass(l,"ps_HiddenStyle"),l.style.height=f.offsetHeight+"px",u.triggerClickEvent(i))}break;case u.containerTypes.FullScreenOverlay:i.content.wrapper?u.close(n):(u.overlayInstanceGuid&&u.close(u.overlayInstanceGuid,!0),u.overlayInstanceGuid=n,r.disablePageScrolling(i),c=!t&&pswtb.fx.enableEffects&&e.Effect&&e.Effect.toLowerCase()==="slide",f=i.content.wrapper=r.append(document.body,"div",r.getClassAttrList(i,["responsiveContainerStyle","fullScreenOverlayStyle","wrapperStyle",c?"slideAnimationStyle":null,e.Layout+"LayoutStyle",i.country&&i.country!="UNKNOWN"?"country"+i.country:null,i.language&&i.language!="UNKNOWN"?"language"+i.language:null,r.isIE(6,9)?"IE":null,i.widgetConfigurationId.toLowerCase()]),r.getHtml("div",r.getClassAttrList(i,"headerStyle"),null,(o.headerText?o.headerText:"")+r.getHtml("a",r.getClassAttrList(i,"closeStyle"),{title:o.CloseButtonHint,href:"javascript:;",onclick:"pswtb.responsiveContainer.close('"+n+"');"},o.closeButtonText))+r.getHtml("div",r.getClassAttrList(i,["containerStyle","verticalFlexStyle"]),null,r.getLoadingPanelHTML(i))),pswtb.country.initSelector(i,f.children[0]),v=i.content,v.contentContainer=f.children[1],v.loadingPanel=v.contentContainer.children[0],u.showContentWidget(n),c&&window.setTimeout(function(){r.removeClass(f,"ps_SlideAnimationStyle")},pswtb.fx.frameTimeDuration),window.setTimeout(function(){u.setFullScreenOverlay(v)},0),r.addEventListener(document.body,"keyup",u.escapePress),u.triggerClickEvent(i));break;case u.containerTypes.Redirect:u.triggerClickEvent(i)}}},windowResizeCallback:function(n){var e=pswtb.core,i=pswtb.responsiveContainer,r=e.findWidget(n),t,u,f;if(r){if(t=r.content,u=t.layout,!i.reInit(r))switch(u.ContainerType){case i.containerTypes.Lightbox:t.wrapper&&(f=r.displayOptions.dockAnchor,i.setLightbox(u,t.wrapper,f?f:t.button));break;case i.containerTypes.Accordion:t.wrapper&&i.setAccordion(u,t.wrapper,t.button,t.filler);break;case i.containerTypes.FullScreenOverlay:t.wrapper&&i.setFullScreenOverlay(t)}}else e.unregisterOnWindowResize(i.windowResizeCallback,n)},setLightbox:function(n,t,i){var r=pswtb.core,a=window.innerWidth?window.innerWidth:window.screenWidth?window.screenWidth:document.documentElement.clientWidth,e=window.innerHeight?window.innerHeight:window.screenHeight?window.screenHeight:document.documentElement.clientHeight,v=t.style,c,l,h;v.width=a+"px";v.height=e+"px";c=n.ShowModal;c&&(l=t.children[0],l.style.width=a+"px",l.style.height=e+"px");var f=t.children[c?1:0],u=window.getComputedStyle?window.getComputedStyle(f,null):f.currentStyle?f.currentStyle:f.style,y=r.styleHasValue(u.minHeight)?r.parseStyleSize(u.minHeight):null,p=r.styleHasValue(u.maxHeight)?r.parseStyleSize(u.maxHeight):null,s=r.styleHasValue(u.height)?r.parseStyleSize(u.height):null,b=s.unit==="%"?e*s.value/100+"px":u.height,o={width:r.styleHasValue(u.minWidth)?u.minWidth:u.width,height:s?s.unit==="%"&&p&&e>=p.value?u.maxHeight:y&&y.value>e?u.minHeight:b:f.clientHeight+"px"};if(!r.styleHasValue(o.width)||!r.styleHasValue(o.height))throw"PS error: Unable to determine WTB Lightbox size";if(n.DockPosition==1){var w=r.findAbsolutePosition(i),k=window.pageXOffset?window.pageXOffset:0,d=window.pageYOffset?window.pageYOffset:0,g=n.HorizontalOffset?n.HorizontalOffset:0,nt=n.VerticalOffset?n.VerticalOffset:0;f.style.marginLeft=w.offsetLeft+g-k+"px";f.style.marginTop=w.offsetTop+nt-d+"px"}else h=(e-r.getStylePixelUnitValue(o.height))/2,h<0&&(h=0),f.style.marginTop=h+"px";n.lastLightboxHeight!=o.height&&(n.lastLightboxHeight=o.height,r.nextFrame(function(){pswtb.responsiveContainer.setVerticalFlexElements(f)}))},setAccordion:function(n,t,i,r){var e=window.innerWidth?window.innerWidth:window.screenWidth?window.screenWidth:document.documentElement.clientWidth,u=t.style,f=pswtb.core.findAbsolutePosition(i);u.top=f.offsetTop+"px";u.marginTop=i.offsetHeight+"px";r&&(r.style.height=t.offsetHeight+"px")},setFullScreenOverlay:function(){},finalizeLightboxClose:function(n,t,i,r){var u=pswtb.core,o=pswtb.responsiveContainer,f,e;u.enablePageScrolling();f=i.wrapper;e=i.instanceGuid;f&&(f.style.display="none",delete i.wrapper,delete i.layout.lastLightboxHeight);i.instanceGuid=null;o.overlayInstanceGuid===n.instanceGuid&&(o.overlayInstanceGuid=null);r?(e&&u.dispose(e,u.widgetStateLevels.productGroup),u.remove(f)):window.setTimeout(function(){e&&u.dispose(e);u.remove(f)},pswtb.fx.animationDuration)},finalizeAccordionClose:function(n,t,i,r){var u=pswtb.core,e=pswtb.responsiveContainer,f;u.unregisterOnActionScriptCallback(e.windowResizeCallback,n.instanceGuid);n.content.instanceGuid&&(u.dispose(i.instanceGuid,r?u.widgetStateLevels.productGroup:null),i.instanceGuid=null);i.fillerRefreshTimer&&(window.clearInterval(i.fillerRefreshTimer),delete i.fillerRefreshTimer);u.remove(i.wrapper);u.remove(i.filler);delete i.wrapper;delete i.filler;f=i.button;f.innerHTML=n.displayOptions.lightboxButtonText?n.displayOptions.lightboxButtonText:n.labels.wtbButtonText;f.title=n.labels.wtbButtonHint;u.removeClass(f,n.expandedStyle);e.overlayInstanceGuid===n.instanceGuid&&(e.overlayInstanceGuid=null)},finalizeFullScreenOverlayClose:function(n,t,i,r){var u=pswtb.core,o=pswtb.responsiveContainer,f,e;u.enablePageScrolling();f=i.wrapper;e=i.instanceGuid;f&&(f.style.display="none",delete i.wrapper);delete i.instanceGuid;delete i.lastScreenHeight;o.overlayInstanceGuid===n.instanceGuid&&(o.overlayInstanceGuid=null);r?(e&&u.dispose(e,u.widgetStateLevels.productGroup),u.remove(f),delete i.wrapper,delete i.listContainer):window.setTimeout(function(){e&&u.dispose(e);u.remove(f);delete i.wrapper;delete i.listContainer},pswtb.fx.animationDuration)},close:function(n,t){var u=pswtb.core,r=pswtb.responsiveContainer,f=u.findWidget(n),i,e,o;if(f){i=f.content;e=f.content.layout;switch(e.ContainerType){case r.containerTypes.Lightbox:o=!t&&pswtb.fx.enableEffects&&e.Effect&&e.Effect.toLowerCase()==="fade";u.removeEventListener(document.body,"keyup",r.escapePress);o&&i.wrapper?pswtb.fx.fadeOut(f,i.wrapper,pswtb.fx.animationDuration,r.finalizeLightboxClose,i):r.finalizeLightboxClose(f,i.wrapper,i,t);break;case r.containerTypes.Accordion:o=!t&&pswtb.fx.enableEffects&&e.Effect&&e.Effect.toLowerCase()==="slide";o&&i.wrapper?pswtb.fx.collapse(f,i.wrapper,pswtb.fx.animationDuration,r.finalizeAccordionClose,i):r.finalizeAccordionClose(f,i.wrapper,i,t);break;case r.containerTypes.FullScreenOverlay:o=!t&&pswtb.fx.enableEffects&&e.Effect&&e.Effect.toLowerCase()==="slide";u.removeEventListener(document.body,"keyup",r.escapePress);o&&i.wrapper?(u.addClass(i.wrapper,"ps_SlideAnimationStyle"),window.setTimeout(function(){r.finalizeFullScreenOverlayClose(f,i.wrapper,i,t)},pswtb.fx.animationDuration)):r.finalizeFullScreenOverlayClose(f,i.wrapper,i,t);break;default:i.instanceGuid&&(u.dispose(i.instanceGuid,t?u.widgetStateLevels.productGroup:null),i.instanceGuid=null);u.remove(i.button);u.remove(i.wrapper);u.remove(i.filler);i.button=null;i.wrapper=null;i.filler=null}}},reInitCallback:function(n){var t=n.content.layout.ContainerType,i=pswtb.responsiveContainer.containerTypes;(t===i.Lightbox||t===i.Accordion||t===i.FullScreenOverlay)&&n.originalWidget.content.instanceGuid&&(pswtb.responsiveContainer.open(n.instanceGuid,!0),delete n.originalWidget)},prepareDisplayOptions:function(n,t,i,r){var u=pswtb.core,f;u.setConfigOptions(n,i,t,["Layouts"]);u.setLabels(n,t,i,r,["CloseButtonText","CloseButtonHint","HeaderText"]);f=n.labels;f.wtbButtonText=u.getFinalLabel(r,i,t,"WTBButtonText");f.wtbButtonHint=u.getFinalLabel(r,i,t,"WTBButtonHint");f.wtbButtonAlternateText=u.getFinalLabel(r,i,t,"WTBButtonAlternateText");f.wtbButtonAlternateHint=u.getFinalLabel(r,i,t,"WTBButtonAlternateHint")},dispose:function(n,t){var i=pswtb.core,r;n.onResizeRegistered&&(i.unRegisterOnWindowResize(pswtb.responsiveContainer.windowResizeCallback,n.instanceGuid),n.onResizeRegistered=!1);r=n.content;r&&(r.instanceGuid&&i.dispose(r.instanceGuid,t),i.remove(r.button),i.remove(r.wrapper),i.remove(r.filler),i.remove(n.footer),delete n.content,i.disablePageScrollingLastRequester()===n&&i.enablePageScrolling())},error:function(n,t,i){var r=pswtb.core,u;if(n.hideControlOnProductNotFound)r.dispose(n.impressionGuid);else{switch(i){case"ProductNotFoundException":case"TagNotFoundException":u=n.labels.productNotFoundErrorMessage;break;default:u=i}t.innerHTML="";r.append(t,"div",r.getClassAttrList(n,["ErrorStyle"]),u)}},isRemoved:function(n){return!n||!n.content||!pswtb.core.inDOM(n.content.wrapper?n.content.wrapper:n.content.button)},shadowClick:function(){var n=pswtb.responsiveContainer;n.overlayInstanceGuid&&n.close(n.overlayInstanceGuid)},escapePress:function(n){var t=pswtb.responsiveContainer;return n.keyCode==27&&t.overlayInstanceGuid?(t.close(t.overlayInstanceGuid),n.preventDefault(),!1):!0},setVerticalFlexElements:function(n,t){var i;t||(t=n);var r=pswtb.core,u=r.getElementsByClassName(n,"ps_VerticalFlexStyle"),f=u.length;for(i=0;i<f;i++)r.setMaxHeight(u[i],t)},getUrlMatchRegex:function(n){return new RegExp(n.replace(/[\.\?\&]/g,function(n){return"\\"+n}).replace(/\*/g,".*"),"i")}},i=0;i<document._ps_scripts.length;i++)scriptStatus=document._ps_scripts[i],scriptStatus.scriptTag.toLowerCase().indexOf("/responsivecontainerv1.")>-1&&(scriptStatus.isLoaded=!0)