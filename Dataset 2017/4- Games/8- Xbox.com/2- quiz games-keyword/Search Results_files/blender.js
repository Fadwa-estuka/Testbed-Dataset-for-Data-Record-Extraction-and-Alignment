var WebBlender = function($) {
    var messageHandlers = [];
    var timeoutMilliseconds = 30000;
    var loadingTimeout;

    /**
        Processes post messages.
        @private
      */
    var processMessage = function(event) {
        var eventToProcess = event.originalEvent || event;
        if (eventToProcess && eventToProcess.data && JSON.parse) {
            var parsed;
            try {
                parsed = JSON.parse(eventToProcess.data);
                if (parsed.message === 'ready') {
                    clearTimeout(loadingTimeout);
                }
            } catch (e) {
                // failed to parse message
            }
        }

        for (var i = 0; i < messageHandlers.length; i++) {
            messageHandlers[i](eventToProcess);
        }
    };

    $(window).on("message", processMessage);

    var parentElement;

    var getCliBlendUrl = function(environment, client, flight, deviceFamily) {
        var env = environment && environment.toLowerCase && environment.toLowerCase() || '';
        var format = 'https://{host}/{client}{deviceFamily}{flight}';
        var host;
        switch (env) {
            case "dev":
                host = 'cliblends.dev.microsoft.com';
                break;
            case "int":
                host = 'uniblends.www.microsoft.com/int';
                break;
            case "ppe":
                host = 'uniblends.www.microsoft.com/ppe';
                break;
            case "prod":
            default:
                host = 'www.microsoft.com/uniblends';
                break;
        }

        var url = format
            .replace('{host}', host)
            .replace('{client}', client && $.trim(client) ? '?client=' + client : '?client=')
            .replace('{deviceFamily}', deviceFamily && $.trim(deviceFamily) ? '&deviceFamily=' + $.trim(deviceFamily) : '')
            .replace('{flight}', flight && $.trim(flight) ? '&setflight=' + $.trim(flight) : '');

        return url;
    };

    var getConfigUrl = function(environment, client, flight) {
        var env = environment && environment.toLowerCase && environment.toLowerCase() || '';
        var format = 'https://{host}/webblend/api/config{client}{flight}';
        var host;

        switch (env) {
            case 'dev':
                host = 'oneblend.dev.microsoft.com';
                break;
            case 'int':
                host = 'unistoreblends-int.www.microsoft.com';
                break;
            case 'ppe':
                host = 'unistoreblends-ppe.www.microsoft.com';
                break;
                //case 'prod':
            default:
                host = 'www.microsoft.com';
                break;
        }
        var url = format.replace('{host}', host)
            .replace('{client}', client && $.trim(client) ? '?client=' + client : '')
            .replace('{flight}', flight && $.trim(flight) ? (client && $.trim(client) ? '&setflight=' : '?setflight=') + flight : '');

        return url;
    };

    var getPurchaseUrl = function(environment, purchaseServiceVersion) {
        var env = environment && environment.toLowerCase && environment.toLowerCase() || '';
        var format = 'https://{host}/{purchaseServiceVersion}/users/me/orders';
        var host;

        switch (env) {
            case 'dev':
            case 'int':
                host = 'purchase-int.mp.microsoft.com';
                break;
            default:
                host = 'purchase.mp.microsoft.com';
                break;
        }
        var url = format.replace('{host}', host)
            .replace('{purchaseServiceVersion}', purchaseServiceVersion == 7 ? 'v7.0' : 'v6.0');

        return url;
    };

    var createGuid = function() {
        var guidPattern = "xxxxxxxx-xxxx-4xxx-Rxxx-xxxxxxxxxxxx";

        function randomHexDigit() {
            return Math.floor(Math.random() * 16).toString(16);
        }

        var result = guidPattern.replace(/x/g, randomHexDigit);

        // update remainig 2 bits of fist digit of the clock_seq_hi_and_reserved:
        return result.replace("R", (8 | Math.floor(Math.random() * 3)).toString(16));
    };

    /**
        Generates the iframe that will host the blend.
        @private
      */
    var getBlendFrame = function(frameContainer, dimensions) {
        var frameId = 'wb_auto_blend_container';
        var frame = $('#' + frameId);
        var width = dimensions && dimensions.width || '456px';
        var height = dimensions && dimensions.height || '560px';

        if (frame.length) {
            frame.css({
                height: height,
                width: width
            });
        } else {
            frame = $('<iframe />', {
                id: frameId,
                name: frameId,
                src: '',
                style: 'width:{width}; height:{height}; position:relative; top:0; left:0; border:0; outline:none; display:block'.replace('{width}', width).replace('{height}', height)
            });

            frame.appendTo(frameContainer);
        }
        return frame;
    };

    /**
        Checks for flight.
        @private
      */
    var isFlightEnabled = function(flightSetByClient, flightToVerify) {
        var isEnabled = (document && document.cookie && document.cookie.indexOf(flightToVerify) > -1);
        if (!isEnabled) {
            var flights = flightSetByClient && flightSetByClient.split(',') || [];
            for (var i = 0; !isEnabled && i < flights.length; i++) {
                if (flights[i] === flightToVerify) {
                    isEnabled = true;
                }
            }
        }
        return isEnabled;
    };

    /**
        sends startData to the blend as a postMessage.
        @private
    */
    var postStartData = function(frameId, postBody){
        // for some reason jQuery selector and getElementById are not returning the same object back so we need to use getElementById here.
        var blendFrameInDom = document.getElementById(frameId);
        blendFrameInDom.contentWindow.postMessage(JSON.stringify({
            startdata: postBody
        }), '*');
    };

    /**
        Loads the blend.
        @private
    */
    var openBlend = function (postBody, parentElementId, environment, flight, clientType, hash, iframeOptions, deviceFamily) {

        parentElement = $('#' + parentElementId);

        var start = new Date().getTime();
        var blendFrame = getBlendFrame(parentElement, iframeOptions);
        // setting the src of the iframe to reload the page in case the app has already been loaded previously and is past the listening for postdata stage.
        //i.e. user clicks buy and cancels and clicks buy again
        //the assets will be cached by the browser
        blendFrame.attr('src', '');

        // old way - create a form, and post form using startData as body.
        // new emberCli way - load blend directly in blend frame. Then send message with startData.

        // Two blender.js partners:
        //  1. AMC - no flight data available.  Will always use default - no emberCli. Unless AMC can flight on their side.
        //  2. For Music/Video, flights should be available.

        var frameId = 'wb_auto_blend_container';

        // For emberCli, need to put postBody fields inside startdata - along with some other config elements
        postBody.Client = clientType;
        postBody.configUrl = getConfigUrl(environment, clientType, flight);

        // selApps sets which blend will load.  Needs to be in the form of: redeem.enterCode
        // which is the route name used in app/routes/index.js replaceWith method.
        // The 'hash' param passed to this openBlend method is in the form of: #/redeem/enterCode
        // so we need to remove the first 2 characters and replace any '/' with '.'.

        // In the future, we may support partners passing some context in this URL, such as PI ID.
        // If this is the case, this simple URL conversion might need to be updated.
        var selApps = hash.substr(2).replace('/', '.');
        postBody.selApps = selApps;

        var iframeLoadedTime, iframeLoadedSpan;
        var iFrameSrc = getCliBlendUrl(environment, clientType, flight, deviceFamily);
        blendFrame.attr('src', iFrameSrc);
        iframeLoadedTime = new Date().getTime();
        iframeLoadedSpan = iframeLoadedTime - start;

        blendFrame.one('load', function () {
            if(iframeLoadedSpan) {
                window.postMessage(JSON.stringify({
                    message: 'status',
                    data: 'blenderSDK: blender iframe loaded in ' + iframeLoadedSpan + 'ms'
                }), '*');
            }
            postStartData(frameId, postBody);
        });


        var stop = new Date().getTime();
        var span = stop - start;
        window.postMessage(JSON.stringify({
            message: 'status',
            data: 'blenderSDK: Loaded in ' + span + 'ms'
        }), '*');
    };

    /**
        Updates post body for style.
        @private
      */
    var updateStyle = function (postBody, style) {
        if (style) {
            postBody['Layout'] = style.layout || '';
            postBody['CssOverride'] = style.cssOverride || '';
        }
    };

     /**
        PreLoads the Html for the lend into a div child of the provided element.
        @public
        @method preLoadBlend
        @param {inputData} it is an object with all required properties
          inputData = {
              "ParentElementId": ParentElementId,
              "Environment": Environment,
              "Flight": Flight,
              "ClientType": ClientType,
              "DeviceFamily": deviceFamily,
          }
        {Environment} see resolveEnvironment for options (required)
        {Flight} see wiki for options (optional)
        {ClientType} see clientTypes (required)
        {DeviceFamily} deviceFamily in which Blends will be loaded. (e.g Windows.Xbox or Windows.Desktop) see the wiki for more details (optional)
        {ParentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)

      */

    var preLoadBlend = function (inputData) {
        if (inputData) {
            parentElement = $('#' + inputData.ParentElementId);

            var blendFrame = getBlendFrame(parentElement, {height: 0, width: 0});
            var iFrameSrc = getCliBlendUrl(inputData.Environment, inputData.ClientType, inputData.Flight, inputData.DeviceFamily);

            blendFrame.attr('src', iFrameSrc);

            window.postMessage(JSON.stringify({
                message: 'status',
                data: 'blenderSDK: Preload started'
            }), '*');
        }
    };

    /**
        Loads the Html for the purchase blend into a div child of the provided element.
        @public
        @method purchaseSingleItem
        @param {inputData} it is an object with all required properties
          inputData = {
              "AvailabilityId": AvailabilityId,
              "ProductId": ProductId,
              "SkuId": SkuId,
              "Options": Options,
              "Auth": Auth,
              "XToken": XToken,
              "ParentElementId": ParentElementId,
              "Environment": Environment,
              "Flight": Flight,
              "ClientType": ClientType,
              "Culture": Culture,
              "Market": Market,
              "CV": CV,
              "IdentityType": IdentityType,
              "IdentityValue": IdentityValue,
              "MediaOptions": MediaOptions,
              "IframeOptions": IframeOptions,
              "PurchaseServiceVersion": PurchaseServiceVersion,
              "Style": Style,
              "Quantity": Quantity,
              "DeviceFamily": deviceFamily,
              "TestClient": TestClient,
              "UseDelegatedAuth": UseDelegatedAuth,
          }
        {AvailabilityId} availability id of product to add to new order (required)
        {ProductId} product id of product to add to new order (required)
        {SkuId} sku id of product to add to new order (required)
        {Options} campaign options (optional)
        {Auth } RPS compact ticket (either Auth or XToken is required)
        {XToken} xToken (either Auth or XToken is required)
        {ParentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
        {Environment} see resolveEnvironment for options (required)
        {Flight} see wiki for options (optional)
        {ClientType} see clientTypes (required)
        {Culture} UI culture (required)
        {Market} service market (required)
        {CV} correlation-vector (required)
        {IdentityType} auth identityType (optional)
        {IdentityValue} auth identityValue (optional)
        {MediaOptions} media-specific options (optional)
        {IframeOptions} object specifying desired width and height overrides of iframe (optional)
        {PurchaseServiceVersion} string specifying desired version of purchase service to use. Will default if not supplied to oldest supported version (optional)
        {Style} layout and css override (optional)
        {Quantity} quantity of the item to add to new order (optional)
        {DeviceFamily} deviceFamily in which Blends will be loaded. (e.g Windows.Xbox or Windows.Desktop) see the wiki for more details (optional)
        {TestClient} only passed if its Quality Store pretending to be a client (e.g QualityStore ) (optional)
        {UseDelegatedAuth} only passed true if the site needs to get the delegated auth token instead of authCT. (e.g true ) (optional)
      */

    var purchaseSingleItem = function(inputData) {
        var postBody = {};
        if (inputData) {
            postBody["AvailabilityId"] = inputData.AvailabilityId || "";
            postBody["ProductId"] = inputData.ProductId || "";
            postBody["SkuId"] = inputData.SkuId || "";
            postBody["Quantity"] = inputData.Quantity || 1;
            postBody["Auth"] = inputData.Auth || "";
            postBody["XToken"] = inputData.XToken || "";
            postBody["Culture"] = inputData.Culture || "";
            postBody["Market"] = inputData.Market || "";
            postBody["CV"] = inputData.CV || "";
            postBody["IdentityType"] = inputData.IdentityType;
            postBody["IdentityValue"] = inputData.IdentityValue;
            postBody["PurchaseServiceVersion"] = inputData.PurchaseServiceVersion || "";
            postBody["useDelegatedAuth"] = inputData.UseDelegatedAuth || false;

            // this will only be used for filtering BI reports
            postBody["TestClient"] = inputData.TestClient || "";

            // For WebStore, all exclusivity parameters should be set to PUBLIC
            postBody["DeviceContext"] = "moId=PUBLIC&oemId=PUBLIC&scmId=PUBLIC";

            if (inputData.Options) {
                postBody["CampaignId"] = inputData.Options.CampaignId || "";
                postBody["OptionalCampaignId"] = inputData.Options.OptionalCampaignId || "";
                postBody["OfferType"] = inputData.Options.OfferType || "";
                postBody["AddPiSuccessUrl"] = inputData.Options.AddPiSuccessUrl || "";
                postBody["AddPiFailureUrl"] = inputData.Options.AddPiFailureUrl || "";
            }

            if (inputData.MediaOptions) {
                postBody["ProductType"] = inputData.MediaOptions.ProductType || "";
                postBody["TransactionType"] = inputData.MediaOptions.TransactionType || "buy";
                postBody["Title"] = inputData.MediaOptions.Title || "";
                postBody["TitleNo"] = inputData.MediaOptions.TitleNo || "";
                postBody["SubTitle1"] = inputData.MediaOptions.SubTitle1 || "";
                postBody["SubTitle2"] = inputData.MediaOptions.SubTitle2 || "";
                postBody["ExpirationBeforePlayInHours"] = inputData.MediaOptions.ExpirationBeforePlayInHours || "";
                postBody["ExpirationAfterPlayInHours"] = inputData.MediaOptions.ExpirationAfterPlayInHours || "";
            }

            updateStyle(postBody, inputData.Style);

            openBlend(postBody, inputData.ParentElementId, inputData.Environment, inputData.Flight, inputData.ClientType, "#/purchase/confirm", inputData.IframeOptions, inputData.DeviceFamily || "");
        }
    };

    /**
        Purchases the free item silently and messages the result. If it fails, loads the Html for the purchase blend into a div child of the provided element in order to show the error.
        @public
        @method purchaseSingleItem
        @param {inputData} it is an object with all required properties
        inputData = {
            "AvailabilityId": AvailabilityId,
            "ProductId": ProductId,
            "SkuId": SkuId,
            "Options": Options,
            "Auth": Auth,
            "XToken": XToken,
            "ParentElementId": ParentElementId,
            "Environment": Environment,
            "Flight": Flight,
            "ClientType": ClientType,
            "Culture": Culture,
            "Market": Market,
            "CV": CV,
            "IdentityType": IdentityType,
            "IdentityValue": IdentityValue,
            "MediaOptions": MediaOptions,
            "IframeOptions": IframeOptions,
            "PurchaseServiceVersion": PurchaseServiceVersion,
            "Style": Style,
            "Quantity": Quantity,
            "DeviceFamily": deviceFamily,
            "TestClient": TestClient,
            "UseDelegatedAuth": UseDelegatedAuth
        }
        {AvailabilityId} availability id of product to add to new order (required)
        {ProductId} product id of product to add to new order (required)
        {SkuId} sku id of product to add to new order (required)
        {Options} campaign options (optional)
        {Auth} RPS compact ticket (either Auth or XToken is required)
        {XToken} xToken (either Auth or XToken is required)
        {ParentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
        {Environment} see resolveEnvironment for options (required)
        {Flight} see wiki for options (optional)
        {ClientType} see clientTypes (required)
        {Culture} UI culture (required)
        {Market} service market (required)
        {CV} correlation-vector (required)
        {IdentityType} auth identityType (optional)
        {IdentityValue} auth identityValue (optional)
        {MediaOptions} media-specific options (optional)
        {IframeOptions} object specifying desired width and height overrides of iframe (optional)
        {PurchaseServiceVersion} string specifying desired version of purchase service to use. Will default if not supplied to oldest supported version (optional)
        {Style} layout and css override (optional)
        {Quantity} quantity of the item to add to new order (optional)
        {DeviceFamily} deviceFamily in which Blends will be loaded. (e.g Windows.Xbox or Windows.Desktop) see the wiki for more details (optional)
        {TestClient} only passed if its Quality Store pretending to be a client (e.g QualityStore ) (optional)
        {UseDelegatedAuth} only passed true if the site needs to get the delegated auth token instead of authCT. (e.g true ) (optional)
    */
    var purchaseFreeItem = function(inputData) {
        // Create order data with orderState=purchased
        var data = {
            billingInformation: null,
            clientContext: {
                client: inputData.ClientType,
                deviceId: inputData.DeviceId,
                deviceType: inputData.DeviceFamily,
            },
            friendlyName: null,
            items: [{
                availabilityId: inputData.AvailabilityId,
                beneficiary: (inputData.IdentityType && inputData.IdentityValue) ? {
                    identityType: inputData.IdentityType,
                    identityValue: inputData.IdentityValue
                } : null,
                campaignId: inputData.CampaignId,
                giftingInformation: null,
                optionalCampaignId: inputData.OptionalCampaignId,
                orderManagementPolityId: null,
                productId: inputData.ProductId,
                quantity: inputData.Quantity,
                renewalContext: null,
                setBlockInformation: null,
                skuId: inputData.SkuId
            }],
            language: inputData.Languages || inputData.Culture,
            market: inputData.Market,
            orderId: createGuid(),
            orderState: 'Purchased'
        };

        // Call purchase 'create order' API
        $.ajax({
            type: 'POST',
            url: getPurchaseUrl(inputData.Environment, inputData.PurchaseServiceVersion),
            data: JSON.stringify(data),
            contentType: 'application/json',
            beforeSend: function(xhr) {
                xhr.setRequestHeader('MS-CV', inputData.CV);
                xhr.setRequestHeader('Authorization', inputData.Auth ? 'WLID1.0=\"' + inputData.Auth + '\"' : inputData.XToken);
            }
        }).then(function(orderData) {
            var orderLineItems = orderData && $.isArray(orderData.orderLineItems) && orderData.orderLineItems || [];
            var orderLineItem = orderLineItems[0];
            var purchaseApprovalState = orderLineItem.purchaseRestriction && orderLineItem.purchaseRestriction.purchaseApprovalState && orderLineItem.purchaseRestriction.purchaseApprovalState.toLowerCase && orderLineItem.purchaseRestriction.purchaseApprovalState.toLowerCase();
            var parentalApprovalState = orderLineItem.parentalApprovalState && orderLineItem.parentalApprovalState.toLowerCase && orderLineItem.parentalApprovalState.toLowerCase();

            // If order creation succeeded and no there's no restriction, send back a done message.
            // Else, call loadOrderPurchaseHtml with the orderId so webblends can display the error message.
            if (purchaseApprovalState === 'blockedbypolicy' ||
                purchaseApprovalState === 'blockedbyage' ||
                parentalApprovalState === 'blockedbypolicy' ||
                parentalApprovalState === 'blockedbyage') {
                loadOrderPurchaseHtml(
                    orderData.orderId,
                    inputData.Auth,
                    inputData.ParentElementId,
                    inputData.Environment,
                    inputData.Flight,
                    inputData.ClientType,
                    inputData.Culture,
                    inputData.Market,
                    inputData.CV,
                    inputData.IframeOptions,
                    inputData.PurchaseServiceVersion,
                    inputData.Jwt,
                    inputData.BeneficiaryData,
                    inputData.Style,
                    inputData.DeviceFamily,
                    inputData.TestClient
                );
            } else {
                window.postMessage(JSON.stringify({
                    flowId: inputData.FlowId || createGuid(),
                    version: '1.0.0.1',
                    message: 'done',
                    status: 'success',
                    data: {
                        orderId: orderData.orderId,
                        count: orderLineItems.length,
                        lineItems: orderLineItems
                    }
                }), '*');
            }
        }, function(error) {
            var errorData = error && error.responseJSON;
            var code = errorData && errorData.code && errorData.code.toLowerCase && errorData.code.toLowerCase();

            // If purchase returned with error with type=forbidden, we can call webblends with the orderId. An example of this is MaturityRatingsDenialUserInFamily.
            // However, if we received any other error, like 404-not found, call webblends using purchaseSingleItem.
            if (code === 'forbidden') {
                loadOrderPurchaseHtml(
                    data.orderId,
                    inputData.Auth,
                    inputData.ParentElementId,
                    inputData.Environment,
                    inputData.Flight,
                    inputData.ClientType,
                    inputData.Culture,
                    inputData.Market,
                    inputData.CV,
                    inputData.IframeOptions,
                    inputData.PurchaseServiceVersion,
                    inputData.Jwt,
                    inputData.BeneficiaryData,
                    inputData.Style,
                    inputData.DeviceFamily,
                    inputData.TestClient
                );
            } else {
                purchaseSingleItem(inputData);
            }
        });
    };

    /** This API will be deprecated soon. Use purchaseSingleItem.
        Loads the Html for the purchase blend into a div child of the provided element.
        @public
        @method loadSingleItemPurchaseHtml
        @for WebBlender
        @param {availabilityId} availability id of product to add to new order (required)
        @param {productId} product id of product to add to new order (required)
        @param {skuId} sku id of product to add to new order (required)
        @param {options} campaign options (optional)
        @param {auth} authentication (required)
        @param {parentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
        @param {environment} see resolveEnvironment for options (required)
        @param {flight} see wiki for options (optional)
        @param {clientType} see clientTypes (required)
        @param {culture} UI culture (required)
        @param {market} service market (required)
        @param {cv} correlation-vector (required)
        @param {identityType} auth identityType (optional)
        @param {identityValue} auth identityValue (optional)
        @param {mediaOptions} media-specific options (optional)
        @param {iframeOptions} object specifying desired width and height overrides of iframe (optional)
        @param {purchaseServiceVersion} string specifying desired version of purchase service to use. Will default if not supplied to oldest supported version (optional)
        @param {style} layout and css override (optional)
        @param {quantity} quantity of the item to add to new order (optional)
        @param {deviceFamily} deviceFamily in which Blends will be loaded. (e.g Windows.Xbox or Windows.Desktop) see the wiki for more details (optional)
        @param {testClient} only passed if its Quality Store pretending to be a client (e.g QualityStore ) (optional)
      */
    var loadSingleItemPurchaseHtml = function(availabilityId, productId, skuId, options, auth, parentElementId, environment, flight, clientType, culture, market, cv, identityType, identityValue, mediaOptions, iframeOptions, purchaseServiceVersion, style, quantity, deviceFamily, testClient) {
        var postBody = {
            "AvailabilityId": availabilityId,
            "ProductId": productId,
            "SkuId": skuId,
            "Quantity": quantity || 1,
            "Auth": auth,
            "Culture": culture,
            "Market": market,
            "CV": cv,
            "IdentityType": identityType,
            "IdentityValue": identityValue,
            "PurchaseServiceVersion": purchaseServiceVersion,
            "TestClient": testClient || "", // this will only be used for filtering BI reports
            // For WebStore, all exclusivity parameters should be set to PUBLIC
            "DeviceContext": "moId=PUBLIC&oemId=PUBLIC&scmId=PUBLIC",
        };

        if (options) {
            postBody["CampaignId"] = options.campaignId || "";
            postBody["OptionalCampaignId"] = options.optionalCampaignId || "";
            postBody["OfferType"] = options.offerType || "";
        }

        if (mediaOptions) {
            postBody["ProductType"] = mediaOptions.productType || "";
            postBody["TransactionType"] = mediaOptions.transactionType || "buy";
            postBody["Title"] = mediaOptions.title || "";
            postBody["TitleNo"] = mediaOptions.titleNo || "";
            postBody["SubTitle1"] = mediaOptions.subTitle1 || "";
            postBody["SubTitle2"] = mediaOptions.subTitle2 || "";
            postBody["ExpirationBeforePlayInHours"] = mediaOptions.expirationBeforePlayInHours || "";
            postBody["ExpirationAfterPlayInHours"] = mediaOptions.expirationAfterPlayInHours || "";
        }

        updateStyle(postBody, style);

        openBlend(postBody, parentElementId, environment, flight, clientType, "#/purchase/confirm", iframeOptions, deviceFamily || "");
    };

    /**
        Loads the Html for the purchase blend into a div child of the provided element.
        @public
        @method loadOrderPurchaseHtml
        @for WebBlender
        @param {orderId} order id (required)
        @param {auth} authentication (required)
        @param {parentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
        @param {environment} see resolveEnvironment for options (required)
        @param {flight} see wiki for options (optional)
        @param {clientType} see clientTypes (required)
        @param {culture} UI culture (required)
        @param {market} service market (required)
        @param {cv} correlation-vector (required)
        @param {iframeOptions} object specifying desired width and height overrides of iframe (optional)
        @param {purchaseServiceVersion} string specifying desired version of purchase service to use. Will default if not supplied to oldest supported version (optional)
        @param {jwt} token for beneficiary relationship with purchaser (optional)
        @param {beneficiaryData} data for beneficiary msa information , includes First name, last name and msa email address (optional)
        @param {style} layout and css override (optional)
        @param {deviceFamily} deviceFamily in which Blends will be loaded. (e.g Windows.Xbox or Windows.Desktop) see the wiki for more details (optional)
        @param {testClient} only passed if its Quality Store pretending to be a client (e.g QualityStore ) (optional)
      */
    var loadOrderPurchaseHtml = function(orderId, auth, parentElementId, environment, flight, clientType, culture, market, cv, iframeOptions, purchaseServiceVersion, jwt, beneficiaryData, style, deviceFamily, testClient) {
        var postBody = {
            "OrderId": orderId,
            "Auth": auth,
            "Culture": culture,
            "Market": market,
            "CV": cv,
            "PurchaseServiceVersion": purchaseServiceVersion,
            "Jwt": jwt,
            // For WebStore, all exclusivity parameters should be set to PUBLIC
            "TestClient": testClient || "", // this will only be used for filtering BI reports
            "DeviceContext": "moId=PUBLIC&oemId=PUBLIC&scmId=PUBLIC"
        };
        if (beneficiaryData) {
            postBody["BeneficiaryEmail"] = beneficiaryData.email;
            postBody["BeneficiaryFirstName"] = beneficiaryData.firstName || "";
            postBody["BeneficiaryLastName"] = beneficiaryData.lastName || "";
        }

        updateStyle(postBody, style);

        openBlend(postBody, parentElementId, environment, flight, clientType, "#/purchase/confirm", iframeOptions, deviceFamily || "");
    };


    /** This API will be deprecated soon. Use addPaymentInstrument.
      Loads the Html for the Add PI blend into a div child of the provided element.
      @public
      @method loadAddPaymentInstrumentHtml
      @for WebBlender
      @param {auth} authentication (required)
      @param {parentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
      @param {environment} see resolveEnvironment for options (required)
      @param {flight} see wiki for options (optional)
      @param {clientType} see clientTypes (required)
      @param {culture} UI culture (required)
      @param {market} service market (required)
      @param {cv} correlation-vector (required)
      @param {iframeOptions} object specifying desired width and height overrides of iframe (optional)
      @param {style} layout and css override (optional)
*/
    var loadAddPaymentInstrumentHtml = function(auth, parentElementId, environment, flight, clientType, culture, market, cv, iframeOptions, style) {
        var postBody = {
            "Auth": auth,
            "Culture": culture,
            "Market": market,
            "CV": cv,
            "context": "primaryPi"
        };

        updateStyle(postBody, style);

        openBlend(postBody, parentElementId, environment, flight, clientType, "#/paymentAndBilling/choosePaymentMethodFamily", iframeOptions);
    };


    /** This API will be deprecated soon, use editPaymentInstrument.
        Loads the Html for the edit payment instrument blend into a div child of the provided element.
        @public
        @method loadEditPaymentInstrumentHtml
        @for WebBlender
        @param {auth} authentication (required)
        @param {parentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
        @param {environment} see resolveEnvironment for options (required)
        @param {flight} see wiki for options (optional)
        @param {clientType} see clientTypes (required)
        @param {culture} UI culture (required)
        @param {market} service market (required)
        @param {cv} correlation-vector (required)
        @param {paymentInstrumentId} payment instrument id (required)
        @param {iframeOptions} object specifying whether to use iframe, and if so, desired width and height of iframe (optional)
        @param {style} layout and css override (optional)
      */
    var loadEditPaymentInstrumentHtml = function(auth, parentElementId, environment, flight, clientType, culture, market, cv, paymentInstrumentId, iframeOptions, style) {
        var postBody = {
            "Auth": auth,
            "Culture": culture,
            "Market": market,
            "CV": cv,
            "PaymentInstrumentId": paymentInstrumentId
        };

        updateStyle(postBody, style);

        openBlend(postBody, parentElementId, environment, flight, clientType, "#/paymentAndBilling/editPaymentInstrument", iframeOptions);
    };

    /**
      Loads the Html for the Add PI blend into a div child of the provided element.
      @public
      @method addPaymentInstrument
      @param {inputData} it is an object with all required properties
        inputData = {
            "Auth": Auth,
            "XToken": XToken,
            "ParentElementId": ParentElementId,
            "Environment": Environment,
            "Flight": Flight,
            "ClientType": ClientType,
            "Culture": Culture,
            "Market": Market,
            "CV": CV,
            "IframeOptions": IframeOptions,
            "Style": Style,
            "DeviceFamily": DeviceFamily,
            "PaymentMethodFamily": PaymentMethodFamily,
            "PaymentMethodType": PaymentMethodType,
            "BillableAccountId": BillableAccountId
        }
      {Auth} RPS compact ticket (either Auth or XToken is required)
      {XToken} xToken (either Auth or XToken is required)
      {ParentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
      {Environment} see resolveEnvironment for options (required)
      {Flight} see wiki for options (optional)
      {ClientType} see clientTypes (required)
      {Culture} UI culture (required)
      {Market} service market (required)
      {CV} correlation-vector (required)
      {IframeOptions} object specifying desired width and height overrides of iframe (optional)
      {Style} layout and css override (optional)
      {DeviceFamily} DeviceFamily in which Blends will be loaded. see the wiki for more details (required)
      {PaymentMethodFamily} paymentMethodFamily of payment Instrument. see the wiki for more details (required)
      {PaymentMethodType} paymentMethodFamily of payment Instrument. see the wiki for more details  (required)
      {BillableAccountId} Pass BillableAccountId for legacy subscriptions (optional)
*/
    var addPaymentInstrument = function(inputData) {
        var postBody = {};
        if (inputData) {
            postBody["Auth"] = inputData.Auth || "";
            postBody["XToken"] = inputData.XToken || "";
            postBody["Culture"] = inputData.Culture || "";
            postBody["Market"] = inputData.Market || "";
            postBody["CV"] = inputData.CV || "";
            postBody["context"] = "primaryPi";
            postBody["PaymentMethodFamily"] = inputData.PaymentMethodFamily || "";
            postBody["PaymentMethodType"] = inputData.PaymentMethodType || "";
            postBody["BillableAccountId"] = inputData.BillableAccountId || "";
            postBody["PurchaseServiceVersion"] = "7";
            postBody["Gamertag"] = inputData.Gamertag || "";
            postBody["GamerpicUrl"] = inputData.GamerpicUrl || "";

            var deviceFamily = inputData.DeviceFamily || "web";

            updateStyle(postBody, inputData.Style);

            openBlend(postBody, inputData.ParentElementId, inputData.Environment, inputData.Flight, inputData.ClientType, "#/paymentAndBilling/choosePaymentMethodFamily", inputData.IframeOptions, deviceFamily);
        }
    };

    /**
      Loads the Html for the Edit PI blend into a div child of the provided element.
      @public
      @method editPaymentInstrument
      @param {inputData} it is an object with all required properties
        inputData = {
            "Auth": Auth,
            "XToken": XToken,
            "PaymentInstrumentId": PaymentInstrumentId,
            "ParentElementId": ParentElementId,
            "Environment": Environment,
            "Flight": Flight,
            "ClientType": ClientType,
            "Culture": Culture,
            "Market": Market,
            "CV": CV,
            "IframeOptions": IframeOptions,
            "Style": Style,
            "PaymentMethodFamily": PaymentMethodFamily,
            "PaymentMethodType": PaymentMethodType,
            "DeviceFamily": DeviceFamily
        }
      {Auth} RPS compact ticket (either Auth or XToken is required)
      {XToken} xToken (either Auth or XToken is required)
      {PaymentInstrumentId} The ID of the payment instrument being edited. (required)
      {ParentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
      {Environment} see resolveEnvironment for options (required)
      {Flight} see wiki for options (optional)
      {ClientType} see clientTypes (required)
      {Culture} UI culture (required)
      {Market} service market (required)
      {CV} correlation-vector (required)
      {IframeOptions} object specifying desired width and height overrides of iframe (optional)
      {Style} layout and css override (optional)
      {PaymentMethodFamily} paymentMethodFamily of payment Instrument. see the wiki for more details (required)
      {PaymentMethodType} paymentMethodFamily of payment Instrument. see the wiki for more details  (required)
      {DeviceFamily} deviceFamily in which Blends will be loaded. see the wiki for more details (required)
*/
    var editPaymentInstrument = function(inputData) {
        var postBody = {};
        if (inputData) {
            postBody["Auth"] = inputData.Auth || "";
            postBody["XToken"] = inputData.XToken || "";
            postBody["Culture"] = inputData.Culture || "";
            postBody["Market"] = inputData.Market || "";
            postBody["CV"] = inputData.CV || "";
            postBody["PaymentInstrumentId"] = inputData.PaymentInstrumentId;
            postBody["PaymentMethodFamily"] = inputData.PaymentMethodFamily || "";
            postBody["PaymentMethodType"] = inputData.PaymentMethodType || "";
            postBody["PurchaseServiceVersion"] = "7";
            var deviceFamily = inputData.DeviceFamily || "web";

            updateStyle(postBody, inputData.Style);

            openBlend(postBody, inputData.ParentElementId, inputData.Environment, inputData.Flight, inputData.ClientType, "#/paymentAndBilling/editPaymentInstrument", inputData.IframeOptions, deviceFamily);
        }
    };

    /**
        Loads the Html for the Redeem Token blend into a div child of the provided element.
        @public
        @method redeem
        @param {inputData} it is an object with all required properties
          inputData = {
              "TokenString": TokenString,
              "Auth": Auth,
              "XToken": XToken,
              "ParentElementId": ParentElementId,
              "Environment": Environment,
              "Flight": Flight,
              "ClientType": ClientType,
              "Culture": Culture,
              "Market": Market,
              "CV": CV,
              "IframeOptions": IframeOptions,
              "Style": Style,
              "DeviceFamily": DeviceFamily,
              "PurchaseServiceVersion" : PurchaseServiceVersion,
              "UseDelegatedAuth": UseDelegatedAuth,
              "UrlRef": UrlRef
          }
        {TokenString} Token string. If non-empty, blend will skip token input page, and go directly to confirm page. (optional)
        {Auth} RPS compact ticket (either Auth or XToken is required)
        {XToken} xToken (either Auth or XToken is required)
        {ParentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
        {Environment} see resolveEnvironment for options (required)
        {Flight} see wiki for options (optional)
        {ClientType} see clientTypes (required)
        {Culture} UI culture (required)
        {Market} service market (required)
        {CV} correlation-vector (required)
        {IframeOptions} object specifying desired width and height overrides of iframe (optional)
        {Style} layout and css override (optional)
        {DeviceFamily} DeviceFamily in which Blends will be loaded. see the wiki for more details (required)
        {PurchaseServiceVersion} Specified the M$ version to use. Default is the current version. (e.g 6 ) (optional)
        {UseDelegatedAuth} only passed true if the site needs to get the delegated auth token instead of authCT. (e.g true ) (optional)
        {UrlRef} urlref from a redirect. Used for telemetry (optional)
    */
    var redeem = function(inputData) {
        var postBody = {};
        if (inputData) {
            postBody["tokenString"] = inputData.TokenString || "";
            postBody["Auth"] = inputData.Auth || "";
            postBody["XToken"] = inputData.XToken || "";
            postBody["Culture"] = inputData.Culture || "";
            postBody["Market"] = inputData.Market || "";
            postBody["CV"] = inputData.CV || "";
            postBody["useDelegatedAuth"] = inputData.UseDelegatedAuth || false;
            postBody["PurchaseServiceVersion"] = inputData.PurchaseServiceVersion || "7";
            postBody["UrlRef"] = inputData.UrlRef || "";
            var deviceFamily = inputData.DeviceFamily || "web";

            updateStyle(postBody, inputData.Style);

            openBlend(postBody, inputData.ParentElementId, inputData.Environment, inputData.Flight, inputData.ClientType, "#/redeem/enterCode", inputData.IframeOptions, deviceFamily);
        }
    };

    /** This API will be deprecated soon, use redeem.
       Loads the Html for the Redeem Token blend into a div child of the provided element.
       @public
       @method loadRedeemHtml
       @for WebBlender
       @param {tokenString} Token string. If non-empty, blend will skip token input page, and go directly to confirm page. (optional)
       @param {auth} authentication (required)
       @param {parentElementId} DOM element (e.g. div, span) into which Blends will be loaded (required)
       @param {environment} see resolveEnvironment for options (required)
       @param {flight} see wiki for options (optional)
       @param {clientType} see clientTypes (required)
       @param {culture} UI culture (required)
       @param {market} service market (required)
       @param {cv} correlation-vector (required)
       @param {iframeOptions} object specifying desired width and height overrides of iframe (optional)
       @param {style} layout and css override (optional)
       @param {urlRef} urlref from a redirect. Used for telemetry (optional)
     */
    var loadRedeemHtml = function(tokenString, auth, parentElementId, environment, flight, clientType, culture, market, cv, iframeOptions, style, urlRef) {
        var postBody = {
            "tokenString": tokenString,
            "Auth": auth,
            "Culture": culture,
            "Market": market,
            "CV": cv,
            "PurchaseServiceVersion": "7",
            "UrlRef": urlRef
        };

        updateStyle(postBody, style);

        openBlend(postBody, parentElementId, environment, flight, clientType, "#/redeem/enterCode", iframeOptions);
    };

    /**
        Subscribes to the blend post messages.
        @public
        @method registerMessageHandler
        @for WebBlender
        @param {newHandler} subscriber to add
      */
    var registerMessageHandler = function(newHandler) {
        for (var i = 0; i < messageHandlers.length; i++) {
            if ('' + messageHandlers[i] === '' + newHandler) {
                // See 5056068
                console.error('Same message handler function already registered: ' + newHandler);
                return;
            }
        }
        messageHandlers.push(newHandler);
    };

    /**
        Unsubscribes from the blend post messages.
        @public
        @method unregisterMessageHandler
        @for WebBlender
        @param {handler} subscriber to remove
      */
    var unregisterMessageHandler = function(handler) {
        for (var i = 0; i < messageHandlers.length; i++) {
            if ('' + messageHandlers[i] === '' + handler) {
                messageHandlers.pop(handler);
            }
        }
    };

    /**
        Mapping of client types.
        @public
        @object clientTypes
        @for WebBlender
      */
    var clientTypes = {
        UniversalWebStore: "UniversalWebStore",
        MusicVideoReading: "MusicVideoReading",
        EnterpriseStore: "EnterpriseStore",
        AccountMicrosoftCom: "AccountMicrosoftCom"
    };

    return {
        loadSingleItemPurchaseHtml: loadSingleItemPurchaseHtml,
        loadOrderPurchaseHtml: loadOrderPurchaseHtml,
        loadRedeemHtml: loadRedeemHtml,
        loadAddPaymentInstrumentHtml: loadAddPaymentInstrumentHtml,
        loadEditPaymentInstrumentHtml: loadEditPaymentInstrumentHtml,
        registerMessageHandler: registerMessageHandler,
        unregisterMessageHandler: unregisterMessageHandler,
        clientTypes: clientTypes,
        addPaymentInstrument: addPaymentInstrument,
        editPaymentInstrument: editPaymentInstrument,
        purchaseSingleItem: purchaseSingleItem,
        purchaseFreeItem: purchaseFreeItem,
        redeem: redeem,
        preLoadBlend: preLoadBlend
    };
}(jQuery);