(function(){var window=this;var d=this;var N=function(a){N[" "](a);return a};N[" "]=function(){};var g=function(){return d.googletag||(d.googletag={})};var f={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",7:.02,10:0,13:1500,16:.01,17:1,20:0,23:.001,24:200,27:.01,28:0,29:.01,33:"pagead2.googlesyndication.com",34:1,36:!1,37:.01,38:.001,46:!1,47:1E-4,53:"",54:0,57:.05,58:1,60:.01,63:0,65:.01,66:1E-5,67:1,68:1,69:.99,70:.001,71:.05,73:.001,74:.05,75:"",76:"",77:.01,78:.01,88:.01,79:.95,80:.01,86:.01,81:.001,82:10,83:0,84:.001,85:.01,87:.2,89:.05,90:.01,91:.01,92:.01,93:.01,94:.01,95:.01,96:.99,97:.001,
98:0,99:0,100:0,101:0};f[6]=function(a){try{for(var b=null;b!=a;b=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "http:":case "file:":return!1}}catch(c){}return!0}(window);f[49]=(new Date).getTime();var q=function(){var a={},b;for(b in f)a[b]=f[b];this.a=a};q.prototype.get=function(a){return this.a[a]};q.prototype.set=function(a,b){this.a[a]=b};q.a=void 0;q.getInstance=function(){return q.a?q.a:q.a=new q};var r=q.getInstance().a,t=g(),u=t._vars_,m;for(m in u)r[m]=u[m];
t._vars_=r;var n=function(){return"110"},p=g();p.hasOwnProperty("getVersion")||(p.getVersion=n);N("partner.googleadservices.com");N("www.googletagservices.com");var w="",x="",h=q.getInstance().get(46)&&!q.getInstance().get(6),w=h?"http:":"https:",x=q.getInstance().get(h?2:3);var k=g(),C=(k.fifWin||window).document,y=[],E=g();E.hasOwnProperty("cmd")||(E.cmd=y);
if(k.evalScripts)k.evalScripts();else{var D=C.currentScript,l;var e=q.getInstance().get(76);if(e)l=e;else{var v="",z,A=x,B=w,F;b:{var G=["21060057","21060056"];if(!(1E-4>Math.random())){var H=Math.random();if(.02>H){try{var J=new Uint32Array(1);d.crypto.getRandomValues(J);H=J[0]/65536/65536}catch(a){H=Math.random()}F=G[Math.floor(H*G.length)];break b}}F=null}F&&(q.getInstance().set(53,F),"21060056"==F?v="?v=110":z=110);e=B+"//"+A+"/gpt/pubads_impl_"+(z||108)+".js"+v;q.getInstance().set(76,e);l=e}-1!=
(window.navigator&&window.navigator.userAgent||"").indexOf("iPhone")&&q.getInstance().set(79,0);if(!("complete"==C.readyState||"loaded"==C.readyState||D&&D.async)){var I="gpt-impl-"+Math.random();try{C.write('<script id="'+I+'" src="'+l+'">\x3c/script>'),k._syncTagged_=!0}catch(a){}C.getElementById(I)&&(k._loadStarted_=!0)}if(!k._loadStarted_){var K=C.createElement("script");K.src=l;K.async=!0;(C.head||C.body||C.documentElement).appendChild(K);k._loadStarted_=!0}};}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
