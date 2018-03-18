(function()
{
  var data = {"site":"zendesk","iname":"d2VlYmx5X2Rldg==","dev":false};
  var pluses = /\+/g;

  var decode = function(s)
  {
    return decodeURIComponent(s.replace(pluses, ' '));
  };

  var converted = function(s)
  {
    if (s.indexOf('"') === 0) {
      // This is a quoted cookie as according to RFC2068, unescape
      s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    }
    return s;
  };

  var getCookie = function(key)
  {
    if (!key) return null;

    var cookies = document.cookie.split('; ');
    var result = null;
    for (var i = 0, l = cookies.length; i < l; i++) {
      var parts = cookies[i].split('=');
      var name = decode(parts.shift());
      var cookie = decode(parts.join('='));

      if (key === name) {
        result = converted(cookie);
        break;
      }
    }

    return result;
  };

  var setCookie = function(key, value, options)
  {
    options = options || {};

    value = String(value);

    document.cookie = [
      encodeURIComponent(key),
      '=',
      encodeURIComponent(value),
      options.path ? '; path=' + options.path : '',
      options.domain ? '; domain=' + options.domain : '',
      options.secure ? '; secure' : ''
    ].join('');
  };

  var insertLink = function(href) {
      var head = document.head || document.querySelector('head') || document.documentElement;
      var node = document.createElement('link');
      node.rel = 'stylesheet';
      node.href = href;
      head.insertBefore(node, head.firstChild);
  };

  var insertScript = function(src, callback)
  {
    var head = document.head || document.querySelector('head') || document.documentElement;
    var node = document.createElement('script');
    node.type = 'text/javascript';
    node.src = src;
    node.onload = node.onreadystatechange = function(_, isAbort)
    {
      if (isAbort || !node.readyState || /loaded|complete/.test(node.readyState)) {
        // Handle memory leak in IE
        node.onload = node.onreadystatechange = null;
        // Remove the node
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }

        // Dereference the node
        node = null;

        // Callback if not abort
        if (!isAbort) {
          callback();
        }
      }
    };

    head.insertBefore(node, head.firstChild);
  };


  var baseUrl = 'https://weebly.inbenta.com/';

  
  data['baseURL'] = baseUrl;

  insertLink(baseUrl+'assets/css/inbenta.css?1481717180');


    insertScript(baseUrl+'assets/js/inbenta.js?1481717180', function(){
      window.Inbenta.baseURL = baseUrl;
      main(data);
    });

})();
