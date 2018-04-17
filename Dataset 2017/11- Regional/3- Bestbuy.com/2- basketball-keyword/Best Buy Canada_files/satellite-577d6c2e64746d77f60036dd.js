_satellite.pushAsyncScript(function(event, target, $variables){
  $(".listing-product").on("click", ".listing-item a, .listing-item input:checkbox", function() {
  $.cookie('recordingNonUsefulSearch', false, { path: '/', domain: env.cookieDomain });
});
});
