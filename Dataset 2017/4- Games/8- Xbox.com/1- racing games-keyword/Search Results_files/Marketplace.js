/// <reference path="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.js" />

// Detects if the products have been purchased, and updates the Product or Game SearchResult
function detectPurchased(purchaseHistoryUrl, productIds, displayText) {
    $.post(purchaseHistoryUrl, { 'productIds': productIds }, function (data) {
        for (var i in data) {
            $("#p" + data[i] + " .GoldExclusive").hide();
            $("#p" + data[i] + " .ProductPrices").children().css("visibility", "hidden");
            $("#p" + data[i] + " .DeliveryPriceDisclaimer").hide();
            $("#p" + data[i] + " .ProductPrices").append("<div class=\"Purchased\">" + displayText + "</div>");
            $("#p" + data[i] + " .ConsoleProductPrices").text(displayText);
            $(".CallToAction.BuyButton").unbind("click");
        }
    });
}

function showTierPrices() {
    if (currentUser && (currentUser.tier == 6 || currentUser.tier == 9)) {
        $('.AvatarItemTiles .ProductPrices').each(function (i, e) {
            if (e.children.length == 2) {
                $(e).find('.SilverPrice').hide();
            }
        });
        $('.AvatarItemTiles .ProductPrices .GoldPrice').css({ display: 'block' });

        $('#GetProduct .ProductPrices').each(function (i, e) {
            if (e.children.length == 2) {
                $(e).find('.SilverPrice').hide();
                $(e).find('.GoldPrice').css({ display: 'block' });
            }
        });
    } else {
        $("[id^='UserRating']").parent().hide();
        $("[id^='RateRelatedProduct']").hide();

        $('.AvatarItemTiles .ProductPrices').each(function (i, e) {
            if (e.children.length == 1) {
                $(e).find('.SilverPrice').css({ display: 'block' });
                $(e).find('.GoldPrice').css({ display: 'block' });
            }
        });
    }
}

function purchasePopup(id, type) {
    if (!currentUser || !currentUser.isSignedIn) {
        // This uses a placeholder instead of building it itself as the return parameter from sign-in is double-encoded by LiveID client
        window.location.replace(signInUrl.replace(/-purchaseid-/g, id));
        return false;
    }

    if (typeof window.closeVideoViewer == 'function') {
        closeVideoViewer();
    }

    var url = purchasePopupUrl.replace('{0}', id).replace('{1}', type);

    // note: you want to fix how dialog is instantied because
    // 1° it does invoke the purchase URL TWO times, 1) when the iframe element is injected in the DOM, 2) when dialog is invoked (it does re-inject the iframe element in the DOM
    // 2° it creates JS errors in the phantom instance of the iframe that is created first
    // see purchaseVideoPopup
    var $dialog = $('<iframe class="MarketplacePopupPurchase" src="' + url + '" frameborder="0"></iframe>').dialog({ autoOpen: false, height: 650, width: 808, modal: true, resizable: false, draggable: false });
    $dialog.dialog('open');
    $(".MarketplacePopupPurchase").removeAttr('style').removeClass('ui-dialog-content').removeClass('ui-widget-content'); //workaround for a jqueryui bug that sets the iframe too small
    $('.ui-widget-header').hide();
    return false;
}

function purchaseVideoPopup(purchasePopupUrl, signInUrl, purchaseId) {
    if (!currentUser || !currentUser.isSignedIn) {
        // This uses a placeholder instead of building it itself as the return parameter from sign-in is double-encoded by LiveID client
        window.location.replace(signInUrl.replace(/-purchaseid-/g, purchaseId));
        return false;
    }

    if (BusinessTracking) {
        BusinessTracking.recordIntentToPurchase(purchaseId);
    }

    if (typeof window.closeVideoViewer == 'function') {
        closeVideoViewer();
    }

    openPurchaseModalDialog(purchasePopupUrl);
}

function openPurchaseModalDialog(url) {
    $("iframe#purchaseIFrame").remove();
    $("div[class|=ui-dialog]").remove();
    $("div[class|=ui-widget]").remove();

    var $dialog = $('<div>loading</div>').dialog({ autoOpen: true, modal: true, width: 808, height: 660, resizable: false, draggable: false, dialogClass: 'ui-dialog-purchase' });
    $dialog.html('<iframe id="purchaseIFrame" src="' + url + '" frameborder="0" marginheight="0" marginwidth="0"></iframe>');
    $(".ui-widget-header").removeClass('ui-widget-header');
    $(".ui-widget-content").removeClass('ui-widget-content');
    $(".ui-widget").removeClass('ui-widget');

    if ($.browser.msie) {
        var iframe = $("iframe#purchaseIFrame").get(0);
        $(iframe).css("opacity", "0.01");
        iframe.onreadystatechange = function () {
            if (this.readyState == "complete") {
                $(this).css("opacity", "1");
            }
        };
    }

    $(window).bind("message", function (ev) {
        if (ev.originalEvent.data.msWinJSXYFocusControlMessage) {
            return;
        }

        var data = JSON.parse(ev.originalEvent.data);
        if (data && data.message == "ERROR") {
            var status = data.httpStatus;
            if (status == 404 || status == 500) {
                $dialog.dialog('close');
            }
        }
    });

    $dialog.recenter = function () {
        var top = (($(window).height() - $dialog.outerHeight()) / 2) + $(window).scrollTop();
        var left = (($(window).width() - $dialog.outerWidth()) / 2) + $(window).scrollLeft();
        if ($(".ui-dialog").is(":visible")) {
            $(".ui-dialog").css('top', top + 'px');
            $(".ui-dialog").css('left', left + 'px');
        }
    };

    $(window).scroll(function () {
        $dialog.recenter();
    });

    $(window).resize(function () {
        $dialog.recenter();
    });

    $dialog.children("iframe").focus();
    $dialog.children("iframe").blur(function () {
        $(this).focus();
    });

    return false;
}

function rateRelatedProduct(url, id) {
    $.post(
        url,
        { productId: id },
        function (data) { $("#RateRelatedProduct" + id).html(data); }); // end post
}

var togglingSections = {};
function toggleRelatedDetails(id, classToShow) {
    $("#p" + id + " .ProductDetails > div").each(function (index) {
        var sectionId = id + index;
        if (!togglingSections[sectionId]) {
            if ($(this).is(':visible') && !$(this).hasClass(classToShow)) {
                togglingSections[sectionId] = true;
                $(this).hide('blind', function () { togglingSections[sectionId] = false; }, 250);
            }
            else if ($(this).hasClass(classToShow)) {
                togglingSections[sectionId] = true;
                $(this).toggle('blind', function () { togglingSections[sectionId] = false; }, 250);
            }
        }
    });
    return false;
}

jQuery.fn.userRatingControl = function userRating(productId, getUrl, setUrl, yourRatingText, savingRatingText, savedRatingText) {
    var userRatingDiv = $("#UserRating" + productId);
    var ratingMsg = userRatingDiv.parent().children("#RatingMessage");
    var stars = userRatingDiv.children(".Star");

    // make call to get current rating
    $.post(getUrl, { productId: productId }, function (data) {
        userRatingDiv.attr("currentRating", data);
        setStarRating(userRatingDiv, data);
    }); // end post

    stars.click(function () {

        var rating = $(this).index() + 1;
        userRatingDiv.attr("currentRating", rating);
        ratingMsg.html(savingRatingText);
        $.post(setUrl, { productId: productId, rating: rating }, function (data) {
            ratingMsg.html(savedRatingText);
        }); //end post

    }); //end click

    stars.hover(function () {

        setStarRating(userRatingDiv, $(this).index() + 1);

    }, function () {

        var rating = userRatingDiv.attr("currentRating");
        setStarRating(userRatingDiv, rating);

    }); //end hover
};

function setStarRating(ratingElement, rating) {
    ratingElement.children().each(function (i) {
        $(this).removeClass("Star4").removeClass("Star0");
    });

    ratingElement.children().each(function (i) {
        if (i < rating) {
            $(this).addClass("Star4");
        } else {
            $(this).addClass("Star0");
        }
    });
}

function initializePageTabs(tabPages, defaultTabPage, cookieName, tabs) {
    tabPages = $(tabPages);
    var cookieValue = getCookie(cookieName);

    tabPages.hide();

    var tabPage = cookieValue;
    if (!tabPage || $(tabPage).length == 0)
        tabPage = defaultTabPage;

    setPageTab(tabPages, tabs, tabPage, null);

    $(tabs).each(function () {
        $(this).click(function () { setPageTab(tabPages, tabs, $(this).attr('href'), cookieName); return false; });
    });
}

function setPageTab(tabPages, tabs, selectedTabPage, cookieName) {
    if (cookieName)
        setCookie(cookieName, selectedTabPage, 1);

    selectedTabPage = $(selectedTabPage);
    var lastTabPage = tabPages.filter(':visible');
    if (!tabPages.has(selectedTabPage) || selectedTabPage.is(':visible'))
        return;

    $(tabs).each(function () {
        if ($(this).attr('href') == selectedTabPage.selector)
            $(this).addClass('Selected');
        else
            $(this).removeClass('Selected');
    });

    if (tabs) {
        lastTabPage.hide();
        selectedTabPage.show();
        return;
    }
}

var avatarEditorLoaded = false;
var avatarEditorLastTryProductId = 0;
var avatarEditorLastTryTitle = '';
var avatarEditorLastTryPrice = 0;

function tryOn(productId) {
    var price = $('#p' + productId + ' .ProductPrices .ProductPrice:visible').text();
    var title = $('#p' + productId + ' h2').text();

    avatarEditorLastTryProductId = productId;
    avatarEditorLastTryTitle = title;
    avatarEditorLastTryPrice = price;

    $('#AvatarViewerLink').trigger('click', productId);

    require(['avatarViewerWrapper'], function (avatarViewerWrapper) {
        if (avatarViewerWrapper.useWebGL) {
            avatarViewerWrapper.webGLViewer.equip(productId).done(function () {
                // TODO: Workaroud for an issue in avatar control that equip is not interruptible
                showPurchaseInfo(productId);
            });
        } else {
            var avatarEditor = document.getElementById('marketplaceAvatarEditor');
            if (!(avatarEditor && avatarEditorLoaded)) {
                flashAvatarViewerMessage();
                return;
            }

            if (avatarEditor.Content.SLMarketplaceAvatarEditor.ApplyAsset(productId)) {
                showPurchaseInfo(productId);
            }
        }
    });
}

function showPurchaseInfo(productId) {
    var price = $('#p' + productId + ' .ProductPrices .ProductPrice:visible').text();
    var title = $('#p' + productId + ' h2').text();

    $('#TryOnDescription').show();
    $('#AvatarViewer .AvatarProduct').html(title);
    $('#AvatarViewer .ProductPrice').html(price);
    $('#AvatarViewer .AvatarProductId').removeAttr('id').attr('id', 'pname' + productId);

    var m12PurchaseButton = $('#AvatarViewer .AvatarPurchase');
    m12PurchaseButton.show();
    m12PurchaseButton.unbind('click');
    m12PurchaseButton.data("id", productId);
    m12PurchaseButton.bind("click", function () {
        var url = $(this).data("url");
        var id = $(this).data("id");
        url = url.replace(/ProductId/g, id);
        m12PurchasePopup(url, id);
    });
}

function onAvatarGenderMismatch() {
    var AvatarErrorMessage = $('#AvatarErrorMessage').html();
    $('#AvatarViewer .CallToAction').hide();
    $('#AvatarViewer .AvatarProduct').html(AvatarErrorMessage);
    $('#AvatarViewer .ProductPrice').html('');
    $('#AvatarViewer .AvatarProductId').removeAttr('id');
    $('#TryOnDescription').show();
}

function onUserWithNoAvatar() {
    $('#AvatarViewerEnabled').hide();
    $('#AvatarViewerDisabled').show();
    avatarEditor.Content.SLMarketplaceAvatarEditor.TurnoffSoundEffect();
}

function onAvatarEditorGenericError(errMessage) {
    if (errMessage) {
        $('#AvatarViewer .CallToAction').hide();
        $('#AvatarViewer .AvatarProduct').html(errMessage);
        $('#AvatarViewer .ProductPrice').html('');
        $('#AvatarViewer .AvatarProductId').removeAttr('id');
        $('#TryOnDescription').show();
    }
}

function onAvatarLoadingFinished() {
    avatarEditorLoaded = true;
    if (avatarEditorLastTryProductId) {
        tryOn(avatarEditorLastTryProductId, avatarEditorLastTryTitle, avatarEditorLastTryPrice);
    }
}

function flashAvatarViewerMessage() {
    if ($('#DisabledBox').queue().length <= 0) {
        var bgColorOrig = $('#DisabledBox').css('background-color');
        $('#DisabledBox').animate({ 'background-color': '#532E8E' }, 10).delay(1000).animate({ 'background-color': bgColorOrig }, 1000);
    }
}

function alignAvatarViewer(element) {
    var link = $('#CategoriesLink');
    var offset = link.offset();
    var height = link.height();
    alignSlidingDiv(element, offset.top + height + 20, offset.left);
}

function alignSlidingDiv(element, yPos, xPos) {
    var slidingElement = $(element);

    if (slidingElement) {
        var ySlide = yPos - (document.documentElement.scrollTop + document.body.scrollTop);
        var xSlide = xPos - (document.documentElement.scrollLeft + document.body.scrollLeft);
        if (ySlide > 0) {
            //start moving the avatar viewer
            slidingElement.css("top", ySlide).css("left", xSlide);
        } else if (ySlide < 0) {
            slidingElement.css("top", '5px').css("left", xSlide);
        }
    }
}

function toggleSubBrand(brandId, firstBrandInRow) {
    var expandoArea = $('#Expando');
    var parent = $('#' + brandId);
    var subBrandsHtml = $('#SubBrands' + brandId).html();
    var currentBrand = expandoArea.attr('brand');

    if (currentBrand == brandId) {//same one pressed
        expandoArea.attr('brand', "").html("").hide();
    } else {
        expandoArea.attr('brand', brandId)
        .html(subBrandsHtml)
        .stop(true, true)
        .show(0)
        .offset({ top: 10, left: 10 }) //bug in IE, position cannot be set if it was auto
        .position({
            of: $('#' + firstBrandInRow),
            my: 'left top',
            at: 'left bottom'
        });
    }
}

(function () {
    var xbox = window.xbox = window.xbox || {},
        $dialog = {};

    $("document").ready(function () {
        if (window.supportConsoleMessaging) {
            require(['avatarMarketplace.notifyExternal', 'avatarMarketplace.listenExternal', 'avatarMarketplace.Messages'], function (notifyExternal, listenExternal, messages) {
                function sendHbiRequest() {
                    notifyExternal(messages.hbiRequest());
                }

                window.sendHbiRequest = sendHbiRequest;
                var buyButton = $("a.CallToAction.BuyButton");
                if (buyButton) {
                    var purchaseUrl = buyButton.data("purchaseurl");
                    if (purchaseUrl) {
                        listenExternal.on('hbiResponse', function () {
                            var tempElement = document.createElement('textarea');
                            tempElement.innerHTML = purchaseUrl;
                            window.location.replace(tempElement.value);
                        });
                    }
                }
            });
        }

        xbox.showWelcome = function (url) {
            if (getCookie("gfwWelcome") == "off") {
                return;
            }
            $dialog = $('<iframe id="WelcomePopup" src="' + url + '" frameborder="0" ></iframe>').dialog({
                autoOpen: false,
                title: '<img src="/Content/Images/379x48px_gfw_logo.png" /><a id="closeWin" class="closeDialog" href="#" onclick="return false"></a>',
                height: 620,
                width: 735,
                modal: true,
                resizable: false,
                draggable: false
            });
            $dialog.dialog('open');
            $("#closeWin").bind("click", function () {
                $("#WelcomePopup").attr("src", url + "?close=1");
            });
            $("#WelcomePopup").removeAttr('style').removeClass('ui-dialog-content').removeClass('ui-widget-content'); //workaround for a jqueryui bug that sets the iframe too small
        };
        xbox.closeWelcome = function () {
            $dialog.dialog('close');
        };

        function bindPurchasePopup() {
            var purchaseUrl = $(this).data("purchaseurl");
            var id = $(this).data("id");
            if (purchaseUrl, id) {
                return m12PurchasePopup(purchaseUrl, id);
            }
        }

        $(".RelatedTiles .CallToAction").bind("click", bindPurchasePopup);
        $("#GetProduct .CallToAction").bind("click", bindPurchasePopup);
        $(".ProductPrices .PCBuyLink").bind("click", bindPurchasePopup);
        $(".CallToAction.BuyButton").bind("click", bindPurchasePopup);

        function m12PurchasePopup(url, id) {
            if (!currentUser || !currentUser.isSignedIn) {
                // This uses a placeholder instead of building it itself as the return parameter from sign-in is double-encoded by LiveID client
                window.location.replace(signInUrl.replace(/-purchaseid-/g, id));
                return false;
            }

            recordIntent(id);
            if (window.supportConsoleMessaging) {
                window.sendHbiRequest();
            } else {
                openPurchaseModalDialog(url);
            }

            return false;
        }

        function recordIntent(id) {
            if ("undefined" != typeof (BusinessTracking)) {
                BusinessTracking.recordIntentToPurchase(id);
            }
        }

        window.m12PurchasePopup = m12PurchasePopup;
    });
})();