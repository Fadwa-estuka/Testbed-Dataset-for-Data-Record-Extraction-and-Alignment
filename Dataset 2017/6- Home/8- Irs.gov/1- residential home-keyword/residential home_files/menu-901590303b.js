$(document).ready(function() {
  $menu = $("#main-menu");
  $body = $('body')

  $('#menu-button').click(function() {
    $body.toggleClass('show-menu');
  });
});
