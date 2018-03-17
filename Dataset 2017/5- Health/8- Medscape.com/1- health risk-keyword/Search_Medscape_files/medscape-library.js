/* Last Updated 11/1/16 by ML */
/* Previously Updated 09/21/16 by SC */


/* TEMPORARY CODE - TRACK ANONYMOUS USERS VIA COOKIE */
if ($.cookie('persistanon') == null && document.domain.match('medscape.com') != null) {
    $.cookie('persistanon', 'a' + new Date().getTime() + Math.floor(Math.random() * 10001), {expires: 365, domain: 'medscape.com'});
}
/* /TEMPORARY CODE - TRACK ANONYMOUS USERS VIA COOKIE */

function pixTrack(url) {
    var preload_image = new Image(1, 1);
    preload_image.src = url;
}

$(document).ready(function () {

    /* 'Accordant' vendor pixel tracking code */
    if (document.domain.match('medscape.com') != null) {
        if (typeof s_registered_user_id != 'undefined') {
            pixTrack('http://ib.adnxs.com/px?id=487729&seg=2369208&order_id=' + s_registered_user_id + '&t=1');
            pixTrack('http://u.acuityplatform.com/us?tpId=42&tpuid=' + s_registered_user_id);
        }
        else if ($.cookie('persistanon') != null) {
            pixTrack('http://ib.adnxs.com/px?id=487729&seg=2369208&order_id=' + $.cookie('persistanon') + '&t=1');
            pixTrack('http://u.acuityplatform.com/us?tpId=42&tpuid=' + $.cookie('persistanon'));
        }
    }
    /* /'Accordant' vendor pixel tracking code */

    cpAdCheck();

    if ('ontouchstart' in document.documentElement) {
        $('body').addClass('touchscreen');
    }

    $("#mobile-nav-checkbox").on('click', function(){
        if ( $(this).is(':checked') ) {
            $('body').addClass("menuView");
        }
        else {
            $('body').removeClass("menuView");
        }
    });

    $('.user-links-settings, .user-popup').bind('click', function() {
        $('.user-popup-menu').toggleClass('is-expanded');
      //  $('.user-popup-menu').addClass('is-expanded');
    });
    $('.user-links-settings, .user-popup').bind('mouseover', function() {
        // $('.user-popup-menu').removeClass('is-expanded');
        $('.user-popup-menu').addClass('is-expanded');
    });
    $('.user-links-settings, .user-popup').bind('mouseout', function() {
        $('.user-popup-menu').removeClass('is-expanded');
        // $('.user-popup-menu').addClass('is-expanded');
    });

});


/* Q&A Plugin//Copyright (C) 02-27-2012 by Jonathan Robles for WebMD/Medscape */
eval(function (p, a, c, k, e, d) {
    e = function (c) {
        return(c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) {
            d[e(c)] = k[c] || e(c)
        }
        k = [function (e) {
                return d[e]
            }];
        e = function () {
            return'\\w+'
        };
        c = 1
    }
    ;
    while (c--) {
        if (k[c]) {
            p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
        }
    }
    return p
}('8(4J==B){9 4J=R}8(3e==B){9 3e=R}8(23==B){9 23="2B"}8(26==B){9 26="3L://4U.3K.3N/4X/3f/5v?"}9 p=C 15();9 1J=C Z();9 5r="5n 4i 5x 24 5y!!!";9 2A="2A";9 2C="2C";9 2z="2z";9 2p="2p";9 2F="2F";9 2x="2x";9 2E="2E";9 2y="2y";9 2l=R;9 28="5F";9 2d="5G";9 29="5E";9 25="5A";9 3y="2B";9 1M=0;7 58(b){8(53.49){49.5h("5f: "+b)}}7 47(){}7 3M(4d,2W){1J=C Z();$("#"+4d).3b(7(){9 3j=C Z();9 2h=C Z();9 3m=A;$.w(1J,7(11,12){8(2R(12)=="4r"){8(12.24=="A"){1o("5e"+12.1G+"(12)");3m=R}}y{3j.1e(2R(12));2h.1e(3E(12))}});8(3m){$.w(3j,7(11,12){8(23!="3d"){$.4P(26,12)}8(3e){9 4e=2h[11].m(":")[0];9 45=2h[11].m(":")[1];9 1p="";1p+=2j(5d());1p+="t";1p+=2j(5c);1p+="t";1p+=2j(4e);1p+="t";1p+=2j(45);5b(1p)}});$.w(1J,7(11,12){12.1T=A});$(k).43();8(2W!=B){1o(2W)}}y{47()}})}7 3P(d,b){8(N(b).3h(":")==-1){16=q(b);1c=B}y{16=q(b.m(":")[0]);1c=q(b.m(":")[1])}L=1N(16);1k=1Y(16,1c);8(1c==B){8(p.z[L].1d!=""){$("#"+d).I(\'<P 6="5g">\'+p.z[L].1d+"</P>")}8(p.z[L].2G!=""){$("#"+d).I(\'<P 6="5k">\'+p.z[L].2G+"</P>")}1i(1z=0;1z<p.z[L].H.O;1z++){9 c=p.z[L].H[1z];2S(c,d)}}y{9 c=p.z[L].H[1k];2S(c,d)}}7 3U(f,e,b,d){8(d==B){d="T:F:T:F"}8(N(b).3h(":")==-1){16=q(b);1c=B}y{16=q(b.m(":")[0]);1c=q(b.m(":")[1])}L=1N(16);1k=1Y(16,1c);$("#"+f).5j();8(1c==B){1i(1z=0;1z<p.z[L].H.O;1z++){9 c=p.z[L].H[1z];2Y(c,e,f,d)}}y{9 c=p.z[L].H[1k];2Y(c,e,f,d)}}7 1N(b){1n=0;1i(U=0;U<p.z.O;U++){8(N(b)==p.z[U].6){1n=U}}1a 1n}7 1Y(b,c){L=1N(b);1n=0;1i(U=0;U<p.z[L].H.O;U++){8(N(c)==p.z[L].H[U].6){1n=U}}1a 1n}7 5i(b,d,c){L=1N(b);1k=1Y(d);1n=0;1i(U=0;U<p.z[L].H[1k].r.O;U++){8(N(c)==p.z[L].H[1k].r[U].6){1n=U}}1a 1n}7 5a(){9 b=A;$.w(1J,7(c,d){8(d.1T=="R"){b=R}});1a b}7 2R(e){9 c="";9 d="";9 b=0;$.w(e.r,7(f,g){8(g.K=="A"){d+=("59-"+g.14.6+"="+g.6+"&")}});$.w(e.r,7(f,g){8(g.K=="A"&&g.1l=="A"){b++}});8(d==""){c="4r"}y{c+="52=51&";c+="50=/3f/4Z/"+e.14.14.l.6+"?57%56%55%5l&";c+="5m="+e.14.14.l.6+"&";c+="5C="+e.14.6+"&";c+="5B=5z&";c+="5D="+e.6+"&";c+=e.6+"="+e.1G.4Y()+"&";c+="5H="+N(b)+"&";c+=d}1a c}7 3E(c){9 b=c.6+":";$.w(c.r,7(d,e){8(e.K=="A"){b+=(N(d)+",")}});b=b.X(0,b.O-1);1a b}7 2m(c,b){1a(q(c.1D)-q(b.1D))}7 2S(D,1h){1J.1e(D);8(D.1V!=""){$("#"+1h).I(\'<P 6="5q\'+D.6+\'" x="5p">\'+D.1V+"</P>")}8(D.1I!=""){$("#"+1h).I(\'<P 6="3Y\'+D.6+\'" x="3R">\'+D.1I+"</P>")}1o("5o"+D.1G+"(D,1h)")}7 2Y(D,13,1h,1g){8(13.m(":")[0]!=B){3y=13.m(":")[0]}8(13.m(":")[1]!=B){2d=q(13.m(":")[1])}8(13.m(":")[2]!=B){29=q(13.m(":")[2])}8(13.m(":")[3]!=B){28=q(13.m(":")[3])}8(13.m(":")[4]!=B){25="5s"+13.m(":")[4]}8(13.m(":")[5]!=B){1y=q(13.m(":")[5])}y{1y=Q}8(D.1I!=""){$("#"+1h).I(\'<P 6="3Y\'+D.6+\'" x="3R">\'+D.1I+"</P>")}1o("5w"+D.1G+"t"+3y+"(D,1h,1g)");8(1g.m(":")[0].X(0,1)=="T"){8(1g.m(":")[0].m("-")[1]==B){3u="5u 5t 1T"}y{3u=1g.m(":")[0].m("-")[1]}8(1g.m(":")[3].X(0,1)=="T"){9 3o=1}y{9 3o=0}W=q(D.G)+3o;$("#"+1h).I(\'<P 6="5I\'+D.6+\'" x="4T">\'+3u+": "+W+"</P>")}8(1g.m(":")[1].X(0,1)=="T"){8(1g.m(":")[1].m("-")[1]==B){18=65}y{18=q(1g.m(":")[1].m("-")[1])}$.w(D.r,7(11,12){$("#"+1h).I(\'<P 6="4Q\'+11+"t"+D.6+\'" x="4S">\'+N.2u(18+11)+" - "+D.r[11].1r+"</P>")})}8(1g.m(":")[2].X(0,1)=="T"){$.w(D.r,7(11,12){8(D.r[11].K=="A"){$("#"+1h).I(\'<P 6="4R\'+11+"t"+D.6+\'" x="4W">\'+D.r[11].30+"</P>")}})}}7 3Q(b,d,c){$("#"+d).I(\'<n x="3t" 6="3t\'+b.6+\'"></n>\');$.w(b.r,7(e,h){$("#3t"+b.6).I(\'<n x="1F" 6="1F\'+e+"t"+b.6+\'"></n>\');8(h.K=="A"){9 g=" 54"}y{9 g=""}8(h.1l=="A"){9 f="5X 4i"}y{9 f=""}8(c.m(":")[1].X(0,1)=="T"){8(c.m(":")[1].m("-")[1]==B){18=65}y{18=q(c.m(":")[1].m("-")[1])}$("#1F"+e+"t"+b.6).I(\'<n x="2g 4p\'+g+\'">\'+N.2u(18+e)+"</n>")}y{$("#1F"+e+"t"+b.6).I(\'<n x="2g 4p\'+g+\'">\'+h.1r+"</n>")}$("#1F"+e+"t"+b.6).I(\'<n x="2g 6z">\'+f+"</n>");$("#1F"+e+"t"+b.6).I(\'<n 6="2T\'+e+"t"+b.6+\'" x="2g 6y">0%</n>\');$("#1F"+e+"t"+b.6).I(\'<n x="2g 6x"><n 6="4b\'+e+"t"+b.6+\'" x="6A" 3i="2s:0%"></n></n>\')});$.w(b.r,7(f,h){9 e=(f*q(29))+q(28);9 g=B;8(c.m(":")[3].X(0,1)=="T"){1t=19.1R(b.G/(Q/q(h.G)));1Q=q(b.G)+1;8(h.K=="A"){1t++}1K=19.1R((Q/1Q)*(1t));W=1K;g=W}y{W=q(h.G);g=h.G}1P=W*(Q/1y);$("#4b"+f+"t"+b.6).2c(e).2V({2s:1P+"%"},{3v:q(2d),3q:25,3l:7(i,j){Y=19.1O(i);Y=19.1O(Y/(Q/1y));$("#2T"+f+"t"+b.6).1q(Y+"%")},2N:7(){$("#2T"+f+"t"+b.6).1q(g+"%")}})})}7 3X(b,d,c){$("#"+d).I(\'<n x="35" 6="35\'+b.6+\'"></n>\');$.w(b.r,7(e,g){8(g.1l=="A"){9 f=" 6B"}y{9 f=""}8(g.K=="A"){9 i=" 6D"}y{9 i=""}9 h="";h+=\'<n 6="4x\'+e+"t"+b.6+\'" x="4x \'+f+\'" 3i="2s:\'+(Q/b.r.O)+\'%;">\';h+=\'<n 6="4K\'+e+"t"+b.6+\'" x="4K">\';h+=\'<n 6="33\'+e+"t"+b.6+\'" x="33\'+i+\'"></n>\';h+=\'<n 6="27\'+e+"t"+b.6+\'" x="27">0%</n>\';h+="</n>";8(c.m(":")[1].X(0,1)=="T"){8(c.m(":")[1].m("-")[1]==B){18=65}y{18=q(c.m(":")[1].m("-")[1])}h+=\'<n 6="2w\'+e+"t"+b.6+\'" x="2w">\'+N.2u(18+e)+"</n>"}y{h+=\'<n 6="2w\'+e+"t"+b.6+\'" x="2w">\'+g.1r+"</n>"}h+="</n>";$("#35"+b.6).I(h)});$.w(b.r,7(f,h){9 e=(f*q(29))+q(28);9 g=B;8(c.m(":")[3].X(0,1)=="T"){1t=19.1R(b.G/(Q/q(h.G)));1Q=q(b.G)+1;8(h.K=="A"){1t++}1K=19.1R((Q/1Q)*(1t));W=1K;g=W}y{W=q(h.G);g=h.G}1P=W*(Q/1y);$("#33"+f+"t"+b.6).2c(e).2V({3H:(1P)+"%"},{3v:q(2d),3q:25,3l:7(i,j){Y=19.1O(i);$("#27"+f+"t"+b.6).3O("6C",Y+"%");Y=19.1O(Y/(Q/1y));$("#27"+f+"t"+b.6).1q(Y+"%")},2N:7(){$("#27"+f+"t"+b.6).1q(g+"%")}})})}7 3W(b,d,c){$("#"+d).I(\'<n x="2U" 6="2U\'+b.6+\'"></n>\');$.w(b.r,7(e,g){8(g.1l=="A"){9 f=" 6w"}y{9 f=""}8(g.K=="A"){9 i=" 6v"}y{9 i=""}9 h="";h+=\'<n 6="3C\'+e+"t"+b.6+\'" x="3C \'+f+\'" 3i="3H:\'+(Q/b.r.O)+\'%;">\';h+=\'<n 6="3G\'+e+"t"+b.6+\'" x="3G">\';h+=\'<n 6="2Z\'+e+"t"+b.6+\'" x="2Z\'+i+\'"></n>\';h+=\'<n 6="20\'+e+"t"+b.6+\'" x="20">0%</n>\';h+="</n>";8(c.m(":")[1].X(0,1)=="T"){8(c.m(":")[1].m("-")[1]==B){18=65}y{18=q(c.m(":")[1].m("-")[1])}h+=\'<n 6="2t\'+e+"t"+b.6+\'" x="2t">\'+N.2u(18+e)+"</n>"}y{h+=\'<n 6="2t\'+e+"t"+b.6+\'" x="2t">\'+g.1r+"</n>"}h+="</n>";$("#2U"+b.6).I(h)});$.w(b.r,7(f,h){9 e=(f*q(29))+q(28);9 g=B;8(c.m(":")[3].X(0,1)=="T"){1t=19.1R(b.G/(Q/q(h.G)));1Q=q(b.G)+1;8(h.K=="A"){1t++}1K=19.1R((Q/1Q)*(1t));W=1K;g=W}y{W=q(h.G);g=h.G}1P=W*(Q/1y);$("#2Z"+f+"t"+b.6).2c(e).2V({2s:1P+"%"},{3v:q(2d),3q:25,3l:7(i,j){Y=19.1O(i);$("#20"+f+"t"+b.6).3O("6q",Y+"%");Y=19.1O(Y/(Q/1y));$("#20"+f+"t"+b.6).1q(Y+"%")},2N:7(){$("#20"+f+"t"+b.6).1q(g+"%")}})})}7 6p(b,c){$("#"+c).I(\'<2D x="6o" 6="1f\'+b.6+\'"></2D>\');$.w(b.r,7(d,e){$("#1f"+b.6).I(\'<1j 6="r\'+d+"t"+b.6+\'">\'+e.1r+"</1j>")});$("#1f"+b.6+">1j").w(7(d,e){3w(b);$(k).3T(7(){$(k).1x(2x)},7(){$(k).1C(2x)});$(k).3b(7(){8(b.r[d].K=="A"){b.r[d].K="R"}y{b.r[d].K="A"}3w(b)})})}7 6r(b){$("#1f"+b.6+">1j").w(7(c,d){$(k).1x(2y)})}7 3w(b){$("#1f"+b.6+">1j").w(7(c,d){$(k).1C(2y);8(b.r[c].K=="R"){$(k).1x(2F);$(k).1C(2E)}y{$(k).1x(2E);$(k).1C(2F)}})}7 6s(b,d,c){3Q(b,d,c)}7 6u(b,d,c){3X(b,d,c)}7 6F(b,d,c){3W(b,d,c)}7 6E(b,c){$("#"+c).I(\'<2D x="6M" 6="1f\'+b.6+\'"></2D>\');$.w(b.r,7(d,e){$("#1f"+b.6).I(\'<1j 6="r\'+d+"t"+b.6+\'">\'+e.1r+"</1j>")});$("#1f"+b.6+">1j").w(7(d,e){36(b);$(k).3T(7(){$(k).1x(2C)},7(){$(k).1C(2C)});$(k).3b(7(){$.w(b.r,7(g,h){h.K="R"});b.r[d].K="A";36(b);8(f==B){9 f=R}8(f){3r(7(){6G()},5J)}})})}7 6I(b){$("#1f"+b.6+">1j").w(7(c,d){$(k).1x(2p)})}7 36(b){$("#1f"+b.6+">1j").w(7(c,d){$(k).1C(2p);8(b.r[c].K=="R"){$(k).1x(2A);$(k).1C(2z)}y{$(k).1x(2z);$(k).1C(2A)}})}7 6K(d,b,c){}7 6L(d,b,c){}7 6J(d,b,c){}7 4h(b){8(b!=B){3x=b}$.2M({2I:"38",2b:3x,2a:"1w",3a:{34:7(){2O("2P 31 1w!")}},2K:7(c){8(23=="3d"){3F(c)}y{8(23=="2B"){3V(c)}y{2O(\'6H 32 6N!!! 2P 6Q "2B" 6P "3d"\')}}}})}7 3F(b){J=$(b).1u("6O");p.l=C 15();p.l.6=J.s("2e").l("6");p.l.1B=J.l("1B");p.l.1v=J.s("2L").l("1v");p.z=C Z();J.s("1S").w(7(){E=C 15();E.6=$(k).l("6");E.1d=$(k).l("1d");E.2i=$(k).l("2i");E.H=C Z();$(k).s("6t").s("6m").s("H").w(7(){u=C 15();u.6=$(k).l("6");u.1I=$(k).s("v").v();u.1G="5W";u.24="A";u.1V="";u.r=C Z();$(k).s("5V").w(7(c){M=C 15();M.6=$(k).l("6");M.1r=$(k).v();M.1l=$(k).l("1l");M.K="R";M.14=u;u.r.1e(M)});u.14=E;E.H.1e(u)});E.14=p;p.z.1e(E)});2l=A}7 3V(b){J=$(b).1u("5U");p.l=C 15();p.l.6=J.l("6");p.l.4C=J.l("4C");p.l.1d=J.s("1d").v();p.l.4B=J.s("4B").v();p.l.4D=J.s("4D").v();p.l.4E=J.s("4E").v();p.z=C Z();J.s("z").w(7(){E=C 15();E.6=$(k).l("6");E.4F=$(k).l("4F");E.4A=$(k).l("4A");E.1D=$(k).l("1D");E.1d=$(k).s("1d").v();E.2G=$(k).s("2G").v();E.4u=$(k).s("4u").v();E.4t=$(k).s("4t").v();E.H=C Z();$(k).s("H").w(7(){u=C 15();u.6=$(k).l("6");u.1D=$(k).l("1D");u.4v=$(k).l("4v");u.24=$(k).l("24");u.4w=$(k).l("4w");u.4y=$(k).l("4y");u.4H=$(k).l("4H");u.4G=$(k).l("4G");u.1I=$(k).s("1I").v();u.1V=$(k).s("1V").v();u.1G=$(k).s("1G").v();u.4N=$(k).s("4N").v();u.4O=$(k).s("4O").v();u.1T=$(k).s("1T").v();u.G=$(k).s("G").v();8(4I(q(u.G))){u.G=0}u.4L=$(k).s("4L").v();u.r=C Z();$(k).s("r").w(7(c){M=C 15();M.6=$(k).l("6");M.1D=$(k).l("1D");M.1r=$(k).s("1r").v();M.30=$(k).s("30").v();M.1l=$(k).s("1l").v();M.G=$(k).s("G").v();8(4I(q(M.G))){M.G=0}M.K=$(k).s("K").v();M.14=u;u.r.1e(M)});u.r.37(2m);u.14=E;E.H.1e(u)});E.H.37(2m);E.14=p;p.z.1e(E)});p.z.37(2m);2l=A}7 5Z(2k){48=3p(7(){8(2l){1o(2k);3k(48)}},10)}9 S=C 15();9 3g=R;7 5T(2k){4a=3p(7(){8(3g){1o(2k);3k(4a)}},10)}7 5S(){$.2M({2I:"38",2b:5M,2a:"1w",3a:{34:7(){2O("2P 31 1w!")}},2K:7(b){$(b).1u("5L").w(7(){9 e=$(k).l("6");9 d=$(k).1u("1d").v();9 c=$(k).1u("2b").v();$(\'<n x="5K" 6="3A\'+e+\'"></n>\').1q(\'<a 5N="\'+c+\'">\'+d+"</a>").3s("#z-5O");$(k).1u("5R").w(7(){9 g=$(k).1u("46").v();9 f=$(k).1u("41").v();$(\'<n x="46"></n>\').1q(g).3s("#3A"+e);$(\'<n x="41"></n>\').1q(f).3s("#3A"+e)})});J=$(b).1u("5Q");S.l=C 15();S.l.1B=J.l("1B");S.l.1v=J.s("2L").l("1v");S.l.4n=J.s("2L").l("4n");S.l.3n=J.s("2e").l("6");S.l.39=J.s("2e").l("39");S.l.4m=J.s("2e").l("4m");S.l.2i=J.s("1S").l("2i");S.l.3B=J.s("1S").l("6");S.l.1d=J.s("1S").l("1d");3g=A}})}7 4M(){1m=C 15();1m.4q=q(1M.m(":")[0])*60;1m.4l=q(1M.m(":")[1]);1m.4g=q(1M.m(":")[2]);1m.4f=N(((1m.4q+1m.4l)*Q)+1m.4g)+"0";1a 1m.4f}7 63(){1H=C Z();3z=C Z();1i(V=0;V<p.z[0].H.O;V++){1H.1e(p.z[0].H[V].6);1i(1Z=0;1Z<p.z[0].H[V].r.O;1Z++){8(p.z[0].H[V].r[1Z].1l=="A"){3z[V]=1Z}}}}7 6h(){3k(4o);2X=C Z();1E=C Z();2f=p.z[0].H;1i(V=0;V<2f.O;V++){1i(1U=0;1U<2f[V].r.O;1U++){8(2f[V].r[1U].K=="A"){2X[V]=1U;1E[V]=2f[V].r[1U].6}}}2Q=0;1i(1X=0;1X<5;1X++){8(3z[1X]==2X[1X]){2Q++}}$(".6i").v(N(2Q));9 b="";b+=\'<4z 1B="\'+p.l.1B+\'">\';b+=\'<2L 1v="\'+p.l.1v+\'" />\';b+=\'<1S 6j="\'+4M()+\'" 6="\'+p.z[0].6+\'">\';b+=\'<40 6="\'+p.l.6+\'">\';b+=\'<21 22="\'+1H[0]+\'" 1W="\'+1E[0]+\'" />\';b+=\'<21 22="\'+1H[1]+\'" 1W="\'+1E[1]+\'" />\';b+=\'<21 22="\'+1H[2]+\'" 1W="\'+1E[2]+\'" />\';b+=\'<21 22="\'+1H[3]+\'" 1W="\'+1E[3]+\'" />\';b+=\'<21 22="\'+1H[4]+\'" 1W="\'+1E[4]+\'" />\';b+="</40>";b+="</1S>";b+="</4z>";3r(7(){2J()},6l);$.6k({6e:"v/32",2a:"v/32"});$.2M({2I:"6d",2b:26,67:b,66:{"64-68":"v/1w"},2a:"v/1w",2K:7(){2J()},2N:7(){2J()}})}7 2J(){9 b="3L://69.3K.3N/3f/6c/4c?44=R&4k="+S.l.1v+"&4j="+S.l.3n;$.2M({2I:"38",2b:b,2a:"1w",3a:{34:7(){2O("2P 31 1w!")}},2K:7(c){3r(7(){6b()},6a)}})}7 4c(c){9 b="";b+=\'<3D 1B="\'+p.l.1B+\'">\';b+=\'<2e 6="\'+p.z[0].6+\'" 39="A" 44="\'+c+\'" />\';b+="</3D>";$.4P(26,b)}7 6f(){9 b=3x;b+="?4k="+S.l.1v;b+="&6g="+S.l.3B;b+="&4j="+S.l.3n;b+="&";4h(b)}(7($){$.42.1L({62:7(1A){9 2n={6:"5P",17:0,1b:0,1s:0,2c:10};1A=$.1L(2n,1A);1a k.w(7(){9 o=1A;8($(k).l("2o")!=B){2H=N($(k).l("2o"));1o("9 a = {"+2H+"}");o=$.1L({},o,a)}9 3Z=$(k);$("."+o.6).v(o.17);4o=3p(7(){o.17++;8(o.17==60){o.17=0;o.1b++}8(o.1b==60){o.1b=0;o.1s++}17="0"+N(o.17);1b="0"+N(o.1b);1s="0"+N(o.1s);17=17.X(17.O-2,17.O);1b=1b.X(1b.O-2,1b.O);1s=1s.X(1s.O-2,1s.O);1M=1s+":"+1b+":"+17;$("."+o.6).v(1M)},o.2c)})}});$.42.1L({61:7(1A){9 2n={2r:"5Y",2v:"2v",2q:0,3S:"6n",3I:"T:F:T:F",3J:R};1A=$.1L(2n,1A);1a k.w(7(){9 o=1A;8($(k).l("2o")!=B){2H=N($(k).l("2o"));1o("9 a = {"+2H+"}");o=$.1L({},o,a)}9 3Z=$(k);o.2r=$(k).l("6");o.3c=\'3U("\'+o.2r+\'","\'+o.3S+\'","\'+o.2q+\'","\'+o.3I+\'");\';8(4s(o.2q)=="R"||o.3J==A){3M(o.2v,o.3c);3P(o.2r,o.2q)}y{1o(o.3c);$("#"+o.2v).43()}})}})})(4V);7 4s(b){8(N(b).3h(":")==-1){16=q(b);1c=B}y{16=q(b.m(":")[0]);1c=q(b.m(":")[1])}L=1N(16);1k=1Y(16,1c);9 c=p.z[L].H[1k];1a c.1T};', 62, 425, '||||||id|function|if|var|||||||||||this|attr|split|div||myquestionnaire|Number|choice|children|_|questionobject|text|each|class|else|page|true|undefined|new|targetQdata|pageobject||totalResponse|question|append|mainXMLobj|selected|getpageIDX|choiceobject|String|length|span|100|false|myAUTHdata||findIDXloop|popQID|usethisANSvalue|substring|displaynum|Array||index|value|graphanimoptions|parent|Object|getpageID|counter|charcodenumstart|Math|return|seconds|getquestionID|title|push|choices|getANSoptions|getDIVtarget|for|li|getquestionIDX|isCorrect|ms|returncandidate|eval|buildORMtrackingtosend|html|choiceText|minutes|thisQuespeepnum|find|global_user_id|xml|addClass|displayscale|qecholoop|options|xmlns|removeClass|order|UseranswerIDs|answerrow|displayRule|QuestionIDs|questionText|responseReport|newpercentage|extend|quizplaytimer|returnpageIDX|floor|usethisSCLvalue|newtotresponse|round|Quiz|responded|lookforUans|questionIntro|choiceid|checkloop|returnquestionIDX|lookforcorrect|ag_valdiv_v|UserResponse|questionid|xmltype|required|animtype|reportingURL|ag_valdiv|animinitialdelay|animstagger|dataType|url|delay|animspeed|Challenge|qset|answercell|reportingArray_ORM|status|core_replacebadchars|getfunctionString|isQXMLloaded|ordersorter|defaults|rel|rb_err|questionID|targetdiv|width|ag_choicediv_v|fromCharCode|submitbutton|ag_choicediv|cb_on|cb_err|rb_select|rb_off|legacy|rb_on|ul|cb_select|cb_off|intro|getrelstring|type|reportmorestuffeses|success|User|ajax|complete|alert|please|usergotright|returnReportString|build_question|barval_|answergrid_custom_v|animate|getOptionalJS|Useranswers|build_answers|ag_barobj_v|choiceExplanation|check|XML|ag_barobj|404|answergrid_custom|rb_button_Updater|sort|GET|isJoining|statusCode|click|onAnswerString|quiz|useORMtracking|qna|isAUTHloaded|indexOf|style|reportingArray|clearInterval|step|isoktoreport|challenge_id|totalResponseoffset|setInterval|easing|setTimeout|appendTo|answergrid|resptext|duration|cb_button_Updater|pollurl|getgraphtype|Correctanswers|link_|quiz_id|ag_column_v|JoinChallengeResponse|returnflatanswers|parseXMLquiz|ag_bardiv_v|height|answerOptions|reAnswer|medscape|http|makesubmitbutton|com|css|questiontotarget|displayGrid_CheckBox_legacy|mqtext|gridOptions|hover|answergridtotarget|parseXMLlegacy|displayGrid_CheckBox_vbar|displayGrid_CheckBox_hbar|mqtext_|obj|QuestionnaireUserResponse|long|fn|remove|isAnonymous|ORM_AID|brief|question_dothisonerror|onXMLload_Interval|console|onAUTHload_Interval|gbar|joinchallenge|getbuttonID|ORM_QID|time|millis|startQAPlugin|Answer|questionnaireid|guid|secs|isAnonynous|UAC|mycountdown|answercol1|mins|NOANSWER|isAnswered|evalReq|buttontext|poll|scorable|ag_column|showAnsTable|SubmitQuizRequest|isActive|passScore|qType|passMessage|failMessage|formtype|showRightWrong|showQuestion|isNaN|useVPtracking|ag_bardiv|passed|return_quizms|userTypeName|feedback|post|polllegend_|explanation|polllegend|totalresponse|wp|jQuery|pollexplanation|activity|toUpperCase|processor|destUrl|null|overrideRedirectUrl|window|answerselected|26formType|3Dtrue|showStandAlone|qtrace|option|allanswercheck|passtowmdPageLink|ORMtrk_qaplugin|ret_ORM_pageID|errorTreatment_|QATOOL|mptitle|log|returnchoiceIDX|empty|mpintro|3DINTERNAL|questionnaire_id|Please|displayRule_|mqintro|mqintro_|questionerrormessage|easeOut|colleagues|Your|AddQAResponsesClassic|displayGrid_|the|questions|MIDDLE|easeOutCubic|formType|form_id|question_id|300|200|1500|countCorrect|totalresponse_|500|items|site|quizauthurl|href|wrap|timer|GetQuizInfoResponse|desc|getQuizAuth|onAUTHload|questionnaire|Choice|RadioButton|Correct|questiontarget|onXMLload||setQuestion_class|timer_class|StartQuiz|Content||headers|data|Type|www|1000|dothisonpostanswer|challenge|POST|contentType|getQuizData|formid|EndQuiz|rightanswers|timeTaken|ajaxSetup|5000|QuestionForm|hbar|CheckBoxUL|displayRule_CheckBox|left|errorTreatment_CheckBox|displayGrid_RadioButton_legacy|Questionnaire|displayGrid_RadioButton_hbar|ag_useranswer_v|ag_columncorrect_v|answercol4|answercol3|answercol2|oldgraphbartype|ag_columncorrect|bottom|ag_useranswer|displayRule_RadioButton|displayGrid_RadioButton_vbar|next_onclick|Unsupported|errorTreatment_RadioButton|displayRule_DropDown|displayRule_Lickert|displayRule_TextArea|RadioButtonUL|TYPE|StartQuizResponse|or|use'.split('|'), 0, {}))

//
// UAC Creation Code
//
$(document).ready(function () {
    if (typeof (s_registered_user_id) != 'undefined') {
        setTimeout(function () {
            var egg = s_registered_user_id;
            var gg = (egg / 27);
            var sgg = gg.toString();
            var tsll = sgg.charAt(sgg.length - 2);
            var tll = sgg.charAt(sgg.length - 1);
            medfuac = sgg.substring(0, sgg.length - 2);
            for (xii = 0; xii < gsll.length; xii++) {
                if (tsll == gsll[xii][0]) {
                    medfuac = medfuac + gsll[xii][1];
                }
            }
            for (xii = 0; xii < gll.length; xii++) {
                if (tll == gll[xii][0]) {
                    medfuac = medfuac + gll[xii][1];
                }
            }
        }, 750);
    }
    ;

//Code for replacing thumbnail placeholders with img tags
    $('.featimgVar').each(function (i, obj) {
        $(this).attr('data-src');

        var dataThumbnailQuery = $(this).closest('ul').attr('data-thumbnail-query');
        if (dataThumbnailQuery === undefined || dataThumbnailQuery === null) {
            var tempSrc = $(this).attr('data-src');
            var tempAlt = $(this).attr('data-alt');
            $('<img src="' + tempSrc + '?interpolation=lanczos-none&resize=300:225" alt="' + tempAlt + '" border="0" class="featimg" />').insertAfter($(this));
        }
        else {
            var tempSrc = $(this).attr('data-src');
            var tempAlt = $(this).attr('data-alt');
            $('<img src="' + tempSrc + '?' + dataThumbnailQuery + '"alt="' + tempAlt + '" border="0" class="featimg" />').insertAfter($(this));
        }


        $(this).remove();
    });

});

//
// Dynamic 'More' Link Function
//
function showMoreLinks(divWrap, minLength, amountShown) {
    $(document).ready(function () {
        $(divWrap + ' ul').each(function () {
            if ($(this).find('li').length >= minLength)
            {
                $(this).find('li:gt(' + amountShown + ')').hide();
                $(this).find('li:eq(' + amountShown + ')').hide();
                $(this).append('<li><div class="morelink"><img height=\"7\" border=\"0\" width=\"9\" src=\"http://img.medscape.com/pi/global/icons/icon-arrowmore.gif\" alt=\"\"> <a class=\"showmore\" href="#">More</a></div></li>');
            }
        });
        $('.showmore').click(function (event) {
            event.preventDefault();
            $(this).parent().parent().parent().find('li:eq(' + amountShown + ')').show();
            $(this).parent().parent().parent().find('li:gt(' + amountShown + ')').show();
            $(this).parent().parent().remove();
        });
    });
}

/* Share link basic functions */
function fburl() {
    wmdPageLink('ar-share_face');
    var fbtitle = document.title;
    var fblink = window.location;
    fblink = fblink + "?src=soc_fb_share";
//	if (locale =="fr") {
//	var fbsharelink = "http://fr-fr.facebook.com/share.php?u=" + fblink + "&t=" + fbtitle;
//	} else {
    var fbsharelink = "http://www.facebook.com/share.php?u=" + fblink + "&t=" + fbtitle;
//	}
    socialCp('Facebook');
    window.open(fbsharelink);
}
function twiturl() {
    wmdPageLink('ar-share_twit');
    var twtitle = document.title;
    var twiturl = window.location;
    twiturl = twiturl + "?src=soc_tw_share";
    var ftwiturl = "http://twitter.com/share?url=" + encodeURIComponent(twiturl) + "&text=" + encodeURIComponent(twtitle) + "&via=medscape";
    socialCp('Twitter');
    window.open(ftwiturl);
}
function googleurl() {
    wmdPageLink("ar-share_google");
    var ggtitle = document.title;
    var googleurl = window.location;
    googleurl = googleurl + "?src=soc_gp_share";
    var ftgoogleurl = "https://plusone.google.com/_/+1/confirm?url=" + encodeURIComponent(googleurl) + "&title=" + encodeURIComponent(ggtitle);
    socialCp('Google+');
    window.open(ftgoogleurl);
}
function linkedinurl() {
    var title = document.title;
    var url = window.location;
    url += "?src=soc_lk_share";
    var fturl = "http://www.linkedin.com/cws/share?url=" + url + "&title=" + title
    socialCp('LinkedIn');
    window.open(fturl);
}
function viadeoeurl() {
    var title = document.title;
    var url = window.location;
    url += "?src=stviadeo";
    var viadeourl = "http://www.viadeo.com/shareit/share/?url=" + url + "&title=" + title;
    socialCp("Viadeo");
    window.open(viadeourl);
}
function socialCp(platform) {
    var cpSocData = new Object();
    cpSocData.appname = "social-functions";
    cpSocData.activityName = encodeURIComponent(platform);
    segVarPop(cpSocData);
    postCp(cpSocData);
}

/* Communications Platform Headlines */
var cpHlArr = new Array();

function cpHlLoad() {
    if (cpHlArr.length > 0) {
        var cpHlData = new Object();
        cpHlData.appname = "alert";
        cpHlData.activityName = "headlineimpr";
        cpHlData.impr = cpHlArr;
        postCp(cpHlData);
    }
}

function cpHlPush(hlImpr) {
    cpHlArr.push(hlImpr);
}

/* Communications Platform Ad Reporting */
var cpAdCallArr = new Array();
var adRolloverPos;

function adRollover()
{
    $("script[src*='pos%3'],iframe[src*='pos%3']").each(function () {
        var currTagName = this.tagName;
        $(this).parent().bind('mouseover', function (e) {
            adRolloverPos = $(this).find(currTagName).filter(function () {
                return (this.src.match(/http:\/\/as\.medscape/) != null)
            })[0].src.match(/pos%3D\d+/)[0].substring(6);
        });
    });

    $("div[id*=ads-pos]").on('mouseover', function () {
        adRolloverPos = this.id.match(/\d+/)[0];
    });

}

function adExpand(Ver) {
    if (cpAdCallArr.length > 0) {
        var cpAdData = new Object();
        cpAdData.appname = "ad";
        cpAdData.activityName = "adimpr";
        cpAdData.impr = new Array();
        $(cpAdCallArr).each(function (index) {
            if (this.ver == Ver) {
                cpAdData.impr.push(this);
                cpAdData.impr[cpAdData.impr.length - 1].exp = 1;
            }
        });
        if (cpAdData.impr.length > 1 || cpAdData.impr.length == 0) {
            cpAdData.impr = new Array();
            $(cpAdCallArr).each(function (index) {
                if (this.pos == Number(adRolloverPos)) {
                    cpAdData.impr.push(this);
                    cpAdData.impr[cpAdData.impr.length - 1].exp = 1;
                }
            });
        }
        postCp(cpAdData);
    }
}

function cpAdLoad() {
    if (cpAdCallArr.length > 0) {
        var cpAdData = new Object();
        cpAdData.appname = "ad";
        cpAdData.activityName = "adimpr";
        cpAdData.impr = cpAdCallArr;
        postCp(cpAdData);
    }
}

/* Communications Platform Articles  */
function cpArticleLoad(appname) {
    var cpArticle = {};
    var testPagination;
    segVarPop(cpArticle);
    cpArticle.appname = appname;
    cpArticle.activityName = "view";
    if (cpArticle.appname === "viewarticle") {
        testPagination = window.location.pathname.match(/\/viewarticle\/\d+_\d+/);
        if (testPagination !== null) {
            cpArticle.pageN = window.location.pathname.match(/\/viewarticle\/\d+_\d+/)[0].split('_')[1];
        } else {
            cpArticle.pageN = 1;
        }
    }
    postCp(cpArticle);
}

/* Shared CP Functions */
function segVarParam(value) {
    var segVarpar = new RegExp("(" + value + ")=([^; \n]*)");
    if ($('meta[name=metasegvar]').attr("content").match(segVarpar) != null) {
        var result = $('meta[name=metasegvar]').attr("content").match(segVarpar)[0].split("=")[1];
    }
    return result;
}

function segVarPop(obj) {
    if (typeof DFPTargetKeys != 'undefined') {
        if (DFPTargetKeys.pageSegVars.art != "0") {
            obj.activityId = Number(DFPTargetKeys.pageSegVars.art);
        }
        if (DFPTargetKeys.pageSegVars.ssp != "0") {
            obj.leadSpec = Number(DFPTargetKeys.pageSegVars.ssp);
        }
        if (DFPTargetKeys.pageSegVars.as != "0") {
            obj.allSpecialties = $.map(DFPTargetKeys.pageSegVars.as.split(','), function (obj) {
                return Number(obj);
            });
        }
        if (DFPTargetKeys.pageSegVars.scg != "0") {
            obj.leadConcept = Number(DFPTargetKeys.pageSegVars.scg);
        }
        if (DFPTargetKeys.pageSegVars.ac != "0") {
            obj.allConcepts = $.map(DFPTargetKeys.pageSegVars.ac.split(','), function (obj) {
                return Number(obj);
            });
        }
        if (DFPTargetKeys.pageSegVars.cg != "0") {
            obj.contentGroup = Number(DFPTargetKeys.pageSegVars.cg);
        }
        if (DFPTargetKeys.exclusionCategories.length > 0) {
            obj.blockCode = DFPTargetKeys.exclusionCategories;
        }
    }
}

function cpDrvrImpr(idArr) {
    var cpDrvrObj = {'appname': 'ad', 'activityName': 'adimpr', 'impr': []};
    $(idArr).each(function () {
        var drvrImpId = new Date().getTime().toString().slice(2) + Math.random().toString().substr(2, 8);
        var drvrImpr = {'activityId': $.trim($('#' + this).attr('data')), 'pos': Number(this.match(/\d\d\d/)[0]), 'impId': drvrImpId, 'pvId': s_pageview_id};
        cpDrvrObj.impr.push(drvrImpr);
        $('#' + this + ' a').each(function () {
            if (typeof $(this).attr('href') != 'undefined')
            {
                if ($(this).attr('href').indexOf('?') == -1) {
                    $(this).attr('href', $(this).attr('href') + '?impId=' + drvrImpId + '&pvId=' + s_pageview_id);
                } else {
                    $(this).attr('href', $(this).attr('href') + '&impId=' + drvrImpId + '&pvId=' + s_pageview_id);
                }
            }
        });
    });
    postCp(cpDrvrObj);
}

/* Onload CP Functions */
window.onload = function () {
    cpHlLoad();
    adRollover();
};

function cpAdCheck() {
    var adTimeLimit = 0;
    var testAdArr = setInterval(function () {
        adTimeLimit = adTimeLimit + 250;
        if ($('div[id*=ads-pos] iframe').length >= $('div[id*=ads-pos]').length) {
            clearInterval(testAdArr);
            var loadDebounce;
            $('div[id*=ads-pos] iframe').last().on('load', function () {
                clearTimeout(loadDebounce);
                loadDebounce = setTimeout(function () {
                    if (navigator.userAgent.toLowerCase().match(/(iphone)|(android)/) != null) {
                        setTimeout(function () {
                            if (cpAdCallArr.length > 0) {
                                cpAdLoad();
                            }
                        }, 1000);
                    } else {
                        if (cpAdCallArr.length > 0) {
                            cpAdLoad();
                        }
                    }
                }, 500);
            });
        }
        else if (adTimeLimit >= 4500) {
            clearInterval(testAdArr);
            if (cpAdCallArr.length > 0) {
                cpAdLoad();
            }
        }
    }, 250);
}

function emailCollection() {
    var links = window.document.getElementsByTagName("link");
    $(links).each(function () {
        if ($(this).attr("rel") == "canonical") {
            canonicalURL = $(this).attr("href");
        }
    });
    var articleID = canonicalURL.split("/");
    if (articleID[4].indexOf("_") > 0) {
        var a = articleID[4].split("_");
        articleID[4] = a[0];
    }
    adexGet('/px/viewcontenttools/web/emailthis/form.jsp?requestURL=' + canonicalURL + '&type=collection&cId=' + articleID[4] + '&subject=' + document.title, 'emailadexbox', 'adexwait', showemailbox);
}

//Empty object to bypass errors when ad blocker disables profads or webmd.
if (typeof profads === "undefined") {
    var profads = {
        ads2: {
            GenPVID: function () {
                return null
            },
            init: function () {
            },
            KillSwitch: function () {
                return true;
            },
            GenPVID:function () {
            }
        }
    };
}
if (typeof webmd === "undefined") {
    var webmd = {
        ads2: {
            defineAd: function () {
                return null
            },
            refresh: function () {
                return null
            }
        }
    };
}

/* Functions For Search Type-Ahead */
$(document).ready(function () {
    if (typeof $('.search-input, #layer-search-input').on != 'undefined') {
        $('.search-input, #layer-search-input').on('focus', openil);
        $('.search-input, #layer-search-input').on('keyup', il_call);
        $('.search-input, #layer-search-input').on('keydown', ilArrowNav);
        $('.search-input, #layer-search-input').on('blur', closeil);

        if (navigator.userAgent.toLowerCase().match(/msie 8/) != null) {
            $('.search-input, #layer-search-input').each(function () {
                $(this).css('color', '#999');
                this.value = $(this).attr('placeholder');
            });
        }
    }



});

var dataCopy;
var textCopy;
var typedInputNew = "";

var combolimit = 0;

var qrldrugpath;
var qrlpath;
var ILtimer;

var keyBlurFlg = false;

var qaChk = (document.domain.match(/\.qa\d\d/) == null ? "" : document.domain.match(/\.qa\d\d/)[0]);

function closeil(elem) {
    if (!keyBlurFlg) {
        if (navigator.userAgent.toLowerCase().match(/msie 8/) != null) {
            if (this.value == '') {
                $(this).css('color', '#999');
                this.value = $(this).attr('placeholder');
            }
        }
        if (typeof elem.innerHTML != 'undefined') {
            setTimeout(function () {
                $(elem).find('.ilfulllist').hide();
            }, 300);
        }
        else {
            var self = this;
            setTimeout(function () {
                $(self).parents('form:eq(0)').find('.ilfulllist').hide();
            }, 300);
        }
    }
    keyBlurFlg = false;
}

function openil() {

    if (navigator.userAgent.toLowerCase().match(/msie 8/) != null) {
        if (this.value == $(this).attr('placeholder')) {
            $(this).css('color', '#000');
            this.value = '';
        }
        ;
    }

    //$(this).parents('form:eq(0)').find('.il_combo_nor').hide();
    if (this.value.length >= 3) {
        instantlook(this);
    }
    /* if ($(this).parents('form:eq(0)').find('ul.combolist').children().size() > 1) {
     $(this).parents('form:eq(0)').find('.il_combo_nor').hide();
     } else if ($(this).parents('form:eq(0)').find('ul.combolist').children().size() == 0 && this.value.length != 0) {
     $(this).parents('form:eq(0)').find('.il_combo_nor').show();
     } */
}

function ilArrowNav(event) {
    if (event.keyCode == 40 || event.keyCode == 9 && $(this).siblings('.ilfulllist').is(':visible')) {
        if (event.keyCode == 9) {
            keyBlurFlg = true;
        }
        else if (event.keyCode == 40) {
            event.preventDefault();
        }
        var par = $(this).parents('form:eq(0)');
        $(this).parents('form:eq(0)').find('.combolist li a').off('blur');
        $(this).parents('form:eq(0)').find('.combolist li a').on('blur', function (e) {
            setTimeout(function () {
                if ($(document.activeElement).parents('form:eq(0)').length < 1 || (typeof document.activeElement.type != 'undefined' && document.activeElement.type == 'submit') || $(document.activeElement).parents('form:eq(0)')[0] != par[0]) {
                    keyBlurFlg = false;
                    closeil(par[0]);
                }
            }, 10);
        });
        $(this).parents('form:eq(0)').find('.combolist li a').off('focus');
        $(this).parents('form:eq(0)').find('.combolist li a').on('focus', function () {
            $('.focused').removeClass('focused');
            $(this).parent().addClass('focused');
        });
        $(this).parents('form:eq(0)').find('.combolist li a').off('hover');
        $(this).parents('form:eq(0)').find('.combolist li a').on('hover', function () {
            $(this).focus();
        });
        $(this).parents('form:eq(0)').find('.combolist li a').off('keydown');
        $(this).parents('form:eq(0)').find('.combolist li a').on('keydown', function (e) {
            if (e.keyCode != 9) {
                e.preventDefault();
            }
            else if (e.keyCode == 9 && ($(this).parent().index() == $(this).parent().parent().children().last().index())) {
                e.preventDefault();
                $(this).parents('form:eq(0)').find('.search-input:eq(0)').focus();
            }
            if (e.keyCode == 40 || e.keyCode == 39) {
                if ($(this).parent().next().length > 0) {
                    $(this).parent().next().find('a').focus();
                }
            }
            else if ($(this).parent().index() == 0 && (e.keyCode == 38 || e.keyCode == 37)) {
                $('.focused').removeClass('focused');
                $(this).parents('form:eq(0)').find('.search-input:eq(0)').focus();
            }
            else if (e.keyCode == 38 || e.keyCode == 37) {
                $(this).parent().prev().find('a').focus();
            }
            else if (e.keyCode == 13 || e.keyCode == 32) {
                $(this).parents('form:eq(0)').find('.search-input:eq(0)').val($(this).html().replace(/<[^>]+>/g, ''));
                $(this).parents('form:eq(0)').find('.ilfulllist').hide();
                if (typeof $(this).attr('onclick') != 'undefined') {
                    eval($(this).attr('onclick'));
                }
                if (typeof $(this).attr('href') != 'undefined' && $(this).attr('href').indexOf('javascript') == -1) {
                    window.location.href = $(this).attr('href');
                }
            }

        });
        if (event.keyCode == 40) {
            keyBlurFlg = true;
            $(this).parents('form:eq(0)').find('.combolist li a:eq(0)').focus();
        }
    }
}

function il_call() {
    if (this.value.length >= 3) {
        instantlook(this);
    }
    else {
        $(this).parents('form:eq(0)').find('.ilfulllist').hide();
    }
}

function instantlook(context) {

    typedInputNew = context.value.replace("&", "\\&").replace("+", "\\+").replace("(", "\\(").replace(")", "\\)").replace("#", "\\#").replace("/", "\\/").replace("'", "\\'");

    if (typedInputNew.length == 0) {
        //$(context).parents('form:eq(0)').find('.il_combo_nor').hide();
        $(context).parents('form:eq(0)').find(".combolist")[0].innerHTML = "";
        combolimit = 0;

    } else if (context.value == textCopy) {
        showResults(dataCopy, context, context.value);

    } else {
        var text = context.value;
        textCopy = text;
        text = text.replace("&", "\\&").replace("+", "\\+").replace("(", "\\(").replace(")", "\\)").replace("#", "\\#").replace("/", "\\/").replace("'", "\\'");

        $.ajax({
            type: "GET",
            contentType: "application/jsonp",
            url: 'http://www' + qaChk + '.webmd.com/api/qrl/LookupService.ashx?q=' + text + '&sz=5&s=10001&namespace=medscape',
            dataType: "jsonp",
            jsonp: 'jsonp',
            timeout: 1000,
            success: function (data) {
                showResults(data, context, text);
            }
        });

    }

}

function showResults(data, context, query) {
    dataCopy = data;
    $(context).parents('form:eq(0)').find(".combolist")[0].innerHTML = "";
    if (typeof data != 'undefined' && typeof data.types != 'undefined' && data.types.length >= 1) {
        for (i = 0; i < data.types[0].references.length; i++) {
            var resultline = document.createElement("li");
            if (document.domain.match('search') != null) {
                if ($(context).parents('form:eq(0)').attr('id') == 'SearchFormHeader') {
                    var ilOmniPre = "hd-sr-srch_la";
                }
                else {
                    var ilOmniPre = "main-srch_la";
                }
            }
            else {
                var ilOmniPre = "hd-sr-srch_il";
            }
            if (document.domain.match('search') != null && window.location.href.match('&plr=') != null) {
                var plr = window.location.href.match(/&plr=[^&]+/)[0];
            }
            else if (typeof document.getElementById('searchdbvalue') != 'undefined' && document.getElementById('searchdbvalue').value == "3") {
                var plr = "&plr=edu";
            }
            else {
                var plr = "";
            }
            var queryRx = new RegExp("(" + query + ")", "ig");
            resultline.innerHTML = "<a href=\"http://search" + qaChk + ".medscape.com/search?q=" + data.types[0].references[i].text + plr + "\" onclick=\"wmdTrack\('" + ilOmniPre + (i + 1) + "'\)\">" + data.types[0].references[i].text.replace(queryRx, '<span class="ta-hl">$1</span>') + "</a>";
            $(context).parents('form:eq(0)').find(".combolist")[0].appendChild(resultline);
            combolimit = combolimit + 1;
            // $(context).parents('form:eq(0)').find('.il_combo_nor').hide();
        }
    }
    if (combolimit > 0) {
        $(context).parents('form:eq(0)').find('.ilfulllist').show();
    }
    else {
        $(context).parents('form:eq(0)').find('.ilfulllist').hide();
    }
    /* if (combolimit < 1) {
     $(context).parents('form:eq(0)').find('.il_combo_nor').show();
     } */
    combolimit = 0;
}

function searchCp(site, callback, searchStr) {
	if (typeof callback == 'string') {
		searchStr = callback;
		callback = undefined;
	}
    var cpSrchData = new Object();
    cpSrchData.appname = "search";
    cpSrchData.activityName = site;
	if (typeof searchStr != 'undefined') {
		cpSrchData.search = searchStr;
	} else {
		cpSrchData.search = encodeURIComponent($('#search-input').val());
	}
    if ($('meta[name=metasegvar]').length > 0) {
        if (segVarParam("artid") != "0") {
            cpSrchData.activityId = segVarParam("artid");
        }
    }
    postCp(cpSrchData, callback);
}

function doSearch(locale, eduFlag) {
    var qaChk = (document.domain.match(/\.qa\d\d/) == null ? "" : document.domain.match(/\.qa\d\d/)[0]);
    localeString = ''
    if (locale != null && locale != 'en') {
        localeString = '/' + locale;
    }
    var _qval = $('#search-input').val();
    if(typeof _qval == "undefined") {
        var _qval = $('#searchInput').val();
    }
    if(_qval=="") {
        var _qval = $('#layer-search-input').val();
    }
	if (_qval.indexOf('@') != -1) { // remove any search query if email address might be present
		_qval = '';
	}

    if ($('#search-input').val() == "Search Medscape" || $('#searchInput').val() == "Search Medscape") {
        window.location.href = 'http://search' + qaChk + '.medscape.com/search' + localeString;
    }
    else {
        if (typeof eduFlag != 'undefined' && eduFlag == 'edu') {
            window.location.href = 'http://search' + qaChk + '.medscape.com/search' + localeString + '/?q=' + _qval + '&plr=edu';
        }
        else {
            window.location.href = 'http://search' + qaChk + '.medscape.com/search' + localeString + '/?q=' + _qval;
        }
    }
}

function subsearchheadertrack(locale) {
    if (document.getElementById('searchdbvalue').value == "1") {
        wmdTrack('hd-sr-srch');
        searchCp("news", function () {
            doSearch(locale)
        });
    }
    if (document.getElementById('searchdbvalue').value == "2") {
        wmdTrack('hd-sr-srch');
        searchCp("reference", function () {
            doSearch(locale)
        });
    }
    if (document.getElementById('searchdbvalue').value == "3") {
        wmdTrack('hd-sr-srch');
        searchCp("education", function () {
            doSearch(locale, 'edu')
        });
    }
    if (document.getElementById('searchdbvalue').value == "4") {
        wmdTrack('hd-sr-srch');
        searchCp("medline", function () {
            doSearch(locale)
        });
    }
}

/* Temporary Tooltip function to be replaced with modified functions below - ML as per SC */
function initializeTooltip(id, className, cookieName) {
    if (!$.cookie(cookieName) && $("#" + id).length) {
        $("body").addClass(className);
    }
}
function cancelTCTooltip(className,cookieName,optDomain) {
    $("body").removeClass(className);
    var expDate=new Date();
    expDate.setFullYear(2030,0,1);
	if (typeof optDomain == 'string') {
		optDomain = '; domain=' + optDomain;
	} else {
		var optDomain = '';
	}
    document.cookie = cookieName+"='true'; path=/; expires="+expDate + optDomain;
}
/* // Temporary Tooltip function to be replaced with newer functions below - ML as per SC */


/* Tooltip functions with Cross-domain: 'allDomain' values = 'all', 'com', or boolean, 'closeOnclick' = boolean, 'priority' = number (1 rank highest, 0 ignored)  */

var toolTipArr = [];

$(document).ready(function() {
	if (toolTipArr.length > 1) {
		var priority = 1;
		$(toolTipArr).filter(function() {return (typeof this[4] == 'number' && this[4] > 0)}).sort(function(a,b) {return a[4] - b[4]}).each(function(idx) {
			if (idx == 0) {
				priority = this[4];
				runTooltip.apply(this, this);
			}
			else if (this[4] == priority) {
				runTooltip.apply(this, this);
			}
		});
	}
	else if (toolTipArr.length > 0) {
		runTooltip.apply(this, toolTipArr[0]);
	}
});

function initTooltip(cookieName, className, closeOnclick, allDomain, priority) {
    if (document.cookie.indexOf(cookieName + '=') == -1) {
		toolTipArr.push([cookieName, className, closeOnclick, allDomain, priority]);
    }
}

function runTooltip(cookieName, className, closeOnclick, allDomain) {
    if (document.cookie.indexOf(cookieName + '=') == -1) {
		$("body").addClass(className);
		if (typeof closeOnclick != 'undefined' && closeOnclick) {
			var optDomain = '';
			if (typeof allDomain != 'undefined' && (allDomain == 'all' || allDomain == 'com' || allDomain == true) && document.domain.indexOf('.com') != -1) {
				optDomain = '; domain=medscape.com';
			}
			cookieTooltip(cookieName, allDomain, optDomain);
			$(document).one("click", function() {
				$("body").removeClass(className);
			});
		}
	}
}

function cancelTooltip(cookieName, className, allDomain) {
	$("body").removeClass(className);
	var optDomain = '';
	if (typeof allDomain != 'undefined' && (allDomain == 'all' || allDomain == 'com' || allDomain == true) && document.domain.indexOf('.com') != -1) {
		optDomain = '; domain=medscape.com';
	}
	cookieTooltip(cookieName, allDomain, optDomain);
}

function cookieTooltip(cookieName, allDomain, optDomain) {
	document.cookie = cookieName+"='true'; path=/; expires=Tue, 01 Jan 2030 21:59:36 GMT" + optDomain;
	if (typeof allDomain != 'undefined' && allDomain == 'all' || allDomain == true) {
		var xCookieFrame = document.createElement('iframe');
		xCookieFrame.width = 0;
		xCookieFrame.height = 0;
		xCookieFrame.style.display = "none";
		document.body.appendChild(xCookieFrame);
		xCookieFrame.src = getXDom() + '/noscan/public/x-dom-cookie?cookieName=' + encodeURIComponent(cookieName);
	}
}

function getXDom() {
	var xD = "";
	if (document.domain.indexOf("staging.") != -1) {
		xD = "staging.";
	} else if (document.domain.indexOf("proddev.") != -1) {
		xD = "proddev.";
	}
	if (document.domain.match(/qa\d\d\./) != null) {
		xD = xD + document.domain.match(/qa\d\d\./)[0];
	}
	if (document.domain.match(/dev\d\d\./) != null) {
		xD = xD + document.domain.match(/dev\d\d\./)[0];
	}
	if (document.domain.indexOf('.com') != -1) {
		xD = 'http://www.' + xD + 'medscape.org';
	}
	else {
		xD = 'http://www.' + xD + 'medscape.com';
	}
	return xD;
}


// carousel rotator code
function carousel(rotateID, CarW, DisVal, TruncVal) {
    if(typeof DisVal =="undefined"){DisVal=4}
    var CarWp = (CarW * 1) + 20;
    var rotatorTotal = $('ul#' + rotateID + ' li').size();
    $('#' + rotateID).css({
        'width': rotatorTotal * CarW + 'px'
    });
    rotatorTotal = Math.ceil(rotatorTotal / DisVal) * 1;
    var thisli = 1;
    if (rotatorTotal <= thisli) {
        $('#rotate_left').hide();
        $('#rotate_right').hide();
    }
    for (y = 0; y < rotatorTotal; y++) {
        $('#rotator_image').append('<span id="rotatorli' + (y + 1) + '" class="totalli"></span>');
    }
    $('#rotatorli1').addClass('thisli');

    $('#rotate_left').click(function() {
        if ($(this).hasClass('rotate_btn-dis')) {
            return
        } else {
            thisli = thisli - 1;
            $('#rotator_thisli').html(thisli);
            $('.thisli').removeClass('thisli');
            $('#rotatorli' + thisli).addClass('thisli');
            $('ul#' + rotateID).animate({
                "left": "+=" + CarWp + "px"
            }, "medium");
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
            return
        } else {
            thisli = thisli + 1;
            $('#rotator_thisli').html(thisli);
            $('.thisli').removeClass('thisli');
            $('#rotatorli' + thisli).addClass('thisli');

            $('ul#' + rotateID).animate({
                "left": "-=" + CarWp + "px"
            }, "medium");
            if (thisli != 1) {
                $('#rotate_left').removeClass('rotate_btn-dis');
            }
            if (thisli == rotatorTotal) {
                $('#rotate_right').addClass('rotate_btn-dis');
            } else {
                $('#rotate_right').removeClass('rotate_btn-dis');
            }
        }
    });

    /* Truncate the titles */
    if (TruncVal !== undefined) {
        $("ul#" + rotateID + " li a.title").each(function() {
            if ($(this).text().length > (TruncVal - 1) && $(this).text().indexOf(" ", TruncVal) != -1) {
                var nextsp = $(this).text().indexOf(" ", TruncVal);
                var tempcartitle = $(this).text().substring(0, nextsp);
                $(this).text(tempcartitle + ' ...');
            }
        });
    }
}
