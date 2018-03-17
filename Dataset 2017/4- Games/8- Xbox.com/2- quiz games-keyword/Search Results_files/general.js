/// <reference path="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.js" />
/// <reference path="its.amd.js" />

(function (window) {
    var version = window.xboxComShellData ? window.xboxComShellData.version : "0.0.0.0",
        jsonSupport = (window.JSON && window.JSON.stringify);

    window.postXDMessage = function (msg, task) {
        if (jsonSupport && (window.parent && window.parent.postMessage)) {
            var activeTask = (task ? task : "");
            if (msg) {
                msg.header = {
                    taskId: activeTask,
                    version: { major: "1", minor: version }
                };
                msg.url = msg.url || window.location;
            }
            window.parent.postMessage(window.JSON.stringify(msg), '*');
        }
    };
    window.xbox = window.xbox || {};
    window.xbox.postXDMessage = window.postXDMessage;
})(window);

define('window.postXDMessage', [], function () {
    return window.postXDMessage;
});

define('common', [], function () {

    function getLocale() {
        var url = window.location.pathname.toString();
        return url.replace(/^\/(..\-..)\/.*/i, '$1').toLowerCase();
    }

    function formatString(str, col) {
        col = typeof col === 'object' ? col : Array.prototype.slice.call(arguments, 1);

        if (!str) {
            return str;
        }

        return str.replace(/\{\{|\}\}|\{(\w+)\}/g, function (m, n) {
            if (m == "{{") { return "{"; }
            if (m == "}}") { return "}"; }
            return col[n];
        });
    };

    return {
        locale: getLocale,
        formatString: formatString
    };
});
(function (window, document) {
    window.setCookie = function (name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        var domain = document.domain;
        var baseDomain = domain.substring(domain.indexOf("."), domain.length);

        document.cookie = name + "=" + value + expires + "; path=/;domain=" + baseDomain;
    };

    // name - name of the desired cookie, returns null if name is not a valid cookie.
    /* Warning: If the target cookie exists but has no value, this function will return null in IE and empty string in Firefox */
    window.getCookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
        }
        return null;
    };

    window.deleteCookie = function (name) {
        setCookie(name, "", -1);
    };
})(window, document);

(function (window, document, $) {
    /* Current User object */
    function currentUserObject() {
        this.isSignedIn = false;
        this.gamertag = "????????";
        this.profileUrl = "";
        this.tier = 0;
        this.gamerscore = 0;
        this.gamesUrl = "#";
        this.messageCount = 0;
        this.messageUrl = "#";
        this.notificationCount = 0;
        this.notificationUrl = "#";
        this.dob = null;
        this.isReady = false;
    }

    var currentUser = new currentUserObject();
    window.currentUser = currentUser;
    window.processShellData = function (shellData) {
        if (!shellData) {
            return;
        }

        currentUser.isReady = true;
        currentUser.isSignedIn = shellData.signedin;
        if (shellData.signedin) {
            updateGamerPic(shellData, $("div#ShellMeBarArea div#HeadShotBox a div"));
            $("div#ShellMeBarArea div.LinkArea").show();
            currentUser.gamertag = shellData.gamertag;

            $("div#ShellMeBarArea div#GamerStatArea h1#gamertag").html("<a href=\"" + shellData.myxboxurl + "\">" + shellData.gamertag + "</a>");
            $("div#ShellMeBarArea div#HeadShotBox").attr("title", shellData.gamertag);
            $("div#ShellMeBarArea div#HeadShotBox a").attr("href", shellData.myxboxurl);
            $(document).trigger('currentUserReady');
        }
    };

    window.processShellSubscriptionData = function (shellData) {
        if (shellData && shellData.signedin) {
            $("div#ShellMeBarArea span#AdditionalLinks span#ShellSubscriptionNotificationArea").html(createSubscriptionNotificationLinkHTML(shellData.subscriptiontext, shellData.subscriptionurl));
        }
    };

    window.processShellDataForMebarV2 = function (shellData) {
        if (!shellData) {
            return;
        }

        currentUser.isReady = true;
        currentUser.isSignedIn = shellData.signedin;
        currentUser.messageCount = shellData.messagesCount;
        if (shellData.signedin) {
            updateGamerPic(shellData, $("#headShot"));
            updateUnreadMessagesCount(shellData, $(".mebarListItem span#messageCounts"));
            updateOnlineFriendsCount(shellData, $(".mebarListItem span#onlineFriendsCount"));
            $(".mebarList").show();
            currentUser.gamertag = shellData.gamertag;
            $("div.gamerInfo ul#infoContainer li#gamerStat").html("<a href=\"" + shellData.myxboxurl + "\">" + shellData.gamertag + "</a>");
            $("#headShot").attr("title", shellData.gamertag);
            $("div#mebar div#gamerpic a").attr("href", shellData.myxboxurl);
            $(document).trigger('currentUserReady');
        }
    };

    function updateGamerPic(shellData, gamerPicElement) {
        if (gamerPicElement.prop("tagName") == "IMG") {
            try {
                // Mixed (HTTPS/HTTP) Content handling, in IE8 below code will cause script error.
                // IE9+ display warning in F12 Developer tool script console.
                gamerPicElement.attr("src", shellData.gamerpic);
            } catch (e) {
            }
        } else {
            gamerPicElement.css("background-image", "url(" + data + ")");
        }
    }

    function updateOnlineFriendsCount(shellData, onlineCountElement) {
        onlineCountElement.text(shellData.onlineFriendsCount);
    }

    function updateUnreadMessagesCount(shellData, infoElement) {
        infoElement.text(shellData.messagesCount);
    }

    function createSubscriptionNotificationLinkHTML(subscriptionText, subscriptionUrl) {
        if ((subscriptionUrl == "") || (subscriptionText == ""))
            return "";

        var html = "&nbsp;&nbsp;<a class=\"MeBarSubscriptionLink\" Name=\"MeBarSubscriptionLink\" href=\"" + subscriptionUrl + "\">";
        html += subscriptionText;
        html += "</a>";
        return html;
    }
})(window, document, jQuery);

// Cookie Banner
require(["jquery", "window"], function ($, window) {
    $(function () {
        var cookieBanner = $(".cookieBannerWrapper");
        if (cookieBanner.length > 0 && !window.getCookie("euCookie")) {
            var liveStatusNotification = $(".liveStatusNotification");
            if (liveStatusNotification.length > 0) {
                cookieBanner.detach().insertAfter(liveStatusNotification).show();
                cookieBanner.css("min-width", "0");
            } else {
                cookieBanner.show();
            }
            if ($(".xbox-header").length > 0) {
                $(".cookieBannerWrapper .bar").addClass("cookieBannerBarOnForums");
            }

            $("#cookieBannerCloseButton").click(function () {
                window.setCookie("euCookie", "1", 180);
                cookieBanner.hide();
            });
        }
    });
});

define('xbox.header.mebar', ['window'], function () {
    return {
        refresh: function () {
            if (window.LoadHeaderMeBar) {
                window.LoadHeaderMeBar(); // Defined by Header
            }
        }
    };
});

define('navigate', ['window'], function () {
    return {
        to: function (element) {
            var url = element.data('targetUrl');
            if (url) {
                if (element.hasClass("_top")) {
                    window.open(url, "_top");
                } else {
                    window.location.href = url;
                }
            }
        }
    };
});

require(['jquery', 'navigate'], function ($, navigate) {
    $('button[data-target-url], input:button[data-target-url]').click(function () {
        navigate.to($(this));
    });
});

/*************************************************
Cross Domain message interaction
*************************************************/
require(['jquery', 'window', 'window.postXDMessage'], function ($, window, postXDMessage) {
    var XDEnum = {
        "AddPaymentInstrument": 'addpaymentinstrument|ADD_CREDIT_CARD',
        "AddPaymentOption": 'addpaymentoption|ADD_CREDIT_CARD',
        "EditPaymentInstrument": 'editpaymentinstrument|EDIT_CREDIT_CARD',
        "EditPaymentOption": 'editpaymentoption|EDIT_CREDIT_CARD',
        "ManagePaymentOptions": 'selectpaymentinstrument|MANAGE_PAYMENT_OPTIONS',
        "BillingAccountInformation": 'billingaccountinformation|BILLING_ACCOUNT_INFORMATION',
        "BuyPoints": "buypoints/choosecard|BUY_POINTS",
        "BuyPointsSuccess": "buypoints/summary|BUY_POINTS_SUCESSFUL",
        "FirstPurchase": "firstpurchase|FIRST_PURCHASE",
        "ManageSubscription": "managesubscription/choosepaymentinstrument|UPGRADE_MEMBERSHIP",
        "MembershipUpgraded": "managesubscription/congrats|MEMBERSHIP_UPGRADE_SUCESSFUL",
        "BuySubscription": "subscriptions/choosepaymentoption|UPGRADE_MEMBERSHIP",
        "SubscriptionCongrats": "subscriptions/congrats|MEMBERSHIP_UPGRADE_SUCESSFUL",
        "RedeemToken": "redeemtoken|REDEEM_CODE",
        "AccountSummary": "accountsummary|ACCOUNT_SUMMARY"
    };

    var XDCurrentPath, XDCurrentPathMessage, XDCurrentPage, XDCurrentMessage;

    function processXDMessages() {
        var path = window.location.pathname.toLowerCase();

        for (var key in XDEnum) {
            getValue(XDEnum[key]);
            if (path.indexOf(XDCurrentPath) != -1) {
                XDCurrentPage = XDCurrentPath;
                XDCurrentMessage = XDCurrentPathMessage;
                if (XDCurrentMessage) {
                    postXDMessage({ message: XDCurrentMessage, verb: XDCurrentMessage }, "ACCOUNT");
                }
            }
        }
    };

    function getValue(pathInput) {
        var data = pathInput.split("|");
        if (data && data.length > 1) {
            XDCurrentPath = data[0];
            XDCurrentPathMessage = data[1];
        }
    }

    $(function () {

        $(window).on('beforeunload', function () {
            postXDMessage({ verb: "BEGIN_NAVIGATE" }, "OTHER");
        });

        processXDMessages();
        $(this).ajaxError(function (e, jqXhr) {
            if (jqXhr.status == 401) {
                window.location.reload();
            }
        });
    });
});

define('xbox.diagnostics', ['window'], function () {
    return window.itsMvcDiagnostics;
});

require(['xbox.diagnostics', 'jquery'], function (diagnostics, $) {
    $(function () {
        if (!diagnostics) {
            return;
        }
        $(this).ajaxSuccess(function (e, xhr) {
            if (xhr) {
                xhr.done(function (data) {
                    if (data && data.Diagnostics) {
                        diagnostics.ajax = diagnostics.ajax || [];
                        diagnostics.ajax.push(data.Diagnostics);
                    }
                });
            }
        });
    });
});

/*************************************************
Shell Header
*************************************************/
(function (window, $) {
    $(function () {
        if ($("#MetroHero").length != 0) {
            $("body").addClass("bodyWithMetroHero");
        }

        if ($("#ShellFooterContent").length > 0) {
            stretchFooterHeight();
            $(window).resize(stretchFooterHeight);
        }
    });

    function stretchFooterHeight() {
        var footerOffset = $("#ShellFooterContent").offset().top + 140;
        var winHeight = $(window).height();

        if (winHeight > footerOffset) {
            var offsetDiff = winHeight - footerOffset;
            $("#ShellFooterContent").css("min-height", (offsetDiff + 140) + "px");
        }
    }

    window.InitializeMobileLink = function (linkAreaSelector, desktopSelectedCookieName, mobileOverrideCookieName) {
        if (getCookie(desktopSelectedCookieName)) {
            $(linkAreaSelector).show();
            $(linkAreaSelector).click(function () {
                deleteCookie(desktopSelectedCookieName);
            });
        }

        if (mobileOverrideCookieName) {
            $("a.changeMobileVersion").click(function (e) {
                e.preventDefault();
                var type = $(this).attr("data-type");
                if (type) {
                    window.setCookie(mobileOverrideCookieName, type, 365);
                    window.location.reload();
                }
            });
        }
    };

})(window, jQuery);

/*************************************************
Search Context interaction
*************************************************/
(function (window, $, undefined) {
    window.InitializeSearchScopeDropDown = function () {
        var scopeOptions = window.xboxComShellData.searchScopeOptions;

        if (!window.xboxComShellData.activeSearchScopeOption &&
            window.xboxComShellData.defaultOptionIndex >= 0) {
            window.xboxComShellData.activeSearchScopeOption = scopeOptions[window.xboxComShellData.defaultOptionIndex];
        }

        var activeSearchScopeOption = window.xboxComShellData.activeSearchScopeOption;
        window.xboxComShellData.initialSearchScopeOption = window.xboxComShellData.activeSearchScopeOption;

        var applyWatermarkIfNeeded = function () {
            if (!$("#SearchTextBox").hasClass("WatermarkColor") && getSearchBoxUserInput() == "") {
                $("#SearchTextBox").addClass("WatermarkColor").val(window.xboxComShellData.activeSearchScopeOption.context);
            }
        };

        $("#SearchTextBox").focus(function () {
            if ($("#SearchTextBox").hasClass("WatermarkColor")) {
                $("#SearchTextBox").removeClass("WatermarkColor").val("");
            }
        });

        $("#SearchTextBox").bind("blur change", applyWatermarkIfNeeded);
        applyWatermarkIfNeeded.call();

        // Make sure jquery-ui is not unregistered. This can happen if the page has a second jquery reference
        if ($("#SearchTextBox").autocomplete === undefined) {
            return;
        }

        $("#SearchTextBox").autocomplete({
            minLength: 0,
            delay: 0,
            source: function (request, response) {
                activeSearchScopeOption = window.xboxComShellData.activeSearchScopeOption;
                response(window.xboxComShellData.searchScopeOptions);

                if (activeSearchScopeOption && activeSearchScopeOption.menuItem) {
                    this.menu.activate(null, activeSearchScopeOption.menuItem);
                }

                // Once we upgrade to an autocomplete version that provides _resizeMenu function, move the resize code there
                // We need to set the width of the autocomplete text to prevent it from wrapping under the categories
                var resizeTarget = $("#ShellAutocompleteText");
                var siblingWidth = 0;
                resizeTarget.siblings().each(function () {
                    siblingWidth += $(this).outerWidth(true);
                });
                var paddingWidth = resizeTarget.outerWidth() - resizeTarget.width();
                var maxAllowedWidth = resizeTarget.parent().width() - siblingWidth - paddingWidth - 1;
                if (resizeTarget.width() > maxAllowedWidth) {
                    resizeTarget.width(maxAllowedWidth);
                }
            },
            focus: function (event, ui) {
                activeSearchScopeOption = ui.item;
                SetSearchContext(activeSearchScopeOption);
                return false;
            },
            select: function (event, ui) {
                activeSearchScopeOption = ui.item;
                SetSearchContext(activeSearchScopeOption);
                showSearchResults();
                return false;
            },
            close: function (event) {
                $(window).unbind("resize.xboxAutocomplete");
            }
        });

        var autoComplete = $("#SearchTextBox").data("autocomplete");

        autoComplete._renderMenu = function (ul, items) {
            var self = this;
            ul.attr("id", "ShellScopeDropDown").append(
                $("<ul>").attr("id", "ShellAutocompleteCategories"),
                $("<img>").attr("src", "/Shell/images/search/arrow.png"),
                $("<ul>").attr("id", "ShellAutocompleteText"));

            $.each(scopeOptions, function (index, item) {
                self._renderItem(ul, item);
            });

            $(window).bind("resize.xboxAutocomplete", function () {
                if (autoComplete.menu.element.is(":visible")) {
                    autoComplete.close();
                }
            });
        };

        autoComplete._renderItem = function (ul, item) {
            var userInputText = getSearchBoxUserInput();
            var scopeResult = $("<li>")
                .data("item.autocomplete", item)
                .mousedown(function (event) {
                    $("#SearchTextBox").data("autocomplete").menu.activate(event, $(this));
                })
                .append($("<a>").text(item.label))
                .appendTo(ul.children("#ShellAutocompleteCategories"));

            var textSearchResult = $("<li>").text('"' + userInputText + '"').appendTo(ul.children("#ShellAutocompleteText"));

            scopeResult.data("matchingSearchTextItem", textSearchResult);

            if (item == activeSearchScopeOption) {
                activeSearchScopeOption.menuItem = scopeResult;
            }

            return scopeResult;
        };

        // Update active search text item whenever we activate search scope items
        autoComplete.menu.baseActivate = autoComplete.menu.activate;
        autoComplete.menu.activate = function (event, item) {
            autoComplete.menu.baseActivate(event, item);
            $(".ShellFocusedAutocompleteText").removeClass("ShellFocusedAutocompleteText");
            item.data("matchingSearchTextItem").addClass("ShellFocusedAutocompleteText");
        };

        // This is overriden to remove mouse over and mouse out behavior
        autoComplete.menu.refresh = function () {
            var self = this;
            var items = this.element.children("ul").children("li:not(.ui-menu-item):has(a)")
                .addClass("ui-menu-item")
                .attr("role", "menuitem")
                .mouseenter(function (event) {
                    if (this != self.active[0]) {
                        // The menu item itself gets highlighted through CSS a:hover. This is just for the matching text item.
                        $(this).data("matchingSearchTextItem").addClass("ShellFocusedAutocompleteText");
                    }
                })
                .mouseleave(function () {
                    if (this != self.active[0]) {
                        $(this).data("matchingSearchTextItem").removeClass("ShellFocusedAutocompleteText");
                    }
                });

            items.children("a")
                .addClass("ui-corner-all")
                .attr("tabindex", -1);
        };

        // This is overriden to change edge menu item behavior
        autoComplete._move = function (direction, event) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, event);
                return;
            }

            if (direction == "previous" && this.menu.active.prev(".ui-menu-item").length == 0 ||
                direction == "next" && this.menu.active.next(".ui-menu-item").length == 0 ||
                    direction == "previousPage" || direction == "nextPage") {
                return;
            }

            this.menu[direction](event);
        };
    };

    window.SelectSearchContext = function (callback) {
        var allOptions = window.xboxComShellData.searchScopeOptions;
        if (!allOptions) {
            return;
        }

        var context = null;
        $.each(allOptions, function (index, item) {
            if (callback.call(this, item)) {
                context = item;
                return false; // equivalent to loop break
            }
        });

        SetSearchContext(context);
    };

    function getSearchBoxUserInput() {
        return $.trim($('#SearchTextBox').val());
    }

    function SetSearchContext(context) {
        if (!context) {
            return;
        }

        window.xboxComShellData.activeSearchScopeOption = context;

        $('#SearchButton').attr("title", context.context);

        var searchTextBox = $("#SearchTextBox");
        searchTextBox.attr("title", context.context)
                     .attr("url", context.value);

        if (searchTextBox.hasClass("WatermarkColor")) {
            searchTextBox.val(context.context);
        }
    }

    //give the below function global scope so it can be accessed by the page level scripts in shell header
    window.showSearchResults = function () {
        var searchTextBox = $("#SearchTextBox");
        if (searchTextBox.hasClass("WatermarkColor")) {
            searchTextBox.focus();
            return;
        }

        var searchText = encodeURIComponent(getSearchBoxUserInput());
        var url = searchTextBox.attr("url");
        var s = window.s;

        if (searchText != undefined && searchText != '') {

            if (s != undefined) {
                s.eVar31 = (window.xboxComShellData.activeSearchScopeOption.id === window.xboxComShellData.initialSearchScopeOption.id) ? "Default" : "Override"
                         + " : " + window.xboxComShellData.activeSearchScopeOption.id;
                s.events = "event37";
                s.linkTrackEvents = "event37";
                s.linkTrackVars = "events,eVar2,eVar31";
                try {
                    s.tl(this, "o", "Search : Dropdown Click : " + s.eVar31);
                } catch (e) {
                }
            }

            url = url.replace('{0}', searchText);
            window.top.location = url;
        }
    };

})(window, jQuery);

(function (window, $) {
    window.MessageLevelType = { "Confirmation": 0, "Warning": 1, "Error": 2 };
    function setDialogMessageLevel(MessageLevel) {
        $('.ui-widget-header, .ui-dialog').removeClass('WarningDialog ErrorDialog ConfirmDialog');

        switch (MessageLevel) {
            case 1:
                $('.ui-widget-header, .ui-dialog').addClass('WarningDialog');
                break;
            case 2:
                $('.ui-widget-header, .ui-dialog').addClass('ErrorDialog');
                break;
            default:
                $('.ui-widget-header, .ui-dialog').addClass('ConfirmDialog');
        }
    }

    var DisplayConfirmationDialog_Dialog;
    window.DisplayConfirmationDialog = function (TitleText, BodyText, YesText, NoText, YesCallbackFunction, NoCallbackFunction, Context, MessageLevel, width) {
        YesCallbackFunction = YesCallbackFunction || function () { };
        NoCallbackFunction = NoCallbackFunction || function () { };
        width = width || 400;

        var buttonsObj = {};
        buttonsObj[YesText] =
            function () {
                YesCallbackFunction(Context);
                $(this).dialog("close");
            };

        buttonsObj[NoText] =
            function () {
                NoCallbackFunction(Context);
                $(this).dialog("close");
            };

        if (!DisplayConfirmationDialog_Dialog) {
            var dialogObj = {
                autoOpen: false,
                title: "<span class=\"Icon\"></span>" + TitleText,
                closeText: "",
                draggable: false,
                modal: true,
                resizable: false,
                width: width
            };

            DisplayConfirmationDialog_Dialog = $('<div></div>').dialog(dialogObj);
        }

        DisplayConfirmationDialog_Dialog.html(BodyText);
        DisplayConfirmationDialog_Dialog.dialog("option", "buttons", buttonsObj);
        setDialogMessageLevel(MessageLevel);

        var buttonSet = DisplayConfirmationDialog_Dialog.closest(".ui-dialog").find(".ui-dialog-buttonset");
        buttonSet.find('button:first')
            .addClass('ConfirmButton')
            .attr("name", "confirm");
        buttonSet.find('button:last')
            .addClass('CancelButton')
            .attr("name", "cancel");

        DisplayConfirmationDialog_Dialog.dialog('open');
    };

    window.DisplayMessageDialog = function (TitleText, BodyText, OkText, OkCallbackFunction, MessageLevel, width) {
        OkCallbackFunction = OkCallbackFunction || function () { };

        var buttonsObj = {};
        buttonsObj[OkText] =
            function () {
                OkCallbackFunction();
                $(this).dialog("close");
            };

        var dialogObj = {
            autoOpen: false,
            title: "<span class=\"Icon\"></span>" + TitleText,
            modal: true,
            draggable: false,
            resizable: false,
            width: width || 400,
            buttons: buttonsObj
        };

        var messageDialog = $('<div></div>').html(BodyText).dialog(dialogObj);

        setDialogMessageLevel(MessageLevel);

        messageDialog.dialog('open');
    };

    define('xbox.dialogs', ['window'], function (window) {
        return {
            message: window.DisplayMessageDialog,
            confirm: window.DisplayConfirmationDialog,
            levelType: window.MessageLevelType
        };
    });
})(window, jQuery);

(function (window, $) {
    var threatMetrixTimeoutReached = false;
    var threatMetrixNextButtonClicked = false;
    window.enableThreatMetrixTimer = function (nextButtonId) {
        $(function () {
            window.setTimeout(function () {
                threatMetrixTimeoutReached = true;
                if (threatMetrixNextButtonClicked == true) {
                    $('#' + nextButtonId).click();
                }
            }, 3000);
        });
    };
    window.performThreatMetrixAction = function (nextButtonPostId) {
        if ($('#ThreatMetrixIframe').length <= 0) {
            return true;
        }

        threatMetrixNextButtonClicked = true;
        showModalLoadingAnimation();
        if (threatMetrixTimeoutReached != true) {
            return false;
        }
        if (nextButtonPostId.length > 0) {
            window.__doPostBack(nextButtonPostId, '');
        }
        return true;
    };
})(window, jQuery);

define('threatMetrix', ['window'], function (window) {
    return { enableTimer: window.enableThreatMetrixTimer, performAction: window.performThreatMetrixAction };
});

(function (window, $) {
    var modalLoadingAnimationDialog = null;
    window.showModalLoadingAnimation = function () {
        // reuse some of the jquery UI modal dialog 
        var dialogObj = { dialogClass: "loading-dialog", autoOpen: true, modal: true, draggable: false, resizable: false, closeOnEscape: false };

        if (modalLoadingAnimationDialog == null) {
            postXDMessage({ verb: "BEGIN_NAVIGATE" }, "OTHER");
            modalLoadingAnimationDialog = $('<div></div>').dialog(dialogObj);
        }
    };
    window.hideModalLoadingAnimation = function () {
        if (modalLoadingAnimationDialog != null) {
            postXDMessage({ verb: 'CURRENT_PAGE', uri: window.location.href }, "OTHER");
            modalLoadingAnimationDialog.dialog('close');
        }
        modalLoadingAnimationDialog = null;
    };
})(window, jQuery);

define('window.showModalLoadingAnimation', ['window.postXDMessage'], function () {
    return window.showModalLoadingAnimation;
});

define('window.hideModalLoadingAnimation', ['window.postXDMessage'], function () {
    return window.hideModalLoadingAnimation;
});

/*************************************************
Media Control - carousel to show content, images and SL video player
*************************************************/
(function (window, $) {
    var mcLastControl;
    var mcLastPage;
    var mcSelectedFormat;
    var mcUnselectedFormat;

    window.mcInitialize = function (startPageIds, selectedFormat, unselectedFormat) {
        mcSelectedFormat = selectedFormat;
        mcUnselectedFormat = unselectedFormat;

        for (var s in startPageIds) {
            var startPageId = startPageIds[s];
            if (startPageId.length > 0) {
                var startPage = $(startPageId);
                if (startPage.length === 1) {
                    mcSetPage(startPage, null, null, null, true);
                    $(startPage).children('img').load(function () { mcCompensateImageRatio($(this)); });
                    break;
                }
            }
        }
    };

    window.mcClick = function (e) {
        var page, showPage, hidePage;
        var duration = 750;
        var easing = 'easeInOutQuart';

        switch (e.id) {
            case 'next':
                {
                    page = mcLastPage.nextAll('.TabPage').first();
                    if (!page.length)
                        page = mcLastPage.siblings('.TabPage').first();
                    showPage = function (a) { a.show('slide', { direction: 'right', easing: easing }, duration) };
                    hidePage = function (a) { a.hide('slide', { direction: 'left', easing: easing }, duration) };
                    mcSetPage(page, showPage, hidePage);
                    break;
                }
            case 'previous':
                {
                    page = mcLastPage.prevAll('.TabPage').first();
                    if (!page.length)
                        page = mcLastPage.siblings('.TabPage').last();
                    showPage = function (a) { a.show('slide', { direction: 'left', easing: easing }, duration) };
                    hidePage = function (a) { a.hide('slide', { direction: 'right', easing: easing }, duration) };
                    mcSetPage(page, showPage, hidePage);
                    break;
                }
            default:
                {
                    if (e && e.id && mcLastControl != e) {
                        page = $('#' + e.id + '1');
                        showPage = function (a) { a.fadeIn(); };
                        hidePage = function (a) { a.fadeOut(); };
                        mcSetPage(page, showPage, hidePage, e);
                    }
                }
        }
    };

    function mcCompensateImageRatio(image) {
        var expectedHeight = $('#MediaControl').height();
        if (image && image.length && image.length == 1) {
            var imageHeight = image[0].height;
            if (imageHeight > expectedHeight) {
                image.css('margin-top', '-' + (imageHeight - expectedHeight) / 2 + 'px');
            };
        }
    }

    function mcSetPage(page, showPage, hidePage, control, first) {
        if (!showPage) {
            showPage = function (a) { a.show(); };
        }
        if (!hidePage) {
            hidePage = function (a) { a.hide(); };
        }
        if (!control) {
            control = mcLastControl;
        }
        if (page.length && mcLastPage != page) {
            if (mcLastPage) {
                closeVideoViewer();
                hidePage($(mcLastPage));
            }

            showPage(page);
            if (first != true) {
                mcCompensateImageRatio(page.children('img'));
            }
            mcLastPage = page;

            if (!mcLastControl || page[0].id.indexOf(mcLastControl.id) != 0) {
                control = document.getElementById(page[0].id.replace(/\d+$/, ''));
            }

            if (mcLastControl != control) {
                if (mcLastControl) {
                    var x = $(mcLastControl);
                    x.parent().removeClass('Selected');
                    var pages1 = $('.TabPage[id^={0}]'.formatWith(mcLastControl.id));
                    x.children('.index').text(mcUnselectedFormat.formatWith(pages1.length));
                }
                if (control) {
                    $(control).parent().addClass('Selected');
                }
                mcLastControl = control;
            }

            var pages2 = $('.TabPage[id^={0}]'.formatWith(control.id));
            var index = page[0].id.replace(/^[^\d]+/, '');
            $(control).children('.index').text(mcSelectedFormat.formatWith(index, pages2.length));
        }

        mcInitializeTextScroll();
    }

    function mcInitializeTextScroll() {
        $(function () {
            var DescriptionText = $('#MediaControl #overview1 p');
            var ScrollTestContainer = $('#ScrollTest');

            //Don't call until container is visible on screen
            if (ScrollTestContainer.is(':hidden') && DescriptionText.width() > 0) {
                var DescriptionTextDownArrow = $('#MediaControl #downArrow');
                var DescriptionTextUpArrow = $('#MediaControl #upArrow');
                var ScrollTest = DescriptionText.clone().appendTo(ScrollTestContainer);
                ScrollTestContainer.show();

                //set fixed width and remove fixed height
                ScrollTest.css('height', 'auto');
                ScrollTest.css('width', DescriptionText.width() + 'px');

                //hide cloned div off screen
                ScrollTest.css('position', 'fixed');
                ScrollTest.css('top', 0);
                ScrollTest.css('left', '-' + ScrollTest.css('width'));

                //get actual calculated heights of the div and cloned div
                if (ScrollTest.height() > DescriptionText.height()) {
                    DescriptionTextUpArrow.show();
                    DescriptionTextDownArrow.show();

                    DescriptionTextUpArrow.click(function () {
                        DescriptionText.animate({ scrollTop: '-=50px' }, 'slow');
                    });

                    DescriptionTextDownArrow.click(function () {
                        DescriptionText.animate({ scrollTop: '+=50px' }, 'slow');
                    });
                }

                ScrollTestContainer.html(''); //Remove cloned text div
            }
        });
    }
})(window, jQuery);

(function (window, $) {
    var _addRequestVerificationToken = function (data) {
        var token = $('input[name="__RequestVerificationToken"]').val();
        if (!!token) {
            return $.extend({}, data, { '__RequestVerificationToken': token });
        }

        return data;
    };

    var _postWithToken = function (url, data, callback, type) {
        var dataWithToken = data;

        if ($.isPlainObject(data)) {
            dataWithToken = _addRequestVerificationToken(data);
        }

        return $.post(url, dataWithToken, callback, type);
    };
    $.extend({ postWithToken: _postWithToken });
})(window, jQuery);

(function (window, $) {
    $(function () {
        $(".phoneAppBuyButton").bind("click", function () {
            window.open($(this).attr("value"), '_blank');
        });
    });
})(window, jQuery);

/*************************************************
Video Player - calls to launch video player  
*************************************************/
(function (window, $) {
    window.closeVideoViewer = function () {
        var host = $('#silverlightVideoHost');
        if (host.size() > 0) {
            window.xbox.videoPlayer.closeSilverlightObject('silverlightVideoHost');
            $('.silverlightVideoHost').show();
        }
    };

    window.openSplashVideoViewer = function (url, mediaTitle, minimumAge, culture, uiCulture) {
        closeVideoViewer();

        $('.silverlightVideoHost').hide();
        var host = $('#silverlightVideoHost');

        host.height(host.parent().innerHeight());
        host.width(host.parent().innerWidth());
        window.xbox.videoPlayer.openVideoOther('silverlightVideoHost', 'silverlightVideoObject', url, mediaTitle, minimumAge, culture, uiCulture, 'onCloseVideoViewer');
    };

    window.openVideoViewer = function (url, mediaTitle, ratingID, ratingDescriptorIDs, minimumAge, culture, uiCulture) {
        closeVideoViewer();

        $('.silverlightVideoHost').hide();
        var host = $('#silverlightVideoHost');

        host.height(host.parent().innerHeight());
        host.width(host.parent().innerWidth());
        window.xbox.videoPlayer.openVideoGameVideo('silverlightVideoHost', 'silverlightVideoObject', url, mediaTitle, ratingID, ratingDescriptorIDs, culture, uiCulture, 'onCloseVideoViewer');
    };

    window.onCloseVideoViewer = function (sender, e) {
        closeVideoViewer();
    };

    /* Carousel Video Player */
    function resetVideoCarouselStyle() {
        $('#SilverlightWrapper').show();
        // Unselect all thumbnails
        $("#genreslider ul li .tile_img").removeClass("selected");
    }

    function closeVideoCarouselViewer() {
        window.xbox.videoPlayer.closeSilverlightObject('silverlightVideoCarouselHost');

        var host = $('#VideoPlayerWrapper');
        if (host.size() > 0) {
            host.hide();
        }
    }

    window.clearVideoCarouselViewer = function () {
        closeVideoCarouselViewer();
        resetVideoCarouselStyle();
    };

    window.openVideoCarouselViewer = function (url, mediaTitle, minimumAge, culture, uiCulture) {
        closeVideoCarouselViewer();

        var wrapper = $('#SilverlightWrapper');
        if (wrapper.size() > 0) {
            wrapper.hide();
        }

        var hostWrapper = $('#VideoPlayerWrapper');
        if (hostWrapper.size() > 0) {
            hostWrapper.show();
        }

        var host = $('#silverlightVideoCarouselHost');
        if (host.size() > 0) {
            host.height(host.parent().innerHeight());
            host.width(host.parent().innerWidth());
        }

        window.xbox.videoPlayer.openVideoOther('silverlightVideoCarouselHost', 'silverlightVideoCarouselObject', url, mediaTitle, minimumAge, culture, uiCulture, 'onCloseVideoCarouselViewer');
    };

    window.onCloseVideoCarouselViewer = function (sender, e) {
        window.clearVideoCarouselViewer();
    };
})(window, jQuery);

/* Popup Video Player */
(function (window, $) {
    var posUtils = {
        getScrollPos: function () {
            var docElem = document.documentElement;
            return {
                scrollX: document.body.scrollLeft || window.pageXOffset || (docElem && docElem.scrollLeft),
                scrollY: document.body.scrollTop || window.pageYOffset || (docElem && docElem.scrollTop)
            };
        },

        getPageSize: function () {
            return {
                width: window.innerWidth || (document.documentElement && document.documentElement.clientWidth) || document.body.clientWidth,
                height: window.innerHeight || (document.documentElement && document.documentElement.clientHeight) || document.body.clientHeight
            };
        },

        getElementSize: function (obj) {
            return {
                width: obj.width(),
                height: obj.height()
            };
        }
    };
    function popupBoxObject() {
        this.BackGround = $('#popupBackground');
        this.VideoWrapper = $('#popupVideoPlayer');
        this.VideoHost = $('#silverlightVideoPopupHost');
        this.State = "";
        this.SetPosition = function () {
            var pageSize = posUtils.getPageSize();
            var scrollPos = posUtils.getScrollPos();
            var contentSize = posUtils.getElementSize(this.VideoWrapper);
            var left = Math.round((pageSize.width - contentSize.width) / 2);
            var top = Math.round((pageSize.height - contentSize.height) / 2);
            this.VideoWrapper.css('left', left + 'px');
            this.VideoWrapper.css('top', top + 'px');
        };
        this.Show = function () {
            this.BackGround.css('display', 'block');
            this.VideoWrapper.css('display', 'block');
            this.VideoWrapper.css('visibility', 'visible');
            this.VideoHost.width(posUtils.getElementSize(this.VideoWrapper).width);
            this.VideoHost.height(posUtils.getElementSize(this.VideoWrapper).height);
            this.State = "visible";
            window.onresize = ResetVisiblePopup;
            this.SetPosition();
            this.VideoHost.focus();
        };
        this.Hide = function () {
            this.BackGround.css('display', 'none');
            this.VideoWrapper.css('display', 'none');
            this.VideoWrapper.css('visibility', 'hidden');
            this.State = "hidden";
        };
    }

    var popupBox = new Object;

    function ResetVisiblePopup() {
        if (popupBox.State == "visible") {
            popupBox.SetPosition();
        }
    }

    window.closeVideoPopupViewer = function () {
        xbox.videoPlayer.closeSilverlightObject('silverlightVideoPopupHost');
        popupBox.Hide();
    };

    function openVideoMarketplacePopup(mediaId, mediaTitle, culture, uiCulture, callback) {
        popupBox = new popupBoxObject();
        popupBox.Show();
        if (callback && "function" == typeof callback) {
            callback('silverlightVideoPopupHost', 'silverlightVideoPopupObject', mediaId, mediaTitle, culture, uiCulture, 'onCloseVideoPopup');
        }
    }

    window.onCloseVideoPopup = function (sender, e) {
        closeVideoPopupViewer();
    };

    window.openVideoPopup = function (url, mediaTitle, minimumAge, culture, uiCulture) {
        window.clearVideoCarouselViewer();
        popupBox = new popupBoxObject();
        popupBox.Show();
        xbox.videoPlayer.openVideoOther('silverlightVideoPopupHost', 'silverlightVideoPopupObject', url, mediaTitle, minimumAge, culture, uiCulture, 'onCloseVideoPopup');
    };

    window.openVideoTVEpisodePopup = function (mediaId, mediaTitle, culture, uiCulture) {
        openVideoMarketplacePopup(mediaId, mediaTitle, culture, uiCulture, xbox.videoPlayer.openVideoTVEpisode);
    };

    window.openVideoMoviePopup = function (mediaId, mediaTitle, culture, uiCulture) {
        openVideoMarketplacePopup(mediaId, mediaTitle, culture, uiCulture, xbox.videoPlayer.openVideoMovie);
    };

    window.openVideoMovieTrailerPopup = function (mediaId, mediaTitle, culture, uiCulture) {
        openVideoMarketplacePopup(mediaId, mediaTitle, culture, uiCulture, xbox.videoPlayer.openVideoMovieTrailer);
    };
})(window, jQuery);

/*************************************************
Extensions
*************************************************/

(function ($) {
    $.extend($, {
        range: function (first, last) {
            var result = new Array(Math.abs(last - first));
            var i = first;
            if (last > first) {
                for (; i <= last; i++) {
                    result[i] = i;
                }
                return result;
            }
            else {
                for (; i >= last; i--) {
                    result[i] = i;
                }
                return result.reverse();
            }
        }
    });

    String.prototype.formatWith = function () {
        var s = this;
        for (var i = 0; i < arguments.length; i++) {
            var reg = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(reg, arguments[i]);
        }
        return s;
    };


    Date.MvcDate = function (mvcDate) {
        return new Date(parseInt(mvcDate.replace(/\/Date\((-?\d+)\)\//gi, "$1")));
    };

})(jQuery);

// Marquee behavior to scroll longer text inside parent. Both parent and text element must have position set (parent at least relative, text - absolute).
(function ($) {
    $.fn.clickMarquee = function (options) {
        var settings = $.extend({ minScrollTime: 5000, scrollSpeed: 25, returnTime: 1000, additionalMargin: 50 }, options);

        return this.each(function () {
            var $this = $(this);
            if ($this.data("clickMarquee")) {
                return;
            }

            $this.data("clickMarquee", { isScrolling: false, options: settings });

            $(this).click(function () {
                var itemData = $this.data("clickMarquee");
                if (itemData.isScrolling) {
                    return;
                }
                var shiftLeft = $this.width() - $this.parent().width() + itemData.options.additionalMargin;
                if (shiftLeft <= 0) {
                    return;
                }
                var scrollTime = Math.max(itemData.options.minScrollTime, shiftLeft * itemData.options.scrollSpeed);
                var originalLeft = $this.position().left;
                var targetLeft = originalLeft + shiftLeft;

                itemData.isScrolling = true;
                $this.animate({ left: "-=" + targetLeft }, scrollTime, "linear", function () {
                    itemData.isScrolling = false;
                    $this.animate({ left: originalLeft }, itemData.options.returnTime);
                }
                );
            });
        }); //each
    };
})(jQuery);

/*************************************************
Client-side query string parser
*************************************************/

(function ($) {
    var qObj;
    $.queryString = function () {
        if (!qObj) {
            qObj = {};
            var queryString = window.location.search.substring(1);
            var keyValuePairs = queryString.split("&");

            var pairs = $.map(keyValuePairs, function (val, i) {
                var pair = val.split("=");
                return {
                    name: decodeURIComponent(pair[0]),
                    value: decodeURIComponent(pair[1])
                };
            });

            $(pairs).each(function () {
                qObj[this.name] = this.value;
            });
        }
        return qObj;
    };
})(jQuery);

/*************************************************
Footer Nav Link Functions
*************************************************/

$(function () {
    var footerFeedbackLink = $('.spread[href*="Feedback.aspx"]');

    footerFeedbackLink.click(function () {

        window.open(footerFeedbackLink.attr("href") + '&UrlReferrer=' + escape(window.location.href), 'Feedback',
    'scrollbars=yes,menubar=no,titlebar=no,location=no,width=500,height=650,resizable=yes'); return false;
    });

    footerFeedbackLink.keypress(function () {

        window.open(footerFeedbackLink.attr("href") + '&UrlReferrer=' + escape(window.location.href), 'Feedback',
    'scrollbars=yes,menubar=no,titlebar=no,location=no,width=500,height=650,resizable=yes'); return false;

    });
});

define('xbox.dialog.moresocial', ['jquery', 'window', 'document'], function ($, window, document) {
    var moreDialog = $('#FooterSocialMoreDialog').dialog({
        autoOpen: false,
        width: 431,
        modal: true,
        resizable: false,
        draggable: false,
        dialogClass: 'ui-dialog-socialmore'
    });

    $('.footerSocialMoreRow', moreDialog).click(function (rowClickEvent) {
        rowClickEvent.preventDefault();

        var actionUrl = $(this).attr('data-action');
        actionUrl = actionUrl.replace('{pageUrl}', encodeURIComponent(window.location.href));
        actionUrl = actionUrl.replace('{pageTitle}', encodeURIComponent(document.title));
        window.open(actionUrl, '_blank');
    });
    return moreDialog;
});

require(['jquery', 'xbox.dialog.moresocial'], function ($, socialMoreDialog) {
    $(function () {
        $('.FooterSocialMore').click(function (moreClickEvent) {
            socialMoreDialog.dialog('open');
            moreClickEvent.preventDefault();
        });
    });
});

// Common modules
define('messageBroker', ['jquery', 'console'], function ($, console) {
    var subscriptions = {};
    return {
        subscribe: function (name, fn) {
            if (!name || !fn || !$.isFunction(fn)) {
                throw new Error('Invalid Subscribe: ' + name + ': ' + fn);
            }
            subscriptions[name] = subscriptions[name] || [];
            subscriptions[name].push(fn);
        },
        publish: function (name, data) {
            if (subscriptions[name]) {
                console.log('Firing ' + name);
                $.each(subscriptions[name], function () {
                    this(data);
                });
            } else {
                console.log('No subscriber for message: ' + name);
            }
        },
        lazyPublish: function (name, data) {
            var self = this;
            return function () {
                self.publish(name, data);
            };
        },
        curriedPublish: function (name) {
            var self = this;
            return function (data) {
                self.publish(name, data);
            };
        },
        clear: function (name) {
            if (!name) {
                subscriptions = {};
                return;
            }
            subscriptions[name] = [];
        }
    };
});

define('today', [], function () {
    return new Date();
});

define('browsercaps', ['navigator', 'jquery'], function (navigator, $) {
    return {
        silverlight: function () {
            try {
                new ActiveXObject('AgControl.AgControl');
                return true;
            }
            catch (e) {
                try {
                    if (navigator.plugins["Silverlight Plug-In"]) {
                        return true;
                    }
                }
                catch (e) {
                }
            }

            return false;
        },
        webgl: function () {
            try {
                // Enable WebGl by Default or webgl=true
                var queryString = $.queryString();
                for (var name in queryString) {
                    if (queryString.hasOwnProperty(name)
                        && name.toLowerCase() === 'webgl' 
                        && queryString[name].toLowerCase() === 'false') {
                        return false;
                    }
                }
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                return !!ctx;
            } catch (e) {
            }
            return false;
        },
        plugins: function () {
            if (navigator.userAgent.match(/(Xbox)/g)) {
                return false;
            }
            return true;
        },
        windowsApp: function () { return navigator.userAgent.match(/Windows NT 6.[23]/g); },
        supports: function (capability) {
            var check = new $.Deferred();
            if (capability()) {
                check.resolve();
            }
            else {
                check.reject();
            }

            return check.promise();
        },
        supportsAny: function () {
            var check = new $.Deferred();
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i]()) {
                    return check.resolve().promise();
                }
            }

            return check.reject().promise();
        }
    };
});

require(['browsercaps'], function (caps) {
    caps.supports(caps.silverlight)
        .fail(function () { $('body').addClass('silverlight-unsupported'); });
});

define('css.addClass', ['jquery'], function ($) {
    return {
        addClassToFirst: function (selector, className) {
            selector = $(selector);

            selector.first().addClass(className);

            return this;
        },

        addClassToLast: function (selector, className) {
            selector = $(selector);

            selector.last().addClass(className);

            return this;
        },

        addClassOnClick: function (selector, className) {
            selector = $(selector);

            selector.click(function () {
                selector.removeClass(className);

                $(this).addClass(className);
            });

            return this;
        }
    };
});


(function ($) {
    var attributeEncode = function (value) {
        var element = $("<div></div>");
        element.attr("foo", value);
        var outer = $("<div></div>").html(element);
        var markup = outer.html();
        var start = "<div foo=\"".length;
        var end = "\"></div>".length;
        return markup.substr(start, markup.length - end - start);
    };

    var htmlEncode = function (value) {
        var element = $("<div></div>");
        element.text(value);
        return element.html();
    };

    // Extend the jQuery object with helpers
    $.extend({
        attributeEncode: attributeEncode,
        htmlEncode: htmlEncode
    });
})(jQuery);

/**************Search********************/
require(["window", "document", "jquery"], function (window, document, $) {
    $(function () {
        if ($("#shellSearchContainer").length < 1)
            return;

        $("#shellSearchContainer").click(function (e) {
            if ($(this).hasClass("opened")) {
                showSearchResult();
            }
            else {
                $("div#shellSearchContainer").addClass("opened");
                $("#searchBoxWrapper").stop(true);
                $("#searchBoxWrapper").animate({ width: "192px" }, 200, function () {
                    $("#searchTextBox").focus();
                });
            }
            e.stopPropagation();
            return false;
        });
        var $searchTextBox = $("#searchTextBox");
        var $searchCloseIcon = $("#searchCloseIcon");
        var $searchBoxWrapper = $("#searchBoxWrapper");
        var $searchTextContainer = $("#searchTextContainer");
        $searchTextBox.click(function (e) {
            e.stopPropagation();
            return false;
        });
        $searchTextContainer.click(function (e) {
            e.stopPropagation();
            return false;
        });
        $searchTextBox.keydown(function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 13) {
                showSearchResult();
                return false;
            } else if (keyCode == 27) {
                clearSearchText();
                return false;
            }
            return true;
        });

        $searchTextBox.on("input propertychange keyup", function () {
            updateCloseIconStyle();
        });

        $searchCloseIcon.click(function (e) {
            clearSearchText();
            return false;
        });

        $(document).click(function (e) {
            closeSearchBox();
        });

        function showSearchResult() {
            closeSearchBox();
            var searchText = getSearchText();
            var url = $searchTextBox.data("url");
            if (searchText) {
                trackSearch();
                window.top.location = url.replace("{0}", encodeURIComponent(searchText));
            }
        }

        function getSearchText() {
            return $.trim($searchTextBox.val());
        }

        function closeSearchBox() {
            $("#searchBoxWrapper").animate({ width: "0" }, 150, function () {
                $("div#shellSearchContainer").removeClass("opened");
            });
        }

        function trackSearch() {
            var s = window.s;
            if (s) {
                s.eVar31 = "Default" + " : " + window.xboxComShellData.searchScopeOptions[window.xboxComShellData.defaultOptionIndex].id;
                s.events = "event37";
                s.linkTrackEvents = "event37";
                s.linkTrackVars = "events,eVar2,eVar31";
                try {
                    s.tl(this, "o", "Search : Dropdown Click : " + s.eVar31);
                } catch (e) {
                }
            }
        }

        function clearSearchText() {
            $searchTextBox.val('');
            $searchTextBox.focus();
            updateCloseIconStyle();
        }

        function updateCloseIconStyle() {
            if (getSearchText()) {
                $searchBoxWrapper.addClass("clearable");
            } else {
                $searchBoxWrapper.removeClass("clearable");
            }
        }
    });
});