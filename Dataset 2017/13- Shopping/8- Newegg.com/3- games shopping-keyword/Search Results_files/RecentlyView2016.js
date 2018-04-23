NEG.Module('Biz.Common.RecentlyView2016', function (require) {var $ = require('NEG.ThirdParty.JQuery');var storage = require('Biz.Storage');var resourceManager = require("Biz.UI.ResourceManager");var viewport = require("NEG.Widget.Viewport");var recentlyView = function () {var getParameters = function () {var result = '';var viewItems = storage.getItem('ItemViewed');if (viewItems) {var recentlyitems = "";for (var i = 0; i < viewItems.length; i++) {recentlyitems = recentlyitems + viewItems[i].split("|")[0] + "#";}result = "v=" + escape(recentlyitems);if (Web.Config.RecentlyViewPrimaryItem) {result += "&item=" + Web.Config.RecentlyViewPrimaryItem;}}return result;};var recentlyViewSwiperInit = function () {var _recentBox_mDownX;var recentBox = '#RecentlyItems';var recentBoxSwiper = new Swiper(recentBox + ' .swiper-container', {pagination: recentBox + ' .swiper-pagination',prevButton: recentBox + ' .swiper-box-arrow-prev',nextButton: recentBox + ' .swiper-box-arrow-next',paginationClickable: true,preventClicks: false,calculateHeight: true,slidesPerGroup: 6,slidesPerView: 6,spaceBetween: 10,onSlideChangeStart: function () {this.preventClicks = true;},onProgress: function (swiper) {Biz.Common.Swiper.setSwiperLoopButton('#RecentlyItems', swiper);},breakpoints: {1920: {slidesPerGroup: 6,slidesPerView: 6},1560: {slidesPerGroup: 5,slidesPerView: 5},1200: {slidesPerGroup: 4,slidesPerView: 4},1020: {slidesPerGroup: 3,slidesPerView: 3}},onInit: function (swiper) {Biz.Common.Swiper.setSwiperLoopButton('#RecentlyItems', swiper);},onSlideChangeEnd: function (swiper) {this.preventClicks = false;Biz.Common.Swiper.setSwiperLoopButton('#RecentlyItems', swiper);},onTouchStart: function (recentBoxSwiper, e) {this.preventClicks = true;_recentBox_mDownX = e.pageX;},onTouchEnd: function (recentBoxSwiper, e) {this.preventClicks = false;var _moveX = _recentBox_mDownX - e.pageX;if (jQuery('#RecentlyItems' + ' .swiper-box-arrow-prev').hasClass('swiper-button-disabled') && _moveX < 0) {setTimeout(function () { Biz.Common.Swiper.setSwiperLoopDrag('#RecentlyItems', 'prev') }, 100);} else if (jQuery('#RecentlyItems' + ' .swiper-box-arrow-next').hasClass('swiper-button-disabled') && _moveX > 0) {setTimeout(function () { Biz.Common.Swiper.setSwiperLoopDrag('#RecentlyItems', 'next') }, 100);}}});};var fixIERecentlyViewSwiperInit = function () {var recentBox = '#RecentlyItems';var recentBoxSwiper = new Swiper(recentBox + ' .swiper-container', {pagination: recentBox + ' .swiper-pagination',paginationClickable: true,calculateHeight: true,slidesPerGroup: 6,slidesPerView: 6,spaceBetween: 10,loop: true});$(recentBox + ' .swiper-box-arrow-prev').click(function () {recentBoxSwiper.swipePrev();});$(recentBox + ' .swiper-box-arrow-next').click(function () {recentBoxSwiper.swipeNext();});var _w1 = document.documentElement.clientWidth;var _w2 = document.body.clientWidth;if ((_w1 || _w2) <= 1020) {recentBoxSwiper.params.slidesPerGroup = 3;recentBoxSwiper.params.slidesPerView = 3;recentBoxSwiper.reInit();recentBoxSwiper.resizeFix();} else if ((_w1 || _w2) <= 1200) {recentBoxSwiper.params.slidesPerGroup = 4;recentBoxSwiper.params.slidesPerView = 4;recentBoxSwiper.reInit();recentBoxSwiper.resizeFix();} else if ((_w1 || _w2) <= 1560) {recentBoxSwiper.params.slidesPerGroup = 5;recentBoxSwiper.params.slidesPerView = 5;recentBoxSwiper.reInit();recentBoxSwiper.resizeFix();}var resizeTimer = null;$(window).bind('resize', function (e) {if (resizeTimer) {clearTimeout(resizeTimer);}resizeTimer = setTimeout(function () {var _w1 = document.documentElement.clientWidth;var _w2 = document.body.clientWidth;if ((_w1 || _w2) <= 1020) {if (recentBoxSwiper.params.slidesPerGroup != 3) {recentBoxSwiper.params.slidesPerGroup = 3;recentBoxSwiper.params.slidesPerView = 3;recentBoxSwiper.resizeFix();}} else if ((_w1 || _w2) <= 1200) {if (recentBoxSwiper.params.slidesPerGroup != 4) {recentBoxSwiper.params.slidesPerGroup = 4;recentBoxSwiper.params.slidesPerView = 4;recentBoxSwiper.resizeFix();}} else if ((_w1 || _w2) <= 1560) {if (recentBoxSwiper.params.slidesPerGroup != 5) {recentBoxSwiper.params.slidesPerGroup = 5;recentBoxSwiper.params.slidesPerView = 5;recentBoxSwiper.resizeFix();}} else {if (recentBoxSwiper.params.slidesPerGroup != 6) {recentBoxSwiper.params.slidesPerGroup = 6;recentBoxSwiper.params.slidesPerView = 6;recentBoxSwiper.resizeFix();}}}, 100);});};var api = {getData: function () {var pageHead = document.getElementsByTagName('head')[0];var script = document.getElementById('RecentlyView2016AjaxJS');if (script && script != null) {pageHead.removeChild(script);}script = document.createElement('script');script.type = 'text/javascript';script.id = 'RecentlyView2016AjaxJS';script.src = resourceManager.Url.www('Common/Ajax/RecentlyView2016.aspx' + '?' + getParameters());pageHead.appendChild(script);},renderData: function (pData) {if (pData.length == 0) {$('.page-section-recently').hide();} else {document.getElementById('RecentlyItems').innerHTML = pData;}},initSwiper: function () {if (Web.Environment.Browser.isIE() && Web.Environment.Browser.currentVersion().replace(/[^0-9/.]/g, "") < 10) {fixIERecentlyViewSwiperInit();} else {recentlyViewSwiperInit();}}};return api;};return recentlyView;});