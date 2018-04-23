//#MODULE - CacheManager
//> Author: Mike Byrnes
//>
//> Create Date: January 7, 2014
//>
//##DESCRIPTION: This module will handle getting, setting, and removing items from the cache
define( 'cacheManager',[ 'commonUtil/ClientSideStorage' ], function ( ClientSideStorage ) {
    var EXP = "Exp";

    function get( storage, key ) {
        var value = null,
            now = new Date(),
            getMethod = ClientSideStorage[ 'get' + storage ],
            //adding backward compatibility
            exp = getMethod( key + EXP ) || getMethod( key + "_exp" );

        if ( exp ) {
            exp = new Date( exp );
            if ( exp > now ) {
                value = getMethod( key );
            } else {
                ClientSideStorage[ 'remove' + storage ]( key );
            }
        } else {
            value = getMethod( key );
        }

        if ( JSON && value ) {
            // not all results are JSON!
            try {
                value = JSON.parse( value );
            } catch ( e ) {}
        }

        return value;
    }

    function set( setMethod, key, data, expiration ) {
        if ( JSON ) {
            data = JSON.stringify( data );
        }

        setMethod( key, data );
        if ( expiration ) {
            var now = new Date(),
                //Convert minutes to milliseconds
                exp = new Date( now.getTime() + ( expiration * 60 * 1000 ) );
            setMethod( key + EXP, exp );
        }
    }

    function remove( storage, key ) {
        var removeMethod = ClientSideStorage[ 'remove' + storage ];

        removeMethod( key );
        removeMethod( key + EXP );
    }

    function clear( storage ) {
        var clearMethod = ClientSideStorage[ 'clear' + storage ];

        clearMethod();
    }

    //### Method - getSession(key) public method to get value from the session cache for the specified key
    //
    //> parameters
    //>
    //+ *key* - the key used to retrieve the data from the cache
    //
    //> returns
    //>
    //+ The data from the cache for the specified key or null
    function getSession( key ) {
        return get( "Session", key );
    }

    //### Method - getPersistent(key) public method to get value from the persistent cache for the specified key
    //
    //> parameters
    //>
    //+ *key* - the key used to retrieve the data from the cache
    //
    //> returns
    //>
    //+ The data from the cache for the specified key or null
    function getPersistent( key ) {
        return get( "Persistent", key );
    }

    //###Method - setSession(key, data, expiration) public method to set a session cache
    //
    //> parameters
    //>
    //+ *key* - the key to store in the cache
    //+ *data* - that data to store in the cache
    //+ *expiration* - (optional) minutes from the current time when the cache will expire
    function setSession( key, data, expiration ) {
        set( ClientSideStorage.setSession, key, data, expiration );
    }

    //###Method - setPersistent(key, data, expiration) public method to set a persistent cache
    //
    //> parameters
    //>
    //+ *key* - the key to store in the cache
    //+ *data* - that data to store in the cache
    //+ *expiration* - (optional) minutes from the current time when the cache will expire
    function setPersistent( key, data, expiration ) {
        set( ClientSideStorage.setPersistent, key, data, expiration );
    }

    function removeSession( key ) {
        remove( "Session", key );
    }

    function removePersistent( key ) {
        remove( "Persistent", key );
    }

    function clearSession() {
        clear( "Session" );
    }

    function clearPersistent() {
        clear( "Persistent" );
    }

    return {
        getSession: getSession,
        getPersistent: getPersistent,
        setSession: setSession,
        clearSession: clearSession,
        clearPersistent: clearPersistent,
        setPersistent: setPersistent,
        removeSession: removeSession,
        removePersistent: removePersistent
    };
} );
define( 'quickBag/QuickBagActions',[], function () {
    return {
        FORCE_UPDATE: "quickbag:forceUpdate",
        GET_DATA: "quickbag:getData",
        OPEN: "quickbag:open",
        CLOSE: "quickbag:close",
        INIT: "quickbag:initialize",
        DESTROY: "quickbag:destroy",
        UPDATE_COUNT: "quickbag:updateCount",
        TEAR_DOWN: "quickbag:tearDown"
    };
} );

define( 'quickBag/models/QuickBagREST',[
    "jquery",
    'backbone',
    "cacheManager",
    "cookie",
    "globals",
    "underscore",
    "pubsub",
    "quickBag/QuickBagActions",
    'objectUtil'
], function ( $, Backbone, CacheManager, Cookie, Globals, _, pubsub, qbActions, ObjectUtil ) {

    var currentFetch = {
        isOn: false,
        promise: null
    },
        QuickBagModel = Backbone.Model.extend( {

            sessionKey: 'qbRest',
            cacheTimeExpiry: '15',
            isProcessing: false,
            urlRoot: function () {
                return Globals.getValue( "props.componentizedQuickBagRestUrl" ) + Cookie.get( "macys_online_uid" );
            },

            //###Method - getData()
            //This method ensures data is most updated. It will check if the data stored in the session storage is invalid then it will make a fetch call
            //
            //> returns
            //>
            //+ A promise
            getData: function () {
                var deferred = $.Deferred();

                if ( !Cookie.get( "macys_online_uid" ) ) {
                    currentFetch.promise = deferred.promise();
                    //this is to handle showing error message if the macys_online_uid cookie is not available
                    //By setting this it will show zero bag Items without making the service call
                    this.set( {
                        meta: {
                            totalQuantity: 0
                        },
                        bagItems: []
                    } );

                    //this is to reset the bag Item count to zero since the bagguid is not available
                    pubsub.observe( qbActions.UPDATE_COUNT ).publish( this.attributes.meta.totalQuantity );

                    deferred.resolve( {
                        data: this.attributes,
                        reFetched: false
                    } );
                } else if ( this.isCachedDataValid() === true ) {
                    currentFetch.promise = deferred.promise();
                    //if data in cache is valid but model is empty. this can happen when a page is reloaded.
                    //we set the model so that view can re-render itself.
                    if ( _.isEmpty( this.attributes ) ) {
                        this.set( this.getCachedData() );
                        //this is to handle an edge case when 'my bag' link has a different count
                        pubsub.observe( qbActions.UPDATE_COUNT ).publish( this.attributes.meta.totalQuantity );
                    }
                    deferred.resolve( {
                        data: this.attributes,
                        reFetched: false
                    } );
                } else {
                    if ( !currentFetch.isOn ) {
                        currentFetch.isOn = true;
                        currentFetch.promise = deferred.promise();
                        this.fetch( {
                            cache: false,
                            success: function ( model, response, options ) {
                                currentFetch.isOn = false;
                                currentFetch.promise = null;
                                //unsetting the loadingError to ensure our model still doesn't indicate a fetch error
                                //passing silent true so that "change" event is not triggered and view is not rendered
                                this.unset( "loadingError", {
                                    silent: true
                                } );
                                //sets the session with new response
                                this.setCacheData( response );
                                //update the item count next to "my bag" link
                                //this is to handle an edge case when 'my bag' link has a different count
                                pubsub.observe( qbActions.UPDATE_COUNT ).publish( response.meta.totalQuantity );
                                deferred.resolve( {
                                    data: response,
                                    reFetched: true
                                } );
                            }.bind( this ),
                            error: function ( model, response, options ) {
                                model.set( {
                                    "loadingError": true,
                                    bagItems: []
                                } );
                                currentFetch.isOn = false;
                                currentFetch.promise = null;
                                this.expireCache();
                                deferred.reject();
                            }.bind( this )
                        } );
                    }
                }

                return currentFetch.promise;
            },

            //###Method - isCachedDataValid()
            //method to check whether QuickBag data in the session valid or not
            //> returns
            //>
            //+ Boolean
            isCachedDataValid: function () {
                var cachedData = CacheManager.getSession( this.sessionKey );

                if ( cachedData !== null && this.itemCountValidator() !== false ) {

                    if ( cachedData.shippingCountry !== Cookie.get( "shippingCountry" ) ) {
                        this.expireCache();
                        return false;
                    } else {
                        return true;
                    }

                } else {
                    this.expireCache();
                    return false;
                }

            },

            //###Method - getCachedData()
            //method to retrieve QuickBag data from the session
            //
            //> returns
            //>
            //+ DataModel or Null
            getCachedData: function () {
                var cachedData = CacheManager.getSession( this.sessionKey );

                if ( cachedData !== null || this.itemCountValidator() === false ) {
                    return cachedData;
                } else {
                    return null;
                }
            },

            //###Method - itemCountValidator()
            //Method to validate number of items in cookie and number of items session storage is equal or not.
            //> returns
            //>
            //+ Boolean
            itemCountValidator: function () {
                var cachedItemCount = this.getCachedItemCount(),
                    cookieItemCount = parseInt( Cookie.get( 'CartItem', 'GCs' ), 10 );

                //if count in cookie is not a number & count in session storage is 0 return true
                //if count in cookie is matching count in session storage return true
                if ( ( isNaN( cookieItemCount ) ) && ( cachedItemCount === 0 ) || ( cookieItemCount === cachedItemCount ) ) {
                    return true;
                } else {
                    return false;
                }
            },

            //###Method - getCachedItemCount()
            //Method to retrieve number of bag items in the session storage
            //> returns
            //>
            //+ Number - Number of products in QuickBag
            getCachedItemCount: function () {
                var currentCachedResponse = CacheManager.getSession( this.sessionKey );

                if ( currentCachedResponse && currentCachedResponse !== null ) {
                    return currentCachedResponse.meta.totalQuantity;
                } else {
                    return -1;
                }
            },

            //###Method - expireCache()  method to remove QuickBag session if exists
            //> returns
            //>
            //+ (none)
            expireCache: function () {
                CacheManager.removeSession( this.sessionKey );
            },

            //###Method - setCacheData()
            //method to set QuickBag model in session storage
            //> parameters
            //>
            //+ *model* - Model data from the response
            //> returns
            //>
            //+ (none)
            setCacheData: function ( model ) {
                model.shippingCountry = Cookie.get( "shippingCountry" );
                CacheManager.setSession( this.sessionKey, model, this.cacheTimeExpiry );
            },

            //###Method - Overriding Backbone.model.parse to do update discount and total price amounts and to form banner for QuickBag
            //> parameters
            //>
            //+ *attributes* - Attributes from the response
            //> returns
            //>
            //+ (Object) - the massaged response
            parse: function ( attrs ) {
                var promoPool, adLinks, promoText, poolImgSrc, adMap, adPoolItems;
                _.map( attrs.meta.price, function ( price ) {
                    if ( price.type === "discount" ) {
                        price.label = price.label.replace( /\[PRICE\]/g, "<strong>" + price.formattedValue[ 0 ] + "</strong>" );
                    } else if ( price.type === "total" ) {
                        price.label = price.label.replace( /(.*)?\s(\[PRICE\])/g, function ( matched, m1 ) {
                            return "<a href='" + Globals.getValue( 'props.baseHost' ) + attrs.meta.bagUrl + "'>" + m1 + "</a> " + "<strong>" + price.formattedValue[ 0 ] + "</strong>";
                        } );
                    }
                    return price;
                } );

                if ( attrs.media ) {
                    promoPool = attrs.media.BAG_AD_POOL;
                    if ( promoPool && ObjectUtil.hasChildProperty( promoPool, "items.0.adLinks" ) ) {
                        adPoolItems = promoPool.items[ 0 ];
                        adLinks = adPoolItems.adLinks[ 0 ];
                        promoText = adPoolItems.text || "";
                        poolImgSrc = Globals.getValue( "props.assetsHost" ) + '/dyn_img/site_ads/' + adPoolItems.fileName;
                        adMap = '<a href=' + ObjectUtil.getChildProperty( adLinks, 'url' ) + '><img src="' + poolImgSrc + '" alt="' + promoText + '"/></a>';
                        attrs.media.adMap = adMap;
                    }
                }

                return attrs;
            }
        } );

    return QuickBagModel;

} );

define('mcomQuickBagTemplate/quickBagREST',['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "  <ul class=\"bagItems\"></ul>\r\n  <div id=\"quickBagBottom\" class=\"quickBagBottom\">\r\n  \r\n"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"meta && meta.promotions",{"name":"condition","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        \r\n"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"media && media.adMap",{"name":"condition","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.price : stack1),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n		<div class=\"checkoutButton\">\r\n  			<a class=\"button tiny radius expand\" href=\""
    + container.escapeExpression((helpers.getGlobalValue || (depth0 && depth0.getGlobalValue) || alias2).call(alias1,"props.baseHost",{"name":"getGlobalValue","hash":{},"data":data}))
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.bagUrl : stack1), depth0)) != null ? stack1 : "")
    + "\">CHECKOUT</a>\r\n		</div>\r\n	</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.meta : depth0)) != null ? stack1.promotions : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              <div class=\"bagPromoDesc\">\r\n                  <span>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "</span>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.formattedValue : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                    <span class=\"promoPrice\">- "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.formattedValue : depth0), depth0))
    + "</span>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "  			<div class=\"quickBagAdContent\">\r\n  				<div class=\"qbPromoAd\">"
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.media : depth0)) != null ? stack1.adMap : stack1), depth0)) != null ? stack1 : "")
    + "</div>\r\n  			</div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"type === 'discount'",{"name":"condition","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"type === 'total'",{"name":"condition","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    			<span id=\"quickBagYouSavedTotal\">"
    + ((stack1 = container.lambda((depth0 != null ? depth0.label : depth0), depth0)) != null ? stack1 : "")
    + "</span>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    			<span id=\"quickBagSubTotal\">"
    + ((stack1 = container.lambda((depth0 != null ? depth0.label : depth0), depth0)) != null ? stack1 : "")
    + "</span>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"quickBagEmpty\"></div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.bagItems : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(13, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true})

});
define('mcomQuickBagTemplate/emptyQuickBag',['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"loadingErrorContainer\">\r\n	   <span class=\"icon-ui-error-f-huge loadingErrorIcon\"></span>\r\n	   <div class=\"errorText\">This preview is temporarily unavailable. Please view your item(s) in checkout.</div>\r\n	</div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "	<div class=\"zeroItemCount\">0 items in your bag. Shop great deals now!</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.loadingError : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true})

});
define('mcomQuickBagTemplate/quickBagProduct',['handlebars'], function(Handlebars) {

return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "registryItem\"";
},"3":function(container,depth0,helpers,partials,data) {
    return "\"";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"badges\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = (depth0 != null ? depth0.messages : depth0)) != null ? stack1.info : stack1)) != null ? stack1.badges : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    return "      <div>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.header : depth0), depth0))
    + "</div>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"errors\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.messages : depth0)) != null ? stack1.error : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"errorMessage\">\r\n        <span class=\"icon-ui-error-f-small inline-icon-small errorMessageIcon\"></span>\r\n        "
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "\r\n      </div>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"registryDetails\">\r\n       <span class=\"icon-gen-gift-red-medium inline-icon-medium\"></span>\r\n       <span class=\"regItemText\">For: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.registrantFirstName : stack1), depth0))
    + " &amp; "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.coregistrantFirstName : stack1), depth0))
    + "</span>\r\n    </div>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression;

  return "      <a href=\""
    + alias1(((helper = (helper = helpers.secureHost || (depth0 != null ? depth0.secureHost : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"secureHost","hash":{},"data":data}) : helper)))
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.registryUrl : stack1), depth0))
    + "\">\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <a href=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.identifier : stack1)) != null ? stack1.productUrl : stack1), depth0))
    + "\">\r\n";
},"17":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "          <img class=\"swatchImage\" src=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.traits : stack1)) != null ? stack1.colors : stack1)) != null ? stack1.selectedColor : stack1)) != null ? stack1.swatchImage : stack1)) != null ? stack1.imageFullPath : stack1), depth0))
    + "\" alt=\"\" />\r\n";
},"19":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"lamBag\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.messages : depth0)) != null ? stack1.info : stack1)) != null ? stack1.isQBLam : stack1), depth0))
    + "</div>\r\n";
},"21":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "             <a href=\""
    + alias1(((helper = (helper = helpers.secureHost || (depth0 != null ? depth0.secureHost : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"secureHost","hash":{},"data":data}) : helper)))
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.registryUrl : stack1), depth0))
    + "\">"
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.detail : stack1)) != null ? stack1.name : stack1), depth0))
    + "</a>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "             <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.identifier : stack1)) != null ? stack1.productUrl : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.detail : stack1)) != null ? stack1.name : stack1), depth0))
    + "</a>\r\n";
},"25":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              Color: <span class=\"sizeColorType\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.traits : stack1)) != null ? stack1.colors : stack1)) != null ? stack1.selectedColor : stack1)) != null ? stack1.name : stack1), depth0))
    + "\r\n              "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.traits : stack1)) != null ? stack1.size : stack1)) != null ? stack1.selectedSize : stack1),{"name":"if","hash":{},"fn":container.program(26, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            </span>";
},"26":function(container,depth0,helpers,partials,data) {
    return ",";
},"28":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "Size: <span class=\"sizeColorType\">"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.traits : stack1)) != null ? stack1.size : stack1)) != null ? stack1.selectedSize : stack1)) != null ? stack1.name : stack1), depth0))
    + "</span>";
},"30":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.pricing : stack1)) != null ? stack1.price : stack1)) != null ? stack1.tieredPrice : stack1),{"name":"each","hash":{},"fn":container.program(31, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"31":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "	            <div \r\n	              "
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"(type === 'SALE') || (type === 'NOW')",{"name":"condition","hash":{},"fn":container.program(32, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n	              "
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"type === 'REG'",{"name":"condition","hash":{},"fn":container.program(34, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n	              >"
    + ((stack1 = container.lambda((depth0 != null ? depth0.label : depth0), depth0)) != null ? stack1 : "")
    + "</div>\r\n";
},"32":function(container,depth0,helpers,partials,data) {
    return "class=\"salePrice\"";
},"34":function(container,depth0,helpers,partials,data) {
    return "class=\"itemPrice\"";
},"36":function(container,depth0,helpers,partials,data) {
    return "				<div class=\"colorwayTiers\">FREE</div>			\r\n";
},"38":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <p class=\"itemQuantity\">x Qty. "
    + container.escapeExpression(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"40":function(container,depth0,helpers,partials,data) {
    var helper;

  return "          <p class=\"giftCardEmail\">"
    + container.escapeExpression(((helper = (helper = helpers.giftCardEmail || (depth0 != null ? depth0.giftCardEmail : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"giftCardEmail","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"42":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.promotions : depth0),{"name":"each","hash":{},"fn":container.program(43, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"43":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "              <div class=\"promoDesc\">\r\n                  <span>"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "</span>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.formattedValue : depth0),{"name":"if","hash":{},"fn":container.program(44, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "              </div>\r\n";
},"44":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <span class=\"promoPrice\">"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || helpers.helperMissing).call(depth0 != null ? depth0 : {},"(this.gwpIndicator === false)",{"name":"condition","hash":{},"fn":container.program(45, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\r\n";
},"45":function(container,depth0,helpers,partials,data) {
    return "- "
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.formattedValue : depth0), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<div class=\"bagItem "
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"(registry.isRegistryItem === true) && (registry.isFirstItemRegistry)",{"name":"condition","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.messages : depth0)) != null ? stack1.info : stack1)) != null ? stack1.badges : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.messages : depth0)) != null ? stack1.error : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"(registry.isRegistryItem === true) && (registry.isFirstItemRegistry)",{"name":"condition","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n  <div class=\"row\">\r\n    <div class=\"columns medium-3\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.registryUrl : stack1),{"name":"if","hash":{},"fn":container.program(13, data, 0),"inverse":container.program(15, data, 0),"data":data})) != null ? stack1 : "")
    + "    	<img src=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.imagery : stack1)) != null ? stack1.urlTemplate : stack1)) != null ? stack1.product : stack1), depth0))
    + "\" class=\"productImage\" alt=\"\" />\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.traits : stack1)) != null ? stack1.colors : stack1)) != null ? stack1.selectedColor : stack1)) != null ? stack1.swatchImage : stack1),{"name":"if","hash":{},"fn":container.program(17, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </a>\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.messages : depth0)) != null ? stack1.info : stack1)) != null ? stack1.isQBLam : stack1),{"name":"if","hash":{},"fn":container.program(19, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n    <div class=\"columns medium-13 end\">\r\n      <div class=\"row\">\r\n        <div class=\"columns medium-9 description\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.registry : depth0)) != null ? stack1.registryUrl : stack1),{"name":"if","hash":{},"fn":container.program(21, data, 0),"inverse":container.program(23, data, 0),"data":data})) != null ? stack1 : "")
    + "          <p class=\"bagItemUPC\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.traits : stack1)) != null ? stack1.colors : stack1)) != null ? stack1.selectedColor : stack1),{"name":"if","hash":{},"fn":container.program(25, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n            "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.product : depth0)) != null ? stack1.traits : stack1)) != null ? stack1.size : stack1)) != null ? stack1.selectedSize : stack1),{"name":"if","hash":{},"fn":container.program(28, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n          </p>\r\n        </div>\r\n        <div class=\"columns medium-6 medium-offset-1 end\">\r\n          <div class=\"pricing\">\r\n"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"(product.detail.flags.gwpIndicator === false)",{"name":"condition","hash":{},"fn":container.program(30, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"(product.detail.flags.gwpIndicator === true)",{"name":"condition","hash":{},"fn":container.program(36, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "          </div>\r\n"
    + ((stack1 = (helpers.condition || (depth0 && depth0.condition) || alias2).call(alias1,"quantity > 1",{"name":"condition","hash":{},"fn":container.program(38, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.giftCardEmail : depth0),{"name":"if","hash":{},"fn":container.program(40, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n      </div>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.promotions : depth0),{"name":"if","hash":{},"fn":container.program(42, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      \r\n      <button alt=\"Remove\" title=\"Remove\" class=\"button-remove hide-for-screenreader\">REMOVE</button>\r\n\r\n      <div class=\"row itemAction\">\r\n        <div class=\"columns medium-7\">\r\n          <button alt=\"Remove\" title=\"Remove\" class=\"button secondary expand tiny button-remove\">REMOVE</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true})

});
//#MODULE - BT Data Dictionary Utils
//> Author: Joseph Acosta
//>
//> Create Date: March 18, 2015
//>
//##DESCRIPTION: A module that provides some base methods for manipulating the bright tag data dictionary
define( 'commonUtil/BTDataDictionaryUtils',[ 'underscore' ], function ( _ ) {

    function get( brand ) {
        if ( _.isUndefined( window[ brand ] ) ) {
            window[ brand ] = {};
        }
        if ( _.isUndefined( window[ brand ].brightTag ) ) {
            window[ brand ].brightTag = {};
        }
        return window[ brand ];
    }

    function clear( brand ) {
        var dd = window[ brand ] = {
            brightTag: {}
        };

        return dd;
    }

    function set( brand, key, value ) {
        var dd = get( brand );

        dd.brightTag[ key ] = value;
        return dd;
    }

    function setNavigation( brand, pageName,  pageId,  keyword, registry )  {
        var dd = get( brand );
        set( brand, 'navigation', {
            pageName:  pageName,
            pageID:  pageId,
            keywordSearch:  ( ( keyword )  ?  keyword  :  '' ),
            registryMode:  ( registry ) ? registry : 'NO'
        } );
        return dd;
    }

    return {
        get: get,
        clear: clear,
        set: set,
        setNavigation: setNavigation
    };
} );
//#MODULE - Analytics
//> Author: Joseph Acosta
//>
//> Create Date: March 25, 2015
//>
//##DESCRIPTION: AMD module to simplify firing coremetrics tags.
define( 'quickBag/QuickBagAnalytics',[
        "jquery",
        "globals",
        "analyticsBase",
        "mcomAnalytics",
        "objectUtil",
        "commonjs/util/BTDataDictionaryUtils"
    ],
    function ( $, Globals, analyticsBase, mcomAnalytics, ObjectUtil, brightTagUtils ) {
        function getPageId() {
            var pageName = "",
                macysObj = brightTagUtils.get( "MACYS" );

            if ( macysObj && ObjectUtil.hasChildProperty( macysObj, "brightTag.navigation" ) ) {
                //Referring pageName from brightTag navigation, since "page" object in globals 
                //is not available on every page
                pageName = macysObj.brightTag.navigation.pageName;
            }
            return pageName;
        }

        function linkTagData( modelData, type, name, options ) {
            var winObj = ( options && options.window ) ? options.window : window;
            return {
                href: winObj.location.href + "/quickbag?cm_sp=quickbag-_-" + type + "-_-" + modelData.meta.totalQuantity,
                name: name,
                pageID: getPageId()
            };
        }

        function elementTagData( type ) {
            var attrs = [];
            attrs[ 0 ] = getPageId();
            return {
                elementID: type,
                elementCategory: "quickbag",
                attributes: attrs
            };
        }

        function setup() {
            analyticsBase.addListener( 'QB_MANUAL_LINK_TAG', mcomAnalytics.linkClickTag );
            analyticsBase.addListener( 'QB_ELEMENT_TAG', mcomAnalytics.elementTag );
        }

        function tearDown() {
            analyticsBase.removeListener( 'QB_MANUAL_LINK_TAG', mcomAnalytics.linkClickTag );
            analyticsBase.removeListener( 'QB_ELEMENT_TAG', mcomAnalytics.elementTag );
        }

        function fireElementTag( type, options ) {
            var data = elementTagData( type );
            analyticsBase.fireEvent( 'QB_ELEMENT_TAG', data );
        }

        function fireManualLinkTag( modelData, type, name, options ) {
            var data = linkTagData( modelData, type, name, options );
            analyticsBase.fireEvent( 'QB_MANUAL_LINK_TAG', data );
        }

        $( document ).ready( setup );
        $( window ).on( "unload", tearDown );

        return {
            setup: setup,
            tearDown: tearDown,
            fireElementTag: fireElementTag,
            fireManualLinkTag: fireManualLinkTag
        };
    } );

define( 'quickBag/views/QuickBagProduct',[ "jquery",
    "backbone",
    "marionette",
    "handlebars",
    "hbsHelpers",
    "mcomQuickBagTemplate/quickBagProduct",
    "quickBag/QuickBagAnalytics"
], function ( $, Backbone, Marionette, Handlebars, helpers, ProductTemplate, QuickBagAnalytics ) {

    var QuickBagProductView = Marionette.ItemView.extend( {
        tagName: "li",
        template: ProductTemplate,
        events: {
            "click .button-remove": "removeProductFromBag",
            "click .productImage": "onProductImageClick"
        },

        initialize: function ( options ) {
            this.parentView = options.parentView;
        },

        //###Method - removeProductFromBag()  removes the current product from the model and triggers a DELETE API call
        //> returns
        //>
        //+ None
        removeProductFromBag: function () {
            this.model.destroy( {
                success: function ( model, response ) {
                    //calls parentview onChildModelDestroy to update the new model and collections
                    //was unable to use childEvent because the view is destroyed when model is destroyed
                    this.parentView.onChildModelDestory( response );
                    QuickBagAnalytics.fireElementTag( "remove" );
                }.bind( this )
            } );
        },

        onProductImageClick: function () {
            QuickBagAnalytics.fireManualLinkTag( this.parentView.model.toJSON(), "product-thumbnail", "QUICK-BAG-TO-PDP" );
        }

    } );

    return QuickBagProductView;
} );

define( 'quickBag/views/EmptyQuickBag',[ 'jquery',
        'backbone',
        'marionette',
        'mcomQuickBagTemplate/emptyQuickBag'
    ],
    function ( $, Backbone, Marionette, EmptyQuickBagTemplate ) {

        return Marionette.ItemView.extend( {
            template: EmptyQuickBagTemplate,
            el: "div.quickBagEmpty",

            initialize: function ( options ) {
                if ( options.loadingError ) {
                    this.model.set( "loadingError", options.loadingError );
                }
            }
        } );

    } );

define( 'quickBag/views/QuickBagREST',[ "jquery",
    "backbone",
    "marionette",
    "pubsub",
    "mcomQuickBagTemplate/quickBagREST",
    "mcomQuickBagTemplate/emptyQuickBag",
    "quickBag/views/QuickBagProduct",
    "quickBag/views/EmptyQuickBag",
    "quickBag/QuickBagActions",
    "cookie",
    "hbsHelpers",
    "underscore",
    "quickBag/QuickBagAnalytics",
    "globals"
], function (
    $,
    Backbone,
    Marionette,
    pubsub,
    QuickBagTemplate,
    emptyQuickBagTemplate,
    QuickBagProductView,
    EmptyQuickBag,
    qbActions,
    Cookie,
    helpers,
    _,
    QuickBagAnalytics,
    Globals
) {
    var QuickBagCompositeView = Marionette.CompositeView.extend( {

        template: QuickBagTemplate,
        childView: QuickBagProductView,
        emptyView: EmptyQuickBag,

        childViewContainer: function () {
            if ( !this.isEmpty() ) {
                return "ul.bagItems";
            } else {
                return "div.quickBagEmpty";
            }
        },

        events: {
            "click #quickBagSubTotal a": "onBagLinkClick",
            "click .checkoutButton a": "onCheckoutButtonClick"
        },

        //set loadingError in options of child view, if the parent model has loadingError
        //to indicate the fetch call is failed.
        emptyViewOptions: function () {
            if ( this.model.get( "loadingError" ) ) {
                return {
                    loadingError: true
                };
            } else {
                return {};
            }
        },

        //###Method - isEmpty()  Marionette inbuilt method, overriding to check for the desired collection object
        //> returns
        //>
        //+ True if the given array is empty else false
        isEmpty: function () {
            var bagItems = this.model.get( "bagItems" );
            return ( bagItems && bagItems.length ) ? false : true;
        },

        //###Method - onChildModelDestory()  called by child view once the product is deleted from the model and updates the moddel and collection
        //> parameters
        //>
        //+ *data* - the updated model data from child view
        //> returns
        //>
        //+ NONE
        onChildModelDestory: function ( data ) {
            Cookie.set( "CartItem", data.meta.totalQuantity, "GCs" );
            this.model.clear( {
                silent: true
            } ).set( this.model.parse( data ) );
            this.model.setCacheData( data );
            pubsub.observe( qbActions.UPDATE_COUNT ).publish( data.meta.totalQuantity );
        },

        //###Method - childViewOptions() marionette inbuilt method to provide data to the child view once it is initialized.
        childViewOptions: function () {
            return {
                parentView: this,
                template: this.options.productViewTemplate
            };
        },

        //###Method - modelEvents() marionette inbuilt method to listen to the model events to bind various actions
        modelEvents: {
            "change": function ( model, options ) {
                var bagItems = this.model.get( "bagItems" );

                //we do not want to parse an empty array. and hence we are having an empty array.
                if ( bagItems && bagItems.length ) {
                    if ( Globals.getValue( 'props.itemAvailabilityDisplayLAM' ) && Globals.getValue( 'props.itemAvailabilityDisplayLAMQuickBagEnabled' ) ) {
                        require( [ "mcomjs/features/itemAvailability/view/QbLamView" ], function ( Lam ) {
                            Lam = new Lam( {
                                "response": this.model.attributes,
                                "qbrest": true
                            } );
                            this.collection.reset( Lam.options.response.bagItems, {
                                parse: true
                            } );
                            this.model.setCacheData( Lam.options.response );
                        }.bind( this ) );
                    } else {
                        this.collection.reset( bagItems, {
                            parse: true
                        } );
                    }
                } else {
                    //just resetting the collection when bagItems is empty
                    this.collection.reset();
                }
                this.render();
            }
        },

        onBagLinkClick: function () {
            QuickBagAnalytics.fireElementTag( "your bag link" );
        },

        onCheckoutButtonClick: function () {
            QuickBagAnalytics.fireElementTag( "checkout button" );
        }

    } );

    return QuickBagCompositeView;
} );

define( 'quickBag/models/QuickBagProduct',[ "jquery",
    "underscore",
    "backbone",
    "cookie",
    "globals",
    "objectUtil"
], function ( $, _, Backbone, Cookie, Globals, ObjectUtil ) {
    var QBModel = Backbone.Model.extend( {
        idAttribute: "bagItemId",
        urlRoot: function () {
            return Globals.getValue( "props.componentizedQuickBagRestUrl" ) + Cookie.get( "macys_online_uid" ) + "/items/";
        },
        productConfig: {
            productImage: {
                primaryImage: {
                    "alt": "",
                    "width": "75",
                    "height": "75",
                    "quality": "90"
                }
            },
            swatchImage: {
                "primaryImage": {
                    "alt": "",
                    "width": "19",
                    "height": "19",
                    "quality": "90"
                }
            }
        },

        //###Method - productImageGenerator()  updates the product image url to the correct path
        //> parameters
        //>
        //+ *imageryObj* - ImageryObject from the response
        //> returns
        //>
        //+ A product image url modified imagery object
        productImageGenerator: function ( imageryObj ) {
            var clonedImageryObj = $.extend( true, {}, imageryObj ),
                config = $.extend( true, {}, this.productConfig.productImage.primaryImage, imageryObj.primaryImage ),
                tempProductImageUrl;

            tempProductImageUrl = clonedImageryObj.urlTemplate.product.replace( /\[QUALITY\]/gi, config.quality );
            tempProductImageUrl = tempProductImageUrl.replace( /\[WIDTH\]/gi, config.width );
            tempProductImageUrl = tempProductImageUrl.replace( /\[IMAGEFILEPATH\]/gi, config.filePath );

            clonedImageryObj.urlTemplate.product = tempProductImageUrl;

            return clonedImageryObj;
        },

        //###Method - productSwatchGenerator()  updates the swatch image url to the correct path
        //> parameters
        //>
        //+ *imageryObj* - ImageryObject from the response
        //> returns
        //>
        //+ A swatch image url modified imagery object
        productSwatchGenerator: function ( imageryObj ) {
            var clonedImageryObj = $.extend( true, {}, imageryObj ),
                config = $.extend( true, {}, this.productConfig.swatchImage.primaryImage, imageryObj.selectedColor.swatchImage ),
                tempSwatchImageUrl;

            tempSwatchImageUrl = clonedImageryObj.urlTemplate.swatch.replace( /\[WIDTH\]/gi, config.width );
            tempSwatchImageUrl = tempSwatchImageUrl.replace( /\[HEIGHT\]/gi, config.quality );
            tempSwatchImageUrl = tempSwatchImageUrl.replace( /\[IMAGEFILEPATH\]/gi, config.filePath );

            clonedImageryObj.selectedColor.swatchImage.imageFullPath = tempSwatchImageUrl;

            return clonedImageryObj;
        },

        setCustomHeaders: function ( xhr ) {
            var product = this.get( "product" ),
                gwpIndicator = ObjectUtil.getChildProperty( product, "detail.flags.gwpIndicator" ) || false;
            xhr.setRequestHeader( "Gwp-Header", gwpIndicator );
        },

        destroy: function ( options ) {
            options = $.extend( options, {
                beforeSend: this.setCustomHeaders.bind( this )
            } );
            Backbone.Model.prototype.destroy.call( this, options );
        },
        //###Method - parse()  updates the price, source image url and swatch image url
        //> parameters
        //>
        //+ *attrs* - model attributes
        //> returns
        //>
        //+ A massaged model attributes
        parse: function ( attrs ) {
            attrs.product.pricing.price.tieredPrice = _.map( attrs.product.pricing.price.tieredPrice, function ( price ) {
                price.label = price.label.replace( /\[PRICE\]/g, "<strong>" + price.formattedValue[ 0 ] + "</strong>" );
                return price;
            } );

            attrs.product.imagery = this.productImageGenerator( attrs.product.imagery );

            if ( attrs.product.traits.colors.selectedColor.swatchImage ) {
                attrs.product.traits.colors = this.productSwatchGenerator( attrs.product.traits.colors );
            }

            return attrs;
        }
    } );

    return QBModel;

} );

define( 'quickBag/collection/QuickBagCollection',[
    "jquery",
    "backbone",
    "quickBag/models/QuickBagProduct"

], function ( $, Backbone, QBProductModel ) {

    var QuickBagCollection = Backbone.Collection.extend( {
        model: QBProductModel
    } );

    return QuickBagCollection;
} );

//#MODULE - QuickBag
//
//> Author: Sarfaraz Merchant
//>
//> Create Date: May 3, 2016
//>
//##DESCRIPTION: QuickBag pointing to REST API. It listens to few events. Written as part of NavApp stability project (bag componentization)

define( 'quickBag/QuickBagRESTApi',[ "jquery",
    "underscore",
    "globals",
    "pubsub",
    "objectUtil",
    "quickBag/models/QuickBagREST",
    "quickBag/views/QuickBagREST",
    "quickBag/collection/QuickBagCollection",
    "quickBag/QuickBagActions",
    "quickBag/QuickBagAnalytics"
], function ( $, _, Globals, pubsub, objectUtil, QuickBagModel, QuickBagCompositeView, QuickBagCollection, qbActions, QuickBagAnalytics ) {

    var qbv,
        qbHeaderSelector = "#quickBagHeader",
        myBagLinkSelector = "#checkoutLink",
        itemCountSelector = "#itemCount",
        qbHeaderClass = "quickBagFlyoutHeader",
        compositeViewElId = "qbFlyout",
        compositeViewElClass = "quickBagFlyout",
        showClass = "hover",
        donotShowQuickBagClass = "noQuickBag",
        $qbHeader,
        quickBagModel = new QuickBagModel();

    //###Method - validQuickBagUrl()
    //Private Method to identify if on current page quickbag is shown or not. It other pages it will add "noQuickBag" class to body tag
    //
    //> parameters
    //+ *options* - This is an optional parameter. Primarily used for unit test to pass a dummy window object
    //
    //> returns
    //>
    //+ *Boolean* - True if valid URL else false
    //
    function validQuickBagUrl( options ) {
        var urls = [ "/bag/index.ognc", "/bag/atbpage", "/bag/merge", "/bag/checkout/merge" ],
            matchedURLs = [],
            currentUrl,
            winObj;

        //this is to ensure we don"t mess with original window object in unit test
        winObj = ( options && options.window ) ? options.window : window;
        currentUrl = winObj.location.href;

        matchedURLs = _.filter( urls, function ( url ) {
            return currentUrl.indexOf( url ) !== -1;
        } );

        if ( matchedURLs.length ) {
            $( 'body' ).addClass( donotShowQuickBagClass );
        }

        return !matchedURLs.length;
    }

    //will open the quick bag after ensuring that bag items are updated
    //promise will resolve with a data and a boolean true if fetched from server or false if fetched from cache
    //promise will fail if fetching failed or quick is not allowed on the page
    //argument options only being used for unit testing
    function open( options ) {
        //ensure the qbv is initialized. if it is already initialized it will not re-initialize
        init( options );

        //instead of checking for message from init, we just check if qbv is defined.
        //if it is undefined after calling init it is safe to assume that on this bag quickbag is not allowed
        if ( qbv ) {
            return qbv.model.getData().then( function ( obj ) {
                $qbHeader.addClass( showClass );
                $( '#' + compositeViewElId ).attr( "aria-hidden", "false" );
                return obj;
            }, function () {
                $qbHeader.addClass( showClass );
                $( '#' + compositeViewElId ).attr( "aria-hidden", "false" );
                return "Update failed";
            } );
        } else {
            return $.Deferred().reject( "QuickBag not allowed" );
        }
    }

    //returns nothing
    //will remove class only if quickbag is initialized
    function close() {
        if ( qbv ) {
            $qbHeader.removeClass( showClass );
            $( '#' + compositeViewElId ).attr( "aria-hidden", "true" );
        }
    }

    //will return a promise
    //promise will resolve with a data and a boolean true if fetched from server or false if fetched from cache
    //promise will fail if fetching failed or quick is not allowed on the page
    //argument options only being used for unit testing
    function getData( options ) {
        return quickBagModel.getData().then( function ( obj ) {
            return obj;
        }, function () {
            return "Update failed";
        } );
    }

    //will return a promise. it will ensure that cache is expired before calling model getData
    //promise will resolve with a data and a boolean true if fetched from server or false if fetched from cache
    //promise will fail if fetching failed or quick is not allowed on the page
    //argument options only being used for unit testing
    function updateData( options ) {
        quickBagModel.expireCache();
        return quickBagModel.getData().then( function ( obj ) {
            return obj;
        }, function () {
            return "Update failed";
        } );
    }

    function updateItemCount( newCount ) {
        if ( typeof newCount !== "undefined" ) {
            //should remove these spans. keeping it because globalCart.js (setHeader method) from NavApp is inserting these spans
            $( itemCountSelector ).html( "&nbsp;<span>(</span>" + newCount + "<span>)</span>" );
        }
    }

    //this is currently being used by unit test only
    function destroy() {
        $( "#qbFlyout" ).remove();
        $( "#quickBagHeader" ).removeClass( qbHeaderClass );
        $( "#openQbAccessibile" ).remove();
        qbv = undefined;
        $( document ).off( ".quickbag" );
    }

    function addAccessibilityMarkup() {
        var accessibileBtn = "<button class='hide-for-screenreader' tabindex='0' id='openQbAccessibile'>Opens QuickBag flyout</button>";
        $( accessibileBtn ).appendTo( myBagLinkSelector );
        $( document ).on( "click.quickbag", "#openQbAccessibile", function () {
            open();
        } );
        $qbHeader.attr( "aria-haspopup", "true" );
        $( '#' + compositeViewElId ).attr( "aria-hidden", "true" );
    }

    //###Method - init( options )
    //Private Method to add required DOM elements and initialize quickBagFlyout composite view
    //
    //> parameters
    //+ *options* - This is an optional parameter. Primarily used for unit test to pass a dummy window object
    //
    //> returns
    //>
    //+ nothing || message: these messages will be passed back to quickbag:initialize callback
    function init( options ) {
        options = options || {};
        if ( !qbv ) {
            $qbHeader = $( qbHeaderSelector );
            $qbHeader.addClass( qbHeaderClass );
            if ( validQuickBagUrl( options ) ) {
                //we are adding this DIV and using it as composite view"s element. we are doing this because if we move quickBagHeader as part of composite view"s
                //element then every time we render this view, quickBagHeader will render and it will trigger "mouseenter" event again
                //causing to fire coremeterics tags twice.
                $qbHeader.append( "<div id=" + compositeViewElId + " class=" + compositeViewElClass + "></div>" );

                // we can update service url in model to get bag response
                if ( options.url ) {
                    quickBagModel.urlRoot = options.url;
                }

                var config = {
                    el: ( options.el ) ? options.el : "#" + compositeViewElId,
                    collection: new QuickBagCollection(),
                    model: quickBagModel

                };

                if ( options.compositeViewTemplate ) {
                    _.extend( config, {
                        template: options.compositeViewTemplate
                    } );
                }

                if ( options.productViewTemplate ) {
                    _.extend( config, {
                        productViewTemplate: options.productViewTemplate
                    } );
                }

                qbv = new QuickBagCompositeView( config );

                // This is required to prevent banner overlapping on quickbag dropdown Bug D-13499.
                //copied from earlier quickBag
                $( '.widget .mainContainer .flexShadow' ).css( 'z-index', '0' );

                addAccessibilityMarkup();

                //this is added so that consumer of this component doesn't have to check for killswitch as well experiment values
                //if this key is set in globals that means this component is being shown to the user.
                Globals.setValue( "quickBagRESTEnabled", true );

                //do the mouseenter binding to ensure when user is shown updated list in the quickbag
                $( document ).on( "mouseenter.quickbag", myBagLinkSelector, function () {
                    qbv.model.getData();
                } ).on( "keyup.quickbag", qbHeaderSelector, function ( ev ) {
                    if ( ev.which === 27 ) {
                        close();
                        $( myBagLinkSelector ).focus();
                    }
                } );


            } else {
                return "QuickBag not allowed";
            }
        } else {
            return "QuickBag already initialized";
        }
    }

    //this is currently being used by unit test only
    function tearDown() {
        pubsub.removeObserver( qbActions.OPEN );
        pubsub.removeObserver( qbActions.GET_DATA );
        pubsub.removeObserver( qbActions.FORCE_UPDATE );
        pubsub.removeObserver( qbActions.CLOSE );
        pubsub.removeObserver( qbActions.UPDATE_COUNT );
        pubsub.removeObserver( qbActions.TEAR_DOWN );
        pubsub.removeObserver( qbActions.DESTROY );
        $( document ).off( ".quickbag" );
    }

    function setup() {
        //start listening to events. we have to respond to events irrespective if quickbag is initialized or not.
        //we have to initialize quickbag if it is not initialized
        pubsub.observe( qbActions.OPEN ).subscribe( function ( options ) {
            var callback = ( options && options.callback ) || options;
            open( options ).always( function ( obj ) {
                if ( callback && typeof callback === "function" ) {
                    callback( obj );
                }
            } );
        } );

        pubsub.observe( qbActions.FORCE_UPDATE ).subscribe( function ( options ) {
            var callback = ( options && options.callback ) || options;
            updateData( options ).always( function ( obj ) {
                if ( callback && typeof callback === "function" ) {
                    callback( obj );
                }
            } );
        } );

        pubsub.observe( qbActions.GET_DATA ).subscribe( function ( options ) {
            var callback = ( options && options.callback ) || options;
            getData( options ).always( function ( obj ) {
                if ( callback && typeof callback === "function" ) {
                    callback( obj );
                }
            } );
        } );

        pubsub.observe( qbActions.CLOSE ).subscribe( function () {
            close();
        } );

        pubsub.observe( qbActions.UPDATE_COUNT ).subscribe( function ( newCount ) {
            updateItemCount( newCount );
        } );

        pubsub.observe( qbActions.INIT ).subscribe( function ( options ) {
            var callback = ( options && options.callback ) || options;
            var msg = init( options );
            if ( callback && typeof callback === "function" ) {
                callback( msg );
            }
        } );

        //currently only being used by unit test.
        pubsub.observe( qbActions.TEAR_DOWN ).subscribe( function () {
            tearDown();
        } );

        //currently only being used by unit test.
        pubsub.observe( qbActions.DESTROY ).subscribe( function () {
            destroy();
        } );
    }

    //automatic setup and destroy.
    $( document ).ready( setup );
    $( window ).on( 'unload', tearDown );

} );

/* files in this bundle = ["/target/classes/js/mcom/features/quickBag/QuickBagRESTApi","/js/common/util/CacheManager","/src/mcom/features/quickBag/QuickBagActions","/src/mcom/features/quickBag/models/QuickBagREST","/templates/mcom/features/quickBag/quickBagREST","/templates/mcom/features/quickBag/emptyQuickBag","/templates/mcom/features/quickBag/quickBagProduct","/js/common/util/BTDataDictionaryUtils","/src/mcom/features/quickBag/QuickBagAnalytics","/src/mcom/features/quickBag/views/QuickBagProduct","/src/mcom/features/quickBag/views/EmptyQuickBag","/src/mcom/features/quickBag/views/QuickBagREST","/src/mcom/features/quickBag/models/QuickBagProduct","/src/mcom/features/quickBag/collection/QuickBagCollection","/src/mcom/features/quickBag/QuickBagRESTApi"] */require.config( { bundles: {'quickBag/QuickBagRESTApi': ["quickBag/QuickBagRESTApi"]} } );