//#MODULE - ProductsPerPageDropdown View
//> Author: Alysson Ferreira
//>
//> Create Date: 2015-04-29 (yyyy-mm-dd)
//
//##DESCRIPTION: This is the Backbone view for dealing with PPP DropDown components

define( [ 'jquery', 'backbone', 'stringUtil' ], function ( $, Backbone, StringUtil ) {

    "use strict";

    var pppDropDownView = Backbone.View.extend( {

        events: {
            //###Method - this handler function aims to keep the user selected option on dropdown components
            //>parameters
            //>
            //+ *this* - the object clicked
            //>returns
            //>
            //+ (none)
            'change .ppp': function ( event ) {
                var $el = $( event.currentTarget ),
                    id = $el.attr( 'id' ),
                    selectedIndex = $el.prop( 'selectedIndex' );

                $( '#itemsPP' ).val( $el.val() );
                window.sessionStorage.setItem( id, $el.val() );
                this.mapOptionToAnotherDropDown( id, selectedIndex );
            },

            //this handler function aims to keep the user click the items per page
            'click .pppOption': function ( event ) {

                var sessionId, $el = $( "div.ppp:visible" ),
                    id = $el.attr( 'id' ),
                    selectedPPP = $( event.currentTarget ).text(),
                    previousPPP = $( '#' + id ).find( '.selectedPPP' ).text(),
                    $containerFilterDiv = $( event.currentTarget ).closest( '.filterPPPIS' ),
                    paramObj = {};

                if ( previousPPP === selectedPPP && event.dataVal !== "BackToTopClickEvent" ) {
                    return;
                }

                $el.find( '.pppOption' ).removeClass( 'selectedPPP' );
                $el.find( '.ppp' + selectedPPP ).addClass( 'selectedPPP' );

                $( '#itemsPP' ).val( selectedPPP );

                if ( $el.hasClass( 'threeColumnGridClass' ) ) {
                    sessionId = "ppp3ColumnGrid";
                } else if ( $el.hasClass( 'fourColumnGridClass' ) ) {
                    sessionId = "ppp";
                }

                window.sessionStorage.setItem( sessionId, selectedPPP );

                if ( $( event.target ).parents( '#filterPPPBottom' ).length > 0 ) {
                    $( window ).scrollTop( $( '#filterPPP' ).offset().top );
                }
                // remove show previous items other than "All" item count
                $( ".showPrevItems" ).remove();
                // set all page index default to 1
                this.PaginationController.pageIndex = 1;
                this.PaginationController.setAllExpStartPageIndex( 1 );
                // remove all page index other than product selection
                this.PaginationController.setAllPageIndexInSession( '' );
                this.PaginationController.updatePPPColumnGrid();
                this.mapOptionToAnotherGrid( $( "div.ppp" ), $el.find( '.ppp' + selectedPPP ).index() );
            }
        },

        //###Method - initialize() will initialize dropdown components with previously selected user option
        //>parameters
        //>
        //+ (none)
        //>returns
        //>
        //+ (none)
        initialize: function ( options ) {

            var persisted4ColumnGridOption = window.sessionStorage.getItem( 'ppp' ),
                persisted3ColumnGridOption = window.sessionStorage.getItem( 'ppp3ColumnGrid' );

            if ( this.$el.find( '.pppOption' ).length > 0 ) {

                if ( !$( '#ppp4GridDiv' ).hasClass( 'hidden' ) && persisted4ColumnGridOption ) {
                    this.$el.find( "#itemsPP" ).val( persisted4ColumnGridOption );
                }
                if ( !$( '#ppp3GridDiv' ).hasClass( 'hidden' ) && persisted3ColumnGridOption ) {
                    this.$el.find( "#itemsPP" ).val( persisted3ColumnGridOption );
                }

                this.$el.find( '.pppOption' ).removeClass( 'selectedPPP' );
                var selectedDiv = this.$el.find( '#' + this.$el.find( "#itemsPP" ).val() + "_items" );
                selectedDiv.addClass( 'selectedPPP' );
                this.mapOptionToAnotherGrid( selectedDiv.parent(), selectedDiv.index(), ( !persisted4ColumnGridOption && !persisted3ColumnGridOption ) );
            } else {

                if ( !$( '.fourColumnGridClass' ).hasClass( 'hidden' ) && persisted4ColumnGridOption ) {
                    this.$el.find( '#ppp' ).val( persisted4ColumnGridOption );
                    this.$el.find( "#itemsPP" ).val( this.$el.find( '#ppp' ).val() );
                }
                if ( !$( '.threeColumnGridClass' ).hasClass( 'hidden' ) && persisted3ColumnGridOption ) {
                    this.$el.find( '#ppp3ColumnGrid' ).val( persisted3ColumnGridOption );
                    this.$el.find( "#itemsPP" ).val( this.$el.find( '#ppp3ColumnGrid' ).val() );
                }
                if ( !$( '.fourColumnGridClass' ).hasClass( 'hidden' ) ) {
                    this.mapOptionToAnotherDropDown(
                        $( '.fourColumnGridClass' ).attr( 'id' ), $( '.fourColumnGridClass' ).prop( 'selectedIndex' ), !persisted4ColumnGridOption );
                } else {
                    this.mapOptionToAnotherDropDown(
                        $( '.threeColumnGridClass' ).attr( 'id' ), $( '.threeColumnGridClass' ).prop( 'selectedIndex' ), !persisted3ColumnGridOption );
                }
            }

            // reset all exp start index to 1 for new category
            this.PaginationController = options.PaginationController;
            if ( this.PaginationController.currentCategoryId ) {
                this.PaginationController.setAllExpStartPageIndex( 1 );
            }
            this.PaginationController.currentCategoryId = StringUtil.getURLParameter( "id" );
        },

        //###Method - updatePPPDropDown( is4ColumnGrid ) will show/hide the productsPerPage dropdowns for the grid layout
        // Depending whether current layout is a 3 or 4 column browse grid, it will show the appropriate dropdown and hide the other.
        //>parameters
        //>
        //+ *is4ColumnGrid* - true if layout is a 4-column grid, and false otherwise.
        //>returns
        //>
        //+ Null. Will only change visibility of existent dropdowns on the grid.
        updatePPPDropDown: function ( is4ColumnGrid, isOnLoad ) {
            var itemsPPEnabled = this.$el.find( '.pppOption' ).length > 0,
                selectedPPP,
                previousPPP,
                paramObj = {};

            // update PPP values
            if ( itemsPPEnabled ) {
                var $itemsToBeHidden = $( is4ColumnGrid ? '#ppp3GridDiv, #ppp3GridDivBottom' : '#ppp4GridDiv, #ppp4GridDivBottom', this.$el ),
                    $itemsToBeShown = $( is4ColumnGrid ? '#ppp4GridDiv, #ppp4GridDivBottom' : '#ppp3GridDiv, #ppp3GridDivBottom', this.$el );

                $itemsToBeHidden.addClass( 'hidden' );
                $itemsToBeShown.removeClass( 'hidden' );
                if ( $itemsToBeShown.find( '.selectedPPP' ).length > 0 ) {
                    $( '#itemsPP' ).val( $itemsToBeShown.find( '.selectedPPP' ).html() );
                }
            } else {
                var $dropDownToBeHidden = $( is4ColumnGrid ? '#ppp3ColumnGrid' : '#ppp', this.$el ),
                    $dropDownToBeShown = $( is4ColumnGrid ? '#ppp' : '#ppp3ColumnGrid', this.$el );

                $dropDownToBeHidden.addClass( 'hidden' );
                $dropDownToBeShown.removeClass( 'hidden' );
                $( '#itemsPP' ).val( $dropDownToBeShown.val() );
            }

            //fire PaginationController update function if appropriate
            if ( !this.PaginationController ) {
                return;
            } else if ( this.PaginationController.isPageRefreshWithFacetValues ) {
                // TODO: code clean up after migrating faceController.
                // page reload with pagination & facet values scenario were loaded on facetController.onUrlChange()
                this.PaginationController.isPageRefreshWithFacetValues = false;
                return;
            }

            this.PaginationController.fromOnUrlChange = true;

            if ( itemsPPEnabled && ( !isOnLoad || ( isOnLoad && $( '#itemsPP' ).val() !== $( '#productsPP' ).val() ) ) ) {
                paramObj.selectedPPP = selectedPPP;
                paramObj.previousPPP = previousPPP;
                paramObj.isFromBottomPPPOptions = false;
                paramObj.isSwitchGridOnLoad = isOnLoad;

                this.PaginationController.updatePPPColumnGrid( paramObj );
            } else if ( !isOnLoad || ( isOnLoad && $( '#itemsPP' ).val() !== $( '#productsPP' ).val() ) ) {
                if ( is4ColumnGrid ) {
                    this.PaginationController.updatePPP4ColumnGrid();
                } else {
                    this.PaginationController.updatePPP3ColumnGrid();
                }
            }
            this.PaginationController.fromOnUrlChange = false;
        },

        //###Method - mapOptionToAnotherDropDown( changedPPPId, selectedIndex ) will update the option selected on the sibling dropdown.
        // If a customer moves from 4- to 3-column or vice versa, the following values should map for persistence
        //   20 to 30
        //   40 to 60
        //   100 to 120
        //>parameters
        //>
        //+ *changedPPPId* - id of ppp dropdown changed by user.
        //+ *selectedIndex* - index of selected value on ppp dropdown
        //>returns
        //>
        //+ (none)
        mapOptionToAnotherDropDown: function ( changedPPPId, selectedIndex, restrictToSetSession ) {
            var siblingDropDown;

            if ( changedPPPId === 'ppp3ColumnGrid' ) {
                siblingDropDown = "ppp";
            } else {
                siblingDropDown = "ppp3ColumnGrid";
            }

            //update option for the sibling drop down
            $( '#' + siblingDropDown ).prop( 'selectedIndex', selectedIndex );
            if ( !restrictToSetSession ) {
                window.sessionStorage.setItem( siblingDropDown, $( '#' + siblingDropDown ).val() );
            }
        },

        mapOptionToAnotherGrid: function ( $el, selectedIndex, restrictToSetSession ) {
            $el.siblings( '.ppp' ).each( function ( index, el ) {
                if ( $( el ).find( '.pppOption' ).length > 0 ) {
                    $( el ).find( '.pppOption' ).removeClass( 'selectedPPP' );
                    $( $( el ).find( '.pppOption' ).get( selectedIndex ) ).addClass( 'selectedPPP' );
                    var sessionId = ( $( el ).attr( 'id' ) === "ppp3GridDiv" || $( el ).attr( 'id' ) === "ppp3GridDivBottom" ) ? 'ppp3ColumnGrid' : 'ppp';
                    if ( !restrictToSetSession ) {
                        window.sessionStorage.setItem( sessionId, $( el ).find( '.selectedPPP' ).html() );
                    }
                }
            } );
        }

    } );

    return pppDropDownView;
} );
