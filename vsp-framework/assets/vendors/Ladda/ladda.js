/*!
 * Ladda for jQuery
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2015 Hakim El Hattab, http://hakim.se
 */
! function (a, i) {
    "use strict";
    if (void 0 === i) return console.error("jQuery required for Ladda.jQuery");
    var t = [];
    (i = i.extend(i, {
        ladda: function (i) {
            "stopAll" === i && a.stopAll()
        }
    })).fn = i.extend(i.fn, {
        ladda: function (d) {
            var e = t.slice.call(arguments, 1);
            if ("bind" === d) e.unshift(i(this).selector), a.bind.apply(a, e);
            else {
                if ("isLoading" === d) return i(this).data("ladda").isLoading();
                i(this).each(function () {
                    var t, n = i(this);
                    void 0 === d ? n.data("ladda", a.create(this)) : (t = n.data("ladda"))[d].apply(t, e)
                })
            }
            return this
        }
    })
}(this.Ladda, this.jQuery);

/*!
 * Ladda 1.0.5 (2017-09-24, 16:54)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2017 Hakim El Hattab, http://hakim.se
 */

! function (t, e) {
    "use strict";
    "object" == typeof exports ? module.exports = e(require("spin.js")) : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner)
}(this, function (t) {
    "use strict";

    function e(t) {
        if (void 0 !== t) {
            if (/ladda-button/i.test(t.className) || (t.className += " ladda-button"), t.hasAttribute("data-style") || t.setAttribute("data-style", "expand-right"), !t.querySelector(".ladda-label")) {
                var e = document.createElement("span");
                e.className = "ladda-label", r(t, e)
            }
            var a, u = t.querySelector(".ladda-spinner");
            u || ((u = document.createElement("span")).className = "ladda-spinner"), t.appendChild(u);
            var i, o = {
                start: function () {
                    return a || (a = n(t)), t.disabled = !0, t.setAttribute("data-loading", ""), clearTimeout(i), a.spin(u), this.setProgress(0), this
                },
                startAfter: function (t) {
                    return clearTimeout(i), i = setTimeout(function () {
                        o.start()
                    }, t), this
                },
                stop: function () {
                    return o.isLoading() && (t.disabled = !1, t.removeAttribute("data-loading")), clearTimeout(i), a && (i = setTimeout(function () {
                        a.stop()
                    }, 1e3)), this
                },
                toggle: function () {
                    return this.isLoading() ? this.stop() : this.start()
                },
                setProgress: function (e) {
                    e = Math.max(Math.min(e, 1), 0);
                    var a = t.querySelector(".ladda-progress");
                    0 === e && a && a.parentNode ? a.parentNode.removeChild(a) : (a || ((a = document.createElement("div")).className = "ladda-progress", t.appendChild(a)), a.style.width = (e || 0) * t.offsetWidth + "px")
                },
                enable: function () {
                    return this.stop()
                },
                disable: function () {
                    return this.stop(), t.disabled = !0, this
                },
                isLoading: function () {
                    return t.hasAttribute("data-loading")
                },
                remove: function () {
                    clearTimeout(i), t.disabled = !1, t.removeAttribute("data-loading"), a && (a.stop(), a = null), d.splice(d.indexOf(o), 1)
                }
            };
            return d.push(o), o
        }
        console.warn("Ladda button target must be defined.")
    }

    function a(t, e) {
        for (; t.parentNode && t.tagName !== e;) t = t.parentNode;
        return e === t.tagName ? t : void 0
    }

    function u(t) {
        var e = [];
        return ["input", "textarea", "select"].forEach(function (a) {
            for (var u = t.getElementsByTagName(a), n = 0; n < u.length; n++) u[n].hasAttribute("required") && e.push(u[n])
        }), e
    }

    function n(e) {
        var a, u, n = e.offsetHeight;
        0 === n && (n = parseFloat(window.getComputedStyle(e).height)), n > 32 && (n *= .8), e.hasAttribute("data-spinner-size") && (n = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (a = e.getAttribute("data-spinner-color")), e.hasAttribute("data-spinner-lines") && (u = parseInt(e.getAttribute("data-spinner-lines"), 10));
        var r = .2 * n,
            i = .6 * r,
            d = r < 7 ? 2 : 3;
        return new t({
            color: a || "#fff",
            lines: u || 12,
            radius: r,
            length: i,
            width: d,
            zIndex: "auto",
            top: "auto",
            left: "auto",
            className: ""
        })
    }

    function r(t, e) {
        var a = document.createRange();
        a.selectNodeContents(t), a.surroundContents(e), t.appendChild(e)
    }

    function i(t, n) {
        if ("function" == typeof t.addEventListener) {
            var r = e(t),
                i = -1;
            t.addEventListener("click", function () {
                var e = !0,
                    d = a(t, "FORM");
                if (void 0 !== d)
                    if ("function" == typeof d.checkValidity) e = d.checkValidity();
                    else
                        for (var o = u(d), s = 0; s < o.length; s++) {
                            var F = o[s],
                                l = F.getAttribute("type");
                            if ("" === F.value.replace(/^\s+|\s+$/g, "") && (e = !1), "checkbox" !== l && "radio" !== l || F.checked || (e = !1), "email" === l && (e = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i.test(F.value)), "url" === l && (e = /^([a-z]([a-z]|\d|\+|-|\.)*):(\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?((\[(|(v[\da-f]{1,}\.(([a-z]|\d|-|\.|_|~)|[!\$&'\(\)\*\+,;=]|:)+))\])|((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=])*)(:\d*)?)(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*|(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)|((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)){0})(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(F.value)), !e) break
                        }
                e && (r.startAfter(1), "number" == typeof n.timeout && (clearTimeout(i), i = setTimeout(r.stop, n.timeout)), "function" == typeof n.callback && n.callback.apply(null, [r]))
            }, !1)
        }
    }
    var d = [];
    return {
        bind: function (t, e) {
            var a;
            if ("string" == typeof t) a = document.querySelectorAll(t);
            else {
                if ("object" != typeof t) throw new Error("target must be string or object");
                a = [t]
            }
            e = e || {};
            for (var u = 0; u < a.length; u++) i(a[u], e)
        },
        create: e,
        stopAll: function () {
            for (var t = 0, e = d.length; t < e; t++) d[t].stop()
        }
    }
});
