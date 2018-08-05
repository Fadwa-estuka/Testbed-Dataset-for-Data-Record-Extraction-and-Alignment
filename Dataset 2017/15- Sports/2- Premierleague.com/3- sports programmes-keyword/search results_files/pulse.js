(function(){
	"use strict";
	/**
	 * PULSE is the window level object to hold all Pulse JavaScript
	 * PULSE.core should only be extended within the pulseJS repo
	 * PULSE.app should be extended on for each project/platform that uses pulseJS
	 * @type {Object}
	 */
	if(!window.PULSE){window.PULSE={};}
	window.PULSE.core = {};
	window.PULSE.app = {};
	window.PULSE.ui = {};

}());

(function(){'use strict';window.PULSE.core.common = {};window.PULSE.core.data = {};window.PULSE.core.date = {};window.PULSE.core.dom = {};window.PULSE.core.event = {};window.PULSE.core.localStorage = {};window.PULSE.core.object = {};window.PULSE.core.style = {};window.PULSE.core.url = {};}());
( function( core ) {

	/**
	 * use handlebars syntax to replace keys in a string with
	 * value from a corresponding map
	 *
	 * @param {string} string string with handlebars {{replacement}} points
	 * @param {object.<string, string>} map key val map of replacement val's
	 */
	core.common.formatString = function( string, map ) {

		if( string && map ) {
			var mapKeys = Object.keys( map );
			for( var t = 0; t < mapKeys.length; t++ ) {
				string = string.replace( '{{' + mapKeys[ t ] + '}}', map[ mapKeys[ t ] ] );
			}
			return string;
		}
		return false;
	};

	/**
	 * Add commas in an integer
	 *
	 * @param {int} num Number to be commafied
	 * @return {String} Commafied number
	 */
	core.common.commafy = function( num )
	{
		return num.toString().replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
			return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
		});
	};

	/**
	 * Create method for making roman numberals out of an integer
	 *
	 * @param {int} num Number to be romonized
	 * @return {String} Romanized number
	 */
	core.common.romanize = function ( num )
	{
		if (isNaN(parseFloat(num)) || !isFinite(num))
			return false;

		var	digits = String(+num).split(""),
			key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
			       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
			       "","I","II","III","IV","V","VI","VII","VIII","IX"],
			roman = "",
			i = 3;
		while (i--)
			roman = (key[+digits.pop() + (i * 10)] || "") + roman;
		return Array(+digits.join("") + 1).join("M") + roman;
	};

	/**
	 * Create method for converting roman numberals into integers
	 *
	 * @param {String} str Roman numeral number
	 * @return {int} num Number as roman numeral
	 */
	core.common.deromanize = function( strRomanNumeral )
	{
		var	str = strRomanNumeral.toUpperCase(),
			validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
			token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
			key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
			num = 0, m;
		if (!(str && validator.test(str)))
			return false;

		while ((m = token.exec(str)) !== null) {
			num += key[m[0]];
		}

		return num;
	};


} )( PULSE.core );

/*globals PULSE.core */

( function( core ) {

	/**
	 * @namespace core.quicksort.private
	 */

	/**
	 * split the list
	 *
	 * @param {Array} list the list to sort
	 * @param {int} min start index of sort region
	 * @param {int} max end of the sort index
	 * @param {function} compare taking two items return -1 if a < b 0 if a = b and 1 if a > b
	 * @returns {int} index
	 */
	var quicksortSplit = function( list, min, max, compare ) {

		var p = list[ max ];
		var i = min;
		for( var j = min; j < max; j++ ) {
			if( compare( list[ j ], p ) >= 0 ) {

				var tmp = list[ i ];
				list[ i ] = list[ j ];
				list[ j ] = tmp;
				i = i + 1;
			}
		}
		var tmp2 = list[ i ];
		list[ i ] = list[ max ];
		list[ max ] = tmp2;

		return i;

	};

	/**
	 * sort a list quickly, using (naive) pivots,
	 * list will be sorted in place
	 *
	 * @param {Array} list the list to sort
	 * @param {int} min start index of sort region
	 * @param {int} max end of the sort index
	 * @param {function} compare taking two items return -1 if a < b 0 if a = b and 1 if a > b
	 */

	core.common.quicksort = function( list, min, max, compare ) {

		if( min < max ) {
			var split = quicksortSplit( list, min, max, compare );
			core.common.quicksort( list, min, split - 1, compare );
			core.common.quicksort( list, split + 1, max, compare );
		}
	};

} )( PULSE.core );

/*globals PULSE.core */

( function( core ) {
	"use strict";

	/**
	 * @namespace core.getTweetModel.private
	 */

	var markUpLinks = function(string, entities)
	{
	    // to support the old way of doing things, when entities weren't use
	    // to determine links to pages or media and the URL was directly processed
	    // from the tweet text body
	    if (!entities)
	    {
	        string = string.replace(/(https{0,1}:\/\/\S+)/g, '<a target="_blank" href="$1">$1</a>')
	            .replace(/@(\S+)/g, '<a target="_blank" href="http://twitter.com/$1">@$1</a>')
	            .replace(/#(\S+)/g,
	                '<a target="_blank" href="http://twitter.com/#!/search?q=%23$1">#$1</a>');

	        return string;
	    }

	    // extrapolate URLs from the identified entities of the tweet
	    var entitiesArray = [];
		var html;

	    if (entities.urls)
	    {
	        for (var i = 0, iLimit = entities.urls.length; i < iLimit; i++)
	        {
	            var entity = entities.urls[i];

	            html = '<a href="' +
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
	        for (var j = 0, jLimit = entities.media.length; j < jLimit; j++)
	        {
	            var jEntity = entities.media[j];

	            html = '<a href="' +
	                jEntity.url +
	                '" title="' +
	                jEntity.expanded_url +
	                '" target="_blank">' +
	                jEntity.display_url +
	                '</a>';

	            entitiesArray.push(
	            {
	                html: html,
	                original: jEntity.url,
	                start: jEntity.indices[0],
	                end: jEntity.indices[1]
	            });
	        }
	    }

	    if (entities.user_mentions)
	    {
	        for (var k = 0, kLimit = entities.user_mentions.length; k < kLimit; k++)
	        {
	            var kEntity = entities.user_mentions[k];

	            var url = getUserAccountUrl(kEntity.screen_name);

	            html = '<a href="' +
	                url +
	                '" target="_blank">&#64;' +
	                kEntity.screen_name +
	                '</a>';

	            entitiesArray.push(
	            {
	                html: html,
	                original: '@' + kEntity.screen_name,
	                start: kEntity.indices[0],
	                end: kEntity.indices[1]
	            });
	        }
	    }

	    if (entities.hashtags)
	    {
	        for (var l = 0, lLimit = entities.hashtags.length; l < lLimit; l++)
	        {
	            var lEntity = entities.hashtags[l];

	            html = '<a href="' +
	                getSearchTagUrl(lEntity.text) +
	                '" target="_blank">&#35;' +
	                lEntity.text +
	                '</a>';

	            entitiesArray.push(
	            {
	                html: html,
	                original: '#' + lEntity.text,
	                start: lEntity.indices[0],
	                end: lEntity.indices[1]
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
	    for (var m = 0, mLimit = entitiesArray.length; m < mLimit; m++)
	    {
	        var mEntity = entitiesArray[m];

	        var lowercaseString = string.toLowerCase();
	        var lowercaseOriginal = mEntity.original.toLowerCase();
	        mEntity.start = lowercaseString.search( lowercaseOriginal );
	        mEntity.end = mEntity.start + mEntity.original.length;
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
	    for (var n = 0, nLimit = entitiesArray.length; n < nLimit; n++)
	    {
	        var nEntity = entitiesArray[n];
	        var length = nEntity.start - previousIdx;

	        newString += string.substr(previousIdx, length);
	        newString += nEntity.html;

	        previousIdx = nEntity.end;
	    }

	    /**
	     * At the end, add what's left of the original string
	     */
	    newString += string.substr(previousIdx);

	    return newString;
	};

	var getUserAccountUrl = function( screenName )
	{
		return "http://twitter.com/" + screenName;
	};

	var getSearchTagUrl = function(topic)
	{
	    return "http://twitter.com/search?q=%23" + topic;
	};

	var parseTwitterDate = function( timestamp )
	{
	    var date = new Date( Date.parse( timestamp ) );
	    if  ( K.ie )
	    {
	        date = Date.parse( timestamp.replace(/( \+)/, ' UTC$1' ) );
	    }

	    return date;
	};

	var getPermalink = function(tweet)
	{
	    var userName = tweet.user.screen_name;
	    var userUrl = getUserAccountUrl(userName);

	    return userUrl + "/status/" + tweet.id_str;
	};

	// from http://widgets.twimg.com/j/1/widget.js
	var K = function()
	{
	    var a = navigator.userAgent;
	    return {
	        ie: a.match(/MSIE\s([^;]*)/)
	    };
	}();


	/**
	 * creates tweet model
	 * @param {Object} tweet Raw tweet data from canary
	 * @returns {Object} model Simplified tweet model
	 */
	core.common.getTweetModel = function ( tweet )
	{
		var model = {};

		var userAccountLink = getUserAccountUrl( tweet.user.screen_name );
		var tweetDate = tweet.timestamp_ms ? new Date( parseInt( tweet.timestamp_ms, undefined ) ) : parseTwitterDate( tweet.created_at );
		var photo = '';

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

		model = {
	        timestamp: tweet.timestamp_ms,
	        date : tweetDate,
	        id: tweet.id_str,
	        text: markUpLinks( tweet.text ),
	        link: getPermalink( tweet ),
	        photo: photo,
	        user: {
	            id: tweet.user.id_str,
	            name: tweet.user.name,
	            account: tweet.user.screen_name,
	            link: userAccountLink,
	            description: tweet.user.description,
	            avatarUrl: tweet.user.profile_image_url
	        },
	        favorites: tweet.favorite_count,
	        retweets: tweet.retweet_count
	    };

		return model;
	};

} )( PULSE.core );

/*globals PULSE.core */

/**
 * Poll object:
 * @typedef {Object} PollObject
 * @property  {String} url The URL for the data request
 * @property  {String} method Request method "GET", "POST", "PUT"
 * @property  {String} [type] Data type for request - Defaults to "json"
 * @property  {Array.<RequestHeader>} [headers] - Array of request headers
 */

/**
 * Subscriber object:
 * @typedef {Object} SubscriberObject
 * @property  {String} url The URL for the data request
 * @property  {String} method Request method "GET", "POST", "PUT"
 * @property {Function} callback Function to call when data is retrieved
 * @property {Object} target Context in which callback should be called
 * @property {Number} [interval] Interval for polling the data source, in millisecs, if not set data is requested once
 * @property {Boolean} [forceCallback] If true notifies of data on every poll rather than only when data has changed, defaults to false
 * @property  {String} [jsonpCallback] expected method name from jsonp response, if not set defaults to false
 * @property  {Boolean} [constant] If true ensures data is only requested once and all subscribers are notified with the same constant data, if not set defaults to false
 * @property  {String} [type] Data type for request - Defaults to "json"
 * @property  {Array.<RequestHeader>} [headers] - Array of request headers
 */

(function( core ){
	"use strict";

	/**
     * Range of manager utility methods for use across JavaScript builds
     */
    core.data.manager = {};

	core.data.manager = (function(){

		var polls = {};

		/**
		 * Poll constructor to create a Poll object that can hold subscribers and notify them of new data
		 * @param {Object.<PollObject>} config Config options to build a Poll
	 	 * @constructor
		 */
		var Poll = function( config ) {

			var _self = this;
			_self.url = config.url;
			_self.method = config.method;
            _self.target = config.target;
			_self.type = config.type;
			_self.subscribers = [];
			_self.headers = config.headers;
			_self.data = config.data || false;


			var dataChanged = function( data ) {
				var stringIt = function( val ) {
					if( typeof val === "object" ) {
						var stringifiedVal = '';
						for( var key in val ) {
							if( val.hasOwnProperty( key ) && key !== 'fullXhttpResponse' ) {
								stringifiedVal += JSON.stringify( val[ key ] );
							}
						}
						return stringifiedVal;
					}
					return val;
				};
				return stringIt( _self.data ) != stringIt( data );
			};

			var notify = function( data, config ){
				_self.subscribers.map( function( sub ){
					if( !_self.data || sub.forceCallback || dataChanged(data) ){
						sub.callback.call( sub.target, data, sub.config );
					}
				});
				_self.data = data;
			};

			var checkInterval = function(){
				var newInterval = false;
				_self.subscribers.forEach( function( sub ){
					if( !newInterval || sub.interval < newInterval ) {
						newInterval = sub.interval;
					}
				});
				_self.interval = newInterval;
				return newInterval;
			};

			var checkJsonp = function(){
				var result = false;
				_self.subscribers.map( function( sub ){
					if( sub.jsonpCallback ){
						result = sub.jsonpCallback;
					}
				});
				return result;
			};

			var checkConstant = function(){
				var result = false;
				_self.subscribers.map( function( sub ){
					if( sub.constant ){
						result = sub.constant;
					}
				});
				return result;
			};

			var request = function(){
				if( !checkConstant() || !_self.data  ){
					core.data.request( _self.url, _self.method, notify, _self.target, _self.jsonpCallback, _self.data, _self.headers, _self.type );
				}
				else{
					notify( _self.data, config );
				}
			};

			_self.stop = function(){
				if( _self.timer ){
					clearInterval(_self.timer);
				}
			};

			_self.start = function(){
				request();
				var interval = checkInterval();
				if( interval ){
					_self.timer = setInterval( request, interval );
				}
			};

			_self.add = function( sub ) {
				_self.stop();
				_self.subscribers.push( sub );
				_self.jsonpCallback = checkJsonp();
				_self.start();
			};

			_self.remove = function( sub ) {
				_self.stop();
				var index = _self.subscribers.indexOf( sub );
				_self.subscribers.splice( index, 1 );
				if( _self.subscribers.length > 0 ){
					_self.jsonp = checkJsonp();
					_self.start();
				}
				else {
					_self.data = false;
				}
			};
		};

		/**
		 * Subscriber constructor to create a Subscriber object that can be notifid of data updates from a Poll
	 	 * @param {Object.<SubscriberObject>} config Config options to build a Subscriber
	 	 * @param {Object.<PollObject>} config Poll object to subscribe to
		 * @constructor
		 */
		var Subscriber = function( config, poll ) {

			var _self = this;

			_self.config = config;
			_self.callback = config.callback;
			_self.target = config.target;
			_self.interval = config.interval;
			_self.forceCallback = config.forceCallback || false;
			_self.jsonpCallback = config.jsonpCallback || false;
			_self.constant = config.constant || false;
			_self.data = config.data || false;
			_self.headers = config.headers || [];

			_self.stop = function(){
				poll.remove( _self );
			};

			_self.start = function(){
				if( poll.subscribers.indexOf( _self ) < 0 ){
					poll.add( _self );
				}
			};

			_self.request = function(){
				core.data.request( poll.url, "GET", _self.callback, _self.target, _self.jsonpCallback, _self.data, _self.headers, _self.type );
			};
		};



		/**
		 * @param {Object.<SubscriberObject>} config Subscriber object used to add a new subscriber, creates a new Poll if required
		 */
		var Add = function( config ) {

				if( !polls[config.url] ) {
					polls[config.url] = new Poll({
						url: config.url,
                        method: config.method,
						type: config.type,
						headers: config.headers || [],
						data: config.data || false
					});
				}

				var sub = new Subscriber( config, polls[config.url] );

				polls[config.url].add( sub );

				return sub;

		};

		return {
			add: Add
		};

	}());


}( PULSE.core ));

/*globals PULSE.core */

/**
 * Request Header Object:
 * @typedef {Object} RequestHeader
 * @property {String} label - Label for Request Header
 * @property {String} value - Value of Request Header
 */

(function( core ){
	"use strict";

	/**
	 *
	 * @param  {String} url - The URL for the data request
	 * @param  {String} [method] - Request method "GET", "POST", "PUT" - Defaults to "GET"
	 * @param  {Function} callback - Function to pass the request response to
	 * @param  {Object} target - the context in which the callback should be called
	 * @param  {Object} [data] - Data object to pass to the request
	 * @param  {Array.<RequestHeader>} [headers] - Array of request headers
	 * @param  {String} [type] - Data type for request - Defaults to "json"
	 */
	core.data.request = function( url, method, callback, target, jsonpCallback, data, headers, type ){
		var config = {
			url: url,
			method: method || "GET",
			target: target,
			callback: callback,
			data: data || {},
			headers: headers || [],
			type: type || "json"
		};

		var createScriptTag = function( id ){
			var current = document.getElementById( id );
			if( current ){
				current.parentNode.removeChild( current );
			}
			var script = document.createElement( 'script' );
			script.id = id;
			script.src = config.url;
			return script;
		};

		if ( jsonpCallback ){
			var script = createScriptTag( jsonpCallback );
			window[ jsonpCallback ] = function( data )
			{
				config.callback.call( config.target, data, config );
			};
			document.body.appendChild( script );
		}
		else {
			var xhttp = new XMLHttpRequest();
			xhttp.open( config.method, config.url, true );
			xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
			config.headers.map( function( header ){
				xhttp.setRequestHeader( header.label, header.value );
			} );
			xhttp.responseType = config.type;
			xhttp.onreadystatechange = function() {
				var response;
				if ( this.readyState === 4 ) {
					if( this.status >= 200 && this.status < 400 ) {
						if (config.type === "json" && (typeof this.response === 'string' || this.response instanceof String)) {
							response = JSON.parse(this.response);
							response.fullXhttpResponse = this;
							config.callback.call( config.target, response, config );
						} else {
							response = this.response;
							response.fullXhttpResponse = this;
							config.callback.call( config.target, response, config );
						}
					}
					else {
						response = {
							fullXhttpResponse: this
						};
						config.callback.call( config.target, response, config );
					}
				}
			};
			if(config.method === "POST") {
				xhttp.send(formattedParams(config.data));
			} else {
				xhttp.data = config.data;
				xhttp.send();
			}
			xhttp = null;
		}

	};

	var formattedParams = function ( params )
	{
		var paramArray = [];
		for ( var key in params )
		{
			if ( params[key] !== undefined )
			{
				paramArray.push( key + '=' + params[key] );
			}
		}
		var formattedParams = "";
		if ( paramArray.length > 0 )
		{
			formattedParams += paramArray.join( '&' );
		}
		return formattedParams;
	};

}( PULSE.core ));

( function( core ) {

    "use strict";

    /**
     * Produces a date object (or undefined) if given a valid ISO date string
     * @param  {String} dateString - ISO date string
     * @return {Date}              - date object or undefined, if string invalid
     */
    core.date.parseString = function( dateString ) {

        if( dateString ){

            var date;

            if ( typeof dateString !== 'string' ) {
                dateString = dateString.toISOString();
            }

            var dateTime = dateString.split('T');
            if ( dateTime.length === 1 ) {
                return new Date( dateTime[0].replace( /\-/g, '/' ) );
            }
            else if ( dateTime.length === 2 ) {
                // we only want to replace the hyphens of date bit (there might be hypens(minus) as in GMT-0200)
                var aDate1 = dateTime[0].replace( /\-/g, '/' );
                var aDate2 = dateTime[1];
                var newDate = aDate1 + ' ' + aDate2;

                date = new Date( newDate );
            }

            if( date && date.getTime() && !isNaN( date.getTime() ) ) {
                return date;
            }
            else {
                date = new Date( dateString );
                if( date && date.getTime() && !isNaN( date.getTime() ) ) {
                    return date;
                }
            }

            return date;
        }
    };

}( PULSE.core ) );

/*globals PULSE.core */

( function( core ) {

	/**
	 * utility method to append an element defined by a string to a
	 * given DOM el. can also append all children from one el to another as
	 * children, similar to jQuery appendTo...
	 *
	 * @param {HTMLElement} element
	 * @param {string} string
	 * @param {boolean} multipleChildren pass true if string consists of more than one
	 * root element that should be appended also to the element
	 * @param {Integer/boolean} returnChild if specified along with multipleChildren ( true ) then will return the
	 * appended element of the nth child of the string, set true to return all children
	 * @returns {HTMLElement} the element that was appended, or the element that was appended to
	 * if multipleChildren is passed as true
	 */

	core.dom.appendDomString = function( element, string, multipleChildren, returnChild) {

        var returnAll = typeof returnChild === "boolean" && returnChild === true;
		var toReturn = returnAll ? [] : false;
		var tempEl = document.createElement( 'div' );
		tempEl.innerHTML = string ;

		if( !multipleChildren ) {
			return element.appendChild( tempEl.children[ 0 ] );
		}

		//length will keep changing as divs are removed and length is
		// re-evaluated, so lets take account of it now !

		var children = tempEl.children.length;

		for( var p = 0; p < children; p++ ) {

			if( returnAll && typeof toReturn === "object" ) {
				toReturn.push( element.appendChild( tempEl.children[ 0 ] ) );
			}

			if( p === returnChild ) {
				toReturn = element.appendChild( tempEl.children[ 0 ] );
			} else if( !returnAll ) {
				element.appendChild( tempEl.children[ 0 ] );
			}

		}

		return toReturn || element;

	};

    /**
	 * utility method to prepend an element defined by a string to a
	 * given DOM el. can also prepend all children from one el to another as
	 * children, similar to jQuery prependTo...
	 *
	 * @param {HTMLElement} element
	 * @param {string} string
	 * @param {boolean} multipleChildren pass true if string consists of more than one
	 * root element that should be appended also to the element
	 * @param {Integer/boolean} returnChild if specified along with multipleChildren ( true ) then will return the
	 * appended element of the nth child of the string, set true to return all children
	 * @returns {HTMLElement} the element that was prepended, or the element that was prepended to
	 * if multipleChildren is passed as true
	 */

 	core.dom.prependDomString = function( element, string, multipleChildren, returnChild) {

        var returnAll = typeof returnChild === "boolean" && returnChild === true;
		var toReturn = returnAll ? [] : false;
		var tempEl = document.createElement( 'div' );
		tempEl.innerHTML = string ;

		if( !multipleChildren ) {
			return element.insertBefore( tempEl.children[ 0 ], element.firstChild );
		}

		//length will keep changing as divs are removed and length is
		// re-evaluated, so lets take account of it now !

		var children = tempEl.children.length;

		for( var p = 0; p < children; p++ ) {

			if( returnAll && typeof toReturn === "object" ) {
				toReturn.push( element.insertBefore( tempEl.children[ 0 ], element.firstChild ) );
			}

			if( p === returnChild ) {
				toReturn = element.insertBefore( tempEl.children[ 0 ], element.firstChild );
			} else if( !returnAll ) {
				element.insertBefore( tempEl.children[ 0 ], element.firstChild );
			}

		}

		return toReturn || element;

 	};

	/**
	 * utility method to check for a whitespace node
	 *
	 * @param {HTMLElement} node Node to check if it is actually whitespace
	 * @returns {Boolean} Is a whitespace node
	 */
	core.dom.isWhitespace = function(node) {
	    return node.nodeType == 3 && /^\s*$/.test(node.data);
	};

	/**
	 * utility method to get nextSiblings from a given element
	 * accepts a filter method to filter the resulting elements
	 *
	 * @param {HTMLElement} el
	 * @param {Function} filter Function to filer each resulting element by - must return a boolean
	 * @returns {Object.<Array>} resulting sibling elements
	 */
	core.dom.getNextSiblings = function(el, filter) {
	    var siblings = [];
	    while ((el= el.nextSibling) !== null) {
	    	if( !core.dom.isWhitespace( el ) ){
		    	if (!filter || filter(el)) siblings.push(el);
		    }
	    }
	    return siblings;
	};

	/**
	 * utility method to get previousSiblings from a given element
	 * accepts a filter method to filter the resulting elements
	 *
	 * @param {HTMLElement} el
	 * @param {Function} filter Function to filer each resulting element by - must return a boolean
	 * @returns {Object.<Array>} resulting sibling elements
	 */
	core.dom.getPreviousSiblings = function(el, filter) {
	    var siblings = [];
	    while ((el = el.previousSibling) !== null) {
	    	if( !core.dom.isWhitespace( el ) ){
	    		if (!filter || filter(el)) siblings.push(el);
	    	}
	    }
	    return siblings;
	};

	/**
	 * Check if child element is in a parent element
	 * @param {HTMLElement} child Child Element
	 * @param {HTMLElement} parent Parent element
	 * @return {Boolean} boolean To check if child is in the parent
	 */
	core.dom.isDescendant = function( child, parent )
	{
		var node = child.parentNode;
	     while (node !== null) {
	         if (node == parent) {
	             return true;
	         }
	         node = node.parentNode;
	     }
	     return false;
	};

	/**
	 * Check if an element is within the current browser viewport
	 * @param  {HTMLElement}  element Element to check
	 * @param  {Boolean}  fullyInView If true checks if element is fully in view
	 * @return {Boolean}  boolean To state whther element is within the viewport
	 */
	core.dom.isElementInView = function ( element, fullyInView ) {
        var pageTop = window.scrollY;
        var pageBottom = pageTop + window.innerHeight;
        var elementTop = element.offsetTop;
        var elementBottom = elementTop + element.offsetHeight;

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    };

    /**
     * Scroll the window to bring an element into view - uses requestAnimationFrame to animate the scroll event
     * @param  {HTMLElement} element The target element to bring into view
     * @param  {Number} offset The value to offset the window scroll from the top of the element (accepts -)
     * @param  {Number} scrollRate Number of pixels to scroll by within each animation frame (set high to jump straight to target)
     */
    core.dom.scrollWindowToElement = function( element, offset, scrollRate ){

    	var targetScroll = element.offsetTop;
    	if( !isNaN( offset ) ){
    		targetScroll += offset;
    	}
    	if( isNaN( scrollRate ) ){
    		scrollRate = 100;
    	}

		var scrolling;
        
        // window.scrollY is undefined in IE <= 11
    	var scrollUp = targetScroll < (window.scrollY || window.pageYOffset);

    	function scrollWindowUp() {
            var scrollY = window.scrollY || window.pageYOffset;
    		var newY = scrollY - scrollRate;
        	if( newY <= targetScroll  ){
    			window.scrollTo( window.scrollX || window.pageXOffset, targetScroll );
        	}
        	else{
    			window.scrollTo( window.scrollX || window.pageXOffset, newY );
        	}
            if( scrollY <= targetScroll ){
                cancelAnimationFrame( scrolling );
            }
            else{
                requestAnimationFrame( scrollWindowUp );
            }
        }
        function scrollWindowDown() {
            var scrollY = window.scrollY || window.pageYOffset;
    		var newY = scrollY + scrollRate;
        	if( newY >= targetScroll  ){
    			window.scrollTo( window.scrollX || window.pageXOffset, targetScroll );
        	}
        	else{
    			window.scrollTo( window.scrollX || window.pageXOffset, newY );
        	}
            if( scrollY >= targetScroll ){
                cancelAnimationFrame( scrolling );
            }
            else{
                requestAnimationFrame( scrollWindowDown );
            }
        }
        if( scrollUp ){
        	scrolling = requestAnimationFrame(scrollWindowUp);
		}
		else{
        	scrolling = requestAnimationFrame(scrollWindowDown);
		}
    };

} )( PULSE.core );

/*globals PULSE.core */

( function( core ) {
	"use strict";

	/**
	 * add a callback to handle multiple events to a single element
	 *
	 * @param {object} element el to add listeners to
	 * @param {string[]} events array of event names to listen for
	 * @param {function} fn callback to be applied
	 * @returns {boolean} weather or not the listeners were added
	 */
	core.event.listenForMultiple = function( element, events, fn ) {

		if( element && events && events.length && fn && typeof fn === "function" ) {
			for( var i = 0; i < events.length; i++ ) {
				element.addEventListener( events[ i ], fn );
			}
			return true;
		}
		return false;
	};

} )( PULSE.core );

( function( core ) {
    /**
     * @typedef {OutsideClickSubscriber}
     * @param {DOMElement} element - the main element to listen clicking outside of
     * @param {Function} callback - the function to call if outside click conditions are satisfied
     * @param {DOMElement} preventTriggerOn - optional element to ignore clicks on
     */

    /**
     * List of elements to close if the user clicks outside of their defined boundary
     * @type {Array<OutsideClickSubscriber>}
     */
    var elementsToClose = [];

    /**
     * Function to be executed when the click listener on the document is fired
     * @param {DOMEvent} e - The click event
     */
    var onDocumentClick = function( e ) {

        var el;
        for( var i = 0; i < elementsToClose.length; i++ ) {

            el = elementsToClose[ i ];

            if( el &&
                // ignore clicks on the element itself
                el.element !== e.target &&
                // ignore clicks if the subscriber element contains the element clicked
                ( !el.element || !el.element.contains( e.target ) ) &&
                // ignore clicks on the preventTriggerElem
                e.target !== el.preventTriggerOn &&
                // ignore clicks if the preventTriggerElem contains the element clicked
                ( !el.preventTriggerOn || !el.preventTriggerOn.contains( e.target ) ) &&
                // ignore if there's no callback
                typeof el.callback === 'function' ) {

                el.callback( el.element );
            }
        }
    };

    /*
     * Functionality which closes all open elements on a document click/click outside of the element
     * element specifically needs to be added to the elementsToClose list
     * @class CloseOnOutsideClick
     * @static
     */
    core.event.listenForOutsideClick = {

        /**
         * Adds an element to the elementsToClose list
         * @memberof CloseOnOutsideClick
         *
         * @param {DOMElement} element            - The element
         * @param {Function}   callback           - The callback (gets run on click)
         * @param {DOMElement} preventTriggerElem - Optional element to prevent listening for click on
         */
        addElement: function( element, callback, preventTriggerElem ) {

            if( elementsToClose.length === 0 ) {
                document.addEventListener( 'click', onDocumentClick );
            }

            elementsToClose.push( {
                element: element,
                callback: callback,
                preventTriggerOn: preventTriggerElem
            } );
        },

        /**
         * Removes an element from the elementsToClose list
         * @memberof CloseOnOutsideClick
         *
         * @param {DOMElement} element - The element to remove
         */
        removeElement: function( element ) {

            for( var i = 0; i < elementsToClose.length; i++ ) {
                if ( elementsToClose[ i ] &&
                    elementsToClose[ i ].element === element ) {

                    elementsToClose.splice( i, 1 );
                }
            }

            if( elementsToClose.length === 0 ) {
                document.removeEventListener( 'click', onDocumentClick );
            }

        }
    };

}( PULSE.core ) );

/*globals PULSE.core */

(function( core ){
	"use strict";

	/**
	 * WindowOnScroll handler that extends the window.onscroll listener for multiple methods
	 */
	var WindowOnScroll = function( ){

		var _self = this;
		_self.initialised = false;

		var onscrollTimer;

		_self.notifiers = [];

		_self.add = function( notifier ){
			if( _self.notifiers.indexOf( notifier ) < 0 ){
				_self.notifiers.push( notifier );
			}
			if( !_self.initialised ){
				init();
			}
		};

		_self.remove = function( notifier ){
			var index = _self.notifiers.indexOf( notifier );
			if( index ){
				_self.notifiers.splice( index, 1 );
			}
		};

		var notify = function(){
			_self.notifiers.map( function( notifier ){
				notifier.method( notifier.args );
			} );
		};

		var init = function(){
			window.onscroll = function(){
				notify();
			};
			_self.initialised = true;
		};

	};

	core.event.windowOnScroll = new WindowOnScroll( 100 );

}( PULSE.core ));

/*globals PULSE.core */

(function( core ){
	"use strict";

	/**
	 * windowResize handler that extends the window.resize listener for multiple methods
	 * and debounces the window.onresize event by 100ms
	 * @property {Number} timer Time in millisecs used to debounce the window.onresize event - defaults to 200
	 */
	var WindowResize = function( timer ){

		var _self = this;
		_self.timer = timer || 200;
		_self.initialised = false;

		var resizeTimer;

		_self.notifiers = [];

		_self.add = function( notifier ){
			if( _self.notifiers.indexOf( notifier ) < 0 ){
				_self.notifiers.push( notifier );
			}
			if( !_self.initialised ){
				init();
			}
		};

		_self.remove = function( notifier ){
			var index = _self.notifiers.indexOf( notifier );
			if( index ){
				_self.notifiers.splice( index, 1 );
			}
		};

		var notify = function(){
			_self.notifiers.map( function( notifier ){
				notifier.method( notifier.args );
			} );
		};

		var init = function(){
			window.onresize = function(){
				clearTimeout( resizeTimer );
				resizeTimer = setTimeout( function() {
					notify();
				}, _self.timer );
			};
			_self.initialised = true;
		};


	};

	core.event.windowResize = new WindowResize( 100 );

}( PULSE.core ));

/*globals PULSE.core */

(function( core ){
    "use strict";
    /**
     * Range of local storage utility methods for use across JavaScript builds
     */
    core.localStorage = {};

    /**
    * Set given data in storage with either cookies or localStorage
    * @public
    * @param {string} name Name of storage object
    * @param {string} data Data to store
    * @param {number} [expiry] Number of days before expiry
    * @param {useCookie} [boolean] True if local storage should not be used
    */
    core.localStorage.setStorage = function (name, data, expiry, useCookie) {

        var setCookie = function(){
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiry);
            var c_value = escape(data) + ((expiry === null) ? "" : "; expires=" + exdate.toUTCString());
            document.cookie = name + "=" + c_value + ";path=/";
        };
        if (useCookie) {
            setCookie();
        }
        else {
            if ('localStorage' in window && window.localStorage !== null) {
                window.localStorage.setItem(name, data);
            }
            else {
                setCookie();
            }
        }
    };
    /**
    * Gets requested data from either cookies or localStorage
    * @public
    * @param {string} name Name of storage object
    * @param {useCookie} [boolean] True if local storage should not be used
    * @return {string} Data retrieved from stored object
    */
    core.localStorage.getStorage = function (name, useCookie) {

        var getCookie = function(){
            var i, x, y, ARRcookies = document.cookie.split(";");
            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == name) {
                    return unescape(y);
                }
            }
        };

        if (useCookie) {
            return getCookie();
        }
        else {
            if ('localStorage' in window && window.localStorage !== null) {
                return window.localStorage.getItem(name);
            }
            else {
                return getCookie();
            }
        }
    };
    /**
    * Removes requested data from  either cookies or localStorage
    * @public
    * @param {string} name Name of storage object
    * @param {useCookie} [boolean] True if local storage should not be used
    */
    core.localStorage.clearStorage = function (name, useCookie) {

        var removeCookie = function(){
            core.localStorage.setStorage(encodeURIComponent(name), '', -1, true);
        };
        if (useCookie) {
            removeCookie();
        }
        else {
            if ('localStorage' in window && window.localStorage !== null) {
                window.localStorage.removeItem(name);
            }
            else {
                removeCookie();
            }
        }
    };

}( PULSE.core ));

/*globals PULSE.core */

(function( core ){
    "use strict";

    /**
     * Extend an object with another. Pass in at least two objects to merge as arguments; for a
     * deep extend, set the first argument to `true`
     * @public
     * @return {Object} the newly created object
     */
    core.object.extend = function () {

        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;

        // Check if a deep merge
        if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
            deep = arguments[0];
            i++;
        }

        // Merge the object into the extended object
        var merge = function ( obj ) {
            for ( var prop in obj ) {
                if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
                    // If deep merge and property is an object, merge properties
                    if ( deep &&
                        Object.prototype.toString.call( obj[prop] ) === '[object Object]' ) {
                        extended[prop] = core.object.extend( true, extended[prop], obj[prop] );
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        // Loop through each object and merge
        for ( ; i < length; i++ ) {
            var obj = arguments[i];
            merge( obj );
        }

        return extended;
    };

    /**
     * get object by string notation
     *
     * @param {object} o Object
     * @param {object} s String
     */
    core.object.objectByString = function(o, s) {
        s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        s = s.replace(/^\./, '');           // strip a leading dot
        var a = s.split('.');
        for (var i = 0, n = a.length; i < n; ++i) {
            var k = a[i];
            if (k in o) {
                o = o[k];
            } else {
                return;
            }
        }
        return o;
    };

    /**
     * get object size
     *
     * @param {object} o Object
     * @param {int} size Size of object
     */
    core.object.objectSize = function( o )
    {
        var size = 0, key;
        for ( key in o )
        {
            if ( o.hasOwnProperty( key ) ) size++;
        }
        return size;
    };

    /**
     * check if two objects contain the same data
     *
     * @param {object} o1 Object1
     * @param {object} o2 Object2
     * @return {boolean} true/false Whether objects are the same
     */
    core.object.sameObject = function( o1, o2 )
    {
        if ( core.object.objectSize( o1 ) != core.object.objectSize( o2 ) )
        {
            return false;
        }
        else
        {
            for ( var key in o1 )
            {
                if ( o1[ key ] != o2[ key ] )
                {
                    return false;
                }
            }
        }
        return true;
    };

    /**
     * given an object and a path on its keys, traverse this path and return the resulting
     * object / value, with great power comes great re-usability
     *
     * @param {Array<string>} path the list of objects to traverse down
     * @param {object} object the object which will be traversed
     */
    core.object.getNestedItemFromPath = function( path, object ) {

        //no elements in path array the return the object at its root
        if( path.length === 0 ) {
            return object;
        }

        //start with a reference to the root element of the object
        var o = object;

        for( var l = 0; l < path.length; l++ ) {
            o = o[ path[ l ] ];
        }

        return o;
    };

    /**
     * turns an element/node list into an array
     *
     * @param {object} object the nodelist object which will be turned into an array
     */
    core.object.makeArray = function( object ) {
        var arr = [];
        if ( core.object.isArray(object) ) {
            // use object if already an array
            arr = object;
        } else if ( typeof object.length == 'number' ) {
            // convert nodeList to array
            for ( var i = 0; i < object.length; i++ ) {
                arr.push( object[i] );
            }
        } else {
            // array of single index
            arr.push( object );
        }
        return arr;
    };

    /**
     * checks if the given parameter is an Array
     *
     * @param {object} arr the object to check
     */
    core.object.isArray = function( arr ) {
        return Object.prototype.toString.call( arr ) == '[object Array]';
    };

}( PULSE.core ));

/*globals PULSE.core */

(function( core ){
    "use strict";
    /**
     * Range of style utility methods for use across JavaScript builds
     */
    core.style = {};

    /**
     * check a class exists for a dom element
     * @public
     * @param {HTMLElement} el Element to check class
     * @return {string} className name of class to check
     */
    core.style.hasClass = function( el, className ) {
        if (el.classList) {
          return el.classList.contains(className);
        } else {
          return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    };

    /**
     * remove a class from a HTML element
     * @public
     * @param {HTMLElement} el Element to remove class from
     * @return {string} className name of class to remove
     */
    core.style.removeClass = function( el, className ) {
        if (el.classList) {
          el.classList.remove(className);
        } else {
          el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };

    /**
     * add a class to a HTML element
     * @public
     * @param {HTMLElement} el Element to add class to
     * @return {string} className name of class to add
     */
    core.style.addClass = function( el, className ) {
        if (el.classList) {
          el.classList.add(className);
        } else {
          el.className += ' ' + className;
        }
    };

    /**
     * toggle a class for a HTML element
     * @public
     * @param {HTMLElement} el Element for class to toggle
     * @return {string} className name of class to toggle
     */
    core.style.toggleClass = function( el, className ) {
        if ( core.style.hasClass( el, className ) ) {
            core.style.removeClass( el, className );
        } else {
            core.style.addClass( el, className );
        }
    };

    /**
     * returns a width value including padding, borders and margins for a HTML element
     * @public
     * @param {HTMLElement} el Element to measure
     * @return {integer} outer pixel width of element
     */
    core.style.outerWidth = function( el ) {
        var width = el.offsetWidth;
        var style = el.currentStyle || getComputedStyle( el );

        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
    };

}( PULSE.core ));

/*globals PULSE.core */

( function( core ) {

	/**
	 * Update a parameter in a url string,
	 * usually so it can be set back using the history api
	 *
	 * @param {string} url the url string
	 * @param {string} parameter the parameter to update
	 * @param {string} newValue the value to update the param to
	 */
	core.url.updateUrlStringParam = function( url, parameter, newValue ) {

		var newParam = parameter + "=" + newValue;

		//does the param actually exist in the url ?
		name = name.replace( /[\[]/, "\\\[" ).replace(/[\]]/, "\\\]");
		//use cap group 0 to identify the leading character
		var regexS = "([\\?&])" + parameter + "=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( url );

		if( results ) {
			//param already exists in url, replace it
			var preceeding = results[ 1 ]; // ? or &
			var nextVal = ( newValue !== undefined && newValue !== '' ) ? preceeding + newParam : preceeding;
			url = url.replace( results[ 0 ], nextVal );

		} else {
			if ( newValue !== undefined && newValue !== '' )
			{
				//check if url has elready got other parameters
				if( url.indexOf( "?" ) === -1 ) {

					url = url + "?" + newParam;

				} else {

					url = url + "&" + newParam;

				}
			}
		}

		return url;
	};

	/**
	 * Get parameter by name
	 *
	 * @param {string} name Name of parameter to be retrieved
	 * @param {string} url Optional url string
	 * @param {string} Value of parameter
	 */
	core.url.getParameterByName = function( name, url )
	{
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    var param = decodeURIComponent(results[2].replace(/\+/g, " "));
	    if ( param === 'null' )
	    {
	    	param = null;
	    }
	    return param;
	};

	/**
    * Returns the value of a parameter from the current URI
    * @public
    * @param  {String} name - Request method "GET", "POST", "PUT" - Defaults to "GET"
    * @return { } Returns the value of a given parameter from window.location
    */
    core.url.getParam = function (name) {

        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results === null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    };

	/**
	 * Update url based on parameters
	 *
	 * @param {Object} params Object of parameters to update in the url
	 * @param {Object} config Optional configuration:
	 		- State
	 		- Title
	 		- Url
	 		- Name
	 */
	core.url.setUrlWithParams = function( params, config )
	{
		config = config || {};

		var state = config.state || {};
		var title = config.title || document.title;
		var url = config.url || window.location.href.split('?')[0];
		var name = config.name || 'filter';

		url += core.url.buildQueryString( params, true );

		window.history.pushState(state, title, url );
	};

	/**
	 * Builds a query string from a given map of parameters
	 * @param  {Object}  paramsMap        - The parameters map
	 * @param  {Boolean} includeSeparator - Whether to include the ? before the string or not
	 * @return {String}                   - The query string
	 */
	core.url.buildQueryString = function( paramsMap, includeSeparator ) {

		var paramsArray = [];
	    for( var key in paramsMap ) {
	    	 	// ignore non-map properties
	    	if( paramsMap.hasOwnProperty( key ) &&
	    		// ignore params with undefined values
	    		typeof paramsMap[ key ] !== 'undefined' &&
	    		// ignore param if value is an empty array
	    		( Object.prototype.toString.call( paramsMap[ key ] ) !== '[object Array]' ||
	    			paramsMap[ key ].length ) ) {

	    		var value = [].concat( paramsMap[ key ] ).join( ',' );
	    		var keyValuePair = [ key, encodeURIComponent( value ) ];
	    		paramsArray.push( keyValuePair.join( '=' ) );
	    	}
	    }

	    return paramsArray.length ? ( includeSeparator ? '?' : '' ) + paramsArray.join( '&' ) : '';
	};

} )( PULSE.core );


/*globals PULSE.ui */
( function( ui ) {


	ui.loader = function( element, config ) {
		var _self = this;

		_self.element = element;
		_self.append = config.append;
		_self.init = config.init;
		_self.active = false;
		_self.loaderTemplate = config.loaderTemplate;
		if ( _self.init )
		{
			_self.addLoader();
		}
	};

	ui.loader.prototype.removeLoader = function()
	{
		var _self = this;

		if( _self.element && _self.active ){
			
			if ( _self.loaderDiv )
			{
				_self.element.removeChild( _self.loaderDiv );
			}
			else{
				_self.element.innerHTML = "";			
			}
			_self.active = false;
		}
	};

	ui.loader.prototype.addLoader = function()
	{
		var _self = this;

		var html = Mustache.render( _self.loaderTemplate, {} );

		if ( _self.append )
		{
			_self.loaderDiv = document.createElement( 'div' );
			_self.loaderDiv.innerHTML = html;
			_self.element.insertBefore( _self.loaderDiv, _self.element.firstChild );
		}
		else
		{
			_self.element.innerHTML = html;
		}
		_self.active = true;
	};

} )( PULSE.ui);

/*globals PULSE, PULSE.ui */

(function( ui, core ){
	"use strict";
	/**
	 * Config Object:
	 * @typedef {Object} Config
	 * @property {HTMLElement} [parent] A single parent HTML element - defaults to 'document'
	 * @property {String} [selector] CSS 2.1 selector used to identify modal activators - defaults to '[data-ui-modal]'
	 * @property {String} [openClass] CSS class used to define open modal objects - defaults to 'open'
	 * @property {String} [modalId] ID to be used for the modal wrapper - defaults to 'modalWrap'
	 * @property {String} [closeText] Text to be used for close button/link - defaults to 'close'
	 * @property {Function} [openCallback] Function to be called when modal is opened/updated - receives full modal object
	 * @property {Function} [closeCallback] Function to be called when modal is opened/updated - receives full modal object
	 *
	 * Instance Object:
	 * @typedef {Object} Instance
	 * @property {HTMLElement} activator HTML element that triggers this Instance content to be set in the modal
	 * @property {HTMLElement} content HTML element that is the target content displayed for this instance
	 * @property {Function} show Function used to show the content element for this Instance
	 * @property {String} uiArgs Arguments to be used within callback methods as stringified JSON
	 * /

	/* PRIVATE METHODS */

	/**
	 * @namespace ui.modal.private
	 */

	var setDefaults = function( config ){
		if( !config.parent ){
			config.parent = document;
		}
		if( !config.selector ){
			config.selector = '[data-ui-modal]';
		}		
		if( !config.openClass ){
			config.openClass = 'open';
		}
		if( !config.modalWrapId ){
			config.modalWrapId = 'modalWrap';
		}
		if( !config.modalContentId ){
			config.modalContentId = 'modalContent';
		}
		if( !config.closeText ){
			config.closeText = 'close';		
		}
		config.activators = config.parent.querySelectorAll( config.selector );
		config.instances = [];
		return config;

	};

	var bindInstance = function( instance, _self ){

		instance.activator.addEventListener( 'click', function( e ){
			e.preventDefault();
			_self.setInstance( instance );
			_self.open(instance);
		} );

	};


	var buildModal = function( _self ){

		var currentModal = document.getElementById( _self.config.modalWrapId );

		if( currentModal ){
			_self.config.modal = currentModal;
		}
		else{
			_self.config.modal = document.createElement('div');
			_self.config.modal.id = _self.config.modalWrapId;
			if ( _self.config.modalWrapClass )
			{
				core.style.addClass( _self.config.modal, _self.config.modalWrapClass );
			}
			_self.config.modal.addEventListener( 'click', function(e){
				if (_self.config.modal !== e.target) return;
				_self.close();
			} );

			document.body.insertBefore( _self.config.modal, document.body.firstChild );
		}

		var currentModalContent = _self.config.modal.querySelector( '#' + _self.config.modalContentId );

		if( currentModalContent ){
			_self.config.modalContent = currentModalContent;
		}
		else{
			_self.config.modalContent = document.createElement('div');
			_self.config.modalContent.id = _self.config.modalContentId;

			if ( _self.config.modalContentWrapClass )
			{
				core.style.addClass( _self.config.modalContent, _self.config.modalContentWrapClass );
			}

			_self.config.modal.appendChild(_self.config.modalContent);

			var closeBtn = document.createElement('a');
			core.style.addClass( closeBtn, 'close' );
			closeBtn.setAttribute( 'role', 'button' );
			closeBtn.setAttribute( 'tabindex', 0 );
			closeBtn.textContent = _self.config.closeText;
			closeBtn.addEventListener( 'click', function(){
				_self.close();
			} );

			// Close modal if enter key is pressed when focus on close button
			closeBtn.addEventListener( 'keydown', function( evt ){
				if( evt.which == 13 ){
					_self.close();
				}
			} );		
			_self.config.modalContent.appendChild(closeBtn);			
		}

		_self.config.closeBtn = _self.config.modalContent.querySelector( 'a.close' );

	};

	var buildItems = function( _self ){

		Array.prototype.map.call( _self.config.activators, function( el ){
			var instanceContent = document.querySelectorAll( el.getAttribute('data-ui-modal') );
			var args;
			if( el.getAttribute('data-ui-args') ){
				args = JSON.parse( el.getAttribute('data-ui-args') );
			}
			var instance = {
				activator: el,
				content: instanceContent[0],
				uiArgs: args
			};
			instance.show = function(){
				_self.config.instances.forEach( function( el ){
					core.style.removeClass( el.content, _self.config.openClass );
				} );
				core.style.addClass( instance.content, _self.config.openClass );			
			};
			_self.config.modalContent.appendChild( instance.content );
			_self.config.instances.push( instance );
			bindInstance( instance, _self );
		} );

	};

	var init = function( _self ){

		buildModal( _self );
		buildItems( _self );

	};

	/* PUBLIC OBJECT */

	/**
	 * Constructor for modal object
	 * 
	 * @param {Object.<Config>} [config] Config properties used when consructing a modal
	 * @constructor
	 */	
	ui.modal = function( config ){

		var _self = this;
		_self.config = setDefaults( config || {} );


		// method used to close on escape key event
		_self.escapeClose = function( evt ){
			if( evt.which == 27 ){
				_self.close();
			}
		};

		init( _self );

	};

	/**
	 * Open the modal
	 * @return {Object} Full modal object
	 */
	ui.modal.prototype.open = function(){

		var _self = this;

		// Close modal if escape key is pressed
		document.addEventListener( 'keydown', _self.escapeClose );
		
		core.style.addClass( _self.config.modal, _self.config.openClass );
		if( typeof _self.config.openCallback === 'function' ){
			_self.config.openCallback( _self );
		}
		// Set focus on the close button for accessibility
		// setTimeout is required to force this event to after element paint in browser
		setTimeout(function(){ _self.config.closeBtn.focus(); }, 100);		
		return _self;
	};

	/**
	 * Close the modal
	 * @return {Object} Full modal object
	 */
	ui.modal.prototype.close = function(){

		var _self = this;

		// Remove event listener on escape key
		document.removeEventListener( 'keydown', _self.escapeClose );

		core.style.removeClass( _self.config.modal, _self.config.openClass );
		if( typeof _self.config.closeCallback === 'function' ){
			_self.config.closeCallback( _self );
		}
		return _self;
	};

	/**
	 * Sets the given modal instance as visible within the modal, must be an instance from modal.config.instances
	 *
	 * @param {Object.<Instance>} instance Modal instance to be set
	 * @return {Object} Full modal object
	 */
	ui.modal.prototype.setInstance = function( instance ){

		var _self = this;
		_self.config.current = instance;
		instance.show();
		return _self;

	};

}( PULSE.ui, PULSE.core ));
/*globals PULSE, PULSE.ui, PULSE.core */

(function( ui, core ){
	"use strict";

	/**
	 * MoreNav Object:
	 * @typedef {Object} MoreNav
	 */

	/**
	 * Config Object:
	 * @typedef {Object} Config
	 * @property {String} [moreNavUiSelector] Data attribute selector used to wrap the whole nav element
	 * @property {String} [dataNavIndexSelector] data attribute selector used to index the nav items
	 * @property {HTMLElement} [navWrap] A single wrapping HTML element with all the nav elements
	 * @property {String} [navWrapTag] HTML tag used to wrap more nav items
	 * @property {String} [navItemTag] HTML tag used to build more nav items
     * @property {String} [moreLabel] Text used on the more element
     * @property {String} [openClass] CSS class used when the more dropdown is open
	 * @property {String} [hideClass] CSS class used for hiding nav elements
	 * @property {Number} [toleranceWidth] Pixel amount to set as tolerance for adjusting items in more nav
	 * @property {Function} [buildCallback] Function to be called when a nav ui is built - receives full nav object
	 */

	/**
	 * @namespace ui.moreNav.private
	 */

	/* PRIVATE VARIABLES */
	var resizeTimer;

	/* PRIVATE METHODS */

	var setDefaults = function( config ){


		if( !config.dataNavIndexSelector ){
			config.dataNavIndexSelector = 'data-nav-index';
		}
		if( !config.navWrap ){
			config.navWrap = document.querySelector( '[data-ui-more-nav]' );
		}
		if( !config.navWrapTag ){
			config.navWrapTag = 'ul';
		}
		if( !config.navItemTag ){
			config.navItemTag = 'li';
		}
		if( !config.activeClass ){
			config.activeClass = 'active';
		}
		if( !config.openClass ){
			config.openClass = 'open';
		}
		if( !config.hideClass ){
			config.hideClass = 'hide';
		}
		if( !config.toleranceWidth ){
			config.toleranceWidth = 20;
		}
		config.navs = [];
		return config;

	};


	var buildNavs = function( _self ){

		_self.config.navItemsWrap = _self.config.navWrap.querySelector( _self.config.navWrapTag );

		var navIndex = 0;

		Array.prototype.map.call( _self.config.navItemsWrap.children, function( el ){
			if( el.tagName.toLowerCase() === _self.config.navItemTag.toLowerCase() ){
				el.setAttribute( _self.config.dataNavIndexSelector , navIndex++ );
				_self.config.navs.push( el );
			}
		} );

		createMoreToggle( _self );
		checkAndSetActiveTab(_self);

	};

	var createMoreToggle = function( _self ) {
		_self.moreNavs = {};
		_self.moreNavs.visible = false;

		var moreNav = document.createElement(_self.config.navItemTag);
		core.style.addClass( moreNav, 'more' );
		_self.moreNavs.nav = moreNav;

		var moreButton = document.createElement('div');
		core.style.addClass( moreButton, 'moreToggle' );
		moreButton.textContent = _self.config.moreLabel;
		moreButton.addEventListener( 'click', function(){
			toggleMoreDropdown( _self );
		});
		moreNav.appendChild( moreButton );

		var moreIcon = document.createElement('span');
		core.style.addClass( moreIcon, 'icn' );
		core.style.addClass( moreIcon, 'chevron-down' );
		moreButton.appendChild( moreIcon );
		_self.moreNavs.button = moreButton;

		var moreDropdown = document.createElement(_self.config.navWrapTag);
		core.style.addClass( moreDropdown, 'moreToggleDropdown' );
		moreNav.appendChild( moreDropdown );
		_self.moreNavs.dropdown = moreDropdown;

		_self.config.navItemsWrap.appendChild( moreNav );
		moreNav.isMoreNav = true;
		_self.config.navs.push( moreNav );

		_self.moreNavs.wrapWidth = 0; // set to 0 to force check on first run
		checkMoreToggle( _self );

		var windowResizeListener = {
			method: function( args ) {
				checkMoreToggle( args.scope );
			},
			args: {
				scope: _self
			}
		};

		core.event.windowResize.add( windowResizeListener );

	};

	var checkMoreToggle = function( _self ) {
		//Take into consideration the nav items wrapper padding
		var navItemsWrapStyle = getComputedStyle( _self.config.navItemsWrap);
		var navItemsWrapPadding = parseInt(navItemsWrapStyle.paddingLeft) + parseInt(navItemsWrapStyle.paddingRight);
		var wrapWidth = core.style.outerWidth(_self.config.navWrap) - (navItemsWrapPadding + _self.config.toleranceWidth);

		// check to see if the width has changed
		if ( _self.moreNavs.wrapWidth !== wrapWidth ) {

			var widthRemaining = wrapWidth;
			toggleShowMoreNav(_self, true);
			widthRemaining -= core.style.outerWidth(_self.moreNavs.nav);
			toggleShowMoreNav(_self, false);

			_self.config.navs.forEach(function(nav, i) {
				if(!nav.isMoreNav) {
					var navActivatorWidth = 0;
					if(widthRemaining !== -1) {
						//We have to show tab before working out the width
						showNavButton( nav, _self );
						navActivatorWidth =  core.style.outerWidth(nav);
					}
					if ( widthRemaining < navActivatorWidth ) {
						hideNavButton( nav, _self );
						widthRemaining = -1;
					} else {
						widthRemaining -= navActivatorWidth;
					}
				}
			});

			if(widthRemaining === -1){
				toggleShowMoreNav(_self, true);
			}

			checkAndSetActiveTab( _self );

			// update stored width
			_self.moreNavs.wrapWidth = wrapWidth;

		}

	};

	var toggleShowMoreNav = function ( _self, show ) {

		if ( show ) {
			core.style.addClass(_self.config.navItemsWrap, 'showMoreEnabled');
			core.event.listenForOutsideClick.addElement( _self.moreNavs.dropdown, function() {
				toggleMoreDropdown( _self, true );
			}, _self.moreNavs.button );
		} else {
			core.style.removeClass(_self.config.navItemsWrap, 'showMoreEnabled');
			core.event.listenForOutsideClick.removeElement( _self.moreNavs.dropdown );
		}

	};

	var toggleMoreDropdown = function ( _self, forceClose ) {

		if ( forceClose ) {
			core.style.removeClass( _self.moreNavs.nav, _self.config.openClass );
		} else {
			core.style.toggleClass( _self.moreNavs.nav, _self.config.openClass );
		}

	};

	var hideNavButton = function ( nav, _self ) {

		if ( core.style.hasClass( nav, _self.config.hideClass ) ) {
			return;
		}

		if ( !nav.navClone ) {
			nav.navClone = nav.cloneNode( true );
		}

		nav.isHidden = true;
		core.style.addClass( nav, _self.config.hideClass );

		var listItems = _self.moreNavs.dropdown.getElementsByTagName( _self.config.navItemTag );
		if ( listItems.length === 0) {
			_self.moreNavs.dropdown.appendChild( nav.navClone );
		} else {
			for (var i = 0; i < listItems.length; i++) {
				if ( nav.index > listItems[i].getAttribute(_self.config.dataNavIndexSelector) ) {
					_self.moreNavs.dropdown.insertBefore( nav.navClone, listItems[i]);
					return;
				} else if ( i === (listItems.length - 1) ) {
					_self.moreNavs.dropdown.appendChild( nav.navClone );
				}
			}
		}

	};

	var showNavButton = function ( nav, _self ) {

		if ( !core.style.hasClass( nav, _self.config.hideClass ) ) {
			return;
		}

		nav.isHidden = false;
		core.style.removeClass( nav, _self.config.hideClass );
		_self.moreNavs.dropdown.removeChild( nav.navClone);

	};


	var checkAndSetActiveTab = function( _self ){
		var activeInMoreTab = false;
		for (var i = 0; i < _self.moreNavs.dropdown.childNodes.length; i++) {
			if(_self.moreNavs.dropdown.childNodes[i].classList.contains(_self.config.activeClass)){
				activeInMoreTab = true;
				break;
			}
		}
		if(activeInMoreTab) {
			core.style.addClass(_self.moreNavs.dropdown.parentNode, _self.config.activeClass );
		} else {
			core.style.removeClass(_self.moreNavs.dropdown.parentNode, _self.config.activeClass );
		}

	};

	var init = function( _self ){
		buildNavs( _self );
	};

	/* PUBLIC OBJECT */

	/**
	 * Constructor for MoreNav object
	 *
	 * @param {Object.<Config>} [config] Config properties used when consructing a nav
	 * @constructor
	 */
	ui.moreNav = function( config ){

		var _self = this;
		_self.config = setDefaults( config || {} );
		init( _self );
		if( typeof _self.config.buildCallback === 'function' ){
			_self.config.buildCallback( _self );
		}

	};

    /**
     * Will perform the calculations again for showing/hiding elements in the more nav
     */
    ui.moreNav.prototype.reset = function() {
        var _self = this;
        _self.moreNavs.wrapWidth = 0;
        checkMoreToggle( _self );
    };

}( PULSE.ui, PULSE.core ));


/*globals PULSE.ui, PULSE.core */
( function( ui, core ) {


	/**
	 * @namespace ui.pagination.private
	 */

	/**
	 * draw the pagination from the template
	 *
	 * @param {ui.scrollpagination} _self contextual reference to the object that is calling the function
	 */
	var drawPagination = function( _self )
	{
		_self.element.innerHTML = Mustache.render( _self.paginationTemplate, {} );
		_self.previousContainer = _self.element.getElementsByClassName( 'paginationPreviousContainer' )[ 0 ];
		_self.nextContainer = _self.element.getElementsByClassName( 'paginationNextContainer' )[ 0 ];
	};

	/**
	 * set the next/previous listeners for the pagination
	 *
	 * @param {ui.pagination} _self contextual reference to the object that is calling the function
	 */
	var setListeners = function( _self )
	{
		_self.previousContainer.addEventListener( 'click', function( evt ) {
			if ( ! core.style.hasClass( _self.previousContainer, 'inactive' ) )
			{
				_self.pageInfo.page--;
				_self.refreshPagination( _self.config.callback );
			}
		} );

		_self.nextContainer.addEventListener( 'click', function( evt ) {
			if ( ! core.style.hasClass( _self.nextContainer, 'inactive' ) )
			{
				_self.pageInfo.page++;
				_self.refreshPagination( _self.config.callback );
			}
		} );
	};

	/**
	 * create pagination, for requesting more content
	 *
	 * @param {HTMLElement} element Element to hold the pagination
	 * @param {config} config Configuration for the pagination :
	 	- pageInfo : Pagination Object:
	 		- page
	 		- pageSize
	 		- numEntries
	 		- numPages
	 	- callback: Callback when a new page is requested
	 */
	ui.pagination = function( element, config ) {
		var _self = this;

		_self.config = config || {};
		_self.element = element;
		_self.paginationTemplate = config.paginationTemplate;

		drawPagination( _self );
		_self.initPagination( config.pageInfo );

		setListeners( _self );
	};

	ui.pagination.prototype.initPagination = function( pageInfo )
	{
		var _self = this;

		_self.pageInfo = pageInfo || {};
		if ( !_self.pageInfo.page )
		{
			_self.pageInfo.page = 0;
		}

		if ( !_self.pageInfo.pageSize )
		{
			_self.pageInfo.pageSize = 10;
		}

		if ( !_self.pageInfo.numEntries )
		{
			_self.pageInfo.numEntries = 0;
		}

		if ( !_self.pageInfo.numPages && parseInt( _self.pageInfo.numEntries ) > -1 )
		{
			_self.pageInfo.numPages = Math.ceil( parseInt( _self.pageInfo.numEntries ) / parseInt( _self.pageInfo.pageSize ) );
		}
		_self.refreshPagination();
	};

	/**
	 * refresh pagination to calculate whether a button should be inactive or not. Do callback if applicable
	 *
	 * @param {function} callback Optional callback when refreshing pagination
	 */
	ui.pagination.prototype.refreshPagination = function( callback )
	{
		var _self = this;

		if  ( ( _self.pageInfo.numPages !== undefined && ( _self.pageInfo.page >= _self.pageInfo.numPages - 1 || _self.pageInfo.numPages < 1 ) ) || ( _self.pageInfo.numPages === undefined && _self.pageInfo.currentSize < _self.pageInfo.pageSize ) )
		{
			_self.pageInfo.page = ( _self.pageInfo.numPages !== undefined ) ? _self.pageInfo.numPages - 1 : _self.pageInfo.page;
			core.style.addClass( _self.nextContainer, 'inactive' );
		}
		else
		{
			core.style.removeClass( _self.nextContainer, 'inactive' );
		}

		if ( _self.pageInfo.page > 0 )
		{
			core.style.removeClass( _self.previousContainer, 'inactive' );
		}
		else
		{
			_self.pageInfo.page = 0;
			core.style.addClass( _self.previousContainer, 'inactive' );
		}
		if ( callback && _self.config.target )
		{
			callback.call( _self.config.target, _self.pageInfo );
		}
	};

	ui.pagination.prototype.updateCurrentSize = function( size )
	{
		var _self = this;

		_self.pageInfo.currentSize = size;
		_self.refreshPagination();
	};

} )( PULSE.ui, PULSE.core );

/*globals PULSE, PULSE.ui, PULSE.core */

(function( ui, core ){
	"use strict";

	/**
	 * ShareText Object:
	 * @typedef {Object} ShareText
	 */

	/**
	 * Config Object:
	 * @typedef {Object} Config
     * @property {String} [activeClass] CSS class used when the share option is displayed
     * @property {String} [socialService] Data attribute of a social channel
     * @property {boolean} [hideUrl] Flag if the current page URL should also be shared with the selected text - default: true
     * @property {Integer} [delay] delay time in ms of when the social options should appear after selecting text
	 */

	/**
	 * @namespace ui.shareText.private
	 */

	/* PRIVATE METHODS */

	var setDefaults = function( config ) {

		if ( !config.activeClass ) {
			config.activeClass = 'active';
		}
        if (!config.socialService) {
            config.socialService = 'data-social-service';
        }
        if (!config.hideUrl) {
            config.hideUrl = true;
        }
        if (!config.delay) {
            config.delay = 250;
        }

		return config;

	};

	var setEventListeners = function( _self ) {

        _self.contentElement.addEventListener('mousedown', function(e) {
            _self.mouseDown = true;
        });
        _self.contentElement.addEventListener('touchstart', function(e) {
            _self.mouseDown = true;
        });

        document.body.addEventListener('mouseup', function(e) {
            onPointerUp(e, _self);
        });

        document.body.addEventListener('touchend', function(e) {
           if (e.changedTouches.length) {
               onPointerUp(e.changedTouches[0], _self);
           }
        });

        document.body.addEventListener('mousedown', function() {
            closeShareOptions(_self);
        });

        document.body.addEventListener('keydown', function() {
            closeShareOptions(_self);
        });

        if (_self.shareChannels.length) {
            var eventFunc = function(e) {
                e.preventDefault();
                e.stopPropagation();

                if (typeof _self.config.channelSelectionCallback === 'function') {
                    _self.config.channelSelectionCallback( this, _self.selectedText );
                } else {
                    channelSelectionCallback( e, _self );
                }
            };
            var preventAction = function(e) {
                e.preventDefault();
            };

            for (var i = 0; i < _self.shareChannels.length; i++) {
                _self.shareChannels[i].addEventListener('mousedown', eventFunc);
                _self.shareChannels[i].addEventListener('touchstart', eventFunc);
                if (_self.shareChannels[i].getAttribute('prevent-action') !== null) {
                    _self.shareChannels[i].addEventListener('click', preventAction);
                }
            }
        }

	};

    var channelSelectionCallback = function(evt, _self) {
        // handle clicks on individual social clicks
        var clicked = _self.getSocialDataset( evt.currentTarget );
        if ( clicked && clicked.socialService ) {
            ui.socialHelpers[ clicked.socialService ].sharePage( null, false, _self.selectedText, _self.config.hideUrl, evt.currentTarget );
        }
    };

    var onPointerUp = function(e, _self) {
        if (_self.mouseDown) {
            _self.pointer = e;

            setTimeout(function() {
                checkTextSelection(_self);
                _self.mouseDown = false;
            }, _self.config.delay);
        }
    };

    var checkTextSelection = function (_self) {
        _self.selectedText = getSelectedText();

        if (_self.selectedText && _self.selectedText.length) {
            showShareOptions(_self);
        } else {
            closeShareOptions(_self);
        }
    };

    var getSelectedText = function () {

        var text = '';

        if (typeof window.getSelection !== 'undefined') {
            text = window.getSelection().toString();
        } else if (typeof document.selection !== 'undefined' && document.selection.type == 'Text') {
            text = document.selection.createRange().text;
        }

        if (String.prototype.trim) {
            text = text.trim();
        }

        return text;
    };

    var showShareOptions = function(_self) {
        core.style.addClass(_self.shareOptions, _self.config.activeClass);

        var y = _self.pointer.pageY - _self.contentElement.offsetTop;

        _self.shareOptions.style.left = (_self.shareOptions.offsetWidth ? _self.pointer.clientX - (_self.shareOptions.offsetWidth / 2) : _self.pointer.clientX) + 'px';
        _self.shareOptions.style.top = (_self.pointer.clientY + document.body.scrollTop) + 'px';
    };

    var closeShareOptions = function(_self) {
        core.style.removeClass(_self.shareOptions, _self.config.activeClass);
    };

	var init = function( _self ) {
        _self.contentElement = document.querySelector(_self.config.content);
        _self.shareOptions = document.querySelector(_self.config.shareOptions);
        _self.shareChannels = document.querySelectorAll(_self.config.shareChannels);

        if (_self.contentElement && _self.shareOptions) {
    		setEventListeners( _self );
        }
	};

	/* PUBLIC OBJECT */

	/**
	 * Constructor for shareText object
	 *
	 * @param {Object.<Config>} [config] Config properties used when consructing the text share functionality
	 * @constructor
	 */
	ui.shareText = function( config ){

		var _self = this;
		_self.config = setDefaults( config || {} );

		init( _self );

		if ( typeof _self.config.buildCallback === 'function' ) {
			_self.config.buildCallback( _self );
		}

	};

    /**
	 * move up the dom tree to find the element containing the desired data attributes. Do not traverse up past the
	 * widget container. return the data set attribute of the element.
	 *
	 * @param {object} element DOM Element on which to begin the traversal
	 * @returns {object} hash - dataset attribute of the element or fale if no element can be found
	 */
	ui.shareText.prototype.getSocialDataset = function( element ) {
		var _self = this,
            inspecting = element;

		do {
            if (inspecting) {
    			if( inspecting.getAttribute( 'data-social-service' ) ) {
    				return inspecting.dataset;
    			}
    			inspecting = inspecting.parentElement;
            } else {
                break;
            }
		} while ( inspecting !== _self.element );

		return false;
	};

}( PULSE.ui, PULSE.core ));


/*globals PULSE, PULSE.ui*/

( function( ui ) {

	/**
	 * @namespace ui.socialHelpers.private
	 */

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

        var _self = this;
		_self.name = serviceName;

		_self.socialLinks = {
			"twitter" : { "shareUrl" : "http://www.twitter.com/intent/tweet?text=" },
			"facebook" : { "shareUrl" : "http://www.facebook.com/sharer/sharer.php?u=" },
			"googleplus" : { "shareUrl" : "http://plus.google.com/share?url=" },
			"whatsapp" : { "shareUrl" : "whatsapp://send?text=" },
			"email" : { }
		};

		_self.defaultWindowConfiguration = {
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

	};

	/**
	 * Share a page url or the current page url ( if no url passed ) to the social
	 * media site with which the instance was created
	 *
	 * @param {string} url the url to share on the social media site
	 * @param {string} body optionally provide a text to share
	 * @param {boolean} doNotDisplayUrl flag if a URL should be shown with the shared text
     * @returns {string} url string inclusive of the encoded url
	 */
	socialHelper.prototype.buildShareUrl = function( url, body, service, doNotDisplayUrl ) {

		var _self = this,
            href = url ? url : window.location.href,
            share = doNotDisplayUrl ? '' : href;

		if ( body ) {
			share += " " + body;
		}
        if (service === 'facebook') {
            share = href;
        }

		return _self.socialLinks[ _self.name ].shareUrl + encodeURIComponent( share );
	};

	/**
	 * create s string representation of the configuration object provided so it can be
	 * used in the call to window.open, for example;
	 *
	 * "menubar=no,location=yes,resizable=yes,scrollbars=yes,status=yes"
	 *
	 * @param {object} windowConfiguration the configuration object to stringify
	 * @returns {string} comma separated list of configuration parameters
	 */
	socialHelper.prototype.makeWindowConfigurationString = function( windowConfiguration ) {

		if ( windowConfiguration ) {

			var settings = Object.keys( windowConfiguration );
			var configurationString = "";

			for ( c = 0; c < settings.length; c++ ) {

				configurationString += settings[ c ] + '=' + windowConfiguration[ settings[ c ] ];

				if ( c < ( settings.length -1 ) ) {
					configurationString += ',';
				}
			}

			return configurationString;
		}

		return false;
	};

	/**
	 * create a share url for the service with which the instance was created and open a
	 * new window using the parameters provided, or the defaults.
	 *
	 * @param {string} url optionally provide a specific url to link to, otherwise the current window.location
	 * will be used to create a share url link
     * @param {object} windowConfiguration optionally provide a window configuration object
	 * @param {string} body optionally provide a text to share
	 * @param {boolean} doNotDisplayUrl flag if a URL should be shown with the shared text
	 */
	socialHelper.prototype.sharePage = function( url, windowConfiguration, body, doNotDisplayUrl, elem ) {

        var _self = this, link;

        switch (_self.name) {
            case 'email':
                if (elem) {
                    link = 'mailto:?body=' + body;
                    elem.setAttribute('href', link);
                }
                break;
            case 'whatsapp':
                if (elem) {
                    link = _self.socialLinks.whatsapp.shareUrl + body;
                    elem.setAttribute('href', link);
                }
                break;
            default:
                window.open( _self.buildShareUrl( url, body, _self.name, doNotDisplayUrl ), "_blank", _self.makeWindowConfigurationString(
                    windowConfiguration || _self.defaultWindowConfiguration ) );
        }
	};

	/**
	 * keep the social helpers under the ui object
	 *
	 * @type {{twitter: socialHelper, facebook: socialHelper, google: socialHelper}}
	 */
	ui.socialHelpers = {
		"twitter" : new socialHelper( 'twitter' ),
		"facebook" : new socialHelper( 'facebook' ),
        "google" : new socialHelper( 'googleplus' ),
		"email" : new socialHelper( 'email' ),
		"whatsapp" : new socialHelper( 'whatsapp' )
	};

} )( PULSE.ui );

(function( ui, core ) {
    "use strict";

    ui.photoGalleries = [];

    /**
    * Config Object:
    * @typedef {Object} Config
    * @property {String} [itemSelector] CSS selector for the gallery items
    * @property {String} [imageSelector] CSS selector for the gallery item photos
    * @property {Array} [instances] Array which contains all instances of galleries - default []
    * @property {Float} [attractionStrength] Physics setting - strength of the attraction power to a position
    * @property {Float} [friction] Physics setting - friction from 0 to 1, where 0 is no friction
    * @property {Integer} [initialIndex] Display item at this index when gallery is created
    * @property {Boolean} [draggable] Is slider draggable on non touch devices - default false
    * @property {Boolean} [resize] Does the gallery resize when browser size changes - default true
    * @property {Boolean} [expandable] Can open image in full screen - default true
    * @property {Object} [thumbnails] Show photo thumbnails - default null
    * @property {Object} [controls] Will contain all control elements (prev, next, expand, ...)
    * @property {Boolean} [singlePhotoViewer] Flag if it's only a gallery for a single photo (e.g. a simple photo modal)
    * @property {Boolean} [keyboardNavigation] Is keyboard navigation of the gallery activated
    *
    * @property {Function} [onGalleryBuilt] Callback event when the gallery has been loaded and built
    * @property {Function} [onFullscreenOpened] Callback event when the fullscreen mode has been opened
    * @property {Function} [onFullscreenClosed] Callback event when the fullscreen mode has been closed
    * @property {Function} [isVisibleEvent] Callback event when the gallery becomes visible in the browser viewport
    * /

    /* PRIVATE METHODS */

    var setDefaults = function( config ){

        var defaults = {
            itemSelector: '.swingSloth__item',
            imageSelector: '.swingSloth__image',
            instances: [],
            attractionStrength: 0.025,
            friction: 0.16,
            initialIndex: 0,
            draggable: false,
            resize: true,
            expandable: true,
            thumbnails: null,
            controls: {},
            singlePhotoViewer: false,
            keyboardNavigation: true,

            // event callbacks
            onGalleryBuilt: function() { },
            onFullscreenOpened: function() { },
            onFullscreenClosed: function() { },
            isVisibleEvent: function() { }
        };

        config.singlePhotoViewer = config.singlePhotoViewer === 'true' ? true : false;

        config = core.object.extend(defaults, config);

        return config;

    };

    var setupGallery = function( _self ){

        // initial properties
        _self.selectedIndex = _self.config.initialIndex;
        _self.sliderPos = 0;
        _self.sliderPosTarget = 0;
        _self.firstItemLoaded = false;
        _self.highestItem = _self.config.maxHeight ? 99999 : 0;
        _self.controls = {};

        // initial physics properties
        _self.velocityX = 0;
        _self.acceleration = 0;
        _self.friction = 1 - _self.config.friction;
        _self.attractStrength = _self.config.attractionStrength;

        // create wrapper, viewport & slider
        createWrapper(_self);
        createViewport(_self);
        createSliderContainer(_self);

        createDrag(_self); // add drag event & functionality
        create(_self); // create gallery content
        createCSSStyles(_self); // add gallery specific css

        if (_self.selectedIndex > 0 && _self.selectedIndex < _self.items.length) {
            // move slide to specified index from config.initialIndex
            _self.moveSlideTo(_self.selectedIndex, 1, true);
        } else {
            _self.selectedIndex = 0;
        }

    };

    var createWrapper = function(_self) {
        _self.wrapper = document.createElement('div');
        _self.wrapper.className = 'swingSloth__wrapper';
    };

    var createViewport = function(_self) {
        _self.viewport = document.createElement('div');
        _self.viewport.className = 'swingSloth__viewport';
        _self.viewport.style.position = 'relative';

        _self.viewport.style.overflow = !_self.config.singlePhotoViewer ? 'hidden' : 'visible';
    };

    var createSliderContainer = function( _self ){
        // slider element does all the positioning
        var slider = document.createElement('div');
        slider.className = 'swingSloth__slider';
        _self.slider = slider;
    };

    /* CSS specificetly needed for gallery */
    var createCSSStyles = function( _self ) {

        if (!document.getElementById('swingsloth__css-styles')) {

            var css = '.swingSloth__wrapper.expanded { position: fixed; width: 100%; height: 100%; max-width: none; top: 0; left: 0; }';
            css += '.swingSloth__viewport { width: 100%; }';
            css += '.swingSloth__wrapper.expanded .bigger-than-viewport img { height: 100%; width: auto; margin: 0 auto; }';

            var style = document.createElement('style');
            style.type = 'text/css';
            style.setAttribute('id', 'swingsloth__css-styles');

            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            document.querySelector("head").appendChild(style);

        }

    };

    var createDrag = function(_self) {
        // initialise all drag events
        _self.dragging.initHandlers(_self);
    };

    /* creates the whole gallery content */
    var create = function( _self ) {

        _self.viewport.appendChild( _self.slider );
        _self.wrapper.appendChild( _self.viewport );
        _self.element.insertBefore( _self.wrapper, _self.element.firstChild );
        core.style.addClass(_self.element, 'swingSloth');

        var galleryItems = _self.element.querySelectorAll(_self.config.itemSelector);

        if ( _self.isActive || !galleryItems.length) {
            return;
        }

        _self.isActive = true;

        moveElements( galleryItems, _self.slider );

        reInitiateItems(_self);
        createControls(_self);

        _self.width = _self.viewport.offsetWidth;

        if (_self.config.resize) {
            // add resize event & functionality
            var resize = {
                method: function() {
                    windowResize(_self);
                }
            };
            core.event.windowResize.add(resize);
        }

        setEventListeners(_self);

        // last step, kick off animations!
        _self.animation.animate(_self);

        if (typeof _self.config.onGalleryBuilt === 'function') {
            setTimeout(function(){
                _self.config.onGalleryBuilt();
            }, 0);
        }

    };

    /* move an element into another one */
    var moveElements = function( elems, toElem ) {
        elems = core.object.makeArray( elems );
        while ( elems.length ) {
            toElem.appendChild( elems.shift() );
        }
    };

    var reInitiateItems = function( _self ) {
        _self.items = createItems( _self ); // creates all gallery items
        updateItemSizes(_self);
        positionItems(_self); // positions the items in the slider
        setGallerySize(_self); // sets the gallery size to fit the biggest item

        if (_self.config.created) {
            refreshControls(_self);
        }
    };

    var setEventListeners = function(_self) {
        // scroll event for visibility callback
        window.addEventListener("scroll", isGalleryVisible, false);

        document.onkeydown = checkKeyDownEvent;
    };

    var updateItemSizes = function( _self ) {
        var item, image, content;
        // goes through all gallery items and updates their sizes in the instance
        for ( var i = 0, len = _self.items.length; i < len; i++ ) {
            item = _self.items[i];

            item.width = item.element.offsetWidth;
            item.height = item.element.offsetHeight;
            item.positionX = (i * item.width);

            if (_self.expanded && item.height >= window.innerHeight) {
                core.style.addClass(item.element, 'bigger-than-viewport');
                item.width = item.element.offsetWidth;
                item.height = item.element.offsetHeight;
                item.positionX = (i * item.width);
            } else {
                core.style.removeClass(item.element, 'bigger-than-viewport');
            }

            if (item.height < _self.highestItem) {
                // center image vertically in viewport
                item.element.style.top = '50%';
                if (!_self.config.singlePhotoViewer || (_self.config.singlePhotoViewer && _self.expanded)) {
                    item.element.style.marginTop = -(item.height/2) + 'px';
                } else {
                    item.element.style.marginTop = 0;
                }
            } else {
                item.element.style.top = 0;
                item.element.style.marginTop = 0;
            }
        }
    };

    /* Image load event callback function */
    var itemImageLoaded = function(_self, item) {
        item.height = item.element.offsetHeight;
        item.width = item.element.offsetWidth;
        var higher = _self.config.maxHeight ? (item.height < _self.highestItem) : (item.height > _self.highestItem);

        if (higher) {
            _self.highestItem = item.height;
            setGallerySize(_self);
        }

        if (_self.items) {
            updateItemSizes(_self);
        }
    };

    /* Aligns the content to the viewport when creating the gallery or expanding/closing the modal */
    var alignContent = function(_self, item) {
        if (_self.expanded) {
            var offset = _self.expanded ? window.innerHeight : _self.viewport.offsetHeight,
                spacing = (offset - item.height) / 2;
            item.element.style.marginTop = spacing + 'px';
        }
    };

    /* Creates the gallery items */
    var createItems = function(_self) {
        var itemElems = _self.element.querySelectorAll(_self.config.itemSelector),
            item, items = [], i, len;

        for ( i = 0, len = itemElems.length; i < len; i++ ) {
            item = new _self.Item( itemElems[i], _self, itemImageLoaded);
            items.push( item );
        }

        return items;
    };

    /* Positions the gallery items in the viewport */
    var positionItems = function(_self) {
        var item;
        for ( var i = 0, len = _self.items.length; i < len; i++ ) {
            item = _self.items[i];
            item.positionX = (i * item.width);
            // item.target = item.positionX;
            item.element.style.left = (i * 100) + '%';
        }
    };

    /* Adds controls for gallery navigation */
    var createControls = function( _self ) {
        createPrevNextArrows(_self);

        if (_self.config.expandable) {
            createExpandButton(_self);
        }

        if (_self.config.thumbnails) {
            createThumbnails(_self);
        }

        _self.config.created = true;
    };

    var refreshControls = function( _self ) {
        // refreshs the prev/nav buttons depending on which slide we are
        // e.g. 1st slide - left arrow is hidden
        if (_self.items.length > 1) {
            if (_self.selectedIndex === 0) {
                _self.controls.arrowLeft.style.display = 'none';
                _self.controls.arrowRight.style.display = 'block';
            } else if(_self.selectedIndex === _self.items.length -1) {
                _self.controls.arrowLeft.style.display = 'block';
                _self.controls.arrowRight.style.display = 'none';
            }
        }
    };

    var createPrevNextArrows = function( _self ) {
        var arrowLeft, arrowRight;

        if (_self.config.controls.prev) {
            arrowLeft = _self.config.controls.prev;
        } else {
            arrowLeft = document.createElement('span');
            arrowLeft.className = 'swingSloth__arrowleft';
            arrowLeft.innerHTML = '<';
        }

        if (_self.config.controls.next) {
            arrowRight = _self.config.controls.next;
        } else {
            arrowRight = document.createElement('span');
            arrowRight.className = 'swingSloth__arrowright';
            arrowRight.innerHTML = '>';
        }

        _self.wrapper.appendChild(arrowLeft);
        _self.wrapper.appendChild(arrowRight);

        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';

        arrowLeft.addEventListener('click', function(e) { moveSliderEvent(_self, -1, false); });
        arrowRight.addEventListener('click', function(e) { moveSliderEvent(_self, 1, false); });

        _self.controls.arrowLeft = arrowLeft;
        _self.controls.arrowRight = arrowRight;

        // refresh controls for hiding/displaying the appropriate buttons
        refreshControls(_self);
    };

    var createThumbnails = function( _self ) {

        var thumbs, wrapper, list, item, i;

        thumbs = new _self.Thumbnails(_self, _self.config.thumbnails);

    };


    var createExpandButton = function( _self ) {
        var expand = _self.config.controls.expand;

        if (!expand) {
            expand = document.createElement('span');
            expand.className = 'swingSloth__expandicon';
            expand.innerHTML = 'F';

            _self.wrapper.appendChild(expand);
        } else {
            core.style.addClass(expand, 'swingSloth__expandicon');
        }

        _self.controls.expand = expand;

        expand.addEventListener('click', function(e) { _self.toggleGalleryFullscreen(); });
        _self.viewport.addEventListener('touchend', function(e) { onImageTapEnd(_self); }); // on tap on image for touch devices
    };

    var onImageTapEnd = function(_self) {
        if (!_self.hasBeenDragged) {
            _self.toggleGalleryFullscreen();
        }
    };

    /* Event handler fired from controls when the slide needs to be moved to a new item */
    var moveSliderEvent = function( _self, dir, instantMove ) {
        _self.moveSlideTo(_self.selectedIndex + dir, instantMove);
    };

    /* Update the gallery viewport size according to the biggest item */
    var setGallerySize = function(_self) {

        if (_self.items && _self.items.length >= 0) {

            if (_self.highestItem <= 0) {
                _self.highestItem = _self.items[0].height;
            } else if (window.innerHeight < _self.highestItem) {
                _self.highestItem = window.innerHeight;
            }

            _self.viewport.style.height = _self.highestItem + 'px';
            _self.slider.style.height = _self.highestItem + 'px';
        }
    };

    /* Gets the hightest item so we can set the size of the gallery wrapper */
    var updateHighestItem = function(_self) {
        updateItemSizes(_self);

        var highest, i;
        _self.highestItem = -1; // reset

        for (i = 0; i < _self.items.length; i++) {
            _self.items[i].height = _self.items[i].element.offsetHeight;
            highest = _self.config.maxHeight ? (_self.items[i].height < _self.highestItem) : (_self.items[i].height > _self.highestItem);

            if (highest) {
                _self.highestItem = _self.items[i].height;
            }
        }

        setGallerySize(_self);
    };

    /* Event handler which is fired when screen resizes */
    var windowResize = function(_self) {

        var viewport = _self.viewport.offsetWidth;

        if (viewport !== _self.width) {
            _self.width = viewport;
            updateHighestItem(_self);

            _self.moveSlideTo(_self.selectedIndex, true);

            if (_self.expanded) {
                updateViewportPosition(_self);
            }
        }

    };

    /* Updates gallery dimensions, slide dimensions & positions, and viewport */
    var repaintGallery = function(_self) {
        _self.viewport.style.marginTop = 0;
        _self.viewport.style.height = '100%';
        _self.slider.style.height = '100%';

        updateHighestItem(_self);

        _self.moveSlideTo(_self.selectedIndex, true);

        if (_self.expanded) {
            updateViewportPosition(_self);
        }
    };

    /* Event handler keyboard pressing */
    var checkKeyDownEvent = function(e) {
        var i, gallery;
        e = e || window.event;

        for (i = 0; i < ui.photoGalleries.length; i++) {
            if (ui.photoGalleries[i].expanded) {
                gallery = ui.photoGalleries[i];
                break;
            }
        }

        if (gallery && gallery.expanded) {
            switch (e.keyCode) {
                case 37: // left arrow
                    if (gallery.selectedIndex > 0) {
                        gallery.moveSlideTo(gallery.selectedIndex - 1);
                    }
                    break;
                case 39: // right arrow
                    gallery.moveSlideTo(gallery.selectedIndex + 1);
                    break;
                case 27: // escape button
                    gallery.toggleGalleryFullscreen();
                    break;
            }

            e.stopPropagation();
        }
    };

    /* Check if an element is visible in the viewport */
    var isGalleryVisible = function() {

        var rect, i,
            html = document.documentElement,
            windowHeight = window.innerHeight || html.clientHeight;

        for (i = 0; i < ui.photoGalleries.length; i++) {
            rect = ui.photoGalleries[i].element.getBoundingClientRect();

            if (rect.top >= 0 && rect.top <= windowHeight ||
                    rect.bottom >= 0 && rect.bottom <= windowHeight) {

                ui.photoGalleries[i].isInViewport = true;

                if (typeof ui.photoGalleries[i].config.isVisibleEvent === 'function') {
                    ui.photoGalleries[i].config.isVisibleEvent();
                }

            } else {
                ui.photoGalleries[i].isInViewport = false;
            }
        }

    };

    /* Updates the viewport height according to the highest item and centers it vertically */
    var updateViewportPosition = function(_self) {
        var clientHeight = window.innerHeight || document.documentElement.clientHeight,
            spacing;

        spacing = (clientHeight - _self.highestItem) / 2;

        _self.viewport.style.marginTop = spacing + 'px';
    };

    /* Switch photo variant when toggling fullscreen */
    var switchPhotoVariants = function(_self, fullscreen) {

        var thumbVariant, fullscreenVariant,
            loadedCallback = function(item) {
                item.imageVariants.fullscreen.image.onload = null;
                item.imageVariants.fullscreen.loaded = true;
                core.style.addClass(item.imageVariants.preview.image, 'u-hide');
                core.style.removeClass(item.imageVariants.fullscreen.image, 'u-hide');

                repaintGallery(_self);
                updateViewportPosition(_self);
            };

        for (var i = 0; i < _self.items.length; i++) {
            if (fullscreen && _self.items[i].imageVariants.fullscreen) {
                if (!_self.items[i].imageVariants.fullscreen.loaded) {
                    // if the fullscreen image has not been loaded yet, do it now and swap images on the loadedCallback
                    _self.items[i].imageVariants.fullscreen.image.onload = loadedCallback.bind(this, _self.items[i]);
                    _self.items[i].imageVariants.fullscreen.image.src = _self.items[i].imageVariants.fullscreen.url;
                } else {
                    core.style.addClass(_self.items[i].imageVariants.preview.image, 'u-hide');
                    core.style.removeClass(_self.items[i].imageVariants.fullscreen.image, 'u-hide');
                }
            } else if (!fullscreen && _self.items[i].imageVariants.fullscreen) {
                core.style.removeClass(_self.items[i].imageVariants.preview.image, 'u-hide');
                core.style.addClass(_self.items[i].imageVariants.fullscreen.image, 'u-hide');
            }
        }
    };



    /* PUBLIC OBJECT */

    /**
    * Constructor for modal object
    *
    * @param {Object.<Config>} [config] Config properties used when consructing a modal
    * @constructor
    */
    ui.swingSloth = function( element, config ){

        if (!element) {
            return;
        }

        var _self = this;

        _self.element = element;
        _self.config = setDefaults( config || {} );

        ui.photoGalleries.push(_self);

        setupGallery( _self );

    };

    /**
    * Move slide to new index
    *
    * @param {Integer} [index] Index of the gallery item to display
    * @param {Boolean} [instantMove] Instantly move slider to new index without animations
    */
    ui.swingSloth.prototype.moveSlideTo = function(index, instantMove) {
        var _self = this;

        _self.selectedIndex = index;

        if (_self.selectedIndex < _self.items.length && _self.selectedIndex >= 0) {

            _self.selectedItem = _self.items[_self.selectedIndex];

            // update controls
            if (_self.selectedIndex === _self.items.length - 1) {
                _self.controls.arrowRight.style.display = 'none';
            } else {
                _self.controls.arrowRight.style.display = 'block';
            }

            if(_self.selectedIndex === 0) {
                _self.controls.arrowLeft.style.display = 'none';
            } else {
                _self.controls.arrowLeft.style.display = 'block';
            }

            // move slides
            _self.sliderPosTarget = -_self.selectedItem.positionX;
            if (instantMove) {
                _self.sliderPos = -_self.selectedItem.positionX;
            }

        } else {
            if (_self.selectedIndex === _self.items.length) {
                _self.selectedIndex = _self.items.length -1;
            } else if (_self.selectedIndex < 0) {
                _self.selectedIndex = 0;
            }
        }
    };

    /**
    * Add a new item to gallery
    *
    * @param {HTML Object} [item] HTML element to add as an item to the gallery
    */
    ui.swingSloth.prototype.addItem = function(item) {
        var _self = this;

        if (!item) {
            return;
        }

        if (!core.object.isArray(item)) {
            _self.slider.appendChild(item);
        } else {
            for (var i = 0; i < item.length; i++) {
                if(item[i]) {
                    _self.slider.appendChild(item[i]);
                }
            }
        }

        reInitiateItems(_self);
        _self.animation.animate(_self);
    };

    /**
    * Remove an item from gallery
    *
    * @param {Integer} [index] Index of item to remove
    */
    ui.swingSloth.prototype.removeItem = function(index) {
        var _self = this;

        if (index >= 0 && index < _self.items.length) {

            _self.slider.removeChild(_self.items[index].element);
            _self.items.splice(index, 1);

        }

        reInitiateItems(_self);
    };

    /**
    * Toggle the gallery fullscreen mode
    */
    ui.swingSloth.prototype.toggleGalleryFullscreen = function() {

        var _self = this;

        switchPhotoVariants(_self, !_self.expanded);

        if (!_self.expanded) {

            _self.expanded = true;

            core.style.addClass(_self.wrapper, 'expanded');
            _self.element.style.height = _self.highestItem;

            repaintGallery(_self);
            updateViewportPosition(_self);

            if (typeof _self.config.onFullscreenOpened === 'function') {
                _self.config.onFullscreenOpened();
            }

        } else {
            _self.viewport.style.marginTop = 0;
            _self.element.style.height = 'auto';
            core.style.removeClass(_self.wrapper, 'expanded');
            _self.expanded = false;
            repaintGallery(_self);

            if (typeof _self.config.onFullscreenClosed === 'function') {
                _self.config.onFullscreenClosed();
            }
        }

    };

    /**
    * Add a custom event listener
    *
    * @param {String} [eventName] Name of the event to add
    * @param {Funcction} [callback] Custom callback function you want to call
    */
    ui.swingSloth.prototype.setEventListener = function(eventName, callback) {
        var _self = this,
            event = _self.config[eventName];

        if (typeof event === 'function') {
            _self.config[eventName] = callback;
        }
    };

    /**
    * Remove a custom event listener
    *
    * @param {String} [eventName] Name of the event to remove
    */
    ui.swingSloth.prototype.removeEventListener = function(eventName) {
        var _self = this,
            event = _self.config[eventName];

        if (typeof event === 'function') {
            _self.config[eventName] = function() {};
        }
    };

    /**
    * Refresh gallery items (sizes, positioning, ...)
    */
    ui.swingSloth.prototype.refresh = function() {
        var _self = this;
        reInitiateItems(_self);
    };








    /* for the dot example */
    ui.Particle = function( elem ){

        if (!elem) {
            return;
        }

        this.element = elem;
        this.positionX = 0;
        this.dragPositionX = 0;
        this.velocityX = 1;
        this.friction = 0.95;
        this.accelerationX = 1;
        this.isDragging = false;

    };

    ui.Particle.prototype.render = function() {
        // position particle with transform
        this.element.style.transform = 'translateX(' + this.positionX + 'px)';
    };

    ui.Particle.prototype.update = function() {
        this.velocityX += this.accelerationX;
        this.velocityX *= this.friction;
        this.positionX += this.velocityX;
        // this.applyDragForce();
        // reset acceleration
        this.accelerationX = 0;
    };

    ui.Particle.prototype.applyForce = function(force) {
        this.accelerationX += force;
    };




}( PULSE.ui, PULSE.core ));

/*globals PULSE, PULSE.ui, PULSE.core */

(function( ui, core ){
	"use strict";

	/**
	 * Tab Object:
	 * @typedef {Object} Tab
	 * @property {String} title Title text for tab activator
	 * @property {HTMLElement} activator HTML element that triggers this Instance content to be set in the modal
	 * @property {HTMLElement} content HTML element that is the target content displayed for this instance
	 * @property {String} uiArgs Arguments to be used within callback methods as stringified JSON
	 */

	/**
	 * Config Object:
	 * @typedef {Object} Config
	 * @property {HTMLElement} [tabItems] A Nodelist/Array of tab content items - defaults to all elements with the attribute '[data-ui-tab]'
	 * @property {String} [builtClass] CSS class applied to wrap object when the tabs are built - defaults to 'tabbed'
	 * @property {String} [activeClass] CSS class used to define active tab objects - defaults to 'active'
	 * @property {HTMLElement} [tabLinkWrap] A single wrapping HTML element - if provided the tab links are placed within this element, else they are placed as the first-child of wrap
	 * @property {String} [tabParam] Query string param used to set default active tab - defaults to 'tab'
	 * @property {Function} [tabCallback] Function to be called when a tab is opened - receives full tab object
	 * @property {Function} [buildCallback] Function to be called when a tab ui is built - receives full tab object
	 */

	/**
	 * @namespace ui.tab.private
	 */

	/* PRIVATE VARIABLES */
	var resizeTimer;

	/* PRIVATE METHODS */

	var setDefaults = function( config ){

		if( !config.tabItems ){
			config.tabItems = document.querySelectorAll( '[data-ui-tab]' );
		}
		if( !config.builtClass ){
			config.builtClass = 'tabbed';
		}
		if ( !config.defaultIndex )
		{
			config.defaultIndex = 0;
		}

		if( !config.activeClass ){
			config.activeClass = 'active';
		}
		if ( !config.disableClass ){
			config.disableClass = 'disabled';
		}
		if( !config.tabParam ){
			config.tabParam = 'tab';
		}
		if( !config.moreToggle ){
			config.moreToggle = false;
		}
		if( !config.moreLabel ){
			config.moreLabel = 'More';
		}
		config.tabs = [];
		return config;

	};


	var buildTabs = function( _self ){

		_self.config.wrap = document.createElement('div');
		_self.config.tabItems[0].parentNode.insertBefore( _self.config.wrap, _self.config.tabItems[0] );

		_self.config.nav = document.createElement('ul');
		_self.config.nav.classList.add('tablist');
		_self.config.nav.setAttribute( 'role', 'tablist' );

		Array.prototype.map.call( _self.config.tabItems, function( el, index ){
			var title = el.getAttribute('data-ui-tab');
			var args;
			if( el.getAttribute('data-ui-args') ){
				args = JSON.parse( el.getAttribute('data-ui-args') );
			}
			var tab = {
				index: index,
				title: title,
				content: el,
				activator: document.createElement('li'),
				uiArgs: args,
				isHidden: false
			};
			tab.title = tab.content.getAttribute('data-ui-tab');
			tab.activator.textContent = tab.title;
			tab.activator.setAttribute( 'role', 'tab' );
			tab.activator.setAttribute( 'tabindex', '0' );
			tab.activator.setAttribute( 'data-tab-index', tab.index );
			tab.activator.addEventListener( 'click', function(){
				setActiveTab( tab, _self );
			});

            if (_self.config.setTabClass) {
                tab.activator.classList.add(_self.config.setTabClass);
            }

            var customClass = tab.content.getAttribute('data-ui-class');
            if ( customClass )
            {
            	tab.activator.classList.add( customClass );
            }

            if ( tab.content.getAttribute('data-ui-disabled') )
            {
            	tab.activator.classList.add( _self.config.disableClass );
            }

			_self.config.tabs.push( tab );
			_self.config.wrap.appendChild( tab.content );
			_self.config.nav.appendChild( tab.activator );
		} );

		if ( _self.config.tabs.length - 1 < _self.config.defaultIndex )
		{
			_self.config.defaultIndex = _self.config.tabs.length - 1;
		}

		if( _self.config.tabLinkWrap ){
			_self.config.tabLinkWrap.appendChild( _self.config.nav );
		}
		else {
			var navWrap = document.createElement('nav');
			navWrap.classList.add('tabs');
			navWrap.appendChild( _self.config.nav );
		 	_self.config.wrap.insertBefore( navWrap, _self.config.wrap.firstChild );
		}
		_self.config.wrap.classList.add( _self.config.builtClass );

		if ( _self.config.moreToggle ) {
			createMoreToggle( _self );
		}

	};

	var setActiveTab = function( tab, _self, noCallback ){

		if ( _self.config.current === tab ) {
			return;
		}

		if ( core.style.hasClass( tab.activator, _self.config.disableClass ) )
		{
			return;
		}

		_self.config.tabs.map( function( item ){
			core.style.removeClass( item.content, _self.config.activeClass );
			core.style.removeClass( item.activator, _self.config.activeClass );
			if ( _self.config.moreToggle) {
				if ( item.activatorClone ) {
					core.style.removeClass( item.activatorClone, _self.config.activeClass );
				}
				core.style.removeClass( _self.moreTabs.tab, _self.config.activeClass );
			}
		} );

		core.style.addClass( tab.content, _self.config.activeClass );
		core.style.addClass( tab.activator, _self.config.activeClass );

		if ( _self.config.moreToggle ) {
			toggleMoreDropdown( _self, true );
			if ( tab.activatorClone ) {
				core.style.addClass( tab.activatorClone, _self.config.activeClass );
			}
			if ( _self.moreTabs.visible && tab.isHidden ) {
				core.style.addClass( _self.moreTabs.tab, _self.config.activeClass );
			}
		}

		_self.config.current = tab;
		if( typeof _self.config.tabCallback === 'function' && !noCallback ){
			_self.config.tabCallback( _self );
		}

	};

	var getTabByTitle = function( _self, title )
	{
		var targetTab = _self.config.tabs[ _self.config.defaultIndex ];
		if ( _self.config.tabs.length > 1 )
		{
			for ( var i = 0; i < _self.config.tabs.length; i++ )
			{
				if ( _self.config.tabs[ i ].title === title )
				{
					return _self.config.tabs[ i ];
				}
			}
		}
		return targetTab;
	};

	var getNonDisabledTab = function( _self )
	{
		var i = 0;
		var startIndex = _self.config.defaultIndex;
		while ( i < _self.config.tabs.length )
		{
			if ( startIndex > _self.config.tabs.length - 1 )
			{
				startIndex = 0;
			}
			if ( !core.style.hasClass( _self.config.tabs[ startIndex ].activator, _self.config.disableClass ) )
			{
				return _self.config.tabs[ startIndex ];
			}
			startIndex++;
			i++;
		}
		return _self.config.tabs[ _self.config.defaultIndex ];
	};

	var defaultTab = function( _self, tabTitle ){

		var defaultTabTitle = ( _self.config.defaultTitle ) ? _self.config.defaultTitle : core.url.getParam( _self.config.tabParam );
		var tabParam = tabTitle || defaultTabTitle;
		var targetTab = _self.config.tabs[ _self.config.defaultIndex ];
		if( tabParam ){
			targetTab = getTabByTitle( _self, tabParam );
		}
		if ( core.style.hasClass( targetTab.activator, _self.config.disableClass ) )
		{
			targetTab = getNonDisabledTab( _self );
		}
		setActiveTab( targetTab, _self, true );
		if( typeof _self.config.buildCallback === 'function' ){
			_self.config.buildCallback( _self );
		}

	};

	var createMoreToggle = function( _self ) {
		_self.moreTabs = {};
		_self.moreTabs.visible = false;

		var moreTab = document.createElement('li');
		core.style.addClass( moreTab, 'more' );
		_self.moreTabs.tab = moreTab;

		var moreButton = document.createElement('div');
		core.style.addClass( moreButton, 'moreToggle' );
		moreButton.textContent = _self.config.moreLabel;
		moreButton.addEventListener( 'click', function(){
			toggleMoreDropdown( _self );
		});
		moreTab.appendChild( moreButton );

		var moreIcon = document.createElement('div');
		core.style.addClass( moreIcon, 'icn' );
		core.style.addClass( moreIcon, 'chevron-down' );
		moreButton.appendChild( moreIcon );

		var moreDropdown = document.createElement('ul');
		core.style.addClass( moreDropdown, 'moreToggleDropdown' );
		moreTab.appendChild( moreDropdown );
		_self.moreTabs.dropdown = moreDropdown;

		_self.config.nav.appendChild( moreTab );

		_self.moreTabs.wrapWidth = 0; // set to 0 to force check on first run
		checkMoreToggle( _self );

		var windowResizeListener = {
			method: function( args ) {
				checkMoreToggle( args.scope );
			},
			args: {
				scope: _self
			}
		};

		core.event.windowResize.add( windowResizeListener );

	};

	var checkMoreToggle = function( _self ) {
		var wrapWidth = _self.config.wrap.offsetWidth;

		// check to see if the width has changed
		if ( _self.moreTabs.wrapWidth !== wrapWidth ) {
			// measure total width of all tabs (not including show more tab)
			var totalTabWidths = 0;
			_self.config.tabs.forEach(function(tab) {
				var width = core.style.outerWidth(tab.activator);
				totalTabWidths += width;
				tab.activatorWidth = width;
			});

			// check to see if tabs fit in new wrap width
			if ( wrapWidth <= totalTabWidths ) {
				var widthRemaining = wrapWidth;
				widthRemaining -= core.style.outerWidth(_self.moreTabs.tab);

				_self.moreTabs.visible = true;
				core.style.addClass( _self.config.nav, 'showMoreEnabled');

				_self.config.tabs.forEach(function(tab, i) {
					if ( widthRemaining < tab.activatorWidth ) {
						hideTabButton( tab, _self );
						widthRemaining = -1;
						if ( _self.config.current === tab ) {
							core.style.addClass( _self.moreTabs.tab, _self.config.activeClass );
						}
					} else {
						showTabButton( tab, _self );
						widthRemaining -= tab.activatorWidth;
						if ( _self.config.current === tab ) {
							core.style.removeClass( _self.moreTabs.tab, _self.config.activeClass );
						}
					}
				});
			} else {
				_self.moreTabs.visible = false;
				core.style.removeClass( _self.config.nav, 'showMoreEnabled');

				_self.config.tabs.forEach(function(tab) {
					showTabButton( tab, _self );
				});
			}

			// update stored width
			_self.moreTabs.wrapWidth = wrapWidth;
		}

	};

	var toggleMoreDropdown = function ( _self, forceClose ) {

		if ( forceClose ) {
			core.style.removeClass( _self.moreTabs.tab, 'open' );
		} else {
			core.style.toggleClass( _self.moreTabs.tab, 'open' );
		}

	};

	var hideTabButton = function ( tab, _self ) {

		if ( core.style.hasClass( tab.activator, 'hide' ) ) {
			return;
		}

		if ( !tab.activatorClone ) {
			tab.activatorClone = tab.activator.cloneNode( true );
			tab.activatorClone.addEventListener( 'click', function(){
				setActiveTab( tab, _self );
			});
		}

		tab.isHidden = true;
		core.style.addClass( tab.activator, 'hide' );

		var listItems = _self.moreTabs.dropdown.getElementsByTagName( 'li' );
		if ( listItems.length === 0) {
			_self.moreTabs.dropdown.appendChild( tab.activatorClone );
		} else {
			for (var i = 0; i < listItems.length; i++) {
				if ( tab.index < listItems[i].getAttribute('data-tab-index') ) {
					_self.moreTabs.dropdown.insertBefore( tab.activatorClone, listItems[i]);
					return;
				} else if ( i === (listItems.length - 1) ) {
					_self.moreTabs.dropdown.appendChild( tab.activatorClone );
				}
			}
		}

	};

	var showTabButton = function ( tab, _self ) {

		if ( !core.style.hasClass( tab.activator, 'hide' ) ) {
			return;
		}

		tab.isHidden = false;
		core.style.removeClass( tab.activator, 'hide' );
		_self.moreTabs.dropdown.removeChild( tab.activatorClone );

	};

	var init = function( _self ){

		buildTabs( _self );
		defaultTab( _self );

	};

	var disableTab = function( targetTab, _self ) {
		core.style.addClass( targetTab.activator, _self.config.disableClass );
		if ( core.style.hasClass( targetTab.activator, _self.config.activeClass ) )
		{
			var nonDisabledTab = getNonDisabledTab( _self );
			setActiveTab( nonDisabledTab, _self );
		}
	};

	/* PUBLIC OBJECT */

	/**
	 * Constructor for tab object
	 *
	 * @param {Object.<Config>} [config] Config properties used when consructing a tab
	 * @constructor
	 */
	ui.tab = function( config ){

		if( config.tabItems && config.tabItems.length < 1 ){
			return "no tab items to build";
		}

		var _self = this;
		_self.config = setDefaults( config || {} );
		init( _self );

	};

	/**
	 * Show a tab based on the given index
	 * If no match is found, first tab is set to active
	 * @return {Object} Full tab object
	 */
	ui.tab.prototype.showTabByIndex = function( index ){

		var _self = this;
		var targetTab = _self.config.tabs[index] || _self.config.tabs[0];
		setActiveTab( targetTab, _self );

		return _self;

	};

	/**
	 * Show a tab based on the given title
	 * If no match is found, first tab is set to active
	 * @return {Object} Full tab object
	 */
	ui.tab.prototype.showTabByTitle = function( title ){

		var _self = this;
		defaultTab( _self, title );

		return _self;

	};

	/**
	 * Enable a tab based on the given index
	 * If no match is found, first tab is enabled
	 * @return {Object} Full tab object
	 */
	ui.tab.prototype.enableTabByIndex = function( index ){

		var _self = this;
		var targetTab = _self.config.tabs[index] || _self.config.tabs[0];
		core.style.removeClass( targetTab.activator, _self.config.disableClass );

		return _self;
	};

	/**
	 * Enable a tab based on the given index
	 * If no match is found, first tab is enabled
	 * @return {Object} Full tab object
	 */
	ui.tab.prototype.enableTabByTitle = function( title ){

		var _self = this;
		var targetTab = getTabByTitle( _self, title );
		core.style.removeClass( targetTab.activator, _self.config.disableClass );

		return _self;
	};

	/**
	 * Disable tab based on index
	 * If no match is found, first tab is disabled
	 * @return {Object} Full tab object
	 */
	ui.tab.prototype.disableTabByIndex = function( index ){
		var _self = this;
		var targetTab = _self.config.tabs[index] || _self.config.tabs[0];
		disableTab( targetTab, _self );

		return _self;
	};

	/**
	 * Disable tab based on index
	 * If no match is found, first tab is disabled
	 * @return {Object} Full tab object
	 */
	ui.tab.prototype.disableTabByTitle = function( title ){
		var _self = this;
		var targetTab = getTabByTitle( _self, title );
		disableTab( targetTab, _self );

		return _self;
	};

}( PULSE.ui, PULSE.core ));

/*globals PULSE, PULSE.ui */

(function( swingSloth ){
    "use strict";

    var Animation = {};

    Animation.lastSliderPos = 0;

    Animation.render = function(_self) {
        // position particle with transform
        var diff = _self.sliderPos - Animation.lastSliderPos;
        if (diff < 0) {
            diff = -diff;
        }
        if (diff > 0.1) {
            _self.slider.style.transform = 'translateX(' + _self.sliderPos + 'px)';
            Animation.lastSliderPos = _self.sliderPos;
        }
    };

    Animation.applyPhysics = function(_self) {
        _self.velocityX += _self.acceleration;
        _self.sliderPos += _self.velocityX;
        _self.velocityX *= _self.friction;
        // _self.applyDragForce();
        // reset acceleration
        _self.acceleration = 0;
    };

    Animation.applyForce = function(force, _self) {
        _self.acceleration += force;
    };

    Animation.animate = function(_self) {
        var attraction = ( _self.sliderPosTarget - _self.sliderPos ) * _self.attractStrength;

        if (!isNaN(attraction)) {
            Animation.applyForce(attraction, _self);
        }
        Animation.applyPhysics(_self);
        Animation.render(_self);
        requestAnimationFrame(function(){ Animation.animate(_self); });
    };

    swingSloth.prototype.animation = Animation;

}( PULSE.ui.swingSloth ));

(function( swingSloth ){
    "use strict";

    var getClientX = function(event) {
        if (event.clientX) {
            return event.clientX;
        }
        if (event.touches && event.touches[0]) {
            return event.touches[0].clientX;
        }
        return 0;
    };

    var Drag = {
        gallery: null
    };

    Drag.initHandlers = function(_self) {

        Drag.gallery = _self;

        if (_self.config.draggable) {
            // dragability for non touch devices
            Drag.gallery.viewport.addEventListener('dragstart', Drag.onDragStart, false);
            Drag.gallery.viewport.addEventListener('drag', Drag.onDrag, false);
            Drag.gallery.viewport.addEventListener('dragend', Drag.onDragEnd, false);
        }

        Drag.gallery.viewport.addEventListener('touchstart', Drag.onDragStart, false);
        Drag.gallery.viewport.addEventListener('touchmove', Drag.onDrag, false);
        Drag.gallery.viewport.addEventListener('touchend', Drag.onDragEnd, false);

    };

    Drag.onDragStart = function(event, pointer) {

        if (event.type === 'touchstart') {
            event.preventDefault();
        }

        var _self = Drag.gallery;

        _self.hasBeenDragged = false;

        _self.dragStartPosition = getClientX(event);
        _self.dragLastPosition = getClientX(event);
    };

    Drag.onDrag = function(event, pointer, moveVector) {

        event.preventDefault();

        var _self = Drag.gallery,
            clientX = getClientX(event);

        if (clientX === _self.dragLastPosition) {
            return;
        }

        var moved = clientX - _self.dragLastPosition;

        if (moved < 150 && moved > -150) {
            _self.sliderPosTarget += moved;
        }

        if (clientX !== 0) {
            _self.dragLastPosition = clientX;
        }

        _self.hasBeenDragged = true;

    };

    Drag.onDragEnd = function(event, pointer) {

        var _self = Drag.gallery,
            snapToItem, dir = 1;

        event.preventDefault();

        // get drag direction
        if (_self.dragStartPosition > _self.dragLastPosition) {
            dir = -1;
        } else if (_self.dragStartPosition === self.dragLastPosition) {
            dir = 0;
        }

        if (dir !== 0) {
            snapToItem = Drag.getNextSnappingPoint(dir);
            _self.moveSlideTo(snapToItem);
        }

    };

    Drag.getPointer = function( pointer ) {
        return {
            x: pointer.pageX !== undefined ? pointer.pageX : pointer.clientX,
            y: pointer.pageY !== undefined ? pointer.pageY : pointer.clientY
        };
    };

    /* Gets the index of the next nearest snapping point of an item  */
    Drag.getNextSnappingPoint = function(dir) {
        var _self = Drag.gallery,
            pos = -_self.sliderPosTarget,
            nearest = 99999, i,
            nearestItem, diff;

        dir = dir || 1;

        for (i = 0; i < _self.items.length; i++) {
            diff = pos - _self.items[i].positionX - (dir * (_self.items[i].width / 2.25));
            if (diff < 0) {
                diff = -diff;
            }

            if (diff < nearest) {
                nearest = diff;
                nearestItem = i;
            }
        }

        return nearestItem;

    };

    swingSloth.prototype.dragging = Drag;

}( PULSE.ui.swingSloth ));

(function( swingSloth, core ){
    "use strict";

    var Item = function(element, parent, callback) {
        var _self = this;

        _self.element = element;
        _self.parent = parent;

        _self.create(callback);
    };

    var resetVariants = function(img) {
        var fs = img.nextElementSibling;
        if (fs && core.style.hasClass('js-item-fullscreen')) {
            fs.remove();
        }
    };

    var createImageVariants = function(_self) {

        var fullscreenImg;

        resetVariants(_self);

        _self.imageVariants = {
            preview: {}, fullscreen: {}, current: {}
        };

        _self.imageVariants.preview.imageContainer = _self.element.querySelector(_self.parent.config.imageSelector);
        _self.imageVariants.preview.image = _self.imageVariants.preview.imageContainer.querySelector('img');
        core.style.addClass(_self.imageVariants.preview.image, 'js-item-preview');

        _self.imageVariants.current = _self.imageVariants.preview;

        if (_self.imageVariants.preview.imageContainer.dataset.fullscreen) {
            fullscreenImg = document.createElement('img');
            if (_self.imageVariants.preview.image.classList && _self.imageVariants.preview.image.classList.length) {
                fullscreenImg.className = _self.imageVariants.preview.image.classList.toString();
            }
            core.style.addClass(fullscreenImg, 'js-item-fullscreen');
            core.style.addClass(fullscreenImg, 'u-hide');

            _self.imageVariants.fullscreen.imageContainer = _self.imageVariants.preview.imageContainer;
            _self.imageVariants.fullscreen.image = fullscreenImg;
            _self.imageVariants.fullscreen.url = _self.imageVariants.preview.imageContainer.dataset.fullscreen;
            _self.imageVariants.fullscreen.loaded = false;

            _self.imageVariants.preview.imageContainer.appendChild(_self.imageVariants.fullscreen.image);
        } else {
            _self.imageVariants.fullscreen = null;
        }
    };

    Item.prototype.create = function(callback) {
        var _self = this;

        if (!_self.parent.config.singlePhotoViewer) {
            _self.element.style.position = 'absolute';
        }
        _self.element.style.width = '100%';

        createImageVariants(_self);

        _self.positionX = 0;
        _self.target = 0;
        _self.width = _self.imageVariants.current.image.offsetWidth;
        _self.height = _self.imageVariants.current.image.offsetHeight;

        if (_self.height <= 20) {
            _self.imageVariants.current.image.onload = function(e) {
                callback(_self.parent, _self);
            };
        } else {
            callback(_self.parent, _self);
        }
    };

    Item.prototype.setPosition = function( x ) {
        var _self = this;
        _self.positionX = x;
    };

    swingSloth.prototype.Item = Item;

}( PULSE.ui.swingSloth, PULSE.core ));

(function( swingSloth, core ){
    "use strict";

    var Thumbnails = function(gallery, config) {

        var _self = this,
            clickEventFunction, i, thumbList;

        _self.gallery = gallery;
        _self.config = config;

        if (_self.config.thumbnails) {
            _self.items = document.querySelectorAll(_self.config.thumbnails);

            if (_self.items.length) {
                _self.previousActiveThumb = _self.items[0];

                clickEventFunction = function(index) {
                    _self.items[index].addEventListener('click', function(e) { onThumbClick(_self, index, e.target); });
                };

                for (i = 0; i < _self.items.length; i++) {
                    clickEventFunction(i);
                }

                if (_self.config.controls && _self.config.list) {
                    _self.thumbList = document.querySelector(_self.config.list);

                    document.querySelector(_self.config.controls.left).addEventListener('click', function(e) { galleryNavigationClick(_self, -1); });
                    document.querySelector(_self.config.controls.right).addEventListener('click', function(e) { galleryNavigationClick(_self, 1); });
                }
            }
        }

    };

    var onThumbClick = function(_self, index, thumb) {
        _self.gallery.moveSlideTo(index);

        if (_self.previousActiveThumb && _self.previousActiveThumb !== thumb) {
            core.style.removeClass(_self.previousActiveThumb, 'is-active');
        }

        core.style.addClass(thumb, 'is-active');
        _self.previousActiveThumb = thumb;

        var width = _self.thumbList.offsetWidth;
        _self.thumbList.scrollLeft = thumb.offsetLeft - (width / 2);
    };

    var galleryNavigationClick = function(_self, dir) {
        var width = _self.thumbList.offsetWidth;
        _self.thumbList.scrollLeft += dir * width;
    };

    swingSloth.prototype.Thumbnails = Thumbnails;

}( PULSE.ui.swingSloth, PULSE.core ));
