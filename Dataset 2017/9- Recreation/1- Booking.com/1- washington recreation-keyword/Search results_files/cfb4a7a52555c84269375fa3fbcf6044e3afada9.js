var _i_ = window._i_ || function() {}, _r_ = window._r_ || function(i) {
return i;
};

booking[sNSStartup].disam_clickable_tile = {
init:function() {
_i_("c84:1"), $(".clickable_tile").click(function(i) {
_i_("c84:2"), "a" != i.target.tagName.toLowerCase() && (window.location.href = $(this).data("url")), _r_();
}), _r_();
}
};