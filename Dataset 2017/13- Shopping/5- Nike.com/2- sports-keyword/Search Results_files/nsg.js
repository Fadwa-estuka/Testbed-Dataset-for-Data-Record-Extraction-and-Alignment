nsg.init=function(e){"use strict";nsg.loadDropDown(),nsg.loadDropDown2(),nsg.loadToggle(),nsg.loadFlyOut(),window.jQuery&&$(function(){if($("[data-nsg-plugin]").each(function(){var e=$(this),t=e.data("nsg-plugin");switch(t){case"drop-down":e.nsgDropDown2();break;case"select-box":e.nsgDropDown();break;case"flyout":e.nsgFlyOut()}}),setTimeout(function(){$('[data-nsg-plugin="toggle"]').each(function(){$(this).nsgToggle()})},1e3),nsg.initCTA(),"function"==typeof e)return e.call()}),this.isInit=!0},nsg.triggerReady=function(){"use strict";nsg.isReady||(nsg.isReady=!0,$(document).trigger("nsgReady"))},nsg.initCTA=function(){"use strict";$(".nsg-button[data-nsg-icon]").each(function(){var e=$(this),t=e.data("nsg-icon"),s=e.data("nsg-icon-align")?e.data("nsg-icon-align"):"left",o=$("<i/>",{"class":"nsg-button-icon nsg-icon-"+s}),n=t.search("nsg-glyph")!==-1?o.addClass(t):o.css({"background-image":"url("+t+")"});"right"===s?e.append(n):e.prepend(n)}),$(".nsg-button[data-nsg-mode]").each(function(){var e=$(this),t=e.data("nsg-mode")?e.data("nsg-mode"):"regular",s="nsg-mode--"+t;t&&e.addClass(s).removeAttr("data-nsg-mode")})},nsg.loadDropDown=function(){!function(e){e.extend(e.fn,{nsgDropDown:function(t,s){var o,n=e(this),a="",i={isMobile:function(){var e=navigator.userAgent;return"mobile"==nsgConfig.PLATFORM||e.match(/iPhone/i)||e.match(/Android/i)&&e.match(/mobile/i)},isTag:function(e,t){return e.tagName.toLowerCase()===t},isDefined:function(e){return void 0!==e},destroy:function(t){t=e(t);var s=t.data("selectBox-control"),o=s.data("selectBox-options");s&&(o.remove(),s.remove(),t.removeClass("selectBox").removeData("selectBox-control").removeData("selectBox-settings").show())},setDisable:function(t,s){var o=e(t),n=o.data("selectBox-control");o.attr("disabled",s),n&&(s?n.addClass("selectBox-disabled"):n.removeClass("selectBox-disabled"))},enable:function(e){i.setDisable(e,!1)},disable:function(e){i.setDisable(e,!0)},showMenu:function(t){t=e(t);var s,o=t.data("selectBox-control"),n=t.data("selectBox-settings"),a=t.data("has-fixed-ancestor"),l=o.data("selectBox-options"),d=n.parentOffset?o.parent():o;if(!o.hasClass("selectBox-disabled")){i.hideMenus(),d.addClass("selectBox-open"),o.addClass("selectBox-menuShowing"),o.parent().addClass("is-selected"),n.autoWidth&&!o.next().is("div")&&l.css("width",o.parent().outerWidth());var r=o.height(),c=0,u=l.width();a&&(r-=e(window).scrollTop(),c-=e(window).scrollLeft()),t.data("selectBox-scroll")&&(s=l.parent(),s.css({top:r,left:c,width:u}).show()),o.parents(".modal").length&&l.addClass("selectBox-modal");var p=function(){t.triggerHandler("open",{_selectBox:!0})};switch(n.menuTransition){case"fade":l.fadeIn(n.menuSpeed,p);break;case"slide":l.slideDown(n.menuSpeed,p);break;default:l.show(n.menuSpeed,p)}n.menuSpeed||p(),e("html").hasClass("ie9")&&l.get(0).scrollHeight>e(l.get(0)).outerHeight()&&l.css("width",o.parent().outerWidth()+17);var h=l.find(".is-selected:first");i.keepOptionInView(t,h,!0),i.addHover(t,h),o.siblings(".dropdown-label").addClass("selectBox-label-showing"),e(document).bind("mousedown.selectBox touchend.selectBox",function(t){e(t.target).parents().andSelf().hasClass("selectBox-options")||(e(t.target).parents().andSelf().hasClass("selectBox-label-showing")&&t.stopPropagation(),e(t.target)!==e(".nsg-form--drop-down")&&i.hideMenus())}),n.initScrollbar&&i.initScrollbar(t)}},hideMenus:function(){0!==e(".selectBox-dropdown-menu").length&&(e(document).off("mousedown.selectBox"),e(".selectBox-dropdown-menu").each(function(){var t=e(this),s=t.data("selectBox-select"),o=s.data("selectBox-control");if(!s.parents("body").length)return s.off(),t.off(),t.remove(),void s.remove();var n=function(){s.triggerHandler("close",{_selectBox:!0})},a=s.data("selectBox-settings"),i=a.parentOffset?o.parent():o;switch(a.menuTransition){case"fade":t.fadeOut(a.menuSpeed,n);break;case"slide":t.slideUp(a.menuSpeed,n);break;default:t.hide(a.menuSpeed,n)}s.data("selectBox-scroll")&&t.parent().hide(),a.menuSpeed||n(),i.removeClass("selectBox-open"),o.removeClass("selectBox-menuShowing").end().parent().removeClass("is-selected").end().siblings(".dropdown-label").removeClass("selectBox-label-showing")}))},addHover:function(t,s){t=e(t),s=e(s);var o=t.data("selectBox-control"),n=o.data("selectBox-options");n.find(".is-hover").removeClass("is-hover"),s.addClass("is-hover")},removeHover:function(t,s){t=e(t),s=e(s);var o=t.data("selectBox-control"),n=o.data("selectBox-options");o&&n.find(".is-hover").removeClass("is-hover")},selectOption:function(t,s,o){t=e(t),s=e(s);var n=t.data("selectBox-control");t.data("selectBox-settings");if(!n.hasClass("selectBox-disabled")&&0!==s.length&&!s.hasClass("selectBox-disabled")){if(t.attr("multiple"))if(o.shiftKey&&n.data("selectBox-last-selected")){s.toggleClass("is-selected");var a;a=s.index()>n.data("selectBox-last-selected").index()?s.siblings().slice(n.data("selectBox-last-selected").index(),s.index()):s.siblings().slice(s.index(),n.data("selectBox-last-selected").index()),a=a.not(".selectBox-optgroup, .selectBox-disabled"),s.hasClass("is-selected")?a.addClass("is-selected"):a.removeClass("is-selected")}else o.metaKey?s.toggleClass("is-selected"):(s.siblings().removeClass("is-selected"),s.addClass("is-selected"));else s.siblings().removeClass("is-selected"),s.addClass("is-selected");n.hasClass("selectBox-dropdown")&&n.find(".nsg-form--drop-down--selected-option").text(s.data("label")||s.text());var i=0,l=[];return t.attr("multiple")?n.find(".is-selected").each(function(){l[i++]=e(this).attr("rel")}):l=s.attr("rel"),n.data("selectBox-last-selected",s),t.val()!==l&&(t.val(l),t.trigger("change")),!0}},disableSelection:function(t){e(t).css("MozUserSelect","none").bind("selectstart",function(e){e.preventDefault()})},addWrapper:function(t,s){t=e(t);var o=t.data("selectBox-control"),n=o.data("selectBox-options"),a=n.parent(),i=n.next(),l=e("<div>",{"class":s||""});n.attr("style","").removeClass("selectBox-dropdown-menu").detach().appendTo(l),i.length?l.insertBefore(i):l.appendTo(a),o.data("selectBox-options",l),l.data("selectBox-select",t).addClass(n.attr("class")).addClass("selectBox-dropdown-menu").css("display","none")},setValue:function(t,s){t=e(t),t.val(s),s=t.val();var o=t.data("selectBox-control");if(o){var n=t.data("selectBox-settings"),a=o.data("selectBox-options"),i=o.find(".nsg-form--drop-down--selected-option"),l=t.find("option:selected");i.text(l.data("label")||l.text()||" "),a.find(".is-selected").removeClass("is-selected"),a.find("li").each(function(){if("object"==typeof s&&null!==s)for(var t=0;t<s.length;t++)e(this).attr("rel")==s[t]&&e(this).addClass("is-selected");else e(this).attr("rel")==s&&e(this).addClass("is-selected")}),n.change&&n.change.call(t)}},hasFixedAncestor:function(t){var s=e(t).offsetParent();return 0!=s.length&&!s.is("html, body")&&("fixed"===s.css("position")||i.hasFixedAncestor(s))},handleKeyDown:function(t,s){t=e(t);var o=t.data("selectBox-control"),n=o.data("selectBox-options"),l=0,d=0;if(!o.hasClass("selectBox-disabled"))switch(s.keyCode){case 8:s.preventDefault(),a="";break;case 9:case 27:i.hideMenus(),i.removeHover(t);break;case 13:o.hasClass("selectBox-menuShowing")?(i.selectOption(t,n.find("li.is-hover:first"),s),o.hasClass("selectBox-dropdown")&&i.hideMenus()):i.showMenu(t);break;case 38:case 37:if(s.preventDefault(),o.hasClass("selectBox-menuShowing")){var r=n.find(".is-hover").prev("li");for(l=n.find("li:not(.selectBox-optgroup)").length,d=0;(0===r.length||r.hasClass("selectBox-disabled")||r.hasClass("selectBox-optgroup"))&&(r=r.prev("li"),0===r.length&&(r=n.find("li:last")),!(++d>=l)););i.addHover(t,r),i.keepOptionInView(t,r)}else i.showMenu(t);break;case 40:case 39:if(s.preventDefault(),o.hasClass("selectBox-menuShowing")){var c=n.find(".is-hover").next("li");for(l=n.find("li:not(.selectBox-optgroup)").length,d=0;(0===c.length||c.hasClass("selectBox-disabled")||c.hasClass("selectBox-optgroup"))&&(c=c.next("li"),0===c.length&&(c=n.find("li:first")),!(++d>=l)););i.addHover(t,c),i.keepOptionInView(t,c)}else i.showMenu(t)}},handleKeyPress:function(t,s){t=e(t);var n=t.data("selectBox-control"),l=n.data("selectBox-options");if(!n.hasClass("selectBox-disabled"))switch(s.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:n.hasClass("selectBox-menuShowing")||i.showMenu(t),s.preventDefault(),i.clearTimeout(o),a+=String.fromCharCode(s.charCode||s.keyCode),l.find("li").each(function(){if(e(this).text().substr(0,a.length).toLowerCase()===a.toLowerCase())return i.addHover(t,e(this)),i.keepOptionInView(t,e(this)),!1}),o=setTimeout(function(){a=""},1e3)}},init:function(t,s){if(i.isMobile()||!i.isTag(t,"select"))return!1;if(t=e(t),t.data("selectBox-control"))return!1;var o,n=".nsg-form--drop-down--label",a=t.prev(n).length>0?t.prev(n):void 0,l=t.next(n).length>0?t.next(n):void 0,d=a||l||e('<a class="nsg-form--drop-down--label" />').append('<span class="nsg-form--drop-down--selected-option" />'),r=t.attr("multiple")||parseInt(t.attr("size"),10)>1,c=s||{};if(c.initScrollbar=!!(c.maxItems&&c.maxItems>0&&t.find("option").length>c.maxItems),i.isDefined(c.autoWidth)||(c.autoWidth=!0),d.addClass(t.attr("class")).attr("style",t.attr("style")||"").attr("title",t.attr("title")||"").attr("tabindex",parseInt(t.attr("tabindex"))).on("focusin.selectBox",function(){this!==document.activeElement&&e(document.activeElement).blur(),d.hasClass("selectBox-active")||(d.addClass("selectBox-active").parent().addClass("is-hover"),t.trigger("focusin"))}).on("focusout.selectBox",function(){d.hasClass("selectBox-active")&&(d.removeClass("selectBox-active").parent().removeClass("is-hover"),t.trigger("focusout"))}),t.attr("disabled")&&d.addClass("selectBox-disabled"),i.isDefined(t.data("has-fixed-ancestor"))||t.data("has-fixed-ancestor",i.hasFixedAncestor(t)),r){if(o=i.getOptions(t,"inline",c),d.append(o).data("selectBox-options",o).addClass("selectBox-inline").addClass("selectBox-menuShowing").bind("keydown",function(e){i.handleKeyDown(t,e)}).bind("keypress",function(e){i.handleKeyPress(t,e)}).bind("mousedown",function(t){e(t.target).is(".selectBox-inline")&&t.preventDefault(),d.hasClass("selectBox-focus")||d.focus()}).insertAfter(t),!t[0].style.height){var u=t.attr("size")?parseInt(t.attr("size"),10):5,p=d.clone().removeAttr("id").css({position:"absolute",top:"-9999em"}).show().appendTo(t.parent());p.parent().find(".selectBox-options").html("<li> </li>");var h=parseInt(p.parent().find(".selectBox-options li:first").html("&nbsp;").outerHeight(),10);p.remove(),d.height(h*u)}i.disableSelection(d)}else{d.hasClass("size-dropdown")?d.attr({name:"buying-tools-size-arrow"}):d.hasClass("quantity-dropdown")&&d.attr({name:"buying-tools-quantity-arrow"});var f=d.find(".nsg-form--drop-down--selected-option");f.text(e(t).find("option:selected").data("label")||e(t).find("option:selected").text()||" "),o=i.getOptions(t,"dropdown",c),o.appendTo(t.parent()),i.ellipsis(o),d.data("selectBox-options",o).addClass("selectBox-dropdown").bind("mousedown.selectBox",function(e){d.hasClass("selectBox-menuShowing")||d.hasClass("one-item")||d.parent().hasClass("one-item")?i.hideMenus():(e.stopPropagation(),o.data("selectBox-down-at-x",e.screenX),o.data("selectBox-down-at-y",e.screenY),i.showMenu(t))}).bind("keydown.selectBox",function(e){i.handleKeyDown(t,e)}).bind("keypress.selectBox",function(e){i.handleKeyPress(t,e)}).insertAfter(t),i.disableSelection(d)}t.addClass("selectBox").data("selectBox-control",d).data("selectBox-settings",c).data("selectBox-scroll",c.initScrollbar).hide(),c.initScrollbar&&o.wrap('<div class="selectBox-scroll-wrapper" />');var g=t.parent().find("[selectbox-info]");return g.each(function(){var t=e(this);t.attr("selectBox-extra","extra-info").removeAttr("selectbox-info"),o.data("selectBox-extra-info",!0),o.append(t.clone(!0)),t.remove()}),"function"==typeof c.onSetupComplete?c.onSetupComplete.call():void 0},getOptions:function(t,s,o){var n;switch(s){case"inline":n=e('<ul class="nsg-form--drop-down--option-container selectBox-options" />'),t.find("optgroup").length?t.find("optgroup").each(function(){var t=e('<li class="selectBox-optgroup" />');t.text(e(this).attr("label")),n.append(t),e(this).find('option[value!=""]').each(function(){var t=e('<li class="nsg-form--drop-down--option" />');t.addClass(e(this).attr("class")).attr("rel",e(this).val()).data("label",e(this).data("label")||e(this).text()).text(e(this).text()),e(this).attr("disabled")&&t.addClass("selectBox-disabled"),e(this).attr("selected")&&t.addClass("is-selected"),n.append(t)})}):t.find('option[value!=""]').each(function(){var t=e('<li class="nsg-form--drop-down--option" />');t.addClass(e(this).attr("class")).attr("rel",e(this).val()).data("label",e(this).data("label")||e(this).text()).text(e(this).text()),e(this).attr("disabled")&&t.addClass("selectBox-disabled"),e(this).attr("selected")&&t.addClass("is-selected"),n.append(t)}),n.find("li").on("mouseover.selectBox",function(){i.addHover(t,e(this))}).on("mouseout.selectBox",function(){i.removeHover(t,e(this))}).on("mousedown.selectBox",function(e){e.preventDefault(),t.selectBox("control").hasClass("selectBox-active")||t.selectBox("control").focus()}).on("mouseup.selectBox touchend.selectBox",function(s){i.selectOption(t,e(this),s),i.hideMenus()});break;case"dropdown":n=e('<ul class="nsg-form--drop-down--option-container selectBox-dropdown-menu selectBox-options" />'),n.addClass(t.attr("class")),t.find("optgroup").length?t.find("optgroup").each(function(){var t=e('<li class="selectBox-optgroup" />');t.text(e(this).attr("label")),n.append(t),e(this).find('option[value!=""]').each(function(){var t=e('<li class="nsg-form--drop-down--option" />');t.addClass(e(this).attr("class")).attr("rel",e(this).val()).data("label",e(this).data("label")||e(this).text()).text(e(this).text()),e(this).attr("disabled")&&t.addClass("selectBox-disabled"),e(this).attr("selected")&&t.addClass("is-selected"),n.append(t)})}):t.find("option").length>0?t.find('option[value!=""]').each(function(){var t=e('<li class="nsg-form--drop-down--option" />');t.addClass(e(this).attr("class")).attr("rel",e(this).val()).data("label",e(this).data("label")||e(this).text()).text(e(this).text()),e(this).attr("disabled")&&t.addClass("selectBox-disabled"),e(this).attr("selected")&&t.addClass("is-selected"),n.append(t)}):n.append('<li class="nsg-form--drop-down--option"> </li>');var a=!1;n.data("selectBox-select",t).css("display","none").appendTo(t.parent()).find("li").on("mousedown.selectBox",function(e){e.preventDefault(),e.screenX===n.data("selectBox-down-at-x")&&e.screenY===n.data("selectBox-down-at-y")&&(n.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),i.hideMenus())}).on("touchmove.selectBox",function(e){a=!0}).on("mouseup.selectBox touchend.selectBox",function(s){if(s.preventDefault(),s.stopPropagation(),!(s.screenX&&s.screenX===n.data("selectBox-down-at-x")&&s.screenY&&s.screenY===n.data("selectBox-down-at-y")||(n.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"),e(this).hasClass("selectBox-disabled")))){if(a)return void(a=!1);i.selectOption(t,e(this)),i.hideMenus()}}).on("mouseover.selectBox",function(){i.addHover(t,e(this))}).on("mouseout.selectBox",function(){i.removeHover(t,e(this))})}return t.data("has-fixed-ancestor")===!0&&n.css("position","fixed"),i.disableSelection(n),n},setOptions:function(t,o){t=e(t);var n=t.data("selectBox-control"),a=t.data("selectBox-settings");switch(typeof s){case"string":t.html(s);break;case"object":t.html("");for(var l in s)if(null!==s[l])if("object"==typeof s[l]){var d=e('<optgroup label="'+l+'" />');for(var r in s[l])d.append('<option value="'+r+'">'+s[l][r]+"</option>");t.append(d)}else{var c=e('<option value="'+l+'">'+s[l]+"</option>");t.append(c)}}if(n){n.data("selectBox-options").remove();var u=n.hasClass("selectBox-dropdown")?"dropdown":"inline";switch(o=i.getOptions(t,u,a),n.data("selectBox-options",o),u){case"inline":n.append(o);break;case"dropdown":n.find(".nsg-form--drop-down--selected-option").text(e(t).find("option:selected").text()||" "),e("body").append(o)}}},keepOptionInView:function(t,s,o){if(s&&0!==s.length){t=e(t);var n=t.data("selectBox-control"),a=n.data("selectBox-options"),i=n.hasClass("selectBox-dropdown")?a:a.parent(),l=parseInt(s.offset().top-i.position().top,10),d=parseInt(l+s.outerHeight(),10);o?i.scrollTop(s.offset().top-i.offset().top+i.scrollTop()-i.height()/2):(l<0&&i.scrollTop(s.offset().top-i.offset().top+i.scrollTop()),d>i.height()&&i.scrollTop(s.offset().top+s.outerHeight()-i.offset().top+i.scrollTop()-i.height()))}},initScrollbar:function(t){var s=t.data("selectBox-control"),o=s.data("selectBox-options"),n=o.parent(),a=t.data("selectBox-settings"),l=o.find("li"),d=l.height(),r=e('<div class="selectBox-scrollbar"><div><a /></div></div>'),c=r.find("a");a.initScrollbar=!1,a.maxItems<l.length&&(n.height(d*a.maxItems),n.addClass(t.attr("class")),r.height(n.height()-4),c.height(a.maxItems/l.length*r.height()),n.append(r),i.bindScrollbarEvents(n,a))},bindScrollbarEvents:function(t,s){var o,n,a,i,l=t.find(".selectBox-scrollbar a"),d=t.find(".selectBox-options"),r=t.find(".selectBox-scrollbar"),c=r.offset(),u={bottom:c.top+r.height(),top:c.top},p=l.offset(),h={bottom:p.top+l.height(),top:p.top},f=d.height()-t.height(),g=r.height()-l.height(),m=function(e){var t,s,o,n=e.pageY;e.preventDefault(),n>u.top&&n<u.bottom&&(t=n-i,i=n,h.top+t>=u.top&&h.bottom+t<=u.bottom&&(s=l.position(),o=d.position(),h.top+=t,h.bottom+=t,d.css("top",(u.top-h.top)/g*f+"px"),l.css("top",h.top-u.top+"px")))},v=function(){l.removeClass("move"),e(document).unbind("mousemove",m),e(document).unbind("mouseup",v)},x=function(t){t.preventDefault(),t.stopPropagation(),a=o=t.pageX,i=n=t.pageY,l.addClass("move"),e(document).bind("mousemove",m),e(document).bind("mouseup",v)},b=function(e,t,s,o){var n,a,i=-Math.round(10*o);e.preventDefault(),e.stopPropagation(),h.top+i>=u.top&&h.bottom+i<=u.bottom?(n=l.position(),a=d.position(),h.top+=i,h.bottom+=i,d.css("top",(u.top-h.top)/g*f+"px"),l.css("top",h.top-u.top+"px")):h.top+i<u.top?(d.css("top",0),l.css("top",0)):(d.css("top",-f+"px"),l.css("top",g+"px"))};l.bind("mousedown",x),l.bind("click",function(e){e.preventDefault(),e.stopPropagation()}),e.event.special&&e.event.special.mousewheel&&d.bind("mousewheel",b)},ellipsis:function(t){var s="OneNikeCurrency";e(t).children("li").each(function(t,o){"hidden"==e(o).css("overflow")&&e(o).css("font-family",e(o).css("font-family").replace(s+",","").concat(","+s)).css("text-overflow","ellipsis").css("white-space","nowrap")})}};switch(t){case"control":return n.data("selectBox-control");case"settings":if(!s)return n.data("selectBox-settings");n.each(function(){e(this).data("selectBox-settings",e.extend(!0,e(this).data("selectBox-settings"),s))});break;case"options":n.each(function(){i.setOptions(this,s)});break;case"value":if("undefined"==typeof s)return n.val();n.each(function(){i.setValue(this,s)});break;case"enable":n.each(function(){i.enable(this)});break;case"disable":n.each(function(){i.disable(this)});break;case"destroy":n.each(function(){i.destroy(this)});break;case"addWrapper":n.each(function(){i.addWrapper(this,s)});break;case"showMenu":n.each(function(){i.showMenu(this)});break;case"hideMenu":n.each(function(){i.hideMenu(this)});break;case"mode":break;default:e(this).each(function(){i.init(this,t)})}return e(this)}})}(jQuery)},nsg.loadDropDown2=function(){"use strict";$.fn.nsgDropDown2=function(e,t,s){var o,n=$(this),a="",i={OPEN:"is-open",HOVER:"is-hover",ACTIVE:"is-active",FOCUS:"is-focus",SELECTED:"is-selected",DISABLED:"is-disabled",INLINE:"is-inline",CONTROL:"nsg-form--drop-down",SELECT:"nsg-form--drop-down--select",SELECT_SCROLL:"nsg-form--drop-down-scroll",DROPDOWN:"nsg-drop-down",LABEL:"nsg-form--drop-down--label",LABEL_SELECTED:"nsg-form--drop-down--label-selected",LABEL_SHOWING:"nsg-form--drop-down-label-showing",BOX:"nsg-form--drop-down--grid",LIST:"nsg-form--drop-down--list",LIST_ITEM:"nsg-form--drop-down--list-item",OPT_GROUP:"nsg-form--drop-down--optgroup",MODES:{DEFAULT:"nsg-mode--default",THUMBNAIL:"nsg-mode--thumbnail",GRID:"nsg-mode--grid",FLAT:"nsg-mode--flat"}},l={PLUGIN:"nsg-plugin",LABEL:"nsg-label",LABELCLASS:"nsg-label-class",MODE:"nsg-mode",SETTINGS:"settings",LAST_SELECTED:"last-selected",DOWN_X:"down-x",DOWN_Y:"down-y",FIXED_ANCESTOR:"has-fixed-ancestor",AUTO_WIDTH:"auto-width"},d=!!("mobile"===nsgConfig.PLATFORM||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/Android/i)&&navigator.userAgent.match(/mobile/i)),r={config:function(e){return e="object"==typeof e?e:{},e.transition=r.util.isDefined(e.transition)?e.transition:"",e.menuSpeed=r.util.isDefined(e.menuSpeed)?e.menuSpeed:500,e.maxItems=r.util.isDefined(e.maxItems)?e.maxItems:10,e.initScrollbar=!!r.util.isDefined(e.initScrollbar)&&e.initSrollbar,e.autoWidth=!r.util.isDefined(e.autoWidth)||e.autoWidth,e.mode=r.util.isDefined(e.mode)?e.mode:"list",e},util:{isDefined:function(e){return void 0!==e&&0!==e.length},getControl:function(e){return e.parents("."+i.CONTROL)},getLabel:function(e){return e.find("."+i.LABEL)},getSelect:function(e){return e.find("select."+i.SELECT)},getSelectOptions:function(e){return r.util.getSelect(e).find("option")},setLabelSelected:function(e,t){e.find("."+i.LABEL_SELECTED).html(t)},getList:function(e){return e.find("ul."+i.LIST)},getListItems:function(e){return r.util.getList(e).find("li."+i.LIST_ITEM)},getSettings:function(e){return e.data(l.SETTINGS)},getDropDown:function(e){return e.find("."+i.DROPDOWN)},getAll:function(e){return{label:r.util.getLabel(e),select:r.util.getSelect(e),selectOptions:r.util.getSelectOptions(e),list:r.util.getList(e),listItems:r.util.getListItems(e),settings:r.util.getSettings(e)}},checkType:function(e,t){return typeof e===t&&null!==e},checkTag:function(e,t){return e[0].tagName.toLowerCase()===t},checkPlugin:function(e){return!!e.data(l.PLUGIN)},hasBox:function(e){return!!e.find("."+i.BOX).length},getBox:function(e){return e.find("div."+i.BOX)},addBox:function(e){return $("<div>",{"class":i.BOX}).addClass(i.DROPDOWN).append(e.removeClass(i.DROPDOWN))},addWrapper:function(e){var t=$("<div/>"),s=e.attr("class"),o={plugin:"data-"+l.PLUGIN,label:"data-"+l.LABEL,labelclass:"data-"+l.LABELCLASS,mode:"data-"+l.MODE,autowidth:"data-"+l.AUTO_WIDTH},n={plugin:e.attr(o.plugin),label:e.attr(o.label),labelclass:e.attr(o.labelclass),mode:e.attr(o.mode),autowidth:e.attr(o.autowidth)};return e.removeAttr(o.plugin+" "+o.label+" "+o.labelclass+" "+o.mode+" "+o.autowidth),t.attr({"data-nsg-plugin":n.plugin,"data-nsg-label":n.label,"data-nsg-label-class":n.labelclass,"data-nsg-mode":n.mode,"data-auto-width":n.autowidth,"class":s}),e.wrap(t)},fixedAncestor:function(e){var t=$(e).offsetParent();return 0!==t.length&&!t.is("html, body")&&("fixed"===t.css("position")||r.util.fixedAncestor(t))},runTransition:function(e,t,s){switch(s="show"===t||"hide"===t?0:s,t){case"show":e.show(s);break;case"hide":e.hide(s);break;case"fadeshow":e.fadeIn(s);break;case"fadehide":e.fadeOut(s);break;case"slideshow":e.slideDown(s);break;case"slidehide":e.slideUp(s)}},addHover:function(e){e.parent().find("."+i.HOVER).removeClass(i.HOVER),e.addClass(i.HOVER)},disableSelection:function(e){e.css("MozUserSelect","none").bind("selectstart",function(t){e.preventDefault()})},keepOptionInView:function(e,t,s){if(r.util.isDefined(t)){var o=(r.util.getSelect(e),r.util.getList(e)),n=r.util.hasBox(e)?r.util.getBox(e):o,a=parseInt(t.offset().top-n.position().top,10),i=parseInt(a+t.outerHeight(),10);s?n.scrollTop(t.offset().top-n.offset().top+n.scrollTop()-n.height()/2):(a<0&&n.scrollTop(t.offset().top-n.offset().top+n.scrollTop()),i>n.height()&&n.scrollTop(t.offset().top+t.outerHeight()-n.offset().top+n.scrollTop()-n.height()))}},selectOption:function(e){var t=r.util.getControl(e),s=r.util.getSelect(t),o=(r.util.getList(t),e.data("option"));r.util.getSettings(t);if(t.find("option:selected").removeAttr("selected"),!t.hasClass(i.DISABLED)&&0!==e.length){if(s.attr("multiple")){var n=t.data(l.LAST_SELECTED),a=n.index(),d=e.index(),c=[a,d].sort().join(", ");event.shiftKey?e.siblings().slice(c).not(". "+i.OPT_GROUP+", ."+i.DISABLED).addClass(i.SELECTED):event.metaKey?e.toggleClass(i.SELECTED):(e.siblings().removeClass(i.SELECTED),e.addClass(i.SELECTED))}else e.siblings().removeClass(i.SELECTED),e.addClass(i.SELECTED);r.util.setLabelSelected(t,e.data("label")||e.text()),t.data(l.LAST_SELECTED,e),o.attr("selected",!0),s.trigger("change")}},setValue:function(e,t){var s=r.util.getSelect(e);if(s.val(t),r.util.checkPlugin(e)){var o=e.find("."+i.LIST),n=e.find("."+i.LABEL);n.text(s.find("option:selected").text()||" "),o.find("."+i.SELECTED).removeClass(i.SELECTED).end().find("li."+i.LIST_ITEM).each(function(){var e=$(this);e.attr("rel")===t&&e.addClass(i.SELECTED)})}},setDisable:function(e,t){var s=r.util.getSelect(e);s.attr("disabled",t),r.util.isPlugin&&(t?e.addClass(i.DISABLED):e.removeClass(i.DISABLED))},setAutoWidth:function(e){var t=e.find("."+i.LABEL),s=e.find("."+i.LABEL_SELECTED),o=e.find("."+i.LIST);o.attr("style","display:block;visibility:hidden");var n=t.width(),a=(s.width(),o.width());e.width(a-n+a),o.attr("style","")}},events:{label:{mousedown:function(e){e.preventDefault(),e.stopPropagation();var t=$(this),s=r.util.getControl(t),o=r.util.getLabel(s);s.hasClass(i.OPEN)?r.menu.hide():(r.menu.show(s),o.focus())},keydown:function(e){var t=$(this),s=r.util.getControl(t),o=r.util.getSelect(s),n=r.util.getList(s),l=(r.util.getSettings(s),0),d=0;if(!s.hasClass(i.DISABLED))switch(e.keyCode){case 8:e.preventDefault(),a="";break;case 9:case 27:r.menu.hide();break;case 13:s.hasClass(i.OPEN)?(r.menus.selectOption(n.find("li."+i.HOVER+":first")),s.hasClass(i.CONTROL)&&r.menu.hide()):r.menu.show(o);break;case 38:case 37:if(e.preventDefault(),s.hasClass(i.OPEN)){var c=n.find(".is-hover").prev("li");for(l=n.find("li:not(."+i.OPT_GROUP+")").length,d=0;(0===c.length||c.hasClass(i.DISABLED)||c.hasClass(i.OPT_GROUP))&&(c=c.prev("li"),0===c.length&&(c=n.find("li:last")),!(++d>=l)););r.util.addHover(o,c),r.util.keepOptionInView(o,c)}else r.menu.show(o);break;case 40:case 39:if(e.preventDefault(),s.hasClass(i.OPEN)){var u=n.find(i.HOVER).next("li");for(l=n.find("li:not(."+i.OPT_GROUP+")").length,d=0;(0===u.length||u.hasClass(i.DISABLED)||u.hasClass(i.OPT_GROUP))&&(u=u.next("li"),0===u.length&&(u=n.find("li:first")),!(++d>=l)););r.util.addHover(n,u),r.util.keepOptionInView(s,u)}else r.menu.show(s)}},keypress:function(e){var t=$(this),s=r.util.getControl(t),n=r.util.getSelect(s),l=r.util.getList(s);r.util.getSettings(s);if(!s.hasClass(i.DISABLED))switch(e.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:s.hasClass(i.DISABLED)||r.menu.show(n),e.preventDefault(),r.util.clearTimeout(o),a+=String.fromCharCode(e.charCode||e.keyCode),l.find("li").each(function(){if($(this).text().substr(0,a.length).toLowerCase()===a.toLowerCase())return r.util.addHover(n,$(this)),r.util.keepOptionInView(n,$(this)),!1}),o=setTimeout(function(){a=""},1e3)}}},list_items:{mousedown:function(e){e.preventDefault();var t=$(this),s=r.util.getControl(t);e.screenX===s.data(l.DOWN_X)&&e.screenY===s.data(l.DOWN_Y)&&r.menu.hide()},mouseup:function(e){e.stopPropagation();var t=$(this),s=r.util.getControl(t);e.screenX&&e.screenX===s.data(l.DOWN_X)&&e.screenY&&e.screenY===s.data(l.DOWN_Y)||(s.removeData(l.DOWN_X).removeData(l.DOWN_Y),r.util.selectOption(t),r.menu.hide())},mouseover:function(e){r.util.addHover($(this))}}},menu:{hide:function(){var e=$("."+i.CONTROL+"."+i.OPEN);0!==e.length&&e.each(function(){var e=$(this),t=r.util.getDropDown(e),s=r.util.getSettings(e);e.removeClass(i.OPEN).find("."+i.HOVER).removeClass(i.HOVER),r.util.runTransition(t,s.transition+"hide",s.menuSpeed)})},show:function(e){var t=(r.util.getSelect(e),r.util.getList(e)),s=r.util.getDropDown(e),o=s.find(".is-selected:first"),n=r.util.getSettings(e);e.height();r.menu.hide(),e.hasClass(i.DISABLED)||e.hasClass(i.OPEN)||(e.addClass(i.OPEN),r.util.runTransition(s,n.transition+"show",n.menuSpeed),$("html").hasClass("ie9")&&s.scrollHeight>s.outerHeight()&&s.css("width",t.parent().outerWidth()+17),r.util.keepOptionInView(e,o,!0),$(document).bind("mousedown",function(e){var t=$(e.target),s=t.parents().andSelf();s.hasClass(i.LIST)||(s.hasClass(i.LABEL_SELECTED)&&e.stopPropagation(),t.hasClass(i.LABEL)||r.menu.hide())}))},newList:function(){return $("<ul />",{"class":i.LIST})},newOptGroup:function(){return $("<li />",{"class":i.OPT_GROUP})},newListItem:function(e){var t=$("<span/>").html(e);return $("<li/>",{"class":i.LIST_ITEM}).append(t)},buildList:function(e){var t=[];return e.find('option[value!=""]').each(function(){var e=$(this),s=r.menu.newListItem(e.text()).attr("rel",e.val()).addClass(e.attr("class")).data("option",e).data("label",e.data("label")||e.text());e.attr("disabled")&&s.addClass(i.DISABLED),e.attr("selected")&&s.addClass(i.SELECTED),t.push(s)}),t},buildListOptGroup:function(e){var t="";return e.find("optgroup").each(function(){var e=$(this),s=r.menu.newOptGroup().text(e.attr("label")),o=r.menu.buildList(e);o.unshift(s),t=t.concat(o)}),t},buildListOutput:function(e){var t,s=r.util.getSelect(e),o=r.menu.newList().addClass(i.DROPDOWN),n=r.util.getSettings(e);t=s.find("optgroup").length?r.menu.buildListOptGroup(s):r.menu.buildList(s);for(var a=0;a<t.length;a++)o.append(t[a]);switch(n.mode){case"flat":e.addClass(i.MODES.FLAT);break;case"thumbnail":e.addClass(i.MODES.THUMBNAIL);break;case"grid":o=r.util.addBox(o),e.addClass(i.MODES.GRID);break;default:e.addClass(i.MODES.DEFAULT)}for(var a=0;a<o.length;a++)e.append(o[a]);var d=r.util.getList(e),c=r.util.getListItems(e);r.util.disableSelection(d),void 0!==e.data("autoWidth")&&(n.autoWidth=e.data("autoWidth")),n.autoWidth&&r.util.setAutoWidth(e),c.on("mousedown",r.events.list_items.mousedown).on("mouseup",r.events.list_items.mouseup).on("mouseover",r.events.list_items.mouseover),s.data(l.FIXED_ANCESTOR)===!0&&d.css("position","fixed")}},scrollBar:{init:function(e){var t=(r.util.getSelect(e),r.util.getList(e)),s=r.util.getListItems(e),o=t.parent(),n=e.find(l.SETTINGS),a=s.height(),d=$('<div class="'+i.SELECT_SCROLL+'"><div><a /></div></div>'),c=d.find("a");n.initScrollbar=!1,n.maxItems<s.length&&(o.height(a*n.maxItems),d.height(s.height()-4),c.height(n.maxItems/s.length*d.height()),o.append(d),r.scrollBar.bindEvents(o,n))},bindEvents:function(e,t){var s,o,n,a,l=(r.util.getSelect(e),r.util.getList(e)),d=e.find("."+i.SELECT_SCROLL+" a"),c=e.find("."+i.SELECT_SCROLL),u=c.offset(),p={bottom:u.top+c.height(),top:u.top},h=d.offset(),f={bottom:h.top+d.height(),top:h.top},g=l.height()-e.height(),m=c.height()-d.height(),v=function(e){var t,s,o,n=e.pageY;e.preventDefault(),n>p.top&&n<p.bottom&&(t=n-a,a=n,f.top+t>=p.top&&f.bottom+t<=p.bottom&&(s=d.position(),o=l.position(),f.top+=t,f.bottom+=t,l.css("top",(p.top-f.top)/m*g+"px"),d.css("top",f.top-p.top+"px")))},x=function(){d.removeClass("move"),$(document).unbind("mousemove",v),$(document).unbind("mouseup",x)},b=function(e){e.preventDefault(),e.stopPropagation(),n=s=e.pageX,a=o=e.pageY,d.addClass("move"),$(document).bind("mousemove",v),$(document).bind("mouseup",x)},C=function(e,t,s,o){var n,a,i=-Math.round(10*o);e.preventDefault(),e.stopPropagation(),f.top+i>=p.top&&f.bottom+i<=p.bottom?(n=d.position(),a=l.position(),f.top+=i,f.bottom+=i,l.css("top",(p.top-f.top)/m*g+"px"),d.css("top",f.top-p.top+"px")):f.top+i<p.top?(l.css("top",0),d.css("top",0)):(l.css("top",-g+"px"),d.css("top",m+"px"))};d.bind("mousedown",b),d.bind("click",function(e){e.preventDefault(),e.stopPropagation()}),$.event.special&&$.event.special.mousewheel&&l.bind("mousewheel",C)}},init:function(e,t){t=r.config(t);var s=e,o=r.util.checkTag(e,"select");o&&(r.util.addWrapper(s),s=s.parent()),s.addClass(i.CONTROL),s.find("select").addClass(i.SELECT);var n=s.data(l.LABEL)||"",a=r.util.isDefined(r.util.getLabel(e));a||(s.prepend($("<a/>",{"class":i.LABEL}).addClass(s.data(l.LABELCLASS))),s.find("a."+i.LABEL).text(n).append($("<span/>",{
"class":i.LABEL_SELECTED})));var c=r.util.getSelect(s),u=r.util.getSelectOptions(s),p=r.util.getLabel(s);c.attr("multiple")||parseInt(c.attr("size"),10)>1;if(r.util.setLabelSelected(p,c.find(":selected").text()),!d){if(c.attr("disabled"))return void s.addClass(i.DISABLED);t.mode=s.data(l.MODE)||t.mode,t.initScrollbar=u.length>t.maxItems,s.data("settings",t),r.menu.buildListOutput(s);var h=r.util.getListItems(e);r.util.selectOption(h.find("."+i.SELECTED)),p.on("keydown",r.events.label.keydown).on("keypress",r.events.label.keypress).on("mousedown",r.events.label.mousedown),s.hasClass(i.MODES.FLAT)&&s.hover(function(){$("ul",$(this)).show()},function(){$("ul",$(this)).hide()}),r.util.isDefined(c.data(l.FIXED_ANCESTOR))||c.data(l.FIXED_ANCESTOR,r.util.fixedAncestor(c))}}};switch(e){case"settings":return n.data(l.SETTINGS);case"options":n.each(function(){r.util.setOptions(this,t)});break;case"value":if("undefined"==typeof t)return n.val();n.each(function(){r.util.setValue(n,t)});break;case"enable":n.each(function(){r.util.enable(n)});break;case"disable":n.each(function(){r.util.disable(n)});break;case"destroy":n.each(function(){r.util.destroy(n)});break;case"show":n.each(function(){r.menu.show(this)});break;case"hide":n.each(function(){r.menu.hide()});break;default:n.each(function(){r.init($(this),e)})}if("function"==typeof s)return s.call(n)}},nsg.loadToggle=function(){$.fn.nsgToggle=function(e,t){return $(this).each(function(){function s(e){return e+"px"}function o(e,t){return s(e.length*t+2*e.length)}function n(e){var t=0;return e.each(function(){var e=$(this).outerWidth();t+=e}),s(t+2*e.children().length)}var a=$(this),i="nsg-grad--",l=e&&e.gradient?e.gradient:"dark-grey",d=a.data("gradient")?a.data("gradient"):l,r=a.find("ul>li"),c=r.length,u=c<3,p=$("<span/>",{"class":"toggleBg "+i+d}),h=0,f=r.eq(0).outerWidth(),g=a.outerHeight();u?(r.each(function(){var e=$(this);h=Math.max(h,e.outerWidth())}),r.css({width:s(h),height:s(g)}),p.css({width:s(h+2),height:s(g)}),a.css({width:o(r,h)}).prepend(p)):(a.css({width:n(r)}).prepend(p),a.find(".toggleBg").css({width:f,height:g})),a.find("li:first-child").addClass("is-selected"),a.find("li").on("click",function(e){e.preventDefault();var t=$(this),s=t.parent(),o="is-selected",n=t.position();s.find("."+o).removeClass(o),t.addClass(o);var a=n.left,i=u?{left:a}:{left:a,width:t.outerWidth()};s.siblings(".toggleBg").css(i)}),"function"==typeof t&&t.call(this)})}},nsg.loadFlyOut=function(){$.fn.nsgFlyOut=function(e){"use strict";function t(e){for(var t=e;t;){if(!t.length||"#document"===t[0].nodeName||"body"===t.prop("tagName")||"html"===t.prop("tagName"))return!1;if("none"===t.css("display"))return t;t=t.parent()}}var s=$(this),o=$(this).find("nav"),n=s.find("ul"),a=s.find("nav > a"),i=!!("mobile"===nsgConfig.PLATFORM||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/Android/i)&&navigator.userAgent.match(/mobile/i)),l=s.hasClass("nike-cq-cta-component"),d=l&&s.hasClass("nike-cq-cta-width-None"),r={flyout:"nsg-button--flyout",open:"is-open"};if(s.addClass(r.flyout),i)return!1;if(!l||d){var c=t(s),u="";c&&(u=c.clone().attr("style"),c.attr("style","display:block;visibility:hidden"));var p=s.outerWidth(),h=n.outerWidth(),f=a.outerWidth(),g=Math.max(p,h,f);s.css("width",g+"px"),n.css("width",g+"px"),a.css("width",g+"px"),c&&c.attr("style",u).css({display:"none",visibility:""})}return o.hover(function(){s.addClass(r.open)},function(){s.removeClass(r.open)}),a.on("click",function(e){e.preventDefault(),e.stopPropagation()}).on("touchstart",function(e){e.preventDefault(),e.stopPropagation(),$("."+r.flyout+"."+r.open).not(s).removeClass(r.open)}).on("touchend",function(e){e.preventDefault(),e.stopPropagation(),s.toggleClass(r.open)}),$(document).bind("touchend",function(e){var t=$(e.target),o=t.parents().andSelf();o.hasClass("nsg-button--flyout")||s.removeClass("is-open")}),"function"==typeof e?e.call(this):void 0}},window.jQuery&&$(function(){"none"!==nsg.config.PLACEMENT&&nsg.init(nsg.triggerReady)});