!function(t,e){function n(){var n,i;n=o?function(e,n){o(t).on(e,n)}:function(e,n){t.addEventListener(e,n)},Turbolinks.EVENTS?i=Turbolinks.EVENTS.BEFORE_UNLOAD:(i="page:receive",Turbolinks.pagesCached(0),e.ReactRailsUJS.RAILS_ENV_DEVELOPMENT&&console.warn("The Turbolinks cache has been disabled (Turbolinks >= 2.4.0 is recommended). See https://github.com/reactjs/react-rails/issues/87 for more information.")),n("page:change",function(){e.ReactRailsUJS.mountComponents()}),n(i,function(){e.ReactRailsUJS.unmountComponents()})}function i(){o?o(function(){e.ReactRailsUJS.mountComponents()}):t.addEventListener("DOMContentLoaded",function(){e.ReactRailsUJS.mountComponents()})}var o="undefined"!=typeof e.jQuery&&e.jQuery;e.ReactRailsUJS={CLASS_NAME_ATTR:"data-react-class",PROPS_ATTR:"data-react-props",RAILS_ENV_DEVELOPMENT:!1,findDOMNodes:function(n){var i,r;switch(typeof n){case"undefined":i="["+e.ReactRailsUJS.CLASS_NAME_ATTR+"]",r=t;break;case"object":i="["+e.ReactRailsUJS.CLASS_NAME_ATTR+"]",r=n;break;case"string":i=n+" ["+e.ReactRailsUJS.CLASS_NAME_ATTR+"]",r=t}return o?o(i,r):r.querySelectorAll(i)},mountComponents:function(t){for(var n=e.ReactRailsUJS.findDOMNodes(t),i=0;i<n.length;++i){var o=n[i],r=o.getAttribute(e.ReactRailsUJS.CLASS_NAME_ATTR),s=e[r]||eval.call(e,r),a=o.getAttribute(e.ReactRailsUJS.PROPS_ATTR),l=a&&JSON.parse(a),c="object"==typeof ReactDOM?ReactDOM:React;c.render(React.createElement(s,l),o)}},unmountComponents:function(t){for(var n=e.ReactRailsUJS.findDOMNodes(t),i=0;i<n.length;++i){var o=n[i],r="object"==typeof ReactDOM?ReactDOM:React;r.unmountComponentAtNode(o)}}},"undefined"!=typeof Turbolinks&&Turbolinks.supported?n():i()}(document,window);