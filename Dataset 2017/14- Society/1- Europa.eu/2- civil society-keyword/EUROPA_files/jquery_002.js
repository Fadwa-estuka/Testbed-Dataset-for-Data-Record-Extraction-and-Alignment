window.pState = '';
window.cState = '';
//Device => true if mobile
window.device = true;
window.swipe = true;
window.topicHeightFix = 20;
window.mBreakPoint = 768;
window.urlMgmt = "history";
window.targetId = 0;
var lastY;

$( document ).ready(function() {
	// display the filters and search options block
	// they are hidden for the browsers with JS deactivated
	// also resettings the content position
	$('.layout-noright, .layout-left').show();

	// fix substr function in IE <=8 
	// only run when the substr function is broken
	 if ('ab'.substr(-1) != 'b') {
	   /**
	    *  Get the substring of a string
	    *  @param  {integer}  start   where to start the substring
	    *  @param  {integer}  length  how many characters to return
	    *  @return {string}
	    */
	   String.prototype.substr = function(substr) {
	     return function(start, length) {
	       // did we get a negative start, calculate how much it is from the beginning of the string
	       if (start < 0) start = this.length + start;

	       // call the original function
	       return substr.call(this, start, length);
	     }
	   }(String.prototype.substr);
	 }		
		
	
	window.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
	initAll();
	
	$(window).unbind('orientationchange');
	$(window).unbind('resize');
	
	var resizeTimer;
	if(window.device){
		//attach orientationchange event if mobile version
		$(window).unbind('orientationchange');
		$(window).bind('orientationchange', function(e){
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(do_resize, 200);
		});
	}
	else{
		//attach event on resize if desktop version
		$(window).unbind('resize');
		$(window).bind('resize', function(e){
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(do_resize, 200);
		});
	}
	
	do_resize();
	initSearchTool();
	
	////////////////////// INIT FILTERS OPTION ///////////////////////////
	if ($('div.aside li').length > 0) {		
		$('.aside>ul li>a').bind('click',function(e){
			e.preventDefault();		
			//reset
			if($(this).parent().hasClass('active')){
				initTopic();
			} else {	
				//not reset
				$('#topic_filter').prepend('<span></span>');
				if(!$('.reset-link').is(':visible')){
					$('.reset-link').fadeIn(500);
				}
				$('.aside>ul li').removeClass('active');
				$('.aside>ul li i').remove();
				$(this).parent().addClass('active');
				$(this).parent().append('<a href="resetTopic" class="resetTopic"><i class="fa fa-times"></i></a>');
				$('.resetTopic').unbind('click');
				$('.resetTopic').bind('click',function(e){
					
					initTopic();
					return submit_url( ($(this).attr('href') +'&' + $('#search_form').serialize()+'&'+$('#options_form').serialize()).replace('&query_source=&','&') );
					
				});
				if ($(this).parent().hasClass('level1')){
					$('li.level1').removeClass('unfolded');
					$(this).parent().removeClass('folded');
					$(this).parent().addClass('unfolded');
					$('li.level2').css('display','none');
					$.each($('li.level1.unfolded'),function(){
						$(this).nextUntil('.level1').css('display','block');
					})
				}
			}
			return submit_url( ($(this).attr('href') +'&' + $('#search_form').serialize()+'&'+$('#options_form').serialize()).replace('&query_source=&','&') );
		});
	} else {
		$('#info-src').hide();
	}
	////////////////////// INIT MORE BUTTON ///////////////////////////
	initMore($('ul.results .button_container').data('max'));
	$('ul.results .button_container').remove();
});



//----------------------
//------MAIN INIT-------
//----------------------
function initAll(){
	
	is_history();
	
	url_analyser();
	
	initDatePicker('.date-picker');
	
	initScrollTop();	
	$('#search_form').attr('action',"index.do");
	$('#search_form').submit(function(e){
        $('#update_container').fadeOut(); // another submit button appearing when changing the filter options
		initTopic(false);
		if(window.cState == 'mobile'){
			optionPanelClose();
		}
		
		return submit_url($(this).attr('action')+'?'+ ($(this).serialize()+'&'+$('#options_form').serialize()).replace('&query_source=&','&') );
	});
	
    //close link to button on the panel
    $('.close').remove();
	
	//date 
    if($('#more_options_date').val() != 0){
    	$('.date-slider .fragment .form-inline').css('display','none');
    }	
	$('#more_options_date').change(function(e){
		if ($( this ).val()==0){
			$('.date-slider .fragment .form-inline').css('display','block');
		}
		else{	
			$('.date-picker').val('');
			$('.date-slider .fragment .form-inline').css('display','none');
		}
	});
	
	
	$('.sidebar').vmenu();
}

function do_resize(){
	
	/*hack to get the universal width, without scroll bar*/
	document.body.style.overflow = "hidden";
	var main_content_width = document.body.clientWidth;
	document.body.style.overflow = "";
	
	if(main_content_width>=window.mBreakPoint+1){
		// reposition the content to the right place
		// previously: the content was aligned from the left for js-disabled browser
		$('.layout-content').css('margin-left', '300px');
		
		//desktop
		window.cState = 'desktop';
		
		if(window.cState != window.pState){
			resetAllEvent();
			initDesktopSearch();
			window.pState = window.cState;
		}
	}
	else{
		$('.layout-content').css('margin-left', '0px');
		
		//mobile
		window.cState = 'mobile';
		
		resetAllEvent();
		initResponsiveSearch();
		window.pState = window.cState;
	}
	
}

function resetAllEvent(){
	//click
	$('.options_container>a.close').unbind('click');
	$('#info-src>a.close').unbind('click');
	$('#topic_filter').unbind('click');
	$('#mSearchBtn').unbind('click');
	$('.tool_container>a').unbind('click');
	
	$(document).off('swipe').off('swiperight');
	$('body').unbind('touchmove');
	$('body').unbind('touchend');
	
	$('#info-src').css({top: '0px'});
	$('.options_container').css({top: '0px'});
	
	$('#overlayer-panel').remove();
	$('body').removeClass('opanel');
	
	$('#topic_filter').css('display','none');
	$('#mSearchBtn').css('display','none');
	$('.btn_panel').removeClass('open');
	
	initSideBarFixed();
}

function initDesktopSearch(){
	$('.options_container').css('height','auto');
	$('#info-src').css('height','auto');
	
	$('.options_container').css('right','0px');
	$('#info-src').css('right','0px');
	
	if($('ul.results li').length == 0){
		$('#info-src').css('display','none');
	}
	
}

function initResponsiveSearch(){
	$('.options_container').css('min-height','100%');
	$('#info-src').css('min-height','100%');
	initSwipe();
	
	topicPanelOpen();
	
	optionPanelOpen();
	
	/*SCROLL PANEL MGMT*/
	var scrollPanel = false;
	var scrollUp;
	var panelOpen, delta,optop;
	var touchTS;
	/*smartphone scroll panel when general scroll is de activated*/
	$('body').bind('touchstart', function(e){
		touchTS = event.timeStamp;
	});
	
	$('body').bind('touchmove', function(e){
		if($('body').hasClass('opanel')){
			if(event.timeStamp-touchTS>=100){
				scrollPanel = true;
				panelOpen = ($('#topic_filter').hasClass('open'))?'#info-src':'.options_container';
				delta = $(window).outerHeight()-$(panelOpen).outerHeight();
				var currentY = e.originalEvent.touches[0].clientY;
				optop = $(panelOpen).position().top;
				
				if(currentY > lastY){
					scrollUp = false;
					optop = optop+5;
					optop = (optop<=0)?optop:0;
				}else{
					scrollUp = true;
					optop = optop-5;
					optop = (optop<=delta)?delta:optop;
				}
				lastY = currentY;
				$(panelOpen).css({ 'top': optop+'px'});
			}
			e.preventDefault();
		};
	});
	$('body').bind('touchend', function(e){
		if(scrollPanel){
			scrollPanel = false;
			if(!scrollUp){
				optop = optop+40;
				optop = (optop<=0)?optop:0;
			}
			else{
				optop = optop-40;
				optop = (optop<=delta)?delta:optop;
			}
			$(panelOpen).animate({ top: optop+'px'},400,'easeOutQuart');
		}
	});
}

function initSideBarFixed(){
	
	$('.sidebar').vmenu('reset');
	$('.sidebar').vmenu().unbind('vmenufixed');
	$('.sidebar').vmenu().bind('vmenufixed', function(event,data){searchFormFixed(data);});
}

//----------------------
//------MISC INIT-------
//----------------------
//Link to top
function initScrollTop(){
    $('li.top-link a').on('click',function(e){
        e.preventDefault();
 
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({'scrollTop': $(target).offset().top}, 400, 'swing');
 
    });
}

//Date picker (search options panel)
function initDatePicker(dpClass){
	var el = document.createElement('input');
	el.setAttribute('type','date');
	//if type is text then and only then should you call the fallback
	if(el.type === 'text'){
		$( dpClass ).datepicker({ dateFormat: "dd/mm/yy",firstDay: 1,maxDate: 0 });
	}
	else{
		$.each($( dpClass ), function(){
			var date = $(this).attr('value').split('/');
			$(this).attr('value',date[2]+'-'+date[1]+'-'+date[0]);
			$(this).attr('max',$.datepicker.formatDate( "yy-mm-dd", new Date()));
		})
	}
}

//DOM mod when left menu change from/to fixed position
function searchFormFixed(data){
	
	if(data.fixed){
		$('#search_container').detach().prependTo('.sidebar.scrollable').addClass('fixed');
		$('html').addClass('sideFixed');
		if(($('.sidebar').height()>=$(window).height()) && (window.cState != 'mobile')){
			$('#search_field').addClass('sideFixed');
			$('.sidebar').css('height',$(window).height());
			$('.sidebar').css('overflow-y','auto');
		}
	}
	else{
		$('html').removeClass('sideFixed');
		$('#search_field').removeClass('sideFixed');
		$('h1').after($('#search_container').detach().removeClass('fixed'));
		if(window.cState != 'mobile'){
			$('.sidebar').css('height','auto');
			$('.sidebar').css('overflow-y','auto');
        }
	}
}



//-----------------
//-----PANELS------
//-----------------

function topicPanelOpen(){
	/*TOPICS*/
	
	if($('#topic_filter').length == 0) $('#search_form').after('<a id="topic_filter" href="topic" class="btn_panel"><i class="fa fa-filter fa-2"></i></a>');
	
	if($('ul.results li').length == 0){
		$('#topic_filter').css('display', 'none');
	}
	else{
		$('#topic_filter').css('display', 'block');
	}
	
	$('#info-src').css({right: "-"+$('#info-src').width()+25+"px"});
	$('.options_container').css({right: "-"+$('.options_container').width()+25+"px"});
	
	$('#info-src>a.close').click(function(e){
		e.preventDefault();
		topicPanelClose();
	})
	$('#topic_filter').click(function(e){
		e.preventDefault();
		if(!$('#topic_filter').hasClass('open')){
			$('#info-src').css({ 'top': '0px'});
			$('#topic_filter').addClass('open');
			$('#info-src').css({display: "block"});
			$('#info-src').animate({right: "0px"});
			if($('#overlayer-panel').length == 0) $('body').prepend('<div id="overlayer-panel"></div>');
			$('#overlayer-panel').animate({opacity: "0.5"});
			$('#overlayer-panel').unbind('click');
			$('#overlayer-panel').bind('click',function(){topicPanelClose();});
			$('body').addClass('opanel');
		}
		else{
			topicPanelClose();
		}
		if($('#mSearchBtn').hasClass('open')){
			optionPanelClose();
		}
	})
	/*TOPICS END*/

}

function optionPanelOpen(){
	/*TOOLS*/
	if($('#mSearchBtn').length == 0) $('#topic_filter').before('<a id="mSearchBtn" href="searchtools" class="btn_panel"><i class="fa fa-cog fa-2"></i></a>');
	$('#mSearchBtn').css('display', 'block');

	$('.options_container').css({right: "-"+$('.options_container').width()+25+"px"});
	$('#info-src').css({right: "-"+$('#info-src').width()+25+"px"});
	
	$('.options_container>a.close').click(function(e){
		e.preventDefault();
		optionPanelClose();
	})
	$('#mSearchBtn').click(function(e){
		e.preventDefault();
		if(!$('#mSearchBtn').hasClass('open')){
			$('.options_container').css({ 'top': '0px'});
			$('#mSearchBtn').addClass('open');
			$('.options_container').css({display: "block"});
			$('.options_container').animate({right: "0px"});
			if($('#overlayer-panel').length == 0) $('body').prepend('<div id="overlayer-panel"></div>');
			$('#overlayer-panel').animate({opacity: "0.5"});
			$('#overlayer-panel').unbind('click');
			$('#overlayer-panel').bind('click',function(){optionPanelClose();});
			$('body').addClass('opanel');
		}
		else{
			optionPanelClose();
		}
		if($('#topic_filter').hasClass('open')){
			topicPanelClose();
		}
	})
	/*inner*/
	/*TOOLSEND*/
}

function topicPanelClose(){
	$('#topic_filter').removeClass('open');
	$('#info-src').css({display: "block"});
	
	$('#info-src').animate(
		{right: "-"+($('#info-src').width()+25)+"px"},
		{done: function() {
			if(!$('.btn_panel').hasClass('open')){
				$('#overlayer-panel').animate({opacity: "0"},function(){if(!$('.btn_panel').hasClass('open')) $(this).remove()});
				$('body').removeClass('opanel');
			}
			window.swipe = true;
		}
		}
	);
}

function optionPanelClose(){
	$('#mSearchBtn').removeClass('open');
	$('.options_container').css({display: "block"});
	
	$('.options_container').animate(
		{right: "-"+($('.options_container').width()+25)+"px"},
		{done: function() {
			if(!$('.btn_panel').hasClass('open')){
				$('#overlayer-panel').animate({opacity: "0"},function(){if(!$('.btn_panel').hasClass('open')) $(this).remove()});
				$('body').removeClass('opanel');
			}
			window.swipe = true;
		}
		}
	);
}

// init the change behaviour on the search tool panel
function initSearchTool(){

    $('#update_container').hide();
    $('#update_container').click(function(){$('#search_form').submit()});
	// reset button behavior of the search options form 
	$('a.options_form_reset').click(function(e){
		e.preventDefault();
		resetOptionsForm();
	});
	//init
	if (checkOptionsReset(false)) {
		$('#mSearchBtn').prepend('<span></span>');
	}
	
	// display the reset button only if an option of the form has been altered
    $('.controls select, .controls input').change(function(){
    	checkOptionsReset();
	});
}
function resetOptionsForm(){
	$('#options_form').find(':selected').removeAttr('selected');
	$('#more_options_language').find('option[value="'+$('html').attr("lang")+'"]').prop('selected','selected');	
	//  if we're in restricted mode, then the default option is restricted
	// in global mode, the default option is "all"
	if ( $('#f-more_options_source').hasClass('hidden') ) {
		$('#more_options_source').find('option[value="global"]').prop('selected','selected');
	} else {
		$('#more_options_source').find('option[value="restricted"]').prop('selected','selected');
	}	
	$('a.options_form_reset').fadeOut();
	$('#mSearchBtn span').remove();
	$('#update_container').fadeIn();
	$('.date-slider .fragment .form-inline').hide();
	$('.date-picker').val('');

}

//check if search tool panel is reseted
function checkOptionsReset(updateC){
	
	var hasChanged=false;
	
	$.each($('.controls select'),function(){
		//  if we're in restricted mode, then the default option is restricted
		// in global mode, the default option is "all"
		if ($(this).attr('name')=='more_options_source') {
			if ( (!$('#f-more_options_source').hasClass('hidden')) && $(this).find(":selected").index() != 1 ) {
				hasChanged=true;
			}
		} else {
			if (($(this).find(":selected").index() != 0 && $(this).attr('name')!='more_options_language')||($(this).attr('name')=='more_options_language' && $(this).val() != $('html').attr("lang"))) {
				hasChanged=true;
			}			
		}
	});
	
	if (hasChanged){
		$('a.options_form_reset').fadeIn(function(){
			if(typeof updateC == 'undefined' || updateC){
				$('#update_container').fadeIn();
			}
		});
	}
	else{
		$('a.options_form_reset').fadeOut(function(){
			if(typeof updateC == 'undefined' || updateC){
				$('#update_container').fadeIn();
			}
		});
	}
}







//mgmt of the swipe event to close the panels
function initSwipe(){
	$(document)
		.off('swipe').off('swiperight')
		.on( "swiperight",'#info-src', function(e){
			e.stopPropagation();
			if(window.swipe){
				window.swipe = false;
				topicPanelClose();
			}
		})
		.on( "swiperight",'.options_container', function(e){
			e.stopPropagation();
			if(window.swipe){
				window.swipe = false;
				optionPanelClose();
			}
		});
}

function initTopic(submit){
	
	if(typeof submit != 'undefined' && !submit){
		$('.aside>ul').html('');
	}
	else{
		$('.aside>ul li').removeClass('active');
		$('.aside>ul li i').remove();
		$('li.level1').removeClass('unfolded');
		$('li.level2').css('display','none');
	}
	$('.reset-link').fadeOut(500);
	$('#topic_filter span').remove();
}

function initFilterTopics(){
	
	$('.reset-link').unbind('click');
	$('.reset-link').bind('click',function(e){
		
		initTopic();
		
		return submit_url( ($(this).attr('href') +'&' + $('#search_form').serialize()+'&'+$('#options_form').serialize()).replace('&query_source=&','&') );
		
	});
	
	$('.aside>ul li>a').unbind('click');
	$('.aside>ul li>a').bind('click',function(e){
		
		//reset
		if($(this).parent().hasClass('active')){
			initTopic();
		}
		//not reset
		else{
			$('#topic_filter').prepend('<span></span>');
			if(!$('.reset-link').is(':visible')){
				$('.reset-link').fadeIn(500);
			}
			$('.aside>ul li').removeClass('active');
			$('.aside>ul li i').remove();
			$(this).parent().addClass('active');
			$(this).parent().append('<a href="resetTopic" class="resetTopic"><i class="fa fa-times"></i></a>');
			$('.resetTopic').unbind('click');
			$('.resetTopic').bind('click',function(e){
				
				initTopic();
				return submit_url( ($(this).attr('href') +'&' + $('#search_form').serialize()+'&'+$('#options_form').serialize()).replace('&query_source=&','&') );
				
			});
			if ($(this).parent().hasClass('level1')){
				$('li.level1').removeClass('unfolded');
				$(this).parent().removeClass('folded');
				$(this).parent().addClass('unfolded');
				$('li.level2').css('display','none');
				$.each($('li.level1.unfolded'),function(){
					$(this).nextUntil('.level1').css('display','block');
				})
			}
		}

		return submit_url( ($(this).attr('href') +'&' + $('#search_form').serialize()+'&'+$('#options_form').serialize()).replace('&query_source=&','&') );

	});
	
	$('li.level2').css('display','none');
	$.each($('li.level1.unfolded'),function(){
		$(this).nextUntil('.level1').css('display','block');
	})
	if($('.active').length){
		$('.active').append('<a href="resetTopic" class="resetTopic"><i class="fa fa-times"></i></a>');
		$('.resetTopic').unbind('click');
		$('.resetTopic').bind('click',function(e){
			initTopic();
			
			return submit_url( ($('.reset-link').attr('href') +'&' + $('#search_form').serialize()+'&'+$('#options_form').serialize()).replace('&query_source=&','&') );
			
		});
		$('#topic_filter').prepend('<span></span>');
		$('.reset-link').fadeIn();
		
	}
	else {
		$('.reset-link').hide();
		$('#topic_filter span').remove();
	}
	
}

//update the language links on the top right
function updateLanguageSelector() {
	var tempUrl = ($('#search_form [name!=swlang]').serialize()+'&'+$('#options_form [name!=more_options_language]').serialize()).replace('&query_source=&','&');
	$.each($('#language-selector option'),function(){
		$(this).attr('value', 'index.do?'+ tempUrl + '&swlang=' + $(this).attr('value').substr(-2)  );
	});
}
//-----------------
//-------AJAX------
//-----------------

function submitAjaxSearch(params,more){
	
	if(params!=""){
		if(typeof more == 'undefined'){
			more = false;
		}
		var targetUrl;
		var verity = getUrlParameter('verity_source');
        if (!verity || verity=='') verity = getUrlParameter('SourceQueryText');
		if ($('select[name=more_options_source]').val() != "global") {
			if(verity && verity!='') targetUrl = "ajax!verity.do";
			else targetUrl = "ajax!restricted.do";
		} else {
			targetUrl = "ajax!europa.do";
		}		
	    $('#indicator').fadeIn(200);
		$.ajax({
			url: targetUrl,
			data: params,
			type: "POST",
			dataType : 'html',
			cache : false,
			timeout: 10000
		}).done(function(data) {
			$('#indicator').fadeOut(400);
			if($(data).length>1 )
			{
				// hide the error message (if any)
				// and display the results list
				$('div.error_message').hide();
				$('ul.results').show();
				parseResults(data,more);
				//init more button based on the total number of value
				initMore(data);
				parseFilter(data);			
			} else {
				// display an error message if there is no result
				if ( ! $('div.results_container div.error_message').length ) {
					$('div.results_container').append('<div class="error_message"></div>');
				}
				// hide the results list (if any)
				// and display the error message
				$('ul.results, #more_result').hide();
				$('div.error_message').show();
				$('div.error_message').html(data);
				// hide filters
				(window.cState == 'mobile')?$('#topic_filter').fadeOut(500):$('#info-src').fadeOut(500);
			}
			updateLanguageSelector();
			if(!more) $('li.top-link a').trigger('click');
		}).error(function() {
		    $.ajax({
                url: "./ajax!errorTimeout.do",
                type: "POST",
                data: params
            }).done(function(data) {
                $('#indicator').fadeOut(400);
				// display an error message if there is no result
				if ( ! $('div.results_container div.error_message').length ) {
					$('div.results_container').append('<div class="error_message"></div>');
				}
				// hide the results list (if any)
				// and display the error message
				$('ul.results, #more_result').hide();
				$('div.error_message').show();
				$('div.error_message').html(data);
				// hide filters
				(window.cState == 'mobile')?$('#topic_filter').fadeOut(500):$('#info-src').fadeOut(500);
				updateLanguageSelector();
				$('li.top-link a').trigger('click');
            });
		});
		if (checkOptionsReset(false)) {
			$('#mSearchBtn').prepend('<span></span>');
		} else {
			$('#mSearchBtn span').remove();
		}
	}
	else{
		$('.results').html('');
		$('.aside > ul').html('');
		$('#info-src').hide();
	}
}

function parseResults(data,more){
	var contentReturn =  $(data).filter('.content-block-ecsearchpj-js');
	if (contentReturn!=null && $(contentReturn).length) {
		(more)?$('.results').append($(contentReturn).html()):$('.results').html($(contentReturn).html());
	}
	$('.newItem').fadeIn(500, function(){$(this).removeClass('newItem');});	
}

function parseFilter(data){
	var contentReturn = $(data).filter('#filter-block-ecsearchpj-js');
	if (contentReturn!=null &&  $(contentReturn).find('a').length>=1) {
		$('.aside > ul').html($(contentReturn).html());
		(window.cState == 'mobile')?$('#topic_filter').fadeIn(500):$('#info-src').fadeIn(500);
	}
	initFilterTopics();	
}


//More btn (main list)
function initMore(data){
	var numShown = $('ul.results li').length;       
	var currentPage = Math.ceil(numShown/10);
	var nb=0;
	if ($.isNumeric(data)) {
		if (data > 0) {
			nb=data;
		} 
	} else {
		nb = parseInt($(data).filter('#nb').text());
	}
	var numPage = Math.floor(nb/10 +1) ;
	$('#more_result>a').unbind('click');
	if (numPage >= currentPage+1){
		currentPage++;
		$('#more_result').fadeIn(500);
		$('#more_result>a').bind('click',function(e){
			e.preventDefault();
			var complete_path = (window.urlMgmt == "history")?window.location.search.substring(1)+'&page='+currentPage:window.location.hash.substring(1)+'&page='+currentPage;
			if (! window.location.hash) {
				complete_path=window.location.search.substring(1)+'&page='+currentPage;
			}
			submitAjaxSearch(complete_path,true);
		})
	}
	else{
		$('#more_result').fadeOut(500);
	}
}
//-----------------
//-------URL-------
//-----------------

function url_analyser(){
	
	
	var query;
	if(window.urlMgmt == "history"){
		$(window).unbind('popstate');
		$(window).bind('popstate', function(e) {
			query = window.location.search.substring(1);
			submitAjaxSearch(query);
		})
	}
	else{
		
		$(window).unbind('hashchange');
		$(window).bind('hashchange', function(){
			query = window.location.hash.substring(1);
			submitAjaxSearch(query);
		});
	}
}

function submit_url(url){
	url +=  '&swlang='+$('html').attr("lang");
	if(window.urlMgmt != "hashbang"){
		history.pushState({ id: window.targetId }, '', url);
		window.targetId++;
		$(window).trigger('popstate');
		return false;
	}
	else{
		window.location.hash = '#'+url.substr(url.indexOf('?')+1,url.length)+'&'+Math.random();
		return false;
	}
}
//-----------------
//-----UTILS-------
//-----------------

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

function htmlDecode(value){

	if (value) {
		value = value.replace("<strong>","||strong||");
		value = value.replace("</strong>","||/strong||");	
		value = $('<div/>').html(value).text();
		value = value.replace("||/strong||","</strong>");
		value = value.replace("||strong||","<strong>");
		return value;
	} else {
		return '';
	}

}
//check if browser support history API and set window.urlMgmt
function is_history(){
	if(Modernizr.history && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/)){
		if (navigator.userAgent.indexOf("Android") === -1) {
			// No Android, simply return the 'proper' check
			window.urlMgmt = "history";
		} else {
			// We need to check for the stock browser (which identifies itself
			// as 'Mobile Safari'), however, Chrome on Android gives the same
			// identifier (and does support history properly), so check for that too
			if (navigator.userAgent.indexOf("Mobile Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1) {
				// Buggy implementation, always return false
				window.urlMgmt = "hashbang";
			} else {
				// Chrome, return the proper check
				window.urlMgmt = "history";
			}
		}
	}
	else{
		window.urlMgmt = "hashbang";
	}
	
	if (window.location.hash !=''){
		var base_url = (window.location.origin)?window.location.origin+window.location.pathname:window.location.pathname;;
		
		var new_url = base_url+window.location.hash.replace('#','?');
		if(window.urlMgmt=='history'){
			history.pushState({ id: window.targetId }, '', new_url);
		}
		window.location.href=new_url;
	}
}
