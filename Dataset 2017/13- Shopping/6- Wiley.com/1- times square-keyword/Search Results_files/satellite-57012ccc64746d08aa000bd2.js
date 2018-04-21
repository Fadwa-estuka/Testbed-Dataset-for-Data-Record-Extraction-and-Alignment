_satellite.pushBlockingScript(function(event, target, $variables){
  $('a[href*="onlinelibrary.wiley.com"]').click(function(){
  _satellite.setVar('exitLinkText',$(this).text());
  _satellite.track('_WOLCLICK');
});
});
