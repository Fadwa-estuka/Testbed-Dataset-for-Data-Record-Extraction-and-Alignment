// updated 9/23/14 2:00pm by ML
// previously 7/16/14 10:24am by EB

//var currentheader = "todaytab";

$(document).ready(function() {

MedscapeTodayBucket();

	$("#edmenu a").each(function() {
        var edurl = $(this).attr('href');
		if (edurl.indexOf("org") == "-1") {
			var nedurl = "http://www.medscape.org" + edurl;
			$(this).attr('href',nedurl);
		}
	});

	changeSeachDB('searchdbtext', "News");
	$("#searchdbvalue").val("1");

	$('#searchtextinput2').attr('value','Search Medscape News');

	$("form[name=SearchFormFooter] input[name=newSearchFooter]").val('1');
	$("form[name=SearchFormFooter]").attr('action','http://search.medscape.com/news-search');
	
	newsTwitter();
	
	/*Comment count for homepage Buckets*/
	LF.CommentCount({
		replacer: function(element, count) {
			if(count !=0) {
				element.innerHTML = count +'&nbsp;comment'+ (count === 1 ? '' : 's');
				$(element).closest("li").children().slice(-2).wrapAll("<div class=\"bylineWrapper\"></div>");
			}
		}
	});
	
});

function submitToSearchFormHeader() {
	document.forms.SearchFormHeader.submit();
}
function submitToSearchFormFooter() {
	document.forms.SearchFormFooter.action="http://search.medscape.com/news-search";
	document.forms.SearchFormFooter.newSearchFooter.value="1";
	setTimeout("document.forms.SearchFormFooter.submit();", 250);
}

function rotator(rotateID) {
	var rotatorTotal = $('ul#'+rotateID+' li').size();
	$('#'+rotateID).css({'width':rotatorTotal*300+'px'});
	$('#rotator_totalli').html(rotatorTotal);
	$('#rotator_thisli').html('1');
	for(y=0;y<rotatorTotal;y++) {
		$('#rotator_image').append('<span id="rotatorli'+(y+1)+'" class="totalli"></span>');
	}
	$('#rotatorli1').addClass('thisli');
	
	$('#rotate_left').click(function() {
		if ($(this).hasClass('rotate_btn-dis')) {
			return }
		else {
			var thisli = parseInt($('#rotator_thisli').html())-1;
			$('#rotator_thisli').html(thisli);
			$('.thisli').removeClass('thisli');
			$('#rotatorli'+thisli).addClass('thisli');

			$('ul#right_rotator').animate({"left": "+=300px"}, "slow");
			if (thisli != rotatorTotal) {
				$('#rotate_right').removeClass('rotate_btn-dis');
			}
			if (thisli == '1') {
				$('#rotate_left').addClass('rotate_btn-dis');
			} else {
				$('#rotate_left').removeClass('rotate_btn-dis');
			}
		}
	});
	
	$('#rotate_right').click(function() {
		 if ($(this).hasClass('rotate_btn-dis')) {
			 return }
		else {
			var thisli = parseInt($('#rotator_thisli').html()) + 1;
			$('#rotator_thisli').html(thisli);
						$('.thisli').removeClass('thisli');
			$('#rotatorli'+thisli).addClass('thisli');

			$('ul#right_rotator').animate({"left": "-=300px"}, "slow");
			if (thisli != 0) {
				$('#rotate_left').removeClass('rotate_btn-dis');
			}
			if (thisli == rotatorTotal) {
				 $('#rotate_right').addClass('rotate_btn-dis');
			} else {
				$('#rotate_right').removeClass('rotate_btn-dis');
			}
		} 
	});
}



function MedscapeTodayBucket () {
//PHASE 0: Check for page type
var pageTypeCheckA = $('#topNews').attr('data-type');
if (typeof pageTypeCheckA !== 'undefined' && pageTypeCheckA !== false) {
    var pageTypeFlag = $('#topNews').attr("data-type");
}
var pageTypeCheckB = $('#specialtyNews').attr('data-type');
if (typeof pageTypeCheckB !== 'undefined' && pageTypeCheckB !== false) {
    var pageTypeFlag = $('#specialtyNews').attr("data-type");
}



//PHASE 1: Make an array of all id's on the page less the todayFeed class
var idArray = [];
$('.bucketContent .title').each(function () {
    if (!$(this).closest('.todayFeed').length) {
        articleId = $(this).attr('href');
        var parts = articleId.split("/");
        var lastpart = parts[parts.length - 1];

        if (Math.floor(lastpart) == lastpart && $.isNumeric(lastpart)) {
            return idArray.push(lastpart);
        } else {
            var lastpart = articleId.split(".com");
            var lastpart = lastpart[1];
            return idArray.push(lastpart);
        }
    }
});


//PHASE 1.5: empty the idArray for non-duped pages
if (pageTypeFlag == "news") {
var idArray ='';
};





//PHASE 2: Remove Duplicates from todayFeed and Create topNews & perspective Arrays
var topNewsArray = [];
var featureFlag = 0;
$('.todayFeed #topNews .title').each(function () {
    articleId = $(this).attr('href');
    var parts = articleId.split("/");
    var lastpart = parts[parts.length - 1];
    if (Math.floor(lastpart) == lastpart && $.isNumeric(lastpart)) {} else {
	var pattern = /.com/;
	var exists = pattern.test(articleId);
        if (exists) {
            var lastpart = articleId.split(".com");
            var lastpart = lastpart[1];
        } else {
            var lastpart = articleId;
        }
    }
    if ($.inArray(lastpart, idArray) != -1) {
        var index = ($(this).closest("li").index(".todayFeed #topNews li"))
        if (index == 0) {
            featureFlag = 1;
        }
        $(this).closest("li").remove();
    } else {
        return topNewsArray.push($(this).closest("li").html());
    }
});
var perspectiveArray = [];
$('.todayFeed #perspective .title').each(function () {
    articleId = $(this).attr('href');
    var parts = articleId.split("/");
    var lastpart = parts[parts.length - 1];
    if (Math.floor(lastpart) == lastpart && $.isNumeric(lastpart)) {} else {
	var pattern = /.com/;
	var exists = pattern.test(articleId);
        if (exists) {
            var lastpart = articleId.split(".com");
            var lastpart = lastpart[1];
        } else {
            var lastpart = articleId;
        }
    }
    if ($.inArray(lastpart, idArray) != -1) {
        var index = ($(this).closest("li").index(".todayFeed #perspective li"))
        if (index == 0) {
            featureFlag = 0;
        }
        $(this).closest("li").remove();
    } else {
        return perspectiveArray.push($(this).closest("li").html());
    }
});





//PHASE 3: Print the Articles



var specialLayoutArr = [];
var typicalLayoutArr = [];

// Typical Homepage Layout
if (pageTypeFlag == "news perspective") {
       var totalEmptyLi = (($("#topNews .bucketContent").find("li").length) - 1)


   if (featureFlag > 0) {
   	var newsNum = 0;
   	var persNum = 1;
   	($("#topNews .bucketContent").find("li").eq(0)).html(perspectiveArray[0]);
   	typicalLayoutArr.push("FirstArticlePlaceholder");
   	for (var z = 0; z < (totalEmptyLi); z++) {
   		var x = z % 2;
   		if (x == 1) {
   			typicalLayoutArr.push(topNewsArray[newsNum]);
   			newsNum++;
   		}
   		else {
   			typicalLayoutArr.push(perspectiveArray[persNum]);
   			persNum++;
   		}
   	}
   }

   else {
   	var newsNum = 1;
   	var persNum = 0;
   	($("#topNews .bucketContent").find("li").eq(0)).html(topNewsArray[0]);
   	typicalLayoutArr.push("FirstArticlePlaceholder");
   	for (var z = 0; z < (totalEmptyLi); z++) {
   		var x = z % 2;
   		if (x == 0) {
   			typicalLayoutArr.push(perspectiveArray[persNum]);
   			persNum++;
   		}
   		else {
   			typicalLayoutArr.push(topNewsArray[newsNum]);
   			newsNum++;
   		}
   	}
   }

   for (var i = 1; i < ((typicalLayoutArr).length); i++) {
   	($("#topNews .bucketContent").find("li").eq(i)).html(typicalLayoutArr[i]);
   }
};



// Special Homepage Layout
if (pageTypeFlag == "news") {
    var totalEmptyLi = (($("#specialtyNews").find("li").length) - 1)
	if ($("#specialtyNews .callout").find("li").length > 0) {
		var i = $("#specialtyNews .callout").find("li").length;
		var totalEmptyLi = totalEmptyLi - i;
	}


   ($("#specialtyNews .topFeature").find("li").eq(0)).html(topNewsArray[0]);
   specialLayoutArr.push("FirstArticlePlaceholder");
   	for (var z = 0; z < (totalEmptyLi); z++) {
   		x = z+1;
   		specialLayoutArr.push(topNewsArray[x]);
   	}

   	for (var i = 1; i < ((specialLayoutArr).length); i++) {
		h = i-1;
   		($("#specialtyNews .split").find("li").eq(h)).html(specialLayoutArr[i]);
   	}
};


//PHASE 4: Remove todayFeed
$(".todayFeed").remove();
}


//Twitter Homepage Widget / Landing Page Functions
function newsTwitterObj(target, length, feedId, maxInitLen, moreLink) {
	var self = this;
	if (typeof target == 'undefined') {
		this.target = '.tweets';
	}
	else {
		this.target = target;
	}
	if (typeof length == 'undefined') {
		this.length = 50;
	}
	else {
		this.length = Number(length);
	}
	if (typeof maxInitLen == 'undefined') {
		this.maxInitLen = 5;
	}
	else {
		this.maxInitLen = Number(maxInitLen);
	}
	if (typeof moreLink == 'undefined') {
		this.moreLink = '#twitter .bucketFooter .morelink a';
	}
	else {
		this.moreLink = moreLink;
	}
	this.ajaxError = function(data, status) {
		if (status != 'success') {
			if ($('#headerbox').hasClass('homestar')) {	
				$('#twitter').hide();
			}
			else {
				$('.morelink').remove();
				$('ul.tweets').html('<li class="tweetfeederror"><div>We are currently unable to load this content. Please try again later.</div></li>');
			}
		}
	};
	this.checkEnv = function() {
		var envChk = "";
		if (window.location.href.indexOf(".staging.") != -1) {
			envChk = ".staging";
		}
		else if (window.location.href.indexOf(".proddev.") != -1) {
			envChk = ".proddev";
		}
		if (window.location.href.match(/\.qa\d\d/) != null) {
			envChk = envChk + window.location.href.match(/\.qa\d\d/)[0];
		}
		return envChk;	
	};
	if (typeof feedId != 'undefined') {	
		this.feed = 'http://api' + this.checkEnv() + '.medscape.com/medpulseservice/lists/statuses.json?list_id=' + feedId + '&count=' + this.length + '&callback=?';
	}
	else {
		this.feed = 'http://api' + this.checkEnv() + '.medscape.com/medpulseservice/lists/statuses.json?list_id=99914103&count=' + this.length + '&callback=?';
	}
	this.parseTwitter = function(data) {
		$('#news.threeCol #left .bucket#twitter, #news.twoCol.twitter #left .bucket#twitter .bucketFooter .morelink').show();
		$(data).each(function(idx) {
				var thisTweet = this;
				if (idx >= self.length) {
					return false;
				}
				var tweetSrc = this;
				if (typeof this.retweeted_status != 'undefined')
				{
					tweetSrc = this.retweeted_status;
				}
				var dateParse = tweetSrc.created_at.split(' ');
				var twitTime = Math.round((new Date().getTime() - new Date(Date.parse(dateParse[1]+" "+dateParse[2]+", "+dateParse[5]+" "+dateParse[3]+" UTC")).getTime())/60000);
				if (twitTime > 59 && twitTime < 1440) {
					twitTime = Math.floor(twitTime/60) + 'h';
				}
				else if (twitTime > 1439) {
					twitTime = tweetSrc.created_at.split(' ')[1] + ' ' + tweetSrc.created_at.split(' ')[2];
				}
				else {
					twitTime = twitTime + 'm';
				}
				
				var tweetText = tweetSrc.text;
				
				var twtOmniPrfx = "hp-news";
				
				if (window.location.href.indexOf("/cardiology") != -1) {
					twtOmniPrfx = "hp-card";
				}
				
				$(tweetText.match(/@\w+/g)).each(function() {
					tweetText = tweetText.replace(this, '<a href="https://twitter.com/' + this.split('@')[1] + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tmisc\')">' + this + '</a>');
				});		

				$(tweetText.match(/#\w+/g)).each(function() {
					if (this.split('#')[1].match(/\D/g) != null)
					{
						tweetText = tweetText.replace(this, '<a href="https://twitter.com/search?q=' + this.split('#')[1] + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tmisc\')">' + this + '</a>');
					}
				});
				
				$(tweetSrc.entities.urls).each(function() {
					var self = this;
					$(tweetText.match(this.url)).each(function() {
						tweetText = tweetText.replace(this, '<a href="' + this + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tmisc\')">' + self.display_url + '</a>');
					});
				});
				
				$(tweetSrc.entities.media).each(function() {
					var self = this;
					$(tweetText.match(this.url)).each(function() {
						tweetText = tweetText.replace(this, '<a href="' + this + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tmisc\')">' + self.display_url + '</a>');
					});
				});
				
				var tweetLink = '<li><div class="thumbnail"><a href="' + this.resolvedUrl + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tlink\')"><img src="http://api' + self.checkEnv() + '.medscape.com/medpulseservice/' + this.thumbnailUrl + '" alt="' + this.article_title + '" /></a></div> <div class="text"> <div class="content"> <div class="articleInfo"> <div class="articleTitle"><a href="' + this.resolvedUrl + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tlink\')">' + this.article_title + '</a></div> <div class="domainName"><a href="' + this.resolvedUrl + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tmisc\')">' + this.domainName + '</a></div> </div> <div class="tweet"> <div class="timestamp"><a href="http://twitter.com/' + tweetSrc.user.screen_name + '/status/' + tweetSrc.id_str + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tmisc\')">' + twitTime + '</a></div> <div class="user"> <div class="profileImg"><a href="https://twitter.com/' + tweetSrc.user.screen_name + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tmisc\')"><img src="' + tweetSrc.user.profile_image_url + '" alt="' + tweetSrc.user.name + '" /></a></div> <div class="fullName"><b><a href="https://twitter.com/' + tweetSrc.user.screen_name + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tmisc\')">' + tweetSrc.user.name + '</a></b></div> <div class="userHandle"><a href="https://twitter.com/' + tweetSrc.user.screen_name + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tmisc\')"><span class="at">@</span>' + tweetSrc.user.screen_name + '</a></div> <div class="spacer"></div> </div> <div class="tweetText">' + tweetText + '</div> </div> </div> <ul class="tweetActions"> <li class="reply"><a href="https://twitter.com/intent/tweet?in_reply_to=' + tweetSrc.id_str + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_trply\')"><span>Reply</span></a></li> <li class="retweet"><a href="https://twitter.com/intent/retweet?tweet_id=' + tweetSrc.id_str + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_retwt\')"><span>Retweet</span></a></li> <li class="favorite"><a href="https://twitter.com/intent/favorite?tweet_id=' + tweetSrc.id_str + '" onclick="wmdPageLink(\'' + twtOmniPrfx + '_tfav\')"><span>Favorite</span></a></li> </ul> </div> <div class="spacer"></div></li>';
				
				if (typeof this.article_title == 'undefined')
				{
					tweetLink = tweetLink.replace(/<div class="articleInfo">.+<div class="tweet">/,'<div class="tweet">');
				}
				if (typeof this.retweeted_status != 'undefined')
				{
					tweetLink = tweetLink.replace('</div> <ul class="tweetActions">','<div class="retweetedBy">Retweeted by ' + this.user.name + '</div> </div> <ul class="tweetActions">');
				}			
				if (idx >= self.maxInitLen)
				{
					tweetLink = tweetLink.replace('<li>','<li style="display: none;">');
				}
				
				$(self.target).append(tweetLink);
				$(self.target).find('.tweetText:last').on('click', {'tweetSrc': tweetSrc, 'twtOmniPrfx': twtOmniPrfx}, function(event) {
					wmdPageLink(event.data.twtOmniPrfx + '_tmisc');
					window.location.href = 'http://twitter.com/' + event.data.tweetSrc.user.screen_name + '/status/' + event.data.tweetSrc.id_str;
				});
		});
		
		if ($('#headerbox').hasClass('homestar')) {	
			$('.tweets .thumbnail img').each(function() {
				if (this.offsetTop == 0 && $(this).height() > $('.thumbnail').height()) {
					$(this).css('margin-top','-' + Math.floor(($(this).height() - $('.thumbnail').height())/2) + 'px');
				}
			});
			$('.tweets a').each(function() {
				if ($(this).width() >= $('.tweets').width()) {
					this.innerHTML = this.innerHTML.substr(0,(Math.floor((1/($(this).width()/($('.tweets').width() - 12)))*this.innerHTML.length)) - 3) + '&#133;';
				}
			});
		}
		
		$('.tweetText a').click(function(event) {
			event.stopPropagation();
		});

		if ($('#headerbox').hasClass('homestar') == false) {
			$(self.moreLink).click(function() {
				$(self.target + ' li').show();
				$(self.moreLink).hide();
			});
		}
		
	};
		
	$.ajax({
		url: this.feed,
		dataType: "json",
		success: this.parseTwitter,
		complete: this.ajaxError,
		timeout: 2000
	});
}

function newsTwitter() {	
	/* Twitter - check if homepage or landing page and if Cardiology, swap feed */
	if ($('#headerbox').hasClass('homestar')) {
		if ($('#headerbox').hasClass('cardiology')) {
			var twitFeed = new newsTwitterObj('.tweets', 2, 99914189, 2);
		}
		else {
			var twitFeed = new newsTwitterObj('.tweets', 2, undefined, 2);
		}
	}
	else if (window.location.href.indexOf("/twitter/cardiology") != -1) {
		var twitFeed = new newsTwitterObj('.tweets', 50, 99914189, 5);
	}
	else if (window.location.href.indexOf("/twitter") != -1) {
		var twitFeed = new newsTwitterObj('.tweets', 50, undefined, 5);
	}
}