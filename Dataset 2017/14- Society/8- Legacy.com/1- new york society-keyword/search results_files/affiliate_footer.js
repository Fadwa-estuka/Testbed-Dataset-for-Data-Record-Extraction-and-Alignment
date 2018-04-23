if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.indexOf(searchString, position) === position;
    };
}

Components.AffiliateFooter = React.createClass(
	{
		render: function() 
		{
		    var footerSubMenu = this.props.data.footerSubMenu.data.menu;
		    var domain = this.props.data.footerSubMenu.url;
			var links = footerSubMenu.map(function (obj, i) 
			{
				return React.createElement('span', 
					{key: i}, 
					React.createElement('a', 
					{id: obj.name, href: obj.url.startsWith('/') ? domain + obj.url : !obj.url.startsWith('http') ? 'http://' + obj.url : obj.url}, 
					obj.name.toUpperCase()));
			});
		
			return React.createElement('div',
						{className: 'AffiliateFooter Footer__Footer___aJ8_c'},
						React.createElement('div',
							{className: 'Footer__secondRow___1nPh6'},
							React.createElement('a',					
								{
								    className: 'Footer_Logo',
								    href: this.props.data.footerSubMenu.data.poweredByLogo,
									dangerouslySetInnerHTML: {__html: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="174" height="23" viewBox="0 0 174 23"><image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAAASCAMAAAAT896WAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACjlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAACCHJ73AAAA2HRSTlMATqm1srp6GApSnxcDFW837DJY0HxAEAzuRXKLTzSCiVd9S2qIPUMxHQk/UI2YLkmOlwgLNYqbR5oncz7ggGDwkKBwsMBGLM6dpBSBlsiPrd5nLdijbNvxG6puWwWZvV+n1Ci3tG3cMPW5d7w4Wg/7q35xkcMG1gF1zOmxJiB0Y3hKPMsH+tdpycbFDQQlrsqDAiOVZoYq8zrqhC/57zbi0SHf7bNkrB8RTM2hErZeQc9RdmGSKzOcu6b2FlMT2fJIjP6U1SS45xxdpWiTeVWFokQOvmJW9zkwVokxAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAABG5JREFUSMfFVPlblFUUPigQiKI5foOKihDJMiibyOK3zPK5VCxBUJCsBk5uKAqNWJNLpBVSSlFhm5SkRQiVlYipRdJmttf753TunWFR8Yce4eE+85zlnnvPvPd87zlEk7gCZswMDAq+ZzJTTtkKCQVmhc2ektxzwudOcsZ5uHeK6jDfsmDMURTrXSeMWIhFY97iyCVSL10WtVQay6OjYnyh+2KZKveviAuIp4RExV8xW9LK6FWsk1NSo9OI0ldTYsaaAKLMpKxFlJ2zlgCoGpFusGEnB4iccBIZLo03oAhpKDTOscu8ptzXYCNS1fFY143Y6zdsfADmg0QPGTm5yHPlU8HDoYVI4VDRI8Uljz6mJAOppZS2DL4nlQU+vmllcTlVVDqrqms2U9gTFbWLS2qWB8+sC9+ySZyAw+aCW4Hq1E3oOhRywSQ3nBoULjVL3TBp1FFckGBNi6LzOcapQ58Ia/qThdxs2EpF2Ea0Hbk7diKWKAj1VL5rN9FmgBqwR5R/g7ywt1HIJsp5ysN6XzPR/qeZ+s8gl93QPIlVIwVOuyiQF6aXXcOAVYdbgwgL6QKNOVxRidXkgpoCqGqhibA+iwNO5wLAcxBMgEPYR4ef4/rNgJuiZIbcDGrB8y1ER44KN/6FNHmv6cUiqbcuoZciWLcGHWPZ9rJH1pXraeUf2xaQxVSgw+YwfJ+dpSbqPOJIwG6B1bDAYENlakyI9ZWF+amp+drxExqqiNrxqth8raMGr9Mbo6TJQji92dkiTH23nzoFPn0ykoJKWZcWt7J8a4bECrh0LpaXbdUgOzSDVLvqECg1jaVpqNZRR2IVR01VszM3yMYPmRDr2+/4jXfxHlE0svkPT1Xv2Iguwvsj5+PxAa05Lc3uD31bq/z6eBJVnhFYy86ydJd5fByQAHTJAf5vw0EOC7ujn51ZOp4D/CA/B0Qj+u/fitV6OA9npdVFHyHo5MfcG3EoI+pBOxlIl6FPiHpxrrJPOu395VInNGdL3fvpnbB6DcOhqUxaKximDVy7kXYSjW4d7S2n6bvAvaWJut6MNWGenxEFn30ue4LO59D8c198KcxGNBHNQinV+gjx1XqeCMAFNj2Mc6DXl6OjWQ61Zgq5A1ZSmHiGLjnrZcAqjY4pjsE+NrMs+sjMMhzuW7HSRR/WEgxGAClt3oEtrZdwaE7E1/VEl7GtPvkKMgfXAnvdV498I05uR50YV98eo5bK01WZQz3lFHhBj8n6rojCLl/j0JlGHns0t9FDk7v6qoHO4eHhTnzPBBTP6/yB1u0SBmpnBwAXOzKAH+mo2PhJXrkkm/rnihNCnh8aEk/tvn69g0dAy1UxB0L6mgRd+iYZKsX8cuNGHTfhHl1UPK4hSUyjltpfo37rCUQ+/d6wk6iwitv+2sHIRN+Vhv7JBnEX649T3VKv+HPC8P6/phvguFWCTKGsA923hQb/bgs2phvf+BV3BWZ+ykB/7O2hKGZt5nTju2l1OTr/qSlePUHk38aaA/8n038KBbz9Fn8r4gAAAABJRU5ErkJggg==" x="3" y="3" width="171" height="18"/></svg>'}
								}),
							React.createElement('div',
								{className: 'Footer__footerRightSide___dWwvs'},
								React.createElement('nav',
									{className: 'Footer__footerLegalNav___hzuzk'},
									links,
									React.createElement('p', {className: 'Footer_Copyright'}, String.fromCharCode(169) + ' ' + new Date().getFullYear() + ' Legacy.com. All rights reserved.')))));
			}
	});	