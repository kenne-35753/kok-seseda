// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",

            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
[], []
]



    };
    var ba, da = function () {
            var a = ca,
                b = 0;
            return function () {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ea = this || self,
        fa = /^[\w+/_-]+[=]{0,2}$/,
        ha = null;
    var ja = function () {},
        ka = function (a) {
            return "function" == typeof a
        },
        la = function (a) {
            return "string" == typeof a
        },
        ma = function (a) {
            return "number" == typeof a && !isNaN(a)
        },
        na = function (a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        },
        pa = function (a, b) {
            if (Array.prototype.indexOf) {
                var c = a.indexOf(b);
                return "number" == typeof c ? c : -1
            }
            for (var d = 0; d < a.length; d++)
                if (a[d] === b) return d;
            return -1
        },
        qa = function (a, b) {
            if (a && na(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ra = function (a, b) {
            if (!ma(a) ||
                !ma(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        ta = function (a, b) {
            for (var c = new sa, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        ua = function (a, b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        va = function (a) {
            return Math.round(Number(a)) || 0
        },
        wa = function (a) {
            return "false" == String(a).toLowerCase() ? !1 : !!a
        },
        xa = function (a) {
            var b = [];
            if (na(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        ya = function (a) {
            return a ?
                a.replace(/^\s+|\s+$/g, "") : ""
        },
        za = function () {
            return (new Date).getTime()
        },
        sa = function () {
            this.prefix = "gtm.";
            this.values = {}
        };
    sa.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    sa.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    sa.prototype.contains = function (a) {
        return void 0 !== this.get(a)
    };
    var Aa = function (a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ba = function (a) {
            var b = !1;
            return function () {
                if (!b) try {
                    a()
                } catch (c) {}
                b = !0
            }
        },
        Ca = function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ea = function (a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Fa = function (a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        };
    /*
     jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Ga = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Ha = function (a) {
            if (null == a) return String(a);
            var b = Ga.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Ia = function (a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Ja = function (a) {
            if (!a || "object" != Ha(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Ia(a, "constructor") && !Ia(a.constructor.prototype, "isPrototypeOf")) return !
                    1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Ia(a, b)
        },
        f = function (a, b) {
            var c = b || ("array" == Ha(a) ? [] : {}),
                d;
            for (d in a)
                if (Ia(a, d)) {
                    var e = a[d];
                    "array" == Ha(e) ? ("array" != Ha(c[d]) && (c[d] = []), c[d] = f(e, c[d])) : Ja(e) ? (Ja(c[d]) ||
                        (c[d] = {}), c[d] = f(e, c[d])) : c[d] = e
                } return c
        };
    var u = window,
        C = document,
        Ka = navigator,
        La = C.currentScript && C.currentScript.src,
        Ma = function (a, b) {
            var c = u[a];
            u[a] = void 0 === c ? b : c;
            return u[a]
        },
        Na = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Oa = function (a, b, c) {
            var d = C.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            Na(d, b);
            c && (d.onerror = c);
            var e;
            if (null === ha) b: {
                var g = ea.document,
                    h = g.querySelector && g.querySelector("script[nonce]");
                if (h) {
                    var k = h.nonce || h.getAttribute("nonce");
                    if (k && fa.test(k)) {
                        ha = k;
                        break b
                    }
                }
                ha = ""
            }
            e = ha;
            e && d.setAttribute("nonce", e);
            var l = C.getElementsByTagName("script")[0] || C.body || C.head;
            l.parentNode.insertBefore(d, l);
            return d
        },
        Pa = function () {
            if (La) {
                var a = La.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Qa = function (a, b) {
            var c = C.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = C.body && C.body.lastChild ||
                C.body || C.head;
            d.parentNode.insertBefore(c, d);
            Na(c, b);
            void 0 !== a && (c.src = a);
            return c
        },
        Ra = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            };
            d.onerror = function () {
                d.onerror = null;
                c && c()
            };
            d.src = a;
            return d
        },
        Sa = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Ta = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        D = function (a) {
            u.setTimeout(a, 0)
        },
        Ua = function (a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Va = function (a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Za = function (a) {
            var b = C.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        $a = function (a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var g = a, h = 0; g && h <= c; h++) {
                if (d[String(g.tagName).toLowerCase()]) return g;
                g = g.parentElement
            }
            return null
        },
        ab = function (a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        };
    var bb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var cb = {},
        db = function (a, b) {
            cb[a] = cb[a] || [];
            cb[a][b] = !0
        },
        eb = function (a) {
            for (var b = [], c = cb[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        };
    var fb = /:[0-9]+$/,
        gb = function (a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var g = d[e].split("=");
                if (decodeURIComponent(g[0]).replace(/\+/g, " ") === b) {
                    var h = g.slice(1).join("=");
                    return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
                }
            }
        },
        kb = function (a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = hb(a.protocol) || hb(u.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : u.location.port) || ("http" == a.protocol ?
                    80 : "https" == a.protocol ? 443 : "")) : "host" === b &&
                (a.hostname = (a.hostname || u.location.hostname).replace(fb, "").toLowerCase());
            var g = b,
                h, k = hb(a.protocol);
            g && (g = String(g).toLowerCase());
            switch (g) {
                case "url_no_fragment":
                    h = ib(a);
                    break;
                case "protocol":
                    h = k;
                    break;
                case "host":
                    h = a.hostname.replace(fb, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(h);
                        l && l[0] && (h = h.substr(l[0].length))
                    }
                    break;
                case "port":
                    h = String(Number(a.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || db("TAGGING", 1);
                    h = "/" == a.pathname.substr(0, 1) ? a.pathname :
                        "/" + a.pathname;
                    var m = h.split("/");
                    0 <= pa(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                    h = m.join("/");
                    break;
                case "query":
                    h = a.search.replace("?", "");
                    e && (h = gb(h, e, void 0));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    h = 1 < n.length ? n[n.length - 1] : "";
                    h = h.split("/")[0];
                    break;
                case "fragment":
                    h = a.hash.replace("#", "");
                    break;
                default:
                    h = a && a.href
            }
            return h
        },
        hb = function (a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        ib = function (a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        lb = function (a) {
            var b = C.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || db("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(fb, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };
    var mb = function (a, b, c) {
            for (var d = [], e = String(b || document.cookie).split(";"), g = 0; g < e.length; g++) {
                var h = e[g].split("="),
                    k = h[0].replace(/^\s*|\s*$/g, "");
                if (k && k == a) {
                    var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                    l && c && (l = decodeURIComponent(l));
                    d.push(l)
                }
            }
            return d
        },
        pb = function (a, b, c, d) {
            var e = nb(a, d);
            if (1 === e.length) return e[0].id;
            if (0 !== e.length) {
                e = ob(e, function (g) {
                    return g.Hb
                }, b);
                if (1 === e.length) return e[0].id;
                e = ob(e, function (g) {
                    return g.eb
                }, c);
                return e[0] ? e[0].id : void 0
            }
        };

    function qb(a, b, c) {
        var d = document.cookie;
        document.cookie = a;
        var e = document.cookie;
        return d != e || void 0 != c && 0 <= mb(b, e).indexOf(c)
    }
    var ub = function (a, b, c, d, e, g) {
        d = d || "auto";
        var h = {
            path: c || "/"
        };
        e && (h.expires = e);
        "none" !== d && (h.domain = d);
        var k;
        a: {
            var l = b,
                m;
            if (void 0 == l) m = a + "=deleted; expires=" + (new Date(0)).toUTCString();
            else {
                g && (l = encodeURIComponent(l));
                var n = l;
                n && 1200 < n.length && (n = n.substring(0, 1200));
                l = n;
                m = a + "=" + l
            }
            var p = void 0,
                t = void 0,
                q;
            for (q in h)
                if (h.hasOwnProperty(q)) {
                    var r = h[q];
                    if (null != r) switch (q) {
                        case "secure":
                            r && (m += "; secure");
                            break;
                        case "domain":
                            p = r;
                            break;
                        default:
                            "path" == q && (t = r), "expires" == q && r instanceof Date && (r =
                                r.toUTCString()), m += "; " + q + "=" + r
                    }
                } if ("auto" === p) {
                for (var v = rb(), w = 0; w < v.length; ++w) {
                    var y = "none" != v[w] ? v[w] : void 0;
                    if (!tb(y, t) && qb(m + (y ? "; domain=" + y : ""), a, l)) {
                        k = !0;
                        break a
                    }
                }
                k = !1
            } else p && "none" != p && (m += "; domain=" + p),
            k = !tb(p, t) && qb(m, a, l)
        }
        return k
    };

    function ob(a, b, c) {
        for (var d = [], e = [], g, h = 0; h < a.length; h++) {
            var k = a[h],
                l = b(k);
            l === c ? d.push(k) : void 0 === g || l < g ? (e = [k], g = l) : l === g && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function nb(a, b) {
        for (var c = [], d = mb(a), e = 0; e < d.length; e++) {
            var g = d[e].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), c.push({
                    id: g.join("."),
                    Hb: 1 * k[0] || 1,
                    eb: 1 * k[1] || 1
                }))
            }
        }
        return c
    }
    var vb = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        wb = /(^|\.)doubleclick\.net$/i,
        tb = function (a, b) {
            return wb.test(document.location.hostname) || "/" === b && vb.test(a)
        },
        rb = function () {
            var a = [],
                b = document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            a.push("none");
            return a
        };
    var Sb = [],
        Tb = [],
        Ub = [],
        Vb = [],
        Wb = [],
        Yb = {},
        Zb, $b, ac, bc = function (a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        cc = function (a, b) {
            var c = a["function"];
            if (!c) throw Error("Error: No function name given for function call.");
            var d = !!Yb[c],
                e = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e[d ? g : g.substr(4)] = a[g]);
            return d ? Yb[c](e) : (void 0)(c, e, b)
        },
        ec = function (a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = dc(a[e], b, c));
            return d
        },
        fc = function (a) {
            var b = a["function"];
            if (!b) throw "Error: No function name given for function call.";
            var c = Yb[b];
            return c ? c.priorityOverride || 0 : 0
        },
        dc = function (a, b, c) {
            if (na(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(dc(a[e], b, c));
                        return d;
                    case "macro":
                        var g = a[1];
                        if (c[g]) return;
                        var h = Sb[g];
                        if (!h || b.Cc(h)) return;
                        c[g] = !0;
                        try {
                            var k = ec(h, b, c);
                            k.vtp_gtmEventId = b.id;
                            d = cc(k, b);
                            ac && (d = ac.wf(d, k))
                        } catch (w) {
                            b.Ud && b.Ud(w, Number(g)), d = !1
                        }
                        c[g] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var l = 1; l < a.length; l += 2) d[dc(a[l], b, c)] = dc(a[l + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var m = !1, n = 1; n < a.length; n++) {
                            var p = dc(a[n], b, c);
                            $b && (m = m || p === $b.vb);
                            d.push(p)
                        }
                        return $b && m ? $b.zf(d) : d.join("");
                    case "escape":
                        d = dc(a[1], b, c);
                        if ($b && na(a[1]) && "macro" === a[1][0] && $b.ag(a)) return $b.lg(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) xb[a[t]] && (d = xb[a[t]](d));
                        return d;
                    case "tag":
                        var q = a[1];
                        if (!Vb[q]) throw Error("Unable to resolve tag reference " + q + ".");
                        return d = {
                            Hd: a[2],
                            index: q
                        };
                    case "zb":
                        var r = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        r["function"] = a[1];
                        var v = gc(r, b, c);
                        a[4] && (v = !v);
                        return v;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        gc = function (a, b, c) {
            try {
                return Zb(ec(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return null
        };
    var hc = function () {
        var a = function (b) {
            return {
                toString: function () {
                    return b
                }
            }
        };
        return {
            cd: a("convert_case_to"),
            dd: a("convert_false_to"),
            ed: a("convert_null_to"),
            fd: a("convert_true_to"),
            gd: a("convert_undefined_to"),
            ja: a("function"),
            Le: a("instance_name"),
            Me: a("live_only"),
            Ne: a("malware_disabled"),
            Oe: a("metadata"),
            Vg: a("original_vendor_template_id"),
            Pe: a("once_per_event"),
            wd: a("once_per_load"),
            xd: a("setup_tags"),
            yd: a("tag_id"),
            zd: a("teardown_tags")
        }
    }();
    var ic = null,
        lc = function (a) {
            function b(p) {
                for (var t = 0; t < p.length; t++) d[p[t]] = !0
            }
            var c = [],
                d = [];
            ic = jc(a);
            for (var e = 0; e < Tb.length; e++) {
                var g = Tb[e],
                    h = kc(g);
                if (h) {
                    for (var k = g.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || [])
            }
            for (var m = [], n = 0; n < Vb.length; n++) c[n] && !d[n] && (m[n] = !0);
            return m
        },
        kc = function (a) {
            for (var b = a["if"] || [], c = 0; c < b.length; c++) {
                var d = ic(b[c]);
                if (!d) return null === d ? null : !1
            }
            for (var e = a.unless || [], g = 0; g < e.length; g++) {
                var h = ic(e[g]);
                if (null === h) return null;
                if (h) return !1
            }
            return !0
        },
        jc = function (a) {
            var b = [];
            return function (c) {
                void 0 === b[c] && (b[c] = gc(Ub[c], a));
                return b[c]
            }
        };
    /*
     Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var oc, ca = "floor ceil round max min abs pow sqrt".split(" "),
        pc = "undefined" != typeof Symbol && Symbol.iterator && ca[Symbol.iterator];
    oc = pc ? pc.call(ca) : {
        next: da()
    };
    for (var qc = oc.next(); !qc.done; qc = oc.next()) Math.hasOwnProperty(qc.value);
    var Ec = {},
        Fc = null,
        Gc = Math.random();
    Ec.i = "UA-109522565-1";
    Ec.zb = "7v2";
    var Hc = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0,
            __paused: !0
        },
        Ic = "www.googletagmanager.com/gtm.js";
    Ic = "www.googletagmanager.com/gtag/js";
    var Jc = Ic,
        Kc = null,
        Lc = null,
        Mc = null,
        Nc = "//www.googletagmanager.com/a?id=" + Ec.i + "&cv=1",
        Oc = {},
        Pc = {},
        Qc = function () {
            var a = Fc.sequence || 0;
            Fc.sequence = a + 1;
            return a
        };
    var F = function (a, b, c, d) {
            return (2 === Rc() || d || "http:" != u.location.protocol ? a : b) + c
        },
        Rc = function () {
            var a = Pa(),
                b;
            if (1 === a) a: {
                var c = Jc;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, g = 1, h = C.getElementsByTagName("script"), k =
                        0; k < h.length && 100 > k; k++) {
                    var l = h[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (0 === l.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === g && 0 === l.indexOf(d) && (g = 2)
                    }
                }
                b = g
            }
            else b = a;
            return b
        };
    var Sc = function (a, b, c) {
            if (u[b.functionName]) return c.Kc && D(c.Kc), u[b.functionName];
            var d = function () {
                d.q = d.q || [];
                d.q.push(arguments)
            };
            u[b.functionName] = d;
            void 0 === u[b.Ac] && (u[b.Ac] = a);
            Oa(F("https://", "http://", b.he), c.Kc, c.gg);
            return d
        },
        Tc = {
            functionName: "_googWcmImpl",
            Ac: "_googWcmAk",
            he: "www.gstatic.com/wcm/loader.js"
        },
        Uc = {
            functionName: "_gaPhoneImpl",
            Ac: "ga_wpid",
            he: "www.gstatic.com/gaphone/loader.js"
        },
        Vc = function (a, b, c, d) {
            if (c) {
                d = d || {};
                var e = Sc(a, Tc, d),
                    g = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.cb && (g.autoreplace =
                    c);
                e(2, d.cb, g, c, 0, new Date, d.options)
            }
        };
    var Yc = function () {
            return "&tc=" + Vb.filter(function (a) {
                return a
            }).length
        },
        gd = function () {
            Zc && (u.clearTimeout(Zc), Zc = void 0);
            void 0 === $c || ad[$c] && !bd || (cd[$c] || dd.cg() || 0 >= ed-- ? (db("GTM", 1), cd[$c] = !0) : (dd.xg(),
                Ra(fd()), ad[$c] = !0, bd = ""))
        },
        fd = function () {
            var a = $c;
            if (void 0 === a) return "";
            var b = eb("GTM"),
                c = eb("TAGGING");
            return [hd, ad[a] ? "" : "&es=1", id[a], b ? "&u=" + b : "", c ? "&ut=" + c : "", Yc(), bd, "&z=0"].join(
                "")
        },
        jd = function () {
            return [Nc, "&v=3&t=t", "&pid=" + ra(), "&rv=" + Ec.zb].join("")
        },
        kd = "0.005000" >
        Math.random(),
        hd = jd(),
        ld = function () {
            hd = jd()
        },
        ad = {},
        bd = "",
        $c = void 0,
        id = {},
        cd = {},
        Zc = void 0,
        dd = function (a, b) {
            var c = 0,
                d = 0;
            return {
                cg: function () {
                    if (c < a) return !1;
                    za() - d >= b && (c = 0);
                    return c >= a
                },
                xg: function () {
                    za() - d >= b && (c = 0);
                    c++;
                    d = za()
                }
            }
        }(2, 1E3),
        ed = 1E3,
        md = function (a, b) {
            if (kd && !cd[a] && $c !== a) {
                gd();
                $c = a;
                bd = "";
                var c;
                c = 0 === b.indexOf("gtm.") ? encodeURIComponent(b) : "*";
                id[a] = "&e=" + c + "&eid=" + a;
                Zc || (Zc = u.setTimeout(gd, 500))
            }
        },
        nd = function (a, b, c) {
            if (kd && !cd[a] && b) {
                a !== $c && (gd(), $c = a);
                var d = String(b[hc.ja] || "").replace(/_/g,
                    "");
                0 === d.indexOf("cvt") && (d = "cvt");
                var e = c + d;
                bd = bd ? bd + "." + e : "&tr=" + e;
                Zc || (Zc = u.setTimeout(gd, 500));
                2022 <= fd().length && gd()
            }
        };
    var od = {},
        pd = new sa,
        qd = {},
        rd = {},
        vd = {
            name: "dataLayer",
            set: function (a, b) {
                f(sd(a, b), qd);
                td()
            },
            get: function (a) {
                return ud(a, 2)
            },
            reset: function () {
                pd = new sa;
                qd = {};
                td()
            }
        },
        ud = function (a, b) {
            if (2 != b) {
                var c = pd.get(a);
                if (kd) {
                    var d = wd(a);
                    c !== d && db("GTM", 5)
                }
                return c
            }
            return wd(a)
        },
        wd = function (a, b, c) {
            var d = a.split("."),
                e = !1,
                g = void 0;
            var h = function (k, l) {
                for (var m = 0; void 0 !== k && m < d.length; m++) {
                    if (null === k) return !1;
                    k = k[d[m]]
                }
                return void 0 !== k || 1 < m ? k : l.length ? h(xd(l.pop()), l) : yd(d)
            };
            e = !0;
            g = h(qd.eventModel, [b, c]);
            return e ? g : yd(d)
        },
        yd = function (a) {
            for (var b = qd, c = 0; c < a.length; c++) {
                if (null === b) return !1;
                if (void 0 === b) break;
                b = b[a[c]]
            }
            return b
        };
    var zd = function (a, b) {
            return wd(a, b, void 0)
        },
        xd = function (a) {
            if (a) {
                var b = yd(["gtag", "targets", a]);
                return Ja(b) ? b : void 0
            }
        },
        Ad = function (a, b) {
            function c(g) {
                g && ua(g, function (h) {
                    d[h] = null
                })
            }
            var d = {};
            c(qd);
            delete d.eventModel;
            c(xd(a));
            c(xd(b));
            c(qd.eventModel);
            var e = [];
            ua(d, function (g) {
                e.push(g)
            });
            return e
        };
    var Bd = function (a, b) {
            rd.hasOwnProperty(a) || (pd.set(a, b), f(sd(a, b), qd), td())
        },
        sd = function (a, b) {
            for (var c = {}, d = c, e = a.split("."), g = 0; g < e.length - 1; g++) d = d[e[g]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        td = function (a) {
            ua(rd, function (b, c) {
                pd.set(b, c);
                f(sd(b, void 0), qd);
                f(sd(b, c), qd);
                a && delete rd[b]
            })
        },
        Cd = function (a, b, c) {
            od[a] = od[a] || {};
            var d = 1 !== c ? wd(b) : pd.get(b);
            "array" === Ha(d) || "object" === Ha(d) ? od[a][b] = f(d) : od[a][b] = d
        },
        Dd = function (a, b) {
            if (od[a]) return od[a][b]
        };
    var Ed = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Fd = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Gd = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Hd = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Jd = function (a) {
            var b = ud("gtm.whitelist");
            b && db("GTM", 9);
            b = "google gtagfl lcl zone oid op".split(" ");
            var c = b && Fa(xa(b), Fd),
                d = ud("gtm.blacklist");
            d || (d = ud("tagTypeBlacklist")) && db("GTM", 3);
            d ? db("GTM", 8) : d = [];
            Id() && (d = xa(d), d.push("nonGooglePixels", "nonGoogleScripts"));
            0 <= pa(xa(d), "google") && db("GTM", 2);
            var e = d && Fa(xa(d), Gd),
                g = {};
            return function (h) {
                var k = h && h[hc.ja];
                if (!k || "string" != typeof k) return !0;
                k = k.replace(/^_*/, "");
                if (void 0 !== g[k]) return g[k];
                var l = Pc[k] || [],
                    m = a(k);
                if (b) {
                    var n;
                    if (n = m) a: {
                        if (0 > pa(c, k))
                            if (l && 0 < l.length)
                                for (var p = 0; p < l.length; p++) {
                                    if (0 >
                                        pa(c, l[p])) {
                                        db("GTM", 11);
                                        n = !1;
                                        break a
                                    }
                                } else {
                                    n = !1;
                                    break a
                                }
                        n = !0
                    }
                    m = n
                }
                var t = !1;
                if (d) {
                    var q = 0 <= pa(e, k);
                    if (q) t = q;
                    else {
                        var r = ta(e, l || []);
                        r && db("GTM", 10);
                        t = r
                    }
                }
                var v = !m || t;
                v || !(0 <= pa(l, "sandboxedScripts")) || c && -1 !== pa(c, "sandboxedScripts") || (v = ta(e,
                    Hd));
                return g[k] = v
            }
        },
        Id = function () {
            return Ed.test(u.location && u.location.hostname)
        };
    var Kd = {
        wf: function (a, b) {
            b[hc.cd] && "string" === typeof a && (a = 1 == b[hc.cd] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(hc.ed) && null === a && (a = b[hc.ed]);
            b.hasOwnProperty(hc.gd) && void 0 === a && (a = b[hc.gd]);
            b.hasOwnProperty(hc.fd) && !0 === a && (a = b[hc.fd]);
            b.hasOwnProperty(hc.dd) && !1 === a && (a = b[hc.dd]);
            return a
        }
    };
    var Ld = {
            active: !0,
            isWhitelisted: function () {
                return !0
            }
        },
        Md = function (a) {
            var b = Fc.zones;
            !b && a && (b = Fc.zones = a());
            return b
        };
    var Nd = !1,
        Od = 0,
        Pd = [];

    function Qd(a) {
        if (!Nd) {
            var b = C.createEventObject,
                c = "complete" == C.readyState,
                d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Nd = !0;
                for (var e = 0; e < Pd.length; e++) D(Pd[e])
            }
            Pd.push = function () {
                for (var g = 0; g < arguments.length; g++) D(arguments[g]);
                return 0
            }
        }
    }

    function Rd() {
        if (!Nd && 140 > Od) {
            Od++;
            try {
                C.documentElement.doScroll("left"), Qd()
            } catch (a) {
                u.setTimeout(Rd, 50)
            }
        }
    }
    var Sd = function (a) {
        Nd ? a() : Pd.push(a)
    };
    var Td = {},
        Ud = {},
        Vd = function (a, b, c, d) {
            if (!Ud[a] || Hc[b] || "__zone" === b) return -1;
            var e = {};
            Ja(d) && (e = f(d, e));
            e.id = c;
            e.status = "timeout";
            return Ud[a].tags.push(e) - 1
        },
        Wd = function (a, b, c, d) {
            if (Ud[a]) {
                var e = Ud[a].tags[b];
                e && (e.status = c, e.executionTime = d)
            }
        };

    function Xd(a) {
        for (var b = Td[a] || [], c = 0; c < b.length; c++) b[c]();
        Td[a] = {
            push: function (d) {
                d(Ec.i, Ud[a])
            }
        }
    }
    var $d = function (a, b, c) {
            Ud[a] = {
                tags: []
            };
            ka(b) && Yd(a, b);
            c && u.setTimeout(function () {
                return Xd(a)
            }, Number(c));
            return Zd(a)
        },
        Yd = function (a, b) {
            Td[a] = Td[a] || [];
            Td[a].push(Ba(function () {
                return D(function () {
                    b(Ec.i, Ud[a])
                })
            }))
        };

    function Zd(a) {
        var b = 0,
            c = 0,
            d = !1;
        return {
            add: function () {
                c++;
                return Ba(function () {
                    b++;
                    d && b >= c && Xd(a)
                })
            },
            cf: function () {
                d = !0;
                b >= c && Xd(a)
            }
        }
    };
    var ae = function () {
        function a(d) {
            return !ma(d) || 0 > d ? 0 : d
        }
        if (!Fc._li && u.performance && u.performance.timing) {
            var b = u.performance.timing.navigationStart,
                c = ma(vd.get("gtm.start")) ? vd.get("gtm.start") : 0;
            Fc._li = {
                cst: a(c - b),
                cbt: a(Lc - b)
            }
        }
    };
    var ee = !1,
        fe = function () {
            return u.GoogleAnalyticsObject && u[u.GoogleAnalyticsObject]
        },
        ge = !1;
    var he = function (a) {
            u.GoogleAnalyticsObject || (u.GoogleAnalyticsObject = a || "ga");
            var b = u.GoogleAnalyticsObject;
            if (u[b]) u.hasOwnProperty(b) || db("GTM", 12);
            else {
                var c = function () {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(new Date);
                u[b] = c
            }
            ae();
            return u[b]
        },
        ie = function (a, b, c, d) {
            b = String(b).replace(/\s+/g, "").split(",");
            var e = fe();
            e(a + "require", "linker");
            e(a + "linker:autoLink", b, c, d)
        };
    var ke = function () {},
        je = function () {
            return u.GoogleAnalyticsObject || "ga"
        };
    var re = function (a) {};

    function qe(a, b) {
        a.containerId = Ec.i;
        var c = {
            type: "GENERIC",
            value: a
        };
        b.length && (c.trace = b);
        return c
    };

    function se(a, b, c, d) {
        var e = Vb[a],
            g = te(a, b, c, d);
        if (!g) return null;
        var h = dc(e[hc.xd], c, []);
        if (h && h.length) {
            var k = h[0];
            g = se(k.index, {
                I: g,
                R: 1 === k.Hd ? b.terminate : g,
                terminate: b.terminate
            }, c, d)
        }
        return g
    }

    function te(a, b, c, d) {
        function e() {
            if (g[hc.Ne]) k();
            else {
                var w = ec(g, c, []),
                    y = Vd(c.id, String(g[hc.ja]), Number(g[hc.yd]), w[hc.Oe]),
                    x = !1;
                w.vtp_gtmOnSuccess = function () {
                    if (!x) {
                        x = !0;
                        var A = za() - B;
                        nd(c.id, Vb[a], "5");
                        Wd(c.id, y, "success", A);
                        h()
                    }
                };
                w.vtp_gtmOnFailure = function () {
                    if (!x) {
                        x = !0;
                        var A = za() - B;
                        nd(c.id, Vb[a], "6");
                        Wd(c.id, y, "failure", A);
                        k()
                    }
                };
                w.vtp_gtmTagId = g.tag_id;
                w.vtp_gtmEventId = c.id;
                nd(c.id, g, "1");
                var z = function (A) {
                    var E = za() - B;
                    re(A);
                    nd(c.id, g, "7");
                    Wd(c.id, y, "exception", E);
                    x || (x = !0, k())
                };
                var B = za();
                try {
                    cc(w, c)
                } catch (A) {
                    z(A)
                }
            }
        }
        var g = Vb[a],
            h = b.I,
            k = b.R,
            l = b.terminate;
        if (c.Cc(g)) return null;
        var m = dc(g[hc.zd], c, []);
        if (m && m.length) {
            var n = m[0],
                p = se(n.index, {
                    I: h,
                    R: k,
                    terminate: l
                }, c, d);
            if (!p) return null;
            h = p;
            k = 2 === n.Hd ? l : p
        }
        if (g[hc.wd] || g[hc.Pe]) {
            var t = g[hc.wd] ? Wb : c.Hg,
                q = h,
                r = k;
            if (!t[a]) {
                e = Ba(e);
                var v = ue(a, t, e);
                h = v.I;
                k = v.R
            }
            return function () {
                t[a](q, r)
            }
        }
        return e
    }

    function ue(a, b, c) {
        var d = [],
            e = [];
        b[a] = ve(d, e, c);
        return {
            I: function () {
                b[a] = we;
                for (var g = 0; g < d.length; g++) d[g]()
            },
            R: function () {
                b[a] = xe;
                for (var g = 0; g < e.length; g++) e[g]()
            }
        }
    }

    function ve(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function we(a) {
        a()
    }

    function xe(a, b) {
        b()
    };
    var Ae = function (a, b) {
        for (var c = [], d = 0; d < Vb.length; d++)
            if (a.ab[d]) {
                var e = Vb[d];
                var g = b.add();
                try {
                    var h = se(d, {
                        I: g,
                        R: g,
                        terminate: g
                    }, a, d);
                    h ? c.push({
                        me: d,
                        ae: fc(e),
                        Hf: h
                    }) : (ye(d, a), g())
                } catch (l) {
                    g()
                }
            } b.cf();
        c.sort(ze);
        for (var k = 0; k < c.length; k++) c[k].Hf();
        return 0 < c.length
    };

    function ze(a, b) {
        var c, d = b.ae,
            e = a.ae;
        c = d > e ? 1 : d < e ? -1 : 0;
        var g;
        if (0 !== c) g = c;
        else {
            var h = a.me,
                k = b.me;
            g = h > k ? 1 : h < k ? -1 : 0
        }
        return g
    }

    function ye(a, b) {
        if (!kd) return;
        var c = function (d) {
            var e = b.Cc(Vb[d]) ? "3" : "4",
                g = dc(Vb[d][hc.xd], b, []);
            g && g.length && c(g[0].index);
            nd(b.id, Vb[d], e);
            var h = dc(Vb[d][hc.zd], b, []);
            h && h.length && c(h[0].index)
        };
        c(a);
    }
    var Be = !1,
        Ce = function (a, b, c, d, e) {
            if ("gtm.js" == b) {
                if (Be) return !1;
                Be = !0
            }
            md(a, b);
            var g = $d(a, d, e);
            Cd(a, "event", 1);
            Cd(a, "ecommerce", 1);
            Cd(a, "gtm");
            var h = {
                id: a,
                name: b,
                Cc: Jd(c),
                ab: [],
                Hg: [],
                Ud: function (n) {
                    db("GTM", 6);
                    re(n)
                }
            };
            h.ab = lc(h);
            var k = Ae(h, g);
            "gtm.js" !== b && "gtm.sync" !== b || ke();
            if (!k) return k;
            for (var l = 0; l < h.ab.length; l++)
                if (h.ab[l]) {
                    var m =
                        Vb[l];
                    if (m && !Hc[String(m[hc.ja])]) return !0
                } return !1
        };
    var De = function (a, b) {
        var c = bc(a, b);
        Vb.push(c);
        return Vb.length - 1
    };
    var Ee = function (a, b, c) {
        var d = this;
        this.eventModel = a;
        this.targetConfig = b || {};
        this.globalConfig = c || {};
        this.getWithConfig = function (e) {
            if (d.eventModel.hasOwnProperty(e)) return d.eventModel[e];
            if (d.targetConfig.hasOwnProperty(e)) return d.targetConfig[e];
            if (d.globalConfig.hasOwnProperty(e)) return d.globalConfig[e]
        }
    };
    var G = {
        Yb: "event_callback",
        Ma: "event_timeout",
        T: "gtag.config",
        M: "allow_ad_personalization_signals",
        O: "cookie_expires",
        La: "cookie_update",
        wa: "session_duration"
    };
    G.Wb = "page_view", G.oe = "user_engagement", G.pe = "allow_custom_scripts", G.qe = "allow_display_features", G
        .se = "allow_enhanced_conversions", G.mb = "client_id", G.N = "cookie_domain", G.nb = "cookie_name", G.ra =
        "cookie_path", G.sa = "currency", G.ob = "custom_params", G.ve = "custom_map", G.ac = "groups", G.Na =
        "language", G.ue = "country", G.Ug = "non_interaction", G.rb = "page_location", G.sb = "page_referrer", G.sd =
        "page_title", G.Ra = "send_page_view", G.va = "send_to", G.hc = "session_engaged", G.tb = "session_id", G.ic =
        "session_number", G.Je = "tracking_id",
        G.ub = "user_properties", G.fa = "linker", G.Oa = "accept_incoming", G.B = "domains", G.Qa = "url_position",
        G.Pa = "decorate_forms", G.gc = "phone_conversion_number", G.cc = "phone_conversion_callback", G.fc =
        "phone_conversion_css_class", G.td = "phone_conversion_options", G.hd = "aw_remarketing", G.jd =
        "aw_remarketing_only", G.ia = "value", G.He = "quantity", G.ye = "affiliation", G.Ce = "tax", G.Be =
        "shipping", G.Xb = "list_name", G.rd = "checkout_step", G.qd = "checkout_option", G.ze = "coupon", G.Ae =
        "promotions", G.Sa = "transaction_id", G.X = "user_id", G.Ka =
        "conversion_linker", G.Ja = "conversion_cookie_prefix", G.P = "cookie_prefix", G.W = "items", G.nd =
        "aw_merchant_id", G.ld = "aw_feed_country", G.md = "aw_feed_language", G.kd = "discount", G.pd =
        "disable_merchant_reported_purchases", G.bc = "new_customer", G.od = "customer_lifetime_value", G.xe =
        "dc_natural_search", G.we = "dc_custom_params", G.Ke = "trip_type", G.Ge = "passengers", G.Ee = "method", G
        .Ie = "search_term", G.te = "content_type", G.Fe = "optimize_id", G.De = "experiments", G.qb =
        "google_signals", G.$b = "google_tld", G.pb = "ga_restrict_domain",
        G.Zb = "event_settings", G.ud = [G.M, G.N, G.O, G.nb, G.ra, G.P, G.La, G.ob, G.Yb, G.Zb, G.Ma, G.pb, G.qb,
            G.$b, G.ac, G.fa, G.va, G.Ra, G.wa, G.X, G.ub], G.bd = [G.va, G.hd, G.jd, G.ob, G.Ra, G.Na, G.ia, G.sa,
            G.Sa, G.X, G.Ka, G.Ja, G.P, G.rb, G.sb, G.gc, G.cc, G.fc, G.td, G.W, G.nd, G.ld, G.md, G.kd, G.pd, G.bc,
            G.od, G.M];
    var Fe = function () {
        var a = !1;
        return a
    };

    function Ge() {
        var a = Fc;
        return a.gcq = a.gcq || new He
    }
    var Ie = function (a, b) {
            Ge().register(a, b)
        },
        Je = function () {
            this.status = 1;
            this.uc = {};
            this.be = null
        },
        Ke = function (a, b, c, d, e) {
            this.type = a;
            this.Mg = b;
            this.ca = c || "";
            this.Bb = d;
            this.defer = e
        },
        He = function () {
            this.ne = {};
            this.Md = {};
            this.Wa = []
        },
        Le = function (a, b) {
            return a.ne[b] = a.ne[b] || new Je
        },
        Me = function (a, b, c, d) {
            var e = Le(a, d.ca).be;
            if (e) {
                var g = f(c),
                    h = f(Le(a, d.ca).uc),
                    k = f(a.Md),
                    l = new Ee(g, h, k);
                try {
                    e(b, d.Mg, l)
                } catch (m) {}
            }
        };
    He.prototype.register = function (a, b) {
        3 !== Le(this, a).status && (Le(this, a).be = b, Le(this, a).status = 3, this.flush())
    };
    He.prototype.push = function (a, b, c, d) {
        var e = Math.floor(za() / 1E3);
        if (c && 1 === Le(this, c).status && (Le(this, c).status = 2, this.push("require", [], c), !Fe())) {
            var g = encodeURIComponent(c);
            Oa(("http:" != u.location.protocol ? "https:" : "http:") + (
                "//www.googletagmanager.com/gtag/js?id=" + g + "&l=dataLayer&cx=c"))
        }
        this.Wa.push(new Ke(a, e, c, b, d));
        d || this.flush()
    };
    He.prototype.flush = function (a) {
        for (var b = this; this.Wa.length;) {
            var c = this.Wa[0];
            if (c.defer) c.defer = !1, this.Wa.push(c);
            else switch (c.type) {
                case "require":
                    if (3 !== Le(this, c.ca).status && !a) return;
                    break;
                case "set":
                    ua(c.Bb[0], function (e, g) {
                        b.Md[e] = g
                    });
                    break;
                case "config":
                    var d = c.Bb[0];
                    Le(this, c.ca).uc = {};
                    Me(this, G.T, d, c);
                    Le(this, c.ca).uc = d;
                    break;
                case "event":
                    Me(this, c.Bb[1], c.Bb[0], c)
            }
            this.Wa.shift()
        }
    };
    var Ne = /[A-Z]+/,
        Oe = /\s/,
        Pe = function (a) {
            if (la(a) && (a = ya(a), !Oe.test(a))) {
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ne.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e]) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            ka: d
                        }
                    }
                }
            }
        },
        Re = function (a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Pe(a[c]);
                d && (b[d.id] = d)
            }
            Qe(b);
            var e = [];
            ua(b, function (g, h) {
                e.push(h)
            });
            return e
        };

    function Qe(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.ka[1] && b.push(d.containerId)
            } for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Se = {};
    var Te = null,
        Ue = {},
        We = {},
        Xe, Ye = function (a, b) {
            var c = {
                event: a
            };
            b && (c.eventModel = f(b), b[G.Yb] && (c.eventCallback = b[G.Yb]), b[G.Ma] && (c.eventTimeout = b[G.Ma]));
            return c
        };
    var Ze = function () {
            Te = Te || !Fc.gtagRegistered;
            Fc.gtagRegistered = !0;
            return Te
        },
        $e = function (a) {
            if (void 0 === We[a.id]) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = De("gtagua", {
                            trackingId: a.id
                        });
                        break;
                    case "AW":
                        b = De("gtagaw", {
                            conversionId: a
                        });
                        break;
                    case "DC":
                        b = De("gtagfl", {
                            targetId: a.id
                        });
                        break;
                    case "GF":
                        b = De("gtaggf", {
                            conversionId: a
                        });
                        break;
                    case "G":
                        b = De("get", {
                            trackingId: a.id,
                            isAutoTag: !0
                        });
                        break;
                    case "HA":
                        b = De("gtagha", {
                            conversionId: a
                        });
                        break;
                    default:
                        return
                }
                if (!Xe) {
                    var c = bc("v", {
                        name: "send_to",
                        dataLayerVersion: 2
                    });
                    Sb.push(c);
                    Xe = ["macro", Sb.length - 1]
                }
                var d = {
                    arg0: Xe,
                    arg1: a.id,
                    ignore_case: !1
                };
                d[hc.ja] = "_lc";
                Ub.push(d);
                var e = {
                    "if": [Ub.length - 1],
                    add: [b]
                };
                e["if"] && (e.add || e.block) && Tb.push(e);
                We[a.id] = b
            }
        },
        af = function (a) {
            ua(Ue, function (b, c) {
                var d = pa(c, a);
                0 <= d && c.splice(d, 1)
            })
        },
        bf = Ba(function () {}),
        cf = function (a) {
            if (a.containerId !== Ec.i && "G" !== a.prefix) {
                var b;
                switch (a.prefix) {
                    case "UA":
                        b = 14;
                        break;
                    case "AW":
                        b = 15;
                        break;
                    case "DC":
                        b = 16;
                        break;
                    default:
                        b = 17
                }
                db("GTM", b)
            }
        };
    var df = {
            config: function (a) {
                var b = a[2] || {};
                if (2 > a.length || !la(a[1]) || !Ja(b)) return;
                var c = Pe(a[1]);
                if (!c) return;
                Ze() ? ($e(c), cf(c)) : bf();
                af(c.id);
                var d = c.id,
                    e = b[G.ac] || "default";
                e = e.toString().split(",");
                for (var g = 0; g < e.length; g++) Ue[e[g]] = Ue[e[g]] || [], Ue[e[g]].push(d);
                delete b[G.ac];
                Bd("gtag.targets." + c.id, void 0);
                Bd("gtag.targets." + c.id, f(b));
                var h = {};
                h[G.va] = c.id;
                return Ye(G.T, h);
            },
            event: function (a) {
                var b = a[1];
                if (la(b) && !(3 < a.length)) {
                    var c;
                    if (2 < a.length) {
                        if (!Ja(a[2])) return;
                        c = a[2]
                    }
                    var d = Ye(b, c);
                    var e;
                    var g = c,
                        h = ud("gtag.fields.send_to", 2);
                    la(h) || (h = G.va);
                    var k = g && g[h];
                    void 0 === k && (k = ud(h, 2), void 0 === k && (k = "default"));
                    if (la(k) || na(k)) {
                        for (var l = k.toString().replace(/\s+/g, "").split(","), m = [], n = 0; n < l.length; n++)
                            0 <= l[n].indexOf("-") ? m.push(l[n]) : m = m.concat(Ue[l[n]] || []);
                        e = Re(m)
                    } else e = void 0;
                    var p = e;
                    if (!p) return;
                    var t = Ze();
                    t || bf();
                    for (var q = [], r = 0; t && r < p.length; r++) {
                        var v = p[r];
                        cf(v);
                        q.push(v.id);
                        $e(v)
                    }
                    d.eventModel =
                        d.eventModel || {};
                    0 < p.length ? d.eventModel[G.va] = q.join() : delete d.eventModel[G.va];
                    return d
                }
            },
            js: function (a) {
                if (2 == a.length && a[1].getTime) return {
                    event: "gtm.js",
                    "gtm.start": a[1].getTime()
                }
            },
            policy: function (a) {
                if (3 === a.length) {
                    var b = a[1],
                        c = a[2];
                    Se[b] || (Se[b] = []);
                    Se[b].push(c)
                }
            },
            set: function (a) {
                var b;
                2 == a.length && Ja(a[1]) ? b = f(a[1]) : 3 == a.length && la(a[1]) && (b = {}, b[a[1]] = a[2]);
                if (b) {
                    if (Ze()) {
                        var c =
                            f(b);
                        Ge().push("set", [c])
                    }
                    b._clear = !0;
                    return b
                }
            }
        },
        ef = {
            policy: !0
        };
    var gf = function (a) {
            return ff ? C.querySelectorAll(a) : null
        },
        hf = function (a, b) {
            if (!ff) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!C.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        jf = !1;
    if (C.querySelectorAll) try {
        var kf = C.querySelectorAll(":root");
        kf && 1 == kf.length && kf[0] == C.documentElement && (jf = !0)
    } catch (a) {}
    var ff = jf;
    var rf = function (a) {
        if (qf(a)) return a;
        this.Pg = a
    };
    rf.prototype.Of = function () {
        return this.Pg
    };
    var qf = function (a) {
        return !a || "object" !== Ha(a) || Ja(a) ? !1 : "getUntrustedUpdateValue" in a
    };
    rf.prototype.getUntrustedUpdateValue = rf.prototype.Of;
    var sf = !1,
        tf = [];

    function uf() {
        if (!sf) {
            sf = !0;
            for (var a = 0; a < tf.length; a++) D(tf[a])
        }
    }
    var vf = function (a) {
        sf ? D(a) : tf.push(a)
    };
    var wf = [],
        xf = !1,
        yf = function (a) {
            return u["dataLayer"].push(a)
        },
        zf = function (a) {
            var b = Fc["dataLayer"],
                c = b ? b.subscribers : 1,
                d = 0;
            return function () {
                ++d === c && a()
            }
        },
        Bf = function (a) {
            var b = a._clear;
            ua(a, function (g, h) {
                "_clear" !== g && (b && Bd(g, void 0), Bd(g, h))
            });
            Kc || (Kc = a["gtm.start"]);
            var c = a.event;
            if (!c) return !1;
            var d = a["gtm.uniqueEventId"];
            d || (d = Qc(), a["gtm.uniqueEventId"] = d, Bd("gtm.uniqueEventId", d));
            Mc = c;
            var e = Af(a);
            Mc = null;
            switch (c) {
                case "gtm.init":
                    db("GTM", 19), e && db("GTM", 20)
            }
            return e
        };

    function Af(a) {
        var b = a.event,
            c = a["gtm.uniqueEventId"],
            d, e = Fc.zones;
        d = e ? e.checkState(Ec.i, c) : Ld;
        return d.active ? Ce(c, b, d.isWhitelisted, a.eventCallback, a.eventTimeout) ? !0 : !1 : !1
    }
    var Cf = function () {
            for (var a = !1; !xf && 0 < wf.length;) {
                xf = !0;
                delete qd.eventModel;
                td();
                var b = wf.shift();
                if (null != b) {
                    var c = qf(b);
                    if (c) {
                        var d = b;
                        b = qf(d) ? d.getUntrustedUpdateValue() : void 0;
                        for (var e = ["gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < e.length; g++) {
                            var h = e[g],
                                k = ud(h, 1);
                            if (na(k) || Ja(k)) k = f(k);
                            rd[h] = k
                        }
                    }
                    try {
                        if (ka(b)) try {
                            b.call(vd)
                        } catch (v) {} else if (na(b)) {
                            var l = b;
                            if (la(l[0])) {
                                var m =
                                    l[0].split("."),
                                    n = m.pop(),
                                    p = l.slice(1),
                                    t = ud(m.join("."), 2);
                                if (void 0 !== t && null !== t) try {
                                    t[n].apply(t, p)
                                } catch (v) {}
                            }
                        } else {
                            var q = b;
                            if (q && ("[object Arguments]" == Object.prototype.toString.call(q) || Object.prototype
                                    .hasOwnProperty.call(q, "callee"))) {
                                a: {
                                    if (b.length && la(b[0])) {
                                        var r = df[b[0]];
                                        if (r && (!c || !ef[b[0]])) {
                                            b = r(b);
                                            break a
                                        }
                                    }
                                    b = void 0
                                }
                                if (!b) {
                                    xf = !1;
                                    continue
                                }
                            }
                            a = Bf(b) || a
                        }
                    } finally {
                        c && td(!0)
                    }
                }
                xf = !1
            }
            return !a
        },
        Df = function () {
            var a = Cf();
            try {
                var b = Ec.i,
                    c = u["dataLayer"].hide;
                if (c && void 0 !== c[b] && c.end) {
                    c[b] = !1;
                    var d = !0,
                        e;
                    for (e in c)
                        if (c.hasOwnProperty(e) && !0 === c[e]) {
                            d = !1;
                            break
                        } d && (c.end(), c.end = null)
                }
            } catch (g) {}
            return a
        },
        Ef = function () {
            var a = Ma("dataLayer", []),
                b = Ma("google_tag_manager", {});
            b = b["dataLayer"] = b["dataLayer"] || {};
            Sd(function () {
                b.gtmDom || (b.gtmDom = !0, a.push({
                    event: "gtm.dom"
                }))
            });
            vf(function () {
                b.gtmLoad || (b.gtmLoad = !0, a.push({
                    event: "gtm.load"
                }))
            });
            b.subscribers = (b.subscribers ||
                0) + 1;
            var c = a.push;
            a.push = function () {
                var d;
                if (0 < Fc.SANDBOXED_JS_SEMAPHORE) {
                    d = [];
                    for (var e = 0; e < arguments.length; e++) d[e] = new rf(arguments[e])
                } else d = [].slice.call(arguments, 0);
                var g = c.apply(a, d);
                wf.push.apply(wf, d);
                if (300 < this.length)
                    for (db("GTM", 4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return Cf() && h
            };
            wf.push.apply(wf, a.slice(0));
            D(Df)
        };
    var Ff;
    var ag = {};
    ag.vb = new String("undefined");
    var bg = function (a) {
        this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === ag.vb ? b : a[d]);
            return c.join("")
        }
    };
    bg.prototype.toString = function () {
        return this.resolve("undefined")
    };
    bg.prototype.valueOf = bg.prototype.toString;
    ag.Qe = bg;
    ag.kc = {};
    ag.zf = function (a) {
        return new bg(a)
    };
    var cg = {};
    ag.yg = function (a, b) {
        var c = Qc();
        cg[c] = [a, b];
        return c
    };
    ag.Ed = function (a) {
        var b = a ? 0 : 1;
        return function (c) {
            var d = cg[c];
            if (d && "function" === typeof d[b]) d[b]();
            cg[c] = void 0
        }
    };
    ag.ag = function (a) {
        for (var b = !1, c = !1,
                d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    ag.lg = function (a) {
        if (a === ag.vb) return a;
        var b = Qc();
        ag.kc[b] = a;
        return 'google_tag_manager["' + Ec.i + '"].macro(' + b + ")"
    };
    ag.eg = function (a, b, c) {
        a instanceof ag.Qe && (a = a.resolve(ag.yg(b, c)), b = ja);
        return {
            zc: a,
            I: b
        }
    };
    var dg = function (a, b, c) {
            function d(g, h) {
                var k = g[h];
                return k
            }
            var e = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": d(a, "className"),
                "gtm.elementId": a["for"] || Ua(a, "id") || "",
                "gtm.elementTarget": a.formTarget || d(a, "target") || ""
            };
            c && (e["gtm.triggers"] = c.join(","));
            e["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || d(a,
                    "href") || a.src || a.code || a.codebase ||
                "";
            return e
        },
        eg = function (a) {
            Fc.hasOwnProperty("autoEventsSettings") || (Fc.autoEventsSettings = {});
            var b = Fc.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        fg = function (a, b, c) {
            eg(a)[b] = c
        },
        gg = function (a, b, c, d) {
            var e = eg(a),
                g = Aa(e, b, d);
            e[b] = c(g)
        },
        hg = function (a, b, c) {
            var d = eg(a);
            return Aa(d, b, c)
        };
    var ig = function () {
            for (var a = Ka.userAgent + (C.cookie || "") + (C.referrer || ""), b = a.length, c = u.history.length; 0 <
                c;) a += c-- ^ b++;
            var d = 1,
                e, g, h;
            if (a)
                for (d = 0, g = a.length - 1; 0 <= g; g--) h = a.charCodeAt(g), d = (d << 6 & 268435455) + h + (h <<
                    14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
            return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(za() / 1E3)].join(".")
        },
        lg = function (a, b, c, d) {
            var e = jg(b);
            return pb(a, e, kg(c), d)
        },
        mg = function (a, b, c, d) {
            var e = "" + jg(c),
                g = kg(d);
            1 < g && (e += "-" + g);
            return [b, e, a].join(".")
        },
        jg = function (a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        kg = function (a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var ng = ["1"],
        og = {},
        sg = function (a, b, c, d) {
            var e = pg(a);
            og[e] || qg(e, b, c) || (rg(e, ig(), b, c, d), qg(e, b, c))
        };

    function rg(a, b, c, d, e) {
        var g = mg(b, "1", d, c);
        ub(a, g, c, d, 0 == e ? void 0 : new Date(za() + 1E3 * (void 0 == e ? 7776E3 : e)))
    }

    function qg(a, b, c) {
        var d = lg(a, b, c, ng);
        d && (og[a] = d);
        return d
    }

    function pg(a) {
        return (a || "_gcl") + "_au"
    };
    var tg = function () {
        for (var a = [], b = C.cookie.split(";"), c = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, d = 0; d < b.length; d++) {
            var e = b[d].match(c);
            e && a.push({
                Wc: e[1],
                value: e[2]
            })
        }
        var g = {};
        if (!a || !a.length) return g;
        for (var h = 0; h < a.length; h++) {
            var k = a[h].value.split(".");
            "1" == k[0] && 3 == k.length && k[1] && (g[a[h].Wc] || (g[a[h].Wc] = []), g[a[h].Wc].push({
                timestamp: k[1],
                Lf: k[2]
            }))
        }
        return g
    };

    function ug() {
        for (var a = vg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function wg() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var vg, xg, yg = function (a) {
            vg = vg || wg();
            xg = xg || ug();
            for (var b = [], c = 0; c < a.length; c += 3) {
                var d = c + 1 < a.length,
                    e = c + 2 < a.length,
                    g = a.charCodeAt(c),
                    h = d ? a.charCodeAt(c + 1) : 0,
                    k = e ? a.charCodeAt(c + 2) : 0,
                    l = g >> 2,
                    m = (g & 3) << 4 | h >> 4,
                    n = (h & 15) << 2 | k >> 6,
                    p = k & 63;
                e || (p = 64, d || (n = 64));
                b.push(vg[l], vg[m], vg[n], vg[p])
            }
            return b.join("")
        },
        zg = function (a) {
            function b(l) {
                for (; d < a.length;) {
                    var m = a.charAt(d++),
                        n = xg[m];
                    if (null != n) return n;
                    if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
                }
                return l
            }
            vg = vg || wg();
            xg = xg ||
                ug();
            for (var c = "", d = 0;;) {
                var e = b(-1),
                    g = b(0),
                    h = b(64),
                    k = b(64);
                if (64 === k && -1 === e) return c;
                c += String.fromCharCode(e << 2 | g >> 4);
                64 != h && (c += String.fromCharCode(g << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h <<
                    6 & 192 | k)))
            }
        };
    var Ag;

    function Bg(a, b) {
        if (!a || b === C.location.hostname) return !1;
        for (var c = 0; c < a.length; c++)
            if (a[c] instanceof RegExp) {
                if (a[c].test(b)) return !0
            } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }
    var Fg = function () {
            var a = Cg,
                b = Dg,
                c = Eg(),
                d = function (h) {
                    a(h.target || h.srcElement || {})
                },
                e = function (h) {
                    b(h.target || h.srcElement || {})
                };
            if (!c.init) {
                Sa(C, "mousedown", d);
                Sa(C, "keyup", d);
                Sa(C, "submit", e);
                var g = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function () {
                    b(this);
                    g.call(this)
                };
                c.init = !0
            }
        },
        Eg = function () {
            var a = Ma("google_tag_data", {}),
                b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            }, a.gl = b);
            return b
        };
    var Gg = /(.*?)\*(.*?)\*(.*)/,
        Hg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ig = /^(?:www\.|m\.|amp\.)+/,
        Jg = /([^?#]+)(\?[^#]*)?(#.*)?/,
        Kg = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        Mg = function (a) {
            var b = [],
                c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(
                        yg(String(d))))
                } var e = b.join("*");
            return ["1", Lg(e), e].join("*")
        },
        Lg = function (a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage ||
window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
                d;
            if (!(d = Ag)) {
                for (var e = Array(256), g = 0; 256 > g; g++) {
                    for (var h = g, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[g] = h
                }
                d = e
            }
            Ag = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Ag[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        },
        Og = function () {
            return function (a) {
                var b = lb(u.location.href),
                    c = b.search.replace("?", ""),
                    d = gb(c, "_gl", !0) || "";
                a.query = Ng(d) || {};
                var e = kb(b, "fragment").match(Kg);
                a.fragment = Ng(e && e[3] ||
                    "") || {}
            }
        },
        Pg = function () {
            var a = Og(),
                b = Eg();
            b.data || (b.data = {
                query: {},
                fragment: {}
            }, a(b.data));
            var c = {},
                d = b.data;
            d && (Ca(c, d.query), Ca(c, d.fragment));
            return c
        },
        Ng = function (a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c;
                    a: {
                        for (var d = a, e = 0; 3 > e; ++e) {
                            var g = Gg.exec(d);
                            if (g) {
                                c = g;
                                break a
                            }
                            d = decodeURIComponent(d)
                        }
                        c = void 0
                    }
                    var h = c;
                    if (h && "1" === h[1]) {
                        var k = h[3],
                            l;
                        a: {
                            for (var m = h[2], n = 0; n < b; ++n)
                                if (m === Lg(k, n)) {
                                    l = !0;
                                    break a
                                } l = !1
                        }
                        if (l) {
                            for (var p = {}, t = k ? k.split("*") : [], q = 0; q < t.length; q += 2) p[t[q]] = zg(t[
                                q + 1]);
                            return p
                        }
                    }
                }
            } catch (r) {}
        };

    function Qg(a, b, c) {
        function d(m) {
            var n = m,
                p = Kg.exec(n),
                t = n;
            if (p) {
                var q = p[2],
                    r = p[4];
                t = p[1];
                r && (t = t + q + r)
            }
            m = t;
            var v = m.charAt(m.length - 1);
            m && "&" !== v && (m += "&");
            return m + l
        }
        c = void 0 === c ? !1 : c;
        var e = Jg.exec(b);
        if (!e) return "";
        var g = e[1],
            h = e[2] || "",
            k = e[3] || "",
            l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + g + h + k
    }

    function Rg(a, b, c) {
        for (var d = {}, e = {}, g = Eg().decorators, h = 0; h < g.length; ++h) {
            var k = g[h];
            (!c || k.forms) && Bg(k.domains, b) && (k.fragment ? Ca(e, k.callback()) : Ca(d, k.callback()))
        }
        if (Ea(d)) {
            var l = Mg(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, t = 0; t < n.length; t++) {
                            var q = n[t];
                            if ("_gl" === q.name) {
                                q.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var r = C.createElement("input");
                            r.setAttribute("type", "hidden");
                            r.setAttribute("name", "_gl");
                            r.setAttribute("value",
                                l);
                            a.appendChild(r)
                        }
                    } else if ("post" === m) {
                        var v = Qg(l, a.action);
                        bb.test(v) && (a.action = v)
                    }
                }
            } else Sg(l, a, !1)
        }
        if (!c && Ea(e)) {
            var w = Mg(e);
            Sg(w, a, !0)
        }
    }

    function Sg(a, b, c) {
        if (b.href) {
            var d = Qg(a, b.href, void 0 === c ? !1 : c);
            bb.test(d) && (b.href = d)
        }
    }
    var Cg = function (a) {
            try {
                var b;
                a: {
                    for (var c = a, d = 100; c && 0 < d;) {
                        if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                            b = c;
                            break a
                        }
                        c = c.parentNode;
                        d--
                    }
                    b = null
                }
                var e = b;
                if (e) {
                    var g = e.protocol;
                    "http:" !== g && "https:" !== g || Rg(e, e.hostname, !1)
                }
            } catch (h) {}
        },
        Dg = function (a) {
            try {
                if (a.action) {
                    var b = kb(lb(a.action), "host");
                    Rg(a, b, !0)
                }
            } catch (c) {}
        },
        Tg = function (a, b, c, d) {
            Fg();
            var e = {
                callback: a,
                domains: b,
                fragment: "fragment" === c,
                forms: !!d
            };
            Eg().decorators.push(e)
        },
        Ug = function () {
            var a = C.location.hostname,
                b = Hg.exec(C.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var g = c.split("/"),
                    h = g[1];
                e = "s" === h ? decodeURIComponent(g[2]) : decodeURIComponent(h)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            return a.replace(Ig, "") === e.replace(Ig, "")
        },
        Vg = function (a, b) {
            return !1 === a ? !1 : a || b || Ug()
        };
    var Wg = {};
    var Xg = /^\w+$/,
        Yg = /^[\w-]+$/,
        Zg = /^~?[\w-]+$/,
        $g = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha"
        };

    function ah(a) {
        return a && "string" == typeof a && a.match(Xg) ? a : "_gcl"
    }
    var ch = function () {
        var a = lb(u.location.href),
            b = kb(a, "query", !1, void 0, "gclid"),
            c = kb(a, "query", !1, void 0, "gclsrc"),
            d = kb(a, "query", !1, void 0, "dclid");
        if (!b || !c) {
            var e = a.hash.replace("#", "");
            b = b || gb(e, "gclid", void 0);
            c = c || gb(e, "gclsrc", void 0)
        }
        return bh(b, c, d)
    };

    function bh(a, b, c) {
        var d = {},
            e = function (g, h) {
                d[h] || (d[h] = []);
                d[h].push(g)
            };
        if (void 0 !== a && a.match(Yg)) switch (b) {
            case void 0:
                e(a, "aw");
                break;
            case "aw.ds":
                e(a, "aw");
                e(a, "dc");
                break;
            case "ds":
                e(a, "dc");
                break;
            case "3p.ds":
                (void 0 == Wg.gtm_3pds ? 0 : Wg.gtm_3pds) && e(a, "dc");
                break;
            case "gf":
                e(a, "gf");
                break;
            case "ha":
                e(a, "ha")
        }
        c && e(c, "dc");
        return d
    }

    function dh(a, b, c) {
        function d(p, t) {
            var q = eh(p, e);
            q && ub(q, t, h, g, l, !0)
        }
        b = b || {};
        var e = ah(b.prefix),
            g = b.domain || "auto",
            h = b.path || "/",
            k = void 0 == b.Vd ? 7776E3 : b.Vd;
        c = c || za();
        var l = 0 == k ? void 0 : new Date(c + 1E3 * k),
            m = Math.round(c / 1E3),
            n = function (p) {
                return ["GCL", m, p].join(".")
            };
        a.aw && (!0 === b.vh ? d("aw", n("~" + a.aw[0])) : d("aw", n(a.aw[0])));
        a.dc && d("dc", n(a.dc[0]));
        a.gf && d("gf", n(a.gf[0]));
        a.ha && d("ha", n(a.ha[0]))
    }
    var eh = function (a, b) {
            var c = $g[a];
            if (void 0 !== c) return b + c
        },
        fh = function (a) {
            var b = a.split(".");
            return 3 !== b.length || "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
        };

    function gh(a) {
        var b = a.split(".");
        if (3 == b.length && "GCL" == b[0] && b[1]) return b[2]
    }
    var hh = function (a, b, c, d, e) {
            if (na(b)) {
                var g = ah(e);
                Tg(function () {
                    for (var h = {}, k = 0; k < a.length; ++k) {
                        var l = eh(a[k], g);
                        if (l) {
                            var m = mb(l, C.cookie);
                            m.length && (h[l] = m.sort()[m.length - 1])
                        }
                    }
                    return h
                }, b, c, d)
            }
        },
        ih = function (a) {
            return a.filter(function (b) {
                return Zg.test(b)
            })
        },
        jh = function (a) {
            for (var b = ["aw", "dc"], c = ah(a && a.prefix), d = {}, e = 0; e < b.length; e++) $g[b[e]] && (d[b[e]] =
                $g[b[e]]);
            ua(d, function (g, h) {
                var k = mb(c + h, C.cookie);
                if (k.length) {
                    var l = k[0],
                        m = fh(l),
                        n = {};
                    n[g] = [gh(l)];
                    dh(n, a, m)
                }
            })
        };
    var kh = /^\d+\.fls\.doubleclick\.net$/;

    function lh(a) {
        var b = lb(u.location.href),
            c = kb(b, "host", !1);
        if (c && c.match(kh)) {
            var d = kb(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    function mh(a, b) {
        if ("aw" == a || "dc" == a) {
            var c = lh("gcl" + a);
            if (c) return c.split(".")
        }
        var d = ah(b);
        if ("_gcl" == d) {
            var e;
            e = ch()[a] || [];
            if (0 < e.length) return e
        }
        var g = eh(a, d),
            h;
        if (g) {
            var k = [];
            if (C.cookie) {
                var l = mb(g, C.cookie);
                if (l && 0 != l.length) {
                    for (var m = 0; m < l.length; m++) {
                        var n = gh(l[m]);
                        n && -1 === pa(k, n) && k.push(n)
                    }
                    h = ih(k)
                } else h = k
            } else h = k
        } else h = [];
        return h
    }
    var nh = function () {
            var a = lh("gac");
            if (a) return decodeURIComponent(a);
            var b = tg(),
                c = [];
            ua(b, function (d, e) {
                for (var g = [], h = 0; h < e.length; h++) g.push(e[h].Lf);
                g = ih(g);
                g.length && c.push(d + ":" + g.join(","))
            });
            return c.join(";")
        },
        oh = function (a, b, c, d, e) {
            sg(b, c, d, e);
            var g = og[pg(b)],
                h = ch().dc || [],
                k = !1;
            if (g && 0 < h.length) {
                var l = Fc.joined_au = Fc.joined_au || {},
                    m = b || "_gcl";
                if (!l[m])
                    for (var n = 0; n < h.length; n++) {
                        var p = "http://ad.doubleclick.net/ddm/regclk",
                            t = p = p + "?gclid=" + h[n] + "&auiddc=" + g;
                        Ka.sendBeacon && Ka.sendBeacon(t) || Ra(t);
                        k = l[m] = !0
                    }
            }
            null == a && (a = k);
            if (a && g) {
                var q = pg(b),
                    r = og[q];
                r && rg(q, r, c, d, e)
            }
        };
    var ph;
    if (3 === Ec.zb.length) ph = "g";
    else {
        var rh = "G";
        rh = "g";
        ph = rh
    }
    var sh = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: ph,
            OPT: "o"
        },
        th = function (a) {
            var b = Ec.i.split("-"),
                c = b[0].toUpperCase(),
                d = sh[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                g;
            if (3 === Ec.zb.length) {
                var h = void 0;
                h = h || (Fe() ? "s" : "o");
                g = "2" + (h || "w")
            } else g =
                "";
            return g + d + Ec.zb + e
        };
    var uh = function (a) {
            return !(void 0 === a || null === a || 0 === (a + "").length)
        },
        vh = function (a, b) {
            var c;
            if (2 === b.L) return a("ord", ra(1E11, 1E13)), !0;
            if (3 === b.L) return a("ord", "1"), a("num", ra(1E11, 1E13)), !0;
            if (4 === b.L) return uh(b.sessionId) && a("ord", b.sessionId), !0;
            if (5 === b.L) c = "1";
            else if (6 === b.L) c = b.Rc;
            else return !1;
            uh(c) && a("qty", c);
            uh(b.Db) && a("cost", b.Db);
            uh(b.transactionId) && a("ord", b.transactionId);
            return !0
        },
        wh = encodeURIComponent,
        xh = function (a, b) {
            function c(n, p, t) {
                g.hasOwnProperty(n) || (p += "", e += ";" + n + "=" +
                    (t ? p : wh(p)))
            }
            var d = a.wc,
                e = a.protocol;
            e += a.Ob ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
            e += ";src=" + wh(d) + (";type=" + wh(a.yc)) + (";cat=" + wh(a.Va));
            var g = a.Bf || {};
            ua(g, function (n, p) {
                e += ";" + wh(n) + "=" + wh(p + "")
            });
            if (vh(c, a)) {
                uh(a.Ub) && c("u", a.Ub);
                uh(a.Tb) && c("tran", a.Tb);
                c("gtm", th());
                !1 === a.Ze && c("npa", "1");
                if (a.vc) {
                    var h = mh("dc", a.za);
                    h && h.length && c("gcldc", h.join("."));
                    var k = mh("aw", a.za);
                    k && k.length && c("gclaw", k.join("."));
                    var l = nh();
                    l && c("gac", l);
                    sg(a.za, void 0, a.xf, a.yf);
                    var m = og[pg(a.za)];
                    m && c("auiddc", m)
                }
                uh(a.Nc) && c("prd", a.Nc, !0);
                ua(a.Yc, function (n, p) {
                    c(n, p)
                });
                e += b || "";
                uh(a.Mb) && c("~oref", a.Mb);
                a.Ob ? Qa(e + "?", a.I) : Ra(e + "?", a.I, a.R)
            } else D(a.R)
        };
    var yh = ["input", "select", "textarea"],
        zh = ["button", "hidden", "image", "reset", "submit"],
        Ah = function (a) {
            var b = a.tagName.toLowerCase();
            return !qa(yh, function (c) {
                return c === b
            }) || "input" === b && qa(zh, function (c) {
                return c === a.type.toLowerCase()
            }) ? !1 : !0
        },
        Bh = function (a) {
            return a.form ? a.form.tagName ? a.form : C.getElementById(a.form) : $a(a, ["form"], 100)
        },
        Ch = function (a, b, c) {
            if (!a.elements) return 0;
            for (var d = b.getAttribute(c), e = 0, g = 1; e < a.elements.length; e++) {
                var h = a.elements[e];
                if (Ah(h)) {
                    if (h.getAttribute(c) === d) return g;
                    g++
                }
            }
            return 0
        };
    var Eh = function (a) {
            var b = "/pagead/conversion/" + Dh(a.conversion_id) + "/?",
                c = Dh(JSON.stringify(a.conversion_data)),
                d = "https://www.googletraveladservices.com/travel/flights/clk" + b + "conversion_data=" + c;
            if (a.conversionLinkerEnabled) {
                var e = mh("gf", a.cookiePrefix);
                if (e && e.length)
                    for (var g = 0; g < e.length; g++) d += "&gclgf=" + Dh(e[g])
            }
            Ra(d, a.onSuccess, a.onFailure)
        },
        Dh = function (a) {
            return null === a || void 0 === a || 0 === String(a).length ? "" : encodeURIComponent(String(a))
        };
    var Fh = !!u.MutationObserver,
        Gh = void 0,
        Hh = function (a) {
            if (!Gh) {
                var b = function () {
                    var c = C.body;
                    if (c)
                        if (Fh)(new MutationObserver(function () {
                            for (var e = 0; e < Gh.length; e++) D(Gh[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Sa(c, "DOMNodeInserted", function () {
                                d || (d = !0, D(function () {
                                    d = !1;
                                    for (var e = 0; e < Gh.length; e++) D(Gh[e])
                                }))
                            })
                        }
                };
                Gh = [];
                C.body ? b() : D(b)
            }
            Gh.push(a)
        };
    var ii = u.clearTimeout,
        ji = u.setTimeout,
        M = function (a, b, c) {
            if (Fe()) {
                b && D(b)
            } else return Oa(a, b, c)
        },
        ki = function () {
            return new Date
        },
        li = function () {
            return u.location.href
        },
        mi = function (a) {
            return kb(lb(a), "fragment")
        },
        ni = function (a) {
            return ib(lb(a))
        },
        oi = null;
    var pi = function (a, b) {
            return ud(a, b || 2)
        },
        qi = function (a, b, c) {
            b && (a.eventCallback = b, c && (a.eventTimeout = c));
            return yf(a)
        },
        ri = function (a, b) {
            u[a] = b
        },
        N = function (a, b, c) {
            b && (void 0 === u[a] || c && !u[a]) && (u[a] = b);
            return u[a]
        },
        si = function (a, b, c) {
            return mb(a, b, void 0 === c ? !0 : !!c)
        },
        ti = function (a, b, c, d) {
            var e = {
                    prefix: a,
                    path: b,
                    domain: c,
                    Vd: d
                },
                g = ch();
            dh(g, e);
            jh(e)
        },
        ui = function (a, b, c, d, e) {
            for (var g = Pg(), h = ah(b), k = 0; k < a.length; ++k) {
                var l = a[k];
                if (void 0 !== $g[l]) {
                    var m = eh(l, h),
                        n = g[m];
                    if (n) {
                        var p = Math.min(fh(n), za()),
                            t;
                        b: {
                            for (var q = p, r = mb(m, C.cookie), v = 0; v < r.length; ++v)
                                if (fh(r[v]) > q) {
                                    t = !0;
                                    break b
                                } t = !1
                        }
                        t || ub(m, n, c, d, 0 == e ? void 0 : new Date(p + 1E3 * (null == e ? 7776E3 : e)), !0)
                    }
                }
            }
            var w = {
                prefix: b,
                path: c,
                domain: d
            };
            dh(bh(g.gclid, g.gclsrc), w);
        },
        vi = function (a, b, c, d, e) {
            hh(a, b, c, d, e);
        },
        wi = function (a, b) {
            if (Fe()) {
                b && D(b)
            } else Qa(a, b)
        },
        xi = function (a) {
            return !!hg(a, "init", !1)
        },
        yi = function (a) {
            fg(a, "init", !0)
        },
        zi = function (a, b, c) {
            var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : Jc;
            d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
            b && ua(b, function (e, g) {
                g && (d += "&" + e + "=" + encodeURIComponent(g))
            });
            M(F("https://", "http://", d))
        },
        Ai = function (a, b) {
            var c = a[b];
            return c
        };
    var Bi = function (a, b, c, d, e, g) {
        var h = {
            config: a,
            gtm: th()
        };
        c && (sg(d, void 0, e, g), h.auiddc = og[pg(d)]);
        b && (h.loadInsecure = b);
        N("__dc_ns_processor", []).push(h);
        M((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
    };
    var Ci = ag.eg;
    var Di = new sa,
        Ei = function (a, b) {
            function c(h) {
                var k = lb(h),
                    l = kb(k, "protocol"),
                    m = kb(k, "host", !0),
                    n = kb(k, "port"),
                    p = kb(k, "path").toLowerCase().replace(/\/$/, "");
                if (void 0 === l || "http" == l && "80" == n || "https" == l && "443" == n) l = "web", n =
                    "default";
                return [l, m, n, p]
            }
            for (var d = c(String(a)), e = c(String(b)), g = 0; g < d.length; g++)
                if (d[g] !== e[g]) return !1;
            return !0
        },
        Fi = function (a) {
            var b = a.arg0,
                c = a.arg1;
            if (a.any_of && na(c)) {
                for (var d = 0; d < c.length; d++)
                    if (Fi({
                            "function": a["function"],
                            arg0: b,
                            arg1: c[d]
                        })) return !0;
                return !1
            }
            switch (a["function"]) {
                case "_cn":
                    return 0 <=
                        String(b).indexOf(String(c));
                case "_css":
                    var e;
                    a: {
                        if (b) {
                            var g = ["matches", "webkitMatchesSelector", "mozMatchesSelector",
                                "msMatchesSelector", "oMatchesSelector"];
                            try {
                                for (var h = 0; h < g.length; h++)
                                    if (b[g[h]]) {
                                        e = b[g[h]](c);
                                        break a
                                    }
                            } catch (v) {}
                        }
                        e = !1
                    }
                    return e;
                case "_ew":
                    var k, l;
                    k = String(b);
                    l = String(c);
                    var m = k.length - l.length;
                    return 0 <= m && k.indexOf(l, m) == m;
                case "_eq":
                    return String(b) == String(c);
                case "_ge":
                    return Number(b) >= Number(c);
                case "_gt":
                    return Number(b) > Number(c);
                case "_lc":
                    var n;
                    n = String(b).split(",");
                    return 0 <= pa(n, String(c));
                case "_le":
                    return Number(b) <= Number(c);
                case "_lt":
                    return Number(b) < Number(c);
                case "_re":
                    var p;
                    var t = a.ignore_case ? "i" : void 0;
                    try {
                        var q = String(c) + t,
                            r = Di.get(q);
                        r || (r = new RegExp(c, t), Di.set(q, r));
                        p = r.test(b)
                    } catch (v) {
                        p = !1
                    }
                    return p;
                case "_sw":
                    return 0 == String(b).indexOf(String(c));
                case "_um":
                    return Ei(b, c)
            }
            return !1
        };
    var Hi = function (a, b) {
        var c = function () {};
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Ii = {},
        Ji = encodeURI,
        Y = encodeURIComponent,
        Ki = Ra;
    var Li = function (a, b) {
        if (!a) return !1;
        var c = kb(lb(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var g = c.length - e.length;
                0 < g && "." != e.charAt(0) && (g--, e = "." + e);
                if (0 <= g && c.indexOf(e, g) == g) return !0
            }
        }
        return !1
    };
    var Mi = function (a, b, c) {
        for (var d = {}, e = !1, g = 0; a && g < a.length; g++) a[g] && a[g].hasOwnProperty(b) && a[g].hasOwnProperty(
            c) && (d[a[g][b]] = a[g][c], e = !0);
        return e ? d : null
    };
    Ii.bg = function () {
        var a = !1;
        return a
    };
    var lj = function () {
        var a = u.gaGlobal = u.gaGlobal || {};
        a.hid = a.hid || ra();
        return a.hid
    };
    var Cj = function (a, b, c, d) {
            this.n = a;
            this.t = b;
            this.p = c;
            this.d = d
        },
        Dj = function () {
            this.c = 1;
            this.e = [];
            this.p2 = this.p = null
        };

    function Ej(a) {
        var b = Fc,
            c = b.gss = b.gss || {};
        return c[a] = c[a] || new Dj
    }
    var Fj = function (a) {
            if (Ej(a).p && !Ej(a).p2) {
                var b = Ej(a).p;
                Ej(a).p2 = function (c, d, e) {
                    b(c, d, e.eventModel)
                }
            }
            return Ej(a).p2
        },
        Gj = function (a, b) {
            Ej(a).p2 = b;
            Ej(a).p = function (c, d, e) {
                return b(c, d, new Ee(e))
            }
        },
        Hj = function (a) {
            var b = Ej(a),
                c = Fj(a);
            if (c) {
                var d = b.e,
                    e = [];
                b.e = [];
                var g = function (h) {
                    for (var k = 0; k < h.length; k++) try {
                        var l = h[k];
                        l.d ? (l.d = !1, e.push(l)) : c(l.n, l.t, new Ee(l.p))
                    } catch (m) {}
                };
                g(d);
                g(e)
            }
        };
    var ak = window,
        bk = document,
        ck = function (a) {
            var b = ak._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === ak["ga-disable-" + a]) return !0;
            try {
                var c = ak.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (g) {}
            for (var d = mb("AMP_TOKEN", bk.cookie, !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return bk.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var hk = !1;
    hk = !0;
    var jk = function (a, b, c) {
            if (hk) Ge().push("event", [c, b], a, void 0);
            else {
                ik(a);
                var d = Math.floor(za() / 1E3);
                Ej(a).e.push(new Cj(b, d, c, void 0));
                Hj(a)
            }
        },
        kk = function (a, b, c) {
            if (hk) Ge().push("event", [c, b], a, !0);
            else {
                ik(a);
                var d = Math.floor(za() / 1E3);
                Ej(a).e.push(new Cj(b, d, c, !0))
            }
        },
        ik = function (a) {
            if (1 === Ej(a).c && (Ej(a).c = 2, !Fe())) {
                var b = encodeURIComponent(a);
                Oa(("http:" != u.location.protocol ? "https:" : "http:") + (
                    "//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
            }
        },
        mk = function (a, b) {},
        lk = function (a, b) {},
        nk = function (a) {
            return "_" === a.charAt(0)
        },
        ok = function (a) {
            ua(a, function (c) {
                nk(c) &&
                    delete a[c]
            });
            var b = a[G.ub] || {};
            ua(b, function (c) {
                nk(c) && delete b[c]
            })
        };
    var Z = {
        a: {}
    };

    Z.a.gtagha = ["google"],
        function () {
            function a(h) {
                function k(m, n) {
                    void 0 !== n && l.push(m + "=" + n)
                }
                if (void 0 === h) return "";
                var l = [];
                k("hct_base_price", h.Nd);
                k("hct_booking_xref", h.Od);
                k("hct_checkin_date", h.Rf);
                k("hct_checkout_date", h.Sf);
                k("hct_currency_code", h.Tf);
                k("hct_partner_hotel_id", h.Pd);
                k("hct_total_price", h.Qd);
                return l.join(";")
            }

            function b(h, k, l, m) {
                var n = Y(h),
                    p = Y(a(k)),
                    t = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + n + "/?data=" + p;
                l && (t += mh("ha", m).map(function (q) {
                    return "&gclha=" +
                        Y(q)
                }).join(""));
                return t
            }

            function c(h, k, l, m, n, p) {
                /^\d+$/.test(h) ? Ki(b(h, k, l, m), n, p) : D(p)
            }

            function d(h, k, l, m) {
                var n = {};
                la(h) ? n.Od = h : "number" === typeof h && (n.Od = String(h));
                la(l) && (n.Tf = l);
                la(k) ? n.Qd = n.Nd = k : "number" === typeof k && (n.Qd = n.Nd = String(k));
                if (!na(m) || 0 == m.length) return n;
                var p = m[0];
                if (!Ja(p)) return n;
                la(p.id) ? n.Pd = p.id : "number" === typeof p.id && (n.Pd = String(p.id));
                la(p.start_date) && (n.Rf = p.start_date);
                la(p.end_date) && (n.Sf = p.end_date);
                return n
            }

            function e(h) {
                var k = Mc,
                    l = h.vtp_gtmOnSuccess,
                    m = h.vtp_gtmOnFailure,
                    n = h.vtp_conversionId,
                    p = n.containerId,
                    t = function (z) {
                        return wd(z, p, n.id)
                    },
                    q = !1 !== t(G.Ka),
                    r = t(G.Ja) || t(G.P),
                    v = t(G.N),
                    w = t(G.O);
                if (k === G.T) {
                    var y = t(G.fa) || {};
                    q && (Vg(y[G.Oa], !!y[G.B]) && ui(g, r, void 0, v, w), ti(r, void 0, v, w));
                    y[G.B] && vi(g, y[G.B], y[G.Qa], !!y[G.Pa], r);
                    D(l)
                } else if ("purchase" === k) {
                    var x = d(t(G.Sa), t(G.ia), t(G.sa), t(G.W));
                    c(n.ka[0], x, q, r, l, m)
                } else D(m)
            }
            var g = ["ha"];
            Z.__gtagha = e;
            Z.__gtagha.b = "gtagha";
            Z.__gtagha.g = !0;
            Z.__gtagha.priorityOverride = 0;
        }();
    Z.a.e = ["google"],
        function () {
            (function (a) {
                Z.__e = a;
                Z.__e.b = "e";
                Z.__e.g = !0;
                Z.__e.priorityOverride = 0
            })(function (a) {
                return String(Dd(a.vtp_gtmEventId, "event"))
            })
        }();


    Z.a.v = ["google"],
        function () {
            (function (a) {
                Z.__v = a;
                Z.__v.b = "v";
                Z.__v.g = !0;
                Z.__v.priorityOverride = 0
            })(function (a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = pi(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();





    Z.a.gtagaw = ["google"],
        function () {
            var a = !1,
                b = [],
                c = ["aw", "dc"],
                d = function (m) {
                    var n = N("google_trackConversion"),
                        p = m.gtm_onFailure;
                    "function" == typeof n ? n(m) || p() : p()
                },
                e = function () {
                    for (; 0 < b.length;) d(b.shift())
                },
                g = function () {
                    a || (a = !0, ae(), M(F("https://", "http://",
                        "www.googleadservices.com/pagead/conversion_async.js"), function () {
                        e();
                        b = {
                            push: d
                        }
                    }, function () {
                        e();
                        a = !1
                    }))
                },
                h = function (m, n, p, t) {
                    if (Fe()) {} else {
                        na(n) || (n = [n]);
                        for (var q =
                                0; q < n.length; q++) 1 > q && Vc(m.ka[0], m.ka[1], n[q], {
                            cb: p,
                            options: t
                        })
                    }
                },
                k = function (m) {
                    if (m) {
                        for (var n = [], p = 0; p < m.length; ++p) {
                            var t = m[p];
                            t && n.push({
                                item_id: t.id,
                                quantity: t.quantity,
                                value: t.price,
                                start_date: t.start_date,
                                end_date: t.end_date
                            })
                        }
                        return n
                    }
                },
                l = function (m) {
                    var n = m.vtp_conversionId,
                        p = Mc,
                        t = p == G.T,
                        q = n.ka[0],
                        r = n.ka[1],
                        v = void 0 !== r,
                        w = n.containerId,
                        y = v ? n.id : void 0,
                        x = function (T) {
                            return wd(T, w, y)
                        },
                        z = !1 !== x(G.Ka),
                        B = x(G.Ja) || x(G.P),
                        A = x(G.N),
                        E = x(G.O);
                    if (t) {
                        var J = x(G.fa) || {};
                        z && (Vg(J[G.Oa], !!J[G.B]) && ui(c,
                            B, void 0, A, E), ti(B, void 0, A, E));
                        J[G.B] && vi(c, J[G.B], J[G.Qa], !!J[G.Pa], B);
                        if (v) {
                            var H = x(G.gc),
                                R = x(G.cc),
                                X = x(G.fc),
                                V = x(G.td);
                            h(n, H, R || X, V)
                        }
                    }
                    var U = !1 === x(G.hd) || !1 === x(G.Ra);
                    if (!t || !v && !U)
                        if (!0 === x(G.jd) && (v = !1), !1 !== x(G.M) || v) {
                            var K = {
                                google_conversion_id: q,
                                google_remarketing_only: !v,
                                onload_callback: m.vtp_gtmOnSuccess,
                                gtm_onFailure: m.vtp_gtmOnFailure,
                                google_conversion_format: "3",
                                google_conversion_color: "ffffff",
                                google_conversion_domain: "",
                                google_conversion_label: r,
                                google_conversion_language: x(G.Na),
                                google_conversion_value: x(G.ia),
                                google_conversion_currency: x(G.sa),
                                google_conversion_order_id: x(G.Sa),
                                google_user_id: x(G.X),
                                google_conversion_page_url: x(G.rb),
                                google_conversion_referrer_url: x(G.sb),
                                google_gtm: th()
                            };
                            Fe() && (K.opt_image_generator = function () {
                                return new Image
                            }, K.google_enable_display_cookie_match = !1);
                            !1 === x(G.M) && (K.google_allow_ad_personalization_signals = !1);
                            K.google_read_gcl_cookie_opt_out = !z;
                            z && B && (K.google_gcl_cookie_prefix = B);
                            var L = function () {
                                var T = x(G.ob),
                                    W = {
                                        event: p
                                    };
                                if (na(T)) {
                                    for (var aa =
                                            0; aa < T.length; ++aa) {
                                        var oa = T[aa],
                                            Q = x(oa);
                                        void 0 !== Q && (W[oa] = Q)
                                    }
                                    return W
                                }
                                var P = x("eventModel");
                                if (!P) return null;
                                f(P, W);
                                for (var ia = 0; ia < G.bd.length; ++ia) delete W[G.bd[ia]];
                                return W
                            }();
                            L && (K.google_custom_params = L);
                            !v && x(G.W) && (K.google_gtag_event_data = {
                                items: x(G.W),
                                value: x(G.ia)
                            });
                            if (v && "purchase" == p) {
                                K.google_conversion_merchant_id = x(G.nd);
                                K.google_basket_feed_country = x(G.ld);
                                K.google_basket_feed_language = x(G.md);
                                K.google_basket_discount = x(G.kd);
                                K.google_basket_transaction_type = p;
                                K.google_disable_merchant_reported_conversions = !0 === x(G.pd);
                                Fe() && (K.google_disable_merchant_reported_conversions = !0);
                                var I = k(x(G.W));
                                I && (K.google_conversion_items = I)
                            }
                            var O = function (T, W) {
                                void 0 != W && "" !== W && (K.google_additional_conversion_params = K.google_additional_conversion_params ||
                                    {}, K.google_additional_conversion_params[T] = W)
                            };
                            v && ("boolean" == typeof x(G.bc) && O("vdnc", x(G.bc)), O("vdltv", x(G.od)));
                            var S = !0;
                            S && b.push(K)
                        } g()
                };
            Z.__gtagaw = l;
            Z.__gtagaw.b = "gtagaw";
            Z.__gtagaw.g = !0;
            Z.__gtagaw.priorityOverride = 0
        }();


    Z.a.get = ["google"],
        function () {
            function a(e, g) {
                var h = wd(G.ob, e, void 0);
                if (na(h))
                    for (var k = 0; k < h.length; k++) {
                        var l = h[k],
                            m = wd(l, e, void 0);
                        void 0 !== m && (g[l] = m)
                    } else {
                        var n = pi("eventModel");
                        f(n, g)
                    }
            }

            function b(e, g) {
                for (var h = G.ud, k = 0; k < h.length; k++) {
                    var l = wd(h[k], e, void 0);
                    void 0 !== l && (g[h[k]] = l)
                }
            }
            var c = !0;
            c = !1;
            var d = function (e) {
                if (e.vtp_isAutoTag) {
                    var g = String(e.vtp_trackingId),
                        h = Mc || "";
                    if (nk(h)) return;
                    var k = {};
                    c ? (b(g, k), a(g, k), ok(k), jk(g, h, f(k))) : h === G.T ? (b(g, k), Ge().push("config", [
                        k], g)) : (a(g, k), ok(k), jk(g, h, k))
                } else {
                    var l = e.vtp_settings,
                        m = l.eventParameters,
                        n = l.userProperties;
                    f(Mi(e.vtp_eventParameters, "name", "value"), m);
                    f(Mi(e.vtp_userProperties, "name", "value"), n);
                    m[G.ub] = n;
                    var p = String(e.vtp_eventName),
                        t = e.vtp_allowSystemNames;
                    if (!t && nk(p)) return;
                    t || ok(m);
                    (e.vtp_deferrable ? kk : jk)(String(l.streamId), p, m)
                }
                e.vtp_gtmOnSuccess()
            };
            Z.__get = d;
            Z.__get.b = "get";
            Z.__get.g = !0;
            Z.__get.priorityOverride = 0;
        }();


    Z.a.gtagfl = [],
        function () {
            function a(e) {
                var g = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(e);
                if (g) {
                    var h = {
                        standard: 2,
                        unique: 3,
                        per_session: 4,
                        transactions: 5,
                        items_sold: 6,
                        "": 1
                    } [(g[5] || "").toLowerCase()];
                    if (h) return {
                        containerId: "DC-" + g[1],
                        ca: g[3] ? e : "",
                        Te: g[1],
                        Se: g[3] || "",
                        Va: g[4] || "",
                        L: h
                    }
                }
            }

            function b(e, g) {
                function h(t, q, r) {
                    void 0 !== r && 0 !== (r + "").length && k.push(t + q + ":" + e(r + ""))
                }
                var k = [],
                    l = g(G.W) || [];
                if (na(l))
                    for (var m = 0; m < l.length; m++) {
                        var n = l[m],
                            p = m + 1;
                        h("i", p, n.id);
                        h("p", p, n.price);
                        h("q", p, n.quantity);
                        h("c", p, g(G.ue));
                        h("l", p, g(G.Na))
                    }
                return k.join("|")
            }

            function c(e, g, h) {
                var k = /^u([1-9]\d?|100)$/,
                    l = e(G.ve) || {},
                    m = Ad(g, h),
                    n = {},
                    p = {};
                if (Ja(l))
                    for (var t in l)
                        if (l.hasOwnProperty(t) && k.test(t)) {
                            var q = l[t];
                            la(q) && (n[t] = q)
                        } for (var r = 0; r < m.length; r++) {
                    var v = m[r];
                    k.test(v) && (n[v] = v)
                }
                for (var w in n) n.hasOwnProperty(w) && (p[w] = e(n[w]));
                return p
            }
            var d = ["aw", "dc"];
            (function (e) {
                Z.__gtagfl = e;
                Z.__gtagfl.b = "gtagfl";
                Z.__gtagfl.g = !0;
                Z.__gtagfl.priorityOverride = 0
            })(function (e) {
                var g = e.vtp_gtmOnSuccess,
                    h = e.vtp_gtmOnFailure,
                    k = a(e.vtp_targetId);
                if (k) {
                    var l = function (X) {
                            return wd(X, k.containerId, k.ca || void 0)
                        },
                        m = !1 !== l(G.Ka),
                        n = l(G.Ja) || l(G.P),
                        p = l(G.N),
                        t = l(G.O),
                        q = l(G.xe),
                        r = 3 === Rc();
                    if (Mc === G.T) {
                        var v = l(G.fa) || {},
                            w = l(G.La),
                            y = void 0 === w ? !0 : !!w;
                        m && (Vg(v[G.Oa], !!v[G.B]) && ui(d, n, void 0, p, t), ti(n, void 0, p, t), oh(y, n,
                            void 0, p, t));
                        v[G.B] && vi(d, v[G.B], v[G.Qa], !!v[G.Pa], n);
                        q && q.exclusion_parameters && q.engines && Bi(q, r, m, n, p, t);
                        D(g)
                    } else {
                        var x = {},
                            z = l(G.we);
                        if (Ja(z))
                            for (var B in z)
                                if (z.hasOwnProperty(B)) {
                                    var A = z[B];
                                    void 0 !== A && null !==
                                        A && (x[B] = A)
                                } var E = "";
                        if (5 === k.L || 6 === k.L) E = b(Y, l);
                        var J = c(l, k.containerId, k.ca),
                            H = !0 === l(G.pe);
                        if (Fe() && H) {
                            H = !1
                        }
                        var R = {
                            Va: k.Va,
                            vc: m,
                            xf: p,
                            yf: t,
                            za: n,
                            Db: l(G.ia),
                            L: k.L,
                            Bf: x,
                            wc: k.Te,
                            yc: k.Se,
                            R: h,
                            I: g,
                            Mb: ni(li()),
                            Nc: E,
                            protocol: r ? "http:" : "https:",
                            Rc: l(G.He),
                            Ob: H,
                            sessionId: l(G.tb),
                            Tb: void 0,
                            transactionId: l(G.Sa),
                            Ub: void 0,
                            Yc: J,
                            Ze: !1 !== l(G.M)
                        };
                        xh(R)
                    }
                } else D(h)
            })
        }();


    Z.a.gtaggf = ["google"],
        function () {
            var a = /.*\.google\.com(:\d+)?\/booking\/flights.*/,
                b = function (c) {
                    if (c) {
                        for (var d = [], e = 0, g = 0; g < c.length; ++g) {
                            var h = c[g];
                            !h || void 0 !== h.category && "" !== h.category && "FlightSegment" !== h.category || (
                                d[e] = {
                                    cabin: h.travel_class,
                                    fare_product: h.fare_product,
                                    booking_code: h.booking_code,
                                    flight_number: h.flight_number,
                                    origin: h.origin,
                                    destination: h.destination,
                                    departure_date: h.start_date
                                }, e++)
                        }
                        return d
                    }
                };
            (function (c) {
                Z.__gtaggf = c;
                Z.__gtaggf.b = "gtaggf";
                Z.__gtaggf.g = !0;
                Z.__gtaggf.priorityOverride =
                    0
            })(function (c) {
                var d = Mc,
                    e = c.vtp_gtmOnSuccess,
                    g = c.vtp_gtmOnFailure,
                    h = c.vtp_conversionId,
                    k = h.ka[0],
                    l = h.containerId,
                    m = function (x) {
                        return wd(x, l, h.id)
                    },
                    n = !1 !== m(G.Ka),
                    p = m(G.Ja) || m(G.P),
                    t = m(G.N),
                    q = m(G.O);
                if (d === G.T) n && ti(p, void 0, t, q), D(e);
                else {
                    var r = {
                        conversion_id: k,
                        onFailure: g,
                        onSuccess: e,
                        conversionLinkerEnabled: n,
                        cookiePrefix: p
                    };
                    if ("purchase" === d) {
                        var v = a.test(li()),
                            w = {
                                partner_id: k,
                                trip_type: m(G.Ke),
                                total_price: m(G.ia),
                                currency: m(G.sa),
                                is_direct_booking: v,
                                flight_segment: b(m(G.W))
                            },
                            y = m(G.Ge);
                        y && "object" ===
                            typeof y && (w.passengers_total = y.total, w.passengers_adult = y.adult, w.passengers_child =
                                y.child, w.passengers_infant_in_seat = y.infant_in_seat, w.passengers_infant_in_lap =
                                y.infant_in_lap);
                        r.conversion_data = w
                    }
                    Eh(r)
                }
            })
        }();




    Z.a.gtagua = ["google"],
        function () {
            var a, b = {},
                c = {
                    client_id: 1,
                    client_storage: "storage",
                    cookie_name: 1,
                    cookie_domain: 1,
                    cookie_expires: 1,
                    cookie_path: 1,
                    cookie_update: 1,
                    sample_rate: 1,
                    site_speed_sample_rate: 1,
                    use_amp_client_id: 1,
                    store_gac: 1,
                    conversion_linker: "storeGac"
                },
                d = {
                    anonymize_ip: 1,
                    app_id: 1,
                    app_installer_id: 1,
                    app_name: 1,
                    app_version: 1,
                    campaign: {
                        name: "campaignName",
                        source: "campaignSource",
                        medium: "campaignMedium",
                        term: "campaignTerm",
                        content: "campaignContent",
                        id: "campaignId"
                    },
                    currency: "currencyCode",
                    description: "exDescription",
                    fatal: "exFatal",
                    language: 1,
                    non_interaction: 1,
                    page_hostname: "hostname",
                    page_referrer: "referrer",
                    page_path: "page",
                    page_location: "location",
                    page_title: "title",
                    screen_name: 1,
                    transport_type: "transport",
                    user_id: 1
                },
                e = {
                    content_id: 1,
                    event_category: 1,
                    event_action: 1,
                    event_label: 1,
                    link_attribution: 1,
                    linker: 1,
                    method: 1,
                    name: 1,
                    send_page_view: 1,
                    value: 1
                },
                g = {
                    cookie_name: 1,
                    cookie_expires: "duration",
                    levels: 1
                },
                h = {
                    anonymize_ip: 1,
                    fatal: 1,
                    non_interaction: 1,
                    use_amp_client_id: 1,
                    send_page_view: 1,
                    store_gac: 1,
                    conversion_linker: 1
                },
                k = function (v, w, y, x) {
                    if (void 0 !== y)
                        if (h[w] && (y = wa(y)), "anonymize_ip" != w || y || (y = void 0), 1 === v) x[l(w)] = y;
                        else if (la(v)) x[v] = y;
                    else
                        for (var z in v) v.hasOwnProperty(z) && void 0 !== y[z] && (x[v[z]] = y[z])
                },
                l = function (v) {
                    return v && la(v) ? v.replace(/(_[a-z])/g, function (w) {
                        return w[1].toUpperCase()
                    }) : v
                },
                m = function (v, w, y) {
                    v.hasOwnProperty(w) || (v[w] = y)
                },
                n = function (v, w, y) {
                    var x = {},
                        z = {},
                        B = {},
                        A;
                    var E = zd(G.De, v);
                    if (na(E)) {
                        for (var J = [], H = 0; H < E.length; H++) {
                            var R = E[H];
                            if (void 0 != R) {
                                var X = R.id,
                                    V = R.variant;
                                void 0 != X && void 0 !=
                                    V && J.push(String(X) + "." + String(V))
                            }
                        }
                        A = 0 < J.length ? J.join("!") : void 0
                    } else A = void 0;
                    var U = A;
                    U && m(z, "exp", U);
                    var K = zd("custom_map", v);
                    if (Ja(K))
                        for (var L in K)
                            if (K.hasOwnProperty(L) && /^(dimension|metric)\d+$/.test(L) && void 0 != K[L]) {
                                var I = zd(String(K[L]), v);
                                void 0 !== I && m(z, L, I)
                            } for (var O = Ad(v), S = 0; S < O.length; ++S) {
                        var T = O[S],
                            W = zd(T, v);
                        e.hasOwnProperty(T) ? k(e[T], T, W, x) : d.hasOwnProperty(T) ? k(d[T], T, W, z) : c.hasOwnProperty(
                                T) ? k(c[T], T, W, B) : /^(dimension|metric|content_group)\d+$/.test(T) ? k(1, T, W,
                                z) : T === G.P &&
                            0 > pa(O, G.nb) && (B.cookieName = W + "_ga")
                    }
                    var aa = String(Mc);
                    m(B, "cookieDomain", "auto");
                    m(z, "forceSSL", !0);
                    var oa = "general";
                    0 <= pa(
                        "add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option"
                        .split(" "), aa) ? oa = "ecommerce" : 0 <= pa(
                        "generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results"
                        .split(" "), aa) ? oa = "engagement" : "exception" == aa && (oa = "error");
                    m(x, "eventCategory", oa);
                    0 <= pa(["view_item",
"view_item_list", "view_promotion", "view_search_results"], aa) && m(z, "nonInteraction", !0);
                    "login" == aa || "sign_up" == aa || "share" == aa ? m(x, "eventLabel", zd(G.Ee, v)) : "search" ==
                        aa || "view_search_results" == aa ? m(x, "eventLabel", zd(G.Ie, v)) : "select_content" ==
                        aa && m(x, "eventLabel", zd(G.te, v));
                    var Q = x[G.fa] || {},
                        P = Q[G.Oa];
                    P || 0 != P && Q[G.B] ? B.allowLinker = !0 : !1 === P && m(B, "useAmpClientId", !1);
                    if (!1 === zd(G.qe, v) || !1 === zd(G.M, v)) z.allowAdFeatures = !1;
                    B.name = w;
                    z[">m"] = th(!0);
                    z.hitCallback = y;
                    var ia = zd("_x_19", v) || pi("gtag.remote_config." +
                            v + ".url"),
                        Wa = zd("_x_20", v) || pi("gtag.remote_config." + v + ".dualId");
                    ia && (B._x_19 = ia);
                    Wa && (B._x_20 = Wa);
                    x.aa = z;
                    x.Aa = B;
                    return x
                },
                p = function (v) {
                    function w(I) {
                        var O = f(I);
                        O.list = I.list_name;
                        O.listPosition = I.list_position;
                        O.position = I.list_position || I.creative_slot;
                        O.creative = I.creative_name;
                        return O
                    }

                    function y(I) {
                        for (var O = [], S = 0; I && S < I.length; S++) I[S] && O.push(w(I[S]));
                        return O.length ? O : void 0
                    }

                    function x(I) {
                        return {
                            id: B(z.Sa),
                            affiliation: B(z.ye),
                            revenue: B(z.ia),
                            tax: B(z.Ce),
                            shipping: B(z.Be),
                            coupon: B(z.ze),
                            list: B(z.Xb) || I
                        }
                    }
                    for (var z = G, B = function (I) {
                            return wd(I, v, void 0)
                        }, A = B(z.W), E, J = 0; A && J < A.length && !(E = A[J][z.Xb]); J++);
                    var H = B("custom_map");
                    if (Ja(H))
                        for (var R = 0; A && R < A.length; ++R) {
                            var X = A[R],
                                V;
                            for (V in H) H.hasOwnProperty(V) && /^(dimension|metric)\d+$/.test(V) && void 0 != H[V] &&
                                m(X, V, X[H[V]])
                        }
                    var U = null,
                        K = Mc,
                        L = B(z.Ae);
                    "purchase" == K || "refund" == K ? U = {
                        action: K,
                        Ua: x(),
                        Fa: y(A)
                    } : "add_to_cart" == K ? U = {
                        action: "add",
                        Fa: y(A)
                    } : "remove_from_cart" == K ? U = {
                        action: "remove",
                        Fa: y(A)
                    } : "view_item" == K ? U = {
                        action: "detail",
                        Ua: x(E),
                        Fa: y(A)
                    } : "view_item_list" == K ? U = {
                        action: "impressions",
                        Wf: y(A)
                    } : "view_promotion" == K ? U = {
                        action: "promo_view",
                        Oc: y(L)
                    } : "select_content" == K && L && 0 < L.length ? U = {
                        action: "promo_click",
                        Oc: y(L)
                    } : "select_content" == K ? U = {
                        action: "click",
                        Ua: {
                            list: B(z.Xb) || E
                        },
                        Fa: y(A)
                    } : "begin_checkout" == K || "checkout_progress" == K ? U = {
                        action: "checkout",
                        Fa: y(A),
                        Ua: {
                            step: "begin_checkout" == K ? 1 : B(z.rd),
                            option: B(z.qd)
                        }
                    } : "set_checkout_option" == K && (U = {
                        action: "checkout_option",
                        Ua: {
                            step: B(z.rd),
                            option: B(z.qd)
                        }
                    });
                    U && (U.ah = B(z.sa));
                    return U
                },
                t = {},
                q = function (v, w) {
                    var y = t[v];
                    t[v] = f(w);
                    if (!y) return !1;
                    for (var x in w)
                        if (w.hasOwnProperty(x) && w[x] !== y[x]) return !0;
                    for (var z in y)
                        if (y.hasOwnProperty(z) && y[z] !== w[z]) return !0;
                    return !1
                },
                r = function (v) {
                    var w = v.vtp_trackingId,
                        y = "https://www.google-analytics.com/analytics.js",
                        x = he();
                    if (ka(x)) {
                        var z = "gtag_" + w.split("-").join("_"),
                            B = function (K) {
                                var L = [].slice.call(arguments, 0);
                                L[0] = z + "." + L[0];
                                x.apply(window, L)
                            },
                            A = function () {
                                var K = function (S, T) {
                                        for (var W = 0; T && W < T.length; W++) B(S, T[W])
                                    },
                                    L = p(w);
                                if (L) {
                                    var I = L.action;
                                    if ("impressions" == I) K("ec:addImpression", L.Wf);
                                    else if ("promo_click" == I || "promo_view" == I) {
                                        var O = L.Oc;
                                        K("ec:addPromo", L.Oc);
                                        O && 0 < O.length && "promo_click" == I && B("ec:setAction", I)
                                    } else K("ec:addProduct", L.Fa), B("ec:setAction", I, L.Ua)
                                }
                            },
                            E = function () {
                                if (Fe()) {} else {
                                    var K = zd(G.Fe, w);
                                    K && (B("require", K, {
                                        dataLayer: "dataLayer"
                                    }), B("require", "render"))
                                }
                            },
                            J = function () {
                                if (Fe()) {} else {
                                    var K = zd(G.gc, w),
                                        L = zd(G.fc, w),
                                        I = zd(G.cc, w),
                                        O;
                                    O = na(K) ? K : [K];
                                    for (var S = 0; S < O.length; S++)
                                        if (5 > S) {
                                            var T = O[S],
                                                W = {
                                                    cb: I || L
                                                };
                                            if (T) {
                                                W = W || {};
                                                var aa = Sc(w, Uc, W),
                                                    oa = {};
                                                void 0 !== W.cb ? oa.receiver = W.cb : oa.replace = T;
                                                oa.ga_wpid = w;
                                                oa.destination = T;
                                                aa(2, new Date, oa)
                                            }
                                        }
                                }
                            },
                            H = n(w, z, v.vtp_gtmOnSuccess);
                        q(z, H.Aa) && (x(function () {
                            fe() && fe().remove(z)
                        }), b[z] = !1);
                        x("create", w, H.Aa);
                        (function () {
                            var K = zd("custom_map", w);
                            x(function () {
                                if (Ja(K)) {
                                    var L = H.aa,
                                        I = fe().getByName(z),
                                        O;
                                    for (O in K)
                                        if (K.hasOwnProperty(O) && /^(dimension|metric)\d+$/.test(O) &&
                                            void 0 != K[O]) {
                                            var S = I.get(l(K[O]));
                                            m(L, O, S)
                                        }
                                }
                            })
                        })();
                        (function (K) {
                            if (K) {
                                var L = {};
                                if (Ja(K))
                                    for (var I in g) g.hasOwnProperty(I) && k(g[I], I, K[I], L);
                                B("require", "linkid", L)
                            }
                        })(H.linkAttribution);
                        var R = H[G.fa];
                        if (R && R[G.B]) {
                            var X = R[G.Qa];
                            ie(z + ".", R[G.B], void 0 === X ? !!R.use_anchor :
                                "fragment" === X, !!R[G.Pa])
                        }
                        var V = function (K, L, I) {
                                I && (L = "" + L);
                                H.aa[K] = L
                            },
                            U = Mc;
                        U == G.Wb ? (E(), B("send", "pageview", H.aa)) : U == G.T ? (E(), J(), 0 != H.sendPageView &&
                                B("send", "pageview", H.aa)) : "screen_view" == U ? B("send", "screenview", H.aa) :
                            "timing_complete" == U ? (V("timingCategory", H.eventCategory, !0), V("timingVar", H.name,
                                !0), V("timingValue", va(H.value)), void 0 !== H.eventLabel && V("timingLabel",
                                H.eventLabel, !0), B("send", "timing", H.aa)) : "exception" == U ? B("send",
                                "exception", H.aa) : "optimize.callback" != U && (0 <= pa(
                                    "view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress"
                                    .split(" "),
                                    U) && (B("require", "ec", "ec.js"), A()), V("eventCategory", H.eventCategory, !
                                    0), V("eventAction", H.eventAction || U, !0), void 0 !== H.eventLabel && V(
                                    "eventLabel", H.eventLabel, !0), void 0 !== H.value && V("eventValue", va(H.value)),
                                B("send", "event", H.aa));
                        a || (a = !0, ae(), M(y, function () {
                            fe().loaded || v.vtp_gtmOnFailure()
                        }, v.vtp_gtmOnFailure))
                    } else D(v.vtp_gtmOnFailure)
                };
            Z.__gtagua = r;
            Z.__gtagua.b = "gtagua";
            Z.__gtagua.g = !0;
            Z.__gtagua.priorityOverride =
                0
        }();

    var pk = {};
    pk.macro = function (a) {
        if (ag.kc.hasOwnProperty(a)) return ag.kc[a]
    }, pk.onHtmlSuccess = ag.Ed(!0), pk.onHtmlFailure = ag.Ed(!1);
    pk.dataLayer = vd;
    pk.callback = function (a) {
        Oc.hasOwnProperty(a) && ka(Oc[a]) && Oc[a]();
        delete Oc[a]
    };
    pk.jf = function () {
        Fc[Ec.i] = pk;
        Ca(Pc, Z.a);
        $b = $b || ag;
        ac = Kd
    };
    pk.Xf = function () {
        Wg.gtm_3pds = !0;
        Fc = u.google_tag_manager = u.google_tag_manager || {};
        if (Fc[Ec.i]) {
            var a = Fc.zones;
            a && a.unregisterChild(Ec.i)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) Sb.push(c[d]);
            for (var e = b.tags || [], g = 0; g < e.length; g++) Vb.push(e[g]);
            for (var h = b.predicates || [],
                    k = 0; k < h.length; k++) Ub.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, t = 0; t < n.length; t++) p[n[t][0]] = Array.prototype.slice.call(n[
                    t], 1);
                Tb.push(p)
            }
            Yb = Z;
            Zb = Fi;
            pk.jf();
            Ef();
            Nd = !1;
            Od = 0;
            if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) Qd();
            else {
                Sa(C, "DOMContentLoaded", Qd);
                Sa(C, "readystatechange", Qd);
                if (C.createEventObject && C.documentElement.doScroll) {
                    var q = !0;
                    try {
                        q = !u.frameElement
                    } catch (y) {}
                    q && Rd()
                }
                Sa(u, "load", Qd)
            }
            sf = !1;
            "complete" === C.readyState ? uf() :
                Sa(u, "load", uf);
            a: {
                if (!kd) break a;u.setInterval(ld, 864E5);
            }
            Lc = (new Date).getTime();
        }
    };
    (0, pk.Xf)();

})()