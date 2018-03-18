(function($){
    function ___loadFeedback(cb) {
    	if (typeof feedBack === "undefined"){
    		head.js("/static/js/feedback.jq.2.js", cb);
    	} else {
    		cb();
    	}
    }
    window.___loadFeedback = ___loadFeedback;    
})(jQuery);


(function($){  
function subscribe(type, subscriptionId, button, successcallback ) {
  // assume we're subscribing someone, unless we're told to unsubscribe them:
  var action = 'ADD';
  var el = $(button);
  if (el.hasClass('subscribeState')) {/*action is already add by default*/;}
  if (el.hasClass('unsubscribeState') || el.data('subscribed') == 1) {action = "REMOVE"}
  if (el.is('input')) {
      // the old way of doing this needs an input to be modified here instead of using the callback
      // this method was abandoned because the new buttons needed icons and fancy changes; those behaviors are
      // moved to the page on which the buttons appear.
      el.val("following");
      el.attr("disabled", "true");
      el.addClass("disabled");
      el.fadeIn(100);
      el.click(function(){return false;});
  }
  $.ajax('/you/subscriptions/',{
      type: 'POST',
      data: {
          subscriptionId: subscriptionId,
          type : type,
          posted: new Date().getTime(),
          action: action
      },
      success: successcallback,
      error: function( jqXHR ) {
          ___loadFeedback(function() {feedBack.addFromJSON( jqXHR.responseText );});
      }
  });
}

function removeInstructableFrom(entryID,action,selectElement) {
    var arrRemoveFromIds = [];
    if (selectElement.value === 'ALL') {
        $(selectElement).children().each(function(){
            var value = $(this).attr('value');
            if (value !== 'ALL' && value !== '') {
                arrRemoveFromIds.push(value)
            };
        });
    } else {
        arrRemoveFromIds.push(selectElement.value);
    }

    var params = "?entryID=" + entryID + "&action=" + action ;
    for (var i=0; i<arrRemoveFromIds.length; i++){
        params += "&removeFromID=" + arrRemoveFromIds[i];
    }

    $.ajax({
        url: '/ajax/ajaxContestGroupHandler' + params,
        success: function(t){
            ___loadFeedback(function() {
                feedBack.add( t  );
            });

            // remove removed groups from dropdown too
            $(selectElement).children().each(function(){
                var value = $(this).attr('value');
                for (var i=0; i<arrRemoveFromIds.length; i++){
                    if (value === arrRemoveFromIds[i]) {
                        $(this).remove();
                    }
                }
            });

            // if there are no more groups, remove the whole dropdown
            if ($(selectElement).children().size() === 2 ) {
                $(selectElement).remove();
            }
        },
        error: function(t){
            ___loadFeedback(function() {feedBack.add( t.status + ' -- ' + t.statusText  );});
        }
    });
}

function convertToPhotoInstructable( objScr, instructableId, publishDate ) {
	var oldText = objScr.value;
	objScr.value = objScr.value + ' - Wait...';
	var params = {entryId: instructableId, posted: new Date().getTime()};
	if(publishDate){
		params.publishDate = publishDate;
	}

    $.post('/edit/convertToPhotoInstructable',params, function(t){
	    	___loadFeedback(function() {
                objScr.value = oldText;
	    	    objScr.style.color = 'green';
                feedBack.add( t  );
            });
    }).error(function(t){
        ___loadFeedback(function() {feedBack.add( t.status + ' -- ' + t.statusText  );});
    });
}

function addToGuide( guideId, instructableId ) {
  $.ajax( '/edit/guideAdd', {
      type: 'POST',
      data : {
          guideId: guideId,
          instructableId: instructableId,
          posted: new Date().getTime()
      },
      success: function( data ) {
          ___loadFeedback(function() {feedBack.add(data);});
      },
      error: function( jqXHR, statusText, errorThrown ) {
          ___loadFeedback(function() {feedBack.add( jqXHR.status + ' -- ' + errorThrown );});
      }
  } );
}

function ManageQuarantineEntry(params,obj) {
  if(obj){
      $(obj).css('color', '#00cc00');
  }

  params['posted'] = new Date().getTime();

  $.ajax('/admin/quarantine', {
      data: params,
      type: 'POST',
      dataType: 'json',
      success: function( data ) {
          ___loadFeedback(function() {feedBack.addFromJSON(data);});
      },
      error: function( jqXHR, statusText, errorThrown ) {
          ___loadFeedback(function() {feedBack.add( jqXHR.status + ' -- ' + errorThrown );});
      }
  });
}

function deleteAllOfStatusByAuthor(userid, status) {
  var params = {
    action: 'DELETE_ALL_BY_USER',
    userId: userid,
    status: status,
    posted: new Date().getTime()
  };

  if (confirm("Are you sure you want to delete ALL of this user's " + status +
      " Forum Topics, Questions, Comments and Answers?")) {
       $.ajax('/admin/quarantine', {
        data: params,
        type: 'POST',

        success: function( data ) {
          ___loadFeedback(function(){feedBack.add("Successfully set all author's entries as 'DELETED'");});
        },
        error: function( jqXHR, statusText, errorThrown ) {
          ___loadFeedback(function(){feedBack.add("Error deleting author's entries.");});
        }
      });
  }
}
	
function limboAllInstructablesByAuthor(userid){
  var params = {
    userId: userid,
    posted: new Date().getTime()
  }

  if (confirm("Are you sure you want to set ALL of this user's " +
        "Instructable(s) to LIMBO?")) {
      $.ajax('/admin/limboAllInstructablesByAuthor', {
        data: params,
        type: 'POST',
        success: function( data ) {
          ___loadFeedback(function(){feedBack.addFromJSON($.parseJSON(data));});
        },
        error: function( jqXHR, statusText, errorThrown ) {
          ___loadFeedback(function(){feedBack.add(jqXHR.status + ' -- ' + errorThrown );});
        }
      });
  }
}
	
function MarkEntrySticky( entryID, type, stickyChk ) {
  var params = '';
  var urlvalue = '';
  var chboxvalue = "";
  if( stickyChk.checked ) {
      params = "entryID=" + entryID
              + "&type=" + type;
      chboxvalue = 'on';
  }
  else {
      params = "entryID=" + entryID
              + "&type=" + type;
      chboxvalue = 'off';
  }

  $.ajax('/ajax/sticky', {
      data: params,
      type: 'POST',
      success: function( data ) {
          ___loadFeedback(function() {
              if( chboxvalue == 'on' ) {
                  feedBack.add("Sticky mark is set successfully.");
              }
              else if( chboxvalue == 'off' ) {
                  feedBack.add("Sticky mark is unset successfully.");
              }
          });
      },

      error: function( jqXHR, statusText, errorThrown ) {
          ___loadFeedback(function() {
            feedBack.clear ();
            feedBack.add (jqXHR.status + ' -- QUESTION objects are not sticky-able ' + errorThrown);
          });
      }
  });
}

function resetEntryURL(entryId, entryType){
    $.post("/edit/resetURL?entryId="+entryId+"&categoryString=" + entryType, function(data){
      ___loadFeedback(function() {
            feedBack.addFromJSON($.parseJSON(data), 'feedback', 3000);
            setTimeout(function(){location.reload();},2000);
          });
    });
}

function ApproveEntryAs(entryID, featureChk) {
    var params='';
    var chboxvalue="";
    if (featureChk.checked){
        params = "entryID=" + entryID + "&status=CHECKED";
        chboxvalue='on';
    } else {
        params = "entryID=" + entryID + "&status=UNCHECKED";
        chboxvalue='off';
    }

    $.ajax('/ajax/approve', {
        data: params,
        type: 'POST',
        success: function( data ) {
            ___loadFeedback(function() {
                if(chboxvalue=='on')
                    feedBack.add('Approval set and existing flags removed.', 'feedback');
                else if(chboxvalue=='off')
                    feedBack.add('Approval removed.', 'feedback');
            });
        },

        error: function( jqXHR, statusText, errorThrown ) {
            ___loadFeedback(function() {feedBack.add( jqXHR.status + ' -- ' + errorThrown );});
        }
    });
}

window.subscribe = subscribe;
window.removeInstructableFrom = removeInstructableFrom;
window.convertToPhotoInstructable = convertToPhotoInstructable;
window.addToGuide = addToGuide;
window.ManageQuarantineEntry = ManageQuarantineEntry;
window.deleteAllOfStatusByAuthor = deleteAllOfStatusByAuthor;
window.limboAllInstructablesByAuthor = limboAllInstructablesByAuthor;
window.MarkEntrySticky = MarkEntrySticky;
window.resetEntryURL = resetEntryURL;
window.ApproveEntryAs = ApproveEntryAs;  
})(window.jQuery);


(function($){ 
  /* 
    ajax action button handles following an author,
    adding ibles to contest & groups, favoriting, flagging,
    voting, adding a member to a group, and following a group or contest

    e.g. favoriting button impl with initial state favorited
    <a class="btn"
        data-toggle-icon="1"
        data-action="favorite"
        data-flag="1"
        data-instructableid="${instructable.id}"
        data-donetxt="Favorited"
        data-dotxt="Favorite"
        data-undotxt="Unfavorite">
    <i class="bg-icon active favorites"></i>&nbsp; <span>Favorited</span>
    </a>
  */
  var AjaxActionBtn = function(el, options) {
    this.$element = $(el);
    this.options = $.extend({}, $.fn.ajaxActionBtn.defaults, options);
    if (this.$element.hasClass('btn'))
      this.$element
        .on("mouseover", function() {
          if ($(this).data('flag') == 1)
              $(this).children('span').html($(this).data('undotxt'));
        })
        .on("mouseout", function(){
          if ($(this).data('flag') == 1)
            $(this).children('span').html($(this).data('donetxt'));
        });
  }
  
  AjaxActionBtn.prototype = {
    constructor: AjaxActionBtn,

    flag: function() {
      var $el = this.$element,
          flagMenu = $el.closest('.flag-menu'),
          instructableId = flagMenu.data('entry-id'),
          msgConfirm = flagMenu.find('.msg-confirm').text(),
          msgSuccess = flagMenu.find('.msg-success').text(),
          flagAs = $el.data('flag-as');
      if (window.confirm(msgConfirm+flagAs)) {
        this.perform({
          entryID: instructableId,
          action: 'SET',
          flag: flagAs
        }, 
        function() {
          ___loadFeedback(function(){
            setTimeout(function() {
              window.feedBack.add(msgSuccess);
              }, 1000);
            });
        });      
      }
    },
    
    vote: function() {
      var $el = this.$element, revert = ($el.data('flag') == 1);
      this.perform({
        contestId: $el.data("contestid"),
        instructableId: $el.data('instructableid'),
        add: !revert,
        posted: new Date().getTime()
      });      
    },
    
    favorite: function() {
      var $el = this.$element, revert = ($el.data('flag') == 1);
      this.perform({entryId: $el.data('instructableid')});              
    },
        
    follow: function() {
      var $el = $('#follow-btn'), revert = ($el.data('flag') == 1);
      this.perform ({
        subscriptionId: $el.data('followid'),
        type : 'USER',
        posted: new Date().getTime(),
        action: revert ? "REMOVE" : "ADD"
      }, 
      $.proxy(this.updateFollowBtn, this));
    },

    updateFollowBtn: function() {
        var $el = $('#follow-btn'),
            $icon = $el.children('.bg-icon'),
            $btnText = $el.children('span'),
            $followers = $el.siblings('.callout'),
            followers = parseInt($followers.text());
        if ($el.attr('data-flag') == 1) {
            $el.attr('data-flag',0);
            $btnText.html($el.data('dotxt'));
            $followers.text(followers-1);
        } else {
            $el.attr('data-flag',1);
            $btnText.html($el.data('donetxt'));
            $followers.text(followers+1);
        }
        $icon.toggleClass('checkmarksmall').toggleClass('plus');
    },
    
    followGroup: function() {
      var $el = this.$element, 
          groupId = $el.data('groupid'),
          revert = $el.data('flag') == 1;

      var data = {
        modify: 'GROUPS',
        posted: new Date().getTime()
      };
      
      if (revert) {
        data.unfollow = groupId;
      } else {
        data.follow = groupId;
      }      
      this.perform(data);      
    },
    
    joinGroup: function() {
      var $el = this.$element, 
          groupId = $el.data('groupid'),
          revert = $el.data('flag') == 1,
          reload = $el.data('reload'),
          moderatedForMembership = $el.data('moderated-for-membership');

      var data = {
        modify: 'GROUPS',
        posted: new Date().getTime()
      };      
      data[(revert) ? "leave" : "join"] = groupId;
      if (reload)
        this.perform(data, function(){if (reload) window.location.reload(true)}, false);
      else
        this.perform(data, function(){if(moderatedForMembership && !revert){
            ___loadFeedback(function() {feedBack.add( "This group is moderated. Your join request has been sent to the group owner."  )});
        }}, true);
    },
      followContest: function() {
        var $el = this.$element,
            groupId = $el.data('contestid'),
            revert = $el.data('flag') == 1;

        var data = {
          modify: 'CONTESTS',
          posted: new Date().getTime()
        };

        if (revert) {
          data.unfollow = groupId;
        } else {
          data.follow = groupId;
        }
        this.perform(data);
      },
    addToContest: function() {
      var $el = this.$element, revert = ($el.data('flag') == 1);
      this.perform ({
        contestId: $el.data('contestid'),
        instructableId: $el.data('instructableid'),
        action: revert ? "REMOVE" : "ADD",
        posted: new Date().getTime()
      });     
    },
    
    addToGroup: function() {
      var $el = this.$element, revert = ($el.data('flag') == 1),
          data = {groupId: $el.data('groupid'), posted: new Date().getTime(), groupCategory : $el.data('groupCategory')};
      data[(revert)?"removeId":"approveId"] = $el.data("instructableid");  
      this.perform(data);      
    },
    
    addToGuide: function() {
      var $el = this.$element;
      this.perform ({
        guideId: $el.data("guideid"),
        instructableId: $el.data("instructableid"),
        posted: new Date().getTime()
      }, 
      function() {
        $el.addClass('disabled');
        $el.children('.checkmark').addClass('active');
        $el.children('span').html($el.data('donetxt'));
      });    
    },
    
    perform: function(data, callback, continueAfterCallback) {
      var $el = this.$element, 
          revert = ($el.data('flag') == 1),
          toggleIcon = $el.data('toggle-icon') !== 0;
      
      $el.addClass('disabled');
      $el.children('span').html('Loading...');      
      $.ajax({
        url: $.fn.ajaxActionBtn.defaults[this.$element.data('action')+'Url'],
        type: 'POST',
        'data': data,
        success: function(data) {
          if (revert) {
            $el.data('flag', 0);
          } else {                    
            $el.data('flag', 1);                                               
          }
          $el.removeClass('disabled');
          $el.fadeOut(400, function(){
            if (callback) {
              callback(data);
              if (!continueAfterCallback) {
                $el.fadeIn(400);
                return;
              }
            }            
            if (toggleIcon)
              $el.children('.bg-icon').toggleClass('active');
            if (revert) {    
              $el.children('span').html($el.data('dotxt'));
            } else {              
              $el.children('span').html($el.data('donetxt'));                                                 
            }
            $el.fadeIn(400);
          });
          $el.trigger('ajax-action-success', [data]);
        }
      });
    },
  }
  
  $.fn.ajaxActionBtn = function(option) {
    return this.each(function() {   
      var $this = $(this),
          data = $this.data('ajaxaction'),
          options = typeof option == 'object' && option;
      if (!data) $this.data('ajaxaction', (data = new AjaxActionBtn(this))); // create new instance for this dom element if doesn't exist
      if (typeof option == 'string') data[option](); // call initial function based on option parameter
    })
  }
  
  $.fn.ajaxActionBtn.defaults = {
    loadingText: 'loading...',
    followUrl: '/you/subscriptions/',
    addToContestUrl: '/contest/enter/',
    addToGroupUrl: '/group/addinstructable', 
    addToGuideUrl: '/edit/guideAdd',
    favoriteUrl: '/ajax/favorite',
    flagUrl: '/ajax/flag',
    voteUrl: '/contest/vote/',
    joinGroupUrl: '/you/settings',
    followGroupUrl: '/you/settings',
    followContestUrl: '/you/settings'
  }
    
  $.fn.ajaxActionBtn.Constructor = AjaxActionBtn
  
  $(function () {
    $('body').on('click.ajaxActionBtn', '[data-action], .ajax-action-btn', function(e) {
      e.preventDefault();
      if (!window.Ibles.pageContext.loggedIn) {
          window.Ibles.showLogin({sourcea: $(this).data('action')});
      } else {
        if (!$(this).hasClass('disabled'))
          $(this).ajaxActionBtn($(this).data('action'));        
      }
    });
  });
})(window.jQuery);


// feedback initializer
(function($){
    $(function(){
        var feedback = window.Ibles.pageContext.feedback;
        if (!_.isEmpty(feedback) && (feedback.messages || feedback.validation)) {
            head.js("/static/js/feedback.jq.2.js", function() {
                feedBack.addFromJSON(feedback, 'feedback');
            });
        }
    });
})(jQuery);


// footer newsletter signup
(function($){
    function validateEmail(email) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        var domainTypos = ["aol.cm", "a0l.com", "aol.co", "gmail.cm", "gmail.co", "gmal.com", "g-mail.com", "gmaill.com", "gmail.co.uk", "googlemail.co.uk", "gmail.com.au", "gmail.ca", "googlemaile.com", "googlmail.com", "gmail.fr", "gmail.com.mx", "gmail.nl", "hotmail.cm", "hoymail.com", "homail.com", "hotmai.com", "hotmail.co", "hotmal.com", "hotmil.com", "hotmain.com", "hatmail.com", "hotmial.co.uk", "hotmall.co.uk", "hotmaiil.co.uk", "googlmail.com", "yahoo.cm", "yahoo.co", "yaho.com", "yaoo.com", "yahooo.com", "yhaoo.com", "ayhoo.com", "dyahoo.com", "ahoo.com", "yhoo.com", "yahool.com", "yhoo.com", "yahoomail.com", "tyahoo.com", "yahool.com", "yahoo.net", "yshoo.com", "myshoo.com", "yahho.com", "yaqhoo.com", "ayahoo.com", "yah00.com", "yahho.com", "yohoo.com", "olyahoo.com", "yahaoo.com", "yahioo.com", "yahooc.com", "yahopo.com", "yajoo.com", "yhool.com", "yyahoo.com", "yayoo.com", "ysahoo.com", "ywhoo.com", "yaghoo.com", "hahoo.com", "qyahoo.com", "yahoo0.com", "yanoo.com", "yaho0o.com", "yahoom.com", "youhoo.com", "ytahoo.com", "69yahoo.com", "yahoo.org", "yahoop.com", "yhahoo.com", "yzhoo.com", "iyahoo.com", "y7ahoo.com", "yaboo.com", "yajhoo.com", "yaool.com", "ydhoo.com", "51yahoo.com", "yafoo.com", "yahgoo.com", "yahoord.com", "yhaooo.com", "yhoo.net", "yuhoo.com", "ovi.com"];
        var passesCommonTypoTest = true;
        for (var i=0; i<domainTypos.length; i++) {
            if (email.endsWith('@'+domainTypos[i])) {
                passesCommonTypoTest = false;
            }
        }
        return re.test(email) && passesCommonTypoTest;;
    }
    $(function(){
        $('#newsletter-signup-btn').click(function(e){
            e.preventDefault();
            var form = $(this).parent().find('input'),
                email = form.val();
            if (email == 'enter email' || email == '') {
                alert('Please enter your email address');
            } else {
                if (validateEmail(email)) {
                    form.removeClass("error").tooltip("destroy");
                    window.open("/newsletter/newslettersignup?email=" + email,"newslettersignup","status=yes,scrollbars=yes,resizable=yes,width=420,height=250");
                } else {
                    form.tooltip("destroy")
                        .data("title", "Invalid email address!")
                        .addClass("error")
                        .tooltip();
                    form.focus();
                }
            }
        });
    })
})(jQuery);


// mobile site full page script
(function($){
    $(function(){
        $('#mobile-site-link').click(function(e){
            e.preventDefault();
            var that = this;
            document.cookie = 'Iblefullsite=0;domain=.instructables.com;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            setTimeout(function(){window.location = that.href;},50);
        });
    });
})(jQuery);