var cp_C4w1ldN2d9PmVrkN = cp_C4w1ldN2d9PmVrkN || {};
try {
(function() {
   var d; try { d = top.document; } catch(e) { try { d = document; } catch(e) { } } 
  function crsspxl(z) {
           if(d.body == null || typeof d.body == 'undefined'){
               if(z < 2500){
                   var rec = function() { crsspxl(z * 2); };
                   setTimeout(rec, z);
               }
           }
           else {
               var l = 'http://tag.crsspxl.com/s2.html?d=9',i,j;
               try {
                   var r = (d) ? d.referrer : false;
                   r = encodeURIComponent(r);                   var a, f, q, e;
                   if (r) {
                       l += "&r=" + r;
                   }
               } catch(er) {
           }
           var t = encodeURIComponent(d.title);
           l += "&t=" + t;
           var u = encodeURIComponent(d.URL);
           l += "&u=" + u;
           try {
               var c = d.getElementsByTagName('META');
               var m = '';
               var n = '';
               for (var i=0;i<c.length;i++) {
                   if(c[i].name.toLowerCase() == 'description'){
                       m += (c[i].content + " " || '');
                   }
                   if(c[i].name.toLowerCase() == 'keywords'){
                       n += (c[i].content + " " || '');
                   }
               }
               l += "&m=" + encodeURIComponent(m);
               l += "&n=" + encodeURIComponent(n);
           } catch(er) {
           }
           try {
               var s = d.querySelectorAll(".product_description h1,#mast_title,#results-number,#pg_breadbrumbsV2,.scroll_prod");
               var b = '';
               for (j in s) {
                   b += (s[j].innerText || s[j].textContent ? (s[j].innerText ? s[j].innerText.substring(0,400) : s[j].textContent.substring(0,400)) : '');
               }
               b = b.replace(/[\t\r\n]/g, "");
               b = encodeURIComponent(b);
               l += "&b=" + b;
           } catch(er) {
           }
           try{
               if(cp_C4w1ldN2d9PmVrkN.dg1 || cp_C4w1ldN2d9PmVrkN.dg2){
                   l += (cp_C4w1ldN2d9PmVrkN.dg1) ? "&dg1="+cp_C4w1ldN2d9PmVrkN.dg1 : "";
                   l += (cp_C4w1ldN2d9PmVrkN.dg2) ? "&dg2="+cp_C4w1ldN2d9PmVrkN.dg2 : "";
               }
           }
           catch(er){ }
           try {
               var g=d.getElementById('crsspxl_494810001');
               if(typeof(g)!='undefined' && g!=null){
                   g.setAttribute('src', l);
               }
               else{
                   g=d.createElement('IFRAME');
                   g.width=1;
                   g.height=1;
                   g.frameBorder=0;
                   g.border=0;
                   g.marginwidth=0;
                   g.marginheight=0;
                   g.setAttribute('width', '1');
                   g.setAttribute('height', '1');
                   g.setAttribute('style', 'display:none;position:absolute;border:medium none;');
                   g.setAttribute('src', l);
                   d.body.appendChild(g);
               }
           }catch(er){
       }
   }
}

try {
   if(d.readyState != "complete"){
       if(window.addEventListener){ window.addEventListener("load", function() { setTimeout( function(){ crsspxl(100); }, 10) }, false); }
       else if(window.attachEvent){ window.attachEvent("onload", function() { setTimeout( function(){ crsspxl(100); }, 10) } ); }
       else { crsspxl(100); }
   }
   else {
       crsspxl(100);
   }
} catch(er) {
}})();
} catch(er) {
}
