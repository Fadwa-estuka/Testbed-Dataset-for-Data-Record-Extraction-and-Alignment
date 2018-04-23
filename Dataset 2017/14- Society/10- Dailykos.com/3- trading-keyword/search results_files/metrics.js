if(!DailyKos) var DailyKos = {};

DailyKos.Metrics = (function(){
	var userProperties = {};
	var properties;

	var registerUserProperties = function() {
		if(userProperties && userProperties.id) {
			mixpanel.identify(userProperties.id);
			mixpanel.register({anonymous: false});
		} else {
			mixpanel.register({anonymous: true});
		}
		mixpanel.register(userProperties);
	};

	var meterUser = function() {
		if($.cookie("meter_user") == null) {
			$.cookie(
				"meter_user",
				(Math.floor(Math.random() * DailyKos.Metrics.sampleSize) == 0),
				{
					path: '/',
					domain: '.' + DailyKos.Domain,
					expires: 7300
				}
			);
		};

		return ($.cookie("meter_user") === 'true')
	}

	var track = function(eventLabel, inProperties){
		if (!DailyKos.Metrics.metricsOn) {
			return false;
		}
		if (!inProperties) inProperties = {};
		var requestFormatHash = userProperties ? { request_format: userProperties['request_format'] } : {};
		var composedProperties = _.extend({}, 
			properties,
			inProperties,
			requestFormatHash
		);

		if(meterUser()) {
			mixpanel.track(eventLabel, composedProperties);
		}
	};

	// we don't know for sure this was set on the Rails side
	var setDomain = function() {
		if (!DailyKos.Domain) {
			DailyKos.Domain = window.location.host.toString().replace(/^.*?dailykos/, 'dailykos').replace('/', '');
		}
	}

	return {
		init: function() {
			if (DailyKos.Metrics.sampleSize === undefined) {
				DailyKos.Metrics.sampleSize = 10;
			}

			setDomain();

			registerUserProperties();
			properties = {
				logged_in: !!userProperties && !!userProperties.id 
			};
		},

		setUserProperties: function(inProperties){
			userProperties = _(userProperties).extend(inProperties);
		},
		track: track,
		meterUser: meterUser
	};

})();

