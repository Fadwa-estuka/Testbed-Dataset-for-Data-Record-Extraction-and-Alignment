PULSE.app.templates.loader="",PULSE.app.templates.pagination='<div class="paginationBtn paginationPreviousContainer"><div class="icn chevron-left"></div><div class="visuallyHidden">Previous</div></div><div class="paginationBtn paginationNextContainer inactive"><div class="icn chevron-right"></div><div class="visuallyHidden">Next</div></div>',PULSE.app.templates.cookienotice='<div class="wrapper col-12"><h3 class="subHeader">{{ headerText }}</h3><p>{{ description }}</p><a href="{{ policyLink }}" class="btn-primary cookiesInfo">{{ findOutMore }}<span class="icn arrow-right-w"></span></a><div class="btn-primary cookies-notice-accept" role="btn" tabindex="0">{{ acceptText }}<span class="icn tick-w"></span></div></div>',PULSE.app.templates.commonmatchbroadcaster='<span class="broadcaster">{{#multipleLabel}} {{ multipleLabel }} {{/multipleLabel}} {{^multipleLabel}}<div class="logo broadcaster-{{ abbreviation }}"><span class="broadcaster-text">{{ name }}</span></div>{{/multipleLabel}} </span>',PULSE.app.templates.matchnavscore='<div class="score">{{ scores.0 }}<span>-</span>{{ scores.1 }}</div>',PULSE.app.templates.search='<div class="searchInputContainer" role="search"><label><span class="visuallyHidden">{{ placeholder }}</span> <input id="{{ inputId }}" type="text" value="{{ term }}" placeholder="{{ placeholder }}" class="searchTextContainer searchInput"></label><div class="searchIconContainer searchCommit" role="button" tabindex="0"><span class="visuallyHidden">Submit Search</span><div alt="" class="icn search-sm"></div></div></div>',PULSE.app.templates.pagehover='<div class="socialShareHover"><div class="socialShareBtn" role="button" tabindex="0" aria-haspopup="true"><div class="icn share"></div>{{ share }}</div><ul class="socialOptions" role="listbox"><li><div class="option whatsapp" role="option" tabindex="0" data-social-service="whatsapp"><span alt="" class="icn whatsapp-w"></span><span class="visuallyHidden">{{ shareWhatsapp }}</span></div></li><li><div class="option twitter" role="option" tabindex="0" data-social-service="twitter"><span alt="" class="icn twitter-w"></span><span class="visuallyHidden">{{ shareTwitter }}</span></div></li><li><div class="option facebook" role="option" tabindex="0" data-social-service="facebook"><span alt="" class="icn facebook-w"></span><span class="visuallyHidden">{{ shareFacebook }}</span></div></li><li><div class="option google" role="option" tabindex="0" data-social-service="google"><span alt="" class="icn google-w"></span><span class="visuallyHidden">{{ shareGoogle }}</span></div></li></ul></div>',PULSE.app.templates.statsshare='<div class="socialShare widgetShare"><div class="socialShareBtn" tabindex="0"><div class="icn share"></div></div><ul class="socialOptions" role="listbox"><li><div role="menuitem" class="option" tabindex="0"><span class="icn twitter" data-social-service="twitter"></span></div></li><li><div role="menuitem" class="option" tabindex="0"><span class="icn facebook" data-social-service="facebook"></span></div></li><li><div role="menuitem" class="option" tabindex="0"><span class="icn google" data-social-service="google"></span></div></li><li><div role="menuitem" class="option" tabindex="0"><span class="icn whatsapp" data-social-service="whatsapp"></span></div></li></ul></div>',PULSE.app.templates.mobilefooter='<div class="btn-more" role="button">Filter<span class="icn add-w"></span></div><div class="btn-highlight apply" role="button"><div class="icn tick-w"></div>Apply Filters</div>',PULSE.app.templates.mobileheader='<header class="mobileHeader"><h4>{{title}}</h4><div class="close" role="button">Cancel<span class="icn close-w"></span></div></header>',PULSE.app.templates.resetbutton='<div class="btn reset" role="button" tabindex="0">{{#translator}}action.resetfilters{{/translator}}<div class="icn reset"></div></div>',PULSE.app.templates.scrollloader='{{ load }}<div class="loader-small"><div class="line"></div></div>',PULSE.app.templates.listfilter='<div class="dropDown inactive {{#visibleOnMobile}}mobile{{/visibleOnMobile}}" data-dropdown-block="{{dropdown.name}}" data-dropdown-default="{{dropdown.defaultOption}}"><div class="label">{{dropdown.label}}</div>{{#defaultItem}}<div class="current" data-dropdown-current="{{dropdown.name}}" role="button" tabindex="0">{{defaultItem.optionName}}</div>{{/defaultItem}} {{^defaultItem}}<div class="current" data-dropdown-current="{{dropdown.name}}" role="button" tabindex="0">{{dropdown.defaultOption}}</div>{{/defaultItem}}<ul class="dropdownList" data-dropdown-list="{{dropdown.name}}" role="listbox">{{#dropdown.data}}<li role="option" tabindex="0" data-option-name="{{optionName}}" data-option-id="{{optionId}}" data-option-index="{{#getIndex}}{{/getIndex}}">{{optionName}}</li>{{/dropdown.data}}</ul></div>',PULSE.app.templates.listfilteroption='{{#config.defaultOption}}<li role="option" tabindex="0" data-option-name="{{config.defaultOption}}" data-option-id="-1" data-option-index="-1">{{config.defaultOption}}</li>{{/config.defaultOption}} {{#optionData}}<li role="option" tabindex="0" data-option-name="{{optionName}}" data-option-id="{{optionId}}" data-option-index="{{#getIndex}}{{/getIndex}}">{{optionName}}</li>{{/optionData}}',PULSE.app.templates.loader='<div class="loader-small" data-dropdown-loader="active"><div class="line"></div></div>';

/*globals PULSE.app.common, PULSE.core */
( function( common, core ) {

	/**
	 * Check current gameweek is the gameweek passed in
	 *
	 * @param {config} config Configuration for checking gameweek
	 */
	common.checkGameweek = function( config ) {
		var _self = this;

		_self.config = config || {};
		_self.compSeason = _self.config.compSeason;
		_self.gameWeek = _self.config.gameWeek;
		_self.callback = _self.config.callback;
		_self.target = _self.config.target;

		_self.getCurrentWeek();
	};

	/**
	 * Get feed to find current week
	 */
	common.checkGameweek.prototype.getCurrentWeek = function()
	{
		var _self = this;

		var requestConfig = {
			id : _self.compSeason
		};

		var subscriberObject = {
			url: common.createApiPath( 'competition-season.gameweeks.current', requestConfig ),
			method: "GET",
			callback: _self.checkGameweek,
			forceCallback : true,
			target: this
		};

		core.data.manager.add( subscriberObject );
	};

	/**
	 * Check gameweek is the same as the current gameweek
	 */
	common.checkGameweek.prototype.checkGameweek = function( data )
	{
		var _self = this;
		if ( data && data.gameweeks && data.gameweeks.length > 0 )
		{
			var same = false;
			if ( data.gameweeks[ 0 ].gameweek == _self.gameWeek )
			{
				same = true;
			}
			_self.callback.call( _self.config.target, same );
		}
	};

} )( PULSE.app.common, PULSE.core );

/*globals PULSE, PULSE.app, PULSE.app.common */

( function( common, moment ) {

	/**
	 * @namespace common.getContentModel.private
	 */

	var cleanString = function( string )
	{
		if ( string )
		{
			return string.replace( /'/g, "&#39" ).replace( /[\[\]&]+/g, "" ).replace( /"/g, "&#39" );
		}
		return '';
	}

	var getDuration = function( duration )
	{
		var durationString = '';
		if ( duration )
		{
			var hours = Math.floor( duration / ( 60 * 60 ) );
			var mins = Math.floor( duration / 60 );
			var seconds = duration % 60;

			if ( mins < 10 )
			{
				durationString += "0";
			}

			durationString += mins + ":";

			if ( seconds < 10 )
			{
				durationString += "0";
			}
			durationString += seconds;
		}
		return durationString;
	}

	var checkTeamOptaId = function( data )
	{
		if ( data.tags && data.tags.length > 0 )
		{
			for ( var i = 0; i < data.tags.length; i++ )
			{
				if ( data.tags[ i ] && data.tags[ i ].label && data.tags[ i ].label.indexOf( 'OptaID' ) > -1 )
				{
					var optaSplit = data.tags[ i ].label.split( '_' );
					if ( optaSplit.length > 1 )
					{
						return optaSplit[ 1 ];
					}
				}
			}
		}
		return undefined;
	}

	/**
	 * create model for content
	 *
	 * @param {object} content
	 * @returns {object} model
	 */

	common.getContentModel = function( content )
	{
		var model = content || {};
		model.template = model.type;
		switch( model.type )
		{
			case 'text':
				model.articleUrl = model.hotlinkUrl ? model.hotlinkUrl : ( model.url ? model.url : common.generateContentUrl( model.type, model.id ) );
				if ( model.tags != null )
				{
					model.tags.map( function( tag )
					{
						if ( tag.label === "Featured" )
						{
							model.articleUrl += "/featured";
						}
					} );
				}
				var variants = [];
				model.optaId = checkTeamOptaId( model );
				if ( model.leadMedia && model.leadMedia.variants && model.leadMedia.type != 'video' )
				{
					model.variant = common.getVariantWithWidth( model.leadMedia.variants, 500 );
				}
				else if ( model.leadMedia && model.leadMedia.thumbnailUrl )
				{
					model.variant = { url : model.leadMedia.thumbnailUrl };
				}
				else
				{
					if ( model.optaId )
					{
						model.variant = { url : common.getDefaultTeamThumbnailUrl( model.optaId ) };
					}
				}

				if ( model.related )
				{
					var related = [];
					model.related.forEach( function( relate, index )
					{
						if ( index < 2 )
						{
							relate.url = common.generateContentUrl( relate.type.toLowerCase(), relate.id );
							related.push( relate );
						}
					} );
					model.related = related;
				}

				// Remove stylesheet link from HTML data
				var stylesRegex = new RegExp('<link rel="stylesheet"(.|\n)*?>');

				if( typeof model.body === "string" ){
					model.body = model.body.replace( stylesRegex, '' );
				}

				break;
			case 'photo':
				if ( model.variants )
				{
					model.variant = common.getVariantWithWidth( model.variants, 500 );
					var galleryVariant = common.getVariantWithWidth( model.variants, 1350 );
					model.galleryVariant = ( galleryVariant ) ? galleryVariant.url : '';
				}
				model.svgPath = 'M39.8,65.2H13.5c-1.2,0-2.2-1-2.2-2.2V36.7c0-0.9,0.5-1.7,1.4-2.1c0.8-0.4,1.8-0.2,2.4,0.4l8.4,8c0.9,0.9,0.9,2.3,0.1,3.2';
				model.svgPath += 'c-0.9,0.9-2.3,0.9-3.2,0.1l-4.6-4.4v18.9h18.9l-4.4-4.6c-0.8-0.9-0.8-2.2,0-3.1l12.5-12.9c0.9-0.9,2.3-0.9,3.2-0.1';
				model.svgPath += 'c0.9,0.9,0.9,2.3,0.1,3.2L35,54.6l6.5,6.8c0.6,0.7,0.8,1.6,0.4,2.4C41.6,64.7,40.7,65.2,39.8,65.2z M63,42.1c-0.6,0-1.1-0.2-1.5-0.6';
				model.svgPath += 'l-8.4-8c-0.9-0.9-0.9-2.3-0.1-3.2c0.9-0.9,2.3-0.9,3.2-0.1l4.6,4.4V15.8H41.9l4.4,4.6c0.8,0.9,0.8,2.2,0,3.1L33.7,36.4'
				model.svgPath += 'c-0.9,0.9-2.3,0.9-3.2,0.1c-0.9-0.9-0.9-2.3-0.1-3.2l11-11.4L35,15c-0.6-0.7-0.8-1.6-0.4-2.4c0.4-0.8,1.2-1.4,2.1-1.4H63';
				model.svgPath += 'c1.2,0,2.2,1,2.2,2.2v26.3c0,0.9-0.5,1.7-1.4,2.1C63.6,42,63.3,42.1,63,42.1z';
				break;
			case 'video':
				model.uiArgs = '{"contentId": ' + model.id + ', "mediaId":' + ( model.mediaId ? model.mediaId : 0 ) + ', "mediaTitle":"' + cleanString( model.title ) + '", "mediaDescription":"' + cleanString( model.description ) + '", "mediaDate":"' + moment( model.publishFrom ).format( "DD/M/YYYY" )   + '"}';
				model.durationString = getDuration( model.duration );
				break;
			case 'playlist':
				if ( model.typeRestriction === 'PHOTO' )
				{
					model.url = common.generateContentUrl( 'gallery', model.id );
				}
				else
				{
					model.url = common.generateContentUrl( type, model.id )
				}
				if ( model.coverItem && model.coverItem.variants )
				{
					model.variant = common.getVariantWithWidth( model.coverItem.variants, 500 );
				}
				model.itemsSize = ( model.items ) ? model.items.length : 0;
				break;
		}

		return model;
	}

} )( PULSE.app.common, moment );

/*globals PULSE, PULSE.app, PULSE.app.common */

( function( common, i18n ) {

	common.getPlayerModel = function( player )
	{
		var model = player;

		model.url = common.generateContentUrl( 'player', model.id, model.name.display.replace(new RegExp(' ', 'g'), '-') );
		model.imageSize = "110x140";
		model.playerImage = common.getDefaultPlayerImg( model.imageSize );
		model.optaId = ( model.altIds && model.altIds.opta ) ? model.altIds.opta : undefined;
		model.activeClass = ( model.active ) ? 'active' : 'inactive';
		if ( model.info && model.info.shirtNum )
		{
			model.shirtNum = model.info.shirtNum;
		}
		if ( model.latestPosition )
		{
			model.positionLabel = i18n.lookup( 'label.' + model.latestPosition.toLowerCase() );
		}

		if ( model.nationalTeam )
		{
			model.nationality = {
				country : model.nationalTeam.country,
				isoCode : model.nationalTeam.isoCode,
				label : i18n.lookup( 'label.player.nationality' )
			}
		}
		else if ( model.birth && model.birth.country && model.birth.country.country && model.birth.country.isoCode )
		{
			model.nationality = {
				country : model.birth.country.country,
				isoCode : model.birth.country.isoCode,
				label : i18n.lookup( 'label.player.nationality' )
			}
		}
		model.stats = [];

		model.stats.push( {
			label : i18n.lookup( 'label.stat.appearances' ),
			stat : model.appearances != undefined ? model.appearances : '0'
		} );

		if ( model.latestPosition && ( model.latestPosition === 'GOALKEEPER' || model.latestPosition === 'DEFENDER' ) )
		{
			model.stats.push( {
				label : i18n.lookup( 'label.stat.clean_sheet' ),
				stat : model.cleanSheets != undefined ? model.cleanSheets : '0'
			} );
		}
		if ( model.latestPosition && model.latestPosition != 'GOALKEEPER' )
		{
			model.stats.push( {
				label : i18n.lookup( 'label.stat.goals' ),
				stat : model.goals != undefined ? model.goals : '0'
			} );
		}
		if ( model.latestPosition && model.latestPosition != 'GOALKEEPER' && model.latestPosition != 'DEFENDER' )
		{

			model.stats.push( {
				label : i18n.lookup( 'label.stat.assists' ),
				stat : model.assists != undefined ? model.assists : '0'
			} );
		}
		if ( model.currentTeam )
		{
			model.team = {
				name : model.currentTeam.shortName,
				url : common.generateContentUrl( 'team', model.currentTeam.club.id, model.currentTeam.club.name.replace(new RegExp(' ', 'g'), '-') )
			}
			model.team.opta = ( model.currentTeam.altIds && model.currentTeam.altIds.opta ) ? model.currentTeam.altIds.opta : '';
		}
		model.profileLabel = i18n.lookup( 'label.playerprofile' );

		return model;
	}

	common.getManagerModel = function( manager )
	{
		var model = manager;

		model.url = common.generateContentUrl( 'manager', model.id, model.name.display.replace(new RegExp(' ', 'g'), '-') );
		model.imageSize = "110x140";
		model.playerImage = common.getDefaultPlayerImg( model.imageSize );
		model.optaId = ( model.altIds && model.altIds.opta ) ? model.altIds.opta : undefined;
		model.activeClass = ( model.active ) ? 'active' : 'inactive';
		
		if ( model.nationalTeam )
		{
			model.nationality = {
				country : model.nationalTeam.country,
				isoCode : model.nationalTeam.isoCode,
				label : i18n.lookup( 'label.player.nationality' )
			}
		}
		else if ( model.birth && model.birth.country && model.birth.country.country && model.birth.country.isoCode )
		{
			model.nationality = {
				country : model.birth.country.country,
				isoCode : model.birth.country.isoCode,
				label : i18n.lookup( 'label.player.nationality' )
			}
		}
		
		if ( model.currentTeam )
		{
			model.team = {
				name : model.currentTeam.shortName,
				url : common.generateContentUrl( 'team', model.currentTeam.club.id, model.currentTeam.club.name.replace(new RegExp(' ', 'g'), '-') )
			}
			model.team.opta = ( model.currentTeam.altIds && model.currentTeam.altIds.opta ) ? model.currentTeam.altIds.opta : '';
		}
		model.profileLabel = i18n.lookup( 'label.managerProfile' );

		return model;
	}

} )( PULSE.app.common, PULSE.I18N );

/**
 * Coupled set of date string and moment object
 * @typedef {object} momentCouple
 * @property {moment|Date} date the moment Object
 * @property {string} string the generated string
 * @property {string} std locale independent date string ( DD-MM-YYYY )
 */

( function( common, app, moment ) {

	var oneDay = ( ( 60 * 60 ) * 24 ) * 1000;

	/**
	 * Use momentJS to get a locale-observant string with a specified format
	 * will return moment object as well as string
	 *
	 * @param start
	 * @param end
	 * @param format
	 * @param {boolean} inclusive if true will include start  day in response
	 * @returns {momentCouple[]} array of days with moment day and string included in each index position
	 */
	common.momentGetDaysFromRange = function( start, end, format, inclusive ) {

		var startAsDate = start instanceof Date ? start : new Date( start );
		var endAsDate = end instanceof Date ? end : new Date( end );

		var startTime = startAsDate.getTime();
		var endTime = endAsDate.getTime();

		var days = [];

		var current = startTime;

		if( inclusive && ( startAsDate.toLocaleDateString() !== endAsDate.toLocaleDateString() ) ) {

			days.push( {
				date: startAsDate,
				string: moment && format ? moment( startAsDate ).locale( app.language ).format( format ) : startAsDate.toLocaleDateString(),
				std: moment ? moment( startAsDate ).format( "DD-MM-YYYY" ) : false
			} )
		}

		// add a day until the date reaches the end date
		do{

			current = current + oneDay;
			var asDate = new Date( current );

			days.push( {
				date: asDate,
				string: moment && format ? moment( asDate ).locale( app.language ).format( format ) : asDate.toLocaleDateString(),
				std: moment ? moment( asDate ).format( "DD-MM-YYYY" ) : false
			} )

		} while ( current < endAsDate.getTime() );

		return days;

	}

	/**
	 * Get the time since a specific date
	 *
	 * @param {Date} date Date to be calculated from now
	 * @param {Object} Optional format for output
	 * @returns {String} output Amount of time since date
	 */
	common.getSinceString = function( date, format )
	{
	    if( date )
	    {
	        var now = new Date();

	        var diff = Math.floor( ( now - date ) / 1000 );

	        if( diff <= 0 )
	        {
	            return format ? format.justNow : "just now";
	        }
	        else if( diff < 60 )
	        {
	            var output = Math.round( diff );
	            return output + ( format ? format.seconds : "s" );
	        }
	        else if( diff < 60 * 60 )
	        {
	            var output = Math.round( diff / 60 );
	            return output + ( format ? format.minutes : "m" );
	        }
	        else if( diff < 60 * 60 * 24 )
	        {
	            var output = Math.round( diff / ( 60 * 60 ) );
	            return output + ( format ? format.hours : "h" );
	        }
	        else
	        {
	            var output = Math.round( diff / ( 60 * 60 * 24 ) );
	            return output + ( format ? format.days : "d" );
	        }
	    }
	};

} )( PULSE.app.common, PULSE.app, moment );
/*globals PULSE, PULSE.app, PULSE.app.common*/

( function( app, common, core ) {
	"use strict";

	common.getDefaultPlayerImg = function( imgSize )
	{
		return common.getPlayerImg( 'Photo-Missing', imgSize );
	}

    common.setPlayerImageLoader = function( playerId, imgSize, imageWrapper, imgExtension )
    {
        var main = common.getPlayerImg( playerId, imgSize, imgExtension ),
            missing = common.getDefaultPlayerImg( imgSize );

        imageWrapper.onerror = function() {
            if ( ! imageWrapper.getAttribute( 'data-error' ) )
            {
                imageWrapper.setAttribute( 'data-error', true );
                imageWrapper.setAttribute( 'src', missing );
            }
        };
        imageWrapper.setAttribute( 'src', main );
    }

    common.getPlayerImg = function ( playerId, size, extension )
    {
        return app.environment.playerImagePath + size + "/" + playerId + ( "." + ( extension || "png" ) );
    };

    common.getDefaultTeamThumbnailUrl = function( opta )
    {
        if ( opta )
        {
//        return 'http://cdn.pulselive.com/test/client/pl/dev/i/default-thumbnails/' + opta + '.png';
          return '//resources-pl.pulselive.com/ver/i/default-thumbnails/' + opta + '.png';
        }
        return '';
    }

    common.getPhotosForContainer = function( element )
   	{
   		if ( element )
   		{
   			var playerPhotoContainers = element.getElementsByClassName( 'playerPhotoContainer' );
   			var containerIndex = playerPhotoContainers.length -1;
        while ( containerIndex > -1 )
        {
          var playerId = playerPhotoContainers[ containerIndex ].getAttribute( 'data-player' );
          var imageSize = playerPhotoContainers[ containerIndex ].getAttribute( 'data-size' ) || '140';
          var imgExtension = playerPhotoContainers[ containerIndex ].getAttribute( 'data-extension' );
          common.setPlayerImageLoader( playerId, imageSize, playerPhotoContainers[ containerIndex ], imgExtension );
          core.style.removeClass( playerPhotoContainers[ containerIndex ], 'playerPhotoContainer' );
          containerIndex--;
        }
   		}
   	};

} )( PULSE.app, PULSE.app.common, PULSE.core );



/*globals PULSE, PULSE.app, PULSE.app.common*/

( function( app, common, core ) {
	"use strict";

	common.renderKickOffData = function( container, config )
	{
		if ( container )
		{
			var thisConfig = ( config ) ? config : {};
			var className = ( thisConfig.className ) ? thisConfig.className : 'renderKOContainer';
			var format = ( thisConfig.format ) ? thisConfig.format : 'HH:mm';
			var koContainer = container.getElementsByClassName( className );
			if ( koContainer && koContainer.length > 0 )
			{
				for ( var i = 0; i < koContainer.length; i++ )
				{
					var kickoffMillis = koContainer[ i ].getAttribute( 'data-kickoff' );
					if ( kickoffMillis )
					{
						var kickoffTime = moment( parseInt( kickoffMillis ) ).locale( app.language ).format( format );
						koContainer[ i ].innerHTML = kickoffTime;
					}
				}
			}
		}
	}

	common.orderKickOffs = function( overallContainer, finalContainer, template, config )
	{
		var _self = this;

		if ( overallContainer && finalContainer && template )
		{
			var thisConfig = ( config ) ? config : {};
			var className = ( thisConfig.className ) ? thisConfig.className : 'matchWeekMatchContainer';
			var format = ( thisConfig.format ) ? thisConfig.format : 'dddd D MMMM';
			var matchesContainer = overallContainer.getElementsByClassName( className );
			var kickOffMap = {};
			var map = {};
			var dateOrder = [];
			for ( var i = 0; i < matchesContainer.length; i++ )
			{
				var kickoff = matchesContainer[ i ].getAttribute( 'data-kickoff' );
				if ( kickoff )
				{
					var date = moment( parseInt( kickoff ) ).locale( app.language ).format( format );
					if ( !map[ date ] )
					{
						dateOrder.push( date );
						map[ date ] = [ matchesContainer[ i ] ];
					}
					else
					{
						map[ date ].push( matchesContainer[ i ] );
					}
				}
			}
			var html = '';
			for ( var i = 0; i < dateOrder.length; i++ )
			{
				if ( map && map[ dateOrder[ i ] ] )
				{
					var model = {
						date : dateOrder[ i ]
					}
					finalContainer.innerHTML += Mustache.render( template, model );
					var thisDayContainer = finalContainer.getElementsByClassName( dateOrder[ i ] + 'MatchContainer' );
					if ( thisDayContainer && thisDayContainer.length > 0 )
					{
						for ( var j = 0; j < map[ dateOrder[ i ] ].length; j++ )
						{
							thisDayContainer[ 0 ].appendChild( map[ dateOrder[ i ] ][ j ] );
						}
					}
				}
			}
		}
	}

} )( PULSE.app, PULSE.app.common, PULSE.core );

/*globals PULSE, PULSE.app, PULSE.app.common */

( function( common, i18n ) {
	"use strict";

	/**
	 * Get type class from a match event description
	 *
	 * @param {string} matchEventDescription Describition of matchEvent
	 * @return {string} A class representing the description
	 */
	common.getEventTypeClass = function( matchEvent )
	{
		switch ( matchEvent.type )
		{
			case 'PS':
				return 'time-w' ;
			case 'PE':
				if ( matchEvent.phase === '1' )
				{
					return 'time-half-w';
				}
				else
				{
					return 'time-full-w';	
				}
		}

		switch ( matchEvent.description )
		{
			// Yellow Card
			case "Y":
				return "card-yellow";
			// Red Card
			case "R":
		      return "card-red";
		    // Second Yellow Card ( Red Card )
		    case "YR":
		      return "card-yellow-red";
		    // Own Goal
		    case "O":
		      return "og-w";
		    // Goal
		    // Penalty
		    case "G":
		    case "P":
		      return "ball-sm-w";
		    // Sub off
		    case "OFF":
		      return "sub-off";
		     // Sub on
		     case "ON":
		      return "sub-on";
		    case "sub":
		      return "sub-w";	
		    // Missed Penalty
		    case "S":
		    case "M":
		      return "miss-p-w";
		    default:
		     	return "";
		}
	}

	/**
	 * Get class for match event
	 * @param {Object} matchEvent Match event
	 * @return {String} cssClass Class for matchEvent
	 */
	common.getEventLabel = function( matchEvent )
	{
		switch ( matchEvent.type )
		{
			case 'PS':
				if ( matchEvent.phase === '1' )
				{
					return i18n.lookup( 'label.kickoff' );
				}
				else
				{
					return i18n.lookup( 'label.secondhalf' );	
				}
			case 'PE':
				if ( matchEvent.phase === '1' )
				{
					return i18n.lookup( 'label.halftime' );
				}
				else
				{
					return i18n.lookup( 'label.fulltime' );	
				}
		}
		switch( matchEvent.description )
		{
			case 'G':
			case 'P':
				return i18n.lookup( 'label.goal' );
			case 'O':
				return i18n.lookup( 'label.owngoal' );
			case 'Y':
				return i18n.lookup( 'label.yellowcard' );
			case 'R':
			case 'YR':
				return i18n.lookup( 'label.redcard' );
			case "S":
			case "M":
				return i18n.lookup( 'label.penaltymissed' );
			case "sub":
			case "OFF":
			case "ON":
				return i18n.lookup( 'label.substitution' );
			default:
				return '';
		}
	}

	common.getEventTime = function( matchEvent )
	{
		var time = Math.floor( matchEvent.clock.secs / 60 );
		if ( matchEvent.phase === '1' && time > 45 )
		{
			time = '45 +' + ( time - 45 );
		}
		else if ( matchEvent.phase === '2' && time > 90 )
		{
			time = "90 +" + ( time - 90 );
		}
		return time + "'";
	}

	/**
	 * Find player object for a match event
	 *
	 * @param {[object]} teams List of teams in match
	 * @param {int} playerId Id of player to find
	 * @return {object} Player object
	 */
	common.getPlayerForEvent = function( teams, playerId )
	{
		for ( var i = 0; i < teams.length; i++ )
		{
			var team = teams[ i ];
			if ( team.lineup )
			{
				for ( var j = 0; j < team.lineup.length; j++ )
				{
					if ( team.lineup[ j ].id == playerId )
					{
						return team.lineup[ j ];
					}
				};
			}
			if ( team.substitutes )
			{
				for ( var j = 0; j < team.substitutes.length; j++ )
				{
					if ( team.substitutes[ j ].id == playerId )
					{
						return team.substitutes[ j ];
					}
				};
			}
		};
	}

		/**
	 * Add matchEvent to playerMap
	 *
	 * @param {object} map Map of players with event types
	 * @param {object} matchEvent The match event to be added to the player map
	 * @param {int} id The id of the player
	 * @param {string} description Description of the event
	 * @return {object} map PlayerMap after event has been added
	 */
	common.getPlayerForType = function( map, matchEvent, id, description )
	{
		var val = matchEvent.clock.secs;
		var label = common.getEventTime(  matchEvent );
		if ( !map[ id ] )
		{
			map[ id ] = {};
		}
		
		if ( matchEvent.description != 'Y' )
		{
			if ( matchEvent.description === "P" )
			{
				label += " (" + i18n.lookup( 'label.penalty.short' ) + ")";
			}
			else if ( matchEvent.description === "O" )
			{
				label += " (" + i18n.lookup( 'label.owngoal.short' ) + ")";
			}
			if ( !map[ id ][ description ] )
			{
				map[ id ][ description ] = [];	
			}
			map[ id ][ description ].push( { "label" : label, "val" : val } );
		}
		return map;
	}

	/**
	 * Create a map relating match events to each player
	 *
	 * @param {[object]} events List of match events
	 * @return {object} map PlayerMap Relating each player to a set of events
	 */
	common.getPlayerEvents = function( events )
	{
		var map = {};
		if ( events && events.length > 0 )
		{
			events.forEach( function( matchEvent )
			{
				if ( matchEvent.personId != undefined )
				{
					var description = ( matchEvent.description == "P" ) ? "G" : matchEvent.description;
					common.getPlayerForType( map, matchEvent, matchEvent.personId, description );
				}
				if ( matchEvent.assistId )
				{
					common.getPlayerForType( map, matchEvent, matchEvent.assistId, "AS" );
				}
			} );
		}
		return map;
	}

	/**
	 * Generate eventsMap per team, showing events for each team in chronological order, grouped by person
	 *
	 * @param {[object]} events List of events in match
	 * @param {[object]} teams List of teams in match
	 * @param {Object} playerMap Map of players with their events
	 * @return {object} eventMap EventsMap for each team showing all the events
	 */
	common.getTeamEventsMap = function( events, teams, playerMap )
	{
		var map = { matchEvents : [ [], [] ],
					assists : [ [], [] ]
				};
		if ( events && events.length > 0 )
		{
			events.forEach( function( matchEvent )
			{
				if ( matchEvent.teamId != undefined  && matchEvent.type && 
						( matchEvent.description == "G" || matchEvent.description == "Y" || matchEvent.description == "YR" 
						|| matchEvent.description == "R" || matchEvent.description == "P" || matchEvent.description == "O" )
				)
				{
					var typeClass = common.getEventTypeClass( matchEvent );
					var description = matchEvent.description;
					if ( description === 'P' )
					{
						description = 'G';
					}
					if ( playerMap && playerMap[ matchEvent.personId ] && playerMap[ matchEvent.personId ][ description ] && 
						playerMap[ matchEvent.personId ][ description ].length > 0 && 
						playerMap[ matchEvent.personId ][ description ][ 0 ].val == matchEvent.clock.secs && 
						!( description === "Y" && playerMap[ matchEvent.personId ]["YR"] ) )
					{
						var index = 0;
						if ( teams[ 1 ].teamId === matchEvent.teamId )
						{
							index = 1;
						}

						var player = common.getPlayerForEvent( teams, matchEvent.personId );
						
						if ( player )
						{
							if ( description === "G" && playerMap[ matchEvent.personId ][ description ].length > 1 )
							{
								typeClass = "icn ball-2-sm-w";
							}

							var eventTimes = " " + playerMap[ matchEvent.personId ][ description ].map( function( elements ){
							    return elements.label;
							} ).join(",") + " ";
							map.matchEvents[ index ].push( {
								typeClass : typeClass,
								playerName : player.name.display,
								playerUrl : common.generateContentUrl( 'player', player.id, player.name.display.replace(new RegExp(' ', 'g'), '-') ),
								eventTimes : eventTimes
							} );
						}
					}
					
					if ( matchEvent.teamId && matchEvent.description == "G" && matchEvent.assistId && playerMap && playerMap[ matchEvent.assistId ] && 
					playerMap[ matchEvent.assistId ][ 'AS' ] && playerMap[ matchEvent.assistId ][ 'AS' ].length > 0 && 
					playerMap[ matchEvent.assistId ][ 'AS' ][ 0 ].val == matchEvent.clock.secs )
					{
						var index = 0;
						if ( teams[ 1 ].teamId === matchEvent.teamId )
						{
							index = 1;
						}

						var player = common.getPlayerForEvent( teams, matchEvent.assistId );
						
						if ( player )
						{
							var eventTimes = " " + playerMap[ matchEvent.assistId ][ "AS" ].map( function( elements ){
							    return elements.label;
							} ).join(",") + " ";
							map.assists[ index ].push( {
								playerName : player.name.display,
								playerUrl : common.generateContentUrl( 'player', player.id, player.name.display.replace(new RegExp(' ', 'g'), '-') ),
								eventTimes : eventTimes
							} );
						}
					}
				}
			} );
		}
		return map;
	};



} )( PULSE.app.common, PULSE.I18N );
/*globals PULSE, PULSE.app, PULSE.app.common */

( function( app, common ) {


	common.refreshScripts = function( container )
	{
		var scripts = container.getElementsByTagName("script");
		var unique = [];
		Array.prototype.map.call( scripts, function( thisScript )
		{
			if ( !thisScript.getAttribute( 'data-script-created' ) )
			{
				var add = true;
				if ( unique.length > 0 )
				{
					unique.forEach( function( uniqueScript )
					{
						if ( uniqueScript === thisScript.src )
						{
							add = false;
						}
					} );
				}
				thisScript.parentNode.removeChild( thisScript );

				if ( add )
				{
					var script = document.createElement( 'script' );
					script.setAttribute( 'data-script-created', true );
					script.type = 'text/javascript';
					script.src = thisScript.src;
					unique.push( thisScript.src )
					container.appendChild( script );
				}
			}
		} );

		app.widgetDeps( container );
	}

} )( PULSE.app, PULSE.app.common );

/*globals PULSE.app.common*/

( function( common ) {
	"use strict";

	common.getTableRowClass = function( entry ){
		if ( entry.position === 1) {
			return "tableDark";
		} 
		else if ( entry.annotations && entry.annotations.length > 0 ) 
		{
			for( var i=0; i < entry.annotations.length; i++ ){
				var annotation = entry.annotations[ i ];
				if ( annotation.type && annotation.type === "Q" ) 
				{
					if ( annotation.destination && annotation.destination === "EU_EL" )
					{
						return "tableLight";
					}
					else
					{
				        return "tableMid";
				    }
				}
				else if ( annotation.type && annotation.type === "R" )
				{
				    return  "tableMid";
				}
			}
			
		}
		return "";
	};

} )( PULSE.app.common );
/*globals PULSE, PULSE.app, PULSE.app.common, PULSE.I18N */

( function( common, i18n ) {

	/**
	 * use by passing in as object property ( e.g. as translate )
	 * then call in template with {{#translate}}label.something{{/translate}}
	 * will render text so input can be dynamic
	 *
	 * @returns {Function} mustache render function
	 */
	common.templateTranslator = function() {

		return function( text, render ) {
			return i18n.lookup( render( text ) );
		}

	}

} )( PULSE.app.common, PULSE.I18N );
/*globals PULSE, PULSE.app, PULSE.app.common*/

( function( app, common, core ) {
	"use strict";

	/**
	 * @namespace common.urlGenerator.js.private
	 */

	/**
	 * create an array of parameters based on an object
	 * @param {Object} params Object path for the API object
	 * @returns {Array} paramsArray Array of parameters
	 */
	var getParams = function( params )
	{
		var paramsArray = [];
		for ( var key in params )
		{
			if ( params[ key ] != undefined && params[ key ] != '' )
			{
				paramsArray.push( key + '=' + params[ key ] );
			}
		}
		return paramsArray;
	}

	/**
	 * creates API path based on a string and parameters
	 * @param {String} path Object path for the API object
	 * @param {Object} params Url parameters
	 * @returns {String} url API url
	 */
	common.createApiPath = function ( path, params )
	{
		var thisPath = core.object.objectByString( app.apiPath, path );
		var paramArray = [];
		for ( var key in params )
		{
			if ( thisPath.indexOf( '{' + key + '}' ) > -1 )
			{
				thisPath = thisPath.replace( '{' + key + '}', params[ key ] );
			}
			else if ( params[key] != undefined )
			{
				paramArray.push( key + '=' + params[key] );
			}
		}
		var url = app.environment.api + '/football' + thisPath;
		if ( paramArray.length > 0 )
		{
			url += '?' + paramArray.join( '&' );
		}
		return url;
	};

	/**
	 * creates content path based on the type and parameters
	 * @param {String} type Type of content
	 * @param {Object} params
	 * @returns {String} url Content url
	 */
	common.createContentPath = function( type, params, lang, id )
	{
		var url = app.environment.api + '/content/' + app.account + '/' + type + '/' + ( lang ? lang : app.defaultLanguage ) + '/' + ( id ? id : '' );

		if ( params )
		{
			var paramsArray = getParams( params );
			if ( paramsArray.length > 0 )
			{
				url += '?' + paramsArray.join( '&' );
			}
		}
		return url;
	};

    /**
     * creates content path based on the type and parameters
					* @param {String} lang										- The language in which to request the blog in
     * @param {String} id 											- The id of the blog
     * @param {Object} params								- Any query params that need suffixing
					* @param {Number} belowPosition	- The number to fetch the blog posts under if supplied (under == older)
     * @returns {String} url Content url
     */
    common.createLiveBlogPath = function ( lang, id, params, belowPosition ) {
        var url = app.environment.api + '/liveblog/' + app.account + '/' + id + "/" + ( lang ? lang : app.defaultLanguage );

        // If belowPosition is supplied and it is a valid number, let's change the API request accordingly
        if ( typeof belowPosition !== 'undefined' && !isNaN(belowPosition) ) {
            url += '/below/' + belowPosition;
        }

        if ( params ) {
            var paramsArray = getParams(params);
            if ( paramsArray.length > 0 ) {
                url += '?' + paramsArray.join('&');
            }
        }
        return url;
    };

	/**
	 * creates canary path based on a content reference
	 * @param {String} type Type of content reference
	 * @param {int} id Id of content reference
	 * @returns {String} url Canary url
	 */
	common.createCanaryPathFromReference = function ( type, id )
	{
		var url = app.environment.canary + 'account/' + app.canaryAccount + '/contentref/' + type + ':' + id + '/posts';

		return url;
	};

	/**
	 * creates canary path based a strean id
	 * @param {int} id Stream id
	 * @returns {String} url Canary url
	 */
	common.createCanaryPathFromId = function ( id )
	{
		var url = app.environment.canary + 'stream/' + id + '/posts';

		return url;
	};

	/**
	 * creates search path based on terms, types and other parameters
	 * @param {[String]} terms Array of terms
	 * @param {[String]} types Optional array of types
	 * @returns {Object} params Optional object of additional parameters
	 */
	common.createSearchPath = function ( terms, types, params )
	{
		var url = app.environment.api + '/search/' + app.account + '/';

		url += '?terms=' + terms.join( ',' );

		if ( types && types.length > 0 )
		{
			types.map( function( type )
			{
				type = type.toUpperCase();
			} );
			url += '&type=' + types.join( ',' );
		}

		if ( params )
		{
			var paramsArray = getParams( params );
			if ( paramsArray.length > 0 )
			{
				url += '&' + paramsArray.join( '&' );
			}
		}

		return url;
	};

	common.createPollQuestionUrl = function( pollName )
	{
		var url = app.environment.pollQuestions + '/' + pollName + '/poll.js';

		return url;
	};

	common.createPollAnswerUrl = function( questionId, optionId )
	{
		var url = app.environment.pollAnswer + '?id=' + questionId + '&option=' + optionId + '&callback=JSON_CALLBACK';

		return url;
	};

	/**
	 * generate a url for a some content
	 * @param {String} type Type of content
	 * @param {int} id Id of content
	 * @returns {String} url Link to content
	 */
	common.generateContentUrl = function( type, id, val )
	{
		var base = '//' + app.environment.domain;
		switch ( type )
		{
			case 'text':
				return base + '/news/' + id;
			case 'player':
				if(!val){val = 'player'};
				return base + '/players/' + id + '/' + val + '/overview';
			case 'club':
			case 'team':
				if(!val){val = 'club'};
				return base + '/clubs/' + id + '/' + val + '/overview';
			case 'stadium':
				if(!val){val = 'club'};
				return base + '/clubs/' + id + '/' + val + '/stadium';
			case 'manager':
				return base + '/managers/' + id + '/overview';
			case 'referee':
				return base + '/referees/' + id + '/overview';
			default:
				return base + "/" + type + "/" + id;
		}
		return '';
	};


} )( PULSE.app, PULSE.app.common, PULSE.core );

/*globals PULSE, PULSE.app, PULSE.app.common*/

( function( common ) {
	"use strict";

	/**
	 * using an array of variants return a variant object with the closest matching width
	 * @param {Array} variants an array of variant objects ( from cms api )
	 * @param {int} width desired width
	 * @returns {object} variant object that most closely matches the desired width
	 */
	common.getVariantWithWidth = function( variants, width ) {

		var dx = Infinity;
		var nearest = false;

		for( var s = 0; s < variants.length; s++ ) {
			var variant = variants[ s ];
			var candidateDx = Math.abs( variant.width - width );
			if( candidateDx < dx ) {
				dx = candidateDx;
				nearest = s;
			}
		}
		return variants[ nearest ];
	};

	/**
	 * get the variants from a n article object ( text or video ), if one cant be found then return false
	 * @param {object} article article object from the cms api
	 * @returns {Array} array of variants that was found on the object, or false indicating no variants were found
	 */
	common.getArticleVariants = function( article ) {

		var lead = article[ 'leadMedia' ] ? 'leadMedia' : false;
		var thumb = article[ 'thumbnail' ] ? 'thumbnail' : false;
		var variants  = article[ lead || thumb ].variants;

		if( variants ) {
			return variants;
		}

		return false;
	};

	/**
	 * convert a time length into a duration string ( x min y sec ) for display
	 * @param {int} duration the duration in seconds
	 * @return {string} the representation of the duration as a string
	 */
	common.getDurationString = function( duration ) {

		if( !duration ) {
			return "";
		}

		var minutes = Math.floor( duration / 60 );
		var seconds = duration % 60;
		// TO-TRANSLATE
		var min = " min ", sec = " sec";

		var durationString = "";

		if( minutes ) {
			durationString += ( minutes + min );
		}

		if( seconds ) {
			durationString += ( seconds + sec );
		}

		return durationString;

	};

} )( PULSE.app.common );

/*globals PULSE.app, PULSE.app.common, PULSE.app.templates, PULSE.I18N */
( function( app, common, core, templates, i18n ) {

	common.cookieNotice = function() {
		var _self = this;

		var cookieNotice = core.localStorage.getStorage('cookieNotice', true);

		var webview = core.url.getParam( "webview" );

		if( !cookieNotice && ( !webview || webview != 'true' ) ) {
			var section = document.createElement( 'section' );
			core.style.addClass( section, 'cookies-notice' );

			var cookieModal = {
				headerText: i18n.lookup( 'label.cookieNotice.headerText' ),
				description: i18n.lookup( 'label.cookieNotice.description' ),
				findOutMore: i18n.lookup( 'label.cookieNotice.findOutMore' ),
				policyLink: app.cookiePolicyLink,
				acceptText: i18n.lookup( 'label.acceptCookies' )
			};

			section.innerHTML = Mustache.render( app.templates[ 'cookienotice' ], cookieModal );
			document.getElementsByTagName("body")[0].appendChild(section);

			_self.acceptButton = document.getElementsByClassName( 'cookies-notice-accept' );

			if ( _self.acceptButton.length > 0)
			{
				['keypress', 'click'].forEach(function(eventType){
					_self.acceptButton[0].addEventListener(eventType, function( evt ) {
						if (evt.which === 13 || evt.type === 'click') {
							core.localStorage.setStorage('cookieNotice', true, app.cookiePolicyExpiry, true);
							document.getElementsByClassName( 'cookies-notice' )[0].style.display = 'none';
						}
					});
				});
			}
		}
	};

} )( PULSE.app, PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N );


( function( common, core ) {

	var setValue = function( container, value )
	{
		if ( container )
		{
			container.innerHTML = value;
		}
	}

	common.countdown = function( element, config )
	{
		var _self = this;

		_self.element = element;
		_self.config = ( config ) ? config : {};

		_self.time = _self.element.getAttribute( 'data-time' ) ? _self.element.getAttribute( 'data-time' ) : _self.config.time;
		_self.stopCallback = config.stopCallback;

		_self.initCountdown();
	};

	/**
	 * start lsitening for click events on the element
	 */
	common.countdown.prototype.initCountdown = function()
	{
		var _self = this;

		_self.days = _self.element.getElementsByClassName( 'daysSpan' )[ 0 ];
	    _self.hours = _self.element.getElementsByClassName( 'hoursSpan' )[ 0 ];
	    _self.mins = _self.element.getElementsByClassName( 'minsSpan' )[ 0 ];
	    _self.secs = _self.element.getElementsByClassName( 'secsSpan' )[ 0 ];

	    if ( _self.time )
	    {
	        _self.liveRefresh = setInterval( function()
	        {
	            _self.refreshTime();
	        }, 1000 );
	    }

	};

	common.countdown.prototype.stopCountdown = function()
	{
		var _self = this;

		if( _self.stopCallback && typeof _self.stopCallback === 'function' )
		{
			_self.stopCallback( _self );
		}

		clearInterval( _self.liveRefresh );
	};

	common.countdown.prototype.refreshTime = function()
	{
		var _self = this;
	    var now = new Date().getTime();
	    var start = _self.time; //Date( this.start_date )

	    var timeGap = start - now;

	    // console.log(time_lasting);

	    if( timeGap <= 0)
	    {
	        setValue( _self.days, '00' );
	        setValue( _self.hours, '00' );
	        setValue( _self.mins, '00' );
	        setValue( _self.secs, '00' );
	        _self.stopCountdown();
	    }
	    else
	    {
	    	setValue( _self.days, '30' );
	    	setValue( _self.hours, '30' );
	    	setValue( _self.mins, '30' );
	    	setValue( _self.secs, '30' );
	        var days = Math.floor( ( timeGap  / 1000 ) / ( 60 * 60 * 24 ) );

	        if ( days < 10 )
	        {
	        	setValue( _self.days, '0' + days );
	        }
	        else
	        {
	        	setValue( _self.days, days );
	        }

	        var daySecs = parseInt( days, 10 ) * 24 * 60 * 60;
	        var hours = Math.floor( ( timeGap / 1000 - daySecs ) / ( 60 * 60 ) );
	        if( hours < 10)
	        {
	            setValue( _self.hours, '0' + hours );
	        }
	        else
	        {
	        	setValue( _self.hours, hours );
	        }
	        var hourSecs = parseInt( hours, 10 ) * ( 60 * 60 );
	        var minutes = Math.floor( ( timeGap / 1000 - daySecs - hourSecs ) / 60 );
	        if( minutes < 10)
	        {
	            setValue( _self.mins, '0' + minutes );
	        }
	        else
	        {
	            setValue( _self.mins, minutes );
	        }
	        var minSecs = parseInt( minutes, 10 ) * 60;
	        var seconds = Math.floor( timeGap / 1000 - daySecs - minSecs - hourSecs );
	        if( seconds < 10)
	        {
	            _self.secs.innerHTML = '0' + seconds;
	        }
	        else
	        {
	            setValue( _self.secs, seconds );
	        }
	    }
	};

} )( PULSE.app.common, PULSE.core );


/*globals PULSE.app.common, PULSE.app.templates, PULSE.I18N */
( function( common, core ) {

	/**
	 * @namespace common.dropdown.private
	 */

	/**
	 * set the dropdown listener for opening/closing dropdown
	 *
	 * @param {common.dropdown} _self contextual reference to the object that is calling the function
	 */
	var setListeners = function( _self )
	{
		var currentContainer = _self.element.getElementsByClassName( 'current' );

		if ( !_self.element.getAttribute( 'data-listener' ) )
		{
			_self.element.setAttribute( 'data-listener', true );
			_self.element.addEventListener( 'click', function( evt ) {
				core.style.toggleClass( _self.element, 'open' );
				if ( evt.target && evt.target.nodeName === 'LI' )
				{
					if ( currentContainer && currentContainer.length > 0 && _self.updateCurrent )
					{
						var label = evt.target.getAttribute('data-label');
						currentContainer[ 0 ].innerHTML = label;
					}

					if ( _self.target && _self.callback )
					{
						_self.callback.call( _self.config.target, evt.target );
					}
				}
			} );

			if ( currentContainer && currentContainer.length > 0 )
			{
				document.addEventListener( 'click', function ( e )
				{
					if ( e.target != currentContainer[ 0 ] && e.target != _self.element && !core.dom.isDescendant( e.target, currentContainer[ 0 ] ) )
					{
						core.style.removeClass( _self.element, 'open' );
					}
				});
			}
		}
	}

	/**
	 * create dropdown, for opening/closing dropdown
	 *
	 * @param {HTMLElement} element Element to hold the pagination
	 * @param {config} config Configuration for dropdown
	 */
	common.dropdown = function( element, config ) {
		var _self = this;

		_self.config = config || {};
		_self.element = element;
		_self.updateCurrent = _self.config.updateCurrent;
		_self.callback = _self.config.callback;
		_self.target = _self.config.target;

		core.style.removeClass( _self.element, 'open' );
		setListeners( _self );
	};

	var widgets = document.querySelectorAll( '[data-widget="dropdown"]' );
	for( var i = 0; i < widgets.length; i++ ) {
		new common.dropdown( widgets[ i ], {} );
	}

} )( PULSE.app.common, PULSE.core );

/*globals PULSE.app, PULSE.app.common */
( function( app, common, core ) {

	common.fantasyAuthenticate = function() {

		var _self = this;

		var plProfile = core.localStorage.getStorage('pl_profile', true);
		if(plProfile) {
			if(plProfile[0] === '"' && plProfile[plProfile.length - 1 ] === '"')
			{
				plProfile  = plProfile.substr(1, plProfile.length - 2);
			}
			authenticateCallback(JSON.parse(window.atob(plProfile)));
		} else {
			authenticateCallback(null);
		}
	};

	var authenticateCallback = function( data )
	{
		var fantasyfantasySignInLink = document.getElementsByClassName( 'fantasySignIn' )[0];
		var fantasyLogout = document.getElementsByClassName( 'fantasySignOut' )[0];

		var loginUrl =  core.url.updateUrlStringParam(app.environment.fantasyUserApi + "/", 'redirect_uri', app.environment.redirectUri);
		loginUrl = core.url.updateUrlStringParam(loginUrl, 'app', app.environment.fantasyAppId);

		//var logoutUrl =  core.url.updateUrlStringParam(app.environment.fantasyUserApi + "/accounts/logout/", 'redirect_uri', app.environment.redirectUri);
		//logoutUrl = core.url.updateUrlStringParam(logoutUrl, 'app', app.environment.fantasyAppId);

		var profileUrl =  app.environment.fantasyUserApi;

		fantasyfantasySignInLink.href = loginUrl;
		//fantasyLogout.href = logoutUrl;
		fantasyLogout.href = profileUrl;

		if(data) {
			core.style.addClass(fantasyfantasySignInLink, 'visuallyHidden');
			core.style.removeClass(fantasyLogout, 'visuallyHidden');
			fantasyLogout.getElementsByClassName('fantasyUsername' )[0].innerHTML = data.u.fn;
		} else {
			core.style.removeClass(fantasyfantasySignInLink, 'visuallyHidden');
			core.style.addClass(fantasyLogout, 'visuallyHidden');
		}

	};

} )( PULSE.app, PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N );

/*globals PULSE, PULSE.app */

( function( ui, common, core ) {

	var initGallery = function ( _self ) {
		var galleryWrap = document.createElement( 'div' );
		core.style.addClass( galleryWrap, 'galleryWrapper' );

		_self.gallery.list = document.createElement( 'ul' );
		core.style.addClass( _self.gallery.list, 'galleryList' );
		galleryWrap.appendChild( _self.gallery.list );

		// append children containers
		['prev','current','next'].forEach( function ( className ) {
			var thisGalleryItem = document.createElement( 'li' );
			core.style.addClass( thisGalleryItem, className );

			var thisImage = document.createElement( 'img' );
			core.style.addClass( thisImage, 'galleryImageContainer' );

			var figCaption = document.createElement( 'figcaption' );
			core.style.addClass( figCaption, 'galleryFigCaptionContainer' );

			var spanCaptionTitle = document.createElement( 'span' );
			core.style.addClass( spanCaptionTitle, 'galleryCaptionTitle' );

			var spanCaptionBody = document.createElement( 'span' );
			core.style.addClass( spanCaptionBody, 'galleryCaptionBody' );

			figCaption.append(spanCaptionTitle);
			figCaption.append(spanCaptionBody);

			thisGalleryItem.append( thisImage );
			thisGalleryItem.append( figCaption );
			_self.gallery.list.append( thisGalleryItem );
		});

		if ( _self.gallery.items && _self.gallery.items.length > 1 )
		{
			// add prev / next buttons
			_self.gallery.prevButton = document.createElement( 'a' );
			_self.gallery.prevButton.tabIndex = 0;
			core.style.addClass( _self.gallery.prevButton, 'galleryNavButton' );
			core.style.addClass( _self.gallery.prevButton, 'prev' );
			_self.gallery.prevButton.addEventListener( 'click', function() {
				_self.updateGallery( _self, 'prev' );
			});
			_self.gallery.prevButton.addEventListener( 'keydown', function(evt) {
					if (evt.which === 13) {
						_self.updateGallery( _self, 'prev' );
					}
			});
			galleryWrap.appendChild( _self.gallery.prevButton );

			_self.gallery.nextButton = document.createElement( 'a' );
			_self.gallery.nextButton.tabIndex = 0;
			core.style.addClass( _self.gallery.nextButton, 'galleryNavButton' );
			core.style.addClass( _self.gallery.nextButton, 'next' );
			_self.gallery.nextButton.addEventListener( 'click', function() {
				_self.updateGallery( _self, 'next' );
			});
			_self.gallery.nextButton.addEventListener( 'keydown', function(evt) {
					if (evt.which === 13) {
						_self.updateGallery( _self, 'next' );
					}
			});
			galleryWrap.appendChild( _self.gallery.nextButton );
		}

		document.addEventListener('keydown', function( evt ) {
			if(_self.gallery.isOpen) {
				if ( evt.which === 39 && _self.gallery.items && _self.gallery.items.length > 1 ) {
					_self.updateGallery( _self, 'next' );
				} else if ( evt.which === 37 && _self.gallery.items && _self.gallery.items.length > 1 ) {
					_self.updateGallery( _self, 'prev' );
				}	else if (evt.which === 27) {
					_self.modal.close();
				}
			}
		});

		// append gallery to modal
		_self.modal.content.appendChild( galleryWrap );
	};

	var getPrevIndex = function ( index, length ) {
		return index - 1 >= 0 ? index - 1 : length - 1;
	};

	var getNextIndex = function ( index, length ) {
		return index + 1 < length  ? index + 1 : 0
	};

	var assignCaptions = function( figCaptionContainer, itemContainer )
	{
		if ( figCaptionContainer && itemContainer )
		{
			var hideCaption = true;
			if ( itemContainer.captionTitle )
			{
				figCaptionContainer.childNodes[0].innerHTML = itemContainer.captionTitle;
				hideCaption = false;
			}
			if ( itemContainer.captionBody )
			{
				figCaptionContainer.childNodes[1].innerHTML = itemContainer.captionBody;
				hideCaption = false;
			}

			if ( hideCaption )
			{
				figCaptionContainer.style.display = 'none';
			}
			else
			{
				figCaptionContainer.style.display = '';
			}
		}
	}

	var moveElem = function ( elem, from, to ) {
		core.style.addClass( elem, to );
		core.style.removeClass( elem, from );

		core.style.addClass( elem.childNodes[1].childNodes[0], to + "CaptionTitle" );
		core.style.removeClass( elem.childNodes[1].childNodes[0], from + "CaptionTitle" );

		core.style.addClass( elem.childNodes[1].childNodes[1], to + "CaptionBody" );
		core.style.removeClass( elem.childNodes[1].childNodes[1], from + "CaptionBody" );
		return elem;
	};

	common.galleryModal = function ( element ) {
		var _self = this;
		_self.element = element;
		// create gallery list
		_self.gallery = {};
		_self.initModal( _self );
		initGallery( _self );
	};

	common.galleryModal.prototype.initModal = function () {

		var _self = this;

		var thisId = _self.element.getAttribute( 'data-id' );
		var modelContentId = 'galleryContentModal';
		var modelWrapId = 'galleryWrapModal';
		var modelOpener = '[data-ui-modal]';
		if ( thisId )
		{
			modelContentId += thisId;
			modelWrapId += thisId;
			modelOpener = '.modalOpener' + thisId;
		}

		var modalConfig = {
			openCallback: function(modal){
				_self.openGallery( modal );
				core.style.addClass( document.body, 'fixedBody' );
			},
			closeCallback: function(modal){
				_self.closeGallery( modal );
				core.style.removeClass( document.body, 'fixedBody' );
			},
			modalContentId : modelContentId,
			modalWrapId : modelWrapId,
			modalWrapClass : 'plModal',
			modalContentWrapClass : 'plModalContent',
			selector : modelOpener
		};

		_self.modal = new ui.modal( modalConfig );

		_self.modal.content = ( _self.modal.config.modalContent.querySelector( '[data-widget="gallery-modal"]' ) );
		_self.modal.content.style.display = '';

		// setup array of image sources
		_self.gallery.items = [];
		for (var i=0; i < _self.element.children.length; i++) {
			_self.gallery.items[i] = {};
			_self.gallery.items[i].src = _self.element.children[i].getAttribute( 'data-ui-src', i );

			if( _self.element.children[i].getElementsByClassName( 'captionTitle' ).length > 0){
				_self.gallery.items[i].captionTitle =  _self.element.children[i].getElementsByClassName( 'captionTitle' )[0].innerHTML;
			}

			if( _self.element.children[i].getElementsByClassName( 'captionBody' ).length > 0){
				_self.gallery.items[i].captionBody =  _self.element.children[i].getElementsByClassName( 'captionBody' )[0].innerHTML;
			}

			_self.element.children[i].setAttribute( 'data-index', i );
		}
	};

	common.galleryModal.prototype.openGallery = function ( modal ) {
		var _self = this;
		_self.gallery.currentIndex = parseInt(modal.config.current.activator.closest('.galleryItem').getAttribute('data-index'));
		var prevIndex = getPrevIndex( _self.gallery.currentIndex, _self.gallery.items.length );
		var nextIndex = getNextIndex( _self.gallery.currentIndex, _self.gallery.items.length );

		_self.assignSectionByIndex( 'current', _self.gallery.currentIndex );
		_self.assignSectionByIndex( 'prev', prevIndex );
		_self.assignSectionByIndex( 'next', nextIndex );

		_self.gallery.sliding = false;
		_self.gallery.isOpen = true;
	};

	common.galleryModal.prototype.assignSectionByIndex = function( section, index )
	{
		var _self = this;

		var current = _self.modal.content.querySelector( '.' + section );
		var galleryImg = current.querySelector( '.galleryImageContainer' );
		var figCaption = current.querySelector( '.galleryFigCaptionContainer' );
		galleryImg.setAttribute('src', _self.gallery.items[index].src);
		assignCaptions( figCaption, _self.gallery.items[index] );

	}

	common.galleryModal.prototype.closeGallery = function ( modal ) {
		var _self = this;
		_self.gallery.isOpen = false;
	};

	common.galleryModal.prototype.updateGallery = function ( _self, direction ) {
		if (!_self.gallery.sliding) {
			_self.gallery.sliding = true;

			var prevElem = _self.modal.content.querySelector( '.prev' );
			var currentElem = _self.modal.content.querySelector( '.current' );
			var nextElem = _self.modal.content.querySelector( '.next' );

			if ( direction === 'prev' ) {
				_self.gallery.currentIndex = getPrevIndex( _self.gallery.currentIndex, _self.gallery.items.length );
				var newPrevIndex = getPrevIndex( _self.gallery.currentIndex, _self.gallery.items.length );

				// move prev to current
				prevElem = moveElem( prevElem, 'prev', 'current' );
				// move current to next
				currentElem = moveElem( currentElem, 'current', 'next' );
				// move next to prev
				nextElem = moveElem( nextElem, 'next', 'prev' );
				// update next src to new prev & move elem

				_self.assignSectionByIndex( 'prev', newPrevIndex );
				
				_self.gallery.list.insertBefore( nextElem, currentElem )

				// update elem references
				_self.gallery.prev = nextElem;
				_self.gallery.current = prevElem;
				_self.gallery.next = currentElem;
			} else {
				_self.gallery.currentIndex = getNextIndex( _self.gallery.currentIndex, _self.gallery.items.length );
				var newNextIndex = getNextIndex( _self.gallery.currentIndex, _self.gallery.items.length );

				// move next to current
				nextElem = moveElem( nextElem, 'next', 'current' );
				// move current to prev
				currentElem = moveElem( currentElem, 'current', 'prev' );
				// move prev to next
				prevElem = moveElem( prevElem, 'prev', 'next' );
				// update prev src to new next & move elem

				_self.assignSectionByIndex( 'next', newNextIndex );
				
				_self.gallery.list.appendChild( prevElem )

				// update elem references
				_self.gallery.prev = currentElem;
				_self.gallery.current = nextElem;
				_self.gallery.next = prevElem;
			}

			setTimeout(function() {
				_self.gallery.sliding = false;
			}, 400);
		}

	};

}( PULSE.ui, PULSE.app.common, PULSE.core ));

/*globals PULSE, PULSE.app */

( function( app ) {

	// app.local is the object that gets extended with any 
	// temporay data objects to be shared across components
	app.local = {};

	// app.local.club - ID of club stored
	var w = document.querySelectorAll( '[data-widget="local-club"]' );
	w = Array.prototype.map.call( w, function( widget ) {
		app.local.clubId = widget.getAttribute( "data-club-id" );
	} );

}( PULSE.app ));
( function( app, common, core, templates, i18n ) {
	"use strict";

	/**
	 * Get a match given an id
	 */
	var getMatchFromId = function( matches, id )
	{
		if ( matches && matches.length > 0 )
		{
			for ( var i = 0; i < matches.length; i++ )
			{
				if ( matches[ i ].id == id )
				{
					return matches[ i ];
				}
			}
		}
		return undefined;
	}

	/**
	 * Poll Matches - Refresh live matches and update score
	 * @param {Object} element element defining the match summary
	 * @param {Object} requestConfig config for polling
	 * @param {Object} config Configuration for widget
	 */
	common.pollMatches = function( element, requestConfig, config ) {

		var _self = this;

		_self.element = element;
		_self.config = config;

		_self.matchClass = ( _self.config && _self.config.matchClass ) ? _self.config.matchClass : 'matchNavMatchContainer';
		_self.requestConfig = requestConfig;

		_self.matchNavMatchContainer = _self.element.getElementsByClassName( _self.matchClass );
		if ( element && _self.requestConfig )
		{
			_self.initData();
		}
	}

	/**
	 * Generate fixtures feed for config
	 */
	common.pollMatches.prototype.initData = function()
	{
		var _self = this;

		var subscriberObject = {
			url: common.createApiPath( 'fixtures.all', _self.requestConfig ),
			method: "GET",
			callback: _self.renderMatches,
			target: this,
			interval: app.pollingCacheRate
		};

		this.startData( subscriberObject );
	};

	/**
	 * Render matches
	 * @param {Object} data Data for poll fixtures
	 */
	common.pollMatches.prototype.renderMatches = function( data )
	{
		var _self = this;

		_self.hasLiveMatch = false;
		if ( data && data.content )
		{
			Array.prototype.map.call( _self.matchNavMatchContainer, function( container )
			{
				var matchId = container.getAttribute( 'data-id' );
				var match = getMatchFromId( data.content, matchId );
				if ( match && match.status != "U" )
				{
					_self.renderMatch( container, match );
				}
				else
				{
					_self.hasLiveMatch = true;
				}
			} );
		}
		if ( !_self.hasLiveMatch )
		{
			_self.stopFixtureFeed();
		}
	}

	common.pollMatches.prototype.renderMatch = function( container, match )
	{
		var _self = this;

		if ( match.status && match.status != 'U' )
		{
			var matchMinuteContainer = container.getElementsByClassName( 'matchMinuteContainer' );
			var matchScoreContainer = container.getElementsByClassName( 'matchScoreContainer' );
			if ( matchMinuteContainer && matchMinuteContainer.length > 0 && matchScoreContainer && matchScoreContainer.length > 0 )
			{
				var score1 = ( match.teams[ 0 ].score != undefined ) ? match.teams[ 0 ].score : '';
				var score2 = ( match.teams[ 1 ].score != undefined ) ? match.teams[ 1 ].score : '';
				var scores = [ score1, score2 ];
				if ( match.status === "C" )
				{
					container.className = _self.matchClass + " matchAbridged fullTime";
					matchMinuteContainer[ 0 ].innerHTML = i18n.lookup( 'label.match.fulltime.short' );
				}
				else if ( match.status === "A" )
				{
					container.className = _self.matchClass + " matchAbridged";
					var abandonedLabel = i18n.lookup( 'label.match.abandoned.short' );
					matchMinuteContainer[ 0 ].innerHTML = '';
					scores = [ abandonedLabel, abandonedLabel ]; 
				}
				else
				{
					_self.hasLiveMatch = true;
					container.className = _self.matchClass + " matchAbridged live";
					var time = '';
					if ( match.phase === 'H' )
					{
						time = i18n.lookup( 'label.match.halftime.short' );
					}
					else if ( match.clock )
					{
						time = common.getEventTime( match );
					}
					matchMinuteContainer[ 0 ].innerHTML = time;
				}
				matchMinuteContainer[ 0 ].style.display = '';
				var model = {
					scores : scores
				}
				matchScoreContainer[ 0 ].innerHTML = Mustache.render( templates[ 'matchnavscore' ], model );
			}
		}
	}

	/**
	 * Stop Fixture feed
	 */
	common.pollMatches.prototype.stopFixtureFeed = function()
	{
		var _self = this;

		_self.dm.stop();
	}

	/**
	 * start the data manager and fetch data
	 */
	common.pollMatches.prototype.startData = function( config )
	{
		var _self = this;

		_self.dm = core.data.manager.add( config );
	};

} )( PULSE.app, PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N );


/*globals PULSE.app.common, PULSE.app.templates, PULSE.I18N */
( function( common, core, templates, i18n ) {

	/**
	 * @namespace common.search.private
	 */

	/**
	 * draw the pagination from the template
	 *
	 * @param {common.scrollpagination} _self contextual reference to the object that is calling the function
	 */
	var drawSearch = function( _self, term )
	{
		var thisTerm = term || '';
		var placeholder = ( _self.config.placeholder ) ? _self.config.placeholder : '';
		_self.element.innerHTML = Mustache.render( templates.search, { term : term, placeholder : placeholder } );
		_self.searchTextContainer = _self.element.getElementsByClassName( 'searchTextContainer' )[ 0 ];
		_self.searchIconContainer = _self.element.getElementsByClassName( 'searchIconContainer' )[ 0 ];
	}

	var getVariantsFromSearch = function( searchVariants )
	{
		var variants = [];
		if ( searchVariants && searchVariants.length > 0 )
		{
			for ( var i = 0; i < searchVariants.length; i++ )
			{
				var urlSplit = searchVariants[ i ].split( ';' );
				if ( urlSplit.length === 3 )
				{
					var variantModel = {
						width : parseInt( urlSplit[ 0 ] ),
						height : parseInt( urlSplit[ 1 ] ),
						url : urlSplit[ 2 ]
					};
					variants.push( variantModel );
				}
			}
		}
		return variants;
	}

	/**
	 * set the next/previous listeners for the pagination
	 *
	 * @param {ui.pagination} _self contextual reference to the object that is calling the function
	 */
	var setListeners = function( _self )
	{
		_self.searchTextContainer.addEventListener( 'keypress', function( e ) {
		    var keyCode = e.keyCode || e.which;
		    if (keyCode == '13'){
		    	_self.doSearch();
		    }
		} );

		_self.searchIconContainer.addEventListener( 'click', function( e ) {
			_self.doSearch();
		} );
	}

	var getModel = function( fields )
	{
		var model = {};

		if ( fields[ 'object_id' ] && fields[ 'object_id' ].length > 0 )
		{
			model.id = parseInt( fields[ 'object_id' ][ 0 ] );
		}

		if ( fields.type && fields.type.length > 0 )
		{
			if ( fields[ 'object_id' ] && fields[ 'object_id' ].length > 0 )
			{
				model.id = fields[ 'object_id' ][ 0 ];
			}

			if ( fields[ 'type' ] && fields[ 'type' ].length > 0 )
			{
				model.type = fields[ 'type' ][ 0 ].toLowerCase();
			}

			switch( fields.type[ 0 ] )
			{
				case 'PLAYER':
					if ( fields.title && fields.title.length > 0 )
					{
						model.name = { display: fields.title[ 0 ] };
					}
					if ( fields[ 'object_id' ] && fields[ 'object_id' ].length > 0 )
					{
						model.personId = fields[ 'object_id' ][ 0 ];
					}
					break;
				case 'TEAM':
					if ( fields.title && fields.title.length > 0 )
					{
						model.name = fields.title[ 0 ];
					}
					break;
				case 'VIDEO':
					if ( fields.title && fields.title.length > 0 )
					{
						model.title = fields.title[ 0 ];
					}
					if ( fields[ 'image_url' ] && fields[ 'image_url' ].length > 0 )
					{
						model.thumbnailUrl = fields[ 'image_url' ][ 0 ];
					}
					if ( fields[ 'duration' ] && fields[ 'duration' ].length > 0 )
					{
						model.duration = fields[ 'duration' ][ 0 ];
					}
					if ( fields[ 'description' ] && fields[ 'description' ].length > 0 )
					{
						model.description = fields[ 'description' ][ 0 ];
					}
					if ( fields[ 'timestamp' ] && fields[ 'timestamp' ].length > 0 )
					{
						model.date = fields[ 'timestamp' ][ 0 ];
					}
					break;
				case 'PHOTO':
					if ( fields.title && fields.title.length > 0 )
					{
						model.title = fields.title[ 0 ];
					}
					if ( fields[ 'timestamp' ] && fields[ 'timestamp' ].length > 0 )
					{
						model.date = fields[ 'timestamp' ][ 0 ];
					}
					if ( fields[ 'image_url' ] && fields[ 'image_url' ].length > 0 )
					{
						model.variants = getVariantsFromSearch( fields[ 'image_url' ] );
					}
					break;
				case 'TEXT':
					if ( fields.title && fields.title.length > 0 )
					{
						model.title = fields.title[ 0 ];
					}
					if ( fields[ 'timestamp' ] && fields[ 'timestamp' ].length > 0 )
					{
						model.date = fields[ 'timestamp' ][ 0 ];
					}
					if ( fields[ 'description' ] && fields[ 'description' ].length > 0 )
					{
						model.description = fields[ 'description' ][ 0 ];
					}
					if ( fields[ 'body' ] && fields[ 'body' ].length > 0 )
					{
						model.body = fields[ 'body' ][ 0 ];
					}
					if ( fields[ 'tags' ] && fields[ 'tags' ].length > 0 )
					{
						model.tags = fields[ 'tags' ];
					}
					break;
			}
		}

		return model;
	}

	/**
	 * create search, for searching content
	 *
	 * @param {HTMLElement} element Element to hold the pagination
	 * @param {config} config Configuration for the pagination :
	 	- callback: Callback when a new search is queried
	 	- target : Target for the callback
	 */
	common.search = function( element, config ) {
		var _self = this;

		_self.config = config || {};
		_self.element = element;

		drawSearch( _self, '' );
		setListeners( _self );
	};

	common.search.prototype.checkParam = function()
	{
		var _self = this;

		var paramTerm = core.url.getParameterByName( 'term' );
		if ( paramTerm )
		{
			_self.searchTextContainer.value = paramTerm;
			_self.doSearch( paramTerm, true );
		}
	}

	/**
	 * what should be done when the user wants to do a search
	 *
	 * @param {String} term Optional text to search by
	 */
	common.search.prototype.doSearch = function( term, init )
	{
		var _self = this;

		var searchTerm = term || _self.searchTextContainer.value;

		if ( _self.config.callback && _self.config.target )
		{
			_self.config.callback.call( _self.config.target, searchTerm, 0 );
		}
		if ( _self.config.updateUrl && !init )
		{
			_self.url = core.url.updateUrlStringParam( window.location.href, 'term', searchTerm );
			history.pushState( {}, "", _self.url );
		}
	};

	common.search.prototype.getSearchTerm = function()
	{
		return _self.searchTextContainer.value;
	};

	common.search.prototype.getSearchParams = function( params )
	{
		var searchParams = {};
		if ( params )
		{
			if ( params.pageSize != undefined && params.page != undefined )
			{
				searchParams.size = params.pageSize;
				searchParams.start = params.pageSize * params.page;
			}
			if ( params.fullObjectResponse )
			{
				searchParams.fullObjectResponse = true;
			}
		}
		return searchParams;
	}

	common.search.prototype.hasTerm = function()
	{
		var term = _self.getSearchTerm();
		if ( term != undefined && term != '' )
		{
			return true;
		}
		else
		{
			return false;
		}
	};

	common.search.prototype.evaluateHits = function( hits )
	{
		var evaluatedHits = [];

		if ( hits && hits.hit && hits.hit.length > 0 )
		{
			hits.hit.forEach( function( hit )
			{
				if ( hit.fields )
				{
					evaluatedHits.push( getModel( hit.fields ) );
				}
				else if ( hit.response )
				{
					if ( hit.contentType === 'FOOTBALL_PERSON' )
					{
						hit.response.type = 'player';
					}
					evaluatedHits.push( hit.response );
				}
			} );
		}
		return evaluatedHits;
	}

} )( PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N );

/*globals PULSE, PULSE.app*/

( function( app, common, core ) {

    /* PRIVATE METHODS */

    /**
     * @namespace common.slider.private
     */

    var setDefaults = function( config ){

        if( !config.wrap ){
            console.warn( 'You must provide a wrap element in your slider config' );
            return;
        }
        if( !config.controls || !config.controls.next || !config.controls.previous ){
            console.warn( 'You must provide a both next and previous control elements in your slider config' );
            return;
        }
        if( !config.slideList ){
            config.slideList = config.wrap.querySelector( '.js-slide-list' );
        }
        if( !config.slides ){
            config.slides = config.wrap.querySelectorAll( '.js-slide' );
        }
        if( !config.slideRate ){
            config.slideRate = 50; // pixels to move per FPS
        }
        if( !config.thumbSlideRate ){
            config.thumbSlideRate = 10; // pixels to move per FPS
        }
        if( !config.interval ){
            config.interval = 5000;
        }
        if( !config.auto ){
            config.auto = false;
        }
        if( !config.startIndex ){
            config.startIndex = 0;
        }
        if( !config.hideClass ){
            config.hideClass = 'is-hidden';
        }
        if( config.thumbsWrap && !config.thumbsType ){
            config.thumbsType = 'image';
        }
        if( !config.thumbClass ){
            config.thumbClass = 'thumbnail';
        }

        return config;

    };

    var bindControls = function ( scope ) {

        scope.config.controls.previous.addEventListener( 'click', function( e ){
            e.preventDefault();
            scope.slidePrev();
        } );

        scope.config.controls.next.addEventListener( 'click', function( e ){
            e.preventDefault();
            scope.slideNext();
        } );


        if ( scope.config.controls.expand ){
            // used to handle multiple expand elements that also set the current image on expand
            if(scope.config.controls.expand.length > 1) {

                for (var i = 0; i < scope.config.controls.expand.length; i++) {

                    scope.config.controls.expand[i].addEventListener('click', function(e) {

                        e.preventDefault();
                        scope.config.currentSlide = e.target.parentNode.parentNode;
                        scope.toggleExpand();
                    });
                }

            } else {

                scope.config.controls.expand.addEventListener( 'click', function( e ){
                    e.preventDefault();
                    scope.toggleExpand();
                } );

            }

        }

        if ( scope.config.controls.autoStart && scope.config.controls.autoStop ){
            scope.config.controls.autoStart.addEventListener( 'click', function( e ){
                e.preventDefault();
                scope.startAuto();
            } );
            scope.config.controls.autoStop.addEventListener( 'click', function( e ){
                e.preventDefault();
                scope.stopAuto();
            } );
        }

    };

    var bindArrowKeys = function ( scope ) {

        window.addEventListener("keydown", function( e ) {
            //left arrow
            if ( e.keyCode == '37' ) {
                scope.slidePrev();
            }
            //right arrow
            if ( e.keyCode == '39' ) {
                scope.slideNext();
            }
        }, false);
    };

    var buildViewport = function( scope ){

        var newViewport = false;

        if( !scope.config.viewport ){
            newViewport = true;
            scope.config.viewport = document.createElement( 'div' );
            core.style.addClass( scope.config.viewport, 'slider-viewport' );
        }
        scope.config.viewportList = document.createElement( 'ul' );
        core.style.addClass( scope.config.viewportList, 'slider-viewport__list' );
        scope.config.viewport.appendChild( scope.config.viewportList );

        if( newViewport ){
            scope.config.wrap.appendChild( scope.config.viewport );
        }

        bindViewport( scope );

    };

    var bindViewport = function( scope ){
        var timeout;

        var checkScroll = function( ){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                    if( scope.config.viewport.scrollLeft > scope.config.viewport.offsetWidth ){
                        scope.slideNext();
                    }
                    else{
                        scope.slidePrev();
                    }
                    scope.config.viewport.removeEventListener( 'scroll', checkScroll );
            }, 50 );
        };

        /*scope.config.viewportList.addEventListener( 'touchstart', function( e ){
            startPos = scope.config.viewport.scrollLeft;
            scope.config.viewport.addEventListener( 'scroll', checkScroll )
        } );*/
    };

    var bindResize = function( scope ){
        var timeout;

        var checkResize = function( ){
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                scope.updateViewport( scope.config.currentSlide );
            }, 200 );
        };

        window.addEventListener( 'resize', checkResize );
    };

    var buildThumbnails = function( scope ){
        scope.config.thumbnails = Array.prototype.map.call( scope.config.slides, function( slide, index ){
            slide.indexVal = index;
            var thumb = document.createElement( 'li' );
            core.style.addClass( thumb, scope.config.thumbClass );
            switch( scope.config.thumbsType ){
                case "image":
                    thumb.appendChild( slide.querySelector( 'picture' ).cloneNode( true ) );
                    break;
                case "index":
                    thumb.innerHTML = index + 1;
            }
            thumb.addEventListener( 'click', function(){
                scope.slideToIndex( index );
            } );
            scope.config.thumbsWrap.appendChild( thumb );
            return thumb;
        } );
    };

    var bindThumbControls = function( scope ){

        scope.config.thumbControls.left.addEventListener( 'click', function( e ){
            e.preventDefault();
            scope.slideThumbsLeft();
        } );

        scope.config.thumbControls.right.addEventListener( 'click', function( e ){
            e.preventDefault();
            scope.slideThumbsRight();
        } );

    };

    common.slider = function ( config ) {
        'use strict';

        var _self = this;

        _self.config = setDefaults( config );

        // hide the slide list
        core.style.addClass( _self.config.slideList, _self.config.hideClass );

        _self.config.currentSlide = _self.config.slides[ _self.config.startIndex ];
        _self.config.firstSlide = _self.config.slides[0];
        _self.config.lastSlide = _self.config.slides[ _self.config.slides.length - 1 ];
        _self.isViewportFullsize = false;

        bindControls( _self );
        bindArrowKeys( _self );
        buildViewport( _self );
        bindResize( _self );
        if( _self.config.thumbsWrap ){
            buildThumbnails( _self );

            if( _self.config.thumbControls ){
                bindThumbControls( _self );
            }
        }
        _self.updateViewport( _self.config.currentSlide );

        if( _self.config.auto ){
            _self.startAuto();
        }

    };

    common.slider.prototype.slidePrev = function(){

        var _self = this;
        var limit = 0;

        function moveSlide() {

            var newPos = _self.config.viewport.scrollLeft - _self.config.slideRate;

            if( newPos <= limit){
                _self.config.viewport.scrollLeft = limit;
                cancelAnimationFrame( sliding );
                _self.updateViewport( _self.config.prevSlide );
            }
            else{
                _self.config.viewport.scrollLeft = newPos;
                requestAnimationFrame( moveSlide );
            }
        }
        var sliding = requestAnimationFrame(moveSlide);

    };

    common.slider.prototype.slideNext = function(){

        var _self = this;
        var limit = ( _self.config.viewport.offsetWidth * 2 ) - 10;

        function moveSlide() {

            var newPos = _self.config.viewport.scrollLeft + _self.config.slideRate;

            if( newPos >= limit ) {
                _self.config.viewport.scrollLeft = limit;
                cancelAnimationFrame( sliding );
                _self.updateViewport( _self.config.nextSlide );
            }
            else{
                _self.config.viewport.scrollLeft = newPos;
                requestAnimationFrame( moveSlide );
            }
        }
        var sliding = requestAnimationFrame(moveSlide);

    };

    common.slider.prototype.slideToIndex = function ( targetIndex ) {

        var _self = this;

        if( _self.config.currentSlide.indexVal !== targetIndex ){

            if ( _self.config.currentSlide.indexVal < targetIndex ) {
                var newTarget = _self.config.currentSlide;
                newTarget.forceNext = _self.config.slides[ targetIndex ];
                _self.updateViewport(newTarget, 'next');
            }
            else {
                var newTarget = _self.config.currentSlide;
                newTarget.forcePrev = _self.config.slides[ targetIndex ];
                _self.updateViewport(newTarget, 'prev');
            }
        }

    };

    common.slider.prototype.startAuto = function(){

        var _self = this;

        if( !_self.autoPlaying ){
            _self.autoPlaying = setInterval(
                function(){
                    _self.slideNext()
                }, _self.config.interval
            )
            core.style.toggleClass( _self.config.controls.autoStart, _self.config.hideClass );
            core.style.toggleClass( _self.config.controls.autoStop, _self.config.hideClass );
        }
        else{
            return "slider is already auto playing"
        }
    };

    common.slider.prototype.stopAuto = function(){

        var _self = this;

        if( _self.autoPlaying ){
            clearInterval( _self.autoPlaying );
            _self.autoPlaying = false;
            core.style.toggleClass( _self.config.controls.autoStart, _self.config.hideClass );
            core.style.toggleClass( _self.config.controls.autoStop, _self.config.hideClass );
        }
        else{
            return "slider is not auto playing"
        }
    };

    common.slider.prototype.toggleExpand = function(){

        var _self = this;

        _self.isViewportFullsize = !_self.isViewportFullsize;
        core.style.toggleClass( _self.config.wrap, 'expanded' );
        core.style.toggleClass( document.getElementsByTagName( 'body' )[0], 'u-body-no-scroll' );

        _self.updateViewport( _self.config.currentSlide );

    };

    common.slider.prototype.updateViewport = function (target, slide) {

        var _self = this;
        _self.config.currentSlide = target;
        if (target.forcePrev) {
            _self.config.prevSlide = target.forcePrev;
           target.forcePrev = false;
        }
        else {
            _self.config.prevSlide = core.dom.getPreviousSiblings( _self.config.currentSlide )[0];
            if ( !_self.config.prevSlide ) {
                _self.config.prevSlide = _self.config.lastSlide;
            }
        }
        if (target.forceNext) {
            _self.config.nextSlide = target.forceNext;
            target.forceNext = false;
        }
        else {
            _self.config.nextSlide = core.dom.getNextSiblings( _self.config.currentSlide )[0];
            if ( !_self.config.nextSlide ) {
                _self.config.nextSlide = _self.config.firstSlide;
            }
        }
        _self.config.viewportList.innerHTML = "";
        _self.config.viewportList.appendChild( _self.config.prevSlide.cloneNode( true ) );
        _self.config.viewportList.appendChild( _self.config.currentSlide.cloneNode( true ) );
        _self.config.viewportList.appendChild( _self.config.nextSlide.cloneNode( true ) );

        _self.config.viewport.scrollLeft = _self.config.viewport.offsetWidth;

        if ( slide == "next" ) {
            _self.slideNext( true );
        }
        else if ( slide == "prev" ) {
            _self.slidePrev( true );
        }

        if( _self.config.thumbnails ){
            _self.setActiveThumb( _self.config.currentSlide.indexVal );
        }

    };

    common.slider.prototype.setActiveThumb = function( activeIndex ){
        var _self = this;
        Array.prototype.forEach.call( _self.config.thumbnails, function( thumb ){
            core.style.removeClass( thumb, 'is-active' );
        } );
        core.style.addClass( _self.config.thumbnails[ activeIndex ], 'is-active' );
    };

    common.slider.prototype.slideThumbsRight = function( direction ){
        var _self = this;

        var getThumbWidth = function(){
            var width = _self.config.thumbnails[0].offsetWidth;

            var marginLeft = parseInt( window.getComputedStyle( _self.config.thumbnails[0] ).getPropertyValue('margin-left') );
            var marginRight = parseInt( window.getComputedStyle( _self.config.thumbnails[0] ).getPropertyValue('margin-right') );

            return width + marginRight + marginLeft;

        };

        var startPos =  _self.config.thumbsWrap.scrollLeft;
        var distance = getThumbWidth();
        var limit = ( _self.config.thumbnails.length * distance ) - _self.config.thumbsWrap.offsetWidth;


        function moveThumbs() {

            var newPos = _self.config.thumbsWrap.scrollLeft += _self.config.thumbSlideRate;

                if( newPos > limit ){
                    _self.config.thumbsWrap.scrollLeft = limit;
                    cancelAnimationFrame( slidingThumbs );
                }
                else if( newPos >= startPos + distance ){
                    _self.config.thumbsWrap.scrollLeft = newPos;
                    cancelAnimationFrame( slidingThumbs );
                }
                else{
                    _self.config.thumbsWrap.scrollLeft = newPos;
                    requestAnimationFrame( moveThumbs );
                }
        }

        if( _self.config.thumbsWrap.scrollLeft < limit ){
            var slidingThumbs = requestAnimationFrame( moveThumbs );
        }

    };

    common.slider.prototype.slideThumbsLeft = function( direction ){
        var _self = this;

        var startPos =  _self.config.thumbsWrap.scrollLeft;
        var distance = _self.config.thumbnails[0].offsetWidth;
        var limit = 0;

        function moveThumbs() {

            var newPos = _self.config.thumbsWrap.scrollLeft -= _self.config.thumbSlideRate;

                if( newPos < limit ){
                    _self.config.thumbsWrap.scrollLeft = limit;
                    cancelAnimationFrame( slidingThumbs );
                }
                else if( newPos <= startPos - distance ){
                    _self.config.thumbsWrap.scrollLeft = newPos;
                    cancelAnimationFrame( slidingThumbs );
                }
                else{
                    _self.config.thumbsWrap.scrollLeft = newPos;
                    requestAnimationFrame( moveThumbs );
                }
        }

        if( _self.config.thumbsWrap.scrollLeft > limit ){
            var slidingThumbs = requestAnimationFrame( moveThumbs );
        }

    };


} )( PULSE.app, PULSE.app.common, PULSE.core );

/*globals PULSE, PULSE.app */

/**
 * store basic information needed to initialise a widget
 * @typedef {object} widgetInitialisation
 * @property {function} widgetConstructor the widget constructor
 * @property {HTMLElement} widgetElement the element on which the widget should be initialised
 * @property {object} widgetConfig the configuration that will be passed into the widget on initialisation
 */

( function( app ) {

	/**
	 * define an array to keep references to the widgets in the page that are tab aware
	 * this will be iterated over by the PULSE.app.tabbedContent instance to initiate the widget
	 */
	app.tabAwareWidgets = [];

	/**
	 * Some widgets can be standalone or grouped into a set of tabs. If tabs are standalone then we wish to
	 * initialise them immediately, if they are placed into a tabbed interface then we can
	 * wait until the widget is actually shown until we initialise. This will help us to reduce
	 * unnecessary network requests / work in general
	 *
	 * This 'class' defines a wrapper for widgets that may be part of a tabbed interface
	 *
	 * @param {widgetInitialisation} widgetInitialisation information for initialising the widget when the time comes
	 */
	app.tabAwareWidget = function( widgetInitialisation ) {
		var _self = this;

		_self.widgetInit = widgetInitialisation;
		_self.tabbed = false;
		_self.initialised = false;

		app.tabAwareWidgets.push( _self );

		/**
		 * here we check weather
		 * 1. the widget was called upon by the build callback ( it is the default tab )
		 * 2. the widget is not inside a tabbed interface
		 */
		var a1 = _self.widgetInit.widgetElement.getAttribute( "data-tab-aware-default" ) === "true";
		var a2 = !( _self.widgetInit.widgetElement.parentElement && _self.widgetInit.widgetElement.parentElement.classList.contains( "tabbedContent" ) );

		if( a1 || a2 ) {
			_self.activate();
		}

	};

	/**
	 * check if an element is the same as another
	 *
	 * @param {HTMLElement} element the element to check against this instance's widget elemen
	 * @returns {boolean} weather the elements match
	 */
	app.tabAwareWidget.prototype.match = function( element ) {
		var _self = this;
		return _self.widgetInit.widgetElement === element;
	};

	/**
	 * activate the widget and set the internal state to reflect this
	 */
	app.tabAwareWidget.prototype.activate = function() {
		var _self = this;

		if( !_self.initialised ) {
			_self.initialised = true;
			_self.createWidget();
		}
	};

	/**
	 * create the widget using the defined constructor
	 */
	app.tabAwareWidget.prototype.createWidget = function() {
		var _self = this;

		new _self.widgetInit.widgetConstructor( _self.widgetInit.widgetElement, _self.widgetInit.widgetConfig );
	};

} )( PULSE.app );
/*globals PULSE, PULSE.app */

( function( app, core ) {

    var UserData = function() {

        var _self = this;

        var init = function() {
            getSignedInContent();
            updateLocalData();
        };

        /* Get user data from pl_profile cookie */
        var getSignedInContent = function() {

            var plProfile = core.localStorage.getStorage('pl_profile', true);

            if (plProfile) {
                // user is logged in

        		if ( plProfile[0] === '"' && plProfile[plProfile.length - 1 ] === '"' ) {
        			plProfile  = plProfile.substr(1, plProfile.length - 2);
        		}

                // try to get local user data
                var local = core.localStorage.getStorage('userData');
                if (local) {
                    _self = JSON.parse( local );
                }

                // update profile data with data from cookie
        		_self.plProfile = JSON.parse( window.atob( plProfile ) );
                _self.loggedin = true;
            } else {
                // not logegd in - reset local data
                _self.loggedin = false;
                _self.plProfile = null;
                _self.club = null;

                saveToStorage();
            }

        };

        /* Update user data if not previously done or it has changed meanwhile */
        var updateLocalData = function() {

            // update user data if logged in but no data has been previously fetched OR data in cookie has been changed
    		if ( _self.loggedin && (!_self.club || !_self.club.opta || _self.club.opta !== _self.plProfile.u.fc) ) {

                _self.club = {
                    opta: _self.plProfile.u.fc
                };

                var subscriberObject = {
    				url: app.environment.api + '/football/teams/t' + _self.club.opta + '?sys=opta',
    				method: "GET",
    				callback: clubDetailsLoaded,
    				forceCallback: true,
    				target: _self
    			};

    			core.data.manager.add( subscriberObject );
    		}

        };

        /* Callback if fetching user's favourite club's data */
        var clubDetailsLoaded = function(data) {

            if (data && data.club) {
                _self.club.id = data.club.id;
                _self.club.abbr = data.club.abbr;
                _self.club.name = data.club.name;
                _self.club.shortName = data.club.shortName;
                _self.club.grounds = data.grounds;

                saveToStorage();
            }

        };

        var saveToStorage = function() {
            core.localStorage.setStorage('userData', JSON.stringify(_self));
        };

        init();

        return _self;

    };

    app.UserData = new UserData();

}( PULSE.app, PULSE.core ));

/*globals PULSE, PULSE.app */

( function( app, ui, common, core ) {

	common.videoList = function( element ){

		var _self = this;

		_self.element = element;

		_self.initModal();

	};

	common.videoList.prototype.initModal = function()
	{
		var _self = this;

		var modalConfig = {
			parent: _self.element,
			selector: '[data-ui-modal]',
			openClass: 'open',
			modalContentId : 'videoPlayerContentModal',
			modalWrapId : 'videoPlayerWrapModal',
			closeText: 'close',
			openCallback: function(modal){
				_self.updatePlayer( modal );
				core.style.addClass( document.body, 'fixedBody' );
				core.style.addClass( document.body, 'overlay' );
			},
			closeCallback: function(modal){
				_self.stopPlayer( modal );
				core.style.removeClass( document.body, 'fixedBody' );
				core.style.removeClass( document.body, 'overlay' );
			},
			modalWrapClass : 'plModal',
			modalContentWrapClass : 'plModalContent'
		};
		_self.modal = new ui.modal( modalConfig );

	};

	common.videoList.prototype.updatePlayer = function( modal ){

		var _self = this;

		var playerWrap = modal.config.modal.querySelector( '[data-player]' );
		var playerId = playerWrap.getAttribute( 'id' );
		_self.player = app.videoPlayerManager.getPlayerWithName( playerId );
		var videoId = modal.config.current.uiArgs.mediaId;
		var contentId = modal.config.current.uiArgs.contentId;

		var runUpdate = function(){

			if( _self.videoLoader && _self.videoLoader.element ){
				_self.videoLoader.removeLoader();
			}

			if ( !videoId )
			{
				var subscriberObject = {
					url : common.createContentPath( 'video', {}, undefined, contentId ),
					method: "GET",
					callback: _self.playVideo,
					target: _self
				};

				core.data.manager.add( subscriberObject );
			}
			else
			{
				_self.playVideo( { mediaId : videoId } );
			}

			_self.player.setMeta( {
				"title": modal.config.current.uiArgs.mediaTitle,
				"description": modal.config.current.uiArgs.mediaDescription,
				"date": modal.config.current.uiArgs.mediaDate,
				"contentId": modal.config.current.uiArgs.contentId
			} );

		};

		if( !_self.player ){

			var loaderElement = document.createElement('div');


			_self.videoLoader = new ui.loader( modal.config.modal, { init : true, loaderTemplate : app.templates[ 'loader' ], append: true } );

			window.addEventListener( 'videoReady' + playerId, function(){
				_self.player = app.videoPlayerManager.getPlayerWithName( playerId );
				runUpdate();
			}, false);
		}
		else{
			runUpdate();
		}

	};

	common.videoList.prototype.playVideo = function( data )
	{
		var _self = this;
		var modalContentWrapClass = _self.modal.config.modalContentWrapClass || '';
		var videoModalWrap = document.getElementsByClassName(modalContentWrapClass);

		_self.player.playVideoWithID( data.mediaId );

		if ( videoModalWrap.length > 0 ) {
			videoModalWrap[0].addEventListener('click', function (evt) {
				//If the user has clicked outside the video/social context, close the modal
				if (evt.target.className === modalContentWrapClass) {
					_self.modal.close();
				}
			});
		}
	};

	common.videoList.prototype.stopPlayer = function( modal ){
		var playerId = modal.config.modal.querySelector( '[data-player]' ).getAttribute( 'id' );
		var player = app.videoPlayerManager.getPlayerWithName( playerId );

		if( player ){
			player.stopVideo();
		}
	};

}( PULSE.app, PULSE.ui, PULSE.app.common, PULSE.core ));
/*globals PULSE, PULSE.app, PULSE.app.common */

( function( common, app, core, i18n ) {

	var getBroadcaster = function( broadcasters, matchId )
	{
		if ( broadcasters && broadcasters.length > 0 )
		{
			for ( var i = 0; i < broadcasters.length; i++ )
			{
				if ( broadcasters[ i ].fixture && broadcasters[ i ].fixture.id && broadcasters[ i ].fixture.id == matchId )
				{
					return broadcasters[ i ];
				}
			}
		}
	};

	common.getBroadcasters = function( element, config ) {

		var _self = this;

		_self.element = element;
		_self.config = ( config ) ? config : {};

		var containerClass = ( config.containerClass ) ? config.containerClass : 'mcNavBroadcasterContainer';
		_self.template = ( config.template ) ? config.template : 'commonmatchbroadcaster';

		_self.matchBroadcasterContainer = _self.element.getElementsByClassName( containerClass );
		var fixtureIds = [];
		var comp = 1;
		for ( var i = 0; i < _self.matchBroadcasterContainer.length; i++ ) {
            var fixtureId = _self.matchBroadcasterContainer[i].getAttribute('data-id');

            if (fixtureId && fixtureIds.indexOf(fixtureId) === -1) {
                fixtureIds.push(fixtureId);
            }

            if (_self.matchBroadcasterContainer[i].getAttribute('data-comp')) {
                comp = _self.matchBroadcasterContainer[i].getAttribute('data-comp');
            }
        }

		if ( fixtureIds.length > 0 ) {
			_self.initBroadcastData( fixtureIds, comp )
		}
	};

	common.getBroadcasters.prototype.initBroadcastData = function( fixtures, comp )
	{
		var _self = this;

		var config = {
			pageSize : 100,
			fixtureIds : fixtures,
			comps : comp
		};

		var subscriberObject = {
			url : app.common.createApiPath( 'broadcasting-schedule.all', config ),
			method: "GET",
			callback: _self.renderBroadcastingSchedule,
			target: this
		};

		core.data.manager.add( subscriberObject );
	};

	common.getBroadcasters.prototype.renderBroadcastingSchedule = function( data, config )
	{
		var _self = this;
		if ( data && data.content && data.content.length > 0 && _self.matchBroadcasterContainer )
		{
			for ( var i = 0; i < _self.matchBroadcasterContainer.length; i++ )
			{
				var thisBroadcaster = getBroadcaster( data.content, _self.matchBroadcasterContainer[ i ].getAttribute( 'data-id' ) );
				if ( thisBroadcaster && thisBroadcaster.broadcasters && thisBroadcaster.broadcasters.length > 0 )
				{
					var model = thisBroadcaster.broadcasters[ 0 ];
					if ( thisBroadcaster.broadcasters.length > 1 )
					{
						model.multipleLabel = i18n.lookup( 'label.multiplebroadcasters' );
					}
					_self.matchBroadcasterContainer[ i ].innerHTML = Mustache.render( app.templates[ _self.template ], model );
				}
			}
		}
	}

} )( PULSE.app.common, PULSE.app, PULSE.core, PULSE.I18N );

/*globals PULSE, PULSE.app*/


( function( app, common, i18n ) {

	//Social constants
	var TWITTER = 'twitter';
	var FACEBOOK = 'facebook';
	var WHATSAPP = 'whatsapp';
	var GOOGLEPLUS = 'googleplus';
	var EMAIL = 'email';

	var socialLinks = {
        "twitter" : { "shareUrl" : "http://www.twitter.com/intent/tweet?text=" },
        "facebook" : { "shareUrl" : "http://www.facebook.com/sharer/sharer.php?u=" },
        "googleplus" : { "shareUrl" : "http://plus.google.com/share?url=" },
        "whatsapp" : { "shareUrl" : "whatsapp://send?text=" },
        "email" : { "shareUrl" : "mailto:?body="  }
    };

	var defaultWindowConfiguration = {
        "width" : "500",
        "height" : "500",
        "menubar" : 0,
        "location" : 1,
        "resizable" : 0,
        "scrollbars" : 0,
        "status" : 0,
        "titlebar" : 0,
        "toolbar" : 0
    };


    /**
     * Create a set of basic functionality that social widgets will share
     * Individual social helpers can be extended with extra functions in ./social-service
     *
     * @param {string} serviceName name of the social service, should correlate to an entry
     * in socialLinks object
     *
     * @constructor
     */
    var socialHelper = function( serviceName ) {

        this.name = serviceName;
    };

	/**
	 * Share a page url or the current page url ( if no url passed ) to the social
	 * media site with which the instance was created
	 *
	 * @param {string} url 		 the url to share on the social media site
	 * @param {string} body 	 the share message
	 * @returns {string} url 	 the encoded url
	 */
	socialHelper.prototype.buildShareUrl = function( url, body ) {
		var shareType = this.name;
		var shareURL = url || window.location.href;
		var shareComponent = shareURL;

		//Just share the URL if facebook or Google+
		if ( shareType === FACEBOOK || shareType === GOOGLEPLUS ) {
            return socialLinks[ shareType ].shareUrl + encodeURIComponent( shareComponent );
		} else if (body) {
            shareComponent = body;
            if( shareType  === TWITTER ) {
                shareComponent += " " + i18n.lookup( 'label.via' ) + " @premierleague " + shareURL;
            } else {
                shareComponent += " " + shareURL;
            }
		}

		return socialLinks[ shareType ].shareUrl + encodeURIComponent( shareComponent );
	};

	/**
	 * creates a string representation of the configuration object provided so it can be
	 * used in the call to window.open, for example;
	 *
	 * "menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes"
	 *
	 * @param {object} windowConfiguration the configuration object to stringify
	 * @returns {string} comma separated list of configuration parameters
	 */
	socialHelper.prototype.makeWindowConfigurationString = function( windowConfiguration ) {
		var config = windowConfiguration || defaultWindowConfiguration;

		var settings = Object.keys( config );
		var configurationString = "";

		for ( var i = 0; i < settings.length; i++ ) {
			configurationString += settings[i] + '=' + config[ settings[i] ];

			if ( i < settings.length -1 ) {
				configurationString += ','
			}
		}

		return configurationString;

	};

	/**
	 * create a share url for the service with which the instance was created and open a
	 * new window using the parameters provided, or the defaults.
	 *
	 * @param {string} url   optionally provide a specific url to link to, otherwise the current window.location
	 * 				         will be used to create a share url link
	 * @param {string} body the share message to include if present
	 * @param {object} windowConfiguration optionally provide a window configuration object
	 */
	socialHelper.prototype.sharePage = function( url, windowConfiguration, body ) {
        var shareURL = this.buildShareUrl(url, body);
        var config = this.makeWindowConfigurationString(windowConfiguration);

        window.open(shareURL, "_blank", config);
    };

	/**
	 * keep the social helpers under the app object
	 *
	 * @type {{twitter: socialHelper, facebook: socialHelper, google: socialHelper}}
	 */
	app.socialHelpers = {
		"twitter" : new socialHelper( TWITTER ),
		"facebook" : new socialHelper( FACEBOOK ),
		"google" : new socialHelper( GOOGLEPLUS ),
		"email" : new socialHelper( EMAIL ),
		"whatsapp" : new socialHelper( WHATSAPP )
	};

} )( PULSE.app, PULSE.app.common, PULSE.I18N );

/*globals PULSE, PULSE.common */

( function( common ) {

	/**
	 * interface that should be implemented by an object/widget that wishes to
	 * communicate with a filter drop-down element, as part of a delegate pattern
	 *
	 * @constructor
	 */
	common.filterDropdownDelegate = function() {

	};

	/**
	 * Dropdown will call this method when their selected method updated
	 * providing a reference to themselves so the state can be interrogated
	 * by the controller
	 *
	 * @param {PULSE.common.dropDownItem} dropdown the dropdown instance ( PULSE.common.dropDownItem )
	 */
	common.filterDropdownDelegate.prototype.didUpdate = function( dropdown ) {

	};

	common.filterDropdownDelegate.prototype.didFinishUpdate = function( dropdown ) {

	};

	/**
	 * this method will be called on the delegate when the dropdown is reset
	 * to its default state ( weather this is a default string or a specific
	 * element )
	 *
	 * @param {PULSE.common.dropDownItem} dropdown the dropdown instance ( PULSE.common.dropDownItem )
	 */
	common.filterDropdownDelegate.prototype.didClear = function( dropdown ) {

	};

	/**
	 * this method will be called on the implementing delegate object when
	 * the dropdown is opened and options displayed
	 *
	 * @param {PULSE.common.dropDownItem} dropdown the dropdown instance ( PULSE.common.dropDownItem )
	 */
	common.filterDropdownDelegate.prototype.didOpen = function( dropdown ) {

	};

	/**
	 * this method will be called on the implementing delegate object when
	 * the dropdown is closed and options hidden
	 *
	 * @param {PULSE.common.dropDownItem} dropdown the dropdown instance ( PULSE.common.dropDownItem )
	 */
	common.filterDropdownDelegate.prototype.didClose = function( dropdown ) {

	};



} )( PULSE.app.common );
/*globals PULSE, PULSE.common */

( function( common ) {

	/**
	 * Interface that must be implemented by an object/widget that wants to communicate
	 * to and from a list filter controller, as part of a delegate pattern
	 *
	 * @constructor
	 */
	common.filterControllerDelegate = function() {

	};

	/**
	 * delegate method called on the implementing object to specifically indicate that the
	 * filter controller has just reset its state to its original position.
	 */
	common.filterControllerDelegate.prototype.filterCleared = function() {

	};

	/**
	 * this delegate method will be called by the controller on an update of the filter group state.
	 * e.g. a new selection or a filter has been cleared. The option that has been changed will be
	 * indicated by being passed through as the optionChanged / newValue parameters
	 *
	 * @param {PULSE.common.dropDownItemState[]} fullState the full state object representing
	 * the current state of the filter-group
	 */
	common.filterControllerDelegate.prototype.filterUpdated = function( fullState ) {

	};

} )( PULSE.app.common );
/*globals PULSE, PULSE.common, PULSE.core */


( function( app, common, templates, core, i18n ) {

	/**
	 * @namespace common.dropDownItem.private
	 */

	/**
	 * initialise the render of the dropdown with a minimal amount of information
	 * no data from server needed at this point
	 *
	 * @param {PULSE.common.dropDownItem} _self context reference to calling object instance
	 */
	var initRender = function( _self ) {

		_self.initialisedOptions = false;

		//attempt to get url parameter and set state accordingly
		if( _self.config.urlParameter ) {

			var urlState = core.url.getParam( _self.config.urlParameter );
			if( urlState ) {
				_self.autoInitStateId = urlState;
			}
			//url init always takes precedence
		}

		if( _self.defaultOptionId && !_self.autoInitStateId ) {
			_self.autoInitStateId = _self.defaultOptionId;
		}


		if( _self.config.data && ( !_self.config.dependencies || _self.config.dependencies.length < 1 ) ) {
			_self.renderOptions();
		}

		if( _self.config.dataUrl && ( !_self.config.dependencies || _self.config.dependencies.length === 0 ) && !_self.config.dataDependency ) {
			// no initial data, try to fetch from url, as long as item has no external dependencies

			//indicate loading
			_self.setLoading();
			_self.subscriber.url = _self.config.dataUrl;
			core.data.manager.add( _self.subscriber );


		}


	};

	/**
	 * create the initial markup for the dropdown. further updates will involve
	 * updating the options that are available. This will create the outer containing
	 * divs.
	 *
	 * @param {PULSE.common.dropDownItem} _self context reference to calling object instance
	 * @param {object} configuration config containing the options to render ( if available )
	 */
	var renderDropdown = function( _self, configuration ) {


		//if config data and default id then set the defualt item
		//straight away

		//otherwise set on render options
		var defaultItem = undefined;

		//if we have the data and an option id we can set a default item
		/*
		if( configuration.data && configuration.defaultOptionId ) {

			configuration.data.map( function( item ) {
				if( common.getNestedItemFromPath( item, configuration.dataIdPath ) == configuration.defaultOptionId ) {
					defaultItem = item;
					_self.state.setState( false, defaultItem[ 'optionName' ], defaultItem[ 'optionId' ], false, h );
				}
			} )
		}
		*/

		if ( configuration.label )
		{
			configuration.label = i18n.lookup( 'label.' + configuration.label );
		}

		if ( configuration.defaultOption )
		{
			configuration.defaultOption = i18n.lookup( 'label.' + configuration.defaultOption );
		}

		if ( configuration.data && configuration.data.length > 0 )
		{
			configuration.data.map( function( item )
			{
				if ( item.optionLabel )
				{
					item.optionName = i18n.lookup( 'label.' + item.optionLabel );
				}
			} );
		}

		core.dom.appendDomString( _self.container, Mustache.render( templates.listfilter, {
			dropdown: configuration,
			defaultItem: defaultItem,
			visibleOnMobile: _self.config.visibleMobile || false,
			getIndex: ( function() {

				var index = 0;
				function increment() { return index++ }

				return function() {
					return function( text, render ) {
						return increment();
					}
				}
			} )()
		}) );


		//now that we have created the dropdown lets keep a reference to it
		_self.element = _self.container.querySelector( '[data-dropdown-block="' + _self.config.name +'"]' );
		_self.current = _self.container.querySelector( '[data-dropdown-current="' + _self.config.name +'"]' );
		_self.list = _self.container.querySelector( '[data-dropdown-list="' + _self.config.name +'"]' );

		if( _self.defaultOptionId && !_self.autoInitStateId ) {
			_self.autoInitStateId = _self.defaultOptionId;
		}

		//set listeners on markup that was just added to the dom
		//setListeners( _self );

	};

	/**
	 * set the element event listeners for the dropdown
	 *
	 * @param {PULSE.common.dropDownItem} _self context reference to calling object instance
	 */
	var setListeners = function( _self ) {

		['keypress', 'click'].forEach(function(eventType){
			
			var current = _self.element.querySelector( '[data-dropdown-current]' );

			if ( !current.getAttribute( 'data-listen-' + eventType ) )
			{
				// open/close the element
				current.addEventListener(eventType, function( evt ) {
					if (evt.which === 13 || evt.type === 'click') {
						_self.showHide();
					}
				});
				current.setAttribute( 'data-listen-' + eventType, true );
			}

			var thisList = _self.element.querySelector( '[data-dropdown-list]' )
			if ( !thisList.getAttribute( 'data-listen-' + eventType ) )
			{
				//option select
				thisList.addEventListener( eventType, function( evt ) {
					if (evt.which === 13 || evt.type === 'click') {
						var target = evt.target;

						// update the internal object state
						_self.state.setState( false, target.getAttribute( 'data-option-name' ), target.getAttribute( 'data-option-id' ), false, target.getAttribute( 'data-option-index' ) );
						//pass reference with updated internal state to delegate
						_self.setOption( _self.state.name );
						//_self.delegate.didUpdate( _self );
						_self.delegate.didFinishUpdate( true );
						//console.log( "DID FINISH UPDATE  - - USER EVENT" )
						_self.showHide();
					}
				} );
				thisList.setAttribute( 'data-listen-' + eventType, true );
			}
		});

	};


	/**
	 * using the dataUrl provided in the configuration along with the dependencies object
	 * create a url to use with the PULSE.core data manager. Url will be provided in a
	 * format string structure using handlebars syntax "{{dep_name}}"
	 *
	 * @param {PULSE.common.dropDownItem} _self context reference to calling object instance
	 */
	var createDataUrl = function( _self ) {

		var url = _self.config.dataUrl || false;

		for( var x = 0; x < _self.config.dependencies.length; x++ ) {

			//attempt to replace format string with dependancy parameter
			if( url ) {
				var depName = _self.config.dependencies[ x ];

				// dependent option has not been selected, therefor we
				// cannot guarantee that we have enough information to
				// populate the dropdown
				if( _self.dependencyMap[ depName ].id == -1 ) {
					//ergo sum any information currently displayed is wrong
					_self.list.innerHTML = "";
					return false;
				}

				//replace using url as format string
				url = url.replace( "{{" + depName + "}}", _self.dependencyMap[ depName ].id );
			}
		}
		//add any methodDeps to url from filterGroup
		if( _self.config.depMethods ){
			for ( var i = 0; i < _self.config.depMethods.length; i++ ){

				var depMethod = _self.config.depMethods[ i ];

				var dep = _self.dependencyMap[ depMethod.dep ];

				//replace by method using url as format string
				url = url.replace( "{{" + depMethod.label + "}}", app.filterData[depMethod.method]( dep.id ) );
			}
		}
		return url;
	};

	var addMethodDeps = function( _self ){
		var url = _self.subscriber.url || false;
		if( _self.config.depMethods ){
			for ( var i = 0; i < _self.config.depMethods.length; i++ ){

				var depMethod = _self.config.depMethods[ i ];

				var dep = _self.dependencyMap[ depMethod.dep ];

				//replace by method using url as format string
				url = url.replace( "{{" + depMethod.label + "}}", app.filterData[depMethod.method]( dep.id ) );
			}
		}
		return url;
	};


	/**
	 * dropDownItem 'class' that defines the operation of a single dropdown element
	 * a dropdown will use the following templates to define it_self;
	 *
	 * 		./template/listfilter.mst
	 *			- initially create the drop down using any data available on initialisation
	 * 		./template/listfilteroption.mst
	 * 			- render a option list, used when options are dynamic and need updating
	 *
	 * Dropdown Item will use HTML data attributes to define specific parts of the dropdown
	 * the data attributes are combined with the dropdown name so they don't necessarily have to
	 * reside in a specific div, or in a specific order. The basic layout of the HTML ( outlined
	 * here by data attributes ) ;
	 *
	 * 	< data-dropdown-block data-dropdown-default >
	 * 		< data-dropdown-current >
	 * 		< data-dropdown-list >
	 * 			< data-option-name data-option-id />
	 * 			< data-option-name data-option-id />
	 * 			< data-option-name data-option-id />
	 * 			...
	 * 			< data-option-name data-option-id />
	 *		</>
	 *	</>
	 *
	 * @param {HTMLElement} containingElement the div/DOM element which the dropdown will be appended to
	 * @param {PULSE.common.filterDropdownDelegate} delegate an object implementing the dropdown delegate interface
	 * @param {object} config configuration object ( defined as an element in a PULSE.core.filterGroups array )
	 *
	 * @constructor
	 */
	common.dropDownItem = function( containingElement, delegate, config  ) {
		var _self = this;

		_self.container = containingElement;
		_self.delegate = delegate;
		_self.config = config;
		_self.element = false;
		_self.current = false;
		_self.openClass = 'open';
		_self.state = new common.dropDownItemState();
		_self.dependencyMap = false;
		_self.currentListData = false;
		_self.subscriber = {
			target: _self,
			headers: [ app.accountHeader ],
			method: "GET",
			callback: _self.renderOptions,
			constant: true,
			forceCallback: true
		};

		_self.autoInitStateId = undefined;
		_self.defaultOptionId = config.defaultOptionId || false;

		if( _self.config.dependencies && _self.config.dependencies.length > 0  ) {

			// create a map of PULSE.common.dropDownItemState objects
			_self.dependencyMap = {};

			for( var j = 0; j < _self.config.dependencies.length; j++ ) {
				_self.dependencyMap[ _self.config.dependencies[ j ] ] = new common.dropDownItemState();
			}
		}

		if( _self.config && _self.config.name ) {
			//we have data so render it
			renderDropdown( _self, _self.config );
		}
	};

	common.dropDownItem.prototype.init = function() {
		var _self = this;

		initRender( _self );
	};

	/**
	 * called by the filter controller when it identifies one of the drop downs dependencies
	 * have been updated. This instance should then take action in order
	 * to update available options
	 *
	 * @param {string} dependencyName  the name given to the dropdown that this instance is dependant on
	 * @param {PULSE.common.dropDownItemState} updatedDependency dropdown state
	 */
	common.dropDownItem.prototype.updateOptionsFromDependencies = function( dependencyName, updatedDependency ) {
		var _self = this;

		//reset dropdown as dependencies have changed - notify delegates
		//the dropdown is then inactive
		_self.displayDefaultOption( false, false, true );
		_self.setInactive();
		if( _self.delegate ) {
			_self.delegate.dropdownRendered( _self.config.index );
		}

		// Run through dependencies and update options / delegates as required
		if( !_self.isloading ) {

			//console.log( 'dropdown ', _self.config.name, ' was informed that its dependancy ', dependencyName, ' updated to ', updatedDependency );

			//update local representation of dependency
			if( _self.dependencyMap[ dependencyName ] ) {
				_self.dependencyMap[ dependencyName ] = updatedDependency;
			}

			//console.log( ' --> will update by calling api endpoint ', createDataUrl( _self ) );
			//console.log( ' --> new dep rep ', _self.dependencyMap );

			if( _self.config.dependancyCheck && typeof _self.config.dependancyCheck === "function" ) {
				var check = _self.config.dependancyCheck( _self.dependencyMap );
				if ( !check )
				{
					return;
				}
			}

			// check for a data dependency, if one exists don't bother checking anything related to urls
			// just get the data from the selected dropdown option
			if( _self.config.dataDependency && dependencyName === _self.config.dataDependency &&
				updatedDependency.list ) {
				if( updatedDependency.index != -1 ) {
					//if we actually updated to a data value and not the default
					_self.renderOptions( updatedDependency.list[ updatedDependency.index ] );
					//only set item active if the logical dependancy rather than just the data dep. is
					//satisfied
					_self.setActive();
				} else {
					_self.state.list = [];
					_self.setInactive();
					_self.displayDefaultOption( false, false, true );
				}
				if( !_self.autoInitStateId || _self.defaultItem ) {
					_self.displayDefaultOption();
				}
				_self.autoInitStateId = undefined;

				return;
			}

			// if no data dep. attempt to generate a data url from the updated
			// dependency
			_self.subscriber.url = createDataUrl( _self );
			if( _self.subscriber.url ) {
				//set loading
				_self.setLoading();
				core.data.manager.add( _self.subscriber );
			}
			if( _self.config.data ) {
				_self.renderOptions( undefined, undefined, true );
			}
		}


	};

	common.dropDownItem.prototype.getAutoOptionIndex = function()
	{
		var _self = this;

		if ( _self.autoInitStateId && _self.options && _self.options.length > 0 )
		{
			for ( var i = 0; i < _self.options.length; i++ )
			{
				if ( _self.options[ i ].optionId == _self.autoInitStateId )
				{
					return i;
				}
			}
		}
		return -1;
	}

	/**
	 * set the dropdown to display its default item, as defined in the config,
	 * also update the internal state and inform the delegate of the
	 * update
	 */
	common.dropDownItem.prototype.displayDefaultOption = function( callUpdate, init, forceAllOption ) {
		var _self = this;

		var autoIndex = _self.getAutoOptionIndex();
		if ( autoIndex > -1 && _self.options[ autoIndex ] && init )
		{
			var option = _self.options[ autoIndex ];
			_self.state.setState( false, option[ 'optionName' ], option[ 'optionId' ], false, autoIndex );
			_self.setOption( option[ 'optionName' ] );
		}
		else if( _self.config.defaultOption && ( _self.autoInitStateId === '-1' || forceAllOption ||  ( _self.config.defaultIndex == undefined &&
			( ( !_self.defaultOptionId || _self.defaultOptionId == -1 ) || _self.state.list.length === 0 ) ) ) )
		{
			_self.state.setState( false, _self.config.defaultOption, -1, false, -1 );
			_self.setOption( _self.config.defaultOption );
		}
		else if ( _self.defaultOptionId && _self.defaultItem )
		{
			//fallback to default set

			var exists = false;
			//as long as it still exists in the list
			for( var s = 0; s < _self.state.list.length; s++ ) {

				if( core.object.getNestedItemFromPath( _self.config.dataIdPath, _self.state.list[ s ] ) ==  _self.defaultItem[ 'optionId' ] ) {
					exists = true;
				}

			}

			// if we can find it set it otherwise set the first item as default
			if( exists ) {
				_self.state.setState( false, _self.defaultItem[ 'optionName' ], _self.defaultItem[ 'optionId' ], false, _self.defaultItemIndex );
			} else {
				_self.state.setState( false,
					core.object.getNestedItemFromPath( _self.config.dataNamePath, _self.state.list[ 0 ] ),
					core.object.getNestedItemFromPath( _self.config.dataIdPath, _self.state.list[ 0 ] ), false, 0 );
			}

			//pass reference with updated internal state to delegate
			_self.setOption( _self.state.name );
		} else if ( _self.state.list && _self.state.list.length > 0 ) {

			/*
			 * complete laste resort of setting the first option when none of the above are defined
			 */
			 var index = _self.config.defaultIndex || 0;

			if ( index > _self.state.list.length )
			{
				index = _self.state.list.length - 1;
			}
			if ( index < 0 )
			{
				index = 0;
			}

			_self.state.setState( false,
				core.object.getNestedItemFromPath( _self.config.dataNamePath, _self.state.list[ index ] ),
				core.object.getNestedItemFromPath( _self.config.dataIdPath, _self.state.list[ index ] ), false, index );
			_self.setOption( _self.state.name );

		}

		_self.hide();


	};

	/**
	 * set the text that is displayed in the 'current' section of the dropdown
	 * markup structure. This should not really be called on its own but
	 * rather accessed through a call to displayDefaultOption
	 *
	 * @param {string} optionText the text content to display
	 */
	common.dropDownItem.prototype.setOption = function( optionText ) {
		var _self = this;

		_self.current.textContent = optionText;
		_self.checkActive();

		_self.delegate.didUpdate( _self );
	};

	/**
	 * check if the active state is valid
	 * add active class if it is
	 *
	 */
	common.dropDownItem.prototype.checkActive = function( ) {
		var _self = this;

		if( _self.state.index != -1 ){
			core.style.addClass( _self.element, 'active' ) 
		}
		else{
			core.style.removeClass( _self.element, 'active' ) 			
		}
	};	

	/**
	 * restore the dropdown to a known state
	 *
	 * @param {PULSE.common.dropDownItemState} state the stat object to restore the dropdown from
	 */
	common.dropDownItem.prototype.restoreOptions = function( state ) {
		var _self = this;

		_self.initialisedOptions = false;
		_self.state = state;

		//restore state to new object
		var states = Object.keys( state );
		_self.state = new common.dropDownItemState();

		for( d = 0; d < states.length; d++ ) {
			_self.state[ states[ d ] ] = state[ states[ d ] ];
		}

		//attempt to get url parameter and set state accordingly
		if( _self.config.urlParameter ) {

			var urlState = core.url.getParam( _self.config.urlParameter );
			if( urlState ) {
				_self.autoInitStateId = urlState;
			}
		}

		_self.checkActive();

		_self.renderOptions( false, false, true );

	};

	/**
	 * given a data-set get a array of option objects;
	 *
	 *	[ { optionName: "...", optionId: "..." }, { op... ]
	 *
	 * using the path (string array) to the attributes defined in the
	 * configuration, as this will be unique to each data case. Then
	 * render this list
	 *
	 * @param {object} data the data object returned by the data manager
	 */
	common.dropDownItem.prototype.renderOptions = function( data, sub, restore ) {
		var _self = this;

		if( !_self.initialisedOptions && _self.config.data ) {
			data = _self.config.data;
		}

		//keep list data in case any dropdowns are data dependant on _self
		if( !restore ) {
			_self.state.list = core.object.getNestedItemFromPath( _self.config.dataListPath, data );
		}

		if( _self.config.listTransform && typeof _self.config.listTransform === "function" ) {
			_self.state.list = _self.config.listTransform( _self.state.list, _self.element );
		}

		if ( !_self.state.list && data )
		{
			_self.state.list = data;
		}

		_self.options = [];
		//_self.defaultItem = undefined;

		for( var h = 0; h < _self.state.list.length; h++ ) {

			_self.options.push( {
				optionName: core.object.getNestedItemFromPath( _self.config.dataNamePath, _self.state.list[ h ] ),
				optionId: core.object.getNestedItemFromPath( _self.config.dataIdPath, _self.state.list[ h ] )
			} );

			if( _self.autoInitStateId && !_self.initialisedOptions && ( _self.options[ h ].optionId == _self.autoInitStateId ) ) {

				_self.defaultItem = _self.options[ h ];
				_self.defaultItemIndex = h;
				// update the internal object state
				_self.state.setState( false, _self.defaultItem[ 'optionName' ], _self.defaultItem[ 'optionId' ], false, h );
				//pass reference with updated internal state to delegate
				_self.setOption( _self.state.name );

				if( !restore ) {
					//_self.delegate.didUpdate( _self );
				}

				//_self.autoInitStateId = undefined;
			}
		}

		/*
		if( ( _self.autoInitStateId && !_self.initialisedOptions && _self.autoInitStateId == -1 ) ||
			( _self.defaultOptionId && !_self.initialisedOptions && _self.defaultOptionId == -1 )) {
			// attempting to auto init from a default option
			_self.displayDefaultOption();
		}
		*/

		_self.displayDefaultOption( false, true );

		_self.list.innerHTML = Mustache.render( templates.listfilteroption, {
			config: _self.config,
			optionData: _self.options,
			getIndex: ( function() {
				var index = 0;
				function increment() { return index++ }
				return function() {
					return function( text, render ) {
						return increment();
					}
				}
			} )()
		});

		if( restore ) {

			_self.autoInitStateId = undefined;
		}

		_self.setActive();
		if( _self.isloading ) {
			_self.stopLoading();
		}
		//_self.delegate.didUpdate( _self );
		_self.initialisedOptions = true;

		if( _self.delegate ) {
			_self.delegate.dropdownRendered( _self.config.index );
		}

		setListeners( _self );

	};


	/**
	 * add a loading icon ( see ui kit ) to the dropdown
	 */
	common.dropDownItem.prototype.setLoading = function() {
		var _self = this;

		_self.isloading = true;

		if ( !_self.loaderElement )
		{
			_self.loaderElement = document.createElement( 'div' );

			if( _self.loaderElement ) {
				_self.loaderElement.innerHTML = templates.loader;
				_self.loaderElement = _self.loaderElement.children[ 0 ];
			}
		}

		_self.element.insertBefore( _self.loaderElement, _self.element.firstChild )

	};

	/**
	 * remove the llading div from the dropdown
	 */
	common.dropDownItem.prototype.stopLoading = function() {
		var _self = this;

		_self.isloading = false;

		if( _self.loaderElement ) {
			_self.element.removeChild( _self.loaderElement );
			_self.loaderElement = undefined;
		}

	};

	/**
	 * remove the inactive class from the dropdown
	 */
	common.dropDownItem.prototype.setActive = function() {
		var _self = this;

		_self.element.classList.remove( 'inactive' );

	};

	/**
	 * set the dropdown inactive, applying disbaled styles for it
	 */
	common.dropDownItem.prototype.setInactive = function() {
		var _self = this;

		_self.element.classList.add( 'inactive' );

	};

	/**
	 * invert the visible state of the option dropdown, update the internal state and
	 * inform the delegate object of the change
	 */
	common.dropDownItem.prototype.showHide = function() {
		var _self = this;

		//showing / hiding is only valid if the dropdown actually has content
		if( _self.list.children.length > 0 && _self.isActive() ) {
			_self.list.children[0].focus();
			_self.element.classList.toggle( _self.openClass );
			_self.state.open = _self.element.classList.contains( _self.openClass );
			//notify the delegate object that _self dropdown has closed / opened
			if ( _self.state.open ) {
				_self.delegate.didOpen( _self );
				return;
			}
			_self.delegate.didClose( _self );
		}
	};

	common.dropDownItem.prototype.isActive = function()
	{
		var _self = this;

		return !_self.element.classList.contains( 'inactive' );
	}

	/**
	 * explicitly close the dropdown item and call the delegate method
	 */
	common.dropDownItem.prototype.hide = function() {
		var _self = this;

		_self.element.classList.remove( _self.openClass );
		_self.state.open = false;
		_self.delegate.didClose( _self );
	};

} )( PULSE.app, PULSE.app.common, PULSE.app.templates, PULSE.core, PULSE.I18N );

/*globals PULSE, PULSE.common */

( function( common ) {

	/**
	 * 'class' to define a structure for representing the state option
	 * state of a dropdown element. Can be created with or without
	 * initialisation params. '-1' is used as an indicator for a dropdown
	 * being set on its default item / setting
	 *
	 * @param {boolean} open bool indicator of weather the dropdown
	 * is currently open or closed
	 * @param {string} name the name of the option currently selected
	 * @param {integer} id the identifier that can be used to reference the value given by name
	 * e.g. in api calls / look-ups etc.
	 * @param {Array<object>} list the array of objects that the dropdown is deriving its options from
	 * @param {integer} index the index in the list of the currently selected option
	 *
	 * @constructor
	 */
	common.dropDownItemState = function( open, name, id, list, index ) {

		this.open = open || false;
		this.name = name || false;
		this.id = id || -1;
		this.list = list || false;
		this.index = index || -1;

	};

	/**
	 * set the internal state.
	 *
	 * @param {boolean} open bool indicator of weather the dropdown
	 * is currently open or closed
	 * @param {string} name the name of the option currently selected
	 * @param {integer} id the identifier that can be used to reference
	 * the value given by name e.g. in api calls / look-ups etc.
	 * @param {Array<object>} list the array of objects that the dropdown is deriving its options from
	 * @param {integer} index the index in the list of the currently selected option
	 */
	common.dropDownItemState.prototype.setState = function( open, name, id, list, index ) {

		this.open = open;
		this.name = name;
		this.id = id ? id : this.id;
		this.list = list ? list : this.list;
		this.index = typeof parseInt( index ) === 'number' ? index : this.index;

	};

} )( PULSE.app.common );
/*globals PULSE, PULSE.app, PULSE.I18N */


( function( app, common, core, templates, i18n ) {

	var ENTER_KEY = 13;

	/**
	 * @namespace common.listFilterController.private
	 */

	/**
	 * set listeners for the controller
	 *
	 * @param {PULSE.common.listFilterController} _self context reference to calling object instance
	 */
	var setListeners = function( _self ) {

		window.onpopstate = function( evt ) {

			if( evt.state && evt.state.length ) {
				for( var t = 0; t < evt.state.length; t++  ) {
					_self.dropdowns[ evt.state[ t ].name ].restoreOptions( evt.state[ t ].state );
				}
			}
			_self.didFinishUpdate( false );
		};

		if ( _self.advancedFilterButtons && _self.advancedFilterButtons.length > 0 )
		{
			_self.advancedFilterButtons[ 0 ].addEventListener( 'click', function( evt ) {
				_self.element.classList.toggle( 'open' );
			} );
		}

		if ( _self.advancedFilterButtons && _self.advancedFilterButtons.length > 1 )
		{
			_self.advancedFilterButtons[ 1 ].addEventListener( 'click', function( evt ) {
				_self.element.classList.remove( 'open' );
			} );
		}

		if ( _self.mobileHeader )
		{
			_self.mobileHeader.addEventListener( 'click', function( evt ) {
				_self.element.classList.remove( 'open' );
			} );
		}


	};

	/**
	 * update any related dropdowns in the controller with new data
	 *
	 * @param {PULSE.common.listFilterController} _self context reference to calling object instance
	 * @param {PULSE.common.dropDownItem} culpritDropdown dropdown whose dependancies need updating
	 */
	var updateDependencies = function( _self, culpritDropdown ) {

		// a drop down was updated, look for other drop downs in the filter controller instance that
		// have the updated drop down as a dependency in their config
		var ddNames = Object.keys( _self.dropdowns );

		for( var k = 0; k < ddNames.length; k++ ) {

			if( _self.dropdowns[ ddNames[ k ] ].config.dependencies &&
				_self.dropdowns[ ddNames[ k ] ].config.dependencies.indexOf( culpritDropdown.config.name ) > -1 ) {

				//pass dependency name and updated state to the controller
				_self.dropdowns[ ddNames[ k ] ].updateOptionsFromDependencies( culpritDropdown.config.name, culpritDropdown.state )
			}
		}

	};

	/**
	 * create an instance of a dropdown for each configuration object
	 *
	 * @param {PULSE.common.listFilterController} _self context reference to calling object instance
	 * @param {PULSE.common.config.filterGroup} dropdowns array of dropdownItem configurations
	 */
	var createDropdowns = function( _self, dropdowns, config ) {

		//add the mobile header to the page
		_self.mobileHeader = core.dom.appendDomString( _self.element, Mustache.render( templates.mobileheader, {
			title: "Adjust Filters"
		} )  );


		if( _self.defaultItemIds ) {
			_self.defaultItemIds = _self.defaultItemIds.split( ',' );
		}

		_self.renderedDropdowns = [];
		_self.dropdownsRendered = false;

		if( dropdowns.length == 1 ){
			core.style.addClass( _self.element, 'singleFilter' );
		}
		//first create
		for( var y = 0; y < dropdowns.length; y++ ) {

			var dd = dropdowns[ y ];

			// a default item id set in the config takes precendence
			// and default option takes precedence over that
			if( _self.defaultItemIds  && _self.defaultItemIds[ y ]
				&& !dd[ 'defaultOptionId' ] ) {

				dd[ 'defaultOptionId' ] = _self.defaultItemIds[ y ];
			}

			// var urlParam = common.getParameterByName( dd[ 'urlParameter' ] );
			// if ( urlParam != undefined )
			// {
			// 	dd[ 'initialOptionId' ] = urlParam;
			// }
			dd[ 'index' ] = y;

			dd[ 'visibleMobile' ] = y === (dropdowns.length - 1); // have the last filter always be visible on mobile

			_self.dropdowns[ dd.name ] = new common.dropDownItem( _self.element, _self, dd )
		}

		//then explicitly init
		for( y = 0; y < dropdowns.length; y++ ) {

			var ddn = dropdowns[ y ];

			_self.dropdowns[ ddn.name ].init();
		}

		//add the mobile header to the page
		_self.advancedFilterButtons = core.dom.appendDomString( _self.element, Mustache.render( templates.mobilefooter, {
			title: "Adjust Filters"
		} ), true, true );

		_self.didFinishUpdate( true, true );
	};


	/**
	 * update the url with the parameters specified by ech dropdown and their
	 * current value using the state
	 *
	 * @param {PULSE.common.listFilterController} _self context reference to calling object instance
	 */
	var updateUrlParameters = function( _self ) {

		var dropdowns = Object.keys( _self.dropdowns );

		_self.url = window.location.href;

		dropdowns.map( function( name ) {

			var dd = _self.dropdowns[ name ];
			// only supported if we have supplied a parameter in the configuration
			// as the object must be aware so it can refresh it_self
			if( dd[ 'config' ][ 'urlParameter' ] ) {
				//var thisId = ( dd['autoInitStateId'] != undefined && init ) ? dd['autoInitStateId']  : dd[ 'state' ][ 'id' ];
				var id = dd.isActive() ? dd[ 'state' ][ 'id' ] : -1;
				_self.url = core.url.updateUrlStringParam( _self.url, dd[ 'config' ][ 'urlParameter' ], id );
			}
		} );

		var state = _self.getState();

        if (state) {
            // clone state object
            state = JSON.parse( JSON.stringify(state) );
        }

		history.pushState( state, "", _self.url );
	};

	/**
	 * listFilterController constructor, a list filter controller, implements
	 * dropdown delegate interface.
	 *
	 * @param {HTMLElement} element element to initialise dropdown
	 * @param {PULSE.common.config.filterGroup} componentsConfig
	 * @param {PULSE.common.filterControllerDelegate} delegate delegate object that implements appropriate methods
	 *
	 * @constructor
	 */
	common.listFilterController = function( element, componentsConfig ) {
		var _self = this;

		_self.element = element;
		_self.config = componentsConfig;
		_self.intervalChecker = false;
		_self.dropdowns = {};
		_self.delegate = _self.config.delegate || false;
		_self.noInit = _self.config.noInit;
		_self.updateUrl = (this.element.getAttribute( 'data-use-history' ) || this.element.getAttribute( 'data-use-basic-history' ) ) || false;
		_self.basicHistory = this.element.getAttribute( 'data-use-basic-history' ) || false;
		_self.defaultItemIds = _self.element.getAttribute( 'data-filter-default-ids' ) || false;
		_self.url = false;

		createDropdowns( _self, componentsConfig.dropdowns, _self.config );

		//should we include a reset button with the widget?
		if( _self.element.getAttribute( 'data-reset-available' ) === 'true' ) {

			var reset = document.createElement( 'div' );

			reset.innerHTML = Mustache.render( templates.resetbutton, {
				translator: function() {
					return function( text, render ) {
						return i18n.lookup( text );
					}
				}
			} );
			reset.children[ 0 ].addEventListener( 'click', function() {
				_self.resetAll();
			} );

            reset.children[ 0 ].addEventListener( 'keypress', function( evt ) {
				var keyPressed = evt.keyCode || evt.which;

				if ( keyPressed === ENTER_KEY ) {
                    _self.resetAll();
                }
            } );
			_self.element.appendChild( reset.children[ 0 ] );

		}

		setListeners( _self );

	};

	/**
	 * implement the dropdown controller interface, to nsure that a dropdown instance
	 * part of this instance can call methods without worrying if they exist
	 */
	common.listFilterController.prototype = Object.create( common.filterDropdownDelegate.prototype );

	/**
	 * reset all the filters within this controller
	 */
	common.listFilterController.prototype.resetAll = function() {
		var _self = this;

		var dropdowns = Object.keys( _self.dropdowns );
		for( var t = 0; t < dropdowns.length; t++  ) {
			_self.dropdowns[ dropdowns[ t ] ].displayDefaultOption( true );
		}

		if( _self.delegate ) {
			_self.delegate.filterCleared( _self.getState() );
		}

		if( _self.updateUrl ) {
			updateUrlParameters( _self );
		}
		if( _self.delegate ) {
			_self.waitForLoadComplete( function() {
				_self.delegate.filterUpdated( _self.getState() );
			} );

		}
	};

	/**
	 * get an array of all the dropdown states that are governed by this controller
	 *
	 * @returns {PULSE.common.dropDownItemState[]} array of item states
	 */
	common.listFilterController.prototype.getState = function() {
		var _self = this;

		var dropdowns = Object.keys( _self.dropdowns );
		var state = dropdowns.map( function( name ) {
			if(_self.basicHistory) {
				return {
					name: _self.dropdowns[ name ][ "config" ][ "name" ],
					state: _self.dropdowns[ name ][ "state" ],
					active : _self.dropdowns[ name ].isActive()
				}
			} else {
				return {
					name: _self.dropdowns[ name ][ "config" ][ "name" ],
					state: _self.dropdowns[ name ][ "state" ],
					config : _self.dropdowns[ name ][ "config" ],
					autoId : _self.dropdowns[ name ][ "autoInitStateId" ],
					active : _self.dropdowns[ name ].isActive()
				};
			}
		} );

		return state;
	};


	/**
	 * an element within the filter group updated its value, the filter controller should inform
	 * any dependant drop-downs of this change
	 *
	 * @param {PULSE.common.dropDownItem} dropdown dropdown element that called the method
	 */
	common.listFilterController.prototype.didUpdate = function( dropdown ) {
		var _self = this;

		updateDependencies( _self, dropdown );

	};

	/**
	 * delegate method implementation for a full update completion
	 *
	 * @param {boolean} pushParams weather to update the url or not
	 */
	common.listFilterController.prototype.didFinishUpdate = function( pushParams, init ) {
		var _self = this;

		// notify the delegate that the controllers dropdowns have reached a new state
		// and internal dependencies have been updated
		if( _self.delegate && ( !_self.noInit || !init ) ) {

			_self.waitForLoadComplete( function(){
				if( _self.updateUrl && pushParams && !init ) {
					updateUrlParameters( _self );
				}
				_self.delegate.filterUpdated( _self.getState(), init );
			} );
		}
		else
		{
			if( _self.updateUrl && pushParams && !init ) {
				updateUrlParameters( _self );
			}
		}
	};

	common.listFilterController.prototype.waitForLoadComplete = function( callback ) {
		var _self = this;


		_self.intervalChecker = setInterval( function() {

			var allLoaded = true;
			var dropdowns = Object.keys( _self.dropdowns );
			for( var t = 0; t < dropdowns.length; t++  ) {

				if( _self.dropdowns[ dropdowns[ t ] ].isloading ) {
					allLoaded = false;
				}
			}

			if( allLoaded ) {
				clearInterval( _self.intervalChecker );
				callback();
			}

		}, 500 );

	};

	common.listFilterController.prototype.dropdownRendered = function( dropdown )
	{
		var _self = this;

		if ( _self.renderedDropdowns.indexOf( dropdown ) < 0 )
		{
			_self.renderedDropdowns.push( dropdown );
		}
	}

	common.listFilterController.prototype.hasUrlUpdate = function()
	{
		var _self = this;

		return _self.updateUrl;
	}

	common.listFilterController.prototype.hide = function()
	{
		var _self = this;

		_self.element.style.display = 'none';
	}

	common.listFilterController.prototype.show = function()
	{
		var _self = this;

		_self.element.style.display = '';
	}

} )( PULSE.app, PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N );

/*globals PULSE, PULSE.app, PULSE>I18N */

( function( common ) {


	/**
	 * create an interface for the use of the scroll loader
	 */
	common.scrollLoaderDelegate = function() {

	};

	/**
	 * indicate to the delegate object that the scroller has reached a point
	 * where it has been activated and the delegate should populate the
	 * container with new data
	 */
	common.scrollLoaderDelegate.prototype.didRequestLoad = function() {

	};


} )( PULSE.app.common );

( function( common, core, templates, i18n ) {


	/**
	 * @namespace common.scrollLoader.private
	 */

	/**
	 * draw the loader from the template, ensuring translation is used
	 *
	 * @param {common.scrollLoader} _self contextual reference to the object that is calling the function
	 */
	var drawLoader = function( _self ) {

		// var loader = Mustache.render( templates.scrollloader, {
		// 	translate: function() {
		// 		return function( text,render ) {
		// 			return i18n.lookup( render( text ) );
		// 		}
		// 	}
		// } );

		var loader = '<div class="loader" data-scroll-loader style="min-height:10px;" ></div>';

		//append to container and keep a reference
		_self.element = core.dom.appendDomString( _self.container, loader );

	};

	/**
	 * set the scroller listener for the loader
	 *
	 * @param {common.scrollLoader} _self contextual reference to the object that is calling the function
	 */
	var setListeners = function( _self ) {

		( _self.boundary || document ).addEventListener( 'scroll', function( event )
		{
			if( !_self.loading && _self.element )
			{
				var top = _self.element.getBoundingClientRect().top;
				if ( ( ( _self.boundary.clientHeight || window.innerHeight ) - top ) >= _self.limit && _self.element.offsetHeight !== 0 )
				{
					_self.loading = true;
					setLoadingText( _self );
					if( _self.delegate )
					{
						_self.delegate.didRequestLoad();
					}
				}
			}
		} );
	};

	/**
	 * when a loader has been informed by a delegate that loading has finished
	 * then add it back down to the bottom of the container
	 *
	 * @param {common.scrollLoader} _self contextual reference to the object that is calling the function
	 */
	var reAppendLoader = function( _self ) {

		if( _self.element && _self.container ) {
			_self.container.appendChild( _self.element );
			show( _self );
		}
	};

	/**
	 * make the loader visible
	 *
	 * @param {common.scrollLoader} _self contextual reference to the object that is calling the function
	 */
	var show = function( _self ) {
		_self.element.style.display = "block";
		setLoadingText( _self );
	};

	/**
	 * hode the loader
	 *
	 * @param {common.scrollLoader} _self contextual reference to the object that is calling the function
	 */
	var hide = function( _self ) {
		_self.element.style.display = "none";
	};

	/**
	 * apply the text content of the loader
	 *
	 * @param {common.scrollLoader} _self contextual reference to the object that is calling the function
	 */
	var setLoadingText = function( _self ) {

		if( _self.element ) {
			var load = i18n ? i18n.lookup( 'label.loadingmore' ) : "Loading More...";
			_self.element.innerHTML = Mustache.render( templates.scrollloader, { load : load } );
		}
	};

	/**
	 * create a scroll loader, for requesting more content when the page scroll
	 * reaches this point the scroller will append itself to the bottom of
	 * the list of content provided as container
	 *
	 * @param {HTMLElement} container
	 * @param {common.scrollLoaderDelegate} delegate
	 * @param {boolean} immediateAppend weather to immediately add the scroller div to the dom
	 * @param {HTMLElement} [boundary] a custom scroll boundary, defaults to document
	 */
	common.scrollLoader = function( container, delegate, immediateAppend, boundary ) {
		var _self = this;

		_self.delegate = delegate;
		_self.container = container;
		_self.boundary = boundary || false;
		_self.loading = false;
		_self.element = false;
		// this property defines how far above the bottom of the screen the
		// loading element must rise in order to trigger a load request
		_self.limit = 0;

		drawLoader( _self );
		setListeners( _self );
	};


	/**
	 * public method that can be used to initialte a re-append
	 */
	common.scrollLoader.prototype.reAppend = function() {
		var _self = this;

		drawLoader( _self );
		setListeners( _self );
	};

	common.scrollLoader.prototype.contentLoaded = function() {
		var _self = this;

		_self.loading = false;
	};

	common.scrollLoader.prototype.removeLoader = function() {
		var _self = this;

		if ( _self.element && _self.element.parentNode )
		{
			_self.element.parentNode.removeChild( _self.element );
		}
		_self.element = false;
	};

	common.scrollLoader.prototype.newLoader = function() {
		var _self = this;

		if ( !_self.element )
		{
			drawLoader( _self );
		}
	};

	/**
	 * delegate will call this on the scroll loader when it has finished
	 * loading data and adding this data to the view.
	 */
	common.scrollLoader.prototype.completedDataLoad = function( dontAppend ) {
		var _self = this;

		_self.loading = false;
		if( !dontAppend ) {
			reAppendLoader( _self );
		} else {
			_self.removeLoader();
		}
	};

} )( PULSE.app.common, PULSE.core, PULSE.app.templates, PULSE.I18N );

/*globals PULSE, PULSE.app, PULSE.app.common*/

( function( app, common, core ) {

	 // pass in the 'created_time' string returned from Instagram
    // stamp arrives formatted as Fri Apr 29 2016 13:59:11 GMT+0100 (BST)
    var parsePostedDate = function(dateString) {
        var date = core.date.parseString(dateString);
        return date;
    };

    var getUserAccountUrl = function(id) {
        return "https://www.facebook.com/" + id;
    };

    var getPhotoUrl = function(attachments) {
        if (!attachments || attachments.data.length === 0) {
            return null;
        }

        var photoObject = attachments.data[0];

        if (photoObject.subattachments) {
            // post is an album - return url of first image
            return photoObject.subattachments.data[0].media.image.src;
        }

        return photoObject.media.image.src;

    };

    var getAvatar = function(post) {
        if (post.from && post.from.picture) {
            return post.from.picture.data.url;
        }
        return;
    };

    common.getFacebookModel = function(post) {

        var _self = this, model,
            userAccountLink = getUserAccountUrl( post.from.id ),
            postDate = parsePostedDate( post.created_time),
            sinceString = common.getSinceString( postDate ),
            photo = '';

        if (post.type === 'photo') {
            photo = post.picture;
        }

        model = {
            timestamp: sinceString,
            id: post.id,
            text: post.message,
            link: post.permalink_url,
            photo: getPhotoUrl(post.attachments),
            feedType: 'facebook',
            user: {
                id: post.from.id,
                name: post.from.name,
                link: userAccountLink,
                avatarUrl: getAvatar(post)
            }
        };

        return model;

    };
    
} )( PULSE.app, PULSE.app.common, PULSE.core );
/*globals PULSE, PULSE.app, PULSE.app.common*/

( function( app, common, core ) {

	// pass in the 'created_time' string returned from Instagram
    // stamp arrives formatted as Fri Apr 29 2016 13:59:11 GMT+0100 (BST)
    var parsePostedDate = function(timestamp) {
        var date = new Date(parseInt(timestamp) * 1000);
        return date;
    };

    var getUserAccountUrl = function(screenName) {
        return "https://www.instagram.com/" + screenName;
    };

    common.getInstagramModel = function(post) {

        var _self = this, model,
            userAccountLink = getUserAccountUrl( post.user.username ),
            postDate = parsePostedDate( post.created_time),
            sinceString = common.getSinceString( postDate ),
            photo = '';

        if (post.type === 'image') {
            photo = post.images.low_resolution.url; // 320x320
        }

        model = {
            timestamp: sinceString,
            id: post.id,
            text: post.caption.text,
            link: post.link,
            photo: photo,
            // extended_media: extended_media,
            feedType: 'instagram',
            user: {
                id: post.user.id,
                name: post.user.full_name,
                account: post.user.username,
                link: userAccountLink,
                avatarUrl: post.user.profile_picture
            }
        };

        return model;

    };

} )( PULSE.app, PULSE.app.common, PULSE.core );
/*globals PULSE, PULSE.app, PULSE.app.common*/

( function( app, common, core ) {

	// pass in the 'created_time' string returned from Instagram
    // stamp arrives formatted as Fri Apr 29 2016 13:59:11 GMT+0100 (BST)
    var parsePostedDate = function(dateString) {
        var date = core.date.parseString(dateString);
        return date;
    };

    var getUserAccountUrl = function(screenName) {
        return "//twitter.com/" + screenName;
    };

    var getSearchTagUrl = function(topic)
    {
        return "//twitter.com/search?q=%23" + topic;
    };

    /**
     * Utility method to scan the given String for what look like HTTP links,
     * Twitter handles and hashtags (called entities), and mark them up with <a> tags.
     *
     * For URLs and media links, use expanded_url as the title and use the
     * display_url provided by Twitter as the text of the anchor tag
     *
     * See: https://dev.twitter.com/docs/tco-url-wrapper/best-practices
     *
     * @param  {String} string   - the original body of the tweet
     * @param  {Object} entities - mapping of types of entities to an array of entity objects
     * @return {String}          - the processed body of the tweet, with anchor tags
     */
    var markUpLinks = function(string, entities)
    {
        // to support the old way of doing things, when entities weren't use
        // to determine links to pages or media and the URL was directly processed
        // from the tweet text body
        if (!entities)
        {
            string = string.replace(/(https{0,1}:\/\/\S+)/g, '<a target="_blank" href="$1">$1</a>')
                .replace(/@(\S+)/g, '<a target="_blank" href="//twitter.com/$1">@$1</a>')
                .replace(/#(\S+)/g,
                    '<a target="_blank" href="//twitter.com/#!/search?q=%23$1">#$1</a>');

            return string;
        }

        // extrapolate URLs from the identified entities of the tweet
        var entitiesArray = [];

        if (entities.urls)
        {
            for (var i = 0, iLimit = entities.urls.length; i < iLimit; i++)
            {
                var entity = entities.urls[i];

                var html = '<a href="' +
                    entity.url +
                    '" title="' +
                    entity.expanded_url +
                    '" target="_blank">' +
                    entity.display_url +
                    '</a>';

                entitiesArray.push(
                {
                    html: html,
                    original: entity.url,
                    start: entity.indices[0],
                    end: entity.indices[1]
                });
            }
        }

        // extrapolate URLs from the identified entities of the tweet
        if (entities.media)
        {
            for (var i = 0, iLimit = entities.media.length; i < iLimit; i++)
            {
                var entity = entities.media[i];

                var html = '<a href="' +
                    entity.url +
                    '" title="' +
                    entity.expanded_url +
                    '" target="_blank">' +
                    entity.display_url +
                    '</a>';

                entitiesArray.push(
                {
                    html: html,
                    original: entity.url,
                    start: entity.indices[0],
                    end: entity.indices[1]
                });
            }
        }

        if (entities.user_mentions)
        {
            for (var i = 0, iLimit = entities.user_mentions.length; i < iLimit; i++)
            {
                var entity = entities.user_mentions[i];

                var url = getUserAccountUrl(entity.screen_name);

                var html = '<a href="' +
                    url +
                    '" target="_blank">&#64;' +
                    entity.screen_name +
                    '</a>';

                entitiesArray.push(
                {
                    html: html,
                    original: '@' + entity.screen_name,
                    start: entity.indices[0],
                    end: entity.indices[1]
                });
            }
        }

        if (entities.hashtags)
        {
            for (var i = 0, iLimit = entities.hashtags.length; i < iLimit; i++)
            {
                var entity = entities.hashtags[i];

                var url = getSearchTagUrl(entity.text);

                var html = '<a href="' +
                    url +
                    '" target="_blank">&#35;' +
                    entity.text +
                    '</a>';

                entitiesArray.push(
                {
                    html: html,
                    original: '#' + entity.text,
                    start: entity.indices[0],
                    end: entity.indices[1]
                });
            }
        }

        /**
         * Since the entities are ordered by type, sort the array by their start indice,
         * so they are in the order of appearances
         */
        entitiesArray.sort(function(a, b)
        {
            return a.start - b.start;
        });

        // re-do start/end indices for entities
        // this is a fix accounting for two-byte characters read as ASCII
        for (var i = 0, iLimit = entitiesArray.length; i < iLimit; i++)
        {
            var entity = entitiesArray[i];

            var lowercaseString = string.toLowerCase();
            var lowercaseOriginal = entity.original.toLowerCase();
            entity.start = lowercaseString.search( lowercaseOriginal );
            entity.end = entity.start + entity.original.length;
        }

        /**
         * The new tweet body, with anchor tags rather than just plain text
         * @type {String}
         */
        var newString = '';

        /**
         * Used to determine where in the original tweet body we're last
         * @type {Number}
         */
        var previousIdx = 0;

        /**
         * Go through all entities (if any) and replace their plain text version with
         * their anchor-tag equivalents
         * @type {Number}
         */
        for (var i = 0, iLimit = entitiesArray.length; i < iLimit; i++)
        {
            var entity = entitiesArray[i];
            var length = entity.start - previousIdx;

            newString += string.substr(previousIdx, length);
            newString += entity.html;

            previousIdx = entity.end;
        }

        /**
         * At the end, add what's left of the original string
         */
        newString += string.substr(previousIdx);

        return newString;
    };

    common.getTweetModel = function( tweet )
    {
        var userAccountLink = getUserAccountUrl( tweet.actor.preferredUsername ),
            tweetDate = parsePostedDate( tweet.postedTime ),
            timestamp = common.getSinceString( tweetDate ),
            photo = '',
            extended_media = [],
            model;

        if( tweet.entities && tweet.entities.media )
        {
            for( var i = 0, iLimit = tweet.entities.media.length; i < iLimit; i++ )
            {
                if( tweet.entities.media[i].type === 'photo' )
                {
                    photo = tweet.entities.media[i].media_url;
                }
            }
        }

        if( tweet.twitter_entities && tweet.twitter_entities.media )
        {
            for( var i = 0, iLimit = tweet.twitter_entities.media.length; i < iLimit; i++ )
            {
                var p = tweet.twitter_entities.media[ i ];
                extended_media.push( p.media_url );
                photo = p.media_url;
            }
        }

        if( tweet.long_object && tweet.long_object.twitter_entities && tweet.long_object.twitter_entities.media ) {

            var longObject = tweet.long_object.twitter_entities.media;
            
            for( var i = 0, iLimit = longObject.length; i < iLimit; i++ ) {
                if( longObject[i].type === 'photo' ) {
                    photo = longObject[i].media_url;
                }
            } 
        }

        model = {
            timestamp: timestamp,
            id: tweet.id,
            text: markUpLinks(tweet.body),
            link: tweet.link,
            photo: photo,
            extended_media: extended_media,
            user: {
                id: tweet.actor.id,
                name: tweet.actor.displayName,
                account: tweet.actor.preferredUsername,
                link: userAccountLink,
                description: tweet.actor.summary,
                avatarUrl: tweet.actor.image
            },
            feedType: 'twitter',
            favorites: tweet.favoritesCount,
            retweets: tweet.retweetCount
        };

        return model;
    };

} )( PULSE.app, PULSE.app.common, PULSE.core );
/*globals PULSE, PULSE.core, PULSE.app*/

( function( app, core, i18n, common ) {


	/**
	 * constructor for the page share widget. Widget requires following data attributes to be
	 * present on target button elements;
	 *
	 * data-social - if this contains a url then it will be used as the page share url
	 * data-social-service - the service name ( should correlate to a n entry in the socialLinks
	 * object that is defined in socialHelper Class - ../../js/social-helpers.js)
	 *
	 * @param {Object} element element defining the page share widget
	 * @param {string} url     URL to share
	 * @constructor
	 */
	common.pageShare = function( element, url ) {

		var _self = this;

		_self.element = element;
		_self.render = _self.element.getAttribute( 'data-render' );
		_self.bodyContent = _self.element.getAttribute( 'data-body' );
		_self.defaultOpen = _self.element.getAttribute( 'data-open' );

		_self.url = _self.element.getAttribute( 'data-link-to' ) ? window.location.hostname + _self.element.getAttribute( 'data-link-to' ) : url;

		if ( _self.render && app.templates[ _self.render ] ) {
			var share = {
                share: i18n.lookup( 'label.share' ),
				shareWhatsapp: i18n.lookup( 'action.share.whatsApp' ),
				shareTwitter: i18n.lookup( 'action.share.twitter' ),
				shareFacebook: i18n.lookup( 'action.share.facebook' ),
				shareGoogle: i18n.lookup( 'action.share.googleplus' ),
				shareEmail: i18n.lookup( 'action.share.email' )
			};

			_self.element.innerHTML = Mustache.render( app.templates[ _self.render ], share );
		}

		_self.shareButton = _self.element.getElementsByClassName('socialShareBtn')[0];
		if ( _self.shareButton ) {
			_self.hoverElem = _self.shareButton.parentElement;
		}

		if ( _self.defaultOpen ) {
			core.style.toggleClass( _self.hoverElem, 'open' );
		}
		_self.setListeners();
	};

	/**
	 * move up the dom tree to find the element containing the desired data attributes. Do not traverse up past the
	 * widget container. return the data set attribute of the element.
	 *
	 * @param {object} element DOM Element on which to begin the traversal
	 * @returns {object} hash - dataset attribute of the element or fale if no element can be found
	 */
	common.pageShare.prototype.getSocialDataset = function( element ) {

		var inspecting = element;

		var checkThisElement = this.element.getAttribute( 'data-social-service' );
		if ( checkThisElement )
		{
			return this.element.dataset;
		}
		else
		{
			do {
				var thisAtt = inspecting.getAttribute( 'data-social-service' );
				if( thisAtt ) {
					return inspecting.dataset;
				}

				inspecting = inspecting.parentElement;

			} while ( inspecting !== this.element );
		}

		return false;

	};

	/**
	 * start listening for click events on the element
	 */
	common.pageShare.prototype.setListeners = function() {
		var _self = this;

		if ( _self.shareButton )
		{
			// bind click event & keypress event to social share button
			['keypress', 'click'].forEach(function(eventType){
				_self.shareButton.addEventListener(eventType, function( evt ) {
					if (evt.which === 13 || evt.type === 'click') {
						evt.preventDefault();
						core.style.toggleClass( _self.hoverElem, 'open' );
					}
				});
			});
		}

		// bind clicks on individual social buttons
		this.element.addEventListener( 'click', function( evt ) {
			// handle clicks on individual social clicks
			var clicked = _self.getSocialDataset( evt.target );
			if( clicked && clicked.socialService ) {
				app.socialHelpers[ clicked.socialService ].sharePage( _self.url, false, _self.bodyContent );
			}

		} );

	};

} )( PULSE.app, PULSE.core, PULSE.I18N, PULSE.app.common );
