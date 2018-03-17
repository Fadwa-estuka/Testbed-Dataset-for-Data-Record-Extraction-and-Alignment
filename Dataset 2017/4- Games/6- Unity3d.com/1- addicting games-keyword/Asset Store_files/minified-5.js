jQuery.cookie = function(g, h, a) {
  if(typeof h != "undefined" || g && typeof g != "string") {
    if(typeof g == "string") {
      a = a || {};
      if(h === null) {
        h = "", a.expires = -1
      }
      var d = "";
      if(a.expires && (typeof a.expires == "number" || a.expires.toUTCString)) {
        typeof a.expires == "number" ? (d = new Date, d.setTime(d.getTime() + a.expires * 864E5)) : d = a.expires, d = "; expires=" + d.toUTCString()
      }
      var c = a.path ? "; path=" + a.path : "", e = a.domain ? "; domain=" + a.domain : "", a = a.secure ? "; secure" : "";
      document.cookie = g + "=" + encodeURIComponent(h) + d + c + e + a
    }else {
      for(d in g) {
        jQuery.cookie(d, g[d], h || a)
      }
    }
  }else {
    h = {};
    if(document.cookie) {
      a = document.cookie.split(";");
      for(d = 0;d < a.length;d++) {
        if(c = jQuery.trim(a[d]), g) {
          if(c.substr(0, g.length + 1) == g + "=") {
            h = decodeURIComponent(c.substr(g.length + 1));
            break
          }
        }else {
          e = c.indexOf("="), h[c.substr(0, e)] = decodeURIComponent(c.substr(e + 1))
        }
      }
    }
    return h
  }
};
(function(g) {
  g.address = function() {
    var h = function(a) {
      a = g.extend(g.Event(a), function() {
        for(var a = {}, b = g.address.parameterNames(), c = 0, d = b.length;c < d;c++) {
          a[b[c]] = g.address.parameter(b[c])
        }
        return{value:g.address.value(), path:g.address.path(), pathNames:g.address.pathNames(), parameterNames:b, parameters:a, queryString:g.address.queryString()}
      }.call(g.address));
      g(g.address).trigger(a);
      return a
    }, a = function(a) {
      return Array.prototype.slice.call(a)
    }, d = function() {
      g().bind.apply(g(g.address), Array.prototype.slice.call(arguments));
      return g.address
    }, c = function() {
      g().unbind.apply(g(g.address), Array.prototype.slice.call(arguments));
      return g.address
    }, e = function() {
      return J.pushState && x.state !== s
    }, b = function() {
      return("/" + D.pathname.replace(RegExp(x.state), "") + D.search + (f() ? "#!" + f() : "")).replace(Q, "/")
    }, f = function() {
      var a = D.href.indexOf("#!");
      return a != -1 ? D.href.substr(a + 2) : ""
    }, i = function() {
      return e() ? b() : f()
    }, l = function() {
      try {
        return top.document !== s && top.document.title !== s && top.jQuery !== s && top.jQuery.address !== s && top.jQuery.address.frames() !== !1 ? top : window
      }catch(a) {
        return window
      }
    }, j = function(a) {
      a = a.toString();
      return(x.strict && a.substr(0, 1) != "/" ? "/" : "") + a
    }, k = function(a, b) {
      return parseInt(a.css(b), 10)
    }, n = function() {
      if(/^#/.test(D.hash) && !/^#!/.test(D.hash)) {
        D.hash = D.hash.replace("#", "#!")
      }
      if(!O) {
        var a = i();
        decodeURI(K) != decodeURI(a) && (L && F < 7 ? D.reload() : (L && !P && x.history && N(q, 50), K = a, m(A)))
      }
    }, m = function(a) {
      N(p, 10);
      return h(v).isDefaultPrevented() || h(a ? o : y).isDefaultPrevented()
    }, p = function() {
      if(x.tracker !== "null" && x.tracker !== w) {
        var a = g.isFunction(x.tracker) ? x.tracker : C[x.tracker], b = (D.pathname + D.search + (g.address && !e() ? g.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
        g.isFunction(a) ? a(b) : g.isFunction(C.urchinTracker) ? C.urchinTracker(b) : C.pageTracker !== s && g.isFunction(C.pageTracker._trackPageview) ? C.pageTracker._trackPageview(b) : C._gaq !== s && g.isFunction(C._gaq.push) && C._gaq.push(["_trackPageview", decodeURI(b)])
      }
    }, q = function() {
      var a = "javascript:" + A + ";document.open();document.writeln('<html><head><title>" + G.title.replace(/\'/g, "\\'") + "</title><script>var " + z + ' = "' + encodeURIComponent(i()).replace(/\'/g, "\\'") + (G.domain != D.hostname ? '";document.domain="' + G.domain : "") + "\";<\/script></head></html>');document.close();";
      F < 7 ? M.src = a : M.contentWindow.location.replace(a)
    }, r = function() {
      if(H && U != -1) {
        var a, b, c = H.substr(U + 1).split("&");
        for(a = 0;a < c.length;a++) {
          b = c[a].split("="), /^(autoUpdate|history|strict|wrap)$/.test(b[0]) && (x[b[0]] = isNaN(b[1]) ? /^(true|yes)$/i.test(b[1]) : parseInt(b[1], 10) !== 0), /^(state|tracker)$/.test(b[0]) && (x[b[0]] = b[1])
        }
        H = w
      }
      K = i()
    }, t = function() {
      if(!T) {
        T = B;
        r();
        g('a[rel*="address:"]').address();
        if(x.wrap) {
          var a = g("body");
          g("body > *").wrapAll('<div style="padding:' + (k(a, "marginTop") + k(a, "paddingTop")) + "px " + (k(a, "marginRight") + k(a, "paddingRight")) + "px " + (k(a, "marginBottom") + k(a, "paddingBottom")) + "px " + (k(a, "marginLeft") + k(a, "paddingLeft")) + 'px;" />').parent().wrap('<div id="' + z + '" style="height:100%;overflow:auto;position:relative;' + (I && !window.statusbar.visible ? "resize:both;" : "") + '" />');
          g("html, body").css({height:"100%", margin:0, padding:0, overflow:"hidden"});
          I && g('<style type="text/css" />').appendTo("head").text("#" + z + "::-webkit-resizer { background-color: #fff; }")
        }
        if(L && !P) {
          a = G.getElementsByTagName("frameset")[0], M = G.createElement((a ? "" : "i") + "frame"), M.src = "javascript:" + A, a ? (a.insertAdjacentElement("beforeEnd", M), a[a.cols ? "cols" : "rows"] += ",0", M.noResize = B, M.frameBorder = M.frameSpacing = 0) : (M.style.display = "none", M.style.width = M.style.height = 0, M.tabIndex = -1, G.body.insertAdjacentElement("afterBegin", M)), N(function() {
            g(M).bind("load", function() {
              var a = M.contentWindow;
              K = a[z] !== s ? a[z] : "";
              if(K != i()) {
                m(A), D.hash = K
              }
            });
            M.contentWindow[z] === s && q()
          }, 50)
        }
        N(function() {
          h("init");
          m(A)
        }, 1);
        e() || (L && F > 7 || !L && P ? C.addEventListener ? C.addEventListener(u, n, A) : C.attachEvent && C.attachEvent("on" + u, n) : R(n, 50));
        "state" in window.history && g(window).trigger("popstate")
      }
    }, s, w = null, z = "jQueryAddress", u = "hashchange", v = "change", o = "internalChange", y = "externalChange", B = !0, A = !1, x = {autoUpdate:B, history:B, strict:B, frames:B, wrap:A}, E = function() {
      var a = {}, b;
      b = navigator.userAgent;
      b = b.toLowerCase();
      b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || b.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
      b = {browser:b[1] || "", version:b[2] || "0"};
      if(b.browser) {
        a[b.browser] = !0, a.version = b.version
      }
      if(a.chrome) {
        a.webkit = !0
      }else {
        if(a.webkit) {
          a.safari = !0
        }
      }
      return a
    }(), F = parseFloat(E.version), I = E.webkit || E.safari, L = !g.support.opacity, C = l(), G = C.document, J = C.history, D = C.location, R = setInterval, N = setTimeout, Q = /\/{2,9}/g, E = navigator.userAgent, P = "on" + u in C, M, H = g("script:last").attr("src"), U = H ? H.indexOf("?") : -1, S = G.title, O = A, T = A, V = B, W = A, K = i();
    if(D.hash && /^#/.test(D.hash) && !/^#!/.test(D.hash)) {
      D.hash = D.hash.replace("#", "#!")
    }
    if(L) {
      F = parseFloat(E.substr(E.indexOf("MSIE") + 4));
      G.documentMode && G.documentMode != F && (F = G.documentMode != 8 ? 7 : 8);
      var X = G.onpropertychange;
      G.onpropertychange = function() {
        X && X.call(G);
        if(G.title != S && G.title.indexOf("#!" + i()) != -1) {
          G.title = S
        }
      }
    }
    if(J.navigationMode) {
      J.navigationMode = "compatible"
    }
    if(document.readyState == "complete") {
      var Y = setInterval(function() {
        g.address && (t(), clearInterval(Y))
      }, 50)
    }else {
      r(), g(t)
    }
    g(window).bind("popstate", function() {
      decodeURI(K) != decodeURI(i()) && (K = i(), m(A))
    }).bind("unload", function() {
      C.removeEventListener ? C.removeEventListener(u, n, A) : C.detachEvent && C.detachEvent("on" + u, n)
    });
    return{bind:function() {
      return d.apply(this, a(arguments))
    }, unbind:function() {
      return c.apply(this, a(arguments))
    }, init:function() {
      return d.apply(this, ["init"].concat(a(arguments)))
    }, change:function() {
      return d.apply(this, [v].concat(a(arguments)))
    }, internalChange:function() {
      return d.apply(this, [o].concat(a(arguments)))
    }, externalChange:function() {
      return d.apply(this, [y].concat(a(arguments)))
    }, baseURL:function() {
      var a = D.href;
      a.indexOf("#!") != -1 && (a = a.substr(0, a.indexOf("#!") + 1));
      /\/$/.test(a) && (a = a.substr(0, a.length - 1));
      return a
    }, autoUpdate:function(a) {
      if(a !== s) {
        return x.autoUpdate = a, this
      }
      return x.autoUpdate
    }, history:function(a) {
      if(a !== s) {
        return x.history = a, this
      }
      return x.history
    }, state:function(a) {
      if(a !== s) {
        x.state = a;
        var c = b();
        x.state !== s && (J.pushState ? c.substr(0, 4) == "/#!/" && D.replace(x.state.replace(/^\/$/, "") + c.substr(2)) : c != "/" && c.replace(/^\/#!/, "") != f() && N(function() {
          D.replace(x.state.replace(/^\/$/, "") + "/#!" + c)
        }, 1));
        return this
      }
      return x.state
    }, frames:function(a) {
      if(a !== s) {
        return x.frames = a, C = l(), this
      }
      return x.frames
    }, strict:function(a) {
      if(a !== s) {
        return x.strict = a, this
      }
      return x.strict
    }, tracker:function(a) {
      if(a !== s) {
        return x.tracker = a, this
      }
      return x.tracker
    }, wrap:function(a) {
      if(a !== s) {
        return x.wrap = a, this
      }
      return x.wrap
    }, update:function() {
      W = B;
      this.value(K);
      W = A;
      return this
    }, title:function(a) {
      if(a !== s) {
        return N(function() {
          S = G.title = a;
          if(V && M && M.contentWindow && M.contentWindow.document) {
            M.contentWindow.document.title = a, V = A
          }
        }, 50), this
      }
      return G.title
    }, value:function(a) {
      if(a !== s) {
        a = j(a);
        a == "/" && (a = "");
        if(K == a && !W) {
          return
        }
        K = a;
        if(x.autoUpdate || W) {
          if(m(B)) {
            return this
          }
          if(e()) {
            J[x.history ? "pushState" : "replaceState"]({}, "", x.state.replace(/\/$/, "") + (K === "" ? "/" : K))
          }else {
            O = B;
            if(I) {
              x.history ? D.hash = "#!" + K : D.replace("#!" + K)
            }else {
              if(K != i()) {
                x.history ? D.hash = "#!" + K : D.replace("#!" + K)
              }
            }
            L && !P && x.history && N(q, 50);
            I ? N(function() {
              O = A
            }, 1) : O = A
          }
        }
        return this
      }
      return j(K)
    }, path:function(a) {
      if(a !== s) {
        var b = this.queryString(), c = this.hash();
        this.value(a + (b ? "?" + b : "") + (c ? "#!" + c : ""));
        return this
      }
      return j(K).split("#!")[0].split("?")[0]
    }, pathNames:function() {
      var a = this.path(), b = a.replace(Q, "/").split("/");
      (a.substr(0, 1) == "/" || a.length === 0) && b.splice(0, 1);
      a.substr(a.length - 1, 1) == "/" && b.splice(b.length - 1, 1);
      return b
    }, queryString:function(a) {
      if(a !== s) {
        var b = this.hash();
        this.value(this.path() + (a ? "?" + a : "") + (b ? "#!" + b : ""));
        return this
      }
      a = K.split("?");
      return a.slice(1, a.length).join("?").split("#!")[0]
    }, parameter:function(a, b, c) {
      var d, e;
      if(b !== s) {
        var f = this.parameterNames();
        e = [];
        b = b === s || b === w ? "" : b.toString();
        for(d = 0;d < f.length;d++) {
          var i = f[d], h = this.parameter(i);
          typeof h == "string" && (h = [h]);
          i == a && (h = b === w || b === "" ? [] : c ? h.concat([b]) : [b]);
          for(var l = 0;l < h.length;l++) {
            e.push(i + "=" + h[l])
          }
        }
        g.inArray(a, f) == -1 && b !== w && b !== "" && e.push(a + "=" + b);
        this.queryString(e.join("&"));
        return this
      }
      if(b = this.queryString()) {
        c = [];
        e = b.split("&");
        for(d = 0;d < e.length;d++) {
          b = e[d].split("="), b[0] == a && c.push(b.slice(1).join("="))
        }
        if(c.length !== 0) {
          return c.length != 1 ? c : c[0]
        }
      }
    }, parameterNames:function() {
      var a = this.queryString(), b = [];
      if(a && a.indexOf("=") != -1) {
        for(var a = a.split("&"), c = 0;c < a.length;c++) {
          var d = a[c].split("=")[0];
          g.inArray(d, b) == -1 && b.push(d)
        }
      }
      return b
    }, hash:function(a) {
      if(a !== s) {
        return this.value(K.split("#!")[0] + (a ? "#!" + a : "")), this
      }
      a = K.split("#!");
      return a.slice(1, a.length).join("#!")
    }}
  }();
  g.fn.address = function(h) {
    g(this).each(function() {
      g(this).data("address") || g(this).on("click", function(a) {
        if(a.shiftKey || a.ctrlKey || a.metaKey || a.which == 2) {
          return!0
        }
        var d = a.currentTarget;
        g(d).is("a") && (a.preventDefault(), a = h ? h.call(d) : /address:/.test(g(d).attr("rel")) ? g(d).attr("rel").split("address:")[1].split(" ")[0] : g.address.state() !== void 0 && !/^\/?$/.test(g.address.state()) ? g(d).attr("href").replace(RegExp("^(.*" + g.address.state() + "|\\.)"), "") : g(d).attr("href").replace(/^(#\!?|\.)/, ""), g.address.value(a))
      }).on("submit", function(a) {
        var d = a.currentTarget;
        g(d).is("form") && (a.preventDefault(), a = g(d).attr("action"), d = h ? h.call(d) : (a.indexOf("?") != -1 ? a.replace(/&$/, "") : a + "?") + g(d).serialize(), g.address.value(d))
      }).data("address", !0)
    });
    return this
  }
})(jQuery);
$(function() {
  $.fn.paginate = function(g) {
    var h = $.extend({}, {current_page:1, entries_on_this_page:0, entries_per_page:12, first:0, first_page:1, last:0, last_page:1, total_entries:0, onclick:null, pageButtons:25}, g);
    this.each(function(a, d) {
      var c = $(d), e, b, f, i, g, j, k, n;
      k = h.current_page - 1 < h.first_page ? h.first_page : h.current_page - 1;
      n = h.current_page + 1 >= h.last_page - 1 ? h.last_page : h.current_page + 1;
      c.is(".paginated") ? (e = $(".desc"), b = $(".first"), f = $(".prev"), g = $(".next"), j = $(".last"), i = $(".pages"), i.empty(), b.unbind(), f.unbind(), g.unbind(), j.unbind(), h.onclick != null && (b.click(function() {
        h.onclick(h.first_page)
      }), f.click(function() {
        h.onclick(k)
      }), g.click(function() {
        h.onclick(n)
      }), j.click(function() {
        h.onclick(h.last_page)
      }))) : (e = $("<span class='desc' />"), b = $("<a class='first'>|&lt;</a>"), f = $("<a class='prev'>&lt;</a>"), i = $("<span class='pages' />"), g = $("<a class='next'>&gt;</a>"), j = $("<a class='last'>&gt;|</a>"), h.onclick != null && (b.click(function() {
        h.onclick(h.first_page)
      }), f.click(function() {
        h.onclick(k)
      }), g.click(function() {
        h.onclick(n)
      }), j.click(function() {
        h.onclick(h.last_page)
      })), c.append(e), c.append(b), c.append(f), c.append(i), c.append(g), c.append(j), c.addClass("paginated"));
      var c = h.pageButtons <= h.last_page ? h.pageButtons : h.last_page, m = h.current_page - c / 2, m = Math.ceil(m);
      if(m <= h.first_page) {
        m = h.first_page
      }
      m + c > h.last_page && (m = h.last_page - c + 1);
      for(var p = m = m <= h.last_page ? m : h.last_page - c;p < m + c;p++) {
        var q = p, r = $('<a data-page="' + q + '" class="paginglink pagego">' + q + "</a>");
        q == h.current_page && r.addClass("toggled");
        h.onclick != null && function() {
          var a = q;
          r.click(function() {
            h.onclick(a)
          })
        }();
        i.append(r)
      }
      h.first_page == h.last_page ? (b.hide(), f.hide(), i.hide(), g.hide(), j.hide()) : (b.show(), f.show(), i.show(), g.show(), j.show());
      e.html(h.first + " - " + h.last + " of " + h.total_entries)
    })
  }
});
jQuery && function(g) {
  g.extend(g.fn, {selectBox:function(h, a) {
    var d, c = "", e = function(a, c) {
      if(navigator.userAgent.match(/iPad|iPhone|Android/i)) {
        return!1
      }
      if(a.tagName.toLowerCase() !== "select") {
        return!1
      }
      a = g(a);
      if(a.data("selectBox-control")) {
        return!1
      }
      var d = g('<a class="selectBox" />'), e = a.attr("multiple") || parseInt(a.attr("size")) > 1, h = c || {};
      if(h.autoWidth === void 0) {
        h.autoWidth = !0
      }
      d.addClass(a.attr("class")).attr("style", a.attr("style") || "").attr("title", a.attr("title") || "").attr("tabindex", parseInt(a.attr("tabindex"))).css("display", "inline-block").bind("focus.selectBox", function() {
        this !== document.activeElement && g(document.activeElement).blur();
        d.hasClass("selectBox-active") || (d.addClass("selectBox-active"), a.trigger("focus"))
      }).bind("blur.selectBox", function() {
        d.hasClass("selectBox-active") && (d.removeClass("selectBox-active"), a.trigger("blur"))
      });
      a.attr("disabled") && d.addClass("selectBox-disabled");
      if(e) {
        var l = b(a, "inline");
        d.append(l).data("selectBox-options", l).addClass("selectBox-inline").addClass("selectBox-menuShowing").bind("keydown.selectBox", function(b) {
          m(a, b)
        }).bind("keypress.selectBox", function(b) {
          p(a, b)
        }).bind("mousedown.selectBox", function(a) {
          g(a.target).is("A.selectBox-inline") && a.preventDefault();
          d.hasClass("selectBox-focus") || d.focus()
        }).insertAfter(a);
        if(!a[0].style.height) {
          var e = a.attr("size") ? parseInt(a.attr("size")) : 5, j = d.clone().removeAttr("id").css({position:"absolute", top:"-9999em"}).show().appendTo("body");
          j.find(".selectBox-options").html("<li><a>\u00a0</a></li>");
          optionHeight = parseInt(j.find(".selectBox-options A:first").html("&nbsp;").outerHeight());
          j.remove();
          d.height(optionHeight * e)
        }
      }else {
        e = g('<span class="selectBox-label" />'), j = g('<span class="selectBox-arrow" />'), e.text(g(a).find("OPTION:selected").text() || "\u00a0"), l = b(a, "dropdown"), l.appendTo("BODY"), d.data("selectBox-options", l).addClass("selectBox-dropdown").append(e).append(j).bind("mousedown.selectBox", function(b) {
          d.hasClass("selectBox-menuShowing") ? i() : (b.stopPropagation(), l.data("selectBox-down-at-x", b.screenX).data("selectBox-down-at-y", b.screenY), f(a))
        }).bind("keydown.selectBox", function(b) {
          m(a, b)
        }).bind("keypress.selectBox", function(b) {
          p(a, b)
        }).insertAfter(a)
      }
      r(d);
      a.addClass("selectBox").data("selectBox-control", d).data("selectBox-settings", h).hide()
    }, b = function(a, b) {
      var c;
      switch(b) {
        case "inline":
          return c = g('<ul class="selectBox-options" />'), a.find("OPTGROUP").length ? a.find("OPTGROUP").each(function() {
            var a = g('<li class="selectBox-optgroup" />');
            a.text(g(this).attr("label"));
            c.append(a);
            g(this).find("OPTION").each(function() {
              var a = g("<li />"), b = g("<a />");
              a.addClass(g(this).attr("class"));
              b.attr("rel", g(this).val()).text(g(this).text());
              a.append(b);
              g(this).attr("disabled") && a.addClass("selectBox-disabled");
              g(this).attr("selected") && a.addClass("selectBox-selected");
              c.append(a)
            })
          }) : a.find("OPTION").each(function() {
            var a = g("<li />"), b = g("<a />");
            a.addClass(g(this).attr("class"));
            b.attr("rel", g(this).val()).text(g(this).text());
            a.append(b);
            g(this).attr("disabled") && a.addClass("selectBox-disabled");
            g(this).attr("selected") && a.addClass("selectBox-selected");
            c.append(a)
          }), c.find("A").bind("mouseover.selectBox", function() {
            j(a, g(this).parent())
          }).bind("mouseout.selectBox", function() {
            k(a, g(this).parent())
          }).bind("mousedown.selectBox", function(b) {
            b.preventDefault();
            a.selectBox("control").hasClass("selectBox-active") || a.selectBox("control").focus()
          }).bind("mouseup.selectBox", function(b) {
            i();
            l(a, g(this).parent(), b)
          }), r(c), c;
        case "dropdown":
          return c = g('<ul class="selectBox-dropdown-menu selectBox-options" />'), a.find("OPTGROUP").length ? a.find("OPTGROUP").each(function() {
            var a = g('<li class="selectBox-optgroup" />');
            a.text(g(this).attr("label"));
            c.append(a);
            g(this).find("OPTION").each(function() {
              var a = g("<li />"), b = g("<a />");
              a.addClass(g(this).attr("class"));
              b.attr("rel", g(this).val()).text(g(this).text());
              a.append(b);
              g(this).attr("disabled") && a.addClass("selectBox-disabled");
              g(this).attr("selected") && a.addClass("selectBox-selected");
              c.append(a)
            })
          }) : a.find("OPTION").length > 0 ? a.find("OPTION").each(function() {
            var a = g("<li />"), b = g("<a />");
            a.addClass(g(this).attr("class"));
            b.attr("rel", g(this).val()).text(g(this).text());
            a.append(b);
            g(this).attr("disabled") && a.addClass("selectBox-disabled");
            g(this).attr("selected") && a.addClass("selectBox-selected");
            c.append(a)
          }) : c.append("<li>\u00a0</li>"), c.data("selectBox-select", a).css("display", "none").appendTo("BODY").find("A").bind("mousedown.selectBox", function(a) {
            a.preventDefault();
            a.screenX === c.data("selectBox-down-at-x") && a.screenY === c.data("selectBox-down-at-y") && (c.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"), i())
          }).bind("mouseup.selectBox", function(b) {
            b.screenX === c.data("selectBox-down-at-x") && b.screenY === c.data("selectBox-down-at-y") || (c.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y"), l(a, g(this).parent()), i())
          }).bind("mouseover.selectBox", function() {
            j(a, g(this).parent())
          }).bind("mouseout.selectBox", function() {
            k(a, g(this).parent())
          }), r(c), c
      }
    }, f = function(a) {
      var a = g(a), b = a.data("selectBox-control"), c = a.data("selectBox-settings") || {}, d = b.data("selectBox-options");
      if(b.hasClass("selectBox-disabled")) {
        return!1
      }
      i();
      c.autoWidth ? d.css("width", b.innerWidth()) : d.innerWidth() < b.innerWidth() && d.css("width", b.innerWidth() - parseInt(d.css("padding-left")) - parseInt(d.css("padding-right")));
      d.css({top:b.offset().top + b.outerHeight() - parseInt(b.css("borderBottomWidth")), left:b.offset().left});
      switch(c.menuTransition) {
        case "fade":
          d.fadeIn(c.menuSpeed);
          break;
        case "slide":
          d.slideDown(c.menuSpeed);
          break;
        default:
          d.show(c.menuSpeed)
      }
      c = d.find(".selectBox-selected:first");
      n(a, c, !0);
      j(a, c);
      b.addClass("selectBox-menuShowing");
      g(document).bind("mousedown.selectBox", function(a) {
        g(a.target).parents().andSelf().hasClass("selectBox-options") || i()
      })
    }, i = function() {
      g(".selectBox-dropdown-menu").length !== 0 && (g(document).unbind("mousedown.selectBox"), g(".selectBox-dropdown-menu").each(function() {
        var a = g(this), b = a.data("selectBox-select"), c = b.data("selectBox-control"), b = b.data("selectBox-settings") || {};
        switch(b.menuTransition) {
          case "fade":
            a.fadeOut(b.menuSpeed);
            break;
          case "slide":
            a.slideUp(b.menuSpeed);
            break;
          default:
            a.hide(b.menuSpeed)
        }
        c && c.removeClass("selectBox-menuShowing")
      }))
    }, l = function(a, b, c) {
      var a = g(a), b = g(b), d = a.data("selectBox-control");
      a.data("selectBox-settings");
      if(d.hasClass("selectBox-disabled")) {
        return!1
      }
      if(b.length === 0 || b.hasClass("selectBox-disabled")) {
        return!1
      }
      a.attr("multiple") ? c.shiftKey && d.data("selectBox-last-selected") ? (b.toggleClass("selectBox-selected"), c = b.index() > d.data("selectBox-last-selected").index() ? b.siblings().slice(d.data("selectBox-last-selected").index(), b.index()) : b.siblings().slice(b.index(), d.data("selectBox-last-selected").index()), c = c.not(".selectBox-optgroup, .selectBox-disabled"), b.hasClass("selectBox-selected") ? c.addClass("selectBox-selected") : c.removeClass("selectBox-selected")) : c.metaKey ? b.toggleClass("selectBox-selected") : 
      (b.siblings().removeClass("selectBox-selected"), b.addClass("selectBox-selected")) : (b.siblings().removeClass("selectBox-selected"), b.addClass("selectBox-selected"));
      d.hasClass("selectBox-dropdown") && d.find(".selectBox-label").text(b.text());
      var e = 0, f = [];
      a.attr("multiple") ? d.find(".selectBox-selected A").each(function() {
        f[e++] = g(this).attr("rel")
      }) : f = b.find("A").attr("rel");
      d.data("selectBox-last-selected", b);
      a.val() !== f && (a.val(f), a.trigger("change"));
      return!0
    }, j = function(a, b) {
      a = g(a);
      b = g(b);
      a.data("selectBox-control").data("selectBox-options").find(".selectBox-hover").removeClass("selectBox-hover");
      b.addClass("selectBox-hover")
    }, k = function(a, b) {
      a = g(a);
      g(b);
      a.data("selectBox-control").data("selectBox-options").find(".selectBox-hover").removeClass("selectBox-hover")
    }, n = function(a, b, c) {
      if(b && b.length !== 0) {
        var a = g(a), a = a.data("selectBox-control"), d = a.data("selectBox-options"), a = a.hasClass("selectBox-dropdown") ? d : d.parent(), d = parseInt(b.offset().top - a.position().top), e = parseInt(d + b.outerHeight());
        c ? a.scrollTop(b.offset().top - a.offset().top + a.scrollTop() - a.height() / 2) : (d < 0 && a.scrollTop(b.offset().top - a.offset().top + a.scrollTop()), e > a.height() && a.scrollTop(b.offset().top + b.outerHeight() - a.offset().top + a.scrollTop() - a.height()))
      }
    }, m = function(a, b) {
      var a = g(a), d = a.data("selectBox-control"), e = d.data("selectBox-options"), h = 0, m = 0;
      if(!d.hasClass("selectBox-disabled")) {
        switch(b.keyCode) {
          case 8:
            b.preventDefault();
            c = "";
            break;
          case 9:
          ;
          case 27:
            i();
            k(a);
            break;
          case 13:
            d.hasClass("selectBox-menuShowing") ? (l(a, e.find("LI.selectBox-hover:first"), b), d.hasClass("selectBox-dropdown") && i()) : f(a);
            break;
          case 38:
          ;
          case 37:
            b.preventDefault();
            if(d.hasClass("selectBox-menuShowing")) {
              d = e.find(".selectBox-hover").prev("LI");
              h = e.find("LI:not(.selectBox-optgroup)").length;
              for(m = 0;d.length === 0 || d.hasClass("selectBox-disabled") || d.hasClass("selectBox-optgroup");) {
                if(d = d.prev("LI"), d.length === 0 && (d = e.find("LI:last")), ++m >= h) {
                  break
                }
              }
              j(a, d);
              n(a, d)
            }else {
              f(a)
            }
            break;
          case 40:
          ;
          case 39:
            if(b.preventDefault(), d.hasClass("selectBox-menuShowing")) {
              d = e.find(".selectBox-hover").next("LI");
              h = e.find("LI:not(.selectBox-optgroup)").length;
              for(m = 0;d.length === 0 || d.hasClass("selectBox-disabled") || d.hasClass("selectBox-optgroup");) {
                if(d = d.next("LI"), d.length === 0 && (d = e.find("LI:first")), ++m >= h) {
                  break
                }
              }
              j(a, d);
              n(a, d)
            }else {
              f(a)
            }
        }
      }
    }, p = function(a, b) {
      var a = g(a), e = a.data("selectBox-control"), i = e.data("selectBox-options");
      if(!e.hasClass("selectBox-disabled")) {
        switch(b.keyCode) {
          case 9:
          ;
          case 27:
          ;
          case 13:
          ;
          case 38:
          ;
          case 37:
          ;
          case 40:
          ;
          case 39:
            break;
          default:
            e.hasClass("selectBox-menuShowing") || f(a), b.preventDefault(), clearTimeout(d), c += String.fromCharCode(b.charCode || b.keyCode), i.find("A").each(function() {
              if(g(this).text().substr(0, c.length).toLowerCase() === c.toLowerCase()) {
                return j(a, g(this).parent()), n(a, g(this).parent()), !1
              }
            }), d = setTimeout(function() {
              c = ""
            }, 1E3)
        }
      }
    }, q = function(a, b) {
      a = g(a);
      a.val(b);
      var b = a.val(), c = a.data("selectBox-control");
      if(c) {
        var d = a.data("selectBox-settings"), e = c.data("selectBox-options");
        c.find(".selectBox-label").text(g(a).find("OPTION:selected").text() || "\u00a0");
        e.find(".selectBox-selected").removeClass("selectBox-selected");
        e.find("A").each(function() {
          if(typeof b === "object") {
            for(var a = 0;a < b.length;a++) {
              g(this).attr("rel") == b[a] && g(this).parent().addClass("selectBox-selected")
            }
          }else {
            g(this).attr("rel") == b && g(this).parent().addClass("selectBox-selected")
          }
        });
        d.change && d.change.call(a)
      }
    }, r = function(a) {
      g(a).css("MozUserSelect", "none").bind("selectstart", function(a) {
        a.preventDefault()
      })
    };
    switch(h) {
      case "hide":
        i();
        break;
      case "control":
        return g(this).data("selectBox-control");
      case "settings":
        if(!a) {
          return g(this).data("selectBox-settings")
        }
        g(this).each(function() {
          g(this).data("selectBox-settings", g.extend(!0, g(this).data("selectBox-settings"), a))
        });
        break;
      case "options":
        g(this).each(function() {
          var c, d = a;
          c = g(this);
          var e = c.data("selectBox-control");
          c.data("selectBox-settings");
          switch(typeof a) {
            case "string":
              c.html(a);
              break;
            case "object":
              for(var f in c.html(""), a) {
                if(a[f] !== null) {
                  if(typeof a[f] === "object") {
                    var d = g('<optgroup label="' + f + '" />'), i;
                    for(i in a[f]) {
                      d.append('<option value="' + i + '">' + a[f][i] + "</option>")
                    }
                  }else {
                    d = g('<option value="' + f + '">' + a[f] + "</option>")
                  }
                  c.append(d)
                }
              }
          }
          if(e) {
            switch(e.data("selectBox-options").remove(), f = e.hasClass("selectBox-dropdown") ? "dropdown" : "inline", d = b(c, f), e.data("selectBox-options", d), f) {
              case "inline":
                e.append(d);
                break;
              case "dropdown":
                e.find(".selectBox-label").text(g(c).find("OPTION:selected").text() || "\u00a0"), g("BODY").append(d)
            }
          }
        });
        break;
      case "value":
        if(!a) {
          return g(this).val()
        }
        g(this).each(function() {
          q(this, a)
        });
        break;
      case "enable":
        g(this).each(function() {
          var a;
          a = g(this);
          a.attr("disabled", !1);
          (a = a.data("selectBox-control")) && a.removeClass("selectBox-disabled")
        });
        break;
      case "disable":
        g(this).each(function() {
          var a;
          a = g(this);
          a.attr("disabled", !0);
          (a = a.data("selectBox-control")) && a.addClass("selectBox-disabled")
        });
        break;
      case "destroy":
        g(this).each(function() {
          var a;
          a = g(this);
          var b = a.data("selectBox-control");
          b && (b.data("selectBox-options").remove(), b.remove(), a.removeClass("selectBox").removeData("selectBox-control").removeData("selectBox-settings").show())
        });
        break;
      default:
        g(this).each(function() {
          e(this, h)
        })
    }
    return g(this)
  }})
}(jQuery);
(function(g, h) {
  function a(a) {
    g.fn.cycle.debug && d(a)
  }
  function d() {
    window.console && console.log && console.log("[cycle] " + Array.prototype.join.call(arguments, " "))
  }
  function c(a, b, c) {
    var d = g(a).data("cycle.opts");
    if(d) {
      var e = !!a.cyclePause;
      e && d.paused ? d.paused(a, d, b, c) : !e && d.resumed && d.resumed(a, d, b, c)
    }
  }
  function e(a, b, e) {
    function i(a, b, c) {
      if(!a && b === !0) {
        a = g(c).data("cycle.opts");
        if(!a) {
          return d("options not found, can not resume"), !1
        }
        if(c.cycleTimeout) {
          clearTimeout(c.cycleTimeout), c.cycleTimeout = 0
        }
        n(a.elements, a, 1, !a.backwards)
      }
    }
    if(a.cycleStop === h) {
      a.cycleStop = 0
    }
    if(b === h || b === null) {
      b = {}
    }
    if(b.constructor == String) {
      switch(b) {
        case "destroy":
        ;
        case "stop":
          var l = g(a).data("cycle.opts");
          if(!l) {
            return!1
          }
          a.cycleStop++;
          a.cycleTimeout && clearTimeout(a.cycleTimeout);
          a.cycleTimeout = 0;
          l.elements && g(l.elements).stop();
          g(a).removeData("cycle.opts");
          b == "destroy" && f(a, l);
          return!1;
        case "toggle":
          return a.cyclePause = a.cyclePause === 1 ? 0 : 1, i(a.cyclePause, e, a), c(a), !1;
        case "pause":
          return a.cyclePause = 1, c(a), !1;
        case "resume":
          return a.cyclePause = 0, i(!1, e, a), c(a), !1;
        case "prev":
        ;
        case "next":
          l = g(a).data("cycle.opts");
          if(!l) {
            return d('options not found, "prev/next" ignored'), !1
          }
          if(typeof e == "string") {
            l.oneTimeFx = e
          }
          g.fn.cycle[b](l);
          return!1;
        default:
          b = {fx:b}
      }
    }else {
      if(b.constructor == Number) {
        l = b;
        b = g(a).data("cycle.opts");
        if(!b) {
          return d("options not found, can not advance slide"), !1
        }
        if(l < 0 || l >= b.elements.length) {
          return d("invalid slide index: " + l), !1
        }
        b.nextSlide = l;
        if(a.cycleTimeout) {
          clearTimeout(a.cycleTimeout), a.cycleTimeout = 0
        }
        if(typeof e == "string") {
          b.oneTimeFx = e
        }
        n(b.elements, b, 1, l >= b.currSlide);
        return!1
      }
    }
    return b
  }
  function b(a, b) {
    if(!g.support.opacity && b.cleartype && a.style.filter) {
      try {
        a.style.removeAttribute("filter")
      }catch(c) {
      }
    }
  }
  function f(a, b) {
    b.next && g(b.next).unbind(b.prevNextEvent);
    b.prev && g(b.prev).unbind(b.prevNextEvent);
    if(b.pager || b.pagerAnchorBuilder) {
      g.each(b.pagerAnchors || [], function() {
        this.unbind().remove()
      })
    }
    b.pagerAnchors = null;
    g(a).unbind("mouseenter.cycle mouseleave.cycle");
    b.destroy && b.destroy(b)
  }
  function i(a, e, f, i, m) {
    var v, o = g.extend({}, g.fn.cycle.defaults, i || {}, g.metadata ? a.metadata() : g.meta ? a.data() : {}), y = g.isFunction(a.data) ? a.data(o.metaAttr) : null;
    y && (o = g.extend(o, y));
    if(o.autostop) {
      o.countdown = o.autostopCount || f.length
    }
    var B = a[0];
    a.data("cycle.opts", o);
    o.$cont = a;
    o.stopCount = B.cycleStop;
    o.elements = f;
    o.before = o.before ? [o.before] : [];
    o.after = o.after ? [o.after] : [];
    !g.support.opacity && o.cleartype && o.after.push(function() {
      b(this, o)
    });
    o.continuous && o.after.push(function() {
      n(f, o, 0, !o.backwards)
    });
    l(o);
    !g.support.opacity && o.cleartype && !o.cleartypeNoBg && r(e);
    a.css("position") == "static" && a.css("position", "relative");
    o.width && a.width(o.width);
    o.height && o.height != "auto" && a.height(o.height);
    o.startingSlide !== h ? (o.startingSlide = parseInt(o.startingSlide, 10), o.startingSlide >= f.length || o.startSlide < 0 ? o.startingSlide = 0 : v = !0) : o.startingSlide = o.backwards ? f.length - 1 : 0;
    if(o.random) {
      o.randomMap = [];
      for(y = 0;y < f.length;y++) {
        o.randomMap.push(y)
      }
      o.randomMap.sort(function() {
        return Math.random() - 0.5
      });
      if(v) {
        for(v = 0;v < f.length;v++) {
          if(o.startingSlide == o.randomMap[v]) {
            o.randomIndex = v
          }
        }
      }else {
        o.randomIndex = 1, o.startingSlide = o.randomMap[1]
      }
    }else {
      if(o.startingSlide >= f.length) {
        o.startingSlide = 0
      }
    }
    o.currSlide = o.startingSlide || 0;
    var A = o.startingSlide;
    e.css({position:"absolute", top:0, left:0}).hide().each(function(a) {
      a = o.backwards ? A ? a <= A ? f.length + (a - A) : A - a : f.length - a : A ? a >= A ? f.length - (a - A) : A - a : f.length - a;
      g(this).css("z-index", a)
    });
    g(f[A]).css("opacity", 1).show();
    b(f[A], o);
    o.fit && (o.aspect ? e.each(function() {
      var a = g(this), b = o.aspect === !0 ? a.width() / a.height() : o.aspect;
      o.width && a.width() != o.width && (a.width(o.width), a.height(o.width / b));
      o.height && a.height() < o.height && (a.height(o.height), a.width(o.height * b))
    }) : (o.width && e.width(o.width), o.height && o.height != "auto" && e.height(o.height)));
    o.center && (!o.fit || o.aspect) && e.each(function() {
      var a = g(this);
      a.css({"margin-left":o.width ? (o.width - a.width()) / 2 + "px" : 0, "margin-top":o.height ? (o.height - a.height()) / 2 + "px" : 0})
    });
    o.center && !o.fit && !o.slideResize && e.each(function() {
      var a = g(this);
      a.css({"margin-left":o.width ? (o.width - a.width()) / 2 + "px" : 0, "margin-top":o.height ? (o.height - a.height()) / 2 + "px" : 0})
    });
    if((o.containerResize || o.containerResizeHeight) && a.innerHeight() < 1) {
      for(var x = y = v = 0;x < f.length;x++) {
        var E = g(f[x]), F = E[0], I = E.outerWidth(), L = E.outerHeight();
        I || (I = F.offsetWidth || F.width || E.attr("width"));
        L || (L = F.offsetHeight || F.height || E.attr("height"));
        v = I > v ? I : v;
        y = L > y ? L : y
      }
      o.containerResize && v > 0 && y > 0 && a.css({width:v + "px", height:y + "px"});
      o.containerResizeHeight && y > 0 && a.css({height:y + "px"})
    }
    var C = !1;
    o.pause && a.bind("mouseenter.cycle", function() {
      C = !0;
      this.cyclePause++;
      c(B, !0)
    }).bind("mouseleave.cycle", function() {
      C && this.cyclePause--;
      c(B, !0)
    });
    if(j(o) === !1) {
      return!1
    }
    var G = !1;
    i.requeueAttempts = i.requeueAttempts || 0;
    e.each(function() {
      var a = g(this);
      this.cycleH = o.fit && o.height ? o.height : a.height() || this.offsetHeight || this.height || a.attr("height") || 0;
      this.cycleW = o.fit && o.width ? o.width : a.width() || this.offsetWidth || this.width || a.attr("width") || 0;
      if(a.is("img") && this.cycleH === 0 && this.cycleW === 0 && !this.complete) {
        if(m.s && o.requeueOnImageNotLoaded && ++i.requeueAttempts < 100) {
          return d(i.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH), setTimeout(function() {
            g(m.s, m.c).cycle(i)
          }, o.requeueTimeout), G = !0, !1
        }else {
          d("could not determine size of image: " + this.src, this.cycleW, this.cycleH)
        }
      }
      return!0
    });
    if(G) {
      return!1
    }
    o.cssBefore = o.cssBefore || {};
    o.cssAfter = o.cssAfter || {};
    o.cssFirst = o.cssFirst || {};
    o.animIn = o.animIn || {};
    o.animOut = o.animOut || {};
    e.not(":eq(" + A + ")").css(o.cssBefore);
    g(e[A]).css(o.cssFirst);
    if(o.timeout) {
      o.timeout = parseInt(o.timeout, 10);
      if(o.speed.constructor == String) {
        o.speed = g.fx.speeds[o.speed] || parseInt(o.speed, 10)
      }
      o.sync || (o.speed /= 2);
      for(v = o.fx == "none" ? 0 : o.fx == "shuffle" ? 500 : 250;o.timeout - o.speed < v;) {
        o.timeout += o.speed
      }
    }
    if(o.easing) {
      o.easeIn = o.easeOut = o.easing
    }
    if(!o.speedIn) {
      o.speedIn = o.speed
    }
    if(!o.speedOut) {
      o.speedOut = o.speed
    }
    o.slideCount = f.length;
    o.currSlide = o.lastSlide = A;
    if(o.random) {
      if(++o.randomIndex == f.length) {
        o.randomIndex = 0
      }
      o.nextSlide = o.randomMap[o.randomIndex]
    }else {
      o.nextSlide = o.backwards ? o.startingSlide === 0 ? f.length - 1 : o.startingSlide - 1 : o.startingSlide >= f.length - 1 ? 0 : o.startingSlide + 1
    }
    if(!o.multiFx) {
      if(v = g.fn.cycle.transitions[o.fx], g.isFunction(v)) {
        v(a, e, o)
      }else {
        if(o.fx != "custom" && !o.multiFx) {
          return d("unknown transition: " + o.fx, "; slideshow terminating"), !1
        }
      }
    }
    a = e[A];
    o.skipInitializationCallbacks || (o.before.length && o.before[0].apply(a, [a, a, o, !0]), o.after.length && o.after[0].apply(a, [a, a, o, !0]));
    o.next && g(o.next).bind(o.prevNextEvent, function() {
      return p(o, 1)
    });
    o.prev && g(o.prev).bind(o.prevNextEvent, function() {
      return p(o, 0)
    });
    (o.pager || o.pagerAnchorBuilder) && q(f, o);
    k(o, f);
    return o
  }
  function l(a) {
    a.original = {before:[], after:[]};
    a.original.cssBefore = g.extend({}, a.cssBefore);
    a.original.cssAfter = g.extend({}, a.cssAfter);
    a.original.animIn = g.extend({}, a.animIn);
    a.original.animOut = g.extend({}, a.animOut);
    g.each(a.before, function() {
      a.original.before.push(this)
    });
    g.each(a.after, function() {
      a.original.after.push(this)
    })
  }
  function j(b) {
    var c, e, f = g.fn.cycle.transitions;
    if(b.fx.indexOf(",") > 0) {
      b.multiFx = !0;
      b.fxs = b.fx.replace(/\s*/g, "").split(",");
      for(c = 0;c < b.fxs.length;c++) {
        var i = b.fxs[c];
        e = f[i];
        if(!e || !f.hasOwnProperty(i) || !g.isFunction(e)) {
          d("discarding unknown transition: ", i), b.fxs.splice(c, 1), c--
        }
      }
      if(!b.fxs.length) {
        return d("No valid transitions named; slideshow terminating."), !1
      }
    }else {
      if(b.fx == "all") {
        for(c in b.multiFx = !0, b.fxs = [], f) {
          f.hasOwnProperty(c) && (e = f[c], f.hasOwnProperty(c) && g.isFunction(e) && b.fxs.push(c))
        }
      }
    }
    if(b.multiFx && b.randomizeEffects) {
      e = Math.floor(Math.random() * 20) + 30;
      for(c = 0;c < e;c++) {
        b.fxs.push(b.fxs.splice(Math.floor(Math.random() * b.fxs.length), 1)[0])
      }
      a("randomized fx sequence: ", b.fxs)
    }
    return!0
  }
  function k(a, b) {
    a.addSlide = function(c, d) {
      var e = g(c), f = e[0];
      a.autostopCount || a.countdown++;
      b[d ? "unshift" : "push"](f);
      if(a.els) {
        a.els[d ? "unshift" : "push"](f)
      }
      a.slideCount = b.length;
      a.random && (a.randomMap.push(a.slideCount - 1), a.randomMap.sort(function() {
        return Math.random() - 0.5
      }));
      e.css("position", "absolute");
      e[d ? "prependTo" : "appendTo"](a.$cont);
      d && (a.currSlide++, a.nextSlide++);
      !g.support.opacity && a.cleartype && !a.cleartypeNoBg && r(e);
      a.fit && a.width && e.width(a.width);
      a.fit && a.height && a.height != "auto" && e.height(a.height);
      f.cycleH = a.fit && a.height ? a.height : e.height();
      f.cycleW = a.fit && a.width ? a.width : e.width();
      e.css(a.cssBefore);
      (a.pager || a.pagerAnchorBuilder) && g.fn.cycle.createPagerAnchor(b.length - 1, f, g(a.pager), b, a);
      if(g.isFunction(a.onAddSlide)) {
        a.onAddSlide(e)
      }else {
        e.hide()
      }
    }
  }
  function n(b, c, d, e) {
    function f() {
      var a = 0;
      c.timeout && !c.continuous ? (a = m(b[c.currSlide], b[c.nextSlide], c, e), c.fx == "shuffle" && (a -= c.speedOut)) : c.continuous && i.cyclePause && (a = 10);
      if(a > 0) {
        i.cycleTimeout = setTimeout(function() {
          n(b, c, 0, !c.backwards)
        }, a)
      }
    }
    var i = c.$cont[0], l = b[c.currSlide], j = b[c.nextSlide];
    if(d && c.busy && c.manualTrump) {
      a("manualTrump in go(), stopping active transition"), g(b).stop(!0, !0), c.busy = 0, clearTimeout(i.cycleTimeout)
    }
    if(c.busy) {
      a("transition active, ignoring new tx request")
    }else {
      if(!(i.cycleStop != c.stopCount || i.cycleTimeout === 0 && !d)) {
        if(!d && !i.cyclePause && !c.bounce && (c.autostop && --c.countdown <= 0 || c.nowrap && !c.random && c.nextSlide < c.currSlide)) {
          c.end && c.end(c)
        }else {
          var k = !1;
          if((d || !i.cyclePause) && c.nextSlide != c.currSlide) {
            var k = !0, p = c.fx;
            l.cycleH = l.cycleH || g(l).height();
            l.cycleW = l.cycleW || g(l).width();
            j.cycleH = j.cycleH || g(j).height();
            j.cycleW = j.cycleW || g(j).width();
            if(c.multiFx) {
              if(e && (c.lastFx === h || ++c.lastFx >= c.fxs.length)) {
                c.lastFx = 0
              }else {
                if(!e && (c.lastFx === h || --c.lastFx < 0)) {
                  c.lastFx = c.fxs.length - 1
                }
              }
              p = c.fxs[c.lastFx]
            }
            if(c.oneTimeFx) {
              p = c.oneTimeFx, c.oneTimeFx = null
            }
            g.fn.cycle.resetState(c, p);
            c.before.length && g.each(c.before, function(a, b) {
              i.cycleStop == c.stopCount && b.apply(j, [l, j, c, e])
            });
            var q = function() {
              c.busy = 0;
              g.each(c.after, function(a, b) {
                i.cycleStop == c.stopCount && b.apply(j, [l, j, c, e])
              });
              i.cycleStop || f()
            };
            a("tx firing(" + p + "); currSlide: " + c.currSlide + "; nextSlide: " + c.nextSlide);
            c.busy = 1;
            if(c.fxFn) {
              c.fxFn(l, j, c, q, e, d && c.fastOnEvent)
            }else {
              if(g.isFunction(g.fn.cycle[c.fx])) {
                g.fn.cycle[c.fx](l, j, c, q, e, d && c.fastOnEvent)
              }else {
                g.fn.cycle.custom(l, j, c, q, e, d && c.fastOnEvent)
              }
            }
          }else {
            f()
          }
          if(k || c.nextSlide == c.currSlide) {
            if(c.lastSlide = c.currSlide, c.random) {
              c.currSlide = c.nextSlide;
              if(++c.randomIndex == b.length) {
                c.randomIndex = 0, c.randomMap.sort(function() {
                  return Math.random() - 0.5
                })
              }
              c.nextSlide = c.randomMap[c.randomIndex];
              if(c.nextSlide == c.currSlide) {
                c.nextSlide = c.currSlide == c.slideCount - 1 ? 0 : c.currSlide + 1
              }
            }else {
              c.backwards ? (d = c.nextSlide - 1 < 0) && c.bounce ? (c.backwards = !c.backwards, c.nextSlide = 1, c.currSlide = 0) : (c.nextSlide = d ? b.length - 1 : c.nextSlide - 1, c.currSlide = d ? 0 : c.nextSlide + 1) : (d = c.nextSlide + 1 == b.length) && c.bounce ? (c.backwards = !c.backwards, c.nextSlide = b.length - 2, c.currSlide = b.length - 1) : (c.nextSlide = d ? 0 : c.nextSlide + 1, c.currSlide = d ? b.length - 1 : c.nextSlide - 1)
            }
          }
          k && c.pager && c.updateActivePagerLink(c.pager, c.currSlide, c.activePagerClass)
        }
      }
    }
  }
  function m(b, c, d, e) {
    if(d.timeoutFn) {
      for(b = d.timeoutFn.call(b, b, c, d, e);d.fx != "none" && b - d.speed < 250;) {
        b += d.speed
      }
      a("calculated timeout: " + b + "; speed: " + d.speed);
      if(b !== !1) {
        return b
      }
    }
    return d.timeout
  }
  function p(a, b) {
    var c = b ? 1 : -1, d = a.elements, e = a.$cont[0], f = e.cycleTimeout;
    if(f) {
      clearTimeout(f), e.cycleTimeout = 0
    }
    if(a.random && c < 0) {
      a.randomIndex--;
      if(--a.randomIndex == -2) {
        a.randomIndex = d.length - 2
      }else {
        if(a.randomIndex == -1) {
          a.randomIndex = d.length - 1
        }
      }
      a.nextSlide = a.randomMap[a.randomIndex]
    }else {
      if(a.random) {
        a.nextSlide = a.randomMap[a.randomIndex]
      }else {
        if(a.nextSlide = a.currSlide + c, a.nextSlide < 0) {
          if(a.nowrap) {
            return!1
          }
          a.nextSlide = d.length - 1
        }else {
          if(a.nextSlide >= d.length) {
            if(a.nowrap) {
              return!1
            }
            a.nextSlide = 0
          }
        }
      }
    }
    e = a.onPrevNextEvent || a.prevNextClick;
    g.isFunction(e) && e(c > 0, a.nextSlide, d[a.nextSlide]);
    n(d, a, 1, b);
    return!1
  }
  function q(a, b) {
    var c = g(b.pager);
    g.each(a, function(d, e) {
      g.fn.cycle.createPagerAnchor(d, e, c, a, b)
    });
    b.updateActivePagerLink(b.pager, b.startingSlide, b.activePagerClass)
  }
  function r(b) {
    function c(a) {
      a = parseInt(a, 10).toString(16);
      return a.length < 2 ? "0" + a : a
    }
    function d(a) {
      for(;a && a.nodeName.toLowerCase() != "html";a = a.parentNode) {
        var b = g.css(a, "background-color");
        if(b && b.indexOf("rgb") >= 0) {
          return a = b.match(/\d+/g), "#" + c(a[0]) + c(a[1]) + c(a[2])
        }
        if(b && b != "transparent") {
          return b
        }
      }
      return"#ffffff"
    }
    a("applying clearType background-color hack");
    b.each(function() {
      g(this).css("background-color", d(this))
    })
  }
  g.expr[":"].paused = function(a) {
    return a.cyclePause
  };
  g.fn.cycle = function(b, c) {
    var f = {s:this.selector, c:this.context};
    if(this.length === 0 && b != "stop") {
      if(!g.isReady && f.s) {
        return d("DOM not ready, queuing slideshow"), g(function() {
          g(f.s, f.c).cycle(b, c)
        }), this
      }
      d("terminating; zero elements found by selector" + (g.isReady ? "" : " (DOM not ready)"));
      return this
    }
    return this.each(function() {
      var h = e(this, b, c);
      if(h !== !1) {
        h.updateActivePagerLink = h.updateActivePagerLink || g.fn.cycle.updateActivePagerLink;
        this.cycleTimeout && clearTimeout(this.cycleTimeout);
        this.cycleStop = this.cycleTimeout = this.cyclePause = 0;
        var l = g(this), j = h.slideExpr ? g(h.slideExpr, this) : l.children(), k = j.get();
        if(k.length < 2) {
          d("terminating; too few slides: " + k.length)
        }else {
          var p = i(l, j, k, h, f);
          if(p !== !1 && (l = p.continuous ? 10 : m(k[p.currSlide], k[p.nextSlide], p, !p.backwards))) {
            l += p.delay || 0, l < 10 && (l = 10), a("first timeout: " + l), this.cycleTimeout = setTimeout(function() {
              n(k, p, 0, !h.backwards)
            }, l)
          }
        }
      }
    })
  };
  g.fn.cycle.resetState = function(a, b) {
    b = b || a.fx;
    a.before = [];
    a.after = [];
    a.cssBefore = g.extend({}, a.original.cssBefore);
    a.cssAfter = g.extend({}, a.original.cssAfter);
    a.animIn = g.extend({}, a.original.animIn);
    a.animOut = g.extend({}, a.original.animOut);
    a.fxFn = null;
    g.each(a.original.before, function() {
      a.before.push(this)
    });
    g.each(a.original.after, function() {
      a.after.push(this)
    });
    var c = g.fn.cycle.transitions[b];
    g.isFunction(c) && c(a.$cont, g(a.elements), a)
  };
  g.fn.cycle.updateActivePagerLink = function(a, b, c) {
    g(a).each(function() {
      g(this).children().removeClass(c).eq(b).addClass(c)
    })
  };
  g.fn.cycle.next = function(a) {
    p(a, 1)
  };
  g.fn.cycle.prev = function(a) {
    p(a, 0)
  };
  g.fn.cycle.createPagerAnchor = function(b, d, e, f, i) {
    g.isFunction(i.pagerAnchorBuilder) ? (d = i.pagerAnchorBuilder(b, d), a("pagerAnchorBuilder(" + b + ", el) returned: " + d)) : d = '<a href="#">' + (b + 1) + "</a>";
    if(d) {
      var h = g(d);
      if(h.parents("body").length === 0) {
        var l = [];
        e.length > 1 ? (e.each(function() {
          var a = h.clone(!0);
          g(this).append(a);
          l.push(a[0])
        }), h = g(l)) : h.appendTo(e)
      }
      i.pagerAnchors = i.pagerAnchors || [];
      i.pagerAnchors.push(h);
      e = function(a) {
        a.preventDefault();
        i.nextSlide = b;
        var a = i.$cont[0], c = a.cycleTimeout;
        if(c) {
          clearTimeout(c), a.cycleTimeout = 0
        }
        a = i.onPagerEvent || i.pagerClick;
        g.isFunction(a) && a(i.nextSlide, f[i.nextSlide]);
        n(f, i, 1, i.currSlide < b)
      };
      /mouseenter|mouseover/i.test(i.pagerEvent) ? h.hover(e, function() {
      }) : h.bind(i.pagerEvent, e);
      !/^click/.test(i.pagerEvent) && !i.allowPagerClickBubble && h.bind("click.cycle", function() {
        return!1
      });
      var m = i.$cont[0], j = !1;
      i.pauseOnPagerHover && h.hover(function() {
        j = !0;
        m.cyclePause++;
        c(m, !0, !0)
      }, function() {
        j && m.cyclePause--;
        c(m, !0, !0)
      })
    }
  };
  g.fn.cycle.hopsFromLast = function(a, b) {
    var c = a.lastSlide, d = a.currSlide;
    return b ? d > c ? d - c : a.slideCount - c : d < c ? c - d : c + a.slideCount - d
  };
  g.fn.cycle.commonReset = function(a, b, c, d, e, f) {
    g(c.elements).not(a).hide();
    if(typeof c.cssBefore.opacity == "undefined") {
      c.cssBefore.opacity = 1
    }
    c.cssBefore.display = "block";
    if(c.slideResize && d !== !1 && b.cycleW > 0) {
      c.cssBefore.width = b.cycleW
    }
    if(c.slideResize && e !== !1 && b.cycleH > 0) {
      c.cssBefore.height = b.cycleH
    }
    c.cssAfter = c.cssAfter || {};
    c.cssAfter.display = "none";
    g(a).css("zIndex", c.slideCount + (f === !0 ? 1 : 0));
    g(b).css("zIndex", c.slideCount + (f === !0 ? 0 : 1))
  };
  g.fn.cycle.custom = function(a, b, c, d, e, f) {
    var i = g(a), h = g(b), l = c.speedIn, a = c.speedOut, m = c.easeIn, b = c.easeOut, j = c.animInDelay, e = c.animOutDelay;
    h.css(c.cssBefore);
    f && (l = typeof f == "number" ? a = f : a = 1, m = b = null);
    var k = function() {
      h.delay(j).animate(c.animIn, l, m, function() {
        d()
      })
    };
    i.delay(e).animate(c.animOut, a, b, function() {
      i.css(c.cssAfter);
      c.sync || k()
    });
    c.sync && k()
  };
  g.fn.cycle.transitions = {fade:function(a, b, c) {
    b.not(":eq(" + c.currSlide + ")").css("opacity", 0);
    c.before.push(function(a, b, c) {
      g.fn.cycle.commonReset(a, b, c);
      c.cssBefore.opacity = 0
    });
    c.animIn = {opacity:1};
    c.animOut = {opacity:0};
    c.cssBefore = {top:0, left:0}
  }};
  g.fn.cycle.ver = function() {
    return"3.0.3"
  };
  g.fn.cycle.defaults = {activePagerClass:"activeSlide", after:null, allowPagerClickBubble:!1, animIn:null, animInDelay:0, animOut:null, animOutDelay:0, aspect:!1, autostop:0, autostopCount:0, backwards:!1, before:null, center:null, cleartype:!g.support.opacity, cleartypeNoBg:!1, containerResize:1, containerResizeHeight:0, continuous:0, cssAfter:null, cssBefore:null, delay:0, easeIn:null, easeOut:null, easing:null, end:null, fastOnEvent:0, fit:0, fx:"fade", fxFn:null, height:"auto", manualTrump:!0, 
  metaAttr:"cycle", next:null, nowrap:0, onPagerEvent:null, onPrevNextEvent:null, pager:null, pagerAnchorBuilder:null, pagerEvent:"click.cycle", pause:0, pauseOnPagerHover:0, prev:null, prevNextEvent:"click.cycle", random:0, randomizeEffects:1, requeueOnImageNotLoaded:!0, requeueTimeout:250, rev:0, shuffle:null, skipInitializationCallbacks:!1, slideExpr:null, slideResize:1, speed:1E3, speedIn:null, speedOut:null, startingSlide:h, sync:1, timeout:4E3, timeoutFn:null, updateActivePagerLink:null, width:null}
})(jQuery);
(function(g) {
  g.fn.cycle.transitions.none = function(h, a, d) {
    d.fxFn = function(a, d, b, f) {
      g(d).show();
      g(a).hide();
      f()
    }
  };
  g.fn.cycle.transitions.fadeout = function(h, a, d) {
    a.not(":eq(" + d.currSlide + ")").css({display:"block", opacity:1});
    d.before.push(function(a, d, b, f, i, h) {
      g(a).css("zIndex", b.slideCount + (h !== !0 ? 1 : 0));
      g(d).css("zIndex", b.slideCount + (h !== !0 ? 0 : 1))
    });
    d.animIn.opacity = 1;
    d.animOut.opacity = 0;
    d.cssBefore.opacity = 1;
    d.cssBefore.display = "block";
    d.cssAfter.zIndex = 0
  };
  g.fn.cycle.transitions.scrollUp = function(h, a, d) {
    h.css("overflow", "hidden");
    d.before.push(g.fn.cycle.commonReset);
    h = h.height();
    d.cssBefore.top = h;
    d.cssBefore.left = 0;
    d.cssFirst.top = 0;
    d.animIn.top = 0;
    d.animOut.top = -h
  };
  g.fn.cycle.transitions.scrollDown = function(h, a, d) {
    h.css("overflow", "hidden");
    d.before.push(g.fn.cycle.commonReset);
    h = h.height();
    d.cssFirst.top = 0;
    d.cssBefore.top = -h;
    d.cssBefore.left = 0;
    d.animIn.top = 0;
    d.animOut.top = h
  };
  g.fn.cycle.transitions.scrollLeft = function(h, a, d) {
    h.css("overflow", "hidden");
    d.before.push(g.fn.cycle.commonReset);
    h = h.width();
    d.cssFirst.left = 0;
    d.cssBefore.left = h;
    d.cssBefore.top = 0;
    d.animIn.left = 0;
    d.animOut.left = 0 - h
  };
  g.fn.cycle.transitions.scrollRight = function(h, a, d) {
    h.css("overflow", "hidden");
    d.before.push(g.fn.cycle.commonReset);
    h = h.width();
    d.cssFirst.left = 0;
    d.cssBefore.left = -h;
    d.cssBefore.top = 0;
    d.animIn.left = 0;
    d.animOut.left = h
  };
  g.fn.cycle.transitions.scrollHorz = function(h, a, d) {
    h.css("overflow", "hidden").width();
    d.before.push(function(a, d, b, f) {
      b.rev && (f = !f);
      g.fn.cycle.commonReset(a, d, b);
      b.cssBefore.left = f ? d.cycleW - 1 : 1 - d.cycleW;
      b.animOut.left = f ? -a.cycleW : a.cycleW
    });
    d.cssFirst.left = 0;
    d.cssBefore.top = 0;
    d.animIn.left = 0;
    d.animOut.top = 0
  };
  g.fn.cycle.transitions.scrollVert = function(h, a, d) {
    h.css("overflow", "hidden");
    d.before.push(function(a, d, b, f) {
      b.rev && (f = !f);
      g.fn.cycle.commonReset(a, d, b);
      b.cssBefore.top = f ? 1 - d.cycleH : d.cycleH - 1;
      b.animOut.top = f ? a.cycleH : -a.cycleH
    });
    d.cssFirst.top = 0;
    d.cssBefore.left = 0;
    d.animIn.top = 0;
    d.animOut.left = 0
  };
  g.fn.cycle.transitions.slideX = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g(b.elements).not(a).hide();
      g.fn.cycle.commonReset(a, d, b, !1, !0);
      b.animIn.width = d.cycleW
    });
    d.cssBefore.left = 0;
    d.cssBefore.top = 0;
    d.cssBefore.width = 0;
    d.animIn.width = "show";
    d.animOut.width = 0
  };
  g.fn.cycle.transitions.slideY = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g(b.elements).not(a).hide();
      g.fn.cycle.commonReset(a, d, b, !0, !1);
      b.animIn.height = d.cycleH
    });
    d.cssBefore.left = 0;
    d.cssBefore.top = 0;
    d.cssBefore.height = 0;
    d.animIn.height = "show";
    d.animOut.height = 0
  };
  g.fn.cycle.transitions.shuffle = function(h, a, d) {
    h = h.css("overflow", "visible").width();
    a.css({left:0, top:0});
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !0, !0, !0)
    });
    if(!d.speedAdjusted) {
      d.speed /= 2, d.speedAdjusted = !0
    }
    d.random = 0;
    d.shuffle = d.shuffle || {left:-h, top:15};
    d.els = [];
    for(h = 0;h < a.length;h++) {
      d.els.push(a[h])
    }
    for(h = 0;h < d.currSlide;h++) {
      d.els.push(d.els.shift())
    }
    d.fxFn = function(a, d, b, f, i) {
      b.rev && (i = !i);
      var h = i ? g(a) : g(d);
      g(d).css(b.cssBefore);
      var j = b.slideCount;
      h.animate(b.shuffle, b.speedIn, b.easeIn, function() {
        for(var d = g.fn.cycle.hopsFromLast(b, i), e = 0;e < d;e++) {
          i ? b.els.push(b.els.shift()) : b.els.unshift(b.els.pop())
        }
        if(i) {
          d = 0;
          for(e = b.els.length;d < e;d++) {
            g(b.els[d]).css("z-index", e - d + j)
          }
        }else {
          d = g(a).css("z-index"), h.css("z-index", parseInt(d, 10) + 1 + j)
        }
        h.animate({left:0, top:0}, b.speedOut, b.easeOut, function() {
          g(i ? this : a).hide();
          f && f()
        })
      })
    };
    g.extend(d.cssBefore, {display:"block", opacity:1, top:0, left:0})
  };
  g.fn.cycle.transitions.turnUp = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !0, !1);
      b.cssBefore.top = d.cycleH;
      b.animIn.height = d.cycleH;
      b.animOut.width = d.cycleW
    });
    d.cssFirst.top = 0;
    d.cssBefore.left = 0;
    d.cssBefore.height = 0;
    d.animIn.top = 0;
    d.animOut.height = 0
  };
  g.fn.cycle.transitions.turnDown = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !0, !1);
      b.animIn.height = d.cycleH;
      b.animOut.top = a.cycleH
    });
    d.cssFirst.top = 0;
    d.cssBefore.left = 0;
    d.cssBefore.top = 0;
    d.cssBefore.height = 0;
    d.animOut.height = 0
  };
  g.fn.cycle.transitions.turnLeft = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !1, !0);
      b.cssBefore.left = d.cycleW;
      b.animIn.width = d.cycleW
    });
    d.cssBefore.top = 0;
    d.cssBefore.width = 0;
    d.animIn.left = 0;
    d.animOut.width = 0
  };
  g.fn.cycle.transitions.turnRight = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !1, !0);
      b.animIn.width = d.cycleW;
      b.animOut.left = a.cycleW
    });
    g.extend(d.cssBefore, {top:0, left:0, width:0});
    d.animIn.left = 0;
    d.animOut.width = 0
  };
  g.fn.cycle.transitions.zoom = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !1, !1, !0);
      b.cssBefore.top = d.cycleH / 2;
      b.cssBefore.left = d.cycleW / 2;
      g.extend(b.animIn, {top:0, left:0, width:d.cycleW, height:d.cycleH});
      g.extend(b.animOut, {width:0, height:0, top:a.cycleH / 2, left:a.cycleW / 2})
    });
    d.cssFirst.top = 0;
    d.cssFirst.left = 0;
    d.cssBefore.width = 0;
    d.cssBefore.height = 0
  };
  g.fn.cycle.transitions.fadeZoom = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !1, !1);
      b.cssBefore.left = d.cycleW / 2;
      b.cssBefore.top = d.cycleH / 2;
      g.extend(b.animIn, {top:0, left:0, width:d.cycleW, height:d.cycleH})
    });
    d.cssBefore.width = 0;
    d.cssBefore.height = 0;
    d.animOut.opacity = 0
  };
  g.fn.cycle.transitions.blindX = function(h, a, d) {
    h = h.css("overflow", "hidden").width();
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b);
      b.animIn.width = d.cycleW;
      b.animOut.left = a.cycleW
    });
    d.cssBefore.left = h;
    d.cssBefore.top = 0;
    d.animIn.left = 0;
    d.animOut.left = h
  };
  g.fn.cycle.transitions.blindY = function(h, a, d) {
    h = h.css("overflow", "hidden").height();
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b);
      b.animIn.height = d.cycleH;
      b.animOut.top = a.cycleH
    });
    d.cssBefore.top = h;
    d.cssBefore.left = 0;
    d.animIn.top = 0;
    d.animOut.top = h
  };
  g.fn.cycle.transitions.blindZ = function(h, a, d) {
    a = h.css("overflow", "hidden").height();
    h = h.width();
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b);
      b.animIn.height = d.cycleH;
      b.animOut.top = a.cycleH
    });
    d.cssBefore.top = a;
    d.cssBefore.left = h;
    d.animIn.top = 0;
    d.animIn.left = 0;
    d.animOut.top = a;
    d.animOut.left = h
  };
  g.fn.cycle.transitions.growX = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !1, !0);
      b.cssBefore.left = this.cycleW / 2;
      b.animIn.left = 0;
      b.animIn.width = this.cycleW;
      b.animOut.left = 0
    });
    d.cssBefore.top = 0;
    d.cssBefore.width = 0
  };
  g.fn.cycle.transitions.growY = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !0, !1);
      b.cssBefore.top = this.cycleH / 2;
      b.animIn.top = 0;
      b.animIn.height = this.cycleH;
      b.animOut.top = 0
    });
    d.cssBefore.height = 0;
    d.cssBefore.left = 0
  };
  g.fn.cycle.transitions.curtainX = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !1, !0, !0);
      b.cssBefore.left = d.cycleW / 2;
      b.animIn.left = 0;
      b.animIn.width = this.cycleW;
      b.animOut.left = a.cycleW / 2;
      b.animOut.width = 0
    });
    d.cssBefore.top = 0;
    d.cssBefore.width = 0
  };
  g.fn.cycle.transitions.curtainY = function(h, a, d) {
    d.before.push(function(a, d, b) {
      g.fn.cycle.commonReset(a, d, b, !0, !1, !0);
      b.cssBefore.top = d.cycleH / 2;
      b.animIn.top = 0;
      b.animIn.height = d.cycleH;
      b.animOut.top = a.cycleH / 2;
      b.animOut.height = 0
    });
    d.cssBefore.height = 0;
    d.cssBefore.left = 0
  };
  g.fn.cycle.transitions.cover = function(h, a, d) {
    var c = d.direction || "left", e = h.css("overflow", "hidden").width(), b = h.height();
    d.before.push(function(a, d, h) {
      g.fn.cycle.commonReset(a, d, h);
      h.cssAfter.display = "";
      c == "right" ? h.cssBefore.left = -e : c == "up" ? h.cssBefore.top = b : c == "down" ? h.cssBefore.top = -b : h.cssBefore.left = e
    });
    d.animIn.left = 0;
    d.animIn.top = 0;
    d.cssBefore.top = 0;
    d.cssBefore.left = 0
  };
  g.fn.cycle.transitions.uncover = function(h, a, d) {
    var c = d.direction || "left", e = h.css("overflow", "hidden").width(), b = h.height();
    d.before.push(function(a, d, h) {
      g.fn.cycle.commonReset(a, d, h, !0, !0, !0);
      c == "right" ? h.animOut.left = e : c == "up" ? h.animOut.top = -b : c == "down" ? h.animOut.top = b : h.animOut.left = -e
    });
    d.animIn.left = 0;
    d.animIn.top = 0;
    d.cssBefore.top = 0;
    d.cssBefore.left = 0
  };
  g.fn.cycle.transitions.toss = function(h, a, d) {
    var c = h.css("overflow", "visible").width(), e = h.height();
    d.before.push(function(a, d, i) {
      g.fn.cycle.commonReset(a, d, i, !0, !0, !0);
      !i.animOut.left && !i.animOut.top ? g.extend(i.animOut, {left:c * 2, top:-e / 2, opacity:0}) : i.animOut.opacity = 0
    });
    d.cssBefore.left = 0;
    d.cssBefore.top = 0;
    d.animIn.left = 0
  };
  g.fn.cycle.transitions.wipe = function(h, a, d) {
    var c = h.css("overflow", "hidden").width(), e = h.height();
    d.cssBefore = d.cssBefore || {};
    var b;
    d.clip && (/l2r/.test(d.clip) ? b = "rect(0px 0px " + e + "px 0px)" : /r2l/.test(d.clip) ? b = "rect(0px " + c + "px " + e + "px " + c + "px)" : /t2b/.test(d.clip) ? b = "rect(0px " + c + "px 0px 0px)" : /b2t/.test(d.clip) ? b = "rect(" + e + "px " + c + "px " + e + "px 0px)" : /zoom/.test(d.clip) && (h = parseInt(e / 2, 10), a = parseInt(c / 2, 10), b = "rect(" + h + "px " + a + "px " + h + "px " + a + "px)"));
    d.cssBefore.clip = d.cssBefore.clip || b || "rect(0px 0px 0px 0px)";
    var h = d.cssBefore.clip.match(/(\d+)/g), f = parseInt(h[0], 10), i = parseInt(h[1], 10), l = parseInt(h[2], 10), j = parseInt(h[3], 10);
    d.before.push(function(a, b, d) {
      if(a != b) {
        var h = g(a), q = g(b);
        g.fn.cycle.commonReset(a, b, d, !0, !0, !1);
        d.cssAfter.display = "block";
        var r = 1, t = parseInt(d.speedIn / 13, 10) - 1;
        (function w() {
          var a = f ? f - parseInt(r * (f / t), 10) : 0, b = j ? j - parseInt(r * (j / t), 10) : 0, d = l < e ? l + parseInt(r * ((e - l) / t || 1), 10) : e, g = i < c ? i + parseInt(r * ((c - i) / t || 1), 10) : c;
          q.css({clip:"rect(" + a + "px " + g + "px " + d + "px " + b + "px)"});
          r++ <= t ? setTimeout(w, 13) : h.css("display", "none")
        })()
      }
    });
    g.extend(d.cssBefore, {display:"block", opacity:1, top:0, left:0});
    d.animIn = {left:0};
    d.animOut = {left:0}
  }
})(jQuery);
(function(g) {
  typeof define === "function" && define.amd ? define(["jquery"], g) : typeof module === "object" && module.exports ? module.exports = g(require("jquery")) : g(jQuery)
})(function(g) {
  var h = function() {
    function a() {
      var a = this, c = function(b) {
        g.isNumeric(b) && (b = Math.floor(b));
        return g('option[value="' + b + '"]', a.$elem)
      }, e = function(b) {
        var c = a.$elem.data("barrating");
        if(typeof b !== "undefined") {
          return c[b]
        }
        return c
      }, b = function(b, c) {
        c !== null && typeof c === "object" ? a.$elem.data("barrating", c) : a.$elem.data("barrating")[b] = c
      }, f = function() {
        return e("ratingText")
      }, i = function() {
        return e("ratingValue")
      }, h = function() {
        var b = g("<div />", {"class":"br-widget"});
        a.$elem.find("option").each(function() {
          var c, f, i;
          c = g(this).val();
          c !== e("emptyRatingValue") && (f = g(this).text(), (i = g(this).data("html")) && (f = i), c = g("<a />", {href:"#", "data-rating-value":c, "data-rating-text":f, html:a.options.showValues ? f : ""}), b.append(c))
        });
        a.options.showSelectedRating && b.append(g("<div />", {text:"", "class":"br-current-rating"}));
        a.options.reverse && b.addClass("br-reverse");
        a.options.readonly && b.addClass("br-readonly");
        return b
      }, j = function() {
        return e("userOptions").reverse ? "nextAll" : "prevAll"
      }, k = function(b) {
        c(b).prop("selected", !0);
        a.$elem.change()
      }, n = function() {
        g("option", a.$elem).prop("selected", function() {
          return this.defaultSelected
        });
        a.$elem.change()
      }, m = function(b) {
        b = b ? b : f();
        b == e("emptyRatingText") && (b = "");
        a.options.showSelectedRating && a.$elem.parent().find(".br-current-rating").text(b)
      }, p = function() {
        a.$widget.find("a").removeClass(function(a, b) {
          return(b.match(/(^|\s)br-\S+/g) || []).join(" ")
        })
      }, q = function() {
        var b = a.$widget.find('a[data-rating-value="' + i() + '"]'), c = e("userOptions").initialRating, f = g.isNumeric(i()) ? i() : 0, h = Math.round(Math.floor(c * 10) / 10 % 1 * 100);
        p();
        b.addClass("br-selected br-current")[j()]().addClass("br-selected");
        !e("ratingMade") && g.isNumeric(c) && !(c <= f) && h && (c = a.$widget.find("a"), b = b.length ? b[e("userOptions").reverse ? "prev" : "next"]() : c[e("userOptions").reverse ? "last" : "first"](), b.addClass("br-fractional"), b.addClass("br-fractional-" + h))
      }, r = function(c) {
        c.on("click.barrating", function(c) {
          var h = g(this), l = e("userOptions"), j, p;
          c.preventDefault();
          j = h.attr("data-rating-value");
          p = h.attr("data-rating-text");
          h = !e("allowEmpty") || !e("userOptions").deselectable ? !1 : i() == h.attr("data-rating-value");
          h && (j = e("emptyRatingValue"), p = e("emptyRatingText"));
          b("ratingValue", j);
          b("ratingText", p);
          b("ratingMade", !0);
          k(j);
          m(p);
          q();
          l.onSelect.call(a, i(), f(), c);
          return!1
        })
      }, t = function(a) {
        a.on("mouseenter.barrating", function() {
          var a = g(this);
          p();
          a.addClass("br-active")[j()]().addClass("br-active");
          m(a.attr("data-rating-text"))
        })
      }, s = function() {
        a.$widget.on("mouseleave.barrating blur.barrating", function() {
          m();
          q()
        })
      }, w = function(a) {
        a.on("touchstart.barrating", function(a) {
          a.preventDefault();
          a.stopPropagation();
          g(this).click()
        })
      }, z = function(a) {
        a.on("click.barrating", function(a) {
          a.preventDefault()
        })
      }, u = function(b) {
        var c = a.$widget.find("a");
        w && w(c);
        b ? (c.off(".barrating"), z(c)) : (r(c), a.options.hoverState && (t(c), s(c)))
      };
      this.show = function() {
        if(!e()) {
          var f = ["br-wrapper"];
          a.options.theme !== "" && f.push("br-theme-" + a.options.theme);
          a.$elem.wrap(g("<div />", {"class":f.join(" ")}));
          var i;
          i = (f = a.options.initialRating) ? c(f) : g("option:selected", a.$elem);
          var j;
          f = a.$elem.find('option[value="' + a.options.emptyValue + '"]');
          !f.length && a.options.allowEmpty ? (f = g("<option />", {value:a.options.emptyValue}), j = f.prependTo(a.$elem)) : j = f;
          f = i.val();
          i = i.data("html") ? i.data("html") : i.text();
          var k = a.options.allowEmpty !== null ? a.options.allowEmpty : !!j.length, p = j.length ? j.val() : null;
          j = j.length ? j.text() : null;
          b(null, {userOptions:a.options, ratingValue:f, ratingText:i, originalRatingValue:f, originalRatingText:i, allowEmpty:k, emptyRatingValue:p, emptyRatingText:j, readOnly:a.options.readonly, ratingMade:!1});
          a.$widget = h();
          a.$widget.insertAfter(a.$elem);
          q();
          m();
          u(a.options.readonly);
          a.$elem.hide()
        }
      };
      this.readonly = function(c) {
        typeof c !== "boolean" || e("readOnly") == c || (u(c), b("readOnly", c), a.$widget.toggleClass("br-readonly"))
      };
      this.set = function(c) {
        var g = e("userOptions");
        a.$elem.find('option[value="' + c + '"]').val() && (b("ratingValue", c), b("ratingText", a.$elem.find('option[value="' + c + '"]').text()), b("ratingMade", !0), k(i()), m(f()), q(), g.silent || g.onSelect.call(this, i(), f()))
      };
      this.clear = function() {
        var a = e("userOptions");
        b("ratingValue", e("originalRatingValue"));
        b("ratingText", e("originalRatingText"));
        b("ratingMade", !1);
        n();
        m(f());
        q();
        a.onClear.call(this, i(), f())
      };
      this.destroy = function() {
        var b = i(), c = f(), g = e("userOptions");
        a.$widget.find("a").off(".barrating");
        a.$widget.remove();
        a.$elem.removeData("barrating");
        a.$elem.unwrap();
        a.$elem.show();
        g.onDestroy.call(this, b, c)
      }
    }
    a.prototype.init = function(a, c) {
      this.$elem = g(c);
      return this.options = g.extend({}, g.fn.barrating.defaults, a)
    };
    return a
  }();
  g.fn.barrating = function(a, d) {
    return this.each(function() {
      var c = new h;
      g(this).is("select") || g.error("Sorry, this plugin only works with select fields.");
      if(c.hasOwnProperty(a)) {
        if(c.init(d, this), a === "show") {
          return c.show(d)
        }else {
          if(c.$elem.data("barrating")) {
            return c.$widget = g(this).next(".br-widget"), c[a](d)
          }
        }
      }else {
        if(typeof a === "object" || !a) {
          return d = a, c.init(d, this), c.show()
        }else {
          g.error("Method " + a + " does not exist on jQuery.barrating")
        }
      }
    })
  };
  g.fn.barrating.defaults = {theme:"", initialRating:null, allowEmpty:null, emptyValue:"", showValues:!1, showSelectedRating:!0, deselectable:!0, reverse:!1, readonly:!1, fastClicks:!0, hoverState:!0, silent:!1, onSelect:function() {
  }, onClear:function() {
  }, onDestroy:function() {
  }};
  g.fn.barrating.BarRating = h
});
(function(g) {
  g.fn.extend({smartpaginator:function(h) {
    var a = g.extend({totalrecords:0, recordsperpage:0, length:10, next:"Next", prev:"Prev", first:"First", last:"Last", go:"Go", theme:"green", display:"double", initval:1, datacontainer:"", dataelement:"", onchange:null, controlsalways:!1}, h);
    return this.each(function() {
      function d(b) {
        j.find("span").remove();
        var c = (b + 1) * a.recordsperpage;
        if(c > a.totalrecords) {
          c = a.totalrecords
        }
        j.append(g("<span/>").append(g("<b/>").text(b * a.recordsperpage + 1))).append(g("<span/>").text("-")).append(g("<span/>").append(g("<b/>").text(c))).append(g("<span/>").text("of")).append(g("<span/>").append(g("<b/>").text(a.totalrecords)))
      }
      function c(c) {
        m.find("li").remove();
        if(!(a.totalrecords <= a.recordsperpage)) {
          for(var h = c;h < c + a.length;h++) {
            if(h == i) {
              break
            }
            m.append(g("<li/>").append(g("<a>").attr("id", h + 1).addClass(a.theme).addClass("normal").attr("href", "javascript:void(0)").text(h + 1)).click(function() {
              f = c + g(this).closest("li").prevAll().length;
              e(f)
            }))
          }
          d(c);
          s.val(c + 1);
          m.find("li a").addClass(a.theme).removeClass("active");
          m.find("li:eq(0) a").addClass(a.theme).addClass("active");
          h = (m.find("li:eq(0) a").outerWidth() + parseInt(m.find("li:eq(0)").css("margin-left")) * 2) * m.find("li").length;
          m.css({width:h});
          b(c)
        }
      }
      function e(e) {
        var j = a.length / 2;
        a.length % 2 > 0 && (j = (a.length + 1) / 2);
        var p = 0;
        if(e >= 0 && e < i) {
          e >= j && (i - e > j ? p = e - (j - 1) : i > a.length && (p = i - a.length));
          c(p);
          d(f);
          m.find("li a").removeClass("active");
          s.val(f + 1);
          m.find('li a[id="' + (e + 1) + '"]').addClass("active");
          j = f * a.recordsperpage;
          e = j + a.recordsperpage;
          e > a.totalrecords && (e = a.totalrecords % e);
          if(h && a.onchange != null) {
            a.onchange(f + 1, j, e)
          }
          if(k != null && k.length > 0) {
            n.css("display", "none");
            g(n[0]).find("th").length > 0 && (g(n[0]).css("display", ""), j++, e++);
            for(;j < e;j++) {
              g(n[j]).css("display", "")
            }
          }
          b()
        }
      }
      function b() {
        i > a.length ? (f > 0 ? a.controlsalways ? p.css("display", "").removeClass("disabled") : p.css("display", "") : a.controlsalways ? p.css("display", "").addClass("disabled") : p.css("display", "none"), f > a.length / 2 - 1 ? a.controlsalways ? r.css("display", "").removeClass("disabled") : r.css("display", "") : a.controlsalways ? r.css("display", "").addClass("disabled") : r.css("display", "none"), f == i - 1 ? a.controlsalways ? q.css("display", "").addClass("disabled") : q.css("display", 
        "none") : a.controlsalways ? q.css("display", "").removeClass("disabled") : q.css("display", ""), i > a.length && f < i - a.length / 2 - 1 ? a.controlsalways ? t.css("display", "").removeClass("disabled") : t.css("display", "") : a.controlsalways ? t.css("display", "").addClass("disabled") : t.css("display", "none")) : a.controlsalways ? (r.css("display", "").addClass("disabled"), p.css("display", "").addClass("disabled"), q.css("display", "").addClass("disabled"), t.css("display", "").addClass("disabled")) : 
        (r.css("display", "none"), p.css("display", "none"), q.css("display", "none"), t.css("display", "none"))
      }
      var f = 0, i = parseInt(a.totalrecords / a.recordsperpage);
      a.totalrecords % a.recordsperpage > 0 && i++;
      var h = !1, j = g(this).addClass("pager").addClass(a.theme);
      j.find("ul").remove();
      j.find("div").remove();
      j.find("span").remove();
      var k, n;
      a.datacontainer != "" && (k = g("#" + a.datacontainer), n = g("" + a.dataelement + "", k));
      var m = g("<ul/>"), p = g("<div/>").text(a.prev).click(function() {
        if(g(this).hasClass("disabled")) {
          return!1
        }
        f = parseInt(m.find("li a.active").text()) - 1;
        e(--f)
      }).addClass("btn"), q = g("<div/>").text(a.next).click(function() {
        if(g(this).hasClass("disabled")) {
          return!1
        }
        f = parseInt(m.find("li a.active").text());
        e(f)
      }).addClass("btn"), r = g("<div/>").text(a.first).click(function() {
        if(g(this).hasClass("disabled")) {
          return!1
        }
        f = 0;
        e(0)
      }).addClass("btn"), t = g("<div/>").text(a.last).click(function() {
        if(g(this).hasClass("disabled")) {
          return!1
        }
        f = i - 1;
        e(f)
      }).addClass("btn"), s = g("<input/>").attr("type", "text").keydown(function(a) {
        var b;
        b = s;
        var c = b.get(0).selectionStart, d = b.get(0).selectionEnd, e = document.selection;
        b = e && e.createRange().text.length != 0 ? !0 : !e && b.val().substring(c, d).length != 0 ? !0 : !1;
        b && s.val("");
        a.which >= 48 && a.which < 58 ? (b = parseInt(s.val() + (a.which - 48)), b > 0 && b <= i || a.preventDefault()) : a.which == 8 || a.which == 46 || a.preventDefault()
      }), w = g("<input/>").attr("type", "button").attr("value", a.go).addClass("btn").click(function() {
        if(s.val() == "") {
          return!1
        }else {
          f = parseInt(s.val()) - 1, e(f)
        }
      });
      j.append(r).append(p).append(m).append(q).append(t).append(g("<div/>").addClass("short").append(s).append(w));
      a.display == "single" && (w.css("display", "none"), s.css("display", "none"));
      c(0);
      if(a.initval == 0) {
        a.initval = 1
      }
      f = a.initval - 1;
      e(f);
      h = !0
    })
  }})
})(jQuery);
window.onbeforeunload = function() {
  unityObj.m_isRemote && (unityObj.timeoutID && clearTimeout(unityObj.timeoutID), unityObj.closeSocket())
};
$(window).on("keydown", function(g) {
  if(g.ctrlKey || g.metaKey) {
    switch(String.fromCharCode(g.which).toLowerCase()) {
      case "a":
        g.preventDefault(), g = $("input[type='text']:focus"), g.length && g.select()
    }
  }
});
UnityObj = function() {
  var g, h;
  g = function(a, d) {
    console.log("debug", a, d)
  };
  h = function(a, d) {
    console.log("error", a, d)
  };
  return{k_protocolVersion:"1.0", k_serviceName:"json-rmc", k_typGetStubInfo:"GETSTUBINFO", k_typInvoke:"INVOKE", k_typOnEvent:"ONEVENT", k_typGlobalEvent:"GLOBALEVENT", k_connectionTimout:5E3, k_errNoDirectUnityObject:"no-unity-object", k_remoteAddress:"localhost", k_remotePort:8789, m_requestID:1, m_isRemote:window.unityAsync === void 0, m_wsConnection:null, m_requestCallbacks:{}, m_eventCallbacks:{}, m_waitingEvents:{}, m_requestHistory:[], callProxyMgr:function(a, d) {
    var c = this;
    a.version = this.k_protocolVersion;
    a.messageID = this.m_requestID++;
    a.type === this.k_typOnEvent ? (this.m_eventCallbacks[a.messageID] = d, this.m_waitingEvents[a.messageID] = {info:a, callback:d}) : this.m_requestCallbacks[a.messageID] = d;
    this.m_requestHistory.push(a);
    this.m_requestHistory.length > 100 && this.m_requestHistory.splice(0, 20);
    unityObj.m_isRemote ? this.isSocketConnected() ? this.m_wsConnection.send(JSON.stringify(a)) : this.initializeSocket(function(e) {
      e ? d({message:"Cannot connect to the Unity engine, Is the editor running?", extra:a}) : c.m_wsConnection.send(JSON.stringify(a))
    }) : window.unityAsync({className:"window.unityScriptObject", funcName:"processMessage", funcArgs:[JSON.stringify(a)], onSuccess:function(a) {
      unityObj.processResult(a)
    }})
  }, cancelEvent:function(a) {
    var d = this;
    $.each(this.m_eventCallbacks, function(c, e) {
      if(c.event === a) {
        return delete d.m_eventCallbacks[e], !0
      }
      return!1
    });
    $.each(this.m_waitingEvents, function(c, e) {
      c.info.event === a && delete d.m_waitingEvents[e];
      return!0
    });
    return!1
  }, cancelEvents:function() {
    this.m_eventCallbacks.length = 0;
    var a = $.map(this.m_waitingEvents, function(a) {
      return a.callback
    });
    this.m_waitingEvents.length = 0;
    $.each(a, function(a, c) {
      c({cancelled:!0})
    })
  }, closeSocket:function() {
    if(this.m_wsConnection) {
      this.m_wsConnection.onopen = function() {
      }, this.m_wsConnection.onclose = function() {
      }, this.m_wsConnection.onerror = function() {
      }, this.m_wsConnection.onmessage = function() {
      }, this.isSocketConnected() && this.m_wsConnection.close(), this.m_wsConnection = null
    }
  }, findRequestHistory:function(a) {
    return $.each(this.m_requestHistory, function(d, c) {
      return c.messageID === a
    })
  }, getUnityObject:function(a, d) {
    this.callProxyMgr({type:this.k_typGetStubInfo, reference:a}, d)
  }, initializeSocket:function(a) {
    var d = this;
    this.m_wsConnection = new WebSocket("ws://" + this.k_remoteAddress + ":" + this.k_remotePort + "/" + this.k_serviceName, []);
    unityObj.timeoutID = setTimeout(function() {
      d.isSocketConnected() || (d.closeSocket(), a("Cannot connect to the Unity engine, Is the editor running?"))
    }, this.k_connectionTimout);
    this.m_wsConnection.onopen = function() {
      a && a(null)
    };
    this.m_wsConnection.onclose = function() {
      d.closeSocket()
    };
    this.m_wsConnection.onerror = function(c) {
      a ? a(c) : c("Couldn't process response from the unity engine", c)
    };
    this.m_wsConnection.onmessage = function(a) {
      try {
        d.processResult(a.data)
      }catch(e) {
        e("Couldn't process response from the unity engine", e)
      }
    }
  }, isSocketConnected:function() {
    if(!this.m_wsConnection) {
      return!1
    }
    return this.m_wsConnection.readyState === WebSocket.OPEN
  }, makeReplyData:function(a, d) {
    return{exception:a, serverReply:d, originalCall:this.findRequestHistory(d.messageID)}
  }, processResult:function(a) {
    var d = null, c = this, e, b, f = null, i, l, j;
    try {
      d = JSON.parse(a)
    }catch(k) {
      h("Couldn't parse the reply from the unity engine", k)
    }
    if(d && d.type === this.k_typGlobalEvent) {
      console.log("Global event received: " + d.event), this.cancelEvents()
    }else {
      if(b = this.m_requestCallbacks[d.messageID], b !== void 0 ? delete this.m_requestCallbacks[d.messageID] : b = this.m_eventCallbacks[d.messageID], d.status < 0) {
        console.error("processResult error: " + a), b && b(d, null)
      }else {
        if(d.type === this.k_typGetStubInfo) {
          j = {}, j.events = d.result.events, $.each(d.result.properties, function(a, b) {
            j[b.name] = b.value
          }), $.each(d.result.methods, function(a, b) {
            j[b.name] = function() {
              arguments.length < 1 && g("last argument is not of type function for callback, callback ignored", c.makeReplyData(null, d));
              var a = null;
              typeof arguments[arguments.length - 1] !== "function" ? g("last argument is not of type function for callback, callback ignored", c.makeReplyData(null, d)) : a = arguments[arguments.length - 1];
              e = {type:c.k_typInvoke, destination:d.reference, method:b.name, params:[]};
              i = 0;
              for(l = arguments.length - (a ? 1 : 0);i < l;i++) {
                e.params.push(arguments[i])
              }
              c.callProxyMgr(e, a)
            }
          }), j.on = function(a, b) {
            if(this.events.indexOf(a) === -1) {
              throw"Cannot register to unknown event <" + a + ">";
            }
            c.callProxyMgr({type:c.k_typOnEvent, destination:d.reference, event:a}, b)
          }, j.off = function(a) {
            c.cancelEvent(a)
          }, f = j
        }else {
          if(d.type === this.k_typInvoke) {
            f = d.result
          }else {
            if(d.type === this.k_typEvent) {
              f = d.result
            }
          }
        }
        try {
          b && b(null, f)
        }catch(n) {
          h("An error occured in the callback for the request", this.makeReplyData(n, d))
        }
      }
    }
  }}
};
window.unityObj = new UnityObj;
window.unityOnEvent = function(g) {
  window.unityObj.processResult(g)
};
Kharma.Admin = function() {
  var g = "", h = "pendingReview", a = !1, d = null, c, e, b, f, i, l, j, k, n, m, p, q, r, t, s, w, z, u, v;
  i = function(b) {
    var c = $("#adminarea"), d = $("<input id='adminlistsearch' type='text'/>"), e = $("<select id='adminliststatus'><option value='pendingReview'>Pending Review</option><option value='accepted'>Accepted</option><option value='declined'>Declined</option><option value='published'>Published</option><option value='disabled'>Disabled</option><option value='any'>Any</option></select>"), l = $("<form id='adminsearchform'>"), j = $("#admin-header"), m = $("<a class='button' id='admin-close'>Close<span class='icon'></span></a>");
    a = !0;
    h === "declined" || h === "published" ? b || (b = 1) : b = null;
    j.length === 0 ? (j = $("<div id='admin-header'></div>"), c.append(j, "<div id='admin-content'><div id='admin-package-list'><h1>Loading...</h1></div></div>")) : (g = $.trim($("#adminlistsearch").val()), j.empty());
    j.append(e);
    e.val(h);
    j.append(l.append(d));
    l.on("submit", function() {
      i();
      return!1
    });
    d.val($.trim(g));
    j.append("<div id='paging' class='paging'></div>");
    j.append(f("refresh", "Refresh"));
    !Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() && (j.append(m), m.off().on("click", function() {
      Kharma.toolbar.goAdmin()
    }));
    r(b);
    Kharma.toolbar.addAdministration();
    Kharma.toolbar.addAdminModeButton()
  };
  v = function() {
    var a, c, e = $("#admin-package-list").empty();
    a = 0;
    for(c = d.length;a < c;a++) {
      e.append(k(d[a]))
    }
    d.length % 2 && e.append("<div class='admin-package-filler'></div>");
    b()
  };
  r = function(a) {
    Kharma.io.post({uri:"/api/vetting/list.json", parameters:{queue:-1, status:h, query:g, page:a || 1, rows:12}, onSuccess:function(a) {
      var b = a.json.paging || {};
      b.onclick = function(a) {
        r(a)
      };
      d = a.json.results;
      $("#paging").paginate(b);
      v()
    }})
  };
  k = function(a) {
    var b = $("<div class='admin-package'></div>"), a = Handlebars.templates.packageVersionBox({item:a});
    b.append(a);
    return b
  };
  f = function(a, b, c, d) {
    a = $("<a class='" + a + "' href='#'>" + b + "</a>");
    c && (a.attr("package-id", c.package_id), a.attr("package-version-id", c.package_version_id), a.attr("package-upload-id", c.package_upload_id));
    d && a.attr("data-content", d);
    return $("<span class='admin-button'></span>").append(a)
  };
  b = function() {
    $(".refresh").off().on("click", i);
    $("#adminliststatus").off().on("change", function() {
      h = $(this).val();
      i()
    });
    $(".loghistory").off().on("click", q);
    $(".showversionlist").off().on("click", z);
    $(".accept").off().on("click", c);
    $(".decline").off().on("click", n);
    $(".revert").off().on("click", s);
    $(".enable").off().on("click", p);
    $(".disable").off().on("click", j);
    $(".comment").off().on("click", l);
    $(".preview").off().on("click", t);
    $(".download").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      Kharma.toolbar.goAdmin();
      $.address.value("com.unity3d.kharma:download/vetting-package/" + $(a.target).attr("package-version-id") + "-" + $(a.target).attr("package-upload-id"))
    })
  };
  q = function(a) {
    a.stopPropagation();
    a.preventDefault();
    var b = $(a.target).attr("package-name");
    Kharma.io.get({uri:"/api/vetting/log-history/" + $(a.target).attr("package-id") + ".json", onSuccess:function(a) {
      (new Kharma.TextMessage({title:"Package Log for " + b, message:Handlebars.templates.adminLogHistory({entries:a.json.results})})).getElement().addClass("admin")
    }})
  };
  z = function(a) {
    a.stopPropagation();
    a.preventDefault();
    u($(a.target).attr("package-id"), $(a.target).attr("package-name"))
  };
  u = function(a, b) {
    Kharma.io.get({uri:"/api/admin/package-versions/" + a + ".json", onSuccess:function(c) {
      var d, e = $("<div></div>"), f = $('<table class="version-table"></table>'), i = ["id", "published", "version_name", "status", "price", "max_unity_version", "min_unity_version", "size_pretty"], g = $("<tr></tr>");
      $.each(i, function(a, b) {
        $("<th>").append(b).appendTo(g)
      });
      f.append(g);
      $.each(c.json.package_versions, function(b, c) {
        var d = $("<tr>");
        $.each(i, function(b, e) {
          var f = c[e], i = $("<td>").addClass(e);
          f !== null ? e === "id" ? i.append("<a href='#!/preview/" + a + "/" + f + "'>" + f + "</a>") : e === "price" ? i.append(f === "0.00" ? "Free" : "$" + f) : i.append(f) : i.addClass("null").append("null");
          e === "status" && i.addClass(c[e]);
          d.append(i)
        });
        f.append(d)
      });
      e.append(f);
      d = new Kharma.TextMessage({title:"Version List for " + b, message:e.html()});
      c = d.getElement();
      c.addClass("admin");
      $(c.find(".id")).off().on("click", function() {
        d.close();
        Kharma.toolbar.goAdmin()
      })
    }})
  };
  l = function(a) {
    a.stopPropagation();
    a.preventDefault();
    m("comment", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  c = function(a) {
    a.stopPropagation();
    a.preventDefault();
    m("accept", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  n = function(a) {
    a.stopPropagation();
    a.preventDefault();
    m("decline", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  m = function(a, b, c, d) {
    Kharma.session.getSession(function(e) {
      new Kharma.AdminStatusDialog({header:a.charAt(0).toUpperCase() + a.substr(1).replace(/e$/, "") + "ing " + d, necker:"Package ID " + b + ", Package Version ID " + c, action:a, emailUrl:"/api/admin/email-redirect/" + a + "/" + b + "/" + c + ".json?xunitysession=" + e, onSubmit:function(d) {
        w(a, b, c, d)
      }})
    })
  };
  w = function(a, b, c, d) {
    Kharma.io.post({uri:"/api/vetting/" + a + "/" + b + "/" + c + ".json", parameters:d, onSuccess:function(d) {
      d.json && d.json.status === "ok" ? new Kharma.TimedMessage({title:"OK", message:"Action successful.", timeout:2}) : e(a, b, c)
    }, onFailure:function() {
      e(a, b, c)
    }})
  };
  e = function(a, b, c) {
    new Kharma.TimedMessage({title:"Error", message:"Action '" + a + "' not applied to package " + b + " / package version " + c + ". Check package log for details", timeout:5})
  };
  s = function(a) {
    a.stopPropagation();
    a.preventDefault();
    m("revert", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  p = function(a) {
    a.stopPropagation();
    a.preventDefault();
    m("enable", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name"))
  };
  t = function(a) {
    a.stopPropagation();
    a.preventDefault();
    $.address.value("preview/" + $(a.target).attr("package-id") + "/" + $(a.target).attr("package-version-id"));
    Kharma.toolbar.goAdmin()
  };
  j = function(a, b, c) {
    $("#featured_in_top").checked ? new Kharma.TimedMessage({title:"DISABLE PACKAGE", message:"Top Featured package can NOT be disabled.", timeout:3}) : (a.stopPropagation(), a.preventDefault(), b ? m("disable", b, c) : m("disable", $(a.target).attr("package-id"), $(a.target).attr("package-version-id"), $(a.target).attr("package-name")))
  };
  return{acceptPackage:c, buildAdmin:i, disablePackage:j, declinePackage:n, disableAdmin:function() {
    a = !1;
    Kharma.toolbar.removeAdministration()
  }, goPage:function(a) {
    a.stopPropagation();
    a.preventDefault();
    (a = $(a.target).attr("data-page")) && i(a)
  }, isActive:a}
};
Kharma.admin = new Kharma.Admin;
Kharma.AdminContent = function(g) {
  var g = g || {}, h = g.categoryId, a = g.packageId, d = g.packageVersionId || 0, c = g.isPreview, e = g.packageName, b = g.publisherId, f, i, l, j, k, n, m, p;
  n = function() {
    c || i();
    f()
  };
  i = function() {
    Kharma.io.get({uri:"/api/admin/package-featured/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      var b = $("#featured_in_top"), c = $("#featured_in_home"), d = $("#featured_in_category"), e = Kharma.toolbar;
      b && c && (a.json.primary ? (b.attr("checked", "checked"), b.prop("checked", !0), c.attr("disabled", !0), b.attr("disabled", !0)) : (b.removeAttr("checked"), b.prop("checked", !1), c.removeAttr("disabled"), b.removeAttr("disabled")), c.removeAttr("checked"), a.json.secondary && (c.attr("checked", "checked"), c.prop("checked", !0)), d && (d.removeAttr("disabled"), d.removeAttr("checked"), d.prop("checked", !1), a.json.category && (d.attr("checked", "checked"), d.prop("checked", !0))), e.loader && 
      e.loader.clear())
    }})
  };
  f = function() {
    var b = 0, e, f = $(".featured"), i = function(a) {
      $(a.target).attr("checked") ? (p(a, "remove"), $(a.target).removeAttr("checked"), $(a.target).prop("checked", !1)) : (p(a, "assign"), $(a.target).attr("checked", "checked"), $(a.target).prop("checked", !0))
    };
    if(f && f.length > 0) {
      for(e = f.length;b < e;b++) {
        $(f[b]).off().on("click", i)
      }
    }
    $("#editname").off().on("click", k);
    $("#editdescription").off().on("click", j);
    $("#editcategory").off().on("click", l);
    if(!c) {
      $("#disablepackage").off().on("click", function(b) {
        Kharma.admin.disablePackage(b, a, d)
      })
    }
  };
  p = function(b, c) {
    var d = $(b.target).attr("featured-in");
    b.stopPropagation();
    b.preventDefault();
    Kharma.toolbar.loader = $("#pageload") && new Kharma.UI.Loader($("#pageload"), "Contacting Asset Store");
    switch(d) {
      case "category":
        Kharma.io.flushCacheKey("/api/category/featured/" + h + ".json");
        break;
      case "home":
      ;
      case "top":
        Kharma.io.flushCacheKey("/api/home/featured.json")
    }
    Kharma.io.post({uri:"/api/admin/assign_featured/" + a + ".json", parameters:{featured:d, action:c}, pageSpecific:!0, onSuccess:function() {
      n()
    }})
  };
  j = function(b) {
    b.stopPropagation();
    b.preventDefault();
    Kharma.io.get({uri:"/api/content/preview/" + a + "/" + d + ".json", pageSpecific:!0, onSuccess:function(a) {
      new Kharma.TextDialog({className:"admindialog admindescription", header:"Description", text:a.json.content.description, callback:function(a) {
        m({description:a.text})
      }})
    }})
  };
  k = function(b) {
    b.stopPropagation();
    b.preventDefault();
    Kharma.io.get({uri:"/api/content/preview/" + a + "/" + d + ".json", pageSpecific:!0, onSuccess:function(a) {
      new Kharma.TextDialog({className:"admindialog admineditname", header:"Package Title", text:a.json.content.title, callback:function(a) {
        m({name:a.text})
      }, type:"textField"})
    }})
  };
  l = function(b) {
    b.stopPropagation();
    b.preventDefault();
    Kharma.io.get({uri:"/api/vetting/metadata/" + a + "/" + d + ".json", pageSpecific:!0, onSuccess:function() {
      Kharma.io.get({uri:"/api/admin/categories.json", pageSpecific:!0, onSuccess:function(a) {
        var a = a.json.categories, b = 0, c;
        for(c = a.length;b < c;b++) {
          a[b].attributes.selected = a[b].attributes.value === h || !1
        }
        h = a;
        new Kharma.TextDialog({className:"admindialog admineditcategory", header:"Package Category", text:a, callback:function(a) {
          m({category_id:a.text})
        }, type:"selectField"})
      }})
    }})
  };
  m = function(b) {
    Kharma.io.post({uri:"/api/vetting/metadata/" + a + "/" + d + ".json", parameters:b, pageSpecific:!0, onSuccess:function() {
      var b = Kharma.history.getCurrentPage();
      c || Kharma.io.flushCacheKey("/api/content/overview/" + a + ".json");
      c ? (b.clear(), b.load()) : Kharma.history.replacePage(new Kharma.ContentPage({id:a}))
    }})
  };
  (function() {
    var a = $("<div id='adminlayer' class='adminlayer_background admin_group'></div>"), d = $("<div class='adminlayer_content admin_group'><h1>Admin</h1></div>"), f = $("#assetStore"), i = $("<span></span>");
    $(".admin_group").remove();
    c || d.append("<p>Featured:</p><p id='adminfeaturedpackage'><label><input type='checkbox' class='featured' disabled='true' id='featured_in_category' featured-in='category'>Category</label><br><label><input type='checkbox' class='featured' disabled='true' id='featured_in_home' featured-in='home'>Home</label><br><label><input type='checkbox' class='featured' disabled='true' id='featured_in_top' featured-in='top'>Top</label><br></p><br>");
    d.append("<p><span>[<a id='editname'> Edit Name </a>]</span></p>");
    d.append("<p><span>[<a id='editdescription'> Edit Description </a>]</span></p>");
    d.append("<p><span>[<a id='editcategory'> Edit Category </a>]</span></p><br>");
    c || d.append("<p><span>[<a id='disablepackage'> Disable </a>]</span></p><br>");
    d.append($("<p></p>").append(i));
    Kharma.io.get({uri:"/api/admin/publishers/" + b + ".json", pageSpecific:!0, onSuccess:function(a) {
      a.json.publishers[0] && i.append('<a href="mailto:' + encodeURIComponent(a.json.publishers[0].email) + "?subject=" + encodeURIComponent(e) + '" class="icon" id="admin-email">Email</a>')
    }});
    f.append(a);
    f.append(d);
    n()
  })(g)
};
Kharma.Version = "0";
Kharma.AssetStore = function() {
  return{login:function() {
    Kharma.ga.event({eventAction:"Login", eventLabel:"Login called from Unity Editor"})
  }, openURL:function(g) {
    setTimeout(function() {
      var h = g.substring(0, g.indexOf("?")), a = {}, d = g.substring(g.indexOf("?") + 1);
      Kharma.unityEditor.getInitialOpenURL(function(c) {
        if(c) {
          throw c.message;
        }else {
          Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() && ((g.indexOf("com.unity3d.kharma:") !== -1 || g.indexOf("content") !== -1) && $.address.value(g), g.indexOf("mixamo") !== -1 && (h.indexOf("start_transaction") !== -1 ? ($(d.split(/[&;]/)).each(function(c, b) {
            var d = b.split("=");
            a[d[0]] = decodeURIComponent(d[1].replace(/\+/g, "%20"))
          }), Kharma.login.loginRequired(function(c) {
            if(c) {
              var b = new Kharma.TextMessage({title:Kharma.l10n.mixamo.title, message:Kharma.l10n.mixamo.message, options:{size:"small"}, noButtons:!0});
              Kharma.cart = Kharma.cart || new Kharma.Cart;
              Kharma.cart.addAction([Kharma.cart.addMixamoItem, {transactionId:a.transaction_id, amount:a.amount, description:a.description, url:a.base_url, showCart:!0, callback:function() {
                b.close()
              }}])
            }
          })) : console.error("Error: Invalid action info.type:" + g)))
        }
      })
    }, 100)
  }, refreshSkinIndex:function() {
    var g = $("body");
    g.removeClass("skin0");
    g.removeClass("skin1");
    Kharma.unityEditor.getSkinIndex(function(h, a) {
      if(h) {
        throw h.message;
      }else {
        g.addClass("skin" + a)
      }
    })
  }, updateDockStatus:function() {
  }}
};
Kharma.Cart = function() {
  var g = !1, h, a, d = [], c, e = "$ 0", b, f = "$ 0", i, l, j, k, n, m, p, q, r, t, s, w;
  n = function() {
    Kharma.cart.active = !1;
    Kharma.cart.items.length === 0 && $("#cart > div").html("");
    a.hide();
    h.remove()
  };
  w = function(b, c, i) {
    var g = b ? Kharma.io.post : Kharma.io.get;
    $("h1", a).prepend('<div class="loading-indicator"></div>');
    Kharma.login.user && !Kharma.login.user.is_anonymous && g({uri:"/api/purchase/overview.json", parameters:b || null, onSuccess:function(g) {
      var h = g.transport.getResponseHeader("X-Unity-Add-Service-Error"), l = g.json, j = l.express_checkout;
      $(".loading-indicator", a).remove();
      h ? (h === "Already Purchased" ? $.address.value("com.unity3d.kharma:download/service-instance/" + g.transport.getResponseHeader("X-Unity-ServiceInstance")) : new Kharma.TimedError({message:[Kharma.l10n.cart.error, Kharma.l10n.supplant(Kharma.l10n.cart.errorMessage, {item:b ? b.mixamo_description : ""}) + h], timeout:7}), i && i()) : (Kharma.cart.items = d = l.cart, e = l.pricetext, f = l.vat, m(), d.length === 0 ? n() : c && (j && d.length === 1 && l.price !== 0 ? new Kharma.ExpressCheckoutDialog(g) : 
      t(), i && i()), Kharma.toolbar.updateButtons())
    }})
  };
  r = function(a) {
    var b = {remove_package:a.id};
    a.type === "service-instance" && (b = {remove_service_instance:a.id});
    w(b)
  };
  l = function(c) {
    var d = 0, i = a.find("." + c.link.type + "-" + c.link.id);
    $.each(i, function(a, b) {
      d += parseInt($(b).find("input").val(), 10)
    });
    Kharma.io.post({uri:"/api/purchase/overview.json", parameters:{update_package:c.link.id + "," + d}, onSuccess:function(d) {
      if(d.json.status === "error") {
        $(a.find(".error")).text(Kharma.l10n.cart.cartMaxQuantityReached), $(a.find(".buttonbox button")[1]).addClass("disabled")
      }else {
        var d = d.json, g = "";
        $(a.find(".error")).text("");
        $(a.find(".buttonbox button")[1]).removeClass("disabled");
        $.each(d.cart, function(a, b) {
          if(b.link.id === c.link.id && b.link.type === c.link.type) {
            return c.quantity = b.quantity, c.price_unit = b.price_unit, c.pricetext = b.pricetext, c.pricetext_unit = b.pricetext_unit, !1
          }
          return!0
        });
        i = a.find("." + c.link.type + "-" + c.link.id + ".qunatity-" + c.qunatity);
        i.find(".amount input").val(c.quantity);
        i.find(".price").html(c.pricetext);
        i.find(".unit.price").html(c.pricetext_unit);
        e = d.pricetext;
        f = d.vat;
        g += "<span class='end_extra_key'>" + Kharma.l10n.cart.vat + "</span><span class='end_extra_value'>" + f + "</span>";
        g += "<span class='end_key end_grandtotal'>" + Kharma.l10n.cart.total + "</span><span class='end_value end_grandtotal'>" + e + "</span><br/>";
        b.html(g);
        i.find(".amount input").removeAttr("disabled");
        w()
      }
    }, onFailure:function() {
      w()
    }})
  };
  i = function() {
    var d = $("<button>" + Kharma.l10n.cart.checkout + "</button>"), e = $("<button>" + Kharma.l10n.cart.continueShopping + "</button>"), f = $("<div class='header'><span class='imgs'><a class='icon remove'>Clear cart</a></span><div class='description'>" + Kharma.l10n.pkg.pkg + "</div><div class='unit price'>" + Kharma.l10n.cart.unitPrice + "</div><div class='amount'>" + Kharma.l10n.cart.quantity + "&nbsp;&nbsp;&nbsp;</div><div class='price'>" + Kharma.l10n.cart.subtotal + "</div></div>"), i = $('<div class="buttonbox" />'), 
    g = f.find(".remove");
    a.empty();
    a.append("<h1>" + Kharma.l10n.cart.cart + "</h1>");
    a.append(f[0]);
    c = $("<div class='cartlist vscroll'></div>");
    a.append(c);
    b = $('<div class="totalbox"><div class="loading-indicator"></div></div>');
    a.append(b[0]);
    a.append($("<div class='error'></div>"));
    i.append(e);
    i.append(d);
    a.append(i);
    g.on("click", k);
    e.on("click", n);
    d.on("click", function() {
      $(this).hasClass("disabled") || s()
    });
    w()
  };
  p = function(a, b) {
    Kharma.io.get({uri:"/api/content/license/" + b.id + ".json", onSuccess:function(b) {
      a.push(b.json.result.license)
    }})
  };
  s = function() {
    var a = 0, b, c, e, f = [], i = 0;
    for(e = d.length;a < e;a++) {
      c = d[a], c.license && (i++, p(f, c))
    }
    i === 0 ? j() : b = setInterval(function() {
      i === f.length && i > 0 && (clearInterval(b), new Kharma.TextMessage({title:Kharma.l10n.cart.license, message:f.join("\n\n\n\n"), withCancel:!0, callback:function(a) {
        a && j()
      }}))
    }, 500)
  };
  j = function(a) {
    a && a[0] === !1 ? t() : Kharma.io.get({uri:"/api/user/overview/0.json", onSuccess:function(a) {
      a = a.json.address || {firstname:null, lastname:null, organization:null};
      (a.firstname && a.lastname || a.organization) && a.address && a.zip && a.city && a.country && (a.state || a.country !== "us" && a.country !== "ca" && a.country !== "cn") ? q() : (n(), new Kharma.AddressDialog({addressData:a}))
    }})
  };
  k = function() {
    var b = $("<button>" + Kharma.l10n.cart.empty + "</button>"), c = $("<button>" + Kharma.l10n.cart.cancel + "</button>"), d = $('<div id="message" class="dialog message vscroll" style="display: block; z-index: 99999 !important"><div class="message-body" style="padding: 20px 0px;">' + Kharma.l10n.cart.clearMessage + "</div></div>"), e = $('<div class="buttonbox" />'), f = $("<div class='modalblocker2'></div>");
    a.append(f);
    f.on("click", n);
    f.show();
    d.prepend("<h1>" + Kharma.l10n.cart.clearCart + "</h1>");
    e.append(c);
    e.append(b);
    d.append(e);
    a.append(d);
    c.click(function() {
      d.remove();
      f.remove()
    });
    b.click(function() {
      d.remove();
      f.remove();
      Kharma.io.post({uri:"/api/purchase/overview.json", parameters:{clear:1}, onSuccess:function() {
        w()
      }, onFailure:function() {
        w()
      }})
    })
  };
  q = function() {
    document.purchaseDialog = new Kharma.PurchaseDialog;
    Kharma.cart.active = !1;
    a.hide();
    h.remove();
    Kharma.toolbar.updateButtons()
  };
  m = function() {
    var a = "";
    if(c && b) {
      c.text(""), a += "<span class='end_extra_key'>" + Kharma.l10n.cart.vat + "</span><span class='end_extra_value'>" + f + "</span><span class='end_key end_grandtotal'>" + Kharma.l10n.cart.total + "</span><span class='end_value end_grandtotal'>" + e + "</span><br/>", b.html(a), d = Kharma.cart.items, d.sort(function(a, b) {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0
      }), $.each(d, function(a, b) {
        var d = $('<div class="' + b.link.type + "-" + b.link.id + ' cartitem"></div>'), e = $('<span class="description"><a href="#!/' + b.link.type + "/" + b.link.id + '">' + b.title + '</a> by <a href="#!/search/page=1/sortby=popularity/query=publisher:' + b.publisher.id + '">' + b.publisher.label + "</a></span>"), f = $('<span class="price">' + b.pricetext + "</span>"), i = $('<span class="imgs"></span>'), g = $('<a class="icon remove">Remove Item</a>'), h = $('<span class="amount"><input name="amount" value="' + 
        b.quantity + '" maxlength="2" /></span>'), j = h.find("input"), m = $('<span class="unit price">' + b.pricetext_unit + "</span>");
        i.append(g);
        d.append(i);
        d.append(e);
        d.append(f);
        e.after(m);
        m.after(h);
        e.on("click", n);
        b.multiple ? b.sale_limit !== 1 && (e.append("<em class='multiple-seats-notice'>" + Kharma.l10n.cart.requireLicense + "</em>"), b.licenses_own && b.licenses_own > 0 && e.append("<em class='multiple-seats-notice'>" + Kharma.l10n.supplant(Kharma.l10n.cart.ownLicenses, {licenses:b.licenses_own}) + "</em>"), d.addClass("multiple-licenses-available"), d.addClass("quantity-" + b.quantity), j.keydown(function(a) {
          if(!(a.keyCode === 46 || a.keyCode === 8 || a.keyCode === 9) && !(a.keyCode >= 37 && a.keyCode <= 40 || a.ctrlKey)) {
            (a.keyCode < 48 || a.keyCode > 57) && (a.keyCode < 96 || a.keyCode > 105) && a.preventDefault()
          }
        }), j.on("change", function() {
          l(b)
        }), j.blur(function(a) {
          a.target.value = a.target.value.replace(/[^\d]/g, "")
        })) : (b.quantity <= 1 && j.val("-"), j.attr("disabled", "disabled"));
        g.click(function() {
          Kharma.ga.event({eventCategory:"Cart", nonInteraction:!0, eventAction:"Remove", eventLabel:"Cart", dimension9:b.publisher.label, dimension10:b.title, metric6:-1});
          r(b.link)
        });
        c.append(d)
      })
    }
  };
  t = function() {
    Kharma.cart.active = g = !Kharma.cart.active;
    $("#assetStore").append(h);
    h.on("click", n);
    h.show();
    a.show()
  };
  (function() {
    var b = $("#assetStore");
    h = $("<div class='modalblocker'></div>");
    a = $("<div id='cartarea' class='dialog cartform main'></div>");
    b.append(a);
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, i)
  })();
  return{active:g, hasItem:function(a) {
    for(var b in d) {
      if(parseInt(d[b].id, 10) === a) {
        return!0
      }
    }
    return!1
  }, addItem:function(a, b, c) {
    Kharma.ga.view({name:"cart", dimension8:"Shopping"});
    w({add_package:a}, b, c)
  }, addMixamoItem:function(a) {
    w({add_service_instance:"mixamo", mixamo_transaction_id:a.transactionId, mixamo_amount_cents:a.amount, mixamo_description:a.description, mixamo_base_url:a.url}, a.showCart, a.callback)
  }, items:d, addAction:function(a) {
    var b = a, c = [];
    $.isArray(a) && (b = a.shift(), c = a);
    typeof b === "function" && b.apply(this, c)
  }, removeItem:r, showCart:t, updateCartContents:w}
};
Kharma.Download = function() {
  var g, h, a, d;
  h = function(a, d, b, f) {
    var i, g = b.length, h, k, n;
    for(i = 0;i < g;i++) {
      if(k = b[i], (h = k.link || {id:k.id, type:k.type}) && h.id === d && h.type === a) {
        n = k;
        break
      }
    }
    f(n)
  };
  a = function(a, d, b, f) {
    Kharma.io.post({uri:"/api/account/downloads/fetch/" + d + "/" + b + ".json", data:JSON.stringify(a), onSuccess:f})
  };
  g = function(a, d) {
    a && (parseInt(d, 10) ? new Kharma.TextMessage({title:Kharma.l10n.pkg.importing, message:Kharma.l10n.pkg.importingMessage, withCancel:!0, options:{size:"small", accept:Kharma.l10n.pkg.importPkg}, callback:function(b) {
      b && g(a, !1)
    }}) : Kharma.unityEditor.openPackage(a, function(a) {
      if(a) {
        throw a.message;
      }
    }))
  };
  d = function(a) {
    var d = [];
    $.each(a, function(a, c) {
      d.push({local_path:c.local_path, id:c.id, name:c.name, version:c.version, version_id:c.version_id, upload_id:c.upload_id})
    });
    return d
  };
  return{findLocalPath:function(a, d) {
    Kharma.unityEditor.getPackageList(function(b, f) {
      var i, g;
      if(b) {
        throw b.message;
      }else {
        for(var h = 0, k = f.results.length;h < k;h++) {
          if((i = f.results[h].link) && i.id === a && i.type === "content") {
            g = f.results[h].local_path;
            break
          }
        }
        d(g)
      }
    })
  }, findPackageById:h, getLocalPackageById:function(a, d, b) {
    Kharma.unityEditor.isEditor() ? Kharma.unityEditor.getPackageList(function(f, i) {
      if(f) {
        throw f.message;
      }else {
        h(a, d, i.results, b)
      }
    }) : b()
  }, getLocalPackages:function(c, e, b) {
    Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() ? Kharma.unityEditor.getPackageList(function(f, i) {
      if(f) {
        throw f.message;
      }else {
        a(d(i.results), c, e, b)
      }
    }) : a([], b)
  }, importPackage:g}
};
Kharma.DownloadProgressTracker = function() {
  var g = null, h = !0, a, d, c = {}, e;
  a = function(a, e, i, l) {
    if(a.type && a.id) {
      a = a.type + "/" + a.id, g || (g = Kharma.utils.windowWrapper.setInterval(function() {
        h && !$.isEmptyObject(c) && d();
        g && $.isEmptyObject(c) && (Kharma.utils.windowWrapper.clearInterval(g), g = null)
      }, 6E4)), c[a] || (c[a] = {}), c[a].downloadedBytes = i, c[a].totalBytes = l, c[a].status = e, (h || e !== "downloading") && d(), (e === "ok" || e.indexOf("Error") !== -1) && delete c[a]
    }
  };
  d = function() {
    Kharma.utils.windowWrapper.clearTimeout(e);
    h = !1;
    Kharma.io.post({uri:"/public-api/track/download-progress.json", data:JSON.stringify(c)});
    e = Kharma.utils.windowWrapper.setTimeout(function() {
      h = !0
    }, 1E4)
  };
  (function() {
    $("#mainContent").on(Kharma.utils.events.onDownloadProgress, function(b, c, d, e, g) {
      a(c, d, e, g)
    })
  })()
};
Kharma.ErrorHandler = function() {
  var g, h, a;
  h = function() {
    if(Kharma && Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous) {
      var a = "[";
      Kharma.cart && Kharma.cart.items && Kharma.cart.items.length > 0 && $.each(Kharma.cart.items, function(c, e) {
        a += e.id;
        c < Kharma.cart.items.length - 1 && (a += ", ")
      });
      a += "]";
      console.log(a)
    }
  };
  g = function(a, c, e) {
    var b, f = "notLogged";
    if(typeof a === "string") {
      c = a + " [" + c + ":" + e + "]"
    }else {
      if(typeof a === "object" && a.constructor === Error) {
        c = a.stack || "[" + a.sourceURL + ":" + a.line + "]"
      }else {
        for(b in c = a.toString() + "\n", a) {
          a.hasOwnProperty(b) && (c += b + ":" + a[b] + ".\n")
        }
      }
    }
    Kharma && Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous && (f = "logged");
    console.error("[Global Exception] " + (c + " " + f));
    h()
  };
  a = function(a) {
    console.error("[Manually trapped Exception] " + a.message, a);
    h()
  };
  (function() {
    Kharma.utils.windowWrapper.onError(g);
    $().ajaxError(function(d, c, e, b) {
      b ? a(b) : a(Error("[JQuery Ajax Error]"))
    })
  })();
  return{treatException:a}
};
Kharma.GA = function() {
  var g = "", h = "CN:N3", a = "CT:T1", d = "", c = "", e = [], b = !1, f = {}, i = document.location.href.match(/https?:\/\/\w+-(\w+)/) ? !1 : !0, l = !1, j = !1, k = !/KharmaBot/.test(window.navigator.userAgent), n = {payload:null, location:null}, m, p, q, r, t, s, w, z, u, v, o, y, B;
  m = function() {
    var a = $("#mainContent");
    a.on(Kharma.utils.events.onUserStateChange, w);
    a.on(Kharma.utils.events.onLanguageChange, t);
    $(window).on("beforeunload", z);
    b = !0;
    z()
  };
  p = function(a, b) {
    var c = typeof b[a] === "function" ? b[a] : !1;
    c && c.apply()
  };
  q = function(a, b) {
    $.ajax({crossDomain:!0, dataType:"jsonp", type:"get", url:"//www.google-analytics.com/cx/api.js?experiment=" + a, success:function() {
      var c = window.cxApi.chooseVariation();
      typeof c !== "undefined" && c >= 0 && (window.cxApi.setChosenVariation(c, a), p(c, b))
    }})
  };
  r = function(a) {
    if(i && a && window.ga.getByName && k) {
      var b = a.replace(/-/g, "");
      f[b] || (window.ga("create", a, "assetstore.unity3d.com", {name:b}), f[b] = window.ga.getByName(b), window.ga(b + ".require", "displayfeatures"))
    }
  };
  t = function() {
    i && k && (l || (l = !0, window._fbq.push(["addPixelId", "310067432528885"]), window._fbq.push(["track", "PixelInitialized", {}])), j || (j = !0, window.twttr.conversion.trackPid("l5ej9")))
  };
  s = function() {
    if(i && k) {
      for(var a = 0, b = Kharma.cart.items.length, c, d = 0;a < b;a++) {
        c = parseFloat(Kharma.cart.items[a].price_unit_usd_exvat), c *= parseInt(Kharma.cart.items[a].quantity, 10), d += c
      }
      d = parseFloat(d) || 0;
      d > 0 && (window._fbq.push(["track", "6021714763372", {value:d, currency:"USD"}]), window.twttr.conversion.trackPid("l5ej7", {tw_sale_amount:d}))
    }
  };
  w = function() {
    Kharma.login.getUuid();
    a = Kharma.login.getType() || "CT:T1";
    b = !0;
    z()
  };
  z = function() {
    if(b && e.length > 0) {
      for(;e.length;) {
        v(e.shift())
      }
    }
  };
  o = function(a) {
    if(a) {
      var b = "https://" + window.location.host;
      window._elqQ.push(["elqTrackPageView", b + a.page, n.payload ? b + n.payload.page : ""])
    }
  };
  v = function(a) {
    var c;
    if(a && k) {
      if(b) {
        if(a.custom) {
          c = a.custom.id.replace(/-/g, ""), delete a.custom, i && f[c] && f[c].send(a)
        }else {
          if(window.ga("send", a), a.hitType === "pageview") {
            o(a), n.payload = a, n.location = window.location
          }
        }
      }else {
        e.push(a)
      }
    }
  };
  u = function(a) {
    if(a && a.custom) {
      var b = a.custom.path, b = b.replace(/\s/g, "");
      if(b === "") {
        b = "/assetstore"
      }else {
        for(/^\//.test(b) || (b = "/" + b);/\/$/.test(b);) {
          b = b.slice(0, -1)
        }
      }
      r(a.custom.id);
      a.page = b + a.page;
      v(a)
    }
  };
  B = function(b, e) {
    if(e) {
      b.hitType = e
    }
    b.dimension4 = Kharma.login && Kharma.login.user ? Kharma.login.user.language_code : "en-US";
    b.dimension5 = h;
    b.dimension6 = a;
    if(h === "CN:N2") {
      b.dimension12 = d, b.dimension13 = c
    }
    v(b)
  };
  y = function(a) {
    var b = a.id, a = a.variations;
    if(typeof window.cxApi !== "undefined" && window.cxApi.getChosenVariation) {
      var c = window.cxApi.getChosenVariation(b);
      c >= 0 ? p(c, a) : q(b, a)
    }
  };
  (function() {
    var a;
    if(k) {
      window.ga("require", "displayfeatures");
      window.ga(function(a) {
        g = a.get("clientId")
      });
      if(Kharma.unityEditor.isEditor()) {
        h = "CN:N2";
        if(d = Kharma.unityEditor.getEditorVersion()) {
          a = d.split(/^(\d+\.\d+)\.?.*?/), a.length > 1 && (d = a[1])
        }
        Kharma.unityEditor.getLicenseFlags(function(a, b) {
          b && (c = b.indexOf(1) !== -1 ? "UL:L2" : b.indexOf(63) !== -1 ? "UL:L3" : "UL:L1")
        })
      }
      m()
    }
  })();
  return{event:function(a) {
    B(a, "event")
  }, runExperiments:function() {
    $.each([], function(a, b) {
      y(b)
    })
  }, social:function(a) {
    B(a)
  }, paymentInfo:function() {
    var a = {client_id:g, navigator:h, language:Kharma.login && Kharma.login.user ? Kharma.login.user.language_code : "en-US"};
    if(h === "CN:N2") {
      a.editor_version = Kharma.unityEditor.getEditorVersion(), a.editor_license = c
    }
    return a
  }, view:function(a) {
    var b = a.dimension8, c = a.id, d = a.headPath && "/api/head" + a.headPath + c + ".json", e = a.headPath && a.headPath + c, f = a.name, i;
    if(d) {
      Kharma.io.get({uri:d, onSuccess:function(a) {
        var c, f, i, g, h;
        a.json.result ? (f = e, g = a.json.result.title, i = a.json.result.publisher, c = a.json.result.category) : a.json.error ? (f = e, g = "404 Not Found") : (f = d, g = a.transport.status + " " + a.transport.statusText);
        h = {page:f, title:g, dimension8:b};
        if(i) {
          h.dimension9 = i
        }
        if(c) {
          h.dimension11 = c
        }
        B(h, "pageview");
        a.json.result && a.json.result.ga && a.json.result.ga.id && u({custom:a.json.result.ga, hitType:"pageview", page:f, title:g})
      }, onFailure:function(a) {
        i = {page:d, title:a.transport.status + " " + a.transport.statusText, dimension8:b};
        B(i, "pageview")
      }})
    }else {
      if(f) {
        i = {page:a.page || "/" + f + (c || ""), title:a.title || f.charAt(0).toUpperCase() + f.slice(1), dimension8:b || f.charAt(0).toUpperCase() + f.slice(1)};
        if(a.sessionControl) {
          i.sessionControl = a.sessionControl
        }
        if(a.dimension16) {
          i.dimension16 = a.dimension16
        }
        c === "/receipt" && s();
        B(i, "pageview")
      }
    }
  }}
};
Kharma.History = function() {
  var g = 0, h = [], a = null, d = Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated(), c, e;
  c = function(b) {
    d ? h.push(b) : h[0] = b;
    a = a ? a + 1 : 0;
    b.load()
  };
  e = function(b) {
    a !== null && (h[a].clear(), h[a].isLoaded() || (b.load(), h[a] = b, Kharma.toolbar.updateButtons()))
  };
  return{getCurrentPage:function() {
    return Kharma.history.page
  }, getDistance:function() {
    return g
  }, getHistory:function() {
    return h
  }, getIndex:function() {
    return a
  }, goBackOrHome:function() {
    a > 0 ? d ? (h[a].clear(), h.pop(), a--, h[a].load()) : (Kharma.utils.windowWrapper.history.go(-1), a--) : $.address.value("/")
  }, historyPage:function() {
    d && a >= 0 && (h[a].clear(), a += g, g = 0, h[a].load(), Kharma.toolbar.updateButtons())
  }, newPage:function(b) {
    if(b) {
      if(Kharma.history.page && Kharma.history.page.getRequestUrl() === b.getRequestUrl()) {
        return e(b)
      }
      Kharma.history.page = b;
      if(a === null || a < 0) {
        $("#mainContent").on(Kharma.utils.events.onLoginSuccessful, function() {
          a !== null ? e(Kharma.history.page) : c(Kharma.history.page)
        })
      }else {
        if(d) {
          for(;h.length > a + 1;) {
            h.pop()
          }
        }
        h[a].clear();
        b.load();
        h.push(b);
        a++;
        Kharma.toolbar.updateButtons()
      }
    }
  }, replacePage:e, setDistance:function(a) {
    g = a
  }}
};
Kharma.Time = {SECOND:1E3, MINUTE:6E4, HOUR:36E5, DAY:864E5, MONTH:2592E6, YEAR:31536E6};
Kharma.IO = function() {
  var g = [], h = {}, a = {}, d = Kharma.Time.MINUTE * 10, c = "en-US", e, b, f, i, l, j, k;
  e = function(a, b) {
    return function(c, d, e) {
      d = {transport:e, success:d, error:c};
      j(e);
      a && (b.context && b.context === Kharma.history.getCurrentPage() ? a.call(b.context, d, c) : a(d, c))
    }
  };
  b = function(a, b) {
    return function(c, d, e) {
      var f = {transport:c, success:d, error:e}, e = f.transport.getResponseHeader("X-Kharma-ExceptionType"), i = f.transport.status;
      switch(e) {
        case "AuthInvalidSession":
        ;
        case "AuthInvalidSessionKey":
          Kharma.login.logout();
          break;
        case "ServerVersionUpdated":
          b.nonInteractive ? Kharma.memo && Kharma.memo.stopPolling() : (new Kharma.TimedError({message:[Kharma.l10n.error.serverVersionUpdated, Kharma.l10n.error.serverVersionUpdatedMessage], timeout:7}), setTimeout(function() {
            location.reload(!0)
          }, 3E3));
          break;
        case "ReloadRequired":
          new Kharma.TimedError({message:[Kharma.l10n.error.reloadRequired, Kharma.l10n.error.reloadRequiredMessage], timeout:7});
          setTimeout(function() {
            location.reload(!0)
          }, 3E3);
          break;
        case "UserNotActivated":
          if(b.uri === "/login") {
            break
          }
          new Kharma.TimedError({message:Kharma.errorsHelper.errors.activation, timeout:7});
          break;
        case "MustAcceptUserTerms":
          new Kharma.TermsDialog({callback:function(a) {
            if(a) {
              Kharma.io.get(b)
            }else {
              b.onFailure(f)
            }
          }});
          return
      }
      i === 404 && $.address.value("/404");
      e = {401:Kharma.errorsHelper.errors.notLoggedIn, 403:Kharma.errorsHelper.errors.unknown, 404:Kharma.errorsHelper.errors.notFound, 500:Kharma.errorsHelper.errors.internalServerError}[i] || Kharma.errorsHelper.errors.unknown;
      a ? b.context && b.context === Kharma.history.getCurrentPage() ? a.call(b.context, f) : a(f) : d !== "abort" && e && !Kharma.io.ignoreErrors && console.error(e, f.error);
      j(c)
    }
  };
  f = function(b, d) {
    return function(e, f, i) {
      f = {json:e, success:f, transport:i};
      j(i);
      if(d.uri === "/login") {
        c = e.language_code, Kharma.helper.loadLanguage(c)
      }
      if(d.uri && (d.uri.indexOf(".json") !== -1 || d.requestHeaders.Accept && d.requestHeaders.Accept.indexOf("application/json") !== -1) && !f.json) {
        if(i.status === 0) {
          return
        }else {
          return new Kharma.TimedError({message:Kharma.errorsHelper.errors.parse, timeout:7, internalErrorMsg:d.url})
        }
      }
      a[d.uri] = (new Date).getTime() + d.cacheExpiryPeriod;
      h[d.uri] = f;
      b && (d.pageSpecific ? d.context === Kharma.history.getCurrentPage() && b.call(d.context, f) : b(f))
    }
  };
  i = function(b) {
    delete a[b];
    delete h[b]
  };
  l = function() {
    return d
  };
  j = function(a) {
    $.each(g, function(b, c) {
      c && c.request === a && g.splice(b, 1)
    })
  };
  k = function(a) {
    var b, c = [];
    for(b in a) {
      a.hasOwnProperty(b) && c.push(encodeURIComponent(b) + "=" + a[b])
    }
    c.length > 0 && (c = c.join("&"));
    return c
  };
  return{abortRequests:function() {
    $.each(g, function(a, b) {
      b && b.options && b.options.pageSpecific && b && b.request && b.request.abort()
    })
  }, ajaxRequests:g, buildIOWrapper:function(i) {
    return function() {
      var j, p, q, r, t, s, w = Array.prototype.slice.call(arguments).pop(), z, u = $.extend({}, i), v, o;
      Kharma.session.getSession(function(i) {
        o = {"X-Requested-With":"UnityAssetStore", "X-Unity-Session":i || "26c4202eb475d02864b40827dfff11a14657aa41", "X-Kharma-Version":Kharma.Version};
        for(var n in w) {
          w.hasOwnProperty(n) && (u[n] = w[n])
        }
        if(c && u.uri.indexOf(c) === -1) {
          u.uri = u.uri.replace("/api/", "/api/" + c + "/")
        }
        u.requestHeaders = $.extend(o, u.requestHeaders);
        u.context = u.pageSpecific && Kharma.history.getCurrentPage() || {};
        v = u.method;
        d = u.cacheExpiryPeriod || l();
        p = u.context;
        z = u.onSuccess;
        t = u.parameters && u.hideParameters !== !0 ? "?" + k(u.parameters) : "";
        if(v === "get" && (r = a[u.uri + t])) {
          if(s = (new Date).getTime(), r > s && (j = h[u.uri + t])) {
            return p ? z.call(p, j) : z(j), !0
          }
        }
        q = {async:u.async !== !1, cache:!0, context:p, data:u.parameters || u.data || {}, type:v, traditional:!0, url:u.uri, headers:u.requestHeaders};
        if(u.contentType) {
          q.contentType = !1
        }
        if(u.processData) {
          q.processData = !1
        }
        g.push({request:$.ajax(q).done(f(z, u)).fail(b(u.onFailure, u)).error(e(u.onException, u)), options:u})
      })
    }
  }, buildExceptionWrapper:e, buildFailureWrapper:b, buildSuccessWrapper:f, flushCacheAll:function() {
    a = {};
    h = {}
  }, flushCacheExpired:function() {
    var b = (new Date).getTime();
    (h && Object.keys(h).length) > 0 && $.each(a, function(a, c) {
      b - c >= d && i(a)
    })
  }, getCacheDefaultExpiryPeriod:l, flushCacheKey:i, ignoreErrors:!1}
};
Kharma.Memo = function() {
  var g, h, a;
  g = function() {
    Kharma.io.get({uri:"/api/account/memo/unread-count.json", nonInteractive:!0, onSuccess:function(a) {
      a.json.count > 0 ? ($("#unavMemo").removeClass("open"), $("#unavMemoCount").text(a.json.count)) : ($("#unavMemo").addClass("open"), $("#unavMemoCount").text(""))
    }})
  };
  h = function(a) {
    if(!$(this).hasClass("disabled")) {
      a.stopPropagation();
      a.preventDefault();
      if(!Kharma.UI.memoDropDown) {
        Kharma.UI.memoDropDown = new Kharma.UI.MemoDropDown
      }
      g();
      $(".user-wrapper").hasClass("user-expanded") && $(".user-wrapper").removeClass("user-expanded");
      $("#mainContent").trigger(Kharma.utils.events.onMemoBlur, null);
      Kharma.UI.memoDropDown.toggleDropDown()
    }
  };
  (function() {
    var d = $("#unavMemo");
    g();
    d.off("click").on("click", h);
    a = Kharma.utils.windowWrapper.setInterval(g, 6E4)
  })();
  return{addEvents:function(a) {
    var c = function(a, b) {
      var c = $(a.target).closest("[data-memo-type]"), d = c.attr("data-memo-type"), g = c.parent().find('[data-memo-type="' + d + '"]');
      a.stopPropagation();
      a.preventDefault();
      b(c, d, g)
    };
    a.off("mouseenter").on("mouseenter", function(a) {
      a.stopPropagation();
      a.preventDefault();
      $(this).find(".hover-state").show()
    });
    a.off("mouseleave").on("mouseleave", function(a) {
      a.stopPropagation();
      a.preventDefault();
      $(".hover-state").hide()
    });
    a.find(".hover-state .close").off("click").on("click", function(a) {
      c(a, function(a, c, d) {
        $("#mainContent").trigger(Kharma.utils.events.onMemoBlur, c);
        a.toggleClass("flip");
        d.addClass("blur");
        a.removeClass("blur")
      })
    });
    a.find(".keep-on-button").off("click").on("click", function(a) {
      $("#mainContent").trigger(Kharma.utils.events.onMemoBlur, null);
      c(a, function(a, c, d) {
        a.toggleClass("flip");
        d.removeClass("blur")
      })
    });
    a.find(".turn-off-button").off("click").on("click", function(a) {
      c(a, function(a, c, d) {
        Kharma.io.post({uri:"/api/account/memo/subscriptions.json", pageSpecific:!0, parameters:{action:"remove", code:c}, onSuccess:function() {
          var c = $(".memo-drop-down .body");
          $("#mainContent").trigger(Kharma.utils.events.onMemoSubscriptionsChanged);
          d.hide();
          a.find(".flipper").hide();
          c.children(":visible").length === 0 && c.append('<p class="no-results">' + Kharma.l10n.memo.noResults + "</p>")
        }})
      })
    })
  }, stopPolling:function() {
    Kharma.utils.windowWrapper.clearInterval(a)
  }}
};
Kharma.UserMenus = function() {
  return{login:function() {
    return{location:null, commands:[{label:Kharma.l10n.user.logIn, action:function() {
      (new Kharma.LoginDialog).show()
    }}]}
  }, profile:function(g) {
    var h = [];
    g.admin && h.push({label:Kharma.l10n.admin.activate, action:Kharma.admin.buildAdmin}, {label:"Open Admin Toolbox", action:function() {
      new Kharma.AdminToolboxDialog
    }});
    h.push({label:Kharma.l10n.user.account, action:Kharma.login.goAccountPage}, {label:Kharma.l10n.wishList.wishList, action:function() {
      $.address.value("/wishlist/" + Kharma.login.user.id + "/page=1/sortby=addeddate")
    }}, {label:Kharma.l10n.user.creditCardPayPalTransactions, action:function() {
      $.address.value("/account/transactions")
    }}, {label:Kharma.l10n.user.transactions, action:function() {
      $.address.value("/account/transactions/credits")
    }}, {label:Kharma.l10n.user.license.licenses, action:function() {
      $.address.value("/account/licenses")
    }}, {label:Kharma.l10n.user.publicProfile, action:function() {
      $.address.value("/user/" + Kharma.login.user.id)
    }});
    h.splice(4, 0, {label:Kharma.l10n.memo.notifications, action:function() {
      $.address.value("/account/notifications")
    }});
    h.splice(8, 0, {label:Kharma.l10n.lists.lists, action:function() {
      $.address.value("/account/lists")
    }});
    g.server_switcher && (h = h.concat(["https://kharma.assetstore.unity3d.com", "https://kharma-qa.assetstore.unity3d.com/only_to_be_used_for_development.html", "https://kharma-dev.assetstore.unity3d.com/only_to_be_used_for_development.html", "http://kharma-local.assetstore.unity3d.com/only_to_be_used_for_development.html"].map(function(a) {
      return{label:Kharma.helper.getURLFlavour(a) + " Server", action:function() {
        Kharma.session.clearSession();
        Kharma.utils.windowWrapper.location.setHref(a)
      }}
    })));
    if(g.admin && (!Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated())) {
      h.push({label:Kharma.unityEditor.isEmulated() ? Kharma.l10n.editor.disable : Kharma.l10n.editor.enable, action:Kharma.unityContext.toggle})
    }
    h.push({label:Kharma.l10n.user.logOut, action:Kharma.login.logout});
    return{location:null, commands:h}
  }}
};
Kharma.Login = function(g) {
  var h = !1, a = !1, d = !1, c = "", e = !1, b, f, i, l, j, k, n, m, p, q, r, t, s, w, z, u, v, o, y, B, A, x, E = !/(AdlesseBot|AhrefsBot|archive\.org_bot|bingbot|BLEXBot|BoxcarBot|coccocbot|DeuSu|Discordbot|DotBot|DuckDuckGo|EveryoneSocialBot|Exabot|Feedspotbot|Googlebot|KharmaBot|Kraken|linkdexbot|LinkisBot|MixrankBot|MJ12bot|MojeekBot|OrangeBot|PaperLiBot|redditbot|SearchmetricsBot|SemrushBot|SeznamBot|SMTBot|spbot|SurdotlyBot|Uptimebot|Veoozbot|Yandex|Yeti)/i.test(window.navigator.userAgent);
  f = function(a) {
    var b = $("body");
    b.removeClass("language-en langauge-kr language-jp");
    b.addClass("language-" + (a || "en"))
  };
  i = function(a) {
    if(Kharma.preloaded === void 0) {
      var b = Kharma.utils.windowWrapper.history.hasHistory(), c = Kharma.utils.windowWrapper.location.getHref(), d = Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated(), e = Kharma.login.user.language_url_code, f = Kharma.utils.windowWrapper.location.getPathName();
      if(d) {
        Kharma.io.ignoreErrors = !0
      }
      f.split("/").length > 2 ? /\w{2}/.exec(f)[0] !== e ? (c = c.replace(/\w{2}/.exec(f)[0], e), Kharma.utils.windowWrapper.location.setHref(c)) : a && /\w{2}/.exec(f)[0] !== a ? (c = c.replace(/\w{2}/.exec(f)[0], a), d ? Kharma.utils.windowWrapper.location.setHref(c) : b && (Kharma.utils.windowWrapper.history.replaceState({}, document.title, c), Kharma.utils.windowWrapper.location.reload())) : d && Kharma.unityEditor.getInitialOpenURL(function(a, b) {
        if(a) {
          throw a.message;
        }else {
          b && Kharma.assetStore.openURL(b)
        }
      }) : d && Kharma.unityEditor.isUnity4x() ? f === "/" ? Kharma.utils.windowWrapper.location.setHref(c + "en/") : Kharma.utils.windowWrapper.location.setHref(c.replace(Kharma.utils.windowWrapper.location.getPathName(), "/en" + Kharma.utils.windowWrapper.location.getPathName())) : b && (d ? Kharma.unityEditor.getInitialOpenURL(function(a, b) {
        if(a) {
          throw a.message;
        }else {
          b ? Kharma.assetStore.openURL(b) : Kharma.utils.windowWrapper.history.replaceState({}, document.title, Kharma.utils.windowWrapper.location.getPathName().replace(f, "/" + e + f + Kharma.utils.windowWrapper.location.getHash()))
        }
      }) : Kharma.utils.windowWrapper.history.replaceState({}, document.title, Kharma.utils.windowWrapper.location.getPathName().replace(f, "/" + e + f + Kharma.utils.windowWrapper.location.getHash())))
    }
    $("#mainContent").trigger(Kharma.utils.events.onLanguageChange)
  };
  j = function(a) {
    var c = $('<div class="language"></div>'), d = $(".language-menu").length > 0 ? $(".language-menu") : $('<div class="language-menu"></div>'), e = $('<div class="language-status"></div>');
    e.on("click", function(a) {
      a.stopPropagation();
      a = $("#header .menu");
      b.hasClass("active") && b.toggleClass("active");
      a.hasClass("active") && a.toggleClass("active");
      $("body").one("click", function() {
        c.hasClass("active") && (c.removeClass("active"), d.removeClass("active"))
      });
      c.toggleClass("active");
      d.toggleClass("active")
    });
    u(d);
    c.append(e);
    a.append(c);
    g.append(d);
    Kharma.helper.updateLanguageStatus()
  };
  k = function() {
    var a = $("<div class='container'></div>"), b = $('<div class="menu"></div>'), c = $('<div class="user-ui"></div>'), d = $('<div class="status"></div>');
    d.on("click", function(a) {
      a.stopPropagation();
      var a = $(".language"), d = $(".language-menu");
      a.hasClass("active") && a.toggleClass("active");
      d.hasClass("active") && d.toggleClass("active");
      $("body").one("click", function() {
        c.hasClass("active") && l()
      });
      c.toggleClass("active");
      b.toggleClass("active")
    });
    $("<img>").addClass("user-icon").appendTo(d);
    $("<div>").addClass("user-status").appendTo(d);
    $("<div>").addClass("user-log-out").appendTo(d);
    $('<div class="user-ui-signed-out"></div>').appendTo(a);
    $(".container").length === 0 && (a.append(c.append(d)).appendTo(g), g.append(b));
    return c
  };
  m = function() {
    var a = ($.address.value() || "").match(/^\/content\/(\d+)/);
    return a ? a[1] : null
  };
  p = function() {
    var a = Kharma.utils.windowWrapper.location.getPathName();
    return a.split("/").length > 2 ? /\w{2}/.exec(a)[0] : ""
  };
  q = function(a) {
    Kharma.unityEditor.getLicenseAndHardwareHash(function(b, c, d) {
      if(b) {
        throw b.message;
      }
      Kharma.io.post({parameters:{license_hash:c, hardware_hash:d, language_code:p(), current_package_id:m()}, uri:"/login", requestHeaders:{Accept:"application/json"}, onSuccess:function(b) {
        r(b, a)
      }, onFailure:function() {
        n()
      }})
    })
  };
  r = function(b, g) {
    var l = $("#mainContent");
    Kharma.session.setSession(b.json.xunitysession, b.json.username, b.json.is_anonymous);
    /unity3d.com$/.test(b.json.username) && (a = !0);
    if(b.json.uuid) {
      c = b.json.uuid
    }
    b.json.publisher && (d = !0);
    Kharma.login.user = b.json;
    Kharma.ga.runExperiments();
    g && g(!0, "success");
    h = Kharma.login.isAdmin = b.json.roles && b.json.roles.admin ? !0 : !1;
    if(b.json && b.json.kharma_version) {
      Kharma.Version = b.json.kharma_version
    }
    l.trigger(Kharma.utils.events.onLoginSuccessful);
    l.trigger(Kharma.utils.events.onUserStateChange);
    l.trigger(Kharma.utils.events.onUserLogin);
    e = !1;
    i();
    f(Kharma.login.user.language_url_code);
    s();
    t()
  };
  w = function(a) {
    var b = $(a.target), a = b.attr("l10n");
    Kharma.io.post({uri:"/api/user/update-language.json", parameters:{language_code:a}, onSuccess:function() {
      i(b.attr("url"))
    }})
  };
  u = function(a) {
    var b = $("<ul>");
    $.each(Kharma.helper.getLanguages(), function(a, c) {
      $("<li>").append($("<a>").attr("l10n", c.language).text(c.label).attr("url", c.url).on("click", w)).appendTo(b)
    });
    a.empty().append(b)
  };
  B = function(a, c) {
    a || c ? (b.find(".user-status").text(a || c).attr("title", c), b.find(".status").show()) : b.find(".status").hide()
  };
  v = function(a) {
    var c = b.find(".user-icon");
    a !== null ? (c.attr("src", a), c.show()) : c.hide()
  };
  o = function(a) {
    var b = g.find(".menu"), c = $("<ul>");
    $.each(a.commands, function(a, b) {
      $("<li>").append($("<a>").attr("id", "menu-item-" + b.label.toLowerCase().replace(/^\s+|\s+$/g, "").replace(/\W+/g, "-")).text(b.label).on("click", {item:b}, function(a) {
        a.preventDefault();
        l();
        b.action()
      })).appendTo(c)
    });
    b.empty().append(c)
  };
  y = function(a) {
    var b = a.commands, c = 0, d, e = $(".user-ui-signed-out").empty(), f = function(a) {
      a.preventDefault();
      a.data.command.action()
    };
    g.addClass("signed-out");
    e.append($("<div>").attr("id", "menu-item-create-account").html('<a target="_blank" href="https://id.unity.com/account/new">' + Kharma.l10n.user.createAccount + "</a>"));
    for(d = b.length;c < d;c++) {
      a = b[c], e.append($("<div>").attr("id", "menu-item-log-in").text(a.label).on("click", {command:a}, f))
    }
  };
  l = function() {
    b.removeClass("active");
    g.find(".menu").removeClass("active")
  };
  x = function() {
    if(Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated()) {
      var a = new Kharma.UserMenus, c = $(".user-ui-signed-out"), d = $(".container"), e = Kharma.login && Kharma.login.user && Kharma.login.user.roles || {};
      d.find(".language").remove();
      j(d);
      e.level11member && b.addClass("level-11");
      Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous ? (b.show(), c.hide(), g.removeClass("signed-out"), B(Kharma.login.user.name + (h ? " (" + Kharma.helper.getCurrentURLFlavour() + ")" : ""), Kharma.login.username), Kharma.login.user.keyimage && v(Kharma.login.user.keyimage.icon24), o(a.profile(e))) : (c.show(), b.hide(), g.addClass("signed-out"), v(null), B(), y(a.login()))
    }
  };
  A = function() {
    x()
  };
  n = function() {
    e = !1;
    Kharma.session.clearSession();
    $("#mainContent").trigger(Kharma.utils.events.onUserStateChange)
  };
  z = function(a) {
    var b, c;
    e = !0;
    Kharma.unityEditor.getLicenseAndHardwareHash(function(d, e, f) {
      if(d) {
        throw d.message;
      }
      a ? (c = {license_hash:e, hardware_hash:f, reuse_session:a, language_code:p(), current_package_id:m()}, Kharma.io.post({uri:"/login", requestHeaders:{Accept:"application/json"}, parameters:c, onSuccess:function(a) {
        r(a, null)
      }, onFailure:function() {
        n();
        q()
      }})) : (b = Kharma.history.getCurrentPage(), (!b || b.type !== "log") && A())
    })
  };
  t = function() {
    Kharma.login.user.nps !== null && !Kharma.unityEditor.isEditor() && new Kharma.NpsDialog({closeCallback:function() {
    }, userNps:Kharma.login.user.nps, language:Kharma.login.user.language_code})
  };
  s = function() {
    Kharma.history.getCurrentPage().type === "hom" && Kharma.login.user.show_intro && E && Kharma.login.user.language_code === "en-US" && !Kharma.unityEditor.isUnity4x() && ($("body").addClass("intro"), $("body").append(Handlebars.templates.welcomeDialog({welcomeL10N:Kharma.l10n.welcome})), $(".intro-overlay a.get-started").on("click", function() {
      $("body").removeClass("intro");
      $(".intro-overlay").remove();
      Kharma.ga.event({eventCategory:"Welcome Intro", eventAction:"Get Started", nonInteraction:!0})
    }), $(".intro-overlay a.no-thanks").on("click", function() {
      $("body").removeClass("intro");
      $(".intro-overlay").remove();
      Kharma.ga.event({eventCategory:"Welcome Intro", eventAction:"No Thanks", nonInteraction:!0})
    }), Kharma.utils.windowWrapper.setTimeout(function() {
      $(".intro-overlay").addClass("visible")
    }, 2E3))
  };
  (function() {
    b = Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated() ? k() : $("<div>");
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, A);
    Kharma.session.getSession(function(a) {
      a ? z(a) : q()
    })
  })();
  return{authenticate:function(a, b, c) {
    e = !0;
    Kharma.unityEditor.getLicenseAndHardwareHash(function(d, e, f) {
      if(d) {
        throw d.message;
      }
      Kharma.io.post({uri:"/login", hideParameters:!0, requestHeaders:{Accept:"application/json"}, parameters:{license_hash:e, hardware_hash:f, language_code:p(), current_package_id:m(), user:b, pass:c}, onSuccess:function(b) {
        Kharma.io.flushCacheAll();
        Kharma.ga.view({title:"Login Success", id:"/success", name:"login", dimension3:Kharma.login.getUuid() || "Undefined", dimension8:"Account", sessionControl:"start"});
        r(b, a)
      }, onFailure:function(d) {
        n();
        b && c && Kharma.ga.view({title:"Login Failed", id:"/failed", name:"login", dimension8:"Account"});
        a(!1, d.transport.getResponseHeader("X-Kharma-ExceptionType") || "Unknown Error")
      }})
    })
  }, changeLanguageUrl:i, goAccountPage:function() {
    $.address.value("/account")
  }, isAdmin:h, loginRequired:function(a) {
    var b = Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous, c = $('<div class="modalblocker login">');
    c.appendTo("body");
    if(b) {
      a(!0), c.remove()
    }else {
      if(e) {
        $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
          a(Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous);
          c.remove()
        })
      }else {
        c.remove(), (new Kharma.LoginDialog).show({messageText:Kharma.l10n.user.pleaseLogIn, callback:function(b) {
          a(b)
        }, avoidReload:!0})
      }
    }
  }, logout:function() {
    Kharma.ga.view({name:"logout", title:"Logout Completed", sessionControl:"end", dimension8:"Account"});
    Kharma.io.post({uri:"/logout", requestHeaders:{Accept:"application/json"}, onSuccess:function() {
      q(function() {
        h = Kharma.login.isAdmin = !1;
        d = Kharma.login.isPublisher = !1;
        a = Kharma.login.isUnity = !1;
        c = "";
        Kharma.admin.disableAdmin();
        Kharma.cart.items = [];
        Kharma.cart.addAction(function() {
          Kharma.cart.active && Kharma.cart.showCart()
        });
        Kharma.toolbar.updateButtons();
        Kharma.io.flushCacheAll()
      })
    }})
  }, reload:function() {
    var a = Kharma.history.getCurrentPage();
    a && (a.clear(), a.load())
  }, updateToolbar:x, getUuid:function() {
    return c
  }, getType:function() {
    var b = Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous;
    return h ? "CT:T5" : a ? "CT:T4" : d ? "CT:T3" : b ? "CT:T2" : "CT:T1"
  }}
};
Kharma.Router = function() {
  var g, h, a, d, c, e;
  g = function() {
    $(".modalblocker").click()
  };
  h = function(a, c) {
    var d = a && a.parser ? a.parser(c.path.substring(1).split("/")) : {}, d = a.className && new a.className(d);
    d.setRequestUrl(c.value.replace("/directpurchase", ""));
    return d
  };
  d = function(a) {
    return{type:a[0], id:a[1]}
  };
  a = function(a) {
    return{type:a[0], id:a[1], page:a[2] && a[2].indexOf("=") !== -1 && a[2].substr(a[2].indexOf("=") + 1), sortby:a[3] && a[3].indexOf("=") !== -1 && a[3].substr(a[3].indexOf("=") + 1)}
  };
  c = function(a) {
    return{type:a[0], id:a[1], packageVersionId:a[2]}
  };
  e = function() {
    Kharma.unityEditor.isEditor() && Kharma.localStorage.setItem("kharma.server", document.location.href)
  };
  return{dispatch:function(b) {
    var f = [{prefix:"/account/downloads", className:Kharma.DownloadsPage, parser:function(a) {
      var b = a[2] && a[2].indexOf("=");
      return{action:a[2] && b !== -1 ? a[2].substr(0, b) : a[2], type:a[3], id:a[2] && b !== -1 ? a[2].substr(b + 1) : a[4]}
    }}, {prefix:"/account/licenses", className:Kharma.LicensesPage}, {prefix:"/account/notifications", className:Kharma.MemoPage}, {prefix:"/account/transactions/credits", className:Kharma.TransactionsCreditsPage}, {prefix:"/account/transactions", className:Kharma.TransactionsPage}, {prefix:"/account/lists", className:Kharma.ListsPage}, {prefix:"/account", className:Kharma.AccountPage}, {prefix:"/404", className:Kharma.Page404}, {prefix:"/home", className:Kharma.HomePage}, {prefix:"/categories", 
    className:Kharma.CategoriesPage}, {prefix:"/", className:Kharma.HomePage}, {prefix:"/sale", className:Kharma.SalePage, parser:d}, {prefix:"/level11", className:Kharma.Level11Page}, {prefix:"/assetkits", className:Kharma.AssetKitsPage}, {prefix:"/linkmaker", className:Kharma.LinkMakerPage, parser:function(a) {
      return{type:a[0], aid:a[1]}
    }}, {prefix:"/com.unity3d.kharma:content", className:Kharma.ContentPage, parser:d}, {prefix:"/com.unity3d.kharma:list", className:Kharma.ListPage, parser:d}, {prefix:"/com.unity3d.kharma:publisher", parser:d}, {prefix:"/com.unity3d.kharma:preview", className:Kharma.PreviewPage, parser:c}, {prefix:"/com.unity3d.kharma:download", className:Kharma.DownloadsPage, parser:function(a) {
      return{action:"download", type:a[1], id:a[2]}
    }}, {prefix:"/category", parser:function(a) {
      return a.length === 4 ? {type:a[0], id:a[1], page:a[2] && a[2].indexOf("=") !== -1 && a[2].substr(a[2].indexOf("=") + 1), sortby:a[3] && a[3].indexOf("=") !== -1 && a[3].substr(a[3].indexOf("=") + 1)} : {type:a[0], id:a[1], sortby:a[2] && a[2].indexOf("=") !== -1 && a[2].substr(a[2].indexOf("=") + 1)}
    }}, {prefix:"/content", className:Kharma.ContentPage, parser:function(a) {
      return{type:a[0], id:a[1], action:a[2], actionParameter:a[3]}
    }}, {prefix:"/preview", className:Kharma.PreviewPage, parser:c}, {prefix:"/list", className:Kharma.ListPage, parser:d}, {prefix:"/publisher", parser:a}, {prefix:"/search", className:Kharma.SearchPage, parser:function(a) {
      return{type:a[0], page:a[1] && a[1].indexOf("=") !== -1 && a[1].substr(a[1].indexOf("=") + 1), sortby:a[2] && a[2].indexOf("=") !== -1 && a[2].substr(a[2].indexOf("=") + 1), search:a[3] && a[3].indexOf("=") !== -1 && a[3].substr(a[3].indexOf("=") + 1) && a[3].substr(a[3].indexOf("=") + 1).split("&")}
    }}, {prefix:"/user", className:Kharma.UserPage, parser:d}, {prefix:"/wishlist", className:Kharma.WishListPage, parser:a}], i, l, j = 0, k, n;
    if(b.value.match(/^\/%21/)) {
      $.address.value(b.value.replace("/%21", ""))
    }else {
      b.value.match(/\bkharma_click_id=/) && $.ajax({method:"POST", url:"/public-api/affiliate/click-id.json", data:{full_url:b.value}});
      for(k = f.length;j < k;j++) {
        if(i = f[j], l = RegExp("^" + i.prefix + "(/|\\?|$)"), l.test(b.value)) {
          n = i;
          break
        }
      }
      if(n) {
        if(n.prefix === "/category") {
          $.address.value("/search/page=1/sortby=relevance/query=category:" + n.parser(b.path.substring(1).split("/")).id)
        }else {
          if(n.prefix === "/publisher" || n.prefix === "/com.unity3d.kharma:publisher") {
            $.address.value("/search/page=1/sortby=relevance/query=publisher:" + n.parser(b.path.substring(1).split("/")).id)
          }else {
            e();
            g();
            document.title = Kharma.l10n.page.title;
            Kharma.io.abortRequests();
            if(Kharma.unityEditor.isEditor() && Kharma.history.getDistance()) {
              return Kharma.history.historyPage()
            }
            return Kharma.history.newPage(h(n, b))
          }
        }
      }else {
        $.address.value("/404")
      }
    }
  }}
};
Kharma.Search = function() {
  var g, h, a, d, c;
  h = function(a) {
    var b, c;
    $.each(a, function(d, g) {
      g = g !== "%" ? decodeURIComponent(g) : g;
      g.indexOf("category:") !== -1 && !$.isEmptyObject(Kharma.helper.categories) && (c = g.substr(g.indexOf(":") + 1), b = isNaN(c) ? Kharma.helper.categories[c] : c, g = "category:" + (b || c));
      a[d] = g
    })
  };
  a = function(a) {
    var b, c;
    $.each(a, function(d, g) {
      g = g !== "%" ? decodeURIComponent(g) : g;
      g.indexOf("publisher:") !== -1 && !$.isEmptyObject(Kharma.helper.publishers) && (c = g.substr(g.indexOf(":") + 1), b = isNaN(c) ? Kharma.helper.publishers[c] : c, g = "publisher:" + (b || c));
      a[d] = g
    })
  };
  d = function() {
    var a = $("#searchInput").val().replace(/\u3000/g, " "), b, c = [];
    $.each($("#searchForm .search-tag span"), function(a, d) {
      b = $(d).text();
      b.indexOf("category:") !== -1 ? b = "category:" + b.substr(b.indexOf(":") + 1) : b.indexOf("publisher:") !== -1 && (b = "publisher:" + b.substr(b.indexOf(":") + 1));
      b.indexOf("<") !== -1 && b.indexOf(">") !== -1 && (b = b.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      c.push(b)
    });
    a && (a.indexOf("<") !== -1 && a.indexOf(">") !== -1 && (a = a.replace(/</g, "&lt;").replace(/>/g, "&gt;")), a.indexOf('"') !== -1 ? c.push(a) : c = c.concat(a.split(" ")));
    return c
  };
  c = function(c, b, f, i) {
    var g, j = $("#searchInput"), k = d();
    g = Kharma.utils.windowWrapper.location.getHash();
    g = i ? "" : g && g.indexOf("query=") !== -1 && g.substring(g.indexOf("query=") + 6);
    i = [];
    c && c.preventDefault();
    g = g ? g.split("&") : [];
    h(g);
    h(k);
    a(g);
    a(k);
    if(g.length > 0 && JSON.stringify(g) !== JSON.stringify(k)) {
      i = g.length > k.length ? $(g).not(k).get() : $(k).not(g).get();
      c = 0;
      for(g = i.length;c < g;c++) {
        $($(".search-tag")[$(".search-tag").length - 1]).after($("<div class='search-tag'><span>" + i[c] + "</span><img src='/images/icons/close-red.png' class='close'></div>"))
      }
    }
    h(i);
    h(k);
    a(i);
    a(k);
    Kharma.history.getCurrentPage() && Kharma.history.getCurrentPage().changeSearchInputWidth && Kharma.history.getCurrentPage().changeSearchInputWidth();
    $("#search").addClass("dim");
    Kharma.io.get({uri:"/api/search/url.json", parameters:{q:JSON.stringify(i) !== JSON.stringify(k) ? i.length > k.length ? i.concat(k) : k : k, order_by:b || "relevance", page:f || "1"}, onSuccess:function(a) {
      var c = Kharma.history.getCurrentPage(), a = a.json.url, d = a.substring(a.indexOf("page=") + 5, a.indexOf("sortby=") - 1), e = a.substring(decodeURIComponent(a).indexOf("query=") + 6), f = b || "relevance";
      Kharma.ga.view({name:"search-result?q=", id:encodeURIComponent(e.replace(/\s*&\s*/g, " ")), title:"Search Results", dimension8:"Searching"});
      c.type === "sea" && a !== "/home" ? (Kharma.utils.windowWrapper.history.replaceState({}, document.title, Kharma.utils.windowWrapper.location.getHref().replace(Kharma.utils.windowWrapper.location.getHash(), "#!" + a)), c.setPage(d), c.setSorting(f), e = e ? e.split("&") : [], c.reloadSearch(e), c.loadResults()) : $.address.value(a)
    }});
    j.val("")
  };
  (function() {
    var a = Kharma.history.getCurrentPage(), b = $("#searchForm"), f;
    g = $("#searchInput");
    g.off("keydown").on("keydown", function(b) {
      switch(b.keyCode) {
        case 27:
          b.preventDefault();
          g.val("");
          break;
        case 8:
          g.val() === "" && (f = $(".search-tag:last"), f.remove(), a.resetAll(), a.getUrl(d()))
      }
    });
    b.off().on("submit", c);
    $("#searchArea .search-icon").off().on("click", c)
  })();
  return{goToSearchPage:c, getRecommendations:function(a, b, c, d) {
    Kharma.io.get({uri:a, pageSpecific:!0, parameters:{package_id:b, limit:30}, onSuccess:function(a) {
      c(a.json)
    }, onFailure:function() {
      var a = $(d.find(".body"));
      a.empty();
      a.text(Kharma.l10n.search.searchProviderUnavailable)
    }})
  }, search:function(a, b, c, d) {
    for(var g = 0, h = a.length;g < h;g++) {
      a[g].indexOf("only:") !== -1 && (a[g] = a[g].substr(a[g].indexOf(":") + 1) === "lists" ? "type:list" : "type:content")
    }
    Kharma.io.get({uri:"/api/search/results.json", pageSpecific:!0, parameters:{q:a, rows:36, page:c, order_by:d}, onSuccess:function(a) {
      b(a.json)
    }, onFailure:function() {
      var a = $("#catresults");
      a.empty();
      a.text(Kharma.l10n.search.searchProviderUnavailable)
    }})
  }}
};
Kharma.Session = function() {
  var g;
  g = function(g) {
    Kharma.localStorage.getItem("kharma.remember_session", function(a) {
      g(a === "1")
    })
  };
  return{clearSession:function() {
    Kharma.sessionStorage.removeItem("kharma.anonymous_sessionid");
    Kharma.sessionStorage.removeItem("kharma.active_sessionid");
    Kharma.localStorage.removeItem("kharma.sessionid");
    Kharma.localStorage.removeItem("kharma.user")
  }, getRememberSession:g, getSession:function(h) {
    Kharma.sessionStorage.hasItem("kharma.active_sessionid", function(a) {
      a ? Kharma.sessionStorage.getItem("kharma.active_sessionid", function(a) {
        h(a)
      }) : g(function(a) {
        Kharma.localStorage.hasItem("kharma.sessionid", function(c) {
          a && c ? Kharma.localStorage.getItem("kharma.sessionid", function(a) {
            h(a)
          }) : Kharma.sessionStorage.hasItem("kharma.anonymous_sessionid", function(a) {
            a ? Kharma.sessionStorage.getItem("kharma.anonymous_sessionid", function(a) {
              h(a)
            }) : h(null)
          })
        })
      })
    })
  }, setRememberSession:function(g) {
    Kharma.localStorage.setItem("kharma.remember_session", g ? "1" : "0")
  }, setSession:function(h, a, d) {
    d ? (Kharma.sessionStorage.setItem("kharma.anonymous_sessionid", h), Kharma.sessionStorage.removeItem("kharma.active_sessionid"), Kharma.localStorage.removeItem("kharma.sessionid"), Kharma.localStorage.removeItem("kharma.user")) : (Kharma.sessionStorage.removeItem("kharma.anonymous_sessionid"), Kharma.sessionStorage.setItem("kharma.active_sessionid", h), Kharma.localStorage.setItem("kharma.user", a), g(function(a) {
      a ? Kharma.localStorage.setItem("kharma.sessionid", h) : Kharma.localStorage.removeItem("kharma.sessionid")
    }))
  }}
};
Kharma.WishList = function() {
  var g = null;
  return{addToWishList:function(g, a) {
    Kharma.io.post({uri:"/api/user/wishlist/" + Kharma.login.user.id + ".json", pageSpecific:!0, parameters:{action:"add", package_id:g}, onSuccess:function() {
      $("#mainContent").trigger(Kharma.utils.events.onAddedToWishList);
      a && a()
    }})
  }, deleteFromWishList:function(g, a) {
    Kharma.io.post({uri:"/api/user/wishlist/" + Kharma.login.user.id + ".json", pageSpecific:!0, parameters:{action:"remove", package_id:g}, onSuccess:function() {
      $("#mainContent").trigger(Kharma.utils.events.onDeletedFromWishList, {packageId:g});
      a && a()
    }})
  }, getWishList:function(h, a, d, c, e) {
    h && Kharma.io.get({uri:c && !e ? "/api/user/wishlist/" + h + ".json?order_by=" + (d || "date") + "&rows=36&page=" + c : !c && e ? "/api/user/wishlist/" + h + ".json?order_by=date&rows=" + e : "/api/user/wishlist/" + h + ".json?order_by=date&rows=0", onSuccess:function(b) {
      g = b.json.results;
      $("#mainContent").trigger(Kharma.utils.events.onWishList);
      a && a(g, b.json.total)
    }})
  }}
};
Kharma.UnityContext = function() {
  var g, h, a;
  g = function() {
    Kharma.localStorage.setItem("emulateEditor", "false");
    Kharma.utils.windowWrapper.location.reload()
  };
  h = function() {
    Kharma.localStorage.setItem("emulateEditor", "true");
    Kharma.utils.windowWrapper.location.reload()
  };
  a = function(a) {
    !window.context && Kharma.unityEditor.isEditor() && a(!0);
    Kharma.localStorage.getItem("emulateEditor", function(c) {
      a(c === "true")
    })
  };
  return{disable:g, Download:function() {
  }, emulated:!0, enable:h, GetAuthToken:function(a) {
    if(a) {
      a(null, "26c4202eb475d02864b40827dfff11a14657aa4126c4202eb475d02864b40827dfff11a14657aa41")
    }else {
      return"26c4202eb475d02864b40827dfff11a14657aa4126c4202eb475d02864b40827dfff11a14657aa41"
    }
  }, GetInitialOpenURL:function() {
    return"home"
  }, GetLicenseFlags:function() {
    return[1]
  }, GetPackageList:function(a) {
    var c = {results:[{title:"Penelope", link:{type:"content", id:"1"}, id:"1", version:"1.1", pubdate:"05 May 2010", category:{label:"Complete Projects", id:"1"}, publisher:{label:"Unity Technologies", id:"1"}}, {title:"ITween", link:{type:"content", id:"84"}, id:"84", version:"2.0.45.1", pubdate:"05 May 2010", category:{label:"Complete Projects", id:"1"}, publisher:{label:"Unity Technologies", id:"1"}}, {title:"Unlimited+ for Mecanim by Mixamo", link:{type:"content", id:"6439"}, id:"6439", version:"0.5", 
    pubdate:"05 May 2010", category:{label:"Editor Ext/Animation", id:"137"}, publisher:{label:"Mixamo", id:"150"}}, {title:"Character Controller", id:"{C:/Program Files (x86)/Unity412f1/Editor/Standard Packages/Character Controller.unityPackage}", publisher:{label:"Unity Technologies", id:"1"}, category:{label:"Prefab Packages", id:"4"}, version:"3.5.0.0", version_id:"-1", local_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAYFBMVEUFBQUPEBAWFxceICAnJycvMDAxLi4zLzA6OjpAPT1HR0dQTk5YV1dgXV1gYF5jYmJ3dneIhoeXmJubnqClp6mqrbC2t7m+wcPFx8jO0NHW2Nnf4OHn5+f+/v4AAAAAAAAe198wAAAAIHRSTlP///////////////////////////////////////8A/+J6CRIAAAoOSURBVHicxZuJlqsqEEXjyKg4xIym//8zHyBogRhpOzevVt+1bhLj2VadEiF6+vlaVKLh63dPXxKvmm649P8PQF2J9jz0bSNaVtVfBhAy791ZiatoOau+CaDyPouraBr6NQAp3vYdEJ9SQLj4AoDMe9tp8Vp4AJT7Jvg0gOCiaSdxX13VYG2CjwKovGvxqgqoh03wMYBK5r2V4nUl1WE4dWiIX4OPANQq70YcRu2wSP2qWZngzwCiqht16DXn1ZuYGKq1Cf4GoIquDp2/V19CCFK5jfgXgKox4uGoQlArExwHED+8qTbV1zg6eEO9GvwBgFW/0LchOP0QgKjYAX1eCe9sfByA7WmFNxCeCY4CiI39G20ZXOYoBOCZ4CCAmBPAQqEHhE7o//o1YPQjADIBQWkZqju7vj+3lUdlCFwTHAMQNQ3py+yqQ++l+nAZxAafa4KDAMxPAKUm71r8en88240EceKY4BCAqJwErMXH8XXdKhF3TXAMAIpTKH7T4iqaDX0ZGNYgEsAOtNo+NZ/FWVBcxqA/tZRtRRd9jjlIQRwAb52QPaB2XwPxOxCXMdYURN03AIA5JogC4I1vOdVrnbb7WlxFB/Vpe26n/5hvw0aMAeDCZtwEEZ3ptdv9sRKXcQcby62Hyxm8wSg0QQSA1KfM2WO9iAfUlQOdBPTXx00QQIBBDfYBlL4TpOoG02sbcXE2by6P8dE6APQXAEH923NTXDlQULIEO9/G1/NM4C6ACfYA1vpc6r+Tf716qI/b61MyXRkkACbYAVjp4339J4f61XCXm4/3BuvX017QYoL3AK6+2t++/qslMDqVgNfr0eLlPQpM8BYA6JvjYfv6N6cAQjpQp2VwsJYavAOQ+mQRj9R/8UxFnudlURSkN9uPNw5SQFAMAK8pcbFj9M/JCYRMwPS2NAECuypnE2wDHNMfMdTPz/MXnl2aFwibNEgTiB0AXvn6NEL/1UL9UzM5UJNdVGqSNMsLSYFnE2wB+Pq4wDH69wzqE92CtgbUvp3IXOR2SN4AYFAfF3l2StvzcjibIZwEdFdA/Gicz+hbgEUf4zLTuWuHCP1LCjW4daCO59kBwOZsHASw+hjlZo9plP6LQom0d0o2XnP4aWZMEAKY9HGRzccTd/yvzmnB5goTIE1QwU8T04gBAKmPpTrYWaT+E0GFAjhQx8PtELoFIGcORe7UMlL/1TgJaP3vPC/O52gywQqA8cJRV7uK03dbkF68BMizMQmYwAdg1Jc/NXH6rxoeYOK04ATgNeJkAg+AkeTkRaz+4JDXTgtO8eydHVO+BmD4sP5I5VcT+/XsHDhruo1YUm2C04f0VQsmc8BBAADcOagRXgOE9GPOvyqeKAH62G/BKWAjloT5AEF9c0GzG00CAVYtaCiHWSGVCfBM+Jf8v24Z1GerFpxivGFVJ7VrZBKwAAT0xXnQM979eAqYAG8QAAAPMRnllGHqjQUB/QTbmehu0Nxqy7/lOmxdg04D6AS4w3FA/30kXqRzJEWoBU0KLrmuQT4nwAC80feVApJuhFvQANyZOlckmLgXpRv6v1Q2CaDhFpxCNqIEsC1oAcL6v9eeYj0IQBOcU+jACYCma/2j6mnC3545xiueHLjMjkXF1v4/qK6Cvb10Hm9FmiD4w9Gp5tSrwGFtHXn/Rl9dtqZZ6SxSKYDyqHqWqX9u0Lfn7lbuMadwnVBwRhA6IO8Lz9G+A2Dqm8hZJasNQeLLpwdp8NZ5UMYj12UiNViiEZqg9A4/Vac0OS1RQXZCTuCdFDTbAMNUtZI5a0RzDryDZX3fxUVfwRyU102ARm+X5riCJyKfwOa1FOfY6Aq9KqEWJuS/akt/tKkqqAMwE6RupVFzj4vbpUlzEOcNgJtNUm6nhnY0tD7wvFVKR8dcD4y3gWQAYKsVu7lScwrs9cCcA4+g2zYUjOe1hQD5RiuK2Sc58mfHhgCWQBsqjmC8DxwS4HsQE2mPTE41v2Iv14QewZyrSIJrBzOQB1vxYhm1YZk/NTM+SLwTC3p/crfxuAiYAnQJbAPLlGXTkAjnBTYH3qk1jmC89RgAlDwwM2JggzQLzIxsDlyAPI7geWmyco68XH/pXgKAJDQ1swSgApOltvraOb77QPPCRlnQ1ZVhD2t0CkzNVgSLqWMIZCvmRlz/rVqxAfpZQoLTc+uDNM+cvo4hGO+XaklBURCvFUeSl3MRlAWCCxQLgRsk5Gqf4NYhAFB4rXjNi8keMgp1XRZeotkgKGkEwePSwBRg9yuyQKWukIKQ0y7+EwYwPkgcgjKKYLydCQBATiuOVWkdUhR5SraX6UwOktkEClnZenuYt6F8iEwoAtiKDwxaJMv9yWkoB1lp1Cf0CALZiqyU0pMVEIKtOMDqpNYCG2vFNgfFJG4AIgie165AcxQItKJjj9SfHW/lwPS0DbZHMMohocQLArnNn7BiaZE82wNYCNzYJ5BDAsI2EBb2g5t2RTF5Iyvp3g8WlgDmTR4CYrd38i/digUGMZj3u9JaU+4mxZTv/WSzIkAaH/MdAtmKDAEA24oCeiMlET9aOQRIy6MYAtmKEABPFzRPaooiA+cZZTG/G1oCXTYTsqw8eLm1pEBenUECpidKF2gMYIH3v5xOBHIaMWnbqHcIrh3MANat6GQlxe4KSRQB3KV4M/t76aszuLlqxZGDN4qMxP54bQlK55AwEe+WYVQrUodXXgzB13lOo3++n3NQqGF0vt7CTLTbi3GqFZ0UDK8zfJ3N5+EIAEPgXaemarcSYmNBTA0J8JCrZwNfpnYojgIw44IOkwAk5xfTzF0eSRBCtiJUpJ0ArxC0QMxdNIrA9QAuU7B33nT+yphMgcCEqD9dAwo8QRwLRN1HVHP/PhLpI4IXBbKCkK1IloUN18EZYr+8kemn9m5flTVJnXUTDVEpCOBDuAUGFOnvb+VSt3CCkBmRZ1N/oUb7smr6aaVYDQnrtR21jXMWOHg7XyVNkaLV7qdyMNH0t+eofBhYT5IWKOmB2/m8fMgUlGl4xcpAtP1w5sHlrQxTeFPpsVs6K05xVoQJDIRU4cHPsg/c0qluq5Y+3ASYMxGIIl+G4uMAP2qBV7bigfAscPjO6mrVipEBh+K/AEytWPwawbfA8ZvbVQryLM1y9CuIMqefubldtiIlanRSEGU8gzMU/wlAtSLBeoiUDPKCIQoCZ/hzT1hUcowiZLpenCD2q4F8C/zlIRehhiimxsYFYs8SuW+BPz7mU9cOxFSNd5ZYWeADDzrV6lkXpquBl2qELbFqwg896iXmROxYAmWU/wuAGYKtLeFaoPz8s2YwbDUUBA5ZwhuKPw7w41oC+WeJgAX+zSOfkyXYqhrFqgn/3UOvxhIuRIq+B/ADqjGfJUo4Jfr3AADCNCheW+Abj34vDUrZqgLfevhdn7MZ989C3wP4UYlQD76u3v4PVfULg3RLAIoAAAAASUVORK5CYII=", 
    local_path:"C:/Program Files (x86)/Unity412f1/Editor/Standard Packages/Character Controller.unityPackage"}, {title:"Glass Refraction (Pro Only)", id:"{C:/Program Files (x86)/Unity412f1/Editor/Standard Packages/Glass Refraction (Pro Only).unityPackage}", publisher:{label:"Unity Technologies", id:"1"}, category:{label:"Prefab Packages", id:"4"}, version:"3.5.0.0", version_id:"-1", local_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAYFBMVEUFBQUPEBAWFxceICAnJycvMDAxLi4zLzA6OjpAPT1HR0dQTk5YV1dgXV1gYF5jYmJ3dneIhoeXmJubnqClp6mqrbC2t7m+wcPFx8jO0NHW2Nnf4OHn5+f+/v4AAAAAAAAe198wAAAAIHRSTlP///////////////////////////////////////8A/+J6CRIAAAoOSURBVHicxZuJlqsqEEXjyKg4xIym//8zHyBogRhpOzevVt+1bhLj2VadEiF6+vlaVKLh63dPXxKvmm649P8PQF2J9jz0bSNaVtVfBhAy791ZiatoOau+CaDyPouraBr6NQAp3vYdEJ9SQLj4AoDMe9tp8Vp4AJT7Jvg0gOCiaSdxX13VYG2CjwKovGvxqgqoh03wMYBK5r2V4nUl1WE4dWiIX4OPANQq70YcRu2wSP2qWZngzwCiqht16DXn1ZuYGKq1Cf4GoIquDp2/V19CCFK5jfgXgKox4uGoQlArExwHED+8qTbV1zg6eEO9GvwBgFW/0LchOP0QgKjYAX1eCe9sfByA7WmFNxCeCY4CiI39G20ZXOYoBOCZ4CCAmBPAQqEHhE7o//o1YPQjADIBQWkZqju7vj+3lUdlCFwTHAMQNQ3py+yqQ++l+nAZxAafa4KDAMxPAKUm71r8en88240EceKY4BCAqJwErMXH8XXdKhF3TXAMAIpTKH7T4iqaDX0ZGNYgEsAOtNo+NZ/FWVBcxqA/tZRtRRd9jjlIQRwAb52QPaB2XwPxOxCXMdYURN03AIA5JogC4I1vOdVrnbb7WlxFB/Vpe26n/5hvw0aMAeDCZtwEEZ3ptdv9sRKXcQcby62Hyxm8wSg0QQSA1KfM2WO9iAfUlQOdBPTXx00QQIBBDfYBlL4TpOoG02sbcXE2by6P8dE6APQXAEH923NTXDlQULIEO9/G1/NM4C6ACfYA1vpc6r+Tf716qI/b61MyXRkkACbYAVjp4339J4f61XCXm4/3BuvX017QYoL3AK6+2t++/qslMDqVgNfr0eLlPQpM8BYA6JvjYfv6N6cAQjpQp2VwsJYavAOQ+mQRj9R/8UxFnudlURSkN9uPNw5SQFAMAK8pcbFj9M/JCYRMwPS2NAECuypnE2wDHNMfMdTPz/MXnl2aFwibNEgTiB0AXvn6NEL/1UL9UzM5UJNdVGqSNMsLSYFnE2wB+Pq4wDH69wzqE92CtgbUvp3IXOR2SN4AYFAfF3l2StvzcjibIZwEdFdA/Gicz+hbgEUf4zLTuWuHCP1LCjW4daCO59kBwOZsHASw+hjlZo9plP6LQom0d0o2XnP4aWZMEAKY9HGRzccTd/yvzmnB5goTIE1QwU8T04gBAKmPpTrYWaT+E0GFAjhQx8PtELoFIGcORe7UMlL/1TgJaP3vPC/O52gywQqA8cJRV7uK03dbkF68BMizMQmYwAdg1Jc/NXH6rxoeYOK04ATgNeJkAg+AkeTkRaz+4JDXTgtO8eydHVO+BmD4sP5I5VcT+/XsHDhruo1YUm2C04f0VQsmc8BBAADcOagRXgOE9GPOvyqeKAH62G/BKWAjloT5AEF9c0GzG00CAVYtaCiHWSGVCfBM+Jf8v24Z1GerFpxivGFVJ7VrZBKwAAT0xXnQM979eAqYAG8QAAAPMRnllGHqjQUB/QTbmehu0Nxqy7/lOmxdg04D6AS4w3FA/30kXqRzJEWoBU0KLrmuQT4nwAC80feVApJuhFvQANyZOlckmLgXpRv6v1Q2CaDhFpxCNqIEsC1oAcL6v9eeYj0IQBOcU+jACYCma/2j6mnC3545xiueHLjMjkXF1v4/qK6Cvb10Hm9FmiD4w9Gp5tSrwGFtHXn/Rl9dtqZZ6SxSKYDyqHqWqX9u0Lfn7lbuMadwnVBwRhA6IO8Lz9G+A2Dqm8hZJasNQeLLpwdp8NZ5UMYj12UiNViiEZqg9A4/Vac0OS1RQXZCTuCdFDTbAMNUtZI5a0RzDryDZX3fxUVfwRyU102ARm+X5riCJyKfwOa1FOfY6Aq9KqEWJuS/akt/tKkqqAMwE6RupVFzj4vbpUlzEOcNgJtNUm6nhnY0tD7wvFVKR8dcD4y3gWQAYKsVu7lScwrs9cCcA4+g2zYUjOe1hQD5RiuK2Sc58mfHhgCWQBsqjmC8DxwS4HsQE2mPTE41v2Iv14QewZyrSIJrBzOQB1vxYhm1YZk/NTM+SLwTC3p/crfxuAiYAnQJbAPLlGXTkAjnBTYH3qk1jmC89RgAlDwwM2JggzQLzIxsDlyAPI7geWmyco68XH/pXgKAJDQ1swSgApOltvraOb77QPPCRlnQ1ZVhD2t0CkzNVgSLqWMIZCvmRlz/rVqxAfpZQoLTc+uDNM+cvo4hGO+XaklBURCvFUeSl3MRlAWCCxQLgRsk5Gqf4NYhAFB4rXjNi8keMgp1XRZeotkgKGkEwePSwBRg9yuyQKWukIKQ0y7+EwYwPkgcgjKKYLydCQBATiuOVWkdUhR5SraX6UwOktkEClnZenuYt6F8iEwoAtiKDwxaJMv9yWkoB1lp1Cf0CALZiqyU0pMVEIKtOMDqpNYCG2vFNgfFJG4AIgie165AcxQItKJjj9SfHW/lwPS0DbZHMMohocQLArnNn7BiaZE82wNYCNzYJ5BDAsI2EBb2g5t2RTF5Iyvp3g8WlgDmTR4CYrd38i/digUGMZj3u9JaU+4mxZTv/WSzIkAaH/MdAtmKDAEA24oCeiMlET9aOQRIy6MYAtmKEABPFzRPaooiA+cZZTG/G1oCXTYTsqw8eLm1pEBenUECpidKF2gMYIH3v5xOBHIaMWnbqHcIrh3MANat6GQlxe4KSRQB3KV4M/t76aszuLlqxZGDN4qMxP54bQlK55AwEe+WYVQrUodXXgzB13lOo3++n3NQqGF0vt7CTLTbi3GqFZ0UDK8zfJ3N5+EIAEPgXaemarcSYmNBTA0J8JCrZwNfpnYojgIw44IOkwAk5xfTzF0eSRBCtiJUpJ0ArxC0QMxdNIrA9QAuU7B33nT+yphMgcCEqD9dAwo8QRwLRN1HVHP/PhLpI4IXBbKCkK1IloUN18EZYr+8kemn9m5flTVJnXUTDVEpCOBDuAUGFOnvb+VSt3CCkBmRZ1N/oUb7smr6aaVYDQnrtR21jXMWOHg7XyVNkaLV7qdyMNH0t+eofBhYT5IWKOmB2/m8fMgUlGl4xcpAtP1w5sHlrQxTeFPpsVs6K05xVoQJDIRU4cHPsg/c0qluq5Y+3ASYMxGIIl+G4uMAP2qBV7bigfAscPjO6mrVipEBh+K/AEytWPwawbfA8ZvbVQryLM1y9CuIMqefubldtiIlanRSEGU8gzMU/wlAtSLBeoiUDPKCIQoCZ/hzT1hUcowiZLpenCD2q4F8C/zlIRehhiimxsYFYs8SuW+BPz7mU9cOxFSNd5ZYWeADDzrV6lkXpquBl2qELbFqwg896iXmROxYAmWU/wuAGYKtLeFaoPz8s2YwbDUUBA5ZwhuKPw7w41oC+WeJgAX+zSOfkyXYqhrFqgn/3UOvxhIuRIq+B/ADqjGfJUo4Jfr3AADCNCheW+Abj34vDUrZqgLfevhdn7MZ989C3wP4UYlQD76u3v4PVfULg3RLAIoAAAAASUVORK5CYII=", 
    local_path:"C:/Program Files (x86)/Unity412f1/Editor/Standard Packages/Glass Refraction (Pro Only).unityPackage"}, {link:{type:"content", id:"2828"}, pubdate:"24 Dec 2012", version:"1.16", version_id:"11354", description:'Aperture Cutscene Editor is a powerful cutscene editor for Unity. It allows you to easily setup curve based animations for cameras, materials, characters, or anything else you want to animate. Aperture also has a powerful event triggering system. See your animation in edit mode with the Play Preview button for quick revisions, and setup scripted gameplay event chains.<br><br> You can easily create extension Actions and Events to conform to your projects needs, and the entire editor is open source if you really need some low level access.<br><br>For more info, visit <a href="http://www.aperturecutscene.com">http://www.aperturecutscene.com</a>. <br><br>', 
    category:{label:"Editor Extensions/Animation", id:"102"}, id:"2828", title:"Aperture Cutscene Editor", publisher:{label:"Kurt Loeffler", id:"7"}, local_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAYFBMVEUFBQUPEBAWFxceICAnJycvMDAxLi4zLzA6OjpAPT1HR0dQTk5YV1dgXV1gYF5jYmJ3dneIhoeXmJubnqClp6mqrbC2t7m+wcPFx8jO0NHW2Nnf4OHn5+f+/v4AAAAAAAAe198wAAAAIHRSTlP///////////////////////////////////////8A/+J6CRIAAAoOSURBVHicxZuJlqsqEEXjyKg4xIym//8zHyBogRhpOzevVt+1bhLj2VadEiF6+vlaVKLh63dPXxKvmm649P8PQF2J9jz0bSNaVtVfBhAy791ZiatoOau+CaDyPouraBr6NQAp3vYdEJ9SQLj4AoDMe9tp8Vp4AJT7Jvg0gOCiaSdxX13VYG2CjwKovGvxqgqoh03wMYBK5r2V4nUl1WE4dWiIX4OPANQq70YcRu2wSP2qWZngzwCiqht16DXn1ZuYGKq1Cf4GoIquDp2/V19CCFK5jfgXgKox4uGoQlArExwHED+8qTbV1zg6eEO9GvwBgFW/0LchOP0QgKjYAX1eCe9sfByA7WmFNxCeCY4CiI39G20ZXOYoBOCZ4CCAmBPAQqEHhE7o//o1YPQjADIBQWkZqju7vj+3lUdlCFwTHAMQNQ3py+yqQ++l+nAZxAafa4KDAMxPAKUm71r8en88240EceKY4BCAqJwErMXH8XXdKhF3TXAMAIpTKH7T4iqaDX0ZGNYgEsAOtNo+NZ/FWVBcxqA/tZRtRRd9jjlIQRwAb52QPaB2XwPxOxCXMdYURN03AIA5JogC4I1vOdVrnbb7WlxFB/Vpe26n/5hvw0aMAeDCZtwEEZ3ptdv9sRKXcQcby62Hyxm8wSg0QQSA1KfM2WO9iAfUlQOdBPTXx00QQIBBDfYBlL4TpOoG02sbcXE2by6P8dE6APQXAEH923NTXDlQULIEO9/G1/NM4C6ACfYA1vpc6r+Tf716qI/b61MyXRkkACbYAVjp4339J4f61XCXm4/3BuvX017QYoL3AK6+2t++/qslMDqVgNfr0eLlPQpM8BYA6JvjYfv6N6cAQjpQp2VwsJYavAOQ+mQRj9R/8UxFnudlURSkN9uPNw5SQFAMAK8pcbFj9M/JCYRMwPS2NAECuypnE2wDHNMfMdTPz/MXnl2aFwibNEgTiB0AXvn6NEL/1UL9UzM5UJNdVGqSNMsLSYFnE2wB+Pq4wDH69wzqE92CtgbUvp3IXOR2SN4AYFAfF3l2StvzcjibIZwEdFdA/Gicz+hbgEUf4zLTuWuHCP1LCjW4daCO59kBwOZsHASw+hjlZo9plP6LQom0d0o2XnP4aWZMEAKY9HGRzccTd/yvzmnB5goTIE1QwU8T04gBAKmPpTrYWaT+E0GFAjhQx8PtELoFIGcORe7UMlL/1TgJaP3vPC/O52gywQqA8cJRV7uK03dbkF68BMizMQmYwAdg1Jc/NXH6rxoeYOK04ATgNeJkAg+AkeTkRaz+4JDXTgtO8eydHVO+BmD4sP5I5VcT+/XsHDhruo1YUm2C04f0VQsmc8BBAADcOagRXgOE9GPOvyqeKAH62G/BKWAjloT5AEF9c0GzG00CAVYtaCiHWSGVCfBM+Jf8v24Z1GerFpxivGFVJ7VrZBKwAAT0xXnQM979eAqYAG8QAAAPMRnllGHqjQUB/QTbmehu0Nxqy7/lOmxdg04D6AS4w3FA/30kXqRzJEWoBU0KLrmuQT4nwAC80feVApJuhFvQANyZOlckmLgXpRv6v1Q2CaDhFpxCNqIEsC1oAcL6v9eeYj0IQBOcU+jACYCma/2j6mnC3545xiueHLjMjkXF1v4/qK6Cvb10Hm9FmiD4w9Gp5tSrwGFtHXn/Rl9dtqZZ6SxSKYDyqHqWqX9u0Lfn7lbuMadwnVBwRhA6IO8Lz9G+A2Dqm8hZJasNQeLLpwdp8NZ5UMYj12UiNViiEZqg9A4/Vac0OS1RQXZCTuCdFDTbAMNUtZI5a0RzDryDZX3fxUVfwRyU102ARm+X5riCJyKfwOa1FOfY6Aq9KqEWJuS/akt/tKkqqAMwE6RupVFzj4vbpUlzEOcNgJtNUm6nhnY0tD7wvFVKR8dcD4y3gWQAYKsVu7lScwrs9cCcA4+g2zYUjOe1hQD5RiuK2Sc58mfHhgCWQBsqjmC8DxwS4HsQE2mPTE41v2Iv14QewZyrSIJrBzOQB1vxYhm1YZk/NTM+SLwTC3p/crfxuAiYAnQJbAPLlGXTkAjnBTYH3qk1jmC89RgAlDwwM2JggzQLzIxsDlyAPI7geWmyco68XH/pXgKAJDQ1swSgApOltvraOb77QPPCRlnQ1ZVhD2t0CkzNVgSLqWMIZCvmRlz/rVqxAfpZQoLTc+uDNM+cvo4hGO+XaklBURCvFUeSl3MRlAWCCxQLgRsk5Gqf4NYhAFB4rXjNi8keMgp1XRZeotkgKGkEwePSwBRg9yuyQKWukIKQ0y7+EwYwPkgcgjKKYLydCQBATiuOVWkdUhR5SraX6UwOktkEClnZenuYt6F8iEwoAtiKDwxaJMv9yWkoB1lp1Cf0CALZiqyU0pMVEIKtOMDqpNYCG2vFNgfFJG4AIgie165AcxQItKJjj9SfHW/lwPS0DbZHMMohocQLArnNn7BiaZE82wNYCNzYJ5BDAsI2EBb2g5t2RTF5Iyvp3g8WlgDmTR4CYrd38i/digUGMZj3u9JaU+4mxZTv/WSzIkAaH/MdAtmKDAEA24oCeiMlET9aOQRIy6MYAtmKEABPFzRPaooiA+cZZTG/G1oCXTYTsqw8eLm1pEBenUECpidKF2gMYIH3v5xOBHIaMWnbqHcIrh3MANat6GQlxe4KSRQB3KV4M/t76aszuLlqxZGDN4qMxP54bQlK55AwEe+WYVQrUodXXgzB13lOo3++n3NQqGF0vt7CTLTbi3GqFZ0UDK8zfJ3N5+EIAEPgXaemarcSYmNBTA0J8JCrZwNfpnYojgIw44IOkwAk5xfTzF0eSRBCtiJUpJ0ArxC0QMxdNIrA9QAuU7B33nT+yphMgcCEqD9dAwo8QRwLRN1HVHP/PhLpI4IXBbKCkK1IloUN18EZYr+8kemn9m5flTVJnXUTDVEpCOBDuAUGFOnvb+VSt3CCkBmRZ1N/oUb7smr6aaVYDQnrtR21jXMWOHg7XyVNkaLV7qdyMNH0t+eofBhYT5IWKOmB2/m8fMgUlGl4xcpAtP1w5sHlrQxTeFPpsVs6K05xVoQJDIRU4cHPsg/c0qluq5Y+3ASYMxGIIl+G4uMAP2qBV7bigfAscPjO6mrVipEBh+K/AEytWPwawbfA8ZvbVQryLM1y9CuIMqefubldtiIlanRSEGU8gzMU/wlAtSLBeoiUDPKCIQoCZ/hzT1hUcowiZLpenCD2q4F8C/zlIRehhiimxsYFYs8SuW+BPz7mU9cOxFSNd5ZYWeADDzrV6lkXpquBl2qELbFqwg896iXmROxYAmWU/wuAGYKtLeFaoPz8s2YwbDUUBA5ZwhuKPw7w41oC+WeJgAX+zSOfkyXYqhrFqgn/3UOvxhIuRIq+B/ADqjGfJUo4Jfr3AADCNCheW+Abj34vDUrZqgLfevhdn7MZ989C3wP4UYlQD76u3v4PVfULg3RLAIoAAAAASUVORK5CYII=", 
    local_path:"C:/Users/Leo/AppData/Roaming/Unity/Asset Store/Kurt Loeffler/Editor ExtensionsAnimation/Aperture Cutscene Editor.unitypackage"}, {title:"The Way U Luv Me (81891)", id:"/Users/lasse/Library/Unity/Asset Store-5.x/APM Music/AudioMusic/The Way U Luv Me (81891).unitypackage", version:null, version_id:null, local_icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAYFBMVEUFBQUPEBAWFxceICAnJycvMDAxLi4zLzA6OjpAPT1HR0dQTk5YV1dgXV1gYF5jYmJ3dneIhoeXmJubnqClp6mqrbC2t7m+wcPFx8jO0NHW2Nnf4OHn5+f+/v4AAAAAAAAe198wAAAAIHRSTlP///////////////////////////////////////8A/+J6CRIAAAoOSURBVHicxZuJlqsqEEXjyKg4xIym//8zHyBogRhpOzevVt+1bhLj2VadEiF6+vlaVKLh63dPXxKvmm649P8PQF2J9jz0bSNaVtVfBhAy791ZiatoOau+CaDyPouraBr6NQAp3vYdEJ9SQLj4AoDMe9tp8Vp4AJT7Jvg0gOCiaSdxX13VYG2CjwKovGvxqgqoh03wMYBK5r2V4nUl1WE4dWiIX4OPANQq70YcRu2wSP2qWZngzwCiqht16DXn1ZuYGKq1Cf4GoIquDp2/V19CCFK5jfgXgKox4uGoQlArExwHED+8qTbV1zg6eEO9GvwBgFW/0LchOP0QgKjYAX1eCe9sfByA7WmFNxCeCY4CiI39G20ZXOYoBOCZ4CCAmBPAQqEHhE7o//o1YPQjADIBQWkZqju7vj+3lUdlCFwTHAMQNQ3py+yqQ++l+nAZxAafa4KDAMxPAKUm71r8en88240EceKY4BCAqJwErMXH8XXdKhF3TXAMAIpTKH7T4iqaDX0ZGNYgEsAOtNo+NZ/FWVBcxqA/tZRtRRd9jjlIQRwAb52QPaB2XwPxOxCXMdYURN03AIA5JogC4I1vOdVrnbb7WlxFB/Vpe26n/5hvw0aMAeDCZtwEEZ3ptdv9sRKXcQcby62Hyxm8wSg0QQSA1KfM2WO9iAfUlQOdBPTXx00QQIBBDfYBlL4TpOoG02sbcXE2by6P8dE6APQXAEH923NTXDlQULIEO9/G1/NM4C6ACfYA1vpc6r+Tf716qI/b61MyXRkkACbYAVjp4339J4f61XCXm4/3BuvX017QYoL3AK6+2t++/qslMDqVgNfr0eLlPQpM8BYA6JvjYfv6N6cAQjpQp2VwsJYavAOQ+mQRj9R/8UxFnudlURSkN9uPNw5SQFAMAK8pcbFj9M/JCYRMwPS2NAECuypnE2wDHNMfMdTPz/MXnl2aFwibNEgTiB0AXvn6NEL/1UL9UzM5UJNdVGqSNMsLSYFnE2wB+Pq4wDH69wzqE92CtgbUvp3IXOR2SN4AYFAfF3l2StvzcjibIZwEdFdA/Gicz+hbgEUf4zLTuWuHCP1LCjW4daCO59kBwOZsHASw+hjlZo9plP6LQom0d0o2XnP4aWZMEAKY9HGRzccTd/yvzmnB5goTIE1QwU8T04gBAKmPpTrYWaT+E0GFAjhQx8PtELoFIGcORe7UMlL/1TgJaP3vPC/O52gywQqA8cJRV7uK03dbkF68BMizMQmYwAdg1Jc/NXH6rxoeYOK04ATgNeJkAg+AkeTkRaz+4JDXTgtO8eydHVO+BmD4sP5I5VcT+/XsHDhruo1YUm2C04f0VQsmc8BBAADcOagRXgOE9GPOvyqeKAH62G/BKWAjloT5AEF9c0GzG00CAVYtaCiHWSGVCfBM+Jf8v24Z1GerFpxivGFVJ7VrZBKwAAT0xXnQM979eAqYAG8QAAAPMRnllGHqjQUB/QTbmehu0Nxqy7/lOmxdg04D6AS4w3FA/30kXqRzJEWoBU0KLrmuQT4nwAC80feVApJuhFvQANyZOlckmLgXpRv6v1Q2CaDhFpxCNqIEsC1oAcL6v9eeYj0IQBOcU+jACYCma/2j6mnC3545xiueHLjMjkXF1v4/qK6Cvb10Hm9FmiD4w9Gp5tSrwGFtHXn/Rl9dtqZZ6SxSKYDyqHqWqX9u0Lfn7lbuMadwnVBwRhA6IO8Lz9G+A2Dqm8hZJasNQeLLpwdp8NZ5UMYj12UiNViiEZqg9A4/Vac0OS1RQXZCTuCdFDTbAMNUtZI5a0RzDryDZX3fxUVfwRyU102ARm+X5riCJyKfwOa1FOfY6Aq9KqEWJuS/akt/tKkqqAMwE6RupVFzj4vbpUlzEOcNgJtNUm6nhnY0tD7wvFVKR8dcD4y3gWQAYKsVu7lScwrs9cCcA4+g2zYUjOe1hQD5RiuK2Sc58mfHhgCWQBsqjmC8DxwS4HsQE2mPTE41v2Iv14QewZyrSIJrBzOQB1vxYhm1YZk/NTM+SLwTC3p/crfxuAiYAnQJbAPLlGXTkAjnBTYH3qk1jmC89RgAlDwwM2JggzQLzIxsDlyAPI7geWmyco68XH/pXgKAJDQ1swSgApOltvraOb77QPPCRlnQ1ZVhD2t0CkzNVgSLqWMIZCvmRlz/rVqxAfpZQoLTc+uDNM+cvo4hGO+XaklBURCvFUeSl3MRlAWCCxQLgRsk5Gqf4NYhAFB4rXjNi8keMgp1XRZeotkgKGkEwePSwBRg9yuyQKWukIKQ0y7+EwYwPkgcgjKKYLydCQBATiuOVWkdUhR5SraX6UwOktkEClnZenuYt6F8iEwoAtiKDwxaJMv9yWkoB1lp1Cf0CALZiqyU0pMVEIKtOMDqpNYCG2vFNgfFJG4AIgie165AcxQItKJjj9SfHW/lwPS0DbZHMMohocQLArnNn7BiaZE82wNYCNzYJ5BDAsI2EBb2g5t2RTF5Iyvp3g8WlgDmTR4CYrd38i/digUGMZj3u9JaU+4mxZTv/WSzIkAaH/MdAtmKDAEA24oCeiMlET9aOQRIy6MYAtmKEABPFzRPaooiA+cZZTG/G1oCXTYTsqw8eLm1pEBenUECpidKF2gMYIH3v5xOBHIaMWnbqHcIrh3MANat6GQlxe4KSRQB3KV4M/t76aszuLlqxZGDN4qMxP54bQlK55AwEe+WYVQrUodXXgzB13lOo3++n3NQqGF0vt7CTLTbi3GqFZ0UDK8zfJ3N5+EIAEPgXaemarcSYmNBTA0J8JCrZwNfpnYojgIw44IOkwAk5xfTzF0eSRBCtiJUpJ0ArxC0QMxdNIrA9QAuU7B33nT+yphMgcCEqD9dAwo8QRwLRN1HVHP/PhLpI4IXBbKCkK1IloUN18EZYr+8kemn9m5flTVJnXUTDVEpCOBDuAUGFOnvb+VSt3CCkBmRZ1N/oUb7smr6aaVYDQnrtR21jXMWOHg7XyVNkaLV7qdyMNH0t+eofBhYT5IWKOmB2/m8fMgUlGl4xcpAtP1w5sHlrQxTeFPpsVs6K05xVoQJDIRU4cHPsg/c0qluq5Y+3ASYMxGIIl+G4uMAP2qBV7bigfAscPjO6mrVipEBh+K/AEytWPwawbfA8ZvbVQryLM1y9CuIMqefubldtiIlanRSEGU8gzMU/wlAtSLBeoiUDPKCIQoCZ/hzT1hUcowiZLpenCD2q4F8C/zlIRehhiimxsYFYs8SuW+BPz7mU9cOxFSNd5ZYWeADDzrV6lkXpquBl2qELbFqwg896iXmROxYAmWU/wuAGYKtLeFaoPz8s2YwbDUUBA5ZwhuKPw7w41oC+WeJgAX+zSOfkyXYqhrFqgn/3UOvxhIuRIq+B/ADqjGfJUo4Jfr3AADCNCheW+Abj34vDUrZqgLfevhdn7MZ989C3wP4UYlQD76u3v4PVfULg3RLAIoAAAAASUVORK5CYII=", 
    local_path:"/Users/lasse/Library/Unity/Asset Store-5.x/APM Music/AudioMusic/The Way U Luv Me (81891).unitypackage", pubdate:null, description:null, publisher:null, category:null, link:null}]};
    if(a) {
      a(null, c)
    }else {
      return c
    }
  }, GetSkinIndex:function() {
    return 0
  }, isEnabled:a, MakeMenu:function(a, c, e) {
    $("body").one("click", function(a) {
      a.stopImmediatePropagation()
    });
    c += 100;
    e += 100;
    Kharma.UI.ContextMenu({menuObject:a, left:c, top:e})
  }, OpenBrowser:function(a) {
    Kharma.utils.windowWrapper.open(a)
  }, OpenPackage:function() {
  }, toggle:function() {
    a(function(a) {
      a ? g() : h()
    })
  }}
};
Kharma.UnityEditor = function(g) {
  var h, a, d, c, e, b;
  h = function(a) {
    return a.type + "__" + a.id
  };
  a = function(a) {
    a = isNaN(parseInt(a, 10)) ? a.toString().match(/(.*)__(.*)/i) : ["content", a];
    return{type:a[1], id:a[2]}
  };
  d = function(b, c, d, e) {
    $("#mainContent").trigger(Kharma.utils.events.onDownloadProgress, [a(b), c, d, e])
  };
  c = function() {
    var a = null;
    if(b()) {
      a = $.cookie("unity_version");
      if(typeof a === "string" && a.length > 0) {
        return a
      }
      a = Kharma.utils.windowWrapper.navigator.userAgent.match(/Unity\/([^\s]+)/);
      a = a !== null ? a[1] : Kharma.l10n.editor.unknownVersion
    }
    return a
  };
  e = function() {
    return Kharma.utils.windowWrapper.navigator.userAgent.match(/Chrome\//) ? !0 : !1
  };
  b = function() {
    return Kharma.utils.windowWrapper.navigator.userAgent.match(/Unity\//) ? !0 : !1
  };
  (function(a) {
    b() && e() && !window.context && unityObj.getUnityObject("AssetStoreContext", function(b, c) {
      window.context = c;
      a()
    });
    if(!document.AssetStore) {
      document.AssetStore = Kharma.assetStore
    }
    if(!document.AssetStore.pkgs) {
      document.AssetStore.pkgs = {OnDownloadProgress:d}
    }
  })(g);
  return{download:function(a, b) {
    var c = {title:a.filename_safe_package_name, category:{label:a.filename_safe_category_name}, publisher:{label:a.filename_safe_publisher_name}}, d = {id:h(a.link), url:a.url, key:a.key};
    e() ? window.context.Download(c, d, b) : b(null, window.context.Download(c, d))
  }, onDownloadProgress:d, getLicenseAndHardwareHash:function(a) {
    if(b()) {
      var c = function(b, c) {
        c && c.length === 80 ? a(b, c.substr(0, 40), c.substr(40)) : a(b, null, null)
      };
      e() ? window.context.GetAuthToken(c) : c(null, window.context.GetAuthToken())
    }else {
      a(null, null, null)
    }
  }, getEditorVersion:c, getInitialOpenURL:function(a) {
    e() ? window.context.GetInitialOpenURL(a) : a(null, window.context.GetInitialOpenURL())
  }, getLicenseFlags:function(a) {
    e() ? window.context.GetLicenseFlags(a) : a(null, window.context.GetLicenseFlags())
  }, getPackageList:function(a) {
    try {
      if(b()) {
        if(e()) {
          return window.context.GetPackageList(a)
        }else {
          a(null, window.context.GetPackageList())
        }
      }else {
        return a(null, {results:[]})
      }
    }catch(c) {
      var d = document.title;
      document.title = Kharma.l10n.editor.refreshingContext;
      document.title = d;
      a(null, window.context.GetPackageList())
    }
  }, getSkinIndex:function(a) {
    var c;
    b() ? e() ? window.context.GetSkinIndex(a) : (c = window.context.GetSkinIndex(), a(null, c)) : a(null, 0)
  }, isChromium:e, isEditor:b, isEmulated:function() {
    return window.context && window.context.emulated ? !0 : !1
  }, isUnity4x:function() {
    return b() && parseFloat(c()) < 5
  }, makeMenu:function(a, b, c) {
    Kharma.UI.ContextMenu({menuObject:a, left:b, top:c})
  }, openBrowser:function(a, c) {
    b() ? e() ? window.context.OpenBrowser(a, c) : c(null, window.context.OpenBrowser(a)) : (Kharma.utils.windowWrapper.open(a), c())
  }, openPackage:function(a, b) {
    a = "{" + a + "}";
    e() ? window.context.OpenPackage(a, b) : b(null, window.context.OpenPackage(a))
  }}
};
Kharma.Screensaver = function() {
  function g(a) {
    for(var b = document.documentElement, c = 0, d = a.length;c < d;c++) {
      if(a[c] in b.style) {
        return a[c]
      }
    }
    return null
  }
  var h = [], a = {}, d = 0, c = null, e = null, b = null, f = 0, i = 0, l = 1, j = null, k = null, n = null, m, p, q, r, t, s, w, z, u, v, o = g(["transform", "-webkit-transform", "-moz-transform", "-ms-transform", "-o-transform"]), y = g(["transition", "-webkit-transition", "-moz-transition", "-ms-transition", "-o-transition"]);
  s = function(a, b, c) {
    return Number((Math.random() * (b - a) + a).toFixed(c))
  };
  z = function(a) {
    for(var b = a.length - 1, c, d;b > -1;b--) {
      c = parseInt(Math.random() * b, 10), d = a[b], a[b] = a[c], a[c] = d
    }
    return a
  };
  p = function() {
    Kharma.io.get({uri:"/api/category/top/paid/0/10.json", onSuccess:function(b) {
      for(var b = b.json.results, c = 0, d = b.length;c < d;c++) {
        h.push({id:b[c].id, title:b[c].title}), a[b[c].id] = c
      }
      c = 0;
      for(d = b.length;c < d;c++) {
        m(b[c].id, t)
      }
    }})
  };
  m = function(a, b) {
    Kharma.io.get({uri:"/api/content/overview/" + a + ".json", onSuccess:function(a) {
      b(a.json.content)
    }})
  };
  t = function(b) {
    h[a[b.id]].images = b.images;
    d++;
    d === h.length && (h = z(h), w())
  };
  w = function() {
    c ? (e.css("opacity", "0"), b.css("opacity", "0"), j = setTimeout(function() {
      e.remove();
      e = $('<div style="position:absolute;top:0px;width:100%;' + y + ":" + o + ' 12000s linear, opacity 2s linear;">');
      c.append(e);
      f++;
      i = 0;
      f === h.length && (f = 0);
      n = setTimeout(function() {
        e.css(o, "translate(0, -10000px)");
        r();
        q()
      }, 10)
    }, 2E3)) : (c = $('<div style="position:fixed;top:0px;right:0px;bottom:0px;left:0px;background-color:#000;z-index:20;' + y + ':opacity 2s linear">'), e = $('<div style="position:absolute;z-index:0;top:0px;width:100%;' + y + ":" + o + ' 12000s linear, opacity 2s linear;">'), b = $('<div style="position:fixed;z-index:1;bottom:50px;left:50px;font:normal 30px Arial,Helvetica,sans-serif;color:#444;opacity:0;' + y + ':opacity 1s linear;">'), c.append(e), c.append(b), $("body").append(c), c.on("click", 
    function() {
      v()
    }), j = setTimeout(function() {
      e.css(o, "translate(0, -10000px)");
      r();
      q()
    }, 2E3))
  };
  r = function() {
    b.html(h[f].title);
    k = setTimeout(function() {
      b.css("opacity", "1")
    }, 1E3)
  };
  q = function() {
    var a = h[f].images[i];
    if(a.type !== "screenshot") {
      i++, j = i < h[f].images.length ? setTimeout(q, 0) : setTimeout(w, 0)
    }else {
      var b = s(-100, 100, 5), c = window.innerWidth / 2 - parseInt(a.width, 10) / 2 + b, d = window.innerHeight / 2 - parseInt(a.height, 10) / 2, b = new Image;
      b.onload = function() {
        if(e) {
          var a = $(this), b = $('<div style="position:absolute;left:' + c + "px;top:" + window.innerHeight + "px;background-color:#fff;border:10px solid #fff;" + y + ":" + o + ' 1s ease-out;"/>');
          a.css("opacity", "0");
          a.css(y, "opacity 1s linear");
          b.append(a);
          e.append(b);
          var g;
          l > 0 ? (g = s(-3, 0, 5), l = -1) : (g = s(0, 3, 5), l = 1);
          n = setTimeout(function() {
            b.css(o, "translate(0px, " + (d - window.innerHeight - e.offset().top) + "px) rotate(" + g + "deg)");
            a.css("opacity", "1")
          }, 10);
          i++;
          j = i < h[f].images.length ? setTimeout(q, 6E3) : setTimeout(w, 6E3)
        }
      };
      b.src = a.link
    }
  };
  u = function() {
    p()
  };
  v = function() {
    clearTimeout(j);
    clearTimeout(k);
    clearTimeout(n);
    c.remove();
    h = [];
    a = {};
    d = 0;
    b = e = c = null;
    i = f = 0;
    l = 1;
    document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
    $("#assetStore").show()
  };
  (function() {
    $("#mainContent").on(Kharma.utils.events.onUserLogin, function() {
      if(o) {
        var a = 0, b = null;
        $("#unav").on("click", function() {
          clearTimeout(b);
          a++;
          a > 2 ? (a = 0, $("#assetStore").hide(), document.body.requestFullscreen ? document.body.requestFullscreen() : document.body.msRequestFullscreen ? document.body.msRequestFullscreen() : document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.webkitRequestFullscreen && document.body.webkitRequestFullscreen(), window.setTimeout(u, 0)) : b = setTimeout(function() {
            a = 0
          }, 300)
        })
      }
    })
  })()
};
Kharma.Snow = function() {
  var g = parseInt($("body").css("height"), 10) > parseInt($("#assetStore").css("height"), 10) ? $("body") : $("#assetStore"), h, a = 0, d = 0, c = [], e, b, f = Math.PI / 180, i = g.innerWidth() / 2, l = g.innerHeight() / 2, j, k, n, m;
  j = function(a) {
    a = new THREE.Particle(a);
    a.velocity = new THREE.Vector3(0, -8, 0);
    k(a.velocity);
    a.velocity.rotateX(Math.random() * 90 + -45);
    a.velocity.rotateY(Math.random() * 360 + 0);
    a.gravity = new THREE.Vector3(0, 0, 0);
    a.drag = 1;
    a.updatePhysics = function() {
      this.velocity.multiplyScalar(this.drag);
      this.velocity.addSelf(this.gravity);
      this.position.addSelf(this.velocity)
    };
    return a
  };
  k = function(a) {
    a.rotateX = function(a) {
      var b = Math.cos(a * f), a = Math.sin(a * f), c = this.z, d = this.y;
      this.y = d * b + c * a;
      this.z = d * -a + c * b
    };
    a.rotateY = function(a) {
      var b = Math.cos(a * f), a = Math.sin(a * f), c = this.z, d = this.x;
      this.x = d * b + c * a;
      this.z = d * -a + c * b
    }
  };
  n = function() {
    g = parseInt($("body").css("height"), 10) > parseInt($("#assetStore").css("height"), 10) ? $("body") : $("#assetStore");
    h.aspect = g.innerWidth() / g.innerHeight();
    h.updateProjectionMatrix();
    e.setSize(g.innerWidth(), g.innerHeight())
  };
  m = function() {
    var f, i = c.length, g;
    for(f = 0;f < i;f++) {
      g = c[f], g.updatePhysics(), g.position.y < -1E3 && (g.position.y += 2E3), g.position.x > 1E3 ? g.position.x -= 2E3 : g.position.x < -1E3 && (g.position.x += 2E3), g.position.z > 1E3 ? g.position.z -= 2E3 : g.position.z < -1E3 && (g.position.z += 2E3)
    }
    h.position.x += (a - h.position.x) * 0.05;
    h.position.y += (-d - h.position.y) * 0.05;
    h.lookAt(b.position);
    e.render(b, h)
  };
  (function() {
    var f;
    f = g.innerWidth();
    var k = g.innerHeight(), r;
    r = new Image;
    $("body").addClass("snow");
    $("canvas").remove();
    b = new THREE.Scene;
    e = new THREE.CanvasRenderer;
    h = new THREE.PerspectiveCamera(75, f / k, 1, 1E4);
    h.position.z = 1E3;
    b.add(h);
    e.setSize(f, k);
    r.src = "js/kharma/fun/snow.png";
    k = new THREE.ParticleBasicMaterial({map:new THREE.Texture(r)});
    for(f = 0;f < 500;f++) {
      r = j(k), r.position.x = Math.random() * 2E3 - 1E3, r.position.y = Math.random() * 2E3 - 1E3, r.position.z = Math.random() * 2E3 - 1E3, r.scale.x = r.scale.y = 1, b.add(r), c.push(r)
    }
    $(e.domElement).css("position", "absolute");
    $(e.domElement).css("left", "0");
    g.prepend(e.domElement);
    g.mousemove(function(b) {
      b.stopPropagation();
      b.preventDefault();
      a = b.clientX - i;
      d = b.clientY - l
    });
    g.mutate("height", function() {
      n()
    });
    setInterval(m, 1E3 / 60)
  })()
};
Kharma.Dialog = function(g) {
  var h = null, a = null, g = g || {}, d = g.message, c = g.title;
  (function() {
    document.currentMessage = this;
    document.activeElement && document.activeElement.blur();
    h = $("#assetStore");
    a = $("<div id='message' class='dialog message'></div>");
    h.append(a);
    a.append("<h1>" + c + "</h1>");
    a.append('<div class="message-body">' + d + "</div>");
    Kharma.editorHelper.show(a)
  })(g);
  return{base:h, cancel:function() {
    a.css("opacity", 0);
    setTimeout(function() {
      a.remove()
    }, 1E3)
  }, element:a}
};
Kharma.Header = function() {
  var g, h, a, d, c, e, b, f, i, l, j, k;
  g = function(a) {
    a.removeClass("not-active")
  };
  h = function(a) {
    a.addClass("not-active")
  };
  a = function(a) {
    Kharma.unityEditor.isEditor() ? a.hide() : a.fadeOut("fast")
  };
  d = function(a) {
    a && (a.stopPropagation(), a.preventDefault());
    f($("#adminarea"))
  };
  c = function(a) {
    a && (a.stopPropagation(), a.preventDefault());
    !$("#cart").hasClass("not-active") && !$("#cart").hasClass("disabled") && (Kharma.ga.view({name:"cart", dimension8:"Shopping"}), Kharma.cart.showCart())
  };
  e = function(a) {
    a && (a.stopPropagation(), a.preventDefault());
    !$("#downloads").hasClass("not-active") && !$("#downloads").hasClass("disabled") && $.address.value("/account/downloads/search=#PACKAGES")
  };
  b = function() {
    var a = $("#adminMode"), b = Kharma.history.getCurrentPage();
    Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous && (b.type === "con" || b.type === "pre") ? (a.removeClass("not-active"), b.openAdminMode()) : (a.addClass("not-active"), $("#adminlayer").hide(), $(".adminlayer_content").hide())
  };
  f = function(b) {
    b.is(":visible") ? (a(b), b.hide()) : b.show()
  };
  i = function() {
    var a = $("#cart"), b = $(a.find(".count"));
    Kharma.cart && Kharma.cart.items && Kharma.cart.items.length > 0 ? (g(a), b.text(Kharma.cart.items.length), b.show()) : (h(a), b.hide());
    Kharma.cart && Kharma.cart.active && g(a)
  };
  l = function() {
    var a = $("#downloads");
    Kharma.login.user && !Kharma.login.user.is_anonymous ? g(a) : h(a)
  };
  j = function() {
    var a = $("#home");
    Kharma.history.getIndex() !== null && $("body").attr("id") !== "ashom0" ? g(a) : h(a)
  };
  k = function() {
    $.each($(".button-group a"), function(a, b) {
      $(b).attr("title", Kharma.l10n.toolbar[$(b).attr("data-title")])
    })
  };
  return{addAdministration:function() {
    $("#adminstrip").addClass("button-group")
  }, addAdminModeButton:function() {
    var a = $('<a id="adminMode" title="' + Kharma.l10n.admin.showMenu + '" href="#" class="not-active"><span class="icon" /></a>'), c = $("#adminstrip");
    $("#adminMode").length === 0 && c.append(a);
    a.off().on("click", function(b) {
      var c = Kharma.history.getCurrentPage();
      b.stopPropagation();
      b.preventDefault();
      !$("#adminlayer").is(":visible") && c.openAdminMode ? (a.removeClass("not-active"), c.openAdminMode()) : ($("#adminlayer").hide(), $(".adminlayer_content").hide())
    });
    b();
    $("#mainContent").on(Kharma.utils.events.onPageLoadComplete, function() {
      b()
    })
  }, addEvents:function() {
    $("#downloads").off().on("click", e);
    $("#cart").off().on("click", c)
  }, goAdmin:d, goDownloads:e, removeAdministration:function() {
    $("#adminstrip").empty();
    $("#adminarea").is(":visible") && d()
  }, updateButtons:function() {
    j();
    l();
    i();
    k()
  }}
};
Kharma.header = new Kharma.Header;
Kharma.List = function() {
  var g, h, a;
  g = function(a, c, e, b) {
    var f = {position:1, name:a};
    if(e) {
      f.publisher_id = e
    }
    Kharma.io.post({uri:"/api/list/create.json", pageSpecific:!0, parameters:f, onSuccess:function(g) {
      var g = g.json.result, h = g.id, j = c && c.parent().parent();
      c && c.attr("data-id", h);
      a = Kharma.helper.escapeHTML(a);
      j.find(".title").replaceWith($("<a href='" + j.find(".slug").text() + g.slug + "'><span class='title' data-id='" + h + "'>" + a + "</span></a>"));
      j.find(".list-delete").attr("data-id", h);
      j.find(".slug").text(j.find(".slug").text() + g.slug);
      j.find(".slug").attr("href", j.find(".slug").text() + g.slug);
      j.find(".status").text(Kharma.l10n.lists[g.status]);
      j.find(".warning span").text(Kharma.l10n.lists.warning + ' "' + a + '"?');
      j.find(".action").prepend($('<button class="list-publish basic light disabled" title="' + Kharma.l10n.lists.disabledMessage + '" data-id=' + h + ">" + Kharma.l10n.lists.publish + "</button>"));
      b && b();
      Kharma.ga.event({eventCategory:"List", nonInteraction:!0, eventAction:"Create", eventLabel:"list/create/", dimension9:e ? e : Kharma.login.user.id, dimension1:{id:h, position:f.position, name:f.name}})
    }})
  };
  h = function(a) {
    var c = $(a.target), e = c.attr("data-id");
    Kharma.io.del({uri:"/api/list/update/" + e + ".json", pageSpecific:!0, onSuccess:function() {
      var a = c.parent().parent(), d = a.parent();
      d.find(".list-details").length === 1 && d.find(".empty").show();
      a.remove();
      Kharma.ga.event({eventCategory:"List", nonInteraction:!0, eventAction:"Remove", eventLabel:"list/remove/", dimension9:Kharma.login.user.id, dimension1:{id:e}})
    }})
  };
  a = function(a) {
    var c = a.target, e, b = c.val();
    e = $('<span class="title"></span>').html(Kharma.helper.escapeHTML(b));
    c.replaceWith(e);
    g(b, e, a.publisherId, a.callback)
  };
  return{addInputEvents:function(d) {
    var c = d.callback, e = d.input, b = d.publisherId;
    if(Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() && !Kharma.unityEditor.isChromium()) {
      e.on("input", function() {
        var d = $(this), e = $(d.parent().parent().find(".list-delete"));
        d.val().length > 0 ? e.removeClass("disabled") : e.addClass("disabled");
        e.off("click").on("click", function() {
          a({callback:c, target:d, publisherId:b});
          e.text(Kharma.l10n.lists.deleteLabel)
        });
        d.val().length > 1 && d.val().indexOf("\t") !== -1 && (a({callback:c, target:d, publisherId:b}), e.text(Kharma.l10n.lists.deleteLabel))
      })
    }else {
      e.off("keyup").on("keyup", function(d) {
        var e = $(d.target), g = $(e.parent().parent().find(".list-delete"));
        e.val().length > 0 ? g.removeClass("disabled") : g.addClass("disabled");
        g.off("click").on("click", function() {
          a({callback:c, target:e, publisherId:b});
          g.text(Kharma.l10n.lists.deleteLabel)
        });
        switch(d.keyCode) {
          case 13:
            e.val().length > 1 && (a({callback:c, target:e, publisherId:b}), g.text(Kharma.l10n.lists.deleteLabel))
        }
      })
    }
  }, createList:g, getLists:function(a) {
    Kharma.io.get({uri:"/api/list/user.json", pageSpecific:!0, onSuccess:function(c) {
      var e, b = c.json.result, f = [], g = [];
      if(a) {
        c = 0;
        for(e = b.length;c < e;c++) {
          b[c].publisher_id ? g.push(b[c]) : f.push(b[c])
        }
        a({publisherLists:g, userLists:f})
      }
    }, onFailure:function() {
      $.address.value("#!/404")
    }})
  }, loadLists:function(a) {
    var c = $("#smallSlider"), e = a.base, b = a.container, f = a.header, g = c.length > 0 ? c : $(Handlebars.templates.smallSlider({header:f}));
    b.after(g);
    Kharma.io.get({uri:a.url, pageSpecific:!0, onSuccess:function(b) {
      var c = b.json.result, f = $(g.find(".body")), h;
      f.empty();
      c && c.length > 0 ? (g.show(), g.addClass("slider"), h = new Kharma.UI.SmallSlider({callback:e.miniList, base:e, container:$(".small-slider"), data:b.json})) : a.noSlider || (g.show(), f.addClass("no-slider"), f.append("<p>" + a.noResults + "</p>"));
      a.callback(h)
    }})
  }, publish:function(a) {
    var c = $(a.target);
    $(a.target).hasClass("disabled") || Kharma.io.post({uri:"/api/list/update/" + c.attr("data-id") + ".json", pageSpecific:!0, parameters:{status:"published"}, onSuccess:function() {
      $(c.parent().parent().find(".status")).text(Kharma.l10n.lists.published);
      c.remove()
    }})
  }, showWarning:function(a) {
    var c = $($(a.target).parent().parent().find(".warning"));
    $(c.find(".yes")).off("click").on("click", function() {
      h(a)
    });
    $(c.find(".no")).off("click").on("click", function() {
      c.hide()
    });
    c.show()
  }, updateBanner:function(a, c) {
    Kharma.io.post({uri:"/api/list/image/" + c + ".json", pageSpecific:!0, data:a, processData:!0, contentType:!0})
  }, updateDescription:function(a, c) {
    Kharma.io.post({uri:"/api/list/update/" + c + ".json", pageSpecific:!0, parameters:{description:a}})
  }, updateName:function(a, c) {
    Kharma.io.post({uri:"/api/list/update/" + c + ".json", pageSpecific:!0, parameters:{name:a}})
  }, updatePosition:function(a, c) {
    Kharma.io.post({uri:"/api/list/update/" + c + ".json", pageSpecific:!0, parameters:{position:a}})
  }}
};
Kharma.UI = Kharma.UI || {};
Kharma.Page = function(g) {
  var h, a = [], d = g || {}, c = d.id || "0", e = "", b = !1, f = [], i = [], l = "", j, k = d.sortby, n, m, p, q, r, t, s, w, z, u, v, o, y, B, A, x, E, F, I;
  m = function(a) {
    var b = $("#daily"), c = {}, d = function() {
      var a = new Date, b = a = Math.round((Kharma.dailyDeal.end.getTime() - a.getTime()) / 1E3), e, f = (b - b % 3600) / 3600;
      b -= f * 3600;
      e = (b - b % 60) / 60;
      b -= e * 60;
      f < 10 && (f = "0" + f);
      e < 10 && (e = "0" + e);
      b < 10 && (b = "0" + b);
      c.hour.text(f);
      c.min.text(e);
      c.sec.text(b);
      if(a > 0) {
        Kharma.dailyDeal.timer = setTimeout(d, 250)
      }
    };
    Kharma.dailyDeal === void 0 ? Kharma.dailyDeal = {end:null, timer:null} : clearTimeout(Kharma.dailyDeal.timer);
    b.length === 0 && ($("#categoryBox").after($(Handlebars.templates.daily({json:a}))), b = $("#daily"), b.on("click", function() {
      Kharma.ga.event({eventCategory:"Promotion", nonInteraction:!0, eventAction:"Daily Deal", eventLabel:"Position 1", dimension9:a.publisher.label, dimension10:a.title});
      $.address.value("/content/" + a.id)
    }));
    c = {hour:b.find(".hour"), min:b.find(".min"), sec:b.find(".sec")};
    if(a.remaining > 0) {
      Kharma.dailyDeal.end = new Date, Kharma.dailyDeal.end.setTime(Kharma.dailyDeal.end.getTime() + a.remaining * 1E3), d()
    }
  };
  p = function() {
    var a = Kharma.utils.windowWrapper.location.getPathName().split("/"), b = a[1], c = $("head"), d, e = 0, f = Kharma.helper.getLanguages(), g;
    $("link[hreflang]").remove();
    $("html").attr("lang", b);
    for(b = f.length;e < b;e++) {
      g = f[e].url, d = Kharma.utils.windowWrapper.location.getOrigin() + "/" + g + "/" + (a[2] || "") + (Kharma.utils.windowWrapper.location.getHash() || ""), d = Kharma.helper.escapeHTMLAll(d), d = $("<link rel='alternate' hreflang='" + (g === "en" ? "en" : g === "cn" ? "zh-Hans" : g === "jp" ? "ja" : g === "kr" ? "ko" : "") + "' href='" + d + "'/>"), c.append(d)
    }
  };
  q = function(a, b) {
    Kharma.io.get({uri:"/api/sale/results/10.json", onSuccess:function(a) {
      var c = $("#topBox .body.sale"), d = a.json, e = d.daily, f = $();
      c.empty();
      d && b && b(d);
      e && m(e);
      a.json.results.length === 0 ? (c.removeClass("enabled"), c.prev().removeClass("enabled"), c.attr("style", "")) : (f = f.add(c).add(c.prev()), f.addClass("enabled"), f.trigger("autoclick"), f.prependTo(f.parent()), (new Kharma.UI.TopList(a.json.results ? a.json.results : [], !0)).render(c), c.on("click", function(a) {
        F("sale", a)
      }), a.json.feed && a.json.feed !== "" && (a.json.results.length > 1 && c.first().append($("<ul style='padding:5px 0px 10px 20px'><li class='see-more'><a href='#!/sale'>" + Kharma.l10n.sale.allOffers + "</a></li></ul>")), c.prev().find("#feedsale a").first().attr("href", a.json.feed).parent().css("display", "block")), a.json.title && a.json.title !== "" && (a = c.prev().find("h2").empty().append('<a href="#!/sale">' + a.json.title + "</a>"), a.find("a").click(function(a) {
        c.prev().hasClass("active-head") || a.preventDefault()
      })))
    }})
  };
  w = function() {
    var a = [], b = document.getElementsByTagName("meta"), c, d = b.length, e;
    for(c = 0;c < d;c++) {
      (e = b[c] && b[c].getAttribute("property")) && (e.indexOf("og:") !== -1 || e.indexOf("fb:") !== -1) && a.push(b[c])
    }
    c = 0;
    for(d = a.length;c < d;c++) {
      $(a[c]).remove()
    }
  };
  r = function() {
    var a, b, c = $(".search-tag:last");
    a = c && c.position() && $("#searchForm").width() - (c.position().left + c.width()) - (Kharma.unityEditor.isUnity4x() ? 150 : 10);
    var c = $("#searchForm"), d = $("#searchInput");
    d.css("width", a);
    b = parseInt(c.css("height"), 10);
    a = $(".button-container");
    b > 54 && b < 70 ? (a.removeClass("three-lines"), a.addClass("two-lines")) : b > 70 ? (a.removeClass("two-lines"), a.addClass("three-lines")) : (a.removeClass("two-lines"), a.removeClass("three-lines"));
    !Kharma.unityEditor.isUnity4x() && c.find(".search-tag").length === 0 && d.css("width", "100%")
  };
  u = function() {
    (e === "acc" || e === "tra" || e === "lic" || e === "dow") && $("#sidebar").hide()
  };
  y = function(a, b, c) {
    Kharma.io.get({uri:a, cacheExpiryPeriod:Kharma.Time.HOUR, onSuccess:function(a) {
      (new Kharma.UI.TopList(a.json && a.json.results ? a.json.results : [])).render(c);
      c.on("click", function(a) {
        F(b, a)
      });
      a.json.feed && a.json.feed !== "" && $("#feedlatest a").first().attr("href", a.json.feed).parent().css("display", "block")
    }})
  };
  B = function(a) {
    b = a;
    a === !0 && $("#mainContent").trigger(Kharma.utils.events.onPageLoadComplete)
  };
  v = function(a) {
    Kharma.io.get({uri:"/api/home/categories.json", cacheExpiryPeriod:Kharma.Time.HOUR, onSuccess:function(b) {
      var c = Kharma.utils.windowWrapper.innerWidth(), d = c > 980 ? $("#categoryBox .body") : $("#unav-sidebar"), c = c > 980 ? "categoryTree" : "mobileCategoryTree";
      d.empty();
      b.json.categories[0] && b.json.categories[0].id !== "home" && b.json.categories.unshift({id:"home", name:Kharma.l10n.categories.home});
      Kharma.UI.categoryTreeList = new Kharma.UI.TreeList(c, b.json, k);
      Kharma.UI.categoryTreeList.render(d, a);
      $("#mainContent").trigger(Kharma.utils.events.onCategoryTreeLoaded)
    }})
  };
  o = function() {
    var a = h !== null && h !== void 0 && !isNaN(h);
    v(h);
    y(a ? "/api/category/top/paid/" + h + "/10.json" : "/api/home/top/paid/10.json", "paid", $("#topBox .top-paid"));
    y(a ? "/api/category/top/free/" + h + "/10.json" : "/api/home/top/free/10.json", "free", $("#topBox .top-free"));
    y(a ? "/api/category/top/grossing/" + h + "/10.json" : "/api/home/top/grossing/10.json", "grossing", $("#topBox .top-grossing"));
    y(a ? "/api/category/top/latest/" + h + "/10.json" : "/api/home/top/latest/10.json", "latest", $("#topBox .top-latest"));
    Kharma.UI.sidebarAccordion = new Kharma.UI.Accordion($("#topBox"));
    Kharma.search = new Kharma.Search
  };
  n = function(a, b) {
    new Kharma.UI.DownloadButton({content:b, targetElement:a})
  };
  x = function(a, b) {
    $(".userRating.noRating", b).removeClass("noRating").append(Kharma.l10n.pkg.yourRating).after((new Kharma.UI.Rating({packageId:a.id, value:a.rating && a.rating.user, classes:"inline"})).render()).next().after("<br/>")
  };
  A = function() {
    !$("#mobileCategoryTree").is(":visible") && !$("#categoryTree").is(":visible") && v(h)
  };
  s = function() {
    t($("#mainContent"));
    f = [];
    $("#assetStore").scrollTop(0)
  };
  t = function(a) {
    var b = 0, c = f.length;
    if(a) {
      for(c = f.length;b < c;b++) {
        $.contains(a[0], f[b].target) && $(f[b].target).hide()
      }
      a.empty()
    }
  };
  z = function(a) {
    var b = [], c, d, e = null;
    for(c in a.data.price) {
      a.data.price.hasOwnProperty(c) && (a.data.price[c] = parseFloat(a.data.price[c]))
    }
    a.data.price_upgrade && $.each(a.data.price_upgrade, function(a, c) {
      e = a;
      b.push(parseFloat(Kharma.helper.formatPrice(c)))
    });
    c = Math.min.apply(null, b);
    d = Math.max.apply(null, b);
    d = Kharma.helper.getCurrency() + (d % 1 !== 0 ? d.toFixed(2) : d);
    c = Kharma.helper.getCurrency() + (c % 1 !== 0 ? c.toFixed(2) : c);
    a.data.price_assetkits = Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitspromember && a.data.price_assetkitspromember || Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitsplusmember && a.data.price_assetkitsplusmember || null;
    a.data.price_level11 = Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && a.data.price_level11member || null;
    return $(Handlebars.templates.contentPageFull({addToList:Kharma.l10n.lists.addToList, categoryLabel:Kharma.l10n.pkg.category, content:a.data, contentPage:a.contentPage, error:a.error, level11_price:Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && a.data.price_level11member, assetkits_price:Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitspromember && a.data.price_assetkitspromember || Kharma.login && 
    Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitsplusmember && a.data.price_assetkitsplusmember, loggedIn:Kharma.login.user && !Kharma.login.user.is_anonymous, message:a.message, notEditor:!Kharma.unityEditor.isEditor(), oneLicense:Kharma.l10n.supplant(Kharma.l10n.level11.oneLicense, {saleLimit:a.data.price_level11member && a.data.price_level11member.sale_limit}), publisherLabel:Kharma.l10n.pkg.publisher, priceLabel:Kharma.l10n.pkg.price, priceUpgrade:c !== d ? 
    b.length > 0 && b.length === 1 ? Kharma.helper.getFormattedPrice(a.data.price_upgrade[e]) : b.length > 0 && c + " - " + d : c, priceUpgradeLabel:Kharma.l10n.pkg.upgrade, ratingCount:!0, ratingLabel:Kharma.l10n.pkg.rating, userRatingLabel:Kharma.l10n.pkg.yourRating, requireLicense:Kharma.l10n.cart.requireLicense, saleBeforeLabel:Kharma.l10n.sale.before, saleNowLabel:Kharma.l10n.sale.now, urlLabel:Kharma.l10n.pkg.url}))
  };
  E = function(a) {
    var b, c, d, e;
    b = Kharma.unityEditor.getEditorVersion();
    var f;
    if(!b) {
      return""
    }
    if(a) {
      b = b.replace(/[a-z]\d+$/, "");
      a = a.replace(/[a-z]\d+$/, "");
      f = b.match(/\d+/g);
      c = a.match(/\d+/g);
      for(b = 0;c[b];b++) {
        e = parseInt(f[b], 10);
        d = parseInt(c[b], 10);
        if(e > d) {
          break
        }
        if(e < d) {
          return a
        }
      }
    }
    return""
  };
  F = function(a, b) {
    for(var c = b.target;c && c !== this;) {
      if(c instanceof HTMLLIElement || c instanceof HTMLImageElement) {
        var d;
        c instanceof HTMLImageElement ? (c = $(c.parentNode), d = 0) : (c = $(c), d = parseInt(c.data("idx"), 10));
        Kharma.ga.event({eventCategory:"Inbound", nonInteraction:!0, eventAction:{topFree:"Top Free", topPaid:"Top Paid", topGrossing:"Top Grossing", topLatest:"Top Latest", topSale:"Top Sale"}[{paid:"topPaid", free:"topFree", grossing:"topGrossing", latest:"topLatest", sale:"topSale"}[a]], dimension9:c.data("pub") || "n/a", dimension10:c.data("pkg") || "n/a", eventLabel:"Position " + (d || d === 0) ? d + 1 : "-1"});
        break
      }
      if(c) {
        c = c.parentNode
      }
    }
  };
  I = function(a) {
    var b = parseFloat(a.css("height")), c = $(".content-container").length > 0 ? $(".content-container") : $(".blocked"), d = ($(a.find(".details-container")).length > 0 ? $(a.find(".details-container")) : $(c.find(".details-container"))).css("height"), a = $(a.find(".fulldescription")).length > 0 ? $(a.find(".fulldescription")) : $(c.find(".fulldescription")), b = parseInt($("#contentoverview").css("width"), 10) > 479 ? b - parseFloat(d) : b / 2 - parseFloat(d);
    a.css("height", b - 40)
  };
  (function() {
    var a = $("#innerNewsletter.header-box"), b = $("#innerSocial.header-box");
    e = d.type && d.type.substr(0, 3) || d;
    B(!1);
    e === "hom" ? (a.show(), Kharma.unityEditor.isEditor() || b.show()) : (a.hide(), Kharma.unityEditor.isEditor() || b.hide());
    w();
    Kharma.unityEditor.isEditor() || (Kharma.utils.windowWrapper.onhashchange(p), p())
  })();
  return{activateLinks:function() {
    var a = $(".rating");
    i = [];
    a.each(function(a, b) {
      $(b).hasClass("ready") || i.push(new Kharma.UI.Rating({packageId:b, value:!0}))
    })
  }, addFooter:function(a) {
    if(a) {
      var b = parseInt(Kharma.login.user.vat_percent, 10) > 0 ? Kharma.l10n.supplant(Kharma.l10n.user.pricesIncludeVAT, {vat:Kharma.login.user.vat_percent}) : Kharma.l10n.user.exclusiveVAT;
      a.append($("<div id='vat-info'>").text(b))
    }
  }, addOpenGraph:function(a, b) {
    $("head").prepend(b({content:a, description:$("<div/>").html(a.description).text().slice(0, 1024), imageBig:a.keyimage && (a.keyimage.facebook && a.keyimage.facebook.replace(/^(https?:)?/, "http:") || a.keyimage.big_cropped && a.keyimage.big_cropped.replace(/^(https?:)?/, "http:") || a.keyimage.big && a.keyimage.big.replace(/^(https?:)?/, "http:")), imageSmall:a.keyimage && a.keyimage.small && a.keyimage.small.replace(/^(https?:)?/, "http:"), imageIcon:a.keyimage && a.keyimage.icon && a.keyimage.icon.replace(/^(https?:)?/, 
    "http:"), url:Kharma.utils.windowWrapper.location.getHref()}))
  }, addSocial:function(a) {
    $("#innerSocial").remove();
    a.append(Handlebars.templates.social({deal:Kharma.l10n.social.deal, follow:Kharma.l10n.social.follow}))
  }, addTopSaleList:q, sanitizeHTMLText:function(a) {
    return a.replace(/[<>]/g, function(a) {
      return a === "<" ? "&lt;" : "&gt;"
    }).replace(/(\r\n|\r|\n)/g, "<br />")
  }, calculateSize:function() {
    var a = $("#contentoverview .background"), b, c;
    b = 0;
    for(c = a.length;b < c;b++) {
      I($(a[b]))
    }
  }, changeSearchInputWidth:r, clear:function() {
    $.each(a, function(a, b) {
      b()
    });
    a = [];
    B(!1)
  }, clearElement:t, createFull:function(a) {
    var b = a.callback, c = a.element, d = a.data, e, f;
    e = z(a);
    x(d, e);
    c.append(e);
    f = c.find(".fulldescription");
    f.append(d.description);
    d.flags.external_link && f.addClass("external");
    e = e.find(".linkbar");
    a.preview || (f = E(d.min_unity_version), d.short_url && (a = new Kharma.UI.SharingBar({type:"package", title:d.title, publisher:d.publisher.label, twitterMessage:d.title + Kharma.l10n.page.by + d.publisher.label, id:d.id, url:d.short_url}), $(".details-container", c).after(a.getSharingBar())), f === "" ? d.flags.external_link ? d.url && $(e[0]).prepend('<div class="action-container"><a class="download" href="' + d.url + '" target="_blank">' + Kharma.l10n.page.readMore + "</a></div>") : n(e, 
    d) : $(".details-container", c).after('<div class="upgrade">' + Kharma.l10n.editor.upgrade + f + "</div>"));
    b && typeof b === "function" && b()
  }, createFullTemplate:z, clearList:a, createDetails:function(a, b, c) {
    for(var d in b.price) {
      b.price.hasOwnProperty(d) && (b.price[d] = parseFloat(b.price[d]))
    }
    b.price_assetkits = Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitspromember && b.price_assetkitspromember || Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitsplusmember && b.price_assetkitsplusmember || null;
    b.price_level11 = Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && b.price_level11member || null;
    b = Handlebars.templates.packageDetails({level11_price:Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && b.price_level11member, assetkits_price:Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitspromember && b.price_assetkitspromember || Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitsplusmember && b.price_assetkitsplusmember, result:b});
    a.prepend(b);
    c && typeof c === "function" && c()
  }, getRequestUrl:function() {
    return l
  }, id:c, isLoaded:function() {
    return b
  }, linkElement:function(a, b, c, d) {
    d ? a.append($('<a href="#!' + b + "/" + c + '" class="livelink">' + d + "</a>")) : $(a).addClass("livelink").attr({"data-template":b, "data-link":c})
  }, load:function() {
    var b, d, f, g;
    if($("body")[0]) {
      $("body")[0].id = "as" + e + c
    }
    u();
    $("#sidebar").empty();
    $("#sidebar").show();
    $(".navigation .search-icon").remove();
    $("#searchForm").length === 0 ? $("#content-panels").prepend($(Handlebars.templates.newSearch({placeholder:Kharma.l10n.search.search}))) : $("#searchArea").show();
    d = $("<button class='filters' type='button'>" + Kharma.l10n.search.filters + "</button>");
    f = $("<div class='reset-search' type='button'></div>");
    b = $("<div class='button-container'></div>");
    b.append(f);
    b.append(d);
    g = $("#searchInput");
    $("#searchForm").find(".button-container").length === 0 && g.before(b);
    g.on("focusin", function() {
      $(this).removeAttr("placeholder")
    });
    g.on("focusout", function() {
      $("#searchForm").find(".search-tag").length === 0 && $(this).attr("placeholder", Kharma.l10n.search.search)
    });
    d.on("click", function(a) {
      var b = $("#searchOptions");
      Kharma.history.getCurrentPage().type === "sea" ? b.is(":visible") ? (b.hide(), d.removeClass("show-options"), $("#publisherpage").removeClass("show-options"), Kharma.localStorage.setItem("kharma.search.options", !1)) : (b.show(), d.addClass("show-options"), $("#publisherpage").addClass("show-options"), Kharma.localStorage.setItem("kharma.search.options", !0)) : (Kharma.search.goToSearchPage(a), b.show(), d.addClass("show-options"), Kharma.localStorage.setItem("kharma.search.options", !0))
    });
    f.on("click", function(a) {
      var b;
      $(".search-tag").remove();
      $("#searchInput").val("");
      b = Kharma.history.getCurrentPage();
      b.type === "sea" && (Kharma.search.goToSearchPage(a, null, null, !0), b.resetAll())
    });
    $("body").removeClass("top");
    $(".search-tag").remove();
    r();
    $("#mainContent").trigger(Kharma.utils.events.onPageLoadStart);
    a.push(s);
    B(!1);
    return!1
  }, loadSideBar:function(a, b) {
    h = a;
    j = $(Handlebars.templates.sideBar({categories:Kharma.l10n.sideBar.categories, hotDeals:Kharma.l10n.sideBar.hotDeals, latest:Kharma.l10n.sideBar.latest, topFree:Kharma.l10n.sideBar.topFree, topGrossing:Kharma.l10n.sideBar.topGrossing, topPaid:Kharma.l10n.sideBar.topPaid}));
    $("#sidebar").append(j);
    o();
    q(e, b);
    $(".loadarea").each(function(a, b) {
      $.contains($("#mainContent")[0], $(b)[0]) && f.push(new Kharma.UI.Loader($(b), Kharma.l10n.page.loadingPage))
    })
  }, loadTopList:y, miniLink:function(a, b) {
    for(var c in a.price) {
      a.price.hasOwnProperty(c) && (a.price[c] = parseFloat(a.price[c]))
    }
    c = Handlebars.templates.packageSmallLink({level11_price:(b && b.level11 || Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member) && a.price_level11member, assetkits_price:Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitspromember && a.price_assetkitspromember || Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitsplusmember && a.price_assetkitsplusmember, 
    result:a});
    if(a && a.flags && a.flags.override_url && Kharma.unityEditor.isUnity4x()) {
      $(".override_url").on("click", {url:a.url}, function(a) {
        var b = Kharma.utils.windowWrapper.location.getHash(), c = Kharma.utils.windowWrapper.location.getHref(), b = c.indexOf(b) > 0 ? c.substr(0, c.indexOf(b)) : c;
        a.stopPropagation();
        a.preventDefault();
        Kharma.unityEditor.openBrowser(b + a.data.url, function(a) {
          if(a) {
            throw a.message;
          }
        })
      })
    }
    return c
  }, miniList:function(a) {
    return Handlebars.templates.listSmallLink({result:a})
  }, onResize:function() {
    A();
    Kharma.helper.updateLanguageStatus()
  }, setBackground:function(a) {
    var b, c = a.callback, d = a.element, e = a.link, f, g = a.smallBackgroundUrl;
    d.find(".icon-bg").length === 0 && (b = e ? $("<a href='" + e + "'class='background livelink'></a>") : $("<div class='background'></div>"), d.append(b), g && (f = e ? $("<a href='" + e + "' class='smallBackground livelink'></a>") : $("<div class='smallBackground'></div>"), d.append(f)));
    b.css("background-image", "url('" + a.backgroundUrl + "')");
    g && f.css("background-image", "url('" + g + "')");
    if(c) {
      d.on("click", function(a) {
        var b = Kharma.utils.windowWrapper.location.getHash(), d = Kharma.utils.windowWrapper.location.getHref(), b = d.indexOf(b) > 0 ? d.substr(0, d.indexOf(b)) : d;
        a.stopPropagation();
        a.preventDefault();
        c(b + e, function(a) {
          if(a) {
            throw a.message;
          }
        })
      })
    }
  }, setExternalLinks:function(a) {
    a = $("." + a + " a");
    $.each(a, function(a, b) {
      $(b).attr("target", "_blank").addClass("externallink").off().on("click", function() {
        Kharma.ga.event({eventCategory:"Outbound", nonInteraction:!0, eventAction:"Link", eventLabel:$(this).attr("href")})
      })
    })
  }, setLoaded:B, setRequestUrl:function(a) {
    a && (l = a)
  }, setPageTitle:function(a) {
    if(!Kharma.unityEditor.isEditor()) {
      document.title = a && a !== "" ? a + " - " + Kharma.l10n.page.title : Kharma.l10n.page.title
    }
  }, setTemplate:function(a) {
    var b = $("#mainContent");
    b.find("select").selectBox("destroy");
    b.html(a);
    b.removeAttr("class");
    (a = b.children().first().attr("id")) && a !== "" && b.addClass("main-" + a);
    f = [];
    $(".loadarea").each(function(a, b) {
      $.contains($("#mainContent")[0], $(b)[0]) && f.push(new Kharma.UI.Loader($(b), Kharma.l10n.page.loadingPage))
    })
  }, type:e, versionRequired:E}
};
Kharma.AddressHelper = function() {
  var g = {}, h, a, d, c, e, b, f, i;
  h = function(b, c, d, e) {
    var f = !1, g = $('<select id="country" name="country">'), i;
    e && g.attr("disabled", "disabled");
    $.each(b, function(a, b) {
      i = $('<option value="' + b.value + '">' + b.name + "</option>");
      b.value === c && (i.attr("selected", "selected"), f = !0);
      g.append(i)
    });
    f || g.append($('<option value="' + (c || "") + '" selected="selected">' + (d || "N/A") + "</option>"));
    a(g)
  };
  d = function() {
    var a = $("select#state"), b = a.parent().find("a.selectBox"), c = b.data("selectBoxOptions");
    a.length > 0 && (c && c.remove(), b.remove(), a.parent().find(".callout").css("opacity", "0"))
  };
  e = function(a) {
    Kharma.io.get({uri:"templates/states.json", onSuccess:function(b) {
      i(b, a)
    }})
  };
  c = function(a) {
    Kharma.io.get({uri:"/api/account/ip-country.json", onSuccess:function(b) {
      b.json && h(a, b.json.country)
    }})
  };
  a = function(a) {
    $("#country").length > 0 && a !== null && a.find("option").length > 0 && (a.replaceAll("#country"), $(".country").each(function(a, b) {
      var c = $(b).find("select");
      c.on("change", function() {
        e($(this).val());
        f()
      });
      c.change();
      c.selectBox();
      $(document).on("scroll", function() {
        c.selectBox("hide")
      })
    }))
  };
  f = function() {
    var a = $("#country").val(), b = $(".state"), c = $(".zip");
    $("#country").length > 0 || (a === "us" || a === "ca" || a === "cn" ? b.addClass("req") : b.removeClass("req"), g[a] ? c.addClass("req") : c.removeClass("req"))
  };
  b = function(a) {
    a && (a.addClass("problem"), a.is("select") && a.parent().find(".selectBox").addClass("problem"))
  };
  i = function(a, b) {
    var c, e = a.json.states[b], g;
    d();
    e ? (c = $('<select id="state" name="state"/>'), c.append($('<option value="">' + Kharma.l10n.address.state + "</option>")), $.each(e, function(a, b) {
      g = $('<option value="' + b.value + '">' + b.name + "</option>");
      b.value === $("#state").val() && g.attr("selected", "selected");
      c.append(g)
    }), c.replaceAll("#state"), $(".state").css("display", "block"), c.selectBox(), c.parent().find(".selectBox").on("click", function() {
      $(this).removeClass("problem");
      $(this).parent().find(".callout").css("opacity", "0")
    })) : ($('<input type="text" class="precallout" name="state" id="state" placeholder=""/>').replaceAll("#state"), $(".state").css("display", "none"));
    f()
  };
  g = Kharma.l10n && {us:[Kharma.l10n.address.title.invalidZipCode, Kharma.l10n.address.message.invalidUSZipCode, /^\d{5}(-\d{4}|-\d{6})?$/], au:[Kharma.l10n.address.title.invalidPostcode, Kharma.l10n.address.message.invalidAUPostcode, /^\d{4}$/], be:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidBEPostalCode, /^(BE-)?[1-9]\d{3}$/i], dk:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidDKPostalCode, /^(DK-)?\d{4}$/i], de:[Kharma.l10n.address.title.invalidPostalCode, 
  Kharma.l10n.address.message.invalidDEPostalCode, /^(DE-)?\d{5}$/i], at:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidATPostalCode, /^(AT-)?\d{4}$/i], it:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidITPostalCode, /^(IT-)?\d{5}$/i], gb:[Kharma.l10n.address.title.invalidPostalCode, Kharma.l10n.address.message.invalidGBPostalCode, /^[A-Z]{1,2}\d[A-Z0-9]?(\s+\d[ABD-HJLNP-UW-Z]{2})?$/i], ca:[Kharma.l10n.address.title.invalidPostalCode, 
  Kharma.l10n.address.message.invalidCAPostalCode, /^[ABCEGHJKLMNPRSTVXY]\d[A-Z]\s*\d[A-Z]\d$/i]};
  return{applyCountries:a, editAddress:function(a) {
    var b = Kharma.login.user && Kharma.login.user.id;
    Kharma.io.get({uri:"/api/user/overview/" + b + ".json", onSuccess:function(c) {
      c.json.address ? c.json.address.id = b : c.json.address = {id:b};
      new Kharma.AddressDialog({callback:a, addressData:c.json.address})
    }})
  }, getCountries:function(a, b, d) {
    Kharma.io.get({uri:"templates/countries.json", cacheExpiryPeriod:Kharma.Time.DAY, onSuccess:function(e) {
      if(e.json) {
        e = e.json.countries, a ? h(e, a, b, d) : c(e)
      }
    }})
  }, getStates:e, markProblem:b, problemZip:function() {
    $("#message").length === 0 && new Kharma.TimedError({message:g[$("#country").val()], timeout:7});
    b($("#zip"))
  }, problemPhone:function() {
    $("#message").length === 0 && new Kharma.TimedError({message:[Kharma.l10n.address.title.invalidPhoneNumber, Kharma.l10n.address.message.invalidPhoneNumber], timeout:7});
    b($("#phone"))
  }, problemVAT:function(a) {
    $("#message").length === 0 && new Kharma.TimedError({message:a ? [Kharma.l10n.address.title.invalidVAT, a] : Kharma.errorsHelper.errors.invalidVAT, timeout:7});
    b($("#vat_no"))
  }, setReqFields:f, zipCodes:g}
};
Kharma.EditorHelper = function() {
  var g;
  g = function(g, a) {
    a && a.remove();
    g.remove()
  };
  return{hide:function(h, a) {
    Kharma.unityEditor.isEditor() ? g(h, a) : h.fadeOut("fast", function() {
      g(h, a)
    });
    $("body").css("-webkit-overflow-scrolling", "touch")
  }, tabInEditor:function(g, a) {
    var d = g.val(), c = d.indexOf("\t");
    c !== -1 && (g.val(d.substr(0, c)), setTimeout(function() {
      a.focus()
    }, 0))
  }, show:function(g) {
    Kharma.unityEditor.isEditor() ? g.show() : g.fadeIn("fast");
    $("body").css("-webkit-overflow-scrolling", "auto")
  }}
};
Kharma.editorHelper = new Kharma.EditorHelper;
Kharma.ErrorsHelper = function() {
  var g = {}, h = {}, g = Kharma.l10n && {template:[Kharma.l10n.error.pageTemplate, Kharma.l10n.error.pageTemplateMessage], notFound:[Kharma.l10n.error.pageNotExisting, Kharma.l10n.error.pageNotExistingMessage], parse:[Kharma.l10n.error.parsingContent, Kharma.l10n.error.parsingContentMessage], internalServerError:[Kharma.l10n.error.internalServerError, Kharma.l10n.error.internalServerErrorMessage], login:[Kharma.l10n.error.loggingIn, Kharma.l10n.error.loggingInMessage], loginInfo:[Kharma.l10n.error.missingInformation, 
  Kharma.l10n.error.missingInformationMessage], loginPasswordMismatch:[Kharma.l10n.error.passwordMismatch, Kharma.l10n.error.passwordMismatchMessage], loginUnknown:[Kharma.l10n.error.loginUnknown, ""], notLoggedIn:[Kharma.l10n.error.notLoggedIn, Kharma.l10n.error.notLoggedInMessage], loginPasswordWrong:[Kharma.l10n.error.wrongPassword, Kharma.l10n.error.wrongPasswordMessage], activation:[Kharma.l10n.error.activation, Kharma.l10n.error.activationMessage], addressRequired:[Kharma.l10n.error.addressRequired, 
  Kharma.l10n.error.addressRequiredMessage], invalidVAT:[Kharma.l10n.address.title.invalidVAT, Kharma.l10n.error.invalidVATMessage], unknown:[Kharma.l10n.error.unknown, Kharma.l10n.error.unknownMessage], acceptTerms:[Kharma.l10n.error.acceptTerms, Kharma.l10n.error.acceptTermsMessage]}, h = Kharma.l10n && {BadCredentials:Kharma.l10n.error.incorrectCredentials, AccountDisabled:Kharma.l10n.error.accountDisabled, UserNotActivated:Kharma.l10n.error.activation + ". " + Kharma.l10n.error.activationMessage, 
  AuthAccountExists:Kharma.l10n.user.alreadyExists};
  return{errors:g, exceptions:h}
};
Handlebars.registerHelper("ifCond", function(g, h, a, d) {
  switch(h) {
    case "===":
      return g === a ? d.fn(this) : d.inverse(this);
    case "!==":
      return g !== a ? d.fn(this) : d.inverse(this);
    case "<":
      return g < a ? d.fn(this) : d.inverse(this);
    case "<=":
      return g <= a ? d.fn(this) : d.inverse(this);
    case ">":
      return g > a ? d.fn(this) : d.inverse(this);
    case ">=":
      return g >= a ? d.fn(this) : d.inverse(this);
    case "&&":
      return g && a ? d.fn(this) : d.inverse(this);
    case "||":
      return g || a ? d.fn(this) : d.inverse(this);
    default:
      return d.inverse(this)
  }
});
Handlebars.registerHelper("debug", function(g) {
  console.log("Current Context", this);
  g && console.log("Value", g)
});
Handlebars.registerHelper("ratingUI", function(g, h, a, d, c) {
  return(a ? (new Kharma.UI.Rating({count:g, value:h, classes:"inline", packageId:c, showCount:!0, includeMicroData:d})).render() : (new Kharma.UI.Rating({count:g, packageId:c, value:h})).render())[0].outerHTML
});
Handlebars.registerHelper("formattedPrice", function(g) {
  return Kharma.helper.getFormattedPrice(g)
});
Handlebars.registerHelper("formattedPriceNoText", function(g) {
  return Kharma.helper.getFormattedPriceNoText(g)
});
Handlebars.registerHelper("formattedDate", function(g) {
  for(var h = (new Date).getTime(), a = new Date(g.replace(/-/g, "/").replace("T", " ")), d = new Date(a.getTime() - a.getTimezoneOffset() * 6E4), a = 0, c = [[60, Kharma.l10n.time.second, Kharma.l10n.time.seconds, 60], [3600, Kharma.l10n.time.minute, Kharma.l10n.time.minutes, 60], [86400, Kharma.l10n.time.hour, Kharma.l10n.time.hours, 3600], [604800, Kharma.l10n.time.day, Kharma.l10n.time.days, 86400], [2419200, Kharma.l10n.time.week, Kharma.l10n.time.weeks, 604800], [29030400, Kharma.l10n.time.month, 
  Kharma.l10n.time.months, 2419200], [290304E4, Kharma.l10n.time.year, Kharma.l10n.time.years, 29030400]], d = (h - d.getTime()) / 1E3, h = c[a++];h;) {
    if(h && d < h[0]) {
      return g = Math.floor(d / h[3]), a = g > 0 ? g > 1 ? h[2] : h[1] : Kharma.l10n.time.moments, Kharma.l10n.supplant(a, {time:g})
    }
    h = c[a++]
  }
  return g
});
Handlebars.registerHelper("formatDate", function(g) {
  g = new Date(g.replace(/-/g, "/").replace("T", " "));
  return g.getDate() + " " + Kharma.helper.getMonths()[g.getMonth()] + " " + g.getFullYear()
});
Handlebars.registerHelper("adminFormattedDate", function() {
  return this.status_updated_at && this.status_updated_at.split("T")[0]
});
Handlebars.registerHelper("adminFormattedTime", function() {
  return this.status_updated_at && this.status_updated_at.split("T")[1].substring(0, 5)
});
Handlebars.registerHelper("adminFormattedPublisherEmail", function() {
  return"mailto:" + encodeURIComponent(this.publisher.email) + "?subject=" + encodeURIComponent(this.package_name)
});
Handlebars.registerHelper("salePercentage", function(g, h) {
  return Math.round((1 - g.USD / h.USD) * 100)
});
Handlebars.registerHelper("minimumVersion", function(g) {
  return Kharma.l10n.supplant(Kharma.l10n.page.minimumUnityVersion, {minimumVersion:g.substr(0, g.lastIndexOf(".") + 2)})
});
Handlebars.registerHelper("helpfulReview", function(g) {
  return Kharma.l10n.supplant(Kharma.l10n.review.helpful, {score:g.score, count:g.count})
});
Handlebars.registerHelper("canReply", function(g, h, a) {
  if(h.can_reply && !g) {
    return a.fn(this)
  }
});
Handlebars.registerHelper("isEditable", function(g, h, a) {
  if(g.editable || h.can_reply && !g.replies) {
    return a.fn(this)
  }
});
Handlebars.registerHelper("isAdmin", function(g, h) {
  if(Kharma.login.isAdmin || g) {
    return h.fn(this)
  }
});
Handlebars.registerHelper("reviewHelpful", function(g, h) {
  if(Kharma.login.user && !Kharma.login.user.is_anonymous && this.user.id !== Kharma.login.user.id) {
    return h.fn(this)
  }
});
Handlebars.registerHelper("urlfyTextHelper", function() {
  var g, h, a, d, c, e;
  d = this.full.replace(/[<>]/g, function(a) {
    return a === "<" ? "&lt;" : "&gt;"
  });
  if(e = d.match(/https?:\/\/[^\s\.]+\.[^\s]{2,}/gi)) {
    h = 0;
    for(a = e.length;h < a;h++) {
      g = d.indexOf(e[h]), c = d.indexOf(e[h]) + e[h].length, d = d.substr(0, g) + "<a href='" + d.substr(g, c - g) + "' target='blank'>" + d.substr(g, c - g) + "</a>" + d.substring(c)
    }
  }
  return d.replace(/(\r\n|\r|\n)/g, "<br />")
});
Handlebars.registerHelper("formattedBio", function(g) {
  return g && g !== "" ? g.replace(/[<>]/g, function(g) {
    return g === "<" ? "&lt;" : "&gt;"
  }).replace(/(\r\n|\r|\n)/g, "<br />") : Kharma.l10n.user.noBio
});
Handlebars.registerHelper("method", function() {
  return this.action.toUpperCase()
});
Handlebars.registerHelper("negativeAmountClass", function() {
  return this.amount.charAt(0) === "-" ? "negative" : ""
});
Handlebars.registerHelper("paymentRowClass", function(g, h) {
  var a = h++ % 2 === 0 ? "grey" : "";
  if(g.transactionsCredits && h === g.transactionsCredits.length || g.transactions && h === g.transactions.length) {
    a += " last"
  }
  return a
});
Handlebars.registerHelper("action", function() {
  return this.method === "Credit Card" ? Kharma.l10n.purchase.creditCard.toUpperCase() : Kharma.l10n.purchase.payPal
});
Handlebars.registerHelper("qnty", function() {
  return this.quantity > 1 ? this.quantity + "x" : ""
});
Handlebars.registerHelper("assetHierarchyIcon", function() {
  var g = null, g = this.label;
  this.folder ? g = "folder" : (g = g.toLowerCase(), g = g.split("."), g = g[g.length - 1], g === "asset" && this.guid.substring(0, 16) === "0000000000000000" && (g = "projectsettings"));
  (g = Kharma.Icons[g]) || (g = "icons/default.png");
  return"/images/" + g
});
Handlebars.registerHelper("padding", function(g) {
  return g * 20 + "px"
});
Handlebars.registerHelper("displayGroup", function(g, h, a) {
  var d, c = a[g], a = a[g - 1], e;
  if(h === "title-first" || !h) {
    if(g === 0 || c.name.toLowerCase()[0] !== a.name.toLowerCase()[0]) {
      e = c.name[0] && c.name[0].toUpperCase()
    }
  }else {
    d = c.category.name;
    var b = g > 0 && a.category.name, f = d.indexOf("/") !== -1 ? d.substring(0, d.indexOf("/")) : d;
    if(h === "category") {
      if(g === 0 || f !== (b.indexOf("/") !== -1 ? b.substring(0, b.indexOf("/")) : b)) {
        e = f
      }
    }else {
      if(h === "category-full") {
        if(g === 0 || d !== b) {
          e = d
        }
      }else {
        if(h === "publisher") {
          if(d = c.publisher.name, g === 0 || d !== a.publisher.name) {
            e = d
          }
        }else {
          if(h === "purchase-date-id") {
            if(c = c.purchased_at || c.last_downloaded_at, d = a && (a.purchased_at || a.last_downloaded_at), a = c && new Date(c.replace(/-/g, "/").replace("T", " ")), h = d && new Date(d.replace(/-/g, "/").replace("T", " ")), a && isNaN(a.valueOf()) && (a = c && new Date(c)), h && isNaN(h.valueOf()) && (h = d && new Date(d)), c = a && c !== "0" ? Kharma.helper.getMonths()[a.getMonth()] + " " + a.getFullYear() : Kharma.l10n.pkg.unknownDate, d = h && d !== "0" ? Kharma.helper.getMonths()[h.getMonth()] + 
            " " + h.getFullYear() : Kharma.l10n.pkg.unknownDate, g === 0 || c !== d) {
              e = c
            }
          }else {
            if(h === "publish-date-id") {
              if(h = c.published_at && new Date(c.published_at.replace(/-/g, "/").replace("T", " ")), d = a && a.published_at && new Date(a.published_at.replace(/-/g, "/").replace("T", " ")), h && isNaN(h.valueOf()) && (h = c.published_at && new Date(c.published_at)), d && isNaN(d.valueOf()) && (d = a.published_at && new Date(a.published_at)), h = h && Kharma.helper.getMonths()[h.getMonth()] + " " + h.getFullYear(), d = d && Kharma.helper.getMonths()[d.getMonth()] + " " + d.getFullYear(), g === 0 || 
              h !== d) {
                e = h
              }
            }else {
              if(h === "rating") {
                if(g === 0 || c.user_rating !== a.user_rating) {
                  e = (new Kharma.UI.Rating({count:1, value:c.user_rating, classes:"hide-unlit-stars inline"})).render().get(0).outerHTML
                }
              }else {
                if(h === "packagestatus" && (c = c.can_update ? Kharma.l10n.pkg.update : c.local_path ? Kharma.l10n.pkg.importPkg : c.can_download ? Kharma.l10n.button.download : "", a = a && (a.can_update ? Kharma.l10n.pkg.update : a.local_path ? Kharma.l10n.pkg.importPkg : a.can_download ? Kharma.l10n.button.download : ""), g === 0 || c !== a)) {
                  e = c
                }
              }
            }
          }
        }
      }
    }
  }
  if(e) {
    return'<div class="group">' + e + '<span class="collapse" title="Collapse">-</span></div>'
  }
});
Handlebars.registerHelper("priceUpgradeHelper", function(g) {
  return g[this.id]
});
Handlebars.registerHelper("formatUpgradables", function(g) {
  g += !this.status || this.status === "deprecated" ? '<a href="#!/' + this.link.type + "/" + this.link.id + '">' + this.title + " </a>" + this.version : this.title + " " + this.version;
  return g
});
Handlebars.registerHelper("getMemoTypeDescription", function(g) {
  g = Kharma.l10n.user.memo.subscriptions.descriptions[g] || g;
  return g.charAt(0).toLowerCase() + g.slice(1)
});
Handlebars.registerHelper("listStatus", function(g) {
  return Kharma.l10n.lists[g]
});
Handlebars.registerHelper("createListDetails", function(g) {
  return Handlebars.templates.listDetails({l10nButton:Kharma.l10n.button, l10nLists:Kharma.l10n.lists, list:g, url:Kharma.utils.windowWrapper.location.getOrigin() + Kharma.utils.windowWrapper.location.getPathName()})
});
Handlebars.registerHelper("isSpecialTag", function(g) {
  return typeof g === "string" && g.match(/^#[A-Z_]+$/) ? "" : '<img src="../images/icons/close_blue.png" class="tag-image">'
});
Handlebars.registerHelper("listIcons", function(g, h) {
  for(var a, d = "", c = 0;c < g;c++) {
    h.data.root.result.icons[c] ? (a = 'background-image:url("' + h.data.root.result.icons[c] + '");', d += h.fn("<div class='list-microimage list-icon-" + c + "' style='" + a + "');'></div>")) : d += h.fn("<div class='list-microimage list-icon-" + c + "' style='background-color: rgb(204, 204, 204);');'></div>")
  }
  return d
});
Kharma.Helper = function() {
  var g = {EUR:"\u20ac", JPY:"\u00a5", USD:"$"}, h, a, d, c;
  h = function(a) {
    var b = Kharma.login.user, a = a[b.currency], c = b.rounding, a = parseFloat(a);
    if(a === 0) {
      return a
    }
    a += Math.round(a * parseInt(b.vat_percent, 10) / 100 / parseFloat(c)) * parseFloat(c);
    a = c < 1 && parseInt(a, 10) !== a ? a.toFixed(2) : a.toFixed();
    return a.toLocaleString(b.language_code)
  };
  a = function() {
    return g[Kharma.login.user.currency]
  };
  c = function(a) {
    return(a = a.match(/https?:\/\/\w+-(\w+)/)) ? a[1].toUpperCase() : "PROD"
  };
  d = function() {
    return[{label:Kharma.l10n && Kharma.l10n.language.languages["en-US"], language:"en-US", url:"en"}, {label:Kharma.l10n && Kharma.l10n.language.languages["ko-KR"], language:"ko-KR", url:"kr"}, {label:Kharma.l10n && Kharma.l10n.language.languages["ja-JP"], language:"ja-JP", url:"jp"}, {label:Kharma.l10n && Kharma.l10n.language.languages["zh-CN"], language:"zh-CN", url:"cn"}]
  };
  return{categories:{}, formatPrice:h, getCurrency:a, getFormattedPrice:function(c) {
    if(!c) {
      return Kharma.l10n.page.free
    }
    c = h(c);
    if(!c) {
      return Kharma.l10n.page.free
    }
    return a() + c
  }, getFormattedPriceNoText:function(c) {
    c = c || 0;
    return a() + h(c)
  }, getMinimumPrice:function(a, b) {
    if(!b || Number(a.USD) < Number(b.USD)) {
      return a
    }
    return b
  }, getLanguages:d, getMonths:function() {
    return[Kharma.l10n.months.january, Kharma.l10n.months.february, Kharma.l10n.months.march, Kharma.l10n.months.april, Kharma.l10n.months.may, Kharma.l10n.months.june, Kharma.l10n.months.july, Kharma.l10n.months.august, Kharma.l10n.months.september, Kharma.l10n.months.october, Kharma.l10n.months.november, Kharma.l10n.months.december]
  }, getURLFlavour:c, getCurrentURLFlavour:function() {
    return c(document.location.href)
  }, loadLanguage:function(a, b) {
    var c = Kharma.utils.windowWrapper.location.getPathName(), c = c.split("/").length > 2 ? /\w{2}/.exec(c)[0] : "", g = d(), h, j;
    h = 0;
    for(j = g.length;h < j;h++) {
      if(g[h].url === c) {
        a = g[h].language;
        break
      }
    }
    $.getJSON("/js/kharma/l10n/" + a + ".json", function(a) {
      Kharma.l10n = a || {};
      Kharma.l10n.supplant = function(a, b) {
        return a && a.replace(/{([^{}]*)}/g, function(a, c) {
          var d = b[c];
          return typeof d === "string" || typeof d === "number" ? d : a
        })
      };
      b && b()
    })
  }, publishers:{}, updateLanguageStatus:function() {
    var a = d(), b = Kharma.login && Kharma.login.user ? Kharma.login.user.language_code : "en-US", c = $(".language-status");
    if(Kharma.utils.windowWrapper.innerWidth() > 768) {
      c.text(Kharma.l10n.language.language + ":" + Kharma.l10n.language.languages[b])
    }else {
      for(var g = 0, h = a.length;g < h;g++) {
        if(a[g].language === b) {
          c.text(a[g].url.toUpperCase());
          break
        }
      }
    }
  }, validatePassword:function(a) {
    var b = $(".password-message"), c = $(".login-submit"), a = $(a.target), d = a.val(), g = d.length;
    g === 0 ? (a.removeClass("valid"), a.removeClass("invalid"), b.text("")) : g > 0 && g < 8 || !/^((?=.*[a-z])(?=.*[A-Z])((?=.*\d))).+$/.test(d) ? (a.removeClass("valid"), a.addClass("invalid"), c.attr("disabled", "disabled"), b.text(Kharma.l10n.error.passwordValidation)) : (a.removeClass("invalid"), a.addClass("valid"), c.removeAttr("disabled"), b.text(""))
  }, escapeHTMLAll:function(a) {
    return a ? a.replace(/[&<>"'`!@$%()=+{}\[\] \t\r]/g, function(a) {
      return"&#" + a.charCodeAt(0) + ";"
    }) : a
  }, escapeHTML:function(a) {
    return a ? a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : ""
  }}
};
Kharma.helper = new Kharma.Helper;
Kharma.LayoutHelper = function() {
  (function() {
    var g = $("body"), h = $("#mainContent");
    Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated() ? (g.removeClass("skin0"), g.removeClass("skin1"), Kharma.unityEditor.getSkinIndex(function(a, d) {
      if(a) {
        throw a.message;
      }else {
        g.addClass("unity-editor skin" + d)
      }
    }), g.css({"-webkit-user-select":"none", "-webkit-user-drag":"none"})) : g.addClass("external-browser");
    $(document).on("click", ".livelink", function(a) {
      var d = $(this);
      a.stopPropagation();
      this.tagName !== "A" && $.address.value(d.data("template") + "/" + d.data("link"))
    });
    h.on(Kharma.utils.events.onPageLoadStart, function() {
      var a = $("#pageload");
      Kharma.toolbar.loader = a && new Kharma.UI.Loader(a, Kharma.l10n.page.contacting);
      Kharma.utils.windowWrapper.onResize()
    });
    h.on(Kharma.utils.events.onPageLoadComplete, function() {
      Kharma.toolbar.loader && Kharma.toolbar.loader.clear()
    })
  })()
};
Kharma.SaleHelper = function() {
  var g, h, a, d, c;
  c = function() {
    var e, b;
    e = new Date;
    var f = h.getTime() - e.getTime();
    b = h.getTime() - e.getTime();
    var i = (b - b % 36E5) / 36E5;
    b -= i * 36E5;
    e = (b - b % 6E4) / 6E4;
    b -= e * 6E4;
    b /= 1E3;
    b -= b % 1;
    g.text(a + i + (i === 1 ? " " + Kharma.l10n.time.hour : " " + Kharma.l10n.time.hours) + " " + e + (e === 1 ? " " + Kharma.l10n.time.minute : " " + Kharma.l10n.time.minutes) + " " + b + (b === 1 ? " " + Kharma.l10n.time.second : " " + Kharma.l10n.time.seconds));
    f > 0 ? d = setTimeout(c, 500) : Kharma.utils.windowWrapper.location.reload()
  };
  return{startCountdown:function(e, b, f) {
    e = e || 0;
    h = new Date;
    g = b;
    a = f;
    h.setTime(h.getTime() + e * 1E3);
    d || c()
  }}
};
Kharma.saleHelper = new Kharma.SaleHelper;
Kharma.ExpressCheckoutDialog = function(g) {
  var h, a, d;
  d = function() {
    h.remove();
    a.remove()
  };
  (function() {
    h = $(Handlebars.templates.expressCheckoutDialog({accountPassword:Kharma.l10n.purchase.accountPassword, allowPopups:Kharma.l10n.purchase.allowPopups, cancel:Kharma.l10n.button.cancel, chargeCreditCard:Kharma.l10n.purchase.chargeCreditCard, data:g.json, goToCart:Kharma.l10n.purchase.addToShoppingCart, header:Kharma.l10n.purchase.expressCheckout.assetStoreExpressCheckout, expressPurchasePayment:Kharma.l10n.purchase.expressCheckout.purchasePayment, pkg:Kharma.l10n.pkg.pkg, purchase:Kharma.l10n.purchase.purchase, 
    vatLabel:Kharma.l10n.cart.vat}));
    a = $("<div class='modalblocker'></div>");
    a.on("click", function(a) {
      a.stopPropagation();
      d()
    });
    $("#assetStore").append(a);
    $("#assetStore").append(h);
    h.find(".purchase-button").on("click", function(a) {
      var e = Kharma.ga.paymentInfo(), b;
      a.stopPropagation();
      a.preventDefault();
      e.processor = "Express";
      e.account_password = $(".express-checkout-dialog .account-password input").val();
      e.express_processor = "Genesis";
      b = Kharma.login.user.xunitysession + "/" + Date.now();
      e.payment_hook = b;
      a = h.find(".status");
      a.show();
      a.removeClass("error");
      a.text(Kharma.l10n.purchase.sendingPayment);
      h.find(".cancel-button").attr("disabled", "disabled");
      h.find(".go-to-cart").attr("disabled", "disabled");
      h.find(".purchase-button").attr("disabled", "disabled");
      Kharma.io.post({uri:"/api/purchase/create_payment.json", parameters:e, onSuccess:function(a) {
        var c;
        if(!document.purchaseDialog) {
          document.purchaseDialog = new Kharma.PurchaseDialog(!0)
        }
        a.json && a.json.status === "ok" ? (document.purchaseDialog.onCreatePayment(a, b), d()) : (h.find(".cancel-button").removeAttr("disabled"), h.find(".go-to-cart").removeAttr("disabled"), h.find(".purchase-button").removeAttr("disabled"), c = h.find(".status"), c.addClass("error"), document.purchaseDialog.showCreditsPurchaseError(c, a.json.status))
      }})
    });
    h.find(".cancel-button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      Kharma.cart.removeItem(Kharma.cart.items[0]);
      Kharma.toolbar.updateButtons();
      d()
    });
    h.find(".go-to-cart").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      d();
      Kharma.cart.showCart()
    });
    a.show();
    Kharma.editorHelper.show(h)
  })()
};
Kharma.OverviewDialog = function(g) {
  var h, a = "", d = "", c, e, b, f = g || {}, i, l, j, k;
  j = function() {
    var e = $("<button>" + Kharma.l10n.button.cancel + "</button>"), f = $("<div class='form'></div>"), g = $("<button>&nbsp;" + Kharma.l10n.button.save + "&nbsp;</button>");
    b.append($("<h1>" + Kharma.l10n.user.biographyFor + Kharma.helper.escapeHTML(d) + "</h1>"));
    b.append(f);
    h = $("<textarea class='input' placeholder='" + Kharma.l10n.user.biography + "'>" + a + "</textarea>");
    f.append(h);
    b.append(e);
    b.append(g);
    c.show();
    Kharma.editorHelper.show(b);
    h.focus();
    c.on("click", function(a) {
      a.stopPropagation();
      l()
    });
    e.on("click", function() {
      l()
    });
    g.on("click", function() {
      k()
    })
  };
  l = function() {
    Kharma.editorHelper.hide(b, c)
  };
  k = function() {
    e({bio:h.val(), user:i});
    l()
  };
  (function() {
    i = parseInt(f.userID, 10) || 0;
    Kharma.ga.view({name:"account", id:i, title:i ? "User Account: Edit Biography" : "401 Unauthorized", page:"/account/" + i + "/profile/bio/edit", dimension8:"User Account"});
    var g = $("#assetStore");
    e = f.callback;
    c = $("<div class='modalblocker'></div>");
    b = $("<div class='dialog messageform biography'></div>");
    g.append(c);
    g.append(b);
    Kharma.io.get({uri:"/api/user/overview/" + i + ".json", onSuccess:function(b) {
      a = b.json.bio;
      d = b.json.name;
      j()
    }, onFailure:function() {
      l()
    }})
  })()
};
Kharma.AddressDialog = function(g) {
  var h, a, d, c, e, g = g || {}, b, f, i, l, j, k, n;
  b = function() {
    a.on("click", function(a) {
      a.stopPropagation();
      f()
    });
    Kharma.unityEditor.isEditor() && ($("#firstname").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#lastname"))
    }), $("#lastname").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#organization"))
    }), $("#organization").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#address"))
    }), $("#address").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#address2"))
    }), $("#address2").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#zip"))
    }), $("#zip").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#city"))
    }), $("#city").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#phone"))
    }), $("#phone").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#vat_no"))
    }), $("#vat_no").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#btnSaveAddress"))
    }), $("#vat_no").on("change", function() {
      $("#btnSaveAddress").click()
    }))
  };
  f = function(b) {
    $("#addressform select").selectBox("destroy");
    Kharma.editorHelper.hide(c, a);
    d && d(b)
  };
  i = function(a) {
    $("#firstname").val(!a.firstname ? "" : a.firstname).focus();
    $("#lastname").val(!a.lastname ? "" : a.lastname);
    $("#organization").val(!a.organization ? "" : a.organization);
    $("#address").val(!a.address ? "" : a.address);
    $("#address2").val(!a.address2 ? "" : a.address2);
    $("#zip").val(!a.zip ? "" : a.zip);
    $("#city").val(!a.city ? "" : a.city);
    $("#state").val(!a.state ? "" : a.state);
    $("#phone").val(!a.phone ? "" : a.phone);
    $("#vat_no").val(!a.vat_no ? "" : a.vat_no);
    $("#country").val(!a.country ? "" : a.country)
  };
  l = function() {
    var a = $("#country").val(), b, c = ["firstname", "lastname", "address", "zip", "city", "country"];
    $("#message").length === 0 && new Kharma.TimedError({message:Kharma.errorsHelper.errors.loginInfo, timeout:7});
    (a === "us" || a === "ca" || a === "cn") && c.push("state");
    for(b in c) {
      c.hasOwnProperty(b) && (a = $("#" + c[b])) && a.val() === "" && Kharma.addressHelper.markProblem(a)
    }
  };
  j = function() {
    var b = $("<button>" + Kharma.l10n.button.cancel + "</button>"), d = $("<button id='btnSaveAddress'>&nbsp;" + Kharma.l10n.button.save + "&nbsp;</button>");
    c.append(b);
    c.append(d);
    a.show();
    Kharma.editorHelper.show(c);
    $(c.find("#firstname")).focus();
    b.on("click", function() {
      f()
    });
    d.on("click", function() {
      k()
    });
    e && Kharma.addressHelper.markProblem($(e))
  };
  k = function() {
    var a, b, c, d, e = $("#vat_no");
    e.val() !== "" ? (a = $('<div class="adrvatcheck">' + Kharma.l10n.address.vatChecking + "</div>"), e.after(a), c = !1, b = d = null, Kharma.io.get({uri:"/api/user/check-vat.json", parameters:{vat_no:e.val(), country:$("#country").val()}, onSuccess:function(f) {
      c = f.json.valid;
      b = f.json.message;
      if(f.json.vat_no && f.json.vat_no !== "") {
        d = f.json.vat_no
      }
      a.remove();
      d && e.val(d);
      c ? n() : Kharma.addressHelper.problemVAT(b)
    }})) : n()
  };
  n = function() {
    var a = {firstname:$("#firstname").val(), lastname:$("#lastname").val(), organization:$("#organization").val(), address:$("#address").val(), address2:$("#address2").val(), zip:$("#zip").val(), city:$("#city").val(), state:$("#state").val(), country:$("#country").val(), phone:$("#phone").val(), vat_no:$("#vat_no").val()}, b = {firstname:$("#firstname"), lastname:$("#lastname"), address:$("#address"), zip:$("#zip"), city:$("#city"), state:$("#state"), country:$("#country")};
    $.each(b, function(a, b) {
      b.val() === "" ? b.addClass("problem") : b.removeClass("problem")
    });
    a.address === "" || a.firstname === "" || a.lastname === "" || a.city === "" || a.country === "" || a.state === "" && (a.country === "us" || a.country === "ca" || a.country === "cn") || a.zip === "" ? l() : a.phone !== "" && !/^[0-9\-\+\ ]+$/.test(a.phone) ? Kharma.addressHelper.problemPhone() : Kharma.io.post({uri:"/api/user/overview/" + (h.id || "0") + ".json", parameters:a, onSuccess:function() {
      var a = parseInt(h.id, 10) || 0;
      a && Kharma.ga.view({name:"account", id:a, title:a ? "User Account: Edit Billing Address Success" : "401 Unauthorized", page:"/account/" + a + "/profile/billing-address/edit/success", dimension8:"User Account"});
      f(!0)
    }})
  };
  (function(f) {
    var g = f.addressError || Kharma.errorsHelper.errors.addressRequired, l = $("#assetStore"), k = $("<div id='addressform' class='addresslist vscroll'></div>"), n = f.addressData && f.addressData.id ? f.addressData.id : 0;
    Kharma.ga.view({name:"account", id:n, title:n ? "User Account: Edit Billing Address" : "401 Unauthorized", page:"/account/" + n + "/profile/billing-address/edit", dimension8:"User Account"});
    a = $(".modalblocker").length > 0 ? $("<div class='modalblocker transparent'></div>") : $("<div class='modalblocker'></div>");
    c = $("<div class='dialog messageaddress'><h1 class='noaddresshead'>" + g[0] + "</h1><p class='noaddresspara'>" + g[1] + "</p><h1 class='addresshead'>" + Kharma.l10n.address.editBillingAddress + "</h1></div>");
    h = f.addressData;
    d = f.callback;
    e = f.errorField;
    l.append(a);
    l.append(c);
    c.append(k);
    k.append(Handlebars.templates.addressForm({lockAddressFields:h.lock_address_fields, required:Kharma.l10n.address.required, locked:Kharma.l10n.address.locked, address1:Kharma.l10n.user.address1, address2:Kharma.l10n.user.address2, city:Kharma.l10n.user.city, country:Kharma.l10n.user.country, firstName:Kharma.l10n.user.firstName, lastName:Kharma.l10n.user.lastName, loading:Kharma.l10n.page.loadingPage, organization:Kharma.l10n.user.organization, phoneNumber:Kharma.l10n.user.phoneNumber, state:Kharma.l10n.user.state, 
    vat:Kharma.l10n.user.vat, zip:Kharma.l10n.user.zip}));
    b();
    i(h);
    $("#address").val() || c.addClass("noaddress");
    (h.country === "ca" || h.country === "us" || h.country === "cn") && Kharma.addressHelper.getStates(h.country);
    h.lock_address_fields ? (Kharma.addressHelper.getCountries(h.country, h.country_name, "disabled"), $(".vat").addClass("req"), $("#vat_no").attr("disabled", "disabled")) : Kharma.addressHelper.getCountries(h.country, h.country_name);
    j()
  })(g)
};
Kharma.LoginDialog = function() {
  var g = $("#assetStore"), h, a = null, d, c, e, b = !1, f, i, l, j, k, n, m, p, q;
  f = function() {
    var a = function(a) {
      switch(a.keyCode || a.which) {
        case 13:
          a.preventDefault(), p()
      }
    };
    e.append(Handlebars.templates.loginForm({cancel:Kharma.l10n.button.cancel, createAccount:Kharma.l10n.browserMenu.menu.createAccount, email:Kharma.l10n.user.email, forgotPassword:Kharma.l10n.user.forgotPassword, keepLoggedIn:Kharma.l10n.user.keepLoggedIn, logIn:Kharma.l10n.page.logIn, logInButton:Kharma.l10n.user.logIn, password:Kharma.l10n.user.password}));
    h.show();
    Kharma.editorHelper.show(d);
    e.find("#cancel-login-button").on("click", function() {
      i()
    });
    e.find("#login-button").on("click", p);
    e.find("#createAccountButton").on("click", function() {
      Kharma.unityEditor.openBrowser("https://id.unity.com/account/new", function(a) {
        if(a) {
          throw a.message;
        }
      })
    });
    $("#login-password").on("keydown", a);
    Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() && !Kharma.unityEditor.isChromium() && ($("#login-username").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#login-password"))
    }), $("#login-password").on("input", function() {
      Kharma.editorHelper.tabInEditor($(this), $("#login-button"))
    }));
    $("#login-remember_session").on("keydown", a);
    q();
    $("#login-remember_session").change(function() {
      Kharma.session.setRememberSession($(this).prop("checked"))
    });
    $("#login-username").focus()
  };
  l = function() {
    Kharma.editorHelper.hide(d, h)
  };
  i = function() {
    typeof a === "function" && a(!1);
    l()
  };
  n = function() {
    var a = $("#login-username"), b = $("#login-password");
    c.text(Kharma.errorsHelper.errors.loginInfo[1]);
    b.val() === "" && k(b);
    a.val() === "" && k(a)
  };
  m = function(a, b) {
    var d = $("#login-username").removeAttr("disabled"), e = $("#login-password").removeAttr("disabled");
    c.text(Kharma.errorsHelper.exceptions[a] || a || b);
    k(e);
    k(d)
  };
  p = function() {
    var a = $("#login-username"), d = $("#login-password");
    b || (a.val() !== "" && d.val() !== "" ? (b = !0, c.text(Kharma.l10n.user.logging), a.attr("disabled", !0), d.attr("disabled", !0), Kharma.login.authenticate(j, a.val(), d.val())) : n())
  };
  j = function(c, d, e) {
    b = !1;
    c ? (typeof a === "function" && a(!0), l()) : m(d, e)
  };
  k = function(a) {
    a.addClass("problem");
    a.on("keydown", function() {
      $("#login-username").removeClass("problem");
      $("#login-password").removeClass("problem");
      c.text("")
    })
  };
  q = function() {
    Kharma.session.getRememberSession(function(a) {
      $("#login-remember_session").attr("checked", a)
    })
  };
  return{show:function(b) {
    Kharma.ga.view({name:"login", dimension8:"Account"});
    var b = b || {}, i = b.messageText || "";
    a = b.callback;
    h = g.find("#loginModalBlocker");
    h[0] || (h = $("<div id='loginModalBlocker' class='modalblocker'></div>"));
    h.on("click", function(a) {
      a.stopPropagation();
      l()
    });
    g.append(h);
    d = g.find("#loginDialog");
    c = $("<p></p>");
    e = $('<div id="addressform"></div>');
    d[0] ? ($(d.find("form")[0]).val(""), d.css("opacity", 1)) : (d = $("<div id='loginDialog' class='dialog messagelogin'></div>"), d.append(e), d.append(c));
    g.append(d);
    c.text("");
    c.text(i);
    e.empty();
    f()
  }}
};
Kharma.ReviewDialog = function(g) {
  var h = $("#assetStore"), a = $("<div class='modalblocker'></div>"), d = g || {}, c = d.callback, e = d.closeCallback, b = d.commentID || 0, f, i = d.packageID, l = d.publisherID, j = parseInt(d.rating, 10) || 0, k = d.ratingValue, n, m, p, q, r, t;
  n = function() {
    var b = f.find(".cancel"), c = f.find(".submit"), d = f.find(".headline");
    a.on("click", function(a) {
      a.stopPropagation();
      m()
    });
    if(Kharma.utils.windowWrapper.hasProperty("onhashchange")) {
      Kharma.utils.WindowWrapper.onhashchange(m)
    }
    d.focus();
    b.on("click", m);
    c.on("click", r)
  };
  q = function(c) {
    j = parseInt(c.rating, 10) || 0;
    var d = new Kharma.UI.Rating({packageId:i, value:k || j, callback:function(a) {
      k = a;
      p()
    }});
    f = $(Handlebars.templates.reviewDialog({buttonL10N:Kharma.l10n.button, commentID:b, headline:c.subject || "", packageID:i, ratingValue:k || j, review:c.full || "", reviewL10N:Kharma.l10n.review, reviewSupport:Kharma.l10n.supplant(Kharma.l10n.review.reviewsAreNotForSupport, {publisherUrl:"#!/search/page=1/sortby=popularity/query=publisher:" + l})}));
    f.find(".rating-value-container").append(d.render()[0]);
    f.find(".headline").keyup(function() {
      p()
    });
    f.find("#reviewText").keyup(function() {
      p()
    });
    h.append(a);
    h.append(f);
    a.show();
    Kharma.editorHelper.show(f);
    n()
  };
  m = function() {
    Kharma.editorHelper.hide(f, a);
    e && e()
  };
  p = function() {
    var a = f.find(".headline"), b = f.find("#reviewText");
    k > 0 && a.val() !== "" && b.val() !== "" ? f.find(".submit").removeClass("disabled") : f.find(".submit").addClass("disabled")
  };
  r = function(a) {
    $(a.target).hasClass("disabled") || Kharma.io.post({uri:"/api/content/comments/" + i + (b ? "/" + b : "") + ".json", parameters:{subject:f.find(".headline").val(), rating:k, full:f.find("textarea").val()}, onSuccess:function() {
      m();
      t();
      var a = Kharma.history.getHistory()[Kharma.history.getIndex()];
      Kharma.io.flushCacheKey("/api/content/comments/" + i + ".json");
      Kharma.io.flushCacheKey("/api/content/overview/" + i + ".json");
      (a.type === "use" || a.type === "con" && a.id === i) && a.load();
      c && c(k)
    }})
  };
  t = function() {
    var a = parseInt(i, 10) || 0, c = {nonInteraction:!0, eventCategory:"Reviews", eventAction:"Rating", dimension8:"Packages", dimension9:d.publisherName || "", dimension10:d.packageName || "", metric10:1}, e = parseInt(k, 10) || 0;
    switch(e) {
      case 1:
        c.metric12 = 1;
        break;
      case 2:
        c.metric13 = 1;
        break;
      case 3:
        c.metric14 = 1;
        break;
      case 4:
        c.metric15 = 1;
        break;
      case 5:
        c.metric16 = 1
    }
    if(b) {
      if(Kharma.ga.view({name:"packageReview", id:a, commentId:parseInt(b, 10) || 0, title:a && b ? "Package: Edit Review Success" : "404 Not Found", page:"/package/" + a + "/review/" + (parseInt(b, 10) || 0) + "/edit/success", dimension8:"Packages"}), Kharma.ga.event({nonInteraction:!0, eventCategory:"Reviews", eventAction:"Edit Review", dimension8:"Packages", dimension9:d.publisherName || "", dimension10:d.packageName || ""}), (parseInt(k, 10) || 0) !== j) {
        if(j && j !== e) {
          switch(c.metric11 = e - j, d.previousValue) {
            case 1:
              c.metric12 = -1;
              break;
            case 2:
              c.metric13 = -1;
              break;
            case 3:
              c.metric14 = -1;
              break;
            case 4:
              c.metric15 = -1;
              break;
            case 5:
              c.metric16 = -1
          }
        }
        Kharma.ga.event(c)
      }
    }else {
      Kharma.ga.view({name:"packageOther", id:a, title:"Package: Create Review Success", page:"/package/" + a + "/review/success", dimension8:"Packages"}), Kharma.ga.event({nonInteraction:!0, eventCategory:"Reviews", eventAction:"Review", dimension8:"Packages", dimension9:d.publisherName || "", dimension10:d.packageName || "", metric7:1}), k && Kharma.ga.event(c)
    }
  };
  (function() {
    var a = parseInt(i, 10) || 0;
    $("modalblocker").remove();
    $(".dialog.messageform").remove();
    b ? Kharma.ga.view({name:"packageReview", id:a, commentId:parseInt(b, 10) || 0, title:a && b ? "Package: Edit Review" : "404 Not Found", page:"/package/" + a + "/review/" + (parseInt(b, 10) || 0) + "/edit", dimension8:"Packages"}) : Kharma.ga.view({name:"packageOther", id:a, title:"Package: Create Review", page:"/package/" + a + "/review", dimension8:"Packages"});
    Kharma.io.get({uri:"/api/content/review/" + i + "/" + b + ".json", onSuccess:function(a) {
      q(a.json)
    }, onFailure:function() {
      m()
    }})
  })()
};
Kharma.NpsDialog = function(g) {
  var h = $("#assetStore"), a = $("<div class='modalblocker'></div>"), d = g || {}, c = d.closeCallback, e, b, f, i, l, j, k;
  f = function() {
    var b = e.find(".cancel-button"), c = e.find(".submit-button"), d = e.find("#never-button");
    a.on("click", function(a) {
      a.stopPropagation();
      i()
    });
    if(Kharma.utils.windowWrapper.hasProperty("onhashchange")) {
      Kharma.utils.WindowWrapper.onhashchange(i)
    }
    b.on("click", j);
    c.on("click", k);
    d.on("click", l)
  };
  i = function() {
    Kharma.editorHelper.hide(e, a);
    c && c()
  };
  l = function() {
    Kharma.io.post({uri:"/api/account/nps.json", parameters:{close:"forever"}, onSuccess:function() {
      i()
    }})
  };
  j = function() {
    Kharma.io.post({uri:"/api/account/nps.json", parameters:{close:"later"}, onSuccess:function() {
      i()
    }})
  };
  k = function() {
    var a = d.userNps;
    b && b !== "empty" && Kharma.io.post({uri:"/api/account/nps/" + a + ".json", parameters:{score:b, comment:e.find("textarea").val(), language_code:d.language}, onSuccess:function() {
      i()
    }})
  };
  $("modalblocker").remove();
  $(".dialog .messageform").remove();
  (function() {
    e = $(Handlebars.templates.npsDialog({buttonL10N:Kharma.l10n.button, npsL10N:Kharma.l10n.nps, nps:d.userNps, language:d.language}));
    e.find("#nps-pill").barrating("show", {theme:"bars-pill", initialRating:null, showValues:!0, showSelectedRating:!1, allowEmpty:!1, emptyValue:"empty", deselect:!1, onSelect:function(a) {
      a !== null ? (b = a, $(".submit-button").removeAttr("disabled")) : $(".submit-button").attr("disabled", "disabled")
    }, onClear:function() {
      $(".submit-button").attr("disabled", "disabled")
    }});
    var c = e.find(".br-widget a");
    c["0"].style.display = "none";
    c["1"].className += " left_empty";
    e.find(".submit-button").attr("disabled", "disabled");
    b = parseInt(e.find("#nps-pill").initialRating, 10);
    h.append(a);
    h.append(e);
    a.show();
    Kharma.editorHelper.show(e);
    f()
  })()
};
Kharma.ReplyReviewDialog = function(g) {
  var h, a, d, c, e, b, f = g || {}, i, l, j, k, n, m, p, q;
  m = function() {
    var a = $("<button>" + Kharma.l10n.button.cancel + "</button>"), b = $("<div class='form'></div>"), e = $("<div class='reviewBlock'>"), f = $("<button>" + Kharma.l10n.button.submit + "</button>");
    $("<p>").append($("<b>").text(i)).appendTo(e);
    $("<p>").text(l).appendTo(e);
    j = $("<textarea class='input' placeholder='" + Kharma.l10n.reply.reply + "'></textarea>");
    k === null ? d.append("<h1>" + Kharma.l10n.reply.replyReview + "</h1>") : (d.append("<h1>" + Kharma.l10n.reply.editReply + "</h1>"), j.val(c));
    d.append(b);
    b.append(e);
    b.append(j);
    d.append(a);
    d.append(f);
    h.show();
    Kharma.editorHelper.show(d);
    j.focus();
    a.on("click", function() {
      n()
    });
    f.on("click", function() {
      p()
    })
  };
  n = function() {
    Kharma.editorHelper.hide(d, h)
  };
  p = function() {
    q();
    n()
  };
  q = function() {
    Kharma.io.post({uri:k ? "/api/content/comments/" + b + "/" + a + ".json" : "/api/content/comments/" + b + ".json", parameters:{reply:k || a, subject:e, rating:-1, full:j.val()}, onSuccess:function() {
      a = parseInt(a, 10) || 0;
      b = parseInt(b, 10) || 0;
      k ? (Kharma.ga.view({name:"packageReview", id:b, commentId:a, title:b && a ? "Package: Edit Reply Success" : "404 Not Found", page:"/package/" + b + "/review/" + a + "/reply/edit/success", dimension8:"Packages"}), Kharma.ga.event({nonInteraction:!0, eventCategory:"Reviews", eventAction:"Edit Replay", dimension8:"Packages", dimension9:f.publisherName || "", dimension10:f.packageName || ""})) : (Kharma.ga.view({name:"packageReview", id:b, commentId:a, title:b && a ? "Package: Reply Review Success" : 
      "404 Not Found", page:"/package/" + b + "/review/" + a + "/reply/success", dimension8:"Packages"}), Kharma.ga.event({nonInteraction:!0, eventCategory:"Reviews", eventAction:"Replay", dimension8:"Packages", dimension9:f.publisherName || "", dimension10:f.packageName || "", metric8:1}));
      var c = Kharma.history.getHistory()[Kharma.history.getIndex()];
      Kharma.io.flushCacheKey("/api/content/comments/" + b + ".json");
      Kharma.io.flushCacheKey("/api/content/overview/" + b + ".json");
      (c.type === "use" || c.type === "con" && c.id === b) && c.load()
    }})
  };
  (function(f) {
    var g = $("#assetStore"), j = f.replyReply;
    a = parseInt(f.commentID, 10) || 0;
    b = parseInt(f.packageID, 10) || 0;
    c = "";
    Kharma.ga.view({name:"packageReview", id:b, commentId:a, title:b && a ? "Package: Reply Review" : "404 Not Found", page:"/package/" + b + "/review/" + a + "/reply", dimension8:"Packages"});
    h = $("<div class='modalblocker'></div>");
    d = $("<div class='dialog messageform reviewform replyform'></div>");
    h.on("click", function(a) {
      a.stopPropagation();
      n()
    });
    g.append(h);
    g.append(d);
    a && b ? Kharma.io.get({uri:"/api/content/review/" + b + "/" + a + ".json", onSuccess:function(a) {
      var a = a.json, b = a.parent;
      b && !j ? (i = b.subject, l = b.full, k = b.id, c = a.full, e = a.subject) : (i = a.subject, l = a.full, k = null, e = Kharma.l10n.reply.replySubject);
      m()
    }, onFailure:function() {
      n()
    }}) : m()
  })(f)
};
Kharma.TermsDialog = function(g) {
  var h = g || {}, a, d, c = h.callback, e, b, f, i;
  b = function(a, b, c) {
    b.append(a);
    a.on("click", function(a) {
      a.stopPropagation();
      f();
      c && c(!1)
    })
  };
  f = function() {
    Kharma.editorHelper.hide(a, d)
  };
  i = function(a) {
    Kharma.io.get({uri:"/api/user/terms/" + Kharma.login.user.id + ".json", onSuccess:function(b) {
      e = b.json.terms.id;
      a(b.json)
    }})
  };
  (function() {
    var f = new Kharma.Dialog({title:Kharma.l10n.page.loadingPage, message:Kharma.l10n.page.loadingPage});
    d = $("<div class='modalblocker'></div>");
    a = f.element;
    a.addClass("dialog message superbig vscroll eula");
    d && b(d, f.base);
    h.noCancel ? b($("<button>" + Kharma.l10n.button.ok + "</button>"), a) : (b($("<button class='cancel'>" + Kharma.l10n.button.cancel + "</button>"), a, c), b($("<button class='accept'>" + Kharma.l10n.button.accept + "</button>"), a, function() {
      Kharma.io.post({uri:"/api/user/terms/" + Kharma.login.user.id + ".json", requestHeaders:{Accept:"application/json"}, parameters:{terms_id:e}, onSuccess:function() {
        c && c(!0)
      }})
    }));
    d && d.show();
    Kharma.editorHelper.show(a);
    i(function(a) {
      f.element.find("h1").text(a.terms.title);
      f.element.find(".message-body").text(a.terms.description)
    })
  })()
};
Kharma.TextDialog = function(g) {
  var h, a, g = g || {}, d = g.callback, c = g.text, e, b = g.type, f, i, l;
  i = function() {
    var a = 0, d, e;
    if(b === "textField") {
      e = $("<input type='text' class='input' placeholder='" + Kharma.l10n.button.text + "'>"), c && e.val(c)
    }else {
      if(b === "selectField") {
        if(e = $("<select class='input'></select>"), c) {
          for(d = c.length;a < d;a++) {
            e.append($("<option>" + c[a].name + "</option>").attr(c[a].attributes))
          }
        }
      }else {
        e = $("<textarea class='input' placeholder='" + Kharma.l10n.button.text + "'></textarea>"), c && e.val(c)
      }
    }
    return e
  };
  f = function() {
    Kharma.editorHelper.hide(a, h)
  };
  l = function(a) {
    a.stopPropagation();
    d({text:e.val()});
    f()
  };
  (function(b) {
    var c = $("#assetStore"), d = $("<button>" + Kharma.l10n.button.cancel + "</button>"), g = $("<div class='form'></div>"), p = $("<button>" + Kharma.l10n.button.submit + "</button>");
    h = b.noModalBlocker ? null : $("<div class='modalblocker'></div>");
    a = $("<div class='textform message dialog'><h1>" + b.header + "</h1></div>");
    b.className && a.addClass(b.className);
    h && (h.on("click", function(a) {
      a.stopPropagation();
      f()
    }), c.append(h));
    c.append(a);
    a.append(g);
    e = i();
    g.append(e);
    Kharma.utils.windowWrapper.navigator.appVersion.indexOf("Mac") !== -1 ? (a.append(d), a.append(p)) : (a.append(p), a.append(d));
    h && h.show();
    Kharma.editorHelper.show(a);
    e.focus();
    d.on("click", function() {
      f()
    });
    p.on("click", function(a) {
      l(a)
    })
  })(g)
};
Kharma.TimedMessage = function(g) {
  var h = null, g = g || {}, a, d;
  d = function() {
    h.remove();
    clearTimeout(a)
  };
  (function(c) {
    h = (new Kharma.Dialog({title:c.title, message:c.message})).element;
    a = setTimeout(function() {
      d()
    }, c.timeout * 1E3 - 500);
    h.on("click", function() {
      d()
    })
  })(g);
  return{element:h}
};
Kharma.TimedError = function(g) {
  var h, a, g = g || {}, d, c;
  c = function() {
    h.remove();
    a.remove();
    clearTimeout(d)
  };
  (function(e) {
    var b = $("#assetStore"), f = e.message || [], e = e.timeout;
    h = $("<div class='modalblocker'></div>");
    typeof f === "string" && (f = f.split(":"));
    a = (new Kharma.TimedMessage({title:f[0], message:f[1], timeout:e})).element;
    b.append(h);
    h.show();
    h.on("click", function(a) {
      a.stopPropagation();
      c()
    });
    a.on("click", function() {
      c()
    });
    d = setTimeout(function() {
      c()
    }, e * 1E3 - 500)
  })(g)
};
Kharma.TextMessage = function(g) {
  var h = g || {}, a, d, c = h.options || {}, e = h.callback, b = h.withCancel, f = h.noButtons || !1, i;
  i = function() {
    Kharma.editorHelper.hide(a, d)
  };
  (function() {
    var g, j = $("<button class='cancel'></button>"), k = c.accept || Kharma.l10n.button.ok, n = c.accept || Kharma.l10n.button.accept, m = c.cancel || Kharma.l10n.button.cancel;
    $(".modalblocker").remove();
    $("#message").remove();
    g = new Kharma.Dialog({title:h.title, message:h.message});
    d = h.noModalBlocker ? null : $("<div class='modalblocker'></div>");
    a = g.element;
    d && (d.on("click", function(a) {
      a.stopPropagation();
      typeof e === "function" && e(!1);
      i()
    }), g.base.append(d));
    a.addClass(c.size === "small" ? "dialog message vscroll" : "dialog message superbig vscroll");
    c.className && a.addClass(a.attr("class") + " " + c.className);
    f || (b ? (a.append("<br/>"), j.append("<span>" + m + "</span>"), j.on("click", function(a) {
      a.stopPropagation();
      typeof e === "function" && e(!1);
      i()
    }), g = $("<button class='ok'><span>" + n + "</span></span>"), g.on("click", function(a) {
      a.stopPropagation();
      typeof e === "function" && e(!0);
      i()
    }), a.append(j), a.append(g)) : (j.append("<span>" + k + "</span>"), a.append("<br/>"), a.append(j), j.on("click", function(a) {
      a.stopPropagation();
      typeof e === "function" && e(!1);
      Kharma.utils.windowWrapper.location.getHref().indexOf("version") !== -1 && Kharma.utils.windowWrapper.location.setHref(Kharma.utils.windowWrapper.location.getHref().replace("version", ""));
      i()
    })));
    d && d.show();
    Kharma.editorHelper.show(a)
  })();
  return{getElement:function() {
    return a
  }, setMessage:function(b) {
    a.find(".message-body").html(b)
  }, setTitle:function(b) {
    a.find("> h1").html(b)
  }, close:i}
};
Kharma.AdminStatusDialog = function(g) {
  var h, a, d, c, g = g || {}, e, b, f;
  b = function() {
    return{comment:a.val()}
  };
  e = function() {
    Kharma.editorHelper.hide(d, h)
  };
  f = function() {
    c(b());
    e()
  };
  (function(b) {
    var g = b.action, j = $("#assetStore"), k = $("<button>" + Kharma.l10n.button.cancel + "</button>"), n = b.emailUrl, n = n ? $("<a class='externallink' target='_blank' href='" + n + "'>" + Kharma.l10n.admin.fogBugzEmail + "</a>") : "", m = $("<div class='form'></div>"), p = 0, q = g.charAt(0).toUpperCase() + g.substr(1), r = $("<button>" + q + "</button>");
    d = $("<div class='dialog message admin status'></div>");
    c = b.onSubmit;
    h = $("<div class='modalblocker'></div>");
    h.on("click", function(a) {
      a.stopPropagation();
      e()
    });
    j.append(h);
    j.append(d);
    a = $("<textarea class='input comment' placeholder='" + Kharma.l10n.admin.commentPlaceholder + "'></textarea>");
    d.append($("<h1>" + b.header + "</h1>"));
    d.append($("<p>" + b.necker));
    g !== "comment" && (m.append($("<h2>" + (++p + ". " + Kharma.l10n.admin.emailPublisher) + "</h2>")), m.append($("<p></p>").append(n)));
    m.append($("<h2>" + (++p + ". " + Kharma.l10n.admin.internalComment) + "</h2>"));
    m.append(a);
    m.append($("<h2></h2>").append(++p + ". " + Kharma.l10n.button.click + "  <code>" + q + "</code> " + Kharma.l10n.admin.saveComment + (g !== "comment" ? " " + Kharma.l10n.admin.changePackageStatus : "")));
    d.append(m);
    Kharma.utils.windowWrapper.navigator.appVersion.indexOf("Mac") !== -1 ? (d.append(k), d.append(r)) : (d.append(r), d.append(k));
    h.show();
    Kharma.editorHelper.show(d);
    a.focus();
    k.on("click", function() {
      e()
    });
    r.on("click", function() {
      f()
    })
  })(g)
};
Kharma.AdminToolboxDialog = function() {
  var g, h, a;
  a = function() {
    Kharma.editorHelper.hide(h, g)
  };
  (function() {
    var d = $("#assetStore"), c = $("<button>Close</button>");
    g = $("<div class='modalblocker'></div>");
    h = $("<div class='dialog admin-toolbox-dialog'></div>");
    h.append(Handlebars.templates.adminToolbox({}));
    h.append(c);
    d.append(g);
    d.append(h);
    g.on("click", function(c) {
      c.stopPropagation();
      a()
    });
    c.on("click", function() {
      a()
    });
    $("#sendMemoButton").on("click", function() {
      new Kharma.TextDialog({className:"admin-send-memo-dialog", header:"Send an HMTL Memo to Yourself", text:"<h1>Testing 1, 2, 3...</h1>\n<p>Is this thing on...?</p>", callback:function(a) {
        Kharma.io.post({uri:"/api/admin/memo/send-to-myself.json", parameters:{body:a.text}})
      }})
    });
    $("#sendMeSomeMemosButton").on("click", function() {
      Kharma.io.post({uri:"/api/admin/memo/send-me-some-memos.json", parameters:{}})
    });
    g.show();
    Kharma.editorHelper.show(h)
  })()
};
Kharma.PurchaseDialog = function(g) {
  var h, a = {}, d, c, e, b, f, i, l, j, k, n, m, p, q, r, t, s;
  e = function() {
    c.find(".terms a").on("click", function() {
      new Kharma.TermsDialog({noCancel:!0})
    });
    c.find(".terms input").on("click", function(a) {
      a.preventDefault();
      a.stopPropagation()
    });
    c.find(".address-container button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      i()
    });
    c.find(".cancel-button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      b()
    });
    c.find(".purchase-button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      m()
    });
    c.find(".disable-express-purchase-button").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      f()
    });
    $(".modalblocker").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      b()
    });
    c.find(".select-box").on("change", function() {
      var a = c.find(".account-balance"), b = c.find(".account-password"), d = c.find(".disable-express-purchase-button"), e = c.find(".terms"), f = c.find(".express-purchase-payment"), g = c.find(".status"), i = c.find(".payment-method-label"), h = $(this).val();
      h === "genesis" ? (i.text(Kharma.l10n.purchase.chargeCreditCard), a.hide(), b.hide(), g.hide(), f.hide(), d.hide(), e.show()) : h === "credits" ? (i.text(Kharma.l10n.purchase.chargeAccount), a.show(), b.show(), g.show(), f.hide(), d.hide(), e.show()) : h === "express-checkout" && (i.text(Kharma.l10n.purchase.chargeCreditCard), a.hide(), b.show(), f.show(), c.find(".purchase-button").removeAttr("disabled"), e.hide(), d.show())
    })
  };
  b = function() {
    c.find(".select-box").selectBox("destroy");
    h.remove();
    c.remove()
  };
  f = function() {
    new Kharma.TextMessage({title:Kharma.l10n.purchase.expressCheckout.disable, message:Kharma.l10n.purchase.expressCheckout.disableMessage + "<br><br><br>", withCancel:!0, options:{size:"small", accept:Kharma.l10n.button.yes}, callback:function(a) {
      a && Kharma.io.get({uri:"/api/purchase/deactivate-express.json", onSuccess:function() {
        b();
        j()
      }})
    }})
  };
  i = function() {
    Kharma.addressHelper.editAddress(function(a) {
      a && p()
    })
  };
  l = function() {
    var b, c = 0, d, e = !1, f = setInterval(function() {
      e ? clearInterval(f) : (Kharma.io.get({uri:"/api/purchase/transaction_status.json", parameters:{payment_hook:a.paymentHook, transactionId:a.transactionId}, onSuccess:function(a) {
        a.json.status === "ok" ? (b && b.close(), e = !0, s(a.json), clearInterval(f)) : c === 1 && (b = new Kharma.TextMessage({title:Kharma.l10n.purchase.purchaseInformation, options:{size:"small"}, message:Kharma.l10n.purchase.checkingPayment, noButtons:!0}))
      }}), c === 300 && (clearInterval(f), d = $("<button class='ok'><span>" + Kharma.l10n.button.ok + "</span></span>"), b.getElement().append(d), d.on("click", function(a) {
        a.stopPropagation();
        b.close()
      }), b.setMessage(Kharma.l10n.purchase.transactionTimeOut)));
      c++
    }, 1E3)
  };
  j = function() {
    Kharma.io.get({uri:"/api/purchase/overview.json", onSuccess:function(a) {
      d = parseFloat(a.json.price);
      a.json.has_accepted_latest_terms ? q(a) : new Kharma.TermsDialog({callback:function(b) {
        b && q(a)
      }})
    }})
  };
  k = function(d, e) {
    a = d.json;
    a.paymentHook = e;
    c && b();
    l()
  };
  n = function(b, d) {
    var e = {}, f;
    a = b.json;
    a.paymentHook = d;
    b.json && b.json.hiddenFields && $.each(b.json.hiddenFields, function(a, b) {
      e[a] = b
    });
    e.payment_method = "account";
    e.account_password = c.find(".account-password input").val();
    if(b.json.status === "ok") {
      var g = new Kharma.utils.IframeTransport;
      g.createForm(function() {
        g.prepareFormData(a.postActionUrl, e);
        Kharma.utils.windowWrapper.frames.postFrame.document.getElementById("payloadForm").submit();
        f = c.find(".status");
        f.removeClass("error");
        f.text(Kharma.l10n.purchase.sendingPayment)
      })
    }else {
      f = c.find(".status"), f.addClass("error"), r(c.find(".status"), b.json.status)
    }
  };
  m = function() {
    var e = Kharma.ga.paymentInfo(), f = c.find(".select-box").val() || "genesis", g;
    if(d) {
      if(f === "genesis") {
        e.processor = "Genesis"
      }else {
        if(f === "credits") {
          e.processor = "Account"
        }else {
          if(f === "express-checkout") {
            e.processor = "Express", e.account_password = c.find(".account-password input").val(), e.express_processor = "Genesis"
          }
        }
      }
    }else {
      e.processor = "FreeOnly"
    }
    g = c.find(".status");
    g.show();
    g.removeClass("error");
    g.text(Kharma.l10n.purchase.sendingPayment);
    c.find(".cancel-button").attr("disabled", "disabled");
    c.find(".purchase-button").attr("disabled", "disabled");
    a.paymentHook = Kharma.login.user.xunitysession + "/" + Date.now();
    e.payment_hook = a.paymentHook;
    e.xunitysession = Kharma.login.user.xunitysession;
    e.processor === "Genesis" ? Kharma.unityEditor.openBrowser(Kharma.utils.windowWrapper.location.getProtocol() + "//" + Kharma.utils.windowWrapper.location.getHost() + "/" + Kharma.login.user.language_url_code + "/payment/payment.html?" + jQuery.param(e), function(a) {
      if(a) {
        throw a.message;
      }else {
        b(), t(Kharma.l10n.purchase.creditCardPayment, Kharma.l10n.purchase.finalizeCreditCardPayment)
      }
    }) : Kharma.io.post({uri:"/api/purchase/create_payment.json", parameters:e, onSuccess:function(d) {
      d.json && d.json.status === "ok" ? (e.processor === "Express" ? k(d, a.paymentHook) : n(d, a.paymentHook), b()) : (g.addClass("error"), g.text(d.json.message), c.find(".cancel-button").removeAttr("disabled"), c.find(".purchase-button").removeAttr("disabled"))
    }})
  };
  p = function() {
    Kharma.io.get({uri:"/api/user/address/0.json", onSuccess:function(a) {
      $(".address").html(Handlebars.templates.address({address:a.json.address, phoneLabel:Kharma.l10n.user.phone, vatLabel:Kharma.l10n.cart.vat}))
    }})
  };
  q = function(a) {
    var b = $("#assetStore");
    c = $(Handlebars.templates.purchaseDialog({accountBalance:Kharma.l10n.purchase.accountBalance, accountPassword:Kharma.l10n.purchase.accountPassword, allowPopups:Kharma.l10n.purchase.allowPopups, billingAddress:Kharma.l10n.purchase.billingAddress, cancel:Kharma.l10n.button.cancel, chargeAccount:Kharma.l10n.purchase.chargeAccount, creditCard:Kharma.l10n.purchase.creditCard, credits:Kharma.l10n.purchase.credits, data:a.json, disableExpressPurchase:Kharma.l10n.purchase.expressCheckout.disable, editAddress:Kharma.l10n.address.editAddress, 
    expressCheckout:Kharma.l10n.purchase.expressCheckout.title, expressPurchasePayment:Kharma.l10n.purchase.expressCheckout.purchasePayment, header:Kharma.l10n.purchase.purchaseInformation, insufficient:Kharma.l10n.purchase.insufficientFunds, message:Kharma.l10n.purchase.message, paymentMethod:Kharma.l10n.purchase.paymentMethod, price:parseFloat(a.json.price), purchase:Kharma.l10n.purchase.purchase, terms:Kharma.l10n.purchase.terms, total:Kharma.l10n.cart.total}));
    h = $("<div class='modalblocker'></div>");
    b.append(h);
    h.show();
    b.append(c);
    c.find(".select-box").selectBox();
    c.find(".select-box").val() === "genesis" && $(c.find(".payment-method-label")).text(Kharma.l10n.purchase.chargeCreditCard);
    p();
    e()
  };
  r = function(a, b) {
    switch(b) {
      case "review":
        a.text(Kharma.l10n.purchase.transactionProblem);
        break;
      case "reject":
        a.text(Kharma.l10n.purchase.transactionRejected);
        break;
      case "error":
        a.text(Kharma.l10n.purchase.transactionError);
        break;
      case "timeout":
        a.text(Kharma.l10n.purchase.transactionTimeOut);
        break;
      case "unauthorized":
        a.text(Kharma.l10n.purchase.invalidPassword)
    }
  };
  t = function(a, b) {
    new Kharma.TextMessage({title:a, callback:function() {
      l()
    }, options:{size:"small"}, message:b})
  };
  s = function(a, c) {
    a.transactionStatus.toLowerCase() === "accept" ? (Kharma.ga.view({name:"checkout", id:"/receipt", title:"Checkout Receipt", dimension8:"Checkout"}), Kharma.cart.updateCartContents(), c && b(), new Kharma.PurchaseSuccessfulDialog, $("#mainContent").trigger(Kharma.utils.events.onPurchaseSuccessful)) : (Kharma.ga.view({name:"checkout", id:"/failed", dimension8:"Checkout", dimension16:Kharma.l10n.purchase.error[a.statusCode] || a.statusText, title:"Checkout failed"}), new Kharma.TextMessage({title:Kharma.l10n.purchase.purchaseInformation, 
    options:{className:"purchase-status-message", size:"small"}, message:Kharma.l10n.purchase.finalizeMessage + "<p>" + (Kharma.l10n.purchase.error[a.statusCode] || a.statusText) + "</p>"}))
  };
  Kharma.ga.view({name:"checkout", dimension8:"Checkout"});
  g || j();
  return{purchaseStatusCallback:function(a, b) {
    s({transactionStatus:a, statusText:b}, !0)
  }, showCreditsPurchaseError:r, onCreatePayment:k}
};
Kharma.PurchaseSuccessfulDialog = function() {
  var g, h, a;
  a = function() {
    Kharma.editorHelper.hide(g, h)
  };
  (function() {
    var d = new Kharma.Dialog({title:Kharma.l10n.purchase.purchaseInformation, message:Kharma.l10n.purchase.transactionSuccessful}), c = $("<button class='cancel'>" + Kharma.l10n.button.close + "</button>"), e = $("<button class='open-download-manager'>" + Kharma.l10n.purchase.openDownloadManager + "</button>");
    h = $("<div class='modalblocker'></div>");
    $("#assetStore").append(h);
    g = d.element;
    h.on("click", function(b) {
      b.stopPropagation();
      a()
    });
    g.addClass("dialog message vscroll purchase-successful");
    g.append(e);
    g.append(c);
    e.on("click", function() {
      Kharma.localStorage.setItem("kharma.download.groupby", "purchase-date-id");
      a();
      $.address.value("/account/downloads")
    });
    c.on("click", function(b) {
      b.stopPropagation();
      a()
    });
    h.show();
    Kharma.editorHelper.show(g)
  })()
};
Kharma.ReportDialog = function(g) {
  var h, a, d = g || {}, c = d.commentId, e = d.packageData, b = d.publisherId, f = d.message, i = d.title, l = d.type, j = d.userId, k, n, m, p, q, r;
  m = function() {
    var b = $("<button>" + Kharma.l10n.button.cancel + "</button>"), c = $("<div class='form'></div>"), d = $("<button>" + Kharma.l10n.button.submit + "</button>");
    a.append("<h1>" + i + "</h1>");
    a.append(c);
    k = $("<textarea placeholder='" + Kharma.l10n.report.report + "'>" + f + "</textarea>");
    k.on("focus", function() {
      var a = $(this);
      a.is(":focus") || (a.val(""), k.off("focus"))
    });
    c.append(k);
    a.append("<form><div><input class='offensive' type='checkbox' name='Offensive Content'/><span class='offensive'>" + Kharma.l10n.report.offensiveContent + "</span></div><div><input type='checkbox' class='copyright' name='Copyright infringement'/><span class='copyright'>" + Kharma.l10n.report.copyrightInfringement + "</span></div><div><input type='checkbox' class='misleading' name='Misleading or false advertising'/><span class='misleading'>" + Kharma.l10n.report.misleading + "</span></div><div class='other'><input class='other' class='other' type='checkbox' name='Other'/><span class='other'>" + 
    Kharma.l10n.report.other + "</span></form></div>");
    a.append(b);
    a.append(d);
    a.find("form input.other").on("change", function() {
      p()
    });
    a.find("form span").on("click", function(b) {
      b = $(a.find("." + $(b.target).attr("class")));
      b.is(":checked") ? b.removeAttr("checked") : b.attr("checked", "checked");
      b.hasClass("other") && p()
    });
    h.show();
    Kharma.editorHelper.show(a);
    k.focus();
    b.on("click", function() {
      n()
    });
    d.on("click", function() {
      q()
    })
  };
  n = function() {
    Kharma.editorHelper.hide(a, h)
  };
  q = function() {
    r();
    n()
  };
  r = function() {
    var f = a.find("form input"), g = [], h;
    l === "violation" ? h = "/api/content/report-abuse/" + e.id + ".json" : l === "comment" ? h = "/api/content/report-abuse/" + e.id + "/comment/" + c + ".json" : l === "user" ? h = "/api/user/report-abuse/" + j + ".json" : l === "publisher" && (h = "/api/publisher/report-abuse/" + b + ".json");
    $.each(f, function(b, c) {
      var d = $(c);
      d.is(":checked") && (d.hasClass("other") ? g.push(d.attr("name") + ": " + $(a.find("input.reason")).val()) : g.push(d.attr("name")))
    });
    Kharma.io.post({uri:h, parameters:{title:i, description:g.length > 0 ? "[" + g.join(", ") + "] " + k.val() : k.val()}, onSuccess:function() {
      var a = e && e.id && parseInt(e.id, 10) || 0, b = parseInt(d.publisherId, 10) || 0;
      j = parseInt(d.userId, 10) || 0;
      l === "violation" ? Kharma.ga.view({name:"packageOther", id:a, title:"Package: Report Abuse Success", page:"/package/" + a + "/report/abuse/success", dimension8:"Packages"}) : l === "comment" ? Kharma.ga.view({name:"packageReview", id:a, commentId:parseInt(c, 10) || 0, title:a && c ? "Package: Report Abuse Success" : "404 Not Found", page:"/package/" + a + "/review/" + (parseInt(c, 10) || 0) + "/report/abuse/success", dimension8:"Packages"}) : l === "user" ? Kharma.ga.view({name:"account", 
      id:j, title:j ? "User Account: Report Abuse Success" : "401 Unauthorized", page:"/account/" + j + "/report/abuse/success", dimension8:"User Account"}) : l === "publisher" && Kharma.ga.view({name:"publisherOther", id:b, title:b ? "Publisher: Report Abuse Success" : "404 Not Found", page:"/publisher/" + b + "/report/abuse/success", dimension8:"Publishers"});
      new Kharma.TimedMessage({title:Kharma.l10n.report.thankYou, message:Kharma.l10n.report.thankYouMessage, timeout:5})
    }})
  };
  p = function() {
    var b = a.find(".reason");
    b.length === 0 ? (a.find("form div.other").append($("<input class='reason' type='text' name='reason' placeholder=''>")), b.focus()) : b.remove()
  };
  (function() {
    var b = $("#assetStore"), f = e && e.id && parseInt(e.id, 10) || 0, g = parseInt(d.publisherId, 10) || 0, i = parseInt(d.userId, 10) || 0;
    l === "violation" ? Kharma.ga.view({name:"packageOther", id:f, title:"Package: Report Abuse", page:"/package/" + f + "/report/abuse", dimension8:"Packages"}) : l === "comment" ? Kharma.ga.view({name:"packageReview", id:f, commentId:parseInt(c, 10) || 0, title:f && c ? "Package: Report Abuse" : "404 Not Found", page:"/package/" + f + "/review/" + (parseInt(c, 10) || 0) + "/report/abuse", dimension8:"Packages"}) : l === "user" ? Kharma.ga.view({name:"account", id:i, title:i ? "User Account: Report Abuse" : 
    "401 Unauthorized", page:"/account/" + i + "/report/abuse", dimension8:"User Account"}) : l === "publisher" && Kharma.ga.view({name:"publisherOther", id:g, title:g ? "Publisher: Report Abuse" : "404 Not Found", page:"/publisher/" + g + "/report/abuse", dimension8:"Publishers"});
    h = $("<div class='modalblocker'></div>");
    a = $("<div class='dialog messageform reviewform report'></div>");
    h.on("click", function(a) {
      a.stopPropagation();
      n()
    });
    b.append(h);
    b.append(a);
    m()
  })()
};
Kharma.LanguageDialog = function(g) {
  var h, a, d, c, e, b;
  c = function() {
    var c = $("<button>" + Kharma.l10n.button.cancel + "</button>"), g = $("<button>" + Kharma.l10n.button.submit + "</button>");
    e = $('<select id="languageSelect"></select>');
    a.append($("<h1>" + Kharma.l10n.language.changeLanguage + "</h1><br>"));
    a.append(e);
    $.each(Kharma.helper.getLanguages(), function(a, b) {
      e.append($('<option value="' + b.url + '" l10n="' + b.language + '">' + b.label + "</option>"))
    });
    a.append("<br>&nbsp;<br>");
    a.append(c);
    a.append(g);
    h.show();
    Kharma.editorHelper.show(a);
    h.on("click", function(a) {
      a.stopPropagation();
      d()
    });
    c.on("click", d);
    g.on("click", b)
  };
  d = function() {
    Kharma.editorHelper.hide(a, h)
  };
  b = function() {
    Kharma.io.post({uri:"/api/user/update-language.json", parameters:{language_code:$("#languageSelect :selected").attr("l10n")}, onSuccess:function() {
      Kharma.login.changeLanguageUrl(e.val())
    }})
  };
  (function() {
    var b = $("#assetStore");
    h = $("<div class='modalblocker'></div>");
    b.append(h);
    a = $("<div class='dialog message change-language'></div>");
    b.append(a);
    c()
  })(g)
};
Kharma.CategoriesPage = function() {
  var g = null, h;
  h = function() {
    Kharma.io.get({uri:"/api/home/categories.json", cacheExpiryPeriod:Kharma.Time.HOUR, onSuccess:function(a) {
      var d = $("#categories-tree");
      d.empty();
      a.json.categories[0] && a.json.categories[0].id !== "home" && a.json.categories.unshift({id:"home", name:Kharma.l10n.categories.home});
      Kharma.UI.categoryTreeList = new Kharma.UI.TreeList("categoriesPage", a.json);
      Kharma.UI.categoryTreeList.render(d)
    }})
  };
  g = new Kharma.Page("categories");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view({name:"categories"});
    if(g.load()) {
      return!0
    }
    g.setTemplate($('<div id="categories-tree"><span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span></div>'));
    g.addFooter();
    h();
    g.loadSideBar();
    g.setLoaded(!0)
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.ContentPage = function(g) {
  var h = null, a, d, c, e, b, f, i, l, j = g || {}, k, n = "", m, p, q, r, t, s, w, z, u, v, o, y, B, A, x, E, F, I, L, C, G, J, D, R, N, Q, P, M, H, U, S, O, T, V, W, K;
  q = function(a) {
    var b = $(".sharing"), c = $('<a class="report-violation" title="' + Kharma.l10n.report.violation + '"></a>');
    b.length === 1 && b.append(c);
    c.on("click", function() {
      new Kharma.ReportDialog({title:Kharma.l10n.report.violationTitle, message:Kharma.l10n.report.violationPackageMessage, type:"violation", packageData:a})
    })
  };
  t = function(a) {
    var b, c = [], d = new Kharma.List;
    Kharma.login.user && !Kharma.login.user.is_anonymous && d.getLists(function(a) {
      u(a.userLists, c, Kharma.l10n.lists.userLists, a.publisherLists);
      u(a.publisherLists, c, Kharma.l10n.lists.publisherLists, a.userLists);
      c.length === 0 && c.push("<li class='tag-description'>" + Kharma.l10n.lists.createList + "</li>")
    });
    $(".add-to-list").off("click").on("click", function(d) {
      var e = $(d.target);
      d.stopPropagation();
      Kharma.login.user && Kharma.login.user.is_anonymous ? (new Kharma.LoginDialog).show() : (b || (b = new Kharma.UI.DropDown({callback:function(b) {
        var c = $(b.target), b = c.attr("data-id");
        !c.hasClass("disabled") && b && Kharma.io.post({uri:"/api/list/package/" + b + "/" + h.id + ".json", pageSpecific:!0, onSuccess:function(b) {
          b.json.error ? new Kharma.TimedError({message:[Kharma.l10n.error.error, Kharma.l10n.lists.error], timeout:7}) : (c.addClass("disabled"), Kharma.utils.windowWrapper.scrollTo(0, 0), new Kharma.UI.Notification(Kharma.l10n.supplant(Kharma.l10n.lists.packageAdded, {listName:Kharma.helper.escapeHTML(b.json.result.name), packageName:a.title}), a))
        }})
      }, className:"add-to-list-drop-down", element:e, items:c})), b.toggle())
    })
  };
  z = function(a) {
    var b = $("#contentaside .item"), c = a.pubdate && a.pubdate.match("(\\w+) (\\d+), (\\d+)"), d = a.unity_versions, e = d && d.slice(0, -1).join(", ") + ", and " + d.slice(-1);
    b.append(Handlebars.templates.supportContent({firstPublishedAt:a.first_published_at, is:Kharma.l10n.pkg.is, license:a.license, licenseAgreement:Kharma.l10n.page.licenseAgreement, priceUpgrade:a.price_upgrade, publishedDate:c && c[1].substring(0, 3) + " " + c[2] + ", " + c[3], publisherWebsite:a.publisher.url, publisherWebsiteLabel:Kharma.l10n.page.publisherWebsite, releasedLabel:Kharma.l10n.page.released, size:a.sizetext, sizeLabel:Kharma.l10n.pkg.size, supportEmail:a.can_download && a.publisher.support_email, 
    supportEmailLabel:Kharma.l10n.page.supportEmail, supportWebsite:a.publisher.support_url, supportWebsiteLabel:Kharma.l10n.page.supportWebsite, unityVersions:d && d.length > 0, unityVersionsText:d && (d.length === 1 ? Kharma.l10n.supplant(Kharma.l10n.pkg.oneUnityVersion, {versions:d && d.join(",")}) : d.length === 2 ? Kharma.l10n.supplant(Kharma.l10n.pkg.twoUnityVersions, {versions:e}) : Kharma.l10n.supplant(Kharma.l10n.pkg.moreThanTwoUnityVersions, {versions:e})), upgradables:a.upgradables, upgradePrice:Kharma.l10n.pkg.upgradePrice, 
    version:a.version, versionLabel:Kharma.l10n.page.version}));
    $(".show-release-notes", b).on("click", function(a) {
      a.stopPropagation();
      T();
      return!1
    });
    $(".show-license", b).on("click", function(a) {
      a.stopPropagation();
      O();
      return!1
    })
  };
  u = function(a, b, c, d) {
    var e;
    a.length > 0 && (d.length !== 0 && b.push("<div class='drop-down-header'>" + c + "</div>"), $.each(a, function(a, c) {
      e = !1;
      c.package_ids && $.each(c.package_ids, function(a, b) {
        b === h.id && (e = !0)
      });
      e ? b.push("<li class='disabled' data-id='" + c.id + "'>" + $("<pre/>").text(c.name).html() + "</li>") : b.push("<li data-id='" + c.id + "'>" + $("<pre/>").text(c.name).html() + "</li>")
    }))
  };
  B = function(a) {
    var b = function() {
      Kharma.cart = Kharma.cart || new Kharma.Cart;
      Kharma.cart.addItem(a, !0)
    };
    (!Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated()) && Kharma.utils.windowWrapper.history.replaceState({}, "", location.pathname + location.hash.replace("/directpurchase", ""));
    if(Kharma.login && Kharma.login.user) {
      b()
    }else {
      $("#mainContent").off(Kharma.utils.events.onLoginSuccessful, b).on(Kharma.utils.events.onLoginSuccessful, b)
    }
  };
  x = function() {
    var a = $("#packageRecommendationsBox"), b = $("#peopleAlsoBought"), c = $("#peopleAlsoBoughtBox"), d = $("#recommendations");
    if(!Kharma.search) {
      Kharma.search = new Kharma.Search
    }
    b.show();
    d.show();
    Kharma.search.getRecommendations("/api/search/recommend.json", h.id, function(b) {
      R(b, Kharma.l10n.recommendations.title, a)
    }, a);
    Kharma.search.getRecommendations("/api/search/also-purchased.json", h.id, function(a) {
      R(a, Kharma.l10n.recommendations.customersAlsoPurchasedTitle, c)
    }, c)
  };
  W = function(b) {
    b.stopPropagation();
    b.preventDefault();
    new Kharma.ReviewDialog({commentID:null, packageID:h.id, publisherID:k, packageName:i.content.title, publisherName:i.content.publisher.label, ratingValue:a, downloaded:c})
  };
  E = function(a) {
    h.loadSideBar(a.category.id, function(b) {
      var c = $(".salesBadget"), d;
      c.length > 0 && (a.price_level11 ? d = 'url("/images/badges/level11-badge.png")' : b.daily && h.id === b.daily.id ? d = 'url("/images/badges/24hourdeals-2016-12.png")' : a.price_original && b.badge !== "" ? d = 'url("' + b.badge + '")' : a.overlay && (d = 'url("' + a.overlay + '")'), d && c.css("background-image", d).addClass("visible"))
    })
  };
  r = function() {
    var a = $("<button class='add-remove-wish-list'></button>");
    $(".add-remove-wish-list").length === 0 && ($(".add-to-list").length === 1 ? $(".add-to-list").before(a) : $(".details.linkbar").after(a));
    i.content.is_on_wishlist ? (a.addClass("remove"), a.attr("title", Kharma.l10n.wishList.remove)) : (a.removeClass("remove"), a.attr("title", Kharma.l10n.wishList.add));
    a.off().on("click", function() {
      if(!Kharma.wishList) {
        Kharma.wishList = new Kharma.WishList
      }
      Kharma.login.user.is_anonymous ? (new Kharma.LoginDialog).show() : a.hasClass("remove") ? (Kharma.ga.event({eventCategory:"Wishlist", nonInteraction:!0, eventAction:"Remove", eventLabel:"Package", dimension9:i.content.publisher.label, dimension10:i.content.title, metric5:-1}), Kharma.wishList.deleteFromWishList(i.content.id, function() {
        a.removeClass("remove");
        a.attr("title", Kharma.l10n.wishList.add);
        new Kharma.UI.Notification(Kharma.l10n.supplant(Kharma.l10n.wishList.packageRemoved, {packageName:Kharma.utils.windowWrapper.innerWidth() >= 767 ? i.content.title : ""}), i.content)
      })) : (Kharma.ga.event({eventCategory:"Wishlist", nonInteraction:!0, eventAction:"Add", eventLabel:"Package", dimension9:i.content.publisher.label, dimension10:i.content.title, metric5:1}), Kharma.wishList.addToWishList(i.content.id, function() {
        a.addClass("remove");
        a.attr("title", Kharma.l10n.wishList.remove);
        new Kharma.UI.Notification(Kharma.l10n.supplant(Kharma.l10n.wishList.packageAdded, {packageName:Kharma.utils.windowWrapper.innerWidth() >= 767 ? i.content.title : ""}), i.content)
      }))
    });
    $("#mainContent").on(Kharma.utils.events.onAddedToWishList, function() {
      a.addClass("remove")
    });
    $("#mainContent").on(Kharma.utils.events.onDeletedFromWishList + " " + Kharma.utils.events.onPurchaseSuccessful, function(b, c) {
      c && c.packageId === h.id && a.removeClass("remove")
    })
  };
  I = function() {
    Kharma.io.get({uri:"/api/content/overview/" + h.id + ".json", pageSpecific:!0, onSuccess:function(a) {
      var b, c = a.json;
      c.error === "not found" ? $.address.value("/404") : c.error === "disabled" ? (b = Kharma.l10n.supplant(Kharma.l10n.pkg.disabled, {name:c.content.title}), C(a, b)) : Kharma.download.getLocalPackageById("content", h.id, function(d) {
        Kharma.io.post({uri:"/api/content/user-overview/" + h.id + ".json", data:JSON.stringify(d), onSuccess:function(d) {
          var e, f = "", g, i = c.content.upgrades;
          if(c.error) {
            if(c.content) {
              c.content.can_download = d.json.content.can_download;
              d = 0;
              for(e = i.length;d < e;d++) {
                g = i[d], f += "<a href='#!/" + g.link.type + "/" + g.link.id + "'>" + g.title + " " + g.version + "</a><br>"
              }
              b = i.length > 0 ? Kharma.l10n.supplant(Kharma.l10n.pkg.upgraded, {list:f, name:c.content.title, version:c.content.version}) : Kharma.l10n.supplant(Kharma.l10n.pkg.deprecated, {name:c.content.title});
              C(a, b);
              $(".deprecated-downloads").off().on("click", function(a) {
                Kharma.login.user.is_anonymous && (a.preventDefault(), (new Kharma.LoginDialog).show({callback:function() {
                  $.address.value("account/downloads")
                }}))
              })
            }
          }else {
            G(a, d)
          }
          x(c.error)
        }})
      })
    }})
  };
  R = function(a, b, c) {
    var d = $(c.find(".body")), e = a.results || [];
    $(c.find("h2")).text(b);
    $(d.find(".loadarea")).hide();
    e.length > 0 ? (c.addClass("slider"), m = new Kharma.UI.SmallSlider({base:h, container:c, data:a})) : d.append("<p class='no-recommendations'>" + Kharma.l10n.recommendations.noRecommendations + "</p>")
  };
  C = function(a, b) {
    var c = $("#contentoverview"), d = $("#contentoverview h1"), e = a.json, f = e.content, c = $(c.find(".blocked")), g = f.title;
    $("#contentpage").addClass("error");
    h.clearElement(c);
    $("#contentoverview .background").hide();
    d.html(g);
    d.attr("title", g);
    c.append(h.createFullTemplate({data:f, error:e.error, message:b}));
    h.setPageTitle(g);
    E(f);
    f.can_download ? z(f) : $("#contentaside").hide();
    h.setLoaded(!0)
  };
  G = function(a, b) {
    var c = b.json.content;
    $("#contentpage .blocked").addClass("full");
    a.json.content.rating.user = c.rating.user;
    a.json.content.can_download = c.can_download;
    a.json.content.express_checkout = c.express_checkout;
    a.json.content.items_in_cart = c.items_in_cart;
    a.json.content.in_users_downloads = c.in_users_downloads;
    a.json.content.can_update = c.can_update;
    a.json.content.is_on_wishlist = c.is_on_wishlist;
    a.json.content.purchased_at = c.purchased_at;
    a.json.content.last_downloaded_at = c.last_downloaded_at;
    a.json.content.compatibility = c.compatibility;
    a.json.content.upgrade_package = c.upgrade_package;
    i = a.json;
    Q(i);
    h.setLoaded(!0);
    U(a)
  };
  D = function() {
    $("#adminstrip").find("#adminMode").removeClass("not-active");
    new Kharma.AdminContent({packageId:h.id, categoryId:f, publisherId:k, packageName:l})
  };
  Q = function(a) {
    var a = a.content, c = $("#contentpage");
    b = $("#contentoverview .full");
    f = a.category.id;
    k = a.publisher.id;
    l = a.title;
    h.setPageTitle(l);
    E(a);
    a.price_level11member ? c.addClass("level-11-sale") : a.price_original && c.addClass("sale");
    b.length > 0 && S(a);
    V(a);
    a.flags && !a.flags.no_content && ($("#packageContents").removeClass("hidden"), J(), new Kharma.UI.AssetHierarchy(d, a));
    Kharma.login && Kharma.login.isAdmin && $("#adminlayer").is(":visible") && D();
    h.activateLinks();
    z(a);
    (new Kharma.List).loadLists({base:h, callback:function(a) {
      e = a
    }, container:$("#packageContents"), header:Kharma.l10n.lists.packageLists, noResults:Kharma.l10n.lists.noPackageLists, noSlider:!0, url:"/api/content/lists/" + h.id + ".json"});
    h.addOpenGraph(a, Handlebars.templates.openGraphContent)
  };
  S = function(d) {
    var e = $('<div class="overview-text-overlay" />');
    d.category.multiple === "Y" && e.addClass("multiple-seats");
    d.rating && d.rating.user !== 0 && e.addClass("my-rating");
    h.clearElement(b);
    d.keyimage.big && $("#contentoverview .background").css("background-image", "url(" + d.keyimage.big + ")");
    b.append(e);
    h.createFull({contentPage:!0, element:e, data:d, callback:function() {
      h.setExternalLinks("fulldescription");
      $(".fulldescription.vscroll")
    }, level11:d.price_level11member});
    d.preview || L(d);
    q(d);
    (d.price_original || d.overlay || d.price_level11) && $(".background").append($("<div class='salesBadget'></div>"));
    if(d.publishnotes && d.publishnotes !== "n/a") {
      n = d.publishnotes, j.action === "release-notes" && T()
    }
    a = d.rating.user;
    c = d.last_downloaded_at;
    r();
    t(d)
  };
  L = function(a) {
    j.action === "assetkit" && j.actionParameter ? ($("#assetkits").show(), Kharma.io.get({uri:"/api/sale/assetkit/" + a.id + "/" + j.actionParameter + ".json", pageSpecific:!0, onSuccess:function(b) {
      b.json.assetkit ? v(a, b.json.assetkit) : $("#assetkits").remove()
    }})) : $("#assetkits").remove()
  };
  v = function(a, b) {
    var c = b.featured, d, e, f;
    $("#assetkits .banner").attr("src", b.banner);
    $("#assetkits .externallink").attr("href", b.link);
    $("#assetkits .quarter .item").each(function(b, g) {
      f = $(g);
      h.clearElement(f);
      if(b < c.length) {
        d = c[b];
        e = d.keyimage.small;
        if(e === null) {
          e = d.keyimage.icon, f.addClass("icon-bg")
        }
        h.setBackground({element:f, backgroundUrl:e, link:d.flags && d.flags.override_url ? d.url : "#!/" + d.link.type + "/" + d.link.id, callback:d.flags && d.flags.override_url && Kharma.unityEditor.isUnity4x && Kharma.unityEditor.openBrowser});
        h.createDetails(f, d);
        f.on("click", function() {
          Kharma.ga.event({eventCategory:"Asset Kits", nonInteraction:!0, eventAction:"Product Asset Kits", eventLabel:"Position " + (b + 1), dimension9:d.publisher.label, dimension10:d.title, dimension11:a.title})
        })
      }
    })
  };
  V = function(a) {
    var b = {}, c;
    if(a.images && a.images.length > 0) {
      c = a.images.length - 1;
      if(Kharma.unityEditor.isUnity4x()) {
        for(;c > -1;c--) {
          a.images[c].type !== "screenshot" && a.images.splice(c, 1)
        }
      }
      for(;c > -1;c--) {
        b[a.images[c].type] || (b[a.images[c].type] = []), b[a.images[c].type].indexOf(a.images[c].link) === -1 ? b[a.images[c].type].push(a.images[c].link) : a.images.splice(c, 1)
      }
      new Kharma.UI.ScreenShot(a.images)
    }
  };
  p = function(a, b) {
    var c, d = a.length;
    if(a && d > 0) {
      for(c = 0;c < d;c++) {
        $(a[c]).on("click", b)
      }
    }
  };
  J = function() {
    p($(".edit-review"), A);
    p($(".delete-review"), w);
    p($(".reply-review"), M);
    p($(".reply-reply"), P);
    p($(".edit-reply"), M);
    p($(".delete-reply"), s);
    p($(".yes"), function(a) {
      K($(a.target), 1)
    });
    p($(".no"), function(a) {
      K($(a.target), 0)
    });
    p($(".reportAbuse"), function(a) {
      new Kharma.ReportDialog({packageData:i.content, title:Kharma.l10n.report.title, message:Kharma.l10n.report.message, type:"comment", commentId:$(a.target).attr("data-id")})
    })
  };
  A = function(b) {
    b.stopPropagation();
    b.preventDefault();
    new Kharma.ReviewDialog({commentID:b.target.getAttribute("data-id"), packageID:h.id, publisherID:i.content.publisher.id, packageName:i.content.title, publisherName:i.content.publisher.label, ratingValue:a, downloaded:c})
  };
  w = function(a) {
    var b = parseInt(h.id, 10), c = parseInt(a.target.getAttribute("data-id"), 10);
    Kharma.ga.view({name:"packageReview", id:b, commentId:c || 0, title:b && c ? "Package: Delete Review" : "404 Not Found", page:"/package/" + b + "/review/" + (c || 0) + "/delete", dimension8:"Packages"});
    a.stopPropagation();
    a.preventDefault();
    new Kharma.TextMessage({title:Kharma.l10n.review.deleteReview, message:Kharma.l10n.review.deleteReviewMessage, withCancel:!0, options:{accept:Kharma.l10n.button.deleteButton, size:"small"}, callback:function(b) {
      b && y(a.target.getAttribute("data-id"))
    }})
  };
  y = function(a) {
    Kharma.io.del({uri:"/api/content/comments/" + h.id + "/" + a + ".json", pageSpecific:!0, onSuccess:function() {
      Kharma.ga.view({name:"packageReview", id:h.id, commentId:a || 0, title:h.id && a ? "Package: Delete Review Success" : "404 Not Found", page:"/package/" + h.id + "/review/" + (a || 0) + "/delete/success", dimension8:"Packages"});
      Kharma.ga.event({nonInteraction:!0, eventCategory:"Reviews", eventAction:"Delete Review", dimension8:"Packages", dimension9:i.content.publisher.label, dimension10:i.content.title, metric7:-1});
      Kharma.io.flushCacheKey("/api/content/comments/" + h.id + ".json");
      F.call(this)
    }})
  };
  M = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.ReplyReviewDialog({commentID:a.target.getAttribute("data-id"), packageID:h.id, packageName:i.content.title, publisherName:i.content.publisher.label})
  };
  P = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.ReplyReviewDialog({commentID:a.target.getAttribute("data-id"), packageID:h.id, replyReply:!0, packageName:i.content.title, publisherName:i.content.publisher.label})
  };
  s = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.TextMessage({title:Kharma.l10n.reply.deleteReply, message:Kharma.l10n.reply.deleteReplyMessage, withCancel:!0, options:{accept:Kharma.l10n.button.deleteButton, size:"small"}, callback:function(b) {
      var c = parseInt(a.target.getAttribute("data-id"), 10) || 0;
      b && (Kharma.ga.view({name:"packageReview", id:h.id, commentId:c || 0, title:h.id && c ? "Package: Delete Reply Success" : "404 Not Found", page:"/package/" + h.id + "/review/" + (c || 0) + "/delete/reply/success", dimension8:"Packages"}), Kharma.ga.event({nonInteraction:!0, eventCategory:"Reviews", eventAction:"Delete Replay", dimension8:"Packages", dimension9:i.content.publisher.label, dimension10:i.content.title, metric8:-1}), o(a.target.getAttribute("data-id")))
    }})
  };
  o = function(a) {
    Kharma.io.del({uri:"/api/content/comments/" + h.id + "/" + a + ".json", pageSpecific:!0, onSuccess:function() {
      Kharma.io.flushCacheKey("/api/content/comments/" + h.id + ".json");
      F.call(this)
    }})
  };
  T = function() {
    var a = parseInt(h.id, 10) || 0;
    if(n = n.replace(/<a/g, "<a target=_blank")) {
      Kharma.ga.view({name:"packageOther", id:a, title:"Package: Release notes", page:"/package/" + a + "/release-notes", dimension8:"Packages"}), new Kharma.TextMessage({title:Kharma.l10n.page.releaseNotes, message:n})
    }
  };
  F = function(a) {
    a || (j.action === "review" ? H() : Kharma.io.get({uri:"/api/content/comments/" + h.id + "/3.json", pageSpecific:!0, onSuccess:function(a) {
      N(a.json, "show")
    }}))
  };
  N = function(a, b) {
    var c = $("#contentcomments .body"), d = {admin:Kharma.login.isAdmin, comments:a.comments, data:a, deleteButton:Kharma.l10n.button.deleteButton, edit:Kharma.l10n.button.edit, isHelpful:Kharma.l10n.review.isHelpful, no:Kharma.l10n.button.no, noReviews:Kharma.l10n.review.noReviews, replyButton:Kharma.l10n.button.reply, reportAbuse:Kharma.l10n.report.title, showCount:!1, submittedVersion:i.content.version, previousVersion:Kharma.l10n.review.submittedVersion, complimentaryReview:Kharma.l10n.review.complimentaryReview, 
    writeReview:Kharma.l10n.review.writeReview, yes:Kharma.l10n.button.yes};
    c.empty();
    d = Handlebars.templates.comments(d);
    c.append(d);
    $(c.find(".write-review")).off().on("click", function(a) {
      W(a)
    });
    c = $(c.find(".show-all"));
    b === "show" ? c.text(Kharma.l10n.supplant(Kharma.l10n.page.showAllReviews, {count:a.count})) : c.text(Kharma.l10n.page.hideAllReviews);
    c.off().on("click", function() {
      b === "show" ? H() : F()
    });
    J()
  };
  K = function(a, b) {
    Kharma.io.post({uri:"/api/content/comment-vote/" + h.id + "/" + a.attr("data-id") + ".json", pageSpecific:!0, parameters:{is_helpful:b}, onSuccess:function() {
      Kharma.io.get({uri:"/api/content/comments/" + h.id + ".json", pageSpecific:!0, onSuccess:function(b) {
        $.each(b.json.comments, function(b, c) {
          if(c.id === a.attr("data-id")) {
            var d = $(a.find("h2")[0]);
            d.text(c.subject);
            d.append("<div class='helpful'>(" + c.is_helpful.score + " of " + c.is_helpful.count + " " + Kharma.l10n.review.helpful + ")</div>")
          }
        });
        a.parent().text(Kharma.l10n.review.thankYou)
      }})
    }})
  };
  H = function() {
    Kharma.io.get({uri:"/api/content/comments/" + h.id + ".json", pageSpecific:!0, onSuccess:function(a) {
      N(a.json, "hide");
      if(j.action === "review" && j.actionParameter) {
        $("html, body").scrollTop($(".review-id-" + j.actionParameter).offset().top), j.actionParameter = null
      }
    }})
  };
  U = function(a) {
    a.json.content.flags && !a.json.content.flags.no_review && ($("#contentcomments").removeClass("hidden"), F(void 0))
  };
  O = function() {
    var a = new Kharma.TextMessage({title:Kharma.l10n.page.license, message:'<span class="loadstatus loading">&nbsp;</span>'});
    Kharma.io.get({uri:"/api/content/license/" + h.id + ".json", pageSpecific:!0, onSuccess:function(b) {
      a.setMessage(b.json.result.license)
    }})
  };
  a = 0;
  h = new Kharma.Page(j);
  return{clear:h.clear, clearElement:h.clearElement, id:h.id, type:h.type, isLoaded:h.isLoaded, load:function() {
    var a = h.id || 0;
    Kharma.ga.view({name:"package", headPath:"/package/", id:parseInt(a, 10) || 0, dimension8:"Packages"});
    j.action === "directpurchase" && B(a);
    if(h.load()) {
      return!0
    }
    d = this;
    h.setTemplate(Handlebars.templates.contentPage({expand:Kharma.l10n.page.expand, packageContents:Kharma.l10n.page.packageContents, recommendations:Kharma.l10n.recommendations.title, peopleAlsoBought:Kharma.l10n.recommendations.customersAlsoPurchasedTitle, userReviews:Kharma.l10n.review.userReviews}));
    I();
    h.addFooter($(".main-content"))
  }, makeEditable:J, openAdminMode:D, renderComments:N, setLoaded:h.setLoaded, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setTemplate:h.setTemplate, showLicense:O, showReleaseNotes:T, startReview:W, onResize:function() {
    m && (Kharma.login.user.recommendationsSliderVariation === 2 ? (m.resize($("#packageRecommendationsBox")), m.resize($("#peopleAlsoBoughtBox"))) : m.resize());
    e && e.resize();
    h.onResize()
  }, versionRequired:h.versionRequired}
};
Kharma.LinkMakerPage = function(g) {
  var h = null, a = g || {}, h = new Kharma.Page("linkMaker");
  return{id:h.id, type:h.type, clear:function() {
    $("#searchArea").show();
    h.clear()
  }, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view({name:"linkMaker", dimension8:"Link Maker", title:"Link Maker"});
    h.load();
    $("#searchArea").hide();
    var d, c = document.location.href.match(/https?:\/\/\w+-(\w+)/), e = c ? location.protocol + "//api-" + c[1] + ".assetstore.unity3d.com/affiliate/link-maker/" : "https://api.assetstore.unity3d.com/affiliate/link-maker/";
    h.setTemplate(Handlebars.templates.linkMakerPage({l10n:Kharma.l10n.linkmaker, language:Kharma.login && Kharma.login.user ? Kharma.login.user.language_code : "en-US", aid:a.aid}));
    h.setPageTitle("Link Maker");
    h.setLoaded(!0);
    d = document.getElementById("linkMakerFrame");
    d.src = e;
    a.aid && (d.src += "?aid=" + a.aid);
    $("#aid-apply").on("click", function() {
      d.src = e + "?aid=" + $("#aid-value").val()
    })
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:function() {
    h.onResize()
  }}
};
Kharma.HomePage = function() {
  var g = null, h = null, a, d, c, e, b, f, i, l, j, k, n;
  a = function(b, c) {
    var d = $("<a class='livelink salesBadget'></a>"), e;
    $(c.find(".salesBadget")).length === 0 ? c.append(d) : d = $(c.find(".salesBadget"));
    b.price_level11member && Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member ? e = 'url("/images/badges/level11-badge.png")' : b.price_original ? k ? k.daily && b.id === k.daily.id ? e = 'url("/images/badges/24hourdeals-2016-12.png")' : k.badge !== "" && (e = 'url("' + k.badge + '")') : Kharma.io.get({uri:"/api/sale/results/10.json", onSuccess:function(d) {
      k = d.json;
      a(b, c)
    }}) : b.overlay && (e = 'url("' + b.overlay + '")');
    d.attr("href", "#!/" + b.link.type + "/" + b.link.id);
    d.css({"background-image":e, display:"block"})
  };
  d = function() {
    if(!Kharma.unityEditor.isUnity4x()) {
      var a = parseInt($.cookie("kharma_wbs"), 10) || -1, b = parseInt($.cookie("kharma_wbc"), 10) || -1;
      a === -1 && b === -1 && Kharma.login.user.show_intro ? b = a = 0 : a === -1 && b > 0 && (a = 0);
      a === 0 && b < 4 && (a = 1, b++, $.cookie("kharma_wbs", a, {path:"/", domain:".unity3d.com"}), $.cookie("kharma_wbc", b, {expires:365, path:"/", domain:".unity3d.com"}));
      a === 1 && $("#featured").prepend(Handlebars.templates.welcomeBanner({welcomeL10N:Kharma.l10n.welcome}))
    }
  };
  l = function() {
    Kharma.io.get({uri:"/api/home/featured.json", cacheExpiryPeriod:Kharma.Time.HOUR, pageSpecific:!0, onSuccess:function(a) {
      b(a.json.primary);
      f(a.json.primary);
      i.call(this, a.json.secondary);
      j.call(this, a.json.hottest);
      c.call(this, a.json.assetstoretools);
      e();
      n();
      d();
      g.activateLinks();
      g.setLoaded(!0)
    }})
  };
  b = function(b) {
    var c = $(".primaries");
    g.clearElement(c);
    h = new Kharma.UI.Slider({addSaleBanner:a, base:g, element:c, primaries:b})
  };
  f = function(a) {
    $(".quarter.primary-alt .item").each(function(b, c) {
      var d, e = $(c), f;
      g.clearElement(e);
      if(b < a.length) {
        f = a[b];
        d = f.link.type === "banner" ? f.keyimage.home_secondary : f.keyimage.small;
        if(d === null) {
          d = f.keyimage.icon, e.addClass("icon-bg")
        }
        g.setBackground({element:e, backgroundUrl:d, link:f.flags && f.flags.override_url || f.link.type === "banner" ? f.url : "#!/" + f.link.type + "/" + f.link.id, callback:f.flags && f.flags.override_url && Kharma.unityEditor.isUnity4x() && Kharma.unityEditor.openBrowser});
        f.link.type !== "banner" && g.createDetails(e, f);
        e.on("click", function() {
          Kharma.ga.event({eventCategory:"Promotion", nonInteraction:!0, eventAction:"Home Secondary", eventLabel:"Position " + (b + 1), dimension9:f.publisher && f.publisher.label, dimension10:f.title})
        })
      }
      $("a[href^='http']").attr("target", "_blank")
    })
  };
  i = function(a) {
    $(".quarter.secondary .item").each(function(b, c) {
      var d, e = $(c), f;
      g.clearElement(e);
      if(b < a.length) {
        f = a[b];
        d = f.link.type === "banner" ? f.keyimage.home_secondary : f.keyimage.small;
        if(d === null) {
          d = f.keyimage.icon, e.addClass("icon-bg")
        }
        g.setBackground({element:e, backgroundUrl:d, link:f.flags && f.flags.override_url || f.link.type === "banner" ? f.url : "#!/" + f.link.type + "/" + f.link.id, callback:f.flags && f.flags.override_url && Kharma.unityEditor.isUnity4x() && Kharma.unityEditor.openBrowser});
        f.link.type !== "banner" && g.createDetails(e, f);
        e.on("click", function() {
          Kharma.ga.event({eventCategory:"Promotion", nonInteraction:!0, eventAction:"Home Secondary", eventLabel:"Position " + (b + 1), dimension9:f.publisher && f.publisher.label, dimension10:f.title})
        })
      }
      $("a[href^='http']").attr("target", "_blank")
    })
  };
  j = function(a) {
    var b = $("#popresults");
    g.clearElement(b);
    new Kharma.UI.PaginationList({callback:g.miniLink, element:b, results:a.slice(0, 24), ga:{action:"mostPopular"}})
  };
  c = function(a) {
    var b = $("#assetstoretools");
    a && b.length > 0 && (g.clearElement(b), g.linkElement(b, a.link.type, a.link.id, Kharma.l10n.page.publishStuff))
  };
  e = function() {
    var a = $("#terms");
    a.length > 0 && a.prepend('<a href="http://unity3d.com/company/legal/as_terms" target="_blank">' + Kharma.l10n.page.termsOfService + '</a> &nbsp; <a href="http://unity3d.com/company/legal/privacy-policy#cookies" target="_blank">' + Kharma.l10n.page.cookies + "</a>")
  };
  n = function() {
    !Kharma.unityEditor.isEditor() && $.cookie("cookies") !== "accepted" && ($("body").append("<div class='cookie-dialog'>" + Kharma.l10n.page.cookieMessage + "</div>"), $(".cookie-dialog .blue-btn").on("click", function() {
      $.cookie("cookies", "accepted", {expires:365, path:"/", domain:".unity3d.com"});
      $(".cookie-dialog").remove()
    }))
  };
  g = new Kharma.Page("hom");
  return{id:g.id, type:g.type, clear:function() {
    h && h.clear();
    g.clear()
  }, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view({name:"home"});
    if(g.load()) {
      return!0
    }
    g.setTemplate(Handlebars.templates.homePage({mostPopular:Kharma.l10n.page.mostPopular}));
    g.addFooter($("#mainContent"));
    g.loadSideBar(null, function(a) {
      k = a;
      new Kharma.UI.Newsletter($("#sidebar"), "home", function() {
        Kharma.unityEditor.isEditor() || g.addSocial($("#sidebar"))
      })
    });
    l.call(this)
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:function() {
    g.onResize()
  }}
};
Kharma.Level11Page = function() {
  var g = null, h, a;
  h = function() {
    Kharma.io.get({uri:"/api/sale/level11.json", pageSpecific:!0, onSuccess:function(d) {
      g.load();
      g.setTemplate(Handlebars.templates.level11Page({data:d.json, discounted:Kharma.l10n.level11.discounted, free:Kharma.l10n.level11.free, level11:Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member ? Kharma.l10n.level11.level11member : Kharma.login && Kharma.login.user && Kharma.login.user.roles && !Kharma.login.user.roles.level11member && !Kharma.login.user.is_anonymous ? Kharma.l10n.level11.notLevel11member : Kharma.login && Kharma.login.user && 
      Kharma.login.user.roles && Kharma.login.user.is_anonymous ? Kharma.l10n.level11.loggedOut : ""}));
      $(".log-in").off().on("click", function() {
        (new Kharma.LoginDialog).show()
      });
      g.addFooter($("#mainContent"));
      g.loadSideBar();
      g.setPageTitle(Kharma.l10n.browserMenu.title.level11);
      a(d.json)
    }})
  };
  a = function(a) {
    var c;
    c = $("#resultsSale");
    $("#catresults").empty();
    a && a.level11sale && a.level11sale.results && a.level11sale.results.length > 0 && (c = $(c.find(".item")), c.empty(), new Kharma.UI.PaginationList({callback:g.miniLink, level11:!0, element:c, results:a.level11sale.results}));
    a && a.level11free && a.level11free.results && a.level11free.results.length > 0 && (c = $("#resultsFree .item"), c.empty(), new Kharma.UI.PaginationList({callback:g.miniLink, level11:!0, element:c, results:a.level11free.results}));
    g.setLoaded(!0)
  };
  g = new Kharma.Page("level11");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view({name:"level11", dimension8:"Sales", title:"Level 11"});
    h()
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.AssetKitsPage = function() {
  var g = null, h = null, a, d;
  a = function() {
    Kharma.io.get({uri:"/api/sale/assetkits.json", pageSpecific:!0, onSuccess:function(a) {
      d(a.json)
    }})
  };
  d = function(a) {
    a = Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitspromember ? {pro:!0, banner:a.primary.assetkitspromember.header_url, primary:a.primary.assetkitspromember.assetkits, secondary:a.secondary.assetkitspromember.assetkits} : {pro:!1, banner:a.primary.assetkitsplusmember.header_url, primary:a.primary.assetkitsplusmember.assetkits, secondary:a.secondary.assetkitsplusmember.assetkits};
    $(a.primary).each(function(a, b) {
      b.subscription = "https://store.unity.com?utm_source=store&utm_campaign=2016-06-AS-Kits&utm_medium=kits_carousel_" + b.title.toLowerCase().replace(/\s/g, "_")
    });
    g.setTemplate(Handlebars.templates.assetKitsPage({assetkits:a}));
    g.addFooter($("#mainContent"));
    g.loadSideBar();
    g.setPageTitle(Kharma.l10n.browserMenu.title.assetkits);
    h = new Kharma.UI.Slider({shuffle:!1, template:"assetkits", base:g, element:$(".primaries"), primaries:a.primary, options:{pro:a.pro ? !0 : !1}});
    g.setLoaded(!0)
  };
  g = new Kharma.Page("askits");
  return{id:g.id, type:g.type, clear:function() {
    h && h.clear();
    g.clear()
  }, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view({name:"askits", dimension8:"Sales", title:"AssetKits"});
    g.load();
    a()
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:function() {
    g.onResize()
  }}
};
Kharma.ListPage = function(g) {
  var h = null, a, d, c, e, b, f = (g || {}).id, i, l, j, k, n, m;
  i = function() {
    $(".littleblock .remove").off("click").on("click", function() {
      var a = $(this).parent(), c = $(a).attr("data-link");
      Kharma.io.del({uri:"/api/list/package/" + b + "/" + c + ".json", pageSpecific:!0, onSuccess:function() {
        a.remove();
        $(".littleblock").length === 0 && ($("#catresults").append('<p class="no-results">' + Kharma.l10n.lists.noPackages + "</p>"), $(".status").text("(" + Kharma.l10n.lists.draft + ")"))
      }})
    });
    $("#packageList").sortable({disabled:!1, containment:"parent", stop:function(a, c) {
      var d = $(c.item).attr("data-link");
      d && Kharma.io.post({uri:"/api/list/package/" + b + "/" + d + ".json", pageSpecific:!0, parameters:{position:c.item.index() + 1}})
    }, tolerance:"pointer"});
    $("#packageList").disableSelection();
    $(c.find(".upload-file")).on("change", function() {
      var c = $(this), d = c[0].files[0], e, f = $(".banner"), g = new FileReader;
      g.addEventListener("load", function() {
        f.css("background", "url(" + g.result + ")");
        f.text("");
        e = new FormData;
        e.append("file", c[0].files[0]);
        a.updateBanner(e, b)
      }, !1);
      d && /\.(jpe?g|png|gif)$/i.test(d.name) && g.readAsDataURL(d)
    })
  };
  l = function(a) {
    $(c.find(".list-edit")).off("click").on("click", function(b) {
      c.hasClass("inset") ? j(b, a) : m(b, a)
    })
  };
  j = function(f, g) {
    var i = c.find(".banner"), h;
    c.removeClass("inset");
    $(f.target).text(Kharma.l10n.lists.editLabel);
    $(".littleblock .remove").remove();
    $("#packageList").sortable("disable");
    $(".littleblock").removeClass("shake");
    h = $(c.find(".edit-name")).val();
    e.text() !== h && a.updateName(h, b);
    e.text(h);
    $(c.find(".edit-name")).replaceWith(e);
    h = $(c.find(".edit-description")).val();
    d.text() !== h && a.updateDescription(h, b);
    d.text(h);
    $(c.find(".edit-description")).replaceWith(d);
    g && i.css("backgroundImage").indexOf("upload-image.png") !== -1 && i.removeClass("upload")
  };
  k = function() {
    Kharma.io.get({uri:"/api/home/list/" + f + ".json", pageSpecific:!0, onSuccess:function(a) {
      c = $(Handlebars.templates.listPage({editable:a.json.editable, l10nLists:Kharma.l10n.lists}));
      h.setTemplate(c);
      h.addFooter($("#mainContent"));
      h.loadSideBar();
      n(a.json)
    }, onFailure:function() {
      $.address.value("#!/404")
    }})
  };
  n = function(a) {
    var d = a.banner, e = $(c.find(".banner")), f = a.creator, g;
    g = a.name;
    var i = $("#catresults");
    b = a.id;
    h.setPageTitle(g);
    d !== "" && (e.html('<img src="' + d + '" width="100%" height="100%" />'), e.show());
    d = $("<h1/>").text(g);
    e.after(d);
    Kharma.login.user && (Kharma.login.user.id === a.user_id || Kharma.login.user.id === a.publisher_id) && d.after("<div class='status'>(" + Kharma.l10n.lists[a.status] + ")</div>");
    g = $(".list-creator");
    f && (a.user_id || a.publisher_id) ? (g.text(Kharma.l10n.lists.createdBy + f), d = a.user_id ? "#!/user/" + a.user_id : "#!/search/page=1/sortby=popularity/query=publisher:" + a.publisher_id, g.attr("href", d)) : g.remove();
    a.status !== "draft" && (f = new Kharma.UI.SharingBar({type:"list", title:a.name, publisher:f, twitterMessage:a.name + " " + Kharma.l10n.page.by + " " + f, id:a.slug, url:a.short_url}), e.after(f.getSharingBar()));
    a.publisher_id === null && a.user_id === null ? $(".list-header").html(a.description || Kharma.l10n.lists.emptyDescription) : $(".list-header").text(a.description || Kharma.l10n.lists.emptyDescription);
    i.empty();
    a.packages && a.packages.length > 0 ? new Kharma.UI.PaginationList({callback:h.miniLink, element:i, results:a.packages}) : i.append('<p class="no-results">' + Kharma.l10n.lists.noPackages + "</p>");
    l(a.publisher_id);
    h.setLoaded(!0)
  };
  m = function(a, b) {
    var f = c.find(".banner"), g, h, l;
    c.addClass("inset");
    $(a.target).text(Kharma.l10n.lists.finishEditing);
    $(".littleblock").append($("<div class='remove'></div>"));
    $(".littleblock").addClass("shake");
    h = $("<input class='edit-name' type='text'>");
    e = $(c.find("h1"));
    h.val(e.text());
    e = e.replaceWith(h);
    g = $("<input class='edit-description' type='text'>");
    d = $(c.find(".list-header"));
    g.val(d.text());
    d = d.replaceWith(g);
    if(b && (f.addClass("upload"), !Kharma.unityEditor.isEditor() || !Kharma.unityEditor.isUnity4x())) {
      l = $("<input class='upload-file' type='file'>"), g = $(c.find(".custom-file-upload")), g.length === 0 && h.after($("<button for='file-upload' class='custom-file-upload basic light'>" + Kharma.l10n.lists.uploadBanner + "</button><div class='image-info'>" + Kharma.l10n.lists.uploadImage + "</div>")), $(c.find(".custom-file-upload")).off("click").on("click", function() {
        $(".upload-file").click()
      }), c.find(".upload-file").length === 0 && f.after(l)
    }
    i()
  };
  h = new Kharma.Page("lis");
  a = new Kharma.List;
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view({name:"list", id:"/" + f});
    h.load();
    k()
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:h.onResize}
};
Kharma.ListsPage = function() {
  var g = null, h, a, d, c, e, b, f;
  d = function() {
    var b = $(a.find(".user-lists")), c = $(a.find(".publisher-lists"));
    b.sortable({axis:"y", containment:"parent", stop:function(a, b) {
      var c = $(b.item).attr("data-id");
      c && h.updatePosition(b.item.index() + 1, c)
    }, tolerance:"pointer"});
    b.disableSelection();
    c.sortable({axis:"y", containment:"parent", stop:function(a, b) {
      var c = $(b.item).attr("data-id");
      c && h.updatePosition(b.item.index() + 1, c)
    }, tolerance:"pointer"});
    c.disableSelection()
  };
  c = function() {
    d();
    a.find(".list-delete").off("click").on("click", h.showWarning);
    a.find(".list-publish").off("click").on("click", h.publish);
    a.find(".create-new-user").off("click").on("click", function(a) {
      b(a)
    });
    a.find(".create-new-publisher").off("click").on("click", function(a) {
      b(a, Kharma.login.user.publisher)
    })
  };
  e = function() {
    h.getLists(f)
  };
  b = function(b, d) {
    var e = $(Handlebars.templates.listDetails({create:!0, l10nButton:Kharma.l10n.button, l10nLists:Kharma.l10n.lists, list:[{publisher_id:d, status:Kharma.l10n.lists["private"]}], url:Kharma.utils.windowWrapper.location.getOrigin() + Kharma.utils.windowWrapper.location.getPathName()}));
    b.stopPropagation();
    b.preventDefault();
    d ? ($(a.find(".publisher-lists .empty")).hide(), $(a.find(".publisher-lists")).prepend(e)) : ($(a.find(".user-lists .empty")).hide(), $(a.find(".user-lists")).prepend(e));
    e = $(a.find("input"));
    e.focus();
    h.addInputEvents({callback:function() {
      c()
    }, input:e, publisherId:d})
  };
  f = function(b) {
    var d = [{className:"user-lists", header:Kharma.l10n.lists.userLists, list:b.userLists}];
    Kharma.login.user.publisher && d.push({className:"publisher-lists", header:Kharma.l10n.lists.publisherLists, list:b.publisherLists});
    a = $(Handlebars.templates.listsPage({createNewPublisherList:Kharma.l10n.lists.createNewPublisherList, createNewUserList:Kharma.l10n.lists.createNewUserList, lists:d, listsLabel:Kharma.l10n.lists.lists, listsLength:(b.userLists ? b.userLists.length : 0) + (b.publisherLists ? b.publisherLists.length : 0), loading:Kharma.l10n.page.loadingPage, noLists:Kharma.l10n.lists.noLists, publisher:Kharma.login.user.publisher}));
    g.setTemplate(a);
    c();
    g.setLoaded(!0)
  };
  g = new Kharma.Page("account/lists");
  h = new Kharma.List;
  return{id:g.id, type:g.type, clear:function() {
    g.clear()
  }, isLoaded:g.isLoaded, load:function() {
    var a = Kharma.login.user && Kharma.login.user.id ? parseInt(Kharma.login.user.id, 10) : 0;
    Kharma.ga.view({name:"account", id:a, title:a ? "User Account: Lists" : "401 Unauthorized", page:"/account/" + a + "/lists", dimension8:"User Account"});
    g.load();
    g.setPageTitle(Kharma.l10n.lists.title);
    a !== 0 ? ($("#pageload").hide(), e()) : Kharma.history.goBackOrHome()
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.PreviewPage = function(g) {
  var h = null, g = g || {}, a = g.id || "0", d = g.packageVersionId || "0", c, e, b, f, i, l, j, k, n;
  i = function() {
    h.loadSideBar(c, function(a) {
      f = a
    })
  };
  j = function(a) {
    var d = a.content, a = d.min_unity_version;
    c = d.category.id;
    b = d.publisher.id;
    e = d.title;
    h.setTemplate(Handlebars.templates.previewPage({content:d, id:h.id, minimumUnityVersion:a && Kharma.l10n.supplant(Kharma.l10n.page.minimumUnityVersion, {minimumVersion:a.substr(0, a.lastIndexOf(".") + 2)}), saleData:f, sizeText:Kharma.l10n.preview.size, versionText:Kharma.l10n.page.version}));
    a = $("#contentaside .item");
    h.createFull({element:$(".overview-text-overlay"), data:d, preview:!0});
    setTimeout(function() {
      h.setExternalLinks("fulldescription")
    }, 100);
    h.setPageTitle(e);
    i();
    d.images && d.images.length > 0 && new Kharma.UI.ScreenShot(d.images);
    a.find(".show-release-notes").on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      n(d.publishnotes);
      return!1
    })
  };
  l = function(a) {
    var b = a.content;
    $(".quarter").each(function(a, c) {
      var d = $(c).find(".item");
      h.createDetails(d, b);
      d.attr({"data-template":b.link.type, "data-link":b.link.id})
    });
    new Kharma.UI.PaginationList({callback:h.miniLink, element:$("#popresults"), results:[a.content, a.content, a.content]})
  };
  n = function(a) {
    a && a !== "n/a" && new Kharma.TextMessage({title:Kharma.l10n.page.releaseNotes, message:a})
  };
  k = function() {
    Kharma.io.get({uri:"/api/content/preview/" + a + "/" + d + ".json", pageSpecific:!0, onSuccess:function(a) {
      a = a.json;
      j.call(this, a);
      h.setLoaded(!0);
      l(a)
    }})
  };
  h = new Kharma.Page("pre");
  return{clear:h.clear, getRequestUrl:h.getRequestUrl, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view({dimension8:"Previews", name:"preview", id:parseInt(a, 10), title:"Package Preview"});
    if(h.load()) {
      return!0
    }
    Kharma.login.loginRequired(function() {
      if(Kharma.login.user.is_anonymous) {
        $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
          k()
        })
      }else {
        k()
      }
    })
  }, onResize:function() {
    h.onResize()
  }, openAdminMode:function() {
    $("#adminstrip").find("#adminMode").removeClass("not-active");
    new Kharma.AdminContent({packageId:a, packageVersionId:d, categoryId:c, isPreview:!0, publisherId:b, packageName:e})
  }, setLoaded:h.setLoaded, setRequestUrl:h.setRequestUrl, type:h.type}
};
Kharma.Page404 = function() {
  var g = null, h, g = new Kharma.Page("404");
  return{id:g.id, type:g.type, clear:g.clear, isLoaded:g.isLoaded, load:function() {
    Kharma.ga.view({name:"404"});
    g.load();
    g.loadSideBar();
    h = $(Handlebars.templates.page404({message:Kharma.l10n.page.notFound.message, notFound:Kharma.l10n.page.notFound.title}));
    g.setTemplate(h);
    Kharma.io.get({uri:"/api/home/random.json", pageSpecific:!0, onSuccess:function(a) {
      var d = h.find(".list");
      d.empty();
      new Kharma.UI.PaginationList({callback:g.miniLink, element:d, results:a.json.results})
    }})
  }, setRequestUrl:g.setRequestUrl, getRequestUrl:g.getRequestUrl, setLoaded:g.setLoaded, onResize:g.onResize}
};
Kharma.SalePage = function(g) {
  var h = null, a = (g || {}).id, d, c;
  d = function() {
    Kharma.io.get({uri:a ? "/api/sale/results/0/" + a + ".json" : "/api/sale/results.json", pageSpecific:!0, onSuccess:function(a) {
      var b = $(".ended");
      $.isEmptyObject(a.json) && Kharma.history.goBackOrHome();
      a.json.status !== "active" ? ($("div.ended").text(Kharma.l10n.sale.ended), b.show()) : b.hide();
      c.call(this, a.json)
    }})
  };
  c = function(a) {
    var b = "", c = "", d = parseInt(a.remaining, 10), g = parseInt(a.days_left, 10);
    a.banner !== "" ? c = a.banner : (b = a.title && a.title !== "" ? a.title : Kharma.l10n.sale.title, c = "/images/sale.jpg");
    b && $("#saleHeadline").text(b);
    h.setPageTitle(a.title);
    c && $(".banner").css("background-image", "url(" + c + ")");
    a.countdown && d > 0 && Kharma.saleHelper.startCountdown(d, $("#countdown"), Kharma.l10n.sale.remainingTime);
    $("#catresults").empty();
    a.results && a.results.length > 0 ? new Kharma.UI.PaginationList({callback:h.miniLink, element:$("#catresults"), results:a.results, withSorting:!0}) : ($("#catresults").parent().hide(), $("#noSale").show(), new Kharma.UI.Newsletter($("#noSaleBody"), "home", function() {
      Kharma.unityEditor.isEditor() || h.addSocial($("#noSaleBody"))
    }));
    g > 0 && (a = g > 1 ? g + " " + Kharma.l10n.sale.daysLeft : Kharma.l10n.sale.lastDay, $("#salepage .banner").append('<div class="daysLeft">' + a + "</div>"));
    h.setLoaded(!0)
  };
  (function() {
    h = new Kharma.Page("sal");
    a === "daily" && Kharma.io.get({uri:"/api/sale/results/10.json", cacheExpiryPeriod:Kharma.Time.HOUR, onSuccess:function(a) {
      return Kharma.history.newPage(a.json.daily ? new Kharma.ContentPage({id:a.json.daily.id}) : new Kharma.HomePage)
    }})
  })();
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view({name:"sale", dimension8:"Sales"});
    h.load();
    h.setTemplate(Handlebars.templates.salePage());
    h.addFooter($("#mainContent"));
    h.loadSideBar(h.id);
    d.call(this)
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:h.onResize}
};
Kharma.SearchPage = function(g) {
  var h = null, a = null, d, c = g || {}, e = c.page, b, f = c.sortby, i = c.search, l, j, k, n, m, p, q, r, t, s, w, z, u, v, o, y, B, A, x, E, F, I, L, C, G, J, D, R, N, Q, P, M, H, U, S, O, T, V;
  l = function(a) {
    a = a && a.replace(/["']/g, "");
    $("#featured").show();
    Kharma.history.getCurrentPage().type === "sea" && y(a);
    Kharma.ga.view({dimension8:"Categories", headPath:"/category/", id:parseInt(a, 10), name:"category"});
    N(a);
    $("#mainContent").off(Kharma.utils.events.onCategoryTreeLoaded).on(Kharma.utils.events.onCategoryTreeLoaded, function() {
      Kharma.history.getCurrentPage().type === "sea" && y(a)
    })
  };
  j = function() {
    var a, b = function(a) {
      a.preventDefault();
      a.stopPropagation();
      t("hover", a.data.value)
    }, c = function(a) {
      a.preventDefault();
      a.stopPropagation();
      var b = i.slice(), a = a.data.value;
      b.push("rating:" + (a !== 5 ? a + "+" : a));
      J(b)
    }, d, e = $(".supported-version");
    for(a = 1;a <= 5;a++) {
      d = $("#" + a + "Rating"), d.off("click").on("click", {value:a}, c), d.off("mouseenter").on("mouseenter", {value:a}, b)
    }
    e.off("focusout").on("focusout", function() {
      var a = $(this).val();
      a && S(a)
    });
    e.off("keydown").on("keydown", function() {
      var a = event.keyCode, b = $(this).val();
      switch(a) {
        case 13:
          b && S(b)
      }
    });
    if(Kharma.login && Kharma.login.user && Kharma.login.user.unity_version) {
      $(".unity-version").on("click", function() {
        S(Kharma.login.user.unity_version)
      })
    }
    $("#searchOptions .free").off("click").on("click", function() {
      var a = i.slice(), b = $(this);
      $(".price-slider").find(".value-indicator").remove();
      b.hasClass("inset") ? (b.removeClass("inset"), H(a, "price:0"), H(a, "free"), $(".price-slider").slider("value", 2E3)) : ($("#searchOptions .paid").removeClass("inset"), b.addClass("inset"), a.push("price:0"));
      J(a)
    });
    $("#searchOptions .paid").off("click").on("click", function() {
      var a = !1, b, c, d = i.slice();
      b = $(this);
      if(b.hasClass("inset")) {
        b.removeClass("inset");
        b = 0;
        for(c = d.length;b < c;b++) {
          d[b].indexOf("price:>") !== -1 && (d[b] === "price:>0" ? d.splice(b, 1) : d[b] = d[b].replace(":>", ":"))
        }
      }else {
        $("#searchOptions .free").removeClass("inset");
        b.addClass("inset");
        b = 0;
        for(c = d.length;b < c;b++) {
          d[b].indexOf("price:") !== -1 && d[b].indexOf(">") === -1 && (d[b] = d[b].replace(":", ":>"), d[b] === "price:>0" && $(".price-slider").slider("value", 2E3), a = !0)
        }
        a || d.push("price:>0")
      }
      J(d)
    });
    $("#searchOptions .packages").off("click").on("click", function() {
      var a = i.slice(), b = $(this);
      $(".price-slider").find(".value-indicator").remove();
      b.hasClass("inset") ? (b.removeClass("inset"), H(a, "type:content")) : ($("#searchOptions .paid").removeClass("inset"), b.addClass("inset"), a.push("type:content"));
      J(a)
    });
    $("#searchOptions .lists").off("click").on("click", function() {
      var a = i.slice(), b = $(this);
      $(".price-slider").find(".value-indicator").remove();
      b.hasClass("inset") ? (b.removeClass("inset"), H(a, "type:list")) : ($("#searchOptions .paid").removeClass("inset"), b.addClass("inset"), a.push("type:list"));
      J(a)
    })
  };
  n = function(a) {
    $("#publisherpage").show();
    Kharma.ga.view({name:"publisher", id:parseInt(a, 10) || 0, dimension8:"Publishers", headPath:"/publisher/"});
    Kharma.io.get({uri:"/api/publisher/overview/" + a + ".json", pageSpecific:!0, onSuccess:function(b) {
      M(b.json, a);
      h.addOpenGraph(b.json.overview, Handlebars.templates.openGraphPublisher)
    }})
  };
  p = function() {
    $(".search-tag .close").off().on("click", function() {
      var a = $(this).parent();
      $("#searchInput").val("");
      U(a);
      a.remove();
      J(i)
    });
    $(".search-tag:not(.category):not(.publisher)").off().on("click", function() {
      var a = $("#searchInput"), b = $(this), c = b.text();
      a.val() === "" && (b.remove(), a.val(c.indexOf(" ") === -1 ? c : '"' + c + '"'), a.focus())
    })
  };
  w = function(a) {
    var b = 0;
    a <= 327 ? b = 7 * (a / 327) + 1 : a > 327 && a <= 601 ? b = 7 * (a - 327) / 274 + 7 : a > 601 && a <= 852 ? b = 16 * (a - 601) / 251 + 14 : a > 852 && a <= 1104 ? b = 90 * (a - 852) / 252 + 30 : a > 1104 && a <= 1360 ? b = 90 * (a - 1104) / 256 + 90 : a > 1360 && a <= 1607 ? b = 180 * (a - 1360) / 247 + 180 : a > 1607 && a <= 1825 && (b = 1460 * (a - 1607) / 218 + 365);
    return b.toFixed(0)
  };
  z = function(a) {
    var b = 0;
    a <= 339 ? b = 5 * a / 339 : a > 339 && a <= 669 ? b = 5 * (a - 339) / 330 + 5 : a > 669 && a <= 926 ? b = 10 * (a - 669) / 257 + 10 : a > 926 && a <= 1202 ? b = 30 * (a - 926) / 276 + 20 : a > 1202 && a <= 1508 ? b = 50 * (a - 1202) / 306 + 50 : a > 1508 && a <= 1782 ? b = 100 * (a - 1508) / 274 + 100 : a > 1782 && a <= 2E3 && (b = 1800 * (a - 1782) / 218 + 200);
    return b.toFixed(0)
  };
  u = function(a) {
    var b = 0;
    a <= 753 ? b = 5 * a / 753 + 1 : a > 753 && a <= 1326 ? b = 45 * (a - 753) / 573 + 5 : a > 1326 && a <= 1960 ? b = 50 * (a - 1326) / 634 + 50 : a > 1960 && a <= 2498 ? b = 150 * (a - 1960) / 538 + 100 : a > 2498 && a <= 3051 ? b = 250 * (a - 2498) / 553 + 250 : a > 3051 && a <= 3556 ? b = 500 * (a - 3051) / 505 + 500 : a > 3556 && a <= 4E3 && (b = 3E3 * (a - 3556) / 444 + 1E3);
    return b.toFixed(0)
  };
  v = function() {
    $("#categoryTree a").off("click").on("click", function(a) {
      var b = $(a.target), c = b.attr("data-path"), b = b.attr("class") && b.attr("class").split(" "), d, e;
      if(Kharma.history.getCurrentPage().type === "sea") {
        if(a.preventDefault(), a.stopPropagation(), c === "Home") {
          $("#mainContent").off(Kharma.utils.events.onCategoryTreeLoaded), y(), $.address.value("/home")
        }else {
          a = 0;
          for(e = b.length;a < e;a++) {
            c = b[a].indexOf("cat-"), c !== -1 && (d = b[a].substr(c + 4))
          }
          y(d);
          i.push("category:" + d);
          J(i)
        }
      }
    })
  };
  k = function() {
    $(".price-slider").slider({orientation:"horizontal", range:"min", min:0, max:2E3, value:2E3, slide:function(a, b) {
      s($(".price-slider"), z(b.value))
    }, stop:function(a, b) {
      var c = $("#searchOptions .free"), d = $("#searchOptions .paid"), e, f = i.slice(), g = b.value;
      e = z(g);
      g === 2E3 ? (d.hasClass("inset") ? f.push("price:>0") : H(f, "price:"), $(".price-slider").find(".value-indicator").remove(), c.removeClass("inset")) : d.hasClass("inset") && e > 0 ? (c.removeClass("inset"), f.push("price:>0-" + e)) : (e > 0 && c.removeClass("inset"), d.removeClass("inset"), f.push(e === 0 ? "price:0" : "price:0-" + e));
      J(f)
    }}).each(function() {
      for(var a = [{name:"FREE", place:"0%"}, {name:5, place:"16%"}, {name:10, place:"30%"}, {name:20, place:"44%"}, {name:50, place:"58%"}, {name:100, place:"72%"}, {name:200, place:"86%"}, {name:"\u221e", place:"100%"}], b = 0;b < a.length;b++) {
        $(".price-slider").append($("<label>" + a[b].name + "</label>").css("left", a[b].place))
      }
    })
  };
  m = function(a) {
    $("." + a + "-slider").slider({orientation:"horizontal", range:"min", min:0, max:1825, value:1825, slide:function(b, c) {
      s($("." + a + "-slider"), w(c.value))
    }, stop:function(b, c) {
      var d, e = i.slice(), f = c.value;
      d = w(f);
      f === 1825 ? (H(e, a + ":"), $("." + a + "-slider").find(".value-indicator").remove()) : e.push(a + ":" + d);
      J(e)
    }}).each(function() {
      for(var b = [{name:"1d", place:"0%"}, {name:"7d", place:"16%"}, {name:"14d", place:"30%"}, {name:"1m", place:"44%"}, {name:"3m", place:"58%"}, {name:"6m", place:"72%"}, {name:"1y", place:"86%"}, {name:"5y", place:"98%"}], c = 0;c < b.length;c++) {
        $("." + a + "-slider").append($("<label>" + b[c].name + "</label>").css("left", b[c].place))
      }
    })
  };
  q = function() {
    $(".size-slider").slider({orientation:"horizontal", range:"min", min:0, max:4E3, value:4E3, slide:function(a, b) {
      s($(".size-slider"), u(b.value))
    }, stop:function(a, b) {
      var c, d = i.slice(), e = b.value;
      c = u(e);
      e === 4E3 ? (H(d, "size:"), $(".size-slider").find(".value-indicator").remove()) : d.push("size:0-" + c);
      J(d)
    }}).each(function() {
      for(var a = [{name:"1MB", place:"0%"}, {name:"5MB", place:"16%"}, {name:"50MB", place:"30%"}, {name:"100MB", place:"44%"}, {name:"250MB", place:"58%"}, {name:"500MB", place:"72%"}, {name:"1GB", place:"86%"}, {name:"4GB", place:"98%"}], b = 0;b < a.length;b++) {
        $(".size-slider").append($("<label>" + a[b].name + "</label>").css("left", a[b].place))
      }
    })
  };
  s = function(a, b) {
    var c = $("<div class='value-indicator'>" + b + "</div>");
    a.find(".value-indicator").length === 0 ? a.find(".ui-slider-handle").append(c) : (c = a.find(".value-indicator"), c.text(b));
    c.removeClass("one-number two-numbers three-numbers");
    b = parseInt(b, 10);
    b < 10 ? c.addClass("one-number") : b > 9 && b < 100 ? c.addClass("two-numbers") : b > 1E3 && c.addClass("three-numbers")
  };
  r = function() {
    var a, b, c = $("#searchForm"), d = $(c.find(".search-tag")), e = [];
    b = 0;
    for(a = d.length;b < a;b++) {
      e.push($(d[b]).text())
    }
    if(JSON.stringify(e) !== JSON.stringify(i)) {
      d.remove();
      for(b = i.length - 1;b >= 0;b--) {
        i[b] = decodeURIComponent(i[b]), i[b].indexOf("<") !== -1 && i[b].indexOf(">") !== -1 && (i[b] = i[b].replace(/</g, "&lt;").replace(/>/g, "&gt;")), i[b].indexOf("category:") !== -1 ? $.isEmptyObject(Kharma.helper.categories) ? T(b) : (a = i[b].substr(i[b].indexOf(":") + 1), a = isNaN(a) ? a : Kharma.helper.categories[a], c.prepend($("<div class='search-tag category'><span>category:" + a + "</span><img src='/images/icons/close-red.png' class='close'></div>"))) : i[b].indexOf("publisher:") !== 
        -1 ? V(b) : c.prepend($("<div class='search-tag'><span>" + i[b] + "</span><img src='/images/icons/close-red.png' class='close'></div>"))
      }
    }
    h.changeSearchInputWidth();
    p()
  };
  t = function(a, b) {
    $(".rating-option .rating").children().each(function(c, d) {
      c < b ? $(d).addClass(a) : $(d).removeClass(a)
    })
  };
  o = function() {
    var a = $("#searchOptions .free");
    a.hasClass("inset") || a.addClass("inset");
    $(".price-slider").slider("value", 0)
  };
  y = function(a) {
    Kharma.UI.categoryTreeList && Kharma.UI.categoryTreeList.refresh(a);
    h.loadTopList("/api/category/top/paid/" + a + "/10.json", "paid", $("#topBox .top-paid"));
    h.loadTopList("/api/category/top/free/" + a + "/10.json", "free", $("#topBox .top-free"));
    h.loadTopList("/api/category/top/grossing/" + a + "/10.json", "grossing", $("#topBox .top-grossing"));
    h.loadTopList("/api/category/top/latest/" + a + "/10.json", "latest", $("#topBox .top-latest"))
  };
  B = function(a) {
    var b, c, d;
    if(a.indexOf("free") !== -1) {
      o()
    }else {
      if(a.indexOf("price:") !== -1) {
        if(a.substring(a.indexOf(":") + 1) === "0") {
          o()
        }else {
          if(a.substring(a.indexOf(":") + 1) === ">0") {
            $("#searchOptions .paid").addClass("inset")
          }else {
            if(a.indexOf("-") !== -1) {
              b = a.substring(a.indexOf(":") + 1, a.indexOf("-")).trim();
              c = a.substr(a.indexOf("-") + 1).trim();
              a = parseFloat(c);
              if(b === "0" || b === ">0") {
                a <= 5 ? d = 339 * a / 5 : a > 5 && a <= 10 ? d = 339 + 66 * (a - 5) : a > 10 && a <= 20 ? d = 669 + 25.7 * (a - 10) : a > 20 && a <= 50 ? d = 926 + 9.2 * (a - 20) : a > 50 && a <= 100 ? d = 1202 + 6.12 * (a - 50) : a > 100 && a <= 200 ? d = 1508 + 2.74 * (a - 100) : a > 200 && (d = 1782 + 0.12 * (a - 200)), $(".price-slider").slider("value", d)
              }
              b === ">0" ? ($("#searchOptions .paid").addClass("inset"), $("#searchOptions .free").removeClass("inset")) : b === "0" && (c || $("#searchOptions .free").addClass("inset"), $("#searchOptions .paid").removeClass("inset"))
            }else {
              a.indexOf(">") !== -1 && ($("#searchOptions .paid").addClass("inset"), $("#searchOptions .free").removeClass("inset"), $(".price-slider").slider("value", 2E3))
            }
          }
        }
      }
    }
    c && s($(".price-slider"), c)
  };
  A = function(a) {
    var b;
    if(a.indexOf("rating:") !== -1) {
      b = a.substring(a.indexOf(":") + 1).trim();
      b.indexOf("+") !== -1 && (b = b.substr(0, b.indexOf("+")));
      for(a = 1;a <= 5;a++) {
        a < parseInt(b, 10) + 1 ? $("#" + a + "Rating").addClass("selected") : $("#" + a + "Rating").removeClass("selected")
      }
    }
  };
  x = function(a, b) {
    var c, d;
    a.indexOf(b + ":") !== -1 && (c = parseFloat(a.substr(a.indexOf(":") + 1).trim()), c >= 1 && c <= 7 ? d = 46.7 * (c - 1) : c > 7 && c <= 14 ? d = 327 + 39.14 * (c - 7) : c > 14 && c <= 30 ? d = 601 + 15.6875 * (c - 14) : c > 30 && c <= 90 ? d = 852 + 2.8 * (c - 30) : c > 90 && c <= 180 ? d = 1104 + 2.84 * (c - 90) : c > 180 && c <= 365 ? d = 1360 + 1.37 * (c - 180) : c > 365 && (d = 1607 + 0.15 * (c - 365)), $("." + b + "-slider").slider("value", d))
  };
  E = function() {
    var a, b, c;
    a = 0;
    for(b = i.length;a < b;a++) {
      c = decodeURIComponent(i[a]).toLowerCase(), A(c), B(c), L(c), I(c), F(c), x(c, "released"), x(c, "updated")
    }
  };
  F = function(a) {
    var b, c;
    a.indexOf("size:") !== -1 && a.indexOf("-") !== -1 && (b = a.substring(a.indexOf(":") + 1, a.indexOf("-")).trim(), a = a.substr(a.indexOf("-") + 1).trim(), a = parseFloat(a), b === "0" && (a <= 5 ? c = 753 * (a - 1) / 5 : a > 5 && a <= 50 ? c = 753 + 12.7 * (a - 5) : a > 50 && a <= 100 ? c = 1326 + 12.68 * (a - 50) : a > 100 && a <= 250 ? c = 1960 + 3.59 * (a - 100) : a > 250 && a <= 500 ? c = 2498 + 2.212 * (a - 250) : a > 500 && a <= 1E3 ? c = 3051 + 1.01 * (a - 500) : a > 1E3 && (c = 3556 + 
    0.148 * (a - 1E3)), $(".size-slider").slider("value", c)))
  };
  I = function(a) {
    var b = $(".lists"), c = $(".packages");
    a.indexOf("only:") !== -1 && (a.substr(a.indexOf(":") + 1) === "lists" ? (b.addClass("inset"), c.removeClass("inset")) : (b.removeClass("inset"), c.addClass("inset")))
  };
  L = function(a) {
    var b = $(".supported-version");
    a.indexOf("version:") !== -1 && b.val(a.substring(a.indexOf(":") + 1, a.length))
  };
  C = function(a) {
    Kharma.io.get({uri:"/api/search/publisher_id_from_name.json", parameters:{q:a}, pageSpecific:!0, onSuccess:function(a) {
      $("#mainContent").trigger(Kharma.utils.events.onPublisherId, a.json.id)
    }})
  };
  G = function(a) {
    Kharma.io.get({uri:"/api/search/publisher_name_from_id.json", parameters:{q:a}, pageSpecific:!0, onSuccess:function(a) {
      $("#mainContent").trigger(Kharma.utils.events.onPublisherName, a.json.name)
    }})
  };
  J = function(a) {
    $("#search").addClass("dim");
    Kharma.io.get({uri:"/api/search/url.json", parameters:{q:a, order_by:f, page:e}, onSuccess:function(a) {
      var b, a = a.json.url;
      h.type === "sea" && a !== "/home" ? (Kharma.utils.windowWrapper.history.replaceState({}, document.title, Kharma.utils.windowWrapper.location.getHref().replace(Kharma.utils.windowWrapper.location.getHash(), "#!" + a)), $.address.path(a), b = a.substring(a.indexOf("query=") + 6) ? a.substring(a.indexOf("query=") + 6).split("&") : [], $.each(b, function(a, c) {
        b[a] = decodeURIComponent(c)
      }), a = decodeURIComponent(a), O(a.substring(a.indexOf("page=") + 5, a.indexOf("sortby=") - 1)), f = a.substring(a.indexOf("sortby=") + 7, a.indexOf("query=") - 1), P(b), Q()) : $.address.value(a)
    }})
  };
  D = function(a) {
    var b = $("#cattitle"), c, d;
    h.addOpenGraph(a, Handlebars.templates.openGraphCategory);
    if(b) {
      c = a.title, b.html(c), h.setPageTitle(c), d = a.featured, $(".quarter .item").each(function(a, b) {
        var e, f = $(b), g;
        h.clearElement(f);
        if(a < d.length) {
          g = d[a];
          e = g.keyimage.small;
          if(e === null) {
            e = g.keyimage.icon, f.addClass("icon-bg")
          }
          h.setBackground({element:f, backgroundUrl:e, link:g.flags && g.flags.override_url ? g.url : "#!/" + g.link.type + "/" + g.link.id, callback:g.flags && g.flags.override_url && Kharma.unityEditor.isUnity4x && Kharma.unityEditor.openBrowser});
          h.createDetails(f, g);
          f.on("click", function() {
            Kharma.ga.event({eventCategory:"Promotion", nonInteraction:!0, eventAction:"Category Secondary", eventLabel:"Position " + (a + 1), dimension9:g.publisher.label, dimension10:g.title, dimension11:c})
          })
        }
      })
    }
  };
  N = function(a) {
    Kharma.io.get({uri:"/api/category/featured/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      D(a.json)
    }})
  };
  Q = function() {
    if(!Kharma.search) {
      Kharma.search = new Kharma.Search
    }
    Kharma.search.search(i, function(a) {
      $("#search").removeClass("dim");
      R(a);
      d = !0;
      $("#mainContent").trigger(Kharma.utils.events.onResultsLoaded)
    }, e, f)
  };
  R = function(a) {
    var b = $("#catresults"), c, d, g = !1, l = a.results;
    if(i && i.length > 0) {
      c = 0;
      for(d = i.length;c < d;c++) {
        if(i[c].indexOf("free") !== -1 || i[c] === "price:0") {
          g = !0
        }
      }
    }
    h.clearElement(b);
    l && l.length > 0 ? new Kharma.UI.PaginationList({search:i, callback:h.miniLink, callback2:h.miniList, element:b, noPriceSorting:g, page:e, results:l, searchPage:!0, sortBy:f, total:a.total, withSorting:!0, withPagination:!0, ga:{action:"searchResult", label:i, value:l.length}}) : l.length === 0 && b.append('<p class="noresults">' + Kharma.l10n.search.noResults + "</p>")
  };
  P = function(a) {
    var b, c = $("#featured"), d = $("#publisherpage");
    $("#smallSlider").hide();
    i = a ? a : i || [];
    if(i.length === 1) {
      if(b = decodeURIComponent(i[0].substr(i[0].indexOf(":") + 1)), i[0].indexOf("category:") !== -1) {
        if($.isEmptyObject(Kharma.helper.categories)) {
          $("#mainContent").off(Kharma.utils.events.onCategoryTreeLoaded).on(Kharma.utils.events.onCategoryTreeLoaded, function() {
            l(!isNaN(b) ? b : Kharma.helper.categories[b.toLowerCase()])
          })
        }else {
          l(!isNaN(b) ? b : Kharma.helper.categories[b.toLowerCase()])
        }
      }else {
        i[0].indexOf("publisher:") !== -1 ? (h.setPageTitle(i), c.hide(), d.show(), $("#smallSlider").show()) : (h.setPageTitle(i), c.hide(), d.hide(), $("#smallSlider").hide())
      }
    }else {
      h.setPageTitle(i), c.hide(), d.hide()
    }
    E();
    j();
    r()
  };
  M = function(c, d) {
    var e = c.overview, f = $("#contentoverview"), g = $("#publisherpage"), i = f.find(".blocked"), l = $('<a class="report-violation" title="' + Kharma.l10n.report.violation + '"></a>');
    h.clearElement(i);
    h.setPageTitle(e.name);
    e.keyimage.big && f.find(".background").css("background-image", "url(" + e.keyimage.big + ")");
    i.append(Handlebars.templates.publisherPageFull({name:e.name, description:e.description, rating:e.rating && e.rating.average !== -1 && Kharma.l10n.rating.rating, ratingValue:e.rating && e.rating.average !== -1 && (new Kharma.UI.Rating({count:e.rating.count, value:e.rating.average, classes:"inline"})).render()[0].outerHTML}));
    f.find(".sharing").length === 0 && ($(".details-container").after((new Kharma.UI.SharingBar({id:d, type:"publisher", title:e.name, url:e.short_url})).getSharingBar()), $(".details-container .sharing").append(l));
    l.on("click", function() {
      new Kharma.ReportDialog({title:Kharma.l10n.report.violationTitle, message:Kharma.l10n.report.violationPublisherMessage, type:"publisher", publisherId:d})
    });
    h.setExternalLinks("fulldescription");
    g.find("#contentaside .item").empty();
    g.find("#contentaside .item").append(Handlebars.templates.supportContentPublisher({publisherWebsite:Kharma.l10n.page.publisherWebsite, supportWebsite:Kharma.l10n.page.supportWebsite, supportEmail:e.support_email, supportEmailLabel:Kharma.l10n.page.supportEmail, supportUrl:e.support_url, url:e.url}));
    a.loadLists({base:h, callback:function(a) {
      b = a
    }, container:$("#featured"), header:Kharma.l10n.lists.publisherLists, noResults:Kharma.l10n.lists.noPublisherLists, url:"/api/publisher/lists/" + d + ".json"});
    Q()
  };
  H = function(a, b) {
    for(var c = 0, d = a.length;c < d;c++) {
      a[c] && a[c].indexOf(b) !== -1 && a.splice(c, 1)
    }
  };
  U = function(a) {
    var b, c, d, e = a.text(), f;
    if(e.indexOf("price:") !== -1) {
      H(i, "price:"), $("#searchOptions .free").removeClass("inset"), $("#searchOptions .paid").removeClass("inset"), a = $(".price-slider"), a.find(".value-indicator").remove(), a.slider("value", 2E3)
    }else {
      if(e.indexOf("size:") !== -1) {
        H(i, "size:"), $(".size-slider").slider("value", 4E3)
      }else {
        if(e.indexOf("released:") !== -1) {
          H(i, "released:"), $(".released-slider").slider("value", 1825)
        }else {
          if(e.indexOf("updated:") !== -1) {
            H(i, "updated:"), $(".updated-slider").slider("value", 1825)
          }else {
            if(e.indexOf("rating:") !== -1) {
              H(i, "rating:");
              for(a = 1;a <= 5;a++) {
                d = $("#" + a + "Rating"), d.removeClass("selected")
              }
            }else {
              e.indexOf("version:") !== -1 ? (H(i, "version:"), $(".supported-version").val("")) : e.indexOf("only:") !== -1 ? (H(i, "type:"), $("#searchOptions .lists").removeClass("inset"), $("#searchOptions .packages").removeClass("inset")) : (e.indexOf("category:") !== -1 && (f = e.substr(e.indexOf(":") + 1), a = isNaN(parseInt(f, 10)) ? Kharma.helper.categories[f] : f, e = "category:" + (a || f), b = i.indexOf(e), b > -1 && i.splice(b, 1), e = "category:" + Kharma.helper.categories[a]), e.indexOf("publisher:") !== 
              -1 && (f = e.substr(e.indexOf(":") + 1), c = isNaN(parseInt(f, 10)) ? Kharma.helper.publishers[f] : f, Kharma.helper.publishers ? e = "publisher:" + f : V(0, function() {
                e = "publisher:" + (c || f);
                b = i.indexOf(e);
                b > -1 && i.splice(b, 1)
              }), b = i.indexOf(e), b > -1 && i.splice(b, 1), e = "publisher:" + Kharma.helper.publishers[f]), e.indexOf("<") !== -1 && e.indexOf(">") !== -1 && (e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;")), b = i.indexOf(e), b > -1 && i.splice(b, 1))
            }
          }
        }
      }
    }
  };
  S = function(a) {
    var b = i.slice();
    b.push("version:" + a);
    J(b)
  };
  O = function(a) {
    e = a
  };
  T = function(a) {
    var b = $("#mainContent");
    b.off(Kharma.utils.events.onCategoryTreeLoaded).on(Kharma.utils.events.onCategoryTreeLoaded, {i:a}, function(a) {
      var a = a.data.i, c;
      Kharma.history.getCurrentPage().type === "sea" && i[a] ? (c = i[a].substr(i[a].indexOf(":") + 1), a = isNaN(parseInt(c, 10)) ? c : Kharma.helper.categories[c], $("#searchForm").prepend($("<div class='search-tag category'><span>category:" + a + "</span><img src='/images/icons/close-red.png' class='close'></div>")), p(), h.changeSearchInputWidth(), l(!isNaN(c) ? c : Kharma.helper.categories[c.toLowerCase()])) : b.off(Kharma.utils.events.onCategoryTreeLoaded)
    })
  };
  V = function(a, b) {
    var c = $("#mainContent"), d = i[a];
    isNaN(d.substr(d.indexOf(":") + 1)) ? C(d) : G(d);
    c.off(Kharma.utils.events.onPublisherName).on(Kharma.utils.events.onPublisherName, {i:a}, function(a, c) {
      var d = a.data.i, e = i[d].substr(i[d].indexOf(":") + 1);
      Kharma.helper.publishers[c] = e;
      b ? b() : Kharma.history.getCurrentPage().type === "sea" && i[d] && (i.length === 1 && n(e), $("#searchForm").prepend($("<div class='search-tag publisher'><span>publisher:" + c + "</span><img src='/images/icons/close-red.png' class='close'></div>")), p(), h.changeSearchInputWidth())
    });
    c.off(Kharma.utils.events.onPublisherId).on(Kharma.utils.events.onPublisherId, {i:a}, function(a, c) {
      var d = a.data.i, e = i[d].substr(i[d].indexOf(":") + 1);
      c && (Kharma.helper.publishers[c] = e);
      b ? b() : Kharma.history.getCurrentPage().type === "sea" && i[d] && (i.length === 1 && c && n(c), $("#searchForm").prepend($("<div class='search-tag publisher'><span>publisher:" + e + "</span><img src='/images/icons/close-red.png' class='close'></div>")), p(), h.changeSearchInputWidth())
    })
  };
  h = new Kharma.Page("sea", c);
  a = new Kharma.List;
  return{id:h.id, type:h.type, clear:h.clear, changeSearchInputWidth:h.changeSearchInputWidth, getUrl:J, isLoaded:h.isLoaded, load:function() {
    var a = $("#mainContent"), b;
    if(!h.load()) {
      h.setTemplate(Handlebars.templates.search()), b = $(Handlebars.templates.searchOptions({age:Kharma.l10n.search.age, applyFilter:Kharma.l10n.search.applyFilter, currency:Kharma.login.user.currency === "USD" ? "$" : "\u20ac", daysAgo:Kharma.l10n.search.daysAgo, free:Kharma.l10n.search.free, mb:Kharma.l10n.search.mb, listsOnly:Kharma.l10n.search.listsOnly, packagesOnly:Kharma.l10n.search.packagesOnly, paid:Kharma.l10n.search.paid, price:Kharma.l10n.search.price, minimumRating:Kharma.l10n.search.minimumRating, 
      released:Kharma.l10n.search.released, resetAll:Kharma.l10n.search.resetAll, size:Kharma.l10n.search.size, to:Kharma.l10n.search.to, unityVersion:Kharma.login && Kharma.login.user && Kharma.login.user.unity_version, updated:Kharma.l10n.search.updated, version:Kharma.l10n.search.version})), a.prepend(b), Kharma.localStorage.getItem("kharma.search.options", function(a) {
        var c = $(".filters");
        a === "true" || !a ? (b.show(), c.addClass("show-options"), $("#publisherpage").addClass("show-options")) : a === "false" && (b.hide(), c.removeClass("show-options"), $("#publisherpage").removeClass("show-options"))
      }), k(), q(), m("released"), m("updated"), i = c.search, a.off(Kharma.utils.events.onCategoryTreeLoaded).on(Kharma.utils.events.onCategoryTreeLoaded, v), a.on(Kharma.utils.events.onPageLoadComplete, function() {
        if(i.length === 1 && i[0] === "snow" && !Kharma.snow) {
          Kharma.snow = new Kharma.Snow
        }
      }), P(), $("#searchForm .search-tag").length !== 0 && $("#searchInput").removeAttr("placeholder"), h.addFooter(a), h.changeSearchInputWidth(), h.loadSideBar(i[0] && i[0].indexOf("publisher:") !== -1 ? null : i[0] && i[0].indexOf(":") !== -1 ? i[0].substr(i[0].indexOf(":") + 1) : null, function() {
        h.addTopSaleList("sea")
      }), d = !1, a.on(Kharma.utils.events.onResultsLoaded, function() {
        d && h.setLoaded(!0)
      }), Q()
    }
  }, loadResults:Q, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, reloadSearch:P, resetAll:function() {
    var a;
    a = $(".price-slider");
    var b = $(".size-slider"), c, d = $(".released-slider"), e = $(".updated-slider"), f = $(".supported-version");
    a.slider("value") !== 2E3 && (H(i, "price:"), a.slider("value", 2E3));
    if($("#searchOptions .rating div.selected").length > 0) {
      H(i, "rating:");
      for(a = 1;a <= 5;a++) {
        c = $("#" + a + "Rating"), c.removeClass("selected")
      }
    }
    f.val() !== "" && (H(i, "version:"), f.val(""));
    b.slider("value") !== 4E3 && (H(i, "size:"), b.slider("value", 4E3));
    d.slider("value") !== 1825 && (H(i, "released:"), d.slider("value", 1825));
    e.slider("value") !== 1825 && (H(i, "updated:"), e.slider("value", 1825));
    $(".inset").removeClass("inset");
    $(".value-indicator").remove()
  }, resetFilters:U, setLoaded:h.setLoaded, setPage:O, setSorting:function(a) {
    f = a
  }, onResize:function() {
    b && b.resize();
    h.changeSearchInputWidth();
    h.onResize()
  }}
};
Kharma.UserPage = function(g) {
  var h = null, a = null, g = g || {}, d = g.id || "0", c, e, b, f, i, l, j, k, n, m;
  e = function(a) {
    var c = a.target.getAttribute("data-id"), d = a.target.getAttribute("data-package-id");
    a.stopPropagation();
    a.preventDefault();
    new Kharma.TextMessage({title:Kharma.l10n.review.deleteReview, message:Kharma.l10n.review.deleteReviewMessage, withCancel:!0, options:{accept:Kharma.l10n.button.deleteButton, size:"small"}, callback:function(a) {
      a && b(d, c)
    }})
  };
  b = function(a, b) {
    Kharma.login.user && Kharma.io.del({uri:"api/content/comments/" + a + "/" + b + ".json", pageSpecific:!0, onSuccess:function() {
      j()
    }})
  };
  f = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.ReviewDialog({callback:j, commentID:a.target.getAttribute("data-id"), packageID:a.target.getAttribute("data-package-id")})
  };
  i = function() {
    l();
    h.setLoaded(!0)
  };
  l = function() {
    Kharma.io.get({uri:"/api/user/overview/" + d + ".json", pageSpecific:!0, onSuccess:function(a) {
      $("#pageload").hide();
      k(a.json)
    }})
  };
  k = function(b) {
    var e = b.name, f = e && e.indexOf(" ") !== -1 ? e.substring(0, e.indexOf(" ")) : e;
    h.setPageTitle(e);
    Kharma.io.get({uri:"/api/user/toprated/" + d + ".json", pageSpecific:!0, onSuccess:function(g) {
      h.setTemplate(Handlebars.templates.userPage({bioText:b.bio, gravatar:Kharma.l10n.user.gravatar, highestRatedAssets:Kharma.l10n.user.highestRatedAssets, name:f, profile:Kharma.l10n.user.profile, reportAbuse:Kharma.l10n.report.title, reviews:Kharma.l10n.review.reviews, username:e, wishListName:Kharma.l10n.supplant(Kharma.l10n.wishList.title, {user:f}), noRatedPackages:Kharma.l10n.user.noRatedPackages, topRated:g.json.toprated}));
      h.addFooter($("#mainContent"));
      b.keyimage && b.keyimage.small && $(".bioimage").attr("src", b.keyimage.small);
      $("#userBox .reportAbuse").on("click", function() {
        new Kharma.ReportDialog({title:Kharma.l10n.report.title, message:Kharma.l10n.report.messageBiography, type:"user", userId:d})
      });
      n();
      a.loadLists({base:h, callback:function(a) {
        c = a
      }, container:$("#commentandrated"), header:Kharma.l10n.supplant(Kharma.l10n.lists.userListsName, {user:f}), noResults:Kharma.l10n.lists.noUserLists, url:"/api/user/lists/" + d + ".json"});
      j()
    }})
  };
  j = function() {
    Kharma.io.get({uri:"/api/user/comments/" + d + ".json", pageSpecific:!0, onSuccess:function(a) {
      m(a.json)
    }})
  };
  m = function(a) {
    var a = {admin:Kharma.login.isAdmin, comments:a.comments, data:a, deleteButton:Kharma.l10n.button.deleteButton, editButton:Kharma.l10n.button.edit, noReviews:Kharma.l10n.user.noPostedReviews, reportAbuse:Kharma.l10n.report.title}, b = $("#comments .body").empty();
    b.append(Handlebars.templates.userPageComments(a));
    b.find(".edit-review").on("click", f);
    b.find(".delete-review").on("click", e);
    b.find(".report-abuse").on("click", function(a) {
      new Kharma.ReportDialog({packageData:{id:$(a.target).attr("data-package-id")}, title:Kharma.l10n.report.title, message:Kharma.l10n.report.message, type:"comment", commentId:$(a.target).attr("data-id")})
    })
  };
  n = function() {
    var a = $("#wishList .body"), b;
    if(!Kharma.wishList) {
      Kharma.wishList = new Kharma.WishList
    }
    Kharma.wishList.getWishList(d, function(c, e) {
      a.empty();
      c.length > 0 ? (b = new Kharma.UI.ShowMoreList({callback:h.miniLink, results:c, element:a, withSorting:!0}), e > 9 && b.addShowAllLink("/wishlist/" + d + "/page=1/sortby=addeddate")) : a.append('<p class="noresults">' + Kharma.l10n.wishList.empty + "</p>")
    }, null, null, 9)
  };
  h = new Kharma.Page("use", g);
  a = new Kharma.List;
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view({name:"profile", id:"/" + parseInt(d, 10), title:"User Profile", dimension8:"User Profiles"});
    h.load();
    h.loadSideBar(null, function() {
      h.addTopSaleList("use")
    });
    $("#mainContent").on(Kharma.utils.events.onDeletedFromWishList + " " + Kharma.utils.events.onPurchaseSuccessful, function() {
      n()
    });
    i()
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:function() {
    c && c.resize();
    h.changeSearchInputWidth();
    h.onResize()
  }}
};
Kharma.WishListPage = function(g) {
  var h = null, g = g || {}, a = g.page, d = g.id, c, e = g.sortby, b, f;
  f = function() {
    if(!Kharma.wishList) {
      Kharma.wishList = new Kharma.WishList
    }
    Kharma.wishList.getWishList(d, function(a, d) {
      b(a, d);
      c = !0;
      $("#mainContent").trigger(Kharma.utils.events.onResultsLoaded)
    }, e, a)
  };
  b = function(b, c) {
    var f, g = $("#catresults");
    g.empty();
    b.length > 0 ? new Kharma.UI.PaginationList({callback:h.miniLink, element:g, page:a, results:b, sortBy:e, total:c, wishList:d, withSorting:!0, withPagination:!0}) : g.append('<p class="noresults">' + Kharma.l10n.wishList.empty + "</p>");
    f = g.find(".wish-list-buy");
    g = g.find(".wish-list");
    Kharma.login.user && !Kharma.login.user.is_anonymous && Kharma.login.user.id === d ? (f.show(), g.show()) : (Kharma.login.user && !Kharma.login.user.is_anonymous ? f.show() : f.hide(), g.hide())
  };
  h = new Kharma.Page("wis", g);
  return{id:h.id, type:h.type, clear:h.clear, isLoaded:h.isLoaded, load:function() {
    Kharma.ga.view({name:"wishlist", id:parseInt(d, 10), title:"User Wishlist", dimension8:"User Profiles"});
    if(h.load()) {
      return!0
    }
    h.setTemplate(Handlebars.templates.wishList());
    h.addFooter($("#mainContent"));
    h.loadSideBar(null, function() {
      h.addTopSaleList("wis")
    });
    c = !1;
    $("#mainContent").on(Kharma.utils.events.onResultsLoaded, function() {
      c && h.setLoaded(!0)
    });
    $("#mainContent").on(Kharma.utils.events.onDeletedFromWishList + " " + Kharma.utils.events.onPurchaseSuccessful, function() {
      f()
    });
    Kharma.io.get({uri:"/api/user/overview/" + d + ".json", pageSpecific:!0, onSuccess:function(a) {
      a = a.json.name;
      a = a.indexOf(" ") !== -1 ? a.substring(0, a.indexOf(" ")) : a;
      a = Kharma.l10n.supplant(Kharma.l10n.wishList.title, {user:a});
      $("#cattitle").text(a);
      h.setPageTitle(a)
    }});
    f()
  }, setRequestUrl:h.setRequestUrl, getRequestUrl:h.getRequestUrl, setLoaded:h.setLoaded, onResize:h.onResize}
};
Kharma.AccountPage = function() {
  var g = null, h = !1, a, d, c, e, b, f, i, l, j, k, n, m, p, q, r;
  a = function(a) {
    $(".body .bio").on("click", c);
    $(".billing-address.body").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      $(this).hasClass("loading") || Kharma.addressHelper.editAddress(function(a) {
        a && b()
      })
    });
    $(".language button").on("click", d);
    $(".redeem-voucher button").on("click", q);
    if(a.express_checkout) {
      $(".express-purchase button").on("click", e)
    }else {
      $(".express-purchase button").hide()
    }
    $("#mainContent").on(Kharma.utils.events.onMemoSubscriptionsChanged, function() {
      l()
    })
  };
  d = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.LanguageDialog
  };
  c = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.OverviewDialog({userID:Kharma.login.user.id, callback:r})
  };
  e = function(a) {
    a.stopPropagation();
    a.preventDefault();
    new Kharma.TextMessage({title:Kharma.l10n.purchase.expressCheckout.disable, message:Kharma.l10n.purchase.expressCheckout.disableMessage, withCancel:!0, options:{size:"small", accept:Kharma.l10n.button.yes}, callback:function(a) {
      a && Kharma.io.get({uri:"/api/purchase/deactivate-express.json", pageSpecific:!0, onSuccess:function() {
        $(".express-purchase-info").html(Kharma.l10n.purchase.expressCheckout.disabled);
        $(".express-purchase").addClass("no-hover");
        $(".express-purchase.body").off("click")
      }})
    }})
  };
  b = function() {
    var a = 0;
    Kharma.login.user && Kharma.login.user.id && (a = parseInt(Kharma.login.user.id, 10));
    Kharma.ga.view({name:"account", id:a, title:a ? "User Account" : "401 Unauthorized", page:"/account/" + a, dimension8:"User Account"});
    a && a !== "0" ? (g.load(), g.setPageTitle("User Account"), $("#pageload").hide(), f(), h = !0, $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      $.address.value() === "/account" && f()
    })) : h ? Kharma.history.goBackOrHome() : (new Kharma.LoginDialog).show({callback:function(a) {
      a || Kharma.history.goBackOrHome()
    }})
  };
  f = function() {
    Kharma.io.get({uri:"/api/user/overview/" + (Kharma.login.user && Kharma.login.user.id || "") + ".json", pageSpecific:!0, onSuccess:function(a) {
      m(a.json);
      g.setLoaded(!0)
    }})
  };
  i = function() {
    Kharma.io.get({uri:"/api/user/address/" + (Kharma.login.user && Kharma.login.user.id || "") + ".json", pageSpecific:!0, onSuccess:function(a) {
      j(a.json)
    }})
  };
  l = function() {
    Kharma.io.get({uri:"/api/account/memo/subscriptions.json", pageSpecific:!0, onSuccess:function(a) {
      n(a.json)
    }})
  };
  m = function(b) {
    var c = Kharma.login.user.language_code || "en-US", d = b.keyimage;
    g.setTemplate(Handlebars.templates.accountPage({account:Kharma.l10n.user.account, balance:Kharma.l10n.user.balance, billingAddress:Kharma.l10n.user.billingAddress, changeLanguage:Kharma.l10n.language.changeLanguage, youCanEditYourAccountOnUnityID:Kharma.l10n.user.youCanEditYourAccountOnUnityID, creditCard:b.express_checkout && b.express_checkout.creditcard ? "<p>" + Kharma.l10n.purchase.creditCard + ":</p>" : "", creditCardNumber:b.express_checkout && b.express_checkout.payment_instrument ? b.express_checkout.payment_instrument : 
    Kharma.l10n.purchase.expressCheckout.notActivated, credits:Kharma.l10n.purchase.credits, creditsAmount:b.balance && b.balance.amount_text, creditsBalance:b.balance && parseInt(b.balance.amount, 10) > 0, bioText:b.bio, disable:Kharma.l10n.purchase.expressCheckout.disable, email:b.email, expressPurchase:Kharma.l10n.purchase.expressCheckout.title, gravatar:Kharma.l10n.user.gravatar, id:Kharma.login.user && Kharma.login.user.id, language:Kharma.l10n.language.language, memoHeadline:Kharma.l10n.user.memo.headline, 
    newsletter:Kharma.l10n.newsletter.newsletter, redeemVoucher:Kharma.l10n.redeemVoucher.redeemVoucher, redeemVoucherPlaceholder:Kharma.l10n.redeemVoucher.voucherCode, submit:Kharma.l10n.button.submit, userName:b.name}));
    d !== void 0 && d.small !== void 0 && $(".bioimage").attr("src", d.small);
    $(".language p").text(Kharma.l10n.language.languages[c]);
    a(b);
    new Kharma.UI.Newsletter($(".newsletter"), "account");
    i();
    l()
  };
  j = function(a) {
    var a = a.address, b = $(".body.billing-address");
    a ? $(".billing-address-info").html(Handlebars.templates.address({address:a, phoneLabel:Kharma.l10n.user.phone, vatLabel:Kharma.l10n.cart.vat})) : b.find(".loadarea").remove();
    b.removeClass("loading")
  };
  k = function() {
    var a = parseInt(Kharma.login.user.id, 10) || 0;
    Kharma.ga.view({name:"account", id:a, title:a ? "User Account: Redeem Voucher Failed" : "401 Unauthorized", page:"/account/" + a + "/voucher/redeem/failed", dimension8:"User Account", dimension16:Kharma.l10n.redeemVoucher.error});
    new Kharma.TextMessage({title:Kharma.l10n.redeemVoucher.redeemVoucher, message:Kharma.l10n.redeemVoucher.error, options:{size:"small"}})
  };
  n = function(a) {
    var b = $(".body.memo-subscriptions");
    a.subscriptions ? ($(".memo-subscriptions-info").html(Handlebars.templates.memoSubscriptions({l10n:Kharma.l10n.user.memo, masterEnable:a.master_enable, showOnLogin:a.show_on_login, emailInterval:a.email_interval || "never", subscriptions:Object.keys(a.subscriptions).map(function(b) {
      return{code:b, subscribed:!!a.subscriptions[b], description:Kharma.l10n.user.memo.subscriptions.descriptions[b] || b}
    })})), a.master_enable || ($("#memo-settings").addClass("disabled"), $("#memo-settings input").attr("disabled", !0)), $(".memo-subscriptions-info input[type=checkbox]#master-enable").change(function(a) {
      var b = $(a.target).is(":checked");
      Kharma.io.post({uri:"/api/account/memo/subscriptions.json", pageSpecific:!0, parameters:{master_enable:b ? 1 : 0}, onSuccess:function() {
        b ? ($("#memo-settings").removeClass("disabled"), $("#memo-settings input").attr("disabled", !1)) : ($("#memo-settings").addClass("disabled"), $("#memo-settings input").attr("disabled", !0))
      }})
    }), $(".memo-subscriptions-info input[type=checkbox].memo-type").change(function(a) {
      a = $(a.target);
      Kharma.io.post({uri:"/api/account/memo/subscriptions.json", pageSpecific:!0, parameters:{action:a.is(":checked") ? "add" : "remove", code:a.attr("id")}})
    }), $(".memo-subscriptions-info input[type=checkbox]#show-on-login").change(function(a) {
      a = $(a.target);
      Kharma.io.post({uri:"/api/account/memo/subscriptions.json", pageSpecific:!0, parameters:{show_on_login:a.is(":checked") ? 1 : 0}})
    }), $(".memo-subscriptions-info input[type=radio]").change(function(a) {
      a = $(a.target);
      Kharma.io.post({uri:"/api/account/memo/email-interval.json", pageSpecific:!0, parameters:{value:a.attr("id")}})
    })) : b.find(".loadarea").remove();
    b.removeClass("loading")
  };
  p = function(a, b, c) {
    var d = parseInt(Kharma.login.user.id, 10) || 0;
    Kharma.ga.view({name:"account", id:d, title:d ? "User Account: Redeem Voucher Success" : "401 Unauthorized", page:"/account/" + d + "/voucher/redeem/success", dimension8:"User Account"});
    new Kharma.TextMessage({title:Kharma.l10n.redeemVoucher.redeemVoucher, message:a, withCancel:c, options:{size:"small"}, callback:b})
  };
  q = function(a, b) {
    var c = b || {code:$(".redeem-voucher input").val()};
    Kharma.io.get({uri:"/api/voucher/redeem.json", parameters:c, onSuccess:function(a) {
      a && a.json ? a.json.status === "confirm" ? p(a.json.message, function(a) {
        if(a) {
          c.confirmed_exchange_rate = 1, q(null, c)
        }
      }, !0) : p(a.json.message, function() {
        a.json.package_id && $.address.value("/content/" + a.json.package_id)
      }) : k()
    }, onFailure:function() {
      k()
    }})
  };
  r = function(a) {
    Kharma.io.post({uri:"/api/user/overview/" + Kharma.login.user.id + ".json", pageSpecific:!0, parameters:{bio:a.bio}, onSuccess:function() {
      var a = parseInt(Kharma.login.user.id, 10) || 0;
      Kharma.ga.view({name:"account", id:a, title:a ? "User Account: Edit Biography Success" : "401 Unauthorized", page:"/account/" + a + "/profile/bio/edit/success", dimension8:"User Account"});
      b()
    }})
  };
  g = new Kharma.Page("acc");
  return{clear:g.clear, getRequestUrl:g.getRequestUrl, isLoaded:g.isLoaded, load:b, onResize:g.onResize, setLoaded:g.setLoaded, setRequestUrl:g.setRequestUrl}
};
Kharma.DownloadsPage = function(g) {
  var h = null, a = [], d, c = $(".download-manager"), e = !1, b = g || {}, f = [], i = [], l, j, k, n, m, p, q, r, t, s, w, z, u, v, o, y, B, A, x, E, F, I, L, C, G, J, D, R;
  k = function(a) {
    s(a, function(a) {
      $(".filter").autocomplete({source:a, minLength:0}).focus(function() {
        $(this).autocomplete("search")
      })
    })
  };
  n = function() {
    var b = c.find(".package-search");
    c.find(".group-by select").off().on("change", function() {
      j = $(this).val();
      $(".collapse-all").text(Kharma.l10n.button.collapseAll);
      Kharma.localStorage.setItem("kharma.download.groupby", j);
      G(a, j)
    });
    b.off().on("submit", E);
    c.find(".filter-button").off().on("click", E);
    c.off().on("click", function(a) {
      var c = b.find("input"), d = $(a.target);
      d.hasClass("collapse-all") ? q(d) : d.hasClass("clear") ? c.val() !== "" && (c.val(""), E(a)) : d.hasClass("update-all") ? D() : d.hasClass("bin-button") && $.address.value("/account/downloads/search=#BIN")
    });
    c.find(".packages").on("click", function(a) {
      var b = $(a.target);
      b.hasClass("collapse") ? p(b) : b.hasClass("open-in-unity") ? Kharma.utils.windowWrapper.location.setHref("com.unity3d.kharma:content/" + b.attr("data-id")) : b.hasClass("import") ? Kharma.download.importPackage(b.attr("data-local-path"), b.attr("data-complete-project")) : b.hasClass("release-notes") ? C(b.attr("data-id")) : b.hasClass("review") ? x(b.attr("data-id"), b.attr("data-publisher")) : b.hasClass("download") ? Kharma.login && Kharma.login.user && Kharma.login.user.is_anonymous ? (new Kharma.LoginDialog).show() : 
      (b.text(Kharma.l10n.button.wait), r(b.attr("data-type"), b.attr("data-id"))) : b.hasClass("remove") ? o(b) : b.hasClass("remove-forever") ? v(b) : b.hasClass("add-tag") ? (a.stopPropagation(), $(".drop-down").hide(), m(b)) : b.hasClass("tag-image") ? (a.stopPropagation(), y(b)) : b.hasClass("tag") ? (Kharma.localStorage.removeItem("kharma.download.url"), Kharma.localStorage.setItem("kharma.download.url", b.text()), $.address.value("/account/downloads/search=" + b.text())) : b.hasClass("undo-tag") && 
      J(b)
    })
  };
  m = function(a) {
    s(f, function(b) {
      var c = a.parent().find(".drop-down");
      c.remove();
      c = new Kharma.UI.DropDown({callback:function(b) {
        var c = $(b.target).parent().parent().parent(), d = c.attr("data-id"), e = $(b.target).text(), f = c.attr("data-type");
        w(c.find(".tag"), e) || Kharma.io.post({uri:"/api/account/downloads/add-tag.json", parameters:{item_type:f, item_id:d, tag:e}, onSuccess:function() {
          var c = $(b.target);
          a.parent().append("<div class='tag'>" + c.text() + "<img src='../images/icons/close_blue.png' class='tag-image'></div>");
          c.remove()
        }})
      }, element:a, initialValue:"#", input:!0, items:b, submitCallback:function(b) {
        var c = $(b.target).parent().parent().parent(), d = c.attr("data-id"), e = c.attr("data-type"), f = "#" + $(a.parent().find(".add-tag-input")).val();
        b.preventDefault();
        w(c.find(".tag"), f) || Kharma.io.post({uri:"/api/account/downloads/add-tag.json", parameters:{item_type:e, item_id:d, tag:f}, onSuccess:function() {
          a.parent().append("<div class='tag'>" + f + "<img src='../images/icons/close_blue.png' class='tag-image'></div>")
        }})
      }});
      c.toggle()
    })
  };
  p = function(a) {
    var b = $(a.parent().nextAll(".group:first")).prevUntil(".group");
    b.length === 0 && (b = $(a.parent().nextAll()));
    a.text() === "-" ? (b.hide(), a.text("+"), $(".collapse-all").text(Kharma.l10n.button.expandAll)) : (b.show(), a.text("-"), $(".collapse-all").text(Kharma.l10n.button.collapseAll))
  };
  q = function(a) {
    var b = c.find(".collapse"), d = c.find(".package-details");
    a.text() === Kharma.l10n.button.collapseAll ? (d.hide(), a.text(Kharma.l10n.button.expandAll), b.text("+")) : a.text() === Kharma.l10n.button.expandAll && (d.show(), a.text(Kharma.l10n.button.collapseAll), b.text("-"))
  };
  r = function(a, c) {
    b.action === "download" && (b.type !== "content" ? $.address.value("/account/downloads/show/#MIXAMO/" + b.id) : $.address.value("/account/downloads/show/#PACKAGES/" + b.id));
    Kharma.io.get({uri:"/api/" + a + "/download/" + c + ".json", onSuccess:function(b) {
      b.json.error ? z({type:a, id:c}, "Error:" + b.json.error, 0, 1) : Kharma.unityEditor.download(b.json.download, function(b) {
        if(b) {
          throw b.message;
        }
        $(".package-details." + a + "-" + c).removeClass("downloading")
      })
    }})
  };
  t = function() {
    var b = 0, c;
    if(a) {
      for(c = a.length;b < c;b++) {
        if(a[b].can_update) {
          return!0
        }
      }
    }
  };
  s = function(a, b) {
    Kharma.io.get({uri:"/api/account/downloads/tags.json", onSuccess:function(a) {
      b && b(a.json.tags)
    }})
  };
  w = function(a, b) {
    var c = !1;
    $.each(a, function(a, d) {
      $(d).text() === b && (c = !0)
    });
    return c
  };
  z = function(a, b, d, e) {
    var g, i, h, d = parseInt(d / e * 100, 10), l, j = $($.find("button#" + a.type + "-" + a.id)), e = j.parent().find(".progress-bar");
    b === "connecting" ? j.text(d + "%") : b === "downloading" ? d && (j.text(d + "%"), e.css("width", d + "%"), e.removeClass("error")) : b.indexOf("Error") !== -1 ? (j.text(Kharma.l10n.error.error), e.addClass("error"), j.attr("title", b), new Kharma.UI.Notification(Kharma.l10n.supplant(Kharma.l10n.pkg.downloadErrorMessage, {name:j.attr("data-name")}))) : b === "ok" && (g = $(j.parent().parent().find(".import")), l = $(j.parent().parent().parent().find(".review")), Kharma.download.getLocalPackages(a.type, 
    a.id, function(b) {
      f = b.json.results;
      Kharma.download.findPackageById(a.type, a.id, f, function(a) {
        if(a) {
          new Kharma.UI.Notification(Kharma.l10n.supplant(Kharma.l10n.pkg.downloadSuccessfulMessage, {name:a.name, version:a.local_version_name || ""})), A(a), $(j.parent().parent().parent().find(".version")).text(a.local_version_name), t() || $(c.find(".update-all")).attr("disabled", "disabled"), g.attr("data-local-path", a.local_path), i = a.last_downloaded_at, h = a.can_comment, i && h && (l.removeClass("not-visible"), g.removeAttr("disabled"))
        }
      })
    }))
  };
  u = function(a) {
    var b = a.parent().parent().prev(), d = a.parent().parent().next();
    a.parent().parent().remove();
    b.hasClass("group") && d.hasClass("group") && b.remove();
    b.hasClass("group") && d.length === 0 && (b.remove(), $(c.find(".packages")).children().length === 0 && $(c.find(".packages")).append("<div class='empty'>" + Kharma.l10n.pkg.emptyGroup + "</div>"))
  };
  v = function(a) {
    var b = $(a.parent().find(".warning"));
    b.show();
    b.find(".no").off("click").on("click", function() {
      b.hide()
    });
    b.find(".yes").off("click").on("click", function() {
      Kharma.io.post({uri:"/api/account/downloads/add-tag.json", parameters:{item_type:a.attr("data-type"), item_id:a.attr("data-id"), tag:"#DELETED"}, onSuccess:function() {
        u(a)
      }})
    })
  };
  o = function(a) {
    Kharma.io.post({uri:"/api/account/downloads/add-tag.json", parameters:{item_type:a.attr("data-type"), item_id:a.attr("data-id"), tag:"#BIN"}, onSuccess:function() {
      u(a)
    }})
  };
  B = function(a, d) {
    var e = c.find(".packages");
    e.empty();
    e.append($(Handlebars.templates.downloadPackage({addTag:Kharma.l10n.pkg.addTag, deprecated:Kharma.l10n.pkg.deprecatedStatus, importPkg:Kharma.l10n.pkg.importPkg, inBin:b.id === "#BIN", inBrowser:!Kharma.unityEditor.isEditor(), l10nButton:Kharma.l10n.button, loggedIn:Kharma.login.user && !Kharma.login.user.is_anonymous, moveToBin:Kharma.l10n.pkg.moveToBin, noPackages:Kharma.l10n.pkg.noPackages, openInUnity:Kharma.l10n.share.openInUnity, noResults:Kharma.l10n.pkg.noSearchPackagesResults, packages:a, 
    releaseNotes:Kharma.l10n.page.releaseNotes, removePermanently:Kharma.l10n.pkg.removePermanently, removePermanentlyWarning:Kharma.l10n.pkg.removePermanentlyWarning, review:Kharma.l10n.pkg.review, sortBy:d, undoBin:Kharma.l10n.pkg.undoBin, updatePkg:Kharma.l10n.pkg.update})));
    R(a);
    h.setLoaded(!0)
  };
  y = function(a) {
    var b = a.parent().parent().parent();
    Kharma.io.post({uri:"/api/account/downloads/remove-tag.json", parameters:{item_type:b.attr("data-type"), item_id:b.attr("data-id"), tag:a.parent().text()}, onSuccess:function() {
      a.parent().remove()
    }})
  };
  J = function(a) {
    Kharma.io.post({uri:"/api/account/downloads/remove-tag.json", parameters:{item_type:a.attr("data-type"), item_id:a.attr("data-id"), tag:"#BIN"}, onSuccess:function() {
      u(a)
    }})
  };
  A = function() {
    var b = 0, c;
    if(a) {
      for(c = a.length;b < c;b++) {
      }
    }
  };
  x = function(b, c) {
    l || (l = new Kharma.ReviewDialog({closeCallback:function() {
      l = null
    }, packageID:b, publisherID:c, ratingValue:i[b].getValue(), downloaded:d, callback:function(c) {
      Kharma.download.findPackageById("content", b, a, function(a) {
        a.last_downloaded_at = !0;
        a.can_comment = !0;
        a.local_path = !0;
        i[b].setValue(c)
      })
    }}))
  };
  R = function(a) {
    var b = c.find(".packages .package-rating");
    $.each(b, function(b, c) {
      var e = a[b] && a[b].user_rating, f = a[b] && a[b].id;
      d = a[b] && a[b].last_downloaded_at;
      i[f] = new Kharma.UI.Rating({count:1, packageId:f, submitRatingCallback:function(c) {
        a[b].user_rating = c.toString();
        G(a, j)
      }, value:e, downloaded:d});
      a[b] && a[b].status !== "deprecated" && $(c).append(i[f].render())
    })
  };
  E = function(a) {
    var b = $(c.find("input")).val().replace(/[`~!@$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, " ").split(" "), d = [], e = [];
    $.each(b, function(a, b) {
      b.indexOf("#") !== -1 ? e.push(b) : d.push(b)
    });
    d = d.join(" ");
    d = e.length > 0 && d ? " " + d : d;
    a.preventDefault();
    a.stopPropagation();
    a = e.join("%20") + (d ? encodeURIComponent(d) : "");
    Kharma.localStorage.removeItem("kharma.download.url");
    Kharma.localStorage.setItem("kharma.download.url", a);
    $.address.value("/account/downloads/search=" + a)
  };
  F = function(a, b) {
    f = a.json.results || [];
    L(a, function() {
      var a = $(".service-instance-" + b), a = a && a.offset() && a.offset().top;
      $("#content").scrollTop((a > screen.height ? a : a / 2) - 50);
      $(".package-details.service-instance-" + b).addClass("downloading")
    })
  };
  I = function(b) {
    a = a.filter(function(a) {
      return a.name && a.name.toLowerCase().indexOf(b.toLowerCase()) !== -1
    });
    B(a, j)
  };
  L = function(d, e) {
    var g = b.id && b.id !== "undefined" ? decodeURIComponent(b.id) : "", i = $(".filter"), h;
    a = d.json.results || [];
    k(f);
    b.action === "search" ? (h = g.split(" "), i.val(g), $.each(h, function(a, b) {
      b.indexOf("#") === -1 && I(b)
    })) : b.action === "show" ? (b.type = decodeURIComponent(b.type), i.val(b.type)) : b.action !== "download" && i.val(g);
    Kharma.unityEditor.isEditor() && !t() && $(c.find(".update-all")).attr("disabled", "disabled");
    n();
    Kharma.localStorage.getItem("kharma.download.groupby", function(b) {
      (j = b) && c.find(".group-by select").val(j);
      G(a, a ? j : "noPackages");
      e && e()
    })
  };
  G = function(a, b) {
    if(a) {
      switch(b) {
        case "category":
        ;
        case "category-full":
          a.sort(function(a, b) {
            return a.category.name.localeCompare(b.category.name)
          });
          break;
        case "publisher":
          a.sort(function(a, b) {
            return a.publisher.name.localeCompare(b.publisher.name)
          });
          break;
        case "publish-date-id":
          a.sort(function(a, b) {
            var c = a.published_at || (new Date(a.published_at)).toString(), d = b.published_at || (new Date(b.published_at)).toString();
            if(c === d) {
              return b.name.localeCompare(a.name)
            }
            return c.localeCompare(d)
          });
          a.reverse();
          break;
        case "packagestatus":
          a.sort(function(a, b) {
            var c = a.can_update ? Kharma.l10n.pkg.update : a.local_path ? Kharma.l10n.pkg.importPkg : a.can_download ? Kharma.l10n.button.download : "", d = b.can_update ? Kharma.l10n.pkg.update : b.local_path ? Kharma.l10n.pkg.importPkg : b.can_download ? Kharma.l10n.button.download : "";
            if(c === d) {
              return b.name.localeCompare(a.name)
            }
            return c.localeCompare(d)
          });
          a.reverse();
          break;
        case "created-at":
          a.sort(function(a, b) {
            var c = a.created_at || "", d = b.created_at || "";
            if(c === d) {
              return a.name.localeCompare(b.name)
            }
            return c.localeCompare(d)
          });
          a.reverse();
          break;
        case "rating":
          a.sort(function(a, b) {
            var c = a.user_rating.toString(), d = b.user_rating.toString();
            if(c === d) {
              return b.name.localeCompare(a.name)
            }
            return c.localeCompare(d)
          });
          a.reverse();
          break;
        default:
          a.sort(function(a, b) {
            return a.name.localeCompare(b.name)
          })
      }
      B(a, b)
    }
  };
  C = function(a) {
    Kharma.io.get({uri:"/api/content/overview/" + a + ".json", onSuccess:function(a) {
      (a = a.json.content.publishnotes) && new Kharma.TextMessage({title:Kharma.l10n.page.releaseNotes, message:a})
    }})
  };
  D = function() {
    var b = 0, d, e;
    for(d = a.length;b < d;b++) {
      e = a[b], e.can_update && r(e.type, e.id)
    }
    c.find(".update-all").attr("disabled", "disabled")
  };
  (function() {
    h = new Kharma.Page("dow");
    Kharma.localStorage.getItem("kharma.download.url", function(a) {
      if(a && b.id === "#PACKAGES") {
        $.address.value("/account/downloads/search=" + a), b.action = "search", b.id = a
      }
    })
  })();
  return{clear:function() {
    $("#searchArea").show();
    h.clear()
  }, getRequestUrl:h.getRequestUrl, isLoaded:h.isLoaded, load:function() {
    var a = 0;
    Kharma.login.user && Kharma.login.user.id && (a = parseInt(Kharma.login.user.id, 10));
    Kharma.ga.view({name:"account", id:a, title:a ? "User Account: Download Manager" : "401 Unauthorized", page:"/account/" + a + "/downloads", dimension8:"User Account"});
    a && a !== "0" ? (h.load(), $("#searchArea").hide(), e = !0, c = $(Handlebars.templates.downloadsPage({category:Kharma.l10n.pkg.category, close:Kharma.l10n.button.close, collapseAll:Kharma.l10n.button.collapseAll, downloads:Kharma.l10n.pkg.downloads, expandAll:Kharma.l10n.button.expandAll, groupBy:Kharma.l10n.pkg.groupBy, inBrowser:!Kharma.unityEditor.isEditor(), loading:Kharma.l10n.page.loadingPage, myRating:Kharma.l10n.pkg.myRating, publisher:Kharma.l10n.pkg.publisher, publishDate:Kharma.l10n.pkg.publishDate, 
    updatedAt:Kharma.l10n.pkg.updatedAt, createdAt:Kharma.l10n.pkg.createdAt, purchaseDate:Kharma.l10n.pkg.purchaseDate, filter:Kharma.l10n.pkg.filter, status:Kharma.l10n.pkg.status, subcategory:Kharma.l10n.pkg.subcategory, title:Kharma.l10n.pkg.title, updateAll:Kharma.l10n.button.updateAll})), h.setTemplate(c), $("#mainContent").on(Kharma.utils.events.onDownloadProgress, function(a, b, c, d, e) {
      z(b, c, d, e)
    }), b.action === "download" && r(b.type, b.id), Kharma.unityEditor.getPackageList(function(a, c) {
      var d;
      d = b.action === "show" ? b.type : b.id !== "undefined" ? decodeURIComponent(b.id) : "";
      var e = [];
      if(a) {
        throw a;
      }
      d = d.split(" ");
      $.each(d, function(a, b) {
        b.indexOf("#") !== -1 && e.push(b)
      });
      d = e.sort().map(function(a) {
        return"tag=" + encodeURIComponent(a)
      }).join("&");
      $.each(c.results, function(a, b) {
        b.local_icon = null;
        b.description = null
      });
      Kharma.io.post({uri:"/api/account/downloads/search.json?" + d, data:JSON.stringify(c.results), onSuccess:function(a) {
        b.action === "show" ? F(a, b.id) : L(a)
      }})
    })) : e ? Kharma.history.goBackOrHome() : (new Kharma.LoginDialog).show({callback:function(a) {
      a || Kharma.history.goBackOrHome()
    }})
  }, onResize:h.onResize, setLoaded:h.setLoaded, setRequestUrl:h.setRequestUrl}
};
Kharma.TransactionsPage = function() {
  var g = null, h = !1, a, d;
  a = function() {
    Kharma.io.get({uri:"/api/user/transactions/" + (Kharma.login.user && Kharma.login.user.id || "") + ".json", pageSpecific:!0, onSuccess:function(a) {
      d(a.json.transactions)
    }})
  };
  d = function(a) {
    g.setTemplate(Handlebars.templates.transactions({account:Kharma.l10n.user.account, action:Kharma.l10n.user.credits.action, amount:Kharma.l10n.user.credits.amount, balance:Kharma.l10n.user.credits.balance, credits:Kharma.l10n.purchase.credits, date:Kharma.l10n.user.credits.date, description:Kharma.l10n.user.credits.description, enableTransactions:!0, header:Kharma.l10n.user.creditCardPayPalTransactions, id:Kharma.login.user && Kharma.login.user.id, noTransactionsLabel:Kharma.l10n.user.credits.noTransactions, 
    transactionsLabel:Kharma.l10n.user.transactions, transactions:a}));
    $(".loadarea").remove()
  };
  g = new Kharma.Page("tra");
  return{clear:g.clear, getRequestUrl:g.getRequestUrl, isLoaded:g.isLoaded, load:function() {
    var c = 0;
    Kharma.login.user && Kharma.login.user.id && (c = parseInt(Kharma.login.user.id, 10));
    Kharma.ga.view({name:"account", id:c, title:c ? "User Account: Transactions" : "401 Unauthorized", page:"/account/" + c + "/transactions", dimension8:"User Account"});
    g.load();
    g.setPageTitle("User Account");
    c && c !== 0 ? ($("#pageload").hide(), h = !0, a(), $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      $.address.value() === "/account/transactions" && a()
    })) : h ? Kharma.history.goBackOrHome() : (new Kharma.LoginDialog).show({callback:function(a) {
      a || Kharma.history.goBackOrHome()
    }})
  }, onResize:g.onResize, setLoaded:g.setLoaded, setRequestUrl:g.setRequestUrl}
};
Kharma.TransactionsCreditsPage = function() {
  var g = null, h = !1, a, d;
  a = function() {
    Kharma.io.get({uri:"/api/user/account-transactions/" + Kharma.login.user.id + ".json", pageSpecific:!0, onSuccess:function(a) {
      d(a.json.transactions)
    }})
  };
  d = function(a) {
    g.setTemplate(Handlebars.templates.transactions({account:Kharma.l10n.user.account, action:Kharma.l10n.user.credits.action, amount:Kharma.l10n.user.credits.amount, balance:Kharma.l10n.user.credits.balance, credits:Kharma.l10n.purchase.credits, date:Kharma.l10n.user.credits.date, description:Kharma.l10n.user.credits.description, enableCredits:!0, header:Kharma.l10n.user.credits.transactions, noTransactionsLabel:Kharma.l10n.user.credits.noTransactions, transactionsCredits:a, transactionsLabel:Kharma.l10n.user.transactions}));
    $(".loadarea").remove()
  };
  g = new Kharma.Page("tra");
  return{clear:g.clear, getRequestUrl:g.getRequestUrl, isLoaded:g.isLoaded, load:function() {
    var c = 0;
    Kharma.login.user && Kharma.login.user.id && (c = parseInt(Kharma.login.user.id, 10));
    Kharma.ga.view({name:"account", id:c, title:c ? "User Account: Credits" : "401 Unauthorized", page:"/account/" + c + "/transactions/credits", dimension8:"User Account"});
    c && c !== 0 ? (g.load(), g.setPageTitle("User Account"), h = !0, $("#pageload").hide(), a(), $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      $.address.value() === "/account/transactions/credits" && a()
    })) : h ? Kharma.history.goBackOrHome() : (new Kharma.LoginDialog).show({callback:function(a) {
      a || Kharma.history.goBackOrHome()
    }})
  }, onResize:g.onResize, setLoaded:g.setLoaded, setRequestUrl:g.setRequestUrl}
};
Kharma.LicensesPage = function() {
  var g = null, h = !1, a, d;
  a = function() {
    Kharma.io.get({uri:"/api/user/licenses/" + Kharma.login.user.id + ".json", pageSpecific:!0, onSuccess:function(a) {
      d(a.json)
    }})
  };
  d = function(a) {
    g.setTemplate(Handlebars.templates.licensesPage({account:Kharma.l10n.user.account, buyMore:Kharma.l10n.user.license.buyMore, credits:Kharma.l10n.purchase.credits, id:Kharma.login.user && Kharma.login.user.id, licenses:a.licenses, licensesLabel:Kharma.l10n.user.license.licenses, noLicensesLabel:Kharma.l10n.user.noLicenses, name:Kharma.l10n.user.license.name, quantity:Kharma.l10n.user.license.quantity}));
    $($("#licenses .buyMore")).off().on("click", function(a) {
      Kharma.cart.addItem($(a.target).attr("data"), !0)
    })
  };
  g = new Kharma.Page("lic");
  return{clear:g.clear, getRequestUrl:g.getRequestUrl, isLoaded:g.isLoaded, load:function() {
    var c = 0;
    Kharma.login.user && Kharma.login.user.id && (c = parseInt(Kharma.login.user.id, 10));
    Kharma.ga.view({name:"account", id:c, title:c ? "User Account: Licenses" : "401 Unauthorized", page:"/account/" + c + "/licenses", dimension8:"User Account"});
    g.load();
    g.setPageTitle("User Account");
    c && c !== 0 ? ($("#pageload").hide(), h = !0, a(), $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      $.address.value() === "/account/licenses" && a()
    })) : h ? Kharma.history.goBackOrHome() : (new Kharma.LoginDialog).show({callback:function(a) {
      a || Kharma.history.goBackOrHome()
    }})
  }, onResize:g.onResize, setLoaded:g.setLoaded, setRequestUrl:g.setRequestUrl}
};
Kharma.MemoPage = function() {
  var g = null, h = !1, a;
  a = function() {
    g.setTemplate(Handlebars.templates.memo({isPopup:!1, settings:Kharma.l10n.memo.settings}));
    new Kharma.UI.MemoList({callback:Handlebars.templates.memoNotification, element:$("#mainContent .body"), scrollElement:$(window)})
  };
  g = new Kharma.Page("mem");
  return{clear:g.clear, getRequestUrl:g.getRequestUrl, isLoaded:g.isLoaded, load:function() {
    var d = 0;
    Kharma.login.user && Kharma.login.user.id && (d = parseInt(Kharma.login.user.id, 10));
    Kharma.ga.view({name:"account", id:d, title:d ? "User Account: Notifications" : "401 Unauthorized", page:"/account/" + d + "/notifications", dimension8:"User Account"});
    g.load();
    g.setPageTitle(Kharma.l10n.memo.notifications);
    d && d !== 0 ? ($("#pageload").hide(), h = !0, a()) : h ? Kharma.history.goBackOrHome() : (new Kharma.LoginDialog).show({callback:function(a) {
      a || Kharma.history.goBackOrHome()
    }})
  }, onResize:g.onResize, setLoaded:g.setLoaded, setRequestUrl:g.setRequestUrl}
};
Kharma.Storage = Kharma.Storage || {};
Kharma.Storage.FallbackStorage = function() {
  var g = [];
  return{getItem:function(h, a) {
    a(g[h])
  }, hasItem:function(h, a) {
    a(h in g)
  }, removeItem:function(h, a) {
    delete g[h];
    a && a()
  }, setItem:function(h, a, d) {
    g[h] = a;
    d && d()
  }}
};
Kharma.Storage = Kharma.Storage || {};
Kharma.Storage.HTML5LocalStorage = function() {
  return{getItem:function(g, h) {
    h(localStorage.getItem(g))
  }, hasItem:function(g, h) {
    h(g in localStorage)
  }, removeItem:function(g, h) {
    localStorage.removeItem(g);
    h && h()
  }, setItem:function(g, h, a) {
    try {
      localStorage.setItem(g, h), a && a()
    }catch(d) {
      console.log("LocalStorage error: " + d.message)
    }
  }}
};
Kharma.Storage = Kharma.Storage || {};
Kharma.Storage.HTML5SessionStorage = function() {
  return{getItem:function(g, h) {
    h(sessionStorage.getItem(g))
  }, hasItem:function(g, h) {
    h(g in sessionStorage)
  }, removeItem:function(g, h) {
    sessionStorage.removeItem(g);
    h && h()
  }, setItem:function(g, h, a) {
    try {
      sessionStorage.setItem(g, h), a && a()
    }catch(d) {
      console.log("SessionStorage error: " + d.message)
    }
  }}
};
Kharma.Storage.UnityEditorLocalStorage = function() {
  var g = window.context && window.context.GetString && window.context.HasKey && window.context.DeleteKey && window.context.SetString;
  return g ? {getItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.GetString(g, function(d, c) {
      if(d) {
        throw d;
      }
      a(c)
    }) : a(window.context.GetString(g))
  }, hasItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.HasKey(g, function(d, c) {
      if(d) {
        throw d;
      }
      a(c)
    }) : a(window.context.HasKey(g))
  }, removeItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.DeleteKey(g, function(d) {
      if(d) {
        throw d;
      }
      a && a()
    }) : (window.context.DeleteKey(g), a && a())
  }, setItem:function(g, a, d) {
    Kharma.unityEditor.isChromium() ? window.context.SetString(g, a, function(a) {
      if(a) {
        throw a;
      }
      d && d()
    }) : (window.context.SetString(g, a), d && d())
  }} : null
};
Kharma.Storage.UnityEditorSessionStorage = function() {
  var g = window.context && window.context.SessionGetString && window.context.SessionHasString && window.context.SessionRemoveString && window.context.SessionSetString;
  return g ? {getItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.SessionGetString(g, function(d, c) {
      if(d) {
        throw d;
      }
      a(c)
    }) : a(window.context.SessionGetString(g))
  }, hasItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.SessionHasString(g, function(d, c) {
      if(d) {
        throw d;
      }
      a(c)
    }) : a(window.context.SessionHasString(g))
  }, removeItem:function(g, a) {
    Kharma.unityEditor.isChromium() ? window.context.SessionRemoveString(g, function(d) {
      if(d) {
        throw d;
      }
      a && a()
    }) : (window.context.SessionRemoveString(g), a && a())
  }, setItem:function(g, a, d) {
    if(a === void 0 || a === null) {
      a = ""
    }
    Kharma.unityEditor.isChromium() ? window.context.SessionSetString(g, a, function(a) {
      if(a) {
        throw a;
      }
      d && d()
    }) : (window.context.SessionSetString(g, a), d && d())
  }} : null
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Accordion = function(g) {
  (function(g) {
    g.find(".head:first").addClass("active-head");
    g.find(".head:last").addClass("last-head");
    g.find(".body").each(function(a, d) {
      $(d).addClass("body-" + a)
    });
    g.find(".head").each(function(a, d) {
      $(d).on("click autoclick", function() {
        var a = g.find(".body:visible"), d = $(this), b = d.next();
        b.is(":hidden") && (g.find(".head").removeClass("active-head"), d.addClass("active-head"), $().add(a).add(b).slideToggle())
      })
    })
  })(g)
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.AssetHierarchy = function(g, h) {
  var a, d = 1, c = h.flags, e, b, f, i, l, j, k, n;
  e = function() {
    a.scroll(function() {
      a[0].scrollHeight - a.scrollTop() === a.outerHeight() && (b(), d++)
    });
    b();
    d++
  };
  b = function() {
    Kharma.io.get({uri:"/api/content/assets/" + g.id + "/" + h.package_version_id + ".json?rows=35&page=" + d, pageSpecific:!0, onSuccess:function(a) {
      j(a.json);
      i()
    }})
  };
  i = function() {
    $("#expandPackageContents").click(function() {
      var b = $("body").innerHeight() - 120, c = $(this);
      a.height() < 300 ? a.animate({height:b}, 1E3, function() {
        c.text(Kharma.l10n.page.collapse);
        a.css("overflow", "auto")
      }) : a.animate({height:240}, 1E3, function() {
        c.text(Kharma.l10n.page.expand);
        a.css("overflow", "auto")
      })
    })
  };
  j = function(b) {
    b && a && (a.find(".loadarea").hide(), l(b.assets))
  };
  f = function(a) {
    var b = $(a.currentTarget), c = b.attr("data-guid");
    a.stopPropagation();
    c ? c && k(b[0]) : (c = b.parent().attr("data-guid")) && k(b.parent()[0])
  };
  l = function(b) {
    a.append(Handlebars.templates.assetHierarchy({assets:b}));
    $(a.find("div")).on("click", f);
    (b = a.children("div:not(.folder)")[0]) && k(b)
  };
  n = function(a) {
    var b = $("#assetview");
    b && Kharma.io.get({uri:"/api/content/asset-preview/" + g.id + "/" + a + ".json", pageSpecific:!0, onSuccess:function(a) {
      b.css("backgroundImage", "url(" + a.json.result.preview + ")")
    }})
  };
  k = function(b) {
    var c = $(a.find("div")), d = $(b);
    b && c.is(d) !== !1 && (c.removeClass("selected"), d.addClass("selected"), n(d.attr("data-guid")))
  };
  (function(b, c) {
    var d;
    a = $("#assettree");
    c && c.external_download ? (d = $("#packageContents"), $(d.find(".body")).empty().append('<p class="noContent">' + Kharma.l10n.pkg.noContent + "</p>"), $(d.find(".head-buttons")).remove()) : e()
  })(g, c)
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.BrowserToolbar = function() {
  var g = null, h = !1, a, d, c, e, b, f, i, l, j;
  d = function(a) {
    switch(a) {
      case "unav-login":
        $(".user-wrapper").removeClass("user-expanded");
        (new Kharma.LoginDialog).show();
        break;
      case "unav-admin":
        Kharma.admin.buildAdmin();
        break;
      case "unav-admin-toolbox":
        new Kharma.AdminToolboxDialog;
        break;
      case "unav-sim":
        Kharma.unityContext.toggle();
        break;
      case "unav-logout":
        $(".user-wrapper").removeClass("user-expanded");
        Kharma.login.logout();
        break;
      case "unav-home":
        $.address.value("/home");
        break;
      case "unav-pkg":
        Kharma.login.user.is_anonymous || g.goDownloads();
        break;
      case "unav-wishlist":
        Kharma.login.user.is_anonymous || $.address.value("/wishlist/" + Kharma.login.user.id + "/page=1/sortby=addeddate")
    }
  };
  c = function() {
    var a = $("#unav");
    $(".unav-user-icon").off().on("click", function() {
      var a = $(".user-wrapper");
      h && e();
      a.hasClass("user-expanded") ? a.removeClass("user-expanded") : a.addClass("user-expanded")
    });
    $(".m-navbtn").off().on("click", function() {
      h ? e() : f()
    });
    $("html").off().on("click", function(a) {
      a = $(a.target);
      (a.closest(".user-wrapper").length === 0 && a.closest(".unav-user-icon").length === 0 || a.attr("href")) && $(".user-wrapper").removeClass("user-expanded")
    });
    a.off().on("click", function(a) {
      d(a.target.id)
    });
    a.find("#unavSearchForm").on("submit", function(b) {
      b.preventDefault();
      var c = b.target, b = b.target.search.value;
      if(b !== "") {
        $.address.value("/search/" + encodeURIComponent(b)), c.search.value = "", a.find(".search-icon").removeClass("close-icon")
      }
    });
    a.find("a[lang]").on("click", function(a) {
      a.preventDefault();
      var a = $(this), b = a.attr("lang"), c = a.attr("href").replace("/", "");
      Kharma.io.post({uri:"/api/user/update-language.json", parameters:{language_code:b}, onSuccess:function() {
        Kharma.login.changeLanguageUrl(c)
      }})
    });
    $("body").off().on("click", function(a) {
      h && !$(a.target).hasClass("m-navbtn") && !$(a.target).hasClass("lines") && e()
    });
    g.addEvents()
  };
  e = function() {
    $(".m-navbtn").removeClass("close");
    $(".mobile-menu").hide();
    h = !1
  };
  b = function() {
    $("#unav").empty();
    a = $(Handlebars.templates.browserMenu({activateAdmin:Kharma.l10n.admin.activate, assetStore:Kharma.l10n.browserMenu.title.assetStore, assetStoreLink:Kharma.l10n.browserMenu.link.assetStore, blog:Kharma.l10n.browserMenu.title.blog, blogLink:Kharma.l10n.browserMenu.link.blog, categories:Kharma.l10n.sideBar.categories, community:Kharma.l10n.browserMenu.title.community, communityLink:Kharma.l10n.browserMenu.link.community, help:Kharma.l10n.browserMenu.title.help, helpLink:Kharma.l10n.browserMenu.link.help, 
    home:Kharma.l10n.browserMenu.title.home, industries:Kharma.l10n.browserMenu.title.industries, industriesLink:Kharma.l10n.browserMenu.link.industries, language:Kharma.l10n.language.language, learn:Kharma.l10n.browserMenu.title.learn, learnLink:Kharma.l10n.browserMenu.link.learn, linkMaker:Kharma.l10n.browserMenu.title.linkMaker, linkMakerLink:Kharma.l10n.browserMenu.link.linkMaker, navigation:Kharma.l10n.browserMenu.menu.navigation, publisherLogin:Kharma.l10n.browserMenu.title.publisherLogin, 
    publisherLoginLink:Kharma.l10n.browserMenu.link.publisherLogin, sellAssets:Kharma.l10n.browserMenu.title.sellAssets, sellAssetsLink:Kharma.l10n.browserMenu.link.sellAssets, showcase:Kharma.l10n.browserMenu.title.showcase, showcaseLink:Kharma.l10n.browserMenu.link.showcase, unity:Kharma.l10n.browserMenu.title.unity, unityLink:Kharma.l10n.browserMenu.link.unity}));
    $("#assetStore").prepend(a)
  };
  f = function() {
    $(".m-navbtn").addClass("close");
    $(".mobile-menu").show();
    h = !0
  };
  i = function() {
    Kharma.login && !Kharma.login.user.is_anonymous ? Kharma.cart.items.length > 0 && $("#cart > div").html(Kharma.cart.items.length) : $("#cart > div").empty()
  };
  l = function() {
    var a = $(".unav-user-icon");
    Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member ? a.addClass("level-11") : a.removeClass("level-11");
    Kharma.login && !Kharma.login.user.is_anonymous ? a.find("img").length === 0 && (a.addClass("icon"), a.append("<img src='" + (Kharma.login.user.keyimage && Kharma.login.user.keyimage.icon) + "'>")) : (a.removeClass("icon"), a.find("img").remove())
  };
  j = function() {
    var b;
    b = a.find("#unav-pkg");
    var c = a.find("#cart"), d = a.find("#unav-wishlist");
    Kharma.login && Kharma.login.user && Kharma.login.user.is_anonymous ? (b.addClass("disabled"), c.addClass("disabled"), d.addClass("disabled")) : (b.removeClass("disabled"), c.removeClass("disabled"), d.removeClass("disabled"));
    b = a.find("#unav-user-menu");
    b.empty();
    b.append($(Handlebars.templates.loginUserMenu({activateAdmin:Kharma.l10n.admin.activate, admin:Kharma.login.isAdmin, create:Kharma.l10n.browserMenu.menu.createAccount, creditCardPayPalTransactions:Kharma.l10n.user.creditCardPayPalTransactions, devServer:"Developer server", editAccount:Kharma.l10n.browserMenu.menu.myAccount, editAccountText:Kharma.l10n.browserMenu.menu.description, enableSim:Kharma.l10n.editor.enable, headline:Kharma.l10n.browserMenu.menu.unityAccount, id:Kharma.login.user.id, 
    intro:Kharma.l10n.browserMenu.menu.intro, level11:Kharma.l10n.browserMenu.title.level11, level11Member:Kharma.login.user.roles && Kharma.login.user.roles.level11member, licenses:Kharma.l10n.user.license.licenses, lists:Kharma.l10n.lists.lists, localServer:"Local server", login:Kharma.l10n.user.logIn, logout:Kharma.l10n.browserMenu.menu.logOut, notifications:Kharma.l10n.memo.notifications, prodServer:"Production server", publicProfile:Kharma.l10n.user.publicProfile, qaServer:"QA server", servers:Kharma.login.user.roles && 
    Kharma.login.user.roles.server_switcher, transactions:Kharma.l10n.user.transactions, user:Kharma.login && !Kharma.login.user.is_anonymous, username:Kharma.login.user.name, wishList:Kharma.l10n.wishList.wishList})))
  };
  (function() {
    g = new Kharma.Header;
    b();
    $("#mainContent").on(Kharma.utils.events.onUserLogin, function() {
      j();
      c();
      l()
    });
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      if(Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous) {
        if($("#unavMemo").removeClass("open disabled"), !Kharma.memo) {
          Kharma.memo = new Kharma.Memo
        }
      }else {
        if($("#unavMemo").addClass("open disabled"), Kharma.memo) {
          Kharma.memo.stopPolling(), Kharma.memo = null
        }
      }
    })
  })();
  return{addAdministration:g.addAdministration, addAdminModeButton:g.addAdminModeButton, goAdmin:g.goAdmin, goDownloads:g.goDownloads, onResize:function() {
    h && Kharma.utils.windowWrapper.innerWidth() > 980 && e()
  }, removeAdministration:g.removeAdministration, updateButtons:function() {
    i();
    g.updateButtons()
  }}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.ContextMenu = function(g) {
  var h = g || {}, a, d;
  a = function(a) {
    $("#assetStore").scroll(function() {
      a.remove()
    });
    $("body").on("click", function() {
      a.is(":visible") && a.remove()
    })
  };
  d = function(a) {
    var d = 0, b, f, g, l = a.find("ul"), j = function(a) {
      a.stopPropagation();
      $(".popupMenu").empty().remove();
      a.data.item.action()
    }, k = h.menuObject.commands;
    for(b = k.length;d < b;d++) {
      f = $("<li>"), a = k[d], a.action ? (g = $("<a></a>"), g.on("click", {item:a}, j), g.append(a.label), f.append(g)) : f.addClass("separator"), l.append(f)
    }
  };
  (function(c) {
    var e = c.left, c = c.top, b = $("<div class='popupMenu'><div class='user-ui active'><div class='menu'><ul></ul></div></div></div>");
    c += Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() ? 15 : 2;
    b.css({left:e, top:c});
    d(b);
    $("#assetStore").prepend(b);
    a(b)
  })(h)
};
Kharma.UI.DownloadButton = function(g) {
  var h, a = !1, d = $("<button class='download'></button>"), c = g || {}, e = c.content, b = (g = e && e.link) && g.id, f = !1, i = e && e.in_users_downloads ? !0 : !1, l = e && e.express_checkout ? !0 : !1, j = e && e.items_in_cart && e.items_in_cart > 0 ? !0 : !1, k = g && g.type, n, m = e && e.price ? e.price : null, p = e && e.upgrade_package && e.upgrade_package.indexOf("_") !== -1, q = e && p && e.upgrade_package ? e.upgrade_package.substr(0, e.upgrade_package.indexOf("_")) : e && e.upgrade_package, 
  r = e && e.price_upgrade && q && e.price_upgrade[q], t, s, w = e && e.purchased_at && m && e.category && e.category.multiple === "Y" ? !0 : !1, z, u, v, o, y, B, A, x, E, F, I, L, C;
  z = function() {
    $("#mainContent").on(Kharma.utils.events.onDownloadProgress, function(a, c, d, e, f) {
      k === c.type && b === c.id && E(c, d, e, f)
    });
    $("#mainContent").on(Kharma.utils.events.onPurchaseSuccessful, function() {
      Kharma.download.getLocalPackageById("content", b, function(a) {
        Kharma.io.post({uri:"/api/content/user-overview/" + b + ".json", data:JSON.stringify(a), onSuccess:function(a) {
          e.can_download = a.json.content.can_download;
          x()
        }})
      })
    });
    d.off().on("click", function(c) {
      var g = parseInt(d.css("height"), 10), h = $(".popupMenu"), l = d.offset().left, g = d.offset().top + (Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() ? g / 2 : g);
      c.stopPropagation();
      c.preventDefault();
      if(Kharma.login && Kharma.login.user && Kharma.login.user.is_anonymous && s !== "inBrowser") {
        s === "noPurchase" ? Kharma.utils.windowWrapper.open(d.attr("href"), "_blank") : (new Kharma.LoginDialog).show()
      }else {
        if(s === "inBrowser") {
          i ? F() : u()
        }else {
          (!e.license || a) && !Kharma.login.user.roles.downloader && d.text(Kharma.l10n.button.wait);
          switch(s) {
            case "noPurchase":
              Kharma.login.user.roles.downloader ? h.is(":visible") ? h.remove() : Kharma.unityEditor.isEditor() ? (d.text("Buy / Download"), Kharma.unityEditor.makeMenu({commands:[{label:Kharma.l10n.button.download, action:function() {
                y()
              }}, {label:Kharma.l10n.share.readMore, action:function() {
                Kharma.utils.windowWrapper.open(d.attr("href"), "_blank")
              }}]}, l, g)) : Kharma.utils.windowWrapper.open(d.attr("href"), "_blank") : Kharma.utils.windowWrapper.open(d.attr("href"), "_blank");
              break;
            case "download":
            ;
            case "update":
              f = !0;
              y();
              break;
            case "import":
              Kharma.io.get({uri:"/api/content/user-overview/" + b + ".json", onSuccess:function(a) {
                Kharma.download.importPackage(n, a.json.content.is_complete_project)
              }});
              break;
            case "buy":
            ;
            case "upgrade":
              Kharma.login.user.roles.downloader ? h.is(":visible") ? h.remove() : Kharma.unityEditor.isEditor() ? (d.text("Buy / Download"), Kharma.unityEditor.makeMenu({commands:[{label:Kharma.l10n.button.download, action:function() {
                y()
              }}, {label:Kharma.l10n.button.buy, action:function() {
                o()
              }}]}, l, g)) : o() : o()
          }
          I()
        }
      }
    });
    if(w) {
      $(c.targetElement.find(".licenses")).off().on("click", function() {
        Kharma.cart.hasItem(parseInt(b, 10)) || Kharma.ga.event({eventCategory:"Cart", nonInteraction:!0, eventAction:"Add", eventLabel:"Package", dimension9:e.publisher.label, dimension10:e.title, metric6:1});
        Kharma.cart.addItem(b, !0)
      })
    }
    Kharma.utils.windowWrapper.onResize(z)
  };
  u = function() {
    Kharma.localStorage.setItem("kharma.download.groupby", "created-at");
    Kharma.login.user && !Kharma.login.user.is_anonymous ? (f = !1, L(function() {
      C(function() {
        v()
      })
    })) : (new Kharma.LoginDialog).show()
  };
  v = function() {
    Kharma.io.get({uri:"/api/content/add_to_download_manager/" + b + ".json", onSuccess:function() {
      $("body").addClass("intro");
      $("body").append(Handlebars.templates.addConfirmDialog({addToDmL10N:Kharma.l10n.addToDm}));
      $("#gotodm").click(function() {
        $.address.value("/account/downloads/")
      });
      $("#backtopackage").click(function() {
        $("body").removeClass("intro");
        $(".intro-overlay").remove();
        $($(".sharing a")[0]).hide();
        $($(".sharing a")[1]).css("margin-left", "0");
        d.text(Kharma.l10n.share.openInUnity);
        d.off().on("click", function(a) {
          a.stopPropagation();
          a.preventDefault();
          F()
        })
      });
      $(".intro").on("click", function() {
        $("body").removeClass("intro");
        $(".intro-overlay").remove();
        $($(".sharing a")[0]).hide();
        $($(".sharing a")[1]).css("margin-left", "0");
        d.text(Kharma.l10n.share.openInUnity);
        d.off().on("click", function(a) {
          a.stopPropagation();
          a.preventDefault();
          F()
        })
      })
    }})
  };
  o = function() {
    f = !1;
    L(function() {
      B()
    })
  };
  y = function() {
    Kharma.ga.event({eventCategory:"Package", nonInteraction:!0, eventAction:"Download", dimension8:"Packages", dimension9:e.publisher, dimension10:e.title, eventLabel:e.price ? "Paid" : "Free"});
    e.last_downloaded_at ? A() : (f = !0, L(function() {
      A()
    }))
  };
  B = function() {
    d.text(Kharma.l10n.button.wait);
    Kharma.cart.hasItem(parseInt(b, 10)) || Kharma.ga.event({eventCategory:"Cart", nonInteraction:!0, eventAction:"Add", eventLabel:"Package", dimension9:e.publisher.label, dimension10:e.title, metric6:1});
    Kharma.cart.addItem(b, !0, I)
  };
  A = function() {
    C(function() {
      d.text(Kharma.l10n.button.wait);
      Kharma.io.get({uri:"/api/content/download/" + b + ".json", onSuccess:function(a) {
        a.json.error ? E({type:"content", id:b}, "Error: " + a.json.error, 0, 1) : Kharma.unityEditor.download(a.json.download, function(a) {
          if(a) {
            throw a.message;
          }
        })
      }})
    })
  };
  x = function() {
    e && e.flags && e.flags.no_purchase && !e.can_download ? (s = "noPurchase", I()) : !Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() ? (r && !e.can_download && !p ? (s = "upgrade", h.addClass("green")) : e && !e.can_download && m ? (s = "buy", h.addClass("green")) : s = "inBrowser", I()) : Kharma.download.findLocalPath(b, function(a) {
      r && !p && !e.can_download && parseFloat(m.substr(1)) > parseFloat(Kharma.helper.getFormattedPrice(r).substr(1)) ? (s = "upgrade", h.addClass("green")) : e.can_update ? (s = "update", h.addClass("update")) : a ? (s = "import", n = a) : e.can_download ? s = "download" : m ? (s = "buy", h.addClass("green")) : s = "download";
      I()
    })
  };
  E = function(a, c, e, g) {
    a = parseInt(e / g * 100, 10);
    s = c;
    s === "connecting" ? d.text(a + "%") : s === "downloading" ? a && (d.text(a + "%"), t.css("width", a + "%")) : s.indexOf("Error") !== -1 ? (d.text(Kharma.l10n.error.error), d.attr("title", s), t.addClass("error")) : s === "ok" && ($("#mainContent").off(Kharma.utils.events.onDownloadProgress), f && Kharma.download.findLocalPath(b, function(a) {
      Kharma.io.get({uri:"/api/content/user-overview/" + b + ".json", onSuccess:function(b) {
        Kharma.download.importPackage(a, b.json.content.is_complete_project)
      }})
    }), x());
    a && t.attr("data-progress", a)
  };
  F = function() {
    c = $.cookie("kharma_click_id");
    c = typeof c === "string" && c.length > 0 ? "?kharma_click_id=" + c : "";
    Kharma.utils.windowWrapper.location.setHref("com.unity3d.kharma:content/" + b + c)
  };
  I = function() {
    switch(s) {
      case "noPurchase":
        d.text(Kharma.l10n.share.readMore);
        d.attr("href", e.url);
        break;
      case "inBrowser":
        i ? (d.text(Kharma.l10n.share.openInUnity), d.attr("href", "#!/content/" + b), $($(".sharing a")[0]).hide(), $($(".sharing a")[1]).css("margin-left", "0")) : m ? (d.text(Kharma.l10n.share.openInUnity), d.attr("href", "#!/content/" + b), h.removeClass("green"), $($(".sharing a")[0]).hide(), $($(".sharing a")[1]).css("margin-left", "0"), d.off().on("click", function() {
          F()
        })) : (d.text(Kharma.l10n.share.addToDownloads), $($(".sharing a")[0]).attr("href", "#!/content/" + b));
        break;
      case "download":
        d.text(Kharma.l10n.button.download);
        break;
      case "import":
        d.text(Kharma.l10n.pkg.importPkg);
        break;
      case "update":
        d.text(Kharma.l10n.pkg.update);
        break;
      case "buy":
        !l || j ? d.text(m === "Free" || p ? Kharma.l10n.button.get : Kharma.l10n.button.addToCart) : d.text(m === "Free" || p ? Kharma.l10n.button.get : Kharma.l10n.button.buy);
        d.attr("href", "#!/content/" + b + "/basketpurchase");
        break;
      case "upgrade":
        parseFloat(e.price.USD) < parseFloat(e.price_upgrade[q].USD) ? d.text(Kharma.l10n.button.buy) : (d.addClass("upgrade"), d.text(Kharma.l10n.pkg.upgrade + " " + Kharma.helper.getFormattedPrice(r))), d.attr("href", "#!/content/" + b + "/basketpurchase")
    }
  };
  L = function(a) {
    var b = e.compatibility && e.compatibility.warning;
    b ? new Kharma.TextMessage({title:b.title, message:b.message, withCancel:!0, callback:function(b) {
      b ? a() : I()
    }}) : a()
  };
  C = function(c) {
    e.license && !a ? Kharma.io.get({uri:"/api/content/license/" + b + ".json", onSuccess:function(b) {
      if(b.transport.status === 200) {
        var d;
        try {
          d = JSON.parse(b.transport.responseText)
        }catch(e) {
          d = !1
        }
        d && new Kharma.TextMessage({title:Kharma.l10n.page.license, message:d.result.license, withCancel:!0, callback:function(b) {
          b ? (a = !0, c()) : I()
        }})
      }
    }}) : c()
  };
  h = $("<div class='action-container'></div>");
  t = $("<div class='progress-bar'></div>");
  h.append(t);
  h.append(d);
  c.targetElement.prepend(h);
  w && c.targetElement.append($("<br><div class='license-container'><button class='licenses'>" + Kharma.l10n.page.buyAdditionalLicenses + "</button></div>"));
  m && (m = Kharma.helper.getMinimumPrice(m, Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.level11member && e && e.price_level11member), m = Kharma.helper.getMinimumPrice(m, Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitsplusmember && e && e.price_assetkitsplusmember), m = Kharma.helper.getMinimumPrice(m, Kharma.login && Kharma.login.user && Kharma.login.user.roles && Kharma.login.user.roles.assetkitspromember && 
  e && e.price_assetkitspromember), m = Kharma.helper.getFormattedPrice(m));
  x();
  z()
};
Kharma.UI.DropDown = function(g) {
  var h, a = g || {}, d = a.className, c = a.element, e = a.items, b, f;
  b = function() {
    var b = $(".add-tag-form"), d = $(h.find("input"));
    $("body").off("click").on("click", function() {
      $(".drop-down").hide()
    });
    $(c.parent().find(".drop-down li")).on("click", function(b) {
      a.callback(b)
    });
    d.off("click").on("click", function(a) {
      a.stopPropagation()
    });
    b.on("submit", function(b) {
      b.stopPropagation();
      b.preventDefault();
      a.submitCallback(b)
    });
    d.off("keydown").on("keyup", function() {
      var a = $(this), b = $(h.find(".tag-description"));
      f(a.val()) ? (a.removeClass("error"), b.remove()) : (a.addClass("error"), b.length === 0 && $(h.find("form")).after("<li class='tag-description'>" + Kharma.l10n.pkg.tagDescription + "</li>"))
    })
  };
  f = function(a) {
    return/^[a-z]\w+$/i.test(a) && !/^[A-Z_\d+]+$/.test(a)
  };
  (function() {
    var f = $("<form class='add-tag-form' action='#' method='post'></form>"), g = $("<input class='add-tag-input'>"), j = [], k = c && c.parent().find(".tag");
    k && $.each(k, function(a, b) {
      j.push($(b).text())
    });
    a.initialValue && f.append($("<div class='initial-value'>" + a.initialValue + "</div>"));
    a.input && f.append(g);
    h = $("<ul class='drop-down'></ul>");
    h.css("height", "150px");
    h.css("overflow-y", "scroll");
    d && h.addClass(d);
    h.append(f);
    e && $.each(e, function(a, b) {
      typeof b === "string" && !b.match(/^#[A-Z_\d+]+$/) && (j && j.length > 0 ? $.inArray(b, j) === -1 && h.append("<li>" + b + "</li>") : h.append(b))
    });
    c && (c.after(h), b())
  })();
  return{toggle:function() {
    h && h.length && (h.is(":visible") ? h.hide() : (h.show(), $(".add-tag-input").focus()))
  }}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Loader = function(g, h) {
  var a, d, c;
  c = function() {
    d.empty();
    a.css("background-image", "none")
  };
  (function(e, b) {
    a = e.first();
    d = a.children().next();
    c();
    d.append(b);
    a.css({backgroundImage:"url(/images/loader.gif)", marginLeft:"16px"})
  })(g, h);
  return{clear:c, target:g[0]}
};
Kharma.UI.MemoDropDown = function() {
  var g, h, a, d;
  h = function() {
    $("body").on("click", function() {
      g.hide()
    });
    $(g).on("click", function(a) {
      a.stopPropagation()
    });
    g.find("a.see-all-notifications").on("click", d);
    g.find(".body").on("DOMMouseScroll mousewheel", function(a) {
      var d = $(this), b = this.scrollTop, f = this.scrollHeight, g = d.height(), h = a.type === "DOMMouseScroll" ? a.originalEvent.detail * -40 : a.originalEvent.wheelDelta, j = h > 0, k = function() {
        a.stopPropagation();
        a.preventDefault();
        return a.returnValue = !1
      };
      if(!j && -h > f - g - b) {
        return d.scrollTop(f), k()
      }else {
        if(j && h > b) {
          return d.scrollTop(0), k()
        }
      }
    })
  };
  a = function() {
    new Kharma.UI.MemoList({callback:Handlebars.templates.memoNotification, element:g.find(".body"), scrollElement:g.find(".body"), isPopup:!0})
  };
  d = function() {
    g.length && (g.is(":visible") ? g.hide() : (g.show(), a()))
  };
  (function() {
    var a = 0;
    Kharma.login.user && Kharma.login.user.id && (a = parseInt(Kharma.login.user.id, 10));
    Kharma.ga.view({name:"account", id:a, title:a ? "User Account: Notifications DropDown" : "401 Unauthorized", page:"/account/" + a + "/notificationsDropDown", dimension8:"User Account"});
    g = $(".memo-drop-down");
    g.length || (g = $('<div class="memo-drop-down">'), Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated() ? $("#header").append(g) : $("#unav .navigation").append(g), g.append(Handlebars.templates.memo({isPopup:!0, seeAllNotifications:Kharma.l10n.memo.seeAll, settings:Kharma.l10n.memo.settings})), g.hide());
    h()
  })();
  return{getMemos:a, toggleDropDown:d}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.MemoList = function(g) {
  var h = [], g = g || {}, a = 1, d = g.callback, c = !1, e = !1, b = [], f = g.element, i = g.scrollElement, l = g.isPopup, j, k, n;
  j = function(a) {
    var b = !1;
    $.each(h, function(c, d) {
      d === a && (b = !0)
    });
    return b
  };
  k = function() {
    !e && !c && (e = !0, Kharma.io.get({uri:"/api/account/memo/feed.json", pageSpecific:!0, parameters:{page:a, rows:50}, onSuccess:function(d) {
      a === 1 && !d.json.master_enable && (f.append('<div class="hint">' + Kharma.l10n.memo.disabledHint + "</div>"), c = !0);
      b = d.json.results;
      b.length === 0 ? (a === 1 && f.append('<p class="no-results">' + Kharma.l10n.memo.noResults + "</p>"), c = !0) : (n(b), a++);
      e = !1
    }}))
  };
  n = function(a) {
    for(var b = [], c, e = 0;e < a.length;e++) {
      c = a[e].type_code, c = d({blur:j(c), memo:a[e], turnOff:Kharma.l10n.memo[c], unity4x:Kharma.unityEditor.isUnity4x(), isIE11:Kharma.utils.windowWrapper.isIE11()}), b.push($(c))
    }
    f.append(b);
    Kharma.memo && Kharma.memo.addEvents(f.find(".memo-result").slice(-a.length))
  };
  (function() {
    i[0].addEventListener("scroll", function() {
      var a = l ? i.prop("scrollHeight") : $(document).height();
      i.scrollTop() >= a - i.height() - 210 && k()
    }, !0);
    $("#mainContent").on(Kharma.utils.events.onMemoBlur, function(a, b) {
      b ? h.push(b) : h = []
    });
    f.empty();
    k()
  })();
  return{renderLinks:n}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Newsletter = function(g, h, a) {
  var d, c, e, b, f;
  d = function(c, d) {
    var f, g;
    f = Handlebars.templates.newsletter({headline:Kharma.l10n.newsletter.headline, newsletterTitle:Kharma.l10n.newsletter.title, page:d, privacyPolicy:Kharma.l10n.newsletter.privacyPolicy, save:Kharma.l10n.newsletter.save, titleSignedIn:Kharma.l10n.newsletter.titleSignedIn, username:Kharma.login && Kharma.login.user && Kharma.login.user.username});
    d === "account" ? c.append($(f).find(".signup")) : $("#innerNewsletter").length === 0 && (c.append(f), a && a());
    b();
    f = $(".body-buttons");
    g = $(".privacy-policy input");
    f.find("a").on("click", function(a) {
      a.preventDefault();
      e(a)
    });
    g.click(function() {
      g.attr("checked") ? g.attr("checked", !1) : g.attr("checked", "checked")
    });
    $(".email").on("click", function() {
      $(this).select()
    })
  };
  c = function(a) {
    Kharma.ga.event({eventAction:"Newsletter Signup", eventCategory:"Newsletter Signup", nonInteraction:!0});
    var b = "https://unity3d.com/newsletters/lists/asset_store_user.json";
    h === "home" && (b = "https://unity3d.com/newsletters/lists/asset_store_home.json");
    $.post(b, {email:a || Kharma.login.user.username}, function() {
      var a = $("#innerNewsletter .body"), b = a.find(".response");
      g.find(".privacy-policy input").attr("checked") === "checked" && (Kharma.UI.Notification(Kharma.l10n.newsletter.success, null, "newsletter-notification"), a.css("height", a.height() + 3), a.find(".signup").fadeOut(), b.children().first().text(Kharma.l10n.newsletter.success), b.fadeIn())
    })
  };
  e = function(a) {
    var b = $(".email"), d = b.val(), e = g.find(".privacy-policy input"), h = $(".privacy-policy");
    a.stopPropagation();
    a.preventDefault();
    b.on("focus", function() {
      b.removeClass("not-valid")
    });
    e.on("click", function() {
      h.removeClass("not-valid")
    });
    f(d) ? e.attr("checked") === "checked" ? c(d) : h.addClass("not-valid") : b.addClass("not-valid")
  };
  b = function() {
    var a = $(".email");
    Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous ? a.val(Kharma.login.user.username) : a.val(Kharma.l10n.newsletter.email)
  };
  f = function(a) {
    return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)
  };
  (function(a, c) {
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      a.length === 0 ? d(a, c) : b()
    });
    d(a, c)
  })(g, h);
  return{submitNewsletter:c}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Notification = function(g, h, a) {
  var d;
  (function(a, e, b) {
    var f = $("#assetStore"), g = f.find(".notification");
    g.empty();
    g.length === 0 && (g = $("<div class='notification'></div>"), f.append(g), b && g.addClass(b));
    g.append("<p>" + a + "</p>");
    e && (a = new Kharma.UI.SharingBar({type:"package", title:e.title, publisher:e.publisher.label, id:e.id, twitterMessage:Kharma.l10n.supplant(Kharma.l10n.wishList.twitterMessage, {packageName:e.title}), url:e.short_url}), g.append(a.getSharingBar()));
    g.slideDown("slow");
    d = setTimeout(function() {
      g.slideUp("slow")
    }, 3E3);
    g.off().hover(function() {
      clearTimeout(d)
    }, function() {
      d = setTimeout(function() {
        g.slideUp("slow")
      }, 3E3)
    })
  })(g, h, a)
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.PaginationList = function(g) {
  var h = {mostPopular:"Most Popular", searchResult:"Search Result", recommendations:"Recommendations", moreFromPublisher:"More From Publisher", topFree:"Top Free", topPaid:"Top Paid", topGrossing:"Top Grossing", topLatest:"Top Latest", topSale:"Top Sale"}, a = $("<div id='packageList' class='package-list'></div>"), d = g || {}, c = d.callback, e = d.category, b = d.element, f = d.page, i = d.publisher, l = d.results, j = d.search && d.search.join("&"), k = d.searchPage, n = isNaN(parseInt(f, 10)), 
  m = d.sortBy, p = d.wishList, q = e || i || p || j, r = e ? "category" : i ? "publisher" : p ? "wishlist" : "", t = d.withPagination, s = d.withSorting, w = d.total, z = d.ga || null, u, v, o;
  u = function() {
    var a = $("<div id='pagination' class='paginate'></div>"), c = $("<div id='pagination2' class='paginate'></div>");
    a.smartpaginator({datacontainer:"packageList", totalrecords:w, recordsperpage:36, initval:f, display:"single", next:"Next", prev:"Prev", first:"First", last:"Last", onchange:function(a) {
      v(c);
      k ? (Kharma.utils.windowWrapper.history.replaceState({}, document.title, Kharma.utils.windowWrapper.location.getHref().replace(Kharma.utils.windowWrapper.location.getHash(), "#!/search/page=" + a + "/sortby=" + m + "/query=" + j)), Kharma.search.goToSearchPage(null, m, a)) : $.address.value("/" + r + "/" + q + "/page=" + a + "/sortby=" + m)
    }});
    b.prepend(a);
    b.append(c);
    v(c)
  };
  v = function(a) {
    var b = $("#pagination > *").clone(!0);
    $("#pagination2").empty();
    b.appendTo(a)
  };
  o = function(a) {
    var b = $(a.find(".wish-list")), a = $(a.find(".wish-list-buy")), c = $("#userpage");
    a.off().on("click", function(a) {
      a = $(a.target).parent().parent().parent();
      Kharma.cart.hasItem(parseInt(q, 10)) || Kharma.ga.event({eventCategory:"Cart", nonInteraction:!0, eventAction:"Add", eventLabel:"Wishlist", dimension9:a.data("publisher"), dimension10:a.data("package"), metric6:1});
      Kharma.ga.view({name:"cart", dimension8:"Shopping"});
      Kharma.cart.addItem(a.attr("data-link"), !0)
    }).attr("title", Kharma.l10n.wishList.buy);
    Kharma.login && Kharma.login.user ? (b.show(), a.css("display", "block")) : (b.hide(), a.hide());
    $("#wishListPage").length > 0 || c.length > 0 && Kharma.login.user ? (b.attr("title", Kharma.l10n.wishList.remove), b.addClass("on-wish-list"), b.off().on("click", function(a) {
      a = $(a.target).parent().parent().parent();
      Kharma.ga.event({eventCategory:"Wishlist", nonInteraction:!0, eventAction:"Remove", eventLabel:"WishList", dimension9:a.data("publisher"), dimension10:a.data("package"), metric5:-1});
      Kharma.wishList.deleteFromWishList(a.attr("data-link"))
    })) : b.hide()
  };
  g = function(b, e) {
    var f, g = t ? !n ? b.length > 36 ? 36 : b.length : b.length : b.length, i, l = "";
    (!t || e) && a.empty();
    if(c) {
      for(f = 0;f < g;f++) {
        i = b[f], l += i.link && i.link.type === "list" ? d.callback2(i) : c(i, d)
      }
    }
    a.append(l);
    o(a);
    t && !e && (n || u());
    if(z) {
      a.off().on("click", function(b) {
        for(b = $(b.target);b.length > 0 && b !== a;) {
          if(b[0] === a[0]) {
            break
          }else {
            if(b.data("link")) {
              Kharma.ga.event({eventCategory:"Inbound", nonInteraction:!0, eventAction:h[z.action], dimension9:b.data("publisher") || "n/a", dimension10:b.data("package") || "n/a", eventLabel:z.label, eventValue:z.value});
              break
            }
          }
          b = b.parent()
        }
      })
    }
  };
  b.append(a);
  l && l.length > 0 && (g(l), s && (e = new Kharma.UI.SortingLinks({callback:g, results:l, element:b, categoryId:e, publisherId:i, search:j, searchPage:k, wishListId:p, noPriceSorting:d.noPriceSorting, page:f, sorting:m}), e.selectLinks()));
  return{renderLinks:g}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Rating = function(g) {
  var g = g || {}, h = g.callback, a = g.classes || "", d = null, c = g.count || 0, e = g.showCount || !1, b = g.includeMicroData || !1, f = g.packageId, i = g.submitRatingCallback, l = f ? !0 : !1, j = g.value || 0, k = j || 0, n = g.downloaded, m, p, q, r;
  q = function(a) {
    j = a;
    m("selected", j);
    h ? h(j) : r()
  };
  p = function(a) {
    m("hover", a)
  };
  m = function(a, b) {
    var c = d;
    $(d.find("span")).length > 0 && (c = $(d.find("span")));
    c.children().each(function(c, d) {
      c < b ? $(d).addClass(a) : $(d).removeClass(a)
    })
  };
  r = function() {
    j !== k && (Kharma.io.flushCacheKey("/api/content/comments/" + f + ".json"), Kharma.io.flushCacheKey("/api/content/overview/" + f + ".json"), Kharma.io.post({uri:"/api/content/comments/" + f + ".json", parameters:{rating:j}, pageSpecific:!0, onSuccess:function() {
      i && i(j)
    }, onFailure:function() {
      new Kharma.TimedMessage({title:Kharma.login.user.is_anonymous ? Kharma.l10n.rating.errorLogin : Kharma.l10n.rating.error, message:Kharma.l10n.rating.errorMessage, timeout:7})
    }}), k = j)
  };
  return{render:function() {
    var f, g, i, h = function(a) {
      q(a.data.value)
    }, k = function(a) {
      p(a.data.value)
    };
    d = $("<div class='rating'></div>").addClass(a);
    b && (g = $("<span itemprop='ratingValue'>"), d.attr("itemprop", "aggregateRating"), d.attr("itemscope", ""), d.attr("itemtype", "http://schema.org/AggregateRating"), d.append(g));
    if(!l && j === 0) {
      return d.append("<span class='unrated'>" + Kharma.l10n.rating.notEnough + "</span>"), d
    }
    l && d.addClass("interactive");
    n === null && (l = !1, d.attr("title", Kharma.l10n.rating.notDownloaded), d.tooltip({show:{effect:"none", delay:0}}));
    d.on("mouseleave", function() {
      p(0)
    });
    for(f = 1;f <= 5;f++) {
      i = $("<div/>"), l && (i.on("click", {value:f}, h), i.on("mouseenter", {value:f}, k)), b ? g.append(i) : d.append(i)
    }
    m("selected", j);
    b && g.attr("content", d.find(".selected").length);
    e && c > 0 && (d.append("<div class='count'>(<span class='rating-count'></span>" + c + ")</div>"), b && (d.find(".count").attr("itemprop", "ratingCount"), d.find(".count").attr("content", c)));
    return d
  }, getValue:function() {
    return j
  }, setValue:q, submitRating:r}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.ScreenShot = function(g) {
  var h = null, a, d, c, e, b = 0, f, i, l, j, k, n, m, p, q, r, t, s, w, z, u, v, o, y = {}, B = [140, 126, 119, 91, 71], A = [5, 5, 5, 4, 3], x;
  p = function(a, b) {
    function c(a) {
      var b = d.protocol + "//" + d.hostname;
      b += !/^\//.test(d.pathname) ? "/" + d.pathname : d.pathname;
      var e = [], f;
      for(f in a) {
        a.hasOwnProperty(f) && e.push(f + "=" + a[f])
      }
      a = "?" + e.join("&");
      b += a;
      b += d.hash;
      return b
    }
    var d;
    if(a && b) {
      var e = {}, f, g, i = 0, h;
      d = document.createElement("a");
      d.href = b;
      f = d.search.replace("?", "");
      f = f !== "" ? f.split("&") : [];
      for(h = f.length;i < h;i++) {
        g = f[i].split("="), e[g[0].trim()] = g[1].trim()
      }
      return a === "youtube" ? (e.autoplay = 1, e.rel = 0, e.html5 = 1, c(e)) : a === "vimeo" ? (e.autoplay = 1, c(e)) : a === "soundcloud" ? (e.auto_play = "true", e.visual = "false", c(e)) : a === "mixcloud" ? (e.autoplay = "1", e.hide_cover = "1", c(e)) : a === "sketchfab" ? (e.autostart = "1", e.autospin = "0.2", e.controls = "1", c(e)) : a === "unity" ? "/unityplayer.html?" + b : ""
    }else {
      return""
    }
  };
  r = function(a) {
    var b = 0, d = A[f()];
    e = c = -1;
    k = [];
    $.each(a, function(a, d) {
      if(!d.type) {
        d.type = ""
      }
      var f = $('<img src="' + d.thumb + '" width="140" data-type="' + d.type + '" data-full="' + d.link + '" data-width="' + d.width + '" data-height="' + d.height + '" + data-index="' + b + '"/>');
      b++;
      k.push(f);
      i.append(f);
      $(f[0]).on("click", function(a) {
        var b = $(a.target), d = parseInt(b.attr("data-index"), 10);
        a.stopPropagation();
        if(c !== d) {
          if(c = d, e = b.attr("data-type"), y[b.attr("data-full")]) {
            w(y[b.attr("data-full")])
          }else {
            switch(m.show().css("left", b.position().left + b.width() / 2), e) {
              case "youtube":
              ;
              case "vimeo":
              ;
              case "soundcloud":
              ;
              case "mixcloud":
              ;
              case "sketchfab":
                b.attr("data-src", p(e, b.attr("data-full")));
                s(b);
                break;
              case "unityplayer":
                b.attr("data-src", "/unityplayer.html?" + b.attr("data-full"));
                s(b);
                break;
              default:
                t(b)
            }
          }
        }
      })
    });
    k.length <= d ? (j.css("visibility", "hidden"), l.css("visibility", "hidden")) : (j.addClass("right active"), j.on("click", function(a) {
      a.stopPropagation();
      z(1)
    }), l.on("click", function(a) {
      a.stopPropagation();
      z(-1)
    }));
    k.length <= 1 ? (o.css("visibility", "hidden"), v.css("visibility", "hidden")) : (o.on("click", function() {
      j.click();
      c < k.length - 1 && $(i.find("img")[c + 1]).click()
    }), v.on("click", function() {
      l.click();
      c > 0 && $(i.find("img")[c - 1]).click()
    }));
    x()
  };
  q = function(b) {
    var c = $("#imagestrip"), e = $('<a href="#" id="screenshot-close" class="button"><span class="icon right">' + Kharma.l10n.button.close + "</span></a>");
    c.length === 0 && (c = $("<div id='imagestrip' />"));
    c.html("");
    $("#contentoverview").after(c);
    d = $("<div id='screenshot-viwer-container' class='blocked' style='display: none;' />");
    n = $("<div id='screenshot-viwer' class='item' />");
    c.before(d);
    d.append(n);
    d.append(e);
    e.on("click", a);
    c.append(b);
    i = $("<div id='innerimagestrip' />");
    b.append(i);
    l = $("<div class='left'></div>");
    j = $("<div class='right'></div>");
    b.before(l);
    b.after(j);
    v = $("<div class='leftViewButton'></div>");
    o = $("<div class='rightViewButton'></div>");
    d.append(v);
    d.append(o);
    m = $('<div class="loading-indicator"></div>');
    i.append(m)
  };
  z = function(a) {
    var c = A[f()], a = b + a;
    k.length <= c || (a <= 0 ? (a = 0, l.addClass("left"), l.removeClass("active"), j.addClass("right active")) : (a >= k.length - c ? (a = k.length - c, j.addClass("right"), j.removeClass("active")) : j.addClass("right active"), l.addClass("left active")), a !== b && (b = a, i.animate({left:-b * (k[0].width() + 10)}, 400)))
  };
  a = function(a) {
    a && a.preventDefault();
    d && d.length > 0 && (e = c = -1, d.slideUp("", function() {
      n.empty()
    }), h.remove())
  };
  t = function(a) {
    var b = $('<img class="preview" />');
    b.on("load", function() {
      m.hide();
      var c = $('<div class="frame" data-type="image" />').append(b);
      y[a.attr("data-full")] = c;
      w(c)
    });
    b.attr("src", a.attr("data-full"))
  };
  s = function(a) {
    var b = $('<div class="frame" data-type="embed"/>'), c = $('<iframe type="text/html" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen />');
    c.attr("data-src", a.attr("data-src"));
    c.attr("width", a.attr("data-width"));
    c.attr("height", a.attr("data-height"));
    b.append(c);
    y[a.attr("data-full")] = b;
    w(b);
    m.hide()
  };
  w = function(a) {
    var e = a.children().first(), g = a.attr("data-type"), l = n.children().last(), j = l.attr("data-type"), m = 0, p = k[c], q = A[f()];
    n.append(a);
    d.css("display") === "none" ? (d.show().css({height:0}), m = Math.min(e.height(), 400), d.animate({height:e.height() + 22}, m, function() {
      if(g === "embed") {
        var b = a.children().first()[0];
        b.contentWindow.location.replace(b.getAttribute("data-src"))
      }
    }), u.animate({scrollTop:u.scrollTop() + d.position().top - 5}, m)) : (a.css("opacity", 0), m = Math.min(Math.abs(e.height() - l.children().first().height()) * 2, 400), d.animate({height:e.height() + 22}, m, function() {
      a.animate({opacity:1}, 300, function() {
        if(g === "embed") {
          var b = a.children().first()[0];
          b.contentWindow.location.replace(b.getAttribute("data-src"))
        }
        l && j === "embed" && l.children().first()[0].contentWindow.location.replace("")
      })
    }));
    k.length > 1 && (c > 0 ? v.addClass("active") : v.removeClass("active"), c < k.length - 1 ? o.addClass("active") : o.removeClass("active"));
    h = i.find("#active-bg");
    h.length === 0 ? (h = $("<div id='active-bg' />"), i.prepend(h), h.css({width:p.width() + 10, left:p.position().left + parseInt(p.css("margin-left"), 10) - 5}), h.fadeIn()) : h.animate({width:p.width() + 10, left:p.position().left + parseInt(p.css("margin-left"), 10) - 5}, 200);
    c - b >= q ? z(c - b - (q - 1)) : c < b && z(c - b)
  };
  f = function() {
    var a = 0, b, c, d = [Infinity, 1060, 980, 768, 478];
    if(window.ieFallback) {
      c = 0
    }else {
      for(b = d.length;a < b;a++) {
        if(Kharma.utils.windowWrapper.innerWidth() > d[a]) {
          break
        }
      }
      c !== a - 1 && (c = a - 1)
    }
    return c
  };
  x = function() {
    var a, d = i.find("#active-bg"), e = k.length, g = B[f()];
    if(k && e > 0) {
      for(a = 0;a < e;a++) {
        k[a].attr("width", g)
      }
      i.css("left", -b * (k[0].width() + 10));
      d.length > 0 && d.css({width:k[c].width() + 10, left:k[c].position().left})
    }
  };
  (function(a) {
    u = $("#mainContent");
    var b = $("<div id='imageblock' class='images' />");
    q(b);
    r(a)
  })(g);
  return{updateLayout:x}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.SharingBar = function(g) {
  var h, a, d = g || {}, c = {type:d.type}, e = d.url || Kharma.utils.windowWrapper.location.getHref(), b = d.title, f = d.twitterMessage, i, l;
  i = function(a, b, c) {
    a.attr("href", b);
    a.off().on("click", function() {
      l(c)
    });
    h.append(a)
  };
  l = function(a) {
    a = {socialNetwork:a, socialAction:"Share", hitType:"social", socialTarget:e, dimension8:d.type === "package" ? "Packages" : "Publishers"};
    if(c.publisherName) {
      a.dimension9 = c.publisherName
    }
    if(c.packageName) {
      a.dimension10 = c.packageName
    }
    Kharma.ga.social(a)
  };
  (function() {
    var g = $("<a target='_blank' class='externallink link'></a>"), l = $("<a title='" + Kharma.l10n.share.openUnity + "' target='_blank' class='externallink open-in-unity'></a>"), n = $("<a target='_blank' class='externallink twitter'></a>"), m = $("<a target='_blank' class='externallink facebook'></a>"), p = $("<a target='_blank' class='externallink googleplus'></a>");
    g.attr("title", Kharma.l10n.supplant(Kharma.l10n.share.openInExternalBrowser, {title:b}));
    n.attr("title", Kharma.l10n.supplant(Kharma.l10n.share.onTwitter, {title:b}));
    m.attr("title", Kharma.l10n.supplant(Kharma.l10n.share.onFb, {title:b}));
    p.attr("title", Kharma.l10n.supplant(Kharma.l10n.share.onGoogle, {title:b}));
    h = $("<div class='sharing'></div>");
    switch(d.type) {
      case "package":
        c.packageName = d.title;
        c.publisherName = d.publisher;
        break;
      case "publisher":
        c.publisherName = d.title
    }
    if(!Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated()) {
      h.append(l), g.attr("title", Kharma.l10n.supplant(Kharma.l10n.share.getLink, {title:b})), l.on("click", function() {
        var a = $.cookie("kharma_asac");
        document.location = "com.unity3d.kharma:" + (d.type === "list" ? "list" : d.type === "package" ? "content" : "publisher") + "/" + d.id + (typeof a === "string" && a.length > 0 ? "?asac=" + a : "")
      })
    }
    g.attr("href", e);
    h.append(g);
    g.click(function(b) {
      b.preventDefault();
      a && (a.remove(), a = null);
      var c = $(b.target).parents(".linkbar");
      a = $('<div class="copylink"><input type="text" readonly="readonly" value="' + e + '"><div class="close"></div></div>');
      $(a.find("input")).on("click", function(a) {
        a.preventDefault();
        a.stopPropagation()
      });
      c.length === 0 && (c = $(b.target));
      a.insertAfter(c).find(".close").off().on("click", function() {
        a.remove();
        a = null
      });
      $(document).on("keyup", function(b) {
        b.keyCode === 27 && (a.remove(), a = null)
      });
      $("input", a).select()
    });
    i(n, "http://twitter.com/?status=" + encodeURIComponent((f || Kharma.l10n.supplant(Kharma.l10n.share.twitterMessage, {title:b})) + " " + e + " #AssetStore"), "Tweet");
    i(m, "http://facebook.com/share.php?u=" + encodeURIComponent(e), "Facebook");
    i(p, "http://plus.google.com/share?url=" + encodeURIComponent(e), "Google+")
  })();
  return{getSharingBar:function() {
    return h
  }}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.ShowMoreList = function(g) {
  var h = {mostPopular:"Most Popular", searchResult:"Search Result", recommendations:"Recommendations", moreFromPublisher:"More From Publisher", topFree:"Top Free", topPaid:"Top Paid", topGrossing:"Top Grossing", topLatest:"Top Latest", topSale:"Top Sale"}, a = $("<div class='package-list-show-more'></div>"), g = g || {}, d = g.callback, c = g.element, e = g.results, b, f = g.withSorting, i = g.ga || null, l;
  l = function(b, c) {
    var e, f, g = "";
    c && a.empty();
    e = 0;
    for(f = b.length;e < f;e++) {
      g += d(b[e])
    }
    a.append(g);
    if(i) {
      a.off().on("click", function(b) {
        for(b = $(b.target);b.length > 0 && b !== a;) {
          if(b[0] === a[0]) {
            break
          }else {
            if(b.data("link")) {
              b = {eventCategory:"Inbound", nonInteraction:!0, eventAction:h[i.action], dimension9:b.data("publisher") || "n/a", dimension10:b.data("package") || "n/a"};
              if(i.value) {
                b.eventValue = i.value
              }
              if(i.label) {
                b.eventLabel = i.label
              }
              Kharma.ga.event(b);
              break
            }
          }
          b = b.parent()
        }
      })
    }
  };
  c.append(a);
  f && (b = new Kharma.UI.SortingLinks({results:e, element:c, callback:l}), b.selectLinks());
  return{addShowAllLink:function(a) {
    c.append($("<a class='show-all' href=#!" + a + ">" + Kharma.l10n.button.showAll + "</a>"))
  }, addShowMoreLink:function(d, e, g) {
    var i = !1, h = $("<div class='show-more'><a>" + Kharma.l10n.button.showMore + "</a><div></div></div>");
    c.append(h);
    h.on("click", function() {
      var q = h.detach(), r = q.find("a");
      i ? (r.text(Kharma.l10n.button.showMore), q.removeClass("hide"), a.empty(), f && b.sort(d.slice(0, e)), c.find(".sortby.bottom-links").remove(), $("#assetStore").animate({scrollTop:g.offset().top + $("#assetStore").scrollTop() - 30}, "slow"), l(d.slice(0, e)), i = !1) : (r.text(Kharma.l10n.button.hideMore), q.addClass("hide"), f && (d.length > 16 && new Kharma.UI.SortingLinks({results:d, element:c, callback:l}), $(".sortlink").hasClass("selected") && (a.empty(), b.sort(d))), l(d), i = !0);
      c.append(q);
      f && b.selectLinks()
    })
  }, renderLinks:l}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.Slider = function(g) {
  var h = g.base, a = g.element, d = g.primaries, c = g.shuffle, e = g.template, b = g.options || {}, f, i, l, j;
  f = function() {
    $(".carousel-slider").prepend('<div id="pager"></div>');
    $(".play_btn").addClass("selected");
    $(".play_btn").click(function() {
      $(".primaries").cycle("resume", !0);
      $(".play_btn").addClass("selected");
      $(".pause_btn").removeClass("selected");
      return!1
    });
    $(".pause_btn").click(function() {
      $(".primaries").cycle("pause");
      $(".pause_btn").addClass("selected");
      $(".play_btn").removeClass("selected");
      return!1
    });
    $(".primaries").cycle({fx:"scrollHorz", pager:"#pager", timeout:5E3, speed:1E3, pause:1, delay:0, random:0})
  };
  i = function(a) {
    var a = a.data.value, b = a.primary;
    Kharma.ga.event({eventCategory:"Promotion", nonInteraction:!0, eventAction:"Home Primary", eventLabel:"Carousel " + a.i, dimension9:b.publisher ? b.publisher.label : "", dimension10:b.title})
  };
  l = function(a, c, d) {
    var f = $("<div class='background'></div>"), l = $('<div class="blocked full">'), j = $('<div class="overview-text-overlay">'), t, a = a[c];
    d.append(f);
    a.keyimage && f.css("background-image", "url(" + (a.keyimage.big || a.keyimage.home_primary) + ")");
    if(e === "assetkits") {
      l.append(j), f.append(l), j.append('<div class="pre-header">ASSET KIT</div>'), j.append("<h1>" + a.title + "</h1>"), j.append('<div class="description">' + a.description + "</div>"), t = $('<div class="includes"><h2>Pack includes</h2></div>'), j.append(t), $.each(a.packages, function(a, b) {
        t.append('<a href="' + b.url + '">' + b.name + "</a><br>")
      }), d = $('<div class="value">VALUE </div>'), d.append(' <span class="now">' + Kharma.helper.getFormattedPrice(a.price) + "</span>"), d.append(' <span class="before">' + Kharma.helper.getFormattedPrice(a.original_price) + "</span>"), j.append(d), d = b.pro ? '<a target="_blank" href="' + a.subscription + '">PRO subscription</a>' : '<a target="_blank" href="' + a.subscription + '">PLUS subscription</a>', d = $('<div class="saved"><span class="percentage">' + a.discount.percentage + "% OFF</span> with " + 
      d + "</div>"), j.append(d), f.prepend($('<a href="' + a.url + '" class="livelink"></a>').css({display:"block", height:"100%"}))
    }else {
      if(a.flags && !a.flags.no_text_on_big_keyimage && a.link && a.link.type !== "banner") {
        g.addSaleBanner(a, f), l.append(j), f.append(l), h.createFull({element:j, data:a, callback:function() {
          h.setExternalLinks("fulldescription")
        }, level11:a.price_level11member}), $(j.find("h1")).empty().append($('<a href="#!/content/' + a.id + '" class="livelink">' + a.title + "</a>"))
      }else {
        if(l.hide(), a.flags && a.flags.override_url || a.link && a.link.type === "banner") {
          f.prepend($('<a href="' + a.url + '" class="livelink"></a>').css({display:"block", height:"100%"})), f.css({"background-position":"center"})
        }
      }
    }
    f.off("click").on("click", {value:{i:c, primary:a}}, i)
  };
  j = function(a) {
    for(var b = a.length, c, d;0 !== b;) {
      d = Math.floor(Math.random() * b), b -= 1, c = a[b], a[b] = a[d], a[d] = c
    }
    b = 0;
    for(c = a.length;b < c;b++) {
      a[b].pinned && (a[b] = a.splice(a[b].pinned - 1, 1, a[b])[0])
    }
    return[].concat(a)
  };
  (function() {
    if(!c || c === !0) {
      d = j(d)
    }
    for(var b = 0, e = d.length;b < e;b++) {
      l(d, b, a)
    }
    e > 1 && (a.css("width", (e + 1) * NaN), f())
  })();
  return{clear:function() {
    $(".primaries").cycle("destroy");
    h.clear()
  }}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.SmallSlider = function(g) {
  var h, a, d = 0, c, e = g.container, b = g.callback || g.base.miniLink, f = $(e.find(".body")), i = g.data.results || g.data.result, l, j, k, n, m, p;
  j = function() {
    $(e.find(".right")).off("click").on("click", function(a) {
      m(a)
    });
    $(e.find(".left")).off("click").on("click", function(a) {
      p(a)
    })
  };
  k = function() {
    f.off().on("click", function(a) {
      for(a = $(a.target);a.length > 0 && a !== f;) {
        if(a[0] === f[0]) {
          break
        }else {
          if(a.data("link")) {
            Kharma.ga.event({eventCategory:"Inbound", nonInteraction:!0, eventAction:g.data.action === "also_purchased" ? "People also bought" : "recommendations", dimension9:a.data("publisher") || "n/a", dimension10:a.data("package") || "n/a"});
            break
          }
        }
        a = a.parent()
      }
    })
  };
  n = function(e) {
    var e = e || g.container, j;
    f = $(e.find(".body"));
    h = Math.floor(parseInt(e.css("width"), 10) / l);
    f.find(".empty").remove();
    f.animate({left:0}, 0);
    if(d > 0) {
      for(;d;) {
        $(f.find(".littleblock")).last().remove(), d--
      }
    }
    a = c;
    if(c % h === 1) {
      for(j = 0;j < h - 1;j++) {
        f.append($("<div class='empty'></div>")), a++
      }
    }else {
      if(c % h === 2) {
        for(j = 0;j < h - 2;j++) {
          f.append($("<div class='empty'></div>")), a++
        }
      }
    }
    if(i.length > 2) {
      for(j = 0;j < 3;j++) {
        f.append(b(i[j])), d = 3
      }
    }
    c > 3 && $(e.find(".counter-set")).text((h > 1 ? "1-" : "") + h + " of " + c)
  };
  m = function(b) {
    var d = Math.floor(parseInt(e.css("width"), 10) / l), g = f.position() && f.position().left, g = f.position() && g === 11 ? d : -Math.round(g / l) + d;
    b && (b.stopPropagation(), b.preventDefault());
    $(e.find(".counter-set")).text((d > 1 ? (g + d > a ? "1" : g + 1) + "-" : "") + (g + d === a ? c : g + d > a ? d : g + d) + " of " + c);
    g !== a ? f.is(":animated") || f.animate({left:-g * l}, 500) : f.is(":animated") || f.animate({left:-g * l}, 500, function() {
      f.animate({left:0}, 0)
    })
  };
  p = function(b) {
    var d = Math.floor(parseInt(e.css("width"), 10) / l), g = f.position() && f.position().left, g = f.position() && g === 11 ? 0 : -Math.round(g / l);
    b && (b.stopPropagation(), b.preventDefault());
    f.is(":animated") || $(e.find(".counter-set")).text((d > 1 ? (g === 0 ? a - d + 1 : g === d ? "1" : g - d + 1) + "-" : "") + (g === 0 ? c : g) + " of " + c);
    g === 0 ? f.is(":animated") || (f.css("left", -a * l), f.animate({left:-((a - d) * l)}, 500)) : f.is(":animated") || f.animate({left:-((g - d) * l)}, 500)
  };
  (function() {
    var d;
    d = 0;
    for(c = i.length;d < c;d++) {
      f.append(b(i[d]))
    }
    k();
    e.find(".head").append("<div class='counter-set'></div>");
    l = parseInt($($(".littleblock")[0]).css("width"), 10) + 16;
    n();
    c > 1 && (f.css("width", (a + h) * l), c > h && ($(e.find(".head")).after($("<div class='left'></div>")), e.append($("<div class='right'></div>")), j()))
  })();
  return{resize:n}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.SortingLinks = function(g) {
  var h = g || {}, g = h.results, a = h.element, d = h.callback, c = h.categoryId, e = h.publisherId, b = h.wishListId, f = h.search, i = h.searchPage, l = c || e || b, j = h.page, k = h.sorting, n = [{key:"wished_date_iso", text:Kharma.l10n.sorting.addedDate, sorting:"addeddate"}, {key:"weight", text:Kharma.l10n.sorting.relevance, sorting:"relevance"}, {key:"hotness", text:Kharma.l10n.sorting.popularity, sorting:"popularity"}, {key:"title", text:Kharma.l10n.sorting.name, sorting:"name"}, {key:"price", 
  text:Kharma.l10n.sorting.price, sorting:"price"}, {key:"rating", text:Kharma.l10n.sorting.rating, sorting:"rating"}, {key:"pubdate_iso", text:Kharma.l10n.sorting.updated, sorting:"updated"}], m = c ? "category" : e ? "publisher" : b ? "wishlist" : "", p, q, r, t;
  p = function(a) {
    $(".sortlink").off("click").on("click", {results:a}, function(a) {
      var g = a.data.results, h = $(a.target), n = h.attr("sorting");
      a.stopPropagation();
      a.preventDefault();
      $(".sortlink").removeClass("selected");
      Kharma.UI.SortingLinks.previousSort = k = h.attr("sort-by");
      r();
      !c && !e && !b && !i ? (t(g), d && (d(g, !0), $("#catresults").offset() ? $("#assetStore").animate({scrollTop:$("#catresults").offset().top + $("body").scrollTop() - 80}, "slow") : $("#recommendations").offset() && $("#assetStore").animate({scrollTop:$("#recommendations").offset().top + $("#assetStore").scrollTop() - 30}, "slow"))) : i ? (g = !isNaN(parseInt(j, 10)) ? "/search/page=" + j + "/sortby=" + n + "/query=" + f : "/search/sortby=" + n + "/query=" + f, Kharma.utils.windowWrapper.history.replaceState({}, 
      document.title, Kharma.utils.windowWrapper.location.getHref().replace(Kharma.utils.windowWrapper.location.getHash(), "#!" + g)), Kharma.search.goToSearchPage(a, n)) : $.address.value(!isNaN(parseInt(j, 10)) ? "/" + m + "/" + l + "/page=" + j + "/sortby=" + n : "/" + m + "/" + l + "/sortby=" + n)
    })
  };
  q = function(a, b) {
    var c = a.title.toLowerCase(), d = b.title.toLowerCase();
    switch(k) {
      case "price":
        c = a.price ? parseFloat(a.price.USD) : 0;
        d = b.price ? parseFloat(b.price.USD) : 0;
        break;
      case "rating":
        c = b.rating && b.rating.average ? parseInt(b.rating.average, 10) : 0;
        d = a.rating && a.rating.average ? parseInt(a.rating.average, 10) : 0;
        break;
      case "pubdate_iso":
        c = b.pubdate_iso;
        d = a.pubdate_iso;
        break;
      case "wished_date_iso":
        c = b.wished_date_iso;
        d = a.wished_date_iso;
        break;
      case "hotness":
        c = parseFloat(b.hotness);
        d = parseFloat(a.hotness);
        break;
      case "weight":
        c = b.weight, d = a.weight
    }
    c = c < d ? -1 : c > d ? 1 : 0;
    k === "rating" && c === 0 && (c = parseInt(b.rating.count, 10) < parseInt(a.rating.count, 10) ? -1 : parseInt(b.rating.count, 10) > parseInt(a.rating.count, 10) ? 1 : 0);
    c === 0 && (c = b.hotness < a.hotness ? -1 : b.hotness > a.hotness ? 1 : 0);
    c === 0 && (c = a.title < b.title ? -1 : a.title > b.title ? 1 : 0);
    return c
  };
  r = function() {
    $.each($(".sortlink"), function(a, b) {
      b = $(b);
      b.attr("sorting") && b.attr("sorting") === k ? b.addClass("selected") : b.attr("sort-by") === k && b.addClass("selected")
    })
  };
  t = function(a) {
    p(a);
    a.sort(q)
  };
  (function(a, g) {
    var l = h.wishListId ? 0 : 1, j;
    j = a[0];
    var m = $("<div class='sortby'></div>"), o, q = $("<p><span>" + Kharma.l10n.sorting.sortBy + "</span> </p>");
    h.noPriceSorting && n.splice(4, 1);
    k || (k = Kharma.UI.SortingLinks.previousSort ? Kharma.UI.SortingLinks.previousSort : j.wished_date_iso ? "wished_date_iso" : j.weight ? "weight" : j.hotness ? "hotness" : "title");
    r();
    for(j = n.length;l < j;l++) {
      o = $("<a class='sortlink' sorting=" + n[l].sorting + " sort-by=" + n[l].key + ">" + n[l].text + "</a>"), q.append(o), l + 1 < n.length && q.append('<span class="split"> / </span>')
    }
    f || $(q.find("[sorting=relevance]")).addClass("disabled");
    m.append(q);
    !c && !e && !b && !i && (t(a), d && d(a));
    g.find(".sortby").length === 0 ? g.prepend(m) : g.append(m.addClass("bottom-links"));
    p(a)
  })(g, a);
  return{selectLinks:r, sort:t}
};
Kharma.UI.Toolbar = function() {
  var g, h = null, a, d = null, c, e, b, f, i, l, j, k, n, m, p, q, r, t;
  e = function(a) {
    a.removeClass("not-active")
  };
  i = function(a) {
    a.addClass("not-active")
  };
  b = function() {
    $("#back").off().on("click", l);
    $("#home").off().on("click", k);
    $("#forward").off().on("click", j);
    $("#wishList").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      t || (t = new Kharma.UI.WishListDropDown);
      t.toggleDropDown()
    });
    $("#search").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      a = $("#editorSearchArea");
      a.hasClass("active") ? a.removeClass("active") : a.addClass("active")
    });
    $("#editorSearchForm").on("submit", function(a) {
      a.preventDefault();
      var b = a.target, a = a.target.search.value;
      if(a !== "") {
        $.address.value("/search/" + encodeURIComponent(a)), b.search.value = "", $("#editorSearchArea").removeClass("active")
      }
    });
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      r()
    });
    $("body").on("click", function(a) {
      $(a.target).attr("id") !== "editorSearchInput" && $("#editorSearchArea").removeClass("active")
    });
    h.addEvents()
  };
  f = function() {
    var a = $("<header id='header' class='main'></header>"), b = $("<div id='historyarea'></div>");
    a.append(b);
    b.append(Handlebars.templates.toolbar({buttons:c.strips}));
    Kharma.unityEditor.isEmulated() && $(".button-group", b).first().css("display", "none");
    $("#assetStore").prepend(a);
    $("#historyarea #search").removeClass("not-active")
  };
  j = function(b) {
    q(b);
    !Kharma.cart.active && !a && ($("#forward").hasClass("not-active") || n(1))
  };
  l = function(b) {
    q(b);
    !Kharma.cart.active && !a && ($("#back").hasClass("not-active") || n(-1))
  };
  k = function(a) {
    q(a);
    $("#home").hasClass("not-active") || $.address.value("/home")
  };
  n = function(a) {
    var b;
    if(!Kharma.cart.active) {
      d = new Kharma.UI.Loader($("#pageload"), Kharma.l10n.page.loading), Kharma.history.setDistance(a), b = Kharma.history.getHistory()[Kharma.history.getIndex() + a], Kharma.history.page = b, Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated() && !Kharma.unityEditor.isChromium() ? Kharma.utils.windowWrapper.location.setHash(b.getRequestUrl()) : Kharma.utils.windowWrapper.history.go(a)
    }
  };
  m = function() {
    var b = $("#back"), c = $("#forward"), d = Kharma.history.getHistory(), f = Kharma.history.getIndex();
    f !== null && d.length > 0 && !a && !g ? (f > 0 ? e(b) : i(b), f < d.length - 1 ? e(c) : i(c)) : (i(b), i(c))
  };
  p = function() {
    var a = $("#wishList");
    a.hasClass("toggled") || (Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous ? e(a) : i(a))
  };
  r = function() {
    m();
    p();
    h.updateButtons()
  };
  q = function(a) {
    a && (a.stopPropagation(), a.preventDefault())
  };
  (function() {
    h = new Kharma.Header;
    c = {strips:[[{name:"back"}, {name:"forward"}], [{name:"home"}, {name:"categories"}], [{name:"downloads"}, {name:"cart"}, {name:"wishList"}]]};
    $("#mainContent").on(Kharma.utils.events.onUserStateChange, function() {
      var a = $("#historyarea #search");
      $("#header").find(".memo").length === 0 && $("#header").append("<div class='memo'><div id='unavMemo'><div id='unavMemoCount'></div></div></div>");
      if(Kharma.login && Kharma.login.user && !Kharma.login.user.is_anonymous) {
        if($("#unavMemo").removeClass("open disabled"), !Kharma.memo) {
          Kharma.memo = new Kharma.Memo
        }
      }else {
        if($("#unavMemo").addClass("open disabled"), Kharma.memo) {
          Kharma.memo.stopPolling(), Kharma.memo = null
        }
      }
      a.addClass("hide")
    });
    g = a = !1;
    f();
    b()
  })();
  return{addAdministration:h.addAdministration, addAdminModeButton:h.addAdminModeButton, goAdmin:h.goAdmin, goDownloads:h.goDownloads, goPage:n, loader:d, removeAdministration:h.removeAdministration, updateButtons:r}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.TopList = function(g, h) {
  return{render:function(a) {
    a.empty();
    a.append(Handlebars.templates.topList({noPackages:Kharma.l10n.page.noPackages, isSale:h, item:g}))
  }}
};
Kharma.UI = Kharma.UI || {};
Kharma.UI.TreeList = function(g, h, a) {
  var d = !1, c, e;
  c = function() {
    var a = $(this).siblings("ul");
    $(this).toggleClass("node-btn-open");
    a.slideToggle()
  };
  e = function(b, c, d, g) {
    var h = $("<ul/>"), k, n;
    c && (h.attr("id", c).addClass("tree-list"), c = null);
    $.each(b, function(b, p) {
      var q = p.id || p.data, r, t = p.name || p.label, s = $("<li/>");
      if(t === "Other") {
        t = Kharma.l10n.categories.other
      }
      n = d === 0 ? t : g + "/" + t;
      p.id && (k = q === "home" ? "#!/" + q : "#!/search/page=1/sortby=" + (a || "popularity") + "/query=category:" + q);
      Kharma.helper.categories[q] = n.toLowerCase();
      Kharma.helper.categories[n.toLowerCase()] = q;
      Kharma.helper.categories[q] = n;
      Kharma.helper.categories[n] = q;
      if(p.id || p.data) {
        r = $("<a/>").attr("data-path", n).attr("href", k).addClass("livelink cat-" + q.replace(/ /g, "_").replace(/\//g, "_"))
      }
      r.text(t);
      p.count && r.append($("<span/>").addClass("count").text(p.count));
      s.append(r);
      p.subs && s.append(e(p.subs, c, d + 1, n));
      p.node && s.append(e(p.node, c, d + 1, n));
      h.append(s)
    });
    return h
  };
  return{refresh:function(a) {
    var a = decodeURIComponent(a).replace(/ /g, "_").replace(/\//g, "_"), c = $("#" + g + " a.cat-" + a);
    $("#" + g + " a.active-item").removeClass("active-item");
    $("#" + g + " a.cat-" + a).addClass("active-item");
    (!g || g === "home") && $("#" + g + " a").prev(".node-btn-open").trigger("autoclick");
    $("#" + g + " > li > a").not(c.parentsUntil(".tree-list").find("a")).prev(".node-btn-open").trigger("autoclick");
    c.parentsUntil(".tree-list").each(function() {
      $(this).siblings(".node-btn").not(".node-btn-open").trigger("autoclick")
    });
    c.prev(".node-btn").not(".node-btn-open").trigger("autoclick")
  }, render:function(a, f) {
    var i;
    i = $("<span/>").attr("class", "node-btn");
    var l, f = decodeURIComponent(f).replace(/ /g, "_").replace(/\//g, "_");
    d || (d = !0, g && a && h && (l = e(h.categories, g, 0), a.append(l)), i.on("click autoclick", c), $("#" + g + " li:has(ul)").prepend(i), $("#" + g + " li:not(li:has(ul))").prepend($("<span/>").attr("class", "node-btn node-empty")), $("#" + g + " li:has(.cat-home) span").removeClass("node-empty").addClass("node-home"), i = $("#" + g + " a.cat-" + f), $("#" + g + " a.active-item").removeClass("active-item"), $("#" + g + " a.cat-" + f).addClass("active-item"), (!g || g === "home") && $("#" + g + 
    " a").prev(".node-btn-open").trigger("autoclick"), (i.parent().parent().attr("id") === "categoryTree" || i.parent().parent().attr("id") === "mobileCategoryTree") && $("#" + g + " > li > a").not(i).prev(".node-btn-open").trigger("autoclick"), i.parentsUntil(".tree-list").each(function() {
      $(this).siblings(".node-btn").not(".node-btn-open").trigger("autoclick")
    }), i.prev(".node-btn").not(".node-btn-open").trigger("autoclick"))
  }}
};
Kharma.UI.WishListDropDown = function() {
  var g, h;
  g = function() {
    $(".wish-list-buy").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      Kharma.cart.addItem($(a.target).attr("data-id"), !0)
    });
    $(".wish-list").off().on("click", function(a) {
      a.stopPropagation();
      a.preventDefault();
      Kharma.wishList.deleteFromWishList($(a.target).attr("data-id"))
    })
  };
  h = function() {
    Kharma.wishList.getWishList(Kharma.login.user.id, function(a, d) {
      $(".wish-list-drop-down").html(Handlebars.templates.wishListDropDown({id:Kharma.login.user.id, results:a || [], total:d || 0, wishListIsEmpty:Kharma.l10n.wishList.empty, seeAll:Kharma.l10n.wishList.seeAll}));
      g()
    }, null, null, 3)
  };
  (function() {
    $("#mainContent").on(Kharma.utils.events.onAddedToWishList + " " + Kharma.utils.events.onDeletedFromWishList + " " + Kharma.utils.events.onPurchaseSuccessful, function(a) {
      a.stopPropagation();
      a.preventDefault();
      h(a)
    });
    $("body").on("click", function() {
      $(".wish-list-drop-down").hide()
    })
  })();
  return{toggleDropDown:function() {
    var a = $(".wish-list-drop-down");
    if(!$("#wishList").hasClass("not-active")) {
      if(a.length) {
        a.is(":visible") ? a.hide() : a.show()
      }else {
        if(!Kharma.wishList) {
          Kharma.wishList = new Kharma.WishList
        }
        $("#header").append('<div class="wish-list-drop-down">');
        h()
      }
    }
  }}
};
Kharma.utils = Kharma.utils || {};
Kharma.utils.events = {onAddedToWishList:"onAddedToWishList", onCategoryTreeLoaded:"onCategoryTreeLoaded", onDeletedFromWishList:"onDeletedFromWishList", onDownloadProgress:"onDownloadProgress", onLoginSuccessful:"onLoginSuccessful", onMixamoAnimationDownload:"onMixamoAnimationDownload", onPageLoadComplete:"onPageLoadComplete", onPageLoadStart:"onPageLoadStart", onPurchaseSuccessful:"onPurchaseSuccessful", onResultsLoaded:"onResultsLoaded", onUserLogin:"onUserLogin", onUserStateChange:"onUserStateChange", 
onWishList:"onWishList", onLanguageChange:"onLanguageChange", onMemoSubscriptionsChanged:"onMemoSubscriptionsChanged", onMemoBlur:"onMemoBlur", onPublisherId:"onPublisherId", onPublisherName:"onPublisherName"};
Kharma.Icons = {folder:"icons/folder.png", unity:"icons/scene.png", anim:"icons/animation.png", cubemap:"icons/cubemap.png", flare:"icons/flare.png", fontsettings:"icons/font.png", rendertexture:"icons/rendertexture.png", physicmaterial:"icons/physicmaterial.png", guiskin:"icons/guiskin.png", asset:"icons/terrain.png", projectsettings:"icons/GameManager@16.png", sbsar:"icons/SubstanceArchive@16.png", mat:"icons/material.png", prefab:"icons/prefab.png", ogg:"icons/audio.png", aif:"icons/audio.png", 
aiff:"icons/audio.png", wav:"icons/audio.png", mp3:"icons/audio.png", mod:"icons/audio.png", it:"icons/audio.png", s3m:"icons/audio.png", ext:"icons/audio.png", dds:"icons/default.png", fbx:"icons/model.png", mb:"icons/model.png", ma:"icons/model.png", max:"icons/model.png", jas:"icons/model.png", dae:"icons/model.png", dfx:"icons/model.png", obj:"icons/model.png", c4d:"icons/model.png", blend:"icons/model.png", "3ds":"icons/model.png", dll:"icons/monoscript.png", mov:"icons/movie.png", avi:"icons/movie.png", 
asf:"icons/movie.png", mpg:"icons/movie.png", mpeg:"icons/movie.png", mp4:"icons/movie.png", cginc:"icons/shader.png", shader:"icons/shader.png", txt:"icons/text.png", html:"icons/text.png", htm:"icons/text.png", xml:"icons/text.png", bytes:"icons/text.png", cs:"icons/script.png", js:"icons/script.png", boo:"icons/script.png", jpg:"icons/image.png", jpeg:"icons/image.png", tif:"icons/image.png", tiff:"icons/image.png", tga:"icons/image.png", gif:"icons/image.png", png:"icons/image.png", psd:"icons/image.png", 
bmp:"icons/image.png", iff:"icons/image.png", pict:"icons/image.png", pic:"icons/image.png", pct:"icons/image.png", exr:"icons/image.png", ttf:"icons/font.png", dfont:"icons/font.png", otf:"icons/font.png"};
Kharma.utils.IframeTransport = function() {
  return{createForm:function(g) {
    $("#postFrameId").remove();
    $("body").append($("<iframe/>").attr("name", "postFrame").attr("id", "postFrameId").attr("src", "templates/iframe/payloader.html").attr("style", "width: 500px; height: 740px; position: absolute; left: 0; top: 31px;z-index: 10000; display: none;").one("load", g))
  }, prepareFormData:function(g, h) {
    var a = $(Kharma.utils.windowWrapper.frames.postFrame.document.getElementById("payloadForm"));
    a.empty();
    a.attr("action", g);
    $.each(h, function(d, c) {
      a.append($("<input/>").attr("type", "text").attr("name", d).attr("value", c))
    })
  }}
};
Kharma.utils = Kharma.utils || {};
Kharma.utils.WindowWrapper = function() {
  var g, h;
  g = function() {
    return window.location.host
  };
  h = function() {
    return window.location.protocol
  };
  return{clearInterval:function(a) {
    return window.clearInterval(a)
  }, clearTimeout:function(a) {
    return window.clearTimeout(a)
  }, frames:window.frames, hasProperty:function(a) {
    window.hasOwnProperty(a)
  }, history:{hasHistory:function() {
    return window.history && window.history.pushState ? !0 : !1
  }, go:function(a) {
    window.history.go(a)
  }, replaceState:function(a, d, c) {
    window.history.replaceState(a, d, c)
  }}, innerHeight:function() {
    return window.innerHeight
  }, innerWidth:function() {
    return window.innerWidth
  }, isIE11:function() {
    return!window.ActiveXObject && "ActiveXObject" in window
  }, location:{getHash:function() {
    return window.location.hash
  }, getHref:function() {
    return window.location.href
  }, getHost:g, getOrigin:function() {
    return Kharma.unityEditor.isUnity4x() ? h() + "//" + g() : window.location.origin
  }, getPathName:function() {
    return window.location.pathname
  }, getProtocol:h, reload:function() {
    window.location.reload()
  }, replace:function(a) {
    window.location.replace(a)
  }, setHash:function(a) {
    window.location.hash = a
  }, setHref:function(a) {
    window.location.href = a
  }}, navigator:{appVersion:window.navigator.appVersion, userAgent:window.navigator.userAgent}, onhashchange:function(a) {
    $(window).on("hashchange", a)
  }, onError:function(a) {
    window.onerror = a
  }, onResize:function() {
    window.onresize = function() {
      var a = Kharma.history.getCurrentPage();
      if(a.onResize instanceof Function) {
        a.onResize()
      }
      if(Kharma.toolbar.onResize instanceof Function) {
        Kharma.toolbar.onResize()
      }
    }
  }, open:function(a) {
    window.open(a)
  }, scrollTo:function(a, d) {
    window.scrollTo(a, d)
  }, setInterval:function(a, d) {
    return window.setInterval(a, d)
  }, setTimeout:function(a, d) {
    return window.setInterval(a, d)
  }}
};
Kharma.Init = function(g) {
  var h, a, d, c, e, b;
  b = function() {
    d();
    a();
    if(!Kharma.unityContext) {
      Kharma.unityContext = new Kharma.UnityContext
    }
    Kharma.unityContext.isEnabled(function(a) {
      if(a) {
        window.context = Kharma.unityContext
      }
      if(!Kharma.session) {
        Kharma.session = new Kharma.Session
      }
      if(!Kharma.layoutHelper) {
        Kharma.layoutHelper = new Kharma.LayoutHelper
      }
      if(!Kharma.history) {
        Kharma.history = new Kharma.History
      }
      if(!Kharma.toolbar) {
        Kharma.toolbar = Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated() ? new Kharma.UI.Toolbar : new Kharma.UI.BrowserToolbar
      }
      Kharma.io || h();
      if(!Kharma.router) {
        Kharma.router = new Kharma.Router
      }
      if(!Kharma.login) {
        Kharma.login = new Kharma.Login(Kharma.unityEditor.isEditor() || Kharma.unityEditor.isEmulated() ? $("#header") : $())
      }
      if(!Kharma.ga) {
        Kharma.ga = new Kharma.GA
      }
      if(!Kharma.cart) {
        Kharma.cart = Kharma.cart || new Kharma.Cart
      }
      if(!Kharma.download) {
        Kharma.download = new Kharma.Download
      }
      if(!Kharma.downloadProgressTracker) {
        Kharma.downloadProgressTracker = new Kharma.DownloadProgressTracker
      }
      if(Kharma.Screensaver && !Kharma.screensaver && !Kharma.unityEditor.isEditor() && !Kharma.unityEditor.isEmulated()) {
        Kharma.screensaver = new Kharma.Screensaver
      }
      Kharma.router.dispatch(g)
    })
  };
  h = function() {
    Kharma.io = new Kharma.IO;
    Kharma.io.get = Kharma.io.buildIOWrapper({method:"get"});
    Kharma.io.post = Kharma.io.buildIOWrapper({method:"post"});
    Kharma.io.del = Kharma.io.buildIOWrapper({method:"delete", requestHeaders:{"X-HTTP-Method-Override":"DELETE"}});
    setInterval(Kharma.io.flushCacheExpired, Kharma.io.getCacheDefaultExpiryPeriod())
  };
  a = function() {
    if(!Kharma.sessionStorage) {
      Kharma.sessionStorage = Kharma.unityEditor.isEditor() ? $.isEmptyObject(new Kharma.Storage.UnityEditorSessionStorage) ? new Kharma.Storage.FallbackStorage : new Kharma.Storage.UnityEditorSessionStorage : new Kharma.Storage.HTML5SessionStorage
    }
    if(!Kharma.localStorage) {
      Kharma.localStorage = Kharma.unityEditor.isEditor() ? $.isEmptyObject(new Kharma.Storage.UnityEditorLocalStorage) ? new Kharma.Storage.FallbackStorage : new Kharma.Storage.UnityEditorLocalStorage : new Kharma.Storage.HTML5LocalStorage
    }
  };
  d = function() {
    if(Kharma.unityEditor.isEditor() && Kharma.utils.windowWrapper.location.getHref().indexOf("only_to_be_used_for_development.html") === -1) {
      window.oncontextmenu = function() {
        return!1
      }
    }
  };
  c = function() {
    return Kharma.utils.windowWrapper.navigator.userAgent.match(/Chrome\//)
  };
  e = function() {
    return Kharma.utils.windowWrapper.navigator.userAgent.match(/Unity\//) && Kharma.utils.windowWrapper.navigator.userAgent.match(/Unity\//).length > 0
  };
  (function() {
    if(!Kharma.utils.windowWrapper) {
      Kharma.utils.windowWrapper = new Kharma.utils.WindowWrapper
    }
    Kharma.helper.loadLanguage("en-US", function() {
      if(!Kharma.errorHandler) {
        Kharma.errorHandler = new Kharma.ErrorHandler
      }
      if(!Kharma.errorsHelper) {
        Kharma.errorsHelper = new Kharma.ErrorsHelper
      }
      if(!Kharma.addressHelper) {
        Kharma.addressHelper = new Kharma.AddressHelper
      }
      if(!Kharma.assetStore) {
        Kharma.assetStore = new Kharma.AssetStore
      }
      if(e() && c()) {
        Kharma.unityEditor ? b() : Kharma.unityEditor = new Kharma.UnityEditor(function() {
          b()
        })
      }else {
        if(!Kharma.unityEditor) {
          Kharma.unityEditor = new Kharma.UnityEditor
        }
        b()
      }
    })
  })()
};
$.address.change(function(g) {
  Kharma.router ? Kharma.router.dispatch(g) : new Kharma.Init(g)
});
(function() {
  var g = Handlebars.template, h = Handlebars.templates = Handlebars.templates || {};
  h.accountPage = g({"1":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <div class="head">\n        <h2>' + f((b = (b = d.credits || (a != null ? a.credits : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"credits", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body credits">\n        <div class="credits-info">\n            <p>' + f((b = (b = d.balance || (a != null ? a.balance : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"balance", hash:{}, data:e}) : b)) + ':</p>\n            <p class="amount">' + f((b = 
    (b = d.creditsAmount || (a != null ? a.creditsAmount : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"creditsAmount", hash:{}, data:e}) : b)) + "</p>\n        </div>\n    </div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<section id="account" class="section header-box">\n    <div class="head user-name-header">\n        <h2 class="user-name">' + g((b = (b = d.userName || (a != null ? a.userName : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"userName", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body user">\n        <a href="http://gravatar.com" target="_blank" title="' + g((b = (b = d.gravatar || (a != null ? a.gravatar : 
    a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"gravatar", hash:{}, data:e}) : b)) + '"><img class="bioimage"></a>\n        <p class="bio">', c = (d.formattedBio || a && a.formattedBio || f).call(a, a != null ? a.bioText : a, {name:"formattedBio", hash:{}, data:e});
    c != null && (h += c);
    h += '</p>\n        <div class="icon"></div>\n    </div>\n    <div class="body edit-account-link">\n        <p>';
    c = (b = (b = d.youCanEditYourAccountOnUnityID || (a != null ? a.youCanEditYourAccountOnUnityID : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"youCanEditYourAccountOnUnityID", hash:{}, data:e}) : b);
    c != null && (h += c);
    h += '\n    </div>\n\n    <div class="head billing-address">\n        <h2>' + g((b = (b = d.billingAddress || (a != null ? a.billingAddress : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"billingAddress", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body billing-address loading">\n        <div class="billing-address-info">\n            <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n        </div>\n        <div class="icon"></div>\n    </div>\n\n    <div class="head memo-subscriptions">\n        <h2>' + 
    g((b = (b = d.memoHeadline || (a != null ? a.memoHeadline : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"memoHeadline", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body memo-subscriptions loading">\n        <div class="memo-subscriptions-info">\n            <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n        </div>\n        <div class="icon"></div>\n    </div>\n\n';
    c = d["if"].call(a, a != null ? a.creditsBalance : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += '    <div class="head voucher">\n        <h2>' + g((b = (b = d.redeemVoucher || (a != null ? a.redeemVoucher : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"redeemVoucher", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body redeem-voucher">\n        <div>\n            <form id="voucher">\n                <input class=\'input\' placeholder=\'' + g((b = (b = d.redeemVoucherPlaceholder || (a != null ? a.redeemVoucherPlaceholder : a)) != null ? b : f, typeof b === 
    "function" ? b.call(a, {name:"redeemVoucherPlaceholder", hash:{}, data:e}) : b)) + "'>\n            </form>\n        </div>\n        <button>" + g((b = (b = d.submit || (a != null ? a.submit : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"submit", hash:{}, data:e}) : b)) + '</button>\n    </div>\n    <div class="head">\n        <h2>' + g((b = (b = d.expressPurchase || (a != null ? a.expressPurchase : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"expressPurchase", 
    hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body express-purchase">\n        <div class="express-purchase-info">\n            ';
    c = (b = (b = d.creditCard || (a != null ? a.creditCard : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"creditCard", hash:{}, data:e}) : b);
    c != null && (h += c);
    return h + '\n            <p class="amount">' + g((b = (b = d.creditCardNumber || (a != null ? a.creditCardNumber : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"creditCardNumber", hash:{}, data:e}) : b)) + "</p>\n        </div>\n        <button>" + g((b = (b = d.disable || (a != null ? a.disable : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"disable", hash:{}, data:e}) : b)) + '</button>\n    </div>\n    <div class="head">\n        <h2>' + g((b = (b = d.newsletter || 
    (a != null ? a.newsletter : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"newsletter", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body newsletter"></div>\n    <div class="head localization">\n        <h2>' + g((b = (b = d.language || (a != null ? a.language : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"language", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body language localization">\n        <p></p>\n        <button>' + 
    g((b = (b = d.changeLanguage || (a != null ? a.changeLanguage : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"changeLanguage", hash:{}, data:e}) : b)) + "</button>\n    </div>\n</section>"
  }, useData:!0});
  h.addConfirmDialog = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return'<div class="intro-overlay visible">\n    <div>\n        <h2>' + e(c((d = a != null ? a.addToDmL10N : a) != null ? d.headline : d, a)) + "</h2>\n        <p>" + e(c((d = a != null ? a.addToDmL10N : a) != null ? d.breadText1 : d, a)) + "</p>\n        <p>" + e(c((d = a != null ? a.addToDmL10N : a) != null ? d.breadText2 : d, a)) + '</p>\n        <p><a id="gotodm" class="get-started">' + e(c((d = a != null ? a.addToDmL10N : a) != null ? d.getStartedButton : d, a)) + '</a></p>\n        <p><a id="backtopackage" class="no-thanks">' + 
    e(c((d = a != null ? a.addToDmL10N : a) != null ? d.noThanksButton : d, a)) + "</a></p>\n    </div>\n</div>"
  }, useData:!0});
  h.address = g({"1":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = "<p>" + h((f = (f = d.organization || (a != null ? a.organization : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"organization", hash:{}, data:e}) : f)) + "</p>\n<p>" + h((f = (f = d.firstname || (a != null ? a.firstname : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"firstname", hash:{}, data:e}) : f)) + " " + h((f = (f = d.lastname || (a != null ? a.lastname : a)) != null ? f : g, typeof f === "function" ? 
    f.call(a, {name:"lastname", hash:{}, data:e}) : f)) + "</p>\n<p>" + h((f = (f = d.address || (a != null ? a.address : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"address", hash:{}, data:e}) : f)) + "</p>\n<p>" + h((f = (f = d.address2 || (a != null ? a.address2 : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"address2", hash:{}, data:e}) : f)) + "</p>\n<p>", c = d["if"].call(a, a != null ? a.state : a, {name:"if", hash:{}, fn:this.program(2, e, b), inverse:this.noop, 
    data:e});
    c != null && (j += c);
    j += "</p>\n<p>";
    c = d["if"].call(a, a != null ? a.state : a, {name:"if", hash:{}, fn:this.program(4, e, b), inverse:this.program(6, e, b), data:e});
    c != null && (j += c);
    j += "</p>\n<p>" + h((f = (f = d.country_name || (a != null ? a.country_name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"country_name", hash:{}, data:e}) : f)) + "</p>\n<p>";
    c = d["if"].call(a, a != null ? a.phone : a, {name:"if", hash:{}, fn:this.program(8, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    j += "</p>\n<p>";
    c = d["if"].call(a, a != null ? a.vat_no : a, {name:"if", hash:{}, fn:this.program(10, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    return j + "</p>\n"
  }, "2":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.city || (a != null ? a.city : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"city", hash:{}, data:e}) : b))
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.state || (a != null ? a.state : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"state", hash:{}, data:e}) : b)) + " " + f((b = (b = d.zip || (a != null ? a.zip : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"zip", hash:{}, data:e}) : b))
  }, "6":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.zip || (a != null ? a.zip : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"zip", hash:{}, data:e}) : b)) + " " + f((b = (b = d.city || (a != null ? a.city : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"city", hash:{}, data:e}) : b))
  }, "8":function(a, d, c, e, b) {
    var f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return g(c(b[2] != null ? b[2].phoneLabel : b[2], a)) + " " + g((f = (f = d.phone || (a != null ? a.phone : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"phone", hash:{}, data:e}) : f))
  }, "10":function(a, d, c, e, b) {
    var f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return g(c(b[2] != null ? b[2].vatLabel : b[2], a)) + " " + g((f = (f = d.vat_no || (a != null ? a.vat_no : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"vat_no", hash:{}, data:e}) : f))
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.address || (a != null ? a.address : a)) != null ? f : h, g = {name:"address", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.address || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.addressForm = g({"1":function() {
    return"*"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<form method="post" action="#">\n    <div class="req">\n        <div class="label">' + g((b = (b = d.firstName || (a != null ? a.firstName : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"firstName", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="firstname" id="firstname" placeholder=""/>*\n    </div>\n    <div class="req">\n        <div class="label">' + g((b = (b = d.lastName || 
    (a != null ? a.lastName : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"lastName", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="lastname" id="lastname" placeholder=""/>*\n    </div>\n    <div>\n        <div class="label">' + g((b = (b = d.organization || (a != null ? a.organization : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"organization", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="organization" id="organization" placeholder=""/>\n    </div>\n    <div class="req">\n        <div class="label">' + 
    g((b = (b = d.address1 || (a != null ? a.address1 : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"address1", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="address" id="address" placeholder=""/>*\n    </div>\n    <div class="label">' + g((b = (b = d.address2 || (a != null ? a.address2 : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"address2", hash:{}, data:e}) : b)) + '</div>\n    <input type="text" class="precallout" name="address2" id="address2" placeholder=""/>\n    <br/>\n\n    <div class="zip req">\n        <div class="label">' + 
    g((b = (b = d.zip || (a != null ? a.zip : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"zip", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="zip" id="zip" placeholder=""/>*\n    </div>\n    <div class="req">\n        <div class="label">' + g((b = (b = d.city || (a != null ? a.city : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"city", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="city" id="city" placeholder=""/>*\n    </div>\n    <div class="country req">\n        <div class="label">' + 
    g((b = (b = d.country || (a != null ? a.country : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"country", hash:{}, data:e}) : b)) + '</div>\n        <select class="precallout" name="country" id="country">\n            <option>' + g((b = (b = d.loading || (a != null ? a.loading : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"loading", hash:{}, data:e}) : b)) + '</option>\n        </select>*\n    </div>\n    <div class="state">\n        <div class="label">' + 
    g((b = (b = d.state || (a != null ? a.state : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"state", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="state" id="state" placeholder=""/>*\n    </div>\n    <div class="label">' + g((b = (b = d.phoneNumber || (a != null ? a.phoneNumber : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"phoneNumber", hash:{}, data:e}) : b)) + '</div>\n    <input type="text" class="precallout" name="phone" id="phone" placeholder=""/><br/>\n    <div class="vat">\n        <div class="label">' + 
    g((b = (b = d.vat || (a != null ? a.vat : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"vat", hash:{}, data:e}) : b)) + '</div>\n        <input type="text" class="precallout" name="vat_no" id="vat_no" placeholder=""/>\n        ', c = d["if"].call(a, a != null ? a.lockAddressFields : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + '\n    </div>\n    <div class="label star">* ' + g((b = (b = d.required || (a != null ? a.required : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"required", hash:{}, data:e}) : b)) + "</div>\n</form>\n"
  }, useData:!0});
  h.adminLogHistory = g({"1":function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = "\n<tr><th>" + g((b = (b = d.created || (a != null ? a.created : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"created", hash:{}, data:e}) : b)) + "</th><th>" + g((b = (b = d.status || (a != null ? a.status : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + "</th><th>", c = d["if"].call(a, a != null ? a.user : a, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.program(4, 
    e), data:e});
    c != null && (h += c);
    return h + "</th></tr>\n<tr><td colspan='3'>" + g((b = (b = d.message || (a != null ? a.message : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"message", hash:{}, data:e}) : b)) + "</td></tr>\n"
  }, "2":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.user : a) != null ? d.email : d, a))
  }, "4":function() {
    return"-"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    c = "<table class='package-log'>";
    a = d.each.call(a, a != null ? a.entries : a, {name:"each", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</table>"
  }, useData:!0});
  h.adminToolbox = g({compiler:[6, ">= 2.0.0-beta.1"], main:function() {
    return"<h1>Misc Admin Stuffs</h1>\n\n<h2>Memo Stuffs</h2>\n\n<p>\n\t<button id='sendMemoButton'>Send Memo to Myself</button>\n\t<button id='sendMeSomeMemosButton'>Send Me Some Memos</button>\n</p>\n\n<p>&nbsp;</p>\n"
  }, useData:!0});
  h.assetHierarchy = g({"1":function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = "    <div data-guid='" + g((b = (b = d.guid || (a != null ? a.guid : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"guid", hash:{}, data:e}) : b)) + "' style='padding-left: " + g((d.padding || a && a.padding || f).call(a, a != null ? a.level : a, {name:"padding", hash:{}, data:e})) + "' class=\"", c = d["if"].call(a, a != null ? a.folder : a, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.program(4, e), data:e});
    c != null && (h += c);
    return h + "\">\n        <img height='16' width='16' src=" + g((b = (b = d.assetHierarchyIcon || (a != null ? a.assetHierarchyIcon : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"assetHierarchyIcon", hash:{}, data:e}) : b)) + ">\n        " + g((b = (b = d.label || (a != null ? a.label : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + "\n    </div>\n"
  }, "2":function() {
    return"folder"
  }, "4":function() {
    return"file"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    a = d.each.call(a, a != null ? a.assets : a, {name:"each", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    return a != null ? a : ""
  }, useData:!0});
  h.assetKitsPage = g({"1":function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'            <div class="blocked quarter feature-small">\n                <div class="item">\n                    <a href="' + g((f = (f = d.url || (a != null ? a.url : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"url", hash:{}, data:e}) : f)) + '" class="background livelink" style="background-image: url(' + g(h((b = a != null ? a.keyimage : a) != null ? b.home_secondary : b, a)) + ')"></a>\n                </div>\n            </div>\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = this.lambda, f = this.escapeExpression, c = '<div id="assetKitsPage">\n    <div id="featured" class="main-content section">\n        <div class="blocked full banner">\n            <a href="https://store.unity.com/?utm_source=store&utm_campaign=2016-06-AS-Kits&utm_medium=kits_header" target="_blank"><img class="banner" src="' + f(c((b = a != null ? a.assetkits : a) != null ? b.banner : b, a)) + '" /></a>\n        </div>\n    </div>\n    \n    <div id="contentoverview">\n        <div class="primaries">\n        </div>\n        <div class=\'carousel-slider\'>\n            <div id="pager"></div>\n            <div class=\'pause_btn\'></div>\n            <div class=\'play_btn\'></div>\n        </div>\n    </div>\n    <div id="featured" class="section">\n';
    b = d.each.call(a, (b = a != null ? a.assetkits : a) != null ? b.secondary : b, {name:"each", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c + '    </div>\n    \n    <div class="footer">\n        Plus Subscribers will receive 20% off Asset Kits.<br>\n        <br>\n        Subscribers to the new Unity Pro will receive 40% off Asset Kits.\n        If you currently have a Pro perpetual license or a Pro subscription, Unity will soon email you with an offer on a new Pro subscription.\n        Please check the <a target="_blank" href="https://unity3d.com/migration-roadmap">migration roadmap page</a> for more information on when you will receive your offer.<br>\n    </div>\n</div>'
  }, useData:!0});
  h.browserMenu = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="unav">\n    <div class="fill">\n        <div class="middle">\n            <a class="logo" href="http://unity3d.com"></a>\n            <div class="main-menu">\n                <a href="' + f((b = (b = d.unityLink || (a != null ? a.unityLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"unityLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.unity || (a != null ? a.unity : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"unity", hash:{}, data:e}) : 
    b)) + '</a>\n                <a href="' + f((b = (b = d.industriesLink || (a != null ? a.industriesLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"industriesLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.industries || (a != null ? a.industries : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"industries", hash:{}, data:e}) : b)) + '</a>\n                <a href="' + f((b = (b = d.showcaseLink || (a != null ? a.showcaseLink : a)) != null ? b : c, typeof b === 
    "function" ? b.call(a, {name:"showcaseLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.showcase || (a != null ? a.showcase : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"showcase", hash:{}, data:e}) : b)) + '</a>\n                <a href="' + f((b = (b = d.learnLink || (a != null ? a.learnLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"learnLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.learn || (a != null ? a.learn : a)) != null ? b : c, 
    typeof b === "function" ? b.call(a, {name:"learn", hash:{}, data:e}) : b)) + '</a>\n                <a href="' + f((b = (b = d.communityLink || (a != null ? a.communityLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"communityLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.community || (a != null ? a.community : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"community", hash:{}, data:e}) : b)) + '</a>\n            </div>\n            <div class="navigation">\n                <a class="last" href="' + 
    f((b = (b = d.assetStoreLink || (a != null ? a.assetStoreLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"assetStoreLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.assetStore || (a != null ? a.assetStore : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"assetStore", hash:{}, data:e}) : b)) + '</a>\n                <div class="unav-icons" id="unav-home"></div>\n                <div class="unav-icons" id="unav-pkg"></div>\n                <div class="unav-icons" id="cart"><div></div></div>\n                <div class="unav-icons" id="unav-wishlist"></div>\n                <div class="unav-icons" id="unavMemo">\n                    <span id="unavMemoCount"></span>\n                </div>\n                <div class="unav-user-icon"></div>\n                <div class="m-navbtn">\n                    <div class="lines"></div>\n                </div>\n                <div class="user-wrapper">\n                    <div class="content" id="unav-user-menu"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="sub-fill">\n        <ul class="sub-menu middle">\n            <li><a href="' + 
    f((b = (b = d.sellAssetsLink || (a != null ? a.sellAssetsLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"sellAssetsLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.sellAssets || (a != null ? a.sellAssets : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"sellAssets", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + f((b = (b = d.blogLink || (a != null ? a.blogLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"blogLink", 
    hash:{}, data:e}) : b)) + '">' + f((b = (b = d.blog || (a != null ? a.blog : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"blog", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + f((b = (b = d.publisherLoginLink || (a != null ? a.publisherLoginLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"publisherLoginLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.publisherLogin || (a != null ? a.publisherLogin : a)) != null ? b : c, typeof b === 
    "function" ? b.call(a, {name:"publisherLogin", hash:{}, data:e}) : b)) + '</a></li>\n            <li><a href="' + f((b = (b = d.linkMakerLink || (a != null ? a.linkMakerLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"linkMakerLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.linkMaker || (a != null ? a.linkMaker : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"linkMaker", hash:{}, data:e}) : b)) + '</a></li>\n            <li class="last"><a href="' + 
    f((b = (b = d.helpLink || (a != null ? a.helpLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"helpLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.help || (a != null ? a.help : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"help", hash:{}, data:e}) : b)) + '</a></li>\n            <li class="right"><a href="/en" lang="en-US" hreflang="en">English</a></li>\n            <li class="right"><a href="/jp" lang="ja-JP" hreflang="ja">\u65e5\u672c\u8a9e</a></li>\n            <li class="right"><a href="/kr" lang="ko-KR" hreflang="ko">\ud55c\uad6d\uc5b4</a></li>\n            <li class="right"><a href="/cn" lang="zh-CN" hreflang="cn">\u7b80\u4f53\u4e2d\u6587</a></li>\n        </ul>\n    </div>\n    <nav class="mobile-menu">\n        <div class="wrap">\n            <div class="unav-menu">\n                <h2>' + 
    f((b = (b = d.categories || (a != null ? a.categories : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"categories", hash:{}, data:e}) : b)) + '</h2>\n                <div id="unav-sidebar"></div>\n                <h2>' + f((b = (b = d.navigation || (a != null ? a.navigation : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"navigation", hash:{}, data:e}) : b)) + '</h2>\n                <ul>\n                    <li><a href="' + f((b = (b = d.homeLink || (a != null ? 
    a.homeLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"homeLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.home || (a != null ? a.home : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"home", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + f((b = (b = d.unityLink || (a != null ? a.unityLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"unityLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.unity || 
    (a != null ? a.unity : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"unity", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + f((b = (b = d.industriesLink || (a != null ? a.industriesLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"industriesLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.industries || (a != null ? a.industries : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"industries", hash:{}, data:e}) : 
    b)) + '</a></li>\n                    <li><a href="' + f((b = (b = d.showcaseLink || (a != null ? a.showcaseLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"showcaseLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.showcase || (a != null ? a.showcase : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"showcase", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + f((b = (b = d.learnLink || (a != null ? a.learnLink : a)) != null ? 
    b : c, typeof b === "function" ? b.call(a, {name:"learnLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.learn || (a != null ? a.learn : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"learn", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + f((b = (b = d.communityLink || (a != null ? a.communityLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"communityLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.community || (a != null ? 
    a.community : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"community", hash:{}, data:e}) : b)) + '</a></li>\n                    <li><a href="' + f((b = (b = d.assetStoreLink || (a != null ? a.assetStoreLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"assetStoreLink", hash:{}, data:e}) : b)) + '" class="active-trail">' + f((b = (b = d.assetStore || (a != null ? a.assetStore : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"assetStore", 
    hash:{}, data:e}) : b)) + '</a>\n                        <ul class="secondary-menu">\n                            <li class="active-trail first active"><a href="' + f((b = (b = d.sellAssetsLink || (a != null ? a.sellAssetsLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"sellAssetsLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.sellAssets || (a != null ? a.sellAssets : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"sellAssets", hash:{}, data:e}) : b)) + 
    '</a></li>\n                            <li><a href="' + f((b = (b = d.blogLink || (a != null ? a.blogLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"blogLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.blog || (a != null ? a.blog : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"blog", hash:{}, data:e}) : b)) + '</a></li>\n                            <li><a href="' + f((b = (b = d.publisherLoginLink || (a != null ? a.publisherLoginLink : a)) != null ? 
    b : c, typeof b === "function" ? b.call(a, {name:"publisherLoginLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.publisherLogin || (a != null ? a.publisherLogin : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"publisherLogin", hash:{}, data:e}) : b)) + '</a></li>\n                            <li><a href="' + f((b = (b = d.linkMakerLink || (a != null ? a.linkMakerLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"linkMakerLink", hash:{}, data:e}) : b)) + 
    '">' + f((b = (b = d.linkMaker || (a != null ? a.linkMaker : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"linkMaker", hash:{}, data:e}) : b)) + '</a></li>\n                            <li class="last"><a href="' + f((b = (b = d.helpLink || (a != null ? a.helpLink : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"helpLink", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.help || (a != null ? a.help : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"help", 
    hash:{}, data:e}) : b)) + '</a></li>\n                        </ul>\n                    </li>\n                </ul>\n                <div class="lang">\n                    <h2>' + f((b = (b = d.language || (a != null ? a.language : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"language", hash:{}, data:e}) : b)) + '</h2>\n                    <ul>\n                        <li><a href="/en" lang="en-US" hreflang="en">English</a></li>\n                        <li><a href="/jp" lang="ja-JP" hreflang="ja">\u65e5\u672c\u8a9e</a></li>\n                        <li><a href="/kr" lang="ko-KR" hreflang="ko">\ud55c\uad6d\uc5b4</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </nav>\n</div>\n'
  }, useData:!0});
  h.comments = g({"1":function(a, d, c, e) {
    var b, c = '    <div class="more">\n        <a class="show-all"></a>\n';
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.can_comment : b, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c + "    </div>\n"
  }, "2":function(a, d, c, e) {
    var b, c = "";
    b = d.unless.call(a, (b = a != null ? a.data : a) != null ? b.has_commented : b, {name:"unless", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'            <button class="write-review">' + f((b = (b = d.writeReview || (a != null ? a.writeReview : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"writeReview", hash:{}, data:e}) : b)) + "</button>\n"
  }, "5":function(a, d, c, e) {
    var b, c = "";
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.can_comment : b, {name:"if", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "6":function(a, d, c, e) {
    var b, c = "";
    b = d.unless.call(a, (b = a != null ? a.data : a) != null ? b.has_commented : b, {name:"unless", hash:{}, fn:this.program(7, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "7":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'            <div class="more">\n                <button class="write-review">' + f((b = (b = d.writeReview || (a != null ? a.writeReview : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"writeReview", hash:{}, data:e}) : b)) + "</button>\n            </div>\n"
  }, "9":function(a, d, c, e, b) {
    c = "";
    a = d.each.call(a, a != null ? a.comments : a, {name:"each", hash:{}, fn:this.program(10, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "10":function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, j = this.escapeExpression, k = this.lambda, n = d.blockHelperMissing, m = '        <div class="comment-block review-id-' + j((f = (f = d.id || (a != null ? a.id : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">\n', c = (d.isEditable || a && a.isEditable || h).call(a, a, b[2] != null ? b[2].data : b[2], {name:"isEditable", hash:{}, fn:this.program(11, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    m += '            <div class="comment-body ';
    c = d["if"].call(a, b[1] != null ? b[1].admin : b[1], {name:"if", hash:{}, fn:this.program(16, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    m += " ";
    c = (d.isEditable || a && a.isEditable || h).call(a, a, b[2] != null ? b[2].data : b[2], {name:"isEditable", hash:{}, fn:this.program(18, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    m += '">\n                <div class="user">\n                    <a href="#!/user/' + j(k((c = a != null ? a.user : a) != null ? c.id : c, a)) + '"><img src="' + j(k((c = a != null ? a.user : a) != null ? c.icon : c, a)) + '"></a>\n                    <div><a href="#!/user/' + j(k((c = a != null ? a.user : a) != null ? c.id : c, a)) + '">' + j(k((c = a != null ? a.user : a) != null ? c.name : c, a)) + '</a></div>\n                </div>\n                <div class="comment">\n                    <a class="reportAbuse" rel="external" title="' + 
    j(k(b[2] != null ? b[2].reportAbuse : b[2], a)) + '" data-id=' + j((f = (f = d.id || (a != null ? a.id : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '></a>\n                    <div class="date"><p>' + j((d.formattedDate || a && a.formattedDate || h).call(a, a != null ? a.date : a, {name:"formattedDate", hash:{}, data:e})) + "</p></div>\n";
    c = (d.ifCond || a && a.ifCond || h).call(a, a != null ? a.version : a, "!==", b[1] != null ? b[1].submittedVersion : b[1], {name:"ifCond", hash:{}, fn:this.program(20, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    c = (f = (f = d.is_complimentary || (a != null ? a.is_complimentary : a)) != null ? f : h, g = {name:"is_complimentary", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.is_complimentary || (c = n.call(a, c, g));
    c != null && (m += c);
    m += "                    <h2>" + j((f = (f = d.subject || (a != null ? a.subject : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"subject", hash:{}, data:e}) : f)) + "</h2>\n";
    c = (f = (f = d.is_helpful || (a != null ? a.is_helpful : a)) != null ? f : h, g = {name:"is_helpful", hash:{}, fn:this.program(24, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.is_helpful || (c = n.call(a, c, g));
    c != null && (m += c);
    m += '                    <p class="comment-text">';
    c = (f = (f = d.urlfyTextHelper || (a != null ? a.urlfyTextHelper : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"urlfyTextHelper", hash:{}, data:e}) : f);
    c != null && (m += c);
    m += "</p>\n";
    c = d["if"].call(a, a != null ? a.rating : a, {name:"if", hash:{}, fn:this.program(26, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    m += "                </div>\n";
    c = (d.reviewHelpful || a && a.reviewHelpful || h).call(a, a, {name:"reviewHelpful", hash:{}, fn:this.program(28, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    m += "            </div>\n";
    c = d.each.call(a, a != null ? a.replies : a, {name:"each", hash:{}, fn:this.program(30, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    return m + "        </div>\n"
  }, "11":function(a, d, c, e, b) {
    var f = d.helperMissing, g = '            <div class="body-buttons">\n', c = (d.canReply || a && a.canReply || f).call(a, b[1] != null ? b[1].replies : b[1], b[3] != null ? b[3].data : b[3], {name:"canReply", hash:{}, fn:this.program(12, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    c = (d.isAdmin || a && a.isAdmin || f).call(a, a != null ? a.editable : a, {name:"isAdmin", hash:{}, fn:this.program(14, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    return g + "            </div>\n"
  }, "12":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                    <a href="#" class="reply-review" data-id=' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + ">" + g(h(b[3] != null ? b[3].replyButton : b[3], a)) + "</a>\n"
  }, "14":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                    <a href="#" class="edit-review" data-id=' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + ">" + g(h(b[3] != null ? b[3].edit : b[3], a)) + '</a>\n                    <a href="#" class="delete-review" data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">' + g(h(b[3] != null ? b[3].deleteButton : 
    b[3], a)) + "</a>\n"
  }, "16":function() {
    return"admin"
  }, "18":function() {
    return"editable"
  }, "20":function(a, d, c, e, b) {
    var f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return"                        <p>" + g(c(b[2] != null ? b[2].previousVersion : b[2], a)) + " " + g((f = (f = d.version || (a != null ? a.version : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"version", hash:{}, data:e}) : f)) + "</p><br>\n"
  }, "22":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return"                        <p>" + c(d(b[2] != null ? b[2].complimentaryReview : b[2], a)) + "</p><br>\n"
  }, "24":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return"                        <div class='helpful'>(" + b((d.helpfulReview || a && a.helpfulReview || c).call(a, a, {name:"helpfulReview", hash:{}, data:e})) + ")</div>\n"
  }, "26":function(a, d, c, e) {
    var b = d.helperMissing, c = "                        ", a = (d.ratingUI || a && a.ratingUI || b).call(a, 1, a != null ? a.rating : a, a != null ? a.showCount : a, {name:"ratingUI", hash:{}, data:e});
    a != null && (c += a);
    return c + "\n"
  }, "28":function(a, d, c, e, b) {
    var f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return"                    <div class='opinion'>" + g(c(b[2] != null ? b[2].isHelpful : b[2], a)) + "\n                        <button class='yes' data-id=" + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + ">" + g(c(b[2] != null ? b[2].yes : b[2], a)) + "</button>\n                        <button class='no' data-id=" + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : h, typeof f === "function" ? f.call(a, 
    {name:"id", hash:{}, data:e}) : f)) + ">" + g(c(b[2] != null ? b[2].no : b[2], a)) + "</button>\n                    </div>\n"
  }, "30":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = '                <div class="reply-block">\n', c = (d.isEditable || a && a.isEditable || g).call(a, a, b[2] != null ? b[2].data : b[2], {name:"isEditable", hash:{}, fn:this.program(31, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    j += '                    <div class="comment-body ';
    c = d["if"].call(a, b[1] != null ? b[1].admin : b[1], {name:"if", hash:{}, fn:this.program(16, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    j += " ";
    c = (d.isEditable || a && a.isEditable || g).call(a, a, b[2] != null ? b[2].data : b[2], {name:"isEditable", hash:{}, fn:this.program(18, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    j += '">\n                        <div class="comment">\n                            <h2 class="comment">' + h((f = (f = d.subject || (a != null ? a.subject : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"subject", hash:{}, data:e}) : f)) + '\n                                <div class="date"><p>' + h((d.formattedDate || a && a.formattedDate || g).call(a, a != null ? a.date : a, {name:"formattedDate", hash:{}, data:e})) + '</p></div>\n                            </h2>\n                            <p class="comment-text">';
    c = (f = (f = d.urlfyTextHelper || (a != null ? a.urlfyTextHelper : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"urlfyTextHelper", hash:{}, data:e}) : f);
    c != null && (j += c);
    return j + "</p>\n                        </div>\n                    </div>\n                </div>\n"
  }, "31":function(a, d, c, e, b) {
    var f = d.helperMissing, c = '                        <div class="body-buttons">\n', a = (d.isAdmin || a && a.isAdmin || f).call(a, a != null ? a.editable : a, {name:"isAdmin", hash:{}, fn:this.program(32, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "                        </div>\n"
  }, "32":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                                <a href="#" class="edit-reply" data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">Edit</a>\n                                <a href="#" class="delete-reply" data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">' + g(h(b[4] != null ? b[4].deleteButton : b[4], a)) + 
    "</a>\n"
  }, "34":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <div style="padding: 1em;">' + f((b = (b = d.noReviews || (a != null ? a.noReviews : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noReviews", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = a != null ? a.data : a) != null ? f.count : f, ">", 3, {name:"ifCond", hash:{}, fn:this.program(1, e, b), inverse:this.program(5, e, b), data:e});
    f != null && (g += f);
    f = d["if"].call(a, (f = a != null ? a.comments : a) != null ? f.length : f, {name:"if", hash:{}, fn:this.program(9, e, b), inverse:this.program(34, e, b), data:e});
    f != null && (g += f);
    return g
  }, useData:!0, useDepths:!0});
  h.contentPage = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="contentpage">\n    <div class="main-content">\n        <div id="assetkits">\n            <div class="blocked full banner">\n                <a class="externallink" href="" target="_blank"><img class="banner" src="" /></a>\n            </div>\n            <div id="featured">\n                <div class="blocked quarter first feature-small">\n                    <div class="item">\n                        <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                    </div>\n                </div>\n                <div class="blocked quarter second feature-small">\n                    <div class="item">\n                        <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                    </div>\n                </div>\n                <div class="blocked quarter third feature-small">\n                    <div class="item">\n                        <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                    </div>\n                </div>\n                <div class="blocked quarter last feature-small">\n                    <div class="item">\n                        <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div id="contentoverview" class="div">\n            <div class="content-container" itemscope itemtype="http://schema.org/Product">\n                <div class="background"><img class="bg1" src="/images/bg796x389.gif" /><img class="bg2" src="/images/bg516x389.gif" /></div>\n                <div class="blocked"></div>\n            </div>\n        </div>\n        <div id="contentaside" class="div">\n            <div class="blocked full">\n                <div class="item">&nbsp;</div>\n            </div>\n        </div>\n        <div id="packageContents" class="div hidden">\n            <div id="packageContentsBox" class="header-box">\n                <div class="head">\n                    <div style="float: right;" class="head-buttons">\n                        <a id="expandPackageContents">' + 
    f((b = (b = d.expand || (a != null ? a.expand : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"expand", hash:{}, data:e}) : b)) + "</a>\n                    </div>\n                    <h2>" + f((b = (b = d.packageContents || (a != null ? a.packageContents : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"packageContents", hash:{}, data:e}) : b)) + '</h2>\n                </div>\n                <div class="body">\n                    <div id="leftpackage">\n                        <div class="vscroll" id="assettree">\n                            <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                        </div>\n                    </div>\n                    <div id="assetview"></div>\n                </div>\n            </div>\n        </div>\n        <div id="recommendations" class="div" style="display: none">\n            <div id="packageRecommendationsBox" class="header-box">\n                <div class="head">\n                    <h2>' + 
    f((b = (b = d.recommendations || (a != null ? a.recommendations : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"recommendations", hash:{}, data:e}) : b)) + '</h2>\n                </div>\n                <div class="body">\n                    <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                </div>\n            </div>\n        </div>\n        <div id="peopleAlsoBought" class="div" style="display: none">\n            <div id="peopleAlsoBoughtBox" class="header-box">\n                <div class="head">\n                    <h2>' + 
    f((b = (b = d.peopleAlsoBought || (a != null ? a.peopleAlsoBought : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"peopleAlsoBought", hash:{}, data:e}) : b)) + '</h2>\n                </div>\n                <div class="body">\n                    <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                </div>\n            </div>\n        </div>\n        <div id="contentcomments" class="hidden">\n            <div id="reviewBox" class="header-box">\n                <div class="head">\n                    <h2>' + 
    f((b = (b = d.userReviews || (a != null ? a.userReviews : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"userReviews", hash:{}, data:e}) : b)) + '</h2>\n                </div>\n                <div class="body">\n                   <div><span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>'
  }, useData:!0});
  h.contentPageFull = g({"1":function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, j = "", e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    e != null && (j += e);
    return j
  }, "2":function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, j = this.escapeExpression, c = this.lambda, d = '    <div class="details">\n        <h1 itemprop="name">' + j((g = (g = d.title || (a != null ? a.title : a)) != null ? g : h, typeof g === "function" ? g.call(a, {name:"title", hash:{}, data:e}) : g)) + '</h1>\n        \n        <a href="#!/search/page=1/sortby=popularity/query=category:' + j(c((f = a != null ? a.category : a) != null ? f.tree_id : f, a)) + '" class="livelink detaillink">' + j(c((f = a != null ? a.category : 
    a) != null ? f.label : f, a)) + '</a><br>\n        <a href="#!/search/page=1/sortby=popularity/query=publisher:' + j(c((f = a != null ? a.publisher : a) != null ? f.id : f, a)) + '" class="livelink detaillink">' + j(c((f = a != null ? a.publisher : a) != null ? f.label : f, a)) + '</a><br>\n        <div class="error-details">';
    f = c(b[1] != null ? b[1].message : b[1], a);
    f != null && (d += f);
    return d + "</div>\n    </div>\n"
  }, "4":function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, j = "", e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(5, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    e != null && (j += e);
    return j
  }, "5":function(a, d, c, e, b) {
    var f, g, c = d.helperMissing, h = this.escapeExpression, c = '        <h1 itemprop="name">' + h((g = (g = d.title || (a != null ? a.title : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"title", hash:{}, data:e}) : g)) + '</h1>\n        <div class="details-container">\n        <div class="details">\n';
    f = d["if"].call(a, (f = a != null ? a.flags : a) != null ? f.external_link : f, {name:"if", hash:{}, fn:this.program(6, e, b), inverse:this.program(8, e, b), data:e});
    f != null && (c += f);
    c += "\n";
    f = d["if"].call(a, a != null ? a.price : a, {name:"if", hash:{}, fn:this.program(49, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    c += '        </div>\n\n        <div class="details linkbar"></div>\n\n';
    f = d["if"].call(a, b[1] != null ? b[1].contentPage : b[1], {name:"if", hash:{}, fn:this.program(54, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    c += "        </div>\n\n        <div class='notes'>\n";
    f = d["if"].call(a, a != null ? a.price : a, {name:"if", hash:{}, fn:this.program(57, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    c += "        \n";
    f = d["if"].call(a, a != null ? a.min_unity_version : a, {name:"if", hash:{}, fn:this.program(60, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    return c + '        </div>\n\n        <div class="fulldescription vscroll"></div>\n        \n'
  }, "6":function(a, d, c, e, b) {
    var f, d = this.lambda, c = this.escapeExpression;
    return'            <a href="#!/search/page=1/sortby=popularity/query=category:' + c(d((f = b[1] != null ? b[1].category : b[1]) != null ? f.tree_id : f, a)) + '" class="livelink detaillink">' + c(d((f = b[1] != null ? b[1].category : b[1]) != null ? f.label : f, a)) + '</a><br />\n            <a href="#!/search/page=1/sortby=popularity/query=publisher:' + c(d((f = b[1] != null ? b[1].publisher : b[1]) != null ? f.id : f, a)) + '" class="livelink detaillink">' + c(d((f = b[1] != null ? b[1].publisher : 
    b[1]) != null ? f.label : f, a)) + "</a><br />\n"
  }, "8":function(a, d, c, e, b) {
    var f, g = this.lambda, h = this.escapeExpression, c = d.helperMissing, g = '            <a href="#!/search/page=1/sortby=popularity/query=category:' + h(g((f = b[1] != null ? b[1].category : b[1]) != null ? f.tree_id : f, a)) + '" class="livelink detaillink">' + h(g((f = b[1] != null ? b[1].category : b[1]) != null ? f.label : f, a)) + '</a><br />\n            <a href="#!/search/page=1/sortby=popularity/query=publisher:' + h(g((f = b[1] != null ? b[1].publisher : b[1]) != null ? f.id : f, a)) + 
    '" class="livelink detaillink">' + h(g((f = b[1] != null ? b[1].publisher : b[1]) != null ? f.label : f, a)) + "</a><br />\n            ";
    f = (d.ratingUI || a && a.ratingUI || c).call(a, (f = b[1] != null ? b[1].rating : b[1]) != null ? f.count : f, (f = b[1] != null ? b[1].rating : b[1]) != null ? f.average : f, b[2] != null ? b[2].ratingCount : b[2], !0, !1, {name:"ratingUI", hash:{}, data:e});
    f != null && (g += f);
    g += "<br>\n\n";
    f = d.unless.call(a, (f = a != null ? a.flags : a) != null ? f.no_price : f, {name:"unless", hash:{}, fn:this.program(9, e, b), inverse:this.noop, data:e});
    f != null && (g += f);
    g += "\n";
    f = d["if"].call(a, b[2] != null ? b[2].priceUpgrade : b[2], {name:"if", hash:{}, fn:this.program(47, e, b), inverse:this.noop, data:e});
    f != null && (g += f);
    return g
  }, "9":function(a, d, c, e) {
    var b = "\n", c = d["if"].call(a, a != null ? a.price_level11 : a, {name:"if", hash:{}, fn:this.program(10, e), inverse:this.program(17, e), data:e});
    c != null && (b += c);
    b += '                    \n                <span class="price">\n';
    c = d["if"].call(a, a != null ? a.price_level11 : a, {name:"if", hash:{}, fn:this.program(32, e), inverse:this.program(34, e), data:e});
    c != null && (b += c);
    b += "                </span>\n\n";
    c = d["if"].call(a, a != null ? a.price_original : a, {name:"if", hash:{}, fn:this.program(42, e), inverse:this.program(44, e), data:e});
    c != null && (b += c);
    return b + "                <br>\n"
  }, "10":function(a, d, c, e) {
    var b, c = d.helperMissing, f = '                    <div id="saleLevel11" ';
    b = (d.ifCond || a && a.ifCond || c).call(a, (b = a != null ? a.price_level11 : a) != null ? b.USD : b, "===", "0.00", {name:"ifCond", hash:{}, fn:this.program(11, e), inverse:this.noop, data:e});
    b != null && (f += b);
    f += ">\n";
    b = (d.ifCond || a && a.ifCond || c).call(a, (b = a != null ? a.price_level11 : a) != null ? b.USD : b, "===", "0.00", {name:"ifCond", hash:{}, fn:this.program(13, e), inverse:this.program(15, e), data:e});
    b != null && (f += b);
    return f + "                    </div>\n"
  }, "11":function() {
    return'class="free"'
  }, "13":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                            <div class="amount">' + b((d.formattedPrice || a && a.formattedPrice || c).call(a, a != null ? a.price_level11 : a, {name:"formattedPrice", hash:{}, data:e})) + "</div>\n"
  }, "15":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                            <div class="percentage">' + b((d.salePercentage || a && a.salePercentage || c).call(a, a != null ? a.price_level11 : a, a != null ? a.price : a, {name:"salePercentage", hash:{}, data:e})) + '<span class="pct">%</span> \n                            <span class="off">OFF</span></div>\n'
  }, "17":function(a, d, c, e) {
    c = "";
    a = d["if"].call(a, a != null ? a.price_assetkits : a, {name:"if", hash:{}, fn:this.program(18, e), inverse:this.program(29, e), data:e});
    a != null && (c += a);
    return c
  }, "18":function(a, d, c, e) {
    var b, c = d.helperMissing, f = '                        <div id="sale" ';
    b = (d.ifCond || a && a.ifCond || c).call(a, (b = a != null ? a.price_assetkits : a) != null ? b.USD : b, "===", "0.00", {name:"ifCond", hash:{}, fn:this.program(11, e), inverse:this.noop, data:e});
    b != null && (f += b);
    f += ">\n";
    b = (d.ifCond || a && a.ifCond || c).call(a, (b = a != null ? a.price_assetkits : a) != null ? b.USD : b, "===", "0.00", {name:"ifCond", hash:{}, fn:this.program(19, e), inverse:this.program(21, e), data:e});
    b != null && (f += b);
    return f + "                        </div>\n"
  }, "19":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                                <div class="amount">' + b((d.formattedPrice || a && a.formattedPrice || c).call(a, a != null ? a.price_assetkits : a, {name:"formattedPrice", hash:{}, data:e})) + "</div>\n"
  }, "21":function(a, d, c, e) {
    var b, c = d.helperMissing, f = "                                \n";
    b = (d.ifCond || a && a.ifCond || c).call(a, (b = a != null ? a.price : a) != null ? b.USD : b, "<", (b = a != null ? a.price_assetkits : a) != null ? b.USD : b, {name:"ifCond", hash:{}, fn:this.program(22, e), inverse:this.program(24, e), data:e});
    b != null && (f += b);
    return f + "\n"
  }, "22":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                                    <div class="percentage">' + b((d.salePercentage || a && a.salePercentage || c).call(a, a != null ? a.price : a, a != null ? a.price_original : a, {name:"salePercentage", hash:{}, data:e})) + '<span class="pct">%</span> \n                                    <span class="off">OFF</span></div>\n'
  }, "24":function(a, d, c, e) {
    c = "";
    a = d["if"].call(a, a != null ? a.price_original : a, {name:"if", hash:{}, fn:this.program(25, e), inverse:this.program(27, e), data:e});
    a != null && (c += a);
    return c + '                                    <span class="off">OFF</span></div>\n'
  }, "25":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                                        <div class="percentage">' + b((d.salePercentage || a && a.salePercentage || c).call(a, a != null ? a.price_assetkits : a, a != null ? a.price_original : a, {name:"salePercentage", hash:{}, data:e})) + '<span class="pct">%</span> \n'
  }, "27":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                                        <div class="percentage">' + b((d.salePercentage || a && a.salePercentage || c).call(a, a != null ? a.price_assetkits : a, a != null ? a.price : a, {name:"salePercentage", hash:{}, data:e})) + '<span class="pct">%</span>\n'
  }, "29":function(a, d, c, e) {
    c = "";
    a = d["if"].call(a, a != null ? a.price_original : a, {name:"if", hash:{}, fn:this.program(30, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "30":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                            <div id="sale">\n                                <div class="percentage">' + b((d.salePercentage || a && a.salePercentage || c).call(a, a != null ? a.price : a, a != null ? a.price_original : a, {name:"salePercentage", hash:{}, data:e})) + '<span class="pct">%</span> \n                                <span class="off">OFF</span></div>\n                            </div>\n'
  }, "32":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return"                        " + b((d.formattedPriceNoText || a && a.formattedPriceNoText || c).call(a, a != null ? a.price_level11 : a, {name:"formattedPriceNoText", hash:{}, data:e})) + "\n"
  }, "34":function(a, d, c, e) {
    c = "";
    a = d["if"].call(a, a != null ? a.price_assetkits : a, {name:"if", hash:{}, fn:this.program(35, e), inverse:this.program(40, e), data:e});
    a != null && (c += a);
    return c
  }, "35":function(a, d, c, e) {
    var b, c = d.helperMissing, f = "\n";
    b = (d.ifCond || a && a.ifCond || c).call(a, (b = a != null ? a.price : a) != null ? b.USD : b, "<", (b = a != null ? a.price_assetkits : a) != null ? b.USD : b, {name:"ifCond", hash:{}, fn:this.program(36, e), inverse:this.program(38, e), data:e});
    b != null && (f += b);
    return f + "\n"
  }, "36":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return"                                " + b((d.formattedPriceNoText || a && a.formattedPriceNoText || c).call(a, a != null ? a.price : a, {name:"formattedPriceNoText", hash:{}, data:e})) + "\n"
  }, "38":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return"                                " + b((d.formattedPriceNoText || a && a.formattedPriceNoText || c).call(a, a != null ? a.price_assetkits : a, {name:"formattedPriceNoText", hash:{}, data:e})) + "\n"
  }, "40":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return"                            " + b((d.formattedPrice || a && a.formattedPrice || c).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, data:e})) + "\n"
  }, "42":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                    <span class="original-price">' + b((d.formattedPrice || a && a.formattedPrice || c).call(a, a != null ? a.price_original : a, {name:"formattedPrice", hash:{}, data:e})) + "</span>\n"
  }, "44":function(a, d, c, e) {
    var b = "", c = d["if"].call(a, a != null ? a.price_level11 : a, {name:"if", hash:{}, fn:this.program(45, e), inverse:this.noop, data:e});
    c != null && (b += c);
    c = d["if"].call(a, a != null ? a.price_assetkits : a, {name:"if", hash:{}, fn:this.program(45, e), inverse:this.noop, data:e});
    c != null && (b += c);
    return b
  }, "45":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'                        <span class="original-price">' + b((d.formattedPrice || a && a.formattedPrice || c).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, data:e})) + "</span>\n"
  }, "47":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                <span class="upgrade-price-label">' + c(d(b[3] != null ? b[3].priceUpgradeLabel : b[3], a)) + '</span> <span class="upgrade-price">' + c(d(b[3] != null ? b[3].priceUpgrade : b[3], a)) + "</span><br>\n"
  }, "49":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = a != null ? a.category : a) != null ? f.multiple : f, "===", "Y", {name:"ifCond", hash:{}, fn:this.program(50, e, b), inverse:this.noop, data:e});
    f != null && (g += f);
    return g
  }, "50":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, a != null ? a.price_level11 : a, {name:"if", hash:{}, fn:this.program(51, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "51":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = a != null ? a.price_level11 : a) != null ? f.sale_limit : f, "===", 1, {name:"ifCond", hash:{}, fn:this.program(52, e, b), inverse:this.noop, data:e});
    f != null && (g += f);
    return g
  }, "52":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                        <em class="sale-limit">' + c(d(b[5] != null ? b[5].oneLicense : b[5], a)) + "</em>\n"
  }, "54":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[2] != null ? b[2].loggedIn : b[2], {name:"if", hash:{}, fn:this.program(55, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "55":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                <button class="add-to-list" title="' + c(d(b[3] != null ? b[3].addToList : b[3], a)) + '"></button>\n'
  }, "57":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = a != null ? a.category : a) != null ? f.multiple : f, "===", "Y", {name:"ifCond", hash:{}, fn:this.program(58, e, b), inverse:this.noop, data:e});
    f != null && (g += f);
    return g
  }, "58":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return"                    <span class='multiple-seats-notice'>" + c(d(b[3] != null ? b[3].requireLicense : b[3], a)) + "</span><br>\n"
  }, "60":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[2] != null ? b[2].notEditor : b[2], {name:"if", hash:{}, fn:this.program(61, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "61":function(a, d, c, e, b) {
    var c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='min-unity-version'>" + f((d.minimumVersion || a && a.minimumVersion || c).call(a, b[1] != null ? b[1].min_unity_version : b[1], {name:"minimumVersion", hash:{}, data:e})) + "</span><br>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    a = d["if"].call(a, a != null ? a.error : a, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.program(4, e, b), data:e});
    return a != null ? a : ""
  }, useData:!0, useDepths:!0});
  h.daily = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = this.lambda, f = this.escapeExpression, g = d.helperMissing;
    return'<div id="daily" class="header-box">\n    <a href="#!/content/' + f(c((b = a != null ? a.json : a) != null ? b.id : b, a)) + '?utm_source=store&utm_medium=menu_right&utm_campaign=AS-Global-24h-Banner">\n        <div class="body">\n            <div class="timeLeft">\n                <div class="t hour">00</div>\n                <div class="d">:</div><div class="t min">00</div>\n                <div class="d">:</div><div class="t sec">00</div>\n            </div>\n            <div class="detail">\n                <h3>' + 
    f(c((b = a != null ? a.json : a) != null ? b.title : b, a)) + '</h3>\n                <span class="now">' + f((d.formattedPrice || a && a.formattedPrice || g).call(a, (b = a != null ? a.json : a) != null ? b.price : b, {name:"formattedPrice", hash:{}, data:e})) + '</span>\n                <span class="before">' + f((d.formattedPrice || a && a.formattedPrice || g).call(a, (b = a != null ? a.json : a) != null ? b.price_original : b, {name:"formattedPrice", hash:{}, data:e})) + "</span><br>\n            </div>\n        </div>\n    </a>\n</div>\n"
  }, useData:!0});
  h.downloadPackage = g({"1":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return"    <span class='no-packages'>" + c(d(b[1] != null ? b[1].noPackages : b[1], a)) + "</span>\n"
  }, "3":function(a, d, c, e, b) {
    c = "";
    a = d.each.call(a, a != null ? a.packages : a, {name:"each", hash:{}, fn:this.program(4, e, b), inverse:this.program(46, e, b), data:e});
    a != null && (c += a);
    return c
  }, "4":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = this.lambda, k = "        ", c = (d.displayGroup || a && a.displayGroup || g).call(a, e && e.index, b[1] != null ? b[1].sortBy : b[1], b[1] != null ? b[1].packages : b[1], {name:"displayGroup", hash:{}, data:e});
    c != null && (k += c);
    k += '\n        <div class="package-details ' + h((f = (f = d.type || (a != null ? a.type : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"type", hash:{}, data:e}) : f)) + "-" + h((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" data-type="' + h((f = (f = d.type || (a != null ? a.type : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"type", hash:{}, data:e}) : f)) + '" data-id="' + 
    h((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">\n            <div>\n                <a href="#!/content/' + h((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" title="' + h((f = (f = d.name || (a != null ? a.name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '"><img class="icon" src="';
    c = d["if"].call(a, a != null ? a.icon : a, {name:"if", hash:{}, fn:this.program(5, e, b), inverse:this.program(7, e, b), data:e});
    c != null && (k += c);
    k += '"></a>\n            </div>\n            <div class="info">\n                <div>\n                    <a class="title ';
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.type : a, "!==", "content", {name:"ifCond", hash:{}, fn:this.program(9, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" ';
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.type : a, "===", "content", {name:"ifCond", hash:{}, fn:this.program(11, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += ' title="' + h((f = (f = d.name || (a != null ? a.name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '">' + h((f = (f = d.name || (a != null ? a.name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '</a>\n                    <span class="version">' + h((f = (f = d.local_version_name || (a != null ? a.local_version_name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"local_version_name", 
    hash:{}, data:e}) : f)) + "</span>\n                    ";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "deprecated", {name:"ifCond", hash:{}, fn:this.program(13, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += "\n                </div>\n";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.type : a, "===", "content", {name:"ifCond", hash:{}, fn:this.program(15, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '                <br>\n                <div>\n                    <a href="#!/search/page=1/sortby=popularity/query=publisher:' + h(j((c = a != null ? a.publisher : a) != null ? c.id : c, a)) + '" title="' + h(j((c = a != null ? a.publisher : a) != null ? c.name : c, a)) + '">' + h(j((c = a != null ? a.publisher : a) != null ? c.name : c, a)) + '</a>\n                </div>\n                <div class="category">\n                    <a ';
    c = d["if"].call(a, (c = a != null ? a.category : a) != null ? c.id : c, {name:"if", hash:{}, fn:this.program(17, e, b), inverse:this.program(19, e, b), data:e});
    c != null && (k += c);
    k += ' title="' + h(j((c = a != null ? a.category : a) != null ? c.name : c, a)) + '">' + h(j((c = a != null ? a.category : a) != null ? c.name : c, a)) + '</a>\n                </div>\n            </div>\n            <div class="action">\n';
    c = d["if"].call(a, b[1] != null ? b[1].inBrowser : b[1], {name:"if", hash:{}, fn:this.program(21, e, b), inverse:this.program(23, e, b), data:e});
    c != null && (k += c);
    k += "            </div>\n";
    c = d["if"].call(a, a != null ? a.id : a, {name:"if", hash:{}, fn:this.program(35, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '            <br>\n            <div class="tags">\n';
    c = d.each.call(a, a != null ? a.tags : a, {name:"each", hash:{}, fn:this.program(40, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    c = d["if"].call(a, b[2] != null ? b[2].inBin : b[2], {name:"if", hash:{}, fn:this.program(42, e, b), inverse:this.program(44, e, b), data:e});
    c != null && (k += c);
    return k + '                <div class="warning">\n                    <span>' + h(j(b[2] != null ? b[2].removePermanentlyWarning : b[2], a)) + '</span>\n                    <button class="basic light yes">' + h(j((c = b[2] != null ? b[2].l10nButton : b[2]) != null ? c.yes : c, a)) + '</button>\n                    <button class="basic light no">' + h(j((c = b[2] != null ? b[2].l10nButton : b[2]) != null ? c.no : c, a)) + "</button>\n                </div>\n            </div>\n        </div>\n"
  }, "5":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return c(d(b[1] != null ? b[1].icon : b[1], a))
  }, "7":function() {
    return"images/icons/icon_75_hat.png"
  }, "9":function() {
    return"no-click"
  }, "11":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'href="#!/' + f((b = (b = d.type || (a != null ? a.type : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"type", hash:{}, data:e}) : b)) + "/" + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '"'
  }, "13":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'<p class="status">' + c(d(b[2] != null ? b[2].deprecated : b[2], a)) + "</p>"
  }, "15":function() {
    return'                    <div class="package-rating"></div>\n'
  }, "17":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return'href="#!/search/page=1/sortby=popularity/query=category:' + e(c((d = a != null ? a.category : a) != null ? d.id : d, a)) + '"'
  }, "19":function() {
    return' class="no-click"'
  }, "21":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                <button class="open-in-unity" data-id="' + c(d(b[1] != null ? b[1].id : b[1], a)) + '">' + c(d(b[2] != null ? b[2].openInUnity : b[2], a)) + "</button>\n"
  }, "23":function(a, d, c, e, b) {
    var f = "", c = d["if"].call(a, b[1] != null ? b[1].local_path : b[1], {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(26, e, b), data:e});
    c != null && (f += c);
    c = d["if"].call(a, a != null ? a.can_download : a, {name:"if", hash:{}, fn:this.program(28, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    return f
  }, "24":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                    <button class="import" data-local-path="' + c(d(b[1] != null ? b[1].local_path : b[1], a)) + '" data-complete-project="' + c(d(b[1] != null ? b[1].is_complete_project : b[1], a)) + '">' + c(d(b[3] != null ? b[3].importPkg : b[3], a)) + "</button>\n"
  }, "26":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'                    <button class="import" disabled="disabled" data-local-path="' + c(d(b[1] != null ? b[1].local_path : b[1], a)) + '">' + c(d(b[3] != null ? b[3].importPkg : b[3], a)) + "</button>\n"
  }, "28":function(a, d, c, e, b) {
    var f = this.lambda, g = this.escapeExpression, h = '                    <div class="action-container', c = d["if"].call(a, a != null ? a.can_update : a, {name:"if", hash:{}, fn:this.program(29, e, b), inverse:this.noop, data:e});
    c != null && (h += c);
    h += '">\n                        <button id="' + g(f(b[2] != null ? b[2].type : b[2], a)) + "-" + g(f(b[2] != null ? b[2].id : b[2], a)) + '" class="download" data-id="' + g(f(b[2] != null ? b[2].id : b[2], a)) + '" data-type="' + g(f(b[2] != null ? b[2].type : b[2], a)) + '" data-name="' + g(f(b[2] != null ? b[2].name : b[2], a)) + '">';
    c = d["if"].call(a, a != null ? a.can_update : a, {name:"if", hash:{}, fn:this.program(31, e, b), inverse:this.program(33, e, b), data:e});
    c != null && (h += c);
    return h + '</button>\n                        <div class="progress-bar"></div>\n                    </div>\n'
  }, "29":function() {
    return" update"
  }, "31":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return c(d(b[4] != null ? b[4].updatePkg : b[4], a))
  }, "33":function(a, d, c, e, b) {
    var f, d = this.lambda, c = this.escapeExpression;
    return c(d((f = b[4] != null ? b[4].l10nButton : b[4]) != null ? f.download : f, a))
  }, "35":function(a, d, c, e, b) {
    var f = d.helperMissing, c = "", a = (d.ifCond || a && a.ifCond || f).call(a, a != null ? a.type : a, "===", "content", {name:"ifCond", hash:{}, fn:this.program(36, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "36":function(a, d, c, e, b) {
    var f = this.lambda, g = this.escapeExpression, c = d.helperMissing, f = '                    <div class="review-release-notes">\n                        <a class="release-notes" data-id="' + g(f(b[2] != null ? b[2].id : b[2], a)) + '">' + g(f(b[3] != null ? b[3].releaseNotes : b[3], a)) + "</a>\n", a = (d.ifCond || a && a.ifCond || c).call(a, b[2] != null ? b[2].status : b[2], "!==", "deprecated", {name:"ifCond", hash:{}, fn:this.program(37, e, b), inverse:this.noop, data:e});
    a != null && (f += a);
    return f + "                    </div>\n"
  }, "37":function(a, d, c, e, b) {
    var c = this.lambda, f = this.escapeExpression, g = '                            <a class="review', d = d.unless.call(a, b[3] != null ? b[3].can_comment : b[3], {name:"unless", hash:{}, fn:this.program(38, e, b), inverse:this.noop, data:e});
    d != null && (g += d);
    return g + '" data-id="' + f(c(b[3] != null ? b[3].id : b[3], a)) + '" data-publisher="' + f(c((d = b[3] != null ? b[3].publisher : b[3]) != null ? d.id : d, a)) + '">' + f(c(b[4] != null ? b[4].review : b[4], a)) + "</a>\n"
  }, "38":function() {
    return" not-visible"
  }, "40":function(a, d, c, e) {
    var b = this.lambda, f = this.escapeExpression, c = d.helperMissing, b = '                <div class="tag">' + f(b(a, a)), a = (d.isSpecialTag || a && a.isSpecialTag || c).call(a, a, {name:"isSpecialTag", hash:{}, data:e});
    a != null && (b += a);
    return b + "</div>\n"
  }, "42":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                    <div data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" data-type="' + g((f = (f = d.type || (a != null ? a.type : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"type", hash:{}, data:e}) : f)) + '" class="undo-tag">' + g(h(b[3] != null ? b[3].undoBin : b[3], a)) + '</div>\n                    <img data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != 
    null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" data-type="' + g((f = (f = d.type || (a != null ? a.type : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"type", hash:{}, data:e}) : f)) + '" class="remove-forever" title="' + g(h(b[3] != null ? b[3].removePermanently : b[3], a)) + '" src="../../images/icons/trash.png">\n'
  }, "44":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                    <div data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" class="add-tag">' + g(h(b[3] != null ? b[3].addTag : b[3], a)) + '</div>\n                    <img data-id="' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" data-type="' + g((f = (f = d.type || (a != null ? a.type : a)) != 
    null ? f : c, typeof f === "function" ? f.call(a, {name:"type", hash:{}, data:e}) : f)) + '" class="remove" title="' + g(h(b[3] != null ? b[3].moveToBin : b[3], a)) + '" src="../../images/icons/trash.png">\n'
  }, "46":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"        <span class='no-search'>" + f((b = (b = d.noResults || (a != null ? a.noResults : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noResults", hash:{}, data:e}) : b)) + "</span>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f = d.helperMissing, c = "", a = (d.ifCond || a && a.ifCond || f).call(a, a != null ? a.sortBy : a, "===", "noPackages", {name:"ifCond", hash:{}, fn:this.program(1, e, b), inverse:this.program(3, e, b), data:e});
    a != null && (c += a);
    return c
  }, useData:!0, useDepths:!0});
  h.downloadsPage = g({"1":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                <div class="right">\n                    <button class="update-all">' + f((b = (b = d.updateAll || (a != null ? a.updateAll : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"updateAll", hash:{}, data:e}) : b)) + "</button>\n                </div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<div class="download-manager">\n    <div class="head">\n        <h2>' + g((b = (b = d.downloads || (a != null ? a.downloads : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"downloads", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="header">\n        <div class="manager">\n            <div class="left">\n                <button class="collapse-all basic light">' + g((b = (b = d.collapseAll || (a != null ? 
    a.collapseAll : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"collapseAll", hash:{}, data:e}) : b)) + '</button>\n                <div class="group-by">\n                    <label>' + g((b = (b = d.groupBy || (a != null ? a.groupBy : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"groupBy", hash:{}, data:e}) : b)) + '</label>\n                    <select>\n                        <option value="title-first">' + g((b = (b = d.title || (a != null ? a.title : a)) != 
    null ? b : f, typeof b === "function" ? b.call(a, {name:"title", hash:{}, data:e}) : b)) + '</option>\n                        <option value="category">' + g((b = (b = d.category || (a != null ? a.category : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"category", hash:{}, data:e}) : b)) + '</option>\n                        <option value="category-full">' + g((b = (b = d.subcategory || (a != null ? a.subcategory : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"subcategory", 
    hash:{}, data:e}) : b)) + '</option>\n                        <option value="publisher">' + g((b = (b = d.publisher || (a != null ? a.publisher : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publisher", hash:{}, data:e}) : b)) + '</option>\n                        <option value="publish-date-id">' + g((b = (b = d.publishDate || (a != null ? a.publishDate : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publishDate", hash:{}, data:e}) : b)) + '</option>\n                        <option value="packagestatus">' + 
    g((b = (b = d.status || (a != null ? a.status : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + '</option>\n                        <option value="created-at">' + g((b = (b = d.purchaseDate || (a != null ? a.purchaseDate : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"purchaseDate", hash:{}, data:e}) : b)) + '</option>\n                        <option value="rating">' + g((b = (b = d.myRating || (a != null ? a.myRating : a)) != 
    null ? b : f, typeof b === "function" ? b.call(a, {name:"myRating", hash:{}, data:e}) : b)) + '</option>\n                    </select>\n                </div>\n                <div class="manager-search">\n                    <label>' + g((b = (b = d.filter || (a != null ? a.filter : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"filter", hash:{}, data:e}) : b)) + '</label>\n                    <form class="package-search">\n                        <input class="filter">\n                        <img class="clear" src="../../images/icons/close.png">\n                    </form>\n                    <button class="filter-button basic light">' + 
    g((b = (b = d.filter || (a != null ? a.filter : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"filter", hash:{}, data:e}) : b)) + '</button>\n                    <button class="bin-button basic light">#BIN</button>\n                </div>\n            </div>\n', c = d.unless.call(a, a != null ? a.inBrowser : a, {name:"unless", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + '        </div>\n        <div class="packages">\n            <div class="loader">\n                <div class="graphic"></div>\n                <div class="label">' + g((b = (b = d.loading || (a != null ? a.loading : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"loading", hash:{}, data:e}) : b)) + "</div>\n            </div>\n        </div>\n    </div>\n</div>"
  }, useData:!0});
  h.expressCheckoutDialog = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var i;
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'<div class="dialog express-checkout-dialog">\n    <h1>' + g((f = (f = d.header || (a != null ? a.header : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"header", hash:{}, data:e}) : f)) + '</h1>\n    <div class="package">\n        <p class="package-label">' + g((f = (f = d.pkg || (a != null ? a.pkg : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"pkg", hash:{}, data:e}) : f)) + ':</p>\n        <p class="package-name">' + g(h((i = (b = (b = a != null ? 
    a.data : a) != null ? b.cart : b) != null ? b["0"] : b, b = i) != null ? b.title : b, a)) + '</p>\n    </div>\n    <div class="express-purchase-payment">\n        <p class="express-purchase-payment-label">' + g((f = (f = d.expressPurchasePayment || (a != null ? a.expressPurchasePayment : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"expressPurchasePayment", hash:{}, data:e}) : f)) + '</p>\n        <p class="card-number">' + g(h((b = (b = a != null ? a.data : a) != null ? b.express_checkout : 
    b) != null ? b.payment_instrument : b, a)) + '</p>\n    </div>\n    <div class="account-password">\n        <p class="account-password-label">' + g((f = (f = d.accountPassword || (a != null ? a.accountPassword : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"accountPassword", hash:{}, data:e}) : f)) + '</p>\n        <input type="password" name="account-password">\n    </div>\n    <div class="charge">\n        <p class="payment-method-label">' + g((f = (f = d.chargeCreditCard || 
    (a != null ? a.chargeCreditCard : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"chargeCreditCard", hash:{}, data:e}) : f)) + '</p>\n        <p class="charge-amount">' + g(h((b = a != null ? a.data : a) != null ? b.pricetext : b, a)) + '</p>\n        <p class="vat-label">' + g((f = (f = d.vatLabel || (a != null ? a.vatLabel : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"vatLabel", hash:{}, data:e}) : f)) + '</p>\n        <p class="vat-amount">' + g(h((b = a != 
    null ? a.data : a) != null ? b.vat : b, a)) + '</p>\n    </div>\n    <button class="cancel-button">' + g((f = (f = d.cancel || (a != null ? a.cancel : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"cancel", hash:{}, data:e}) : f)) + '</button>\n    <button class="go-to-cart">' + g((f = (f = d.goToCart || (a != null ? a.goToCart : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"goToCart", hash:{}, data:e}) : f)) + '</button>\n    <button class="purchase-button">' + 
    g((f = (f = d.purchase || (a != null ? a.purchase : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"purchase", hash:{}, data:e}) : f)) + '</button><br>\n    <div class="status"></div>\n    <div class="credit-cards">\n        <div class="card visa" title="Visa"></div>\n        <div class="card mastercard" title="MasterCard"></div>\n        <div class="card discovercard" title="Discover"></div>\n        <div class="card japanesecreditbank" title="JBC"></div>\n        <div class="card diners" title="Diners"></div>\n        <div class="card americanexpress" title="American Express"></div>\n        <div class="card maestro" title="Maestro"></div>\n        <div class="card unionpay" title="UnionPay"></div>\n    </div>\n</div>'
  }, useData:!0});
  h.homePage = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="homePage">\n    <section id="featured" class="main-area section">\n        <section id="contentoverview">\n            <div class="primaries">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n            <div class=\'carousel-slider\'>\n                <div id="pager"></div>\n                <div class=\'pause_btn\'></div>\n                <div class=\'play_btn\'></div>\n            </div>\n        </section>\n        <div class="blocked quarter primary-alt feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter primary-alt feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter primary-alt feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter primary-alt feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        \n        <div class="blocked quarter secondary feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter secondary feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter secondary feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div class="blocked quarter secondary feature-small">\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        \n        \n        \n        \n        <div id="popularBox" class="header-box">\n            <div class="head">\n                <h2>' + 
    f((b = (b = d.mostPopular || (a != null ? a.mostPopular : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"mostPopular", hash:{}, data:e}) : b)) + '</h2>\n            </div>\n            <div class="body">\n                <div id="popresults" style="padding: 5px;">\n                    <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n                </div>\n            </div>\n        </div>\n        <div id="assetstoretools"></div>\n        <div id="terms"></div>\n    </section>\n</div>'
  }, useData:!0});
  h.level11Page = g({"1":function(a, d, c, e) {
    var i;
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = '    <section id="resultsFree" class="section';
    i = d.unless.call(a, (b = (b = a != null ? a.data : a) != null ? b.level11sale : b) != null ? b.results : b, {name:"unless", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e}), b = i;
    b != null && (h += b);
    return h + '">\n        <div class="blocked">\n            <h2>' + g((f = (f = d.free || (a != null ? a.free : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"free", hash:{}, data:e}) : f)) + '</h2>\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </section>\n'
  }, "2":function() {
    return" single"
  }, "4":function(a, d, c, e) {
    var i;
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = '    <section id="resultsSale" class="section';
    i = d.unless.call(a, (b = (b = a != null ? a.data : a) != null ? b.level11free : b) != null ? b.results : b, {name:"unless", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e}), b = i;
    b != null && (h += b);
    return h + '">\n        <div class="blocked">\n            <h2>' + g((f = (f = d.discounted || (a != null ? a.discounted : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"discounted", hash:{}, data:e}) : f)) + '</h2>\n            <div class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </section>\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var j;
    var i;
    var b, f;
    b = d.helperMissing;
    c = '<div id="level11Page">\n    <h2 class="header">';
    b = (f = (f = d.level11 || (a != null ? a.level11 : a)) != null ? f : b, typeof f === "function" ? f.call(a, {name:"level11", hash:{}, data:e}) : f);
    b != null && (c += b);
    c += "</h2>\n";
    i = d["if"].call(a, (b = (b = a != null ? a.data : a) != null ? b.level11free : b) != null ? b.results : b, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e}), b = i;
    b != null && (c += b);
    j = d["if"].call(a, (b = (b = a != null ? a.data : a) != null ? b.level11sale : b) != null ? b.results : b, {name:"if", hash:{}, fn:this.program(4, e), inverse:this.noop, data:e}), b = j;
    b != null && (c += b);
    return c + "</div>"
  }, useData:!0});
  h.licensesPage = g({"1":function(a, d, c, e, b) {
    c = '                <div class="licensesContent">\n';
    a = d.each.call(a, a != null ? a.licenses : a, {name:"each", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "                </div>\n"
  }, "2":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return"                        <div class='license-item'>\n                            <div>" + g((f = (f = d.name || (a != null ? a.name : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + "</div>\n                            <button class='buyMore' data='" + g((f = (f = d.package_id || (a != null ? a.package_id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"package_id", hash:{}, data:e}) : f)) + "'>" + g(h(b[2] != null ? b[2].buyMore : 
    b[2], a)) + "</button>\n                            <div class='quantity'>" + g((f = (f = d.quantity || (a != null ? a.quantity : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"quantity", hash:{}, data:e}) : f)) + "</div><br>\n                        </div>\n"
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                <div class="licensesContent no-results">' + f((b = (b = d.noLicensesLabel || (a != null ? a.noLicensesLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noLicensesLabel", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, c = '<section id="licenses" class="section limited">\n    <div class="header-box">\n        <div class="licenses">\n            <div class="head license">\n                <h2>' + g((f = (f = d.licensesLabel || (a != null ? a.licensesLabel : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"licensesLabel", hash:{}, data:e}) : f)) + '</h2>\n            </div>\n        </div>\n        <div id="licensesData" class="body">\n            <div class="header">\n                <div class="name">' + 
    g((f = (f = d.name || (a != null ? a.name : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '</div>\n                <div class="quantity">' + g((f = (f = d.quantity || (a != null ? a.quantity : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"quantity", hash:{}, data:e}) : f)) + "</div>\n            </div>\n", a = d["if"].call(a, a != null ? a.licenses : a, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.program(4, e, 
    b), data:e});
    a != null && (c += a);
    return c + "        </div>\n    </div>\n</section>"
  }, useData:!0, useDepths:!0});
  h.linkMakerPage = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return'<div id="linkMakerPage">\n    <div class="aid">\n        ' + g(c((b = a != null ? a.l10n : a) != null ? b.aidLabel : b, a)) + ' <input type="text" id="aid-value" value="' + g((f = (f = d.aid || (a != null ? a.aid : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"aid", hash:{}, data:e}) : f)) + '"> <input id="aid-apply" type="button" value="' + g(c((b = a != null ? a.l10n : a) != null ? b.aidApplyButton : b, a)) + '" />\n    </div>\n    <h1>' + g(c((b = a != null ? a.l10n : 
    a) != null ? b.header : b, a)) + '</h1>\n\n<p class="note">\nCreate links for Asset Store - Include your Affiliate ID to earn commissions on referring sales.<br />\nWhat is the Affiliate Program? <a href="https://unity3d.com/affiliates">Learn More</a><br />\n<br />\nYour Affiliate ID is included in your welcome email upon acceptance into the Affiliate Program - please ensure you input your token exactly as it is listed in your welcome email.\n</p>\n\n    <div class="frame">\n        <iframe src="" id="linkMakerFrame" frameborder="0" allowtransparency="1"></iframe>\n    </div>\n</div>\n\n\n'
  }, useData:!0});
  h.listDetails = g({"1":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = this.lambda, k = '<div class="list-details" data-id=' + h((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '>\n    <div class="info">\n', c = d["if"].call(a, a != null ? a.name : a, {name:"if", hash:{}, fn:this.program(2, e, b), inverse:this.program(4, e, b), data:e});
    c != null && (k += c);
    k += '        <a href="' + h(j(b[1] != null ? b[1].url : b[1], a)) + "#!/list/" + h((f = (f = d.slug || (a != null ? a.slug : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"slug", hash:{}, data:e}) : f)) + '" class="slug">' + h(j(b[1] != null ? b[1].url : b[1], a)) + "#!/list/" + h((f = (f = d.slug || (a != null ? a.slug : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"slug", hash:{}, data:e}) : f)) + '</a>\n        <span class="description" data-id="' + h((f = 
    (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '">';
    c = d["if"].call(a, a != null ? a.description : a, {name:"if", hash:{}, fn:this.program(6, e, b), inverse:this.program(8, e, b), data:e});
    c != null && (k += c);
    k += '</span>\n        <span class="status">' + h((d.listStatus || a && a.listStatus || g).call(a, a != null ? a.status : a, {name:"listStatus", hash:{}, data:e})) + '</span>\n    </div>\n    <div class="action">\n';
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "draft", {name:"ifCond", hash:{}, fn:this.program(10, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '        <button class="list-delete basic light';
    c = d["if"].call(a, b[1] != null ? b[1].create : b[1], {name:"if", hash:{}, fn:this.program(11, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" data-id=' + h((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + ">";
    c = d["if"].call(a, b[1] != null ? b[1].create : b[1], {name:"if", hash:{}, fn:this.program(15, e, b), inverse:this.program(17, e, b), data:e});
    c != null && (k += c);
    return k + '</button>\n        <br>\n        <img class="drag-drop" src="../images/icons/drag_drop.png" title="' + h(j((c = b[1] != null ? b[1].l10nLists : b[1]) != null ? c.dragDropTooltip : c, a)) + '">\n    </div>\n    <div class="warning">\n        <span>' + h(j((c = b[1] != null ? b[1].l10nLists : b[1]) != null ? c.warning : c, a)) + ' "' + h((f = (f = d.name || (a != null ? a.name : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '"?</span>\n        <button class="basic light yes">' + 
    h(j((c = b[1] != null ? b[1].l10nButton : b[1]) != null ? c.yes : c, a)) + '</button>\n        <button class="basic light no">' + h(j((c = b[1] != null ? b[1].l10nButton : b[1]) != null ? c.no : c, a)) + "</button>\n    </div>\n</div>\n"
  }, "2":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'        <a href="#!/list/' + f((b = (b = d.slug || (a != null ? a.slug : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"slug", hash:{}, data:e}) : b)) + '"><span class="title" data-id="' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "</span></a>\n"
  }, "4":function() {
    return"            <input>\n"
  }, "6":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.description || (a != null ? a.description : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"description", hash:{}, data:e}) : b))
  }, "8":function(a, d, c, e, b) {
    var f, d = this.lambda, c = this.escapeExpression;
    return c(d((f = b[2] != null ? b[2].l10nLists : b[2]) != null ? f.emptyDescription : f, a))
  }, "10":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = this.lambda, k = '            <button class="list-publish basic light', c = d.unless.call(a, a != null ? a.packages_count : a, {name:"unless", hash:{}, fn:this.program(11, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" ';
    c = d.unless.call(a, a != null ? a.package_count : a, {name:"unless", hash:{}, fn:this.program(13, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    return k + " data-id=" + h((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + ">" + h(j((c = b[2] != null ? b[2].l10nLists : b[2]) != null ? c.publish : c, a)) + "</button>\n"
  }, "11":function() {
    return" disabled"
  }, "13":function(a, d, c, e, b) {
    var f, d = this.lambda, c = this.escapeExpression;
    return'title="' + c(d((f = b[1] != null ? b[1].l10nLists : b[1]) != null ? f.disabledMessage : f, a)) + '"'
  }, "15":function(a, d, c, e, b) {
    var f, d = this.lambda, c = this.escapeExpression;
    return c(d((f = b[2] != null ? b[2].l10nButton : b[2]) != null ? f.save : f, a))
  }, "17":function(a, d, c, e, b) {
    var f, d = this.lambda, c = this.escapeExpression;
    return c(d((f = b[2] != null ? b[2].l10nLists : b[2]) != null ? f.deleteLabel : f, a))
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    a = d.each.call(a, a != null ? a.list : a, {name:"each", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e});
    return a != null ? a : ""
  }, useData:!0, useDepths:!0});
  h.listPage = g({"1":function(a, d, c, e, b) {
    var f, g, c = d.helperMissing, h = this.escapeExpression, j = this.lambda;
    return'                <div class="action">\n                    <button class="list-edit basic light" data-id=' + h((g = (g = d.id || (a != null ? a.id : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"id", hash:{}, data:e}) : g)) + " data-slug=" + h((g = (g = d.slug || (a != null ? a.slug : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"slug", hash:{}, data:e}) : g)) + ">" + h(j((f = b[1] != null ? b[1].l10nLists : b[1]) != null ? f.editLabel : f, a)) + "</button>\n                </div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    c = '<div id="listPage">\n    <div id="featured" class="main-content section">\n        <div class="blocked full">\n            <div class="banner"></div>\n            <a class=\'list-creator\'></a>\n';
    a = d["if"].call(a, a != null ? a.editable : a, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + '            <p class=\'list-header\'></p>\n        </div>\n    </div>\n    <div id="results" class="section">\n        <div class="blocked full">\n            <div id="catresults" class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>'
  }, useData:!0, useDepths:!0});
  h.listSmallLink = g({"1":function(a, d, c, e) {
    var b, f, g = this.lambda, c = this.escapeExpression, h = d.helperMissing, g = '    <div class="list littleblock" data-template="' + c(g((b = a != null ? a.link : a) != null ? b.type : b, a)) + '" data-link="' + c(g((b = a != null ? a.link : a) != null ? b.id : b, a)) + '" data-list="' + c((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '" data-publisher="' + c(g((b = a != null ? a.publisher : a) != 
    null ? b.label : b, a)) + '">\n    <a href="#!/' + c(g((b = a != null ? a.link : a) != null ? b.type : b, a)) + "/" + c(g((b = a != null ? a.link : a) != null ? b.slug : b, a)) + '" class="livelink" title="' + c((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '">\n';
    b = (d.listIcons || a && a.listIcons || h).call(a, 4, {name:"listIcons", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    b != null && (g += b);
    return g + '        <div class="list-title">\n            <strong>' + c((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</strong>\n        </div>\n    </a>\n    </div>\n"
  }, "2":function(a) {
    var d = this.lambda, c = "            ", a = d(a, a);
    a != null && (c += a);
    return c + "\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, e = (b = (b = d.result || (a != null ? a.result : a)) != null ? b : g, f = {name:"result", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.result || (e = c.call(a, e, f));
    return e != null ? e : ""
  }, useData:!0});
  h.listsPage = g({"1":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return'            <button class="create-new-publisher basic light">' + c(d(b[1] != null ? b[1].createNewPublisherList : b[1], a)) + "</button>\n"
  }, "3":function(a, d, c, e, b) {
    var f, g = d.helperMissing, c = this.escapeExpression, h = this.lambda, j = '            <div class="lists-container">\n                <div class="header">' + c((f = (f = d.header || (a != null ? a.header : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"header", hash:{}, data:e}) : f)) + "</div>\n                <div class=" + c((f = (f = d.className || (a != null ? a.className : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"className", hash:{}, data:e}) : 
    f)) + ">\n                    ";
    f = (d.createListDetails || a && a.createListDetails || g).call(a, a != null ? a.list : a, {name:"createListDetails", hash:{}, data:e});
    f != null && (j += f);
    j += '\n                    <div class="empty" ';
    f = d["if"].call(a, (f = a != null ? a.list : a) != null ? f.length : f, {name:"if", hash:{}, fn:this.program(4, e, b), inverse:this.noop, data:e});
    f != null && (j += f);
    return j + ">" + c(h(b[1] != null ? b[1].noLists : b[1], a)) + "</div>\n                </div>\n            </div>\n"
  }, "4":function() {
    return' style="display:none"'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, c = '<div class="lists-manager">\n    <div class="head">\n        <h2>' + g((f = (f = d.listsLabel || (a != null ? a.listsLabel : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"listsLabel", hash:{}, data:e}) : f)) + '</h2>\n    </div>\n    <div class="manager">\n        <button class="create-new-user basic light">' + g((f = (f = d.createNewUserList || (a != null ? a.createNewUserList : a)) != null ? f : c, typeof f === "function" ? 
    f.call(a, {name:"createNewUserList", hash:{}, data:e}) : f)) + "</button>\n";
    f = d["if"].call(a, a != null ? a.publisher : a, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    c += '    </div>\n    <div class="lists">\n';
    f = d.each.call(a, a != null ? a.lists : a, {name:"each", hash:{}, fn:this.program(3, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    return c + "    </div>\n</div>"
  }, useData:!0, useDepths:!0});
  h.loginForm = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"<h1>" + f((b = (b = d.logIn || (a != null ? a.logIn : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"logIn", hash:{}, data:e}) : b)) + '</h1>\n<form method="post" action="#" id="loginform">\n    <div class="input-form">\n        <div>\n            <label class="label" for="login-username">' + f((b = (b = d.email || (a != null ? a.email : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"email", hash:{}, data:e}) : b)) + '</label>\n            <input type="text" name="username" id="login-username">\n        </div>\n        <div>\n            <label class="label" for="login-password">' + 
    f((b = (b = d.password || (a != null ? a.password : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"password", hash:{}, data:e}) : b)) + '</label>\n            <input type="password" name="password" id="login-password">\n        </div>\n        <a class="login-forgot" href="https://id.unity.com/password/new" target="_blank">' + f((b = (b = d.forgotPassword || (a != null ? a.forgotPassword : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"forgotPassword", hash:{}, 
    data:e}) : b)) + '</a>\n        <input type="checkbox" name="remember_password" id="login-remember_session">\n        <label class="login-remember" for="login-remember_session">' + f((b = (b = d.keepLoggedIn || (a != null ? a.keepLoggedIn : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"keepLoggedIn", hash:{}, data:e}) : b)) + '</label>\n    </div>\n</form>\n<button id="login-button">' + f((b = (b = d.logInButton || (a != null ? a.logInButton : a)) != null ? b : c, typeof b === 
    "function" ? b.call(a, {name:"logInButton", hash:{}, data:e}) : b)) + '</button>\n<button id="cancel-login-button">' + f((b = (b = d.cancel || (a != null ? a.cancel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"cancel", hash:{}, data:e}) : b)) + '</button>\n<button id="createAccountButton">' + f((b = (b = d.createAccount || (a != null ? a.createAccount : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"createAccount", hash:{}, data:e}) : b)) + "</button>\n"
  }, useData:!0});
  h.loginUserMenu = g({"1":function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = "    <h2>" + g((b = (b = d.username || (a != null ? a.username : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"username", hash:{}, data:e}) : b)) + '</h2>\n    <p><a href="#!/account">' + g((b = (b = d.editAccount || (a != null ? a.editAccount : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"editAccount", hash:{}, data:e}) : b)) + '</a></p>\n    <small class="border-bottom margin">' + g((b = (b = d.editAccountText || 
    (a != null ? a.editAccountText : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"editAccountText", hash:{}, data:e}) : b)) + '</small>\n    <p><a href="#!/wishlist/' + g((b = (b = d.id || (a != null ? a.id : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '/page=1/sortby=addeddate">' + g((b = (b = d.wishList || (a != null ? a.wishList : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"wishList", hash:{}, data:e}) : 
    b)) + '</a></p>\n    <p><a href="#!/account/lists">' + g((b = (b = d.lists || (a != null ? a.lists : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"lists", hash:{}, data:e}) : b)) + '</a></p>\n    <p class="border-bottom margin"><a href="#!/account/notifications">' + g((b = (b = d.notifications || (a != null ? a.notifications : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"notifications", hash:{}, data:e}) : b)) + '</a></p>\n    <p><a href="#!/account/transactions">' + 
    g((b = (b = d.creditCardPayPalTransactions || (a != null ? a.creditCardPayPalTransactions : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"creditCardPayPalTransactions", hash:{}, data:e}) : b)) + '</a></p>\n    <p><a href="#!/account/transactions/credits">' + g((b = (b = d.transactions || (a != null ? a.transactions : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"transactions", hash:{}, data:e}) : b)) + '</a></p>\n    <p><a href="#!/account/licenses">' + g((b = 
    (b = d.licenses || (a != null ? a.licenses : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"licenses", hash:{}, data:e}) : b)) + '</a></p>\n    <p class="border-bottom margin"><a href="#!/user/' + g((b = (b = d.id || (a != null ? a.id : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '">' + g((b = (b = d.publicProfile || (a != null ? a.publicProfile : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"publicProfile", 
    hash:{}, data:e}) : b)) + "</a></p>\n", c = d["if"].call(a, a != null ? a.level11Member : a, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    c != null && (h += c);
    c = d["if"].call(a, a != null ? a.hasAssetKitsAccess : a, {name:"if", hash:{}, fn:this.program(4, e), inverse:this.noop, data:e});
    c != null && (h += c);
    c = d["if"].call(a, a != null ? a.admin : a, {name:"if", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e});
    c != null && (h += c);
    c = d["if"].call(a, a != null ? a.servers : a, {name:"if", hash:{}, fn:this.program(8, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + '    <a id="unav-logout" class="gray-btn">' + g((b = (b = d.logout || (a != null ? a.logout : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"logout", hash:{}, data:e}) : b)) + "</a>\n"
  }, "2":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'        <p class="border-bottom"><a href="#!/level11">' + f((b = (b = d.level11 || (a != null ? a.level11 : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"level11", hash:{}, data:e}) : b)) + "</a></p>\n"
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'        <p class="border-bottom"><a href="#!/assetkits">' + f((b = (b = d.assetkits || (a != null ? a.assetkits : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"assetkits", hash:{}, data:e}) : b)) + "</a></p>\n"
  }, "6":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'        <p><a id="unav-admin">' + f((b = (b = d.activateAdmin || (a != null ? a.activateAdmin : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"activateAdmin", hash:{}, data:e}) : b)) + '</a></p>\n        <p><a id="unav-admin-toolbox">Open Admin Toolbox</a></p>\n        <p class="border-bottom margin"><a id="unav-sim">' + f((b = (b = d.enableSim || (a != null ? a.enableSim : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"enableSim", hash:{}, data:e}) : 
    b)) + "</a></p>\n"
  }, "8":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'        <p><a href="https://kharma.assetstore.unity3d.com">' + f((b = (b = d.prodServer || (a != null ? a.prodServer : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"prodServer", hash:{}, data:e}) : b)) + '</a></p>\n        <p><a href="https://kharma-qa.assetstore.unity3d.com/only_to_be_used_for_development.html">' + f((b = (b = d.qaServer || (a != null ? a.qaServer : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"qaServer", hash:{}, data:e}) : b)) + '</a></p>\n        <p><a href="https://kharma-dev.assetstore.unity3d.com/only_to_be_used_for_development.html">' + 
    f((b = (b = d.devServer || (a != null ? a.devServer : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"devServer", hash:{}, data:e}) : b)) + '</a>\n        </p>\n        <p class="border-bottom margin"><a\n                href="http://kharma-local.assetstore.unity3d.com/only_to_be_used_for_development.html">' + f((b = (b = d.localServer || (a != null ? a.localServer : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"localServer", hash:{}, data:e}) : b)) + "</a>\n        </p>\n"
  }, "10":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"    <h2>" + f((b = (b = d.headline || (a != null ? a.headline : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"headline", hash:{}, data:e}) : b)) + '</h2>\n    <small class="border-bottom margin">' + f((b = (b = d.intro || (a != null ? a.intro : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"intro", hash:{}, data:e}) : b)) + '</small>\n    <a id="unav-login" class="blue-btn">' + f((b = (b = d.login || (a != null ? a.login : a)) != null ? b : c, typeof b === 
    "function" ? b.call(a, {name:"login", hash:{}, data:e}) : b)) + '</a>\n    <a class="gray-btn" target="_blank" href="https://id.unity.com/account/new">' + f((b = (b = d.create || (a != null ? a.create : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"create", hash:{}, data:e}) : b)) + "</a>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    a = d["if"].call(a, a != null ? a.user : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.program(10, e), data:e});
    return a != null ? a : ""
  }, useData:!0});
  h.memo = g({"1":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"<a class=\"see-all-notifications\" href='#!/account/notifications'>" + f((b = (b = d.seeAllNotifications || (a != null ? a.seeAllNotifications : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"seeAllNotifications", hash:{}, data:e}) : b)) + "</a>"
  }, "3":function() {
    return'<div class="close"></div>'
  }, "5":function() {
    return"vscroll"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<div class="header-box">\n<div class="head">\n    <h2>Notifications</h2>', c = d["if"].call(a, a != null ? a.isPopup : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += '\n    <a class="settings" href="#!/account">' + g((b = (b = d.settings || (a != null ? a.settings : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"settings", hash:{}, data:e}) : b)) + "</a>\n    ";
    c = d["if"].call(a, a != null ? a.isPopup : a, {name:"if", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += '\n</div>\n<div class="body ';
    c = d["if"].call(a, a != null ? a.isPopup : a, {name:"if", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + '"></div>\n</div>'
  }, useData:!0});
  h.memoNotification = g({"1":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = this.lambda, k = '<div class="memo-result flip-container ' + h((f = (f = d.type || (a != null ? a.type : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"type", hash:{}, data:e}) : f)), c = d.unless.call(a, a != null ? a.read : a, {name:"unless", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    c = d["if"].call(a, b[1] != null ? b[1].unity4x : b[1], {name:"if", hash:{}, fn:this.program(4, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    c = d["if"].call(a, b[1] != null ? b[1].blur : b[1], {name:"if", hash:{}, fn:this.program(6, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    c = d["if"].call(a, b[1] != null ? b[1].isIE11 : b[1], {name:"if", hash:{}, fn:this.program(8, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" data-memo-type="' + h((f = (f = d.type_code || (a != null ? a.type_code : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"type_code", hash:{}, data:e}) : f)) + '">\n    <div class="flipper">\n        <div class="front">\n            <div class="hover-state">\n                <div class="notify"><div class="close" title="Turn off"></div></div><br>\n            </div>\n            <div class="memo-body">';
    c = (f = (f = d.html_body || (a != null ? a.html_body : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"html_body", hash:{}, data:e}) : f);
    c != null && (k += c);
    return k + '\n                <div class="info"><div class="icon"><img src=\'/images/icons/memo/type/' + h((f = (f = d.type || (a != null ? a.type : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"type", hash:{}, data:e}) : f)) + '.png\' /></div><div class="date">' + h((d.formattedDate || a && a.formattedDate || g).call(a, a != null ? a.published_at : a, {name:"formattedDate", hash:{}, data:e})) + '</div></div>\n            </div>\n        </div>\n        <div class="back">\n            <div class="turn-off">\n                <span>' + 
    h(j(b[1] != null ? b[1].turnOff : b[1], a)) + '</span><br>\n                <button class="turn-off-button">Turn Off</button>\n                <button class="keep-on-button">Keep On</button>\n            </div>\n        </div>\n    </div>\n</div>\n'
  }, "2":function() {
    return" not-read"
  }, "4":function() {
    return" unity4x"
  }, "6":function() {
    return" blur"
  }, "8":function() {
    return" ie11"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.memo || (a != null ? a.memo : a)) != null ? f : h, g = {name:"memo", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.memo || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.memoSubscriptions = g({"1":function() {
    return"checked='checked'"
  }, "3":function(a, d, c, e) {
    var c = this.lambda, b = this.escapeExpression, f = "            <li><input class='memo-type' id='" + b(c(a != null ? a.code : a, a)) + "' type='checkbox' ", d = d["if"].call(a, a != null ? a.subscribed : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    d != null && (f += d);
    return f + ">" + b(c(a != null ? a.description : a, a)) + "</li>\n"
  }, "5":function() {
    return" checked='checked'"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var m;
    var l;
    var k;
    var j;
    var i;
    var b = this.lambda, f = this.escapeExpression, g = d.helperMissing, h = "<p><input id='master-enable' type='checkbox' ", c = d["if"].call(a, a != null ? a.masterEnable : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += "> " + f(b((c = a != null ? a.l10n : a) != null ? c.enable : c, a)) + '\n\n<div id="memo-settings">\n    <p>' + f(b((c = (c = a != null ? a.l10n : a) != null ? c.subscriptions : c) != null ? c.leadIn : c, a)) + "</p>\n    <ul>\n";
    c = d.each.call(a, a != null ? a.subscriptions : a, {name:"each", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += "    </ul>\n    <p>" + f(b((c = (c = a != null ? a.l10n : a) != null ? c.email : c) != null ? c.leadIn : c, a)) + "</p>\n    <ul>\n        <li><input type='radio' name='email-interval' id='asap' ";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.emailInterval : a, "===", "asap", {name:"ifCond", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += "> " + f(b((i = (c = (c = a != null ? a.l10n : a) != null ? c.email : c) != null ? c.interval : c, c = i) != null ? c.asap : c, a)) + "</li>\n        <li><input type='radio' name='email-interval' id='daily' ";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.emailInterval : a, "===", "daily", {name:"ifCond", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += "> " + f(b((j = (c = (c = a != null ? a.l10n : a) != null ? c.email : c) != null ? c.interval : c, c = j) != null ? c.daily : c, a)) + "</li>\n        <li><input type='radio' name='email-interval' id='weekly' ";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.emailInterval : a, "===", "weekly", {name:"ifCond", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += "> " + f(b((k = (c = (c = a != null ? a.l10n : a) != null ? c.email : c) != null ? c.interval : c, c = k) != null ? c.weekly : c, a)) + "</li>\n        <li><input type='radio' name='email-interval' id='monthly' ";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.emailInterval : a, "===", "monthly", {name:"ifCond", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e});
    c != null && (h += c);
    h += "> " + f(b((l = (c = (c = a != null ? a.l10n : a) != null ? c.email : c) != null ? c.interval : c, c = l) != null ? c.monthly : c, a)) + "</li>\n        <li><input type='radio' name='email-interval' id='never'   ";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.emailInterval : a, "===", "never", {name:"ifCond", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + "> " + f(b((m = (c = (c = a != null ? a.l10n : a) != null ? c.email : c) != null ? c.interval : c, c = m) != null ? c.never : c, a)) + "</li>\n    </ul>\n\n</div>"
  }, useData:!0});
  h.newSearch = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="searchArea">\n    <form id="searchForm" action="#" method="post">\n        <input id=\'searchInput\' type=\'text\' name=\'search\' autocomplete="off" maxlength="100" placeholder="' + f((b = (b = d.placeholder || (a != null ? a.placeholder : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"placeholder", hash:{}, data:e}) : b)) + '">\n    </form>\n    <div class="search-icon"></div>\n</div>'
  }, useData:!0});
  h.newsletter = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression, f = '<div id="innerNewsletter" class="header-box">\n    <div class="head">\n        <h2>' + f((b = (b = d.headline || (a != null ? a.headline : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"headline", hash:{}, data:e}) : b)) + "</h2>\n    </div>\n    <div class=\"body\">\n        <div class='signup'>\n            <p>" + f((b = (b = d.newsletterTitle || (a != null ? a.newsletterTitle : a)) != null ? b : c, typeof b === "function" ? 
    b.call(a, {name:"newsletterTitle", hash:{}, data:e}) : b)) + "</p>\n            <form id='newsletterselection'>\n                <input class=\"email\" type='text' name='newsletter'>\n            </form>\n            <div class='actions'>\n                <div class='body-buttons'><a href='#'>" + f((b = (b = d.save || (a != null ? a.save : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"save", hash:{}, data:e}) : b)) + "</a></div>\n            </div>\n            <div class='privacy-policy'>\n                <input type='checkbox' checked='checked'>", 
    a = (b = (b = d.privacyPolicy || (a != null ? a.privacyPolicy : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"privacyPolicy", hash:{}, data:e}) : b);
    a != null && (f += a);
    return f + "\n            </div>\n        </div>\n        <div class='response'><p></p></div>\n    </div>\n</div>\n"
  }, useData:!0});
  h.npsDialog = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return'<div class=\'dialog messageform npsform\'>\n    <div class="fill"><a class="logo" href="http://unity3d.com"></a></div>\n    <h2>' + e(c((d = a != null ? a.npsL10N : a) != null ? d.subtitle : d, a)) + '</h2>\n    <div class=\'form\'>\n        <select id="nps-pill" name="rating" style="display: inline-block;">\n            <option value=""></option>\n            <option value="0">0</option>\n            <option value="1">1</option>\n            <option value="2">2</option>\n            <option value="3">3</option>\n            <option value="4">4</option>\n            <option value="5">5</option>\n            <option value="6">6</option>\n            <option value="7">7</option>\n            <option value="8">8</option>\n            <option value="9">9</option>\n            <option value="10">10</option>\n        </select>\n        <div class="clear">\n            <div class="left">\n                <p class="nps-text">' + 
    e(c((d = a != null ? a.npsL10N : a) != null ? d.unlikely : d, a)) + '</p>\n            </div>\n            <div class="right">\n                <p class="nps-text">' + e(c((d = a != null ? a.npsL10N : a) != null ? d.likely : d, a)) + '</p>\n            </div>\n        </div>\n        <div class="clear">\n            <h2>' + e(c((d = a != null ? a.npsL10N : a) != null ? d.comment : d, a)) + "<br>" + e(c((d = a != null ? a.npsL10N : a) != null ? d.commentsub : d, a)) + '</h2>\n            <textarea class=\'input\' id=\'npsComment\' spellcheck=\'true\' placeholder=\'\' maxlength="65535"></textarea>\n        </div>\n        <div class="clear">\n            <div class="left">\n                <input class="cancel-button" type="button" value="' + 
    e(c((d = a != null ? a.npsL10N : a) != null ? d.later : d, a)) + '">\n            </div>\n            <div class="right">\n                <input class="submit-button" type="submit" value="' + e(c((d = a != null ? a.npsL10N : a) != null ? d.submit : d, a)) + '">\n            </div>\n        </div>\n        <div class="clear">\n            <div class="left">\n                <a id="never-button">' + e(c((d = a != null ? a.npsL10N : a) != null ? d.never : d, a)) + '</a>\n            </div>\n        </div>\n    </div>\n    <div class="clear">\n        <div class="border-bottom margin"></div>\n    </div>\n    <div>\n        <div class="social">\n            <a href="http://www.facebook.com/unity3d" class="icon facebook" target="_blank">Facebook</a>\n            <a href="http://www.twitter.com/unity3d" class="icon twitter" target="_blank">Twitter</a>\n            <a href="https://plus.google.com/u/0/104568650392955941577/" class="icon googleplus" target="_blank">Google+</a>\n        </div>\n    </div>\n</div>'
  }, useData:!0});
  h.openGraphCategory = g({"1":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'    <meta property="og:title" content="' + g((f = (f = d.title || (a != null ? a.title : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '" />\n    <meta property="og:type" content="category" />\n    <meta property="og:url" content="' + g(h(b[1] != null ? b[1].url : b[1], a)) + '" />\n    <meta property="og:site_name" content="Unity Asset Store" />\n    <meta property="fb:app_id" content="1012447922112596">\n    <meta name="twitter:card" content="summary" />\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.openGraphContent = g({"1":function(a, d, c, e, b) {
    var f, g, c = d.helperMissing, h = this.escapeExpression, j = this.lambda;
    return'<meta property="og:title" content="' + h((g = (g = d.title || (a != null ? a.title : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"title", hash:{}, data:e}) : g)) + " by " + h(j((f = a != null ? a.publisher : a) != null ? f.label : f, a)) + '" />\n<meta property="og:description" content="' + h(j(b[1] != null ? b[1].description : b[1], a)) + '" />\n<meta property="og:type" content="product" />\n<meta name="twitter:image" content="' + h(j(b[1] != null ? b[1].imageIcon : 
    b[1], a)) + '" />\n<meta property="og:image" content="' + h(j(b[1] != null ? b[1].imageBig : b[1], a)) + '" />\n<meta property="og:url" content="' + h(j(b[1] != null ? b[1].url : b[1], a)) + '" />\n<meta property="og:site_name" content="Unity Asset Store" />\n<meta property="fb:app_id" content="1012447922112596">\n<meta name="twitter:card" content="summary" />\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.openGraphPublisher = g({"1":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'    <meta property="og:title" content="' + g((f = (f = d.name || (a != null ? a.name : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '" />\n    <meta property="og:description" content="' + g(h(b[1] != null ? b[1].description : b[1], a)) + '" />\n    <meta property="og:type" content="company" />\n    <meta property="og:image" content="' + g(h(b[1] != null ? b[1].imageSmall : b[1], a)) + '" />\n    <meta property="og:url" content="' + g(h(b[1] != 
    null ? b[1].url : b[1], a)) + '" />\n    <meta property="og:site_name" content="Unity Asset Store" />\n    <meta property="fb:app_id" content="1012447922112596">\n    <meta name="twitter:card" content="summary" />\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.packageDetails = g({"1":function(a, d, c, e, b) {
    var f, c = "";
    f = d.unless.call(a, (f = a != null ? a.flags : a) != null ? f.no_text_on_small_keyimage : f, {name:"unless", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    return c
  }, "2":function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, j = d.blockHelperMissing, k = this.escapeExpression, n = this.lambda, m = '<div class="details', c = (f = (f = d.price_original || (a != null ? a.price_original : a)) != null ? f : h, g = {name:"price_original", hash:{}, fn:this.program(3, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.price_original || (c = j.call(a, c, g));
    c != null && (m += c);
    m += '">\n    <h2 title="' + k((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '"><a href="#!/content/' + k(n((c = a != null ? a.link : a) != null ? c.id : c, a)) + '" class="livelink">' + k((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</a></h2>\n    ";
    c = (f = (f = d.category || (a != null ? a.category : a)) != null ? f : h, g = {name:"category", hash:{}, fn:this.program(5, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.category || (c = j.call(a, c, g));
    c != null && (m += c);
    m += "\n    ";
    c = (f = (f = d.publisher || (a != null ? a.publisher : a)) != null ? f : h, g = {name:"publisher", hash:{}, fn:this.program(7, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.publisher || (c = j.call(a, c, g));
    c != null && (m += c);
    m += "\n";
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.no_rating : c, {name:"if", hash:{}, fn:this.program(9, e, b), inverse:this.program(11, e, b), data:e});
    c != null && (m += c);
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.no_price : c, {name:"if", hash:{}, fn:this.program(9, e, b), inverse:this.program(13, e, b), data:e});
    c != null && (m += c);
    m += "    </div>\n";
    c = d.unless.call(a, (c = a != null ? a.flags : a) != null ? c.no_price : c, {name:"unless", hash:{}, fn:this.program(29, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    return m
  }, "3":function() {
    return" sale"
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#!/search/page=1/sortby=popularity/query=category:' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '" class="livelink">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + "</a><br>"
  }, "7":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#!/search/page=1/sortby=popularity/query=publisher:' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", 
    hash:{}, data:e}) : b)) + "</a><br>"
  }, "9":function() {
    return"        <div>&nbsp;</div>\n"
  }, "11":function(a, d, c, e) {
    var b, c = d.helperMissing, f = "        ";
    b = (d.ratingUI || a && a.ratingUI || c).call(a, (b = a != null ? a.rating : a) != null ? b.count : b, (b = a != null ? a.rating : a) != null ? b.average : b, {name:"ratingUI", hash:{}, data:e});
    b != null && (f += b);
    return f + "<br>\n"
  }, "13":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[3] != null ? b[3].level11_price : b[3], {name:"if", hash:{}, fn:this.program(14, e, b), inverse:this.program(17, e, b), data:e});
    a != null && (c += a);
    return c
  }, "14":function(a, d, c, e) {
    var b = d.helperMissing, f = '            <span class="price">', c = (d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price_level11 : a, {name:"formattedPrice", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    c != null && (f += c);
    f += '</span>\n            <span class="original-price">';
    c = (d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    c != null && (f += c);
    return f + "</span>\n"
  }, "15":function() {
    return""
  }, "17":function(a, d, c, e) {
    c = "";
    a = d["if"].call(a, a != null ? a.price_assetkits : a, {name:"if", hash:{}, fn:this.program(18, e), inverse:this.program(26, e), data:e});
    a != null && (c += a);
    return c
  }, "18":function(a, d, c, e) {
    var b, c = d.helperMissing, f = "  \n";
    b = (d.ifCond || a && a.ifCond || c).call(a, (b = a != null ? a.price : a) != null ? b.USD : b, "<", (b = a != null ? a.price_assetkits : a) != null ? b.USD : b, {name:"ifCond", hash:{}, fn:this.program(19, e), inverse:this.program(21, e), data:e});
    b != null && (f += b);
    return f + "                \n"
  }, "19":function(a, d, c, e) {
    var b = d.helperMissing, f = '                    <span class="price">', c = (d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    c != null && (f += c);
    f += '</span>\n                    <span class="original-price">';
    c = (d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price_original : a, {name:"formattedPrice", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    c != null && (f += c);
    return f + "\n"
  }, "21":function(a, d, c, e) {
    var b;
    b = d.helperMissing;
    c = '                    <span class="price">';
    b = (d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price_assetkits : a, {name:"formattedPrice", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    b != null && (c += b);
    c += "</span>\n                   \n";
    b = d["if"].call(a, a != null ? a.price_original : a, {name:"if", hash:{}, fn:this.program(22, e), inverse:this.program(24, e), data:e});
    b != null && (c += b);
    return c
  }, "22":function(a, d, c, e) {
    var b = d.helperMissing, c = '                        <span class="original-price">', a = (d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price_original : a, {name:"formattedPrice", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>\n"
  }, "24":function(a, d, c, e) {
    var b = d.helperMissing, c = '                        <span class="original-price">', a = (d.formattedPrice || a && a.formattedPrice || b).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>\n"
  }, "26":function(a, d, c, e) {
    var b, f, g = d.helperMissing, h = d.blockHelperMissing, j = '                <span class="price">', c = (d.formattedPrice || a && a.formattedPrice || g).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    c != null && (j += c);
    j += "</span>\n                ";
    c = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(27, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (c = h.call(a, c, f));
    c != null && (j += c);
    return j + "\n"
  }, "27":function(a, d, c, e) {
    var b = d.helperMissing, c = '<span class="original-price">', a = (d.formattedPrice || a && a.formattedPrice || b).call(a, a, {name:"formattedPrice", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>"
  }, "29":function(a, d, c, e) {
    c = "";
    a = d["if"].call(a, a != null ? a.price_level11 : a, {name:"if", hash:{}, fn:this.program(30, e), inverse:this.program(32, e), data:e});
    a != null && (c += a);
    return c
  }, "30":function() {
    return'        <span class="sale-level-11-indicator" />\n'
  }, "32":function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, h = "        ", e = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(33, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (e = c.call(a, e, f));
    e != null && (h += e);
    return h + "\n"
  }, "33":function() {
    return'<span class="sale-indicator" />'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.result || (a != null ? a.result : a)) != null ? f : h, g = {name:"result", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.result || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.packageSmallLink = g({"1":function(a, d, c, e, b) {
    var f, g, h = this.lambda, j = this.escapeExpression, k = d.helperMissing, n = d.blockHelperMissing, m = '    <div class="littleblock ', c = d["if"].call(a, a != null ? a.overlay_text : a, {name:"if", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    c = d["if"].call(a, b[1] != null ? b[1].level11_price : b[1], {name:"if", hash:{}, fn:this.program(4, e, b), inverse:this.program(6, e, b), data:e});
    c != null && (m += c);
    m += '" data-template="' + j(h((c = a != null ? a.link : a) != null ? c.type : c, a)) + '" data-link="' + j(h((c = a != null ? a.link : a) != null ? c.id : c, a)) + '" data-package="' + j((f = (f = d.title || (a != null ? a.title : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '" data-publisher="' + j(h((c = a != null ? a.publisher : a) != null ? c.label : c, a)) + '">\n    <a href="';
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.override_url : c, {name:"if", hash:{}, fn:this.program(9, e, b), inverse:this.program(11, e, b), data:e});
    c != null && (m += c);
    m += '" class="';
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.override_url : c, {name:"if", hash:{}, fn:this.program(13, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    m += 'livelink">\n        <img class="microimage" src="' + j(h((c = a != null ? a.keyimage : a) != null ? c.icon : c, a)) + '" alt="' + j((f = (f = d.title || (a != null ? a.title : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '" />\n    </a>\n    <div class="details microblock">\n        <strong><a href="';
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.override_url : c, {name:"if", hash:{}, fn:this.program(9, e, b), inverse:this.program(11, e, b), data:e});
    c != null && (m += c);
    m += '" class="';
    c = d["if"].call(a, (c = a != null ? a.flags : a) != null ? c.override_url : c, {name:"if", hash:{}, fn:this.program(13, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    m += 'livelink" title="' + j((f = (f = d.title || (a != null ? a.title : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '">' + j((f = (f = d.title || (a != null ? a.title : a)) != null ? f : k, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</a></strong>\n        ";
    c = d["if"].call(a, a != null ? a.category : a, {name:"if", hash:{}, fn:this.program(15, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    m += '<br>\n        <span class="publisher">';
    c = (f = (f = d.publisher || (a != null ? a.publisher : a)) != null ? f : k, g = {name:"publisher", hash:{}, fn:this.program(18, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.publisher || (c = n.call(a, c, g));
    c != null && (m += c);
    m += "</span><br>\n        ";
    c = d.unless.call(a, (c = a != null ? a.flags : a) != null ? c.no_rating : c, {name:"unless", hash:{}, fn:this.program(20, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    m += "<br>\n";
    c = d.unless.call(a, (c = a != null ? a.flags : a) != null ? c.no_price : c, {name:"unless", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e});
    c != null && (m += c);
    return m + "    </div>\n</div>\n"
  }, "2":function() {
    return"featured "
  }, "4":function() {
    return"level-11"
  }, "6":function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, e = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(7, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (e = c.call(a, e, f));
    return e != null ? e : ""
  }, "7":function() {
    return" sale"
  }, "9":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.url || (a != null ? a.url : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"url", hash:{}, data:e}) : b))
  }, "11":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return"#!/" + e(c((d = a != null ? a.link : a) != null ? d.type : d, a)) + "/" + e(c((d = a != null ? a.link : a) != null ? d.id : d, a))
  }, "13":function() {
    return"override_url "
  }, "15":function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, h = '<span class="category">', e = (b = (b = d.category || (a != null ? a.category : a)) != null ? b : g, f = {name:"category", hash:{}, fn:this.program(16, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.category || (e = c.call(a, e, f));
    e != null && (h += e);
    return h + "</span>"
  }, "16":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#!/search/page=1/sortby=popularity/query=category:' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", 
    hash:{}, data:e}) : b)) + "</a>"
  }, "18":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#!/search/page=1/sortby=popularity/query=publisher:' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", 
    hash:{}, data:e}) : b)) + "</a>"
  }, "20":function(a, d, c, e) {
    var b, c = d.helperMissing;
    b = (d.ratingUI || a && a.ratingUI || c).call(a, (b = a != null ? a.rating : a) != null ? b.count : b, (b = a != null ? a.rating : a) != null ? b.average : b, {name:"ratingUI", hash:{}, data:e});
    return b != null ? b : ""
  }, "22":function(a, d, c, e, b) {
    var f, c = this.lambda, g = this.escapeExpression, c = '        <div class="prices">\n            <a class="wish-list" data-id="' + g(c((f = a != null ? a.link : a) != null ? f.id : f, a)) + '"></a>\n            <a class="wish-list-buy" data-id="' + g(c((f = a != null ? a.link : a) != null ? f.id : f, a)) + '"></a>\n';
    f = d["if"].call(a, b[2] != null ? b[2].level11_price : b[2], {name:"if", hash:{}, fn:this.program(23, e, b), inverse:this.program(26, e, b), data:e});
    f != null && (c += f);
    return c + "        </div>\n"
  }, "23":function(a, d, c, e, b) {
    var f = d.helperMissing, g = '                <span class="price">', c = (d.formattedPrice || a && a.formattedPrice || f).call(a, b[3] != null ? b[3].level11_price : b[3], {name:"formattedPrice", hash:{}, fn:this.program(24, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    g += '</span><span class="original-price">';
    c = (d.formattedPrice || a && a.formattedPrice || f).call(a, b[2] != null ? b[2].price : b[2], {name:"formattedPrice", hash:{}, fn:this.program(24, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    return g + "</span>\n"
  }, "24":function() {
    return""
  }, "26":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, b[3] != null ? b[3].assetkits_price : b[3], {name:"if", hash:{}, fn:this.program(27, e, b), inverse:this.program(33, e, b), data:e});
    a != null && (c += a);
    return c
  }, "27":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = b[2] != null ? b[2].price : b[2]) != null ? f.USD : f, "<", (f = b[4] != null ? b[4].assetkits_price : b[4]) != null ? f.USD : f, {name:"ifCond", hash:{}, fn:this.program(28, e, b), inverse:this.program(31, e, b), data:e});
    f != null && (g += f);
    return g
  }, "28":function(a, d, c, e) {
    var b, f, g = d.helperMissing, h = d.blockHelperMissing, j = '                        <span class="price">', c = (d.formattedPrice || a && a.formattedPrice || g).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(24, e), inverse:this.noop, data:e});
    c != null && (j += c);
    j += "</span>";
    c = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(29, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (c = h.call(a, c, f));
    c != null && (j += c);
    return j + "\n"
  }, "29":function(a, d, c, e) {
    var b = d.helperMissing, c = '<span class="original-price">', a = (d.formattedPrice || a && a.formattedPrice || b).call(a, a, {name:"formattedPrice", hash:{}, fn:this.program(24, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>"
  }, "31":function(a, d, c, e, b) {
    var f = d.helperMissing, g = '                        <span class="price">', c = (d.formattedPrice || a && a.formattedPrice || f).call(a, b[5] != null ? b[5].assetkits_price : b[5], {name:"formattedPrice", hash:{}, fn:this.program(24, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    g += '</span><span class="original-price">';
    c = (d.formattedPrice || a && a.formattedPrice || f).call(a, b[2] != null ? b[2].price : b[2], {name:"formattedPrice", hash:{}, fn:this.program(24, e, b), inverse:this.noop, data:e});
    c != null && (g += c);
    return g + "</span>\n"
  }, "33":function(a, d, c, e) {
    var b, f, g = d.helperMissing, h = d.blockHelperMissing, j = '                    <span class="price">', c = (d.formattedPrice || a && a.formattedPrice || g).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(24, e), inverse:this.noop, data:e});
    c != null && (j += c);
    j += "</span>";
    c = (b = (b = d.price_original || (a != null ? a.price_original : a)) != null ? b : g, f = {name:"price_original", hash:{}, fn:this.program(29, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.price_original || (c = h.call(a, c, f));
    c != null && (j += c);
    return j + "\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.result || (a != null ? a.result : a)) != null ? f : h, g = {name:"result", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.result || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.packageVersionBox = g({"1":function(a, d, c, e) {
    var b, f, g = d.helperMissing, h = this.escapeExpression, j = this.lambda, k = d.blockHelperMissing, n = "<table>\n    <tr>\n        <td id='left' rowspan='2'>\n            <div class='package-icon'>\n                <h1 class='date'>", c = d["if"].call(a, a != null ? a.status_updated_at : a, {name:"if", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "</h1>\n                <h2 class='time'>";
    c = d["if"].call(a, a != null ? a.status_updated_at : a, {name:"if", hash:{}, fn:this.program(4, e), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "\n                    <span class='change-type change-type-" + h((b = (b = d.change_type || (a != null ? a.change_type : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"change_type", hash:{}, data:e}) : b)) + "'>" + h((b = (b = d.change_type || (a != null ? a.change_type : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"change_type", hash:{}, data:e}) : b)) + "</span>\n                </h2>\n                <img src='" + h((b = (b = d.icon || (a != null ? 
    a.icon : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"icon", hash:{}, data:e}) : b)) + "'>\n            </div>\n        </td>\n        <td id='center-top'>\n            <h1>" + h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + " " + h((b = (b = d.version || (a != null ? a.version : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"version", hash:{}, data:e}) : b)) + "</h1>\n\n            <h2>by " + 
    h(j((c = a != null ? a.publisher : a) != null ? c.label : c, a)) + "\n                <a href='" + h((b = (b = d.adminFormattedPublisherEmail || (a != null ? a.adminFormattedPublisherEmail : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"adminFormattedPublisherEmail", hash:{}, data:e}) : b)) + "' class='externallink email-icon' title='Email publisher' target='_blank'/>\n            </h2>\n        </td>\n        <td id='right' rowspan='2'>\n            <div class='actions'>\n";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "published", {name:"ifCond", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "disabled", {name:"ifCond", hash:{}, fn:this.program(8, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "!==", "error", {name:"ifCond", hash:{}, fn:this.program(10, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "pendingReview", {name:"ifCond", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.status : a, "===", "disabled", {name:"ifCond", hash:{}, fn:this.program(15, e), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "                <span class='admin-button'>\n                    <a class='comment' href='#' package-name='" + h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "' data-content=" + h((b = (b = d.comment || (a != null ? a.comment : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"comment", hash:{}, data:e}) : b)) + ">Comment</a>\n                </span>\n                <span class='admin-button'>\n                    <a class='preview' href='#' package-name='" + h((b = (b = d.name || (a != null ? 
    a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Preview</a>\n                </span>\n                <span class='admin-button'>\n                    <a class='download' href='#' package-name='" + 
    h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", 
    hash:{}, data:e}) : b)) + "' package-upload-id='" + h((b = (b = d.max_package_upload_id || (a != null ? a.max_package_upload_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"max_package_upload_id", hash:{}, data:e}) : b)) + "'>Download</a>\n                </span>\n                <span class='admin-button'>\n                    <a class='loghistory' href='#' package-name='" + h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, 
    {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Log</a>\n                </span>\n                <span class='admin-button'>\n                    <a class='showversionlist' href='#' package-name='" + 
    h((b = (b = d.name || (a != null ? a.name : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", 
    hash:{}, data:e}) : b)) + "'>Versions</a>\n                </span>\n            </div>\n        </td>\n    </tr>\n    <tr>\n        <td id='center-mid'>\n            <div class='center'>\n                <h3>Status</h3>\n\n                <div class='status'>\n                    <span class='status-" + h((b = (b = d.status || (a != null ? a.status : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + "'>" + h((b = (b = d.status || (a != null ? a.status : 
    a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + "</span>\n                </div>\n";
    c = d["if"].call(a, a != null ? a.vetting_comment : a, {name:"if", hash:{}, fn:this.program(17, e), inverse:this.noop, data:e});
    c != null && (n += c);
    c = d["if"].call(a, a != null ? a.submit_message : a, {name:"if", hash:{}, fn:this.program(19, e), inverse:this.noop, data:e});
    c != null && (n += c);
    n += "            </div>\n        </td>\n    </tr>\n    <tr>\n        <td id='center-bottom' colspan='3'>\n            <table class=\"info\">\n                <tr>\n                    <th>Unity</th>\n                    <td><b>Version</b></td>\n                    <th>Min</th>\n                    <td>" + h((b = (b = d.min_unity_version || (a != null ? a.min_unity_version : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"min_unity_version", hash:{}, data:e}) : b));
    c = (b = (b = d.max_unity_version || (a != null ? a.max_unity_version : a)) != null ? b : g, f = {name:"max_unity_version", hash:{}, fn:this.noop, inverse:this.program(21, e), data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.max_unity_version || (c = k.call(a, c, f));
    c != null && (n += c);
    n += "</td>\n                    <th>Admin</th>\n                    <td>";
    c = d["if"].call(a, a != null ? a.last_admin : a, {name:"if", hash:{}, fn:this.program(23, e), inverse:this.program(29, e), data:e});
    c != null && (n += c);
    n += '</td>\n                    <th>Case</th>\n                    <td><a class="externallink" href=\'' + h((b = (b = d.case_url || (a != null ? a.case_url : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"case_url", hash:{}, data:e}) : b)) + '\' target="_blank">' + h((b = (b = d.case_id || (a != null ? a.case_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"case_id", hash:{}, data:e}) : b)) + "</a></td>\n\n                    <th>Package ID</th>\n                    <td>\n                        <a class='externallink' href='https://admin.assetstore.unity3d.com/admin/browse/view/Package/" + 
    h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' target='_blank'\n                           title='View Package " + h((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + " in DataBrowser'>\n                            " + h((b = (b = d.package_id || (a != null ? a.package_id : 
    a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "\n                        </a>\n                    </td>\n                </tr>\n                <tr>\n                    <th>Used</th>\n                    <td>" + h((b = (b = d.used_unity_version || (a != null ? a.used_unity_version : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"used_unity_version", hash:{}, data:e}) : b)) + "</td>\n                    <th>Max</th>\n                    <td>" + 
    h((b = (b = d.max_unity_version || (a != null ? a.max_unity_version : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"max_unity_version", hash:{}, data:e}) : b));
    c = (b = (b = d.max_unity_version || (a != null ? a.max_unity_version : a)) != null ? b : g, f = {name:"max_unity_version", hash:{}, fn:this.noop, inverse:this.program(31, e), data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.max_unity_version || (c = k.call(a, c, f));
    c != null && (n += c);
    n += "</td>\n                    <th>Price</th>\n                    <td>";
    c = (d.ifCond || a && a.ifCond || g).call(a, a != null ? a.price : a, "===", "0.00", {name:"ifCond", hash:{}, fn:this.program(33, e), inverse:this.program(35, e), data:e});
    c != null && (n += c);
    return n + "</td>\n                    <th>Size</th>\n                    <td>" + h((b = (b = d.sizetext || (a != null ? a.sizetext : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"sizetext", hash:{}, data:e}) : b)) + "</td>\n\n                    <th>PackageVersion ID</th>\n                    <td>\n                        <a class='externallink' href='https://admin.assetstore.unity3d.com/admin/browse/view/PackageVersion/" + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : 
    a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "' target='_blank'\n                           title='View PackageVersion " + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + " in DataBrowser'>\n                            " + h((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != 
    null ? b : g, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "\n                        </a>\n                    </td>\n                </tr>\n            </table>\n        </td>\n    </tr>\n</table>\n"
  }, "2":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.adminFormattedDate || (a != null ? a.adminFormattedDate : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"adminFormattedDate", hash:{}, data:e}) : b))
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.adminFormattedTime || (a != null ? a.adminFormattedTime : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"adminFormattedTime", hash:{}, data:e}) : b))
  }, "6":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='admin-button'>\n                        <a class='revert' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Revert</a>\n                    </span>\n                    <span class='admin-button'>\n                        <a class='disable' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || 
    (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Disable</a>\n                    </span>\n"
  }, "8":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='admin-button'>\n                        <a class='enable' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Enable</a>\n                    </span>\n"
  }, "10":function(a, d, c, e) {
    var b = d.helperMissing, f = "", c = (d.ifCond || a && a.ifCond || b).call(a, a != null ? a.status : a, "===", "pendingReview", {name:"ifCond", hash:{}, fn:this.program(11, e), inverse:this.noop, data:e});
    c != null && (f += c);
    c = (d.ifCond || a && a.ifCond || b).call(a, a != null ? a.status : a, "===", "declined", {name:"ifCond", hash:{}, fn:this.program(13, e), inverse:this.noop, data:e});
    c != null && (f += c);
    return f
  }, "11":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='admin-button'>\n                        <a class='accept' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Accept</a>\n                    </span>\n"
  }, "13":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                        <span class='admin-button'>\n                        <a class='accept' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Accept</a>\n                    </span>\n"
  }, "15":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                    <span class='admin-button'>\n                        <a class='decline' href='#' package-name='" + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + "' package-id='" + f((b = (b = d.package_id || (a != null ? a.package_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_id", hash:{}, data:e}) : b)) + "' package-version-id='" + f((b = (b = d.package_version_id || 
    (a != null ? a.package_version_id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_version_id", hash:{}, data:e}) : b)) + "'>Decline</a>\n                    </span>\n"
  }, "17":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                <h3>Vetting Comment</h3>\n                <div class='last-message'>" + f((b = (b = d.vetting_comment || (a != null ? a.vetting_comment : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"vetting_comment", hash:{}, data:e}) : b)) + "</div>\n"
  }, "19":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                <h3>Publisher Submit Message</h3>\n                <div class='last-message'>" + f((b = (b = d.submit_message || (a != null ? a.submit_message : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"submit_message", hash:{}, data:e}) : b)) + "</div>\n"
  }, "21":function() {
    return"?"
  }, "23":function(a, d, c, e) {
    var b;
    b = d["if"].call(a, (b = a != null ? a.last_admin : a) != null ? b.email : b, {name:"if", hash:{}, fn:this.program(24, e), inverse:this.program(29, e), data:e});
    return b != null ? b : ""
  }, "24":function(a, d, c, e) {
    var b, c = this.lambda, f = this.escapeExpression, c = "\n                        <a class='externallink' href='mailto:" + f(c((b = a != null ? a.last_admin : a) != null ? b.email : b, a)) + "' target='_blank'\n                           title='" + f(c((b = a != null ? a.last_admin : a) != null ? b.name : b, a)) + "<" + f(c((b = a != null ? a.last_admin : a) != null ? b.email : b, a)) + ">'>\n                            ";
    b = d["if"].call(a, (b = a != null ? a.last_admin : a) != null ? b.short_name : b, {name:"if", hash:{}, fn:this.program(25, e), inverse:this.program(27, e), data:e});
    b != null && (c += b);
    return c + "\n                        </a>\n                    "
  }, "25":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.last_admin : a) != null ? d.short_name : d, a))
  }, "27":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.last_admin : a) != null ? d.email : d, a))
  }, "29":function() {
    return"none"
  }, "31":function() {
    return"&infin;"
  }, "33":function() {
    return"Free"
  }, "35":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"$" + f((b = (b = d.price || (a != null ? a.price : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"price", hash:{}, data:e}) : b))
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, h = "<\!-- vetting interface package version box --\>\n", e = (b = (b = d.item || (a != null ? a.item : a)) != null ? b : g, f = {name:"item", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.item || (e = c.call(a, e, f));
    e != null && (h += e);
    return h
  }, useData:!0});
  h.page404 = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression, f = '<div>\n    <div>\n        <h1 class="title404">' + f((b = (b = d.notFound || (a != null ? a.notFound : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"notFound", hash:{}, data:e}) : b)) + '</h1>\n        <p class="message404">', a = (b = (b = d.message || (a != null ? a.message : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"message", hash:{}, data:e}) : b);
    a != null && (f += a);
    return f + '</p>\n    </div>\n    <div class="list">\n        <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n    </div>\n</div>'
  }, useData:!0});
  h.previewPage = g({"1":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = this.lambda, k = '<div id="contentpage" class="', c = d["if"].call(a, a != null ? a.price_original : a, {name:"if", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '">\n    <section id="contentoverview" class="section">\n        <\!--<h1>' + h((f = (f = d.title || (a != null ? a.title : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '&nbsp<p class="status">';
    c = d["if"].call(a, a != null ? a.status : a, {name:"if", hash:{}, fn:this.program(4, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += "</p></h1>--\>\n        <div class=\"content-container\">\n            <div class='background' style=\"background-image: url('";
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.big : c, {name:"if", hash:{}, fn:this.program(6, e, b), inverse:this.program(8, e, b), data:e});
    c != null && (k += c);
    k += '\')">\n                <img class="bg1" src="/images/bg796x389.gif" /><img class="bg2" src="/images/bg516x389.gif" />\n                <div class=\'salesBadget\' style="background-image: url(\'';
    c = d["if"].call(a, a != null ? a.saleData : a, {name:"if", hash:{}, fn:this.program(10, e, b), inverse:this.program(13, e, b), data:e});
    c != null && (k += c);
    k += '\')"></div>\n            </div>\n            <div class="blocked full">\n                <div class="overview-text-overlay ';
    c = d["if"].call(a, (c = a != null ? a.category : a) != null ? c.multiple : c, {name:"if", hash:{}, fn:this.program(16, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '"></div>\n            </div>\n        </div>\n        </section>\n        <section id="contentaside" class="section">\n            <div class="blocked full">\n                <div class="item">\n                    <span class="left">' + h(j(b[1] != null ? b[1].versionText : b[1], a)) + '\n                        <a class="livelink show-release-notes" target=_blank>' + h((f = (f = d.version || (a != null ? a.version : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"version", 
    hash:{}, data:e}) : f)) + "</a>\n                        ";
    c = d["if"].call(a, a != null ? a.pubdate : a, {name:"if", hash:{}, fn:this.program(18, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '\n                    </span>\n                    <span class="left">';
    c = d["if"].call(a, a != null ? a.sizetext : a, {name:"if", hash:{}, fn:this.program(20, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += " " + h((f = (f = d.sizetext || (a != null ? a.sizetext : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"sizetext", hash:{}, data:e}) : f)) + '</span>\n                </div>\n            </div>\n        </section>\n        <section id="featured" class="section">\n            <h1 id="cattitle">Featured Preview</h1>\n            <div class="blocked quarter feature-small">\n                <div class="item livelink">\n                    <div class="background ';
    c = d.unless.call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"unless", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" style="background-image: url(\'';
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(8, e, b), data:e});
    c != null && (k += c);
    k += '\')"></div>\n                </div>\n            </div>\n            <div class="blocked quarter feature-small">\n                <div class="item livelink">\n                    <div class="background ';
    c = d.unless.call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"unless", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" style="background-image: url(\'';
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(8, e, b), data:e});
    c != null && (k += c);
    k += '\')"></div>\n                </div>\n            </div>\n            <div class="blocked quarter feature-small">\n                <div class="item livelink">\n                    <div class="background ';
    c = d.unless.call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"unless", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" style="background-image: url(\'';
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(8, e, b), data:e});
    c != null && (k += c);
    k += '\')"></div>\n                </div>\n            </div>\n            <div  class="blocked quarter feature-small">\n                <div class="item livelink">\n                    <div class="background ';
    c = d.unless.call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"unless", hash:{}, fn:this.program(22, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '" style="background-image: url(\'';
    c = d["if"].call(a, (c = a != null ? a.keyimage : a) != null ? c.small : c, {name:"if", hash:{}, fn:this.program(24, e, b), inverse:this.program(8, e, b), data:e});
    c != null && (k += c);
    return k + '\')"></div>\n                </div>\n            </div>\n            <div id="popularBox" class="header-box">\n                <div class="head">\n                    <h2>Icon Preview</h2>\n                </div>\n                <div class="body">\n                    <div id="popresults" style="padding: 5px;"></div>\n                </div>\n            </div>\n        </section>\n    </section>\n</div>\n'
  }, "2":function() {
    return"sale"
  }, "4":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"[" + f((b = (b = d.status || (a != null ? a.status : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"status", hash:{}, data:e}) : b)) + "]"
  }, "6":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.keyimage : a) != null ? d.big : d, a))
  }, "8":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.keyimage : a) != null ? d.icon : d, a))
  }, "10":function(a, d, c, e) {
    var b;
    b = d["if"].call(a, a != null ? a.id : a, "===", (b = a != null ? a.daily : a) != null ? b.id : b, {name:"if", hash:{}, fn:this.program(11, e), inverse:this.noop, data:e});
    return b != null ? b : ""
  }, "11":function() {
    return"/images/badges/24hourdeals-2016-12.png"
  }, "13":function(a, d, c, e) {
    a = d["if"].call(a, a != null ? a.badge : a, {name:"if", hash:{}, fn:this.program(14, e), inverse:this.noop, data:e});
    return a != null ? a : ""
  }, "14":function() {
    return"saleData.badge"
  }, "16":function() {
    return"multiple-seats"
  }, "18":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"(" + f((b = (b = d.pubdate || (a != null ? a.pubdate : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"pubdate", hash:{}, data:e}) : b)) + ")"
  }, "20":function(a, d, c, e, b) {
    d = this.lambda;
    c = this.escapeExpression;
    return c(d(b[2] != null ? b[2].sizeText : b[2], a))
  }, "22":function() {
    return"icon-bg"
  }, "24":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.keyimage : a) != null ? d.small : d, a))
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, g, h = d.helperMissing, c = d.blockHelperMissing, e = (f = (f = d.content || (a != null ? a.content : a)) != null ? f : h, g = {name:"content", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.content || (e = c.call(a, e, g));
    return e != null ? e : ""
  }, useData:!0, useDepths:!0});
  h.publisherPageFull = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f, c = d.helperMissing;
    b = this.escapeExpression;
    var g = '<div class="overview-text-overlay">\n    <h1>' + b((f = (f = d.name || (a != null ? a.name : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"name", hash:{}, data:e}) : f)) + '</h1>\n\n    <div class="details-container">\n        <div class="details">\n            ';
    b = (f = (f = d.ratingValue || (a != null ? a.ratingValue : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"ratingValue", hash:{}, data:e}) : f);
    b != null && (g += b);
    g += '\n        </div>\n    </div>\n\n    <div class="fulldescription vscroll">';
    b = (f = (f = d.description || (a != null ? a.description : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"description", hash:{}, data:e}) : f);
    b != null && (g += b);
    return g + "</div>\n</div>"
  }, useData:!0});
  h.purchaseDialog = g({"1":function(a, d, c, e) {
    var i;
    var b, f, c = d.helperMissing, g = this.escapeExpression, c = '        <div class="payment-method">\n            <p>' + g((f = (f = d.paymentMethod || (a != null ? a.paymentMethod : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"paymentMethod", hash:{}, data:e}) : f)) + "</p>\n";
    b = d.unless.call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"unless", hash:{}, fn:this.program(2, e), inverse:this.program(7, e), data:e});
    b != null && (c += b);
    c += "        </div>\n\n";
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"if", hash:{}, fn:this.program(10, e), inverse:this.noop, data:e});
    b != null && (c += b);
    c += "\n";
    i = d["if"].call(a, (b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balance : b, {name:"if", hash:{}, fn:this.program(12, e), inverse:this.program(18, e), data:e}), b = i;
    b != null && (c += b);
    return c
  }, "2":function(a, d, c, e) {
    var f;
    var b, c = "";
    f = d.unless.call(a, (b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balance : b, {name:"unless", hash:{}, fn:this.program(3, e), inverse:this.program(5, e), data:e}), b = f;
    b != null && (c += b);
    return c
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                    <p class="payment-method-text">' + f((b = (b = d.creditCard || (a != null ? a.creditCard : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"creditCard", hash:{}, data:e}) : b)) + "</p>\n"
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                    <select size="1" class="select-box">\n                        <option value="credits">' + f((b = (b = d.credits || (a != null ? a.credits : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"credits", hash:{}, data:e}) : b)) + '</option>\n                        <option value="genesis">' + f((b = (b = d.creditCard || (a != null ? a.creditCard : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"creditCard", hash:{}, data:e}) : b)) + "</option>\n                    </select>\n"
  }, "7":function(a, d, c, e) {
    var i;
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = '                <select size="1" class="select-box">\n                    <option value="express-checkout">' + g((f = (f = d.expressCheckout || (a != null ? a.expressCheckout : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"expressCheckout", hash:{}, data:e}) : f)) + "</option>\n";
    i = d["if"].call(a, (b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balance : b, {name:"if", hash:{}, fn:this.program(8, e), inverse:this.noop, data:e}), b = i;
    b != null && (h += b);
    return h + '                    <option value="genesis">' + g((f = (f = d.creditCard || (a != null ? a.creditCard : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"creditCard", hash:{}, data:e}) : f)) + "</option>\n                </select>\n"
  }, "8":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                        <option value="credits">' + f((b = (b = d.credits || (a != null ? a.credits : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"credits", hash:{}, data:e}) : b)) + "</option>\n"
  }, "10":function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'            <div class="express-purchase-payment">\n                <p class="express-purchase-payment-label">' + g((f = (f = d.expressPurchasePayment || (a != null ? a.expressPurchasePayment : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"expressPurchasePayment", hash:{}, data:e}) : f)) + '</p>\n                <p class="card-number">' + g(h((b = (b = a != null ? a.data : a) != null ? b.express_checkout : b) != null ? b.payment_instrument : b, a)) + "</p>\n            </div>\n"
  }, "12":function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, c = '            <div class="account-password">\n                <p class="account-password-label">' + g((f = (f = d.accountPassword || (a != null ? a.accountPassword : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"accountPassword", hash:{}, data:e}) : f)) + '</p>\n                <input type="password" name="account-password">\n            </div>\n';
    b = d.unless.call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"unless", hash:{}, fn:this.program(13, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "13":function(a, d, c, e) {
    var i;
    var b, c = d.helperMissing, f = '                <div class="account-balance">\n';
    i = (d.ifCond || a && a.ifCond || c).call(a, (b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.charge : b, ">", "0", {name:"ifCond", hash:{}, fn:this.program(14, e), inverse:this.program(16, e), data:e}), b = i;
    b != null && (f += b);
    return f + "                </div>\n"
  }, "14":function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                        <p class="account-balance-label">' + g((f = (f = d.accountBalance || (a != null ? a.accountBalance : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"accountBalance", hash:{}, data:e}) : f)) + '</p>\n                        <p class="account-balance-text error">' + g(h((b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balancetext : b, a)) + " " + g((f = (f = d.insufficient || (a != null ? a.insufficient : a)) != null ? f : c, 
    typeof f === "function" ? f.call(a, {name:"insufficient", hash:{}, data:e}) : f)) + "</p>\n"
  }, "16":function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda;
    return'                        <p class="account-balance-label">' + g((f = (f = d.accountBalance || (a != null ? a.accountBalance : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"accountBalance", hash:{}, data:e}) : f)) + '</p>\n                        <p class="account-balance-text">' + g(h((b = (b = a != null ? a.data : a) != null ? b.balance : b) != null ? b.balancetext : b, a)) + "</p>\n"
  }, "18":function(a, d, c, e) {
    var b, c = "";
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"if", hash:{}, fn:this.program(19, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "19":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                <div class="account-password">\n                    <p class="account-password-label">' + f((b = (b = d.accountPassword || (a != null ? a.accountPassword : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"accountPassword", hash:{}, data:e}) : b)) + '</p>\n                    <input type="password" name="account-password">\n                </div>\n'
  }, "21":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.chargeAccount || (a != null ? a.chargeAccount : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"chargeAccount", hash:{}, data:e}) : b))
  }, "23":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return f((b = (b = d.total || (a != null ? a.total : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"total", hash:{}, data:e}) : b))
  }, "25":function(a, d, c, e) {
    var b, c = "";
    b = d["if"].call(a, (b = a != null ? a.data : a) != null ? b.express_checkout : b, {name:"if", hash:{}, fn:this.program(26, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c
  }, "26":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'            <button class="disable-express-purchase-button">' + f((b = (b = d.disableExpressPurchase || (a != null ? a.disableExpressPurchase : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"disableExpressPurchase", hash:{}, data:e}) : b)) + "</button>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = this.lambda, j = '<div class="dialog purchase-dialog">\n    <h1>' + g((b = (b = d.header || (a != null ? a.header : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"header", hash:{}, data:e}) : b)) + "</h1>\n    <p>" + g((b = (b = d.message || (a != null ? a.message : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"message", hash:{}, data:e}) : b)) + "</p><br>\n", c = d["if"].call(a, a != null ? a.price : 
    a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (j += c);
    j += '\n    <div class="charge">\n        <p class="payment-method-label">';
    c = d["if"].call(a, a != null ? a.price : a, {name:"if", hash:{}, fn:this.program(21, e), inverse:this.program(23, e), data:e});
    c != null && (j += c);
    j += '</p>\n        <p class="charge-amount">' + g(h((c = a != null ? a.data : a) != null ? c.pricetext : c, a)) + "</p>\n    </div>\n\n";
    c = d["if"].call(a, a != null ? a.price : a, {name:"if", hash:{}, fn:this.program(25, e), inverse:this.noop, data:e});
    c != null && (j += c);
    j += '\n    <div>\n        <div>\n            <p class="billing-address-label">' + g((b = (b = d.billingAddress || (a != null ? a.billingAddress : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"billingAddress", hash:{}, data:e}) : b)) + '</p>\n            <div class="address-container">\n                <div class="address"></div>\n                <button>' + g((b = (b = d.editAddress || (a != null ? a.editAddress : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"editAddress", 
    hash:{}, data:e}) : b)) + '</button>\n            </div>\n        </div>\n\n        <div class="terms">\n            <input type="checkbox" checked>\n            <a>';
    c = (b = (b = d.terms || (a != null ? a.terms : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"terms", hash:{}, data:e}) : b);
    c != null && (j += c);
    return j + '</a>\n        </div>\n    </div>\n    <button class="cancel-button">' + g((b = (b = d.cancel || (a != null ? a.cancel : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"cancel", hash:{}, data:e}) : b)) + '</button>\n    <button class="purchase-button"> ' + g((b = (b = d.purchase || (a != null ? a.purchase : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"purchase", hash:{}, data:e}) : b)) + '</button><br>\n    <p class="allow-popups">' + g((b = (b = 
    d.allowPopups || (a != null ? a.allowPopups : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"allowPopups", hash:{}, data:e}) : b)) + '</p>\n    <div class="status"></div>\n    <div class="credit-cards">\n        <div class="card visa" title="Visa"></div>\n        <div class="card mastercard" title="MasterCard"></div>\n        <div class="card discovercard" title="Discover"></div>\n        <div class="card japanesecreditbank" title="JBC"></div>\n        <div class="card diners" title="Diners"></div>\n        <div class="card americanexpress" title="American Express"></div>\n        <div class="card maestro" title="Maestro"></div>\n        <div class="card unionpay" title="UnionPay"></div>\n    </div>\n</div>'
  }, useData:!0});
  h.reviewDialog = g({"1":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.reviewL10N : a) != null ? d.editReview : d, a))
  }, "3":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return e(c((d = a != null ? a.reviewL10N : a) != null ? d.writeReview : d, a))
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = this.lambda, g = this.escapeExpression, h = d.helperMissing, j = "<div class='dialog messageform reviewform'>\n    <h1>", c = d["if"].call(a, a != null ? a.commentID : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.program(3, e), data:e});
    c != null && (j += c);
    j += '</h1>\n    <div class=\'form\'>\n        <div class="rating-container"><span class="rating-label">' + g(f((c = a != null ? a.reviewL10N : a) != null ? c.rating : c, a)) + ": </span><div class=\"rating-value-container\"></div></div>\n        <input class='input headline' placeholder='" + g(f((c = a != null ? a.reviewL10N : a) != null ? c.headline : c, a)) + "' value='" + g((b = (b = d.headline || (a != null ? a.headline : a)) != null ? b : h, typeof b === "function" ? b.call(a, {name:"headline", 
    hash:{}, data:e}) : b)) + "'>\n        <textarea class='input' id='reviewText' spellcheck='true' placeholder='" + g(f((c = a != null ? a.reviewL10N : a) != null ? c.review : c, a)) + "'>" + g((b = (b = d.review || (a != null ? a.review : a)) != null ? b : h, typeof b === "function" ? b.call(a, {name:"review", hash:{}, data:e}) : b)) + '</textarea>\n        <p class="note">';
    c = (b = (b = d.reviewSupport || (a != null ? a.reviewSupport : a)) != null ? b : h, typeof b === "function" ? b.call(a, {name:"reviewSupport", hash:{}, data:e}) : b);
    c != null && (j += c);
    return j + '</p>\n        <p class="submit-note">' + g(f((c = a != null ? a.reviewL10N : a) != null ? c.submitNote : c, a)) + '</p>\n        <button class="cancel">' + g(f((c = a != null ? a.buttonL10N : a) != null ? c.cancel : c, a)) + '</button>\n        <button class="submit disabled">' + g(f((c = a != null ? a.buttonL10N : a) != null ? c.submit : c, a)) + "</button>\n    </div>\n</div>"
  }, useData:!0});
  h.salePage = g({compiler:[6, ">= 2.0.0-beta.1"], main:function() {
    return'<div id="salepage">\n    <section id="featured" class="main-content section">\n        <section class="section">\n            <div class="blocked full">\n                <div class="banner">\n                    <h1 id="saleHeadline">&nbsp;</h1>\n                    <h2 id="countdown">&nbsp;</h2>\n                </div>\n            </div>\n        </section>\n    </section>\n    <section class="section ended"><div class="ended item"></div></section>\n    <section id="results" class="section">\n        <div class="blocked full">\n            <div id="catresults" class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n        <div id="noSale" class="full">\n        \n            <div id="noSaleHead" class="item">\n                <p>No sale at the moment.</p>\n            </div>\n            <div id="noSaleBody"></div>\n        </div>\n    </section>\n</div>'
  }, useData:!0});
  h.search = g({compiler:[6, ">= 2.0.0-beta.1"], main:function() {
    return'<div id="search">\n    <div id="publisherpage">\n        <div id="contentoverview" class="section">\n            <div class="background"><img class="bg1" src="/images/bg796x389.gif" /><img class="bg2" src="/images/bg516x389.gif" /></div>\n            <div class="blocked">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n        <div id="contentaside" class="section">\n            <div class="item">&nbsp;</div>\n        </div>\n    </div>\n    <div id="featured" class="section">\n        <div class="blocked quarter first feature-small">\n            <div class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n        <div class="blocked quarter second feature-small">\n            <div class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n        <div class="blocked quarter third feature-small">\n            <div class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n        <div class="blocked quarter last feature-small">\n            <div class="item">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n    </div>\n    <div id="results" class="section">\n        <div class="blocked full">\n            <div id="catresults" class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>'
  }, useData:!0});
  h.searchOptions = g({"1":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return' <- <button class="unity-version">' + f((b = (b = d.unityVersion || (a != null ? a.unityVersion : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"unityVersion", hash:{}, data:e}) : b)) + "</button>"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<div id="searchOptions">\n    <div class="left">\n        <span class="title">' + g((b = (b = d.price || (a != null ? a.price : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"price", hash:{}, data:e}) : b)) + '</span><span class="right-title">' + g((b = (b = d.currency || (a != null ? a.currency : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"currency", hash:{}, data:e}) : b)) + '</span>\n        <br><div class="price-slider slider"></div>\n        <div class="price-option">\n            <button class="free">' + 
    g((b = (b = d.free || (a != null ? a.free : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"free", hash:{}, data:e}) : b)) + '</button>\n            <button class="paid">' + g((b = (b = d.paid || (a != null ? a.paid : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"paid", hash:{}, data:e}) : b)) + '</button>\n        </div>\n        <div class="rating-option">\n            <span class="title">' + g((b = (b = d.minimumRating || (a != null ? a.minimumRating : a)) != 
    null ? b : f, typeof b === "function" ? b.call(a, {name:"minimumRating", hash:{}, data:e}) : b)) + '</span>\n            <br><div class="rating interactive">\n                <div id="1Rating"></div>\n                <div id="2Rating"></div>\n                <div id="3Rating"></div>\n                <div id="4Rating"></div>\n                <div id="5Rating"></div>\n            </div>\n        </div>\n        <div class="version">\n            <span class="title">' + g((b = (b = d.version || 
    (a != null ? a.version : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"version", hash:{}, data:e}) : b)) + '</span>\n            <br><input class="supported-version" type="text" title="5.2.0">\n            ', c = d["if"].call(a, a != null ? a.unityVersion : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (h += c);
    return h + ' <span class="version-example">e.g. 5.2.0</span>\n        </div>\n        <div class="type-option">\n            <button class="packages">' + g((b = (b = d.packagesOnly || (a != null ? a.packagesOnly : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"packagesOnly", hash:{}, data:e}) : b)) + '</button>\n            <button class="lists">' + g((b = (b = d.listsOnly || (a != null ? a.listsOnly : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"listsOnly", 
    hash:{}, data:e}) : b)) + '</button>\n        </div>\n    </div>\n    <div class="right">\n        <div class="size-option">\n            <span class="title">' + g((b = (b = d.size || (a != null ? a.size : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"size", hash:{}, data:e}) : b)) + '</span><span class="right-title">' + g((b = (b = d.mb || (a != null ? a.mb : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"mb", hash:{}, data:e}) : b)) + '</span>\n            <br><div class="size-slider slider"></div>\n        </div>\n        <div class="released-option">\n            <span class="title">' + 
    g((b = (b = d.released || (a != null ? a.released : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"released", hash:{}, data:e}) : b)) + '</span><span class="right-title">' + g((b = (b = d.daysAgo || (a != null ? a.daysAgo : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"daysAgo", hash:{}, data:e}) : b)) + '</span>\n            <br><div class="released-slider slider"></div>\n        </div>\n        <div class="updated-option">\n            <span class="title">' + 
    g((b = (b = d.updated || (a != null ? a.updated : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"updated", hash:{}, data:e}) : b)) + '</span><span class="right-title">' + g((b = (b = d.daysAgo || (a != null ? a.daysAgo : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"daysAgo", hash:{}, data:e}) : b)) + '</span>\n            <br><div class="updated-slider slider"></div>\n        </div>\n    </div>\n</div>'
  }, useData:!0});
  h.sideBar = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="categoryBox" class="header-box">\n    <div class="body nohead">\n        <div class="load">\n            <span class="loadarea">\n                <span class="loadstatus">&nbsp;</span>\n                <span class="loadtext">&nbsp;</span>\n            </span>\n        </div>\n    </div>\n</div>\n\n<div class="header-box"><a class="list-banner" href="#!/list/new-on-asset-store?utm_source=store&utm_medium=menu_right&utm_campaign=AS-Global-New-on-AS-Banner"></a></div>\n\n<div class="header-box"><a class="staffpicks-banner" href="#!/list/staff-picks?utm_source=store&utm_medium=menu_right&utm_campaign=AS-Global-Staffpicks-Banner"></a></div>\n\n<div class="header-box"><a class="gamesparks-banner" href="#!/content/78351?utm_source=store&utm_medium=menu_right&utm_campaign=AS-Global-GameSparks-Banner"></a></div>\n\n<div class="header-box"><a class="level-11-banner" href="#!/level11?utm_source=store&utm_medium=menu_right&utm_campaign=AS-Global-Level11-Banner"></a></div>\n\n<div id="topBox" class="header-box accordion-box top-list">\n    <div class="head">\n        <h2>' + 
    f((b = (b = d.topPaid || (a != null ? a.topPaid : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"topPaid", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body top-paid">\n        <div class="load">\n            <span class="loadarea">\n                <span class="loadstatus">&nbsp;</span>\n                <span class="loadtext">&nbsp;</span>\n            </span>\n        </div>\n    </div>\n    <div class="head sale">\n        <div id="feedsale"\n             onmouseover="$(this).find(\'img\').attr(\'src\', \'images/icons/rss_orange.png\');"\n             onmouseout="$(this).find(\'img\').attr(\'src\', \'/images/icons/rss_grey.png\');"><a\n                href="#" title="Subscribe to RSS feed" target="_blank" class="externallink"><img\n                src="/images/icons/rss_grey.png" alt="RSS"/></a></div>\n        <h2>' + 
    f((b = (b = d.hotDeals || (a != null ? a.hotDeals : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"hotDeals", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body sale"></div>\n    <div class="head">\n        <h2>' + f((b = (b = d.topFree || (a != null ? a.topFree : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"topFree", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body top-free"></div>\n    <div class="head">\n        <h2>' + 
    f((b = (b = d.topGrossing || (a != null ? a.topGrossing : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"topGrossing", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body top-grossing"></div>\n    <div class="head top-latest-head">\n        <div id="feedlatest"\n             onmouseover="$(this).find(\'img\').attr(\'src\', \'images/icons/rss_orange.png\');"\n             onmouseout="$(this).find(\'img\').attr(\'src\', \'/images/icons/rss_grey.png\');"><a\n                href="#" title="Subscribe to RSS feed" target="_blank" class="externallink"><img\n                src="/images/icons/rss_grey.png" alt="RSS"/></a></div>\n        <h2>' + 
    f((b = (b = d.latest || (a != null ? a.latest : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"latest", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body top-latest"></div>\n</div>'
  }, useData:!0});
  h.smallSlider = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<section id="smallSlider" class="section small-slider-container">\n    <div class="header-box small-slider">\n        <div class="head">\n            <h2>' + f((b = (b = d.header || (a != null ? a.header : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"header", hash:{}, data:e}) : b)) + '</h2>\n        </div>\n        <div class="body">\n            <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n        </div>\n    </div>\n</section>'
  }, useData:!0});
  h.social = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<div id="innerSocial" class="header-box">\n    <div class="head">\n        <h2>' + f((b = (b = d.deal || (a != null ? a.deal : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"deal", hash:{}, data:e}) : b)) + '</h2>\n    </div>\n    <div class="body">\n        <a href="https://twitter.com/UnityAssetStore" class="twitter-follow-button" data-show-count="false">' + f((b = (b = d.follow || (a != null ? a.follow : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"follow", 
    hash:{}, data:e}) : b)) + ' @UnityAssetStore</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"><\/script>\n        <div style="margin: 0 0 0 10px;">\n            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FAssetStore%2F&width=200&layout=button_count&action=like&size=small&show_faces=false&share=true&height=46&appId" width="200" height="30" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\n        </div>\n    </div>\n</div>'
  }, useData:!0});
  h.supportContent = g({"1":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <span class="left">' + f((b = (b = d.versionLabel || (a != null ? a.versionLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"versionLabel", hash:{}, data:e}) : b)) + ' <a href="#" class="livelink show-release-notes">' + f((b = (b = d.version || (a != null ? a.version : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"version", hash:{}, data:e}) : b)) + "</a> (" + f((b = (b = d.publishedDate || (a != null ? a.publishedDate : a)) != null ? b : c, 
    typeof b === "function" ? b.call(a, {name:"publishedDate", hash:{}, data:e}) : b)) + ")</span>\n"
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <span class="left">' + f((b = (b = d.sizeLabel || (a != null ? a.sizeLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"sizeLabel", hash:{}, data:e}) : b)) + " " + f((b = (b = d.size || (a != null ? a.size : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"size", hash:{}, data:e}) : b)) + "</span>\n"
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <span class="left"><a href="#" class="livelink show-license">' + f((b = (b = d.licenseAgreement || (a != null ? a.licenseAgreement : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"licenseAgreement", hash:{}, data:e}) : b)) + "</a></span>\n"
  }, "7":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <span class="right"><a href="' + f((b = (b = d.publisherWebsite || (a != null ? a.publisherWebsite : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"publisherWebsite", hash:{}, data:e}) : b)) + '" target="_blank">' + f((b = (b = d.publisherWebsiteLabel || (a != null ? a.publisherWebsiteLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"publisherWebsiteLabel", hash:{}, data:e}) : b)) + "</a></span>\n"
  }, "9":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <span class="right"><a href="' + f((b = (b = d.supportWebsite || (a != null ? a.supportWebsite : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"supportWebsite", hash:{}, data:e}) : b)) + '" target="_blank">' + f((b = (b = d.supportWebsiteLabel || (a != null ? a.supportWebsiteLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"supportWebsiteLabel", hash:{}, data:e}) : b)) + "</a></span>\n"
  }, "11":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <span class="right"><a href="mailto:' + f((b = (b = d.supportEmail || (a != null ? a.supportEmail : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"supportEmail", hash:{}, data:e}) : b)) + '" target="_blank">' + f((b = (b = d.supportEmailLabel || (a != null ? a.supportEmailLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"supportEmailLabel", hash:{}, data:e}) : b)) + "</a></span>\n"
  }, "13":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <br>\n    <div class="originally-released">' + f((b = (b = d.releasedLabel || (a != null ? a.releasedLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"releasedLabel", hash:{}, data:e}) : b)) + " " + f((d.formatDate || a && a.formatDate || c).call(a, a != null ? a.firstPublishedAt : a, {name:"formatDate", hash:{}, data:e})) + "</div>\n"
  }, "15":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <div class="unity-versions">' + f((b = (b = d.unityVersionsText || (a != null ? a.unityVersionsText : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"unityVersionsText", hash:{}, data:e}) : b)) + "</div><br>\n"
  }, "17":function(a, d, c, e, b) {
    var f = d.helperMissing, g = this.lambda, h = this.escapeExpression, j = '    <br>\n    <div class="upgradables">', c = (d.formatUpgradables || a && a.formatUpgradables || f).call(a, b[1] != null ? b[1].upgradePrice : b[1], {name:"formatUpgradables", hash:{}, data:e});
    c != null && (j += c);
    return j + " " + h(g(b[1] != null ? b[1].is : b[1], a)) + " " + h((d.formattedPrice || a && a.formattedPrice || f).call(a, (d.priceUpgradeHelper || a && a.priceUpgradeHelper || f).call(a, b[1] != null ? b[1].priceUpgrade : b[1], {name:"priceUpgradeHelper", hash:{}, data:e}), {name:"formattedPrice", hash:{}, data:e})) + ".</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f = '<div class="support">\n', c = d["if"].call(a, a != null ? a.version : a, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    c = d["if"].call(a, a != null ? a.size : a, {name:"if", hash:{}, fn:this.program(3, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    c = d["if"].call(a, a != null ? a.license : a, {name:"if", hash:{}, fn:this.program(5, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    f += '<span class="left break"></span>\n';
    c = d["if"].call(a, a != null ? a.publisherWebsite : a, {name:"if", hash:{}, fn:this.program(7, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    c = d["if"].call(a, a != null ? a.supportWebsite : a, {name:"if", hash:{}, fn:this.program(9, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    c = d["if"].call(a, a != null ? a.supportEmail : a, {name:"if", hash:{}, fn:this.program(11, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    f += "</div>\n";
    c = d["if"].call(a, a != null ? a.firstPublishedAt : a, {name:"if", hash:{}, fn:this.program(13, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    c = d["if"].call(a, a != null ? a.unityVersions : a, {name:"if", hash:{}, fn:this.program(15, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    c = d.each.call(a, a != null ? a.upgradables : a, {name:"each", hash:{}, fn:this.program(17, e, b), inverse:this.noop, data:e});
    c != null && (f += c);
    return f
  }, useData:!0, useDepths:!0});
  h.supportContentPublisher = g({"1":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <span class="left"><a href="' + f((b = (b = d.url || (a != null ? a.url : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"url", hash:{}, data:e}) : b)) + '" target="_blank">' + f((b = (b = d.publisherWebsite || (a != null ? a.publisherWebsite : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"publisherWebsite", hash:{}, data:e}) : b)) + "</a></span>\n"
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <span class="left"><a href="' + f((b = (b = d.supportUrl || (a != null ? a.supportUrl : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"supportUrl", hash:{}, data:e}) : b)) + '" target="_blank">' + f((b = (b = d.supportWebsite || (a != null ? a.supportWebsite : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"supportWebsite", hash:{}, data:e}) : b)) + "</a></span>\n"
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <span class="left"><a href="mailto:' + f((b = (b = d.supportEmail || (a != null ? a.supportEmail : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"supportEmail", hash:{}, data:e}) : b)) + '" target="_blank">' + f((b = (b = d.supportEmailLabel || (a != null ? a.supportEmailLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"supportEmailLabel", hash:{}, data:e}) : b)) + "</a></span>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b = "", c = d["if"].call(a, a != null ? a.url : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    c != null && (b += c);
    c = d["if"].call(a, a != null ? a.supportUrl : a, {name:"if", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e});
    c != null && (b += c);
    c = d["if"].call(a, a != null ? a.supportEmail : a, {name:"if", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e});
    c != null && (b += c);
    return b
  }, useData:!0});
  h.toolbar = g({"1":function(a, d, c, e) {
    c = '<span class="button-group">';
    a = d.each.call(a, a, {name:"each", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>"
  }, "2":function(a, d, c, e) {
    c = d.helperMissing;
    a = (d.ifCond || a && a.ifCond || c).call(a, a != null ? a.name : a, "===", "categories", {name:"ifCond", hash:{}, fn:this.program(3, e), inverse:this.program(5, e), data:e});
    return a != null ? a : ""
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a id="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '" data-title="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '" href="#!/categories">\n    <span class="icon"></span>\n</a>'
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression, f = '<a id="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '" data-title="' + f((b = (b = d.name || (a != null ? a.name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"name", hash:{}, data:e}) : b)) + '" class="not-active">\n    <span class="icon"></span>\n', a = (d.ifCond || a && a.ifCond || c).call(a, a != null ? a.name : 
    a, "===", "cart", {name:"ifCond", hash:{}, fn:this.program(6, e), inverse:this.noop, data:e});
    a != null && (f += a);
    return f + "</a>"
  }, "6":function() {
    return'        <span class="count"></span>\n'
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    c = "";
    a = d.each.call(a, a != null ? a.buttons : a, {name:"each", hash:{}, fn:this.program(1, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + '\n<span id="adminstrip"></span>\n<div id="editorSearchArea">\n    <form id="editorSearchForm" action="#" method="post"><input id="editorSearchInput" type="text" name="search" placeholder="Search Asset Store"></form>\n</div>\n<div class="page-loader">\n    <span id="pageload" class="loadarea"><span class="loadstatus">&nbsp;</span><span\n            class="loadtext">&nbsp;</span></span>\n</div>'
  }, useData:!0});
  h.topList = g({"1":function(a) {
    var f;
    var b;
    var d, c = this.lambda, e = this.escapeExpression;
    return'    <a href="#!/content/' + e(c((d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.id : d, a)) + '" data-pkg="' + e(c((d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.title : d, a)) + '" data-pub="' + e(c((b = (d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.publisher : d, d = b) != null ? d.label : d, a)) + '" class="livelink" title="' + e(c((d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.title : d, a)) + '">\n        <img src="' + 
    e(c((f = (d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.keyimage : d, d = f) != null ? d.icon : d, a)) + '" class="icon" alt="' + e(c((d = (d = a != null ? a.item : a) != null ? d["0"] : d) != null ? d.title : d, a)) + '">\n    </a>\n'
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"    <div class='no-packages'>" + f((b = (b = d.noPackages || (a != null ? a.noPackages : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noPackages", hash:{}, data:e}) : b)) + "</div>\n"
  }, "5":function(a, d, c, e, b) {
    var f, g, c = this.lambda, h = this.escapeExpression, j = d.helperMissing, c = '    <li data-idx="' + h(c(e && e.index, a)) + '" data-pkg="' + h((g = (g = d.title || (a != null ? a.title : a)) != null ? g : j, typeof g === "function" ? g.call(a, {name:"title", hash:{}, data:e}) : g)) + '" data-pub="' + h(c((f = a != null ? a.publisher : a) != null ? f.label : f, a)) + '">\n        <a href="#!/content/' + h((g = (g = d.id || (a != null ? a.id : a)) != null ? g : j, typeof g === "function" ? g.call(a, 
    {name:"id", hash:{}, data:e}) : g)) + '" class="title livelink">' + h((g = (g = d.title || (a != null ? a.title : a)) != null ? g : j, typeof g === "function" ? g.call(a, {name:"title", hash:{}, data:e}) : g)) + '</a><br />\n        <a href="#!/category/' + h(c((f = a != null ? a.category : a) != null ? f.id : f, a)) + '" class="livelink">' + h(c((f = a != null ? a.category : a) != null ? f.label : f, a)) + "</a><br />\n";
    f = d["if"].call(a, b[1] != null ? b[1].isSale : b[1], {name:"if", hash:{}, fn:this.program(6, e, b), inverse:this.noop, data:e});
    f != null && (c += f);
    return c + "    </li>\n"
  }, "6":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression, c = '        <span class="price">' + b((d.formattedPrice || a && a.formattedPrice || c).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, data:e})) + "</span>\n        ", a = d["if"].call(a, a != null ? a.price_original : a, {name:"if", hash:{}, fn:this.program(7, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "<br />\n"
  }, "7":function(a, d, c, e) {
    var c = d.helperMissing, b = this.escapeExpression;
    return'<span class="original-price">' + b((d.formattedPrice || a && a.formattedPrice || c).call(a, a != null ? a.price_original : a, {name:"formattedPrice", hash:{}, data:e})) + "</span>"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = "";
    f = (d.ifCond || a && a.ifCond || c).call(a, (f = a != null ? a.item : a) != null ? f.length : f, ">", 0, {name:"ifCond", hash:{}, fn:this.program(1, e, b), inverse:this.program(3, e, b), data:e});
    f != null && (g += f);
    g += "<ol>\n";
    f = d.each.call(a, a != null ? a.item : a, {name:"each", hash:{}, fn:this.program(5, e, b), inverse:this.noop, data:e});
    f != null && (g += f);
    return g + "</ol>"
  }, useData:!0, useDepths:!0});
  h.transactions = g({"1":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda, c = '            <div class="header">\n                <div class="date">' + g((f = (f = d.date || (a != null ? a.date : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"date", hash:{}, data:e}) : f)) + '</div>\n                <div class="action">' + g(h(b[1] != null ? b[1].action : b[1], a)) + '</div>\n                <div class="description">' + g((f = (f = d.description || (a != null ? a.description : a)) != 
    null ? f : c, typeof f === "function" ? f.call(a, {name:"description", hash:{}, data:e}) : f)) + '</div>\n                <div class="balance">' + g((f = (f = d.balance || (a != null ? a.balance : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"balance", hash:{}, data:e}) : f)) + '</div>\n                <div class="amount">' + g((f = (f = d.amount || (a != null ? a.amount : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"amount", hash:{}, data:e}) : f)) + '</div>\n            </div>\n\n            <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n\n            <div id="transactions" class="body">\n', 
    a = d.each.call(a, a != null ? a.transactionsCredits : a, {name:"each", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "            </div>\n"
  }, "2":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.escapeExpression, j = "                <div class='transactions-item " + h((d.paymentRowClass || a && a.paymentRowClass || g).call(a, b[1], e && e.index, {name:"paymentRowClass", hash:{}, data:e})) + "'>\n                    <div>" + h((f = (f = d.date || (a != null ? a.date : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"date", hash:{}, data:e}) : f)) + "</div>\n                    <div class='action " + h((f = (f = d.negativeAmountClass || 
    (a != null ? a.negativeAmountClass : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"negativeAmountClass", hash:{}, data:e}) : f)) + "'>" + h((f = (f = d.method || (a != null ? a.method : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"method", hash:{}, data:e}) : f)) + "</div>\n                    <div class='description'>", c = (f = (f = d.description || (a != null ? a.description : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"description", 
    hash:{}, data:e}) : f);
    c != null && (j += c);
    j += "\n";
    c = d.each.call(a, a != null ? a.items : a, {name:"each", hash:{}, fn:this.program(3, e, b), inverse:this.noop, data:e});
    c != null && (j += c);
    return j + "                    </div>\n                <div class='balance'>" + h((f = (f = d.balance || (a != null ? a.balance : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"balance", hash:{}, data:e}) : f)) + "</div>\n                <div class='final " + h((f = (f = d.negativeAmountClass || (a != null ? a.negativeAmountClass : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"negativeAmountClass", hash:{}, data:e}) : f)) + "'>" + h((f = (f = d.amount || (a != 
    null ? a.amount : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"amount", hash:{}, data:e}) : f)) + "</div>\n                </div>\n"
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                        <br><a href='#!/content/" + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + "'>" + f((b = (b = d.package_name || (a != null ? a.package_name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_name", hash:{}, data:e}) : b)) + "</a>\n                        <div class='amount'>" + f((b = (b = d.amount || (a != null ? a.amount : a)) != null ? b : c, typeof b === 
    "function" ? b.call(a, {name:"amount", hash:{}, data:e}) : b)) + "</div>\n                        <div class='quantity'>" + f((b = (b = d.qnty || (a != null ? a.qnty : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"qnty", hash:{}, data:e}) : b)) + "</div>\n"
  }, "5":function(a, d, c, e, b) {
    c = "";
    a = d["if"].call(a, a != null ? a.transactions : a, {name:"if", hash:{}, fn:this.program(6, e, b), inverse:this.program(10, e, b), data:e});
    a != null && (c += a);
    return c
  }, "6":function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, h = this.lambda, c = '                <div class="header">\n                    <div class="date">' + g((f = (f = d.date || (a != null ? a.date : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"date", hash:{}, data:e}) : f)) + '</div>\n                    <div class="action">' + g(h(b[1] != null ? b[1].action : b[1], a)) + '</div>\n                    <div class="description">' + g((f = (f = d.description || (a != null ? a.description : 
    a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"description", hash:{}, data:e}) : f)) + '</div>\n                    <div class="amount">' + g((f = (f = d.amount || (a != null ? a.amount : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"amount", hash:{}, data:e}) : f)) + '</div>\n                </div>\n\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n\n                <div id="transactions" class="body">\n', 
    a = d.each.call(a, a != null ? a.transactions : a, {name:"each", hash:{}, fn:this.program(7, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "                </div>\n"
  }, "7":function(a, d, c, e, b) {
    var i;
    var f, g, c = d.helperMissing, h = this.escapeExpression, j = this.lambda, j = "                        <div class='transactions-item " + h((d.paymentRowClass || a && a.paymentRowClass || c).call(a, b[1], e && e.index, {name:"paymentRowClass", hash:{}, data:e})) + "'>\n                            <div>" + h((g = (g = d.date || (a != null ? a.date : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"date", hash:{}, data:e}) : g)) + "</div>\n                            <div class='action'>" + 
    h((g = (g = d.action || (a != null ? a.action : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"action", hash:{}, data:e}) : g)) + "</div>\n                            <div class='description'>\n                                <span>" + h(j((i = (f = (f = a != null ? a.Kharma : a) != null ? f.l10n : f) != null ? f.user : f, f = i) != null ? f.invoice : f, a)) + "# " + h((g = (g = d.invoice || (a != null ? a.invoice : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"invoice", 
    hash:{}, data:e}) : g)) + "</span><br>\n";
    f = d.each.call(a, a != null ? a.items : a, {name:"each", hash:{}, fn:this.program(8, e, b), inverse:this.noop, data:e});
    f != null && (j += f);
    return j + "                            </div>\n                            <div class='balance'>" + h((g = (g = d.amount || (a != null ? a.amount : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"amount", hash:{}, data:e}) : g)) + "</div>\n                        </div>\n"
  }, "8":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                                    <a href='#!/content/" + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + "'>" + f((b = (b = d.package_name || (a != null ? a.package_name : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"package_name", hash:{}, data:e}) : b)) + "</a>\n                                    <div class='amount'>" + f((b = (b = d.amount || (a != null ? a.amount : a)) != null ? 
    b : c, typeof b === "function" ? b.call(a, {name:"amount", hash:{}, data:e}) : b)) + "</div>\n                                    <div class='quantity'>" + f((b = (b = d.qnty || (a != null ? a.qnty : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"qnty", hash:{}, data:e}) : b)) + "</div><br>\n"
  }, "10":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'                <div id="transactionsCreditPaypal" class="body no-results">' + f((b = (b = d.noTransactionsLabel || (a != null ? a.noTransactionsLabel : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noTransactionsLabel", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f, c = d.helperMissing, g = this.escapeExpression, c = '<section id="orders-transactions" class="section limited">\n    <div class="header-box">\n        <div class="head">\n            <h2>' + g((f = (f = d.header || (a != null ? a.header : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"header", hash:{}, data:e}) : f)) + "</h2>\n        </div>\n\n", a = d["if"].call(a, a != null ? a.transactionsCredits : a, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.program(5, 
    e, b), data:e});
    a != null && (c += a);
    return c + "    </div>\n</section>"
  }, useData:!0, useDepths:!0});
  h.userPage = g({"1":function(a, d, c, e) {
    var b, f, g = d.helperMissing, c = d.blockHelperMissing, h = "                <div>", e = (b = (b = d.topRated || (a != null ? a.topRated : a)) != null ? b : g, f = {name:"topRated", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e}, typeof b === "function" ? b.call(a, f) : b);
    d.topRated || (e = c.call(a, e, f));
    e != null && (h += e);
    return h + "</div>\n"
  }, "2":function(a, d, c, e) {
    var b, f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing, c = "<div class='top-rated'>\n                    <a href='#!" + g(c((b = a != null ? a.link : a) != null ? b.type : b, a)) + "/" + g(c((b = a != null ? a.link : a) != null ? b.id : b, a)) + "' class='livelink'>" + g((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</a><br>\n                    ";
    b = d["if"].call(a, a != null ? a.rating : a, {name:"if", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e});
    b != null && (c += b);
    return c + "\n                    </div>"
  }, "3":function(a, d, c, e) {
    c = d.helperMissing;
    a = (d.ratingUI || a && a.ratingUI || c).call(a, 1, a != null ? a.rating : a, {name:"ratingUI", hash:{}, data:e});
    return a != null ? a : ""
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return"                <div style='padding: 1em;'>" + f((b = (b = d.noRatedPackages || (a != null ? a.noRatedPackages : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noRatedPackages", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f = d.helperMissing, g = this.escapeExpression, h = '<div id="userpage">\n    <section id="commentandrated" class="section">\n        <h1>' + g((b = (b = d.profile || (a != null ? a.profile : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"profile", hash:{}, data:e}) : b)) + '</h1>\n        <div class="longfull" id="left">\n            <div id="userBox" class="header-box">\n                <div class="head">\n                    <h2>' + g((b = (b = d.username || (a != null ? 
    a.username : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"username", hash:{}, data:e}) : b)) + '</h2>\n                    <a class="reportAbuse" rel="external" title="' + g((b = (b = d.reportAbuse || (a != null ? a.reportAbuse : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"reportAbuse", hash:{}, data:e}) : b)) + '"></a>\n                </div>\n                <div class="body">\n                    <a href="http://gravatar.com" target="_blank" title="' + 
    g((b = (b = d.gravatar || (a != null ? a.gravatar : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"gravatar", hash:{}, data:e}) : b)) + '"><img class="bioimage"></a>\n                    <p class="bio">', c = (d.formattedBio || a && a.formattedBio || f).call(a, a != null ? a.bioText : a, {name:"formattedBio", hash:{}, data:e});
    c != null && (h += c);
    h += '</p>\n                </div>\n            </div>\n        </div>\n        <div class="header-box" id="right">\n            <div class="head" id="headUserTopRated">\n                <h2>' + g((b = (b = d.highestRatedAssets || (a != null ? a.highestRatedAssets : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"highestRatedAssets", hash:{}, data:e}) : b)) + '</h2>\n            </div>\n            <div class="body vscroll" id="innerUserTopRated">\n';
    c = d["if"].call(a, a != null ? a.topRated : a, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.program(5, e), data:e});
    c != null && (h += c);
    return h + '            </div>\n        </div>\n    </section>\n    <section id="wishList" class="section">\n        <div class="header-box">\n            <div class="wish-list">\n                <div class="head wish-list">\n                    <h2>' + g((b = (b = d.wishListName || (a != null ? a.wishListName : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"wishListName", hash:{}, data:e}) : b)) + '</h2>\n                </div>\n            </div>\n            <div class="body vscroll">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n    </section>\n    <section id="comments" class="section limited">\n        <div id="reviewBox" class="header-box">\n            <div class="head">\n                <h2>' + 
    g((b = (b = d.reviews || (a != null ? a.reviews : a)) != null ? b : f, typeof b === "function" ? b.call(a, {name:"reviews", hash:{}, data:e}) : b)) + '</h2>\n            </div>\n            <div class="body">\n                <span class="loadarea"><span class="loadstatus">&nbsp;</span><span class="loadtext">&nbsp;</span></span>\n            </div>\n        </div>\n    </section>\n</div>'
  }, useData:!0});
  h.userPageComments = g({"1":function(a, d, c, e, b) {
    c = "";
    a = d.each.call(a, a != null ? a.comments : a, {name:"each", hash:{}, fn:this.program(2, e, b), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "2":function(a, d, c, e, b) {
    var f, g = d.helperMissing, h = this.lambda, j = this.escapeExpression, k = '        <div class="comment-block user-page">\n            <div class="comment-body ', c = d["if"].call(a, b[1] != null ? b[1].admin : b[1], {name:"if", hash:{}, fn:this.program(3, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += " ";
    c = (d.isEditable || a && a.isEditable || g).call(a, b[1] != null ? b[1].data : b[1], a, {name:"isEditable", hash:{}, fn:this.program(5, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += '">\n                <a class="reportAbuse" rel="external" title="' + j(h(b[2] != null ? b[2].reportAbuse : b[2], a)) + '" data-id=' + j((f = (f = d.id || (a != null ? a.id : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + " data-package-id=" + j(h((c = a != null ? a.link : a) != null ? c.id : c, a)) + "></a>\n";
    c = d["if"].call(a, (c = b[2] != null ? b[2].data : b[2]) != null ? c.editable : c, {name:"if", hash:{}, fn:this.program(7, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    c = d["if"].call(a, a != null ? a.title : a, {name:"if", hash:{}, fn:this.program(9, e, b), inverse:this.program(11, e, b), data:e});
    c != null && (k += c);
    k += '                <div class="date"><p>' + j((d.formattedDate || a && a.formattedDate || g).call(a, a != null ? a.date : a, {name:"formattedDate", hash:{}, data:e})) + '</p></div>\n                <div class="comment">\n                    <h3>' + j((f = (f = d.subject || (a != null ? a.subject : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"subject", hash:{}, data:e}) : f)) + '</h3>\n                    <p class="comment-text">';
    c = (f = (f = d.urlfyTextHelper || (a != null ? a.urlfyTextHelper : a)) != null ? f : g, typeof f === "function" ? f.call(a, {name:"urlfyTextHelper", hash:{}, data:e}) : f);
    c != null && (k += c);
    k += "</p>\n";
    c = d["if"].call(a, a != null ? a.rating : a, {name:"if", hash:{}, fn:this.program(13, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    k += "                </div>\n            </div>\n";
    c = d.each.call(a, a != null ? a.replies : a, {name:"each", hash:{}, fn:this.program(15, e, b), inverse:this.noop, data:e});
    c != null && (k += c);
    return k + "        </div>\n"
  }, "3":function() {
    return"admin"
  }, "5":function() {
    return"editable"
  }, "7":function(a, d, c, e, b) {
    var f, g, c = d.helperMissing, h = this.escapeExpression, j = this.lambda;
    return'                    <div class="body-buttons">\n                        <a href="#" class="edit-review" data-id=' + h((g = (g = d.id || (a != null ? a.id : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"id", hash:{}, data:e}) : g)) + " data-package-id=" + h(j((f = a != null ? a.link : a) != null ? f.id : f, a)) + ">" + h(j(b[2] != null ? b[2].editButton : b[2], a)) + '</a>\n                        <a href="#" class="delete-review" data-id=' + h((g = (g = d.id || (a != 
    null ? a.id : a)) != null ? g : c, typeof g === "function" ? g.call(a, {name:"id", hash:{}, data:e}) : g)) + " data-package-id=" + h(j((f = a != null ? a.link : a) != null ? f.id : f, a)) + ">" + h(j(b[2] != null ? b[2].deleteButton : b[2], a)) + "</a>\n                    </div>\n"
  }, "9":function(a, d, c, e) {
    var b, f, c = this.lambda, g = this.escapeExpression, h = d.helperMissing;
    return'                    <h2 class="package-name"><a class="livelink" href="#!/' + g(c((b = a != null ? a.link : a) != null ? b.type : b, a)) + "/" + g(c((b = a != null ? a.link : a) != null ? b.id : b, a)) + '">' + g((f = (f = d.title || (a != null ? a.title : a)) != null ? f : h, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</a></h2>\n"
  }, "11":function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return'                    <h2 class="package-name livelink" data-template="' + e(c((d = a != null ? a.link : a) != null ? d.type : d, a)) + '" data-link="' + e(c((d = a != null ? a.link : a) != null ? d.id : d, a)) + '"></h2>\n'
  }, "13":function(a, d, c, e) {
    var b = d.helperMissing, c = "                        ", a = (d.ratingUI || a && a.ratingUI || b).call(a, 1, a != null ? a.rating : a, {name:"ratingUI", hash:{}, data:e});
    a != null && (c += a);
    return c + "\n"
  }, "15":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression, f = '                <div class="reply-block">\n                    <div class="comment-body">\n                        <div class="comment">\n                            <h2 class="comment">' + f((b = (b = d.subject || (a != null ? a.subject : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"subject", hash:{}, data:e}) : b)) + '</h2>\n                            <div class="date"><p>' + f((d.formattedDate || a && a.formattedDate || 
    c).call(a, a != null ? a.date : a, {name:"formattedDate", hash:{}, data:e})) + '</p></div>\n                            <p class="comment-text">', a = (b = (b = d.urlfyTextHelper || (a != null ? a.urlfyTextHelper : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"urlfyTextHelper", hash:{}, data:e}) : b);
    a != null && (f += a);
    return f + "</p>\n                        </div>\n                    </div>\n                </div>\n"
  }, "17":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <div style="padding: 1em;">' + f((b = (b = d.noReviews || (a != null ? a.noReviews : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"noReviews", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e, b) {
    var f;
    f = d["if"].call(a, (f = a != null ? a.comments : a) != null ? f.length : f, {name:"if", hash:{}, fn:this.program(1, e, b), inverse:this.program(17, e, b), data:e});
    return f != null ? f : ""
  }, useData:!0, useDepths:!0});
  h.welcomeBanner = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return'<div id="welcome-banner">\n\t<a href="' + e(c((d = a != null ? a.welcomeL10N : a) != null ? d.getStartedLink : d, a)) + '"><img src="/images/welcome_banner.jpg" /></a>\n</div>\n'
  }, useData:!0});
  h.welcomeDialog = g({compiler:[6, ">= 2.0.0-beta.1"], main:function(a) {
    var d, c = this.lambda, e = this.escapeExpression;
    return'<div class="intro-overlay">\n    <div>\n        <h2>' + e(c((d = a != null ? a.welcomeL10N : a) != null ? d.headline : d, a)) + "</h2>\n        <p>" + e(c((d = a != null ? a.welcomeL10N : a) != null ? d.breadText1 : d, a)) + "</p>\n        <p>" + e(c((d = a != null ? a.welcomeL10N : a) != null ? d.breadText2 : d, a)) + '</p>\n        <p><a href="' + e(c((d = a != null ? a.welcomeL10N : a) != null ? d.getStartedLink : d, a)) + '" class="get-started">' + e(c((d = a != null ? a.welcomeL10N : 
    a) != null ? d.getStartedButton : d, a)) + '</a></p>\n        <p><a class="no-thanks">' + e(c((d = a != null ? a.welcomeL10N : a) != null ? d.noThanksButton : d, a)) + "</a></p>\n    </div>\n</div>"
  }, useData:!0});
  h.wishList = g({compiler:[6, ">= 2.0.0-beta.1"], main:function() {
    return'<div id="wishListPage">\n    <h1 id="cattitle"></h1>\n    <section id="results" class="section">\n        <div class="blocked full">\n            <div id="catresults" class="item">\n                <span class="loadarea">\n                    <span class="loadstatus">&nbsp;</span>\n                    <span class="loadtext">&nbsp;</span>\n                </span>\n            </div>\n        </div>\n    </section>\n</div>'
  }, useData:!0});
  h.wishListDropDown = g({"1":function(a, d, c, e) {
    c = "";
    a = d.each.call(a, a != null ? a.results : a, {name:"each", hash:{}, fn:this.program(2, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c
  }, "2":function(a, d, c, e) {
    var b, f, g, h = this.lambda, c = this.escapeExpression, j = d.helperMissing, k = d.blockHelperMissing, h = '        <div class="wish-list-result">\n            <a href="#!/' + c(h((b = a != null ? a.link : a) != null ? b.type : b, a)) + "/" + c(h((b = a != null ? a.link : a) != null ? b.id : b, a)) + '"><img src="' + c(h((b = a != null ? a.keyimage : a) != null ? b.icon : b, a)) + '"></a>\n            <div class="wish-list-details">\n                <a href="#!/' + c(h((b = a != null ? a.link : 
    a) != null ? b.type : b, a)) + "/" + c(h((b = a != null ? a.link : a) != null ? b.id : b, a)) + '" class="title" title="' + c((f = (f = d.title || (a != null ? a.title : a)) != null ? f : j, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + '">' + c((f = (f = d.title || (a != null ? a.title : a)) != null ? f : j, typeof f === "function" ? f.call(a, {name:"title", hash:{}, data:e}) : f)) + "</a>\n                ";
    b = (f = (f = d.category || (a != null ? a.category : a)) != null ? f : j, g = {name:"category", hash:{}, fn:this.program(3, e), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.category || (b = k.call(a, b, g));
    b != null && (h += b);
    h += "\n                ";
    b = (f = (f = d.publisher || (a != null ? a.publisher : a)) != null ? f : j, g = {name:"publisher", hash:{}, fn:this.program(5, e), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.publisher || (b = k.call(a, b, g));
    b != null && (h += b);
    h += "\n                ";
    b = (d.ratingUI || a && a.ratingUI || j).call(a, (b = a != null ? a.rating : a) != null ? b.count : b, (b = a != null ? a.rating : a) != null ? b.average : b, {name:"ratingUI", hash:{}, data:e});
    b != null && (h += b);
    h += '<br>\n                <a data-id="' + c((f = (f = d.id || (a != null ? a.id : a)) != null ? f : j, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" class="wish-list on-wish-list"></a><a class="wish-list-buy" data-id="' + c((f = (f = d.id || (a != null ? a.id : a)) != null ? f : j, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '" title=\' + Kharma.l10n.wishList.buy + \'></a><span class="price">';
    b = (d.formattedPrice || a && a.formattedPrice || j).call(a, a != null ? a.price : a, {name:"formattedPrice", hash:{}, fn:this.program(7, e), inverse:this.noop, data:e});
    b != null && (h += b);
    h += "</span>";
    b = (f = (f = d.price_original || (a != null ? a.price_original : a)) != null ? f : j, g = {name:"price_original", hash:{}, fn:this.program(9, e), inverse:this.noop, data:e}, typeof f === "function" ? f.call(a, g) : f);
    d.price_original || (b = k.call(a, b, g));
    b != null && (h += b);
    return h + "\n            </div>\n        </div>\n"
  }, "3":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#!/search/page=1/sortby=popularity/query=category:' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", 
    hash:{}, data:e}) : b)) + "</a>"
  }, "5":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'<a href="#publisher/' + f((b = (b = d.id || (a != null ? a.id : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"id", hash:{}, data:e}) : b)) + '/page=1/sortby=popularity" class="livelink" title="' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, data:e}) : b)) + '">' + f((b = (b = d.label || (a != null ? a.label : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"label", hash:{}, 
    data:e}) : b)) + "</a>"
  }, "7":function() {
    return""
  }, "9":function(a, d, c, e) {
    var b = d.helperMissing, c = '<span class="original-price">', a = (d.formattedPrice || a && a.formattedPrice || b).call(a, a, {name:"formattedPrice", hash:{}, fn:this.program(7, e), inverse:this.noop, data:e});
    a != null && (c += a);
    return c + "</span>"
  }, "11":function(a, d, c, e) {
    var b, c = d.helperMissing, f = this.escapeExpression;
    return'    <div class="wish-list-empty">' + f((b = (b = d.wishListIsEmpty || (a != null ? a.wishListIsEmpty : a)) != null ? b : c, typeof b === "function" ? b.call(a, {name:"wishListIsEmpty", hash:{}, data:e}) : b)) + "</div>\n"
  }, compiler:[6, ">= 2.0.0-beta.1"], main:function(a, d, c, e) {
    var b, f, c = d.helperMissing, g = this.escapeExpression, h = "";
    b = d["if"].call(a, (b = a != null ? a.results : a) != null ? b.length : b, {name:"if", hash:{}, fn:this.program(1, e), inverse:this.program(11, e), data:e});
    b != null && (h += b);
    return h + '<div class="all"><a href="#!/wishlist/' + g((f = (f = d.id || (a != null ? a.id : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"id", hash:{}, data:e}) : f)) + '/page=1/sortby=addeddate">' + g((f = (f = d.seeAll || (a != null ? a.seeAll : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"seeAll", hash:{}, data:e}) : f)) + " (" + g((f = (f = d.total || (a != null ? a.total : a)) != null ? f : c, typeof f === "function" ? f.call(a, {name:"total", hash:{}, 
    data:e}) : f)) + ")</a></div>\n"
  }, useData:!0})
})();

