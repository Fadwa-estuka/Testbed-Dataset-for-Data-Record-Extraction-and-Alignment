$document = $(document);

$document.ready(function() {
  function toggleCollapsible(e) {
    var collapsed = 'collapsed';
    $collapsible = $(this).parents('.collapsible');
    $caret = $(this).children('.caret').first();
    $caret.toggleClass('left');

    var isCollapsed = $collapsible.hasClass(collapsed);
    $collapsible.toggleClass(collapsed);
  }

  $document.on('click keypress', '.dropdown-toggle.show-less, .dropdown-toggle.show-more', toggleCollapsible)
});
