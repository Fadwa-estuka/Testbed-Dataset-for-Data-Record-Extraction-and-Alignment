$(document).ready(function(){doResize();$(window).smartresize(doResize);});function doResize(){var $windowWidth=$(window).width();if($windowWidth<=750||($windowWidth<=767&&$.browser.webkit)){$(".openPageSlide").show();$(".searchToggle").show();$(".mainNavToggle").show();$(".searchBox").addClass("searchBoxNone");$(".mainNav").addClass("mainNavNone");$(".listingHeader .results a.resultsListing").hide();$(".listingHeader .results a.resultsGrid").hide();}else{$(".button.share").click(function(){$('#share-link').select();$('#share-link2').select();return false;});$(".openPageSlide").hide();$(".searchToggle").hide();$(".mainNavToggle").hide();$(".searchBox").removeClass("searchBoxNone");$(".mainNav").removeClass("mainNavNone");$(".listingHeader .results a.resultsListing").show();$(".listingHeader .results a.resultsGrid").show();$('.flexslider').flexslider({animation:"slide"});}
$(".autocomplete-suggestions").each(function(){var $autocomplete=$(this);$autocomplete.css('width',$autocomplete.siblings('input:data(autocomplete)').width()+ 18);});var $navLocation=$("#content ul#nav li.navLocation a");$navLocation.removeClass('countryChooserFix');var $navItemsWidth=0;$("ul#nav > li").filter(":visible").each(function(){$navItemsWidth+=$(this).outerWidth();});if($navItemsWidth+ 5>$windowWidth){$navLocation.addClass('countryChooserFix');}}
(function($,sr){var debounce=function(func,threshold,execAsap){var timeout;return function debounced(){var obj=this,args=arguments;function delayed(){if(!execAsap)
func.apply(obj,args);timeout=null;}
if(timeout)
clearTimeout(timeout);else if(execAsap)
func.apply(obj,args);timeout=setTimeout(delayed,threshold||100);};};jQuery.fn[sr]=function(fn){return fn?this.bind('resize',debounce(fn)):this.trigger(sr);};})(jQuery,'smartresize');