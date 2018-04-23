//#MODULE - Client-side Storage
//> Author: Michael Moir
//> Create Date: October 14, 2013
//
//##DESCRIPTION: AMD module to handle client side storage.  Instantiate the module through require
//and the object returned will have get and set methods for "persistent" (localStorage) and "session"
//(sessionStorage). If the native objects are not available in browser, the object is poly-filled by 
//using a cookie...thus size in that case becomes more of a concern.
define( [ 'commonUtil/MapCache' ], function ( MapCache ) {

    'use strict';

    // Method to get suggestions from sessionStore
    var testKey = 'testKey',
        testValue = 'testValue',
        sessionStore,
        localStore,
        storageAvailability;

    function getSession( key ) {

        if ( sessionStore && sessionStore.getItem( key ) !== null ) {
            return sessionStore.getItem( key );
        } else {
            // Handled when cache is cleared empty value is stored in session storage
            return null;
        }
    }

    // Method to sessionStore the result suggestions into the cache
    function setSession( key, value ) {
        sessionStore.setItem( key, value );
    }

    // Method to remove from sessionStore the item with the respective key
    function removeSession( key ) {
        sessionStore.removeItem( key );
    }


    // Method to sessionStorage to clear object
    function clearSession() {
        sessionStore.clear();
    }

    function getPersistent( key ) {

        if ( localStore && localStore.getItem( key ) !== null ) {
            return localStore.getItem( key );
        } else {
            return null; // Handled when cache is cleared empty value is stored in session storage
        }
    }

    // Method to localStore the result suggestions into the cache
    function setPersistent( key, value ) {
        localStore.setItem( key, value );
    }


    // Method to remove from localStore the item with the respective key
    function removePersistent( key ) {
        localStore.removeItem( key );
    }

    // Method to localStore to clear object
    function clearPersistent() {
        localStore.clear();
    }

    // if sessionStorage is enabled create a session cache for auto-complete
    // results
    function isSessionStorageEnabled() {
        var returnedValue, storeEnabled = false;
        if ( window.sessionStorage ) {
            try {
                window.sessionStorage.setItem( testKey, testValue );
                returnedValue = window.sessionStorage.getItem( testKey );
                window.sessionStorage.removeItem( testKey );
                storeEnabled = ( returnedValue === testValue );
            } catch ( e ) {}
        }
        return storeEnabled;
    }

    // if localStorage is enabled create a session cache for auto-complete
    // results
    function isLocalStorageEnabled() {
        var returnedValue, storeEnabled = false;
        if ( window.localStorage ) {
            try {
                window.localStorage.setItem( testKey, testValue );
                returnedValue = window.localStorage.getItem( testKey );
                window.localStorage.removeItem( testKey );
                storeEnabled = ( returnedValue === testValue );
            } catch ( e ) {}
        }
        return storeEnabled;
    }

    function isStorageAvailable() {
        if ( typeof storageAvailability !== 'boolean' ) {
            storageAvailability = ( isSessionStorageEnabled() && isLocalStorageEnabled() );
        }
        return storageAvailability;
    }

    // Method to enable the keyword cache. SessionStorage if available or local
    // object storage
    function enableKeywordCache( test ) {
        if ( test || !isStorageAvailable() ) {
            // create a polyfill
            sessionStore = new MapCache();
            localStore = new MapCache();
        } else {
            sessionStore = window.sessionStorage;
            localStore = window.localStorage;
        }
    }

    enableKeywordCache();

    return {
        getPersistent: getPersistent,
        setPersistent: setPersistent,
        removePersistent: removePersistent,
        getSession: getSession,
        setSession: setSession,
        removeSession: removeSession,
        clearSession: clearSession,
        clearPersistent: clearPersistent,
        isStorageAvailable: isStorageAvailable,
        //This is really only exposed for testing purposes as it is called by instantiation by default
        enableKeywordCache: enableKeywordCache
    };
} );