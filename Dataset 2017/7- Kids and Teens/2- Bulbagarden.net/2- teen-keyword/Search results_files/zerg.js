(function() {
	var nodeId = 'zergnet-widget-39345';
	var node = document.getElementById(nodeId);

	if ( node && typeof( node.className ) !== "undefined" && node.className.indexOf("widget-loaded") === -1 ) {
		if ( node.className ) {
			node.className += " ";
		}
		node.className += "widget-loaded";

		var timestamp = new Date().getTime();
		var randcallback = Math.floor((Math.random() * 9999999) + 1);
		var JSONP=(function(){var a=randcallback,c,f,b,d=this;function e(j){var i=document.createElement("script"),h=false;i.src=j;i.async=true;i.onload=i.onreadystatechange=function(){if(!h&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){h=true;i.onload=i.onreadystatechange=null;if(i&&i.parentNode){i.parentNode.removeChild(i)}}};if(!c){c=document.getElementsByTagName("head")[0]}c.appendChild(i)}function g(h,j,k){f="?";j=j||{};for(b in j){if(j.hasOwnProperty(b)){f+=encodeURIComponent(b)+"="+encodeURIComponent(j[b])+"&"}}var i="json"+(++a);d[i]=function(l){k(l);try{delete d[i]}catch(m){}d[i]=null;};e(h+f+"callback="+i);return i}return{get:g}}());
		JSONP.get( 'http://www.zergnet.com/output.js', {id:'39345',time:timestamp}, function(data){
			if (typeof window.opera != 'undefined') {
				document.write(data);
			} else {
				node.innerHTML =   data;
			}
		});
	} else if ( !node && typeof( console ) !== "undefined" && typeof("console.log") !== "undefined" ) {
		console.log("ZERG CONTAINER MISSING: "+nodeId);
	} else if ( node && typeof( node.className ) !== "undefined" && node.className.indexOf("widget-loaded") !== -1 && typeof( console ) !== "undefined" && typeof("console.log") !== "undefined" ) {
		console.log("ZERG CONTAINER ALREADY LOADED: "+nodeId);
	}
})();

