//tealium universal tag - utag.2998 ut4.0.201611042055, Copyright 2016 Tealium.com Inc. All Rights Reserved.
var tp=window["tp"]||[];try{(function(id,loader){var u={};var tpAid='ZRDrnyBkBx';var tpIsSandbox=false;utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map={"byline":"contentAuthor","piano_section":"contentSection","user_status":"userState","firefly_paywall_status":"productSubscription","contenttype":"pageType","content_protection_state":"meterType","published_date":"contentCreated"};u.extend=[function(a,b){var sr_siteInfo={};if(typeof siteInfo!=="undefined"){sr_siteInfo=siteInfo;}
else if(typeof stateManager!=="undefined"){sr_siteInfo=stateManager.getActivePageInfo();}
else{return false;}
try{b.published_date=b.published_date||document.getElementsByClassName("story-timestamp")[0].getAttribute("datetime");}
catch(pderr){}
try{b.byline=sr_siteInfo.byline.split(',')[0];}
catch(bylineErr){}
try{b['piano_section']=b['section'];if(typeof b.piano_section==='undefined'){b.piano_section=sr_siteInfo.section||"";}}
catch(nosssts){}
var pianoTag_tpPush=function(name,sname,val){try{if(sname!==""){tp.push([name,sname,val]);}
else{tp.push([name,val]);}
return;}
catch(e){}}
window.pianoTag_execute=function(){if(!tp.isInitialized){tp.push(["init",function(){tp.experience.init();}]);}else{if(b.contenttype!=='video'){if(typeof(b.pianoExperienceFired)==='undefined'){b.pianoExperienceFired=1;tp.experience.execute();}else{b.pianoExperienceFired=null;}}}
if(b.contenttype==='video'||(/videos/).test(window.document.location)){if(typeof(window.pianoComplete)!=='undefined'){window.pianoComplete();}}}
if(tp.isInitialized){if(b.published_date!==""){pianoTag_tpPush("setContentCreated","",b.published_date);}
if(b.byline!==""){pianoTag_tpPush("setContentAuthor","",b.byline);}
if(b.piano_section!==""){pianoTag_tpPush("setContentSection","",b.piano_section);}
if(b.user_status!==""){pianoTag_tpPush("setCustomVariable","userState",b.user_status);}
if(b.firefly_paywall_status!==""){pianoTag_tpPush("setCustomVariable","productSubscription",b.firefly_paywall_status);}
if(b.contenttype!==""){pianoTag_tpPush("setCustomVariable","pageType",b.contenttype);}
if(b.content_protection_state!==""){pianoTag_tpPush("setCustomVariable","meterType",b.content_protection_state);}
if(window.site_vars.userAuthentication){pianoTag_tpPush("setCustomVariable","userAuthentication",window.site_vars.userAuthentication);}
if(window.site_vars.site_code){pianoTag_tpPush("setCustomVariable","siteCode",window.site_vars.site_code);}
if((/prod/).test(utag.cfg.path)){pianoTag_tpPush("setCustomVariable","siteEnvironment","prod");}else{pianoTag_tpPush("setCustomVariable","siteEnvironment","qa");}
if(b.content_protection_state==="free"&&!(/usatoday/).test(b["dom.domain"])){window.pianoComplete();}
}
if(!window.pianoHaltLoad){console.log("Before pianoTagExecute document location: "+b["dom.domain"])
window.pianoTag_execute();}
if(b.contenttype==='video'||(/videos/).test(window.document.location)){if(typeof(window.pianoComplete)!=='undefined'){window.pianoComplete();}}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f;u.data={"base_url":("//"+(tpIsSandbox?'sandbox.tinypass.com':'experience.tinypass.com')+"/xbuilder/experience/load?aid="+tpAid),"aid":"ZRDrnyBkBx","contentCreated":"","contentAuthor":"","contentSection":"","userState":"","productSubscription":"","pageType":"","meterType":""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};c=[];for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.loader_cb=function(a,b,c){u.initialized=true;if(u.data.contentCreated!==""){tp.push(["setContentCreated",u.data.contentCreated]);}
if(u.data.contentAuthor!==""){tp.push(["setContentAuthor",u.data.contentAuthor]);}
if(u.data.contentSection!==""){tp.push(["setContentSection",u.data.contentSection]);}
if(u.data.userState!==""){tp.push(["setCustomVariable","userState",u.data.userState]);}
if(u.data.productSubscription!==""){tp.push(["setCustomVariable","productSubscription",u.data.productSubscription]);}
if(u.data.pageType!==""){tp.push(["setCustomVariable","pageType",u.data.pageType]);}
if(u.data.meterType!==""){tp.push(["setCustomVariable","meterType",u.data.meterType]);}
if(window.site_vars.site_code){tp.push(["setCustomVariable","siteCode",window.site_vars.site_code]);}
if((/prod/).test(utag.cfg.path)){tp.push(["setCustomVariable","siteEnvironment","prod"]);}else{tp.push(["setCustomVariable","siteEnvironment","qa"]);}
tp.push(["addHandler","meterActive",function(meterData){var articleWording=(((meterData.maxViews-meterData.views)==1)?"article":"articles");var flyout_message="You have "+(meterData.maxViews-meterData.views)+" "+articleWording+" left.";document.getElementsByClassName("util-bar-flyout-firefly-title")[0].innerHTML=flyout_message;}]);tp.push(["addHandler","experienceExecute",function(experienceData){var templateShown=false;for(var i in experienceData.result.events){var event=experienceData.result.events[i];if((event.eventType=='showOffer')||(event.eventType=='showTemplate')){templateShown=true;}}
if(!templateShown){window.pianoComplete();}}]);tp.push(["addHandler","checkoutClose",function(event){switch(event.state){case'close':window.pianoComplete();if(u.data.isAdBlocking&&window.gcsNoSurveyDelivered){window.gcsNoSurveyDelivered();}}}]);try{tp.push(['setCustomVariable','userAuthentication',window.site_vars.userAuthentication]);}catch(e){}
};u.callBack=function(){var data={};while(data=u.queue.shift()){u.data=data.data;u.loader_cb(data.a,data.b,data.c);}};if(u.initialized){u.loader_cb(a,b,c);}else{u.queue.push({"data":u.data,"a":a,"b":b,"c":c});if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":u.callBack,"loc":"script","id":"utag_2998"});}}
}};utag.o[loader].loader.LOAD(id);}("2998","gci.usat"));}catch(error){utag.DB(error);}
