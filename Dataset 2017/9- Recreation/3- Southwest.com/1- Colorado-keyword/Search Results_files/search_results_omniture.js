function analytics_setPageInfo() {
	s.channel="EXPLORE"
	s.prop50="EXPLORE:SWA"
	s.pageName = "EXPLORE:SWA:Search Results Page";
}

function analytics_setPageParameters(keywords)
{
	s.prop39 = "Search Keywords: " + keywords;
	s.eVar42 = keywords;
//	alert("s.prop39 =" + s.prop39);
	if (analyticsDisabled) return;
	// We will add the appropriate Omniture variable assignments at this point - for now, this is just a stub
}
