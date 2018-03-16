/* 10:03:01 22/09/2016 [http://oystatic.ignimgs.com/src/core/js/widgets/social/shared/evousertools.js]*/
var IGN=IGN||{};
IGN.UserTools=function(b){var d;return{init:function(){b(".ignHeader-authentication a").click(function(a){a.preventDefault();d="function"===typeof IGN.getWidgetDomain?IGN.getWidgetDomain():"widgets.ign.com";var a=b(this),c=encodeURIComponent(window.location.href+"/"+a.parent().data("get-started-redirect")),c=a.data("registration-from-header")?c:encodeURIComponent(window.location.href),a="http://"+d+"/social/shared/registration/"+a.attr("js-data")+".jsonp?disable_js=false&r="+c;b.ajax({url:a,dataType:"jsonp",
success:function(a){b("body").append(a)}})})}}}(jQuery);(function(b){b(document).ready(function(){IGN.UserTools.init()})})(IGN.jQuery||window.jQuery);
