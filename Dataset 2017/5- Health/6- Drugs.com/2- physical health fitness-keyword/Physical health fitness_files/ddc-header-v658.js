if(!RegExp.escape){RegExp.escape=function(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');};}
if(!Date.now){Date.now=function now(){return new Date().getTime();};}
Number.isInteger=Number.isInteger||function(value){return typeof value==="number"&&isFinite(value)&&Math.floor(value)===value;};if(!String.prototype.includes){String.prototype.includes=function(search,start){'use strict';if(typeof start!=='number'){start=0;}
if(start+search.length>this.length){return false;}else{return this.indexOf(search,start)!==-1;}};}
if(!String.prototype.startsWith){String.prototype.startsWith=function(searchString,position){position=position||0;return this.substr(position,searchString.length)===searchString;};}
if(!String.prototype.endsWith){String.prototype.endsWith=function(searchString,position){var subjectString=this.toString();if(typeof position!=='number'||!isFinite(position)||Math.floor(position)!==position||position>subjectString.length){position=subjectString.length;}
position-=searchString.length;var lastIndex=subjectString.indexOf(searchString,position);return lastIndex!==-1&&lastIndex===position;};}
if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,'');};}
if(!Array.isArray){Array.isArray=function(arg){return Object.prototype.toString.call(arg)==='[object Array]';};}
if(!Array.prototype.filter){Array.prototype.filter=function(fun){'use strict';if(this===void 0||this===null){throw new TypeError();}
var t=Object(this);var len=t.length>>>0;if(typeof fun!=='function'){throw new TypeError();}
var res=[];var thisArg=arguments.length>=2?arguments[1]:void 0;for(var i=0;i<len;i++){if(i in t){var val=t[i];if(fun.call(thisArg,val,i,t)){res.push(val);}}}
return res;};}
if(!Array.prototype.forEach){Array.prototype.forEach=function(callback,thisArg){var T,k;if(this==null){throw new TypeError(' this is null or not defined');}
var O=Object(this);var len=O.length>>>0;if(typeof callback!=="function"){throw new TypeError(callback+' is not a function');}
if(arguments.length>1){T=thisArg;}
k=0;while(k<len){var kValue;if(k in O){kValue=O[k];callback.call(T,kValue,k,O);}
k++;}};}
if(!Array.prototype.includes){Array.prototype.includes=function(searchElement){'use strict';var O=Object(this);var len=parseInt(O.length)||0;if(len===0){return false;}
var n=parseInt(arguments[1])||0;var k;if(n>=0){k=n;}else{k=len+n;if(k<0){k=0;}}
var currentElement;while(k<len){currentElement=O[k];if(searchElement===currentElement||(searchElement!==searchElement&&currentElement!==currentElement)){return true;}
k++;}
return false;};}
if(!Array.prototype.some){Array.prototype.some=function(fun){'use strict';if(this==null){throw new TypeError('Array.prototype.some called on null or undefined');}
if(typeof fun!=='function'){throw new TypeError();}
var t=Object(this);var len=t.length>>>0;var thisArg=arguments.length>=2?arguments[1]:void 0;for(var i=0;i<len;i++){if(i in t&&fun.call(thisArg,t[i],i,t)){return true;}}
return false;};}
if(!Array.prototype.find){Array.prototype.find=function(predicate){if(this===null){throw new TypeError('Array.prototype.find called on null or undefined');}
if(typeof predicate!=='function'){throw new TypeError('predicate must be a function');}
var list=Object(this);var length=list.length>>>0;var thisArg=arguments[1];var value;for(var i=0;i<length;i++){value=list[i];if(predicate.call(thisArg,value,i,list)){return value;}}
return undefined;};};var DDC=window.DDC||{};DDC.Error=function()
{var _exception={};var _start=new Date().getTime();var _count=0;if(!document.cookie.match(/debug=1/)){window.onerror=handler;}
function handler(message,file,line)
{if(++_count>5){return true;}
var now=new Date().getTime();var data={guid:_start,message:message||_exception.message||'',file:file||_exception.file||'',line:line||_exception.line||'',column:_exception.column||'',stack:_exception.stack||'',count:_count,url:document.URL||'',agent:navigator.userAgent||'',elapsed:now-_start,timestamp:now};$.ajax({type:'POST',dataType:'json',url:'/js/error.php',data:data,success:display});_exception={};return true;}
function display(json)
{if(json.debug&&json.message&&!json.ignore){alert(json.message+"\n"+json.file+"\nLine: "+json.line+"\tColumn: "+json.column+"\n"+json.stack);}}}();;var DDC=window.DDC||{};DDC.Search=function()
{var _timeout=3000;var _delay=100;var _running=false;var _keyTime;var _searchText;var _xhr;$(document).ready(init);function init(container)
{log('DDC.Search.init');var selector=container&&typeof container==='string'?container+' .livesearch':'.livesearch';$(selector).attr('autocapitalize','off').attr('autocomplete','off').attr('autocorrect','off');$(selector).on('focus',focus).on('keyup',search);$(selector).closest('form').on('submit',submit);$(selector).on('click','.ls-options a',options);$('.search-close').on('click',reset);}
function reset(e)
{log('DDC.Search.reset');e.preventDefault();e.stopPropagation();$('.search-main-selected').removeClass('search-main-selected');$(e.target).closest('form').find('.livesearch').val('');remove();}
function submit(e)
{log('DDC.Search.submit');abort();var $input=$(e.target).find('.livesearch');if($input.val().length&&$input.val()!=="Search"){if($('.searchDropdownBox').length&&!$('.searchDropdownBox').val()){$('.searchDropdownBox').prop('disabled',true);}}
else if($input.attr('data-required')){e.preventDefault();e.stopPropagation();$input.focus();}}
function focus(e)
{log('DDC.Search.focus');$wrap=$(e.target).closest('.header-wrap');if($wrap.length){$wrap.addClass('search-main-selected');}
search(e);}
function search(e)
{log('DDC.Search.search');var $target=$(e.target);_keyTime=(new Date).getTime();if($target.val().length>0){$target.addClass('searchSelected');}
else{$target.removeClass('searchSelected');}
window.setTimeout(function(){DDC.Search.process(e.target);},_delay);}
function process(target,option,refresh)
{log('DDC.Search.process');option=option||'';refresh=refresh||false;var $input=$(target).hasClass('livesearch')?$(target):$(target).closest('#ls-wrap').siblings('input[type=text]');if(refresh||((new Date).getTime()-_keyTime>_delay-20&&_searchText!=$input.val()))
{_searchText=$input.val();abort();if(_searchText.length<1){if($('#ls-wrap').length){$('#ls-wrap').slideUp(200);}
return;}
_running=true;var data=$input.closest('form').find('input[name=livesearch-data]').val();var params={type:'GET',data:({id:$input.attr('id'),s:_searchText,op:option,data:data}),dataType:'html',timeout:_timeout};_xhr=$.ajax('/js/search.php',params).done(display).fail(refresh);}}
function display(response)
{log('DDC.Search.display');_running=false;var result=$('<div />').html(response);var targetId='#'+result.find('#ls-inputid').val();var rowCount=result.find('#ls-count').val();var ls=$('#ls-wrap');if(!ls.length){ls=$('<div />').attr('id','ls-wrap').css('display','none');var $targetWrap=$(targetId).closest('.livesearch-wrap');if($targetWrap.length){ls.css('top',$targetWrap.outerHeight()+'px');$targetWrap.css('position','relative');$targetWrap.append(ls);}
else{ls.css('top',$(targetId).outerHeight()+'px');$(targetId).parent().css('position','relative');$(targetId).after(ls);}
$(document).on('click',defocus);$(document).on('keydown',keys);}
ls.html(response);ls.show();$('.ls-item').on('click',select);}
function select(e)
{log('DDC.Search.select');var target=$(e.target).closest('a');if(target.attr('rel')=='clear'){$(e.target).closest('form').find('.livesearch').val('');}
else{$(e.target).closest('form').find('.livesearch').val(target.text());}
if(target.attr('href').endsWith('#')){e.preventDefault();remove();}
else if(target.attr('href').endsWith('#submit')){e.preventDefault();remove();$(e.target).closest('form').submit();}}
function keys(e)
{log('DDC.Search.keys');var code=e.keyCode||e.which;var focusLink=$('.ls-focus');if(code==40)
{if(focusLink.length)
{focusLink.removeClass('ls-focus');if(focusLink.nextAll('.ls-item').length){focusLink.nextAll('.ls-item:first').addClass('ls-focus').focus();}
else{$(e.target).closest('form').find('.livesearch').focus();}}
else{$('.ls-item:first').addClass('ls-focus').focus();}
return false;}
if(code==38&&focusLink.length)
{focusLink.removeClass('ls-focus');if(focusLink.prevAll('.ls-item').length){focusLink.prevAll('.ls-item:first').addClass('ls-focus').focus();}
else{$(e.target).closest('form').find('.livesearch').focus();}
return false;}}
function remove()
{log('DDC.Search.remove');abort();$('#ls-wrap').slideUp(200);window.setTimeout(function(){$('#ls-wrap').remove();},210);$(document).unbind('click',defocus);$(document).unbind('keydown',keys);}
function abort()
{log('DDC.Search.abort');if(_running&&typeof(_xhr)!='undefined'){_xhr.abort();}}
function defocus(e)
{log('DDC.Search.defocus');var o=$('#ls-wrap').offset();if(typeof(o)=='undefined'||o==null){return;}
_searchText='';if(e.pageX<o.left||e.pageX>o.left+$('#ls-wrap').width()||e.pageY<o.top-40||e.pageY>o.top+$('#ls-wrap').height()){remove();}}
function options(e)
{log('DDC.Search.options');e.preventDefault();e.stopPropagation();var $button=$(e.target).closest('a');var value=$(e.target).closest('form').find('.livesearch').val();window.location=$button.attr('href')+"?searchterm="+value;}
function refresh()
{log('DDC.Search.refresh');$('.ls-title').html('Suggestions...');}
function log(text)
{if(window.console){}}
return{init:init,process:process,remove:remove};}();;var DDC=window.DDC||{};DDC.Log=function()
{function dw(a,b,c,d,e,f,h,i,k,l,m,n,o,p,q)
{var r=0;if(typeof(ehs_ad_called)=='number'){r=ehs_ad_called;}
$.ajax({type:'POST',data:{a:a,b:b,c:c,d:d,e:e,f:f,g:document.referrer,h:h,i:i,j:window.location.href,k:k,l:l,m:m,n:n,o:o,p:p,q:q,r:r},url:'/js/dw.php'});}
return{dw:dw};}();DDC.Cookie=function()
{function get(name)
{var nameEQ=name+'=';var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i].replace(/^\s+/,'');if(c.indexOf(nameEQ)===0){return c.substring(nameEQ.length,c.length);}}
return null;}
function set(name,value,days,path)
{path=path||'/';var expiry='';if(days){expiry=new Date();expiry.setDate(expiry.getDate()+days);expiry=';expires='+expiry.toUTCString();}
document.cookie=name+'='+value+expiry+';path='+path;}
return{get:get,set:set};}();DDC.Scroller=function()
{var _event={move:'DDC::Scroller::move',top:'DDC::Scroller::top',bottom:'DDC::Scroller::bottom',stop:'DDC::Scroller::stop'};var _timer={move:false,stop:false,pending:false};var _delay=50;function init()
{$(window).scroll(scrolling);}
function scrolling(e)
{if(!_timer.move){broadcast(e);_timer.move=window.setTimeout(function(){_timer.move=false;if(_timer.pending){broadcast(e);}},_delay);}
else{_timer.pending=true;}}
function broadcast(e)
{_timer.pending=false;var data=getPositionData(e);$(document).trigger(_event.move,data);if(data.scrollY<=0){$(document).trigger(_event.top,data);}
else if(data.scrollY&&data.scrollMaxY&&data.scrollY>=data.scrollMaxY){$(document).trigger(_event.bottom,data);}
window.clearTimeout(_timer.stop);_timer.stop=window.setTimeout(function(){$(document).trigger(_event.stop,data);},_delay*5);}
function getPositionData(e)
{var target=e.currentTarget||{};if(target.hasOwnProperty('scrollY')||target.hasOwnProperty('pageYOffset')){return{width:target.innerWidth||0,height:target.innerHeight||0,scrollX:target.scrollX||target.pageXOffset||0,scrollY:target.scrollY||target.pageYOffset||0,scrollMaxX:target.scrollMaxX||0,scrollMaxY:target.scrollMaxY||0};}
else{return{width:parseInt($(window).width()),height:parseInt($(window).height()),scrollX:parseInt($(window).scrollLeft()),scrollY:parseInt($(window).scrollTop())};}}
return{init:init,event:_event};}();DDC.Resolution=function()
{var _timer=false;function init()
{setViewport();responsiveSearchBar();$(window).on('hashchange',hashCheck);hashCheck();$(window).resize(resize);}
function responsiveSearchBar()
{if(window.location.pathname.match(/search.php/)){expandSearchBar();}
else{$('#livesearch-main').on('focus',function(e){window.setTimeout(function(){expandSearchBar();},5);});}}
function expandSearchBar()
{$('#livesearch-main').closest('.navbar').addClass('navbar-focus');}
function setViewport()
{var viewport=$(window).width()+'x'+$(window).height();DDC.Cookie.set('viewport',viewport);}
function resize(e)
{window.clearTimeout(_timer);_timer=window.setTimeout(function(){setViewport();},2000);}
function hashCheck(e){if(window.location.hash.length){$('body').addClass('hash-url');}}
return{init:init};}();;var DDC=window.DDC||{};function email_to_friend(url){window.open('/email-friend.php?url='+url,'email_to_friend','width=380,height=680,scrollbars=1');}
function clear_text(id){$('#'+id).val('').css('fontStyle',"normal").css('color',"black");}
function openChild(file,name,options){var childWindow=window.open(file,name,options);if(childWindow.opener===null){childWindow.opener=name.self;}}
function hideDiv(id){$('#'+id).css('display','none');if($('div[id^=floatBox]').filter(':visible').length===0){overlayHide();}}
function showDiv(id){$('#'+id).css('display','block');}
function removeElement(id){$('#'+id).remove();}
function overlayHide(){$('#overlay').css('display','none');$('div[id^=floatBox]').css('display','none');}
function overlayShow(){if($('#overlay').length===0){$('<div id="overlay" onclick="overlayHide();" />').appendTo('body');}
$('#overlay').css('height',$(document).height()+'px').show();}
function checkFloatBox(id){if($('#'+id).length===0){$('<div />').attr('id',id).appendTo('body');}}
jQuery.fn.center=function(){var x=Math.round(($(document).width()-this.width())/2);var y=Math.max(20,Math.round(($(window).height()/2)-(this.height()/2)+$(window).scrollTop())-20);this.css({left:x,top:y});return this;};function dgid(id){return document.getElementById(id);}
function changeSortOrder(){var so=$('#sort_order').val();self.location=(location.href.search(/sort=/i)!=-1)?location.href.replace(/sort=[a-zA-Z]*/i,'sort='+so):location.href+'&sort='+so;}
function changeResultsPerPage(){var mr=$('#results_per_page').val();self.location=(location.href.search(/maxrows=/i)!=-1)?location.href.replace(/maxrows=[0-9]*/i,'maxrows='+mr):location.href+'&maxrows='+mr;}
function compareWithOtherDrugsSeeAll(e,ddc_id,brand_name_id){$.ajax({url:'/js/compare-with-other-drugs.php?ddc_id='+ddc_id+'&brand_name_id='+brand_name_id,success:function(data){$('#compareWithOtherDrugs').html(data);}});}
function brandFamilyDrugDocsSeeAll(e,url){$.ajax({url:'/js/brand-family-drug-docs.php?url='+url,success:function(data){$('#brandFamilyDrugDocs').html(data);}});}
function otherBrandNamesSeeAll(e,url,type){$.ajax({url:'/js/other-brand-names.php?url='+url+'&type='+type,success:function(data){$('#other_brand_names_'+type).html(data);}});}
function moreResourcesSeeAll(e,url,type){$.ajax({url:'/js/more-resources.php?url='+url+'&type='+type,success:function(data){$('#more_resources_'+type).html(data);}});}
function getQueryParameter(name){name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)");var results=regex.exec(window.location.search);return(results!==null)?decodeURIComponent(results[1].replace(/\+/g," ")):"";}
DDC.Page=function()
{function init()
{classifyLists();$('.more-resources-more-toggle').on('click',displayMoreLinks);}
function displayMoreLinks(e)
{e.preventDefault();e.stopPropagation();var $source=$(e.target).closest('[data-more-id]');var moreId=$source.data('more-id');if(window.moreResourceStorage&&window.moreResourceStorage[moreId]){$source.replaceWith(window.moreResourceStorage[moreId]);}}
function classifyLists()
{$('#content ul').each(function(){var $ul=$(this);var $items=$ul.find('li');if($items.length<20){return;}
var stats={numItems:0,maxLength:0};$items.each(function(){var $li=$(this);if($li.html()===$li.text()){stats.numItems++;stats.maxLength=Math.max($li.text().length,stats.maxLength);}});addListClass($ul,stats);});}
function addListClass($ul,stats)
{if(stats.numItems>75){$ul.addClass('list-length-long');}
else if(stats.numItems>50){$ul.addClass('list-length-medium');}
else if(stats.numItems>25){$ul.addClass('list-length-short');}
else{return;}
if(stats.maxLength>30){$ul.addClass('list-type-paragraph');}
else{$ul.addClass('list-type-word');}}
return{init:init};}();DDC.Form=function()
{function init()
{$('form').on('submit',submit);}
function submit(e)
{if(!validate()){return false;}
$(e.target).find('input[type=submit]').each(function(){if($(this).attr('data-submit')){$(this).val($(this).attr('data-submit')).addClass('input-button-disabled');}});}
function validate()
{var $termsRequired=$('[data-terms-required=1]');if($termsRequired.length&&!$termsRequired.is(':checked')){alert('You must accept the terms to continue.');return false;}
return true;}
function regoCheck(key,val,val2)
{$.get('/register-check.php',{key:key,val:val,val2:val2},function(status){regoResponse(key,status);});}
function regoResponse(key,status)
{if(status===''){$('#user-'+key).removeClass('input-warning');}
else{$('#user-'+key).addClass('input-warning');status=" <span class='msg-warning'>"+status+"</span>";}
var regoId='rego-'+key;if($('#'+regoId).length){$('#'+regoId).remove();}
var wrap=$("<span />").attr({id:regoId}).html(status);$('#user-'+key).after(wrap);}
return{init:init,validate:validate,regoCheck:regoCheck};}();DDC.Pill=function()
{function showShapes()
{var shapes=$('#shape-content');if(!shapes.length){shapes=$('<div />').attr('id','shape-content').css({position:'absolute',top:'0',zIndex:1000});shapes.html("<p style='padding: 12px;'>Loading shapes...</p>").load('/js/pill-shapes.html');$('#shape-select').closest('div').css({position:'relative'});$('#shape-select').after(shapes);}
shapes.show();$('#shape-select').css({visibility:'hidden'}).blur();window.setTimeout(function(){$(document).on('click',hideShapes);},10);}
function selectShape(shapeId)
{$('#shape-select').val(shapeId);hideShapes();}
function hideShapes()
{$('#shape-content').hide();$('#shape-select').css({visibility:'visible'});$(document).off('click');}
return{showShapes:showShapes,selectShape:selectShape};}();DDC.Bookmark=function()
{function init()
{$('.iconBookmark').on('click',displayOptions);$('.iconBookmarkSmall').on('click',displayOptions);}
function displayOptions(e)
{e.preventDefault();e.stopPropagation();$.ajax({type:'GET',complete:getContentSuccess,data:({page_url:$('#page_url').val(),page_title:$('#page_title').val(),mednotes_data:$('#mednotes_data').val()}),url:'/bookmark-popup.php'});}
function getContentSuccess(response)
{DDC.Popup.create(response.responseText,{width:260});}
return{init:init};}();DDC.Popup=function()
{var _config={};var _defaults={event:null,referrer:null,width:500,overlayClose:true};var _active=false;function create(content,config)
{_config=$.extend({},_defaults,config);_config.width=Math.min(_config.width,$(window).width()-60);if(_config.event&&_config.event.stopPropagation){_config.event.preventDefault();_config.event.stopPropagation();}
var $box=$('.popupBox');if(!$box.length)
{var overlay=$('<div />').appendTo('body').addClass('overlay').css({display:'none',width:'100%',height:$(document).height()});$box=$('<div />').appendTo('body').addClass('popupBox').css({display:'none',width:_config.width});handler();}
if(typeof content==='string'){$box.html(content);}
else{$box.html(content.html());}
$box.append("<a class='close' href='#' onclick='DDC.Popup.hide(); return false;'><i class='icon icon-cross'></i></a>");$box.show();$('.overlay').fadeIn(400,function(){_active=true;});position($box);return $box;}
function position($box)
{var x=Math.round(($(window).width()-$box.outerWidth())/2);var y=Math.max(20,Math.round(($(window).height()/2)-($box.height()/2)+$(window).scrollTop()-20));$box.css({left:x,top:y});}
function handler()
{if(_config.overlayClose){window.setTimeout(function(){$('html').on('click',function(e){if(_active&&!$(e.target).closest('.popupBox').length){hide();}});},100);}}
function hide()
{$('html').off('click',hide);$('.popupBox').hide();$('.overlay').fadeOut(400,function(){_active=false;});}
function shareBlock(e)
{e.preventDefault();$target=$(e.target);var share={url:$target.attr('href'),name:'window_'+$target.attr('data-track-group').toLowerCase(),width:parseInt($target.attr('data-width')),height:parseInt($target.attr('data-height'))};hide();ga('send','social',$target.attr('data-track-group'),$target.attr('data-track-action'));window.open(share.url,share.name,'width='+share.width+',height='+share.height+',scrollbars=1');}
return{create:create,hide:hide,shareBlock:shareBlock};}();DDC.Sidebar=function()
{function showDrugInfoExtra(type,id,title,ddc_id,brand_name_id)
{$('.sideBoxDrugInfoExtra').slideDown();$('.sideBoxDrugInfoExtra .sideBoxTitle').html(title);$('.sideBoxDrugInfoExtra .sideBoxContent').html("<img alt='Loading...' src='/img/misc/ajax-loader-large.gif' width='32' height='32' />");$.ajax({type:'GET',complete:updateDrugInfoExtra,data:({type:type,id:id,ddc_id:ddc_id,brand_name_id:brand_name_id}),url:'/drug-info-extra.php'});}
function showConditionInfoExtra(type,id,title,condition_id)
{$('.sideBoxDrugInfoExtra').slideDown();$('.sideBoxDrugInfoExtra .sideBoxTitle').html(title);$('.sideBoxDrugInfoExtra .sideBoxContent').html("<img alt='Loading...' src='/img/misc/ajax-loader-large.gif' width='32' height='32' />");$.ajax({type:'GET',complete:updateDrugInfoExtra,data:({type:type,id:id,condition_id:condition_id}),url:'/condition-info-extra.php'});}
function showConditionDocInfoExtra(type,title,url,doc_title,doc_filename)
{$('.sideBoxDrugInfoExtra').slideDown();$('.sideBoxDrugInfoExtra .sideBoxTitle').html(title);$('.sideBoxDrugInfoExtra .sideBoxContent').html("<img alt='Loading...' src='/img/misc/ajax-loader-large.gif' width='32' height='32' />");$.ajax({type:'GET',complete:updateDrugInfoExtra,data:({type:type,url:url,doc_title:doc_title,doc_filename:doc_filename}),url:'/condition-doc-info-extra.php'});}
function showUnapproved(ddc_id,brand_name_id)
{$('.sideBoxUnapproved').slideDown();$('.sideBoxUnapproved .sideBoxContent').html("<img alt='Loading...' src='/img/misc/ajax-loader-large.gif' width='32' height='32' />");$.ajax({type:'GET',complete:updateUnapproved,data:({ddc_id:ddc_id,brand_name_id:brand_name_id}),url:'/fda-unapproved-extra.php'});}
function updateDrugInfoExtra(response)
{$('.sideBoxDrugInfoExtra .sideBoxContent').html(response.responseText);}
function updateUnapproved(response)
{$('.sideBoxUnapproved .sideBoxContent').html(response.responseText);}
return{showDrugInfoExtra:showDrugInfoExtra,showConditionInfoExtra:showConditionInfoExtra,showConditionDocInfoExtra:showConditionDocInfoExtra,showUnapproved:showUnapproved};}();DDC.Feedback=function()
{var _id='#sideBox-feedback';var _cookieSet=false;var _sendSurvey=false;var _isDisplaying=false;function init()
{if(console)console.log('DDC.Feedback.init');if(hasCookie()){$(_id).remove();return;}
$(_id).on('click','button',record);$(document).on(DDC.Scroller.event.move,function(e,data){if(data.scrollY>=600&&!_isDisplaying){_isDisplaying=true;window.setTimeout(function(){$('#sideBox-feedback').addClass('feedback-display');},10000);sendSurveyView();}});}
function record(e)
{if(console)console.log('DDC.Feedback.record');e.preventDefault();e.stopPropagation();if($(_id).hasClass('sideBox-feedback-complete')){return;}
$(_id).addClass('sideBox-feedback-complete');var $target=$(e.target).closest('button');var score=parseInt($target.attr('data-value'));$target.addClass('selected');sendDatabase(window.location.href,score);sendAnalytics(score);setCookie();removeFeedback();}
function sendDatabase(url,score)
{$.get('/js/feedback-process.php',{url:url,response:(score>0)?"Positive":"Negative"});}
function sendAnalytics(score)
{if(console)console.log('DDC.Feedback.sendAnalytics');var type='No';if(score==1){type='Yes';}
ga('send','event','Was this page useful',score,type,score,{dimension21:score,nonInteraction:'true'});}
function removeFeedback()
{window.setTimeout(function(){$('#sideBox-feedback').addClass('feedback-remove');},2000);}
function sendSurveyView()
{if(!_sendSurvey)
{ga('send','event','Was this page useful','0','Viewed',0,{dimension21:'0',nonInteraction:'true'});_sendSurvey=true;}}
function hasCookie()
{return DDC.Cookie.get('feedback')=='disable';}
function setCookie()
{if(!_cookieSet){DDC.Cookie.set('feedback','disable',180);_cookieSet=true;}}
return{init:init};}();DDC.Promo=function()
{var _interval=5000;var _width=794;var _transition=new Array(50,50,50,50,50,50,50,50,50,50,50,50,50,50,35,20,15,10,7,7);var _hasFocusWin=true;var _hasFocusBox=false;var _promoIdOld=0;var _promoIdNew=0;var _index=0;var _position=0;var _carouselTimer;var _animationTimer;function init()
{checkFocus();$('.promoBox').each(function(){$(this).addClass('promoBox-'+$(this).attr('data-index'));});$('.promoBox a').click(track);$('.promoLink a').click(manual);_carouselTimer=setInterval('DDC.Promo.carousel()',(_interval));}
function track(e)
{var title=$(e.target).closest('.promoBox').attr('data-link');ga('send','event','Carousel','Click',title);}
function carousel()
{if(!_hasFocusWin||_hasFocusBox)return;_promoIdOld=parseInt($('.promoLink.selected').attr('id').replace('promoLink-',''),10);_promoIdNew=_promoIdOld+1;if(_promoIdNew>$('.homePromo li').length){_promoIdNew=1;}
change();}
function manual(e)
{e.preventDefault();if(typeof(_carouselTimer)!='undefined'){clearInterval(_carouselTimer);}
_promoIdOld=$('.promoLink.selected').attr('id').replace('promoLink-','');_promoIdNew=$(e.target).closest('li').attr('id').replace('promoLink-','');if(_promoIdOld==_promoIdNew)return;change();}
function change()
{$('.promoLink').removeClass('selected');$('#promoLink-'+_promoIdNew).addClass('selected');_position=0;if(typeof(_animationTimer)!='undefined'){clearInterval(_animationTimer);}
_animationTimer=setInterval('DDC.Promo.animate()',15);}
function animate()
{_position-=_transition[_index];_index++;$('#promoBox-'+_promoIdOld).css('left',_position+'px');$('#promoBox-'+_promoIdNew).addClass('promoBox-active').css('left',(_position+_width)+'px');if(_index>=_transition.length)
{_index=0;clearInterval(_animationTimer);cleanup();}}
function cleanup()
{$('.promoBox').each(function(){if($(this).attr('id').replace('promoBox-','')!=_promoIdNew){$(this).removeClass('promoBox-active').css('left',_width+'px');}});}
function checkFocus()
{if(/*@cc_on!@*/false)
{document.onfocusin=onFocus;document.onfocusout=onBlur;}
else
{window.onfocus=onFocus;window.onblur=onBlur;}
$('.homePromo').mouseenter(onEnter);$('.homePromo').mouseleave(onLeave);}
function onFocus(e)
{_hasFocusWin=true;}
function onBlur(e)
{_hasFocusWin=false;}
function onEnter(e)
{_hasFocusBox=true;}
function onLeave(e)
{_hasFocusBox=false;}
return{init:init,carousel:carousel,animate:animate};}();DDC.Slider=function()
{var _barVisible=false;var _barTrigger=3000;var _barTimer=null;var _boxEnabled=false;var _boxVisible=false;var _boxTrigger=40;var _disable=false;function data(config)
{_config=config;}
function init()
{if(console)console.log('DDC.Slider.init');_boxEnabled=$('#slideBox').length;if(_config.url&&_config.name&&_config.content)
{_barTimer=setInterval('DDC.Slider.showBar()',_barTrigger);var html=[];html.push("<a class='close' href='#close'>Close</a>");html.push("<p><a href='"+_config.url+"' target='_blank' rel='nofollow' onclick=\"ga('send', 'event', 'Sponsor Center', '"+_config.name+"', 'FullBarBottom');\">"+_config.content+"</a></p>");$("<div id='slider-bar' class='noVisit vmig' />").html(html.join('')).appendTo('body');$('body').on('click','#slider-bar a',cookieBar);$('body').on('click','#slider-bar a.close',hideBar);}
if(_boxEnabled){$(document).on(DDC.Scroller.event.move,scrolling);$('#slideBox a.close').click(hideBox);}}
function showBar(e)
{if(console)console.log('DDC.Slider.showBar');if($(window).scrollTop()>300){$('#slider-bar').animate({'bottom':'0px'},800);clearInterval(_barTimer);_barTimer=setInterval('DDC.Slider.hideBar()',_barTrigger*50);_barVisible=true;}}
function hideBar(e)
{if(typeof(e)!='undefined'){e.preventDefault();_disable=true;}
$('#slider-bar').animate({'bottom':'-100px'},800);clearInterval(_barTimer);_barVisible=false;}
function cookieBar(e)
{DDC.Cookie.set('sldrbar','disable',30);}
function scrolling(e,data)
{var limit=Math.round(data.height*_boxTrigger/100);if(!_disable&&!_boxVisible&&data.scrollY>limit){showBox();}
if(_boxVisible&&data.scrollY<limit-50){hideBox();}}
function showBox()
{$('#slideBox').animate({'right':'0px'},500);_boxVisible=true;}
function hideBox(e)
{if(typeof(e)!='undefined'){e.preventDefault();_disable=true;}
$('#slideBox').animate({'right':'-400px'},500);_boxVisible=false;}
return{init:init,data:data,showBar:showBar,hideBar:hideBar};}();DDC.FixedAd300=function()
{function init()
{var props={targetId:'#sideBoxFixedAd300',wrapperId:'#sidebar',top:0,bottom:0,delay:1500,loadGap:-100,load:load,scroll:scroll};DDC.Fixable.init(props);}
function load()
{if(typeof gptStickyAd!=='undefined'){googletag.cmd.push(function(){googletag.pubads().refresh([gptStickyAd]);});}
return true;}
function scroll(data,wrapper,target,status)
{}
return{init:init};}();DDC.FixedAd728=function()
{var _props={targetId:'.topbanner-container',wrapperId:'body',top:0,bottom:0,delay:100,load:load,scroll:scroll};function init()
{if(console)console.log('DDC.FixedAd728.init');DDC.Fixable.init(_props);}
function load()
{}
function scroll(data,wrapper,target,status)
{if(data.scrollY>990){DDC.Fixable.position(_props.targetId);}}
return{init:init};}();DDC.Fixable=function()
{var _list=[];var _setup=false;function init(box)
{if(console)console.log('DDC.Fixable.init',box);setDefaults(box);window.setTimeout(function(){setup(box);},box.delay);}
function setDefaults(box)
{box.delay=box.delay||1000;box.top=box.top||0;box.bottom=box.bottom||0;box.loadGap=box.loadGap||0;box.minSpace=box.minSpace||200;}
function setup(box)
{if(console)console.log('DDC.Fixable.setup');box.layout={target:{},wrapper:{}};box.status={loaded:false,fixed:false,bottom:false};box.layout.target.original=getDimensions(box.targetId);box.layout.wrapper=getDimensions(box.wrapperId);if(box.layout.target.original.bottom+box.minSpace>box.layout.wrapper.bottom){loadExternal(box);return;}
_list.push(box);if(!_setup){$(document).on(DDC.Scroller.event.move,scrolling);_setup=true;}}
function scrolling(e,data)
{_list.forEach(function(box){load(box,data);scrollExternal(box,data);if(data.scrollY>box.layout.target.original.top-box.top){if(!box.status.fixed){position(box.targetId,'fixed',box.top);box.status.fixed=true;}
if(!box.status.bottom){box.layout.target.current=getDimensions(box.targetId);if(box.layout.target.current.bottom>box.layout.wrapper.bottom-box.bottom){position(box.targetId,'absolute','',box.bottom);box.status.bottom=true;}}
else if(data.scrollY<box.layout.target.current.top-box.top){position(box.targetId,'fixed',box.top);box.status.bottom=false;}}
else if(box.status.fixed){position(box.targetId);box.status.fixed=false;}});}
function load(box,data)
{if(box.status.loaded){return;}
if(data.scrollY+data.height>box.layout.target.original.top+box.loadGap){box.status.loaded=true;loadExternal(box);}}
function loadExternal(box)
{if(box.load&&typeof box.load==='function'){box.load();}}
function scrollExternal(box,data)
{if(box.scroll&&typeof box.scroll==='function'){box.scroll(data,box.layout.wrapper,box.layout.target,box.status);}}
function position(targetId,pos,top,bottom)
{if(typeof pos==='undefined'){pos='';}
if(typeof top==='undefined'){top='';}
else if(top>0){top+='px';}
if(typeof bottom==='undefined'){bottom='';}
else if(bottom>0){bottom+='px';}
$(targetId).css({position:pos,top:top,bottom:bottom});}
function getDimensions(selector)
{var dimensions={top:Math.round($(selector).offset().top),height:Math.round($(selector).outerHeight())};dimensions.bottom=dimensions.top+dimensions.height;return dimensions;}
return{init:init,position:position};}();DDC.SliderAd=function()
{var _animate=false;var _visible=false;var _disable=false;var _height;var _buffer=48;var _sidebarBottom;var _footerTop;var _links;var _targeting;var _pro=0;function init()
{if(DDC.Cookie.get('sldrad')=='disable'){return;}
_sidebarBottom=$('#sidebar').length?Math.round($('#sidebar').offset().top+$('#sidebar').outerHeight()):0;_footerTop=$('#footer').length?Math.round($('#footer').offset().top):0;var hasVertSpace=_footerTop-_sidebarBottom>600;var hasHorizSpace=$(window).width()>980;if(hasVertSpace&&hasHorizSpace){build();$(document).on(DDC.Scroller.event.move,scrolling);$('#slider li a').click(track);$('#slider a.close').click(hide);}}
function build()
{var html=[];html.push("<div class='slider-title'>Advertisement</div>");html.push("<a class='close' href='#'>Close</a>");html.push("<div class='slider-content'></div>");if(_links.length)
{html.push("<h3>Recommended</h3>");html.push("<ul>");for(var i=0;i<_links.length;i++){html.push("<li><a rel='nofollow' href='"+_links[i].url+"' style='background-image: url("+_links[i].image+");'>"+_links[i].title+"</a></li>");}
html.push("</ul>");}
$('<div />').attr({id:'slider'}).addClass('vmig').html(html.join('')).appendTo('body');}
function scrolling(e,data)
{if(!_disable&&!_visible&&data.scrollY>_sidebarBottom){show();}
if(_visible)
{if(data.scrollY<_sidebarBottom){hide();}
else if(!_animate&&(data.scrollY+data.height>_footerTop)){$('#slider').css({position:'absolute',top:(_footerTop-_height-_buffer)+'px',bottom:'auto'});}
else{$('#slider').css({position:'fixed',top:'auto',bottom:_buffer+'px'});}}}
function show()
{_visible=true;_animate=true;$('#slider').animate({'right':'0px'},500,function(){_animate=false;});track('open');var ad=$('<iframe />').attr({src:'/adcode/slider-ad-define.html?t='+_targeting+(_pro?'&p=1':''),width:'300px',height:'250px',frameborder:0});$('#slider').find('.slider-content').html('').append(ad);_height=Math.round($('#slider').outerHeight());}
function hide(e)
{if(typeof(e)!='undefined'){_disable=true;e.preventDefault();DDC.Cookie.set('sldrad','disable',3);track('close');}
$('#slider').animate({'right':'-400px'},500,function(){$(this).css({position:'fixed'});});_visible=false;}
function track(e)
{if(typeof(e)=='object')
{ga('send','event','SliderAd','Click',$(e.target).html());}
else if(e=='open')
{var parts=window.location.pathname.split('/');var section=parts[1];if(section.indexOf('.')>0){section=section.substr(0,section.indexOf('.'));}
ga('send','event','SliderAd','Open',section);}
else if(e=='close')
{ga('send','event','SliderAd','Close');}}
function setLinks(v)
{_links=v;}
function setTargeting(t)
{_targeting=t;}
function setPro(p)
{_pro=p;}
return{init:init,setLinks:setLinks,setTargeting:setTargeting,setPro:setPro};}();DDC.SliderArticle=function()
{var _animate=false;var _visible=false;var _disable=false;var _height;var _buffer=48;var _sidebarBottom;var _footerTop;var _list;function init()
{if(DDC.Cookie.get('sldrad')=='disable'){return;}
_sidebarBottom=$('.sideBox').last().length?Math.round($('.sideBox').last().offset().top+$('.sideBox').last().height()):0;_footerTop=$('.apps-feature').length?Math.round($('.apps-feature').offset().top):0;var hasVertSpace=_footerTop-_sidebarBottom>600;var hasHorizSpace=$(window).width()>980;if(hasVertSpace&&hasHorizSpace){build();$(document).on(DDC.Scroller.event.move,scrolling);$('#slider').on('click','a.primary',track);$('#slider').on('click','a.close',hide);}}
function build()
{if(!_list.length){return;}
var activeList=[];$.each(_list,function(index,item){if(item.enabled){activeList.push(item);}});if(!activeList.length){return;}
var randIndex=Math.floor(Math.random()*activeList.length);var article=activeList[randIndex];var html=[];html.push("<a class='close' href='#'>Close</a>");html.push("<a class='primary' href='"+article.url+"'>");html.push("<div class='img-crop'><img src='"+article.image+"' /></div>");html.push("<span>Recommended Reading</span>");html.push("<b>"+article.title+"</b>");html.push("</a>");$('<div />').attr({id:'slider'}).addClass('slider-article vmig').html(html.join('')).appendTo('body');}
function scrolling(e,data)
{if(!_disable&&!_visible&&data.scrollY>_sidebarBottom){show();}
if(_visible)
{if(data.scrollY<_sidebarBottom){hide();}
else if(!_animate&&(data.scrollY+data.height>_footerTop)){$('#slider').css({position:'absolute',top:(_footerTop-_height-_buffer)+'px',bottom:'auto'});}
else{$('#slider').css({position:'fixed',top:'auto',bottom:_buffer+'px'});}}}
function show()
{_visible=true;_animate=true;$('#slider').animate({'right':'0px'},1000,function(){_animate=false;});track('open');_height=Math.round($('#slider').outerHeight());}
function hide(e)
{if(typeof(e)!='undefined'){_disable=true;e.preventDefault();DDC.Cookie.set('sldrad','disable',3);track('close');}
$('#slider').animate({'right':'-400px'},500,function(){$(this).css({position:'fixed'});});_visible=false;}
function track(e)
{if(typeof(e)=='object')
{ga('send','event','SliderArticle','Click',$(e.target).closest('a').find('b').text());}
else if(e=='open')
{var parts=window.location.pathname.split('/');var section=parts[1];if(section.indexOf('.')>0){section=section.substr(0,section.indexOf('.'));}
ga('send','event','SliderArticle','Open',section);}
else if(e=='close')
{ga('send','event','SliderArticle','Close');}}
function setList(v)
{_list=v;}
return{init:init,setList:setList};}();DDC.SliderGravity=function()
{var _animate=false;var _visible=false;var _disable=false;var _height;var _buffer=48;var _sidebarBottom;var _footerTop;function init()
{if(DDC.Cookie.get('sldrad')=='disable'){return;}
_sidebarBottom=$('#sidebar').length?Math.round($('#sidebar').offset().top+$('#sidebar').outerHeight()):0;_footerTop=$('#footer').length?Math.round($('#footer').offset().top):0;var hasVertSpace=_footerTop-_sidebarBottom>600;var hasHorizSpace=$(window).width()>980;if(hasVertSpace&&hasHorizSpace){$(document).on(DDC.Scroller.event.move,scrolling);$('#slider a.close').click(hide);}}
function scrolling(e,data)
{if(!_disable&&!_visible&&data.scrollY>_sidebarBottom){show();}
if(_visible)
{if(data.scrollY<_sidebarBottom){hide();}
else if(!_animate&&(data.scrollY+data.height>_footerTop)){$('#slider').css({position:'absolute',top:(_footerTop-_height-_buffer)+'px',bottom:'auto'});}
else{$('#slider').css({position:'fixed',top:'auto',bottom:_buffer+'px'});}}}
function show()
{_visible=true;_animate=true;$('#slider').animate({'right':'0px'},1000,function(){_animate=false;});_height=Math.round($('#slider').outerHeight());}
function hide(e)
{if(typeof(e)!='undefined'){_disable=true;e.preventDefault();DDC.Cookie.set('sldrad','disable',3);track('close');}
$('#slider').animate({'right':'-400px'},500,function(){$(this).css({position:'fixed'});});_visible=false;}
return{init:init};}();DDC.Placeholder=function()
{function init()
{if(document.createElement('input').placeholder!==undefined){return;}
$('.placeholder').each(function(){show(this);$(this).on('blur',show);$(this).on('focus',hide);var form=$(this).closest('form');if(!form.attr('data-placeholder')){form.attr('data-placeholder',1).on('submit',submit);}});}
function show(target)
{if(target.target){target=target.target;}
if($(target).val()===''){$(target).val($(target).attr('placeholder')).addClass('placeholding');}}
function hide(target)
{if(target.target){target=target.target;}
if($(target).val()==$(target).attr('placeholder')){$(target).val('').removeClass('placeholding');}}
function submit(e)
{$('.placeholder').each(function(){hide(this);});}
return{init:init};}();DDC.Pro=function()
{function init()
{$('#nav-pro').click(track);}
function track()
{DDC.Cookie.set('proclick',1,90);ga('send','event','Pro','MenuClick');}
return{init:init};}();DDC.GoogleMap=function()
{var _mapId='google-map';function init()
{var zoom=$('#gmap-zoom').length?parseInt($('#gmap-zoom').val()):12;var latlng=new google.maps.LatLng($('#gmap-latitude').val(),$('#gmap-longitude').val());var options={zoom:zoom,center:latlng,scaleControl:false,mapTypeControl:false,disableDefaultUI:false,mapTypeId:google.maps.MapTypeId.ROADMAP};var map=new google.maps.Map(document.getElementById(_mapId),options);var marker=new google.maps.Marker({map:map,position:latlng});}
return{init:init};}();function dosageDisambiguation(e,ddc_id,brand_name_id){e.preventDefault();e.stopPropagation();$.ajax({type:'GET',complete:dosageDisambiguationCB,data:'',url:'/dosage-disambiguation.php?ddc_id='+ddc_id+'&brand_name_id='+brand_name_id});return false;}
function dosageDisambiguationCB(response){DDC.Popup.create(response.responseText,{width:350});}
function checkDisclaimerCookies(){var terms_interactions=DDC.Cookie.get('terms_interactions');if(terms_interactions){document.getElementById('nav').innerHTML=document.getElementById('nav').innerHTML.replace('drug_interactions.html','drug_interactions.php');}
var terms_pillid=DDC.Cookie.get('terms_pillid');if(terms_pillid){document.getElementById('nav').innerHTML=document.getElementById('nav').innerHTML.replace('pill_identification.html','imprints.php');}}
function mayoImageToggle(obj,evt,id){window.location='#Image_'+id;document.getElementById('Image_'+id).innerHTML=obj.innerHTML;var els=document.getElementsByClassName('mayoImageThumb');for(i=0;i<els.length;i++){els[i].className="mayoImageThumb";}
obj.className="mayoImageThumb mayoImageThumbSelected";}
function surveyGet(){$.ajax({type:'POST',data:{a:window.location.href},url:'/survey/get.php',success:function(data){$('#survey').html(data);}});}
function surveyClose(id){$.ajax({type:'POST',data:{a:id},async:false,url:'/survey/close.php',success:function(data){$('#surveyContent').html(data);}});}
function topRelatedOtherConditions(ddc_id,brand_name_id,max_conditions,title){$('#topRelatedOtherConditions').html('<img src="/img/loading.gif" />');$('#topRelatedOtherConditions').html($.ajax({type:"GET",url:"/top-related-other-conditions.php?ddc_id="+ddc_id+"&brand_name_id="+brand_name_id+"&max_conditions="+max_conditions+"&title="+title,async:false}).responseText);}
function conditionDrugLog(condition_id,ddc_id,brand_name_id){var url="/js/condition-drug-log.php?condition_id="+condition_id+"&ddc_id="+ddc_id+"&brand_name_id="+brand_name_id;$.ajax({url:url,async:false});}
function drugConditionLog(ddc_id,brand_name_id,condition_id){var url="/js/drug-condition-log.php?ddc_id="+ddc_id+"&brand_name_id="+brand_name_id+"&condition_id="+condition_id;$.ajax({url:url,async:false});}
DDC.Agent=function()
{var _os={};var _mobile={};var _browser={};return{isOS:{Windows:function(){if(typeof _os.windows==='undefined'){_os.windows=/Win/i.test(navigator.userAgent);}
return _os.windows;},Mac:function(){if(typeof _os.mac==='undefined'){_os.mac=/Mac/i.test(navigator.userAgent);}
return _os.mac;},Unix:function(){if(typeof _os.unix==='undefined'){_os.unix=/X11/i.test(navigator.userAgent);}
return _os.unix;},Linux:function(){if(typeof _os.linux==='undefined'){_os.linux=/Linux/i.test(navigator.userAgent);}
return _os.linux;}},isMobile:{Any:function(){return DDC.Agent.isMobile.Android()||DDC.Agent.isMobile.BlackBerry()||DDC.Agent.isMobile.iOS()||DDC.Agent.isMobile.Windows();},iOS:function(){return DDC.Agent.isMobile.iPhone()||DDC.Agent.isMobile.iPad()||DDC.Agent.isMobile.iPod();},Android:function(){if(typeof _mobile.android==='undefined'){_mobile.android=/Android.+Mobile/i.test(navigator.userAgent);}
return _mobile.android;},BlackBerry:function(){if(typeof _mobile.blackberry==='undefined'){_mobile.blackberry=/BlackBerry/i.test(navigator.userAgent);}
return _mobile.blackberry;},iPhone:function(){if(typeof _mobile.iphone==='undefined'){_mobile.iphone=/iPhone/i.test(navigator.userAgent);}
return _mobile.iphone;},iPad:function(){if(typeof _mobile.ipad==='undefined'){_mobile.ipad=/iPad/i.test(navigator.userAgent);}
return _mobile.ipad;},iPod:function(){if(typeof _mobile.ipod==='undefined'){_mobile.ipod=/iPod/i.test(navigator.userAgent);}
return _mobile.ipod;},Windows:function(){if(typeof _mobile.windows==='undefined'){_mobile.windows=/IEMobile/i.test(navigator.userAgent);}
return _mobile.windows;}},isBrowser:{Chrome:function(){if(typeof _browser.chrome==='undefined'){_browser.chrome=!!window.chrome&&!DDC.Agent.isBrowser.Opera();}
return _browser.chrome;},Firefox:function(){if(typeof _browser.firefox==='undefined'){_browser.firefox=typeof InstallTrigger!=='undefined';}
return _browser.firefox;},IE:function(){if(typeof _browser.ie==='undefined'){_browser.ie=/*@cc_on!@*/false||!!document.documentMode||navigator.userAgent.indexOf(' Edge/')>=0;}
return _browser.ie;},Opera:function(){if(typeof _browser.opera==='undefined'){_browser.opera=!!window.opera||navigator.userAgent.indexOf(' OPR/')>=0;}
return _browser.opera;},Safari:function(){if(typeof _browser.safari==='undefined'){_browser.safari=Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor')>0;}
return _browser.safari;}}};}();DDC.TextHighlight=function()
{function init(){document.addEventListener("click",track);}
function track(){var url=window.location.href;if(url.match(/^https:\/\/www\.drugs\.com\//)){var selected_text=window.getSelection().toString().trim();var re=new RegExp(selected_text,'i');if(selected_text&&selected_text.length<=50&&selected_text.length>=3&&selected_text.match(/^[a-zA-Z0-9\s]+$/)&&!url.match(re)){var r=new XMLHttpRequest();r.open("POST","/text-highlight-log.php",true);r.setRequestHeader("Content-type","application/x-www-form-urlencoded");r.send("url="+url+"&selected_text="+selected_text);}}}
return{init:init};}();;(function($){var items={'noninteraction':[],'click':[]};var _eventsRecorded={};function track(data){var data=data||{},category=data['ga_eventCategory']||false,action=data['ga_eventAction']||false,label=data['ga_eventLabel']||"",value=data['ga_eventValue']||0,nonInteraction=data['ga_eventNoninteraction']||false;if(category&&BROWSER.isMobile){category+='-Mobile';}
if(category&&action){if(typeof console=="object"){console.log("ga_event: ",[category,action,label,value,nonInteraction]);}
ga('send','event',category,action,label,value,{'nonInteraction':1});}};function trackOnce(data){var key=[data.ga_eventCategory,data.ga_eventAction,data.ga_eventLabel].join('-');if(_eventsRecorded[key]){return;}
_eventsRecorded[key]=true;track(data);}
var init=function init(){if(typeof(ga)==="undefined"){return;}
$(".ga-event").each(function(index,el){var $self=$(el),data=$self.data()||{'ga_eventNoninteraction':false};if(data['ga_eventNoninteraction']){items['noninteraction'].push(el);track(data);}
else{items['click'].push(el);$self.click(function(e){track(data);});}});};$.ga_events={init:init,items:items,track:track,trackOnce:trackOnce};$(init);})(jQuery);;var DDC=window.DDC||{};DDC.Menu=function()
{var _stickyNav={visible:false,duration:810,browse:{}};var _timer={inside:false,outside:false};var _doSearchTimeoutId;function init()
{initIEOffScreen();initOffCanvas();loadSubNav();setupSearchSelect();$('#nav').on('click','a',recordClick);$('#header .user-account').on('click','a',recordClick);}
function loadSubNav()
{return $('<div />').load('/js/nav-subnav.html',function(){$(this).children('div').each(function(){var navId='#'+$(this).attr('id').replace('subnav-','nav-');$(navId).append($(this));});});}
function setupStickyNav()
{if(BROWSER.isIE6||BROWSER.isIE7||BROWSER.isIE8||BROWSER.isIE9||BROWSER.isMobile){return;}
$('.top-container').clone().addClass('sticky-nav').appendTo('body');$("<div class='sticky-nav-browse clearAfter'></div>").appendTo('body');$(document).on(DDC.Scroller.event.move,scrolling);$(document).on(DDC.Scroller.event.top,hideStickyNav);$('.sticky-nav').find('#livesearch-main').attr('id','livesearch-main-sticky');DDC.Search.init('.sticky-nav');$('.sticky-nav-browse').load('/js/nav-browsemenu.html');$('.sticky-nav-browse-toggle').on('mouseover',function(e){window.clearTimeout(_timer.inside);window.clearTimeout(_timer.outside);showBrowseMenu();});$('.sticky-nav-browse-toggle').on('mouseleave',function(e){window.clearTimeout(_timer.inside);_timer.inside=window.setTimeout(hideBrowseMenu,2000);});$('.sticky-nav-browse').on('mouseover',function(e){window.clearTimeout(_timer.inside);window.clearTimeout(_timer.outside);});$('.sticky-nav-browse').on('mouseleave',function(e){window.clearTimeout(_timer.outside);_timer.outside=window.setTimeout(hideBrowseMenu,400);});buildStickyLinks();}
function scrolling(e,data)
{var threshhold=990;if(!_stickyNav.visible&&data.scrollY>threshhold){window.setTimeout(showStickyNav,10);}
else if(_stickyNav.visible&&data.scrollY<threshhold){window.setTimeout(hideStickyNav,10);}}
function showStickyNav()
{if(!BROWSER.isMobile){$('.sticky-nav').removeClass('sticky-nav-up').addClass('sticky-nav-down');window.setTimeout(function(){var wasVisible=_stickyNav.visible;_stickyNav.visible=$('.sticky-nav:visible').length>0;if(!wasVisible&&_stickyNav.visible){trackEvent({ga_eventCategory:'Sticky Nav',ga_eventAction:'Show',ga_eventNoninteraction:true});}},_stickyNav.duration);}}
function hideStickyNav()
{hideBrowseMenu();$('.sticky-nav').removeClass('sticky-nav-down').addClass('sticky-nav-up');window.setTimeout(function(){_stickyNav.visible=false;},_stickyNav.duration);}
function showBrowseMenu()
{$('.sticky-nav-browse').removeClass('sticky-nav-browse-up').addClass('sticky-nav-browse-down');}
function hideBrowseMenu()
{if($('.sticky-nav-browse').hasClass('sticky-nav-browse-down')){$('.sticky-nav-browse').removeClass('sticky-nav-browse-down').addClass('sticky-nav-browse-up');}}
function setupSearchSelect()
{$('.searchDropdownBox').change(function(){var label=$(this).children('option:selected').text();$(this).closest('.search-wrapper').find('.nav-search-in-content').text(label);});}
function buildStickyLinks()
{var html=[];html.push("<div class='menu-nav-inline'>");html.push('<ul>');$('[data-menu-inline]').each(function(){var name=$(this).attr('data-menu-inline');var href=$(this).find('> a').attr('href');html.push("<li data-menu-link='"+name+"'><a href='"+href+"'>"+name+"</a></li>");});html.push('</ul>');html.push('</div>');$('.header-side-box').prepend(html.join(''));}
function initIEOffScreen()
{if(BROWSER.isIELessThan9||false){if(typeof console=="object")console.log('DDC.Menu.initIEOffScreen');var moveMenuOffScreen=debounce(function _moveMenuOffScreen(){var menuLeftEdgePlace=($(window).width());$('.menu').css('left',menuLeftEdgePlace);},250);moveMenuOffScreen();$(window).resize(moveMenuOffScreen);}}
function debounce(func,wait,immediate)
{var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};}
function initOffCanvas()
{if(typeof console=="object")console.log('DDC.Menu.initOffCanvas');var isOffCanvasAlwaysEnabled=BROWSER.isIELessThan9||$('html').hasClass('touch');var offCanvasShowsWidth=1023;$(".open-panel").click(function(e){e.preventDefault();$("html").addClass("openNav");if(!$('.nav_link.active').length){$('.menu_account').find('.nav_link').addClass('active');$('.menu_account').find('.nav_folder').addClass('active');}});$(".close-panel, #content").click(function(e){$("html").removeClass("openNav");});$('.nav_menu').on('click','.dropnav a.nav_link',function(e){if(isOffCanvasAlwaysEnabled||$(window).width()<offCanvasShowsWidth){if($(this).parents('.openNav').length){e.preventDefault();}
var justClosing=$(this).hasClass('active');var $activeMenu=$('.dropnav a.nav_link.active');if($activeMenu.length){var $activeMenuList=$activeMenu.next();$activeMenuList.removeClass('active').slideUp({duration:'fast',complete:function(){$activeMenuList.attr('style','');}});$activeMenu.removeClass('active');}
if(!justClosing){var $menuList=$(this).next();$menuList.slideDown({duration:'fast',complete:function(){$menuList.addClass('active').attr('style','');}});$(this).addClass('active');}}});}
function recordClick(e)
{var data={ga_eventCategory:'Top Nav'};var $target=$(e.target);data.ga_eventLabel=$target.text();var $dropNav=$target.closest('.dropnav');if($target.closest('a').hasClass('ls-item')){return;}
data.ga_eventAction=$dropNav.find('a.nav_link').text();if(!data.ga_eventAction){data.ga_eventAction=data.ga_eventLabel;}
else if($dropNav.hasClass('logged-in')){if(data.ga_eventLabel===data.ga_eventAction){data.ga_eventLabel="Signed in";}
data.ga_eventAction="Signed in";}
trackEvent(data);}
function recordStickyNavClick(e)
{var data={ga_eventCategory:'Sticky Nav'};var $target=$(e.target);if($target.closest('a').hasClass('header-logo-link')){data.ga_eventAction='Logo';}
else if($target.closest('a').hasClass('ls-item')){return;}
else{data.ga_eventLabel=$target.text();var $dropNav=$target.closest('.dropnav');data.ga_eventAction=$dropNav.find('a.nav_link').text();if(!data.ga_eventAction){data.ga_eventAction=data.ga_eventLabel;}
else if($dropNav.hasClass('logged-in')){data.ga_eventAction="Signed in";if($target.attr('href').match(/\/account$/)){data.ga_eventLabel="";}}}
trackEvent(data);}
function recordStickyNavBrowseClick(e)
{var data={ga_eventCategory:'Sticky Nav',ga_eventAction:'Browse',};var $target=$(e.target);data.ga_eventLabel=$target.text();trackEvent(data);}
function recordStickySearchEvent(event)
{var data={ga_eventCategory:'Sticky Nav',ga_eventAction:'Search',ga_eventNoninteraction:true};if(event.type==='focusin'){data.ga_eventLabel='Focus';data.ga_eventNoninteraction=true;trackEvent(data);}
else{data.ga_eventLabel='Do Search';if(_doSearchTimeoutId){window.clearTimeout(_doSearchTimeoutId);}
_doSearchTimeoutId=window.setTimeout(function(){trackEvent(data);},250);}}
function trackEvent(data){$.ga_events.trackOnce(data);}
return{init:init};}();;var DDC=window.DDC||{};DDC.Header=function()
{var _doSearchTimeoutId;function init()
{if(typeof console=="object")console.log('DDC.Header.init');$('#header [data-tracking="header-logo"]').on("click",recordLogoClick);$('#header .search-main').on("focus","input[name='searchterm']",recordSearchEvent);$('#header .search-main').on("keyup","input[name='searchterm']",recordSearchEvent);$('#header .open-panel.nav-toggle').on("click",recordHamburgerClick);$('#header .alpha-list').on("click","a",recordAlphaSearch);$('#header .search-browse-options').on("click","a",recordAdvancedSearch);}
function recordLogoClick()
{var data={ga_eventCategory:'Top Nav',ga_eventAction:'Logo'};trackEvent(data);}
function recordHamburgerClick()
{var data={ga_eventCategory:'Top Nav',ga_eventAction:'Hamburger'};trackEvent(data);}
function recordSearchEvent(event)
{var data={ga_eventCategory:'Top Nav',ga_eventAction:'Search',ga_eventNoninteraction:true};if(event.type==='focusin'){data.ga_eventLabel='Focus';data.ga_eventNoninteraction=true;trackEvent(data);}
else{data.ga_eventLabel='Do Search';if(_doSearchTimeoutId){window.clearTimeout(_doSearchTimeoutId);}
_doSearchTimeoutId=window.setTimeout(function(){trackEvent(data);},250);}}
function recordAlphaSearch(e)
{var data={ga_eventCategory:'Top Nav',ga_eventAction:'Alpha'};data.ga_eventLabel=$(e.target).text();trackEvent(data);}
function recordAdvancedSearch(e)
{var data={ga_eventCategory:'Top Nav',ga_eventAction:'Advanced Search'};trackEvent(data);}
function trackEvent(data){$.ga_events.trackOnce(data);}
return{init:init};}();