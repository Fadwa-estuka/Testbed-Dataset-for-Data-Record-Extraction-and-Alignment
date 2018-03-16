/* :asset_packager_compatibility, 'config/asset_packages.yml' @ 1488234053 */


/* :asset_packager_compatibility, 'config/asset_packages.yml' @ 1488234053 */


/* :files, 'public/javascripts/shared', ... @ (none) */


/* :files, 'app/views', ... @ (none) */


/* :files, 'app/views', ... @ 1488234051 */
/* app/views/discover/shared.coffee @ 1488234051 */
(function(){var t=function(t,n){function r(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty;Scribd.Discover={Modules:{},UI:{}},Scribd.Discover.UI.DiscoverCarousel=function(e){function n(t,e){this.container=t,this.opts=null!=e?e:{},n.__super__.constructor.apply(this,arguments)}return t(n,e),n}(Scribd.UI.Carousel)}).call(this);


/* :class_inlines, 'app/views', ... @ 1488234051 */
/* app/views/discover/modules/article_row.coffee @ 1488234051 */
(function(){Scribd.Discover.Modules.ArticleRow=function(){function t(t){this.container=$(t),this.container.find(".subheadline").dotdotdot()}return t}()}).call(this);


/* app/views/discover/modules/base.coffee @ 1488234051 */
(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Scribd.Discover.Modules.Base=function(){function e(e,n){this.opts=null!=n?n:{},this.track_recommendations=t(this.track_recommendations,this),this.ready=t(this.ready,this),this.container=$(e),this.opts.on_in_view||(this.opts.on_in_view=function(t){return function(e){return t.tracking=e,t.track_recommendations(t.container.find("[data-track_uuid]"))}}(this)),this.ready()}return e.prototype.ready=function(){return new Scribd.RecommendationTracking.Module(this.container,{compilation_id:this.opts.compilation_id,widget_name:this.opts.widget_name,module_id:this.opts.module_id,on_in_view:this.opts.on_in_view})},e.prototype.track_recommendations=function(t){return $(t).each(function(t){return function(e,n){return $(n).one("inview",function(){return Scribd.RecommendationTracking.track_obj_view(t.tracking.view_id,$(n).data("track_uuid"))})}}(this))},e}()}).call(this);


/* app/views/discover/modules/featured_document.coffee @ 1488234051 */
(function(){var t=function(t,n){function r(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty;Scribd.Discover.Modules.FeaturedDocument=function(e){function n(t,e){this.opts=null!=e?e:{},n.__super__.constructor.apply(this,arguments),this.button=this.container.find(".flat_btn"),this.container.on("mouseenter",function(t){return function(){return t.button.addClass("hover")}}(this)),this.container.on("mouseleave",function(t){return function(){return t.button.removeClass("hover activated")}}(this)),this.container.on("mousedown",function(t){return function(){return t.button.addClass("activated")}}(this)),this.container.on("mouseup",function(t){return function(){return t.button.removeClass("activated")}}(this))}return t(n,e),n}(Scribd.Discover.Modules.Base)}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{discover:{modules:{featured_document:{find_out_more:"Find out more"}}}}});


/* app/views/discover/modules/hero_banner.coffee @ 1488234051 */
(function(){var t=function(t,n){function r(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty;Scribd.Discover.Modules.HeroBanner=function(e){function n(t,e){this.opts=null!=e?e:{},n.__super__.constructor.call(this,t,this.opts)}return t(n,e),n}(Scribd.Discover.Modules.Base)}).call(this);


/* app/views/discover/modules/hero_interest_banner.coffee @ 1488234051 */
(function(){var t=function(t,n){function r(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty;Scribd.Discover.Modules.HeroInterestBanner=function(e){function n(t,e){this.opts=null!=e?e:{},n.__super__.constructor.call(this,t,this.opts),this.container=$(t),this.filter_list=this.container.find(".filter_list"),this.filter_current_btn=this.container.find(".filter_current_btn"),this.setup_click_events()}return t(n,e),n.prototype.setup_click_events=function(){return this.container.dispatch("click",{filter_current_btn:function(t){return function(){return t.filter_current_btn.hide(),t.filter_list.show()}}(this),filter_item:function(t){return function(e){var n;return e.siblings().removeClass("selected"),e.addClass("selected"),n=e.text(),t.filter_current_btn.find(".filter_title").text(n).show(),t.filter_list.hide(),"continue"}}(this)}),$(document).click(function(t){return function(){return t.filter_list.hide(),t.filter_current_btn.show()}}(this))},n}(Scribd.Discover.Modules.HeroBanner)}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{discover:{modules:{hero_banner:{browse:"Browse",please_agree_to_our_a_href_static_terms_url:"Please agree to our <a href=%{static_terms_url}> Terms of service </a>"}}}}});


/* app/views/discover/modules/interest_list.coffee @ 1488234051 */
(function(){var t=function(t,n){function r(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty;Scribd.Discover.Modules.InterestList=function(e){function n(t,e){this.opts=null!=e?e:{},this.container=$(t),this.wrapper=this.container.find(".content_body"),this.recommendations=this.container.find(".interest"),this.recommendations.each(function(t){return function(e,n){var r;return n=$(n),r=n.position().top+n.height(),r<t.wrapper.height()?n.addClass("visible"):void 0}}(this)),this.collapsed_height="250px",this.setup_click_events(),this.opts.on_in_view=function(t){return function(e){return t.tracking=e,t.track_recommendations(t.recommendations.filter(".visible"),t.tracking.view_id)}}(this),n.__super__.constructor.call(this,t,this.opts)}return t(n,e),n.prototype.setup_click_events=function(){return this.container.dispatch("click",{list_expand_btn:function(t){return function(e){var n,r,i;return Scribd.RecommendationTracking.page_view_deferred(t.opts.compilation_id).done(function(e){return Scribd.RecommendationTracking.track_module_click(e,t.opts.module_id),t.track_recommendations(t.recommendations.not(".visible"),e)}),n=e.closest(".expanding").find(".content_body"),i=n.find(".list_wrapper"),r=i.outerHeight(),e.hasClass("collapsed")?(n.animate({height:r}),e.text(I18n.t("discover.modules.interest_list.view_less")),e.removeClass("collapsed")):(n.animate({height:t.collapsed_height}),e.text(I18n.t("discover.modules.interest_list.view_more")),e.addClass("collapsed"))}}(this),tab_btn:function(){return function(t){var e,n,r;return r=$(".tab_btn"),n=$(".tab_content"),r.removeClass("active"),n.removeClass("active"),t.addClass("active"),e=$(n.get(t.data("tabNum"))),e.addClass("active")}}(this)})},n}(Scribd.Discover.Modules.Base)}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{discover:{modules:{interest_list:{view_more:"View More",browse_by:"Browse by",interests:"Interests",view_less:"View Less"}}}}});


/* app/views/discover/modules/profile_banner.coffee @ 1488234051 */
(function(){var t=function(t,n){function r(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty;Scribd.Discover.Modules.ProfileBanner=function(e){function n(t,e){this.opts=null!=e?e:{},n.__super__.constructor.call(this,t,this.opts),this.setup_events()}return t(n,e),n.prototype.setup_events=function(){var t;return t=this.container.find(".description_wrapper"),this.container.dispatch("click",{read_more:function(){return function(){return t.toggleClass("show_full")}}(this),read_less:function(){return function(){return t.toggleClass("show_full")}}(this)})},n}(Scribd.Discover.Modules.HeroBanner)}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{discover:{modules:{profile_banner:{edit_profile:"edit profile",view_more:"view more",view_less:"view less",published:"published",view:"view",title:"title",views:"views",titles:"titles"}}}}});


/* app/views/discover/modules/promo.coffee @ 1488234051 */
(function(){var t=function(t,n){function r(){this.constructor=t}for(var i in n)e.call(n,i)&&(t[i]=n[i]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t},e={}.hasOwnProperty;Scribd.Discover.Modules.Promo=function(e){function n(t,e){this.opts=null!=e?e:{},n.__super__.constructor.apply(this,arguments),this.setup_events()}return t(n,e),n.prototype.setup_events=function(){return this.container.dispatch("click",{close_btn:function(t){return function(){return t.close()}}(this),upsell_btn:function(t){return function(){return t.container.track_rats("annual:inline_promo:click",{plan:"annual"}),Scribd.Lightbox.remote_open("plans_lightbox","/account-settings/plans-lightbox",{source:"inline_promo"},Scribd.PlansLightbox)}}(this)}),$(document).on("scribd:upsell:hard_upsell_exit scribd:upsell:success",function(t){return function(){return t.container.is(".is_annual_upsell")?t.close():void 0}}(this))},n.prototype.close=function(){return this.container.hide(),$.ajax({type:"POST",url:this.opts.close_url,data:{id:this.opts.promo_id}})},n}(Scribd.Discover.Modules.Base)}).call(this);


/* app/views/discover/modules/single_article.coffee @ 1488234051 */
(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e=function(t,e){function r(){this.constructor=t}for(var i in e)n.call(e,i)&&(t[i]=e[i]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},n={}.hasOwnProperty;Scribd.Discover.Modules.SingleArticle=function(n){function r(e,n){this.opts=null!=n?n:{},this.track_recommendations=t(this.track_recommendations,this),this.container=$(e),this.opts.on_in_view=function(t){return function(e){return t.tracking=e,t.track_recommendations(t.container.find("[data-track_rats_value]"))}}(this),r.__super__.constructor.call(this,e,this.opts),$(".subheadline").dotdotdot({wrap:"letter"})}return e(r,n),r.prototype.track_recommendations=function(t){return $(t).each(function(t){return function(e,n){return $(n).one("inview",function(){return Scribd.RecommendationTracking.track_obj_view(t.tracking.view_id,$(n).data("track_uuid"))})}}(this))},r}(Scribd.Discover.Modules.Base)}).call(this);


/* :class_inlines, 'spec_javascripts/js_spec', ... @ (none) */
