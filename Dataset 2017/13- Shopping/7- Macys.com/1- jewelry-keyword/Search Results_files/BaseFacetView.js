define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.collapsed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.displayName : depth0), depth0));
},"2":function(container,depth0,helpers,partials,data) {
    return "Expand";
},"4":function(container,depth0,helpers,partials,data) {
    return "Collapse";
},"6":function(container,depth0,helpers,partials,data) {
    return " hidden";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div id=\"bops_store_data\" data-stores=\""
    + container.escapeExpression(((helper = (helper = helpers.valuesAsJson || (depth0 != null ? depth0.valuesAsJson : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"valuesAsJson","hash":{},"data":data}) : helper)))
    + "\" class=\"listbox\"></div>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"listbox\">\n"
    + ((stack1 = container.invokePartial(partials.BaseFacetViewList,depth0,{"name":"BaseFacetViewList","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "\n<h2 title=\""
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.collapseDisabled : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" class=\"facet_name"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.headerDisabled : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" role=\"button\" tabindex=\"0\">"
    + alias3(alias2((depth0 != null ? depth0.displayName : depth0), depth0))
    + "</h2>\n<div class=\"clearall "
    + alias3(alias2((depth0 != null ? depth0.hiddenClass : depth0), depth0))
    + "\" title=\"Clear all "
    + alias3(alias2((depth0 != null ? depth0.displayName : depth0), depth0))
    + " selections\"></div>\n\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.valuesAsJson : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(10, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true})

});