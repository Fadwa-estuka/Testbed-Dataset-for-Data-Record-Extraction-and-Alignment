/* Updated 9/21/16 by SC ** 9/13/16 by ML  */

function GenPVID() {

    // getting the date, getting the seconds from epoch
    var timestamp = new Date().getTime() / 1000;
    //Rounding the decimal off
    var epochSec = Math.round(timestamp).toString();
    // making an 8 digit random number
    var randomNumber = Math.random().toString().substr(2, 8);
    // set the global variable to the 19 digit page view id
    var tempPVIDreturn = epochSec + randomNumber;

    s_pageview_id = tempPVIDreturn;

    $(document).trigger("pvidReset");
}



// function that parses page and applies expand power to any item with
// a class of ".js-expand-button" and a data-attribute of "data-section"
function expandSections() {
    $('.js-expand-button').on('click', function(event){
        event.preventDefault();
        var theSectionString = $(this).data('section');
        $(theSectionString).toggleClass('is-expanded');

		$(this).find('.sp-arrow').toggleClass('is-rotated');
    });
}

function closeDropdown() {
    $('.js-close-dropdown').on('click', function(event){
        event.preventDefault();
        $('.header-specialty-menu').removeClass('is-expanded');
		$('.header-specialty-toggle').find('.sp-arrow').removeClass('is-rotated');
    });
}



var euCookiePolicy ={
    checkCookie: function(response) {
        if (typeof isMscpApp != 'undefined') {
            if (!isMscpApp && document.cookie.match("euPolicyView") === null) {
                if (response.toString().toLowerCase() == "eu") {
                    euCookiePolicy.showMessage();
                }
                date = new Date();
                date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
                document.cookie = "euPolicyView='true'; path=/; domain=" + window.location.host + "; expires=" + date.toGMTString();
            }
        }
    },
    closeMessage:function() {
        $("body").removeClass("show-eu-message");
    },
    showMessage:function(){
        $("body").addClass("show-eu-message");
    }
}

var regionIpChk = {
    msgMap: {
		'us': 'This site is intended for healthcare professionals',
		'de': 'Diese Seite richtet sich an Fachkreise (Angehörige der Heilberufe)',
		'fr': 'Ce site est destiné aux professionnels de santé',
		'es': 'Este sitio web está dirigido exclusivamente a los profesionales de la salud',
		'pt': 'Este site é dirigido exclusivamente a profissionais de saúde'
	},
    checkAjax: function() {
            $.support.cors = true;
            $.ajax({
                type: "GET",
                url: "/api/visitorcountry/visitorcountry.svc/getvisitorcontinent",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
				success: function (response) {
					euCookiePolicy.checkCookie(response);
					regionIpChk.checkRegion(response);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert(XMLHttpRequest.response);
                    // alert(textStatus);
                    var error = eval('(' + XMLHttpRequest.response + ')');
                    //  alert("Error occured while calling Visitor Country!");
                }
            });
    },
    checkRegion: function(response) {
		if (response.toString().toLowerCase() != "us") {
			$('body').addClass('show-hcp-message');
			$('body').prepend('<div class="hcp-notify">' + regionIpChk.msgMap[locale] + '</div>');
		}	
    }	
}


$(document).ready(function() {
	// call expandable sections function
	expandSections();
	closeDropdown();
	regionIpChk.checkAjax();
});
