//#MODULE - HookLogic
//> Author: Sarfaraz Merchant
//>
//> Create Date: February 20, 2015
//>
//##DESCRIPTION: AMD module that wraps HLLibrary provided by HookLogic. It returns an object with start method in it. 
//When start method is called it returns a promise. The promise gets resolved when HLLibrary is defined. The code will wait for 5 seconds before rejecting the deferred.
//The reason why I am returning a deferred is just to avoid race condition between loading of HLLibrary and this module using it.
//
define( [ "cookie", "logger", "objectUtil", "jquery" ], function ( Cookie, Logger, ObjectUtil, $ ) {
    var PROPERTY_KEY = "properties",
        FILTER_KEY = "filters",
        ATTR_KEY = "attributes",
        checkLimit = 20,
        defaultMs = 250;

    //###Method - checkOptionsObj()  
    //Constructor that gets returns when HLLibrary is found in global scope.
    //
    //> parameters
    //>
    //+ *settings* : *Object* - Initial list of options that needs to be passed.
    //+ *id* : *String* - Id of the element where ads from HL needs to be injected.
    //
    //> returns
    //>
    //+ *none*
    //
    function hookLogic( settings, id ) {
        var options,
            userId;

        //###Method - checkOptionsObj()  
        //Private method to test if options object is an actual object. If not it will create it as an object.
        //Will also check if it has required child property if not it will add it.
        //
        //> parameters
        //>
        //+ *requiredProperties* : *Array* - List of required properties that should be passed to HL
        //
        //> returns
        //>
        //+ *none*
        //
        function checkOptionsObj() {
            //if options is not a object than overwrite it with a blank object
            //and also add required child property
            if ( Object.prototype.toString.call( options ) !== "[object Object]" ) {
                options = {};
                options[ PROPERTY_KEY ] = {};
            }
            //if options is an object but has missing required child property than add it
            else if ( !ObjectUtil.hasChildProperty( options, PROPERTY_KEY ) ) {
                options[ PROPERTY_KEY ] = {};
            }
        }

        //###Method - setUserId( name )  
        //Private method to set userId from macys_online_uid cookieid
        //
        //> parameters
        //>
        //+ *none*
        //
        //> returns
        //>
        //+ *none*
        //
        function setUserId() {
            if ( userId === undefined ) {
                userId = Cookie.get( "macys_online_uid" ) || "";
                options[ PROPERTY_KEY ].cUserId = userId;
            }
        }

        //###Method - submitToHookLogic( hookLogicObj )  
        //Private method to call public methods of HLLibrary and passing correct value based on values in options obect.
        //
        //> parameters
        //>
        //+ *hookLogicObj* : *HookLogic Object* - The object that is returned by one of the public methods of HLLibrary
        //
        //> returns
        //>
        //+ *none*
        //
        function submitToHookLogic( hookLogicObj ) {
            var key,
                propertiesObj = options[ PROPERTY_KEY ],
                filtersObj = options[ FILTER_KEY ],
                attrsObj = options[ ATTR_KEY ];


            //if options object has taxonomy property then call setTaxonomy passing the value from object    
            if ( options.hasOwnProperty( "taxonomy" ) ) {
                hookLogicObj = hookLogicObj.setTaxonomy( options.taxonomy );
            }

            //if options object has keyword property then call setKeyword passing the value from object
            if ( options.hasOwnProperty( "keyword" ) ) {
                hookLogicObj = hookLogicObj.setKeyword( options.keyword );
            }

            //if options object has product property then call setProduct passing the value from object    
            if ( options.hasOwnProperty( "product" ) ) {
                hookLogicObj = hookLogicObj.setProduct( options.product );
            }

            //if options object has module property then call setModule passing the value from object
            if ( options.hasOwnProperty( "module" ) ) {
                hookLogicObj = hookLogicObj.setModule( options.module );
            }

            //if options object has properties object then call setProperty for each property passing the value from properties object
            if ( propertiesObj ) {
                for ( key in propertiesObj ) {
                    if ( propertiesObj.hasOwnProperty( key ) ) {
                        hookLogicObj = hookLogicObj.setProperty( key, propertiesObj[ key ] );
                    }
                }
            }

            //if options object has filters object then call setFilter for each filter passing the value from fitlers object
            if ( filtersObj ) {
                for ( key in filtersObj ) {
                    if ( filtersObj.hasOwnProperty( key ) ) {
                        hookLogicObj = hookLogicObj.setFilter( key, filtersObj[ key ] );
                    }
                }
            }

            //if options object has attributes object then call setAttributes for each attribute passing the value from fitlers object
            if ( attrsObj ) {
                for ( key in attrsObj ) {
                    if ( attrsObj.hasOwnProperty( key ) ) {
                        hookLogicObj = hookLogicObj.setAttribute( key, attrsObj[ key ] );
                    }
                }
            }

            //submit the final request
            hookLogicObj.submit( id );
        }

        options = settings;
        checkOptionsObj();

        //###Method - newRequest()  
        //Public method to call HL's newRequest. It internall calls submitToHookLogic()
        //
        //> parameters
        //>
        //+ *none*
        //
        //> returns
        //>
        //+ *none*
        //
        this.newRequest = function newRequest() {
            var hookLogicObj = window.HLLibrary.newRequest(),
                requiredProperties = [ "hlPageType", "pCount", "organicSKUs", "pgSize", "pgN", "view", "brand", "minRating", "minPrice", "maxPrice" ];

            updateRequiredProperties( requiredProperties );
            submitToHookLogic( hookLogicObj );
        };

        //###Method - newUpdate()  
        //Public method to call HL's newRequest. It internall calls submitToHookLogic()
        //
        //> parameters
        //>
        //+ *none*
        //
        //> returns
        //>
        //+ *none*
        //
        this.newUpdate = function newUpdate() {
            var hookLogicObj = window.HLLibrary.newUpdate(),
                requiredProperties = [ "hlPageType", "sku", "parentSku", "price", "regularPrice", "inStock" ];

            updateRequiredProperties( requiredProperties );
            submitToHookLogic( hookLogicObj );
        };

        //###Method - newOrder()  
        //Public method to call HL's newRequest. It internall calls submitToHookLogic()
        //
        //> parameters
        //>
        //+ *none*
        //
        //> returns
        //>
        //+ *none*
        //
        this.newOrder = function newOrder() {
            var hookLogicObj = window.HLLibrary.newOrder(),
                requiredProperties = [ "hlPageType", "sku", "parentSku", "price", "quantity", "orderId" ];

            updateRequiredProperties( requiredProperties );
            submitToHookLogic( hookLogicObj );
        };

        //###Method - newEvent()  
        //Public method to call HL's newRequest. It internall calls submitToHookLogic().
        //
        //> parameters
        //>
        //+ *none* 
        //
        //> returns
        //>
        //+ *none*
        //
        this.newEvent = function newEvent() {
            var hookLogicObj = window.HLLibrary.newEvent(),
                requiredProperties = [ "hlPageType", "sku", "parentSku", "eventType" ];

            updateRequiredProperties( requiredProperties );
            submitToHookLogic( hookLogicObj );
        };

        //###Method - resetOptions( obj )  
        //Public method to override all current options being passed to HLLibrary
        //
        //> parameters
        //>
        //+ *obj* : *Object* - That needs to override current options
        //
        //> returns
        //>
        //+ *this* : *Object* - Return current instance so that public methods can be chained.
        //
        this.resetOptions = function resetOptions( obj ) {
            if ( obj && Object.prototype.toString.call( obj ) === "[object Object]" ) {
                options = obj;
            } else {
                Logger.error( "Invalid object passed." );
            }
            return this;
        };

        //###Method - setProperty( name, value )  
        //Public method to add to options[PROPERTY_KEY] object. After adding a property you need call the required from the instance based
        //on what are you using this instance for. e.g .newRequest or newEvent
        //
        //> parameters
        //>
        //+ *name* : *String* - Name of the property that needs to be added
        //+ *value* : *String* - Value to be set for the new property
        //
        //> returns
        //>
        //+ *this* : *Object* - Return current instance so that public methods can be chained.
        //
        this.setProperty = function setProperty( name, value ) {
            if ( name && value !== undefined ) {
                if ( options[ PROPERTY_KEY ] === undefined ) {
                    options[ PROPERTY_KEY ] = {};
                }
                options[ PROPERTY_KEY ][ name ] = value;
            } else {
                Logger.error( "Incorrect name or value. Cannot set property." );
            }

            return this;
        };

        //###Method - removeProperty( name )  
        //Public method to remove from options[PROPERTY_KEY] object. After removing a property you need call the required from the instance based
        //on what are you using this instance for. e.g .newRequest or newEvent
        //
        //> parameters
        //>
        //+ *name* : *String* - Name of the property that needs to be added
        //
        //> returns
        //>
        //+ *this* : *Object* - Return current instance so that public methods can be chained.
        //
        this.removeProperty = function removeProperty( name ) {
            var path;
            if ( name ) {
                path = PROPERTY_KEY + "." + name;
                if ( ObjectUtil.hasChildProperty( options, path ) ) {
                    delete options[ PROPERTY_KEY ][ name ];
                } else {
                    Logger.error( name + ": property not found." );
                }
            } else {
                Logger.error( "Name of property is required." );
            }

            return this;
        };

        //###Method - setFilter( name, value )  
        //Public method to add to options[FILTER_KEY] object. Since filters are only used for newRequest, this method after adding the 
        //filter will call newRequest.
        //
        //> parameters
        //>
        //+ *name* : *String* - Name of the property that needs to be added
        //+ *value* : *String* - Value to be set for the new property
        //
        //> returns
        //>
        //+ *none*
        //
        this.setFilter = function setFilter( name, value ) {
            if ( name && value !== undefined ) {
                if ( options[ FILTER_KEY ] === undefined ) {
                    options[ FILTER_KEY ] = {};
                }
                options[ FILTER_KEY ][ name ] = value;
                this.newRequest();
            } else {
                Logger.error( "Incorrect name or value. Cannot set filter." );
            }
        };

        //###Method - removeFilter( name )  
        //Public method to remove from options[FILTER_KEY] object. Since filters are only used for newRequest, this method after removing the 
        //filter will call newRequest.
        //
        //> parameters
        //>
        //+ *name* : *String* - Name of the property that needs to be added
        //
        //> returns
        //>
        //+ *none*
        //
        this.removeFilter = function removeFilter( name ) {
            var path;
            if ( name ) {
                path = FILTER_KEY + "." + name;
                if ( ObjectUtil.hasChildProperty( options, path ) ) {
                    delete options[ FILTER_KEY ][ name ];
                    this.newRequest();
                } else {
                    Logger.error( name + ": filter not found." );
                }
            } else {
                Logger.error( "Name of filter is required." );
            }
        };

        //###Method - updateRequiredProperties( requiredProperties, obj )  
        //Private method to to set required properties to null if not found in options object. If required properties are missing then
        //HL can throw an error.
        //
        //> parameters
        //>
        //+ *requiredProperties* : *Array* - List of required properties that should be passed to HL
        //
        //> returns
        //>
        //+ *none*
        //
        function updateRequiredProperties( requiredProperties ) {
            var len = requiredProperties.length,
                i, path, property;

            //userid is required for all types of calls    
            setUserId();

            for ( i = 0; i < len; i++ ) {
                property = requiredProperties[ i ];
                path = PROPERTY_KEY + "." + property;
                if ( !ObjectUtil.hasChildProperty( options, path ) ) {
                    options[ PROPERTY_KEY ][ property ] = null;
                }
            }
        }
    }

    //###Method - checkForHLLibrary( deferred, maxChecks )  
    //Private method to check if HLLibrary is loaded in global scope or not. This method is called by start once.
    //It internally calls doCheck via setTimeout every <defaultMs> until window.HLLibrary is found or maxChecks has been reached.
    //
    //> parameters
    //>
    //+ *deferred* : *jQuery Deferred* - This deferred will be resolved or rejected based on conditions.
    //+ *maxChecks* : *Number* - Number of times to check for window.HLLibrary
    //
    //> returns
    //>
    //+ *none*
    //
    function checkForHLLibrary( deferred, maxChecks ) {
        var counter = -1;

        ( function doCheck() {
            if ( window.HLLibrary === undefined && counter > maxChecks ) {
                Logger.error( "HLLibrary is not defined." );
                deferred.reject();
            } else if ( window.HLLibrary !== undefined ) {
                deferred.resolve( hookLogic );
            } else {
                counter++;
                setTimeout( doCheck, defaultMs );
            }
        }() );
    }

    //###Method - convertSecondsToCheckLimit()  
    //Private method to convert seconds into 
    //
    //> parameters
    //>
    //+ *seconds* : *Number* - Number of seconds to be converted to checkLimit
    //
    //> returns
    //>
    //+ Number of time setInterval will run.
    //
    function convertSecondsToCheckLimit( seconds ) {
        return seconds * 1000 / defaultMs;
    }

    //###Method - start( secondsToWait )  
    //Public method that needs to be called when this module is loaded.
    //
    //> parameters
    //>
    //+ *secondsToWait*: *Number* - Optional, number of seconds to wait for HLLibrary to load. Default is 5 seconds.
    //
    //> returns
    //>
    //+ A promise, which will get resolved with HookLogic function or will reject without any arguments.
    //
    function start( secondsToWait ) {
        var deferred = $.Deferred(),
            maxChecks;

        maxChecks = ( secondsToWait && typeof secondsToWait === "number" ) ? convertSecondsToCheckLimit( secondsToWait ) : checkLimit;
        checkForHLLibrary( deferred, maxChecks );

        return deferred.promise();
    }

    return {
        start: start
    };

} );
//### Example usage 1:
// define( [ "mcomjs/components/HookLogic" ], function ( hookLogic ) {
//     var settings1 = {
//         "module": "name_of_the_module",
//         "taxanomy": "243",
//         "properties": {
//             "brand": "sony",
//             "sort": "price-asc",
//             "platform": "tablet"
//         },
//         "filter": {
//             "color": "Black"
//         };
//     }
//     hookLogic.start().done( function ( HookLogic ) {
//         var hl1 = new HookLogic( settings1, "id_of_element1" );
//         hl1.newRequest();
//         var hl2 = new HookLogic( settings2, "id_of_elemet2" );
//         hl2.newRequest();
//     } );
// } );
//
//
//In the above example say user selected a different brand and the grid is refreshed without page reload
//and you want to update ads based on new selection you can call...
// hl1.setProperty( "brand", "Hugo Boss" ).newRequest();
//
//Similarly if you want to update ads based on new filters you can call...
// hl1.setFilter( "color": "Black|Blue" );
//
//If you want to update ads based on removed filter you can call...
// hl1.removeFilter( "color" );
//
//Similarly you can remove properties as well. Keep in mind some of the the properties are required and cannot be removed 
//(module is not checking if you are trying to remove a required property or not). See documentation here
//http://developer.hooklogic.com/developers/docs/RetailSearchExchange_PublisherImplementationGuide_JavaScript-v2-1-1.pdf
// hl1.removeProperty( "platform" ).newRequest();
//
//
//### Example usage 2:
//If you want to use two methods of HLLibrary for example newRequest and newEvent on the same page you can create two instances of HookLogic
// define( [ "mcomjs/components/HookLogic" ], function ( hookLogic ) {
//     hookLogic.start().done( function ( HookLogic ) {
//         var hlNewRequest = new HookLogic( settingsNewRequest, "id_of_element1" );
//         hlNewRequest.newRequest();
//
//         var hlNewEvent = new HookLogic( settingsNewEvent );
//         hlNewEvent.newEvent();
//     } );
// } );
