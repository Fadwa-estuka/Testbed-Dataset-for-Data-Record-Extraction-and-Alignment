!function(e){function n(e,n){var i=document.getElementsByTagName("head")[0]||document.documentElement,t=document.createElement("script"),r=!1;t.src=e,t.onload=t.onreadystatechange=function(){r||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(r=!0,n(),t.onload=t.onreadystatechange=null,i&&t.parentNode&&i.removeChild(t))},i.insertBefore(t,i.firstChild)}var i=e.Livefyre||(e.Livefyre={});if(i.pending_REQUIRE=i.pending_REQUIRE||[],i.pending_ON=i.pending_ON||[],!i.initialized){i.require=function(e,n){i.pending_REQUIRE.push(arguments)},i.on=function(){i.pending_ON.push(arguments)},Livefyre.require.amd=!0,i.fulfillPending=function(n){for(var t,r=e.Livefyre,o=i["pending_"+n.toUpperCase()]||[];t=o.shift();)r[n].apply(r,t)};var t=e.location.protocol;0!==t.indexOf("http")&&(t="https:");var r=t+"//cdn.livefyre.com/libs/Livefyre/v1.1.0/builds/305/Livefyre.min.js",o=["on","require"];n(r,function(){for(var e=o.length-1;e>=0;e--)i.fulfillPending(o[e])}),i.initialized=!0}}(window);