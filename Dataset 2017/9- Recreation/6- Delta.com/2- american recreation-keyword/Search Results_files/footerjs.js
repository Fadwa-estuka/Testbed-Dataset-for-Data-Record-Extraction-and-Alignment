function deltaDropdown(a){this.dropdownMenuItems,this.dropdownSubMenuItems,this.dropdownMenuItemLinks,this.dropdownCurrentIndex,this.dropdownSubIndex,"object"==typeof a&&(null!=a.dropdownMenuItems&&(this.dropdownMenuItems=a.dropdownMenuItems),null!=a.dropdownSubMenuItems&&(this.dropdownSubMenuItems=a.dropdownSubMenuItems),null!=a.dropdownMenuItemLinks&&(this.dropdownMenuItemLinks=a.dropdownMenuItemLinks)),this.init()}$(document).ready(function(){try{DeltaUtils.isBAU()&&delta.userProfile.loadTemplate()}catch(error){}try{DeltaUtils.exists(isAuthor)&&!isAuthor&&DeltaUtils.setDomain()}catch(error){}try{DeltaUtils.exists("InteractiveBreadcrumbNavigation"),null!=navigator.userAgent.match(/i(Pad|Phone)/i)&&$(".menu-item.has-dropdown").size()>0&&($(document).on("touchend",function(){$(".dropdown.wide").hide().parent().removeClass("open")}),$(".dropdown.wide").on("touchend",function(a){a.stopPropagation()}))}catch(error){}try{$(".category").click(function(){value=$(this).val()}),DeltaUtils.setPlaceholderText("#searchFormHeader input[placeholder]"),$("#searchFormHeader").validate({submitHandler:function(a){"Search"==$("#searchTextHeader").val()&&$("#searchTextHeader").val(""),a.submit()}}),$("#searchTextHeader").autocomplete({source:searchAsYouTypeHeaderResultObj.searchAsYouTypeHeaderHandler,select:function(a,b){$($.parseHTML(b.item.label)).find("a").click()}}).each(searchAsYouTypeHeaderResultObj.searchAsYouTypeHeaderRenderer),$.browser.msie&&8===parseInt($.browser.version,10)&&($("#searchTextHeader").on("focus.headerSearchFocus",function(){$("#utility-nav .search").css({"min-width":"183px"})}),$("#searchTextHeader").on("blur.headerSearchBlur",function(){$("#utility-nav .search").css({"min-width":""})}))}catch(error){}try{DeltaUtils.handleSearchFormSetting()}catch(error){}try{DeltaUtils.initButtons()}catch(error){}try{$("form.customFormUI select.selectoptions").focus().blur()}catch(error){}$("#unsupportedBrowserClose").on("click",function(){$(".ui-dialog").remove(),$(".ui-widget-overlay").remove()});try{CustomerInfo.handleCountryLanguageSettings()}catch(error){}try{if(DeltaUtils.exists(CookieUtils.get("pref"))){var isoCode=CookieUtils.get("pref").split("-")[1];"de"===isoCode?$("#de_imprint").show():"cn"===isoCode?$("#cn_wechat").show():($("#de_imprint").hide(),$("#cn_wechat").hide())}}catch(error){}try{!DeltaUtils.isCQPage()&&!DeltaUtils.isHomePage()}catch(error){}try{DeltaUtils.exists(departureCityWidget)&&departureCityWidget.length>0&&departureCityWidget.length<4&&($("#destinationCity").val(departureCityWidget),$("#destinationCity").trigger("focusout"))}catch(error){}try{$("div#footer-languages ul li a").on("click",function(){return CountryLangObj.init(),CustomerInfo.isLoggedIn()?CountryLangObj.updateProfileConfirmation(this):CountryLangObj.updateCountryLangChoice($(this).attr("id")),countryLanguageDetails=null,!1})}catch(error){}try{DeltaUtils.isCQPage()&&setInterval(DeltaUtils.reloadContentPage,39e5)}catch(error){}try{$("div#footer-languages ul li a").live("click",function(){return CountryLangObj.init(),CustomerInfo.isLoggedIn()?CountryLangObj.updateProfileConfirmation(this):CountryLangObj.updateCountryLangChoice($(this).attr("id")),countryLanguageDetails=null,!1})}catch(error){}try{DeltaUtils.exists("div#skip-content")&&(jQuery.fn.highlight=function(){$(this).each(function(){var a=$(this);a.before("<div/>"),a.prev().width(a.width()).height(a.height()).css({position:"absolute","background-color":"#d6ebfc",opacity:".9"}).fadeOut(2e3,function(){a.prev("div").remove()})})},$("div#skip-content a").bind("blur",function(){$("div#skip-content").addClass("aria-offscreen")}),$("div#skip-content a").bind("focus",function(){$("div#skip-content").removeClass("aria-offscreen")}),$("#skip-main-content").click(function(a){a.preventDefault(),DeltaUtils.isHomePage()?$("main").find("a:visible:first")[0].focus():($("#maincontent").append('<div class="clear"></div>'),$("#maincontent").attr("tabIndex",-1).focus(),$("#maincontent").highlight(),$("#maincontent").removeAttr("tabIndex"))}),window.location.href.indexOf("https")<0&&$("#skip-flight-mytrips").click(function(a){a.preventDefault(),DeltaUtils.goToURL("https://"+DeltaUtils.getDomainFromURL(window.location.href).split("//")[1]+"/mytrips")}))}catch(error){}try{if(DeltaUtils.exists(cookiePolicyJSONObject)){var bannerData=cookiePolicyJSONObject;if(DeltaUtils.exists(bannerData)&&DeltaUtils.exists(bannerData.countryList)&&bannerData.countryList.length>0){var ctrList=eval(bannerData.countryList);$.each(ctrList,function(a,b){(!DeltaUtils.exists(CookieUtils.get("DL_PER"))||DeltaUtils.exists(CookieUtils.get("DL_PER"))&&CookieUtils.get("DL_PER").indexOf(b+"-")<0)&&CountryLanguageController.getCountryCode()===b&&($("#deltaClientHeaderCookieInfo").html(bannerData.alertMessage),$("#deltaClientHeaderCookieInfo").append('<button id="ck-banner-close" type="button" class="ui-button ui-widget-content  banner-close-button ui-button-icon-only " role="button" title="Close" ><span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span><span class="ui-button-text">Close</span></button>'),$("#deltaClientHeaderCookieInfo").addClass("cookieBanner"),DeltaUtils.createDeltaPerCookie(b+"-y"))})}$(document).on("click","#ck-banner-close",function(){$("#deltaClientHeaderCookieInfo").hide(),$("#deltaClientHeaderCookieInfo").removeClass("cookieBanner")})}}catch(error){}try{(DeltaUtils.exists("#interactivebreadcrumb")||DeltaUtils.exists(".interactivebreadcrumb")||DeltaUtils.exists("#utility-nav"))&&($(".deltaDropDownMenu ,.menu-item.has-dropdown ").on("keydown","a",function(a){var b=!0;if(a.shiftKey&&9==a.which){if(void 0==$(this).parents("li").prev("li").find("a:first, input")[0])return!0;a.preventDefault(),$(this).parents("li").prev("li").find("a:first, input").focus(),b=!1}else if(9==a.which&&b)if(void 0==$(this).parents("li").next("li").find("a:first, input")[0])if($(this).parents("div").next("div").find("input").length>0)a.preventDefault(),$(this).parents("div").next("div").find("input").focus();else{a.preventDefault();var c=$("#maincontent").find(":focusable")[0];c.focus()}else a.preventDefault(),$(this).parents("li").next("li").find("a:first, input").focus()}),$(".deltaDropDownMenu a,.menu-item.has-dropdown a").on("keyup",function(a){40==a.keyCode?$("a, input").eq(parseInt($("a, input").index($(this)),10)+1).focus():38==a.keyCode&&$("a, input").eq(parseInt($("a, input").index($(this)),10)-1).focus()}))}catch(error){}try{"undefined"!=navigator.maxTouchPoints&&navigator.maxTouchPoints>0&&$("#utility-nav .dropdown a").on("click touchend",function(){window.location.reload($(this).attr("href"))})}catch(error){}try{CustomerInfo.getCustomerInfo()}catch(error){}try{DeltaUtils.isCQPage()||DeltaUtils.isHomePage()||setTimeout(function(){delta.utils.checkinHeader.init()},2e3)}catch(error){}try{$(".helpIcon").attr("tabindex","0")}catch(error){}try{var cdnURL;try{DeltaUtils.exists(imgPath)&&(cdnURL=imgPath)}catch(error){cdnURL="//content.delta.com"}DeltaUtils.addScriptTag(cdnURL+"/dlhome/delta/sitewide/json/errorMessages/jQuery.validator.messages.js")}catch(error){}try{delta.calendarCfg._setDatePickerDefaults()}catch(error){}try{var currentPath=window.location.pathname.split("/")[1],selectDirectories=DeltaUtils.selectDirectories;-1!=$.inArray(currentPath,selectDirectories)&&$("select").selectmenu({change:function(){$(this).trigger("change")}})}catch(error){}try{$("body").on("keydown",function(a){if(null!=DeltaUtils.closeTimer){var b=a.keyCode||a.which;if(9==b){a.preventDefault();var c=$("div.timeout-messaging");c.find("#overlay_keepLogIn").is(":focus")?c.find("#overlay_logOut").focus():c.find("#overlay_keepLogIn").focus()}}})}catch(error){}$("#maincontent").removeAttr("tabIndex");try{DeltaUtils.handleTouchForAutocomplete()}catch(error){}$(document).on("click touchend","a[data-extlink]",function(a){this.href.indexOf("deltavacations")<0&&(a.preventDefault(),DeltaUtils.displayUserAlertModal(this))})}),$(window).on("load",function(){function a(){var a=document.location.pathname;a=a.split("?")[0];var b=c.contextPaths;return-1!==b.indexOf(a)?!0:!1}try{if(delta.utils.celebrus.useConfig){var b=JSON.stringify(delta.utils.celebrus.config),c=JSON.parse(b);if("true"===c.switches.configEnabled&&a()){var d=window.imgPath||"//content.delta.com",e=c.scriptRelativePath,f=d+e,g=document.createElement("script");g.type="text/javascript",g.src=f,$("body").append(g)}}}catch(h){}});var UnsupportedBrowser={badBrowser:function(){var a=navigator.userAgent,b="";if(null!=a&&a.length>0&&a.indexOf("rv:")>-1)return!1;if(a.indexOf("MSIE")>-1){var c=!1;if(a.indexOf("Trident/")>-1&&a.indexOf("MSIE 7.0")>-1&&(c=!0),b=a.substring(a.indexOf("MSIE")+5,a.indexOf("MSIE")+8),!c&&parseInt(b)<=8)return!0}return null!=a&&a.length>0&&(a.indexOf("OPERA")>-1||a.indexOf("Opera")>-1||a.indexOf("OPR")>-1)?!0:a.indexOf("Chrome")>-1&&(b=a.substring(a.indexOf("Chrome")+7,a.indexOf("Chrome")+11),parseInt(b)<=32)?!0:a.indexOf("Safari")>-1&&(b=a.substring(a.indexOf("Version")+8,a.indexOf("Safari")-1),b.substring("0",b.indexOf("."))<=5&&(b=b.replace(/\./g,"").replace(/\ /g,"0").replace(/\M/g,""),parseFloat(b)<parseFloat("518")))?!0:a.indexOf("Firefox")>-1&&(b=a.substring(a.indexOf("Firefox")+8,a.indexOf("Firefox")+12),parseInt(b)<=25)?!0:!1},setBadBrowser:function(a,b){CookieUtils.create(a,b)},getBadBrowser:function(a){var b=CookieUtils.get(a);return null!=b&&b.length>0?b:""}};UnsupportedBrowser.badBrowser()&&(null==UnsupportedBrowser.getBadBrowser("browserWarning")||UnsupportedBrowser.getBadBrowser("browserWarning").length<=0)&&(UnsupportedBrowser.setBadBrowser("browserWarning",1),DeltaUtils.showDialogBox("/dlhome/shared/dialogs/unsupportedBrowser.jsp","","478","","","","support-dialog")),jQuery.fn.evenIfHidden=function(a){return this.each(function(){var b=$(this),c=[],d=b.parents().andSelf().filter(":hidden");return d.length?(d.each(function(){var a=$(this).attr("style");a="undefined"==typeof a?"":a,c.push(a),$(this).attr("style",a+" display: block !important;")}),d.eq(0).css("left",-1e4),a(b),void d.each(function(){$(this).attr("style",c.shift())})):(a(b),!0)})},$(document).ready(function(){$("#_deltaDropDownMenu_tmplHolder > li").mouseover(function(){DeltaUtils.exists($(this).children(".subLinks"))&&$(this).children(".subLinks").length>0&&$(this).find("div a")[0].setAttribute("aria-expanded","true"),$(this).addClass("active"),$("ul.subLinks li").removeClass("active"),DeltaUtils.exists($(this).find("ul"))&&$(this).find("ul").size()>0&&$(this).find("ul").addClass("showMenu")}).mouseout(function(){DeltaUtils.exists($(this).children(".subLinks"))&&$(this).children(".subLinks").length>0&&$(this).find("div a")[0].setAttribute("aria-expanded","false"),$(this).removeClass("active"),DeltaUtils.exists($(this).find("ul"))&&$(this).find("ul").size()>0&&$(this).find("ul").removeClass("showMenu")}),$("#utility-nav ul.dropdownNav > li").mouseover(function(){$(this).find("div a:first").attr("aria-expanded","true"),$("ul.dropdownNav li").removeClass("active"),$(this).addClass("active"),$("ul.subLinks li").removeClass("active"),$("ul.dropdownNav li ul.subLinks").removeClass("showMenu"),DeltaUtils.exists($(this).find("ul"))&&$(this).find("ul").size()>0&&$(this).find("ul").addClass("showMenu")}).mouseout(function(){$(this).find("div a:first").attr("aria-expanded","false"),$(this).removeClass("active"),DeltaUtils.exists($(this).find("ul"))&&$(this).find("ul").size()>0&&$(this).find("ul").removeClass("showMenu")})}),$(document).click(function(a){$(a.target).closest("#utility-nav ul.dropdownNav").length||$(".dropdownNav ul.subLinks").is(":visible")&&($("ul.subLinks").removeClass("showMenu"),$("#utility-nav ul.dropdownNav li div a").attr("aria-expanded","false"),$("#utility-nav ul.dropdownNav li").removeClass("active"))}),$(document).click(function(a){$(a.target).closest("#_deltaDropDownMenu_tmplHolder").length||$("#_deltaDropDownMenu_tmplHolder ul.subLinks").is(":visible")&&($("ul.subLinks").removeClass("showMenu"),$("#_deltaDropDownMenu_tmplHolder li div a").attr("aria-expanded","false"),$("#_deltaDropDownMenu_tmplHolder li").removeClass("active"))});var keys={tab:9,enter:13,esc:27,space:32,left:37,up:38,right:39,down:40};deltaDropdown.prototype.dropdownIndex=function(a){a==this.dropdownMenuItems.length?a=0:0>a&&(a=this.dropdownMenuItems.length-1),this.dropdownMenuItems[a].focus(),$(this.dropdownMenuItems).removeClass("active"),$(this.dropdownMenuItems[a]).addClass("active"),this.dropdownCurrentIndex=a},deltaDropdown.prototype.gotodropdownSubIndex=function(a,b){var c=a.querySelectorAll("li");b==c.length?b=0:0>b&&(b=c.length-1),c[b].focus(),$("ul.subLinks > li").removeClass("active"),$(c[b]).addClass("active"),this.dropdownSubIndex=b},deltaDropdown.prototype.init=function(){var a=this;DeltaUtils.exists(a.dropdownMenuItemLinks)&&Array.prototype.forEach.call(a.dropdownMenuItemLinks,function(b,c){b.addEventListener("focus",function(){$(a.dropdownMenuItems[c]).addClass("active")}),b.addEventListener("blur",function(){$(a.dropdownMenuItems[c]).removeClass("active")})}),Array.prototype.forEach.call(a.dropdownMenuItems,function(b,c){b.setAttribute("tabindex","0"),0==c?b.addEventListener("focus",function(){a.dropdownCurrentIndex=0}):c==a.dropdownMenuItems.length-1&&b.addEventListener("focus",function(){a.dropdownCurrentIndex=a.dropdownMenuItems.length-1}),b.addEventListener("blur",function(){return $(a.dropdownMenuItems).removeClass("active"),$(this).find(".subLinks").hasClass("showMenu")&&$(this).addClass("active"),!0}),b.addEventListener("focus",function(){a.dropdownSubIndex=0,Array.prototype.forEach.call(a.dropdownMenuItems,function(a){DeltaUtils.exists($(a).find(".subLinks"))&&$(a).find(".subLinks").length>0&&$(a).find("div a:first").attr("aria-expanded","false"),DeltaUtils.exists($(a).find("ul"))&&$(a).find("ul").size()>0&&$(a).find("ul").removeClass("showMenu")}),$(this).addClass("active")}),b.addEventListener("touchstart",function(b){return b.preventDefault(),b.stopPropagation(),Array.prototype.forEach.call(a.dropdownMenuItems,function(a,b){c!=b&&($(a).find("div a:first").attr("aria-expanded","false"),DeltaUtils.exists($(a).find("ul"))&&$(a).find("ul").size()>0&&$(a).find("ul").removeClass("showMenu"))}),$(a.dropdownMenuItems).removeClass("active"),$(this).addClass("active"),$(this).find(".subLinks").length>0&&("false"==$(this).find("div a:first").attr("aria-expanded")||null==$(this).find("div a:first").attr("aria-expanded"))?($(this).find("div a:first").attr("aria-expanded","true"),$(this).find(".subLinks").addClass("showMenu"),a.dropdownSubIndex=0,a.gotodropdownSubIndex(this.querySelector("ul"),0),$(this).addClass("active")):$(this).find("div a:first")[0].click(),!1}),b.addEventListener("keydown",function(b){switch(b.keyCode){case keys.right:a.dropdownIndex(a.dropdownCurrentIndex+1);break;case keys.left:a.dropdownIndex(a.dropdownCurrentIndex-1);break;case keys.tab:if(b.shiftKey){if(0==a.dropdownCurrentIndex)return $(a.dropdownMenuItems).removeClass("active"),!0;a.dropdownIndex(a.dropdownCurrentIndex-1)}else{if(a.dropdownCurrentIndex==a.dropdownMenuItems.length-1)return $(a.dropdownMenuItems).removeClass("active"),!0;a.dropdownIndex(a.dropdownCurrentIndex+1)}break;case keys.enter:$(this).find("div a:first")[0].click();break;case keys.down:$(this).find(".subLinks").length>0&&("false"==$(this).find("div a:first").attr("aria-expanded")||null==$(this).find("div a:first").attr("aria-expanded")?($(this).find("div a:first").attr("aria-expanded","true"),$(this).find(".subLinks").addClass("showMenu")):($(this).find("div a:first").attr("aria-expanded","false"),$(this).find(".subLinks").removeClass("showMenu")),a.dropdownSubIndex=0,a.gotodropdownSubIndex(this.querySelector("ul"),0),$(this).addClass("active"));break;case keys.up:if($(this).find(".subLinks").length>0){var c=this.querySelector("ul");a.dropdownSubIndex=c.querySelectorAll("li").length-1,a.gotodropdownSubIndex(c,a.dropdownSubIndex)}break;case keys.esc:document.querySelector('a[href="#related"]').focus()}b.preventDefault()})}),Array.prototype.forEach.call(a.dropdownSubMenuItems,function(b){b.setAttribute("tabindex","-1"),b.addEventListener("keydown",function(b){switch(b.keyCode){case keys.tab:a.dropdownIndex(b.shiftKey?a.dropdownCurrentIndex-1:a.dropdownCurrentIndex+1);break;case keys.right:a.dropdownIndex(a.dropdownCurrentIndex+1);break;case keys.left:a.dropdownIndex(a.dropdownCurrentIndex-1);break;case keys.esc:a.dropdownIndex(a.dropdownCurrentIndex);break;case keys.down:a.gotodropdownSubIndex(this.parentNode,a.dropdownSubIndex+1);break;case keys.up:a.gotodropdownSubIndex(this.parentNode,a.dropdownSubIndex-1);break;case keys.enter:$(this).find("a:first")[0].click();break;case keys.space:$(this).find("a:first")[0].click()}return b.preventDefault(),b.stopPropagation(),!1}),b.addEventListener("touchstart",function(a){return a.preventDefault(),a.stopPropagation(),$(this).find("a:first")[0].click(),!1})})},$(document).ready(function(){dropDownMenuItem=document.querySelectorAll("#utility-nav ul.dropdownNav > li"),dropDownSubMenuItems=document.querySelectorAll("#utility-nav ul.dropdownNav > li li"),dropdownMenuItemLink=document.querySelectorAll("#utility-nav ul.dropdownNav > li div.menuLinkContainer a"),new deltaDropdown({dropdownMenuItems:dropDownMenuItem,dropdownSubMenuItems:dropDownSubMenuItems,dropdownMenuItemLinks:dropdownMenuItemLink}),dropDownMenuItem=document.querySelectorAll("#_deltaDropDownMenu_tmplHolder > li"),dropDownSubMenuItems=document.querySelectorAll("#_deltaDropDownMenu_tmplHolder > li li"),dropdownMenuItemLink=document.querySelectorAll("#_deltaDropDownMenu_tmplHolder > li div.breadcrumbLinkContainer a"),new deltaDropdown({dropdownMenuItems:dropDownMenuItem,dropdownSubMenuItems:dropDownSubMenuItems,dropdownMenuItemLinks:dropdownMenuItemLink}),DeltaUtils.exists($(dropDownMenuItem))&&$(dropDownMenuItem).size()>0&&$(dropDownMenuItem[0]).attr("aria-describedby","navigationLandmark")}),document.domain="delta.com",$(document).ready(function(){DeltaUtils.isHomePage()||delta.dataLayer.init()});try{$(document).on("click",".toolTipErrorCount,.toolTipMakeCorrection",function(){DeltaUtils.exists($(this).attr("data-form"))&&$(this).attr("data-form").length>0?($("body").offset().top<$("#"+$(this).attr("data-form")).find(".errorInput:first").offset().top&&($("body").scrollTop($("#"+$(this).attr("data-form")).find(".errorInput:first").offset().top+200),$("#"+$(this).attr("data-form")).find(".errorInput:first").focus()),$("#"+$(this).attr("data-form")).find(".errorInput:first").focus()):($("body").offset().top<$(this).parents().find("form").find(".errorInput:first").offset().top&&($("body").scrollTop($(this).parents().find("form").find(".errorInput:first").offset().top+200),$(this).parents().find("form").find(".errorInput:first").focus()),$(this).parents().find("form").find(".errorInput:first").focus())}),CustomerInfo.isLoggedIn()&&DeltaUtils.refreshloginTimeout()}catch(error){}