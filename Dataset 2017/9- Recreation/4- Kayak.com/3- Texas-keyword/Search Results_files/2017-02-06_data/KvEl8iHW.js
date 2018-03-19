



/* ControlTag Loader for Kayak ffe6f79f-26bb-4d41-abf5-ef496b38c42c */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.18.1","schema_version":3},"confid":"KvEl8iHW","context_terms":[],"publisher":{"id":2078,"name":"Kayak","uuid":"ffe6f79f-26bb-4d41-abf5-ef496b38c42c","version_bucket":"stable","version_hash":"836fa2cc8007bb6234a5da3cc5415177"},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"user_data_timing":"load","store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":true,"link_hb_adserver":"dfp","target_fingerprint":false,"prioritized_segments":false,"context_terms":false,"dfp_premium":true,"control_tag_namespace":"kayak"},"prioritized_segments":[],"realtime_segments":[],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"//connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"//apiservices.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"//link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"//apiservices.krxd.net/um","click":"//apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","is_optout":"//beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","set_optin":"//apiservices.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"site":{"id":1510321,"name":"kayak.com"},"tags":[{"id":23381,"name":"Neustar AdAdvisor S2S User Matching","content":"<script>\n(function(){\nvar kuid = Krux('get', 'user');\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\nif (kuid) {\n    new Image().src = prefix + '//aa.agkn.com/adscores/g.js?sid=9212244187&_kdpid=2111c0af-fc3a-446f-ab07-63aa74fbde8e';\n     }\n})();\n</script>","target":null,"target_action":"append","timing":"asap","method":"iframe","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":28682,"name":"Krux DTC - KRUX_DATA_LAYER","content":"<script>\n(function() {\n    var dataObj = Krux('scrape.js_global', 'KRUX_DATA_LAYER'),\n        userKeys = 'locale,userValuationScore,geoIpCc,isLoggedIn',\n        omitKeys = 'obfuscatedSessionId, obfuscatedTrackingCookie',\n        custDelimit = 'none',\n        prefix = 'undefined_',\n        config = {\n            'userKeys': userKeys ? userKeys.split(',') : undefined,\n            'omitKeys': omitKeys ? omitKeys.split(',') : [],\n            'customDelimited': custDelimit ? custDelimit.split(',') : undefined,\n            'caseSensitive': 'true' === 'true',\n            'useFullPath': 'true' === 'true',\n            'useLastValue': 'false' === 'true',\n            'convertAttrNames': []\n        };\n    if (!prefix.match(/^$|null|undefined|false/)) {\n        config.convertAttrNames.push({\n            pattern: /((?:page|user)_attr_)/,\n            replacement: '$1' + prefix\n        });\n    }\n    config.omitKeys.push(/gtm\\./);\n    if(KRUX_DATA_LAYER && KRUX_DATA_LAYER.hotels && KRUX_DATA_LAYER.hotels.checkinDate){\n        dataObj.hotels.checkinDateMonth = KRUX_DATA_LAYER.hotels.checkinDate.split('-')[1];\n        dataObj.hotels.checkinDateDay = KRUX_DATA_LAYER.hotels.checkinDate.split('-')[2];\n    }\n    if(KRUX_DATA_LAYER && KRUX_DATA_LAYER.hotels && KRUX_DATA_LAYER.hotels.checkoutDate){\n        dataObj.hotels.checkoutDateMonth = KRUX_DATA_LAYER.hotels.checkoutDate.split('-')[1];\n        dataObj.hotels.checkoutDateDay = KRUX_DATA_LAYER.hotels.checkoutDate.split('-')[2];\n    }\n    if(KRUX_DATA_LAYER && KRUX_DATA_LAYER.cars && KRUX_DATA_LAYER.cars.pickupDate){\n        dataObj.cars.pickupDateMonth = KRUX_DATA_LAYER.cars.pickupDate.split('-')[1];\n        dataObj.cars.pickupDateDay = KRUX_DATA_LAYER.cars.pickupDate.split('-')[2];\n    }\n    if(KRUX_DATA_LAYER && KRUX_DATA_LAYER.cars && KRUX_DATA_LAYER.cars.returnDate){\n        dataObj.cars.returnDateMonth = KRUX_DATA_LAYER.cars.returnDate.split('-')[1];\n        dataObj.cars.returnDateDay = KRUX_DATA_LAYER.cars.returnDate.split('-')[2]; \n    }\n    if(KRUX_DATA_LAYER && KRUX_DATA_LAYER.flights && KRUX_DATA_LAYER.flights.arrivalDate){\n        dataObj.flights.arrivalDateMonth = KRUX_DATA_LAYER.flights.arrivalDate.split('-')[1];\n        dataObj.flights.arrivalDateDay = KRUX_DATA_LAYER.flights.arrivalDate.split('-')[2];\n    }\n    if(KRUX_DATA_LAYER && KRUX_DATA_LAYER.flights && KRUX_DATA_LAYER.flights.departureDate){\n        dataObj.flights.departureDateMonth = KRUX_DATA_LAYER.flights.departureDate.split('-')[1];\n        dataObj.flights.departureDateDay = KRUX_DATA_LAYER.flights.departureDate.split('-')[2];   \n    }\n    Krux('ingestDataLayer', dataObj, config);\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":23349,"name":"Google User Match","content":"<script>\r\n(function() {\r\n  if (Krux('get', 'user') != null) {\r\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\r\n  }\r\n})();\r\n</script>","target":"","target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":23378,"name":"eXelate Media User Match","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: \"//loadm.exelator.com/load\",\n      data: {\n          _kdpid: 'e4942ff0-4070-4896-a7ef-e6a5a30ce9f9',\n          buid: kuid,\n          p: '204',\n          g: '270',\n          j: '0'\n      }});\n  }\n  })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":23379,"name":"DataLogix User Matching","content":"<script>\n    (function() {\n        var kuid = Krux('get', 'user');\n        if (kuid) {\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\n            var i = new Image();\n            i.src = dlx_url;\n        }\n    })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":23380,"name":"Liveramp User Match","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":23382,"name":"LiveRamp User Matching","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;     \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":23393,"name":"DTC - IngestDataLayer (dataLayer)","content":"<script>\n(function(){\n    var dataObj = Krux('scrape.js_global', 'dataLayer'),\n        userKeys = 'geoIpCc',\n        omitKeys = 'ipAddress,obfuscatedSessionId',\n        custDelimit = 'null',\n        prefix = 'undefined_',\n        config = {\n            'userKeys': userKeys ? userKeys.split(',') : undefined,\n            'omitKeys': omitKeys ? omitKeys.split(',') : [],\n            'customDelimited': custDelimit ? custDelimit.split(',') : undefined,\n            'caseSensitive': 'false' === 'true',\n            'useFullPath': 'true' === 'true',\n            'useLastValue': 'true' === 'true',\n            'convertAttrNames': []\n        };\n    if (!prefix.match(/^$|null|undefined|false/)) {\n        config.convertAttrNames.push({\n            pattern: /((?:page|user)_attr_)/,\n            replacement: '$1' + prefix\n        });\n    }\n    config.convertAttrNames.push({\n        pattern: /\\./g,\n        replacement: '_'\n    }, {\n        pattern: /pixel_context_(.*)/,\n        replacement: '$1'\n    });\n    config.omitKeys.push(/gtm\\./);\n    Krux('ingestDataLayer', dataObj, config);\n})();\n</script>\n","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":[]},{"id":26726,"name":"Hulu_All  Search Package Car Hotel Flight US","content":"<img height=\"1\" width=\"1\" src=\"http://tags.bluekai.com/site/39662?limit=1&phint=KayakAud1%3Dq5a6j7xec\"/>","target":null,"target_action":"append","timing":"onload","method":"document","internal":false,"template_replacement":true,"criteria":["and",["and",["and",["intersects","$user_segments",["q5a6j7xec"]]]]]},{"id":23663,"name":"Rocketfuel User Match","content":"<script>\n(function() {\n    var i = new Image();\n    i.src = '//p.rfihub.com/cm?in=1&pub=6919';\n})();\n\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":false,"template_replacement":false,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22958,"name":"Technographic Data provider tag","content":"<script>\r\n// this tag is intentionally blank\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":22959,"name":"Krux Geographic Data provider tag","content":null,"target":null,"target_action":"append","timing":"onload","method":"document","internal":true,"template_replacement":true,"criteria":["and",["and",["and",["<=","$frequency",3]]]]},{"id":23707,"name":"Standard DTC","content":"<script>\n(function(){\n\n\tKrux('scrape',{'page_attr_domain':{url_domain: '2'}});\n\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","internal":true,"template_replacement":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
   */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.836fa2cc8007bb6234a5da3cc5415177', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
