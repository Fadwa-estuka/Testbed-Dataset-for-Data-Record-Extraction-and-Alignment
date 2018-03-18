(function($){
    // google tag manager script
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        userId: window.Ibles.pageContext.userId,
        loggedIn: window.Ibles.pageContext.loggedIn
    });

    // pageContext contains all kinds of useful targeting data!
    dataLayer.push(window.Ibles.pageContext);
        
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', window.Ibles.pageContext.gtmContainerID);
        
    // push ajax completion events to google tag manager's data layer
    $(function(){
        $(document).ajaxComplete(function(event, xhr, settings) {
            dataLayer.push({
                'event': 'ajaxComplete',
                'ajaxCompleteUrl': settings.url,
                'ajaxCompleteType': settings.type,
                'ajaxCompleteStatus': xhr.status
            });
        });
    });
})(jQuery);


(function($){
    // comscore
    var category = window.Ibles.pageContext.category,
        channel = window.Ibles.pageContext.channel;
    window._comscore = window._comscore || [];
    window._comscore.push({c1:"2", c2:"7732561", c3:"", c4:"", c5:"", c6:"", c15:"",
      options: {
          url_append:"comscorekw="+category
      }
    });
    (function() {
      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
      s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
      el.parentNode.insertBefore(s, el);
    })();
})(jQuery);


(function($){
    // quantcast 
    window._qevents = window._qevents || [];   
    (function() {
     var elem = document.createElement('script');
     elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge")
                 + ".quantserve.com/quant.js";
     elem.async = true;
     elem.type = "text/javascript";
     var scpt = document.getElementsByTagName('script')[0];
     scpt.parentNode.insertBefore(elem, scpt);  
    })();
    
    var pageContext = window.Ibles.pageContext,
        category = pageContext.category,
        channel = pageContext.channel,
        loggedIn = pageContext.loggedIn,
        pro = pageContext.pro,
        memberLabel = (loggedIn) ? ",member.{0}.{1}".format(category, channel) : "",
        proLabel = (pro) ? ",pro.{0}.${1}".format(category, channel) : "";
    
    window._qevents.push({
        qacct:"p-d6RKK49nWAdvA",
        labels:"{0}.{1}{2}{3}".format(category, channel, memberLabel, proLabel)
    }); 
})(jQuery);


(function($){
    // hit counter
    function LogHit( entryId, entryType, authorId ) {
        var data = {'id':entryId, 'type':entryType, 'authorId':authorId};
        if (document.referrer&&document.referrer!=""){
            data['referrer']=document.referrer;
        }
        // turn off global events triggering just for this call (prevents loading indicator)
        $.ajaxSettings.global = false;
        $.ajax({
            type: 'POST',
            url:'/counter',
            'data': data,
            success: function(){}
        });
        // turn back on global events triggering
        $.ajaxSettings.global = true;
    }
    window.LogHit = LogHit;
})(jQuery);

(function(){
    // facebook async init
    window.fbAsyncInit = function() {
        FB.init({
            appId: window.Ibles.pageContext.facebookAppId,
            cookie: false,
            xfbml: false,
            oauth: true
        });
    };
    (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
    }(document));    
})();
