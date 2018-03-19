$(document).ready(function(e) {
	$("#bookFlightNSP").live("keydown", function (event) {
		
		if (event.keyCode == 13) {
		   $("#bookFlightNSP").click();
		}
		if (event.keyCode == 9 && !event.shiftKey) {
			if ( $( "#offertab_wrapper" ).length ){
				$("#offertab_wrapper #book a").focus();
			}else{
				$("#flighttab_wrapper #book a").focus();
			}
					
		}
	
	});
	$("#bookFlightNSP_MC").live("keydown", function (event) {
		
		if (event.keyCode == 13) {
		   $("#frmMultibtnNSP").click();
		}
		if (event.keyCode == 9 && !event.shiftKey) {
			if ( $( "#offertab_wrapper" ).length ){
				$("#offertab_wrapper #book a").focus();
			}else{
				$("#flighttab_wrapper #book a").focus();
			}		
		}
	
	});
	$("#submitMMBNSP").live("keydown", function (event) {
	   if (event.keyCode == 13) {
		   $("#submitMMBNSP").click();
	   }
	   if (event.keyCode == 9 && !event.shiftKey) {
			$("#flighttab_wrapper #manage a").focus();		
		}

	 
	});
	$("#check_online").live("keydown", function (event) {
	   if (event.keyCode == 13) {
		   $("#check_online").click();
	   }
	   if (event.keyCode == 9 && !event.shiftKey) {
			$("#flighttab_wrapper #checkin a").focus();		
		}

	 
	});
	$("#status_searchoffer").live("keydown", function (event) {
	   if (event.keyCode == 13) {
		   $("#status_searchoffer").click();
	   }
	   if (event.keyCode == 9 && !event.shiftKey) {
			$("#flighttab_wrapper #status a").focus();		
		}

	  
	});
	$("#timeTableResult").live("keydown", function (event) {
	   if (event.keyCode == 13) {
		   $("#timeTableResult").click();
	   }
	   if (event.keyCode == 9 && !event.shiftKey) {
		   $(this).parents("#timetablecont").find("#tt_close").click();
			$("#flighttab_wrapper #status a").focus();		
		}
	});
	
	// script for manage booking tabs radio button 
	$("#selectBookingOption input[type=radio]").live("change",function () {
			
			if ($("#mc_opt1").is(":checked")) {
				$('#optionOne').removeAttr("disabled");
				$('#optionTwo').attr("disabled","disabled");
			}
			else if ($("#mc_opt2").is(":checked")) {
				$('#optionTwo').removeAttr("disabled");
				$('#optionOne').attr("disabled","disabled");
			}
			
	}); 
	
	// script for check in tabs radio button 
	$("#checkInOption input[type=radio]").live("change",function () {			
			if ($("#check_refno").is(":checked")) {
				$('#option-one').removeAttr("disabled");
				$('#option-two').attr("disabled","disabled");
				$('#option-three').attr("disabled","disabled");
			}
			else if ($("#check_freq").is(":checked")) {
				$('#option-two').removeAttr("disabled");
				$('#option-one').attr("disabled","disabled");
				$('#option-three').attr("disabled","disabled");
			}
			else if ($("#check_etic").is(":checked")) {
				$('#option-three').removeAttr("disabled");
				$('#option-one').attr("disabled","disabled");
				$('#option-two').attr("disabled","disabled");
			}
			
	}); 
	
	// script for status tabs radio button 
	$("#statusOption input[type=radio]").live("change",function () {
			
			if ($("#nav_status_flroot").is(":checked")) {
				
				$('#statusOne').removeAttr("disabled");
				$('#statusTwo').attr("disabled","disabled");
			}
			else if ($("#nav_status_flightnumber").is(":checked")) {
				$('#statusTwo').removeAttr("disabled");
				$('#statusOne').attr("disabled","disabled");
			}
			
	}); 
	
	//Script for IBE widget dialog focus
	$(document).on('dialogclose','div.ui-dialog', function(e){
		$("#rhsbookFlightNSP").focus();
		e.preventDefault();
	})
	$("#deal").live("keydown", function (event) {
		if (event.keyCode == 13) {
		   $("#country2").focus();
		}	
	});

	/*News letter tabing*/
	$("#search_flight_tabnav").live("keydown", function (event) {
		if (event.keyCode == 9 && !event.shiftKey) {
			$("#offertab_wrapper #deal a").focus();		
		}
	
	});	
	 $(".newInfoBtn").on('click', function (e) {
		$(this).next(".popover").find(".popover-content").attr("tabindex","0");
    		$(this).next(".popover").find(".popover-content").focus().css("outline","1px solid #66afe9");	
		$(".popover").live('keydown', function (e) {
             		var keyCode= e.keyCode;
    		  	if(keyCode == 9){
	  			$(".popover").remove();
	    		}
    		});
   	 })
		

});




