/* repo = harmony-phase-0  */!function(){var a=!1,b=!0,c=(webmd.url.getParam("reskin")||"",webmd.url.getLifecycle(),window.s_sponsor_program||""),d=window.s_sponsor_brand||"",e=window.s_channel_super_portal||"",f=window.s_channel_health||"",g=window.s_business_reference||"",h=window.s_publication_source||"",i=window.s_package_name||"",j=["/pill-identification/","/vitamins-supplements/"],k=["/sleep-disorders/","/lupus/","/skin-problems-and-treatments/"],l=["WebMD Image Collection"];("Pets"===e||"Health & Parenting"===e&&"Baby Center"!==f||"Health & Diet"===f||"Nav - A-Z page"===g||"Nav - Home Page"===g||"WebMD News Center"===h||"WebMD Healthy Recipe Finder"===i||"natural products - nosp"===i)&&(b=!1),$.grep(j,function(a){return location.href.indexOf(a)>-1}).length>0&&(b=!1),""===c&&(a=!0),b&&a&&($("html").addClass("reskin"),$(function(){$("body").append('<img src="" class="logo_rdr" style="display: none" />')})),$.each(k,function(a,b){-1!==window.location.pathname.indexOf(b)&&""===c&&""===d&&"Medical Reference"===g&&-1===h.search("Healthwise")&&""===i&&-1===$.inArray(h,l)&&$(function(){if("none"!==$("#navColumn_area").css("display")){if($("html").addClass("site-modernization"),0!==$(".pop_toolst_rdr").length){var a=$(".pop_toolst_rdr");$("#bannerAd_rdr"),$(".unified_right_rdr").last().after(a)}var b=$("#breadcrumb_ctr");b.prependTo($(".article_rdr")),b.find("img").replaceWith('<span class="breadcrumb_divider">&gt;</span>'),b.find(".bc_0 a").text($(".bc_0 a").text().substr(6)),$(".articlesPulldown_fmt input").replaceWith('<button name="submit" type="submit">Go</button>'),$(".copyNormal h2").after('<div class="social-share-bar"></div>'),$("#readspeaker_area").insertAfter($(".social-share-bar")),require.config({paths:{"webmd.m.socialshareplugin":"socialshareplugin/1/webmd.m.socialshareplugin.min"}}),$(document).ready(function(){require(["webmd.m.socialshareplugin","css!socialshareplugin/1/socialshareplugin.min.css"],function(){$(".social-share-bar").socialshareplugin({shareOrder:["facebook","twitter","pinterest","email","save","print"]}),$("#readspeaker_button1").click(function(){$(".social-share-bar").empty().socialshareplugin({shareOrder:["facebook","twitter","pinterest","email","save","print"]}),$("#closebr").click(function(){setTimeout(function(){$(".social-share-bar").empty().socialshareplugin({shareOrder:["facebook","twitter","pinterest","email","save","print"]})},800)})})})});var c=$(".pagination_fmt .right_fmt > a, .current_fmt").length,d=s_page_number,e=5;$(".pagination_fmt .pipe_fmt").remove(),c>e&&(c-d>=(e-1)/2&&d>(e-1)/2?(d>(e-1)/2+1&&$(".right_fmt a").eq(0).appendTo(".left_fmt").attr("title","Back to Page 1"),$(".current_fmt").prevAll("a").slice((e-1)/2).remove(),$(".current_fmt").nextAll("a").slice((e-1)/2).remove()):(e-1)/2>=d?$(".current_fmt").nextAll("a").slice((e-1)/2+((e-1)/2-d)+1).remove():(e-1)/2>c-d&&($(".right_fmt a").eq(0).appendTo(".left_fmt"),$(".current_fmt").prevAll("a").slice(e-1-(c-d)).remove())),0!==c-d?$(".left_fmt .outline_fmt a").insertBefore(".right_fmt .outline_fmt a"):($(".current_fmt").after('<div class="outline_fmt right"></div>'),$(".left_fmt .outline_fmt a").appendTo(".right_fmt .outline_fmt"),$(".outline_fmt.right a").after('<a class="disabled"></a>')),"1"===d&&$(".outline_fmt.right").prepend('<a class="disabled"></a>'),$(".left_fmt .outline_fmt").remove(),$(".right_fmt .outline_fmt a, .left_fmt a").empty();var f=$(".dyn_related .last_link a");0!==f.length&&f.html(f.html().substring(8)+"<div>SEE ALL</div>"),$(".rarediseases").insertAfter("#readspeaker_area"),$(".rarediseases .banner").html(function(a,b){return b.replace(/(\w+\s\w+\s\w+)/,"<span>$1</span>")}),$(".articlesPulldown_fmt").hide(),$('<div class="next_article_title"><h4>NEXT ARTICLE</h4></div><div class="next_article_link"><h4><a href="'+$(".articlesPulldown_fmt select").val()+'">'+$(".articlesPulldown_fmt option:selected").text()+"</a></h4></div>").insertAfter(".articlesPulldown_fmt"),$(".next_article_link a").click(function(a){a.preventDefault(),"undefined"!=typeof externalUrlListBot?submitNavForm(externalUrlListBot,"NextPulldown",!0):submitNavForm(externalUrlList,"NextTopicPulldown",!0)})}})})}();