define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"bopsNoStoresHdr\" class=\"facetSubHeader\" style=\"display:none\">\n	<div id=\"bopsError\" class=\"errorHiglight\">Sorry, no stores in "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.postalCode : depth0), depth0))
    + " offer pick up in-store.</div>\n    <div id=\"bopsChangeLocation\" class=\"changeLocation\">change location</div>\n</div>\n";
},"useData":true})

});