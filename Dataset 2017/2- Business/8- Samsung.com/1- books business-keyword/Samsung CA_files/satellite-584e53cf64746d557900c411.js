_satellite.pushAsyncScript(function(event, target, $variables){
  $('#sortBy').change(function(){
  var param = $('#sortBy option:selected').val();
  _satellite.setVar('searchSort', 'sort by|'+param);
  _satellite.track('search_sortby');
});


$('#resultsPerPage').change(function(){
	var param = $('#resultsPerPage option:selected').val();
  _satellite.setVar('searchSort', 'view|'+param);
  _satellite.track('search_sortby');
});
});
