/*
 classList polyfill - https://github.com/remy/polyfills/blob/master/classList.js
*/
!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

 document.addEventListener('DOMContentLoaded', function(event) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.withCredentials = true;
  xmlhttp.onload = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var cart_status = JSON.parse(xmlhttp.responseText);
      if (cart_status) {
        if (cart_status.total_cart_items && document.querySelector('.shopping-cart-count')) {
          document.querySelector('.shopping-cart-count').innerHTML = cart_status.total_cart_items;
          document.querySelector('.shopping-cart-count').classList.remove('start');

          if(cart_status.total_cart_items.toString().length === 2) {
            document.querySelector('.shopping-cart-count').style.fontSize = '0.9rem';
          } else if(cart_status.total_cart_items.toString().length > 2) {
            document.querySelector('.shopping-cart-count').style.fontSize = '0.6rem';
          } else {
            document.querySelector('.shopping-cart-count').style.fontSize = '1rem';
          }
        }
        if (cart_status.logged_in) {
          document.querySelector('.dd-account').classList.remove('hide');
          document.querySelector('.dd-logout').classList.remove('hide');
          document.querySelector('.dd-login-register').classList.add('hide');
        } else {
          document.querySelector('.dd-account').classList.add('hide');
          document.querySelector('.dd-logout').classList.add('hide');
          document.querySelector('.dd-login-register').classList.remove('hide');
        }
      }
    }
  };
  xmlhttp.open('GET', ECOMM_CART_URL, true);
  xmlhttp.send();

  document.querySelector('.shopping-cart-container').addEventListener('click', function(event) {
    this.classList.toggle('show-menu');
  }, false);

  document.body.addEventListener('click', function(event) {
    if(document.querySelector('.shopping-cart-container').classList.contains('show-menu') &&
      !isDescendant(document.querySelector('.shopping-cart-content-container'), event.target)) {
      document.querySelector('.shopping-cart-container').classList.toggle('show-menu');
    }
  });

  var dropdownItems = document.querySelectorAll('.shopping-cart-dropdown a');
  for(var i = 0; i < dropdownItems.length; i++) {
    var mouseDown = false;
    dropdownItems[i].addEventListener('mousedown', function(event) {
      mouseDown = true;
    });
    dropdownItems[i].addEventListener('focus', function(event) {
      if(!mouseDown) {
        if(!document.querySelector('.shopping-cart-container').classList.contains('show-menu')) {
          document.querySelector('.shopping-cart-container').classList.toggle('show-menu');
        }
        mouseDown = false;
      }
    });
    dropdownItems[i].addEventListener('blur', function() {
      if(!mouseDown) {
        document.querySelector('.shopping-cart-container').classList.toggle('show-menu');
        mouseDown = false;
      }
    });
  }
}, false);

function isDescendant(parent, child) {
     var node = child.parentNode;
     while (node != null) {
         if (node == parent) {
             return true;
         }
         node = node.parentNode;
     }
     return false;
}
