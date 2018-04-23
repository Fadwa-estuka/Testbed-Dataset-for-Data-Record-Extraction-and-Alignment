if(!DailyKos) var DailyKos = {};

DailyKos.Domain = window.location.host.toString().replace(/^.*?dailykos/, 'dailykos').replace('/', '');

DailyKos.MobileRedirect = (function() {
  var skipMobile  = $.cookie('skip_mobile') == 'on';
  var mobileAgent = $.browser.mobile;
  var mobileSite  = /^m\..*/.test(window.location.host);

  var cookieOptions = function(){
    return {
      path: '/',
      domain: DailyKos.Domain,
      expires: 7
    };
  };

  var mobileSupportedRoute = function() {
    var path = window.location.pathname;

    return ((path == "/") ||
      (/^\/stor.*/.test(path)) ||
      (/^\/blog.*/.test(path))
    );
  };

  var fullRoot = function() {
    var url = window.location.host.toString();

    return window.location.protocol + '//' + url.replace(/^.*?dailykos/, 'dailykos');
  };

  var redirectToMobileEquivalent = function() {
    window.location = window.location.protocol + '//' + window.location.toString().replace(/^.*?dailykos/, 'm.dailykos');
  };

  var turnOnSkipMobile = function(event) {
    event.preventDefault();
    $.cookie('skip_mobile', 'on', cookieOptions());
    window.location = fullRoot();
  };

  var turnOffSkipMobile = function(event) {
    event.preventDefault();
    $.cookie('skip_mobile', 'off', cookieOptions());
    redirectToMobileEquivalent();
  };

  return {
    redirect: function() {
      if (skipMobile && mobileSite) {
        window.location = fullRoot();
      }

      if (!skipMobile && mobileAgent && !mobileSite && mobileSupportedRoute()) {
        redirectToMobileEquivalent()
      };
    },

    switchMobilePreference: function(){
      $(function(){
        $('.mobile_preference').click(function(event){
          if (mobileSite){
            turnOnSkipMobile(event);
          } else {
            turnOffSkipMobile(event);
          }
        });
      });
    }
  }

})();

DailyKos.MobileRedirect.redirect();
DailyKos.MobileRedirect.switchMobilePreference();
