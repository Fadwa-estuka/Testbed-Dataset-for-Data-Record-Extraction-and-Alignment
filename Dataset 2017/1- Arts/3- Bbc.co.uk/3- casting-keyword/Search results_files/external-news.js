define(["jquery-1"],function(b){var a={config:{selector:"section.external-news",sectionSelector:"section.external-news ol li",elementsToAlign:["h1","p.short","p.medium","p.long","footer"]},init:function(){if(document.addEventListener){var c=this;b(window).on("resize",function(){c.align()})}this.align()},align:function(){var c=this;if(b(window).width()>500){b(this.config.elementsToAlign).each(function(f,e){b(c.config.sectionSelector).find(e).css("height","auto");var d=0;b(c.config.sectionSelector).each(function(g,h){var j=b(h).find(e).first().height();d=(d<j)?j:d});b(c.config.sectionSelector).find(e).css("height",d+"px")})}else{b(this.config.elementsToAlign).each(function(e,d){b(c.config.sectionSelector).find(d).css("height","auto")})}}};return a});