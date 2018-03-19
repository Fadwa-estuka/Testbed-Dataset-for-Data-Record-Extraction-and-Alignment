/**
 * ClearTag Multi-bidder Specific for GAM
 */
WinAdCallIdArr = []; //For resolving issue of multiple entries in prebidwin..

ClearTagWQ = {
    bidResult : [],
    bidWinner: [],
    reason: { "status": "", "info": [] },
    bidRendered : false,
    CreativeServedFlag: false,
    bidCounter : 0,
    timeout: false,
    timer: 0,
    bidderStartTime: 0,
    bidderEndTime: 0,
    bidPartners: {},
    bidPartnersLog: [],
    bidExtInfo: {},
    d_partnerName:"",
    d_partnerTout:"",


    getFormattedTime : function (date) {
        return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate() + 'T'
            +date.getHours()+':'
            +date.getMinutes()+':'
            +date.getSeconds()+'.'
            +date.getMilliseconds()+'-05:00';
    },

    getPartnersOptions : function (){
        var _this = this;
        for ( var bidP in ClearTag_options.bids ){
            _this.bidPartners[ClearTag_options.bids[bidP].bidder] = {};
            _this.bidPartners[ClearTag_options.bids[bidP].bidder]=ClearTag_options.bids[bidP];
        }
    },

    startProc : function() {
        var _this = this;

        if(!ClearTag_options) {
            //error
        } else {
            clearTimeout(this.masterTimeout);
            var _this = this;
            _this.getPartnersOptions();
            var date = new Date();
            this.startTime = this.getFormattedTime(date);

            this.timer = Date.now();
            //console.log('Start Time: ' + this.timer);

            this.masterTimeout = setTimeout(
                function() {
                    if (_this.CreativeServedFlag == false) {
                        _this.timeout = true;
                        _this.allBidsBack();
                    }
                }, ClearTag_options.masterTimeout
            );

            for (var i in ClearTag_options.bids) {

                var bidItem = ClearTag_options.bids[i];
                var bidName = bidItem.bidder;

                this[bidName].__parent = _this;
                this[bidName].__requestBid(i);
            }
        }
    },

    /**
     * Executed by callback of master timer
     */
    allBidsBack : function() {
        var date = new Date();
        var EndTime = this.getFormattedTime(date);
        var check = Date.now() - this.timer;
        this.reason.status = '';

        if (this.timeout == false) {
            if ( this.bidResult.length > 0){
                var res = "";
                for (var i in this.bidResult) {
                    if (this.bidResult[i].price >= ClearTag_options.floorPrc && this.bidResult[i].price >= res) {
                        res = this.bidResult[i].price;
                        this.bidRendered = true;
                        this.bidWinner = this.bidResult[i];
                    }
                }

                if ( this.bidRendered == false)
                    this.reason.status = "High_floor";
            } else {
                this.reason.status = "None_of_the_partner_responded";
            }
        }else{
            this.reason.status = "Master_Timeout";
        }

        if (this.timeout === true || this.bidCounter >= ClearTag_options.bids.length ) {

            var admStr = '', bidderName = '', ctPrice = 0;
            if ( ClearTag_options.cp_dTag.trim() != '' ){
                admStr = this.processDefaultTag(ClearTag_options.cp_dTag);
                bidderName = 'ThirdParty';
                ctPrice = ClearTag_options.floorPrc+0.01;
            } else {
                admStr = ClearTag_options.defCreative;
                bidderName = 'ClearTag';
            }

            if ( this.isPartnerLogged(bidderName) == false ) {
                if ( bidderName == 'ThirdParty' ){
                    var ctRObj = {"bidder": bidderName, "price": ctPrice, "adm": admStr, "tracking_url": '', "click_url":'', "other_info": {} };
                    var ctLogObj = {
                        "name":bidderName, "timeout":0, "starttime":this.getFormattedTime(new Date()), "bidstatus":'success', "bidresponse" : ctRObj, "endtime":this.getFormattedTime(new Date())
                    };
                    var ctObj = {"bidPartnerName":bidderName, "bidPartnerData":ctLogObj};

                    this.bidPartnersLog.push(ctObj);
                    this.bidResult.push(ctObj.bidPartnerData.bidresponse);
                }
            }

            if (this.bidRendered == false) {
                this.bidWinner = {
                    "bidder": bidderName,
                    "adm": admStr,
                    "price": ctPrice
                };
                this.bidRendered = true;
            }

            if ( this.bidRendered === true){
                if ( typeof this.bidWinner.adm !== 'undefined'){
                    if ( typeof ClearTag_options.aAuction !== 'undefined') { // For backward compatibility..
                        if (ClearTag_options.aAuction == '1'){
                            console.log('in Additional Auction...'+ClearTag_options.placementId+ '--->'+ClearTag_options.adId);
                            if ( cp_auctionType === 'post' ){
                                if (ClearTag_options.addInfo.adxThresholdFloor != '' && (ClearTag_options.addInfo.adxThresholdFloor != '0' && ClearTag_options.addInfo.adxThresholdFloor != '0.00' ) && this.bidWinner.price > ClearTag_options.addInfo.adxThresholdFloor){
                                    this.renderWinner();
                                } else {

                                    var bidderPriceArr = this.generateBidderPriceArr(this.bidResult);
                                    var gbpa = 0, //ClearBuy Price..cleardesk
                                    gbpb = 0, //Index Price..indexexchange
                                    gbpc = 0; //AppNexus Price...
                                    console.log(bidderPriceArr);
                                    if ( typeof (bidderPriceArr['cleardesk']) !== 'undefined' ){
                                        gbpa = bidderPriceArr['cleardesk'];
                                    }
                                    if ( typeof (bidderPriceArr['indexExchange']) !== 'undefined' ){
                                        gbpb = bidderPriceArr['indexExchange'];
                                    }
                                    if ( typeof (bidderPriceArr['appnexus']) !== 'undefined' ){
                                        gbpc = bidderPriceArr['appnexus'];
                                    }

                                    if (cp_auctionType === 'post' && ClearTag_options.addInfo.RoundBidPriceNearest10Cents !== undefined && ClearTag_options.addInfo.RoundBidPriceNearest10Cents === 'Y')
                                    {
                                        gbpa=RoundBidPriceNearest10Cents_event(gbpa);
                                        gbpb=RoundBidPriceNearest10Cents_event(gbpb);
                                        gbpc=RoundBidPriceNearest10Cents_event(gbpc);
                                    }
                                    var adxTag = ClearTag_options.cp_adxTag;
                                    adxTag = adxTag.replace(/\{gbpa\}/g,gbpa);
                                    adxTag = adxTag.replace(/\{gbpb\}/g,gbpb);
                                    adxTag = adxTag.replace(/\{gbpc\}/g,gbpc);
                                    var ifrObj = {};
                                    var cmnStr = "";
                                    ifrObj.content = cmnStr + this.processAdxTag(adxTag);
                                    renderInDFP(ifrObj,'adx');
                                }
                            }
                        } else {
                            this.renderWinner();
                        }
                    } else {
                        this.renderWinner();
                    }
                }
                else
                    displayFallBackTag();

                // If Master TimeOut occurs, but got response from either of partner then, we have to remove this status...
                if ( this.reason.status == "Master_Timeout" && ( this.bidWinner.bidder.toLowerCase() != 'cleartag' || this.bidWinner.bidder.toLowerCase() != 'thirdparty' ))
                    this.reason.status = '';
            }

            if ( this.timeout === true ){
                if ( ClearTag_options.bids.length > this.bidCounter){
                    var partnerResponsed = [];
                    for ( i in this.bidPartnersLog){
                        partnerResponsed.push(this.bidPartnersLog[i].bidPartnerName);
                    }

                    for (i in ClearTag_options.bids) {
                        if ( partnerResponsed.indexOf(ClearTag_options.bids[i].bidder) == -1 ){
                            var bidName = ClearTag_options.bids[i].bidder;
                            this[bidName].__bidFail(this[bidName].__myLogObj);
                        }
                    }
                }
            }

            var logData = {
                "AdId":                 ClearTag_options.adId,
                "PlacementId":          ClearTag_options.placementId,
                "PublisherId":          ClearTag_options.addInfo.pubid,
                "SiteID":                   ClearTag_options.addInfo.siteid,
                "StartTime":            this.startTime,
                "EndTime":              EndTime,
                "BidPartners":          this.bidPartnersLog,
                "DefaultServedReason":  this.reason.status,
                "AdditionalInfo":   getDynamicDetails()
            };

            if ( typeof ClearTag_options.aAuction !== 'undefined') { // For backward compatibility..
                if (ClearTag_options.aAuction == '1') {
                    logData.bidWinnerName =   'Adx';
                    logData.bidWinnerPrice = 0.0;
                }
            }
            this.logTransaction(logData);
            console.log("Total time : " + check + ' For '+ClearTag_options.placementId + ' -> ' + ClearTag_options.adId);
            this.CreativeServedFlag = true;
            clearTimeout(this.masterTimeout);
            this.pbrp();
        }
    },

    generateBidderPriceArr : function(arrObj){
        var returnArr = [];
        for (var i in arrObj) {
            if (arrObj[i].price > 0) {
                returnArr[arrObj[i].bidder] = arrObj[i].price
            }
        }
        return returnArr;
    },

    renderWinner: function(){
        if ( typeof this.bidWinner !== 'undefined'){
            if ( typeof this.bidWinner.adm !== 'undefined' && this.bidWinner.adm != '' ){
                var ifrObj = {};
                if ( this.bidWinner.bidder.toLowerCase() == 'appnexus' ){
                    var jsContent = '';
                    var h='',w='';
                    var obj = {}; obj.size = [];
                    if ( typeof this.bidWinner.other_info != 'undefined'){
                        if ( typeof this.bidWinner.other_info.width != 'undefined' && typeof this.bidWinner.other_info.height != 'undefined'){
                            w = this.bidWinner.other_info.width;
                            h = this.bidWinner.other_info.height;
                        }
                        else if ( typeof this.bidWinner.other_info.w != 'undefined' && typeof this.bidWinner.other_info.h != 'undefined'){
                            w = this.bidWinner.other_info.w;
                            h = this.bidWinner.other_info.h;
                        } else if (this.bidWinner.bidder.toLowerCase() == 'openx' ){
                            var sizeArr = this.bidWinner.other_info.size.split('x');
                            w = sizeArr[0];
                            h = sizeArr[1];
                        }
                    }

                    if ( cp_auctionType === 'pre') {
                        jsContent = "<script>var wVar='"+w+"', hVar='"+h+"'; parent.cpCommon.initResizeCall(parent.auctionType, parent.checkFrameNames, parent.topIframeNames, wVar, hVar);</script>";
                    } else { //For post as well as non gadx enabled....
                        jsContent = "<script>var wVar='"+w+"', hVar='"+h+"';</script><script src=\""+cpcUrl+"\"></script><script>resizeDFPIframe();</script>";
                    }
                    jsContent += this.bidWinner.adm;

                    ifrObj.content = jsContent;
                    renderInDFP(ifrObj);
                } else if ( this.bidWinner.bidder.toLowerCase() == 'cleardesk' ){
                    var jsContent = '';
                    var h='',w='';
                    if ( typeof this.bidWinner.other_info != 'undefined'){
                        if ( typeof this.bidWinner.other_info.w != 'undefined' && typeof this.bidWinner.other_info.h != 'undefined'){
                            w = this.bidWinner.other_info.w;
                            h = this.bidWinner.other_info.h;
                        }
                    }

                    if ( cp_auctionType === 'pre') {
                        jsContent = "<script>var wVar='"+w+"', hVar='"+h+"'; parent.cpCommon.initResizeCall(parent.auctionType, parent.checkFrameNames, parent.topIframeNames, wVar, hVar);</script>";
                    } else { //For post as well as non gadx enabled....
                        jsContent = "<script>var wVar='"+w+"', hVar='"+h+"';</script><script src=\""+cpcUrl+"\"></script><script>resizeDFPIframe();</script>";
                    }
                    jsContent += this.bidWinner.adm;

                    if ( typeof this.bidWinner.other_info !== 'undefined'){
                        if ( typeof this.bidWinner.other_info.nurl !== 'undefined'){
                            if ( this.bidWinner.other_info.nurl != '' ){
                                jsContent += '<script src="'+this.bidWinner.other_info.nurl+'" type = "text/javascript" async="true"></script>';
                            }
                        }
                    }

                    ifrObj.content = jsContent;
                    renderInDFP(ifrObj);
                } else if ( this.bidWinner.bidder.toLowerCase() == 'cleartag' || this.bidWinner.bidder.toLowerCase() == 'thirdparty' ){
                    var jsContent = '', h='',w='';

                    if (ClearTag_options.size.toLowerCase() != '' ){
                        var sizeArr = ClearTag_options.size.toLowerCase().split('x');
                        w = sizeArr[0];
                        h = sizeArr[1];
                    }

                    if ( cp_auctionType === 'pre') {
                        jsContent = "<script>var wVar='"+w+"', hVar='"+h+"'; parent.cpCommon.initResizeCall(parent.auctionType, parent.checkFrameNames, parent.topIframeNames, wVar, hVar);</script>";
                    } else { //For post as well as non gadx enabled....
                        jsContent = "<script>var wVar='"+w+"', hVar='"+h+"';</script><script src=\""+cpcUrl+"\"></script><script>resizeDFPIframe();</script>";
                    }
                    jsContent += this.bidWinner.adm;

                    ifrObj.content = jsContent;
                    renderInDFP(ifrObj);
                } else if ( this.bidWinner.bidder.toLowerCase() == 'indexexchange' ){
                    var jsContent = '';
                    jsContent = "<script src=\""+cpcUrl+"\"></script><script>resizeDFPIframe();</script>";
                    if ( this.bidWinner.other_info.targetid.trim() != '' ){
                        jsContent += '<script>var targetId = "'+this.bidWinner.other_info.targetid+'"; setTimeout( function() {if ( frm != null ){ frm.index_render(document, targetId); } } , 0);</script>';
                    } else { //For Testing environment...
                        jsContent += this.bidWinner.adm;
                    }
                    ifrObj.content = jsContent;
                    renderInDFP(ifrObj);
                }else {
                    var jsContent = '';

                    if ( cp_auctionType === 'pre') {
                        jsContent = "<script>parent.cpCommon.initResizeCall(parent.auctionType, parent.checkFrameNames, parent.topIframeNames);</script>";
                    } else { //For post as well as non gadx enabled....
                        jsContent = "<script src=\""+cpcUrl+"\"></script>";
                    }
                    jsContent += this.bidWinner.adm;
                    ifrObj.content = jsContent;
                    renderInDFP(ifrObj);
                }
                this.d_partnerName=this.bidWinner.bidder;
            }
        }
    },
    pbrp :function()
    {
        if(ClearTag_options.addInfo.pwt!==undefined && ClearTag_options.addInfo.pwt>0)
        {
            this.d_partnerTout=setTimeout(this.getCrt,ClearTag_options.addInfo.pwt*1000);
        }
    },
    getCrt : function(){
        if ( ClearTagWQ.bidResult.length > 0)
        {
            var res = "";
            for (var i in ClearTagWQ.bidResult) {
                if (ClearTagWQ.bidResult[i].price >= ClearTag_options.floorPrc && ClearTagWQ.bidResult[i].price >= res && ClearTagWQ.d_partnerName!=ClearTagWQ.bidResult[i].bidder) {
                    res = ClearTagWQ.bidResult[i].price;
                    ClearTagWQ.bidRendered = true;
                    ClearTagWQ.bidWinner = ClearTagWQ.bidResult[i];
                }
            }
            if(ClearTagWQ.bidWinner.bidder!==undefined && ClearTagWQ.bidWinner.bidder!=="" && ClearTagWQ.d_partnerName!==ClearTagWQ.bidWinner.bidder)
            {
                processWinner();
            }
        }
        clearTimeout(this.d_partnerTout);
    },
    processAdxTag : function(tVar) {
        //tVar = tVar.replace(/\'\+\'/g,'');
        tVar = tVar.replace(/scr\'\+\'ipt/g,'script');
        tVar = tVar.replace(/\=\^\=/g,"\n");
        return tVar;
    },

    processDefaultTag : function(tVar) {
        tVar = tVar.replace(/\'\+\+\'/g,'');
        //tVar = tVar.replace(/\'\+\'/g,'');
        tVar = tVar.replace(/\~\^\~/g,'\"');
        tVar = tVar.replace(/\=\^\=/g,"\n");
        return tVar;
    },
    /**
     * Individual bid is returned its result/state
     */
    bidBack : function(bidder) {
        var finalObj = new Object;
        this.bidCounter += 1;
        /*for (var i in this.bidResult) {
         this.bidCounter += 1;
         }*/

        if (this.timeout == false) {
            this.allBidsBack();
        }
    },

    /** AJAX push to /ar.logger.php by POST **/
    logTransaction : function(logData) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status === 200) {
                if (typeof success === "function") {
                    alert(xmlhttp.responseText);
                    success(xmlhttp.responseText);
                }
            }else if(typeof error === "function" && (xmlhttp.status > 299 || xmlhttp.status < 200)){
                error();
            }
        };
        xmlhttp.open("POST", ClearTag_options.logUrl, true);
        xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlhttp.send("param=" + encodeURIComponent(JSON.stringify(logData)));
    },

    inArray: function(needle, haystack) {
        var length = haystack.length;
        for(var i = 0; i < length; i++) {
            if(haystack[i] == needle) return true;
        }
        return false;
    },

    recursivelyIterateProperties : function(respObj, excludeArr, prevKey) {
        prevKey = prevKey || '';
        for (var prop in respObj) {
            if (respObj[prop] instanceof Array === true || respObj[prop] instanceof Object === true) {
                this.recursivelyIterateProperties(respObj[prop], excludeArr, prop);
            } else if ( this.inArray(prop, excludeArr) === false ) {
                if ( typeof this.bidExtInfo[prop] === 'undefined' ){
                    this.bidExtInfo[prop] = respObj[prop];
                } else {
                    this.bidExtInfo[prevKey+'_'+prop] = respObj[prop];
                }
            }
        }
    },

    isValidNumber : function(str){
        var isNumeric = /^[-+]?(\d+|\d+\.\d*|\d*\.\d+)$/;
        return isNumeric.test(str);
    },

    isPartnerLogged : function(bidder){
        var retFlag = false;
        if ( this.bidPartnersLog.length > 0 ){
            for ( var ti=0; ti<this.bidPartnersLog.length ; ti++){
//                console.log(bidder + '--->' + this.bidPartnersLog[ti].bidPartnerName);
                if ( bidder.trim() === this.bidPartnersLog[ti].bidPartnerName.trim() ){
                    retFlag = true;
                    break;
                }
            }
        }
        return retFlag;
    },

    /**
     *  AppNexus specific bid object
     */
    appnexus : {
        __bidder : "appnexus",
        __myLogObj : {},
        getIncrementalInteger : function() {
            var count = 0;
            count++;
            return count;
        },
        getUniqueIdentifierStr : function() {
            return this.getIncrementalInteger() + Math.random().toString(16).substr(2);
        },
        hasOwn : function(objectToCheck, propertyToCheckFor) {
            if (objectToCheck.hasOwnProperty) {
                return objectToCheck.hasOwnProperty(propertyToCheckFor);
            } else {
                return (typeof objectToCheck[propertyToCheckFor] !== UNDEFINED) && (objectToCheck.constructor.prototype[propertyToCheckFor] !== objectToCheck[propertyToCheckFor]);
            }
        },
        parseSizesInput : function(sizeObj) {
            var sizeQueryString;
            var parsedSizes = [];

            //if a string for now we can assume it is a single size, like "300x250"
            if (typeof sizeObj === 'string') {
                //multiple sizes will be comma-separated
                var sizes = sizeObj.split(',');
                //regular expression to match strigns like 300x250
                //start of line, at least 1 number, an "x" , then at least 1 number, and the then end of the line
                var sizeRegex = /^(\d)+x(\d)+$/i;
                if (sizes) {
                    for (var curSizePos in sizes) {
                        if (this.hasOwn(sizes, curSizePos) && sizes[curSizePos].match(sizeRegex)) {
                            parsedSizes.push(sizes[curSizePos]);
                        }
                    }
                }
            } else if (typeof sizeObj === 'object') {
                var sizeArrayLength = sizeObj.length;
                //don't process empty array
                if (sizeArrayLength > 0) {
                    //if we are a 2 item array of 2 numbers, we must be a SingleSize array
                    if (sizeArrayLength === 2 && typeof sizeObj[0] === objectType_number && typeof sizeObj[1] === objectType_number) {
                        parsedSizes.push(this.parseGPTSingleSizeArray(sizeObj));
                    } else {
                        //otherwise, we must be a MultiSize array
                        for (var i = 0; i < sizeArrayLength; i++) {
                            parsedSizes.push(this.parseGPTSingleSizeArray(sizeObj[i]));
                        }
                    }
                }
            }

            //combine string into proper querystring for impbus
            var parsedSizesLength = parsedSizes.length;
            if (parsedSizesLength > 0) {
                //any subsequent values should be "promo_sizes"
                sizeQueryString = 'promo_sizes=';
                for (var j = 0; j < parsedSizesLength; j++) {
                    sizeQueryString += parsedSizes[j] += ',';
                }
                //remove trailing comma
                if (sizeQueryString && sizeQueryString.charAt(sizeQueryString.length - 1) === ',') {
                    sizeQueryString = sizeQueryString.slice(0, sizeQueryString.length - 1);
                }
            }
            return sizeQueryString;
        },
        __requestBid : function(idx) {
            var requestUri = '';
            var optVal = ClearTag_options.bids[idx];
            var _this = this;
            _this.__parent.bidExtInfo = {};
            _this.bidderStartTime = new Date();
            _this.bidderTimeOut = optVal.timeout;
            _this.__myLogObj = {
                "name":_this.__bidder, "timeout":_this.bidderTimeOut, "starttime":_this.__parent.getFormattedTime(_this.bidderStartTime), "bidstatus":'Request_Sent', "bidresponse" : {}, "endtime":''
            };
            requestUri = this.__generateURL(optVal);
            document.write('<script src="'+requestUri+'" type = "text/javascript"></script>');
        },
        __generateURL: function(optVal) {
            var host = 'http' + ('https:' === document.location.protocol ? 's://secure.adnxs.com/jpt?' : '://ib.adnxs.com/jpt?');
            //var params = 'psa='+optVal.psa+'&id='+optVal.id+'&callback=ClearTagWQ.appnexus.__apnCallBack&callback_uid='+ClearTag_options.adId+'&member_id='+ClearTag_options.adId+'&code='+ClearTag_options.adId+'&size='+ClearTag_options.size;
            var params = 'psa='+optVal.psa+'&id='+optVal.id+'&callback=ClearTagWQ.appnexus.__apnCallBack&callback_uid='+ClearTag_options.adId+'&size='+ClearTag_options.size+'&referrer='+detectRefererURL();

            if ( 'size' in optVal ) {
                if ( optVal.size.trim() != '' ) {
                    params += '&'+this.parseSizesInput(optVal.size.trim());
                }
            }
            return host+params;
        },
        __apnCallBack: function(obj){
            this.bidderEndTime = new Date();
            this.__myLogObj.endtime = this.__parent.getFormattedTime(this.bidderEndTime);
            var tDiff = this.bidderEndTime.getTime()-this.bidderStartTime.getTime();
            if ( tDiff <= this.bidderTimeOut && this.__parent.timeout === false ){
                if (obj && obj.callback_uid) {
                    var bidObj = obj.result;
                    if ( bidObj.ad.trim() != '' ){
                        this.__myLogObj.bidstatus = 'success';
                        this.__bidComplete(bidObj, this.__myLogObj);
                    } else {
                        this.__myLogObj.bidresponse = {};
                        this.__myLogObj.bidstatus = 'No_Bid_Response';
                        this.__bidFail(this.__myLogObj);
                    }
                } else {
                    this.__myLogObj.bidresponse = {};
                    this.__myLogObj.bidstatus = 'No_Bid_Response';
                    this.__bidFail(this.__myLogObj);
                }
            } else {
                this.__myLogObj.bidstatus = 'Partner_Timeout';
                if (obj && obj.callback_uid) {
                    var result = {};
                    result = this.__processResponse(obj.result);
                    this.__myLogObj.bidresponse=result;
                }
                else
                    this.__myLogObj.bidresponse = {};
                this.__bidFail(this.__myLogObj);
            }
        },
        __processResponse : function(bidRes){
            var rObj = {};
            var responseCPM = parseInt(bidRes.cpm, 10);
            //CPM response from /jpt is dollar/cent multiplied by 10000
            //in order to avoid using floats
            //switch CPM to "dollar/cent"
            responseCPM = responseCPM / 10000;
            var creativeStr = '<iframe frameborder="0" width="'+bidRes.width+'" height="'+bidRes.height+'" marginheight="0" marginwidth="0" target="_blank" scrolling="no" src="' + bidRes.ad + '"></iframe>';

            var exclArr = ['cpm', 'ad'];
            this.__parent.recursivelyIterateProperties(bidRes, exclArr);
            if ( this.__parent.isValidNumber(this.__parent.bidExtInfo.id) !== true){
                this.__parent.bidExtInfo.id_str=this.__parent.bidExtInfo.id;
                this.__parent.bidExtInfo.id=0;
            }
            if ( this.__parent.isValidNumber(this.__parent.bidExtInfo.impid) !== true){
                this.__parent.bidExtInfo.impid_str=this.__parent.bidExtInfo.impid;
                this.__parent.bidExtInfo.impid=0;
            }
            rObj = { "bidder": this.__bidder, "price": responseCPM, "adm": creativeStr, "tracking_url": '', "click_url":'', "other_info": this.__parent.bidExtInfo };
            this.__parent.bidExtInfo = {};
            return rObj;
        },
        __bidComplete : function(bidRes, logObj) {
            var result = {};
            result = this.__processResponse(bidRes);
            logObj.bidresponse=result;
            this.__parent.bidResult.push(result);
            this.__bidLog(logObj);
        },
        __bidFail : function(logObj) {
            this.bidderEndTime = new Date();
            logObj.endtime = this.__parent.getFormattedTime(this.bidderEndTime);
            this.__bidLog(logObj);
        },
        __bidLog: function(logObj){
            if ( this.__parent.isPartnerLogged(this.__bidder) == false ) {
                var pDiff = (this.bidderEndTime - this.bidderStartTime);
                console.log(pDiff + 'apn -> ' + ClearTag_options.placementId + ' -> ' + ClearTag_options.adId);
                var fObj = {};
                fObj = {"bidPartnerName": this.__bidder, "bidPartnerData": logObj};
                this.__parent.bidPartnersLog.push(fObj);
                this.__parent.bidBack(this.__bidder);
            }
        }
    },

    /**
     *  Index Exchange specific bid object
     */
    indexExchange : {
        __bidder : "indexExchange",
        __myLogObj : {},
        __requestBid : function(idx) {
            var optVal = ClearTag_options.bids[idx];
            this.__parent.bidExtInfo = {};
            this.bidderTimeOut = optVal.timeout;
            this.bidderStartTime = new Date();
            this.__myLogObj = {
                "name":this.__bidder, "timeout":this.bidderTimeOut, "starttime":this.__parent.getFormattedTime(this.bidderStartTime), "bidstatus":'Request_Sent', "bidresponse" : {}
            };
            cygnus_index_primary_request = false;

            if (typeof cygnus_index_start === "function") {
                var htb = document.createElement('script');
                htb.src = cygnus_index_start();
                var firstScript = document.getElementsByTagName('script')[0];
                firstScript.parentNode.insertBefore(htb, firstScript);
            }
        },
        __processResponse : function(bidRes){
            var rObj = {};
            var bid = bidRes.seatbid[0].bid[0];
            var cpmAndSlotId = bid.ext.pricelevel;
            var obj = cpmAndSlotId.split('_');
            var currentId = obj[0];
            var currentCPM=0;
            if ( isNaN(obj[1]) === false ){
                currentCPM = obj[1] / 100;
            } else if (obj[1].trim() == '1a1a1a1a' ){
                currentCPM = 1;
            }
            var exclArr = ['pricelevel', 'adm'];
            this.__parent.recursivelyIterateProperties(bidRes, exclArr);
            if ( this.__parent.isValidNumber(this.__parent.bidExtInfo.id) !== true){
                this.__parent.bidExtInfo.id_str=this.__parent.bidExtInfo.id;
                this.__parent.bidExtInfo.id=0;
            }
            if ( this.__parent.isValidNumber(this.__parent.bidExtInfo.impid) !== true){
                this.__parent.bidExtInfo.impid_str=this.__parent.bidExtInfo.impid;
                this.__parent.bidExtInfo.impid=0;
            }
            this.__parent.bidExtInfo['targetid']=this.__getTargetId(bidRes);
            rObj = { "bidder": this.__bidder, "price": currentCPM, "adm": bid.adm, "tracking_url": '', "click_url":'', "other_info": this.__parent.bidExtInfo };
            this.__parent.bidExtInfo = {};
            return rObj;
        },
        __indexExchangeCallBack : function(bidRes) {
            console.log("I");
            console.log(bidRes);
            this.bidderEndTime = new Date();
            this.__myLogObj.endtime = this.__parent.getFormattedTime(this.bidderEndTime);

            var diff = this.bidderEndTime.getTime()-this.bidderStartTime.getTime();
            var fObj = {};
            if(diff > this.bidderTimeOut && this.__parent.timeout === false ) {
                this.__myLogObj.bidstatus = 'Partner_Timeout';
                //if (bidRes.seatbid.length > 0) {
                if (bidRes.hasOwnProperty('seatbid') === true ) {
                    var result = {};
                    result = this.__processResponse(bidRes);
                    this.__myLogObj.bidresponse = result;
                }
                else
                    this.__myLogObj.bidresponse = {};
                this.__bidFail(this.__myLogObj);
            } else {
                //if (bidRes.seatbid.length < 1) {
                if (bidRes.hasOwnProperty('seatbid') === false ) {
                    this.__myLogObj.bidresponse = {};
                    this.__myLogObj.bidstatus = 'No_Bid_Response';
                    this.__bidFail(this.__myLogObj);
                } else {
                    this.__myLogObj.bidstatus = 'success';
                    this.__bidComplete(bidRes, this.__myLogObj);
                }
            }
        },
        __getTargetId : function(bidRes){
            var targetId = '';
            cygnus_index_parse_res(bidRes);
            var index_slot = this.__parent.bidPartners[this.__bidder].id;
            if ( typeof index_slots !== 'undefined') {
                var index_ary = index_slots;
                for (var i = 0; i < index_ary.length; i++) {
                    var unpack = index_ary[i].split('_');
                    if (unpack[unpack.length - 2] == index_slot) {
                        targetId = unpack[unpack.length - 2] + '_' + unpack[unpack.length - 1];
                    }
                }
            }
            return targetId;
        },
        __bidComplete : function(bidRes, logObj) {
            var result = {};
            result = this.__processResponse(bidRes);
            logObj.bidresponse=result;
            this.__parent.bidResult.push(result);
            this.__bidLog(logObj);
        },
        __bidFail : function(logObj) {
            this.bidderEndTime = new Date();
            logObj.endtime = this.__parent.getFormattedTime(this.bidderEndTime);
            this.__bidLog(logObj);
        },
        __bidLog: function(logObj){
            if ( this.__parent.isPartnerLogged(this.__bidder) == false ) {
                var pDiff = (this.bidderEndTime - this.bidderStartTime);
                console.log(pDiff + 'in -> ' + ClearTag_options.placementId + ' -> ' + ClearTag_options.adId);
                var fObj = {};
                fObj = {"bidPartnerName": this.__bidder, "bidPartnerData": logObj};
                this.__parent.bidPartnersLog.push(fObj);
                this.__parent.bidBack(this.__bidder);
            }
        }
    },

    /**
     *  ClearDesk specific bid object
     */

    cleardesk : {
        __bidder : "cleardesk",
        __myLogObj : {},
        __requestBid : function(idx) {
            var _this = this;
            _this.__parent.bidExtInfo = {};

            var dynObj = getDynamicDetails();
            var siteType="",storeUrl="",storeBundle="";
            if(ClearTag_options.appDetails.siteType!==undefined && ClearTag_options.appDetails.siteType.trim()!=="")
            {
                siteType=ClearTag_options.appDetails.siteType.trim();
            }
            if(ClearTag_options.appDetails.StoreURL!==undefined && ClearTag_options.appDetails.StoreURL!==null && ClearTag_options.appDetails.StoreURL.trim()!=="")
            {
                storeUrl=ClearTag_options.appDetails.StoreURL.trim();
            }
            if(ClearTag_options.appDetails.Bundle!==undefined && ClearTag_options.appDetails.Bundle!==null && ClearTag_options.appDetails.Bundle.trim()!=="")
            {
                storeBundle=ClearTag_options.appDetails.Bundle.trim();
            }

            var host = (window.location.protocol) + '//clrbr.pulseradius.com/crd',
                optVal = ClearTag_options.bids[idx],
                param = { "size": optVal.size.toLowerCase() , "site_id": optVal.site_id , "site_url": optVal.site_url, "keywords": dynObj.keywords, "section":dynObj.section, "subsection": dynObj.subsection, "adcallid": ClearTag_options.adId, "eid":optVal.eid, "type":siteType, "storeurl":storeUrl, "bundle":storeBundle,"connectiontype":getConnectionType(), "device":{"did":ClearTag_options.addInfo.deviceid, "did_sh1":ClearTag_options.addInfo.deviceid_sha1, "did_md5":ClearTag_options.addInfo.deviceid_md5}, "geo":{"lat":ClearTag_options.addInfo.lat, "long":ClearTag_options.addInfo.long},"pos":optVal.pos,"bidfloor":ClearTag_options.floorPrc, "ct_plid": ClearTag_options.placementId, "page_url": ClearTag_options.addInfo.pageurlenc, "sitecat":optVal.site_category},
                xmlhttp;

            _this.bidderStartTime = new Date();
            _this.bidderTimeOut = optVal.timeout;
            if ( window.XMLHttpRequest ) {
                xmlhttp=new XMLHttpRequest();// code for IE7+, Firefox, Chrome, Opera, Safari
            } else {
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); // code for IE6, IE5
            }

            _this.__myLogObj = {
                "name":_this.__bidder, "timeout":_this.bidderTimeOut, "starttime":_this.__parent.getFormattedTime(_this.bidderStartTime), "bidstatus":'Request_Sent', "bidresponse" : {}, "endtime":''
            };

            xmlhttp.onreadystatechange = function() {
                var adsHtml = '';
                var obj = Object;
                var statusCode = xmlhttp.status;

                if ( xmlhttp.readyState == 4 ) {
                    _this.bidderEndTime = new Date();
                    _this.__myLogObj.endtime = _this.__parent.getFormattedTime(_this.bidderEndTime);
                    if ( _this.__parent.timeout !== true) {
                        if (statusCode == 200) {
                            var pDiff = (_this.bidderEndTime-_this.bidderStartTime);
                            console.log(pDiff+'cd1 -> '+ClearTag_options.placementId+' -> '+ClearTag_options.adId);
                            obj = JSON.parse(xmlhttp.responseText);
                            if ( _this.__myLogObj.bidstatus == 'Request_Sent'){
                                if (obj.result.hasOwnProperty('isSuccess') && obj.result.isSuccess === 'false') {
                                    _this.__myLogObj.bidresponse = {};
                                    _this.__myLogObj.bidstatus = 'No_Bid_Response';
                                    _this.__bidFail(_this.__myLogObj);
                                } else {
                                    if (Object.keys(obj).length > 1) {
                                        _this.__myLogObj.bidstatus = 'success';
                                        var bidObj = obj;
                                        _this.__bidComplete(bidObj, _this.__myLogObj);
                                    }
                                }
                            }
                        } else {
                            var pDiff = (_this.bidderEndTime-_this.bidderStartTime);
                            console.log(pDiff+'cd2 -> '+ClearTag_options.placementId+' -> '+ClearTag_options.adId);
                            if ( _this.__myLogObj.bidstatus == 'Request_Sent'){
                                _this.__myLogObj.bidresponse = {};
                                _this.__myLogObj.bidstatus = 'No_Bid_Response';
                                _this.__bidFail(_this.__myLogObj);
                            }
                        }
                    }
                }
            };

            xmlhttp.open("POST", host, true);
            xmlhttp.timeout = optVal.timeout;
            xmlhttp.ontimeout = function () {
                _this.bidderEndTime = new Date();
                var pDiff = (_this.bidderEndTime-_this.bidderStartTime);
                console.log(pDiff+'cd3 -> '+ClearTag_options.placementId+' -> '+ClearTag_options.adId);
                _this.__myLogObj.endtime=_this.__parent.getFormattedTime(_this.bidderEndTime);
                // We can not check for the response, because of the Ajax Process..
                if ( _this.__parent.timeout !== true && _this.__myLogObj.bidstatus == 'Request_Sent') {
                    _this.__myLogObj.bidresponse = {};
                    _this.__myLogObj.bidstatus = 'Partner_Timeout';
                    _this.__bidFail(_this.__myLogObj);
                }
            };
            xmlhttp.setRequestHeader('Content-Type', 'text/plain');
            xmlhttp.send(JSON.stringify(param));
        },
        __processResponse : function(respObj){
            var rObj = {};
            var bidRes = respObj.result.seatbid[0].bid[0];
            var exclArr = ['price', 'adm'];
            this.__parent.recursivelyIterateProperties(respObj, exclArr);
            if ( this.__parent.isValidNumber(this.__parent.bidExtInfo.id) !== true){
                this.__parent.bidExtInfo.id_str=this.__parent.bidExtInfo.id;
                this.__parent.bidExtInfo.id=0;
            }
            if ( this.__parent.isValidNumber(this.__parent.bidExtInfo.impid) !== true){
                this.__parent.bidExtInfo.impid_str=this.__parent.bidExtInfo.impid;
                this.__parent.bidExtInfo.impid=0;
            }

            var str = bidRes.adm;
            var repStr = bidRes.price;
            var nadm = str.replace(/\$\{AUCTION_PRICE\}/g,repStr);

            rObj = { "bidder": this.__bidder, "price": bidRes.price, "adm": nadm,
                "tracking_url": '', "click_url":'', "other_info": this.__parent.bidExtInfo
            };

            if ( typeof rObj.other_info !== 'undefined'){
                if ( typeof rObj.other_info.nurl !== 'undefined'){
                    rObj.other_info.nurl = rObj.other_info.nurl.replace(/\$\{AUCTION_PRICE\}/g,repStr);
                }
            }

            this.__parent.bidExtInfo = {};
            return rObj;
        },
        __bidComplete : function(respObj, logObj) {
            var result = {};
            result = this.__processResponse(respObj);
            logObj.bidresponse=result;
            this.__parent.bidResult.push(result);
            this.__bidLog(logObj);
        },
        __bidFail : function(logObj) {
            this.bidderEndTime = new Date();
            logObj.endtime = this.__parent.getFormattedTime(this.bidderEndTime);
            this.__bidLog(logObj);
        },
        __bidLog: function(logObj){
            if ( this.__parent.isPartnerLogged(this.__bidder) == false ) {
                var fObj = {};
                fObj = {"bidPartnerName": this.__bidder, "bidPartnerData": logObj};
                this.__parent.bidPartnersLog.push(fObj);
                this.__parent.bidBack(this.__bidder);
            }
        }
    }
};

ClearTagWQ.startProc();

/* Special Functions related to IFrame access....*/
function getTopIframes(){
    var topIframeNameArr = [];
    try{
        var topIframeArr = top.document.getElementsByTagName('IFRAME');
        for( var i=0 ; i<topIframeArr.length ; i++)
        {
            if(topIframeArr[i].id.trim() != '')
                topIframeNameArr.push(topIframeArr[i].id);
        }
    } catch (e){

    }
    return topIframeNameArr;
}

function inArray(needle, haystack) {
    var length = haystack.length;
    for(var i = 0; i < length; i++) {
        if(haystack[i] == needle) return true;
    }
    return false;
}
/* End.. Special Functions related to IFrame access....*/

function renderInDFP(ifrObject, type){
    if ( typeof  type === 'undefined' ) type = '';
    //if ( ClearTag_options.placementId == '1605301134874835' && dfpFrmName.trim() == ''){
    if ( dfpFrmName.trim() == ''){
        var ctResdoc_d = window.document;
    } else {
        var resIfrmEle = parent.document.getElementById(dfpFrmName);
        var ctResdoc_d = resIfrmEle.contentWindow.document;
    }

    var winHtmlGL = '', gParamDec='';
    if ( type !== 'adx' ){
        if ( ClearTagWQ.bidWinner.bidder.toLowerCase() === 'indexexchange'){
            winHtmlGL = '<script>var param = {"CampaignId":'+ClearTag_options.placementId+', "AdCallId":"'+ClearTag_options.adId+'", "encWinStr":"'+ClearTag_options.addInfo.encWinStr+'", "winLogUrl":"'+ClearTag_options.winLogUrl+'", "bidder":"'+ClearTagWQ.bidWinner.bidder+'", "price": '+ClearTagWQ.bidWinner.price+', "adm":"'+encodeURIComponent(ClearTagWQ.bidWinner.adm)+'"}; genWinNotificationIframe(param);</script>';
        }
        else
            winHtmlGL = renderWinNotificationGL();
    } else {
        gParamDec = 'var gparam = {"CampaignId":'+ClearTag_options.placementId+', "AdCallId":"'+ClearTag_options.adId+'"};';
    }
    content = '';

    ctResdoc_d.open();
    ctResdoc_d.write(content);
    ctResdoc_d.close();

    var tResContent = ifrObject.content+winHtmlGL;
    content = '<script>var inDapIF=true; console.log(\'Under Res[renderInDFP] : \'+document.domain);'+gParamDec+'</script>' + tResContent;
    ctResdoc_d.write(content);
    content = null;
}

function generateCreativeIframe(ifrObject, type){
    if ( typeof  type === 'undefined' ) type = '';
    var idStr = "ClearTag_"+ClearTag_options.placementId+"_Res";
    var ct_size_arr = ClearTag_options.size.split('x');
    var iframe = document.createElement('iframe');
    (iframe.frameElement || iframe).style.cssText = "border: 0; margin:0px;";
    if ( typeof ifrObject.source === 'undefined' ) {
        //iframe.src = "javascript:\"<html><body style='background:transparent; margin: 0px;'></body></html>\"";
        //iframe.src = "JavaScript:''";
    } else {
        iframe.src = ifrObject.source;
    }
    iframe.id = idStr;
    iframe.name = idStr;
    iframe.scrolling = "no";
    iframe.frameborder = "0px";
    iframe.width=ct_size_arr[0]+"px";
    iframe.height=ct_size_arr[1]+"px";

    attachIframe(idStr, iframe, ifrObject, type);
}
var content = '';
function attachIframe(idStr, iframe, ifrObject, type){
    var sVar = '';
    if ( document.body != null ) {
        sVar = setTimeout(function () {
            //serverCall1();
            var resIfrmEle = document.getElementById(idStr);
            if (resIfrmEle == null) {
                document.body.appendChild(iframe);
                resIfrmEle = document.getElementById(idStr);
                resIfrmEle.marginHeight = '0px';
                resIfrmEle.marginWidth = '0px';
                resIfrmEle.setAttribute('allowtransparency', 'true');
            } else {    }

            var winHtmlGL = '';
            if ( type !== 'adx' ){
                if ( ClearTagWQ.bidWinner.bidder.toLowerCase() === 'indexexchange')
                    winHtmlGL = '<script>var winLogUrl='+ClearTag_options.winLogUrl+'; var bidWinner = '+ClearTagWQ.bidWinner+'; console.log(bidWinner); parent.genWinNotificationIframe(winLogUrl, bidWinner);</script>';
                else
                    winHtmlGL = renderWinNotificationGL();
            }

            if (typeof ifrObject.content !== 'undefined') {
                var ctResdoc_d = resIfrmEle.contentWindow.document;
                content = '';
                if ( contentRendered === false ){
                    var tResContent = ifrObject.content+winHtmlGL;
                    content = '<script>var inDapIF=true; console.log(\'Under Res : \'+document.domain);</script> ' + tResContent;
                    ctResdoc_d.open();
                    ctResdoc_d.write(content);
                    ctResdoc_d.close();
                    content = null;
                }
                clearTimeout(sVar);
            } else {
                if (resIfrmEle.src == '' || resIfrmEle.src.indexOf("javascript:") > -1) {
                    resIfrmEle.src = ifrObject.source;
                }
            }
        }, 0);
    } else {
        setTimeout(function(){
            attachIframe(idStr, iframe, ifrObject, type);
        },500);
    }
}

var topIframe = false;
var curDoc = null;

function hideGoogleInsTag(){
    var ele = document.getElementsByTagName("ins")[0];
    if (typeof ele !== 'undefined') {
        ele.style.display = 'none';
    }
}

function isValidOrigin(event){
    var url = event.origin;
    if (typeof  ClearTagWQ.bidWinner['bidder'] === 'undefined' ){
        setTimeout(function(){
            isValidOrigin(event);
        },500);
    } else {
        processWinner(event);
    }
}

function processWinner(event){
    if ( typeof event === 'undefined')
        event ='';
    var idName = ClearTag_options.adId+ClearTagWQ.bidWinner.bidder;//For supporting auto refresh..
    if ( inArray(idName, WinAdCallIdArr) === false ){
        WinAdCallIdArr.push(idName);
        hideGoogleInsTag();
        ClearTagWQ.renderWinner();
    }
}

function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    }
    else {
        return null;
    }
}

function getDomain(url) {
    var hostName = getHostName(url);
    var domain = hostName;

    if (hostName != null) {
        var parts = hostName.split('.').reverse();
        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];
            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }
    return domain;
}

function displayFallBackTag(){
    var objIfrm = {};
    if ( ClearTag_options.cp_dTag.trim() != '' ){
        objIfrm.content = this.processDefaultTag(ClearTag_options.cp_dTag);
    } else {
        objIfrm.content = ClearTag_options.defCreative;
    }
    renderInDFP(objIfrm);
}

function getDynamicDetails(){
    var kParam = '', sParam = '', subParam = '';
    var retObj = {};
    var optData = '';

    if ( ClearTag_options.hasOwnProperty('addInfo')){
        optData = ClearTag_options.addInfo;
    }

    if ( typeof cp_keywords !== 'undefined'){
        retObj.keywords = cp_keywords;
    } else if ( typeof optData.keywords !== 'undefined'){
        retObj.keywords = optData.keywords;
    } else {
        retObj.keywords = '';
    }

    if ( typeof cp_sec_sub !== 'undefined'){
        if ( typeof cp_sec_sub.section !== 'undefined' ){
            retObj.section = cp_sec_sub.section;
        } else {
            retObj.section = '';
        }
        if ( typeof cp_sec_sub.subSection !== 'undefined' ){
            retObj.subsection = cp_sec_sub.subSection;
        } else {
            retObj.subsection = '';
        }
    }else if ( optData != '' ){
        if ( typeof optData.section !== 'undefined' ){
            retObj.section = optData.section;
        } else {
            retObj.section = '';
        }
        if ( typeof optData.subsection !== 'undefined' ){
            retObj.subsection = optData.subsection;
        } else {
            retObj.subsection = '';
        }
    } else {
        retObj.section = '';
        retObj.subsection = '';
    }
    return retObj;
}

function detectRefererURL(){
    var j = '';
    try {
        j = top.document.location.href;
    } catch (m) {
        if (parent) {
            try {
                j = parent.document.referrer;
            } catch (l) {}
        }
    }
    if (j == '' && opener) {
        try {
            j = opener.location.href;
        } catch (k) {}
    } else if ( j == '') {
        j = document.referrer;
    }
    return j || "";
}

function requestDomainParse(url) {
    var url_parse={};
    url_parse.host=url.toString().replace(/^(.*\/\/[^\/?#]*).*$/,"$1");
    url_parse.qstr=url.replace(url_parse.host, "");
    return url_parse;
}

function renderWinNotificationGL (){
    var ifrStr = '';
    var p='',r='';
    p=ClearTagWQ.bidWinner.bidder;
    r=ClearTagWQ.bidWinner.price;

    var ifrSrc = ClearTag_options.winLogUrl+'?k='+ClearTag_options.addInfo.encWinStr+'&n='+p+'&r='+r+'&aci='+ClearTag_options.adId;

    var ifrStr = '<iframe id="ClearTag_'+ClearTag_options.placementId+'_Win" name="ClearTag_'+ClearTag_options.placementId+'_Win" scrolling="no" marginwidth="0px" marginheight="0px" frameborder="0" style="border: 0px; margin: 0px;" width="1px" height="1px" src="'+ifrSrc+'"></iframe>';

    return ifrStr;
}

function RoundBidPriceNearest10Cents_event(bidprice){
    return Number(Number(bidprice).toFixed(1)).toFixed(2);
}

function getConnectionType()
{
    var connection_type = "";
    if(navigator.connection!=undefined && navigator.connection.type!=undefined)
    {
        connection_type=navigator.connection.type;
    }
    else if(navigator.mozConnection!=undefined && navigator.mozConnection.type!=undefined)
    {
        connection_type=navigator.mozConnection.type;
    }
    else if(navigator.webkitConnection!=undefined && navigator.webkitConnection.type!=undefined)
    {
        connection_type=navigator.webkitConnection.type;
    }
    return connection_type;
}