define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <option value=\""
    + alias2(alias1((depth0 != null ? depth0.size : depth0), depth0))
    + "\" \n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.selected : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    >"
    + alias2(alias1((depth0 != null ? depth0.size : depth0), depth0))
    + " miles</option>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                        selected\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"bopsLocationBox\">\n	<span>Find stores within:</span>\n		<form style=\"display: inline;\" class=\"standard-form\">\n            <select id=\"bopsByMiles\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.radius : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </select>\n        </form>\n	of\n	<a id=\"bopsLocation\" rel=\"nofollow\">"
    + container.escapeExpression(((helper = (helper = helpers.postalCode || (depth0 != null ? depth0.postalCode : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"postalCode","hash":{},"data":data}) : helper)))
    + "</a>\n</div>\n"
    + ((stack1 = container.invokePartial(partials.BaseFacetViewList,depth0,{"name":"BaseFacetViewList","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true})

});