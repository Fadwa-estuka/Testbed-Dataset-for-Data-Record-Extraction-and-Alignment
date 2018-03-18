function trackClick(e) {
  e.stopPropagation();
  var $link = $(e.currentTarget);
  var data = $.extend({},
      $('#search').data(),
      { u: e.currentTarget.href },
      $link.data('click'));

  $.ajax('/clicked', {
    async: false,
    data: data
  });
}

$(document).on('click', 'a[data-click]', trackClick);
