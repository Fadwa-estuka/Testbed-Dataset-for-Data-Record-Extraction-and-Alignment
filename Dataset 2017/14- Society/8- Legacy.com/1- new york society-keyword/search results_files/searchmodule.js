function SearchObitsNarrow(options)
{
	// Public variables
	this.stateCaptionsSingular = options.stateCaptionsSingular;
	this.stateCaptionsPular = options.stateCaptionsPular;
	this.ddlStateClientID = options.ddlStateClientID;
	this.ddlCountryClientID = options.ddlCountryClientID;
	this.ddlNewspaperClientID = options.ddlNewspaperClientID;
	this.txtKeywordClientID = options.txtKeywordClientID;
	this.ddlSearchRangeClientID = options.ddlSearchRangeClientID;
	this.txtFirstNameClientID = options.txtFirstNameClientID;
	this.txtLastNameClientID = options.txtLastNameClientID;
	this.AffiliatesXMLPath = options.AffiliatesXMLPath;
	this.affiliatesXML = null;
	this.ObituarySearchUrl = options.ObituarySearchUrl;
	this.SsdiSearchUrl = options.SsdiSearchUrl;
	this.BermudaCountryId = options.BermudaCountryId;
	this.IsSSDISearch = options.IsSSDISearch;
    this.OpenInNewWindow = options.OpenInNewWindow;
    this.FHId = options.FHId;
    
	// Private variables
	var _that = this;

    this.ResetDefaults = function() {
        with (_that) {
            if (affiliatesXML == null) {
                window.setTimeout(function() { _that.ResetDefaults(); }, 100);
                return;
            }
            $('#' + txtFirstNameClientID).val("");
            $('#' + txtLastNameClientID).val("");
            if ($('#' + txtKeywordClientID)) {
                $('#' + txtKeywordClientID).val("");
            }
            $('#' + ddlSearchRangeClientID).get(0).selectedIndex = 1;

            if (!IsSSDISearch) {
                $('#' + ddlCountryClientID).val(0);
                CountryChanged(document.getElementById(ddlCountryClientID));
            } else {
                PopulateStates(1, '', 'States');
            }
        }
    };

    this.CountryChanged = function(elem) {
        with (this) {
            ddlState = document.getElementById(ddlStateClientID);
            ddlState.disabled = false;
            PopulateStates(elem.value, " ", "");
            PopulateAffiliatesDropDown(elem.value, '', '');
            switch (elem.value) {
            case BermudaCountryId:
                // Bermuda
                ddlState.disabled = true;
                PopulateAffiliatesDropDown(ddlCountry.value, '', '');
                break;
            default:
                break;
            }
        }
    };

    this.StateChanged = function(elem) {
        with (this) {
            ddlCountry = document.getElementById(ddlCountryClientID);
            PopulateAffiliatesDropDown(ddlCountry.value, elem.value, '');
        }
    };

    this.DoSearch = function() {
        with (_that) {
            document.cookie = "LegacySearchExpanded=0";
            var queryString = GetSearchQueryString(false);
            if (FHId !== "") {
                queryString = queryString.concat("&fhid=", FHId);
            }
            if (IsSSDISearch) {
                OpenLink(SsdiSearchUrl.replace("{0}", queryString));
            } else {
                OpenLink(ObituarySearchUrl.replace("{0}", queryString));
            }
            return false;
        }
    };

    this.DoSearchMore = function() {
        with (_that) {
            var queryString = GetSearchQueryString(true);
            if (IsSSDISearch || FHId !== "") {
                if (FHId !== "") {
                    queryString += "&Landing=1";
                }
                OpenLink(ObituarySearchUrl.replace("{0}", queryString));
            } else {
                OpenLink(SsdiSearchUrl.replace("{0}", queryString));
            }
            return false;
        }
    };

    function OpenLink(link) {
        with (_that) {
            if (OpenInNewWindow) {
                window.open(link, "obituaries");
            } else {
                window.location = link;
            }
        }
    }

	// Private methods
	function GetSearchQueryString(isMoreSearch) {
	    with (_that) {
	        ddlCountry = document.getElementById(ddlCountryClientID)
	        ddlState = document.getElementById(ddlStateClientID);
	        var searchNewspaper = document.getElementById(ddlNewspaperClientID).value;

	        queryString = "";
	        queryString = queryString.concat("daterange=", GetSearchDateRange(isMoreSearch));

	        if ($('.firstName:input').get(0).value != 'First Name') {
	            queryString = queryString.concat("&firstname=", $('.firstName:input').get(0).value);
	        }
	        if ($('.lastName:input').get(0).value != 'Last Name') {
	            queryString = queryString.concat("&lastname=", $('.lastName:input').get(0).value);
	        }
	        if ($('.keyword:input').get(0).value != 'Keyword') {
	            queryString = queryString.concat("&keyword=", $('.keyword:input').get(0).value);
	        }
	        queryString = queryString.concat("&countryid=", ddlCountry.value);
	        queryString = queryString.concat("&stateid=", ddlState.value);
	        queryString = queryString.concat("&affiliateid=", searchNewspaper);
	        return queryString;
	    }
	}

	function GetSearchDateRange(isMoreSearch) {
	    with (_that) {
	        var dateRange = $('#' + ddlSearchRangeClientID).val();
	        if (isMoreSearch && IsSSDISearch && dateRange.indexOf('-19') > 0) {
	            return "All";
	        }
            return dateRange;
	    }
	}

	function PopulateAffiliatesDropDown(countryid, stateid, selectedValue)
	{
		with (_that)
		{
			ddlNewspaper = document.getElementById(ddlNewspaperClientID);
			ClearDropDown(ddlNewspaper);
			var names = new Array();
			var option;
			if (stateid != '' && stateid != 'all' && stateid != '0')
			{
				$("Legacy > Affiliates > Affiliate[CountryId='" + countryid + "'][StateId='" + stateid + "']", affiliatesXML).each(function() {
					names.push([$(this).attr("Name"), $(this).attr("Id")]);
				});
				names.sort(Comparer);
				ddlState = document.getElementById(ddlStateClientID);
				option = document.createElement("option");
				option.value = "all";
				option.appendChild(document.createTextNode("All " + ddlState.options[ddlState.selectedIndex].text + " obituaries"));
				$(ddlNewspaper).append(option);
			}
			else
			{
				var dropDownLabel = "All obituaries";
				if (countryid == BermudaCountryId)
				{
					$("Legacy > Affiliates > Affiliate[CountryId='" + countryid + "']", affiliatesXML).each(function() {
						names.push([$(this).attr("Name"), $(this).attr("Id")]);
					});
					names.sort(Comparer);
				}
				option = document.createElement("option");
				option.value = "all";
				ddlCountry = document.getElementById(ddlCountryClientID);
				option.appendChild(document.createTextNode(dropDownLabel));
				$(ddlNewspaper).append(option);
			}
			for (i = 0; i < names.length; i++)
			{
				option = document.createElement("option");
				option.value = names[i][1];
				if (names[i][1] == selectedValue)
				{
					option.selected = "selected";
				}
				option.appendChild(document.createTextNode(names[i][0]));
				$(ddlNewspaper).append(option);
			}
		}
	}

	function PopulateStates(countryid, selectedValue, defaultStateObrivation)
	{
		with (_that)
		{
			ddlCountry = document.getElementById(ddlCountryClientID);
			ddlCountry.value = countryid;
			ddlState = document.getElementById(ddlStateClientID);
			ddlState.disabled = false;
			ClearDropDown(ddlState);
			var names = new Array();
			if (countryid != '')
			{
				$("Legacy > States > State[CountryId='" + countryid + "']", affiliatesXML).each(function() {
					names.push([$(this).attr("Name"), $(this).attr("Id")]);
				});
			}
			else
			{
				$("Legacy > States > State", affiliatesXML).each(function() {
					names.push([$(this).attr("Name"), $(this).attr("Id")]);
				});
			}
			names.sort(Comparer);
			var option;
			option = document.createElement("option");
			option.value = "all";
			if (defaultStateObrivation == "") {
			    option.appendChild(document.createTextNode("All " + GetStateObriviationPlural(countryid)));
			}
			else {
			    option.appendChild(document.createTextNode("All " + defaultStateObrivation));
			}
			$(ddlState).append(option);
			var prevValue = '';
			for (i = 0; i < names.length; i++)
			{
				if (prevValue != names[i][1])
				{
					option = document.createElement("option");
					option.value = names[i][1];
					if (names[i][1] == selectedValue)
					{
						option.selected = "selected";
					}
					prevValue = names[i][1];
					option.appendChild(document.createTextNode(names[i][0]));
					$(ddlState).append(option);
				}
			}
		}
	}

	function Comparer(a, b)
	{
		if (a[0] == b[0])
		{

			if (a[0] == b[0])
			{
				return 0;
			}

			return (a[0] < b[0]) ? -1 : 1;
		}

		return (a[0] < b[0]) ? -1 : 1;

	}

	function ClearDropDown(ddl)
	{
		$(ddl).empty();
	}

	function GetStateObriviation(countryid)
	{
		with (_that)
		{
			i = 0;
			stateCaption = "State";
			$('#' + ddlCountryClientID).children().each(function()
			{
				if ($(this).get(0).value == countryid)
				{
					if (stateCaptionsSingular[i] != '')
					{
						stateCaption = stateCaptionsSingular[i];
					}
					else
					{
						stateCaption = '&nbsp;';
					}
				}
				i++;
			});
			return stateCaption;
		}
	}
	function GetStateObriviationPlural(country)
	{
		with (_that)
		{
			i = 0;
			stateCaptionPlural = "States";
			$('#' + ddlCountryClientID).children().each(function()
			{
				if ($(this).get(0).value == country)
				{
				    stateCaptionPlural = stateCaptionsPular[i];
				}
				i++;
			});
            return stateCaptionPlural;
		}
    }
    
	// Initialization
	with (this)
	{
		$.get(AffiliatesXMLPath, null, function(xml)
		{
			affiliatesXML = xml;
		}, "xml");
		$('#SearchObitsNarrowSliderFrame :input').bind("keypress", null, function (e)
		{
			if (e.keyCode == '13')
			{
				DoSearch();
			}
		});

		
		if (!IsSSDISearch) {
		    $('#' + ddlCountryClientID).bind("change", function () { CountryChanged(this); });
		    $('#' + ddlStateClientID).bind("change", function () { StateChanged(this); });
		}
		$('#lnkSearch').bind("click", DoSearch);
		$('#lnkSearchMore').bind("click", DoSearchMore);

		//New Initialization of jQuery controls
		$(document).ready(function () {
		    $('#lnkReset').bind("click", function (e) {
		        _that.ResetDefaults();
		        InitWatermarkText();
		        InitFilteredTextboxes();
		        return false;
		    });

		    $(".ObituarySearch .RefineMessage a").click(function () {
		        document.cookie = "LegacySearchExpanded=1";
		        document.forms[0].submit();
		    });

		    //Event Binding
		    InitWatermarkText();
		    InitFilteredTextboxes();

		    function InitWatermarkText() {
		        $('#' + txtFirstNameClientID).watermark({ watermarkText: "First Name" });
		        $('#' + txtLastNameClientID).watermark({ watermarkText: "Last Name" });
		        if ($('#' + txtKeywordClientID)) {
		            $('#' + txtKeywordClientID).watermark({ watermarkText: "Keyword" });
		        }
		    }
		    function InitFilteredTextboxes() {
		        $('#' + txtFirstNameClientID).filteredtextbox();
		        $('#' + txtLastNameClientID).filteredtextbox();
		        if ($('#' + txtKeywordClientID)) {
		            $('#' + txtKeywordClientID).filteredtextbox({ filter: '[A-Za-z0-9-.\'" ]' });
		        }
		    }
		});
	}
}

