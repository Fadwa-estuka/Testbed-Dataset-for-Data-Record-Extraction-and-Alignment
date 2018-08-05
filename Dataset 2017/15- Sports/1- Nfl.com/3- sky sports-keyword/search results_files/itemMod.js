if(typeof(EZDATA) == 'undefined') { EZDATA = {}; }

/*
 * Initializes the video/audio highlights
 */
EZDATA.itemMod_init = function(sticky, scriptId){
    if (sticky.toLowerCase() == 'sticky'){
        sticky = true;
    }else{
        sticky = false;
    }
    
    var target = ezQuery(".ez-mod-content[scriptid=" + scriptId +"]");
    
    /* Add console configurable link parameters */
   if (EZDATA.itemUrlParameter != '') {
       var param = EZDATA.itemUrlParameter.substr(0,1) == "&" ? EZDATA.itemUrlParameter : "&" + EZDATA.itemUrlParameter;
       ezQuery(".ez-itemMod-item a", target).each(function(){
           var linkEl = ezQuery(this);
           var delim = linkEl.attr('href').indexOf("?") >= 0 ? "" : "?";
           linkEl.attr('href', linkEl.attr('href') + delim + param);
       });
       ezQuery(".ez-itemMod-item .ez-snippets .ez-highlight", target).each(function(){
           var linkEl = ezQuery(this);
           var delim = linkEl.attr('href').indexOf("?") >= 0 ? "" : "?";
           linkEl.attr('href', linkEl.attr('href') + delim + param);
       });
   }
   
    /* Switch the currently displayed snippet highlight */
    var switchTextHighlights = function(ts, item){
        var highlightText = ezQuery(".ez-highlight[ts='"+ ts +"']", item);
        if (highlightText.length == 0) return;
        
        // switch highlight
        highlightText.removeClass("ez-inactive");
        highlightText.removeClass("ez-hidden");
        highlightText.siblings().addClass("ez-hidden");
        
        // switch thumbnail
        var itemThumb = ezQuery(".ez-thumbs .ez-snippetThumb[ts='"+ ts +"']", item);
        itemThumb.removeClass("ez-hidden");
        itemThumb.siblings("img").addClass("ez-hidden");
        
        // make the markers active
        var indicator = ezQuery(".ez-snippetThumbIndicator[ts='"+ ts +"']", item);
        var timeStamp = ezQuery(".ez-timelinestamp[ts='"+ ts +"']", item);
        var timeThumb = ezQuery(".ez-timestamps .ez-snippetThumb[ts='"+ ts +"']", item);
        var markers = timeStamp.add(timeThumb);
        markers.addClass("ez-active").removeClass("ez-inactive");
        markers.siblings().removeClass("ez-active").removeClass("ez-inactive");
        
        indicator.addClass("ez-active").removeClass("ez-inactive");
        indicator.siblings().removeClass("ez-active").addClass("ez-inactive");
    };
    
    /* Hide the currently displayed snippet highlight */
    var hideTextHighlights = function(ts, item){
        var highlightText = ezQuery(".ez-highlight[ts='"+ ts +"']", item);
        if (highlightText.length == 0) return;
        
        // hide highlight
        highlightText.removeClass("ez-inactive");
        highlightText.addClass("ez-hidden");
        
        // show primary thumbnail
        ezQuery(".ez-thumbs .ez-snippetThumb", item).addClass("ez-hidden");
        ezQuery(".ez-thumbs .ez-primaryThumb", item).removeClass("ez-hidden");
        
        // activate primary indicator
        var indicator = ezQuery(".ez-snippetThumbIndicator", item);
        var timeStamp = ezQuery(".ez-timelinestamp", item);
        var timeThumb = ezQuery(".ez-timestamps .ez-snippetThumb", item);
        var markers = indicator.add(timeStamp).add(timeThumb);
        markers.removeClass("ez-active");
        indicator.addClass("ez-inactive");
        
        ezQuery(".ez-primaryThumbIndicator", item).addClass("ez-active").removeClass("ez-inactive");
    };
    
    /* Initialize the timeline markers/thumbs */
    ezQuery(".ez-itemMod-item .ez-timestamps", target).each(function(){
        var currentTimeline = ezQuery(this);
        var item = currentTimeline.parent().parent().parent();
        var timeStamps = ezQuery(".ez-timelinestamp", currentTimeline);
        
        if (timeStamps.length == 0){
            timeStamps = ezQuery(".ez-snippetThumb", currentTimeline);
        }
        
        timeStamps.each(function(){
            var stamp = ezQuery(this);
        
            stamp.bind("mouseover", function(){
                switchTextHighlights(stamp.attr("ts"), item);
            });
            
            if (!sticky){
                hideTextHighlights(stamp.attr("ts"), item);
                
                stamp.bind("mouseout", function(){
                    hideTextHighlights(stamp.attr("ts"), item);
                });
            }
        });
        
        if (sticky) {
            switchTextHighlights(ezQuery(timeStamps[0]).attr("ts"), item);
        }
    });
    
    /* Initialize the thumb indicators */
    ezQuery(".ez-itemMod-item .ez-snippetThumbIndicators", target).each(function(){
        var item = ezQuery(this).parent().parent();
        var indicators = ezQuery(".ez-snippetThumbIndicator", this);
        
        indicators.each(function(){
            var stamp = ezQuery(this);
            
            stamp.bind("mouseover", function(){
                switchTextHighlights(stamp.attr("ts"), item);
            });
            
            stamp.bind("click", function(){
                EZDATA.trackGaEvent(EZDATA.pageName, 'navigation', ezQuery(".ez-main .ez-title", item).attr("galabel"));
                location.href = ezQuery(".ez-highlight[ts='"+ stamp.attr("ts") +"']", item).attr("href");
            });
            
            if (!sticky){
                stamp.bind("mouseout", function(){
                    hideTextHighlights(stamp.attr("ts"), item);
                });
            }
        });
        
        var primaryIndicator = ezQuery(".ez-primaryThumbIndicator", this);
        
        var primaryMouseOver = function(){
            var primaryThumb = ezQuery(".ez-primaryThumb", item);
            primaryThumb.removeClass("ez-hidden");
            primaryThumb.siblings("img").addClass("ez-hidden");
            
            var timeStamp = ezQuery(".ez-timelinestamp.ez-active", item);
            var timeThumb = ezQuery(".ez-timestamps .ez-snippetThumb.ez-active", item);
            
            if (timeStamp.length > 0){
                var ts = timeStamp.attr("ts");
            }else{
                var ts = timeThumb.attr("ts");
            }
            
            var highlight = ezQuery(".ez-highlight[ts='"+ ts +"']", item);
            var markers = timeStamp.add(timeThumb).add(highlight).add(indicators);
            
            markers.removeClass("ez-active").addClass("ez-inactive");
        };
        
        primaryIndicator.bind("mouseover", primaryMouseOver);
        primaryIndicator.bind("click", function(){
            EZDATA.trackGaEvent(EZDATA.pageName, 'navigation', ezQuery(".ez-main .ez-title", item).attr("galabel"));
            location.href = ezQuery(".ez-main .ez-title", item).attr("href");
        });
        
        if (sticky) {
            primaryMouseOver();
        }
    });
    
    /* bind highlight click events */
    if (sticky) {
        ezQuery(".ez-itemMod-item .ez-highlight", target).each(function(){
            var item = ezQuery(this).parent().parent().parent().parent();
            var gaLabel = ezQuery(".ez-main .ez-title", item).attr("galabel");
            
            ezQuery(this).bind("click", function(){
                EZDATA.trackGaEvent(EZDATA.pageName, 'navigation', gaLabel);
                location.href = ezQuery(this).attr("href");
            });
        });
    }
                
    //video & audio thumb overlays
    ezQuery(".ez-Video .ez-thumbs a", target).each(function() {
        var ah = ezQuery(this).height();
        ezQuery('<div class="ez-plainOverlay"></div>').appendTo(ezQuery(this));
        ezQuery(".ez-plainOverlay", ezQuery(this)).css("height", ah + "px");
    });   
    ezQuery(".ez-Audio .ez-thumbs a", target).each(function() {
        var ah = ezQuery(this).height();
        ezQuery('<div class="ez-plainOverlay"></div>').appendTo(ezQuery(this));
        ezQuery(".ez-plainOverlay", ezQuery(this)).css("height", ah + "px");
    });     

};



/* 
 * Truncates the snippets around the keyword and optionally adds prefix/postfix
 * There should only be bold tags (keywords) inside the ez-highlight elements
 */
EZDATA.itemMod_truncate = function(maxLen, prefix, postfix){
    maxLen = parseInt(maxLen, 10);
    if (isNaN(maxLen)){
        maxLen = 160;
    }
    
    if (prefix == null || prefix.length == 0){
        prefix = "&#8220;&#8230;";
    }
    if (postfix == null || postfix.length == 0){
        postfix = "&#8230;&#8221;";
    }
    
    ezQuery(".ez-itemMod-item .ez-highlight").each(function(){
        var content = this.innerHTML;
        content = content.replace(/<B/g, '<b');
        content = content.replace(/<\/B>/g, '</b>');
        
        var text = ezQuery(this).text();
        
        if (text.length > maxLen) {
            var i = content.indexOf('<b');
            var j = content.indexOf('</b>');
            
            var pre = content.slice(0, i);
            pre = pre.slice(-1 * maxLen / 2);
            pre = pre.replace(/^[a-z0-9.]* /i, '');
            
            var post = content.slice(i, content.length);
            
            var targetPostLen = maxLen - pre.length;
            var targetPostText = text.slice(i, targetPostLen + i);
            targetPostText = targetPostText.replace(/&amp;/g, '&');
            
            var elemLen = 0;
            var buf = post;
            buf = buf.replace(/&amp;/g, '&');
            
            while (buf.indexOf(targetPostText) == -1) {
                var i = buf.indexOf('<');
                var j = buf.indexOf('>');
                elemLen += j - i + 1;
                
                buf = buf.slice(0, i) + buf.slice(j + 1, buf.length);
            }
            
            post = post.slice(0, targetPostLen + elemLen);
            post = post.replace(/[a-z0-9<>]+$/i, '');
            
            var newContent = pre + post;
            newContent = ezQuery.trim(newContent);
            
            this.innerHTML = newContent;
        }
        
        this.innerHTML = prefix + this.innerHTML + postfix;
    });
};
