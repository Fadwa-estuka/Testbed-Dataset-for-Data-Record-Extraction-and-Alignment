(function($,window,document){'use strict';var
msVersion=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/),msie=!!msVersion,ie6=msie&&parseFloat(msVersion[1])<7,isMobile=navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i),methods={},lists=[],keyMap={'left':37,'up':38,'right':39,'down':40,'enter':13,'tab':9,'zero':48,'z':90,'last':221},dropdownTemplate=['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">','<a class="dk_toggle">','<span class="dk_label">{{ label }}</span>','</a>','<div class="dk_options">','<ul class="dk_options_inner">','</ul>','</div>','</div>'].join(''),optionTemplate='<li class="{{ current }} {{ disabled }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',defaults={startSpeed:400,theme:false,changes:false,syncReverse:true,nativeMobile:true},$opened=null,$focused=null,updateFields=function(option,$dk,reset){var value,label,data,$select;value=option.attr('data-dk-dropdown-value');label=option.text();data=$dk.data('dropkick');$select=data.$select;$select.val(value).trigger('change');$dk.find('.dk_label').text(label);reset=reset||false;if(data.settings.change&&!reset&&!data.settings.syncReverse){data.settings.change.call($select,value,label);}
if($.isFunction(changeDkLabel)){changeDkLabel($dk,label);}},closeDropdown=function($dk){$dk.removeClass('dk_open');$opened=null;},enoughSpace=function($dk){return true;var
$dk_toggle=$dk.find('.dk_toggle'),optionsHeight=$dk.find('.dk_options').outerHeight(),spaceBelow=$(window).height()- $dk_toggle.outerHeight()- $dk_toggle.offset().top+ $(window).scrollTop(),spaceAbove=$dk_toggle.offset().top- $(window).scrollTop();return!(optionsHeight<spaceAbove)?true:(optionsHeight<spaceBelow);},setScrollPos=function($dk,anchor,e){var
wrapper=$dk.find('.dk_options_inner'),height=anchor.prevAll('li').outerHeight()*anchor.prevAll('li').length,minHeight=wrapper.scrollTop(),maxHeight=wrapper.height()+ wrapper.scrollTop()- anchor.outerHeight();if((e&&e.type==='keydown')||(height<minHeight||height>maxHeight)){wrapper.scrollTop(height);}},openDropdown=function($dk,e){var hasSpace=enoughSpace($dk);$dk.find('.dk_options').css({top:hasSpace?$dk.find('.dk_toggle').outerHeight()- 1:'',bottom:hasSpace?'':$dk.find('.dk_toggle').outerHeight()- 1});$opened=$dk.toggleClass('dk_open');setScrollPos($dk,$dk.find('.dk_option_current'),e);},setCurrent=function($current,$dk,e){$dk.find('.dk_option_current').removeClass('dk_option_current');$current.addClass('dk_option_current');setScrollPos($dk,$current,e);},handleKeyBoardNav=function(e,$dk){var
code=e.keyCode,data=$dk.data('dropkick'),letter=String.fromCharCode(code),options=$dk.find('.dk_options'),open=$dk.hasClass('dk_open'),lis=options.find('li'),current=$dk.find('.dk_option_current'),first=lis.first(),last=lis.last(),next,prev,now,list,i,l,$a;switch(code){case keyMap.enter:if(open){if(!current.hasClass('disabled')){updateFields(current.find('a'),$dk);closeDropdown($dk);}}else{openDropdown($dk,e);}
e.preventDefault();break;case keyMap.tab:if(open){updateFields(current.find('a'),$dk);closeDropdown($dk);}
break;case keyMap.up:prev=current.prev('li');if(open){if(prev.length){setCurrent(prev,$dk,e);}else{setCurrent(last,$dk,e);}}else{openDropdown($dk,e);}
e.preventDefault();break;case keyMap.down:if(open){next=current.next('li').first();if(next.length){setCurrent(next,$dk,e);}else{setCurrent(first,$dk,e);}}else{openDropdown($dk,e);}
e.preventDefault();break;default:break;}
if(code>=keyMap.zero&&code<=keyMap.z){now=new Date().getTime();if(data.finder===null||typeof(data.finder)==='undefined'){data.finder=letter.toUpperCase();data.timer=now;}else{if(now>parseInt(data.timer,10)+ 1000){data.finder=letter.toUpperCase();data.timer=now;}else{data.finder=data.finder+ letter.toUpperCase();data.timer=now;}}
list=lis.not('.disabled').find('a');for(i=0,l=list.length;i<l;i++){$a=$(list[i]);if($a.html().toUpperCase().indexOf(data.finder)===0){updateFields($a,$dk);setCurrent($a.parent(),$dk,e);break;}}
$dk.data('dropkick',data);}},notBlank=function(text){return($.trim(text).length>0)?text:false;},build=function(tpl,view){var
template=tpl.replace('{{ id }}',view.id).replace('{{ label }}',view.label).replace('{{ tabindex }}',view.tabindex),options=[],$dk,i,l,$option,oTemplate;if(view.options&&view.options.length){for(i=0,l=view.options.length;i<l;i++){$option=$(view.options[i]);(i===0&&$option.attr('selected')!==undefined&&$option.attr('disabled')!==undefined)?oTemplate=null:oTemplate=optionTemplate.replace('{{ value }}',$option.val()).replace('{{ current }}',(notBlank($option.val())===view.value)?'dk_option_current':'').replace('{{ disabled }}',($option.attr('disabled')!==undefined)?'disabled':'').replace('{{ text }}',jQuery.trim($option.html()));options[options.length]=oTemplate;}}
$dk=$(template);$dk.find('.dk_options_inner').html(options.join(''));return $dk;};if(!ie6){document.documentElement.className=document.documentElement.className+' dk_fouc';}
methods.init=function(settings){settings=$.extend({},defaults,settings);return this.each(function(){var
$select=$(this),$original=$select.find(':selected').first(),$options=$select.find('option'),data=$select.data('dropkick')||{},id=$select.attr('id')||$select.attr('name'),width=settings.width||$select.outerWidth(),tabindex=$select.attr('tabindex')||'0',$dk=false,theme,$form;if(data.id){return $select;}
data.settings=settings;data.tabindex=tabindex;data.id=id;data.$original=$original;data.$select=$select;data.value=notBlank($select.val())||notBlank($original.attr('value'));data.label=$original.text();data.options=$options;$dk=build(dropdownTemplate,data);$dk.find('.dk_toggle').css({'width':width+'px'});$select.before($dk);$dk=$('div[id="dk_container_'+ id+'"]').fadeIn(settings.startSpeed);theme=settings.theme||'default';$dk.addClass('dk_theme_'+ theme);data.theme=theme;data.$dk=$dk;$select.data('dropkick',data);$dk.data('dropkick',data);lists[lists.length]=$select;$dk.bind('focus.dropkick',function(){$focused=$dk.addClass('dk_focus');}).bind('blur.dropkick',function(){$dk.removeClass('dk_focus');$focused=null;});if(isMobile&&data.settings.nativeMobile){$dk.addClass('dk_mobile');}
if(data.settings.syncReverse){$select.on('change',function(e){var
value=$select.val(),option=$('a[data-dk-dropdown-value="'+value+'"]',$dk),label=option.text();$dk.find('.dk_label').text(label);data.settings.change&&data.settings.change.call($select,value,label);setCurrent(option.parent(),$dk,e);});}
if($select.attr('form')||$select.closest('form').length){$form=$select.attr('form')?$('#'+$select.attr('form').replace(' ',', #')):$select.closest('form');$form.on('reset',function(){$select.dropkick('reset')});}
setTimeout(function(){$select.hide();},0);});};methods.theme=function(newTheme){var
data=$(this).data('dropkick'),$dk=data.$dk,oldtheme='dk_theme_'+ data.theme;$dk.removeClass(oldtheme).addClass('dk_theme_'+ newTheme);data.theme=newTheme;};methods.reset=function(){return this.each(function(){var
data=$(this).data('dropkick'),$dk=data.$dk,$current=$('a[data-dk-dropdown-value="'+data.value+'"]',$dk);!data.$original.eq(0).prop('selected')&&data.$original.eq(0).prop('selected',true);$dk.find('.dk_label').text(data.label);setCurrent($current.parent(),$dk);});};methods.setValue=function(value){var
$dk=$(this).data('dropkick').$dk,$option=$('.dk_options a[data-dk-dropdown-value="'+ value+'"]',$dk);if($option.length){updateFields($option,$dk);setCurrent($option.parent(),$dk);}else{console.warn('There is no option with this value in the <select>');}};methods.refresh=function(){return this.each(function(){var data=$(this).data('dropkick');if(typeof data!=='undefined'){var
$select=data.$select,$dk=data.$dk;data.settings.startSpeed=0;$select.removeData("dropkick").insertAfter($dk);$dk.remove();$select.dropkick(data.settings);}});};$.fn.dropkick=function(method){if(!ie6){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}
if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}}};$(function(){$(document).on((msie?'mousedown':'click'),'.dk_options a',function(){var
$option=$(this),$dk=$option.parents('.dk_container').first();if(!$option.parent().hasClass('disabled')){updateFields($option,$dk);setCurrent($option.parent(),$dk);closeDropdown($dk);}
return false;});$(document).bind('keydown.dk_nav',function(e){var $dk=null;if($opened){$dk=$opened;}else if($focused&&!$opened){$dk=$focused;}
if($dk){handleKeyBoardNav(e,$dk);}});$(document).on('click',null,function(e){if($opened&&$(e.target).closest(".dk_container").length===0){closeDropdown($opened);}else if($(e.target).is(".dk_toggle, .dk_label")){var $dk=$(e.target).parents('.dk_container').first();if($dk.hasClass('dk_open')){closeDropdown($dk);}else{$opened&&closeDropdown($opened);openDropdown($dk,e);}
return false;}});var wheelSupport='onwheel'in window?'wheel':'onmousewheel'in document?'mousewheel':"MouseScrollEvent"in window?'DOMMouseScroll MozMousePixelScroll':false;wheelSupport&&$(document).on(wheelSupport,'.dk_options_inner',function(event){var delta=event.originalEvent.wheelDelta||-event.originalEvent.deltaY||-event.originalEvent.detail;if(msie){this.scrollTop-=Math.round(delta/10);return false;}
return(delta>0&&this.scrollTop<=0)||(delta<0&&this.scrollTop>=this.scrollHeight- this.offsetHeight)?false:true;});});}(jQuery,window,document));