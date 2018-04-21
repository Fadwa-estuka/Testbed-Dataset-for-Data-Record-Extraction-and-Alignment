//* ========================
//#FILE - BopsSelectedStore.js
//> Author: Raphael Oliveira
//>
//> Create Date: <August 25, 2016>
//>
//======================== */
define( [
    'jquery',
    'cookie',
    'clientSideStorage',
    'globals',
    'logger',
    'cacheManager'
], function ( $, Cookie, Storage, Globals, Logger, CacheManager ) {

    var API_PATH = '/shop/storeavailability/bopsselectedstore',
        BOPS_COOKIE_NAME = 'BOPSPICKUPSTORE',
        BOPS_SELECTED_STORE_EVENT_NAME = 'bops:selectedStore',
        GROUP_COOKIE_NAME = 'MISCGCs',
        HAS_API_BEEN_CALLED_SESSION_NAME = 'hasBopsApiBeenCalled',
        POSTAL_CODE_COOKIE_NAME = 'USERPC',
        SESSION_POSTAL_CODE_KEY = "bopsPostalCode",
        SIGNEDIN_COOKIE_NAME = 'SignedIn',
        TRUE = 'true',
        UNKNOWN_STORE_VALUE = -1,
        isSignedIn,
        currentSelectedStoreNumber,
        hasBopsApiBeenCalledValue,
        bopsCXImprovementsPreferredStoreEndpointEnabled = Globals.getValue( 'props.bopsCXImprovementsPreferredStoreEndpointEnabled' ),
        bopsCookieSearchComplete = 'bopsCookieSearchComplete';

    function invokeCallback( callback ) {
        if ( callback && typeof callback === 'function' ) {
            callback.call( null, currentSelectedStoreNumber );
        }
    }

    function getGroupCookieExpirationDate() {
        return new Date( new Date().getTime() + 2592000000 );
    }

    function getClosestStoreId( storeCollectionData ) {
        var stores,
            storeLocNo;

        //Make sure we get a valid response from the service
        if ( storeCollectionData && ( storeCollectionData.models || storeCollectionData.stores ) ) {
            //Set a localStorage flag to say we've already done the search
            CacheManager.setPersistent( bopsCookieSearchComplete, true, 7 * 24 * 60 ); // 7 days

            if ( storeCollectionData.useNewApproach ) {
                stores = storeCollectionData.stores;
            } else {
                stores = storeCollectionData.models;
            }
            if ( stores.length > 0 ) { //Make sure we have at least one model
                //We can take the first store knowing it's BOPS because we passed the bopsStore: true parameter
                return ( ( storeCollectionData.useNewApproach ) ? stores[ 0 ].locationNumber : stores[ 0 ].attributes.locationNumber ).toString();
            }
        }
    }

    function setNearestStoreAsPreferred( callback ) {
        var cookieLatLong = Cookie.get( 'USERLL', GROUP_COOKIE_NAME ),
            cookieZipCodeVal = Cookie.get( 'USERPC', GROUP_COOKIE_NAME ),
            options = {
                bopsStore: true,
                distance: 100
            },
            storeFactoryCallback = {
                success: function ( response ) {
                    currentSelectedStoreNumber = getClosestStoreId( response );

                    completeCall( currentSelectedStoreNumber, callback );
                },
                failure: function () {
                    Logger.warn( "Store lookup failed." );
                }
            },
            latLongArray;

        //If we haven't done this search on the last 7 days
        if ( cookieLatLong ) {
            latLongArray = cookieLatLong.split( ',' );
            options.lat = latLongArray[ 0 ];
            options.lng = latLongArray[ 1 ];
        } else if ( cookieZipCodeVal ) {
            options.address = cookieZipCodeVal;
        }
        require( [ 'storeFactory' ], function ( StoreFactory ) {
            StoreFactory.getStoreCollection( storeFactoryCallback, options );
        } );

    }

    function bopsSelectedStoreCall( callback ) {
        return $.ajax( {
            url: API_PATH,
            dataType: 'json',
            success: function ( response ) {
                currentSelectedStoreNumber = ( response && response.bopsSelectedStoreLoc ) ? response.bopsSelectedStoreLoc : undefined;
                hasBopsApiBeenCalledValue = TRUE;
                Storage.setSession( HAS_API_BEEN_CALLED_SESSION_NAME, TRUE );
            },
            error: function () {
                currentSelectedStoreNumber = undefined;
            },
            complete: function () {

                if ( !currentSelectedStoreNumber && !CacheManager.getPersistent( bopsCookieSearchComplete ) ) {
                    setNearestStoreAsPreferred( callback );
                } else {
                    completeCall( currentSelectedStoreNumber, callback );
                }
            }
        } );
    }

    function completeCall( currentSelectedStoreNumber, callback ) {
        setSelectedStore( currentSelectedStoreNumber );
        $( document ).trigger( BOPS_SELECTED_STORE_EVENT_NAME, [ currentSelectedStoreNumber ] );
        invokeCallback( callback );
    }

    //Just need to be updated once per session as there can only happen one api call
    function hasBopsApiBeenCalled() {
        if ( hasBopsApiBeenCalledValue !== TRUE ) {
            hasBopsApiBeenCalledValue = Storage.getSession( HAS_API_BEEN_CALLED_SESSION_NAME );
        }
        return hasBopsApiBeenCalledValue;
    }

    //Just need to be updated once as the action of signing in is on /account/signin
    function isUserSignedIn() {
        //SignedIn values are "0" (Guest), "1" (Signed-in) or undefined (cookie not present)
        //isSignedIn will be undefined just until isUserSignedIn is called once
        if ( isSignedIn === undefined ) {
            isSignedIn = ( Cookie.get( SIGNEDIN_COOKIE_NAME ) === "1" );
        }
        return isSignedIn;
    }

    function getSelectedStore( callback ) {
        var cookieGetValue;

        // if currentSelectedStoreNumber is truthy, then it is valid store number
        // if value is UNKNOWN_STORE_VALUE, that means api call is still going on. No need to do any thing
        if ( !currentSelectedStoreNumber ) {
            cookieGetValue = Cookie.get( BOPS_COOKIE_NAME, GROUP_COOKIE_NAME );

            //BCOM boolean || MCOM string
            if ( bopsCXImprovementsPreferredStoreEndpointEnabled === true || bopsCXImprovementsPreferredStoreEndpointEnabled === TRUE ) {
                //Cookie exist and has valid store value assigned
                if ( cookieGetValue ) {
                    currentSelectedStoreNumber = cookieGetValue;
                }
                //No cookie, (if user is signed in and no api call flag in session, do api call!
                else if ( isUserSignedIn() && hasBopsApiBeenCalled() !== TRUE ) {
                    currentSelectedStoreNumber = UNKNOWN_STORE_VALUE;
                    bopsSelectedStoreCall( callback );
                } else if ( !isUserSignedIn() ) {
                    currentSelectedStoreNumber = UNKNOWN_STORE_VALUE;
                    setNearestStoreAsPreferred( callback );
                }
            } else {
                currentSelectedStoreNumber = cookieGetValue;
            }
        }

        if ( currentSelectedStoreNumber !== UNKNOWN_STORE_VALUE ) {
            invokeCallback( callback );
        }

        return currentSelectedStoreNumber;
    }

    function setSelectedStore( storeNumber ) {
        currentSelectedStoreNumber = storeNumber;

        Cookie.set( BOPS_COOKIE_NAME, currentSelectedStoreNumber, GROUP_COOKIE_NAME, getGroupCookieExpirationDate() );

        return currentSelectedStoreNumber;
    }

    function setPostalCode( postalCode ) {
        Storage.setSession( SESSION_POSTAL_CODE_KEY, postalCode );
        Cookie.set( POSTAL_CODE_COOKIE_NAME, postalCode, GROUP_COOKIE_NAME, getGroupCookieExpirationDate() );
    }

    function getPostalCode() {
        var storagePostalCode = Storage.getSession( SESSION_POSTAL_CODE_KEY );

        if ( storagePostalCode ) {
            return storagePostalCode;
        }

        return Cookie.get( POSTAL_CODE_COOKIE_NAME, GROUP_COOKIE_NAME );
    }

    return {
        getSelectedStore: getSelectedStore,
        setSelectedStore: setSelectedStore,
        setPostalCode: setPostalCode,
        getPostalCode: getPostalCode
    };
} );
