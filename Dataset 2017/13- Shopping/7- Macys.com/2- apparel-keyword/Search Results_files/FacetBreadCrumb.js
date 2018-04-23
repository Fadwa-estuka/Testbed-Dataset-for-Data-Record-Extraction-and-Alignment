define( [ 'jquery', 'underscore', 'globals' ], function ( $, _, Globals ) {
    var clickIsBound = false,
        facetCloseImgSrc = Globals.getValue( 'props.assetsHost' ) + '/web20/assets/img/multifacet/cross_button.png';

    return {
        updateProductCount: function ( productCount ) {
            $( '#productCount' ).text( productCount );
            return this;
        },
        updatePartialMatch: function ( meta ) {
            var html = '';
            if ( meta.partialMatches && meta.partialMatches.length ) {
                if ( meta.partialMatches.length === 1 ) {
                    html = '<span id="SearchKeyword">' + meta.partialMatches[ 0 ] + '</span>';
                } else {
                    //NOTE: Logic ported from the JSP: <c:if test="${status.count <= 3}">
                    var counter = meta.partialMatches.length > 3 ? 3 : meta.partialMatches.length;
                    for ( var i = 0; i < counter; i++ ) {
                        html += '<a href="' + meta.baseUrl + '?keyword=' + meta.partialMatches[ i ] + '&cm_sp=onsite_search-_-partial_match-_-' + meta.partialMatches[ i ].replace( / /gi, '_' ) + '">' + meta.partialMatches[ i ] + '</a>';
                        html += i < counter - 1 ? ',&nbsp;' : '';


                        //${fn:replace(matchedKeyword,' ','_')}">${matchedKeyword}</a>${(!status.last and status.count < 3) ? "," : ""}'
                    }
                }
                $( '#partialMatch' ).html( html );
            }
        },
        // Updating the display message for facet selection.
        updateDisplayMessage: function ( meta ) {
            var displayMessage = $( '#displayMessage' );
            var weFoundMsg = $( '#weFoundMsg' );
            if ( displayMessage.length > 0 && meta.message ) {
                displayMessage.html( meta.message );
                if ( displayMessage.html() ) {
                    displayMessage.removeClass( 'hidden' );
                } else {
                    displayMessage.addClass( 'hidden' );
                }
                // Check 'displayMessage' is not by re-written search phrase otherwise hide 'weFoundMsg'.
                if ( displayMessage.hasClass( 'adjustDispMsg' ) && !weFoundMsg.hasClass( 'hidden' ) ) {
                    weFoundMsg.addClass( 'hidden' );
                }
            } else {
                // If no 'displayMessage' found, show the 'weFoundMsg'.
                weFoundMsg.removeClass( 'hidden' );
            }
        },
        getBopsStoreNameByStoreNumber: function ( storeNumber, facetItem ) {
            var _this = this;
            _.defer( function ( v, facetItem ) {
                var customLabel = 'Store Number: ' + v;
                $.ajax( {
                    url: '/api/store/v2/stores/' + v,
                    type: 'GET',
                    dataType: 'json',
                    success: function ( response ) {
                        if ( response.stores && response.stores.store.length && response.stores.store[ 0 ].name ) {
                            _this.getHtml( response.stores.store[ 0 ].name, facetItem );
                        } else {
                            _this.getHtml( customLabel, facetItem );
                        }
                    },
                    error: function ( error ) {
                        _this.getHtml( customLabel, facetItem );
                    },
                    beforeSend: function ( xhr ) {
                        xhr.setRequestHeader( 'X-Macys-ClientId', Globals.getValue( 'props.clientName' ) );
                    }
                } );

            }, storeNumber, facetItem );
        },
        getHtml: function ( label, facetItem ) {
            var facetCloseIcon = document.createElement( 'img' );
            facetItem.html( label ).append( $( '<img>' ).attr( {
                'class': 'removeFacet',
                'src': facetCloseImgSrc
            } ) );

            //Mounting to the bread crumb section in the DOM
            $( "#facetItems" ).append( facetItem );
            $( "#facetItems" ).append( "&nbsp;" );
        },
        updateBreadCrumbFacetItems: function ( selectedFacets, cb ) {
            if ( $( "#breadcrumbs" ).length > 0 ) {
                if ( $( '#facetItems' ).length > 0 ) {
                    $( '#facetItems' ).empty();
                } else {
                    $( "#breadcrumbs" ).append( '<div id="facetItems"></div>' );
                }

                for ( var index = 0; index < selectedFacets.length; index++ ) {
                    var facetName = decodeURIComponent( selectedFacets[ index ].facetName ),
                        facetValue = decodeURIComponent( selectedFacets[ index ].facetValue ),
                        facetType = selectedFacets[ index ].facetType,
                        facetItem = $( '<span>' ).attr( {
                            "class": "facetbreadcrumb"
                        } ).data( {
                            "name": facetName,
                            "value": facetValue,
                            "type": facetType
                        } );

                    //STEP: If this is a BOPS facet, it may be that only the store number was added. In this case,
                    //provide friendly label and call function to update the label
                    if ( facetType === 'UPC_BOPS_PURCHASABLE' && _.isFinite( facetName ) ) {
                        this.getBopsStoreNameByStoreNumber( facetValue, facetItem );
                    } else {
                        //Formatting the Price facet value before appending to the breadcrumb section.
                        if ( facetType === "PRICE" ) {
                            facetName = this.getFormattedPrice( facetValue );
                        }

                        this.getHtml( facetName, facetItem );
                    }

                }
                if ( !clickIsBound ) {
                    $( "#facetItems" ).on( "click", ".removeFacet", function ( e ) {
                        var facetName = $( this ).parent().data( "name" ),
                            facetValue = $( this ).parent().data( "value" ),
                            facetType = $( this ).parent().data( "type" );

                        //bubble event to Marionette PageApp
                        cb( {
                            facetName: facetName,
                            facetValue: facetValue,
                            facetType: facetType,
                            selected: false
                        } );

                    } );
                    clickIsBound = true;
                }
            }
            return this;
        },

        getFormattedPrice: function ( facetValue ) {

            var priceValues = facetValue.split( "|" ),
                underPriceFlag = true;

            if ( !isNaN( priceValues[ 0 ] ) && ( priceValues[ 0 ] % 1 ) <= 0 ) {
                priceValues[ 0 ] = Math.round( priceValues[ 0 ] );
            }

            if ( !isNaN( priceValues[ 1 ] ) && ( priceValues[ 1 ] % 1 ) <= 0 ) {
                priceValues[ 1 ] = Math.round( priceValues[ 1 ] );
                underPriceFlag = false;
            }

            if ( ( priceValues[ 0 ] === 0 || priceValues[ 0 ] === "0" ) && underPriceFlag ) {
                facetValue = "Under $" + Math.round( priceValues[ 1 ] );
            } else {
                facetValue = "$" + priceValues[ 0 ];
                if ( priceValues[ 1 ] === -1 || priceValues[ 1 ] === "-1" ) {
                    facetValue = facetValue + " & Above";
                } else {
                    facetValue = facetValue + "-$" + priceValues[ 1 ];
                }
            }

            return facetValue;
        }


        /* The below code will change behavior to retain order in which it is selected...this is not necessary for now.
        updateBreadCrumbFacetItems: function ( selectedFacets, cb ) {
            if ( $( "#breadcrumbs" ).length > 0 ) {
                if ( $( '#facetItems' ).length === 0 ) {
                    $( "#breadcrumbs" ).append( '<div id="facetItems"></div>' );
                }
                var facetCloseImgSrc = 'http://assets.macysassets.com/navapp/web20/assets/img/multifacet/cross_button.png';

                var facetItemsButtons = $( "#facetItems" ).children( 'span' ),
                    k, alreadyThere;

                for ( var index = 0; index < selectedFacets.length; index++ ) {
                    alreadyThere = false;

                    for ( k = 0; k < facetItemsButtons.length; k++ ) {
                        if ( index === 0 ) {
                            facetItemsButtons[ k ].foundMatch = false;
                        }
                        if ( $( facetItemsButtons[ k ] ).data( 'type' ) === selectedFacets[ index ].facetType && $( facetItemsButtons[ k ] ).data( 'value' ) === selectedFacets[ index ].facetValue ) {
                            facetItemsButtons[ k ].foundMatch = true;
                            alreadyThere = true;
                            break;
                        }
                    }

                    if ( !alreadyThere ) {
                        var facetName = selectedFacets[ index ].facetName,
                            facetValue = selectedFacets[ index ].facetValue,
                            facetType = selectedFacets[ index ].facetType,
                            facetItem = document.createElement( "span" );
                        //facetItem.id = 'facetValue_' + index;
                        facetItem.className = "facetbreadcrumb";
                        facetItem.innerHTML = facetName;
                        var facetCloseIcon = document.createElement( 'img' );
                        //facetCloseIcon.id = facetName;
                        facetCloseIcon.className = "removeFacet";
                        facetCloseIcon.src = facetCloseImgSrc;
                        facetItem.appendChild( facetCloseIcon );
                        $( facetItem ).data( "name", facetName );
                        $( facetItem ).data( "value", facetValue );
                        $( facetItem ).data( "type", facetType );
                        $( "#facetItems" ).append( facetItem );
                        $( "#facetItems" ).append( "&nbsp;" );

                        alreadyThere = false;
                    }
                }
                //STEP: Now delete all buttons that are there but not selected...
                for ( k = 0; k < facetItemsButtons.length; k++ ) {
                    if ( facetItemsButtons[ k ].foundMatch === false ) {
                        $( facetItemsButtons[ k ] ).remove();
                    }
                }

                if ( !clickIsBound ) {
                    $( "#facetItems" ).on( "click", ".facetbreadcrumb", function ( e ) {
                        var facetName = $( this ).data( "name" ),
                            facetValue = $( this ).data( "value" ),
                            facetType = $( this ).data( "type" );

                        $( this ).remove();

                        //bubble event to Marionette PageApp
                        cb( {
                            facetName: facetName,
                            facetValue: facetValue,
                            facetType: facetType,
                            selected: false
                        } );

                    } );
                    clickIsBound = true;
                }
            }
            return this;
        }
        */
    };
} );
