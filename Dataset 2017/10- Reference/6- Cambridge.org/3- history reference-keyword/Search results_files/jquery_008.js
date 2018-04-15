(function($){$.fn.rateit=function(p1,p2){var options={};var mode='init';var capitaliseFirstLetter=function(string){return string.charAt(0).toUpperCase()+ string.substr(1);};if(this.length==0)return this;var tp1=$.type(p1);if(tp1=='object'||p1===undefined||p1==null){options=$.extend({},$.fn.rateit.defaults,p1);}
else if(tp1=='string'&&p2===undefined){return this.data('rateit'+ capitaliseFirstLetter(p1));}
else if(tp1=='string'){mode='setvalue'}
return this.each(function(){var item=$(this);var itemdata=function(key,value){arguments[0]='rateit'+ capitaliseFirstLetter(key);return item.data.apply(item,arguments);};if(!item.hasClass('rateit'))item.addClass('rateit');var ltr=item.css('direction')!='rtl';if(mode=='setvalue'){if(!itemdata('init'))throw'Can\'t set value before init';if(p1=='readonly'&&!itemdata('readonly')){item.find('.rateit-range').unbind();itemdata('wired',false);}
if(p1=='value'&&p2==null)p2=itemdata('min');if(itemdata('backingfld')){var fld=$(itemdata('backingfld'));if(p1=='value')fld.val(p2);if(p1=='min'&&fld[0].min)fld[0].min=p2;if(p1=='max'&&fld[0].max)fld[0].max=p2;if(p1=='step'&&fld[0].step)fld[0].step=p2;}
itemdata(p1,p2);}
if(!itemdata('init')){itemdata('min',itemdata('min')||options.min);itemdata('max',itemdata('max')||options.max);itemdata('step',itemdata('step')||options.step);itemdata('readonly',itemdata('readonly')!==undefined?itemdata('readonly'):options.readonly);itemdata('resetable',itemdata('resetable')!==undefined?itemdata('resetable'):options.resetable);itemdata('backingfld',itemdata('backingfld')||options.backingfld);itemdata('starwidth',itemdata('starwidth')||options.starwidth);itemdata('starheight',itemdata('starheight')||options.starheight);itemdata('value',itemdata('value')||options.value||options.min);itemdata('ispreset',itemdata('ispreset')!==undefined?itemdata('ispreset'):options.ispreset);if(itemdata('backingfld')){var fld=$(itemdata('backingfld'));itemdata('value',fld.hide().val());if(fld.attr('disabled')||fld.attr('readonly'))
itemdata('readonly',true);if(fld[0].nodeName=='INPUT'){if(fld[0].type=='range'||fld[0].type=='text'){itemdata('min',parseInt(fld.attr('min'))||itemdata('min'));itemdata('max',parseInt(fld.attr('max'))||itemdata('max'));itemdata('step',parseInt(fld.attr('step'))||itemdata('step'));}}
if(fld[0].nodeName=='SELECT'&&fld[0].options.length>1){itemdata('min',Number(fld[0].options[0].value));itemdata('max',Number(fld[0].options[fld[0].length- 1].value));itemdata('step',Number(fld[0].options[1].value)- Number(fld[0].options[0].value));}}
item.append('<div class="rateit-reset"></div><div class="rateit-range"><div class="rateit-selected" style="height:'+ itemdata('starheight')+'px"></div><div class="rateit-hover" style="height:'+ itemdata('starheight')+'px"></div></div>');if(!ltr){item.find('.rateit-reset').css('float','right');item.find('.rateit-selected').addClass('rateit-selected-rtl');item.find('.rateit-hover').addClass('rateit-hover-rtl');}
itemdata('init',true);}
var range=item.find('.rateit-range');range.width(itemdata('starwidth')*(itemdata('max')- itemdata('min'))).height(itemdata('starheight'));var presetclass='rateit-preset'+((ltr)?'':'-rtl');if(itemdata('ispreset'))
item.find('.rateit-selected').addClass(presetclass);else
item.find('.rateit-selected').removeClass(presetclass);if(itemdata('value')!=null){var score=(itemdata('value')- itemdata('min'))*itemdata('starwidth');item.find('.rateit-selected').width(score);}
var resetbtn=item.find('.rateit-reset');if(resetbtn.data('wired')!==true){resetbtn.click(function(){itemdata('value',itemdata('min'));range.find('.rateit-hover').hide().width(0);range.find('.rateit-selected').width(0).show();if(itemdata('backingfld'))$(itemdata('backingfld')).val(itemdata('min'));item.trigger('reset');}).data('wired',true);}
var calcRawScore=function(element,event){var pageX=(event.changedTouches)?event.changedTouches[0].pageX:event.pageX;var offsetx=pageX- $(element).offset().left;if(!ltr)offsetx=range.width()- offsetx;if(offsetx>range.width())offsetx=range.width();if(offsetx<0)offsetx=0;return score=Math.ceil(offsetx/itemdata('starwidth')*(1/itemdata('step')));};if(!itemdata('readonly')){if(!itemdata('resetable'))
resetbtn.hide();if(!itemdata('wired')){range.bind('touchmove touchend',touchHandler);range.mousemove(function(e){var score=calcRawScore(this,e);var w=score*itemdata('starwidth')*itemdata('step');var h=range.find('.rateit-hover');if(h.data('width')!=w){range.find('.rateit-selected').hide();h.width(w).show().data('width',w);var data=[(score*itemdata('step'))+ itemdata('min')];item.trigger('hover',data).trigger('over',data);}});range.mouseleave(function(e){range.find('.rateit-hover').hide().width(0).data('width','');item.trigger('hover',[null]).trigger('over',[null]);range.find('.rateit-selected').show();});range.mouseup(function(e){var score=calcRawScore(this,e);var newvalue=(score*itemdata('step'))+ itemdata('min');itemdata('value',newvalue);if(itemdata('backingfld')){$(itemdata('backingfld')).val(newvalue);}
if(itemdata('ispreset')){range.find('.rateit-selected').removeClass(presetclass);itemdata('ispreset',false);}
range.find('.rateit-hover').hide();range.find('.rateit-selected').width(score*itemdata('starwidth')*itemdata('step')).show();item.trigger('hover',[null]).trigger('over',[null]).trigger('rated',[newvalue]);});itemdata('wired',true);}
if(itemdata('resetable')){resetbtn.show();}}
else{resetbtn.hide();}});};function touchHandler(event){var touches=event.originalEvent.changedTouches,first=touches[0],type="";switch(event.type){case"touchmove":type="mousemove";break;case"touchend":type="mouseup";break;default:return;}
var simulatedEvent=document.createEvent("MouseEvent");simulatedEvent.initMouseEvent(type,true,true,window,1,first.screenX,first.screenY,first.clientX,first.clientY,false,false,false,false,0,null);first.target.dispatchEvent(simulatedEvent);event.preventDefault();};$.fn.rateit.defaults={min:0,max:5,step:0.5,starwidth:16,starheight:16,readonly:false,resetable:true,ispreset:false};$(function(){$('div.rateit').rateit();});})(jQuery);