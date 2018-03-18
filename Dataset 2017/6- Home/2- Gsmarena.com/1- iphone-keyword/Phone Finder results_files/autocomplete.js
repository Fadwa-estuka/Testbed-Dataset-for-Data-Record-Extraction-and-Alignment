/*********************************************

  Autocomplete parameters

*********************************************/

if (typeof AUTOCOMPLETE_MAX_LINES == "undefined") AUTOCOMPLETE_MAX_LINES = 5;
if (typeof AUTOCOMPLETE_NEWS_REVIEWS_TIMEOUT == "undefined") AUTOCOMPLETE_NEWS_REVIEWS_TIMEOUT = 1000; // in ms

if (typeof AUTOCOMPLETE_THUMB_URL == "undefined") AUTOCOMPLETE_THUMB_URL = "http://cdn2.gsmarena.com/vv/bigpic/";
if (typeof NEWS_REVIEWS_URL == "undefined") NEWS_REVIEWS_URL = "search-json.php3";
if (typeof AUTOCOMPLETE_RECENT_URL == "undefined") AUTOCOMPLETE_RECENT_URL = "history-json.php3";


/*********************************************

  Various constants, don't touch

*********************************************/

AUTOCOMPLETE_MAKERS = null;
AUTOCOMPLETE_LIST = null;
AUTOCOMPLETE_RECENT = [];

var KEY_LEFT_ARROW = 37;
var KEY_RIGHT_ARROW = 39;
var KEY_UP_ARROW = 38;
var KEY_DOWN_ARROW = 40;
var KEY_BACKSPACE = 8;
var KEY_ESCAPE = 27;
var KEY_ENTER = 13;

var AUTOCOMPLETE_MAKERID = 0;
var AUTOCOMPLETE_PHONEID = 1;
var AUTOCOMPLETE_PHONE_NAME = 2;
var AUTOCOMPLETE_SEARCH_STR = 3;
var AUTOCOMPLETE_THUMB = 4;

function Autocomplete(field, wrapper, full, position, hideImages) {
    this.field = document.getElementById(field); 
    this.wrapper = document.getElementById(wrapper) || document.querySelector(wrapper);
    this.full = full;
    this.hideImages = !!hideImages;

    // "" for main autocomplete, "1", "2", "3" for compare fields
    if (position) {
        this.position = position;
    } else { // guess
        var pos = wrapper.match(/\d$/);
        this.position = pos? pos[0] : "";
    }

    this.div = $gsm.tag("div", {"class": "autocomplete autocomplete-search autocomplete-small autocomplete-hide"}, "", this.wrapper);
    this.parent = this.div;

    this.reviewsDiv = $gsm.tag("div", {"class": "reviews-results float-left"}, "", this.div);
    $gsm.tag("span", {"class": "autocomplete-desc"}, "Reviews", this.reviewsDiv);
    this.reviewsList = $gsm.tag("ul", {}, "", this.reviewsDiv);
    var reviewsMoreLi = $gsm.tag("li", {"class": "permanent"}, "", this.reviewsList);
    this.reviewsMore = $gsm.tag("a", {"class": "more-news-link more-news-link-small", "href": "#"}, "More review results", reviewsMoreLi);
    
    this.phonesDiv = $gsm.tag("div", {"class": "phone-results"}, "", this.div);
    this.phoneLabel = $gsm.tag("span", {"class": "autocomplete-desc"/*, "style": "display: none !important;"*/}, "Last visited", this.phonesDiv);
    this.phonesList = $gsm.tag("ul", {"class": "autocomplete-last-searched"}, "", this.phonesDiv);
    this.phonesMoreLi = $gsm.tag("li", {"class": "permanent", "style": "display: none;"}, "", this.phonesList);
    this.phonesMore = $gsm.tag("a", {"class": "more-news-link more-news-link-small", "href": "#"}, "More device results", this.phonesMoreLi);

    this.newsDiv = $gsm.tag("div", {"class": "news-results float-left"}, "", this.div);
    $gsm.tag("span", {"class": "autocomplete-desc"}, "News", this.newsDiv);
    this.newsList = $gsm.tag("ul", {}, "", this.newsDiv);
    var newsMoreLi = $gsm.tag("li", {"class": "permanent"}, "", this.newsList);
    this.newsMore = $gsm.tag("a", {"class": "more-news-link more-news-link-small", "href": "#"}, "More news results", newsMoreLi);

    this.loadRecentPhones();
    
    var self = this;

    // check if parent is parent of child
    function isSubElement(child, parent) {
        while (parent != child && child != null) {
            child = child.parentNode;
        }
        return parent == child;
    }

    // hide autocomplete if you click outide it
    $gsm.addEventListener(document, "click", function (event) {
        if (!isSubElement(event.target, self.parent)) {
            self.hide();
        }
    }, true);
    // hide autocomplete if you tap outide it
    $gsm.addEventListener(document, "touchend", function (event) {
        if (!isSubElement(event.target, self.parent) && !$gsm.hasClass(self.div, "autocomplete-hide")) {
            self.hide(); 
        }
    }, true);

    // show autocomplete
    this.field.onclick = function() { 
        if (!AUTOCOMPLETE_LIST) self.loadList();
        else self.searchPhones();
    }

    // handle navigation keys
    this.field.onkeyup = function (event) {
        var query = self.field.value;
        var selected = self.div.querySelector(".autocomplete-selected");
        if (selected) $gsm.removeClass(selected, "autocomplete-selected"); // unhighlight


        if (event.which == KEY_DOWN_ARROW) {
            // nothing selected, so select first phone
            if (!selected) {
                if (self.phonesList.firstChild) {
                    $gsm.addClass(self.phonesList.firstChild.firstChild, "autocomplete-selected");
                }
            } else {
                var next = selected.parentNode.nextSibling; // next <li>
                if (!next) next = selected.parentNode.parentNode.firstChild; // first <li>
                $gsm.addClass(next.firstChild, "autocomplete-selected"); // highlight
            }

            return;
        } else if (event.which == KEY_UP_ARROW) {
            // nothing selected, select "More phones"
            if (!selected) {
                $gsm.addClass(self.phonesMore, "autocomplete-selected");
            } else {
                var prev = selected.parentNode.previousSibling; // previous <li>
                if (!prev) prev = selected.parentNode.parentNode.lastChild; // last <li>
                $gsm.addClass(prev.firstChild, "autocomplete-selected"); // highlight
            }

            return;
        } else if (event.which == KEY_LEFT_ARROW || event.which == KEY_RIGHT_ARROW) {
            // no left/right for small autocompletes
            if (!self.full) return;
            // no selection right now, can't move left/right
            if (!selected) return;

            // no query so return highlighting and do nothing more
            if (query.length == 0) {
                $gsm.addClass(selected, "autocomplete-selected");
                return;
            }

            // navigation order of reviews/phones/news lists
            var listOrder = [self.reviewsList, self.phonesList, self.newsList];

            // the parent <ul> of the selected element
            var ul = selected.parentNode.parentNode;
            // find vertical position of selected element
            for (var posY = 0; posY < ul.childElementCount; posY++) {
                if (ul.children[posY].firstChild == selected) break;
            }
            // which way is the selection going?
            var dir = (event.which == KEY_LEFT_ARROW)? -1 : 1;
            // find first <ul> in that direction that's not empty
            var posX = listOrder.indexOf(ul);
            do {
                posX = (listOrder.length + posX + dir) % listOrder.length;
            } while (listOrder[posX].childElementCount == 0);
            // make sure the vertical position doesn't go over the element count
            posY = Math.min(posY, listOrder[posX].childElementCount - 1);
            // highlight the new selected element
            $gsm.addClass(listOrder[posX].children[posY].firstChild, "autocomplete-selected");

            return;
        } else if (event.which == KEY_ESCAPE) {
            self.hide();
            return;
        }

        if (query.length >= 1) {
            self.setList(self.phonesList, []);
            self.searchPhones();
            self.searchNewsAndReviews();
        } else {
            self.showRecentPhones();
        }
    }

    // handle Enter
    this.field.onkeydown = function (event) {
        var selected = self.div.querySelector(".autocomplete-selected");

        if (event.which == KEY_ENTER) {
            if (selected) {
                event.preventDefault();
                event.stopPropagation();

                // href=# means call the onclick handler instead of following link
                if (selected.getAttribute("href") == "#") {
                    selected.onclick(event);
                    return;
                }

                window.location = selected.href;
                return;
            }
        }
    }

    // follow "More" links
    this.phonesMore.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();

        var form = self.field.parentNode;
        while (form.nodeName != "FORM") form = form.parentNode;

        form.submit();
    }
    this.newsMore.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();

        window.location = "news.php3?sSearch=" + escape(self.field.value);
    }
    this.reviewsMore.onclick = function (event) {
        event.preventDefault();
        event.stopPropagation();

        window.location = "reviews.php3?sSearch=" + escape(self.field.value);
    }

    // once we're done loading, check if the search field is focused and show autocomplete if it is
    if (document.activeElement == this.field || this.field.value !== "") {
        this.loadList();
        this.searchNewsAndReviews();
    }
}

Autocomplete.prototype.loadList = function() {
    // list already loaded or loading, do nothing
    if (AUTOCOMPLETE_LIST !== null) return;

    // trying to load list, flag it with false so it doesn't send extra requests
    AUTOCOMPLETE_LIST = false;

    var self = this;

    $gsm.xhr("GET", AUTOCOMPLETE_LIST_URL, function (data) {
        AUTOCOMPLETE_MAKERS = data[0];
        AUTOCOMPLETE_LIST = data[1];

        self.searchPhones();
    });

    // if field is empty, show recent phones
    if (this.field.value === "") this.showRecentPhones();
}

Autocomplete.prototype.loadRecentPhones = function () {
    var recentPhones = localStorage.getItem("recentPhones");
    if (recentPhones) recentPhones = JSON.parse(recentPhones);
    else recentPhones = [];

    if (typeof HISTORY_ITEM_URL != "undefined") {
        var phone = {
            href: HISTORY_ITEM_URL,
            src: HISTORY_ITEM_IMAGE,
            text: HISTORY_ITEM_NAME,
            id: HISTORY_ITEM_ID
        };

        var i = 0; 
        while (i < recentPhones.length) {
            if (recentPhones[i].id == phone.id || recentPhones[i].href == phone.href) {
                recentPhones.splice(i, 1);
            } else i++;
        }

        recentPhones.unshift(phone);
        recentPhones.splice(AUTOCOMPLETE_MAX_LINES);

        localStorage.setItem("recentPhones", JSON.stringify(recentPhones));
    }

    AUTOCOMPLETE_RECENT = recentPhones;
}

Autocomplete.prototype.setList = function(ul, list) {
    var i = 0;
    while (i < ul.childElementCount) {
        var child = ul.children[i];

        // remove all children except those with "permanent"
        if ($gsm.hasClass(child, "permanent")) i++;
        else ul.removeChild(child);
    }

    // insert elements in reverse order
    for (var i = list.length - 1; i >= 0; i--) {
        var li = document.createElement("li");
        ul.insertBefore(li, ul.firstChild);

        var a = $gsm.tag("a", {"href": list[i].href}, "", li);
        var img = $gsm.tag("img", {"src": this.hideImages? "" : list[i].src}, "", a);
        var span = $gsm.tag("span", {}, list[i].text, a);
    }
}

Autocomplete.prototype.makePhone = function (phone) {
    var self = this; 

    function makePhoneURL(phone) {
        if (phone.href) return phone.href;

        var url = AUTOCOMPLETE_MAKERS[phone[AUTOCOMPLETE_MAKERID]] + " ";
        url += phone[AUTOCOMPLETE_PHONE_NAME];
        url = url.toLowerCase().replace(/\s+|-|\/|\./g, "_"); // cleanup URL
        url += "-" + phone[AUTOCOMPLETE_PHONEID] + ".php";

        return url;
    }

    function makeCompareURL(phone) {
        var url = window.location.search;
        if (!url) url = "?";
        // remove old URL param
        url = url.replace(new RegExp("&?idPhone" + self.position + "=\\d+"), "");
        // add param separator if needed
        if (url.charAt(url.length - 1) != "?") url += "&";
        // add new URL param
        url += "idPhone" + self.position + "=";
        url += phone["id"] || phone[AUTOCOMPLETE_PHONEID];

        return window.location.pathname + url;
    }

    return  {
        href: this.full? makePhoneURL(phone) : makeCompareURL(phone),
        src: phone.src || (AUTOCOMPLETE_THUMB_URL + phone[AUTOCOMPLETE_THUMB]),
        text: phone.text || (AUTOCOMPLETE_MAKERS[phone[AUTOCOMPLETE_MAKERID]] + " " + phone[AUTOCOMPLETE_PHONE_NAME])
    }
}

Autocomplete.prototype.searchPhones = function() {
    function trim(s) {
        return s.replace(/^\s*(.*?)\s*$/, "$1");
    }

    function doMatch(l, s2, strict) {
        for (var i = 0; i < l.length; i++) {
            if (strict) {
                if (!s2.match(new RegExp("\\b" + l[i] + "\\b"))) return false;
            } else {
                if (s2.indexOf(l[i]) == -1) return false;
            }
        }

        return true;
    }

    var query = trim(this.field.value).toLowerCase();
    
    // no query so show recent phones instead
    if (query.length == 0) {
        this.showRecentPhones();
        return;
    }

    // list not loaded yet, do nothing
    if (!AUTOCOMPLETE_LIST) return;   

    this.phoneLabel.innerHTML = "Devices";
    $gsm.removeClass(this.phonesList, "autocomplete-last-searched");
    this.phonesMoreLi.style.display = "";
    this.show(); 

    var found = [];

    // check if maker is included
    var makerID = false;
    var makerName = "";
    for (maker in AUTOCOMPLETE_MAKERS) {
        var m = AUTOCOMPLETE_MAKERS[maker].toLowerCase();
        if (!m) continue;

        if (m == query.substring(0, m.length)) {
                // prefer "sony ericsson" over "sony" for s == "sony er..."
                if (makerID && makerName.length > m.length) continue;
                // ID and name of the maker
                makerID = parseInt(maker, 10);
                makerName = m;
        }
    }
    // remove maker name (if found) from search string
    if (makerID) query = trim(query.replace(new RegExp("^" + makerName), ""));

    for (var i = 0; i < AUTOCOMPLETE_LIST.length; i++) {
        var phone = AUTOCOMPLETE_LIST[i];
        if (makerID && phone[AUTOCOMPLETE_MAKERID] != makerID) continue;

        var name = phone[AUTOCOMPLETE_PHONE_NAME].toLowerCase();
        var searchStr = phone[AUTOCOMPLETE_SEARCH_STR].toLowerCase();

        // old-style search
        /*if (makerID && phone[AUTOCOMPLETE_MAKERID] == makerID && 
           (doMatch(trimmed, name) || doMatch(trimmed, searchStr) || trimmed == "")) {
            found.push(this.makePhone(phone));
        } 
        // new-style search
        else*/
        var split = query.split(/\s+/g);
        if (!split || split.length == 0) continue;
        
        if (doMatch(split, name) || doMatch(split, searchStr, true)) {
            found.push(this.makePhone(phone));
        }

        if (found.length >= AUTOCOMPLETE_MAX_LINES) break;
    }

    this.setList(this.phonesList, found);
}

Autocomplete.prototype.searchNewsAndReviews = function () {
    if (!this.full) return; // no news/reviews for small autocompletes

    this.setList(this.newsList, []);
    this.setList(this.reviewsList, []);

    var self = this;
    var query = this.field.value;
    var url = NEWS_REVIEWS_URL + "?sSearch=" + encodeURIComponent(query);

    clearTimeout(this.newsReviewsTimeout);
    this.newsReviewsTimeout = setTimeout(function () {
            if (query.length >= 1) {
                $gsm.xhr("GET", url, function (data) {
                    if (self.field.value.length == 0) return; 
                    
                    $gsm.addClass(self.div, "autocomplete-large");
                    $gsm.removeClass(self.div, "autocomplete-small");

                    data.news.splice(AUTOCOMPLETE_MAX_LINES);
                    data.reviews.splice(AUTOCOMPLETE_MAX_LINES);

                    self.setList(self.newsList, data.news);
                    self.setList(self.reviewsList, data.reviews);
                });
            }
    }, AUTOCOMPLETE_NEWS_REVIEWS_TIMEOUT);
}

Autocomplete.prototype.showRecentPhones = function () {
    this.loadRecentPhones();

    var list = [];
    for (var i = 0; i < Math.min(AUTOCOMPLETE_RECENT.length, AUTOCOMPLETE_MAX_LINES); i++) {
        list.push(this.makePhone(AUTOCOMPLETE_RECENT[i]));
    }

    if (list.length == 0) { 
        return; // no recent phones to show
    };

    this.setList(this.phonesList, list);

    this.phoneLabel.innerHTML = "Last visited";
    $gsm.addClass(this.phonesList, "autocomplete-last-searched");
    $gsm.removeClass(this.div, "autocomplete-large");
    $gsm.addClass(this.div, "autocomplete-small");
    this.phonesMoreLi.style.display = "none";

    this.show();
}

Autocomplete.prototype.hide = function() {
    $gsm.addClass(this.div, "autocomplete-hide");
}

Autocomplete.prototype.show = function() {
    $gsm.removeClass(this.div, "autocomplete-hide");
}