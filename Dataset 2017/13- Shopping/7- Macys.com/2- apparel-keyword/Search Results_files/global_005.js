(function(f,e){var i=typeof(module)!="undefined";if(i){f=global}var b=typeof(Uint8Array)!="undefined";var d="0123456789abcdef".split("");var j=[-2147483648,8388608,32768,128];var h=[24,16,8,0];var g=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var a=[];var c=function(l){return k(l,true)};var k=function(m,L){var D=typeof(m)!="string";if(D&&m.constructor==f.ArrayBuffer){m=new Uint8Array(m)}var C,B,A,z,y,x,v,u,n,l,o=true,s=false,N,M,H=0,w=0,p=0,t=m.length,W,U,F,I,G,E,q,r,J,Y;if(L){C=3238371032;B=914150663;A=812702999;z=4144912697;y=4290775857;x=1750603025;v=1694076839;u=3204075428}else{C=1779033703;B=3144134277;A=1013904242;z=2773480762;y=1359893119;x=2600822924;v=528734635;u=1541459225}n=0;do{a[0]=n;a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0;if(D){for(N=w;H<t&&N<64;++H){a[N>>2]|=m[H]<<h[N++&3]}}else{for(N=w;H<t&&N<64;++H){l=m.charCodeAt(H);if(l<128){a[N>>2]|=l<<h[N++&3]}else{if(l<2048){a[N>>2]|=(192|(l>>6))<<h[N++&3];a[N>>2]|=(128|(l&63))<<h[N++&3]}else{if(l<55296||l>=57344){a[N>>2]|=(224|(l>>12))<<h[N++&3];a[N>>2]|=(128|((l>>6)&63))<<h[N++&3];a[N>>2]|=(128|(l&63))<<h[N++&3]}else{l=65536+(((l&1023)<<10)|(m.charCodeAt(++H)&1023));a[N>>2]|=(240|(l>>18))<<h[N++&3];a[N>>2]|=(128|((l>>12)&63))<<h[N++&3];a[N>>2]|=(128|((l>>6)&63))<<h[N++&3];a[N>>2]|=(128|(l&63))<<h[N++&3]}}}}}p+=N-w;w=N-64;if(H==t){a[N>>2]|=j[N&3];++H}n=a[16];if(H>t&&N<56){a[15]=p<<3;s=true}var X=C,V=B,T=A,S=z,R=y,Q=x,P=v,O=u;for(M=16;M<64;++M){I=a[M-15];W=((I>>>7)|(I<<25))^((I>>>18)|(I<<14))^(I>>>3);I=a[M-2];U=((I>>>17)|(I<<15))^((I>>>19)|(I<<13))^(I>>>10);a[M]=a[M-16]+W+a[M-7]+U<<0}Y=V&T;for(M=0;M<64;M+=4){if(o){if(L){q=300032;I=a[0]-1413257819;O=I-150054599<<0;S=I+24177077<<0}else{q=704751109;I=a[0]-210244248;O=I-1521486534<<0;S=I+143694565<<0}o=false}else{W=((X>>>2)|(X<<30))^((X>>>13)|(X<<19))^((X>>>22)|(X<<10));U=((R>>>6)|(R<<26))^((R>>>11)|(R<<21))^((R>>>25)|(R<<7));q=X&V;F=q^(X&T)^Y;E=(R&Q)^(~R&P);I=O+U+E+g[M]+a[M];G=W+F;O=S+I<<0;S=I+G<<0}W=((S>>>2)|(S<<30))^((S>>>13)|(S<<19))^((S>>>22)|(S<<10));U=((O>>>6)|(O<<26))^((O>>>11)|(O<<21))^((O>>>25)|(O<<7));r=S&X;F=r^(S&V)^q;E=(O&R)^(~O&Q);I=P+U+E+g[M+1]+a[M+1];G=W+F;P=T+I<<0;T=I+G<<0;W=((T>>>2)|(T<<30))^((T>>>13)|(T<<19))^((T>>>22)|(T<<10));U=((P>>>6)|(P<<26))^((P>>>11)|(P<<21))^((P>>>25)|(P<<7));J=T&S;F=J^(T&X)^r;E=(P&O)^(~P&R);I=Q+U+E+g[M+2]+a[M+2];G=W+F;Q=V+I<<0;V=I+G<<0;W=((V>>>2)|(V<<30))^((V>>>13)|(V<<19))^((V>>>22)|(V<<10));U=((Q>>>6)|(Q<<26))^((Q>>>11)|(Q<<21))^((Q>>>25)|(Q<<7));Y=V&T;F=Y^(V&S)^J;E=(Q&P)^(~Q&O);I=R+U+E+g[M+3]+a[M+3];G=W+F;R=X+I<<0;X=I+G<<0}C=C+X<<0;B=B+V<<0;A=A+T<<0;z=z+S<<0;y=y+R<<0;x=x+Q<<0;v=v+P<<0;u=u+O<<0}while(!s);var K=d[(C>>28)&15]+d[(C>>24)&15]+d[(C>>20)&15]+d[(C>>16)&15]+d[(C>>12)&15]+d[(C>>8)&15]+d[(C>>4)&15]+d[C&15]+d[(B>>28)&15]+d[(B>>24)&15]+d[(B>>20)&15]+d[(B>>16)&15]+d[(B>>12)&15]+d[(B>>8)&15]+d[(B>>4)&15]+d[B&15]+d[(A>>28)&15]+d[(A>>24)&15]+d[(A>>20)&15]+d[(A>>16)&15]+d[(A>>12)&15]+d[(A>>8)&15]+d[(A>>4)&15]+d[A&15]+d[(z>>28)&15]+d[(z>>24)&15]+d[(z>>20)&15]+d[(z>>16)&15]+d[(z>>12)&15]+d[(z>>8)&15]+d[(z>>4)&15]+d[z&15]+d[(y>>28)&15]+d[(y>>24)&15]+d[(y>>20)&15]+d[(y>>16)&15]+d[(y>>12)&15]+d[(y>>8)&15]+d[(y>>4)&15]+d[y&15]+d[(x>>28)&15]+d[(x>>24)&15]+d[(x>>20)&15]+d[(x>>16)&15]+d[(x>>12)&15]+d[(x>>8)&15]+d[(x>>4)&15]+d[x&15]+d[(v>>28)&15]+d[(v>>24)&15]+d[(v>>20)&15]+d[(v>>16)&15]+d[(v>>12)&15]+d[(v>>8)&15]+d[(v>>4)&15]+d[v&15];if(!L){K+=d[(u>>28)&15]+d[(u>>24)&15]+d[(u>>20)&15]+d[(u>>16)&15]+d[(u>>12)&15]+d[(u>>8)&15]+d[(u>>4)&15]+d[u&15]}return K};if(!f.JS_SHA256_TEST&&i){k.sha256=k;k.sha224=c;module.exports=k}else{if(f){f.sha256=k;f.sha224=c}}}(this));
var hex_chr="0123456789abcdef";function rhex(e){str="";for(j=0;j<=3;j++){str+=hex_chr.charAt((e>>(j*8+4))&15)+hex_chr.charAt((e>>(j*8))&15)}return str}function rbytes(f,e,h,g){bytes=new Array(16);for(count=0;count<4;count++){bytes[count]=(f&255);f=f>>8;bytes[count+4]=(e&255);e=e>>8;bytes[count+8]=(h&255);h=h>>8;bytes[count+12]=(g&255);g=g>>8}return bytes}function str2blks_MD5(e){nblk=((e.length+8)>>6)+1;blks=new Array(nblk*16);for(i=0;i<nblk*16;i++){blks[i]=0}for(i=0;i<e.length;i++){blks[i>>2]|=e.charCodeAt(i)<<((i%4)*8)}blks[i>>2]|=128<<((i%4)*8);blks[nblk*16-2]=e.length*8;return blks}function add(e,h){var g=(e&65535)+(h&65535);var f=(e>>16)+(h>>16)+(g>>16);return(f<<16)|(g&65535)}function rol(e,f){return(e<<f)|(e>>>(32-f))}function cmn(l,g,f,e,k,h){return add(rol(add(add(g,l),add(e,h)),k),f)}function ff(g,f,m,l,e,k,h){return cmn((f&m)|((~f)&l),g,f,e,k,h)}function gg(g,f,m,l,e,k,h){return cmn((f&l)|(m&(~l)),g,f,e,k,h)}function hh(g,f,m,l,e,k,h){return cmn(f^m^l,g,f,e,k,h)}function ii(g,f,m,l,e,k,h){return cmn(m^(f|(~l)),g,f,e,k,h)}function calcMD5(e){x=str2blks_MD5(e);a=1732584193;b=-271733879;c=-1732584194;d=271733878;for(i=0;i<x.length;i+=16){olda=a;oldb=b;oldc=c;oldd=d;a=ff(a,b,c,d,x[i+0],7,-680876936);d=ff(d,a,b,c,x[i+1],12,-389564586);c=ff(c,d,a,b,x[i+2],17,606105819);b=ff(b,c,d,a,x[i+3],22,-1044525330);a=ff(a,b,c,d,x[i+4],7,-176418897);d=ff(d,a,b,c,x[i+5],12,1200080426);c=ff(c,d,a,b,x[i+6],17,-1473231341);b=ff(b,c,d,a,x[i+7],22,-45705983);a=ff(a,b,c,d,x[i+8],7,1770035416);d=ff(d,a,b,c,x[i+9],12,-1958414417);c=ff(c,d,a,b,x[i+10],17,-42063);b=ff(b,c,d,a,x[i+11],22,-1990404162);a=ff(a,b,c,d,x[i+12],7,1804603682);d=ff(d,a,b,c,x[i+13],12,-40341101);c=ff(c,d,a,b,x[i+14],17,-1502002290);b=ff(b,c,d,a,x[i+15],22,1236535329);a=gg(a,b,c,d,x[i+1],5,-165796510);d=gg(d,a,b,c,x[i+6],9,-1069501632);c=gg(c,d,a,b,x[i+11],14,643717713);b=gg(b,c,d,a,x[i+0],20,-373897302);a=gg(a,b,c,d,x[i+5],5,-701558691);d=gg(d,a,b,c,x[i+10],9,38016083);c=gg(c,d,a,b,x[i+15],14,-660478335);b=gg(b,c,d,a,x[i+4],20,-405537848);a=gg(a,b,c,d,x[i+9],5,568446438);d=gg(d,a,b,c,x[i+14],9,-1019803690);c=gg(c,d,a,b,x[i+3],14,-187363961);b=gg(b,c,d,a,x[i+8],20,1163531501);a=gg(a,b,c,d,x[i+13],5,-1444681467);d=gg(d,a,b,c,x[i+2],9,-51403784);c=gg(c,d,a,b,x[i+7],14,1735328473);b=gg(b,c,d,a,x[i+12],20,-1926607734);a=hh(a,b,c,d,x[i+5],4,-378558);d=hh(d,a,b,c,x[i+8],11,-2022574463);c=hh(c,d,a,b,x[i+11],16,1839030562);b=hh(b,c,d,a,x[i+14],23,-35309556);a=hh(a,b,c,d,x[i+1],4,-1530992060);d=hh(d,a,b,c,x[i+4],11,1272893353);c=hh(c,d,a,b,x[i+7],16,-155497632);b=hh(b,c,d,a,x[i+10],23,-1094730640);a=hh(a,b,c,d,x[i+13],4,681279174);d=hh(d,a,b,c,x[i+0],11,-358537222);c=hh(c,d,a,b,x[i+3],16,-722521979);b=hh(b,c,d,a,x[i+6],23,76029189);a=hh(a,b,c,d,x[i+9],4,-640364487);d=hh(d,a,b,c,x[i+12],11,-421815835);c=hh(c,d,a,b,x[i+15],16,530742520);b=hh(b,c,d,a,x[i+2],23,-995338651);a=ii(a,b,c,d,x[i+0],6,-198630844);d=ii(d,a,b,c,x[i+7],10,1126891415);c=ii(c,d,a,b,x[i+14],15,-1416354905);b=ii(b,c,d,a,x[i+5],21,-57434055);a=ii(a,b,c,d,x[i+12],6,1700485571);d=ii(d,a,b,c,x[i+3],10,-1894986606);c=ii(c,d,a,b,x[i+10],15,-1051523);b=ii(b,c,d,a,x[i+1],21,-2054922799);a=ii(a,b,c,d,x[i+8],6,1873313359);d=ii(d,a,b,c,x[i+15],10,-30611744);c=ii(c,d,a,b,x[i+6],15,-1560198380);b=ii(b,c,d,a,x[i+13],21,1309151649);a=ii(a,b,c,d,x[i+4],6,-145523070);d=ii(d,a,b,c,x[i+11],10,-1120210379);c=ii(c,d,a,b,x[i+2],15,718787259);b=ii(b,c,d,a,x[i+9],21,-343485551);a=add(a,olda);b=add(b,oldb);c=add(c,oldc);d=add(d,oldd)}return rhex(a)+rhex(b)+rhex(c)+rhex(d)};
