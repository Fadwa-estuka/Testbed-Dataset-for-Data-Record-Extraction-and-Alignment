if(typeof(window.removeSpecialCharacters) == "undefined"){
  function removeSpecialCharacters(){
    var breads = utag_data.page_breadcrumb.split('&gt;');
    var results = [];
    for(i=0;i<breads.length; ++i){
      var s = breads[i].replace("&amp;", ' ').replace(/[*'=!+#*~;^()<>\[\],.&]/gi, '').trim();
       results.push(s);
    }
   return results;
  }
}
var tmntag = tmntag || {};
tmntag.cmd = tmntag.cmd || [];
(function(){
   if(!document.getElementById('purch_newegg_js_script')){
      var purch = document.createElement('script');
      purch.id = 'purch_newegg_js_script';
      purch.async = true;purch.type = 'text/javascript';
      var useSSL = 'https:' == document.location.protocol;
      purch.src = (useSSL ? 'https:' : 'http:') + '//ads.servebom.com/tmnhead.js';
      var node = document.getElementsByTagName('script')[0];
      node.parentNode.insertBefore(purch, node);
   }
})();

tmntag.cmd.push(function(){
  tmntag.placement(2335);
  tmntag.target({'kw': removeSpecialCharacters()});
  tmntag.start();
  tmntag.adTag('purch_Y_L_0_1', false);
});

  s.linkTrackVars='prop26,eVar50';
  s.prop26='-_--_--_--_--_-DYMX-ADS-16001B_728_Cat-_-Pers_MNT_Imp-_--_-'+new Date().toISOString()+'-_-';
  s.eVar50='-_--_--_--_--_-DYMX-ADS-16001B_728_Cat-_-Pers_MNT_Imp-_--_-'+new Date().toISOString()+'-_-';
  s.tl(this,'o','Target Banner impression monetate');

if(jQuery){
  jQuery('#purch_Y_L_0_1').click(function(){
    s.linkTrackVars='prop26,eVar50';
  s.prop26='-_--_--_--_--_-DYMX-ADS-16001B_728_Cat-_-Pers_MNT-_--_-'+new Date().toISOString()+'-_-';
  s.eVar50='-_--_--_--_--_-DYMX-ADS-16001B_728_Cat-_-Pers_MNT-_--_-'+new Date().toISOString()+'-_-';
  s.tl(this,'o','Target Banner click monetate');
  });
}