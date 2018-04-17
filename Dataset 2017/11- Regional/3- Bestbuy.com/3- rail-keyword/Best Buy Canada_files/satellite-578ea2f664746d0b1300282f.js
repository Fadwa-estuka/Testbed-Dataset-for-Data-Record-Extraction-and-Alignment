var dtm = {
  sanitizeProdValue: function (prodValue) {
    return prodValue.replace(/,/g, '，').replace(/;/g, '；');
	},
  sanitizeProds: function() {
    var prodName = _satellite.getVar("prodName")||"";
    for (i = 0; i < prodName.length; i++) {
      data_layer.prodName[i] = this.sanitizeProdValue(data_layer.prodName[i]);
    }

    var bundleName = _satellite.getVar("bundleName")||"";
    for (i = 0; i < bundleName.length; i++) {
      data_layer.bundleName[i] = this.sanitizeProdValue(data_layer.bundleName[i]);
    }
  },
  getParameter: function(parameter) {
    return decodeURIComponent((new RegExp('[?|&]' + parameter + '=' + '([^&;]+?)(&|#|;|$)').exec(location) || [, ""])[1].replace(/\+/g, '%20')) || null;
	},
  setCookie: function(cookie, value) {
    $.cookie(cookie, value, { path: '/', domain: env.cookieDomain });
  },
  deleteAllCookies: function() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        $.cookie(name, null, { path: '/', domain: env.cookieDomain });
    }
  },
  isValidElement: function(dataElement) {
    return typeof dataElement != "undefined" && dataElement != null && dataElement.length > 0;
	},
  getRMSDepartment: function(price) {
    var rmsDepartment = "";
    if(price.toString().indexOf(".97") > - 1) rmsDepartment = "clearance";
    if(price.toString().indexOf(".95") > - 1) rmsDepartment = "gwg";
    if(price.toString().indexOf(".98") > - 1) rmsDepartment = "market reaction/price match";
    if(price.toString().indexOf(".99") > - 1) rmsDepartment = "regular";
    return rmsDepartment;
	},
  getProdSavingPercentage: function(prodSaving, prodPrice) {
    return Math.round(parseFloat(prodSaving) / (parseFloat(prodPrice) + parseFloat(prodSaving)) * 100) + '%';
  },
	updateProds: function(sender, event, captureProdSavings, captureProdDiscount, captureProdTotalSavings) {
    this.sanitizeProds();
    var prodID = _satellite.getVar("prodID")||"";
    var section = _satellite.getVar("section")||"";
    var start = 0;
    var end = prodID.length;
    var selectedProdID = data_layer['selectedProdID'];
    if (this.isValidElement(selectedProdID)) {
      selectedProdID = selectedProdID.toUpperCase();
      var selectedProdIndex = data_layer['prodID'].indexOf(selectedProdID);

      if (selectedProdIndex >= 0) {
        start = selectedProdIndex;
        end = selectedProdIndex + 1;
      } else {
        selectedProdIndex = data_layer['productBundle'].indexOf(selectedProdID);
        if (selectedProdIndex >= 0) {
          end = data_layer['productBundle'].lastIndexOf(selectedProdID);
          start = selectedProdIndex;
          end = end + 1;
        }
      }
    }

    var captureSingleProductAttribute = (sender == 'PDP' || (event == 'dthAddToCart' && sender != 'Compare AddToCartButton') || event == 'mcfAddToCart' || sender == 'ProdReview' || sender == 'ProdReviewAndRate');

    var products = [];
    for (i = start; i < end; i++) {
      var product = [];
      var evars = [];
      var events = [];

      product.push("");
      if(this.isValidElement(data_layer.prodID[i])){product.push(data_layer.prodID[i]);}
      if(this.isValidElement(data_layer.prodQty[i])){product.push(data_layer.prodQty[i]);}
      if(this.isValidElement(data_layer.prodPrice[i])){product.push(data_layer.prodPrice[i]);}

      if(this.isValidElement(data_layer.productBundle[i])){evars.push("eVar10="+data_layer.productBundle[i]);}
      if(this.isValidElement(data_layer.bundleName[i])){evars.push("eVar11="+data_layer.bundleName[i]);}
      if(this.isValidElement(data_layer.warrantySku)){evars.push("eVar12="+data_layer.warrantySku);}
      if(this.isValidElement(data_layer.productType[i])){evars.push("eVar15="+data_layer.productType[i]);}
      if(this.isValidElement(_satellite.getVar('prodRating'))){evars.push("eVar17="+_satellite.getVar('prodRating'));}
      if(this.isValidElement(data_layer.fulfillmentType[i])){evars.push("eVar18="+data_layer.fulfillmentType[i]);}
      if(this.isValidElement(data_layer.deliveryOptionClicked)){evars.push("eVar19="+data_layer.deliveryOptionClicked);}
      if(this.isValidElement(data_layer.daysToDeliver[i])){evars.push("eVar20="+data_layer.daysToDeliver[i]);}
      var rmsDepartment = this.getRMSDepartment(data_layer.prodPrice[i]);
      if(this.isValidElement(rmsDepartment)){evars.push("eVar21="+rmsDepartment);}
      if(captureSingleProductAttribute && this.isValidElement(_satellite.getVar("brand"))){evars.push("eVar26="+_satellite.getVar("brand"));}
      if(captureProdSavings && this.isValidElement(data_layer.prodSavings[i]) && this.isValidElement(data_layer.prodPrice[i])){evars.push("eVar31="+this.getProdSavingPercentage(data_layer.prodSavings[i], data_layer.prodPrice[i]));}
      if(captureProdSavings && this.isValidElement(data_layer.bundleSavings[i]) && this.isValidElement(data_layer.bundlePrice[i])){evars.push("eVar36="+this.getProdSavingPercentage(data_layer.bundleSavings[i], data_layer.bundlePrice[i]));}
      if(captureSingleProductAttribute && this.isValidElement(data_layer.sellerID)){evars.push("eVar45="+data_layer.sellerID);}
      if(captureSingleProductAttribute && this.isValidElement(data_layer.sellerName)){evars.push("eVar47="+data_layer.sellerName);}
      if(this.isValidElement(data_layer.prodName[i]) && this.isValidElement(data_layer.prodID[i])){evars.push("eVar51="+data_layer.prodName[i]+" : "+data_layer.prodID[i]);}
      if(this.isValidElement(data_layer.prodName[i])){evars.push("eVar52="+data_layer.prodName[i]);}
      if(captureProdTotalSavings && this.isValidElement(data_layer.prodTotalSavings[i])){evars.push("eVar57="+this.getProdSavingPercentage(data_layer.prodTotalSavings[i], data_layer.prodPrice[i]));}
      if(this.isValidElement(_satellite.getVar("numProdReviews"))){evars.push("eVar58="+_satellite.getVar("numProdReviews"));}
      if(this.isValidElement(_satellite.getVar("addToCartLocation"))){evars.push("eVar59="+_satellite.getVar("addToCartLocation"));}
      if(this.isValidElement(_satellite.getVar("dthAvailability"))){evars.push("eVar62="+_satellite.getVar("dthAvailability"));}
      if(this.isValidElement(_satellite.getVar("rpuAvailability"))){evars.push("eVar63="+_satellite.getVar("rpuAvailability"));}
      if(this.isValidElement(_satellite.getVar("findingMethod"))){evars.push("eVar64="+_satellite.getVar("findingMethod"));}

      if (section == "MCF") {
        if(this.isValidElement(_satellite.getVar("mcfPostalCode"))){evars.push("eVar72="+_satellite.getVar("mcfPostalCode"));}
      } else {
        if (data_layer["addToCartLocation"] == 'pdp') {
          if(this.isValidElement(_satellite.getVar("dthPostalCode"))){evars.push("eVar69="+_satellite.getVar("dthPostalCode"));}
        } else if (data_layer["addToCartLocation"] == 'rpu') {
          if(this.isValidElement(_satellite.getVar("rpuPostalCode"))){evars.push("eVar70="+_satellite.getVar("rpuPostalCode"));}
        }
      }

      if(this.isValidElement(data_layer.skuType[i])){evars.push("eVar78="+data_layer.skuType[i]);}
      if(captureSingleProductAttribute && this.isValidElement(_satellite.getVar("vendorType"))){evars.push("eVar80="+_satellite.getVar("vendorType"));}

      if (this.isValidElement(data_layer.productType[i])) {
          if (data_layer.productType[i] == 'single') {
            if (sender == 'PDP' || event == 'dthAddToCart' || event == 'mcfAddToCart' || sender == 'ProdReview' || sender == 'ProdCompare' || sender == 'ProdReviewAndRate') {
              if(this.isValidElement(data_layer.prodQty[i]) && this.isValidElement(data_layer.prodPrice[i])){evars.push("eVar96="+data_layer.prodPrice[i]);}
            }
            if(captureProdSavings && this.isValidElement(data_layer.prodSavings[i])){events.push("event1="+data_layer.prodSavings[i]);}
          } else if (data_layer.productType[i] == 'bundle') {
            if(captureProdSavings && this.isValidElement(data_layer.prodSavings[i])){events.push("event28="+data_layer.prodSavings[i]);}
          }
      }

      if(captureProdDiscount && this.isValidElement(data_layer.prodDiscount[i])){events.push("event16="+data_layer.prodDiscount[i]);}
      if(captureProdTotalSavings && this.isValidElement(data_layer.prodTotalSavings[i])){events.push("event39="+data_layer.prodTotalSavings[i]);}

      if (sender == 'PDP AvailabilityResponseData SoldOut') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event40="+data_layer.prodPrice[i]);}
      } else if (sender == 'PDP AvailabilityResponseData DTHSoldOut') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event84="+data_layer.prodPrice[i]);}
      } else if (sender == 'PDP AvailabilityResponseData RPUSoldOut') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event86="+data_layer.prodPrice[i]);}
      } else if (sender == 'Compare AddToCartButton') {
        // broken
      } else if (event == 'dthAddToCart') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event4="+data_layer.prodPrice[i]);events.push("event14="+data_layer.prodPrice[i]);}
      } else if (event == 'mcfAddToCart') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event4="+data_layer.prodPrice[i]);events.push("event37="+data_layer.prodPrice[i]);}
      } else if (sender == 'PDP ReserveInStoreButton') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event4="+data_layer.prodPrice[i]);events.push("event26="+data_layer.prodPrice[i]);}
      } else if (sender == 'Checkout') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event5="+data_layer.prodPrice[i]);events.push("event15="+data_layer.prodPrice[i]);}
      } else if (sender == 'Checkout MCF') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event5="+data_layer.prodPrice[i]);events.push("event38="+data_layer.prodPrice[i]);}
      } else if (event == 'rpuCheckout') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event5="+data_layer.prodPrice[i]);events.push("event27="+data_layer.prodPrice[i]);}
      } else if (sender == 'CheckoutThankYou DTH') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event11="+data_layer.prodPrice[i]);}
        if(this.isValidElement(data_layer.prodQty[i])){events.push("event13="+data_layer.prodQty[i]);}

        if (this.isValidElement(data_layer.productType[i]) && data_layer.productType[i] == 'bundle') {
          if(this.isValidElement(data_layer.bundlePrice[i])){

              if (data_layer.bundlePrice[i].length != 0) {
              	events.push("event80="+data_layer.prodPrice[i]);
              }

          }
          if(this.isValidElement(data_layer.bundleQty[i])){events.push("event81="+data_layer.bundleQty[i]);}
        }
      } else if (sender == 'CheckoutThankYou MCF') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event34="+data_layer.prodPrice[i]);}
        if(this.isValidElement(data_layer.prodQty[i])){events.push("event36="+data_layer.prodQty[i]);}

        if (this.isValidElement(data_layer.productType[i]) && data_layer.productType[i] == 'bundle') {
          if(this.isValidElement(data_layer.bundlePrice[i])){events.push("event80="+data_layer.bundlePrice[i]);}
          if(this.isValidElement(data_layer.bundleQty[i])){events.push("event81="+data_layer.bundleQty[i]);}
        }
      } else if (event == 'rpuPurchase') {
        if(this.isValidElement(data_layer.prodPrice[i])){events.push("event23="+data_layer.prodPrice[i]);}
        if(this.isValidElement(data_layer.prodQty[i])){events.push("event25="+data_layer.prodQty[i]);}

        if (this.isValidElement(data_layer.productType[i]) && data_layer.productType[i] == 'bundle') {
          if(this.isValidElement(data_layer.bundlePrice[i])){events.push("event80="+data_layer.bundlePrice[i]);}
          if(this.isValidElement(data_layer.bundleQty[i])){events.push("event81="+data_layer.bundleQty[i]);}
        }
      }

      //push events and evars to product
      product.push(events.join('|'));
      product.push(evars.join('|'));
      //push each product to product string
      products.push(product.join(';'));
    }
    // send call with needed data
    s.products = products.join(',');

    if (sender == 'CheckoutThankYou DTH' || sender == 'CheckoutThankYou MCF' || event == 'rpuPurchase') {
      var paymentType = _satellite.getVar("paymentType")||"";
      var purchaseID = _satellite.getVar("purchaseID")||"";
      s.purchaseID = purchaseID;
      s.list2 = paymentType;
    }
  },
  addRecommendedProd: function(sender) {
    var prodID = _satellite.getVar("recommendProdID")||"N/A";
    var prodPrice = _satellite.getVar("recommendProdPrice")||"N/A";
    var prodName = _satellite.getVar("recommendProdName")||sender;
    var recAddLoc = _satellite.getVar("recommendAddLocation")||sender;
    var product = ";" + prodID + ";;;";

    if (sender == 'RPU RecommendedAccessoriesButton Desktop') {
      product += "event4=" + prodPrice + "|event26=" + prodPrice;
    } else {
      product += "event4=" + prodPrice + "|event14=" + prodPrice;
    }
    product += ";eVar15=single|eVar50=" + prodID + "|eVar51=" + prodName+" : " + prodID + "|eVar52=" + prodName + "|eVar59=" + recAddLoc + "|eVar60=" + recAddLoc + "|eVar96=" + prodPrice;
    s.products = product;
  },
  addVendorPopupProd: function(sender) {
    var prodID = _satellite.getVar("recommendProdID")||"N/A";
    var prodPrice = _satellite.getVar("recommendProdPrice")||"N/A";
    var prodName = _satellite.getVar("recommendProdName")||sender;
    var addLoc = _satellite.getVar("addToCartLocation")||sender;
    var product = ";" + prodID + ";;;";
    product += "event4=" + prodPrice + "|event14=" + prodPrice;
    product += ";eVar15=single|eVar50=" + prodID + "|eVar51=" + prodName+" : " + prodID + "|eVar52=" + prodName + "|eVar59=" + addLoc + "|eVar96=" + prodPrice;
    s.products = product;
  },
  removeProd: function(sender) {
    var selectedProdID = data_layer['selectedProdID'];
    var products = [];
    if (this.isValidElement(selectedProdID)) {
      selectedProdID = selectedProdID.toUpperCase();
      var start = -1;
      var end;

      var selectedProdIndex = data_layer['prodID'].indexOf(selectedProdID);
      if (selectedProdIndex >= 0) {
        start = selectedProdIndex;
        end = selectedProdIndex + 1;
      } else {
        selectedProdIndex = data_layer['productBundle'].indexOf(selectedProdID);
        if (selectedProdIndex >= 0) {
          end = data_layer['productBundle'].lastIndexOf(selectedProdID);
          start = selectedProdIndex;
          end = end + 1;
        }
      }

      if (start >= 0) {
        for (i = start; i < end; i++) {
          var product = [];
          product.push("");
          product.push(data_layer.prodID[i]);
          product.push("");
          product.push("");
          products.push(product.join(';'));
        }
        data_layer['selectedProdID'] = null;
      }
      s.products = products.join(',');
    }
  }
};

function buildProdString(sender) {
  try {
    if (sender == 'PDP') {
      dtm.updateProds(sender, null, true);
    } else if (sender == 'CartDeliveryOptionsLink') {
      dtm.updateProds(sender);
    } else if (sender == 'Cart') {
      dtm.updateProds(sender, null, false, true);
    } else if (sender == 'Interstitial') {
      dtm.updateProds(sender, null, false, true);
    } else if (sender == 'Cart MCF') {
      dtm.updateProds(sender, null, false, true);
    } else if (sender == 'Cart NativeMobile') {
      dtm.updateProds(sender, null, false, true);
    } else if (sender == 'Cart Product Removed') {
      dtm.removeProd(sender);
    } else if (sender == 'Cart Product Removed MCF') {
      dtm.removeProd(sender);
    } else if (sender == 'Cart Product Removed RPU') {
      dtm.removeProd(sender);
    } else if (sender == 'Cart Product Qty Removed DTH') {
      dtm.removeProd(sender);
    } else if (sender == 'Cart Product Qty Removed MCF') {
      dtm.removeProd(sender);
    } else if (sender == 'Checkout') {
      dtm.updateProds(sender);
    } else if (sender == 'Checkout MCF') {
      dtm.updateProds(sender);
    } else if (sender == 'CheckoutThankYou DTH') {
      dtm.updateProds(sender, null, false, false, true);
    } else if (sender == 'CheckoutThankYou MCF') {
      dtm.updateProds(sender, null, false, false, true);
    } else if (sender == 'PDP WarrantyModal PageLoad') {
      data_layer['warrantySku'] = $('#warranty-modal .warranty-option-item.selected').data('sku');
      dtm.updateProds(sender);
    } else if (sender == 'ProdCompare') {
      dtm.updateProds(sender);
    } else if (sender == 'ProdReview') {
      dtm.updateProds(sender, null);
    } else if (sender == 'ProdReviewAndRate') {
      dtm.updateProds(sender, null);
    } else if (sender == 'RPU SelectStore') {
      dtm.updateProds(sender);
    } else if (sender == 'Cart MoveToPriceWatch') {
      dtm.updateProds(sender);
    } else if (sender == 'Cart MoveToPriceWatchLink') {
      dtm.updateProds(sender);
    } else if (sender == 'Cart PaypalCheckoutButton') {
      dtm.updateProds(sender);
    } else if (sender == 'Cart RecommendedAccessoriesButton') {
      dtm.addRecommendedProd(sender);
    } else if (sender == 'Cart ReserveInStoreButton') {
      dtm.updateProds(sender);
    } else if (sender == 'Cart DeliveryPlanOption') {
      dtm.updateProds(sender);
    } else if (sender == 'Checkout BillingButton') {
      dtm.updateProds(sender);
    } else if (sender == 'Checkout DeliveryPlanOption') {
      dtm.updateProds(sender);
    } else if (sender == 'Checkout OrderReviewButton') {
      dtm.updateProds(sender);
    } else if (sender == 'Compare AddToCartButton') {
      data_layer['addToCartLocation'] = 'product compare';
      dtm.updateProds(sender, 'dthAddToCart');
    } else if (sender == 'Global VCOCheckoutButton') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP AvailabilityResponseData') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP AvailabilityResponseData DTHSoldOut') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP AvailabilityResponseData DaysToDeliver') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP AvailabilityResponseData RPUSoldOut') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP AvailabilityResponseData SoldOut') {
      dtm.updateProds(sender);
    } else if (sender == 'VendorPopUp AddToCartButton') {
      data_layer["addToCartLocation"] = "PDP Vendor Popup";
      dtm.addVendorPopupProd();
    } else if (sender == 'Interstitial PaypalCheckoutButton') {
      dtm.updateProds(sender);
    } else if (sender == 'Interstitial RecommendedAccessoriesButton Desktop') {
      dtm.addRecommendedProd(sender);
    } else if (sender == 'Interstitial RecommendedAccessoriesButton Mobile') {
      dtm.addRecommendedProd(sender);
    } else if (sender == 'PDP AddToCartButton DeliveryOptionsStorefront') {
      data_layer["addToCartLocation"] = 'pdp delivery options';
      dtm.updateProds(sender, 'dthAddToCart');
    } else if (sender == 'PDP AddToCartButton MCF') {
      data_layer["addToCartLocation"] = 'pdp';
      dtm.updateProds(sender, 'mcfAddToCart');
    } else if (sender == 'PDP AddToCartButton Mobile') {
      data_layer["addToCartLocation"] = 'pdp';
      dtm.updateProds(sender, 'dthAddToCart');
    } else if (sender == 'PDP AddToCartButton PreOrder') {
      data_layer["addToCartLocation"] = 'pdp';
      dtm.updateProds(sender, 'dthAddToCart');
    } else if (sender == 'PDP AddToCartButton PreOrder Mobile') {
      data_layer["addToCartLocation"] = 'pdp';
      dtm.updateProds(sender, 'dthAddToCart');
    } else if (sender == 'PDP AddToCartButton Storefront') {
      data_layer["addToCartLocation"] = 'pdp';
      dtm.updateProds(sender, 'dthAddToCart');
    } else if (sender == 'PDP AddToPriceWatchLink') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP AddToWishListLink') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP DeliveryOptionsLink') {
      dtm.updateProds(sender);
    } else if (sender == 'RPU StoreSelectButton') {
      dtm.updateProds(sender);
    } else if (sender == 'RPU RecommendedAccessoriesButton Desktop') {
      dtm.addRecommendedProd(sender);
    } else if (sender == 'RPU ProductDetails PageLoad') {
      dtm.updateProds(sender, false, true);
    } else if (sender == 'RPU ContactInformation PageLoad') {
      dtm.updateProds(sender, 'rpuCheckout');
    } else if (sender == 'RPU ContactInformation PageLoad - Mobile') {
      dtm.updateProds(sender, 'rpuCheckout');
    } else if (sender == 'RPU OrderConfirmation Mobile') {
      dtm.updateProds(sender, 'rpuPurchase', false, false, true);
    } else if (sender == 'RPU OrderConfirmation PageLoad') {
      dtm.updateProds(sender, 'rpuPurchase', false, false, true);
    } else if (sender == 'ProductReview SubmitButton') {
      dtm.updateProds(sender);
    } else if (sender == 'ProductReview SortOption') {
      dtm.updateProds(sender);
    } else if (sender == 'ProductReview PaginationButton') {
      dtm.updateProds(sender);
    } else if (sender == 'ProductReview AddToCartButton Desktop') {
      dtm.updateProds(sender, 'dthAddToCart');
    } else if (sender == 'PDP WarrantyDeclineButton') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP WarrantyAddButton') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP ReserveInStoreButton') {
      data_layer["addToCartLocation"] = 'rpu';
      dtm.updateProds(sender);
    } else if (sender == 'PDP RecommendedAccessoriesButton Mobile') {
      dtm.addRecommendedProd(sender);
    } else if (sender == 'PDP RecommendedAccessoriesButton Desktop') {
      dtm.addRecommendedProd(sender);
    } else if (sender == 'PDP GalleryCarouselItem Video') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP GalleryCarouselItem Image') {
      dtm.updateProds(sender);
    } else if (sender == 'PDP GalleryCarouselItem 360') {
      dtm.updateProds(sender);
    }
  } catch (e) {
    _satellite.notify(e.message,1);
  }
}

var dtm_counter = function(id) {
	var counterID = 'dtmCounter-' + id;

  this.reset = function() {
    $.cookie(counterID, '', { path: '/', domain: env.cookieDomain });
  }

  this.increment = function() {
    try {
      var value = $.cookie(counterID)||'';
      if (value == '') {
				$.cookie(counterID, 1, { path: '/', domain: env.cookieDomain });
      } else {
        value = parseInt(value) + 1;
        $.cookie(counterID, value, { path: '/', domain: env.cookieDomain });
      }
    } catch (e) {
    }
  }

  this.decrement = function() {
    try {
      var value = $.cookie(counterID)||'';

      if (value == '') {
				$.cookie(counterID, 1, { path: '/', domain: env.cookieDomain });
      } else {
        value = parsetInt(value) - 1;
        $.cookie(counterID, value, { path: '/', domain: env.cookieDomain });
      }
    } catch (e) {
    }
  }

  this.value = function() {
    return $.cookie(counterID)||'';
  }
};

var dtm_stopwatch = function(id){
	var stopwatchID = 'dtm_stopwatch_' + id;
  var startTime = stopwatchID + '_start';
  var endTime = stopwatchID + '_end';

  this.isRunning = function() {
    return ($.cookie(startTime)||'') != '';
  }

  this.isStopped = function() {
    return ($.cookie(endTime)||'') != '';
  }

  this.start = function() {
    this.reset();
    $.cookie(startTime, new Date().getTime(), { path: '/', domain: env.cookieDomain });
  }

  this.stop = function() {
    try {
      if (!this.isStopped()) {
        if (this.isRunning()) {
          var time = (new Date().getTime() - $.cookie(startTime)) / 1000;
          $.cookie(endTime, time.toFixed(1), { path: '/', domain: env.cookieDomain });
          $.cookie(startTime, '', { path: '/', domain: env.cookieDomain });
        } else {
          $.cookie(endTime, 'NA', { path: '/', domain: env.cookieDomain });
          $.cookie(startTime, '', { path: '/', domain: env.cookieDomain });
        }
      }
    } catch (e) {
      $.cookie(endTime, 'error', { path: '/', domain: env.cookieDomain });
    }
  }

  this.reset = function() {
    $.cookie(startTime, '', { path: '/', domain: env.cookieDomain });
    $.cookie(endTime, '', { path: '/', domain: env.cookieDomain });
  }

  this.getTime = function() {
    return $.cookie(endTime)||'';
  }
};

var dtm_eyereturn = {
	sendRequest: function(sender) {
    var products = [];
    var totalRevenue = 0;
		var totalQty = 0;
		var bundleUnits = [];

    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (products.indexOf(data_layer.productBundle[i]) == -1) {
          products.push(data_layer.productBundle[i]);
          totalRevenue += parseFloat(data_layer.bundlePrice[i]);
        	totalQty += parseInt(data_layer.bundleQty[i]);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
        		totalQty += parseInt(data_layer.bundleQty[i]);
          }
        }
      } else {
        products.push(data_layer.prodID[i]);
        totalRevenue += parseFloat(data_layer.prodPrice[i]);
        totalQty += parseInt(data_layer.prodQty[i]);
      }
    }

    if (products.length > 0) {
      var pageName = '';
      var appendLanguage = false;
      var tag = '';

      if (sender == 'cart') {
        pageName = 'In_Cart';
        appendLanguage = true;
      } else if (sender == 'dthPurchase') {
        pageName = 'Cart_Confirmation';
        appendLanguage = true;
      } else if (sender == 'rpuPurchase') {
        pageName = 'RPU_Confirmation';
        appendLanguage = true;
      } else if (sender == 'pdp') {
        tag = 'generic';
      }

      if (appendLanguage) {
        var language = env.lang;

        if (language == "fr") {
          pageName += 'FR';
        } else {
          pageName += 'EN';
        }
      }

      if (tag == 'generic') {
        (function l(d) {
          var site = '6936', page = 'generic', sku=products,s,er = d.createElement('script');
          er.type = 'text/javascript'; er.async = true;
          er.src = '//o2.eyereturn.com/?site='+site+'&page='+page+'&gp1='+encodeURIComponent(sku);

          window.sku = sku;
          s = d.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(er,s);
        })(document);
      } else {
        (function l(d){
            var site = '6936', page = pageName, quantity = totalQty, total = totalRevenue, gp=products.join('-'),s, er = d.createElement('script');
            er.type = 'text/javascript'; er.async = true;
            er.src = '//o2.eyereturn.com/?site='+site+'&page='+page+'&quantity='+quantity+'&total='+total+'&gp='+encodeURIComponent(gp);
            s = d.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(er, s);
        })(document);
      }
    }
  },
  trackhome: function() {
    (function l(d) {
      var site = '6936', page = 'generic',s,er = d.createElement('script');
      er.type = 'text/javascript'; er.async = true;
      er.src = '//o2.eyereturn.com/?site='+site+'&page='+page;
      s = d.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(er,s);
    })(document);
  },
  trackCategory: function() {
    (function l(d) {
      var site = '6936', page = 'generic',s,er = d.createElement('script');
      er.type = 'text/javascript'; er.async = true;
      er.src = '//o2.eyereturn.com/?site='+site+'&page='+page;
      s = d.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(er,s);
    })(document);
  }
};

var dtm_floodlight = {
	track: function(sender) {
    var language = _satellite.getVar('language')||'N/A';

    if (sender == 'Home') {
      var axel = Math.random() + "";
      var a = axel * 10000000000000;
      var iframe = '<iframe src="https://5879915.fls.doubleclick.net/activityi;src=5879915;type=homep0;cat=bestb0;u5=' + language + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + ';num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
      $('body').append(iframe);
    } else if (sender == 'Department') {
      var axel = Math.random() + "";
      var a = axel * 10000000000000;
      var department = _satellite.getVar('pageIdentifier')||'N/A';
      var iframe = '<iframe src="https://5879915.fls.doubleclick.net/activityi;src=5879915;type=depar0;cat=bestb000;u1=' + department + ';u5=' + language + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + ';num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
      $('body').append(iframe);
    } else if (sender == 'DTH Cart') {
      var products = [];
      var totalRevenue = 0;
      var totalQty = 0;
      var bundleUnits = [];
      var prodID = _satellite.getVar("prodID")||"";
      for (i = 0; i < prodID.length; i++) {
        if (data_layer.productType[i] == "bundle") {
          if (products.indexOf(data_layer.productBundle[i]) == -1) {
            products.push(data_layer.productBundle[i]);
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
            bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
          } else {
            if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
              totalRevenue += parseFloat(data_layer.bundlePrice[i]);
              totalQty += parseInt(data_layer.bundleQty[i]);
            }
          }
        } else {
          products.push(data_layer.prodID[i]);
          totalRevenue += parseFloat(data_layer.prodPrice[i]);
          totalQty += parseInt(data_layer.prodQty[i]);
        }
      }

      if (products.length > 0) {
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        var iframe = '<iframe src="https://5879915.fls.doubleclick.net/activityi;src=5879915;type=incar0;cat=bestb0;u4=' + products.join('-') + ';u5=' + language + ';u6=' + totalQty + ';u7=' + totalRevenue + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + ';num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
        $('body').append(iframe);
      }
    } else if (sender == 'DTH Confirmation') {
      var products = [];
      var totalRevenue = 0;
      var totalQty = 0;
      var bundleUnits = [];
      var prodID = _satellite.getVar("prodID")||"";
      for (i = 0; i < prodID.length; i++) {
        if (data_layer.productType[i] == "bundle") {
          if (products.indexOf(data_layer.productBundle[i]) == -1) {
            products.push(data_layer.productBundle[i]);
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
            bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
          } else {
            if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
              totalRevenue += parseFloat(data_layer.bundlePrice[i]);
              totalQty += parseInt(data_layer.bundleQty[i]);
            }
          }
        } else {
          products.push(data_layer.prodID[i]);
          totalRevenue += parseFloat(data_layer.prodPrice[i]);
          totalQty += parseInt(data_layer.prodQty[i]);
        }
      }
      if (products.length > 0) {
        var axel = Math.random() + "";
        var a = axel * 10000000000000;
        var iframe = '<iframe src="https://5879915.fls.doubleclick.net/activityi;src=5879915;type=cartc0;cat=bestb0;qty=1;cost=' + totalRevenue + ';u4='+ products.join('-') + ';u5=' + language + ';u6=' + totalQty + ';u7=' + totalRevenue + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
        $('body').append(iframe);
      }
  	} else if (sender == 'Newsletter Sign Up') {
      var axel = Math.random() + "";
      var a = axel * 10000000000000;
      var iframe = '<iframe src="https://5879915.fls.doubleclick.net/activityi;src=5879915;type=newsl0;cat=bestb0;u5=' + language + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + ';num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
      $('body').append(iframe);
    } else if (sender == 'Store Locator') {
    	var axel = Math.random() + "";
      var a = axel * 10000000000000;
      var iframe = '<iframe src="https://5879915.fls.doubleclick.net/activityi;src=5879915;type=store0;cat=bestb0;u5=' + language + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + ';num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
		$('body').append(iframe);
    } else if (sender == 'PDP Page') {
      var products = [];
      var totalRevenue = 0;
      var totalQty = 0;
      var bundleUnits = [];
      var prodID = _satellite.getVar("prodID")||"";
      for (i = 0; i < prodID.length; i++) {
        if (data_layer.productType[i] == "bundle") {
          if (products.indexOf(data_layer.productBundle[i]) == -1) {
            products.push(data_layer.productBundle[i]);
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
            bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
          } else {
            if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
              totalRevenue += parseFloat(data_layer.bundlePrice[i]);
              totalQty += parseInt(data_layer.bundleQty[i]);
            }
          }
        } else {
          products.push(data_layer.prodID[i]);
          totalRevenue += parseFloat(data_layer.prodPrice[i]);
          totalQty += parseInt(data_layer.prodQty[i]);
        }
      }

      if (products.length > 0) {
        var axel = Math.random() + "";
      	var a = axel * 10000000000000;
        var pdpProdDep = data_layer['breadcrumb2'];
		var breadcrumbs = [data_layer['breadcrumb2'], data_layer['breadcrumb3'], data_layer['breadcrumb4'], data_layer['breadcrumb5'], data_layer['breadcrumb6']];
		for(var i; i < breadcrumbs.length; i++) {
		    if(breadcrumbs[i] == "Product Information"){
		        var pdpProdType = breadcrumbs[i-1];
		    }
		}
        var pdpProdBrand = data_layer['brand'];

        var iframe = '<iframe src="https://5879915.fls.doubleclick.net/activityi;src=5879915;type=produ0;cat=bestb0;u1='+ pdpProdDep +';u2='+ pdpProdType +';u3='+ pdpProdBrand +';u4=' + products.join('-') + ';u5='+ language +';u6='+ totalQty +';u7='+ totalRevenue +';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
        $('body').append(iframe);
      }
    } else if (sender == 'RPU Cart') {
      var products = [];
      var totalRevenue = 0;
      var totalQty = 0;
      var bundleUnits = [];
      var prodID = _satellite.getVar("prodID")||"";
      for (i = 0; i < prodID.length; i++) {
        if (data_layer.productType[i] == "bundle") {
          if (products.indexOf(data_layer.productBundle[i]) == -1) {
            products.push(data_layer.productBundle[i]);
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
            bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
          } else {
            if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
              totalRevenue += parseFloat(data_layer.bundlePrice[i]);
              totalQty += parseInt(data_layer.bundleQty[i]);
            }
          }
        } else {
          products.push(data_layer.prodID[i]);
          totalRevenue += parseFloat(data_layer.prodPrice[i]);
          totalQty += parseInt(data_layer.prodQty[i]);
        }
      }

      if (products.length > 0) {
        var axel = Math.random() + "";
      	var a = axel * 10000000000000;
        var iframe = '<iframe src="https://5879915.fls.doubleclick.net/activityi;src=5879915;type=reser0;cat=bestb0;u4=' + products.join('-') + ';u5=' + language + ';u6=' + totalQty + ';u7=' + totalRevenue + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + ';num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
        $('body').append(iframe);
      }
    } else if (sender == 'RPU Confirmation') {
      var products = [];
      var totalRevenue = 0;
      var totalQty = 0;
      var bundleUnits = [];
      var prodID = _satellite.getVar("prodID")||"";
      for (i = 0; i < prodID.length; i++) {
        if (data_layer.productType[i] == "bundle") {
          if (products.indexOf(data_layer.productBundle[i]) == -1) {
            products.push(data_layer.productBundle[i]);
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
            bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
          } else {
            if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
              totalRevenue += parseFloat(data_layer.bundlePrice[i]);
              totalQty += parseInt(data_layer.bundleQty[i]);
            }
          }
        } else {
          products.push(data_layer.prodID[i]);
          totalRevenue += parseFloat(data_layer.prodPrice[i]);
          totalQty += parseInt(data_layer.prodQty[i]);
        }
      }

      if (products.length > 0) {
        if (env.lang == 'fr') {
          language = 'french';
        } else {
          language = 'english';
        }

        var axel = Math.random() + "";
      	var a = axel * 10000000000000;
        var iframe = '<iframe src="https://5879915.fls.doubleclick.net/activityi;src=5879915;type=rpucx0;cat=bestb0;qty=1;cost=' + totalRevenue +';u4=' + products.join('-') + ';u5=' + language + ';u6=' + totalQty + ';u7=' + totalRevenue + ';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>';
        $('body').append(iframe);
      }
    }
  }
};

var dtm_relation1 = {
  loadScript: function(callback) {
    $.ajax({
      url: "//7210119.collect.igodigital.com/collect.js",
      dataType: "script",
      success: callback
    });
  },
  getCart: function() {
    var cart = [];
    var bundles = [];
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (bundles.indexOf(data_layer.productBundle[i]) == -1) {
          bundles.push(data_layer.productBundle[i]);
          var item = {};
          item['item'] = data_layer.productBundle[i];
          item['quantity'] = data_layer.bundleQty[i];
          item['price'] = (parseFloat(data_layer.bundlePrice[i]) / parseInt(data_layer.bundleQty[i])).toFixed(2);
          cart.push(item);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            var bundleIndex =  cart.map(function(target) { return target.sku; }).indexOf(data_layer.productBundle[i]);
            if (bundleIndex >= 0) {
              cart[bundleIndex]['quantity'] += parseInt(data_layer.bundleQty[i]);
              cart[bundleIndex]['price'] += (parseFloat(data_layer.bundlePrice[i]) / parseInt(data_layer.bundleQty[i])).toFixed(2);
            }
          }
        }
      } else {
         var item = {};
         item['item'] = data_layer.prodID[i];
         item['quantity'] = data_layer.prodQty[i];
         item['price'] = (parseFloat(data_layer.prodPrice[i]) / parseInt(data_layer.prodQty[i])).toFixed(2);
         cart.push(item);
      }
    }
    return [cart, bundles, bundleUnits, prodID];
  },
  trackDepartment: function() {
    var department = _satellite.getVar('pageIdentifier')||'N/A';
    this.loadScript(function() {
      _etmc.push(["setOrgId", "7210119"]);
      _etmc.push(["setUserInfo", {"email" : $.cookie('dtmEMI') }]);
      _etmc.push(["trackPageView", {"category" : department }]);
      _etmc.push(["trackPageView"]);
    });
  },
  trackBrandStore: function() {
    this.loadScript(function() {
      _etmc.push(["setOrgId", "7210119"]);
      _etmc.push(["setUserInfo", {"email" : $.cookie('dtmEMI') }]);
      _etmc.push(["trackEvent", {"name" : "Visit BrandStore", "details" : { "brand" : data_layer['brandStore'] }}]);
    });
  },
  trackCart: function() {
    var cartArr = this.getCart();
    var cart = cartArr[0];
    var bundles = cartArr[1];
    var bundleUnits = cartArr[2];
    var prodID = cartArr[3];

    if (cart.length > 0) {
      this.loadScript(function() {
        _etmc.push(["setOrgId", "7210119"]);
        _etmc.push(["setUserInfo", {"email" : $.cookie('dtmEMI') }]);
        _etmc.push(["trackCart", {"cart" : JSON.parse(JSON.stringify(cart)) }]);
      });
    } else {
      var event = _satellite.getVar('event')||'';

      if (event == "dthRemove") {
        this.loadScript(function() {
          _etmc.push(["setOrgId", "7210119"]);
          _etmc.push(["trackCart", { 'clear_cart': true } ]);
        });
      }
    }
  },
  isEmptyCart: function(getCart) {
    var cartArr = this.getCart();
    var cart = cartArr[0];
    var bundles = cartArr[1];
    var bundleUnits = cartArr[2];
    var prodID = cartArr[3];

    var event = _satellite.getVar('event')||'';
    if (cart.length <= 0 && event == "dthRemove") {
      return true;
    } else {
      return false;
    }
  },
  trackPDP: function() {
    var products = [];
    var totalRevenue = 0;
    var totalQty = 0;
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (products.indexOf(data_layer.productBundle[i]) == -1) {
          products.push(data_layer.productBundle[i]);
          totalRevenue += parseFloat(data_layer.bundlePrice[i]);
          totalQty += parseInt(data_layer.bundleQty[i]);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
          }
        }
      } else {
        products.push(data_layer.prodID[i]);
        totalRevenue += parseFloat(data_layer.prodPrice[i]);
        totalQty += parseInt(data_layer.prodQty[i]);
      }
    }

    if (products.length > 0) {
      this.loadScript(function() {
        _etmc.push(["setOrgId", "7210119"]);
        _etmc.push(["setUserInfo", {"email" : $.cookie('dtmEMI') }]);
        _etmc.push(["trackPageView", {"item" : products[0] }]);
        _etmc.push(["trackPageView"]);
      });
    }
  },
  trackHome: function() {
    this.loadScript(function() {
      _etmc.push(["setOrgId", "7210119"]);
      _etmc.push(["setUserInfo", {"email" : $.cookie('dtmEMI') }]);
      _etmc.push(["trackPageView"]);
    });
  },
  trackDTHConfirmation: function() {
    var cart = [];
    var bundles = [];
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (bundles.indexOf(data_layer.productBundle[i]) == -1) {
          bundles.push(data_layer.productBundle[i]);
          var item = {};
          item['item'] = data_layer.productBundle[i];
          item['quantity'] = data_layer.bundleQty[i];
          item['price'] = (parseFloat(data_layer.bundlePrice[i]) / parseInt(data_layer.bundleQty[i])).toFixed(2);;
          cart.push(item);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            var bundleIndex =  cart.map(function(target) { return target.sku; }).indexOf(data_layer.productBundle[i]);
            if (bundleIndex >= 0) {
              cart[bundleIndex]['quantity'] += parseInt(data_layer.bundleQty[i]);
              cart[bundleIndex]['price'] += (parseFloat(data_layer.bundlePrice[i]) / parseInt(data_layer.bundleQty[i])).toFixed(2);
            }
          }
        }
      } else {
         var item = {};
         item['item'] = data_layer.prodID[i];
         item['quantity'] = data_layer.prodQty[i];
         item['price'] = (parseFloat(data_layer.prodPrice[i]) / parseInt(data_layer.prodQty[i])).toFixed(2);
         cart.push(item);
      }
    }

    if (cart.length > 0) {
      this.loadScript(function() {
        _etmc.push(["setOrgId", "7210119"]);
        _etmc.push(["setUserInfo", {"email" : $.cookie('dtmEMI') }]);
        var axel = Math.random() + "";
        _etmc.push(["trackConversion", {"cart" : JSON.parse(JSON.stringify(cart)), "order_number" : "D-" + (axel * 10000000000).toFixed() }]);
      });
    }
  },
  trackRPUConfirmation: function() {
    var cart = [];
    var bundles = [];
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (bundles.indexOf(data_layer.productBundle[i]) == -1) {
          bundles.push(data_layer.productBundle[i]);
          var item = {};
          item['item'] = data_layer.productBundle[i];
          item['quantity'] = data_layer.bundleQty[i];
          item['price'] = (parseFloat(data_layer.bundlePrice[i]) / parseInt(data_layer.bundleQty[i])).toFixed(2);;
          cart.push(item);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            var bundleIndex =  cart.map(function(target) { return target.sku; }).indexOf(data_layer.productBundle[i]);
            if (bundleIndex >= 0) {
              cart[bundleIndex]['quantity'] += parseInt(data_layer.bundleQty[i]);
              cart[bundleIndex]['price'] += (parseFloat(data_layer.bundlePrice[i]) / parseInt(data_layer.bundleQty[i])).toFixed(2);;
            }
          }
        }
      } else {
         var item = {};
         item['item'] = data_layer.prodID[i];
         item['quantity'] = data_layer.prodQty[i];
         item['price'] = (parseFloat(data_layer.prodPrice[i]) / parseInt(data_layer.prodQty[i])).toFixed(2);
         cart.push(item);
      }
    }

    if (cart.length > 0) {
      this.loadScript(function() {
        _etmc.push(["setOrgId", "7210119"]);
        _etmc.push(["setUserInfo", {"email" : $.cookie('dtmEMI') }]);
        var axel = Math.random() + "";
        _etmc.push(["trackConversion", {"cart" : JSON.parse(JSON.stringify(cart)), "order_number" : "R-" + (axel * 10000000000).toFixed() }]);
      });
    }
  },
  trackNewsletter: function() {
     this.loadScript(function() {
      _etmc.push(["setOrgId", "7210119"]);
      _etmc.push(["setUserInfo", {"email" : $.cookie('dtmEMI') }]);
      _etmc.push(["trackEvent", {"name" : "newsletter signup" } ]);
     });
  },
  trackStoreLocator: function() {
    this.loadScript(function() {
      _etmc.push(["setOrgId", "7210119"]);
      _etmc.push(["setUserInfo", {"email" : $.cookie('dtmEMI') }]);
      _etmc.push(["trackEvent", {"name" : "store locator" } ]);
     });
  }
};

var dtm_cj = {
  trackDTHConfirmation: function() {
    var cart = [];
    var bundles = [];
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";

    var couponSku = '';
    var lowestPrice = 0.00;

    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (bundles.indexOf(data_layer.productBundle[i]) == -1) {
          bundles.push(data_layer.productBundle[i]);
          var unitPrice = (parseFloat(data_layer.bundlePrice[i]) / parseInt(data_layer.bundleQty[i])).toFixed(2);
          if (data_layer.promoCode.length > 0 && !data_layer.orderLevelDiscount && (lowestPrice == 0.00 || unitPrice < lowestPrice)) {
            couponSku = data_layer.productBundle[i];
            lowestPrice = unitPrice;
          }

          var item = {};
          item['sku'] = data_layer.productBundle[i];
          item['quantity'] = data_layer.bundleQty[i];
          item['price'] = data_layer.bundlePrice[i];
          item['totalSavings'] = data_layer.bundleTotalSavings[i];
          cart.push(item);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            var bundleIndex =  cart.map(function(target) { return target.sku; }).indexOf(data_layer.productBundle[i]);
            if (bundleIndex >= 0) {
              cart[bundleIndex]['quantity'] += parseInt(data_layer.bundleQty[i]);
              cart[bundleIndex]['price'] += parseFloat(data_layer.bundlePrice[i]);
              cart[bundleIndex]['totalSavings'] += parseFloat(data_layer.bundleTotalSavings[i]);
            }
          }
        }
      } else {
        var unitPrice = (parseFloat(data_layer.prodPrice[i]) / parseInt(data_layer.prodQty[i])).toFixed(2);
        if (data_layer.promoCode.length > 0 && !data_layer.orderLevelDiscount && (lowestPrice == 0.00 || unitPrice < lowestPrice)) {
          couponSku = data_layer.prodID[i];
          lowestPrice = unitPrice;
        }

        var item = {};
        item['sku'] = data_layer.prodID[i];
        item['quantity'] = data_layer.prodQty[i];
        item['price'] = data_layer.prodPrice[i];
        item['totalSavings'] = data_layer.prodTotalSavings[i];
        cart.push(item);
      }
    }

    if (cart.length > 0) {
      var purchaseID = _satellite.getVar("purchaseID")||"NA";
      var enterpriseID = '1537853';
      var containerID;
      var actionID;

      var section = _satellite.getVar('section');
      var recognized = _satellite.getVar('recognized');

      if (section == 'Mdot') {
        if (recognized == 'authenticated') {
          containerID = '15231';
          actionID = '387488';
        } else {
          containerID = '15230';
          actionID = '387487';
        }
      } else {
        if (recognized == 'authenticated') {
          containerID = '15229';
          actionID = '387486';
        } else {
          containerID = '15228';
          actionID = '387483';
        }
      }

      var count;
      var url = 'https://www.emjcd.com/tags/c?containerTagId='+containerID+'&CID='+enterpriseID+'&TYPE='+actionID+'&CURRENCY=CAD';
      url += '&OID=' + purchaseID;
      for (var count = 1; count <= cart.length; count++) {
        url += '&ITEM' + count + '=' + cart[count - 1]['sku'];
        url += '&AMT' + count + '=' + ((parseFloat(cart[count - 1]['price']) + parseFloat(cart[count - 1]['totalSavings'])) / parseInt(cart[count - 1]['quantity'])).toFixed(2);
        url += '&QTY' + count + '=' + cart[count - 1]['quantity'];
        url += '&DCNT' + count + '=' + cart[count - 1]['totalSavings'];

        if (cart[count - 1]['sku'] == couponSku) {
          couponSku = '';
          var uniquePromoCode = data_layer.promoCode.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
          });

          url += '&COUPON' + count + '=' + uniquePromoCode.join(',');
        }
      }

      var iframe = '<iframe height="1" width="1" frameborder="0" scrolling="no" name="cj_conversion" src="' + url + '"></iframe>';
      $('body').append(iframe);
    }
  }
};

var dtm_bluecore = {
  track: function() {
    var triggermail=triggermail||[];triggermail.load=function(a){var b=document.createElement("script");b.type="text/javascript";b.async=!0;b.src=("https:"===document.location.protocol?"https://":"http://")+"triggeredmail.appspot.com/triggermail.js/"+a+".js";a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)};triggermail.load("bestbuy_ca");window.triggermail=triggermail;
  },
  trackConfirmation: function() {
    var products = [];
    var totalRevenue = 0;
		var totalQty = 0;
		var bundleUnits = [];

    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (products.indexOf(data_layer.productBundle[i]) == -1) {
          products.push(data_layer.productBundle[i]);
          totalRevenue += parseFloat(data_layer.bundlePrice[i]);
        	totalQty += parseInt(data_layer.bundleQty[i]);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
        		totalQty += parseInt(data_layer.bundleQty[i]);
          }
        }
      } else {
        products.push(data_layer.prodID[i]);
        totalRevenue += parseFloat(data_layer.prodPrice[i]);
        totalQty += parseInt(data_layer.prodQty[i]);
      }
    }

    this.track();
  	var bluecoreEMI = $.cookie('dtmEMI');
    var purchaseID = data_layer.purchaseID;
  	var pixel = '<img id="bluecore_purchase_pixel" src="https://www.bluecore.com/api/track/purchase_pixel?token=bestbuy_ca&email='+ bluecoreEMI + '&total=' + totalRevenue + '&order_id=' + purchaseID + '&product_ids=' + products.join(',') + '" />';
  	$('body').append(pixel);
  }
};

var dtm_facebook = {
  getBaseCode: function() {
    var code = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','//connect.facebook.net/en_US/fbevents.js');";
    code += "fbq('init', '1644504072475165');fbq('track', 'PageView');";
    return code;
  },
  getImagePixel: function() {
    var imagePixel = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1644504072475165&ev=PageView&noscript=1"/>';
    return imagePixel;
  },
  trackHome: function() {
    $('head').append(this.getImagePixel());
  },
  trackDepartment: function() {
    $('head').append(this.getImagePixel());
  },
  trackPDP: function() {
    var products = [];
    var totalRevenue = 0;
    var totalQty = 0;
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (products.indexOf(data_layer.productBundle[i]) == -1) {
          products.push(data_layer.productBundle[i]);
          totalRevenue += parseFloat(data_layer.bundlePrice[i]);
          totalQty += parseInt(data_layer.bundleQty[i]);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
          }
        }
      } else {
        products.push(data_layer.prodID[i]);
        totalRevenue += parseFloat(data_layer.prodPrice[i]);
        totalQty += parseInt(data_layer.prodQty[i]);
      }
    }

    if (products.length > 0) {
      var script = '<script>' + this.getBaseCode();
      script += "fbq('track', 'ViewContent', {content_type: 'product', content_ids: ['" + products[0] + "'], value: " + totalRevenue + ", currency: 'CAD'});";
      script += '</script>';
      $('head').append(script);
    }
  },
  trackPDPAddToCart: function() {
    var products = [];
    var totalRevenue = 0;
    var totalQty = 0;
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (products.indexOf(data_layer.productBundle[i]) == -1) {
          products.push(data_layer.productBundle[i]);
          totalRevenue += parseFloat(data_layer.bundlePrice[i]);
          totalQty += parseInt(data_layer.bundleQty[i]);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
          }
        }
      } else {
        products.push(data_layer.prodID[i]);
        totalRevenue += parseFloat(data_layer.prodPrice[i]);
        totalQty += parseInt(data_layer.prodQty[i]);
      }
    }

    if (products.length > 0) {
      var script = '<script>';
      script += "fbq('track', 'AddToCart', {content_type: 'product', content_ids: ['" + products[0] + "'], value: " + totalRevenue + ", currency: 'CAD'});";
      script += '</script>';
      $('head').append(script);
    }
  },
  trackCart: function() {
    var products = [];
    var totalRevenue = 0;
    var totalQty = 0;
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (products.indexOf(data_layer.productBundle[i]) == -1) {
          products.push(data_layer.productBundle[i]);
          totalRevenue += parseFloat(data_layer.bundlePrice[i]);
          totalQty += parseInt(data_layer.bundleQty[i]);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
          }
        }
      } else {
        products.push(data_layer.prodID[i]);
        totalRevenue += parseFloat(data_layer.prodPrice[i]);
        totalQty += parseInt(data_layer.prodQty[i]);
      }
    }

    if (products.length > 0) {
      var script = '<script>' + this.getBaseCode();
      script += "fbq('track', 'AddToCart', {content_type: 'product', content_ids: ['" + products.join("','") + "'], value: " + totalRevenue + ", currency: 'CAD'});";
      script += '</script>';
      $('head').append(script);
    }
  },
  trackDTHConfirmation: function() {
    var products = [];
    var totalRevenue = 0;
    var totalQty = 0;
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (products.indexOf(data_layer.productBundle[i]) == -1) {
          products.push(data_layer.productBundle[i]);
          totalRevenue += parseFloat(data_layer.bundlePrice[i]);
          totalQty += parseInt(data_layer.bundleQty[i]);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
          }
        }
      } else {
        products.push(data_layer.prodID[i]);
        totalRevenue += parseFloat(data_layer.prodPrice[i]);
        totalQty += parseInt(data_layer.prodQty[i]);
      }
    }

    if (products.length > 0) {
      var script = '<script>' + this.getBaseCode();
      script += "fbq('track', 'Purchase', {'purchase_type': 'DTH', content_type: 'product', content_ids: ['" + products.join("','") + "'], value: " + totalRevenue + ", currency: 'CAD'});";
      script += '</script>';
      $('head').append(script);
    }
  },
  trackRPUConfirmation: function() {
    var products = [];
    var totalRevenue = 0;
    var totalQty = 0;
    var bundleUnits = [];
    var prodID = _satellite.getVar("prodID")||"";
    for (i = 0; i < prodID.length; i++) {
      if (data_layer.productType[i] == "bundle") {
        if (products.indexOf(data_layer.productBundle[i]) == -1) {
          products.push(data_layer.productBundle[i]);
          totalRevenue += parseFloat(data_layer.bundlePrice[i]);
          totalQty += parseInt(data_layer.bundleQty[i]);
          bundleUnits.push(data_layer.productBundle[i]+'|'+data_layer.prodID[i]);
        } else {
          if (bundleUnits.indexOf(data_layer.productBundle[i]+'|'+data_layer.prodID[i]) >= 0) {
            totalRevenue += parseFloat(data_layer.bundlePrice[i]);
            totalQty += parseInt(data_layer.bundleQty[i]);
          }
        }
      } else {
        products.push(data_layer.prodID[i]);
        totalRevenue += parseFloat(data_layer.prodPrice[i]);
        totalQty += parseInt(data_layer.prodQty[i]);
      }
    }

    if (products.length > 0) {
      var script = '<script>' + this.getBaseCode();
      script += "fbq('track', 'Purchase', {'purchase_type': 'RPU', content_type: 'product', content_ids: ['" + products.join("','") + "'], value: " + totalRevenue + ", currency: 'CAD'});";
      script += '</script>';
      $('head').append(script);
    }
  },
  trackStoreLocator: function() {
    $('head').append(this.getImagePixel());
  }
};
new dtm_counter('path').increment();

