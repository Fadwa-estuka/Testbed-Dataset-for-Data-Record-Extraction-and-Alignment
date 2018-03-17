//
// Ad tag Loading on query string detect
// Last Updated 7/16/14 by JS
// Previous Updated 11/07/13 by JS
//
$( document ).ready(function() {
	
var urlMedtest = window.location.href.split('?');

if (urlMedtest[1] != undefined) {
	if (urlMedtest[1].indexOf("getArt") != -1) {
		var refArtURL = $('#ref_homepage .splitColL ul li:eq(0) a:eq(0)').attr('href');
		var drugArtURL = $('#ref_homepage .splitColR ul li:eq(0) a:eq(0)').attr('href');
		var refArtID = refArtURL.split('/');
		var drugArtID = drugArtURL.split('/');
		self.location.href = 'http://www.staging.medscape.com/noscan/public/dynamicad/infopass?refArtId=' + refArtID[4] + '&drugArtID=' + drugArtID[4];
	}
    else if (urlMedtest[1].indexOf("mediap") != -1) {

		$("body > *").each(function () {
			if ($(this).hasClass('prWrap')) {
				$(this).remove();
			}
		});

		var tempPSQs = urlMedtest[1].split('&');

		var medpack = tempPSQs[0].split('=');

		var unborb = tempPSQs[1].split('=');

		//console.log(medpack[1]);
		if (medpack[1] <= '6' || medpack[1] == '8') {
			if ($("#news").length != 0) {
				//console.log('news home');
				$('#adtagheader').empty();
				$('.rightAd:eq(1)').empty();
				$('#adtagfooter').empty();
				$('#adtagheaderbelow').empty();
				$('#adspace910').empty();
				$('#adtagfooter').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
				$('.rightAd:eq(1)').html('<div style="text-align: center;"><img src="http://a1977.g.akamai.net/f/1977/1448/1d/webmd.download.akamai.com/1448/headers_footers_new/text_advertisement_top.gif" width="77" height="7" border="0" alt="advertisement"></div><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x250.png" alt="" border="0" /></a>');
				$('#adspace910').html('<a href="#"><img src="http://img.staging.medscape.com/pi/house-ad/house_300x250.jpg" alt="" border="0" /></a>');
				if (medpack[1] == '5') {
					$('#adtagheader').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
				} else if (medpack[1] == '6') {
					$('#adtagheader').html('<div class="adlabelleft" style="width:970px;"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_970x250.png" alt="" border="0" /></a></div>');
				}
			} else if ($("#cardiology").length != 0) {
				$('.cardtopad').empty();
				$('.rightAd2').empty();
				$('#adtagfooter').empty();
				$('.rightAd2:eq(0)').html('<div style="text-align: center;"><img src="http://a1977.g.akamai.net/f/1977/1448/1d/webmd.download.akamai.com/1448/headers_footers_new/text_advertisement_top.gif" width="77" height="7" border="0" alt="advertisement"></div><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x250.png" alt="" border="0" /></a>');
				$('.rightAd2:eq(1)').html('<a href="#"><img src="http://img.staging.medscape.com/pi/house-ad/house_300x250.jpg" alt="" border="0" /></a>');
				$('#adtagfooter').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
				if (medpack[1] == '5') {
					$('.cardtopad').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
					var CardAdStyle = {
						"borderLeft": "1px solid #b3b3b3",
						"borderRight": "1px solid #b3b3b3"
					};
					$(".cardtopad").css( CardAdStyle );				
				} else if (medpack[1] == '6') {
					$('.cardtopad').html('<div class="adlabelleft" style="width:970px;"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_970x250.png" alt="" border="0" /></a></div>');
					var CardAdStyle = {
						"borderLeft": "1px solid #b3b3b3",
						"borderRight": "1px solid #b3b3b3"
					};
					$(".cardtopad").css( CardAdStyle );				
				}
			} else if ($("#ref_homepage").length != 0) {
				//console.log('ref home');
				$('.rightAd:eq(0)').empty();
				$('.rightAd:eq(2)').empty();
				$('#adtagfooter').empty();
				if ($('#bodypadding > div:eq(0)').attr('id') != 'all') {
					$('#bodypadding > div:eq(0)').remove();
				}
				$('.rightAd:eq(0)').html('<div style="text-align: center;"><img src="http://a1977.g.akamai.net/f/1977/1448/1d/webmd.download.akamai.com/1448/headers_footers_new/text_advertisement_top.gif" width="77" height="7" border="0" alt="advertisement"></div><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x250.png" alt="" border="0" /></a>');
				$('.rightAd:eq(2)').html('<a href="#"><img src="http://img.staging.medscape.com/pi/house-ad/house_300x250.jpg" alt="" border="0" /></a>');
				$('#adtagfooter').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
				if (medpack[1] == '5') {
					$('#adtagheader').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
				} else if (medpack[1] == '6') {
					$('#adtagheader').html('<div class="adlabelleft" style="width:970px;"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_970x250.png" alt="" border="0" /></a></div>');
				}
			} else if ($("link[rel='canonical']").attr('href').indexOf('viewarticle') != -1) {
				//console.log('news article');
				$('#adtagheader').empty();
				$('.rightAd:eq(0)').empty();
				$('.rightAd:eq(1)').empty();
				$('#adtagfooter').empty();
				$('#adtagheader').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
				$('.rightAd:eq(0)').html('<div style="text-align: center;"><img src="http://a1977.g.akamai.net/f/1977/1448/1d/webmd.download.akamai.com/1448/headers_footers_new/text_advertisement_top.gif" width="77" height="7" border="0" alt="advertisement"></div><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x250.png" alt="" border="0" /></a>');
				$('.rightAd:eq(1)').html('<a href="#"><img src="http://img.staging.medscape.com/pi/house-ad/house_300x250.jpg" alt="" border="0" /></a>');
				$('#adtagfooter').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
			} else if ($("link[rel='canonical']").attr('href').indexOf('/article/') != -1) {
				//console.log('ref article');
				$('#adtagheader').empty();
				$('#adtagrightcol').empty();
				$('#adtagrightcol_bottom').empty();
				$('#adspace910').empty();
				$('#adtagfooter').empty();
				$('#adtagheader').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
				$('#adtagrightcol').html('<div style="text-align: center;"><img src="http://a1977.g.akamai.net/f/1977/1448/1d/webmd.download.akamai.com/1448/headers_footers_new/text_advertisement_top.gif" width="77" height="7" border="0" alt="advertisement"></div><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x250.png" alt="" border="0" /></a>');
				$('#adtagrightcol_bottom').html('<a href="#"><img src="http://img.staging.medscape.com/pi/house-ad/house_300x250.jpg" alt="" border="0" /></a>');
				$('#adtagfooter').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');

			} else if ($("link[rel='canonical']").attr('href').indexOf('/drug/') != -1) {
				//console.log('ref article');
				$('#adtagheader').empty();
				$('#adtagrightcol').empty();
				$('#adtagrightcol_bottom').empty();
				$('#adspace910').empty();
				$('#adtagfooter').empty();
				$('#adtagheader').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
				$('#adtagrightcol').html('<div style="text-align: center;"><img src="http://a1977.g.akamai.net/f/1977/1448/1d/webmd.download.akamai.com/1448/headers_footers_new/text_advertisement_top.gif" width="77" height="7" border="0" alt="advertisement"></div><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x250.png" alt="" border="0" /></a>');
				$('#adtagrightcol_bottom').html('<a href="#"><img src="http://img.staging.medscape.com/pi/house-ad/house_300x250.jpg" alt="" border="0" /></a>');
				$('#adtagfooter').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');

			}

		} else if (medpack[1] == '7') {
			if ($("link[rel='canonical']").attr('href').indexOf('/viewcollection/') != -1) {
				//console.log('collection');
				$('#adtagheader').empty();
				$('.rightcolad').empty();
				$('#adtagfooter').empty();
				$('#adtagheader').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');
				$('.rightcolad').html('<div style="text-align: center;"><img src="http://a1977.g.akamai.net/f/1977/1448/1d/webmd.download.akamai.com/1448/headers_footers_new/text_advertisement_top.gif" width="77" height="7" border="0" alt="advertisement"></div><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x250.png" alt="" border="0" /></a>');
				$('#adtagfooter').html('<div class="adlabelleft"><a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_728x90.png" alt="" border="0" /></a></div>');

				$('.rightcolad').nextAll().remove();

			}
		}
	}
    else if (urlMedtest[2] != undefined) {
		//console.log('2nd Qs');
		if (urlMedtest[2].indexOf("mediap") != -1) {

			var tempPSQs = urlMedtest[2].split('&');

			var medpack = tempPSQs[0].split('=');

			var unborb = tempPSQs[1].split('=');

			//console.log(medpack[1]);

			if (medpack[1] <= '6' || medpack[1] == '8') {
				if ($("#news").length != 0 || $("#refIntroSearch").length != 0) {
					$('#bodypadding .mobile_adlabelleft:eq(0)').empty();
					$('#footercontents .mobile_adlabelleft:eq(0)').empty();

					$('#bodypadding .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
					$('#footercontents .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
				} else if ($("#cardiology").length != 0) {
					$('#bodypadding .mobile_adlabelleft:eq(0)').empty();
					$('#footercontents .mobile_adlabelleft:eq(0)').empty();

					$('#bodypadding .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
					$('#footercontents .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
				} else if ($("link[rel='canonical']").attr('href').indexOf('viewarticle') != -1) {
					$('#medscapeheadercontainer .mobile_adlabelleft:eq(0)').empty();
					$('#footercontents .mobile_adlabelleft:eq(0)').empty();

					$('#medscapeheadercontainer .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
					$('#footercontents .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
				} else if ($("link[rel='canonical']").attr('href').indexOf('/article/') != -1) {
					$('#medscapeheadercontainer .mobile_adlabelleft:eq(0)').empty();
					$('#footercontents .mobile_adlabelleft:eq(0)').empty();

					$('#medscapeheadercontainer .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
					$('#footercontents .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
				} else if ($("link[rel='canonical']").attr('href').indexOf('/drug/') != -1) {
					$('#medscapeheadercontainer .mobile_adlabelleft:eq(0)').empty();
					$('#footercontents .mobile_adlabelleft:eq(0)').empty();

					$('#medscapeheadercontainer .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
					$('#footercontents .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
				}

			} else if (medpack[1] == '7') {
				if ($("link[rel='canonical']").attr('href').indexOf('/viewcollection/') != -1) {
					$('#medscapeheadercontainer .mobile_adlabelleft:eq(0)').empty();

					$('#medscapeheadercontainer .mobile_adlabelleft:eq(0)').html('<a href="#"><img src="http://prepub.medscape.com/demo/decks/ad_inventory/gliastra_ad_inventory_01_' + unborb[1] + '_300x50.png" alt="" border="0" /></a>');
				}
			}

		}
	}

}
});