define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    	class=\"noTextDecoration\" href=\"#\"\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "   		href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.myAccountUrl : stack1), depth0))
    + "?cm_sp=navigation-_-top_nav-_-account\"\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<li><a href=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.myAccountUrl : stack1), depth0))
    + "?cm_sp=navigation-_-top_nav-_-account\">My Account</a></li>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "				<p><strong><a class=\"wallet-sub-head\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.baseSecureUrl : stack1), depth0))
    + "/account/wallet?cm_sp=top_nav-_-"
    + alias2(((helper = (helper = helpers.userStatus || (depth0 != null ? depth0.userStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"userStatus","hash":{},"data":data}) : helper)))
    + "-_-my_macys_money\">My Macy's Money ("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.totalRewardCards : stack1), depth0))
    + ")</a></strong></p>\r\n				<p class=\"sub-description\">$"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.amount : stack1), depth0))
    + "&nbsp;&nbsp;&nbsp;Spend it "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.startDate : stack1), depth0))
    + "-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.expireDate : stack1), depth0))
    + "</p>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing;

  return "				<p><strong><a class=\"wallet-sub-head\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.baseSecureUrl : stack1), depth0))
    + "/account/wallet?cm_sp=top_nav-_-"
    + alias2(((helper = (helper = helpers.userStatus || (depth0 != null ? depth0.userStatus : depth0)) != null ? helper : alias4),(typeof helper === "function" ? helper.call(alias3,{"name":"userStatus","hash":{},"data":data}) : helper)))
    + "-_-my_offers_and_star_passes\">My Offers & Star Passes ("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.totalOffers : stack1), depth0))
    + ")</a></strong></p>\r\n"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias4).call(alias3,"data.offers.offerType === 'STARPASS'",{"name":"condition","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias4).call(alias3,"data.offers.displayOfferExpiryDate === true",{"name":"condition","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(20, data, 0),"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "					<div class=\"starpass-description\"><div class=\"icon-star-red-medium\"></div>&nbsp;"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.offers : stack1)) != null ? stack1.offerTitle : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.offers : stack1)) != null ? stack1.offerDesc : stack1), depth0))
    + "</div>\r\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "					<p class=\"description\">"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.offers : stack1)) != null ? stack1.newAutoProvisionFlag : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.offers : stack1)) != null ? stack1.offerTitle : stack1), depth0))
    + "</p>\r\n                    <p class=\"description red-text\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.offers : stack1)) != null ? stack1.offerDesc : stack1), depth0))
    + "</p>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "<b>NEW! </b>";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.condition || (depth0 && depth0.condition) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"(data.offers.offerType === 'SUPC') || (data.offers.offerType === 'STARPASS') ",{"name":"condition","hash":{},"fn":container.program(16, data, 0),"inverse":container.program(18, data, 0),"data":data})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<p class=\"sub-description grey-text\">Valid "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.offers : stack1)) != null ? stack1.storeStartDate : stack1), depth0))
    + "-"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.offers : stack1)) != null ? stack1.storeExpiryDate : stack1), depth0))
    + "</p>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "						<p class=\"sub-description grey-text\">Valid "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.offers : stack1)) != null ? stack1.offerStartDate : stack1), depth0))
    + "-"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.offers : stack1)) != null ? stack1.offerExpiryDate : stack1), depth0))
    + "</p>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.condition || (depth0 && depth0.condition) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"data.offers.multiUse === false",{"name":"condition","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    return "                    	<p class=\"sub-description grey-text\">Valid one-time use only</p>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.plentiID : stack1),{"name":"if","hash":{},"fn":container.program(24, data, 0),"inverse":container.program(26, data, 0),"data":data})) != null ? stack1 : "");
},"24":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "            <li><a class=\"grey-text\" href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.baseSecureUrl : stack1), depth0))
    + "/loyalty/summary?cm_sp=top_nav-_-"
    + alias1(((helper = (helper = helpers.userStatus || (depth0 != null ? depth0.userStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"userStatus","hash":{},"data":data}) : helper)))
    + "-_-my_plenti_points\">My Plenti</a></li>\r\n";
},"26":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "            <li><a class=\"grey-text\" href=\""
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.baseUrl : stack1), depth0))
    + "/m/campaign/loyalty/index?cm_sp=top_nav-_-"
    + alias1(((helper = (helper = helpers.userStatus || (depth0 != null ? depth0.userStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"userStatus","hash":{},"data":data}) : helper)))
    + "-_-my_plenti_points\">My Plenti</a></li>\r\n";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <li><a class=\"grey-text\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.baseSecureUrl : stack1), depth0))
    + "/loyalty/summary?cm_sp=top_nav-_-"
    + alias2(((helper = (helper = helpers.userStatus || (depth0 != null ? depth0.userStatus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"userStatus","hash":{},"data":data}) : helper)))
    + "-_-my_plenti_points\">Plenti Points</a>\r\n            <p class=\"plenti-points\">Total: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.plentiPoints : stack1), depth0))
    + "</p>\r\n        </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression, alias4=helpers.helperMissing, alias5="function";

  return "<a id=\"href_myAccountHeader\" target=\"_top\"\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.touchEnabled : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "   >my account</a>\r\n<ul class=\"signed-nav-dropdown\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.touchEnabled : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	<li><a href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.baseSecureUrl : stack1), depth0))
    + "/account/wallet?cm_sp=top_nav-_-"
    + alias3(((helper = (helper = helpers.userStatus || (depth0 != null ? depth0.userStatus : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"userStatus","hash":{},"data":data}) : helper)))
    + "-_-my_wallet_personalized\">"
    + alias3(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias1,{"name":"user","hash":{},"data":data}) : helper)))
    + " Wallet</a>\r\n		<div class=\"nav-wallet-info\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.totalRewardCards : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.data : depth0)) != null ? stack1.totalOffers : stack1),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\r\n	</li>\r\n\r\n"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias4).call(alias1,"data.plentiPoints === '0'",{"name":"condition","hash":{},"fn":container.program(23, data, 0),"inverse":container.program(28, data, 0),"data":data})) != null ? stack1 : "")
    + "	<li><a class=\"grey-text\" href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.baseSecureUrl : stack1), depth0))
    + "/wishlist/mylist?cm_sp=navigation-_-top_nav-_-my_lists\">My Lists</a></li>\r\n	<li><a class=\"grey-text\" href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.baseSecureUrl : stack1), depth0))
    + "/service/order-status?cm_sp=navigation-_-top_nav-_-my_order_history\">My Order History</a></li>\r\n	<li><a class=\"grey-text\" href=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.urlData : depth0)) != null ? stack1.baseSecureUrl : stack1), depth0))
    + "/creditservice/gateway\">My Macy's Credit Card</a></li>\r\n</ul>";
},"useData":true})

});