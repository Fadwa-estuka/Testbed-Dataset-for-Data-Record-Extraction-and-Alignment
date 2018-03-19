window.addEventListener("message", receiveMessage, false);

/************** NEW FUNCTIONS..**************/
function genWinNotificationIframe(param){
    var idStr='ClearTag_'+param['CampaignId']+'_'+param['AdCallId']+'_Win';
    var ifrSrc = param['winLogUrl']+'?k='+param['encWinStr']+'&n='+param['bidder']+'&r='+param['price']+'&aci='+param['AdCallId'];
    var winIframe = document.createElement('iframe');
    (winIframe.frameElement || winIframe).style.cssText = "border: 0; margin:0px;";
    winIframe.src = ifrSrc;
    winIframe.id = idStr;
    winIframe.name = idStr;
    winIframe.scrolling = "no";
    winIframe.frameborder = "0px";
    winIframe.width="1px";
    winIframe.height="1px";
    attachWinIframe(winIframe);
}

function attachWinIframe(winIframe){
    if ( document.body != null ) {
        setTimeout(function () {
            document.body.appendChild(winIframe);
        }, 0);
    } else {
        setTimeout(function(){
            attachWinIframe(winIframe);
        },500);
    }
}

function resizeDFPIframe() {
    try {
        var topIframes = top.document.getElementsByTagName('IFRAME');
        for (var i = 0; i < topIframes.length; i++) {
            if (topIframes[i].contentWindow == self) {
                if ( typeof hVar !== 'undefined' && typeof hVar !== 'undefined' ){
                    topIframes[i].style.height = hVar + 'px';
                    topIframes[i].style.width = wVar + 'px';
                } else { //Special case where we don't have height and width as a response from partner, like INDEX...
                    if ( window.document.body != null ){
                        topIframes[i].style.height = window.document.body.scrollHeight + 'px';
                        topIframes[i].style.width = window.document.body.scrollWidth + 'px';
                    } else {
                        setTimeout(function (ele) {
                            resizeDFPIframe();
                        }, 0);
                    }
                }
            }
        }
    } catch (e) {
        console.log('in catch...resizeDFPIframe...' );
    }
}
/************** NEW FUNCTIONS..**************/

function receiveMessage(event){
    var allowedDomains = ['clearpier.com','clrsrv.com'];
}

var allowOnLoad = true;
var topIframeNames = [], auctionType = '', checkFrameNames = [];
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
        topIframeNameArr.push(parent.parent.name);
    }
    return topIframeNameArr;
}

window.onload = function() {
    initVars();
    if ( allowOnLoad ) {
        if (topIframeNames.length > 0) {
            if ( typeof wVar === 'undefined' )
                wVar = document.body.scrollWidth;
            if ( typeof hVar === 'undefined' )
                hVar = document.body.scrollHeight;
            cpCommon.initResizeCall(auctionType, checkFrameNames, topIframeNames, wVar, hVar);
        }
    }
};

function initVars(){
    topIframeNames = getTopIframes();
    if (typeof ClearTag_options !== 'undefined') {
        checkFrameNames = ["ClearTag_" + ClearTag_options.placementId + "_Req", "ClearTag_" + ClearTag_options.placementId + "_Res"];
        auctionType = cp_auctionType;
    } else if (typeof parent.ClearTag_options !== 'undefined') {
        checkFrameNames = ["ClearTag_" + parent.ClearTag_options.placementId + "_Req", "ClearTag_" + parent.ClearTag_options.placementId + "_Res"];
        auctionType = parent.cp_auctionType;
    } else {
        allowOnLoad = false;
        resizeDFPIframe();
    }
}