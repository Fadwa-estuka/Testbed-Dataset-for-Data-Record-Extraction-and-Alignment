$(document).ready(function() {
  var browser = (function() {
    var isIE =  /*@cc_on!@*/false || !!document.documentMode;
    var isEdge = !isIE && !!window.StyleMedia;

    return {
      isIE: isIE,
      isEdge: isEdge
    }
  })();

  (function setMenuWidth() {

    // dear maintainer,
    //   please forgive me, for i know that i have sinned

    var $menu = $("#menu");

    var width = $menu.width();
    var $items = $menu.find('li').not('.category-label').not('.facet').not('.dropdown');
    var itemsWidth = $items.map(function(i, item) { return $(item).width() + 2; });

    var sum = 0,
        items = 0;

    for (var i = 0, len = itemsWidth.length; i < len; i++) {
      var item = itemsWidth[i];
      if (typeof item !== 'number') continue;
      sum += item;
      items++;
    }

    var delta = ((width - sum) / items);
    var total = 0;
    for (var i = 0, len = $items.length; i < len; i++) {
      var item = $items[i];
      var $item = $(item);
      var newWidth = $item.width() + delta - 2;
      if (i == len - 1) {
        newWidth = $item.width() + delta + 4;
        if (browser.isIE || browser.isEdge) newWidth -= 2;
      }
      $item.width(Math.ceil(newWidth));
      total += newWidth + 1;
    }
  })();
});
