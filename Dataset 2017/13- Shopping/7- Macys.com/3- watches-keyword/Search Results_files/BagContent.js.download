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
//#MODULE - Refactored QuickBag: Model
// Implements the quickbag in the header
//
//> Author: Ankit Ag, Jacob Seymour
//>
//> Create Date: April 14, 2015
//>
//##DESCRIPTION: New Quickbag code that uses backbone, jquery and handlebars - migrated from YUI

define( 'quickBag/models/QuickBag', [
    'backbone', 'jquery', 'cacheManager', 'globals', 'underscore', 'cookie'
], function ( Backbone, $, CacheManager, Globals, _, Cookie ) {

    var QBModel = Backbone.Model.extend( {

        sessionKey: 'qbResponse',
        cacheTimeExpiry: '15',
        that: this,
        model: {},
        bagType: '',
        remove: '',
        isProcessing: NaN,

        //B-45924 - We should provide default assets url if there is no 'props.imageHost' global set
        constants: {

            //This constant is dynamic because slimages host does not support https by now, it should be "//slimages.macysassets.com/is/image/MCY"
            DEFAULT_ASSETS_URL: location.protocol === 'https:' ? '/img/ts/is/image/MCY' : 'http://slimages.macysassets.com/is/image/MCY',
            BAG_URL: '/bag/index.ognc?cm_sp=navigation-_-top_nav-_-bag '

        },

        initialize: function () {},

        url: function () {
            return '/bag/' + this.bagType;
        },

        getBagUrl: function () {
            return this.bagType;
        },

        getBagContents: function () {
            var bag = {
                products: [],
                categories: [],
                param: '',
                contents: '',
                bagId: ''
            };

            var data = this.getQuickBagSession();

            if ( data !== null ) {
                bag.products = [];
                bag.categories = [];
                bag.products = _.map( data.bagItems, function ( item ) {
                    return item.productID;
                } );

                bag.categories = _.map( data.bagItems, function ( item ) {
                    return item.categoryID;
                } );

                bag.contents = encodeURIComponent( bag.products.join( '|' ) );

                bag.param = {
                    bagContents: bag.contents
                };

                if ( typeof data.bagID === "string" && $.trim( data.bagID ) !== "" ) {
                    bag.bagId = data.bagID.replace( "-", "" );
                }

            }

            return bag;

        },

        updateQuickBagModel: function ( jsonModel, options ) {
            options = options || {};
            this.bagType = 'view';
            if ( jsonModel === null ) {
                this.ajaxRequest( options );
            } else {
                this.expireCache();
                this.model = jsonModel;
                this.setQuickBagSession( jsonModel );
            }
            return this.model;
        },

        removeQuickBagModel: function ( url, options ) {
            options = options || {};
            this.expireCache();
            this.bagType = url;

            this.ajaxRequest( options );
            return this.model;
        },

        viewQuickBagModel: function ( options ) {
            options = options || {};
            this.bagType = 'view';
            if ( this.isQBSessionStorageValid() === false ) {
                this.ajaxRequest( options );

            } else {

                this.model = this.getQuickBagSession();
                if ( options.success ) {
                    options.success( this.model );
                }
            }

            return this.model;

        },

        formatColorwayPrice: function ( TieredPrice, currency ) {
            var formattedPrice;
            if ( TieredPrice.label !== "[PRICE]" ) {
                formattedPrice = TieredPrice.label.replace( ".", "" );
                formattedPrice = formattedPrice.replace( " [PRICE]", ": " + currency + TieredPrice.formattedValue[ 0 ] );
            } else {
                formattedPrice = TieredPrice.label.replace( "[PRICE]", currency + TieredPrice.formattedValue[ 0 ] );
            }

            return formattedPrice;
        },

        ajaxRequest: function ( options ) {

            if ( this.isProcessing ) {
                return;
            } else {
                this.isProcessing = true;
                options = options || {};
                var bagModel = {};
                var that = this;
                $.ajax( this.url(), {
                    type: "POST",
                    dataType: "json",
                    success: function ( collection ) {
                        bagModel = collection;
                        var assetUrl = Globals.getValue( 'props.imageHost' ) || that.constants.DEFAULT_ASSETS_URL;
                        var bagUrl = ( Globals.getValue( 'props.baseHost' ) || '' ) + that.constants.BAG_URL;
                        var shippingCurrency = Cookie.get( "currency" );
                        var country = Cookie.get( "shippingCountry" );
                        if ( Globals.getValue( 'props.colorwayPricingEnabled' ) ) {
                            bagModel.bagItems.forEach( function ( bagItem ) {
                                if ( bagItem.colorwayPrice ) {
                                    var formattedTieredPrice = bagItem.colorwayPrice.formattedTieredPrice = [];
                                    var tieredPrice = bagItem.colorwayPrice.tieredPrice;
                                    //format first tier
                                    formattedTieredPrice.push( {
                                        formattedPrice: that.formatColorwayPrice( tieredPrice[ 0 ], bagModel.currency ),
                                        type: ""
                                    } );
                                    //format last tier, and skip all in-between tiers. tieredPrice.length-1 ==> last tier index
                                    if ( tieredPrice.length > 1 ) {
                                        formattedTieredPrice.push( {
                                            formattedPrice: that.formatColorwayPrice( tieredPrice[ tieredPrice.length - 1 ], bagModel.currency ),
                                            type: "salePrice"
                                        } );
                                    }
                                }
                            } );
                        }
                        bagModel.shippingCountry = country;
                        bagModel.assetUrl = assetUrl;
                        bagModel.bagUrl = bagUrl;
                        that.expireCache();
                        that.model = bagModel;
                        that.setQuickBagSession( bagModel );

                        if ( options.success ) {
                            return options.success( bagModel );
                        }
                    },
                    error: function ( collection ) {
                        bagModel = collection;
                        this.model = bagModel;
                        if ( options.error ) {
                            return options.error( bagModel );

                        }
                    }
                } );
            }
        },

        validator: function () {
            var bagCount = this.getCachedBagCount();
            var cookie = parseInt( Cookie.get( 'CartItem', 'GCs' ), 10 );

            if ( ( isNaN( cookie ) ) && ( bagCount === 0 ) ) {
                return true;
            }

            if ( cookie !== bagCount ) {
                return false;
            } else {
                return true;
            }
        },

        setQuickBagSession: function ( model ) {

            try {
                var assetUrl = Globals.getValue( 'props.imageHost' ) || this.constants.DEFAULT_ASSETS_URL;
                var bagUrl = ( Globals.getValue( 'props.baseHost' ) || '' ) + this.constants.BAG_URL;
                model.assetUrl = assetUrl;
                model.bagUrl = bagUrl;

                CacheManager.setSession( this.sessionKey, model, this.cacheTimeExpiry );
                this.isProcessing = false;
            } catch ( e ) {
                //TODO Implement exception handling
            }
        },

        isQBSessionStorageValid: function () {

            if ( ( CacheManager.getSession( this.sessionKey ) !== null ) && ( this.validator() !== false ) ) {

                if ( ( CacheManager.getSession( this.sessionKey ) ).shippingCountry !== Cookie.get( "shippingCountry" ) ) {
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

        getQuickBagSession: function () {
            var bagModelTemp = {};

            if ( ( CacheManager.getSession( this.sessionKey ) !== null ) || ( this.validator() === false ) ) {
                bagModelTemp = CacheManager.getSession( this.sessionKey );
                return bagModelTemp;

            } else {
                return null;
            }
        },

        /**
         * getCachedBagCount This gets the count from the cache [if available].
         *                   This along with cookie is helpful for checking when the count has been changed and calls ajax to update itself.
         * @return
         */
        getCachedBagCount: function () {
            var bagCount = -1;
            var tempBagModel = {};

            if ( CacheManager.getSession( this.sessionKey ) !== null ) {
                tempBagModel = CacheManager.getSession( this.sessionKey );

                if ( tempBagModel !== null ) {
                    bagCount = tempBagModel.totalQty;
                    return bagCount;

                }
            } else {
                return bagCount;
            }
        },

        expireCache: function () {
            try {
                CacheManager.removeSession( this.sessionKey );
            } catch ( e ) {

            }

        },

        synchronizeQBModel: function ( method, model, options ) {
            options = _.extend( {
                parse: true
            }, options || {} );

            switch ( method ) {

            case 'remove':
                this.model = this.removeQuickBagModel( model.remove, options );
                break;

            case 'view':
                this.model = this.viewQuickBagModel( options );
                break;

            case 'update':
                if ( model !== null ) {
                    this.model = this.updateQuickBagModel( model, options );

                } else {
                    this.synchronizeQBModel( 'view', model, options );

                }
                break;

            case 'read':
                return this.getBagContents();

            }

        }

    } );

    return QBModel;

} );

define( 'bagContent',[ 'jquery', 'underscore', 'cookie', 'clientSideStorage', 'globals', 'quickBag/models/QuickBag' ], function ( $, _, cookie, clientSideStorage, Globals, QuickBagModel ) {

    var bag, ajax, data, refresh, session,
        bagItemsCount, latestBagItemsCount;

    bag = {
        products: [],
        categories: [],
        param: '',
        contents: '',
        bagId: ''
    };

    refresh = function ( data ) {
        bag.products = [];
        bag.categories = [];

        if ( !data ) {
            return;
        }

        bag.products = _.map( data.bagItems, function ( item ) {
            return item.productID;
        } );

        bag.categories = _.map( data.bagItems, function ( item ) {
            return item.categoryID;
        } );

        bag.contents = encodeURIComponent( bag.products.join( '|' ) );

        bag.param = {
            bagContents: bag.contents
        };

        if ( typeof data.bagID === "string" && $.trim( data.bagID ) !== "" ) {
            bag.bagId = data.bagID.replace( "-", "" );
        }
    };

    ajax = function () {
        var params;

        bagItemsCount = cookie.get( 'CartItem', 'GCs' );

        if ( !bagItemsCount || bagItemsCount === latestBagItemsCount ) {
            return;
        }

        latestBagItemsCount = bagItemsCount;

        params = {
            'timenow': new Date().getTime(),
            'promoCode[0]': cookie.get( 'PromoCodeOne', 'SMISCGCs' )
        };

        $.post( '/bag/view?' + $.param( params ), function ( data ) {
            try {
                // Preserving the bag response so that QB mouse hover won't fire bag call for next 5 mins.
                clientSideStorage.setSession( 'qbResponse', data );
                clientSideStorage.setSession( 'qbResponseExp', new Date() );
            } catch ( e ) {}
            return refresh( JSON.parse( data ) );
        } );

    };

    session = function () {
        bagItemsCount = cookie.get( 'CartItem', 'GCs' );
        if ( !bagItemsCount ) {
            return;
        }

        try {
            data = JSON.parse( clientSideStorage.getSession( 'qbResponse' ) );
            if ( data && data.bagItems && bagItemsCount === data.bagItems.length ) {
                refresh( data );
                return true;
            }
        } catch ( e ) {}

        return false;
    };

    if ( Globals.getValue( "props.refactoredQuickBag" ) === "false" ) {
        if ( !session() ) {
            ajax();
        }
        $( window ).focus( ajax );
    }


    bag.getBagModel = function () {
        try {
            refresh( JSON.parse( clientSideStorage.getSession( 'qbResponse' ) ) );
        } catch ( e ) {}
        return this;
    };


    return bag;

} );

/* files in this bundle = ["/target/classes/js/mcom/components/thumbCarousel/BagContent","/js/common/util/CacheManager","/src/mcom/features/quickBag/models/QuickBag","/src/mcom/components/thumbCarousel/BagContent"] */require.config( { bundles: {'bagContent': ["bagContent"]} } );