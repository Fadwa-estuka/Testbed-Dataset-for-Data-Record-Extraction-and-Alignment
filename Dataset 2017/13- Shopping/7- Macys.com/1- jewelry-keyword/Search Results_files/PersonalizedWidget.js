define(['handlebars'], function(Handlebars) {

return Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"personalizedWidget\">\n	<div id=\"personalizedWidgetClose\" class=\"icon-ui-close-gr-small\"></div>\n	"
    + container.escapeExpression((helpers.getPersonalizedMessage || (depth0 && depth0.getPersonalizedMessage) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"getPersonalizedMessage","hash":{},"data":data}))
    + "	\n</div>	\n";
},"useData":true})

});