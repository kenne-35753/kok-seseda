! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" == typeof window ? this : window, function (ee, a) {
    "use strict";

    function b(e, t) {
        t = t || Fe;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = Ue.type(e);
        return "function" !== n && !Ue.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function w(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function B(t, n, o) {
        return Ue.isFunction(n) ? Ue.grep(t, function (e, t) {
            return !!n.call(e, t, e) !== o
        }) : n.nodeType ? Ue.grep(t, function (e) {
            return e === n !== o
        }) : "string" == typeof n ? x.test(n) ? Ue.filter(n, t, o) : (n = Ue.filter(n, t), Ue.grep(t, function (t) {
            return -1 < e.call(n, t) !== o && 1 === t.nodeType
        })) : Ue.grep(t, function (t) {
            return -1 < e.call(n, t) !== o
        })
    }

    function E(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function K(e) {
        var t = {};
        return Ue.each(e.match(H) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function M(e) {
        return e
    }

    function N(e) {
        throw e
    }

    function O(t, n, o, a) {
        var i;
        try {
            t && Ue.isFunction(i = t.promise) ? i.call(t).done(n).fail(o) : t && Ue.isFunction(i = t.then) ? i.call(t, n, o) : n.apply(void 0, [t].slice(a))
        } catch (e) {
            o.apply(void 0, [e])
        }
    }

    function P() {
        Fe.removeEventListener("DOMContentLoaded", P), ee.removeEventListener("load", P), Ue.ready()
    }

    function S() {
        this.expando = Ue.expando + S.uid++
    }

    function V(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : q.test(e) ? JSON.parse(e) : e)
    }

    function te(e, t, n) {
        var a;
        if (void 0 === n && 1 === e.nodeType)
            if (a = "data-" + t.replace(Y, "-$&").toLowerCase(), n = e.getAttribute(a), "string" == typeof n) {
                try {
                    n = V(n)
                } catch (t) {}
                W.set(e, t, n)
            } else n = void 0;
        return n
    }

    function _(t, n, a, o) {
        var s = 1,
            r = 20,
            l = o ? function () {
                return o.cur()
            } : function () {
                return Ue.css(t, n, "")
            },
            d = l(),
            i = a && a[3] || (Ue.cssNumber[n] ? "" : "px"),
            p = (Ue.cssNumber[n] || "px" !== i && +d) && U.exec(Ue.css(t, n)),
            u;
        if (p && p[3] !== i) {
            i = i || p[3], a = a || [], p = +d || 1;
            do s = s || ".5", p /= s, Ue.style(t, n, p + i); while (s !== (s = l() / d) && 1 !== s && --r)
        }
        return a && (p = +p || +d || 0, u = a[1] ? p + (a[1] + 1) * a[2] : +a[2], o && (o.unit = i, o.start = p, o.end = u)), u
    }

    function ne(t) {
        var n = t.ownerDocument,
            a = t.nodeName,
            o = J[a],
            i;
        return o ? o : (i = n.body.appendChild(n.createElement(a)), o = Ue.css(i, "display"), i.parentNode.removeChild(i), "none" === o && (o = "block"), J[a] = o, o)
    }

    function ae(t, n) {
        for (var a = [], e = 0, o = t.length, i, s; e < o; e++) s = t[e], s.style && (i = s.style.display, n ? ("none" === i && (a[e] = z.get(s, "display") || null, a[e] || (s.style.display = "")), "" === s.style.display && G(s) && (a[e] = ne(s))) : "none" !== i && (a[e] = "none", z.set(s, "display", i)));
        for (e = 0; e < o; e++) null != a[e] && (t[e].style.display = a[e]);
        return t
    }

    function oe(e, t) {
        var n;
        return n = "undefined" == typeof e.getElementsByTagName ? "undefined" == typeof e.querySelectorAll ? [] : e.querySelectorAll(t || "*") : e.getElementsByTagName(t || "*"), void 0 === t || t && w(e, t) ? Ue.merge([e], n) : n
    }

    function ie(e, t) {
        for (var n = 0, a = e.length; n < a; n++) z.set(e[n], "globalEval", !t || z.get(t[n], "globalEval"))
    }

    function se(t, a, s, r, d) {
        for (var e = a.createDocumentFragment(), l = [], c = 0, p = t.length, o, u, m, b, y, v; c < p; c++)
            if (o = t[c], o || 0 === o)
                if ("object" === Ue.type(o)) Ue.merge(l, o.nodeType ? [o] : o);
                else if (Ze.test(o)) {
            for (u = u || e.appendChild(a.createElement("div")), m = (Ke.exec(o) || ["", ""])[1].toLowerCase(), b = Ge[m] || Ge._default, u.innerHTML = b[1] + Ue.htmlPrefilter(o) + b[2], v = b[0]; v--;) u = u.lastChild;
            Ue.merge(l, u.childNodes), u = e.firstChild, u.textContent = ""
        } else l.push(a.createTextNode(o));
        for (e.textContent = "", c = 0; o = l[c++];)
            if (r && -1 < Ue.inArray(o, r)) d && d.push(o);
            else if (y = Ue.contains(o.ownerDocument, o), u = oe(e.appendChild(o), "script"), y && ie(u), s)
            for (v = 0; o = u[v++];) Qe.test(o.type || "") && s.push(o);
        return e
    }

    function re() {
        return !0
    }

    function le() {
        return !1
    }

    function de() {
        try {
            return Fe.activeElement
        } catch (e) {}
    }

    function ce(t, n, a, o, i, s) {
        var r, l;
        if ("object" == typeof n) {
            for (l in "string" != typeof a && (o = o || a, a = void 0), n) ce(t, l, a, o, n[l], s);
            return t
        }
        if (null == o && null == i ? (i = a, o = a = void 0) : null == i && ("string" == typeof a ? (i = o, o = void 0) : (i = o, o = a, a = void 0)), !1 === i) i = le;
        else if (!i) return t;
        return 1 === s && (r = i, i = function (e) {
            return Ue().off(e), r.apply(this, arguments)
        }, i.guid = r.guid || (r.guid = Ue.guid++)), t.each(function () {
            Ue.event.add(this, n, i, o, a)
        })
    }

    function pe(e, t) {
        return w(e, "table") && w(11 === t.nodeType ? t.firstChild : t, "tr") ? Ue(">tbody", e)[0] || e : e
    }

    function ue(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ge(e) {
        var t = st.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function fe(t, n) {
        var a, o, s, r, l, p, u, m;
        if (1 === n.nodeType) {
            if (z.hasData(t) && (r = z.access(t), l = z.set(n, r), m = r.events))
                for (s in delete l.handle, l.events = {}, m)
                    for (a = 0, o = m[s].length; a < o; a++) Ue.event.add(n, s, m[s][a]);
            W.hasData(t) && (p = W.access(t), u = Ue.extend({}, p), W.set(n, u))
        }
    }

    function me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function he(t, a, o, r) {
        a = qe.apply([], a);
        var d = 0,
            c = t.length,
            p = a[0],
            u = Ue.isFunction(p),
            s, g, m, y, v, x;
        if (u || 1 < c && "string" == typeof p && !n.checkClone && it.test(p)) return t.each(function (n) {
            var e = t.eq(n);
            u && (a[0] = p.call(this, n, e.html())), he(e, a, o, r)
        });
        if (c && (s = se(a, t[0].ownerDocument, !1, t, r), g = s.firstChild, 1 === s.childNodes.length && (s = g), g || r)) {
            for (m = Ue.map(oe(s, "script"), ue), y = m.length; d < c; d++) v = s, d != c - 1 && (v = Ue.clone(v, !0, !0), y && Ue.merge(m, oe(v, "script"))), o.call(t[d], v, d);
            if (y)
                for (x = m[m.length - 1].ownerDocument, Ue.map(m, ge), d = 0; d < y; d++) v = m[d], Qe.test(v.type || "") && !z.access(v, "globalEval") && Ue.contains(x, v) && (v.src ? Ue._evalUrl && Ue._evalUrl(v.src) : b(v.textContent.replace(rt, ""), x))
        }
        return t
    }

    function be(t, n, a) {
        for (var o = n ? Ue.filter(n, t) : t, e = 0, i; null != (i = o[e]); e++) a || 1 !== i.nodeType || Ue.cleanData(oe(i)), i.parentNode && (a && Ue.contains(i.ownerDocument, i) && ie(oe(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function ye(t, a, o) {
        var i = t.style,
            s, r, l, p;
        return o = o || ct(t), o && (p = o.getPropertyValue(a) || o[a], "" !== p || Ue.contains(t.ownerDocument, t) || (p = Ue.style(t, a)), !n.pixelMarginRight() && dt.test(p) && lt.test(a) && (s = i.width, r = i.minWidth, l = i.maxWidth, i.minWidth = i.maxWidth = i.width = p, p = o.width, i.width = s, i.minWidth = r, i.maxWidth = l)), void 0 === p ? p : p + ""
    }

    function ve(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function xe(e) {
        if (e in ht) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = mt.length; n--;)
            if (e = mt[n] + t, e in ht) return e
    }

    function _e(e) {
        var t = Ue.cssProps[e];
        return t || (t = Ue.cssProps[e] = xe(e) || e), t
    }

    function we(e, t, n) {
        var a = U.exec(t);
        return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
    }

    function Ce(t, n, a, o, i) {
        var e = 0,
            s;
        for (s = a === (o ? "border" : "content") ? 4 : "width" === n ? 1 : 0; 4 > s; s += 2) "margin" === a && (e += Ue.css(t, a + Q[s], !0, i)), o ? ("content" === a && (e -= Ue.css(t, "padding" + Q[s], !0, i)), "margin" !== a && (e -= Ue.css(t, "border" + Q[s] + "Width", !0, i))) : (e += Ue.css(t, "padding" + Q[s], !0, i), "padding" !== a && (e += Ue.css(t, "border" + Q[s] + "Width", !0, i)));
        return e
    }

    function Te(t, a, o) {
        var i = ct(t),
            e = ye(t, a, i),
            s = "border-box" === Ue.css(t, "boxSizing", !1, i),
            r;
        return dt.test(e) ? e : (r = s && (n.boxSizingReliable() || e === t.style[a]), "auto" === e && (e = t["offset" + a[0].toUpperCase() + a.slice(1)]), e = parseFloat(e) || 0, e + Ce(t, a, o || (s ? "border" : "content"), r, i) + "px")
    }

    function Ee(t, n, a, o, i) {
        return new Ee.prototype.init(t, n, a, o, i)
    }

    function Se() {
        xt && (!1 === Fe.hidden && ee.requestAnimationFrame ? ee.requestAnimationFrame(Se) : ee.setTimeout(Se, Ue.fx.interval), Ue.fx.tick())
    }

    function ke() {
        return ee.setTimeout(function () {
            vt = void 0
        }), vt = Ue.now()
    }

    function Ae(t, n) {
        var a = 0,
            o = {
                height: t
            },
            e;
        for (n = n ? 1 : 0; 4 > a; a += 2 - n) e = Q[a], o["margin" + e] = o["padding" + e] = t;
        return n && (o.opacity = o.width = t), o
    }

    function Ie(t, n, a) {
        for (var o = (Pe.tweeners[n] || []).concat(Pe.tweeners["*"]), e = 0, i = o.length, s; e < i; e++)
            if (s = o[e].call(a, n, t)) return s
    }

    function De(t, a, s) {
        var r = "width" in a || "height" in a,
            l = this,
            c = {},
            n = t.style,
            o = t.nodeType && G(t),
            u = z.get(t, "fxshow"),
            m, b, y, v, x, _, w, C;
        for (m in s.queue || (v = Ue._queueHooks(t, "fx"), null == v.unqueued && (v.unqueued = 0, x = v.empty.fire, v.empty.fire = function () {
                v.unqueued || x()
            }), v.unqueued++, l.always(function () {
                l.always(function () {
                    v.unqueued--, Ue.queue(t, "fx").length || v.empty.fire()
                })
            })), a)
            if (b = a[m], bt.test(b)) {
                if (delete a[m], y = y || "toggle" === b, b === (o ? "hide" : "show")) {
                    if ("show" !== b || !u || void 0 === u[m]) continue;
                    o = !0
                }
                c[m] = u && u[m] || Ue.style(t, m)
            } if (_ = !Ue.isEmptyObject(a), _ || !Ue.isEmptyObject(c))
            for (m in r && 1 === t.nodeType && (s.overflow = [n.overflow, n.overflowX, n.overflowY], w = u && u.display, null == w && (w = z.get(t, "display")), C = Ue.css(t, "display"), "none" === C && (w ? C = w : (ae([t], !0), w = t.style.display || w, C = Ue.css(t, "display"), ae([t]))), ("inline" === C || "inline-block" === C && null != w) && "none" === Ue.css(t, "float") && (_ || (l.done(function () {
                    n.display = w
                }), null == w && (C = n.display, w = "none" === C ? "" : C)), n.display = "inline-block")), s.overflow && (n.overflow = "hidden", l.always(function () {
                    n.overflow = s.overflow[0], n.overflowX = s.overflow[1], n.overflowY = s.overflow[2]
                })), _ = !1, c) _ || (u ? "hidden" in u && (o = u.hidden) : u = z.access(t, "fxshow", {
                display: w
            }), y && (u.hidden = !o), o && ae([t], !0), l.done(function () {
                for (m in o || ae([t]), z.remove(t, "fxshow"), c) Ue.style(t, m, c[m])
            })), _ = Ie(o ? u[m] : 0, m, l), m in u || (u[m] = _.start, o && (_.end = _.start, _.start = 0))
    }

    function Le(t, n) {
        var a, o, i, s, r;
        for (a in t)
            if (o = Ue.camelCase(a), i = n[o], s = t[a], Array.isArray(s) && (i = s[1], s = t[a] = s[0]), a !== o && (t[o] = s, delete t[a]), r = Ue.cssHooks[o], r && "expand" in r)
                for (a in s = r.expand(s), delete t[o], s) a in t || (t[a] = s[a], n[a] = i);
            else n[o] = i
    }

    function Pe(t, n, a) {
        var o = 0,
            s = Pe.prefilters.length,
            r = Ue.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (u) return !1;
                for (var e = vt || ke(), n = Math.max(0, p.startTime + p.duration - e), a = n / p.duration || 0, o = 1 - a, s = 0, l = p.tweens.length; s < l; s++) p.tweens[s].run(o);
                return r.notifyWith(t, [p, o, n]), 1 > o && l ? n : (l || r.notifyWith(t, [p, 1, 0]), r.resolveWith(t, [p]), !1)
            },
            p = r.promise({
                elem: t,
                props: Ue.extend({}, n),
                opts: Ue.extend(!0, {
                    specialEasing: {},
                    easing: Ue.easing._default
                }, a),
                originalProperties: n,
                originalOptions: a,
                startTime: vt || ke(),
                duration: a.duration,
                tweens: [],
                createTween: function (e, n) {
                    var a = Ue.Tween(t, p.opts, e, n, p.opts.specialEasing[e] || p.opts.easing);
                    return p.tweens.push(a), a
                },
                stop: function (e) {
                    var n = 0,
                        a = e ? p.tweens.length : 0;
                    if (u) return this;
                    for (u = !0; n < a; n++) p.tweens[n].run(1);
                    return e ? (r.notifyWith(t, [p, 1, 0]), r.resolveWith(t, [p, e])) : r.rejectWith(t, [p, e]), this
                }
            }),
            i = p.props,
            c, u;
        for (Le(i, p.opts.specialEasing); o < s; o++)
            if (c = Pe.prefilters[o].call(p, t, i, p.opts)) return Ue.isFunction(c.stop) && (Ue._queueHooks(p.elem, p.opts.queue).stop = Ue.proxy(c.stop, c)), c;
        return Ue.map(i, Ie, p), Ue.isFunction(p.opts.start) && p.opts.start.call(t, p), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always), Ue.fx.timer(Ue.extend(l, {
            elem: t,
            anim: p,
            queue: p.opts.queue
        })), p
    }

    function Oe(e) {
        var t = e.match(H) || [];
        return t.join(" ")
    }

    function Ne(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function je(t, n, a, o) {
        if (Array.isArray(n)) Ue.each(n, function (n, i) {
            a || Dt.test(t) ? o(t, i) : je(t + "[" + ("object" == typeof i && null != i ? n : "") + "]", i, a, o)
        });
        else if (a || "object" !== Ue.type(n)) o(t, n);
        else
            for (var i in n) je(t + "[" + i + "]", n[i], a, o)
    }

    function $e(t) {
        return function (n, a) {
            "string" != typeof n && (a = n, n = "*");
            var o = 0,
                i = n.toLowerCase().match(H) || [],
                s;
            if (Ue.isFunction(a))
                for (; s = i[o++];) "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(a)) : (t[s] = t[s] || []).push(a)
        }
    }

    function He(t, n, o, i) {
        function s(a) {
            var l;
            return r[a] = !0, Ue.each(t[a] || [], function (t, a) {
                var i = a(n, o, i);
                return "string" != typeof i || e || r[i] ? e ? !(l = i) : void 0 : (n.dataTypes.unshift(i), s(i), !1)
            }), l
        }
        var r = {},
            e = t === Ft;
        return s(n.dataTypes[0]) || !r["*"] && s("*")
    }

    function We(t, n) {
        var a = Ue.ajaxSettings.flatOptions || {},
            e, o;
        for (e in n) void 0 !== n[e] && ((a[e] ? t : o || (o = {}))[e] = n[e]);
        return o && Ue.extend(!0, t, o), t
    }

    function Re(t, n, a) {
        for (var o = t.contents, s = t.dataTypes, i, r, l, c;
            "*" === s[0];) s.shift(), void 0 === i && (i = t.mimeType || n.getResponseHeader("Content-Type"));
        if (i)
            for (r in o)
                if (o[r] && o[r].test(i)) {
                    s.unshift(r);
                    break
                } if (s[0] in a) l = s[0];
        else {
            for (r in a) {
                if (!s[0] || t.converters[r + " " + s[0]]) {
                    l = r;
                    break
                }
                c || (c = r)
            }
            l = l || c
        }
        return l ? (l !== s[0] && s.unshift(l), a[l]) : void 0
    }

    function ze(t, n, a, o) {
        var s = {},
            r = t.dataTypes.slice(),
            l, d, c, p, u;
        if (r[1])
            for (c in t.converters) s[c.toLowerCase()] = t.converters[c];
        for (d = r.shift(); d;)
            if (t.responseFields[d] && (a[t.responseFields[d]] = n), !u && o && t.dataFilter && (n = t.dataFilter(n, t.dataType)), u = d, d = r.shift())
                if ("*" === d) d = u;
                else if ("*" !== u && u !== d) {
            if (c = s[u + " " + d] || s["* " + d], !c)
                for (l in s)
                    if (p = l.split(" "), p[1] === d && (c = s[u + " " + p[0]] || s["* " + p[0]])) {
                        !0 === c ? c = s[l] : !0 !== s[l] && (d = p[0], r.unshift(p[1]));
                        break
                    } if (!0 !== c)
                if (c && t.throws) n = c(n);
                else try {
                    n = c(n)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: c ? e : "No conversion from " + u + " to " + d
                    }
                }
        }
        return {
            state: "success",
            data: n
        }
    }
    var Me = [],
        Fe = ee.document,
        d = Object.getPrototypeOf,
        Be = Me.slice,
        qe = Me.concat,
        Ye = Me.push,
        e = Me.indexOf,
        i = {},
        g = i.toString,
        Xe = i.hasOwnProperty,
        l = Xe.toString,
        f = l.call(Object),
        n = {},
        o = "3.2.1",
        Ue = function (e, t) {
            return new Ue.fn.init(e, t)
        },
        r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        s = /^-ms-/,
        t = /-([a-z])/g,
        c = function (e, t) {
            return t.toUpperCase()
        };
    Ue.fn = Ue.prototype = {
        jquery: o,
        constructor: Ue,
        length: 0,
        toArray: function () {
            return Be.call(this)
        },
        get: function (e) {
            return null == e ? Be.call(this) : 0 > e ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = Ue.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return Ue.each(this, e)
        },
        map: function (e) {
            return this.pushStack(Ue.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(Be.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: Ye,
        sort: Me.sort,
        splice: Me.splice
    }, Ue.extend = Ue.fn.extend = function () {
        var t = arguments[0] || {},
            n = 1,
            o = arguments.length,
            i = !1,
            s, r, l, p, u, m;
        for ("boolean" == typeof t && (i = t, t = arguments[n] || {}, n++), "object" == typeof t || Ue.isFunction(t) || (t = {}), n === o && (t = this, n--); n < o; n++)
            if (null != (s = arguments[n]))
                for (r in s) l = t[r], p = s[r], t !== p && (i && p && (Ue.isPlainObject(p) || (u = Array.isArray(p))) ? (u ? (u = !1, m = l && Array.isArray(l) ? l : []) : m = l && Ue.isPlainObject(l) ? l : {}, t[r] = Ue.extend(i, m, p)) : void 0 !== p && (t[r] = p));
        return t
    }, Ue.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === Ue.type(e)
        },
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = Ue.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return e && "[object Object]" === g.call(e) && (!(t = d(e)) || (n = Xe.call(t, "constructor") && t.constructor, "function" == typeof n && l.call(n) === f))
        },
        isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[g.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            b(e)
        },
        camelCase: function (e) {
            return e.replace(s, "ms-").replace(t, c)
        },
        each: function (e, t) {
            var n = 0,
                a;
            if (p(e))
                for (a = e.length; n < a && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(r, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? Ue.merge(n, "string" == typeof e ? [e] : e) : Ye.call(n, e)), n
        },
        inArray: function (t, n, a) {
            return null == n ? -1 : e.call(n, t, a)
        },
        merge: function (t, n) {
            for (var a = +n.length, o = 0, i = t.length; o < a; o++) t[i++] = n[o];
            return t.length = i, t
        },
        grep: function (t, n, a) {
            for (var o = [], e = 0, i = t.length, s; e < i; e++) s = !n(t[e], e), s !== !a && o.push(t[e]);
            return o
        },
        map: function (t, n, a) {
            var o = 0,
                i = [],
                s, r;
            if (p(t))
                for (s = t.length; o < s; o++) r = n(t[o], o, a), null != r && i.push(r);
            else
                for (o in t) r = n(t[o], o, a), null != r && i.push(r);
            return qe.apply([], i)
        },
        guid: 1,
        proxy: function (t, n) {
            var o, i, s;
            if ("string" == typeof n && (o = t[n], n = t, t = o), Ue.isFunction(t)) return i = Be.call(arguments, 2), s = function () {
                return t.apply(n || this, i.concat(Be.call(arguments)))
            }, s.guid = t.guid = t.guid || Ue.guid++, s
        },
        now: Date.now,
        support: n
    }), "function" == typeof Symbol && (Ue.fn[Symbol.iterator] = Me[Symbol.iterator]), Ue.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"], function (e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var u = function (L) {
        function N(t, n, a, i) {
            var e = n && n.ownerDocument,
                c = n ? n.nodeType : 9,
                p, g, m, y, v, x, _;
            if (a = a || [], "string" != typeof t || !t || 1 !== c && 9 !== c && 11 !== c) return a;
            if (!i && ((n ? n.ownerDocument || n : u) !== We && He(n), n = n || We, ze)) {
                if (11 !== c && (v = Y.exec(t)))
                    if (!(p = v[1])) {
                        if (v[2]) return F.apply(a, n.getElementsByTagName(t)), a;
                        if ((p = v[3]) && ke.getElementsByClassName && n.getElementsByClassName) return F.apply(a, n.getElementsByClassName(p)), a
                    } else if (9 === c) {
                    if (!(m = n.getElementById(p))) return a;
                    if (m.id === p) return a.push(m), a
                } else if (e && (m = e.getElementById(p)) && qe(n, m) && m.id === p) return a.push(m), a;
                if (ke.qsa && !z[t + " "] && (!Me || !Me.test(t))) {
                    if (1 !== c) e = n, _ = t;
                    else if ("object" !== n.nodeName.toLowerCase()) {
                        for ((y = n.getAttribute("id")) ? y = y.replace(we, Ce) : n.setAttribute("id", y = me), x = Le(t), g = x.length; g--;) x[g] = "#" + y + " " + re(x[g]);
                        _ = x.join(","), e = Z.test(t) && ie(n.parentNode) || n
                    }
                    if (_) try {
                        return F.apply(a, e.querySelectorAll(_)), a
                    } catch (e) {} finally {
                        y === me && n.removeAttribute("id")
                    }
                }
            }
            return Oe(t.replace(O, "$1"), n, a, i)
        }

        function a() {
            function t(a, o) {
                return n.push(a + " ") > Ae.cacheLength && delete t[n.shift()], t[a + " "] = o
            }
            var n = [];
            return t
        }

        function M(e) {
            return e[me] = !0, e
        }

        function K(e) {
            var t = We.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function J(t, n) {
            for (var a = t.split("|"), o = a.length; o--;) Ae.attrHandle[a[o]] = n
        }

        function ee(e, t) {
            var n = t && e,
                a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (a) return a;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function te(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function ne(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ae(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ee(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function oe(t) {
            return M(function (n) {
                return n = +n, M(function (a, o) {
                    for (var i = t([], a.length, n), s = i.length, r; s--;) a[r = i[s]] && (a[r] = !(o[r] = a[r]))
                })
            })
        }

        function ie(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function se() {}

        function re(e) {
            for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
            return a
        }

        function le(t, n, a) {
            var o = n.dir,
                s = n.next,
                e = s || o,
                r = a && "parentNode" === e,
                d = v++;
            return n.first ? function (n, a, i) {
                for (; n = n[o];)
                    if (1 === n.nodeType || r) return t(n, a, i);
                return !1
            } : function (n, a, c) {
                var i = [he, d],
                    p, u, g;
                if (c) {
                    for (; n = n[o];)
                        if ((1 === n.nodeType || r) && t(n, a, c)) return !0;
                } else
                    for (; n = n[o];)
                        if (1 === n.nodeType || r)
                            if (g = n[me] || (n[me] = {}), u = g[n.uniqueID] || (g[n.uniqueID] = {}), s && s === n.nodeName.toLowerCase()) n = n[o] || n;
                            else {
                                if ((p = u[e]) && p[0] === he && p[1] === d) return i[2] = p[2];
                                if (u[e] = i, i[2] = t(n, a, c)) return !0
                            } return !1
            }
        }

        function de(t) {
            return 1 < t.length ? function (n, a, o) {
                for (var i = t.length; i--;)
                    if (!t[i](n, a, o)) return !1;
                return !0
            } : t[0]
        }

        function ce(t, n, a) {
            for (var o = 0, i = n.length; o < i; o++) N(t, n[o], a);
            return a
        }

        function pe(t, n, a, o, s) {
            for (var e = [], r = 0, l = t.length, i; r < l; r++)(i = t[r]) && (a && !a(i, o, s) || (e.push(i), null != n && n.push(r)));
            return e
        }

        function ue(t, a, s, c, u, n) {
            return c && !c[me] && (c = ue(c)), u && !u[me] && (u = ue(u, n)), M(function (e, d, g, f) {
                var i = [],
                    m = [],
                    n = d.length,
                    o = e || ce(a || "*", g.nodeType ? [g] : g, []),
                    p = t && (e || !a) ? pe(o, i, t, g, f) : o,
                    h = s ? u || (e ? t : n || c) ? [] : d : p,
                    b, y, v;
                if (s && s(p, h, g, f), c)
                    for (b = pe(h, m), c(b, [], g, f), y = b.length; y--;)(v = b[y]) && (h[m[y]] = !(p[m[y]] = v));
                if (!e) h = pe(h === d ? h.splice(n, h.length) : h), u ? u(null, d, h, f) : F.apply(d, h);
                else if (u || t) {
                    if (u) {
                        for (b = [], y = h.length; y--;)(v = h[y]) && b.push(p[y] = v);
                        u(null, h = [], b, f)
                    }
                    for (y = h.length; y--;)(v = h[y]) && -1 < (b = u ? H(e, v) : i[y]) && (e[b] = !(d[b] = v))
                }
            })
        }

        function ge(t) {
            for (var n = t.length, o = Ae.relative[t[0].type], s = o || Ae.relative[" "], r = o ? 1 : 0, p = le(function (e) {
                    return e === g
                }, s, !0), u = le(function (e) {
                    return -1 < H(g, e)
                }, s, !0), l = [function (t, n, a) {
                    var i = !o && (a || n !== Ne) || ((g = n).nodeType ? p(t, n, a) : u(t, n, a));
                    return g = null, i
                }], g, d, f; r < n; r++)
                if (d = Ae.relative[t[r].type]) l = [le(de(l), d)];
                else {
                    if (d = Ae.filter[t[r].type].apply(null, t[r].matches), d[me]) {
                        for (f = ++r; f < n && !Ae.relative[t[f].type]; f++);
                        return ue(1 < r && de(l), 1 < r && re(t.slice(0, r - 1).concat({
                            value: " " === t[r - 2].type ? "*" : ""
                        })).replace(O, "$1"), d, r < f && ge(t.slice(r, f)), f < n && ge(t = t.slice(f)), f < n && re(t))
                    }
                    l.push(d)
                } return de(l)
        }

        function fe(t, n) {
            var a = 0 < n.length,
                d = 0 < t.length,
                e = function (e, c, p, g, i) {
                    var f = 0,
                        m = "0",
                        b = e && [],
                        _ = [],
                        w = Ne,
                        v = e || d && Ae.find.TAG("*", i),
                        x = he += Math.random() || .1,
                        y = v.length,
                        C, T, E;
                    for (i && (Ne = c === We || c || i); m !== y && null != (C = v[m]); m++) {
                        if (d && C) {
                            for (T = 0, c || C.ownerDocument === We || (He(C), p = !ze); E = t[T++];)
                                if (E(C, c || We, p)) {
                                    g.push(C);
                                    break
                                } i && (he = x)
                        }
                        a && ((C = !E && C) && f--, e && b.push(C))
                    }
                    if (f += m, a && m !== f) {
                        for (T = 0; E = n[T++];) E(b, _, c, p);
                        if (e) {
                            if (0 < f)
                                for (; m--;) b[m] || _[m] || (_[m] = ve.call(g));
                            _ = pe(_)
                        }
                        F.apply(g, _), i && !e && 0 < _.length && 1 < f + n.length && N.uniqueSort(g)
                    }
                    return i && (he = x, Ne = w), b
                };
            return a ? M(e) : e
        }
        var me = "sizzle" + 1 * new Date,
            u = L.document,
            he = 0,
            v = 0,
            be = a(),
            y = a(),
            z = a(),
            A = function (e, t) {
                return e === t && ($e = !0), 0
            },
            ye = {}.hasOwnProperty,
            C = [],
            ve = C.pop,
            E = C.push,
            F = C.push,
            xe = C.slice,
            H = function (e, t) {
                for (var n = 0, a = e.length; n < a; n++)
                    if (e[n] === t) return n;
                return -1
            },
            I = /[\x20\t\r\n\f]+/g,
            O = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
            P = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            Q = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            R = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
            S = /:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
            T = /^(?:\\.|[\w-]|[^\0-\xa0])+$/,
            U = {
                ID: /^#((?:\\.|[\w-]|[^\0-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\0-\xa0])+)/,
                TAG: /^((?:\\.|[\w-]|[^\0-\xa0])+|[*])/,
                ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\]/,
                PSEUDO: /^:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            V = /^(?:input|select|textarea|button)$/i,
            W = /^h\d$/i,
            X = /^[^{]+\{\s*\[native \w/,
            Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            _e = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
            _ = function (e, t, n) {
                var a = "0x" + t - 65536;
                return a != a || n ? t : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
            },
            we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function (e, t) {
                return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Te = function () {
                He()
            },
            Ee = le(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            }),
            Se, ke, Ae, Ie, De, Le, Pe, Oe, Ne, je, $e, He, We, Re, ze, Me, Fe, Be, qe;
        try {
            F.apply(C = xe.call(u.childNodes), u.childNodes), C[u.childNodes.length].nodeType
        } catch (e) {
            F = {
                apply: C.length ? function (e, t) {
                    E.apply(e, xe.call(t))
                } : function (e, t) {
                    for (var n = e.length, a = 0; e[n++] = t[a++];);
                    e.length = n - 1
                }
            }
        }
        for (Se in ke = N.support = {}, De = N.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, He = N.setDocument = function (t) {
                var n = t ? t.ownerDocument || t : u,
                    a, o;
                return n !== We && 9 === n.nodeType && n.documentElement ? (We = n, Re = We.documentElement, ze = !De(We), u !== We && (o = We.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", Te, !1) : o.attachEvent && o.attachEvent("onunload", Te)), ke.attributes = K(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), ke.getElementsByTagName = K(function (e) {
                    return e.appendChild(We.createComment("")), !e.getElementsByTagName("*").length
                }), ke.getElementsByClassName = X.test(We.getElementsByClassName), ke.getById = K(function (e) {
                    return Re.appendChild(e).id = me, !We.getElementsByName || !We.getElementsByName(me).length
                }), ke.getById ? (Ae.filter.ID = function (e) {
                    var t = e.replace(_e, _);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, Ae.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && ze) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (Ae.filter.ID = function (e) {
                    var t = e.replace(_e, _);
                    return function (e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, Ae.find.ID = function (t, n) {
                    if ("undefined" != typeof n.getElementById && ze) {
                        var a = n.getElementById(t),
                            o, i, s;
                        if (a) {
                            if (o = a.getAttributeNode("id"), o && o.value === t) return [a];
                            for (s = n.getElementsByName(t), i = 0; a = s[i++];)
                                if (o = a.getAttributeNode("id"), o && o.value === t) return [a]
                        }
                        return []
                    }
                }), Ae.find.TAG = ke.getElementsByTagName ? function (e, t) {
                    return "undefined" == typeof t.getElementsByTagName ? ke.qsa ? t.querySelectorAll(e) : void 0 : t.getElementsByTagName(e)
                } : function (t, n) {
                    var a = [],
                        o = 0,
                        i = n.getElementsByTagName(t),
                        s;
                    if ("*" === t) {
                        for (; s = i[o++];) 1 === s.nodeType && a.push(s);
                        return a
                    }
                    return i
                }, Ae.find.CLASS = ke.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && ze) return t.getElementsByClassName(e)
                }, Fe = [], Me = [], (ke.qsa = X.test(We.querySelectorAll)) && (K(function (e) {
                    Re.appendChild(e).innerHTML = "<a id='" + me + "'></a><select id='" + me + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && Me.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || Me.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)"), e.querySelectorAll("[id~=" + me + "-]").length || Me.push("~="), e.querySelectorAll(":checked").length || Me.push(":checked"), e.querySelectorAll("a#" + me + "+*").length || Me.push(".#.+[+~]")
                }), K(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = We.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && Me.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && Me.push(":enabled", ":disabled"), Re.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && Me.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), Me.push(",.*:")
                })), (ke.matchesSelector = X.test(Be = Re.matches || Re.webkitMatchesSelector || Re.mozMatchesSelector || Re.oMatchesSelector || Re.msMatchesSelector)) && K(function (e) {
                    ke.disconnectedMatch = Be.call(e, "*"), Be.call(e, "[s!='']:x"), Fe.push("!=", ":((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\0-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\0-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
                }), Me = Me.length && new RegExp(Me.join("|")), Fe = Fe.length && new RegExp(Fe.join("|")), a = X.test(Re.compareDocumentPosition), qe = a || X.test(Re.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        a = t && t.parentNode;
                    return e === a || a && 1 === a.nodeType && (n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = a ? function (e, t) {
                    if (e === t) return $e = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !ke.sortDetached && t.compareDocumentPosition(e) === n ? e === We || e.ownerDocument === u && qe(u, e) ? -1 : t === We || t.ownerDocument === u && qe(u, t) ? 1 : je ? H(je, e) - H(je, t) : 0 : 4 & n ? -1 : 1)
                } : function (t, n) {
                    if (t === n) return $e = !0, 0;
                    var a = 0,
                        o = t.parentNode,
                        e = n.parentNode,
                        i = [t],
                        s = [n],
                        r;
                    if (!o || !e) return t === We ? -1 : n === We ? 1 : o ? -1 : e ? 1 : je ? H(je, t) - H(je, n) : 0;
                    if (o === e) return ee(t, n);
                    for (r = t; r = r.parentNode;) i.unshift(r);
                    for (r = n; r = r.parentNode;) s.unshift(r);
                    for (; i[a] === s[a];) a++;
                    return a ? ee(i[a], s[a]) : i[a] === u ? -1 : s[a] === u ? 1 : 0
                }, We) : We
            }, N.matches = function (e, t) {
                return N(e, null, null, t)
            }, N.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== We && He(e), t = t.replace(R, "='$1']"), ke.matchesSelector && ze && !z[t + " "] && (!Fe || !Fe.test(t)) && (!Me || !Me.test(t))) try {
                    var n = Be.call(e, t);
                    if (n || ke.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (t) {}
                return 0 < N(t, We, null, [e]).length
            }, N.contains = function (e, t) {
                return (e.ownerDocument || e) !== We && He(e), qe(e, t)
            }, N.attr = function (t, n) {
                (t.ownerDocument || t) !== We && He(t);
                var a = Ae.attrHandle[n.toLowerCase()],
                    e = a && ye.call(Ae.attrHandle, n.toLowerCase()) ? a(t, n, !ze) : void 0;
                return void 0 === e ? ke.attributes || !ze ? t.getAttribute(n) : (e = t.getAttributeNode(n)) && e.specified ? e.value : null : e
            }, N.escape = function (e) {
                return (e + "").replace(we, Ce)
            }, N.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, N.uniqueSort = function (t) {
                var n = [],
                    a = 0,
                    o = 0,
                    i;
                if ($e = !ke.detectDuplicates, je = !ke.sortStable && t.slice(0), t.sort(A), $e) {
                    for (; i = t[o++];) i === t[o] && (a = n.push(o));
                    for (; a--;) t.splice(n[a], 1)
                }
                return je = null, t
            }, Ie = N.getText = function (e) {
                var t = "",
                    n = 0,
                    o = e.nodeType,
                    i;
                if (!o)
                    for (; i = e[n++];) t += Ie(i);
                else if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) t += Ie(e)
                } else if (3 === o || 4 === o) return e.nodeValue;
                return t
            }, Ae = N.selectors = {
                cacheLength: 50,
                createPseudo: M,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(_e, _), e[3] = (e[3] || e[4] || e[5] || "").replace(_e, _), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || N.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && N.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t = !e[6] && e[2],
                            n;
                        return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : t && S.test(t) && (n = Le(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (e[0] = e[0].slice(0, n), e[2] = t.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(_e, _).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = be[e + " "];
                        return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "([\\x20\\t\\r\\n\\f]|$)")) && be(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (t, n, a) {
                        return function (o) {
                            var i = N.attr(o, t);
                            return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === a : "!=" === n ? i !== a : "^=" === n ? a && 0 === i.indexOf(a) : "*=" === n ? a && -1 < i.indexOf(a) : "$=" === n ? a && i.slice(-a.length) === a : "~=" === n ? -1 < (" " + i.replace(I, " ") + " ").indexOf(a) : "|=" == n && (i === a || i.slice(0, a.length + 1) === a + "-"))
                        }
                    },
                    CHILD: function (i, t, n, a, d) {
                        var e = "nth" !== i.slice(0, 3),
                            u = "last" !== i.slice(-4),
                            g = "of-type" === t;
                        return 1 === a && 0 === d ? function (e) {
                            return !!e.parentNode
                        } : function (f, h, c) {
                            var b = e == u ? "previousSibling" : "nextSibling",
                                y = f.parentNode,
                                v = g && f.nodeName.toLowerCase(),
                                r = !c && !g,
                                s = !1,
                                x, _, w, C, T, E;
                            if (y) {
                                if (e) {
                                    for (; b;) {
                                        for (C = f; C = C[b];)
                                            if (g ? C.nodeName.toLowerCase() === v : 1 === C.nodeType) return !1;
                                        E = b = "only" === i && !E && "nextSibling"
                                    }
                                    return !0
                                }
                                if (E = [u ? y.firstChild : y.lastChild], u && r) {
                                    for (C = y, w = C[me] || (C[me] = {}), _ = w[C.uniqueID] || (w[C.uniqueID] = {}), x = _[i] || [], T = x[0] === he && x[1], s = T && x[2], C = T && y.childNodes[T]; C = ++T && C && C[b] || (s = T = 0) || E.pop();)
                                        if (1 === C.nodeType && ++s && C === f) {
                                            _[i] = [he, T, s];
                                            break
                                        }
                                } else if (r && (C = f, w = C[me] || (C[me] = {}), _ = w[C.uniqueID] || (w[C.uniqueID] = {}), x = _[i] || [], T = x[0] === he && x[1], s = T), !1 === s)
                                    for (;
                                        (C = ++T && C && C[b] || (s = T = 0) || E.pop()) && !((g ? C.nodeName.toLowerCase() === v : 1 === C.nodeType) && ++s && (r && (w = C[me] || (C[me] = {}), _ = w[C.uniqueID] || (w[C.uniqueID] = {}), _[i] = [he, s]), C === f)););
                                return s -= d, s === a || 0 == s % a && 0 <= s / a
                            }
                        }
                    },
                    PSEUDO: function (t, n) {
                        var o = Ae.pseudos[t] || Ae.setFilters[t.toLowerCase()] || N.error("unsupported pseudo: " + t),
                            e;
                        return o[me] ? o(n) : 1 < o.length ? (e = [t, t, "", n], Ae.setFilters.hasOwnProperty(t.toLowerCase()) ? M(function (e, t) {
                            for (var a = o(e, n), i = a.length, s; i--;) s = H(e, a[i]), e[s] = !(t[s] = a[i])
                        }) : function (t) {
                            return o(t, 0, e)
                        }) : o
                    }
                },
                pseudos: {
                    not: M(function (e) {
                        var t = [],
                            n = [],
                            o = Pe(e.replace(O, "$1"));
                        return o[me] ? M(function (t, n, a, i) {
                            for (var e = o(t, null, i, []), s = t.length, r; s--;)(r = e[s]) && (t[s] = !(n[s] = r))
                        }) : function (i, a, e) {
                            return t[0] = i, o(t, null, e, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: M(function (e) {
                        return function (t) {
                            return 0 < N(e, t).length
                        }
                    }),
                    contains: M(function (e) {
                        return e = e.replace(_e, _),
                            function (t) {
                                return -1 < (t.textContent || t.innerText || Ie(t)).indexOf(e)
                            }
                    }),
                    lang: M(function (e) {
                        return T.test(e || "") || N.error("unsupported lang: " + e), e = e.replace(_e, _).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = ze ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = L.location && L.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === Re
                    },
                    focus: function (e) {
                        return e === We.activeElement && (!We.hasFocus || We.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ae(!1),
                    disabled: ae(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (6 > e.nodeType) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !Ae.pseudos.empty(e)
                    },
                    header: function (e) {
                        return W.test(e.nodeName)
                    },
                    input: function (e) {
                        return V.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: oe(function () {
                        return [0]
                    }),
                    last: oe(function (e, t) {
                        return [t - 1]
                    }),
                    eq: oe(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: oe(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: oe(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: oe(function (e, t, n) {
                        for (var a = 0 > n ? n + t : n; 0 <= --a;) e.push(a);
                        return e
                    }),
                    gt: oe(function (e, t, n) {
                        for (var a = 0 > n ? n + t : n; ++a < t;) e.push(a);
                        return e
                    })
                }
            }, Ae.pseudos.nth = Ae.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) Ae.pseudos[Se] = te(Se);
        for (Se in {
                submit: !0,
                reset: !0
            }) Ae.pseudos[Se] = ne(Se);
        return se.prototype = Ae.filters = Ae.pseudos, Ae.setFilters = new se, Le = N.tokenize = function (t, n) {
            var a = y[t + " "],
                o, s, r, l, d, p, u;
            if (a) return n ? 0 : a.slice(0);
            for (d = t, p = [], u = Ae.preFilter; d;) {
                for (l in o && !(s = P.exec(d)) || (s && (d = d.slice(s[0].length) || d), p.push(r = [])), o = !1, (s = Q.exec(d)) && (o = s.shift(), r.push({
                        value: o,
                        type: s[0].replace(O, " ")
                    }), d = d.slice(o.length)), Ae.filter)(s = U[l].exec(d)) && (!u[l] || (s = u[l](s))) && (o = s.shift(), r.push({
                    value: o,
                    type: l,
                    matches: s
                }), d = d.slice(o.length));
                if (!o) break
            }
            return n ? d.length : d ? N.error(t) : y(t, p).slice(0)
        }, (Pe = N.compile = function (t, n) {
            var a = [],
                o = [],
                e = z[t + " "],
                i;
            if (!e) {
                for (n || (n = Le(t)), i = n.length; i--;) e = ge(n[i]), e[me] ? a.push(e) : o.push(e);
                e = z(t, fe(o, a)), e.selector = t
            }
            return e
        }, Oe = N.select = function (t, o, s, r) {
            var d = "function" == typeof t && t,
                p = !r && Le(t = d.selector || t),
                n, u, g, m, h;
            if (s = s || [], 1 === p.length) {
                if (u = p[0] = p[0].slice(0), 2 < u.length && "ID" === (g = u[0]).type && 9 === o.nodeType && ze && Ae.relative[u[1].type]) {
                    if (o = (Ae.find.ID(g.matches[0].replace(_e, _), o) || [])[0], !o) return s;
                    d && (o = o.parentNode), t = t.slice(u.shift().value.length)
                }
                for (n = U.needsContext.test(t) ? 0 : u.length; n-- && (g = u[n], !Ae.relative[m = g.type]);)
                    if ((h = Ae.find[m]) && (r = h(g.matches[0].replace(_e, _), Z.test(u[0].type) && ie(o.parentNode) || o))) {
                        if (u.splice(n, 1), t = r.length && re(u), !t) return F.apply(s, r), s;
                        break
                    }
            }
            return (d || Pe(t, p))(r, o, !ze, s, !o || Z.test(t) && ie(o.parentNode) || o), s
        }, ke.sortStable = me.split("").sort(A).join("") === me, ke.detectDuplicates = !!$e, He(), ke.sortDetached = K(function (e) {
            return 1 & e.compareDocumentPosition(We.createElement("fieldset"))
        }), K(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || J("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), ke.attributes && K(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || J("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), K(function (e) {
            return null == e.getAttribute("disabled")
        }) || J("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (e, t, n) {
            var a;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }), N)
    }(ee);
    Ue.find = u, Ue.expr = u.selectors, Ue.expr[":"] = Ue.expr.pseudos, Ue.uniqueSort = Ue.unique = u.uniqueSort, Ue.text = u.getText, Ue.isXMLDoc = u.isXML, Ue.contains = u.contains, Ue.escapeSelector = u.escape;
    var m = function (e, t, n) {
            for (var o = [];
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (void 0 !== n && Ue(e).is(n)) break;
                    o.push(e)
                } return o
        },
        h = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        y = Ue.expr.match.needsContext,
        v = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        x = /^.[^:#\[\.,]*$/;
    Ue.filter = function (e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? Ue.find.matchesSelector(o, e) ? [o] : [] : Ue.find.matches(e, Ue.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Ue.fn.extend({
        find: function (t) {
            var n = this.length,
                a = this,
                e, o;
            if ("string" != typeof t) return this.pushStack(Ue(t).filter(function () {
                for (e = 0; e < n; e++)
                    if (Ue.contains(a[e], this)) return !0
            }));
            for (o = this.pushStack([]), e = 0; e < n; e++) Ue.find(t, a[e], o);
            return 1 < n ? Ue.uniqueSort(o) : o
        },
        filter: function (e) {
            return this.pushStack(B(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(B(this, e || [], !0))
        },
        is: function (e) {
            return !!B(this, "string" == typeof e && y.test(e) ? Ue(e) : e || [], !1).length
        }
    });
    var C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        k = Ue.fn.init = function (t, n, a) {
            var o, i;
            if (!t) return this;
            if (a = a || A, "string" == typeof t) {
                if (o = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : C.exec(t), !o || !o[1] && n) return !n || n.jquery ? (n || a).find(t) : this.constructor(n).find(t);
                if (o[1]) {
                    if (n = n instanceof Ue ? n[0] : n, Ue.merge(this, Ue.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : Fe, !0)), v.test(o[1]) && Ue.isPlainObject(n))
                        for (o in n) Ue.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                return i = Fe.getElementById(o[2]), i && (this[0] = i, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : Ue.isFunction(t) ? void 0 === a.ready ? t(Ue) : a.ready(t) : Ue.makeArray(t, this)
        },
        A;
    k.prototype = Ue.fn, A = Ue(Fe);
    var D = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Ue.fn.extend({
        has: function (e) {
            var t = Ue(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (Ue.contains(this, t[e])) return !0
            })
        },
        closest: function (t, n) {
            var a = 0,
                o = this.length,
                e = [],
                i = "string" != typeof t && Ue(t),
                s;
            if (!y.test(t))
                for (; a < o; a++)
                    for (s = this[a]; s && s !== n; s = s.parentNode)
                        if (11 > s.nodeType && (i ? -1 < i.index(s) : 1 === s.nodeType && Ue.find.matchesSelector(s, t))) {
                            e.push(s);
                            break
                        } return this.pushStack(1 < e.length ? Ue.uniqueSort(e) : e)
        },
        index: function (t) {
            return t ? "string" == typeof t ? e.call(Ue(t), this[0]) : e.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(Ue.uniqueSort(Ue.merge(this.get(), Ue(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Ue.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return m(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return m(e, "parentNode", n)
        },
        next: function (e) {
            return E(e, "nextSibling")
        },
        prev: function (e) {
            return E(e, "previousSibling")
        },
        nextAll: function (e) {
            return m(e, "nextSibling")
        },
        prevAll: function (e) {
            return m(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return m(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return m(e, "previousSibling", n)
        },
        siblings: function (e) {
            return h((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return h(e.firstChild)
        },
        contents: function (e) {
            return w(e, "iframe") ? e.contentDocument : (w(e, "template") && (e = e.content || e), Ue.merge([], e.childNodes))
        }
    }, function (t, n) {
        Ue.fn[t] = function (a, o) {
            var i = Ue.map(this, n, a);
            return "Until" !== t.slice(-5) && (o = a), o && "string" == typeof o && (i = Ue.filter(o, i)), 1 < this.length && (I[t] || Ue.uniqueSort(i), D.test(t) && i.reverse()), this.pushStack(i)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    Ue.Callbacks = function (t) {
        t = "string" == typeof t ? K(t) : Ue.extend({}, t);
        var n = [],
            o = [],
            s = -1,
            r = function () {
                for (m = m || t.once, u = l = !0; o.length; s = -1)
                    for (p = o.shift(); ++s < n.length;) !1 === n[s].apply(p[0], p[1]) && t.stopOnFalse && (s = n.length, p = !1);
                t.memory || (p = !1), l = !1, m && (n = p ? [] : "")
            },
            i = {
                add: function () {
                    return n && (p && !l && (s = n.length - 1, o.push(p)), function e(a) {
                        Ue.each(a, function (a, o) {
                            Ue.isFunction(o) ? t.unique && i.has(o) || n.push(o) : o && o.length && "string" !== Ue.type(o) && e(o)
                        })
                    }(arguments), p && !l && r()), this
                },
                remove: function () {
                    return Ue.each(arguments, function (e, t) {
                        for (var a; - 1 < (a = Ue.inArray(t, n, a));) n.splice(a, 1), a <= s && s--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < Ue.inArray(e, n) : 0 < n.length
                },
                empty: function () {
                    return n && (n = []), this
                },
                disable: function () {
                    return m = o = [], n = p = "", this
                },
                disabled: function () {
                    return !n
                },
                lock: function () {
                    return m = o = [], p || l || (n = p = ""), this
                },
                locked: function () {
                    return !!m
                },
                fireWith: function (e, t) {
                    return m || (t = t || [], t = [e, t.slice ? t.slice() : t], o.push(t), l || r()), this
                },
                fire: function () {
                    return i.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!u
                }
            },
            l, p, u, m;
        return i
    }, Ue.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", Ue.Callbacks("memory"), Ue.Callbacks("memory"), 2],
                    ["resolve", "done", Ue.Callbacks("once memory"), Ue.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", Ue.Callbacks("once memory"), Ue.Callbacks("once memory"), 1, "rejected"]
                ],
                a = "pending",
                o = {
                    state: function () {
                        return a
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return o.then(null, e)
                    },
                    pipe: function () {
                        var t = arguments;
                        return Ue.Deferred(function (o) {
                            Ue.each(n, function (n, s) {
                                var r = Ue.isFunction(t[s[4]]) && t[s[4]];
                                i[s[1]](function () {
                                    var e = r && r.apply(this, arguments);
                                    e && Ue.isFunction(e.promise) ? e.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[s[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function (t, o, i) {
                        function s(t, n, o, l) {
                            return function () {
                                var e = this,
                                    d = arguments,
                                    a = function () {
                                        var i, c;
                                        if (!(t < r)) {
                                            if (i = o.apply(e, d), i === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = i && ("object" == typeof i || "function" == typeof i) && i.then, Ue.isFunction(c) ? l ? c.call(i, s(r, n, M, l), s(r, n, N, l)) : (r++, c.call(i, s(r, n, M, l), s(r, n, N, l), s(r, n, M, n.notifyWith))) : (o !== M && (e = void 0, d = [i]), (l || n.resolveWith)(e, d))
                                        }
                                    },
                                    c = l ? a : function () {
                                        try {
                                            a()
                                        } catch (i) {
                                            Ue.Deferred.exceptionHook && Ue.Deferred.exceptionHook(i, c.stackTrace), t + 1 >= r && (o !== N && (e = void 0, d = [i]), n.rejectWith(e, d))
                                        }
                                    };
                                t ? c() : (Ue.Deferred.getStackHook && (c.stackTrace = Ue.Deferred.getStackHook()), ee.setTimeout(c))
                            }
                        }
                        var r = 0;
                        return Ue.Deferred(function (e) {
                            n[0][3].add(s(0, e, Ue.isFunction(i) ? i : M, e.notifyWith)), n[1][3].add(s(0, e, Ue.isFunction(t) ? t : M)), n[2][3].add(s(0, e, Ue.isFunction(o) ? o : N))
                        }).promise()
                    },
                    promise: function (e) {
                        return null == e ? o : Ue.extend(e, o)
                    }
                },
                i = {};
            return Ue.each(n, function (e, t) {
                var s = t[2],
                    r = t[5];
                o[t[1]] = s.add, r && s.add(function () {
                    a = r
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), i[t[0]] = function () {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
                }, i[t[0] + "With"] = s.fireWith
            }), o.promise(i), t && t.call(i, i), i
        },
        when: function (t) {
            var n = arguments.length,
                a = n,
                o = Array(a),
                i = Be.call(arguments),
                e = Ue.Deferred(),
                s = function (t) {
                    return function (a) {
                        o[t] = this, i[t] = 1 < arguments.length ? Be.call(arguments) : a, --n || e.resolveWith(o, i)
                    }
                };
            if (1 >= n && (O(t, e.done(s(a)).resolve, e.reject, !n), "pending" === e.state() || Ue.isFunction(i[a] && i[a].then))) return e.then();
            for (; a--;) O(i[a], s(a), e.reject);
            return e.promise()
        }
    });
    var L = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Ue.Deferred.exceptionHook = function (e, t) {
        ee.console && ee.console.warn && e && L.test(e.name) && ee.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, Ue.readyException = function (e) {
        ee.setTimeout(function () {
            throw e
        })
    };
    var j = Ue.Deferred();
    Ue.fn.ready = function (e) {
        return j.then(e)["catch"](function (e) {
            Ue.readyException(e)
        }), this
    }, Ue.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --Ue.readyWait : Ue.isReady) || (Ue.isReady = !0, !0 !== e && 0 < --Ue.readyWait || j.resolveWith(Fe, [Ue]))
        }
    }), Ue.ready.then = j.then, "complete" !== Fe.readyState && ("loading" === Fe.readyState || Fe.documentElement.doScroll) ? (Fe.addEventListener("DOMContentLoaded", P), ee.addEventListener("load", P)) : ee.setTimeout(Ue.ready);
    var R = function (t, n, a, o, s, r, l) {
            var d = 0,
                c = t.length,
                i = null == a;
            if ("object" === Ue.type(a))
                for (d in s = !0, a) R(t, n, d, a[d], !0, r, l);
            else if (void 0 !== o && (s = !0, Ue.isFunction(o) || (l = !0), i && (l ? (n.call(t, o), n = null) : (i = n, n = function (e, t, n) {
                    return i.call(Ue(e), n)
                })), n))
                for (; d < c; d++) n(t[d], a, l ? o : o.call(t[d], d, n(t[d], a)));
            return s ? t : i ? n.call(t) : c ? n(t[0], a) : r
        },
        T = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    S.uid = 1, S.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, T(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (t, n, a) {
            var o = this.cache(t),
                e;
            if ("string" == typeof n) o[Ue.camelCase(n)] = a;
            else
                for (e in n) o[Ue.camelCase(e)] = n[e];
            return o
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Ue.camelCase(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 === n ? t : n)
        },
        remove: function (e, t) {
            var n = e[this.expando],
                a;
            if (void 0 !== n) {
                if (void 0 !== t)
                    for (Array.isArray(t) ? t = t.map(Ue.camelCase) : (t = Ue.camelCase(t), t = (t in n) ? [t] : t.match(H) || []), a = t.length; a--;) delete n[t[a]];
                (void 0 === t || Ue.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !Ue.isEmptyObject(t)
        }
    };
    var z = new S,
        W = new S,
        q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;
    Ue.extend({
        hasData: function (e) {
            return W.hasData(e) || z.hasData(e)
        },
        data: function (e, t, n) {
            return W.access(e, t, n)
        },
        removeData: function (e, t) {
            W.remove(e, t)
        },
        _data: function (e, t, n) {
            return z.access(e, t, n)
        },
        _removeData: function (e, t) {
            z.remove(e, t)
        }
    }), Ue.fn.extend({
        data: function (t, n) {
            var a = this[0],
                o = a && a.attributes,
                i, s, r;
            if (void 0 === t) {
                if (this.length && (r = W.get(a), 1 === a.nodeType && !z.get(a, "hasDataAttrs"))) {
                    for (i = o.length; i--;) o[i] && (s = o[i].name, 0 === s.indexOf("data-") && (s = Ue.camelCase(s.slice(5)), te(a, s, r[s])));
                    z.set(a, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                W.set(this, t)
            }) : R(this, function (e) {
                var n;
                if (a && void 0 === e) {
                    if (n = W.get(a, t), void 0 !== n) return n;
                    if (n = te(a, t), void 0 !== n) return n
                } else this.each(function () {
                    W.set(this, t, e)
                })
            }, null, n, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                W.remove(this, e)
            })
        }
    }), Ue.extend({
        queue: function (e, t, n) {
            var a;
            if (e) return t = (t || "fx") + "queue", a = z.get(e, t), n && (!a || Array.isArray(n) ? a = z.access(e, t, Ue.makeArray(n)) : a.push(n)), a || []
        },
        dequeue: function (t, n) {
            n = n || "fx";
            var a = Ue.queue(t, n),
                o = a.length,
                i = a.shift(),
                s = Ue._queueHooks(t, n),
                r = function () {
                    Ue.dequeue(t, n)
                };
            "inprogress" === i && (i = a.shift(), o--), i && ("fx" === n && a.unshift("inprogress"), delete s.stop, i.call(t, r, s)), !o && s && s.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return z.get(e, n) || z.access(e, n, {
                empty: Ue.Callbacks("once memory").add(function () {
                    z.remove(e, [t + "queue", n])
                })
            })
        }
    }), Ue.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ue.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Ue.queue(this, e, t);
                Ue._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ue.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                Ue.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (t, n) {
            var o = 1,
                i = Ue.Deferred(),
                e = this,
                s = this.length,
                r = function () {
                    --o || i.resolveWith(e, [e])
                },
                l;
            for ("string" != typeof t && (n = t, t = void 0), t = t || "fx"; s--;) l = z.get(e[s], t + "queueHooks"), l && l.empty && (o++, l.empty.add(r));
            return r(), i.promise(n)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        Q = ["Top", "Right", "Bottom", "Left"],
        G = function (e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && Ue.contains(e.ownerDocument, e) && "none" === Ue.css(e, "display")
        },
        Z = function (t, n, a, o) {
            var i = {},
                s, r;
            for (r in n) i[r] = t.style[r], t.style[r] = n[r];
            for (r in s = a.apply(t, o || []), n) t.style[r] = i[r];
            return s
        },
        J = {};
    Ue.fn.extend({
        show: function () {
            return ae(this, !0)
        },
        hide: function () {
            return ae(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                G(this) ? Ue(this).show() : Ue(this).hide()
            })
        }
    });
    var Ve = /^(?:checkbox|radio)$/i,
        Ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var Ze = /<|&#?\w+;/;
    ! function () {
        var e = Fe.createDocumentFragment(),
            t = e.appendChild(Fe.createElement("div")),
            a = Fe.createElement("input");
        a.setAttribute("type", "radio"), a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), t.appendChild(a), n.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", n.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Je = Fe.documentElement,
        et = /^key/,
        tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        nt = /^([^.]*)(?:\.(.+)|)/;
    Ue.event = {
        global: {},
        add: function (t, a, s, r, d) {
            var u = z.get(t),
                y, v, x, _, w, C, T, E, S, A, I;
            if (u)
                for (s.handler && (y = s, s = y.handler, d = y.selector), d && Ue.find.matchesSelector(Je, d), s.guid || (s.guid = Ue.guid++), (_ = u.events) || (_ = u.events = {}), (v = u.handle) || (v = u.handle = function (e) {
                        return "undefined" != typeof Ue && Ue.event.triggered !== e.type ? Ue.event.dispatch.apply(t, arguments) : void 0
                    }), a = (a || "").match(H) || [""], w = a.length; w--;) x = nt.exec(a[w]) || [], S = I = x[1], A = (x[2] || "").split(".").sort(), S && (T = Ue.event.special[S] || {}, S = (d ? T.delegateType : T.bindType) || S, T = Ue.event.special[S] || {}, C = Ue.extend({
                    type: S,
                    origType: I,
                    data: r,
                    handler: s,
                    guid: s.guid,
                    selector: d,
                    needsContext: d && Ue.expr.match.needsContext.test(d),
                    namespace: A.join(".")
                }, y), (E = _[S]) || (E = _[S] = [], E.delegateCount = 0, T.setup && !1 !== T.setup.call(t, r, A, v) || t.addEventListener && t.addEventListener(S, v)), T.add && (T.add.call(t, C), C.handler.guid || (C.handler.guid = s.guid)), d ? E.splice(E.delegateCount++, 0, C) : E.push(C), Ue.event.global[S] = !0)
        },
        remove: function (t, a, s, r, d) {
            var e = z.hasData(t) && z.get(t),
                c, u, y, v, x, _, w, C, T, E, S;
            if (e && (v = e.events)) {
                for (a = (a || "").match(H) || [""], x = a.length; x--;)
                    if (y = nt.exec(a[x]) || [], T = S = y[1], E = (y[2] || "").split(".").sort(), T) {
                        for (w = Ue.event.special[T] || {}, T = (r ? w.delegateType : w.bindType) || T, C = v[T] || [], y = y[2] && new RegExp("(^|\\.)" + E.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = c = C.length; c--;) _ = C[c], !d && S !== _.origType || s && s.guid !== _.guid || y && !y.test(_.namespace) || r && r !== _.selector && ("**" !== r || !_.selector) || (C.splice(c, 1), _.selector && C.delegateCount--, w.remove && w.remove.call(t, _));
                        u && !C.length && (w.teardown && !1 !== w.teardown.call(t, E, e.handle) || Ue.removeEvent(t, T, e.handle), delete v[T])
                    } else
                        for (T in v) Ue.event.remove(t, T + a[x], s, r, !0);
                Ue.isEmptyObject(v) && z.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var n = Ue.event.fix(t),
                a = Array(arguments.length),
                o = (z.get(this, "events") || {})[n.type] || [],
                i = Ue.event.special[n.type] || {},
                s, r, l, p, u, m;
            for (a[0] = n, s = 1; s < arguments.length; s++) a[s] = arguments[s];
            if (n.delegateTarget = this, !i.preDispatch || !1 !== i.preDispatch.call(this, n)) {
                for (m = Ue.event.handlers.call(this, n, o), s = 0;
                    (p = m[s++]) && !n.isPropagationStopped();)
                    for (n.currentTarget = p.elem, r = 0;
                        (u = p.handlers[r++]) && !n.isImmediatePropagationStopped();) n.rnamespace && !n.rnamespace.test(u.namespace) || (n.handleObj = u, n.data = u.data, l = ((Ue.event.special[u.origType] || {}).handle || u.handler).apply(p.elem, a), void 0 !== l && !1 === (n.result = l) && (n.preventDefault(), n.stopPropagation()));
                return i.postDispatch && i.postDispatch.call(this, n), n.result
            }
        },
        handlers: function (t, n) {
            var a = [],
                o = n.delegateCount,
                i = t.target,
                s, r, l, p, u;
            if (o && i.nodeType && !("click" === t.type && 1 <= t.button))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && ("click" !== t.type || !0 !== i.disabled)) {
                        for (p = [], u = {}, s = 0; s < o; s++) r = n[s], l = r.selector + " ", void 0 === u[l] && (u[l] = r.needsContext ? -1 < Ue(l, this).index(i) : Ue.find(l, this, null, [i]).length), u[l] && p.push(r);
                        p.length && a.push({
                            elem: i,
                            handlers: p
                        })
                    } return i = this, o < n.length && a.push({
                elem: i,
                handlers: n.slice(o)
            }), a
        },
        addProp: function (e, t) {
            Object.defineProperty(Ue.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: Ue.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[Ue.expando] ? e : new Ue.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== de() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === de() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && w(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return w(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, Ue.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, Ue.Event = function (e, t) {
        return this instanceof Ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? re : le, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ue.extend(this, t), this.timeStamp = e && e.timeStamp || Ue.now(), void(this[Ue.expando] = !0)) : new Ue.Event(e, t)
    }, Ue.Event.prototype = {
        constructor: Ue.Event,
        isDefaultPrevented: le,
        isPropagationStopped: le,
        isImmediatePropagationStopped: le,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = re, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = re, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = re, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Ue.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && et.test(e.type) ? null == e.charCode ? e.keyCode : e.charCode : !e.which && void 0 !== t && tt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, Ue.event.addProp), Ue.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Ue.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
                var a = this,
                    o = n.relatedTarget,
                    e = n.handleObj,
                    i;
                return o && (o === a || Ue.contains(a, o)) || (n.type = e.origType, i = e.handler.apply(this, arguments), n.type = t), i
            }
        }
    }), Ue.fn.extend({
        on: function (e, t, n, a) {
            return ce(this, e, t, n, a)
        },
        one: function (e, t, n, a) {
            return ce(this, e, t, n, a, 1)
        },
        off: function (t, n, a) {
            var o, i;
            if (t && t.preventDefault && t.handleObj) return o = t.handleObj, Ue(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" == typeof t) {
                for (i in t) this.off(i, n, t[i]);
                return this
            }
            return !1 !== n && "function" != typeof n || (a = n, n = void 0), !1 === a && (a = le), this.each(function () {
                Ue.event.remove(this, t, a, n)
            })
        }
    });
    var at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ot = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        st = /^true\/(.*)/,
        rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Ue.extend({
        htmlPrefilter: function (e) {
            return e.replace(at, "<$1></$2>")
        },
        clone: function (t, a, o) {
            var s = t.cloneNode(!0),
                r = Ue.contains(t.ownerDocument, t),
                i, l, c, p;
            if (!(n.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Ue.isXMLDoc(t)))
                for (p = oe(s), c = oe(t), i = 0, l = c.length; i < l; i++) me(c[i], p[i]);
            if (a)
                if (o)
                    for (c = c || oe(t), p = p || oe(s), i = 0, l = c.length; i < l; i++) fe(c[i], p[i]);
                else fe(t, s);
            return p = oe(s, "script"), 0 < p.length && ie(p, !r && oe(t, "script")), s
        },
        cleanData: function (t) {
            for (var n = Ue.event.special, e = 0, a, o, i; void 0 !== (o = t[e]); e++)
                if (T(o)) {
                    if (a = o[z.expando]) {
                        if (a.events)
                            for (i in a.events) n[i] ? Ue.event.remove(o, i) : Ue.removeEvent(o, i, a.handle);
                        o[z.expando] = void 0
                    }
                    o[W.expando] && (o[W.expando] = void 0)
                }
        }
    }), Ue.fn.extend({
        detach: function (e) {
            return be(this, e, !0)
        },
        remove: function (e) {
            return be(this, e)
        },
        text: function (e) {
            return R(this, function (e) {
                return void 0 === e ? Ue.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return he(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pe(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return he(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return he(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return he(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e = 0, t; null != (t = this[e]); e++) 1 === t.nodeType && (Ue.cleanData(oe(t, !1)), t.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Ue.clone(this, e, t)
            })
        },
        html: function (e) {
            return R(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ot.test(e) && !Ge[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Ue.htmlPrefilter(e);
                    try {
                        for (; n < o; n++) t = this[n] || {}, 1 === t.nodeType && (Ue.cleanData(oe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (t) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return he(this, arguments, function (t) {
                var n = this.parentNode;
                0 > Ue.inArray(this, e) && (Ue.cleanData(oe(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), Ue.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Ue.fn[e] = function (n) {
            for (var a = [], o = Ue(n), e = o.length - 1, i = 0, s; i <= e; i++) s = i == e ? this : this.clone(!0), Ue(o[i])[t](s), Ye.apply(a, s.get());
            return this.pushStack(a)
        }
    });
    var lt = /^margin/,
        dt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        ct = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = ee), t.getComputedStyle(e)
        };
    ! function () {
        function t() {
            if (o) {
                o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Je.appendChild(a);
                var e = ee.getComputedStyle(o);
                s = "1%" !== e.top, d = "2px" === e.marginLeft, r = "4px" === e.width, o.style.marginRight = "50%", l = "4px" === e.marginRight, Je.removeChild(a), o = null
            }
        }
        var a = Fe.createElement("div"),
            o = Fe.createElement("div"),
            s, r, l, d;
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", n.clearCloneStyle = "content-box" === o.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(o), Ue.extend(n, {
            pixelPosition: function () {
                return t(), s
            },
            boxSizingReliable: function () {
                return t(), r
            },
            pixelMarginRight: function () {
                return t(), l
            },
            reliableMarginLeft: function () {
                return t(), d
            }
        }))
    }();
    var pt = /^(none|table(?!-c[ea]).+)/,
        ut = /^--/,
        gt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ft = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        mt = ["Webkit", "Moz", "ms"],
        ht = Fe.createElement("div").style;
    Ue.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = ye(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (t, a, o, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r = Ue.camelCase(a),
                    l = ut.test(a),
                    i = t.style,
                    d, p, u;
                return l || (a = _e(r)), u = Ue.cssHooks[a] || Ue.cssHooks[r], void 0 === o ? u && "get" in u && void 0 !== (d = u.get(t, !1, s)) ? d : i[a] : (p = typeof o, "string" === p && (d = U.exec(o)) && d[1] && (o = _(t, a, d), p = "number"), null != o && o === o && ("number" === p && (o += d && d[3] || (Ue.cssNumber[r] ? "" : "px")), n.clearCloneStyle || "" !== o || 0 !== a.indexOf("background") || (i[a] = "inherit"), u && "set" in u && void 0 === (o = u.set(t, o, s)) || (l ? i.setProperty(a, o) : i[a] = o)), void 0)
            }
        },
        css: function (t, n, a, o) {
            var s = Ue.camelCase(n),
                r = ut.test(n),
                i, l, d;
            return r || (n = _e(s)), d = Ue.cssHooks[n] || Ue.cssHooks[s], d && "get" in d && (i = d.get(t, !0, a)), void 0 === i && (i = ye(t, n, o)), "normal" === i && n in ft && (i = ft[n]), "" === a || a ? (l = parseFloat(i), !0 === a || isFinite(l) ? l || 0 : i) : i
        }
    }), Ue.each(["height", "width"], function (e, t) {
        Ue.cssHooks[t] = {
            get: function (e, n, a) {
                if (n) return !pt.test(Ue.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Te(e, t, a) : Z(e, gt, function () {
                    return Te(e, t, a)
                })
            },
            set: function (n, a, o) {
                var i = o && ct(n),
                    s = o && Ce(n, t, o, "border-box" === Ue.css(n, "boxSizing", !1, i), i),
                    r;
                return s && (r = U.exec(a)) && "px" !== (r[3] || "px") && (n.style[t] = a, a = Ue.css(n, t)), we(n, a, s)
            }
        }
    }), Ue.cssHooks.marginLeft = ve(n.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(ye(e, "marginLeft")) || e.getBoundingClientRect().left - Z(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), Ue.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, n) {
        Ue.cssHooks[t + n] = {
            expand: function (a) {
                for (var o = 0, i = {}, e = "string" == typeof a ? a.split(" ") : [a]; 4 > o; o++) i[t + Q[o] + n] = e[o] || e[o - 2] || e[0];
                return i
            }
        }, lt.test(t) || (Ue.cssHooks[t + n].set = we)
    }), Ue.fn.extend({
        css: function (e, t) {
            return R(this, function (t, n, a) {
                var o = {},
                    i = 0,
                    s, r;
                if (Array.isArray(n)) {
                    for (s = ct(t), r = n.length; i < r; i++) o[n[i]] = Ue.css(t, n[i], !1, s);
                    return o
                }
                return void 0 === a ? Ue.css(t, n) : Ue.style(t, n, a)
            }, e, t, 1 < arguments.length)
        }
    }), Ue.Tween = Ee, Ee.prototype = {
        constructor: Ee,
        init: function (t, n, a, o, i, e) {
            this.elem = t, this.prop = a, this.easing = i || Ue.easing._default, this.options = n, this.start = this.now = this.cur(), this.end = o, this.unit = e || (Ue.cssNumber[a] ? "" : "px")
        },
        cur: function () {
            var e = Ee.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ee.propHooks._default.get(this)
        },
        run: function (e) {
            var t = Ee.propHooks[this.prop],
                n;
            return this.pos = this.options.duration ? n = Ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : n = e, this.now = (this.end - this.start) * n + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : Ee.propHooks._default.set(this), this
        }
    }, Ee.prototype.init.prototype = Ee.prototype, Ee.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ue.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function (e) {
                Ue.fx.step[e.prop] ? Ue.fx.step[e.prop](e) : 1 === e.elem.nodeType && (null != e.elem.style[Ue.cssProps[e.prop]] || Ue.cssHooks[e.prop]) ? Ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Ee.propHooks.scrollTop = Ee.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Ue.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, Ue.fx = Ee.prototype.init, Ue.fx.step = {};
    var bt = /^(?:toggle|show|hide)$/,
        yt = /queueHooks$/,
        vt, xt;
    Ue.Animation = Ue.extend(Pe, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return _(n.elem, e, U.exec(t), n), n
                }]
            },
            tweener: function (t, n) {
                Ue.isFunction(t) ? (n = t, t = ["*"]) : t = t.match(H);
                for (var o = 0, i = t.length, e; o < i; o++) e = t[o], Pe.tweeners[e] = Pe.tweeners[e] || [], Pe.tweeners[e].unshift(n)
            },
            prefilters: [De],
            prefilter: function (e, t) {
                t ? Pe.prefilters.unshift(e) : Pe.prefilters.push(e)
            }
        }), Ue.speed = function (e, t, n) {
            var a = e && "object" == typeof e ? Ue.extend({}, e) : {
                complete: n || !n && t || Ue.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !Ue.isFunction(t) && t
            };
            return Ue.fx.off ? a.duration = 0 : "number" != typeof a.duration && (a.duration in Ue.fx.speeds ? a.duration = Ue.fx.speeds[a.duration] : a.duration = Ue.fx.speeds._default), null != a.queue && !0 !== a.queue || (a.queue = "fx"), a.old = a.complete, a.complete = function () {
                Ue.isFunction(a.old) && a.old.call(this), a.queue && Ue.dequeue(this, a.queue)
            }, a
        }, Ue.fn.extend({
            fadeTo: function (e, t, n, a) {
                return this.filter(G).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, a)
            },
            animate: function (t, n, a, o) {
                var i = Ue.isEmptyObject(t),
                    e = Ue.speed(n, a, o),
                    s = function () {
                        var n = Pe(this, Ue.extend({}, t), e);
                        (i || z.get(this, "finish")) && n.stop(!0)
                    };
                return s.finish = s, i || !1 === e.queue ? this.each(s) : this.queue(e.queue, s)
            },
            stop: function (t, e, n) {
                var o = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                    var a = !0,
                        i = null != t && t + "queueHooks",
                        s = Ue.timers,
                        r = z.get(this);
                    if (i) r[i] && r[i].stop && o(r[i]);
                    else
                        for (i in r) r[i] && r[i].stop && yt.test(i) && o(r[i]);
                    for (i = s.length; i--;) s[i].elem !== this || null != t && s[i].queue !== t || (s[i].anim.stop(n), a = !1, s.splice(i, 1));
                    !a && n || Ue.dequeue(this, t)
                })
            },
            finish: function (t) {
                return !1 !== t && (t = t || "fx"), this.each(function () {
                    var n = z.get(this),
                        a = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        e = Ue.timers,
                        i = a ? a.length : 0,
                        s;
                    for (n.finish = !0, Ue.queue(this, t, []), o && o.stop && o.stop.call(this, !0), s = e.length; s--;) e[s].elem === this && e[s].queue === t && (e[s].anim.stop(!0), e.splice(s, 1));
                    for (s = 0; s < i; s++) a[s] && a[s].finish && a[s].finish.call(this);
                    delete n.finish
                })
            }
        }), Ue.each(["toggle", "show", "hide"], function (e, t) {
            var n = Ue.fn[t];
            Ue.fn[t] = function (o, a, i) {
                return null == o || "boolean" == typeof o ? n.apply(this, arguments) : this.animate(Ae(t, !0), o, a, i)
            }
        }), Ue.each({
            slideDown: Ae("show"),
            slideUp: Ae("hide"),
            slideToggle: Ae("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            Ue.fn[e] = function (e, n, a) {
                return this.animate(t, e, n, a)
            }
        }), Ue.timers = [], Ue.fx.tick = function () {
            var e = 0,
                t = Ue.timers,
                n;
            for (vt = Ue.now(); e < t.length; e++) n = t[e], n() || t[e] !== n || t.splice(e--, 1);
            t.length || Ue.fx.stop(), vt = void 0
        }, Ue.fx.timer = function (e) {
            Ue.timers.push(e), Ue.fx.start()
        }, Ue.fx.interval = 13, Ue.fx.start = function () {
            xt || (xt = !0, Se())
        }, Ue.fx.stop = function () {
            xt = null
        }, Ue.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Ue.fn.delay = function (t, e) {
            return t = Ue.fx ? Ue.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (n, a) {
                var o = ee.setTimeout(n, t);
                a.stop = function () {
                    ee.clearTimeout(o)
                }
            })
        },
        function () {
            var e = Fe.createElement("input"),
                t = Fe.createElement("select"),
                o = t.appendChild(Fe.createElement("option"));
            e.type = "checkbox", n.checkOn = "" !== e.value, n.optSelected = o.selected, e = Fe.createElement("input"), e.value = "t", e.type = "radio", n.radioValue = "t" === e.value
        }();
    var _t = Ue.expr.attrHandle,
        wt;
    Ue.fn.extend({
        attr: function (e, t) {
            return R(this, Ue.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                Ue.removeAttr(this, e)
            })
        }
    }), Ue.extend({
        attr: function (t, n, a) {
            var o = t.nodeType,
                i, s;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? Ue.prop(t, n, a) : (1 === o && Ue.isXMLDoc(t) || (s = Ue.attrHooks[n.toLowerCase()] || (Ue.expr.match.bool.test(n) ? wt : void 0)), void 0 === a ? s && "get" in s && null !== (i = s.get(t, n)) ? i : (i = Ue.find.attr(t, n), null == i ? void 0 : i) : null === a ? void Ue.removeAttr(t, n) : s && "set" in s && void 0 !== (i = s.set(t, a, n)) ? i : (t.setAttribute(n, a + ""), a))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!n.radioValue && "radio" === t && w(e, "input")) {
                        var a = e.value;
                        return e.setAttribute("type", t), a && (e.value = a), t
                    }
                }
            }
        },
        removeAttr: function (t, n) {
            var a = 0,
                o = n && n.match(H),
                e;
            if (o && 1 === t.nodeType)
                for (; e = o[a++];) t.removeAttribute(e)
        }
    }), wt = {
        set: function (e, t, n) {
            return !1 === t ? Ue.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Ue.each(Ue.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = _t[t] || Ue.find.attr;
        _t[t] = function (t, a, o) {
            var i = a.toLowerCase(),
                s, r;
            return o || (r = _t[i], _t[i] = s, s = null == n(t, a, o) ? null : i, _t[i] = r), s
        }
    });
    var Ct = /^(?:input|select|textarea|button)$/i,
        Tt = /^(?:a|area)$/i;
    Ue.fn.extend({
        prop: function (e, t) {
            return R(this, Ue.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[Ue.propFix[e] || e]
            })
        }
    }), Ue.extend({
        prop: function (t, n, a) {
            var o = t.nodeType,
                i, s;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Ue.isXMLDoc(t) || (n = Ue.propFix[n] || n, s = Ue.propHooks[n]), void 0 === a ? s && "get" in s && null !== (i = s.get(t, n)) ? i : t[n] : s && "set" in s && void 0 !== (i = s.set(t, a, n)) ? i : t[n] = a
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = Ue.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ct.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), n.optSelected || (Ue.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), Ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Ue.propFix[this.toLowerCase()] = this
    }), Ue.fn.extend({
        addClass: function (t) {
            var n = 0,
                a, o, s, r, l, p, u;
            if (Ue.isFunction(t)) return this.each(function (e) {
                Ue(this).addClass(t.call(this, e, Ne(this)))
            });
            if ("string" == typeof t && t)
                for (a = t.match(H) || []; o = this[n++];)
                    if (r = Ne(o), s = 1 === o.nodeType && " " + Oe(r) + " ") {
                        for (p = 0; l = a[p++];) 0 > s.indexOf(" " + l + " ") && (s += l + " ");
                        u = Oe(s), r !== u && o.setAttribute("class", u)
                    } return this
        },
        removeClass: function (t) {
            var n = 0,
                a, o, s, r, l, p, u;
            if (Ue.isFunction(t)) return this.each(function (e) {
                Ue(this).removeClass(t.call(this, e, Ne(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (a = t.match(H) || []; o = this[n++];)
                    if (r = Ne(o), s = 1 === o.nodeType && " " + Oe(r) + " ") {
                        for (p = 0; l = a[p++];)
                            for (; - 1 < s.indexOf(" " + l + " ");) s = s.replace(" " + l + " ", " ");
                        u = Oe(s), r !== u && o.setAttribute("class", u)
                    } return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" == n ? e ? this.addClass(t) : this.removeClass(t) : Ue.isFunction(t) ? this.each(function (n) {
                Ue(this).toggleClass(t.call(this, n, Ne(this), e), e)
            }) : this.each(function () {
                var a, o, i, s;
                if ("string" == n)
                    for (o = 0, i = Ue(this), s = t.match(H) || []; a = s[o++];) i.hasClass(a) ? i.removeClass(a) : i.addClass(a);
                else void 0 !== t && "boolean" != n || (a = Ne(this), a && z.set(this, "__className__", a), this.setAttribute && this.setAttribute("class", a || !1 === t ? "" : z.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t = 0,
                n, a;
            for (n = " " + e + " "; a = this[t++];)
                if (1 === a.nodeType && -1 < (" " + Oe(Ne(a)) + " ").indexOf(n)) return !0;
            return !1
        }
    });
    var Et = /\r/g;
    Ue.fn.extend({
        val: function (t) {
            var n = this[0],
                a, e, o; {
                if (arguments.length) return o = Ue.isFunction(t), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = o ? t.call(this, n, Ue(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Ue.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), a = Ue.valHooks[this.type] || Ue.valHooks[this.nodeName.toLowerCase()], a && "set" in a && void 0 !== a.set(this, i, "value") || (this.value = i))
                });
                if (n) return a = Ue.valHooks[n.type] || Ue.valHooks[n.nodeName.toLowerCase()], a && "get" in a && void 0 !== (e = a.get(n, "value")) ? e : (e = n.value, "string" == typeof e ? e.replace(Et, "") : null == e ? "" : e)
            }
        }
    }), Ue.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Ue.find.attr(e, "value");
                    return null == t ? Oe(Ue.text(e)) : t
                }
            },
            select: {
                get: function (t) {
                    var n = t.options,
                        e = t.selectedIndex,
                        a = "select-one" === t.type,
                        o = a ? null : [],
                        s = a ? e + 1 : n.length,
                        i, r, l;
                    for (l = 0 > e ? s : a ? e : 0; l < s; l++)
                        if (r = n[l], (r.selected || l === e) && !r.disabled && (!r.parentNode.disabled || !w(r.parentNode, "optgroup"))) {
                            if (i = Ue(r).val(), a) return i;
                            o.push(i)
                        } return o
                },
                set: function (t, n) {
                    for (var a = t.options, e = Ue.makeArray(n), o = a.length, i, s; o--;) s = a[o], (s.selected = -1 < Ue.inArray(Ue.valHooks.option.get(s), e)) && (i = !0);
                    return i, e
                }
            }
        }
    }), Ue.each(["radio", "checkbox"], function () {
        Ue.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < Ue.inArray(Ue(e).val(), t)
            }
        }, n.checkOn || (Ue.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var St = /^(?:focusinfocus|focusoutblur)$/;
    Ue.extend(Ue.event, {
        trigger: function (t, a, s, r) {
            var l = [s || Fe],
                o = Xe.call(t, "type") ? t.type : t,
                d = Xe.call(t, "namespace") ? t.namespace.split(".") : [],
                u, f, y, v, x, _, w;
            if (f = y = s = s || Fe, 3 !== s.nodeType && 8 !== s.nodeType && !St.test(o + Ue.event.triggered) && (-1 < o.indexOf(".") && (d = o.split("."), o = d.shift(), d.sort()), x = 0 > o.indexOf(":") && "on" + o, t = t[Ue.expando] ? t : new Ue.Event(o, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = d.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = s), a = null == a ? [t] : Ue.makeArray(a, [t]), w = Ue.event.special[o] || {}, r || !w.trigger || !1 !== w.trigger.apply(s, a))) {
                if (!r && !w.noBubble && !Ue.isWindow(s)) {
                    for (v = w.delegateType || o, St.test(v + o) || (f = f.parentNode); f; f = f.parentNode) l.push(f), y = f;
                    y === (s.ownerDocument || Fe) && l.push(y.defaultView || y.parentWindow || ee)
                }
                for (u = 0;
                    (f = l[u++]) && !t.isPropagationStopped();) t.type = 1 < u ? v : w.bindType || o, _ = (z.get(f, "events") || {})[t.type] && z.get(f, "handle"), _ && _.apply(f, a), _ = x && f[x], _ && _.apply && T(f) && (t.result = _.apply(f, a), !1 === t.result && t.preventDefault());
                return t.type = o, r || t.isDefaultPrevented() || w._default && !1 !== w._default.apply(l.pop(), a) || !T(s) || x && Ue.isFunction(s[o]) && !Ue.isWindow(s) && (y = s[x], y && (s[x] = null), Ue.event.triggered = o, s[o](), Ue.event.triggered = void 0, y && (s[x] = y)), t.result
            }
        },
        simulate: function (e, t, n) {
            var a = Ue.extend(new Ue.Event, n, {
                type: e,
                isSimulated: !0
            });
            Ue.event.trigger(a, null, t)
        }
    }), Ue.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                Ue.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return Ue.event.trigger(e, t, n, !0)
        }
    }), Ue.each(["blur", "focus", "focusin", "focusout", "resize", "scroll", "click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave", "change", "select", "submit", "keydown", "keypress", "keyup", "contextmenu"], function (e, t) {
        Ue.fn[t] = function (e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), Ue.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), n.focusin = "onfocusin" in ee, n.focusin || Ue.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, n) {
        var a = function (e) {
            Ue.event.simulate(n, e.target, Ue.event.fix(e))
        };
        Ue.event.special[n] = {
            setup: function () {
                var o = this.ownerDocument || this,
                    i = z.access(o, n);
                i || o.addEventListener(t, a, !0), z.access(o, n, (i || 0) + 1)
            },
            teardown: function () {
                var o = this.ownerDocument || this,
                    i = z.access(o, n) - 1;
                i ? z.access(o, n, i) : (o.removeEventListener(t, a, !0), z.remove(o, n))
            }
        }
    });
    var kt = ee.location,
        At = Ue.now(),
        It = /\?/;
    Ue.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new ee.DOMParser().parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || Ue.error("Invalid XML: " + e), t
    };
    var Dt = /\[\]$/,
        Lt = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    Ue.param = function (t, n) {
        var o = [],
            a = function (e, t) {
                var n = Ue.isFunction(t) ? t() : t;
                o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            },
            e;
        if (Array.isArray(t) || t.jquery && !Ue.isPlainObject(t)) Ue.each(t, function () {
            a(this.name, this.value)
        });
        else
            for (e in t) je(e, t[e], n, a);
        return o.join("&")
    }, Ue.fn.extend({
        serialize: function () {
            return Ue.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = Ue.prop(this, "elements");
                return e ? Ue.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Ue(this).is(":disabled") && Ot.test(this.nodeName) && !Pt.test(e) && (this.checked || !Ve.test(e))
            }).map(function (e, t) {
                var n = Ue(this).val();
                return null == n ? null : Array.isArray(n) ? Ue.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        jt = /#.*$/,
        $t = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Rt = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        Mt = {},
        Ft = {},
        Bt = "*/".concat("*"),
        qt = Fe.createElement("a");
    qt.href = kt.href, Ue.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: Wt.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": "*/*",
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": Ue.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? We(We(e, Ue.ajaxSettings), t) : We(Ue.ajaxSettings, e)
        },
        ajaxPrefilter: $e(Mt),
        ajaxTransport: $e(Ft),
        ajax: function (a, r) {
            function d(e, a, i, r) {
                var l = a,
                    d, c, u, g, f;
                P || (P = !0, D && ee.clearTimeout(D), y = void 0, A = r || "", E.readyState = 0 < e ? 4 : 0, d = 200 <= e && 300 > e || 304 === e, i && (g = Re(_, E, i)), g = ze(_, g, E, d), d ? (_.ifModified && (f = E.getResponseHeader("Last-Modified"), f && (Ue.lastModified[S] = f), f = E.getResponseHeader("etag"), f && (Ue.etag[S] = f)), 204 === e || "HEAD" === _.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = g.state, c = g.data, u = g.error, d = !u)) : (u = l, !e && l || (l = "error", 0 > e && (e = 0))), E.status = e, E.statusText = (a || l) + "", d ? C.resolveWith(o, [c, l, E]) : C.rejectWith(o, [E, l, u]), E.statusCode(t), t = void 0, O && p.trigger(d ? "ajaxSuccess" : "ajaxError", [E, _, d ? c : u]), s.fireWith(o, [E, l]), O && (p.trigger("ajaxComplete", [E, _]), --Ue.active || Ue.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (r = a, a = void 0), r = r || {};
            var _ = Ue.ajaxSetup({}, r),
                o = _.context || _,
                p = _.context && (o.nodeType || o.jquery) ? Ue(o) : Ue.event,
                C = Ue.Deferred(),
                s = Ue.Callbacks("once memory"),
                t = _.statusCode || {},
                T = {},
                v = {},
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (P) {
                            if (!I)
                                for (I = {}; t = Ht.exec(A);) I[t[1].toLowerCase()] = t[2];
                            t = I[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return P ? A : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == P && (e = v[e.toLowerCase()] = v[e.toLowerCase()] || e, T[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == P && (_.mimeType = e), this
                    },
                    statusCode: function (e) {
                        if (e)
                            if (P) E.always(e[E.status]);
                            else
                                for (var n in e) t[n] = [t[n], e[n]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return y && y.abort(t), d(0, t), this
                    }
                },
                y, S, A, I, D, L, P, O, N, W;
            if (C.promise(E), _.url = ((a || _.url || kt.href) + "").replace(zt, kt.protocol + "//"), _.type = r.method || r.type || _.method || _.type, _.dataTypes = (_.dataType || "*").toLowerCase().match(H) || [""], null == _.crossDomain) {
                L = Fe.createElement("a");
                try {
                    L.href = _.url, L.href = L.href, _.crossDomain = qt.protocol + "//" + qt.host != L.protocol + "//" + L.host
                } catch (e) {
                    _.crossDomain = !0
                }
            }
            if (_.data && _.processData && "string" != typeof _.data && (_.data = Ue.param(_.data, _.traditional)), He(Mt, _, r, E), P) return E;
            for (N in O = Ue.event && _.global, O && 0 == Ue.active++ && Ue.event.trigger("ajaxStart"), _.type = _.type.toUpperCase(), _.hasContent = !Rt.test(_.type), S = _.url.replace(jt, ""), _.hasContent ? _.data && _.processData && 0 === (_.contentType || "").indexOf("application/x-www-form-urlencoded") && (_.data = _.data.replace(Nt, "+")) : (W = _.url.slice(S.length), _.data && (S += (It.test(S) ? "&" : "?") + _.data, delete _.data), !1 === _.cache && (S = S.replace($t, "$1"), W = (It.test(S) ? "&" : "?") + "_=" + At++ + W), _.url = S + W), _.ifModified && (Ue.lastModified[S] && E.setRequestHeader("If-Modified-Since", Ue.lastModified[S]), Ue.etag[S] && E.setRequestHeader("If-None-Match", Ue.etag[S])), (_.data && _.hasContent && !1 !== _.contentType || r.contentType) && E.setRequestHeader("Content-Type", _.contentType), E.setRequestHeader("Accept", _.dataTypes[0] && _.accepts[_.dataTypes[0]] ? _.accepts[_.dataTypes[0]] + ("*" === _.dataTypes[0] ? "" : ", */*; q=0.01") : _.accepts["*"]), _.headers) E.setRequestHeader(N, _.headers[N]);
            if (_.beforeSend && (!1 === _.beforeSend.call(o, E, _) || P)) return E.abort();
            if (w = "abort", s.add(_.complete), E.done(_.success), E.fail(_.error), y = He(Ft, _, r, E)) {
                if (E.readyState = 1, O && p.trigger("ajaxSend", [E, _]), P) return E;
                _.async && 0 < _.timeout && (D = ee.setTimeout(function () {
                    E.abort("timeout")
                }, _.timeout));
                try {
                    P = !1, y.send(T, d)
                } catch (e) {
                    if (P) throw e;
                    d(-1, e)
                }
            } else d(-1, "No Transport");
            return E
        },
        getJSON: function (e, t, n) {
            return Ue.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Ue.get(e, void 0, t, "script")
        }
    }), Ue.each(["get", "post"], function (e, t) {
        Ue[t] = function (n, a, o, i) {
            return Ue.isFunction(a) && (i = i || o, o = a, a = void 0), Ue.ajax(Ue.extend({
                url: n,
                type: t,
                dataType: i,
                data: a,
                success: o
            }, Ue.isPlainObject(n) && n))
        }
    }), Ue._evalUrl = function (e) {
        return Ue.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, Ue.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (Ue.isFunction(e) && (e = e.call(this[0])), t = Ue(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return Ue.isFunction(e) ? this.each(function (t) {
                Ue(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = Ue(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = Ue.isFunction(e);
            return this.each(function (n) {
                Ue(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                Ue(this).replaceWith(this.childNodes)
            }), this
        }
    }), Ue.expr.pseudos.hidden = function (e) {
        return !Ue.expr.pseudos.visible(e)
    }, Ue.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Ue.ajaxSettings.xhr = function () {
        try {
            return new ee.XMLHttpRequest
        } catch (e) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Xt = Ue.ajaxSettings.xhr();
    n.cors = !!Xt && "withCredentials" in Xt, n.ajax = Xt = !!Xt, Ue.ajaxTransport(function (t) {
        var o, i;
        if (n.cors || Xt && !t.crossDomain) return {
            send: function (n, e) {
                var s = t.xhr(),
                    a;
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                for (a in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) s.setRequestHeader(a, n[a]);
                o = function (t) {
                    return function () {
                        o && (o = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" == typeof s.status ? e(s.status, s.statusText) : e(0, "error") : e(Yt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = o(), i = s.onerror = o("error"), void 0 === s.onabort ? s.onreadystatechange = function () {
                    4 === s.readyState && ee.setTimeout(function () {
                        o && i()
                    })
                } : s.onabort = i, o = o("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        }
    }), Ue.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), Ue.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return Ue.globalEval(e), e
            }
        }
    }), Ue.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Ue.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var n, o;
            return {
                send: function (a, e) {
                    n = Ue("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", o = function (t) {
                        n.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type)
                    }), Fe.head.appendChild(n[0])
                },
                abort: function () {
                    o && o()
                }
            }
        }
    });
    var Ut = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    Ue.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Ut.pop() || Ue.expando + "_" + At++;
            return this[e] = !0, e
        }
    }), Ue.ajaxPrefilter("json jsonp", function (t, n, a) {
        var o = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data"),
            i, s, r;
        if (o || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = Ue.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(Vt, "$1" + i) : !1 !== t.jsonp && (t.url += (It.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return r || Ue.error(i + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = ee[i], ee[i] = function () {
            r = arguments
        }, a.always(function () {
            void 0 === s ? Ue(ee).removeProp(i) : ee[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, Ut.push(i)), r && Ue.isFunction(s) && s(r[0]), r = s = void 0
        }), "script"
    }), n.createHTMLDocument = function () {
        var e = Fe.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), Ue.parseHTML = function (t, a, o) {
        if ("string" != typeof t) return [];
        "boolean" == typeof a && (o = a, a = !1);
        var i, s, r;
        return a || (n.createHTMLDocument ? (a = Fe.implementation.createHTMLDocument(""), i = a.createElement("base"), i.href = Fe.location.href, a.head.appendChild(i)) : a = Fe), s = v.exec(t), r = !o && [], s ? [a.createElement(s[1])] : (s = se([t], a, r), r && r.length && Ue(r).remove(), Ue.merge([], s.childNodes))
    }, Ue.fn.load = function (t, n, o) {
        var i = this,
            s = t.indexOf(" "),
            r, l, p;
        return -1 < s && (r = Oe(t.slice(s)), t = t.slice(0, s)), Ue.isFunction(n) ? (o = n, n = void 0) : n && "object" == typeof n && (l = "POST"), 0 < i.length && Ue.ajax({
            url: t,
            type: l || "GET",
            dataType: "html",
            data: n
        }).done(function (e) {
            p = arguments, i.html(r ? Ue("<div>").append(Ue.parseHTML(e)).find(r) : e)
        }).always(o && function (e, t) {
            i.each(function () {
                o.apply(this, p || [e.responseText, t, e])
            })
        }), this
    }, Ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Ue.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), Ue.expr.pseudos.animated = function (e) {
        return Ue.grep(Ue.timers, function (t) {
            return e === t.elem
        }).length
    }, Ue.offset = {
        setOffset: function (t, n, a) {
            var o = Ue.css(t, "position"),
                s = Ue(t),
                r = {},
                l, c, p, u, m, y, v;
            "static" === o && (t.style.position = "relative"), m = s.offset(), p = Ue.css(t, "top"), y = Ue.css(t, "left"), v = ("absolute" === o || "fixed" === o) && -1 < (p + y).indexOf("auto"), v ? (l = s.position(), u = l.top, c = l.left) : (u = parseFloat(p) || 0, c = parseFloat(y) || 0), Ue.isFunction(n) && (n = n.call(t, a, Ue.extend({}, m))), null != n.top && (r.top = n.top - m.top + u), null != n.left && (r.left = n.left - m.left + c), "using" in n ? n.using.call(t, r) : s.css(r)
        }
    }, Ue.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                Ue.offset.setOffset(this, t, e)
            });
            var n = this[0],
                a, o, i, s;
            if (n) return n.getClientRects().length ? (i = n.getBoundingClientRect(), a = n.ownerDocument, o = a.documentElement, s = a.defaultView, {
                top: i.top + s.pageYOffset - o.clientTop,
                left: i.left + s.pageXOffset - o.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var e = this[0],
                    t = {
                        top: 0,
                        left: 0
                    },
                    n, o;
                return "fixed" === Ue.css(e, "position") ? o = e.getBoundingClientRect() : (n = this.offsetParent(), o = this.offset(), w(n[0], "html") || (t = n.offset()), t = {
                    top: t.top + Ue.css(n[0], "borderTopWidth", !0),
                    left: t.left + Ue.css(n[0], "borderLeftWidth", !0)
                }), {
                    top: o.top - t.top - Ue.css(e, "marginTop", !0),
                    left: o.left - t.left - Ue.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === Ue.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), Ue.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        Ue.fn[e] = function (a) {
            return R(this, function (o, a, i) {
                var e;
                return Ue.isWindow(o) ? e = o : 9 === o.nodeType && (e = o.defaultView), void 0 === i ? e ? e[t] : o[a] : void(e ? e.scrollTo(n ? e.pageXOffset : i, n ? i : e.pageYOffset) : o[a] = i)
            }, e, a, arguments.length)
        }
    }), Ue.each(["top", "left"], function (e, t) {
        Ue.cssHooks[t] = ve(n.pixelPosition, function (e, n) {
            if (n) return n = ye(e, t), dt.test(n) ? Ue(e).position()[t] + "px" : n
        })
    }), Ue.each({
        Height: "height",
        Width: "width"
    }, function (t, n) {
        Ue.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function (a, o) {
            Ue.fn[o] = function (i, e) {
                var s = arguments.length && (a || "boolean" != typeof i),
                    r = a || (!0 === i || !0 === e ? "margin" : "border");
                return R(this, function (n, a, i) {
                    var e;
                    return Ue.isWindow(n) ? 0 === o.indexOf("outer") ? n["inner" + t] : n.document.documentElement["client" + t] : 9 === n.nodeType ? (e = n.documentElement, Math.max(n.body["scroll" + t], e["scroll" + t], n.body["offset" + t], e["offset" + t], e["client" + t])) : void 0 === i ? Ue.css(n, a, r) : Ue.style(n, a, i, r)
                }, n, s ? i : void 0, s)
            }
        })
    }), Ue.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, a) {
            return this.on(t, e, n, a)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), Ue.holdReady = function (e) {
        e ? Ue.readyWait++ : Ue.ready(!0)
    }, Ue.isArray = Array.isArray, Ue.parseJSON = JSON.parse, Ue.nodeName = w, "function" == typeof define && define.amd && define("jquery", [], function () {
        return Ue
    });
    var Kt = ee.jQuery,
        Qt = ee.$;
    return Ue.noConflict = function (e) {
        return ee.$ === Ue && (ee.$ = Qt), e && ee.jQuery === Ue && (ee.jQuery = Kt), Ue
    }, a || (ee.jQuery = ee.$ = Ue), Ue
}), ! function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("undefined" == typeof jQuery ? window.Zepto : jQuery)
}(function (I) {
    "use strict";

    function e(e) {
        var t = e.data;
        e.isDefaultPrevented() || (e.preventDefault(), I(e.target).ajaxSubmit(t))
    }

    function a(e) {
        var t = e.target,
            s = I(t);
        if (!s.is("[type=submit],[type=image]")) {
            var a = s.closest("[type=submit]");
            if (0 === a.length) return;
            t = a[0]
        }
        var n = this;
        if (n.clk = t, "image" == t.type)
            if (void 0 !== e.offsetX) n.clk_x = e.offsetX, n.clk_y = e.offsetY;
            else if ("function" == typeof I.fn.offset) {
            var i = s.offset();
            n.clk_x = e.pageX - i.left, n.clk_y = e.pageY - i.top
        } else n.clk_x = e.pageX - t.offsetLeft, n.clk_y = e.pageY - t.offsetTop;
        setTimeout(function () {
            n.clk = n.clk_x = n.clk_y = null
        }, 100)
    }

    function y() {
        if (I.fn.ajaxSubmit.debug) {
            var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
        }
    }
    var i = {
            fileapi: void 0 !== I("<input type='file'/>").get(0).files,
            formdata: void 0 !== window.FormData
        },
        t = !!I.fn.prop;
    I.fn.attr2 = function () {
        if (!t) return this.attr.apply(this, arguments);
        var n = this.prop.apply(this, arguments);
        return n && n.jquery || "string" == typeof n ? n : this.attr.apply(this, arguments)
    }, I.fn.ajaxSubmit = function (P) {
        function e(e) {
            function i(n) {
                var e = null;
                try {
                    n.contentWindow && (e = n.contentWindow.document)
                } catch (t) {
                    y("cannot get iframe.contentWindow document: " + t)
                }
                if (e) return e;
                try {
                    e = n.contentDocument ? n.contentDocument : n.document
                } catch (t) {
                    y("cannot get iframe.contentDocument: " + t), e = n.document
                }
                return e
            }

            function n() {
                var e = N.attr2("target"),
                    t = N.attr2("action"),
                    n = N.attr("enctype") || N.attr("encoding") || "multipart/form-data";
                u.setAttribute("target", m), _ && !/post/i.test(_) || u.setAttribute("method", "POST"), t != T.url && u.setAttribute("action", T.url), T.skipEncodingOverride || _ && !/post/i.test(_) || N.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), T.timeout && (B = setTimeout(function () {
                    z = !0, w(1)
                }, T.timeout));
                var a = [];
                try {
                    if (T.extraData)
                        for (var o in T.extraData) T.extraData.hasOwnProperty(o) && (I.isPlainObject(T.extraData[o]) && T.extraData[o].hasOwnProperty("name") && T.extraData[o].hasOwnProperty("value") ? a.push(I("<input type=\"hidden\" name=\"" + T.extraData[o].name + "\">").val(T.extraData[o].value).appendTo(u)[0]) : a.push(I("<input type=\"hidden\" name=\"" + o + "\">").val(T.extraData[o]).appendTo(u)[0]));
                    T.iframeTarget || O.appendTo("body"), j.attachEvent ? j.attachEvent("onload", w) : j.addEventListener("load", w, !1), setTimeout(function n() {
                        try {
                            var e = i(j).readyState;
                            y("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(n, 50)
                        } catch (t) {
                            y("Server abort: ", t, " (", t.name, ")"), w(2), B && clearTimeout(B), B = void 0
                        }
                    }, 15);
                    try {
                        u.submit()
                    } catch (t) {
                        document.createElement("form").submit.apply(u)
                    }
                } finally {
                    u.setAttribute("action", t), u.setAttribute("enctype", n), e ? u.setAttribute("target", e) : N.removeAttr("target"), I(a).remove()
                }
            }

            function w(e) {
                if (!H.aborted && !K) {
                    if ((V = i(j)) || (y("cannot access response document"), e = 2), e === 1 && H) return H.abort("timeout"), void S.reject(H, "timeout");
                    if (2 == e && H) return H.abort("server abort"), void S.reject(H, "error", "server abort");
                    if (V && V.location.href != T.iframeSrc || z) {
                        j.detachEvent ? j.detachEvent("onload", w) : j.removeEventListener("load", w, !1);
                        var l = "success",
                            d;
                        try {
                            if (z) throw "timeout";
                            var c = "xml" == T.dataType || V.XMLDocument || I.isXMLDoc(V);
                            if (y("isXml=" + c), !c && window.opera && (null === V.body || !V.body.innerHTML) && --k) return y("requeing onLoad callback, DOM not available"), void setTimeout(w, 250);
                            var n = V.body ? V.body : V.documentElement;
                            H.responseText = n ? n.innerHTML : null, H.responseXML = V.XMLDocument ? V.XMLDocument : V, c && (T.dataType = "xml"), H.getResponseHeader = function (t) {
                                return {
                                    "content-type": T.dataType
                                } [t.toLowerCase()]
                            }, n && (H.status = +n.getAttribute("status") || H.status, H.statusText = n.getAttribute("statusText") || H.statusText);
                            var o = (T.dataType || "").toLowerCase(),
                                s = /(json|script|text)/.test(o);
                            if (s || T.textarea) {
                                var p = V.getElementsByTagName("textarea")[0];
                                if (p) H.responseText = p.value, H.status = +p.getAttribute("status") || H.status, H.statusText = p.getAttribute("statusText") || H.statusText;
                                else if (s) {
                                    var u = V.getElementsByTagName("pre")[0],
                                        g = V.getElementsByTagName("body")[0];
                                    u ? H.responseText = u.textContent ? u.textContent : u.innerText : g && (H.responseText = g.textContent ? g.textContent : g.innerText)
                                }
                            } else "xml" == o && !H.responseXML && H.responseText && (H.responseXML = Y(H.responseText));
                            try {
                                U = C(H, o, T)
                            } catch (t) {
                                l = "parsererror", H.error = d = t || l
                            }
                        } catch (t) {
                            y("error caught: ", t), l = "error", H.error = d = t || l
                        }
                        H.aborted && (y("upload aborted"), l = null), H.status && (l = 200 <= H.status && 300 > H.status || 304 === H.status ? "success" : "error"), "success" === l ? (T.success && T.success.call(T.context, U, "success", H), S.resolve(H.responseText, "success", H), A && I.event.trigger("ajaxSuccess", [H, T])) : l && (void 0 === d && (d = H.statusText), T.error && T.error.call(T.context, H, l, d), S.reject(H, "error", d), A && I.event.trigger("ajaxError", [H, T, d])), A && I.event.trigger("ajaxComplete", [H, T]), A && !--I.active && I.event.trigger("ajaxStop"), T.complete && T.complete.call(T.context, H, l), K = !0, T.timeout && clearTimeout(B), setTimeout(function () {
                            T.iframeTarget ? O.attr("src", T.iframeSrc) : O.remove(), H.responseXML = null
                        }, 100)
                    }
                }
            }
            var u = N[0],
                S = I.Deferred(),
                a, r, T, A, m, O, j, H, W, R, z, B;
            if (S.abort = function (t) {
                    H.abort(t)
                }, e)
                for (r = 0; r < E.length; r++) a = I(E[r]), t ? a.prop("disabled", !1) : a.removeAttr("disabled");
            if ((T = I.extend(!0, {}, I.ajaxSettings, P)).context = T.context || T, m = "jqFormIO" + new Date().getTime(), T.iframeTarget ? (R = (O = I(T.iframeTarget)).attr2("name")) ? m = R : O.attr2("name", m) : (O = I("<iframe name=\"" + m + "\" src=\"" + T.iframeSrc + "\" />")).css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                }), j = O[0], H = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {},
                    getResponseHeader: function () {},
                    setRequestHeader: function () {},
                    abort: function (e) {
                        var t = "timeout" === e ? "timeout" : "aborted";
                        y("aborting upload... " + t), this.aborted = 1;
                        try {
                            j.contentWindow.document.execCommand && j.contentWindow.document.execCommand("Stop")
                        } catch (t) {}
                        O.attr("src", T.iframeSrc), H.error = t, T.error && T.error.call(T.context, H, t, e), A && I.event.trigger("ajaxError", [H, T, t]), T.complete && T.complete.call(T.context, H, t)
                    }
                }, (A = T.global) && 0 == I.active++ && I.event.trigger("ajaxStart"), A && I.event.trigger("ajaxSend", [H, T]), T.beforeSend && !1 === T.beforeSend.call(T.context, H, T)) return T.global && I.active--, S.reject(), S;
            if (H.aborted) return S.reject(), S;
            (W = u.clk) && (R = W.name) && !W.disabled && (T.extraData = T.extraData || {}, T.extraData[R] = W.value, "image" == W.type && (T.extraData[R + ".x"] = u.clk_x, T.extraData[R + ".y"] = u.clk_y));
            var q = I("meta[name=csrf-token]").attr("content"),
                D = I("meta[name=csrf-param]").attr("content");
            D && q && (T.extraData = T.extraData || {}, T.extraData[D] = q), T.forceSync ? n() : setTimeout(n, 10);
            var k = 50,
                Y = I.parseXML || function (n, e) {
                    return window.ActiveXObject ? ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(n)) : e = new DOMParser().parseFromString(n, "text/xml"), e && e.documentElement && "parsererror" != e.documentElement.nodeName ? e : null
                },
                X = I.parseJSON || function (t) {
                    return window.eval("(" + t + ")")
                },
                C = function (e, t, s) {
                    var a = e.getResponseHeader("content-type") || "",
                        n = "xml" === t || !t && 0 <= a.indexOf("xml"),
                        i = n ? e.responseXML : e.responseText;
                    return n && "parsererror" === i.documentElement.nodeName && I.error && I.error("parsererror"), s && s.dataFilter && (i = s.dataFilter(i, t)), "string" == typeof i && ("json" === t || !t && 0 <= a.indexOf("json") ? i = X(i) : ("script" === t || !t && 0 <= a.indexOf("javascript")) && I.globalEval(i)), i
                },
                U, V, K;
            return S
        }
        if (!this.length) return y("ajaxSubmit: skipping submit process - no element selected"), this;
        var N = this,
            _, r, u;
        "function" == typeof P ? P = {
            success: P
        } : void 0 === P && (P = {}), _ = P.type || this.attr2("method"), (u = (u = "string" == typeof (r = P.url || this.attr2("action")) ? I.trim(r) : "") || window.location.href || "") && (u = (u.match(/^([^#]+)/) || [])[1]), P = I.extend(!0, {
            url: u,
            success: I.ajaxSettings.success,
            type: _ || I.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, P);
        var C = {};
        if (this.trigger("form-pre-serialize", [this, P, C]), C.veto) return y("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (P.beforeSerialize && !1 === P.beforeSerialize(this, P)) return y("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var c = P.traditional;
        void 0 === c && (c = I.ajaxSettings.traditional);
        var E = [],
            m = this.formToArray(P.semantic, E),
            d;
        if (P.data && (P.extraData = P.data, d = I.param(P.data, c)), P.beforeSubmit && !1 === P.beforeSubmit(m, this, P)) return y("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [m, this, P, C]), C.veto) return y("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var S = I.param(m, c);
        d && (S = S ? S + "&" + d : d), "GET" == P.type.toUpperCase() ? (P.url += (0 <= P.url.indexOf("?") ? "&" : "?") + S, P.data = null) : P.data = S;
        var k = [];
        if (P.resetForm && k.push(function () {
                N.resetForm()
            }), P.clearForm && k.push(function () {
                N.clearForm(P.includeHidden)
            }), !P.dataType && P.target) {
            var h = P.success || function () {};
            k.push(function (e) {
                var t = P.replaceTarget ? "replaceWith" : "html";
                I(P.target)[t](e).each(h, arguments)
            })
        } else P.success && k.push(P.success);
        if (P.success = function (a, e, t) {
                for (var s = P.context || this, n = 0, r = k.length; n < r; n++) k[n].apply(s, [a, e, t || N, N])
            }, P.error) {
            var v = P.error;
            P.error = function (a, e, t) {
                var o = P.context || this;
                v.apply(o, [a, e, t, N])
            }
        }
        if (P.complete) {
            var g = P.complete;
            P.complete = function (n, e) {
                var t = P.context || this;
                g.apply(t, [n, e, N])
            }
        }
        var x = 0 < I("input[type=file]:enabled", this).filter(function () {
                return "" !== I(this).val()
            }).length,
            b = N.attr("enctype") == "multipart/form-data" || N.attr("encoding") == "multipart/form-data",
            T = i.fileapi && i.formdata;
        y("fileAPI :" + T);
        var A;
        !1 !== P.iframe && (P.iframe || (x || b) && !T) ? P.closeKeepAlive ? I.get(P.closeKeepAlive, function () {
            A = e(m)
        }) : A = e(m) : A = (x || b) && T ? function (e) {
            for (var n = new FormData, t = 0; t < e.length; t++) n.append(e[t].name, e[t].value);
            if (P.extraData) {
                var a = function (e) {
                    var t = I.param(e, P.traditional).split("&"),
                        a = t.length,
                        o = [],
                        i, s;
                    for (i = 0; i < a; i++) t[i] = t[i].replace(/\+/g, " "), s = t[i].split("="), o.push([decodeURIComponent(s[0]), decodeURIComponent(s[1])]);
                    return o
                }(P.extraData);
                for (t = 0; t < a.length; t++) a[t] && n.append(a[t][0], a[t][1])
            }
            P.data = null;
            var o = I.extend(!0, {}, I.ajaxSettings, P, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: _ || "POST"
            });
            P.uploadProgress && (o.xhr = function () {
                var e = I.ajaxSettings.xhr();
                return e.upload && e.upload.addEventListener("progress", function (a) {
                    var e = 0,
                        o = a.loaded || a.position,
                        i = a.total;
                    a.lengthComputable && (e = Math.ceil(100 * (o / i))), P.uploadProgress(a, o, i, e)
                }, !1), e
            }), o.data = null;
            var s = o.beforeSend;
            return o.beforeSend = function (a, e) {
                e.data = P.formData ? P.formData : n, s && s.call(this, a, e)
            }, I.ajax(o)
        }(m) : I.ajax(P), N.removeData("jqxhr").data("jqxhr", A);
        for (var L = 0; L < E.length; L++) E[L] = null;
        return this.trigger("form-submit-notify", [this, P]), this
    }, I.fn.ajaxForm = function (n) {
        if ((n = n || {}).delegation = n.delegation && I.isFunction(I.fn.on), !n.delegation && 0 === this.length) {
            var o = {
                s: this.selector,
                c: this.context
            };
            return !I.isReady && o.s ? (y("DOM not ready, queuing ajaxForm"), I(function () {
                I(o.s, o.c).ajaxForm(n)
            }), this) : (y("terminating; zero elements found by selector" + (I.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (I(document).off("submit.form-plugin", this.selector, e).off("click.form-plugin", this.selector, a).on("submit.form-plugin", this.selector, n, e).on("click.form-plugin", this.selector, n, a), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, e).bind("click.form-plugin", n, a)
    }, I.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, I.fn.formToArray = function (e, t) {
        var a = [];
        if (0 === this.length) return a;
        var n = this[0],
            r = this.attr("id"),
            d = e ? n.getElementsByTagName("*") : n.elements,
            p, b, y, _, w, C, T, E;
        if (d && !/MSIE [678]/.test(navigator.userAgent) && (d = I(d).get()), r && (p = I(":input[form=\"" + r + "\"]").get()).length && (d = (d || []).concat(p)), !d || !d.length) return a;
        for (b = 0, T = d.length; b < T; b++)
            if ((_ = (C = d[b]).name) && !C.disabled)
                if (e && n.clk && "image" == C.type) n.clk == C && (a.push({
                    name: _,
                    value: I(C).val(),
                    type: C.type
                }), a.push({
                    name: _ + ".x",
                    value: n.clk_x
                }, {
                    name: _ + ".y",
                    value: n.clk_y
                }));
                else if ((w = I.fieldValue(C, !0)) && w.constructor == Array)
            for (t && t.push(C), y = 0, E = w.length; y < E; y++) a.push({
                name: _,
                value: w[y]
            });
        else if (i.fileapi && "file" == C.type) {
            t && t.push(C);
            var S = C.files;
            if (S.length)
                for (y = 0; y < S.length; y++) a.push({
                    name: _,
                    value: S[y],
                    type: C.type
                });
            else a.push({
                name: _,
                value: "",
                type: C.type
            })
        } else null !== w && void 0 !== w && (t && t.push(C), a.push({
            name: _,
            value: w,
            type: C.type,
            required: C.required
        }));
        if (!e && n.clk) {
            var v = I(n.clk),
                g = v[0];
            (_ = g.name) && !g.disabled && "image" == g.type && (a.push({
                name: _,
                value: v.val()
            }), a.push({
                name: _ + ".x",
                value: n.clk_x
            }, {
                name: _ + ".y",
                value: n.clk_y
            }))
        }
        return a
    }, I.fn.formSerialize = function (e) {
        return I.param(this.formToArray(e))
    }, I.fn.fieldSerialize = function (e) {
        var t = [];
        return this.each(function () {
            var s = this.name;
            if (s) {
                var a = I.fieldValue(this, e);
                if (a && a.constructor == Array)
                    for (var n = 0, r = a.length; n < r; n++) t.push({
                        name: s,
                        value: a[n]
                    });
                else null !== a && void 0 !== a && t.push({
                    name: this.name,
                    value: a
                })
            }
        }), I.param(t)
    }, I.fn.fieldValue = function (e) {
        for (var t = [], s = 0, r = this.length; s < r; s++) {
            var n = this[s],
                i = I.fieldValue(n, e);
            null !== i && void 0 !== i && (i.constructor != Array || i.length) && (i.constructor == Array ? I.merge(t, i) : t.push(i))
        }
        return t
    }, I.fieldValue = function (e, t) {
        var p = e.name,
            a = e.type,
            n = e.tagName.toLowerCase();
        if (void 0 === t && (t = !0), t && (!p || e.disabled || "reset" == a || "button" == a || ("checkbox" == a || "radio" == a) && !e.checked || ("submit" == a || "image" == a) && e.form && e.form.clk != e || "select" == n && -1 == e.selectedIndex)) return null;
        if ("select" == n) {
            var i = e.selectedIndex;
            if (0 > i) return null;
            for (var o = [], s = e.options, u = "select-one" == a, c = u ? i + 1 : s.length, l = u ? i : 0, g; l < c; l++)
                if (g = s[l], g.selected) {
                    var h = g.value;
                    if (h || (h = g.attributes && g.attributes.value && !g.attributes.value.specified ? g.text : g.value), u) return h;
                    o.push(h)
                } return o
        }
        return I(e).val()
    }, I.fn.clearForm = function (e) {
        return this.each(function () {
            I("input,select,textarea", this).clearFields(e)
        })
    }, I.fn.clearFields = I.fn.clearInputs = function (e) {
        var t = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var o = this.type,
                a = this.tagName.toLowerCase();
            t.test(o) || "textarea" == a ? this.value = "" : "checkbox" == o || "radio" == o ? this.checked = !1 : "select" == a ? this.selectedIndex = -1 : "file" == o ? /MSIE/.test(navigator.userAgent) ? I(this).replaceWith(I(this).clone(!0)) : I(this).val("") : e && (!0 === e && /hidden/.test(o) || "string" == typeof e && I(this).is(e)) && (this.value = "")
        })
    }, I.fn.resetForm = function () {
        return this.each(function () {
            "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset()
        })
    }, I.fn.enable = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            this.disabled = !t
        })
    }, I.fn.selected = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            var t = this.type;
            if ("checkbox" == t || "radio" == t) this.checked = e;
            else if ("option" == this.tagName.toLowerCase()) {
                var n = I(this).parent("select");
                e && n[0] && "select-one" == n[0].type && n.find("option").selected(!1), this.selected = e
            }
        })
    }, I.fn.ajaxSubmit.debug = !1
}), ! function () {
    "use strict";

    function t(_) {
        function g(e, c) {
            var p = e == window,
                o = c && void 0 !== c.message ? c.message : void 0,
                b, k;
            if (c = _.extend({}, _.blockUI.defaults, c || {}), !c.ignoreIfBlocked || !_(e).data("blockUI.isBlocked")) {
                if (c.overlayCSS = _.extend({}, _.blockUI.defaults.overlayCSS, c.overlayCSS || {}), b = _.extend({}, _.blockUI.defaults.css, c.css || {}), c.onOverlayClick && (c.overlayCSS.cursor = "pointer"), k = _.extend({}, _.blockUI.defaults.themedCSS, c.themedCSS || {}), o = void 0 === o ? c.message : o, p && u && A(window, {
                        fadeOut: 0
                    }), o && "string" != typeof o && (o.parentNode || o.jquery)) {
                    var P = o.jquery ? o[0] : o,
                        m = {};
                    _(e).data("blockUI.history", m), m.el = P, m.parent = P.parentNode, m.display = P.style.display, m.position = P.style.position, m.parent && m.parent.removeChild(P)
                }
                _(e).data("blockUI.onUnblock", c.onUnblock);
                var v = c.baseZ,
                    N, R, F, q;
                N = _(l || c.forceIframe ? "<iframe class=\"blockUI\" style=\"z-index:" + v++ + ";display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0\" src=\"" + c.iframeSrc + "\"></iframe>" : "<div class=\"blockUI\" style=\"display:none\"></div>"), R = _(c.theme ? "<div class=\"blockUI blockOverlay ui-widget-overlay\" style=\"z-index:" + v++ + ";display:none\"></div>" : "<div class=\"blockUI blockOverlay\" style=\"z-index:" + v++ + ";display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0\"></div>"), c.theme && p ? (q = "<div class=\"blockUI " + c.blockMsgClass + " blockPage ui-dialog ui-widget ui-corner-all\" style=\"z-index:" + (v + 10) + ";display:none;position:fixed\">", c.title && (q += "<div class=\"ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle\">" + (c.title || "&nbsp;") + "</div>"), q += "<div class=\"ui-widget-content ui-dialog-content\"></div>", q += "</div>") : c.theme ? (q = "<div class=\"blockUI " + c.blockMsgClass + " blockElement ui-dialog ui-widget ui-corner-all\" style=\"z-index:" + (v + 10) + ";display:none;position:absolute\">", c.title && (q += "<div class=\"ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle\">" + (c.title || "&nbsp;") + "</div>"), q += "<div class=\"ui-widget-content ui-dialog-content\"></div>", q += "</div>") : q = p ? "<div class=\"blockUI " + c.blockMsgClass + " blockPage\" style=\"z-index:" + (v + 10) + ";display:none;position:fixed\"></div>" : "<div class=\"blockUI " + c.blockMsgClass + " blockElement\" style=\"z-index:" + (v + 10) + ";display:none;position:absolute\"></div>", F = _(q), o && (c.theme ? (F.css(k), F.addClass("ui-widget-content")) : F.css(b)), c.theme || R.css(c.overlayCSS), R.css("position", p ? "fixed" : "absolute"), (l || c.forceIframe) && N.css("opacity", 0);
                var Y = [N, R, F],
                    C = _(p ? "body" : e);
                _.each(Y, function () {
                    this.appendTo(C)
                }), c.theme && c.draggable && _.fn.draggable && F.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var S = d && (!_.support.boxModel || 0 < _("object,embed", p ? null : e).length);
                if (r || S) {
                    if (p && c.allowBodyStretch && _.support.boxModel && _("html,body").css("height", "100%"), (r || !_.support.boxModel) && !p) var O = a(e, "borderTopWidth"),
                        E = a(e, "borderLeftWidth"),
                        T = O ? "(0 - " + O + ")" : 0,
                        M = E ? "(0 - " + E + ")" : 0;
                    _.each(Y, function (n, e) {
                        var t = e[0].style;
                        if (t.position = "absolute", 2 > n) p ? t.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + c.quirksmodeOffsetHack + ") + \"px\"") : t.setExpression("height", "this.parentNode.offsetHeight + \"px\""), p ? t.setExpression("width", "jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + \"px\"") : t.setExpression("width", "this.parentNode.offsetWidth + \"px\""), M && t.setExpression("left", M), T && t.setExpression("top", T);
                        else if (c.centerY) p && t.setExpression("top", "(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + \"px\""), t.marginTop = 0;
                        else if (!c.centerY && p) {
                            var a = c.css && c.css.top ? parseInt(c.css.top, 10) : 0;
                            t.setExpression("top", "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + a + ") + \"px\"")
                        }
                    })
                }
                if (o && (c.theme ? F.find(".ui-widget-content").append(o) : F.append(o), (o.jquery || o.nodeType) && _(o).show()), (l || c.forceIframe) && c.showOverlay && N.show(), c.fadeIn) {
                    var B = c.onBlock ? c.onBlock : t,
                        j = c.showOverlay && !o ? B : t,
                        H = o ? B : t;
                    c.showOverlay && R._fadeIn(c.fadeIn, j), o && F._fadeIn(c.fadeIn, H)
                } else c.showOverlay && R.show(), o && F.show(), c.onBlock && c.onBlock.bind(F)();
                if (D(1, e, c), p ? (u = F[0], f = _(c.focusableElements, u), c.focusInput && setTimeout(L, 20)) : i(F[0], c.centerX, c.centerY), c.timeout) {
                    var z = setTimeout(function () {
                        p ? _.unblockUI(c) : _(e).unblock(c)
                    }, c.timeout);
                    _(e).data("blockUI.timeout", z)
                }
            }
        }

        function A(n, t) {
            var i = n == window,
                l = _(n),
                a = l.data("blockUI.history"),
                d = l.data("blockUI.timeout"),
                c;
            d && (clearTimeout(d), l.removeData("blockUI.timeout")), t = _.extend({}, _.blockUI.defaults, t || {}), D(0, n, t), null === t.onUnblock && (t.onUnblock = l.data("blockUI.onUnblock"), l.removeData("blockUI.onUnblock"));
            var p;
            p = i ? _("body").children().filter(".blockUI").add("body > .blockUI") : l.find(">.blockUI"), t.cursorReset && (1 < p.length && (p[1].style.cursor = t.cursorReset), 2 < p.length && (p[2].style.cursor = t.cursorReset)), i && (u = f = null), t.fadeOut ? (c = p.length, p.stop().fadeOut(t.fadeOut, function () {
                0 == --c && e(p, a, t, n)
            })) : e(p, a, t, n)
        }

        function e(e, t, o, n) {
            var i = _(n);
            if (!i.data("blockUI.isBlocked")) {
                e.each(function () {
                    this.parentNode && this.parentNode.removeChild(this)
                }), t && t.el && (t.el.style.display = t.display, t.el.style.position = t.position, t.el.style.cursor = "default", t.parent && t.parent.appendChild(t.el), i.removeData("blockUI.history")), i.data("blockUI.static") && i.css("position", "static"), "function" == typeof o.onUnblock && o.onUnblock(n, o);
                var s = _(document.body),
                    r = s.width(),
                    a = s[0].style.width;
                s.width(r - 1).width(r), s[0].style.width = a
            }
        }

        function D(e, t, a) {
            var n = t == window,
                i = _(t);
            if ((e || (!n || u) && (n || i.data("blockUI.isBlocked"))) && (i.data("blockUI.isBlocked", e), n && a.bindEvents && (!e || a.showOverlay))) {
                e ? _(document).bind("mousedown mouseup keydown keypress keyup touchstart touchend touchmove", a, o) : _(document).unbind("mousedown mouseup keydown keypress keyup touchstart touchend touchmove", o)
            }
        }

        function o(e) {
            if ("keydown" === e.type && e.keyCode && 9 == e.keyCode && u && e.data.constrainTabKey) {
                var t = f,
                    o = !e.shiftKey && e.target === t[t.length - 1],
                    n = e.shiftKey && e.target === t[0];
                if (o || n) return setTimeout(function () {
                    L(n)
                }, 10), !1
            }
            var i = e.data,
                s = _(e.target);
            return s.hasClass("blockOverlay") && i.onOverlayClick && i.onOverlayClick(e), !!(0 < s.parents("div." + i.blockMsgClass).length) || 0 === s.parents().children().filter("div.blockUI").length
        }

        function L(n) {
            if (f) {
                var e = f[!0 === n ? f.length - 1 : 0];
                e && e.focus()
            }
        }

        function i(r, e, t) {
            var o = r.parentNode,
                n = r.style,
                i = (o.offsetWidth - r.offsetWidth) / 2 - a(o, "borderLeftWidth"),
                s = (o.offsetHeight - r.offsetHeight) / 2 - a(o, "borderTopWidth");
            e && (n.left = 0 < i ? i + "px" : "0"), t && (n.top = 0 < s ? s + "px" : "0")
        }

        function a(e, t) {
            return parseInt(_.css(e, t), 10) || 0
        }
        _.fn._fadeIn = _.fn.fadeIn;
        var t = _.noop || function () {},
            l = /MSIE/.test(navigator.userAgent),
            r = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            d = (document.documentMode || 0, _.isFunction(document.createElement("div").style.setExpression));
        _.blockUI = function (t) {
            g(window, t)
        }, _.unblockUI = function (t) {
            A(window, t)
        }, _.growlUI = function (e, t, a, o) {
            var i = _("<div class=\"growlUI\"></div>");
            e && i.append("<h1>" + e + "</h1>"), t && i.append("<h2>" + t + "</h2>"), void 0 === a && (a = 3e3);
            var s = function (e) {
                e = e || {}, _.blockUI({
                    message: i,
                    fadeIn: "undefined" == typeof e.fadeIn ? 700 : e.fadeIn,
                    fadeOut: "undefined" == typeof e.fadeOut ? 1e3 : e.fadeOut,
                    timeout: "undefined" == typeof e.timeout ? a : e.timeout,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: o,
                    css: _.blockUI.defaults.growlCSS
                })
            };
            s(), i.css("opacity"), i.mouseover(function () {
                s({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var e = _(".blockMsg");
                e.stop(), e.fadeTo(300, 1)
            }).mouseout(function () {
                _(".blockMsg").fadeOut(1e3)
            })
        }, _.fn.block = function (e) {
            if (this[0] === window) return _.blockUI(e), this;
            var a = _.extend({}, _.blockUI.defaults, e || {});
            return this.each(function () {
                var e = _(this);
                a.ignoreIfBlocked && e.data("blockUI.isBlocked") || e.unblock({
                    fadeOut: 0
                })
            }), this.each(function () {
                "static" == _.css(this, "position") && (this.style.position = "relative", _(this).data("blockUI.static", !0)), this.style.zoom = 1, g(this, e)
            })
        }, _.fn.unblock = function (e) {
            return this[0] === window ? (_.unblockUI(e), this) : this.each(function () {
                A(this, e)
            })
        }, _.blockUI.version = 2.7, _.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var u = null,
            f = []
    }
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
}(),
function (n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.Popper = e()
}(this, function () {
    "use strict";

    function ce(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function ue(n, e) {
        if (1 !== n.nodeType) return [];
        var t = window.getComputedStyle(n, null);
        return e ? t[e] : t
    }

    function t(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function ge(n) {
        if (!n || -1 !== ["HTML", "BODY", "#document"].indexOf(n.nodeName)) return window.document.body;
        var e = ue(n),
            a = e.overflow,
            o = e.overflowX,
            i = e.overflowY;
        return /(auto|scroll)/.test(a + i + o) ? n : ge(t(n))
    }

    function he(t) {
        var e = t && t.offsetParent,
            n = e && e.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === ue(e, "position") ? he(e) : e : window.document.documentElement
    }

    function r(n) {
        var e = n.nodeName;
        return "BODY" !== e && ("HTML" === e || he(n.firstElementChild) === n)
    }

    function p(t) {
        return null === t.parentNode ? t : p(t.parentNode)
    }

    function be(s, e) {
        if (!s || !s.nodeType || !e || !e.nodeType) return window.document.documentElement;
        var t = s.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = t ? s : e,
            i = t ? e : s,
            n = document.createRange();
        n.setStart(o, 0), n.setEnd(i, 0);
        var a = n.commonAncestorContainer;
        if (s !== a && e !== a || o.contains(i)) return r(a) ? a : he(a);
        var l = p(s);
        return l.host ? be(l.host, e) : be(s, p(e).host)
    }

    function d(a) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            t = "top" === e ? "scrollTop" : "scrollLeft",
            o = a.nodeName;
        if ("BODY" === o || "HTML" === o) {
            var i = window.document.documentElement,
                n = window.document.scrollingElement || i;
            return n[t]
        }
        return a[t]
    }

    function n(a, e) {
        var t = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            o = d(e, "top"),
            i = d(e, "left"),
            n = t ? -1 : 1;
        return a.top += o * n, a.bottom += o * n, a.left += i * n, a.right += i * n, a
    }

    function a(n, e) {
        var t = "x" === e ? "Left" : "Top",
            a = "Left" == t ? "Right" : "Bottom";
        return +n["border" + t + "Width"].split("px")[0] + +n["border" + a + "Width"].split("px")[0]
    }

    function s(n, e, t, a) {
        return _(e["offset" + n], e["scroll" + n], t["client" + n], t["offset" + n], t["scroll" + n], G() ? t["offset" + n] + a["margin" + ("Height" === n ? "Top" : "Left")] + a["margin" + ("Height" === n ? "Bottom" : "Right")] : 0)
    }

    function ye() {
        var n = window.document.body,
            e = window.document.documentElement,
            t = G() && window.getComputedStyle(e);
        return {
            height: s("Height", n, e, t),
            width: s("Width", n, e, t)
        }
    }

    function ve(t) {
        return oe({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function xe(t) {
        var e = {};
        if (G()) try {
            e = t.getBoundingClientRect();
            var c = d(t, "top"),
                i = d(t, "left");
            e.top += c, e.left += i, e.bottom += c, e.right += i
        } catch (t) {} else e = t.getBoundingClientRect();
        var n = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            r = "HTML" === t.nodeName ? ye() : {},
            p = r.width || t.clientWidth || n.right - n.left,
            s = r.height || t.clientHeight || n.bottom - n.top,
            u = t.offsetWidth - p,
            f = t.offsetHeight - s;
        if (u || f) {
            var h = ue(t);
            u -= a(h, "x"), f -= a(h, "y"), n.width -= u, n.height -= f
        }
        return ve(n)
    }

    function c(t, e) {
        var o = G(),
            i = "HTML" === e.nodeName,
            r = xe(t),
            l = xe(e),
            s = ge(t),
            d = ue(e),
            a = +d.borderTopWidth.split("px")[0],
            p = +d.borderLeftWidth.split("px")[0],
            g = ve({
                top: r.top - l.top - a,
                left: r.left - l.left - p,
                width: r.width,
                height: r.height
            });
        if (g.marginTop = 0, g.marginLeft = 0, !o && i) {
            var f = +d.marginTop.split("px")[0],
                u = +d.marginLeft.split("px")[0];
            g.top -= a - f, g.bottom -= a - f, g.left -= p - u, g.right -= p - u, g.marginTop = f, g.marginLeft = u
        }
        return (o ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (g = n(g, e)), g
    }

    function o(a) {
        var e = window.document.documentElement,
            t = c(a, e),
            o = _(e.clientWidth, window.innerWidth || 0),
            i = _(e.clientHeight, window.innerHeight || 0),
            n = d(e),
            r = d(e, "left"),
            l = {
                top: n - t.top + t.marginTop,
                left: r - t.left + t.marginLeft,
                width: o,
                height: i
            };
        return ve(l)
    }

    function u(n) {
        var e = n.nodeName;
        return "BODY" !== e && "HTML" !== e && ("fixed" === ue(n, "position") || u(t(n)))
    }

    function g(n, e, d, i) {
        var r = {
                top: 0,
                left: 0
            },
            g = be(n, e);
        if ("viewport" === i) r = o(g);
        else {
            var s;
            "scrollParent" === i ? (s = ge(t(n)), "BODY" === s.nodeName && (s = window.document.documentElement)) : "window" === i ? s = window.document.documentElement : s = i;
            var b = c(s, g);
            if ("HTML" === s.nodeName && !u(g)) {
                var l = ye(),
                    f = l.height,
                    m = l.width;
                r.top += b.top - b.marginTop, r.bottom = f + b.top, r.left += b.left - b.marginLeft, r.right = m + b.left
            } else r = b
        }
        return r.left += d, r.top += d, r.right -= d, r.bottom -= d, r
    }

    function l(n) {
        var e = n.width,
            t = n.height;
        return e * t
    }

    function f(c, e, u, t, o) {
        var n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === c.indexOf("auto")) return c;
        var i = g(u, t, n, o),
            r = {
                top: {
                    width: i.width,
                    height: e.top - i.top
                },
                right: {
                    width: i.right - e.right,
                    height: i.height
                },
                bottom: {
                    width: i.width,
                    height: i.bottom - e.bottom
                },
                left: {
                    width: e.left - i.left,
                    height: i.height
                }
            },
            s = Object.keys(r).map(function (t) {
                return oe({
                    key: t
                }, r[t], {
                    area: l(r[t])
                })
            }).sort(function (n, e) {
                return e.area - n.area
            }),
            d = s.filter(function (n) {
                var e = n.width,
                    t = n.height;
                return e >= u.clientWidth && t >= u.clientHeight
            }),
            a = 0 < d.length ? d[0].key : s[0].key,
            p = c.split("-")[1];
        return a + (p ? "-" + p : "")
    }

    function m(n, e, t) {
        var a = be(e, t);
        return c(t, a)
    }

    function h(a) {
        var e = window.getComputedStyle(a),
            t = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            o = parseFloat(e.marginLeft) + parseFloat(e.marginRight),
            i = {
                width: a.offsetWidth + o,
                height: a.offsetHeight + t
            };
        return i
    }

    function v(n) {
        var a = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return n.replace(/left|right|bottom|top/g, function (t) {
            return a[t]
        })
    }

    function x(l, e, t) {
        t = t.split("-")[0];
        var c = h(l),
            i = {
                width: c.width,
                height: c.height
            },
            n = -1 !== ["right", "left"].indexOf(t),
            r = n ? "top" : "left",
            p = n ? "left" : "top",
            s = n ? "height" : "width",
            d = n ? "width" : "height";
        return i[r] = e[r] + e[s] / 2 - c[s] / 2, i[p] = t === p ? e[p] - c[d] : e[v(p)], i
    }

    function S(n, e) {
        return Array.prototype.find ? n.find(e) : n.filter(e)[0]
    }

    function e(n, a, t) {
        if (Array.prototype.findIndex) return n.findIndex(function (n) {
            return n[a] === t
        });
        var e = S(n, function (n) {
            return n[a] === t
        });
        return n.indexOf(e)
    }

    function C(a, s, t) {
        var i = void 0 === t ? a : a.slice(0, e(a, "name", t));
        return i.forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && ce(t) && (s.offsets.popper = ve(s.offsets.popper), s.offsets.reference = ve(s.offsets.reference), s = t(s, e))
        }), s
    }

    function b() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = m(this.state, this.popper, this.reference), t.placement = f(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = x(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = C(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
    }

    function y(n, a) {
        return n.some(function (t) {
            var e = t.name,
                n = t.enabled;
            return n && e === a
        })
    }

    function T(a) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], t = a.charAt(0).toUpperCase() + a.slice(1), o = 0; o < e.length - 1; o++) {
            var s = e[o],
                i = s ? "" + s + t : a;
            if ("undefined" != typeof window.document.body.style[i]) return i
        }
        return null
    }

    function w() {
        return this.state.isDestroyed = !0, y(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[T("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function E(n, e, t, a) {
        var o = "BODY" === n.nodeName,
            i = o ? window : n;
        i.addEventListener(e, t, {
            passive: !0
        }), o || E(ge(i.parentNode), e, t, a), a.push(i)
    }

    function k(n, e, t, a) {
        t.updateBound = a, window.addEventListener("resize", t.updateBound, {
            passive: !0
        });
        var o = ge(n);
        return E(o, "scroll", t.updateBound, t.scrollParents), t.scrollElement = o, t.eventsEnabled = !0, t
    }

    function D() {
        this.state.eventsEnabled || (this.state = k(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function A(n, a) {
        return window.removeEventListener("resize", a.updateBound), a.scrollParents.forEach(function (t) {
            t.removeEventListener("scroll", a.updateBound)
        }), a.updateBound = null, a.scrollParents = [], a.scrollElement = null, a.eventsEnabled = !1, a
    }

    function L() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = A(this.reference, this.state))
    }

    function I(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function P(n, e) {
        Object.keys(e).forEach(function (t) {
            var a = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && I(e[t]) && (a = "px"), n.style[t] = e[t] + a
        })
    }

    function O(n, e) {
        Object.keys(e).forEach(function (t) {
            var a = e[t];
            !1 === a ? n.removeAttribute(t) : n.setAttribute(t, e[t])
        })
    }

    function N(a, s, t) {
        var o = S(a, function (t) {
                var e = t.name;
                return e === s
            }),
            e = !!o && a.some(function (n) {
                return n.name === t && n.enabled && n.order < o.order
            });
        if (!e) {
            var n = "`" + s + "`";
            console.warn("`" + t + "` modifier is required by " + n + " modifier in order to work, be sure to include it before " + n + "!")
        }
        return e
    }

    function H(t) {
        return "end" === t ? "start" : "start" === t ? "end" : t
    }

    function j(n) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            t = ae.indexOf(n),
            a = ae.slice(t + 1).concat(ae.slice(0, t));
        return e ? a.reverse() : a
    }

    function W(l, e, t, o) {
        var i = l.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            n = +i[1],
            r = i[2];
        if (!n) return l;
        if (0 === r.indexOf("%")) {
            var c;
            switch (r) {
                case "%p":
                    c = t;
                    break;
                case "%":
                case "%r":
                default:
                    c = o;
            }
            var p = ve(c);
            return p[e] / 100 * n
        }
        if ("vh" === r || "vw" === r) {
            var d;
            return d = "vh" === r ? _(document.documentElement.clientHeight, window.innerHeight || 0) : _(document.documentElement.clientWidth, window.innerWidth || 0), d / 100 * n
        }
        return n
    }

    function R(l, c, t, e) {
        var u = [0, 0],
            o = -1 !== ["right", "left"].indexOf(e),
            n = l.split(/(\+|\-)/).map(function (t) {
                return t.trim()
            }),
            i = n.indexOf(S(n, function (t) {
                return -1 !== t.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var s = /\s*,\s*|\s+/,
            r = -1 === i ? [n] : [n.slice(0, i).concat([n[i].split(s)[0]]), [n[i].split(s)[1]].concat(n.slice(i + 1))];
        return r = r.map(function (a, e) {
            var i = (1 === e ? !o : o) ? "height" : "width",
                n = !1;
            return a.reduce(function (a, e) {
                return "" === a[a.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (a[a.length - 1] = e, n = !0, a) : n ? (a[a.length - 1] += e, n = !1, a) : a.concat(e)
            }, []).map(function (n) {
                return W(n, i, c, t)
            })
        }), r.forEach(function (n, e) {
            n.forEach(function (t, a) {
                I(t) && (u[e] += t * ("-" === n[a - 1] ? -1 : 1))
            })
        }), u
    }

    function M(a, e) {
        var t = e.offset,
            i = a.placement,
            n = a.offsets,
            r = n.popper,
            l = n.reference,
            s = i.split("-")[0],
            d;
        return d = I(+t) ? [+t, 0] : R(t, r, l, s), "left" === s ? (r.top += d[0], r.left -= d[1]) : "right" === s ? (r.top += d[0], r.left += d[1]) : "top" === s ? (r.left += d[0], r.top -= d[1]) : "bottom" === s && (r.left += d[0], r.top += d[1]), a.popper = r, a
    }
    for (var z = Math.min, F = Math.floor, _ = Math.max, B = ["native code", "[object MutationObserverConstructor]"], q = function (n) {
            return B.some(function (e) {
                return -1 < (n || "").toString().indexOf(e)
            })
        }, Y = "undefined" != typeof window, X = ["Edge", "Trident", "Firefox"], U = 0, V = 0; V < X.length; V += 1)
        if (Y && 0 <= navigator.userAgent.indexOf(X[V])) {
            U = 1;
            break
        } var K = Y && q(window.MutationObserver),
        Q = K ? function (a) {
            var e = !1,
                s = 0,
                r = document.createElement("span"),
                i = new MutationObserver(function () {
                    a(), e = !1
                });
            return i.observe(r, {
                    attributes: !0
                }),
                function () {
                    e || (e = !0, r.setAttribute("x-index", s), ++s)
                }
        } : function (n) {
            var e = !1;
            return function () {
                e || (e = !0, setTimeout(function () {
                    e = !1, n()
                }, U))
            }
        },
        G = function () {
            return null == le && (le = -1 !== navigator.appVersion.indexOf("MSIE 10")), le
        },
        Z = function (n, e) {
            if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        J = function () {
            function n(a, e) {
                for (var t = 0, i; t < e.length; t++) i = e[t], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, i.key, i)
            }
            return function (e, t, a) {
                return t && n(e.prototype, t), a && n(e, a), e
            }
        }(),
        ne = function (n, e, t) {
            return e in n ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[e] = t, n
        },
        oe = Object.assign || function (n) {
            for (var e = 1, a; e < arguments.length; e++)
                for (var s in a = arguments[e], a) Object.prototype.hasOwnProperty.call(a, s) && (n[s] = a[s]);
            return n
        },
        ie = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ae = ie.slice(3),
        se = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        re = function () {
            function a(e, t) {
                var o = this,
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Z(this, a), this.scheduleUpdate = function () {
                    return requestAnimationFrame(o.update)
                }, this.update = Q(this.update.bind(this)), this.options = oe({}, a.Defaults, n), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e.jquery ? e[0] : e, this.popper = t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(oe({}, a.Defaults.modifiers, n.modifiers)).forEach(function (t) {
                    o.options.modifiers[t] = oe({}, a.Defaults.modifiers[t] || {}, n.modifiers ? n.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
                    return oe({
                        name: t
                    }, o.options.modifiers[t])
                }).sort(function (n, e) {
                    return n.order - e.order
                }), this.modifiers.forEach(function (e) {
                    e.enabled && ce(e.onLoad) && e.onLoad(o.reference, o.popper, o.options, e, o.state)
                }), this.update();
                var i = this.options.eventsEnabled;
                i && this.enableEventListeners(), this.state.eventsEnabled = i
            }
            return J(a, [{
                key: "update",
                value: function () {
                    return b.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return w.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return D.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return L.call(this)
                }
            }]), a
        }(),
        le;
    return re.Utils = ("undefined" == typeof window ? global : window).PopperUtils, re.placements = ie, re.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {},
        onUpdate: function () {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function (c) {
                    var e = c.placement,
                        t = e.split("-")[0],
                        o = e.split("-")[1];
                    if (o) {
                        var i = c.offsets,
                            n = i.reference,
                            r = i.popper,
                            p = -1 !== ["bottom", "top"].indexOf(t),
                            s = p ? "left" : "top",
                            d = p ? "width" : "height",
                            a = {
                                start: ne({}, s, n[s]),
                                end: ne({}, s, n[s] + n[d] - r[d])
                            };
                        c.offsets.popper = oe({}, r, a[o])
                    }
                    return c
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: M,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function (a, r) {
                    var e = r.boundariesElement || he(a.instance.popper);
                    a.instance.reference === e && (e = he(e));
                    var t = g(a.instance.popper, a.instance.reference, r.padding, e);
                    r.boundaries = t;
                    var i = r.priority,
                        l = a.offsets.popper,
                        n = {
                            primary: function (n) {
                                var e = l[n];
                                return l[n] < t[n] && !r.escapeWithReference && (e = _(l[n], t[n])), ne({}, n, e)
                            },
                            secondary: function (a) {
                                var e = "right" === a ? "left" : "top",
                                    o = l[e];
                                return l[a] > t[a] && !r.escapeWithReference && (o = z(l[e], t[a] - ("right" === a ? l.width : l.height))), ne({}, e, o)
                            }
                        };
                    return i.forEach(function (a) {
                        var e = -1 === ["left", "top"].indexOf(a) ? "secondary" : "primary";
                        l = oe({}, l, n[e](a))
                    }), a.offsets.popper = l, a
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function (l) {
                    var e = l.offsets,
                        t = e.popper,
                        o = e.reference,
                        i = l.placement.split("-")[0],
                        n = F,
                        r = -1 !== ["top", "bottom"].indexOf(i),
                        c = r ? "right" : "bottom",
                        s = r ? "left" : "top",
                        d = r ? "width" : "height";
                    return t[c] < n(o[s]) && (l.offsets.popper[s] = n(o[s]) - t[d]), t[s] > n(o[c]) && (l.offsets.popper[s] = n(o[c])), l
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function (t, e) {
                    if (!N(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var o = e.element;
                    if ("string" == typeof o) {
                        if (o = t.instance.popper.querySelector(o), !o) return t;
                    } else if (!t.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var v = t.placement.split("-")[0],
                        n = t.offsets,
                        r = n.popper,
                        p = n.reference,
                        s = -1 !== ["left", "right"].indexOf(v),
                        d = s ? "height" : "width",
                        a = s ? "Top" : "Left",
                        l = a.toLowerCase(),
                        f = s ? "left" : "top",
                        m = s ? "bottom" : "right",
                        c = h(o)[d];
                    p[m] - c < r[l] && (t.offsets.popper[l] -= r[l] - (p[m] - c)), p[l] + c > r[m] && (t.offsets.popper[l] += p[l] + c - r[m]);
                    var g = p[l] + p[d] / 2 - c / 2,
                        u = ue(t.instance.popper, "margin" + a).replace("px", ""),
                        b = g - ve(t.offsets.popper)[l] - u;
                    return b = _(z(r[d] - c, b), 0), t.arrowElement = o, t.offsets.arrow = {}, t.offsets.arrow[l] = Math.round(b), t.offsets.arrow[f] = "", t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function (_, T) {
                    if (y(_.instance.modifiers, "inner")) return _;
                    if (_.flipped && _.placement === _.originalPlacement) return _;
                    var t = g(_.instance.popper, _.instance.reference, T.padding, T.boundariesElement),
                        o = _.placement.split("-")[0],
                        E = v(o),
                        S = _.placement.split("-")[1] || "",
                        k = [];
                    switch (T.behavior) {
                        case se.FLIP:
                            k = [o, E];
                            break;
                        case se.CLOCKWISE:
                            k = j(o);
                            break;
                        case se.COUNTERCLOCKWISE:
                            k = j(o, !0);
                            break;
                        default:
                            k = T.behavior;
                    }
                    return k.forEach(function (e, n) {
                        if (o !== e || k.length === n + 1) return _;
                        o = _.placement.split("-")[0], E = v(o);
                        var i = _.offsets.popper,
                            a = _.offsets.reference,
                            s = F,
                            r = "left" === o && s(i.right) > s(a.left) || "right" === o && s(i.left) < s(a.right) || "top" === o && s(i.bottom) > s(a.top) || "bottom" === o && s(i.top) < s(a.bottom),
                            l = s(i.left) < s(t.left),
                            d = s(i.right) > s(t.right),
                            c = s(i.top) < s(t.top),
                            p = s(i.bottom) > s(t.bottom),
                            u = "left" === o && l || "right" === o && d || "top" === o && c || "bottom" === o && p,
                            g = -1 !== ["top", "bottom"].indexOf(o),
                            f = !!T.flipVariations && (g && "start" === S && l || g && "end" === S && d || !g && "start" === S && c || !g && "end" === S && p);
                        (r || u || f) && (_.flipped = !0, (r || u) && (o = k[n + 1]), f && (S = H(S)), _.placement = o + (S ? "-" + S : ""), _.offsets.popper = oe({}, _.offsets.popper, x(_.instance.popper, _.offsets.reference, _.placement)), _ = C(_.instance.modifiers, _, "flip"))
                    }), _
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function (a) {
                    var e = a.placement,
                        t = e.split("-")[0],
                        o = a.offsets,
                        i = o.popper,
                        n = o.reference,
                        r = -1 !== ["left", "right"].indexOf(t),
                        l = -1 === ["top", "left"].indexOf(t);
                    return i[r ? "left" : "top"] = n[t] - (l ? i[r ? "width" : "height"] : 0), a.placement = v(e), a.offsets.popper = ve(i), a
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function (n) {
                    if (!N(n.instance.modifiers, "hide", "preventOverflow")) return n;
                    var e = n.offsets.reference,
                        t = S(n.instance.modifiers, function (t) {
                            return "preventOverflow" === t.name
                        }).boundaries;
                    if (e.bottom < t.top || e.left > t.right || e.top > t.bottom || e.right < t.left) {
                        if (!0 === n.hide) return n;
                        n.hide = !0, n.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === n.hide) return n;
                        n.hide = !1, n.attributes["x-out-of-boundaries"] = !1
                    }
                    return n
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function (r, e) {
                    var t = e.x,
                        o = e.y,
                        i = r.offsets.popper,
                        n = S(r.instance.modifiers, function (t) {
                            return "applyStyle" === t.name
                        }).gpuAcceleration;
                    void 0 !== n && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var p = void 0 === n ? e.gpuAcceleration : n,
                        a = he(r.instance.popper),
                        l = xe(a),
                        g = {
                            position: i.position
                        },
                        f = {
                            left: F(i.left),
                            top: F(i.top),
                            bottom: F(i.bottom),
                            right: F(i.right)
                        },
                        c = "bottom" === t ? "top" : "bottom",
                        m = "right" === o ? "left" : "right",
                        u = T("transform"),
                        h, b;
                    if (b = "bottom" == c ? -l.height + f.bottom : f.top, h = "right" == m ? -l.width + f.right : f.left, p && u) g[u] = "translate3d(" + h + "px, " + b + "px, 0)", g[c] = 0, g[m] = 0, g.willChange = "transform";
                    else {
                        var v = "bottom" == c ? -1 : 1,
                            y = "right" == m ? -1 : 1;
                        g[c] = b * v, g[m] = h * y, g.willChange = c + ", " + m
                    }
                    var x = {
                        "x-placement": r.placement
                    };
                    return r.attributes = oe({}, x, r.attributes), r.styles = oe({}, g, r.styles), r.arrowStyles = oe({}, r.offsets.arrow, r.arrowStyles), r
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function (t) {
                    return P(t.instance.popper, t.styles), O(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && P(t.arrowElement, t.arrowStyles), t
                },
                onLoad: function (a, e, t, o, i) {
                    var n = m(i, e, a),
                        s = f(t.placement, n, e, a, t.modifiers.flip.boundariesElement, t.modifiers.flip.padding);
                    return e.setAttribute("x-placement", s), P(e, {
                        position: "absolute"
                    }), t
                },
                gpuAcceleration: void 0
            }
        }
    }, re
}), ! function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(n.bootstrap = {}, n.jQuery, n.Popper)
}(this, function (xn, t, Ln) {
    "use strict";

    function jn(a, t) {
        for (var e = 0, o; e < t.length; e++) o = t[e], o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(a, o.key, o)
    }

    function $n(a, t, e) {
        return t && jn(a.prototype, t), e && jn(a, e), a
    }

    function o(a) {
        for (var n = 1; n < arguments.length; n++) {
            var o = null == arguments[n] ? {} : arguments[n],
                i = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))), i.forEach(function (s) {
                var t, r, l;
                t = a, l = o[r = s], r in t ? Object.defineProperty(t, r, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[r] = l
            })
        }
        return a
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, Ln = Ln && Ln.hasOwnProperty("default") ? Ln.default : Ln;
    var Hn = function (a) {
            function e(o) {
                var t = this,
                    e = !1;
                return a(this).one(d.TRANSITION_END, function () {
                    e = !0
                }), setTimeout(function () {
                    e || d.triggerTransitionEnd(t)
                }, o), this
            }
            var d = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (e) {
                    for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                    return e
                },
                getSelectorFromElement: function (n) {
                    var t = n.getAttribute("data-target");
                    t && "#" !== t || (t = n.getAttribute("href") || "");
                    try {
                        return 0 < a(document).find(t).length ? t : null
                    } catch (e) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function (n) {
                    if (!n) return 0;
                    var t = a(n).css("transition-duration");
                    return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
                },
                reflow: function (e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function (e) {
                    a(e).trigger("transitionend")
                },
                supportsTransitionEnd: function () {
                    return !0
                },
                isElement: function (e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function (l, t, e) {
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var i = e[n],
                                r = t[n],
                                s = r && d.isElement(r) ? "element" : (o = r, {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(i).test(s)) throw new Error(l.toUpperCase() + ": Option \"" + n + "\" provided type \"" + s + "\" but expected type \"" + i + "\".")
                        } var o
                }
            };
            return a.fn.emulateTransitionEnd = e, a.event.special[d.TRANSITION_END] = {
                bindType: "transitionend",
                delegateType: "transitionend",
                handle: function (e) {
                    if (a(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }, d
        }(t),
        i = (On = "alert", Wn = "." + (Nn = "bs.alert"), Rn = (Pn = t).fn[On], zn = {
            CLOSE: "close" + Wn,
            CLOSED: "closed" + Wn,
            CLICK_DATA_API: "click" + Wn + ".data-api"
        }, Mn = "alert", Fn = "fade", Bn = "show", qn = function () {
            function a(e) {
                this._element = e
            }
            var e = a.prototype;
            return e.close = function (n) {
                var t = this._element;
                n && (t = this._getRootElement(n)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function () {
                Pn.removeData(this._element, Nn), this._element = null
            }, e._getRootElement = function (a) {
                var t = Hn.getSelectorFromElement(a),
                    e = !1;
                return t && (e = Pn(t)[0]), e || (e = Pn(a).closest("." + Mn)[0]), e
            }, e._triggerCloseEvent = function (n) {
                var t = Pn.Event(zn.CLOSE);
                return Pn(n).trigger(t), t
            }, e._removeElement = function (a) {
                var e = this;
                if (Pn(a).removeClass(Bn), Pn(a).hasClass(Fn)) {
                    var n = Hn.getTransitionDurationFromElement(a);
                    Pn(a).one(Hn.TRANSITION_END, function (n) {
                        return e._destroyElement(a, n)
                    }).emulateTransitionEnd(n)
                } else this._destroyElement(a)
            }, e._destroyElement = function (e) {
                Pn(e).detach().trigger(zn.CLOSED).remove()
            }, a._jQueryInterface = function (o) {
                return this.each(function () {
                    var n = Pn(this),
                        t = n.data(Nn);
                    t || (t = new a(this), n.data(Nn, t)), "close" === o && t[o](this)
                })
            }, a._handleDismiss = function (n) {
                return function (e) {
                    e && e.preventDefault(), n.close(this)
                }
            }, $n(a, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }]), a
        }(), Pn(document).on(zn.CLICK_DATA_API, "[data-dismiss=\"alert\"]", qn._handleDismiss(new qn)), Pn.fn[On] = qn._jQueryInterface, Pn.fn[On].Constructor = qn, Pn.fn[On].noConflict = function () {
            return Pn.fn[On] = Rn, qn._jQueryInterface
        }, qn),
        h = (Xn = "button", Vn = "." + (Un = "bs.button"), Kn = ".data-api", Qn = (Yn = t).fn[Xn], Gn = "active", Zn = "btn", ea = "[data-toggle^=\"button\"]", ta = "[data-toggle=\"buttons\"]", na = "input", aa = ".active", oa = ".btn", ia = {
            CLICK_DATA_API: "click" + Vn + Kn,
            FOCUS_BLUR_DATA_API: (Jn = "focus") + Vn + Kn + " blur" + Vn + Kn
        }, sa = function () {
            function a(e) {
                this._element = e
            }
            var e = a.prototype;
            return e.toggle = function () {
                var a = !0,
                    o = !0,
                    s = Yn(this._element).closest(ta)[0];
                if (s) {
                    var n = Yn(this._element).find(na)[0];
                    if (n) {
                        if ("radio" === n.type)
                            if (n.checked && Yn(this._element).hasClass(Gn)) a = !1;
                            else {
                                var i = Yn(s).find(aa)[0];
                                i && Yn(i).removeClass(Gn)
                            } if (a) {
                            if (n.hasAttribute("disabled") || s.hasAttribute("disabled") || n.classList.contains("disabled") || s.classList.contains("disabled")) return;
                            n.checked = !Yn(this._element).hasClass(Gn), Yn(n).trigger("change")
                        }
                        n.focus(), o = !1
                    }
                }
                o && this._element.setAttribute("aria-pressed", !Yn(this._element).hasClass(Gn)), a && Yn(this._element).toggleClass(Gn)
            }, e.dispose = function () {
                Yn.removeData(this._element, Un), this._element = null
            }, a._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = Yn(this).data(Un);
                    e || (e = new a(this), Yn(this).data(Un, e)), "toggle" === n && e[n]()
                })
            }, $n(a, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }]), a
        }(), Yn(document).on(ia.CLICK_DATA_API, ea, function (n) {
            n.preventDefault();
            var t = n.target;
            Yn(t).hasClass(Zn) || (t = Yn(t).closest(oa)), sa._jQueryInterface.call(Yn(t), "toggle")
        }).on(ia.FOCUS_BLUR_DATA_API, ea, function (n) {
            var t = Yn(n.target).closest(oa)[0];
            Yn(t).toggleClass(Jn, /^focus(in)?$/.test(n.type))
        }), Yn.fn[Xn] = sa._jQueryInterface, Yn.fn[Xn].Constructor = sa, Yn.fn[Xn].noConflict = function () {
            return Yn.fn[Xn] = Qn, sa._jQueryInterface
        }, sa),
        Cn = (la = "carousel", ca = "." + (da = "bs.carousel"), pa = ".data-api", ua = (ra = t).fn[la], ga = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, fa = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, ma = "next", ha = "prev", ba = "left", ya = "right", va = {
            SLIDE: "slide" + ca,
            SLID: "slid" + ca,
            KEYDOWN: "keydown" + ca,
            MOUSEENTER: "mouseenter" + ca,
            MOUSELEAVE: "mouseleave" + ca,
            TOUCHEND: "touchend" + ca,
            LOAD_DATA_API: "load" + ca + pa,
            CLICK_DATA_API: "click" + ca + pa
        }, xa = "carousel", _a = "active", wa = "slide", Ca = "carousel-item-right", Ta = "carousel-item-left", Ea = "carousel-item-next", Sa = "carousel-item-prev", ka = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: "[data-ride=\"carousel\"]"
        }, Aa = function () {
            function a(n, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = ra(n)[0], this._indicatorsElement = ra(this._element).find(ka.INDICATORS)[0], this._addEventListeners()
            }
            var e = a.prototype;
            return e.next = function () {
                this._isSliding || this._slide(ma)
            }, e.nextWhenVisible = function () {
                !document.hidden && ra(this._element).is(":visible") && "hidden" !== ra(this._element).css("visibility") && this.next()
            }, e.prev = function () {
                this._isSliding || this._slide(ha)
            }, e.pause = function (e) {
                e || (this._isPaused = !0), ra(this._element).find(ka.NEXT_PREV)[0] && (Hn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function (a) {
                var t = this;
                this._activeElement = ra(this._element).find(ka.ACTIVE_ITEM)[0];
                var e = this._getItemIndex(this._activeElement);
                if (!(a > this._items.length - 1 || 0 > a))
                    if (this._isSliding) ra(this._element).one(va.SLID, function () {
                        return t.to(a)
                    });
                    else {
                        if (e === a) return this.pause(), void this.cycle();
                        var n = e < a ? ma : ha;
                        this._slide(n, this._items[a])
                    }
            }, e.dispose = function () {
                ra(this._element).off(ca), ra.removeData(this._element, da), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function (e) {
                return e = o({}, ga, e), Hn.typeCheckConfig(la, e, fa), e
            }, e._addEventListeners = function () {
                var n = this;
                this._config.keyboard && ra(this._element).on(va.KEYDOWN, function (e) {
                    return n._keydown(e)
                }), "hover" === this._config.pause && (ra(this._element).on(va.MOUSEENTER, function (e) {
                    return n.pause(e)
                }).on(va.MOUSELEAVE, function (e) {
                    return n.cycle(e)
                }), "ontouchstart" in document.documentElement && ra(this._element).on(va.TOUCHEND, function () {
                    n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (e) {
                        return n.cycle(e)
                    }, 500 + n._config.interval)
                }))
            }, e._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next();
                }
            }, e._getItemIndex = function (e) {
                return this._items = ra.makeArray(ra(e).parent().find(ka.ITEM)), this._items.indexOf(e)
            }, e._getItemByDirection = function (a, t) {
                var e = a === ma,
                    n = a === ha,
                    i = this._getItemIndex(t),
                    r = this._items.length - 1;
                if ((n && 0 === i || e && i === r) && !this._config.wrap) return t;
                var s = (i + (a === ha ? -1 : 1)) % this._items.length;
                return -1 == s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function (a, t) {
                var e = this._getItemIndex(a),
                    n = this._getItemIndex(ra(this._element).find(ka.ACTIVE_ITEM)[0]),
                    o = ra.Event(va.SLIDE, {
                        relatedTarget: a,
                        direction: t,
                        from: n,
                        to: e
                    });
                return ra(this._element).trigger(o), o
            }, e._setActiveIndicatorElement = function (n) {
                if (this._indicatorsElement) {
                    ra(this._indicatorsElement).find(ka.ACTIVE).removeClass(_a);
                    var t = this._indicatorsElement.children[this._getItemIndex(n)];
                    t && ra(t).addClass(_a)
                }
            }, e._slide = function (d, t) {
                var e = this,
                    s = ra(this._element).find(ka.ACTIVE_ITEM)[0],
                    o = this._getItemIndex(s),
                    a = t || s && this._getItemByDirection(d, s),
                    l = this._getItemIndex(a),
                    p = !!this._interval,
                    c, g, m;
                if (d === ma ? (c = Ta, g = Ea, m = ba) : (c = Ca, g = Sa, m = ya), a && ra(a).hasClass(_a)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(a, m).isDefaultPrevented() && s && a) {
                    this._isSliding = !0, p && this.pause(), this._setActiveIndicatorElement(a);
                    var h = ra.Event(va.SLID, {
                        relatedTarget: a,
                        direction: m,
                        from: o,
                        to: l
                    });
                    if (ra(this._element).hasClass(wa)) {
                        ra(a).addClass(g), Hn.reflow(a), ra(s).addClass(c), ra(a).addClass(c);
                        var u = Hn.getTransitionDurationFromElement(s);
                        ra(s).one(Hn.TRANSITION_END, function () {
                            ra(a).removeClass(c + " " + g).addClass(_a), ra(s).removeClass(_a + " " + g + " " + c), e._isSliding = !1, setTimeout(function () {
                                return ra(e._element).trigger(h)
                            }, 0)
                        }).emulateTransitionEnd(u)
                    } else ra(s).removeClass(_a), ra(a).addClass(_a), this._isSliding = !1, ra(this._element).trigger(h);
                    p && this.cycle()
                }
            }, a._jQueryInterface = function (s) {
                return this.each(function () {
                    var i = ra(this).data(da),
                        r = o({}, ga, ra(this).data());
                    "object" == typeof s && (r = o({}, r, s));
                    var l = "string" == typeof s ? s : r.slide;
                    if (i || (i = new a(this, r), ra(this).data(da, i)), "number" == typeof s) i.to(s);
                    else if ("string" == typeof l) {
                        if ("undefined" == typeof i[l]) throw new TypeError("No method named \"" + l + "\"");
                        i[l]()
                    } else r.interval && (i.pause(), i.cycle())
                })
            }, a._dataApiClickHandler = function (s) {
                var t = Hn.getSelectorFromElement(this);
                if (t) {
                    var e = ra(t)[0];
                    if (e && ra(e).hasClass(xa)) {
                        var n = o({}, ra(e).data(), ra(this).data()),
                            i = this.getAttribute("data-slide-to");
                        i && (n.interval = !1), a._jQueryInterface.call(ra(e), n), i && ra(e).data(da).to(i), s.preventDefault()
                    }
                }
            }, $n(a, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return ga
                }
            }]), a
        }(), ra(document).on(va.CLICK_DATA_API, ka.DATA_SLIDE, Aa._dataApiClickHandler), ra(window).on(va.LOAD_DATA_API, function () {
            ra(ka.DATA_RIDE).each(function () {
                var e = ra(this);
                Aa._jQueryInterface.call(e, e.data())
            })
        }), ra.fn[la] = Aa._jQueryInterface, ra.fn[la].Constructor = Aa, ra.fn[la].noConflict = function () {
            return ra.fn[la] = ua, Aa._jQueryInterface
        }, Aa),
        An = (Da = "collapse", Pa = "." + (La = "bs.collapse"), Oa = (Ia = t).fn[Da], Na = {
            toggle: !0,
            parent: ""
        }, ja = {
            toggle: "boolean",
            parent: "(string|element)"
        }, $a = {
            SHOW: "show" + Pa,
            SHOWN: "shown" + Pa,
            HIDE: "hide" + Pa,
            HIDDEN: "hidden" + Pa,
            CLICK_DATA_API: "click" + Pa + ".data-api"
        }, Ha = "show", Wa = "collapse", Ra = "collapsing", za = "collapsed", Ma = "width", Fa = "height", Ba = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: "[data-toggle=\"collapse\"]"
        }, qa = function () {
            function l(a, t) {
                this._isTransitioning = !1, this._element = a, this._config = this._getConfig(t), this._triggerArray = Ia.makeArray(Ia("[data-toggle=\"collapse\"][href=\"#" + a.id + "\"],[data-toggle=\"collapse\"][data-target=\"#" + a.id + "\"]"));
                for (var e = Ia(Ba.DATA_TOGGLE), n = 0; n < e.length; n++) {
                    var o = e[n],
                        r = Hn.getSelectorFromElement(o);
                    null !== r && 0 < Ia(r).filter(a).length && (this._selector = r, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = l.prototype;
            return e.toggle = function () {
                Ia(this._element).hasClass(Ha) ? this.hide() : this.show()
            }, e.show = function () {
                var a = this,
                    n, d;
                if (!this._isTransitioning && !Ia(this._element).hasClass(Ha) && (this._parent && 0 === (n = Ia.makeArray(Ia(this._parent).find(Ba.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"))).length && (n = null), !(n && (d = Ia(n).not(this._selector).data(La)) && d._isTransitioning))) {
                    var c = Ia.Event($a.SHOW);
                    if (Ia(this._element).trigger(c), !c.isDefaultPrevented()) {
                        n && (l._jQueryInterface.call(Ia(n).not(this._selector), "hide"), d || Ia(n).data(La, null));
                        var i = this._getDimension();
                        Ia(this._element).removeClass(Wa).addClass(Ra), (this._element.style[i] = 0) < this._triggerArray.length && Ia(this._triggerArray).removeClass(za).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var r = "scroll" + (i[0].toUpperCase() + i.slice(1)),
                            s = Hn.getTransitionDurationFromElement(this._element);
                        Ia(this._element).one(Hn.TRANSITION_END, function () {
                            Ia(a._element).removeClass(Ra).addClass(Wa).addClass(Ha), a._element.style[i] = "", a.setTransitioning(!1), Ia(a._element).trigger($a.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[i] = this._element[r] + "px"
                    }
                }
            }, e.hide = function () {
                var a = this;
                if (!this._isTransitioning && Ia(this._element).hasClass(Ha)) {
                    var t = Ia.Event($a.HIDE);
                    if (Ia(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var e = this._getDimension();
                        if (this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", Hn.reflow(this._element), Ia(this._element).addClass(Ra).removeClass(Wa).removeClass(Ha), 0 < this._triggerArray.length)
                            for (var n = 0; n < this._triggerArray.length; n++) {
                                var l = this._triggerArray[n],
                                    r = Hn.getSelectorFromElement(l);
                                null !== r && (Ia(r).hasClass(Ha) || Ia(l).addClass(za).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[e] = "";
                        var s = Hn.getTransitionDurationFromElement(this._element);
                        Ia(this._element).one(Hn.TRANSITION_END, function () {
                            a.setTransitioning(!1), Ia(a._element).removeClass(Ra).addClass(Wa).trigger($a.HIDDEN)
                        }).emulateTransitionEnd(s)
                    }
                }
            }, e.setTransitioning = function (e) {
                this._isTransitioning = e
            }, e.dispose = function () {
                Ia.removeData(this._element, La), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function (e) {
                return (e = o({}, Na, e)).toggle = !!e.toggle, Hn.typeCheckConfig(Da, e, ja), e
            }, e._getDimension = function () {
                return Ia(this._element).hasClass(Ma) ? Ma : Fa
            }, e._getParent = function () {
                var a = this,
                    n = null;
                Hn.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = Ia(this._config.parent)[0];
                var o = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
                return Ia(n).find(o).each(function (n, t) {
                    a._addAriaAndCollapsedClass(l._getTargetFromElement(t), [t])
                }), n
            }, e._addAriaAndCollapsedClass = function (a, t) {
                if (a) {
                    var e = Ia(a).hasClass(Ha);
                    0 < t.length && Ia(t).toggleClass(za, !e).attr("aria-expanded", e)
                }
            }, l._getTargetFromElement = function (n) {
                var t = Hn.getSelectorFromElement(n);
                return t ? Ia(t)[0] : null
            }, l._jQueryInterface = function (a) {
                return this.each(function () {
                    var i = Ia(this),
                        t = i.data(La),
                        s = o({}, Na, i.data(), "object" == typeof a && a ? a : {});
                    if (!t && s.toggle && /show|hide/.test(a) && (s.toggle = !1), t || (t = new l(this, s), i.data(La, t)), "string" == typeof a) {
                        if ("undefined" == typeof t[a]) throw new TypeError("No method named \"" + a + "\"");
                        t[a]()
                    }
                })
            }, $n(l, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Na
                }
            }]), l
        }(), Ia(document).on($a.CLICK_DATA_API, Ba.DATA_TOGGLE, function (a) {
            "A" === a.currentTarget.tagName && a.preventDefault();
            var o = Ia(this),
                t = Hn.getSelectorFromElement(this);
            Ia(t).each(function () {
                var n = Ia(this),
                    t = n.data(La) ? "toggle" : o.data();
                qa._jQueryInterface.call(n, t)
            })
        }), Ia.fn[Da] = qa._jQueryInterface, Ia.fn[Da].Constructor = qa, Ia.fn[Da].noConflict = function () {
            return Ia.fn[Da] = Oa, qa._jQueryInterface
        }, qa),
        bn = (Xa = "dropdown", Va = "." + (Ua = "bs.dropdown"), Ka = ".data-api", Qa = (Ya = t).fn[Xa], Ga = /38|40|27/, Za = {
            HIDE: "hide" + Va,
            HIDDEN: "hidden" + Va,
            SHOW: "show" + Va,
            SHOWN: "shown" + Va,
            CLICK: "click" + Va,
            CLICK_DATA_API: "click" + Va + Ka,
            KEYDOWN_DATA_API: "keydown" + Va + Ka,
            KEYUP_DATA_API: "keyup" + Va + Ka
        }, Ja = "disabled", eo = "show", to = "dropup", no = "dropright", ao = "dropleft", oo = "dropdown-menu-right", io = "position-static", so = "[data-toggle=\"dropdown\"]", ro = ".dropdown form", lo = ".dropdown-menu", co = ".navbar-nav", po = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", uo = "top-start", go = "top-end", fo = "bottom-start", mo = "bottom-end", ho = "right-start", bo = "left-start", yo = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, vo = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, xo = function () {
            function d(n, t) {
                this._element = n, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = d.prototype;
            return e.toggle = function () {
                if (!this._element.disabled && !Ya(this._element).hasClass(Ja)) {
                    var a = d._getParentFromElement(this._element),
                        t = Ya(this._menu).hasClass(eo);
                    if (d._clearMenus(), !t) {
                        var e = {
                                relatedTarget: this._element
                            },
                            n = Ya.Event(Za.SHOW, e);
                        if (Ya(a).trigger(n), !n.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof Ln) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = a : Hn.isElement(this._config.reference) && (o = this._config.reference, "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && Ya(a).addClass(io), this._popper = new Ln(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === Ya(a).closest(co).length && Ya(document.body).children().on("mouseover", null, Ya.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Ya(this._menu).toggleClass(eo), Ya(a).toggleClass(eo).trigger(Ya.Event(Za.SHOWN, e))
                        }
                    }
                }
            }, e.dispose = function () {
                Ya.removeData(this._element, Ua), Ya(this._element).off(Va), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function () {
                var n = this;
                Ya(this._element).on(Za.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), n.toggle()
                })
            }, e._getConfig = function (e) {
                return e = o({}, this.constructor.Default, Ya(this._element).data(), e), Hn.typeCheckConfig(Xa, e, this.constructor.DefaultType), e
            }, e._getMenuElement = function () {
                if (!this._menu) {
                    var e = d._getParentFromElement(this._element);
                    this._menu = Ya(e).find(lo)[0]
                }
                return this._menu
            }, e._getPlacement = function () {
                var n = Ya(this._element).parent(),
                    t = fo;
                return n.hasClass(to) ? (t = uo, Ya(this._menu).hasClass(oo) && (t = go)) : n.hasClass(no) ? t = ho : n.hasClass(ao) ? t = bo : Ya(this._menu).hasClass(oo) && (t = mo), t
            }, e._detectNavbar = function () {
                return 0 < Ya(this._element).closest(".navbar").length
            }, e._getPopperConfig = function () {
                var a = this,
                    e = {};
                "function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = o({}, e.offsets, a._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset;
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), t
            }, d._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = Ya(this).data(Ua);
                    if (e || (e = new d(this, "object" == typeof n ? n : null), Ya(this).data(Ua, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError("No method named \"" + n + "\"");
                        e[n]()
                    }
                })
            }, d._clearMenus = function (l) {
                if (!l || 3 !== l.which && ("keyup" !== l.type || 9 === l.which))
                    for (var t = Ya.makeArray(Ya(so)), e = 0; e < t.length; e++) {
                        var c = d._getParentFromElement(t[e]),
                            i = Ya(t[e]).data(Ua),
                            r = {
                                relatedTarget: t[e]
                            };
                        if (i) {
                            var s = i._menu;
                            if (Ya(c).hasClass(eo) && !(l && ("click" === l.type && /input|textarea/i.test(l.target.tagName) || "keyup" === l.type && 9 === l.which) && Ya.contains(c, l.target))) {
                                var o = Ya.Event(Za.HIDE, r);
                                Ya(c).trigger(o), o.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Ya(document.body).children().off("mouseover", null, Ya.noop), t[e].setAttribute("aria-expanded", "false"), Ya(s).removeClass(eo), Ya(c).removeClass(eo).trigger(Ya.Event(Za.HIDDEN, r)))
                            }
                        }
                    }
            }, d._getParentFromElement = function (a) {
                var t = Hn.getSelectorFromElement(a),
                    n;
                return t && (n = Ya(t)[0]), n || a.parentNode
            }, d._dataApiKeydownHandler = function (a) {
                if ((/input|textarea/i.test(a.target.tagName) ? !(32 === a.which || 27 !== a.which && (40 !== a.which && 38 !== a.which || Ya(a.target).closest(lo).length)) : Ga.test(a.which)) && (a.preventDefault(), a.stopPropagation(), !this.disabled && !Ya(this).hasClass(Ja))) {
                    var t = d._getParentFromElement(this),
                        e = Ya(t).hasClass(eo);
                    if ((e || 27 === a.which && 32 === a.which) && (!e || 27 !== a.which && 32 !== a.which)) {
                        var n = Ya(t).find(po).get();
                        if (0 !== n.length) {
                            var o = n.indexOf(a.target);
                            38 === a.which && 0 < o && o--, 40 === a.which && o < n.length - 1 && o++, 0 > o && (o = 0), n[o].focus()
                        }
                    } else {
                        if (27 === a.which) {
                            var i = Ya(t).find(so)[0];
                            Ya(i).trigger("focus")
                        }
                        Ya(this).trigger("click")
                    }
                }
            }, $n(d, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return yo
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return vo
                }
            }]), d
        }(), Ya(document).on(Za.KEYDOWN_DATA_API, so, xo._dataApiKeydownHandler).on(Za.KEYDOWN_DATA_API, lo, xo._dataApiKeydownHandler).on(Za.CLICK_DATA_API + " " + Za.KEYUP_DATA_API, xo._clearMenus).on(Za.CLICK_DATA_API, so, function (e) {
            e.preventDefault(), e.stopPropagation(), xo._jQueryInterface.call(Ya(this), "toggle")
        }).on(Za.CLICK_DATA_API, ro, function (e) {
            e.stopPropagation()
        }), Ya.fn[Xa] = xo._jQueryInterface, Ya.fn[Xa].Constructor = xo, Ya.fn[Xa].noConflict = function () {
            return Ya.fn[Xa] = Qa, xo._jQueryInterface
        }, xo),
        Sn = (wo = "modal", To = "." + (Co = "bs.modal"), Eo = (_o = t).fn[wo], So = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, ko = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, Ao = {
            HIDE: "hide" + To,
            HIDDEN: "hidden" + To,
            SHOW: "show" + To,
            SHOWN: "shown" + To,
            FOCUSIN: "focusin" + To,
            RESIZE: "resize" + To,
            CLICK_DISMISS: "click.dismiss" + To,
            KEYDOWN_DISMISS: "keydown.dismiss" + To,
            MOUSEUP_DISMISS: "mouseup.dismiss" + To,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + To,
            CLICK_DATA_API: "click" + To + ".data-api"
        }, Io = "modal-scrollbar-measure", Do = "modal-backdrop", Lo = "modal-open", Po = "fade", Oo = "show", No = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: "[data-toggle=\"modal\"]",
            DATA_DISMISS: "[data-dismiss=\"modal\"]",
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }, jo = function () {
            function a(n, t) {
                this._config = this._getConfig(t), this._element = n, this._dialog = _o(n).find(No.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var e = a.prototype;
            return e.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, e.show = function (a) {
                var o = this;
                if (!this._isTransitioning && !this._isShown) {
                    _o(this._element).hasClass(Po) && (this._isTransitioning = !0);
                    var e = _o.Event(Ao.SHOW, {
                        relatedTarget: a
                    });
                    _o(this._element).trigger(e), this._isShown || e.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), _o(document.body).addClass(Lo), this._setEscapeEvent(), this._setResizeEvent(), _o(this._element).on(Ao.CLICK_DISMISS, No.DATA_DISMISS, function (e) {
                        return o.hide(e)
                    }), _o(this._dialog).on(Ao.MOUSEDOWN_DISMISS, function () {
                        _o(o._element).one(Ao.MOUSEUP_DISMISS, function (e) {
                            _o(e.target).is(o._element) && (o._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return o._showElement(a)
                    }))
                }
            }, e.hide = function (a) {
                var o = this;
                if (a && a.preventDefault(), !this._isTransitioning && this._isShown) {
                    var e = _o.Event(Ao.HIDE);
                    if (_o(this._element).trigger(e), this._isShown && !e.isDefaultPrevented()) {
                        this._isShown = !1;
                        var t = _o(this._element).hasClass(Po);
                        if (t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), _o(document).off(Ao.FOCUSIN), _o(this._element).removeClass(Oo), _o(this._element).off(Ao.CLICK_DISMISS), _o(this._dialog).off(Ao.MOUSEDOWN_DISMISS), t) {
                            var n = Hn.getTransitionDurationFromElement(this._element);
                            _o(this._element).one(Hn.TRANSITION_END, function (e) {
                                return o._hideModal(e)
                            }).emulateTransitionEnd(n)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function () {
                _o.removeData(this._element, Co), _o(window, document, this._element, this._backdrop).off(To), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, e.handleUpdate = function () {
                this._adjustDialog()
            }, e._getConfig = function (e) {
                return e = o({}, So, e), Hn.typeCheckConfig(wo, e, ko), e
            }, e._showElement = function (a) {
                var t = this,
                    e = _o(this._element).hasClass(Po);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, e && Hn.reflow(this._element), _o(this._element).addClass(Oo), this._config.focus && this._enforceFocus();
                var n = _o.Event(Ao.SHOWN, {
                        relatedTarget: a
                    }),
                    o = function () {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, _o(t._element).trigger(n)
                    };
                if (e) {
                    var i = Hn.getTransitionDurationFromElement(this._element);
                    _o(this._dialog).one(Hn.TRANSITION_END, o).emulateTransitionEnd(i)
                } else o()
            }, e._enforceFocus = function () {
                var n = this;
                _o(document).off(Ao.FOCUSIN).on(Ao.FOCUSIN, function (e) {
                    document !== e.target && n._element !== e.target && 0 === _o(n._element).has(e.target).length && n._element.focus()
                })
            }, e._setEscapeEvent = function () {
                var n = this;
                this._isShown && this._config.keyboard ? _o(this._element).on(Ao.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), n.hide())
                }) : this._isShown || _o(this._element).off(Ao.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function () {
                var n = this;
                this._isShown ? _o(window).on(Ao.RESIZE, function (e) {
                    return n.handleUpdate(e)
                }) : _o(window).off(Ao.RESIZE)
            }, e._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    _o(document.body).removeClass(Lo), e._resetAdjustments(), e._resetScrollbar(), _o(e._element).trigger(Ao.HIDDEN)
                })
            }, e._removeBackdrop = function () {
                this._backdrop && (_o(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function (a) {
                var o = this,
                    e = _o(this._element).hasClass(Po) ? Po : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = Do, e && _o(this._backdrop).addClass(e), _o(this._backdrop).appendTo(document.body), _o(this._element).on(Ao.CLICK_DISMISS, function (e) {
                            o._ignoreBackdropClick ? o._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === o._config.backdrop ? o._element.focus() : o.hide())
                        }), e && Hn.reflow(this._backdrop), _o(this._backdrop).addClass(Oo), !a) return;
                    if (!e) return void a();
                    var t = Hn.getTransitionDurationFromElement(this._backdrop);
                    _o(this._backdrop).one(Hn.TRANSITION_END, a).emulateTransitionEnd(t)
                } else if (!this._isShown && this._backdrop) {
                    _o(this._backdrop).removeClass(Oo);
                    var n = function () {
                        o._removeBackdrop(), a && a()
                    };
                    if (_o(this._element).hasClass(Po)) {
                        var i = Hn.getTransitionDurationFromElement(this._backdrop);
                        _o(this._backdrop).one(Hn.TRANSITION_END, n).emulateTransitionEnd(i)
                    } else n()
                } else a && a()
            }, e._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function () {
                var a = this;
                if (this._isBodyOverflowing) {
                    _o(No.FIXED_CONTENT).each(function (o, t) {
                        var e = _o(t)[0].style.paddingRight,
                            n = _o(t).css("padding-right");
                        _o(t).data("padding-right", e).css("padding-right", parseFloat(n) + a._scrollbarWidth + "px")
                    }), _o(No.STICKY_CONTENT).each(function (o, t) {
                        var e = _o(t)[0].style.marginRight,
                            n = _o(t).css("margin-right");
                        _o(t).data("margin-right", e).css("margin-right", parseFloat(n) - a._scrollbarWidth + "px")
                    }), _o(No.NAVBAR_TOGGLER).each(function (o, t) {
                        var e = _o(t)[0].style.marginRight,
                            n = _o(t).css("margin-right");
                        _o(t).data("margin-right", e).css("margin-right", parseFloat(n) + a._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        t = _o(document.body).css("padding-right");
                    _o(document.body).data("padding-right", n).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")
                }
            }, e._resetScrollbar = function () {
                _o(No.FIXED_CONTENT).each(function (a, t) {
                    var e = _o(t).data("padding-right");
                    "undefined" != typeof e && _o(t).css("padding-right", e).removeData("padding-right")
                }), _o(No.STICKY_CONTENT + ", " + No.NAVBAR_TOGGLER).each(function (a, t) {
                    var e = _o(t).data("margin-right");
                    "undefined" != typeof e && _o(t).css("margin-right", e).removeData("margin-right")
                });
                var e = _o(document.body).data("padding-right");
                "undefined" != typeof e && _o(document.body).css("padding-right", e).removeData("padding-right")
            }, e._getScrollbarWidth = function () {
                var n = document.createElement("div");
                n.className = Io, document.body.appendChild(n);
                var t = n.getBoundingClientRect().width - n.clientWidth;
                return document.body.removeChild(n), t
            }, a._jQueryInterface = function (s, n) {
                return this.each(function () {
                    var i = _o(this).data(Co),
                        r = o({}, So, _o(this).data(), "object" == typeof s && s ? s : {});
                    if (i || (i = new a(this, r), _o(this).data(Co, i)), "string" == typeof s) {
                        if ("undefined" == typeof i[s]) throw new TypeError("No method named \"" + s + "\"");
                        i[s](n)
                    } else r.show && i.show(n)
                })
            }, $n(a, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return So
                }
            }]), a
        }(), _o(document).on(Ao.CLICK_DATA_API, No.DATA_TOGGLE, function (a) {
            var t = this,
                n = Hn.getSelectorFromElement(this),
                i;
            n && (i = _o(n)[0]);
            var l = _o(i).data(Co) ? "toggle" : o({}, _o(i).data(), _o(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || a.preventDefault();
            var r = _o(i).one(Ao.SHOW, function (e) {
                e.isDefaultPrevented() || r.one(Ao.HIDDEN, function () {
                    _o(t).is(":visible") && t.focus()
                })
            });
            jo._jQueryInterface.call(_o(i), l, this)
        }), _o.fn[wo] = jo._jQueryInterface, _o.fn[wo].Constructor = jo, _o.fn[wo].noConflict = function () {
            return _o.fn[wo] = Eo, jo._jQueryInterface
        }, jo),
        wn = (Ho = "tooltip", Ro = "." + (Wo = "bs.tooltip"), zo = ($o = t).fn[Ho], Mo = "bs-tooltip", Fo = new RegExp("(^|\\s)" + Mo + "\\S+", "g"), Yo = {
            animation: !0,
            template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"arrow\"></div><div class=\"tooltip-inner\"></div></div>",
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(qo = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(Bo = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, Uo = "out", Vo = {
            HIDE: "hide" + Ro,
            HIDDEN: "hidden" + Ro,
            SHOW: (Xo = "show") + Ro,
            SHOWN: "shown" + Ro,
            INSERTED: "inserted" + Ro,
            CLICK: "click" + Ro,
            FOCUSIN: "focusin" + Ro,
            FOCUSOUT: "focusout" + Ro,
            MOUSEENTER: "mouseenter" + Ro,
            MOUSELEAVE: "mouseleave" + Ro
        }, Ko = "fade", Qo = "show", Go = ".tooltip-inner", Zo = ".arrow", Jo = "hover", ei = "focus", ti = "click", ni = "manual", ai = function () {
            function e(n, t) {
                if ("undefined" == typeof Ln) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = n, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var n = e.prototype;
            return n.enable = function () {
                this._isEnabled = !0
            }, n.disable = function () {
                this._isEnabled = !1
            }, n.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function (a) {
                if (this._isEnabled)
                    if (a) {
                        var t = this.constructor.DATA_KEY,
                            e = $o(a.currentTarget).data(t);
                        e || (e = new this.constructor(a.currentTarget, this._getDelegateConfig()), $o(a.currentTarget).data(t, e)), e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                    } else {
                        if ($o(this.getTipElement()).hasClass(Qo)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function () {
                clearTimeout(this._timeout), $o.removeData(this.element, this.constructor.DATA_KEY), $o(this.element).off(this.constructor.EVENT_KEY), $o(this.element).closest(".modal").off("hide.bs.modal"), this.tip && $o(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, n.show = function () {
                var d = this;
                if ("none" === $o(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = $o.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    $o(this.element).trigger(e);
                    var t = $o.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !t) return;
                    var n = this.getTipElement(),
                        i = Hn.getUID(this.constructor.NAME);
                    n.setAttribute("id", i), this.element.setAttribute("aria-describedby", i), this.setContent(), this.config.animation && $o(n).addClass(Ko);
                    var r = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement,
                        s = this._getAttachment(r);
                    this.addAttachmentClass(s);
                    var o = !1 === this.config.container ? document.body : $o(this.config.container);
                    $o(n).data(this.constructor.DATA_KEY, this), $o.contains(this.element.ownerDocument.documentElement, this.tip) || $o(n).appendTo(o), $o(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ln(this.element, n, {
                        placement: s,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Zo
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && d._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            d._handlePopperPlacementChange(e)
                        }
                    }), $o(n).addClass(Qo), "ontouchstart" in document.documentElement && $o(document.body).children().on("mouseover", null, $o.noop);
                    var a = function () {
                        d.config.animation && d._fixTransition();
                        var e = d._hoverState;
                        d._hoverState = null, $o(d.element).trigger(d.constructor.Event.SHOWN), e === Uo && d._leave(null, d)
                    };
                    if ($o(this.tip).hasClass(Ko)) {
                        var l = Hn.getTransitionDurationFromElement(this.tip);
                        $o(this.tip).one(Hn.TRANSITION_END, a).emulateTransitionEnd(l)
                    } else a()
                }
            }, n.hide = function (a) {
                var t = this,
                    e = this.getTipElement(),
                    n = $o.Event(this.constructor.Event.HIDE),
                    o = function () {
                        t._hoverState !== Xo && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), $o(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), a && a()
                    };
                if ($o(this.element).trigger(n), !n.isDefaultPrevented()) {
                    if ($o(e).removeClass(Qo), "ontouchstart" in document.documentElement && $o(document.body).children().off("mouseover", null, $o.noop), this._activeTrigger[ti] = !1, this._activeTrigger[ei] = !1, this._activeTrigger[Jo] = !1, $o(this.tip).hasClass(Ko)) {
                        var i = Hn.getTransitionDurationFromElement(e);
                        $o(e).one(Hn.TRANSITION_END, o).emulateTransitionEnd(i)
                    } else o();
                    this._hoverState = ""
                }
            }, n.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function () {
                return !!this.getTitle()
            }, n.addAttachmentClass = function (e) {
                $o(this.getTipElement()).addClass(Mo + "-" + e)
            }, n.getTipElement = function () {
                return this.tip = this.tip || $o(this.config.template)[0], this.tip
            }, n.setContent = function () {
                var e = $o(this.getTipElement());
                this.setElementContent(e.find(Go), this.getTitle()), e.removeClass(Ko + " " + Qo)
            }, n.setElementContent = function (a, t) {
                var e = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? e ? $o(t).parent().is(a) || a.empty().append(t) : a.text($o(t).text()) : a[e ? "html" : "text"](t)
            }, n.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, n._getAttachment = function (e) {
                return qo[e.toUpperCase()]
            }, n._setListeners = function () {
                var a = this;
                this.config.trigger.split(" ").forEach(function (o) {
                    if ("click" === o) $o(a.element).on(a.constructor.Event.CLICK, a.config.selector, function (e) {
                        return a.toggle(e)
                    });
                    else if (o !== ni) {
                        var t = o === Jo ? a.constructor.Event.MOUSEENTER : a.constructor.Event.FOCUSIN,
                            e = o === Jo ? a.constructor.Event.MOUSELEAVE : a.constructor.Event.FOCUSOUT;
                        $o(a.element).on(t, a.config.selector, function (e) {
                            return a._enter(e)
                        }).on(e, a.config.selector, function (e) {
                            return a._leave(e)
                        })
                    }
                    $o(a.element).closest(".modal").on("hide.bs.modal", function () {
                        return a.hide()
                    })
                }), this.config.selector ? this.config = o({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" != e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function (a, t) {
                var o = this.constructor.DATA_KEY;
                (t = t || $o(a.currentTarget).data(o)) || (t = new this.constructor(a.currentTarget, this._getDelegateConfig()), $o(a.currentTarget).data(o, t)), a && (t._activeTrigger["focusin" === a.type ? ei : Jo] = !0), $o(t.getTipElement()).hasClass(Qo) || t._hoverState === Xo ? t._hoverState = Xo : (clearTimeout(t._timeout), t._hoverState = Xo, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    t._hoverState === Xo && t.show()
                }, t.config.delay.show) : t.show())
            }, n._leave = function (a, t) {
                var o = this.constructor.DATA_KEY;
                (t = t || $o(a.currentTarget).data(o)) || (t = new this.constructor(a.currentTarget, this._getDelegateConfig()), $o(a.currentTarget).data(o, t)), a && (t._activeTrigger["focusout" === a.type ? ei : Jo] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Uo, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    t._hoverState === Uo && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, n._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, n._getConfig = function (e) {
                return "number" == typeof (e = o({}, this.constructor.Default, $o(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), Hn.typeCheckConfig(Ho, e, this.constructor.DefaultType), e
            }, n._getDelegateConfig = function () {
                var n = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (n[t] = this.config[t]);
                return n
            }, n._cleanTipClass = function () {
                var n = $o(this.getTipElement()),
                    t = n.attr("class").match(Fo);
                null !== t && 0 < t.length && n.removeClass(t.join(""))
            }, n._handlePopperPlacementChange = function (e) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, n._fixTransition = function () {
                var n = this.getTipElement(),
                    t = this.config.animation;
                null === n.getAttribute("x-placement") && ($o(n).removeClass(Ko), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, e._jQueryInterface = function (a) {
                return this.each(function () {
                    var n = $o(this).data(Wo);
                    if ((n || !/dispose|hide/.test(a)) && (n || (n = new e(this, "object" == typeof a && a), $o(this).data(Wo, n)), "string" == typeof a)) {
                        if ("undefined" == typeof n[a]) throw new TypeError("No method named \"" + a + "\"");
                        n[a]()
                    }
                })
            }, $n(e, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Yo
                }
            }, {
                key: "NAME",
                get: function () {
                    return Ho
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return Wo
                }
            }, {
                key: "Event",
                get: function () {
                    return Vo
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return Ro
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Bo
                }
            }]), e
        }(), $o.fn[Ho] = ai._jQueryInterface, $o.fn[Ho].Constructor = ai, $o.fn[Ho].noConflict = function () {
            return $o.fn[Ho] = zo, ai._jQueryInterface
        }, ai),
        In = (ii = "popover", ri = "." + (si = "bs.popover"), li = (oi = t).fn[ii], di = "bs-popover", ci = new RegExp("(^|\\s)" + di + "\\S+", "g"), pi = o({}, wn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: "<div class=\"popover\" role=\"tooltip\"><div class=\"arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>"
        }), ui = o({}, wn.DefaultType, {
            content: "(string|element|function)"
        }), gi = "fade", mi = ".popover-header", hi = ".popover-body", bi = {
            HIDE: "hide" + ri,
            HIDDEN: "hidden" + ri,
            SHOW: (fi = "show") + ri,
            SHOWN: "shown" + ri,
            INSERTED: "inserted" + ri,
            CLICK: "click" + ri,
            FOCUSIN: "focusin" + ri,
            FOCUSOUT: "focusout" + ri,
            MOUSEENTER: "mouseenter" + ri,
            MOUSELEAVE: "mouseleave" + ri
        }, yi = function (a) {
            function o() {
                return a.apply(this, arguments) || this
            }
            var t, i;
            i = a, (t = o).prototype = Object.create(i.prototype), (t.prototype.constructor = t).__proto__ = i;
            var s = o.prototype;
            return s.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function (e) {
                oi(this.getTipElement()).addClass(di + "-" + e)
            }, s.getTipElement = function () {
                return this.tip = this.tip || oi(this.config.template)[0], this.tip
            }, s.setContent = function () {
                var n = oi(this.getTipElement());
                this.setElementContent(n.find(mi), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(n.find(hi), t), n.removeClass(gi + " " + fi)
            }, s._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function () {
                var n = oi(this.getTipElement()),
                    t = n.attr("class").match(ci);
                null !== t && 0 < t.length && n.removeClass(t.join(""))
            }, o._jQueryInterface = function (a) {
                return this.each(function () {
                    var n = oi(this).data(si),
                        i = "object" == typeof a ? a : null;
                    if ((n || !/destroy|hide/.test(a)) && (n || (n = new o(this, i), oi(this).data(si, n)), "string" == typeof a)) {
                        if ("undefined" == typeof n[a]) throw new TypeError("No method named \"" + a + "\"");
                        n[a]()
                    }
                })
            }, $n(o, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return pi
                }
            }, {
                key: "NAME",
                get: function () {
                    return ii
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return si
                }
            }, {
                key: "Event",
                get: function () {
                    return bi
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return ri
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return ui
                }
            }]), o
        }(wn), oi.fn[ii] = yi._jQueryInterface, oi.fn[ii].Constructor = yi, oi.fn[ii].noConflict = function () {
            return oi.fn[ii] = li, yi._jQueryInterface
        }, yi),
        Dn = (xi = "scrollspy", wi = "." + (_i = "bs.scrollspy"), Ci = (vi = t).fn[xi], Ti = {
            offset: 10,
            method: "auto",
            target: ""
        }, Ei = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, Si = {
            ACTIVATE: "activate" + wi,
            SCROLL: "scroll" + wi,
            LOAD_DATA_API: "load" + wi + ".data-api"
        }, ki = "dropdown-item", Ai = "active", Ii = {
            DATA_SPY: "[data-spy=\"scroll\"]",
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, Di = "offset", Li = "position", Pi = function () {
            function a(a, t) {
                var e = this;
                this._element = a, this._scrollElement = "BODY" === a.tagName ? window : a, this._config = this._getConfig(t), this._selector = this._config.target + " " + Ii.NAV_LINKS + "," + this._config.target + " " + Ii.LIST_ITEMS + "," + this._config.target + " " + Ii.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, vi(this._scrollElement).on(Si.SCROLL, function (n) {
                    return e._process(n)
                }), this.refresh(), this._process()
            }
            var e = a.prototype;
            return e.refresh = function () {
                var n = this,
                    e = this._scrollElement === this._scrollElement.window ? Di : Li,
                    t = "auto" === this._config.method ? e : this._config.method,
                    a = t === Li ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), vi.makeArray(vi(this._selector)).map(function (o) {
                    var s = Hn.getSelectorFromElement(o),
                        n;
                    if (s && (n = vi(s)[0]), n) {
                        var r = n.getBoundingClientRect();
                        if (r.width || r.height) return [vi(n)[t]().top + a, s]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (n, t) {
                    return n[0] - t[0]
                }).forEach(function (e) {
                    n._offsets.push(e[0]), n._targets.push(e[1])
                })
            }, e.dispose = function () {
                vi.removeData(this._element, _i), vi(this._scrollElement).off(wi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function (n) {
                if ("string" != typeof (n = o({}, Ti, "object" == typeof n && n ? n : {})).target) {
                    var a = vi(n.target).attr("id");
                    a || (a = Hn.getUID(xi), vi(n.target).attr("id", a)), n.target = "#" + a
                }
                return Hn.typeCheckConfig(xi, n, Ei), n
            }, e._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function () {
                var a = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    e = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e <= a) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n)
                } else {
                    if (this._activeTarget && a < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) this._activeTarget !== this._targets[o] && a >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || a < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }, e._activate = function (a) {
                this._activeTarget = a, this._clear();
                var e = this._selector.split(",");
                e = e.map(function (e) {
                    return e + "[data-target=\"" + a + "\"]," + e + "[href=\"" + a + "\"]"
                });
                var o = vi(e.join(","));
                o.hasClass(ki) ? (o.closest(Ii.DROPDOWN).find(Ii.DROPDOWN_TOGGLE).addClass(Ai), o.addClass(Ai)) : (o.addClass(Ai), o.parents(Ii.NAV_LIST_GROUP).prev(Ii.NAV_LINKS + ", " + Ii.LIST_ITEMS).addClass(Ai), o.parents(Ii.NAV_LIST_GROUP).prev(Ii.NAV_ITEMS).children(Ii.NAV_LINKS).addClass(Ai)), vi(this._scrollElement).trigger(Si.ACTIVATE, {
                    relatedTarget: a
                })
            }, e._clear = function () {
                vi(this._selector).filter(Ii.ACTIVE).removeClass(Ai)
            }, a._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = vi(this).data(_i);
                    if (e || (e = new a(this, "object" == typeof n && n), vi(this).data(_i, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError("No method named \"" + n + "\"");
                        e[n]()
                    }
                })
            }, $n(a, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }, {
                key: "Default",
                get: function () {
                    return Ti
                }
            }]), a
        }(), vi(window).on(Si.LOAD_DATA_API, function () {
            for (var a = vi.makeArray(vi(Ii.DATA_SPY)), t = a.length, o; t--;) o = vi(a[t]), Pi._jQueryInterface.call(o, o.data())
        }), vi.fn[xi] = Pi._jQueryInterface, vi.fn[xi].Constructor = Pi, vi.fn[xi].noConflict = function () {
            return vi.fn[xi] = Ci, Pi._jQueryInterface
        }, Pi),
        kn = (ji = "." + (Ni = "bs.tab"), $i = (Oi = t).fn.tab, Hi = {
            HIDE: "hide" + ji,
            HIDDEN: "hidden" + ji,
            SHOW: "show" + ji,
            SHOWN: "shown" + ji,
            CLICK_DATA_API: "click" + ji + ".data-api"
        }, Wi = "dropdown-menu", Ri = "active", zi = "disabled", Mi = "fade", Fi = "show", Bi = ".dropdown", qi = ".nav, .list-group", Yi = ".active", Xi = "> li > .active", Ui = "[data-toggle=\"tab\"], [data-toggle=\"pill\"], [data-toggle=\"list\"]", Vi = ".dropdown-toggle", Ki = "> .dropdown-menu .active", Qi = function () {
            function a(e) {
                this._element = e
            }
            var e = a.prototype;
            return e.show = function () {
                var d = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Oi(this._element).hasClass(Ri) || Oi(this._element).hasClass(zi))) {
                    var n = Oi(this._element).closest(qi)[0],
                        e = Hn.getSelectorFromElement(this._element),
                        r, c;
                    if (n) {
                        var p = "UL" === n.nodeName ? Xi : Yi;
                        c = (c = Oi.makeArray(Oi(n).find(p)))[c.length - 1]
                    }
                    var s = Oi.Event(Hi.HIDE, {
                            relatedTarget: this._element
                        }),
                        o = Oi.Event(Hi.SHOW, {
                            relatedTarget: c
                        });
                    if (c && Oi(c).trigger(s), Oi(this._element).trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        e && (r = Oi(e)[0]), this._activate(this._element, n);
                        var a = function () {
                            var n = Oi.Event(Hi.HIDDEN, {
                                    relatedTarget: d._element
                                }),
                                t = Oi.Event(Hi.SHOWN, {
                                    relatedTarget: c
                                });
                            Oi(c).trigger(n), Oi(d._element).trigger(t)
                        };
                        r ? this._activate(r, r.parentNode, a) : a()
                    }
                }
            }, e.dispose = function () {
                Oi.removeData(this._element, Ni), this._element = null
            }, e._activate = function (l, t, e) {
                var n = this,
                    i = ("UL" === t.nodeName ? Oi(t).find(Xi) : Oi(t).children(Yi))[0],
                    r = e && i && Oi(i).hasClass(Mi),
                    s = function () {
                        return n._transitionComplete(l, i, e)
                    };
                if (i && r) {
                    var o = Hn.getTransitionDurationFromElement(i);
                    Oi(i).one(Hn.TRANSITION_END, s).emulateTransitionEnd(o)
                } else s()
            }, e._transitionComplete = function (a, t, e) {
                if (t) {
                    Oi(t).removeClass(Fi + " " + Ri);
                    var n = Oi(t.parentNode).find(Ki)[0];
                    n && Oi(n).removeClass(Ri), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (Oi(a).addClass(Ri), "tab" === a.getAttribute("role") && a.setAttribute("aria-selected", !0), Hn.reflow(a), Oi(a).addClass(Fi), a.parentNode && Oi(a.parentNode).hasClass(Wi)) {
                    var o = Oi(a).closest(Bi)[0];
                    o && Oi(o).find(Vi).addClass(Ri), a.setAttribute("aria-expanded", !0)
                }
                e && e()
            }, a._jQueryInterface = function (o) {
                return this.each(function () {
                    var n = Oi(this),
                        t = n.data(Ni);
                    if (t || (t = new a(this), n.data(Ni, t)), "string" == typeof o) {
                        if ("undefined" == typeof t[o]) throw new TypeError("No method named \"" + o + "\"");
                        t[o]()
                    }
                })
            }, $n(a, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.1"
                }
            }]), a
        }(), Oi(document).on(Hi.CLICK_DATA_API, Ui, function (e) {
            e.preventDefault(), Qi._jQueryInterface.call(Oi(this), "show")
        }), Oi.fn.tab = Qi._jQueryInterface, Oi.fn.tab.Constructor = Qi, Oi.fn.tab.noConflict = function () {
            return Oi.fn.tab = $i, Qi._jQueryInterface
        }, Qi),
        Pn, On, Nn, Wn, Rn, zn, Mn, Fn, Bn, qn, Yn, Xn, Un, Vn, Kn, Qn, Gn, Zn, Jn, ea, ta, na, aa, oa, ia, sa, ra, la, da, ca, pa, ua, ga, fa, ma, ha, ba, ya, va, xa, _a, wa, Ca, Ta, Ea, Sa, ka, Aa, Ia, Da, La, Pa, Oa, Na, ja, $a, Ha, Wa, Ra, za, Ma, Fa, Ba, qa, Ya, Xa, Ua, Va, Ka, Qa, Ga, Za, Ja, eo, to, no, ao, oo, io, so, ro, lo, co, po, uo, go, fo, mo, ho, bo, yo, vo, xo, _o, wo, Co, To, Eo, So, ko, Ao, Io, Do, Lo, Po, Oo, No, jo, $o, Ho, Wo, Ro, zo, Mo, Fo, Bo, qo, Yo, Xo, Uo, Vo, Ko, Qo, Go, Zo, Jo, ei, ti, ni, ai, oi, ii, si, ri, li, di, ci, pi, ui, gi, fi, mi, hi, bi, yi, vi, xi, _i, wi, Ci, Ti, Ei, Si, ki, Ai, Ii, Di, Li, Pi, Oi, Ni, ji, $i, Hi, Wi, Ri, zi, Mi, Fi, Bi, qi, Yi, Xi, Ui, Vi, Ki, Qi;
    ! function (n) {
        if ("undefined" == typeof n) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = n.fn.jquery.split(" ")[0].split(".");
        if (2 > t[0] && 9 > t[1] || 1 === t[0] && 9 === t[1] && 1 > t[2] || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), xn.Util = Hn, xn.Alert = i, xn.Button = h, xn.Carousel = Cn, xn.Collapse = An, xn.Dropdown = bn, xn.Modal = Sn, xn.Popover = In, xn.Scrollspy = Dn, xn.Tab = kn, xn.Tooltip = wn, Object.defineProperty(xn, "__esModule", {
        value: !0
    })
});
var $jscomp = {
    scope: {}
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
    if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
    t != Array.prototype && t != Object.prototype && (t[e] = n.value)
}, $jscomp.getGlobal = function (t) {
    return "undefined" != typeof window && window === t ? t : "undefined" != typeof global && null != global ? global : t
}, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function () {
    $jscomp.initSymbol = function () {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function (t) {
    return $jscomp.SYMBOL_PREFIX + (t || "") + $jscomp.symbolCounter_++
}, $jscomp.initSymbolIterator = function () {
    $jscomp.initSymbol();
    var t = $jscomp.global.Symbol.iterator;
    t || (t = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), "function" != typeof Array.prototype[t] && $jscomp.defineProperty(Array.prototype, t, {
        configurable: !0,
        writable: !0,
        value: function () {
            return $jscomp.arrayIterator(this)
        }
    }), $jscomp.initSymbolIterator = function () {}
}, $jscomp.arrayIterator = function (t) {
    var e = 0;
    return $jscomp.iteratorPrototype(function () {
        return e < t.length ? {
            done: !1,
            value: t[e++]
        } : {
            done: !0
        }
    })
}, $jscomp.iteratorPrototype = function (t) {
    return $jscomp.initSymbolIterator(), t = {
        next: t
    }, t[$jscomp.global.Symbol.iterator] = function () {
        return this
    }, t
}, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function (t, n) {
    $jscomp.initSymbolIterator(), t instanceof String && (t += "");
    var a = 0,
        o = {
            next: function () {
                if (a < t.length) {
                    var e = a++;
                    return {
                        value: n(e, t[e]),
                        done: !1
                    }
                }
                return o.next = function () {
                    return {
                        done: !0,
                        value: void 0
                    }
                }, o.next()
            }
        };
    return o[Symbol.iterator] = function () {
        return o
    }, o
}, $jscomp.polyfill = function (t, n, a, o) {
    if (n) {
        for (a = $jscomp.global, t = t.split("."), o = 0; o < t.length - 1; o++) {
            var i = t[o];
            i in a || (a[i] = {}), a = a[i]
        }
        t = t[t.length - 1], o = a[t], n = n(o), n != o && null != n && $jscomp.defineProperty(a, t, {
            configurable: !0,
            writable: !0,
            value: n
        })
    }
}, $jscomp.polyfill("Array.prototype.keys", function (t) {
    return t ? t : function () {
        return $jscomp.iteratorFromArray(this, function (t) {
            return t
        })
    }
}, "es6-impl", "es3");
var $jscomp$this = this;
(function (t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.anime = e()
})(this, function () {
    function t(e) {
        if (!W.col(e)) try {
            return document.querySelectorAll(e)
        } catch (e) {}
    }

    function o(e, t) {
        for (var a = e.length, o = 2 <= arguments.length ? arguments[1] : void 0, i = [], s = 0; s < a; s++)
            if (s in e) {
                var r = e[s];
                t.call(o, r, s, e) && i.push(r)
            } return i
    }

    function e(t) {
        return t.reduce(function (t, n) {
            return t.concat(W.arr(n) ? e(n) : n)
        }, [])
    }

    function n(e) {
        return W.arr(e) ? e : (W.str(e) && (e = t(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e])
    }

    function i(e, t) {
        return e.some(function (e) {
            return e === t
        })
    }

    function s(e) {
        var t = {},
            n;
        for (n in e) t[n] = e[n];
        return t
    }

    function r(e, t) {
        var n = s(e),
            a;
        for (a in e) n[a] = t.hasOwnProperty(a) ? t[a] : e[a];
        return n
    }

    function l(e, t) {
        var n = s(e),
            a;
        for (a in t) n[a] = W.und(e[a]) ? t[a] : e[a];
        return n
    }

    function p(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, a) {
            return t + t + n + n + a + a
        });
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        e = parseInt(t[1], 16);
        var n = parseInt(t[2], 16),
            t = parseInt(t[3], 16);
        return "rgba(" + e + "," + n + "," + t + ",1)"
    }

    function u(e) {
        function t(e, t, n) {
            return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? e + 6 * (t - e) * n : .5 > n ? t : n < 2 / 3 ? e + 6 * ((t - e) * (2 / 3 - n)) : e
        }
        var o = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e);
        e = parseInt(o[1]) / 360;
        var i = parseInt(o[2]) / 100,
            s = parseInt(o[3]) / 100,
            o = o[4] || 1;
        if (0 == i) s = i = e = s;
        else {
            var r = .5 > s ? s * (1 + i) : s + i - s * i,
                n = 2 * s - r,
                s = t(n, r, e + 1 / 3),
                i = t(n, r, e);
            e = t(n, r, e - 1 / 3)
        }
        return "rgba(" + 255 * s + "," + 255 * i + "," + 255 * e + "," + o + ")"
    }

    function g(e) {
        if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e)) return e[2]
    }

    function m(e) {
        return -1 < e.indexOf("translate") || "perspective" === e ? "px" : -1 < e.indexOf("rotate") || -1 < e.indexOf("skew") ? "deg" : void 0
    }

    function y(e, t) {
        return W.fnc(e) ? e(t.target, t.id, t.total) : e
    }

    function f(e, t) {
        if (t in e.style) return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }

    function x(e, t) {
        return W.dom(e) && i(S, t) ? "transform" : W.dom(e) && (e.getAttribute(t) || W.svg(e) && e[t]) ? "attribute" : W.dom(e) && "transform" !== t && f(e, t) ? "css" : null == e[t] ? void 0 : "object"
    }

    function d(e, t) {
        var i = m(t),
            i = -1 < t.indexOf("scale") ? 1 : 0 + i;
        if (e = e.style.transform, !e) return i;
        for (var s = [], r = [], l = [], n = /(\w+)\((.+?)\)/g; s = n.exec(e);) r.push(s[1]), l.push(s[2]);
        return e = o(l, function (e, n) {
            return r[n] === t
        }), e.length ? e[0] : i
    }

    function _(e, t) {
        switch (x(e, t)) {
            case "transform":
                return d(e, t);
            case "css":
                return f(e, t);
            case "attribute":
                return e.getAttribute(t);
        }
        return e[t] || 0
    }

    function C(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        var o = g(e) || 0;
        switch (t = parseFloat(t), e = parseFloat(e.replace(n[0], "")), n[0][0]) {
            case "+":
                return t + e + o;
            case "-":
                return t - e + o;
            case "*":
                return t * e + o;
        }
    }

    function w(e, t) {
        return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
    }

    function b(e) {
        e = e.points;
        for (var t = 0, n = 0, o, i; n < e.numberOfItems; n++) i = e.getItem(n), 0 < n && (t += w(o, i)), o = i;
        return t
    }

    function T(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
            case "circle":
                return 2 * Math.PI * e.getAttribute("r");
            case "rect":
                return 2 * e.getAttribute("width") + 2 * e.getAttribute("height");
            case "line":
                return w({
                    x: e.getAttribute("x1"),
                    y: e.getAttribute("y1")
                }, {
                    x: e.getAttribute("x2"),
                    y: e.getAttribute("y2")
                });
            case "polyline":
                return b(e);
            case "polygon":
                var t = e.points;
                return b(e) + w(t.getItem(t.numberOfItems - 1), t.getItem(0));
        }
    }

    function a(e, t) {
        function a(n) {
            return n = void 0 === n ? 0 : n, e.el.getPointAtLength(1 <= t + n ? t + n : 0)
        }
        var o = a(),
            i = a(-1),
            s = a(1);
        switch (e.property) {
            case "x":
                return o.x;
            case "y":
                return o.y;
            case "angle":
                return 180 * Math.atan2(s.y - i.y, s.x - i.x) / Math.PI;
        }
    }

    function E(e, t) {
        var n = /-?\d*\.?\d+/g,
            a;
        if (a = W.pth(e) ? e.totalLength : e, !W.col(a)) o = (o = g(a)) ? a.substr(0, a.length - o.length) : a, a = t && !/\s/g.test(a) ? o + t : o;
        else if (W.rgb(a)) {
            var o = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(a);
            a = o ? "rgba(" + o[1] + ",1)" : a
        } else a = W.hex(a) ? p(a) : W.hsl(a) ? u(a) : void 0;
        return a += "", {
            original: a,
            numbers: a.match(n) ? a.match(n).map(Number) : [0],
            strings: W.str(e) || t ? a.split(n) : []
        }
    }

    function k(t) {
        return t = t ? e(W.arr(t) ? t.map(n) : n(t)) : [], o(t, function (e, t, n) {
            return n.indexOf(e) === t
        })
    }

    function I(e) {
        var t = k(e);
        return t.map(function (e, n) {
            return {
                target: e,
                id: n,
                total: t.length
            }
        })
    }

    function c(e, t) {
        var o = s(t);
        if (W.arr(e)) {
            var i = e.length;
            2 !== i || W.obj(e[0]) ? W.fnc(t.duration) || (o.duration = t.duration / i) : e = {
                value: e
            }
        }
        return n(e).map(function (e, n) {
            return n = n ? 0 : t.delay, e = W.obj(e) && !W.pth(e) ? e : {
                value: e
            }, W.und(e.delay) && (e.delay = n), e
        }).map(function (e) {
            return l(e, o)
        })
    }

    function D(e, t) {
        var n = {},
            a;
        for (a in e) {
            var o = y(e[a], t);
            W.arr(o) && (o = o.map(function (e) {
                return y(e, t)
            }), 1 === o.length && (o = o[0])), n[a] = o
        }
        return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
    }

    function L(e) {
        return W.arr(e) ? h.apply(this, e) : A[e]
    }

    function P(t, n) {
        var a;
        return t.tweens.map(function (o) {
            o = D(o, n);
            var i = o.value,
                s = _(n.target, t.name),
                r = a ? a.to.original : s,
                r = W.arr(i) ? i[0] : r,
                l = C(W.arr(i) ? i[1] : i, r),
                s = g(l) || g(r) || g(s);
            return o.from = E(r, s), o.to = E(l, s), o.start = a ? a.end : t.offset, o.end = o.start + o.delay + o.duration, o.easing = L(o.easing), o.elasticity = (1E3 - Math.min(Math.max(o.elasticity, 1), 999)) / 1E3, o.isPath = W.pth(i), o.isColor = W.col(o.from.original), o.isColor && (o.round = 1), a = o
        })
    }

    function O(t, n) {
        return o(e(t.map(function (e) {
            return n.map(function (t) {
                var n = x(e.target, t.name);
                if (n) {
                    var a = P(t, e);
                    t = {
                        type: n,
                        property: t.name,
                        animatable: e,
                        tweens: a,
                        duration: a[a.length - 1].end,
                        delay: a[0].delay
                    }
                } else t = void 0;
                return t
            })
        })), function (e) {
            return !W.und(e)
        })
    }

    function N(e, t, n, a) {
        var o = "delay" === e;
        return t.length ? (o ? Math.min : Math.max).apply(Math, t.map(function (t) {
            return t[e]
        })) : o ? a.delay : n.offset + a.delay + a.duration
    }

    function j(t) {
        var n = r(z, t),
            o = r(M, t),
            i = I(t.targets),
            s = [],
            d = l(n, o),
            e;
        for (e in t) d.hasOwnProperty(e) || "targets" === e || s.push({
            name: e,
            offset: d.offset,
            tweens: c(t[e], o)
        });
        return t = O(i, s), l(n, {
            children: [],
            animatables: i,
            animations: t,
            duration: N("duration", t, n, o),
            delay: N("delay", t, n, o)
        })
    }

    function R(n) {
        function i() {
            return window.Promise && new Promise(function (e) {
                return _ = e
            })
        }

        function s(e) {
            return T.reversed ? T.duration - e : e
        }

        function d(i) {
            for (var s = 0, r = {}, c = T.animations, u = c.length; s < u;) {
                var g = c[s],
                    e = g.animatable,
                    y = g.tweens,
                    v = y.length - 1,
                    _ = y[v];
                v && (_ = o(y, function (e) {
                    return i < e.end
                })[0] || _);
                for (var y = Math.min(Math.max(i - _.start - _.delay, 0), _.duration) / _.duration, C = isNaN(y) ? 1 : _.easing(y, _.elasticity), y = _.to.strings, E = _.round, v = [], S = void 0, S = _.to.numbers.length, k = 0; k < S; k++) {
                    var A = void 0,
                        A = _.to.numbers[k],
                        I = _.from.numbers[k],
                        A = _.isPath ? a(_.value, C * A) : I + C * (A - I);
                    E && (_.isColor && 2 < k || (A = Math.round(A * E) / E)), v.push(A)
                }
                if (_ = y.length)
                    for (S = y[0], C = 0; C < _; C++) E = y[C + 1], k = v[C], isNaN(k) || (S = E ? S + (k + E) : S + (k + " "));
                else S = v[0];
                F[g.type](e.target, g.property, S, r, e.id), g.currentValue = S, s++
            }
            if (s = Object.keys(r).length)
                for (c = 0; c < s; c++) X || (X = f(document.body, "transform") ? "transform" : "-webkit-transform"), T.animatables[c].target.style[X] = r[c].join(" ");
            T.currentTime = i, T.progress = 100 * (i / T.duration)
        }

        function c(e) {
            T[e] && T[e](T)
        }

        function b() {
            T.remaining && !0 !== T.remaining && T.remaining--
        }

        function e(e) {
            var t = T.duration,
                a = T.offset,
                n = a + T.delay,
                o = T.currentTime,
                r = T.reversed,
                l = s(e);
            if (T.children.length) {
                var p = T.children,
                    u = p.length;
                if (l >= T.currentTime)
                    for (var f = 0; f < u; f++) p[f].seek(l);
                else
                    for (; u--;) p[u].seek(l)
            }(l >= n || !t) && (T.began || (T.began = !0, c("begin")), c("run")), l > a && l < t ? d(l) : (l <= a && 0 !== o && (d(0), r && b()), l >= t && o !== t || !t) && (d(t), r || b()), c("update"), e >= t && (T.remaining ? (E = g, "alternate" === T.direction && (T.reversed = !T.reversed)) : (T.pause(), T.completed || (T.completed = !0, c("complete"), "Promise" in window && (_(), C = i()))), y = 0)
        }
        n = void 0 === n ? {} : n;
        var y = 0,
            _ = null,
            C = i(),
            T = j(n),
            g, E;
        return T.reset = function () {
            var e = T.direction,
                t = T.loop;
            for (T.currentTime = 0, T.progress = 0, T.paused = !0, T.began = !1, T.completed = !1, T.reversed = "reverse" === e, T.remaining = "alternate" === e && 1 === t ? 2 : t, d(0), e = T.children.length; e--;) T.children[e].reset()
        }, T.tick = function (t) {
            g = t, E || (E = g), e((y + g - E) * R.speed)
        }, T.seek = function (t) {
            e(s(t))
        }, T.pause = function () {
            var e = q.indexOf(T); - 1 < e && q.splice(e, 1), T.paused = !0
        }, T.play = function () {
            T.paused && (T.paused = !1, E = 0, y = s(T.currentTime), q.push(T), v || Y())
        }, T.reverse = function () {
            T.reversed = !T.reversed, E = 0, y = s(T.currentTime)
        }, T.restart = function () {
            T.pause(), T.reset(), T.play()
        }, T.finished = C, T.reset(), T.autoplay && T.play(), T
    }
    var z = {
            update: void 0,
            begin: void 0,
            run: void 0,
            complete: void 0,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            offset: 0
        },
        M = {
            duration: 1E3,
            delay: 0,
            easing: "easeOutElastic",
            elasticity: 500,
            round: 0
        },
        S = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY", "perspective"],
        W = {
            arr: function (e) {
                return Array.isArray(e)
            },
            obj: function (e) {
                return -1 < Object.prototype.toString.call(e).indexOf("Object")
            },
            pth: function (e) {
                return W.obj(e) && e.hasOwnProperty("totalLength")
            },
            svg: function (e) {
                return e instanceof SVGElement
            },
            dom: function (e) {
                return e.nodeType || W.svg(e)
            },
            str: function (e) {
                return "string" == typeof e
            },
            fnc: function (e) {
                return "function" == typeof e
            },
            und: function (e) {
                return "undefined" == typeof e
            },
            hex: function (e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
            },
            rgb: function (e) {
                return /^rgb/.test(e)
            },
            hsl: function (e) {
                return /^hsl/.test(e)
            },
            col: function (e) {
                return W.hex(e) || W.rgb(e) || W.hsl(e)
            }
        },
        h = function () {
            function t(e, t, n) {
                return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
            }
            return function (a, o, i, s) {
                if (0 <= a && 1 >= a && 0 <= i && 1 >= i) {
                    var r = new Float32Array(11);
                    if (a !== o || i !== s)
                        for (var e = 0; 11 > e; ++e) r[e] = t(.1 * e, a, i);
                    return function (e) {
                        if (a === o && i === s) return e;
                        if (0 === e) return 0;
                        if (1 === e) return 1;
                        for (var d = 0, c = 1; 10 != c && r[c] <= e; ++c) d += .1;
                        --c;
                        var c = d + .1 * ((e - r[c]) / (r[c + 1] - r[c])),
                            p = 3 * (1 - 3 * i + 3 * a) * c * c + 2 * (3 * i - 6 * a) * c + 3 * a;
                        if (.001 <= p) {
                            for (d = 0; 4 > d && (p = 3 * (1 - 3 * i + 3 * a) * c * c + 2 * (3 * i - 6 * a) * c + 3 * a, 0 != p); ++d) var u = t(c, a, i) - e,
                                c = c - u / p;
                            e = c
                        } else if (0 == p) e = c;
                        else {
                            var c = d,
                                d = d + .1,
                                f = 0;
                            do u = c + (d - c) / 2, p = t(u, a, i) - e, 0 < p ? d = u : c = u; while (1e-7 < Math.abs(p) && 10 > ++f);
                            e = u
                        }
                        return t(e, o, s)
                    }
                }
            }
        }(),
        A = function () {
            function t(e, t) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t)
            }
            var n = ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"],
                a = {
                    In: [
                        [.55, .085, .68, .53],
                        [.55, .055, .675, .19],
                        [.895, .03, .685, .22],
                        [.755, .05, .855, .06],
                        [.47, 0, .745, .715],
                        [.95, .05, .795, .035],
                        [.6, .04, .98, .335],
                        [.6, -.28, .735, .045], t
                    ],
                    Out: [
                        [.25, .46, .45, .94],
                        [.215, .61, .355, 1],
                        [.165, .84, .44, 1],
                        [.23, 1, .32, 1],
                        [.39, .575, .565, 1],
                        [.19, 1, .22, 1],
                        [.075, .82, .165, 1],
                        [.175, .885, .32, 1.275],
                        function (e, n) {
                            return 1 - t(1 - e, n)
                        }
                    ],
                    InOut: [
                        [.455, .03, .515, .955],
                        [.645, .045, .355, 1],
                        [.77, 0, .175, 1],
                        [.86, 0, .07, 1],
                        [.445, .05, .55, .95],
                        [1, 0, 0, 1],
                        [.785, .135, .15, .86],
                        [.68, -.55, .265, 1.55],
                        function (e, n) {
                            return .5 > e ? t(2 * e, n) / 2 : 1 - t(-2 * e + 2, n) / 2
                        }
                    ]
                },
                o = {
                    linear: h(.25, .25, .75, .75)
                },
                i = {},
                s;
            for (s in a) i.type = s, a[i.type].forEach(function (e) {
                return function (t, a) {
                    o["ease" + e.type + n[a]] = W.fnc(t) ? t : h.apply($jscomp$this, t)
                }
            }(i)), i = {
                type: i.type
            };
            return o
        }(),
        F = {
            css: function (e, t, n) {
                return e.style[t] = n
            },
            attribute: function (e, t, n) {
                return e.setAttribute(t, n)
            },
            object: function (e, t, n) {
                return e[t] = n
            },
            transform: function (e, t, n, a, o) {
                a[o] || (a[o] = []), a[o].push(t + "(" + n + ")")
            }
        },
        q = [],
        v = 0,
        Y = function () {
            function e() {
                v = requestAnimationFrame(t)
            }

            function t(t) {
                var n = q.length;
                if (n) {
                    for (var a = 0; a < n;) q[a] && q[a].tick(t), a++;
                    e()
                } else cancelAnimationFrame(v), v = 0
            }
            return e
        }(),
        X;
    return R.version = "2.2.0", R.speed = 1, R.running = q, R.remove = function (e) {
        e = k(e);
        for (var t = q.length; t--;)
            for (var n = q[t], o = n.animations, s = o.length; s--;) i(e, o[s].animatable.target) && (o.splice(s, 1), o.length || n.pause())
    }, R.getValue = _, R.path = function (e, n) {
        var o = W.str(e) ? t(e)[0] : e;
        return function (e) {
            return {
                el: o,
                property: e,
                totalLength: T(o) * ((n || 100) / 100)
            }
        }
    }, R.setDashoffset = function (e) {
        var t = T(e);
        return e.setAttribute("stroke-dasharray", t), t
    }, R.bezier = h, R.easings = A, R.timeline = function (t) {
        var a = R(t);
        return a.pause(), a.duration = 0, a.add = function (e) {
            return a.children.forEach(function (e) {
                e.began = !0, e.completed = !0
            }), n(e).forEach(function (n) {
                var o = l(n, r(M, t || {}));
                o.targets = o.targets || t.targets, n = a.duration;
                var i = o.offset;
                o.autoplay = !1, o.direction = a.direction, o.offset = W.und(i) ? n : C(i, n), a.began = !0, a.completed = !0, a.seek(o.offset), o = R(o), o.began = !0, o.completed = !0, o.duration > n && (a.duration = o.duration), a.children.push(o)
            }), a.seek(0), a.reset(), a.autoplay && a.restart(), a
        }, a
    }, R.random = function (e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, R
}), ! function (n, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : n.EvEmitter = e()
}("undefined" == typeof window ? this : window, function () {
    function n() {}
    var e = n.prototype;
    return e.on = function (a, e) {
        if (a && e) {
            var t = this._events = this._events || {},
                o = t[a] = t[a] || [];
            return -1 == o.indexOf(e) && o.push(e), this
        }
    }, e.once = function (a, e) {
        if (a && e) {
            this.on(a, e);
            var t = this._onceEvents = this._onceEvents || {},
                o = t[a] = t[a] || {};
            return o[e] = !0, this
        }
    }, e.off = function (a, e) {
        var t = this._events && this._events[a];
        if (t && t.length) {
            var o = t.indexOf(e);
            return -1 != o && t.splice(o, 1), this
        }
    }, e.emitEvent = function (a, e) {
        var l = this._events && this._events[a];
        if (l && l.length) {
            var i = 0,
                d = l[i];
            e = e || [];
            for (var c = this._onceEvents && this._onceEvents[a], r; d;) r = c && c[d], r && (this.off(a, d), delete c[d]), d.apply(this, e), i += r ? 0 : 1, d = l[i];
            return this
        }
    }, e.allOff = e.removeAllListeners = function () {
        delete this._events, delete this._onceEvents
    }, n
}),
function (n, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (t) {
        return e(n, t)
    }) : "object" == typeof module && module.exports ? module.exports = e(n, require("ev-emitter")) : n.imagesLoaded = e(n, n.EvEmitter)
}("undefined" == typeof window ? this : window, function (l, e) {
    function c(n, e) {
        for (var t in e) n[t] = e[t];
        return n
    }

    function i(n) {
        var e = [];
        if (Array.isArray(n)) e = n;
        else if ("number" == typeof n.length)
            for (var a = 0; a < n.length; a++) e.push(n[a]);
        else e.push(n);
        return e
    }

    function n(a, o, t) {
        return this instanceof n ? ("string" == typeof a && (a = document.querySelectorAll(a)), this.elements = i(a), this.options = c({}, this.options), "function" == typeof o ? t = o : c(this.options, o), t && this.on("always", t), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(function () {
            this.check()
        }.bind(this))) : new n(a, o, t)
    }

    function o(t) {
        this.img = t
    }

    function r(n, e) {
        this.url = n, this.element = e, this.img = new Image
    }
    var s = l.jQuery,
        p = l.console;
    n.prototype = Object.create(e.prototype), n.prototype.options = {}, n.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, n.prototype.addElementImages = function (l) {
        "IMG" == l.nodeName && this.addImage(l), !0 === this.options.background && this.addElementBackgroundImages(l);
        var e = l.nodeType;
        if (e && a[e]) {
            for (var t = l.querySelectorAll("img"), i = 0, d; i < t.length; i++) d = t[i], this.addImage(d);
            if ("string" == typeof this.options.background) {
                var c = l.querySelectorAll(this.options.background);
                for (i = 0; i < c.length; i++) {
                    var r = c[i];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var a = {
        1: !0,
        9: !0,
        11: !0
    };
    return n.prototype.addElementBackgroundImages = function (a) {
        var e = getComputedStyle(a);
        if (e)
            for (var t = /url\((['"])?(.*?)\1\)/gi, i = t.exec(e.backgroundImage), s; null !== i;) s = i && i[2], s && this.addBackground(s, a), i = t.exec(e.backgroundImage)
    }, n.prototype.addImage = function (n) {
        var e = new o(n);
        this.images.push(e)
    }, n.prototype.addBackground = function (n, e) {
        var t = new r(n, e);
        this.images.push(t)
    }, n.prototype.check = function () {
        function n(t, e, o) {
            setTimeout(function () {
                a.progress(t, e, o)
            })
        }
        var a = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
            e.once("progress", n), e.check()
        }) : void this.complete()
    }, n.prototype.progress = function (n, e, t) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !n.isLoaded, this.emitEvent("progress", [this, n, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, n), this.progressedCount == this.images.length && this.complete(), this.options.debug && p && p.log("progress: " + t, n, e)
    }, n.prototype.complete = function () {
        var n = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(n, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, o.prototype = Object.create(e.prototype), o.prototype.check = function () {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, o.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, o.prototype.confirm = function (n, e) {
        this.isLoaded = n, this.emitEvent("progress", [this, this.img, e])
    }, o.prototype.handleEvent = function (n) {
        var e = "on" + n.type;
        this[e] && this[e](n)
    }, o.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, o.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, o.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype = Object.create(o.prototype), r.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, r.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype.confirm = function (n, e) {
        this.isLoaded = n, this.emitEvent("progress", [this, this.element, e])
    }, n.makeJQueryPlugin = function (e) {
        e = e || l.jQuery, e && (s = e, s.fn.imagesLoaded = function (a, e) {
            var t = new n(this, a, e);
            return t.jqDeferred.promise(s(this))
        })
    }, n.makeJQueryPlugin(), n
}), ! function (e, t) {
    var n = t(e, e.document);
    e.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
}(window, function (i, _) {
    "use strict";
    if (_.getElementsByClassName) {
        var b = _.documentElement,
            h = i.Date,
            a = i.HTMLPictureElement,
            e = i.addEventListener,
            T = i.setTimeout,
            S = i.requestAnimationFrame || T,
            l = i.requestIdleCallback,
            k = /^picture$/i,
            n = ["load", "error", "lazyincluded", "_lazyloaded"],
            o = {},
            I = Array.prototype.forEach,
            p = function (e, t) {
                return o[t] || (o[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), o[t].test(e.getAttribute("class") || "") && o[t]
            },
            r = function (e, t) {
                p(e, t) || e.setAttribute("class", (e.getAttribute("class") || "").trim() + " " + t)
            },
            s = function (e, t) {
                var n;
                (n = p(e, t)) && e.setAttribute("class", (e.getAttribute("class") || "").replace(n, " "))
            },
            t = function (e, a, o) {
                var i = o ? "addEventListener" : "removeEventListener";
                o && t(e, a), n.forEach(function (t) {
                    e[i](t, a)
                })
            },
            u = function (t, n, a, o, i) {
                var s = _.createEvent("Event");
                return a || (a = {}), a.instance = C, s.initEvent(n, !o, !i), s.detail = a, t.dispatchEvent(s), s
            },
            v = function (t, n) {
                var o;
                !a && (o = i.picturefill || A.pf) ? (n && n.src && !t.getAttribute("srcset") && t.setAttribute("srcset", n.src), o({
                    reevaluate: !0,
                    elements: [t]
                })) : n && n.src && (t.src = n.src)
            },
            m = function (e, t) {
                return (getComputedStyle(e, null) || {})[t]
            },
            g = function (e, t, n) {
                for (n = n || e.offsetWidth; n < A.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                return n
            },
            y = function () {
                var t = [],
                    n = [],
                    o = t,
                    i = function () {
                        var e = o;
                        for (o = t.length ? n : t, s = !0, r = !1; e.length;) e.shift()();
                        s = !1
                    },
                    e = function (t, n) {
                        s && !n ? t.apply(this, arguments) : (o.push(t), r || (r = !0, (_.hidden ? T : S)(i)))
                    },
                    s, r;
                return e._lsFlush = i, e
            }(),
            x = function (e, t) {
                return t ? function () {
                    y(e)
                } : function () {
                    var t = this,
                        n = arguments;
                    y(function () {
                        e.apply(t, n)
                    })
                }
            },
            f = function (t) {
                var n = 0,
                    o = A.throttleDelay,
                    e = A.ricTimeout,
                    a = function () {
                        i = !1, n = h.now(), t()
                    },
                    s = l && 49 < e ? function () {
                        l(a, {
                            timeout: e
                        }), e !== A.ricTimeout && (e = A.ricTimeout)
                    } : x(function () {
                        T(a)
                    }, !0),
                    i;
                return function (t) {
                    var r;
                    (t = !0 === t) && (e = 33), i || (i = !0, r = o - (h.now() - n), 0 > r && (r = 0), t || 9 > r ? s() : T(s, r))
                }
            },
            w = function (t) {
                var n = function () {
                        a = null, t()
                    },
                    e = function () {
                        var t = h.now() - o;
                        t < 99 ? T(e, 99 - t) : (l || n)(n)
                    },
                    a, o;
                return function () {
                    o = h.now(), a || (a = T(e, 99))
                }
            },
            C, A;
        ! function () {
            var e = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                },
                t;
            for (t in A = i.lazySizesConfig || i.lazysizesConfig || {}, e) t in A || (A[t] = e[t]);
            i.lazySizesConfig = A, T(function () {
                A.init && E()
            })
        }();
        var L = function () {
                var n = /^img$/i,
                    d = /^iframe$/i,
                    c = "onscroll" in i && !/(gle|ing)bot/.test(navigator.userAgent),
                    E = 0,
                    L = 0,
                    N = -1,
                    z = function (e) {
                        L--, e && !(0 > L) && e.target || (L = 0)
                    },
                    R = function (e) {
                        return null == de && (de = "hidden" == m(_.body, "visibility")), de || "hidden" != m(e.parentNode, "visibility") && "hidden" != m(e, "visibility")
                    },
                    S = function (e, t) {
                        var n = e,
                            a = R(e),
                            o;
                        for (ie -= t, le += t, se -= t, re += t; a && (n = n.offsetParent) && n != _.body && n != b;)(a = 0 < (m(n, "opacity") || 1)) && "visible" != m(n, "overflow") && (o = n.getBoundingClientRect(), a = re > o.left && se < o.right && le > o.top - 1 && ie < o.bottom + 1);
                        return a
                    },
                    a = function () {
                        var e = C.elements,
                            o, i, l, d, u, g, y, v, x, w, T, I;
                        if ((te = A.loadMode) && 8 > L && (o = e.length)) {
                            for (i = 0, N++, w = !A.expand || 1 > A.expand ? 500 < b.clientHeight && 500 < b.clientWidth ? 500 : 370 : A.expand, C._defEx = w, T = w * A.expFactor, I = A.hFac, de = null, E < T && 1 > L && 2 < N && 2 < te && !_.hidden ? (E = T, N = 0) : E = 1 < te && 1 < N && 6 > L ? w : 0; i < o; i++)
                                if (e[i] && !e[i]._lazyRace)
                                    if (!c) U(e[i]);
                                    else if (!((v = e[i].getAttribute("data-expand")) && (g = 1 * v) || (g = E), x !== g && (ae = innerWidth + g * I, oe = innerHeight + g, y = -1 * g, x = g), l = e[i].getBoundingClientRect(), (le = l.bottom) >= y && (ie = l.top) <= oe && (re = l.right) >= y * I && (se = l.left) <= ae && (le || re || se || ie) && (A.loadHidden || R(e[i])) && (Z && 3 > L && !v && (3 > te || 4 > N) || S(e[i], g)))) !u && Z && !d && 4 > L && 4 > N && 2 < te && (K[0] || A.preloadAfterLoad) && (K[0] || !v && (le || re || se || ie || "auto" != e[i].getAttribute(A.sizesAttr))) && (d = K[0] || e[i]);
                            else if (U(e[i]), u = !0, 9 < L) break;
                            d && !u && U(d)
                        }
                    },
                    j = f(a),
                    M = function (e) {
                        var n = e.target;
                        return n._lazyCache ? void delete n._lazyCache : void(z(e), r(n, A.loadedClass), s(n, A.loadingClass), t(n, B), u(n, "lazyloaded"))
                    },
                    W = x(M),
                    B = function (e) {
                        W({
                            target: e.target
                        })
                    },
                    q = function (e, t) {
                        try {
                            e.contentWindow.location.replace(t)
                        } catch (n) {
                            e.src = t
                        }
                    },
                    Y = function (e) {
                        var t = e.getAttribute(A.srcsetAttr),
                            n;
                        (n = A.customMedia[e.getAttribute("data-media") || e.getAttribute("media")]) && e.setAttribute("media", n), t && e.setAttribute("srcset", t)
                    },
                    X = x(function (n, a, i, c, e) {
                        var f, m, b, x, _, w;
                        (_ = u(n, "lazybeforeunveil", a)).defaultPrevented || (c && (i ? r(n, A.autosizesClass) : n.setAttribute("sizes", c)), m = n.getAttribute(A.srcsetAttr), f = n.getAttribute(A.srcAttr), e && (b = n.parentNode, x = b && k.test(b.nodeName || "")), w = a.firesLoad || "src" in n && (m || f || x), _ = {
                            target: n
                        }, r(n, A.loadingClass), w && (clearTimeout(ee), ee = T(z, 2500), t(n, B, !0)), x && I.call(b.getElementsByTagName("source"), Y), m ? n.setAttribute("srcset", m) : f && !x && (d.test(n.nodeName) ? q(n, f) : n.src = f), e && (m || x) && v(n, {
                            src: f
                        })), n._lazyRace && delete n._lazyRace, s(n, A.lazyClass), y(function () {
                            (!w || n.complete && 1 < n.naturalWidth) && (M(_), n._lazyCache = !0, T(function () {
                                "_lazyCache" in n && delete n._lazyCache
                            }, 9))
                        }, !0)
                    }),
                    U = function (t) {
                        var a = n.test(t.nodeName),
                            o = a && (t.getAttribute(A.sizesAttr) || t.getAttribute("sizes")),
                            e = "auto" == o,
                            i;
                        (e || !Z) && a && (t.getAttribute("src") || t.srcset) && !t.complete && !p(t, A.errorClass) && p(t, A.lazyClass) || (i = u(t, "lazyunveilread").detail, e && D.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, L++, X(t, i, e, o, a))
                    },
                    V = function () {
                        if (!Z) {
                            if (999 > h.now() - ne) return void T(V, 999);
                            var t = w(function () {
                                A.loadMode = 3, j()
                            });
                            Z = !0, A.loadMode = 3, j(), e("scroll", function () {
                                3 == A.loadMode && (A.loadMode = 2), t()
                            }, !0)
                        }
                    },
                    K, Z, ee, te, ne, ae, oe, ie, se, re, le, de;
                return {
                    _: function () {
                        ne = h.now(), C.elements = _.getElementsByClassName(A.lazyClass), K = _.getElementsByClassName(A.lazyClass + " " + A.preloadClass), e("scroll", j, !0), e("resize", j, !0), i.MutationObserver ? new MutationObserver(j).observe(b, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0
                        }) : (b.addEventListener("DOMNodeInserted", j, !0), b.addEventListener("DOMAttrModified", j, !0), setInterval(j, 999)), e("hashchange", j, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (e) {
                            _.addEventListener(e, j, !0)
                        }), /d$|^c/.test(_.readyState) ? V() : (e("load", V), _.addEventListener("DOMContentLoaded", j), T(V, 2e4)), C.elements.length ? (a(), y._lsFlush()) : j()
                    },
                    checkElems: j,
                    unveil: U
                }
            }(),
            D = function () {
                var t = x(function (t, n, a, o) {
                        var i, s, r;
                        if (t._lazysizesWidth = o, o += "px", t.setAttribute("sizes", o), k.test(n.nodeName || ""))
                            for (i = n.getElementsByTagName("source"), s = 0, r = i.length; s < r; s++) i[s].setAttribute("sizes", o);
                        a.detail.dataAttr || v(t, a.detail)
                    }),
                    n = function (n, a, o) {
                        var i = n.parentNode,
                            s;
                        i && (o = g(n, i, o), s = u(n, "lazybeforesizes", {
                            width: o,
                            dataAttr: !!a
                        }), s.defaultPrevented || (o = s.detail.width) && o !== n._lazysizesWidth && t(n, i, s, o))
                    },
                    o = function () {
                        var e = s.length,
                            t;
                        if (e)
                            for (t = 0; t < e; t++) n(s[t])
                    },
                    i = w(o),
                    s;
                return {
                    _: function () {
                        s = _.getElementsByClassName(A.autosizesClass), e("resize", i)
                    },
                    checkElems: i,
                    updateElem: n
                }
            }(),
            E = function () {
                E.i || (E.i = !0, D._(), L._())
            };
        return C = {
            cfg: A,
            autoSizer: D,
            loader: L,
            init: E,
            uP: v,
            aC: r,
            rC: s,
            hC: p,
            fire: u,
            gW: g,
            rAF: y
        }
    }
}), ! function (t, n, a, o) {
    function s(e, n) {
        this.settings = null, this.options = t.extend({}, s.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function (e, n) {
            this._handlers[n] = t.proxy(this[n], this)
        }, this)), t.each(s.Plugins, t.proxy(function (e, t) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
        }, this)), t.each(s.Workers, t.proxy(function (e, n) {
            this._pipe.push({
                filter: n.filter,
                run: t.proxy(n.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    s.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: n,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, s.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, s.Type = {
        Event: "event",
        State: "state"
    }, s.Plugins = {}, s.Workers = [{
        filter: ["width", "settings"],
        run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var n = this.settings.margin || "",
                a = !this.settings.autoWidth,
                o = this.settings.rtl,
                i = {
                    width: "auto",
                    "margin-left": o ? n : "",
                    "margin-right": o ? "" : n
                };
            a || this.$stage.children().css(i), t.css = i
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (t) {
            var n = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                a = null,
                o = this._items.length,
                i = !this.settings.autoWidth,
                e = [];
            for (t.items = {
                    merge: !1,
                    width: n
                }; o--;) a = this._mergers[o], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, t.items.merge = 1 < a || t.items.merge, e[o] = i ? n * a : this._items[o].width();
            this._widths = e
        }
    }, {
        filter: ["items", "settings"],
        run: function () {
            var n = [],
                a = this._items,
                o = this.settings,
                s = Math.max(2 * o.items, 4),
                e = 2 * Math.ceil(a.length / 2),
                r = o.loop && a.length ? o.rewind ? s : Math.max(s, e) : 0,
                l = "",
                d = "";
            for (r /= 2; 0 < r;) n.push(this.normalize(n.length / 2, !0)), l += a[n[n.length - 1]][0].outerHTML, n.push(this.normalize(a.length - 1 - (n.length - 1) / 2, !0)), d = a[n[n.length - 1]][0].outerHTML + d, r -= 1;
            this._clones = n, t(l).addClass("cloned").appendTo(this.$stage), t(d).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            for (var t = this.settings.rtl ? 1 : -1, n = this._clones.length + this._items.length, a = -1, o = 0, i = 0, s = []; ++a < n;) o = s[a - 1] || 0, i = this._widths[this.relative(a)] + this.settings.margin, s.push(o + i * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function () {
            var e = this.settings.stagePadding,
                t = this._coordinates,
                n = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                    "padding-left": e || "",
                    "padding-right": e || ""
                };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (e) {
            var t = this._coordinates.length,
                n = !this.settings.autoWidth,
                a = this.$stage.children();
            if (n && e.items.merge)
                for (; t--;) e.css.width = this._widths[this.relative(t)], a.eq(t).css(e.css);
            else n && (e.css.width = e.items.width, a.css(e.css))
        }
    }, {
        filter: ["items"],
        run: function () {
            1 > this._coordinates.length && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function (e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"],
        run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function () {
            var t = this.settings.rtl ? 1 : -1,
                e = 2 * this.settings.stagePadding,
                n = this.coordinates(this.current()) + e,
                o = n + this.width() * t,
                s = [],
                i, r, l, p;
            for (l = 0, p = this._coordinates.length; l < p; l++) i = this._coordinates[l - 1] || 0, r = Math.abs(this._coordinates[l]) + e * t, (this.op(i, "<=", n) && this.op(i, ">", o) || this.op(r, "<", n) && this.op(r, ">", o)) && s.push(l);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], s.prototype.initializeStage = function () {
        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(t("<div/>", {
            class: this.settings.stageOuterClass
        })), this.$element.append(this.$stage.parent()))
    }, s.prototype.initializeItems = function () {
        var e = this.$element.find(".owl-item");
        return e.length ? (this._items = e.get().map(function (e) {
            return t(e)
        }), this._mergers = this._items.map(function () {
            return 1
        }), void this.refresh()) : void(this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass))
    }, s.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var e, t, n;
            e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o, n = this.$element.children(t).width(), e.length && 0 >= n && this.preloadAutoWidthImages(e)
        }
        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, s.prototype.isVisible = function () {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }, s.prototype.setup = function () {
        var n = this.viewport(),
            a = this.options.responsive,
            o = -1,
            i = null;
        a ? (t.each(a, function (e) {
            e <= n && e > o && (o = +e)
        }), i = t.extend({}, this.options, a[o]), "function" == typeof i.stagePadding && (i.stagePadding = i.stagePadding()), delete i.responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + o))) : i = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: i
            }
        }), this._breakpoint = o, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, s.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, s.prototype.prepare = function (e) {
        var n = this.trigger("prepare", {
            content: e
        });
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: n.data
        }), n.data
    }, s.prototype.update = function () {
        for (var n = 0, a = this._pipe.length, o = t.proxy(function (e) {
                return this[e]
            }, this._invalidated), i = {}; n < a;)(this._invalidated.all || 0 < t.grep(this._pipe[n].filter, o).length) && this._pipe[n].run(i), n++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, s.prototype.width = function (e) {
        switch (e = e || s.Width.Default) {
            case s.Width.Inner:
            case s.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin;
        }
    }, s.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, s.prototype.onThrottledResize = function () {
        n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, s.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    }, s.prototype.registerEventHandlers = function () {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, s.prototype.onDragStart = function (e) {
        var n = null;
        3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
            x: n[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        }) : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(a).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(a).one("mousemove.owl.core touchmove.owl.core", t.proxy(function (e) {
            var n = this.difference(this._drag.pointer, this.pointer(e));
            t(a).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, s.prototype.onDragMove = function (t) {
        var n = null,
            a = null,
            o = null,
            i = this.difference(this._drag.pointer, this.pointer(t)),
            e = this.difference(this._drag.stage.start, i);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (n = this.coordinates(this.minimum()), a = this.coordinates(this.maximum() + 1) - n, e.x = ((e.x - n) % a + a) % a + n) : (n = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), a = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), o = this.settings.pullDrag ? -1 * i.x / 5 : 0, e.x = Math.max(Math.min(e.x, n + o), a + o)), this._drag.stage.current = e, this.animate(e.x))
    }, s.prototype.onDragEnd = function (n) {
        var o = this.difference(this._drag.pointer, this.pointer(n)),
            i = this._drag.stage.current,
            e = 0 < o.x ^ this.settings.rtl ? "left" : "right";
        t(a).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== o.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 === o.x ? this._drag.direction : e)), this.invalidate("position"), this.update(), this._drag.direction = e, (3 < Math.abs(o.x) || 300 < new Date().getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, s.prototype.closest = function (n, s) {
        var r = -1,
            l = this.width(),
            d = this.coordinates();
        return this.settings.freeDrag || t.each(d, t.proxy(function (e, t) {
            return "left" === s && n > t - 30 && n < t + 30 ? r = e : "right" === s && n > t - l - 30 && n < t - l + 30 ? r = e + 1 : this.op(n, "<", t) && this.op(n, ">", d[e + 1] === o ? t - l : d[e + 1]) && (r = "left" === s ? e + 1 : e), -1 === r
        }, this)), this.settings.loop || (this.op(n, ">", d[this.minimum()]) ? r = n = this.minimum() : this.op(n, "<", d[this.maximum()]) && (r = n = this.maximum())), r
    }, s.prototype.animate = function (e) {
        var n = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : n ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, s.prototype.is = function (e) {
        return this._states.current[e] && 0 < this._states.current[e]
    }, s.prototype.current = function (e) {
        if (e === o) return this._current;
        if (0 === this._items.length) return o;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: e
                }
            });
            t.data !== o && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, s.prototype.invalidate = function (e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function (e, t) {
            return t
        })
    }, s.prototype.reset = function (e) {
        (e = this.normalize(e)) !== o && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, s.prototype.normalize = function (t, n) {
        var i = this._items.length,
            s = n ? 0 : this._clones.length;
        return !this.isNumeric(t) || 1 > i ? t = o : (0 > t || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, s.prototype.relative = function (e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, s.prototype.maximum = function (t) {
        var n = this.settings,
            e = this._coordinates.length,
            a, o, i;
        if (n.loop) e = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            if (a = this._items.length)
                for (o = this._items[--a].width(), i = this.$element.width(); a-- && !((o += this._items[a].width() + this.settings.margin) > i););
            e = a + 1
        } else e = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (e -= this._clones.length / 2), Math.max(e, 0)
    }, s.prototype.minimum = function (e) {
        return e ? 0 : this._clones.length / 2
    }, s.prototype.items = function (e) {
        return e === o ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, s.prototype.mergers = function (e) {
        return e === o ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, s.prototype.clones = function (n) {
        var i = this._clones.length / 2,
            s = i + this._items.length,
            e = function (e) {
                return 0 == e % 2 ? s + e / 2 : i - (e + 1) / 2
            };
        return n === o ? t.map(this._clones, function (t, n) {
            return e(n)
        }) : t.map(this._clones, function (t, a) {
            return t === n ? e(a) : null
        })
    }, s.prototype.speed = function (e) {
        return e !== o && (this._speed = e), this._speed
    }, s.prototype.coordinates = function (n) {
        var a = 1,
            i = n - 1,
            s;
        return n === o ? t.map(this._coordinates, t.proxy(function (e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (a = -1, i = n + 1), s = this._coordinates[n], s += (this.width() - s + (this._coordinates[i] || 0)) / 2 * a) : s = this._coordinates[i] || 0, s = Math.ceil(s))
    }, s.prototype.duration = function (e, t, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }, s.prototype.to = function (t, n) {
        var o = this.current(),
            s = null,
            r = t - this.relative(o),
            l = (0 < r) - (0 > r),
            p = this._items.length,
            u = this.minimum(),
            g = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > p / 2 && (r += -1 * l * p), t = o + r, (s = ((t - u) % p + p) % p + u) !== t && s - r <= g && 0 < s - r && (o = s - r, t = s, this.reset(o))) : this.settings.rewind ? (g += 1, t = (t % g + g) % g) : t = Math.max(u, Math.min(g, t)), this.speed(this.duration(o, t, n)), this.current(t), this.isVisible() && this.update()
    }, s.prototype.next = function (e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, s.prototype.prev = function (e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, s.prototype.onTransitionEnd = function (e) {
        return !(e !== o && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) && void(this.leave("animating"), this.trigger("translated"))
    }, s.prototype.viewport = function () {
        var e;
        return this.options.responsiveBaseElement === n ? n.innerWidth ? e = n.innerWidth : a.documentElement && a.documentElement.clientWidth ? e = a.documentElement.clientWidth : console.warn("Can not detect viewport width.") : e = t(this.options.responsiveBaseElement).width(), e
    }, s.prototype.replace = function (e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function () {
            return 1 === this.nodeType
        }).each(t.proxy(function (e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, s.prototype.add = function (n, a) {
        var i = this.relative(this._current);
        a = a === o ? this._items.length : this.normalize(a, !0), n = n instanceof jQuery ? n : t(n), this.trigger("add", {
            content: n,
            position: a
        }), n = this.prepare(n), 0 === this._items.length || a === this._items.length ? (0 === this._items.length && this.$stage.append(n), 0 !== this._items.length && this._items[a - 1].after(n), this._items.push(n), this._mergers.push(1 * n.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[a].before(n), this._items.splice(a, 0, n), this._mergers.splice(a, 0, 1 * n.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
            content: n,
            position: a
        })
    }, s.prototype.remove = function (e) {
        (e = this.normalize(e, !0)) !== o && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, s.prototype.preloadAutoWidthImages = function (e) {
        e.each(t.proxy(function (e, n) {
            this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy(function (e) {
                n.attr("src", e.target.src), n.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }, this))
    }, s.prototype.destroy = function () {
        for (var e in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(a).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[e].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, s.prototype.op = function (e, t, n) {
        var a = this.settings.rtl;
        return "<" === t ? a ? e > n : e < n : ">" === t ? a ? e < n : e > n : ">=" === t ? a ? e <= n : e >= n : "<=" === t ? a ? e >= n : e <= n : void 0
    }, s.prototype.on = function (e, t, n, a) {
        e.addEventListener ? e.addEventListener(t, n, a) : e.attachEvent && e.attachEvent("on" + t, n)
    }, s.prototype.off = function (e, t, n, a) {
        e.removeEventListener ? e.removeEventListener(t, n, a) : e.detachEvent && e.detachEvent("on" + t, n)
    }, s.prototype.trigger = function (e, n, a) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            r = t.camelCase(t.grep(["on", e, a], function (e) {
                return e
            }).join("-").toLowerCase()),
            i = t.Event([e, "owl", a || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, o, n));
        return this._supress[e] || (t.each(this._plugins, function (e, t) {
            t.onTrigger && t.onTrigger(i)
        }), this.register({
            type: s.Type.Event,
            name: e
        }), this.$element.trigger(i), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, i)), i
    }, s.prototype.enter = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (e, t) {
            this._states.current[t] === o && (this._states.current[t] = 0), this._states.current[t]++
        }, this))
    }, s.prototype.leave = function (e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function (e, t) {
            this._states.current[t]--
        }, this))
    }, s.prototype.register = function (e) {
        if (!(e.type === s.Type.Event)) e.type === s.Type.State && (this._states.tags[e.name] = this._states.tags[e.name] ? this._states.tags[e.name].concat(e.tags) : e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function (n, a) {
            return t.inArray(n, this._states.tags[e.name]) === a
        }, this)));
        else if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
            var n = t.event.special[e.name]._default;
            t.event.special[e.name]._default = function (e) {
                return n && n.apply && (!e.namespace || -1 === e.namespace.indexOf("owl")) ? n.apply(this, arguments) : e.namespace && -1 < e.namespace.indexOf("owl")
            }, t.event.special[e.name].owl = !0
        }
    }, s.prototype.suppress = function (e) {
        t.each(e, t.proxy(function (e, t) {
            this._supress[t] = !0
        }, this))
    }, s.prototype.release = function (e) {
        t.each(e, t.proxy(function (e, t) {
            delete this._supress[t]
        }, this))
    }, s.prototype.pointer = function (e) {
        var t = {
            x: null,
            y: null
        };
        return e = e.originalEvent || e || n.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t
    }, s.prototype.isNumeric = function (e) {
        return !isNaN(parseFloat(e))
    }, s.prototype.difference = function (e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }, t.fn.owlCarousel = function (e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var a = t(this),
                o = a.data("owl.carousel");
            o || (o = new s(this, "object" == typeof e && e), a.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (e, n) {
                o.register({
                    type: s.Type.Event,
                    name: n
                }), o.$element.on(n + ".owl.carousel.core", t.proxy(function (e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([n]), o[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                }, o))
            })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, n)
        })
    }, t.fn.owlCarousel.Constructor = s
}(window.Zepto || window.jQuery, window, document),
function (t, n) {
    var a = function (e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, a.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    a.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, a.prototype.watch = function () {
        this._interval || (this._visible = this._core.isVisible(), this._interval = n.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, a.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, a.prototype.destroy = function () {
        var e, t;
        for (e in n.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = a
}(window.Zepto || window.jQuery, window, document),
function (t, n, a, o) {
    var i = function (e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function (n) {
                if (n.namespace && this._core.settings && this._core.settings.lazyLoad && (n.property && "position" == n.property.name || "initialized" == n.type)) {
                    var a = this._core.settings,
                        s = a.center && Math.ceil(a.items / 2) || a.items,
                        r = a.center && -1 * s || 0,
                        l = (n.property && n.property.value !== o ? n.property.value : this._core.current()) + r,
                        d = this._core.clones().length,
                        c = t.proxy(function (e, t) {
                            this.load(t)
                        }, this);
                    for (0 < a.lazyLoadEager && (s += a.lazyLoadEager, a.loop && (l -= a.lazyLoadEager, s++)); r++ < s;) this.load(d / 2 + this._core.relative(l)), d && t.each(this._core.clones(this._core.relative(l)), c), l++
                }
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, i.prototype.load = function (a) {
        var o = this._core.$stage.children().eq(a),
            i = o && o.find(".owl-lazy");
        !i || -1 < t.inArray(o.get(0), this._loaded) || (i.each(t.proxy(function (a, o) {
            var i = t(o),
                s = 1 < n.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src") || i.attr("data-srcset"),
                r;
            this._core.trigger("load", {
                element: i,
                url: s
            }, "lazy"), i.is("img") ? i.one("load.owl.lazy", t.proxy(function () {
                i.css("opacity", 1), this._core.trigger("loaded", {
                    element: i,
                    url: s
                }, "lazy")
            }, this)).attr("src", s) : i.is("source") ? i.one("load.owl.lazy", t.proxy(function () {
                this._core.trigger("loaded", {
                    element: i,
                    url: s
                }, "lazy")
            }, this)).attr("srcset", s) : (r = new Image, r.onload = t.proxy(function () {
                i.css({
                    "background-image": "url(\"" + s + "\")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: i,
                    url: s
                }, "lazy")
            }, this), r.src = s)
        }, this)), this._loaded.push(o.get(0)))
    }, i.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function (t, n) {
    var a = function (e) {
        this._core = e, this._previousHeight = null, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, a.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var o = this;
        t(n).on("load", function () {
            o._core.settings.autoHeight && o.update()
        }), t(n).resize(function () {
            o._core.settings.autoHeight && (null != o._intervalId && clearTimeout(o._intervalId), o._intervalId = setTimeout(function () {
                o.update()
            }, 250))
        })
    };
    a.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, a.prototype.update = function () {
        var n = this._core._current,
            a = n + this._core.settings.items,
            o = this._core.settings.lazyLoad,
            i = this._core.$stage.children().toArray().slice(n, a),
            e = [],
            s = 0;
        t.each(i, function (n, a) {
            e.push(t(a).height())
        }), s = Math.max.apply(null, e), 1 >= s && o && this._previousHeight && (s = this._previousHeight), this._previousHeight = s, this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
    }, a.prototype.destroy = function () {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = a
}(window.Zepto || window.jQuery, window, document),
function (t, n, a) {
    var o = function (e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function (e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var n = t(e.content).find(".owl-video");
                    n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function (e) {
            this.play(e)
        }, this))
    };
    o.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, o.prototype.fetch = function (t, n) {
        var a = function () {
                return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            o = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            i = t.attr("data-width") || this._core.settings.videoWidth,
            e = t.attr("data-height") || this._core.settings.videoHeight,
            s = t.attr("href");
        if (!s) throw new Error("Missing video URL.");
        if (o = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), -1 < o[3].indexOf("youtu")) a = "youtube";
        else if (-1 < o[3].indexOf("vimeo")) a = "vimeo";
        else {
            if (!(-1 < o[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            a = "vzaar"
        }
        o = o[6], this._videos[s] = {
            type: a,
            id: o,
            width: i,
            height: e
        }, n.attr("data-video", s), this.thumbnail(t, this._videos[s])
    }, o.prototype.thumbnail = function (n, a) {
        var o = a.width && a.height ? "width:" + a.width + "px;height:" + a.height + "px;" : "",
            s = n.find("img"),
            r = "src",
            p = "",
            u = this._core.settings,
            c = function (e) {
                g = "<div class=\"owl-video-play-icon\"></div>", l = u.lazyLoad ? t("<div/>", {
                    class: "owl-video-tn " + p,
                    srcType: e
                }) : t("<div/>", {
                    class: "owl-video-tn",
                    style: "opacity:1;background-image:url(" + e + ")"
                }), n.after(l), n.after(g)
            },
            l, g, m;
        return (n.wrap(t("<div/>", {
            class: "owl-video-wrapper",
            style: o
        })), this._core.settings.lazyLoad && (r = "data-src", p = "owl-lazy"), s.length) ? (c(s.attr(r)), s.remove(), !1) : void("youtube" === a.type ? (m = "//img.youtube.com/vi/" + a.id + "/hqdefault.jpg", c(m)) : "vimeo" === a.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + a.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (e) {
                m = e[0].thumbnail_large, c(m)
            }
        }) : "vzaar" === a.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + a.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (e) {
                m = e.framegrab_url, c(m)
            }
        }))
    }, o.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, o.prototype.play = function (n) {
        var a = t(n.target),
            o = a.closest("." + this._core.settings.itemClass),
            i = this._videos[o.attr("data-video")],
            s = i.width || "100%",
            r = i.height || this._core.$stage.height(),
            l;
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), o = this._core.items(this._core.relative(o.index())), this._core.reset(o.index()), l = t("<iframe frameborder=\"0\" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>"), l.attr("height", r), l.attr("width", s), "youtube" === i.type ? l.attr("src", "//www.youtube.com/embed/" + i.id + "?autoplay=1&rel=0&v=" + i.id) : "vimeo" === i.type ? l.attr("src", "//player.vimeo.com/video/" + i.id + "?autoplay=1") : "vzaar" === i.type && l.attr("src", "//view.vzaar.com/" + i.id + "/player?autoplay=true"), t(l).wrap("<div class=\"owl-video-frame\" />").insertAfter(o.find(".owl-video")), this._playing = o.addClass("owl-video-playing"))
    }, o.prototype.isInFullScreen = function () {
        var e = a.fullscreenElement || a.mozFullScreenElement || a.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, o.prototype.destroy = function () {
        var e, t;
        for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = o
}(window.Zepto || window.jQuery, window, document),
function (t, n, a, o) {
    var i = function (e) {
        this.core = e, this.core.options = t.extend({}, i.Defaults, this.core.options), this.swapping = !0, this.previous = o, this.next = o, this.handlers = {
            "change.owl.carousel": t.proxy(function (e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function (e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this),
            "translate.owl.carousel": t.proxy(function (e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    i.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, i.prototype.swap = function () {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var n = t.proxy(this.clear, this),
                a = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                e = this.core.settings.animateIn,
                i = this.core.settings.animateOut,
                s;
            this.core.current() !== this.previous && (i && (s = this.core.coordinates(this.previous) - this.core.coordinates(this.next), a.one(t.support.animation.end, n).css({
                left: s + "px"
            }).addClass("animated owl-animated-out").addClass(i)), e && o.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(e))
        }
    }, i.prototype.clear = function (e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, i.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = i
}(window.Zepto || window.jQuery, window, document),
function (t, n, a) {
    var o = function (e) {
        this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": t.proxy(function (e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function (e, t, n) {
                e.namespace && this.play(t, n)
            }, this),
            "stop.owl.autoplay": t.proxy(function (e) {
                e.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
    };
    o.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, o.prototype._next = function (e) {
        this._call = n.setTimeout(t.proxy(this._next, this, e), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || a.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
    }, o.prototype.read = function () {
        return new Date().getTime() - this._time
    }, o.prototype.play = function (a, o) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"), a = a || this._core.settings.autoplayTimeout, i = Math.min(this._time % (this._timeout || a), a), this._paused ? (this._time = this.read(), this._paused = !1) : n.clearTimeout(this._call), this._time += this.read() % a - i, this._timeout = a, this._call = n.setTimeout(t.proxy(this._next, this, o), a - i)
    }, o.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, n.clearTimeout(this._call), this._core.leave("rotating"))
    }, o.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, n.clearTimeout(this._call))
    }, o.prototype.destroy = function () {
        var e, t;
        for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
}(window.Zepto || window.jQuery, window, document),
function (t) {
    "use strict";
    var n = function (e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.push("<div class=\"" + this._core.settings.dotClass + "\">" + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function (e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function (e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function (e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    n.Defaults = {
        nav: !1,
        navText: ["<span aria-label=\"Previous\">&#x2039;</span>", "<span aria-label=\"Next\">&#x203a;</span>"],
        navSpeed: !1,
        navElement: "button type=\"button\" role=\"presentation\"",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, n.prototype.initialize = function () {
        var e = this._core.settings,
            n;
        for (n in this._controls.$relative = (e.navContainer ? t(e.navContainer) : t("<div>").addClass(e.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + e.navElement + ">").addClass(e.navClass[0]).html(e.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function () {
                this.prev(e.navSpeed)
            }, this)), this._controls.$next = t("<" + e.navElement + ">").addClass(e.navClass[1]).html(e.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function () {
                this.next(e.navSpeed)
            }, this)), e.dotsData || (this._templates = [t("<button role=\"button\">").addClass(e.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (e.dotsContainer ? t(e.dotsContainer) : t("<div>").addClass(e.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function (n) {
                var a = t(n.target).parent().is(this._controls.$absolute) ? t(n.target).index() : t(n.target).parent().index();
                n.preventDefault(), this.to(a, e.dotsSpeed)
            }, this)), this._overrides) this._core[n] = t.proxy(this[n], this)
    }, n.prototype.destroy = function () {
        var t, n, o, i, s;
        for (t in s = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
        for (n in this._controls) "$relative" === n && s.navContainer ? this._controls[n].html("") : this._controls[n].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (o in Object.getOwnPropertyNames(this)) "function" != typeof this[o] && (this[o] = null)
    }, n.prototype.update = function () {
        var t = this._core.clones().length / 2,
            n = t + this._core.items().length,
            e = this._core.maximum(!0),
            o = this._core.settings,
            i = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items,
            s, r, l;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], s = t, r = 0, l = 0; s < n; s++) {
                if (r >= i || 0 === r) {
                    if (this._pages.push({
                            start: Math.min(e, s - t),
                            end: s - t + i - 1
                        }), Math.min(e, s - t) === e) break;
                    r = 0, ++l
                }
                r += this._core.mergers(this._core.relative(s))
            }
    }, n.prototype.draw = function () {
        var n = this._core.settings,
            a = this._core.items().length <= n.items,
            o = this._core.relative(this._core.current()),
            e = n.loop || n.rewind,
            i;
        this._controls.$relative.toggleClass("disabled", !n.nav || a), n.nav && (this._controls.$previous.toggleClass("disabled", !e && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !e && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || a), n.dots && (i = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== i ? this._controls.$absolute.html(this._templates.join("")) : 0 < i ? this._controls.$absolute.append(Array(i + 1).join(this._templates[0])) : 0 > i && this._controls.$absolute.children().slice(i).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, n.prototype.onTrigger = function (e) {
        var n = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }, n.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function (t) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, n.prototype.getPosition = function (n) {
        var a = this._core.settings,
            e, o;
        return "page" == a.slideBy ? (e = t.inArray(this.current(), this._pages), o = this._pages.length, n ? ++e : --e, e = this._pages[(e % o + o) % o].start) : (e = this._core.relative(this._core.current()), o = this._core.items().length, n ? e += a.slideBy : e -= a.slideBy), e
    }, n.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, n.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, n.prototype.to = function (n, a, o) {
        var i;
        !o && this._pages.length ? (i = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(n % i + i) % i].start, a)) : t.proxy(this._overrides.to, this._core)(n, a)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document),
function (t, n, a, o) {
    "use strict";
    var i = function (e) {
        this._core = e, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function (e) {
                e.namespace && "URLHash" === this._core.settings.startPosition && t(n).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                    var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n) return;
                    this._hashes[n] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function (a) {
                if (a.namespace && "position" === a.property.name) {
                    var o = this._core.items(this._core.relative(this._core.current())),
                        i = t.map(this._hashes, function (e, t) {
                            return e === o ? t : null
                        }).join();
                    if (!i || n.location.hash.slice(1) === i) return;
                    n.location.hash = i
                }
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(n).on("hashchange.owl.navigation", t.proxy(function () {
            var t = n.location.hash.substring(1),
                a = this._core.$stage.children(),
                e = this._hashes[t] && a.index(this._hashes[t]);
            e !== o && e !== this._core.current() && this._core.to(this._core.relative(e), !1, !0)
        }, this))
    };
    i.Defaults = {
        URLhashListener: !1
    }, i.prototype.destroy = function () {
        var e, a;
        for (e in t(n).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (a in Object.getOwnPropertyNames(this)) "function" != typeof this[a] && (this[a] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function (t, n, a, o) {
    function s(n, i) {
        var s = !1,
            a = n.charAt(0).toUpperCase() + n.slice(1);
        return t.each((n + " " + l.join(a + " ") + a).split(" "), function (e, t) {
            if (r[t] !== o) return s = !i || t, !1
        }), s
    }

    function e(e) {
        return s(e, !0)
    }
    var r = t("<support>").get(0).style,
        l = ["Webkit", "Moz", "O", "ms"],
        d = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        i = {
            csstransforms: function () {
                return !!s("transform")
            },
            csstransforms3d: function () {
                return !!s("perspective")
            },
            csstransitions: function () {
                return !!s("transition")
            },
            cssanimations: function () {
                return !!s("animation")
            }
        };
    i.csstransitions() && (t.support.transition = new String(e("transition")), t.support.transition.end = d.transition.end[t.support.transition]), i.cssanimations() && (t.support.animation = new String(e("animation")), t.support.animation.end = d.animation.end[t.support.animation]), i.csstransforms() && (t.support.transform = new String(e("transform")), t.support.transform3d = i.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), ! function (n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.PerfectScrollbar = t()
}(this, function () {
    "use strict";

    function x(e) {
        return getComputedStyle(e)
    }

    function _(n, t) {
        for (var e in t) {
            var a = t[e];
            "number" == typeof a && (a += "px"), n.style[e] = a
        }
        return n
    }

    function e(n) {
        var t = document.createElement("div");
        return t.className = n, t
    }

    function C(n, t) {
        if (!u) throw new Error("No element matching method supported");
        return u.call(n, t)
    }

    function i(e) {
        e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
    }

    function r(n, a) {
        return Array.prototype.filter.call(n.children, function (e) {
            return C(e, a)
        })
    }

    function n(n, t) {
        var e = n.element.classList,
            a = g.state.scrolling(t);
        e.contains(a) ? clearTimeout(f[t]) : e.add(a)
    }

    function o(n, t) {
        f[t] = setTimeout(function () {
            return n.isAlive && n.element.classList.remove(g.state.scrolling(t))
        }, n.settings.scrollingThreshold)
    }

    function E(a, t) {
        n(a, t), o(a, t)
    }

    function a(n) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(n);
        var t = document.createEvent("CustomEvent");
        return t.initCustomEvent(n, !1, !1, void 0), t
    }

    function s(c, t, e, i, p) {
        var g = e[0],
            n = e[1],
            o = e[2],
            s = e[3],
            m = e[4],
            u = e[5];
        void 0 === i && (i = !0), void 0 === p && (p = !1);
        var d = c.element;
        c.reach[s] = null, 1 > d[o] && (c.reach[s] = "start"), d[o] > c[g] - c[n] - 1 && (c.reach[s] = "end"), t && (d.dispatchEvent(a("ps-scroll-" + s)), 0 > t ? d.dispatchEvent(a("ps-scroll-" + m)) : 0 < t && d.dispatchEvent(a("ps-scroll-" + u)), i && E(c, s)), c.reach[s] && (t || p) && d.dispatchEvent(a("ps-" + s + "-reach-" + c.reach[s]))
    }

    function S(e) {
        return parseInt(e, 10) || 0
    }

    function t(e) {
        return C(e, "input,[contenteditable]") || C(e, "select,[contenteditable]") || C(e, "textarea,[contenteditable]") || C(e, "button,[contenteditable]")
    }

    function d(t) {
        var e = x(t);
        return S(e.width) + S(e.paddingLeft) + S(e.paddingRight) + S(e.borderLeftWidth) + S(e.borderRightWidth)
    }

    function l(n, t) {
        return n.settings.minScrollbarLength && (t = Math.max(t, n.settings.minScrollbarLength)), n.settings.maxScrollbarLength && (t = Math.min(t, n.settings.maxScrollbarLength)), t
    }

    function c(e, t) {
        var a = {
                width: t.railXWidth
            },
            o = Math.floor(e.scrollTop);
        a.left = t.isRtl ? t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : e.scrollLeft, t.isScrollbarXUsingBottom ? a.bottom = t.scrollbarXBottom - o : a.top = t.scrollbarXTop + o, _(t.scrollbarXRail, a);
        var i = {
            top: o,
            height: t.railYHeight
        };
        t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft, _(t.scrollbarYRail, i), _(t.scrollbarX, {
            left: t.scrollbarXLeft,
            width: t.scrollbarXWidth - t.railBorderXWidth
        }), _(t.scrollbarY, {
            top: t.scrollbarYTop,
            height: t.scrollbarYHeight - t.railBorderYWidth
        })
    }

    function p(s, t) {
        function m(t) {
            p[u] = h + x * (t[y] - b), n(s, d), w(s), t.stopPropagation(), t.preventDefault()
        }

        function i() {
            o(s, d), s[f].classList.remove(g.state.clicking), s.event.unbind(s.ownerDocument, "mousemove", m)
        }
        var r = t[0],
            l = t[1],
            y = t[2],
            a = t[3],
            e = t[4],
            c = t[5],
            u = t[6],
            d = t[7],
            f = t[8],
            p = s.element,
            h = null,
            b = null,
            x = null;
        s.event.bind(s[e], "mousedown", function (t) {
            h = p[u], b = t[y], x = (s[l] - s[r]) / (s[a] - s[c]), s.event.bind(s.ownerDocument, "mousemove", m), s.event.once(s.ownerDocument, "mouseup", i), s[f].classList.add(g.state.clicking), t.stopPropagation(), t.preventDefault()
        })
    }
    var u = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
        g = {
            main: "ps",
            element: {
                thumb: function (e) {
                    return "ps__thumb-" + e
                },
                rail: function (e) {
                    return "ps__rail-" + e
                },
                consuming: "ps__child--consume"
            },
            state: {
                focus: "ps--focus",
                clicking: "ps--clicking",
                active: function (e) {
                    return "ps--active-" + e
                },
                scrolling: function (e) {
                    return "ps--scrolling-" + e
                }
            }
        },
        f = {
            x: null,
            y: null
        },
        m = function (e) {
            this.element = e, this.handlers = {}
        },
        h = {
            isEmpty: {
                configurable: !0
            }
        };
    m.prototype.bind = function (n, t) {
        void 0 === this.handlers[n] && (this.handlers[n] = []), this.handlers[n].push(t), this.element.addEventListener(n, t, !1)
    }, m.prototype.unbind = function (n, t) {
        var e = this;
        this.handlers[n] = this.handlers[n].filter(function (a) {
            return t && a !== t || (e.element.removeEventListener(n, a, !1), !1)
        })
    }, m.prototype.unbindAll = function () {
        var n = this;
        for (var t in n.handlers) n.unbind(t)
    }, h.isEmpty.get = function () {
        var n = this;
        return Object.keys(this.handlers).every(function (t) {
            return 0 === n.handlers[t].length
        })
    }, Object.defineProperties(m.prototype, h);
    var b = function () {
        this.eventElements = []
    };
    b.prototype.eventElement = function (n) {
        var t = this.eventElements.filter(function (t) {
            return t.element === n
        })[0];
        return t || (t = new m(n), this.eventElements.push(t)), t
    }, b.prototype.bind = function (n, t, e) {
        this.eventElement(n).bind(t, e)
    }, b.prototype.unbind = function (n, t, e) {
        var a = this.eventElement(n);
        a.unbind(t, e), a.isEmpty && this.eventElements.splice(this.eventElements.indexOf(a), 1)
    }, b.prototype.unbindAll = function () {
        this.eventElements.forEach(function (e) {
            return e.unbindAll()
        }), this.eventElements = []
    }, b.prototype.once = function (n, a, e) {
        var o = this.eventElement(n),
            i = function (n) {
                o.unbind(a, i), e(n)
            };
        o.bind(a, i)
    };
    var y = function (a, t, e, o, i) {
            void 0 === o && (o = !0), void 0 === i && (i = !1);
            var d;
            if ("top" === t) d = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
            else {
                if ("left" !== t) throw new Error("A proper axis should be provided");
                d = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
            }
            s(a, e, d, o, i)
        },
        v = {
            isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
            supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
            isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
        },
        w = function (n) {
            var t = n.element,
                e = Math.floor(t.scrollTop);
            n.containerWidth = t.clientWidth, n.containerHeight = t.clientHeight, n.contentWidth = t.scrollWidth, n.contentHeight = t.scrollHeight, t.contains(n.scrollbarXRail) || (r(t, g.element.rail("x")).forEach(function (e) {
                return i(e)
            }), t.appendChild(n.scrollbarXRail)), t.contains(n.scrollbarYRail) || (r(t, g.element.rail("y")).forEach(function (e) {
                return i(e)
            }), t.appendChild(n.scrollbarYRail)), !n.settings.suppressScrollX && n.containerWidth + n.settings.scrollXMarginOffset < n.contentWidth ? (n.scrollbarXActive = !0, n.railXWidth = n.containerWidth - n.railXMarginWidth, n.railXRatio = n.containerWidth / n.railXWidth, n.scrollbarXWidth = l(n, S(n.railXWidth * n.containerWidth / n.contentWidth)), n.scrollbarXLeft = S((n.negativeScrollAdjustment + t.scrollLeft) * (n.railXWidth - n.scrollbarXWidth) / (n.contentWidth - n.containerWidth))) : n.scrollbarXActive = !1, !n.settings.suppressScrollY && n.containerHeight + n.settings.scrollYMarginOffset < n.contentHeight ? (n.scrollbarYActive = !0, n.railYHeight = n.containerHeight - n.railYMarginHeight, n.railYRatio = n.containerHeight / n.railYHeight, n.scrollbarYHeight = l(n, S(n.railYHeight * n.containerHeight / n.contentHeight)), n.scrollbarYTop = S(e * (n.railYHeight - n.scrollbarYHeight) / (n.contentHeight - n.containerHeight))) : n.scrollbarYActive = !1, n.scrollbarXLeft >= n.railXWidth - n.scrollbarXWidth && (n.scrollbarXLeft = n.railXWidth - n.scrollbarXWidth), n.scrollbarYTop >= n.railYHeight - n.scrollbarYHeight && (n.scrollbarYTop = n.railYHeight - n.scrollbarYHeight), c(t, n), n.scrollbarXActive ? t.classList.add(g.state.active("x")) : (t.classList.remove(g.state.active("x")), n.scrollbarXWidth = 0, n.scrollbarXLeft = 0, t.scrollLeft = 0), n.scrollbarYActive ? t.classList.add(g.state.active("y")) : (t.classList.remove(g.state.active("y")), n.scrollbarYHeight = 0, n.scrollbarYTop = 0, t.scrollTop = 0)
        },
        k = {
            "click-rail": function (n) {
                n.event.bind(n.scrollbarY, "mousedown", function (e) {
                    return e.stopPropagation()
                }), n.event.bind(n.scrollbarYRail, "mousedown", function (t) {
                    var e = t.pageY - window.pageYOffset - n.scrollbarYRail.getBoundingClientRect().top > n.scrollbarYTop ? 1 : -1;
                    n.element.scrollTop += e * n.containerHeight, w(n), t.stopPropagation()
                }), n.event.bind(n.scrollbarX, "mousedown", function (e) {
                    return e.stopPropagation()
                }), n.event.bind(n.scrollbarXRail, "mousedown", function (t) {
                    var e = t.pageX - window.pageXOffset - n.scrollbarXRail.getBoundingClientRect().left > n.scrollbarXLeft ? 1 : -1;
                    n.element.scrollLeft += e * n.containerWidth, w(n), t.stopPropagation()
                })
            },
            "drag-thumb": function (e) {
                p(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), p(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            },
            keyboard: function (d) {
                function c(t, e) {
                    var a = Math.floor(p.scrollTop);
                    if (0 === t) {
                        if (!d.scrollbarYActive) return !1;
                        if (0 === a && 0 < e || a >= d.contentHeight - d.containerHeight && 0 > e) return !d.settings.wheelPropagation
                    }
                    var o = p.scrollLeft;
                    if (0 === e) {
                        if (!d.scrollbarXActive) return !1;
                        if (0 === o && 0 > t || o >= d.contentWidth - d.containerWidth && 0 < t) return !d.settings.wheelPropagation
                    }
                    return !0
                }
                var p = d.element,
                    e = function () {
                        return C(p, ":hover")
                    },
                    i = function () {
                        return C(d.scrollbarX, ":focus") || C(d.scrollbarY, ":focus")
                    };
                d.event.bind(d.ownerDocument, "keydown", function (n) {
                    if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (e() || i())) {
                        var r = document.activeElement ? document.activeElement : d.ownerDocument.activeElement;
                        if (r) {
                            if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;
                            else
                                for (; r.shadowRoot;) r = r.shadowRoot.activeElement;
                            if (t(r)) return
                        }
                        var l = 0,
                            u = 0;
                        switch (n.which) {
                            case 37:
                                l = n.metaKey ? -d.contentWidth : n.altKey ? -d.containerWidth : -30;
                                break;
                            case 38:
                                u = n.metaKey ? d.contentHeight : n.altKey ? d.containerHeight : 30;
                                break;
                            case 39:
                                l = n.metaKey ? d.contentWidth : n.altKey ? d.containerWidth : 30;
                                break;
                            case 40:
                                u = n.metaKey ? -d.contentHeight : n.altKey ? -d.containerHeight : -30;
                                break;
                            case 32:
                                u = n.shiftKey ? d.containerHeight : -d.containerHeight;
                                break;
                            case 33:
                                u = d.containerHeight;
                                break;
                            case 34:
                                u = -d.containerHeight;
                                break;
                            case 36:
                                u = d.contentHeight;
                                break;
                            case 35:
                                u = -d.contentHeight;
                                break;
                            default:
                                return;
                        }
                        d.settings.suppressScrollX && 0 !== l || d.settings.suppressScrollY && 0 !== u || (p.scrollTop -= u, p.scrollLeft += l, w(d), c(l, u) && n.preventDefault())
                    }
                })
            },
            wheel: function (d) {
                function e(e, t) {
                    var o = Math.floor(p.scrollTop),
                        i = 0 === p.scrollTop,
                        r = o + p.offsetHeight === p.scrollHeight,
                        n = 0 === p.scrollLeft,
                        s = p.scrollLeft + p.offsetWidth === p.scrollWidth;
                    return (Math.abs(t) > Math.abs(e) ? !(i || r) : !(n || s)) || !d.settings.wheelPropagation
                }

                function i(n) {
                    var t = n.deltaX,
                        a = -1 * n.deltaY;
                    return void 0 !== t && void 0 !== a || (t = -1 * n.wheelDeltaX / 6, a = n.wheelDeltaY / 6), n.deltaMode && 1 === n.deltaMode && (t *= 10, a *= 10), t !== t && a !== a && (t = 0, a = n.wheelDelta), n.shiftKey ? [-a, -t] : [t, a]
                }

                function r(t, e, o) {
                    if (!v.isWebKit && p.querySelector("select:focus")) return !0;
                    if (!p.contains(t)) return !1;
                    for (var i = t; i && i !== p;) {
                        if (i.classList.contains(g.element.consuming)) return !0;
                        var r = x(i);
                        if ([r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) {
                            var n = i.scrollHeight - i.clientHeight;
                            if (0 < n && !(0 === i.scrollTop && 0 < o || i.scrollTop === n && 0 > o)) return !0;
                            var s = i.scrollWidth - i.clientWidth;
                            if (0 < s && !(0 === i.scrollLeft && 0 > e || i.scrollLeft === s && 0 < e)) return !0
                        }
                        i = i.parentNode
                    }
                    return !1
                }

                function t(o) {
                    var t = i(o),
                        n = t[0],
                        s = t[1];
                    if (!r(o.target, n, s)) {
                        var a = !1;
                        d.settings.useBothWheelAxes ? d.scrollbarYActive && !d.scrollbarXActive ? (s ? p.scrollTop -= s * d.settings.wheelSpeed : p.scrollTop += n * d.settings.wheelSpeed, a = !0) : d.scrollbarXActive && !d.scrollbarYActive && (n ? p.scrollLeft += n * d.settings.wheelSpeed : p.scrollLeft -= s * d.settings.wheelSpeed, a = !0) : (p.scrollTop -= s * d.settings.wheelSpeed, p.scrollLeft += n * d.settings.wheelSpeed), w(d), (a = a || e(n, s)) && !o.ctrlKey && (o.stopPropagation(), o.preventDefault())
                    }
                }
                var p = d.element;
                void 0 === window.onwheel ? void 0 !== window.onmousewheel && d.event.bind(p, "mousewheel", t) : d.event.bind(p, "wheel", t)
            },
            touch: function (m) {
                function b(e, t) {
                    var a = Math.floor(c.scrollTop),
                        i = c.scrollLeft,
                        s = Math.abs(e),
                        n = Math.abs(t);
                    if (n > s) {
                        if (0 > t && a === m.contentHeight - m.containerHeight || 0 < t && 0 === a) return 0 === window.scrollY && 0 < t && v.isChrome;
                    } else if (s > n && (0 > e && i === m.contentWidth - m.containerWidth || 0 < e && 0 === i)) return !0;
                    return !0
                }

                function i(e, t) {
                    c.scrollTop -= t, c.scrollLeft -= e, w(m)
                }

                function r(e) {
                    return e.targetTouches ? e.targetTouches[0] : e
                }

                function l(e) {
                    return (!e.pointerType || "pen" !== e.pointerType || 0 !== e.buttons) && (e.targetTouches && 1 === e.targetTouches.length || e.pointerType && "mouse" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_MOUSE)
                }

                function e(n) {
                    if (l(n)) {
                        var t = r(n);
                        s.pageX = t.pageX, s.pageY = t.pageY, y = new Date().getTime(), null !== o && clearInterval(o)
                    }
                }

                function n(t, e, a) {
                    if (!c.contains(t)) return !1;
                    for (var i = t; i && i !== c;) {
                        if (i.classList.contains(g.element.consuming)) return !0;
                        var r = x(i);
                        if ([r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) {
                            var n = i.scrollHeight - i.clientHeight;
                            if (0 < n && !(0 === i.scrollTop && 0 < a || i.scrollTop === n && 0 > a)) return !0;
                            var o = i.scrollLeft - i.clientWidth;
                            if (0 < o && !(0 === i.scrollLeft && 0 > e || i.scrollLeft === o && 0 < e)) return !0
                        }
                        i = i.parentNode
                    }
                    return !1
                }

                function t(d) {
                    if (l(d)) {
                        var t = r(d),
                            e = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            },
                            o = e.pageX - s.pageX,
                            a = e.pageY - s.pageY;
                        if (n(d.target, o, a)) return;
                        i(o, a), s = e;
                        var c = new Date().getTime(),
                            u = c - y;
                        0 < u && (_.x = o / u, _.y = a / u, y = c), b(o, a) && d.preventDefault()
                    }
                }

                function a() {
                    m.settings.swipeEasing && (clearInterval(o), o = setInterval(function () {
                        m.isInitialized ? clearInterval(o) : _.x || _.y ? .01 > Math.abs(_.x) && .01 > Math.abs(_.y) ? clearInterval(o) : (i(30 * _.x, 30 * _.y), _.x *= .8, _.y *= .8) : clearInterval(o)
                    }, 10))
                }
                if (v.supportsTouch || v.supportsIePointer) {
                    var c = m.element,
                        s = {},
                        y = 0,
                        _ = {},
                        o = null;
                    v.supportsTouch ? (m.event.bind(c, "touchstart", e), m.event.bind(c, "touchmove", t), m.event.bind(c, "touchend", a)) : v.supportsIePointer && (window.PointerEvent ? (m.event.bind(c, "pointerdown", e), m.event.bind(c, "pointermove", t), m.event.bind(c, "pointerup", a)) : window.MSPointerEvent && (m.event.bind(c, "MSPointerDown", e), m.event.bind(c, "MSPointerMove", t), m.event.bind(c, "MSPointerUp", a)))
                }
            }
        },
        T = function (i, t) {
            var p = this;
            if (void 0 === t && (t = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var n in this.element = i, i.classList.add(g.main), this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1
                }, t) p.settings[n] = t[n];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
            var o = function () {
                    return i.classList.add(g.state.focus)
                },
                s = function () {
                    return i.classList.remove(g.state.focus)
                };
            this.isRtl = "rtl" === x(i).direction, this.isNegativeScroll = function () {
                var n = i.scrollLeft,
                    t = null;
                return i.scrollLeft = -1, t = 0 > i.scrollLeft, i.scrollLeft = n, t
            }(), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new b, this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = e(g.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = e(g.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", o), this.event.bind(this.scrollbarX, "blur", s), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
            var a = x(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(a.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = S(a.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = S(a.borderLeftWidth) + S(a.borderRightWidth), _(this.scrollbarXRail, {
                display: "block"
            }), this.railXMarginWidth = S(a.marginLeft) + S(a.marginRight), _(this.scrollbarXRail, {
                display: ""
            }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = e(g.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = e(g.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", o), this.event.bind(this.scrollbarY, "blur", s), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var c = x(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(c.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = S(c.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? d(this.scrollbarY) : null, this.railBorderYWidth = S(c.borderTopWidth) + S(c.borderBottomWidth), _(this.scrollbarYRail, {
                display: "block"
            }), this.railYMarginHeight = S(c.marginTop) + S(c.marginBottom), _(this.scrollbarYRail, {
                display: ""
            }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: 0 >= i.scrollLeft ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: 0 >= i.scrollTop ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach(function (e) {
                return k[e](p)
            }), this.lastScrollTop = Math.floor(i.scrollTop), this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", function (e) {
                return p.onScroll(e)
            }), w(this)
        };
    return T.prototype.update = function () {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, _(this.scrollbarXRail, {
            display: "block"
        }), _(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = S(x(this.scrollbarXRail).marginLeft) + S(x(this.scrollbarXRail).marginRight), this.railYMarginHeight = S(x(this.scrollbarYRail).marginTop) + S(x(this.scrollbarYRail).marginBottom), _(this.scrollbarXRail, {
            display: "none"
        }), _(this.scrollbarYRail, {
            display: "none"
        }), w(this), y(this, "top", 0, !1, !0), y(this, "left", 0, !1, !0), _(this.scrollbarXRail, {
            display: ""
        }), _(this.scrollbarYRail, {
            display: ""
        }))
    }, T.prototype.onScroll = function () {
        this.isAlive && (w(this), y(this, "top", this.element.scrollTop - this.lastScrollTop), y(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, T.prototype.destroy = function () {
        this.isAlive && (this.event.unbindAll(), i(this.scrollbarX), i(this.scrollbarY), i(this.scrollbarXRail), i(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, T.prototype.removePsClasses = function () {
        this.element.className = this.element.className.split(" ").filter(function (e) {
            return !e.match(/^ps([-_].+|)$/)
        }).join(" ")
    }, T
}), ! function (n, e) {
    if ("function" == typeof define && define.amd) define(["exports"], e);
    else if ("undefined" != typeof exports) e(exports);
    else {
        var a = {};
        e(a), n.bodyScrollLock = a
    }
}(this, function (o) {
    "use strict";
    Object.defineProperty(o, "__esModule", {
        value: !0
    });
    var p = !1;
    if ("undefined" != typeof window) {
        var r = {
            get passive() {
                p = !0
            }
        };
        window.addEventListener("testPassive", null, r), window.removeEventListener("testPassive", null, r)
    }
    var g = "undefined" != typeof window && window.navigator && window.navigator.platform && /iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(window.navigator.platform),
        i = null,
        f = [],
        m = !1,
        h = -1,
        b = function (t) {
            var e = t || window.event;
            return 1 < e.touches.length || (e.preventDefault && e.preventDefault(), !1)
        },
        e = function () {
            setTimeout(function () {
                void 0 !== v && (document.body.style.paddingRight = v, v = void 0), void 0 !== y && (document.body.style.overflow = y, y = void 0)
            })
        },
        y, v;
    o.disableBodyScroll = function (a, n) {
        var s;
        g ? a && !f.includes(a) && (f = [].concat(function (n) {
            if (Array.isArray(n)) {
                for (var e = 0, a = Array(n.length); e < n.length; e++) a[e] = n[e];
                return a
            }
            return Array.from(n)
        }(f), [a]), a.ontouchstart = function (t) {
            1 === t.targetTouches.length && (h = t.targetTouches[0].clientY)
        }, a.ontouchmove = function (s) {
            var e, r, l, d;
            1 === s.targetTouches.length && (r = a, d = (e = s).targetTouches[0].clientY - h, r && 0 === r.scrollTop && 0 < d ? b(e) : (l = r) && l.scrollHeight - l.scrollTop <= l.clientHeight && 0 > d ? b(e) : e.stopPropagation())
        }, m || (document.addEventListener("touchmove", b, p ? {
            passive: !1
        } : void 0), m = !0)) : (s = n, setTimeout(function () {
            if (void 0 === v) {
                var t = !!s && !0 === s.reserveScrollBarGap,
                    e = window.innerWidth - document.documentElement.clientWidth;
                t && 0 < e && (v = document.body.style.paddingRight, document.body.style.paddingRight = e + "px")
            }
            void 0 === y && (y = document.body.style.overflow, document.body.style.overflow = "hidden")
        }), i || (i = a))
    }, o.clearAllBodyScrollLocks = function () {
        g ? (f.forEach(function (t) {
            t.ontouchstart = null, t.ontouchmove = null
        }), m && (document.removeEventListener("touchmove", b, p ? {
            passive: !1
        } : void 0), m = !1), f = [], h = -1) : (e(), i = null)
    }, o.enableBodyScroll = function (t) {
        g ? (t.ontouchstart = null, t.ontouchmove = null, f = f.filter(function (n) {
            return n !== t
        }), m && 0 === f.length && (document.removeEventListener("touchmove", b, p ? {
            passive: !1
        } : void 0), m = !1)) : i === t && (e(), i = null)
    }
}), ! function (m, y, v, x) {
    "use strict";

    function n(n, t) {
        var l = [],
            d = 0,
            c, u, g;
        n && n.isDefaultPrevented() || (n.preventDefault(), t = t || {}, n && n.data && (t = p(n.data.options, t)), c = t.$target || v(n.currentTarget).trigger("blur"), g = v.fancybox.getInstance(), g && g.$trigger && g.$trigger.is(c) || (t.selector ? l = v(t.selector) : (u = c.attr("data-fancybox") || "", u ? (l = n.data ? n.data.items : [], l = l.length ? l.filter("[data-fancybox=\"" + u + "\"]") : v("[data-fancybox=\"" + u + "\"]")) : l = [c]), d = v(l).index(c), 0 > d && (d = 0), g = v.fancybox.open(l, t, d), g.$trigger = c))
    }
    if (m.console = m.console || {
            info: function () {}
        }, v) {
        if (v.fn.fancybox) return void console.info("fancyBox already initialized");
        var e = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {
                    preload: !1
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: "<iframe id=\"fancybox-frame{rnd}\" name=\"fancybox-frame{rnd}\" class=\"fancybox-iframe\" allowfullscreen allow=\"autoplay; fullscreen\" src=\"\"></iframe>",
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                video: {
                    tpl: "<video class=\"fancybox-video\" controls controlsList=\"nodownload\" poster=\"{{poster}}\"><source src=\"{{src}}\" type=\"{{format}}\" />Sorry, your browser doesn't support embedded videos, <a href=\"{{src}}\">download</a> and watch with your favorite video player!</video>",
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: "<div class=\"fancybox-container\" role=\"dialog\" tabindex=\"-1\"><div class=\"fancybox-bg\"></div><div class=\"fancybox-inner\"><div class=\"fancybox-infobar\"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class=\"fancybox-toolbar\">{{buttons}}</div><div class=\"fancybox-navigation\">{{arrows}}</div><div class=\"fancybox-stage\"></div><div class=\"fancybox-caption\"></div></div></div>",
                spinnerTpl: "<div class=\"fancybox-loading\"></div>",
                errorTpl: "<div class=\"fancybox-error\"><p id=\"aaa\">{{ERROR}}</p></div>",
                btnTpl: {
                    download: "<a download data-fancybox-download class=\"fancybox-button fancybox-button--download\" title=\"{{DOWNLOAD}}\" href=\"javascript:;\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z\"/></svg></a>",
                    zoom: "<button data-fancybox-zoom class=\"fancybox-button fancybox-button--zoom\" title=\"{{ZOOM}}\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z\"/></svg></button>",
                    close: "<button data-fancybox-close class=\"fancybox-button fancybox-button--close\" title=\"{{CLOSE}}\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z\"/></svg></button>",
                    arrowLeft: "<button data-fancybox-prev class=\"fancybox-button fancybox-button--arrow_left\" title=\"{{PREV}}\"><div><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z\"/></svg></div></button>",
                    arrowRight: "<button data-fancybox-next class=\"fancybox-button fancybox-button--arrow_right\" title=\"{{NEXT}}\"><div><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z\"/></svg></div></button>",
                    smallBtn: "<button type=\"button\" data-fancybox-close class=\"fancybox-button fancybox-close-small\" title=\"{{CLOSE}}\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1\" viewBox=\"0 0 24 24\"><path d=\"M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z\"/></svg></button>"
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 3e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                },
                wheel: "auto",
                onInit: v.noop,
                beforeLoad: v.noop,
                afterLoad: v.noop,
                beforeShow: v.noop,
                afterShow: v.noop,
                beforeClose: v.noop,
                afterClose: v.noop,
                onActivate: v.noop,
                onDeactivate: v.noop,
                clickContent: function (e) {
                    return "image" === e.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function (e) {
                        return "image" === e.type && "toggleControls"
                    },
                    clickSlide: function (e) {
                        return "image" === e.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function (e) {
                        return "image" === e.type && "zoom"
                    },
                    dblclickSlide: function (e) {
                        return "image" === e.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "Zur\xFCck",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp\xE4ter nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Ma\xDFstab"
                    }
                }
            },
            a = v(m),
            _ = v(y),
            i = 0,
            s = function (e) {
                return e && e.hasOwnProperty && e instanceof v
            },
            w = function () {
                return m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || function (t) {
                    return m.setTimeout(t, 1e3 / 60)
                }
            }(),
            o = function () {
                return m.cancelAnimationFrame || m.webkitCancelAnimationFrame || m.mozCancelAnimationFrame || m.oCancelAnimationFrame || function (t) {
                    m.clearTimeout(t)
                }
            }(),
            l = function () {
                var e = y.createElement("fakeelement"),
                    n = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    },
                    a;
                for (a in n)
                    if (e.style[a] !== x) return n[a];
                return "transitionend"
            }(),
            C = function (e) {
                return e && e.length && e[0].offsetHeight
            },
            p = function (n, t) {
                var a = v.extend(!0, {}, n, t);
                return v.each(t, function (n, t) {
                    v.isArray(t) && (a[n] = t)
                }), a
            },
            d = function (e) {
                var t, n;
                return e && e.ownerDocument === y && (v(".fancybox-container").css("pointer-events", "none"), t = {
                    x: e.getBoundingClientRect().left + e.offsetWidth / 2,
                    y: e.getBoundingClientRect().top + e.offsetHeight / 2
                }, n = y.elementFromPoint(t.x, t.y) === e, v(".fancybox-container").css("pointer-events", ""), n)
            },
            r = function (n, t, e) {
                var o = this;
                o.opts = p({
                    index: e
                }, v.fancybox.defaults), v.isPlainObject(t) && (o.opts = p(o.opts, t)), v.fancybox.isMobile && (o.opts = p(o.opts, o.opts.mobile)), o.id = o.opts.id || ++i, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(n), o.group.length && o.init()
            };
        v.extend(r.prototype, {
                init: function () {
                    var e = this,
                        t = e.group[e.currIndex],
                        n = t.opts,
                        i, s;
                    n.closeExisting && v.fancybox.close(!0), v("body").addClass("fancybox-active"), v.fancybox.getInstance() || !1 === n.hideScrollbar || v.fancybox.isMobile || !(y.body.scrollHeight > m.innerHeight) || (v("head").append("<style id=\"fancybox-style-noscroll\" type=\"text/css\">.compensate-for-scrollbar{margin-right:" + (m.innerWidth - y.documentElement.clientWidth) + "px;}</style>"), v("body").addClass("compensate-for-scrollbar")), s = "", v.each(n.buttons, function (a, t) {
                        s += n.btnTpl[t] || ""
                    }), i = v(e.translate(e, n.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", n.btnTpl.arrowLeft + n.btnTpl.arrowRight))).attr("id", "fancybox-container-" + e.id).addClass(n.baseClass).data("FancyBox", e).appendTo(n.parentEl), e.$refs = {
                        container: i
                    }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (n) {
                        e.$refs[n] = i.find(".fancybox-" + n)
                    }), e.trigger("onInit"), e.activate(), e.jumpTo(e.currIndex)
                },
                translate: function (a, t) {
                    var o = a.opts.i18n[a.opts.lang] || a.opts.i18n.en;
                    return t.replace(/\{\{(\w+)\}\}/g, function (n, t) {
                        var e = o[t];
                        return e === x ? n : e
                    })
                },
                addContent: function (n) {
                    var o = this,
                        t = v.makeArray(n),
                        a;
                    v.each(t, function (n, t) {
                        var e = {},
                            a = {},
                            g, f, m, h, b;
                        v.isPlainObject(t) ? (e = t, a = t.opts || t) : "object" === v.type(t) && v(t).length ? (g = v(t), a = g.data() || {}, a = v.extend(!0, {}, a, a.options), a.$orig = g, e.src = o.opts.src || a.src || g.attr("href"), e.type || e.src || (e.type = "inline", e.src = t)) : e = {
                            type: "html",
                            src: t + ""
                        }, e.opts = v.extend(!0, {}, o.opts, a), v.isArray(a.buttons) && (e.opts.buttons = a.buttons), v.fancybox.isMobile && e.opts.mobile && (e.opts = p(e.opts, e.opts.mobile)), f = e.type || e.opts.type, h = e.src || "", !f && h && ((m = h.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (f = "video", e.opts.video.format || (e.opts.video.format = "video/" + ("ogv" === m[1] ? "ogg" : m[1]))) : h.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? f = "image" : h.match(/\.(pdf)((\?|#).*)?$/i) ? (f = "iframe", e = v.extend(!0, e, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: !1
                                }
                            }
                        })) : "#" === h.charAt(0) && (f = "inline")), f ? e.type = f : o.trigger("objectNeedsType", e), e.contentType || (e.contentType = -1 < v.inArray(e.type, ["html", "inline", "ajax"]) ? "html" : e.type), e.index = o.group.length, "auto" == e.opts.smallBtn && (e.opts.smallBtn = -1 < v.inArray(e.type, ["html", "inline", "ajax"])), "auto" === e.opts.toolbar && (e.opts.toolbar = !e.opts.smallBtn), e.$thumb = e.opts.$thumb || null, e.opts.$trigger && e.index === o.opts.index && (e.$thumb = e.opts.$trigger.find("img:first"), e.$thumb.length && (e.opts.$orig = e.opts.$trigger)), e.$thumb && e.$thumb.length || !e.opts.$orig || (e.$thumb = e.opts.$orig.find("img:first")), e.$thumb && !e.$thumb.length && (e.$thumb = null), e.thumb = e.opts.thumb || (e.$thumb ? e.$thumb[0].src : null), "function" === v.type(e.opts.caption) && (e.opts.caption = e.opts.caption.apply(t, [o, e])), "function" === v.type(o.opts.caption) && (e.opts.caption = o.opts.caption.apply(t, [o, e])), e.opts.caption instanceof v || (e.opts.caption = e.opts.caption === x ? "" : e.opts.caption + ""), "ajax" === e.type && (b = h.split(/\s+/, 2), 1 < b.length && (e.src = b.shift(), e.opts.filter = b.shift())), e.opts.modal && (e.opts = v.extend(!0, e.opts, {
                            trapFocus: !0,
                            infobar: 0,
                            toolbar: 0,
                            smallBtn: 0,
                            keyboard: 0,
                            slideShow: 0,
                            fullScreen: 0,
                            thumbs: 0,
                            touch: 0,
                            clickContent: !1,
                            clickSlide: !1,
                            clickOutside: !1,
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1
                        })), o.group.push(e)
                    }), Object.keys(o.slides).length && (o.updateControls(), a = o.Thumbs, a && a.isActive && (a.create(), a.focus()))
                },
                addEvents: function () {
                    var n = this;
                    n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
                        e.stopPropagation(), e.preventDefault(), n.close(e)
                    }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
                        e.stopPropagation(), e.preventDefault(), n.previous()
                    }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
                        e.stopPropagation(), e.preventDefault(), n.next()
                    }).on("click.fb", "[data-fancybox-zoom]", function () {
                        n[n.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                    }), a.on("orientationchange.fb resize.fb", function (e) {
                        e && e.originalEvent && "resize" === e.originalEvent.type ? (n.requestId && o(n.requestId), n.requestId = w(function () {
                            n.update(e)
                        })) : (n.current && "iframe" === n.current.type && n.$refs.stage.hide(), setTimeout(function () {
                            n.$refs.stage.show(), n.update(e)
                        }, v.fancybox.isMobile ? 600 : 250))
                    }), _.on("keydown.fb", function (e) {
                        var t = v.fancybox ? v.fancybox.getInstance() : null,
                            o = t.current,
                            a = e.keyCode || e.which;
                        return 9 == a ? void(o.opts.trapFocus && n.focus(e)) : !o.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || v(e.target).is("input") || v(e.target).is("textarea") ? void 0 : 8 === a || 27 === a ? (e.preventDefault(), void n.close(e)) : 37 === a || 38 === a ? (e.preventDefault(), void n.previous()) : 39 === a || 40 === a ? (e.preventDefault(), void n.next()) : void n.trigger("afterKeydown", e, a)
                    }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, _.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function () {
                        n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
                    }), n.idleInterval = m.setInterval(function () {
                        n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && !n.isDragging && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
                    }, 1e3))
                },
                removeEvents: function () {
                    var t = this;
                    a.off("orientationchange.fb resize.fb"), _.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (m.clearInterval(t.idleInterval), t.idleInterval = null)
                },
                previous: function (e) {
                    return this.jumpTo(this.currPos - 1, e)
                },
                next: function (e) {
                    return this.jumpTo(this.currPos + 1, e)
                },
                jumpTo: function (n, p) {
                    var m = this,
                        o = m.group.length,
                        g, h, b, y, _, w, T, E, S;
                    if (!(m.isDragging || m.isClosing || m.isAnimating && m.firstRun)) {
                        if (n = parseInt(n, 10), b = m.current ? m.current.opts.loop : m.opts.loop, !b && (0 > n || n >= o)) return !1;
                        if (g = m.firstRun = !Object.keys(m.slides).length, _ = m.current, m.prevIndex = m.currIndex, m.prevPos = m.currPos, y = m.createSlide(n), 1 < o && ((b || y.index < o - 1) && m.createSlide(n + 1), (b || 0 < y.index) && m.createSlide(n - 1)), m.current = y, m.currIndex = y.index, m.currPos = y.pos, m.trigger("beforeShow", g), m.updateControls(), y.forcedDuration = x, v.isNumeric(p) ? y.forcedDuration = p : p = y.opts[g ? "animationDuration" : "transitionDuration"], p = parseInt(p, 10), h = m.isMoved(y), y.$slide.addClass("fancybox-slide--current"), g) return y.opts.animationEffect && p && m.$refs.container.css("transition-duration", p + "ms"), m.$refs.container.addClass("fancybox-is-open").trigger("focus"), m.loadSlide(y), void m.preload("image");
                        w = v.fancybox.getTranslate(_.$slide), T = v.fancybox.getTranslate(m.$refs.stage), v.each(m.slides, function (n, t) {
                            v.fancybox.stop(t.$slide, !0)
                        }), _.pos !== y.pos && (_.isComplete = !1), _.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), h ? (S = w.left - (_.pos * w.width + _.pos * _.opts.gutter), v.each(m.slides, function (e, t) {
                            t.$slide.removeClass("fancybox-animated").removeClass(function (n, t) {
                                return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                            });
                            var n = t.pos * w.width + t.pos * t.opts.gutter;
                            v.fancybox.setTranslate(t.$slide, {
                                top: 0,
                                left: n - T.left + S
                            }), t.pos !== y.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > y.pos ? "next" : "previous")), C(t.$slide), v.fancybox.animate(t.$slide, {
                                top: 0,
                                left: (t.pos - y.pos) * w.width + (t.pos - y.pos) * t.opts.gutter
                            }, p, function () {
                                t.$slide.css({
                                    transform: "",
                                    opacity: ""
                                }).removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === m.currPos && m.complete()
                            })
                        })) : p && y.opts.transitionEffect && (E = "fancybox-animated fancybox-fx-" + y.opts.transitionEffect, _.$slide.addClass("fancybox-slide--" + (_.pos > y.pos ? "next" : "previous")), v.fancybox.animate(_.$slide, E, p, function () {
                            _.$slide.removeClass(E).removeClass("fancybox-slide--next fancybox-slide--previous")
                        }, !1)), y.isLoaded ? m.revealContent(y) : m.loadSlide(y), m.preload("image")
                    }
                },
                createSlide: function (n) {
                    var t = this,
                        a, i;
                    return i = n % t.group.length, i = 0 > i ? t.group.length + i : i, !t.slides[n] && t.group[i] && (a = v("<div class=\"fancybox-slide\"></div>").appendTo(t.$refs.stage), t.slides[n] = v.extend(!0, {}, t.group[i], {
                        pos: n,
                        $slide: a,
                        isLoaded: !1
                    }), t.updateSlide(t.slides[n])), t.slides[n]
                },
                scaleToActual: function (n, o, m) {
                    var a = this,
                        d = a.current,
                        u = d.$content,
                        f = v.fancybox.getTranslate(d.$slide).width,
                        p = v.fancybox.getTranslate(d.$slide).height,
                        h = d.width,
                        g = d.height,
                        b, y, _, w, C;
                    a.isAnimating || a.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (a.isAnimating = !0, v.fancybox.stop(u), n = n === x ? .5 * f : n, o = o === x ? .5 * p : o, b = v.fancybox.getTranslate(u), b.top -= v.fancybox.getTranslate(d.$slide).top, b.left -= v.fancybox.getTranslate(d.$slide).left, w = h / b.width, C = g / b.height, y = .5 * f - .5 * h, _ = .5 * p - .5 * g, h > f && (y = b.left * w - (n * w - n), 0 < y && (y = 0), y < f - h && (y = f - h)), g > p && (_ = b.top * C - (o * C - o), 0 < _ && (_ = 0), _ < p - g && (_ = p - g)), a.updateCursor(h, g), v.fancybox.animate(u, {
                        top: _,
                        left: y,
                        scaleX: w,
                        scaleY: C
                    }, m || 330, function () {
                        a.isAnimating = !1
                    }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop())
                },
                scaleToFit: function (n) {
                    var t = this,
                        o = t.current,
                        a = o.$content,
                        i;
                    t.isAnimating || t.isMoved() || !a || "image" != o.type || !o.isLoaded || o.hasError || (t.isAnimating = !0, v.fancybox.stop(a), i = t.getFitPos(o), t.updateCursor(i.width, i.height), v.fancybox.animate(a, {
                        top: i.top,
                        left: i.left,
                        scaleX: i.width / a.width(),
                        scaleY: i.height / a.height()
                    }, n || 330, function () {
                        t.isAnimating = !1
                    }))
                },
                getFitPos: function (n) {
                    var t = this,
                        s = n.$content,
                        r = n.$slide,
                        c = n.width || n.opts.width,
                        p = n.height || n.opts.height,
                        g = {},
                        u, f, m, h;
                    return !!(n.isLoaded && s && s.length) && (u = v.fancybox.getTranslate(t.$refs.stage).width, f = v.fancybox.getTranslate(t.$refs.stage).height, u -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")), f -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")), c && p || (c = u, p = f), m = Math.min(1, u / c, f / p), c = m * c, p = m * p, c > u - .5 && (c = u), p > f - .5 && (p = f), "image" === n.type ? (g.top = Math.floor(.5 * (f - p)) + parseFloat(r.css("paddingTop")), g.left = Math.floor(.5 * (u - c)) + parseFloat(r.css("paddingLeft"))) : "video" === n.contentType && (h = n.opts.width && n.opts.height ? c / p : n.opts.ratio || 16 / 9, p > c / h ? p = c / h : c > p * h && (c = p * h)), g.width = c, g.height = p, g)
                },
                update: function (a) {
                    var t = this;
                    v.each(t.slides, function (e, n) {
                        t.updateSlide(n, a)
                    })
                },
                updateSlide: function (n, t) {
                    var e = this,
                        o = n && n.$content,
                        a = n.width || n.opts.width,
                        i = n.height || n.opts.height,
                        s = n.$slide;
                    e.adjustCaption(n), o && (a || i || "video" === n.contentType) && !n.hasError && (v.fancybox.stop(o), v.fancybox.setTranslate(o, e.getFitPos(n)), n.pos === e.currPos && (e.isAnimating = !1, e.updateCursor())), e.adjustLayout(n), s.length && (s.trigger("refresh"), n.pos === e.currPos && e.$refs.toolbar.add(e.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)), e.trigger("onUpdate", n, t)
                },
                centerSlide: function (n) {
                    var t = this,
                        e = t.current,
                        a = e.$slide;
                    !t.isClosing && e && (a.siblings().css({
                        transform: "",
                        opacity: ""
                    }), a.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), v.fancybox.animate(a, {
                        top: 0,
                        left: 0,
                        opacity: 1
                    }, n === x ? 0 : n, function () {
                        a.css({
                            transform: "",
                            opacity: ""
                        }), e.isComplete || t.complete()
                    }, !1))
                },
                isMoved: function (n) {
                    var t = n || this.current,
                        a, i;
                    return !!t && (i = v.fancybox.getTranslate(this.$refs.stage), a = v.fancybox.getTranslate(t.$slide), !t.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(a.top - i.top) || .5 < Math.abs(a.left - i.left)))
                },
                updateCursor: function (n, t) {
                    var e = this,
                        i = e.current,
                        s = e.$refs.container,
                        r, l;
                    i && !e.isClosing && e.Guestures && (s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), r = e.canPan(n, t), l = !!r || e.isZoomable(), s.toggleClass("fancybox-is-zoomable", l), v("[data-fancybox-zoom]").prop("disabled", !l), r ? s.addClass("fancybox-can-pan") : l && ("zoom" === i.opts.clickContent || v.isFunction(i.opts.clickContent) && "zoom" == i.opts.clickContent(i)) ? s.addClass("fancybox-can-zoomIn") : i.opts.touch && (i.opts.touch.vertical || 1 < e.group.length) && "video" !== i.contentType && s.addClass("fancybox-can-swipe"))
                },
                isZoomable: function () {
                    var a = this,
                        e = a.current,
                        n;
                    if (e && !a.isClosing && "image" === e.type && !e.hasError) {
                        if (!e.isLoaded) return !0;
                        if (n = a.getFitPos(e), n && (e.width > n.width || e.height > n.height)) return !0
                    }
                    return !1
                },
                isScaledDown: function (n, t) {
                    var e = this,
                        a = !1,
                        o = e.current,
                        s = o.$content;
                    return n !== x && t !== x ? a = n < o.width && t < o.height : s && (a = v.fancybox.getTranslate(s), a = a.width < o.width && a.height < o.height), a
                },
                canPan: function (n, t) {
                    var e = this,
                        a = e.current,
                        o = null,
                        i = !1;
                    return "image" === a.type && (a.isComplete || n && t) && !a.hasError && (i = e.getFitPos(a), n !== x && t !== x ? o = {
                        width: n,
                        height: t
                    } : a.isComplete && (o = v.fancybox.getTranslate(a.$content)), o && i && (i = 1.5 < Math.abs(o.width - i.width) || 1.5 < Math.abs(o.height - i.height))), i
                },
                loadSlide: function (s) {
                    var t = this,
                        n, i, r;
                    if (!s.isLoading && !s.isLoaded) {
                        if (s.isLoading = !0, !1 === t.trigger("beforeLoad", s)) return s.isLoading = !1, !1;
                        switch (n = s.type, i = s.$slide, i.off("refresh").trigger("onReset").addClass(s.opts.slideClass), n) {
                            case "image":
                                t.setImage(s);
                                break;
                            case "iframe":
                                t.setIframe(s);
                                break;
                            case "html":
                                t.setContent(s, s.src || s.content);
                                break;
                            case "video":
                                t.setContent(s, s.opts.video.tpl.replace(/\{\{src\}\}/gi, s.src).replace("{{format}}", s.opts.videoFormat || s.opts.video.format || "").replace("{{poster}}", s.thumb || ""));
                                break;
                            case "inline":
                                v(s.src).length ? t.setContent(s, v(s.src)) : t.setError(s);
                                break;
                            case "ajax":
                                t.showLoading(s), r = v.ajax(v.extend({}, s.opts.ajax.settings, {
                                    url: s.src,
                                    success: function (a, e) {
                                        "success" === e && t.setContent(s, a)
                                    },
                                    error: function (a, e) {
                                        a && "abort" !== e && t.setError(s)
                                    }
                                })), i.one("onReset", function () {
                                    r.abort()
                                });
                                break;
                            default:
                                t.setError(s);
                        }
                        return !0
                    }
                },
                setImage: function (n) {
                    var t = this,
                        e;
                    setTimeout(function () {
                        var a = n.$image;
                        t.isClosing || !n.isLoading || a && a.length && a[0].complete || n.hasError || t.showLoading(n)
                    }, 50), t.checkSrcset(n), n.$content = v("<div class=\"fancybox-content\"></div>").addClass("fancybox-is-hidden").appendTo(n.$slide.addClass("fancybox-slide--image")), !1 !== n.opts.preload && n.opts.width && n.opts.height && n.thumb && (n.width = n.opts.width, n.height = n.opts.height, e = y.createElement("img"), e.onerror = function () {
                        v(this).remove(), n.$ghost = null
                    }, e.onload = function () {
                        t.afterLoad(n)
                    }, n.$ghost = v(e).addClass("fancybox-image").appendTo(n.$content).attr("src", n.thumb)), t.setBigImage(n)
                },
                checkSrcset: function (t) {
                    var e = t.opts.srcset || t.opts.image.srcset,
                        s, l, d, p;
                    if (e) {
                        d = m.devicePixelRatio || 1, p = m.innerWidth * d, l = e.split(",").map(function (n) {
                            var a = {};
                            return n.trim().split(/\s+/).forEach(function (e, t) {
                                var n = parseInt(e.substring(0, e.length - 1), 10);
                                return 0 === t ? a.url = e : void(n && (a.value = n, a.postfix = e[e.length - 1]))
                            }), a
                        }), l.sort(function (n, t) {
                            return n.value - t.value
                        });
                        for (var u = 0, g; u < l.length; u++)
                            if (g = l[u], "w" === g.postfix && g.value >= p || "x" === g.postfix && g.value >= d) {
                                s = g;
                                break
                            }! s && l.length && (s = l[l.length - 1]), s && (t.src = s.url, t.width && t.height && "w" == s.postfix && (t.height = t.width / t.height * s.value, t.width = s.value), t.opts.srcset = e)
                    }
                },
                setBigImage: function (n) {
                    var t = this,
                        e = y.createElement("img"),
                        o = v(e);
                    n.$image = o.one("error", function () {
                        t.setError(n)
                    }).one("load", function () {
                        var i;
                        n.$ghost || (t.resolveImageSlideSize(n, this.naturalWidth, this.naturalHeight), t.afterLoad(n)), t.isClosing || (n.opts.srcset && (i = n.opts.sizes, i && "auto" !== i || (i = (1 < n.width / n.height && 1 < a.width() / a.height() ? "100" : Math.round(100 * (n.width / n.height))) + "vw"), o.attr("sizes", i).attr("srcset", n.opts.srcset)), n.$ghost && setTimeout(function () {
                            n.$ghost && !t.isClosing && n.$ghost.hide()
                        }, Math.min(300, Math.max(1e3, n.height / 1600))), t.hideLoading(n))
                    }).addClass("fancybox-image").attr("src", n.src).appendTo(n.$content), (e.complete || "complete" == e.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : e.error && o.trigger("error")
                },
                resolveImageSlideSize: function (i, t, e) {
                    var n = parseInt(i.opts.width, 10),
                        o = parseInt(i.opts.height, 10);
                    i.width = t, i.height = e, 0 < n && (i.width = n, i.height = Math.floor(n * e / t)), 0 < o && (i.width = Math.floor(o * t / e), i.height = o)
                },
                setIframe: function (o) {
                    var t = this,
                        d = o.opts.iframe,
                        i = o.$slide,
                        s;
                    v.fancybox.isMobile && (d.css.overflow = "scroll"), o.$content = v("<div class=\"fancybox-content" + (d.preload ? " fancybox-is-hidden" : "") + "\"></div>").css(d.css).appendTo(i), i.addClass("fancybox-slide--" + o.contentType), o.$iframe = s = v(d.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(d.attr).appendTo(o.$content), d.preload ? (t.showLoading(o), s.on("load.fb error.fb", function () {
                        this.isReady = 1, o.$slide.trigger("refresh"), t.afterLoad(o)
                    }), i.on("refresh.fb", function () {
                        var e = o.$content,
                            t = d.css.width,
                            r = d.css.height,
                            p, u;
                        if (1 === s[0].isReady) {
                            try {
                                p = s.contents(), u = p.find("body")
                            } catch (e) {}
                            u && u.length && u.children().length && (i.css("overflow", "visible"), e.css({
                                width: "100%",
                                "max-width": "100%",
                                height: "9999px"
                            }), t === x && (t = Math.ceil(Math.max(u[0].clientWidth, u.outerWidth(!0)))), e.css("width", t ? t : "").css("max-width", ""), r === x && (r = Math.ceil(Math.max(u[0].clientHeight, u.outerHeight(!0)))), e.css("height", r ? r : ""), i.css("overflow", "auto")), e.removeClass("fancybox-is-hidden")
                        }
                    })) : t.afterLoad(o), s.attr("src", o.src), i.one("onReset", function () {
                        try {
                            v(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                        } catch (e) {}
                        v(this).off("refresh.fb").empty(), o.isLoaded = !1, o.isRevealed = !1
                    })
                },
                setContent: function (n, t) {
                    var a = this;
                    a.isClosing || (a.hideLoading(n), n.$content && v.fancybox.stop(n.$content), n.$slide.empty(), s(t) && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), n.$placeholder = v("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : n.hasError || ("string" === v.type(t) && (t = v("<div>").append(v.trim(t)).contents()), n.opts.filter && (t = v("<div>").html(t).find(n.opts.filter))), n.$slide.one("onReset", function () {
                        v(this).find("video,audio").trigger("pause"), n.$placeholder && (n.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), n.$placeholder = null), n.$smallBtn && (n.$smallBtn.remove(), n.$smallBtn = null), n.hasError || (v(this).empty(), n.isLoaded = !1, n.isRevealed = !1)
                    }), v(t).appendTo(n.$slide), v(t).is("video,audio") && (v(t).addClass("fancybox-video"), v(t).wrap("<div></div>"), n.contentType = "video", n.opts.width = n.opts.width || v(t).attr("width"), n.opts.height = n.opts.height || v(t).attr("height")), n.$content = n.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), n.$content.siblings().hide(), n.$content.length || (n.$content = n.$slide.wrapInner("<div></div>").children().first()), n.$content.addClass("fancybox-content"), n.$slide.addClass("fancybox-slide--" + n.contentType), a.afterLoad(n))
                },
                setError: function (e) {
                    e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
                },
                showLoading: function (n) {
                    var a = this;
                    n = n || a.current, n && !n.$spinner && (n.$spinner = v(a.translate(a, a.opts.spinnerTpl)).appendTo(n.$slide).hide().fadeIn("fast"))
                },
                hideLoading: function (n) {
                    var a = this;
                    n = n || a.current, n && n.$spinner && (n.$spinner.stop().remove(), delete n.$spinner)
                },
                afterLoad: function (n) {
                    var t = this;
                    t.isClosing || (n.isLoading = !1, n.isLoaded = !0, t.trigger("afterLoad", n), t.hideLoading(n), !n.opts.smallBtn || n.$smallBtn && n.$smallBtn.length || (n.$smallBtn = v(t.translate(n, n.opts.btnTpl.smallBtn)).appendTo(n.$content)), n.opts.protect && n.$content && !n.hasError && (n.$content.on("contextmenu.fb", function (e) {
                        return 2 == e.button && e.preventDefault(), !0
                    }), "image" === n.type && v("<div class=\"fancybox-spaceball\"></div>").appendTo(n.$content)), t.adjustCaption(n), t.adjustLayout(n), n.pos === t.currPos && t.updateCursor(), t.revealContent(n))
                },
                adjustCaption: function (s) {
                    var t = this,
                        e = s || t.current,
                        n = e.opts.caption,
                        o = t.$refs.caption,
                        r = !1;
                    e.opts.preventCaptionOverlap && n && n.length && (e.pos === t.currPos ? t.$caption && (r = t.$caption.outerHeight(!0)) : (o = o.clone().empty().appendTo(o.parent()), o.html(n), r = o.outerHeight(!0), o.empty().remove()), e.$slide.css("padding-bottom", r || ""))
                },
                adjustLayout: function (r) {
                    var t = this,
                        i = r || t.current,
                        s, l, d, c;
                    i.isLoaded && !0 !== i.opts.disableLayoutFix && (i.$content.css("margin-bottom", ""), i.$content.outerHeight() > i.$slide.height() + .5 && (d = i.$slide[0].style["padding-bottom"], c = i.$slide.css("padding-bottom"), 0 < parseFloat(c) && (s = i.$slide[0].scrollHeight, i.$slide.css("padding-bottom", 0), 1 > Math.abs(s - i.$slide[0].scrollHeight) && (l = c), i.$slide.css("padding-bottom", d))), i.$content.css("margin-bottom", l))
                },
                revealContent: function (n) {
                    var t = this,
                        o = n.$slide,
                        r = !1,
                        c = !1,
                        p = t.isMoved(n),
                        u = n.isRevealed,
                        g, f, m, h;
                    return n.isRevealed = !0, g = n.opts[t.firstRun ? "animationEffect" : "transitionEffect"], m = n.opts[t.firstRun ? "animationDuration" : "transitionDuration"], m = parseInt(n.forcedDuration === x ? m : n.forcedDuration, 10), !p && n.pos === t.currPos && m || (g = !1), "zoom" === g && (n.pos === t.currPos && m && "image" === n.type && !n.hasError && (c = t.getThumbPos(n)) ? r = t.getFitPos(n) : g = "fade"), "zoom" === g ? (t.isAnimating = !0, r.scaleX = r.width / c.width, r.scaleY = r.height / c.height, h = n.opts.zoomOpacity, "auto" == h && (h = .1 < Math.abs(n.width / n.height - c.width / c.height)), h && (c.opacity = .1, r.opacity = 1), v.fancybox.setTranslate(n.$content.removeClass("fancybox-is-hidden"), c), C(n.$content), void v.fancybox.animate(n.$content, r, m, function () {
                        t.isAnimating = !1, t.complete()
                    })) : (t.updateSlide(n), g ? (v.fancybox.stop(o), f = "fancybox-slide--" + (n.pos >= t.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + g, o.addClass(f).removeClass("fancybox-slide--current"), n.$content.removeClass("fancybox-is-hidden"), C(o), "image" !== n.type && n.$content.hide().show(0), void v.fancybox.animate(o, "fancybox-slide--current", m, function () {
                        o.removeClass(f).css({
                            transform: "",
                            opacity: ""
                        }), n.pos === t.currPos && t.complete()
                    }, !0)) : (n.$content.removeClass("fancybox-is-hidden"), u || !p || "image" !== n.type || n.hasError || n.$content.hide().fadeIn("fast"), void(n.pos === t.currPos && t.complete())))
                },
                getThumbPos: function (n) {
                    var t = !1,
                        l = n.$thumb,
                        c, p, u, g, f;
                    return l && d(l[0]) && (c = v.fancybox.getTranslate(l), p = parseFloat(l.css("border-top-width") || 0), u = parseFloat(l.css("border-right-width") || 0), g = parseFloat(l.css("border-bottom-width") || 0), f = parseFloat(l.css("border-left-width") || 0), t = {
                        top: c.top + p,
                        left: c.left + f,
                        width: c.width - u - f,
                        height: c.height - p - g,
                        scaleX: 1,
                        scaleY: 1
                    }, 0 < c.width && 0 < c.height && t)
                },
                complete: function () {
                    var n = this,
                        e = n.current,
                        i = {},
                        a;
                    !n.isMoved() && e.isLoaded && (e.isComplete || (e.isComplete = !0, e.$slide.siblings().trigger("onReset"), n.preload("inline"), C(e.$slide), e.$slide.addClass("fancybox-slide--complete"), v.each(n.slides, function (e, t) {
                        t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? i[t.pos] = t : t && (v.fancybox.stop(t.$slide), t.$slide.off().remove())
                    }), n.slides = i), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), e.opts.video.autoStart && e.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                        this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next()
                    }), e.opts.autoFocus && "html" === e.contentType && (a = e.$content.find("input[autofocus]:enabled:visible:first"), a.length ? a.trigger("focus") : n.focus(null, !0)), e.$slide.scrollTop(0).scrollLeft(0))
                },
                preload: function (a) {
                    var t = this,
                        o, i;
                    2 > t.group.length || (i = t.slides[t.currPos + 1], o = t.slides[t.currPos - 1], o && o.type === a && t.loadSlide(o), i && i.type === a && t.loadSlide(i))
                },
                focus: function (e, t) {
                    var n = this,
                        o, s;
                    n.isClosing || (o = !e && n.current && n.current.isComplete ? n.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : n.$refs.container.find("*:visible"), o = o.filter("a[href],area[href],input:not([disabled]):not([type=\"hidden\"]):not([aria-hidden]),select:not([disabled]):not([aria-hidden]),textarea:not([disabled]):not([aria-hidden]),button:not([disabled]):not([aria-hidden]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^=\"-\"])").filter(function () {
                        return "hidden" !== v(this).css("visibility") && !v(this).hasClass("disabled")
                    }), o.length ? (s = o.index(y.activeElement), e && e.shiftKey ? (0 > s || 0 == s) && (e.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (0 > s || s == o.length - 1) && (e && e.preventDefault(), o.eq(0).trigger("focus"))) : n.$refs.container.trigger("focus"))
                },
                activate: function () {
                    var n = this;
                    v(".fancybox-container").each(function () {
                        var t = v(this).data("FancyBox");
                        t && t.id !== n.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                    }), n.isVisible = !0, (n.current || n.isIdle) && (n.update(), n.updateControls()), n.trigger("onActivate"), n.addEvents()
                },
                close: function (n, t) {
                    var e = this,
                        d = e.current,
                        p = function () {
                            e.cleanUp(n)
                        },
                        u, g, f, m, h, b, y;
                    return !e.isClosing && (e.isClosing = !0, !1 === e.trigger("beforeClose", n) ? (e.isClosing = !1, w(function () {
                        e.update()
                    }), !1) : (e.removeEvents(), f = d.$content, u = d.opts.animationEffect, g = v.isNumeric(t) ? t : u ? d.opts.animationDuration : 0, d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 === n ? u = !1 : v.fancybox.stop(d.$slide), d.$slide.siblings().trigger("onReset").remove(), g && e.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", g + "ms"), e.hideLoading(d), e.hideControls(!0), e.updateCursor(), "zoom" !== u || f && g && "image" === d.type && !e.isMoved() && !d.hasError && (y = e.getThumbPos(d)) || (u = "fade"), "zoom" === u ? (v.fancybox.stop(f), m = v.fancybox.getTranslate(f), b = {
                        top: m.top,
                        left: m.left,
                        scaleX: m.width / y.width,
                        scaleY: m.height / y.height,
                        width: y.width,
                        height: y.height
                    }, h = d.opts.zoomOpacity, "auto" == h && (h = .1 < Math.abs(d.width / d.height - y.width / y.height)), h && (y.opacity = 0), v.fancybox.setTranslate(f, b), C(f), v.fancybox.animate(f, y, g, p), !0) : (u && g ? v.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + u, g, p) : !0 === n ? setTimeout(p, g) : p(), !0)))
                },
                cleanUp: function (t) {
                    var e = this,
                        n = e.current.opts.$orig,
                        s, l, d;
                    e.current.$slide.trigger("onReset"), e.$refs.container.empty().remove(), e.trigger("afterClose", t), e.current.opts.backFocus && (n && n.length && n.is(":visible") || (n = e.$trigger), n && n.length && (l = m.scrollX, d = m.scrollY, n.trigger("focus"), v("html, body").scrollTop(d).scrollLeft(l))), e.current = null, s = v.fancybox.getInstance(), s ? s.activate() : (v("body").removeClass("fancybox-active compensate-for-scrollbar"), v("#fancybox-style-noscroll").remove())
                },
                trigger: function (n, t) {
                    var e = Array.prototype.slice.call(arguments, 1),
                        a = this,
                        i = t && t.opts ? t : a.current,
                        r;
                    return i ? e.unshift(i) : i = a, e.unshift(a), v.isFunction(i.opts[n]) && (r = i.opts[n].apply(i, e)), !1 === r ? r : void("afterClose" !== n && a.$refs ? a.$refs.container.trigger(n + ".fb", e) : _.trigger(n + ".fb", e))
                },
                updateControls: function () {
                    var e = this,
                        t = e.current,
                        n = t.index,
                        a = e.$refs.container,
                        o = e.$refs.caption,
                        i = t.opts.caption;
                    t.$slide.trigger("refresh"), e.$caption = i && i.length ? o.html(i) : null, e.hasHiddenControls || e.isIdle || e.showControls(), a.find("[data-fancybox-count]").html(e.group.length), a.find("[data-fancybox-index]").html(n + 1), a.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && 0 >= n), a.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= e.group.length - 1), "image" === t.type ? a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), v(y.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
                },
                hideControls: function (a) {
                    var t = this,
                        e = ["infobar", "toolbar", "nav"];
                    !a && t.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function (e) {
                        return "fancybox-show-" + e
                    }).join(" ")), this.hasHiddenControls = !0
                },
                showControls: function () {
                    var a = this,
                        t = a.current ? a.current.opts : a.opts,
                        e = a.$refs.container;
                    a.hasHiddenControls = !1, a.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", t.toolbar && t.buttons).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < a.group.length)).toggleClass("fancybox-show-caption", !!a.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < a.group.length)).toggleClass("fancybox-is-modal", !!t.modal)
                },
                toggleControls: function () {
                    this.hasHiddenControls ? this.showControls() : this.hideControls()
                }
            }), v.fancybox = {
                version: "3.5.2",
                defaults: e,
                getInstance: function (n) {
                    var t = v(".fancybox-container:not(\".fancybox-is-closing\"):last").data("FancyBox"),
                        e = Array.prototype.slice.call(arguments, 1);
                    return t instanceof r && ("string" === v.type(n) ? t[n].apply(t, e) : "function" === v.type(n) && n.apply(t, e), t)
                },
                open: function (a, t, e) {
                    return new r(a, t, e)
                },
                close: function (n) {
                    var t = this.getInstance();
                    t && (t.close(), !0 === n && this.close(n))
                },
                destroy: function () {
                    this.close(!0), _.add("body").off("click.fb-start", "**")
                },
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                use3d: function () {
                    var e = y.createElement("div");
                    return m.getComputedStyle && m.getComputedStyle(e) && m.getComputedStyle(e).getPropertyValue("transform") && !(y.documentMode && 11 > y.documentMode)
                }(),
                getTranslate: function (n) {
                    var t;
                    return n && n.length && (t = n[0].getBoundingClientRect(), {
                        top: t.top || 0,
                        left: t.left || 0,
                        width: t.width,
                        height: t.height,
                        opacity: parseFloat(n.css("opacity"))
                    })
                },
                setTranslate: function (o, t) {
                    var e = "",
                        i = {};
                    if (o && t) return t.left === x && t.top === x || (e = (t.left === x ? o.position().left : t.left) + "px, " + (t.top === x ? o.position().top : t.top) + "px", e = this.use3d ? "translate3d(" + e + ", 0px)" : "translate(" + e + ")"), t.scaleX !== x && t.scaleY !== x ? e += " scale(" + t.scaleX + ", " + t.scaleY + ")" : t.scaleX !== x && (e += " scaleX(" + t.scaleX + ")"), e.length && (i.transform = e), t.opacity !== x && (i.opacity = t.opacity), t.width !== x && (i.width = t.width), t.height !== x && (i.height = t.height), o.css(i)
                },
                animate: function (n, t, e, o, d) {
                    var s = this,
                        c;
                    v.isFunction(e) && (o = e, e = null), s.stop(n), c = s.getTranslate(n), n.on(l, function (a) {
                        a && a.originalEvent && (!n.is(a.originalEvent.target) || "z-index" == a.originalEvent.propertyName) || (s.stop(n), v.isNumeric(e) && n.css("transition-duration", ""), v.isPlainObject(t) ? t.scaleX !== x && t.scaleY !== x && s.setTranslate(n, {
                            top: t.top,
                            left: t.left,
                            width: c.width * t.scaleX,
                            height: c.height * t.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        }) : !0 !== d && n.removeClass(t), v.isFunction(o) && o(a))
                    }), v.isNumeric(e) && n.css("transition-duration", e + "ms"), v.isPlainObject(t) ? (t.scaleX !== x && t.scaleY !== x && (delete t.width, delete t.height, n.parent().hasClass("fancybox-slide--image") && n.parent().addClass("fancybox-is-scaling")), v.fancybox.setTranslate(n, t)) : n.addClass(t), n.data("timer", setTimeout(function () {
                        n.trigger(l)
                    }, e + 33))
                },
                stop: function (n, t) {
                    n && n.length && (clearTimeout(n.data("timer")), t && n.trigger(l), n.off(l).css("transition-duration", ""), n.parent().removeClass("fancybox-is-scaling"))
                }
            }, v.fn.fancybox = function (a) {
                var o;
                return a = a || {}, o = a.selector || !1, o ? v("body").off("click.fb-start", o).on("click.fb-start", o, {
                    options: a
                }, n) : this.off("click.fb-start").on("click.fb-start", {
                    items: this,
                    options: a
                }, n), this
            }, _.on("click.fb-start", "[data-fancybox]", n), _.on("click.fb-start", "[data-fancybox-trigger]", function () {
                v("[data-fancybox=\"" + v(this).attr("data-fancybox-trigger") + "\"]").eq(v(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                    $trigger: v(this)
                })
            }),
            function () {
                var e = null;
                _.on("mousedown mouseup focus blur", ".fancybox-button", function (t) {
                    switch (t.type) {
                        case "mousedown":
                            e = v(this);
                            break;
                        case "mouseup":
                            e = null;
                            break;
                        case "focusin":
                            v(".fancybox-button").removeClass("fancybox-focus"), v(this).is(e) || v(this).is("[disabled]") || v(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            v(".fancybox-button").removeClass("fancybox-focus");
                    }
                })
            }()
    }
}(window, document, jQuery),
function (g) {
    "use strict";
    var t = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube-nocookie.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            gmap_place: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function (e) {
                    return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
                }
            },
            gmap_search: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                type: "iframe",
                url: function (e) {
                    return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                }
            }
        },
        r = function (a, t, n) {
            if (a) return n = n || "", "object" === g.type(n) && (n = g.param(n, !0)), g.each(t, function (e, t) {
                a = a.replace("$" + e, t || "")
            }), n.length && (a += (0 < a.indexOf("?") ? "&" : "?") + n), a
        };
    g(document).on("objectNeedsType.fb", function (e, n, m) {
        var i = m.src || "",
            b = !1,
            a, y, v, x, _, w, C;
        a = g.extend(!0, {}, t, m.opts.media), g.each(a, function (t, e) {
            if (v = i.match(e.matcher)) {
                if (b = e.type, C = t, w = {}, e.paramPlace && v[e.paramPlace]) {
                    _ = v[e.paramPlace], "?" == _[0] && (_ = _.substring(1)), _ = _.split("&");
                    for (var n = 0, o; n < _.length; ++n) o = _[n].split("=", 2), 2 == o.length && (w[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
                }
                return x = g.extend(!0, {}, e.params, m.opts[t], w), i = "function" === g.type(e.url) ? e.url.call(this, v, x, m) : r(e.url, v, x), y = "function" === g.type(e.thumb) ? e.thumb.call(this, v, x, m) : r(e.thumb, v), "youtube" === t ? i = i.replace(/&t=((\d+)m)?(\d+)s/, function (a, t, e, n) {
                    return "&start=" + ((e ? 60 * parseInt(e, 10) : 0) + parseInt(n, 10))
                }) : "vimeo" == t && (i = i.replace("&%23", "#")), !1
            }
        }), b ? (m.opts.thumb || m.opts.$thumb && m.opts.$thumb.length || (m.opts.thumb = y), "iframe" === b && (m.opts = g.extend(!0, m.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), g.extend(m, {
            type: b,
            src: i,
            origSrc: m.src,
            contentSource: C,
            contentType: "image" === b ? "image" : "gmap_place" == C || "gmap_search" == C ? "map" : "video"
        })) : i && (m.type = m.opts.defaultType)
    });
    var a = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: !1,
            loaded: !1
        },
        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: !1,
            loaded: !1
        },
        load: function (a) {
            var t = this,
                n;
            return this[a].loaded ? void setTimeout(function () {
                t.done(a)
            }) : void(this[a].loading || (this[a].loading = !0, n = document.createElement("script"), n.type = "text/javascript", n.src = this[a].src, "youtube" === a ? window.onYouTubeIframeAPIReady = function () {
                t[a].loaded = !0, t.done(a)
            } : n.onload = function () {
                t[a].loaded = !0, t.done(a)
            }, document.body.appendChild(n)))
        },
        done: function (t) {
            var e, i, s;
            "youtube" === t && delete window.onYouTubeIframeAPIReady, e = g.fancybox.getInstance(), e && (i = e.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? s = new YT.Player(i.attr("id"), {
                events: {
                    onStateChange: function (n) {
                        0 == n.data && e.next()
                    }
                }
            }) : "vimeo" == t && void 0 !== Vimeo && Vimeo && (s = new Vimeo.Player(i), s.on("ended", function () {
                e.next()
            })))
        }
    };
    g(document).on({
        "afterShow.fb": function (o, t, e) {
            1 < t.group.length && ("youtube" === e.contentSource || "vimeo" === e.contentSource) && a.load(e.contentSource)
        }
    })
}(jQuery),
function (_, g, w) {
    "use strict";
    var n = function () {
            return _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || _.oRequestAnimationFrame || function (t) {
                return _.setTimeout(t, 1e3 / 60)
            }
        }(),
        C = function () {
            return _.cancelAnimationFrame || _.webkitCancelAnimationFrame || _.mozCancelAnimationFrame || _.oCancelAnimationFrame || function (t) {
                _.clearTimeout(t)
            }
        }(),
        m = function (t) {
            var a = [];
            for (var n in t = t.originalEvent || t || _.e, t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t], t) t[n].pageX ? a.push({
                x: t[n].pageX,
                y: t[n].pageY
            }) : t[n].clientX && a.push({
                x: t[n].clientX,
                y: t[n].clientY
            });
            return a
        },
        T = function (a, t, e) {
            return t && a ? "x" === e ? a.x - t.x : "y" === e ? a.y - t.y : Math.sqrt(Math.pow(a.x - t.x, 2) + Math.pow(a.y - t.y, 2)) : 0
        },
        e = function (n) {
            if (n.is("a,area,button,[role=\"button\"],input,label,select,summary,textarea,video,audio,iframe") || w.isFunction(n.get(0).onclick) || n.data("selectable")) return !0;
            for (var t = 0, i = n[0].attributes, o = i.length; t < o; t++)
                if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return !0;
            return !1
        },
        a = function (t) {
            var e = _.getComputedStyle(t)["overflow-y"],
                n = _.getComputedStyle(t)["overflow-x"],
                o = ("scroll" === e || "auto" === e) && t.scrollHeight > t.clientHeight,
                a = ("scroll" === n || "auto" === n) && t.scrollWidth > t.clientWidth;
            return o || a
        },
        t = function (n) {
            for (var o = !1;;) {
                if (o = a(n.get(0))) break;
                if (n = n.parent(), !n.length || n.hasClass("fancybox-stage") || n.is("body")) break
            }
            return o
        },
        o = function (n) {
            var t = this;
            t.instance = n, t.$bg = n.$refs.bg, t.$stage = n.$refs.stage, t.$container = n.$refs.container, t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", w.proxy(t, "ontouchstart"))
        };
    o.prototype.destroy = function () {
        var e = this;
        e.$container.off(".fb.touch"), w(g).off(".fb.touch"), e.requestId && (C(e.requestId), e.requestId = null), e.tapped && (clearTimeout(e.tapped), e.tapped = null)
    }, o.prototype.ontouchstart = function (n) {
        var o = this,
            a = w(n.target),
            i = o.instance,
            s = i.current,
            r = s.$slide,
            l = s.$content,
            d = "touchstart" == n.type;
        if (d && o.$container.off("mousedown.fb.touch"), (!n.originalEvent || 2 != n.originalEvent.button) && r.length && a.length && !e(a) && !e(a.parent()) && (a.is("img") || !(n.originalEvent.clientX > a[0].clientWidth + a.offset().left))) {
            if (!s || i.isAnimating || s.$slide.hasClass("fancybox-animated")) return n.stopPropagation(), void n.preventDefault();
            o.realPoints = o.startPoints = m(n), o.startPoints.length && (s.touch && n.stopPropagation(), o.startEvent = n, o.canTap = !0, o.$target = a, o.$content = l, o.opts = s.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.canPan = i.canPan(), o.startTime = new Date().getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(r[0].clientWidth), o.canvasHeight = Math.round(r[0].clientHeight), o.contentLastPos = null, o.contentStartPos = w.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0
            }, o.sliderStartPos = w.fancybox.getTranslate(r), o.stagePos = w.fancybox.getTranslate(i.$refs.stage), o.sliderStartPos.top -= o.stagePos.top, o.sliderStartPos.left -= o.stagePos.left, o.contentStartPos.top -= o.stagePos.top, o.contentStartPos.left -= o.stagePos.left, w(g).off(".fb.touch").on(d ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", w.proxy(o, "ontouchend")).on(d ? "touchmove.fb.touch" : "mousemove.fb.touch", w.proxy(o, "ontouchmove")), w.fancybox.isMobile && g.addEventListener("scroll", o.onscroll, !0), ((o.opts || o.canPan) && (a.is(o.$stage) || o.$stage.find(a).length) || (a.is(".fancybox-image") && n.preventDefault(), w.fancybox.isMobile && a.hasClass("fancybox-caption"))) && (o.isScrollable = t(a) || t(a.parent()), w.fancybox.isMobile && o.isScrollable || n.preventDefault(), (1 === o.startPoints.length || s.hasError) && (o.canPan ? (w.fancybox.stop(o.$content), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-is-grabbing")), 2 === o.startPoints.length && "image" === s.type && (s.isLoaded || s.$ghost) && (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, w.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - w(_).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - w(_).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = T(o.startPoints[0], o.startPoints[1]))))
        }
    }, o.prototype.onscroll = function () {
        var e = this;
        e.isScrolling = !0, g.removeEventListener("scroll", e.onscroll, !0)
    }, o.prototype.ontouchmove = function (n) {
        var t = this;
        return void 0 !== n.originalEvent.buttons && 0 === n.originalEvent.buttons ? void t.ontouchend(n) : t.isScrolling ? void(t.canTap = !1) : (t.newPoints = m(n), void((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || n.preventDefault(), t.distanceX = T(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = T(t.newPoints[0], t.startPoints[0], "y"), t.distance = T(t.newPoints[0], t.startPoints[0]), 0 < t.distance && (t.isSwiping ? t.onSwipe(n) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
    }, o.prototype.onSwipe = function () {
        var d = this,
            s = d.instance,
            e = d.isSwiping,
            t = d.sliderStartPos.left || 0,
            a;
        if (!0 !== e) "x" == e && (0 < d.distanceX && (2 > d.instance.group.length || 0 === d.instance.current.index && !d.instance.current.opts.loop) ? t += Math.pow(d.distanceX, .8) : 0 > d.distanceX && (2 > d.instance.group.length || d.instance.current.index === d.instance.group.length - 1 && !d.instance.current.opts.loop) ? t -= Math.pow(-d.distanceX, .8) : t += d.distanceX), d.sliderLastPos = {
            top: "x" == e ? 0 : d.sliderStartPos.top + d.distanceY,
            left: t
        }, d.requestId && (C(d.requestId), d.requestId = null), d.requestId = n(function () {
            d.sliderLastPos && (w.each(d.instance.slides, function (n, t) {
                var e = t.pos - d.instance.currPos;
                w.fancybox.setTranslate(t.$slide, {
                    top: d.sliderLastPos.top,
                    left: d.sliderLastPos.left + e * d.canvasWidth + e * t.opts.gutter
                })
            }), d.$container.addClass("fancybox-is-sliding"))
        });
        else if (10 < Math.abs(d.distance)) {
            if (d.canTap = !1, 2 > s.group.length && d.opts.vertical ? d.isSwiping = "y" : s.isDragging || !1 === d.opts.vertical || "auto" === d.opts.vertical && 800 < w(_).width() ? d.isSwiping = "x" : (a = Math.abs(180 * Math.atan2(d.distanceY, d.distanceX) / Math.PI), d.isSwiping = 45 < a && 135 > a ? "y" : "x"), "y" === d.isSwiping && w.fancybox.isMobile && d.isScrollable) return void(d.isScrolling = !0);
            s.isDragging = d.isSwiping, d.startPoints = d.newPoints, w.each(s.slides, function (n, t) {
                var e, i;
                w.fancybox.stop(t.$slide), e = w.fancybox.getTranslate(t.$slide), i = w.fancybox.getTranslate(s.$refs.stage), t.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function (n, t) {
                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), t.pos === s.current.pos && (d.sliderStartPos.top = e.top - i.top, d.sliderStartPos.left = e.left - i.left), w.fancybox.setTranslate(t.$slide, {
                    top: e.top - i.top,
                    left: e.left - i.left
                })
            }), s.SlideShow && s.SlideShow.isActive && s.SlideShow.stop()
        }
    }, o.prototype.onPan = function () {
        var e = this;
        return T(e.newPoints[0], e.realPoints[0]) < (w.fancybox.isMobile ? 10 : 5) ? void(e.startPoints = e.newPoints) : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && C(e.requestId), void(e.requestId = n(function () {
            w.fancybox.setTranslate(e.$content, e.contentLastPos)
        })))
    }, o.prototype.limitMovement = function () {
        var m = this,
            s = m.canvasWidth,
            r = m.canvasHeight,
            c = m.distanceX,
            l = m.distanceY,
            d = m.contentStartPos,
            u = d.left,
            f = d.top,
            p = d.width,
            h = d.height,
            g, b, y, v, x, _;
        return x = p > s ? u + c : u, _ = f + l, g = Math.max(0, .5 * s - .5 * p), b = Math.max(0, .5 * r - .5 * h), y = Math.min(s - p, .5 * s - .5 * p), v = Math.min(r - h, .5 * r - .5 * h), 0 < c && x > g && (x = g - 1 + Math.pow(-g + u + c, .8) || 0), 0 > c && x < y && (x = y + 1 - Math.pow(y - u - c, .8) || 0), 0 < l && _ > b && (_ = b - 1 + Math.pow(-b + f + l, .8) || 0), 0 > l && _ < v && (_ = v + 1 - Math.pow(v - f - l, .8) || 0), {
            top: _,
            left: x
        }
    }, o.prototype.limitPosition = function (r, l, d, n) {
        var o = this,
            a = o.canvasWidth,
            i = o.canvasHeight;
        return d > a ? (r = 0 < r ? 0 : r, r = r < a - d ? a - d : r) : r = Math.max(0, a / 2 - d / 2), n > i ? (l = 0 < l ? 0 : l, l = l < i - n ? i - n : l) : l = Math.max(0, i / 2 - n / 2), {
            top: l,
            left: r
        }
    }, o.prototype.onZoom = function () {
        var t = this,
            e = t.contentStartPos,
            a = e.width,
            o = e.height,
            i = e.left,
            s = e.top,
            r = T(t.newPoints[0], t.newPoints[1]),
            l = r / t.startDistanceBetweenFingers,
            d = Math.floor(a * l),
            c = Math.floor(o * l),
            p = (a - d) * t.percentageOfImageAtPinchPointX,
            u = (o - c) * t.percentageOfImageAtPinchPointY,
            g = (t.newPoints[0].x + t.newPoints[1].x) / 2 - w(_).scrollLeft(),
            f = (t.newPoints[0].y + t.newPoints[1].y) / 2 - w(_).scrollTop(),
            m = g - t.centerPointStartX,
            h = f - t.centerPointStartY;
        t.canTap = !1, t.newWidth = d, t.newHeight = c, t.contentLastPos = {
            top: s + (u + h),
            left: i + (p + m),
            scaleX: l,
            scaleY: l
        }, t.requestId && C(t.requestId), t.requestId = n(function () {
            w.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, o.prototype.ontouchend = function (e) {
        var t = this,
            n = t.isSwiping,
            a = t.isPanning,
            o = t.isZooming,
            i = t.isScrolling;
        return t.endPoints = m(e), t.dMs = Math.max(new Date().getTime() - t.startTime, 1), t.$container.removeClass("fancybox-is-grabbing"), w(g).off(".fb.touch"), g.removeEventListener("scroll", t.onscroll, !0), t.requestId && (C(t.requestId), t.requestId = null), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.isScrolling = !1, t.instance.isDragging = !1, t.canTap ? t.onTap(e) : (t.speed = 100, t.velocityX = .5 * (t.distanceX / t.dMs), t.velocityY = .5 * (t.distanceY / t.dMs), void(a ? t.endPanning() : o ? t.endZooming() : t.endSwiping(n, i)))
    }, o.prototype.endSwiping = function (n, t) {
        var e = this,
            o = !1,
            l = e.instance.group.length,
            i = Math.abs(e.distanceX),
            s = "x" == n && 1 < l && (130 < e.dMs && 10 < i || 50 < i);
        e.sliderLastPos = null, "y" == n && !t && 50 < Math.abs(e.distanceY) ? (w.fancybox.animate(e.instance.current.$slide, {
            top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
            opacity: 0
        }, 200), o = e.instance.close(!0, 250)) : s && 0 < e.distanceX ? o = e.instance.previous(300) : s && 0 > e.distanceX && (o = e.instance.next(300)), !1 !== o || "x" != n && "y" != n || e.instance.centerSlide(200), e.$container.removeClass("fancybox-is-sliding")
    }, o.prototype.endPanning = function () {
        var n = this,
            a, i, s;
        n.contentLastPos && (!1 === n.opts.momentum || 350 < n.dMs ? (a = n.contentLastPos.left, i = n.contentLastPos.top) : (a = n.contentLastPos.left + 500 * n.velocityX, i = n.contentLastPos.top + 500 * n.velocityY), s = n.limitPosition(a, i, n.contentStartPos.width, n.contentStartPos.height), s.width = n.contentStartPos.width, s.height = n.contentStartPos.height, w.fancybox.animate(n.$content, s, 330))
    }, o.prototype.endZooming = function () {
        var n = this,
            i = n.instance.current,
            s = n.newWidth,
            r = n.newHeight,
            l, d, c, p;
        n.contentLastPos && (l = n.contentLastPos.left, d = n.contentLastPos.top, p = {
            top: d,
            left: l,
            width: s,
            height: r,
            scaleX: 1,
            scaleY: 1
        }, w.fancybox.setTranslate(n.$content, p), s < n.canvasWidth && r < n.canvasHeight ? n.instance.scaleToFit(150) : s > i.width || r > i.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (c = n.limitPosition(l, d, s, r), w.fancybox.animate(n.$content, c, 150)))
    }, o.prototype.onTap = function (n) {
        var e = this,
            t = w(n.target),
            a = e.instance,
            i = a.current,
            s = n && m(n) || e.startPoints,
            r = s[0] ? s[0].x - w(_).scrollLeft() - e.stagePos.left : 0,
            l = s[0] ? s[0].y - w(_).scrollTop() - e.stagePos.top : 0,
            d = function (s) {
                var t = i.opts[s];
                (w.isFunction(t) && (t = t.apply(a, [i, n])), t) && ("close" === t ? a.close(e.startEvent) : "toggleControls" === t ? a.toggleControls() : "next" === t ? a.next() : "nextOrClose" === t ? 1 < a.group.length ? a.next() : a.close(e.startEvent) : "zoom" === t ? "image" == i.type && (i.isLoaded || i.$ghost) && (a.canPan() ? a.scaleToFit() : a.isScaledDown() ? a.scaleToActual(r, l) : 2 > a.group.length && a.close(e.startEvent)) : void 0)
            },
            c;
        if ((!n.originalEvent || 2 != n.originalEvent.button) && (t.is("img") || !(r > t[0].clientWidth + t.offset().left))) {
            if (t.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) c = "Outside";
            else if (t.is(".fancybox-slide")) c = "Slide";
            else {
                if (!a.current.$content || !a.current.$content.find(t).addBack().filter(t).length) return;
                c = "Content"
            }
            if (e.tapped) {
                if (clearTimeout(e.tapped), e.tapped = null, 50 < Math.abs(r - e.tapX) || 50 < Math.abs(l - e.tapY)) return this;
                d("dblclick" + c)
            } else e.tapX = r, e.tapY = l, i.opts["dblclick" + c] && i.opts["dblclick" + c] !== i.opts["click" + c] ? e.tapped = setTimeout(function () {
                e.tapped = null, a.isAnimating || d("click" + c)
            }, 500) : d("click" + c);
            return this
        }
    }, w(g).on("onActivate.fb", function (n, t) {
        t && !t.Guestures && (t.Guestures = new o(t))
    }).on("beforeClose.fb", function (n, t) {
        t && t.Guestures && t.Guestures.destroy()
    })
}(window, document, jQuery),
function (l, d) {
    "use strict";
    d.extend(!0, d.fancybox.defaults, {
        btnTpl: {
            slideShow: "<button data-fancybox-play class=\"fancybox-button fancybox-button--play\" title=\"{{PLAY_START}}\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M6.5 5.4v13.2l11-6.6z\"/></svg><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z\"/></svg></button>"
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });
    var a = function (e) {
        this.instance = e, this.init()
    };
    d.extend(a.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function () {
            var e = this,
                t = e.instance,
                n = t.group[t.currIndex].opts.slideShow;
            e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                e.toggle()
            }), 2 > t.group.length || !n ? e.$button.hide() : n.progress && (e.$progress = d("<div class=\"fancybox-progress\"></div>").appendTo(t.$refs.inner))
        },
        set: function (e) {
            var t = this,
                n = t.instance,
                o = n.current;
            o && (!0 === e || o.opts.loop || n.currIndex < n.group.length - 1) ? t.isActive && "video" !== o.contentType && (t.$progress && d.fancybox.animate(t.$progress.show(), {
                scaleX: 1
            }, o.opts.slideShow.speed), t.timer = setTimeout(function () {
                n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
            }, o.opts.slideShow.speed)) : (t.stop(), n.idleSecondsCounter = 0, n.showControls())
        },
        clear: function () {
            var e = this;
            clearTimeout(e.timer), e.timer = null, e.$progress && e.$progress.removeAttr("style").hide()
        },
        start: function () {
            var n = this,
                t = n.instance.current;
            t && (n.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), n.isActive = !0, t.isComplete && n.set(!0), n.instance.trigger("onSlideShowChange", !0))
        },
        stop: function () {
            var n = this,
                t = n.instance.current;
            n.clear(), n.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), n.isActive = !1, n.instance.trigger("onSlideShowChange", !1), n.$progress && n.$progress.removeAttr("style").hide()
        },
        toggle: function () {
            var e = this;
            e.isActive ? e.stop() : e.start()
        }
    }), d(l).on({
        "onInit.fb": function (n, t) {
            t && !t.SlideShow && (t.SlideShow = new a(t))
        },
        "beforeShow.fb": function (i, t, e, n) {
            var o = t && t.SlideShow;
            n ? o && e.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function (n, t) {
            var e = t && t.SlideShow;
            e && e.isActive && e.set()
        },
        "afterKeydown.fb": function (e, t, n, a, o) {
            var i = t && t.SlideShow;
            i && n.opts.slideShow && (80 === o || 32 === o) && !d(l.activeElement).is("button,a,input") && (a.preventDefault(), i.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function (a, t) {
            var e = t && t.SlideShow;
            e && e.stop()
        }
    }), d(l).on("visibilitychange", function () {
        var e = d.fancybox.getInstance(),
            t = e && e.SlideShow;
        t && t.isActive && (l.hidden ? t.clear() : t.set())
    })
}(document, jQuery),
function (s, a) {
    "use strict";
    var i = function () {
        for (var t = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], e = {}, n = 0, r; n < t.length; n++)
            if (r = t[n], r && r[1] in s) {
                for (var l = 0; l < r.length; l++) e[t[0][l]] = r[l];
                return e
            } return !1
    }();
    if (i) {
        var r = {
            request: function (t) {
                t = t || s.documentElement, t[i.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function () {
                s[i.exitFullscreen]()
            },
            toggle: function (t) {
                t = t || s.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function () {
                return !!s[i.fullscreenElement]
            },
            enabled: function () {
                return !!s[i.fullscreenEnabled]
            }
        };
        a.extend(!0, a.fancybox.defaults, {
            btnTpl: {
                fullScreen: "<button data-fancybox-fullscreen class=\"fancybox-button fancybox-button--fsenter\" title=\"{{FULL_SCREEN}}\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z\"/></svg><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z\"/></svg></button>"
            },
            fullScreen: {
                autoStart: !1
            }
        }), a(s).on(i.fullscreenchange, function () {
            var e = r.isFullscreen(),
                t = a.fancybox.getInstance();
            t && (t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0)), t.trigger("onFullscreenChange", e), t.$refs.container.toggleClass("fancybox-is-fullscreen", e), t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
        })
    }
    a(s).on({
        "onInit.fb": function (n, t) {
            var e;
            return i ? void(t && t.group[t.currIndex].opts.fullScreen ? (e = t.$refs.container, e.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
                e.stopPropagation(), e.preventDefault(), r.toggle()
            }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && r.request(), t.FullScreen = r) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()) : void t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function (i, t, e, n, o) {
            t && t.FullScreen && 70 === o && (n.preventDefault(), t.FullScreen.toggle())
        },
        "beforeClose.fb": function (n, t) {
            t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && r.exit()
        }
    })
}(document, jQuery),
function (n, r) {
    "use strict";
    r.fancybox.defaults = r.extend(!0, {
        btnTpl: {
            thumbs: "<button data-fancybox-thumbs class=\"fancybox-button fancybox-button--thumbs\" title=\"{{THUMBS}}\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z\"/></svg></button>"
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, r.fancybox.defaults);
    var o = function (e) {
        this.init(e)
    };
    r.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (s) {
            var t = this,
                e = s.group,
                n = 0;
            t.instance = s, t.opts = e[s.currIndex].opts.thumbs, s.Thumbs = t, t.$button = s.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var r = 0, l = e.length; r < l && (e[r].thumb && n++, !(1 < n)); r++);
            1 < n && t.opts ? (t.$button.removeAttr("style").on("click", function () {
                t.toggle()
            }), t.isActive = !0) : t.$button.hide()
        },
        create: function () {
            var e = this,
                n = e.instance,
                a = e.opts.parentEl,
                o = [],
                i;
            e.$grid || (e.$grid = r("<div class=\"fancybox-thumbs fancybox-thumbs-" + e.opts.axis + "\"></div>").appendTo(n.$refs.container.find(a).addBack().filter(a)), e.$grid.on("click", "a", function () {
                n.jumpTo(r(this).attr("data-index"))
            })), e.$list || (e.$list = r("<div class=\"fancybox-thumbs__list\">").appendTo(e.$grid)), r.each(n.group, function (t, e) {
                i = e.thumb, i || "image" !== e.type || (i = e.src), o.push("<a href=\"javascript:;\" tabindex=\"0\" data-index=\"" + t + "\"" + (i && i.length ? " style=\"background-image:url(" + i + ")\"" : "class=\"fancybox-thumbs-missing\"") + "></a>")
            }), e.$list[0].innerHTML = o.join(""), "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + n.group.length * e.$list.children().eq(0).outerWidth(!0))
        },
        focus: function (o) {
            var t = this,
                a = t.$list,
                i = t.$grid,
                s, r;
            t.instance.current && (s = a.children().removeClass("fancybox-thumbs-active").filter("[data-index=\"" + t.instance.current.index + "\"]").addClass("fancybox-thumbs-active"), r = s.position(), "y" === t.opts.axis && (0 > r.top || r.top > a.height() - s.outerHeight()) ? a.stop().animate({
                scrollTop: a.scrollTop() + r.top
            }, o) : "x" === t.opts.axis && (r.left < i.scrollLeft() || r.left > i.scrollLeft() + (i.width() - s.outerWidth())) && a.parent().stop().animate({
                scrollLeft: r.left
            }, o))
        },
        update: function () {
            var e = this;
            e.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), e.isVisible ? (e.$grid || e.create(), e.instance.trigger("onThumbsShow"), e.focus(0)) : e.$grid && e.instance.trigger("onThumbsHide"), e.instance.update()
        },
        hide: function () {
            this.isVisible = !1, this.update()
        },
        show: function () {
            this.isVisible = !0, this.update()
        },
        toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), r(n).on({
        "onInit.fb": function (a, t) {
            var e;
            t && !t.Thumbs && (e = new o(t), e.isActive && !0 === e.opts.autoStart && e.show())
        },
        "beforeShow.fb": function (i, t, e, n) {
            var o = t && t.Thumbs;
            o && o.isVisible && o.focus(n ? 0 : 250)
        },
        "afterKeydown.fb": function (s, t, e, n, o) {
            var a = t && t.Thumbs;
            a && a.isActive && 71 === o && (n.preventDefault(), a.toggle())
        },
        "beforeClose.fb": function (a, t) {
            var e = t && t.Thumbs;
            e && e.isVisible && !1 !== e.opts.hideOnClose && e.$grid.hide()
        }
    })
}(document, jQuery),
function (a, s) {
    "use strict";

    function e(n) {
        var a = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };
        return (n + "").replace(/[&<>"'`=\/]/g, function (e) {
            return a[e]
        })
    }
    s.extend(!0, s.fancybox.defaults, {
        btnTpl: {
            share: "<button data-fancybox-share class=\"fancybox-button fancybox-button--share\" title=\"{{SHARE}}\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z\"/></svg></button>"
        },
        share: {
            url: function (n, t) {
                return !n.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
            },
            tpl: "<div class=\"fancybox-share\"><h1>{{SHARE}}</h1><p><a class=\"fancybox-share__button fancybox-share__button--fb\" href=\"https://www.facebook.com/sharer/sharer.php?u={{url}}\"><svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196\" /></svg><span>Facebook</span></a><a class=\"fancybox-share__button fancybox-share__button--tw\" href=\"https://twitter.com/intent/tweet?url={{url}}&text={{descr}}\"><svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z\" /></svg><span>Twitter</span></a><a class=\"fancybox-share__button fancybox-share__button--pt\" href=\"https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}\"><svg viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z\" fill=\"#fff\"/></svg><span>Pinterest</span></a></p><p><input class=\"fancybox-share__input\" type=\"text\" value=\"{{url_raw}}\" onclick=\"select()\" /></p></div>"
        }
    }), s(a).on("click", "[data-fancybox-share]", function () {
        var n = s.fancybox.getInstance(),
            a = n.current || null,
            i, r;
        a && ("function" === s.type(a.opts.share.url) && (i = a.opts.share.url.apply(a, [n, a])), r = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(i)).replace(/\{\{url_raw\}\}/g, e(i)).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), s.fancybox.open({
            src: n.translate(n, r),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function (a, t) {
                    n.$refs.container.one("beforeClose.fb", function () {
                        a.close(null, 0)
                    }), t.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function (l, t, s) {
    "use strict";

    function r() {
        var t = l.location.hash.substr(1),
            e = t.split("-"),
            n = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) ? parseInt(e.pop(-1), 10) || 1 : 1,
            o = e.join("-");
        return {
            hash: t,
            index: 1 > n ? 1 : n,
            gallery: o
        }
    }

    function n(e) {
        "" !== e.gallery && s("[data-fancybox='" + s.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
    }

    function d(a) {
        var t, o;
        return !!a && (t = a.current ? a.current.opts : a.opts, o = t.hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : ""), "" !== o && o)
    }
    s.escapeSelector || (s.escapeSelector = function (n) {
        var t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        return (n + "").replace(t, function (n, t) {
            return t ? "\0" === n ? "\uFFFD" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
        })
    }), s(function () {
        !1 !== s.fancybox.defaults.hash && (s(t).on({
            "onInit.fb": function (o, t) {
                var e, i;
                !1 !== t.group[t.currIndex].opts.hash && (e = r(), i = d(t), i && e.gallery && i == e.gallery && (t.currIndex = e.index - 1))
            },
            "beforeShow.fb": function (e, n, o, a) {
                var i;
                o && !1 !== o.opts.hash && (i = d(n), i && (n.currentHash = i + (1 < n.group.length ? "-" + (o.index + 1) : ""), l.location.hash !== "#" + n.currentHash && (a && !n.origHash && (n.origHash = l.location.hash), n.hashTimer && clearTimeout(n.hashTimer), n.hashTimer = setTimeout(function () {
                    "replaceState" in l.history ? (l.history[a ? "pushState" : "replaceState"]({}, t.title, l.location.pathname + l.location.search + "#" + n.currentHash), a && (n.hasCreatedHistory = !0)) : l.location.hash = n.currentHash, n.hashTimer = null
                }, 300))))
            },
            "beforeClose.fb": function (e, n, o) {
                !1 !== o.opts.hash && (clearTimeout(n.hashTimer), n.currentHash && n.hasCreatedHistory ? l.history.back() : n.currentHash && ("replaceState" in l.history ? l.history.replaceState({}, t.title, l.location.pathname + l.location.search + (n.origHash || "")) : l.location.hash = n.origHash), n.currentHash = null)
            }
        }), s(l).on("hashchange.fb", function () {
            var a = r(),
                i = null;
            s.each(s(".fancybox-container").get().reverse(), function (e, t) {
                var n = s(t).data("FancyBox");
                if (n && n.currentHash) return i = n, !1
            }), i ? i.currentHash === a.gallery + "-" + a.index || 1 === a.index && i.currentHash == a.gallery || (i.currentHash = null, i.close()) : "" !== a.gallery && n(a)
        }), setTimeout(function () {
            s.fancybox.getInstance() || n(r())
        }, 50))
    })
}(window, document, jQuery),
function (a, t) {
    "use strict";
    var i = new Date().getTime();
    t(a).on({
        "onInit.fb": function (n, s) {
            s.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
                var n = s.current,
                    o = new Date().getTime();
                2 > s.group.length || !1 === n.opts.wheel || "auto" === n.opts.wheel && "image" !== n.type || (e.preventDefault(), e.stopPropagation(), n.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, 250 > o - i || (i = o, s[0 > (-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery), ! function (a) {
    var e;
    if ("function" == typeof define && define.amd && (define(a), e = !0), "object" == typeof exports && (module.exports = a(), e = !0), !e) {
        var i = window.Cookies,
            t = window.Cookies = a();
        t.noConflict = function () {
            return window.Cookies = i, t
        }
    }
}(function () {
    function a() {
        for (var a = 0, i = {}, n; a < arguments.length; a++)
            for (var s in n = arguments[a], n) i[s] = n[s];
        return i
    }

    function i(t) {
        return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function e(s) {
        function o() {}

        function r(e, r, l) {
            if ("undefined" != typeof document) {
                "number" == typeof (l = a({
                    path: "/"
                }, o.defaults, l)).expires && (l.expires = new Date(1 * new Date + 864e5 * l.expires)), l.expires = l.expires ? l.expires.toUTCString() : "";
                try {
                    var d = JSON.stringify(r);
                    /^[\{\[]/.test(d) && (r = d)
                } catch (t) {}
                r = s.write ? s.write(r, e) : encodeURIComponent(r + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(e + "").replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var c = "";
                for (var p in l) l[p] && (c += "; " + p, !0 !== l[p] && (c += "=" + l[p].split(";")[0]));
                return document.cookie = e + "=" + r + c
            }
        }

        function t(n, e) {
            if ("undefined" != typeof document) {
                for (var t = {}, o = document.cookie ? document.cookie.split("; ") : [], r = 0; r < o.length; r++) {
                    var l = o[r].split("="),
                        d = l.slice(1).join("=");
                    e || "\"" !== d.charAt(0) || (d = d.slice(1, -1));
                    try {
                        var p = i(l[0]);
                        if (d = (s.read || s)(d, p) || i(d), e) try {
                            d = JSON.parse(d)
                        } catch (t) {}
                        if (t[p] = d, n === p) break
                    } catch (t) {}
                }
                return n ? t[n] : t
            }
        }
        return o.set = r, o.get = function (n) {
            return t(n, !1)
        }, o.getJSON = function (n) {
            return t(n, !0)
        }, o.remove = function (e, n) {
            r(e, "", a(n, {
                expires: -1
            }))
        }, o.defaults = {}, o.withConverter = e, o
    }(function () {})
});
(function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
})(function (o) {
    "use strict";

    function i(e) {
        return !e.nodeName || -1 !== o.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }

    function t(e) {
        return o.isFunction(e) || o.isPlainObject(e) ? e : {
            top: e,
            left: e
        }
    }
    var s = o.scrollTo = function (e, t, n) {
        return o(window).scrollTo(e, t, n)
    };
    return s.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    }, o.fn.scrollTo = function (n, l, p) {
        "object" == typeof l && (p = l, l = 0), "function" == typeof p && (p = {
            onAfter: p
        }), "max" === n && (n = 9E9), p = o.extend({}, s.defaults, p), l = l || p.duration;
        var y = p.queue && 1 < p.axis.length;
        return y && (l /= 2), p.offset = t(p.offset), p.over = t(p.over), this.each(function () {
            function u(e) {
                var t = o.extend({}, p, {
                    queue: !0,
                    duration: l,
                    complete: e && function () {
                        e.call(x, r, p)
                    }
                });
                _.animate(w, t)
            }
            if (null !== n) {
                var b = i(this),
                    x = b ? this.contentWindow || window : this,
                    _ = o(x),
                    r = n,
                    w = {},
                    C;
                switch (typeof r) {
                    case "number":
                    case "string":
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(r)) {
                            r = t(r);
                            break
                        }
                        r = b ? o(r) : o(r, x);
                    case "object":
                        if (0 === r.length) return;
                        (r.is || r.style) && (C = (r = o(r)).offset());
                }
                var T = o.isFunction(p.offset) && p.offset(x, r) || p.offset;
                o.each(p.axis.split(""), function (e, t) {
                    var a = "x" === t ? "Left" : "Top",
                        o = a.toLowerCase(),
                        i = "scroll" + a,
                        l = _[i](),
                        c = s.max(x, t);
                    C ? (w[i] = C[o] + (b ? 0 : l - _.offset()[o]), p.margin && (w[i] -= parseInt(r.css("margin" + a), 10) || 0, w[i] -= parseInt(r.css("border" + a + "Width"), 10) || 0), w[i] += T[o] || 0, p.over[o] && (w[i] += r["x" === t ? "width" : "height"]() * p.over[o])) : (a = r[o], w[i] = a.slice && "%" === a.slice(-1) ? parseFloat(a) / 100 * c : a), p.limit && /^\d+$/.test(w[i]) && (w[i] = 0 >= w[i] ? 0 : Math.min(w[i], c)), !e && 1 < p.axis.length && (l === w[i] ? w = {} : y && (u(p.onAfterFirst), w = {}))
                }), u(p.onAfter)
            }
        })
    }, s.max = function (e, t) {
        var n = "x" === t ? "Width" : "Height",
            a = "scroll" + n;
        if (!i(e)) return e[a] - o(e)[n.toLowerCase()]();
        var n = "client" + n,
            s = e.ownerDocument || e.document,
            r = s.documentElement,
            s = s.body;
        return Math.max(r[a], s[a]) - Math.min(r[n], s[n])
    }, o.Tween.propHooks.scrollLeft = o.Tween.propHooks.scrollTop = {
        get: function (e) {
            return o(e.elem)[e.prop]()
        },
        set: function (e) {
            var t = this.get(e);
            if (e.options.interrupt && e._last && e._last !== t) return o(e.elem).stop();
            var n = Math.round(e.now);
            t !== n && (o(e.elem)[e.prop](n), e._last = this.get(e))
        }
    }, s
}), ! function (e, t) {
    "object" == typeof module && module.exports ? module.exports = t() : e.Toastify = t()
}(this, function () {
    function r(e, t) {
        return e && "string" == typeof t && !!(e.className && -1 < e.className.trim().split(/\s+/gi).indexOf(t))
    }
    var e = function (n) {
            return new e.lib.init(n)
        },
        n = {
            success: "<svg viewBox=\"0 0 426.667 426.667\" width=\"18\" height=\"18\"><path d=\"M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.157 0 213.333 0zm-39.134 322.918l-93.935-93.931 31.309-31.309 62.626 62.622 140.894-140.898 31.309 31.309-172.203 172.207z\" fill=\"#6ac259\"/></svg>",
            info: "<svg viewBox=\"0 0 23.625 23.625\" width=\"18\" height=\"18\"><path d=\"M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813S18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539s-.611-.814-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z\" fill=\"#006DF0\"/></svg>",
            warn: "<svg viewBox=\"0 0 310.285 310.285\" width=\"18\" height=\"18\"><path d=\"M264.845 45.441C235.542 16.139 196.583 0 155.142 0 113.702 0 74.743 16.139 45.44 45.441 16.138 74.743 0 113.703 0 155.144c0 41.439 16.138 80.399 45.44 109.701 29.303 29.303 68.262 45.44 109.702 45.44s80.399-16.138 109.702-45.44c29.303-29.302 45.44-68.262 45.44-109.701.001-41.441-16.137-80.401-45.439-109.703zm-132.673 3.895a12.587 12.587 0 0 1 9.119-3.873h28.04c3.482 0 6.72 1.403 9.114 3.888 2.395 2.485 3.643 5.804 3.514 9.284l-4.634 104.895c-.263 7.102-6.26 12.933-13.368 12.933H146.33c-7.112 0-13.099-5.839-13.345-12.945L128.64 58.594c-.121-3.48 1.133-6.773 3.532-9.258zm23.306 219.444c-16.266 0-28.532-12.844-28.532-29.876 0-17.223 12.122-30.211 28.196-30.211 16.602 0 28.196 12.423 28.196 30.211.001 17.591-11.456 29.876-27.86 29.876z\" fill=\"#FFDA44\"/></svg>",
            error: "<svg viewBox=\"0 0 51.976 51.976\" width=\"18\" height=\"18\"><path d=\"M44.373 7.603c-10.137-10.137-26.632-10.138-36.77 0-10.138 10.138-10.137 26.632 0 36.77s26.632 10.138 36.77 0c10.137-10.138 10.137-26.633 0-36.77zm-8.132 28.638a2 2 0 0 1-2.828 0l-7.425-7.425-7.778 7.778a2 2 0 1 1-2.828-2.828l7.778-7.778-7.425-7.425a2 2 0 1 1 2.828-2.828l7.425 7.425 7.071-7.071a2 2 0 1 1 2.828 2.828l-7.071 7.071 7.425 7.425a2 2 0 0 1 0 2.828z\" fill=\"#D80027\"/></svg>"
        };
    return e.lib = e.prototype = {
        toastify: "1.3.2",
        constructor: e,
        init: function (e) {
            return e || (e = {}), this.options = {}, this.options.text = e.text || "Data missing", this.options.type = e.type || "info", this.options.duration = e.duration || 5e3, this.options.selector = e.selector, this.options.callback = e.callback || function () {}, this.options.destination = e.destination, this.options.newWindow = e.newWindow || !1, this.options.close = e.close || !1, this.options.gravity = e.gravity || "bottom", this.options.position = e.position || "center", this.options.backgroundColor = e.backgroundColor, this.options.className = e.className || "", this
        },
        buildToast: function () {
            if (!this.options) throw "Toastify is not initialized";
            var e = document.createElement("div");
            if (e.className = "toast on " + this.options.className, e.className += " toast-" + this.options.gravity, e.className += " toast-" + this.options.position, e.className += " toast-" + this.options.type, this.options.backgroundColor && (e.style.background = this.options.backgroundColor), e.innerHTML = n[this.options.type] + this.options.text, !0 === this.options.close) {
                var t = document.createElement("span");
                t.innerHTML = "&#10006;", t.className = "toast-close", t.addEventListener("click", function (e) {
                    e.stopPropagation(), this.removeElement(e.target.parentElement), window.clearTimeout(e.target.parentElement.timeOutValue)
                }.bind(this));
                var a = 0 < window.innerWidth ? window.innerWidth : screen.width;
                !0 === this.options.positionLeft && 360 < a ? e.insertAdjacentElement("afterbegin", t) : e.appendChild(t)
            }
            return void 0 !== this.options.destination && e.addEventListener("click", function (e) {
                e.stopPropagation(), !0 === this.options.newWindow ? window.open(this.options.destination, "_blank") : window.location = this.options.destination
            }.bind(this)), e
        },
        showToast: function () {
            var n = this.buildToast(),
                a;
            if (!(a = void 0 === this.options.selector ? document.body : document.getElementById(this.options.selector))) throw "Root element is not defined";
            return a.insertBefore(n, a.firstChild), e.reposition(), n.timeOutValue = window.setTimeout(function () {
                this.removeElement(n)
            }.bind(this), this.options.duration), this
        },
        removeElement: function (n) {
            n.className = n.className.replace(" on", ""), window.setTimeout(function () {
                n.parentNode.removeChild(n), this.options.callback.call(n), e.reposition()
            }.bind(this), 400)
        }
    }, e.reposition = function () {
        for (var s = {
                top: 15,
                bottom: 15
            }, o = {
                top: 15,
                bottom: 15
            }, i = {
                top: 15,
                bottom: 15
            }, n = document.getElementsByClassName("toast"), e = 0, d; e < n.length; e++) {
            d = !0 === r(n[e], "toast-top") ? "toast-top" : "toast-bottom";
            var c = n[e].offsetHeight;
            d = d.substr(6, d.length - 1), 360 >= (0 < window.innerWidth ? window.innerWidth : screen.width) ? (n[e].style[d] = i[d] + "px", i[d] += c + 15) : !0 === r(n[e], "toast-left") ? (n[e].style[d] = s[d] + "px", s[d] += c + 15) : (n[e].style[d] = o[d] + "px", o[d] += c + 15)
        }
        return this
    }, e.lib.init.prototype = e.lib, e
}),
function (a) {
    function d() {
        if (t) {
            var n = o[t];
            n && n.thumb && n.thumbInitial && (n.thumb.src = n.thumbInitial)
        }
        t = null, m = null
    }

    function e(n, e, i) {
        if (d(), n) {
            var s = n.src;
            if (0 == s.indexOf("data:image")) return;
            if (0 < s.lastIndexOf("/")) var a = s.substring(0, s.lastIndexOf("/") + 1);
            var r = n.id;
            r || (r = "rid_" + new Date().getTime(), n.id = r);
            var p = 1;
            0 <= n.src.indexOf("" + a + p + ".jpg") && (p = 2), o[r] = {
                thumb: n,
                thumbInitial: s,
                prefix: a,
                count: e,
                ext: ".jpg",
                idx: p - 1
            }, o[r].thumb && (m = new Date().getTime(), t = r, g(r, m, i))
        }
    }

    function g(n, e, i) {
        var s = o[n];
        if (s) {
            var r = s.thumb,
                a = s.prefix,
                u = s.count,
                l = s.ext,
                c = s.idx;
            c = c == u ? 1 : c + 1, s.idx = c;
            var f = a + c + (l ? l : ".jpg"),
                p = new Image;
            p.onload = function () {
                n == t && e == m && (0 == p.width && g(n, e, i), r.src = f, setTimeout(function () {
                    g(n, e, i)
                }, 1e3 * i))
            }, p.onerror = function () {
                n == t && e == m && g(n, e, i)
            }, p.src = f, o[n] = s
        }
    }
    var o = {},
        t = null,
        m = null;
    a.fn.thumbs = function (n) {
        return this.each(function () {
            var t = a(this),
                i = parseInt(t.attr("data-cnt"));
            i && 1 < i && (t.mouseover(function () {
                e(this, i, n || .8)
            }), t.mouseout(function () {
                d()
            }))
        }), this
    }
}(jQuery), ! function (t) {
    function n() {
        a && (t(a.parentNode).removeClass("preview-loading"), t(a).remove()), o && clearTimeout(o), a = null, o = null
    }
    var a = null,
        o = null;
    t(document).mousemove(function (o) {
        if (a) {
            var i = t(a).offset(),
                e = o.pageX,
                s = o.pageY;
            (e < i.left || e > i.left + t(a).width() || s < i.top || s > i.top + t(a).height()) && n()
        }
    }), t(window).on("blur", function () {
        n()
    }), t.fn.videopreview = function () {
        return this.each(function () {
            var i = this,
                e = t(this).attr("data-preview");
            e && t(this).mouseover(function () {
                n(), o = setTimeout(function () {
                    t(i.parentNode).addClass("preview-loading")
                }, 100), a = document.createElement("VIDEO"), t(a).css({
                    position: "absolute",
                    left: "0",
                    top: "0",
                    visibility: "hidden"
                }), t(a).on("error", function () {
                    n()
                }), t(a).on("loadeddata", function () {
                    o && clearTimeout(o), t(a.parentNode).removeClass("preview-loading"), t(a).css({
                        visibility: "visible"
                    })
                }), a.controls = !1, a.autoplay = !0, a.muted = !0, a.loop = !0, a.src = e, i.parentNode.appendChild(a)
            })
        }), this
    }
}(jQuery);
$(document).ready(function () {
    String.prototype.trim = function () {
            return this.replace(/^\s+/, "").replace(/\s+$/, "")
        }, "ontouchstart" in document || $("body").addClass("no-touch"), $.fn.exists = function () {
            return 0 < this.length
        },
        function () {
            for (var e = {}, t = window.pageContext, n = {
                    effect: "fadeIn",
                    placeholder: "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",
                    threshold: 200
                }, a = {
                    list_videos_my_favourite_videos: 1,
                    list_videos_my_uploaded_videos: 1,
                    list_albums_my_favourite_albums: 1,
                    list_albums_my_created_albums: 1,
                    list_playlists_my_created_playlists: 1,
                    list_dvds_my_created_channels: 1,
                    list_videos_my_channel_videos: 1,
                    list_members_subscriptions_my_subscriptions: 1,
                    list_videos_videos_from_my_subscriptions: 1,
                    list_albums_albums_from_my_subscriptions: 1,
                    list_videos_my_purchased_videos: 1,
                    list_albums_my_purchased_albums: 1,
                    list_members_my_conversations: 1,
                    list_members_my_friends: 1,
                    list_messages_my_conversation_messages: 1
                }, o = /iphone|ipad|Android|webOS|iPod|BlackBerry|Windows Phone/gi.test(navigator.appVersion), s = function (e, n) {
                    if (t && t[n])
                        for (var a in t[n]) t[n].hasOwnProperty(a) && (e[a] = t[n][a]);
                    return e
                }, r = function (e, t) {
                    if ("undefined" == typeof t && (t = 400), e.exists()) {
                        var n = $(document).scrollTop(),
                            a = n + $(window).height(),
                            o = e.offset().top;
                        if (o > n && o < a) return
                    }
                    $.scrollTo(e, t, {
                        offset: -100
                    })
                }, l = function (e) {
                    var t = {};
                    if (e)
                        for (var n = e.split(";"), a = 0, o; a < n.length; a++)
                            if (o = n[a].split(":"), 2 == o.length)
                                for (var s = o[0].split("+"), r = 0; r < s.length; r++) t[s[r]] = decodeURIComponent(o[1]).replace(/[+]/g, " ");
                    return t
                }, d = function (t, n, a, o) {
                    var i = a.url ? a.url : window.location.href;
                    0 < i.indexOf("#") && (i = i.substring(0, i.indexOf("#"))), $.ajax({
                        url: i + (0 <= i.indexOf("?") ? "&" : "?") + "mode=async&function=get_block&block_id=" + t + (o ? "&" + $.param(o) : ""),
                        type: "GET",
                        cache: !1,
                        beforeSend: function () {
                            $(n).block({
                                message: null
                            }), $(n).prop("disabled", !0), a.beforeSend && a.beforeSend(n)
                        },
                        complete: function () {
                            $(n).unblock(), $(n).prop("disabled", !1), a.complete && a.complete(n)
                        },
                        success: function (i) {
                            e[t] = o, a.success && a.success(n, i)
                        },
                        error: function () {
                            a.error && a.error(n)
                        }
                    })
                }, c = function (e, t, n) {
                    var a = window.location.href;
                    0 < a.indexOf("#") && (a = a.substring(0, a.indexOf("#"))), $.ajax({
                        url: a + (0 <= a.indexOf("?") ? "&" : "?") + "mode=async&format=json&" + $.param(t),
                        type: "GET",
                        beforeSend: function () {
                            $(e).block({
                                message: null
                            }), $(e).prop("disabled", !0)
                        },
                        complete: function () {
                            $(e).unblock(), $(e).prop("disabled", !1)
                        },
                        success: function (e) {
                            "object" != typeof e && (e = JSON.parse(e)), e && n && n(e)
                        }
                    })
                }, p = function (e, n) {
                    var a = function (e, t) {
                            var n = e.parents(".modal-dialog");
                            n.exists() && (e = n), t ? (e.block({
                                message: null
                            }), e.prop("disabled", !0)) : (e.unblock(), e.prop("disabled", !1))
                        },
                        o = "Unexpected server response received. Please contact support.";
                    t && t.server_error && (o = t.server_error), e.ajaxForm({
                        data: {
                            format: "json",
                            mode: "async"
                        },
                        beforeSerialize: function () {
                            var t = e.find("[data-form-populate-from]");
                            t.each(function () {
                                var t = $(this).attr("data-form-populate-from");
                                if (t) {
                                    var n = e.find("[name=\"" + t + "\"]");
                                    n.exists() && $(this).val(n.val())
                                }
                            }), n && n.beforeSerialize && n.beforeSerialize(e)
                        },
                        beforeSubmit: function (t) {
                            var o = e.attr("data-confirm") || "";
                            if (o && !confirm(o)) return !1;
                            var i = !0;
                            return n && n.beforeSubmit && (i = n.beforeSubmit(e, t)), a(e, i), i
                        },
                        uploadProgress: function (t, a, o, i) {
                            n && n.uploadProgress && n.uploadProgress(e, i)
                        },
                        success: function (t, s, l) {
                            if (!(0 <= l.getResponseHeader("Content-Type").indexOf("application/json"))) 0 <= l.getResponseHeader("Content-Type").indexOf("text/html") ? n && n.success ? n.success(e, t) : "message" == $(t).attr("data-fancybox") || $(t).find("[data-fancybox=\"message\"]").exists() ? $.fancybox($(t), {
                                topRatio: .3,
                                beforeClose: function () {
                                    var e = this.inner.find("[data-fancybox-redirect-to]");
                                    return e.exists() ? window.location = e.attr("data-fancybox-redirect-to") : window.location.reload(), !0
                                }
                            }) : e.empty().append(t) : (e.find(".alert-danger").html(o).fadeIn(), r(e, 0), n && n.error && n.error(e));
                            else if ("object" != typeof t && (t = JSON.parse(t)), "failure" == t.status) {
                                for (var d = "", c = 0; c < t.errors.length; c++) {
                                    var p = t.errors[c],
                                        u = p.field,
                                        g = p.code;
                                    if (u) {
                                        var f = e.find("[name=\"" + u + "\"]");
                                        if (f.exists() || (f = e.find("[data-name=\"" + u + "\"] [type=\"text\"]")), f.exists() || (f = e.find("[data-name=\"" + u + "\"] select")), f.exists()) {
                                            f.parents(".form-group").addClass("error"), f.parents(".file-control").find("[type=\"text\"]").addClass("error");
                                            var m = f.parent().find("label").text();
                                            m && (d += m), 0 == c && f.focus()
                                        } else d += u
                                    }
                                    if (d += p.message + "<br>", e.find(".alert-danger").html(d).fadeIn(), "code" == u && "required" != g) {
                                        var h = e.find(".captcha-control img");
                                        h.exists() && (h.attr("src", h.attr("src").replace(/rand=\d+/, "rand=" + new Date().getTime())), e.find(".captcha-control .textfield").val(""))
                                    }
                                }
                                "object" == typeof grecaptcha && grecaptcha.reset(), n && n.error && n.error(e), r(e, 0)
                            } else if ("success" != t.status) e.find(".alert-danger").html(o).fadeIn(), r(e, 0), n && n.error && n.error(e);
                            else if (n && n.success) n.success(e, t.data);
                            else if (t.redirect) window.location = t.redirect;
                            else {
                                var b = $("[data-reload-to]");
                                b.exists() ? window.location = b.attr("data-reload-to") : window.location.reload()
                            }
                            a(e, !1)
                        },
                        error: function () {
                            e.find(".alert-danger").html(o).fadeIn(), r(e, 0), n && n.error && n.error(e), a(e, !1)
                        },
                        complete: function () {
                            n && n.complete && n.complete(e)
                        }
                    }), e.find("input, select, textarea").each(function () {
                        var e = $(this),
                            t = function () {
                                e.parents(".form-group").removeClass("error"), e.parents(".file-control").find("[type=\"text\"]").removeClass("error")
                            };
                        e.change(t), ("textarea" == e.get(0).tagName.toLowerCase() || "text" == e.get(0).type || "password" == e.get(0).type) && e.keypress(t)
                    }), e.find(".file-control [type=\"file\"]").change(function () {
                        var e = $(this),
                            t = e.val();
                        0 <= t.lastIndexOf("/") && (t = t.substring(t.lastIndexOf("/") + 1)), 0 <= t.lastIndexOf("\\") && (t = t.substring(t.lastIndexOf("\\") + 1));
                        var n = e.prop("files");
                        if (n && 1 < n.length) {
                            t = "";
                            for (var a = 0; a < n.length; a++) {
                                if (t && (t += ", "), 3 <= a) {
                                    t += "...";
                                    break
                                }
                                t += n[a].name
                            }
                        }
                        var o = e.parents(".file-control");
                        if (e.attr("multiple") && (!n || 1 == n.length)) {
                            var s = o.clone(!0, !0);
                            s.wrap("<form>").parent("form").trigger("reset"), s.unwrap(), o.parent().append(s)
                        }
                        o.find("[type=\"text\"]").val(o.find(".button").html().trim() + " " + t)
                    }), e.find(".list-selector").each(function () {
                        var t = $(this);
                        t.find("[type=\"text\"]").focus(function () {
                            var e = $(this),
                                n = t.attr("data-selector"),
                                a = t.attr("data-name"),
                                o = (t.attr("data-selected") || "").split(",");
                            t.find(".list-selector-popup").exists() ? (t.find(".list-selector-popup").show(), t.find("[name=\"filter\"]").focus()) : n && a && $.ajax({
                                url: n,
                                type: "GET",
                                beforeSend: function () {
                                    e.block({
                                        message: null
                                    }), e.css({
                                        cursor: "wait"
                                    }), e.prop("disabled", !0)
                                },
                                complete: function () {
                                    e.unblock(), e.css({
                                        cursor: "text"
                                    }), e.prop("disabled", !1)
                                },
                                success: function (n) {
                                    for (var s = [], r = [], l = "", d = $("<div class=\"list-selector-popup\">" + n + "</div>"), c = d.find("[name=\"filter\"]"), p = 0, u; p < o.length; p++)
                                        if (u = o[p].trim(), u) {
                                            var g = d.find("input[type=\"checkbox\"][value=\"" + u + "\"],input[type=\"radio\"][value=\"" + u + "\"]"),
                                                f = d.find("label[for=\"" + g.attr("id") + "\"]");
                                            g.prop("checked", !0), s.push(u), r.push(f.html())
                                        } t.append(d), d.find("input[type=\"checkbox\"]").click(function () {
                                        var n = $(this),
                                            o = 0,
                                            l = d.find("label[for=\"" + n.attr("id") + "\"]");
                                        if (l.html()) {
                                            var c = n.prop("value");
                                            if (n.prop("checked")) s.push(c), r.push(l.html()), t.append($("<input type=\"hidden\" name=\"" + a + "[]\" value=\"" + c + "\"/>"));
                                            else {
                                                for (o = 0; o < s.length; o++)
                                                    if (s[o] == c) {
                                                        s.splice(o, 1), r.splice(o, 1);
                                                        break
                                                    } t.find("input[type=\"hidden\"][value=\"" + c + "\"]").remove()
                                            }
                                            var p = "";
                                            for (o = 0; o < r.length; o++) "" != p && (p += ", "), p += r[o];
                                            e.prop("value", p), e.change()
                                        }
                                    }).focus(function () {
                                        c.focus()
                                    }), d.find("input[type=\"radio\"]").change(function () {
                                        var n = $(this),
                                            o = d.find("label[for=\"" + n.attr("id") + "\"]");
                                        if (o.html()) {
                                            var i = n.prop("value");
                                            n.prop("checked") && (t.find("input[type=\"hidden\"][name=\"" + a + "[]\"]").remove(), s[0] = i, r[0] = o.html(), t.append($("<input type=\"hidden\" name=\"" + a + "[]\" value=\"" + i + "\"/>")));
                                            var l = r[0];
                                            e.prop("value", l), e.change()
                                        }
                                    }).focus(function () {
                                        c.focus()
                                    }), c.focus().keyup(function () {
                                        c.val() == l || (l = this.value.toLowerCase(), t.find(".item").each(function () {
                                            var e = $(this);
                                            "" == l ? e.show() : e.toggle(0 <= e.find("label").html().toLowerCase().indexOf(l))
                                        }))
                                    }), $(document).mouseup(function (n) {
                                        t.is(n.target) || 0 !== t.has(n.target).length || d.hide()
                                    })
                                }
                            })
                        })
                    }), e.find("[data-expand-id]").click(function () {
                        var e = $(this),
                            t = e.attr("data-expand-id");
                        if (t) {
                            var n = $("#" + t);
                            e.hasClass("expand") ? (n.slideDown(400, function () {
                                $(window).trigger("scroll")
                            }), e.removeClass("expand").addClass("collapse")) : (n.slideUp(400, function () {}), e.removeClass("collapse").addClass("expand"))
                        }
                    }), e.find("[data-action=\"choose\"]").each(function () {
                        $(this).click(function () {
                            if (!$(this).hasClass("disabled")) {
                                var e = $(this).parents("form"),
                                    t = $(this).find("input");
                                if (e.find("[data-action=\"choose\"] [type=\"radio\"]").prop("checked", !1), t.prop("checked", !0), t.prop("checked")) {
                                    e.find("[data-action=\"choose\"]").removeClass("active"), $(this).addClass("active");
                                    var n = e.find(".captcha-control");
                                    n.exists() && ("payment_option" == t.attr("name") ? (n.append(n.parent().find("[type=\"submit\"]")), n.parent().find("label").removeClass("hidden"), n.removeClass("hidden")) : "card_package_id" == t.attr("name") && (n.parent().append(n.find("[type=\"submit\"]")), n.parent().find("label").addClass("hidden"), n.addClass("hidden")))
                                }
                            }
                        })
                    })
                }, u = function (e, t, n) {
                    $.fancybox.open({
                        src: t,
                        type: "ajax",
                        opts: {
                            afterShow: function (e, t) {
                                n || (t.$content.find("[data-form=\"ajax\"]").each(function () {
                                    p($(this))
                                }), t.$content.find("[data-fancybox=\"ajax\"]").each(function () {
                                    $(this).click(function (t) {
                                        t.preventDefault(), u($(this), this.href || $(this).attr("data-href"))
                                    })
                                })), n && n.call(this)
                            },
                            beforeClose: function (t, n) {
                                return n.$content.find("[data-fancybox=\"refresh\"]").exists() ? e && e.attr("data-fancybox-refresh-id") ? g(e.attr("data-fancybox-refresh-id"), e, !1, !0) : window.location.reload() : e && e.attr("data-fancybox-refresh-id") && g(e.attr("data-fancybox-refresh-id"), e, !1, !0), !0
                            }
                        }
                    })
                }, g = function (n, a, o, i) {
                    if (!n) return void window.location.reload();
                    var s = null;
                    e[n] && (s = e[n]);
                    var l = {
                            success: function (a, l) {
                                e[n] = s;
                                var d = .1;
                                i || (d = 1), o && r($("#" + n)), $("#" + n).animate({
                                    opacity: d
                                }, 400, function () {
                                    var e = document.createElement("div");
                                    e.innerHTML = l;
                                    var a = $(e).children().first();
                                    if ($(a).css("opacity", d), $(this).replaceWith(a), $("#" + n).animate({
                                            opacity: 1
                                        }, 400), _($("#" + n)), "undefined" != typeof Storage) {
                                        var o = "";
                                        t && t.userId && (o = t.userId + ":"), sessionStorage.setItem(o + location.href + "#" + n, $("#" + n).html()), sessionStorage.setItem(o + location.href + "#" + n + ":params", JSON.stringify(s))
                                    }
                                })
                            }
                        },
                        c = 0;
                    l.error = function () {
                        c++;
                        var e = !1;
                        for (var t in s) s.hasOwnProperty(t) && 0 == t.indexOf("from") && 1 < parseInt(s[t]) && (s[t] = parseInt(s[t]) - 1, 1 < c && (s[t] = 1), e = !0);
                        e || (s = null), 1 < c && delete l.error, d(n, a, l, s)
                    }, d(n, a, l, s)
                }, f = function () {
                    $(".navigation button").click(function () {
                        $(this).parents(".navigation").toggleClass("open")
                    })
                }, m = function () {
                    var t = $(".tabs-menu li a");
                    if (t.exists()) {
                        var n = {},
                            a = "",
                            o = "";
                        t.each(function () {
                            if (0 == $(this).attr("href").indexOf("#")) {
                                var e = $(this).attr("href");
                                o && e != window.location.hash || (o = e), n[e] = $(this), a += "," + e
                            }
                        });
                        var i = $(a ? a.substr(1) : "");
                        i.hide(), o && (n[o].addClass("active"), $(o).show()), t.click(function (a) {
                            if (0 == $(this).attr("href").indexOf("#")) {
                                a.preventDefault();
                                var e = $(this).attr("href");
                                t.removeClass("active"), i.hide(), $(e).show(), n[e] && n[e].addClass("active"), $(window).trigger("scroll")
                            }
                        })
                    }
                }, h = function () {
                    $("[data-fancybox=\"ajax\"]").each(function () {
                        $(this).click(function (t) {
                            t.preventDefault(), u($(this), this.href || $(this).attr("data-href"))
                        })
                    }), $(".block-album .images a.item, .block-screenshots a.item, .list-albums-images a, .list-videos-screenshots a").fancybox({
                        openEffect: "none",
                        closeEffect: "none",
                        prevEffect: "none",
                        nextEffect: "none",
                        helpers: {
                            title: {
                                type: "inside"
                            },
                            buttons: {
                                position: "bottom"
                            }
                        }
                    }), 0 < window.location.href.indexOf("?login") && $("#login").click()
                }, b = function () {
                    var e = $(".rating-container"),
                        t = e.find(".rate-like, .rate-dislike");
                    t.click(function (n) {
                        n.preventDefault();
                        var a = $(this);
                        if (!(a.hasClass("disabled") || a.hasClass("voted"))) {
                            var o = parseInt(a.attr("data-vote")) || 0,
                                i = a.attr("data-video-id"),
                                s = a.attr("data-album-id"),
                                r = a.attr("data-playlist-id"),
                                l = a.attr("data-post-id"),
                                d = a.attr("data-model-id"),
                                p = a.attr("data-cs-id"),
                                u = a.attr("data-dvd-id"),
                                g = a.attr("data-flag-id");
                            (i || s || r || d || p || l || u) && (c(a, {
                                action: "rate",
                                video_id: i,
                                album_id: s,
                                playlist_id: r,
                                model_id: d,
                                cs_id: p,
                                post_id: l,
                                dvd_id: u,
                                vote: o
                            }, function (n) {
                                if ("success" == n.status) {
                                    t.addClass("disabled"), a.removeClass("disabled").addClass("voted"), e.find(".voters").html(e.find(".voters").attr("data-success"));
                                    var i = e.find(".scale"),
                                        s = parseFloat(i.attr("data-rating")),
                                        r = parseInt(i.attr("data-votes"));
                                    if (0 < r) {
                                        0 == s && (r = 0);
                                        var l = 100 * ((s * r + o) / (r + 1) / 5);
                                        100 < l && (l = 100), e.find(".scale").css({
                                            width: l + "%"
                                        })
                                    }
                                } else t.addClass("disabled"), e.find(".voters").html(e.find(".voters").attr("data-error"))
                            }), g && c(a, {
                                action: "flag",
                                video_id: i,
                                album_id: s,
                                playlist_id: r,
                                postId: l,
                                dvdId: u,
                                flag_id: g
                            }, function () {}))
                        }
                    })
                }, y = function () {
                    var e = $("#flag-form");
                    if (e.exists()) {
                        var t = e.find("form");
                        t.exists() && p(t, {
                            success: function (e) {
                                e.find(".alert-success").fadeIn(), e.find(".alert-danger").fadeOut(), e.find(".radio, .form-group, .btn").hide()
                            }
                        })
                    }
                }, v = function () {
                    var e = $(".comments"),
                        n = e.find(".new-comment");
                    if (e.exists() && n.exists()) {
                        var a = e.find("form");
                        a.exists() && p(a, {
                            success: function (n, a) {
                                n.get(0).reset();
                                var o = e.attr("data-block-id"),
                                    i = $(".comment-list");
                                if (a && a.approved && o && i.exists()) {
                                    var s = {
                                        success: function (e, n) {
                                            if ("undefined" != typeof Storage) {
                                                var s = "";
                                                t && t.userId && (s = t.userId + ":"), sessionStorage.removeItem(s + location.href + "#" + o), sessionStorage.removeItem(s + location.href + "#" + o + ":params")
                                            }
                                            var r = document.createElement("DIV");
                                            r.innerHTML = n;
                                            var l = $(r).find(".item[data-comment-id=\"" + (a.comment_id || a.entry_id) + "\"]").hide();
                                            i.find("#" + o + "_items").prepend(l), setTimeout(function () {
                                                i.show(), l.fadeIn()
                                            }, 200)
                                        }
                                    };
                                    d(o, null, s)
                                } else i.find(".alert-success").show()
                            }
                        })
                    }
                }, x = function () {
                    $(".comment-list").on("click", ".title a", function (n) {
                        var e = $(this),
                            a = $(this).parents(".item"),
                            o = $(this).parents(".title"),
                            i = o.find(".comment-rating"),
                            s = o.find(".comment-like, .comment-dislike"),
                            r = a.attr("data-comment-id");
                        if (e.hasClass("comment-like") || e.hasClass("comment-dislike")) {
                            if (n.preventDefault(), e.hasClass("disabled")) return;
                            var l = e.hasClass("comment-dislike") ? -1 : 1;
                            c(e, {
                                action: "vote_comment",
                                vote: l,
                                comment_id: r
                            }, function (e) {
                                if ("success" != e.status) s.addClass("disabled");
                                else if (s.fadeOut(), i.exists()) {
                                    var t = parseInt(i.html());
                                    isNaN(t) || (t += l, i.html(t), 0 < t ? i.addClass("positive") : 0 > t ? (i.addClass("negative"), a.addClass("dim-comment")) : 0 == t && (i.removeClass("positive").removeClass("negative"), a.removeClass("dim-comment")))
                                }
                            })
                        } else e.hasClass("comment-edit") && (n.preventDefault(), $.fancybox.open({
                            src: "#comment-edit-form",
                            opts: {
                                afterShow: function (e, n) {
                                    var o = n.$content.find("form");
                                    o.find("[name=\"comment_id\"], [name=\"entry_id\"]").val(r);
                                    var i = a.find(".original-text").html() || "";
                                    i = i.replace(/<br>/gi, "\n").replace(/&gt;/gi, ">").replace(/&lt;/gi, "<").replace(/&#34;/gi, "\""), i = i.replace(/<img.*?alt=['"](.*?)['"].*?>/gi, "$1"), o.find("[name=\"comment\"], [name=\"entry\"]").val(i), p(o, {
                                        success: function () {
                                            $.fancybox.close();
                                            var e = $(".comments"),
                                                n = e.attr("data-block-id");
                                            if (n) {
                                                var o = {
                                                    success: function (e, o) {
                                                        if ("undefined" != typeof Storage) {
                                                            var i = "";
                                                            t && t.userId && (i = t.userId + ":"), sessionStorage.removeItem(i + location.href + "#" + n), sessionStorage.removeItem(i + location.href + "#" + n + ":params")
                                                        }
                                                        var s = document.createElement("DIV");
                                                        s.innerHTML = o;
                                                        var l = $(s).find(".item[data-comment-id=\"" + r + "\"] .comment-text").html() || "";
                                                        a.find(".comment-text").html(l)
                                                    }
                                                };
                                                d(n, null, o)
                                            }
                                        }
                                    })
                                }
                            }
                        }))
                    })
                }, _ = function (i) {
                    function f(e, t, n) {
                        return function (a) {
                            if ("success" != a.status) {
                                for (var o = 0; o < a.errors.length; o++) {
                                    var s = a.errors[o],
                                        l = s.message;
                                    l && e.find(".alert-danger").html(l).fadeIn()
                                }
                                r($("#" + n), 0)
                            } else if (g(n, t, !0, !0), e.attr("data-refresh-block-ids"))
                                for (var d = e.attr("data-refresh-block-ids").split(","), c = 0; c < d.length; c++) g(d[c], t, !1, !0);
                            else t.attr("data-redirect-url") && (window.location = t.attr("data-redirect-url"))
                        }
                    }
                    if (!!i) i.find("[data-fancybox=\"ajax\"]").each(function () {
                        $(this).click(function (t) {
                            t.preventDefault(), u($(this), this.href || $(this).attr("data-href"))
                        })
                    });
                    else if (i = $(document), "undefined" != typeof Storage) {
                        var m = {};
                        i.find("[data-action=\"ajax\"]").each(function () {
                            var e = $(this).attr("data-block-id");
                            m[e] || (m[e] = !0)
                        });
                        var h = "";
                        for (var b in t && t.userId && (h = t.userId + ":"), m)
                            if (m.hasOwnProperty(b)) {
                                var y = sessionStorage.getItem(h + location.href + "#" + b);
                                y || (y = sessionStorage.getItem(location.href + "#" + b)), y && $("#" + b).html(y).find("[data-fancybox=\"ajax\"]").each(function () {
                                    $(this).click(function (t) {
                                        t.preventDefault(), u($(this), this.href || $(this).attr("data-href"))
                                    })
                                });
                                var v = sessionStorage.getItem(h + location.href + "#" + b + ":params");
                                if (v || (v = sessionStorage.getItem(location.href + "#" + b + ":params")), v) {
                                    try {
                                        e[b] = JSON.parse(v)
                                    } catch (t) {}
                                    a[b] && ($("#" + b).find("img.lazy-load").removeClass("lazy-load"), g(b, b, !1, !1))
                                }
                            }
                    }
                    if ($.fn.lazyload && (o ? i.find("img.lazy-load").each(function () {
                            var e = $(this).attr("data-original");
                            e && (this.src = e)
                        }) : i.find("img.lazy-load").lazyload(s(n, "lazyload"))), $.fn.thumbs && !o && i.find("img[data-cnt]").thumbs(), $.fn.videopreview && !o && i.find("img[data-preview]").videopreview(), i.find("[data-action=\"ajax\"]").click(function (n) {
                            n.preventDefault();
                            var e = {},
                                o = $(this),
                                i = o.attr("data-append-items-to"),
                                s = parseInt(o.attr("data-max-queries")) || 0,
                                c = o.attr("data-block-id");
                            if (c) {
                                var p = o.attr("data-container-id");
                                if (s && i) {
                                    var u = parseInt($("#" + i).attr("data-current-queries")) || 0;
                                    if (u < s) u++, u == s ? $("#" + p).remove() : $("#" + i).attr("data-current-queries", u);
                                    else return
                                }
                                var g = l(o.attr("data-parameters")),
                                    f = "";
                                t && t.userId && (f = t.userId + ":"), e.success = function (e, t) {
                                    if (i) {
                                        var n = document.createElement("DIV");
                                        if (n.innerHTML = t, p) {
                                            var o = $(n).find("#" + p);
                                            o.exists() ? ($("#" + p).replaceWith(o), _(o)) : $("#" + p).remove()
                                        }
                                        var s = $(n).find("#" + i + " .item");
                                        s.css({
                                            display: "none"
                                        }), "true" == $("#" + i).attr("data-append-to-beginning") ? s.insertBefore($("#" + i).find(".item").first()) : s.insertAfter($("#" + i).find(".item").last()), s.fadeIn().promise().done(function () {
                                            for (var e in g)
                                                if (g.hasOwnProperty(e) && 0 == e.indexOf("from") && 1 < parseInt(g[e])) {
                                                    delete g[e];
                                                    break
                                                } a[c] || "undefined" == typeof Storage || (sessionStorage.setItem(f + location.href + "#" + c, $("#" + c).html()), sessionStorage.setItem(f + location.href + "#" + c + ":params", JSON.stringify(g)))
                                        }), _(s)
                                    } else r($("#" + c)), $("#" + c).animate({
                                        opacity: .1
                                    }, 400, function () {
                                        var e = document.createElement("div");
                                        e.innerHTML = t;
                                        var n = $(e).find("#" + c);
                                        $(n).css("opacity", "0.1"), $(this).replaceWith(n), $("#" + c).animate({
                                            opacity: 1
                                        }, 400), _($("#" + c)), "undefined" != typeof Storage && (sessionStorage.setItem(f + location.href + "#" + c, $("#" + c).html()), sessionStorage.setItem(f + location.href + "#" + c + ":params", JSON.stringify(g)))
                                    })
                                }, d(c, p ? $("#" + p) : o, e, g)
                            }
                        }), i.find("[data-rt]").mousedown(function () {
                            var e = $(this).attr("data-rt");
                            if (e) {
                                var t = window.location.href;
                                0 < t.indexOf("#") && (t = t.substring(0, t.indexOf("#")));
                                var n = new Image;
                                n.src = t + (0 <= t.indexOf("?") ? "&" : "?") + "mode=async&action=rotator_videos&pqr=" + e, $(this).attr("data-rt", "")
                            }
                        }), i.find("[data-playlist-item]").click(function (t) {
                            t.preventDefault(), i.find("[data-playlist-item]").removeClass("selected");
                            var n = $(this);
                            n.addClass("selected");
                            var a = n.attr("data-playlist-item");
                            if (a) {
                                e.playlist_state = a;
                                var o = {};
                                o.url = a, o.success = function (e, t) {
                                    $(".player").html("").append($(t.trim()).find(".player-holder")), $(".player-holder").find("[data-fancybox=\"ajax\"]").each(function () {
                                        $(this).click(function (t) {
                                            t.preventDefault(), u($(this), this.href || $(this).attr("data-href"))
                                        })
                                    }), $(".player-holder").find("[data-form=\"ajax\"]").each(function () {
                                        p($(this))
                                    }), setTimeout(function () {
                                        r($(".player"), 0)
                                    }, 0)
                                }, d("video_view_video_view", n, o)
                            }
                        }), !e.playlist_state) {
                        var x = i.find("[data-playlist-item]").first();
                        x.exists() && x.addClass("selected").click()
                    } else i.find("[data-playlist-item]").each(function () {
                        $(this).attr("data-playlist-item") == e.playlist_state && $(this).addClass("selected")
                    });
                    i.find("[data-fav-video-id]").click(function (n) {
                        n.preventDefault(), n.stopPropagation();
                        var e = $(this),
                            a = e.attr("data-fav-video-id"),
                            o = e.attr("data-fav-type") || 0;
                        e.hasClass("active") || e.hasClass("fav-remove") ? c(e, {
                            action: "delete_from_favourites",
                            video_id: a,
                            video_ids: [a],
                            fav_type: o,
                            playlist_id: 0
                        }, function (n) {
                            "failure" == n.status && n.errors && n.errors[0] && "not_logged_in" == n.errors[0].code ? t && t.loginUrl && u(e, t.loginUrl) : (e.hasClass("fav-remove") ? e.parents(".img-box").addClass("removed") : e.removeClass("active"), e.find(".count").text(+e.find(".count").text() - 1), 0 == o && Toastify({
                                text: toastMessage.removedFromFav,
                                type: "info"
                            }).showToast(), 1 == o && Toastify({
                                text: toastMessage.removedFromWatchLater,
                                type: "info"
                            }).showToast())
                        }) : c(e, {
                            action: "add_to_favourites",
                            video_id: a,
                            video_ids: [a],
                            fav_type: o,
                            playlist_id: 0
                        }, function (n) {
                            "failure" == n.status && n.errors && n.errors[0] && "not_logged_in" == n.errors[0].code ? t && t.loginUrl && u(e, t.loginUrl) : (e.hasClass("fav-restore") ? e.parents(".img-box").removeClass("removed") : e.addClass("active"), e.find(".count").text(+e.find(".count").text() + 1), 0 == o && Toastify({
                                text: toastMessage.addedToFav,
                                type: "success"
                            }).showToast(), 1 == o && Toastify({
                                text: toastMessage.addedToWatchLater,
                                type: "success"
                            }).showToast())
                        })
                    }), i.find("[data-action=\"select\"]").each(function () {
                        $(this).click(function (t) {
                            if (!$(this).hasClass("disabled")) {
                                var e = $(this).parents("form"),
                                    n = $(this).find("input");
                                $(t.target).is(n) || n.prop("checked", !n.prop("checked"));
                                var a = parseInt(e.attr("data-selected-cnt")) || 0;
                                n.prop("checked") ? ($(this).addClass("active"), a++) : ($(this).removeClass("active"), a = Math.max(a - 1, 0)), e.find("input[data-mode=\"selection\"]").prop("disabled", 0 == a), e.find("input[data-action=\"select_all\"]").toggleClass("active", a == e.find("input[type=checkbox]").length - e.find("input[type=checkbox][disabled]").length), e.attr("data-selected-cnt", a)
                            }
                        })
                    }), i.find("[data-action=\"choose\"]").each(function () {
                        $(this).click(function () {
                            if (!$(this).hasClass("disabled")) {
                                var e = $(this).parents("form"),
                                    t = $(this).find("input");
                                t.prop("checked", !0), t.prop("checked") && (e.find("[data-action=\"choose\"]").removeClass("active"), $(this).addClass("active"))
                            }
                        })
                    }), i.find("[data-action=\"delete\"]").each(function () {
                        $(this).click(function (t) {
                            if (t.preventDefault(), !$(this).hasClass("disabled")) {
                                var e = $(this).parents("form"),
                                    n = $(this),
                                    a = n.attr("data-confirm") || "";
                                if (!a || confirm(a)) {
                                    var o = n.attr("data-id");
                                    if (!o) return;
                                    var i = e.attr("data-block-id"),
                                        s = l(e.attr("data-parameters"));
                                    s["function"] = "get_block", s.block_id = i, s["delete"] = [o], c(n, s, f(e, n, i))
                                }
                            }
                        })
                    }), i.find("form[data-controls]").each(function () {
                        var t = $(this),
                            n = t.attr("data-block-id");
                        t.find("input[type=\"button\"]").each(function () {
                            $(this).click(function (a) {
                                a.preventDefault();
                                var e = $(this),
                                    o = e.attr("data-confirm") || "";
                                if (o) {
                                    var i = parseInt(t.attr("data-selected-cnt")) || 0;
                                    o = o.replace(/\[count\](.*)\[\/count\]/gi, function (e, t) {
                                        for (var n = "", a = t.split("||"), o = 0, s; o < a.length; o++)
                                            if (s = a[o].split(":", 2), 1 == s.length) n = s[0].trim();
                                            else
                                                for (var r = s[0].split(","), l = 0, d; l < r.length; l++)
                                                    if (d = r[l].trim(), 0 == d.indexOf("//")) {
                                                        if (i % 100 == parseInt(d.substring(2))) return s[1].trim().replace("%1%", "" + i);
                                                    } else if (0 == d.indexOf("/")) {
                                            if (i % 10 == parseInt(d.substring(1))) return s[1].trim().replace("%1%", "" + i);
                                        } else if (i == parseInt(s[0].trim())) return s[1].trim().replace("%1%", "" + i);
                                        return n
                                    }).replace("%1%", "" + i)
                                }
                                var s = {};
                                if (!o || confirm(o))
                                    if ("select_all" == e.attr("data-action")) e.hasClass("active") ? t.find("input[type=checkbox]").each(function () {
                                        this.checked && $(this).click()
                                    }) : t.find("input[type=checkbox]").each(function () {
                                        this.checked || $(this).click()
                                    });
                                    else if ("delete_multi" == e.attr("data-action")) s = l(t.attr("data-parameters")), s["function"] = "get_block", s.block_id = n, s["delete"] = [], t.find("input[type=checkbox]").each(function () {
                                    this.checked && s["delete"].push(this.value)
                                }), c(e, s, f(t, e, n));
                                else if ("move_multi" == e.attr("data-action")) {
                                    var r = e.attr("data-href");
                                    r && u(e, r, function () {
                                        var a = this.inner.find("form");
                                        p(a, {
                                            beforeSubmit: function (a) {
                                                $.fancybox.close();
                                                var o = parseInt(a.find("[name=\"playlist_id\"]:checked").val());
                                                if (o) s = l(t.attr("data-parameters")), s["function"] = "get_block", s.block_id = n, s.move_to_playlist_id = o, s["delete"] = [], t.find("input[type=checkbox]").each(function () {
                                                    this.checked && s["delete"].push(this.value)
                                                }), c(e, s, f(t, e, n));
                                                else {
                                                    var i = a.attr("data-create-playlist-url");
                                                    i && u(e, i, function () {
                                                        var a = this.inner.find("form");
                                                        p(a, {
                                                            success: function (a, i) {
                                                                $.fancybox.close(), i = $(i), o = i.attr("data-playlist-id"), o && (s = l(t.attr("data-parameters")), s["function"] = "get_block", s.block_id = n, s.move_to_playlist_id = o, s["delete"] = [], t.find("input[type=checkbox]").each(function () {
                                                                    this.checked && s["delete"].push(this.value)
                                                                }), c(e, s, f(t, e, n)))
                                                            }
                                                        })
                                                    })
                                                }
                                                return !1
                                            }
                                        })
                                    })
                                } else if ("redirect" == e.attr("data-action")) {
                                    var d = e.attr("data-redirect-url");
                                    if (!d) return;
                                    window.location = d
                                } else if ("delete_playlist" == e.attr("data-action")) {
                                    var g = e.attr("data-id");
                                    if (!g) return;
                                    s.action = "delete_playlists", s["delete"] = [g], c(e, s, f(t, e, n))
                                } else if ("delete_dvd" == e.attr("data-action")) {
                                    var m = e.attr("data-id");
                                    if (!m) return;
                                    s.action = "delete_dvds", s["delete"] = [m], c(e, s, f(t, e, n))
                                }
                            })
                        })
                    })
                }, w = function () {
                    $("[data-form=\"ajax\"]").each(function () {
                        p($(this))
                    })
                }, C = function () {
                    var e = $("[data-subscribe-to], [data-unsubscribe-to]");
                    e.click(function (t) {
                        t.preventDefault();
                        var e = $(this);
                        if (!e.hasClass("done")) {
                            var n = e.attr("data-subscribe-to") || e.attr("data-unsubscribe-to"),
                                a = e.attr("data-id");
                            if (n && a) {
                                var o = {
                                    action: "subscribe"
                                };
                                e.attr("data-subscribe-to") || (o.action = "unsubscribe"), "category" == n ? o[o.action + "_category_id"] = a : "model" == n ? o[o.action + "_model_id"] = a : "content_source" == n ? o[o.action + "_cs_id"] = a : "user" == n ? o[o.action + "_user_id"] = a : "playlist" == n ? o[o.action + "_playlist_id"] = a : "dvd" == n && (o[o.action + "_dvd_id"] = a), c(e, o, function (t) {
                                    if ("success" == t.status) {
                                        e.addClass("done");
                                        var n = e.parents().first().find(".button-info");
                                        n.exists() && ("subscribe" == o.action ? n.html(parseInt(n.html()) + 1) : n.html(parseInt(n.html()) - 1))
                                    }
                                })
                            }
                        }
                    })
                }, T = function () {
                    if ("undefined" != typeof Storage) {
                        var n = "";
                        t && t.userId && (n = t.userId + ":");
                        var a = sessionStorage.getItem(n + location.href + "#search_filter");
                        if (a || (a = sessionStorage.getItem(location.href + "#search_filter")), a) {
                            for (var o in a = JSON.parse(a), a) $("#" + o).prop("checked", !0);
                            a.search_string_filter || $("#search_string_filter").prop("checked", !1)
                        }
                    }
                    $("#search_form").submit(function (t) {
                        try {
                            if ("" == this.q.value) return this.q.focus(), void t.preventDefault();
                            if ($(this).attr("data-url")) {
                                var e = this.q.value.replace(/[ ]+/g, "-").replace(/[?]/g, "").replace(/[&]/g, "%26").replace(/[?]/g, "%3F").replace(/[/]/g, "%2F");
                                window.location = $(this).attr("data-url").replace("%QUERY%", encodeURIComponent(e)), t.preventDefault()
                            }
                        } catch (t) {}
                    }), $("#search_form .search-button").click(function () {
                        $(this).submit()
                    }), $("[data-search-filter-ids] input").click(function () {
                        var n = $(this).parents("[data-search-filter-ids]");
                        if ("undefined" != typeof Storage) {
                            var a = "";
                            t && t.userId && (a = t.userId + ":");
                            var o = sessionStorage.getItem(a + location.href + "#search_filter");
                            o || (o = sessionStorage.getItem(location.href + "#search_filter")), o = o ? JSON.parse(o) : {
                                search_string_filter: !0
                            }, $(this).attr("id") && ($(this).prop("checked") ? o[$(this).attr("id")] = !0 : delete o[$(this).attr("id")]), sessionStorage.setItem(a + location.href + "#search_filter", JSON.stringify(o))
                        }
                        var s = n.attr("data-search-filter-ids").split(","),
                            r = {},
                            l = {};
                        for (var d in n.find("input").each(function () {
                                var e = $(this);
                                if ("hidden" == e.prop("type") || "checkbox" == e.prop("type") && e.prop("checked"))
                                    if (0 < e.prop("name").indexOf("[]")) {
                                        var t = e.prop("name").replace("[]", "");
                                        if (e.attr("data-group-id")) {
                                            var n = l[t] || {},
                                                a = n[e.attr("data-group-id")] || [];
                                            a.push(e.prop("value")), n[e.attr("data-group-id")] = a, l[t] = n
                                        } else r[t] = e.prop("value") + (r[t] ? "," + r[t] : "")
                                    } else r[e.prop("name")] = e.prop("value")
                            }), l)
                            if (l.hasOwnProperty(d)) {
                                var c = [];
                                for (var p in l[d]) l[d].hasOwnProperty(p) && c.push("(" + l[d][p].join(",") + ")");
                                r[d] = c.join("|")
                            } for (var u in r) r.hasOwnProperty(u) && "all" == r[u] && delete r[u];
                        for (var f = 0; f < s.length; f++) e[s[f]] = r, g(s[f], n, !1, !0)
                    })
                }, E = function () {
                    $("[data-form=\"ajax-upload\"]").each(function () {
                        var e = $(this),
                            t = e.attr("data-redirect-url"),
                            n = e.attr("data-progress-url"),
                            a = e.attr("data-continue-form"),
                            o = 0,
                            i = null,
                            s = function (t) {
                                t = Math.min(t || 0, 100), t > o && (e.find(".progressbar .progress").stop(!0, !0).animate({
                                    width: t + "%"
                                }), e.find(".progressbar .text").html(t + "%"), o = t)
                            };
                        p(e, {
                            success: function (e, n) {
                                e.find(".progressbar .progress").css({
                                    width: "100%"
                                }), n && n.filename && t ? window.location = t.replace("%HASH%", n.filename) : n && n.filename && a && (e.remove(), $("#" + a).find("input[type=\"submit\"]").enable(!0), $("#" + a).find("input[name=\"file\"]").val(n.filename + ".mp4"), $("#" + a).find("input[name=\"file_hash\"]").val(n.filename))
                            },
                            beforeSerialize: function (e) {
                                var t = "";
                                if (e.find("[name=\"url\"]").val() || e.find("[name=\"content\"]").val() || e.find("[name=\"content[]\"]").val() || e.find("[name=\"embed\"]").val()) {
                                    for (var n = 0; 32 > n; n++) t += "" + Math.floor(10 * Math.random());
                                    e.find("[name=\"filename\"]").val(t)
                                } else e.find("[name=\"filename\"]").val(t)
                            },
                            beforeSubmit: function (e) {
                                if (o = 0, e.append($("<div class=\"progressbar\"><div class=\"progress\"></div><div class=\"text\"></div></div>")), "url" == e.find("[name=\"upload_option\"]:checked").val() && n) {
                                    var t = e.find("[name=\"filename\"]").val();
                                    if (t) {
                                        var a = function () {
                                            $.ajax({
                                                url: n.replace("%HASH%", t),
                                                type: "GET",
                                                timeout: 1e4,
                                                cache: !1,
                                                success: function (e) {
                                                    if (e && e.documentElement) {
                                                        var t = $(e.documentElement).find("loaded").text() || 0,
                                                            n = $(e.documentElement).find("total").text() || 1;
                                                        s(Math.floor(100 * (t / n)))
                                                    }
                                                },
                                                complete: function () {
                                                    i = setTimeout(a, 1e3)
                                                }
                                            })
                                        };
                                        i = setTimeout(a, 1e3)
                                    }
                                }
                                return !0
                            },
                            uploadProgress: function (e, t) {
                                "url" != e.find("[name=\"upload_option\"]:checked").val() && s(t)
                            },
                            complete: function (e) {
                                e.find(".progressbar").hide().remove(), i && clearTimeout(i)
                            }
                        }), e.find("[name=\"upload_option\"]").change(function () {
                            var t = $(this);
                            if (t.prop("checked")) {
                                "file" == t.val() ? (e.find("[name=\"content\"]").parents(".file-control").find("input").removeAttr("disabled").click(), e.find("[name=\"url\"]").attr("disabled", "disabled").val("").change(), e.find("[name=\"embed\"]").attr("disabled", "disabled").val("").change().parents(".row").find("label").removeClass("required"), e.find("[name=\"duration\"]").attr("disabled", "disabled").val("").change().parents(".row").find("label").removeClass("required"), e.find("[name=\"screenshot\"]").parents(".file-control").find("input").attr("disabled", "disabled").val("").change().parents(".row").find("label").removeClass("required")) : "url" == t.val() ? (e.find("[name=\"content\"]").parents(".file-control").find("input").attr("disabled", "disabled").val("").change(), e.find("[name=\"url\"]").removeAttr("disabled").focus(), e.find("[name=\"embed\"]").attr("disabled", "disabled").val("").change().parents(".row").find("label").removeClass("required"), e.find("[name=\"duration\"]").attr("disabled", "disabled").val("").change().parents(".row").find("label").removeClass("required"), e.find("[name=\"screenshot\"]").parents(".file-control").find("input").attr("disabled", "disabled").val("").change().parents(".row").find("label").removeClass("required")) : "embed" == t.val() && (e.find("[name=\"url\"]").attr("disabled", "disabled").val("").change(), e.find("[name=\"content\"]").parents(".file-control").find("input").attr("disabled", "disabled").val("").change(), e.find("[name=\"embed\"]").removeAttr("disabled").focus().parents(".row").find("label").addClass("required"), e.find("[name=\"duration\"]").removeAttr("disabled").parents(".row").find("label").addClass("required"), e.find("[name=\"screenshot\"]").parents(".file-control").find("input").removeAttr("disabled").parents(".row").find("label").addClass("required"))
                            }
                        });
                        var r = {
                            mode: "async",
                            format: "json",
                            action: e.find("[name=\"action\"]").val()
                        };
                        e.attr("action", (e.attr("action") || "") + (0 <= (e.attr("action") || "").indexOf("?") ? "&" : "?") + $.param(r))
                    })
                }, S = function () {
                    $("[data-action=\"message\"],[data-action=\"add_to_friends\"]").click(function (t) {
                        t.preventDefault();
                        var e = $(this);
                        if (!e.hasClass("done")) {
                            var n = ".popup-send-message";
                            "add_to_friends" == e.attr("data-action") && (n = ".popup-add-to-friends"), $.fancybox($(n).clone(!0, !0), {
                                afterShow: function () {
                                    var t = this.inner.find("form");
                                    p(t, {
                                        success: function () {
                                            e.addClass("done"), $.fancybox.close(), "add_to_friends" == e.attr("data-action") && window.location.reload()
                                        }
                                    })
                                },
                                helpers: {
                                    overlay: {
                                        closeClick: !1
                                    }
                                },
                                topRatio: .3
                            })
                        }
                    })
                }, k = function () {
                    var e = $("#send_message_form");
                    e.exists() && p(e, {
                        success: function (e, t) {
                            var n = !1;
                            e.find("[name=\"message_id\"]").val() == t.message_id && (n = !0), e.get(0).reset(), e.find("[name=\"message_id\"]").val("");
                            var a = e.attr("data-block-id"),
                                o = $(".list-messages");
                            if (t && a && o.exists()) {
                                var i = {
                                    success: function (e, i) {
                                        var s = document.createElement("DIV");
                                        if (s.innerHTML = i, n) o.find(".item[data-message-id=\"" + t.message_id + "\"]").replaceWith($(s).find(".item[data-message-id=\"" + t.message_id + "\"]"));
                                        else {
                                            var r = $(s).find(".item[data-message-id=\"" + t.message_id + "\"]").addClass("hidden");
                                            o.find("#" + a + "_items").append(r), setTimeout(function () {
                                                o.show(), r.fadeIn()
                                            }, 200)
                                        }
                                    }
                                };
                                d(a, null, i)
                            }
                        }
                    }), $("[data-action=\"delete_conversation\"], [data-action=\"ignore_conversation\"]").click(function (t) {
                        t.preventDefault();
                        var e = $(this),
                            n = e.attr("data-confirm") || "";
                        if (!n || confirm(n)) {
                            var a = e.attr("data-user-id");
                            if (!a) return;
                            var o = e.attr("data-block-id"),
                                i = {};
                            i["function"] = "get_block", i.block_id = o, i.action = e.attr("data-action"), i.conversation_user_id = a, c(e, i, function (e) {
                                "success" == e.status && window.location.reload()
                            })
                        }
                    }), $(document).on("click", ".list-messages [data-edit-message-id]", function (t) {
                        t.preventDefault();
                        var e = $(this),
                            n = e.attr("data-edit-message-id");
                        if (n) {
                            var a = $("#send_message_form");
                            if (!a.find("[name=\"message_id\"]").val()) {
                                a.find("[name=\"message_id\"]").val(n), r(a);
                                var o = e.parents(".item[data-message-id=\"" + n + "\"]");
                                o.addClass("editing");
                                var i = o.find(".original-text").html() || "";
                                i = i.replace(/<br>/gi, "\n").replace(/&gt;/gi, ">").replace(/&lt;/gi, "<").replace(/&#34;/gi, "\""), i = i.replace(/<img.*?alt=['"](.*?)['"].*?>/gi, "$1"), i = i.trim(), a.find("[name=\"message\"]").val(i).focus()
                            }
                        }
                    })
                }, A = function () {
                    var e = function (e) {
                        var n = window.location.href;
                        if (0 < n.indexOf("#") && (n = n.substring(0, n.indexOf("#"))), n += 0 <= n.indexOf("?") ? "&" : "?", "js_stats" == e && t) {
                            if (t.disableStats) return;
                            t.videoId && (n += "video_id=" + t.videoId + "&"), t.albumId && (n += "album_id=" + t.albumId + "&")
                        }
                        var a = new Image;
                        a.src = n + "mode=async&action=" + e + "&rand=" + new Date().getTime()
                    };
                    if (Cookies.set("kt_tcookie", "1", {
                            expires: 7,
                            path: "/"
                        }), "1" == Cookies.get("kt_tcookie") && e("js_stats"), t && t.userId) {
                        var n = function () {
                            e("js_online_status")
                        };
                        n(), setInterval(n, 60000)
                    }
                }, I = function () {
                    var e = $("[data-autoscroll=\"true\"]");
                    e.exists() && r(e.first())
                }, D = function () {
                    $(document).on("click", ".emoji-picker", function () {
                        $(".emoji-dropdown").find("img[data-src]").each(function () {
                            var e = $(this).attr("data-src");
                            e && (this.src = e, $(this).removeAttr("data-src"))
                        })
                    }), $(document).on("click", ".emoji", function () {
                        var e = $(this).parents("form").find("input[type=text]");
                        if (e.exists()) {
                            var t = e.get(0),
                                n = $(this).attr("alt");
                            if (document.selection) {
                                t.focus();
                                var a = document.selection.createRange();
                                a.text = n, t.focus()
                            } else if (t.selectionStart || "0" == t.selectionStart) {
                                var o = t.selectionStart,
                                    i = t.selectionEnd,
                                    s = t.scrollTop;
                                t.value = t.value.substring(0, o) + n + t.value.substring(i, t.value.length), t.focus(), t.selectionStart = o + n.length, t.selectionEnd = o + n.length, t.scrollTop = s
                            } else t.value += n, t.focus()
                        }
                    })
                }, L = [f, m, h, b, y, v, x, _, w, C, T, E, S, k, A, I, D], P = 0; P < L.length; P++)
                if ("function" == typeof L[P]) try {
                    L[P].call(this)
                } catch (t) {
                    console && console.error && console.error(t)
                }
            $.fancybox.defaults.buttons = [], $.fancybox.defaults.smallBtn = !1, $.fancybox.defaults.touch = !1, $.fancybox.defaults.closeExisting = !0
        }()
});
var jableGridEffects = {
        effects: {
            zoomIn: {
                animeOpts: {
                    duration: function (e, t) {
                        return 150 * t
                    },
                    easing: "easeOutExpo",
                    delay: function (e, t) {
                        return 100 + 100 * t
                    },
                    opacity: {
                        value: [0, 1],
                        easing: "linear"
                    },
                    scale: [0, 1]
                }
            },
            slideUp: {
                animeOpts: {
                    duration: function (e, t) {
                        return 700 + 50 * t
                    },
                    easing: "easeOutExpo",
                    delay: function (e, t) {
                        return 100 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: function (e, t) {
                            return 250 + 50 * t
                        },
                        easing: "linear"
                    },
                    translateY: [400, 0]
                }
            },
            slideRight: {
                sortTargetsFn: function (e, t) {
                    return t.getBoundingClientRect().left - e.getBoundingClientRect().left
                },
                animeOpts: {
                    duration: 1500,
                    easing: [.1, 1, .3, 1],
                    delay: function (e, t) {
                        return 400 + 40 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 600,
                        easing: "linear"
                    },
                    translateX: [1e3, 0]
                }
            },
            slideRightSkew: {
                sortTargetsFn: function (e, t) {
                    return t.getBoundingClientRect().left - e.getBoundingClientRect().left
                },
                animeOpts: {
                    duration: 1500,
                    easing: [.1, 1, .3, 1],
                    delay: function (e, t) {
                        return 400 + 30 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 600,
                        easing: "linear"
                    },
                    translateX: [1e3, 0],
                    rotateZ: [15, 0]
                }
            },
            slideLeftSkew: {
                sortTargetsFn: function (e, t) {
                    return t.getBoundingClientRect().left - e.getBoundingClientRect().left
                },
                animeOpts: {
                    duration: 1e3,
                    easing: [.1, 1, .3, 1],
                    delay: function (e, t) {
                        return 400 + 20 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 600,
                        easing: "linear"
                    },
                    translateX: [-500, 0],
                    rotateZ: [15, 0]
                }
            },
            randomBounch: {
                animeOpts: {
                    duration: 1200,
                    elasticity: 500,
                    delay: function (e, t) {
                        return 300 + 25 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 300,
                        easing: "linear"
                    },
                    translateX: function () {
                        return [0 === anime.random(0, 1) ? 100 : -100, 0]
                    },
                    translateY: function () {
                        return [0 === anime.random(0, 1) ? 100 : -100, 0]
                    }
                }
            },
            hingle: {
                perspective: 800,
                origin: "50% 0%",
                animeOpts: {
                    duration: 1500,
                    elasticity: 0,
                    delay: function (e, t) {
                        return 500 + 200 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 1e3,
                        easing: "linear"
                    },
                    rotateX: [-90, 0]
                }
            },
            bounchIn: {
                animeOpts: {
                    duration: 1100,
                    elasticity: 600,
                    delay: function (e, t) {
                        return 300 + 150 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 600,
                        easing: "linear"
                    },
                    scaleX: {
                        value: [.4, 1]
                    },
                    scaleY: {
                        value: [.6, 1],
                        duration: 1e3
                    }
                }
            },
            fadeInSkew: {
                perspective: 1e3,
                origin: "50% 0%",
                animeOpts: {
                    duration: 800,
                    easing: [.1, 1, .3, 1],
                    delay: function (e, t) {
                        return 300 + 50 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 600,
                        easing: "linear"
                    },
                    translateX: [100, 0],
                    translateY: [-100, 0],
                    translateZ: [400, 0]
                }
            },
            elasticUp: {
                origin: "50% 0%",
                animeOpts: {
                    duration: 800,
                    easing: "easeOutBack",
                    delay: function (e, t) {
                        return 300 + 100 * t
                    },
                    opacity: {
                        value: [0, 1],
                        easing: "linear"
                    },
                    translateY: [400, 0],
                    scaleY: [{
                        value: [3, .6],
                        delay: function (e, t) {
                            return 100 * t + 120
                        },
                        duration: 300,
                        easing: "easeOutExpo"
                    }, {
                        value: [.6, 1],
                        duration: 1400,
                        easing: "easeOutElastic"
                    }],
                    scaleX: [{
                        value: [.9, 1.05],
                        delay: function (e, t) {
                            return 100 * t + 120
                        },
                        duration: 300,
                        easing: "easeOutExpo"
                    }, {
                        value: [1.05, 1],
                        duration: 1400,
                        easing: "easeOutElastic"
                    }]
                }
            },
            cardDealer: {
                animeOpts: {
                    duration: 800,
                    easing: "easeOutExpo",
                    delay: function (e, t) {
                        return 300 + 100 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 100,
                        easing: "linear"
                    },
                    translateX: function (e) {
                        var t = {
                                left: document.body.scrollLeft + document.documentElement.scrollLeft
                            },
                            n = window.innerWidth / 2 + t.left,
                            a = e.getBoundingClientRect(),
                            o = a.left + t.left + a.width / 2;
                        return [n - o, 0]
                    },
                    translateY: function (e) {
                        var t = {
                                top: document.body.scrollTop + document.documentElement.scrollTop
                            },
                            n = window.innerHeight + t.top,
                            a = e.getBoundingClientRect(),
                            o = a.top + t.top + a.height / 2;
                        return [n - o, 0]
                    },
                    rotate: function (e) {
                        var t = window.innerWidth / 2,
                            n = e.getBoundingClientRect(),
                            a = n.left + n.width / 2;
                        return [a < t ? 90 : -90, 0]
                    },
                    scale: [0, 1]
                }
            },
            zoomOutHide: {
                animeOpts: {
                    duration: 1100,
                    elasticity: 0,
                    delay: function (e, t) {
                        return 300 + 100 * t
                    },
                    opacity: {
                        value: [1, 0],
                        duration: 600,
                        easing: "linear"
                    },
                    scale: 0
                }
            },
            menuOne: {
                animeOpts: {
                    duration: 1100,
                    elasticity: 600,
                    delay: function (e, t) {
                        return 300 + 100 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 600,
                        easing: "linear"
                    },
                    scaleX: {
                        value: [.4, 1]
                    },
                    scaleY: {
                        value: [.6, 1],
                        duration: 1e3
                    }
                }
            },
            menuTwo: {
                animeOpts: {
                    duration: 600,
                    elasticity: 0,
                    easing: "easeInOutQuart",
                    delay: function (e, t) {
                        return 0 + 10 * t
                    },
                    opacity: {
                        value: [0, 1],
                        duration: 600,
                        easing: "linear",
                        delay: function (e, t) {
                            return 60 * t
                        }
                    },
                    translateX: function (e, t) {
                        return [-20 * t, 0]
                    }
                }
            }
        }
    },
    jableObj = {};
jQuery(document).ready(function (t) {
    "use strict";
    jableObj.effect = function (e) {
        function n(e) {
            e.imagesLoaded(function () {
                setTimeout(function () {
                    e.css("opacity", "1")
                }, 150);
                var n = e.attr("data-animation-item"),
                    a = e.attr("data-animation"),
                    o = [];
                e.find(n).each(function () {
                    o.push(t(this)[0]), jableGridEffects.effects[a].perspective != null && o.forEach(function (e) {
                        e.parentNode.style.WebkitPerspective = e.parentNode.style.perspective = jableGridEffects.effects[a].perspective + "px"
                    }), jableGridEffects.effects[a].origin != null && o.forEach(function (e) {
                        e.style.WebkitTransformOrigin = e.style.transformOrigin = jableGridEffects.effects[a].origin
                    })
                });
                var i = jableGridEffects.effects[a],
                    s = "undefined" == typeof i ? jableGridEffects.effects.slideUp : i.animeOpts;
                i = Object.assign(s, {
                    targets: o
                });
                anime(i)
            })
        }
        t(e).each(function () {
            var e = t(this);
            n(e)
        })
    }, jableObj.animate = function (e, t) {
        var n = Object.assign(jableGridEffects.effects[t].animeOpts, e),
            a = anime(n)
    }, jableObj.autoHideHeader = function (e) {
        function n() {
            var e = t(window).scrollTop();
            i - e > 10 ? a.removeClass("hide") : e - i > 10 && e > 150 && a.addClass("hide"), i = e, o = !1
        }
        var a = t(e),
            o = !1,
            i = 0;
        t(window).on("scroll", function () {
            o || (o = !0, window.requestAnimationFrame ? requestAnimationFrame(n) : setTimeout(n, 250))
        })
    }, jableObj.parse_attributes = function (e, t) {
        if ("undefined" == typeof t && (t = []), "undefined" != typeof e) {
            var n = t,
                a = e.split("|");
            return a && a.forEach(function (e) {
                var t = e.split(":");
                t[0] && t[1] && (n[t[0]] = t[1])
            }), n
        }
    }, jableObj.carousel = function (e) {
        function t() {
            b.owlCarousel({
                items: n,
                loop: s,
                margin: 0,
                nav: r,
                dots: a,
                responsive: h,
                slideBy: i,
                autoHeight: p,
                autoWidth: u,
                navText: [l, d],
                center: g,
                onDrag: function () {
                    document.ontouchmove = function (t) {
                        t.preventDefault()
                    }
                },
                onDragged: function () {
                    document.ontouchmove = function () {
                        return !0
                    }
                },
                onInitialized: function () {}
            }), b.find(".owl-stage").css("padding-left", f).css("padding-right", f), !0 === c && b.on("mousewheel", ".owl-stage", function (t) {
                0 < t.originalEvent.wheelDelta ? b.trigger("prev.owl") : b.trigger("next.owl"), t.preventDefault()
            })
        }
        var n = "undefined" == typeof e.attr("data-items") ? 4 : parseInt(e.attr("data-items")),
            a = !("undefined" == typeof e.attr("data-dots") || "yes" != e.attr("data-dots")),
            o = "undefined" == typeof e.attr("data-items-responsive") ? "" : e.attr("data-items-responsive"),
            i = "undefined" == typeof e.attr("data-slideby") ? "page" : e.attr("data-slideby"),
            s = !("undefined" == typeof e.attr("data-loop") || "yes" != e.attr("data-loop")),
            r = !("undefined" == typeof e.attr("data-nav") || "yes" != e.attr("data-nav")),
            l = 0 < e.find(".data-prev").length ? e.find(".data-prev").html() : "Prev",
            d = 0 < e.find(".data-next").length ? e.find(".data-next").html() : "Next",
            c = !("undefined" == typeof e.attr("data-mousewheel") || "yes" != e.attr("data-mousewheel")),
            p = !("undefined" == typeof e.attr("data-auto-height") || "yes" != e.attr("data-auto-height")),
            u = !("undefined" == typeof e.attr("data-auto-width") || "yes" != e.attr("data-auto-width")),
            g = !("undefined" == typeof e.attr("data-center") || "yes" != e.attr("data-center")),
            f = "undefined" == typeof e.attr("data-stagePadding") ? 0 : parseInt(e.attr("data-stagePadding")),
            m = jableObj.parse_attributes(o),
            h = {},
            h = {};
        m && 0 < m.length && m.forEach(function (e, t) {
            h[t] = {
                items: parseInt(e)
            }
        });
        var b = e.find(".owl-carousel");
        t()
    }, jableObj.columnWidth = function (e, n) {
        var a;
        if (e) {
            var o;
            e.forEach(function (e, t) {
                n.width() > parseInt(t) && (o = e)
            })
        } else var o = "undefined" != typeof t(this).data("width") && parseInt(t(this).data("width")) > n.width() ? n.width() : t(this).data("width");
        if (o) {
            if ("number" != typeof o && 0 < o.indexOf("%")) var i = parseFloat(o.substr(0, o.length - 1)),
                o = n.width() * (i / 100);
            return a = t.isNumeric(o) ? o + "px" : o, a
        }
    }, t("body").imagesLoaded(function () {
        jableObj.effect(".jable-animate"), t(".jable-animate").show()
    }), t(".jable-carousel").each(function () {
        jableObj.carousel(t(this))
    }), jableObj.autoHideHeader(".site-header"), new PerfectScrollbar(".app-nav"), t("[data-toggle=\"tooltip\"]").tooltip(), t(document).on("click", ".app-nav-toggle", function (n) {
        n.preventDefault();
        var e = t("body"),
            a = t(".app-nav");
        e.hasClass("open-app-nav") ? (e.removeClass("open-app-nav"), bodyScrollLock.clearAllBodyScrollLocks()) : (e.addClass("open-app-nav"), bodyScrollLock.disableBodyScroll(a))
    }), t(document).on("click", ".emoji-dropdown", function (t) {
        t.stopPropagation()
    })
});