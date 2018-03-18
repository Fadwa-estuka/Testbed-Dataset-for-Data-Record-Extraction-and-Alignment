/**
 
 	Alerts users if their logged in LOCALE is not US.
 	Should only be embedded in US pages.

 	NOTE: Relies on Cookie.js plugin found in 'component/outdated-browser.js'
 
 */



(function(){

	'use strict';


	var isStaying = cookie.get("stayInDifferentLocale");

	function getLoggedStatus() {

		if( typeof Alps != 'undefined' && typeof Alps.Api != 'undefined' ){
			Alps.Api.getUserData(function(error, result) {

				if (error) {
					// not logged in - do nothing
					removeAlert();
				} else {
					var country = result.getCountry(),
						language = result.getLanguage();

					if( country !== "US" ) {
						if( country === "CA" ) {
							alertCAUsers();
						} else {
							alertGlobalUsers();
						}

						enableAlert();
					}	
				}
			});
		} else {
			removeAlert();
		}
	}

	function enableAlert() {
		$("body").addClass("locale-modal-alert");
		$("#btn-locale-stay").on("click", onStayInLocale);
	}

	function removeAlert() {
		$("body").removeClass("locale-modal-alert");
	}

	function alertCAUsers() {
		var altURL = document.location.origin + '/en_CA' + document.location.pathname;
		$("#btn-locale-go").attr("href", altURL);
	}

	function alertGlobalUsers() {
		$("#locale-p1").text("We noticed that your account is set to another region, though you're viewing the U.S. version of Nintendo.com.");
		$("#locale-p2").text("If you'd like to purchase a game or see product details for your region, please select the link below to choose your region.  ");
		$("#btn-locale-go").text("Choose your region");
		
		$("#btn-locale-go").attr("href", "/countryselector");
	}




	function onStayInLocale( e ) {
		e.preventDefault();
		cookie.set('stayInDifferentLocale', 'true', {
			expires: 1
		});

		removeAlert();
	}


	if( isStaying !== 'true' ) {
		getLoggedStatus();
	}
	
	
	

})();


