/*JS for new NBA search navigation */
(function($) {

  $(function() {
    var module = {};

    module.searchNav = function() {
      $('.nba-nav__search').on('click', function(e) {
        var $searchBar = $('.nba__search-results--bar');
        if ($searchBar.length) {
          e.preventDefault();
          $searchBar.trigger('focus');
        }
      });
    };

    module.start = function() {
      module.searchNav();
    };

    $(module.start);
  });
})(jQuery);
