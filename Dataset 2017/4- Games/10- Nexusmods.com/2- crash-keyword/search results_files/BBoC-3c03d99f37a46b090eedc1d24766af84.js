var rws=10;
var cls=60;
var is_zip_loaded = new Array();
var wys_std_opt = {buttons: "bold,italic,underline,strike,quote,|,img,video,link,|,bullist,numlist,|,fontcolor,fontsize,fontfamily,|,justifyleft,justifycenter,justifyright,|,removeFormat"};
				
function js_mktime(hour,minute,month,day,year) 
{
    return new Date(year, month - 1, day, hour, minute, 0, 0).getTime() / 1000;
}

function loadZip(file_id, game_id)
{
	loadBox(base_domain+"/ajax/zipcontent/?f_id=" + file_id + "&g_id=" + game_id  );
}				

function submitWithWYS()
{
	greyMe('btSubmit'); 
	var el = document.getElementById('submitbtn');
	el.click();
}				
				
function chkReportForm()
{
	if($("#pType").val() == 0)
	{
		$("#pError").html('Please select a category');
	}
	else if ($("#pDesc").val() == '')
	{
		$("#pError").html('Please add a description');
	}
	else
	{
		greyMe('btSubmit'); 
		document['report'].submit();
	}
}
				
onload=function() {
	
	var elUsername = document.getElementById('username');
	if(elUsername)elUsername.focus();
	
	var inp=document.getElementsByTagName('input');
	for(c=0;c<inp.length;c++) {
		if(inp[c].value=='Height +') {
			inp[c].onclick=function() {
				hi_increase();
			}
		}
		if(inp[c].value=='Height -') {
			inp[c].onclick=function() {
				hi_decrease();
			}
		}
		if(inp[c].value=='Width +') {
			inp[c].onclick=function() {
				wi_increase();
			}
		}
		if(inp[c].value=='Width -') {
			inp[c].onclick=function() {
				wi_decrease();
			}
		}
	}
}

function toggleVisibility(elId)
{
	var el = document.getElementById(elId);
	if(el)
	{
		el.style.display = el.style.display == 'none' ? '' : 'none'; 
	}
}

function hi_increase() {
	rws = rws + 2;
	document.getElementById('txtara').rows=rws;
}

function hi_decrease() {
	if(rws>5) {
		rws = rws - 2;
		document.getElementById('txtara').rows=rws;
	}
}

function wi_increase() {
	cls = cls + 5;
	document.getElementById('txtara').cols=cls;
}

function wi_decrease() {
	if(cls>60) {
		cls = cls - 5;
		document.getElementById('txtara').cols=cls;
	}
}

function greyMe(spanId)
{
	var spanEl = document.getElementById(spanId);
	var loadingEl = document.getElementById('load_'+spanId);
	if(spanEl && loadingEl)
	{
		loadingEl.style.display = '';
		spanEl.style.display = 'none';
	}
}

function unGreyMe(spanId)
{
	var spanEl = document.getElementById(spanId);
	var loadingEl = document.getElementById('load_'+spanId);
	if(spanEl && loadingEl)
	{
		loadingEl.style.display = 'none';
		spanEl.style.display = '';
	}
}

$(function() {
	
	// comment tab
		$('.comment-list li div.left').each(function(){
			// console.log($(this).parent('.comment').outerHeight());
			$(this).css('height', $(this).parent('.comment').height()+'px');
		});
		
		// show add comment box
		$('.comment-add').live("click", function() 
		{
			//alert('meeeeeeeeep meep');
			$('#comment-form').toggle();
		});
	});


function showHide(shID,changeID,offText,onText,change) {
	if (document.getElementById(shID).style.display == 'none') {
		document.getElementById(shID).style.display = 'block';
		if(change == 1) {
			document.getElementById(changeID).innerHTML = offText;
		}
	}
	else {
		document.getElementById(shID).style.display = 'none';
		if(change == 1) {
			document.getElementById(changeID).innerHTML = onText;
		}

	}
}

// load a page using AJAX
$.fn.loadPage = function(url,header) 
{
	if(header != 1) 
	{
		$(this).empty().html('<div class="content-loading"><div class="files-tab-header"></div><span><img src="/contents/images/icons/loading.gif" /> Content loading ...</span></div>');
	} 
	else 
	{
		$(this).empty().html('<img src="/contents/images/icons/loading.gif" /> Content loading ...');
	}

	$(this).load( url, function( response, status, xhr ){ if ( status == "error" ){ $(this).empty().html('E'); }});

}

// onclick compatible loadPage
function ajaxpage(url, area, disc, showHeader) 
{
	var area = '#' + area;
	$(area).loadPage(url,showHeader == 1 ? 0 : 1);
	if(disc == 1) 
	{
		
	}

	
	var offtop = $( area ).offset() === null ? 0 : $( area ).offset().top;
	
    $('html, body').animate({
		scrollTop: offtop
    }, 1000);
	
}

// Load the nyroModal box
function loadBox(url, klose) {
	if(klose == 1) {
		$.nmManual(url, {
			closeOnClick: false,
	   })
	} else {
		$.nmManual(url);
	}
}

function ShowPopup( data )
{
	$.nmData( data );
}

function ShowPopupAndConfirmDownload( data, uri )
{
	var cd = $.get( uri );
	ShowPopup( data );
}

function textCheck(elem, expr, msg)
{
	return textCheckGeneral(elem, expr, msg, false);
}

function textCheckOrEmpty(elem, expr, msg)
{
	return textCheckGeneral(elem, expr, msg, true);
}

function textCheckGeneral(elem, expr, msg, isEmptyOk)
{
	var err = elem + '_error';
	elem = document.getElementById(elem);
	err = document.getElementById(err);
	
	if((isEmptyOk && elem.value=='') || elem.value.match(expr)) 
	{
		elem.style.border = "green 1px solid";
		err.style.display = 'none';
		if(document.getElementById('submit'))
		{
			document.getElementById('submit').style.border = "green 1px solid";
			document.getElementById('submit').disabled=false;
		}
		return false;
	}	
	else
	{
		elem.focus(); // set the focus to this input
		elem.style.border = "red 1px solid"; // set the border to red
		err.innerHTML = msg;
		err.style.display = 'inline';
		document.getElementById('submit').style.border = "red 1px solid";
		document.getElementById('submit').disabled=true;
		return true;
	} 

}

function confirmSubmit() {
var agree=confirm("Are you sure you wish to continue?");
if (agree)
	return true ;
else
	return false ;
}

function confirmSubmitMessage(message) {
var agree=confirm(message);
if (agree)
	return true ;
else
	return false ;
}
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);

/* 
* jCountdown 1.4.3 jQuery Plugin
* Copyright 2012 Tom Ellis http://www.webmuse.co.uk | MIT Licensed (license.txt)
*/
(function($) {
$.fn.countdown = function( method /*, options*/ ) {

	var defaults = {
			date: null,
			updateTime: 1000,
			htmlTemplate: "%d <span class='cd-time'>days</span> %h <span class='cd-time'>hours</span> %i <span class='cd-time'>mins</span> %s <span class='cd-time'>sec</span>",
			minus: false,
			onChange: null,
			onComplete: null,
			onResume: null,
			onPause: null,
			leadingZero: false,
			offset: null,
			servertime:null,
			hoursOnly: false,
			minsOnly: false,
			secsOnly: false,
			weeks: false,
			hours: false,
			yearsAndMonths: false,
			direction: "down",
			stopwatch: false
		},
		slice = Array.prototype.slice,
		clear = window.clearInterval,
		floor = Math.floor,
		msPerHr = 3600000,
		secPerYear = 31556926,
		secPerMonth = 2629743.83,
		secPerWeek = 604800,
		secPerDay = 86400,
		secPerHr = 3600,
		secPerMin = 60,
		secPerSec = 1,
		rDate = /(%y|%m|%w|%d|%h|%i|%s)/g,
		rYears = /%y/,
		rMonths = /%m/,
		rWeeks = /%w/,
		rDays = /%d/,
		rHrs = /%h/,
		rMins = /%i/,
		rSecs = /%s/,
		dateNow = function( $this ) {
			var now = new Date(),
				settings = $this.data("jcdData");

			if( !settings ) {
				return new Date();
			}

			if( settings.offset !== null ) {
				now = getTZDate( settings.offset );
			} else {
				now = getTZDate( null, settings.difference ); //Date now
			}

			now.setMilliseconds(0);

			return now;
		},
		getTZDate = function( offset, difference ) {		
			var hrs,
				dateMS,
				curHrs,
				tmpDate = new Date();

			if( offset === null ) {
				dateMS = tmpDate.getTime() - difference;
			} else {				
				hrs = offset * msPerHr;
				curHrs = tmpDate.getTime() - ( ( -tmpDate.getTimezoneOffset() / 60 ) * msPerHr ) + hrs;
				dateMS = tmpDate.setTime( curHrs );
			}
			return new Date( dateMS );
		},			
		timerFunc = function() {
			//Function runs at set interval updating countdown
			var $this = this,
				template,
				now,
				date,
				timeLeft,
				yearsLeft,
				monthsLeft,
				weeksLeft,
				//eDaysLeft,
				daysLeft,
				//eHrsLeft,
				hrsLeft,
				minsLeft,					
				//eMinsleft,
				secLeft,
				time = "",
				diff,
				extractSection = function( numSecs ) {
					var amount;

					amount = floor( diff / numSecs );
					diff -= amount * numSecs;

					return amount;
				},
				settings = $this.data("jcdData");

			if( !settings ) {
				return false;
			}

			template = settings.htmlTemplate;

			now = dateNow( $this );

			date = settings.dateObj; //Date to countdown to

			date.setMilliseconds(0);

			timeLeft = ( settings.direction === "down" ) ? date.getTime() - now.getTime() : now.getTime() - date.getTime();

			diff = Math.round( timeLeft / 1000 );

			daysLeft = extractSection( secPerDay );			
			hrsLeft = extractSection( secPerHr );			
			minsLeft = extractSection( secPerMin );
			secLeft = extractSection( secPerSec );

			if( settings.yearsAndMonths ) {

				//Add days back on so we can calculate years easier
				diff += ( daysLeft * secPerDay );

				yearsLeft = extractSection( secPerYear );				
				monthsLeft = extractSection( secPerMonth );				
				daysLeft = extractSection( secPerDay );
			}

			if( settings.weeks ) {
				//Add days back on so we can calculate weeks easier				
				diff += ( daysLeft * secPerDay );

				weeksLeft = extractSection( secPerWeek );
				daysLeft = extractSection( secPerDay );
			}

			//Assumes you are using dates within a month 
			//as years and months aren't taken into account
			if( settings.hoursOnly ) {
				hrsLeft += daysLeft * 24;
				daysLeft = 0;
			}

			//Assumes you are only using dates in the near future 
			//as years and months aren't taken into account
			if( settings.minsOnly ) {
				minsLeft += ( hrsLeft * 60 ) + ( ( daysLeft * 24 ) * 60 );
				daysLeft = hrsLeft = 0;
			}

			//Assumes you are only using dates in the near future 
			//as years, months and days aren't taken into account
			if( settings.secsOnly ) {
				secLeft += ( minsLeft * 60 );
				daysLeft = hrsLeft = minsLeft = 0;
			}

			settings.yearsLeft = yearsLeft;
			settings.monthsLeft = monthsLeft;
			settings.weeksLeft = weeksLeft;
			settings.daysLeft = daysLeft;
			settings.hrsLeft = hrsLeft;
			settings.minsLeft = minsLeft;
			settings.secLeft = secLeft;

			if( secLeft === 60 ) { 
				secLeft = 0;
			}

			if ( settings.leadingZero ) {			

				if ( daysLeft < 10 && !settings.hoursOnly ) {
					daysLeft = "0" + daysLeft;
				}

				if ( yearsLeft < 10 ) {
					yearsLeft = "0" + yearsLeft;
				}

				if ( monthsLeft < 10 ) {
					monthsLeft = "0" + monthsLeft;
				}

				if ( weeksLeft  < 10 ) {
					weeksLeft = "0" + weeksLeft;
				}

				if ( hrsLeft < 10 ) {
					hrsLeft = "0" + hrsLeft;
				}
				if ( minsLeft < 10 ) {
					minsLeft = "0" + minsLeft;
				}
				if ( secLeft < 10 ) {
					secLeft = "0" + secLeft;
				}
			}

			if ( ( settings.direction === "down" && ( now < date || settings.minus ) ) || ( settings.direction === "up" && ( date < now || settings.minus )  ) ) {

				time = template.replace( rYears, yearsLeft ).replace( rMonths, monthsLeft ).replace( rWeeks, weeksLeft );
				time = time.replace( rDays, daysLeft ).replace( rHrs, hrsLeft ).replace( rMins, minsLeft ).replace( rSecs, secLeft );

			} else {
				time = template.replace( rDate, "00");
				settings.hasCompleted = true;
			}

			$this.html( time ).trigger("change.jcdevt", [settings] ).trigger("countChange", [settings] );

			if ( settings.hasCompleted ) {
				$this.trigger("complete.jcdevt").trigger("countComplete");
				clear( settings.timer );
			}

			$this.data("jcdData", settings);
		},			
		methods = {		
			init: function( options ) {

				var opts = $.extend( {}, defaults, options ),
					local,
					testDate;

				return this.each(function() {
					var $this = $(this),
						settings = {},
						func;

					//If this element already has a countdown timer, just change the settings
					if( $this.data("jcdData") ) {
						$this.countdown("changeSettings", options, true);
						opts = $this.data("jcdData");
					}

					if( opts.date === null ) {
						$.error("No Date passed to jCountdown. date option is required.");
						return true;
					}

					testDate = new Date(opts.date);

					if( testDate.toString() === "Invalid Date" ) {
						$.error("Invalid Date passed to jCountdown: " + opts.date);
					}

					testDate = null;

					//Add event handlers where set
					if( opts.onChange ) {
						$this.on("change.jcdevt", opts.onChange );
					}

					if( opts.onComplete ) {
						$this.on("complete.jcdevt", opts.onComplete );
					}

					if( opts.onPause ) {
						$this.on("pause.jcdevt", opts.onPause );
					}

					if( opts.onResume ) {
						$this.on("resume.jcdevt", opts.onResume );
					}

					settings = $.extend( {}, opts );

					settings.originalHTML = $this.html();
					settings.dateObj = new Date( opts.date );
					settings.hasCompleted = false;
					settings.timer = 0;
					settings.yearsLeft = settings.monthsLeft = settings.weeksLeft = settings.daysLeft = settings.hrsLeft = settings.minsLeft = settings.secLeft = 0;
					settings.difference = null;

					if( opts.servertime !== null ) {
						var tempTime;
						local = new Date();

						tempTime = ( $.isFunction( settings.servertime ) ) ? settings.servertime() : settings.servertime;
						settings.difference = local.getTime() - tempTime;

						tempTime = null;
					}

					func = $.proxy( timerFunc, $this );
					settings.timer = setInterval( func, settings.updateTime );

					$this.data( "jcdData", settings );

					func();
				});
			},
			changeSettings: function( options, internal ) {
				//Like resume but with resetting/changing options				
				return this.each(function() {
					var $this  = $(this),
						settings,
						testDate,
						func = $.proxy( timerFunc, $this );

					if( !$this.data("jcdData") ) {
						return true;
					}

					settings = $.extend( {}, $this.data("jcdData"), options );

					if( options.hasOwnProperty("date") ) {
						testDate = new Date(options.date);

						if( testDate.toString() === "Invalid Date" ) {
							$.error("Invalid Date passed to jCountdown: " + options.date);
						}
					}

					settings.hasCompleted = false;
					settings.dateObj  = new Date( options.date );

					//Clear the timer, as it might not be needed
					clear( settings.timer );					
					$this.off(".jcdevt").data("jcdData", settings);	

					//As this can be accessed via the init method as well,
					//we need to check how this method is being accessed
					if( !internal ) {

						if( settings.onChange ) {
							$this.on("change.jcdevt", settings.onChange);
						}

						if( settings.onComplete ) {
							$this.on("complete.jcdevt", settings.onComplete);
						}

						if( settings.onPause ) {
							$this.on("pause.jcdevt", settings.onPause );
						}

						if( settings.onResume ) {
							$this.on("resume.jcdevt", settings.onResume );
						}

						settings.timer = setInterval( func, settings.updateTime );
						$this.data("jcdData", settings);
						func(); //Needs to run straight away when changing settings
					}

					settings = null;
				});
			},
			resume: function() {			
				//Resumes a countdown timer
				return this.each(function() {
					var $this = $(this),
						settings = $this.data("jcdData"),
						func = $.proxy( timerFunc, $this );

					if( !settings ) {
						return true;
					}

					$this.data("jcdData", settings).trigger("resume.jcdevt", [settings] ).trigger("countResume", [settings] );
					//We only want to resume a countdown that hasn't finished
					if( !settings.hasCompleted ) {
						settings.timer = setInterval( func, settings.updateTime );						

						if( settings.stopwatch && settings.direction === "up" ) {

							var t = dateNow( $this ).getTime() - settings.pausedAt.getTime(),
								d = new Date();
							d.setTime( settings.dateObj.getTime() + t );

							settings.dateObj = d; //This is internal date
						}					

						func();
					}
				});
			},
			pause: function() {	
				//Pause a countdown timer			
				return this.each(function() {
					var $this = $(this),
						settings = $this.data("jcdData");

					if( !settings ) {
						return true;
					}

					if( settings.stopwatch ) {
						settings.pausedAt = dateNow( $this );
					}
					//Clear interval (Will be started on resume)
					clear( settings.timer );
					//Trigger pause event handler
					$this.data("jcdData", settings).trigger("pause.jcdevt", [settings] ).trigger("countPause", [settings] );				
				});
			},
			complete: function() {
				return this.each(function() {
					var $this = $(this),
						settings = $this.data("jcdData");

					if( !settings ) {
						return true;
					}
					//Clear timer
					clear( settings.timer );
					settings.hasCompleted = true;
					//Update setting, trigger complete event handler, then unbind all events
					//We don"t delete the settings in case they need to be checked later on
					$this.data("jcdData", settings).trigger("complete.jcdevt").trigger("countComplete", [settings] ).off(".jcdevt");
				});		
			},
			destroy: function() {
				return this.each(function() {
					var $this = $(this),
						settings = $this.data("jcdData");

					if( !settings ) {
						return true;
					}
					//Clear timer
					clear( settings.timer );
					//Unbind all events, remove data and put DOM Element back to its original state (HTML wise)
					$this.off(".jcdevt").removeData("jcdData").html( settings.originalHTML );
				});
			},
			getSettings: function( name ) {
				var $this = $(this),
					settings = $this.data("jcdData");

				//If an individual setting is required
				if( name && settings ) {
					//If it exists, return it
					if( settings.hasOwnProperty( name ) ) {
						return settings[name];
					}
					return undefined;
				}
				//Return all settings or undefined
				return settings;
			}
		};

	if( methods[ method ] ) {
		return methods[ method ].apply( this, slice.call( arguments, 1 ) );
	} else if ( typeof method === "object" || !method ) {
		return methods.init.apply( this, arguments );
	} else {
		$.error("Method "+ method +" does not exist in the jCountdown Plugin");
	}
};

})(jQuery);function changeFixedVersion(issue_id)
{
	var text = $("#issue_fixed_input_" + issue_id).val();
	
	if (text.trim() == '') alert('please enter a version');
	else
	{
		greyMe('issue_fixed_btn_'+ issue_id);
		
		$.ajax(
		{
			type: "POST",
			url: base_domain+"/ajax/modbugs/?action=changefixedversion&",
			data: "fixed_version=" + text + "&issue_id=" + issue_id,
			success: function(msg) 
			{
				unGreyMe('issue_fixed_btn_'+ issue_id);
				$("#issue_fixed_link_" + issue_id).html(msg);
				$("#issue_fixed_link_" + issue_id).show();
				$("#issue_fixed_input_" + issue_id).hide();
				$("#issue_fixed_btn_" + issue_id).hide();
				
			}
		});
	}

}

function toggleVersionChange(issue_id)
{
	$("#issue_fixed_link_" + issue_id).toggle();
	$("#issue_fixed_input_" + issue_id).toggle();
	$("#issue_fixed_btn_" + issue_id).toggle();
}

function moveCommentToBugs(post_id)
{
	var title = $("#movetobugs_title_"+post_id).val();
	var existing_report_id =  $("#movetobugs_existing_"+post_id).val();

	if($.trim(title) == '' && (existing_report_id == 0 || typeof(existing_report_id) === "undefined"))
	{
		alert('You must either enter a title or select an existing bug report');
		return false;
	}
	else
	{
		greyMe('btMoveToBugs' + post_id);
		
		var str = $("#movetobugs_form_" + post_id).serialize();
		
		//$(this).empty().html('<img src="/contents/images/icons/loading.gif" /> Content loading ...');
		
		$.ajax(
		{
			type: "POST",
			url: base_domain+"/ajax/modbugs/?action=addfrompost&",
			data: str,
			success: function(msg) 
			{
				var ar = msg.split("|");
				
				if(ar[0] == 1)
				{
					$('#tab_bugs_button').click();
				}
				else				
				{
					alert(ar[1]);		
				}
			}
		});
		
	}
}

function changeIssueBlocking(issue_id)
{
	$.ajax(
	{
		type: "POST",
		url: base_domain+"/ajax/modbugs/?action=chissueblocking&",
		data: "issue_id=" + issue_id,
		success: function(msg) 
		{
			if(msg == 1)
			{
				// currently closed
				$("#chIssueBlock_" + issue_id).html('Unlock issue');
			}
			else
			{
				// currently open
				$("#chIssueBlock_" + issue_id).html('Lock issue');
			}
			
			$(".replylinkto_" + issue_id).toggle();
			$("#lockFor_" + issue_id).toggle();
		}
	});

}


function changeIssuePrivacy(issue_id)
{
	$.ajax(
	{
		type: "POST",
		url: base_domain+"/ajax/modbugs/?action=chissueprivacy&",
		data: "issue_id=" + issue_id,
		success: function(msg) 
		{
			if(msg === 1)
			{
				// currently set as private
				$("#chIssuePriv_" + issue_id).html('Set as public');
				$("#issuePrivateLabel_" + issue_id).show();
			}
			else
			{
				// currently set as public
				$("#chIssuePriv_" + issue_id).html('Set as private');
				$("#issuePrivateLabel_" + issue_id).hide();
			}
		}
	});

}

function deleteBugIssue(issue_id)
{
	if ( confirm("You are about to delete this report and all its replies. Are you sure?") !== true )
	{
		return false;
	}
	
	$.ajax(
	{
		type: "POST",
		url: base_domain+"/ajax/modbugs/?action=deleteissue&",
		data: "issue_id=" + issue_id,
		success: function(msg) 
		{
			$("#issue_" + issue_id).remove();
			$(".repliesto_" + issue_id).remove();
		}
	});
}

function deleteBugReply(reply_id)
{
	if ( confirm("Are you sure?") !== true )
	{
		return false;
	}
	
	$.ajax(
	{
		type: "POST",
		url: base_domain+"/ajax/modbugs/?action=deletereply&",
		data: "reply_id=" + reply_id,
		success: function(msg) 
		{
			$(".bugreplyid_" + reply_id).remove();
		}
	});
}

function changeBugIssueStatus(issue_id)
{
	var selectedValue = $("#changeissuestatus_"+issue_id).val();
	
	$.ajax(
		{
			type: "POST",
			url: base_domain+"/ajax/modbugs/?action=chstatus&",
			data: "issue_id=" + issue_id + "&status=" + selectedValue,
			success: function(msg) 
			{
				if(selectedValue == 0)
				{
					$("#issuestatus_"+issue_id).html('New issue').removeClass();
				}
				else if(selectedValue == 2)
				{
					$("#issuestatus_"+issue_id).html('Being looked at').removeClass().addClass('yellow');
				}
				else if(selectedValue == 3)
				{
					$("#issuestatus_"+issue_id).html('Solved').removeClass().addClass('green');
				}
				else if(selectedValue == 1)
				{
					$("#issuestatus_"+issue_id).html('Known issue').removeClass();
				}
				else if(selectedValue == 4)
				{
					$("#issuestatus_"+issue_id).html('Duplicate').removeClass();
				}
				else if(selectedValue == 5)
				{
					$("#issuestatus_"+issue_id).html('Not a bug').removeClass();
				}
				else if(selectedValue == 6)
				{
					$("#issuestatus_"+issue_id).html('Won\'t fix').removeClass();
				}
				else if(selectedValue == 7)
				{
					$("#issuestatus_"+issue_id).html('Needs more info').removeClass().addClass('yellow');
				}
				
				$("#changeissuestatus_"+issue_id).toggle();
				$("#issuestatus_"+issue_id).toggle();
				
				if(selectedValue == 3) $("#issue_fixed_container_"+issue_id).show();
				else $("#issue_fixed_container_"+issue_id).hide();
			}
		}); 
}

function changeBugIssueSeverity(issue_id)
{
	var selectedValue = $("#changeissueseverity_"+issue_id).val();
	
	$.ajax(
		{
			type: "POST",
			url: base_domain+"/ajax/modbugs/?action=chseverity&",
			data: "issue_id=" + issue_id + "&severity=" + selectedValue,
			success: function(msg) 
			{
				if(selectedValue == 0)
				{
					$("#issueseverity_"+issue_id).html('Not set');
				}
				else if(selectedValue == 1)
				{
					$("#issueseverity_"+issue_id).html('Low');
				}
				else if(selectedValue == 2)
				{
					$("#issueseverity_"+issue_id).html('Medium');
				}
				else if(selectedValue == 3)
				{
					$("#issueseverity_"+issue_id).html('High');
				}
				
				$("#changeissueseverity_"+issue_id).toggle();
				$("#issueseverity_"+issue_id).toggle();
			}
		}); 
	

}

function edit_bug_report(suffix)
{
	var isIssue = false;
	
	if ( suffix.indexOf('_issue_') > -1 )
	{
		isIssue = true;
	}
	
	var id = parseInt( suffix.substring(7) ); 
	
	//alert('issue? = ' + isIssue + '; id = ' + id);

	var sPostRaw = $("#post_"+suffix).val();
	var sPost = encodeURIComponent(sPostRaw);
	
	if($.trim(sPost) === '')
	{
		alert('Please enter some text');
	}
	else
	{
		greyMe('btEdit_' + suffix); 
	
		$.ajax(
		{
			type: "POST",
			url: base_domain+"/ajax/modbugs/?action=edit&",
			data: "eid=" + id + "&post=" + sPost + "&is_issue=" + ( isIssue == true ? 1 : 0 ),
			success: function(msg) 
			{
				if (msg != '1')
				{
					alert(msg);
					unGreyMe('btEdit_' + suffix); 
				}
				else
				{
					unGreyMe('btEdit_' + suffix); 
					$('#content_' + suffix).html(sPostRaw.replace(/(\n)+/g, '<br />'));
					$('#content_' + suffix).toggle(true);
					$('#editer_' + suffix).toggle(false);
					
				}
			}
		});
		
	}
}

function reply_bug_report(issue_id)
{
	var textAreaId = 'post_reply_' + issue_id;
	var statusId = 'select_status_for_' + issue_id;
	var sPost = encodeURIComponent($("#"+textAreaId).val()); // we need to encode ampersands!
	var vStatus = $("#"+statusId).val(); 
	
	
	if($.trim(sPost) === '')
	{
		alert('Please write a proper reply');
	}
	else
	{
		greyMe('btReplyTo_'+issue_id); 
		
		$.ajax(
		{
			type: "POST",
			url: base_domain+"/ajax/modbugs/?action=addreply&",
			data: "issue_id=" + issue_id + "&post=" + sPost + "&status=" + vStatus,
			success: function(msg) 
			{
				$("#"+textAreaId).val('');	
				unGreyMe('btReplyTo_'+issue_id); 
				
				$("#replier_" + issue_id).before(msg);
				$("#replier_" + issue_id).toggle();
			}
		});
	
	}
}

function loadIssueReplies(issue_id)
{
	var rowId = 'issue_' + issue_id;
	var repliesRowClass = 'repliesto_' + issue_id;
	var tmpRowId = 'tmp_row_issue_'+issue_id;
	
	if ( $.inArray(issue_id, loadedIssues) >= 0)
	{
		// is already loaded? toggle visibility on or off
		var vis = $("#mainissue_" + issue_id).is(":visible");
		
		if (vis) $("."+repliesRowClass).hide();
		else 
		{
			$("."+repliesRowClass).show();
			$("#replier_" + issue_id).hide(); // the reply form should be hidden by default
		}
		
	}
	else
	{
		// otherwise, request
		$("#" + rowId ).after( '<tr id="'+tmpRowId+'"><td colspan="7" style="text-align:center"><img src="/contents/images/icons/loading.gif" /> Loading issue ...</td></tr>' );
		
		$.ajax(
		{
			type: "POST",
			url: base_domain+"/ajax/modbugs/?action=getreplies&",
			data: "issue_id=" + issue_id,
			success: function(msg) 
			{
				$("#" + rowId ).after( msg );
				$("#" + tmpRowId ).remove();
				
				// add the issue id to our array of loaded issues
				loadedIssues.push(issue_id);				
			}
		});
	}

}

// add a bug report
function add_bug_report() 
{
	var sPost = $("#addBugPost").val();
	var sTitle = $("#addBugTitle").val();
	
	if($.trim(sPost) == '')
	{
		$("#addBugError").html('Please write a proper bug report');
	}
	else if($.trim(sTitle) == '')
	{
		$("#addBugError").html('Please add a title');
	}
	else
	{
		greyMe('btSendComment'); 
		
		var str = $("#add-issue-form").serialize();
		var area = '#fcontentarea';
		$(this).empty().html('<img src="/contents/images/icons/loading.gif" /> Content loading ...');
		
		$.ajax(
		{
			type: "POST",
			url: base_domain+"/ajax/modbugs/?action=addissue&",
			data: str,
			success: function(msg) 
			{
				$(area).html(msg);				
			}
		});
	}
	return false;	
}

// endorse mod
function endorse_mod(modId, randomId, elementId, gameId, isTranslation, translation_action, isPositive, pageType) 
{
	// page types are: m = mod page; h = DL history; r = reminder pop up

	if(!translation_action) translation_action = 0;

	if(isTranslation)
	{
		loadBox(base_domain+"/ajax/endorsemod/?id=" + modId + "&check=" + randomId + "&g_id=" + gameId+"&translation=1&element="+elementId+ "&pos=" +isPositive);
	}
	else
{
	$.ajax(
	{
		type: "POST",
		url: base_domain+"/ajax/endorsemod/?",
			data: "id=" + modId + "&check=" + randomId + "&g_id=" + gameId + "&translation_action=" +translation_action+ "&pos=" +isPositive,
		success: function(msg) 
		{
			var lstReplace ='';
			var exval = 0;
			if(elementId.substring(0,3) != 'img')
			{
				lstReplace = $("#span_endors_number").html().replace(/\,/g,'');
				exval = Number(lstReplace);
			}

				if( msg.indexOf("|") > -1 )
			{
				
					var arrmsg = msg.split("|");
					var isPositiveRating = Number(arrmsg[0]);
					var displayDonationPopUp = Number(arrmsg[1]);
					
					if(pageType == 'h') // history (change your previous rating)
				{
						ico = isPositiveRating == 1 ? 'tick.png' : 'cross.png';
						$("#"+elementId).attr('src','/contents/images/icons/'+ico);
				}
					else if(pageType == 'm') // mod page
					{
						if(isPositiveRating == 1)
				{
					$("#"+elementId).removeClass('green').addClass('active');
					$("#span_endors_number").empty().html(exval+1);
					$("#ln_endorseMe").empty().html('unendorse');
				}
						else
						{
							$("#"+elementId).removeClass('active').addClass('green');
							$("#span_endors_number").empty().html(exval-1);
							$("#ln_endorseMe").empty().html('endorse');
						}
					}
					else if(pageType == 'r')
					{
						// never display a second pop-up
						displayDonationPopUp = 0;
						
						var elname = 'reminder_for_'+modId+'_'+gameId;
						
						var space = 0;

						var elnext = $("#"+elname).next();
						
						if(elnext && elnext.offset())
						{
							space = elnext.offset().top - $("#"+elname).offset().top;
						}
						else space = hg = $("#"+elname).height();
				
						$("#"+elname).remove();
						
						$("#reminderBottom").height("+="+space);
	
						leftToBeRated--;
						
						if(leftToBeRated == 0)
						{
							$.ajax(
							{
								type: "POST",
								url: base_domain+"/ajax/endorsereminder/?go=procrastinate",
								success: function(result) 
								{
							
								
								}		
							});
							
							$.nmTop().close();
							
						}
						
			}
					else if(pageType == 'h2') // history (endorse or abstain - first rating)
			{
						ico = isPositiveRating == 1 ? 'tick.png' : 'cross.png';
						$("#"+elementId).attr('src','/contents/images/icons/'+ico);
						
						if(isPositiveRating == 0)
				{
							elname = elementId.replace("abs", "end"); 
				}
				else
				{
							elname = elementId.replace("end", "abs");
						}
						$("#"+elname).remove();
						
						$("#"+elementId).parent().attr('onclick','');
				}
					
					if (isPositiveRating == 1 && displayDonationPopUp == 1)
					{
						loadBox(base_domain+"/ajax/endorseddonation/?mod_id=" + modId + "&gid=" + gameId  );
					}
			}
			else
			{
				alert(msg);
			}
		}		
	});
	}
	return false;	
}


// vote mod
function vote_mod(modId, randomId, elementId, alreadyAlert) 
{
	var ok = true;
	
	if(alreadyAlert)
	{
		ok = confirmSubmitMessage('You have already voted for a different file this month. Voting for this file will remove your previous choice. Do you still want to proceed?'); 
	}
	
	if(ok)
	{
		
		$.ajax(
		{
			type: "POST",
			url: base_domain+"/ajax/votemod/?",
			data: "id=" + modId + "&check=" + randomId ,
			success: function(msg) 
			{
				$("#"+elementId).removeClass('yellow');
				if(msg==1)
				{
					$("#"+elementId).removeClass('green').addClass('active');
				}
				else if(msg==0)
				{
					$("#"+elementId).removeClass('active').addClass('green');
				}
				else
				{
					alert(msg);
				}
			}		
		});
	}
	return false;	
}

// track mod
function track_mod(modId, randomId, elementId) 
{
	$.ajax(
	{
		type: "POST",
		url: base_domain+"/ajax/trackfile/?",
		data: "id=" + modId + "&check=" + randomId ,
		success: function(msg) 
		{
			if(msg==1)
			{
				$("#"+elementId).removeClass('green').addClass('active');
				$("#ln_trackMe").empty().html('un-track');
			}
			else if(msg==0)
			{
				$("#"+elementId).removeClass('active').addClass('green');
				$("#ln_trackMe").empty().html('track');
			}
			else
			{
				alert(msg);
			}
		}		
	});
	return false;	
}


// add a comment
function add_comment(tid, fid, img_id, news_id, article_id, area, parent_id, formname, video_id, pro_id) 
{

	var str = $("#"+formname).serialize();
	var area = '#' + area;
	$(this).empty().html('<img src="/contents/images/icons/loading.gif" /> Content loading ...');
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/sendcomment/",
			data: str,
			success: function(msg) 
			{
				if(msg!=1 && msg[0] != '§')
				{
					alert(msg);
				}
				else
				{
					$("#"+formname).ajaxComplete(function(event, request, settings) 
					{
						if(msg == 1) 
						{ 
							// Message Sent? Show the 'Thank You' message and hide the form
							var nurl = base_domain+'/ajax/comments/?thread_id=' + tid + '&vid_id='+video_id + '&mod_id=' + fid + '&img_id=' + img_id + '&news_id=' + news_id + '&article_id=' + article_id + '&pro_id=' + pro_id + '&newcomment=1';
							//alert('area: ' + area + ', url: ' + nurl);
							$(area).loadPage(nurl);
						} 
						else if(msg[0] == '§') // reload
						{
							var nurl = msg.substring(1);
							//alert('reload: ' + nurl);
							window.location.assign(nurl);
						}
					});
				}
			}
		});

	return false;	
}


// locks a thread
function lock_topic(tid, fid, area) 
{
	var area = '#' + area;
	$(this).empty().html('<img src="/contents/images/icons/loading.gif" /> Content loading ...');
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/locktopic/?",
			data: "fid=" + fid + "&tid="+tid,
			success: function(msg) 
			{
				if(msg!=1)
				{
					alert(msg);
				}
				else
				{
					$(area).loadPage(base_domain+'/ajax/comments/?thread_id=' + tid + '&mod_id=' + fid);	
				}
			}
		});

	return false;	
}

// edit a comment
function edit_comment(pid) {

	var str = $("#comment-form-edit").serialize();
	var area = '#content-' + pid;
	
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/editcomment/?pid=" + pid,
			data: str,
			success: function(msg) 
			{
				if(msg!=1)
				{
					alert(msg);
				}
				else
				{
					$("#comment-form-edit").ajaxComplete(function(event, request, settings) 
					{
					 
					 // Message Sent? Show the 'Thank You' message and hide the form
						$(area).loadPage(base_domain+'/ajax/showcomment/?pid=' + pid, 1);
						$(area).stop().css("color", "green").animate({ color: '#fff' }, 1200);
					
					});
				}
			}
			
		});
	return false;	
}

// delete a comment
function delete_comment(pid) {

	var area = '#content-' + pid;
	
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/deletecomment/?id=" + pid,
			data: pid,
			success: function(msg) 
			{
				if(msg!=1)
				{
					alert(msg);
				}
				else	
				{	
					$("#comment-delete").ajaxComplete(function(event, request, settings) {
					
						$(area).empty().html('<span class="red">*** Comment deleted ***</span> (it\'ll be gone when you refresh the page)');
					
					});
				}
			}
			
		});

	return false;	
}



// add a topic
function add_topic(fid) {

	var str = $("#comment-form-topic").serialize();
	
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/addtopic/?id=" + fid,
			data: str,
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{
					$("#comment-form-topic").ajaxComplete(function(event, request, settings) 
					{
					 
						$('#fcontentarea').loadPage(base_domain+'/ajax/comments/?thread_id=' + msg + '&mod_id=' + fid);
					});
				}
			}
		});

	return false;	
}

// delete a topic
function delete_topic(tid, fid) 
{

	if ( confirm("Are you sure you want to delete this topic?") !== true )
	{
		return false;
	}

	var area = '#topic-' + tid;
	
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/deletetopic/?thread_id=" + tid + "&mod_id=" + fid,
			data: tid,
			success: function(msg) 
			{
				if(msg!=1)
				{
					alert(msg);
				}
				else
				{		
					$("#topic-delete").ajaxComplete(function(event, request, settings) 
					{
					 
						$(area).empty().html('<span class="red">*** Topic deleted ***</span>');
					});
				}
			}
		});

	return false;	
}

// stick a topic
function stick_topic(tid, fid) {

	var area = '#fcontentarea';
	
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/sticktopic/?thread_id=" + tid + "&mod_id=" + fid,
			data: tid,
			success: function(msg) 
			{
				if(msg!=1 && msg!=0)
				{
					alert(msg);
				}
				else
				{		
					$(area).loadPage(base_domain+'/ajax/moddiscussions/?id=' + fid );
				}
			}
		});

	return false;	
}


// toggle sticky/unsticky post
function sticky_comment(pid, fid, iid, sid, setSticky, tid, carea, vid, aid, pro_id) 
{
	var area = '#content-' + pid;
	$.ajax({
		type: "POST",
		url: base_domain+"/ajax/stickycomment/?set="+setSticky+"&pid=" + pid,
		data: "pid=" + pid + "&fid=" + fid + "&iid=" + iid + "&ssid=" + sid + "&vid=" + vid + "&set="+setSticky+"&tid="+tid + "&aid="+aid + "&pro_id="+pro_id,
		success: function(msg) 
		{
			if(msg!=1)
			{
				alert(msg);
			}
			else	
			{	
				$('#'+carea).loadPage(base_domain+'/ajax/comments/?thread_id=' + tid + '&mod_id=' + fid + '&img_id=' + iid +'&vid_id=' + vid + '&news_id' + 0 + '&article_id' + aid  + "&pro_id="+pro_id);				
			}
		}
	});
	return false;	
}

// move sticky post
function move_sticky_comment(direction, post_id, mod_id, img_id, supimg_id, vid_id, article_id, thread_id, carea, pro_id)
{
	$.ajax({
		type: "POST",
		url: base_domain+"/ajax/stickycomment/?move="+direction,
		data: "pid=" + post_id + "&fid=" + mod_id + "&iid=" + img_id + "&ssid=" + supimg_id + "&vid=" + vid_id + "&tid="+thread_id+ "&aid="+article_id + "&pro_id="+pro_id,
		success: function(msg) 
		{
			if(msg!=1)
			{
				alert(msg);
			}
			else	
			{	
				$('#'+carea).loadPage(base_domain+'/ajax/comments/?thread_id=' + thread_id + '&mod_id=' + mod_id + '&img_id=' + img_id +'&vid_id=' + vid_id + '&supimg_id=' + supimg_id + '&article_id=' + article_id+ "&pro_id="+pro_id );				
			}
		}
	});
	return false;	
}

// toggle locked/unlocked post
function lock_comment(pid, fid, iid, sid, setLock, tid, carea, vid, aid, pro_id) 
{
	var area = '#content-' + pid;
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/lockcomment/?set="+setLock+"&pid=" + pid,
			data: "pid=" + pid + "&fid=" + fid + "&aid=" + aid + "&iid=" + iid + "&ssid=" + sid + '&vid=' + vid + "&set="+setLock+"&tid="+tid + "&pro_id=" + pro_id,
			success: function(msg) 
			{
				if(msg!=1)
				{
					alert(msg);
				}
				else	
				{	
						$('#'+carea).loadPage(base_domain+'/ajax/comments/?thread_id=' + tid + '&vid_id=' + vid + '&mod_id=' + fid + '&img_id=' + iid + '&news_id' + 0 + '&article_id' + aid + '&pro_id' + pro_id );					
				}
			}
		});
	return false;	
}

function requestModeration(pid, fid, iid, sid)
{
	var str = $("#reqmoderation_"+pid).serialize();
	
	//alert(str);
	
	$.ajax({
			type: "POST",
			url: base_domain+"/ajax/changecommentstatus/?",
			data: str,
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{
					var area = '#content-' + pid;
					$(area).empty().html('<span class="red">*** This comment is now in moderation review ***</span>');
				}
			}
		});

	return false;
}


function umdelete( pid, fid, iid, sud, gid, vid, aid, pro_id )
{
//alert('pid='+pid+' fid='+fid+' iid='+iid+' sud='+sud+' gid='+gid+' vid='+vid+' aid='+aid);
	if ( confirm("Are you sure?") !== true )
	{
		return false;
	}

	var cb = document.getElementById('umreport' + pid );

	if ( cb.checked === true )
	{
		var str = $("#umdeletedialog_"+pid).serialize();

		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/changecommentstatus/?",
			data: str,
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{
					var area = '#content-' + pid;
					$(area).empty().html('<span class="red">*** This comment has been deleted and reported to the staff ***</span>');
				}
			}
		});
	}
	else
	{
		$.ajax({
			type: "GET",
			url: "/Core/Libs/Common/Entities/UserModerationHelper?DeleteComment&mid=" + fid + "&pid=" + pid+ "&gid=" + gid+ "&iid=" + iid+ "&sud=" + sud+ "&vid=" + vid+ "&aid=" + aid+ "&pro_id=" + pro_id,
			success: function( msg )
			{
				if ( isNaN( msg ))
				{
					alert( msg );
				}
			}
		});
	
		var area = '#content-' + pid;
		$(area).empty().html('<span class="red">*** This comment has been deleted ***</span>');
	}

	return false;
}

function umblockmodforuser( mid, uid, gid )
{

	loadBox(base_domain+"/ajax/block/?go=showBlockModForUser&mod_id="+mid+"&block_user_id="+uid+"&game_id="+gid);
}

function umunblockmodforuser( mid, uid,gid )
{
	if ( confirm("Are you sure?") !== true )
	{
		return false;
	}

	$.ajax({
		type: "GET",
		url: "/Core/Libs/Common/Entities/UserModerationHelper?RemoveModBlockEx&mid=" + mid + "&uid=" + uid+ "&gid=" + gid,
		success: function( msg )
		{
			if ( isNaN( msg ))
			{
				alert( msg );
			}
			else
			{
				alert("User has been unblocked");
			}

			location.reload( true );
		}
	});

	return false;
}

function umblockuserglobally( uid )
{
	loadBox(base_domain+"/ajax/block/?go=showBlocUserGlobally&block_user_id="+uid);
}

function umunblockuserglobally( uid )
{
	if ( confirm("Are you sure?") !== true )
	{
		return false;
	}

	$.ajax({
		type: "GET",
		url: "/Core/Libs/Common/Entities/UserModerationHelper?RemoveGlobalBlockEx&uid=" + uid,
		success: function( msg )
		{
			if ( isNaN( msg ))
			{
				alert( msg );
			}
			else
			{
				alert("User has been unblocked");
			}

			location.reload( true );
		}
	});

	return false;
}



function cancelModerationRequest(pid, fid, iid, sid, vid)
{
	$.ajax({
			type: "POST",
			url: base_domain+"/ajax/changecommentstatus/?",
			data: "pid=" + pid + "&fid=" + fid + "&iid=" + iid + "&vid=" + vid + "&ssid=" + sid + "&status=Normal",
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{
					show_comment(pid);
				}
			}
		});

	return false;
}

function displayWarning(pid, fid, iid, sid, vid)
{
	$.ajax({
			type: "POST",
			url: base_domain+"/ajax/changecommentstatus/?",
			data: "pid=" + pid + "&fid=" + fid + "&iid=" + iid + "&vid=" + vid + "&ssid=" + sid + "&status=Warned",
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{
					var area = '#content-' + pid;
					$(area).empty().html('<span class="red">*** This warning will now be visible ***</span>');
				}
			}
		});

	return false;
}

function hideWarning(pid, fid, iid, sid, vid)
{
	$.ajax({
			type: "POST",
			url: base_domain+"/ajax/changecommentstatus/?",
			data: "pid=" + pid + "&fid=" + fid + "&iid=" + iid + "&vid=" + vid + "&ssid=" + sid + "&status=Hidden",
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{
					var area = '#content-' + pid;
					$(area).empty().html('<span class="red">*** The warning has now been hidden from the users ***</span>');
				}
			}
		});

	return false;
}

function softDeleteComment(pid, fid, iid, sid, vid, isFromAdmin)
{
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/changecommentstatus/?",
			data: "pid=" + pid + "&fid=" + fid + "&iid=" + iid + "&vid=" + vid + "&ssid=" + sid + "&status=Censored",
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{
					if( isFromAdmin)
					{
						var crow = '#commentRow_' + pid; 
						$(crow).remove();
					}
					else
					{
						var area = '#content-' + pid;
						$(area).empty().html('<span class="red">*** This comment is now hidden from the users ***</span>');
					}
				}
			}
		});

	return false;
}

function lockComment(pid, fid, iid, sid, vid, isFromAdmin, aid, pro_id)
{
	$.ajax({
			type: "POST",
			url: base_domain+"/ajax/changecommentstatus/?",
			data: "pid=" + pid + "&fid=" + fid + "&iid=" + iid + "&vid=" + vid + "&aid=" + aid + "&ssid=" + sid + "&pro_id=" + pro_id + "&status=Approved",
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{
					if( isFromAdmin)
					{
						var crow = '#commentRow_' + pid; 
						$(crow).remove();
					}
					else
					{
						show_comment(pid);
					}
				}
			}
		});

	return false;
}


function show_comment(pid) {
	
	var area = '#content-' + pid;
	$(area).loadPage(base_domain+'/ajax/showcomment/?pid=' + pid, 1);
}

function hide_comment(pid) {
	
	var area = '#content-' + pid;
	$(area).html('This comment has been hidden by the author of the mod, or by a staff member. <a onclick="show_comment('+pid+')">Show comment</a>');
}

function tag_vote(id, tid, amount, game) {
	
	var area = '#' + tid;
	var chk = new Date().getTime();

	
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/votetag/?chk="+chk+"&mod_id=" + id,
			data: "tid=" + tid + "&amount=" + amount+ "&selected_game=" + game,
			success: function(msg) {
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{
					$(area).ajaxComplete(function(event, request, settings) 
					{
						$(this).empty().html(msg);
					});
				}
			}
		});

	return false;	
}


function changeModImagePosition(img_id, newposition) 
{
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/changemodimageposition/?",
			data: "img_id=" + img_id + "&newposition=" + newposition,
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{

				}
			}
		});

	return false;	
}

function changeProfileImagePosition(img_id, newposition, profile_id) 
{
	var chURL = base_domain + "/ajax/editprofileimage/";

		$.ajax({
			type: "POST",
			url: chURL,
			data: "go=changePosition&img_id=" + img_id + "&newposition=" + newposition + "&id=" + profile_id,
			success: function(msg) 
			{
				if(isNaN(msg))
				{
					alert(msg);
				}
				else
				{

				}
			}
		});

	return false;	
}

function changeProfileImageTitle(img_id, profile_id)
{
	var problems = '';

	var title = $('#imgTitle_' + img_id).val();

	if (title != '' && !title.match(/^[-_ a-zA-Z0-9]+$/i) )
	{
		problems = 'Image titles can only contain letters, numbers, spaces, underscores and hyphens';	
		$('#imgTitle_' + img_id).css( "border", "2px solid red" );
		alert(problems);
	}
	else
	{
		$('#imgTitle_' + img_id).css( "border", "2px solid green" );
	}

	if (problems == '')
	{
		greyMe('btEditTitle_' + img_id); 

		var formData = new FormData();
		formData.append('go','edittitle');		
		formData.append('id',profile_id);		
		formData.append('imgid',img_id);		
		formData.append('title',title);		


		var chURL = base_domain + "/ajax/editprofileimage/";

		$.ajax(
		{
			url: chURL,
			type: "POST",
			contentType:false,
			processData: false,
			cache: false,
			data: formData,
			success: function(res)
			{
				if(res == '1' || res == '')
				{
					unGreyMe('btEditTitle_' + img_id);
					$('#imgEditing_' + img_id).toggle(false);
					$('#spImgTitle_' + img_id).html(title);
					$('#imgTitle_' + img_id).css( "border", "none" );
				}
				else
				{
					unGreyMe('btEditTitle_' + img_id);
					alert(res);
				}
			}
		});
	}
}function openFileDlg(evt)
		{
			evt.stopPropagation();
			evt.preventDefault();
			$("#multi_img_upload").trigger('click');
			return false;
		}
		
		
		function handleImageSelect(evt) 
		{
			evt.stopPropagation();
			evt.preventDefault();
			var files = evt.dataTransfer.files; 
			listUpImages(files);
		}

		function handleMultiSelect(evt)
		{
			evt.stopPropagation();
			evt.preventDefault();
			var files = imgMultiUpload.files;
			listUpImages(files);
		}
		
		function isValidImage(file)
		{
			var type = file.type;
			
			if (type != "image/jpeg" && type != "image/gif" && type != "image/png")
			{
				return false;
			}
			return true;
		}
		
		function listUpImages(files)
		{
			$('#img_drop_text').hide();
			
			for (var i = 0, f; f = files[i]; i++) 
			{
				if (isValidImage(f) == false)
				{
					alert(f.name + ' is not a valid image');
				}
				else if (f.size / 1024 > maxUpImgSize)
				{
					alert(f.name + ' exceeds the 2MB size limit');
				}
				else if (imgFileNames.indexOf(f.name) > -1)
				{
					alert('You have already selected ' + f.name);
				}
				else
				{
					imgFilesToBeSent.push(f);
					imgFileNames.push(f.name);
					imgIndexes.push(currentImageIndex);
					createThumb(f, currentImageIndex);
					currentImageIndex++;			
				}
			}

		}

		function remove_multi_image(indexid)
		{
			$("#multi_img_preview_" + indexid).remove();
			
			var indexindex = $.inArray(indexid, imgIndexes);
			
			if (indexindex > -1 )
			{
				imgFilesToBeSent.splice(indexindex, 1);
				imgFileNames.splice(indexindex, 1);
				imgIndexes.splice(indexindex, 1);
			}
		}
		
		function createThumb(file, index)
		{
			var reader  = new FileReader();
			var imgPreviewFragment = document.createDocumentFragment();
			var title = file.name.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9]/g,' '); // the first replace gets rid of the extension, the second of all non alphanumeric characters
			var size = Math.round(file.size / 1024);
		
			// CONTAINER DIV
			var containerDiv = document.createElement('div');
			containerDiv.id = "multi_img_preview_"+index;
			containerDiv.setAttribute("style","margin-bottom: 6px; margin-top: 6px; margin-left: 4px;");
			
			// IMAGE
			var image = document.createElement('img');
			reader.onloadend = function () { image.src = reader.result; }
			reader.readAsDataURL(file);
			image.width = 150;
			image.height = 100;
			
			// LEFT DIV, contains the image
			var leftDiv = document.createElement('div');
			leftDiv.setAttribute("style","clear:left; width:160px; display: inline-block");
			
			// Right DIV, contains title, size, etc
			var rightDiv = document.createElement('div');
			rightDiv.setAttribute("style","clear:right; width:420px; height:100px; vertical-align:top; display: inline-block");
			
			// Span element for the title label
			var titleSpan = document.createElement('span');
			titleSpan.innerHTML = 'Title: ';
			
			// Input element for the title
			var titleInput = document.createElement('input');
			titleInput.type = 'text';
			titleInput.name = 'multi_img_title_' + index;
			titleInput.id = 'multi_img_title_' + index;
			titleInput.setAttribute("style","width:360px; ");
			titleInput.value = title;
			
			// Span element for image size
			var sizeSpan = document.createElement('span');
			sizeSpan.innerHTML = 'Size: ' + size + ' KB';
			sizeSpan.setAttribute("style","margin-top:6px; ");
			
			// Span element for file name
			var filenameSpan = document.createElement('span');
			filenameSpan.innerHTML = '<br />File name: ' + file.name + '<br />';
			filenameSpan.setAttribute("style","margin-top:8px; ");
			
			// link element for removal
			var removalLink = document.createElement('a');
			removalLink.onclick = function() { remove_multi_image(index) };
			 
			// image element for removal
			var removalImage = document.createElement('img');
			removalImage.src = removeImgIcon;
			removalImage.width = 32;
			removalImage.height = 32;
			removalImage.title = 'Remove this image';
			removalImage.setAttribute("style","margin-top:10px; margin-left: -44px;");
			
			removalLink.appendChild(removalImage);
			rightDiv.appendChild(titleSpan);
			rightDiv.appendChild(titleInput);
			rightDiv.appendChild(sizeSpan);
			rightDiv.appendChild(filenameSpan);
			rightDiv.appendChild(removalLink);
			leftDiv.appendChild(image);
			containerDiv.appendChild(leftDiv);
			containerDiv.appendChild(rightDiv);
			
				
			imgPreviewFragment.appendChild(containerDiv);
				
			imgDropZone.appendChild(imgPreviewFragment);
		}
		
		
		
		function handleImageDrag(evt) 
		{
			evt.stopPropagation();
			evt.preventDefault();
			evt.dataTransfer.dropEffect = 'copy';
		}


		
		function submitMultipleImages()
		{
			var problems = '';
			var moreProblems = ''

			for (var i = 0; i < imgIndexes.length; i++)
			{
				var index = imgIndexes[i];
				var title = $('#multi_img_title_' + index).val();
		
				if (! title.match(/^[-_ a-zA-Z0-9]+$/i) )
				{
					problems = 'Image titles can only contain letters, numbers, spaces, underscores and hyphens<br />';	
					$('#multi_img_title_' + index).css( "border", "2px solid red" );
				}
				else if (title.length > 255)
				{
					moreProblems = 'Image titles cannot exceed 255 characters<br />';
					$('#multi_img_title_' + index).css( "border", "2px solid red" );
				}
				else
				{
					$('#multi_img_title_' + index).css( "border", "2px solid green" );
				}
			}

			$("#imgLoadWarnings").html(problems + moreProblems);
			
			if (problems != '' || moreProblems != '')
			{
				$("#imgLoadWarnings").show();
			}
			else
			{
				$("#imgLoadWarnings").hide();
				
				greyMe('btSubmit');

				var formData = new FormData(document.getElementById("add_multi_images_form"));
				
				for(var i = 0, f; f = imgFilesToBeSent[i]; i++)
				{
					formData.append('multiFiles['+i+']', f);
				}
				
				formData.append('imgIndexes',imgIndexes.join());
				formData.append('goAfterImages', goAfterImages);
				
				
				var jqXHR=$.ajax(
				{
					url: imgUploadURL,
					type: "POST",
					contentType:false,
					processData: false,
					cache: false,
					data: formData,
					success: function(data)
					{
						var arr = data.split('|');
						
						if (arr[0] && arr[0] != '')
						{
							$("#imgReturnMessage").html(arr[0]);
							$("#imgReturnMessage").show();
						}
						else
						{
							$("#imgReturnMessage").html();
							$("#imgReturnMessage").hide();
						}
						
						if (arr[1] && arr[1] != '')
						{
							$("#imgLoadWarnings").html(arr[1]);
							$("#imgLoadWarnings").show();
						}
						else
						{
							$("#imgLoadWarnings").html();
							$("#imgLoadWarnings").hide();
						}
						
					}
				}); 
				
			}
		}var r_id = Math.floor(Math.random()*500000);  
				
$(function()
{

	// file-tabs
	$('.file-tabs ol').css('width', $('.file-tabs ol > li').size() * parseInt($('.file-tabs ol li').width()));

	$('.file-tabs li a').click(function(e)
	{

		$('.file-tabs li').removeClass('active').removeClass('next');
		$(this).parent('li').addClass('active');	
		$(this).parent('li').next('li').addClass('next');
	});


	// download button functionality
	$('.button-download').click(function()
	{	
		$('.file-tabs li').removeClass('active').removeClass('next');
		$('#tab2').addClass('active');	
		$('#fcontentarea').loadPage(base_domain+'/ajax/modfiles/?id='+ajax_id+andMore);
	});


	$('.file-tabs li a').click(function(e)
	{
		e.preventDefault();

		switch($(this).attr('class'))
		{
			case 'tab-description':
				$('#fcontentarea').loadPage(base_domain+'/ajax/moddescription/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-files':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modfiles/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-images':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modimages/?user=0&id='+ajax_id+'&randomcode='+r_id+andMore);
				$('#fcontentarea').ajaxComplete(function() {
					$('.image-list li:nth-child(4n)').addClass('last');
				});					
				break;
			case 'tab-comments':
				$('#fcontentarea').loadPage(base_domain+'/ajax/comments/?thread_id='+thread_id+'&mod_id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-discussion':
				$('#fcontentarea').loadPage(base_domain+'/ajax/moddiscussions/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-tags':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modtags/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-readme':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modreadme/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-changelog':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modchangelog/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-articles':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modarticles/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-friends':
				$('#fcontentarea').loadPage(base_domain+'/ajax/feedsmod/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-graph':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modgraph/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-bugs':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modbugs/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-videos':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modvideo/?id='+ajax_id+'&randomcode='+r_id+andMore);
				$('#fcontentarea').ajaxComplete(function() {
					// colouring alternate form containers
					$('.video li:even').addClass('alt');
				});

						
				break;
			case 'tab-mirrors':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modmirrors/?id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
			case 'tab-xdeps':
				$('#fcontentarea').loadPage(base_domain+'/ajax/modxdeps/?mod_id='+ajax_id+'&randomcode='+r_id+andMore);
				break;
		}
		$('.file-tabs li').removeClass('active').removeClass('next');
		$(this).parent('li').addClass('active');	
		$(this).parent('li').next('li').addClass('next');

	});	

	$('.actions li a').tipsy(
	{
		fade: true
	});
	
		

	$('.image-list a').live("mouseenter", function(){
		$(this).children('.image-overlay').show();
		$(this).children('img').css('opacity', 0.3);
	});
	
	$('.image-list a').live("mouseleave",function(){
		$('.image-list a').children('.image-overlay').hide();
		$('.image-list a').children('img').css('opacity', 1);
	});
	
	$('#images-users').live("click", function() 
	{
		$('#fcontentarea').loadPage(base_domain+'/ajax/modimages/?user=2&id='+ajax_id+'&randomcode='+r_id+andMore);
		$('#fcontentarea').ajaxComplete(function() {
			$('.image-list li:nth-child(4n)').addClass('last');
		});					
	});
	
	$('#images-author').live("click", function() 
	{
		$('#fcontentarea').loadPage(base_domain+'/ajax/modimages/?user=1&id='+ajax_id+'&randomcode='+r_id+andMore);
		$('#fcontentarea').ajaxComplete(function() {
			$('.image-list li:nth-child(4n)').addClass('last');
		});		
	});			
	
	
	$('#videos-file').live("click", function() 
	{
		$('#fcontentarea').loadPage(base_domain+'/ajax/modvideo/?vtype=0&id='+ajax_id+'&randomcode='+r_id+andMore);
		
	});
	
	$('#videos-share').live("click", function() 
	{
		$('#fcontentarea').loadPage(base_domain+'/ajax/modvideo/?vtype=1&id='+ajax_id+'&randomcode='+r_id+andMore);
		
	});			
	
	
	// image carousel
	$('.file-image-container').cycle
	({
		fx: 'fade',
		speed: 500,
		timeout: 0,
		next: '#gallery-next',
		prev: '#gallery-prev',
		onPrevNextEvent: function(isNext, zeroBasedSlideIndex, slideElement) 
		{
			var alreadyLoaded = $.inArray(zeroBasedSlideIndex, imgScrollerLoadedIndexes);
			
			
			if ( alreadyLoaded < 0 )
			{
				// load...
				loadMoreHighslide(zeroBasedSlideIndex, false);
				
			}	
		}
	});
	
	// profile tabs
	$('.profile-tabs li a').click(function(e)
	{
		e.preventDefault();
		switch($(this).attr('class'))
		{
			case 'tab-description':
				$('#procontentarea').loadPage(base_domain+'/ajax/profilecontent/?content=description&id='+ajax_id);
				break;
				
			case 'tab-files':
				$('#procontentarea').loadPage(base_domain+'/ajax/profilecontent/?content=files&id='+ajax_id);
				break;
				
			case 'tab-videos':
				$('#procontentarea').loadPage(base_domain+'/ajax/profilecontent/?content=videos&id='+ajax_id);
				break;
					
			case 'tab-images':
				$('#procontentarea').loadPage(base_domain+'/ajax/profilecontent/?content=images&id='+ajax_id);
				$('#procontentarea').ajaxComplete(function() 
					{
						$('.image-list li:nth-child(4n)').addClass('last');
					});	
				break;
				
			case 'tab-comments':
				$('#procontentarea').loadPage(base_domain+'/ajax/comments/?pUp=1&page=' + proPage + '&sort=' + proSort + '&thread_id=' + thread_id + '&pro_id=' + ajax_id);
				break;
		}
		$('.profile-tabs li').removeClass('active').removeClass('next');
		$(this).parent('li').addClass('active');	
		$(this).parent('li').next('li').addClass('next');

	});
	
});


function loadMoreHighslide(offs, showNewImageOnLoad)
{
	
	var galleryurl = base_domain+'/ajax/gallerymodimage/?id='+ajax_id+'&randomcode='+r_id+'&imgtype=' + carouselImageType + '&offs='+offs+andMore;
	
	if(showNewImageOnLoad) galleryurl+='&loadfirst=1';
	
	$.ajax(
	{
		type: "GET",
		url: galleryurl,
		data: "",
		success: function(returned_data) 
		{

			$('#gallery-ul-'+offs).empty().html(returned_data);
			
			imgScrollerLoadedIndexes.push(offs);
		}
	});
}	
	
/*!
 * JavaScript Cookie v2.1.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

var is_h_ad_hover = false;

function areAdsBlocked()
{
	if ( document.getElementById("tester") == undefined )
	{
		return true;
	}
	return false;
}


$(function(){
		// set the width of the social paragraph to equal that of the 'network' nav item
		$('.social').css('width', $('#nav .network').outerWidth() - parseInt($('.social').css('padding-left')) + 1);
		var current = '';

		// position the subnav elements in the right place
		initsubnav();
		
		// handle mouse events on subnav items/links
		$('#top-inner .item').mouseenter(function(){
			current = $('#subnav .subnav[data-subnav='+$(this).data('subnav')+']');
			$('#subnav .subnav').hide();												
			current.show();
			if( current.html()	!= null)
			{
				if ( areAdsBlocked() !== true ) $('#ad_cover').css('display','block');
				is_h_ad_hover = true;
			}
			
			current.mouseleave(function()
			{
				$('#subnav .subnav').hide();					
				is_h_ad_hover = false;
				self.setTimeout("restoreAd()", 2000 );
			});
			$('#main').mouseenter(function(){
				$('#subnav .subnav').hide();					
				is_h_ad_hover = false;
				self.setTimeout("restoreAd()", 2000 );
			});
		});
		
		// colouring alternate form containers
		$('.form li:even').addClass('alt');
		
		$('.form').keypress(function(e) {
			if(e.which == 13) {
			   	var tagName = e.target.tagName.toLowerCase(); 

			   	if (tagName !== "textarea" && tagName !== "div") {
					jQuery(this).blur();
					jQuery('#submit').focus().click();
				}
			}
		});
		
		$('.icon-info').tipsy({
			fade: true
		});
		
		$(window).resize(function(){
			initsubnav();						  
		});
	
	});
	
	function restoreAd()
	{
		if(is_h_ad_hover == false)
		{
			$('#ad_cover').css('display','none');
		}
	}
	
	function initsubnav(){
		
		$('#subnav .subnav').each(function(){
			var nav_item = $('#top-inner .item[data-subnav='+$(this).data('subnav')+']');
			if(nav_item.offset()!=null)
			{
				if($(this).data('subnav') == 'network')
				{
					$(this).css('top', nav_item.offset().top+25).css('left', nav_item.offset().left - nav_item.width()+33);
				} 
				else 
				{
					$(this).css('top', nav_item.offset().top+25).css('left', nav_item.offset().left);
				}	
			}
		});	
	}
	
	function toggleWYSIWYG()
	{
		$("#wyseditZZZ").wysibb(wys_std_opt);
	}
	
	$(function() 
	{
		$("#wyseditZZZ").wysibb(wys_std_opt);
	});
	
	
	function checkAB()
	{
		/* statuses are:

		 0 : non blocking
		 1 : blocking
		 2 : flapping

		 */

		// output debug info (alerts)
		var debug = false;

		// our cookie will expire after "mins" minutes
		var mins = 5;

		// converting minutes in days (our cookie library uses days)
		var days = mins / ( 24 * 60 );

		// are ads currently blocked?
		var isBlocked = areAdsBlocked();

		// this is the status we previously stored. 
		var currentStoredStatus = Cookies.get('ab');

		if ( debug === true)
		{
			alert( 'Read status: ' + currentStoredStatus );
		}

		// we will store the new status here
		var newStatus = null;

		// maybe we don't event need to write the cookie
		var skipWrite = false;

		// we don't have a cookie yet
		if (currentStoredStatus === undefined) 
		{
			newStatus = areAdsBlocked() ? 1 : 0;
		}
		else
		{
			var arrStoredStatus = currentStoredStatus.split("|");
			
			if ( arrStoredStatus.length !== 2 )
			{
				// corrupted cookie!
				
				if ( debug === true)
				{
					alert( 'Corrupted cookie' );
				}
				
				newStatus = areAdsBlocked() ? 1 : 0;
			}
			else
			{
				var numericStoredStatus = parseInt( arrStoredStatus[0] );

				if ( numericStoredStatus === 0 && isBlocked === true )
				{
					// the user turned ON adBlock. We have a flapper!
					newStatus = 2;
				}
				else if ( numericStoredStatus === 1 && isBlocked !== true )
				{
					// the user turned OFF adBlock. 
					newStatus = 0;
				}
				else
				{
					// the only possible status jumps are 0 -> 2 and 1 -> 0
					newStatus = currentStoredStatus;
					skipWrite = true;
				}
			}
		}

		if ( debug === true)
		{
			alert( 'Write status: ' + newStatus + '. Skip: ' + (skipWrite ? 'YES' : 'NO'));
		}

		// write the cookie
		if ( skipWrite !== true )
		{
			// Unix timestamp
			var now = Math.round( $.now() / 1000 );

			// converting minutes in seconds (we are storing a unix timestamp)
			var secs = mins * 60;
		
			var expiry = now + secs;

			Cookies.set('ab', newStatus + '|' + expiry, { expires: days });
		}
	
	}
	
	
	function checkAdReportForm()
	{
		adcategory = parseInt( $('#pType').val() );
		adnotes = $('#pDesc').val().trim();
		
		if ( adcategory === -1 )
		{
			$('#pError').html('Please select a category');
			$('#pError').toggle( true );		
		}
		else if ( adnotes === '')
		{
			$('#pError').html('Please provide a description');
			$('#pError').toggle( true );		
		}
		else
	{
			// OK
			$('#pError').html('&nbsp;');
			
			// waiting icon
			$('#adbtContainer').empty().html('<div><img style="margin-left:270px;" class="loadingTmpButton" src="' + base_domain + '/../contents/images/icons/loading.gif" /></div>');

		report_data = {}
		report_data['url']  = window.location.href;
			report_data['size'] = window.reportedAd;
		report_data['notes'] = adnotes;
		report_data['category'] = adcategory;
 
		console.log(report_data);

		// Send this data to the server!
		$.ajax({
			type: "POST",
			url: base_domain + "/ajax/reportad/?go=addReport",
			data: report_data,
			async:true,
			success: function(msg)
			{
				$('#AdRreportForm').toggle(false);
				$('#adtext').html(msg);
				
				hideReportedAd();
			}
		});
			
	}
	}
	
	function reportAd(size)
	{
		loadBox(base_domain + "/ajax/reportad/?go=showPopUp&size=" + size ,'1')
	}
	

	function hideReportedAd()
	{
		var size = window.reportedAd;
		
		switch( size )
		{
			case '728x90':
				$('#pub728x90').toggle(false);
				break;
				
			case '728x90 BTF':
				$('.ad_bottom').toggle(false);
				break;
			
			case '300x250':
				$('#ad-right').toggle(false);
				break;
				
			case '300x250 BTF':
				$('.footer-ad').toggle(false);
				break;
		}
		
		
	}
	
function sortProfileFileList( selectElement )
{
	orderby = $( selectElement ).val();
	
	var divs = new Array();
	
	$('#profile_mods').children().each(function () 
	{
		var str_id = $(this).attr('id');
		
		var a_id = str_id.split('_');
		
		var position = parseInt( a_id[1] );
		var mod_name = a_id[2];
		
		var div_data = $(this).detach();
		
		if ( orderby === 'name' )
		{
			divs.push({index: mod_name + position, value: str_id, data: div_data});
		}
		else 
		{
			divs.push({index: position, value: str_id, data: div_data});
		}
		
	});

	if ( orderby === 'name' )
	{
		divs.sort( function(a, b)
		{  
			return ((a.index.toLowerCase() < b.index.toLowerCase()) ? -1 : ((a.index.toLowerCase() > b.index.toLowerCase()) ? 1 : 0)); 
		} );
	}
	else
	{
		divs.sort(function(a,b) 
		{
			return a.index - b.index;
		});
	}

	for ( x in divs)
	{
		var id = divs[x].value;	
		$('#profile_mods').append( divs[x].data );
	}
}
				function toggleJump(uniq)
		{
			var offset = $('#jumperlink'+uniq).offset();
			var height = $('#jumperlink'+uniq).height();

			var top = offset.top + height + "px";
			var left = offset.left  + "px";

			$('#jumperdiv'+uniq).css( {
			    'position': 'absolute',
			    'left': left,
			    'top': top,
			    'z-index': 99
			});

			var jdiv = document.getElementById('jumperdiv'+uniq);

			jdiv.style.display = jdiv.style.display == 'none' ? '' : 'none';
		
			if(jdiv.style.display == '')
			{
				var jtext = document.getElementById('jumpTxt'+uniq);
				jtext.focus(); 
			}	
		}
		
		function jumpTo(baseUrl, jsFunction,uniq)
		{
			var jtext = document.getElementById('jumpTxt'+uniq);
			var val = jtext == null || jtext.value == ''  ? 0 : jtext.value;
			
			if(jsFunction=='')
			{
//alert('no js => ' + baseUrl+'page='+ val);			
				window.location.assign(baseUrl+'page='+ val);
				
			}
			else
			{
			
				var myFunction = jsFunction.replace(/apicino/gi,"'").replace("BASEURL", baseUrl+'page='+val);
//alert('JS => ' + myFunction);
				eval(myFunction);
			}
		}
	
		function keyPressedOnJumpTo(e, baseUrl, jsFunction,uniq)
		{
			var key=e.keyCode || e.which;
			if (key==13)
			{
				jumpTo(baseUrl, jsFunction, uniq);
			}
			
		}
		
	

// load more feeds (append)
function loadOlderFeeds(funcName, container, ajaxId, olderThan, lastCounter ) 
{
		//alert('fun='+funcName+', cont='+container+', id='+ajaxId+', date='+olderThan);
		var content;
		var param = "from=" + olderThan+"&cont="+lastCounter; 
		if(ajaxId > 0) param += "&id=" + ajaxId;
		content = '#'+container;
		
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/"+funcName+"/?",
			data: param,
			success: function(msg) 
			{
				var elOlderLink = '#olderfeedslink_'+funcName;
				var elOlderLinkLoader = '#load_olderfeedslink_'+funcName;
				$(elOlderLinkLoader).remove();
				$(elOlderLink).remove();
				$(content).append(msg);	
			}
		});

	return false;	
}

// replace feeds
function replaceFeeds(funcName, container, ajaxId, page)
{
	//alert('fun='+funcName+', cont='+container+', id='+ajaxId+', page='+page);
	
	var content;
	var param = "from=" + page; 
		if(ajaxId > 0) param += "&id=" + ajaxId;
		content = '#'+container;
		
		$.ajax({
			type: "POST",
			url: base_domain+"/ajax/"+funcName+"/?",
			data: param,
			success: function(msg) 
			{
				$(content).html(msg);	
			}
		});

	return false;
} 

	$(function()
	{
		$('#show_old_uploader').click
		(
			function()
			{
				$('#uploader_section_new').hide();
				$('#uploader_section_legacy').show();

				$('#no_file_warning').hide();
				$('#btSubmit_M').show();
				$('#btSubmit_N').show();
				$('.buttons, .bottom10 > primary').show();

				return false;
			}
		);

		$('#show_new_uploader').click
		(
			function()
			{
				$('#uploader_section_legacy').hide();
				$('#uploader_section_new').show();

				return false;
			}
		);

		if ( $('#uploader_section_new').length )
		{
			$('#btSubmit_M').hide();
			$('#btSubmit_N').hide();
			$('.buttons, .bottom10 > primary').hide();
			$('#no_file_warning').show();

			// Hide Stuff
			$('#file_upload_progress').hide();
			$('#resume').hide();
			$('#rebuilding_file').hide();

			// Initialise Resumable Chunked File uploads
			var r = new Resumable
			({
				target:'/Libs/Common/Managers/Files?CheckOrUploadChunk',
				simultaneousUploads: 4,
				maxFiles: 1
			});
			r.assignBrowse( document.getElementById('browseButton'));

			r.on('fileSuccess', function(file)
			{
				// File has completed uploading
				$('#upload_status_list').prepend("<p>File Upload complete: " + file.fileName + " - Roughly " + Math.floor(Math.round(file.size / (1024 * 1024))) + " MB in size.</p>" );

				$('#file_upload_progress').html("<p>File Upload complete: " + file.fileName + " - Roughly " + Math.floor(Math.round(file.size / (1024 * 1024))) + " MB in size.</p>" );

				// Axel - Add whatever you want to do now here.
				// Filename in file.fileName
				// Filesize in file.size
				$('#uploaded_file_name').val( file.fileName );

				$('#no_file_warning').hide();
				$('#btSubmit_M').show();
				$('#btSubmit_N').show();
				$('.buttons, .bottom10 > primary').show();

				//console.debug('fileSuccess',file);
			});

			r.on('fileProgress', function(file)
			{
				// Chunks are being uploaded..
				//console.debug('fileProgress', file);

				// Set the width and content of the progress bar
				var percent = Math.floor(Math.round(file.progress()*100.0));

				// If progress is under 99% then let's show the wheel
				if (percent < 99)
				{
					// Wheel
					$('.radial-progress').attr('data-progress', percent);

					$('#upload_status_list').prepend('<li>File Progress... ' + percent + '%</li>')
				}else{
				// otherwise let's let the user know we're rebuilding!
				$('#upload_status_list').prepend('<li>File Progress... ' + percent + '%</li>');
				$('#upload_status_list').prepend('<li>We`re rebuilding your file now - please stand by...</li>');
				$('.radial-progress').attr('data-progress', percent);
				$('#rebuilding_file').show();
				}
			});

			r.on('fileAdded', function(file, event){
			r.upload();
			//console.debug('fileAdded', event);
			$('#upload_status_list').prepend('<li>File Added</li>')

			// Hide the File upload button
			$('#browseButton').hide();
			// Show the progress
			$('#file_upload_progress').show();
			// Show the Pause control
			$('#pause_control').show();

			});
			r.on('filesAdded', function(array){
			// r.upload();
			// //console.debug('filesAdded', array);
			// $('#upload_status_list').prepend('<li>Files Added</li>')
			});
			r.on('fileRetry', function(file){
			//console.debug(file);
			$('#upload_status_list').prepend('<li>Retrying Chunk</li>')
			});
			r.on('fileError', function(file, message){
			//console.debug('fileError', file, message);
			$('#upload_status_list').prepend('<li>File upload error - please try again.</li>')
			});
			r.on('uploadStart', function(){
			//console.debug('uploadStart');
			$('#upload_status_list').prepend('<li>Upload Started</li>')
			});
			r.on('complete', function(){
			//console.debug('complete');

			// $('#upload_status_list').prepend('<li>File Upload Finished</li>')

			// Hide Pause Control
			// $('#pause_control').hide();
			// Hide Progress Bar
			// $('#file_upload_progress').hide();

			});
			r.on('progress', function(){
			//console.debug('progress');
			// $('#upload_status_list').prepend('<li>Progress</li>')
			});
			r.on('error', function(message, file){
			//console.debug('error', message, file);
			$('#upload_status_list').prepend('<li>An error has occoured</li>')
			});
			r.on('pause', function(){
			//console.debug('pause');
			$('#upload_status_list').prepend('<li>File Upload Paused</li>')
			});
			r.on('cancel', function(){
			//console.debug('cancel');
			$('#upload_status_list').prepend('<li>File Upload Cancelled</li>')
			});

			$('#pause').click(function()
			{
				// Pause the Upload
				r.pause();
				$('#pause').hide();
				$('#resume').show();

				return false;
			});

			$('#resume').click(function()
			{
				// Pause the Upload
				r.upload();
				$('#pause').show();
				$('#resume').hide();

				return false;
			});

			$('#cancel').click(function()
			{
				// Pause the Upload
				r.cancel();
				$('#pause').show();
				$('#resume').hide();

				// Hide the File upload button
				$('#browseButton').show();
				// Show the progress
				$('#file_upload_progress').hide();

				return false;
			});
		};

		$('#multipart').hide();
		$('.large-title a').click(function(){
			$('#multipart').toggle();
		});
	});


function startProgress(){
		document.getElementById("progressheader").style.display="block";
}

extArray = new Array(".zip", ".rar", ".7z", ".exe", ".omod", ".fomod", ".gz", ".tgz", ".001", ".002", ".003", ".004", ".005", ".006", ".007", ".008", ".009", ".010");
function LimitAttach(form, file) {
allowSubmit = false;
if (!file) return;
while (file.indexOf("\\") != -1)
file = file.slice(file.indexOf("\\") + 1);
ext = file.slice(file.lastIndexOf("."));
for (var i = 0; i < extArray.length; i++) {
if (extArray[i] == ext.toLowerCase()) { allowSubmit = true; break; }
}
if (allowSubmit) return true;
else
alert("Please only upload files that end in types:  "
+ (extArray.join("  ")) + "\nPlease select a new "
+ "file to upload and submit again.");
return false;
}
	$('.block-list a').live("mouseenter", function(){
			$(this).children('.image-overlay').show();
			$(this).children('img').css('opacity', 0.3);
		});
		
		$('.block-list a').live("mouseleave",function(){
			$('.block-list a').children('.image-overlay').hide();
			$('.block-list a').children('img').css('opacity', 1);
		});
				function addActionParameter(formName, parameter)
		{
			var currentValue = document[formName].getAttribute('action');
			document[formName].setAttribute('action', currentValue + parameter);
		}
			$('.block-list a').live("mouseenter", function(){
			$(this).children('.image-overlay').show();
			$(this).children('img').css('opacity', 0.3);
		});
		
		$('.block-list a').live("mouseleave",function(){
			$('.block-list a').children('.image-overlay').hide();
			$('.block-list a').children('img').css('opacity', 1);
		});
				function checkChooseGameForm()
		{
			var game_value = document.getElementById('selectGame').value;
			var newgame = document.getElementById('new_game_name').value;
			
			if( (game_value == '' || game_value == 0) && newgame == '')
			{
				alert('You must choose a game for your file');
				return false;
			}
			
			return true;
		}
		$( function()
{
	if ( $('input:radio[ name="console_intentions"]:checked').val() == 1 )
	{
		$('#bethnet_xbox_li').show();
		$('#bethnet_ps_li').show();
		$('#bethnet_example_li').show();
	}
	else
	{
		$('#bethnet_xbox_li').hide();
		$('#bethnet_xbox_id').val('');
		$('#bethnet_ps_li').hide();
		$('#bethnet_ps_id').val('');
		$('#bethnet_example_li').hide();
	}

	$('input:radio[ name="console_intentions"]').change( function()
	{
		if ( this.value == '1')
		{
			$('#bethnet_xbox_li').show();
			$('#bethnet_ps_li').show();
			$('#bethnet_example_li').show();
		}
		else
		{
			$('#bethnet_xbox_li').hide();
			$('#bethnet_xbox_id').val('');
			$('#bethnet_ps_li').hide();
			$('#bethnet_ps_id').val('');
			$('#bethnet_example_li').hide();
		}
	});
});

		function checkAddModForm()
		{
			var category_value = document.getElementById('selectCat').value;
			var language_value = document.getElementById('language').value;
			var original_id = document.getElementById('original_id').value;
			
			
			var type_value = $('input[name=ftype]:checked').val();
			
			if (type_value != 1 && type_value != 2)
			{
				alert('You must specify a file type');
				return false;
			}
			
			if (type_value == 2 && language_value == 0)
			{
				alert('Since your file is a translation you must specify its language');
				return false;
			}
			
			if (type_value == 2 && (original_id == 0 || original_id == ''))
			{
				alert('Since your file is a translation you must specify the original file');
				return false;
			}
			
			if(category_value==87 || category_value == '' || category_value == 0)
			{
				alert('You must choose a category for your file');
				return false;
			}
			
			return true;
		}
		
		function checkCommenting(sourceEl)
		{
			
			var targetEl = document.getElementById('allowTopicElement');
			
			if(sourceEl.value < 2) 
			{
				targetEl.disabled = true;
				targetEl.value = 0;
			}
			else targetEl.disabled = false;
		}
		
		
		var prevLanguage = 0;
			function changeLanguage(el)
			{
				/*
				if(el.value == -1)
				{
					$('#other_language').css({'display': 'inline'});
				}
				else if (prevLanguage == -1)
				{
					$('#other_language').css({'display': 'none'});
				}
				
				prevLanguage = el.value;
				*/
			}
			
			function changeFileType(val)
			{
				if(val == 2)
				{
					$('#li_translation').css({'display': 'block'});
				}
				else
				{
					$('#li_translation').css({'display': 'none'});
				}
			}
			
			function lookup_original(inputString) 
			{
		
				if(inputString.length == 0) 
				{
					// Hide the suggestion box.
					$('#suggestions').hide();
					$('#original_id').val(0);
				} 
				else 
				{
					$.post(base_domain+"/ajax/modeditrequirements/", {queryString: ""+inputString+"", mode: "translation"}, function(data)
					{
						if(data.length >0) 
						{
							$('#suggestions').show();
							$('#autoSuggestionsList').html(data);
						}
					});
				}
			}
			
			function fill_original(name, value) 
			{
				$('#inputString').val(name);
				$('#original_id').val(value);
				setTimeout("$('#suggestions').hide();", 200);
			}
	
		
		
		
		
		function clearField(fieldId, fieldText)
		{
			el = document.getElementById(fieldId);
			if(el && el.value == fieldText) 
			{
				el.value = '';
				el.focus();
			}
		}
		
		function restoreField(fieldId, fieldText)
		{
			el = document.getElementById(fieldId);
			if(el && el.value == '') el.value = fieldText;
			
		}
		
		
		
		function pushMyUrl(myurl)
		{
			myurl=myurl+'&pUp=1';
			var stateObj = { url: myurl };
			history.pushState(stateObj, "", myurl);
		}
		
		function replaceMyUrl(myurl)
		{
			//alert('replace '+myurl);
			//myurl=myurl+'&pUp=1';
			var stateObj = { url: myurl };
			history.replaceState(stateObj, "", myurl);
		
		}
		
				function UpdateIHeight( h )
		{
			if ( parseInt( h, 10 ) < 90 )
			{
				h = 90;
			}
			document.getElementById('pub728x90').style.height = parseInt( h, 10 ) + 'px';
		}
		function lookup(inputString) 
		{
	
		if(inputString.length == 0) {
			// Hide the suggestion box.
			$('#suggestions').hide();
		} else {
			$.post(base_domain+"/ajax/modeditrequirements/", {queryString: ""+inputString+""}, function(data){
				if(data.length >0) {
					$('#suggestions').show();
					$('#autoSuggestionsList').html(data);
				}
			});
		}
	}
	
	function dlc(dlc) {
		if(document.getElementById('dlc'+ dlc).checked == true) {
			$.post(base_domain+"/ajax/modeditrequirements/", { mod_id: ""+ajax_req_id+"", dlc: ""+dlc+"", add_dlc: "1"}, function(data){
					$("#dlc"+dlc+"_div").html('<img src="https://staticdelivery.nexusmods.com/contents/images/icons/tick.png">');
					$("#dlc"+dlc+"_div").fadeIn(600);
			});
		} else {
			$.post(base_domain+"/ajax/modeditrequirements/", { mod_id: ""+ajax_req_id+"", dlc: ""+dlc+"", remove_dlc: "1"}, function(data){
				$("#dlc"+dlc+"_div").html('<img src="https://staticdelivery.nexusmods.com/contents/images/icons/cancel.png">');
			});
		}
	}
	
	function insertFile(selected_game) {
		if(document.getElementById('hiddenVal').value == "" || document.getElementById('inputString').value == "") {
			alert("No file selected");
		} else {
	
			$.post(base_domain+"/ajax/modeditrequirements/", { selected_game: ""+selected_game+"", source_game: ""+document.getElementById('hiddenGameId').value+"", mod_id: ""+ajax_req_id+"", fid: ""+document.getElementById('hiddenVal').value+"", insert: "1"}, function(data){
		
				if(data == "-1") { 
					alert("ERROR: No file found with that ID"); 
				} else if(data == "-2") { 
					alert("ERROR: You have already added this file as a requirement"); 
				} else {
					$('#none').hide();
					$("#list").append('<div style="display:block;" id="'+ data +'"> <a onclick=\'removeFile("'+ data +'","'+selected_game+'"); return false;\' href=\'#\'><img src="https://staticdelivery.nexusmods.com/contents/images/icons/cancel.png" align="absmiddle"></a> '+ document.getElementById('inputString').value +'</div>');
					/*$("#"+data).fadeIn(600);*/
				}
				
			});
		}
	}
	
	function removeFile(rid,selected_game) {
		if(rid == "") {
			alert("No file selected");
		} else {
			$.post(base_domain+"/ajax/modeditrequirements/", { selected_game: ""+selected_game+"", mod_id: ""+ajax_req_id+"", rid: ""+rid+"", remove: "1"}, function(data){

					$('#none').hide();
					$("#"+rid).fadeOut(600);
				
			});
		}
	}	

	function insertURL(selected_game) 
	{
		if(document.getElementById('externalURL').value == "") 
		{
			alert("No file selected");
		} 
		else 
		{
			$.post(
				base_domain + "/ajax/modeditrequirements/", 
				{
					selected_game: "" + selected_game + "",  
					mod_id: "" + ajax_req_id + "", 
					name: "" + document.getElementById('externalname').value + "", 
					url: "" + document.getElementById('externalURL').value + "", 
					insertURL: "1"
				}, 
				function(data)
				{
					if(data > 0)
					{
						$('#URLnone').hide();
						$("#URLlist").append('<div style="display:block;" id="'+ data +'"> <a onclick="removeFile('+ data +','+selected_game+'); return false;" href="#"><img src="https://staticdelivery.nexusmods.com/contents/images/icons/cancel.png" align="absmiddle"></a> <a href="'+ document.getElementById('externalURL').value +'">'+ document.getElementById('externalname').value +'</a> </div>');
					}
			});
		}
	}
	
	function fill(thisValue) {
		$('#inputString').val(thisValue);
		setTimeout("$('#suggestions').hide();", 200);
	}
	
	function fill2(thisValue) {
		$('#hiddenVal').val(thisValue);
	}
	
	function fill3(thisValue) {
		$('#hiddenGameId').val(thisValue);
	}
	
	function clearName(thisValue) {
		if(thisValue == "File/mod name") {
			$('#externalname').val('');
		}
	}
		$('.video li:even').addClass('alt');
			$(function() 
			{
		$('.image-list li:nth-child(3n)').addClass('last');
		
		$('.image-list a').mouseenter(function(){
			$(this).children('.image-overlay').show();
			$(this).children('img').css('opacity', 0.3);
		});
	
		$('.image-list a').mouseleave(function(){
			$('.image-list a').children('.image-overlay').hide();
			$('.image-list a').children('img').css('opacity', 1);
		});
	});
		  jQuery(function($)
		  {
			// Create variables (in this scope) to hold the API and image size
			var jcrop_api, boundx, boundy,

			// Grab some information about the preview pane
			$preview = $('#preview-pane'),
			$pcnt = $('#preview-pane .preview-container'),
			$pimg = $('#preview-pane .preview-container img'),

			xsize = $pcnt.width(),
			ysize = $pcnt.height();

			//console.log('init',[xsize,ysize]);

			$('#target').Jcrop({
				onLoad: updatePreview,
				onChange: updatePreview,
				onSelect: updatePreview,
				aspectRatio: xsize / ysize
				},function(){
			  // Use the API to get the real image size
			  var bounds = this.getBounds();
			  boundx = bounds[0];
			  boundy = bounds[1];
			  // Store the API in the jcrop_api variable
			  jcrop_api = this;

			  // Move the preview into the jcrop container for css positioning
			  //$preview.appendTo(jcrop_api.ui.holder);
    });

    function updatePreview(c)
    {

      if (parseInt(c.w) > 0)
      {
		updateCoords(c);
        var rx = xsize / c.w;
        var ry = ysize / c.h;

        $pimg.css({
          width: Math.round(rx * boundx) + 'px',
          height: Math.round(ry * boundy) + 'px',
          marginLeft: '-' + Math.round(rx * c.x) + 'px',
          marginTop: '-' + Math.round(ry * c.y) + 'px'
        });
      }
    };
  });



  function updateCoords(c)
  {
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
  };

  function checkCoords()
  {
    if (parseInt($('#w').val())) return true;
    alert('Please select a crop region then press submit.');
    return false;
  };

	$('.video li:even').addClass('alt');
	$( function()
	{
		if ( $("#online-users").length )
		{

			function AddZero( n )
			{
				return n < 10 ? '0' + n : '' + n;
			}

			function UpdateData()
			{
				$.ajax
				({
					type: "GET",
					url: "/Core/Libs/Common/Managers/OnlineUsers?GetData",
					success: function( data )
					{
						$('#online-users-total').html( data.u_total );
						$('#online-users-registered').html( data.u_registered );
						$('#online-users-guests').html( data.u_guests );

						document.title = "(" + data.u_total + ") Nexus Mods Active Users";

						var tablehead = "<thead>";
						var tabledata = "<tbody>";
						for ( var dm in data.minutes )
						{
							var d = new Date( dm * 1000 );
							tablehead += "<th>" + AddZero( d.getHours()) + ":" + AddZero( d.getMinutes()) + "</th>";
							tabledata += "<td>" + data.minutes[ dm ] + "</td>";
						}
						tablehead += "</thead>";
						tabledata += "</tbody>";

						$('#chart-minutes').html( tablehead + tabledata );

						tablehead = "<thead>";
						tabledata = "<tbody>";
						for ( var dh in data.hours )
						{
							var d = new Date( dh * 1000 );
							tablehead += "<th>" + AddZero( d.getHours()) + "</th>";
							tabledata += "<td>" + data.hours[ dh ] + "</td>";
						}
						tablehead += "</thead>";
						tabledata += "</tbody>";

						$('#chart-hours').html( tablehead + tabledata );

						tablehead = "<thead>";
						tabledata = "<tbody>";
						for ( var dd in data.days )
						{
							var d = new Date( dd * 1000 );
							tablehead += "<th>" + AddZero( d.getDate()) + "</th>";
							tabledata += "<td>" + data.days[ dd ] + "</td>";
						}
						tablehead += "</thead>";
						tabledata += "</tbody>";

						$('#chart-days').html( tablehead + tabledata );

						tablehead = "<thead>";
						tabledata = "<tbody>";
						for ( var dh in data.aphours )
						{
							var d = new Date( dh * 1000 );
							tablehead += "<th>" + AddZero( d.getHours()) + "</th>";
							tabledata += "<td>" + data.aphours[ dh ] + "</td>";
						}
						tablehead += "</thead>";
						tabledata += "</tbody>";

						$('#chart-adult-pageviews-hours').html( tablehead + tabledata );

						tablehead = "<thead>";
						tabledata = "<tbody>";
						for ( var dd in data.apdays )
						{
							var d = new Date( dd * 1000 );
							tablehead += "<th>" + AddZero( d.getDate()) + "</th>";
							tabledata += "<td>" + data.apdays[ dd ] + "</td>";
						}
						tablehead += "</thead>";
						tabledata += "</tbody>";

						$('#chart-adult-pageviews-days').html( tablehead + tabledata );
					}
				});
			}

			UpdateData();

			setInterval( UpdateData, 5000 );
		}
	});
	
		function toggleOpenClose(linkElement, areaID)
		{
			var areaElement = document.getElementById(areaID);
			
			if(areaElement.style.display == 'none')
			{
				areaElement.style.display = '';
				$(linkElement).empty().html('[-]');
			}
			else
			{
				areaElement.style.display = 'none';
				$(linkElement).empty().html('[+]');
			}
			
		}
		
		function submMySearch(reloadFeatures, pUp)
		{
			var name = document.getElementById('src_name').value;
			var descr = document.getElementById('src_descr').value;
			var auth = document.getElementById('src_auth').value;
			var upldr = document.getElementById('src_upldr').value;
			var order = document.getElementById('src_order').value;
			var sort = document.getElementById('src_sort').value;
			var timeframe = document.getElementById('src_timeframe').value;
			var hasimages = document.getElementById('src_hasimages').checked ? 1 : 0;
			var onlynmm = document.getElementById('src_onlynmm').checked ? 1 : 0;
			var showadult = document.getElementById('src_showadult').checked ? 1 : 0;
			var onlyadult = document.getElementById('src_onlyadult').checked ? 1 : 0;
			var tab = document.getElementById('src_tab').value;
			var view = document.getElementById('src_view').value;
			var cat = document.getElementById('src_cat').value;
			
			var size1 = document.getElementsByName('src_size1')[0].value;
			var size2 = document.getElementsByName('src_size2')[0].value;
			var dl1 = document.getElementsByName('src_dl1')[0].value;
			var dl2 = document.getElementsByName('src_dl2')[0].value;
			var endor = document.getElementsByName('src_endor')[0].value;
			
			var dbug = 'name= '+name+'; descr='+descr+'; auth='+auth+'; upldr='+upldr+'; order='+order+'; sort='+sort+'; timeframe='
			+timeframe+'; hasimages='+hasimages+'; onlynmm='+onlynmm+'; showadult='+showadult+'; tab='+tab+'; view='+view+';';
			
			//alert(dbug);
		
			if(name=='') document.getElementById('src_name').value = 'file name contains...';
			if(descr=='') document.getElementById('src_descr').value = 'description contains...';
			if(auth=='') document.getElementById('src_auth').value = 'author name contains...';
			if(upldr=='') document.getElementById('src_upldr').value = 'uploader name contains...';
			
			var srcPerformed = false;
			if (
				(name != '' && name != 'file name contains...')
				|| (descr != '' && descr != 'description contains...')
				|| (auth != '' && auth != 'author name contains...')
				|| (upldr != '' && upldr != 'uploader name contains...')
				|| size1 != '' || size2 != '' || dl1 != '' || dl2 != '' || endor != '' 
				) srcPerformed = true;
				
			
			var str = $("#searchDataForm").serialize();
			if(pUp == true) str+="&pUp=1";
			var area = '#srcContainer_';
			if(tab == 1) area+='files';
			else if(tab == 2) area+='news';
			else if(tab == 3) area+='images';
			
			$(area).empty().html('<img src="https://staticdelivery.nexusmods.com/contents/images/icons/loading.gif" /> Content loading ...');
		
			$.ajax(
			{
				type: "POST",
				url: base_domain+"/ajax/csearch/",
				data: str,
				success: function(returned_data) 
				{
					$(area).empty().html(returned_data);
					
					var el_btsearch = document.getElementById('btAsrc');
					var el_loadsearch = document.getElementById('load_btAsrc');
					el_btsearch.style.display='';
					el_loadsearch.style.display='none';
					
				}
			});

		}
		
		function changePreferences(preference, value)
		{
			$.ajax(
			{
				type: "POST",
				url: base_domain+"/ajax/updatepreference/",
				data: "pref="+preference+"&value="+value,
				success: function(returned_data) 
				{
					//alert(returned_data);
				}
			});
		}
		
		function changeMyView()
		{
			var el_hidden = document.getElementById('src_view');
			var exVal = el_hidden.value;
			var el_link = document.getElementById('tabview_link');
			
			if(exVal == 1)
			{
				el_hidden.value = 2;
				$(el_link).html('View: block');
			}
			else
			{
				el_hidden.value = 1;
				$(el_link).html('View: flat');
			}
			submMySearch();
			changePreferences('default_search_view',el_hidden.value );
		}
		
		function changeMyTab(val)
		{
			var el_hidden = document.getElementById('src_tab');
			var exVal = el_hidden.value;
			var el_view = document.getElementById('tabview');
			
			var el_cont_files = document.getElementById('srcContainer_files');
			var el_cont_news = document.getElementById('srcContainer_news');
			var el_cont_images = document.getElementById('srcContainer_images');
			
			if(val == 1)
			{
				$(el_view).removeClass('invisible');
				$(el_view).addClass('tab-right');
				$(el_cont_files).removeClass('invisible');
				$(el_cont_news).addClass('invisible');
				$(el_cont_images).addClass('invisible');
				
			}
			else
			{
				$(el_view).addClass('invisible');
				$(el_view).removeClass('tab-right');
				$(el_cont_files).addClass('invisible');
				if(val ==2)
				{
					$(el_cont_news).removeClass('invisible');
					$(el_cont_images).addClass('invisible');
				}
				else
				{
					$(el_cont_news).addClass('invisible');
					$(el_cont_images).removeClass('invisible');
				}
			}
			
			if(val == 2)
			{
				for (i=1; i<=8; ++i)
				{
					if(i != 2)
					{
						$('#ord_div_'+i).addClass('invisible');
					}
				}
				orderMySearch(2,false);
			}
			else
			{
				for (i=1; i<=8; ++i)
				{
					$('#ord_div_'+i).removeClass('invisible');
				}
			}
			
			if(exVal != val)
			{
				var ex_el_div = document.getElementById('tabsrc_'+exVal);
				var el_div = document.getElementById('tabsrc_'+val);
				
				$(ex_el_div).removeClass('active');
				$(el_div).addClass('active');
				
				el_hidden.value = val;
				submMySearch();
			}
		
		}
		
		
			
		
		function orderMySearch(val, isSubmit)
		{
			var el_hidden = document.getElementById('src_order');
			var exVal = el_hidden.value;
			
			if(exVal != val)
			{
				var ex_el_div = document.getElementById('ord_div_'+exVal);
				var ex_el_arr = document.getElementById('ord_arr_'+exVal);
				var ex_el_link = document.getElementById('ord_link_'+exVal);
				var ex_el_span = document.getElementById('ord_span_'+exVal);
				
				var el_div = document.getElementById('ord_div_'+val);
				var el_arr = document.getElementById('ord_arr_'+val);
				var el_link = document.getElementById('ord_link_'+val);
				var el_span = document.getElementById('ord_span_'+val);
				
				$(ex_el_div).removeClass('active');
				$(el_div).addClass('active');
				
				$(ex_el_arr).addClass('invisible');
				$(el_arr).removeClass('invisible');
				
				$(ex_el_link).removeClass('invisible');
				$(el_link).addClass('invisible');
				
				$(ex_el_span).removeClass('active');
				$(el_span).addClass('active');
				$(ex_el_span).addClass('invisible');
				$(el_span).removeClass('invisible');
				
				el_hidden.value = val;
				if(isSubmit) submMySearch();
			}
			else if (val == 7 && isSubmit) submMySearch();
		}
		
		function changeBlockedContent(tag_id)
		{
		
			var tab = document.getElementById('src_tab').value;
			var area = '#srcContainer_';
			if(tab == 1) area+='files';
			else if(tab == 2) area+='news';
			else if(tab == 3) area+='images';
			
			$(area).empty().html('<img src="https://staticdelivery.nexusmods.com/contents/images/icons/loading.gif" /> Content loading ...');

			var value = document.getElementsByName('ctags['+tag_id+']')[0].checked ? 1 : 0;

			$.ajax(
			{
				type: "POST",
				url: base_domain+"/ajax/changeblockedcontent/",
				data: "tag_id="+tag_id+"&value="+value,
				success: function(returned_data) 
				{
					submMySearch();
				}
			});
		}
		
		function sortMySearch(val)
		{
			var el_hidden = document.getElementById('src_sort');
			var exVal = el_hidden.value;
			
			if(exVal != val)
			{
				var ex_el_link = document.getElementById('sort_link_'+exVal);
				var ex_el_span = document.getElementById('sort_span_'+exVal);
				
				var el_link = document.getElementById('sort_link_'+val);
				var el_span = document.getElementById('sort_span_'+val);
				
				$(ex_el_link).removeClass('invisible');
				$(el_link).addClass('invisible');
				
				$(ex_el_span).removeClass('active');
				$(el_span).addClass('active');
				$(ex_el_span).addClass('invisible');
				$(el_span).removeClass('invisible');
				
				el_hidden.value = val;
				submMySearch();
			}
		}

		
		
	function replyTo(pid)
	{
		toggleVisibility('comment-reply-form'+pid);
		$('#postreply'+pid).focus();
	}
	
	function moveToBugs(pid)
	{
		$('#movetobugs_form_'+pid).toggle();
		$('#movetobugs_title_'+pid).focus();
	}
	
	function checkReplyCommentForm(pid)
	{
		var post_value = document.getElementById('postreply'+pid).value;
		if(post_value == '')
		{ 
			alert('You didn\'t enter any text');
			return false;
		}
		return true;
	}
	
	function checkAddCommentForm()
	{
		var post_value = document.getElementById('post').value;
		
		if(post_value == '')
		{ 
			alert('You didn\'t enter any text');
			return false;
		}
		return true;
	}
	
	function ToggleUMDelReportLay()
	{
		var l = document.getElementById('UMDelReportLay');
		if ( l.style.display === 'none')
		{
			l.style.display = 'block';
		}
		else
		{
			l.style.display = 'none';
		}

		return true;
	}
	
		function toggleRestrictionDiv(isOn)
		{
			var elHead = document.getElementById('restrictionsHeader');
			var elOn = document.getElementById('restrictionsOn');
			elHead.style.display = isOn == 1 ? 'block' : 'none';
			elOn.style.display = isOn == 1 ? 'block' : 'none';
		}

		function toggleRestriction(partialId)
		{
			var elCheck = document.getElementsByName('res_'+partialId+'_on')[0];
			var elDays = document.getElementsByName('res_'+partialId+'_days')[0];
			var elType = document.getElementsByName('res_'+partialId+'_type')[0];
			elDays.disabled = elCheck.checked == true ? false : true;
			elType.disabled = elCheck.checked == true ? false : true;
			
			if(partialId == 'CommentFile')
			{
				var elId = document.getElementsByName('res_'+partialId+'_id')[0];
				elId.disabled = elCheck.checked == true ? false : true;
			}

		}
		var NMM_GAMES = [
		162,482,140,141,1249,120,1151,130,161,100,1634,101,110,1704,242,223,419,153,952,449,160,154,1271		];
	
	function toggleNewsGames(checkAll)
	{
		var checks = document.getElementsByName('local[]');
		
		for(var i = 0; i < checks.length; i++)
		{
			if(checkAll == 1) checks[i].checked =  'checked';
			else if(checkAll == 0) checks[i].checked =  '';
			else if(checkAll == 2)
			{
				// NMM
				var ison = NMM_GAMES.indexOf(parseInt(checks[i].value)); 
			
				if (ison >= 0) checks[i].checked =  'checked';
				else checks[i].checked =  '';
			}
		}
		
	}
	
		
		function toggleNotifActive()
		{
			elToggle = document.getElementsByName('notifications_active')[0];
			
			var el = new Array();
			el[0] = document.getElementsByName('notify_news')[0];
			el[1] = document.getElementsByName('notify_comments_ownmods')[0];
			el[2] = document.getElementsByName('notify_comments_trackedmods')[0];
			el[3] = document.getElementsByName('notify_uploads_trackedmods')[0];
			el[4] = document.getElementsByName('notify_mods_friends')[0];
			
			el[5] = document.getElementsByName('notifications_game_specific')[0];
			el[6] = document.getElementsByName('notify_images_ownmods')[0];
			el[7] = document.getElementsByName('notify_team_actions')[0];
			el[8] = document.getElementsByName('notify_staff_actions')[0];
			el[9] = document.getElementsByName('notify_tracked_authors')[0];
			
			el[10] = document.getElementsByName('notify_bug_issues')[0];
			el[11] = document.getElementsByName('notify_bug_replies')[0];

			for (var i = 0; i < el.length; i++) 
			{
  				myel = el[i];
				if(myel) myel.disabled = elToggle.value == 0;
			}
			
		}
	
		function toggleWarningRemoval(elId)
		{
			var el = document.getElementById(elId);
			if(el)
			{
				el.style.display = el.style.display == 'none' ? '' : 'none';
			}
			else alert('element not found :(');
		}
		
		
		function toggleEditRestrictions(elId)
		{
			var el = document.getElementById(elId);
			if(el)
			{
				el.style.display = el.style.display == 'none' ? '' : 'none';
			}
			else alert('element not found :(');
		}
		
			$(document).ready(function(){
             $('.popbox').popbox({call:'pb-onload'});
           });
			function checkAccept()
	{
		var el = document.getElementById('accept');
		if(el)
		{
			return el.checked;
		}
	}
		function assoc_game(gameid)
		{
			var el_name = 'tglink_'+gameid;
			chk = document.getElementById('local_'+gameid);
			if(chk.value == 0)
			{
				chk.value = 1;
				$('#'+el_name).css({'color': '#22FF22'},{'font-weight':'bold'});
			}
			else
			{
				chk.value = 0;
				$('#'+el_name).css({'color': '#999999'},{'font-weight':'normal'});
			}
		}

		function toggleTagNodeCheckboxes()
		{
			var aChks = document.getElementsByName('local[]');
			
			for (var i in aChks)
 			{
 				aChks[i].disabled = (aChks[i].disabled == true) ? false : true;
 			}
 			
 			/*
 			var aChks = document.getElementsByName('blockable');
			for (var i in aChks)
 			{
 				aChks[i].disabled = (aChks[i].disabled == true) ? false : true;
 			}
 			*/
		}
	
	$(function(){		
		// abs
//		$('.files-tab-content > div').hide();
//		$('.files-tab-info').show();
		
		$('.file-tabs ol').css('width', $('.file-tabs ol > li').size() * parseInt($('.file-tabs ol li').width()));
		
		$('.image-list a').live("mouseenter", function(){
			$(this).children('.image-overlay').show();
			$(this).children('img').css('opacity', 0.3);
		});
		
		$('.image-list a').live("mouseleave",function(){
			$('.image-list a').children('.image-overlay').hide();
			$('.image-list a').children('img').css('opacity', 1);
		});

		// actions tooltips
			// using http://onehackoranother.com/projects/jquery/tipsy
			$('.actionLink').tipsy({fade: true});
		
		$('.file-tabs li a').click(function(e){
			e.preventDefault();
			switch($(this).attr('class')){
				case 'tab-feeds':
					$('#pcontentarea').loadPage(base_domain+'/ajax/feedsuser/?id='+ajax_id);
					break;
				case 'tab-info':
					$('#pcontentarea').loadPage(base_domain+'/ajax/userabout/?id='+ajax_id);
					break;
				case 'tab-files':
					$('#pcontentarea').loadPage(base_domain+'/ajax/usermods/?id='+ajax_id);
					break;
				case 'tab-videos':
					$('#pcontentarea').loadPage(base_domain+'/ajax/uservideos/?id='+ajax_id);
					break;
				case 'tab-images':
					$('#pcontentarea').loadPage(base_domain+'/ajax/userimages/?id='+ajax_id);
					$('#pcontentarea').ajaxComplete(function() {
						$('.image-list li:nth-child(3n)').addClass('last');
					});					
					break;
				case 'tab-friends':
					$('#pcontentarea').loadPage(base_domain+'/ajax/userfriends/?id='+ajax_id);
					break;
			}
			$('.file-tabs li').removeClass('active').removeClass('next');
			$(this).parent('li').addClass('active');	
			$(this).parent('li').next('li').addClass('next');

		});
		

		
		// image tab
		//$('.image-list li:nth-child(3n)').addClass('last');
		
		$('.image-list a').mouseenter(function(){
			$(this).children('.image-overlay').show();
			$(this).children('img').css('opacity', 0.3);
		});
		
		$('.image-list a').mouseleave(function(){
			$('.image-list a').children('.image-overlay').hide();
			$('.image-list a').children('img').css('opacity', 1);
		});
	
	});

		function submVideoSearch(pUp)
		{
			var tab = document.getElementById('src_tab').value;
			var str = $("#searchVideoForm").serialize();
			if(pUp == true) str+="&pUp=1";
			var area = '#srcContainer_';
			if(tab == 1) area+='videos';
			else if(tab == 2) area+='tracker';
			
			$(area).empty().html('<img src="https://staticdelivery.nexusmods.com/contents/images/icons/loading.gif" /> Content loading ...');
		
			$.ajax(
			{
				type: "POST",
				url: base_domain+"/ajax/videosearch/",
				data: str,
				success: function(returned_data) 
				{
					$(area).empty().html(returned_data);
					
					var el_btsearch = document.getElementById('btAsrc');
					var el_loadsearch = document.getElementById('load_btAsrc');
					el_btsearch.style.display='';
					el_loadsearch.style.display='none';
				}
			});

		}
		
		
		function changeVideoTab(val)
		{
			var el_hidden = document.getElementById('src_tab');
			var exVal = el_hidden.value;
			
			var el_cont_videos = document.getElementById('srcContainer_videos');
			var el_cont_tracker = document.getElementById('srcContainer_tracker');

			if(el_cont_videos && el_cont_tracker)
			{
				if(val == 1)
				{
					$(el_cont_videos).removeClass('invisible');
					$(el_cont_tracker).addClass('invisible');
				}
				else
				{
					$(el_cont_videos).addClass('invisible');
					$(el_cont_tracker).removeClass('invisible');
				}
				
				if(exVal != val)
				{
					var ex_el_div = document.getElementById('tabsrc_'+exVal);
					var el_div = document.getElementById('tabsrc_'+val);
					
					$(ex_el_div).removeClass('active');
					$(el_div).addClass('active');
					
					el_hidden.value = val;
					submVideoSearch();
				}
			}
		
		}
		
		
			
		
		function orderVideoSearch(val, isSubmit)
		{
			var el_hidden = document.getElementById('src_order');
			var exVal = el_hidden.value;
			
			if(exVal != val)
			{
				var ex_el_div = document.getElementById('ord_div_'+exVal);
				var ex_el_arr = document.getElementById('ord_arr_'+exVal);
				var ex_el_link = document.getElementById('ord_link_'+exVal);
				var ex_el_span = document.getElementById('ord_span_'+exVal);
				
				var el_div = document.getElementById('ord_div_'+val);
				var el_arr = document.getElementById('ord_arr_'+val);
				var el_link = document.getElementById('ord_link_'+val);
				var el_span = document.getElementById('ord_span_'+val);
				
				$(ex_el_div).removeClass('active');
				$(el_div).addClass('active');
				
				$(ex_el_arr).addClass('invisible');
				$(el_arr).removeClass('invisible');
				
				$(ex_el_link).removeClass('invisible');
				$(el_link).addClass('invisible');
				
				$(ex_el_span).removeClass('active');
				$(el_span).addClass('active');
				$(ex_el_span).addClass('invisible');
				$(el_span).removeClass('invisible');
				
				el_hidden.value = val;
				if(isSubmit) submVideoSearch();
			}
			else if (val == 7 && isSubmit) submVideoSearch();
		}
		

		function sortVideoSearch(val)
		{
			var el_hidden = document.getElementById('src_sort');
			var exVal = el_hidden.value;
			
			if(exVal != val)
			{
				var ex_el_link = document.getElementById('sort_link_'+exVal);
				var ex_el_span = document.getElementById('sort_span_'+exVal);
				
				var el_link = document.getElementById('sort_link_'+val);
				var el_span = document.getElementById('sort_span_'+val);
				
				$(ex_el_link).removeClass('invisible');
				$(el_link).addClass('invisible');
				
				$(ex_el_span).removeClass('active');
				$(el_span).addClass('active');
				$(ex_el_span).addClass('invisible');
				$(el_span).removeClass('invisible');
				
				el_hidden.value = val;
				submVideoSearch();
			}
		}

			$('#images-normal').live("click", function() 
			{
				$('#pcontentarea').loadPage(base_domain+'/ajax/userimages/?show=norm&id='+ajax_id+'&randomcode='+r_id+andMore);
				$('#pcontentarea').ajaxComplete(function() {
					$('.image-list li:nth-child(4n)').addClass('last');
				});					
								
				
			});
			
			$('#images-supporter').live("click", function() 
			{
				$('#pcontentarea').loadPage(base_domain+'/ajax/userimages/?show=supp&id='+ajax_id+'&randomcode='+r_id+andMore);
				$('#pcontentarea').ajaxComplete(function() {
					$('.image-list li:nth-child(4n)').addClass('last');
				});		
			});		
				function addActionParameter(formName, parameter)
		{
			var currentValue = document[formName].getAttribute('action');
			document[formName].setAttribute('action', currentValue + parameter);
		}
			$(function(){
		// news-item header
		$('.news-list h2 a').each(function(){
			if($(this).children('span').height() > 30){
				$(this).css('line-height', '19px');
			} else {
				$(this).css('line-height', '38px');
			}
			
		});
		
		$('.icon-info').tipsy({
			fade: true
		});
	});

function onChangeBorder(id,slide) {
	if(slide) {
		slide = slide - 1;
		$('#hotfiles').cycle(slide);
	}
	$('#'+id).css({'border': '1px solid #E3A853'});
    return false; 
}

function offChangeBorder(id) {
	$('#'+id).css({'border': '1px solid #000000'});
    return false; 
}

$(document).ready(function() {
    $('#hotfiles').cycle({
		fx: 'fade',
		speed: 500,
		timeout: 4000,
		prev: '#next',
		next: '#prev',
		pause: 1
	});
});
		
		function endorseArticle(id) 
		{
			var chk = new Date().getTime();
			
			$.ajax({
			type: "POST",
			url: base_domain+"/ajax/endorsearticle/?chk="+chk,
			data: "aid=" + id,
			success: function(msg) 
			{
				if(isNaN(msg)) alert(msg);
				else $('#artlike').empty().html(msg+' likes');

			}
		});

	return false;	
}
		