/*<!--*/(function() {var qss="&cb="+Math.floor(99999999999*Math.random());try{qss+="&ref="+encodeURIComponent(document.referrer)}catch(e$$12){}try{qss+="&sc_r="+encodeURIComponent(screen.width+"x"+screen.height)}catch(e$$13){}try{qss+="&sc_d="+encodeURIComponent(screen.colorDepth)}catch(e$$14){}
var callDis=function(c,d){var a=function(){callDisInternal(c,d)};"complete"===document.readyState?setTimeout(a):window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent("onload",a)},disCalled=!1,callDisInternal=function(c,d){if(!disCalled){disCalled=!0;var a="//"+d+"/dis/dis.aspx",b=document.createElement("iframe");b.width=b.height="0";b.style.display="none";b.src=(a+"?p="+c+qss).substring(0,2E3);(a=document.getElementById("criteoTagsContainer"))?a.appendChild(b):criteo_q.push({event:"appendTag",
element:b})}};

callDis(9049, 'dis.us.criteo.com');
})();


/*-->*/