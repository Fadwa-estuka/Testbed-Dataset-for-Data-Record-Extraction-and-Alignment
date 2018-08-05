define("page-filters",["widget-lite"],function(a){"use strict";return a.extend({offsetHeight:0,navIsOpen:!1,init:function(){this.getElements(),this.bindEvents()},getElements:function(){this.button=this.rootElement.querySelector(".page-filters__button"),this.button.style.pointerEvents="auto",this.body=this.rootElement.querySelector(".page-filters__body"),this.offset=document.querySelector(".page-filters__offset")||document.createElement("div"),document.addEventListener("breakPointChange",function(){this.navIsOpen&&(this.offsetHeight=this.body.offsetHeight,this.setOffset(this.offset,this.offsetHeight))}.bind(this),!1),this.lastItem()},bindEvents:function(){this.button.onclick=function(a){a?a.preventDefault():window.event.returnValue=!1,this.isAnimating||(this.offsetHeight=this.body.offsetHeight,this.button.classList.contains("page-filters__button--open")?(this.closeMenu(),this.button.classList.remove("page-filters__button--open")):(this.animating=!0,this.openMenu(),this.button.classList.add("page-filters__button--open")),this.isAnimating=!0,setTimeout(function(){this.isAnimating=!1}.bind(this),500))}.bind(this)},closeMenu:function(){this.navIsOpen=!1,this.body.classList.remove("page-filters__body--open"),setTimeout(function(){this.body.style.visibility="hidden"}.bind(this),400),this.offsetHeight=0,this.setOffset(this.offset,this.offsetHeight)},openMenu:function(){this.navIsOpen=!0,this.body.style.visibility="visible",this.body.classList.add("page-filters__body--open"),this.setOffset(this.offset,this.offsetHeight)},lastItem:function(){this.lastItem=document.createElement("a"),this.lastItem.href="#",this.lastItem.textContent=" ",this.lastItem.onfocus=function(){this.button.focus()}.bind(this),this.body.appendChild(this.lastItem)},setOffset:function(a,b){a.style.cssText=["-webkit-transform: translateY("+b+"px)","-moz-transform: translateY("+b+"px)","-ms-transform: translateY("+b+"px)","transform: translateY("+b+"px)","padding-bottom: "+b+"px"].join(";")}})});