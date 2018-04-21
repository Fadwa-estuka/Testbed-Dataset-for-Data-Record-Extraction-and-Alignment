//#MODULE - NLSEXPERIMENTATIONUTILITY
//> Author      : Subramanian Kalyanasundaram
//> URL         : 
//> Create Date : Mar 02, 2016
//> 
//>
//##DESCRIPTION : Contains Utility methods for NLS Experimentation since it is widely used.


define( [ 'jquery', 'globals', 'clientSideStorage', 'stringUtil' ], function ( $, Globals, ClientSideStorage, StringUtil ) {

    var VENDORS = {
        INBENTA: "1435"
    };

    var KEY_MAPPING = {
        "1435": {
            data: "inbentaFeedBack",
            url: "inbentafbac"
        }
    };

    //###Method - triggerNLSFeedbackAPI( model, feedbackAPIUrl )  
    //Public method which trigger a backbone model fetch with the given URL.
    //
    //
    //> parameters
    //>
    //+ *model* : *Object* - The actual model reference.        
    //+ *feedbackAPIUrl* : *Object* - The feedback API URL which needs to be submitted
    function triggerNLSFeedbackAPI( model, feedbackAPIUrl ) {
        model.fetch( {
            url: feedbackAPIUrl
        } );
    }

    //###Method - triggerNLSFeedbackAPIFromSession( )
    //Public method which call triggerNLSFeedbackAPI based on NLS session values.
    //
    //> parameters
    //>
    //+ *model* : *Object* - The actual model reference.
    //+ *productID* : *String* - The actual product ID
    function triggerNLSFeedbackAPIFromSession( model, product ) {
        var vendorKeys = KEY_MAPPING[ getVendor() ] || "";
        var productID = product.productID ? product.productID.toString() : product.ID.toString();
        var inbentaFeedbackEnabled = String( Globals.getValue( 'props.inbentaFeedbackEnabled' ) ) === "true";
        if ( getVendor() === VENDORS.INBENTA && inbentaFeedbackEnabled ) {
            if ( ClientSideStorage.getSession( vendorKeys.data ) && JSON.parse( ClientSideStorage.getSession( vendorKeys.data ) ).pid === productID ) {
                this.triggerNLSFeedbackAPI( model, ClientSideStorage.getSession( vendorKeys.url ) );
            }
        }

        this.clearNLSSessionValues( vendorKeys );
    }


    //###Method - clearNLSSessionValues( ) 
    //Public method which removes the NLS session values.
    //
    //
    //> parameters none
    function clearNLSSessionValues( keys ) {
        var vendorKey;
        if ( keys ) {
            for ( vendorKey in keys ) {
                ClientSideStorage.removeSession( keys[ vendorKey ] );
            }
        } else {
            for ( var vendor in KEY_MAPPING ) {
                for ( vendorKey in vendor ) {
                    ClientSideStorage.removeSession( vendor[ vendorKey ] );
                }
            }
        }
        if ( ClientSideStorage.getSession( 'nlsVendor' ) ) {
            ClientSideStorage.removeSession( 'nlsVendor' );
        }
    }

    //###Method - setNLSSessionAndTriggerFeedbackAPI( model, productID ) 
    //Public method which sets the session values based on the hidden elements and Trigger Feedback API.
    //
    //
    //> parameters
    //>
    //+ *model* : *Object* - The actual model reference.        
    //+ *productID* : *String* - The actual product ID
    function setNLSSessionAndTriggerFeedbackAPI( model, productID, productName, productUrl ) {
        // switch ( getVendor() ) {
        // case VENDORS.INBENTA:
        //     processInbenta.call( this, model, productID );
        //     break;
        // }

        var inbentaFeedbackEnabled = String( Globals.getValue( 'props.inbentaFeedbackEnabled' ) ) === "true";
        if ( getVendor() === VENDORS.INBENTA && inbentaFeedbackEnabled ) {
            processInbenta.call( this, model, productID );
        }
    }

    function getVendor() {
        var ceValue = StringUtil.getURLParameter( "ce" );
        if ( ceValue ) {
            if ( ClientSideStorage.getSession( 'nlsVendor' ) ) {
                ClientSideStorage.removeSession( 'nlsVendor' );
            }
            ClientSideStorage.setSession( 'nlsVendor', ceValue );
        }

        return ceValue || ClientSideStorage.getSession( 'nlsVendor' );
    }

    function getNlsProductId() {
        return $( "#nls_productid_docid" ).val() ? JSON.parse( $( "#nls_productid_docid" ).val().replace( /'/g, '"' ) ) : "";
    }

    function processInbenta( model, productID ) {
        if ( !$( "#nls_inbenta_feedback_api" ).val() ) {
            return;
        }
        var query = getKeyword(),
            nlsFeedBackClickUrl = $( "#nls_inbenta_feedback_api" ).val()
                .replace( '{nls_path}', 'click/' + productID )
                .replace( '{nls_query}', query ),
            nlsFeedBackCartAddUrl = nlsFeedBackClickUrl.replace( 'click/', 'cart/' ),
            inbentaFeedBack = {
                pid: productID,
                query: query
            };

        ClientSideStorage.setSession( KEY_MAPPING[ VENDORS.INBENTA ].data, JSON.stringify( inbentaFeedBack ) );
        ClientSideStorage.setSession( KEY_MAPPING[ VENDORS.INBENTA ].url, nlsFeedBackCartAddUrl );
        this.triggerNLSFeedbackAPI( model, nlsFeedBackClickUrl );
    }

    function getKeyword() {
        return ( window.MACYS.Faceted && window.MACYS.Faceted.facetCtrl && window.MACYS.Faceted.facetCtrl.keywordSearch ) ? window.MACYS.Faceted.facetCtrl.keywordSearch.value : $( "#globalSearchInputField" ).val();
    }

    function updateNLSFeedbackAPIParams( reportingRecordsInfo ) {
        if ( reportingRecordsInfo && reportingRecordsInfo.queryId && reportingRecordsInfo.productIdToDocumentMapJson ) {
            $( "#nls_qid" ).val( reportingRecordsInfo.queryId );
            $( "#nls_productid_docid" ).val( reportingRecordsInfo.productIdToDocumentMapJson.toString() );
        }
    }

    return {
        triggerNLSFeedbackAPI: triggerNLSFeedbackAPI,
        triggerNLSFeedbackAPIFromSession: triggerNLSFeedbackAPIFromSession,
        clearNLSSessionValues: clearNLSSessionValues,
        setNLSSessionAndTriggerFeedbackAPI: setNLSSessionAndTriggerFeedbackAPI,
        updateNLSFeedbackAPIParams: updateNLSFeedbackAPIParams
    };

} );
