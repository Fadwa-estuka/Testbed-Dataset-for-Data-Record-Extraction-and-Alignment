/* Source and licensing information for the line(s) below can be found at /sites/all/modules/custom/wwe_master/js/wwe_master.js. */
!(function($){'use strict';Drupal.behaviors.WWEMaster={site:'internal',setSite:function(site){Drupal.behaviors.WWEMaster.site=site},removeSpecialchar:function(temp){if(temp!==undefined&&temp!=''){return temp.replace(/[^a-zA-Z 0-9]+/g,'')}else return''},getStringWithinLimit:function(text,limit){if(text!=="undefined"&&text.length>limit){return text.substring(0,limit-1)}else return text},getUrlVars:function(){var vars=[],hash,url=window.location.href,hashes=url.slice(url.indexOf('?')+1).split('&');for(var i=0;i<hashes.length;i++){hash=hashes[i].split('=');vars.push(hash[0]);vars[hash[0]]=hash[1]};return vars},getUrlVar:function(parametername){return Drupal.behaviors.WWEMaster.getUrlVars()[parametername]},wwe_translate:function(str,args,options){return Drupal.t(str,args,options)},decodeEntities:function(str){var element=document.createElement('div');if(str&&typeof str==='string'){str=str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi,'');str=str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi,'');element.innerHTML=str;str=element.textContent;element.textContent=''};return str},attach:function(context,settings){$('.wwe_debug li pre').hide();$('.wwe_debug li').on('click',function(){$(this).find('pre').slideToggle()})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at /sites/all/modules/custom/wwe_master/js/wwe_master.js. */
/* Source and licensing information for the line(s) below can be found at /sites/all/modules/custom/wwe_analytics/wwe_analytics.js. */
!(function($){'use strict';Drupal.behaviors.wweAnalytics={wweGAid:'GTM-KMHBSF',contentType:'',titleContentType:['gallery','article','match','power_25','top_25'],$footerWrapper:'',comScore:null,comScoreId:'6036372',attach:function(context){this.$footerWrapper=$('.wwe-distributed-footer--wrapper');if(context===document||context==='.transporter--content')Drupal.behaviors.wweAnalytics.bindTrackingEvents();this.attachBreakerScroll(context)},cv_charLimit:128,bindTrackingEvents:function(){var $trackingElems=$('.js-track');if($trackingElems)$trackingElems.off('click.track').on('click.track',Drupal.behaviors.wweAnalytics.handleTrackingEvent);if(this.$footerWrapper.length>0)this.$footerWrapper.find('a').off('click.footerTrack').on('click.footerTrack',Drupal.behaviors.wweAnalytics.handleFooterClick)},initializeComscore:function(){this.comScore=new ns_.StreamingTag({customerC2:this.comScoreId})},handleTrackingEvent:function(evt){var $target=evt.currentTarget?$(evt.currentTarget):$('#'+evt.attr('id')),$pane=$target.closest('.panel-pane'),label=$target.data('tracking-label'),tagName=$target[0].tagName.toLowerCase(),isVideoBtn=$target.is('.js-video--btn, .js-video_playlist--btn'),gaProps=Drupal.behaviors.wweAnalytics.prepareWidgetEvent($pane),$contextualWrapper=$target.closest('.wwe-contextual-module'),$feedCardWrapper=$target.closest('.wwe-feed-cards--card'),$breakerWrapper=$target.closest('.wwe-breaker--wrapper');if($contextualWrapper.length>0&&$contextualWrapper.attr('data-wname')){gaProps.WN=$contextualWrapper.attr('data-wname')}else if($feedCardWrapper.length>0&&$feedCardWrapper.attr('data-wname')){gaProps.WN=$feedCardWrapper.attr('data-wname')}else if($breakerWrapper.length>0&&$breakerWrapper.attr('data-wname'))gaProps.WN=$breakerWrapper.attr('data-wname');gaProps.L=label||"label not configured";gaProps.EA=evt.type?evt.type:evt[0].type;gaProps.E='TrackWidget';gaProps.OL='';gaProps.OV=0;if(tagName=='input'||tagName=='select'){var formId=$target.parents('form').attr('id'),$formElems;if(formId){$formElems=$('form#'+formId+' input, form#'+formId+' select')}else $formElems=$target;gaProps.L='';if($formElems.length>1){var l=$formElems.length,i=0;for(i;i<=l;i++){var $input=$($formElems[i]);if($input.attr('type')==='hidden'||$input.attr('type')==='submit')break;var elemVal=$input.val()==''?'value empty':$input.val(),elemVal=i==0?elemVal:'|'+elemVal;gaProps.L+=elemVal}}else{gaProps.L=$formElems.attr('id')+'|'+$formElems.val();if($formElems.attr('id')==='superstar-search-select')gaProps.L=$formElems.attr('id')+'|'+Drupal.behaviors.superstarsSearch.currentSelectionLabel}};if(gaProps.WN.indexOf('episode_standard')>-1)gaProps.WP=1;if(gaProps.WN=='wwe_highlights_videos'){wwe_ga_dataLayer.push({contentType:'video'})}else if(gaProps.WN=='feed_cards_pane'){wwe_ga_dataLayer.push({contentType:'video'})}else if(gaProps.WN=='featured_playlist'){wwe_ga_dataLayer.push({contentType:'video'})}else if(gaProps.WN=='video_explorer')if(gaProps.L=='now playing'){gaProps.EA='click_link'}else if(gaProps.L=='all playlists')gaProps.EA='click_link';if(isVideoBtn)gaProps.EA='click_play';if(!isNaN(gaProps.WP))gaProps.L=gaProps.L;if(gaProps.WN=='episodes_header_pane'){gaProps.WN='WWE Network Click';gaProps.L='Link';gaProps.EA='PPV Show';gaProps.OV=Drupal.behaviors.wweAnalytics.getEntitlementsUser()}else if(gaProps.WN=='network_ppv_promo'){gaProps.WN='WWE Network Click';gaProps.EA='Network Promo Breaker';gaProps.OV=Drupal.behaviors.wweAnalytics.getEntitlementsUser();var label_values=gaProps.L,label=label_values.split('|');if(label[1]=='linkType=text'){gaProps.L='Image'}else if(label[1]=='contentType=event'){gaProps.L='Button'}else if(label[1]=='contentType=eventdetail')gaProps.L='Link'}else if(gaProps.WN=='block'){gaProps.WN='WWE Network Click';gaProps.EA='Menu';gaProps.OV=Drupal.behaviors.wweAnalytics.getEntitlementsUser();var label_values=gaProps.L,label=label_values.split('|');if(label[1]=='linkType=text')gaProps.L='Link'}else if(gaProps.WN=='wwe_network_schedule'){gaProps.WN='WWE Network Click';gaProps.EA='EPG';gaProps.OV=Drupal.behaviors.wweAnalytics.getEntitlementsUser();var label_values=gaProps.L,label=label_values.split('|');if(gaProps.L=='button=Full Schedule'){gaProps.L='Top Button'}else if(gaProps.L=='button=Watch Now'){gaProps.L='Bottom Button'}else if(label[1]=='slot=1'){gaProps.L='Show Slot 1'}else if(label[1]=='slot=2'){gaProps.L='Show Slot 2'}else if(label[1]=='slot=3'){gaProps.L='Show Slot 3'}else if(label[1]=='slot=4')gaProps.L='PPV Image'}else if(gaProps.WN=='feed_cards_pane_network-feed-card'){gaProps.WN='WWE Network Click';gaProps.EA='Network Feed Card';gaProps.OV=Drupal.behaviors.wweAnalytics.getEntitlementsUser();var label_values=gaProps.L,label=label_values.split('|');if(label[1]=='linkType=text'){gaProps.L='Button'}else if(label[1]=='linkType=link'){gaProps.L='Eyebrow'}else if(label[1]=='linkType=moreinfo'){gaProps.WN='WWE Flyover Click';gaProps.L='Link'}}else if(gaProps.WN=='match_header_pane'){gaProps.WN='WWE Network Click';gaProps.EA='Match';gaProps.OV=Drupal.behaviors.wweAnalytics.getEntitlementsUser();var label_values=gaProps.L,label=label_values.split('|');if(label[1]=='linkType=text')gaProps.L='Link'}else if(gaProps.WN=='show_promo_pane'){gaProps.WN='WWE Network Click';gaProps.EA='Match';gaProps.OV=Drupal.behaviors.wweAnalytics.getEntitlementsUser();var label_values=gaProps.L,label=label_values.split('|');if(label[1]=='linkType=text')gaProps.L='Button'};if(gaProps.EA!='click_play')Drupal.behaviors.wweAnalytics.trackWidgetEvent(gaProps)},handleFooterClick:function(evt){var $target=$(evt.target),props={};props.WN='footer';props.WP=0;props.ID=0;props.SRC=location.pathname;props.EA='click';props.E='TrackWidget';props.OL='';props.OV=0;props.L=$target.attr('title')?$target.attr('title'):$target.text();Drupal.behaviors.wweAnalytics.trackWidgetEvent(props)},handleCustomTrackingEvent:function(props,pane,target){var gaProps,$target=target?target:null;if(target){var label=$target.data('tracking-label'),tagName=$target[0].tagName.toLowerCase()};if(pane){gaProps=Drupal.behaviors.wweAnalytics.prepareWidgetEvent(pane);gaProps.L=label||"label not configured";gaProps.EA='click';gaProps.E='TrackWidget';gaProps.OL='';gaProps.OV=0}else gaProps=props;Drupal.behaviors.wweAnalytics.trackWidgetEvent(gaProps)},setupCarouselTracking:function($carousel,type){var btns=$carousel.children('.slick-arrow').addClass('js-track');btns.each(function(){var $elem=$(this),$wrapper=$elem.parents('.wwe-related-media'),title=$wrapper.children('.wwe-related-media--title').text();if($elem.hasClass('slick-next')){$elem.data('tracking-label','next|galleryType='+type)}else if($elem.hasClass('slick-prev'))$elem.data('tracking-label','previous|galleryType='+type);if(title.length>1)$elem.data('tracking-label',$elem.data('tracking-label')+'|title='+title)});Drupal.behaviors.wweAnalytics.bindTrackingEvents()},truncateCustomVariableValue:function(cv_name,cv_value){if(typeof cv_name!==undefined)return'';if(typeof cv_value!==undefined)return'';var maxLength=Drupal.behaviors.wweAnalytics.cv_charLimit-cv_name.length;if(cv_value.length>maxLength)cv_value=cv_value.substring(0,maxLength);return cv_value},setBaseData:function(dataLayer){if(typeof(Drupal.settings.WWEAds.dtemplate)!='undefined'){Drupal.behaviors.wweAnalytics.contentType=Drupal.settings.WWEAds.dtemplate;dataLayer.push({contentType:Drupal.behaviors.wweAnalytics.contentType});if($.inArray(Drupal.behaviors.wweAnalytics.contentType,Drupal.behaviors.wweAnalytics.titleContentType)>-1)switch(Drupal.behaviors.wweAnalytics.contentType){case'gallery':dataLayer.push({galleryTitle:Drupal.behaviors.wweAnalytics.truncateCustomVariableValue('galleryTitle',Drupal.settings.page.title)});break;case'article':case'match':case'power_25':case'top_25':dataLayer.push({virtualArticleTitle:Drupal.behaviors.wweAnalytics.truncateCustomVariableValue('virtualArticleTitle',Drupal.settings.page.title)});break}};var ipid=jQuery.cookie('ipid');if(typeof ipid!='undefined')dataLayer.push({IPID:ipid});return dataLayer},getGAid:function(){try{Drupal.behaviors.wweAnalytics.wweGAid=Drupal.settings.analytics.ga_liveid;var referrer=document.referrer,isDev=false,acctlist=Drupal.settings.analytics.ga_dev_acctlist;if(acctlist){var data=acctlist.split(','),i=0,l=data.length;for(;i<l;i++)if(location.hostname.indexOf(data[i])>-1){isDev=true;break}};if(isDev){Drupal.behaviors.wweAnalytics.wweGAid=Drupal.settings.analytics.ga_devid}else Drupal.behaviors.wweAnalytics.wweGAid=Drupal.settings.analytics.ga_liveid}catch(e){if(typeof console!=='undefined'){console.log('Error in getGAid');console.log(e)}};return Drupal.behaviors.wweAnalytics.wweGAid},getWidgetInfo:function(obj){try{var pane=$(obj).closest('div.pane');if(typeof pane=='undefined'||pane==null||pane=='')return'NotAWidget';var props={};props.WN='widgetname';props.WP=parseInt($(pane).attr('data-position'));var id=$(pane).attr('id');if(id!==undefined)props.WN=id.substring(0,id.lastIndexOf('_'));props.LR=$(obj).attr('href');props.LT=$(obj).text();return'WN='+props.name+'; WP='+props.position+'; LT='+props.linktext}catch(e){if(typeof console!=='undefined'){console.log('Error in getting widget info');console.log(e)}};return'NotaWidget'},analyticsEvent:function(event,category,action,opt_value,opt_label){wwe_ga_dataLayer.push({event:'analyticsEvent',eventCategory:category,eventAction:action,eventLabel:opt_label,eventValue:opt_value})},trackVirtualPageView:function(opt_value,opt_label){var page=opt_value?opt_value:location.pathname,matches=page.match(/^((https?:)?\/\/[a-zA-Z0-9][a-zA-Z0-9\.-]*)(\/.*$)/);wwe_ga_dataLayer.push({event:'virtualPageview',virtualPageURL:matches==null?page:matches[3],virtualPageTitle:opt_label?opt_label:'not configured'})},getEntitlements:function(cookie){var ent=null,cook=null;if(cookie){cookie=cookie.split(',');for(cook in cookie)if(cookie[cook].indexOf('ent')!=-1)ent=cookie[cook].split(':')[1].replace(/"/g,"")};return ent},getEntitlementsCookie:function(cName){cName=cName+"=";var allCookies=document.cookie,cPos=allCookies.indexOf(cName);if(cPos==-1)return"";var cStart=cPos+cName.length,cEnd=allCookies.indexOf(";",cStart);if(cEnd==-1)cEnd=allCookies.length;var cValue=unescape(allCookies.substring(cStart,cEnd));return cValue},getEntitlementsUser:function(){var cookie=Drupal.behaviors.wweAnalytics.getEntitlementsCookie('entpc'),entpc=Drupal.behaviors.wweAnalytics.getEntitlements(cookie);if(entpc=='Y'){entpc=1}else if(entpc=='N'){entpc=2}else entpc=3;return entpc},trackCustomDimension:function(optData){wwe_ga_dataLayer.push(optData)},trackWidgetEvent:function(props){var eventValue=Drupal.behaviors.wweAnalytics.cleanEventValue(props.OV),eventWidget='analyticsEvent';props.WN=props.WN||'UND';if(typeof(props.EA)!="string"||typeof(props.L)!="string")return;wwe_ga_dataLayer.push({event:eventWidget,eventCategory:props.WN,eventAction:props.EA,eventLabel:props.L,eventValue:eventValue})},cleanEventValue:function(eventValue){var isInteger=(eventValue===parseInt(eventValue,10));if(isInteger)return eventValue;if(!isInteger||props.L.indexOf('contentType=video')>-1){eventValue=0}else if(props.WN=='video_explorer')eventValue=0;return eventValue},prepareWidgetEvent:function($pane){var props={};props.WN=$pane.attr('data-wname');props.WP=parseInt($pane.attr('data-pos'));props.ID=parseInt($pane.attr('data-id'));if(!props.WN)props.WN='UND';var id=$pane.attr('id');if(id!==undefined)props.WN=Drupal.behaviors.WWEMaster.removeSpecialchar(id.substring(0,id.lastIndexOf('_')));props.SRC=location.pathname;return props},attachBreakerScroll:function(context){var self=this,$window=$(window),height=$window.height();$('.wwe-breaker--wrapper, .wwe-breaker--container','.pane-navigation-drawer').addClass('analytics-breaker-view-processed');var $breakers=$('.wwe-breaker--wrapper:not(.analytics-breaker-view-processed)',context);$window.on('scroll',function(){$breakers.each(function(i,element){var $elem=$(this);if($elem.parent().hasClass('analytics-breaker-view-processed'))return true;var docViewTop=$window.scrollTop(),docViewBottom=docViewTop+height,elemTop=$elem.offset().top;if((elemTop<=docViewBottom))$elem.once('analytics-breaker-view',function(){self.trackVirtualPageView(location.href,document.title)})})})}}})(jQuery);;
/* Source and licensing information for the above line(s) can be found at /sites/all/modules/custom/wwe_analytics/wwe_analytics.js. */
