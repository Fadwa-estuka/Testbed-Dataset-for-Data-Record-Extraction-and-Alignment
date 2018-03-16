define(['searchbox/accordian'], function() {
  var appWrapper = document.getElementById('se-app-wrapper');
  var app = document.getElementById('se-searchbox-app');

  function resizeAppWrapper() {
    var appHeight = app.clientHeight;
    appWrapper.style.height = appHeight + 'px';
  };

  return resizeAppWrapper;
});
