//tealium universal tag - utag.267 ut4.0.201702240316, Copyright 2017 Tealium.com Inc. All Rights Reserved.
!function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+M+"*\\]",Q=":("+N+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return X.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),"function"==typeof define&&define.amd?define(function(){return fb}):"undefined"!=typeof module&&module.exports?module.exports=fb:a.Sizzle=fb}(window);var tlsdkv='tealeaf.5.2.0.AA_feb082016-TEST-synch-10msLoad-captureFramesFalse';!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof ddefine&&ddefine.amd)ddefine([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.pako=t()}}(function(){return function t(e,a,n){function r(s,h){if(!a[s]){if(!e[s]){var l="function"==typeof require&&require;if(!h&&l)return l(s,!0);if(i)return i(s,!0);var o=new Error("Cannot find module '"+s+"'");throw o.code="MODULE_NOT_FOUND",o}
var _=a[s]={exports:{}};e[s][0].call(_.exports,function(t){var a=e[s][1][t];return r(a?a:t)},_,_.exports,t,e,a,n)}
return a[s].exports}
for(var i="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(t,e,a){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(t){for(var e=Array.prototype.slice.call(arguments,1);e.length;){var a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n])}}
return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var r={arraySet:function(t,e,a,n,r){if(e.subarray&&t.subarray)return void t.set(e.subarray(a,a+n),r);for(var i=0;n>i;i++)t[r+i]=e[a+i]},flattenChunks:function(t){var e,a,n,r,i,s;for(n=0,e=0,a=t.length;a>e;e++)n+=t[e].length;for(s=new Uint8Array(n),r=0,e=0,a=t.length;a>e;e++)i=t[e],s.set(i,r),r+=i.length;return s}},i={arraySet:function(t,e,a,n,r){for(var i=0;n>i;i++)t[r+i]=e[a+i]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,r)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,i))},a.setTyped(n)},{}],2:[function(t,e,a){"use strict";function n(t,e){if(65537>e&&(t.subarray&&s||!t.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(t,e));for(var a="",n=0;e>n;n++)a+=String.fromCharCode(t[n]);return a}
var r=t("./common"),i=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch(h){i=!1}
try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){s=!1}
for(var l=new r.Buf8(256),o=0;256>o;o++)l[o]=o>=252?6:o>=248?5:o>=240?4:o>=224?3:o>=192?2:1;l[254]=l[254]=1,a.string2buf=function(t){var e,a,n,i,s,h=t.length,l=0;for(i=0;h>i;i++)a=t.charCodeAt(i),55296===(64512&a)&&h>i+1&&(n=t.charCodeAt(i+1),56320===(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),i++)),l+=128>a?1:2048>a?2:65536>a?3:4;for(e=new r.Buf8(l),s=0,i=0;l>s;i++)a=t.charCodeAt(i),55296===(64512&a)&&h>i+1&&(n=t.charCodeAt(i+1),56320===(64512&n)&&(a=65536+(a-55296<<10)+(n-56320),i++)),128>a?e[s++]=a:2048>a?(e[s++]=192|a>>>6,e[s++]=128|63&a):65536>a?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},a.buf2binstring=function(t){return n(t,t.length)},a.binstring2buf=function(t){for(var e=new r.Buf8(t.length),a=0,n=e.length;n>a;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,r,i,s,h=e||t.length,o=new Array(2*h);for(r=0,a=0;h>a;)
if(i=t[a++],128>i)o[r++]=i;else if(s=l[i],s>4)o[r++]=65533,a+=s-1;else{for(i&=2===s?31:3===s?15:7;s>1&&h>a;)i=i<<6|63&t[a++],s--;s>1?o[r++]=65533:65536>i?o[r++]=i:(i-=65536,o[r++]=55296|i>>10&1023,o[r++]=56320|1023&i)}
return n(o,r)},a.utf8border=function(t,e){var a;for(e=e||t.length,e>t.length&&(e=t.length),a=e-1;a>=0&&128===(192&t[a]);)a--;return 0>a?e:0===a?e:a+l[t[a]]>e?a:e}},{"./common":1}],3:[function(t,e,a){"use strict";function n(t,e,a,n){for(var r=65535&t|0,i=t>>>16&65535|0,s=0;0!==a;){s=a>2e3?2e3:a,a-=s;do r=r+e[n++]|0,i=i+r|0;while(--s);r%=65521,i%=65521}
return r|i<<16|0}
e.exports=n},{}],4:[function(t,e,a){"use strict";function n(){for(var t,e=[],a=0;256>a;a++){t=a;for(var n=0;8>n;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}
return e}
function r(t,e,a,n){var r=i,s=n+a;t=-1^t;for(var h=n;s>h;h++)t=t>>>8^r[255&(t^e[h])];return-1^t}
var i=n();e.exports=r},{}],5:[function(t,e,a){"use strict";function n(t,e){return t.msg=I[e],e}
function r(t){return(t<<1)-(t>4?9:0)}
function i(t){for(var e=t.length;--e>=0;)t[e]=0}
function s(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(S.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}
function h(t,e){j._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,s(t.strm)}
function l(t,e){t.pending_buf[t.pending++]=e}
function o(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}
function _(t,e,a,n){var r=t.avail_in;return r>n&&(r=n),0===r?0:(t.avail_in-=r,S.arraySet(e,t.input,t.next_in,r,a),1===t.state.wrap?t.adler=E(t.adler,e,r,a):2===t.state.wrap&&(t.adler=U(t.adler,e,r,a)),t.next_in+=r,t.total_in+=r,r)}
function d(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-ot?t.strstart-(t.w_size-ot):0,o=t.window,_=t.w_mask,d=t.prev,u=t.strstart+lt,f=o[i+s-1],c=o[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do
if(a=e,o[a+s]===c&&o[a+s-1]===f&&o[a]===o[i]&&o[++a]===o[i+1]){i+=2,a++;do;while(o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&u>i);if(n=lt-(u-i),i=u-lt,n>s){if(t.match_start=e,s=n,n>=h)break;f=o[i+s-1],c=o[i+s]}}
while((e=d[e&_])>l&&0!==--r);return s<=t.lookahead?s:t.lookahead}
function u(t){var e,a,n,r,i,s=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-ot)){S.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,a=t.hash_size,e=a;do n=t.head[--e],t.head[e]=n>=s?n-s:0;while(--a);a=s,e=a;do n=t.prev[--e],t.prev[e]=n>=s?n-s:0;while(--a);r+=s}
if(0===t.strm.avail_in)break;if(a=_(t.strm,t.window,t.strstart+t.lookahead,r),t.lookahead+=a,t.lookahead+t.insert>=ht)
for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+ht-1])&t.hash_mask,t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<ht)););}while(t.lookahead<ot&&0!==t.strm.avail_in)}
function f(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(u(t),0===t.lookahead&&e===D)return bt;if(0===t.lookahead)break}
t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,h(t,!1),0===t.strm.avail_out))return bt;if(t.strstart-t.block_start>=t.w_size-ot&&(h(t,!1),0===t.strm.avail_out))return bt}
return t.insert=0,e===T?(h(t,!0),0===t.strm.avail_out?wt:yt):t.strstart>t.block_start&&(h(t,!1),0===t.strm.avail_out)?bt:bt}
function c(t,e){for(var a,n;;){if(t.lookahead<ot){if(u(t),t.lookahead<ot&&e===D)return bt;if(0===t.lookahead)break}
if(a=0,t.lookahead>=ht&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-ot&&(t.match_length=d(t,a)),t.match_length>=ht)
if(n=j._tr_tally(t,t.strstart-t.match_start,t.match_length-ht),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=ht){t.match_length--;do t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else n=j._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(h(t,!1),0===t.strm.avail_out))return bt}
return t.insert=t.strstart<ht-1?t.strstart:ht-1,e===T?(h(t,!0),0===t.strm.avail_out?wt:yt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?bt:vt}
function g(t,e){for(var a,n,r;;){if(t.lookahead<ot){if(u(t),t.lookahead<ot&&e===D)return bt;if(0===t.lookahead)break}
if(a=0,t.lookahead>=ht&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=ht-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-ot&&(t.match_length=d(t,a),t.match_length<=5&&(t.strategy===P||t.match_length===ht&&t.strstart-t.match_start>4096)&&(t.match_length=ht-1)),t.prev_length>=ht&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-ht,n=j._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-ht),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=r&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+ht-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(0!==--t.prev_length);if(t.match_available=0,t.match_length=ht-1,t.strstart++,n&&(h(t,!1),0===t.strm.avail_out))return bt}else if(t.match_available){if(n=j._tr_tally(t,0,t.window[t.strstart-1]),n&&h(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return bt}else t.match_available=1,t.strstart++,t.lookahead--}
return t.match_available&&(n=j._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<ht-1?t.strstart:ht-1,e===T?(h(t,!0),0===t.strm.avail_out?wt:yt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?bt:vt}
function p(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=lt){if(u(t),t.lookahead<=lt&&e===D)return bt;if(0===t.lookahead)break}
if(t.match_length=0,t.lookahead>=ht&&t.strstart>0&&(r=t.strstart-1,n=s[r],n===s[++r]&&n===s[++r]&&n===s[++r])){i=t.strstart+lt;do;while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&i>r);t.match_length=lt-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}
if(t.match_length>=ht?(a=j._tr_tally(t,1,t.match_length-ht),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(h(t,!1),0===t.strm.avail_out))return bt}
return t.insert=0,e===T?(h(t,!0),0===t.strm.avail_out?wt:yt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?bt:vt}
function m(t,e){for(var a;;){if(0===t.lookahead&&(u(t),0===t.lookahead)){if(e===D)return bt;break}
if(t.match_length=0,a=j._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(h(t,!1),0===t.strm.avail_out))return bt}
return t.insert=0,e===T?(h(t,!0),0===t.strm.avail_out?wt:yt):t.last_lit&&(h(t,!1),0===t.strm.avail_out)?bt:vt}
function b(t){t.window_size=2*t.w_size,i(t.head),t.max_lazy_match=C[t.level].max_lazy,t.good_match=C[t.level].good_length,t.nice_match=C[t.level].nice_length,t.max_chain_length=C[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=ht-1,t.match_available=0,t.ins_h=0}
function v(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=X,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new S.Buf16(2*it),this.dyn_dtree=new S.Buf16(2*(2*nt+1)),this.bl_tree=new S.Buf16(2*(2*rt+1)),i(this.dyn_ltree),i(this.dyn_dtree),i(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new S.Buf16(st+1),this.heap=new S.Buf16(2*at+1),i(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new S.Buf16(2*at+1),i(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}
function w(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=W,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?dt:pt,t.adler=2===e.wrap?0:1,e.last_flush=D,j._tr_init(e),N):n(t,H)}
function y(t){var e=w(t);return e===N&&b(t.state),e}
function z(t,e){return t&&t.state?2!==t.state.wrap?H:(t.state.gzhead=e,N):H}
function k(t,e,a,r,i,s){if(!t)return H;var h=1;if(e===M&&(e=6),0>r?(h=0,r=-r):r>15&&(h=2,r-=16),1>i||i>Y||a!==X||8>r||r>15||0>e||e>9||0>s||s>Q)return n(t,H);8===r&&(r=9);var l=new v;return t.state=l,l.strm=t,l.wrap=h,l.gzhead=null,l.w_bits=r,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=i+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+ht-1)/ht),l.window=new S.Buf8(2*l.w_size),l.head=new S.Buf16(l.hash_size),l.prev=new S.Buf16(l.w_size),l.lit_bufsize=1<<i+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new S.Buf8(l.pending_buf_size),l.d_buf=l.lit_bufsize>>1,l.l_buf=3*l.lit_bufsize,l.level=e,l.strategy=s,l.method=a,y(t)}
function x(t,e){return k(t,e,X,Z,$,V)}
function B(t,e){var a,h,_,d;if(!t||!t.state||e>L||0>e)return t?n(t,H):H;if(h=t.state,!t.output||!t.input&&0!==t.avail_in||h.status===mt&&e!==T)return n(t,0===t.avail_out?K:H);if(h.strm=t,a=h.last_flush,h.last_flush=e,h.status===dt)
if(2===h.wrap)t.adler=0,l(h,31),l(h,139),l(h,8),h.gzhead?(l(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),l(h,255&h.gzhead.time),l(h,h.gzhead.time>>8&255),l(h,h.gzhead.time>>16&255),l(h,h.gzhead.time>>24&255),l(h,9===h.level?2:h.strategy>=G||h.level<2?4:0),l(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(l(h,255&h.gzhead.extra.length),l(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(t.adler=U(t.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=ut):(l(h,0),l(h,0),l(h,0),l(h,0),l(h,0),l(h,9===h.level?2:h.strategy>=G||h.level<2?4:0),l(h,zt),h.status=pt);else{var u=X+(h.w_bits-8<<4)<<8,f=-1;f=h.strategy>=G||h.level<2?0:h.level<6?1:6===h.level?2:3,u|=f<<6,0!==h.strstart&&(u|=_t),u+=31-u%31,h.status=pt,o(h,u),0!==h.strstart&&(o(h,t.adler>>>16),o(h,65535&t.adler)),t.adler=1}
if(h.status===ut)
if(h.gzhead.extra){for(_=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>_&&(t.adler=U(t.adler,h.pending_buf,h.pending-_,_)),s(t),_=h.pending,h.pending!==h.pending_buf_size));)l(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>_&&(t.adler=U(t.adler,h.pending_buf,h.pending-_,_)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=ft)}else h.status=ft;if(h.status===ft)
if(h.gzhead.name){_=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>_&&(t.adler=U(t.adler,h.pending_buf,h.pending-_,_)),s(t),_=h.pending,h.pending===h.pending_buf_size)){d=1;break}
d=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,l(h,d)}while(0!==d);h.gzhead.hcrc&&h.pending>_&&(t.adler=U(t.adler,h.pending_buf,h.pending-_,_)),0===d&&(h.gzindex=0,h.status=ct)}else h.status=ct;if(h.status===ct)
if(h.gzhead.comment){_=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>_&&(t.adler=U(t.adler,h.pending_buf,h.pending-_,_)),s(t),_=h.pending,h.pending===h.pending_buf_size)){d=1;break}
d=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,l(h,d)}while(0!==d);h.gzhead.hcrc&&h.pending>_&&(t.adler=U(t.adler,h.pending_buf,h.pending-_,_)),0===d&&(h.status=gt)}else h.status=gt;if(h.status===gt&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&s(t),h.pending+2<=h.pending_buf_size&&(l(h,255&t.adler),l(h,t.adler>>8&255),t.adler=0,h.status=pt)):h.status=pt),0!==h.pending){if(s(t),0===t.avail_out)return h.last_flush=-1,N}else if(0===t.avail_in&&r(e)<=r(a)&&e!==T)return n(t,K);if(h.status===mt&&0!==t.avail_in)return n(t,K);if(0!==t.avail_in||0!==h.lookahead||e!==D&&h.status!==mt){var c=h.strategy===G?m(h,e):h.strategy===J?p(h,e):C[h.level].func(h,e);if((c===wt||c===yt)&&(h.status=mt),c===bt||c===wt)return 0===t.avail_out&&(h.last_flush=-1),N;if(c===vt&&(e===O?j._tr_align(h):e!==L&&(j._tr_stored_block(h,0,0,!1),e===q&&(i(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),s(t),0===t.avail_out))return h.last_flush=-1,N}
return e!==T?N:h.wrap<=0?R:(2===h.wrap?(l(h,255&t.adler),l(h,t.adler>>8&255),l(h,t.adler>>16&255),l(h,t.adler>>24&255),l(h,255&t.total_in),l(h,t.total_in>>8&255),l(h,t.total_in>>16&255),l(h,t.total_in>>24&255)):(o(h,t.adler>>>16),o(h,65535&t.adler)),s(t),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?N:R)}
function A(t){var e;return t&&t.state?(e=t.state.status,e!==dt&&e!==ut&&e!==ft&&e!==ct&&e!==gt&&e!==pt&&e!==mt?n(t,H):(t.state=null,e===pt?n(t,F):N)):H}
var C,S=t("../utils/common"),j=t("./trees"),E=t("./adler32"),U=t("./crc32"),I=t("./messages"),D=0,O=1,q=3,T=4,L=5,N=0,R=1,H=-2,F=-3,K=-5,M=-1,P=1,G=2,J=3,Q=4,V=0,W=2,X=8,Y=9,Z=15,$=8,tt=29,et=256,at=et+1+tt,nt=30,rt=19,it=2*at+1,st=15,ht=3,lt=258,ot=lt+ht+1,_t=32,dt=42,ut=69,ft=73,ct=91,gt=103,pt=113,mt=666,bt=1,vt=2,wt=3,yt=4,zt=3,kt=function(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r};C=[new kt(0,0,0,0,f),new kt(4,4,8,4,c),new kt(4,5,16,8,c),new kt(4,6,32,32,c),new kt(4,4,16,16,g),new kt(8,16,32,32,g),new kt(8,16,128,128,g),new kt(8,32,128,256,g),new kt(32,128,258,1024,g),new kt(32,258,258,4096,g)],a.deflateInit=x,a.deflateInit2=k,a.deflateReset=y,a.deflateResetKeep=w,a.deflateSetHeader=z,a.deflate=B,a.deflateEnd=A,a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":4,"./messages":6,"./trees":7}],6:[function(t,e,a){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],7:[function(t,e,a){"use strict";function n(t){for(var e=t.length;--e>=0;)t[e]=0}
function r(t){return 256>t?st[t]:st[256+(t>>>7)]}
function i(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}
function s(t,e,a){t.bi_valid>Q-a?(t.bi_buf|=e<<t.bi_valid&65535,i(t,t.bi_buf),t.bi_buf=e>>Q-t.bi_valid,t.bi_valid+=a-Q):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}
function h(t,e,a){s(t,a[2*e],a[2*e+1])}
function l(t,e){var a=0;do a|=1&t,t>>>=1,a<<=1;while(--e>0);return a>>>1}
function o(t){16===t.bi_valid?(i(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}
function _(t,e){var a,n,r,i,s,h,l=e.dyn_tree,o=e.max_code,_=e.stat_desc.static_tree,d=e.stat_desc.has_stree,u=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,c=e.stat_desc.max_length,g=0;for(i=0;J>=i;i++)t.bl_count[i]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;G>a;a++)n=t.heap[a],i=l[2*l[2*n+1]+1]+1,i>c&&(i=c,g++),l[2*n+1]=i,n>o||(t.bl_count[i]++,s=0,n>=f&&(s=u[n-f]),h=l[2*n],t.opt_len+=h*(i+s),d&&(t.static_len+=h*(_[2*n+1]+s)));if(0!==g){do{for(i=c-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[c]--,g-=2}while(g>0);for(i=c;0!==i;i--)
for(n=t.bl_count[i];0!==n;)r=t.heap[--a],r>o||(l[2*r+1]!==i&&(t.opt_len+=(i-l[2*r+1])*l[2*r],l[2*r+1]=i),n--)}}
function d(t,e,a){var n,r,i=new Array(J+1),s=0;for(n=1;J>=n;n++)i[n]=s=s+a[n-1]<<1;for(r=0;e>=r;r++){var h=t[2*r+1];0!==h&&(t[2*r]=l(i[h]++,h))}}
function u(){var t,e,a,n,r,i=new Array(J+1);for(a=0,n=0;H-1>n;n++)
for(lt[n]=a,t=0;t<1<<$[n];t++)ht[a++]=n;for(ht[a-1]=n,r=0,n=0;16>n;n++)
for(ot[n]=r,t=0;t<1<<tt[n];t++)st[r++]=n;for(r>>=7;M>n;n++)
for(ot[n]=r<<7,t=0;t<1<<tt[n]-7;t++)st[256+r++]=n;for(e=0;J>=e;e++)i[e]=0;for(t=0;143>=t;)rt[2*t+1]=8,t++,i[8]++;for(;255>=t;)rt[2*t+1]=9,t++,i[9]++;for(;279>=t;)rt[2*t+1]=7,t++,i[7]++;for(;287>=t;)rt[2*t+1]=8,t++,i[8]++;for(d(rt,K+1,i),t=0;M>t;t++)it[2*t+1]=5,it[2*t]=l(t,5);_t=new ft(rt,$,F+1,K,J),dt=new ft(it,tt,0,M,J),ut=new ft(new Array(0),et,0,P,V)}
function f(t){var e;for(e=0;K>e;e++)t.dyn_ltree[2*e]=0;for(e=0;M>e;e++)t.dyn_dtree[2*e]=0;for(e=0;P>e;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*W]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}
function c(t){t.bi_valid>8?i(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}
function g(t,e,a,n){c(t),n&&(i(t,a),i(t,~a)),E.arraySet(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}
function p(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]}
function m(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&p(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!p(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n}
function b(t,e,a){var n,i,l,o,_=0;if(0!==t.last_lit)
do n=t.pending_buf[t.d_buf+2*_]<<8|t.pending_buf[t.d_buf+2*_+1],i=t.pending_buf[t.l_buf+_],_++,0===n?h(t,i,e):(l=ht[i],h(t,l+F+1,e),o=$[l],0!==o&&(i-=lt[l],s(t,i,o)),n--,l=r(n),h(t,l,a),o=tt[l],0!==o&&(n-=ot[l],s(t,n,o)));while(_<t.last_lit);h(t,W,e)}
function v(t,e){var a,n,r,i=e.dyn_tree,s=e.stat_desc.static_tree,h=e.stat_desc.has_stree,l=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=G,a=0;l>a;a++)0!==i[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):i[2*a+1]=0;for(;t.heap_len<2;)r=t.heap[++t.heap_len]=2>o?++o:0,i[2*r]=1,t.depth[r]=0,t.opt_len--,h&&(t.static_len-=s[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;a>=1;a--)m(t,i,a);r=l;do a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],m(t,i,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,i[2*r]=i[2*a]+i[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,i[2*a+1]=i[2*n+1]=r,t.heap[1]=r++,m(t,i,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],_(t,e),d(i,o,t.bl_count)}
function w(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,o=4;for(0===s&&(l=138,o=3),e[2*(a+1)+1]=65535,n=0;a>=n;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(o>h?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[2*X]++):10>=h?t.bl_tree[2*Y]++:t.bl_tree[2*Z]++,h=0,i=r,0===s?(l=138,o=3):r===s?(l=6,o=3):(l=7,o=4))}
function y(t,e,a){var n,r,i=-1,l=e[1],o=0,_=7,d=4;for(0===l&&(_=138,d=3),n=0;a>=n;n++)
if(r=l,l=e[2*(n+1)+1],!(++o<_&&r===l)){if(d>o){do h(t,r,t.bl_tree);while(0!==--o)}else 0!==r?(r!==i&&(h(t,r,t.bl_tree),o--),h(t,X,t.bl_tree),s(t,o-3,2)):10>=o?(h(t,Y,t.bl_tree),s(t,o-3,3)):(h(t,Z,t.bl_tree),s(t,o-11,7));o=0,i=r,0===l?(_=138,d=3):r===l?(_=6,d=3):(_=7,d=4)}}
function z(t){var e;for(w(t,t.dyn_ltree,t.l_desc.max_code),w(t,t.dyn_dtree,t.d_desc.max_code),v(t,t.bl_desc),e=P-1;e>=3&&0===t.bl_tree[2*at[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}
function k(t,e,a,n){var r;for(s(t,e-257,5),s(t,a-1,5),s(t,n-4,4),r=0;n>r;r++)s(t,t.bl_tree[2*at[r]+1],3);y(t,t.dyn_ltree,e-1),y(t,t.dyn_dtree,a-1)}
function x(t){var e,a=4093624447;for(e=0;31>=e;e++,a>>>=1)
if(1&a&&0!==t.dyn_ltree[2*e])return I;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return D;for(e=32;F>e;e++)
if(0!==t.dyn_ltree[2*e])return D;return I}
function B(t){gt||(u(),gt=!0),t.l_desc=new ct(t.dyn_ltree,_t),t.d_desc=new ct(t.dyn_dtree,dt),t.bl_desc=new ct(t.bl_tree,ut),t.bi_buf=0,t.bi_valid=0,f(t)}
function A(t,e,a,n){s(t,(q<<1)+(n?1:0),3),g(t,e,a,!0)}
function C(t){s(t,T<<1,3),h(t,W,rt),o(t)}
function S(t,e,a,n){var r,i,h=0;t.level>0?(t.strm.data_type===O&&(t.strm.data_type=x(t)),v(t,t.l_desc),v(t,t.d_desc),h=z(t),r=t.opt_len+3+7>>>3,i=t.static_len+3+7>>>3,r>=i&&(r=i)):r=i=a+5,r>=a+4&&-1!==e?A(t,e,a,n):t.strategy===U||i===r?(s(t,(T<<1)+(n?1:0),3),b(t,rt,it)):(s(t,(L<<1)+(n?1:0),3),k(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),b(t,t.dyn_ltree,t.dyn_dtree)),f(t),n&&c(t)}
function j(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(ht[a]+F+1)]++,t.dyn_dtree[2*r(e)]++),t.last_lit===t.lit_bufsize-1}
var E=t("../utils/common"),U=4,I=0,D=1,O=2,q=0,T=1,L=2,N=3,R=258,H=29,F=256,K=F+1+H,M=30,P=19,G=2*K+1,J=15,Q=16,V=7,W=256,X=16,Y=17,Z=18,$=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],tt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],et=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],at=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],nt=512,rt=new Array(2*(K+2));n(rt);var it=new Array(2*M);n(it);var st=new Array(nt);n(st);var ht=new Array(R-N+1);n(ht);var lt=new Array(H);n(lt);var ot=new Array(M);n(ot);var _t,dt,ut,ft=function(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length},ct=function(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e},gt=!1;a._tr_init=B,a._tr_stored_block=A,a._tr_flush_block=S,a._tr_tally=j,a._tr_align=C},{"../utils/common":1}],8:[function(t,e,a){"use strict";function n(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}
e.exports=n},{}],"/lib/deflate.js":[function(t,e,a){"use strict";function n(t,e){var a=new w(e);if(a.push(t,!0),a.err)throw a.msg;return a.result}
function r(t,e){return e=e||{},e.raw=!0,n(t,e)}
function i(t,e){return e=e||{},e.gzip=!0,n(t,e)}
var s=t("./zlib/deflate.js"),h=t("./utils/common"),l=t("./utils/strings"),o=t("./zlib/messages"),_=t("./zlib/zstream"),d=Object.prototype.toString,u=0,f=4,c=0,g=1,p=2,m=-1,b=0,v=8,w=function(t){this.options=h.assign({level:m,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:b,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new _,this.strm.avail_out=0;var a=s.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==c)throw new Error(o[a]);e.header&&s.deflateSetHeader(this.strm,e.header)};w.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;n=e===~~e?e:e===!0?f:u,"string"==typeof t?r.input=l.string2buf(t):"[object ArrayBuffer]"===d.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;do{if(0===r.avail_out&&(r.output=new h.Buf8(i),r.next_out=0,r.avail_out=i),a=s.deflate(r,n),a!==g&&a!==c)return this.onEnd(a),this.ended=!0,!1;(0===r.avail_out||0===r.avail_in&&(n===f||n===p))&&this.onData("string"===this.options.to?l.buf2binstring(h.shrinkBuf(r.output,r.next_out)):h.shrinkBuf(r.output,r.next_out))}while((r.avail_in>0||0===r.avail_out)&&a!==g);return n===f?(a=s.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===c):n===p?(this.onEnd(c),r.avail_out=0,!0):!0},w.prototype.onData=function(t){this.chunks.push(t)},w.prototype.onEnd=function(t){t===c&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=w,a.deflate=n,a.deflateRaw=r,a.gzip=i},{"./utils/common":1,"./utils/strings":2,"./zlib/deflate.js":5,"./zlib/messages":6,"./zlib/zstream":8}]},{},[])("/lib/deflate.js")});(function(window,undefined){'use strict';var Hammer=function Hammer(element,options){return new Hammer.Instance(element,options||{});};Hammer.VERSION='1.1.3';Hammer.defaults={behavior:{userSelect:'none',touchAction:'pan-y',touchCallout:'none',contentZooming:'none',userDrag:'none',tapHighlightColor:'rgba(0,0,0,0)'}};Hammer.DOCUMENT=document;Hammer.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled;Hammer.HAS_TOUCHEVENTS=('ontouchstart'in window);Hammer.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent);Hammer.NO_MOUSEEVENTS=(Hammer.HAS_TOUCHEVENTS&&Hammer.IS_MOBILE)||Hammer.HAS_POINTEREVENTS;Hammer.CALCULATE_INTERVAL=25;var EVENT_TYPES={};var DIRECTION_DOWN=Hammer.DIRECTION_DOWN='down';var DIRECTION_LEFT=Hammer.DIRECTION_LEFT='left';var DIRECTION_UP=Hammer.DIRECTION_UP='up';var DIRECTION_RIGHT=Hammer.DIRECTION_RIGHT='right';var POINTER_MOUSE=Hammer.POINTER_MOUSE='mouse';var POINTER_TOUCH=Hammer.POINTER_TOUCH='touch';var POINTER_PEN=Hammer.POINTER_PEN='pen';var EVENT_START=Hammer.EVENT_START='start';var EVENT_MOVE=Hammer.EVENT_MOVE='move';var EVENT_END=Hammer.EVENT_END='end';var EVENT_RELEASE=Hammer.EVENT_RELEASE='release';var EVENT_TOUCH=Hammer.EVENT_TOUCH='touch';Hammer.READY=false;Hammer.plugins=Hammer.plugins||{};Hammer.gestures=Hammer.gestures||{};function setup(){if(Hammer.READY){return;}
Event.determineEventTypes();Utils.each(Hammer.gestures,function(gesture){Detection.register(gesture);});Event.onTouch(Hammer.DOCUMENT,EVENT_MOVE,Detection.detect);Event.onTouch(Hammer.DOCUMENT,EVENT_END,Detection.detect);Hammer.READY=true;}
var Utils=Hammer.utils={extend:function extend(dest,src,merge){for(var key in src){if(!src.hasOwnProperty(key)||(dest[key]!==undefined&&merge)){continue;}
dest[key]=src[key];}
return dest;},on:function on(element,type,handler){element.addEventListener(type,handler,false);},off:function off(element,type,handler){element.removeEventListener(type,handler,false);},each:function each(obj,iterator,context){var i,len;if('forEach'in obj){obj.forEach(iterator,context);}else if(obj.length!==undefined){for(i=0,len=obj.length;i<len;i++){if(iterator.call(context,obj[i],i,obj)===false){return;}}}else{for(i in obj){if(obj.hasOwnProperty(i)&&iterator.call(context,obj[i],i,obj)===false){return;}}}},inStr:function inStr(src,find){return src.indexOf(find)>-1;},inArray:function inArray(src,find){if(src.indexOf){var index=src.indexOf(find);return(index===-1)?false:index;}else{for(var i=0,len=src.length;i<len;i++){if(src[i]===find){return i;}}
return false;}},toArray:function toArray(obj){return Array.prototype.slice.call(obj,0);},hasParent:function hasParent(node,parent){while(node){if(node==parent){return true;}
node=node.parentNode;}
return false;},getCenter:function getCenter(touches){var pageX=[],pageY=[],clientX=[],clientY=[],min=Math.min,max=Math.max;if(touches.length===1){return{pageX:touches[0].pageX,pageY:touches[0].pageY,clientX:touches[0].clientX,clientY:touches[0].clientY};}
Utils.each(touches,function(touch){pageX.push(touch.pageX);pageY.push(touch.pageY);clientX.push(touch.clientX);clientY.push(touch.clientY);});return{pageX:(min.apply(Math,pageX)+max.apply(Math,pageX))/2,pageY:(min.apply(Math,pageY)+max.apply(Math,pageY))/2,clientX:(min.apply(Math,clientX)+max.apply(Math,clientX))/2,clientY:(min.apply(Math,clientY)+max.apply(Math,clientY))/2};},getVelocity:function getVelocity(deltaTime,deltaX,deltaY){return{x:Math.abs(deltaX/deltaTime)||0,y:Math.abs(deltaY/deltaTime)||0};},getAngle:function getAngle(touch1,touch2){var x=touch2.clientX-touch1.clientX,y=touch2.clientY-touch1.clientY;return Math.atan2(y,x)*180/Math.PI;},getDirection:function getDirection(touch1,touch2){var x=Math.abs(touch1.clientX-touch2.clientX),y=Math.abs(touch1.clientY-touch2.clientY);if(x>=y){return touch1.clientX-touch2.clientX>0?DIRECTION_LEFT:DIRECTION_RIGHT;}
return touch1.clientY-touch2.clientY>0?DIRECTION_UP:DIRECTION_DOWN;},getDistance:function getDistance(touch1,touch2){var x=touch2.clientX-touch1.clientX,y=touch2.clientY-touch1.clientY;return Math.sqrt((x*x)+(y*y));},getScale:function getScale(start,end){if(start.length>=2&&end.length>=2){return this.getDistance(end[0],end[1])/this.getDistance(start[0],start[1]);}
return 1;},getRotation:function getRotation(start,end){if(start.length>=2&&end.length>=2){return this.getAngle(end[1],end[0])-this.getAngle(start[1],start[0]);}
return 0;},isVertical:function isVertical(direction){return direction==DIRECTION_UP||direction==DIRECTION_DOWN;},setPrefixedCss:function setPrefixedCss(element,prop,value,toggle){var prefixes=['','Webkit','Moz','O','ms'];prop=Utils.toCamelCase(prop);for(var i=0;i<prefixes.length;i++){var p=prop;if(prefixes[i]){p=prefixes[i]+p.slice(0,1).toUpperCase()+p.slice(1);}
if(p in element.style){element.style[p]=(toggle==null||toggle)&&value||'';break;}}},toggleBehavior:function toggleBehavior(element,props,toggle){if(!props||!element||!element.style){return;}
Utils.each(props,function(value,prop){Utils.setPrefixedCss(element,prop,value,toggle);});var falseFn=toggle&&function(){return false;};if(props.userSelect=='none'){element.onselectstart=falseFn;}
if(props.userDrag=='none'){element.ondragstart=falseFn;}},toCamelCase:function toCamelCase(str){return str.replace(/[_-]([a-z])/g,function(s){return s[1].toUpperCase();});}};var Event=Hammer.event={preventMouseEvents:false,started:false,shouldDetect:false,on:function on(element,type,handler,hook){var types=type.split(' ');Utils.each(types,function(type){Utils.on(element,type,handler);hook&&hook(type);});},off:function off(element,type,handler,hook){var types=type.split(' ');Utils.each(types,function(type){Utils.off(element,type,handler);hook&&hook(type);});},onTouch:function onTouch(element,eventType,handler){var self=this;var onTouchHandler=function onTouchHandler(ev){var srcType=ev.type.toLowerCase(),isPointer=Hammer.HAS_POINTEREVENTS,isMouse=Utils.inStr(srcType,'mouse'),triggerType;if(isMouse&&self.preventMouseEvents){return;}else if(isMouse&&eventType==EVENT_START&&ev.button===0){self.preventMouseEvents=false;self.shouldDetect=true;}else if(isPointer&&eventType==EVENT_START){self.shouldDetect=(ev.buttons===1||PointerEvent.matchType(POINTER_TOUCH,ev));}else if(!isMouse&&eventType==EVENT_START){self.preventMouseEvents=true;self.shouldDetect=true;}
if(isPointer&&eventType!=EVENT_END){PointerEvent.updatePointer(eventType,ev);}
if(self.shouldDetect){triggerType=self.doDetect.call(self,ev,eventType,element,handler);}
if(triggerType==EVENT_END){self.preventMouseEvents=false;self.shouldDetect=false;PointerEvent.reset();}
if(isPointer&&eventType==EVENT_END){PointerEvent.updatePointer(eventType,ev);}};this.on(element,EVENT_TYPES[eventType],onTouchHandler);return onTouchHandler;},doDetect:function doDetect(ev,eventType,element,handler){var touchList=this.getTouchList(ev,eventType);var touchListLength=touchList.length;var triggerType=eventType;var triggerChange=touchList.trigger;var changedLength=touchListLength;if(eventType==EVENT_START){triggerChange=EVENT_TOUCH;}else if(eventType==EVENT_END){triggerChange=EVENT_RELEASE;changedLength=touchList.length-((ev.changedTouches)?ev.changedTouches.length:1);}
if(changedLength>0&&this.started){triggerType=EVENT_MOVE;}
this.started=true;var evData=this.collectEventData(element,triggerType,touchList,ev);if(eventType!=EVENT_END){handler.call(Detection,evData);}
if(triggerChange){evData.changedLength=changedLength;evData.eventType=triggerChange;handler.call(Detection,evData);evData.eventType=triggerType;delete evData.changedLength;}
if(triggerType==EVENT_END){handler.call(Detection,evData);this.started=false;}
return triggerType;},determineEventTypes:function determineEventTypes(){var types;if(Hammer.HAS_POINTEREVENTS){if(window.PointerEvent){types=['pointerdown','pointermove','pointerup pointercancel lostpointercapture'];}else{types=['MSPointerDown','MSPointerMove','MSPointerUp MSPointerCancel MSLostPointerCapture'];}}else if(Hammer.NO_MOUSEEVENTS){types=['touchstart','touchmove','touchend touchcancel'];}else{types=['touchstart mousedown','touchmove mousemove','touchend touchcancel mouseup'];}
EVENT_TYPES[EVENT_START]=types[0];EVENT_TYPES[EVENT_MOVE]=types[1];EVENT_TYPES[EVENT_END]=types[2];return EVENT_TYPES;},getTouchList:function getTouchList(ev,eventType){if(Hammer.HAS_POINTEREVENTS){return PointerEvent.getTouchList();}
if(ev.touches){if(eventType==EVENT_MOVE){return ev.touches;}
var identifiers=[];var concat=[].concat(Utils.toArray(ev.touches),Utils.toArray(ev.changedTouches));var touchList=[];Utils.each(concat,function(touch){if(Utils.inArray(identifiers,touch.identifier)===false){touchList.push(touch);}
identifiers.push(touch.identifier);});return touchList;}
ev.identifier=1;return[ev];},collectEventData:function collectEventData(element,eventType,touches,ev){var pointerType=POINTER_TOUCH;if(Utils.inStr(ev.type,'mouse')||PointerEvent.matchType(POINTER_MOUSE,ev)){pointerType=POINTER_MOUSE;}else if(PointerEvent.matchType(POINTER_PEN,ev)){pointerType=POINTER_PEN;}
return{center:Utils.getCenter(touches),timeStamp:Date.now(),target:ev.target,touches:touches,eventType:eventType,pointerType:pointerType,srcEvent:ev,preventDefault:function(){var srcEvent=this.srcEvent;srcEvent.preventManipulation&&srcEvent.preventManipulation();srcEvent.preventDefault&&srcEvent.preventDefault();},stopPropagation:function(){this.srcEvent.stopPropagation();},stopDetect:function(){return Detection.stopDetect();}};}};var PointerEvent=Hammer.PointerEvent={pointers:{},getTouchList:function getTouchList(){var touchlist=[];Utils.each(this.pointers,function(pointer){touchlist.push(pointer);});return touchlist;},updatePointer:function updatePointer(eventType,pointerEvent){if(eventType==EVENT_END){delete this.pointers[pointerEvent.pointerId];}else{pointerEvent.identifier=pointerEvent.pointerId;this.pointers[pointerEvent.pointerId]=pointerEvent;}},matchType:function matchType(pointerType,ev){if(!ev.pointerType){return false;}
var pt=ev.pointerType,types={};types[POINTER_MOUSE]=(pt===(ev.MSPOINTER_TYPE_MOUSE||POINTER_MOUSE));types[POINTER_TOUCH]=(pt===(ev.MSPOINTER_TYPE_TOUCH||POINTER_TOUCH));types[POINTER_PEN]=(pt===(ev.MSPOINTER_TYPE_PEN||POINTER_PEN));return types[pointerType];},reset:function resetList(){this.pointers={};}};var Detection=Hammer.detection={gestures:[],current:null,previous:null,stopped:false,startDetect:function startDetect(inst,eventData){if(this.current){return;}
this.stopped=false;this.current={inst:inst,startEvent:Utils.extend({},eventData),lastEvent:false,lastCalcEvent:false,futureCalcEvent:false,lastCalcData:{},name:''};this.detect(eventData);},detect:function detect(eventData){if(!this.current||this.stopped){return;}
eventData=this.extendEventData(eventData);var inst=this.current.inst,instOptions=inst.options;Utils.each(this.gestures,function triggerGesture(gesture){if(!this.stopped&&inst.enabled&&instOptions[gesture.name]){gesture.handler.call(gesture,eventData,inst);}},this);if(this.current){this.current.lastEvent=eventData;}
if(eventData.eventType==EVENT_END){this.stopDetect();}
return eventData;},stopDetect:function stopDetect(){this.previous=Utils.extend({},this.current);this.current=null;this.stopped=true;},getCalculatedData:function getCalculatedData(ev,center,deltaTime,deltaX,deltaY){var cur=this.current,recalc=false,calcEv=cur.lastCalcEvent,calcData=cur.lastCalcData;if(calcEv&&ev.timeStamp-calcEv.timeStamp>Hammer.CALCULATE_INTERVAL){center=calcEv.center;deltaTime=ev.timeStamp-calcEv.timeStamp;deltaX=ev.center.clientX-calcEv.center.clientX;deltaY=ev.center.clientY-calcEv.center.clientY;recalc=true;}
if(ev.eventType==EVENT_TOUCH||ev.eventType==EVENT_RELEASE){cur.futureCalcEvent=ev;}
if(!cur.lastCalcEvent||recalc){calcData.velocity=Utils.getVelocity(deltaTime,deltaX,deltaY);calcData.angle=Utils.getAngle(center,ev.center);calcData.direction=Utils.getDirection(center,ev.center);cur.lastCalcEvent=cur.futureCalcEvent||ev;cur.futureCalcEvent=ev;}
ev.velocityX=calcData.velocity.x;ev.velocityY=calcData.velocity.y;ev.interimAngle=calcData.angle;ev.interimDirection=calcData.direction;},extendEventData:function extendEventData(ev){var cur=this.current,startEv=cur.startEvent,lastEv=cur.lastEvent||startEv;if(ev.eventType==EVENT_TOUCH||ev.eventType==EVENT_RELEASE){startEv.touches=[];Utils.each(ev.touches,function(touch){startEv.touches.push({clientX:touch.clientX,clientY:touch.clientY});});}
var deltaTime=ev.timeStamp-startEv.timeStamp,deltaX=ev.center.clientX-startEv.center.clientX,deltaY=ev.center.clientY-startEv.center.clientY;this.getCalculatedData(ev,lastEv.center,deltaTime,deltaX,deltaY);Utils.extend(ev,{startEvent:startEv,deltaTime:deltaTime,deltaX:deltaX,deltaY:deltaY,distance:Utils.getDistance(startEv.center,ev.center),angle:Utils.getAngle(startEv.center,ev.center),direction:Utils.getDirection(startEv.center,ev.center),scale:Utils.getScale(startEv.touches,ev.touches),rotation:Utils.getRotation(startEv.touches,ev.touches)});return ev;},register:function register(gesture){var options=gesture.defaults||{};if(options[gesture.name]===undefined){options[gesture.name]=true;}
Utils.extend(Hammer.defaults,options,true);gesture.index=gesture.index||1000;this.gestures.push(gesture);this.gestures.sort(function(a,b){if(a.index<b.index){return-1;}
if(a.index>b.index){return 1;}
return 0;});return this.gestures;}};Hammer.Instance=function(element,options){var self=this;setup();this.element=element;this.enabled=true;Utils.each(options,function(value,name){delete options[name];options[Utils.toCamelCase(name)]=value;});this.options=Utils.extend(Utils.extend({},Hammer.defaults),options||{});if(this.options.behavior){Utils.toggleBehavior(this.element,this.options.behavior,true);}
this.eventStartHandler=Event.onTouch(element,EVENT_START,function(ev){if(self.enabled&&ev.eventType==EVENT_START){Detection.startDetect(self,ev);}else if(ev.eventType==EVENT_TOUCH){Detection.detect(ev);}});this.eventHandlers=[];};Hammer.Instance.prototype={on:function onEvent(gestures,handler){var self=this;Event.on(self.element,gestures,handler,function(type){self.eventHandlers.push({gesture:type,handler:handler});});return self;},off:function offEvent(gestures,handler){var self=this;Event.off(self.element,gestures,handler,function(type){var index=Utils.inArray({gesture:type,handler:handler});if(index!==false){self.eventHandlers.splice(index,1);}});return self;},trigger:function triggerEvent(gesture,eventData){if(!eventData){eventData={};}
var event=Hammer.DOCUMENT.createEvent('Event');event.initEvent(gesture,true,true);event.gesture=eventData;var element=this.element;if(Utils.hasParent(eventData.target,element)){element=eventData.target;}
element.dispatchEvent(event);return this;},enable:function enable(state){this.enabled=state;return this;},dispose:function dispose(){var i,eh;Utils.toggleBehavior(this.element,this.options.behavior,false);for(i=-1;(eh=this.eventHandlers[++i]);){Utils.off(this.element,eh.gesture,eh.handler);}
this.eventHandlers=[];Event.off(this.element,EVENT_TYPES[EVENT_START],this.eventStartHandler);return null;}};(function(name){var triggered=false;function dragGesture(ev,inst){var cur=Detection.current;if(inst.options.dragMaxTouches>0&&ev.touches.length>inst.options.dragMaxTouches){return;}
switch(ev.eventType){case EVENT_START:triggered=false;break;case EVENT_MOVE:if(ev.distance<inst.options.dragMinDistance&&cur.name!=name){return;}
var startCenter=cur.startEvent.center;if(cur.name!=name){cur.name=name;if(inst.options.dragDistanceCorrection&&ev.distance>0){var factor=Math.abs(inst.options.dragMinDistance/ev.distance);startCenter.pageX+=ev.deltaX*factor;startCenter.pageY+=ev.deltaY*factor;startCenter.clientX+=ev.deltaX*factor;startCenter.clientY+=ev.deltaY*factor;ev=Detection.extendEventData(ev);}}
if(cur.lastEvent.dragLockToAxis||(inst.options.dragLockToAxis&&inst.options.dragLockMinDistance<=ev.distance)){ev.dragLockToAxis=true;}
var lastDirection=cur.lastEvent.direction;if(ev.dragLockToAxis&&lastDirection!==ev.direction){if(Utils.isVertical(lastDirection)){ev.direction=(ev.deltaY<0)?DIRECTION_UP:DIRECTION_DOWN;}else{ev.direction=(ev.deltaX<0)?DIRECTION_LEFT:DIRECTION_RIGHT;}}
if(!triggered){inst.trigger(name+'start',ev);triggered=true;}
inst.trigger(name,ev);inst.trigger(name+ev.direction,ev);var isVertical=Utils.isVertical(ev.direction);if((inst.options.dragBlockVertical&&isVertical)||(inst.options.dragBlockHorizontal&&!isVertical)){ev.preventDefault();}
break;case EVENT_RELEASE:if(triggered&&ev.changedLength<=inst.options.dragMaxTouches){inst.trigger(name+'end',ev);triggered=false;}
break;case EVENT_END:triggered=false;break;}}
Hammer.gestures.Drag={name:name,index:50,handler:dragGesture,defaults:{dragMinDistance:10,dragDistanceCorrection:true,dragMaxTouches:1,dragBlockHorizontal:false,dragBlockVertical:false,dragLockToAxis:false,dragLockMinDistance:25}};})('drag');Hammer.gestures.Gesture={name:'gesture',index:1337,handler:function releaseGesture(ev,inst){inst.trigger(this.name,ev);}};(function(name){var timer;function holdGesture(ev,inst){var options=inst.options,current=Detection.current;switch(ev.eventType){case EVENT_START:clearTimeout(timer);current.name=name;timer=setTimeout(function(){if(current&&current.name==name){inst.trigger(name,ev);}},options.holdTimeout);break;case EVENT_MOVE:if(ev.distance>options.holdThreshold){clearTimeout(timer);}
break;case EVENT_RELEASE:clearTimeout(timer);break;}}
Hammer.gestures.Hold={name:name,index:10,defaults:{holdTimeout:500,holdThreshold:2},handler:holdGesture};})('hold');Hammer.gestures.Release={name:'release',index:Infinity,handler:function releaseGesture(ev,inst){if(ev.eventType==EVENT_RELEASE){inst.trigger(this.name,ev);}}};Hammer.gestures.Swipe={name:'swipe',index:40,defaults:{swipeMinTouches:1,swipeMaxTouches:1,swipeVelocityX:0.6,swipeVelocityY:0.6},handler:function swipeGesture(ev,inst){if(ev.eventType==EVENT_RELEASE){var touches=ev.touches.length,options=inst.options;if(touches<options.swipeMinTouches||touches>options.swipeMaxTouches){return;}
if(ev.velocityX>options.swipeVelocityX||ev.velocityY>options.swipeVelocityY){inst.trigger(this.name,ev);inst.trigger(this.name+ev.direction,ev);}}}};(function(name){var hasMoved=false;function tapGesture(ev,inst){var options=inst.options,current=Detection.current,prev=Detection.previous,sincePrev,didDoubleTap;switch(ev.eventType){case EVENT_START:hasMoved=false;break;case EVENT_MOVE:hasMoved=hasMoved||(ev.distance>options.tapMaxDistance);break;case EVENT_END:if(!Utils.inStr(ev.srcEvent.type,'cancel')&&ev.deltaTime<options.tapMaxTime&&!hasMoved){sincePrev=prev&&prev.lastEvent&&ev.timeStamp-prev.lastEvent.timeStamp;didDoubleTap=false;if(prev&&prev.name==name&&(sincePrev&&sincePrev<options.doubleTapInterval)&&ev.distance<options.doubleTapDistance){inst.trigger('doubletap',ev);didDoubleTap=true;}
if(!didDoubleTap||options.tapAlways){current.name=name;inst.trigger(current.name,ev);}}
break;}}
Hammer.gestures.Tap={name:name,index:100,handler:tapGesture,defaults:{tapMaxTime:250,tapMaxDistance:10,tapAlways:true,doubleTapDistance:20,doubleTapInterval:300}};})('tap');Hammer.gestures.Touch={name:'touch',index:-Infinity,defaults:{preventDefault:false,preventMouse:false},handler:function touchGesture(ev,inst){if(inst.options.preventMouse&&ev.pointerType==POINTER_MOUSE){ev.stopDetect();return;}
if(inst.options.preventDefault){ev.preventDefault();}
if(ev.eventType==EVENT_TOUCH){inst.trigger('touch',ev);}}};(function(name){var triggered=false;function transformGesture(ev,inst){switch(ev.eventType){case EVENT_START:triggered=false;break;case EVENT_MOVE:if(ev.touches.length<2){return;}
var scaleThreshold=Math.abs(1-ev.scale);var rotationThreshold=Math.abs(ev.rotation);if(scaleThreshold<inst.options.transformMinScale&&rotationThreshold<inst.options.transformMinRotation){return;}
Detection.current.name=name;if(!triggered){inst.trigger(name+'start',ev);triggered=true;}
inst.trigger(name,ev);if(rotationThreshold>inst.options.transformMinRotation){inst.trigger('rotate',ev);}
if(scaleThreshold>inst.options.transformMinScale){inst.trigger('pinch',ev);inst.trigger('pinch'+(ev.scale<1?'in':'out'),ev);}
break;case EVENT_RELEASE:if(triggered&&ev.changedLength<2){inst.trigger(name+'end',ev);triggered=false;}
break;}}
Hammer.gestures.Transform={name:name,index:45,defaults:{transformMinScale:0.01,transformMinRotation:1},handler:transformGesture};})('transform');window.Hammer=Hammer;})(window);if(window.TLT){throw"Attempting to recreate TLT. Library may be included more than once on the page."}
window.TLT=(function(){function p(D,v,w,E){var B=null,F=null,A=TLT.getService("queue"),y=TLT.getModule("replay"),C=TLT.getModule("TLCookie"),x=null,z=TLT.utils.getOriginAndPath();if(!v||typeof v!=="string"){return}
if(!w||typeof w!=="string"){w=""}
F={type:2,screenview:{type:D,name:v,url:z.path,host:z.origin,referrer:w}};if(D==="LOAD"){x={type:"screenview_load",name:v}}else{if(D==="UNLOAD"){x={type:"screenview_unload",name:v}}}
if(x&&C){C.onevent(x)}
if(x&&y){B=y.onevent(x)}
if(B){F.dcid=B}
if(D==="LOAD"||D==="UNLOAD"){A.post("",F,"DEFAULT")}}
function q(w){var x,v=TLT.getService("queue");if(!w||!w.coords){return}
x={type:13,geolocation:{lat:w.coords.latitude,"long":w.coords.longitude,accuracy:Math.ceil(w.coords.accuracy)}};v.post("",x,"DEFAULT")}
function l(){var w,v=TLT.getService("queue");w={type:13,geolocation:{errorCode:201,error:"Permission denied."}};v.post("",w,"DEFAULT")}
var t=(new Date()).getTime(),u={},b={},e=false,g=null,n=(function(){var w,y=[];function x(D){var C=s.getService("browser"),z=s.getCoreConfig().framesBlacklist,B,A;w=w||[];D=D||null;if(typeof z!=="undefined"&&z.length>0){for(A=0;A<z.length;A+=1){B=C.queryAll(z[A],D);if(B&&B.length>0){w=w.concat(B)}}
y=y.concat(C.queryAll("iframe",D))}}
function v(z){if(s.utils.indexOf(y,z)<0){x(z.ownerDocument)}
return s.utils.indexOf(w,z)>-1}
v.clearCache=function(){w=null};return v}()),o=null,h={config:["getConfig","updateConfig","getCoreConfig","updateCoreConfig","getModuleConfig","updateModuleConfig","getServiceConfig","updateServiceConfig"],queue:["post","setAutoFlush","flushAll"],browserBase:["getXPathFromNode","processDOMEvent"]},r=(function(){var v={};return{normalizeModuleEvents:function(A,y,D,x){var w=v[A],C=false,z=false,B=s.getService("browser");D=D||s._getLocalTop();x=x||D.document;if(w){return}
v[A]={loadFired:false,pageHideFired:false};s.utils.forEach(y,function(E){switch(E.name){case"load":C=true;y.push(s.utils.mixin(s.utils.mixin({},E),{name:"pageshow"}));break;case"unload":z=true;y.push(s.utils.mixin(s.utils.mixin({},E),{name:"pagehide"}));y.push(s.utils.mixin(s.utils.mixin({},E),{name:"beforeunload"}));break;case"change":if(s.utils.isLegacyIE&&s.getFlavor()==="w3c"){y.push(s.utils.mixin(s.utils.mixin({},E),{name:"propertychange"}))}
break}});if(!C&&!z){delete v[A];return}
v[A].silentLoad=!C;v[A].silentUnload=!z;if(!C){y.push({name:"load",target:D})}
if(!z){y.push({name:"unload",target:D})}},canPublish:function(w,y){var x;if(v.hasOwnProperty(w)===false){return true}
x=v[w];switch(y.type){case"load":x.pageHideFired=false;x.loadFired=true;return!x.silentLoad;case"pageshow":x.pageHideFired=false;y.type="load";return!x.loadFired&&!x.silentLoad;case"pagehide":y.type="unload";x.loadFired=false;x.pageHideFired=true;return!x.silentUnload;case"unload":case"beforeunload":y.type="unload";x.loadFired=false;return!x.pageHideFired&&!x.silentUnload}
return true},isUnload:function(w){return typeof w==="object"?(w.type==="unload"||w.type==="beforeunload"||w.type==="pagehide"):false}}}()),c={},a={},i=function(){},j=null,k=true,d=function(){},m=(function(){var v=window.location,x=v.pathname,w=v.hash,y="";return function(){var B=v.pathname,z=v.hash,A=y;if(B!==x){A=B+z}else{if(z!==w){A=z}}
if(A!==y){if(y){p("UNLOAD",y)}
p("LOAD",A);y=A;x=B;w=z}}}()),f=function(y,F){var z,x,A,E=false,v=s.getService("browser"),w=s.getCoreConfig().blockedElements,C,D,B;if(!w||!w.length){f=function(){return false};return E}
if(!y||!y.nodeType){return E}
F=F||s.utils.getDocument(y);for(z=0,A=w.length;z<A&&!E;z+=1){D=v.queryAll(w[z],F);for(x=0,B=D.length;x<B&&!E;x+=1){C=D[x];E=C.contains?C.contains(y):C===y}}
return E},s={getStartTime:function(){return t},getLibraryVersion:function(){return"5.2.0.1768"},init:function(w,x){var v;j=x;if(!k){throw"init must only be called once!"}
k=false;v=function(y){y=y||window.event||{};if(document.addEventListener||y.type==="load"||document.readyState==="complete"){if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",v,false);window.removeEventListener("load",v,false)}else{document.detachEvent("onreadystatechange",v);window.detachEvent("onload",v)}
i(w,x)}};if(document.readyState==="complete"){setTimeout(v)}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",v,false);window.addEventListener("load",v,false)}else{document.attachEvent("onreadystatechange",v);window.attachEvent("onload",v)}}},isInitialized:function(){return e},getState:function(){return g},destroy:function(w){var v="",y="",B=null,C=null,z=null,x=null,D=false;if(k){return false}
this.stopAll();if(!w){x=this.getService("browser");for(v in c){if(c.hasOwnProperty(v)&&x!==null){y=v.split("|")[0];B=c[v].target;D=c[v].delegateTarget||undefined;x.unsubscribe(y,B,this._publishEvent,D)}}}
for(C in b){if(b.hasOwnProperty(C)){z=b[C].instance;if(z&&typeof z.destroy==="function"){z.destroy()}
b[C].instance=null}}
n.clearCache();c={};e=false;k=true;g="destroyed";if(typeof j==="function"){try{j("destroyed")}catch(A){}}},_updateModules:function(y){var x=this.getCoreConfig(),w=this.getService("browser"),A=null,v=null;if(x&&w&&x.modules){try{for(v in x.modules){if(x.modules.hasOwnProperty(v)){A=x.modules[v];if(u.hasOwnProperty(v)){if(A.enabled===false){this.stop(v);continue}
this.start(v);if(A.events){this._registerModuleEvents(v,A.events,y)}}}}
this._registerModuleEvents.clearCache()}catch(z){s.destroy();return false}}else{return false}
return true},rebind:function(v){s._updateModules(v)},getSessionData:function(){if(!s.isInitialized()){return}
var z=null,w=null,x,y,v=s.getCoreConfig();if(!v||!v.sessionDataEnabled){return null}
w=v.sessionData||{};x=w.sessionQueryName;if(x){y=s.utils.getQueryStringValue(x,w.sessionQueryDelim)}else{x=w.sessionCookieName||"TLTSID";y=s.utils.getCookieValue(x)}
if(x&&y){z=z||{};z.tltSCN=x;z.tltSCV=y;z.tltSCVNeedsHashing=!!w.sessionValueNeedsHashing}
return z},logGeolocation:function(v){var z=s.getModuleConfig("replay")||{},y=s.utils.getValue(z,"geolocation.options",{timeout:30000,enableHighAccuracy:true,maximumAge:0}),x=s.utils.getValue(z,"geolocation.enabled",false),w=window.navigator;if(!v){if(!x||!w||!w.geolocation||!w.geolocation.getCurrentPosition){return}
w.geolocation.getCurrentPosition(q,l,y)}else{q(v)}},logCustomEvent:function(y,w){if(!s.isInitialized()){return}
var x=null,v=this.getService("queue");if(!y||typeof y!=="string"){y="CUSTOM"}
w=w||{};x={type:5,customEvent:{name:y,data:w}};v.post("",x,"DEFAULT")},logExceptionEvent:function(z,x,w){if(!s.isInitialized()){return}
var y=null,v=this.getService("queue");if(!z||typeof z!=="string"){return}
x=x||"";w=w||"";y={type:6,exception:{description:z,url:x,line:w}};v.post("",y,"DEFAULT")},logScreenviewLoad:function(x,w,v){if(!s.isInitialized()){return}
p("LOAD",x,w,v)},logScreenviewUnload:function(v){if(!s.isInitialized()){return}
p("UNLOAD",v)},logDOMCapture:function(x,z){var A=null,y,w,B,v;if(!this.isInitialized()){return A}
if(s.utils.isLegacyIE){return A}
w=this.getService("domCapture");if(w){x=x||window.document;z=z||{};y=w.captureDOM(x,z);if(y){A=z.dcid||("dcid-"+this.utils.getSerialNumber()+"."+(new Date()).getTime());y.dcid=A;y.eventOn=!!z.eventOn;B={type:12,domCapture:y};v=this.getService("queue");v.post("",B,"DEFAULT")}else{A=null}}
return A},performDOMCapture:function(x,v,w){return this.logDOMCapture(v,w)},_bridgeCallback:function(w){var v=a[w];if(v&&v.enabled){return v}
return null},logScreenCapture:function(){if(!s.isInitialized()){return}
var v=s._bridgeCallback("screenCapture");if(v!==null){v.cbFunction()}},enableTealeafFramework:function(){if(!s.isInitialized()){return}
var v=s._bridgeCallback("enableTealeafFramework");if(v!==null){v.cbFunction()}},disableTealeafFramework:function(){if(!s.isInitialized()){return}
var v=s._bridgeCallback("disableTealeafFramework");if(v!==null){v.cbFunction()}},startNewTLFSession:function(){if(!s.isInitialized()){return}
var v=s._bridgeCallback("startNewTLFSession");if(v!==null){v.cbFunction()}},currentSessionId:function(){if(!s.isInitialized()){return}
var w,v=s._bridgeCallback("currentSessionId");if(v!==null){w=v.cbFunction()}
return w},defaultValueForConfigurableItem:function(v){if(!s.isInitialized()){return}
var x,w=s._bridgeCallback("defaultValueForConfigurableItem");if(w!==null){x=w.cbFunction(v)}
return x},valueForConfigurableItem:function(v){if(!s.isInitialized()){return}
var x,w=s._bridgeCallback("valueForConfigurableItem");if(w!==null){x=w.cbFunction(v)}
return x},setConfigurableItem:function(w,y){if(!s.isInitialized()){return}
var v=false,x=s._bridgeCallback("setConfigurableItem");if(x!==null){v=x.cbFunction(w,y)}
return v},addAdditionalHttpHeader:function(w,y){if(!s.isInitialized()){return}
var v=false,x=s._bridgeCallback("addAdditionalHttpHeader");if(x!==null){v=x.cbFunction(w,y)}
return v},logCustomEventBridge:function(x,y,w){if(!s.isInitialized()){return}
var v=false,z=s._bridgeCallback("logCustomEventBridge");if(z!==null){v=z.cbFunction(x,y,w)}
return v},registerBridgeCallbacks:function(y){var x=0,w=0,v=null;if(!y){return false}
if(y.length===0){a={};return false}
try{for(x=0,w=y.length;x<w;x+=1){v=y[x];if(typeof v==="object"&&v.cbType&&v.cbFunction){a[v.cbType]={enabled:v.enabled,cbFunction:v.cbFunction}}}}catch(z){return false}
return true},redirectQueue:function(x){var A,w,v,y,z;if(!x||!x.length){return x}
v=a.messageRedirect;if(v&&v.enabled){z=s.getService("serializer");for(A=0,w=x.length;A<w;A+=1){y=v.cbFunction(z.serialize(x[A]),x[A]);if(y&&typeof y==="object"){x[A]=y}else{x.splice(A,1);A-=1;w=x.length}}}
return x},_hasSameOrigin:function(v){try{return v.document.location.host===document.location.host&&v.document.location.protocol===document.location.protocol}catch(w){}
return false},provideRequestHeaders:function(){var w=null,v=a.addRequestHeaders;if(v&&v.enabled){w=v.cbFunction()}
return w},_registerModuleEvents:(function(){var x,z=0,y=function(D,C,B){if(D==="window"){return C}
if(D==="document"){return B}
return D};function A(B,I,L){var K=s.getService("browserBase"),F=s.getService("browser"),J=s.utils.getDocument(L),D=s._getLocalTop(),C=s.utils.isIFrameDescendant(L),H,G,E;L=L||J;r.normalizeModuleEvents(B,I,D,J);if(C){H=K.ElementData.prototype.examineID(L).id;if(typeof H==="string"){H=H.slice(0,H.length-1);for(G in c){if(c.hasOwnProperty(G)){for(E=0;E<c[G].length;E+=1){if(B===c[G][E]){if(G.indexOf(H)!==-1){delete c[G];break}}}}}}}
s.utils.forEach(I,function(M){var P=y(M.target,D,J)||J,O=y(M.delegateTarget,D,J),N="";if(M.recurseFrames!==true&&C){return}
if(typeof P==="string"){if(M.delegateTarget&&s.getFlavor()==="jQuery"){N=s._buildToken4delegateTarget(M.name,P,M.delegateTarget);if(!c.hasOwnProperty(N)){c[N]=[B];c[N].target=P;c[N].delegateTarget=O;F.subscribe(M.name,P,s._publishEvent,O,N)}else{c[N].push(B)}}else{s.utils.forEach(F.queryAll(P,L),function(Q){var R=x.get(Q);if(!R){R=K.ElementData.prototype.examineID(Q);x.set(Q,R)}
N=M.name+"|"+R.id+R.type;if(s.utils.indexOf(c[N],B)!==-1){return}
c[N]=c[N]||[];c[N].push(B);c[N].target=Q;F.subscribe(M.name,Q,s._publishEvent)})}}else{N=s._buildToken4bubbleTarget(M.name,P,typeof M.target==="undefined");if(!c.hasOwnProperty(N)){c[N]=[B];F.subscribe(M.name,P,s._publishEvent)}else{if(s.utils.indexOf(c[N],B)===-1){c[N].push(B)}}}
if(N!==""){if(typeof P!=="string"){c[N].target=P}}})}
function w(B){var C=s.utils.getIFrameWindow(B);return(C!==null)&&s._hasSameOrigin(C)&&(C.document!==null)&&C.document.readyState==="complete"}
function v(C,I,K){K=K||s._getLocalTop().document;x=x||new s.utils.WeakMap();A(C,I,K);if(C!=="performance"){var G=null,B=null,D=s.getService("browser"),J=s.getService("domCapture"),H=D.queryAll("iframe, frame",K),F,E;for(F=0,E=H.length;F<E;F+=1){G=H[F];if(n(G)){continue}
if(w(G)){B=s.utils.getIFrameWindow(G);s._registerModuleEvents(C,I,B.document);J.observeWindow(B);continue}
z+=1;(function(N,L,O){var M=null,P={moduleName:N,moduleEvents:L,hIFrame:O,_registerModuleEventsDelayed:function(){var Q=null;if(!n(O)){Q=s.utils.getIFrameWindow(O);if(s._hasSameOrigin(Q)){s._registerModuleEvents(N,L,Q.document);J.observeWindow(Q)}}
z-=1;if(!z){s._publishEvent({type:"loadWithFrames",custom:true})}}};s.utils.addEventListener(O,"load",function(){P._registerModuleEventsDelayed()});if(s.utils.isLegacyIE&&w(O)){M=s.utils.getIFrameWindow(O);s.utils.addEventListener(M.document,"readystatechange",function(){P._registerModuleEventsDelayed()})}}(C,I,G))}}}
v.clearCache=function(){if(x){x.clear();x=null}};return v}()),_buildToken4currentTarget:function(w){var x=w.nativeEvent?w.nativeEvent.currentTarget:null,v=x?this.getService("browserBase").ElementData.prototype.examineID(x):{id:w.target?w.target.id:null,type:w.target?w.target.idType:-1};return w.type+"|"+v.id+v.type},_buildToken4delegateTarget:function(v,x,w){return v+"|"+x+"|"+w},_buildToken4bubbleTarget:function(w,D,C,H){var A=s._getLocalTop(),v,x=s.getService("browser"),I=function(J){var K=null;if(s._hasSameOrigin(v.parent)){s.utils.forEach(x.queryAll("iframe, frame",v.parent.document),function(L){var M=null;if(!n(L)){M=s.utils.getIFrameWindow(L);if(s._hasSameOrigin(M)&&M.document===J){K=L}}})}
return K},E=s.utils.getDocument(D),G=this.getService("browserBase"),F=null,z,y=w,B;if(E){v=E.defaultView||E.parentWindow}
if(D===window||D===window.window){y+="|null-2|window"}else{if(C&&v&&s._hasSameOrigin(v.parent)&&typeof E!=="undefined"&&A.document!==E){F=I(E);if(F){z=G.ElementData.prototype.examineID(F);y+="|"+z.xPath+"-2"}}else{if(H&&H!==document&&s.getFlavor()==="jQuery"){y+="|null-2|"+s.utils.getTagName(D)+"|"+s.utils.getTagName(H)}else{y+="|null-2|document"}}}
return y},_reinitConfig:function(){s._updateModules()},_publishEvent:function(v){var w=null,z=null,B=(v.delegateTarget&&v.data)?v.data:s._buildToken4currentTarget(v),C=null,D,E,F,y=null,G=false,H=false,A=s.getCoreConfig(),x=s.getService("browser"),J=v.delegateTarget||null,I;if(v.type!=="orientationchange"&&v.type!=="resize"){d()}
I=s.utils.getValue(A,"screenviewAutoDetect",true);if(I){m()}
if((v.type==="load"||v.type==="pageshow")&&!v.nativeEvent.customLoad){return}
if(s.utils.isIE){if(v.type==="click"){o=v.target.element}
if(v.type==="beforeunload"){G=false;s.utils.forEach(A.ieExcludedLinks,function(L){var M,K,N=x.queryAll(L);for(M=0,K=N?N.length:0;M<K;M+=1){if(typeof N[M]!==undefined&&N[M]===o){G=true;return}}});if(G){return}}}
if(r.isUnload(v)){g="unloading"}
if(v.type==="change"&&s.utils.isLegacyIE&&s.getFlavor()==="w3c"&&(v.target.element.type==="checkbox"||v.target.element.type==="radio")){return}
if(v.type==="propertychange"){if(v.nativeEvent.propertyName==="checked"&&(v.target.element.type==="checkbox"||(v.target.element.type==="radio"&&v.target.element.checked))){v.type="change";v.target.type="INPUT"}else{return}}
if(v.target&&f(v.target.element)){return}
if(!c.hasOwnProperty(B)){if(v.hasOwnProperty("nativeEvent")){F=v.nativeEvent.currentTarget||v.nativeEvent.target}
B=s._buildToken4bubbleTarget(v.type,F,true,J)}
if(c.hasOwnProperty(B)){C=c[B];for(D=0,E=C.length;D<E;D+=1){w=C[D];z=s.getModule(w);y=s.utils.mixin({},v);if(z&&s.isStarted(w)&&typeof z.onevent==="function"){H=r.canPublish(w,y);if(H){z.onevent(y)}}}}
if(y&&y.type==="unload"&&H){s.destroy()}},_getLocalTop:function(){return window.window},addModule:function(v,w){u[v]={creator:w,instance:null,context:null,messages:[]};if(this.isInitialized()){this.start(v)}},getModule:function(v){if(u[v]&&u[v].instance){return u[v].instance}
return null},removeModule:function(v){this.stop(v);delete u[v]},isStarted:function(v){return u.hasOwnProperty(v)&&u[v].instance!==null},start:function(w){var x=u[w],v=null;if(x&&x.instance===null){x.context=new TLT.ModuleContext(w,this);v=x.instance=x.creator(x.context);if(typeof v.init==="function"){v.init()}}},startAll:function(){var v=null;for(v in u){if(u.hasOwnProperty(v)){this.start(v)}}},stop:function(w){var x=u[w],v=null;if(x&&x.instance!==null){v=x.instance;if(typeof v.destroy==="function"){v.destroy()}
x.instance=x.context=null}},stopAll:function(){var v=null;for(v in u){if(u.hasOwnProperty(v)){this.stop(v)}}},addService:function(w,v){b[w]={creator:v,instance:null}},getService:function(v){if(b.hasOwnProperty(v)){if(!b[v].instance){try{b[v].instance=b[v].creator(this);if(typeof b[v].instance.init==="function"){b[v].instance.init()}}catch(w){return null}
if(typeof b[v].instance.getServiceName!=="function"){b[v].instance.getServiceName=function(){return v}}}
return b[v].instance}
return null},removeService:function(v){delete b[v]},broadcast:function(y){var x=0,v=0,z=null,w=null;if(y&&typeof y==="object"){for(z in u){if(u.hasOwnProperty(z)){w=u[z];if(s.utils.indexOf(w.messages,y.type)>-1){if(typeof w.instance.onmessage==="function"){w.instance.onmessage(y)}}}}}},listen:function(v,x){var w=null;if(this.isStarted(v)){w=u[v];if(s.utils.indexOf(w.messages,x)===-1){w.messages.push(x)}}},fail:function(x,w,v){x="UIC FAILED. "+x;try{s.destroy(!!v)}finally{s.utils.clog(x);throw new s.UICError(x,w)}},UICError:(function(){function v(w,x){this.message=w;this.code=x}
v.prototype=new Error();v.prototype.name="UICError";v.prototype.constructor=v;return v}()),getFlavor:function(){return"w3c"}};d=function(){var x=s.getCoreConfig(),y=null,w=s.utils.getValue(x,"inactivityTimeout",600000);if(!w){d=function(){};return}
function v(){s.utils.clog("UIC self-terminated due to inactivity timeout.");s.destroy()}
d=function(){if(y){clearTimeout(y);y=null}
y=setTimeout(v,w)};d()};i=function(x,F){var z,v,y,G,w,D,E,B,A;if(e){s.utils.clog("TLT.init() called more than once. Ignoring.");return}
if(TLT&&TLT.replay){return}
z=s.getService("config");z.updateConfig(x);if(!s._updateModules()){if(g!=="destroyed"){s.destroy()}
return}
if(z.subscribe){z.subscribe("configupdated",s._reinitConfig)}
e=true;g="loaded";v={type:"load",target:window.window,srcElement:window.window,currentTarget:window.window,bubbles:true,cancelBubble:false,cancelable:true,timeStamp:+new Date(),customLoad:true};G=s.getService("browserBase");y=new G.WebEvent(v);s._publishEvent(y);E=s.getService("ajax");D=s.getServiceConfig("queue");B=D.queues;for(A=0;A<B.length;A+=1){if(B[A].checkEndpoint){E.sendRequest({oncomplete:function(H){},timeout:B[A].endpointCheckTimeout||3000,url:B[A].endpoint,headers:{"X-Tealeaf-EndpointCheck":true},async:true,error:function(H){if(H.success){return}
s.setAutoFlush(false);s.destroy()}})}}
if(typeof j==="function"){try{j("initialized")}catch(C){}}};(function(){var w=null,x,v;for(w in h){if(h.hasOwnProperty(w)){for(x=0,v=h[w].length;x<v;x+=1){(function(z,y){s[y]=function(){var A=this.getService(z);if(A){return A[y].apply(A,arguments)}}}(w,h[w][x]))}}}}());return s}());(function(){var a=window.navigator.userAgent.toLowerCase(),i=(a.indexOf("msie")!==-1||a.indexOf("trident")!==-1),b=(function(){var j=!!window.performance;return(i&&(!j||document.documentMode<9))}()),e=(a.indexOf("android")!==-1),f=/(ipad|iphone|ipod)/.test(a),c=(a.indexOf("opera mini")!==-1),h=1,d={"a:":"link","button:button":"button","button:submit":"button","input:button":"button","input:checkbox":"checkBox","input:color":"colorPicker","input:date":"datePicker","input:datetime":"datetimePicker","input:datetime-local":"datetime-local","input:email":"emailInput","input:file":"fileInput","input:image":"button","input:month":"month","input:number":"numberPicker","input:password":"textBox","input:radio":"radioButton","input:range":"slider","input:reset":"button","input:search":"searchBox","input:submit":"button","input:tel":"tel","input:text":"textBox","input:time":"timePicker","input:url":"urlBox","input:week":"week","select:":"selectList","select:select-one":"selectList","textarea:":"textBox","textarea:textarea":"textBox"},g={isIE:i,isLegacyIE:b,isAndroid:e,isLandscapeZeroDegrees:false,isiOS:f,isOperaMini:c,isUndefOrNull:function(j){return typeof j==="undefined"||j===null},getSerialNumber:function(){var j;j=h;h+=1;return j},getRandomString:function(o,n){var m,l,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",k="";if(!o){return k}
if(typeof n!=="string"){n=j}
for(m=0,l=n.length;m<o;m+=1){k+=n.charAt(Math.floor(Math.random()*l))}
return k},getValue:function(o,n,k){var m,j,l;k=typeof k==="undefined"?null:k;if(!o||typeof o!=="object"||typeof n!=="string"){return k}
l=n.split(".");for(m=0,j=l.length;m<j;m+=1){if(this.isUndefOrNull(o)||typeof o[l[m]]==="undefined"){return k}
o=o[l[m]]}
return o},indexOf:function(m,l){var k,j;if(m&&m.indexOf){return m.indexOf(l)}
if(m&&m instanceof Array){for(k=0,j=m.length;k<j;k+=1){if(m[k]===l){return k}}}
return-1},forEach:function(n,m,l){var k,j;if(!n||!n.length||!m||!m.call){return}
for(k=0,j=n.length;k<j;k+=1){m.call(l,n[k],k,n)}},some:function(n,m){var k,j,l=false;for(k=0,j=n.length;k<j;k+=1){l=m(n[k],k,n);if(l){return l}}
return l},convertToArray:function(l){var m=0,k=l.length,j=[];while(m<k){j.push(l[m]);m+=1}
return j},mixin:function(n){var m,l,k,j;for(k=1,j=arguments.length;k<j;k+=1){l=arguments[k];for(m in l){if(Object.prototype.hasOwnProperty.call(l,m)){n[m]=l[m]}}}
return n},extend:function(j,k,l){var m="";for(m in l){if(Object.prototype.hasOwnProperty.call(l,m)){if(j&&Object.prototype.toString.call(l[m])==="[object Object]"){if(typeof k[m]==="undefined"){k[m]={}}
g.extend(j,k[m],l[m])}else{k[m]=l[m]}}}
return k},clone:function(k){var l,j;if(null===k||"object"!==typeof k){return k}
if(k instanceof Object){l=(Object.prototype.toString.call(k)==="[object Array]")?[]:{};for(j in k){if(Object.prototype.hasOwnProperty.call(k,j)){l[j]=g.clone(k[j])}}
return l}},parseVersion:function(l){var m,j,k=[];if(!l||!l.length){return k}
k=l.split(".");for(m=0,j=k.length;m<j;m+=1){k[m]=/^[0-9]+$/.test(k[m])?parseInt(k[m],10):k[m]}
return k},isEqual:function(l,k){var m,j;if(l===k){return true}
if(typeof l!==typeof k){return false}
if(l instanceof Object){if(Object.prototype.toString.call(l)==="[object Array]"){if(l.length!==k.length){return false}
for(m=0,j=l.length;m<j;m+=1){if(!this.isEqual(l[m],k[m])){return false}}
return true}}
return false},createObject:(function(){var j=null,k=null;if(typeof Object.create==="function"){j=Object.create}else{k=function(){};j=function(l){if(typeof l!=="object"&&typeof l!=="function"){throw new TypeError("Object prototype need to be an object!")}
k.prototype=l;return new k()}}
return j}()),access:function(o,m){var n=m||window,k,l,j;if(typeof o!=="string"||(typeof n!=="object"&&n!==null)){return}
k=o.split(".");for(l=0,j=k.length;l<j;l+=1){if(l===0&&k[l]==="window"){continue}
if(!Object.prototype.hasOwnProperty.call(n,k[l])){return}
n=n[k[l]];if(l<(j-1)&&!(n instanceof Object)){return}}
return n},isNumeric:function(j){var k=false;if(g.isUndefOrNull(j)||j===""){return k}
k=!isNaN(j*2);return k},isUpperCase:function(j){return j===j.toUpperCase()&&j!==j.toLowerCase()},isLowerCase:function(j){return j===j.toLowerCase()&&j!==j.toUpperCase()},getDocument:function(j){if(j&&j.nodeType!==9){return(!g.isUndefOrNull(j.ownerDocument))?(j.ownerDocument):(j.document)}
return j},getWindow:function(k){try{if(k.self!==k){var j=g.getDocument(k);return(!g.isUndefOrNull(j.defaultView))?(j.defaultView):(j.parentWindow)}}catch(l){k=null}
return k},getOriginAndPath:function(j){var k={};j=j||window.location;if(j.origin){k.origin=j.origin}else{k.origin=(j.protocol||"")+"//"+(j.host||"")}
k.path=(j.pathname||"").split(";",1)[0];if(k.origin.indexOf("file://")>-1){k.path=k.path.replace(/(.*?)(?=\/[^.\/]*\.app)/g,"").replace(".app//",".app/")}
return k},getIFrameWindow:function(l){var j=null;if(!l){return j}
try{j=l.contentWindow||(l.contentDocument?l.contentDocument.parentWindow:null)}catch(k){}
return j},getTagName:function(k){var j="";if(g.isUndefOrNull(k)){return j}
if(k===document||k.nodeType===9){j="document"}else{if(k===window||k===window.window){j="window"}else{if(typeof k==="string"){j=k.toLowerCase()}else{if(k.tagName){j=k.tagName.toLowerCase()}else{if(k.nodeName){j=k.nodeName.toLowerCase()}else{j=""}}}}}
return j},getTlType:function(l){var j,k,m="";if(g.isUndefOrNull(l)||!l.type){return m}
j=l.type.toLowerCase();k=j+":";if(l.subType){k+=l.subType.toLowerCase()}
m=d[k]||j;return m},isIFrameDescendant:function(k){var j=g.getWindow(k);return(j?(j!=TLT._getLocalTop()):false)},getOrientationMode:function(j){var k="INVALID";if(typeof j!=="number"){return k}
switch(j){case 0:case 180:case 360:k="PORTRAIT";break;case 90:case-90:case 270:k="LANDSCAPE";break;default:k="UNKNOWN";break}
return k},clog:(function(j){return function(){}}(window)),trim:function(j){if(!j||!j.toString){return j}
return j.toString().replace(/^\s+|\s+$/g,"")},ltrim:function(j){if(!j||!j.toString){return j}
return j.toString().replace(/^\s+/,"")},rtrim:function(j){if(!j||!j.toString){return j}
return j.toString().replace(/\s+$/,"")},setCookie:function(r,j,q,t,m){var o,p,n,l,k="",s;if(!r){return}
r=encodeURIComponent(r);j=encodeURIComponent(j);n=(m||location.hostname).split(".");s=";path="+(t||"/");if(typeof q==="number"){if(this.isIE){l=new Date();l.setTime(l.getTime()+(q*1000));k=";expires="+l.toUTCString()}else{k=";max-age="+q}}
for(o=2,p=n.length;o<=p;o+=1){document.cookie=r+"="+j+";domain="+n.slice(-o).join(".")+s+k;if(this.getCookieValue(r)===j){break}}},getCookieValue:function(p,r){var m,n,l,q,k=null,j;try{r=r||document.cookie;if(!p||!p.toString){return null}
p+="=";j=p.length;q=r.split(";");for(m=0,n=q.length;m<n;m+=1){l=q[m];l=g.ltrim(l);if(l.indexOf(p)===0){k=l.substring(j,l.length);break}}}catch(o){k=null}
return k},getQueryStringValue:function(o,r,k){var n,m,s,l=null,p;try{k=k||window.location.search;s=k.length;if(!o||!o.toString||!s){return null}
r=r||"&";k=r+k.substring(1);o=r+o+"=";n=k.indexOf(o);if(n!==-1){p=n+o.length;m=k.indexOf(r,p);if(m===-1){m=s}
l=decodeURIComponent(k.substring(p,m))}}catch(q){}
return l},addEventListener:(function(){if(window.addEventListener){return function(k,j,l){k.addEventListener(j,l,false)}}
return function(k,j,l){k.attachEvent("on"+j,l)}}()),matchTarget:function(u,p){var n,m,t=-1,r,k,l,s,o,q;if(!u||!p){return t}
if(!this.browserService||!this.browserBaseService){this.browserService=TLT.getService("browser");this.browserBaseService=TLT.getService("browserBase")}
for(n=0,o=u.length;n<o&&t===-1;n+=1){q=u[n];if(typeof q==="string"){r=this.browserService.queryAll(q);for(m=0,k=r?r.length:0;m<k;m+=1){if(r[m]){l=this.browserBaseService.ElementData.prototype.examineID(r[m]);if(l.type===p.idType&&l.id===p.id){t=n;break}}}}else{if(q&&q.id&&q.idType&&p.idType.toString()===q.idType.toString()){switch(typeof q.id){case"string":if(q.id===p.id){t=n}
break;case"object":s=new RegExp(q.id.regex,q.id.flags);if(s.test(p.id)){t=n}
break}}}}
return t},WeakMap:(function(){function j(n,m){var l,k;n=n||[];for(l=0,k=n.length;l<k;l+=1){if(n[l][0]===m){return l}}
return-1}
return function(){var k=[];this.set=function(m,n){var l=j(k,m);k[l>-1?l:k.length]=[m,n]};this.get=function(m){var l=k[j(k,m)];return(l?l[1]:undefined)};this.clear=function(){k=[]};this.has=function(l){return(j(k,l)>=0)};this.remove=function(m){var l=j(k,m);if(l>=0){k.splice(l,1)}};this["delete"]=this.remove}}())};if(typeof TLT==="undefined"||!TLT){window.TLT={}}
TLT.utils=g}());(function(){TLT.EventTarget=function(){this._handlers={}};TLT.EventTarget.prototype={constructor:TLT.EventTarget,publish:function(c,f){var d=0,a=0,b=this._handlers[c],e={type:c,data:f};if(typeof b!=="undefined"){for(a=b.length;d<a;d+=1){b[d](e)}}},subscribe:function(a,b){if(!this._handlers.hasOwnProperty(a)){this._handlers[a]=[]}
this._handlers[a].push(b)},unsubscribe:function(c,e){var d=0,a=0,b=this._handlers[c];if(b){for(a=b.length;d<a;d+=1){if(b[d]===e){b.splice(d,1);return}}}}}}());TLT.ModuleContext=(function(){var a=["broadcast","getConfig:getModuleConfig","listen","post","getXPathFromNode","performDOMCapture","getStartTime"];return function(f,d){var h={},g=0,b=a.length,j=null,e=null,c=null;for(g=0;g<b;g+=1){j=a[g].split(":");if(j.length>1){c=j[0];e=j[1]}else{c=j[0];e=j[0]}
h[c]=(function(i){return function(){var k=d.utils.convertToArray(arguments);k.unshift(f);return d[i].apply(d,k)}}(e))}
h.utils=d.utils;return h}}());TLT.addService("config",function(a){function d(f,e){a.utils.extend(true,f,e);c.publish("configupdated",c.getConfig())}
var b={core:{},modules:{},services:{}},c=a.utils.extend(false,a.utils.createObject(new TLT.EventTarget()),{getConfig:function(){return b},updateConfig:function(e){d(b,e)},getCoreConfig:function(){return b.core},updateCoreConfig:function(e){d(b.core,e)},getServiceConfig:function(e){return b.services[e]||null},updateServiceConfig:function(f,e){if(typeof b.services[f]==="undefined"){b.services[f]={}}
d(b.services[f],e)},getModuleConfig:function(e){return b.modules[e]||null},updateModuleConfig:function(f,e){if(typeof b.modules[f]==="undefined"){b.modules[f]={}}
d(b.modules[f],e)},destroy:function(){b={core:{},modules:{},services:{}}}});return c});TLT.addService("queue",function(u){var F=null,f={},o=600000,g=u.getService("ajax"),n=u.getService("browser"),p=u.getService("encoder"),k=u.getService("serializer"),C=u.getService("config"),i=u.getService("message"),s=null,E={},c=true,m=[],r=false,l=(function(){var K={};function N(O){return typeof K[O]!=="undefined"}
function G(O,P){if(!N(O)){K[O]={lastOffset:0,data:[],queueId:O,url:P.url,eventThreshold:P.eventThreshold,sizeThreshold:P.sizeThreshold||0,size:-1,serializer:P.serializer,encoder:P.encoder,crossDomainEnabled:!!P.crossDomainEnabled,crossDomainIFrame:P.crossDomainIFrame}}
return K[O]}
function I(O){if(N(O)){delete K[O]}}
function L(O){if(N(O)){return K[O]}
return null}
function J(P){var O=L(P);if(O!==null){O.data=[]}}
function M(O){var P=null;if(N(O)){P=L(O).data;J(O)}
return P}
function H(R,S){var P=null,O=null,T=window.tlBridge,Q=window.iOSJSONShuttle;if((typeof T!=="undefined")&&(typeof T.addMessage==="function")){O=k.serialize(S);T.addMessage(O)}else{if((typeof Q!=="undefined")&&(typeof Q==="function")){O=k.serialize(S);Q(O)}else{if(N(R)){P=L(R);P.data.push(S);P.data=u.redirectQueue(P.data);if(P.sizeThreshold){O=k.serialize(P.data);P.size=O.length}
return P.data.length}}}
return 0}
return{exists:N,add:G,remove:I,get:L,clear:J,flush:M,push:H}}());function b(G){if(G&&G.id){u.utils.extend(true,m[G.id-1],{xhrRspEnd:i.createMessage({type:0}).offset,success:G.success,statusCode:G.statusCode,statusText:G.statusText})}}
function q(){return window.location.pathname}
function a(I,M,J,L){var G=l.get(I),K={name:M,value:J},H=null;if(typeof M!=="string"||typeof J!=="string"){return}
if(!G.headers){G.headers={once:[],always:[]}}
H=!!L?G.headers.always:G.headers.once;H.push(K)}
function D(I,L){var K=0,H=0,G=l.get(I),M=G.headers,J=null;L=L||{};function N(P,R){var Q=0,O=0,S=null;for(Q=0,O=P.length;Q<O;Q+=1){S=P[Q];R[S.name]=S.value}}
if(M){J=[M.always,M.once];for(K=0,H=J.length;K<H;K+=1){N(J[K],L)}}
return L}
function w(H){var G=null,I=null;if(!l.exists(H)){throw new Error("Queue: "+H+" does not exist!")}
G=l.get(H);I=G?G.headers:null;if(I){I.once=[]}}
function B(){var H=0,G,J,I=u.provideRequestHeaders();if(I&&I.length){for(H=0,G=I.length;H<G;H+=1){J=I[H];a("DEFAULT",J.name,J.value,J.recurring)}}
return H}
function h(K){var J,G,I=[],H="";if(!K||!K.length){return H}
for(J=0,G=K.length;J<G;J+=1){I[K[J].type]=true}
for(J=0,G=I.length;J<G;J+=1){if(I[J]){if(H){H+=","}
H+=J}}
return H}
function y(I,T){var N=l.flush(I),P=N?N.length:0,O=l.get(I),J={"Content-Type":"application/json","X-Tealeaf":"device (UIC) Lib/5.2.0.1768","X-TealeafType":"GUI","X-TeaLeaf-Page-Url":q(),"X-Tealeaf-SyncXHR":(!!T).toString()},R=null,L=i.createMessage({type:0}).offset,U=O.serializer||"json",H=O.encoder,K,M,G,S=null;if(!P||!O){return}
G=L-N[P-1].offset;if(G>(o+60000)){return}
O.lastOffset=N[P-1].offset;J["X-Tealeaf-MessageTypes"]=h(N);N=i.wrapMessages(N);if(F.xhrLogging){R=N.serialNumber;m[R-1]={serialNumber:R,xhrReqStart:L};N.log={xhr:m}}
if(U){N=k.serialize(N,U)}
if(H){M=p.encode(N,H);if(M&&M.data&&!M.error){N=M.data;J["Content-Encoding"]=M.encoding}}
B();D(I,J);if(O.crossDomainEnabled){S=u.utils.getIFrameWindow(O.crossDomainIFrame);if(!S){return}
K={request:{id:R,url:O.url,async:!T,headers:J,data:N}};if(!u.utils.isIE&&typeof window.postMessage==="function"){S.postMessage(K,O.crossDomainIFrame.src)}else{try{S.sendMessage(K)}catch(Q){return}}}else{g.sendRequest({id:R,oncomplete:b,url:O.url,async:!T,headers:J,data:N})}
w(I)}
function e(J){var G=null,I=F.queues,H=0;for(H=0;H<I.length;H+=1){G=I[H];y(G.qid,J)}
return true}
function j(I,K){var H,L=i.createMessage(K),G=l.get(I),J,M;H=G.data.length;if(H){M=L.offset-G.data[H-1].offset;if(M>o){l.flush(I);u.destroy();return}}
H=l.push(I,L);J=G.size;if((H>=G.eventThreshold||J>=G.sizeThreshold)&&c&&u.getState()!=="unloading"){y(I)}}
function d(I){var H=null,L=F.queues,K="",J=0,G=0;for(J=0;J<L.length;J+=1){H=L[J];if(H&&H.modules){for(G=0;G<H.modules.length;G+=1){K=H.modules[G];if(K===I){return H.qid}}}}
return s.qid}
function z(I,G){E[I]=window.setTimeout(function H(){y(I);E[I]=window.setTimeout(H,G)},G)}
function x(){var G=0;for(G in E){if(E.hasOwnProperty(G)){window.clearTimeout(E[G]);delete E[G]}}
E={}}
function v(G){}
function t(G){F=G;f=u.getCoreConfig();o=u.utils.getValue(f,"inactivityTimeout",600000);u.utils.forEach(F.queues,function(H,I){var J=null;if(H.qid==="DEFAULT"){s=H}
if(H.crossDomainEnabled){J=n.query(H.crossDomainFrameSelector);if(!J){u.fail("Cross domain iframe not found")}}
l.add(H.qid,{url:H.endpoint,eventThreshold:H.maxEvents,sizeThreshold:H.maxSize||0,serializer:H.serializer,encoder:H.encoder,timerInterval:H.timerInterval||0,crossDomainEnabled:H.crossDomainEnabled||false,crossDomainIFrame:J});if(typeof H.timerInterval!=="undefined"&&H.timerInterval>0){z(H.qid,H.timerInterval)}});C.subscribe("configupdated",v);r=true}
function A(){if(c){e(!F.asyncReqOnUnload)}
C.unsubscribe("configupdated",v);x();F=null;s=null;r=false}
return{init:function(){if(!r){t(C.getServiceConfig("queue")||{})}else{}},destroy:function(){A()},_getQueue:function(G){return l.get(G).data},setAutoFlush:function(G){if(G===true){c=true}else{c=false}},flush:function(G){if(!l.exists(G)){throw new Error("Queue: "+G+" does not exist!")}
y(G)},flushAll:function(G){return e(!!G)},post:function(H,I,G){G=G||d(H);if(!l.exists(G)){throw new Error("Queue: "+G+" does not exist!")}
j(G,I)}}});TLT.addService("browserBase",function(r){var h,L=r.utils,i={optgroup:true,option:true,nobr:true},q={},e=r.getService("config"),n=null,A,w,g,u,F=false;function s(){e=r.getService("config");n=r.getService("serializer");A=r.getService("config").getServiceConfig("browser")||{};w=A.hasOwnProperty("blacklist")?A.blacklist:[];g=A.hasOwnProperty("customid")?A.customid:[]}
function b(){s();e.subscribe("configupdated",s);n=r.getService("serializer");F=true}
function G(){e.unsubscribe("configupdated",s);F=false}
function v(P){var N,M,O;if(!P||!P.id||typeof P.id!=="string"){return false}
for(N=0,M=w.length;N<M;N+=1){if(typeof w[N]==="string"){if(P.id===w[N]){return false}}else{if(typeof w[N]==="object"){O=new RegExp(w[N].regex,w[N].flags);if(O.test(P.id)){return false}}}}
return true}
function p(O,P){var M={type:null,subType:null},N;if(!O){return M}
N=O.type;switch(N){case"focusin":N="focus";break;case"focusout":N="blur";break;default:break}
M.type=N;return M}
function y(N){var M={type:null,subType:null};if(!N){return M}
M.type=L.getTagName(N);M.subType=N.type||null;return M}
function c(M,O,N){var S={HTML_ID:"-1",XPATH_ID:"-2",ATTRIBUTE_ID:"-3"},R,P=null,Q;if(!M||!O){return P}
R=N||window.document;O=O.toString();if(O===S.HTML_ID){if(R.getElementById){P=R.getElementById(M)}else{if(R.querySelector){P=R.querySelector("#"+M)}}}else{if(O===S.ATTRIBUTE_ID){Q=M.split("=");if(R.querySelector){P=R.querySelector("["+Q[0]+'="'+Q[1]+'"]')}}else{if(O===S.XPATH_ID){P=q.xpath(M,R)}}}
return P}
u=(function(){var M={nobr:true,p:true};function N(S,Q){var V,T,U=false,Y=null,O=null,Z=null,X=[],W=true,R=r._getLocalTop(),P="";while(W){W=false;if(!L.isUndefOrNull(S)){P=L.getTagName(S);if(!L.isUndefOrNull(P)){if(M.hasOwnProperty(P)){S=S.parentNode;P=L.getTagName(S)}}
for(U=v(S);S!==document&&(!U||Q);U=v(S)){Z=S.parentNode;if(!Z){O=r.utils.getWindow(S);if(!O){return X}
Z=(O!==R)?O.frameElement:document}
Y=Z.firstChild;if(typeof Y==="undefined"){return X}
for(T=0;Y;Y=Y.nextSibling){if(Y.nodeType===1&&L.getTagName(Y)===P){if(Y===S){X[X.length]=[P,T];break}
T+=1}}
S=Z;P=L.getTagName(S)}
if(U&&!Q){X[X.length]=[S.id];if(r.utils.isIFrameDescendant(S)){W=true;S=r.utils.getWindow(S).frameElement}}}}
return X}
return function(R,P){var O=N(R,!!P),S=[],Q=O.length;if(Q<1){return"null"}
while(Q){Q-=1;if(O[Q].length>1){S[S.length]='["'+O[Q][0]+'",'+O[Q][1]+"]"}else{S[S.length]="["+n.serialize(O[Q][0],"json")+"]"}}
return("["+S.join(",")+"]")}}());function K(N){var O={left:-1,top:-1},M;N=N||document;M=N.documentElement||N.body.parentNode||N.body;O.left=(typeof window.pageXOffset==="number")?window.pageXOffset:M.scrollLeft;O.top=(typeof window.pageYOffset==="number")?window.pageYOffset:M.scrollTop;return O}
function J(M){return M&&typeof M.originalEvent!=="undefined"&&typeof M.isDefaultPrevented!=="undefined"&&!M.isSimulated}
function k(M){if(!M){return null}
if(M.type&&M.type.indexOf("touch")===0){if(J(M)){M=M.originalEvent}
if(M.type==="touchstart"){M=M.touches[M.touches.length-1]}else{if(M.type==="touchend"){M=M.changedTouches[0]}}}
return M}
function t(P){var S=P||window.event,R=document.documentElement,M=document.body,Q=false,O=null,N=0;if(J(S)){S=S.originalEvent}
if(typeof P==="undefined"||typeof S.target==="undefined"){S.target=S.srcElement||window.window;S.timeStamp=Number(new Date());if(S.pageX===null||typeof S.pageX==="undefined"){S.pageX=S.clientX+((R&&R.scrollLeft)||(M&&M.scrollLeft)||0)-((R&&R.clientLeft)||(M&&M.clientLeft)||0);S.pageY=S.clientY+((R&&R.scrollTop)||(M&&M.scrollTop)||0)-((R&&R.clientTop)||(M&&M.clientTop)||0)}
S.preventDefault=function(){this.returnValue=false};S.stopPropagation=function(){this.cancelBubble=true}}
if(window.chrome&&S.path!==undefined&&S.type==="click"){if(S.path.length===undefined){return S}
for(N=0;N<S.path.length;N++){if(L.getTagName(S.path[N])==="button"){Q=true;O=S.path[N];N=S.path.length}}
if(Q){return{originalEvent:S,target:O,srcElement:O,type:S.type,pageX:document.body.scrollLeft+O.getBoundingClientRect().left,pageY:document.body.scrollTop+O.getBoundingClientRect().top}}}
return S}
function x(N){var M=null;if(!N){return null}
if(N.srcElement){M=N.srcElement}else{M=N.target;if(!M){M=N.explicitOriginalTarget}
if(!M){M=N.originalTarget}}
if(!M&&N.type.indexOf("touch")===0){M=k(N).target}
while(M&&i[L.getTagName(M)]){M=M.parentNode}
if(!M&&N.srcElement===null){M=window.window}
return M}
function I(N){var Q=0,P=0,O=document.documentElement,M=document.body;N=k(N);if(N){if(N.pageX||N.pageY){Q=N.pageX;P=N.pageY}else{if(N.clientX||N.clientY){Q=N.clientX+(O?O.scrollLeft:(M?M.scrollLeft:0))-(O?O.clientLeft:(M?M.clientLeft:0));P=N.clientY+(O?O.scrollTop:(M?M.scrollTop:0))-(O?O.clientTop:(M?M.clientTop:0))}}}
return{x:Q,y:P}}
q.xpath=function(U,W){var S=null,N,T=null,M,Q,P,O,R,V;if(!U){return null}
S=n.parse(U);W=W||document;N=W;if(!S){return null}
for(Q=0,R=S.length;Q<R&&N;Q+=1){T=S[Q];if(T.length===1){if(W.getElementById){N=W.getElementById(T[0])}else{if(W.querySelector){N=W.querySelector("#"+T[0])}else{N=null}}}else{for(P=0,O=-1,V=N.childNodes.length;P<V;P+=1){if(N.childNodes[P].nodeType===1&&L.getTagName(N.childNodes[P])===T[0].toLowerCase()){O+=1;if(O===T[1]){N=N.childNodes[P];break}}}
if(O===-1){return null}}
M=L.getTagName(N);if(M==="frame"||M==="iframe"){N=L.getIFrameWindow(N).document;W=N}}
return(N===W||!N)?null:N};function m(M,N){this.x=M||0;this.y=N||0}
function a(N,M){this.width=Math.round(N||0);this.height=Math.round(M||0)}
function d(N,O){var Q,M,P;O=x(N);Q=this.examineID(O);M=y(O);P=this.examinePosition(N,O);this.element=O;this.id=Q.id;this.idType=Q.type;this.type=M.type;this.subType=M.subType;this.state=this.examineState(O);this.position=new m(P.x,P.y);this.size=new a(P.width,P.height);this.xPath=Q.xPath;this.name=Q.name}
d.HTML_ID=-1;d.XPATH_ID=-2;d.ATTRIBUTE_ID=-3;d.prototype.examineID=function(S){var O,U,V,M,N,Q=g.length,P;try{V=u(S)}catch(R){}
N=S.name;try{if(!r.utils.getWindow(S)||!r.utils.isIFrameDescendant(S)){if(v(S)){O=S.id;U=d.HTML_ID}else{if(g.length&&S.attributes){while(Q){Q-=1;P=S.attributes[g[Q]];if(typeof P!=="undefined"){O=g[Q]+"="+(P.value||P);U=d.ATTRIBUTE_ID}}}}}}catch(T){}
if(!O){O=V;U=d.XPATH_ID}
return{id:O,type:U,xPath:V,name:N}};d.prototype.examineState=function(S){var M={a:["innerText","href"],input:{range:["maxValue:max","value"],checkbox:["value","checked"],radio:["value","checked"],image:["src"]},select:["value"],button:["value","innerText"],textarea:["value"]},N=L.getTagName(S),T=M[N]||null,O=null,V=null,P=0,R=0,Q=null,U="";if(T!==null){if(Object.prototype.toString.call(T)==="[object Object]"){T=T[S.type]||["value"]}
V={};for(U in T){if(T.hasOwnProperty(U)){if(T[U].indexOf(":")!==-1){Q=T[U].split(":");V[Q[0]]=S[Q[1]]}else{if(T[U]==="innerText"){V[T[U]]=r.utils.trim(S.innerText||S.textContent)}else{V[T[U]]=S[T[U]]}}}}}
if(N==="select"&&S.options&&!isNaN(S.selectedIndex)){V.index=S.selectedIndex;if(V.index>=0&&V.index<S.options.length){O=S.options[S.selectedIndex];V.value=O.getAttribute("value")||O.getAttribute("label")||O.text||O.innerText;V.text=O.text||O.innerText}}
return V};function E(){var N=1,O,Q,M;if(document.body.getBoundingClientRect){try{O=document.body.getBoundingClientRect()}catch(P){r.utils.clog("getBoundingClientRect failed.",P);return N}
Q=O.right-O.left;M=document.body.offsetWidth;N=Math.round((Q/M)*100)/100}
return N}
function o(N){var P,M,O,R;if(!N||!N.getBoundingClientRect){return{x:0,y:0,width:0,height:0}}
try{P=N.getBoundingClientRect();R=K(document)}catch(Q){r.utils.clog("getBoundingClientRect failed.",Q);return{x:0,y:0,width:0,height:0}}
M={x:P.left+R.left,y:P.top+R.top,width:P.right-P.left,height:P.bottom-P.top};if(r.utils.isIE){M.x-=document.documentElement.clientLeft;M.y-=document.documentElement.clientTop;O=E();if(O!==1){M.x=Math.round(M.x/O);M.y=Math.round(M.y/O);M.width=Math.round(M.width/O);M.height=Math.round(M.height/O)}}
return M}
d.prototype.examinePosition=function(N,O){var P=I(N),M=o(O);M.x=(P.x||P.y)?Math.round(Math.abs(P.x-M.x)):M.width/2;M.y=(P.x||P.y)?Math.round(Math.abs(P.y-M.y)):M.height/2;return M};function H(){var M=(typeof window.orientation==="number")?window.orientation:0;if(r.utils.isLandscapeZeroDegrees){if(Math.abs(M)===180||Math.abs(M)===0){M=90}else{if(Math.abs(M)===90){M=0}}}
return M}
function B(S){var P,M,R,Q,O,N;if(S){return S}
R=r.getCoreConfig()||{};O=R.modules;S={};for(N in O){if(O.hasOwnProperty(N)&&O[N].events){for(P=0,M=O[N].events.length;P<M;P+=1){Q=O[N].events[P];if(Q.state){S[Q.name]=Q.state}}}}
return S}
function j(M){var N;h=B(h);if(h[M.type]){N=L.getValue(M,h[M.type],null)}
return N}
function l(N){var P,M,O;this.data=N.data||null;this.delegateTarget=N.delegateTarget||null;if(N.gesture||(N.originalEvent&&N.originalEvent.gesture)){this.gesture=N.gesture||N.originalEvent.gesture;this.gesture.idType=(new d(this.gesture,this.gesture.target)).idType}
N=t(N);P=I(N);this.custom=false;this.nativeEvent=this.custom===true?null:N;this.position=new m(P.x,P.y);this.target=new d(N,N.target);this.orientation=H();O=j(N);if(O){this.target.state=O}
this.timestamp=(new Date()).getTime();M=p(N,this.target);this.type=M.type;this.subType=M.subType}
function D(M){r._publishEvent(new l(M))}
function f(Q,O){var T,R,S=false,W=null,M=null,X=null,V=[],U=true,P=r._getLocalTop(),N="";while(U){U=false;if(L.isUndefOrNull(Q)){break}
N=L.getTagName(Q);if(!L.isUndefOrNull(N)){if(f.specialChildNodes.hasOwnProperty(N)){Q=Q.parentNode;U=true;continue}}
for(S=v(Q);Q!==document&&(!S||O);S=v(Q)){X=Q.parentNode;if(!X){M=r.utils.getWindow(Q);if(!M||Q.nodeType!==9){V.push([N,0]);break}
X=(M!==P)?M.frameElement:document}
W=X.firstChild;if(typeof W==="undefined"){break}
for(R=0;W;W=W.nextSibling){if(W.nodeType===1&&L.getTagName(W)===N){if(W===Q){V[V.length]=[N,R];break}
R+=1}}
Q=X;N=L.getTagName(Q)}
if(S&&!O){V[V.length]=[Q.id];if(r.utils.isIFrameDescendant(Q)){U=true;Q=r.utils.getWindow(Q).frameElement}}}
V.reverse();return V}
f.specialChildNodes={nobr:true,p:true};function C(M){var N;if(!M||!M.length){return null}
N=n.serialize(M,"json");return N}
function z(Q){var P="",N=[],M="",O=[];if(!(this instanceof z)){return null}
if(typeof Q!=="object"){return}
O=f(Q,false);if(O.length&&O[0].length===1){N=f(Q,true)}else{N=L.clone(O)}
this.xpath=C(O);this.xpathList=O;this.fullXpath=C(N);this.fullXpathList=N;this.applyPrefix=function(T){var R,S;if(!(T instanceof z)||!T.fullXpathList.length){return}
S=T.fullXpathList[T.fullXpathList.length-1];R=this.fullXpathList.shift();if(L.isEqual(R[0],S[0])){this.fullXpathList=T.fullXpathList.concat(this.fullXpathList)}else{this.fullXpathList.unshift(R);return}
this.fullXpath=C(this.fullXpathList);R=this.xpathList.shift();if(R.length===1){this.xpathList.unshift(R);return}
this.xpathList=T.xpathList.concat(this.xpathList);this.xpath=C(this.xpathList)};this.compare=function(R){if(!(R instanceof z)){return 0}
return(this.fullXpathList.length-R.fullXpathList.length)};this.isSame=function(R){var S=false;if(!(R instanceof z)){return S}
if(this.compare(R)===0){S=(this.fullXpath===R.fullXpath)}
return S};this.containedIn=function(S){var T,R;if(!(S instanceof z)){return false}
if(S.fullXpathList.length>this.fullXpathList.length){return false}
for(T=0,R=S.fullXpathList.length;T<R;T+=1){if(!L.isEqual(S.fullXpathList[T],this.fullXpathList[T])){return false}}
return true}}
z.prototype=(function(){return{}}());return{init:function(){if(!F){b()}else{}},destroy:function(){G()},WebEvent:l,ElementData:d,Xpath:z,processDOMEvent:D,getNormalizedOrientation:H,getXPathFromNode:function(N,O,M,P){return u(O,M,P)},getNodeFromID:c,queryDom:q}});TLT.addService("browser",function(d){var h=d.getService("config"),f=d.getService("browserBase"),l=d.getService("ajax"),g=null,c=null,j=h.getServiceConfig("browser")||{},b=(j.useCapture===true),k=false,e={NO_QUERY_SELECTOR:"NOQUERYSELECTOR"},n=function(o){return function(q){var p=new f.WebEvent(q);if(q.type==="resize"||q.type==="hashchange"){setTimeout(function(){o(p)},5)}else{o(p)}}},a={list2Array:function(q){var p=q.length,o=[],r;if(typeof q.length==="undefined"){return[q]}
for(r=0;r<p;r+=1){o[r]=q[r]}
return o},find:function(q,p,o){o=o||"css";return this.list2Array(this[o](q,p))},css:function(q,t){var u=this,x=null,v=document.getElementsByTagName("body")[0],o=h.getServiceConfig("browser")||{},w=o.hasOwnProperty("jQueryObject")?d.utils.access(o.jQueryObject):window.jQuery,s=o.hasOwnProperty("sizzleObject")?d.utils.access(o.sizzleObject):window.Sizzle;if(typeof document.querySelectorAll==="undefined"){u.css=function(z,y){y=y||document;return u.Sizzle(z,y)};if(typeof u.Sizzle==="undefined"){try{if(v===s("html > body",document)[0]){u.Sizzle=s}}catch(r){try{if(v===w(document).find("html > body").get()[0]){u.Sizzle=function(z,y){return w(y).find(z).get()}}}catch(p){d.fail("Sizzle was not found",e.NO_QUERY_SELECTOR)}}}}else{u.css=function(z,y){y=y||document;return y.querySelectorAll(z)}}
return u.css(q,t)}},m=(function(){var o=new d.utils.WeakMap();return{add:function(p){var q=o.get(p)||[n(p),0];q[1]+=1;o.set(p,q);return q[0]},find:function(p){var q=o.get(p);return q?q[0]:null},remove:function(p){var q=o.get(p);if(q){q[1]-=1;if(q[1]<=0){o.remove(p)}}}}}());function i(){a.xpath=f.queryDom.xpath;if(typeof document.addEventListener==="function"){g=function(q,o,p){q.addEventListener(o,p,b)};c=function(q,o,p){q.removeEventListener(o,p,b)}}else{if(typeof document.attachEvent!=="undefined"){g=function(q,o,p){q.attachEvent("on"+o,p)};c=function(q,o,p){q.detachEvent("on"+o,p)}}else{throw new Error("Unsupported browser")}}
k=true}
return{init:function(){if(!k){i()}else{}},destroy:function(){k=false},getServiceName:function(){return"W3C"},query:function(r,p,o){try{return a.find(r,p,o)[0]||null}catch(q){return[]}},queryAll:function(r,p,o){try{return a.find(r,p,o)}catch(q){return[]}},subscribe:function(o,r,p){var q=m.add(p);g(r,o,q)},unsubscribe:function(o,s,p){var q=m.find(p);if(q){try{c(s,o,q)}catch(r){}
m.remove(p)}}}});TLT.addService("ajax",function(b){var a,e=function(j){var i="",h=[];for(i in j){if(j.hasOwnProperty(i)){h.push([i,j[i]])}}
return h},d=false;function c(k){k=k.split("\n");var m={},j=0,h=k.length,l=null;for(j=0;j<h;j+=1){l=k[j].split(": ");m[l[0]]=l[1]}
return m}
function g(q){var p=a(),j=[["X-Requested-With","XMLHttpRequest"]],o=0,k=typeof q.async!=="boolean"?true:q.async,m="",n=null,l,h;if(q.headers){j=j.concat(e(q.headers))}
if(q.contentType){j.push(["Content-Type",q.contentType])}
p.open(q.type.toUpperCase(),q.url,k);for(l=0,h=j.length;l<h;l+=1){m=j[l];if(m[0]&&m[1]){p.setRequestHeader(m[0],m[1])}}
p.onreadystatechange=n=function(){if(p.readyState===4){p.onreadystatechange=n=function(){};if(q.timeout){window.clearTimeout(o)}
q.oncomplete({id:q.id,headers:c(p.getAllResponseHeaders()),responseText:(p.responseText||null),statusCode:p.status,statusText:p.statusText,success:(p.status>=200&&p.status<300)});p=null}};p.send(q.data||null);n();if(q.timeout){o=window.setTimeout(function(){if(!p){return}
p.onreadystatechange=function(){};if(p.readyState!==4){p.abort();if(typeof q.error==="function"){q.error({id:q.id,statusCode:p.status,statusText:"timeout",success:false})}}
q.oncomplete({id:q.id,headers:c(p.getAllResponseHeaders()),responseText:(p.responseText||null),statusCode:p.status,statusText:"timeout",success:false});p=null},q.timeout)}}
function f(){if(typeof window.XMLHttpRequest!=="undefined"){a=function(){return new XMLHttpRequest()}}else{a=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}
d=true}
return{init:function(){if(!d){f()}},destroy:function(){d=false},sendRequest:function(h){h.type=h.type||"POST";g(h)}}});TLT.addService("domCapture",function(x){var h=x.getService("config"),i=x.getService("browserBase"),u,g,e={captureFrames:false,removeScripts:true,removeComments:true},S={childList:true,attributes:true,attributeOldValue:true,characterData:true,subtree:true},a=(typeof window.MutationObserver!=="undefined"),v,E=S,J=[],T=[],t=[],w=0,C=100,c=false,o=false,K=false,F=1,q=function(){},r=function(){},z=function(){},W=x.utils;function D(){T=[];t=[];w=0;c=false}
function O(aa){var Z,Y,X;if(!aa||!aa.length){return}
aa=aa.sort(function(ac,ab){return ac.compare(ab)});for(Z=0;Z<aa.length;Z+=1){X=aa[Z];for(Y=Z+1;Y<aa.length;Y+=0){if(aa[Y].containedIn(X)){aa.splice(Y,1)}else{Y+=1}}}}
function p(Z){var Y,X;if(!Z){return Z}
for(Y=0,X=Z.length;Y<X;Y+=1){delete Z[Y].oldValue}
return Z}
function d(ab,Z){var Y,X,aa=false;if(!ab||!Z){return aa}
for(Y=0,X=ab.length;Y<X;Y+=1){if(ab[Y].name===Z){aa=true;break}}
return aa}
function y(aa,ac){var Z,Y,X,ab;for(Z=0,Y=aa.length,ab=false;Z<Y;Z+=1){X=aa[Z];if(X.name===ac.name){if(X.oldValue===ac.value){aa.splice(Z,1)}else{X.value=ac.value}
ab=true;break}}
if(!ab){aa.push(ac)}
return aa}
function I(aa,Y){var ac,ab,Z,X,ad,ae;aa.removedNodes=Y.removedNodes.length;aa.addedNodes=W.convertToArray(Y.addedNodes);for(ac=0,X=T.length;ac<X;ac+=1){ae=T[ac];if(aa.isSame(ae)){if(aa.removedNodes){for(ab=0;ab<Y.removedNodes.length;ab+=1){Z=ae.addedNodes.indexOf(Y.removedNodes[ab]);if(Z!==-1){ae.addedNodes.splice(Z,1);aa.removedNodes-=1}}}
ae.removedNodes+=aa.removedNodes;ae.addedNodes.concat(aa.addedNodes);if(!ae.removedNodes&&!ae.addedNodes.length){T.splice(ac,1)}
ad=true;break}}
if(!ad){T.push(aa)}}
function P(Y,ac){var aa,Z,X,ad=false,ab,ae;for(aa=0,X=T.length;!ad&&aa<X;aa+=1){ae=T[aa];if(Y.containedIn(ae)){ab=ae.addedNodes;for(Z=0;Z<ab.length;Z+=1){if(ab[Z].contains&&ab[Z].contains(ac)){ad=true;break}}}}
return ad}
function B(Z,Y){var ab,X,aa,ac,ad;Z.attributes=[{name:Y.attributeName,oldValue:Y.oldValue,value:Y.target.getAttribute(Y.attributeName)}];aa=Z.attributes[0];if(aa.oldValue===aa.value){return}
for(ab=0,X=t.length,ac=false;ab<X;ab+=1){ad=t[ab];if(Z.isSame(ad)){ad.attributes=y(ad.attributes,aa);if(!ad.attributes.length){t.splice(ab,1)}else{if(P(Z,Y.target)){t.splice(ab,1)}}
ac=true;break}}
if(!ac&&!P(Z,Y.target)){t.push(Z)}}
function l(aa){var ac,X,ab,Y,Z;if(!aa||!aa.length){return}
w+=aa.length;if(w>=C){if(!c){c=true}
return}
for(ac=0,X=aa.length;ac<X;ac+=1){Y=aa[ac];Z=new i.Xpath(Y.target);if(Z){ab=Z.fullXpathList;if(ab.length&&ab[0][0]==="html"){switch(Y.type){case"characterData":case"childList":I(Z,Y);break;case"attributes":B(Z,Y);break;default:W.clog("Unknown mutation type: "+Y.type);break}}}}}
function s(){var X;X=new window.MutationObserver(function(Y){if(Y){l(Y);W.clog("Processed ["+Y.length+"] mutation records.")}});return X}
function j(Y){var Z,X;h.subscribe("configupdated",z);u=x.getService("message");g=Y;g.options=W.mixin({},e,g.options);a=a&&W.getValue(g,"diffEnabled",true);C=W.getValue(g.options,"maxMutations",100);if(a){E=W.getValue(g,"diffObserverConfig",S);v=s();J.push(window)}
K=true}
function N(){h.unsubscribe("configupdated",z);if(v){v.disconnect()}
K=false}
function m(){var X;X="tlt-"+W.getSerialNumber();return X}
function f(aa,Z){var Y,X;if(!aa||!aa.getElementsByTagName||!Z){return}
X=aa.getElementsByTagName(Z);if(X&&X.length){for(Y=X.length-1;Y>=0;Y-=1){X[Y].parentNode.removeChild(X[Y])}}
return aa}
function H(Z,X){var Y,aa;for(Y=0;Z.hasChildNodes()&&Y<Z.childNodes.length;Y+=1){aa=Z.childNodes[Y];if(aa.nodeType===X){Z.removeChild(aa);Y-=1}else{if(aa.hasChildNodes()){H(aa,X)}}}
return Z}
function R(Z){var Y,X=null;if(!Z||!Z.doctype){return null}
Y=Z.doctype;if(Y){X="<!DOCTYPE "+Y.name+(Y.publicId?' PUBLIC "'+Y.publicId+'"':"")+(!Y.publicId&&Y.systemId?" SYSTEM":"")+(Y.systemId?' "'+Y.systemId+'"':"")+">"}
return X}
function Q(ad,ae){var ac,Z,ab,aa,Y,X;if(!ae){return}
aa=ad.getElementsByTagName("input");Y=ae.getElementsByTagName("input");if(Y){for(ac=0,X=Y.length;ac<X;ac+=1){Z=aa[ac];ab=Y[ac];switch(ab.type){case"checkbox":case"radio":if(W.isIE?Z.checked:ab.checked){ab.setAttribute("checked","checked")}else{ab.removeAttribute("checked")}
break;default:ab.setAttribute("value",ab.value);if(!ab.getAttribute("type")){ab.setAttribute("type","text")}
break}}}}
function k(ad,ae){var aa,X,ac,Y,Z,ab;if(!ad||!ad.getElementsByTagName||!ae||!ae.getElementsByTagName){return}
Y=ad.getElementsByTagName("textarea");ab=ae.getElementsByTagName("textarea");if(Y&&ab){for(aa=0,X=Y.length;aa<X;aa+=1){ac=Y[aa];Z=ab[aa];Z.setAttribute("value",ac.value);Z.value=Z.textContent=ac.value}}}
function L(X,ac){var Y,ae,ad,af,aa,Z,ab;if(!X||!X.getElementsByTagName||!ac||!ac.getElementsByTagName){return}
ae=X.getElementsByTagName("select");af=ac.getElementsByTagName("select");if(ae){for(aa=0,ab=ae.length;aa<ab;aa+=1){Y=ae[aa];ad=af[aa];for(Z=0;Z<Y.options.length;Z+=1){if(Z===Y.selectedIndex||Y.options[Z].selected){ad.options[Z].setAttribute("selected","selected")}else{ad.options[Z].removeAttribute("selected")}}}}}
function A(Y){var X,Z=null;if(Y){X=Y.nodeType||-1;switch(X){case 9:Z=Y.documentElement.outerHTML;break;case 1:Z=Y.outerHTML;break;default:Z=null;break}}
return Z}
function V(Z){var X,Y=false;if(Z&&typeof Z==="object"){X=Z.nodeType||-1;switch(X){case 9:case 1:Y=true;break;default:Y=false;break}}
return Y}
function b(ae,an,Y){var ah,ag,ai,ao,af=["iframe","frame"],am,Z,ac,al,aa,ak,ab={frames:[]},ap,ad,X;for(ag=0;ag<af.length;ag+=1){ao=af[ag];ap=ae.getElementsByTagName(ao);ad=an.getElementsByTagName(ao);if(ap){for(ah=0,ai=ap.length;ah<ai;ah+=1){try{am=ap[ah];Z=W.getIFrameWindow(am);if(Z&&Z.document){ac=Z.document;al=r(ac,ac,"",Y);aa=m();ad[ah].setAttribute("tltid",aa);al.tltid=aa;X=W.getOriginAndPath(ac.location);al.host=X.origin;al.url=X.path;al.charset=ac.characterSet||ac.charset;ak=ad[ah].getAttribute("src");if(!ak){ak=Z.location.href;ad[ah].setAttribute("src",ak)}
ab.frames=ab.frames.concat(al.frames);delete al.frames;ab.frames.push(al)}}catch(aj){}}}}
return ab}
function U(ad){var ab,Z,X,aa,Y,ac,ae=0;if(!ad){return ae}
if(ad.root){ae+=ad.root.length;if(ad.frames){for(ab=0,X=ad.frames.length;ab<X;ab+=1){if(ad.frames[ab].root){ae+=ad.frames[ab].root.length}}}}else{if(ad.diffs){for(ab=0,X=ad.diffs.length;ab<X;ab+=1){ac=ad.diffs[ab];ae+=ac.xpath.length;if(ac.root){ae+=ac.root.length}else{if(ac.attributes){for(Z=0,aa=ac.attributes.length;Z<aa;Z+=1){Y=ac.attributes[Z];ae+=Y.name.length;if(Y.value){ae+=Y.value.length}}}}}}}
return ae}
function M(){var aa,Z,X,Y;for(aa=0,X=T.length;aa<X&&t.length;aa+=1){Y=T[aa];for(Z=0;Z<t.length;Z+=1){if(t[Z].containedIn(Y)){t.splice(Z,1);Z-=1}}}}
function G(Z){var ab,X,aa={fullDOM:false,diffs:[]},ad,ac,Y;O(T);M();for(ab=0,X=T.length;ab<X;ab+=1){Y=T[ab];ac=i.getNodeFromID(Y.xpath,-2);ad=r(window.document,ac,Y,Z);ad.xpath=Y.xpath;aa.diffs.push(ad)}
for(ab=0,X=t.length;ab<X;ab+=1){Y=t[ab];ad={xpath:d(Y.attributes,"id")?Y.fullXpath:Y.xpath,attributes:p(Y.attributes)};aa.diffs.push(ad)}
return aa}
function n(Z,Y){var aa,X;aa=r(Z,Z,null,Y);if(!aa){aa={}}
aa.charset=Z.characterSet||Z.charset;X=W.getOriginAndPath(Z.location);aa.host=X.origin;aa.url=X.path;return aa}
q=function(X){var Y=null;if(V(X)){Y=X.cloneNode(true);if(!Y&&X.documentElement){Y=X.documentElement.cloneNode(true)}}
return Y};r=function(ad,Z,Y,ab){var ac,X,ae={},aa;if(!ad||!Z){return ae}
ac=q(Z,ad);if(!ac){return ae}
if(!!ab.removeScripts){f(ac,"script");f(ac,"noscript")}
if(!!ab.removeComments){H(ac,8)}
L(Z,ac);Q(Z,ac);k(Z,ac);ac=u.applyPrivacyToNode(ac,Y,ad);if(!!ab.captureFrames){X=b(Z,ac,ab)}
if(X){ae=W.mixin(ae,X)}
ae.root=(R(Z)||"")+A(ac);return ae};z=function(){h=x.getService("config");j(h.getServiceConfig("domCapture")||{})};return{init:function(){h=x.getService("config");if(!K){j(h.getServiceConfig("domCapture")||{})}else{}},destroy:function(){N()},observeWindow:function(Z){var Y,X;if(!Z){return}
if(!W.getValue(g,"options.captureFrames",false)&&!(Z===window)){return}
if(W.indexOf(J,Z)===-1){J.push(Z)}},captureDOM:function(Y,Z){var aa,X,ac=null,ab,ad=0;if(!K||W.isLegacyIE){return ac}
Z=W.mixin({},g.options,Z);Y=Y||window.document;if(!o||!a||c||Z.forceFullDOM){if(v){v.disconnect()}
ac=n(Y,Z);ac.fullDOM=true;ac.forced=!!(c||Z.forceFullDOM);o=true;if(v){for(aa=0,X=J.length;aa<X;aa+=1){ab=J[aa];v.observe(ab.document,E)}}}else{ac=G(Z);ac.fullDOM=false}
if(a){ac.mutationCount=w}
D();if(Z.maxLength){ad=U(ac);if(ad>Z.maxLength){ac={errorCode:101,error:"Captured length ("+ad+") exceeded limit ("+Z.maxLength+")."}}}
return ac}}});TLT.addService("encoder",function(a){var f={},g=null,b=null,d=false;function e(j){var i=null;if(!j){return i}
i=f[j];if(i&&typeof i.encode==="string"){i.encode=a.utils.access(i.encode)}
return i}
function h(i){f=i;g.subscribe("configupdated",b);d=true}
function c(){g.unsubscribe("configupdated",b);d=false}
b=function(){g=a.getService("config");h(g.getServiceConfig("encoder")||{})};return{init:function(){g=a.getService("config");if(!d){h(g.getServiceConfig("encoder")||{})}else{}},destroy:function(){c()},encode:function(m,l){var k,i,j={data:null,encoding:null,error:null};if((typeof m!=="string"&&!m)||!l){j.error="Invalid "+(!m?"data":"type")+" parameter.";return j}
k=e(l);if(!k){j.error="Specified encoder ("+l+") not found.";return j}
if(typeof k.encode!=="function"){j.error="Configured encoder ("+l+") encode method is not a function.";return j}
try{i=k.encode(m)}catch(n){i={buffer:"Encoding failed: "+(n.name?n.name+" - ":"")+n.message}}
if(!i||a.utils.getValue(i,"buffer",null)===null){j.error="Encoder ("+l+") returned an invalid result.";return j}
j.data=i.buffer;j.encoding=k.defaultEncoding;return j}}});TLT.addService("message",function(w){var P=w.utils,p=0,s=0,G=0,j=0,q=new Date(),t=new Date(),i=w.getService("browserBase"),b=w.getService("browser"),h=w.getService("config"),A=h.getServiceConfig("message")||{},m=window.location.href,L=window.location.hostname,O="ID"+t.getHours()+"H"+t.getMinutes()+"M"+t.getSeconds()+"S"+t.getMilliseconds()+"R"+Math.random(),Q=A.hasOwnProperty("privacy")?A.privacy:[],E={},M={lower:"x",upper:"X",numeric:"9",symbol:"@"},v=P.isiOS,r=navigator.userAgent.indexOf("Chrome")>-1&&P.isAndroid,f=window.devicePixelRatio||1,g=window.screen||{},a=g.width||0,y=g.height||0,N=i.getNormalizedOrientation(),k=!v?a:Math.abs(N)===90?y:a,C=!v?y:Math.abs(N)===90?a:y,J=(window.screen?window.screen.height-window.screen.availHeight:0),I=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight,F=false;function d(S){var R="",T=S.timestamp||(new Date()).getTime();delete S.timestamp;this.type=S.type;this.offset=T-q.getTime();this.screenviewOffset=0;if(S.type===2){p=s;s=T;if(S.screenview.type==="UNLOAD"){this.screenviewOffset=T-p}}else{if(s){this.screenviewOffset=T-s}}
if(!this.type){return}
this.count=(j+=1);this.fromWeb=true;for(R in S){if(S.hasOwnProperty(R)){this[R]=S[R]}}}
E.PVC_MASK_EMPTY=function(R){return""};E.PVC_MASK_BASIC=function(S){var R="XXXXX";if(typeof S!=="string"){return""}
return(S.length?R:"")};E.PVC_MASK_TYPE=function(V){var S,U=0,R=0,T="";if(typeof V!=="string"){return T}
S=V.split("");for(U=0,R=S.length;U<R;U+=1){if(P.isNumeric(S[U])){T+=M.numeric}else{if(P.isUpperCase(S[U])){T+=M.upper}else{if(P.isLowerCase(S[U])){T+=M.lower}else{T+=M.symbol}}}}
return T};E.PVC_MASK_EMPTY.maskType=1;E.PVC_MASK_BASIC.maskType=2;E.PVC_MASK_TYPE.maskType=3;E.PVC_MASK_CUSTOM={maskType:4};function c(R,T){var S=E.PVC_MASK_BASIC;if(typeof T!=="string"){return T}
if(!R){S=E.PVC_MASK_BASIC}else{if(R.maskType===E.PVC_MASK_EMPTY.maskType){S=E.PVC_MASK_EMPTY}else{if(R.maskType===E.PVC_MASK_BASIC.maskType){S=E.PVC_MASK_BASIC}else{if(R.maskType===E.PVC_MASK_TYPE.maskType){S=E.PVC_MASK_TYPE}else{if(R.maskType===E.PVC_MASK_CUSTOM.maskType){if(typeof R.maskFunction==="string"){S=P.access(R.maskFunction)}else{S=R.maskFunction}
if(typeof S!=="function"){S=E.PVC_MASK_BASIC}}}}}}
return S(T)}
function B(R,S){var T;if(!R||!S){return}
for(T in S){if(S.hasOwnProperty(T)){if(T==="value"){S[T]=c(R,S[T])}else{delete S[T]}}}}
function K(Z,aa){var W,U,X,ab,R,T,ac,Y,S,V,ad=document;if(!Z||!aa||!aa.id){return false}
if(aa.idType===-2){V=i.getNodeFromID(aa.id,aa.idType);ad=P.getDocument(V)}
for(W=0,Y=Z.length;W<Y;W+=1){S=Z[W];if(typeof S==="string"){ab=b.queryAll(S,ad);for(U=0,R=ab?ab.length:0;U<R;U+=1){if(ab[U]){T=i.ElementData.prototype.examineID(ab[U]);if(T.type===aa.idType&&T.id===aa.id){return true}}}}else{if(S&&S.id&&S.idType&&aa.idType===S.idType){switch(typeof S.id){case"string":if(S.id===aa.id){return true}
break;case"object":ac=new RegExp(S.id.regex,S.id.flags);if(ac.test(aa.id)){return true}
break}}}}
return false}
function D(U){var T,R,S,V;if(!U||!U.hasOwnProperty("target")){return U}
V=U.target;for(T=0,R=Q.length;T<R;T+=1){S=Q[T];if(K(S.targets,V)){B(S,V.prevState);B(S,V.currState);break}}
return U}
function l(U,S){var T,R,W,V;if(!S||!U){return}
if(U.value){W=c(S,U.value);U.setAttribute("value",W);U.value=W}
if(P.getTagName(U)==="select"){U.selectedIndex=-1;for(T=0,R=U.options.length;T<R;T+=1){V=U.options[T];V.removeAttribute("selected");V.selected=false}}}
function e(ab){var U,T,S,V,X,ac,aa,R,Z,W,Y;if(!ab){return ab}
for(U=0,X=Q.length;U<X;U+=1){ac=Q[U];W=ac.targets;for(T=0,Y=W.length;T<Y;T+=1){Z=W[T];if(typeof Z==="string"){aa=b.queryAll(Z,ab);for(S=0,R=aa.length;S<R;S+=1){V=aa[S];if(V.value){V.setAttribute("value",c(ac,V.value))}}}else{if(typeof Z.id==="string"){V=i.getNodeFromID(Z.id,Z.idType,ab);if(V&&V.value){V.setAttribute("value",c(ac,V.value))}}}}}
return ab}
function u(af,ad,Y,ae){var W,V,Z,X,T,S=[],U,R,ac,aa,ab;if(!af.length){return}
ab=b.queryAll("input, select, textarea",ad);if(!ab||!ab.length){return}
for(W=0,Z=ab.length;W<Z;W+=1){if(ab[W].value){T=i.ElementData.prototype.examineID(ab[W]);if(T.type===-2){U=new i.Xpath(ab[W]);U.applyPrefix(Y);T.id=U.xpath}
S.push({id:T.id,idType:T.type,element:ab[W]})}}
for(W=0,Z=af.length;W<Z;W+=1){ac=Q[af[W].ruleIndex];aa=ac.targets[af[W].targetIndex];if(typeof aa.id==="string"&&aa.idType===-2){for(V=0;V<S.length;V+=1){if(S[V].idType===aa.idType&&S[V].id===aa.id){X=S[V].element;l(X,ac)}}}else{for(V=0;V<S.length;V+=1){if(S[V].idType===aa.idType&&aa.regex.test(S[V].id)){X=S[V].element;l(X,ac)}}}}}
function o(ad,X,af){var V,U,T,W,Z,ag,S,ac,R,ae=[],ab,Y,aa;if(!ad||!af){return null}
for(V=0,Z=Q.length;V<Z;V+=1){ag=Q[V];Y=ag.targets;for(U=0,aa=Y.length;U<aa;U+=1){ab=Y[U];if(typeof ab==="string"){ac=b.queryAll(ab,ad);for(T=0,R=ac.length;T<R;T+=1){W=ac[T];l(W,ag)}}else{if(typeof ab.id==="string"){switch(ab.idType){case-1:case-3:W=i.getNodeFromID(ab.id,ab.idType,ad);l(W,ag);break;case-2:ae.push({ruleIndex:V,targetIndex:U});break;default:break}}else{ae.push({ruleIndex:V,targetIndex:U})}}}}
u(ae,ad,X,af);return ad}
function x(){var T,S,W,X,V,R,U;h=w.getService("config");A=h.getServiceConfig("message")||{};Q=A.hasOwnProperty("privacy")?A.privacy:[];for(T=0,X=Q.length;T<X;T+=1){W=Q[T];R=W.targets;for(S=0,U=R.length;S<U;S+=1){V=R[S];if(typeof V==="object"){if(typeof V.idType==="string"){V.idType=+V.idType}
if(typeof V.id==="object"){V.regex=new RegExp(V.id.regex,V.id.flags)}}}}}
function z(){if(h.subscribe){h.subscribe("configupdated",x)}
x();F=true}
function H(){h.unsubscribe("configupdated",x);F=false}
return{init:function(){if(!F){z()}else{}},destroy:function(){H()},applyPrivacyToDocument:e,applyPrivacyToNode:o,createMessage:function(R){if(typeof R.type==="undefined"){throw new TypeError("Invalid queueEvent given!")}
return D(new d(R))},wrapMessages:function(S){var R={messageVersion:"7.0.0.0",serialNumber:(G+=1),sessions:[{id:O,startTime:t.getTime(),timezoneOffset:t.getTimezoneOffset(),messages:S,clientEnvironment:{webEnvironment:{libVersion:"5.2.0.1768",domain:L,page:m,referrer:document.referrer,screen:{devicePixelRatio:f,deviceWidth:k,deviceHeight:C,deviceToolbarHeight:J,width:I,height:n,orientation:N}}}}]},T=R.sessions[0].clientEnvironment.webEnvironment.screen;T.orientationMode=P.getOrientationMode(T.orientation);return R}}});TLT.addService("serializer",function(core){function serializeToJSON(obj){var str,key,len=0;if(typeof obj!=="object"||obj===null){switch(typeof obj){case"function":case"undefined":return"null";case"string":return'"'+obj.replace(/\"/g,'\\"')+'"';default:return String(obj)}}else{if(Object.prototype.toString.call(obj)==="[object Array]"){str="[";for(key=0,len=obj.length;key<len;key+=1){if(Object.prototype.hasOwnProperty.call(obj,key)){str+=serializeToJSON(obj[key])+","}}}else{str="{";for(key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){str=str.concat('"',key,'":',serializeToJSON(obj[key]),",");len+=1}}}}
if(len>0){str=str.substring(0,str.length-1)}
str+=String.fromCharCode(str.charCodeAt(0)+2);return str}
var configService=core.getService("config"),serialize={},parse={},defaultSerializers={json:(function(){if(typeof window.JSON!=="undefined"){return{serialize:window.JSON.stringify,parse:window.JSON.parse}}
return{serialize:serializeToJSON,parse:function(data){return eval("("+data+")")}}}())},updateConfig=null,isInitialized=false;function addObjectIfExist(paths,rootObj,propertyName){var i,len,obj;paths=paths||[];for(i=0,len=paths.length;i<len;i+=1){obj=paths[i];if(typeof obj==="string"){obj=core.utils.access(obj)}
if(typeof obj==="function"){rootObj[propertyName]=obj;break}}}
function checkParserAndSerializer(){var isParserAndSerializerInvalid;if(typeof serialize.json!=="function"||typeof parse.json!=="function"){isParserAndSerializerInvalid=true}else{if(typeof parse.json('{"foo": "bar"}')==="undefined"){isParserAndSerializerInvalid=true}else{isParserAndSerializerInvalid=parse.json('{"foo": "bar"}').foo!=="bar"}
if(typeof parse.json("[1, 2]")==="undefined"){isParserAndSerializerInvalid=true}else{isParserAndSerializerInvalid=isParserAndSerializerInvalid||parse.json("[1, 2]")[0]!==1;isParserAndSerializerInvalid=isParserAndSerializerInvalid||parse.json("[1,2]")[1]!==2}
isParserAndSerializerInvalid=isParserAndSerializerInvalid||serialize.json({foo:"bar"})!=='{"foo":"bar"}';isParserAndSerializerInvalid=isParserAndSerializerInvalid||serialize.json([1,2])!=="[1,2]"}
return isParserAndSerializerInvalid}
function initSerializerService(config){var format;for(format in config){if(config.hasOwnProperty(format)){addObjectIfExist(config[format].stringifiers,serialize,format);addObjectIfExist(config[format].parsers,parse,format)}}
if(!(config.json&&config.json.hasOwnProperty("defaultToBuiltin"))||config.json.defaultToBuiltin===true){serialize.json=serialize.json||defaultSerializers.json.serialize;parse.json=parse.json||defaultSerializers.json.parse}
if(typeof serialize.json!=="function"||typeof parse.json!=="function"){core.fail("JSON parser and/or serializer not provided in the UIC config. Can't continue.")}
if(checkParserAndSerializer()){core.fail("JSON stringification and parsing are not working as expected")}
if(configService.subscribe){configService.subscribe("configupdated",updateConfig)}
isInitialized=true}
function destroy(){serialize={};parse={};configService.unsubscribe("configupdated",updateConfig);isInitialized=false}
updateConfig=function(){configService=core.getService("config");initSerializerService(configService.getServiceConfig("serializer")||{})};return{init:function(){if(!isInitialized){initSerializerService(configService.getServiceConfig("serializer")||{})}else{}},destroy:function(){destroy()},parse:function(data,type){type=type||"json";return parse[type](data)},serialize:function(data,type){var serializedData;type=type||"json";try{serializedData=serialize[type](data)}catch(e){serializedData="Serialization failed: "+(e.name?e.name+" - ":"")+e.message}
return serializedData}}});TLT.addModule("TLCookie",function(c){var k={},f="CoreID6",d,e,b,i=c.utils;function a(){var m="ABCDEFGHIJKLMNOPQRSTUVWXYZ",n=i.getRandomString(1,m)+i.getRandomString(31,m+"0123456789");i.setCookie(d,n);return i.getCookieValue(d)}
function h(){var m="123456789",n=i.getRandomString(1,m)+i.getRandomString(22,m+"0");i.setCookie(f,n,300000000);return i.getCookieValue(f)}
function j(m){var p=[],o,n;if(m.tlAppKey){e=m.tlAppKey;p.push({name:"X-Tealeaf-SaaS-AppKey",value:e})}
if(m.sessionizationCookieName){d=m.sessionizationCookieName;o=i.getCookieValue(d);if(!o&&d==="TLTSID"){o=a()}
p.push({name:"X-Tealeaf-SaaS-TLTSID",value:o})}
if(m.visitorCookieEnabled){n=i.getCookieValue(f);if(!n){n=h()}
p.push({name:"X-Tealeaf-DAVID",value:n})}
if(p.length){TLT.registerBridgeCallbacks([{enabled:true,cbType:"addRequestHeaders",cbFunction:function(){return p}}])}}
function g(r){var o,n,m=false,q,p=k.appCookieWhitelist;if(!p||!p.length){return m}
for(o=0,n=p.length;o<n&&!m;o+=1){q=p[o];if(q.regex){if(!q.regexp){q.regexp=new RegExp(q.regex,q.flags)}
m=q.regexp.test(r)}else{m=(q===r)}}
return m}
function l(){var q,p,r,s={},n,u=document.cookie,o=[],t="",m="";if(!u){return}
o=u.split("; ");for(q=0,r=o.length;q<r;q+=1){n=o[q];p=n.indexOf("=");if(p>=0){t=decodeURIComponent(n.substr(0,p))}
m=n.substr(p+1);if(g(t)){s[t]=decodeURIComponent(m)}}
c.post({type:14,cookies:s})}
return{init:function(){k=c.getConfig()||{};j(k)},destroy:function(){},onevent:function(m){switch(m.type){case"screenview_load":if(i.getValue(k,"appCookieWhitelist.length",0)){l()}
break;default:break}}}});if(TLT&&typeof TLT.addModule==="function"){TLT.addModule("overstat",function(d){var x=d.utils,n={},z={updateInterval:250,hoverThresholdMin:1000,hoverThresholdMax:2*60*1000,gridCellMaxX:10,gridCellMaxY:10,gridCellMinWidth:20,gridCellMinHeight:20};function v(E){var F=d.getConfig()||{},G=F[E];return typeof G==="number"?G:z[E]}
function D(K,E){var J=x.getValue(K,"webEvent.target",{}),F=x.getValue(J,"element.tagName")||"",G=F.toLowerCase()==="input"?x.getValue(J,"element.type"):"",I=x.getTlType(J),H={type:9,event:{hoverDuration:K.hoverDuration,hoverToClick:x.getValue(E,"hoverToClick")},target:{id:J.id||"",idType:J.idType||"",name:J.name||"",tlType:I,type:F,subType:G,position:{width:x.getValue(J,"element.offsetWidth",0),height:x.getValue(J,"element.offsetHeight",0),relXY:K.gridX+","+K.gridY}}};if((typeof H.target.id)===undefined||H.target.id===""){return}
d.post(H)}
function h(E){if(E&&!E.nodeType&&E.element){E=E.element}
return E}
function q(E){E=h(E);return!E||E===document.body||E===document.html||E===document}
function i(E){E=h(E);if(!E){return null}
return E.parentNode}
function m(E){E=h(E);if(!E){return null}
return E.offsetParent||E.parentElement||i(E)}
function u(E,F){if(!F||F===E){return false}
F=i(F);while(!q(F)){if(F===E){return true}
F=i(F)}
return false}
function B(E){if(E.nativeEvent){E=E.nativeEvent}
return E}
function w(E){return B(E).target}
function g(E){E=h(E);if(!E){return-1}
return E.nodeType||-1}
function A(E){E=h(E);if(!E){return""}
return E.tagName?E.tagName.toUpperCase():""}
function r(E){if(!E){return}
if(E.nativeEvent){E=E.nativeEvent}
if(E.stopPropagation){E.stopPropagation()}else{if(E.cancelBubble){E.cancelBubble()}}}
function l(F){var E=A(F);return g(F)!==1||E==="TR"||E==="TBODY"||E==="THEAD"}
function f(E){if(!E){return""}
if(E.xPath){return E.xPath}
E=h(E);return d.getXPathFromNode(E)}
function y(F,E){var G=n[F];if(G&&G[E]){return G[E]()}}
function t(F,H,G,E){this.xPath=F!==null?f(F):"";this.domNode=F;this.hoverDuration=0;this.hoverUpdateTime=0;this.gridX=Math.max(H,0);this.gridY=Math.max(G,0);this.parentKey="";this.updateTimer=-1;this.disposed=false;this.childKeys={};this.webEvent=E;this.getKey=function(){return this.xPath+":"+this.gridX+","+this.gridY};this.update=function(){var J=new Date().getTime(),I=this.getKey();if(this.hoverUpdateTime!==0){this.hoverDuration+=J-this.hoverUpdateTime}
this.hoverUpdateTime=J;clearTimeout(this.updateTimer);this.updateTimer=setTimeout(function(){y(I,"update")},v("updateInterval"))};this.dispose=function(I){clearTimeout(this.updateTimer);delete n[this.getKey()];this.disposed=true;if(I){var J=this.clone();n[J.getKey()]=J;J.update()}};this.process=function(L){clearTimeout(this.updateTimer);if(this.disposed){return false}
var J=false,K=this,I=null;if(this.hoverDuration>=v("hoverThresholdMin")){this.hoverDuration=Math.min(this.hoverDuration,v("hoverThresholdMax"));J=true;D(this,{hoverToClick:!!L});while(typeof K!=="undefined"){K.dispose(L);K=n[K.parentKey]}}else{this.dispose(L)}
return J};this.clone=function(){var I=new t(this.domNode,this.gridX,this.gridY);I.parentKey=this.parentKey;return I}}
function C(G,E,H,F){return new t(G,E,H,F)}
function p(G){if(G&&G.position){return{x:G.position.x,y:G.position.y}}
G=h(G);var E=G&&G.getBoundingClientRect?G.getBoundingClientRect():null,K=E?E.left:(G?G.offsetLeft:0),J=E?E.top:(G?G.offsetHeight:0),M=K,L=J,H=0,F=0,I=m(G);while(I){if(q(I)){break}
H=I.offsetLeft-(I.scrollLeft||0);F=I.offsetTop-(I.scrollTop||0);if(H!==M||F!==L){K+=H;J+=F;M=H;L=F}
I=m(I)}
if(isNaN(K)){K=0}
if(isNaN(J)){J=0}
return{x:K,y:J}}
function a(I,G,F){I=h(I);var H=p(I),E=G-H.x,J=F-H.y;if(!isFinite(E)){E=0}
if(!isFinite(J)){J=0}
return{x:E,y:J}}
function e(I,L,K){I=h(I);var G=I.getBoundingClientRect?I.getBoundingClientRect():null,N=G?G.width:I.offsetWidth,H=G?G.height:I.offsetHeight,J=N&&N>0?Math.max(N/v("gridCellMaxX"),v("gridCellMinWidth")):v("gridCellMinWidth"),M=H&&H>0?Math.max(H/v("gridCellMaxY"),v("gridCellMinHeight")):v("gridCellMinHeight"),F=Math.floor(L/J),E=Math.floor(K/M);if(!isFinite(F)){F=0}
if(!isFinite(E)){E=0}
return{x:F,y:E}}
function c(I){var J=I,K=I.getKey(),E={},F=null,H=null,G=false;E[K]=true;while(typeof J!=="undefined"){E[J.parentKey]=true;if(J.parentKey===""||J.parentKey===J.getKey()){break}
J=n[J.parentKey]}
for(F in n){if(n.hasOwnProperty(F)&&!E[F]){J=n[F];if(J){if(!G){G=J.process()}else{J.dispose()}}}}}
function s(F,H){var I=null,E=null,G=false;for(E in n){if(n.hasOwnProperty(E)){I=n[E];if(I&&I.domNode===F&&I.getKey()!==H){if(!G){G=I.process()}else{I.dispose()}}}}}
function b(I,G,H){if(!G){G=I.target}
if(q(G)){return null}
if(x.isiOS||x.isAndroid){return null}
var E,N,J,M,K,L,F;if(!l(G)){E=a(G,I.position.x,I.position.y);N=e(G,E.x,E.y);J=new t(G,N.x,N.y,I);M=J.getKey();if(n[M]){J=n[M]}else{n[M]=J}
J.update();if(!H){F=m(G);if(F){L=b(I,F,true);if(L!==null){K=L.getKey();M=J.getKey();if(M!==K){J.parentKey=K}}}
c(J)}}else{J=b(I,m(G),H)}
return J}
function o(E){E=B(E);if(u(E.target,E.relatedTarget)){return}
s(E.target)}
function k(G){var H=null,E=null,F=false;for(E in n){if(n.hasOwnProperty(E)){H=n[E];if(H){if(!F){F=H.process(true)}else{H.dispose()}}}}}
function j(F){var E=x.getValue(F,"target.id");if(!E){return}
switch(F.type){case"mousemove":b(F);break;case"mouseout":o(F);break;case"click":k(F);break}}
return{init:function(){},destroy:function(){var F,E;for(F in n){if(n.hasOwnProperty(F)){n[F].dispose();delete n[F]}}},onevent:function(E){if(typeof E!=="object"||!E.type){return}
j(E)},onmessage:function(E){},createHoverEvent:C,cleanupHoverEvents:c,eventMap:n}})}else{}
if(TLT&&typeof TLT.addModule==="function"){TLT.addModule("performance",function(f){var h={loadReceived:false,unloadReceived:false,perfEventSent:false},g=0;function b(j,i){if(typeof j!=="string"){return false}
if(!i||typeof i!=="object"){return false}
return(i[j]===true)}
function e(k,i){var m=0,j={},n="",l=0;if(!k||typeof k!=="object"||!k.navigationStart){return{}}
m=k.navigationStart;for(n in k){if(Object.prototype.hasOwnProperty.call(k,n)||typeof k[n]==="number"){if(!b(n,i)){l=k[n];if(typeof l==="number"&&l&&n!=="navigationStart"){j[n]=l-m}else{j[n]=l}}}}
return j}
function d(l){var m=0,k,j,i=f.utils;if(l){k=(l.responseEnd>0&&l.responseEnd<l.domLoading)?l.responseEnd:l.domLoading;j=l.loadEventStart;if(i.isNumeric(k)&&i.isNumeric(j)&&j>k){m=j-k}}
return m}
function c(j){var i=f.getStartTime();if(j.timestamp>i&&!g){g=j.timestamp-i}}
function a(m){var k=f.getConfig()||{},j="UNKNOWN",n={type:7,performance:{}},i,o,l;if(!m||h.perfEventSent){return}
o=m.performance||{};l=o.timing;i=o.navigation;if(l){n.performance.timing=e(l,k.filter);n.performance.timing.renderTime=d(l)}else{if(k.calculateRenderTime){n.performance.timing={renderTime:g,calculated:true}}else{return}}
if(k.renderTimeThreshold&&n.performance.timing.renderTime>k.renderTimeThreshold){n.performance.timing.invalidRenderTime=n.performance.timing.renderTime;delete n.performance.timing.renderTime}
if(i){switch(i.type){case 0:j="NAVIGATE";break;case 1:j="RELOAD";break;case 2:j="BACKFORWARD";break;default:j="UNKNOWN";break}
n.performance.navigation={type:j,redirectCount:i.redirectCount}}
f.post(n);h.perfEventSent=true}
return{init:function(){},destroy:function(){},onevent:function(i){if(typeof i!=="object"||!i.type){return}
switch(i.type){case"load":h.loadReceived=true;c(i);break;case"unload":h.unloadReceived=true;if(!h.perfEventSent){a(window)}
break;default:break}},onmessage:function(i){}}})}else{}
TLT.addModule("replay",function(am){var an=am.utils,K=0,ah={scale:0,timestamp:0},aa={},H=null,e=[],ab=0,F=true,ac=null,C=null,W=false,l=0,T="",z="",N=(new Date()).getTime(),k=0,Q=null,ak=null,O=null,D=null,ai=null,U=null,Y=0,v=0,af=null,u={inFocus:false},L=null,A=an.isiOS,x=navigator.userAgent.indexOf("Chrome")>-1&&an.isAndroid,q=window.devicePixelRatio||1,V=(window.screen?window.screen.height-window.screen.availHeight:0),ad=am.getConfig()||{},y=an.getValue(ad,"viewPortWidthHeightLimit",10000),ag=1,E=1,P,ae={cellMaxX:10,cellMaxY:10,cellMinWidth:20,cellMinHeight:20};function s(aq){var ao=false,ap="|button|image|submit|reset|",ar=null;if(typeof aq!=="object"||!aq.type){return ao}
switch(aq.type.toLowerCase()){case"input":ar="|"+(aq.subType||"")+"|";if(ap.indexOf(ar.toLowerCase())===-1){ao=false}else{ao=true}
break;case"select":case"textarea":ao=false;break;default:ao=true;break}
return ao}
function h(ap){var ao=[];ap=ap.parentNode;while(ap){ao.push(ap);ap=ap.parentNode}
return ao}
function w(ao){return an.some(ao,function(aq){var ap=an.getTagName(aq);if(ap==="a"||ap==="button"){return aq}
return null})}
function n(ao){var ap=ao.type,aq=ao.target;if(typeof ap==="string"){ap=ap.toLowerCase()}else{ap="unknown"}
if(ap==="blur"){ap="focusout"}
if(ap==="change"){if(aq.type==="INPUT"){switch(aq.subType){case"text":case"date":case"time":ap=aq.subType+"Change";break;default:ap="valueChange";break}}else{if(aq.type==="TEXTAREA"){ap="textChange"}else{ap="valueChange"}}}
return ap}
function B(ao,aq,ap){var ar=null;if(!ao){return ar}
aq=aq||{};aq.eventOn=F;F=false;if(ap){ar="dcid-"+an.getSerialNumber()+"."+(new Date()).getTime()+"s";window.setTimeout(function(){aq.dcid=ar;am.performDOMCapture(ao,aq)},ap)}else{delete aq.dcid;ar=am.performDOMCapture(ao,aq)}
return ar}
function J(ap,aC,aq){var ax,av,aE=false,ar,aD=false,au,az,aB=null,aw=0,aA,ay,ao,at;if(!ap||(!aC&&!aq)){return aB}
if(!aC&&!(ap==="load"||ap==="unload")){return aB}
ad=am.getConfig()||{};aD=an.getValue(ad,"domCapture.enabled",false);if(!aD||an.isLegacyIE){return aB}
az=an.getValue(ad,"domCapture.triggers")||[];for(ax=0,aA=az.length;!aE&&ax<aA;ax+=1){au=az[ax];if(au.event===ap){if(ap==="load"||ap==="unload"){if(au.screenviews){ao=au.screenviews;for(av=0,at=ao.length;!aE&&av<at;av+=1){ay=ao[av];switch(typeof ay){case"object":if(!ay.rgxp){ay.rgxp=new RegExp(ay.regex,ay.flags)}
aE=ay.rgxp.test(aq);break;case"string":aE=(ay===aq);break;default:break}}}else{aE=true}}else{if(au.targets){aE=(-1!==an.matchTarget(au.targets,aC))}else{aE=true}}}}
if(aE){ar=an.getValue(ad,"domCapture.options",{});aw=au.delay||0;ar.forceFullDOM=!!au.fullDOMCapture;aB=B(window.document,ar,aw)}
return aB}
function Z(az){var aq,ar,at=an.getValue(az,"webEvent.target",{}),ao=at.type,av=at.subType||"",ap=an.getTlType(at),aw=h(an.getValue(at,"element")),ay=null,au=an.getValue(at,"position.relXY"),ax=an.getValue(az,"webEvent.subType",null);aq={timestamp:an.getValue(az,"webEvent.timestamp",0),type:4,target:{id:at.id||"",idType:at.idType,name:at.name,tlType:ap,type:ao,position:{width:an.getValue(at,"size.width"),height:an.getValue(at,"size.height")},currState:az.currState||null},event:{tlEvent:n(an.getValue(az,"webEvent")),type:an.getValue(az,"webEvent.type","UNKNOWN")}};if(av){aq.target.subType=av}
if(au){aq.target.position.relXY=au}
if(typeof az.dwell==="number"&&az.dwell>0){aq.target.dwell=az.dwell}
if(typeof az.visitedCount==="number"){aq.target.visitedCount=az.visitedCount}
if(typeof az.prevState!=="undefined"){aq.prevState=az.prevState}
if(ax){aq.event.subType=ax}
ay=w(aw);aq.target.isParentLink=!!ay;if(ay){if(ay.href){aq.target.currState=aq.target.currState||{};aq.target.currState.href=aq.target.currState.href||ay.href}
if(ay.value){aq.target.currState=aq.target.currState||{};aq.target.currState.value=aq.target.currState.value||ay.value}
if(ay.innerText||ay.textContent){aq.target.currState=aq.target.currState||{};aq.target.currState.innerText=an.trim(aq.target.currState.innerText||ay.innerText||ay.textContent)}}
if(an.isUndefOrNull(aq.target.currState)){delete aq.target.currState}
if(an.isUndefOrNull(aq.target.name)){delete aq.target.name}
if(aq.event.type!=="click"||s(at)){ar=J(aq.event.type,at);if(ar){aq.dcid=ar}}
return aq}
function G(ao){am.post(ao)}
function I(at){var aq=0,ao,au=at.length,aw,av,ar,ax={mouseout:true,mouseover:true},ap=[];for(aq=0;aq<au;aq+=1){aw=at[aq];if(!aw){continue}
if(ax[aw.event.type]){ap.push(aw)}else{for(ao=aq+1;ao<au&&at[ao];ao+=1){if(!ax[at[ao].event.type]){break}}
if(ao<au){av=at[ao];if(av&&aw.target.id===av.target.id&&aw.event.type!==av.event.type){if(aw.event.type==="click"){ar=aw;aw=av;av=ar}
if(av.event.type==="click"){aw.target.position=av.target.position;aq+=1}else{if(av.event.type==="blur"){aw.target.dwell=av.target.dwell;aw.target.visitedCount=av.target.visitedCount;aw.focusInOffset=av.focusInOffset;aw.target.position=av.target.position;aq+=1}}
at[ao]=null;at[aq]=aw}}
ap.push(at[aq])}}
for(aw=ap.shift();aw;aw=ap.shift()){am.post(aw)}
at.splice(0,at.length)}
if(typeof window.onerror!=="function"){window.onerror=function(ar,aq,ao){var ap=null;if(typeof ar!=="string"){return}
ao=ao||-1;ap={type:6,exception:{description:ar,url:aq,line:ao}};l+=1;am.post(ap)};W=true}
function o(ap,ao){u=ao;u.inFocus=true;if(typeof aa[ap]==="undefined"){aa[ap]={}}
aa[ap].focus=u.dwellStart=Number(new Date());aa[ap].focusInOffset=O?u.dwellStart-Number(O):-1;aa[ap].prevState=an.getValue(ao,"target.state");aa[ap].visitedCount=aa[ap].visitedCount+1||1}
function X(ao,ap){e.push(Z({webEvent:ao,id:ap,currState:an.getValue(ao,"target.state")}))}
function d(au,ap){var aq=false,at,ao,ar=0;if(typeof au==="undefined"||au===null||typeof ap==="undefined"||ap===null){return}
if(typeof aa[au]!=="undefined"&&aa[au].hasOwnProperty("focus")){aa[au].dwell=Number(new Date())-aa[au].focus}else{aa[au]={};aa[au].dwell=0}
if(e.length===0){if(!u.inFocus){return}
X(ap,au)}
u.inFocus=false;if(e[e.length-1]){for(ar=e.length-1;ar>=0;ar--){e[ar].target.visitedCount=aa[au].visitedCount}}
ao=e[e.length-1];if(ao){ao.target.dwell=aa[au].dwell;ao.focusInOffset=aa[au].focusInOffset;ao.target.visitedCount=aa[au].visitedCount;if(ao.event.type==="click"){if(!s(ao.target)){ao.target.currState=an.getValue(ap,"target.state")||an.getValue(ap,"target.currState");aq=true}}else{if(ao.event.type==="focus"){aq=true}}
if(aq){ao.event.type="blur";ao.event.tlEvent="focusout";at=J(ao.event.type,ap.target);if(at){ao.dcid=at}}}
I(e)}
function m(at,aq){var ap=false,ar=e.length,ao=ar>0?e[ar-1]:null;if(!ao){return ap}
if(ao.target.id!==at&&ao.target.tltype!=="selectList"){if(aq.type==="focus"||aq.type==="click"||aq.type==="change"){d(ao.target.id,ao);ap=true}}
return ap}
function c(ap,ao){if(typeof aa[ap]!=="undefined"&&!aa[ap].hasOwnProperty("focus")){o(ap,ao)}
X(ao,ap);if(typeof aa[ap]!=="undefined"&&typeof aa[ap].prevState!=="undefined"){if(e[e.length-1].target.tlType==="textBox"||e[e.length-1].target.tlType==="selectList"){e[e.length-1].target.prevState=aa[ap].prevState}}}
function r(au){var at,ax,ap,ao,ar=an.getValue(au,"target.element",{}),ay=an.getValue(au,"target.size.width",ar.offsetWidth),aq=an.getValue(au,"target.size.height",ar.offsetHeight),aw=an.getValue(au,"target.position.x",0),av=an.getValue(au,"target.position.y",0);at=ay?Math.max(ay/ae.cellMaxX,ae.cellMinWidth):ae.cellMinWidth;ax=aq?Math.max(aq/ae.cellMaxY,ae.cellMinHeight):ae.cellMinHeight;ap=Math.floor(aw/at);ao=Math.floor(av/ax);if(!isFinite(ap)){ap=0}
if(!isFinite(ao)){ao=0}
return ap+","+ao}
function b(at,aq){var ap,ao=true,ar=0;if(aq.target.type==="select"&&L&&L.target.id===at){L=null;return}
if(!u.inFocus){o(at,aq)}
ar=e.length;if(ar&&an.getValue(e[ar-1],"event.type")!=="change"){c(at,aq)}
ap=r(aq);ar=e.length;if(aq.position.x===0&&aq.position.y===0&&ar&&an.getValue(e[ar-1],"target.tlType")==="radioButton"){ao=false}else{aq.target.position.relXY=ap}
if(ar&&an.getValue(e[ar-1],"target.id")===at){if(ao){e[ar-1].target.position.relXY=ap}}else{X(aq,at);if(s(aq.target)){d(at,aq)}}
L=aq}
function a(ap){var ao=ap.orientation,aq={type:4,event:{type:"orientationchange"},target:{prevState:{orientation:K,orientationMode:an.getOrientationMode(K)},currState:{orientation:ao,orientationMode:an.getOrientationMode(ao)}}};G(aq);K=ao}
function al(ap){var ao=false;if(!ap){return ao}
ao=(ah.scale===ap.scale&&Math.abs((new Date()).getTime()-ah.timestamp)<500);return ao}
function j(ao){ah.scale=ao.scale;ah.rotation=ao.rotation;ah.timestamp=(new Date()).getTime()}
function M(){var ao,ap;ao=ag-E;if(isNaN(ao)){ap="INVALID"}else{if(ao<0){ap="CLOSE"}else{if(ao>0){ap="OPEN"}else{ap="NONE"}}}
return ap}
function g(at){var ay=document.documentElement,av=document.body,az=window.screen,ap=az.width,aq=az.height,au=an.getValue(at,"orientation",0),aw=!A?ap:Math.abs(au)===90?aq:ap,ar={type:1,clientState:{pageWidth:document.width||(!ay?0:ay.offsetWidth),pageHeight:Math.max((!document.height?0:document.height),(!ay?0:ay.offsetHeight),(!ay?0:ay.scrollHeight)),viewPortWidth:window.innerWidth||ay.clientWidth,viewPortHeight:window.innerHeight||ay.clientHeight,viewPortX:window.pageXOffset||(!ay?(!av?0:av.scrollLeft):ay.scrollLeft||0),viewPortY:window.pageYOffset||(!ay?(!av?0:av.scrollTop):ay.scrollTop||0),deviceOrientation:au,event:an.getValue(at,"type")}},ax=ar.clientState,ao;C=C||ar;if(ax.event==="unload"&&ax.viewPortHeight===ax.pageHeight&&ax.viewPortWidth===ax.pageWidth){if(C.clientState.viewPortHeight<ax.viewPortHeight){ax.viewPortHeight=C.clientState.viewPortHeight;ax.viewPortWidth=C.clientState.viewPortWidth}}
if((ax.viewPortY+ax.viewPortHeight)>ax.pageHeight){ax.viewPortY=ax.pageHeight-ax.viewPortHeight}
if(ax.viewPortY<0){ax.viewPortY=0}
ao=!ax.viewPortWidth?1:(aw/ax.viewPortWidth);ax.deviceScale=ao.toFixed(3);ax.viewTime=0;if(D&&ai){ax.viewTime=ai.getTime()-D.getTime()}
if(at.type==="scroll"){ax.viewPortXStart=C.clientState.viewPortX;ax.viewPortYStart=C.clientState.viewPortY}
return ar}
function p(){var ao;if(ac){ao=ac.clientState;if(ao.viewPortHeight>0&&ao.viewPortHeight<y&&ao.viewPortWidth>0&&ao.viewPortWidth<y){G(ac)}
C=ac;ac=null;D=U||D;ai=null}
p.timeoutId=0}
function R(ao){var ap=null;if(an.isOperaMini){return}
ac=g(ao);if(ao.type==="scroll"||ao.type==="resize"){if(p.timeoutId){window.clearTimeout(p.timeoutId)}
p.timeoutId=window.setTimeout(p,an.getValue(ad,"scrollTimeout",2000))}else{if(ao.type==="touchstart"||ao.type==="load"){if(ac){E=parseFloat(ac.clientState.deviceScale)}}else{if(ao.type==="touchend"){if(ac){ag=parseFloat(ac.clientState.deviceScale);p()}}}}
if(ao.type==="load"||ao.type==="unload"){if(ao.type==="unload"&&N){ap=an.clone(ac);ap.clientState.event="attention";ap.clientState.viewTime=(new Date()).getTime()-N}
p();if(ap){ac=ap;p()}}
return ac}
function aj(ap){var ao=an.getValue(ap,"nativeEvent.touches.length",0);if(ao===2){R(ap)}}
function i(ar){var aq,ap={},at=an.getValue(ar,"nativeEvent.rotation",0)||an.getValue(ar,"nativeEvent.touches[0].webkitRotationAngle",0),au=an.getValue(ar,"nativeEvent.scale",1),ao=null,av={type:4,event:{type:"touchend"},target:{id:an.getValue(ar,"target.id"),idType:an.getValue(ar,"target.idType")}};aq=an.getValue(ar,"nativeEvent.changedTouches.length",0)+an.getValue(ar,"nativeEvent.touches.length",0);if(aq!==2){return}
R(ar);ao={rotation:at?at.toFixed(2):0,scale:ag?ag.toFixed(2):1};ao.pinch=M();ap.scale=E?E.toFixed(2):1;av.target.prevState=ap;av.target.currState=ao;G(av)}
function f(az,ar){var aw=["type","name","target.id"],aq=null,at,av,au=true,ax=10,ap=0,ay=0,ao=0;if(!az||!ar||typeof az!=="object"||typeof ar!=="object"){return false}
for(at=0,av=aw.length;au&&at<av;at+=1){aq=aw[at];if(an.getValue(az,aq)!==an.getValue(ar,aq)){au=false;break}}
if(au){ay=an.getValue(az,"timestamp");ao=an.getValue(ar,"timestamp");if(!(isNaN(ay)&&isNaN(ao))){ap=Math.abs(an.getValue(az,"timestamp")-an.getValue(ar,"timestamp"));if(isNaN(ap)||ap>ax){au=false}}}
return au}
function t(ao){var aq={type:4,event:{type:ao.type},target:{id:an.getValue(ao,"target.id"),idType:an.getValue(ao,"target.idType"),currState:an.getValue(ao,"target.state")}},ap;ap=J(ao.type,ao.target);if(ap){aq.dcid=ap}
G(aq)}
function S(ap){var ao=an.getValue(ad,"geolocation"),aq;if(!ao||!ao.enabled){return}
aq=ao.triggers||[];if(!aq.length){return}
if(aq[0].event===ap){TLT.logGeolocation()}}
return{init:function(){e=[]},destroy:function(){d(H);e=[];if(W){window.onerror=null;W=false}},onevent:function(ap){var at=null,aq=null,ao,ar;if(typeof ap!=="object"||!ap.type){return}
if(f(ap,Q)){Q=ap;return}
Q=ap;at=an.getValue(ap,"target.id");if(Object.prototype.toString.call(aa[at])!=="[object Object]"){aa[at]={}}
m(at,ap);af=new Date();switch(ap.type){case"hashchange":break;case"focus":aq=o(at,ap);break;case"blur":aq=d(at,ap);break;case"click":aq=b(at,ap);break;case"change":aq=c(at,ap);break;case"orientationchange":aq=a(ap);break;case"touchstart":aj(ap);break;case"touchend":aq=i(ap);break;case"loadWithFrames":TLT.logScreenviewLoad("rootWithFrames");break;case"load":K=ap.orientation;D=new Date();if(typeof window.orientation!=="number"||an.isAndroid){ar=(window.screen.width>window.screen.height?90:0);ao=window.orientation;if(Math.abs(ao)!==ar&&!(ao===180&&ar===0)){an.isLandscapeZeroDegrees=true;if(Math.abs(ao)===180||Math.abs(ao)===0){K=90}else{if(Math.abs(ao)===90){K=0}}}}
setTimeout(function(){R(ap)},100);S(ap.type);TLT.logScreenviewLoad("root");break;case"screenview_load":O=new Date();aq=J("load",null,ap.name);break;case"screenview_unload":aq=J("unload",null,ap.name);break;case"resize":case"scroll":if(!ai){ai=new Date()}
U=new Date();R(ap);break;case"unload":if(e!==null){I(e)}
ai=new Date();R(ap);TLT.logScreenviewUnload("root");break;default:t(ap);break}
H=at;return aq},onmessage:function(){}}});TLT.addModule("gestures",function(context){"use strict";var tlTypes={"input:radio":"radioButton","input:checkbox":"checkBox","input:text":"textBox","input:password":"textBox","input:file":"fileInput","input:button":"button","input:submit":"submitButton","input:reset":"resetButton","input:image":"image","input:color":"color","input:date":"date","input:datetime":"datetime","input:datetime-local":"datetime-local","input:number":"number","input:email":"email","input:tel":"tel","input:search":"search","input:url":"url","input:time":"time","input:week":"week","input:month":"month","textarea:":"textBox","select:":"selectList","select:select-one":"selectList","button:":"button","a:":"link"},utils=context.utils,firstTouches=[],tapCount=0,swipeOk=true,timer,gestureOptions={swipeAfterPinchInterval:300,doubleTapInterval:300,preventMouse:true,dragMinDistance:10},hammertimeArray=[],elementArray=[],prevGestureQueueEvent,hammerVersion,startEventTarget,i;function postGestureEvent(queueEvent){context.post(queueEvent);}
function getTlEvent(webEvent){var tlEvent;if(webEvent.type==="drag"){tlEvent="swipe";}else if(webEvent.type==="hold"){tlEvent="tapHold";}else{tlEvent=webEvent.type;}
if(typeof tlEvent==="string"){tlEvent=tlEvent.toLowerCase();}else{tlEvent="unknown";}
return tlEvent;}
function getElementTopLeft(webEvent){var target=webEvent.gesture.srcEvent.target,topLeftY=0,topLeftX=0;while(target&&target.tagName!=="BODY"){topLeftY+=target.offsetTop;topLeftX+=target.offsetLeft;target=target.offsetParent;}
return{topLeftX:topLeftX,topLeftY:topLeftY};}
function getRelativeXY(webEvent,touchX,touchY){var elementX=getElementTopLeft(webEvent).topLeftX,elementY=getElementTopLeft(webEvent).topLeftY,width=webEvent.gesture.srcEvent.target.offsetWidth,height=webEvent.gesture.srcEvent.target.offsetHeight,relX=Math.abs((touchX-elementX)/width).toFixed(1),relY=Math.abs((touchY-elementY)/height).toFixed(1);relX=relX>1||relX<0?0.5:relX;relY=relY>1||relY<0?0.5:relY;return relX+","+relY;}
function cleanGestureQueueEvent(touch,tlType){if(tlType==="radioButton"){delete touch.control.position.relXY;}
if(touch.control.name===null||touch.control.name===undefined||touch.control.name===""){delete touch.control.name;}
if(touch.control.subType===null||touch.control.subType===undefined||touch.control.subType===""){delete touch.control.subType;}}
function createGestureQueueEvent(options){var control,tlEventType=getTlEvent(utils.getValue(options,"webEvent")),target=utils.getValue(options,"webEvent.gesture.srcEvent.target",document.body),tagName=utils.getTagName(target)||"body",elType=utils.getValue(target,"type",""),tlType=tlTypes[tagName.toLowerCase()+":"+elType.toLowerCase()]||tagName,eventSubtype=utils.getValue(options,"webEvent.target.subtype"),tlTouches=[],hammerTouches,hammerTouchesLocation,saveFirstTouch,addFirstTouch,screenWidth,screenHeight,i;if(utils.isiOS&&utils.getOrientationMode(window.orientation)==="LANDSCAPE"){screenWidth=screen.height;screenHeight=screen.width;}else{screenWidth=screen.width;screenHeight=screen.height;}
if(hammerVersion==="1"){hammerTouches=options.webEvent.gesture.touches;hammerTouchesLocation="webEvent.gesture.touches.";saveFirstTouch=(tlEventType==="swipe"&&!(prevGestureQueueEvent!==undefined&&prevGestureQueueEvent.event.tlEvent==="swipe"))||(tlEventType==="pinch"&&!(prevGestureQueueEvent!==undefined&&prevGestureQueueEvent.event.tlEvent==="pinch"));addFirstTouch=tlEventType==="swipe"||tlEventType==="pinch";}else{hammerTouches=options.webEvent.gesture.pointers;hammerTouchesLocation="webEvent.gesture.pointers.";saveFirstTouch=utils.getValue(options,"webEvent.gesture.firstOrLastSwipeEvent")==="first"||utils.getValue(options,"webEvent.gesture.firstOrLastPinchEvent")==="first";addFirstTouch=utils.getValue(options,"webEvent.gesture.firstOrLastSwipeEvent")==="last"||utils.getValue(options,"webEvent.gesture.firstOrLastPinchEvent")==="last";}
for(i=0;i<hammerTouches.length;i+=1){tlTouches.push([{position:{y:utils.getValue(options,hammerTouchesLocation+i+".pageY"),x:utils.getValue(options,hammerTouchesLocation+i+".pageX")},control:{position:{width:utils.getValue(options,hammerTouchesLocation+i+".target.offsetWidth"),height:utils.getValue(options,hammerTouchesLocation+i+".target.offsetHeight"),relXY:getRelativeXY(options.webEvent,utils.getValue(options,hammerTouchesLocation+i+".pageX"),utils.getValue(options,hammerTouchesLocation+i+".pageY")),scrollX:document.documentElement.scrollLeft||document.body.scrollLeft,scrollY:document.documentElement.scrollTop||document.body.scrollTop},id:utils.getValue(options,hammerTouchesLocation+i+".target.id")||context.getXPathFromNode(utils.getValue(options,hammerTouchesLocation+i+".target")),idType:utils.getValue(options,"webEvent.gesture.idType"),name:utils.getValue(options,hammerTouchesLocation+i+".target.name"),tlType:tlType,type:tagName,subType:elType}}]);cleanGestureQueueEvent(tlTouches[i][0],tlType);}
if(saveFirstTouch){for(i=0;i<hammerTouches.length;i+=1){firstTouches.push(tlTouches[i][0]);}}
if(addFirstTouch){for(i=0;i<hammerTouches.length;i+=1){tlTouches[i].unshift(firstTouches[i]);}}
control={type:11,event:{tlEvent:tlEventType,type:tagName},touches:tlTouches};if(tlEventType==="swipe"){control.velocityX=options.webEvent.gesture.velocityX;control.velocityY=options.webEvent.gesture.velocityY;}
if(tlEventType==="swipe"){control.direction=options.webEvent.gesture.direction;if(control.direction===2){control.direction="left";}
if(control.direction===4){control.direction="right";}
if(control.direction===8){control.direction="up";}
if(control.direction===16){control.direction="down";}}
if(tlEventType==="pinch"){if(options.webEvent.gesture.scale>1){control.direction="open";}else if(options.webEvent.gesture.scale<1){control.direction="close";}}
if(eventSubtype!==undefined&&eventSubtype!==null){control.event.subType=eventSubtype;}
return control;}
function handleGesture(id,webEvent){if(hammerVersion==="1"){if(webEvent.type==="doubletap"||webEvent.type==="hold"||webEvent.type==="tap"){postGestureEvent(createGestureQueueEvent({webEvent:webEvent,id:id,currState:utils.getValue(webEvent,"target.state")}));}else if(webEvent.type==="release"&&prevGestureQueueEvent!==undefined&&(prevGestureQueueEvent.event.tlEvent==="swipe"||prevGestureQueueEvent.event.tlEvent==="pinch")){postGestureEvent(prevGestureQueueEvent);prevGestureQueueEvent=undefined;firstTouches=[];}else if(webEvent.type==="drag"||webEvent.type==="pinch"){prevGestureQueueEvent=createGestureQueueEvent({webEvent:webEvent,id:id,currState:utils.getValue(webEvent,"target.state")});}}else{if(webEvent.type==="doubletap"||webEvent.type==="tapHold"||webEvent.type==="tap"){postGestureEvent(createGestureQueueEvent({webEvent:webEvent,id:id,currState:utils.getValue(webEvent,"target.state")}));}else if(webEvent.gesture.firstOrLastSwipeEvent==="last"||webEvent.gesture.firstOrLastPinchEvent==="last"){postGestureEvent(createGestureQueueEvent({webEvent:webEvent,id:id,currState:utils.getValue(webEvent,"target.state")}));firstTouches=[];}else if(webEvent.gesture.firstOrLastSwipeEvent==="first"||webEvent.gesture.firstOrLastPinchEvent==="first"){createGestureQueueEvent({webEvent:webEvent,id:id,currState:utils.getValue(webEvent,"target.state")});}}}
function handleTap(id,webEvent){var doubleTapInterval=gestureOptions.doubleTapInterval;tapCount+=1;if(tapCount===1){timer=setTimeout(function(){handleGesture(id,webEvent);tapCount=0;},doubleTapInterval);}else{clearTimeout(timer);webEvent.type="doubletap";handleGesture(id,webEvent);tapCount=0;}}
function handlePinchAndSwipe(id,webEvent){var swipeAfterPinchInterval=gestureOptions.swipeAfterPinchInterval;if(swipeOk&&(webEvent.type==="swipe"||webEvent.type==="drag")){handleGesture(id,webEvent);}
if(webEvent.type==="pinch"){handleGesture(id,webEvent);swipeOk=false;timer=setTimeout(function(){swipeOk=true;},swipeAfterPinchInterval);}}
function createEvent(eventData){var webEvent;if(document.createEvent){webEvent=document.createEvent("HTMLEvents");webEvent.initEvent(eventData.type,true,true);webEvent.gesture=eventData;}else{webEvent=document.createEventObject();webEvent.eventType=eventData.type;webEvent.gesture=eventData;}
return webEvent;}
function callEvent(ev,target){if(target===undefined){return;}
if(document.createEvent){target.dispatchEvent(ev);}else{target.fireEvent("on"+ev.eventType,ev);}}
function callTealeafEvent(eventData){var eventName=eventData.type,target=eventData.target;if(eventName==="tap"){callEvent(createEvent(eventData),target);startEventTarget=undefined;}else if(eventName==="press"){eventData.type="tapHold";callEvent(createEvent(eventData),target);startEventTarget=undefined;}else if(eventName==="panstart"){eventData.type="swipe";eventData.firstOrLastSwipeEvent="first";callEvent(createEvent(eventData),target);startEventTarget=target;}else if(eventName==="panend"){eventData.type="swipe";eventData.firstOrLastSwipeEvent="last";callEvent(createEvent(eventData),startEventTarget);startEventTarget=undefined;}else if(eventName==="pinchstart"){eventData.type="pinch";eventData.firstOrLastPinchEvent="first";callEvent(createEvent(eventData),target);startEventTarget=target;}else if(eventName==="pinchend"){eventData.type="pinch";eventData.firstOrLastPinchEvent="last";callEvent(createEvent(eventData),startEventTarget);startEventTarget=undefined;}}
return{init:function(){var cssSelectors,cssSelectorArray,elements=[],gestureEvents=TLT.getCoreConfig().modules.gestures.events,elementPosition,eventsToEnable="",hammertime,eventName,counter=0,j,k;if(typeof Hammer==="function"){hammerVersion=Hammer.VERSION.split(".")[0];}else{return;}
if(hammerVersion==="1"){Hammer.defaults.behavior.userSelect="auto";Hammer.defaults.behavior.userDrag="auto";Hammer.defaults.behavior.contentZooming="auto";Hammer.defaults.behavior.touchCallout="default";Hammer.defaults.behavior.touchAction="auto";}
if(context.getConfig()){if(context.getConfig().options){utils.extend(true,gestureOptions,context.getConfig().options);}}
for(i=0;i<gestureEvents.length;i+=1){eventName=gestureEvents[i].name;if(eventName==="tap"){eventsToEnable+="tap ";}
if(eventName==="swipe"){eventsToEnable+="panstart panend ";}
if(eventName==="tapHold"){eventsToEnable+="press ";}
if(eventName==="pinch"){eventsToEnable+="pinchstart pinchend";}
cssSelectors=gestureEvents[i].target;if(cssSelectors===window){if(hammerVersion==="1"){hammertimeArray.push(new Hammer(window,gestureOptions));}}else{if(cssSelectorArray!==undefined&&cssSelectorArray!==null){cssSelectorArray=cssSelectors.split(", ");for(j=0;j<cssSelectorArray.length;j+=1){elements=TLT.getService('browser').queryAll(cssSelectorArray[j],document);for(k=0;k<elements.length;k+=1){elementPosition=utils.indexOf(elementArray,elements[k]);if(elementPosition===-1){elementArray.push(elements[k]);counter+=1;}}}}}}
if(hammerVersion==="1"){for(i=0;i<elementArray.length;i+=1){hammertimeArray.push(new Hammer(elementArray[i],gestureOptions));}}else{if(elementArray.length!==0){for(i=0;i<elementArray.length;i+=1){hammertime=new Hammer.Manager(elementArray[i]);hammertime.add(new Hammer.Tap({event:'tap'}));hammertime.add(new Hammer.Pan({direction:Hammer.DIRECTION_ALL}));hammertime.add(new Hammer.Press());hammertime.add(new Hammer.Pinch({enable:true}));hammertime.on(eventsToEnable,function hammertimeOnCallback(eventData){if((eventData.type==="panend"||eventData.type==="pinchend")&&elementArray.indexOf(startEventTarget)>-1){callTealeafEvent(eventData);}else if(elementArray.indexOf(eventData.target)>-1){callTealeafEvent(eventData);}});hammertimeArray.push(hammertime);}}else{if(window.style===undefined){window.style=[];}
hammertime=new Hammer.Manager(window);hammertime.add(new Hammer.Tap({event:'tap'}));hammertime.add(new Hammer.Pan({direction:Hammer.DIRECTION_ALL}));hammertime.add(new Hammer.Press());hammertime.add(new Hammer.Pinch({enable:true}));hammertime.on(eventsToEnable,function hammertimeOnCallback(eventData){callTealeafEvent(eventData);});hammertimeArray.push(hammertime);}}},destroy:function(){if(hammertimeArray!==undefined&&hammertimeArray!==null){for(i=0;i<hammertimeArray.length;i+=1){hammertimeArray[i].off("tap press pinchstart pinchend panstart panend");hammertimeArray[i].enabled=false;}}
hammertimeArray=[];elementArray=[];},onevent:function(webEvent){var id=null,position;if(typeof webEvent!=="object"||!webEvent.type||!webEvent.gesture||!webEvent.target){return;}
position=utils.indexOf(elementArray,webEvent.target.element);if(webEvent.gesture.pointerType==="mouse"&&gestureOptions.preventMouse){return;}
id=utils.getValue(webEvent,"target.id");switch(webEvent.type){case"tap":handleTap(id,webEvent);break;case"swipe":handlePinchAndSwipe(id,webEvent);break;case"pinch":handlePinchAndSwipe(id,webEvent);break;case"tapHold":handleGesture(id,webEvent);break;case"hold":handleGesture(id,webEvent);break;case"drag":handlePinchAndSwipe(id,webEvent);break;case"release":handleGesture(id,webEvent);break;}}};});TLT.addModule("digitalData",function(context){function customEvent(description,action,value){var jsonMsg={type:5,fromWeb:true,customEvent:{data:{description:description,action:action,value:value}}}
if(description,action,value){context.post(jsonMsg);}};function parseQueryString(){var q=(location.search.length>1?location.search.substring(1).split("&"):[]);var qKeys={};for(var i=0;i<q.length;i++){qKeys[q[i].match(/^[^=^,^.^%^-^20]+/)]=q[i].replace(/^[^=^,^.^%^-^20]+=?/,"");};if(i>0){customEvent("QueryString Values",qKeys);};};function parseUTAG(utagData,whitelist){var i,len,prop,parsedUTAG={};if(!utagData||typeof utagData!=="object"||!whitelist||!whitelist.length){return parsedUTAG;}
for(i=0,len=whitelist.length;i<len;i+=1){prop=whitelist[i];try{parsedUTAG[prop]=context.utils.clone(utagData[prop]);}catch(e){context.utils.clog("UTAG error copying property: "+prop,e);}}
return parsedUTAG;}
return{init:function(){customEvent("Domain - "+location.hostname,"Retrieve",location.hostname);customEvent("Referrer","Retrieve",document.referrer);try{parseQueryString();}catch(e){customEvent("QueryString",{"description":"QueryString Logging Error","error":e});};try{if(typeof utag.data!=="undefined"){var whitelist=["ancillary_product_revenue","ancillary_product_name","channel","cp.dtCookie","cp.ROUTEID","cp.UAC","dom.pathname","dom.referrer","dom.title","error_id","global_page_name","qp.firstName","qp.lastName","login_status","low_vs_ribprice_d","low_vs_ribprice_r","loyalty_id","page_name","purchase_id","PNR","search_origin_city","search_departure_date","search_destination_city","search_return_date","sucessCheckInEvnt","ticket_type_formated"];customEvent("UTAG Data","Recorded",parseUTAG(utag.data,whitelist));}}catch(e){customEvent("UTAG Data",{"description":"UTAG Module Failed","error":e});}},destroy:function(){}}});(function(){"use strict";var TLT=window.TLT,changeTarget;TLT.registerBridgeCallbacks([{enabled:true,cbType:"messageRedirect",cbFunction:function(msg,msgObj){if(msgObj&&msgObj.type===4){if(msgObj.target){var targetid=msgObj.target.id;if(msgObj.target&&(/yourAccountForm\.securityQuestions[0-9]\.question|expirationDateYear|expirationDateMonth|expirationMonth|expirationYear/.test(msgObj.target.id))){if(typeof msgObj.target.prevState==="object"){for(var prop in msgObj.target.prevState){if(typeof msgObj.target.prevState[prop]==="string"){msgObj.target.prevState[prop]="X";}else if(typeof msgObj.target.prevState[prop]==="number"){msgObj.target.prevState[prop]=0;}else{delete msgObj.target.prevState[prop];}}}
if(typeof msgObj.target.currState==="object"){for(var prop in msgObj.target.currState){if(typeof msgObj.target.currState[prop]==="string"){msgObj.target.currState[prop]="X";}else if(typeof msgObj.target.currState[prop]==="number"){msgObj.target.currState[prop]=0;}else{delete msgObj.target.currState[prop];}}}}}}
return msgObj;}}]);if(TLT.getFlavor()==="w3c"&&TLT.utils.isLegacyIE){changeTarget="input, select, textarea, button";}
var config={core:{inactivityTimeout:1000*60*20,modules:{digitalData:{enabled:true},gestures:{enabled:true,events:[{name:"tap",target:window},{name:"hold",target:window},{name:"drag",target:window},{name:"release",target:window},{name:"pinch",target:window}]},overstat:{enabled:true,events:[{name:"click",recurseFrames:true},{name:"mousemove",recurseFrames:true},{name:"mouseout",recurseFrames:true}]},performance:{events:[{name:"load",target:window},{name:"unload",target:window}]},replay:{events:[{name:"change",target:changeTarget,recurseFrames:true},{name:"click",recurseFrames:true},{name:"hashchange",target:window},{name:"focus",target:"input, select, textarea, button",recurseFrames:true},{name:"blur",target:"input, select, textarea, button",recurseFrames:true},{name:"load",target:window},{name:"unload",target:window},{name:"resize",target:window},{name:"scroll",target:window},{name:"orientationchange",target:window},{name:"touchend"},{name:"touchstart"}]},TLCookie:{enabled:true}},sessionDataEnabled:false,sessionData:{sessionValueNeedsHashing:true,sessionQueryName:"sessionID",sessionQueryDelim:";",sessionCookieName:"jsessionid"},screenviewAutoDetect:true,framesBlacklist:["#b__container"]},services:{queue:{asyncReqOnUnload:false,queues:[{qid:"DEFAULT",endpoint:"//uscollector.tealeaf.ibmcloud.com/collector/collectorPost",maxEvents:25,timerInterval:60000,maxSize:20000,checkEndpoint:true,endpointCheckTimeout:2000,encoder:"gzip"}]},message:{privacy:[{targets:["input[type=password]",".tlPrivate",{id:"account1_1",idType:-1},{id:"creditCardNumber",idType:-1},{id:"credit_card_number",idType:-1},{id:"security_code",idType:-1},{id:"cardNumber",idType:-1},{id:"cardCcv",idType:-1},{id:"cvNumber",idType:-1},{id:"expirationMonth",idType:-1},{id:"expirationYear",idType:-1},{id:"expirationDateMonth",idType:-1},{id:"expirationDateYear",idType:-1},{id:"passportForm.number",idType:-1},{id:"passportForm.DocumentNumber",idType:-1},{id:"passportNumber",idType:-1},{id:"residentCardForm.number",idType:-1},{id:"permanentResidentCardNumber",idType:-1},{id:"arcNumber",idType:-1},{id:{regex:"passportForm.*passportDocumentNumber"},idType:-1},{id:{regex:"passportForm.expirationDate.*"},idType:-1},{id:{regex:"residentCardForm.expirationDate.*"},idType:-1},{id:{regex:"yourAccountForm\.securityQuestions.*"},idType:-1},{id:{regex:"securityAnswerText.*"},idType:-1},{id:{regex:"securityQuestionAndAnswerList.*"},idType:-1},{id:{regex:".*redressNumber"},idType:-1},{id:{regex:".*travelerNumber"},idType:-1},{id:{regex:".*TravelerNumber"},idType:-1}]}]},serializer:{json:{defaultToBuiltin:true,parsers:["JSON.parse"],stringifiers:["JSON.stringify"]}},encoder:{gzip:{encode:"window.pako.gzip",defaultEncoding:"gzip"}},domCapture:{diffEnabled:true,options:{maxMutations:500,maxLength:2000000,captureFrames:false,removeScripts:false}},browser:{useCapture:true,sizzleObject:"window.Sizzle",jQueryObject:"window.jQuery"}},modules:{gestures:{options:{doubleTapInterval:300}},overstat:{hoverThreshold:3000},performance:{calculateRenderTime:true,renderTimeThreshold:600000,filter:{navigationStart:true,unloadEventStart:true,unloadEventEnd:true,redirectStart:true,redirectEnd:true,fetchStart:true,domainLookupStart:true,domainLookupEnd:true,connectStart:true,connectEnd:true,secureConnectionStart:true,requestStart:true,responseStart:true,responseEnd:true,domLoading:true,domInteractive:true,domContentLoadedEventStart:true,domContentLoadedEventEnd:true,domComplete:true,loadEventStart:true,loadEventEnd:true}},replay:{geolocation:{enabled:false,triggers:[{event:"load"}]},domCapture:{enabled:true,triggers:[{event:"click",targets:[".seat-wrapper","a","a *","button","button *","input","select","select *","nav","nav *","option","option *","textarea","textarea *","output","label","label *","legend","legend *","map","map *","area","details","summary","dialog","menuitem","[onclick]","[onmousedown]","[onmouseup]"]},{event:"change"},{event:"load",delay:10}]}},TLCookie:{appCookieWhitelist:[{regex:".*"}],tlAppKey:"90a621556f0446a583888798877112b1",sessionizationCookieName:"TLTSID"}}};var getLocation=function(href){var getURL=document.createElement("a");getURL.href=href;return getURL;};var getHostname=getLocation(document.URL).hostname;if(getHostname.indexOf("www.aa")>-1||getHostname.indexOf("www.americanairlines")>-1||getHostname.indexOf("www.american-airlines")>-1||getHostname==="americanairlines.eu.amadeus.com"||getHostname==="americanairlines.amadeus.com"||getHostname==="americanairlines.com"||getHostname==="mobile.aa.com"){config.modules.TLCookie.tlAppKey="90a621556f0446a583888798877112b1";}else{config.modules.TLCookie.tlAppKey="8dc7f4ceb5b84f80954bd7632585c379";}
if(getHostname==="mobile.aa.com"){config.modules.replay.domCapture.enabled=true;config.services.domCapture.diffEnabled=true;config.modules.replay.domCapture.triggers=[{event:"click"},{event:"change"},{event:"load",delay:10}];}
var legacyIE=false;if(document.documentMode===8||TLT.utils.isLegacyIE){legacyIE=true;}
if(document.documentMode===9){config.modules.replay.domCapture.enabled=false;config.services.domCapture.diffEnabled=false;}
if(document.documentMode===10){config.modules.replay.domCapture.enabled=true;config.services.domCapture.diffEnabled=false;config.modules.replay.domCapture.triggers=[{event:"click",targets:["a","a *","button","button *"]},{event:"change"},{event:"load",delay:200}]}
if(typeof window.TLT!=="undefined"&&typeof window.TLT.isInitialized==="function"&&!(TLT.isInitialized())&&typeof config==="object"&&legacyIE===false){window.TLT.init(config);}}());try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;u.ev={"view":1};u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){function AJAXUpdate(responseMarkup){var targetDiv=document.getElementById("target_div");if(!targetDiv||!responseMarkup){return;}
targetDiv.innerHtml=responseMarkup;if(TLT&&TLT.rebind){TLT.rebind(targetDiv);}}}};utag.o[loader].loader.LOAD(id);}("267","aa.main"));}catch(error){utag.DB(error);}
