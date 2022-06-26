!(function (t) {
  var e = {};
  function n(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = { i: o, l: !1, exports: {} });
    return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          n.d(
            o,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (t, e, n) {
    "use strict";
    n.r(e);
    const o = function (t) {
      return new o.prototype.init(t);
    };
    (o.prototype.init = function (t) {
      return t
        ? t.tagName
          ? ((this[0] = t), (this.length = 1), this)
          : (Object.assign(this, document.querySelectorAll(t)),
            (this.length = document.querySelectorAll(t).length),
            this)
        : this;
    }),
      (o.prototype.init.prototype = o.prototype),
      (window.$ = o);
    var r = o;
    (r.prototype.addClass = function () {
      for (let t = 0; t < this.length; t++)
        this[t].classList && this[t].classList.add(...arguments);
      return this;
    }),
      (r.prototype.removeClass = function () {
        for (let t = 0; t < this.length; t++)
          this[t].classList && this[t].classList.remove(...arguments);
        return this;
      }),
      (r.prototype.toggleClass = function (t) {
        for (let e = 0; e < this.length; e++)
          this[e].classList && this[e].classList.toggle(t);
        return this;
      }),
      (r.prototype.on = function (t, e) {
        if (!t || !e) return this;
        for (let n = 0; n < this.length; n++) this[n].addEventListener(t, e);
        return this;
      }),
      (r.prototype.off = function (t, e) {
        if (!t || !e) return this;
        for (let n = 0; n < this.length; n++) this[n].removeEventListener(t, e);
        return this;
      }),
      (r.prototype.click = function (t) {
        for (let e = 0; e < this.length; e++)
          t ? this[e].addEventListener("click", t) : this[e].click();
        return this;
      }),
      (r.prototype.fadeIn = function (t, e, n) {
        for (let o = 0; o < this.length; o++) this.fadeInBody(t, e, n, o);
        return this;
      }),
      (r.prototype.fadeOut = function (t, e) {
        for (let n = 0; n < this.length; n++) this.fadeOutBody(t, e, n);
        return this;
      }),
      (r.prototype.fadeToggle = function (t, e, n) {
        for (let o = 0; o < this.length; o++)
          "none" === window.getComputedStyle(this[o]).display
            ? this.fadeInBody(t, e, n, o)
            : this.fadeOutBody(t, n, o);
        return this;
      }),
      (r.prototype.fadeInBody = function (t, e, n, o) {
        this[o].style.display = e || "block";
        const r = this.animateOverTime(
          t,
          (t) => {
            this[o].style.opacity = t;
          },
          n
        );
        return requestAnimationFrame(r), this[o];
      }),
      (r.prototype.fadeOutBody = function (t, e, n) {
        const o = this.animateOverTime(
          t,
          (t) => {
            (this[n].style.opacity = 1 - t),
              1 === t && (this[n].style.display = "none");
          },
          e
        );
        return requestAnimationFrame(o), this[n];
      }),
      (r.prototype.animateOverTime = function (t, e, n) {
        let o;
        return function r(i) {
          o || (o = i);
          let l = i - o,
            s = Math.min(l / t, 1);
          e(s),
            l < t ? requestAnimationFrame(r) : "function" == typeof n && n();
        };
      }),
      (r.prototype.dropdown = function () {
        for (let t = 0; t < this.length; t++) {
          const e = this[t].getAttribute("id");
          r(this[t]).click(() => {
            r(`[data-toggle-id="${e}"]`).fadeToggle(200);
          });
        }
      });
    var i = r;
    var l = (t) => {
      function e(t) {
        let e = 0,
          n = "+7 (___) __-__-__".replace(/\D/g, ""),
          o = this.value.replace(/\D/g, "");
        n.length >= o.length && (o = n),
          (this.value = "+7 (___) __-__-__".replace(/./g, function (t) {
            return /[_\d]/.test(t) && e < o.length
              ? o.charAt(e++)
              : e >= o.length
              ? ""
              : t;
          })),
          "blur" === t.type
            ? 2 == this.value.length && (this.value = "")
            : ((t, e) => {
                if ((e.focus(), e.setSelectionRange)) e.setSelectionRange(t, t);
                else if (e.createTextRange) {
                  let n = e.createTextRange();
                  n.collapse(!0),
                    n.moveEnd("character", t),
                    n.moveStart("character", t),
                    n.select();
                }
              })(this.value.length, this);
      }
      document.querySelectorAll(t).forEach((t) => {
        t.addEventListener("input", e),
          t.addEventListener("focus", e),
          t.addEventListener("blur", e);
      });
    };
    var s = () => {
      !(function (t, e, n) {
        const o = document.querySelectorAll(t),
          r = document.querySelector(e),
          i = document.querySelector(n);
        o.forEach((t) => {
          t.addEventListener("click", (t) => {
            t.target && t.preventDefault(),
              (r.style.display = "block"),
              (document.body.style.overflow = "hidden");
          });
        }),
          i.addEventListener("click", () => {
            (r.style.display = "none"), (document.body.style.overflow = "");
          }),
          r.addEventListener("click", (t) => {
            t.target === r &&
              ((r.style.display = "none"), (document.body.style.overflow = ""));
          });
      })(".button-trigger", ".popup-content", ".popup-content .popup-close");
    };
    var c = () => {
      const t = document.querySelectorAll("form"),
        e = document.querySelector('input[type="checkbox"]'),
        n = document.querySelectorAll('input[name="phone"]');
      n.forEach((t) => {
        t.addEventListener("input", () => {
          t.value = t.value.replace(/\D/, "");
        });
      });
      const o = "Ожидание",
        r = "Мы перезвончим вам в течении 10 минут",
        i = "Попробуйте снова";
      t.forEach((t) => {
        t.addEventListener("submit", (l) => {
          if ((l.preventDefault(), !e.checked))
            return void n.forEach((t) => {
              t.value = "Нажмите галочку";
            });
          let s = document.createElement("div");
          s.classList.add("status"), t.appendChild(s);
          (async (t, e) => {
            document.querySelector(".status").textContent = o;
            let n = await fetch(t, { method: "POST", body: e });
            return await n.text();
          })("assets/server.php", new FormData(t))
            .then((t) => {
              console.log(t), (s.textContent = r);
            })
            .catch(() => (s.textContent = i))
            .finally(() => {
              n.forEach((t) => {
                t.value = "Ок";
              }),
                setTimeout(() => {
                  s.remove();
                }, 5e3);
            });
        });
      });
    };
    window.addEventListener("DOMContentLoaded", () => {
      s(), c(), l('[name="phone"]');
    }),
      i("button").on("click", function () {
        i(".rs-menu-form__burger").toggleClass("active");
      }),
      i(".navbar-heder").dropdown(),
      i(".collapse").on("click", function () {
        if (
          "none" !=
          window.getComputedStyle(document.querySelector(".navbar-toggle"))
            .display
        ) {
          let t = document.querySelectorAll(".container-hat__info"),
            e = document.querySelectorAll(".container-hat__collapse"),
            n = document.querySelectorAll(".collapse");
          t.forEach((t) => (t.style.display = "none")),
            e.forEach((t) => (t.style.display = "none")),
            n.forEach((t) => (t.style.display = "none")),
            document.querySelectorAll(".container-dropdown").forEach((t) => {
              (t.style.display = "block"), (t.style.opacity = "1");
            });
        }
      }),
      i(".container-content__action-icon").on("click", function () {
        i(".container-content__info").toggleClass("active");
        let t = document.querySelector(".container-content__info"),
          e = document.querySelector(".container-content__action-icon"),
          n = document.querySelector(".information p");
        for (let o = 0; o < t.classList.length; o++)
          "active" != t.classList[o]
            ? ((e.style.backgroundImage = "url('img/Button-plus.svg')"),
              (n.style.display = "block"))
            : ((e.style.backgroundImage = "url('img/Button-x.svg')"),
              (n.style.display = "none"));
      });
  },
]);
