"use strict";angular.module("plp",["plp.components","core"]),angular.module("plp").controller("BrandedExperienceController",["$scope","$translate","UrlService",function(e,r,a){var n=a.get("fromBrandStore"),t=a.get("filter"),o=/(brandName%.*?a)((?:(?!%3).)*)/,d=$(".plp-background"),i="header-cover-mini",s=function(){if(e.displayBrandbar=!1,e.displayNoResultMessage=!1,e.searchTerm=a.get("query"),e.brandedExperienceSource="",n)e.brandName=n.toLowerCase(),l()?e.brandedExperienceSource="param":e.displayNoResultMessage=!0;else if(t){var r=t.match(o);r&&-1===r[2].indexOf("%")&&(e.brandName=r[2].toLowerCase(),e.brandedExperienceSource="facet")}},l=function(){var e="undefined"!=typeof additionalResultInfo?additionalResultInfo.brandNameFilterUsed:!0,r="undefined"!=typeof additionalResultInfo?additionalResultInfo.totalResults:1;return e||0===r?!0:!1};jQuery(document).on("brandbar:ready",function(){switch(e.brandedExperienceSource){case"param":e.displayBrandbar=!0,m.hideOtherBrands(),c.insertFromBrandStoreParam();break;case"facet":e.displayBrandbar=!0,c.insertFromBrandStoreParam();break;case"noResultMessage":e.displayBrandbar=!0,c.insertFromBrandStoreParam();break;default:u()}}),jQuery(document).on("jmvc:plp:searching",function(){e.isSearchingGlobally=!0,history.pushState?history.pushState("","",window.location.href.replace(/&fromBrandStore.*?&/,"&")):window.location.href=window.location.href.replace(/&fromBrandStore.*?&/,"&")}),jQuery(document).on("jmvc:plp:renderedProducts",function(){e.isSearchingGlobally?(u(),e.isSearchingGlobally=!1):e.displayBrandbar&&c.insertFromBrandStoreParam()}),jQuery(document).on("header:state:changed",function(e,r){"mini"===r.state?d.addClass(i):d.removeClass(i)});var c={insertFromBrandStoreParam:function(){$(".prod-title a").each(function(){$(this).attr("href",$(this).attr("href")+"&fromBrandStore="+e.brandName)}),$(".prod-image a").each(function(){$(this).attr("href",$(this).attr("href")+"&fromBrandStore="+e.brandName)})},removeFromBrandStoreParam:function(){$(".prod-title a").each(function(){$(this).attr("href",$(this).attr("href").replace(/fromBrandStore=.*?(&|$)/,"&"))}),$(".prod-image a").each(function(){$(this).attr("href",$(this).attr("href").replace(/fromBrandStore=.*?(&|$)/,"&"))})}},m={hideOtherBrands:function(){var r=$(".facet-brandName");r.find("li").hide(),r.find("li.filter-"+e.brandName).show().find("input[type=checkbox]").attr("disabled",!0).attr("checked",!0)},showAllBrands:function(){var e=$(".facet-brandName");e.find("li").show().find("input[type=checkbox]").attr("disabled",!1)}};e.slideBrandbar=function(){e.brandedExperienceSource="noResultMessage",jQuery(document).trigger("brandbar:reload",e.brandName),e.displayNoResultMessage=!1};var u=function(){e.displayBrandbar=!1,m.showAllBrands(),c.removeFromBrandStoreParam(),$("body").removeClass()};$(document).on("click",".facet-brandName input",function(){var r=$(".facet-brandName li.is-selected").length,a=$(this).next(".item").html(),n="";$(this).is(":checked")&&0===r?n=a:2===r?n=$(".facet-brandName li.is-selected").find("input").not(this).next(".item").html():(e.$apply(function(){e.displayBrandbar=!1}),$("body").removeClass(),e.linksState="removed",c.removeFromBrandStoreParam()),n&&(e.brandName=n.toLowerCase(),jQuery(document).trigger("brandbar:reload",e.brandName),e.brandedExperienceSource="facet")}),s()}]),angular.module("plp.components",[]),angular.module("plp.components").directive("beNoResult",function(){return{restrict:"A",templateUrl:"/components/be-no-result.template.html"}}),angular.module("plp").run(["$templateCache",function(e){e.put("/components/be-no-result.template.html",'<span>No results for <strong>{{searchTerm}}</strong> in <b class="brandname">{{brandName}}</b>.</span> <a href="" data-ng-click="$parent.slideBrandbar()">Search <b class="brandname">{{brandName}}</b> Products again</a>')}]);