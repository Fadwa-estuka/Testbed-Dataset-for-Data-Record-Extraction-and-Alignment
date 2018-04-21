define(['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {};

  return "        <li class=\""
    + alias2(alias1((depth0 != null ? depth0.listItemClass : depth0), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.enabled : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <span class=\"item_icon\" title=\""
    + alias2(alias1((depth0 != null ? depth0.displayName : depth0), depth0))
    + " ("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")\"></span>\n                    <span class=\"item\" title=\""
    + alias2(alias1((depth0 != null ? depth0.displayName : depth0), depth0))
    + " ("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")\">\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.displayNames : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "                    </span>\n                    <span class=\"item_count\">("
    + alias2(alias1((depth0 != null ? depth0.count : depth0), depth0))
    + ")</span>\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.enabled : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" class=\"facet_link "
    + alias2(alias1((depth0 != null ? depth0.aClass : depth0), depth0))
    + " cm_none\"\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.nofollow : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                data-value=\""
    + alias2(alias1((depth0 != null ? depth0.value : depth0), depth0))
    + "\">\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        rel='nofollow noindex'\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                    		<div>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "                   			"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.displayName : depth0), depth0))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                </a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.values : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true})

});