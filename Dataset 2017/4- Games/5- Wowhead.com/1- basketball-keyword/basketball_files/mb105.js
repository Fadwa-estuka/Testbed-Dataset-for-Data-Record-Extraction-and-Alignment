var MonkeyBroker = MonkeyBroker || {};
if (typeof MonkeyBroker.loaded !== "boolean" || !MonkeyBroker.loaded) {
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
(function(){
	var mdn="sv.monkeybroker.net", dn=mdn, mb=MonkeyBroker;
	mb.version = "1.05.20170131";
	
	if (document.currentScript) { 
		var u = document.currentScript.src;
		u = u.substr(0, u.lastIndexOf("/")); 
		mb.urlPath = u + "/"; 
	}

    var pbjsEl = document.createElement("script");
    pbjsEl.type = "text/javascript";
    pbjsEl.async = true;
    if (mb.urlPath) { pbjsEl.src = mb.urlPath + "pb140d.gz.js"; }
    else { pbjsEl.src = "//d3pkae9owd2lcf.cloudfront.net/pb140d.gz.js"; }
    var pbjsTargetEl = document.getElementsByTagName("head")[0];
    pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);

    mb.mapSize2Sz =	{ "1": 1,	"300x250": 1,
					"3": 3, 	"160x600": 3,
					"5": 5, 	"728x90": 5,
					"7": 7, 	"300x600": 7,
					"22": 22,
					"26": 26,
					"33": 33, 	"970x90": 33,
					"34": 34, 	"320x50": 34,
					"35": 35,	"970x250": 35,
					"37": 37,
					"38": 38,
					"39": 39,
					"40": 40 };
	mb.mapSz2Dim = { "1": [300,250],	"300x250": [300,250],
    				"3": [160,600], 	"160x600": [160,600],
    				"5": [728,90], 		"728x90": [728,90],
    				"7": [300,600], 	"300x600": [300,600],
    				"22": [728,90],
    				"26": [300,250],
    				"33": [970,90], 	"970x90": [970,90],
    				"34": [320,50], 	"320x50": [320,50],
    				"35": [970,250],	"970x250": [970,250],
    				"37": [970,250],
    				"38": [970,90],
    				"39": [300,600],
    				"40": [160,600] };
	mb.mapSz2Aol = { "1": 		{ sizeId: "170",  placement: "3757931", network: "10348.1", alias: "p3757931" },
					"300x250":	{ sizeId: "170",  placement: "3757931", network: "10348.1", alias: "p3757931" },
					"3":  		{ sizeId: "154",  placement: "3757930", network: "10348.1", alias: "p3757930" },
					"160x600":  { sizeId: "154",  placement: "3757930", network: "10348.1", alias: "p3757930" },
					"5":  		{ sizeId: "225",  placement: "3757932", network: "10348.1", alias: "p3757932" },
					"728x90":	{ sizeId: "225",  placement: "3757932", network: "10348.1", alias: "p3757932" },
					"7":  		{ sizeId: "529",  placement: "3769004", network: "10348.1", alias: "p3769004" },
					"300x600":  { sizeId: "529",  placement: "3769004", network: "10348.1", alias: "p3769004" },
					"33":		{ sizeId: "2473", placement: "3769003", network: "10348.1", alias: "p3769003" },
					"970x90": 	{ sizeId: "2473", placement: "3769003", network: "10348.1", alias: "p3769003" },
					"34": 		{ sizeId: "3055", placement: "3757933", network: "10348.1", alias: "p3757933" },
					"320x50": 	{ sizeId: "3055", placement: "3757933", network: "10348.1", alias: "p3757933" },
					"35": 		{ sizeId: "2466", placement: "3769005", network: "10348.1", alias: "p3769005" },
					"970x250":	{ sizeId: "2466", placement: "3769005", network: "10348.1", alias: "p3769005" } };
	mb.mapSz2Sovrn = { "1": 		{ tagid: "330244", bidfloor: "0.01" },
			"300x250":	{ tagid: "330244", bidfloor: "0.01" },
			"3":  		{ tagid: "330246", bidfloor: "0.01" },
			"160x600":  { tagid: "330246", bidfloor: "0.01" },
			"5":  		{ tagid: "330245", bidfloor: "0.01" },
			"728x90":	{ tagid: "330245", bidfloor: "0.01" },
			"7":  		{ tagid: "330243", bidfloor: "0.01" },
			"300x600":  { tagid: "330243", bidfloor: "0.01" },
			"35":		{ tagid: "417114", bidfloor: "0.01" },
			"970x250":	{ tagid: "417114", bidfloor: "0.01" } };
	mb.mapSz2PP =	{ "1":	{ cf: "300X250", cp: "559956", ct: "420692" },
			"300x250":	{ cf: "300X250", cp: "559956", ct: "420692" },
			"3":  		{ cf: "160X600", cp: "559956", ct: "420695" },
			"160x600":  { cf: "160X600", cp: "559956", ct: "420695" },
			"5":  		{ cf: "728X90", cp: "559956", ct: "420694" },
			"728x90":	{ cf: "728X90", cp: "559956", ct: "420694" },
			"7":  		{ cf: "300X600", cp: "559956", ct: "420693" },
			"300x600":  { cf: "300X600", cp: "559956", ct: "420693" },
			"35": 		{ cf: "970X250", cp: "559956", ct: "420697" },
			"970x250":	{ cf: "970X250", cp: "559956", ct: "420697" } };
	mb.mapSz2OX = { "1": { jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538381673"},
			"300x250": 	{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538381673"},
			"3":		{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394651"},
			"160x600":	{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394651"},
			"5":		{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394654"},
			"728x90":	{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394654"},
			"7":		{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394653"},
			"300x600":	{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394653"},
			"33":		{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394656"},
			"970x90":	{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394656"},
			"35":		{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394655"},
			"970x250":	{ jstag_url: "//monkey-broker-d.openx.net/w/1.0/jstag?nc=3456123-Monkey_Broker_RON", unit: "538394655"} };
	mb.mapSz2Rub = { "1": { accountId: "15234", siteId: "93306", zoneId: "439920" },
			"300x250": 	{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"3":		{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"160x600":	{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"5":		{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"728x90":	{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"7":		{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"300x600":	{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"33":		{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"970x90":	{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"35":		{ accountId: "15234", siteId: "93306", zoneId: "439920" },
			"970x250":	{ accountId: "15234", siteId: "93306", zoneId: "439920" } };
	mb.mapSz2AN = { "1": { placementId: "9398426" },
			"300x250": 	{ placementId: "9398426" },
			"3":		{ placementId: "9398419" },
			"160x600":	{ placementId: "9398419" },
			"5":		{ placementId: "9398427" },
			"728x90":	{ placementId: "9398427" },
			"34": 		{ placementId: "9401299" },
			"320x50": 	{ placementId: "9401299" },
			"7":		{ placementId: "9401043" },
			"300x600":	{ placementId: "9401043" },
			"33":		{ placementId: "9401046" },
			"970x90":	{ placementId: "9401046" },
			"35":		{ placementId: "9401044" },
			"970x250":	{ placementId: "9401044" } };
	
	mb.blpb = {1712:1,1713:1,1723:1,1725:1,1728:1,1730:1,1731:1,1732:1,1733:1,1741:1,1742:1,1746:1};
	mb.blrub = {1511:1,1566:1,1722:1,1750:1,1762:1,1763:1,1767:1,1775:1,1776:1,1777:1,1779:1,1780:1,1785:1,1793:1,1794:1,1801:1,1807:1,1808:1,1813:1,1817:1,1819:1,1820:1,1829:1,1830:1,1831:1,1833:1};
	mb.blsv = {1566:1,1663:1,1801:1,1836:1};
	mb.wlconv = {1663:1,1664:1,1665:1,1666:1,1667:1,1672:1,1673:1,1674:1,1675:1,1676:1,1677:1,1678:1,1679:1,1680:1,1681:1,1682:1,1687:1,1688:1,1689:1,1691:1,1692:1,1696:1,1697:1,1698:1,1699:1,1705:1,1716:1,1718:1,1719:1,1720:1,1721:1,1722:1,1743:1,1744:1,1745:1,1747:1,1748:1,1749:1,1750:1,1751:1,1752:1,1753:1,1754:1,1755:1,1756:1,1758:1,1759:1,1760:1,1761:1,1765:1,1766:1,1781:1,1782:1,1783:1,1784:1,1788:1,1789:1,1790:1,1791:1,1792:1,1800:1,1802:1,1803:1,1809:1,1810:1,1828:1,1829:1,1830:1,1831:1,1832:1,1834:1,1836:1,1837:1,1838:1,1839:1,1841:1,1842:1,1843:1,1845:1};
	
	mb.pendingRefresh1 = [];

	var rand = function() { return Math.floor(Math.random()*999999999); };

	var JSON = window.JSON || {};
	JSON.stringify = JSON.stringify || function (obj) {
		var t = typeof (obj);
		if (t != "object" || obj === null) {
			if (t == "string") obj = '"'+obj+'"';
			return String(obj);
		}
		else {
			var n, v, json = [], arr = (obj && obj.constructor == Array);
			for (n in obj) {
				v = obj[n]; t = typeof(v);
				if (t == "function" || t == "undefined") continue;
				if (t == "string") v = '"'+v+'"';
				else if (t == "object" && v !== null) v = JSON.stringify(v);
				json.push((arr ? "" : '"' + n + '":') + String(v));
			}
			return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	};
	JSON.parse = JSON.parse || function (str) {
		if (str === "") str = '""';
		eval("var p=" + str + ";");
		return p;
	};
	
	mb.extend = function(d,s) {
		for (var p in s) {
			if (s.hasOwnProperty(p)) {
				d[p] = s[p];
			}
		}
		return d;
	}
 
	mb.inventoryCallback = mb.inventoryCallback || [];
	mb.campaignVals = {w:"",h:"",s:"",t:5,sz:"",r:rand()};
	mb.atts = mb.atts || {};
	mb.inputData = mb.inputData || [];

	mb.regSlots = []; mb.regSlotsMap = {}; mb.regSizeCallbackMap = {}; mb.regSlotCallbackMap = {};
	var is_first=true, ads=null, dc = document.cookie, dlp = document.location.protocol, v=mb.campaignVals, icb=mb.inventoryCallback,hc=false,hh=false,to;
	var p,au,iu,eu,rbau,psc;

	mb.site = mb.site || {}
	mb.headerTimeout = mb.headerTimeout || 1200;
	mb.saTags = mb.tagsPlaced = mb.waitForTags = 0;
	var scps = document.getElementsByTagName("script");
	var scp = scps[scps.length - 1];
	if (typeof scp.getAttribute('data-siteId') === 'string')
		mb.site.id = scp.getAttribute('data-siteId');
	if (typeof scp.getAttribute('data-customDomainName') === 'string')
		mb.site.customDomainName = scp.getAttribute('data-customDomainName');
	if (typeof scp.getAttribute('data-masterDomainName') === 'string')
		mb.site.masterDomainName = scp.getAttribute('data-masterDomainName');
	if (typeof scp.getAttribute('data-sa') === 'string')
		mb.standAlone = true;

	var initVars = function() {
		if (typeof mb.init !== "boolean" || !mb.init) {
			if (typeof mb.site.customDomainName === 'string') {
				dn=mb.site.customDomainName;
			}
			if (typeof mb.site.masterDomainName === 'string') {
				mdn=mb.site.masterDomainName;
			}
			mb.site.reportBadAdText = mb.site.reportBadAdText || "Report Inappropriate Ad";
			if (dlp === "https:") {
				dn=mdn;
			}
			p=dlp+"//"+dn+"/mb/"; au=p+"b"; iu=p+"h"; eu=p+"ev"; rbau=p+"reportBadAd"; psc=p+"psc";
			
			mb.init = true;
		}
	};
	
	var log = function(s) {
		if (typeof(window.console) === "object" && typeof(console.log) === "function")
			console.log(s);
	};
	
	var j = function(src,r){
		if (typeof r === "undefined") { r = true; }
		var h = document.getElementsByTagName("head"), s = document.createElement("script"); 
		s.type="text/javascript"; 
		if (Boolean(r)) { s.src=src+"&rnd="+rand(); } else { s.src=src; }
		h.length==0 ? document.getElementsByTagName("body")[0].appendChild(s) : h[0].appendChild(s);
	};
	
  var gc = function(){
    if (typeof mb.uid === 'string' && mb.uid.length > 0) { return mb.uid; }
	if (dc.length > 0) {
      var s=dc.indexOf("mb_uid2=");
      if (s!=-1) {
        s=s+8;
        var e=dc.indexOf(";",s);
        if (e==-1) e=dc.length;
        mb.uid = decodeURI(dc.substring(s,e));
		return mb.uid;
      }
    } return "";
  };

  var pbTestResp = function(r,slot,bCode,auCode) {
	  if (r === false)
		  return true;
	  if (typeof slot.pb !== "object")
		  return false;
	  for (var i=0; i<slot.pb.length; i++) {
		  if (bCode === slot.pb[i].bidderCode && auCode === slot.pb[i].adUnitCode && slot.pb[i].complete === true && slot.pb[i].statusMessage === "Bid available" && slot.pb[i].cpm >= 0.10)
			  return true;
	  }
	  return false;
  }
  var pb = function(slot,r) {
	  if (typeof r === "undefined") { r = false; }
	  var adUnits = [];
	  var codes = [];
	  for (var j=0, szLen=slot.sizes.length; j<szLen; ++j) {
	    var sz=slot.sizes[j];
	    if (typeof mb.mapSz2Dim[sz] !== 'undefined') {
	    	var adUnit = {};
	    	var code = slot.slot+'|'+sz;
	    	adUnit["code"]=slot.slot+'|'+sz;
	    	adUnit["sizes"]=[]; adUnit["sizes"].push(mb.mapSz2Dim[sz]);
	    	adUnit["bids"]=[];
	    	if (typeof mb.mapSz2Aol[sz] !== 'undefined' && pbTestResp(r,slot,"aol",code)) {
	    		var bid = {};
	    		bid["bidder"]="aol";
	    		bid["params"]=mb.mapSz2Aol[sz];
	    		adUnit["bids"].push(bid);
	    	}
	    	if (false && typeof mb.mapSz2PP[sz] !== 'undefined' && pbTestResp(r,slot,"pulsepoint",code)) {
	    		var bid = {};
	    		bid["bidder"]="pulsepoint";
	    		bid["params"]=mb.mapSz2PP[sz];
	    		adUnit["bids"].push(bid);
	    	}
	    	if (typeof mb.mapSz2Sovrn[sz] !== 'undefined' && typeof mb.blsv[mb.site.id] !== 'number' && pbTestResp(r,slot,"sovrn",code)) {
	    		var bid = {};
	    		bid["bidder"]="sovrn";
	    		bid["params"]=mb.mapSz2Sovrn[sz];
	    		adUnit["bids"].push(bid);
	    	}
	    	if (typeof mb.mapSz2OX[sz] !== 'undefined' && r === false) {
	    		var bid = {};
	    		bid["bidder"]="openx";
	    		bid["params"]=mb.mapSz2OX[sz];
	    		adUnit["bids"].push(bid);
	    	}
	    	if (typeof mb.mapSz2Rub[sz] !== 'undefined' && typeof mb.blrub[mb.site.id] !== 'number' && pbTestResp(r,slot,"rubicon",code)) {
	    		var bid = {};
	    		bid["bidder"] = "rubicon";
	    		bid["params"] = mb.mapSz2Rub[sz];
	    		adUnit["bids"].push(bid);
	    	}
	    	if (typeof mb.mapSz2AN[sz] !== 'undefined' && pbTestResp(r,slot,"appnexus",code)) {
	    		var bid = {};
	    		bid["bidder"] = "appnexus";
	    		bid["params"] = mb.mapSz2AN[sz];
	    		adUnit["bids"].push(bid);
	    	}
	    	if (typeof mb.wlconv[mb.site.id] === 'number' && pbTestResp(r,slot,"conversant",code)) {
	    		var bid = {};
	    		bid["bidder"] = "conversant";
	    		bid["params"] = { site_id: "88154" };
	    		adUnit["bids"].push(bid);
	    	}
	    	if (adUnit["bids"].length > 0) {
	    		adUnits.push(adUnit);
	    		codes.push(code);
	    	}
	    }
	  }
	  slot.adUnitCodes = codes;
	  delete slot.pb;
	  
	  
	  return adUnits;
  }
  
  mb.go = function(arg) {
	if (mb.went) return;
	if (mb.saTags > 0 && mb.tagsPlaced < mb.saTags && mb.waitForTags < 5000) { mb.waitForTags += 10; setTimeout(mb.go,10); return; }
	initVars();
	mb.went = true;

	//temp
	if (mb.site.id == 1846 || mb.site.id == 1854 || mb.site.id == 1862) {
		mb.site.id = 1884;
		mb.site.isEmbedded = true;
	}
	//end temp
	
	if (typeof mb.blpb[mb.site.id] === 'number') { mb.go2(arg); return; }
	
	mb.rtbid004b();
	
	var adUnits = [];
	for (var i=0, len=mb.regSlots.length; i<len; ++i) {
	  var slot=mb.regSlots[i];
	  adUnits.push.apply(adUnits, pb(slot));
	}
	if (adUnits.length > 0) {
	  pbjs.que.push(function() {
		  var au = adUnits;
		  var ag = arg;
		  pbjs.requestBids({ 	timeout: MonkeyBroker.headerTimeout,
			  					adUnits: au,
			  					bidsBackHandler: function(bidResponses) { 
			  					MonkeyBroker.bidHelper(bidResponses); 
			  					MonkeyBroker.go2(ag); } });
      });
	}
	else
		mb.go2(arg);
  };
  
  mb.bidHelper = function(bidResponses) {
	for (var i=0, len=mb.regSlots.length; i<len; ++i) {
	  var slot=mb.regSlots[i];
	  slot.pb = slot.pb || [];
	  for (var j=0, szLen=slot.sizes.length; j<szLen; ++j) {
	    var sz=slot.sizes[j];
		var code=slot.slot+'|'+sz;
        var response = bidResponses[code];
		if (typeof response !== 'undefined' && typeof response.bids !== 'undefined') {
	      for (var k=0, bdLen=response.bids.length; k<bdLen; ++k) {
	        var bid=response.bids[k];
	        if (bid.width > 0 && bid.height > 0 && bid.cpm > 0 && bid.timeToRespond < mb.headerTimeout) {
	          bid.mbSize = mb.mapSize2Sz[sz];
		      var origcpm = bid.cpm;
	          if (bid.bidderCode == "aol")
	        	  bid.cpm = bid.cpm * 0.85;
	          else if (bid.bidderCode == "rubicon")
	        	  bid.cpm = bid.cpm * 0.8;
	          slot.pb.push(bid);
	        }
  	      }
		}
		pbjs.que.push(function() { pbjs.finalizeAdUnit(code); });
	  }
	}
  };
  
  pbHelper = function(pbSlot) {
	var pbs = [];
	for (var i = 0; i < pbSlot.length; i++) {
	    var s = {};
	    var pb = pbSlot[i];
		s.pbSize = pb.mbSize;
		s.pbCPM = pb.cpm;
		if (pb.bidderCode == "aol") { 
			s.pbAdId = pb.creativeId || "n/a";
		}
		else if (pb.bidderCode == "openx") { 
			s.pbAdId = pb.ad_id || "n/a"; 
			s.pbAdvId = pb.adv_acct_id || "n/a";
			s.pbBrandId = pb.brand_id || "n/a";
		}
		else if (pb.bidderCode == "sovrn") {
			s.pbCampId = pb.campaign_id || "n/a";
		}
		else if (pb.bidderCode == "rubicon") {
			s.pbAdId = pb.creative_id || "n/a";
			s.pbAdvId = pb.advertiser || "n/a";
			s.pbCampId = pb.campaign_id || "n/a";
		}
		else if (pb.bidderCode == "appnexus") {
			s.pbAdId = pb.creative_id || "n/a";
		}
		else if (pb.bidderCode == "pulsepoint") {
			s.pbAdId = pb.crid || "n/a";
			s.pbAdvId = pb.adomain || "n/a";
		}
		else if (pb.bidderCode == "conversant") {
			s.pbAdId = pb.crid || "n/a";
			if (typeof pb.adomain === "object" && pb.adomain.length > 0)
				s.pbAdvId = pb.adomain[0];
		}
		else { s.pbAdId = pb.adId; }
		s.pbCode = pb.bidderCode;
		
		pbs.push(s);
	}
	
	return pbs;
  }
  
  mb.go2 = function(arg) {
	var uid=gc(),src=iu+"?cb=c"+v.r+"&v=2&s="+mb.site.id+(uid==""?"":"&id="+uid);
	if (typeof mb.site.topUrl === "string")
		mb.addAttribute("mb_tr", mb.site.topUrl);
	if (typeof mb.site.isEmbedded === "boolean" && mb.site.isEmbedded)
		mb.addAttribute("mb_ms", "t");
	var sp={};
	for (var i=0, len=mb.regSlots.length; i<len; ++i) {
		var s = {}; var sl = mb.regSlots[i];
		s.slot = mb.regSlots[i].slot;
		if (typeof mb.regSlots[i].sizes !== 'undefined')
			s.sizes = mb.regSlots[i].sizes;
		if (typeof mb.regSlots[i].dataTag !== 'undefined')
			s.dataTag = mb.regSlots[i].dataTag;
		if (typeof mb.regSlots[i].rm === 'boolean')
			s.rm = mb.regSlots[i].rm;
		if (typeof mb.regSlots[i].ri === 'number')
			s.ri = mb.regSlots[i].ri;
		if (typeof mb.regSlots[i].pb === 'object') {
			s.pb = pbHelper(mb.regSlots[i].pb);
		}
		src+="&as="+encodeURIComponent(JSON.stringify(s));
		sp[s.slot]=1;
	}
	for (var k in mb.atts){
      if (k.indexOf("mb_") == 0) src+="&"+k.substring(3); else src+="&ct"+k;
	  src+="="+mb.atts[k];
    }
	j(src);
	
	if (!(typeof arg !== 'undefined' && arg.autofillSlots == 0)) {
		for (var i=0, len=mb.regSlots.length; i<len; ++i) {
			if ((typeof mb.regSlots[i].el !== 'undefined' && typeof mb.regSlots[i].elCreated === 'undefined') || (typeof mb.regSlots[i].dataTag === 'boolean' && mb.regSlots[i].dataTag) || (typeof mb.regSlots[i].rm === 'boolean' && mb.regSlots[i].rm))
				cc(mb.regSlots[i]);
		}
	}
	
	while (MonkeyBroker.pendingRefresh1.length > 0) {
		var slotName = MonkeyBroker.pendingRefresh1.pop();
		if (typeof sp[slotName] === "undefined")
			MonkeyBroker.refresh(slotName,true); 
	}
	
  };

  mb.rtbid002 = function() {
	if (dlp !== "http:") return;
	var ifrm = document.createElement("IFRAME");
	var cbUrl = psc + "?key=rtbid002&val=";
	ifrm.setAttribute("src", "http://ssum.casalemedia.com/usermatch?s=181812&cb=" + encodeURIComponent(cbUrl));
	ifrm.style.width = 0+"px";
	ifrm.style.height = 0+"px";
	ifrm.style.display = "none";
    if (document.readyState === "complete")
      document.body.appendChild(ifrm);
    else {
      if (window.addEventListener)
	    window.addEventListener("load", function() { document.body.appendChild(ifrm); }, false);
	  else if (document.attachEvent)
	    window.attachEvent("onload", function() { document.body.appendChild(ifrm); });
	}
  }
  mb.rtbid004 = function() {
      if (dlp !== "http:") return;
	  var tu = null;
	  try { tu = window.location.hostname; } catch(e) { }
	  if (null === tu)
		  return;
	  var u = "http://ap.lijit.com/readerinfo?callback=MonkeyBroker.rtbid004cb&loc=" + encodeURIComponent(tu);
	  var http = new XMLHttpRequest();
	  http.withCredentials = true;
	  http.onreadystatechange = function() {
		  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
			  var ckj = null;
			  try { ckj = JSON.parse(http.responseText); MonkeyBroker.rtbid004cb(ckj); } catch (err) { }
		  }
	  };
	  http.open("GET", u, async = true);
	  http.send(null);
  }
  
  mb.rtbid004cb = function(ckj) {
	  if (null == ckj || typeof ckj !== "object")
		  return;
	  var ck = "";
	  for (var key in ckj) { 
		  if (Object.prototype.hasOwnProperty.call(ckj, key))
			  ck += key + "=" + ckj[key] + ";"; 
	  }
	  if (ck == "")
		  return;
	  var ifrm = document.createElement("IFRAME");
	  var cbUrl = psc + "?key=rtbid004&val=" + encodeURIComponent(ck);
	  ifrm.setAttribute("src", cbUrl);
	  ifrm.style.width = 0+"px";
	  ifrm.style.height = 0+"px";
	  ifrm.style.display = "none";
	  if (document.readyState === "complete")
		  document.body.appendChild(ifrm);
	  else {
		  if (window.addEventListener)
			  window.addEventListener("load", function() { document.body.appendChild(ifrm); }, false);
		  else if (document.attachEvent)
			  window.attachEvent("onload", function() { document.body.appendChild(ifrm); });
	  }
  }
  
  mb.rtbid004b = function() {
	if (dlp !== "http:") return;
	var ifrm = document.createElement("IFRAME");
	try {
	  ifrm.setAttribute("src", "http://gslbeacon.lijit.com/beacon?viewId=MonkeyBroker_header_auction&rand="+Math.floor(9e3*Math.random())+"&informer=13336760&type=fpads&loc="+window.location.host+"&v=1.2");
	} catch (err) { return; }
	ifrm.style.width = 0+"px";
	ifrm.style.height = 0+"px";
	ifrm.style.display = "none";
    if (document.readyState === "complete")
      document.body.appendChild(ifrm);
    else {
      if (window.addEventListener)
        window.addEventListener("load", function() { document.body.appendChild(ifrm); }, false);
	  else if (document.attachEvent)
		window.attachEvent("onload", function() { document.body.appendChild(ifrm); });
	}
  }
  
  mb.refresh = function(name,first) {
	var slot=mb.regSlotsMap[name];
	if (typeof slot !== "object") {
		log("Unregistered slot name: " + name);
		return;
	}
	var adUnits = [];
	if (typeof first === "undefined" || first) {
	  delete slot.adUnitCodes;
	  delete slot.pb;
	  adUnits = pb(slot,false);
	}
	else {
		delete slot.adUnitCodes;
		adUnits = pb(slot,true);
	}

	if (adUnits.length > 0) {
	  pbjs.que.push(function() {
		  var au = adUnits;
		  var auc = slot.adUnitCodes;
		  var pname = name;
		  
		  pbjs.requestBids({ 
			  timeout: MonkeyBroker.headerTimeout,
			  adUnits: au,
			  adUnitCodes: auc,
			  bidsBackHandler: function(bidResponses) {
				  MonkeyBroker.bidHelper(bidResponses);
				  MonkeyBroker.refresh2(pname); 
				  } });
      });
	}
	else
		MonkeyBroker.refresh2(name);
  }
  
  mb.refresh2 = function(k) {
	var slot = mb.regSlotsMap[k];
	if (typeof slot === "undefined") {
		log("Bad slot key " + k);
		return;
	}
	if (typeof slot.rel === "object") {
		var r = slot.rel;
		var prre = r.prre;
		while (r.ns.length > 0) {
			try { var n = r.ns.shift(); purge(n); 
				if (null != n.parentNode) { n.parentNode.removeChild(n); } 
			} catch(err) { log("N purge error " + err); }
		}
	}
	
	initVars();
	var uid=gc(),src=iu+"?cb=rc"+v.r+"&v=2&s="+mb.site.id+(uid==""?"":"&id="+uid);
	if (typeof(mb.pv) !== "undefined")
		src+="&pv="+mb.pv;
	var s = {};
	s.slot = slot.slot;
	if (typeof slot.sizes !== 'undefined')
		s.sizes = slot.sizes;
	if (typeof slot.dataTag !== 'undefined')
		s.dataTag = slot.dataTag;
	if (typeof slot.rm === 'boolean')
		s.rm = slot.rm;
	if (typeof slot.ri === 'number')
		s.ri = slot.ri;
	if (typeof slot.callback === 'function' || typeof slot.callback === 'string')
		s.callback = slot.callback;
	if (typeof prre === 'number')
		s.prre = prre;
	if (typeof slot.pb === 'object') {
		s.pb = pbHelper(slot.pb);
	}
	src+="&as="+encodeURIComponent(JSON.stringify(s));
	for (var k in mb.atts){
      if (k.indexOf("mb_") == 0) src+="&"+k.substring(3); else src+="&ct"+k;
	  src+="="+mb.atts[k];
    }
	j(src);
  };
  
  mb.rc = function(obj) {
	if (typeof mb.slots === "undefined") { sc(obj); return; }
	if (typeof obj !== "object" || typeof obj.slots !== "object") {
		log("Bad callback object " + obj);
		return;
	}
	var slots = obj.slots;
	for (var f in slots) {
		if (slots.hasOwnProperty(f) && slots[f].slot !== "undefined") {
			mb.slots[f] = slots[f];
			mb.slots[f].el = mb.regSlotsMap[f].el;
			cc(mb.slots[f]);
		}
	}
  }

  var sc=function(obj){
    var e=new Date();
    e.setDate(e.getDate()+7);
    if (typeof obj.uid == 'string') {
		mb.uid = obj.uid;
		document.cookie="mb_uid2="+encodeURI(obj.uid)+";expires="+e.toGMTString()+";path=/";
	}
	if (typeof obj.inventory !== 'undefined') {
		mb.inventory = obj.inventory;
		if (typeof obj.slots === 'object') {
			mb.slots = obj.slots;
			for (var s in mb.slots) {
				if (typeof mb.regSlotsMap[s] !== 'undefined' && typeof mb.regSlotsMap[s].el !== 'undefined')
					mb.slots[s].el = mb.regSlotsMap[s].el;
			}
		}
		else
			mb.slots = {};
		mb.pv = obj.pv;
		for (var i = 0; i < icb.length; i++) {
			if (typeof icb[i] === 'function')
				icb[i]();
		}
		icb = [];
	}
	if (typeof obj.elbval !== 'undefined' && mdn != dn) {
	  var ifrm = document.createElement("IFRAME");
	  ifrm.setAttribute("src", dlp+"//"+mdn + "/mb/slb.html?key=" + obj.elbkey + "&val=" + obj.elbval + "&zuid=t&rnd=" + rand());
	  ifrm.style.width = 0+"px";
	  ifrm.style.height = 0+"px";
	  ifrm.style.display = "none";
      if (document.readyState !== "loading")
        document.body.appendChild(ifrm);
      else {
        if (window.addEventListener)
		  window.addEventListener("load", function() { document.body.appendChild(ifrm); }, false);
	    else if (document.attachEvent)
		  window.attachEvent("onload", function() { document.body.appendChild(ifrm); });
	  }
	}
	if (typeof obj.fns !== 'undefined' && typeof obj.fns.length !== 'undefined') {
	  for (var i = 0; i < obj.fns.length; i++) {
	    var fn = null;
	    try { fn = eval("mb." + obj.fns[i]); } catch (err) { }
		if (typeof fn === 'function')
		  fn();
	  }
	}
	while (mb.pendingRefresh1.length > 0) {
		var slotName = mb.pendingRefresh1.pop();
		mb.refresh(slotName,true); 
	}
  };
  
  var r = function(obj){
    if (obj && obj["a"]){
      document.write(decodeURI(obj["a"]));
      if (obj["s"]){
        ads = obj["s"];
      }
    }
  };
  
  var isIEorEdge = function() {
	var myNav = navigator.userAgent.toLowerCase();
	if (myNav.indexOf('msie') == -1 && myNav.indexOf('trident') == -1 && myNav.indexOf('edge') == -1) { return false; }
	return true;
  }
  var isIElt10 = function() {
	var myNav = navigator.userAgent.toLowerCase();
	if (myNav.indexOf('msie') == -1) { return false; }
	if (parseInt(myNav.split('msie')[1]) > 9) { return false; }
	return true;
  };

  var purge = function(d) {
	  var a = d.attributes, i, l, n;
	  if (a) {
	      for (i = a.length - 1; i >= 0; i -= 1) {
	          n = a[i].name;
	          if (typeof d[n] === 'function') {
	              d[n] = null;
	          }
	      }
	  }
	  a = d.childNodes;
	  if (a) {
	      l = a.length;
	      for (i = 0; i < l; i += 1) {
	          purge(d.childNodes[i]);
	      }
	  }
  }

  mb.render = function(el, w, h, c, rba, qs, id) {
	var ifrm = document.createElement("iframe");
	ifrm.setAttribute("src", "about:blank");
	ifrm.setAttribute("width", w);
	ifrm.setAttribute("height", h);
	ifrm.style.backgroundColor="transparent";
	ifrm.style.position = "static";
	ifrm.allowTransparency="true";
	ifrm.setAttribute("scrolling", "no");
	ifrm.className = "mbIFrame";
	ifrm.id = id;
	var zs = ["frameBorder", "vspace", "hspace", "marginheight", "marginwidth"];
		for (var i=0;i<zs.length;i++)
			ifrm.setAttribute(zs[i], 0);
	  
	var p = document.createElement("p");
	p.className = "mbReportBadAd";
	p.appendChild(document.createTextNode(mb.site.reportBadAdText));
	if (p.addEventListener) {
		p.addEventListener("click", function() { mb.site.lightboxCallback(rbau + qs, el); }, false);
	}
	else {
		p.attachEvent("onclick", function() { mb.site.lightboxCallback(rbau + qs, el); } );
	}
	  
	el.appendChild(ifrm);

	var cw = ifrm.contentWindow, cww = null;
	try { cww = ifrm.contentWindow.window; } catch (e) { log("No contentWindow window"); }
	try { cw.console.log = function() {}; cww.console.log = function() {}; } catch (e) { log("can't redefine console.log"); }
	try { cw.alert = function() {}; cww.alert = function() {}; } catch (e) { log("can't redefine alert"); }
	try { cw.confirm = function() {}; cww.confirm = function() {}; } catch (e) { log("can't redefine confirm"); }
	if (ifrm.sandbox && mb.site && !mb.site.noSandbox && !isIEorEdge()) {
		var satts = ["allow-forms", "allow-popups", "allow-scripts", "allow-pointer-lock"];
		for (var i=0; i<satts.length;i++)
			try { ifrm.sandbox.add(satts[i]); } catch (e) { log("can't add sandbox att " + satts[i]); }
		if (isIEorEdge()) { try { ifrm.sandbox.add("allow-popups-to-escape-sandbox"); } catch (e) { log ("can't add sandbox att aptes"); } } 
	}
	else if (isIEorEdge() && mb.site && !mb.site.noSecurity) {
		ifrm.setAttribute("security", "restricted");
	}
	
	var doc = ifrm.contentWindow.document;
	doc.open("text/html","replace").write(c); 
	if (!isIElt10()) { doc.close(); } 

	if (rba)
		el.appendChild(p);
	
	var ret = {}; ret.ifrm = ifrm; ret.p = p;
	return ret;
  }
  
  mb.render2 = function(el, ad, rba, qs, ifrmid) {
    return mb.render(el, ad.w, ad.h, ad.content, rba, qs + "&b=" + ad.bannerId + "&rci=" + ad.creativeId + "&rai=" + ad.rtbAdvertiserId + "&rbi=" + ad.rtbBrandId, ifrmid);
  }
  
  var cc = function(vals, dfrd) {
    initVars();
	dfrd = typeof dfrd === 'boolean' ? dfrd : false;
	if (typeof(vals.el) === "undefined" && (typeof vals.dataTag === "undefined" || !vals.dataTag) && (typeof vals.rm === "undefined" || !vals.rm)) {
	  var r = rand();
	  var scps = document.getElementsByTagName("script");
	  var scp = scps[scps.length - 1];
	  var dv = document.createElement("div");
	  dv.setAttribute("id", "mb_adslot_"+r);
	  scp.parentNode.insertBefore(dv, scp.nextSibling);
	  vals.el = dv;
	  vals.elCreated = true;
	}
	if (!dfrd && typeof mb.pv === 'undefined') {
	  var o = vals;
	  icbPush(function() {
		if (document.readyState === "complete" || document.readyState === "interactive")
		  cc(o, true);
		else {
		  if (window.addEventListener)
			window.addEventListener("load", function() { cc(o, true); }, false);
		  else if (document.attachEvent)
		    window.attachEvent("onload", function() { cc(o, true); });
		}
		    
		} );
	  return;
	}
	
	if (typeof(vals.slot) === "string")
		var cr = mb.slots[vals.slot];
	var usecr = (typeof(cr) === "object");
	if (!usecr) {
		if (typeof vals.sz === "undefined")
			vals.sz = vals.sizes[0];
		if (typeof vals.w === "undefined") {
			var inv = mb.inventory[vals.sz];
			if (typeof inv === "object") {
				vals.w = inv.w;
				vals.h = inv.h;
				if ((typeof vals.dataTag === "boolean" && vals.dataTag && inv.amt <= 0) || (typeof vals.rm === "boolean" && vals.rm && inv.amt <= 0))
					return;
			}
		}
	}
	
	if (usecr && typeof mb.regSlotCallbackMap[vals.slot] === 'function') {
		mb.regSlotCallbackMap[vals.slot](cr);
	}
	
	if (usecr && typeof vals.dataTag === 'boolean' && vals.dataTag) {
		if (typeof vals.callback === 'function') {
			vals.callback(JSON.parse(cr.renderedContent));
		}
		else if (typeof mb.regSizeCallbackMap[cr.sizeOut] === 'function') {
			mb.regSizeCallbackMap[cr.sizeOut](JSON.parse(cr.renderedContent));
		}
		return;
	}
	
	if (usecr && typeof vals.rm === 'boolean' && vals.rm) {
		try {
			eval(cr.renderedContent);
		}
		catch (err) { log("Rich media eval error: " + err); }
		return;
	}
	
	if (usecr && typeof(cr.ads) === "object" && cr.ads.length > 0) {
		var p = /<!--MB_HEADER_CONTENT-->/
		for (var i = 0; i < cr.ads.length; i++) {
			if (typeof(cr.ads[i].pbRender) === "number" && cr.ads[i].pbRender >= 0) {
				try {
					var pb = mb.regSlotsMap[vals.slot].pb[cr.ads[i].pbRender];
					if (typeof pb.ad === "undefined" && typeof pb.adUrl === "string") {
						pb.ad = "<iframe src='" + pb.adUrl + "' width='" + pb.width + "' height='" + pb.height + "' frameBorder=0 vspace=0 hspace=0 marginheight=0 marginwidth=0 scrolling='no'></iframe>";
					}
					cr.ads[i].content = cr.ads[i].content.replace(p, pb.ad);
				}
				catch (err) {
					log("Header bid content error: " + err);
				}
			}
		}
	}
	
	var qs = "";
	if (vals.s === undefined)
		vals.s = mb.site.id;
	if (vals.r === undefined)
		vals.r = v.r;
	qs+="?s="+vals.s;
    if (typeof vals.sz!=="undefined")
	  qs+="&size="+vals.sz;
	else {
	  if (usecr) {
		qs+="&size=";
		if (typeof cr.sizeOut !== "undefined")
			qs+=cr.sizeOut;
		else if (typeof cr.sizes !== "undefined")
			qs+=cr.sizes[0];
		else if (typeof vals.sizes !== "undefined")
			qs+=vals.sizes[0];
		else
			qs+="&h="+vals.h+"&w="+vals.w;
	  }
	  else
	    qs+="&h="+vals.h+"&w="+vals.w;
	}
	if (typeof (mb.pv) !== "undefined")
		qs+="&pv="+mb.pv;
	if (dn != mdn)
		qs+="&id="+gc();
		
    var cv = "";
    for (var k in mb.atts){
      if (k.indexOf("mb_") == 0) cv+="&"+k.substring(3); else cv+="&"+"ct"+k;
	  cv+="="+mb.atts[k];
    }

    var is_iframe = false;
    try {
      is_iframe = (window.location != window.parent.location)
    } catch(e){}

	if ((typeof vals.rm === "boolean" && vals.rm) || (typeof vals.dataTag === "boolean" && vals.dataTag))
		cv += "&wrap=jspure";
	else
		cv += "&wrap=iframe";
	
	if (typeof vals.dataTag === "boolean" && vals.dataTag) {
		cv += "&dt=true";
		if (typeof vals.callback === "string") {
			cv += "&cb=" + vals.callback;
		}
	}
	
	qs += cv; 
	if (ads && ads[vals.sz]){
		qs += "&fbid="+ads[vals.sz];
	}
	
	qs += "&rnd=" + rand();
	
	if (dfrd && ((typeof vals.rm === "boolean" && vals.rm) || (typeof vals.dataTag === "boolean" && vals.dataTag))) {
		MonkeyBroker.inputData[vals.sz] = vals;
		var head = document.getElementsByTagName('head').item(0);
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', au + qs);
		head.appendChild(script);
	}
	else if (typeof vals.el !== "undefined") {
		if (!usecr) {
			mb.refresh(vals.slot);
			return;
		}

		var el;
		if (typeof vals.id !== "undefined") {
			el = document.getElementById(vals.id);
		}
		else {
			if (typeof vals.el === "string") 
				el = document.getElementById(vals.el);
			else 
				el = vals.el;
		}
		if (null == el) {
			log("No DOM element found for id " + (vals.id || vals.el));
			return;
		}
		
		var rba = false;
		if (typeof mb.site.reportBadAd !== "undefined" && mb.site.reportBadAd) {
			if (typeof vals.reportBadAd === "undefined" || vals.reportBadAd)
				rba = true;
		}

		var slot = mb.regSlotsMap[vals.slot];
		slot.rel = {};
		slot.rel.ns = [];
		slot.rel.prre = cr.refresh;
		var ifrmid = "MB-iframe-" + vals.slot;

		var ret = {};
		if (cr.templateOut == "Unstacked 300x250") {
			var d = document.createElement("div");
			d.style.width = "650px";
			d.style.overflow = "auto";
			d.className = "MB-UnstackedMedRect";
			el.appendChild(d);
			var d1 = document.createElement("div"), ds = document.createElement("div"), d2 = document.createElement("div"); 
			d1.style.float = "left";
			d1.style.width = "300px";
			d1.style.minHeight = "250px";
			d1.className = "MB-UnstackedMedRect one";
			d.appendChild(d1);
			var ad = cr.ads[0];
			//ret = mb.render(d1, ad.w, ad.h, ad.content, rba, qs + "&b=" + ad.bannerId + "&rci=" + ad.creativeId, ifrmid + "-1");
			ret = mb.render2(d1, ad, rba, qs, ifrmid + "-1");
			var ds = document.createElement("div");
			ds.style.float = "left";
			ds.style.width = "50px";
			ds.style.height = "250px";
			ds.className = "MB-UnstackedMedRect separator";
			d.appendChild(ds);
			d2.style.float = "left";
			d2.style.width = "300px";
			d2.style.minHeight = "250px";
			d2.className = "MB-UnstackedMedRect two";
			d.appendChild(d2);
			ad = cr.ads[1]
			ret = mb.render2(d2, ad, rba, qs, ifrmid + "-2");
			slot.rel.ns.push(d);
		}
		else if (cr.templateOut == "Stacked 300x250") {
			var d = document.createElement("div");
			d.style.width = "300px";
			d.style.overflow = "auto";
			d.className = "MB-StackedMedRect";
			el.appendChild(d);
			var d1 = document.createElement("div"), ds = document.createElement("div"), d2 = document.createElement("div"); 
			d1.style.width = "300px";
			d1.style.minHeight = "250px";
			d1.className = "MB-StackedMedRect one";
			d.appendChild(d1);
			var ad = cr.ads[0];
			ret = mb.render2(d1, ad, rba, qs, ifrmid + "-1");
			var ds = document.createElement("div");
			ds.style.width = "300px";
			ds.style.height = "50px";
			ds.className = "MB-StackedMedRect separator";
			d.appendChild(ds);
			d2.style.width = "300px";
			d2.style.minHeight = "250px";
			d2.className = "MB-StackedMedRect two";
			d.appendChild(d2);
			ad = cr.ads[1]
			ret = mb.render2(d2, ad, rba, qs, ifrmid + "-2");
			slot.rel.ns.push(d);
		}
		else {
			var ad = cr.ads[0];
			ret = mb.render2(el, ad, rba, qs, ifrmid);
			slot.rel.ns.push(ret.ifrm, ret.p);
		}
		
		if (cr.refresh > 0  && (typeof vals.dataTag !== "boolean" || !vals.dataTag))
			slot.tmr = setTimeout(function() { 
									var name = vals.slot;
									mb.refresh(name,false); 
									}, cr.refresh*1000);

	}
	else {
	  if (typeof vals.rm === "boolean" && vals.rm) {
		MonkeyBroker.inputData[vals.sz] = vals;
	    document.write(decodeURI("%3Cscript src='" + au + qs + "' type='text/javascript'%3E%3C/script%3E"));
	  }
	  else {
		log("Bad code path");
		document.write(decodeURI("%3Ciframe frameborder=0 vspace=0 hspace=0 width=" + vals.w + " height=" + vals.h + " scrolling=no marginheight=0 marginwidth=0 src='" + au + qs + "' %3E%3C/iframe%3E"));
		if (mb.site.reportBadAd !== "undefined" && mb.site.reportBadAd)
		  document.write(decodeURI("%3Cp class='mbReportBadAd' onclick='MonkeyBroker.site.lightboxCallback(\"" + rbau + qs + "\");'%3E" + mb.site.reportBadAdText + "%3C/p%3E"));
	  }
	}
  };

  var icbPush = function(f) {
	if (typeof mb.pv !== "undefined") { f(); }
	else { icb.push(f); }
  };

  mb.stopRefresh = function() {
	for (var i=0, len=mb.regSlots.length; i<len; ++i) {
	  var slot=mb.regSlots[i];
	  try { clearTimeout(slot.tmr); slot.tmr = 0; } catch(err) {}
	}
  }
  
  mb.adPlacement=function(obj){
	if (typeof(obj) === "object" && typeof(obj.sizes) === "object")
		mb.multipleSizesPlacement(obj);
	else
		cc(obj);
  };

  mb.inventoryConditionalPlacement=function(obj){
    var o = obj;
    if (typeof o.sz === "undefined") { o.sz = o.sizes[0]; }	
	if (typeof(o.slot) === "undefined") { mb.defineSlot(o); }
	if (typeof(mb.inventory) === "object" && typeof(mb.inventory[o.sz]) === "object" && mb.inventory[o.sz].amt > 0) { 
		mb.refresh(o.slot,true);
	}
	return o.slot;
  };
  
  mb.multipleSizesPlacement=function(obj){
	var o = obj;
	if (typeof(o.sizes) === "object") {
		if (typeof(o.el) === "undefined") {
		  var r = rand();
		  var scps = document.getElementsByTagName("script");
		  var scp = scps[scps.length - 1];
		  var dv = document.createElement("div");
		  dv.setAttribute("id", "mb_adslot_"+r);
		  scp.parentNode.insertBefore(dv, scp.nextSibling);
		  o.el = dv;
		}
		if (typeof(o.slot) === "undefined") { mb.defineSlot(o); }
		if (typeof mb.inventory === "object")
			mb.refresh(o.slot,true);
		else
			mb.pendingRefresh1.push(o.slot);
	}
  };
		
  window["c"+v.r]=function(uid){sc(uid)};
  window["d"+v.r]=function(enc){document.write(decodeURI(enc))};
  window["r"+v.r]=function(obj){r(obj)};
  window["sa"+v.r]=function(){return mb.atts};
  window["rc"+v.r]=function(obj){mb.rc(obj)};
  
  mb.addAttribute = function(k,v){mb.atts[k]=encodeURIComponent(v)};
  mb.addSlot = function(v){return mb.defineSlot(v);};
  mb.defineSlot = function(v){
	  if(typeof(v.size)!=="undefined"){v.sizes=[v.size];delete v.size;}
	  if(typeof(v.slot)==="undefined"){var s="_dynamic_"+rand();v.slot=s;}
	  mb.regSlots.push(v);
	  mb.regSlotsMap[v.slot]=v;
	  return v.slot;};
  mb.fillSlot = function(k){
	  var o = mb.regSlotsMap[k];
	  if ((typeof(o.rm) !== "undefined" && o.rm) || (typeof(o.dataTag) !== "undefined" && o.dataTag))
        log("No need to call fillSlot for slot " + o.slot + " because it's a rich media or data tag");
	  else
	    cc(o)};
  mb.placeSlot = function(v){
	  mb.defineSlot(v); mb.fillSlot(v.slot); mb.tagsPlaced++;}
  mb.registerCallback = function(f){
	  if (typeof(mb.pv)!=="undefined")f();else icb.push(f);}
  mb.registerSizeCallback = function(s,f){
	  mb.regSizeCallbackMap[s]=f;}
  mb.registerSlotCallback = function(s,f){
	  mb.regSlotCallbackMap[s]=f;}
})();

	
	MonkeyBroker.loaded = true;
	MonkeyBroker.addAttribute("mb_tr", window.location != window.parent.location ? document.referrer : window.location);

	if (typeof(MonkeyBroker.standAlone) === 'boolean' && MonkeyBroker.standAlone) {
		if (window.addEventListener)
			window.addEventListener("load", MonkeyBroker.go, false);
		else if (document.attachEvent)
			window.attachEvent("onload", MonkeyBroker.go);
	}
}
if (typeof(MonkeyBroker.standAlone) === 'boolean' && MonkeyBroker.standAlone) {
	MonkeyBroker.saTags++;
}


