if(typeof(EZDATA) == 'undefined') { EZDATA = {}; }


ezQuery(document).ready(function(){    
    //Add click functionality to the description layovers of the more video section
    ezQuery(".ez-thumbs a",".ez-relatedMedia").each(function(){
        var thumb = ezQuery(this);
        thumb.attr("title", "");
        var desc = ezQuery(".ez-main .ez-desc", thumb.parent().parent());
        desc.bind("click", function(){
                window.location = thumb.attr("href");
        });
    });
	//dimensions for layover descriptions
    ezQuery(".ez-relatedMedia .ez-itemMod-item .ez-desc").each(function(){
        var hl = ezQuery(this);
        var tn = ezQuery(".ez-thumbs", hl.parent().parent());
        hl.css("width", (tn.width() - 10) + "px");
        hl.css("height", (tn.height() - 62) + "px");
    });
});


//Replace all specific characters in a string			
EZDATA.ReplaceAll = function(Source,stringToFind,stringToReplace) {
	var temp = Source;
    var index = temp.indexOf(stringToFind);
    while(index != -1){
        temp = temp.replace(stringToFind,stringToReplace);
        index = temp.indexOf(stringToFind);
    }
    return temp;			
}


EZDATA.searchMod_filters_init = function(){
    ezQuery(".ez-searchMod-filters .ez-mod-content").each(function() {
        var threshold = 6;
        var list = ezQuery(this);
        var filters = ezQuery(".ez-searchMod-filter-item", list);
        if (filters.length > threshold){
            var moreFilters = ezQuery(".ez-searchMod-filter-item:nth-child(n+"+ threshold + ")", list);
            moreFilters.addClass("expanded");
            
            var moreClick = "ezQuery('.expanded', ezQuery(this).parent().parent()).show(); ezQuery(this).parent().hide();return false;";
            list.append('<li href="#" class="ez-searchMod-filter-item ez-more"><a onclick="' + moreClick + '">More</a></li>');
            
            var lessClick = "ezQuery('.expanded', ezQuery(this).parent().parent()).hide(); ezQuery('.ez-more', ezQuery(this).parent().parent()).show(); return false;";
            list.append('<li href="#" class="ez-searchMod-filter-item ez-less expanded"><a onclick="' + lessClick + '">Less</a></li>');
        }
    });
};


EZDATA.searchPage_move_relatedVideos = function(q, link){
    var relatedVideos = ezQuery(".ez-sideContent .ez-itemMod.ez-relatedMedia");
    relatedVideos.insertAfter(ezQuery(".ez-mainContent .ez-itemMod-item:nth-child(2)"));
    
    var relatedVideosTitle = ezQuery(".ez-mainContent .ez-relatedMedia p.ez-title");
    relatedVideosTitle.html("<a href='"+ link +"'>Videos for <b>"+ q +"</b></a>");
};


EZDATA.searchPage_show_relatedVideos = function(){
    ezQuery(".ez-page-search-google .ez-itemMod.ez-relatedMedia").show();
};

// empty function for metaQ
EZDATA.metaQ_init = function() {};
