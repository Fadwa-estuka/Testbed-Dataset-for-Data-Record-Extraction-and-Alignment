var isCookiesEnabled = navigator.cookieEnabled ||
    ("cookie" in document && (document.cookie.length > 0 ||
    (document.cookie = "test").indexOf.call(document.cookie, "test") > -1));

if (isCookiesEnabled === false) {
    window.location = "/fragments/app/errors/cookies_disabled.shtml";
}