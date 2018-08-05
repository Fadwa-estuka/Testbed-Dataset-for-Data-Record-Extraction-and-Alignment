!function(e){"use strict";e.clubNavigation=function(e,t){this.element=e,this.setListeners()},e.clubNavigation.prototype.setListeners=function(){var e=this;this.element.querySelector(".clubNavigation .clubSitesHeading").addEventListener("click",function(t){e.element.classList.toggle("open")})};for(var t=document.querySelectorAll('.clubNavigation[data-script="pl_global-header"]'),n=0;n<t.length;n++)new e.clubNavigation(t[n],{})}(PULSE.app),function(e,t,n){"use strict";e.mainNavigation=function(e,t){var n=this;n.element=e,n.mainMoreLinksButton=n.element.querySelector(".moreLinks"),n.mobileMenuExpander=n.element.querySelector("#hamburgerToggle"),n.mainSearchButton=n.element.querySelector(".headerSearchButton"),n.searchBarContainer=n.element.querySelector(".searchBarContainer"),n.searchInputContainer=n.element.querySelector(".searchInputContainer"),n.mainLogoElement=document.getElementById("mainLogo"),n.pageLinks=n.element.querySelector(".pageLinks"),n.dropDownLinks=n.element.querySelectorAll(".pageLinks > li:not(.noDrop)"),n.mobileNav=n.pageLinks.querySelectorAll('[role="button"].navLink'),n.navElement=n.element.querySelector(".navBar"),n.pageLinks=n.element.querySelector(".headerSearchButton"),n.subNav=document.querySelector(".subNav .moreList"),n.subNavMore=document.querySelector(".subNav .moreListBtn"),n.globalNav=document.querySelector(".masthead .fixedContainer"),n.masthead=document.querySelector(".masthead"),n.clubsList=document.querySelector("nav.clubNavigation"),n.navbarOffsetTop=n.navElement.offsetHeight,n.bottom=n.navElement.offsetTop,n.pageOffsetTop=window.pageYOffset,n.setListeners()},e.mainNavigation.prototype.setListeners=function(){var e=this;n.event.listenForMultiple(e.mobileMenuExpander,["keypress","click"],function(){document.querySelector("body").classList.toggle("mastheadOpen")}),n.event.listenForMultiple(e.subNavMore,["keypress","click"],function(){e.subNav.classList.toggle("open")});for(var t=0;t<e.dropDownLinks.length;t++)e.dropDownLinks[t].addEventListener("keypress",function(e){13===e.which&&(e.preventDefault(),n.style.toggleClass(this,"open"))}),e.dropDownLinks[t].addEventListener("blur",function(e){e.relatedTarget&&null!==e.relatedTarget.closest(".dropdown")||n.style.removeClass(this,"open")},!0);e.mainSearchButton&&n.event.listenForMultiple(e.mainSearchButton,["keypress","click"],function(){n.style.toggleClass(e.mainSearchButton,"active"),n.style.toggleClass(e.searchBarContainer,"open"),n.style.toggleClass(e.masthead,"searchOpen"),e.searchInputContainer.focus()});for(var a=0;a<e.mobileNav.length;a++)n.event.listenForMultiple(e.mobileNav[a],["keypress","click"],function(t){var n=t.target.getAttribute("data-nochildrenlink");if(n)window.location.href=n;else{for(var a=0;a<e.mobileNav.length;a++)e.mobileNav[a].classList.remove("active");t.target.classList.add("active"),t.target.classList.contains("clubListMobileButton")?e.clubsList.classList.add("open"):e.clubsList.classList.remove("open")}});var r=function(e){e.pageOffsetTop=window.pageYOffset;var t=Math.max(120-e.pageOffsetTop,60);e.mainLogoElement.clientHeight!==t&&(e.mainLogoElement.style.height=t+"px"),e.pageOffsetTop>=e.navbarOffsetTop?(e.navElement.classList.add("fixed"),e.globalNav.classList.add("fixed")):(e.navElement.classList.remove("fixed"),e.globalNav.classList.remove("fixed"))},o={method:function(e){r(e.scope)},args:{scope:e}};n.event.windowOnScroll.add(o)};var a=document.querySelectorAll('.navContainer[data-script="pl_global-header"]');Array.prototype.map.call(a,function(t){t=new e.mainNavigation(t,{})})}(PULSE.app,PULSE.app.common,PULSE.core),function(e,t,n){"use strict";e.searchHeaderRedirect=function(e,t){var n=this;n.element=e,n.url="/search",n.searchInputContainer=n.element.querySelector(".searchInputContainer"),n.searchButtonContainer=n.element.querySelector(".searchButtonContainer"),n.term="",n.setListeners()},e.searchHeaderRedirect.prototype.setListeners=function(){var e=this;e.searchInputContainer.addEventListener("keypress",function(t){var n=t.keyCode||t.which;"13"==n&&e.searchTerm()}),e.searchInputContainer.addEventListener("keyup",function(n){e.searchInputContainer.value.length>0?t.style.addClass(e.searchButtonContainer,"active"):t.style.removeClass(e.searchButtonContainer,"active")}),e.searchButtonContainer.addEventListener("click",function(t){e.searchTerm()})},e.searchHeaderRedirect.prototype.searchTerm=function(){var e=this;if(t.style.hasClass(e.searchButtonContainer,"active")){var n=e.url,a=e.searchInputContainer.value;a&&""!=a&&(n+="?term="+a),window.location.href=n}};for(var a=document.querySelectorAll('[data-widget="search-header-redirect"]'),r=0;r<a.length;r++)new e.searchHeaderRedirect(a[r],{})}(PULSE.app,PULSE.core,PULSE.app.common);