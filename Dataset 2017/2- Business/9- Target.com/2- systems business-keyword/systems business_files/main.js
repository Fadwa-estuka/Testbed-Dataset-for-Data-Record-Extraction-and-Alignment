// Bundled with Fusion v0.1



/*
 * File: host_map.js
 */

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *  WARNING: Moovweb auto-generated file. Any changes you make here will *
 *  be overwritten.                                                      *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

(function(){

if (typeof(mw) == "undefined") {
	window.mw = {};
}
var mapProxyToOriginPrime = {"http://intl.target.com":"http://www.target.com","http://intl.www-secure.target.com":"http://www-secure.target.com","https://intl.target.com":"https://www.target.com","https://intl.www-secure.target.com":"https://www-secure.target.com"},
    mapOriginToProxyPrime = {"http://target.com":"http://intl.target.com","http://www-secure.target.com":"http://intl.www-secure.target.com","http://www.target.com":"http://intl.target.com","https://target.com":"https://intl.target.com","https://www-secure.target.com":"https://intl.www-secure.target.com","https://www.target.com":"https://intl.target.com"};

if (typeof(mw.mapProxyToOrigin) !== "undefined") {
  for (key in mapProxyToOriginPrime) {

    if (mapProxyToOriginPrime.hasOwnProperty(key)) {
        mw.mapProxyToOrigin[key] = mapProxyToOriginPrime[key];
    }
  }
} else {
  mw.mapProxyToOrigin = mapProxyToOriginPrime;
}

if (typeof(mw.mapOriginToProxy) !== "undefined") {
  for (key in mapOriginToProxyPrime) {
    if (mapOriginToProxyPrime.hasOwnProperty(key)) {
        mw.mapOriginToProxy[key] = mapOriginToProxyPrime[key];
    }
  }
} else {
  mw.mapOriginToProxy = mapOriginToProxyPrime;
}



if(typeof(mw.catch_all_domain) == "undefined") {
	mw.catch_all_domain = ".moovapp.com";
} else {
  if (mw.catch_all_domain[0] != ".") {
  	console.log("Bad catch all domain");
  }
}


function detect_catch_all(url) {
	var found_index = url.host.indexOf(mw.catch_all_domain);
	var length = url.host.length;

	if (found_index != -1 && (found_index + mw.catch_all_domain.length) == length) {
		return true;
	}
	return false;
}

function strip_catch_all(url) {
	var found_index = url.host.indexOf(mw.catch_all_domain);
	var length = url.host.length;

	url.host = url.host.slice(0, found_index);
	return url;
}

function add_catch_all(url) {
	url.host = url.host + mw.catch_all_domain;
	return url;
}

function getParsedURL(url) {
	var elem = document.createElement("a")
	elem.href = url;
	return elem;
}

function getSchemeAndHostname(url) {
	var result = {};
	result.scheme = url.protocol;
	result.host = url.host;
	return result;
}

function getKey(url) {
	var components = getSchemeAndHostname(url);
	return components.scheme + "//" + components.host;
}

function fetch(url, map) {
	var key = getKey(url);
	var result = map[key];

	if (result === undefined) {
		if (typeof(mw) != 'undefined' && mw.debug == true) {
			console.log("Warning. No rule to modify host (" + key + ").")
		}
		return url.href;
	}

	return result + url.pathname + url.search + url.hash;
}

function detect(rawURL) {
  var properties = {
    "secure": false,
    "schema_relative": false,
    "relative": false
  };
  properties.raw = rawURL;

  if (rawURL.indexOf("https://") != -1) {
    properties.secure = true;
  } else if(rawURL.indexOf("http://") == -1) {
    if (rawURL.indexOf("//") == 0) {
      properties.schema_relative = true;
    } else {
      properties.relative = true;
    }
  }

  return properties;
}

function denormalize(url, properties) {
  url = getParsedURL(url);
  if (properties.relative) {
    return url.pathname + url.search + url.hash;
  } else {
    if (properties.secure) {
      return url.href.replace("http://","https://");
    }
    if (properties.schema_relative) {
      return url.href.replace(/^https*:/, "");
    }

  }
  return url.href;
}

mw.proxyURLToOrigin = function(rawURL){

	var properties = detect(rawURL);

	// Make sure it includes the host, or it will still be proxied!
	properties.relative = false;

	var url = getParsedURL(rawURL);
	var catch_all = detect_catch_all(url);

  if (catch_all) {
	  url = strip_catch_all(url);
  }

	url = fetch(url, this.mapProxyToOrigin);
	url = denormalize(url, properties);

	return url;
}

mw.originURLToProxy = function(rawURL){

	var properties = detect(rawURL);
	var url = getParsedURL(rawURL);
	var catch_all = detect_catch_all(url);

  if (catch_all) {
	  url = strip_catch_all(url);
  }

  url = getParsedURL(fetch(url, this.mapOriginToProxy));
  var globalLocation = getParsedURL(window.location.href);
  var urlShouldBeProxied = typeof(this.mapOriginToProxy[getKey(url)]) !== undefined;

  if (detect_catch_all(globalLocation) && urlShouldBeProxied) {
      url = add_catch_all(url);
  }

	url = denormalize(url.href, properties);

	return url;
}

}());



/*
 * File: main/logic.js
 */
var __bfx = __bfx || {};
 var domReady = function(callback) {
    document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

function listen(eventName, eventHandler) {
   if (window.addEventListener) {
      window.addEventListener(eventName, eventHandler, false);
   } else if (window.attachEvent) { //IE 8 and older
      if (eventName.indexOf('bfx') > -1) { //custom bfx events
         window.attachEvent("onpropertychange", function (event) {
            if (event.propertyName == eventName) {
               eventHandler(eventHandler);
            }
         });
      } else { //standard js events
         window.attachEvent(eventName, eventHandler);
      }
   }
}

// Hide checkout button when envoy loads
listen('bfx-envoySessionId-cookieSet', function() {
  jQuery(".bfxcontainer").css("visibility", "hidden");
});

listen('bfx-contextChooser-loadEnd', function() {
  // Adding the disclaimer message to the CC when the CC is not expanded.
  jQuery('#bfx-cc-wrapper').append("<div id='disclaimer'>International Orders are not eligible for, free shipping (including for REDcard holders), free returns, gifts/gift cards with purchase, gift wrap services, Cartwheel offers, subscriptions, registries, coupons, store pickup, warranties, extended service plans. Other promotional restrictions may apply. International Shipping - Target partners with Borderfree inc. <a href='https://www.borderfree.com' style='text-decoration:underline' target= '_blank'>('Borderfree')</a> to fill international shopping orders. By ordering from this site (intl.target.com) your personal information will be subject to <a href='https://www.borderfree.com/#/privacy/en_us' target= '_blank' style='text-decoration:underline'> Borderfree's Privacy policy </a> and orders are subject to <a href='https://www.borderfree.com/#/terms/en_us' target= '_blank' style='text-decoration:underline'> Borderfree's Terms & Conditions.</a></div>");
});

function setIntlCookie() {
  document.cookie = "intlship=false;domain=.target.com;path=/";
}


listen('bfx-contextChooser-loadEnd', function() {
  (function(jQuery) {
    // Add listener to set intl cookie when 'US' is selected
    $('#bfx-cc-btn').on('click', function(event) {
      var countryCode = $('#bfx-cc-countries-select option:selected').attr('value');
      if(countryCode==='US') {
        setIntlCookie();
        window.location = "http://www.target.com";
      }
    });
  })(jQuery);
});



/*
 * File: main/mutations.js
 */
function listen(eventName, eventHandler) {
   if (window.addEventListener) {
      window.addEventListener(eventName, eventHandler, false);
   } else if (window.attachEvent) { //IE 8 and older
      if (eventName.indexOf('bfx') > -1) { //custom bfx events
         window.attachEvent("onpropertychange", function (event) {
            if (event.propertyName == eventName) {
               eventHandler(eventHandler);
            }
         });
      } else { //standard js events
         window.attachEvent(eventName, eventHandler);
      }
   }
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') {
        c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
        return c.substring(name.length,c.length);
    }
  }
  return "";
}

// Construct promo div
function displayPromo() {

 try {
      var countryCode = getCookie("bfx.country");
      // Switch promo banner to int'l content if it wasn't already done
      if(countryCode!= null && jQuery("div.header--topPromo").length > 0 && jQuery("div.header--topPromo[data-banner]").length == 0) {

        jQuery('div.header--topPromo').attr("data-banner", "true");
        if(countryCode==='SA') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take SAR 75 off your order of SAR 375* or more &#x25AB; use code SASHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/01-25-Target-banner_SAR.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
        else if(countryCode==='CN') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take CNY 130 off your order of CNY 650* or more &#x25AB; use code CNSHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/02-18-Target-banner_CN.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
        else if(countryCode==='GB') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take GBP 15 off your order of GBP 70* or more &#x25AB; use code UKSHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/01-25-Target-banner_UK.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
        else if(countryCode==='AE') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take AED 75 off your order of AED 375* or more &#x25AB; use code UAESHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/01-25-Target-banner_UAE2.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
        else if(countryCode==='SG') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take SGD 30 off your order of SGD 150* or more &#x25AB; use code SGSHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/01-25-Target-banner_SGP.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
        else if(countryCode==='HK') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take HKD 150 off your order of HKD 800* or more &#x25AB; use code HKSHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/01-25-Target-banner_HK2.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
        else if(countryCode==='MX') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take MXN 370 off your order of MXN 1850* or more &#x25AB; use code MEXICOSHIP</a>');
          jQuery('div.header--topPromo').css("display", "flex");
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/01-25-Target-banner_MEX.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
        else if(countryCode==='JP') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take JPY 2400 off your order of JPY 12000* or more &#x25AB; use code JAPANSHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/01-25-Target-banner_JPN.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
        else if(countryCode==='IL') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take ILS 80 off your order of ILS 400* or more &#x25AB; use code ISRAELSHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/01-25-Target-banner_ISR.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
        else if(countryCode==='CA') {
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take CAD 20 off your order of CAD 100* or more &#x25AB; use code CANADASHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/01-25-Target-banner_CA.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        } else if(countryCode!=='US' && countryCode!==''){//ROW Promo
          jQuery('div.header--topPromo a').replaceWith('<a href="" data-banner="true" data-target="#globalMessageModal" data-behavior="modal" class="link link-white">Take $20 off your order of $100* or more &#x25AB; use code INTLSHIP</a>');
          jQuery("#globalMessageModal div.modal-body").html("<img src='/images/100516-Target-banner-ROW.png'>");
          jQuery("#globalMessageModal div.modal-header").html("");
        }
      }
    } catch(err){console.log(err);}
}

listen('bfx-contextChooser-loadEnd', function() {
  displayPromo();
});

document.addEventListener("DOMContentLoaded", function (event) {

  var observeDOM = (function () {
      var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
          eventListenerSupported = window.addEventListener;

      return function (obj, callback) {
          if (MutationObserver) {
            // define a new observer
            var obs = new MutationObserver(function (mutations, observer) {
                if (mutations[0].addedNodes.length)
                    callback();
            });
            // have the observer observe foo for changes in children
              obs.observe(obj, { childList: true, subtree: true });
          }
          else if (eventListenerSupported) {
            obj.addEventListener('DOMNodeInserted', callback, false);
          }
      }
  })();

  if( window.location.pathname.indexOf("co-cart") > -1) {
  // Cart page muatations
    observeDOM(document.getElementById('viewport'), function () {
      if(window.jQuery) {
        // Hide delivery label
        var deliveryLabel = jQuery("span:contains('delivery'):parent");
        deliveryLabel.css("display", "none");

        // Show checkout button if cart is not empty
        if(jQuery("#cart-page div.empty-cart").length > 0) {
         jQuery("div.bfxcontainer").remove();
        } else {
          if(jQuery("div.bfxcontainer").length === 0) {
            jQuery("#header").after("<div class='bfxcontainer' onclick='' ><button class='btn btn-primary btn-block btn-lg bfxcheckout'>i'm ready to check out</button><div>");
            jQuery("#main_body").after("<div style='margin-bottom: 20px' class='bfxcontainer' onclick=''><button class='bfxcheckout btn btn-primary btn-block btn-lg' >i'm ready to check out</button><div>");
          }
        }

        if(jQuery("#header").length > 0) {
          // If Envoy is loaded, hide checkout button
          if(jQuery("#envoyId").length > 0) {
             jQuery("div.bfxcontainer").css("display", "none");
          } else {
            // Otherwise unhide button
            if(jQuery("div.bfxcontainer").length > 0) {
              jQuery("div.bfxcontainer").css("display", "block");
            }
          }
        }
      }
    });

  // All pages except cart
  } else {
    observeDOM(document.getElementById('viewport'), function () {
      if(window.location.pathname === "/" && window.jQuery && jQuery("#main_body[data-page='home page']").length > 0) {
        // Replace homepage images
        try {

          if(jQuery("#main_body > h1:contains('homepage')")) {  // Check for homepage

            // HP Hero Content Change
            // Examples:
            // var HPdiv = jQuery("h1.h-sr-only:contains('homepage') + #main > .theme-storybox-3pack > div.storybox--big");
            // if(!HPdiv.find("a.storycard--link").attr("href").match(/N-jeeuu/)) {
            //   HPdiv.find("a.storycard--link").attr("href", "/c/home-deals/-/N-jeeuu"); // Change link
            //   HPdiv.find("div.storycard--text").remove();  // Remove text
            //   HPdiv.attr("data-component", "").attr("data-container", ""); // Remove overlay content
            //   // HPdiv.find("div.drawer").remove();   // Remove overlay content
            //   HPdiv.find("div.storycard--button").remove(); // Overlay Button may need to be removed
            //   HPdiv.find("a.storycard--link picture source").attr("data-srcset", "/images/Dec-Week4-Home.png"); // Change img
            //   HPdiv.find("div.storycard--image picture source").attr("srcset", "/images/Dec-Week4-Home.png"); // Change img
            //   HPdiv.find("div.storycard--image picture img").attr("src", "/images/Dec-Week4-Home.png"); // Change img
            // }

            var bottomSmallSection = jQuery('#main > section:nth-child(3) > div.storybox--big').eq(0); //shoes img
            if(!bottomSmallSection.find("a.storycard--link").attr("href").match(/N-5xtscZ5tdv0Z55e6tZ55e6u/)) {
              bottomSmallSection.find("a.storycard--link").attr("href", "/c/threshold-living-room-furniture/-/N-55jw4?lnk=frontrowseat"); // Change link
              bottomSmallSection.find("div.storycard--text").remove();  // Remove text
              bottomSmallSection.attr("data-component", "").attr("data-container", ""); // Remove overlay content
              bottomSmallSection.find("div.drawer").remove();   // Remove overlay content
              bottomSmallSection.find("div.storycard--button").remove(); // Overlay Button may need to be removed
              bottomSmallSection.find("a.storycard--link picture source").attr("data-srcset", "/images/Dec-Week5-ThresholdFurniture.png"); // Change img
              bottomSmallSection.find("div.storycard--image picture source").attr("srcset", "/images/Dec-Week5-ThresholdFurniture.png"); // Change img
              bottomSmallSection.find("div.storycard--image picture img").attr("src", "/images/Dec-Week5-ThresholdFurniture.png"); // Change img
            }


            //
            // jQuery("#main #COMPONENT-72960 > section > div:nth-child(1)").css("display", "none");
            //
            // var comp3 = jQuery("#main #COMPONENT-72960 > section > div:nth-child(2)");
            // if(!comp3.find("div.storycard--image > picture > source").attr("srcset").match(/Week3/)) {
            //   //comp3.find("a.storycard--link").attr("href", "/p/garth-brooks-the-ultimate-collection-box-set-and-trisha-yearwood-christmas-together-album-bundle/-/A-51909960"); // Change link
            //   comp3.find("div.storycard--image picture source").attr("srcset", "/images/Nov-Week3-Garth-desktop.jpg"); // Change img
            //   comp3.find("div.storycard--image picture source[media='(min-width: 0px)']").attr("srcset", "/images/Nov-Week3-Garth-mobile.jpg"); // Change img
            //   comp3.find("div.storycard--image picture img").attr("src", "/images/Nov-Week3-Garth-mobile.jpg"); // Change img
            //   comp3.removeClass("l-col-md-6");
            //   comp3.removeClass("mediaBlock-2x1-md");
            //   comp3.removeClass("mediaBlock-2x1");
            //
            //   comp3.addClass("l-col-md-12");
            //   comp3.addClass("mediaBlock-4x1-xs");
            //   comp3.addClass("mediaBlock-4x1-md");
            // }

            // Strech big image and hide the 2 smaller images
            // Secondary Box
            //jQuery("#main_body > #main > section.storybox.theme-storybox-3pack:first > div.storybox--big div.storycard--text").remove();
            // jQuery("#main_body > #main > section.storybox.theme-storybox-3pack:first > div.storybox--small").css("display", "none");
            // jQuery("#main_body > #main > section.storybox.theme-storybox-3pack:first > div.storybox--big").removeClass();
            // jQuery("#main_body > #main > section.storybox.theme-storybox-3pack:first > div.storybox--big").addClass("l-col-nopadding");

            // Secondary Banner
            // jQuery("a.storycard-secondary-left").attr("href", "/c/tvs-home-theater-electronics/-/N-5xtdj?type=products");
            // jQuery("a.storycard-secondary-left div.storycard--text").remove();
            // jQuery("a.storycard-secondary-left picture source").attr("srcset", "/images/092016_Sept-Wk4-Football-Banner.jpg");

            // Modify banner text
            //jQuery("#main #COMPONENT-73431 div.mediaBlock--body span:not(:contains('up to'))").text(function() { return jQuery(this).text().replace('20%', 'up to 20%') });
            // End Examples

          }
        } catch(err){}

        // Add promotional banner on HP based on presence of bfx country cookie and index of country code in the country array.
        try {
          var countryCode = getCookie("bfx.country");
          var countryArray = ["CA","GB","CN","IL","HK","IN","JP","MX","SA","SG","AE"];

          var rowBanner = jQuery('div[id^="mobile-div-gpt-ad-home_primary"]');
          if( countryCode!= null && countryArray.indexOf(countryCode) != -1)  {
            rowBanner.replaceWith('<img id="bfx_shipbanner" src="images/ShippingBanner-'+ countryCode +'.jpg">');
          } else if(countryCode !== 'US') {  //ROW Banner
            rowBanner.replaceWith('<img id="bfx_shipbanner" src="images/ShippingBanner-ROW.png">');
          }
        } catch(err){}

        // Replace Cents with $ on homepage
        if(jQuery.cookie("bfx.country") && jQuery.cookie("bfx.country") !== 'US') {
         try {
            // Hide prices that contain $ in homepage storycards
            jQuery("div.storycard--text span:contains('$')").css("visibility", "hidden");
            jQuery("div.storycard--text span:contains('¢')").css("visibility", "hidden");

            // Convert cents to dollar format
            jQuery("div.storycard--text span:contains('¢')").each(function(index, item){
                jQuery(item).text( jQuery(this).text().replace(/(\d+)¢/, "\$0.$1"));
            });
         } catch(err){}
        }
      }

    });
  }

  // Leak on PLP
  observeDOM(document.getElementById('viewport'), function () {
    $('#js-browseByCategory a[href*="www.target.com"]').attr('href', function() {  return $(this).attr('href').replace('www.target.com', document.domain); });
  });


  // Mutations for all pages including cart
  observeDOM(document.getElementById('viewport'), function () {

    // Custom banner on upper right - Leave as example
    // if(jQuery('nav.header--topNav a[href*="cutoff"]').length === 0) {
    //   jQuery('nav.header--topNav').html("<a class='link link-white  js-promotionLink' style='visibility: visible;overflow:hidden;' href='http://s3.amazonaws.com/img.borderfree.com/pub/shipping-cutoffs/target/2016_us_holiday_shipping_cutoff_dates.pdf' target='_blank'>holiday&nbsp;shipping&nbsp;cuttoff&nbsp;dates</a>");
    //  }

    // Redirect to HP for VB pages
    if(window.location.pathname.match(/\victoriabeckham|N-4rgjd|victoria-beckham|victoria_beckham/)){
     window.location = "//"+document.domain + "/";
    }
    
    // Black bar promo text
    displayPromo();

    // Fix size chart link
    var sizeChart = jQuery("#js-sizechart--open");
    if(sizeChart.length > 0) {
      sizeChart.attr("id", "bfx-size-chart");
      jQuery("#bfx-size-chart").attr("href", "//"+document.domain + "/target_sizing-guide.html").attr("target", "_blank");
    }

    // Prevent store only products from add to cart
    var btnInStore = jQuery("button[data-store='true']");
    if(btnInStore.length > 0) {
      btnInStore.text("only in stores");
      btnInStore.prop("disabled", true);
    }

    // Fix links in new nav elementFromPoint
    $("#nav").find('a[href*="www.target.com"]').each(function(){
      $(this).attr('href',$(this).attr('href').replace('www.target.com',document.domain));
    });

    // Fix footer links
    if(window.jQuery && jQuery("#footer").length > 0) {

      try {
        if(jQuery("#footer a:contains('shipping')[onclick]").length === 0) {
          var shippingLink = jQuery("#footer a:contains('shipping')");
          shippingLink.attr("onclick", "window.open('http://shop.borderfree.com/help', '_blank');");
          shippingLink.attr("data-value", "");
        }
      } catch(err){}

      try {
        if(jQuery("#footer a:contains('returns')[onclick]").length === 0) {
          var returnsLink = jQuery("#footer a:contains('returns')");
          returnsLink.attr("onclick", "window.open('http://shop.borderfree.com/help', '_blank');");
          returnsLink.attr("data-value", "");
        }
      } catch(err){}

      try {
        if(jQuery("#footer a:contains('track orders')[onclick]").length === 0) {
          var trackLink = jQuery("#footer a:contains('track orders')");
          trackLink.attr("onclick", "window.open('http://shop.borderfree.com/tracking', '_blank');");
          trackLink.attr("data-value", "");
        }
      } catch(err){}

      try {
        if(jQuery("#footer a:contains('size charts')[onclick]").length === 0) {
          var sizeLink = jQuery("#footer a:contains('size charts')");
          sizeLink.attr("onclick", "window.open('//'+document.domain + '/target_sizing-guide.html', '_blank');");
          sizeLink.attr("data-value", "");
        }
      } catch(err){}

      try {
        if(jQuery("#footer a[href*='terms-conditions'][data-ref!='']").length) {
          var termsLink = jQuery("#footer a[href*='terms-conditions']");
          termsLink.parent().attr("data-ref", "");
          termsLink.attr("href", "https://www.borderfree.com/#/terms/en_us").attr('target','_blank');
        }
      } catch(err){}

      try {
        if(jQuery("#footer a[href*='target-privacy-policy'][data-ref!='']").length) {
          var privacyLink = jQuery("#footer a[href*='target-privacy-policy']");
          privacyLink.parent().attr("data-ref", "");
          privacyLink.attr("href", "https://www.borderfree.com/#/privacy/en_us").attr('target','_blank');
        }
      } catch(err){}
    }
  });
});



/*
 * File: main/stub.js
 */
// setTimeout("runit()", 4500);

// function runit() {
  (function(e,n,o,t,a){function c(n){e[t]._apiKey=n.key;e[t]._env=n.env;e[t]._logLevel=n.logLevel;
  e[t]._mode=n.mode;e[t]._cookieFlag=n.cookieFlag}e[t]=c;e[t].l=1*new Date;var i,l;
  i=n.createElement(o);l=n.getElementsByTagName(o)[0];i.async=1;i.src=a;l.parentNode.insertBefore(i,l);
  })(window,document,"script","bfx",
  "https://bfx-objects.borderfree.com/v1/dist/bfx.js");
  bfx({key:'df662130-5b03-11e5-83ec-950b72561902', env:'PROD', mode:'tablet'});
// }
