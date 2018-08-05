/*globals PULSE, PULSE.app */

(function( app ){
	"use strict";

	app.templates = {};
	app.common = {};
	app.defaultLanguage = "EN";
	app.account = 'PremierLeague';
	app.defaultCompCode = "EN_PR";
	app.canaryAccount = "10";
	app.accountHeader = {'label':'account','value':'premierleague'};
	app.cookiePolicyExpiry = 90; //Number of days before expiry
	app.cookiePolicyLink = "/cookie-policy"; //Number of days before expiry
	app.premierLeagueHandbook = "http://pulse-static-files.s3.amazonaws.com/premierleague/document/2016/08/09/b81992f4-cf2a-4c5e-a9c1-155169074163/2016-17_Premier_League_Handbook.pdf";
	app.pollingCacheRate = 20000;

	app.competitions = {
		'FIRST': [ 1, 4, 5, 2, 3 ],
		'U21' : [ 11, 9, 10, 6, 13 ],
		'U18' : [ 8, 7 ],
		'PL' : [ 1, 6, 7, 8, 9, 10, 11 ]
	};

	app.competition = {
		'FIRST': 1,
		'U21' : 11,
		'U18' : 8
	};

	app.paths = [
		{
			label: "local",
			domain: "localhost",
			cdn: "//cdn.pulselive.com/test/client/pl/dev/",
			api : "//api.dev.platform.pulselive.com",
			cms: "//api.dev.platform.pulselive.com/content/PremierLeague",
			canary : "https://api.canary.platform.pulselive.com/dev/",
			playerImagePath : "//platform-static-files.s3.amazonaws.com/premierleague/photos/players/",
			fantasyUserApi: "https://plusers.ismgames.com",
			fantasyAppId: 'pl-web',
			redirectUri: 'https://testpl.ismgames.com/',
			pollQuestions : 'https://dynamic.pulselive.com/dynamic/data/sam',
			pollAnswer: 'https://canary2.pulselive.com/poll/vote'
		},
		{
			label: "development",
			domain: "dev-pl.pulselive.com",
			cdn: "//cdn.pulselive.com/test/client/pl/dev/",
			api : "//api.dev.platform.pulselive.com",
			cms: "//api.dev.platform.pulselive.com/content/PremierLeague",
			canary : "https://api.canary.platform.pulselive.com/dev/",
			playerImagePath : "//platform-static-files.s3.amazonaws.com/premierleague/photos/players/",
			fantasyUserApi: "https://plusers.ismgames.com",
			fantasyAppId: 'pl-web',
			redirectUri: 'https://testpl.ismgames.com/',
			pollQuestions : 'https://dynamic.pulselive.com/dynamic/data/livewire',
			pollAnswer: 'https://canary2.pulselive.com/poll/vote'
		},
		{
			label: "test",
			domain: "testpl.pulselive.com",
			cdn: "//cdn.pulselive.com/test/client/pl/test/",
			api : "//api.test.platform.pulselive.com",
			cms: "//api.test.platform.pulselive.com/content/PremierLeague",
			canary : "https://api.canary.platform.pulselive.com/test/",
			playerImagePath : "//platform-static-files.s3.amazonaws.com/premierleague/photos/players/",
			fantasyUserApi: "https://plusers.ismgames.com",
			fantasyAppId: 'pl-web',
			redirectUri: 'https://testpl.ismgames.com/',
			pollQuestions : 'https://dynamic.pulselive.com/dynamic/data/livewire',
			pollAnswer: 'https://canary2.pulselive.com/poll/vote'
		},
		{
			label: "test",
			domain: "testpl.ismgames.com",
			cdn: "//cdn.pulselive.com/test/client/pl/test/",
			api : "//api.test.platform.pulselive.com",
			cms: "//api.test.platform.pulselive.com/content/PremierLeague",
			canary : "https://api.canary.platform.pulselive.com/production/",
			playerImagePath : "//platform-static-files.s3.amazonaws.com/premierleague/photos/players/",
			fantasyUserApi: "https://plusers.ismgames.com",
			fantasyAppId: 'pl-web',
			redirectUri: 'https://testpl.ismgames.com/',
			pollQuestions : 'https://dynamic.pulselive.com/dynamic/data/livewire',
			pollAnswer: 'https://canary2.pulselive.com/poll/vote'
		},
		{
			label: "staging",
			domain: "stage-pl.pulselive.com",
			cdn: "//resources-pl.pulselive.com/ver/",
			api : "//footballapi.pulselive.com",
			cms: "//footballapi.pulselive.com/content/PremierLeague",
			canary : "https://api.canary.platform.pulselive.com/production/",
			playerImagePath : "//platform-static-files.s3.amazonaws.com/premierleague/photos/players/",
			fantasyUserApi: "https://users.premierleague.com",
			fantasyAppId: 'pl-web',
			redirectUri: 'https://stage-pl.pulselive.com/',
			pollQuestions : 'https://dynamic.pulselive.com/dynamic/data/livewire',
			pollAnswer: 'https://canary2.pulselive.com/poll/vote'
		},
		{
			label: "production",
			domain: "www.premierleague.com",
			cdn: "//resources-pl.pulselive.com/ver/",
			api : "//footballapi.pulselive.com",
			cms: "//footballapi.pulselive.com/content/PremierLeague",
			canary : "https://api.canary.platform.pulselive.com/production/",
			playerImagePath : "//platform-static-files.s3.amazonaws.com/premierleague/photos/players/",
			fantasyUserApi: "https://users.premierleague.com",
			fantasyAppId: 'pl-web',
			redirectUri: 'https://www.premierleague.com/',
			pollQuestions : 'https://dynamic.pulselive.com/dynamic/data/livewire',
			pollAnswer: 'https://canary2.pulselive.com/poll/vote'
		}
	];

	app.checkEnvironment = function(){

		var location = window.location.hostname;
		var environment;

		app.paths.map( function( path ) {
			if( location === path.domain ){
				environment = path;
			}
		});

		return environment || "There are no app.paths defined for this domain";

	};

	app.environment = app.checkEnvironment();

	app.apiPath = {
		'clubs' : {
			// Lists all clubs in the system
			// Params : page, pageSize, compSeasonsIds
			'all' : '/clubs',
			// Get details of a specific club
			'single' : '/clubs/{id}'
		},
		'competition' : {
			// Lists all competitions in the system
			// Params : page, pageSize
			'all' : '/competitions',
			// Looks up a single competition by its abbreviation
			'single' : '/competitions/{id}',
			// Lists compseasons for a competition
			'season' : '/competitions/{id}/compseasons',
			// Get current compseason for competition
			'current' : '/competitions/{id}/compseasons/current',
			// Get historic winners for given award
			'award' : '/competitions/{id}/awards/{aid}'
		},
		'competition-season' : {
			// Looks up a single competition season by its ID
			'single' : '/compseasons/{id}',
			'gameweeks' : {
				// Lists information about the gameweeks in a given competition season
				// Params : startDate ( yyyy-mm-dd ), endDate ( yyyy-mm-dd )
				'all' : '/compseasons/{id}/gameweeks',
				// Gets information about a single gameweek in a given competition season by its gameweek number
				'single' : '/compseasons/{id}/gameweeks/{gw}',
				// Gets information about the current gameweek in a given competition season
				'current' : '/compseasons/{id}/gameweeks/current',
				'events' : {
					// Gets events for a given gameweek for a given compseason
					'single' : '/compseasons/{id}/gameweeks/{gw}/events',
					// Gets events for the current gameweek for a given compseason
					'current' : '/compseasons/{id}/gameweeks/current/events'
				}
			},
			'standings' : {
				// Looks up the standings for a competition season
				// Params : live
				'all' : '/compseasons/{id}/standings',
				// Shows how a team's position in the standings has changed over the course of a season
				'team' : '/compseasons/{id}/standings/team/{tid}'
			},
			'structure' : '/compseasons/{id}/structure',
			// Looks up the teams involved in a competition season
			'teams' : '/compseasons/{id}/teams',
			// List awards for a give season
			'awards' : '/compseasons/{id}/awards'
		},
		'fixtures' : {
			// Lists all fixtures in the system
			// Params : page, pageSize, sort, startDate ( yyyy-mm-dd ), endDate ( yyyy-mm-dd ), statuses ( U|L|C ), homeTeams,
			//			awayTeams, teams, versus, compSeasons, comps, seasons, gameweekNumbers, gameweeks, grounds
			'all' : '/fixtures',
			// Head-to-head match results
			// Params: page, pageSize, comps, compSeasons, teamIds
			'headtohead' : '/fixtures/headtohead',
			// Looks up a a fixture by it's ID
			// Params : sys
			'single' : '/fixtures/{id}',
			// Gets text stream for fixture in a given language
			'textstream' : '/fixtures/{id}/textstream/{lang}'
		},
		'gameweeks' : {
			// Get information about a single gameweek in the system by its ID
			'single' : '/gameweeks/{id}'
		},
		'grounds' : {
			// Lists all grounds in the system
			// Params : page, pageSize
			'all' : '/grounds',
			// Gets a specific ground
			'single' : '/grounds/{id}'
		},
		'players' : {
			// Lists all players in the system
			// Params : page, pageSize, sys, index, sort, sortType, positions ( G|D|M|F ), birthday, activeSeason
			'all' : '/players',
			// Looks up a single player by their ID
			// Params : sys
			'single' : '/players/{id}',
			// Gets the playing history for a single player by their ID
			// Params : sys
			'history' : '/players/{id}/history'
		},
		'standings' : {
			// Generates a standings table based on an arbitrary set of fixtures
			// Params : startDate, endDate, teams, compSeasons, gameweekNumbers
			'all' : '/standings'
		},
		'stats' : {
			// Lists head-to-head stats for a set of teams
			// Params : compSeasonIds, teamsIds, sort, sys
			'headtohead' : '/stats/headtohead',
			// Lists all the statistics for a given match
			// Params : compSeasonIds, sort, sys
			'match' : '/stats/match/{id}',
			// Lists all the statistics for a given player
			// Params : compSeasonIds, sort, fixtures, comps, sys
			'player' : '/stats/player/{id}',
			'ranked' : {
				// Lists the players (in a ranked order) for a given statistic
				// Params : page, pageSize, sort, compSeasonIds, sys, denominatorStat, thresholdStat, thresholdValue, thresholdType
				'players' : '/stats/ranked/players/{statistic}',
				// Lists the teams (in a ranked order) for a given statistic
				// Params : page, pageSize, sort, compSeasonIds, sys, denominatorStat, thresholdStat, thresholdValue, thresholdType
				'teams' : '/stats/ranked/teams/{statistic}'
			},
			// Lists all the statistics for a given team
			// Params : compSeasonIds, sort, sys
			'team' : '/stats/team/{id}'
		},
		'teams' : {
			// Lists all teams in the system
			// Params page, pageSize
			'all': '/teams',
			'single' :
			{
				// Get detail about the team
				'team' : '/teams/{id}',
				// Lists the staff (players and officials) in a team for a given competition/season
				// Params : date, sys
				'staff' : '/teams/{id}/compseasons/{compSeasonId}/staff'
			}
		},
		'team-officials': {
			// List all team officials such as managers, coaches
			'all' : '/teamofficials'
		},
		'broadcasting-schedule': {
		    'all' : '/broadcasting-schedule/fixtures',
		    'single' : '/broadcasting-schedule/fixtures/{id}',
			'highlights' : '/broadcasting-schedule/highlights-programs'
		},
		'match-officials': {
		    'all' : '/matchofficials'
		},
		'cms' : {
            'playlist' : '/playlist/en/'
        }
		
	};

	//fantasy widgets: ism API
	app.fantasyEnvironment = 'https://api.fantasy.premierleague.com';
	app.fantasyHeader = '68bb88ecee1a4484bf1dccafc2be74a6';

	app.fantasyPath = {
		//Access previous, current and next gameweeks
		//in the events list
		'events': '/events/',
		//Get players
		'elements': {
			//get all players
			'all' : '/elements/',
			//Get players by Team Opta ID
			'club' : '/elements/?team_code='
		}
	};

	//tracking of outbound links
	app.utmTracking = {
		'default': '?utm_source=premier-league-website&utm_campaign=website&utm_medium=link'
	};

	app.premierLeagueOffice = {
		'Latitude': 51.51748,
		'Longitude': -0.15747
	};

	app.premierLeague = {
		email: 'info@premierleague.com'
	};

}( PULSE.app ));

/*globals PULSE, PULSE.app */

/**
 * dropdown item config - object defining the structure of an individual dropdown item
 *
 * @typedef {object} DropdownItemConfig
 * @property {String} name the name of the dropdown
 * @property {String} label the label to apply to the filter
 * @property {{string}} urlParameter a url parameter that the dropdown will attempt to read, it will then use this
 * as an id to select a option from its dropdown
 * @property {String|number} defaultOption the option id or the name of a default option (used on init)
 * @property {{data}} data a data-set with which to initialise the the dropdown
 * @property {{String[]}} dataListPath path to the array in API response that can be iterated to find options
 * @property {{String[]}} dataNamePath path to the option name within an item of dataListPath
 * @property {{String[]}} dataNamePath path to the option ID within an item of dataListPath
 * @property {{String}} dataUrl the url ( can be a format string ) to use as a data source for options
 * @property {{String[]}} dependencies the names of other drop downs within this filter group
 * @property {{String}} dataDependency the name of another dropdown which should be used as a data source
 * that will affect the dropdown data displayed by this dropdown
 */

/**
 * filterGroup
 * @type {{DropdownItemConfig[]}} filterGroup
 */
( function ( app ) {

    app.filterData = {
        "nationalities": [ { "optionName": "England", "optionId": "GB-ENG" }, {
            "optionName": "Northern Ireland",
            "optionId": "GB-NIR"
        }, { "optionName": "Ireland", "optionId": "IE" }, {
            "optionName": "Scotland",
            "optionId": "GB-SCT"
        }, { "optionName": "Wales", "optionId": "GB-WLS" }, {
            "optionName": "Albania",
            "optionId": "AL"
        }, { "optionName": "Algeria", "optionId": "DZ" }, {
            "optionName": "Angola",
            "optionId": "AO"
        }, { "optionName": "Antarctica", "optionId": "AQ" }, {
            "optionName": "Antigua and Barbuda",
            "optionId": "AG"
        }, { "optionName": "Argentina", "optionId": "AR" }, {
            "optionName": "Australia",
            "optionId": "AU"
        }, { "optionName": "Austria", "optionId": "AT" }, {
            "optionName": "Bahamas",
            "optionId": "BS"
        }, { "optionName": "Barbados", "optionId": "BB" }, {
            "optionName": "Belarus",
            "optionId": "BY"
        }, { "optionName": "Belgium", "optionId": "BE" }, {
            "optionName": "Benin",
            "optionId": "BJ"
        }, { "optionName": "Bermuda", "optionId": "BM" }, {
            "optionName": "Bolivia, Plurinational State of",
            "optionId": "BO"
        }, { "optionName": "Bosnia and Herzegovina", "optionId": "BA" }, {
            "optionName": "Brazil",
            "optionId": "BR"
        }, { "optionName": "Bulgaria", "optionId": "BG" }, {
            "optionName": "Burkina Faso",
            "optionId": "BF"
        }, { "optionName": "Burundi", "optionId": "BI" }, {
            "optionName": "Cameroon",
            "optionId": "CM"
        }, { "optionName": "Canada", "optionId": "CA" }, {
            "optionName": "Cape Verde",
            "optionId": "CV"
        }, { "optionName": "Chile", "optionId": "CL" }, {
            "optionName": "China",
            "optionId": "CN"
        }, { "optionName": "Colombia", "optionId": "CO" }, {
            "optionName": "Congo",
            "optionId": "CG"
        }, { "optionName": "Congo, the Democratic Republic of the", "optionId": "CD" }, {
            "optionName": "Costa Rica",
            "optionId": "CR"
        }, { "optionName": "Côte d'Ivoire", "optionId": "CI" }, {
            "optionName": "Croatia",
            "optionId": "HR"
        }, { "optionName": "Curaçao", "optionId": "CW" }, {
            "optionName": "Cyprus",
            "optionId": "CY"
        }, { "optionName": "Czech Republic", "optionId": "CZ" }, {
            "optionName": "Denmark",
            "optionId": "DK"
        }, { "optionName": "Ecuador", "optionId": "EC" }, {
            "optionName": "Egypt",
            "optionId": "EG"
        }, { "optionName": "Estonia", "optionId": "EE" }, {
            "optionName": "Faroe Islands",
            "optionId": "FO"
        }, { "optionName": "Finland", "optionId": "FI" }, {
            "optionName": "France",
            "optionId": "FR"
        }, { "optionName": "Gabon", "optionId": "GA" }, {
            "optionName": "Gambia",
            "optionId": "GM"
        }, { "optionName": "Georgia", "optionId": "GE" }, {
            "optionName": "Germany",
            "optionId": "DE"
        }, { "optionName": "Ghana", "optionId": "GH" }, {
            "optionName": "Greece",
            "optionId": "GR"
        }, { "optionName": "Grenada", "optionId": "GD" }, {
            "optionName": "Guinea",
            "optionId": "GN"
        }, { "optionName": "Guyana", "optionId": "GY" }, {
            "optionName": "Honduras",
            "optionId": "HN"
        }, { "optionName": "Hungary", "optionId": "HU" }, {
            "optionName": "Iceland",
            "optionId": "IS"
        }, { "optionName": "Iran, Islamic Republic of", "optionId": "IR" }, {
            "optionName": "Israel",
            "optionId": "IL"
        }, { "optionName": "Italy", "optionId": "IT" }, {
            "optionName": "Jamaica",
            "optionId": "JM"
        }, { "optionName": "Japan", "optionId": "JP" }, {
            "optionName": "Kenya",
            "optionId": "KE"
        }, { "optionName": "Korea, Republic of", "optionId": "KR" }, {
            "optionName": "Latvia",
            "optionId": "LV"
        }, { "optionName": "Liberia", "optionId": "LR" }, {
            "optionName": "Lithuania",
            "optionId": "LT"
        }, { "optionName": "Macedonia, the Former Yugoslav Republic of", "optionId": "MK" }, {
            "optionName": "Mali",
            "optionId": "ML"
        }, { "optionName": "Mexico", "optionId": "MX" }, {
            "optionName": "Montenegro",
            "optionId": "ME"
        }, { "optionName": "Montserrat", "optionId": "MS" }, {
            "optionName": "Morocco",
            "optionId": "MA"
        }, { "optionName": "Netherlands", "optionId": "NL" }, {
            "optionName": "New Zealand",
            "optionId": "NZ"
        }, { "optionName": "Nigeria", "optionId": "NG" }, {
            "optionName": "Norway",
            "optionId": "NO"
        }, { "optionName": "Oman", "optionId": "OM" }, {
            "optionName": "Pakistan",
            "optionId": "PK"
        }, { "optionName": "Palestine, State of", "optionId": "PS" }, {
            "optionName": "Paraguay",
            "optionId": "PY"
        }, { "optionName": "Peru", "optionId": "PE" }, {
            "optionName": "Poland",
            "optionId": "PL"
        }, { "optionName": "Portugal", "optionId": "PT" }, {
            "optionName": "Romania",
            "optionId": "RO"
        }, { "optionName": "Russian Federation", "optionId": "RU" }, {
            "optionName": "Saint Kitts and Nevis",
            "optionId": "KN"
        }, { "optionName": "Senegal", "optionId": "SN" }, {
            "optionName": "Serbia",
            "optionId": "RS"
        }, { "optionName": "Seychelles", "optionId": "SC" }, {
            "optionName": "Sierra Leone",
            "optionId": "SL"
        }, { "optionName": "Slovakia", "optionId": "SK" }, {
            "optionName": "Slovenia",
            "optionId": "SI"
        }, { "optionName": "South Africa", "optionId": "ZA" }, {
            "optionName": "Spain",
            "optionId": "ES"
        }, { "optionName": "Sweden", "optionId": "SE" }, {
            "optionName": "Switzerland",
            "optionId": "CH"
        }, { "optionName": "Togo", "optionId": "TG" }, {
            "optionName": "Trinidad and Tobago",
            "optionId": "TT"
        }, { "optionName": "Tunisia", "optionId": "TN" }, {
            "optionName": "Turkey",
            "optionId": "TR"
        }, { "optionName": "Ukraine", "optionId": "UA" }, {
            "optionName": "United States",
            "optionId": "US"
        }, { "optionName": "Uruguay", "optionId": "UY" }, {
            "optionName": "Venezuela, Bolivarian Republic of",
            "optionId": "VE"
        }, { "optionName": "Zambia", "optionId": "ZM" }, { "optionName": "Zimbabwe", "optionId": "ZW" } ]
    };

    app.widgetConfig = [];

    var setDefaultComps = function ( data, index ) {
        app.filterData.comps = data;
        buildFilterGroups();
        if ( app.widgetConfig && app.widgetConfig[ index ] ) {
            app.widgetConfig[ index ]();
        }
    };

    // used as a depMethod in filterGroups to get a current compSeason ID from a FOOTBALL_COMPETITION
    app.filterData.getCurrentCompSeasonId = function ( compId ) {
        var comp = app.filterData.comps.all.filter(app.defaultData.checkId, parseInt(compId))[ 0 ];
        return comp.compSeasons[ 0 ].id;
    };

    // used as a depMethod in filterGroups to get a all compSeason IDs from a FOOTBALL_COMPETITION
    app.filterData.getAllCompSeasonIds = function ( compId ) {
        var comp = app.filterData.comps.all.filter(app.defaultData.checkId, parseInt(compId))[ 0 ];
        var result = "";
        for ( var i = 0; i < comp.compSeasons.length; i++ ) {
            if ( result.length > 0 ) {
                result += ",";
            }
            result += comp.compSeasons[ i ].id;
        }
        return result;
    };

    var buildFilterGroups = function () {

        app.filterGroups.matchHighlights = [
            {
                name: "FOOTBALL_COMPETITION",
                label: "filterbycompetition",
                defaultOption: "matchhighlights.selectcompetition",
                defaultOptionId: -1,
                dataListPath: [],
                dataNamePath: [ "description" ],
                dataIdPath: [ "id" ],
                data: [ app.filterData.comps.primary.FIRST, app.filterData.comps.primary.U21 ],
                dependencies: [],
                urlParameter: "co"
            },
            {
                name: "FOOTBALL_CLUB",
                label: "filterbyclub",
                defaultOption: "matchhighlights.selectclub",
                defaultOptionId: -1,
                dataListPath: [ "content" ],
                dataNamePath: [ "name" ],
                dataIdPath: [ "id" ],
                depMethods: [ {
                    "label": "COMPSEASON",
                    "method": "getCurrentCompSeasonId",
                    "dep": "FOOTBALL_COMPETITION"
                } ],
                dataUrl: app.environment.api + "/football/teams?page=0&pageSize=100&altIds=true&comps={{FOOTBALL_COMPETITION}}&compSeasons={{COMPSEASON}}",
                dependencies: [ "FOOTBALL_COMPETITION" ],
                urlParameter: "cl"
            }
        ];

        app.filterGroups.editorial = [
            {
                name: "FOOTBALL_COMPETITION",
                label: "filterbycompetition",
                defaultOption: "allcompetitions",
                defaultOptionId: -1,
                dataListPath: [],
                dataNamePath: [ "description" ],
                dataIdPath: [ "id" ],
                data: [ app.filterData.comps.primary.FIRST, app.filterData.comps.primary.U21, app.filterData.comps.primary.U18 ],
                dependencies: [],
                urlParameter: "co"
            },
            {
                name: "FOOTBALL_CLUB",
                label: "filterbyclub",
                defaultOption: "allclubs",
                defaultOptionId: -1,
                dataListPath: [ "content" ],
                dataNamePath: [ "name" ],
                dataIdPath: [ "id" ],
                depMethods: [ {
                    "label": "COMPSEASON",
                    "method": "getCurrentCompSeasonId",
                    "dep": "FOOTBALL_COMPETITION"
                } ],
                dataUrl: app.environment.api + "/football/teams?page=0&pageSize=100&altIds=true&comps={{FOOTBALL_COMPETITION}}&compSeasons={{COMPSEASON}}",
                dependencies: [ "FOOTBALL_COMPETITION" ],
                urlParameter: "cl"
            },
            {
                name: "FOOTBALL_PERSON",
                label: "filterbyplayer",
                defaultOption: "allplayers",
                defaultOptionId: -1,
                dataListPath: [ "players" ],
                dataNamePath: [ "name", "display" ],
                dataIdPath: [ "playerId" ],
                depMethods: [ {
                    "label": "COMPSEASON",
                    "method": "getCurrentCompSeasonId",
                    "dep": "FOOTBALL_COMPETITION"
                } ],
                dataUrl: app.environment.api + "/football/teams/{{FOOTBALL_CLUB}}/compseasons/{{COMPSEASON}}/staff",
                dependencies: [ "FOOTBALL_COMPETITION", "FOOTBALL_CLUB" ],
                urlParameter: "pl"
            }
        ];

        app.filterGroups.video = [
            {
                name: "FOOTBALL_CLUB",
                label: "filterbyclub",
                defaultOption: "allclubs",
                defaultOptionId: -1,
                dataListPath: [ "content" ],
                dataNamePath: [ "name" ],
                dataIdPath: [ "id" ],
                dataUrl: app.environment.api + "/football/teams?page=0&pageSize=100&altIds=true&comps=" + app.filterData.comps.primary.FIRST.id + "&compSeasons=" + app.filterData.getCurrentCompSeasonId(app.filterData.comps.primary.FIRST.id),
                dependencies: [],
                urlParameter: "cl"
            },
            {
                name: "FOOTBALL_PERSON",
                label: "filterbyplayer",
                defaultOption: "allplayers",
                defaultOptionId: -1,
                dataListPath: [ "players" ],
                dataNamePath: [ "name", "display" ],
                dataIdPath: [ "playerId" ],
                dataUrl: app.environment.api + "/football/teams/{{FOOTBALL_CLUB}}/compseasons/" + app.filterData.getCurrentCompSeasonId(app.filterData.comps.primary.FIRST.id) + "/staff",
                dependencies: [ "FOOTBALL_CLUB" ],
                urlParameter: "pl"
            }
        ];

        app.filterGroups.players = [
            {
                name: "compSeasons",
                label: "filterbyseason",
                dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                dataListPath: [ "content" ],
                dataNamePath: [ "label" ],
                dataIdPath: [ "id" ],
                dependencies: [],
                urlParameter: "se"
            },
            {
                name: "clubs",
                label: "filterbyclub",
                defaultOption: "allclubs",
                defaultOptionId: -1,
                dataListPath: [ "content" ],
                dataNamePath: [ "name" ],
                dataIdPath: [ "id" ],
                dataUrl: app.environment.api + "/football/teams?page=0&pageSize=100&altIds=true&compSeasons={{compSeasons}}",
                dependencies: [ "compSeasons" ],
                urlParameter: "cl"
            }
        ];

        app.filterGroups.managers = [
            {
                name: "compSeasons",
                label: "filterbyseason",
                dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                dataListPath: [ "content" ],
                dataNamePath: [ "label" ],
                dataIdPath: [ "id" ],
                dependencies: [],
                urlParameter: "se"
            },
            {
                name: "teams",
                label: "filterbyclub",
                defaultOption: "allclubs",
                defaultOptionId: -1,
                dataListPath: [ "content" ],
                dataNamePath: [ "name" ],
                dataIdPath: [ "id" ],
                dataUrl: app.environment.api + "/football/teams?page=0&pageSize=100&altIds=true&compSeasons={{compSeasons}}",
                dependencies: [ "compSeasons" ],
                urlParameter: "cl"
            }
        ];

        app.filterGroups.referee = [
            {
                name: "compSeasons",
                label: "filterbyseason",
                dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                dataListPath: [ "content" ],
                dataNamePath: [ "label" ],
                dataIdPath: [ "id" ],
                dependencies: [],
                urlParameter: "se"
            }
        ];

        app.filterGroups.referee.appointments = [
            {
                name: "compSeasons",
                label: "filterbyseason",
                dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                dataListPath: [ "content" ],
                dataNamePath: [ "label" ],
                defaultId: app.filterData.getCurrentCompSeasonId(app.filterData.comps.primary.FIRST.id),
                dataIdPath: [ "id" ],
                dependencies: [],
                urlParameter: "se"
            },
            {
                name: "gameweekNumbers",
                label: "filterbymatchweek",
                defaultOption: "allmatchweeks",
                listTransform: function ( list ) {

                    return list.map(function ( gw ) {
                        gw.MatchDays = app.common.momentGetDaysFromRange(gw.from.millis, gw.until.millis, "ddd Do MMM", true);
                        gw.gameweekRange = "1-" + gw.gameweek;
                        return gw;
                    });
                },
                dataListPath: [ 'gameweeks' ],
                dataNamePath: [ "gameweek" ],
                dataIdPath: [ "gameweekRange" ],
                dataUrl: app.environment.api + "/football/compseasons/" + app.filterData.getCurrentCompSeasonId(app.filterData.comps.primary.FIRST.id) + "/gameweeks",
                dependencies: [ "compSeasons" ],
                urlParameter: "mw"
            }
        ];

        app.filterGroups.seasonawards = [
            {
                name: "comps",
                label: "filterbycompetition",
                dataListPath: [],
                dataNamePath: [ "description" ],
                dataIdPath: [ "id" ],
                data: [ app.filterData.comps.primary.FIRST, app.filterData.comps.primary.U21 ],
                dependencies: [],
                urlParameter: "co"
            },
            {
                name: "compSeasons",
                label: "filterbyseason",
                dataUrl: app.environment.api + "/football/competitions/{{comps}}/compseasons?page=0&pageSize=100",
                dataListPath: [ "content" ],
                dataNamePath: [ "label" ],
                dataIdPath: [ "id" ],
                dependencies: [ "comps" ],
                urlParameter: "se"
            }
        ];

        app.filterGroups.awardtable = [
            {
                name: "comps",
                label: "filterbycompetition",
                dataListPath: [],
                dataNamePath: [ "description" ],
                dataIdPath: [ "id" ],
                data: [ app.filterData.comps.primary.FIRST, app.filterData.comps.primary.U21 ],
                dependencies: [],
                urlParameter: "co"
            },
            {
                name: "awards",
                label: "filterbyaward",
                dataListPath: [],
                dataNamePath: [ "optionName" ],
                dataIdPath: [ "optionId" ],
                data: [
                    { optionLabel: "award.PLAYER_OF_THE_SEASON", optionId: 20 },
                    { optionLabel: "award.GOAL_OF_THE_SEASON", optionId: 24 },
                    { optionLabel: "award.MANAGER_OF_THE_SEASON", optionId: 21 }
                ],
                urlParameter: "aw"
            }
        ];

        app.filterGroups.teamIndex = [
            {
                name: "compSeasons",
                label: "filterbyseason",
                dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                dataListPath: [ "content" ],
                dataNamePath: [ "label" ],
                dataIdPath: [ "id" ],
                urlParameter: "se"
            }

        ];

        app.filterGroups.squad = [
            {
                name: "compSeasons",
                label: "filterbyseason",
                dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                dataListPath: [ "content" ],
                dataNamePath: [ "label" ],
                dataIdPath: [ "id" ],
                dependencies: [],
                urlParameter: "se"
            }

        ];

        app.filterGroups.rankedstats =
            {
                'player': [
                    {
                        name: "FOOTBALL_COMPSEASON",
                        label: "filterbyseason",
                        defaultOption: "allseasons",
                        defaultIndex: 0,
                        dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                        dataListPath: [ "content" ],
                        dataNamePath: [ "label" ],
                        dataIdPath: [ "id" ],
                        urlParameter: "se",
                        apiParam: "compSeasons"
                    },
                    {
                        name: "FOOTBALL_CLUB",
                        label: "filterbyclub",
                        defaultOption: "allclubs",
                        defaultOptionId: -1,
                        dataListPath: [],
                        dataNamePath: [ "name" ],
                        dataIdPath: [ "id" ],
                        dataUrl: app.environment.api + "/football/compseasons/{{FOOTBALL_COMPSEASON}}/teams",
                        dependencies: [ "FOOTBALL_COMPSEASON" ],
                        urlParameter: "cl",
                        apiParam: "teams"
                    },
                    {
                        name: "Nationality",
                        label: "filterbynationality",
                        defaultOption: "allnationalities",
                        dataListPath: [],
                        dataNamePath: [ "optionName" ],
                        dataIdPath: [ "optionId" ],
                        data: app.filterData.nationalities,
                        urlParameter: "iso",
                        apiParam: "nationalities"
                    },
                    {
                        name: "Position",
                        label: "filterbyposition",
                        defaultOption: "allpositions",
                        dataListPath: [],
                        dataNamePath: [ "optionName" ],
                        dataIdPath: [ "optionId" ],
                        data: [
                            { optionLabel: "goalkeeper", optionId: "GOALKEEPER" },
                            { optionLabel: "defender", optionId: "DEFENDER" },
                            { optionLabel: "midfielder", optionId: "MIDFIELDER" },
                            { optionLabel: "forward", optionId: "FORWARD" }
                        ],
                        urlParameter: "po",
                        apiParam: "positions"
                    }
                ],
                'team': [
                    {
                        name: "FOOTBALL_COMPSEASON",
                        label: "filterbyseason",
                        defaultOption: "allseasons",
                        defaultIndex: 0,
                        dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                        dataListPath: [ "content" ],
                        dataNamePath: [ "label" ],
                        dataIdPath: [ "id" ],
                        urlParameter: "se",
                        apiParam: "compSeasons"
                    }
                ]
            };

        app.filterGroups.stats =
            {
                'player': [
                    {
                        name: "compSeasons",
                        label: "filterbyseason",
                        defaultOption: "allseasons",
                        dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                        dataListPath: [ "content" ],
                        dataNamePath: [ "label" ],
                        dataIdPath: [ "id" ],
                        dependencies: [],
                        urlParameter: "se",
                        apiParam: "compSeasons"
                    }
                ],
                'team': [
                    {
                        name: "compSeasons",
                        label: "filterbyseason",
                        defaultOption: "allseasons",
                        dataUrl: app.environment.api + "/football/competitions/" + app.filterData.comps.primary.FIRST.id + "/compseasons?page=0&pageSize=100",
                        dataListPath: [ "content" ],
                        dataNamePath: [ "label" ],
                        dataIdPath: [ "id" ],
                        dependencies: [],
                        urlParameter: "se"
                    }
                ]
            };

        app.filterGroups.statscomparison = [
            {
                name: "compSeasons",
                label: "filterbyseason",
                dataUrl: app.environment.api + "/football/competitions/" + app.competition.FIRST + "/compseasons?page=0&pageSize=100",
                dataListPath: [ "content" ],
                dataNamePath: [ "label" ],
                dataIdPath: [ "id" ],
                defaultOption: "allseasons",
                defaultIndex: 0,
                dependencies: [],
                urlParameter: "se"
            }

        ];

        app.filterGroups.Tables = {

            "FIRST": [
                {
                    name: "FOOTBALL_COMPETITION",
                    label: "filterbycompetition",
                    defaultId: app.filterData.comps.primary.FIRST.id,
                    dataListPath: [],
                    dataNamePath: [ "description" ],
                    dataIdPath: [ "id" ],
                    data: app.filterData.comps.pl.FIRST.comps,
                    dependencies: [],
                    urlParameter: "co"
                },
                {
                    name: "compSeasons",
                    label: "filterbyseason",
                    dataUrl: app.environment.api + "/football/competitions/{{FOOTBALL_COMPETITION}}/compseasons?page=0&pageSize=100",
                    dataListPath: [ "content" ],
                    dataNamePath: [ "label" ],
                    defaultId: app.filterData.getCurrentCompSeasonId(app.filterData.comps.primary.FIRST.id),
                    dataIdPath: [ "id" ],
                    dependencies: [ "FOOTBALL_COMPETITION" ],
                    urlParameter: "se"
                },
                {
                    name: "gameweekNumbers",
                    label: "filterbymatchweek",
                    defaultOption: "allmatchweeks",
                    listTransform: function ( list ) {

                        return list.map(function ( gw ) {
                            gw.MatchDays = app.common.momentGetDaysFromRange(gw.from.millis, gw.until.millis, "ddd Do MMM", true);
                            gw.gameweekRange = "1-" + gw.gameweek;
                            return gw;
                        });
                    },
                    dataListPath: [ 'gameweeks' ],
                    dataNamePath: [ "gameweek" ],
                    dataIdPath: [ "gameweekRange" ],
                    dataUrl: app.environment.api + "/football/compseasons/{{compSeasons}}/gameweeks",
                    dependencies: [ "compSeasons", "FOOTBALL_COMPETITION" ],
                    dependancyCheck: function ( dependencies ) {
                        var dependancy = "FOOTBALL_COMPETITION";
                        if ( dependencies[ dependancy ] && dependencies[ dependancy ].id == app.filterData.comps.primary.FIRST.id ) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    },
                    urlParameter: "mw"
                },
                {
                    name: "homeaway",
                    label: "filterbyhomeoraway",
                    defaultOption: "allmatches",
                    dataListPath: [],
                    dataNamePath: [ "optionName" ],
                    dataIdPath: [ "optionId" ],
                    data: [
                        { optionLabel: "home", optionId: "H" },
                        { optionLabel: "away", optionId: "A" }
                    ],
                    dependancyCheck: function ( dependencies ) {
                        var dependancy = "FOOTBALL_COMPETITION";
                        if ( dependencies[ dependancy ] && dependencies[ dependancy ].id == app.filterData.comps.primary.FIRST.id ) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    },
                    dependencies: [ "FOOTBALL_COMPETITION" ],
                    urlParameter: "ha"
                }
            ],
            "U21": [
                {
                    name: "FOOTBALL_COMPETITION",
                    label: "filterbycompetition",
                    defaultId: app.filterData.comps.primary.U21.id,
                    dataListPath: [],
                    dataNamePath: [ "description" ],
                    dataIdPath: [ "id" ],
                    dependencies: [],
                    data: app.filterData.comps.pl.U21.comps,
                    urlParameter: "co"
                },
                {
                    name: "compSeasons",
                    label: "filterbyseason",
                    dataUrl: app.environment.api + "/football/competitions/{{FOOTBALL_COMPETITION}}/compseasons?page=0&pageSize=2",
                    dataListPath: [ "content" ],
                    dataNamePath: [ "label" ],
                    defaultId: app.filterData.getCurrentCompSeasonId(app.filterData.comps.primary.U21.id),
                    dataIdPath: [ "id" ],
                    dependencies: [ "FOOTBALL_COMPETITION" ],
                    urlParameter: "se"
                }

            ],
            "U18": [
                {
                    name: "FOOTBALL_COMPETITION",
                    label: "filterbycompetition",
                    defaultId: app.filterData.comps.primary.U18.id,
                    dataListPath: [],
                    dataNamePath: [ "description" ],
                    dataIdPath: [ "id" ],
                    data: app.filterData.comps.pl.U18.comps,
                    dependencies: [],
                    urlParameter: "co"
                },
                {
                    name: "compSeasons",
                    label: "filterbyseason",
                    dataUrl: app.environment.api + "/football/competitions/{{FOOTBALL_COMPETITION}}/compseasons?page=0&pageSize=2",
                    dataListPath: [ "content" ],
                    dataNamePath: [ "label" ],
                    defaultId: app.filterData.getCurrentCompSeasonId(app.filterData.comps.primary.U18.id),
                    dataIdPath: [ "id" ],
                    dependencies: [ "FOOTBALL_COMPETITION" ],
                    urlParameter: "se"
                }
            ]
        };

        app.filterGroups.Results = {

            "FIRST": [
                {
                    //limit to first team comps
                    name: "comps",
                    label: "filterbycompetition",
                    defaultOptionId: app.filterData.comps.primary.FIRST.id,
                    dataListPath: [ "content" ],
                    dataNamePath: [ "description" ],
                    dataIdPath: [ "id" ],
                    data: app.filterData.comps.pl.FIRST.comps,
                    dependencies: [],
                    urlParameter: "co"
                },
                {
                    name: "compSeasons",
                    label: "filterbyseason",
                    dataUrl: app.environment.api + "/football/competitions/{{comps}}/compseasons?page=0&pageSize=100",
                    dataListPath: [ "content" ],
                    dataNamePath: [ "label" ],
                    dataIdPath: [ "id" ],
                    dependencies: [ "comps" ],
                    urlParameter: "se"
                },
                {
                    name: "teams",
                    label: "filterbyclub",
                    defaultOption: "allclubs",
                    dataListPath: [],
                    dataNamePath: [ "name" ],
                    dataIdPath: [ "id" ],
                    dataUrl: app.environment.api + "/football/compseasons/{{compSeasons}}/teams",
                    dependencies: [ "compSeasons" ],
                    urlParameter: "cl"
                }

            ],
            "U21": [
                {
                    //limit to u21 comps
                    name: "comps",
                    label: "filterbycompetition",
                    defaultOptionId: app.filterData.comps.primary.U21.id,
                    dataListPath: [ "content" ],
                    dataNamePath: [ "description" ],
                    dataIdPath: [ "id" ],
                    data: app.filterData.comps.pl.U21.comps,
                    dependencies: [],
                    urlParameter: "co"
                },
                {
                    name: "compSeasons",
                    label: "filterbyseason",
                    defaultIndex: 0,
                    dataListPath: [ "content" ],
                    dataNamePath: [ "label" ],
                    dataIdPath: [ "id" ],
                    dataUrl: app.environment.api + "/football/competitions/{{comps}}/compseasons?page=0&pageSize=100",
                    dependencies: [ "comps" ],
                    urlParameter: "se"
                },
                {
                    name: "teams",
                    label: "filterbyclub",
                    defaultOption: "allclubs",
                    dataListPath: [],
                    dataNamePath: [ "name" ],
                    dataIdPath: [ "id" ],
                    dataUrl: app.environment.api + "/football/compseasons/{{compSeasons}}/teams",
                    dependencies: [ "compSeasons" ],
                    urlParameter: "cl"
                }

            ],
            "U18": [
                {
                    //limit to u18 cup
                    name: "comps",
                    label: "filterbycompetition",
                    defaultOptionId: app.filterData.comps.primary.U18.id,
                    dataListPath: [ "content" ],
                    dataNamePath: [ "description" ],
                    dataIdPath: [ "id" ],
                    data: app.filterData.comps.pl.U18.comps,
                    dependencies: [],
                    urlParameter: "co2"
                },
                {
                    name: "compSeasons",
                    label: "filterbyseason",
                    dataListPath: [ "content" ],
                    defaultIndex: 0,
                    dataUrl: app.environment.api + "/football/competitions/{{comps}}/compseasons?page=0&pageSize=100",
                    dataNamePath: [ "label" ],
                    dataIdPath: [ "id" ],
                    dependencies: [ "comps" ],
                    urlParameter: "se3"
                },
                {
                    name: "teams",
                    label: "filterbyclub",
                    defaultOption: "allclubs",
                    dataListPath: [],
                    dataNamePath: [ "name" ],
                    dataIdPath: [ "id" ],
                    dataUrl: app.environment.api + "/football/compseasons/{{compSeasons}}/teams",
                    dependencies: [ "compSeasons" ],
                    urlParameter: "cl2"
                }

            ]
        };

        app.filterGroups.Fixtures = {

            "FIRST": [
                {
                    //limit to first team comps
                    name: "comps",
                    label: "filterbycompetition",
                    defaultOptionId: app.filterData.comps.primary.FIRST.id,
                    // only ever show competition for this level
                    dataListPath: [ "content" ],
                    dataNamePath: [ "description" ],
                    dataIdPath: [ "id" ],
                    data: app.filterData.comps.pl.FIRST.comps,
                    dependencies: [],
                    urlParameter: "co"
                },
                {
                    name: "teams",
                    label: "filterbyclub",
                    defaultOption: "allclubs",
                    dataListPath: [],
                    dataNamePath: [ "name" ],
                    dataIdPath: [ "id" ],
                    depMethods: [ {
                        "label": "COMPSEASON",
                        "method": "getCurrentCompSeasonId",
                        "dep": "comps"
                    } ],
                    dataUrl: app.environment.api + "/football/compseasons/{{COMPSEASON}}/teams",
                    dependencies: [ "comps" ],
                    urlParameter: "cl"
                }

            ],
            "U21": [
                {
                    //limit to u21 comps
                    name: "comps",
                    label: "filterbycompetition",
                    defaultOptionId: app.filterData.comps.primary.U21.id,
                    dataListPath: [ "content" ],
                    dataNamePath: [ "description" ],
                    dataIdPath: [ "id" ],
                    data: app.filterData.comps.pl.U21.comps,
                    dependencies: [],
                    urlParameter: "co"
                },
                {
                    name: "teams",
                    label: "filterbyclub",
                    defaultOption: "allclubs",
                    dataListPath: [],
                    dataNamePath: [ "name" ],
                    dataIdPath: [ "id" ],
                    depMethods: [ {
                        "label": "COMPSEASON",
                        "method": "getCurrentCompSeasonId",
                        "dep": "comps"
                    } ],
                    dataUrl: app.environment.api + "/football/compseasons/{{COMPSEASON}}/teams",
                    dependencies: [ "comps" ],
                    urlParameter: "cl"
                }

            ],
            "U18": [
                {
                    //limit to u18 cup
                    name: "comps",
                    label: "filterbycompetition",
                    defaultOptionId: app.filterData.comps.primary.U18.id,
                    dataListPath: [ "content" ],
                    dataNamePath: [ "description" ],
                    dataIdPath: [ "id" ],
                    data: app.filterData.comps.pl.U18.comps,
                    dependencies: [],
                    urlParameter: "co2"
                },
                {
                    name: "teams",
                    label: "filterbyclub",
                    defaultOption: "allclubs",
                    dataListPath: [],
                    dataNamePath: [ "name" ],
                    dataIdPath: [ "id" ],
                    depMethods: [ {
                        "label": "COMPSEASON",
                        "method": "getCurrentCompSeasonId",
                        "dep": "comps"
                    } ],
                    dataUrl: app.environment.api + "/football/compseasons/{{COMPSEASON}}/teams",
                    dependencies: [ "comps" ],
                    urlParameter: "cl2"
                }

            ]
        };

        app.filterGroups.broadcasters = [
            {
                name: "country",
                label: "filterbylocation",
                dataListPath: [],
                defaultOption: "yourlocation",
                defaultOptionId: -1,
                dataNamePath: [ "name" ],
                dataIdPath: [ "code" ],
                data: app.filterData.broadcastCountries,
                dataUrl: app.environment.api + "/football/broadcasting-schedule/countries",
                urlParameter: "iso",
                apiParam: "broadcastcountries"
            },
            {
                name: "comps",
                label: "filterbycompetition",
                dataListPath: [],
                dataNamePath: [ "description" ],
                dataIdPath: [ "id" ],
                listTransform: function ( list, element ) {
                    if ( element ) {
                        element.style.display = 'none';
                    }
                },
                data: [ app.filterData.comps.primary.FIRST ],
                dependencies: [],
                urlParameter: "co"
            },
            {
                name: "teams",
                label: "filterbyclub",
                defaultOption: "allclubs",
                dataListPath: [],
                dataNamePath: [ "name" ],
                dataIdPath: [ "id" ],
                depMethods: [ {
                    "label": "COMPSEASON",
                    "method": "getCurrentCompSeasonId",
                    "dep": "comps"
                } ],
                dataUrl: app.environment.api + "/football/compseasons/{{COMPSEASON}}/teams",
                dependencies: [ "comps" ],
                urlParameter: "cl2"
            }
        ];
    };

    app.filterGroups = {

        setData: function ( cb ) {
            app.widgetConfig.push(cb);
            app.defaultData.get(setDefaultComps, app.widgetConfig.length - 1);
        }

    };

}(PULSE.app));

(function( app, core ){
	"use strict";

	/**
	 * @namespace app.defaultData.private
	 */
	
	var defaultData;

	// expiry set in days
	var dataExpiry = 1;

	var orderArray = function( compIds, dataIds )
	{
		var thisArray = [];
		for ( var i = 0; i < compIds.length; i++ )
		{
			for ( var j = 0; j < dataIds.length; j++ )
			{
				if ( dataIds[ j ].id === parseInt( compIds[ i ] ) )
				{
					thisArray.push( dataIds[ j ] );
				}
			}			
		}
		return thisArray;
	};

	var getData = function(){
		var setDefaultData = function( data ) {
			defaultData = {
				"all": data.content,
				"FIRST": orderArray( app.competitions.FIRST, data.content ),
				"U21": orderArray( app.competitions.U21, data.content ),
				"U18": orderArray( app.competitions.U18, data.content )				
			};
			var somePL = defaultData.FIRST.concat(defaultData.U21);
			var allPL = somePL.concat( defaultData.U18 ); 

			defaultData.pl = 
			{
				"FIRST": {
					ids: app.competitions.FIRST,
					comps: defaultData.FIRST,
				},
				"U21": {
					ids: app.competitions.U21,
					comps: defaultData.U21
				},
				"U18": {
					ids: app.competitions.U18,
					comps: defaultData.U18
				},
				"all": {
					ids: app.competitions.PL,
					comps: allPL				
				}
			};
			defaultData.primary = {
				"FIRST": defaultData.FIRST[ 0 ],
				"U21": defaultData.U21[ 0 ],
				"U18": defaultData.U18[ 0 ]
			};
		};

        var compSubscriber = {
			url: app.environment.api + "/football/competitions?page=0&pageSize=100&detail=2",
			target: this,
			method: "GET",
			callback: setDefaultData,
			constant: true,
			forceCallback: true
		};

		core.data.manager.add( compSubscriber );
	}; 

	var checkData = function( callback, id ) {
		//var stored = core.localStorage.getStorage("defaultData");
		var stored = false;
		if( stored ){
			defaultData = JSON.parse(stored);
			callback( defaultData, id );
		}
		else{
			getData();
			var checkForData = setInterval(function(){
				if( defaultData ){
					callback( defaultData, id );
					clearInterval(checkForData);
					core.localStorage.setStorage( "defaultData", JSON.stringify(defaultData), dataExpiry );
				}
			}, 500);
		}
	};

	app.defaultData = {
		get: function( callback, id ){
			if( !callback ){
				return "ERROR defaultData.js - No callback method provided to pass default data to.";
			}
			if(defaultData){
				callback( defaultData, id );
			}
			else{
				checkData( callback, id );
			}
		}
	};

	app.defaultData.checkIdList = function( val ){
		return this.indexOf( val.id ) > -1;
	};
	app.defaultData.checkId = function( val ){
		return val.id === this;
	};
	app.defaultData.checkLevel = function( val ){
		return val.level === this;
	};

}( PULSE.app, PULSE.core ));
/*globals PULSE, PULSE.app, PULSE.core */


(function( app, core ){
	"use strict";

	app.I18N = {};

	app.I18N.setup = function(){
		var req_language = core.localStorage.getStorage( 'req_language', true );
	    app.language = req_language || app.defaultLanguage;
	    var Translator = new app.I18N.Translator( PULSE.I18N );

	    if (!PULSE.I18N) { PULSE.I18N = {}; }
	    PULSE.I18N.lookup = function()
	    {
	        return Translator.lookup.apply( Translator, arguments );
	    };
	    if( typeof window.moment !== 'undefined' )
	    {
	        app.I18N.enOverride();
	        moment.locale( app.language );
	    }
	};

	app.I18N.enOverride = function() {
	    moment.locale( 'en',
	    {
	        longDateFormat : {
	            LT: "HH:mm",
	            // LT: "h:mm A",
	            LTS: "h:mm:ss A",
	            l : 'DD/MM',
	            L: "DD/MM/YYYY",
	            ll: 'D MMMM',
	            LL: "D MMMM YYYY",
	            lll: "MMM D YYYY LT",
	            LLL: "MMMM Do YYYY LT",
	            llll: "ddd MMM D YYYY",
	            LLLL: "dddd, MMMM Do YYYY"
	        },
	        yearFirst: false
	    } );
	};


	app.I18N.Translator = function( translationsData )
	{
		var _self = this;

	    _self.hasTranslations = false;
	    _self.language = app.language;

	    if( translationsData )
	    {
	        _self.hasTranslations = true;
	        if( _self.language !== translationsData.language )
	        {
	            if( translationsData.language === undefined )
	            console.log( 'Language mismatch! Using ' + translationsData.language );
	            _self.language = translationsData.language;
	        }

	        _self.translations = translationsData.translations || {};
	        _self.hasTranslations = true;
	    }
	    else
	    {
	        _self.hasTranslations = false;
	        _self.translations = {};
	    }
	};

	app.I18N.Translator.prototype.lookup = function( key, replaceMap )
	{
		var _self = this;
	    if( key )
	    {
	        var mapping = _self.lookupKey( key );
	        if( replaceMap )
	        {
	            for( var replaceKey in replaceMap )
	            {
	                var regExp = new RegExp( "\\${" + replaceKey + "}", "gi" );
	                mapping = mapping.replace( regExp, replaceMap[ replaceKey ] );
	            }
	        }

	        return mapping;
	    }

	    return "";
	};

	app.I18N.Translator.prototype.lookupKey = function( key )
	{
		var _self = this;
	    if( _self.hasTranslations )
	    {
	        return _self.translations[ key ] || key;
	    }
	    else
	    {
	        return key;
	    }
	};


}( PULSE.app, PULSE.core ));

/*globals PULSE, PULSE.app */

(function( app ){
	"use strict";

	app.loadTimezones = function(){

		moment.tz.load( {
			"version": "2016f",
			"zones": [
				"Africa/Abidjan|GMT|0|0||48e5",
				"Africa/Khartoum|EAT|-30|0||51e5",
				"Africa/Algiers|CET|-10|0||26e5",
				"Africa/Lagos|WAT|-10|0||17e6",
				"Africa/Maputo|CAT|-20|0||26e5",
				"Africa/Cairo|EET EEST|-20 -30|010101010|1Cby0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6",
				"Africa/Casablanca|WET WEST|0 -10|01010101010101010101010101010101010101010|1Cco0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0|32e5",
				"Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6",
				"Africa/Johannesburg|SAST|-20|0||84e5",
				"Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5",
				"Africa/Windhoek|WAST WAT|-20 -10|01010101010101010101010|1C1c0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|32e4",
				"America/Adak|HST HDT|a0 90|01010101010101010101010|1BR00 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326",
				"America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1BQX0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4",
				"America/Santo_Domingo|AST|40|0||29e5",
				"America/Araguaina|BRT BRST|30 20|010|1IdD0 Lz0|14e4",
				"America/Argentina/Buenos_Aires|ART|30|0|",
				"America/Asuncion|PYST PYT|30 40|01010101010101010101010|1C430 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5",
				"America/Panama|EST|50|0||15e5",
				"America/Bahia|BRT BRST|30 20|010|1FJf0 Rb0|27e5",
				"America/Bahia_Banderas|MST CDT CST|70 50 60|01212121212121212121212|1C1l0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3",
				"America/Fortaleza|BRT|30|0||34e5",
				"America/Managua|CST|60|0||22e5",
				"America/Manaus|AMT|40|0||19e5",
				"America/Bogota|COT|50|0||90e5",
				"America/Denver|MST MDT|70 60|01010101010101010101010|1BQV0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5",
				"America/Campo_Grande|AMST AMT|30 40|01010101010101010101010|1BIr0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10|77e4",
				"America/Cancun|CST CDT EST|60 50 50|010101010102|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4",
				"America/Caracas|VET VET|4u 40|01|1QMT0|29e5",
				"America/Cayenne|GFT|30|0||58e3",
				"America/Chicago|CST CDT|60 50|01010101010101010101010|1BQU0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5",
				"America/Chihuahua|MST MDT|70 60|01010101010101010101010|1C1l0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4",
				"America/Phoenix|MST|70|0||42e5",
				"America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6",
				"America/New_York|EST EDT|50 40|01010101010101010101010|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6",
				"America/Rio_Branco|AMT ACT|40 50|01|1KLE0|31e4",
				"America/Fort_Nelson|PST PDT MST|80 70 70|010101010102|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2",
				"America/Halifax|AST ADT|40 30|01010101010101010101010|1BQS0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4",
				"America/Godthab|WGT WGST|30 20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3",
				"America/Goose_Bay|AST ADT|40 30|01010101010101010101010|1BQQ1 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2",
				"America/Grand_Turk|EST EDT AST|50 40 40|0101010101012|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2",
				"America/Guayaquil|ECT|50|0||27e5",
				"America/Guyana|GYT|40|0||80e4",
				"America/Havana|CST CDT|50 40|01010101010101010101010|1BQR0 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5",
				"America/La_Paz|BOT|40|0||19e5",
				"America/Lima|PET|50|0||11e6",
				"America/Mexico_City|CST CDT|60 50|01010101010101010101010|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6",
				"America/Metlakatla|PST AKST AKDT|80 90 80|012121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2",
				"America/Miquelon|PMST PMDT|30 20|01010101010101010101010|1BQR0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2",
				"America/Montevideo|UYST UYT|20 30|010101010101|1BQQ0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5",
				"America/Noronha|FNT|20|0||30e2",
				"America/North_Dakota/Beulah|MST MDT CST CDT|70 60 60 50|01232323232323232323232|1BQV0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
				"America/Paramaribo|SRT|30|0||24e4",
				"America/Port-au-Prince|EST EDT|50 40|010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5",
				"America/Santiago|CLST CLT|30 40|010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5",
				"America/Sao_Paulo|BRST BRT|20 30|01010101010101010101010|1BIq0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10|20e6",
				"America/Scoresbysund|EGT EGST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452",
				"America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1BQPv 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4",
				"Antarctica/Casey|CAST AWST|-b0 -80|0101|1BN30 40P0 KL0|10",
				"Antarctica/Davis|DAVT DAVT|-50 -70|0101|1BPw0 3Wn0 KN0|70",
				"Antarctica/DumontDUrville|DDUT|-a0|0||80",
				"Antarctica/Macquarie|AEDT MIST|-b0 -b0|01|1C140|1",
				"Antarctica/Mawson|MAWT|-50|0||60",
				"Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5",
				"Antarctica/Rothera|ROTT|30|0||130",
				"Antarctica/Syowa|SYOT|-30|0||20",
				"Antarctica/Troll|UTC CEST|0 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40",
				"Antarctica/Vostok|VOST|-60|0||25",
				"Asia/Baghdad|AST|-30|0||66e5",
				"Asia/Almaty|+06|-60|0||15e5",
				"Asia/Amman|EET EEST|-20 -30|010101010101010101010|1BVy0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|25e5",
				"Asia/Anadyr|ANAT ANAST ANAT|-c0 -c0 -b0|0120|1BWe0 1qN0 WM0|13e3",
				"Asia/Aqtobe|+05|-50|0||27e4",
				"Asia/Ashgabat|TMT|-50|0||41e4",
				"Asia/Baku|AZT AZST|-40 -50|0101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5",
				"Asia/Bangkok|ICT|-70|0||15e6",
				"Asia/Barnaul|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 3rd0",
				"Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1BWm0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5",
				"Asia/Bishkek|KGT|-60|0||87e4",
				"Asia/Brunei|BNT|-80|0||42e4",
				"Asia/Kolkata|IST|-5u|0||15e6",
				"Asia/Chita|YAKT YAKST YAKT IRKT|-90 -a0 -a0 -80|010230|1BWh0 1qM0 WM0 8Hz0 3re0|33e4",
				"Asia/Choibalsan|CHOT CHOST|-80 -90|0101010101010|1O8G0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|38e3",
				"Asia/Shanghai|CST|-80|0||23e6",
				"Asia/Dhaka|BDT|-60|0||16e6",
				"Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1C0m0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0|26e5",
				"Asia/Dili|TLT|-90|0||19e4",
				"Asia/Dubai|GST|-40|0||39e5",
				"Asia/Dushanbe|TJT|-50|0||76e4",
				"Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1BVW1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0|18e5",
				"Asia/Hebron|EET EEST|-20 -30|0101010101010101010101010|1BVy0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1ny0 1220 1qm0 1220 1ny0 1220 1ny0 1220 1ny0|25e4",
				"Asia/Hong_Kong|HKT|-80|0||73e5",
				"Asia/Hovd|HOVT HOVST|-70 -80|0101010101010|1O8H0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|81e3",
				"Asia/Irkutsk|IRKT IRKST IRKT|-80 -90 -90|01020|1BWi0 1qM0 WM0 8Hz0|60e4",
				"Europe/Istanbul|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e6",
				"Asia/Jakarta|WIB|-70|0||31e6",
				"Asia/Jayapura|WIT|-90|0||26e4",
				"Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1BVA0 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4",
				"Asia/Kabul|AFT|-4u|0||46e5",
				"Asia/Kamchatka|PETT PETST PETT|-c0 -c0 -b0|0120|1BWe0 1qN0 WM0|18e4",
				"Asia/Karachi|PKT|-50|0||24e6",
				"Asia/Urumqi|XJT|-60|0||32e5",
				"Asia/Kathmandu|NPT|-5J|0||12e5",
				"Asia/Khandyga|VLAT VLAST VLAT YAKT YAKT|-a0 -b0 -b0 -a0 -90|010234|1BWg0 1qM0 WM0 17V0 7zD0|66e2",
				"Asia/Krasnoyarsk|KRAT KRAST KRAT|-70 -80 -80|01020|1BWj0 1qM0 WM0 8Hz0|10e5",
				"Asia/Kuala_Lumpur|MYT|-80|0||71e5",
				"Asia/Magadan|MAGT MAGST MAGT MAGT|-b0 -c0 -c0 -a0|010230|1BWf0 1qM0 WM0 8Hz0 3Cq0|95e3",
				"Asia/Makassar|WITA|-80|0||15e5",
				"Asia/Manila|PHT|-80|0||24e6",
				"Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5",
				"Asia/Novokuznetsk|+07 +06|-70 -60|010|1Dp80 WM0|55e4",
				"Asia/Novosibirsk|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 4eN0|15e5",
				"Asia/Omsk|OMST OMSST OMST|-60 -70 -70|01020|1BWk0 1qM0 WM0 8Hz0|12e5",
				"Asia/Pyongyang|KST KST|-90 -8u|01|1P4D0|29e5",
				"Asia/Rangoon|MMT|-6u|0||48e5",
				"Asia/Sakhalin|SAKT SAKST SAKT|-a0 -b0 -b0|010202|1BWg0 1qM0 WM0 8Hz0 3rd0|58e4",
				"Asia/Tashkent|UZT|-50|0||23e5",
				"Asia/Seoul|KST|-90|0||23e6",
				"Asia/Singapore|SGT|-80|0||56e5",
				"Asia/Srednekolymsk|MAGT MAGST MAGT SRET|-b0 -c0 -c0 -b0|01023|1BWf0 1qM0 WM0 8Hz0|35e2",
				"Asia/Tbilisi|GET|-40|0||11e5",
				"Asia/Tehran|IRST IRDT|-3u -4u|01010101010101010101010|1BTUu 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6",
				"Asia/Thimphu|BTT|-60|0||79e3",
				"Asia/Tokyo|JST|-90|0||38e6",
				"Asia/Tomsk|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 3Qp0|10e5",
				"Asia/Ulaanbaatar|ULAT ULAST|-80 -90|0101010101010|1O8G0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|12e5",
				"Asia/Ust-Nera|MAGT MAGST MAGT VLAT VLAT|-b0 -c0 -c0 -b0 -a0|010234|1BWf0 1qM0 WM0 17V0 7zD0|65e2",
				"Asia/Vladivostok|VLAT VLAST VLAT|-a0 -b0 -b0|01020|1BWg0 1qM0 WM0 8Hz0|60e4",
				"Asia/Yakutsk|YAKT YAKST YAKT|-90 -a0 -a0|01020|1BWh0 1qM0 WM0 8Hz0|28e4",
				"Asia/Yekaterinburg|YEKT YEKST YEKT|-50 -60 -60|01020|1BWl0 1qM0 WM0 8Hz0|14e5",
				"Asia/Yerevan|AMT AMST|-40 -50|01010|1BWm0 1qM0 WM0 1qM0|13e5",
				"Atlantic/Azores|AZOT AZOST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4",
				"Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5",
				"Atlantic/Cape_Verde|CVT|10|0||50e4",
				"Atlantic/South_Georgia|GST|20|0||30",
				"Atlantic/Stanley|FKST FKT|30 40|010|1C6R0 U10|21e2",
				"Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1C140 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5",
				"Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1C14u 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5",
				"Australia/Brisbane|AEST|-a0|0||20e5",
				"Australia/Darwin|ACST|-9u|0||12e4",
				"Australia/Eucla|ACWST|-8J|0||368",
				"Australia/Lord_Howe|LHDT LHST|-b0 -au|01010101010101010101010|1C130 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347",
				"Australia/Perth|AWST|-80|0||18e5",
				"Pacific/Easter|EASST EAST|50 60|010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2",
				"Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5",
				"Etc/GMT+1|GMT+1|10|0|",
				"Etc/GMT+10|GMT+10|a0|0|",
				"Etc/GMT+11|GMT+11|b0|0|",
				"Etc/GMT+12|GMT+12|c0|0|",
				"Etc/GMT+2|GMT+2|20|0|",
				"Etc/GMT+3|GMT+3|30|0|",
				"Etc/GMT+4|GMT+4|40|0|",
				"Etc/GMT+5|GMT+5|50|0|",
				"Etc/GMT+6|GMT+6|60|0|",
				"Etc/GMT+7|GMT+7|70|0|",
				"Etc/GMT+8|GMT+8|80|0|",
				"Etc/GMT+9|GMT+9|90|0|",
				"Etc/GMT-1|GMT-1|-10|0|",
				"Etc/GMT-10|GMT-10|-a0|0|",
				"Etc/GMT-11|GMT-11|-b0|0|",
				"Etc/GMT-12|GMT-12|-c0|0|",
				"Etc/GMT-13|GMT-13|-d0|0|",
				"Etc/GMT-14|GMT-14|-e0|0|",
				"Etc/GMT-2|GMT-2|-20|0|",
				"Etc/GMT-3|GMT-3|-30|0|",
				"Etc/GMT-4|GMT-4|-40|0|",
				"Etc/GMT-5|GMT-5|-50|0|",
				"Etc/GMT-6|GMT-6|-60|0|",
				"Etc/GMT-7|GMT-7|-70|0|",
				"Etc/GMT-8|GMT-8|-80|0|",
				"Etc/GMT-9|GMT-9|-90|0|",
				"Etc/UCT|UCT|0|0|",
				"Etc/UTC|UTC|0|0|",
				"Europe/Astrakhan|+03 +04|-30 -40|010101|1BWn0 1qM0 WM0 8Hz0 3rd0",
				"Europe/London|GMT BST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6",
				"Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4",
				"Europe/Kaliningrad|EET EEST FET|-20 -30 -30|01020|1BWo0 1qM0 WM0 8Hz0|44e4",
				"Europe/Kirov|+03 +04|-30 -40|01010|1BWn0 1qM0 WM0 8Hz0|48e4",
				"Europe/Minsk|EET EEST FET MSK|-20 -30 -30 -30|01023|1BWo0 1qM0 WM0 8Hy0|19e5",
				"Europe/Moscow|MSK MSD MSK|-30 -40 -40|01020|1BWn0 1qM0 WM0 8Hz0|16e6",
				"Europe/Samara|SAMT SAMST SAMT|-40 -40 -30|0120|1BWm0 1qN0 WM0|12e5",
				"Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|01010101023|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4",
				"Pacific/Honolulu|HST|a0|0||37e4",
				"Indian/Chagos|IOT|-60|0||30e2",
				"Indian/Christmas|CXT|-70|0||21e2",
				"Indian/Cocos|CCT|-6u|0||596",
				"Indian/Kerguelen|TFT|-50|0||130",
				"Indian/Mahe|SCT|-40|0||79e3",
				"Indian/Maldives|MVT|-50|0||35e4",
				"Indian/Mauritius|MUT|-40|0||15e4",
				"Indian/Reunion|RET|-40|0||84e4",
				"Pacific/Majuro|MHT|-c0|0||28e3",
				"MET|MET MEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
				"Pacific/Chatham|CHADT CHAST|-dJ -cJ|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600",
				"Pacific/Apia|SST SDT WSDT WSST|b0 a0 -e0 -d0|01012323232323232323232|1Dbn0 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3",
				"Pacific/Bougainville|PGT BST|-a0 -b0|01|1NwE0|18e4",
				"Pacific/Chuuk|CHUT|-a0|0||49e3",
				"Pacific/Efate|VUT|-b0|0||66e3",
				"Pacific/Enderbury|PHOT|-d0|0||1",
				"Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0|483",
				"Pacific/Fiji|FJST FJT|-d0 -c0|01010101010101010101010|1BWe0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0|88e4",
				"Pacific/Funafuti|TVT|-c0|0||45e2",
				"Pacific/Galapagos|GALT|60|0||25e3",
				"Pacific/Gambier|GAMT|90|0||125",
				"Pacific/Guadalcanal|SBT|-b0|0||11e4",
				"Pacific/Guam|ChST|-a0|0||17e4",
				"Pacific/Kiritimati|LINT|-e0|0||51e2",
				"Pacific/Kosrae|KOST|-b0|0||66e2",
				"Pacific/Marquesas|MART|9u|0||86e2",
				"Pacific/Pago_Pago|SST|b0|0||37e2",
				"Pacific/Nauru|NRT|-c0|0||10e3",
				"Pacific/Niue|NUT|b0|0||12e2",
				"Pacific/Norfolk|NFT NFT|-bu -b0|01|1PoCu|25e4",
				"Pacific/Noumea|NCT|-b0|0||98e3",
				"Pacific/Palau|PWT|-90|0||21e3",
				"Pacific/Pitcairn|PST|80|0||56",
				"Pacific/Pohnpei|PONT|-b0|0||34e3",
				"Pacific/Port_Moresby|PGT|-a0|0||25e4",
				"Pacific/Rarotonga|CKT|a0|0||13e3",
				"Pacific/Tahiti|TAHT|a0|0||18e4",
				"Pacific/Tarawa|GILT|-c0|0||29e3",
				"Pacific/Tongatapu|TOT|-d0|0||75e3",
				"Pacific/Wake|WAKT|-c0|0||16e3",
				"Pacific/Wallis|WFT|-c0|0||94"
			],
			"links": [
				"Africa/Abidjan|Africa/Accra",
				"Africa/Abidjan|Africa/Bamako",
				"Africa/Abidjan|Africa/Banjul",
				"Africa/Abidjan|Africa/Bissau",
				"Africa/Abidjan|Africa/Conakry",
				"Africa/Abidjan|Africa/Dakar",
				"Africa/Abidjan|Africa/Freetown",
				"Africa/Abidjan|Africa/Lome",
				"Africa/Abidjan|Africa/Monrovia",
				"Africa/Abidjan|Africa/Nouakchott",
				"Africa/Abidjan|Africa/Ouagadougou",
				"Africa/Abidjan|Africa/Sao_Tome",
				"Africa/Abidjan|Africa/Timbuktu",
				"Africa/Abidjan|America/Danmarkshavn",
				"Africa/Abidjan|Atlantic/Reykjavik",
				"Africa/Abidjan|Atlantic/St_Helena",
				"Africa/Abidjan|Etc/GMT",
				"Africa/Abidjan|Etc/GMT+0",
				"Africa/Abidjan|Etc/GMT-0",
				"Africa/Abidjan|Etc/GMT0",
				"Africa/Abidjan|Etc/Greenwich",
				"Africa/Abidjan|GMT",
				"Africa/Abidjan|GMT+0",
				"Africa/Abidjan|GMT-0",
				"Africa/Abidjan|GMT0",
				"Africa/Abidjan|Greenwich",
				"Africa/Abidjan|Iceland",
				"Africa/Algiers|Africa/Tunis",
				"Africa/Cairo|Egypt",
				"Africa/Casablanca|Africa/El_Aaiun",
				"Africa/Johannesburg|Africa/Maseru",
				"Africa/Johannesburg|Africa/Mbabane",
				"Africa/Khartoum|Africa/Addis_Ababa",
				"Africa/Khartoum|Africa/Asmara",
				"Africa/Khartoum|Africa/Asmera",
				"Africa/Khartoum|Africa/Dar_es_Salaam",
				"Africa/Khartoum|Africa/Djibouti",
				"Africa/Khartoum|Africa/Juba",
				"Africa/Khartoum|Africa/Kampala",
				"Africa/Khartoum|Africa/Mogadishu",
				"Africa/Khartoum|Africa/Nairobi",
				"Africa/Khartoum|Indian/Antananarivo",
				"Africa/Khartoum|Indian/Comoro",
				"Africa/Khartoum|Indian/Mayotte",
				"Africa/Lagos|Africa/Bangui",
				"Africa/Lagos|Africa/Brazzaville",
				"Africa/Lagos|Africa/Douala",
				"Africa/Lagos|Africa/Kinshasa",
				"Africa/Lagos|Africa/Libreville",
				"Africa/Lagos|Africa/Luanda",
				"Africa/Lagos|Africa/Malabo",
				"Africa/Lagos|Africa/Ndjamena",
				"Africa/Lagos|Africa/Niamey",
				"Africa/Lagos|Africa/Porto-Novo",
				"Africa/Maputo|Africa/Blantyre",
				"Africa/Maputo|Africa/Bujumbura",
				"Africa/Maputo|Africa/Gaborone",
				"Africa/Maputo|Africa/Harare",
				"Africa/Maputo|Africa/Kigali",
				"Africa/Maputo|Africa/Lubumbashi",
				"Africa/Maputo|Africa/Lusaka",
				"Africa/Tripoli|Libya",
				"America/Adak|America/Atka",
				"America/Adak|US/Aleutian",
				"America/Anchorage|America/Juneau",
				"America/Anchorage|America/Nome",
				"America/Anchorage|America/Sitka",
				"America/Anchorage|America/Yakutat",
				"America/Anchorage|US/Alaska",
				"America/Argentina/Buenos_Aires|America/Argentina/Catamarca",
				"America/Argentina/Buenos_Aires|America/Argentina/ComodRivadavia",
				"America/Argentina/Buenos_Aires|America/Argentina/Cordoba",
				"America/Argentina/Buenos_Aires|America/Argentina/Jujuy",
				"America/Argentina/Buenos_Aires|America/Argentina/La_Rioja",
				"America/Argentina/Buenos_Aires|America/Argentina/Mendoza",
				"America/Argentina/Buenos_Aires|America/Argentina/Rio_Gallegos",
				"America/Argentina/Buenos_Aires|America/Argentina/Salta",
				"America/Argentina/Buenos_Aires|America/Argentina/San_Juan",
				"America/Argentina/Buenos_Aires|America/Argentina/San_Luis",
				"America/Argentina/Buenos_Aires|America/Argentina/Tucuman",
				"America/Argentina/Buenos_Aires|America/Argentina/Ushuaia",
				"America/Argentina/Buenos_Aires|America/Buenos_Aires",
				"America/Argentina/Buenos_Aires|America/Catamarca",
				"America/Argentina/Buenos_Aires|America/Cordoba",
				"America/Argentina/Buenos_Aires|America/Jujuy",
				"America/Argentina/Buenos_Aires|America/Mendoza",
				"America/Argentina/Buenos_Aires|America/Rosario",
				"America/Campo_Grande|America/Cuiaba",
				"America/Chicago|America/Indiana/Knox",
				"America/Chicago|America/Indiana/Tell_City",
				"America/Chicago|America/Knox_IN",
				"America/Chicago|America/Matamoros",
				"America/Chicago|America/Menominee",
				"America/Chicago|America/North_Dakota/Center",
				"America/Chicago|America/North_Dakota/New_Salem",
				"America/Chicago|America/Rainy_River",
				"America/Chicago|America/Rankin_Inlet",
				"America/Chicago|America/Resolute",
				"America/Chicago|America/Winnipeg",
				"America/Chicago|CST6CDT",
				"America/Chicago|Canada/Central",
				"America/Chicago|US/Central",
				"America/Chicago|US/Indiana-Starke",
				"America/Chihuahua|America/Mazatlan",
				"America/Chihuahua|Mexico/BajaSur",
				"America/Denver|America/Boise",
				"America/Denver|America/Cambridge_Bay",
				"America/Denver|America/Edmonton",
				"America/Denver|America/Inuvik",
				"America/Denver|America/Ojinaga",
				"America/Denver|America/Shiprock",
				"America/Denver|America/Yellowknife",
				"America/Denver|Canada/Mountain",
				"America/Denver|MST7MDT",
				"America/Denver|Navajo",
				"America/Denver|US/Mountain",
				"America/Fortaleza|America/Belem",
				"America/Fortaleza|America/Maceio",
				"America/Fortaleza|America/Recife",
				"America/Fortaleza|America/Santarem",
				"America/Halifax|America/Glace_Bay",
				"America/Halifax|America/Moncton",
				"America/Halifax|America/Thule",
				"America/Halifax|Atlantic/Bermuda",
				"America/Halifax|Canada/Atlantic",
				"America/Havana|Cuba",
				"America/Los_Angeles|America/Dawson",
				"America/Los_Angeles|America/Ensenada",
				"America/Los_Angeles|America/Santa_Isabel",
				"America/Los_Angeles|America/Tijuana",
				"America/Los_Angeles|America/Vancouver",
				"America/Los_Angeles|America/Whitehorse",
				"America/Los_Angeles|Canada/Pacific",
				"America/Los_Angeles|Canada/Yukon",
				"America/Los_Angeles|Mexico/BajaNorte",
				"America/Los_Angeles|PST8PDT",
				"America/Los_Angeles|US/Pacific",
				"America/Los_Angeles|US/Pacific-New",
				"America/Managua|America/Belize",
				"America/Managua|America/Costa_Rica",
				"America/Managua|America/El_Salvador",
				"America/Managua|America/Guatemala",
				"America/Managua|America/Regina",
				"America/Managua|America/Swift_Current",
				"America/Managua|America/Tegucigalpa",
				"America/Managua|Canada/East-Saskatchewan",
				"America/Managua|Canada/Saskatchewan",
				"America/Manaus|America/Boa_Vista",
				"America/Manaus|America/Porto_Velho",
				"America/Manaus|Brazil/West",
				"America/Mexico_City|America/Merida",
				"America/Mexico_City|America/Monterrey",
				"America/Mexico_City|Mexico/General",
				"America/New_York|America/Detroit",
				"America/New_York|America/Fort_Wayne",
				"America/New_York|America/Indiana/Indianapolis",
				"America/New_York|America/Indiana/Marengo",
				"America/New_York|America/Indiana/Petersburg",
				"America/New_York|America/Indiana/Vevay",
				"America/New_York|America/Indiana/Vincennes",
				"America/New_York|America/Indiana/Winamac",
				"America/New_York|America/Indianapolis",
				"America/New_York|America/Iqaluit",
				"America/New_York|America/Kentucky/Louisville",
				"America/New_York|America/Kentucky/Monticello",
				"America/New_York|America/Louisville",
				"America/New_York|America/Montreal",
				"America/New_York|America/Nassau",
				"America/New_York|America/Nipigon",
				"America/New_York|America/Pangnirtung",
				"America/New_York|America/Thunder_Bay",
				"America/New_York|America/Toronto",
				"America/New_York|Canada/Eastern",
				"America/New_York|EST5EDT",
				"America/New_York|US/East-Indiana",
				"America/New_York|US/Eastern",
				"America/New_York|US/Michigan",
				"America/Noronha|Brazil/DeNoronha",
				"America/Panama|America/Atikokan",
				"America/Panama|America/Cayman",
				"America/Panama|America/Coral_Harbour",
				"America/Panama|America/Jamaica",
				"America/Panama|EST",
				"America/Panama|Jamaica",
				"America/Phoenix|America/Creston",
				"America/Phoenix|America/Dawson_Creek",
				"America/Phoenix|America/Hermosillo",
				"America/Phoenix|MST",
				"America/Phoenix|US/Arizona",
				"America/Rio_Branco|America/Eirunepe",
				"America/Rio_Branco|America/Porto_Acre",
				"America/Rio_Branco|Brazil/Acre",
				"America/Santiago|Antarctica/Palmer",
				"America/Santiago|Chile/Continental",
				"America/Santo_Domingo|America/Anguilla",
				"America/Santo_Domingo|America/Antigua",
				"America/Santo_Domingo|America/Aruba",
				"America/Santo_Domingo|America/Barbados",
				"America/Santo_Domingo|America/Blanc-Sablon",
				"America/Santo_Domingo|America/Curacao",
				"America/Santo_Domingo|America/Dominica",
				"America/Santo_Domingo|America/Grenada",
				"America/Santo_Domingo|America/Guadeloupe",
				"America/Santo_Domingo|America/Kralendijk",
				"America/Santo_Domingo|America/Lower_Princes",
				"America/Santo_Domingo|America/Marigot",
				"America/Santo_Domingo|America/Martinique",
				"America/Santo_Domingo|America/Montserrat",
				"America/Santo_Domingo|America/Port_of_Spain",
				"America/Santo_Domingo|America/Puerto_Rico",
				"America/Santo_Domingo|America/St_Barthelemy",
				"America/Santo_Domingo|America/St_Kitts",
				"America/Santo_Domingo|America/St_Lucia",
				"America/Santo_Domingo|America/St_Thomas",
				"America/Santo_Domingo|America/St_Vincent",
				"America/Santo_Domingo|America/Tortola",
				"America/Santo_Domingo|America/Virgin",
				"America/Sao_Paulo|Brazil/East",
				"America/St_Johns|Canada/Newfoundland",
				"Asia/Almaty|Asia/Qyzylorda",
				"Asia/Aqtobe|Asia/Aqtau",
				"Asia/Aqtobe|Asia/Oral",
				"Asia/Ashgabat|Asia/Ashkhabad",
				"Asia/Baghdad|Asia/Aden",
				"Asia/Baghdad|Asia/Bahrain",
				"Asia/Baghdad|Asia/Kuwait",
				"Asia/Baghdad|Asia/Qatar",
				"Asia/Baghdad|Asia/Riyadh",
				"Asia/Bangkok|Asia/Ho_Chi_Minh",
				"Asia/Bangkok|Asia/Phnom_Penh",
				"Asia/Bangkok|Asia/Saigon",
				"Asia/Bangkok|Asia/Vientiane",
				"Asia/Dhaka|Asia/Dacca",
				"Asia/Dubai|Asia/Muscat",
				"Asia/Hong_Kong|Hongkong",
				"Asia/Jakarta|Asia/Pontianak",
				"Asia/Jerusalem|Asia/Tel_Aviv",
				"Asia/Jerusalem|Israel",
				"Asia/Kathmandu|Asia/Katmandu",
				"Asia/Kolkata|Asia/Calcutta",
				"Asia/Kolkata|Asia/Colombo",
				"Asia/Kuala_Lumpur|Asia/Kuching",
				"Asia/Makassar|Asia/Ujung_Pandang",
				"Asia/Seoul|ROK",
				"Asia/Shanghai|Asia/Chongqing",
				"Asia/Shanghai|Asia/Chungking",
				"Asia/Shanghai|Asia/Harbin",
				"Asia/Shanghai|Asia/Macao",
				"Asia/Shanghai|Asia/Macau",
				"Asia/Shanghai|Asia/Taipei",
				"Asia/Shanghai|PRC",
				"Asia/Shanghai|ROC",
				"Asia/Singapore|Singapore",
				"Asia/Tashkent|Asia/Samarkand",
				"Asia/Tehran|Iran",
				"Asia/Thimphu|Asia/Thimbu",
				"Asia/Tokyo|Japan",
				"Asia/Ulaanbaatar|Asia/Ulan_Bator",
				"Asia/Urumqi|Asia/Kashgar",
				"Australia/Adelaide|Australia/Broken_Hill",
				"Australia/Adelaide|Australia/South",
				"Australia/Adelaide|Australia/Yancowinna",
				"Australia/Brisbane|Australia/Lindeman",
				"Australia/Brisbane|Australia/Queensland",
				"Australia/Darwin|Australia/North",
				"Australia/Lord_Howe|Australia/LHI",
				"Australia/Perth|Australia/West",
				"Australia/Sydney|Australia/ACT",
				"Australia/Sydney|Australia/Canberra",
				"Australia/Sydney|Australia/Currie",
				"Australia/Sydney|Australia/Hobart",
				"Australia/Sydney|Australia/Melbourne",
				"Australia/Sydney|Australia/NSW",
				"Australia/Sydney|Australia/Tasmania",
				"Australia/Sydney|Australia/Victoria",
				"Etc/UCT|UCT",
				"Etc/UTC|Etc/Universal",
				"Etc/UTC|Etc/Zulu",
				"Etc/UTC|UTC",
				"Etc/UTC|Universal",
				"Etc/UTC|Zulu",
				"Europe/Astrakhan|Europe/Ulyanovsk",
				"Europe/Athens|Asia/Nicosia",
				"Europe/Athens|EET",
				"Europe/Athens|Europe/Bucharest",
				"Europe/Athens|Europe/Helsinki",
				"Europe/Athens|Europe/Kiev",
				"Europe/Athens|Europe/Mariehamn",
				"Europe/Athens|Europe/Nicosia",
				"Europe/Athens|Europe/Riga",
				"Europe/Athens|Europe/Sofia",
				"Europe/Athens|Europe/Tallinn",
				"Europe/Athens|Europe/Uzhgorod",
				"Europe/Athens|Europe/Vilnius",
				"Europe/Athens|Europe/Zaporozhye",
				"Europe/Chisinau|Europe/Tiraspol",
				"Europe/Dublin|Eire",
				"Europe/Istanbul|Asia/Istanbul",
				"Europe/Istanbul|Turkey",
				"Europe/Lisbon|Atlantic/Canary",
				"Europe/Lisbon|Atlantic/Faeroe",
				"Europe/Lisbon|Atlantic/Faroe",
				"Europe/Lisbon|Atlantic/Madeira",
				"Europe/Lisbon|Portugal",
				"Europe/Lisbon|WET",
				"Europe/London|Europe/Belfast",
				"Europe/London|Europe/Guernsey",
				"Europe/London|Europe/Isle_of_Man",
				"Europe/London|Europe/Jersey",
				"Europe/London|GB",
				"Europe/London|GB-Eire",
				"Europe/Moscow|Europe/Volgograd",
				"Europe/Moscow|W-SU",
				"Europe/Paris|Africa/Ceuta",
				"Europe/Paris|Arctic/Longyearbyen",
				"Europe/Paris|Atlantic/Jan_Mayen",
				"Europe/Paris|CET",
				"Europe/Paris|Europe/Amsterdam",
				"Europe/Paris|Europe/Andorra",
				"Europe/Paris|Europe/Belgrade",
				"Europe/Paris|Europe/Berlin",
				"Europe/Paris|Europe/Bratislava",
				"Europe/Paris|Europe/Brussels",
				"Europe/Paris|Europe/Budapest",
				"Europe/Paris|Europe/Busingen",
				"Europe/Paris|Europe/Copenhagen",
				"Europe/Paris|Europe/Gibraltar",
				"Europe/Paris|Europe/Ljubljana",
				"Europe/Paris|Europe/Luxembourg",
				"Europe/Paris|Europe/Madrid",
				"Europe/Paris|Europe/Malta",
				"Europe/Paris|Europe/Monaco",
				"Europe/Paris|Europe/Oslo",
				"Europe/Paris|Europe/Podgorica",
				"Europe/Paris|Europe/Prague",
				"Europe/Paris|Europe/Rome",
				"Europe/Paris|Europe/San_Marino",
				"Europe/Paris|Europe/Sarajevo",
				"Europe/Paris|Europe/Skopje",
				"Europe/Paris|Europe/Stockholm",
				"Europe/Paris|Europe/Tirane",
				"Europe/Paris|Europe/Vaduz",
				"Europe/Paris|Europe/Vatican",
				"Europe/Paris|Europe/Vienna",
				"Europe/Paris|Europe/Warsaw",
				"Europe/Paris|Europe/Zagreb",
				"Europe/Paris|Europe/Zurich",
				"Europe/Paris|Poland",
				"Pacific/Auckland|Antarctica/McMurdo",
				"Pacific/Auckland|Antarctica/South_Pole",
				"Pacific/Auckland|NZ",
				"Pacific/Chatham|NZ-CHAT",
				"Pacific/Chuuk|Pacific/Truk",
				"Pacific/Chuuk|Pacific/Yap",
				"Pacific/Easter|Chile/EasterIsland",
				"Pacific/Guam|Pacific/Saipan",
				"Pacific/Honolulu|HST",
				"Pacific/Honolulu|Pacific/Johnston",
				"Pacific/Honolulu|US/Hawaii",
				"Pacific/Majuro|Kwajalein",
				"Pacific/Majuro|Pacific/Kwajalein",
				"Pacific/Pago_Pago|Pacific/Midway",
				"Pacific/Pago_Pago|Pacific/Samoa",
				"Pacific/Pago_Pago|US/Samoa",
				"Pacific/Pohnpei|Pacific/Ponape"
			]
		} );
	};

}( PULSE.app ));

/*globals  PULSE.app, PULSE.core */

(function( app, core ){
	"use strict";

	app.webView = function(){

		var webview = core.url.getParam( "webview" );
		var webviewCookie = core.url.getParam( "webview_cookie" );

		if ( webviewCookie && webviewCookie === 'true' )
		{
			core.localStorage.setStorage( 'webviewCookie', true, 100, true );
		}

		var webviewFromStorage = core.localStorage.getStorage( 'webviewCookie', true );

		if( ( webview && webview === 'true' ) || ( webviewFromStorage && webviewFromStorage !== '' ) ) {
			document.querySelector( '.masthead' ).style.display = 'none';
			document.querySelector( '.mainFooter' ).style.display = 'none';
			core.style.addClass( document.body, 'webViewBody' );
		}
	};

}( PULSE.app, PULSE.core ));

/*globals PULSE, PULSE.app */

(function( app ){
	"use strict";

	app.widgetDeps = function( container ){

		var environment = app.checkEnvironment();
		var thisContainer = ( container ) ? container : document;
		var els = thisContainer.querySelectorAll( '[data-script]' );
		var deps = [];
		var scriptPrefix = app.environment.cdn + "widgets/";
		var scriptSuffix = app.environment.label === "production" ? ".min.js" : ".js";

		Array.prototype.map.call( els, function( el ){
		    addDependancy( el.getAttribute('data-script') );
		} );

		function addDependancy( dep ){
			if( deps.indexOf( dep ) < 0 ){
				deps.push( dep );
				var script = document.createElement( 'script' );
				script.type = 'text/javascript';
				script.src = scriptPrefix + dep + scriptSuffix;
				document.body.appendChild( script );
			}
		}
	};

}( PULSE.app ));

/*globals PULSE, PULSE.app */

(function( app, common ){
	"use strict";

	window.onload = function(){
		app.widgetDeps();
		app.I18N.setup();
		app.webView();
		app.loadTimezones();

		/** If FastClick.js is loaded it rebinds all click events with touch events where necessary */
		if( FastClick !== null ){
			FastClick.attach(document.body);
		}
		common.cookieNotice();
		common.fantasyAuthenticate();
	};

}( PULSE.app, PULSE.app.common));
