function _ps_LoadJavaScript(n,t,i,r,u,f){var s=document._ps_ScriptLoadStatus,h,o,l,e,c;if(!u)for(h=s.length,o=0;o<h;o++)if(s[o].url===n){t&&t(i);return}if(l={url:n,status:1},s[h]=l,r&&document._ps_scripts.push({scriptTag:n,isLoaded:!1}),e=document.createElement("script"),e.type="text/javascript",e.language="javascript",e.id="ActionScript_"+n,e.src=location.protocol==="file:"&&n.substr(0,2)==="//"?"http:"+n:n,navigator.userAgent.toLowerCase().match(/msie [6-9].0/))if(e.onreadystatechange=function(){e&&(e.readyState==="loaded"||e.readyState==="complete")&&(e.onreadystatechange=null,t&&t(i))},e.onerror=function(n){e.onload=null;f&&f(n,i)},c=document.getElementsByTagName("head")[0],c!=null)c.appendChild(e);else throw"The page must have a defined <head> tag for the control to render in IE";else e.onload=function(){e.onload=null;t&&t(i)},e.onerror=function(n){e.onload=null;f&&f(n,i)},document.body.appendChild(e)}function _ps_ScriptLoadedCallback(n){for(var i,r=document._ps_ScriptLoadStatus,u=r.length,t=0;t<u;t++)i=r[t],i.url==n&&(i.status=2)}try{pswtb}catch(ex){pswtb={}}document._ps_scripts||(document._ps_scripts=[]);document._ps_ScriptLoadStatus||(document._ps_ScriptLoadStatus=[]);pswtb.loader||(pswtb.loader={});pswtb.loader.finish||(pswtb.loader.finish=function(n){window.setTimeout(new Function("pswtb.loader.finish('"+n+"');"),20)});
(function(){
	var scripts=['//embeddedcloud.pricespider.com/js366/embeddedcommon.js','//embeddedcloud.pricespider.com/js366/responsivecontainerv1.js'];
	for (var i=0;i<scripts.length;i++)
		_ps_LoadJavaScript(scripts[i],_ps_ScriptLoadedCallback,scripts[i],true);
})();
document._ps_PriceSpiderBaseUrl='http://redirect.pricespider.com/';
document._ps_SiteImageBaseURL='//embeddedcloud.pricespider.com/imgs/';
document._ps_EmbeddedServicesUrl='//embedded.pricespider.com/';
if (!document._ps_ImpressionId) document._ps_ImpressionId='0cb06c0a-9916-4ce1-8db1-5537fc69caee';

// InitJavascript
function ps_WidgetInit_4a96fd0909b54d69a149827916ad74bd(options)
{
  if (!pswtb.sandbox)
    pswtb.sandbox = {};
  
  if (!pswtb.sandbox.openWtbLightbox)
  {
    pswtb.sandbox.openWTB = function(a, sku, tab) 
    {
      if (!a)
        throw new Error('Anchor cannot be empty. Call this function from an element\'s onclick event and pass the anchor element.');
      
      var doOpen = true;
      if (pswtb.sandbox.wtbInstaneGuid)
      {
        var widget = pswtb.core.findWidget(pswtb.sandbox.wtbInstaneGuid);
        
        if (widget.sku.toLowerCase() == sku.toLowerCase())
        {
          doOpen = false;
          _psrc_Close(pswtb.sandbox.wtbInstaneGuid);
          pswtb.sandbox.disposeAfterAnimation(widget);
        }
        else
        {
          _psrc_Close(pswtb.sandbox.wtbInstaneGuid, true);
          pswtb.core.dispose(pswtb.sandbox.wtbInstaneGuid);
        }
      }
      
      if (doOpen)
      {
        pswtb.core.render({
          widgetConfigurationId: '4a96fd09-09b5-4d69-a149-827916ad74bd',
          sku: sku,
          tab: tab,
          anchor: a,
          container: a.parentNode,
          open: true
        });
      }
    };
    
    pswtb.sandbox.disposeAfterAnimation = function(widget) {
      pswtb.sandbox.onCloseTimer = window.setInterval(
        function() {
          if (!pswtb.fx.getAnimation(widget))
          {
            if (pswtb.sandbox.onCloseTimer)
            {
              window.clearInterval(pswtb.sandbox.onCloseTimer);
              pswtb.sandbox.onCloseTimer = null;
            }

            pswtb.core.dispose(widget.instanceGuid);
          }
        }, 
        pswtb.fx.frameTimeDuration
      );
    };
    
    pswtb.sandbox.EscapePress = function(e) {
      var widget = document._psrc_OverlayInstanceGuid ? pswtb.core.findWidget(document._psrc_OverlayInstanceGuid) : null;
      
      if (widget && e.keyCode == 27)
      {
        _ps_RemoveEventListener(document.body, 'keyup', pswtb.sandbox.EscapePress);
        pswtb.sandbox.disposeAfterAnimation(widget);      
      }
    };
  }
    
  // don't use jQuery, on resize handling gets all messed up in Chrome and IE for this client
  document._ps_jQuery = false;
  
  if (!options.language)
  {
    var frenchMatch = location.pathname.match(/ca_fr/i);
    if (frenchMatch)
      options.language = 'FR';
  }
  
  if (options.tab)
  {
    switch (options.tab.toLowerCase())
    {
      case 'local':
      case 'localstores':
      case 'local stores':
      case 'buy local':
        options.contentOptions = { initialSelectedTabIndex: 1 }
        break;
    }
  }
  
  pswtb.core.addEventHandler(
    options,
    pswtb.core.eventType.Show,
    false,
    function (params) {
      if ( (location.pathname && location.pathname.match(/\/business\//i)) ||
           (location.search && location.search.match(/psmode=business/i)) )
      {
        var allLayouts = params.widget.layouts;
        params.widget.layouts = [];
        for (var i = 0; i < allLayouts.length; i++)
        {
          var layout = allLayouts[i];
          if (layout.Layout.match(/business/i))
          {
            if (layout.Layout == 'Business')
            {
              // make a copy so we don't end up changing the original layout object which is also part of the cached widget config
              layout = jQuery.extend({}, layout);
              layout.Layout = 'Default';
            }
            
            params.widget.layouts.push(layout);
          }
        }
      }
      else
      {
        var allLayouts = params.widget.layouts;
        params.widget.layouts = [];
        for (var i = 0; i < allLayouts.length; i++)
        {
          if (!allLayouts[i].Layout.match(/business/i))
            params.widget.layouts.push(allLayouts[i]);
        }
      }
    }
  );

  pswtb.core.addEventHandler(
    options,
    pswtb.core.eventType.AfterShow,
    false,
    function (params) {
      var widget = params.widget;
      
      pswtb.sandbox.wtbInstaneGuid = widget.instanceGuid;
      
      pswtb.core.remove(widget.content.button);
      widget.content.button = widget.displayOptions.anchor;
      
      if (document._ps_OneTimeMatchHistory)
      {
        for (var i = 0; i < document._ps_OneTimeMatchHistory.length; i++)
        {
          if (document._ps_OneTimeMatchHistory[i] == 'open')
          {
            document._ps_OneTimeMatchHistory.splice(i, 1);
            break;
          }
        }
      }
    }
  );
  
  pswtb.core.addEventHandler(
    options,
    pswtb.core.eventType.Click,
    false,
    function (params) {
      jQuery('a.ps_CloseStyle').click(function() {
        pswtb.sandbox.disposeAfterAnimation(params.widget);
      });
      
      _ps_AddEventListener(document.body, 'keyup', pswtb.sandbox.EscapePress);
    }
  );
  
  pswtb.core.addEventHandler(
    options,
    pswtb.core.eventType.Dispose,
    false,
    function (params) {
      params.widget.content.button = null; // don't dispose the external anchor
      pswtb.sandbox.wtbInstaneGuid = null;
    }
  );
  
  if (options.preload && !options.sku && !options.preloadCallback)
  {
    options.preloadCallback = function ()
    {
        jQuery('[onclick*="pswtb.sandbox.openWTB"]').each(function ()
        {
            var skuMatch = this.onclick.toString().match(/pswtb.sandbox.openWTB\(this,[ ]+([^,]+),.*\)/i);
            if (skuMatch)
                sku = eval(skuMatch[1]);

            if (sku)
              pswtb.core.cacheConfiguration({
                  widgetConfigurationId: '4a96fd09-09b5-4d69-a149-827916ad74bd',
                  sku: sku
              });
        });
    };
  }

  if (pswtb.core.getVersion() <= 360 && !pswtb.sandbox.patched)
  {
    pswtb.sandbox.patched = true;
  
    _ps_AddEventListener = function (obj, eventName, callback)
    {
        try
        {
            obj.addEventListener(eventName, callback, false);
        }
        catch (e)
        {
            obj.attachEvent(eventName, callback);
        }
    };
    
    ps_Show = 
    pswtb.core.render = function (zDisplayOptions)
    {
        if (!zDisplayOptions)
            throw "zDisplayOptions cannot be null.";

        if (!zDisplayOptions.widgetConfigurationId || zDisplayOptions.widgetConfigurationId == '')
            throw "widgetConfigurationId cannot be null or empty string.";

        var preload = zDisplayOptions.preload;

        if (!preload)
        {
            _ps_ClearRemoved();

            if (zDisplayOptions.replaceIfExist)
            {
                var toBeRemoved = [];
                var l = document._ps_widgetInfos.length;
                for (var i = 0; i < l; i++)
                {
                    var widget = document._ps_widgetInfos[i];
                    if (widget.widgetConfigurationId.replace(/-/g, '').toLowerCase() === zDisplayOptions.widgetConfigurationId.replace(/-/g, '').toLowerCase() &&
                        widget.container === zDisplayOptions.container)
                    {
                        toBeRemoved.push(widget.instanceGuid);
                    }
                }

                while (toBeRemoved.length)
                    pswtb.core.dispose(toBeRemoved.pop());
            }
        }

        var functionName = 'ps_WidgetInit_' + _ps_GetInstanceGuidStr(zDisplayOptions.widgetConfigurationId);
        try
        {
            eval('if (' + functionName + ') ' + functionName + '(zDisplayOptions);');
        }
        catch (ex)
        {
            // if the exception contains the init function name it is not defined because there is no init script.
            // otherwise show the error which is from within the init script
            if (ex.message.indexOf(functionName) < 0)
                throw ex;
        }

        if (!preload)
        {
            // a cancelShow could be set from the init function canceling the widget initialization 
            if (zDisplayOptions.cancelShow)
                return null;
        }

        var widgetInfo = {
            instanceGuid: _ps_GenerateGuid(),
            widgetConfigurationId: zDisplayOptions.widgetConfigurationId
        };

        if (!preload)
        {
            // get the containerElement
            if (zDisplayOptions && (zDisplayOptions.container))
            {
                widgetInfo.container =
                    typeof zDisplayOptions.container == 'string' ?
                        document.getElementById(zDisplayOptions.container) :
                        zDisplayOptions.container;
            }

            if (widgetInfo.container == null)
                throw "Container is incorrectly specified or not specified at all.";
        }

        var country = _ps_GetCookie('ps_country');
        if (country)
        {
            if (!pswtb.country.getCountryId(country))
                _ps_SetCookie('ps_country', null);

            pswtb.country.setInitOptionsForCountry(zDisplayOptions, country);
        }

        // set the SKU
        var skuOverride = _ps_GetSkuUrlOverride();
        if (skuOverride && country)
        {
            if (!pswtb.country.skuOverrideWarningDisplayed)
            {
                alert('PS WhereToBuy: SKU overrides do not work when Country Selector is enabled. pssku parameter ignored.');
                pswtb.country.skuOverrideWarningDisplayed = true;
            }

            skuOverride = null;
        }

        if (skuOverride)
        {
            widgetInfo.sku = skuOverride
        }
        else if ((zDisplayOptions) && (zDisplayOptions.sku))
            widgetInfo.sku = zDisplayOptions.sku.replace(/^[ ]+|[ ]+$/g, '');
        else if ((zDisplayOptions) && (zDisplayOptions.pid))    // support the old parameter
            widgetInfo.sku = zDisplayOptions.pid;
     
        // set the product group
        var productGroupOverride = _ps_GetProductGroupUrlOverride();
        if (productGroupOverride)
            widgetInfo.tags = productGroupOverride
        else if ((zDisplayOptions) && (zDisplayOptions.productGroup))    // the term tag was replaced by productGroup
            widgetInfo.tags = zDisplayOptions.productGroup.replace(/^[ ]+|[ ]+$/g, '');
        else if ((zDisplayOptions) && (zDisplayOptions.tags))
            widgetInfo.tags = zDisplayOptions.tags.replace(/^[ ]+|[ ]+$/g, '');

        if (zDisplayOptions.customTrackingId)
            widgetInfo.customTrackingId = zDisplayOptions.customTrackingId;

        var languageOverride = location.search ? location.search.toLowerCase().match(/pslanguage=([a-z]{2})/i) : null;
        if (languageOverride && pswtb.country.getCountryId(languageOverride[1]))
            widgetInfo.language = languageOverride[1].toUpperCase();
        else if (zDisplayOptions.language && pswtb.country.getCountryId(zDisplayOptions.language))
            widgetInfo.language = zDisplayOptions.language;

        if (zDisplayOptions.region && zDisplayOptions.region != '')
            widgetInfo.region = zDisplayOptions.region;

        if (widgetInfo.sku)
        {
            // batch configuration is On by default 
            widgetInfo.batchConfiguration = zDisplayOptions.batchConfiguration ? zDisplayOptions.batchConfiguration : true;
        }
        else if (zDisplayOptions.batchConfiguration)
        {
            if (!widgetInfo.sku)
                throw "SKU value must be supplied when using batch initialization.";

            widgetInfo.batchConfiguration = zDisplayOptions.batchConfiguration;
        }

        if (zDisplayOptions.batchConfigurationTimeout)
            widgetInfo.batchConfigurationTimeout = zDisplayOptions.batchConfigurationTimeout;

        // This is a system style which is used for an invisible element to validate if non-IE browsers have loaded a dynamic stylesheet 
        // stylesheetLoadedValidatorStyle
        widgetInfo.stylesheetLoadedValidatorStyle = (zDisplayOptions && (zDisplayOptions.stylesheetLoadedValidatorStyle)) ? zDisplayOptions.stylesheetLoadedValidatorStyle : 'ps_StylesheetLoadedValidatorStyle';

        widgetInfo.countryRegion = zDisplayOptions.countryRegion;

        widgetInfo.stylesheetDomain = zDisplayOptions.stylesheetDomain;

        // set the psdebug option
        pswtb.debug.getDebug(zDisplayOptions, widgetInfo);

        if (!preload)
        {
            // copy all the possible style options
            _ps_CopyStyleOptions(zDisplayOptions, widgetInfo, true);

            widgetInfo.displayOptions = zDisplayOptions;

            document._ps_widgetInfos.push(widgetInfo);

            //WidgetJSEvents
            if (zDisplayOptions.events)
            {
                for (var i = 0; i < zDisplayOptions.events.length; i++)
                {
                    var eventInfo = zDisplayOptions.events[i];
                    eventInfo.instanceGuid = widgetInfo.instanceGuid;
                    document._ps_eventInfos.push(eventInfo);
                }
                zDisplayOptions.events = null;  // clear the event markers from the display options because those have been registered as real evenmts for an instance
            }
        }

        if (preload && !zDisplayOptions.cacheConfiguration)
        {
            if (zDisplayOptions.preloadCallback)
                zDisplayOptions.preloadCallback(zDisplayOptions);

            return;
        }
        else
        {
            delete zDisplayOptions.cacheConfiguration;

            if (!document._ps_ImpressionId)
            {
                if (!document._ps_pendingShowRequestGetConfiguration)
                    document._ps_pendingShowRequestGetConfiguration = [];

                document._ps_pendingShowRequestGetConfiguration.push(widgetInfo);
            }
            else
                _ps_GetConfiguration(widgetInfo);
        }

        return widgetInfo.instanceGuid;
    };
    
    _ps_GetConfigurationCallback = function (result)
    {
        if (result)
        {
            var widgetInfo = _ps_FindWidgetInfo(result.InstanceGuid);

            var cachedConfiguration;
            if (!widgetInfo || !result.fromCache)
            {
                cachedConfiguration = _ps_FinalizeLoadConfiguration(result);
                
                if (!widgetInfo)
                    return; // this is a preload
            }
            else
                widgetInfo.fromCache = true;

            if (widgetInfo)
            {
                // validate the widget specific scripts have loaded before proceeding, otherwise reschedule the execution for this widget
                var widgetScript = null;
                var widgetTypes = pswtb.core.widgetType;

                switch (result.WidgetId)
                {
                    case widgetTypes.OnlineStoresV1:
                        widgetScript = ['/productpricesv1.'];
                        break;

                    case widgetTypes.LightboxContainerV1:
                        widgetScript = ['/popupcontainerv1.'];
                        break;

                    case widgetTypes.LocalStoresV1:
                        widgetScript = ['/productlocalsellersv1.'];
                        break;

                    case widgetTypes.StaticLinksTrackerV1:
                        widgetScript = ['/customcommissionlinks.'];
                        break;

                    case widgetTypes.SingleOfferV1:
                        widgetScript = ['/singleoffer.'];
                        break;

                    case widgetTypes.TabContainerV1:
                        widgetScript = ['/tabcontainerv1.'];
                        break;

                    case widgetTypes.LocalStoresV2:
                        widgetScript = ['/productlocalsellersv2.'];
                        break;

                    case widgetTypes.LayoutContainerV1:
                        widgetScript = ['/layoutcontainerv1.'];
                        break;

                    case widgetTypes.OptionsContainerV1:
                        widgetScript = ['/optionscontainerv1.'];
                        break;

                    case widgetTypes.ProductLookupV1:
                        widgetScript = ['/productlookupv1.'];
                        break;

                    case widgetTypes.BannerV1: 
                        widgetScript = ['/bannerv1.'];
                        break;

                    case widgetTypes.ResponsiveContainerV1:
                        widgetScript = ['/responsivecontainerv1.'];
                        break;

                    case widgetTypes.OnlineStoresV2:
                        widgetScript = ['/onlinestoresv2.'];
                        break;

                    case widgetTypes.ProductDetailsV2:
                        widgetScript = ['/productdetailsv2.'];
                        break;
                }

                if (widgetScript)
                {
                    for (var i = 0; i < document._ps_scripts.length; i++)
                    {
                        var scriptStatus = document._ps_scripts[i];

                        for (var i2 = 0; i2 < widgetScript.length; i2++)
                            if (scriptStatus.scriptTag.toLowerCase().indexOf(widgetScript[i2]) > -1)
                            {
                                if (!scriptStatus.isLoaded)
                                {
                                    if (!document._ps_delayedWidgetConfiguration)
                                        document._ps_delayedWidgetConfiguration = [];

                                    document._ps_delayedWidgetConfiguration.push(result);
                                    window.setTimeout("_ps_RertyInitialization('" + result.InstanceGuid + "');", document._ps_FrameTimeDuration);
                                    return;
                                }
                                else
                                    break;
                            }
                    }
                }
                else
                    throw "Inrecognised widget type";

                var displayOptions = widgetInfo.displayOptions;
                var hasDisplayOptionLabels = displayOptions && displayOptions.labels;

                // set common options
                widgetInfo.widgetId = result.WidgetId;
                widgetInfo.productGroupConfigurations = result.ProductGroupConfigurations;
                widgetInfo.labels = {};

                if (result.ProductId)
                    widgetInfo.productId = result.ProductId;

                if (result.Country)
                    widgetInfo.country = result.Country;

                if (result.CountryId)
                    widgetInfo.countryId = result.CountryId;

                if (result.LanguageCountry)
                    widgetInfo.languageCountry = result.LanguageCountry;

                if (result.RedirectReferenceSeed)
                    _ps_SetRedirectRefSeed(result.RedirectReferenceSeed);

                widgetInfo.hideControlOnProductNotFound = _ps_Val(displayOptions, displayOptions.hideControlOnProductNotFound, result.HideControlOnProductNotFound);
                widgetInfo.hideOnNoSellers = _ps_Val(displayOptions, displayOptions.hideOnNoSellers, result.HideOnNoSellers);

                // set parent, if any
                if (displayOptions.parentInstanceGuid)
                    widgetInfo.parentInstanceGuid = displayOptions.parentInstanceGuid;

                if (result.LogInstanceId)
                    widgetInfo.logInstanceId = result.LogInstanceId;

                // set common labels

                switch (result.WidgetId)
                {
                    case widgetTypes.OnlineStoresV1:
                    case widgetTypes.ProductDetailsV2:
                    case widgetTypes.LightboxContainerV1:
                    case widgetTypes.LocalStoresV1:
                    case widgetTypes.StaticLinksTrackerV1:
                    case widgetTypes.SingleOfferV1:
                    case widgetTypes.TabContainerV1:
                    case widgetTypes.LocalStoresV2:
                    case widgetTypes.LayoutContainerV1:
                    case widgetTypes.OptionsContainerV1:
                    case widgetTypes.ProductLookupV1:
                    case widgetTypes.BannerV1:
                    case widgetTypes.ResponsiveContainerV1:
                    case widgetTypes.OnlineStoresV2:
                        // set parentLoadingSplashPanel - this option should only be set by a popupContainer
                        if (displayOptions && (displayOptions.parentLoadingSplashPanel && displayOptions.parentLoadingSplashPanel != null))
                            widgetInfo.parentLoadingSplashPanel = displayOptions.parentLoadingSplashPanel;

                        // JS options for the contained widget can be passed through the JS options for the container
                        if (displayOptions.contentOptions)
                            widgetInfo.contentOptions = displayOptions.contentOptions;

                        var labels = widgetInfo.labels;

                        // set productNotFoundErrorMessage
                        labels.productNotFoundErrorMessage =
                _ps_Label(hasDisplayOptionLabels, displayOptions, result, 'ProductNotFoundErrorMessage');

                        // set loadingLabelText
                        labels.loadingLabelText =
                _ps_Label(hasDisplayOptionLabels, displayOptions, result, 'LoadingLabelText');

                        // set copyright text
                        labels.footerCopyrightLabelText =
                _ps_Label(hasDisplayOptionLabels, displayOptions, result, 'FooterCopyrightLabelText');

                        // set logos text 
                        labels.footerLogoHtml =
                _ps_Label(hasDisplayOptionLabels, displayOptions, result, 'FooterLogoHtml');
                        
                        break;
                }

                switch (result.WidgetId)
                {
                    case widgetTypes.OnlineStoresV1:
                    case widgetTypes.OnlineStoresV2:
                    case widgetTypes.LocalStoresV1:
                    case widgetTypes.LocalStoresV2:
                        widgetInfo.saveLocationInCookie = _ps_Val(displayOptions, displayOptions.saveLocationInCookie, result.SaveLocationInCookie);
                        break;
                }

                if (result.NonFatalError)
                {
                    widgetInfo.nonFatalError = result.NonFatalError;

                    if (_ps_ArrayContains(document._ps_nonFatalErrors, result.NonFatalError) &&
                    ((result.NonFatalError === 'ProductGroupConfigurationConflictException' && result.ProductGroupConfigurationConflict != 3) ||
                          (result.NonFatalError !== 'ProductGroupConfigurationConflictException' &&
                          ((widgetInfo.hideControlOnProductNotFound && (result.NonFatalError === 'ProductNotFoundException' || result.NonFatalError === 'TagNotFoundException')) ||
                            (widgetInfo.hideOnNoSellers && result.NonFatalError === 'NoSellersFoundException')))))
                    {
                        if (!widgetInfo.debugKey)
                        {
                            var params = {
                                instanceGuid: widgetInfo.instanceGuid,
                                sku: widgetInfo.sku,
                                error: result.NonFatalError,
                                cancelShow: true
                            };

                            _ps_OnEvent(ps_EventType.CancelShow, widgetInfo.instanceGuid, params);

                            if (params.cancelShow)
                            {
                                if (result.NonFatalError === 'ProductGroupConfigurationConflictException' && result.ProductGroupConfigurationConflict === 1)
                                    alert('Multiple Product Group Configurations conflict occured.\nSpecify which Product Group should be used via the options.productGroup js parameter.\n\nProduct Group Configurations: ' + result.ProductGroupConfigurations);

                                // hide parent's loading splash panel, if any
                                pswtb.core.remove(widgetInfo.parentLoadingSplashPanel);

                                return;
                            }
                        }
                        else
                            widgetInfo.debugHidden = true;
                    }
                }

                // Handle the Universal Tracking ID source, if set
                var utidSourceType = _ps_Val(displayOptions, displayOptions.utidSourceType, result.UTIDSourceType);
                var utidSourceParamName = utidSourceType > 0 ? _ps_Val(displayOptions, displayOptions.utidSourceParamName, result.UTIDSourceParamName) : null;
                
                if (utidSourceType && utidSourceParamName && !widgetInfo.customTrackingId)
                {
                    var savedUTID = _ps_GetCookie('PriceSpiderWidget_UTID');

                    switch (utidSourceType)
                    {
                        // from URL query param 
                        case 1:
                            var utidRegex = new RegExp(utidSourceParamName + '=([^&]*)', 'i');
                            var utidMatch = location.search.match(utidRegex);
                            if (utidMatch)
                            {
                                widgetInfo.customTrackingId = utidMatch[1];
                                if (savedUTID != utidMatch[1])
                                    _ps_SetCookie('PriceSpiderWidget_UTID', utidMatch[1], 1, '/', location.hostname);
                            }
                            else
                                widgetInfo.customTrackingId = savedUTID;

                            break;

                        // from cookie
                        case 2:
                            var cookieValue = _ps_GetCookie(utidSourceParamName);
                            if (cookieValue)
                            {
                                widgetInfo.customTrackingId = cookieValue;
                                if (savedUTID != cookieValue)
                                    _ps_SetCookie('PriceSpiderWidget_UTID', cookieValue, 1, '/', location.hostname);
                            }
                            else
                                widgetInfo.customTrackingId = savedUTID;

                            break;
                    }
                }

                // handle the address param if passed
                if (displayOptions && displayOptions.address)
                {
                    var displayOptionsAddress = displayOptions.address;
                    if (displayOptionsAddress != _ps_GetAddress())
                    {
                        // latlong coord will not be set through the passed address widget to avoid 
                        _ps_SetAddress(
                displayOptionsAddress,
                result.storeInCookie,
                widgetInfo.instanceGuid,
                displayOptions.address.latitude,
                displayOptions.address.longitude);
                    }
                }

                // load the stylesheet
                var stylesheet = _ps_Val(displayOptions, displayOptions.stylesheet, result.Stylesheet);

                if (!stylesheet && !widgetInfo.parentInstanceGuid && !widgetInfo.displayOptions.disableDefaultStylesheet)
                {
                    var widgetStylesheetLoaded;
                    // Check no other widget rendered on the page loaded with a stylesheet, and only then assign the default stylesheet
                    for (var i = 0; i < document._ps_widgetInfos.length; i++)
                        if (document._ps_widgetInfos[i].stylesheet)
                        {
                            widgetStylesheetLoaded = true;
                            break;
                        }

                    if (!widgetStylesheetLoaded)
                    {
                        var protocol = location.protocol.toLowerCase();
                        stylesheet = 
                            (protocol !== 'http:' && protocol !== 'https:' ? 'http:' : '') +
                            '//embeddedcloud.pricespider.com/repository/common/stylesheet/basewtbstyle.css';
                    }
                }

                if (stylesheet)
                {
                    widgetInfo.stylesheet = stylesheet;

                    // Need explicit comparison for not unknown before using it as a return value, otherwise the statement aways returns only true 
                    // Unless otherwise specified lightbox stylesheet needs to loady syncronosly, before the button is rendrered, othewrwise there 
                    // is a chance of rendering the button in which case it will flicker shortly after when the styles load, or even the danger of 
                    // the user clicking on it in which case the lightbox might not render or render very strangely on at un undesirable spot 
                    // (the lightbox is heavilly dependent on the styles) 
                    widgetInfo.asyncCssLoad =
                        displayOptions.asyncCssLoad != undefined ?  
                            displayOptions.asyncCssLoad :
                            result.WidgetId !== 10 && result.WidgetId !== 28;

                    _ps_LoadStylesheet(stylesheet, result.WidgetConfigurationId);
                }

                widgetInfo.countrySelectorData = result.CountrySelectorData;
                widgetInfo.countrySelectorInactiveCountries = result.CountrySelectorInactiveCountries;

                switch (result.WidgetId)
                {
                    case widgetTypes.OnlineStoresV1:
                        _psps_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);
                        _pspp_GenerateProductPrices(widgetInfo);
                        break;

                    // Popup Container V1 
                    case widgetTypes.LightboxContainerV1:
                        _pspc_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);

                        _pspc_GenerateAnchor(widgetInfo);
                        break;

                    case widgetTypes.LocalStoresV1: // Local Stores V1
                        _psls_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);

                        // set the location (address)
                        if (displayOptions && (displayOptions.location != null))
                            widgetInfo.selectedSellerId = displayOptions.location;

                        // set selectedSellerId
                        if (displayOptions && (displayOptions.selectedSellerId != null))
                            widgetInfo.selectedSellerId = displayOptions.selectedSellerId;

                        _psls_GenerateProductLocalSellerMap(widgetInfo);
                        break;

                    case widgetTypes.StaticLinksTrackerV1:
                        _psccl_UpdateLinks(widgetInfo);
                        break;

                    case widgetTypes.SingleOfferV1:
                        _psso_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);

                        // load the content scripts
                        if (widgetInfo.defaultContentWidgetConfigurationId)
                        {
                            var scriptUrl = document._ps_EmbeddedServicesUrl + 'WidgetScript.psjs?d=true&wc=' + widgetInfo.defaultContentWidgetConfigurationId;
                            widgetInfo.defaultContentWidgetScriptUrl = scriptUrl;
                            _ps_LoadJavaScript(scriptUrl, _ps_ScriptLoadedCallback, scriptUrl);
                        }

                        // JS options for the contained widget can be passed through the JS options for the container
                        if (displayOptions.contentOptions)
                            widgetInfo.contentOptions = displayOptions.contentOptions;

                        if (result.NonFatalError === 'ProductNotFoundException')
                            widgetInfo.productNotFound = true;

                        _psso_Show(widgetInfo);
                        break;

                    case widgetTypes.TabContainerV1:
                        pswtb.tabs.prepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);

                        // JS options can be passed to the hosted widgets via the tabContentOptions param. 
                        // Must be an array, each element is the options object to be passed to the corresponding tabl's content widget
                        if (displayOptions.contentOptions && Array.isArray(displayOptions.contentOptions))
                            widgetInfo.contentOptions = displayOptions.contentOptions;

                        pswtb.tabs.show(widgetInfo);
                        break;

                    case widgetTypes.SonyOnlineSellersV1:
                        _pssos_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);
                        _pssos_GenerateSonyOnlineStores(widgetInfo);
                        break;

                    //case pswtb.core.widgetType.SonyLocalStoresV1:
                    case widgetTypes.LocalStoresV2:
                        switch (result.WidgetId)
                        {
                            case pswtb.core.widgetType.SonyLocalStoresV1:
                                _pssls2_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);
                                if (displayOptions && (displayOptions.storeId != null))
                                    widgetInfo.storeId = displayOptions.storeId;
                                break;

                            case pswtb.core.widgetType.LocalStoresV2:
                                _psls2_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);
                                break;
                        }

                        // set the location (address)
                        if (displayOptions && displayOptions.location && displayOptions.location != null)
                            widgetInfo.location = displayOptions.location;

                        if (displayOptions && displayOptions.latitude && displayOptions.longitude)
                        {
                            widgetInfo.latitude = displayOptions.latitude;
                            widgetInfo.longitude = displayOptions.longitude;
                        }

                        switch (result.WidgetId)
                        {
                            case pswtb.core.widgetType.SonyLocalStoresV1:
                                _pssls2_GenerateProductLocalSellerMap(widgetInfo);
                                break;

                            case pswtb.core.widgetType.LocalStoresV2:
                                _psls2_GenerateProductLocalSellerMap(widgetInfo);
                                break;
                        }
                        break;

                    case widgetTypes.LayoutContainerV1:
                        _pslc_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);

                        // JS options can be passed to the hosted widgets via the contentOptions param. 
                        // Must be an array, each element is the options object to be passed to the corresponding tabl's content widget
                        if (displayOptions.contentOptions && Array.isArray(displayOptions.contentOptions))
                            widgetInfo.contentOptions = displayOptions.contentOptions;

                        _pslc_Show(widgetInfo);
                        break;

                    case widgetTypes.OptionsContainerV1:
                        _psoc_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);

                        // JS options can be passed to the hosted widgets via the contentOptions param. 
                        // Must be an array, each element is the options object to be passed to the corresponding tabl's content widget
                        if (displayOptions.contentOptions && Array.isArray(displayOptions.contentOptions))
                            widgetInfo.contentOptions = displayOptions.contentOptions;

                        if (result.NonFatalError)
                            widgetInfo.nonFatalError = result.NonFatalError;

                        _psoc_Show(widgetInfo);
                        break;

                    case widgetTypes.ProductLookupV1:
                        _pspl_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);

                        // JS options can be passed to the hosted widgets via the contentOptions param. 
                        // Must be an array, each element is the options object to be passed to the corresponding tabl's content widget
                        if (displayOptions.contentOptions && Array.isArray(displayOptions.contentOptions))
                            widgetInfo.contentOptions = displayOptions.contentOptions;

                        _pspl_Show(widgetInfo);
                        break;

                    case widgetTypes.BannerV1:
                        _psb_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);
                        _psb_Show(widgetInfo);
                        break;

                    case pswtb.core.widgetType.ResponsiveContainerV1:
                        _psrc_PrepareDisplayOptions(widgetInfo, result, displayOptions, hasDisplayOptionLabels);
                        _psrc_Show(widgetInfo);
                        break;

                    case widgetTypes.OnlineStoresV2:
                        pswtb.onlineStores.prepareParams(widgetInfo, result, displayOptions, hasDisplayOptionLabels);
                        pswtb.onlineStores.show(widgetInfo);
                        break;

                    case widgetTypes.ProductDetailsV2:
                        pswtb.productDetails.prepareParams(widgetInfo, result, displayOptions, hasDisplayOptionLabels);
                        pswtb.productDetails.show(widgetInfo);
                        break;

                }
            }

            if (!result.fromCache)
            {
                while (cachedConfiguration &&
                cachedConfiguration.configurationCallbackQueue &&
                cachedConfiguration.configurationCallbackQueue.length > 0)
                {
                    var queuedWidgetInfo = cachedConfiguration.configurationCallbackQueue.pop();
                    cachedConfiguration.widgetConfiguration.InstanceGuid = queuedWidgetInfo.instanceGuid;
                    _ps_GetConfigurationCallback(cachedConfiguration.widgetConfiguration);
                }
            }
        }
    };

    pswtb.core.generateGuid = _ps_GenerateGuid;
    pswtb.core.cacheConfiguration = function (options)
    {
        if (!_ps_GetCachedConfiguration(options))
        {
            if (!options.preload)
            {
                options.preload = true;
                options.cacheConfiguration = true;
            }

            pswtb.core.render(options);
        }
    };
    
    if (!options.anchor)
    {
      options.cancelShow = true;
      window.setTimeout(function() { pswtb.core.render(options) }, pswtb.fx.frameTimeDuration);
      return;
    }
  }
}