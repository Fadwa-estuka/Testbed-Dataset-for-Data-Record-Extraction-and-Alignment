define( [ 'jquery', 'clientSideStorage', 'security', 'mcomTemplates/features/search/LastSearches', 'segmentation', 'mcomjs/features/header/Search' ], function ( $, ClientSideStorage, Security, template, Segmentation, GlobalSearch ) {

    var LastSearches = {
        "key": "LastSearches",
        "maxItems": 5,
        "keypressTimeout": null
    };


    LastSearches.init = function ( GlobalSearch ) {
        GlobalSearch.box.on( 'focus', function ( e ) {
            LastSearches.display( GlobalSearch );
        } );
        GlobalSearch.box.on( 'keyup', function ( e ) {
            var value = GlobalSearch.box.val();

            clearTimeout( LastSearches.keypressTimeout );
            //GlobalSearch Container should only be displayed if the length of the text is <=1
            if ( value.length <= 1 ) {

                //Timeout to ensure another key isn't pressed before firing
                LastSearches.keypressTimeout = setTimeout( function () {

                    LastSearches.display( GlobalSearch );
                }, 300 );
            }
        } );

        var formObj = GlobalSearch.box.parents( 'form' );
        formObj.on( 'submit', function ( e ) {
            LastSearches.save( GlobalSearch.box.val() );
        } );
    };



    LastSearches.display = function ( GlobalSearch ) {

        var value = GlobalSearch.box.val();
        //Get existing stored data
        var savedData = ClientSideStorage.getPersistent( LastSearches.key );
        //Create array from saved string
        var savedJSON = [];
        if ( null !== savedData && savedData !== "" ) {
            savedJSON = JSON.parse( savedData );
        }
        var formatedData = template( {
            "lastSearches": savedJSON
        } );
        if ( formatedData !== "" ) {
            GlobalSearch.display( formatedData, function ( e ) {
                GlobalSearch.container.on( 'click', 'a.lastSearch', function () {
                    var selectedLink = $( this );
                    GlobalSearch.box.val( selectedLink.text() );
                    var form = GlobalSearch.box.parents( 'form' );
                    form.append( "<input type='hidden' id='lastSearchesText' name='cm_kws_ls' value='" + selectedLink.text() + "'/>" );
                    form.submit();
                } );
            } );
        }
    };

    LastSearches.save = function ( searchTerm ) {
        if ( null === searchTerm || searchTerm.trim() === "" ) {
            return;
        }
        //Prevent XSS from Search box
        var secureValue = Security.preventXss( searchTerm );
        //Get existing stored data
        var savedData = ClientSideStorage.getPersistent( LastSearches.key );

        //Create array from saved string
        var savedJSON = [],
            uppercaseJSON = [];

        if ( null !== savedData && savedData !== "" ) {
            savedJSON = JSON.parse( savedData );
            uppercaseJSON = JSON.parse( savedData.toUpperCase() );
        }
        //Remove any duplicates from the list
        var duplicateIndex = uppercaseJSON.indexOf( searchTerm.toUpperCase() );
        if ( duplicateIndex !== -1 ) {
            savedJSON.splice( duplicateIndex, 1 );
        }

        //Push new value to the top of the list
        savedJSON.unshift( secureValue );
        //Stringify array of up to first 5 terms
        var storageValue = JSON.stringify( savedJSON.slice( 0, LastSearches.maxItems ) );
        //Store new string
        ClientSideStorage.setPersistent( LastSearches.key, storageValue );
    };

    return LastSearches;
} );
