// -------------------------ibe.js starts ---------------


/***********************************************************
Contents:
	inputForm() 			- plugin for selecting the radio buttons
	newPassengersDetailsAdd - plugin for adding new passengers
	ibeAccordian.init()     - accordion functionality. It uses jquery.accordion.js
	flightDateSelection.init() - for hover over td, flight details tooltip and airport code tooltip
	tripSummary.init()		- the scrolling of trip summary on the right
	priceTaxbreakdown.init()- for opening the price and tax breakdown in trip summary
	showFlightDetails.init() - for showing the detail of flight summary on view details click
	addNewPassenger.init()   - add new passenger functionality
	payment.init()			 - for the slide down when the user selects the payment type like visa etc.
	tooltip.init()			 - for the tooltips on the forms
	sliders.init()			 - for the sliders
	printItenary.init()		 - for printing the itenary. it copens up in a modal box.
	ie6TableFix.init()       - this is for taking out the ie6 irritation 
***********************************************************/
/***********************************/
//global variables used with this js (ibe.js).
var id; // for tooltip
var toolTipTop; // for tooltip
var title; // for tooltip
/***********************************/
// gaurav - created plugin for selecting the radio buttons
(function($) {
    $.fn.extend({
        inputForm: function(options) {
            var defaults = {
                tableCellClick: false // to check whether <a> or <td> is clicked
            }
            var option = $.extend(defaults, options);
            var rel,parent;
            var removeSelectedClass;
            this.live("click",
            function() {
				if ($(this).parents("div.flightsDirection").hasClass("outbound")){
					parent = "div.flightsDirection.outbound";
				} else if ($(this).parents("div.flightsDirection").hasClass("return")){
					parent = "div.flightsDirection.return";
				}
                if (option.tableCellClick == false) {
                    removeSelectedClass = parent + " a.selectedTab";
                } else {
                    removeSelectedClass = parent + " *.selectedTab";
                }
                $(removeSelectedClass).removeClass("selectedTab");
                var findTd = parent + " td.selectedTab";
                if ($(findTd).length > 0) {
                    $(findTd).removeClass("selectedTab");
                }
                $(this).addClass("selectedTab");
                if (option.tableCellClick == false) {
                    $(this).parents("td.flightAmt").addClass("selectedTab");
                    rel = parent + " input#" + this.rel;
					
                } else {
                    $("td.flightAmt.selectedTab a").addClass("selectedTab");
                    rel = parent + " input#" + $("td.flightAmt.selectedTab a").attr("rel");
                }
				if($(this).hasClass("flightHover") || $(this).parents("td").hasClass("flightHover")){
					$("div#flightStops").dialog({
						resizable: false,
						modal: true,
						width: 800,
						minHeight: 300,
						position: ["center", "center"],
						overlay: {
							backgroundColor: "#000",
							opacity: 0.5
						}
					});
					if (rtl = 0){// for checking the direction of the website as in rtl custom fonts are not used.
			Cufon.refresh(); // refreshing the fonts
		}
				}
                $(rel).attr("checked", "checked");
				return false;
            });
			
        }
    });
})(jQuery);
/***********************************/
// gaurav - created plugin for adding new passengers
(function($) {
    $.fn.extend({
        newPassengerDetailsAdd: function(options) {
            var defaults = {
                type: ""
            }
            var rel, rev;
            var option = $.extend(defaults, options);
            var btnClose = option.type + " a.cancel";
            $(option.type).hide();
            $(this).live("click",
            function() {
                rel = option.type + "." + this.rel;
                $(rel).slideDown("slow");
                $(this).css("display", "none");
                $(this).parents("p").hide();
                return false;
            });
            $(btnClose).live("click",
            function() {
                rev = "a.addNewPassenger[rel='" + this.rev + "']";
                $(this).parents(option.type).slideUp("slow",
                function() {
                    $(rev).css("display", "block");
                    $(rev).parents("p").show();
                });
                return false
            });
			
        }
    });
})(jQuery);

/**************************************/
// the accordion functionality. It uses jquery.accordion.js.
var ibeAccordian = {
    init: function() {
        if ($("#accordion").length > 0) {
            $("div.step a.btnPurple").qrAccordion({
                usingScrollTo: true
            });
        }
    }
};
/**************************************/
// this is used for the next and previous button functionality, hover over td and tooltip.
var flightDateSelection = {
    init: function() { //temporary only for journey
        $("div.flightsDirection a.radio, td.flightstatus a.radio").inputForm();
        $("td.flightAmt, td.mixedClass, td.selectedClass").inputForm({
            tableCellClick: true
        });
		
		/*$("td.flightHover").live("click",function(){ // for timetable results
			var left = $(this).position().left+300;
			var top = $(this).position().top;
			//console.log(left+","+top);
			$("div#flightStops").dialog({
                resizable: false,
                modal: false,
                width: 800,
                minHeight: 370,
                position: ["center", "center"],
                overlay: {
                    backgroundColor: "#000",
                    opacity: 0.5
                }
            });
            	if (rtl = 0){// for checking the direction of the website as in rtl custom fonts are not used.
			Cufon.refresh(); // refreshing the fonts
		}
			});*/
			/*if($("div#flightStops").is(":visible")){
					//$("div#flightStops").fadeOut("fast");
			}
			var left = $(this).position().left+260;
			var top = $(this).position().top+270;
            $("div#flightStops").css({
				"left":left,
				"top":top	
			}).fadeIn("slow");
				if (rtl = 0){// for checking the direction of the website as in rtl custom fonts are not used.
			Cufon.refresh(); // refreshing the fonts
		}
			},function(){
				//do nothing
			});*/
		
		$("div#flightStops a.ui-dialog-titlebar-close").live("click",function(){
			$(this).parents("div#flightStops").fadeOut("fast");	
			return false;
		})
        if ($.browser.msie && $.browser.version == 6) {
            $("td.flightAmt").hover(function(event) {
                if ($(this).hasClass("selectedTab")) { //
                } else {
                    $(this).addClass("flightAmtHover");
                }
            },
            function() {
                $(this).removeClass("flightAmtHover");
            });
        } // this is for calculating the area for scrolling on next or previous
        var target = $("div.outbound div.dates");
        var target2 = $("div.return div.dates");
        var liOutbound = $("div.outbound .dates ul").find("li");
        var liReturn = $("div.return .dates ul").find("li");
        var liLength = ($("div.outbound .dates ul li").width() + 1) * (liOutbound.length);
        var liLength2 = ($("div.return .dates ul li").width() + 1) * (liReturn.length); //+1 for the border
        $("div.outbound .dates ul").css("width", liLength);
        $("div.return .dates ul").css("width", liLength2);
        window.onload = function() {
          /*  if ($("div.outbound a.selectedTab").length > 0 || $("div.return a.selectedTab").length > 0) {
                var selectedDate = $("div.outbound a.selectedTab").position().left - 336;
                var selectedDate2 = $("div.return a.selectedTab").position().left - 336;
                if ($.browser.msie) {
                    selectedDate = selectedDate + 2;
                    selectedDate2 = selectedDate2 + 2;
                }
                target.stop().scrollTo(selectedDate, 500, {
                    axis: 'x'
                });
                target2.stop().scrollTo(selectedDate2, 500, {
                    axis: 'x'
                });
            } */
        }
        $('div.outbound a.next').click(function() {
           // target.scrollTo("+=104", 500, {
            //    axis: 'x'
            //});
            return true;
        });
        $('div.outbound a.previous').click(function() {
            //target.scrollTo("-=104", 500, {
            //    axis: 'x'
            //});
            return true;
        });
        $('div.return a.next').click(function() {
            //target2.scrollTo("+=104", 500, {
            //    axis: 'x'
           // });
            return true;
        });
        $('div.return a.previous').click(function() {
            //target2.scrollTo("-=104", 500, {
            //    axis: 'x'
            //});
            return true;
        }); // showing the tool tip for the details related to the flight
        $("td.flightAmt a, div.flightsDirection div.dates a.openToolTip").live("hover",
        function(e) {            
        	if (e.type == "mouseover") {
                $("div.flightAmtToolTip").css("display", "none");
                var openToolTip = "div.flightAmtToolTip." + this.rel;
                var left = $(this).position().left;
                var top = $(this).position().top;
                $(openToolTip).css({
                    "top": top - 140,
                    "left": left + 68 // need to check on different resolutions
                }).fadeIn("fast");
            } else {
                $("div.flightAmtToolTip").fadeOut("fast");
            }
        }); //hovering over the airport code like for Doha - DOH
        $("a.airportCode").live("hover",
        function(e) {
            if (e.type == "mouseenter") {
                $("div.airportToolTip").css("display", "none");
                var openToolTip = "div.airportToolTip." + this.rel;
                var left = $(this).position().left;
                var top = $(this).position().top;
                $(openToolTip).css({
                    "top": top + 15,
                    "left": left - 120 // need to check on different resolutions
                }).fadeIn("fast");
            } else {
                $("div.airportToolTip").fadeOut("fast");
            }
        })
    }
};
/**************************************/
// for the various overlays like currency convertor etc.
var overlays = {
    init: function() {
        $(".typeClass, .overlays").css("display", "none");
        $("a.class, a[class*='openOverlay'], a.currencyConverter, a.flightStops").live("click",
        function() {
            var rel = "#" + this.rel;
            var h, w;
            if ($(this).attr("class") == "class") {
                w = 340;
                h = 250;
            } else if (($(this).hasClass("openOverlay")) || ($(this).attr("class") == "currencyConverter")) { // need to make this more robust
                w = 477;
                h = 110;
            } else if ($(this).attr("class") == "flightStops") {
                w = 690;
                h = 110;
            }
            $(rel).dialog({
                resizable: false,
                modal: true,
                width: w,
                minHeight: h,
                position: ['center', 'center'],
                overlay: {
                    backgroundColor: "#000",
                    opacity: 0.5
                }
            });
            if (rtl = 0){// for checking the direction of the website as in rtl custom fonts are not used.
			Cufon.refresh(); // refreshing the fonts
		}
            return false;
        });
        $("a#openEmailItenary").click(function() {
            $("div#emailItenary").dialog({
                resizable: false,
                modal: true,
                width: 455,
                minHeight: 370,
                position: ['center', 'center'],
                overlay: {
                    backgroundColor: "#000",
                    opacity: 0.5
                }
            });
            if (rtl == 0){// for checking the direction of the website as in rtl custom fonts are not used.
			Cufon.refresh(); // refreshing the fonts
		}
            return false;
        });
		$("a.sendEmail").click(function(){
/*			$("div.entry").fadeOut("slow",function(){
				$("div.emailMessage").fadeIn("fast");	
			});
			return false;	*/
		});
		$("a.closeEmailWindow").click(function(){
			$("div#emailItenary").dialog("close");
			$("div.entry").css("display","block");
			$("div.emailMessage").css("display","none");
			return false;
		});
		
		$("a.closePriceQuoteWindow").click(function(){
			EMAIL_PRICEQUOTE.clear();
			hideWarningBar();
			$("div#emailPriceQuote").dialog("close");
			$("div.entry").css("display","block");
			$("div.priceQuoteEmailMessage").css("display","none");
			return false;
		});
		
		/*$("a#openEmailPriceQuote").click(function() {
            $("div#emailPriceQuote").dialog({
                resizable: false,
                modal: true,
                width: 455,
                minHeight: 370,
                position: ['center', 'center'],
                overlay: {
                    backgroundColor: "#000",
                    opacity: 0.5
                }
            });
            if (rtl = 0){// for checking the direction of the website as in rtl custom fonts are not used.
			Cufon.refresh(); // refreshing the fonts
		}
            return false;
        });*/
		$("a#openPageHelp").click(function() {
			UI_IBE_HELP_FAQ.loadFAQ();
            $("div#helpPage").dialog({
                resizable: false,
                modal: true,
                width: 520,
                minHeight: 380,
                position: ['center', 'center'],
                overlay: {
                    backgroundColor: "#000",
                    opacity: 0.5
                }
            });
            if (rtl == 0){// for checking the direction of the website as in rtl custom fonts are not used.
			Cufon.refresh(); // refreshing the fonts
            }
            return false;
        });
		/*Common error page dialog*/
		$("a.errorPage,button.errorPage").click(function(event) {
			var rel = "#" + this.rel;
            $(rel).dialog({
                resizable: false,
                modal: true,
                width: 400,
                minHeight: 250,
                position: ['center', 'center'],
                overlay: {
                    backgroundColor: "#000",
                    opacity: 0.5
                }
            });
            if (rtl == 0){// for checking the direction of the website as in rtl custom fonts are not used.
				Cufon.refresh(); // refreshing the fonts
			}
            event.preventDefault();
        });
    }
};
/**************************************/
// the scrolling of trip summary on the right
var tripSummary = {
    init: function() {
        if ($('div.scroll').length > 0) {
            $('div.scroll').scrollFollow({
                speed: 1000,
                offset: 10,
                delay: 100
            });
        }
    }
};
/**************************************/
// this is for opening the price and tax breakdown in trip summary
var priceTaxbreakdown = {
    init: function() {
        $(".ibe .summaryColoumn .priceTaxbreakdown").css("display", "none");
        $("a#priceTaxbreakdown").click(function() {
            $(this).toggleClass("close");
            $(".ibe .summaryColoumn .priceTaxbreakdown").slideToggle("fast");
            return false;
        });
    }
}
/**************************************/
// for showing the detail of flight summary on view details click. Already in main.js so no need here.
/*var showFlightDetails = {
    init: function() {
        $('#flightSummaryPanel').hide();
        var flag = 0;
        $('#showDetails').click(function() {
            $('#flightSummaryPanel2').toggle();
            if (flag == 0) {
                $(this).text("Close details");
                flag = 1;
            } else {
                $(this).text("View details");
                flag = 0;
            }
            return false;
        });
    }
};*/


/**************************************/
// add new passenger functionality
var addNewPassengerDetails = {
    init: function() {
        $("a.addNewPassenger").newPassengerDetailsAdd({
            type: "div.editPassengerDetails"
        });
        $("a.addNewPassenger.ffpbeAddNewPassenger").newPassengerDetailsAdd({
            type: "div.addOtherPassengerDetails"
        });
    }
}
/**************************************/
// for the slide down when the user selects the payment type like visa etc.
var payment = {
    init: function() {
        $("#paymentType").change(function() {
            $("div.notShown").slideDown();
        });
    }
};
/**************************************/
// for the tooltip
var tooltip = {
    init: function() {
       $(".tooltip").css("display", "none");
        /* $(".row input.txtField , .row select").bind("click", // 
        function() {
            $(this).addClass("currentField");
            id = "div.tooltip." + $(this).attr("title");
            $(id).fadeIn(1000);
        }).bind("mouseleave",
        function() {
            $(this).removeClass("currentField");
            id = "div.tooltip." + $(this).attr("title");
            $(id).fadeOut(1000);;
        });  */
    }
};
/**************************************/
// for the slider
var sliders = {
    init: function() {
        $("#slider-range").slider({
            range: true,
            min: 200,
            step: 200,
            max: 1000,
            values: [0, 400],
            slide: function(event, ui) {
                $("#price").val('$' + ui.values[0] + ' - $' + ui.values[1]);
            }
        });
        $("#price").val('$' + $("#slider-range").slider("values", 0) + ' - $' + $("#slider-range").slider("values", 1));
    }
};
/**************************************/
// for printing the itenary. it copens up in a modal box.
var printItenary = {
	init:function(){
		
		$("a#printItenary").live("click",function(){
			window.print();
			/*var rel = "div." + this.rel;
			$(rel).dialog({
                resizable: false,
                modal: true,
                width: 700,
                minHeight: 500,
                position: ['center', 'center'],
                overlay: {
                    backgroundColor: "#000",
                    opacity: 0.5
                },
				open:function(event, ui){
					$("div.actions").css("display","none");
					window.print();
				},
				close: function(event, ui) { 
					$("div.actions").css("display","");
				}
            });
			if (rtl = 0){// for checking the direction of the website as in rtl custom fonts are not used.
			Cufon.refresh(); // refreshing the fonts
		}*/
			return false;
		});	
		
	}
};
/**************************************/
// this is for taking out the ie6 irritation
var ie6TableFix = {
	init:function(){
		if($.browser.msie && $.browser.version == 6){
			// the widths here are minus paddng. if width = 10 this means width = width-padding or width = 20 - 10
			var spacer = '<tr><th class="spacer"><img src="/ibe_content/images/blank.gif" width="98" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="100" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="76" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="82" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="82" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="82" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="82" height="1" alt="" title="" /></th></tr>';
				$(spacer).prependTo("div.flightsDirection table.selectFlights thead");
				
				////
				var spacer2 = '<tr><th class="spacer"><img src="/ibe_content/images/blank.gif" width="69" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="46" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="41" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="29" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="29" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="32" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="29" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="29" height="1" alt="" title="" /><th class="spacer"><img src="/ibe_content/images/blank.gif" width="29" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="29" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="40" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="57" height="1" alt="" title="" /></th><th class="spacer"><img src="/ibe_content/images/blank.gif" width="124" height="1" alt="" title="" /></th></tr>';
				$(spacer2).prependTo("div.flightsDirection table.dates thead");
				////
				// this takes care of flickering of background images
				try {
				 document.execCommand('BackgroundImageCache', false, true);
				} catch(e) {}
			}
			
		}
};
/**************************************/
$(document).ready(function() {
    ibeAccordian.init();
    flightDateSelection.init();
    overlays.init();
    tripSummary.init();
    priceTaxbreakdown.init();
    addNewPassengerDetails.init();
    //showFlightDetails.init();
    payment.init();
    tooltip.init();
    sliders.init();
	printItenary.init();
	ie6TableFix.init(); // this is for taking out the ie6 irritation
});
// -------------------------ibe.js ends ---------------


//-----------------------autoDate.js starts --------------

function dateChk(W){
var X=["January","February","March","April","May","June","July","August","September","October","November","December"];

var P=new Date();

var R=P.getDate();

var M=(P.getMonth()+1);

var F=P.getFullYear();

var O=document.getElementById(W);

var T="";

if(O==null){T=W;

}else{T=O.value;

}var V=true;


var C=R;
var b=M;
var U=F;
T=Y(T,"/","^");
T=Y(T,"-","^");
T=Y(T,".","^");
T=Y(T," ","^");
if(T.indexOf("^")!=-1){var a=T.split("^");
switch(a.length){case 1:if(String(a[0])!=""){C=a[0];
}break;
case 2:if(String(a[0])!=""){C=a[0];
}if(String(a[1])!=""){b=a[1];
}break;
case 3:if(String(a[0])!=""){C=a[0];
}if(String(a[1])!=""){b=a[1];

}if(String(a[2])!=""){U=a[2];
}break;
}}else{var J=T.length;
for(var Z=0;
Z<J;
Z++){if(Z<=1){if(Z==0){C="";
}C+=T.substr(Z,1);
}if(Z>1&&Z<=3){if(Z==2){if(J>=4){b="";
b+=T.substr(Z,1);
}else{if(T.substr(Z,1)!=0){b="";
b+=T.substr(Z,1);
}}}else{b+=T.substr(Z,1);
}}if(Z>3&&Z<=7){if(Z==4){U="";
}U+=T.substr(Z,1);
}}}if(!N(C,b,U)){switch(T.length){case 2:if(Number(T.substr(0,1))>0){C=T.substr(0,1);

}if(Number(T.substr(1,1))>0){b=T.substr(1,1);
}break;
case 3:if(Number(T.substr(1,2))<=12){if(Number(T.substr(0,1))>0){C=T.substr(0,1);
}if(Number(T.substr(1,2))>0){b=T.substr(1,2);
}}else{if(Number(T.substr(0,1))>0){C=T.substr(0,1);
}if(Number(T.substr(1,1))>0){b=T.substr(1,1);
}if(Number(T.substr(2,1))>0){U=T.substr(2,1);

}}case 4:if(Number(T.substr(1,2))<=12){if(Number(T.substr(0,1))>0){C=T.substr(0,1);
}if(Number(T.substr(1,2))>0){b=T.substr(1,2);
}if(Number(T.substr(3,1))>0){U=T.substr(3,1);
}}else{if(Number(T.substr(0,1))>0){C=T.substr(0,1);
}if(Number(T.substr(1,1))>0){b=T.substr(1,1);
}if(Number(T.substr(2,2))>0){U=T.substr(2,2);

}}break;
default:if(O==null){return"";
}else{V=false;
}break;
}}if(!N(C,b,U)){if(O==null){return"";
}else{V=false;
}}if(V&&T!=""){if(U.length<4){U=String(F).substr(0,(String(F).length-U.length))+U;
}else{if(U.length>4){U=String(F).substr(0,4);
}}var I="dd/mm/yyyy";
if(arguments.length==2){if(arguments[1]!=""){I=arguments[1];

}}var g="";
var E=new Array("/","-"," ",".");
for(var Z=0;
Z<E.length;
Z++){if(I.indexOf(E[Z])!=-1){g=E[Z];
break;
}}if(g==""){if(O==null){return"";
}else{V=false;
}}var L="";
if(Number(C)<10){C="0"+Number(C);
}if(Number(b)<10){b="0"+Number(b);
}var D="DD"+g+"MM"+g+"YYYY";
var B="DD"+g+"MM"+g+"YY";
var A="DD"+g+"MMM"+g+"YYYY";

var j="DD"+g+"MMM"+g+"YY";
var h="DD"+g+"MMMM"+g+"YYYY";
var f="DD"+g+"MMMM"+g+"YY";
var e="MM"+g+"YYYY";
var d="MM"+g+"YY";
var c="MMM"+g+"YYYY";
var K="MMM"+g+"YY";
var H="MMMM"+g+"YYYY";
var G="MMMM"+g+"YY";
var S="th";
var Q=",";
if((C=="01")||(C=="21")||(C=="31")){S="st";
}if((C=="02")||(C=="22")){S="nd";
}if((C=="03")||(C=="23")){S="rd";

}if(g!=" "){S="";
Q="";
}switch(I.toUpperCase()){case D:L=C+g+b+g+U;
break;
case B:L=C+g+b+g+String(U).substr(2,2);
break;
case A:L=C+g+X[Number(b)-1].substr(0,3)+g+U;
V=true;
break;
case j:L=C+g+X[Number(b)-1].substr(0,3)+g+String(U).substr(2,2);
V=true;
break;
case h:L=C+S+g+X[Number(b)-1]+Q+g+U;
V=true;
break;
case f:L=C+S+g+X[Number(b)-1]+Q+g+String(U).substr(2,2);

V=true;
break;
case e:L=b+g+U;
break;
case d:L=b+g+String(U).substr(2,2);
break;
case c:L=X[Number(b)-1].substr(0,3)+g+U;
V=true;
break;
case K:L=X[Number(b)-1].substr(0,3)+g+String(U).substr(2,2);
V=true;
break;
case H:L=X[Number(b)-1]+Q+g+U;
V=true;
break;
case G:L=X[Number(b)-1]+Q+g+String(U).substr(2,2);
V=true;

break;
}if(O==null){return L;
}else{O.value=L;
}}return V;
function Y(n,m,l){var k=n.indexOf(m);
while(k>-1){n=n.replace(m,l);
k=n.indexOf(m);
}return n;
}function N(i,l,k){if((isNaN(i))||(isNaN(l))||(isNaN(k))){return false;
}if((Number(i)==0)||(Number(l)==0)||(Number(k)==0)){return false;
}if(Number(l)>12){return false;

}if(Number(i)>getDaysInMonth(l,k)){return false;
}return true;
}}function addMonths(J){var E=new Date();
if(arguments.length==2){if(arguments[1]!=""){E=new Date(arguments[1].substr(6,4),Number(arguments[1].substr(3,2))-1,arguments[1].substr(0,2));
}}var M=E.getDate();
var F=E.getMonth()+new Number(J);
var C=1;

var D=E.getFullYear();
var K=E.getHours();
var L=E.getMinutes();
var H=E.getSeconds();
var I=new Date(D,F,C,K,L,H);
var G=I.getMonth()+1;
var A=I.getDate();
var B=I.getFullYear();
if(Number(M)>getDaysInMonth(G,B)){A=getDaysInMonth(G,B);
}else{A=M;
}if(Number(A)<10){A="0"+A;
}if(Number(G)<10){G="0"+G;
}return A+"/"+G+"/"+B;

}function CheckDates(F,A){var E;
var D;
var C;
E=F.substring(0,2);
D=F.substring(3,5);
C=F.substring(6,10);
var B=(C+D+E);
E=A.substring(0,2);
D=A.substring(3,5);
C=A.substring(6,10);
var G=(C+D+E);
if(arguments.length==2){if(G>=B){return true;
}else{return false;
}}else{if(arguments[2]==true){if(G>B){return true;

}else{return false;
}}}}function CheckDateTime(F,A){var E;
var D;
var C;
E=F.substring(0,2);
D=F.substring(3,5);
C=F.substring(6,10);
tempHH=F.substring(11,13);
tempMM=F.substring(14,16);
var B=(C+D+E+tempHH+tempMM);
E=A.substring(0,2);
D=A.substring(3,5);
C=A.substring(6,10);
tempHH=A.substring(11,13);
tempMM=A.substring(14,16);

var G=(C+D+E+tempHH+tempMM);
if(arguments.length==2){if(G>=B){return true;
}else{return false;
}}else{if(arguments[2]==true){if(G>B){return true;
}else{return false;
}}}}function addDays(B,A){return new Date(B.getTime()+Number(A)*24*60*60*1000);
}function dateValidDate(B){var A=B.substring(0,2);
var D=B.substring(3,5);

var C=B.substring(6,10);
if((isNaN(A))||(isNaN(D))||(isNaN(C))){return false;
}if((Number(A)==0)||(Number(D)==0)||(Number(C)==0)){return false;
}if(Number(D)>12){return false;
}if(Number(A)>getDaysInMonth(D,C)){return false;
}return true;
}function ageCalculate(G){var H=G.substr(0,2);
var C=G.substr(3,2);
var D=G.substr(6,4);

var I=new Date();
if(arguments.length==2){if(arguments[1]!=""){I=new Date(arguments[1].substr(6,4),Number(arguments[1].substr(3,2))-1,arguments[1].substr(0,2));
}}var B=I.getDate();
var A=I.getMonth();
var E=I.getFullYear();
var F=E-D;
if((C==(A+1))&&(H<=parseInt(B))){F=F;
}else{if(C<=(A)){F=F;
}else{F=F-1;
}}if(F==E){F=0;

}return F;
}function getDaysInMonth(B,A){var C;
if(B==1||B==3||B==5||B==7||B==8||B==10||B==12){C=31;
}else{if(B==4||B==6||B==9||B==11){C=30;
}else{if(B==2){if(isLeapYear(A)){C=29;
}else{C=28;
}}}}return(C);
}function getWDay(C){var B=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
var A=new Date(C.substr(6,4),Number(C.substr(3,2))-1,C.substr(0,2));

return B[A.getDay()];
}function isLeapYear(A){if(((A%4)==0)&&((A%100)!=0)||((A%400)==0)){return(true);
}else{return(false);
}}function StringToDate(B){var D=B.substring(0,2);
var E=B.substring(3,5);
var C=B.substring(6,10);
var A=new Date(C,Number(E)-1,D);
return A;
}
function DateToString(C){var B=C.getMonth()+1;

var A=C.getDate();
if(B<10){B="0"+B;
}if(A<10){A="0"+A;
}return A+"/"+B+"/"+C.getFullYear();
}

/* added by wajeeth for holiday **/
function DateToStringHoliday(C){

var B=C.getMonth()+1;
var A=C.getDate()-2;
if(B<10){B="0"+B;
}
if(A<10){A="0"+A;
}
return A+"/"+B+"/"+C.getFullYear();
}
/** end of the function added by wajeeth  **/

function dateConvertToMMDD(A){if(A!=""){var C=A.substring(0,2);
var D=A.substring(3,5);
var B=A.substring(6,10);
A=D+"/"+C+"/"+B;
}return A;
}

function ageCompare(C,B,F){var A=D(C,B).split("/");
var E=true;
if(Number(A[2])>F){E=false;

}if(E){if(Number(A[2])==F){if((Number(A[0])==0)&&(Number(A[1])==0)){E=true;
}else{E=false;
}}}return E;
function D(P,R){var J=Number(R.substr(6,4));
var M=Number(R.substr(3,2));
var Q=Number(R.substr(0,2));
var K=Number(P.substr(6,4));
var N=Number(P.substr(3,2));
var S=Number(P.substr(0,2));
var I=0;
var G=0;

var O=0;
var L=0;
var T=Q-S;
if(T<0){M--;
if(M<1){J--;
if(I){M=M+parseInt(365/I);
}else{M=M+12;
}}if(I==0){ml=H(M,J,G);
T=T+ml;
}else{T+=I;
}}O=M-N;
if(O<0){J--;
if(I!=0){O=O+parseInt(365/I);
}else{O=O+12;
}}L=J-K;
return T+"/"+O+"/"+L;
function H(W,V,U){var X;
if(W==1||W==3||W==5||W==7||W==8||W==10||W==12){X=31;
}else{if(W==2){X=28;

if(!(V%4)&&(U==1||V%100||!(V%400))){X++;
}}else{X=30;
}}return X;
}}}function CheckDateTime(C,D,G,F){var A;
var I;
var H;
var D=D.replace(":","");
var F=F.replace(":","");
A=C.substring(0,2);
I=C.substring(3,5);
H=C.substring(6,10);
var B=(H+I+A)+D;
A=G.substring(0,2);
I=G.substring(3,5);
H=G.substring(6,10);
var E=(H+I+A)+F;

if(E>=B){return true;
}else{return false;
}}function calculateDays(C,E){C=C.split("/");
E=E.split("/");
var D=new Date(C[1]+"/"+C[0]+"/"+C[2]);
var B=new Date(E[1]+"/"+E[0]+"/"+E[2]);
var A=Math.abs(Math.round((D-B)/86400000))+1;
return A;
}function calculateDateDiff(C,F){var M=new Date(C);
var L=new Date(F);

var G=L.getTime()-M.getTime();
if(isNaN(G)){return"";
}if(G<0){return"";
}var A=1000,B=60*A,E=60*B,H=24*E;
var K=Math.floor(G/H);
G-=K*H;
var I=Math.floor(G/E);
G-=I*E;
var D=Math.floor(G/B);
G-=D*B;
var J=Math.floor(G/A);
return K+"/"+I+"/"+D+"/"+J;
}function addHours(B,A){return new Date(B.getTime()+Number(A)*60*60*1000);

}function checkTime(B,A){tempDay=A.substring(0,2);
tempMonth=A.substring(3,5);
tempYear=A.substring(6,10);
var C=new Date(tempYear,Number(tempMonth)-1,tempDay);
if(C>=B){return true;
}else{return false;
}}

//-----------------------autoDate.js ends --------------

//------------------------cityList_en.js starts ----------



//------------------------------------cityList_en.js ends ----------------

