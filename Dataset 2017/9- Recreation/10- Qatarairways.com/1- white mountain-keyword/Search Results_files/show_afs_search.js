(function(){var b=window,h=b.googleSearchResizeIframe||b.googleSearchPath&&"/cse"==b.googleSearchPath&&"undefined"==typeof b.googleSearchResizeIframe,k=document.location.search,l,m,n,r;function t(c,d,a,e){var f={};c=c.split(a);for(a=0;a<c.length;a++){var g=c[a],q=g.indexOf(d);if(0<q){var p=g.substring(0,q),p=e?p.toUpperCase():p.toLowerCase(),g=g.substring(q+1,g.length);f[p]=g}}return f}
function u(c,d,a){if(a){var e=c.slice(-1);d=[c,"?"==e?"":"&",d,"=",encodeURIComponent(a)].join("");if(2048>=d.length)return d}return c}function v(c,d){return c?Math.max(c,d):d}
function w(){var c="",c=b.googleSearchDomain?c+b.googleSearchDomain:c+"www.google.com",c=b.googleSearchPath?c+b.googleSearchPath:c+"/custom",c="http://"+c+"?";b.googleSearchQueryString&&(b.googleSearchQueryString=b.googleSearchQueryString.toLowerCase());var d;var a=k;if(1>a.length)d="";else{a=a.substring(1,a.length);a=t(a,"=","&",!1);"q"!=b.googleSearchQueryString&&a[b.googleSearchQueryString]&&(a.q=a[b.googleSearchQueryString],delete a[b.googleSearchQueryString]);if(a.cof){var e=t(decodeURIComponent(a.cof),
":",";",!0);(e=e.FORID)&&(l=parseInt(e,10))}a.siteurl&&(r=decodeURIComponent(a.siteurl));if(e=document.getElementById(b.googleSearchFormName))if(!e.q||!a.q||a.ie&&"utf-8"!=a.ie.toLowerCase()||(e.q.value=decodeURIComponent(a.q.replace(/\+/g," "))),e.sitesearch)for(var f=0;f<e.sitesearch.length;f++)e.sitesearch[f].checked=null==a.sitesearch&&""==e.sitesearch[f].value?!0:e.sitesearch[f].value==a.sitesearch?!0:!1;e="";for(d in a)e+="&"+d+"="+a[d];d=e.substring(1,e.length)}c+=d;c=u(c,"ad","n"+m);c=u(c,
"num",n);c=u(c,"adtest",b.googleAdtest);h&&(d=b.location.href,a=d.indexOf("#"),-1!=a&&(d=d.substring(0,a)),c=u(c,"rurl",d));d=b.document.getElementById(b.googleSearchFormName);r||(r=b.document.referrer,c=u(c,"siteurl",r));d&&!d.siteurl&&(a=document.createElement("input"),a.name="siteurl",a.type="hidden",a.value=r,d.appendChild(a));return c}
function x(c,d,a){var e={};e[9]=300+90*d;e[10]=300+50*Math.min(c,4)+90*d;e[11]=300+50*c+90*d;if(a)for(c=660+120*d,d=9;11>=d;d++)e[d]=Math.max(e[d],c);return e}
function y(){(m=b.googleSearchNumAds)||(m=9);n=(n=b.googleNumSearchResults)?Math.min(n,20):10;var c={9:795,10:795,11:500},d=x(m,n,"/cse"==b.googleSearchPath),a=w();b.googleSearchFrameborder||(b.googleSearchFrameborder="0");var e=document.getElementById(b.googleSearchIframeName);if(e&&c[l]){var c=v(b.googleSearchFrameWidth,c[l]),d=v(b.googleSearchFrameHeight,d[l]),f=document.createElement("iframe"),a={name:"googleSearchFrame",src:a,frameBorder:b.googleSearchFrameborder,width:c,height:d,marginWidth:"0",
marginHeight:"0",hspace:"0",vspace:"0",allowTransparency:"true",scrolling:"no"},g;for(g in a)f.setAttribute(g,a[g]);e.appendChild(f);f.attachEvent?f.attachEvent("onload",function(){window.scrollTo(0,0)}):f.addEventListener("load",function(){window.scrollTo(0,0)},!1);h&&b.setInterval(function(){if(b.location.hash&&"#"!=b.location.hash){var a=b.location.hash.substring(1)+"px";f.height!=a&&"0px"!=a&&(f.height=a)}},10)}b.googleSearchIframeName=null;b.googleSearchFormName=null;b.googleSearchResizeIframe=
null;b.googleSearchQueryString=null;b.googleSearchDomain=null;b.googleSearchPath=null;b.googleSearchFrameborder=null;b.googleSearchFrameWidth=null;b.googleSearchFrameHeight=null;b.googleSearchNumAds=null;b.googleNumSearchResults=null;b.googleAdtest=null}y();}).call(this);
