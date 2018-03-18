/*global jQuery, encodeURIComponent, escape, unescape, decodeURIComponent */
(function($) {
  $.fn.serializeForStorage = function(timestamp) {
    var serialized = this.serializeArray();
    var results = [];

    results.push('timestamp=' + timestamp);

    for (var i = 0; i < serialized.length; i++) {
      results.push(encodeURIComponent(serialized[i].name) + '=' + encodeURIComponent(escape(serialized[i].value)));
    }

    return results.join('&');
  };
}(jQuery));

(function($) {
  $.unserializeForStorage = function(str) {
    var results = [];

    if (typeof str === 'string') {
      var splitted = str.split('&');

      for (var i = 0; i < splitted.length; i++) {
        var tmp = splitted[i].split('=');

        if (tmp.length === 2) {
          results.push({name: decodeURIComponent(tmp[0]), value: unescape(decodeURIComponent(tmp[1]))});
        }
      }
    }

    return results;
  };
}(jQuery));