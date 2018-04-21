//#MODULE - Context Framework
//> Author: Michael Moir
//> Create Date: October 14, 2013
//
//##DESCRIPTION: 
//AMD module to handle the fetching and setting of a user's context.  Modeled after
//the Macy's Java Module of the same name, this is the client-side version of that library.
//More information can be found at: http://confluence/display/WDS/Context+Driven+UI+-+Framework
//
//##Regarding "Locations"
//The locations object is going to hold a list of locations. Each location will be an object that is indexed
//by a unique value, typically by the "search term" that found it, but it can be any unique string.  The object will
//also have a "preferred" property that can contain one of the specific locations "index values", thus creating a reference 
//to the one preferred location.
//###Model:
// {
//   "preferred": "825 41st Street",
//   "locations": {
//     "10004": {
//       "address": {
//         "postalCode": "10004",
//         "state": "NY",
//         "city": "New York"
//       },
//       "lat": "987.654",
//       "lng": "567.456"
//       "stores": []
//     },
//     "825 41st Street": {
//       "lat": 456.789,
//       "lng": 345.678,
//       "address": {
//         "address1": "825 41st Street",
//         "city": "Oakland",
//         "state": "CA",
//         "postalCode": "94608"
//       }
//     }
//   }
// }
define( [ 'jquery', 'cookie', 'commonUtil/ClientSideStorage' ], function ( $, Cookie, Store ) {
    'use strict';
    //These are constants for the module: cookie names, etc.
    var constants = {
        cookieSelectedStore: 'BOPSPICKUPSTORE',
        cookieSelectedDictionary: 'MISCGCs',
        zipPreferred: 'zipp',
        zipDefault: 'USERPC',
        latlngDefault: 'USERLL',
        latlngPreferred: 'llp',
        dateAdd: 2592000000,
        KEY_LOCATION: 'locations'
    };

    //###Method - getPostalCode
    //This method will return the user's "default" postal code.  It is made public through the "geoCode" namespace, 
    //and also through the "user" namespace.  This will return a blank string if the value is not found.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ String.  Will be the value or blank if not found.
    var getPostalCode = function () {
        if ( Cookie.get( constants.zipDefault, constants.cookieSelectedDictionary ) ) {
            return Cookie.get( constants.zipDefault, constants.cookieSelectedDictionary );
        } else {
            return '';
        }
    };


    //###Method - setPostalCode
    //This method will set the user's "default" postal code.  It is made public through the "geoCode" namespace, 
    //and also through the "user" namespace.  
    //> parameters
    //>
    //+ val - The value of the postalCode to set.
    //
    //> returns
    //>
    //+ Nothing.
    var setPostalCode = function ( val ) {
        Cookie.setExpires( new Date( new Date().getTime() + constants.dateAdd ) );
        Cookie.set( constants.zipDefault, val, constants.cookieSelectedDictionary, {
            domain: location.host
        } );
    };


    //###Method - hasLocationObjectInStorage
    //This is a helper function, currently private, checks storage to see if locationObject is in there.
    //This expects the store method to return null or undefined if it is not stored in there by the expected name.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ Boolean.  True if found in localStorage, and false if not.
    function hasLocationObjectInStorage() {
        var a = Store.getSession( constants.KEY_LOCATION );
        return a !== null && a !== undefined && a !== '' && !$.isEmptyObject( a );
    }

    //###Method - getLocationObject
    //This is a helper function, currently private, that gets the saved base "location" object,
    //or returns a new one, with basic and necessary structure.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ Object.  Will be the value or blank values if not found.
    function getLocationObject() {
        return hasLocationObjectInStorage() ? JSON.parse( Store.getSession( constants.KEY_LOCATION ) ) : {
            preferred: '',
            locations: {

            }
        };
    }

    //###Method - saveLocationObject
    //This is a helper function, currently private, that will save the location object back to local storage.
    //This is expects that the "loc" object passed in is the fully realized "loc" model and defined in this module.
    //> parameters
    //>
    //+ loc - Object.  The LocationObject to be saved into localStorage.
    //
    //> returns
    //>
    //+ Nothing
    function saveLocationObject( loc ) {
        Store.setSession( constants.KEY_LOCATION, JSON.stringify( loc ) );
    }

    //###Method - hasLocation
    //This is a helper function, checks storage to see if a specific location is in there.  
    //This is made public through the "user" namespace.
    //> parameters
    //>
    //+ search - String.  The location index of the location to search for.
    //
    //> returns
    //>
    //+ Boolean.  True if found in localStorage, and false if not.
    function hasLocation( search ) {
        var location = getLocationObject();
        return location && typeof location.locations[ search ] !== 'undefined';
    }

    //###Method - getLocation
    //This gets a specific location from the locationObject in storage given the input.
    //This is made public through the "user" namespace.
    //> parameters
    //>
    //+ search - String.  The location index of the location to search for.
    //
    //> returns
    //>
    //+ Object.  A location object, or a blank object {}.
    function getLocation( search ) {
        return hasLocation( search ) ? JSON.parse( Store.getSession( constants.KEY_LOCATION ) ).locations[ search ] : {};
    }

    //###Method - getPostalCodePreferred
    //DEPRECATED: This method will return the user's "preferred" postal code.  It is made public through the "user" namespace.  
    //This will return a blank string if the value is not found.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ String.  Will be the value the 'preferred' location, or the value of the default location, or blank if not found.
    var getPostalCodePreferred = function () {
        var loc = getLocationObject();
        var retval = '';
        if ( hasLocation( loc.preferred ) && loc.locations[ loc.preferred ].address ) {
            retval = loc.locations[ loc.preferred ].address.postalCode;
        } else {
            retval = this.getPostalCodeDefault();
        }

        return retval;

    };

    //###Method - setPostalCodePreferred
    //DEPRECATED: This method will set the user's "preferred" postal code.  It is made public through the "user" namespace.  
    //> parameters
    //>
    //+ val - The value of the postalCode to set.
    //
    //> returns
    //>
    //+ Nothing.
    var setPostalCodePreferred = function ( val ) {
        // Store.setSession( constants.zipPreferred, val );
        var loc = getLocationObject();
        loc.preferred = val;
        if ( typeof loc.locations[ loc.preferred ] === 'undefined' ) {
            loc.locations[ loc.preferred ] = {};
        }
        if ( typeof loc.locations[ loc.preferred ].address !== 'object' ) {
            loc.locations[ loc.preferred ].address = {};
        }
        loc.locations[ loc.preferred ].address.postalCode = val;
        saveLocationObject( loc );

    };


    //###Method - getCityPreferred
    //DEPRECATED: This method will return the user's "preferred" city.  It is made public through the "user" namespace.  
    //As there is no "default" value concept yet applied for city, this will return a blank string if the value is not found.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ String.  Will be the value the 'preferred' location, or blank if not found.
    function getCityPreferred() {
        var loc = getLocationObject(),
            retval = '';
        if ( hasLocation( loc.preferred ) && loc.locations[ loc.preferred ].address ) {
            var a = loc.locations[ loc.preferred ].address;
            if ( a.city && a.city.length > 0 ) {
                retval = loc.locations[ loc.preferred ].address.city;
            }
        }
        return retval;
    }

    //###Method - setCityPreferred
    //DEPRECATED: This method will set the user's "preferred" city.  It is made public through the "user" namespace.  
    //> parameters
    //>
    //+ val - The value of the city to set.
    //
    //> returns
    //>
    //+ Nothing.
    function setCityPreferred( val ) {
        // Store.setSession( constants.city_preferred, val );
        var loc = getLocationObject();
        if ( typeof loc.locations[ loc.preferred ] === 'undefined' ) {
            loc.locations[ loc.preferred ] = {};
        }
        if ( typeof loc.locations[ loc.preferred ].address !== 'object' ) {
            loc.locations[ loc.preferred ].address = {};
        }
        loc.locations[ loc.preferred ].address.city = val;
        saveLocationObject( loc );
    }

    //###Method - getStatePreferred
    //DEPRECATED: This method will return the user's "preferred" state.  It is made public through the "user" namespace.  
    //As there is no "default" value concept yet applied for state, this will return a blank string if the value is not found.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ String.  Will be the value the 'preferred' location, or blank if not found.
    function getStatePreferred() {
        var loc = getLocationObject(),
            retval = '';
        if ( hasLocation( loc.preferred ) && loc.locations[ loc.preferred ].address ) {
            var a = loc.locations[ loc.preferred ].address;
            if ( a.state && a.state.length > 0 ) {
                retval = loc.locations[ loc.preferred ].address.state;
            }
        }

        return retval;
    }

    //###Method - setStatePreferred
    //DEPRECATED: This method will set the user's "preferred" state  It is made public through the "user" namespace.  
    //> parameters
    //>
    //+ val - The value of the state to set.
    //
    //> returns
    //>
    //+ Nothing.
    function setStatePreferred( val ) {
        var loc = getLocationObject();
        if ( typeof loc.locations[ loc.preferred ] === 'undefined' ) {
            loc.locations[ loc.preferred ] = {};
        }
        if ( typeof loc.locations[ loc.preferred ].address !== 'object' ) {
            loc.locations[ loc.preferred ].address = {};
        }
        loc.locations[ loc.preferred ].address.state = val;
        saveLocationObject( loc );
    }


    //###Method - getLatLng
    //This method will return the user's "default" lat/lng.  Lat/Lng is always expressed as {lat: val, lng: val}.
    //It is made public through the "geoCode" namespace, and also through the "user" namespace.  
    //This will return a blank string if the value is not found expressed as {lat:'',lng:''}
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ Object.  Will be the values or blank values if not found.
    function getLatLng() {
        var lat = '',
            lng = '';
        if ( Cookie.get( constants.latlngDefault, constants.cookieSelectedDictionary ) ) {
            var v = Cookie.get( constants.latlngDefault, constants.cookieSelectedDictionary ).split( ',' );
            if ( v.length >= 2 ) {
                lat = v[ 0 ];
                lng = v[ 1 ];
            }
        }
        return {
            lat: lat,
            lng: lng
        };
    }

    //###Method - setLatLng
    //This method will return the user's "default" lat/lng.  Lat/Lng is always expressed as {lat: val, lng: val}.
    //It is made public through the "geoCode" namespace, and also through the "user" namespace.  
    //> parameters
    //>
    //+ val - Object.  This must be in the form of {lat:val,lng:val}
    //
    //> returns
    //>
    //+ Nothing.
    function setLatLng( val ) {
        Cookie.setExpires( new Date( new Date().getTime() + constants.dateAdd ) );
        var v = String( val.lat + ',' + val.lng );
        Cookie.set( constants.latlngDefault, v, constants.cookieSelectedDictionary, {
            domain: location.host
        } );
    }

    //###Method - getLatLngPreferred
    //This method will return the user's "preferred" lat/lng.  Lat/Lng is always expressed as {lat: val, lng: val}.
    //It is made public through the "geoCode" namespace, and also through the "user" namespace.  
    //This will return the value, or the default value, or a blank string values if the value is not found expressed as {lat:'',lng:''}
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ Object.  Will be the values or the default values or blank values if not found.
    function getLatLngPreferred() {
        var lat = '',
            lng = '';
        var loc = getLocationObject(),
            retval = '';
        if ( hasLocation( loc.preferred ) && loc.locations[ loc.preferred ].lat ) {
            lat = loc.locations[ loc.preferred ].lat;
            lng = loc.locations[ loc.preferred ].lng;
        }

        if ( lat !== '' && lng !== '' ) {
            return {
                lat: lat,
                lng: lng
            };
        } else {
            return getLatLng();
        }
    }

    //###Method - setLatLngPreferred
    //This method will return the user's "preferred" lat/lng.  Lat/Lng is always expressed as {lat: val, lng: val}.
    //It is made public through the "geoCode" namespace, and also through the "user" namespace.  
    //> parameters
    //>
    //+ val - Object.  This must be in the form of {lat:val,lng:val}
    //
    //> returns
    //>
    //+ Nothing.
    function setLatLngPreferred( val ) {
        var loc = getLocationObject();
        if ( !loc.preferred ) {
            loc.preferred = val.lat + ',' + val.lng;
        }
        if ( typeof loc.locations[ loc.preferred ] === 'undefined' ) {
            loc.locations[ loc.preferred ] = {};
        }
        loc.locations[ loc.preferred ].lat = val.lat;
        loc.locations[ loc.preferred ].lng = val.lng;
        saveLocationObject( loc );
    }


    //###Method - getPreferred
    //This method will return the user's "preferred" value.  This is the "lookup" value that can be used to store and pick out a 
    //user's preferred location.  It is made public through the "geoCode" namespace, 
    //and also through the "user" namespace.  This will return a blank string if the value is not found.
    //> parameters
    //>
    //+ (none)
    //
    //> returns
    //>
    //+ String.  Will be the value or blank if not found.
    function getPreferred() {
        return getLocationObject().preferred;
    }

    //###Method - setPreferred
    //This method will set the user's "preferred" value.  This is the "lookup" value that can be used to store and pick out a 
    //user's preferred location.  It is made public through the "geoCode" namespace, 
    //and also through the "user" namespace.  This will return a blank string if the value is not found.
    //> parameters
    //>
    //+ val - String.  This is the value that is also going to be used by one of the locations in the list.
    //
    //> returns
    //>
    //+ Nothing.
    function setPreferred( val ) {
        // Store.setSession( constants.type_preferred, val );
        var loc = getLocationObject();
        loc.preferred = val;
        saveLocationObject( loc );

        /*
        NOTE: The below is from http://mingle/projects/discovery/cards/20712
        This changes how the architecture works.  The cookie values are supposed to retain the GeoIP Looked up locaton for the user
        However, because we are storing the searched locations in sessionStorage, we lose the locations that the user last searched for
        Therefore, we are going to, for now, update the cookie values whenever setPreferred is called.
        */
        loc = getLocation( val );
        require( [ 'components/validation/Validation' ], function ( Valid ) {
            if ( Valid.isValidZipCode( val ) && !$.isEmptyObject( loc ) ) {
                setLatLng( {
                    lat: loc.lat,
                    lng: loc.lng
                } );
                setPostalCode( val );
            }
        } );
    }

    //###Method - setLocation
    //This sets a specific location from the locationObject in storage given the input.
    //This is made public through the "user" namespace.
    //> parameters
    //>
    //+ location - Object.  The location object to be saved.
    //+ search - String.  The location index under which this location will be saved.
    //
    //> returns
    //>
    //+ Nothing.
    function setLocation( location, search ) {
        var locationObj = getLocationObject();
        locationObj.locations[ search ] = location;
        saveLocationObject( locationObj );
    }


    //###Method - setStores
    //This sets stores array in storage given the input.
    //This is made public through the "user" namespace.
    //> parameters
    //>
    //+ stores - stores.  The stores array to be saved.
    //+ search - String.  The location index under which this location will be saved.
    //
    //> returns
    //>
    //+ Nothing.
    function setStores( stores, search ) {
        var locationObj = getLocationObject();
        if ( !locationObj.locations[ search ] ) {
            locationObj.locations[ search ] = {};
        }
        locationObj.locations[ search ].stores = stores;
        saveLocationObject( locationObj );
    }

    function getStores( search ) {
        var locationObj = getLocationObject();
        return locationObj.locations[ search ] ? ( locationObj.locations[ search ].stores || [] ) : [];
    }



    function hasLocationWithLatLng( search ) {
        var retval = false,
            loc = getLocation( search );
        if ( loc.lat && loc.lng ) {
            retval = true;
        }
        return retval;
    }

    //###Method - getDevice
    //This retrieves device from MISCGCs cookie
    //
    //> returns
    //>
    //+ device
    function getDevice() {
        var device = Cookie.get( "DT", "MISCGCs" );
        return device;
    }

    //###Method - getLocale
    //This retrieves shippingCountry from shippingCountry cookie
    //
    //> returns
    //>
    //+ locale
    function getLocale() {
        var locale = Cookie.get( "shippingCountry" );
        return locale;
    }

    //###Returns
    //These are the public methods available.  This will be created as a three level object in order to match the conceptual design
    return {
        device: {
            getDevice: getDevice
        },
        experiment: {},
        geoIpLocation: {
            getPostalCode: getPostalCode,
            setPostalCode: setPostalCode,
            getLatLng: getLatLng,
            setLatLng: setLatLng
        },
        user: {
            getPostalCodePreferred: getPostalCodePreferred,
            setPostalCodePreferred: setPostalCodePreferred,
            getPostalCodeDefault: getPostalCode,
            getCityPreferred: getCityPreferred,
            setCityPreferred: setCityPreferred,
            getStatePreferred: getStatePreferred,
            setStatePreferred: setStatePreferred,
            getLatLngDefault: getLatLng,
            getLatLngPreferred: getLatLngPreferred,
            setLatLngPreferred: setLatLngPreferred,
            getPreferred: getPreferred,
            setPreferred: setPreferred,
            hasLocation: hasLocation,
            getLocation: getLocation,
            setLocation: setLocation,
            setStores: setStores,
            getStores: getStores,
            hasLocationWithLatLng: hasLocationWithLatLng,
            getLocale: getLocale
        }
    };
} );