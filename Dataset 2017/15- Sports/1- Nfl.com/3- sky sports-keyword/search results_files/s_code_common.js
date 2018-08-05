function isLog() {}
function isPageTypeError() {
	if (document.getElementById('pageType')) {
		s_analytics.pageType = document.getElementById('pageType').content;
		isLog('pageType = ' + s_analytics.pageType);
		beforeApplyFooter();
		return true;
	} else {
		try {
			setLoggedInStatus();
			setServer();
			initAnalytics();
			isPageRefreshed();
		} catch (e) {console.warn(e.message);}
		return false;
	}
}
function isPageRefreshed() {
	isLog('hi from isPageRefreshed()');
	if (document.getElementById('pageRefresh')) {
		var pageRefresh = document.getElementById('pageRefresh').content.toLowerCase();
		if(!isVarEmpty(pageRefresh) && pageRefresh == 'true') return true;
	} else {
		isLog('applyFooter() called');
		beforeApplyFooter();
		return false;
	}
}
function beforeApplyFooter() {
	setAdBlockStatus();
	applyFooter();
}
function setLoggedInStatus() {
	var userId = readCookie('userId');
	if(userId) {
		s_analytics.prop36 = userId;
		s_analytics.prop27 = 'logged in';
		isLog('logged in');
	} else {
		s_analytics.prop36 = 'na';
		s_analytics.prop27 = 'logged out';
  		isLog('logged out');
 	}
}
function readCookie(name) {
	var cookies = document.cookie.split(/;\s*/),
		    i = 0,
		    l = cookies.length,
		    cookie,
		    cm,
		    value;
		for (; i < l; i++) {
			cookie = cookies[i].split("=");
			if (name === cookie[0]) {
				cm = decodeURIComponent(cookie[1]).match(/u=([a-z0-9]*)/);
				if (cm) {
					value = cm[1];
				}
				break;
			}
		}
	return value;
}
function trimUrl(url) {
	var i = url.indexOf('//');
	if(i>0){
	   url = url.substring((i+2), url.length);
  	   i =  url.indexOf('/');
	}
	if(i>0){
		var suffix = url.substring((i+1), url.length);
		var temp = replace(suffix,'/',':');
		if(temp.indexOf('?') == -1) {
			return temp;
		}else {
			return temp.substr(0, temp.lastIndexOf('?'));
		}
	}
	return '';
}
function replace(string,text,by) {
	// Replaces text with by in string
	var strLength = string.length, txtLength = text.length;
	if ((strLength == 0) || (txtLength == 0)) return string;
	var i = string.indexOf(text);
	if ((!i) && (text != string.substring(0,txtLength))) return string;
	if (i == -1) return string;
	var newstr = string.substring(0,i) + by;
	if (i+txtLength < strLength) newstr += replace(string.substring(i+txtLength,strLength),text,by);
	return newstr;
}

/*****************PROP FUNCTIONS********************/
function setTopStory(story) {
	s_analytics.prop1 = story;
	isLog('story = ' + s_analytics.prop3);
}

function setServer() {
	s_analytics.server='nfl.com';
	s_analytics.prop22='www.nfl.com';
}

function setChannel(channel) {
	s_analytics.channel = channel;
	s_analytics.eVar3 = channel;
	isLog('channel = ' + s_analytics.channel);
	isLog('channel eVar = ' + s_analytics.eVar3);
}

function setPageName(pageName) {
	//console.log(loggingOff);
	pageName = formatOmnitureValue(pageName);
	s_analytics.pageName = pageName;
	s_analytics.eVar2 = pageName;
	s_analytics.eVar67 = (function () {
    var scrn = window.screen,
      dpr = window.devicePixelRatio || 1,
      w = scrn.availWidth,
      h = scrn.availHeight,
      t;
    // check that width & height are correctly ordered
    if (90 === Math.abs(window.orientation || 90) && w < h) {
      t = w;
      w = h;
      h = t;
    }
    return [w, "x", h, "@", dpr].join("");
  }());
	s_analytics.eVar68 = "full";
	isLog('pagename = ' + s_analytics.pageName);
	isLog('pagename eVar = ' + s_analytics.eVar2);
}

function setHierarchy(hier) {
	hier = formatOmnitureValue(hier);
	if(hier.indexOf('|') == -1) hier = hier + '|landing';
	s_analytics.hier1 = hier;
	s_analytics.prop5 = hier;
	isLog('site hierarchy = ' + hier);
	isLog('content hierarchy = ' + s_analytics.prop5);
	isLog('content hierarchy eVar = ' + s_analytics.eVar4);
}

function setContentSubSection(contentSubSection) {
	s_analytics.prop2 = contentSubSection;
	isLog('content subsection = ' + s_analytics.prop2);
}

/*****************EVENT FUNCTIONS********************/
//this function is called by pollview.js
function setPollEvent(event){
	var s_analytics=s_gi(s_account);
	s_analytics.linkTrackVars='events';
	s_analytics.linkTrackEvents = 'event13';
	s_analytics.events = event;
	try {
	s_analytics.tl(this,'o','setPollEvent');
	} catch(e) {
		//console.warn(e);
	}
	isLog('s_analytics.tl() called');
	isLog('user casts vote...');
}

function setPhoto(photo) {
	s_analytics.prop16 = photo;
	//s.t();
	isLog('(not calling s.t()) photo =  ' + photo);
}

function setArticleId(id) {
	s_analytics.prop11 = id;
	isLog('article id = ' + s_analytics.prop11);
}

function setArticleTitle(title) {
	s_analytics.prop12 = title;
	isLog('article title = ' + s_analytics.prop12);
}

function setArticleAuthor(author) {
	s_analytics.prop13 = author;
	isLog('article author = ' + s_analytics.prop13);
}

function setContentType(type) {
	s_analytics.prop3 = type;
	isLog('content type = ' + s_analytics.prop3);

}

function setContentSource(source) {
	s_analytics.prop4 = source;
	isLog('content source = ' + s_analytics.prop4);
}

// utility function
function isArrEmpty(params, begin, end) {
	//isLog('hi from isEmpty(' + start + ')');
	for(begin; begin < end; begin++) {
		if(params[begin] != 'none' && params[begin] != null && params[begin] != '' && params[begin] != 'null' && params[begin] != '-1')
			return false;
		else
			continue;
	}
	return true;
}

function isVarEmpty(param) {
	if(param != 'none' && param != null && param != '' && param != 'null' && param != '-1' && param != 'undefined')
		return false;
	else
		return true;
}

// utility function
function formatOmnitureValue(str) {
	str = str.replace(/;jsessionid=(.+)/, ""); //strip out jsessionid var that gets added by server at random times
	return str;
}
// utility function
function lowerCase(params) {
	isLog('hi from lowerCase()');
	var paramsTemp = new Array(params.length);
	for(var i = 0; i < params.length; i++) {
		paramsTemp[i] = params[i].toLowerCase();
	}
	return paramsTemp;
}

function getConferenceById(id) {
	if(id == '0011') return 'afc';
	if(id == '0015') return 'nfc';
	if(id == 'all') return id;
	if(id == 'afc') return id;
	if(id == 'nfc') return id;
	return 'conferenceNotAvailable';
}

function getWeekById(id) {
	if(id == '22')	return 'probowl';
	if(id == '21')	return 'superbowl';
	if(id == '20') 	return 'conference championships';
	if(id == '19') 	return 'divisional playoffs';
	if(id == '18') 	return 'wild card';
	if(id == '0') 	return 'preseason';
	return 'week ' + id;
}

// expose it on purpose for later use
var adBlockStatus = 'adBlockDisbled';
function setAdBlockStatus() {
	try {
		if (window.isAdsDisplayed === undefined) {
			adBlockStatus = 'adBlockEnabled';
		}
	} catch (err) {
		console.error('setAdBlockStatus', err);
	}
	s_analytics.eVar4 = adBlockStatus;
}
