var tealiumiq_currency = {
    ts:"201702240100",
    rates:{"BZD":2.008436,"YER":250.050781,"SLL":7422.0425,"ERN":15.3322,"NGN":316.164466,"CRC":562.013298,"VEF":9.990013,"LAK":8125.538205,"CLP":641.5,"DZD":110.07,"CUC":1,"BYN":1.873446,"SZL":12.968649,"MOP":7.986035,"BYR":20026.25,"MUR":35.5185,"WST":2.543585,"LRD":93.996255,"MMK":1370.263413,"KGS":69.09555,"PYG":5659.127124,"IDR":13341.516667,"GTQ":7.358799,"CAD":1.311074,"AWG":1.799996,"TTD":6.724302,"PKR":104.790142,"UZS":3287.229928,"XCD":2.70255,"VUV":107.798334,"XOF":621.7829,"KMF":465.7765,"AZN":1.7925,"XPD":0.00129204,"MNT":2470.351667,"ANG":1.778446,"LBP":1509.599943,"KES":103.605,"GBP":0.796997,"BTN":66.927883,"CDF":1274.206394,"CLF":0.024082,"SEK":9.00155,"AFN":66.760355,"KZT":314.8,"ZMK":5252.024745,"DKK":7.029616,"AMD":486.036231,"SCR":13.233349,"FJD":2.063147,"SHP":0.796997,"ALL":127.800459,"TOP":2.25921,"ZMW":9.68199,"UGX":3587,"OMR":0.384999,"DJF":178.77,"BND":1.405506,"TND":2.289701,"SBD":7.778822,"GHS":4.565,"GNF":9354.983333,"BOB":6.904844,"CVE":104.65,"IMP":0.796997,"ARS":15.504,"GMD":44.43,"MWK":724.902294,"BDT":79.873288,"KWD":0.305454,"EUR":0.945693,"CHF":1.007122,"XAG":0.05502366,"SRD":7.5425,"DOP":47.061819,"PEN":3.244148,"KPW":900.09,"SVC":8.74364,"SGD":1.408502,"TWD":30.741,"USD":1,"BGN":1.848065,"MAD":10.105907,"GGP":0.796997,"SAR":3.7505,"AUD":1.297724,"KYD":0.832685,"KRW":1133.52,"TRY":3.571301,"GIP":0.796997,"XAU":0.00080103,"NAD":12.946521,"CZK":25.553449,"JMD":128.642912,"BSD":1,"UYU":28.317428,"MXN":19.680549,"BTC":0.000846376704,"BWP":10.375467,"GYD":207.826001,"LYD":1.425849,"THB":34.969,"EGP":15.95,"SDG":6.41798,"MKD":58.22,"AED":3.672695,"JOD":0.7085,"JPY":112.84781818,"ZAR":12.885772,"HRK":7.0281,"AOA":165.9075,"RWF":831.684427,"CUP":24.728383,"BBD":2,"PGK":3.175914,"LKR":151.969838,"RON":4.271927,"JEP":0.796997,"PLN":4.070627,"TJS":8.034073,"IQD":1179.088913,"MDL":20.008083,"MYR":4.4465,"CNY":6.866223,"LVL":0.665647,"INR":66.6911,"FKP":0.796997,"NIO":29.583291,"PHP":50.086,"HNL":23.501905,"HKD":7.759443,"NZD":1.384399,"BRL":3.0617,"MTL":0.683602,"RSD":117.275,"SOS":578.222373,"EEK":14.81935,"MZN":70.199168,"NOK":8.345059,"GEL":2.5941,"ISK":109.604932,"ILS":3.69919,"LSL":12.971536,"HUF":291.9703,"UAH":26.892104,"RUB":57.7779,"BMD":1,"IRR":32421.407535,"MGA":3105,"MVR":15.525097,"QAR":3.6415,"VND":22810.683333,"MRO":358.829363,"NPR":106.851009,"ZWL":322.322775,"COP":2869.73,"TZS":2228.235079,"BIF":1696.04092,"XPT":0.00099011,"SYP":214.353333,"KHR":4043.573333,"HTG":66.678868,"BHD":0.377031,"XDR":0.740009,"XAF":621.67262,"STD":23234.325391,"PAB":1,"BAM":1.850508,"LTL":3.270225,"TMT":3.50998,"ETB":22.749843,"XPF":113.206484},
    convert:function(a,f,t){
		// Convert that value to an array
		var isString = typeof a == "string",
			converted = isString ? [a] : a;

		// Iterate over the values to convert each one
		for (var i=0; i<converted.length; i++) {
			converted[i] = parseFloat(converted[i]);
			f = f.toUpperCase();
			t = t.toUpperCase();
			if (converted[i] > 0 && this.rates[f] > 0 && this.rates[t] > 0){
				var v = converted[i] / this.rates[f] * this.rates[t];
				converted[i] = v.toFixed(2);
			}
		}

		// Return the value we accepted
		if (isString) return converted[0];
		else return converted;
    }
}