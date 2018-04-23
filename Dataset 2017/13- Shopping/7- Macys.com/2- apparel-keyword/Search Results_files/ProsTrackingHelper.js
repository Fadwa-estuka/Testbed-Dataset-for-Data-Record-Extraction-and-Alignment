define( [ 'handlebars', 'analyticsQueryString', 'segmentation' ], function ( Handlebars, analyticsQueryString, Segmentation ) {
    var cmCategoryId,
        PROS_ONOFF_CONTROL = 371,
        PROS_ONOFF_NORECS = 372,
        experiments = [ PROS_ONOFF_CONTROL, PROS_ONOFF_NORECS ],
        experiment, finalExperimentDate = new Date( 2015, 3, 15 );

    var ProsTrackingHelper = {
        getCMParamter: function ( paramName, queryString ) {
            var paramValue = analyticsQueryString.getTrackingValue( 'cm_' + paramName, queryString );
            paramValue = paramValue ? paramValue : analyticsQueryString.getTrackingValue( paramName, queryString );
            return paramValue;
        },
        getTDPParameter: function ( queryString ) {
            return analyticsQueryString.getTrackingValue( "tdp", queryString );
        },
        getCGIDParamter: function ( queryString, choiceId ) {
            var cgId;
            if ( !choiceId ) {
                choiceId = this.getCMParamter( 'choiceId', queryString );
            }
            if ( choiceId && choiceId.split( '-' ) && choiceId.split( '-' ).length ) {
                cgId = choiceId.split( '-' )[ 0 ];
                cgId = cgId.substring( 3, 9 );
            }

            return ( cgId ) ? cgId : "";
        },
        getBatchId: function ( queryString, choiceId ) {
            var dId;
            if ( !choiceId ) {
                choiceId = this.getCMParamter( 'choiceId', queryString );
            }
            if ( choiceId ) {
                dId = choiceId.match( ( /\-([\w\d\-]+)/ ) );
            }

            return ( dId && dId[ 1 ] ) ? dId[ 1 ] : "";
        },
        getHeaderId: function ( queryString, choiceId ) {
            var hId;
            if ( !choiceId ) {
                choiceId = this.getCMParamter( 'choiceId', queryString );
            }
            if ( choiceId ) {
                hId = choiceId.match( /@(H.+?)@/ );
            }

            return ( hId && hId.length ) ? hId[ 1 ] : "";
        },
        getCurrentDate: function () {
            return new Date();
        },
        getProsOnOffExperiment: function () {
            var onOffExperiment = '';
            if ( PROS_ONOFF_CONTROL === this.experiment ) {
                onOffExperiment = 'PROS OnOff:Control';
            } else if ( PROS_ONOFF_NORECS === this.experiment ) {
                onOffExperiment = 'PROS OnOff:NoRecs';
            } else if ( finalExperimentDate > this.getCurrentDate() ) {
                onOffExperiment = 'PROS OnOff:TestOff';
            }

            return onOffExperiment;
        },
        getCMQuery: function ( tracking, index, queryString ) {
            if ( !tracking ) {
                return '';
            }
            if ( queryString === undefined ) {
                queryString = '';
            }
            if ( index !== undefined && index !== null ) {
                index++;
            }

            for ( var attName in tracking ) {
                if ( attName !== 'append' ) {
                    queryString = analyticsQueryString.setTrackingValue( 'cm_' + attName, tracking[ attName ], queryString );
                }
            }

            if ( cmCategoryId ) {
                queryString = analyticsQueryString.setTrackingValue( 'cm_srcCatID', cmCategoryId, queryString );
            }

            if ( index ) {
                queryString = analyticsQueryString.setTrackingValue( 'cm_pos', "Pos" + index, queryString );
            }

            if ( tracking.append ) {
                var position = "";
                tracking.append.forEach( function ( appendConfig ) {
                    if ( appendConfig.withPosition ) {
                        position = "_Pos" + index;
                    }
                    if ( appendConfig.separator ) {
                        queryString = queryString + "&" + appendConfig.key + appendConfig.separator + appendConfig.value + position;
                    } else {
                        queryString = analyticsQueryString.setTrackingValue( appendConfig.key, appendConfig.value + position, queryString );
                    }
                } );
            }

            return queryString;
        },
        initSrcCatId: function ( srcCatId ) {
            if ( !cmCategoryId ) {
                cmCategoryId = srcCatId;
            }
        },
        initExperiments: function () {
            var self = this;
            Segmentation.detect( experiments, function ( exp ) {
                self.experiment = exp;
            } );
        },
        getAttr1Info: function () {
            if ( this.getCMParamter( 'pos' ) && this.getCGIDParamter() ) {
                var prosAttr1 = this.getCMParamter( 'pos' ) + ' | ' + this.getCGIDParamter();
                prosAttr1 += this.getBatchId() ? ' | ' + this.getBatchId() : '';
                prosAttr1 += this.getHeaderId() ? ' | ' + this.getHeaderId() : '';
                prosAttr1 += this.getCMParamter( 'srcCatID' ) ? ' | ' + this.getCMParamter( 'srcCatID' ) : '';
                return prosAttr1;
            } else {
                return '';
            }
        }
    };

    ProsTrackingHelper.initExperiments();
    Handlebars.registerHelper( 'getCMQuery', ProsTrackingHelper.getCMQuery );

    return ProsTrackingHelper;
} );
