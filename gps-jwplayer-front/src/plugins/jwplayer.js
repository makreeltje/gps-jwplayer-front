/*!
   JW Player version 8.13.8
   Copyright (c) 2020, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://ssl.p.jwpcdn.com/player/v/8.13.8/notice.txt
*/
window.jwplayer = function (e) {
    function t(t) {
        for (var n, i, o = t[0], u = t[1], a = 0, s = []; a < o.length; a++) i = o[a], r[i] && s.push(r[i][0]), r[i] = 0;
        for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (e[n] = u[n]);
        for (c && c(t); s.length;) s.shift()()
    }

    var n = {}, r = {0: 0};

    function i(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {i: t, l: !1, exports: {}};
        return e[t].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }

    i.e = function (e) {
        var t = [], n = r[e];
        if (0 !== n) if (n) t.push(n[2]); else {
            var o = new Promise((function (t, i) {
                n = r[e] = [t, i]
            }));
            t.push(n[2] = o);
            var u, a = document.createElement("script");
            a.charset = "utf-8", a.timeout = 55, i.nc && a.setAttribute("nonce", i.nc), a.src = function (e) {
                return i.p + "" + ({
                    1: "jwplayer.controls",
                    2: "jwplayer.core",
                    3: "jwplayer.core.controls",
                    4: "jwplayer.core.controls.html5",
                    5: "jwplayer.core.controls.polyfills",
                    6: "jwplayer.core.controls.polyfills.html5",
                    7: "jwplayer.vr",
                    8: "polyfills.intersection-observer",
                    9: "polyfills.webvtt",
                    10: "provider.airplay",
                    11: "provider.cast",
                    12: "provider.flash",
                    13: "provider.hlsjs",
                    14: "provider.hlsjs-progressive",
                    15: "provider.html5",
                    16: "provider.shaka",
                    17: "related",
                    18: "vttparser"
                }[e] || e) + ".js"
            }(e), u = function (t) {
                a.onerror = a.onload = null, clearTimeout(c);
                var n = r[e];
                if (0 !== n) {
                    if (n) {
                        var i = t && ("load" === t.type ? "missing" : t.type), o = t && t.target && t.target.src,
                            u = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + o + ")");
                        u.type = i, u.request = o, n[1](u)
                    }
                    r[e] = void 0
                }
            };
            var c = setTimeout((function () {
                u({type: "timeout", target: a})
            }), 55e3);
            a.onerror = a.onload = u, document.head.appendChild(a)
        }
        return Promise.all(t)
    }, i.m = e, i.c = n, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i.oe = function (e) {
        throw console.error(e), e
    };
    var o = window.webpackJsonpjwplayer = window.webpackJsonpjwplayer || [], u = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var a = 0; a < o.length; a++) t(o[a]);
    var c = u;
    return i(i.s = 73)
}([function (e, t, n) {
    "use strict";
    n.d(t, "i", (function () {
        return k
    })), n.d(t, "A", (function () {
        return x
    })), n.d(t, "F", (function () {
        return T
    })), n.d(t, "l", (function () {
        return _
    })), n.d(t, "k", (function () {
        return I
    })), n.d(t, "a", (function () {
        return L
    })), n.d(t, "b", (function () {
        return R
    })), n.d(t, "G", (function () {
        return B
    })), n.d(t, "n", (function () {
        return H
    })), n.d(t, "H", (function () {
        return W
    })), n.d(t, "e", (function () {
        return U
    })), n.d(t, "J", (function () {
        return Y
    })), n.d(t, "m", (function () {
        return J
    })), n.d(t, "h", (function () {
        return K
    })), n.d(t, "p", (function () {
        return Z
    })), n.d(t, "c", (function () {
        return G
    })), n.d(t, "C", (function () {
        return ne
    })), n.d(t, "I", (function () {
        return oe
    })), n.d(t, "q", (function () {
        return ce
    })), n.d(t, "g", (function () {
        return se
    })), n.d(t, "j", (function () {
        return le
    })), n.d(t, "D", (function () {
        return fe
    })), n.d(t, "w", (function () {
        return pe
    })), n.d(t, "t", (function () {
        return me
    })), n.d(t, "v", (function () {
        return be
    })), n.d(t, "x", (function () {
        return ye
    })), n.d(t, "s", (function () {
        return je
    })), n.d(t, "u", (function () {
        return we
    })), n.d(t, "r", (function () {
        return Oe
    })), n.d(t, "y", (function () {
        return ke
    })), n.d(t, "o", (function () {
        return xe
    })), n.d(t, "d", (function () {
        return Pe
    })), n.d(t, "E", (function () {
        return Se
    })), n.d(t, "B", (function () {
        return Te
    })), n.d(t, "z", (function () {
        return Ae
    }));
    var r = n(18), i = {}, o = Array.prototype, u = Object.prototype, a = Function.prototype, c = o.slice, s = o.concat,
        l = u.toString, f = u.hasOwnProperty, d = o.map, p = o.reduce, h = o.forEach, v = o.filter, g = o.every,
        m = o.some, b = o.indexOf, y = Array.isArray, j = Object.keys, w = a.bind, O = window.isFinite,
        k = function (e, t, n) {
            var r, o;
            if (null == e) return e;
            if (h && e.forEach === h) e.forEach(t, n); else if (e.length === +e.length) {
                for (r = 0, o = e.length; r < o; r++) if (t.call(n, e[r], r, e) === i) return
            } else {
                var u = ue(e);
                for (r = 0, o = u.length; r < o; r++) if (t.call(n, e[u[r]], u[r], e) === i) return
            }
            return e
        }, C = k, x = function (e, t, n) {
            var r = [];
            return null == e ? r : d && e.map === d ? e.map(t, n) : (k(e, (function (e, i, o) {
                r.push(t.call(n, e, i, o))
            })), r)
        }, P = x, S = "Reduce of empty array with no initial value", T = function (e, t, n, r) {
            var i = arguments.length > 2;
            if (null == e && (e = []), p && e.reduce === p) return r && (t = G(t, r)), i ? e.reduce(t, n) : e.reduce(t);
            if (k(e, (function (e, o, u) {
                i ? n = t.call(r, n, e, o, u) : (n = e, i = !0)
            })), !i) throw new TypeError(S);
            return n
        }, E = T, A = T, _ = function (e, t, n) {
            var r;
            return R(e, (function (e, i, o) {
                if (t.call(n, e, i, o)) return r = e, !0
            })), r
        }, F = _, I = function (e, t, n) {
            var r = [];
            return null == e ? r : v && e.filter === v ? e.filter(t, n) : (k(e, (function (e, i, o) {
                t.call(n, e, i, o) && r.push(e)
            })), r)
        }, M = I, L = function (e, t, n) {
            t || (t = xe);
            var r = !0;
            return null == e ? r : g && e.every === g ? e.every(t, n) : (k(e, (function (e, o, u) {
                if (!(r = r && t.call(n, e, o, u))) return i
            })), !!r)
        }, N = L, R = function (e, t, n) {
            t || (t = xe);
            var r = !1;
            return null == e ? r : m && e.some === m ? e.some(t, n) : (k(e, (function (e, o, u) {
                if (r || (r = t.call(n, e, o, u))) return i
            })), !!r)
        }, D = R, B = function (e) {
            return null == e ? 0 : e.length === +e.length ? e.length : ue(e).length
        }, z = function (e, t) {
            var n;
            return function () {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        }, q = function (e) {
            return null == e ? xe : me(e) ? e : Se(e)
        }, V = function (e) {
            return function (t, n, r) {
                var i = {};
                return n = q(n), k(t, (function (o, u) {
                    var a = n.call(r, o, u, t);
                    e(i, a, o)
                })), i
            }
        }, H = V((function (e, t, n) {
            Ce(e, t) ? e[t].push(n) : e[t] = [n]
        })), Q = V((function (e, t, n) {
            e[t] = n
        })), W = function (e, t, n, r) {
            for (var i = (n = q(n)).call(r, t), o = 0, u = e.length; o < u;) {
                var a = o + u >>> 1;
                n.call(r, e[a]) < i ? o = a + 1 : u = a
            }
            return o
        }, U = function (e, t) {
            return null != e && (e.length !== +e.length && (e = ae(e)), Z(e, t) >= 0)
        }, X = U, Y = function (e, t) {
            return I(e, Te(t))
        }, J = function (e, t) {
            return _(e, Te(t))
        }, K = function (e) {
            var t = s.apply(o, c.call(arguments, 1));
            return I(e, (function (e) {
                return !U(t, e)
            }))
        }, Z = function (e, t, n) {
            if (null == e) return -1;
            var r = 0, i = e.length;
            if (n) {
                if ("number" != typeof n) return e[r = W(e, t)] === t ? r : -1;
                r = n < 0 ? Math.max(0, i + n) : n
            }
            if (b && e.indexOf === b) return e.indexOf(t, n);
            for (; r < i; r++) if (e[r] === t) return r;
            return -1
        }, $ = function () {
        }, G = function (e, t) {
            var n, r;
            if (w && e.bind === w) return w.apply(e, c.call(arguments, 1));
            if (!me(e)) throw new TypeError;
            return n = c.call(arguments, 2), r = function () {
                if (!(this instanceof r)) return e.apply(t, n.concat(c.call(arguments)));
                $.prototype = e.prototype;
                var i = new $;
                $.prototype = null;
                var o = e.apply(i, n.concat(c.call(arguments)));
                return Object(o) === o ? o : i
            }
        }, ee = function (e) {
            var t = c.call(arguments, 1);
            return function () {
                for (var n = 0, r = t.slice(), i = 0, o = r.length; i < o; i++) Ce(r[i], "partial") && (r[i] = arguments[n++]);
                for (; n < arguments.length;) r.push(arguments[n++]);
                return e.apply(this, r)
            }
        }, te = ee(z, 2), ne = function (e, t) {
            var n = {};
            return t || (t = xe), function () {
                var r = t.apply(this, arguments);
                return Ce(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
        }, re = function (e, t) {
            var n = c.call(arguments, 2);
            return setTimeout((function () {
                return e.apply(null, n)
            }), t)
        }, ie = ee(re, {partial: ee}, 1), oe = function (e, t, n) {
            var r, i, o, u = null, a = 0;
            n || (n = {});
            var c = function () {
                a = !1 === n.leading ? 0 : Ee(), u = null, o = e.apply(r, i), r = i = null
            };
            return function () {
                a || !1 !== n.leading || (a = Ee);
                var s = t - (Ee - a);
                return r = this, i = arguments, s <= 0 ? (clearTimeout(u), u = null, a = Ee, o = e.apply(r, i), r = i = null) : u || !1 === n.trailing || (u = setTimeout(c, s)), o
            }
        }, ue = function (e) {
            if (!pe(e)) return [];
            if (j) return j(e);
            var t = [];
            for (var n in e) Ce(e, n) && t.push(n);
            return t
        }, ae = function (e) {
            for (var t = ue(e), n = ue.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
            return r
        }, ce = function (e) {
            for (var t = {}, n = ue(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
            return t
        }, se = function (e) {
            return k(c.call(arguments, 1), (function (t) {
                if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n])
            })), e
        }, le = Object.assign || function (e) {
            return k(c.call(arguments, 1), (function (t) {
                if (t) for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            })), e
        }, fe = function (e) {
            var t = {}, n = s.apply(o, c.call(arguments, 1));
            return k(n, (function (n) {
                n in e && (t[n] = e[n])
            })), t
        }, de = y || function (e) {
            return "[object Array]" == l.call(e)
        }, pe = function (e) {
            return e === Object(e)
        }, he = [];
    k(["Function", "String", "Number", "Date", "RegExp"], (function (e) {
        he[e] = function (t) {
            return l.call(t) == "[object " + e + "]"
        }
    })), he.Function = function (e) {
        return "function" == typeof e
    };
    var ve = he.Date, ge = he.RegExp, me = he.Function, be = he.Number, ye = he.String, je = function (e) {
        return O(e) && !we(parseFloat(e))
    }, we = function (e) {
        return be(e) && e != +e
    }, Oe = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" == l.call(e)
    }, ke = function (e) {
        return void 0 === e
    }, Ce = function (e, t) {
        return f.call(e, t)
    }, xe = function (e) {
        return e
    }, Pe = function (e) {
        return function () {
            return e
        }
    }, Se = function (e) {
        return function (t) {
            return t[e]
        }
    }, Te = function (e) {
        return function (t) {
            if (t === e) return !0;
            for (var n in e) if (e[n] !== t[n]) return !1;
            return !0
        }
    }, Ee = r.a, Ae = function (e) {
        return be(e) && !we(e)
    };
    t.f = {
        after: function (e, t) {
            return function () {
                if (--e < 1) return t.apply(this, arguments)
            }
        },
        all: L,
        any: R,
        before: z,
        bind: G,
        clone: function (e) {
            return pe(e) ? de(e) ? e.slice() : le({}, e) : e
        },
        collect: P,
        compact: function (e) {
            return I(e, xe)
        },
        constant: Pe,
        contains: U,
        debounce: function (e, t) {
            var n;
            return void 0 === t && (t = 100), function () {
                for (var r = this, i = arguments.length, o = new Array(i), u = 0; u < i; u++) o[u] = arguments[u];
                clearTimeout(n), n = setTimeout((function () {
                    e.apply(r, o)
                }), t)
            }
        },
        defaults: se,
        defer: ie,
        delay: re,
        detect: F,
        difference: K,
        each: k,
        every: N,
        extend: le,
        filter: I,
        find: _,
        findWhere: J,
        foldl: E,
        forEach: C,
        groupBy: H,
        has: Ce,
        identity: xe,
        include: X,
        indexBy: Q,
        indexOf: Z,
        inject: A,
        invert: ce,
        isArray: de,
        isBoolean: Oe,
        isDate: ve,
        isFinite: je,
        isFunction: me,
        isNaN: we,
        isNull: function (e) {
            return null === e
        },
        isNumber: be,
        isObject: pe,
        isRegExp: ge,
        isString: ye,
        isUndefined: ke,
        isValidNumber: Ae,
        keys: ue,
        last: function (e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : c.call(e, Math.max(e.length - t, 0))
        },
        map: x,
        matches: Te,
        max: function (e, t, n) {
            if (!t && de(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            var r = -1 / 0, i = -1 / 0;
            return k(e, (function (e, o, u) {
                var a = t ? t.call(n, e, o, u) : e;
                a > i && (r = e, i = a)
            })), r
        },
        memoize: ne,
        now: Ee,
        omit: function (e) {
            var t = {}, n = s.apply(o, c.call(arguments, 1));
            for (var r in e) U(n, r) || (t[r] = e[r]);
            return t
        },
        once: te,
        partial: ee,
        pick: fe,
        pluck: function (e, t) {
            return x(e, Se(t))
        },
        property: Se,
        propertyOf: function (e) {
            return null == e ? function () {
            } : function (t) {
                return e[t]
            }
        },
        reduce: T,
        reject: function (e, t, n) {
            return I(e, (function (e, r, i) {
                return !t.call(n, e, r, i)
            }), n)
        },
        result: function (e, t) {
            if (null != e) {
                var n = e[t];
                return me(n) ? n.call(e) : n
            }
        },
        select: M,
        size: B,
        some: D,
        sortedIndex: W,
        throttle: oe,
        where: Y,
        without: function (e) {
            return K(e, c.call(arguments, 1))
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "y", (function () {
        return i
    })), n.d(t, "x", (function () {
        return o
    })), n.d(t, "w", (function () {
        return u
    })), n.d(t, "t", (function () {
        return a
    })), n.d(t, "u", (function () {
        return c
    })), n.d(t, "a", (function () {
        return s
    })), n.d(t, "c", (function () {
        return l
    })), n.d(t, "v", (function () {
        return f
    })), n.d(t, "d", (function () {
        return d
    })), n.d(t, "h", (function () {
        return p
    })), n.d(t, "e", (function () {
        return h
    })), n.d(t, "k", (function () {
        return v
    })), n.d(t, "i", (function () {
        return g
    })), n.d(t, "j", (function () {
        return m
    })), n.d(t, "b", (function () {
        return b
    })), n.d(t, "f", (function () {
        return y
    })), n.d(t, "g", (function () {
        return j
    })), n.d(t, "o", (function () {
        return w
    })), n.d(t, "l", (function () {
        return O
    })), n.d(t, "m", (function () {
        return k
    })), n.d(t, "n", (function () {
        return C
    })), n.d(t, "p", (function () {
        return x
    })), n.d(t, "q", (function () {
        return P
    })), n.d(t, "r", (function () {
        return S
    })), n.d(t, "s", (function () {
        return T
    })), n.d(t, "A", (function () {
        return E
    })), n.d(t, "z", (function () {
        return A
    })), n.d(t, "B", (function () {
        return _
    }));
    var r = n(0), i = 1e5, o = 100001, u = 100002, a = 101e3, c = 102e3, s = 200001, l = 202e3, f = 104e3, d = 203e3,
        p = 203640, h = 204e3, v = 210001, g = 21e4, m = 214e3, b = 306e3, y = 308e3, j = 308640, w = "cantPlayVideo",
        O = "badConnection", k = "cantLoadPlayer", C = "cantPlayInBrowser", x = "liveStreamDown",
        P = "protectedContent", S = "technicalError", T = function () {
            function e(e, t, n) {
                this.code = Object(r.z)(t) ? t : 0, this.sourceError = n || null, e && (this.key = e)
            }

            return e.logMessage = function (e) {
                var t = e % 1e3, n = Math.floor((e - t) / 1e3), r = e.toString();
                return t >= 400 && t < 600 && (r = n + "400-" + n + "599"), "JW Player " + (e > 299999 && e < 4e5 ? "Warning" : "Error") + " " + e + ". For more information see https://developer.jwplayer.com/jw-player/docs/developer-guide/api/errors-reference#" + r
            }, e
        }();

    function E(e, t, n) {
        return n instanceof T && n.code ? n : new T(e, t, n)
    }

    function A(e, t) {
        var n = E(S, t, e);
        return n.code = (e && e instanceof T && e.code || 0) + t, n
    }

    function _(e) {
        var t = e.name, n = e.message;
        switch (t) {
            case"AbortError":
                return /pause/.test(n) ? 303213 : /load/.test(n) ? 303212 : 303210;
            case"NotAllowedError":
                return 303220;
            case"NotSupportedError":
                return 303230;
            default:
                return 303200
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "i", (function () {
        return o
    })), n.d(t, "e", (function () {
        return u
    })), n.d(t, "j", (function () {
        return a
    })), n.d(t, "a", (function () {
        return c
    })), n.d(t, "b", (function () {
        return s
    })), n.d(t, "g", (function () {
        return l
    })), n.d(t, "d", (function () {
        return f
    })), n.d(t, "f", (function () {
        return d
    })), n.d(t, "h", (function () {
        return p
    })), n.d(t, "c", (function () {
        return h
    }));
    var r = n(0), i = window.parseFloat;

    function o(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }

    function u(e, t, n) {
        for (e = "" + e, n = n || "0"; e.length < t;) e = n + e;
        return e
    }

    function a(e, t) {
        for (var n = e.attributes, r = 0; r < n.length; r++) if (n[r].name && n[r].name.toLowerCase() === t.toLowerCase()) return n[r].value.toString();
        return ""
    }

    function c(e) {
        if (!e || "rtmp" === e.substr(0, 4)) return "";
        var t = /[(,]format=(m3u8|mpd)-/i.exec(e);
        return t ? t[1] : (e = e.split("?")[0].split("#")[0]).lastIndexOf(".") > -1 ? e.substr(e.lastIndexOf(".") + 1, e.length).toLowerCase() : ""
    }

    function s(e) {
        var t = (e / 60 | 0) % 60, n = e % 60;
        return u((e / 3600 | 0).toString(), 2) + ":" + u(t.toString(), 2) + ":" + u(n.toFixed(3), 6)
    }

    function l(e, t) {
        if (!e) return 0;
        if (Object(r.z)(e)) return e;
        var n = e.replace(",", "."), o = n.slice(-1), u = n.split(":"), a = u.length, c = 0;
        if ("s" === o) c = i(n); else if ("m" === o) c = 60 * i(n); else if ("h" === o) c = 3600 * i(n); else if (a > 1) {
            var s = a - 1;
            4 === a && (t && (c = i(u[s]) / t), s -= 1), c += i(u[s]), c += 60 * i(u[s - 1]), a >= 3 && (c += 3600 * i(u[s - 2]))
        } else c = i(n);
        return Object(r.z)(c) ? c : 0
    }

    function f(e, t, n) {
        if (Object(r.x)(e) && "%" === e.slice(-1)) {
            var o = i(e);
            return t && Object(r.z)(t) && Object(r.z)(o) ? t * o / 100 : null
        }
        return l(e, n)
    }

    function d(e, t) {
        return e.map((function (e) {
            return t + e
        }))
    }

    function p(e, t) {
        return e.map((function (e) {
            return e + t
        }))
    }

    function h(e) {
        return !!e && Object(r.x)(e) && "%" === e.slice(-1)
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "kb", (function () {
        return r
    })), n.d(t, "nb", (function () {
        return i
    })), n.d(t, "lb", (function () {
        return o
    })), n.d(t, "pb", (function () {
        return u
    })), n.d(t, "qb", (function () {
        return a
    })), n.d(t, "mb", (function () {
        return c
    })), n.d(t, "ob", (function () {
        return s
    })), n.d(t, "rb", (function () {
        return l
    })), n.d(t, "s", (function () {
        return f
    })), n.d(t, "u", (function () {
        return d
    })), n.d(t, "t", (function () {
        return p
    })), n.d(t, "n", (function () {
        return h
    })), n.d(t, "q", (function () {
        return v
    })), n.d(t, "sb", (function () {
        return g
    })), n.d(t, "r", (function () {
        return m
    })), n.d(t, "Z", (function () {
        return b
    })), n.d(t, "W", (function () {
        return y
    })), n.d(t, "v", (function () {
        return j
    })), n.d(t, "Y", (function () {
        return w
    })), n.d(t, "w", (function () {
        return O
    })), n.d(t, "ub", (function () {
        return k
    })), n.d(t, "a", (function () {
        return C
    })), n.d(t, "b", (function () {
        return x
    })), n.d(t, "c", (function () {
        return P
    })), n.d(t, "d", (function () {
        return S
    })), n.d(t, "e", (function () {
        return T
    })), n.d(t, "h", (function () {
        return E
    })), n.d(t, "F", (function () {
        return A
    })), n.d(t, "hb", (function () {
        return _
    })), n.d(t, "Q", (function () {
        return F
    })), n.d(t, "C", (function () {
        return I
    })), n.d(t, "B", (function () {
        return M
    })), n.d(t, "E", (function () {
        return L
    })), n.d(t, "p", (function () {
        return N
    })), n.d(t, "cb", (function () {
        return R
    })), n.d(t, "m", (function () {
        return D
    })), n.d(t, "G", (function () {
        return B
    })), n.d(t, "H", (function () {
        return z
    })), n.d(t, "N", (function () {
        return q
    })), n.d(t, "O", (function () {
        return V
    })), n.d(t, "R", (function () {
        return H
    })), n.d(t, "jb", (function () {
        return Q
    })), n.d(t, "bb", (function () {
        return W
    })), n.d(t, "D", (function () {
        return U
    })), n.d(t, "S", (function () {
        return X
    })), n.d(t, "P", (function () {
        return Y
    })), n.d(t, "T", (function () {
        return J
    })), n.d(t, "V", (function () {
        return K
    })), n.d(t, "M", (function () {
        return Z
    })), n.d(t, "L", (function () {
        return $
    })), n.d(t, "K", (function () {
        return G
    })), n.d(t, "I", (function () {
        return ee
    })), n.d(t, "J", (function () {
        return te
    })), n.d(t, "U", (function () {
        return ne
    })), n.d(t, "o", (function () {
        return re
    })), n.d(t, "y", (function () {
        return ie
    })), n.d(t, "ib", (function () {
        return oe
    })), n.d(t, "db", (function () {
        return ue
    })), n.d(t, "eb", (function () {
        return ae
    })), n.d(t, "f", (function () {
        return ce
    })), n.d(t, "g", (function () {
        return se
    })), n.d(t, "ab", (function () {
        return le
    })), n.d(t, "A", (function () {
        return fe
    })), n.d(t, "l", (function () {
        return de
    })), n.d(t, "k", (function () {
        return pe
    })), n.d(t, "fb", (function () {
        return he
    })), n.d(t, "gb", (function () {
        return ve
    })), n.d(t, "tb", (function () {
        return ge
    })), n.d(t, "z", (function () {
        return me
    })), n.d(t, "j", (function () {
        return be
    })), n.d(t, "X", (function () {
        return ye
    })), n.d(t, "i", (function () {
        return je
    })), n.d(t, "x", (function () {
        return we
    }));
    var r = "buffering", i = "idle", o = "complete", u = "paused", a = "playing", c = "error", s = "loading",
        l = "stalled", f = "drag", d = "dragStart", p = "dragEnd", h = "click", v = "doubleClick", g = "tap",
        m = "doubleTap", b = "over", y = "move", j = "enter", w = "out", O = c, k = "warning", C = "adClick",
        x = "adPause", P = "adPlay", S = "adSkipped", T = "adTime", E = "autostartNotAllowed", A = o, _ = "ready",
        F = "seek", I = "beforePlay", M = "beforeComplete", L = "bufferFull", N = "displayClick",
        R = "playlistComplete", D = "cast", B = "mediaError", z = "firstFrame", q = "playAttempt",
        V = "playAttemptFailed", H = "seeked", Q = "setupError", W = "state", U = "bufferChange", X = "time",
        Y = "ratechange", J = "mediaType", K = "volume", Z = "mute", $ = "metadataCueParsed", G = "meta", ee = "levels",
        te = "levelsChanged", ne = "visualQuality", re = "controls", ie = "fullscreen", oe = "resize",
        ue = "playlistItem", ae = "playlist", ce = "audioTracks", se = "audioTrackChanged", le = "playbackRateChanged",
        fe = "logoClick", de = "captionsList", pe = "captionsChanged", he = "providerChanged",
        ve = "providerFirstFrame", ge = "userAction", me = "instreamClick", be = "breakpoint", ye = "fullscreenchange",
        je = "bandwidthEstimate", we = "float"
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return i
    })), n.d(t, "d", (function () {
        return o
    })), n.d(t, "a", (function () {
        return u
    })), n.d(t, "c", (function () {
        return a
    }));
    var r = n(2);

    function i(e) {
        var t = "";
        return e && (e.localName ? t = e.localName : e.baseName && (t = e.baseName)), t
    }

    function o(e) {
        var t = "";
        return e && (e.textContent ? t = Object(r.i)(e.textContent) : e.text && (t = Object(r.i)(e.text))), t
    }

    function u(e, t) {
        return e.childNodes[t]
    }

    function a(e) {
        return e.childNodes ? e.childNodes.length : 0
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(7);

    function i(e, t) {
        var n;
        return e && e.length > t && (n = e[t]), n
    }

    var o = n(0);
    n.d(t, "Browser", (function () {
        return c
    })), n.d(t, "OS", (function () {
        return s
    })), n.d(t, "Features", (function () {
        return l
    }));
    var u = navigator.userAgent, a = function () {
    };
    var c = {}, s = {}, l = {};
    Object.defineProperties(c, {
        androidNative: {get: Object(o.C)(r.c), enumerable: !0},
        chrome: {get: Object(o.C)(r.d), enumerable: !0},
        edge: {get: Object(o.C)(r.e), enumerable: !0},
        facebook: {get: Object(o.C)(r.g), enumerable: !0},
        firefox: {get: Object(o.C)(r.f), enumerable: !0},
        ie: {get: Object(o.C)(r.i), enumerable: !0},
        msie: {get: Object(o.C)(r.n), enumerable: !0},
        safari: {get: Object(o.C)(r.q), enumerable: !0},
        version: {
            get: Object(o.C)(function (e, t) {
                var n, r, i, o;
                return e.chrome ? n = -1 !== t.indexOf("Chrome") ? t.substring(t.indexOf("Chrome") + 7) : t.substring(t.indexOf("CriOS") + 6) : e.safari ? n = t.substring(t.indexOf("Version") + 8) : e.firefox ? n = t.substring(t.indexOf("Firefox") + 8) : e.edge ? n = t.substring(t.indexOf("Edge") + 5) : e.ie && (-1 !== t.indexOf("rv:") ? n = t.substring(t.indexOf("rv:") + 3) : -1 !== t.indexOf("MSIE") && (n = t.substring(t.indexOf("MSIE") + 5))), n && (-1 !== (o = n.indexOf(";")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(" ")) && (n = n.substring(0, o)), -1 !== (o = n.indexOf(")")) && (n = n.substring(0, o)), r = parseInt(n, 10), i = parseInt(n.split(".")[1], 10)), {
                    version: n,
                    major: r,
                    minor: i
                }
            }.bind(void 0, c, u)), enumerable: !0
        }
    }), Object.defineProperties(s, {
        android: {get: Object(o.C)(r.b), enumerable: !0},
        iOS: {get: Object(o.C)(r.j), enumerable: !0},
        mobile: {get: Object(o.C)(r.o), enumerable: !0},
        mac: {get: Object(o.C)(r.p), enumerable: !0},
        iPad: {get: Object(o.C)(r.k), enumerable: !0},
        iPhone: {get: Object(o.C)(r.l), enumerable: !0},
        windows: {
            get: Object(o.C)((function () {
                return u.indexOf("Windows") > -1
            })), enumerable: !0
        },
        tizen: {get: Object(o.C)(r.r), enumerable: !0},
        version: {
            get: Object(o.C)(function (e, t) {
                var n, r, o;
                if (e.windows) switch (n = i(/Windows(?: NT|)? ([._\d]+)/.exec(t), 1)) {
                    case"6.1":
                        n = "7.0";
                        break;
                    case"6.2":
                        n = "8.0";
                        break;
                    case"6.3":
                        n = "8.1"
                } else e.android ? n = i(/Android ([._\d]+)/.exec(t), 1) : e.iOS ? n = i(/OS ([._\d]+)/.exec(t), 1) : e.mac ? n = i(/Mac OS X (10[._\d]+)/.exec(t), 1) : e.tizen && (n = i(/Tizen ([._\d]+)/.exec(t), 1));
                if (n) {
                    r = parseInt(n, 10);
                    var u = n.split(/[._]/);
                    u && (o = parseInt(u[1], 10))
                }
                return {version: n, major: r, minor: o}
            }.bind(void 0, s, u)), enumerable: !0
        }
    }), Object.defineProperties(l, {
        flash: {get: Object(o.C)(r.h), enumerable: !0},
        flashVersion: {get: Object(o.C)(r.a), enumerable: !0},
        iframe: {get: Object(o.C)(r.m), enumerable: !0},
        passiveEvents: {
            get: Object(o.C)((function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            return e = !0
                        }
                    });
                    window.addEventListener("testPassive", a, t), window.removeEventListener("testPassive", a, t)
                } catch (e) {
                }
                return e
            })), enumerable: !0
        },
        backgroundLoading: {
            get: Object(o.C)((function () {
                return !(s.iOS || c.safari || s.tizen)
            })), enumerable: !0
        }
    })
}, function (e, t, n) {
    "use strict";
    n.d(t, "i", (function () {
        return s
    })), n.d(t, "e", (function () {
        return l
    })), n.d(t, "q", (function () {
        return f
    })), n.d(t, "j", (function () {
        return d
    })), n.d(t, "s", (function () {
        return p
    })), n.d(t, "r", (function () {
        return h
    })), n.d(t, "u", (function () {
        return v
    })), n.d(t, "d", (function () {
        return b
    })), n.d(t, "a", (function () {
        return y
    })), n.d(t, "o", (function () {
        return j
    })), n.d(t, "p", (function () {
        return w
    })), n.d(t, "v", (function () {
        return O
    })), n.d(t, "t", (function () {
        return k
    })), n.d(t, "h", (function () {
        return C
    })), n.d(t, "b", (function () {
        return x
    })), n.d(t, "g", (function () {
        return P
    })), n.d(t, "c", (function () {
        return S
    })), n.d(t, "m", (function () {
        return T
    })), n.d(t, "k", (function () {
        return E
    })), n.d(t, "n", (function () {
        return A
    })), n.d(t, "l", (function () {
        return _
    })), n.d(t, "f", (function () {
        return F
    }));
    var r, i = n(0), o = n(2), u = n(5), a = window.DOMParser, c = !0;

    function s(e, t) {
        return e.classList.contains(t)
    }

    function l(e) {
        return d(e).firstChild
    }

    function f(e, t) {
        C(e), function (e, t) {
            if (!t) return;
            for (var n = document.createDocumentFragment(), r = d(t).childNodes, i = 0; i < r.length; i++) n.appendChild(r[i].cloneNode(!0));
            e.appendChild(n)
        }(e, t)
    }

    function d(e) {
        var t = function (e) {
            r || (r = new a, c = function () {
                try {
                    if (r.parseFromString("", "text/html")) return !0
                } catch (e) {
                }
                return !1
            }());
            if (c) return r.parseFromString(e, "text/html").body;
            var t = document.implementation.createHTMLDocument("");
            e.toLowerCase().indexOf("<!doctype") > -1 ? t.documentElement.innerHTML = e : t.body.innerHTML = e;
            return t.body
        }(e);
        p(t);
        for (var n = t.querySelectorAll("*"), i = n.length; i--;) {
            h(n[i])
        }
        return t
    }

    function p(e) {
        for (var t = e.querySelectorAll("script,object,iframe"), n = t.length; n--;) {
            var r = t[n];
            r.parentNode.removeChild(r)
        }
        return e
    }

    function h(e) {
        for (var t = e.attributes, n = t.length; n--;) {
            var r = t[n].name;
            if (/^on/.test(r) && e.removeAttribute(r), /href/.test(r)) {
                var i = t[n].value;
                /javascript:|javascript&colon;/.test(i) && e.removeAttribute(r)
            }
        }
        return e
    }

    function v(e) {
        return e + (e.toString().indexOf("%") > 0 ? "" : "px")
    }

    function g(e) {
        return Object(i.x)(e.className) ? e.className.split(" ") : []
    }

    function m(e, t) {
        t = Object(o.i)(t), e.className !== t && (e.className = t)
    }

    function b(e) {
        return e.classList ? e.classList : g(e)
    }

    function y(e, t) {
        var n = g(e);
        (Array.isArray(t) ? t : t.split(" ")).forEach((function (e) {
            Object(i.e)(n, e) || n.push(e)
        })), m(e, n.join(" "))
    }

    function j(e, t) {
        var n = g(e), r = Array.isArray(t) ? t : t.split(" ");
        m(e, Object(i.h)(n, r).join(" "))
    }

    function w(e, t, n) {
        var r = e.className || "";
        t.test(r) ? r = r.replace(t, n) : n && (r += " " + n), m(e, r)
    }

    function O(e, t, n) {
        var r = s(e, t);
        (n = Object(i.r)(n) ? n : !r) !== r && (n ? y(e, t) : j(e, t))
    }

    function k(e, t, n) {
        e.setAttribute(t, n)
    }

    function C(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function x(e) {
        var t = document.createElement("link");
        t.rel = "stylesheet", t.href = e, document.getElementsByTagName("head")[0].appendChild(t)
    }

    function P(e) {
        e && C(e)
    }

    function S(e) {
        var t = {left: 0, right: 0, width: 0, height: 0, top: 0, bottom: 0};
        if (!e || !document.body.contains(e)) return t;
        var n = e.getBoundingClientRect(), r = window.pageYOffset, i = window.pageXOffset;
        return n.width || n.height || n.left || n.top ? (t.left = n.left + i, t.right = n.right + i, t.top = n.top + r, t.bottom = n.bottom + r, t.width = n.right - n.left, t.height = n.bottom - n.top, t) : t
    }

    function T(e, t) {
        e.insertBefore(t, e.firstChild)
    }

    function E(e) {
        return e.nextElementSibling
    }

    function A(e) {
        return e.previousElementSibling
    }

    function _(e, t, n) {
        void 0 === n && (n = {});
        var r = document.createElement("a");
        r.href = e, r.target = t, r = Object(i.j)(r, n), u.Browser.firefox ? r.dispatchEvent(new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window
        })) : r.click()
    }

    function F() {
        var e = window.screen.orientation;
        return !!e && ("landscape-primary" === e.type || "landscape-secondary" === e.type) || 90 === window.orientation || -90 === window.orientation
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "h", (function () {
        return u
    })), n.d(t, "f", (function () {
        return c
    })), n.d(t, "l", (function () {
        return l
    })), n.d(t, "k", (function () {
        return f
    })), n.d(t, "p", (function () {
        return d
    })), n.d(t, "g", (function () {
        return p
    })), n.d(t, "e", (function () {
        return h
    })), n.d(t, "n", (function () {
        return v
    })), n.d(t, "r", (function () {
        return g
    })), n.d(t, "d", (function () {
        return m
    })), n.d(t, "i", (function () {
        return b
    })), n.d(t, "q", (function () {
        return y
    })), n.d(t, "j", (function () {
        return j
    })), n.d(t, "c", (function () {
        return w
    })), n.d(t, "b", (function () {
        return O
    })), n.d(t, "o", (function () {
        return k
    })), n.d(t, "m", (function () {
        return C
    })), n.d(t, "a", (function () {
        return x
    }));
    var r = navigator.userAgent;

    function i(e) {
        return null !== r.match(e)
    }

    function o(e) {
        return function () {
            return i(e)
        }
    }

    function u() {
        var e = x();
        return !!(e && e >= 18)
    }

    var a = function () {
        return "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
    }, c = o(/gecko\//i), s = o(/trident\/.+rv:\s*11/i), l = o(/iP(hone|od)/i), f = function () {
        return i(/iPad/i) || a()
    }, d = function () {
        return i(/Macintosh/i) && !a()
    }, p = o(/FBAV/i);

    function h() {
        return i(/\sEdge\/\d+/i)
    }

    function v() {
        return i(/msie/i)
    }

    function g() {
        return i(/SMART-TV/)
    }

    function m() {
        return i(/\s(?:(?:Headless)?Chrome|CriOS)\//i) && !h() && !i(/UCBrowser/i) && !g()
    }

    function b() {
        return h() || s() || v()
    }

    function y() {
        return i(/safari/i) && !i(/(?:Chrome|CriOS|chromium|android|phantom)/i) || g()
    }

    function j() {
        return i(/iP(hone|ad|od)/i) || a()
    }

    function w() {
        return !(i(/chrome\/[123456789]/i) && !i(/chrome\/18/i) && !c()) && O()
    }

    function O() {
        return i(/Android/i) && !i(/Windows Phone/i)
    }

    function k() {
        return j() || O() || i(/Windows Phone/i)
    }

    function C() {
        try {
            return window.self !== window.top
        } catch (e) {
            return !0
        }
    }

    function x() {
        if (O()) return 0;
        var e, t = navigator.plugins;
        if (t && (e = t.namedItem("Shockwave Flash")) && e.description) return parseFloat(e.description.replace(/\D+(\d+\.?\d*).*/, "$1"));
        if (void 0 !== window.ActiveXObject) {
            try {
                if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return parseFloat(e.GetVariable("$version").split(" ")[1].replace(/\s*,\s*/, "."))
            } catch (e) {
                return 0
            }
            return e
        }
        return 0
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "exists", (function () {
        return i
    })), n.d(t, "isHTTPS", (function () {
        return o
    })), n.d(t, "isFileProtocol", (function () {
        return u
    })), n.d(t, "isRtmp", (function () {
        return a
    })), n.d(t, "isYouTube", (function () {
        return c
    })), n.d(t, "typeOf", (function () {
        return s
    })), n.d(t, "isDeepKeyCompliant", (function () {
        return l
    }));
    var r = window.location.protocol;

    function i(e) {
        switch (typeof e) {
            case"string":
                return e.length > 0;
            case"object":
                return null !== e;
            case"undefined":
                return !1;
            default:
                return !0
        }
    }

    function o() {
        return "https:" === r
    }

    function u() {
        return "file:" === r
    }

    function a(e, t) {
        return 0 === e.indexOf("rtmp:") || "rtmp" === t
    }

    function c(e, t) {
        return "youtube" === t || /^(http|\/\/).*(youtube\.com|youtu\.be)\/.+/.test(e)
    }

    function s(e) {
        if (null === e) return "null";
        var t = typeof e;
        return "object" === t && Array.isArray(e) ? "array" : t
    }

    function l(e, t, n) {
        var r = Object.keys(e);
        return Object.keys(t).length >= r.length && r.every((function (r) {
            var i = e[r], o = t[r];
            return i && "object" == typeof i ? !(!o || "object" != typeof o) && l(i, o, n) : n(r, e)
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    })), n.d(t, "c", (function () {
        return i
    })), n.d(t, "d", (function () {
        return o
    })), n.d(t, "b", (function () {
        return u
    })), n.d(t, "e", (function () {
        return a
    })), n.d(t, "f", (function () {
        return c
    }));
    var r = function () {
            function e() {
            }

            var t = e.prototype;
            return t.on = function (e, t, n) {
                if (!l(this, "on", e, [t, n]) || !t) return this;
                var r = this._events || (this._events = {});
                return (r[e] || (r[e] = [])).push({callback: t, context: n}), this
            }, t.once = function (e, t, n) {
                if (!l(this, "once", e, [t, n]) || !t) return this;
                var r = 0, i = this, o = function n() {
                    r++ || (i.off(e, n), t.apply(this, arguments))
                };
                return o._callback = t, this.on(e, o, n)
            }, t.off = function (e, t, n) {
                if (!this._events || !l(this, "off", e, [t, n])) return this;
                if (!e && !t && !n) return delete this._events, this;
                for (var r = e ? [e] : Object.keys(this._events), i = 0, o = r.length; i < o; i++) {
                    e = r[i];
                    var u = this._events[e];
                    if (u) {
                        var a = this._events[e] = [];
                        if (t || n) for (var c = 0, s = u.length; c < s; c++) {
                            var f = u[c];
                            (t && t !== f.callback && t !== f.callback._callback || n && n !== f.context) && a.push(f)
                        }
                        a.length || delete this._events[e]
                    }
                }
                return this
            }, t.trigger = function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                if (!this._events) return this;
                if (!l(this, "trigger", e, n)) return this;
                var i = this._events[e], o = this._events.all;
                return i && f(i, n, this), o && f(o, arguments, this), this
            }, t.triggerSafe = function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                if (!this._events) return this;
                if (!l(this, "trigger", e, n)) return this;
                var i = this._events[e], o = this._events.all;
                return i && f(i, n, this, e), o && f(o, arguments, this, e), this
            }, e
        }(), i = r.prototype.on, o = r.prototype.once, u = r.prototype.off, a = r.prototype.trigger,
        c = r.prototype.triggerSafe;
    r.on = i, r.once = o, r.off = u, r.trigger = a;
    var s = /\s+/;

    function l(e, t, n, r) {
        if (!n) return !0;
        if ("object" == typeof n) {
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e[t].apply(e, [i, n[i]].concat(r));
            return !1
        }
        if (s.test(n)) {
            for (var o = n.split(s), u = 0, a = o.length; u < a; u++) e[t].apply(e, [o[u]].concat(r));
            return !1
        }
        return !0
    }

    function f(e, t, n, r) {
        for (var i = -1, o = e.length; ++i < o;) {
            var u = e[i];
            if (r) try {
                u.callback.apply(u.context || n, t)
            } catch (e) {
                console.log('Error in "' + r + '" event handler:', e)
            } else u.callback.apply(u.context || n, t)
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return l
    })), n.d(t, "d", (function () {
        return f
    })), n.d(t, "b", (function () {
        return d
    })), n.d(t, "c", (function () {
        return p
    }));
    var r = n(30), i = n(29), o = n(17), u = n(13), a = n(40), c = n(1), s = null, l = {};

    function f(e) {
        return s || (s = function (e) {
            var t = e.get("controls"), s = h(), f = function (e, t) {
                var n = e.get("playlist");
                if (Array.isArray(n) && n.length) for (var u = Object(i.c)(Object(r.a)(n[0]), e), a = 0; a < u.length; a++) for (var c = u[a], s = e.getProviders(), l = 0; l < o.a.length; l++) {
                    var f = o.a[l];
                    if (s.providerSupports(f, c)) return f.name === t
                }
                return !1
            }(e, "html5");
            if (t && s && f) return p = n.e(6).then(function (e) {
                n(37);
                var t = n(22).default;
                return a.a.controls = n(21).default, Object(u.a)(n(53).default), t
            }.bind(null, n)).catch(d(c.t + 105)), l.html5 = p, p;
            var p;
            if (t && f) return function () {
                var e = n.e(4).then(function (e) {
                    var t = n(22).default;
                    return a.a.controls = n(21).default, Object(u.a)(n(53).default), t
                }.bind(null, n)).catch(d(c.t + 104));
                return l.html5 = e, e
            }();
            if (t && s) return n.e(5).then(function (e) {
                n(37);
                var t = n(22).default;
                return a.a.controls = n(21).default, t
            }.bind(null, n)).catch(d(c.t + 103));
            if (t) return n.e(3).then(function (e) {
                var t = n(22).default;
                return a.a.controls = n(21).default, t
            }.bind(null, n)).catch(d(c.t + 102));
            return (h() ? n.e(8).then(function (e) {
                return n(37)
            }.bind(null, n)).catch(d(c.t + 120)) : Promise.resolve()).then((function () {
                return n.e(2).then(function (e) {
                    return n(22).default
                }.bind(null, n)).catch(d(c.t + 101))
            }))
        }(e)), s
    }

    function d(e, t) {
        return function () {
            throw new c.s(c.m, e, t)
        }
    }

    function p(e, t) {
        return function () {
            throw new c.s(null, e, t)
        }
    }

    function h() {
        var e = window.IntersectionObserverEntry;
        return !(e && "IntersectionObserver" in window && "intersectionRatio" in e.prototype)
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    })), n.d(t, "b", (function () {
        return c
    })), n.d(t, "d", (function () {
        return s
    })), n.d(t, "e", (function () {
        return d
    })), n.d(t, "c", (function () {
        return p
    }));
    var r, i = n(2), o = n(43), u = n.n(o), a = u.a.clear;

    function c(e, t, n, r) {
        n = n || "all-players";
        var i = "";
        if ("object" == typeof t) {
            var o = document.createElement("div");
            s(o, t);
            var a = o.style.cssText;
            Object.prototype.hasOwnProperty.call(t, "content") && a && (a = a + ' content: "' + t.content + '";'), r && a && (a = a.replace(/;/g, " !important;")), i = "{" + a + "}"
        } else "string" == typeof t && (i = t);
        "" !== i && "{}" !== i ? u.a.style([[e, e + i]], n) : u.a.clear(n, e)
    }

    function s(e, t) {
        if (null != e) {
            var n;
            void 0 === e.length && (e = [e]);
            var r = {};
            for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = f(n, t[n]));
            for (var i = 0; i < e.length; i++) {
                var o = e[i], u = void 0;
                if (null != o) for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (u = l(n), o.style[u] !== r[n] && (o.style[u] = r[n]))
            }
        }
    }

    function l(e) {
        e = e.split("-");
        for (var t = 1; t < e.length; t++) e[t] = e[t].charAt(0).toUpperCase() + e[t].slice(1);
        return e.join("")
    }

    function f(e, t) {
        return "" === t || null == t ? "" : "string" == typeof t && isNaN(t) ? /png|gif|jpe?g/i.test(t) && t.indexOf("url") < 0 ? "url(" + t + ")" : t : 0 === t || "z-index" === e || "opacity" === e ? "" + t : /color/i.test(e) ? "#" + Object(i.e)(t.toString(16).replace(/^0x/i, ""), 6) : Math.ceil(t) + "px"
    }

    function d(e, t) {
        s(e, {transform: t, webkitTransform: t, msTransform: t, mozTransform: t, oTransform: t})
    }

    function p(e, t) {
        var n = "rgb", i = void 0 !== t && 100 !== t;
        if (i && (n += "a"), !r) {
            var o = document.createElement("canvas");
            o.height = 1, o.width = 1, r = o.getContext("2d")
        }
        e ? isNaN(parseInt(e, 16)) || (e = "#" + e) : e = "#000000", r.clearRect(0, 0, 1, 1), r.fillStyle = e, r.fillRect(0, 0, 1, 1);
        var u = r.getImageData(0, 0, 1, 1).data;
        return n += "(" + u[0] + ", " + u[1] + ", " + u[2], i && (n += ", " + t / 100), n + ")"
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getAbsolutePath", (function () {
        return o
    })), n.d(t, "isAbsolutePath", (function () {
        return u
    })), n.d(t, "parseXML", (function () {
        return a
    })), n.d(t, "serialize", (function () {
        return c
    })), n.d(t, "parseDimension", (function () {
        return s
    })), n.d(t, "timeFormat", (function () {
        return l
    }));
    var r = n(8), i = n(0);

    function o(e, t) {
        if (t && Object(r.exists)(t) || (t = document.location.href), !Object(r.exists)(e)) return "";
        if (u(e)) return e;
        var n, i = t.substring(0, t.indexOf("://") + 3), o = t.substring(i.length, t.indexOf("/", i.length + 1));
        if (0 === e.indexOf("/")) n = e.split("/"); else {
            var a = t.split("?")[0];
            n = (a = a.substring(i.length + o.length + 1, a.lastIndexOf("/"))).split("/").concat(e.split("/"))
        }
        for (var c = [], s = 0; s < n.length; s++) n[s] && Object(r.exists)(n[s]) && "." !== n[s] && (".." === n[s] ? c.pop() : c.push(n[s]));
        return i + o + "/" + c.join("/")
    }

    function u(e) {
        return /^(?:(?:https?|file):)?\/\//.test(e)
    }

    function a(e) {
        var t = null;
        try {
            (t = (new window.DOMParser).parseFromString(e, "text/xml")).querySelector("parsererror") && (t = null)
        } catch (e) {
        }
        return t
    }

    function c(e) {
        if (void 0 === e) return null;
        if ("string" == typeof e && e.length < 6) {
            var t = e.toLowerCase();
            if ("true" === t) return !0;
            if ("false" === t) return !1;
            if (!Object(i.u)(Number(e)) && !Object(i.u)(parseFloat(e))) return Number(e)
        }
        return e
    }

    function s(e) {
        return Object(i.z)(e) ? e : "" === e ? 0 : e.lastIndexOf("%") > -1 ? e : parseInt(e.replace("px", ""), 10)
    }

    function l(e, t) {
        if (Object(i.u)(e) && (e = parseInt(e.toString())), Object(i.u)(e) || !isFinite(e) || e <= 0 && !t) return "00:00";
        var n = e < 0 ? "-" : "";
        e = Math.abs(e);
        var r = Math.floor(e / 3600), o = Math.floor((e - 3600 * r) / 60), u = Math.floor(e % 60);
        return n + (r ? r + ":" : "") + (o < 10 ? "0" : "") + o + ":" + (u < 10 ? "0" : "") + u
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    }));
    var r = n(33), i = n(17), o = n(60), u = n(0);

    function a(e) {
        var t = e.getName().name;
        if (!r.a[t]) {
            if (!Object(u.l)(i.a, Object(u.B)({name: t}))) {
                if (!Object(u.t)(e.supports)) throw new Error("Tried to register a provider with an invalid object");
                i.a.unshift({name: t, supports: e.supports})
            }
            Object(u.g)(e.prototype, o.a), r.a[t] = e
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "j", (function () {
        return p
    })), n.d(t, "d", (function () {
        return h
    })), n.d(t, "b", (function () {
        return v
    })), n.d(t, "e", (function () {
        return m
    })), n.d(t, "g", (function () {
        return y
    })), n.d(t, "h", (function () {
        return j
    })), n.d(t, "c", (function () {
        return w
    })), n.d(t, "f", (function () {
        return k
    })), n.d(t, "i", (function () {
        return C
    })), n.d(t, "a", (function () {
        return x
    }));
    var r = n(0), i = n(7), o = n(28), u = n(8), a = n(42), c = {}, s = {
        zh: "Chinese",
        nl: "Dutch",
        en: "English",
        fr: "French",
        de: "German",
        it: "Italian",
        ja: "Japanese",
        pt: "Portuguese",
        ru: "Russian",
        es: "Spanish",
        el: "Greek",
        fi: "Finnish",
        id: "Indonesian",
        ko: "Korean",
        th: "Thai",
        vi: "Vietnamese"
    }, l = Object(r.q)(s);

    function f(e) {
        var t = d(e), n = t.indexOf("_");
        return -1 === n ? t : t.substring(0, n)
    }

    function d(e) {
        return e.toLowerCase().replace("-", "_")
    }

    function p(e) {
        return e ? Object.keys(e).reduce((function (t, n) {
            return t[d(n)] = e[n], t
        }), {}) : {}
    }

    function h(e) {
        if (e) return 3 === e.length ? e : s[f(e)] || e
    }

    function v(e) {
        return l[e] || ""
    }

    function g(e) {
        var t = e.querySelector("html");
        return t ? t.getAttribute("lang") : null
    }

    function m() {
        var e = g(document);
        if (!e && Object(i.m)()) try {
            e = g(window.top.document)
        } catch (e) {
        }
        return e || navigator.language || "en"
    }

    var b = ["ar", "da", "de", "el", "es", "fi", "fr", "he", "id", "it", "ja", "ko", "nl", "no", "oc", "pt", "ro", "ru", "sl", "sv", "th", "tr", "vi", "zh"];

    function y(e) {
        return 8207 === e.charCodeAt(0) || /^[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(e)
    }

    function j(e) {
        return b.indexOf(f(e)) >= 0
    }

    function w(e, t, n) {
        return Object(r.j)({}, function (e) {
            var t = e.advertising, n = e.related, i = e.sharing, o = e.abouttext, u = Object(r.j)({}, e.localization);
            t && (u.advertising = u.advertising || {}, O(u.advertising, t, "admessage"), O(u.advertising, t, "cuetext"), O(u.advertising, t, "loadingAd"), O(u.advertising, t, "podmessage"), O(u.advertising, t, "skipmessage"), O(u.advertising, t, "skiptext"));
            "string" == typeof u.related ? u.related = {heading: u.related} : u.related = u.related || {};
            n && O(u.related, n, "autoplaymessage");
            i && (u.sharing = u.sharing || {}, O(u.sharing, i, "heading"), O(u.sharing, i, "copied"));
            o && O(u, e, "abouttext");
            var a = u.close || u.nextUpClose;
            a && (u.close = a);
            return u
        }(e), t[f(n)], t[d(n)])
    }

    function O(e, t, n) {
        var r = e[n] || t[n];
        r && (e[n] = r)
    }

    function k(e) {
        return Object(u.isDeepKeyCompliant)(a.a, e, (function (e, t) {
            return "string" == typeof t[e]
        }))
    }

    function C(e, t) {
        var n = c[t];
        if (!n) {
            var r = e + "translations/" + f(t) + ".json";
            c[t] = n = new Promise((function (e, n) {
                Object(o.b)({
                    url: r, oncomplete: e, onerror: function (e, r, i, o) {
                        c[t] = null, n(o)
                    }, responseType: "json"
                })
            }))
        }
        return n
    }

    function x(e, t) {
        var n = Object(r.j)({}, e, t);
        return P(n, "errors", e, t), P(n, "related", e, t), P(n, "sharing", e, t), P(n, "advertising", e, t), P(n, "shortcuts", e, t), P(n, "captionsStyles", e, t), n
    }

    function P(e, t, n, i) {
        e[t] = Object(r.j)({}, n[t], i[t])
    }
}, function (e, t, n) {
    "use strict";
    t.a = []
}, function (e, t, n) {
    "use strict";
    t.a = {debug: !1}
}, function (e, t, n) {
    "use strict";
    var r = n(27), i = n(5), o = n(23), u = n(0), a = n(8), c = n(36),
        s = Object(u.l)(r.a, Object(u.B)({name: "html5"})), l = s.supports;

    function f(e) {
        var t = window.MediaSource;
        return Object(u.a)(e, (function (e) {
            return !!t && !!t.isTypeSupported && t.isTypeSupported(e)
        }))
    }

    function d(e) {
        if (e.drm) return !1;
        var t = e.file.indexOf(".m3u8") > -1, n = "hls" === e.type || "m3u8" === e.type;
        if (!t && !n) return !1;
        var r = i.Browser.chrome || i.Browser.firefox || i.Browser.edge || i.Browser.ie && 11 === i.Browser.version.major,
            o = i.OS.android && !1 === e.hlsjsdefault, u = i.Browser.safari && !!e.safarihlsjs;
        return f(e.mediaTypes || ['video/mp4;codecs="avc1.4d400d,mp4a.40.2"']) && (r || u) && !o
    }

    s.supports = function (e, t) {
        var n = l.apply(this, arguments);
        if (n && e.drm && "hls" === e.type) {
            var r = Object(o.a)(t), i = r("drm");
            if (i && e.drm.fairplay) {
                var u = window.WebKitMediaKeys;
                return u && u.isTypeSupported && u.isTypeSupported("com.apple.fps.1_0", "video/mp4")
            }
            return i
        }
        return n
    }, r.a.push({
        name: "shaka", supports: function (e) {
            return !(e.drm && !Object(c.a)(e.drm)) && (!(!window.HTMLVideoElement || !window.MediaSource) && (f(e.mediaTypes) && ("dash" === e.type || "mpd" === e.type || (e.file || "").indexOf("mpd-time-csf") > -1)))
        }
    }), r.a.unshift({
        name: "hlsjs", supports: function (e) {
            return d(e)
        }
    }), r.a.unshift({
        name: "hlsjsProgressive", supports: function (e) {
            return e._hlsjsProgressive && d(e)
        }
    }), r.a.push({
        name: "flash", supports: function (e) {
            if (!i.Features.flash || e.drm) return !1;
            var t = e.type;
            return "hls" === t || "m3u8" === t || !Object(a.isRtmp)(e.file, t) && ["flv", "f4v", "mov", "m4a", "m4v", "mp4", "aac", "f4a", "mp3", "mpeg", "smil"].indexOf(t) > -1
        }
    }), t.a = r.a
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var r = Date.now || function () {
        return (new Date).getTime()
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "getScriptPath", (function () {
        return o
    })), n.d(t, "repo", (function () {
        return u
    })), n.d(t, "versionCheck", (function () {
        return a
    })), n.d(t, "loadFrom", (function () {
        return c
    }));
    var r = n(31), i = n(8), o = function (e) {
        for (var t = document.getElementsByTagName("script"), n = 0; n < t.length; n++) {
            var r = t[n].src;
            if (r) {
                var i = r.lastIndexOf("/" + e);
                if (i >= 0) return r.substr(0, i + 1)
            }
        }
        return ""
    }, u = function () {
        var e = "//ssl.p.jwpcdn.com/player/v/8.13.8/";
        return "" + (Object(i.isFileProtocol)() ? "https:" : "") + e
    }, a = function (e) {
        var t = ("0" + e).split(/\W/), n = r.a.split(/\W/), i = parseFloat(t[0]), o = parseFloat(n[0]);
        return !(i > o) && !(i === o && parseFloat("0" + t[1]) > parseFloat(n[1]))
    }, c = function () {
        return u()
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    })), n.d(t, "c", (function () {
        return o
    })), n.d(t, "b", (function () {
        return u
    }));
    var r = n(39), i = r.a, o = r.c;

    function u(e) {
        var t = Object(r.b)(e);
        if (!e) return t;
        switch (Object(r.c)(e)) {
            case"jwpsrv":
                t = 305001;
                break;
            case"googima":
                t = 305002;
                break;
            case"vast":
                t = 305003;
                break;
            case"freewheel":
                t = 305004;
                break;
            case"dai":
                t = 305005;
                break;
            case"gapro":
                t = 305006;
                break;
            case"bidding":
                t = 305007
        }
        return t
    }
}, , , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));

    function r(e) {
        var t = {
            setup: ["free", "starter", "business", "premium", "enterprise", "developer", "ads", "unlimited", "trial", "platinum"],
            drm: ["enterprise", "developer", "ads", "unlimited", "trial"],
            ads: ["ads", "unlimited", "trial", "platinum", "enterprise", "developer", "business"],
            jwpsrv: ["free", "starter", "business", "premium", "enterprise", "developer", "ads", "trial", "platinum", "invalid"],
            discovery: ["ads", "enterprise", "developer", "trial", "unlimited"]
        };
        return function (n) {
            return t[n] && t[n].indexOf(e) > -1
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(9), o = n(3), u = {};

    function a(e) {
        var t = document.createElement("link");
        return t.type = "text/css", t.rel = "stylesheet", t.href = e, t
    }

    function c(e, t) {
        var n = document.createElement("script");
        return n.type = "text/javascript", n.charset = "utf-8", n.async = !0, n.timeout = t || 45e3, n.src = e, n
    }

    var s = function (e, t, n) {
        var r = this, i = 0;

        function s(e) {
            i = 2, r.trigger(o.w, e).off()
        }

        function l(e) {
            i = 3, r.trigger(o.lb, e).off()
        }

        this.getStatus = function () {
            return i
        }, this.load = function () {
            var r = u[e];
            return 0 !== i ? r : (r && r.then(l).catch(s), i = 1, r = new Promise((function (r, i) {
                var o = (t ? a : c)(e, n), u = function () {
                    o.onerror = o.onload = null, clearTimeout(d)
                }, f = function (e) {
                    u(), s(e), i(e)
                }, d = setTimeout((function () {
                    f(new Error("Network timeout " + e))
                }), 45e3);
                o.onerror = function () {
                    f(new Error("Failed to load " + e))
                }, o.onload = function (e) {
                    u(), l(e), r(e)
                };
                var p = document.getElementsByTagName("head")[0] || document.documentElement;
                p.insertBefore(o, p.firstChild)
            })), u[e] = r, r)
        }
    };
    Object(r.j)(s.prototype, i.a), t.a = s
}, function (e, t, n) {
    "use strict";
    var r = n(1), i = n(20), o = function () {
        this.load = function (e, t, n, o) {
            return n && "object" == typeof n ? Promise.all(Object.keys(n).filter((function (e) {
                return e
            })).map((function (u) {
                var a = n[u];
                return t.setupPlugin(u).then((function (t) {
                    if (!o.attributes._destroyed) return Object(i.a)(t, a, e)
                })).catch((function (e) {
                    return t.removePlugin(u), e.code ? e : new r.s(null, Object(i.b)(u), e)
                }))
            }))) : Promise.resolve()
        }
    }, u = n(61), a = n(49), c = {}, s = function () {
        function e() {
        }

        var t = e.prototype;
        return t.setupPlugin = function (e) {
            var t = this.getPlugin(e);
            return t ? (t.url !== e && Object(a.a)('JW Plugin "' + Object(i.c)(e) + '" already loaded from "' + t.url + '". Ignoring "' + e + '."'), t.promise) : this.addPlugin(e).load()
        }, t.addPlugin = function (e) {
            var t = Object(i.c)(e), n = c[t];
            return n || (n = new u.a(e), c[t] = n), n
        }, t.getPlugin = function (e) {
            return c[Object(i.c)(e)]
        }, t.removePlugin = function (e) {
            delete c[Object(i.c)(e)]
        }, t.getPlugins = function () {
            return c
        }, e
    }();
    n.d(t, "b", (function () {
        return f
    })), n.d(t, "a", (function () {
        return d
    }));
    var l = new s, f = function (e, t, n) {
        var r = l.addPlugin(e);
        r.js || r.registerPlugin(e, t, n)
    };

    function d(e, t) {
        var n = e.get("plugins");
        return window.jwplayerPluginJsonp = f, (e.pluginLoader = e.pluginLoader || new o).load(t, l, n, e).then((function (t) {
            if (!e.attributes._destroyed) return delete window.jwplayerPluginJsonp, t
        }))
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return a
    }));
    var r = n(50), i = n(23), o = n(47), u = n(1), a = 100013;
    t.b = function (e) {
        var t, n, c;
        try {
            var s = Object(r.a)(e || "", Object(o.a)("NDh2aU1Cb0NHRG5hcDFRZQ==")).split("/");
            if ("pro" === (t = s[0]) && (t = "premium"), Object(i.a)(t)("setup") || (t = "invalid"), s.length > 2) {
                n = s[1];
                var l = parseInt(s[2]);
                l > 0 && (c = new Date).setTime(l)
            }
        } catch (e) {
            t = "invalid"
        }
        this.edition = function () {
            return t
        }, this.token = function () {
            return n
        }, this.expiration = function () {
            return c
        }, this.duration = function () {
            return c ? c.getTime() - (new Date).getTime() : 0
        }, this.error = function () {
            var r;
            return void 0 === e ? r = 100011 : "invalid" !== t && n ? this.duration() < 0 && (r = a) : r = 100012, r ? new u.s(u.m, r) : null
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return c
    }));
    var r = n(68), i = n(8), o = n(41), u = {
        aac: "audio/mp4",
        mp4: "video/mp4",
        f4v: "video/mp4",
        m4v: "video/mp4",
        mov: "video/mp4",
        mp3: "audio/mpeg",
        mpeg: "audio/mpeg",
        ogv: "video/ogg",
        ogg: "video/ogg",
        oga: "video/ogg",
        vorbis: "video/ogg",
        webm: "video/webm",
        f4a: "video/aac",
        m3u8: "application/vnd.apple.mpegurl",
        m3u: "application/vnd.apple.mpegurl",
        hls: "application/vnd.apple.mpegurl"
    }, a = [{name: "html5", supports: c}];

    function c(e) {
        if (!1 === Object(r.a)(e)) return !1;
        if (!o.a.canPlayType) return !1;
        var t = e.file, n = e.type;
        if (Object(i.isRtmp)(t, n)) return !1;
        var a = e.mimeType || u[n];
        if (!a) return !1;
        var c = e.mediaTypes;
        return c && c.length && (a = [a].concat(c.slice()).join("; ")), !!o.a.canPlayType(a)
    }

    t.a = a
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return c
    })), n.d(t, "a", (function () {
        return s
    }));
    var r = n(0), i = n(12), o = n(8), u = n(1), a = function () {
    };

    function c(e, t, n, d) {
        var p;
        e === Object(e) && (e = (d = e).url);
        var h = Object(r.j)({
            xhr: null,
            url: e,
            withCredentials: !1,
            retryWithoutCredentials: !1,
            timeout: 6e4,
            timeoutId: -1,
            oncomplete: t || a,
            onerror: n || a,
            mimeType: d && !d.responseType ? "text/xml" : "",
            requireValidXML: !1,
            responseType: d && d.plainText ? "text" : "",
            useDomParser: !1,
            requestFilter: null
        }, d), v = function (e, t) {
            return function (e, n) {
                var i = e.currentTarget || t.xhr;
                if (clearTimeout(t.timeoutId), t.retryWithoutCredentials && t.xhr.withCredentials) return s(i), void c(Object(r.j)({}, t, {
                    xhr: null,
                    withCredentials: !1,
                    retryWithoutCredentials: !1
                }));
                !n && i.status >= 400 && i.status < 600 && (n = i.status), l(t, n ? u.o : u.r, n || 6, e)
            }
        }(0, h);
        if ("XMLHttpRequest" in window) {
            if (p = h.xhr = h.xhr || new window.XMLHttpRequest, "function" == typeof h.requestFilter) {
                var g;
                try {
                    g = h.requestFilter({url: e, xhr: p})
                } catch (e) {
                    return v(e, 5), p
                }
                g && "open" in g && "send" in g && (p = h.xhr = g)
            }
            p.onreadystatechange = function (e) {
                return function (t) {
                    var n = t.currentTarget || e.xhr;
                    if (4 === n.readyState) {
                        clearTimeout(e.timeoutId);
                        var a = n.status;
                        if (a >= 400) return void l(e, u.o, a < 600 ? a : 6);
                        if (200 === a) return function (e) {
                            return function (t) {
                                var n = t.currentTarget || e.xhr;
                                if (clearTimeout(e.timeoutId), e.responseType) {
                                    if ("json" === e.responseType) return function (e, t) {
                                        if (!e.response || "string" == typeof e.response && '"' !== e.responseText.substr(1)) try {
                                            e = Object(r.j)({}, e, {response: JSON.parse(e.responseText)})
                                        } catch (e) {
                                            return void l(t, u.o, 611, e)
                                        }
                                        return t.oncomplete(e)
                                    }(n, e)
                                } else {
                                    var o, a = n.responseXML;
                                    if (a) try {
                                        o = a.firstChild
                                    } catch (e) {
                                    }
                                    if (a && o) return f(n, a, e);
                                    if (e.useDomParser && n.responseText && !a && (a = Object(i.parseXML)(n.responseText)) && a.firstChild) return f(n, a, e);
                                    if (e.requireValidXML) return void l(e, u.o, 602)
                                }
                                e.oncomplete(n)
                            }
                        }(e)(t);
                        0 === a && Object(o.isFileProtocol)() && !/^[a-z][a-z0-9+.-]*:/.test(e.url) && l(e, u.o, 7)
                    }
                }
            }(h), p.onerror = v, "overrideMimeType" in p ? h.mimeType && p.overrideMimeType(h.mimeType) : h.useDomParser = !0;
            try {
                e = e.replace(/#.*$/, ""), p.open("GET", e, !0)
            } catch (e) {
                return v(e, 3), p
            }
            if (h.responseType) try {
                p.responseType = h.responseType
            } catch (e) {
            }
            h.timeout && (h.timeoutId = setTimeout((function () {
                s(p), l(h, u.r, 1)
            }), h.timeout), p.onabort = function () {
                clearTimeout(h.timeoutId)
            });
            try {
                h.withCredentials && "withCredentials" in p && (p.withCredentials = !0), p.send()
            } catch (e) {
                v(e, 4)
            }
            return p
        }
        l(h, u.r, 2)
    }

    function s(e) {
        e.onload = null, e.onprogress = null, e.onreadystatechange = null, e.onerror = null, "abort" in e && e.abort()
    }

    function l(e, t, n, r) {
        e.onerror(t, e.url, e.xhr, new u.s(t, n, r))
    }

    function f(e, t, n) {
        var i = t.documentElement;
        if (!n.requireValidXML || "parsererror" !== i.nodeName && !i.getElementsByTagName("parsererror").length) return e.responseXML || (e = Object(r.j)({}, e, {responseXML: t})), n.oncomplete(e);
        l(n, u.o, 601)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = {none: !0, metadata: !0, auto: !0};

    function o(e, t) {
        return i[e] ? e : i[t] ? t : "metadata"
    }

    var u = n(30), a = n(34), c = n(44), s = n(1);
    n.d(t, "b", (function () {
        return l
    })), n.d(t, "e", (function () {
        return f
    })), n.d(t, "d", (function () {
        return d
    })), n.d(t, "c", (function () {
        return p
    }));

    function l(e, t, n) {
        var i = Object(r.j)({}, n);
        return delete i.playlist, e.map((function (e) {
            return d(t, e, i)
        })).filter((function (e) {
            return !!e
        }))
    }

    function f(e) {
        if (!Array.isArray(e) || 0 === e.length) throw new s.s(s.o, 630)
    }

    function d(e, t, n) {
        var i = e.getProviders(), u = e.get("preload"), a = Object(r.j)({}, t);
        if (a.preload = o(t.preload, u), a.allSources = h(t, e), a.sources = v(a.allSources, i), a.sources.length) return a.file = a.sources[0].file, a.feedData = n, function (e) {
            var t = e.sources[0].liveSyncDuration;
            return e.dvrSeekLimit = e.liveSyncDuration = t, e
        }(a)
    }

    var p = function (e, t) {
        return v(h(e, t), t.getProviders())
    };

    function h(e, t) {
        var n = t.attributes, r = e.sources, i = e.allSources, u = e.preload, c = e.drm,
            s = g(e.withCredentials, n.withCredentials);
        return (i || r).map((function (t) {
            if (t !== Object(t)) return null;
            m(t, n, "androidhls"), m(t, n, "hlsjsdefault"), m(t, n, "safarihlsjs"), function (e, t, n) {
                if (e.liveSyncDuration) return;
                var r = t.liveSyncDuration ? t : n;
                m(e, r, "liveSyncDuration")
            }(t, e, n), m(t, n, "_hlsjsProgressive"), t.preload = o(t.preload, u);
            var r = t.drm || c || n.drm;
            r && (t.drm = r);
            var i = g(t.withCredentials, s);
            return void 0 !== i && (t.withCredentials = i), Object(a.a)(t)
        })).filter((function (e) {
            return !!e
        }))
    }

    function v(e, t) {
        t && t.choose || (t = new c.a);
        var n = function (e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n], i = t.choose(r).providerToCheck;
                if (i) return {type: r.type, provider: i}
            }
            return null
        }(e, t);
        if (!n) return [];
        var r = n.provider, i = n.type;
        return e.filter((function (e) {
            return e.type === i && t.providerSupports(r, e)
        }))
    }

    function g(e, t) {
        return void 0 === e ? t : e
    }

    function m(e, t, n) {
        n in t && (e[n] = t[n])
    }

    t.a = function (e) {
        return (Array.isArray(e) ? e : [e]).map(u.a)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(34), o = ["captions", "metadata", "thumbnails", "chapters"];
    var u = function (e) {
        if (e && e.file) {
            var t, n = Object(r.j)({}, {kind: "captions", default: !1}, e);
            return n.kind = (t = n.kind, -1 !== o.indexOf(t) ? n.kind : "captions"), n.default = !!n.default, n
        }
    }, a = Array.isArray;
    t.a = function (e) {
        a((e = e || {}).tracks) || delete e.tracks;
        var t = Object(r.j)({}, {sources: [], tracks: [], minDvrWindow: 120, dvrSeekLimit: 25}, e);
        t.sources !== Object(t.sources) || a(t.sources) || (t.sources = [Object(i.a)(t.sources)]), a(t.sources) && 0 !== t.sources.length || (e.levels ? t.sources = e.levels : t.sources = [Object(i.a)(e)]);
        for (var n = 0; n < t.sources.length; n++) {
            var o = t.sources[n];
            if (o) {
                var c = o.default;
                o.default = !!c && "true" === c.toString(), t.sources[n].label || (t.sources[n].label = n.toString()), t.sources[n] = Object(i.a)(t.sources[n])
            }
        }
        return t.sources = t.sources.filter((function (e) {
            return !!e
        })), a(t.tracks) || (t.tracks = []), a(t.captions) && (t.tracks = t.tracks.concat(t.captions), delete t.captions), t.tracks = t.tracks.map(u).filter((function (e) {
            return !!e
        })), t
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var r = "8.13.8+commercial_v8-13-8.395.commercial.78a9355.hlsjs.16769c8.hlsjsprogressive.aaadcf1.jwplayer.5274584.dai.07e1a38.freewheel.84cf03d.googima.d9a6735.googimanvmp.6873d1e.headerbidding.c8cbe31.vast.ea33bc5.analytics.f8ec4b5.gapro.141397a"
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(18), o = window.performance || {timing: {}}, u = o.timing.navigationStart || Object(i.a)();

    function a() {
        return u + o.now()
    }

    "now" in o || (o.now = function () {
        return Object(i.a)() - u
    });
    t.a = function () {
        var e = {}, t = {}, n = {}, i = {};
        return {
            start: function (t) {
                e[t] = a(), n[t] = n[t] + 1 || 1
            }, end: function (n) {
                if (e[n]) {
                    var r = a() - e[n];
                    delete e[n], t[n] = t[n] + r || r
                }
            }, dump: function () {
                var o = Object(r.j)({}, t);
                for (var u in e) if (Object.prototype.hasOwnProperty.call(e, u)) {
                    var c = a() - e[u];
                    o[u] = o[u] + c || c
                }
                return {counts: Object(r.j)({}, n), sums: o, events: Object(r.j)({}, i)}
            }, tick: function (e) {
                i[e] = a()
            }, clear: function (e) {
                delete i[e]
            }, between: function (e, t) {
                return i[t] && i[e] ? i[t] - i[e] : null
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    t.a = {}
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(8), o = n(2);
    t.a = function (e) {
        if (e && e.file) {
            var t = Object(r.j)({}, {default: !1, type: ""}, e);
            t.file = Object(o.i)("" + t.file);
            var n = /^[^/]+\/(?:x-)?([^/]+)$/, u = t.type;
            if (n.test(u) && (t.mimeType = u, t.type = u.replace(n, "$1")), Object(i.isYouTube)(t.file) ? t.type = "youtube" : Object(i.isRtmp)(t.file) ? t.type = "rtmp" : t.type || (t.type = Object(o.a)(t.file)), t.type) {
                switch (t.type) {
                    case"m3u8":
                    case"vnd.apple.mpegurl":
                        t.type = "hls";
                        break;
                    case"dash+xml":
                        t.type = "dash";
                        break;
                    case"m4a":
                        t.type = "aac";
                        break;
                    case"smil":
                        t.type = "rtmp"
                }
                return Object.keys(t).forEach((function (e) {
                    "" === t[e] && delete t[e]
                })), t
            }
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return v
    })), n.d(t, "b", (function () {
        return j
    }));
    var r = n(5), i = n(3), o = n(9), u = n(18), a = n(6);
    var c, s, l = "ontouchstart" in window, f = "PointerEvent" in window && !r.OS.android, d = !(f || l && r.OS.mobile),
        p = r.Features.passiveEvents, h = !!p && {passive: !0}, v = function (e) {
            var t, n;

            function r(t, n) {
                var r;
                r = e.call(this) || this;
                var i = !(n = n || {}).preventScrolling;
                return r.directSelect = !!n.directSelect, r.dragged = !1, r.enableDoubleTap = !1, r.el = t, r.handlers = {}, r.options = {}, r.lastClick = 0, r.lastStart = 0, r.passive = i, r.pointerId = null, r.startX = 0, r.startY = 0, r.event = null, r
            }

            n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
            var i = r.prototype;
            return i.on = function (t, n, r) {
                return m(t) && (this.handlers[t] || y[t](this)), e.prototype.on.call(this, t, n, r)
            }, i.off = function (t, n, r) {
                var i = this;
                if (m(t)) O(this, t); else if (!t) {
                    var o = this.handlers;
                    Object.keys(o).forEach((function (e) {
                        O(i, e)
                    }))
                }
                return e.prototype.off.call(this, t, n, r)
            }, i.destroy = function () {
                this.el && (this.off(), f && k(this), this.el = null)
            }, r
        }(o.a), g = /\s+/;

    function m(e) {
        return e && !(g.test(e) || "object" == typeof e)
    }

    function b(e) {
        if (!e.handlers.init) {
            var t = e.el, n = e.passive, r = !!p && {passive: n}, o = function (i) {
                if (Object(a.o)(t, "jw-tab-focus"), !function (e) {
                    if ("which" in e) return 3 === e.which;
                    if ("button" in e) return 2 === e.button;
                    return !1
                }(i)) {
                    var o = i.target, c = i.type;
                    if (!e.directSelect || o === t) {
                        var s = P(i), f = s.pageX, d = s.pageY;
                        if (e.dragged = !1, e.lastStart = Object(u.a)(), e.startX = f, e.startY = d, O(e, "window"), "pointerdown" === c && i.isPrimary) {
                            if (!n) {
                                var p = i.pointerId;
                                e.pointerId = p, t.setPointerCapture(p)
                            }
                            w(e, "window", "pointermove", l, r), w(e, "window", "pointercancel", h), w(e, "window", "pointerup", h), "BUTTON" === t.tagName && t.focus()
                        } else "mousedown" === c ? (w(e, "window", "mousemove", l, r), w(e, "window", "mouseup", h)) : "touchstart" === c && (w(e, "window", "touchmove", l, r), w(e, "window", "touchcancel", h), w(e, "window", "touchend", h), n || S(i))
                    }
                }
            }, l = function (t) {
                if (e.dragged) x(e, i.s, t); else {
                    var r = P(t), o = r.pageX, u = r.pageY, a = o - e.startX, c = u - e.startY;
                    a * a + c * c > 36 && (x(e, i.u, t), e.dragged = !0, x(e, i.s, t))
                }
                n || "touchmove" !== t.type || S(t)
            }, h = function (n) {
                if (clearTimeout(c), e.el) if (k(e), O(e, "window"), e.dragged) e.dragged = !1, x(e, i.t, n); else if (-1 === n.type.indexOf("cancel") && t.contains(n.target)) {
                    if (Object(u.a)() - e.lastStart > 500) return;
                    var r = "pointerup" === n.type || "pointercancel" === n.type,
                        o = "mouseup" === n.type || r && "mouse" === n.pointerType;
                    !function (e, t, n) {
                        if (e.enableDoubleTap) if (Object(u.a)() - e.lastClick < 300) {
                            var r = n ? i.q : i.r;
                            x(e, r, t), e.lastClick = 0
                        } else e.lastClick = Object(u.a)()
                    }(e, n, o), o ? x(e, i.n, n) : (x(e, i.sb, n), "touchend" !== n.type || p || S(n))
                }
            };
            f ? w(e, "init", "pointerdown", o, r) : (d && w(e, "init", "mousedown", o, r), w(e, "init", "touchstart", o, r)), s || (s = new v(document).on("interaction")), w(e, "init", "blur", (function () {
                Object(a.o)(t, "jw-tab-focus")
            })), w(e, "init", "focus", (function () {
                s.event && "keydown" === s.event.type && Object(a.a)(t, "jw-tab-focus")
            }))
        }
    }

    var y = {
        drag: function (e) {
            b(e)
        }, dragStart: function (e) {
            b(e)
        }, dragEnd: function (e) {
            b(e)
        }, click: function (e) {
            b(e)
        }, tap: function (e) {
            if (r.OS.iOS && r.OS.version.major < 11) {
                var t = document.body;
                t && (t.ontouchstart = t.ontouchstart || function () {
                })
            }
            b(e)
        }, doubleTap: function (e) {
            e.enableDoubleTap = !0, b(e)
        }, doubleClick: function (e) {
            e.enableDoubleTap = !0, b(e)
        }, longPress: function (e) {
            if (r.OS.iOS) {
                var t = function () {
                    clearTimeout(c)
                };
                w(e, "longPress", "touchstart", (function (n) {
                    t(), c = setTimeout((function () {
                        x(e, "longPress", n)
                    }), 500)
                })), w(e, "longPress", "touchmove", t), w(e, "longPress", "touchcancel", t), w(e, "longPress", "touchend", t)
            } else e.el.oncontextmenu = function (t) {
                return x(e, "longPress", t), !1
            }
        }, focus: function (e) {
            w(e, "focus", "focus", (function (t) {
                C(e, "focus", t)
            }))
        }, blur: function (e) {
            w(e, "blur", "blur", (function (t) {
                C(e, "blur", t)
            }))
        }, over: function (e) {
            (f || d) && w(e, i.Z, f ? "pointerover" : "mouseover", (function (t) {
                "touch" !== t.pointerType && x(e, i.Z, t)
            }))
        }, out: function (e) {
            if (f) {
                var t = e.el;
                w(e, i.Y, "pointerout", (function (n) {
                    if ("touch" !== n.pointerType && "x" in n) {
                        var r = document.elementFromPoint(n.x, n.y);
                        t.contains(r) || x(e, i.Y, n)
                    }
                }))
            } else d && w(e, i.Y, "mouseout", (function (t) {
                x(e, i.Y, t)
            }))
        }, move: function (e) {
            (f || d) && w(e, i.W, f ? "pointermove" : "mousemove", (function (t) {
                "touch" !== t.pointerType && x(e, i.W, t)
            }))
        }, enter: function (e) {
            w(e, i.v, "keydown", (function (t) {
                "Enter" !== t.key && 13 !== t.keyCode || (t.stopPropagation(), C(e, i.v, t))
            }))
        }, keydown: function (e) {
            w(e, "keydown", "keydown", (function (t) {
                C(e, "keydown", t)
            }), !1)
        }, gesture: function (e) {
            var t = function (t) {
                return x(e, "gesture", t)
            };
            w(e, "gesture", "click", t), w(e, "gesture", "keydown", t)
        }, interaction: function (e) {
            var t = function (t) {
                e.event = t
            };
            w(e, "interaction", "mousedown", t, !0), w(e, "interaction", "keydown", t, !0)
        }
    };

    function j(e) {
        var t = e.ownerDocument || e;
        return t.defaultView || t.parentWindow || window
    }

    function w(e, t, n, r, i) {
        void 0 === i && (i = h);
        var o = e.handlers[t], u = e.options[t];
        if (o || (o = e.handlers[t] = {}, u = e.options[t] = {}), o[n]) throw new Error(t + " " + n + " already registered");
        o[n] = r, u[n] = i;
        var a = e.el;
        ("window" === t ? j(a) : a).addEventListener(n, r, i)
    }

    function O(e, t) {
        var n = e.el, r = e.handlers, i = e.options, o = "window" === t ? j(n) : n, u = r[t], a = i[t];
        u && (Object.keys(u).forEach((function (e) {
            var t = a[e];
            "boolean" == typeof t ? o.removeEventListener(e, u[e], t) : o.removeEventListener(e, u[e])
        })), r[t] = null, i[t] = null)
    }

    function k(e) {
        var t = e.el;
        null !== e.pointerId && (t.releasePointerCapture(e.pointerId), e.pointerId = null)
    }

    function C(e, t, n) {
        var r = e.el, i = n.target;
        e.trigger(t, {type: t, sourceEvent: n, currentTarget: r, target: i})
    }

    function x(e, t, n) {
        var r = function (e, t, n) {
            var r, i = t.target, o = t.touches, u = t.changedTouches, a = t.pointerType;
            o || u ? (r = o && o.length ? o[0] : u[0], a = a || "touch") : (r = t, a = a || "mouse");
            var c = r, s = c.pageX, l = c.pageY;
            return {type: e, pointerType: a, pageX: s, pageY: l, sourceEvent: t, currentTarget: n, target: i}
        }(t, n, e.el);
        e.trigger(t, r)
    }

    function P(e) {
        return 0 === e.type.indexOf("touch") ? (e.originalEvent || e).changedTouches[0] : e
    }

    function S(e) {
        e.preventDefault && e.preventDefault()
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return c
    })), n.d(t, "d", (function () {
        return s
    })), n.d(t, "c", (function () {
        return l
    })), n.d(t, "a", (function () {
        return f
    }));
    var r, i = n(23), o = [{configName: "clearkey", keyName: "org.w3.clearkey"}, {
        configName: "widevine",
        keyName: "com.widevine.alpha"
    }, {configName: "playready", keyName: "com.microsoft.playready"}], u = [], a = {};

    function c(e) {
        return e.some((function (e) {
            return !!e.drm || e.sources.some((function (e) {
                return !!e.drm
            }))
        }))
    }

    function s(e) {
        return r || ((navigator.requestMediaKeySystemAccess && MediaKeySystemAccess.prototype.getConfiguration || window.MSMediaKeys) && Object(i.a)(e)("drm") ? (o.forEach((function (e) {
            var t, n, r = (t = e.keyName, n = [{
                initDataTypes: ["cenc"],
                videoCapabilities: [{contentType: 'video/mp4;codecs="avc1.4d401e"'}],
                audioCapabilities: [{contentType: 'audio/mp4;codecs="mp4a.40.2"'}]
            }], navigator.requestMediaKeySystemAccess ? navigator.requestMediaKeySystemAccess(t, n) : new Promise((function (e, n) {
                var r;
                try {
                    r = new window.MSMediaKeys(t)
                } catch (e) {
                    return void n(e)
                }
                e(r)
            }))).then((function () {
                a[e.configName] = !0
            })).catch((function () {
                a[e.configName] = !1
            }));
            u.push(r)
        })), r = Promise.all(u)) : Promise.resolve())
    }

    function l(e) {
        return a[e]
    }

    function f(e) {
        if (r) return Object.keys(e).some((function (e) {
            return l(e)
        }))
    }
}, , function (e, t, n) {
    "use strict";
    var r = n(0), i = n(19), o = n(8), u = n(12), a = n(2), c = n(32), s = n(16);

    function l(e, t) {
        this.name = e, this.message = t.message || t.toString(), this.error = t
    }

    var f = n(7), d = n(6), p = n(11), h = n(28), v = n(55), g = n(49), m = n(56);
    var b = Object(r.j)({}, u, o, i, {
        addClass: d.a,
        hasClass: d.i,
        removeClass: d.o,
        replaceClass: d.p,
        toggleClass: d.v,
        classList: d.d,
        styleDimension: d.u,
        createElement: d.e,
        emptyElement: d.h,
        addStyleSheet: d.b,
        bounds: d.c,
        openLink: d.l,
        replaceInnerHtml: d.q,
        css: p.b,
        clearCss: p.a,
        style: p.d,
        transform: p.e,
        getRgba: p.c,
        ajax: h.b,
        crossdomain: function (e) {
            var t = document.createElement("a"), n = document.createElement("a");
            t.href = location.href;
            try {
                return n.href = e, n.href = n.href, t.protocol + "//" + t.host != n.protocol + "//" + n.host
            } catch (e) {
            }
            return !0
        },
        tryCatch: function (e, t, n) {
            if (void 0 === n && (n = []), s.a.debug) return e.apply(t || this, n);
            try {
                return e.apply(t || this, n)
            } catch (t) {
                return new l(e.name, t)
            }
        },
        Error: l,
        Timer: c.a,
        log: g.a,
        genId: m.b,
        between: v.a,
        foreach: function (e, t) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
        },
        flashVersion: f.a,
        isIframe: f.m,
        indexOf: r.p,
        trim: a.i,
        pad: a.e,
        extension: a.a,
        hms: a.b,
        seconds: a.g,
        prefix: a.f,
        suffix: a.h,
        noop: function () {
        }
    });
    t.a = b
}, function (e, t, n) {
    "use strict";
    n.d(t, "c", (function () {
        return i
    })), n.d(t, "b", (function () {
        return o
    })), n.d(t, "a", (function () {
        return u
    }));
    var r = n(0), i = function (e) {
        return e.replace(/^(.*\/)?([^-]*)-?.*\.(js)$/, "$2")
    };

    function o(e) {
        return 305e3
    }

    function u(e, t, n) {
        var i = e.name, o = document.createElement("div");
        o.id = n.id + "_" + i, o.className = "jw-plugin jw-reset";
        var u = Object(r.j)({}, t), a = e.getNewInstance(n, u, o);
        return n.addPlugin(i, a), a
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return o
    })), n.d(t, "b", (function () {
        return u
    }));
    var r = n(10), i = null, o = {};

    function u() {
        return i || (i = n.e(1).then(function (e) {
            var t = n(21).default;
            return o.controls = t, t
        }.bind(null, n)).catch((function () {
            i = null, Object(r.c)(301130)()
        }))), i
    }
}, function (e, t, n) {
    "use strict";
    var r = document.createElement("video");
    t.a = r
}, function (e, t, n) {
    "use strict";
    t.a = {
        advertising: {
            admessage: "This ad will end in xx",
            cuetext: "Advertisement",
            displayHeading: "Advertisement",
            loadingAd: "Loading ad",
            podmessage: "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__.",
            skipmessage: "Skip ad in xx",
            skiptext: "Skip"
        },
        airplay: "AirPlay",
        audioTracks: "Audio Tracks",
        auto: "Auto",
        buffer: "Loading",
        cast: "Chromecast",
        cc: "Closed Captions",
        close: "Close",
        errors: {
            badConnection: "This video cannot be played because of a problem with your internet connection.",
            cantLoadPlayer: "Sorry, the video player failed to load.",
            cantPlayInBrowser: "The video cannot be played in this browser.",
            cantPlayVideo: "This video file cannot be played.",
            errorCode: "Error Code",
            liveStreamDown: "The live stream is either down or has ended.",
            protectedContent: "There was a problem providing access to protected content.",
            technicalError: "This video cannot be played because of a technical error."
        },
        exitFullscreen: "Exit Fullscreen",
        fullscreen: "Fullscreen",
        hd: "Quality",
        liveBroadcast: "Live",
        logo: "Logo",
        mute: "Mute",
        next: "Next",
        nextUp: "Next Up",
        notLive: "Not Live",
        off: "Off",
        pause: "Pause",
        play: "Play",
        playback: "Play",
        playbackRates: "Playback Rates",
        player: "Video Player",
        poweredBy: "Powered by",
        prev: "Previous",
        related: {autoplaymessage: "Next up in xx", heading: "More Videos"},
        replay: "Replay",
        rewind: "Rewind 10 Seconds",
        settings: "Settings",
        sharing: {copied: "Copied", email: "Email", embed: "Embed", heading: "Share", link: "Link"},
        slider: "Seek",
        stop: "Stop",
        unmute: "Unmute",
        videoInfo: "About This Video",
        volume: "Volume",
        volumeSlider: "Volume",
        shortcuts: {
            playPause: "Play/Pause",
            volumeToggle: "Mute/Unmute",
            fullscreenToggle: "Fullscreen/Exit Fullscreen",
            seekPercent: "Seek %",
            keyboardShortcuts: "Keyboard Shortcuts",
            increaseVolume: "Increase Volume",
            decreaseVolume: "Decrease Volume",
            seekForward: "Seek Forward",
            seekBackward: "Seek Backward",
            spacebar: "SPACE",
            captionsToggle: "Captions On/Off"
        },
        captionsStyles: {
            subtitleSettings: "Subtitle Settings",
            color: "Font Color",
            fontOpacity: "Font Opacity",
            userFontScale: "Font Size",
            fontFamily: "Font Family",
            edgeStyle: "Character Edge",
            backgroundColor: "Background Color",
            backgroundOpacity: "Background Opacity",
            windowColor: "Window Color",
            windowOpacity: "Window Opacity",
            white: "White",
            black: "Black",
            red: "Red",
            green: "Green",
            blue: "Blue",
            yellow: "Yellow",
            magenta: "Magenta",
            cyan: "Cyan",
            none: "None",
            raised: "Raised",
            depressed: "Depressed",
            uniform: "Uniform",
            dropShadow: "Drop Shadow"
        },
        disabled: "Disabled",
        enabled: "Enabled",
        reset: "Reset"
    }
}, function (e, t) {
    var n, r, i = {}, o = {}, u = (n = function () {
        return document.head || document.getElementsByTagName("head")[0]
    }, function () {
        return void 0 === r && (r = n.apply(this, arguments)), r
    });

    function a(e) {
        var t = document.createElement("style");
        return t.type = "text/css", t.setAttribute("data-jwplayer-id", e), function (e) {
            u().appendChild(e)
        }(t), t
    }

    function c(e, t) {
        var n, r, i, u = o[e];
        u || (u = o[e] = {element: a(e), counter: 0});
        var c = u.counter++;
        return n = u.element, i = function () {
            f(n, c, "")
        }, (r = function (e) {
            f(n, c, e)
        })(t.css), function (e) {
            if (e) {
                if (e.css === t.css && e.media === t.media) return;
                r((t = e).css)
            } else i()
        }
    }

    e.exports = {
        style: function (e, t) {
            !function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n], o = (i[e] || {})[r.id];
                    if (o) {
                        for (var u = 0; u < o.parts.length; u++) o.parts[u](r.parts[u]);
                        for (; u < r.parts.length; u++) o.parts.push(c(e, r.parts[u]))
                    } else {
                        var a = [];
                        for (u = 0; u < r.parts.length; u++) a.push(c(e, r.parts[u]));
                        i[e] = i[e] || {}, i[e][r.id] = {id: r.id, parts: a}
                    }
                }
            }(t, function (e) {
                for (var t = [], n = {}, r = 0; r < e.length; r++) {
                    var i = e[r], o = i[0], u = i[1], a = i[2], c = {css: u, media: a};
                    n[o] ? n[o].parts.push(c) : t.push(n[o] = {id: o, parts: [c]})
                }
                return t
            }(e))
        }, clear: function (e, t) {
            var n = i[e];
            if (!n) return;
            if (t) {
                var r = n[t];
                if (r) for (var o = 0; o < r.parts.length; o += 1) r.parts[o]();
                return
            }
            for (var u = Object.keys(n), a = 0; a < u.length; a += 1) for (var c = n[u[a]], s = 0; s < c.parts.length; s += 1) c.parts[s]();
            delete i[e]
        }
    };
    var s, l = (s = [], function (e, t) {
        return s[e] = t, s.filter(Boolean).join("\n")
    });

    function f(e, t, n) {
        if (e.styleSheet) e.styleSheet.cssText = l(t, n); else {
            var r = document.createTextNode(n), i = e.childNodes[t];
            i ? e.replaceChild(r, i) : e.appendChild(r)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(17), o = n(13), u = n(33), a = n(10);

    function c(e) {
        this.config = e || {}
    }

    var s = {
        html5: function () {
            return n.e(15).then(function (e) {
                var t = n(53).default;
                return Object(o.a)(t), t
            }.bind(null, n)).catch(Object(a.b)(152))
        }
    };
    Object(r.j)(c.prototype, {
        load: function (e) {
            var t = s[e], n = function () {
                return Promise.reject(new Error("Failed to load media"))
            };
            return t ? t().then((function () {
                var t = u.a[e];
                return t || n()
            })) : n()
        }, providerSupports: function (e, t) {
            return e.supports(t)
        }, choose: function (e) {
            if (e === Object(e)) for (var t = i.a.length, n = 0; n < t; n++) {
                var r = i.a[n];
                if (this.providerSupports(r, e)) return {
                    priority: t - n - 1,
                    name: r.name,
                    type: e.type,
                    providerToCheck: r,
                    provider: u.a[r.name]
                }
            }
            return {}
        }
    });
    var l, f = c;
    Object(r.j)(s, {
        shaka: function () {
            return n.e(16).then(function (e) {
                var t = n(170).default;
                return Object(o.a)(t), t
            }.bind(null, n)).catch(Object(a.b)(154))
        }, hlsjs: function () {
            return n.e(13).then(function (e) {
                var t = n(166).default;
                return t.setEdition && t.setEdition(l), Object(o.a)(t), t
            }.bind(null, n)).catch(Object(a.b)(153))
        }, flash: function () {
            return n.e(12).then(function (e) {
                var t = n(172).default;
                return Object(o.a)(t), t
            }.bind(null, n)).catch(Object(a.b)(151))
        }, hlsjsProgressive: function () {
            return n.e(14).then(function (e) {
                var t = n(167).default;
                return t.setEdition(l), Object(o.a)(t), t
            }.bind(null, n)).catch(Object(a.b)(155))
        }
    }), f.prototype.providerSupports = function (e, t) {
        return l = this.config.edition, e.supports(t, l)
    };
    t.a = f
}, function (e, t, n) {
    "use strict";
    var r = n(6), i = n(11);

    function o(e, t) {
        var n = t.message, o = t.code, u = function (e, t, n, r) {
                return '<div id="' + e + '" class="jw-error jw-reset"><div class="jw-error-msg jw-info-overlay jw-reset"><style>[id="' + e + '"].jw-error{background:#000;overflow:hidden;position:relative}[id="' + e + '"] .jw-error-msg{top:50%;left:50%;position:absolute;transform:translate(-50%,-50%)}[id="' + e + '"] .jw-error-text{text-align:start;color:#FFF;font:14px/1.35 Arial,Helvetica,sans-serif}</style><div class="jw-icon jw-reset"></div><div class="jw-info-container jw-reset"><div class="jw-error-text jw-reset-text" dir="auto">' + (t || "") + '<span class="jw-break jw-reset"></span>' + (r ? ("(" + n + ": " + r + ")").replace(/\s+/g, "&nbsp;") : "") + "</div></div></div></div>"
            }(e.get("id"), n, e.get("localization").errors.errorCode, o.toString()), a = e.get("width"),
            c = e.get("height"), s = Object(r.e)(u);
        return Object(i.d)(s, {
            width: a.toString().indexOf("%") > 0 ? a : a + "px",
            height: c.toString().indexOf("%") > 0 ? c : c + "px"
        }), s
    }

    n.d(t, "a", (function () {
        return o
    }))
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return e.slice && "px" === e.slice(-2) && (e = e.slice(0, -2)), e
    }

    function i(e, t) {
        if (-1 === t.toString().indexOf("%")) return 0;
        if ("string" != typeof e || !e) return 0;
        if (/^\d*\.?\d+%$/.test(e)) return e;
        var n = e.indexOf(":");
        if (-1 === n) return 0;
        var r = parseFloat(e.substr(0, n)), i = parseFloat(e.substr(n + 1));
        return r <= 0 || i <= 0 ? 0 : i / r * 100 + "%"
    }

    n.d(t, "b", (function () {
        return r
    })), n.d(t, "a", (function () {
        return i
    }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var r = window.atob
}, function (e, t, n) {
    "use strict";
    var r = n(4), i = n(2);

    function o(e) {
        var t = {
            zh: "Chinese",
            nl: "Dutch",
            en: "English",
            fr: "French",
            de: "German",
            it: "Italian",
            ja: "Japanese",
            pt: "Portuguese",
            ru: "Russian",
            es: "Spanish"
        };
        return t[e] ? t[e] : e
    }

    function u(e) {
        for (var t = [], n = 0; n < Object(r.c)(e); n++) {
            var i = e.childNodes[n];
            "jwplayer" === i.prefix && "mediatypes" === Object(r.b)(i).toLowerCase() && t.push(Object(r.d)(i))
        }
        return t
    }

    var a = function e(t, n) {
        for (var a = [], c = 0; c < Object(r.c)(t); c++) {
            var s = t.childNodes[c];
            if ("media" === s.prefix) {
                if (!Object(r.b)(s)) continue;
                switch (Object(r.b)(s).toLowerCase()) {
                    case"content":
                        if (Object(i.j)(s, "duration") && (n.duration = Object(i.g)(Object(i.j)(s, "duration"))), Object(i.j)(s, "url")) {
                            n.sources || (n.sources = []);
                            var l = {
                                file: Object(i.j)(s, "url"),
                                type: Object(i.j)(s, "type"),
                                width: Object(i.j)(s, "width"),
                                label: Object(i.j)(s, "label")
                            }, f = u(s);
                            f.length && (l.mediaTypes = f), n.sources.push(l)
                        }
                        Object(r.c)(s) > 0 && (n = e(s, n));
                        break;
                    case"title":
                        n.title = Object(r.d)(s);
                        break;
                    case"description":
                        n.description = Object(r.d)(s);
                        break;
                    case"guid":
                        n.mediaid = Object(r.d)(s);
                        break;
                    case"thumbnail":
                        n.image || (n.image = Object(i.j)(s, "url"));
                        break;
                    case"group":
                        e(s, n);
                        break;
                    case"subtitle":
                        var d = {file: Object(i.j)(s, "url"), kind: "captions"};
                        Object(i.j)(s, "lang").length > 0 && (d.label = o(Object(i.j)(s, "lang"))), a.push(d)
                }
            }
        }
        n.tracks || (n.tracks = []);
        for (var p = 0; p < a.length; p++) n.tracks.push(a[p]);
        return n
    }, c = n(12), s = function (e, t) {
        for (var n = "default", o = [], u = [], a = 0; a < e.childNodes.length; a++) {
            var s = e.childNodes[a];
            if ("jwplayer" === s.prefix) {
                var l = Object(r.b)(s);
                "source" === l ? (delete t.sources, o.push({
                    file: Object(i.j)(s, "file"),
                    default: Object(i.j)(s, n),
                    label: Object(i.j)(s, "label"),
                    type: Object(i.j)(s, "type")
                })) : "track" === l ? (delete t.tracks, u.push({
                    file: Object(i.j)(s, "file"),
                    default: Object(i.j)(s, n),
                    kind: Object(i.j)(s, "kind"),
                    label: Object(i.j)(s, "label")
                })) : (t[l] = Object(c.serialize)(Object(r.d)(s)), "file" === l && t.sources && delete t.sources)
            }
            t.file || (t.file = t.link)
        }
        if (o.length) {
            t.sources = [];
            for (var f = 0; f < o.length; f++) {
                var d = o[f];
                d.file.length > 0 && (d[n] = "true" === o[f][n], d.label || delete d.label, t.sources.push(d))
            }
        }
        if (u.length) {
            t.tracks = [];
            for (var p = 0; p < u.length; p++) {
                var h = u[p];
                h.file && h.file.length > 0 && (h[n] = "true" === u[p][n], h.kind = u[p].kind.length ? u[p].kind : "captions", h.label || delete h.label, t.tracks.push(h))
            }
        }
        return t
    }, l = n(30);

    function f(e) {
        var t = [];
        t.feedData = {};
        for (var n = 0; n < Object(r.c)(e); n++) {
            var i = Object(r.a)(e, n);
            if ("channel" === Object(r.b)(i).toLowerCase()) for (var o = 0; o < Object(r.c)(i); o++) {
                var u = Object(r.a)(i, o), a = Object(r.b)(u).toLowerCase();
                "item" === a ? t.push(d(u)) : a && (t.feedData[a] = Object(r.d)(u))
            }
        }
        return t
    }

    function d(e) {
        for (var t = {}, n = 0; n < e.childNodes.length; n++) {
            var o = e.childNodes[n], u = Object(r.b)(o);
            if (u) switch (u.toLowerCase()) {
                case"enclosure":
                    t.file = Object(i.j)(o, "url");
                    break;
                case"title":
                    t.title = Object(r.d)(o);
                    break;
                case"guid":
                    t.mediaid = Object(r.d)(o);
                    break;
                case"pubdate":
                    t.date = Object(r.d)(o);
                    break;
                case"description":
                    t.description = Object(r.d)(o);
                    break;
                case"link":
                    t.link = Object(r.d)(o);
                    break;
                case"category":
                    t.tags ? t.tags += Object(r.d)(o) : t.tags = Object(r.d)(o)
            }
        }
        return new l.a(s(e, a(e, t)))
    }

    n.d(t, "a", (function () {
        return f
    }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var r = "function" == typeof console.log ? console.log.bind(console) : function () {
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return o
    }));
    var r = n(47);

    function i(e) {
        for (var t = new Array(Math.ceil(e.length / 4)), n = 0; n < t.length; n++) t[n] = e.charCodeAt(4 * n) + (e.charCodeAt(4 * n + 1) << 8) + (e.charCodeAt(4 * n + 2) << 16) + (e.charCodeAt(4 * n + 3) << 24);
        return t
    }

    function o(e, t) {
        if (e = String(e), t = String(t), 0 === e.length) return "";
        for (var n, o, u, a = i(Object(r.a)(e)), c = i((n = t, unescape(encodeURIComponent(n))).slice(0, 16)), s = a.length, l = a[s - 1], f = a[0], d = 2654435769 * Math.floor(6 + 52 / s); d;) {
            u = d >>> 2 & 3;
            for (var p = s - 1; p >= 0; p--) o = ((l = a[p > 0 ? p - 1 : s - 1]) >>> 5 ^ f << 2) + (f >>> 3 ^ l << 4) ^ (d ^ f) + (c[3 & p ^ u] ^ l), f = a[p] -= o;
            d -= 2654435769
        }
        return function (e) {
            try {
                return decodeURIComponent(escape(e))
            } catch (t) {
                return e
            }
        }(function (e) {
            for (var t = new Array(e.length), n = 0; n < e.length; n++) t[n] = String.fromCharCode(255 & e[n], e[n] >>> 8 & 255, e[n] >>> 16 & 255, e[n] >>> 24 & 255);
            return t.join("")
        }(a).replace(/\0+$/, ""))
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return r
    })), n.d(t, "a", (function () {
        return i
    }));
    var r = window.requestAnimationFrame || function (e) {
        return setTimeout(e, 17)
    }, i = window.cancelAnimationFrame || clearTimeout
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return r
    })), n.d(t, "a", (function () {
        return i
    }));
    var r = {
        audioMode: !1,
        flashBlocked: !1,
        item: 0,
        itemMeta: {},
        playbackRate: 1,
        playRejected: !1,
        state: n(3).nb,
        itemReady: !1,
        controlsEnabled: !1
    }, i = {position: 0, duration: 0, buffer: 0, currentTime: 0}
}, , function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return l
    })), n.d(t, "c", (function () {
        return f
    }));
    var r = n(0), i = n(46), o = n(19), u = n(12), a = n(5), c = n(42), s = n(14), l = {
        autoPause: {viewability: !1, pauseAds: !1},
        autostart: !1,
        bandwidthEstimate: null,
        bitrateSelection: null,
        castAvailable: !1,
        controls: !0,
        cues: [],
        defaultPlaybackRate: 1,
        displaydescription: !0,
        displaytitle: !0,
        displayPlaybackLabel: !1,
        enableShortcuts: !0,
        height: 360,
        intl: {},
        language: "en",
        liveTimeout: null,
        localization: c.a,
        mute: !1,
        nextUpDisplay: !0,
        playbackRateControls: !1,
        playbackRates: [.5, 1, 1.25, 1.5, 2],
        renderCaptionsNatively: !1,
        repeat: !1,
        stretching: "uniform",
        volume: 90,
        width: 640
    };

    function f(e) {
        return e ? e < 5 ? 5 : e > 30 ? 30 : e : 25
    }

    t.b = function (e, t) {
        var d = Object(r.j)({}, (window.jwplayer || {}).defaults, t, e);
        !function (e) {
            Object.keys(e).forEach((function (t) {
                "id" !== t && (e[t] = Object(u.serialize)(e[t]))
            }))
        }(d);
        var p = d.forceLocalizationDefaults ? l.language : Object(s.e)(), h = Object(s.j)(d.intl);
        d.localization = Object(s.a)(c.a, Object(s.c)(d, h, p));
        var v = Object(r.j)({}, l, d);
        "." === v.base && (v.base = Object(o.getScriptPath)("jwplayer.js")), v.base = (v.base || Object(o.loadFrom)()).replace(/\/?$/, "/"), n.p = v.base, v.width = Object(i.b)(v.width), v.height = Object(i.b)(v.height), v.aspectratio = Object(i.a)(v.aspectratio, v.width), v.volume = Object(r.z)(v.volume) ? Math.min(Math.max(0, v.volume), 100) : l.volume, v.mute = !!v.mute, v.language = p, v.intl = h;
        var g = d.autoPause;
        g && (v.autoPause.viewability = !("viewability" in g) || !!g.viewability);
        var m = v.playbackRateControls;
        if (m) {
            var b = v.playbackRates;
            Array.isArray(m) && (b = m), (b = b.filter((function (e) {
                return Object(r.v)(e) && e >= .25 && e <= 4
            })).map((function (e) {
                return Math.round(100 * e) / 100
            }))).indexOf(1) < 0 && b.push(1), b.sort(), v.playbackRateControls = !0, v.playbackRates = b
        }
        (!v.playbackRateControls || v.playbackRates.indexOf(v.defaultPlaybackRate) < 0) && (v.defaultPlaybackRate = 1), v.playbackRate = v.defaultPlaybackRate, v.aspectratio || delete v.aspectratio;
        var y = v.playlist;
        if (y) Array.isArray(y.playlist) && (v.feedData = y, v.playlist = y.playlist); else {
            var j = Object(r.D)(v, ["title", "description", "type", "mediaid", "image", "images", "file", "sources", "tracks", "preload", "duration"]);
            v.playlist = [j]
        }
        v.qualityLabels = v.qualityLabels || v.hlslabels, delete v.duration;
        var w = v.liveTimeout;
        null !== w && (Object(r.z)(w) ? 0 !== w && (w = Math.max(30, w)) : w = null, v.liveTimeout = w);
        var O, k, C = parseFloat(v.bandwidthEstimate), x = parseFloat(v.bitrateSelection);
        return v.bandwidthEstimate = Object(r.z)(C) ? C : (O = v.defaultBandwidthEstimate, k = parseFloat(O), Object(r.z)(k) ? Math.max(k, 1) : l.bandwidthEstimate), v.bitrateSelection = Object(r.z)(x) ? x : l.bitrateSelection, v.liveSyncDuration = f(v.liveSyncDuration), v.backgroundLoading = Object(r.r)(v.backgroundLoading) ? v.backgroundLoading : a.Features.backgroundLoading, v
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var r = function (e, t, n) {
        return Math.max(Math.min(e, n), t)
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    })), n.d(t, "b", (function () {
        return o
    }));
    var r = 12;

    function i() {
        try {
            var e = window.crypto || window.msCrypto;
            if (e && e.getRandomValues) return e.getRandomValues(new Uint32Array(1))[0].toString(36)
        } catch (e) {
        }
        return Math.random().toString(36).slice(2, 9)
    }

    function o(e) {
        for (var t = ""; t.length < e;) t += i();
        return t.slice(0, e)
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return r
    }));
    var r = function (e) {
        var t, n;

        function r() {
            var t;
            return (t = e.call(this) || this).attributes = Object.create(null), t
        }

        n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
        var i = r.prototype;
        return i.addAttributes = function (e) {
            var t = this;
            Object.keys(e).forEach((function (n) {
                t.add(n, e[n])
            }))
        }, i.add = function (e, t) {
            var n = this;
            Object.defineProperty(this, e, {
                get: function () {
                    return n.attributes[e]
                }, set: function (t) {
                    return n.set(e, t)
                }, enumerable: !1
            }), this.attributes[e] = t
        }, i.get = function (e) {
            return this.attributes[e]
        }, i.set = function (e, t) {
            if (this.attributes[e] !== t) {
                var n = this.attributes[e];
                this.attributes[e] = t, this.trigger("change:" + e, this, t, n)
            }
        }, i.clone = function () {
            var e = {}, t = this.attributes;
            if (t) for (var n in t) e[n] = t[n];
            return e
        }, i.change = function (e, t, n) {
            this.on("change:" + e, t, n);
            var r = this.get(e);
            return t.call(n, this, r, r), this
        }, r
    }(n(9).a)
}, function (e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = [], i = {};

        function o() {
            for (; r.length > 0;) {
                var t = r.shift(), n = t.command, o = t.args;
                (i[n] || e[n]).apply(e, o)
            }
        }

        t.forEach((function (t) {
            var u = e[t];
            i[t] = u, e[t] = function () {
                for (var e = arguments.length, i = new Array(e), a = 0; a < e; a++) i[a] = arguments[a];
                n() ? r.push({command: t, args: i}) : (o(), u && u.apply(this, i))
            }
        })), Object.defineProperty(this, "queue", {
            enumerable: !0, get: function () {
                return r
            }
        }), this.flush = o, this.empty = function () {
            r.length = 0
        }, this.off = function () {
            t.forEach((function (t) {
                var n = i[t];
                n && (e[t] = n, delete i[t])
            }))
        }, this.destroy = function () {
            this.off(), this.empty()
        }
    }

    n.d(t, "a", (function () {
        return r
    }))
}, function (e, t, n) {
    "use strict";
    n.d(t, "c", (function () {
        return r
    })), n.d(t, "b", (function () {
        return i
    })), n.d(t, "a", (function () {
        return o
    }));
    var r = 4, i = 5, o = 1
}, function (e, t, n) {
    "use strict";
    var r = n(3), i = function () {
    }, o = function () {
        return !1
    }, u = {name: "default"}, a = {
        supports: o,
        play: i,
        pause: i,
        preload: i,
        load: i,
        stop: i,
        volume: i,
        mute: i,
        seek: i,
        resize: i,
        remove: i,
        destroy: i,
        setVisibility: i,
        setFullscreen: i,
        getFullscreen: o,
        supportsFullscreen: o,
        getContainer: i,
        setContainer: i,
        getName: function () {
            return u
        },
        getQualityLevels: i,
        getCurrentQuality: i,
        setCurrentQuality: i,
        getAudioTracks: i,
        getCurrentAudioTrack: i,
        setCurrentAudioTrack: i,
        getSeekRange: function () {
            return {start: 0, end: this.getDuration()}
        },
        setPlaybackRate: i,
        getPlaybackRate: function () {
            return 1
        },
        getBandwidthEstimate: function () {
            return null
        },
        getLiveLatency: function () {
            return null
        },
        setControls: i,
        attachMedia: i,
        detachMedia: i,
        init: i,
        setState: function (e) {
            this.state = e, this.trigger(r.bb, {newstate: e})
        },
        sendMediaType: function (e) {
            var t = e[0], n = t.type, i = t.mimeType,
                o = "aac" === n || "mp3" === n || "mpeg" === n || i && 0 === i.indexOf("audio/");
            this.trigger(r.T, {mediaType: o ? "audio" : "video"})
        }
    };
    t.a = a
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(24), o = n(12), u = n(2), a = n(1), c = n(20), s = function (e) {
        if ("string" == typeof e) {
            var t = (e = e.split("?")[0]).indexOf("://");
            if (t > 0) return 0;
            var n = e.indexOf("/"), r = Object(u.a)(e);
            return !(t < 0 && n < 0) || r && isNaN(r) ? 1 : 2
        }
    };
    var l = function (e) {
        this.url = e, this.promise_ = null
    };
    Object.defineProperties(l.prototype, {
        promise: {
            get: function () {
                return this.promise_ || this.load()
            }, set: function () {
            }
        }
    }), Object(r.j)(l.prototype, {
        load: function () {
            var e = this, t = this.promise_;
            if (!t) {
                if (2 === s(this.url)) t = Promise.resolve(this); else {
                    var n = new i.a(function (e) {
                        switch (s(e)) {
                            case 0:
                                return e;
                            case 1:
                                return Object(o.getAbsolutePath)(e, window.location.href)
                        }
                    }(this.url));
                    this.loader = n, t = n.load().then((function () {
                        return e
                    }))
                }
                this.promise_ = t
            }
            return t
        }, registerPlugin: function (e, t, n) {
            this.name = e, this.target = t, this.js = n
        }, getNewInstance: function (e, t, n) {
            var r = this.js;
            if ("function" != typeof r) throw new a.s(null, Object(c.b)(this.url) + 100);
            var i = new r(e, t, n);
            return i.addToPlayer = function () {
                var t = e.getContainer().querySelector(".jw-overlays");
                t && (n.left = t.style.left, n.top = t.style.top, t.appendChild(n), i.displayArea = t)
            }, i.resizeHandler = function () {
                var e = i.displayArea;
                e && i.resize(e.clientWidth, e.clientHeight)
            }, i
        }
    }), t.a = l
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(3), o = n(4), u = n(48), a = n(28), c = n(9), s = n(1);
    t.a = function () {
        var e = Object(r.j)(this, c.a);

        function t(t) {
            try {
                var a, c = t.responseXML ? t.responseXML.childNodes : null, l = null;
                if (c) {
                    for (var f = 0; f < c.length && 8 === (l = c[f]).nodeType; f++) ;
                    if (l && "xml" === Object(o.b)(l) && (l = l.nextSibling), l && "rss" === Object(o.b)(l)) {
                        var d = Object(u.a)(l);
                        a = Object(r.j)({playlist: d}, d.feedData)
                    }
                }
                if (!a) try {
                    var p = JSON.parse(t.responseText);
                    if (Array.isArray(p)) a = {playlist: p}; else {
                        if (!Array.isArray(p.playlist)) throw Error("Playlist is not an array");
                        a = p
                    }
                } catch (e) {
                    throw new s.s(s.o, 621, e)
                }
                e.trigger(i.eb, a)
            } catch (e) {
                n(e)
            }
        }

        function n(t) {
            t instanceof s.s && !t.code && (t = new s.s(s.o, 0)), e.trigger(i.w, t)
        }

        this.load = function (e) {
            Object(a.b)(e, t, (function (e, t, r, i) {
                n(i)
            }))
        }, this.destroy = function () {
            this.off()
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "b", (function () {
        return i
    })), n.d(t, "a", (function () {
        return u
    }));
    var r = n(59);

    function i() {
        for (var e = r.c, t = [], n = [], i = 0; i < e; i++) {
            var a = u();
            t.push(a), n.push(a), o(a)
        }
        var c = n.shift(), s = n.shift(), l = !1;
        return {
            primed: function () {
                return l
            }, prime: function () {
                t.forEach(o), l = !0
            }, played: function () {
                l = !0
            }, getPrimedElement: function () {
                return n.shift() || null
            }, getAdElement: function () {
                return c
            }, getTestElement: function () {
                return s
            }, clean: function (e) {
                if (e.src) {
                    e.removeAttribute("src");
                    try {
                        e.load()
                    } catch (e) {
                    }
                }
            }, recycle: function (e) {
                e && !n.some((function (t) {
                    return t === e
                })) && (this.clean(e), n.push(e))
            }, syncVolume: function (e) {
                var n = Math.min(Math.max(0, e / 100), 1);
                t.forEach((function (e) {
                    e.volume = n
                }))
            }, syncMute: function (e) {
                t.forEach((function (t) {
                    t.muted = e
                }))
            }
        }
    }

    function o(e) {
        e.src || e.load()
    }

    function u(e) {
        var t = document.createElement("video");
        return t.className = "jw-video jw-reset", t.setAttribute("tabindex", "-1"), t.setAttribute("disableRemotePlayback", ""), t.setAttribute("webkit-playsinline", ""), t.setAttribute("playsinline", ""), e && Object.keys(e).forEach((function (n) {
            t.setAttribute(n, e[n])
        })), t
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    }));
    var r = n(0);

    function i(e, t) {
        return Object(r.j)({}, t, {
            prime: function () {
                e.src || e.load()
            }, getPrimedElement: function () {
                return e
            }, clean: function () {
                t.clean(e)
            }, recycle: function () {
                t.clean(e)
            }
        })
    }
}, function (e, t, n) {
    "use strict";
    t.a = "hidden" in document ? function () {
        return !document.hidden
    } : "webkitHidden" in document ? function () {
        return !document.webkitHidden
    } : function () {
        return !0
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        return !!(e = e || window.event) && /^(?:mouse|pointer|touch|gesture|click|key)/.test(e.type)
    }

    n.d(t, "a", (function () {
        return r
    }))
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(58), o = n(54), u = n(19), a = n(8), c = n(26), s = n(23);

    function l(e, t) {
        var n = e.querySelector(t);
        if (n) return n.getAttribute("content")
    }

    var f = n(70), d = n.n(f), p = n(69);

    function h(e) {
        return "string" == typeof e && /^\/\/(?:content\.jwplatform|cdn\.jwplayer)\.com\//.test(e)
    }

    function v(e) {
        return "https:" + e
    }

    function g(e, t) {
        var n = "file:" === window.location.protocol ? "https:" : "", r = {
            bidding: "//ssl.p.jwpcdn.com/player/plugins/bidding/v/0.3.7/bidding.js",
            jwpsrv: "//ssl.p.jwpcdn.com/player/v/8.13.8/jwpsrv.js",
            dai: "//ssl.p.jwpcdn.com/player/plugins/dai/v/0.4.13/dai.js",
            vast: "//ssl.p.jwpcdn.com/player/plugins/vast/v/8.7.14/vast.js",
            googima: t ? "//ssl.p.jwpcdn.com/player/v/8.13.8/googimanvmp.js" : "//ssl.p.jwpcdn.com/player/plugins/googima/v/8.7.15/googima.js",
            freewheel: "//ssl.p.jwpcdn.com/player/plugins/freewheel/v/2.2.10/freewheel.js",
            gapro: "//ssl.p.jwpcdn.com/player/plugins/gapro/v/2.1.5/gapro.js"
        }[e];
        return r ? n + r : ""
    }

    function m(e, t, n) {
        t && (e[t.client || g(n)] = t, delete t.client)
    }

    var b = function (e, t) {
        var i, f, b, y = Object(o.b)(e, t), j = y.key || window.jwplayer && window.jwplayer.key, w = new c.b(j),
            O = w.edition();
        if ("free" === w.edition() && (y = Object(r.j)({
            skin: {active: "#ff0046", timeslider: {progress: "none"}},
            logo: {position: "control-bar", file: d.a}
        }, o.a, Object(r.D)(y, ["analytics", "aspectratio", "base", "file", "height", "playlist", "sources", "width"]))), y.key = j, y.edition = O, y.error = w.error(), y.generateSEOMetadata = y.generateSEOMetadata || !1, "unlimited" === O) {
            var k = Object(u.getScriptPath)("jwplayer.js");
            if (!k) throw new Error("Error setting up player: Could not locate jwplayer.js script tag");
            n.p = k
        }
        if (y.flashplayer = function (e) {
            var t = e.flashplayer;
            t || (t = (Object(u.getScriptPath)("jwplayer.js") || e.base) + "jwplayer.flash.swf");
            "http:" === window.location.protocol && (t = t.replace(/^https/, "http"));
            return t
        }(y), y.related = function (e) {
            var t = Object(s.a)(e.edition), n = e.related, i = !t("discovery") || n !== Object(n),
                o = !n || "none" !== n.displayMode, u = n || {}, a = void 0 === u.oncomplete ? "none" : u.oncomplete,
                c = u.autoplaytimer;
            !1 === a || e.repeat ? a = "hide" : "none" === a && (c = 0);
            var l = "autoplay" === a && c <= 0 || "none" === a;
            return Object(r.j)({}, n, {
                disableRelated: i,
                showButton: o,
                oncomplete: a,
                autoplaytimer: c,
                shouldAutoAdvance: l
            })
        }(y), y.ab && (y.ab = function (e) {
            var t = e.ab;
            t.clone && (t = t.clone());
            return Object.keys(t.tests).forEach((function (n) {
                t.tests[n].forEach((function (t) {
                    t.addConfig && t.addConfig(e, t.selection)
                }))
            })), t
        }(y)), y.plugins = function (e) {
            var t = Object(r.j)({}, e.plugins), n = Object(s.a)(e.edition);
            if (n("ads")) {
                var i = Object(r.j)({}, e.advertising), o = i.client;
                if (o) {
                    var u = g(o, e.__ab_jwIMA) || o;
                    t[u] = i, delete i.client
                }
                i.bids && m(t, i.bids, "bidding")
            }
            if (n("jwpsrv")) {
                var a = e.analytics;
                a !== Object(a) && (a = {}), m(t, a, "jwpsrv")
            }
            return m(t, e.ga, "gapro"), t
        }(y), i = y.playlist, Object(r.x)(i) && i.indexOf("__CONTEXTUAL__") > -1 && (y.playlist = function (e, t) {
            var n = (e.querySelector("title") || {}).textContent, r = l(e, 'meta[property="og:title"]'),
                i = encodeURIComponent(r || n || ""),
                o = l(e, 'meta[property="og:description"]') || l(e, 'meta[name="description"]');
            return o && (i += "&page_description=" + encodeURIComponent(o)), t.replace("__CONTEXTUAL__", i)
        }(document, y.playlist), y.contextual = !0), Object(a.isFileProtocol)()) {
            var C = y, x = C.playlist, P = C.related;
            h(x) && (y.playlist = v(x)), P && h(P.file) && (P.file = v(P.file))
        }
        return y.__abSendDomainToFeeds && (b = y.playlist, /\.jwplatform.com|\.jwplayer.com/.test(b)) && (y.playlist = (f = y.playlist, f += (-1 !== f.indexOf("?") ? "&" : "?") + "page_domain=" + encodeURIComponent(Object(p.a)()))), y
    }, y = n(10), j = n(25), w = n(3), O = n(62), k = n(29), C = n(24), x = n(1), P = n(14);

    function S(e) {
        var t = e.get("playlist");
        return new Promise((function (n, r) {
            if ("string" != typeof t) {
                var i = e.get("feedData") || {};
                return T(e, t, i), n()
            }
            var o = new O.a;
            o.on(w.eb, (function (t) {
                var r = t.playlist;
                delete t.playlist, T(e, r, t), n()
            })), o.on(w.w, (function (t) {
                T(e, [], {}), r(Object(x.z)(t, x.u))
            })), o.load(t)
        }))
    }

    function T(e, t, n) {
        var r = e.attributes;
        r.playlist = Object(k.a)(t), r.feedData = n
    }

    function E(e) {
        return e.attributes._destroyed
    }

    var A = n(36);

    function _(e) {
        return M(e) ? Promise.resolve() : S(e).then((function () {
            if (e.get("drm") || Object(A.b)(e.get("playlist"))) return Object(A.d)(e.get("edition"))
        })).then((function () {
            return S(t = e).then((function () {
                if (!E(t)) {
                    var e = Object(k.b)(t.get("playlist"), t);
                    t.attributes.playlist = e;
                    try {
                        Object(k.e)(e)
                    } catch (e) {
                        throw e.code += x.u, e
                    }
                    var n = t.getProviders(), r = n.choose(e[0].sources[0]), i = r.provider, o = r.name;
                    return "function" == typeof i ? i : y.a.html5 && "html5" === o ? y.a.html5 : n.load(o).catch((function (e) {
                        throw Object(x.z)(e, x.v)
                    }))
                }
            }));
            var t
        }))
    }

    function F(e, t) {
        var n = [I(e)];
        return M(e) || n.push(Promise.resolve()), Promise.all(n)
    }

    function I(e) {
        var t = e.attributes, n = t.error;
        if (n && n.code === c.a) {
            var r = t.pid, i = t.ph, o = new c.b(t.key);
            if (i > 0 && i < 4 && r && o.duration() > -7776e6) return new C.a("//content.jwplatform.com/libraries/" + r + ".js").load().then((function () {
                var e = window.jwplayer.defaults.key, n = new c.b(e);
                n.error() || n.token() !== o.token() || (t.key = e, t.edition = n.edition(), t.error = n.error())
            })).catch((function () {
            }))
        }
        return Promise.resolve()
    }

    function M(e) {
        var t = e.get("advertising");
        return !(!t || !t.outstream)
    }

    var L = function (e) {
        var t = e.get("skin") ? e.get("skin").url : void 0;
        if ("string" == typeof t && !function (e) {
            for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) if (t[n].href === e) return !0;
            return !1
        }(t)) {
            return new C.a(t, !0).load().catch((function (e) {
                return e
            }))
        }
        return Promise.resolve()
    }, N = function (e) {
        var t = e.attributes, n = t.language, r = t.base, i = t.setupConfig, o = t.intl, u = Object(P.c)(i, o, n);
        return !Object(P.h)(n) || Object(P.f)(u) ? Promise.resolve() : new Promise((function (i) {
            return Object(P.i)(r, n).then((function (n) {
                var r = n.response;
                if (!E(e)) {
                    if (!r) throw new x.s(null, x.g);
                    t.localization = Object(P.a)(r, u), i()
                }
            })).catch((function (e) {
                i(e.code === x.g ? e : Object(x.z)(e, x.f))
            }))
        }))
    };
    var R = function (e) {
        var t;
        this.start = function (n) {
            var r = Object(j.a)(e, n), i = Promise.all([Object(y.d)(e), r, _(e), F(e), L(e), N(e)]),
                o = new Promise((function (e, n) {
                    t = setTimeout((function () {
                        n(new x.s(x.m, x.x))
                    }), 6e4);
                    var r = function () {
                        clearTimeout(t), setTimeout(e, 6e4)
                    };
                    i.then(r).catch(r)
                }));
            return Promise.race([i, o]).catch((function (e) {
                var t = function () {
                    throw e
                };
                return r.then(t).catch(t)
            })).then((function (e) {
                return function (e) {
                    if (!e || !e.length) return {core: null, warnings: []};
                    var t = e.reduce((function (e, t) {
                        return e.concat(t)
                    }), []).filter((function (e) {
                        return e && e.code
                    }));
                    return {core: e[0], warnings: t}
                }(e)
            }))
        }, this.destroy = function () {
            clearTimeout(t), e.set("_destroyed", !0), e = null
        }
    }, D = n(44), B = n(32), z = n(12), q = n(16), V = {
        removeItem: function () {
        }
    };
    try {
        V = window.localStorage || V
    } catch (e) {
    }

    function H(e, t) {
        this.namespace = e, this.items = t
    }

    Object(r.j)(H.prototype, {
        getAllItems: function () {
            var e = this;
            return this.items.reduce((function (t, n) {
                var r = V[e.namespace + "." + n];
                return r && (t[n] = "captions" !== n ? Object(z.serialize)(r) : JSON.parse(r)), t
            }), {})
        }, track: function (e) {
            var t = this;
            this.items.forEach((function (n) {
                e.on("change:" + n, (function (e, r) {
                    try {
                        "captions" === n && (r = JSON.stringify(r)), V[t.namespace + "." + n] = r
                    } catch (e) {
                        q.a.debug && console.error(e)
                    }
                }))
            }))
        }, clear: function () {
            var e = this;
            this.items.forEach((function (t) {
                V.removeItem(e.namespace + "." + t)
            }))
        }
    });
    var Q = H, W = n(57), U = n(52), X = n(9), Y = n(45), J = n(63), K = n(64), Z = n(35);
    n(71), n(72);
    n.d(t, "b", (function () {
        return te
    }));
    var $ = function (e) {
        this._events = {}, this.modelShim = new W.a, this.modelShim._qoeItem = new B.a, this.mediaShim = {}, this.setup = new R(this.modelShim), this.currentContainer = this.originalContainer = e, this.apiQueue = new i.a(this, ["load", "play", "pause", "seek", "stop", "playlistItem", "playlistNext", "playlistPrev", "next", "preload", "setConfig", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality", "setFullscreen", "addButton", "removeButton", "castToggle", "setMute", "setVolume", "setPlaybackRate", "addCues", "setCues", "setPlaylistItem", "resize", "setCaptions", "setControls"], (function () {
            return !0
        }))
    };

    function G(e, t) {
        t && t.code && (t.sourceError && console.error(t.sourceError), console.error(x.s.logMessage(t.code)))
    }

    function ee(e) {
        e && e.code && console.warn(x.s.logMessage(e.code))
    }

    function te(e, t) {
        if (!document.body.contains(e.currentContainer)) {
            var n = document.getElementById(e.get("id"));
            n && (e.currentContainer = n)
        }
        e.currentContainer.parentElement && e.currentContainer.parentElement.replaceChild(t, e.currentContainer), e.currentContainer = t
    }

    Object(r.j)($.prototype, {
        on: X.a.on, once: X.a.once, off: X.a.off, trigger: X.a.trigger, init: function (e, t) {
            var n = this, i = this.modelShim,
                o = new Q("jwplayer", ["volume", "mute", "captionLabel", "captions", "bandwidthEstimate", "bitrateSelection", "qualityLabel", "enableShortcuts"]),
                u = o && o.getAllItems();
            i.attributes = i.attributes || {}, Object(r.j)(this.mediaShim, U.a);
            var a = e, c = b(Object(r.j)({}, e), u);
            c.id = t.id, c.setupConfig = a, Object(r.j)(i.attributes, c, U.b), i.getProviders = function () {
                return new D.a(c)
            }, i.setProvider = function () {
            };
            var s = Object(J.b)();
            i.get("backgroundLoading") || (s = Object(K.a)(s.getPrimedElement(), s));
            var l = new Z.a(Object(Z.b)(this.originalContainer)).once("gesture", (function () {
                s.prime(), n.preload(), l.destroy()
            }));
            return i.on("change:errorEvent", G), this.setup.start(t).then((function (e) {
                var u = e.core;
                if (!u) throw Object(x.z)(null, x.w);
                if (n.setup) {
                    n.on(w.ub, ee), e.warnings.forEach((function (e) {
                        n.trigger(w.ub, e)
                    }));
                    var a = n.modelShim.clone();
                    if (a.error) throw a.error;
                    var c = n.apiQueue.queue.slice(0);
                    n.apiQueue.destroy(), Object(r.j)(n, u.prototype), n.setup(a, t, n.originalContainer, n._events, c, s);
                    var l = n._model;
                    return i.off("change:errorEvent", G), l.on("change:errorEvent", G), o.track(l), n.updatePlaylist(l.get("playlist"), l.get("feedData")).catch((function (e) {
                        throw Object(x.z)(e, x.u)
                    }))
                }
            })).then((function () {
                n.setup && n.playerReady()
            })).catch((function (e) {
                n.setup && function (e, t, n) {
                    Promise.resolve().then((function () {
                        var r = Object(x.A)(x.r, x.y, n), i = e._model || e.modelShim;
                        r.message = r.message || i.get("localization").errors[r.key], delete r.key;
                        var o = i.get("contextual");
                        if (!o) {
                            var u = Object(Y.a)(e, r);
                            Y.a.cloneIcon && u.querySelector(".jw-icon").appendChild(Y.a.cloneIcon("error")), te(e, u)
                        }
                        i.set("errorEvent", r), i.set("state", w.mb), e.trigger(w.jb, r), o && t.remove()
                    }))
                }(n, t, e)
            }))
        }, playerDestroy: function () {
            this.apiQueue && this.apiQueue.destroy(), this.setup && this.setup.destroy(), this.currentContainer !== this.originalContainer && te(this, this.originalContainer), this.off(), this._events = this._model = this.modelShim = this.apiQueue = this.setup = null
        }, getContainer: function () {
            return this.currentContainer
        }, get: function (e) {
            if (this.modelShim) return e in this.mediaShim ? this.mediaShim[e] : this.modelShim.get(e)
        }, getItemQoe: function () {
            return this.modelShim._qoeItem
        }, getItemPromise: function () {
            return null
        }, setItemCallback: function (e) {
            this.modelShim && (this.modelShim.attributes.playlistItemCallback = e)
        }, getConfig: function () {
            return Object(r.j)({}, this.modelShim.attributes, this.mediaShim)
        }, getCurrentCaptions: function () {
            return this.get("captionsIndex")
        }, getWidth: function () {
            return this.get("containerWidth")
        }, getHeight: function () {
            return this.get("containerHeight")
        }, getMute: function () {
            return this.get("mute")
        }, getProvider: function () {
            return this.get("provider")
        }, getState: function () {
            return this.get("state")
        }, getAudioTracks: function () {
            return null
        }, getCaptionsList: function () {
            return null
        }, getQualityLevels: function () {
            return null
        }, getVisualQuality: function () {
            return null
        }, getCurrentQuality: function () {
            return -1
        }, getCurrentAudioTrack: function () {
            return -1
        }, getSafeRegion: function () {
            return {x: 0, y: 0, width: 0, height: 0}
        }, isBeforeComplete: function () {
            return !1
        }, isBeforePlay: function () {
            return !1
        }, createInstream: function () {
            return null
        }, skipAd: function () {
        }, attachMedia: function () {
        }, detachMedia: function () {
        }
    });
    t.a = $
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return i
    }));
    var r = n(5);

    function i(e) {
        return "hls" === e.type && r.OS.android ? !1 !== e.androidhls && (!r.Browser.firefox && parseFloat(r.OS.version.version) >= 4.4) : null
    }
}, function (e, t, n) {
    "use strict";

    function r() {
        var e, t, n = window.location.host;
        if (window.top !== window.self) {
            n = (document.referrer ? (e = document.referrer, (t = document.createElement("a")).href = e, t) : {}).host;
            try {
                n = n || window.top.location.host
            } catch (e) {
            }
        }
        return n
    }

    n.d(t, "a", (function () {
        return r
    }))
}, function (e, t) {
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 29.3" class="jw-svg-icon jw-svg-icon-watermark" focusable="false"><path d="M37,16.68c0,2.4-.59,3.43-2.4,3.43a5.75,5.75,0,0,1-3.38-1.23v3.58a7.39,7.39,0,0,0,3.67,1c3.67,0,5.73-1.91,5.73-6.32V5.86H37Z"></path><polygon points="58.33 17.61 55.39 6.01 52.55 6.01 49.52 17.61 46.73 6.01 43.06 6.01 47.56 23.29 50.89 23.29 53.92 11.88 56.96 23.29 60.24 23.29 64.74 6.01 61.17 6.01 58.33 17.61"></polygon><path d="M73.84,6H67.47V23.29h2.2v-6.9h4.17c3.47,0,5.77-1.77,5.77-5.19S77.31,6,73.84,6Zm0,8.47H69.72V8h4.12c2.3,0,3.57,1.22,3.62,3.28C77.46,13.21,76.19,14.48,73.84,14.48Z"></path><path d="M99.2,6l-6,15.27H85V6H82.8V23.29H94.7l2-5.19h7.09l2,5.19H108L101.26,6ZM97.39,16.14l2.84-7.39L103,16.14Z"></path><polygon points="113.98 14.18 108.99 6.01 106.59 6.01 112.81 16.14 112.81 23.29 115.01 23.29 115.01 16.14 121.33 6.01 118.98 6.01 113.98 14.18"></polygon><polygon points="123.14 23.29 134.1 23.29 134.1 21.28 125.29 21.28 125.29 15.41 133.32 15.41 133.32 13.45 125.29 13.45 125.29 7.97 134.1 7.97 134.1 6.01 123.14 6.01 123.14 23.29"></polygon><path d="M144.86,15.85c2.74-.39,4.41-2,4.41-4.85,0-3.23-2.26-5-5.73-5h-6.32V23.29h2.22V16h3.08l4.94,7.29H150Zm-5.42-1.71V8h4.06c2.3,0,3.62,1.17,3.62,3.08s-1.32,3.09-3.62,3.09Z"></path><path d="M27.63.09a1,1,0,0,0-1.32.48c-.24.51-6.35,15.3-6.35,15.3-.2.46-.33.41-.33-.07,0,0,0-5.15,0-9.39,0-2.31-1.12-3.61-2.73-3.88A3.12,3.12,0,0,0,14.83,3a4.57,4.57,0,0,0-1.5,1.79c-.48.94-3.47,9.66-3.47,9.66-.16.46-.31.44-.31,0,0,0-.09-3.76-.18-4.64-.13-1.36-.44-3.59-2.2-3.7S4.77,8,4.36,9.24c-.29.84-1.65,5.35-1.65,5.35l-.2.46h0c-.06.24-.17.24-.24,0l-.11-.42Q2,14,1.74,13.31a1.71,1.71,0,0,0-.33-.66.83.83,0,0,0-.88-.22.82.82,0,0,0-.53.69,4.22,4.22,0,0,0,.07.79,29,29,0,0,0,1,4.6,1.31,1.31,0,0,0,1.8.66,3.43,3.43,0,0,0,1.24-1.81c.33-.81,2-5.48,2-5.48.18-.46.31-.44.29,0,0,0-.09,4.57-.09,6.64a13.11,13.11,0,0,0,.28,2.93,2.41,2.41,0,0,0,.82,1.27,2,2,0,0,0,1.41.4,2,2,0,0,0,.7-.24,3.15,3.15,0,0,0,.79-.71,12.52,12.52,0,0,0,1.26-2.11c.81-1.6,2.92-6.58,2.92-6.58.2-.46.33-.41.33.07,0,0-.26,8.36-.26,11.55a6.39,6.39,0,0,0,.44,2.33,2.8,2.8,0,0,0,1.45,1.61A2.57,2.57,0,0,0,18.79,29a3.76,3.76,0,0,0,1.28-1.32,15.12,15.12,0,0,0,1.07-2.31c.64-1.65,1.17-3.33,1.7-5s5-17.65,5.28-19a1.79,1.79,0,0,0,0-.46A1,1,0,0,0,27.63.09Z"></path></svg>'
}, function (e, t, n) {
    "use strict";
    var r, i = n(65), o = n(5), u = n(6), a = [], c = [], s = [], l = {},
        f = "screen" in window && "orientation" in window.screen, d = o.OS.android && o.Browser.chrome, p = !1;

    function h(e, t) {
        for (var n = t.length; n--;) {
            var r = t[n];
            if (e.target === r.getContainer()) {
                r.setIntersection(e);
                break
            }
        }
    }

    function v() {
        a.forEach((function (e) {
            var t = e.model;
            if (!(t.get("audioMode") || !t.get("controls") || t.get("visibility") < .75)) {
                var n = t.get("state"), r = Object(u.f)();
                !r && "paused" === n && e.api.getFullscreen() ? e.api.setFullscreen(!1) : "playing" === n && e.api.setFullscreen(r)
            }
        }))
    }

    function g() {
        a.forEach((function (e) {
            e.model.set("activeTab", Object(i.a)())
        }))
    }

    function m(e, t) {
        var n = t.indexOf(e);
        -1 !== n && t.splice(n, 1)
    }

    function b(e) {
        s.forEach((function (t) {
            t(e)
        }))
    }

    document.addEventListener("visibilitychange", g), document.addEventListener("webkitvisibilitychange", g), d && f && window.screen.orientation.addEventListener("change", v), window.addEventListener("beforeunload", (function () {
        document.removeEventListener("visibilitychange", g), document.removeEventListener("webkitvisibilitychange", g), window.removeEventListener("scroll", b), d && f && window.screen.orientation.removeEventListener("change", v)
    })), t.a = {
        add: function (e) {
            a.push(e)
        }, remove: function (e) {
            m(e, a)
        }, addScrollHandler: function (e) {
            p || (p = !0, window.addEventListener("scroll", b)), s.push(e)
        }, removeScrollHandler: function (e) {
            var t = s.indexOf(e);
            -1 !== t && s.splice(t, 1)
        }, addWidget: function (e) {
            c.push(e)
        }, removeWidget: function (e) {
            m(e, c)
        }, size: function () {
            return a.length
        }, observe: function (e) {
            var t;
            t = window.IntersectionObserver, r || (r = new t((function (e) {
                if (e && e.length) for (var t = e.length; t--;) {
                    var n = e[t];
                    h(n, a), h(n, c)
                }
            }), {threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]})), l[e.id] || (l[e.id] = !0, r.observe(e))
        }, unobserve: function (e) {
            r && l[e.id] && (delete l[e.id], r.unobserve(e))
        }
    }
}, function (e, t, n) {
    "use strict";
    n.d(t, "a", (function () {
        return l
    }));
    var r = n(0), i = n(51), o = n(6), u = n(11), a = [], c = -1;

    function s() {
        Object(i.a)(c), c = Object(i.b)((function () {
            a.forEach((function (e) {
                e.view.updateBounds();
                var t = e.view.model.get("containerWidth");
                e.resized = e.width !== t, e.width = t
            })), a.forEach((function (e) {
                e.contractElement.scrollLeft = 2 * e.width
            })), a.forEach((function (e) {
                Object(u.d)(e.expandChild, {width: e.width + 1}), e.resized && e.view.model.get("visibility") && e.view.updateStyles()
            })), a.forEach((function (e) {
                e.expandElement.scrollLeft = e.width + 1
            })), a.forEach((function (e) {
                e.resized && e.view.checkResized()
            }))
        }))
    }

    var l = function () {
        function e(e, t, n) {
            var i = {display: "block", position: "absolute", top: 0, left: 0}, c = {width: "100%", height: "100%"},
                l = Object(o.e)('<div style="opacity:0;visibility:hidden;overflow:hidden;"><div><div style="height:1px;"></div></div><div class="jw-contract-trigger"></div></div>'),
                f = l.firstChild, d = f.firstChild, p = f.nextSibling;
            Object(u.d)([f, p], Object(r.j)({overflow: "auto"}, i, c)), Object(u.d)(l, Object(r.j)({}, i, c)), this.expandElement = f, this.expandChild = d, this.contractElement = p, this.hiddenElement = l, this.element = e, this.view = t, this.model = n, this.width = 0, this.resized = !1, e.firstChild ? e.insertBefore(l, e.firstChild) : e.appendChild(l), e.addEventListener("scroll", s, !0), a.push(this), s()
        }

        return e.prototype.destroy = function () {
            if (this.view) {
                var e = a.indexOf(this);
                -1 !== e && a.splice(e, 1), this.element.removeEventListener("scroll", s, !0), this.element.removeChild(this.hiddenElement), this.view = this.model = null
            }
        }, e
    }()
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0), i = setTimeout;

    function o() {
    }

    function u(e) {
        if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
    }

    function a(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, u._immediateFn((function () {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(e._value)
                } catch (e) {
                    return void s(t.promise, e)
                }
                c(t.promise, r)
            } else (1 === e._state ? c : s)(t.promise, e._value)
        }))) : e._deferreds.push(t)
    }

    function c(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof u) return e._state = 3, e._value = t, void l(e);
                if ("function" == typeof n) return void d((r = n, i = t, function () {
                    r.apply(i, arguments)
                }), e)
            }
            e._state = 1, e._value = t, l(e)
        } catch (t) {
            s(e, t)
        }
        var r, i
    }

    function s(e, t) {
        e._state = 2, e._value = t, l(e)
    }

    function l(e) {
        2 === e._state && 0 === e._deferreds.length && u._immediateFn((function () {
            e._handled || u._unhandledRejectionFn(e._value)
        }));
        for (var t = 0, n = e._deferreds.length; t < n; t++) a(e, e._deferreds[t]);
        e._deferreds = null
    }

    function f(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function d(e, t) {
        var n = !1;
        try {
            e((function (e) {
                n || (n = !0, c(t, e))
            }), (function (e) {
                n || (n = !0, s(t, e))
            }))
        } catch (e) {
            if (n) return;
            n = !0, s(t, e)
        }
    }

    u.prototype.catch = function (e) {
        return this.then(null, e)
    }, u.prototype.then = function (e, t) {
        var n = new this.constructor(o);
        return a(this, new f(e, t, n)), n
    }, u.prototype.finally = function (e) {
        var t = this.constructor;
        return this.then((function (n) {
            return t.resolve(e()).then((function () {
                return n
            }))
        }), (function (n) {
            return t.resolve(e()).then((function () {
                return t.reject(n)
            }))
        }))
    }, u.all = function (e) {
        return new u((function (t, n) {
            if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var i = r.length;

            function o(e, u) {
                try {
                    if (u && ("object" == typeof u || "function" == typeof u)) {
                        var a = u.then;
                        if ("function" == typeof a) return void a.call(u, (function (t) {
                            o(e, t)
                        }), n)
                    }
                    r[e] = u, 0 == --i && t(r)
                } catch (e) {
                    n(e)
                }
            }

            for (var u = 0; u < r.length; u++) o(u, r[u])
        }))
    }, u.resolve = function (e) {
        return e && "object" == typeof e && e.constructor === u ? e : new u((function (t) {
            t(e)
        }))
    }, u.reject = function (e) {
        return new u((function (t, n) {
            n(e)
        }))
    }, u.race = function (e) {
        return new u((function (t, n) {
            for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
        }))
    }, u._immediateFn = "function" == typeof setImmediate && function (e) {
        setImmediate(e)
    } || function (e) {
        i(e, 0)
    }, u._unhandledRejectionFn = function (e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var p = u;
    window.Promise || (window.Promise = p);
    var h = n(19), v = n(15), g = n(17), m = n(13), b = {availableProviders: g.a, registerProvider: m.a}, y = n(25);
    b.registerPlugin = function (e, t, n) {
        "jwpsrv" !== e && Object(y.b)(e, t, n)
    };
    var j = b, w = n(31), O = n(16), k = n(5), C = n(67), x = n(3), P = n(32), S = n(9), T = n(38), E = 0;

    function A(e, t) {
        var n = new C.a(t);
        return n.on(x.hb, (function (t) {
            e._qoe.tick("ready"), t.setupTime = e._qoe.between("setup", "ready")
        })), n.on("all", (function (t, n) {
            e.trigger(t, n)
        })), n
    }

    function _(e, t) {
        var n = e.plugins;
        Object.keys(n).forEach((function (e) {
            delete n[e]
        })), t.get("setupConfig") && e.trigger("remove"), e.off(), t.playerDestroy(), t.getContainer().removeAttribute("data-jwplayer-id")
    }

    function F(e) {
        var t = ++E, n = e.id || "player-" + t, i = new P.a, o = {}, u = A(this, e);
        i.tick("init"), e.setAttribute("data-jwplayer-id", n), Object.defineProperties(this, {
            id: {
                enumerable: !0,
                get: function () {
                    return n
                }
            }, uniqueId: {
                enumerable: !0, get: function () {
                    return t
                }
            }, plugins: {
                enumerable: !0, get: function () {
                    return o
                }
            }, _qoe: {
                enumerable: !0, get: function () {
                    return i
                }
            }, version: {
                enumerable: !0, get: function () {
                    return w.a
                }
            }, Events: {
                enumerable: !0, get: function () {
                    return S.a
                }
            }, utils: {
                enumerable: !0, get: function () {
                    return T.a
                }
            }, _: {
                enumerable: !0, get: function () {
                    return r.f
                }
            }
        }), Object(r.j)(this, {
            _events: {}, setup: function (t) {
                return i.clear("ready"), i.tick("setup"), _(this, u), (u = A(this, e)).init(t, this), this.on(t.events, null, this)
            }, remove: function () {
                return function (e) {
                    for (var t = v.a.length; t--;) if (v.a[t].uniqueId === e.uniqueId) {
                        v.a.splice(t, 1);
                        break
                    }
                }(this), _(this, u), this
            }, qoe: function () {
                var e = u.getItemQoe();
                return {
                    setupTime: this._qoe.between("setup", "ready"),
                    firstFrame: e.getFirstFrame ? e.getFirstFrame() : null,
                    player: this._qoe.dump(),
                    item: e.dump()
                }
            }, addCues: function (e) {
                return Array.isArray(e) && u.addCues(e), this
            }, getAudioTracks: function () {
                return u.getAudioTracks()
            }, getBuffer: function () {
                return u.get("buffer")
            }, getCaptions: function () {
                return u.get("captions")
            }, getCaptionsList: function () {
                return u.getCaptionsList()
            }, getConfig: function () {
                return u.getConfig()
            }, getContainer: function () {
                return u.getContainer()
            }, getControls: function () {
                return u.get("controls")
            }, getCues: function () {
                return u.get("cues")
            }, getCurrentAudioTrack: function () {
                return u.getCurrentAudioTrack()
            }, getCurrentCaptions: function () {
                return u.getCurrentCaptions()
            }, getCurrentQuality: function () {
                return u.getCurrentQuality()
            }, getCurrentTime: function () {
                return u.get("currentTime")
            }, getDuration: function () {
                return u.get("duration")
            }, getEnvironment: function () {
                return k
            }, getFullscreen: function () {
                return u.get("fullscreen")
            }, getHeight: function () {
                return u.getHeight()
            }, getItemMeta: function () {
                return u.get("itemMeta") || {}
            }, getMute: function () {
                return u.getMute()
            }, getPlaybackRate: function () {
                return u.get("playbackRate")
            }, getPlaylist: function () {
                return u.get("playlist")
            }, getPlaylistIndex: function () {
                return u.get("item")
            }, getPlaylistItem: function (e) {
                if (!T.a.exists(e)) return u.get("playlistItem");
                var t = this.getPlaylist();
                return t ? t[e] : null
            }, getPosition: function () {
                return u.get("position")
            }, getProvider: function () {
                return u.getProvider()
            }, getQualityLevels: function () {
                return u.getQualityLevels()
            }, getSafeRegion: function (e) {
                return void 0 === e && (e = !0), u.getSafeRegion(e)
            }, getState: function () {
                return u.getState()
            }, getStretching: function () {
                return u.get("stretching")
            }, getViewable: function () {
                return u.get("viewable")
            }, getVisualQuality: function () {
                return u.getVisualQuality()
            }, getVolume: function () {
                return u.get("volume")
            }, getWidth: function () {
                return u.getWidth()
            }, setCaptions: function (e) {
                return u.setCaptions(e), this
            }, setConfig: function (e) {
                return u.setConfig(e), this
            }, setControls: function (e) {
                return u.setControls(e), this
            }, setCurrentAudioTrack: function (e) {
                u.setCurrentAudioTrack(e)
            }, setCurrentCaptions: function (e) {
                u.setCurrentCaptions(e)
            }, setCurrentQuality: function (e) {
                u.setCurrentQuality(e)
            }, setFullscreen: function (e) {
                return u.setFullscreen(e), this
            }, setMute: function (e) {
                return u.setMute(e), this
            }, setPlaybackRate: function (e) {
                return u.setPlaybackRate(e), this
            }, setPlaylistItem: function (e, t) {
                return u.setPlaylistItem(e, t), this
            }, setCues: function (e) {
                return Array.isArray(e) && u.setCues(e), this
            }, setVolume: function (e) {
                return u.setVolume(e), this
            }, load: function (e, t) {
                return u.load(e, t), this
            }, play: function (e) {
                return u.play(e), this
            }, pause: function (e) {
                return u.pause(e), this
            }, playToggle: function (e) {
                switch (this.getState()) {
                    case x.qb:
                    case x.kb:
                        return this.pause(e);
                    default:
                        return this.play(e)
                }
            }, seek: function (e, t) {
                return u.seek(e, t), this
            }, playlistItem: function (e, t) {
                return u.playlistItem(e, t), this
            }, playlistNext: function (e) {
                return u.playlistNext(e), this
            }, playlistPrev: function (e) {
                return u.playlistPrev(e), this
            }, next: function (e) {
                return u.next(e), this
            }, castToggle: function () {
                return u.castToggle(), this
            }, createInstream: function () {
                return u.createInstream()
            }, stop: function () {
                return u.stop(), this
            }, resize: function (e, t) {
                return u.resize(e, t), this
            }, addButton: function (e, t, n, r, i) {
                return u.addButton(e, t, n, r, i), this
            }, removeButton: function (e) {
                return u.removeButton(e), this
            }, attachMedia: function () {
                return u.attachMedia(), this
            }, detachMedia: function () {
                return u.detachMedia(), this
            }, isBeforeComplete: function () {
                return u.isBeforeComplete()
            }, isBeforePlay: function () {
                return u.isBeforePlay()
            }, setPlaylistItemCallback: function (e, t) {
                u.setItemCallback(e, t)
            }, removePlaylistItemCallback: function () {
                u.setItemCallback(null)
            }, getPlaylistItemPromise: function (e) {
                return u.getItemPromise(e)
            }
        })
    }

    Object(r.j)(F.prototype, {
        on: function (e, t, n) {
            return S.c.call(this, e, t, n)
        }, once: function (e, t, n) {
            return S.d.call(this, e, t, n)
        }, off: function (e, t, n) {
            return S.b.call(this, e, t, n)
        }, trigger: function (e, t) {
            return (t = r.f.isObject(t) ? Object(r.j)({}, t) : {}).type = e, O.a.debug ? S.e.call(this, e, t) : S.f.call(this, e, t)
        }, getPlugin: function (e) {
            return this.plugins[e]
        }, addPlugin: function (e, t) {
            this.plugins[e] = t, this.on("ready", t.addToPlayer), t.resize && this.on("resize", t.resizeHandler)
        }, registerPlugin: function (e, t, n) {
            Object(y.b)(e, t, n)
        }, getAdBlock: function () {
            return !1
        }, playAd: function (e) {
        }, pauseAd: function (e) {
        }, skipAd: function () {
        }
    }), n.p = Object(h.loadFrom)();
    var I = function (e) {
        var t, n;
        if (e ? "string" == typeof e ? (t = M(e)) || (n = document.getElementById(e)) : "number" == typeof e ? t = v.a[e] : e.nodeType && (t = M((n = e).id || n.getAttribute("data-jwplayer-id"))) : t = v.a[0], t) return t;
        if (n) {
            var r = new F(n);
            return v.a.push(r), r
        }
        return {registerPlugin: y.b}
    };

    function M(e) {
        for (var t = 0; t < v.a.length; t++) if (v.a[t].id === e) return v.a[t];
        return null
    }

    function L(e) {
        Object.defineProperties(e, {
            api: {
                get: function () {
                    return j
                }, set: function () {
                }
            }, version: {
                get: function () {
                    return w.a
                }, set: function () {
                }
            }, debug: {
                get: function () {
                    return O.a.debug
                }, set: function (e) {
                    O.a.debug = !!e
                }
            }
        })
    }

    L(I);
    var N = I, R = n(35), D = n(26), B = n(24), z = n(50), q = n(48), V = n(41), H = r.f.extend, Q = {};
    Q._ = r.f, Q.utils = Object(r.j)(T.a, {
        key: D.b,
        extend: H,
        scriptloader: B.a,
        rssparser: {parse: q.a},
        tea: z.a,
        UI: R.a
    }), Q.utils.css.style = Q.utils.style, Q.vid = V.a;
    var W = Q, U = n(66), X = /^(?:on(?:ce)?|off|trigger)$/;

    function Y(e) {
        var t = {};
        J(this, e, e, t), J(this, e, F.prototype, t)
    }

    function J(e, t, n, r) {
        var i = Object.keys(n);
        i.forEach((function (o) {
            "function" == typeof n[o] && "Events" !== o ? e[o] = function e(t, n, r, i, o) {
                return function () {
                    var u = Array.prototype.slice.call(arguments), a = u[0],
                        c = n._trackCallQueue || (n._trackCallQueue = []), s = X.test(r),
                        l = s && u[1] && u[1]._callback, f = o.edition || K(n, o, "edition"), d = "free" === f;
                    if (d) {
                        var p = ["addButton", "addCues", "detachMedia", "load", "next", "pause", "play", "playlistItem", "playlistNext", "playlistPrev", "playToggle", "resize", "seek", "setCaptions", "setConfig", "setControls", "setCues", "setFullscreen", "setMute", "setPlaybackRate", "setPlaylistItem", "setVolume", "stop"];
                        if (p.indexOf(r) > -1) return Z(r), t;
                        var h = ["createInstream", "setCurrentAudioTrack", "setCurrentCaptions", "setCurrentQuality"];
                        if (h.indexOf(r) > -1) return Z(r), null
                    }
                    if (l || c.push([r, a]), s) return ee(n, c), n[r].apply(t, u);
                    $(r, u);
                    var v = n[r].apply(n, u);
                    return "remove" === r ? n.off.call(t) : "setup" === r && (n.off.call(t), n.off(a.events, null, n), n.on.call(t, a.events, null, t), n.on("all", (function (r, u) {
                        if ("ready" === r) {
                            var a = Object.keys(n).filter((function (e) {
                                return "_" !== e[0] && -1 === i.indexOf(e) && "function" == typeof n[e]
                            })), s = i.concat(a);
                            a.forEach((function (r) {
                                t[r] = e(t, n, r, s, o)
                            }))
                        }
                        n.trigger.call(t, r, u), ee(n, c)
                    }))), ee(n, c), v === n ? t : v
                }
            }(e, t, o, i, r) : "_events" === o ? e._events = {} : Object.defineProperty(e, o, {
                enumerable: !0,
                get: function () {
                    return n[o]
                }
            })
        }))
    }

    function K(e, t, n) {
        var r = e.getConfig()[n];
        return t[n] = r, r
    }

    function Z(e) {
        console.warn("The API method jwplayer()." + e + "() is disabled in the free edition of JW Player.")
    }

    function $(e, t) {
        var n = {reason: Object(U.a)() ? "interaction" : "external"};
        switch (e) {
            case"play":
            case"pause":
            case"playToggle":
            case"playlistNext":
            case"playlistPrev":
            case"next":
                t[0] = n;
                break;
            case"seek":
            case"playlistItem":
                t[1] = n
        }
    }

    function G(e, t, n) {
        try {
            var r = function (e, t) {
                switch (e) {
                    case"setup":
                        return !!t;
                    case"getSafeRegion":
                    case"pauseAd":
                    case"setControls":
                    case"setFullscreen":
                    case"setMute":
                        return !!t === t ? t : void 0;
                    case"setPlaylistItem":
                    case"getPlaylistItem":
                        return (0 | t) === t ? t : void 0;
                    case"setPlaybackRate":
                    case"setVolume":
                        return Number(t);
                    case"setConfig":
                        return Object.keys(Object(t)).join(",");
                    case"on":
                    case"once":
                    case"off":
                    case"trigger":
                    case"getPlugin":
                    case"addPlugin":
                    case"registerPlugin":
                        return "" + t
                }
                return null
            }(t, n);
            e.trackExternalAPIUsage(t, r)
        } catch (e) {
            O.a.debug && console.warn(e)
        }
    }

    function ee(e, t) {
        if (t.length) {
            var n = e.getPlugin("jwpsrv");
            n && n.trackExternalAPIUsage && (t.forEach((function (e) {
                G(n, e[0], e[1])
            })), t.length = 0)
        }
    }

    var te = window;
    Object(r.j)(N, W);
    var ne = function (e) {
        var t = N(e);
        return t.uniqueId ? t._publicApi || (t._publicApi = new Y(t)) : t
    };
    Object(r.j)(ne, W), L(ne), "function" == typeof te.define && te.define.amd && te.define([], (function () {
        return ne
    }));
    var re = ne;
    te.jwplayer && (re = te.jwplayer);
    t.default = re
}]).default;


var jwDefaults = {
    "aspectratio": "16:9",
    "autostart": false,
    "controls": true,
    "displaydescription": false,
    "displaytitle": false,
    "flashplayer": "//ssl.p.jwpcdn.com/player/v/8.13.8/jwplayer.flash.swf",
    "height": 270,
    "key": "7tTl7UPob8cYCm3ujNChHIzGgqqPJTb9tVHpZdbdNrANRMoKi9K51B8pbo4O+Wii",
    "ph": 1,
    "pid": "sbU3eHJm",
    "preload": "none",
    "repeat": false,
    "stagevideo": false,
    "stretching": "uniform",
    "width": "100%"
};
jwplayer.defaults = jwDefaults;