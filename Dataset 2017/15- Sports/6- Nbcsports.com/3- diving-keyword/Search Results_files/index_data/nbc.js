!function(e){function t(){}function n(e){i=[e]}function c(e,t,n){return e&&e.apply(t.context||t,n)}function r(e){return/\?/.test(e)?"&":"?"}function o(o){function m(e){V++||(W(),K&&(I[M]={s:[e]}),A&&(e=A.apply(o,[e])),c(R,o,[e,k,o]),c(z,o,[o,k]))}function S(e){V++||(W(),K&&e!=x&&(I[M]=e),c(U,o,[o,e]),c(z,o,[o,e]))}o=e.extend({},B,o);var $,_,q,P,Q,R=o.success,U=o.error,z=o.complete,A=o.dataFilter,G=o.callbackParameter,H=o.callback,J=o.cache,K=o.pageCache,L=o.charset,M=o.url,N=o.data,O=o.timeout,V=0,W=t;return w&&w(function(e){e.done(R).fail(U),R=e.resolve,U=e.reject}).promise(o),o.abort=function(){!V++&&W()},c(o.beforeSend,o,[o])===!1||V?o:(M=M||l,N=N?"string"==typeof N?N:e.param(N,o.traditional):l,M+=N?r(M)+N:l,G&&(M+=r(M)+encodeURIComponent(G)+"=?"),!J&&!K&&(M+=r(M)+"_"+(new Date).getTime()+"="),M=M.replace(/=\?(&|$)/,"="+H+"$1"),K&&($=I[M])?$.s?m($.s[0]):S($):(C[H]=n,q=e(j)[0],q.id=f+T++,L&&(q[u]=L),D&&D.version()<11.6?(P=e(j)[0]).text="document.getElementById('"+q.id+"')."+h+"()":q[a]=a,F&&(q.htmlFor=q.id,q.event=p),q[y]=q[h]=q[v]=function(e){if(!q[g]||!/i/.test(q[g])){try{q[p]&&q[p]()}catch(t){}e=i,i=0,e?m(e[0]):S(s)}},q.src=M,W=function(){Q&&clearTimeout(Q),q[v]=q[y]=q[h]=null,E[b](q),P&&E[b](P)},E[d](q,_=E.firstChild),P&&E[d](P,_),Q=O>0&&setTimeout(function(){S(x)},O)),o)}var i,a="async",u="charset",l="",s="error",d="insertBefore",f="_jqjsp",m="on",p=m+"click",h=m+s,y=m+"load",v=m+"readystatechange",g="readyState",b="removeChild",j="<script>",k="success",x="timeout",C=window,w=e.Deferred,E=e("head")[0]||document.documentElement,I={},T=0,B={callback:f,url:location.href},D=C.opera,F=!!e("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;o.setup=function(t){e.extend(B,t)},e.jsonp=o}(jQuery);

/*! sly 1.5.1 - 28th Apr 2015 | https://github.com/darsain/sly */
!function(a,b,c){"use strict";function d(b,p,q){function K(c){var d=0,e=Gb.length;if(yb.old=a.extend({},yb),wb=tb?0:ub[rb.horizontal?"width":"height"](),Bb=zb[rb.horizontal?"width":"height"](),xb=tb?b:vb[rb.horizontal?"outerWidth":"outerHeight"](),Gb.length=0,yb.start=0,yb.end=H(xb-wb,0),Rb){d=Ib.length,Hb=vb.children(rb.itemSelector),Ib.length=0;var f,g=j(vb,rb.horizontal?"paddingLeft":"paddingTop"),h=j(vb,rb.horizontal?"paddingRight":"paddingBottom"),i="border-box"===a(Hb).css("boxSizing"),l="none"!==Hb.css("float"),m=0,n=Hb.length-1;xb=0,Hb.each(function(b,c){var d=a(c),e=c.getBoundingClientRect(),i=G(rb.horizontal?e.width||e.right-e.left:e.height||e.bottom-e.top),k=j(d,rb.horizontal?"marginLeft":"marginTop"),o=j(d,rb.horizontal?"marginRight":"marginBottom"),p=i+k+o,q=!k||!o,r={};r.el=c,r.size=q?i:p,r.half=r.size/2,r.start=xb+(q?k:0),r.center=r.start-G(wb/2-r.size/2),r.end=r.start-wb+r.size,b||(xb+=g),xb+=p,rb.horizontal||l||o&&k&&b>0&&(xb-=I(k,o)),b===n&&(r.end+=h,xb+=h,m=q?o:0),Ib.push(r),f=r}),vb[0].style[rb.horizontal?"width":"height"]=(i?xb:xb-g-h)+"px",xb-=m,Ib.length?(yb.start=Ib[0][Pb?"center":"start"],yb.end=Pb?f.center:xb>wb?f.end:yb.start):yb.start=yb.end=0}if(yb.center=G(yb.end/2+yb.start/2),V(),Ab.length&&Bb>0&&(rb.dynamicHandle?(Cb=yb.start===yb.end?Bb:G(Bb*wb/xb),Cb=k(Cb,rb.minHandleSize,Bb),Ab[0].style[rb.horizontal?"width":"height"]=Cb+"px"):Cb=Ab[rb.horizontal?"outerWidth":"outerHeight"](),Db.end=Bb-Cb,ec||N()),!tb&&wb>0){var o=yb.start,p="";if(Rb)a.each(Ib,function(a,b){Pb?Gb.push(b.center):b.start+b.size>o&&o<=yb.end&&(o=b.start,Gb.push(o),o+=wb,o>yb.end&&o<yb.end+wb&&Gb.push(yb.end))});else for(;o-wb<yb.end;)Gb.push(o),o+=wb;if(Eb[0]&&e!==Gb.length){for(var q=0;q<Gb.length;q++)p+=rb.pageBuilder.call(sb,q);Fb=Eb.html(p).children(),Fb.eq(Jb.activePage).addClass(rb.activeClass)}}if(Jb.slideeSize=xb,Jb.frameSize=wb,Jb.sbSize=Bb,Jb.handleSize=Cb,Rb){c&&null!=rb.startAt&&(T(rb.startAt),sb[Qb?"toCenter":"toStart"](rb.startAt));var r=Ib[Jb.activeItem];L(Qb&&r?r.center:k(yb.dest,yb.start,yb.end))}else c?null!=rb.startAt&&L(rb.startAt,1):L(k(yb.dest,yb.start,yb.end));ob("load")}function L(a,b,c){if(Rb&&cc.released&&!c){var d=U(a),e=a>yb.start&&a<yb.end;Qb?(e&&(a=Ib[d.centerItem].center),Pb&&rb.activateMiddle&&T(d.centerItem)):e&&(a=Ib[d.firstItem].start)}cc.init&&cc.slidee&&rb.elasticBounds?a>yb.end?a=yb.end+(a-yb.end)/6:a<yb.start&&(a=yb.start+(a-yb.start)/6):a=k(a,yb.start,yb.end),ac.start=+new Date,ac.time=0,ac.from=yb.cur,ac.to=a,ac.delta=a-yb.cur,ac.tweesing=cc.tweese||cc.init&&!cc.slidee,ac.immediate=!ac.tweesing&&(b||cc.init&&cc.slidee||!rb.speed),cc.tweese=0,a!==yb.dest&&(yb.dest=a,ob("change"),ec||M()),Z(),V(),W(),O()}function M(){if(sb.initialized){if(!ec)return ec=t(M),void(cc.released&&ob("moveStart"));ac.immediate?yb.cur=ac.to:ac.tweesing?(ac.tweeseDelta=ac.to-yb.cur,D(ac.tweeseDelta)<.1?yb.cur=ac.to:yb.cur+=ac.tweeseDelta*(cc.released?rb.swingSpeed:rb.syncSpeed)):(ac.time=I(+new Date-ac.start,rb.speed),yb.cur=ac.from+ac.delta*a.easing[rb.easing](ac.time/rb.speed,ac.time,0,1,rb.speed)),ac.to===yb.cur?(yb.cur=ac.to,cc.tweese=ec=0):ec=t(M),ob("move"),tb||(m?vb[0].style[m]=n+(rb.horizontal?"translateX":"translateY")+"("+-yb.cur+"px)":vb[0].style[rb.horizontal?"left":"top"]=-G(yb.cur)+"px"),!ec&&cc.released&&ob("moveEnd"),N()}}function N(){Ab.length&&(Db.cur=yb.start===yb.end?0:((cc.init&&!cc.slidee?yb.dest:yb.cur)-yb.start)/(yb.end-yb.start)*Db.end,Db.cur=k(G(Db.cur),Db.start,Db.end),_b.hPos!==Db.cur&&(_b.hPos=Db.cur,m?Ab[0].style[m]=n+(rb.horizontal?"translateX":"translateY")+"("+Db.cur+"px)":Ab[0].style[rb.horizontal?"left":"top"]=Db.cur+"px"))}function O(){Fb[0]&&_b.page!==Jb.activePage&&(_b.page=Jb.activePage,Fb.removeClass(rb.activeClass).eq(Jb.activePage).addClass(rb.activeClass),ob("activePage",_b.page))}function P(){bc.speed&&yb.cur!==(bc.speed>0?yb.end:yb.start)||sb.stop(),hc=cc.init?t(P):0,bc.now=+new Date,bc.pos=yb.cur+(bc.now-bc.lastTime)/1e3*bc.speed,L(cc.init?bc.pos:G(bc.pos)),cc.init||yb.cur!==yb.dest||ob("moveEnd"),bc.lastTime=bc.now}function Q(a,b,d){if("boolean"===e(b)&&(d=b,b=c),b===c)L(yb[a],d);else{if(Qb&&"center"!==a)return;var f=sb.getPos(b);f&&L(f[a],d,!Qb)}}function R(a){return null!=a?i(a)?a>=0&&a<Ib.length?a:-1:Hb.index(a):-1}function S(a){return R(i(a)&&0>a?a+Ib.length:a)}function T(a,b){var c=R(a);return!Rb||0>c?!1:((_b.active!==c||b)&&(Hb.eq(Jb.activeItem).removeClass(rb.activeClass),Hb.eq(c).addClass(rb.activeClass),_b.active=Jb.activeItem=c,W(),ob("active",c)),c)}function U(a){a=k(i(a)?a:yb.dest,yb.start,yb.end);var b={},c=Pb?0:wb/2;if(!tb)for(var d=0,e=Gb.length;e>d;d++){if(a>=yb.end||d===Gb.length-1){b.activePage=Gb.length-1;break}if(a<=Gb[d]+c){b.activePage=d;break}}if(Rb){for(var f=!1,g=!1,h=!1,j=0,l=Ib.length;l>j;j++)if(f===!1&&a<=Ib[j].start+Ib[j].half&&(f=j),h===!1&&a<=Ib[j].center+Ib[j].half&&(h=j),j===l-1||a<=Ib[j].end+Ib[j].half){g=j;break}b.firstItem=i(f)?f:0,b.centerItem=i(h)?h:b.firstItem,b.lastItem=i(g)?g:b.centerItem}return b}function V(b){a.extend(Jb,U(b))}function W(){var a=yb.dest<=yb.start,b=yb.dest>=yb.end,c=(a?1:0)|(b?2:0);if(_b.slideePosState!==c&&(_b.slideePosState=c,Yb.is("button,input")&&Yb.prop("disabled",a),Zb.is("button,input")&&Zb.prop("disabled",b),Yb.add(Vb)[a?"addClass":"removeClass"](rb.disabledClass),Zb.add(Ub)[b?"addClass":"removeClass"](rb.disabledClass)),_b.fwdbwdState!==c&&cc.released&&(_b.fwdbwdState=c,Vb.is("button,input")&&Vb.prop("disabled",a),Ub.is("button,input")&&Ub.prop("disabled",b)),Rb&&null!=Jb.activeItem){var d=0===Jb.activeItem,e=Jb.activeItem>=Ib.length-1,f=(d?1:0)|(e?2:0);_b.itemsButtonState!==f&&(_b.itemsButtonState=f,Wb.is("button,input")&&Wb.prop("disabled",d),Xb.is("button,input")&&Xb.prop("disabled",e),Wb[d?"addClass":"removeClass"](rb.disabledClass),Xb[e?"addClass":"removeClass"](rb.disabledClass))}}function X(a,b,c){if(a=S(a),b=S(b),a>-1&&b>-1&&a!==b&&(!c||b!==a-1)&&(c||b!==a+1)){Hb.eq(a)[c?"insertAfter":"insertBefore"](Ib[b].el);var d=b>a?a:c?b:b-1,e=a>b?a:c?b+1:b,f=a>b;null!=Jb.activeItem&&(a===Jb.activeItem?_b.active=Jb.activeItem=c?f?b+1:b:f?b:b-1:Jb.activeItem>d&&Jb.activeItem<e&&(_b.active=Jb.activeItem+=f?1:-1)),K()}}function Y(a,b){for(var c=0,d=$b[a].length;d>c;c++)if($b[a][c]===b)return c;return-1}function Z(){cc.released&&!sb.isPaused&&sb.resume()}function $(a){return G(k(a,Db.start,Db.end)/Db.end*(yb.end-yb.start))+yb.start}function _(){cc.history[0]=cc.history[1],cc.history[1]=cc.history[2],cc.history[2]=cc.history[3],cc.history[3]=cc.delta}function ab(a){cc.released=0,cc.source=a,cc.slidee="slidee"===a}function bb(b){var c="touchstart"===b.type,d=b.data.source,e="slidee"===d;cc.init||!c&&eb(b.target)||("handle"!==d||rb.dragHandle&&Db.start!==Db.end)&&(!e||(c?rb.touchDragging:rb.mouseDragging&&b.which<2))&&(c||f(b),ab(d),cc.init=0,cc.$source=a(b.target),cc.touch=c,cc.pointer=c?b.originalEvent.touches[0]:b,cc.initX=cc.pointer.pageX,cc.initY=cc.pointer.pageY,cc.initPos=e?yb.cur:Db.cur,cc.start=+new Date,cc.time=0,cc.path=0,cc.delta=0,cc.locked=0,cc.history=[0,0,0,0],cc.pathToLock=e?c?30:10:0,u.on(c?x:w,cb),sb.pause(1),(e?vb:Ab).addClass(rb.draggedClass),ob("moveStart"),e&&(fc=setInterval(_,10)))}function cb(a){if(cc.released="mouseup"===a.type||"touchend"===a.type,cc.pointer=cc.touch?a.originalEvent[cc.released?"changedTouches":"touches"][0]:a,cc.pathX=cc.pointer.pageX-cc.initX,cc.pathY=cc.pointer.pageY-cc.initY,cc.path=E(F(cc.pathX,2)+F(cc.pathY,2)),cc.delta=rb.horizontal?cc.pathX:cc.pathY,cc.released||!(cc.path<1)){if(!cc.init){if(!(rb.horizontal?D(cc.pathX)>D(cc.pathY):D(cc.pathX)<D(cc.pathY)))return db();cc.init=1}f(a),!cc.locked&&cc.path>cc.pathToLock&&cc.slidee&&(cc.locked=1,cc.$source.on(z,g)),cc.released&&(db(),rb.releaseSwing&&cc.slidee&&(cc.swing=(cc.delta-cc.history[0])/40*300,cc.delta+=cc.swing,cc.tweese=D(cc.swing)>10)),L(cc.slidee?G(cc.initPos-cc.delta):$(cc.initPos+cc.delta))}}function db(){clearInterval(fc),cc.released=!0,u.off(cc.touch?x:w,cb),(cc.slidee?vb:Ab).removeClass(rb.draggedClass),setTimeout(function(){cc.$source.off(z,g)}),yb.cur===yb.dest&&cc.init&&ob("moveEnd"),sb.resume(1),cc.init=0}function eb(b){return~a.inArray(b.nodeName,B)||a(b).is(rb.interactive)}function fb(){sb.stop(),u.off("mouseup",fb)}function gb(a){switch(f(a),this){case Ub[0]:case Vb[0]:sb.moveBy(Ub.is(this)?rb.moveBy:-rb.moveBy),u.on("mouseup",fb);break;case Wb[0]:sb.prev();break;case Xb[0]:sb.next();break;case Yb[0]:sb.prevPage();break;case Zb[0]:sb.nextPage()}}function hb(a){return dc.curDelta=(rb.horizontal?a.deltaY||a.deltaX:a.deltaY)||-a.wheelDelta,dc.curDelta/=1===a.deltaMode?3:100,Rb?(o=+new Date,dc.last<o-dc.resetTime&&(dc.delta=0),dc.last=o,dc.delta+=dc.curDelta,D(dc.delta)<1?dc.finalDelta=0:(dc.finalDelta=G(dc.delta/1),dc.delta%=1),dc.finalDelta):dc.curDelta}function ib(a){a.originalEvent[r]=sb;var b=+new Date;if(J+rb.scrollHijack>b&&Sb[0]!==document&&Sb[0]!==window)return void(J=b);if(rb.scrollBy&&yb.start!==yb.end){var c=hb(a.originalEvent);(rb.scrollTrap||c>0&&yb.dest<yb.end||0>c&&yb.dest>yb.start)&&f(a,1),sb.slideBy(rb.scrollBy*c)}}function jb(a){rb.clickBar&&a.target===zb[0]&&(f(a),L($((rb.horizontal?a.pageX-zb.offset().left:a.pageY-zb.offset().top)-Cb/2)))}function kb(a){if(rb.keyboardNavBy)switch(a.which){case rb.horizontal?37:38:f(a),sb["pages"===rb.keyboardNavBy?"prevPage":"prev"]();break;case rb.horizontal?39:40:f(a),sb["pages"===rb.keyboardNavBy?"nextPage":"next"]()}}function lb(a){return eb(this)}function mb(){this.parentNode===Eb[0]&&sb.activatePage(Fb.index(this))}function nb(a){rb.pauseOnHover&&sb["mouseenter"===a.type?"pause":"resume"](2)}function ob(a,b){if($b[a]){for(qb=$b[a].length,C.length=0,pb=0;qb>pb;pb++)C.push($b[a][pb]);for(pb=0;qb>pb;pb++)C[pb].call(sb,a,b)}}var pb,qb,rb=a.extend({},d.defaults,p),sb=this,tb=i(b),ub=a(b),vb=rb.slidee?a(rb.slidee).eq(0):ub.children().eq(0),wb=0,xb=0,yb={start:0,center:0,end:0,cur:0,dest:0},zb=a(rb.scrollBar).eq(0),Ab=zb.children().eq(0),Bb=0,Cb=0,Db={start:0,end:0,cur:0},Eb=a(rb.pagesBar),Fb=0,Gb=[],Hb=0,Ib=[],Jb={firstItem:0,lastItem:0,centerItem:0,activeItem:null,activePage:0},Kb=new l(ub[0]),Lb=new l(vb[0]),Mb=new l(zb[0]),Nb=new l(Ab[0]),Ob="basic"===rb.itemNav,Pb="forceCentered"===rb.itemNav,Qb="centered"===rb.itemNav||Pb,Rb=!tb&&(Ob||Qb||Pb),Sb=rb.scrollSource?a(rb.scrollSource):ub,Tb=rb.dragSource?a(rb.dragSource):ub,Ub=a(rb.forward),Vb=a(rb.backward),Wb=a(rb.prev),Xb=a(rb.next),Yb=a(rb.prevPage),Zb=a(rb.nextPage),$b={},_b={},ac={},bc={},cc={released:1},dc={last:0,delta:0,resetTime:200},ec=0,fc=0,gc=0,hc=0;tb||(b=ub[0]),sb.initialized=0,sb.frame=b,sb.slidee=vb[0],sb.pos=yb,sb.rel=Jb,sb.items=Ib,sb.pages=Gb,sb.isPaused=0,sb.options=rb,sb.dragging=cc,sb.reload=function(){K()},sb.getPos=function(a){if(Rb){var b=R(a);return-1!==b?Ib[b]:!1}var c=vb.find(a).eq(0);if(c[0]){var d=rb.horizontal?c.offset().left-vb.offset().left:c.offset().top-vb.offset().top,e=c[rb.horizontal?"outerWidth":"outerHeight"]();return{start:d,center:d-wb/2+e/2,end:d-wb+e,size:e}}return!1},sb.moveBy=function(a){bc.speed=a,!cc.init&&bc.speed&&yb.cur!==(bc.speed>0?yb.end:yb.start)&&(bc.lastTime=+new Date,bc.startPos=yb.cur,ab("button"),cc.init=1,ob("moveStart"),s(hc),P())},sb.stop=function(){"button"===cc.source&&(cc.init=0,cc.released=1)},sb.prev=function(){sb.activate(null==Jb.activeItem?0:Jb.activeItem-1)},sb.next=function(){sb.activate(null==Jb.activeItem?0:Jb.activeItem+1)},sb.prevPage=function(){sb.activatePage(Jb.activePage-1)},sb.nextPage=function(){sb.activatePage(Jb.activePage+1)},sb.slideBy=function(a,b){a&&(Rb?sb[Qb?"toCenter":"toStart"](k((Qb?Jb.centerItem:Jb.firstItem)+rb.scrollBy*a,0,Ib.length)):L(yb.dest+a,b))},sb.slideTo=function(a,b){L(a,b)},sb.toStart=function(a,b){Q("start",a,b)},sb.toEnd=function(a,b){Q("end",a,b)},sb.toCenter=function(a,b){Q("center",a,b)},sb.getIndex=R,sb.activate=function(a,b){var c=T(a);rb.smart&&c!==!1&&(Qb?sb.toCenter(c,b):c>=Jb.lastItem?sb.toStart(c,b):c<=Jb.firstItem?sb.toEnd(c,b):Z())},sb.activatePage=function(a,b){i(a)&&L(Gb[k(a,0,Gb.length-1)],b)},sb.resume=function(a){rb.cycleBy&&rb.cycleInterval&&("items"!==rb.cycleBy||Ib[0]&&null!=Jb.activeItem)&&!(a<sb.isPaused)&&(sb.isPaused=0,gc?gc=clearTimeout(gc):ob("resume"),gc=setTimeout(function(){switch(ob("cycle"),rb.cycleBy){case"items":sb.activate(Jb.activeItem>=Ib.length-1?0:Jb.activeItem+1);break;case"pages":sb.activatePage(Jb.activePage>=Gb.length-1?0:Jb.activePage+1)}},rb.cycleInterval))},sb.pause=function(a){a<sb.isPaused||(sb.isPaused=a||100,gc&&(gc=clearTimeout(gc),ob("pause")))},sb.toggle=function(){sb[gc?"pause":"resume"]()},sb.set=function(b,c){a.isPlainObject(b)?a.extend(rb,b):rb.hasOwnProperty(b)&&(rb[b]=c)},sb.add=function(b,c){var d=a(b);Rb?(null==c||!Ib[0]||c>=Ib.length?d.appendTo(vb):Ib.length&&d.insertBefore(Ib[c].el),null!=Jb.activeItem&&c<=Jb.activeItem&&(_b.active=Jb.activeItem+=d.length)):vb.append(d),K()},sb.remove=function(b){if(Rb){var c=S(b);if(c>-1){Hb.eq(c).remove();var d=c===Jb.activeItem;null!=Jb.activeItem&&c<Jb.activeItem&&(_b.active=--Jb.activeItem),K(),d&&(_b.active=null,sb.activate(Jb.activeItem))}}else a(b).remove(),K()},sb.moveAfter=function(a,b){X(a,b,1)},sb.moveBefore=function(a,b){X(a,b)},sb.on=function(a,b){if("object"===e(a))for(var c in a)a.hasOwnProperty(c)&&sb.on(c,a[c]);else if("function"===e(b))for(var d=a.split(" "),f=0,g=d.length;g>f;f++)$b[d[f]]=$b[d[f]]||[],-1===Y(d[f],b)&&$b[d[f]].push(b);else if("array"===e(b))for(var h=0,i=b.length;i>h;h++)sb.on(a,b[h])},sb.one=function(a,b){function c(){b.apply(sb,arguments),sb.off(a,c)}sb.on(a,c)},sb.off=function(a,b){if(b instanceof Array)for(var c=0,d=b.length;d>c;c++)sb.off(a,b[c]);else for(var e=a.split(" "),f=0,g=e.length;g>f;f++)if($b[e[f]]=$b[e[f]]||[],null==b)$b[e[f]].length=0;else{var h=Y(e[f],b);-1!==h&&$b[e[f]].splice(h,1)}},sb.destroy=function(){return Sb.add(Ab).add(zb).add(Eb).add(Ub).add(Vb).add(Wb).add(Xb).add(Yb).add(Zb).off("."+r),u.off("keydown",kb),Wb.add(Xb).add(Yb).add(Zb).removeClass(rb.disabledClass),Hb&&null!=Jb.activeItem&&Hb.eq(Jb.activeItem).removeClass(rb.activeClass),Eb.empty(),tb||(ub.off("."+r),Kb.restore(),Lb.restore(),Mb.restore(),Nb.restore(),a.removeData(b,r)),Ib.length=Gb.length=0,_b={},sb.initialized=0,sb},sb.init=function(){if(!sb.initialized){sb.on(q);var a=["overflow","position"],b=["position","webkitTransform","msTransform","transform","left","top","width","height"];Kb.save.apply(Kb,a),Mb.save.apply(Mb,a),Lb.save.apply(Lb,b),Nb.save.apply(Nb,b);var c=Ab;return tb||(c=c.add(vb),ub.css("overflow","hidden"),m||"static"!==ub.css("position")||ub.css("position","relative")),m?n&&c.css(m,n):("static"===zb.css("position")&&zb.css("position","relative"),c.css({position:"absolute"})),rb.forward&&Ub.on(A,gb),rb.backward&&Vb.on(A,gb),rb.prev&&Wb.on(z,gb),rb.next&&Xb.on(z,gb),rb.prevPage&&Yb.on(z,gb),rb.nextPage&&Zb.on(z,gb),Sb.on(y,ib),zb[0]&&zb.on(z,jb),Rb&&rb.activateOn&&ub.on(rb.activateOn+"."+r,"*",lb),Eb[0]&&rb.activatePageOn&&Eb.on(rb.activatePageOn+"."+r,"*",mb),Tb.on(v,{source:"slidee"},bb),Ab&&Ab.on(v,{source:"handle"},bb),u.on("keydown",kb),tb||(ub.on("mouseenter."+r+" mouseleave."+r,nb),ub.on("scroll."+r,h)),sb.initialized=1,K(!0),rb.cycleBy&&!tb&&sb[rb.startPaused?"pause":"resume"](),sb}}}function e(a){return null==a?String(a):"object"==typeof a||"function"==typeof a?Object.prototype.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase()||"object":typeof a}function f(a,b){a.preventDefault(),b&&a.stopPropagation()}function g(b){f(b,1),a(this).off(b.type,g)}function h(){this.scrollLeft=0,this.scrollTop=0}function i(a){return!isNaN(parseFloat(a))&&isFinite(a)}function j(a,b){return 0|G(String(a.css(b)).replace(/[^\-0-9.]/g,""))}function k(a,b,c){return b>a?b:a>c?c:a}function l(a){var b={};return b.style={},b.save=function(){if(a&&a.nodeType){for(var c=0;c<arguments.length;c++)b.style[arguments[c]]=a.style[arguments[c]];return b}},b.restore=function(){if(a&&a.nodeType){for(var c in b.style)b.style.hasOwnProperty(c)&&(a.style[c]=b.style[c]);return b}},b}var m,n,o,p="sly",q="Sly",r=p,s=b.cancelAnimationFrame||b.cancelRequestAnimationFrame,t=b.requestAnimationFrame,u=a(document),v="touchstart."+r+" mousedown."+r,w="mousemove."+r+" mouseup."+r,x="touchmove."+r+" touchend."+r,y=(document.implementation.hasFeature("Event.wheel","3.0")?"wheel.":"mousewheel.")+r,z="click."+r,A="mousedown."+r,B=["INPUT","SELECT","BUTTON","TEXTAREA"],C=[],D=Math.abs,E=Math.sqrt,F=Math.pow,G=Math.round,H=Math.max,I=Math.min,J=0;u.on(y,function(a){var b=a.originalEvent[r],c=+new Date;(!b||b.options.scrollHijack<c-J)&&(J=c)}),function(a){function b(a){var b=(new Date).getTime(),d=Math.max(0,16-(b-c)),e=setTimeout(a,d);return c=b,e}t=a.requestAnimationFrame||a.webkitRequestAnimationFrame||b;var c=(new Date).getTime(),d=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.clearTimeout;s=function(b){d.call(a,b)}}(window),function(){function a(a){for(var d=0,e=b.length;e>d;d++){var f=b[d]?b[d]+a.charAt(0).toUpperCase()+a.slice(1):a;if(null!=c.style[f])return f}}var b=["","webkit","moz","ms","o"],c=document.createElement("div");m=a("transform"),n=a("perspective")?"translateZ(0) ":""}(),b[q]=d,a.fn[p]=function(b,c){var f,g;return a.isPlainObject(b)||(("string"===e(b)||b===!1)&&(f=b===!1?"destroy":b,g=Array.prototype.slice.call(arguments,1)),b={}),this.each(function(e,h){var i=a.data(h,r);i||f?i&&f&&i[f]&&i[f].apply(i,g):i=a.data(h,r,new d(h,b,c).init())})},d.defaults={slidee:null,horizontal:!1,itemNav:null,itemSelector:null,smart:!1,activateOn:null,activateMiddle:!1,scrollSource:null,scrollBy:0,scrollHijack:300,scrollTrap:!1,dragSource:null,mouseDragging:!1,touchDragging:!1,releaseSwing:!1,swingSpeed:.2,elasticBounds:!1,interactive:null,scrollBar:null,dragHandle:!1,dynamicHandle:!1,minHandleSize:50,clickBar:!1,syncSpeed:.5,pagesBar:null,activatePageOn:null,pageBuilder:function(a){return"<li>"+(a+1)+"</li>"},forward:null,backward:null,prev:null,next:null,prevPage:null,nextPage:null,cycleBy:null,cycleInterval:5e3,pauseOnHover:!1,startPaused:!1,moveBy:300,speed:0,easing:"swing",startAt:null,keyboardNavBy:null,draggedClass:"dragged",activeClass:"active",disabledClass:"disabled"}}(jQuery,window);

// jQuery easing 1.3
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){var e=1.70158,f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=d*0.3*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c:0.5*g*Math.pow(2,-10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?0.5*jQuery.easing.easeInBounce(e,2*a,0,b,d)+c:0.5*jQuery.easing.easeOutBounce(e,2*a-d,0,b,d)+0.5*b+c}});
/*
 * Swiper 2.6.1
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: May 6, 2014
*/
var Swiper=function(a,b){"use strict";function c(a,b){return document.querySelectorAll?(b||document).querySelectorAll(a):jQuery(a,b)}function d(a){return"[object Array]"===Object.prototype.toString.apply(a)?!0:!1}function e(){var a=F-I;return b.freeMode&&(a=F-I),b.slidesPerView>C.slides.length&&!b.centeredSlides&&(a=0),0>a&&(a=0),a}function f(){function a(a){var c=new Image;c.onload=function(){C&&void 0!==C.imagesLoaded&&C.imagesLoaded++,C.imagesLoaded===C.imagesToLoad.length&&(C.reInit(),b.onImagesReady&&C.fireCallback(b.onImagesReady,C))},c.src=a}var d=C.h.addEventListener,e="wrapper"===b.eventTarget?C.wrapper:C.container;if(C.browser.ie10||C.browser.ie11?(d(e,C.touchEvents.touchStart,p),d(document,C.touchEvents.touchMove,q),d(document,C.touchEvents.touchEnd,r)):(C.support.touch&&(d(e,"touchstart",p),d(e,"touchmove",q),d(e,"touchend",r)),b.simulateTouch&&(d(e,"mousedown",p),d(document,"mousemove",q),d(document,"mouseup",r))),b.autoResize&&d(window,"resize",C.resizeFix),g(),C._wheelEvent=!1,b.mousewheelControl){if(void 0!==document.onmousewheel&&(C._wheelEvent="mousewheel"),!C._wheelEvent)try{new WheelEvent("wheel"),C._wheelEvent="wheel"}catch(f){}C._wheelEvent||(C._wheelEvent="DOMMouseScroll"),C._wheelEvent&&d(C.container,C._wheelEvent,j)}if(b.keyboardControl&&d(document,"keydown",i),b.updateOnImagesReady){C.imagesToLoad=c("img",C.container);for(var h=0;h<C.imagesToLoad.length;h++)a(C.imagesToLoad[h].getAttribute("src"))}}function g(){var a,d=C.h.addEventListener;if(b.preventLinks){var e=c("a",C.container);for(a=0;a<e.length;a++)d(e[a],"click",n)}if(b.releaseFormElements){var f=c("input, textarea, select",C.container);for(a=0;a<f.length;a++)d(f[a],C.touchEvents.touchStart,o,!0)}if(b.onSlideClick)for(a=0;a<C.slides.length;a++)d(C.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<C.slides.length;a++)d(C.slides[a],C.touchEvents.touchStart,l)}function h(){var a,d=C.h.removeEventListener;if(b.onSlideClick)for(a=0;a<C.slides.length;a++)d(C.slides[a],"click",k);if(b.onSlideTouch)for(a=0;a<C.slides.length;a++)d(C.slides[a],C.touchEvents.touchStart,l);if(b.releaseFormElements){var e=c("input, textarea, select",C.container);for(a=0;a<e.length;a++)d(e[a],C.touchEvents.touchStart,o,!0)}if(b.preventLinks){var f=c("a",C.container);for(a=0;a<f.length;a++)d(f[a],"click",n)}}function i(a){var b=a.keyCode||a.charCode;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey)){if(37===b||39===b||38===b||40===b){for(var c=!1,d=C.h.getOffset(C.container),e=C.h.windowScroll().left,f=C.h.windowScroll().top,g=C.h.windowWidth(),h=C.h.windowHeight(),i=[[d.left,d.top],[d.left+C.width,d.top],[d.left,d.top+C.height],[d.left+C.width,d.top+C.height]],j=0;j<i.length;j++){var k=i[j];k[0]>=e&&k[0]<=e+g&&k[1]>=f&&k[1]<=f+h&&(c=!0)}if(!c)return}M?((37===b||39===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),39===b&&C.swipeNext(),37===b&&C.swipePrev()):((38===b||40===b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),40===b&&C.swipeNext(),38===b&&C.swipePrev())}}function j(a){var c=C._wheelEvent,d=0;if(a.detail)d=-a.detail;else if("mousewheel"===c)if(b.mousewheelControlForceToAxis)if(M){if(!(Math.abs(a.wheelDeltaX)>Math.abs(a.wheelDeltaY)))return;d=a.wheelDeltaX}else{if(!(Math.abs(a.wheelDeltaY)>Math.abs(a.wheelDeltaX)))return;d=a.wheelDeltaY}else d=a.wheelDelta;else if("DOMMouseScroll"===c)d=-a.detail;else if("wheel"===c)if(b.mousewheelControlForceToAxis)if(M){if(!(Math.abs(a.deltaX)>Math.abs(a.deltaY)))return;d=-a.deltaX}else{if(!(Math.abs(a.deltaY)>Math.abs(a.deltaX)))return;d=-a.deltaY}else d=Math.abs(a.deltaX)>Math.abs(a.deltaY)?-a.deltaX:-a.deltaY;if(b.freeMode){var f=C.getWrapperTranslate()+d;if(f>0&&(f=0),f<-e()&&(f=-e()),C.setWrapperTransition(0),C.setWrapperTranslate(f),C.updateActiveSlide(f),0===f||f===-e())return}else(new Date).getTime()-U>60&&(0>d?C.swipeNext():C.swipePrev()),U=(new Date).getTime();return b.autoplay&&C.stopAutoplay(!0),a.preventDefault?a.preventDefault():a.returnValue=!1,!1}function k(a){C.allowSlideClick&&(m(a),C.fireCallback(b.onSlideClick,C,a))}function l(a){m(a),C.fireCallback(b.onSlideTouch,C,a)}function m(a){if(a.currentTarget)C.clickedSlide=a.currentTarget;else{var c=a.srcElement;do{if(c.className.indexOf(b.slideClass)>-1)break;c=c.parentNode}while(c);C.clickedSlide=c}C.clickedSlideIndex=C.slides.indexOf(C.clickedSlide),C.clickedSlideLoopIndex=C.clickedSlideIndex-(C.loopedSlides||0)}function n(a){return C.allowLinks?void 0:(a.preventDefault?a.preventDefault():a.returnValue=!1,b.preventLinksPropagation&&"stopPropagation"in a&&a.stopPropagation(),!1)}function o(a){return a.stopPropagation?a.stopPropagation():a.returnValue=!1,!1}function p(a){if(b.preventLinks&&(C.allowLinks=!0),C.isTouched||b.onlyExternal)return!1;if(b.noSwiping&&(a.target||a.srcElement)&&s(a.target||a.srcElement))return!1;if($=!1,C.isTouched=!0,Z="touchstart"===a.type,!Z||1===a.targetTouches.length){C.callPlugins("onTouchStartBegin"),Z||C.isAndroid||(a.preventDefault?a.preventDefault():a.returnValue=!1);var c=Z?a.targetTouches[0].pageX:a.pageX||a.clientX,d=Z?a.targetTouches[0].pageY:a.pageY||a.clientY;C.touches.startX=C.touches.currentX=c,C.touches.startY=C.touches.currentY=d,C.touches.start=C.touches.current=M?c:d,C.setWrapperTransition(0),C.positions.start=C.positions.current=C.getWrapperTranslate(),C.setWrapperTranslate(C.positions.start),C.times.start=(new Date).getTime(),H=void 0,b.moveStartThreshold>0&&(W=!1),b.onTouchStart&&C.fireCallback(b.onTouchStart,C,a),C.callPlugins("onTouchStartEnd")}}function q(a){if(C.isTouched&&!b.onlyExternal&&(!Z||"mousemove"!==a.type)){var c=Z?a.targetTouches[0].pageX:a.pageX||a.clientX,d=Z?a.targetTouches[0].pageY:a.pageY||a.clientY;if("undefined"==typeof H&&M&&(H=!!(H||Math.abs(d-C.touches.startY)>Math.abs(c-C.touches.startX))),"undefined"!=typeof H||M||(H=!!(H||Math.abs(d-C.touches.startY)<Math.abs(c-C.touches.startX))),H)return void(C.isTouched=!1);if(a.assignedToSwiper)return void(C.isTouched=!1);if(a.assignedToSwiper=!0,b.preventLinks&&(C.allowLinks=!1),b.onSlideClick&&(C.allowSlideClick=!1),b.autoplay&&C.stopAutoplay(!0),!Z||1===a.touches.length){if(C.isMoved||(C.callPlugins("onTouchMoveStart"),b.loop&&(C.fixLoop(),C.positions.start=C.getWrapperTranslate()),b.onTouchMoveStart&&C.fireCallback(b.onTouchMoveStart,C)),C.isMoved=!0,a.preventDefault?a.preventDefault():a.returnValue=!1,C.touches.current=M?c:d,C.positions.current=(C.touches.current-C.touches.start)*b.touchRatio+C.positions.start,C.positions.current>0&&b.onResistanceBefore&&C.fireCallback(b.onResistanceBefore,C,C.positions.current),C.positions.current<-e()&&b.onResistanceAfter&&C.fireCallback(b.onResistanceAfter,C,Math.abs(C.positions.current+e())),b.resistance&&"100%"!==b.resistance){var f;if(C.positions.current>0&&(f=1-C.positions.current/I/2,C.positions.current=.5>f?I/2:C.positions.current*f),C.positions.current<-e()){var g=(C.touches.current-C.touches.start)*b.touchRatio+(e()+C.positions.start);f=(I+g)/I;var h=C.positions.current-g*(1-f)/2,i=-e()-I/2;C.positions.current=i>h||0>=f?i:h}}if(b.resistance&&"100%"===b.resistance&&(C.positions.current>0&&(!b.freeMode||b.freeModeFluid)&&(C.positions.current=0),C.positions.current<-e()&&(!b.freeMode||b.freeModeFluid)&&(C.positions.current=-e())),!b.followFinger)return;if(b.moveStartThreshold)if(Math.abs(C.touches.current-C.touches.start)>b.moveStartThreshold||W){if(!W)return W=!0,void(C.touches.start=C.touches.current);C.setWrapperTranslate(C.positions.current)}else C.positions.current=C.positions.start;else C.setWrapperTranslate(C.positions.current);return(b.freeMode||b.watchActiveIndex)&&C.updateActiveSlide(C.positions.current),b.grabCursor&&(C.container.style.cursor="move",C.container.style.cursor="grabbing",C.container.style.cursor="-moz-grabbin",C.container.style.cursor="-webkit-grabbing"),X||(X=C.touches.current),Y||(Y=(new Date).getTime()),C.velocity=(C.touches.current-X)/((new Date).getTime()-Y)/2,Math.abs(C.touches.current-X)<2&&(C.velocity=0),X=C.touches.current,Y=(new Date).getTime(),C.callPlugins("onTouchMoveEnd"),b.onTouchMove&&C.fireCallback(b.onTouchMove,C,a),!1}}}function r(a){if(H&&C.swipeReset(),!b.onlyExternal&&C.isTouched){C.isTouched=!1,b.grabCursor&&(C.container.style.cursor="move",C.container.style.cursor="grab",C.container.style.cursor="-moz-grab",C.container.style.cursor="-webkit-grab"),C.positions.current||0===C.positions.current||(C.positions.current=C.positions.start),b.followFinger&&C.setWrapperTranslate(C.positions.current),C.times.end=(new Date).getTime(),C.touches.diff=C.touches.current-C.touches.start,C.touches.abs=Math.abs(C.touches.diff),C.positions.diff=C.positions.current-C.positions.start,C.positions.abs=Math.abs(C.positions.diff);var c=C.positions.diff,d=C.positions.abs,f=C.times.end-C.times.start;5>d&&300>f&&C.allowLinks===!1&&(b.freeMode||0===d||C.swipeReset(),b.preventLinks&&(C.allowLinks=!0),b.onSlideClick&&(C.allowSlideClick=!0)),setTimeout(function(){b.preventLinks&&(C.allowLinks=!0),b.onSlideClick&&(C.allowSlideClick=!0)},100);var g=e();if(!C.isMoved&&b.freeMode)return C.isMoved=!1,b.onTouchEnd&&C.fireCallback(b.onTouchEnd,C,a),void C.callPlugins("onTouchEnd");if(!C.isMoved||C.positions.current>0||C.positions.current<-g)return C.swipeReset(),b.onTouchEnd&&C.fireCallback(b.onTouchEnd,C,a),void C.callPlugins("onTouchEnd");if(C.isMoved=!1,b.freeMode){if(b.freeModeFluid){var h,i=1e3*b.momentumRatio,j=C.velocity*i,k=C.positions.current+j,l=!1,m=20*Math.abs(C.velocity)*b.momentumBounceRatio;-g>k&&(b.momentumBounce&&C.support.transitions?(-m>k+g&&(k=-g-m),h=-g,l=!0,$=!0):k=-g),k>0&&(b.momentumBounce&&C.support.transitions?(k>m&&(k=m),h=0,l=!0,$=!0):k=0),0!==C.velocity&&(i=Math.abs((k-C.positions.current)/C.velocity)),C.setWrapperTranslate(k),C.setWrapperTransition(i),b.momentumBounce&&l&&C.wrapperTransitionEnd(function(){$&&(b.onMomentumBounce&&C.fireCallback(b.onMomentumBounce,C),C.callPlugins("onMomentumBounce"),C.setWrapperTranslate(h),C.setWrapperTransition(300))}),C.updateActiveSlide(k)}return(!b.freeModeFluid||f>=300)&&C.updateActiveSlide(C.positions.current),b.onTouchEnd&&C.fireCallback(b.onTouchEnd,C,a),void C.callPlugins("onTouchEnd")}G=0>c?"toNext":"toPrev","toNext"===G&&300>=f&&(30>d||!b.shortSwipes?C.swipeReset():C.swipeNext(!0)),"toPrev"===G&&300>=f&&(30>d||!b.shortSwipes?C.swipeReset():C.swipePrev(!0));var n=0;if("auto"===b.slidesPerView){for(var o,p=Math.abs(C.getWrapperTranslate()),q=0,r=0;r<C.slides.length;r++)if(o=M?C.slides[r].getWidth(!0,b.roundLengths):C.slides[r].getHeight(!0,b.roundLengths),q+=o,q>p){n=o;break}n>I&&(n=I)}else n=E*b.slidesPerView;"toNext"===G&&f>300&&(d>=n*b.longSwipesRatio?C.swipeNext(!0):C.swipeReset()),"toPrev"===G&&f>300&&(d>=n*b.longSwipesRatio?C.swipePrev(!0):C.swipeReset()),b.onTouchEnd&&C.fireCallback(b.onTouchEnd,C,a),C.callPlugins("onTouchEnd")}}function s(a){var c=!1;do a.className.indexOf(b.noSwipingClass)>-1&&(c=!0),a=a.parentElement;while(!c&&a.parentElement&&-1===a.className.indexOf(b.wrapperClass));return!c&&a.className.indexOf(b.wrapperClass)>-1&&a.className.indexOf(b.noSwipingClass)>-1&&(c=!0),c}function t(a,b){var c,d=document.createElement("div");return d.innerHTML=b,c=d.firstChild,c.className+=" "+a,c.outerHTML}function u(a,c,d){function e(){var f=+new Date,l=f-g;h+=i*l/(1e3/60),k="toNext"===j?h>a:a>h,k?(C.setWrapperTranslate(Math.round(h)),C._DOMAnimating=!0,window.setTimeout(function(){e()},1e3/60)):(b.onSlideChangeEnd&&("to"===c?d.runCallbacks===!0&&C.fireCallback(b.onSlideChangeEnd,C):C.fireCallback(b.onSlideChangeEnd,C)),C.setWrapperTranslate(a),C._DOMAnimating=!1)}var f="to"===c&&d.speed>=0?d.speed:b.speed,g=+new Date;if(C.support.transitions||!b.DOMAnimation)C.setWrapperTranslate(a),C.setWrapperTransition(f);else{var h=C.getWrapperTranslate(),i=Math.ceil((a-h)/f*(1e3/60)),j=h>a?"toNext":"toPrev",k="toNext"===j?h>a:a>h;if(C._DOMAnimating)return;e()}C.updateActiveSlide(a),b.onSlideNext&&"next"===c&&C.fireCallback(b.onSlideNext,C,a),b.onSlidePrev&&"prev"===c&&C.fireCallback(b.onSlidePrev,C,a),b.onSlideReset&&"reset"===c&&C.fireCallback(b.onSlideReset,C,a),("next"===c||"prev"===c||"to"===c&&d.runCallbacks===!0)&&v(c)}function v(a){if(C.callPlugins("onSlideChangeStart"),b.onSlideChangeStart)if(b.queueStartCallbacks&&C.support.transitions){if(C._queueStartCallbacks)return;C._queueStartCallbacks=!0,C.fireCallback(b.onSlideChangeStart,C,a),C.wrapperTransitionEnd(function(){C._queueStartCallbacks=!1})}else C.fireCallback(b.onSlideChangeStart,C,a);if(b.onSlideChangeEnd)if(C.support.transitions)if(b.queueEndCallbacks){if(C._queueEndCallbacks)return;C._queueEndCallbacks=!0,C.wrapperTransitionEnd(function(c){C.fireCallback(b.onSlideChangeEnd,c,a)})}else C.wrapperTransitionEnd(function(c){C.fireCallback(b.onSlideChangeEnd,c,a)});else b.DOMAnimation||setTimeout(function(){C.fireCallback(b.onSlideChangeEnd,C,a)},10)}function w(){var a=C.paginationButtons;if(a)for(var b=0;b<a.length;b++)C.h.removeEventListener(a[b],"click",y)}function x(){var a=C.paginationButtons;if(a)for(var b=0;b<a.length;b++)C.h.addEventListener(a[b],"click",y)}function y(a){for(var b,c=a.target||a.srcElement,d=C.paginationButtons,e=0;e<d.length;e++)c===d[e]&&(b=e);C.swipeTo(b)}function z(){_=setTimeout(function(){b.loop?(C.fixLoop(),C.swipeNext(!0)):C.swipeNext(!0)||(b.autoplayStopOnLast?(clearTimeout(_),_=void 0):C.swipeTo(0)),C.wrapperTransitionEnd(function(){"undefined"!=typeof _&&z()})},b.autoplay)}function A(){C.calcSlides(),b.loader.slides.length>0&&0===C.slides.length&&C.loadSlides(),b.loop&&C.createLoop(),C.init(),f(),b.pagination&&C.createPagination(!0),b.loop||b.initialSlide>0?C.swipeTo(b.initialSlide,0,!1):C.updateActiveSlide(0),b.autoplay&&C.startAutoplay(),C.centerIndex=C.activeIndex,b.onSwiperCreated&&C.fireCallback(b.onSwiperCreated,C),C.callPlugins("onSwiperCreated")}if(document.body.__defineGetter__&&HTMLElement){var B=HTMLElement.prototype;B.__defineGetter__&&B.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}if(window.getComputedStyle||(window.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this}),Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var c=b||0,d=this.length;d>c;c++)if(this[c]===a)return c;return-1}),(document.querySelectorAll||window.jQuery)&&"undefined"!=typeof a&&(a.nodeType||0!==c(a).length)){var C=this;C.touches={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,diff:0,abs:0},C.positions={start:0,abs:0,diff:0,current:0},C.times={start:0,end:0},C.id=(new Date).getTime(),C.container=a.nodeType?a:c(a)[0],C.isTouched=!1,C.isMoved=!1,C.activeIndex=0,C.centerIndex=0,C.activeLoaderIndex=0,C.activeLoopIndex=0,C.previousIndex=null,C.velocity=0,C.snapGrid=[],C.slidesGrid=[],C.imagesToLoad=[],C.imagesLoaded=0,C.wrapperLeft=0,C.wrapperRight=0,C.wrapperTop=0,C.wrapperBottom=0,C.isAndroid=navigator.userAgent.toLowerCase().indexOf("android")>=0;var D,E,F,G,H,I,J={eventTarget:"wrapper",mode:"horizontal",touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,slidesPerViewFit:!0,simulateTouch:!0,followFinger:!0,shortSwipes:!0,longSwipesRatio:.5,moveStartThreshold:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,scrollContainer:!1,preventLinks:!0,preventLinksPropagation:!1,noSwiping:!1,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:!1,mousewheelControl:!1,mousewheelControlForceToAxis:!1,useCSS3Transforms:!0,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,loop:!1,loopAdditionalSlides:0,roundLengths:!1,calculateHeight:!1,cssWidthAndHeight:!1,updateOnImagesReady:!0,releaseFormElements:!0,watchActiveIndex:!1,visibilityFullFit:!1,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,queueStartCallbacks:!1,queueEndCallbacks:!1,autoResize:!0,resizeReInit:!1,DOMAnimation:!0,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:!1},slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};b=b||{};for(var K in J)if(K in b&&"object"==typeof b[K])for(var L in J[K])L in b[K]||(b[K][L]=J[K][L]);else K in b||(b[K]=J[K]);C.params=b,b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0),b.loop&&(b.resistance="100%");var M="horizontal"===b.mode,N=["mousedown","mousemove","mouseup"];C.browser.ie10&&(N=["MSPointerDown","MSPointerMove","MSPointerUp"]),C.browser.ie11&&(N=["pointerdown","pointermove","pointerup"]),C.touchEvents={touchStart:C.support.touch||!b.simulateTouch?"touchstart":N[0],touchMove:C.support.touch||!b.simulateTouch?"touchmove":N[1],touchEnd:C.support.touch||!b.simulateTouch?"touchend":N[2]};for(var O=C.container.childNodes.length-1;O>=0;O--)if(C.container.childNodes[O].className)for(var P=C.container.childNodes[O].className.split(/\s+/),Q=0;Q<P.length;Q++)P[Q]===b.wrapperClass&&(D=C.container.childNodes[O]);C.wrapper=D,C._extendSwiperSlide=function(a){return a.append=function(){return b.loop?a.insertAfter(C.slides.length-C.loopedSlides):(C.wrapper.appendChild(a),C.reInit()),a},a.prepend=function(){return b.loop?(C.wrapper.insertBefore(a,C.slides[C.loopedSlides]),C.removeLoopedSlides(),C.calcSlides(),C.createLoop()):C.wrapper.insertBefore(a,C.wrapper.firstChild),C.reInit(),a},a.insertAfter=function(c){if("undefined"==typeof c)return!1;var d;return b.loop?(d=C.slides[c+1+C.loopedSlides],d?C.wrapper.insertBefore(a,d):C.wrapper.appendChild(a),C.removeLoopedSlides(),C.calcSlides(),C.createLoop()):(d=C.slides[c+1],C.wrapper.insertBefore(a,d)),C.reInit(),a},a.clone=function(){return C._extendSwiperSlide(a.cloneNode(!0))},a.remove=function(){C.wrapper.removeChild(a),C.reInit()},a.html=function(b){return"undefined"==typeof b?a.innerHTML:(a.innerHTML=b,a)},a.index=function(){for(var b,c=C.slides.length-1;c>=0;c--)a===C.slides[c]&&(b=c);return b},a.isActive=function(){return a.index()===C.activeIndex?!0:!1},a.swiperSlideDataStorage||(a.swiperSlideDataStorage={}),a.getData=function(b){return a.swiperSlideDataStorage[b]},a.setData=function(b,c){return a.swiperSlideDataStorage[b]=c,a},a.data=function(b,c){return"undefined"==typeof c?a.getAttribute("data-"+b):(a.setAttribute("data-"+b,c),a)},a.getWidth=function(b,c){return C.h.getWidth(a,b,c)},a.getHeight=function(b,c){return C.h.getHeight(a,b,c)},a.getOffset=function(){return C.h.getOffset(a)},a},C.calcSlides=function(a){var c=C.slides?C.slides.length:!1;C.slides=[],C.displaySlides=[];for(var d=0;d<C.wrapper.childNodes.length;d++)if(C.wrapper.childNodes[d].className)for(var e=C.wrapper.childNodes[d].className,f=e.split(/\s+/),i=0;i<f.length;i++)f[i]===b.slideClass&&C.slides.push(C.wrapper.childNodes[d]);for(d=C.slides.length-1;d>=0;d--)C._extendSwiperSlide(C.slides[d]);c!==!1&&(c!==C.slides.length||a)&&(h(),g(),C.updateActiveSlide(),C.params.pagination&&C.createPagination(),C.callPlugins("numberOfSlidesChanged"))},C.createSlide=function(a,c,d){c=c||C.params.slideClass,d=d||b.slideElement;var e=document.createElement(d);return e.innerHTML=a||"",e.className=c,C._extendSwiperSlide(e)},C.appendSlide=function(a,b,c){return a?a.nodeType?C._extendSwiperSlide(a).append():C.createSlide(a,b,c).append():void 0},C.prependSlide=function(a,b,c){return a?a.nodeType?C._extendSwiperSlide(a).prepend():C.createSlide(a,b,c).prepend():void 0},C.insertSlideAfter=function(a,b,c,d){return"undefined"==typeof a?!1:b.nodeType?C._extendSwiperSlide(b).insertAfter(a):C.createSlide(b,c,d).insertAfter(a)},C.removeSlide=function(a){if(C.slides[a]){if(b.loop){if(!C.slides[a+C.loopedSlides])return!1;C.slides[a+C.loopedSlides].remove(),C.removeLoopedSlides(),C.calcSlides(),C.createLoop()}else C.slides[a].remove();return!0}return!1},C.removeLastSlide=function(){return C.slides.length>0?(b.loop?(C.slides[C.slides.length-1-C.loopedSlides].remove(),C.removeLoopedSlides(),C.calcSlides(),C.createLoop()):C.slides[C.slides.length-1].remove(),!0):!1},C.removeAllSlides=function(){for(var a=C.slides.length-1;a>=0;a--)C.slides[a].remove()},C.getSlide=function(a){return C.slides[a]},C.getLastSlide=function(){return C.slides[C.slides.length-1]},C.getFirstSlide=function(){return C.slides[0]},C.activeSlide=function(){return C.slides[C.activeIndex]},C.fireCallback=function(){var a=arguments[0];if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)"function"==typeof a[c]&&a[c](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);else"[object String]"===Object.prototype.toString.call(a)?b["on"+a]&&C.fireCallback(b["on"+a],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]):a(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},C.addCallback=function(a,b){var c,e=this;return e.params["on"+a]?d(this.params["on"+a])?this.params["on"+a].push(b):"function"==typeof this.params["on"+a]?(c=this.params["on"+a],this.params["on"+a]=[],this.params["on"+a].push(c),this.params["on"+a].push(b)):void 0:(this.params["on"+a]=[],this.params["on"+a].push(b))},C.removeCallbacks=function(a){C.params["on"+a]&&(C.params["on"+a]=null)};var R=[];for(var S in C.plugins)if(b[S]){var T=C.plugins[S](C,b[S]);T&&R.push(T)}C.callPlugins=function(a,b){b||(b={});for(var c=0;c<R.length;c++)a in R[c]&&R[c][a](b)},!C.browser.ie10&&!C.browser.ie11||b.onlyExternal||C.wrapper.classList.add("swiper-wp8-"+(M?"horizontal":"vertical")),b.freeMode&&(C.container.className+=" swiper-free-mode"),C.initialized=!1,C.init=function(a,c){var d=C.h.getWidth(C.container,!1,b.roundLengths),e=C.h.getHeight(C.container,!1,b.roundLengths);if(d!==C.width||e!==C.height||a){C.width=d,C.height=e;var f,g,h,i,j,k,l;I=M?d:e;var m=C.wrapper;if(a&&C.calcSlides(c),"auto"===b.slidesPerView){var n=0,o=0;b.slidesOffset>0&&(m.style.paddingLeft="",m.style.paddingRight="",m.style.paddingTop="",m.style.paddingBottom=""),m.style.width="",m.style.height="",b.offsetPxBefore>0&&(M?C.wrapperLeft=b.offsetPxBefore:C.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(M?C.wrapperRight=b.offsetPxAfter:C.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(M?(C.wrapperLeft=(I-this.slides[0].getWidth(!0,b.roundLengths))/2,C.wrapperRight=(I-C.slides[C.slides.length-1].getWidth(!0,b.roundLengths))/2):(C.wrapperTop=(I-C.slides[0].getHeight(!0,b.roundLengths))/2,C.wrapperBottom=(I-C.slides[C.slides.length-1].getHeight(!0,b.roundLengths))/2)),M?(C.wrapperLeft>=0&&(m.style.paddingLeft=C.wrapperLeft+"px"),C.wrapperRight>=0&&(m.style.paddingRight=C.wrapperRight+"px")):(C.wrapperTop>=0&&(m.style.paddingTop=C.wrapperTop+"px"),C.wrapperBottom>=0&&(m.style.paddingBottom=C.wrapperBottom+"px")),k=0;var p=0;for(C.snapGrid=[],C.slidesGrid=[],h=0,l=0;l<C.slides.length;l++){f=C.slides[l].getWidth(!0,b.roundLengths),g=C.slides[l].getHeight(!0,b.roundLengths),b.calculateHeight&&(h=Math.max(h,g));var q=M?f:g;if(b.centeredSlides){var r=l===C.slides.length-1?0:C.slides[l+1].getWidth(!0,b.roundLengths),s=l===C.slides.length-1?0:C.slides[l+1].getHeight(!0,b.roundLengths),t=M?r:s;if(q>I){if(b.slidesPerViewFit)C.snapGrid.push(k+C.wrapperLeft),C.snapGrid.push(k+q-I+C.wrapperLeft);else for(var u=0;u<=Math.floor(q/(I+C.wrapperLeft));u++)C.snapGrid.push(0===u?k+C.wrapperLeft:k+C.wrapperLeft+I*u);C.slidesGrid.push(k+C.wrapperLeft)}else C.snapGrid.push(p),C.slidesGrid.push(p);p+=q/2+t/2}else{if(q>I)if(b.slidesPerViewFit)C.snapGrid.push(k),C.snapGrid.push(k+q-I);else if(0!==I)for(var v=0;v<=Math.floor(q/I);v++)C.snapGrid.push(k+I*v);else C.snapGrid.push(k);else C.snapGrid.push(k);C.slidesGrid.push(k)}k+=q,n+=f,o+=g}b.calculateHeight&&(C.height=h),M?(F=n+C.wrapperRight+C.wrapperLeft,m.style.width=n+"px",m.style.height=C.height+"px"):(F=o+C.wrapperTop+C.wrapperBottom,m.style.width=C.width+"px",m.style.height=o+"px")}else if(b.scrollContainer)m.style.width="",m.style.height="",i=C.slides[0].getWidth(!0,b.roundLengths),j=C.slides[0].getHeight(!0,b.roundLengths),F=M?i:j,m.style.width=i+"px",m.style.height=j+"px",E=M?i:j;else{if(b.calculateHeight){for(h=0,j=0,M||(C.container.style.height=""),m.style.height="",l=0;l<C.slides.length;l++)C.slides[l].style.height="",h=Math.max(C.slides[l].getHeight(!0),h),M||(j+=C.slides[l].getHeight(!0));g=h,C.height=g,M?j=g:(I=g,C.container.style.height=I+"px")}else g=M?C.height:C.height/b.slidesPerView,b.roundLengths&&(g=Math.round(g)),j=M?C.height:C.slides.length*g;for(f=M?C.width/b.slidesPerView:C.width,b.roundLengths&&(f=Math.round(f)),i=M?C.slides.length*f:C.width,E=M?f:g,b.offsetSlidesBefore>0&&(M?C.wrapperLeft=E*b.offsetSlidesBefore:C.wrapperTop=E*b.offsetSlidesBefore),b.offsetSlidesAfter>0&&(M?C.wrapperRight=E*b.offsetSlidesAfter:C.wrapperBottom=E*b.offsetSlidesAfter),b.offsetPxBefore>0&&(M?C.wrapperLeft=b.offsetPxBefore:C.wrapperTop=b.offsetPxBefore),b.offsetPxAfter>0&&(M?C.wrapperRight=b.offsetPxAfter:C.wrapperBottom=b.offsetPxAfter),b.centeredSlides&&(M?(C.wrapperLeft=(I-E)/2,C.wrapperRight=(I-E)/2):(C.wrapperTop=(I-E)/2,C.wrapperBottom=(I-E)/2)),M?(C.wrapperLeft>0&&(m.style.paddingLeft=C.wrapperLeft+"px"),C.wrapperRight>0&&(m.style.paddingRight=C.wrapperRight+"px")):(C.wrapperTop>0&&(m.style.paddingTop=C.wrapperTop+"px"),C.wrapperBottom>0&&(m.style.paddingBottom=C.wrapperBottom+"px")),F=M?i+C.wrapperRight+C.wrapperLeft:j+C.wrapperTop+C.wrapperBottom,b.cssWidthAndHeight||(parseFloat(i)>0&&(m.style.width=i+"px"),parseFloat(j)>0&&(m.style.height=j+"px")),k=0,C.snapGrid=[],C.slidesGrid=[],l=0;l<C.slides.length;l++)C.snapGrid.push(k),C.slidesGrid.push(k),k+=E,b.cssWidthAndHeight||(parseFloat(f)>0&&(C.slides[l].style.width=f+"px"),parseFloat(g)>0&&(C.slides[l].style.height=g+"px"))}C.initialized?(C.callPlugins("onInit"),b.onInit&&C.fireCallback(b.onInit,C)):(C.callPlugins("onFirstInit"),b.onFirstInit&&C.fireCallback(b.onFirstInit,C)),C.initialized=!0}},C.reInit=function(a){C.init(!0,a)},C.resizeFix=function(a){C.callPlugins("beforeResizeFix"),C.init(b.resizeReInit||a),b.freeMode?C.getWrapperTranslate()<-e()&&(C.setWrapperTransition(0),C.setWrapperTranslate(-e())):(C.swipeTo(b.loop?C.activeLoopIndex:C.activeIndex,0,!1),b.autoplay&&(C.support.transitions&&"undefined"!=typeof _?"undefined"!=typeof _&&(clearTimeout(_),_=void 0,C.startAutoplay()):"undefined"!=typeof ab&&(clearInterval(ab),ab=void 0,C.startAutoplay()))),C.callPlugins("afterResizeFix")},C.destroy=function(){var a=C.h.removeEventListener,c="wrapper"===b.eventTarget?C.wrapper:C.container;C.browser.ie10||C.browser.ie11?(a(c,C.touchEvents.touchStart,p),a(document,C.touchEvents.touchMove,q),a(document,C.touchEvents.touchEnd,r)):(C.support.touch&&(a(c,"touchstart",p),a(c,"touchmove",q),a(c,"touchend",r)),b.simulateTouch&&(a(c,"mousedown",p),a(document,"mousemove",q),a(document,"mouseup",r))),b.autoResize&&a(window,"resize",C.resizeFix),h(),b.paginationClickable&&w(),b.mousewheelControl&&C._wheelEvent&&a(C.container,C._wheelEvent,j),b.keyboardControl&&a(document,"keydown",i),b.autoplay&&C.stopAutoplay(),C.callPlugins("onDestroy"),C=null},C.disableKeyboardControl=function(){b.keyboardControl=!1,C.h.removeEventListener(document,"keydown",i)},C.enableKeyboardControl=function(){b.keyboardControl=!0,C.h.addEventListener(document,"keydown",i)};var U=(new Date).getTime();if(C.disableMousewheelControl=function(){return C._wheelEvent?(b.mousewheelControl=!1,C.h.removeEventListener(C.container,C._wheelEvent,j),!0):!1},C.enableMousewheelControl=function(){return C._wheelEvent?(b.mousewheelControl=!0,C.h.addEventListener(C.container,C._wheelEvent,j),!0):!1},b.grabCursor){var V=C.container.style;V.cursor="move",V.cursor="grab",V.cursor="-moz-grab",V.cursor="-webkit-grab"}C.allowSlideClick=!0,C.allowLinks=!0;var W,X,Y,Z=!1,$=!0;C.swipeNext=function(a){!a&&b.loop&&C.fixLoop(),!a&&b.autoplay&&C.stopAutoplay(!0),C.callPlugins("onSwipeNext");var c=C.getWrapperTranslate(),d=c;if("auto"===b.slidesPerView){for(var f=0;f<C.snapGrid.length;f++)if(-c>=C.snapGrid[f]&&-c<C.snapGrid[f+1]){d=-C.snapGrid[f+1];break}}else{var g=E*b.slidesPerGroup;d=-(Math.floor(Math.abs(c)/Math.floor(g))*g+g)}return d<-e()&&(d=-e()),d===c?!1:(u(d,"next"),!0)},C.swipePrev=function(a){!a&&b.loop&&C.fixLoop(),!a&&b.autoplay&&C.stopAutoplay(!0),C.callPlugins("onSwipePrev");var c,d=Math.ceil(C.getWrapperTranslate());if("auto"===b.slidesPerView){c=0;for(var e=1;e<C.snapGrid.length;e++){if(-d===C.snapGrid[e]){c=-C.snapGrid[e-1];break}if(-d>C.snapGrid[e]&&-d<C.snapGrid[e+1]){c=-C.snapGrid[e];break}}}else{var f=E*b.slidesPerGroup;c=-(Math.ceil(-d/f)-1)*f}return c>0&&(c=0),c===d?!1:(u(c,"prev"),!0)},C.swipeReset=function(){C.callPlugins("onSwipeReset");{var a,c=C.getWrapperTranslate(),d=E*b.slidesPerGroup;-e()}if("auto"===b.slidesPerView){a=0;for(var f=0;f<C.snapGrid.length;f++){if(-c===C.snapGrid[f])return;if(-c>=C.snapGrid[f]&&-c<C.snapGrid[f+1]){a=C.positions.diff>0?-C.snapGrid[f+1]:-C.snapGrid[f];break}}-c>=C.snapGrid[C.snapGrid.length-1]&&(a=-C.snapGrid[C.snapGrid.length-1]),c<=-e()&&(a=-e())}else a=0>c?Math.round(c/d)*d:0;return b.scrollContainer&&(a=0>c?c:0),a<-e()&&(a=-e()),b.scrollContainer&&I>E&&(a=0),a===c?!1:(u(a,"reset"),!0)},C.swipeTo=function(a,c,d){a=parseInt(a,10),C.callPlugins("onSwipeTo",{index:a,speed:c}),b.loop&&(a+=C.loopedSlides);var f=C.getWrapperTranslate();if(!(a>C.slides.length-1||0>a)){var g;return g="auto"===b.slidesPerView?-C.slidesGrid[a]:-a*E,g<-e()&&(g=-e()),g===f?!1:(d=d===!1?!1:!0,u(g,"to",{index:a,speed:c,runCallbacks:d}),!0)}},C._queueStartCallbacks=!1,C._queueEndCallbacks=!1,C.updateActiveSlide=function(a){if(C.initialized&&0!==C.slides.length){C.previousIndex=C.activeIndex,"undefined"==typeof a&&(a=C.getWrapperTranslate()),a>0&&(a=0);var c;if("auto"===b.slidesPerView){if(C.activeIndex=C.slidesGrid.indexOf(-a),C.activeIndex<0){for(c=0;c<C.slidesGrid.length-1&&!(-a>C.slidesGrid[c]&&-a<C.slidesGrid[c+1]);c++);var d=Math.abs(C.slidesGrid[c]+a),e=Math.abs(C.slidesGrid[c+1]+a);C.activeIndex=e>=d?c:c+1}}else C.activeIndex=Math[b.visibilityFullFit?"ceil":"round"](-a/E);if(C.activeIndex===C.slides.length&&(C.activeIndex=C.slides.length-1),C.activeIndex<0&&(C.activeIndex=0),C.slides[C.activeIndex]){if(C.calcVisibleSlides(a),C.support.classList){var f;for(c=0;c<C.slides.length;c++)f=C.slides[c],f.classList.remove(b.slideActiveClass),C.visibleSlides.indexOf(f)>=0?f.classList.add(b.slideVisibleClass):f.classList.remove(b.slideVisibleClass);C.slides[C.activeIndex].classList.add(b.slideActiveClass)}else{var g=new RegExp("\\s*"+b.slideActiveClass),h=new RegExp("\\s*"+b.slideVisibleClass);for(c=0;c<C.slides.length;c++)C.slides[c].className=C.slides[c].className.replace(g,"").replace(h,""),C.visibleSlides.indexOf(C.slides[c])>=0&&(C.slides[c].className+=" "+b.slideVisibleClass);C.slides[C.activeIndex].className+=" "+b.slideActiveClass}if(b.loop){var i=C.loopedSlides;C.activeLoopIndex=C.activeIndex-i,C.activeLoopIndex>=C.slides.length-2*i&&(C.activeLoopIndex=C.slides.length-2*i-C.activeLoopIndex),C.activeLoopIndex<0&&(C.activeLoopIndex=C.slides.length-2*i+C.activeLoopIndex),C.activeLoopIndex<0&&(C.activeLoopIndex=0)}else C.activeLoopIndex=C.activeIndex;b.pagination&&C.updatePagination(a)}}},C.createPagination=function(a){if(b.paginationClickable&&C.paginationButtons&&w(),C.paginationContainer=b.pagination.nodeType?b.pagination:c(b.pagination)[0],b.createPagination){var d="",e=C.slides.length,f=e;b.loop&&(f-=2*C.loopedSlides);for(var g=0;f>g;g++)d+="<"+b.paginationElement+' class="'+b.paginationElementClass+'"></'+b.paginationElement+">";C.paginationContainer.innerHTML=d}C.paginationButtons=c("."+b.paginationElementClass,C.paginationContainer),a||C.updatePagination(),C.callPlugins("onCreatePagination"),b.paginationClickable&&x()},C.updatePagination=function(a){if(b.pagination&&!(C.slides.length<1)){var d=c("."+b.paginationActiveClass,C.paginationContainer);
if(d){var e=C.paginationButtons;if(0!==e.length){for(var f=0;f<e.length;f++)e[f].className=b.paginationElementClass;var g=b.loop?C.loopedSlides:0;if(b.paginationAsRange){C.visibleSlides||C.calcVisibleSlides(a);var h,i=[];for(h=0;h<C.visibleSlides.length;h++){var j=C.slides.indexOf(C.visibleSlides[h])-g;b.loop&&0>j&&(j=C.slides.length-2*C.loopedSlides+j),b.loop&&j>=C.slides.length-2*C.loopedSlides&&(j=C.slides.length-2*C.loopedSlides-j,j=Math.abs(j)),i.push(j)}for(h=0;h<i.length;h++)e[i[h]]&&(e[i[h]].className+=" "+b.paginationVisibleClass);b.loop?void 0!==e[C.activeLoopIndex]&&(e[C.activeLoopIndex].className+=" "+b.paginationActiveClass):e[C.activeIndex].className+=" "+b.paginationActiveClass}else b.loop?e[C.activeLoopIndex]&&(e[C.activeLoopIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass):e[C.activeIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass}}}},C.calcVisibleSlides=function(a){var c=[],d=0,e=0,f=0;M&&C.wrapperLeft>0&&(a+=C.wrapperLeft),!M&&C.wrapperTop>0&&(a+=C.wrapperTop);for(var g=0;g<C.slides.length;g++){d+=e,e="auto"===b.slidesPerView?M?C.h.getWidth(C.slides[g],!0,b.roundLengths):C.h.getHeight(C.slides[g],!0,b.roundLengths):E,f=d+e;var h=!1;b.visibilityFullFit?(d>=-a&&-a+I>=f&&(h=!0),-a>=d&&f>=-a+I&&(h=!0)):(f>-a&&-a+I>=f&&(h=!0),d>=-a&&-a+I>d&&(h=!0),-a>d&&f>-a+I&&(h=!0)),h&&c.push(C.slides[g])}0===c.length&&(c=[C.slides[C.activeIndex]]),C.visibleSlides=c};var _,ab;C.startAutoplay=function(){if(C.support.transitions){if("undefined"!=typeof _)return!1;if(!b.autoplay)return;C.callPlugins("onAutoplayStart"),b.onAutoplayStart&&C.fireCallback(b.onAutoplayStart,C),z()}else{if("undefined"!=typeof ab)return!1;if(!b.autoplay)return;C.callPlugins("onAutoplayStart"),b.onAutoplayStart&&C.fireCallback(b.onAutoplayStart,C),ab=setInterval(function(){b.loop?(C.fixLoop(),C.swipeNext(!0)):C.swipeNext(!0)||(b.autoplayStopOnLast?(clearInterval(ab),ab=void 0):C.swipeTo(0))},b.autoplay)}},C.stopAutoplay=function(a){if(C.support.transitions){if(!_)return;_&&clearTimeout(_),_=void 0,a&&!b.autoplayDisableOnInteraction&&C.wrapperTransitionEnd(function(){z()}),C.callPlugins("onAutoplayStop"),b.onAutoplayStop&&C.fireCallback(b.onAutoplayStop,C)}else ab&&clearInterval(ab),ab=void 0,C.callPlugins("onAutoplayStop"),b.onAutoplayStop&&C.fireCallback(b.onAutoplayStop,C)},C.loopCreated=!1,C.removeLoopedSlides=function(){if(C.loopCreated)for(var a=0;a<C.slides.length;a++)C.slides[a].getData("looped")===!0&&C.wrapper.removeChild(C.slides[a])},C.createLoop=function(){if(0!==C.slides.length){C.loopedSlides="auto"===b.slidesPerView?b.loopedSlides||1:b.slidesPerView+b.loopAdditionalSlides,C.loopedSlides>C.slides.length&&(C.loopedSlides=C.slides.length);var a,c="",d="",e="",f=C.slides.length,g=Math.floor(C.loopedSlides/f),h=C.loopedSlides%f;for(a=0;g*f>a;a++){var i=a;if(a>=f){var j=Math.floor(a/f);i=a-f*j}e+=C.slides[i].outerHTML}for(a=0;h>a;a++)d+=t(b.slideDuplicateClass,C.slides[a].outerHTML);for(a=f-h;f>a;a++)c+=t(b.slideDuplicateClass,C.slides[a].outerHTML);var k=c+e+D.innerHTML+e+d;for(D.innerHTML=k,C.loopCreated=!0,C.calcSlides(),a=0;a<C.slides.length;a++)(a<C.loopedSlides||a>=C.slides.length-C.loopedSlides)&&C.slides[a].setData("looped",!0);C.callPlugins("onCreateLoop")}},C.fixLoop=function(){var a;C.activeIndex<C.loopedSlides?(a=C.slides.length-3*C.loopedSlides+C.activeIndex,C.swipeTo(a,0,!1)):("auto"===b.slidesPerView&&C.activeIndex>=2*C.loopedSlides||C.activeIndex>C.slides.length-2*b.slidesPerView)&&(a=-C.slides.length+C.activeIndex+C.loopedSlides,C.swipeTo(a,0,!1))},C.loadSlides=function(){var a="";C.activeLoaderIndex=0;for(var c=b.loader.slides,d=b.loader.loadAllSlides?c.length:b.slidesPerView*(1+b.loader.surroundGroups),e=0;d>e;e++)a+="outer"===b.loader.slidesHTMLType?c[e]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+e+'">'+c[e]+"</"+b.slideElement+">";C.wrapper.innerHTML=a,C.calcSlides(!0),b.loader.loadAllSlides||C.wrapperTransitionEnd(C.reloadSlides,!0)},C.reloadSlides=function(){var a=b.loader.slides,c=parseInt(C.activeSlide().data("swiperindex"),10);if(!(0>c||c>a.length-1)){C.activeLoaderIndex=c;var d=Math.max(0,c-b.slidesPerView*b.loader.surroundGroups),e=Math.min(c+b.slidesPerView*(1+b.loader.surroundGroups)-1,a.length-1);if(c>0){var f=-E*(c-d);C.setWrapperTranslate(f),C.setWrapperTransition(0)}var g;if("reload"===b.loader.logic){C.wrapper.innerHTML="";var h="";for(g=d;e>=g;g++)h+="outer"===b.loader.slidesHTMLType?a[g]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+g+'">'+a[g]+"</"+b.slideElement+">";C.wrapper.innerHTML=h}else{var i=1e3,j=0;for(g=0;g<C.slides.length;g++){var k=C.slides[g].data("swiperindex");d>k||k>e?C.wrapper.removeChild(C.slides[g]):(i=Math.min(k,i),j=Math.max(k,j))}for(g=d;e>=g;g++){var l;i>g&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],C.wrapper.insertBefore(l,C.wrapper.firstChild)),g>j&&(l=document.createElement(b.slideElement),l.className=b.slideClass,l.setAttribute("data-swiperindex",g),l.innerHTML=a[g],C.wrapper.appendChild(l))}}C.reInit(!0)}},A()}};Swiper.prototype={plugins:{},wrapperTransitionEnd:function(a,b){"use strict";function c(){if(a(e),e.params.queueEndCallbacks&&(e._queueEndCallbacks=!1),!b)for(d=0;d<g.length;d++)e.h.removeEventListener(f,g[d],c)}var d,e=this,f=e.wrapper,g=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"];if(a)for(d=0;d<g.length;d++)e.h.addEventListener(f,g[d],c)},getWrapperTranslate:function(a){"use strict";var b,c,d,e,f=this.wrapper;return"undefined"==typeof a&&(a="horizontal"===this.params.mode?"x":"y"),this.support.transforms&&this.params.useCSS3Transforms?(d=window.getComputedStyle(f,null),window.WebKitCSSMatrix?e=new WebKitCSSMatrix("none"===d.webkitTransform?"":d.webkitTransform):(e=d.MozTransform||d.OTransform||d.MsTransform||d.msTransform||d.transform||d.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),b=e.toString().split(",")),"x"===a&&(c=window.WebKitCSSMatrix?e.m41:parseFloat(16===b.length?b[12]:b[4])),"y"===a&&(c=window.WebKitCSSMatrix?e.m42:parseFloat(16===b.length?b[13]:b[5]))):("x"===a&&(c=parseFloat(f.style.left,10)||0),"y"===a&&(c=parseFloat(f.style.top,10)||0)),c||0},setWrapperTranslate:function(a,b,c){"use strict";var d,e=this.wrapper.style,f={x:0,y:0,z:0};3===arguments.length?(f.x=a,f.y=b,f.z=c):("undefined"==typeof b&&(b="horizontal"===this.params.mode?"x":"y"),f[b]=a),this.support.transforms&&this.params.useCSS3Transforms?(d=this.support.transforms3d?"translate3d("+f.x+"px, "+f.y+"px, "+f.z+"px)":"translate("+f.x+"px, "+f.y+"px)",e.webkitTransform=e.MsTransform=e.msTransform=e.MozTransform=e.OTransform=e.transform=d):(e.left=f.x+"px",e.top=f.y+"px"),this.callPlugins("onSetWrapperTransform",f),this.params.onSetWrapperTransform&&this.fireCallback(this.params.onSetWrapperTransform,this,f)},setWrapperTransition:function(a){"use strict";var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=a/1e3+"s",this.callPlugins("onSetWrapperTransition",{duration:a}),this.params.onSetWrapperTransition&&this.fireCallback(this.params.onSetWrapperTransition,this,a)},h:{getWidth:function(a,b,c){"use strict";var d=window.getComputedStyle(a,null).getPropertyValue("width"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0)&&(e=a.offsetWidth-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-right"))),c?Math.round(e):e},getHeight:function(a,b,c){"use strict";if(b)return a.offsetHeight;var d=window.getComputedStyle(a,null).getPropertyValue("height"),e=parseFloat(d);return(isNaN(e)||d.indexOf("%")>0)&&(e=a.offsetHeight-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),b&&(e+=parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(a,null).getPropertyValue("padding-bottom"))),c?Math.round(e):e},getOffset:function(a){"use strict";var b=a.getBoundingClientRect(),c=document.body,d=a.clientTop||c.clientTop||0,e=a.clientLeft||c.clientLeft||0,f=window.pageYOffset||a.scrollTop,g=window.pageXOffset||a.scrollLeft;return document.documentElement&&!window.pageYOffset&&(f=document.documentElement.scrollTop,g=document.documentElement.scrollLeft),{top:b.top+f-d,left:b.left+g-e}},windowWidth:function(){"use strict";return window.innerWidth?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:void 0},windowHeight:function(){"use strict";return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:void 0},windowScroll:function(){"use strict";return"undefined"!=typeof pageYOffset?{left:window.pageXOffset,top:window.pageYOffset}:document.documentElement?{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}:void 0},addEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},removeEventListener:function(a,b,c,d){"use strict";"undefined"==typeof d&&(d=!1),a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)}},setTransform:function(a,b){"use strict";var c=a.style;c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=b},setTranslate:function(a,b){"use strict";var c=a.style,d={x:b.x||0,y:b.y||0,z:b.z||0},e=this.support.transforms3d?"translate3d("+d.x+"px,"+d.y+"px,"+d.z+"px)":"translate("+d.x+"px,"+d.y+"px)";c.webkitTransform=c.MsTransform=c.msTransform=c.MozTransform=c.OTransform=c.transform=e,this.support.transforms||(c.left=d.x+"px",c.top=d.y+"px")},setTransition:function(a,b){"use strict";var c=a.style;c.webkitTransitionDuration=c.MsTransitionDuration=c.msTransitionDuration=c.MozTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms"},support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){"use strict";return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){"use strict";var a=document.createElement("div").style;return"webkitPerspective"in a||"MozPerspective"in a||"OPerspective"in a||"MsPerspective"in a||"perspective"in a}(),transforms:window.Modernizr&&Modernizr.csstransforms===!0||function(){"use strict";var a=document.createElement("div").style;return"transform"in a||"WebkitTransform"in a||"MozTransform"in a||"msTransform"in a||"MsTransform"in a||"OTransform"in a}(),transitions:window.Modernizr&&Modernizr.csstransitions===!0||function(){"use strict";var a=document.createElement("div").style;return"transition"in a||"WebkitTransition"in a||"MozTransition"in a||"msTransition"in a||"MsTransition"in a||"OTransition"in a}(),classList:function(){"use strict";var a=document.createElement("div").style;return"classList"in a}()},browser:{ie8:function(){"use strict";var a=-1;if("Microsoft Internet Explorer"===navigator.appName){var b=navigator.userAgent,c=new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null!==c.exec(b)&&(a=parseFloat(RegExp.$1))}return-1!==a&&9>a}(),ie10:window.navigator.msPointerEnabled,ie11:window.navigator.pointerEnabled}},(window.jQuery||window.Zepto)&&!function(a){"use strict";a.fn.swiper=function(b){var c=new Swiper(a(this)[0],b);return a(this).data("swiper",c),c}}(window.jQuery||window.Zepto),"undefined"!=typeof module&&(module.exports=Swiper),"function"==typeof define&&define.amd&&define([],function(){"use strict";return Swiper});

var SHS = SHS || {};

SHS.Ticker = function(params) {
	this.params = params;
	var self=this;
	var selectedStage=""
	update=false;
	var $frame  = $('#crazy');
	var $slidee = $frame.children('ul').eq(0);
	var $wrap   = $frame.parent();
				
	var index=0;
	this.navName = function (x){
		var spt = x.toLowerCase();
		var name = x;
		switch(spt){
			case 'chlg': name="UCL"; break;
			case 'fmf': name="LMX"; break;
			case 'liga': name="ESP"; break;
			case 'seri': name="ITA"; break;
			case 'epl': name="ING"; break;
			case 'copa': name="COPA AME"; break;
			default: break;
		}
		return name;
	};
	
	this.getTransPer = function (x){
		if(x == '') return '';
		x = x.toLowerCase();
		if(x == 'sun') return "Dom";
		if(x == 'mon') return "Lun";
		if(x == 'tue') return "Mar";
		if(x == 'wed') return "Mié";
		if(x == 'thu') return "Jue";
		if(x == 'fri') return "Vie";
		if(x == 'sat') return "Sáb";
	};
	
	//Detects what needs to be used - JSONP or JSON & calls the data
	this.loadData = function (params, cb){
		var jsonp = false;
		if(params.url.split('//')[0] == window.location.href.split('//')[0] || window.location.href.indexOf('file:///') > -1) jsonp = true;
		params.url.indexOf('?') > -1 ? params.url + '?' : params.url + '&';
		var args = [];
		var url = params.url;
		if(jsonp) args.push('jsonp=true');
		args.push('random='+$.now());
		var toappend = params.url.indexOf('?') > -1 ? '&' : '?';
		if(args.length > 0) {
			url += toappend;
			url += args.join('&');
		}
		
		var obj = {
			url:url,
			cache:true
		}
		
		if(jsonp) {
			obj.dataType = 'jsonp';
			obj.jsonp=false;
		} else {
			obj.success = function (data){
				cb(data);
			}
		}
			
		$.ajax(obj);	
	};
	
	
	this.loadSports = function (){
		//console.log(this.params.sports)		
		this.loadData({url:this.params.path+'data/sports.js.asp?jsonp=true&order='+this.params.sports}, 'loadSportsData');
		
	};
		
	this.loadSportsData = function (data){
		//console.log(data)
		this.sportsdata = data;
		
		//var self = this;
		//var sprts=this.params.sports.split('|')
		var sprts=this.params.sports.split('%7C')
		var div='',mDiv=''
		for(var i=0;i<sprts.length;i++){
			var _s=sprts[i];
			var _s1=sprts[i];
			if(_s=='CYCLING'){
				_s="CYCLING"
				_s1="TOUR"				
			}else if(_s=='FORM1'){
				_s="F1"
			}else if(_s=='EPL'){
				_s="PL"
			}
			var title = sprts[i].replace(/\s/g, '').toLowerCase();						
			div+='<li data-sport="'+_s1+'" class="ss-'+title+' si-sports">'+_s+'</li>'
		}
		//console.log("sport=="+sport)
		//console.log("isDevice=="+isDevice)
		var sport=self.SelectedSport;
		if(!sport){
			$('.clearfix').html(div)
			if(sprts.length<=7)$('.scrollbar').hide()
			else{
				$('.scrollbar').show()
				/* var $frame  = $('#crazy');
				var $slidee = $frame.children('ul').eq(0);
				var $wrap   = $frame.parent(); */

				// Call Sly on frame
				$frame.sly({
					horizontal: 1,
					itemNav: 'basic',
					smart: 1,
					activateOn: 'click',
					mouseDragging: 1,
					touchDragging: 1,
					startAt: 0,
					scrollBar: $wrap.find('.scrollbar'),
					scrollBy: 1,
					dragHandle: 1,
					dynamicHandle: 1,
					clickBar: 1,
				});
				var _wd=$('.clearfix').width()+2;
				$('.clearfix').css('width',_wd)
			}
			
			$('.si-nbcSelectSport').off().on('click', function (){
				if($('.si-nbcSelectSportsPanel').is(':visible')){
					$('.si-nbcSelectSportsPanel').hide();
				}else{
					$('.si-nbcSelectSportsPanel').show();
				}
			})
			$(".si-sports").each(function() {
				$(this).off().on('click', function (){	
				
					var _w=$(window).width();
					update=false;
					index=0;
					//console.log("isDevice=="+_w)
					if(_w>767){
						$('.si-sports').removeClass('active')
						$('.si-nbcSelectSportsPanel').hide()
						var _s=$(this).attr('data-sport');
						if(_s=='CYCLING' || _s=='TOUR')_s="CYCLING"
						if(_s=='FORM1')_s="f1"
						if(_s=='EPL')_s="PL"
						$('.si-nbcSelectSportMid').html(_s)
						$('.si-nbcScrlTkrDv').html('');
						$('.ss-prdWrp ').html('');
						$('.ss-prdWrp').css({'width':'0'});
						//$('.ss-prdWrp').css({'left':'0','right':'0'});/**bybk*/
						$('.si-nbcScrlTkrDv').css('width','auto')
						$('.si-loader').remove();
						$('.si-nbcScrlTkrDv').html('<div class="si-loader"><img src="images/ticker-loader.gif" width="16" alt="Ticker Loader"/></div>');
						$(this).addClass('active')
						self.SelectedSport=$(this).attr('data-sport');
						self.putDates($(this).attr('data-sport'))
					}
				})
			});
			$(".si-sports:first").click();				
					
		}else self.updateGamesData(data,sprts)
		
	};
	
	
	this.putDates = function (sport){
		self = this;
		//console.log(sport)
		var sdata,d='',prd,prdIndex;
		$('.ss-prdWrp').html('')
		$('.si-nbcSelectDay').removeClass('ss-noSportDay');
		$('.ss-prdWrp').css('width',0);
		$('.ss-prdWrp').css('left',0);
		$('.ss-prdWrp').css('left',0);
		if(sport.toLowerCase()=="local"){
			getLocalPriod();
		}else{
			getPriod();
		}
		
		function getLocalPriod(){
			$('.prdLft').css('visibility',"hidden");
			$('.prdRgt').css('visibility',"hidden");
			$('.si-nbcSelectDay').find('.firstChild').html('Region');
			d='<span id="gameDay" class="si-SelectDayMid" style="width:55px;"><span>Local</span></span>'
			$('.ss-prdWrp').html(d);
			$('.ss-prdWrp').css('width','55px');
			
			self.loadGames(sport, "1452112304056");
		}
		function getPriod(){
			//console.log(sport)
			//console.log(this.sportsdata)
			for(var i=0,l=self.sportsdata.length;i<l;i++){
				//console.log(this.sportsdata[i].sport +"=="+ sport)
				if(self.sportsdata[i].sport.toLowerCase() == sport.toLowerCase()) {
					sdata = self.sportsdata[i];
					break;
				}
			}
			var div = '', key='label';
			//console.log(sdata)
			prd=sdata.period
			$('.swiper-wrapper').animate({'left':0}, 'slow');		
			
			
			prdIndex=0;
			for(var k=0;k<prd.length;k++){
				//console.log(prd[k])
				if(prd[k].isdefault)prdIndex=k;	
				var lbl=prd[k].label;
				if(sport=='NFL'){
					var _lbl1=lbl.split(' ')
					
					if(_lbl1[0]=="Preseason")_lbl1[0]='PRE'
					if(_lbl1[1]=="Week")_lbl1[1]='WK'
          
          if(_lbl1[0]=="Wildcard")_lbl1[0]='WLDCRD'
          if(_lbl1[0]=="Divisional")_lbl1[0]='DIVISION'
          if(_lbl1[0]=="Conference")_lbl1[0]='CONF'
          if(_lbl1[0]=="Pro")_lbl1[0]='PROBOWL'
          if(_lbl1[0]=="Super")_lbl1[0]='SUPERBWL'
          
					if(_lbl1[0]=="PRE"){
						lbl=_lbl1[0]+" "+_lbl1[1]+' '+lbl.split(' ')[2]
					}else if(_lbl1[0]=="WLDCRD" || _lbl1[0]=="DIVISION" || _lbl1[0]=="CONF" || _lbl1[0]=="PROBOWL" || _lbl1[0]=="SUPERBWL"){
            lbl=_lbl1[0];
          }else lbl=lbl.split(' ')[1]+' '+lbl.split(' ')[2]            
				}
				if(lbl.indexOf('.')!=-1)lbl=lbl.split('.')[0]
				
				if(sport=='FORM1' || sport=='GOLF' || sport=='NASCAR'){
					var w1="117px"
					lbl=""
				}else var w1="50px"
				
				d+='<span id="gameDay'+k+'" class="si-SelectDayMid" style="width:'+w1+';"><span>'+lbl+'</span></span>'
			}
			
			$('.ss-prdWrp').html(d);
			
			var _w=(prd.length*$('.si-SelectDayMid').width())+'px';
			$('.ss-prdWrp').css('width',_w);
			
			if(this.SelectedSport=='FORM1' || this.SelectedSport=='GOLF' || this.SelectedSport=='NASCAR'){
				$('.si-SelectDayMid').css('width','117px');
			}else $('.si-SelectDayMid').css('width','50px');
			
			prdNavigate();
				
			$('.prdLft').off().on('click',function (){
				if(prdIndex>0){
					prdIndex-=1;
					prdNavigate();
				}			
			});
			
			$('.prdRgt').off().on('click',function (){
				if(prdIndex<(prd.length-1)){
					prdIndex+=1;
					prdNavigate();
				}			
			});
		}
		function prdNavigate(){
			//console.log(prdIndex +">"+ prd.length)
			if(prdIndex<=0){
				$('.prdLft').css('visibility',"hidden");
				$('.prdRgt').css('visibility',"visible");				
			}else if(prdIndex>0 && prdIndex>=(prd.length-1)){
				$('.prdLft').css('visibility',"visible");
				$('.prdRgt').css('visibility',"hidden");
			}else {
				$('.prdLft').css('visibility',"visible");
				$('.prdRgt').css('visibility',"visible");
			}
			//console.log("index=="+prdIndex+'--'+prdIndex+"--"+prd.length)
			var _l=-(prdIndex*$('.si-SelectDayMid').width())+'px'
			$('.ss-prdWrp').animate({'left':_l}, 300,function(){})
			
			 if(prdIndex==0 && prd.length==1){
				$('.prdLft').css('visibility',"hidden");
				$('.prdRgt').css('visibility',"hidden");
			}
			if(sdata.period)var p=sdata.period[prdIndex].period;
			else p=''
			
			$(".si-SelectDayMid").removeClass('selected')
			$("#gameDay"+prdIndex).addClass('selected')
			
			update=false;
			index=0;			
			self.loadGames(sdata.sport, p);
		}
		
	};
	this.loadGamesData = function(data){
		//var self = this;
		//console.log("update=="+update)
		//console.log(data)
		if($('.si-nbcSelectSportMid').html().toLowerCase()=="local"){
			$('.si-SelectDayMid').html('<span>'+data[0].sport+'</span>');
			$('.si-nbcSelectDay').addClass('ss-noSportDay');
			data=data[0];
		}
		//var index=0;
		$('.si-nbcScrlHiddenAra').removeClass('si-noStageScheduled');
		$('.si-nbcScrlHiddenAra').html('<div class="si-invbtn" style="display:none"></div><div class="si-arrowLft lftArrow"></div><div class="si-arrowRgt rgtArrow"></div><div class="swiper-container si-tickerScrlDv"><div style="left:0px;" class="si-nbcScrlTkrDv swiper-wrapper"></div></div>');
		
		if(data && data.games.length==0){
			$('.si-loader').remove();
			$('.lftArrow').css('visibility','hidden')
			$('.si-invbtn').show();
			$('.rgtArrow').hide();
			$('.si-nbcScrlHiddenAra').addClass('si-noStageScheduled');
			$('.si-nbcSelectDay').removeClass('ss-noSportDay')
			$('.si-nbcSelectDay').find('.firstChild').html('Select Day')
			if(this.SelectedSport=='NFL' || this.SelectedSport=='CFB'){
				$('.si-nbcSelectDay').find('.firstChild').html('Select Week')
			}
			if(this.SelectedSport=='TOUR'){
				var Txt="No Stage Scheduled";
				if(data.display_status)var Txt= data.display_status;
			}else{
				var Txt="No scheduled games for today";
			}
			//$('.si-nbcScrlTkrDv').html('<div class="si-noStageScheduledTxt"><span>No scheduled games for today</span></div>')
			$('.si-nbcScrlHiddenAra').html('<div class="si-noStageScheduledTxt"><span>'+Txt+'</span></div><div class="si-arrowLft"></div><div class="si-arrowRgt"></div><div style="left:0px;" class="si-nbcScrlTkrDv"></div>')
			return false;
		}
		var div=''		
		for(var i=0,l=data.games.length;i<l;i++){
			var matchXML  = $.parseXML(data.games[i]);
			var obj = self.getGamesMarkup(data.sport, data.games[i]);
			//console.log(obj)
			if(this.SelectedSport=='f1'||this.SelectedSport=='FORM1' || this.SelectedSport=='NASCAR' || this.SelectedSport=='Golf' || this.SelectedSport=='TOUR'){
				div+=obj.markup;
			}else{
				div+='<div class="si-nbcScrlTkrBx swiper-slide" data-gamecode="'+obj.gamecode+'" data-matchNode="'+i+'">'+obj.markup+'</div>'
			}
			
		}
		$('.si-loader').remove();
		//$('.ss-prdWrp').css({'left':'auto'}); /**bybk*/
		$('.si-nbcScrlTkrDv').html(div)
		
		//if(!update){
			/* var length=$('.si-nbcScrlTkrBx').length;
			//console.log("length=="+length)
			var _w=(length*($('.si-nbcScrlTkrBx').width()+13))+'px';
			$('.si-nbcScrlTkrDv').css('width',_w) */	
			
			if(index==0){
				$('.swiper-wrapper').animate({'left':0}, 'slow');
				if($('.si-nbcScrlTkrDv').width()<$('.si-nbcScrlHiddenAra').width()){
					$('.lftArrow').css('visibility','hidden')
					$('.si-invbtn').show();
					$('.rgtArrow').hide()
				}else{
					$('.lftArrow').css('visibility','hidden')
					$('.si-invbtn').show();
					$('.rgtArrow').show()
				}
			}
					
			mySwiper = new Swiper('.si-tickerScrlDv', { 
				pagination: false,
				loop: false,
				autoplay: false,
				grabCursor: false,
				cssWidthAndHeight: true,
				calculateHeight: false,
				mousewheelControl:true,
				keyboardControl:true,
				initialSlide: index,
				autoplayDisableOnInteraction: true,
				centeredSlides: false,
				slidesPerView: 'auto',
				paginationClickable: false,
				//spaceBetween:6,
				onSlideChangeStart:function(){
					//console.log('start')
				},
				onTouchEnd:function(swiper, event){
					//console.log('onTap')
					getIndex();
				} ,
				onSlideChangeEnd: function () {
					//if($(window).width()>767)getIndex();
				} 
				
			});
			
			function getIndex(){
				var l=$('.si-nbcScrlTkrBx').length-1;
					//console.log('l=='+l)
					if($('.si-nbcScrlTkrBx[data-matchnode=0]').hasClass('swiper-slide-visible')){
						index=0
					}
					else if($('.si-nbcScrlTkrBx[data-matchnode='+l+']').hasClass('swiper-slide-visible')){
						var W1=parseInt($('.si-nbcScrlHiddenAra').outerWidth()+$('.si-arrowLft').outerWidth())
						var W2=parseInt($('.si-nbcScrlTkrBx').outerWidth())
						var scrollEle=Math.round(W1/W2)-2
						if(scrollEle<=0)scrollEle=0;
						//console.log("scrollEle=="+scrollEle)
						index=l-scrollEle
					}else index = $('.swiper-slide-active').index();
					
					//console.log("index=="+index)
					navigate();			
			}
			//var length=data.games.length;
			var length=$('.si-nbcScrlTkrBx').length
			
			var _w=(length*($('.si-nbcScrlTkrBx').width()))+'px';
			$('.si-nbcScrlTkrDv').css('width',_w)
			navigate();
			missingImage();			
	
			$('.lftArrow').off().on('click',function (){
				if(index>0){
					index-=1;
					navigate();
				}			
			});
			
			$('.rgtArrow').off().on('click',function (){
				if(index<length){
					index+=1;
					navigate();
				} 			
			});
			function missingImage(){
				$('.si-nbcTkrBx1').find('.firstChild').find("img").error(function(){
					$(this).css('visibility','hidden');
				});
				$('.si-nbcTkrBx3').find('.firstChild').find("img").error(function(){
					//console.log($(this))
					$(this).css('visibility','hidden');
				});
				$('.si-nbcTkrBxCol3').find('.firstChild').find("img").error(function(){
					//console.log($(this))
					$(this).css('visibility','hidden');
				});
			}
			function navigate(){
				$('.si-nbcSelectSportsPanel').hide()
				//console.log(index +">"+ length)
				var W1=parseInt($('.si-nbcScrlHiddenAra').outerWidth()+$('.si-arrowLft').outerWidth())
				var W2=parseInt($('.si-nbcScrlTkrBx').outerWidth())
				if(W1>1000)var scrollEle=Math.round(W1/W2)-1
				else var scrollEle=Math.round(W1/W2)-1
				//console.log(W1)
				//console.log(W2)
				$('.si-nbcScrlTkrWrp').removeClass('activeleftArrow');
				if(index<=0){
					$('.lftArrow').css('visibility','hidden')
					$('.si-invbtn').show();
					$('.rgtArrow').show()				
				}else if(index>0 && index>=(length-scrollEle)){
					$('.lftArrow').css('visibility','visible')
					$('.si-invbtn').hide();
					$('.rgtArrow').hide()
					$('.si-nbcScrlTkrWrp').removeClass('activeleftArrow');
				}else {
					$('.lftArrow').css('visibility','visible')
					$('.si-invbtn').hide();
					$('.rgtArrow').show();
					$('.si-nbcScrlTkrWrp').addClass('activeleftArrow');
				}
				//console.log("index=="+length+'--'+index+"--"+scrollEle)
				 mySwiper.swipeTo(index)			
				
				if(index==0){
					$('.swiper-wrapper').animate({'left':0}, 'slow');
					if($('.si-nbcScrlTkrDv').width()<$('.si-nbcScrlHiddenAra').width()){
						$('.lftArrow').css('visibility','hidden')
						$('.si-invbtn').show();
						$('.rgtArrow').hide()
					}else{
						$('.lftArrow').css('visibility','hidden')
						$('.rgtArrow').show()
						$('.si-invbtn').show();
					}
				}
			}
		//}
	};
	
	this.loadGames = function (sport,period){
		//console.log(sport+"--"+period)
		//console.log("update=dddddd="+update)
		if(!update){
			$('.si-nbcSelectSportsPanel').hide()
			$('.si-nbcScrlTkrDv').html('');
			$('.si-nbcScrlTkrDv').css('width','auto')
			$('.si-loader').remove();
			$('.si-nbcScrlTkrDv').html('<div class="si-loader"><img src="images/ticker-loader.gif" width="16" alt="Ticker Loader"/></div>');
		}
				
		
		if(!sport) sport = this.SelectedSport;
		if(!period) period = this.SelectedPeriod;
		this.SelectedSport = sport;
		this.SelectedPeriod = period;
		if(sport && sport.toLowerCase()=="local"){
			var _host = 'http://stats.csnne.com';
			if(_g_region){
				switch(_g_region){
					case 'philadelphia':_host = 'http://csnphilly.stats.com';break;
					case 'mid-atlantic':_host = 'http://csnmidatlantic.stats.com';break;
					case 'bay-area':_host = 'http://csnbayarea.stats.com';break;
					case 'new-england':_host = 'http://stats.csnne.com';break;
					case 'chicago':_host = 'http://csnchicago.stats.com';break;
				}
			}
			this.loadData({url:_host+'/ticker_byteam.json.asp?jsonp=true&showSport='+sport+'&random='+period}, 'loadGamesData');
		}else{
			this.loadData({url:this.params.path+'data/gamesNEW.js.asp?sport='+sport+'&period='+period}, 'loadGamesData');
		}	
	};
	
	this.resetGamesBlock = function (){
		this.refreshData();
		//this.cnt.find('.si-block4').replaceWith('<div class="si-block si-block4"></div>');
	}
	this.getGamesMarkup = function (sport, game){		
		sport = sport.toLowerCase();
		var div = '';
		var obj = {};
		golf_tournament = "";
		
		var matchXML  = $.parseXML(game);
		//console.log(game)
		var gamestate = $(matchXML).find("gamestate");
		if(this.SelectedSport=='EPL' || this.SelectedSport=='MLS'){
			var home = $(matchXML).find("home-team");
			var away = $(matchXML).find("visiting-team");			
		}else{
			var away = $(matchXML).find("home-team");
			var home = $(matchXML).find("visiting-team");
		}
		
		var tickerent = $(matchXML).find("ticker-entry");
		var gamecode  = $(tickerent).attr("gamecode");
		var gametype  = $(tickerent).attr("gametype");
		
		var status = $(gamestate).attr("status")
		obj.sts = "live";
				
		obj.homeWin = "", obj.awayWin = "";
		/* if (status == "Final") {
			if (parseInt($(away).attr("score")) > parseInt($(home).attr("score")))
				obj.awayWin = "si-winner";
			else if (parseInt($(home).attr("score")) > parseInt($(away).attr("score")))
				obj.homeWin = "si-winner";
		} */
		
		$('.si-nbcSelectDay').removeClass('ss-noSportDay').addClass('ss-noSportDay')
		$('.si-nbcSelectDay').find('.firstChild').html('Select Day')
		if(this.SelectedSport=='f1'||this.SelectedSport=='FORM1' || this.SelectedSport=='NASCAR'){
			status = $(matchXML).find('race').attr('status')
			var _n=$(matchXML).find('race').attr('race-name');
			//console.log(_n.length)
			//console.log(_n)
			//if(_n.length>15)_n="Tournament"
			if(_n.length>20)_n=_n.substr(0,17)+' ...'
			$('.si-nbcSelectDay').find('.firstChild').html(_n)
			$('.si-SelectDayMid').html('<span>'+$(matchXML).find('race').attr('status')+'</span>')
						
			if($(matchXML).find('race').attr('tv'))var tvchannel = $(matchXML).find('race').attr('tv');
			obj.href = $(matchXML).find('race').attr('href');
			var driver  = $(tickerent).find("driver");		
			var driverPts=$(tickerent).find("gamestate");
		
			obj.dName = $(driver).attr("display_name").toUpperCase();
			obj.dCar = $(driver).attr("car_number");
			obj.dPoints = $(gamestate).attr("display_status");
			obj.dRank = $(driver).attr("position");		
		}else if(this.SelectedSport=='Golf'){
			var _n=$(matchXML).find('tournament').attr('display-name')?$(matchXML).find('tournament').attr('display-name'):"Tournament";
			if(_n && _n.length>25)_n="Tournament"
			$('.si-nbcSelectDay').find('.firstChild').html(_n)
			status = $(matchXML).find('tournament').attr('status');
			if(status)$('.si-SelectDayMid').html('<span>'+status+'</span>')
			
			if($(matchXML).find('stage').attr('tv'))var tvchannel = $(matchXML).find('tournament').attr('tv');
			obj.href = $(matchXML).find('tournament').attr('href');			
			var driver  = $(tickerent).find("golfer-one");		
			var drGamestate=$(tickerent).find("gamestate");
					
		}else if(this.SelectedSport=='TOUR'){
			status = $(matchXML).find('stage').attr('status');
			$('.si-nbcSelectDay').removeClass('ss-noSportDay')
			//$('.si-SelectDayMid').html('<span>'+$(matchXML).find('stage').attr('status')+'</span>')
			if($(matchXML).find('stage').attr('tv'))var tvchannel = $(matchXML).find('stage').attr('tv');
			obj.href = $(matchXML).find('stage').attr('href');
			var driver  = $(tickerent).find("rider");		
			var drGamestate=$(tickerent).find("gamestate");
					
		}else{
			$('.si-nbcSelectDay').removeClass('ss-noSportDay')
			$('.si-nbcSelectDay').find('.firstChild').html('Select Day');
			
			if(this.SelectedSport=='NFL' || this.SelectedSport=='CFB'){
				$('.si-nbcSelectDay').find('.firstChild').html('Select Week')
			}else if($('.si-nbcSelectSportMid').html().toLowerCase()=="local"){
				//$('.si-nbcSelectDay').find('.firstChild').html(gametype);
				$('.si-nbcSelectDay').find('.firstChild').html('Region');
				$('.si-nbcSelectDay').addClass('ss-noSportDay');
			}
			obj.t1name = $(home).attr("alias").toUpperCase();
			obj.t2name = $(away).attr("alias").toUpperCase();
			obj.t1Images = $(home).find('team-logo').attr("gz-image");
			obj.t2Images = $(away).find('team-logo').attr("gz-image");						
			//console.log(obj.t1name +" "+obj.t2name)
			obj.t1scr = $(home).attr("score").replace("#","");
			obj.t2scr = $(away).attr("score").replace("#","");
			var tvchannel = $(gamestate).attr('tv');
			
			obj.href = $(gamestate).attr('href');
		}
		
		//console.log("status=="+status)
		switch (status) {
			case "Suspended": obj.sts = "si-postGame"; break;
			case "Pre-Game":  obj.sts = "si-preGame"; break;
			case "Final": obj.sts = "si-postGame"; break;
			case "Postponed": obj.sts = "si-preGame"; break;
			case "Pre-Tourney": obj.sts = "si-preGame"; break;
			case "Postponed": obj.sts = "si-postGame"; break;
			case "Cancelled": obj.sts = "si-postGame"; break;
			case "Leader": obj.sts = "si-preGame"; break;
			case "Leaderboard": obj.sts = "si-postGame"; break;
			case "Results": obj.sts = "si-postGame"; break;
			case "Standings": obj.sts = "si-postGame"; break;
		}
		obj.s1 = '';
		obj.s2 = '';
		obj.s3 = '';		
		
		//console.log(tvchannel)
		var tv=''
		var tvClass=''
		if(tvchannel){
			if(tvchannel=='USA'||tvchannel=='NBC'||tvchannel=='NBCS'||tvchannel=='CNBC'||tvchannel=='MSNBC'||tvchannel=='NHL'){
				//var tv='<span class="span3"><img alt="" src="http://scores.nbcsports.com/networks/'+tvchannel.toLowerCase()+'.png"></span>';
				if(tvchannel=='NBCS'){
					var tv='<span class="span3"><img alt="" src="http://scores.nbcsports.com/networks/nbcsn.png"></span>'; 
				 }else{
					 var tv='<span class="span3"><img alt="" src="http://scores.nbcsports.com/networks/'+tvchannel.toLowerCase()+'.png"></span>';
				 }
			}else {
				if(tvchannel.indexOf('/')!=-1){
					var _t= tvchannel.split('/')
					for(var i=0;i<_t.length;i++)
					{
					 if(_t[i]=='USA'||_t[i]=='NBC'||_t[i]=='NHL'||_t[i]=='NBCS'||_t[i]=='CNBC'||_t[i]=='MSNBC'){
						 if(_t[i]=='NBCS'){
							var tv='<span class="span3"><img alt="" src="http://scores.nbcsports.com/networks/nbcsn.png"></span>'; 
						 }else{
							 var tv='<span class="span3"><img alt="" src="http://scores.nbcsports.com/networks/'+_t[i].toLowerCase()+'.png"></span>';
						 }
					 }	
					}
				}
				//var tv='<span class="span3"><img alt="" src="http://scores.nbcsports.com/networks/nbcs.png"></span>';
				//var tv='<span class="span3"><img alt="" src="http://scores.nbcsports.com/ticker/images/nbcsLogo.png"></span>';
			}
			
		}
		//var tv='<span class="span3"><img alt="" src="images/teams-logo/logo_1.png"></span>';
		var gtime = $(gamestate).attr('gametime');
		var gdate = $(gamestate).attr('gamedate');
		var status1 = '<span class="secondChild">'+$(gamestate).attr("display_status1")+tv+'</span>';
		var status2 = $(gamestate).attr("display_status2");
		var cssclass="";
		var redLine=''
		//console.log("obj.sts=="+obj.sts)
		if(obj.sts == 'si-postGame') {
			cssclass="si-nbcFinal"
			obj.s1 = gdate;
			obj.s2 = status1;			
			obj.s4= '<span class="ss-live">'+status2+'</span>';
			if(sport == 'mlb'){
				status1 = '<span class="secondChild">'+$(gamestate).attr("display_status1")+'&nbsp;&nbsp;'+$(gamestate).attr("display_status2")+tv+'</span>';
				//status1='<span class="secondChild"><span class="span1">'+$(gamestate).attr("display_status1")+'</span><span class="span2">'+"6th"+'</span>'+tv+'</span>'
				status2=''
			}
		} else if(obj.sts == 'si-preGame') {
			cssclass="si-nbcUpcoming"
			obj.s1 = gdate;
			obj.s2 = status1;
			//status1=gtime+"&nbsp;&nbsp;ET"
			if(tv)tvClass="ss-tvChanle"
					
			status1='<span class="secondChild"><span class="span1">'+status2+'</span><span class="span2 " style="width:50px;">'+gtime+'&nbsp;&nbsp;ET</span>'+tv+'</span>'
			obj.s4= '<span class="ss-live">'+status2+'</span>';
			obj.s3 = tvchannel;
			if(sport == 'mlb')status2=''			
		}

		if(obj.sts == 'live') {
			cssclass="si-nbcLive"
			redLine='<div class="si-liveTopline"></div>'
			status1 = $(gamestate).attr("display_status1")
			if(tv)tvClass="ss-tvChanle"
			status1='<span class="secondChild"><span class="span1">'+status2+'</span><span class="span2" style="width:60px;">'+status1+'</span>'+tv+'</span>'
			//status1 = '<span class="secondChild">'+status1+tv+'</span>';
			obj.s1 = status2;
			obj.s2 = status1;
			
			obj.s4= '<span class="ss-live">'+status2+'</span>';
			if(sport == 'mlb') {
				obj.s2 = status2.replace(/(rd)|(st)|(nd)|(th)/g,'');
				if(status1.toLowerCase() == 'top'){
					obj.s2 += '<span class="si-tarr"></span>';
					
				}else if(status1.toLowerCase() == 'bot'){
					obj.s2 += '<span class="si-barr"></span>';					
				}
				//status1 = '<span class="secondChild">'+status1+'&nbsp;&nbsp;'+status2+tv+'</span>';
				status1='<span class="secondChild"><span class="span1">'+$(gamestate).attr("display_status1")+'</span><span class="span2">'+$(gamestate).attr("display_status2")+'</span>'+tv+'</span>'
				status2=''
			} /*else if(sport == 'nba' || sport == 'nfl') {
				obj.s1 = '<span>'+status2.replace(/(rd)|(st)|(nd)|(th)/g,'')+'</span>';
				obj.s2 = status1;
				cssclass="si-inGame2";
			} else {
				if(obj.s1 != '' && obj.s2 != '') {
					obj.s2 = obj.s2;
				} else if(obj.s2 == '') {
					obj.s2 = obj.s1;
				}
				if(isSoccer && $.isNumeric(obj.s2)) obj.s2 += '&rsquo';
				//cssclass="si-inGame3";
			} */
			
			//obj.sts = cssclass+' si-selected';			
		}
		
		
		//console.log($(gamestate).attr('href'))
		if(obj.href != '') {
			obj.href = 'href="'+obj.href+'" target="_blank"';
		}
		
		//console.log(obj.href)
		//console.log(obj.sts)
		//console.log(tvchannel)
		if(sport.toLowerCase() == 'nfl' && (obj.sts=='live'||obj.sts=='In-Progress') && (tvchannel=="NBC" || tvchannel=='NBCS' || tvchannel=="MSNBC")) {
		//if(sport.toLowerCase() == 'nfl' && (tvchannel=="NBC" || tvchannel=='NBCS' || tvchannel=="MSNBC")) {
		//if(sport.toLowerCase() == 'nfl') {
			obj.href = 'href="http://nflstream.nbcsports.com" target="_blank"'
		}
		
		$('.si-nbcMainWrp').removeClass('si-tickerF1')
		$('.si-nbcMainWrp').removeClass('si-tickerNBC')
		if(this.SelectedSport=='f1'||this.SelectedSport=='FORM1'|| this.SelectedSport=='NASCAR' || this.SelectedSport=='Golf'||this.SelectedSport=='TOUR'){
			$('.si-nbcMainWrp').addClass('si-tickerF1')
			var div='',img='';
			
			for(var j=0;j<driver.length;j++){
				//console.log(driver[j])
				//console.log(obj)
				obj.dName = $(driver[j]).attr("display_name").toUpperCase();
				var place='<span class="firstChild">Pos</span>',ptLbl=""
				if(this.SelectedSport=='TOUR'){
					obj.dName = $(driver[j]).attr("alias").toUpperCase();
					place='<span class="firstChild">Stage '+$(matchXML).find('stage').attr('stage')+'</span>'
					if(j==0){
						//console.log($(matchXML).find('stage').attr('tour-status'))
						if(obj.sts == 'si-postGame')ptLbl="WINNER: "
						else ptLbl="LEADER: "
						
						//console.log($('.si-SelectDayMid.selected span').html())
						if($(matchXML).find('stage').attr('tour-status') && $(matchXML).find('stage').attr('tour-status')=="In-Progress" && $(matchXML).find('stage').attr('status')=='Standings' && $('.si-SelectDayMid.selected span').html()=="Overall"){
							ptLbl="LEADER: "
						}
					}else ptLbl="BEHIND"
					if(obj.sts == 'si-postGame')place='<span class="firstChild">Pos</span>'
									
					obj.dPoints = ptLbl+" "+$(drGamestate[j]).attr('display_status');
					obj.dRank = $(driver[j]).attr("position");
					if($(driver[j]).attr("gz-image"))img=$(driver[j]).attr("gz-image");
					else img=''
				}else if(this.SelectedSport=='Golf'){
					var _dn=obj.dName.split(" ")
					if(_dn.length<=2)obj.dName=_dn[0]+"<br>"+_dn[1]
					else obj.dName=_dn[0]+"<br>"+_dn[1]+" "+_dn[2]
					
					place='<span class="firstChild">Rank</span>'
					obj.dPoints = $(driver[j]).attr("score")+' '+$(drGamestate[j]).attr('display_status1');	
					
					//console.log(obj.sts)					
					if(obj.sts == 'si-preGame'){
						place=""
						obj.dPoints = 'Tee time: '+$(drGamestate[j]).attr('display_status1');
					}					
					obj.dRank = $(driver[j]).attr("place");
					img=$(driver[j]).attr("gz-image");
				}else{
					var _dn=obj.dName.split(" ")
					if(_dn.length<=2)obj.dName=_dn[0]+"<br>"+_dn[1]
					else obj.dName=_dn[0]+"<br>"+_dn[1]+" "+_dn[2]
					
					obj.dCar = $(driver[j]).attr("car_number");
					img='http://scores.nbcsports.com/racing/images/nascar_numbers/'+obj.dCar+'_s.png'
					obj.dPoints = $(driverPts[j]).attr("display_status");
					obj.dRank = $(driver[j]).attr("position");
				}
				var _winr=''
				//console.log("obj.sts=="+obj.sts)
				//if(obj.sts == 'live')_winr='<div class="si-liveTopline"></div>'
				//else 
				if(obj.sts == 'si-postGame'){
					if(j==0){
						if(this.SelectedSport=='Golf' ||this.SelectedSport=='TOUR')_winr='<div class="si-yellowJersey"></div>'
						else _winr='<div class="si-finishedLine"></div>'
						if(this.SelectedSport=='f1'||this.SelectedSport=='FORM1'|| this.SelectedSport=='NASCAR')_winr=''
						
					}
					if(this.SelectedSport=='f1'||this.SelectedSport=='FORM1')place=''
				}
				//Temporary Ryder Cup exception
				if ($(matchXML).find('tournament').attr('display-name') === 'Ryder Cup') {
					div+='<div class="si-nbcScrlTkrBx swiper-slide"><a '+obj.href+'><div class="'+cssclass+'">'+_winr+'<div class="si-nbcTkrBxCol2"><span class="firstChild">'+$(driver[j]).attr("alias").toUpperCase().replace(' & ', '<br/>')+'</span><span class="secondChild">'+$(drGamestate[j]).attr('display_status1')+' '+$(drGamestate[j]).attr('display_status2')+'</span></div><div class="si-nbcTkrBxCol3"><span class="firstChild"><img alt="" src="'+img+'"></span><!--<span class="secondChild"><img alt="" src="images/logo_2.png"></span>--></div></div></a></div>';	
				} else {
					div+='<div class="si-nbcScrlTkrBx swiper-slide"><a '+obj.href+'><div class="'+cssclass+'">'+_winr+'<div class="si-nbcTkrBxCol1">'+place+'<span class="secondChild">'+obj.dRank+'</span></div><div class="si-nbcTkrBxCol2"><span class="firstChild">'+obj.dName+'</span><span class="secondChild">'+obj.dPoints+'</span></div><div class="si-nbcTkrBxCol3"><span class="firstChild"><img alt="" src="'+img+'"></span><!--<span class="secondChild"><img alt="" src="images/logo_2.png"></span>--></div></div></a></div>';	
				}
			}
			
		}else{
			$('.si-nbcMainWrp').addClass('si-tickerNBC')
			var _cls=""
			//if(this.SelectedSport.toLowerCase() == 'mlb' && obj.sts == 'si-preGame')_cls="ss-mlbTime"	
			if(obj.sts == 'si-preGame')_cls="ss-mlbTime"	
			var div = '<a '+obj.href+'><div class="'+cssclass+' '+tvClass+'">'+redLine+'<div class="si-nbcTkrBx1"><span class="firstChild"><img alt="" src="'+obj.t1Images+'" style="width:100%;height:auto;"></span><span class="secondChild">'+obj.t1name+'</span></div><div class="si-nbcTkrBx2 '+_cls+'"><span class="firstChild">'+obj.t1scr+'</span>'+status1+'<span class="thirdChild">'+obj.t2scr+'</span></div><div class="si-nbcTkrBx3"><span class="firstChild"><img alt="" src="'+obj.t2Images+'" style="width:100%;height:auto;"></span><span class="secondChild">'+obj.t2name+'</span></div></div></a>';	
		} 
	
		return {
			markup:div,
			gamecode:gamecode
		};
		
		function adjustTime(timStr, dteStr,type) {
			//console.log(timStr +","+ dteStr)
			if (dteStr != undefined) {
				var timStr1=timStr.split(' ')[1];
				timStr=timStr.split(' ')[0];
				
				var tempDate1 = dteStr.split("/");
				var myDateObj = new Date(parseInt(tempDate1[2]), parseInt(parseInt(tempDate1[0])-1), parseInt(tempDate1[1]));
				var timeHrMinArr= timStr.split(":");
				myDateObj.setHours(timeHrMinArr[0]);
				myDateObj.setMinutes(timeHrMinArr[1]);
				var timAdjst= '-|3:00';
				var timAdjstArr= timAdjst.split("|");
				var adjstOprtn = timAdjstArr[0];
				var adjstTimArr = timAdjstArr[1].split(":");
				var hrIsNum = adjstTimArr[0];
				var minIsNum = adjstTimArr[1];
				if (hrIsNum!='' && minIsNum!='') {
					var hoursMilliseconds = adjstTimArr[0]*60*60*1000;
					var minutesMilliseconds = adjstTimArr[1]*60*1000;
					var totlTimInMilliseconds = hoursMilliseconds+minutesMilliseconds;
					var myAppDateObj = new Date();
					if(adjstOprtn == "-")myAppDateObj.setTime(myDateObj.getTime()-totlTimInMilliseconds);
					else myAppDateObj.setTime(myDateObj.getTime()+totlTimInMilliseconds);
					var dspHrs = "";
					var dspMins = "";
					//if (myAppDateObj.getHours().toString().length<2)dspHrs = "0"+myAppDateObj.getHours().toString();
					//else 
					dspHrs = myAppDateObj.getHours().toString();
					if (myAppDateObj.getMinutes().toString().length<2)dspMins = "0"+myAppDateObj.getMinutes().toString();
					else dspMins = myAppDateObj.getMinutes().toString();
					
					//console.log(dspHrs)
					if(dspHrs>12){
						dspHrs=dspHrs-12;
						var ptTime = dspHrs+":"+dspMins+" "+'am';
					}else{
						var ptTime = dspHrs+":"+dspMins+" "+timStr1;
					}
					
					//var ptDate=(parseInt(myAppDateObj.getMonth())+1)+"/"+myAppDateObj.getDate()+"/"+myAppDateObj.getFullYear();
					var ptDate=(parseInt(myAppDateObj.getMonth())+1)+"/"+myAppDateObj.getDate();
					if(type=='date')return ptDate;
					return ptTime;
				} else return "";
			} else return "";
		}
	};
		
	this.refreshData = function (){
		//var self = this;
		if(this.interval) clearInterval(this.interval);
		this.interval = setInterval(function (){
			update=true;
			self.loadGames(self.SelectedSport,self.SelectedPeriod);
			//self.loadData({url:self.params.path+'data/gamesNEW.js.asp?sport='+self.SelectedSport+'&period='+self.SelectedPeriod}, 'updateGamesData');
		}, 120 * 1000)
	};

	//Initialization Fuction
	this.init = function (){
		this.cnt = this.params.container ? this.params.container : $('.shs_customTicker');
		
		this.loadSports();
		this.refreshData();
	};
	
	this.init();
		
	return this;
};
