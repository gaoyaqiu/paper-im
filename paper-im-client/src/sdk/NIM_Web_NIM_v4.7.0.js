!
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.NIM = t() : e.NIM = t()
    }(this, function() {
        return function(e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var o = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function(e, t, n) {
            "use strict";
            n(69), e.exports = n(116)
        }, function(e, t, n) {
            "use strict";
            var r = n(12),
                o = n(28),
                i = n(56),
                s = n(37);
            n(95);
            var a = n(5),
                c = n(10),
                u = c.getGlobal(),
                l = /\s+/;
            c.shouldDisplayInstallFlashHint = function() {
                var e = r.name.toLowerCase();
                if ("ie" === e) {
                    var t = +r.version || 0;
                    return t = Math.floor(t), 7 === t && !o.Transport.flashsocket.check()
                }
                return !1
            }, c.deduplicate = function(e) {
                var t = [];
                return e.forEach(function(e) {
                    t.indexOf(e) === -1 && t.push(e)
                }), t
            }, c.capFirstLetter = function(e) {
                return e ? (e = "" + e, e.slice(0, 1).toUpperCase() + e.slice(1)) : ""
            }, c.guid = function() {
                var e = function() {
                    return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                };
                return function() {
                    return e() + e() + e() + e() + e() + e() + e() + e()
                }
            }(), c.extend = function(e, t, n) {
                for (var r in t)"undefined" != typeof e[r] && n !== !0 || (e[r] = t[r])
            }, c.filterObj = function(e, t) {
                var n = {};
                return c.isString(t) && (t = t.split(l)), t.forEach(function(t) {
                    e.hasOwnProperty(t) && (n[t] = e[t])
                }), n
            }, c.simpleClone = function(e) {
                return JSON.parse(JSON.stringify(e))
            }, c.copy = function(e, t) {
                return t = t || {}, e ? (Object.keys(e).forEach(function(n) {
                    c.exist(e[n]) && (t[n] = e[n])
                }), t) : t
            }, c.copyWithNull = function(e, t) {
                return t = t || {}, e ? (Object.keys(e).forEach(function(n) {
                    (c.exist(e[n]) || c.isnull(e[n])) && (t[n] = e[n])
                }), t) : t
            }, c.findObjIndexInArray = function(e, t) {
                e = e || [];
                var n = t.keyPath || "id",
                    r = -1;
                return e.some(function(e, o) {
                    if (s(e, n) === t.value) return r = o, !0
                }), r
            }, c.findObjInArray = function(e, t) {
                var n = c.findObjIndexInArray(e, t);
                return n === -1 ? null : e[n]
            }, c.mergeObjArray = function() {
                var e = [],
                    t = [].slice.call(arguments, 0, -1),
                    n = arguments[arguments.length - 1];
                c.isArray(n) && (t.push(n), n = {});
                var r = n.keyPath = n.keyPath || "id";
                for (n.sortPath = n.sortPath || r; !e.length && t.length;) e = t.shift() || [], e = e.slice(0);
                var o;
                return t.forEach(function(t) {
                    t && t.forEach(function(t) {
                        o = c.findObjIndexInArray(e, {
                            keyPath: r,
                            value: s(t, r)
                        }), o !== -1 ? e[o] = c.merge({}, e[o], t) : e.push(t)
                    })
                }), n.notSort || (e = c.sortObjArray(e, n)), e
            }, c.cutObjArray = function(e) {
                var t = e.slice(0),
                    n = arguments.length,
                    r = [].slice.call(arguments, 1, n - 1),
                    o = arguments[n - 1];
                c.isObject(o) || (r.push(o), o = {});
                var i, a = o.keyPath = o.keyPath || "id";
                return r.forEach(function(e) {
                    c.isArray(e) || (e = [e]), e.forEach(function(e) {
                        e && (o.value = s(e, a), i = c.findObjIndexInArray(t, o), i !== -1 && t.splice(i, 1))
                    })
                }), t
            }, c.sortObjArray = function(e, t) {
                t = t || {};
                var n = t.sortPath || "id";
                i.insensitive = !! t.insensitive;
                var r, o, a, u = !! t.desc;
                return a = c.isFunction(t.compare) ? t.compare : function(e, t) {
                    return r = s(e, n), o = s(t, n), u ? i(o, r) : i(r, o)
                }, e.sort(a)
            }, c.emptyFunc = function() {}, c.isEmptyFunc = function(e) {
                return e === c.emptyFunc
            }, c.notEmptyFunc = function(e) {
                return e !== c.emptyFunc
            }, c.splice = function(e, t, n) {
                return [].splice.call(e, t, n)
            }, c.reshape2d = function(e, t) {
                if (Array.isArray(e)) {
                    c.verifyParamType("type", t, "number");
                    var n = e.length;
                    if (n <= t) return [e];
                    for (var r = Math.ceil(n / t), o = [], i = 0; i < r; i++) o.push(e.slice(i * t, (i + 1) * t));
                    return o
                }
                return e
            }, c.flatten2d = function(e) {
                if (Array.isArray(e)) {
                    var t = [];
                    return e.forEach(function(e) {
                        t = t.concat(e)
                    }), t
                }
                return e
            }, c.dropArrayDuplicates = function(e) {
                if (Array.isArray(e)) {
                    for (var t = {}, n = []; e.length > 0;) {
                        var r = e.shift();
                        t[r] = !0
                    }
                    for (var o in t) t[o] === !0 && n.push(o);
                    return n
                }
                return e
            }, c.onError = function(e) {
                throw new a(e)
            }, c.verifyParamPresent = function(e, t, n) {
                n = n || "";
                var r = !1;
            }, c.onParamAbsent = function(e) {
                c.onParamError('缺少参数"' + e + '", 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或者数组的内容不是 null/undefined')
            }, c.verifyParamAbsent = function(e, t, n) {
                n = n || "", void 0 !== t && c.onParamPresent(n + e)
            }, c.onParamPresent = function(e) {
                c.onParamError('多余的参数"' + e + '"')
            }, c.verifyParamType = function(e, t, n) {
                var r = c.typeOf(t).toLowerCase();
                c.isArray(n) || (n = [n]), n = n.map(function(e) {
                    return e.toLowerCase()
                });
                var o = !0;
                switch (n.indexOf(r) === -1 && (o = !1), r) {
                    case "number":
                        isNaN(t) && (o = !1)
                }
                o || c.onParamInvalidType(e, n)
            }, c.onParamInvalidType = function(e, t, n) {
                n = n || "", c.isArray(t) ? (t = t.map(function(e) {
                    return '"' + e + '"'
                }), t = t.join(", ")) : t = '"' + t + '"', c.onParamError('参数"' + n + e + '"类型错误, 合法的类型包括: [' + t + "]")
            }, c.verifyParamValid = function(e, t, n) {
                c.isArray(n) || (n = [n]), n.indexOf(t) === -1 && c.onParamInvalidValue(e, n)
            }, c.onParamInvalidValue = function(e, t) {
                c.isArray(t) || (t = [t]), t = t.map(function(e) {
                    return '"' + e + '"'
                }), c.isArray(t) && (t = t.join(", ")), c.onParamError('参数"' + e + '"值错误, 合法的值包括: [' + t + "]")
            }, c.verifyParamMin = function(e, t, n) {
                t < n && c.onParamError("参数" + e + "的值不能小于" + n)
            }, c.verifyParamMax = function(e, t, n) {
                t > n && c.onParamError("参数" + e + "的值不能大于" + n)
            }, c.verifyArrayMax = function(e, t, n) {
                t.length > n && c.onParamError("参数" + e + "的长度不能大于" + n)
            }, c.verifyEmail = function() {
                var e = /^\S+@\S+$/;
                return function(t, n) {
                    e.test(n) || c.onParamError("参数" + t + "邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符")
                }
            }(), c.verifyTel = function() {
                var e = /^[+\-()\d]+$/;
                return function(t, n) {
                    e.test(n) || c.onParamError("参数" + t + "电话号码格式错误, 合法字符包括+、-、英文括号和数字")
                }
            }(), c.verifyBirth = function() {
                var e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
                return function(t, n) {
                    e.test(n) || c.onParamError("参数" + t + '生日格式错误, 合法为"yyyy-MM-dd"')
                }
            }(), c.onParamError = function(e) {
                c.onError(e)
            }, c.verifyOptions = function(e, t, n, r) {
                if (e = e || {}, t && (c.isString(t) && (t = t.split(l)), c.isArray(t))) {
                    n = void 0 === n || !! n;
                    var o = n ? c.verifyParamPresent : c.verifyParamAbsent;
                    t.forEach(function(t) {
                        o.call(c, t, e[t], r)
                    })
                }
                return e
            }, c.verifyParamAtLeastPresentOne = function(e, t) {
                if (t && (c.isString(t) && (t = t.split(l)), c.isArray(t))) {
                    var n = t.some(function(t) {
                        return c.exist(e[t])
                    });
                    n || c.onParamError("以下参数[" + t.join(", ") + "]至少需要传入一个")
                }
            }, c.verifyParamPresentJustOne = function(e, t) {
                if (t && (c.isString(t) && (t = t.split(l)), c.isArray(t))) {
                    var n = t.reduce(function(t, n) {
                        return c.exist(e[n]) && t++, t
                    }, 0);
                    1 !== n && c.onParamError("以下参数[" + t.join(", ") + "]必须且只能传入一个")
                }
            }, c.verifyBooleanWithDefault = function(e, t, n, r) {
                c.undef(n) && (n = !0), l.test(t) && (t = t.split(l)), c.isArray(t) ? t.forEach(function(t) {
                    c.verifyBooleanWithDefault(e, t, n, r)
                }) : "undefined" == typeof e[t] ? e[t] = n : c.isBoolean(e[t]) || c.onParamInvalidType(t, "boolean", r)
            }, c.verifyFileInput = function(e) {
                return c.verifyParamPresent("fileInput", e), c.isString(e) && (e = document.getElementById(e), e || c.onParamError("找不到要上传的文件对应的input, 请检查fileInput id")), e.tagName && "input" === e.tagName.toLowerCase() && "file" === e.type.toLowerCase() || c.onParamError("请提供正确的 fileInput, 必须为 file 类型的 input 节点"), e
            }, c.verifyFileType = function(e) {
                c.verifyParamValid("type", e, c.validFileTypes)
            }, c.verifyCallback = function(e, t) {
                l.test(t) && (t = t.split(l)), c.isArray(t) ? t.forEach(function(t) {
                    c.verifyCallback(e, t)
                }) : e[t] ? c.isFunction(e[t]) || c.onParamInvalidType(t, "function") : e[t] = c.emptyFunc
            }, c.verifyFileUploadCallback = function(e) {
                c.verifyCallback(e, "uploadprogress uploaddone uploaderror uploadcancel")
            }, c.validFileTypes = ["image", "audio", "video", "file"], c.validFileExts = {
                image: ["bmp", "gif", "jpg", "jpeg", "jng", "png", "webp"],
                audio: ["mp3", "wav", "aac", "wma", "wmv", "amr", "mp2", "flac", "vorbis", "ac3"],
                video: ["mp4", "rm", "rmvb", "wmv", "avi", "mpg", "mpeg"]
            }, c.filterFiles = function(e, t) {
                t = t.toLowerCase();
                var n, r, o, i = "file" === t,
                    s = [];
                return [].forEach.call(e, function(e) {
                    if (i) s.push(e);
                    else if (n = e.name.slice(e.name.lastIndexOf(".") + 1), r = e.type.split("/"), r[0] && r[1]) {
                        o = r[0].toLowerCase();
                        var a = !1;
                        a = o === t || c.validFileExts[t].indexOf(n) !== -1, a && s.push(e)
                    }
                }), s
            };
            var d = c.supportFormData = c.notundef(u.FormData);
            c.getFileName = function() {
                return function(e) {
                    return e = c.verifyFileInput(e), d ? e.files[0].name : e.value.slice(e.value.lastIndexOf("\\") + 1)
                }
            }(), c.sizeText = function() {
                var e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "BB"];
                return function(t) {
                    var n, r = 0;
                    do {
                        t = Math.floor(100 * t) / 100;
                        var o = e[r];
                        n = t + o, t /= 1024, r++
                    } while (t > 1);
                    return n
                }
            }(), c.promises2cmds = function(e) {
                return e.map(function(e) {
                    return e.cmd
                })
            }, c.objs2accounts = function(e) {
                return e.map(function(e) {
                    return e.account
                })
            }, c.teams2ids = function(e) {
                return e.map(function(e) {
                    return e.teamId
                })
            }, c.objs2ids = function(e) {
                return e.map(function(e) {
                    return e.id
                })
            }, c.getMaxUpdateTime = function(e) {
                var t = e.map(function(e) {
                    return +e.updateTime
                });
                return Math.max.apply(Math, t)
            }, c.genCheckUniqueFunc = function(e, t) {
                var n = [],
                    r = {};
                return e = e || "id", t = t || 1e3, function(o) {
                    var i;
                    return n.length >= t && (i = n.shift(), delete r[i]), i = s(o, e), !r[i] && (r[i] = !0, n.push(i), !0)
                }
            }, c.fillPropertyWithDefault = function(e, t, n) {
                return !!c.undef(e[t]) && (e[t] = n, !0)
            }, e.exports = c
        }, function(e, t, n) {
            (function(t, r) {
                /*!
			 * @overview es6-promise - a tiny implementation of Promises/A+.
			 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
			 * @license   Licensed under MIT license
			 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
			 * @version   4.0.5
			 */
                !
                    function(t, n) {
                        e.exports = n()
                    }(this, function() {
                        "use strict";

                        function e(e) {
                            return "function" == typeof e || "object" == typeof e && null !== e
                        }
                        function o(e) {
                            return "function" == typeof e
                        }
                        function i(e) {
                            z = e
                        }
                        function s(e) {
                            G = e
                        }
                        function a() {
                            return function() {
                                return t.nextTick(f)
                            }
                        }
                        function c() {
                            return "undefined" != typeof K ?
                                function() {
                                    K(f)
                                } : d()
                        }
                        function u() {
                            var e = 0,
                                t = new Q(f),
                                n = document.createTextNode("");
                            return t.observe(n, {
                                characterData: !0
                            }), function() {
                                n.data = e = ++e % 2
                            }
                        }
                        function l() {
                            var e = new MessageChannel;
                            return e.port1.onmessage = f, function() {
                                return e.port2.postMessage(0)
                            }
                        }
                        function d() {
                            var e = setTimeout;
                            return function() {
                                return e(f, 1)
                            }
                        }
                        function f() {
                            for (var e = 0; e < V; e += 2) {
                                var t = ne[e],
                                    n = ne[e + 1];
                                t(n), ne[e] = void 0, ne[e + 1] = void 0
                            }
                            V = 0
                        }
                        function p() {
                            try {
                                var e = n(27);
                                return K = e.runOnLoop || e.runOnContext, c()
                            } catch (t) {
                                return d()
                            }
                        }
                        function m(e, t) {
                            var n = arguments,
                                r = this,
                                o = new this.constructor(g);
                            void 0 === o[oe] && F(o);
                            var i = r._state;
                            return i ? !
                                function() {
                                    var e = n[i - 1];
                                    G(function() {
                                        return A(i, o, e, r._result)
                                    })
                                }() : x(r, o, e, t), o
                        }
                        function y(e) {
                            var t = this;
                            if (e && "object" == typeof e && e.constructor === t) return e;
                            var n = new t(g);
                            return w(n, e), n
                        }
                        function g() {}
                        function h() {
                            return new TypeError("You cannot resolve a promise with itself")
                        }
                        function v() {
                            return new TypeError("A promises callback cannot return that same promise.")
                        }
                        function b(e) {
                            try {
                                return e.then
                            } catch (t) {
                                return ce.error = t, ce
                            }
                        }
                        function M(e, t, n, r) {
                            try {
                                e.call(t, n, r)
                            } catch (o) {
                                return o
                            }
                        }
                        function T(e, t, n) {
                            G(function(e) {
                                var r = !1,
                                    o = M(n, t, function(n) {
                                        r || (r = !0, t !== n ? w(e, n) : C(e, n))
                                    }, function(t) {
                                        r || (r = !0, I(e, t))
                                    }, "Settle: " + (e._label || " unknown promise"));
                                !r && o && (r = !0, I(e, o))
                            }, e)
                        }
                        function S(e, t) {
                            t._state === se ? C(e, t._result) : t._state === ae ? I(e, t._result) : x(t, void 0, function(t) {
                                return w(e, t)
                            }, function(t) {
                                return I(e, t)
                            })
                        }
                        function k(e, t, n) {
                            t.constructor === e.constructor && n === m && t.constructor.resolve === y ? S(e, t) : n === ce ? I(e, ce.error) : void 0 === n ? C(e, t) : o(n) ? T(e, t, n) : C(e, t)
                        }
                        function w(t, n) {
                            t === n ? I(t, h()) : e(n) ? k(t, n, b(n)) : C(t, n)
                        }
                        function O(e) {
                            e._onerror && e._onerror(e._result), _(e)
                        }
                        function C(e, t) {
                            e._state === ie && (e._result = t, e._state = se, 0 !== e._subscribers.length && G(_, e))
                        }
                        function I(e, t) {
                            e._state === ie && (e._state = ae, e._result = t, G(O, e))
                        }
                        function x(e, t, n, r) {
                            var o = e._subscribers,
                                i = o.length;
                            e._onerror = null, o[i] = t, o[i + se] = n, o[i + ae] = r, 0 === i && e._state && G(_, e)
                        }
                        function _(e) {
                            var t = e._subscribers,
                                n = e._state;
                            if (0 !== t.length) {
                                for (var r = void 0, o = void 0, i = e._result, s = 0; s < t.length; s += 3) r = t[s], o = t[s + n], r ? A(n, r, o, i) : o(i);
                                e._subscribers.length = 0
                            }
                        }
                        function E() {
                            this.error = null
                        }
                        function P(e, t) {
                            try {
                                return e(t)
                            } catch (n) {
                                return ue.error = n, ue
                            }
                        }
                        function A(e, t, n, r) {
                            var i = o(n),
                                s = void 0,
                                a = void 0,
                                c = void 0,
                                u = void 0;
                            if (i) {
                                if (s = P(n, r), s === ue ? (u = !0, a = s.error, s = null) : c = !0, t === s) return void I(t, v())
                            } else s = r, c = !0;
                            t._state !== ie || (i && c ? w(t, s) : u ? I(t, a) : e === se ? C(t, s) : e === ae && I(t, s))
                        }
                        function j(e, t) {
                            try {
                                t(function(t) {
                                    w(e, t)
                                }, function(t) {
                                    I(e, t)
                                })
                            } catch (n) {
                                I(e, n)
                            }
                        }
                        function R() {
                            return le++
                        }
                        function F(e) {
                            e[oe] = le++, e._state = void 0, e._result = void 0, e._subscribers = []
                        }
                        function N(e, t) {
                            this._instanceConstructor = e, this.promise = new e(g), this.promise[oe] || F(this.promise), X(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? C(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && C(this.promise, this._result))) : I(this.promise, U())
                        }
                        function U() {
                            return new Error("Array Methods must be provided an Array")
                        }
                        function D(e) {
                            return new N(this, e).promise
                        }
                        function B(e) {
                            var t = this;
                            return new t(X(e) ?
                                function(n, r) {
                                    for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                                } : function(e, t) {
                                    return t(new TypeError("You must pass an array to race."))
                                })
                        }
                        function L(e) {
                            var t = this,
                                n = new t(g);
                            return I(n, e), n
                        }
                        function q() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }
                        function W() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }
                        function H(e) {
                            this[oe] = R(), this._result = this._state = void 0, this._subscribers = [], g !== e && ("function" != typeof e && q(), this instanceof H ? j(this, e) : W())
                        }
                        function $() {
                            var e = void 0;
                            if ("undefined" != typeof r) e = r;
                            else if ("undefined" != typeof self) e = self;
                            else try {
                                    e = Function("return this")()
                                } catch (t) {
                                    throw new Error("polyfill failed because global object is unavailable in this environment")
                                }
                            var n = e.Promise;
                            if (n) {
                                var o = null;
                                try {
                                    o = Object.prototype.toString.call(n.resolve())
                                } catch (t) {}
                                if ("[object Promise]" === o && !n.cast) return
                            }
                            e.Promise = H
                        }
                        var J = void 0;
                        J = Array.isArray ? Array.isArray : function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        };
                        var X = J,
                            V = 0,
                            K = void 0,
                            z = void 0,
                            G = function(e, t) {
                                ne[V] = e, ne[V + 1] = t, V += 2, 2 === V && (z ? z(f) : re())
                            },
                            Y = "undefined" != typeof window ? window : void 0,
                            Z = Y || {},
                            Q = Z.MutationObserver || Z.WebKitMutationObserver,
                            ee = "undefined" == typeof self && "undefined" != typeof t && "[object process]" === {}.toString.call(t),
                            te = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                            ne = new Array(1e3),
                            re = void 0;
                        re = ee ? a() : Q ? u() : te ? l() : void 0 === Y ? p() : d();
                        var oe = Math.random().toString(36).substring(16),
                            ie = void 0,
                            se = 1,
                            ae = 2,
                            ce = new E,
                            ue = new E,
                            le = 0;
                        return N.prototype._enumerate = function() {
                            for (var e = this.length, t = this._input, n = 0; this._state === ie && n < e; n++) this._eachEntry(t[n], n)
                        }, N.prototype._eachEntry = function(e, t) {
                            var n = this._instanceConstructor,
                                r = n.resolve;
                            if (r === y) {
                                var o = b(e);
                                if (o === m && e._state !== ie) this._settledAt(e._state, t, e._result);
                                else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                                else if (n === H) {
                                    var i = new n(g);
                                    k(i, e, o), this._willSettleAt(i, t)
                                } else this._willSettleAt(new n(function(t) {
                                    return t(e)
                                }), t)
                            } else this._willSettleAt(r(e), t)
                        }, N.prototype._settledAt = function(e, t, n) {
                            var r = this.promise;
                            r._state === ie && (this._remaining--, e === ae ? I(r, n) : this._result[t] = n), 0 === this._remaining && C(r, this._result)
                        }, N.prototype._willSettleAt = function(e, t) {
                            var n = this;
                            x(e, void 0, function(e) {
                                return n._settledAt(se, t, e)
                            }, function(e) {
                                return n._settledAt(ae, t, e)
                            })
                        }, H.all = D, H.race = B, H.resolve = y, H.reject = L, H._setScheduler = i, H._setAsap = s, H._asap = G, H.prototype = {
                            constructor: H,
                            then: m,
                            "catch": function(e) {
                                return this.then(null, e)
                            }
                        }, H.polyfill = $, H.Promise = H, H
                    })
            }).call(t, n(9), function() {
                return this
            }())
        }, function(e, t, n) {
            (function(t) {
                "use strict";
                var n = "'3e91c53671eb52ebe3fc319fc6dac5f938226081",
                    r = "3e91c536'",
                    o = "4.7.0",
                    i = "2.3.0.0109",
                    s = "3.6.0",
                    a = "41",
                    c = 1,
                    u = "https://lbs.netease.im/lbs/webconf.jsp",
                    l = "development" === t.env.NODE_ENV ? 6e3 : 42e3,
                    d = {
                        info: {
                            hash: n,
                            shortHash: r,
                            version: o,
                            sdkVersion: a,
                            nrtcVersion: s,
                            protocolVersion: c
                        },
                        agentVersion: i,
                        lbsUrl: u,
                        connectTimeout: l,
                        xhrTimeout: l,
                        socketTimeout: l,
                        reconnectionDelay: 656.25,
                        reconnectionDelayMax: l,
                        reconnectionJitter: .1,
                        heartbeatInterval: 18e4,
                        cmdTimeout: l
                    };
                d.formatSocketUrl = function(e) {
                    var t = e.url,
                        n = e.secure,
                        r = n ? "https" : "http";
                    return t.indexOf("http") === -1 ? r + "://" + t : t
                }, d.fileServerUrl = "https://nos.netease.com", d.replaceUrl = "http://nos.netease.im", d.genUploadUrl = function(e) {
                    return d.uploadUrl ? d.uploadUrl + "/" + e : d.fileServerUrl + "/" + e
                }, d.genDownloadUrl = function(e, t) {
                    return d.downloadUrl ? d.replaceUrl + "/" + e + "/" + t : "https://" + e + ".nosdn.127.net/" + t
                }, e.exports = d
            }).call(t, n(9))
        }, function(e, t, n) {
            "use strict";

            function r() {}
            function o(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }
            function i() {
                this._events = new r, this._eventsCount = 0
            }
            var s = Object.prototype.hasOwnProperty,
                a = "~";
            Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)), i.prototype.eventNames = function() {
                var e, t, n = [];
                if (0 === this._eventsCount) return n;
                for (t in e = this._events) s.call(e, t) && n.push(a ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
            }, i.prototype.listeners = function(e, t) {
                var n = a ? a + e : e,
                    r = this._events[n];
                if (t) return !!r;
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var o = 0, i = r.length, s = new Array(i); o < i; o++) s[o] = r[o].fn;
                return s
            }, i.prototype.emit = function(e, t, n, r, o, i) {
                var s = a ? a + e : e;
                if (!this._events[s]) return !1;
                var c, u, l = this._events[s],
                    d = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(e, l.fn, void 0, !0), d) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, n), !0;
                        case 4:
                            return l.fn.call(l.context, t, n, r), !0;
                        case 5:
                            return l.fn.call(l.context, t, n, r, o), !0;
                        case 6:
                            return l.fn.call(l.context, t, n, r, o, i), !0
                    }
                    for (u = 1, c = new Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
                    l.fn.apply(l.context, c)
                } else {
                    var f, p = l.length;
                    for (u = 0; u < p; u++) switch (l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d) {
                        case 1:
                            l[u].fn.call(l[u].context);
                            break;
                        case 2:
                            l[u].fn.call(l[u].context, t);
                            break;
                        case 3:
                            l[u].fn.call(l[u].context, t, n);
                            break;
                        case 4:
                            l[u].fn.call(l[u].context, t, n, r);
                            break;
                        default:
                            if (!c) for (f = 1, c = new Array(d - 1); f < d; f++) c[f - 1] = arguments[f];
                            l[u].fn.apply(l[u].context, c)
                    }
                }
                return !0
            }, i.prototype.on = function(e, t, n) {
                var r = new o(t, n || this),
                    i = a ? a + e : e;
                return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], r] : this._events[i].push(r) : (this._events[i] = r, this._eventsCount++), this
            }, i.prototype.once = function(e, t, n) {
                var r = new o(t, n || this, !0),
                    i = a ? a + e : e;
                return this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], r] : this._events[i].push(r) : (this._events[i] = r, this._eventsCount++), this
            }, i.prototype.removeListener = function(e, t, n, o) {
                var i = a ? a + e : e;
                if (!this._events[i]) return this;
                if (!t) return 0 === --this._eventsCount ? this._events = new r : delete this._events[i], this;
                var s = this._events[i];
                if (s.fn) s.fn !== t || o && !s.once || n && s.context !== n || (0 === --this._eventsCount ? this._events = new r : delete this._events[i]);
                else {
                    for (var c = 0, u = [], l = s.length; c < l; c++)(s[c].fn !== t || o && !s[c].once || n && s[c].context !== n) && u.push(s[c]);
                    u.length ? this._events[i] = 1 === u.length ? u[0] : u : 0 === --this._eventsCount ? this._events = new r : delete this._events[i]
                }
                return this
            }, i.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = a ? a + e : e, this._events[t] && (0 === --this._eventsCount ? this._events = new r : delete this._events[t])) : (this._events = new r, this._eventsCount = 0), this
            }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
                return this
            }, i.prefixed = a, i.EventEmitter = i, e.exports = i
        }, function(e, t) {
            "use strict";
            var o = {
                201: "客户端版本不对, 需升级sdk",
                302: "用户名或密码错误, 请检查appKey和token是否有效, account和token是否匹配",
                403: "非法操作或没有权限",
                404: "对象(用户/群/聊天室)不存在",
                405: "参数长度过长",
                408: "客户端请求超时",
                414: "参数错误",
                415: "服务不可用/没有聊天室服务器可分配",
                416: "频率控制",
                417: "重复操作",
                422: "帐号被禁用",
                500: "服务器内部错误",
                501: "数据库操作失败",
                503: "服务器繁忙",
                508: "删除有效期过了",
                509: "已失效",
                7101: "被拉黑",
                801: "群人数达到上限",
                802: "没有权限",
                803: "群不存在或未发生变化",
                804: "用户不在群里面",
                805: "群类型不匹配",
                806: "创建群数量达到限制",
                807: "群成员状态不对",
                809: "已经在群里",
                813: "因群数量限制，部分拉人成功",
                997: "协议已失效",
                998: "解包错误",
                999: "打包错误",
                9102: "通道失效",
                9103: "已经在其他端接听/拒绝过这通电话",
                11001: "对方离线, 通话不可送达",
                13002: "聊天室状态异常",
                13003: "在黑名单中",
                13004: "在禁言名单中",
                13006: "聊天室处于整体禁言状态,只有管理员能发言",
                Connect_Failed: "无法建立连接, 请确保能 ping/telnet 到云信服务器; 如果是IE8/9, 请确保项目部署在 HTTPS 环境下",
                Error_Internet_Disconnected: "网断了",
                Error_Connection_is_not_Established: "连接未建立",
                Error_Connection_Socket_State_not_Match: "socket状态不对",
                Error_Timeout: "超时",
                Param_Error: "参数错误",
                No_File_Selected: "请选择文件",
                Wrong_File_Type: "文件类型错误",
                File_Too_Large: "文件过大",
                Cross_Origin_Iframe: "不能获取跨域Iframe的内容",
                Not_Support: "不支持",
                NO_DB: "无数据库",
                DB: "数据库错误",
                Still_In_Team: "还在群里",
                Session_Exist: "会话已存在",
                Session_Not_Exist: "会话不存在",
                Error_Unknown: "未知错误",
                Operation_Canceled: "操作取消"
            };
            [200, 406, 808, 810].forEach(function(e) {
                o[e] = null
            }), n.genError = function(e) {
                var t = o[e];
                return void 0 === t && (t = "操作失败"), null === t ? null : new n(t, e)
            }, n.multiInstance = function() {
                return new n("不允许初始化多个实例", "Not_Allow_Multi_Instance")
            }, n.newNetworkError = function() {
                var e = "Error_Internet_Disconnected";
                return new n(o[e], e)
            }, n.newConnectError = function(e) {
                var t = "Connect_Failed";
                return new n(o[t] || e, t)
            }, n.newConnectionError = function() {
                var e = "Error_Connection_is_not_Established";
                return new n(o[e], e)
            }, n.newSocketStateError = function() {
                var e = "Error_Connection_Socket_State_not_Match";
                return new n(o[e], e)
            }, n.newTimeoutError = function() {
                var e = "Error_Timeout";
                return new n(o[e], e)
            }, n.newFrequencyControlError = function() {
                var e = 416,
                    t = new n(o[e], e);
                return t.from = "local", t
            }, n.newParamError = function(e) {
                var t = "Param_Error";
                return new n(e || o[t], t)
            }, n.newNoFileError = function(e) {
                var t = "No_File_Selected";
                return new n(e || o[t], t)
            }, n.newWrongFileTypeError = function(e) {
                var t = "Wrong_File_Type";
                return new n(e || o[t], t)
            }, n.newFileTooLargeError = function(e) {
                var t = "File_Too_Large";
                return new n(e || o[t], t)
            }, n.newCORSIframeError = function() {
                var e = "Cross_Origin_Iframe";
                return new n(o[e], e)
            }, n.newSupportError = function(e, t) {
                return new n("不支持" + e, "Not_Support_" + t)
            }, n.newSupportDBError = function() {
                return n.newSupportError("数据库", "DB")
            }, n.noDBError = function() {
                var e = "NO_DB";
                return new n(o[e], e)
            }, n.newDBError = function() {
                var e = "DB";
                return new n(o[e], e)
            }, n.newUnknownError = function() {
                var e = "Error_Unknown";
                return new n(o[e], e)
            }, n.stillInTeamError = function() {
                var e = "Still_In_Team";
                return new n(o[e], e)
            }, n.sessionExist = function() {
                var e = "Session_Exist";
                return new n(o[e], e)
            }, n.sessionNotExist = function() {
                var e = "Session_Not_Exist";
                return new n(o[e], e)
            }, n.cancel = function() {
                var e = "Operation_Canceled";
                return new n(o[e], e)
            }, n.customError = function(e, t, i) {
                return e = e || "Other_Error", i || (i = o[e] || e), "object" !== ("undefined" == typeof e ? "undefined" : r(e)) ? new n(i, e, t) : "undefined" == typeof t ? new n(i, "Other_Error", e) : new n(i, "Other_Error", t)
            }, e.exports = n
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                u.verifyOptions(e, "appKey account token"), u.verifyCallback(e, ["onconnect", "onerror", "onwillreconnect", "ondisconnect", "onloginportschange", "onmyinfo", "onblacklist", "onmutelist", "onfriends", "onusers", "onrobots", "onteams", "onsessions", "onroamingmsgs", "onofflinemsgs", "onofflinefiltermsgs", "onroamingsysmsgs", "onofflinesysmsgs", "onofflinefiltersysmsgs", "onofflinecustomsysmsgs", "onofflinefiltercustomsysmsgs", "onbroadcastmsg", "onbroadcastmsgs", "onsysmsgunread", "onsyncdone", "onteammembers", "onsyncteammembersdone", "onmsg", "onsysmsg", "oncustomsysmsg", "onupdatemyinfo", "onupdateuser", "onupdateteammember", "onCreateTeam", "onUpdateTeam", "onAddTeamMembers", "onRemoveTeamMembers", "onUpdateTeamManagers", "onDismissTeam", "onTransferTeam", "onUpdateTeamMembersMute", "onupdatesession", "onupdatesysmsgunread", "onupdatesysmsg", "onsynccreateteam", "onsyncmarkinblacklist", "onsyncmarkinmutelist", "onsyncfriendaction", "shouldIgnoreNotification", "shouldCountNotifyUnread", "onPushNotificationMultiportConfig", "onPushNotificationMultiportConfigUpdate", "onpushevents"]), t.db = e.api.db = new i({
                    logger: e.logger
                }), s.call(t, e)
            }
            var o = n(2).Promise,
                i = n(13),
                s = n(17),
                a = n(5),
                c = n(3),
                u = n(1),
                l = u.undef,
                d = n(61),
                f = n(22).getInstance("IM"),
                p = n(31),
                m = s.fn,
                y = r.fn = r.prototype = Object.create(m);
            y.init = function() {
                var e = this;
                m.init.call(e), e.socketUrls = [], e.parser = f, e.syncing = !0, e.hasSynced = !1, e.hasSyncedTeamMembers = !1, e.syncPromiseArray = [], e.syncResult = {}, e.syncTeamMembersPromiseArray = [], e.syncTeamMembersResult = {}, e.timetags = {}, e.sysMsgUnread = p.completeUnread({}), e.resetUnsettledMsgs(), e.resetUnsettledSysMsgs(), e.msgPromise = o.resolve(), e.sysMsgPromise = o.resolve(), e.sessionSet = {}, e.msgReceiptTasks = {}, e.userSet = {}, e.pushNotificationMultiportConfig = d.getDefaultConfig()
            }, y.reset = function() {
                var e = this;
                m.reset.call(e);
                var t = e.options;
                e.db.reset(t.db), l(t.lbsUrl) && (t.lbsUrl = c.lbsUrl), e.resetAutoMarkRead()
            }, y.resetAutoMarkRead = function() {
                var e = this.options;
                u.verifyBooleanWithDefault(e, "autoMarkRead", !0)
            }, y.resetUnsettledMsgs = function() {
                var e = this;
                e.unhandledMsgs = [], e.unupdatedMsgs = []
            }, y.resetUnsettledSysMsgs = function() {
                var e = this;
                e.unhandledSysMsgs = [], e.unupdatedSysMsgs = []
            }, y.packetFromSync = function(e) {
                return !e.obj || !! e.obj.sync
            }, y.onDBError = function(e, t) {
                var n = a.newDBError();
                n.event = t, this.onMiscError(e, n)
            }, y.onCustomError = function(e, t, n) {
                var r = a.customError(t, n);
                this.onMiscError(e, r)
            }, e.exports = r, n(178), n(176), n(190), n(193), n(181), n(187), n(192), n(186), n(182), n(184), n(183), n(191), n(188), n(189), n(177), n(180), n(179)
        }, , function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                return t.subType = "im", e.Protocol = i, e.Message = a, e.constructor = r, t.init(e)
            }
            var o = n(14),
                i = n(6),
                s = n(3),
                a = n(163),
                c = n(22).getInstance("IM");
            r.Protocol = i, r.parser = c, r.use = o.use, r.getInstance = o.getInstance, r.rmAllInstances = o.rmAllInstances, r.genInstanceName = function(e) {
                return "NIM-account-" + e.account
            };
            var u = r.fn = r.prototype = Object.create(o.prototype);
            r.info = u.info = s.info, e.exports = r, n(126), n(122), n(132), n(137), n(125), n(133), n(136), n(134), n(127), n(135), n(121), n(129), n(130), n(120), n(123), n(131), n(124)
        }, function(e, t) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }
            function r() {
                throw new Error("clearTimeout has not been defined")
            }
            function o(e) {
                if (l === setTimeout) return setTimeout(e, 0);
                if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
                try {
                    return l(e, 0)
                } catch (t) {
                    try {
                        return l.call(null, e, 0)
                    } catch (t) {
                        return l.call(this, e, 0)
                    }
                }
            }
            function i(e) {
                if (d === clearTimeout) return clearTimeout(e);
                if ((d === r || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
                try {
                    return d(e)
                } catch (t) {
                    try {
                        return d.call(null, e)
                    } catch (t) {
                        return d.call(this, e)
                    }
                }
            }
            function s() {
                y && p && (y = !1, p.length ? m = p.concat(m) : g = -1, m.length && a())
            }
            function a() {
                if (!y) {
                    var e = o(s);
                    y = !0;
                    for (var t = m.length; t;) {
                        for (p = m, m = []; ++g < t;) p && p[g].run();
                        g = -1, t = m.length
                    }
                    p = null, y = !1, i(e)
                }
            }
            function c(e, t) {
                this.fun = e, this.array = t
            }
            function u() {}
            var l, d, f = e.exports = {};
            !
                function() {
                    try {
                        l = "function" == typeof setTimeout ? setTimeout : n
                    } catch (e) {
                        l = n
                    }
                    try {
                        d = "function" == typeof clearTimeout ? clearTimeout : r
                    } catch (e) {
                        d = r
                    }
                }();
            var p, m = [],
                y = !1,
                g = -1;
            f.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                m.push(new c(e, t)), 1 !== m.length || y || o(a)
            }, c.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(e) {
                return []
            }, f.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, f.cwd = function() {
                return "/"
            }, f.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, f.umask = function() {
                return 0
            }
        }, function(e, t) {
            (function(e) {
                "use strict";

                function n() {
                    return "undefined" != typeof window ? window : "undefined" != typeof self ? self : "undefined" != typeof e ? e : {}
                }
                function r(e) {
                    var t = !1,
                        n = "Webkit Moz ms O".split(" "),
                        r = document.createElement("div"),
                        o = null;
                    if (e = e.toLowerCase(), void 0 !== r.style[e] && (t = !0), t === !1) {
                        o = e.charAt(0).toUpperCase() + e.substr(1);
                        for (var i = 0; i < n.length; i++) if (void 0 !== r.style[n[i] + o]) {
                            t = !0;
                            break
                        }
                    }
                    return t
                }
                function o(e, t) {
                    t = t || 2;
                    for (var n = "" + e; n.length < t;) n = "0" + n;
                    return n
                }
                function i(e) {
                    return "" + e.getFullYear()
                }
                function s(e) {
                    return o(e.getMonth() + 1)
                }
                function a(e) {
                    return o(e.getDate())
                }
                function c(e) {
                    return o(e.getHours())
                }
                function u(e) {
                    return o(e.getMinutes())
                }
                function l(e) {
                    return o(e.getSeconds())
                }
                function d(e) {
                    return o(e.getMilliseconds(), 3)
                }
                function f(e) {
                    return e = "" + e, new Date(e.replace(/-/g, "/").replace("T", " "))
                }
                function p(e) {
                    return Object.prototype.toString.call(e).slice(8, -1)
                }
                function m(e) {
                    return p(e).toLowerCase()
                }
                function y(e) {
                    return "string" === m(e)
                }
                function g(e) {
                    return "number" === m(e)
                }
                function h(e) {
                    return "boolean" === m(e)
                }
                function v(e) {
                    return "array" === m(e)
                }
                function b(e) {
                    return "function" === m(e)
                }
                function M(e) {
                    return "date" === m(e)
                }
                function T(e) {
                    return "regexp" === m(e)
                }
                function S(e) {
                    return "error" === m(e)
                }
                function k(e) {
                    return null === e
                }
                function w(e) {
                    return null !== e
                }
                function O(e) {
                    return "undefined" == typeof e
                }
                function C(e) {
                    return "undefined" != typeof e
                }
                function I(e) {
                    return C(e) && w(e)
                }
                function x(e) {
                    return O(e) || k(e)
                }
                function _(e) {
                    return I(e) && "object" === m(e)
                }
                function E(e) {
                    return x(e) || (y(e) || v(e)) && 0 === e.length
                }
                function P(e, t) {
                    if (e === t) return !0;
                    for (; t.parentNode;) {
                        if (t.parentNode === e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }
                function A(e) {
                    var t = e.parentNode || document.body;
                    e = e.cloneNode(!0), e.style.display = "block", e.style.opacity = 0, e.style.height = "auto", t.appendChild(e);
                    var n = e.offsetHeight;
                    return t.removeChild(e), n
                }
                function j(e) {
                    e.parentNode && e.parentNode.removeChild(e)
                }
                function R(e, t, n) {
                    return I(n) ? void e.setAttribute("data-" + t, n) : e.getAttribute("data-" + t)
                }
                function F(e) {
                    return e.target || e.srcElement
                }
                function N(e) {
                    function t(r) {
                        n.src && (e.multi || ie(n, "load", t), e.onload(r))
                    }
                    e = e || {};
                    var n;
                    if (e.name) try {
                        n = document.createElement('<iframe name="' + e.name + '"></iframe>'), n.frameBorder = 0
                    } catch (r) {
                        n = document.createElement("iframe"), n.name = e.name
                    } else n = document.createElement("iframe");
                    e.visible || (n.style.display = "none"), b(e.onload) && re(n, "load", t);
                    var o = e.parent;
                    (o || document.body).appendChild(n);
                    var i = e.src || "about:blank";
                    return setTimeout(function() {
                        n.src = i
                    }, 0), n
                }
                function U(e) {
                    var t = document.createElement("div");
                    t.innerHTML = e;
                    var n = [],
                        r = void 0,
                        o = void 0;
                    if (t.children) for (r = 0, o = t.children.length; r < o; r++) n.push(t.children[r]);
                    else for (r = 0, o = t.childNodes.length; r < o; r++) {
                        var i = t.childNodes[r];
                        1 === i.nodeType && n.push(i)
                    }
                    return n.length > 1 ? t : n[0]
                }
                function D(e) {
                    return I(e) && (document.documentElement.scrollTop = document.body.scrollTop = e), window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                }
                function B(e) {
                    var t = n(),
                        r = void 0;
                    r = e.split(",")[0].indexOf("base64") >= 0 ? t.atob(e.split(",")[1]) : t.decodeURIComponent(e.split(",")[1]);
                    for (var o = e.split(",")[0].split(":")[1].split(";")[0], i = new Uint8Array(r.length), s = 0; s < r.length; s++) i[s] = r.charCodeAt(s);
                    return new t.Blob([i], {
                        type: o
                    })
                }
                function L(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "image/jpeg",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    if (e.toBlob) e.toBlob(t, n, r);
                    else {
                        var o = e.toDataURL(n, r);
                        t(B(o))
                    }
                }
                function q() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                        n = arguments[2];
                    for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r])
                }
                function W(e, t) {
                    q(t, function(t, n) {
                        e[t] = n
                    })
                }
                function H(e) {
                    return y(e) && 0 === e.indexOf("{") && e.lastIndexOf("}") === e.length - 1
                }
                function $(e) {
                    try {
                        H(e) && (e = JSON.parse(e)), _(e) && q(e, function(t, n) {
                            switch (m(n)) {
                                case "string":
                                case "object":
                                    e[t] = $(n)
                            }
                        })
                    } catch (t) {
                        console.error(t)
                    }
                    return e
                }
                function J(e) {
                    return JSON.parse(JSON.stringify(e))
                }
                function X() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return n.forEach(function(t) {
                        W(e, t)
                    }), e
                }
                function V(e, t) {
                    return q(t, function(t, n) {
                        O(e[t]) && (e[t] = n)
                    }), e
                }
                function K(e, t, n) {
                    var r = e[t] || e[t.toLowerCase()];
                    return x(r) && (r = n, e[t] = r), r
                }
                function z(e, t) {
                    return q(e, function(n, r) {
                        I(t[n]) && (e[n] = t[n])
                    }), e
                }
                function G() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",",
                        n = {};
                    return e.split(t).forEach(function(e) {
                        var t = e.split("="),
                            r = t.shift();
                        r && (n[decodeURIComponent(r)] = decodeURIComponent(t.join("=")))
                    }), n
                }
                function Y(e, t, n) {
                    if (!e) return "";
                    var r = [];
                    return q(e, function(e, t) {
                        b(t) || (M(t) ? t = t.getTime() : v(t) ? t = t.join(",") : _(t) && (t = JSON.stringify(t)), n && (t = encodeURIComponent(t)), r.push(encodeURIComponent(e) + "=" + t))
                    }), r.join(t || ",")
                }
                function Z(e) {
                    return e.indexOf("?") < 0 ? "?" : "&"
                }
                function Q(e) {
                    return Y(e, "&", !0)
                }
                function ee(e) {
                    var t = n();
                    return e.tagName && "INPUT" === e.tagName.toUpperCase() || t.Blob && e instanceof t.Blob
                }
                function te(e, t) {
                    var n = Object.keys(e);
                    return t && n.sort(function(t, n) {
                        var r = ee(e[t]),
                            o = ee(e[n]);
                        return r === o ? 0 : r ? 1 : -1
                    }), n
                }
                t.__esModule = !0, t.getGlobal = n, t.detectCSSFeature = r, t.fix = o, t.getYearStr = i, t.getMonthStr = s, t.getDayStr = a, t.getHourStr = c, t.getMinuteStr = u, t.getSecondStr = l, t.getMillisecondStr = d, t.dateFromDateTimeLocal = f, t.getClass = p, t.typeOf = m, t.isString = y, t.isNumber = g, t.isBoolean = h, t.isArray = v, t.isFunction = b, t.isDate = M, t.isRegExp = T, t.isError = S, t.isnull = k, t.notnull = w, t.undef = O, t.notundef = C, t.exist = I, t.notexist = x, t.isObject = _, t.isEmpty = E, t.containsNode = P, t.calcHeight = A, t.remove = j, t.dataset = R, t.target = F, t.createIframe = N, t.html2node = U, t.scrollTop = D, t.blobFromDataURL = B, t.blobFromCanvas = L, t.forOwn = q, t.mixin = W, t.isJSON = H, t.parseJSON = $, t.simpleClone = J, t.merge = X, t.fillUndef = V, t.checkWithDefault = K, t.fetch = z, t.string2object = G, t.object2string = Y, t.genUrlSep = Z, t.object2query = Q, t.isFileInput = ee, t.getKeys = te;
                var ne = (t.o = {}, t.emptyObj = {}, t.f = function() {}, t.emptyFunc = function() {}, t.regBlank = /\s+/gi, t.regWhiteSpace = /\s+/gi, t.format = function() {
                        var e = /yyyy|MM|dd|hh|mm|ss|SSS/g,
                            t = {
                                yyyy: i,
                                MM: s,
                                dd: a,
                                hh: c,
                                mm: u,
                                ss: l,
                                SSS: d
                            };
                        return function(n, r) {
                            return n = new Date(n), isNaN(+n) ? "invalid date" : (r = r || "yyyy-MM-dd", r.replace(e, function(e) {
                                return t[e](n)
                            }))
                        }
                    }(), t.addEventListener = function(e, t, n) {
                        e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                    }),
                    re = t.on = ne,
                    oe = t.removeEventListener = function(e, t, n) {
                        e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                    },
                    ie = t.off = oe;
                t.uniqueID = function() {
                    var e = 0;
                    return function() {
                        return "" + e++
                    }
                }(), t.url2origin = function() {
                    var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
                    return function(t) {
                        return e.test(t || "") ? RegExp.$1.toLowerCase() : ""
                    }
                }()
            }).call(t, function() {
                return this
            }())
        }, , function(e, t, n) {
            var r;
            (function(e, o) {
                (function() {
                    "use strict";

                    function i(e) {
                        return e = String(e), e.charAt(0).toUpperCase() + e.slice(1)
                    }
                    function s(e, t, n) {
                        var r = {
                            "10.0": "10",
                            6.4: "10 Technical Preview",
                            6.3: "8.1",
                            6.2: "8",
                            6.1: "Server 2008 R2 / 7",
                            "6.0": "Server 2008 / Vista",
                            5.2: "Server 2003 / XP 64-bit",
                            5.1: "XP",
                            5.01: "2000 SP1",
                            "5.0": "2000",
                            "4.0": "NT",
                            "4.90": "ME"
                        };
                        return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r), e = String(e), t && n && (e = e.replace(RegExp(t, "i"), n)), e = c(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                    }
                    function a(e, t) {
                        var n = -1,
                            r = e ? e.length : 0;
                        if ("number" == typeof r && r > -1 && r <= S) for (; ++n < r;) t(e[n], n, e);
                        else u(e, t)
                    }
                    function c(e) {
                        return e = m(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : i(e)
                    }
                    function u(e, t) {
                        for (var n in e) C.call(e, n) && t(e[n], n, e)
                    }
                    function l(e) {
                        return null == e ? i(e) : I.call(e).slice(8, -1)
                    }
                    function d(e, t) {
                        var n = null != e ? typeof e[t] : "number";
                        return !(/^(?:boolean|number|string|undefined)$/.test(n) || "object" == n && !e[t])
                    }
                    function f(e) {
                        return String(e).replace(/([ -])(?!$)/g, "$1?")
                    }
                    function p(e, t) {
                        var n = null;
                        return a(e, function(r, o) {
                            n = t(n, r, o, e)
                        }), n
                    }
                    function m(e) {
                        return String(e).replace(/^ +| +$/g, "")
                    }
                    function y(e) {
                        function t(t) {
                            return p(t, function(t, n) {
                                return t || RegExp("\\b" + (n.pattern || f(n)) + "\\b", "i").exec(e) && (n.label || n)
                            })
                        }
                        function n(t) {
                            return p(t, function(t, n, r) {
                                return t || (n[z] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(z)] || RegExp("\\b" + f(r) + "(?:\\b|\\w*\\d)", "i").exec(e)) && r
                            })
                        }
                        function r(t) {
                            return p(t, function(t, n) {
                                return t || RegExp("\\b" + (n.pattern || f(n)) + "\\b", "i").exec(e) && (n.label || n)
                            })
                        }
                        function o(t) {
                            return p(t, function(t, n) {
                                var r = n.pattern || f(n);
                                return !t && (t = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(e)) && (t = s(t, r, n.label || n)), t
                            })
                        }
                        function i(t) {
                            return p(t, function(t, n) {
                                var r = n.pattern || f(n);
                                return !t && (t = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(e) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(e) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(e)) && ((t = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : t).split("/"))[1] && !/[\d.]+/.test(t[0]) && (t[0] += " " + t[1]), n = n.label || n, t = c(t[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), t
                            })
                        }
                        function a(t) {
                            return p(t, function(t, n) {
                                return t || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(e) || 0)[1] || null
                            })
                        }
                        function g() {
                            return this.description || ""
                        }
                        var b = h,
                            M = e && "object" == typeof e && "String" != l(e);
                        M && (b = e, e = null);
                        var T = b.navigator || {},
                            S = T.userAgent || "";
                        e || (e = S);
                        var O, C, x = M || w == v,
                            _ = M ? !! T.likeChrome : /\bChrome\b/.test(e) && !/internal|\n/i.test(I.toString()),
                            E = "Object",
                            P = M ? E : "ScriptBridgingProxyObject",
                            A = M ? E : "Environment",
                            j = M && b.java ? "JavaPackage" : l(b.java),
                            R = M ? E : "RuntimeObject",
                            F = /\bJava/.test(j) && b.java,
                            N = F && l(b.environment) == A,
                            U = F ? "a" : "α",
                            D = F ? "b" : "β",
                            B = b.document || {},
                            L = b.operamini || b.opera,
                            q = k.test(q = M && L ? L["[[Class]]"] : l(L)) ? q : L = null,
                            W = e,
                            H = [],
                            $ = null,
                            J = e == S,
                            X = J && L && "function" == typeof L.version && L.version(),
                            V = t([{
                                label: "EdgeHTML",
                                pattern: "Edge"
                            }, "Trident",
                                {
                                    label: "WebKit",
                                    pattern: "AppleWebKit"
                                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                            K = r(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon",
                                {
                                    label: "Microsoft Edge",
                                    pattern: "Edge"
                                }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt",
                                {
                                    label: "Samsung Internet",
                                    pattern: "SamsungBrowser"
                                }, "SeaMonkey",
                                {
                                    label: "Silk",
                                    pattern: "(?:Cloud9|Silk-Accelerated)"
                                }, "Sleipnir", "SlimBrowser",
                                {
                                    label: "SRWare Iron",
                                    pattern: "Iron"
                                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini",
                                {
                                    label: "Opera Mini",
                                    pattern: "OPiOS"
                                }, "Opera",
                                {
                                    label: "Opera",
                                    pattern: "OPR"
                                }, "Chrome",
                                {
                                    label: "Chrome Mobile",
                                    pattern: "(?:CriOS|CrMo)"
                                }, {
                                    label: "Firefox",
                                    pattern: "(?:Firefox|Minefield)"
                                }, {
                                    label: "Firefox for iOS",
                                    pattern: "FxiOS"
                                }, {
                                    label: "IE",
                                    pattern: "IEMobile"
                                }, {
                                    label: "IE",
                                    pattern: "MSIE"
                                }, "Safari"]),
                            z = i([{
                                label: "BlackBerry",
                                pattern: "BB10"
                            }, "BlackBerry",
                                {
                                    label: "Galaxy S",
                                    pattern: "GT-I9000"
                                }, {
                                    label: "Galaxy S2",
                                    pattern: "GT-I9100"
                                }, {
                                    label: "Galaxy S3",
                                    pattern: "GT-I9300"
                                }, {
                                    label: "Galaxy S4",
                                    pattern: "GT-I9500"
                                }, {
                                    label: "Galaxy S5",
                                    pattern: "SM-G900"
                                }, {
                                    label: "Galaxy S6",
                                    pattern: "SM-G920"
                                }, {
                                    label: "Galaxy S6 Edge",
                                    pattern: "SM-G925"
                                }, {
                                    label: "Galaxy S7",
                                    pattern: "SM-G930"
                                }, {
                                    label: "Galaxy S7 Edge",
                                    pattern: "SM-G935"
                                }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
                                {
                                    label: "Kindle Fire",
                                    pattern: "(?:Cloud9|Silk-Accelerated)"
                                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer",
                                {
                                    label: "Wii U",
                                    pattern: "WiiU"
                                }, "Wii", "Xbox One",
                                {
                                    label: "Xbox 360",
                                    pattern: "Xbox"
                                }, "Xoom"]),
                            G = n({
                                Apple: {
                                    iPad: 1,
                                    iPhone: 1,
                                    iPod: 1
                                },
                                Archos: {},
                                Amazon: {
                                    Kindle: 1,
                                    "Kindle Fire": 1
                                },
                                Asus: {
                                    Transformer: 1
                                },
                                "Barnes & Noble": {
                                    Nook: 1
                                },
                                BlackBerry: {
                                    PlayBook: 1
                                },
                                Google: {
                                    "Google TV": 1,
                                    Nexus: 1
                                },
                                HP: {
                                    TouchPad: 1
                                },
                                HTC: {},
                                LG: {},
                                Microsoft: {
                                    Xbox: 1,
                                    "Xbox One": 1
                                },
                                Motorola: {
                                    Xoom: 1
                                },
                                Nintendo: {
                                    "Wii U": 1,
                                    Wii: 1
                                },
                                Nokia: {
                                    Lumia: 1
                                },
                                Samsung: {
                                    "Galaxy S": 1,
                                    "Galaxy S2": 1,
                                    "Galaxy S3": 1,
                                    "Galaxy S4": 1
                                },
                                Sony: {
                                    PlayStation: 1,
                                    "PlayStation Vita": 1
                                }
                            }),
                            Y = o(["Windows Phone", "Android", "CentOS",
                                {
                                    label: "Chrome OS",
                                    pattern: "CrOS"
                                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                        if (V && (V = [V]), G && !z && (z = i([G])), (O = /\bGoogle TV\b/.exec(z)) && (z = O[0]), /\bSimulator\b/i.test(e) && (z = (z ? z + " " : "") + "Simulator"), "Opera Mini" == K && /\bOPiOS\b/.test(e) && H.push("running in Turbo/Uncompressed mode"), "IE" == K && /\blike iPhone OS\b/.test(e) ? (O = y(e.replace(/like iPhone OS/, "")), G = O.manufacturer, z = O.product) : /^iP/.test(z) ? (K || (K = "Safari"), Y = "iOS" + ((O = / OS ([\d_]+)/i.exec(e)) ? " " + O[1].replace(/_/g, ".") : "")) : "Konqueror" != K || /buntu/i.test(Y) ? G && "Google" != G && (/Chrome/.test(K) && !/\bMobile Safari\b/i.test(e) || /\bVita\b/.test(z)) || /\bAndroid\b/.test(Y) && /^Chrome/.test(K) && /\bVersion\//i.test(e) ? (K = "Android Browser", Y = /\bAndroid\b/.test(Y) ? Y : "Android") : "Silk" == K ? (/\bMobi/i.test(e) || (Y = "Android", H.unshift("desktop mode")), /Accelerated *= *true/i.test(e) && H.unshift("accelerated")) : "PaleMoon" == K && (O = /\bFirefox\/([\d.]+)\b/.exec(e)) ? H.push("identifying as Firefox " + O[1]) : "Firefox" == K && (O = /\b(Mobile|Tablet|TV)\b/i.exec(e)) ? (Y || (Y = "Firefox OS"), z || (z = O[1])) : !K || (O = !/\bMinefield\b/i.test(e) && /\b(?:Firefox|Safari)\b/.exec(K)) ? (K && !z && /[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(O + "/") + 8)) && (K = null), (O = z || G || Y) && (z || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Y)) && (K = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Y) ? Y : O) + " Browser")) : "Electron" == K && (O = (/\bChrome\/([\d.]+)\b/.exec(e) || 0)[1]) && H.push("Chromium " + O) : Y = "Kubuntu", X || (X = a(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", f(K), "(?:Firefox|Minefield|NetFront)"])), (O = "iCab" == V && parseFloat(X) > 3 && "WebKit" || /\bOpera\b/.test(K) && (/\bOPR\b/.test(e) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(e) && !/^(?:Trident|EdgeHTML)$/.test(V) && "WebKit" || !V && /\bMSIE\b/i.test(e) && ("Mac OS" == Y ? "Tasman" : "Trident") || "WebKit" == V && /\bPlayStation\b(?! Vita\b)/i.test(K) && "NetFront") && (V = [O]), "IE" == K && (O = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e) || 0)[1]) ? (K += " Mobile", Y = "Windows Phone " + (/\+$/.test(O) ? O : O + ".x"), H.unshift("desktop mode")) : /\bWPDesktop\b/i.test(e) ? (K = "IE Mobile", Y = "Windows Phone 8.x", H.unshift("desktop mode"), X || (X = (/\brv:([\d.]+)/.exec(e) || 0)[1])) : "IE" != K && "Trident" == V && (O = /\brv:([\d.]+)/.exec(e)) && (K && H.push("identifying as " + K + (X ? " " + X : "")), K = "IE", X = O[1]), J) {
                            if (d(b, "global")) if (F && (O = F.lang.System, W = O.getProperty("os.arch"), Y = Y || O.getProperty("os.name") + " " + O.getProperty("os.version")), x && d(b, "system") && (O = [b.system])[0]) {
                                Y || (Y = O[0].os || null);
                                try {
                                    O[1] = b.require("ringo/engine").version, X = O[1].join("."), K = "RingoJS"
                                } catch (Z) {
                                    O[0].global.system == b.system && (K = "Narwhal")
                                }
                            } else "object" == typeof b.process && !b.process.browser && (O = b.process) ? "object" == typeof O.versions ? "string" == typeof O.versions.electron ? (H.push("Node " + O.versions.node), K = "Electron", X = O.versions.electron) : "string" == typeof O.versions.nw && (H.push("Chromium " + X, "Node " + O.versions.node), K = "NW.js", X = O.versions.nw) : (K = "Node.js", W = O.arch, Y = O.platform, X = /[\d.]+/.exec(O.version), X = X ? X[0] : "unknown") : N && (K = "Rhino");
                            else l(O = b.runtime) == P ? (K = "Adobe AIR", Y = O.flash.system.Capabilities.os) : l(O = b.phantom) == R ? (K = "PhantomJS", X = (O = O.version || null) && O.major + "." + O.minor + "." + O.patch) : "number" == typeof B.documentMode && (O = /\bTrident\/(\d+)/i.exec(e)) ? (X = [X, B.documentMode], (O = +O[1] + 4) != X[1] && (H.push("IE " + X[1] + " mode"), V && (V[1] = ""), X[1] = O), X = "IE" == K ? String(X[1].toFixed(1)) : X[0]) : "number" == typeof B.documentMode && /^(?:Chrome|Firefox)\b/.test(K) && (H.push("masking as " + K + " " + X), K = "IE", X = "11.0", V = ["Trident"], Y = "Windows");
                            Y = Y && c(Y)
                        }
                        if (X && (O = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(X) || /(?:alpha|beta)(?: ?\d)?/i.exec(e + ";" + (J && T.appMinorVersion)) || /\bMinefield\b/i.test(e) && "a") && ($ = /b/i.test(O) ? "beta" : "alpha", X = X.replace(RegExp(O + "\\+?$"), "") + ("beta" == $ ? D : U) + (/\d+\+?/.exec(O) || "")), "Fennec" == K || "Firefox" == K && /\b(?:Android|Firefox OS)\b/.test(Y)) K = "Firefox Mobile";
                        else if ("Maxthon" == K && X) X = X.replace(/\.[\d.]+/, ".x");
                        else if (/\bXbox\b/i.test(z))"Xbox 360" == z && (Y = null), "Xbox 360" == z && /\bIEMobile\b/.test(e) && H.unshift("mobile mode");
                        else if (!/^(?:Chrome|IE|Opera)$/.test(K) && (!K || z || /Browser|Mobi/.test(K)) || "Windows CE" != Y && !/Mobi/i.test(e)) if ("IE" == K && J) try {
                            null === b.external && H.unshift("platform preview")
                        } catch (Z) {
                            H.unshift("embedded")
                        } else(/\bBlackBerry\b/.test(z) || /\bBB10\b/.test(e)) && (O = (RegExp(z.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(e) || 0)[1] || X) ? (O = [O, /BB10/.test(e)], Y = (O[1] ? (z = null, G = "BlackBerry") : "Device Software") + " " + O[0], X = null) : this != u && "Wii" != z && (J && L || /Opera/.test(K) && /\b(?:MSIE|Firefox)\b/i.test(e) || "Firefox" == K && /\bOS X (?:\d+\.){2,}/.test(Y) || "IE" == K && (Y && !/^Win/.test(Y) && X > 5.5 || /\bWindows XP\b/.test(Y) && X > 8 || 8 == X && !/\bTrident\b/.test(e))) && !k.test(O = y.call(u, e.replace(k, "") + ";")) && O.name && (O = "ing as " + O.name + ((O = O.version) ? " " + O : ""), k.test(K) ? (/\bIE\b/.test(O) && "Mac OS" == Y && (Y = null), O = "identify" + O) : (O = "mask" + O, K = q ? c(q.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(O) && (Y = null), J || (X = null)), V = ["Presto"], H.push(O));
                        else K += " Mobile";
                        (O = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(e) || 0)[1]) && (O = [parseFloat(O.replace(/\.(\d)$/, ".0$1")), O], "Safari" == K && "+" == O[1].slice(-1) ? (K = "WebKit Nightly", $ = "alpha", X = O[1].slice(0, -1)) : X != O[1] && X != (O[2] = (/\bSafari\/([\d.]+\+?)/i.exec(e) || 0)[1]) || (X = null), O[1] = (/\bChrome\/([\d.]+)/i.exec(e) || 0)[1], 537.36 == O[0] && 537.36 == O[2] && parseFloat(O[1]) >= 28 && "WebKit" == V && (V = ["Blink"]), J && (_ || O[1]) ? (V && (V[1] = "like Chrome"), O = O[1] || (O = O[0], O < 530 ? 1 : O < 532 ? 2 : O < 532.05 ? 3 : O < 533 ? 4 : O < 534.03 ? 5 : O < 534.07 ? 6 : O < 534.1 ? 7 : O < 534.13 ? 8 : O < 534.16 ? 9 : O < 534.24 ? 10 : O < 534.3 ? 11 : O < 535.01 ? 12 : O < 535.02 ? "13+" : O < 535.07 ? 15 : O < 535.11 ? 16 : O < 535.19 ? 17 : O < 536.05 ? 18 : O < 536.1 ? 19 : O < 537.01 ? 20 : O < 537.11 ? "21+" : O < 537.13 ? 23 : O < 537.18 ? 24 : O < 537.24 ? 25 : O < 537.36 ? 26 : "Blink" != V ? "27" : "28")) : (V && (V[1] = "like Safari"), O = O[0], O = O < 400 ? 1 : O < 500 ? 2 : O < 526 ? 3 : O < 533 ? 4 : O < 534 ? "4+" : O < 535 ? 5 : O < 537 ? 6 : O < 538 ? 7 : O < 601 ? 8 : "8"), V && (V[1] += " " + (O += "number" == typeof O ? ".x" : /[.+]/.test(O) ? "" : "+")), "Safari" == K && (!X || parseInt(X) > 45) && (X = O)), "Opera" == K && (O = /\bzbov|zvav$/.exec(Y)) ? (K += " ", H.unshift("desktop mode"), "zvav" == O ? (K += "Mini", X = null) : K += "Mobile", Y = Y.replace(RegExp(" *" + O + "$"), "")) : "Safari" == K && /\bChrome\b/.exec(V && V[1]) && (H.unshift("desktop mode"), K = "Chrome Mobile", X = null, /\bOS X\b/.test(Y) ? (G = "Apple", Y = "iOS 4.3+") : Y = null), X && 0 == X.indexOf(O = /[\d.]+$/.exec(Y)) && e.indexOf("/" + O + "-") > -1 && (Y = m(Y.replace(O, ""))), V && !/\b(?:Avant|Nook)\b/.test(K) && (/Browser|Lunascape|Maxthon/.test(K) || "Safari" != K && /^iOS/.test(Y) && /\bSafari\b/.test(V[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(K) && V[1]) && (O = V[V.length - 1]) && H.push(O), H.length && (H = ["(" + H.join("; ") + ")"]), G && z && z.indexOf(G) < 0 && H.push("on " + G), z && H.push((/^on /.test(H[H.length - 1]) ? "" : "on ") + z), Y && (O = / ([\d.+]+)$/.exec(Y), C = O && "/" == Y.charAt(Y.length - O[0].length - 1), Y = {
                            architecture: 32,
                            family: O && !C ? Y.replace(O[0], "") : Y,
                            version: O ? O[1] : null,
                            toString: function() {
                                var e = this.version;
                                return this.family + (e && !C ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                            }
                        }), (O = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(W)) && !/\bi686\b/i.test(W) ? (Y && (Y.architecture = 64, Y.family = Y.family.replace(RegExp(" *" + O), "")), K && (/\bWOW64\b/i.test(e) || J && /\w(?:86|32)$/.test(T.cpuClass || T.platform) && !/\bWin64; x64\b/i.test(e)) && H.unshift("32-bit")) : Y && /^OS X/.test(Y.family) && "Chrome" == K && parseFloat(X) >= 39 && (Y.architecture = 64), e || (e = null);
                        var Q = {};
                        return Q.description = e, Q.layout = V && V[0], Q.manufacturer = G, Q.name = K, Q.prerelease = $, Q.product = z, Q.ua = e, Q.version = K && X, Q.os = Y || {
                            architecture: null,
                            family: null,
                            version: null,
                            toString: function() {
                                return "null"
                            }
                        }, Q.parse = y, Q.toString = g, Q.version && H.unshift(X), Q.name && H.unshift(K), Y && K && (Y != String(Y).split(" ")[0] || Y != K.split(" ")[0] && !z) && H.push(z ? "(" + Y + ")" : "on " + Y), H.length && (Q.description = H.join(" ")), Q
                    }
                    var g = {
                            "function": !0,
                            object: !0
                        },
                        h = g[typeof window] && window || this,
                        v = h,
                        b = g[typeof t] && t,
                        M = g[typeof e] && e && !e.nodeType && e,
                        T = b && M && "object" == typeof o && o;
                    !T || T.global !== T && T.window !== T && T.self !== T || (h = T);
                    var S = Math.pow(2, 53) - 1,
                        k = /\bOpera/,
                        w = this,
                        O = Object.prototype,
                        C = O.hasOwnProperty,
                        I = O.toString,
                        x = y();
                    h.platform = x, r = function() {
                        return x
                    }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
                }).call(this)
            }).call(t, n(16)(e), function() {
                return this
            }())
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                g = e, l.set("db", e, c)
            }
            function o(e) {
                this.concurrency = 0, this.pendingTasks = [], this.queue = i.resolve(), this.logger = e.logger
            }
            var i = n(2).Promise,
                s = n(12),
                a = n(37),
                c = n(57),
                u = n(1),
                l = n(66),
                d = n(5),
                f = d.newSupportDBError,
                p = d.noDBError,
                m = n(139),
                y = "nim-",
                g = !1,
                h = u.getGlobal();
            if (r( !! h.indexedDB), "IE" === s.name && r(!1), "Microsoft Edge" === s.name && r(!1), "Safari" === s.name) {
                try {
                    var v = parseInt(s.version.split(".")[0], 10);
                    v < 10 && r(!1)
                } catch (b) {}
                r(!1)
            }
            var M = o.fn = o.prototype;
            M.reset = u.emptyFunc, g && (M.reset = function(e) {
                this.enable = e !== !1
            }), M.addTask = function(e) {
                var t = this;
                return new i(function(n, r) {
                    function o(e) {
                        t.concurrency--;
                        var n = t.pendingTasks.shift();
                        n && t.addTask(n), e()
                    }
                    return t.concurrency < 100 ? (t.concurrency++, e().then(function(t) {
                        o(function() {
                            n(t), e.resolve && e.resolve(t)
                        })
                    }, function(t) {
                        o(function() {
                            r(t), e.reject && e.reject(t)
                        })
                    })) : (e.resolve || (e.resolve = n, e.reject = r), void t.pendingTasks.push(e))
                })
            }, M.init = function(e) {
                var t = this;
                return t.addTask(function() {
                    return t.enable ? t.server ? i.resolve() : (t.name = y + e, c.open({
                        server: t.name,
                        version: m.version,
                        schema: m.schema
                    }).then(function(e) {
                        t.logger.log("db::init: " + t.name), t.server = e
                    }, function(e) {
                        throw r(!1), t.server = null, t.name = null, e
                    })) : i.reject(f())
                })
            }, M.destroy = function() {
                var e = this;
                return e.addTask(function() {
                    return e.enable ? e.server ? c.remove(e.name).then(function() {
                        e.logger.log("db::destroy: " + e.name), e.server = null, e.name = null
                    }) : i.resolve() : i.reject(f())
                })
            }, M.clear = function() {
                var e = this;
                return e.addTask(function() {
                    return e.enable ? e.server ? e.server.clear("timetag").then(function() {
                        var t = [].slice.call(e.server.getIndexedDB().objectStoreNames),
                            n = [];
                        if (t.forEach(function(t) {
                                n.push(e.server.clear(t))
                            }), n.length) return i.all(n).then(function() {
                            e.logger.log("db::clear: " + e.name)
                        })
                    }) : i.resolve() : i.reject(f())
                })
            }, M.close = function() {
                var e = this;
                e.server && (e.server.close(), e.server = null, e.name = null)
            }, M.remove = function(e, t) {
                var n = this;
                return n.addTask(function() {
                    return n.enable ? n.server ? (u.isArray(t) || (t = [t]), n.server.remove(e, t).then(function() {
                        n.logger.log("db::delete: " + e + " " + (1 === t.length ? t[0] : t))
                    })) : i.reject(p()) : i.reject(f())
                })
            }, M.put = function(e, t) {
                var n = this;
                return n.addTask(function() {
                    return n.enable ? n.server ? (u.isArray(t) || (t = [t]), n.server.update(e, t).then(function(t) {
                        var r = ["put", e],
                            o = m.keyPath(e),
                            i = [];
                        return o && (t.forEach(function(e) {
                            i.push(a(e, o))
                        }), r.push(1 === i.length ? i[0] : i)), r.push(1 === t.length ? t[0] : t), r.unshift("db::put:"), n.logger.log.apply(n.logger.log, r), t
                    })) : i.reject(p()) : i.reject(f())
                })
            }, M.modifyOrPut = function(e) {
                var t = this,
                    n = e.table,
                    r = u.copy(e.obj),
                    o = e.key,
                    i = e.modifyObjWhenPut,
                    s = u.copy(r);
                return delete s[o], t.getOne(n, null, r[o], {
                    modifyObj: s
                }).then(function(e) {
                    return e ? (t.logger.log("db::modifyOrPut: update table " + n, r), e) : (r = u.merge(r, i), t.put(n, r).then(function(e) {
                        return e[0]
                    }))
                })
            }, M.updateAndDelete = function(e, t, n) {
                var r = this;
                return r.addTask(function() {
                    return r.enable ? r.server ? r.server.updateAndDelete(e, t, n) : i.reject(p()) : i.reject(f())
                })
            }, M.get = function(e, t) {
                var n = this;
                return n.addTask(function() {
                    return n.enable ? n.server ? n.server.get(e, t) : i.reject(p()) : i.reject(f())
                })
            }, M.getAll = function(e, t) {
                var n = this;
                return n.addTask(function() {
                    return n.enable ? n.server ? (t = t || {}, t.keys = t.keys === !0, t.desc = t.desc === !0, t.distinct = t.distinct === !0, n.server.query(e, t.index).filter(t.filter).keys(t.keys).desc(t.desc).limit(t.limit).distinct(t.distinct).map(t.mapper).modify(t.modifyObj).execute()) : i.reject(p()) : i.reject(f())
                })
            }, M.getOnly = function(e, t, n, r) {
                var o = this;
                return o.addTask(function() {
                    if (!o.enable) throw f();
                    if (!o.server) throw p();
                    return r = r || {}, r.keys = r.keys === !0, r.desc = r.desc === !0, r.distinct = r.distinct === !0, r.remove = r.remove === !0, o.server.query(e, t).only(n).filter(r.filter).keys(r.keys).desc(r.desc).limit(r.limit).distinct(r.distinct).map(r.mapper).modify(r.modifyObj).remove(r.remove).execute()
                })
            }, M.getOne = function() {
                var e = this;
                return e.getOnly.apply(e, arguments).then(function(e) {
                    return e[0]
                })
            }, M.clearTable = function(e) {
                var t = this;
                return t.addTask(function() {
                    if (!t.enable) throw f();
                    if (!t.server) throw p();
                    return t.server.clear(e)
                })
            }, M.checkDB = function() {
                var e = this;
                if (!e.enable) throw f();
                if (!e.server) throw p()
            }, e.exports = o, n(141), n(147), n(143), n(140), n(146), n(148), n(142), n(145), n(138), n(144)
        }, function(e, t, n) {
            "use strict";

            function r() {}
            var o = n(4),
                i = n(2).Promise,
                s = n(1),
                a = s.notundef,
                c = n(96),
                u = n(3),
                l = {};
            r.rmAllInstances = function() {
                l = {}
            }, r.getInstance = function(e) {
                var t = this;
                s.verifyOptions(e, "account");
                var n = t.genInstanceName(e),
                    o = l[n];
                return o ? r.updateInstance(o, e) : o = l[n] = new t(e), o
            }, r.updateInstance = function(e, t) {
                e.setOptions(t), e.connect()
            };
            var d = r.fn = r.prototype = Object.create(new o);
            d.init = function(e) {
                var t = this;
                s.verifyOptions(e, "account");
                var n = t.account = e.account = e.account + "",
                    o = e.constructor,
                    i = o.genInstanceName(e),
                    a = l[i];
                if (e._disableSingleton && (a = null), a) return r.updateInstance(a, e), a;
                t.name = i, l[i] = t, t.logger = e.logger = new c({
                    debug: e.debug,
                    logFunc: e.logFunc,
                    prefix: t.subType
                }), e.api = t;
                var d = t.protocol = new e.Protocol(e);
                return d.name = "Protocol-" + i, d.account = n, d.api = t, d.message = t.message = new e.Message({
                    account: n,
                    enabledHttpsForMessage: t.protocol.options.enabledHttpsForMessage || !1
                }), t.options = s.copy(e), u.ntServerAddress = null === e.ntServerAddress ? null : e.ntServerAddress || "https://dr.netease.im/1.gif", u.downloadHost = e.downloadHost || "nos.netease.com", e.uploadUrl && (u.uploadUrl = e.uploadUrl), e.downloadUrl && (u.downloadUrl = e.downloadUrl), u.replaceUrl = e.replaceUrl || "http://nos.netease.im", t.reset(), t
            }, d.reset = function() {
                var e = this,
                    t = e.options;
                s.verifyBooleanWithDefault(t, "exifOrientation", !0)
            }, d.setOptions = function(e) {
                this.reset(), this.protocol.setOptions(e)
            }, d.processCallback = function(e, t) {
                f(e, t)
            }, d.processCallbackPromise = function(e, t) {
                var n = new i(function(n, r) {
                    f(e, t, !0, n, r)
                });
                return n
            };
            var f = function(e, t, n, r, o) {
                s.verifyCallback(e, "done"), e.callback = function(i, c, u) {
                    var l = e.callback.options;
                    if (c = c || l, t && (c = l), s.isFunction(e.cbaop)) {
                        var d = e.cbaop(i, c);
                        a(d) && (c = d)
                    }
                    var f = e.done;
                    s.isObject(c) && (delete c.done, delete c.cb, delete c.callback), n ? i ? o(i) : r(c) : f(i, c, u)
                }, e.callback.options = s.copy(e)
            };
            d.processPs = function(e) {
                s.notexist(e.ps) && (e.ps = "")
            }, d.processCustom = function(e) {
                s.notexist(e.custom) && (e.custom = "")
            }, d.sendCmd = function() {
                this.protocol.sendCmd.apply(this.protocol, arguments)
            }, d.sendCmdWithResp = function(e, t, n) {
                this.sendCmd(e, t, function(e, t, r) {
                    s.isFunction(n) && (e ? n(e, t) : n(null, r))
                })
            }, d.cbAndSendCmd = function(e, t) {
                var n = this.processCallbackPromise(t);
                return this.sendCmd(e, t), n
            }, r.use = function(e, t) {
                e && e.install && s.isFunction(e.install) && e.install(this, t)
            }, e.exports = r, n(70), n(72), n(73), n(74), n(71)
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                o = {};
            o.init = function() {
                o.deviceId = r.guid()
            }, o.init(), o.clientTypeMap = {
                1: "Android",
                2: "iOS",
                4: "PC",
                8: "WindowsPhone",
                16: "Web",
                32: "Server",
                64: "Mac"
            }, e.exports = o
        }, function(e, t) {
            e.exports = function(e) {
                return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                o.undef(e.secure) && (e.secure = !0), t.options = o.copy(e), t.init(), t.connect()
            }
            var o = n(1),
                i = n(3),
                s = n(5),
                a = r.fn = r.prototype;
            a.init = function() {
                var e = this;
                e.logger = e.options.logger, e.cmdTaskArray = [], e.timerMap = {}, e.cmdCallbackMap = {}, e.cmdContentMap = {}, e.initConnect(), e.reset()
            }, a.reset = function() {
                var e = this;
                e.resetConnect()
            }, a.setOptions = function(e) {
                var t = this,
                    n = t.options,
                    r = Object.keys(n),
                    i = r.indexOf("account");
                i !== -1 && r.splice(i, 1), e = o.filterObj(e, r), t.options = o.merge(n, e), t.reset()
            }, a.sendCmd = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = arguments[2],
                    r = this;
                r.heartbeat(), "heartbeat" !== e && r.logger.warn("protocol::sendCmd: " + e, t);
                var o = e;
                e = r.parser.createCmd(e, t);
                var i, s = e.SER;
                t = t || {}, r.cmdContentMap[s] = t, t.single && (delete t.single, i = Object.keys(t), 1 === i.length && (r.cmdContentMap[s] = t[i[0]])), t.NOTSTORE && (i = t.NOTSTORE.split(" "), i.forEach(function(e) {
                    delete t[e]
                }), delete t.NOTSTORE), n = n || t.callback, n && (r.cmdCallbackMap[s] = n), r.cmdTaskArray.push({
                    cmdName: o,
                    cmd: JSON.stringify(e)
                }), r.startCmdTaskTimer()
            }, a.startCmdTaskTimer = function() {
                var e = this;
                e.cmdTaskTimer || (e.cmdTaskTimer = setTimeout(function() {
                    var t = e.cmdTaskArray.shift();
                    e.cmdTaskTimer = null, t && e.executeCmdTask(t), e.cmdTaskArray.length && e.startCmdTaskTimer()
                }, 0))
            }, a.executeCmdTask = function(e) {
                var t = this,
                    n = e.cmdName,
                    r = e.cmd;
                r = JSON.parse(r);
                var o = r.SER;
                t.isFrequencyControlled(n) ? (t.logger.warn("protocol::executeCmdTask: " + n + " hit freq control"), t.markCallbackInvalid(o, s.newFrequencyControlError())) : t.isConnected() ? (t.logger.log("protocol::sendCmd: " + n + " " + JSON.stringify(r)), t.doSendCmd(r)) : (t.logger.warn("protocol::executeCmdTask: " + n + " not connected"), t.markCallbackInvalid(o, s.newSocketStateError()))
            }, a.isFrequencyControlled = function(e) {
                var t = this.frequencyControlMap && this.frequencyControlMap[e];
                if (t) {
                    if (Date.now() < t.from + t.duration) return !0;
                    delete this.frequencyControlMap[e]
                }
            }, a.doSendCmd = function(e) {
                var t = this,
                    n = e.SER;
                t.timerMap[n] = setTimeout(function() {
                    t.markCallbackInvalid(n, s.newTimeoutError())
                }, i.cmdTimeout);
                try {
                    t.socket.send(JSON.stringify(e))
                } catch (r) {
                    t.markCallbackInvalid(n, s.newSocketStateError()), t.onDisconnect(!0)
                }
            }, a.getObjWithSer = function(e) {
                var t = this,
                    n = t.cmdContentMap[e];
                return delete t.cmdContentMap[e], n && o.copy(n)
            }, a.getCallbackWithSer = function(e) {
                var t = this,
                    n = t.cmdCallbackMap[e];
                return delete t.cmdCallbackMap[e], n
            }, a.getTimerWithSer = function(e) {
                var t = this,
                    n = t.timerMap[e];
                return delete t.timerMap[e], n
            }, a.clearTimerWithSer = function(e) {
                var t = this,
                    n = t.getTimerWithSer(e);
                n && clearTimeout(n)
            }, a.markCallbackInvalid = function(e, t) {
                var n = this;
                n.getObjWithSer(e), n.clearTimerWithSer(e);
                var r = n.getCallbackWithSer(e);
                if (r) {
                    var o = r.options;
                    setTimeout(function() {
                        r(t || s.newUnknownError(), o)
                    }, 0)
                }
            }, a.markAllCallbackInvalid = function(e) {
                var t = this;
                Object.keys(this.cmdCallbackMap).forEach(function(n) {
                    t.markCallbackInvalid(n, e)
                })
            }, a.getPacketObj = function(e) {
                var t = null;
                if (e && e.raw) {
                    var n = e.raw.ser;
                    o.notundef(n) && (t = this.getObjWithSer(n))
                }
                return t
            }, a.callPacketAckCallback = function(e) {
                var t = this;
                if (e && e.raw) {
                    var n = e.raw.ser;
                    if (o.notundef(n)) {
                        t.clearTimerWithSer(n);
                        var r = t.getCallbackWithSer(n);
                        r && (e.promise ? e.promise.then(function() {
                            r(e.error, e.obj)
                        }, function(n) {
                            var o = s.customError("CALLBACK_ACK_ERR", n);
                            t.logger.error("protocol::callPacketAckCallback: promise error " + JSON.stringify(n)), r(o, e.obj, e.content)
                        }) : r(e.error, e.obj, e.content))
                    }
                }
            }, a.onMessage = function(e) {
                var t = this;
                t.heartbeat();
                var n = t.parser.parseResponse(e);
                n.notFound && t.logger.warn("protocol::onMessage: packet not found " + JSON.stringify(n)), n.error ? (n.error.message = n.cmd + " error: " + n.error.message, t.logger.error("protocol::onMessage: packet error " + JSON.stringify(n.error))) : n.content || "heartbeat" === n.cmd || t.logger.warn("protocol::onMessage: packet.content undefined " + JSON.stringify(n)), n.frequencyControlDuration && (t.logger.error("protocol::onMessage: server freq control " + JSON.stringify(n.cmd)), t.frequencyControlMap = t.frequencyControlMap || {}, t.frequencyControlMap[n.cmd] = {
                    from: +new Date,
                    duration: n.frequencyControlDuration
                }), n.obj = t.getPacketObj(n), "heartbeat" !== n.cmd && t.logger.log("protocol::recvCmd: " + n.cmd + " " + n.rawStr);
                var r = "process" + o.capFirstLetter(n.service);
                t[r] ? (t.logger.warn("protocol::recvCmd: " + n.cmd + " " + r, n.content), t[r](n)) : t.logger.warn("protocol::onMessage: " + r + " not found"), t.callPacketAckCallback(n)
            }, a.onMiscError = function(e, t, n) {
                t && this.notifyError(e, t, n)
            }, a.notifyError = function(e, t, n) {
                var r = this;
                if (r.isConnected()) {
                    var o = [(e || "") + " " + r.name + " " + JSON.stringify(t)];
                    n && o.push(n), r.logger.error.apply(r.logger.error, o), r.options.onerror(t, n)
                }
            }, a.emitAPI = function(e) {
                var t = e.type,
                    n = e.obj;
                this.api.emit(t, n)
            }, e.exports = r, n(79), n(78), n(80), n(81)
        }, , function(e, t, n) {
            "use strict";

            function r(e) {
                i.verifyOptions(e, "scene to type"), i.verifyParamValid("scene", e.scene, m);
                var t = this;
                t.scene = f[e.scene], t.to = "" + e.to, t.type = y[e.type], t.resend = e.resend ? 1 : 0, e.resend ? (i.verifyOptions(e, "idClient"), t.idClient = e.idClient) : t.idClient = i.guid(), a(e.text) && (t.body = "" + e.text), a(e.custom) && ("object" === o(e.custom) ? (t.logger.warn("model::Message: custom should be JsonString, auto transfer"), t.custom = JSON.stringify(e.custom)) : t.custom = "" + e.custom), a(e.body) && (t.body = "" + e.body), a(e.pushContent) && (t.pushContent = "" + e.pushContent), a(e.pushPayload) && (t.pushPayload = "" + e.pushPayload);
                var n = e.apns;
                if (a(n) && "team" === e.scene) {
                    var r = n.accounts;
                    a(r) && i.verifyParamType("apns.accounts", r, "array"), t.apnsAccounts = r ? JSON.stringify(r) : d, t.apnsContent = n.content || e.pushContent || "", i.verifyBooleanWithDefault(n, "forcePush", !0, "options.apns"), t.apnsForcePush = n.forcePush ? 1 : 0
                }
                a(e.isHistoryable) && (t.isHistoryable = e.isHistoryable ? 1 : 0), a(e.isRoamingable) && (t.isRoamingable = e.isRoamingable ? 1 : 0), a(e.isSyncable) && (t.isSyncable = e.isSyncable ? 1 : 0), a(e.cc) && (t.cc = e.cc ? 1 : 0), a(e.isPushable) && (t.isPushable = e.isPushable ? 1 : 0), a(e.isOfflinable) && (t.isOfflinable = e.isOfflinable ? 1 : 0), a(e.isUnreadable) && (t.isUnreadable = e.isUnreadable ? 1 : 0), a(e.needPushNick) && (t.needPushNick = e.needPushNick ? 1 : 0), a(e.yidunEnable) && (t.yidunEnable = e.yidunEnable ? 1 : 0), a(e.antiSpamContent) && ("object" === o(e.antiSpamContent) ? (t.logger.warn("model::Message: antiSpamContent should be JsonString, auto transfer"), t.antiSpamContent = JSON.stringify(e.antiSpamContent)) : t.antiSpamContent = "" + e.antiSpamContent), a(e.antiSpamBusinessId) && ("object" === o(e.antiSpamBusinessId) ? (t.logger.warn("model::Message: antiSpamBusinessId should be JsonString, auto transfer"), t.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId)) : t.antiSpamBusinessId = "" + e.antiSpamBusinessId)
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i = n(1), s = i.undef, a = i.notundef, c = i.exist, u = n(29), l = n(68), d = "#%@all@%#", f = {
                p2p: 0,
                team: 1
            }, p = {
                0: "p2p",
                1: "team"
            }, m = Object.keys(f), y = l.typeMap, g = l.validTypes;
            r.prototype.getScene = function() {
                return p[this.scene]
            }, r.getScene = function(e) {
                var t = e.scene;
                return p[t] || t
            }, r.getType = l.getType, r.reverse = function(e) {
                var t = p[e.scene],
                    n = {
                        scene: t || e.scene,
                        from: e.from,
                        fromNick: e.fromNick,
                        fromClientType: u.reverseType(e.fromClientType),
                        fromDeviceId: e.fromDeviceId,
                        to: "" + e.to,
                        time: +e.time,
                        type: r.getType(e),
                        text: c(e.body) ? e.body : "",
                        isHistoryable: s(e.isHistoryable) || 1 === +e.isHistoryable,
                        isRoamingable: s(e.isRoamingable) || 1 === +e.isRoamingable,
                        isSyncable: s(e.isSyncable) || 1 === +e.isSyncable,
                        cc: s(e.cc) || 1 === +e.cc,
                        isPushable: s(e.isPushable) || 1 === +e.isPushable,
                        isOfflinable: s(e.isOfflinable) || 1 === +e.isOfflinable,
                        isUnreadable: s(e.isUnreadable) || 1 === +e.isUnreadable,
                        needPushNick: s(e.needPushNick) || 1 === +e.needPushNick,
                        isLocal: !1
                    };
                if (a(e.isMuted) && (n.isMuted = 1 === +e.isMuted), a(e.resend) && (n.resend = 1 === +e.resend), a(e.idClient) && (n.idClient = e.idClient), a(e.idServer) && (n.idServer = "" + e.idServer), a(e.userUpdateTime) && (n.userUpdateTime = +e.userUpdateTime), a(e.custom) && (n.custom = e.custom), a(e.pushContent) && (n.pushContent = e.pushContent), a(e.pushPayload) && (n.pushPayload = e.pushPayload), a(e.apnsAccounts)) {
                    if (n.apns = {}, e.apnsAccounts !== d) {
                        var o = e.apnsAccounts;
                        try {
                            n.apns.accounts = JSON.parse(o)
                        } catch (i) {
                            n.apns.accounts = []
                        }
                    }
                    n.apns.content = e.apnsContent || "", n.apns.forcePush = 1 === +e.apnsForcePush
                }
                return n.status = e.status || "success", a(e.filter) && (n.filter = e.filter), n
            }, r.setExtra = function(e, t) {
                e.target = r.getMsgTarget(e, t), e.sessionId = e.scene + "-" + e.target, l.setFlow(e, t)
            }, r.getMsgTarget = function(e, t) {
                return "p2p" === e.scene ? e.to === t ? e.from : e.to : "team" === e.scene ? e.to : void 0
            }, r.deduplication = function(e) {
                var t, n = {},
                    r = [];
                return e.forEach(function(e) {
                    t = e.idClient, n[t] || (n[t] = !0, r.push(e))
                }), r
            }, r.sortMsgs = function(e) {
                return e = e.slice(0), i.sortObjArray(e, {
                    sortPath: "time"
                }), e
            }, r.getLastMsg = function(e) {
                return e = r.sortMsgs(e), e[e.length - 1]
            }, r.getLastNotIgnoredMsg = function(e) {
                e = r.sortMsgs(e);
                for (var t = null, n = e.length - 1; n >= 0; n--) if (t = e[n], !t.ignore) return t;
                return null
            }, r.getMaxTimetag = function(e) {
                return r.getLastMsg(e).time
            }, r.validScenes = m, r.validTypes = g, e.exports = r
        }, , , function(e, t, n) {
            "use strict";

            function r(e) {
                this.mixin(e)
            }
            var o = n(1),
                i = o.undef,
                s = n(5),
                a = n(62),
                c = n(84),
                u = n(86),
                l = n(82),
                d = n(83),
                f = n(85);
            r.prototype.mixin = function(e) {
                var t = this;
                this.configMap = this.configMap || {}, ["idMap", "cmdConfig", "packetConfig"].forEach(function(n) {
                    t.configMap[n] = o.merge({}, t.configMap[n], e.configMap && e.configMap[n])
                }), ["serializeMap", "unserializeMap"].forEach(function(n) {
                    t[n] = o.merge({}, t[n], e[n])
                })
            };
            var p = new r({
                    configMap: a,
                    serializeMap: c,
                    unserializeMap: u
                }),
                m = new r({
                    configMap: l,
                    serializeMap: d,
                    unserializeMap: f
                });
            r.getInstance = function(e) {
                switch (e) {
                    case "IM":
                        return p;
                    case "Chatroom":
                        return m
                }
            }, r.prototype.createCmd = function() {
                var e = 1;
                return function(t, n) {
                    var r = this,
                        o = this.configMap.cmdConfig[t];
                    return t = {
                        SID: o.sid,
                        CID: o.cid,
                        SER: "heartbeat" === t ? 0 : e++
                    }, o.params && (t.Q = [], o.params.forEach(function(e) {
                        var o = e.type,
                            s = e.name,
                            a = e.entity,
                            c = n[s];
                        if (!i(c)) {
                            switch (o) {
                                case "PropertyArray":
                                    o = "ArrayMable", c = c.map(function(e) {
                                        return {
                                            t: "Property",
                                            v: r.serialize(e, a)
                                        }
                                    });
                                    break;
                                case "Property":
                                    c = r.serialize(c, s);
                                    break;
                                case "bool":
                                    c = c ? "true" : "false"
                            }
                            t.Q.push({
                                t: o,
                                v: c
                            })
                        }
                    })), t
                }
            }(), r.prototype.parseResponse = function(e) {
                var t = this,
                    n = JSON.parse(e),
                    r = {
                        raw: n,
                        rawStr: e,
                        error: s.genError(n.code)
                    },
                    i = t.configMap.packetConfig[n.sid + "_" + n.cid];
                if (!i) return r.notFound = {
                    sid: n.sid,
                    cid: n.cid
                }, r;
                var a = n.r,
                    c = "notify" === i.service && !i.cmd;
                if (r.isNotify = c, c) {
                    var u = n.r[1].headerPacket;
                    if (i = t.configMap.packetConfig[u.sid + "_" + u.cid], a = n.r[1].body, !i) return r.notFound = {
                        sid: u.sid,
                        cid: u.cid
                    }, r
                }
                if (r.service = i.service, r.cmd = i.cmd, r.error && 416 === r.error.code) {
                    var l = a[0];
                    l && (r.frequencyControlDuration = 1e3 * l)
                }
                var d = !1;
                return r.error && i.trivialErrorCodes && (d = i.trivialErrorCodes.indexOf(r.error.code) !== -1), r.error && !d || !i.response || (r.content = {}, i.response.forEach(function(e, i) {
                    var s = a[i];
                    if (!o.undef(s)) {
                        var u = e.type,
                            l = e.name,
                            d = e.entity || l;
                        switch (u) {
                            case "Property":
                                r.content[l] = t.unserialize(s, d);
                                break;
                            case "PropertyArray":
                                r.content[l] = [], s.forEach(function(e) {
                                    r.content[l].push(t.unserialize(e, d))
                                });
                                break;
                            case "KVArray":
                                r.content[l] = s;
                                break;
                            case "long":
                            case "Long":
                            case "byte":
                            case "Byte":
                            case "Number":
                                r.content[l] = +s;
                                break;
                            default:
                                r.content[l] = s
                        }
                        if (c && "msg" === l || "sysMsg" === l) {
                            var f = r.content[l];
                            o.isObject(f) && !f.idServer && (f.idServer = "" + n.r[0], f.type && "8" === f.type && f.deletedIdClient && (f.idServer = f.deletedIdClient))
                        }
                    }
                })), r
            }, r.prototype.serialize = function(e, t) {
                var n = this.serializeMap[t],
                    r = {};
                for (var o in n) e.hasOwnProperty(o) && (r[n[o]] = e[o]);
                return r
            }, r.prototype.unserialize = function(e, t) {
                var n = this.unserializeMap[t],
                    r = {};
                if (e) for (var o in n) e.hasOwnProperty(o) && (r[n[o]] = e[o]);
                return r
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                o.verifyOptions(e, "teamId"), o.verifyParamAtLeastPresentOne(e, "nickInTeam muteTeam muteNotiType custom"), t.teamId = e.teamId, i(e.account) && (t.account = e.account), i(e.nickInTeam) && (t.nickInTeam = e.nickInTeam), i(e.muteNotiType) ? t.bits = e.muteNotiType : i(e.muteTeam) && (t.bits = 0, e.muteTeam && (t.bits += 1)), i(e.mute) && (t.mute = e.mute ? 1 : 0), i(e.custom) && (t.custom = "" + e.custom)
            }
            var o = n(1),
                i = o.notundef,
                s = o.fillPropertyWithDefault,
                a = {
                    0: "normal",
                    1: "owner",
                    2: "manager"
                };
            r.reverse = function(e) {
                var t = o.copy(e);
                if (i(t.teamId) && (t.teamId = "" + t.teamId), i(t.type) && (t.type = a[t.type]), i(t.active) && (t.active = 1 === +t.active), i(t.valid) && (t.valid = 1 === +t.valid), i(t.mute) && (t.mute = 1 === +t.mute), i(t.joinTime) && (t.joinTime = +t.joinTime), i(t.updateTime) && (t.updateTime = +t.updateTime), i(t.bits)) {
                    var n = t.bits;
                    delete t.bits, t.muteTeam = !! (1 & n), t.muteNotiType = n
                }
                return i(t.teamId) && i(t.account) && (t.id = r.genId(t.teamId, t.account)), t
            }, r.reverseMembers = function(e) {
                return e.map(function(e) {
                    return r.reverse(e)
                })
            }, r.fillProperties = function(e) {
                var t = s(e, "mute", !1),
                    n = s(e, "custom", "");
                return t || n
            }, r.genId = function(e, t) {
                return e + "-" + t
            }, r.accounts2ids = function(e, t) {
                return t.map(function(t) {
                    return r.genId(e, t)
                })
            }, r.assembleMembers = function(e, t) {
                return o.isArray(t) || (t = [t]), t.map(function(t) {
                    return r.assembleMember(e, t)
                })
            }, r.assembleMember = function(e, t) {
                return {
                    id: r.genId(e.teamId, t),
                    account: t,
                    teamId: e.teamId,
                    type: "normal",
                    nickInTeam: "",
                    muteTeam: !1,
                    mute: !1,
                    joinTime: e.memberUpdateTime,
                    updateTime: e.memberUpdateTime,
                    active: !0,
                    valid: !0
                }
            }, r.assembleOwner = function(e) {
                var t = r.assembleMember(e, e.owner);
                return t.type = "owner", t
            }, e.exports = r
        }, , function(e, t, n) {
            "use strict";
            var r = n(35),
                o = n(90),
                i = n(94);
            r.json = o, r.upload = i, e.exports = r
        }, function(e, t, n) {
            var r, o;
            !
                function(i, s) {
                    "use strict";
                    r = s, o = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== o && (e.exports = o))
                }(this, function() {
                    var e, t, n, r, o = Function.call,
                        i = Object.prototype,
                        s = o.bind(i.hasOwnProperty),
                        a = o.bind(i.propertyIsEnumerable),
                        c = o.bind(i.toString),
                        u = s(i, "__defineGetter__");
                    u && (e = o.bind(i.__defineGetter__), t = o.bind(i.__defineSetter__), n = o.bind(i.__lookupGetter__), r = o.bind(i.__lookupSetter__));
                    var l = function(e) {
                        return null == e || "object" != typeof e && "function" != typeof e
                    };
                    Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
                        var t = e.__proto__;
                        return t || null === t ? t : "[object Function]" === c(e.constructor) ? e.constructor.prototype : e instanceof Object ? i : null
                    });
                    var d = function(e) {
                        try {
                            return e.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(e, "sentinel").value
                        } catch (t) {
                            return !1
                        }
                    };
                    if (Object.defineProperty) {
                        var f = d({}),
                            p = "undefined" == typeof document || d(document.createElement("div"));
                        if (!p || !f) var m = Object.getOwnPropertyDescriptor
                    }
                    if (!Object.getOwnPropertyDescriptor || m) {
                        var y = "Object.getOwnPropertyDescriptor called on a non-object: ";
                        Object.getOwnPropertyDescriptor = function(e, t) {
                            if (l(e)) throw new TypeError(y + e);
                            if (m) try {
                                return m.call(Object, e, t)
                            } catch (o) {}
                            var c;
                            if (!s(e, t)) return c;
                            if (c = {
                                    enumerable: a(e, t),
                                    configurable: !0
                                }, u) {
                                var d = e.__proto__,
                                    f = e !== i;
                                f && (e.__proto__ = i);
                                var p = n(e, t),
                                    g = r(e, t);
                                if (f && (e.__proto__ = d), p || g) return p && (c.get = p), g && (c.set = g), c
                            }
                            return c.value = e[t], c.writable = !0, c
                        }
                    }
                    if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
                            return Object.keys(e)
                        }), !Object.create) {
                        var g, h = !({
                                __proto__: null
                            }
                            instanceof Object),
                            v = function() {
                                if (!document.domain) return !1;
                                try {
                                    return !!new ActiveXObject("htmlfile")
                                } catch (e) {
                                    return !1
                                }
                            },
                            b = function() {
                                var e, t;
                                t = new ActiveXObject("htmlfile");
                                var n = "script";
                                return t.write("<" + n + "></" + n + ">"), t.close(), e = t.parentWindow.Object.prototype, t = null, e
                            },
                            M = function() {
                                var e, t = document.createElement("iframe"),
                                    n = document.body || document.documentElement;
                                return t.style.display = "none", n.appendChild(t), t.src = "javascript:", e = t.contentWindow.Object.prototype, n.removeChild(t), t = null, e
                            };
                        g = h || "undefined" == typeof document ?
                            function() {
                                return {
                                    __proto__: null
                                }
                            } : function() {
                                var e = v() ? b() : M();
                                delete e.constructor, delete e.hasOwnProperty, delete e.propertyIsEnumerable, delete e.isPrototypeOf, delete e.toLocaleString, delete e.toString, delete e.valueOf;
                                var t = function() {};
                                return t.prototype = e, g = function() {
                                    return new t
                                }, new t
                            }, Object.create = function(e, t) {
                            var n, r = function() {};
                            if (null === e) n = g();
                            else {
                                if (null !== e && l(e)) throw new TypeError("Object prototype may only be an Object or null");
                                r.prototype = e, n = new r, n.__proto__ = e
                            }
                            return void 0 !== t && Object.defineProperties(n, t), n
                        }
                    }
                    var T = function(e) {
                        try {
                            return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
                        } catch (t) {
                            return !1
                        }
                    };
                    if (Object.defineProperty) {
                        var S = T({}),
                            k = "undefined" == typeof document || T(document.createElement("div"));
                        if (!S || !k) var w = Object.defineProperty,
                            O = Object.defineProperties
                    }
                    if (!Object.defineProperty || w) {
                        var C = "Property description must be an object: ",
                            I = "Object.defineProperty called on non-object: ",
                            x = "getters & setters can not be defined on this javascript engine";
                        Object.defineProperty = function(o, s, a) {
                            if (l(o)) throw new TypeError(I + o);
                            if (l(a)) throw new TypeError(C + a);
                            if (w) try {
                                return w.call(Object, o, s, a)
                            } catch (c) {}
                            if ("value" in a) if (u && (n(o, s) || r(o, s))) {
                                var d = o.__proto__;
                                o.__proto__ = i, delete o[s], o[s] = a.value, o.__proto__ = d
                            } else o[s] = a.value;
                            else {
                                var f = "get" in a,
                                    p = "set" in a;
                                if (!u && (f || p)) throw new TypeError(x);
                                f && e(o, s, a.get), p && t(o, s, a.set)
                            }
                            return o
                        }
                    }
                    Object.defineProperties && !O || (Object.defineProperties = function(e, t) {
                        if (O) try {
                            return O.call(Object, e, t)
                        } catch (n) {}
                        return Object.keys(t).forEach(function(n) {
                            "__proto__" !== n && Object.defineProperty(e, n, t[n])
                        }), e
                    }), Object.seal || (Object.seal = function(e) {
                        if (Object(e) !== e) throw new TypeError("Object.seal can only be called on Objects.");
                        return e
                    }), Object.freeze || (Object.freeze = function(e) {
                        if (Object(e) !== e) throw new TypeError("Object.freeze can only be called on Objects.");
                        return e
                    });
                    try {
                        Object.freeze(function() {})
                    } catch (_) {
                        Object.freeze = function(e) {
                            return function(t) {
                                return "function" == typeof t ? t : e(t)
                            }
                        }(Object.freeze)
                    }
                    Object.preventExtensions || (Object.preventExtensions = function(e) {
                        if (Object(e) !== e) throw new TypeError("Object.preventExtensions can only be called on Objects.");
                        return e
                    }), Object.isSealed || (Object.isSealed = function(e) {
                        if (Object(e) !== e) throw new TypeError("Object.isSealed can only be called on Objects.");
                        return !1
                    }), Object.isFrozen || (Object.isFrozen = function(e) {
                        if (Object(e) !== e) throw new TypeError("Object.isFrozen can only be called on Objects.");
                        return !1
                    }), Object.isExtensible || (Object.isExtensible = function(e) {
                        if (Object(e) !== e) throw new TypeError("Object.isExtensible can only be called on Objects.");
                        for (var t = ""; s(e, t);) t += "?";
                        e[t] = !0;
                        var n = s(e, t);
                        return delete e[t], n
                    })
                })
        }, function(e, t) {}, function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            (function(module) { /*! Socket.IO.js build:0.9.11, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */
                var io = module.exports;
                window.io ? module && (module.exports = io = window.io) : window.io = io, function() {
                    if (function(e, t) {
                            var n = e;
                            n.version = "0.9.11", n.protocol = 1, n.transports = [], n.j = [], n.sockets = {}, n.connect = function(e, r) {
                                var o, i, s = n.util.parseUri(e);
                                t && t.location && (s.protocol = s.protocol || t.location.protocol.slice(0, -1), s.host = s.host || (t.document ? t.document.domain : t.location.hostname), s.port = s.port || t.location.port), o = n.util.uniqueUri(s);
                                var a = {
                                    host: s.host,
                                    secure: "https" == s.protocol,
                                    port: s.port || ("https" == s.protocol ? 443 : 80),
                                    query: s.query || ""
                                };
                                return n.util.merge(a, r), !a["force new connection"] && n.sockets[o] || (i = new n.Socket(a)), !a["force new connection"] && i && (n.sockets[o] = i), i = i || n.sockets[o], i.of(s.path.length > 1 ? s.path : "")
                            }
                        }(module.exports, window), function(e, t) {
                            var n = e.util = {},
                                r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                            n.parseUri = function(e) {
                                for (var t = r.exec(e || ""), n = {}, i = 14; i--;) n[o[i]] = t[i] || "";
                                return n
                            }, n.uniqueUri = function(e) {
                                var n = e.protocol,
                                    r = e.host,
                                    o = e.port;
                                return "document" in t ? (r = r || document.domain, o = o || ("https" == n && "https:" !== document.location.protocol ? 443 : document.location.port)) : (r = r || "localhost", o || "https" != n || (o = 443)), (n || "http") + "://" + r + ":" + (o || 80)
                            }, n.query = function(e, t) {
                                var r = n.chunkQuery(e || ""),
                                    o = [];
                                n.merge(r, n.chunkQuery(t || ""));
                                for (var i in r) r.hasOwnProperty(i) && o.push(i + "=" + r[i]);
                                return o.length ? "?" + o.join("&") : ""
                            }, n.chunkQuery = function(e) {
                                for (var t, n = {}, r = e.split("&"), o = 0, i = r.length; o < i; ++o) t = r[o].split("="), t[0] && (n[t[0]] = t[1]);
                                return n
                            };
                            var i = !1;
                            n.load = function(e) {
                                return "document" in t && "complete" === document.readyState || i ? e() : void n.on(t, "load", e, !1)
                            }, n.on = function(e, t, n, r) {
                                e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, r)
                            }, n.request = function(e) {
                                if (e && "undefined" != typeof XDomainRequest && !n.ua.hasCORS) return new XDomainRequest;
                                if ("undefined" != typeof XMLHttpRequest && (!e || n.ua.hasCORS)) return new XMLHttpRequest;
                                if (!e) try {
                                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                                } catch (t) {}
                                return null
                            }, "undefined" != typeof window && n.load(function() {
                                i = !0
                            }), n.defer = function(e) {
                                return n.ua.webkit && "undefined" == typeof importScripts ? void n.load(function() {
                                    setTimeout(e, 100)
                                }) : e()
                            }, n.merge = function(e, t, r, o) {
                                var i, s = o || [],
                                    a = "undefined" == typeof r ? 2 : r;
                                for (i in t) t.hasOwnProperty(i) && n.indexOf(s, i) < 0 && ("object" == typeof e[i] && a ? n.merge(e[i], t[i], a - 1, s) : (e[i] = t[i], s.push(t[i])));
                                return e
                            }, n.mixin = function(e, t) {
                                n.merge(e.prototype, t.prototype)
                            }, n.inherit = function(e, t) {
                                function n() {}
                                n.prototype = t.prototype, e.prototype = new n
                            }, n.isArray = Array.isArray ||
                                function(e) {
                                    return "[object Array]" === Object.prototype.toString.call(e)
                                }, n.intersect = function(e, t) {
                                for (var r = [], o = e.length > t.length ? e : t, i = e.length > t.length ? t : e, s = 0, a = i.length; s < a; s++)~n.indexOf(o, i[s]) && r.push(i[s]);
                                return r
                            }, n.indexOf = function(e, t, n) {
                                for (var r = e.length, n = n < 0 ? n + r < 0 ? 0 : n + r : n || 0; n < r && e[n] !== t; n++);
                                return r <= n ? -1 : n
                            }, n.toArray = function(e) {
                                for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n]);
                                return t
                            }, n.ua = {}, n.ua.hasCORS = "undefined" != typeof XMLHttpRequest &&
                                function() {
                                    try {
                                        var e = new XMLHttpRequest
                                    } catch (t) {
                                        return !1
                                    }
                                    return void 0 != e.withCredentials
                                }(), n.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent), n.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
                        }("undefined" != typeof io ? io : module.exports, window), function(e, t) {
                            function n() {}
                            e.EventEmitter = n, n.prototype.on = function(e, n) {
                                return this.$events || (this.$events = {}), this.$events[e] ? t.util.isArray(this.$events[e]) ? this.$events[e].push(n) : this.$events[e] = [this.$events[e], n] : this.$events[e] = n, this
                            }, n.prototype.addListener = n.prototype.on, n.prototype.once = function(e, t) {
                                function n() {
                                    r.removeListener(e, n), t.apply(this, arguments)
                                }
                                var r = this;
                                return n.listener = t, this.on(e, n), this
                            }, n.prototype.removeListener = function(e, n) {
                                if (this.$events && this.$events[e]) {
                                    var r = this.$events[e];
                                    if (t.util.isArray(r)) {
                                        for (var o = -1, i = 0, s = r.length; i < s; i++) if (r[i] === n || r[i].listener && r[i].listener === n) {
                                            o = i;
                                            break
                                        }
                                        if (o < 0) return this;
                                        r.splice(o, 1), r.length || delete this.$events[e]
                                    } else(r === n || r.listener && r.listener === n) && delete this.$events[e]
                                }
                                return this
                            }, n.prototype.removeAllListeners = function(e) {
                                return void 0 === e ? (this.$events = {}, this) : (this.$events && this.$events[e] && (this.$events[e] = null), this)
                            }, n.prototype.listeners = function(e) {
                                return this.$events || (this.$events = {}), this.$events[e] || (this.$events[e] = []), t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]), this.$events[e]
                            }, n.prototype.emit = function(e) {
                                if (!this.$events) return !1;
                                var n = this.$events[e];
                                if (!n) return !1;
                                var r = Array.prototype.slice.call(arguments, 1);
                                if ("function" == typeof n) n.apply(this, r);
                                else {
                                    if (!t.util.isArray(n)) return !1;
                                    for (var o = n.slice(), i = 0, s = o.length; i < s; i++) o[i].apply(this, r)
                                }
                                return !0
                            }
                        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(exports, nativeJSON) {
                            "use strict";

                            function f(e) {
                                return e < 10 ? "0" + e : e
                            }
                            function date(e, t) {
                                return isFinite(e.valueOf()) ? e.getUTCFullYear() + "-" + f(e.getUTCMonth() + 1) + "-" + f(e.getUTCDate()) + "T" + f(e.getUTCHours()) + ":" + f(e.getUTCMinutes()) + ":" + f(e.getUTCSeconds()) + "Z" : null
                            }
                            function quote(e) {
                                return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                                    var t = meta[e];
                                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                                }) + '"' : '"' + e + '"'
                            }
                            function str(e, t) {
                                var n, r, o, i, s, a = gap,
                                    c = t[e];
                                switch (c instanceof Date && (c = date(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
                                    case "string":
                                        return quote(c);
                                    case "number":
                                        return isFinite(c) ? String(c) : "null";
                                    case "boolean":
                                    case "null":
                                        return String(c);
                                    case "object":
                                        if (!c) return "null";
                                        if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                                            for (i = c.length, n = 0; n < i; n += 1) s[n] = str(n, c) || "null";
                                            return o = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, o
                                        }
                                        if (rep && "object" == typeof rep) for (i = rep.length, n = 0; n < i; n += 1)"string" == typeof rep[n] && (r = rep[n], o = str(r, c), o && s.push(quote(r) + (gap ? ": " : ":") + o));
                                        else for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (o = str(r, c), o && s.push(quote(r) + (gap ? ": " : ":") + o));
                                        return o = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, o
                                }
                            }
                            if (nativeJSON && nativeJSON.parse) return exports.JSON = {
                                parse: nativeJSON.parse,
                                stringify: nativeJSON.stringify
                            };
                            var JSON = exports.JSON = {},
                                cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                                gap, indent, meta = {
                                    "\b": "\\b",
                                    "\t": "\\t",
                                    "\n": "\\n",
                                    "\f": "\\f",
                                    "\r": "\\r",
                                    '"': '\\"',
                                    "\\": "\\\\"
                                },
                                rep;
                            JSON.stringify = function(e, t, n) {
                                var r;
                                if (gap = "", indent = "", "number" == typeof n) for (r = 0; r < n; r += 1) indent += " ";
                                else "string" == typeof n && (indent = n);
                                if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                                return str("", {
                                    "": e
                                })
                            }, JSON.parse = function(text, reviver) {
                                function walk(e, t) {
                                    var n, r, o = e[t];
                                    if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                                    return reviver.call(e, t, o)
                                }
                                var j;
                                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                                    "": j
                                }, "") : j;
                                throw new SyntaxError("JSON.parse")
                            }
                        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof JSON ? JSON : void 0), function(e, t) {
                            var n = e.parser = {},
                                r = n.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"],
                                o = n.reasons = ["transport not supported", "client not handshaken", "unauthorized"],
                                i = n.advice = ["reconnect"],
                                s = t.JSON,
                                a = t.util.indexOf;
                            n.encodePacket = function(e) {
                                var t = a(r, e.type),
                                    n = e.id || "",
                                    c = e.endpoint || "",
                                    u = e.ack,
                                    l = null;
                                switch (e.type) {
                                    case "error":
                                        var d = e.reason ? a(o, e.reason) : "",
                                            f = e.advice ? a(i, e.advice) : "";
                                        "" === d && "" === f || (l = d + ("" !== f ? "+" + f : ""));
                                        break;
                                    case "message":
                                        "" !== e.data && (l = e.data);
                                        break;
                                    case "event":
                                        var p = {
                                            name: e.name
                                        };
                                        e.args && e.args.length && (p.args = e.args), l = s.stringify(p);
                                        break;
                                    case "json":
                                        l = s.stringify(e.data);
                                        break;
                                    case "connect":
                                        e.qs && (l = e.qs);
                                        break;
                                    case "ack":
                                        l = e.ackId + (e.args && e.args.length ? "+" + s.stringify(e.args) : "")
                                }
                                var m = [t, n + ("data" == u ? "+" : ""), c];
                                return null !== l && void 0 !== l && m.push(l), m.join(":")
                            }, n.encodePayload = function(e) {
                                var t = "";
                                if (1 == e.length) return e[0];
                                for (var n = 0, r = e.length; n < r; n++) {
                                    var o = e[n];
                                    t += "�" + o.length + "�" + e[n]
                                }
                                return t
                            };
                            var c = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
                            n.decodePacket = function(e) {
                                var t = e.match(c);
                                if (!t) return {};
                                var n = t[2] || "",
                                    e = t[5] || "",
                                    a = {
                                        type: r[t[1]],
                                        endpoint: t[4] || ""
                                    };
                                switch (n && (a.id = n, t[3] ? a.ack = "data" : a.ack = !0), a.type) {
                                    case "error":
                                        var t = e.split("+");
                                        a.reason = o[t[0]] || "", a.advice = i[t[1]] || "";
                                        break;
                                    case "message":
                                        a.data = e || "";
                                        break;
                                    case "event":
                                        try {
                                            var u = s.parse(e);
                                            a.name = u.name, a.args = u.args
                                        } catch (l) {}
                                        a.args = a.args || [];
                                        break;
                                    case "json":
                                        try {
                                            a.data = s.parse(e)
                                        } catch (l) {}
                                        break;
                                    case "connect":
                                        a.qs = e || "";
                                        break;
                                    case "ack":
                                        var t = e.match(/^([0-9]+)(\+)?(.*)/);
                                        if (t && (a.ackId = t[1], a.args = [], t[3])) try {
                                            a.args = t[3] ? s.parse(t[3]) : []
                                        } catch (l) {}
                                        break;
                                    case "disconnect":
                                    case "heartbeat":
                                }
                                return a
                            }, n.decodePayload = function(e) {
                                var t = function(e, t) {
                                    for (var n = 0, r = e; r < t.length; r++) {
                                        if ("�" == t.charAt(r)) return n;
                                        n++
                                    }
                                    return n
                                };
                                if ("�" == e.charAt(0)) {
                                    for (var r = [], o = 1, i = ""; o < e.length; o++) if ("�" == e.charAt(o)) {
                                        var s = e.substr(o + 1).substr(0, i);
                                        if ("�" != e.charAt(o + 1 + Number(i)) && o + 1 + Number(i) != e.length) {
                                            var a = Number(i);
                                            l = t(o + a + 1, e), s = e.substr(o + 1).substr(0, a + l), o += l
                                        }
                                        r.push(n.decodePacket(s)), o += Number(i) + 1, i = ""
                                    } else i += e.charAt(o);
                                    return r
                                }
                                return [n.decodePacket(e)]
                            }
                        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(e, t) {
                            function n(e, t) {
                                this.socket = e, this.sessid = t
                            }
                            e.Transport = n, t.util.mixin(n, t.EventEmitter), n.prototype.heartbeats = function() {
                                return !0
                            }, n.prototype.onData = function(e) {
                                if (this !== this.socket.transport) return this;
                                if (this.clearCloseTimeout(), (this.socket.connected || this.socket.connecting || this.socket.reconnecting) && this.setCloseTimeout(), "" !== e) {
                                    var n = t.parser.decodePayload(e);
                                    if (n && n.length) for (var r = 0, o = n.length; r < o; r++) this.onPacket(n[r])
                                }
                                return this
                            }, n.prototype.onPacket = function(e) {
                                return this.socket.setHeartbeatTimeout(), "heartbeat" == e.type ? this.onHeartbeat() : ("connect" == e.type && "" == e.endpoint && this.onConnect(), "error" == e.type && "reconnect" == e.advice && (this.isOpen = !1), this.socket.onPacket(e), this)
                            }, n.prototype.setCloseTimeout = function() {
                                if (!this.closeTimeout) {
                                    var e = this;
                                    this.closeTimeout = setTimeout(function() {
                                        e.onDisconnect()
                                    }, this.socket.closeTimeout)
                                }
                            }, n.prototype.onDisconnect = function() {
                                return this.isOpen && this.close(), this.clearTimeouts(), this.socket.transport === this ? this.socket.onDisconnect() : this.socket.setBuffer(!1), this
                            }, n.prototype.onConnect = function() {
                                return this.socket.onConnect(), this
                            }, n.prototype.clearCloseTimeout = function() {
                                this.closeTimeout && (clearTimeout(this.closeTimeout), this.closeTimeout = null)
                            }, n.prototype.clearTimeouts = function() {
                                this.clearCloseTimeout(), this.reopenTimeout && clearTimeout(this.reopenTimeout)
                            }, n.prototype.packet = function(e) {
                                this.send(t.parser.encodePacket(e))
                            }, n.prototype.onHeartbeat = function(e) {
                                this.packet({
                                    type: "heartbeat"
                                })
                            }, n.prototype.onOpen = function() {
                                this.isOpen = !0, this.clearCloseTimeout(), this.socket.onOpen()
                            }, n.prototype.onClose = function() {
                                this.isOpen = !1, this.socket.transport === this ? this.socket.onClose() : this.socket.setBuffer(!1), this.onDisconnect()
                            }, n.prototype.prepareUrl = function() {
                                var e = this.socket.options;
                                return this.scheme() + "://" + e.host + ":" + e.port + "/" + e.resource + "/" + t.protocol + "/" + this.name + "/" + this.sessid
                            }, n.prototype.ready = function(e, t) {
                                t.call(this)
                            }
                        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(e, t, n) {
                            function r(e) {
                                if (this.options = {
                                        port: 80,
                                        secure: !1,
                                        document: "document" in n && document,
                                        resource: "socket.io",
                                        transports: e.transports || t.transports,
                                        "connect timeout": 1e4,
                                        "try multiple transports": !0,
                                        reconnect: !0,
                                        "reconnection delay": 500,
                                        "reconnection limit": 1 / 0,
                                        "reopen delay": 3e3,
                                        "max reconnection attempts": 10,
                                        "sync disconnect on unload": !1,
                                        "auto connect": !0,
                                        "flash policy port": 10843,
                                        manualFlush: !1
                                    }, t.util.merge(this.options, e), this.connected = !1, this.open = !1, this.connecting = !1, this.reconnecting = !1, this.namespaces = {}, this.buffer = [], this.doBuffer = !1, this.options["sync disconnect on unload"] && (!this.isXDomain() || t.util.ua.hasCORS)) {
                                    var r = this;
                                    t.util.on(n, "beforeunload", function() {
                                        r.disconnectSync()
                                    }, !1)
                                }
                                this.options["auto connect"] && this.connect()
                            }
                            function o() {}
                            e.Socket = r, t.util.mixin(r, t.EventEmitter), r.prototype.of = function(e) {
                                return this.namespaces[e] || (this.namespaces[e] = new t.SocketNamespace(this, e), "" !== e && this.namespaces[e].packet({
                                    type: "connect"
                                })), this.namespaces[e]
                            }, r.prototype.publish = function() {
                                this.emit.apply(this, arguments);
                                var e;
                                for (var t in this.namespaces) this.namespaces.hasOwnProperty(t) && (e = this.of(t), e.$emit.apply(e, arguments))
                            }, r.prototype.handshake = function(e) {
                                function n(t) {
                                    t instanceof Error ? (r.connecting = !1, r.onError(t.message)) : (console.log("D handshake success " + t), e.apply(null, t.split(":")))
                                }
                                var r = this,
                                    i = this.options,
                                    s = ["http" + (i.secure ? "s" : "") + ":/", i.host + ":" + i.port, i.resource, t.protocol, t.util.query(this.options.query, "t=" + +new Date)].join("/");
                                if (this.isXDomain() && !t.util.ua.hasCORS) {
                                    var a = document.getElementsByTagName("script")[0],
                                        c = document.createElement("script");
                                    c.src = s + "&jsonp=" + t.j.length, c.onreadystatechange = function() {
                                        "loaded" == this.readyState && c.parentNode && (c.parentNode.removeChild(c), r.connecting = !1, !r.reconnecting && r.onError("Server down or port not open"), r.publish("handshake_failed"))
                                    }, a.parentNode.insertBefore(c, a), t.j.push(function(e) {
                                        n(e), c.parentNode.removeChild(c)
                                    })
                                } else {
                                    var u = t.util.request();
                                    u.open("GET", s, !0), u.timeout = 1e4, this.isXDomain() && (u.withCredentials = !0), u.onreadystatechange = function() {
                                        4 == u.readyState && (u.onreadystatechange = o, 200 == u.status ? n(u.responseText) : 403 == u.status ? (r.onError(u.responseText), r.publish("handshake_failed")) : (r.connecting = !1, !r.reconnecting && r.onError(u.responseText), r.publish("handshake_failed")))
                                    }, u.ontimeout = function(e) {
                                        r.connecting = !1, !r.reconnecting && r.onError(u.responseText), r.publish("handshake_failed")
                                    }, u.send(null)
                                }
                            }, r.prototype.connect = function(e) {
                                if (this.connecting) return this;
                                var n = this;
                                return n.connecting = !0, this.handshake(function(r, o, i, s) {
                                    n.sessionid = r, n.closeTimeout = 1e3 * i, n.heartbeatTimeout = 1e3 * o, n.transports || (n.transports = n.origTransports = s ? t.util.intersect(s.split(","), n.options.transports) : n.options.transports), console.log("D options transports: " + n.options.transports), console.log("D transports: " + n.transports), n.setHeartbeatTimeout(), n.once("connect", function() {
                                        clearTimeout(n.connectTimeoutTimer), n.connectTimeoutTimer = null, e && "function" == typeof e && e()
                                    }), n.doConnect()
                                }), this
                            }, r.prototype.doConnect = function() {
                                var e = this;
                                return e.transport && e.transport.clearTimeouts(), e.transport = e.getTransport(e.transports), e.transport ? void e.transport.ready(e, function() {
                                    e.connecting = !0, e.publish("connecting", e.transport.name), e.transport.open(), e.options["connect timeout"] && (e.connectTimeoutTimer && clearTimeout(e.connectTimeoutTimer), e.connectTimeoutTimer = setTimeout(e.tryNextTransport.bind(e), e.options["connect timeout"]))
                                }) : e.publish("connect_failed")
                            }, r.prototype.getTransport = function(e) {
                                for (var n, r = e || this.transports, o = 0; n = r[o]; o++) if (console.log("D check " + n + " " + t.Transport[n].check(this) + " , cors " + t.Transport[n].xdomainCheck(this)), t.Transport[n] && t.Transport[n].check(this) && (!this.isXDomain() || t.Transport[n].xdomainCheck(this))) {
                                    var i = new t.Transport[n](this, this.sessionid);
                                    return i
                                }
                                return null
                            }, r.prototype.tryNextTransport = function() {
                                console.log("D try next transport");
                                var e = this;
                                if (!e.connected && (e.connecting = !1, e.options["try multiple transports"])) {
                                    for (var t = e.transports; t.length > 0 && t.splice(0, 1)[0] != e.transport.name;);
                                    t.length ? e.doConnect() : e.publish("connect_failed")
                                }
                            }, r.prototype.setHeartbeatTimeout = function() {
                                if (clearTimeout(this.heartbeatTimeoutTimer), !this.transport || this.transport.heartbeats()) {
                                    var e = this;
                                    this.heartbeatTimeoutTimer = setTimeout(function() {
                                        e.transport && e.transport.onClose()
                                    }, this.heartbeatTimeout)
                                }
                            }, r.prototype.packet = function(e) {
                                return this.connected && !this.doBuffer ? this.transport.packet(e) : this.buffer.push(e), this
                            }, r.prototype.setBuffer = function(e) {
                                this.doBuffer = e, !e && this.connected && this.buffer.length && (this.options.manualFlush || this.flushBuffer())
                            }, r.prototype.flushBuffer = function() {
                                this.transport.payload(this.buffer), this.buffer = []
                            }, r.prototype.disconnect = function() {
                                return (this.connected || this.connecting) && (this.open && this.of("").packet({
                                    type: "disconnect"
                                }), this.onDisconnect("booted")), this
                            }, r.prototype.disconnectSync = function() {
                                var e = t.util.request(),
                                    n = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, t.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
                                e.open("GET", n, !1), e.send(null), this.onDisconnect("booted")
                            }, r.prototype.isXDomain = function() {
                                var e = n.location.port || ("https:" == n.location.protocol ? 443 : 80);
                                return this.options.host !== n.location.hostname || this.options.port != e
                            }, r.prototype.onConnect = function() {
                                this.connected || (this.connected = !0, this.connecting = !1, this.doBuffer || this.setBuffer(!1), this.emit("connect"))
                            }, r.prototype.onOpen = function() {
                                this.open = !0
                            }, r.prototype.onClose = function() {
                                this.open = !1, clearTimeout(this.heartbeatTimeoutTimer)
                            }, r.prototype.onPacket = function(e) {
                                this.of(e.endpoint).onPacket(e)
                            }, r.prototype.onError = function(e) {
                                e && e.advice && "reconnect" === e.advice && (this.connected || this.connecting) && (this.disconnect(), this.options.reconnect && this.reconnect()), this.publish("error", e && e.reason ? e.reason : e)
                            }, r.prototype.onDisconnect = function(e) {
                                var t = this.connected,
                                    n = this.connecting;
                                this.connected = !1, this.connecting = !1, this.open = !1, (t || n) && (this.transport.close(), this.transport.clearTimeouts(), t && (this.publish("disconnect", e), "booted" != e && this.options.reconnect && !this.reconnecting && this.reconnect()), n && this.tryNextTransport())
                            }, r.prototype.reconnect = function() {
                                function e() {
                                    if (n.connected) {
                                        for (var e in n.namespaces) n.namespaces.hasOwnProperty(e) && "" !== e && n.namespaces[e].packet({
                                            type: "connect"
                                        });
                                        n.publish("reconnect", n.transport.name, n.reconnectionAttempts)
                                    }
                                    clearTimeout(n.reconnectionTimer), n.removeListener("connect_failed", t), n.removeListener("connect", t), n.reconnecting = !1, delete n.reconnectionAttempts, delete n.reconnectionDelay, delete n.reconnectionTimer, delete n.redoTransports, n.options["try multiple transports"] = o
                                }
                                function t() {
                                    if (n.reconnecting) return n.connected ? e() : n.connecting && n.reconnecting ? n.reconnectionTimer = setTimeout(t, 1e3) : void(n.reconnectionAttempts++ >= r ? n.redoTransports ? (n.publish("reconnect_failed"), e()) : (n.on("connect_failed", t), n.options["try multiple transports"] = !0, n.transports = n.origTransports, n.transport = n.getTransport(), n.redoTransports = !0, n.connect()) : (n.reconnectionDelay < i && (n.reconnectionDelay *= 2), n.connect(), n.publish("reconnecting", n.reconnectionDelay, n.reconnectionAttempts), n.reconnectionTimer = setTimeout(t, n.reconnectionDelay)))
                                }
                                this.reconnecting = !0, this.reconnectionAttempts = 0, this.reconnectionDelay = this.options["reconnection delay"];
                                var n = this,
                                    r = this.options["max reconnection attempts"],
                                    o = this.options["try multiple transports"],
                                    i = this.options["reconnection limit"];
                                this.options["try multiple transports"] = !1, this.reconnectionTimer = setTimeout(t, this.reconnectionDelay), this.on("connect", t)
                            }
                        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function(e, t) {
                            function n(e, t) {
                                this.socket = e, this.name = t || "", this.flags = {}, this.json = new r(this, "json"), this.ackPackets = 0, this.acks = {}
                            }
                            function r(e, t) {
                                this.namespace = e, this.name = t
                            }
                            e.SocketNamespace = n, t.util.mixin(n, t.EventEmitter), n.prototype.$emit = t.EventEmitter.prototype.emit, n.prototype.of = function() {
                                return this.socket.of.apply(this.socket, arguments)
                            }, n.prototype.packet = function(e) {
                                return e.endpoint = this.name, this.socket.packet(e), this.flags = {}, this
                            }, n.prototype.send = function(e, t) {
                                var n = {
                                    type: this.flags.json ? "json" : "message",
                                    data: e
                                };
                                return "function" == typeof t && (n.id = ++this.ackPackets, n.ack = !0, this.acks[n.id] = t), this.packet(n)
                            }, n.prototype.emit = function(e) {
                                var t = Array.prototype.slice.call(arguments, 1),
                                    n = t[t.length - 1],
                                    r = {
                                        type: "event",
                                        name: e
                                    };
                                return "function" == typeof n && (r.id = ++this.ackPackets, r.ack = "data", this.acks[r.id] = n, t = t.slice(0, t.length - 1)), r.args = t, this.packet(r)
                            }, n.prototype.disconnect = function() {
                                return "" === this.name ? this.socket.disconnect() : (this.packet({
                                    type: "disconnect"
                                }), this.$emit("disconnect")), this
                            }, n.prototype.onPacket = function(e) {
                                function n() {
                                    r.packet({
                                        type: "ack",
                                        args: t.util.toArray(arguments),
                                        ackId: e.id
                                    })
                                }
                                var r = this;
                                switch (e.type) {
                                    case "connect":
                                        this.$emit("connect");
                                        break;
                                    case "disconnect":
                                        "" === this.name ? this.socket.onDisconnect(e.reason || "booted") : this.$emit("disconnect", e.reason);
                                        break;
                                    case "message":
                                    case "json":
                                        var o = ["message", e.data];
                                        "data" == e.ack ? o.push(n) : e.ack && this.packet({
                                            type: "ack",
                                            ackId: e.id
                                        }), this.$emit.apply(this, o);
                                        break;
                                    case "event":
                                        var o = [e.name].concat(e.args);
                                        "data" == e.ack && o.push(n), this.$emit.apply(this, o);
                                        break;
                                    case "ack":
                                        this.acks[e.ackId] && (this.acks[e.ackId].apply(this, e.args), delete this.acks[e.ackId]);
                                        break;
                                    case "error":
                                        e.advice ? this.socket.onError(e) : "unauthorized" == e.reason ? this.$emit("connect_failed", e.reason) : this.$emit("error", e.reason)
                                }
                            }, r.prototype.send = function() {
                                this.namespace.flags[this.name] = !0, this.namespace.send.apply(this.namespace, arguments)
                            }, r.prototype.emit = function() {
                                this.namespace.flags[this.name] = !0, this.namespace.emit.apply(this.namespace, arguments)
                            }
                        }("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(e, t, n) {
                            function r(e) {
                                t.Transport.apply(this, arguments)
                            }
                            e.websocket = r, t.util.inherit(r, t.Transport), r.prototype.name = "websocket", r.prototype.open = function() {
                                var e, r = t.util.query(this.socket.options.query),
                                    o = this;
                                return e || (e = n.MozWebSocket || n.WebSocket), this.websocket = new e(this.prepareUrl() + r), this.websocket.onopen = function() {
                                    o.onOpen(), o.socket.setBuffer(!1)
                                }, this.websocket.onmessage = function(e) {
                                    o.onData(e.data)
                                }, this.websocket.onclose = function() {
                                    o.socket.setBuffer(!0), o.onClose()
                                }, this.websocket.onerror = function(e) {
                                    o.onError(e)
                                }, this
                            }, t.util.ua.iDevice ? r.prototype.send = function(e) {
                                var t = this;
                                return setTimeout(function() {
                                    t.websocket.send(e)
                                }, 0), this
                            } : r.prototype.send = function(e) {
                                return this.websocket.send(e), this
                            }, r.prototype.payload = function(e) {
                                for (var t = 0, n = e.length; t < n; t++) this.packet(e[t]);
                                return this
                            }, r.prototype.close = function() {
                                return this.websocket.close(), this
                            }, r.prototype.onError = function(e) {
                                this.socket.onError(e)
                            }, r.prototype.scheme = function() {
                                return this.socket.options.secure ? "wss" : "ws"
                            }, r.check = function() {
                                return "WebSocket" in n && !("__addTask" in WebSocket) || "MozWebSocket" in n
                            }, r.xdomainCheck = function() {
                                return !0
                            }, t.transports.push("websocket")
                        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function(e, t) {
                            function n() {
                                t.Transport.websocket.apply(this, arguments)
                            }
                            e.flashsocket = n, t.util.inherit(n, t.Transport.websocket), n.prototype.name = "flashsocket", n.prototype.open = function() {
                                var e = this,
                                    n = arguments;
                                return WebSocket.__addTask(function() {
                                    t.Transport.websocket.prototype.open.apply(e, n)
                                }), this
                            }, n.prototype.send = function() {
                                var e = this,
                                    n = arguments;
                                return WebSocket.__addTask(function() {
                                    t.Transport.websocket.prototype.send.apply(e, n)
                                }), this
                            }, n.prototype.close = function() {
                                return WebSocket.__tasks.length = 0, t.Transport.websocket.prototype.close.call(this), this
                            }, n.prototype.ready = function(e, r) {
                                function o() {
                                    var t = e.options,
                                        o = t["flash policy port"],
                                        s = ["http" + (t.secure ? "s" : "") + ":/", t.host + ":" + t.port, t.resource, "static/flashsocket", "WebSocketMain" + (e.isXDomain() ? "Insecure" : "") + ".swf"];
                                    n.loaded || ("undefined" == typeof WEB_SOCKET_SWF_LOCATION && (WEB_SOCKET_SWF_LOCATION = s.join("/")), 843 !== o && WebSocket.loadFlashPolicyFile("xmlsocket://" + t.host + ":" + o), WebSocket.__initialize(), n.loaded = !0), r.call(i)
                                }
                                var i = this;
                                return document.body ? o() : void t.util.load(o)
                            }, n.check = function() {
                                return !!("undefined" != typeof WebSocket && "__initialize" in WebSocket && swfobject) && swfobject.getFlashPlayerVersion().major >= 10
                            }, n.xdomainCheck = function() {
                                return !0
                            }, "undefined" != typeof window && (window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0), t.transports.push("flashsocket")
                        }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), "undefined" != typeof window && "undefined" != typeof window.document) var swfobject = function() {
                        function e() {
                            if (!H) {
                                try {
                                    var e = N.getElementsByTagName("body")[0].appendChild(g("span"));
                                    e.parentNode.removeChild(e)
                                } catch (t) {
                                    return
                                }
                                H = !0;
                                for (var n = B.length, r = 0; r < n; r++) B[r]()
                            }
                        }
                        function t(e) {
                            H ? e() : B[B.length] = e
                        }
                        function n(e) {
                            if (typeof F.addEventListener != x) F.addEventListener("load", e, !1);
                            else if (typeof N.addEventListener != x) N.addEventListener("load", e, !1);
                            else if (typeof F.attachEvent != x) h(F, "onload", e);
                            else if ("function" == typeof F.onload) {
                                var t = F.onload;
                                F.onload = function() {
                                    t(), e()
                                }
                            } else F.onload = e
                        }
                        function r() {
                            D ? o() : i()
                        }
                        function o() {
                            var e = N.getElementsByTagName("body")[0],
                                t = g(_);
                            t.setAttribute("type", A);
                            var n = e.appendChild(t);
                            if (n) {
                                var r = 0;
                                !
                                    function() {
                                        if (typeof n.GetVariable != x) {
                                            var o = n.GetVariable("$version");
                                            o && (o = o.split(" ")[1].split(","), X.pv = [parseInt(o[0], 10), parseInt(o[1], 10), parseInt(o[2], 10)])
                                        } else if (r < 10) return r++, void setTimeout(arguments.callee, 10);
                                        e.removeChild(t), n = null, i()
                                    }()
                            } else i()
                        }
                        function i() {
                            var e = L.length;
                            if (e > 0) for (var t = 0; t < e; t++) {
                                var n = L[t].id,
                                    r = L[t].callbackFn,
                                    o = {
                                        success: !1,
                                        id: n
                                    };
                                if (X.pv[0] > 0) {
                                    var i = y(n);
                                    if (i) if (!v(L[t].swfVersion) || X.wk && X.wk < 312) if (L[t].expressInstall && a()) {
                                        var l = {};
                                        l.data = L[t].expressInstall, l.width = i.getAttribute("width") || "0", l.height = i.getAttribute("height") || "0", i.getAttribute("class") && (l.styleclass = i.getAttribute("class")), i.getAttribute("align") && (l.align = i.getAttribute("align"));
                                        for (var d = {}, f = i.getElementsByTagName("param"), p = f.length, m = 0; m < p; m++)"movie" != f[m].getAttribute("name").toLowerCase() && (d[f[m].getAttribute("name")] = f[m].getAttribute("value"));
                                        c(l, d, n, r)
                                    } else u(i), r && r(o);
                                    else M(n, !0), r && (o.success = !0, o.ref = s(n), r(o))
                                } else if (M(n, !0), r) {
                                    var g = s(n);
                                    g && typeof g.SetVariable != x && (o.success = !0, o.ref = g), r(o)
                                }
                            }
                        }
                        function s(e) {
                            var t = null,
                                n = y(e);
                            if (n && "OBJECT" == n.nodeName) if (typeof n.SetVariable != x) t = n;
                            else {
                                var r = n.getElementsByTagName(_)[0];
                                r && (t = r)
                            }
                            return t
                        }
                        function a() {
                            return !$ && v("6.0.65") && (X.win || X.mac) && !(X.wk && X.wk < 312)
                        }
                        function c(e, t, n, r) {
                            $ = !0, w = r || null, O = {
                                success: !1,
                                id: n
                            };
                            var o = y(n);
                            if (o) {
                                "OBJECT" == o.nodeName ? (S = l(o), k = null) : (S = o, k = n), e.id = j, (typeof e.width == x || !/%$/.test(e.width) && parseInt(e.width, 10) < 310) && (e.width = "310"), (typeof e.height == x || !/%$/.test(e.height) && parseInt(e.height, 10) < 137) && (e.height = "137"), N.title = N.title.slice(0, 47) + " - Flash Player Installation";
                                var i = X.ie && X.win ? ["Active"].concat("").join("X") : "PlugIn",
                                    s = "MMredirectURL=" + F.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + i + "&MMdoctitle=" + N.title;
                                if (typeof t.flashvars != x ? t.flashvars += "&" + s : t.flashvars = s, X.ie && X.win && 4 != o.readyState) {
                                    var a = g("div");
                                    n += "SWFObjectNew", a.setAttribute("id", n), o.parentNode.insertBefore(a, o), o.style.display = "none", function() {
                                        4 == o.readyState ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                                    }()
                                }
                                d(e, t, n)
                            }
                        }
                        function u(e) {
                            if (X.ie && X.win && 4 != e.readyState) {
                                var t = g("div");
                                e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(l(e), t), e.style.display = "none", function() {
                                    4 == e.readyState ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                                }()
                            } else e.parentNode.replaceChild(l(e), e)
                        }
                        function l(e) {
                            var t = g("div");
                            if (X.win && X.ie) t.innerHTML = e.innerHTML;
                            else {
                                var n = e.getElementsByTagName(_)[0];
                                if (n) {
                                    var r = n.childNodes;
                                    if (r) for (var o = r.length, i = 0; i < o; i++) 1 == r[i].nodeType && "PARAM" == r[i].nodeName || 8 == r[i].nodeType || t.appendChild(r[i].cloneNode(!0))
                                }
                            }
                            return t
                        }
                        function d(e, t, n) {
                            var r, o = y(n);
                            if (X.wk && X.wk < 312) return r;
                            if (o) if (typeof e.id == x && (e.id = n), X.ie && X.win) {
                                var i = "";
                                for (var s in e) e[s] != Object.prototype[s] && ("data" == s.toLowerCase() ? t.movie = e[s] : "styleclass" == s.toLowerCase() ? i += ' class="' + e[s] + '"' : "classid" != s.toLowerCase() && (i += " " + s + '="' + e[s] + '"'));
                                var a = "";
                                for (var c in t) t[c] != Object.prototype[c] && (a += '<param name="' + c + '" value="' + t[c] + '" />');
                                o.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + a + "</object>", q[q.length] = e.id, r = y(e.id)
                            } else {
                                var u = g(_);
                                u.setAttribute("type", A);
                                for (var l in e) e[l] != Object.prototype[l] && ("styleclass" == l.toLowerCase() ? u.setAttribute("class", e[l]) : "classid" != l.toLowerCase() && u.setAttribute(l, e[l]));
                                for (var d in t) t[d] != Object.prototype[d] && "movie" != d.toLowerCase() && f(u, d, t[d]);
                                o.parentNode.replaceChild(u, o), r = u
                            }
                            return r
                        }
                        function f(e, t, n) {
                            var r = g("param");
                            r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
                        }
                        function p(e) {
                            var t = y(e);
                            t && "OBJECT" == t.nodeName && (X.ie && X.win ? (t.style.display = "none", function() {
                                4 == t.readyState ? m(e) : setTimeout(arguments.callee, 10)
                            }()) : t.parentNode.removeChild(t))
                        }
                        function m(e) {
                            var t = y(e);
                            if (t) {
                                for (var n in t)"function" == typeof t[n] && (t[n] = null);
                                t.parentNode.removeChild(t)
                            }
                        }
                        function y(e) {
                            var t = null;
                            try {
                                t = N.getElementById(e)
                            } catch (n) {}
                            return t
                        }
                        function g(e) {
                            return N.createElement(e)
                        }
                        function h(e, t, n) {
                            e.attachEvent(t, n), W[W.length] = [e, t, n]
                        }
                        function v(e) {
                            var t = X.pv,
                                n = e.split(".");
                            return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2]
                        }
                        function b(e, t, n, r) {
                            if (!X.ie || !X.mac) {
                                var o = N.getElementsByTagName("head")[0];
                                if (o) {
                                    var i = n && "string" == typeof n ? n : "screen";
                                    if (r && (C = null, I = null), !C || I != i) {
                                        var s = g("style");
                                        s.setAttribute("type", "text/css"), s.setAttribute("media", i), C = o.appendChild(s), X.ie && X.win && typeof N.styleSheets != x && N.styleSheets.length > 0 && (C = N.styleSheets[N.styleSheets.length - 1]), I = i
                                    }
                                    X.ie && X.win ? C && typeof C.addRule == _ && C.addRule(e, t) : C && typeof N.createTextNode != x && C.appendChild(N.createTextNode(e + " {" + t + "}"))
                                }
                            }
                        }
                        function M(e, t) {
                            if (J) {
                                var n = t ? "visible" : "hidden";
                                H && y(e) ? y(e).style.visibility = n : b("#" + e, "visibility:" + n)
                            }
                        }
                        function T(e) {
                            var t = /[\\\"<>\.;]/,
                                n = null != t.exec(e);
                            return n && typeof encodeURIComponent != x ? encodeURIComponent(e) : e
                        }
                        var S, k, w, O, C, I, x = "undefined",
                            _ = "object",
                            E = "Shockwave Flash",
                            P = "ShockwaveFlash.ShockwaveFlash",
                            A = "application/x-shockwave-flash",
                            j = "SWFObjectExprInst",
                            R = "onreadystatechange",
                            F = window,
                            N = document,
                            U = navigator,
                            D = !1,
                            B = [r],
                            L = [],
                            q = [],
                            W = [],
                            H = !1,
                            $ = !1,
                            J = !0,
                            X = function() {
                                var e = typeof N.getElementById != x && typeof N.getElementsByTagName != x && typeof N.createElement != x,
                                    t = U.userAgent.toLowerCase(),
                                    n = U.platform.toLowerCase(),
                                    r = n ? /win/.test(n) : /win/.test(t),
                                    o = n ? /mac/.test(n) : /mac/.test(t),
                                    i = !! /webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                                    s = !1,
                                    a = [0, 0, 0],
                                    c = null;
                                if (typeof U.plugins != x && typeof U.plugins[E] == _) c = U.plugins[E].description, !c || typeof U.mimeTypes != x && U.mimeTypes[A] && !U.mimeTypes[A].enabledPlugin || (D = !0, s = !1, c = c.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(c.replace(/^(.*)\..*$/, "$1"), 10), a[1] = parseInt(c.replace(/^.*\.(.*)\s.*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(c) ? parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                                else if (typeof F[["Active"].concat("Object").join("X")] != x) try {
                                    var u = new(window[["Active"].concat("Object").join("X")])(P);
                                    u && (c = u.GetVariable("$version"), c && (s = !0, c = c.split(" ")[1].split(","), a = [parseInt(c[0], 10), parseInt(c[1], 10), parseInt(c[2], 10)]))
                                } catch (l) {}
                                return {
                                    w3: e,
                                    pv: a,
                                    wk: i,
                                    ie: s,
                                    win: r,
                                    mac: o
                                }
                            }();
                        (function() {
                            X.w3 && ((typeof N.readyState != x && "complete" == N.readyState || typeof N.readyState == x && (N.getElementsByTagName("body")[0] || N.body)) && e(), H || (typeof N.addEventListener != x && N.addEventListener("DOMContentLoaded", e, !1), X.ie && X.win && (N.attachEvent(R, function() {
                                "complete" == N.readyState && (N.detachEvent(R, arguments.callee), e())
                            }), F == top && !
                                function() {
                                    if (!H) {
                                        try {
                                            N.documentElement.doScroll("left")
                                        } catch (t) {
                                            return void setTimeout(arguments.callee, 0)
                                        }
                                        e()
                                    }
                                }()), X.wk && !
                                function() {
                                    if (!H) return /loaded|complete/.test(N.readyState) ? void e() : void setTimeout(arguments.callee, 0)
                                }(), n(e)))
                        })(), function() {
                            X.ie && X.win && window.attachEvent("onunload", function() {
                                for (var e = W.length, t = 0; t < e; t++) W[t][0].detachEvent(W[t][1], W[t][2]);
                                for (var n = q.length, r = 0; r < n; r++) p(q[r]);
                                for (var o in X) X[o] = null;
                                X = null;
                                for (var i in swfobject) swfobject[i] = null;
                                swfobject = null
                            })
                        }();
                        return {
                            registerObject: function(e, t, n, r) {
                                if (X.w3 && e && t) {
                                    var o = {};
                                    o.id = e, o.swfVersion = t, o.expressInstall = n, o.callbackFn = r, L[L.length] = o, M(e, !1)
                                } else r && r({
                                    success: !1,
                                    id: e
                                })
                            },
                            getObjectById: function(e) {
                                if (X.w3) return s(e)
                            },
                            embedSWF: function(e, n, r, o, i, s, u, l, f, p) {
                                var m = {
                                    success: !1,
                                    id: n
                                };
                                X.w3 && !(X.wk && X.wk < 312) && e && n && r && o && i ? (M(n, !1), t(function() {
                                    r += "", o += "";
                                    var t = {};
                                    if (f && typeof f === _) for (var y in f) t[y] = f[y];
                                    t.data = e, t.width = r, t.height = o;
                                    var g = {};
                                    if (l && typeof l === _) for (var h in l) g[h] = l[h];
                                    if (u && typeof u === _) for (var b in u) typeof g.flashvars != x ? g.flashvars += "&" + b + "=" + u[b] : g.flashvars = b + "=" + u[b];
                                    if (v(i)) {
                                        var T = d(t, g, n);
                                        t.id == n && M(n, !0), m.success = !0, m.ref = T
                                    } else {
                                        if (s && a()) return t.data = s, void c(t, g, n, p);
                                        M(n, !0)
                                    }
                                    p && p(m)
                                })) : p && p(m)
                            },
                            switchOffAutoHideShow: function() {
                                J = !1
                            },
                            ua: X,
                            getFlashPlayerVersion: function() {
                                return {
                                    major: X.pv[0],
                                    minor: X.pv[1],
                                    release: X.pv[2]
                                }
                            },
                            hasFlashPlayerVersion: v,
                            createSWF: function(e, t, n) {
                                return X.w3 ? d(e, t, n) : void 0
                            },
                            showExpressInstall: function(e, t, n, r) {
                                X.w3 && a() && c(e, t, n, r)
                            },
                            removeSWF: function(e) {
                                X.w3 && p(e)
                            },
                            createCSS: function(e, t, n, r) {
                                X.w3 && b(e, t, n, r)
                            },
                            addDomLoadEvent: t,
                            addLoadEvent: n,
                            getQueryParamValue: function(e) {
                                var t = N.location.search || N.location.hash;
                                if (t) {
                                    if (/\?/.test(t) && (t = t.split("?")[1]), null == e) return T(t);
                                    for (var n = t.split("&"), r = 0; r < n.length; r++) if (n[r].substring(0, n[r].indexOf("=")) == e) return T(n[r].substring(n[r].indexOf("=") + 1))
                                }
                                return ""
                            },
                            expressInstallCallback: function() {
                                if ($) {
                                    var e = y(j);
                                    e && S && (e.parentNode.replaceChild(S, e), k && (M(k, !0), X.ie && X.win && (S.style.display = "block")), w && w(O)), $ = !1
                                }
                            }
                        }
                    }();
                    !
                        function() {
                            if ("undefined" != typeof window && !window.WebSocket) {
                                var e = window.console;
                                if (e && e.log && e.error || (e = {
                                        log: function() {},
                                        error: function() {}
                                    }), !swfobject.hasFlashPlayerVersion("10.0.0")) return void e.error("Flash Player >= 10.0.0 is required.");
                                "file:" == location.protocol && e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."), WebSocket = function(e, t, n, r, o) {
                                    var i = this;
                                    i.__id = WebSocket.__nextId++, WebSocket.__instances[i.__id] = i, i.readyState = WebSocket.CONNECTING, i.bufferedAmount = 0, i.__events = {}, t ? "string" == typeof t && (t = [t]) : t = [], setTimeout(function() {
                                        WebSocket.__addTask(function() {
                                            WebSocket.__flash.create(i.__id, e, t, n || null, r || 0, o || null)
                                        })
                                    }, 0)
                                }, WebSocket.prototype.send = function(e) {
                                    if (this.readyState == WebSocket.CONNECTING) throw "INVALID_STATE_ERR: Web Socket connection has not been established";
                                    var t = WebSocket.__flash.send(this.__id, encodeURIComponent(e));
                                    return t < 0 || (this.bufferedAmount += t, !1)
                                }, WebSocket.prototype.close = function() {
                                    this.readyState != WebSocket.CLOSED && this.readyState != WebSocket.CLOSING && (this.readyState = WebSocket.CLOSING, WebSocket.__flash.close(this.__id))
                                }, WebSocket.prototype.addEventListener = function(e, t, n) {
                                    e in this.__events || (this.__events[e] = []), this.__events[e].push(t)
                                }, WebSocket.prototype.removeEventListener = function(e, t, n) {
                                    if (e in this.__events) for (var r = this.__events[e], o = r.length - 1; o >= 0; --o) if (r[o] === t) {
                                        r.splice(o, 1);
                                        break
                                    }
                                }, WebSocket.prototype.dispatchEvent = function(e) {
                                    for (var t = this.__events[e.type] || [], n = 0; n < t.length; ++n) t[n](e);
                                    var r = this["on" + e.type];
                                    r && r(e)
                                }, WebSocket.prototype.__handleEvent = function(e) {
                                    "readyState" in e && (this.readyState = e.readyState), "protocol" in e && (this.protocol = e.protocol);
                                    var t;
                                    if ("open" == e.type || "error" == e.type) t = this.__createSimpleEvent(e.type);
                                    else if ("close" == e.type) t = this.__createSimpleEvent("close");
                                    else {
                                        if ("message" != e.type) throw "unknown event type: " + e.type;
                                        var n = decodeURIComponent(e.message);
                                        t = this.__createMessageEvent("message", n)
                                    }
                                    this.dispatchEvent(t)
                                }, WebSocket.prototype.__createSimpleEvent = function(e) {
                                    if (document.createEvent && window.Event) {
                                        var t = document.createEvent("Event");
                                        return t.initEvent(e, !1, !1), t
                                    }
                                    return {
                                        type: e,
                                        bubbles: !1,
                                        cancelable: !1
                                    }
                                }, WebSocket.prototype.__createMessageEvent = function(e, t) {
                                    if (document.createEvent && window.MessageEvent && !window.opera) {
                                        var n = document.createEvent("MessageEvent");
                                        return n.initMessageEvent("message", !1, !1, t, null, null, window, null), n
                                    }
                                    return {
                                        type: e,
                                        data: t,
                                        bubbles: !1,
                                        cancelable: !1
                                    }
                                }, WebSocket.CONNECTING = 0, WebSocket.OPEN = 1, WebSocket.CLOSING = 2, WebSocket.CLOSED = 3, WebSocket.__flash = null, WebSocket.__instances = {}, WebSocket.__tasks = [], WebSocket.__nextId = 0, WebSocket.loadFlashPolicyFile = function(e) {
                                    WebSocket.__addTask(function() {
                                        WebSocket.__flash.loadManualPolicyFile(e)
                                    })
                                }, WebSocket.__initialize = function() {
                                    if (!WebSocket.__flash) {
                                        if (WebSocket.__swfLocation && (window.WEB_SOCKET_SWF_LOCATION = WebSocket.__swfLocation), !window.WEB_SOCKET_SWF_LOCATION) return void e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                                        var t = document.createElement("div");
                                        t.id = "webSocketContainer", t.style.position = "absolute", WebSocket.__isFlashLite() ? (t.style.left = "0px", t.style.top = "0px") : (t.style.left = "-100px", t.style.top = "-100px");
                                        var n = document.createElement("div");
                                        n.id = "webSocketFlash", t.appendChild(n), document.body.appendChild(t), swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                                            hasPriority: !0,
                                            swliveconnect: !0,
                                            allowScriptAccess: "always"
                                        }, null, function(t) {
                                            t.success || e.error("[WebSocket] swfobject.embedSWF failed")
                                        })
                                    }
                                }, WebSocket.__onFlashInitialized = function() {
                                    setTimeout(function() {
                                        WebSocket.__flash = document.getElementById("webSocketFlash"), WebSocket.__flash.setCallerUrl(location.href), WebSocket.__flash.setDebug( !! window.WEB_SOCKET_DEBUG);
                                        for (var e = 0; e < WebSocket.__tasks.length; ++e) WebSocket.__tasks[e]();
                                        WebSocket.__tasks = []
                                    }, 0)
                                }, WebSocket.__onFlashEvent = function() {
                                    return setTimeout(function() {
                                        try {
                                            for (var t = WebSocket.__flash.receiveEvents(), n = 0; n < t.length; ++n) WebSocket.__instances[t[n].webSocketId].__handleEvent(t[n])
                                        } catch (r) {
                                            e.error(r)
                                        }
                                    }, 0), !0
                                };
                                var t = function() {
                                    var e = function(e, t) {
                                            t = t || 2;
                                            for (var n = "" + e; n.length < t;) n = "0" + n;
                                            return n
                                        },
                                        t = new Date,
                                        n = t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate()) + " " + e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds()) + ":" + e(t.getMilliseconds(), 3);
                                    return n
                                };
                                WebSocket.__log = function(n) {
                                    e.log(t(), decodeURIComponent(n))
                                }, WebSocket.__error = function(n) {
                                    e.error(t(), decodeURIComponent(n))
                                }, WebSocket.__addTask = function(e) {
                                    WebSocket.__flash ? e() : WebSocket.__tasks.push(e)
                                }, WebSocket.__isFlashLite = function() {
                                    if (!window.navigator || !window.navigator.mimeTypes) return !1;
                                    var e = window.navigator.mimeTypes["application/x-shockwave-flash"];
                                    return !!(e && e.enabledPlugin && e.enabledPlugin.filename) && !! e.enabledPlugin.filename.match(/flashlite/i)
                                }, window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION || (window.addEventListener ? window.addEventListener("load", function() {
                                    WebSocket.__initialize()
                                }, !1) : window.attachEvent("onload", function() {
                                    WebSocket.__initialize()
                                }))
                            }
                        }(), function(e, t, n) {
                        function r(e) {
                            e && (t.Transport.apply(this, arguments), this.sendBuffer = [])
                        }
                        function o() {}
                        e.XHR = r, t.util.inherit(r, t.Transport), r.prototype.open = function() {
                            return this.socket.setBuffer(!1), this.onOpen(), this.get(), this.setCloseTimeout(), this
                        }, r.prototype.payload = function(e) {
                            for (var n = [], r = 0, o = e.length; r < o; r++) n.push(t.parser.encodePacket(e[r]));
                            this.send(t.parser.encodePayload(n))
                        }, r.prototype.send = function(e) {
                            return this.post(e), this
                        }, r.prototype.post = function(e) {
                            function t() {
                                4 == this.readyState && (this.onreadystatechange = o, i.posting = !1, 200 == this.status ? i.socket.setBuffer(!1) : i.onClose())
                            }
                            function r() {
                                this.onload = o, i.socket.setBuffer(!1)
                            }
                            var i = this;
                            this.socket.setBuffer(!0), this.sendXHR = this.request("POST"), n.XDomainRequest && this.sendXHR instanceof XDomainRequest ? this.sendXHR.onload = this.sendXHR.onerror = r : this.sendXHR.onreadystatechange = t, this.sendXHR.send(e)
                        }, r.prototype.close = function() {
                            return this.onClose(), this
                        }, r.prototype.request = function(e) {
                            var n = t.util.request(this.socket.isXDomain()),
                                r = t.util.query(this.socket.options.query, "t=" + +new Date);
                            if (n.open(e || "GET", this.prepareUrl() + r, !0), "POST" == e) try {
                                n.setRequestHeader ? n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") : n.contentType = "text/plain"
                            } catch (o) {}
                            return n
                        }, r.prototype.scheme = function() {
                            return this.socket.options.secure ? "https" : "http"
                        }, r.check = function(e, r) {
                            try {
                                var o = t.util.request(r),
                                    i = n.XDomainRequest && o instanceof XDomainRequest,
                                    s = e && e.options && e.options.secure ? "https:" : "http:",
                                    a = n.location && s != n.location.protocol;
                                if (o && (!i || !a)) return !0
                            } catch (c) {}
                            return !1
                        }, r.xdomainCheck = function(e) {
                            return r.check(e, !0)
                        }
                    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function(e, t) {
                        function n(e) {
                            t.Transport.XHR.apply(this, arguments)
                        }
                        e.htmlfile = n, t.util.inherit(n, t.Transport.XHR), n.prototype.name = "htmlfile", n.prototype.get = function() {
                            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile"), this.doc.open(), this.doc.write("<html></html>"), this.doc.close(), this.doc.parentWindow.s = this;
                            var e = this.doc.createElement("div");
                            e.className = "socketio", this.doc.body.appendChild(e), this.iframe = this.doc.createElement("iframe"), e.appendChild(this.iframe);
                            var n = this,
                                r = t.util.query(this.socket.options.query, "t=" + +new Date);
                            this.iframe.src = this.prepareUrl() + r, t.util.on(window, "unload", function() {
                                n.destroy()
                            })
                        }, n.prototype._ = function(e, t) {
                            this.onData(e);
                            try {
                                var n = t.getElementsByTagName("script")[0];
                                n.parentNode.removeChild(n)
                            } catch (r) {}
                        }, n.prototype.destroy = function() {
                            if (this.iframe) {
                                try {
                                    this.iframe.src = "about:blank"
                                } catch (e) {}
                                this.doc = null, this.iframe.parentNode.removeChild(this.iframe), this.iframe = null, CollectGarbage()
                            }
                        }, n.prototype.close = function() {
                            return this.destroy(), t.Transport.XHR.prototype.close.call(this)
                        }, n.check = function(e) {
                            if ("undefined" != typeof window && ["Active"].concat("Object").join("X") in window) try {
                                var n = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                                return n && t.Transport.XHR.check(e)
                            } catch (r) {}
                            return !1
                        }, n.xdomainCheck = function() {
                            return !1
                        }, t.transports.push("htmlfile")
                    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports), function(e, t, n) {
                        function r() {
                            t.Transport.XHR.apply(this, arguments)
                        }
                        function o() {}
                        e["xhr-polling"] = r, t.util.inherit(r, t.Transport.XHR), t.util.merge(r, t.Transport.XHR), r.prototype.name = "xhr-polling", r.prototype.heartbeats = function() {
                            return !1
                        }, r.prototype.open = function() {
                            var e = this;
                            return t.Transport.XHR.prototype.open.call(e), !1
                        }, r.prototype.get = function() {
                            function e() {
                                4 == this.readyState && (this.onreadystatechange = o, 200 == this.status ? (i.onData(this.responseText), i.get()) : i.onClose())
                            }
                            function t() {
                                this.onload = o, this.onerror = o, i.retryCounter = 1, i.onData(this.responseText), i.get()
                            }
                            function r() {
                                i.retryCounter++, !i.retryCounter || i.retryCounter > 3 ? i.onClose() : i.get()
                            }
                            if (this.isOpen) {
                                var i = this;
                                this.xhr = this.request(), n.XDomainRequest && this.xhr instanceof XDomainRequest ? (this.xhr.onload = t, this.xhr.onerror = r) : this.xhr.onreadystatechange = e, this.xhr.send(null)
                            }
                        }, r.prototype.onClose = function() {
                            if (t.Transport.XHR.prototype.onClose.call(this), this.xhr) {
                                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = o;
                                try {
                                    this.xhr.abort()
                                } catch (e) {}
                                this.xhr = null
                            }
                        }, r.prototype.ready = function(e, n) {
                            var r = this;
                            t.util.defer(function() {
                                n.call(r)
                            })
                        }, t.transports.push("xhr-polling")
                    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), function(e, t, n) {
                        function r(e) {
                            t.Transport["xhr-polling"].apply(this, arguments), this.index = t.j.length;
                            var n = this;
                            t.j.push(function(e) {
                                n._(e)
                            })
                        }
                        var o = n.document && "MozAppearance" in n.document.documentElement.style;
                        e["jsonp-polling"] = r, t.util.inherit(r, t.Transport["xhr-polling"]), r.prototype.name = "jsonp-polling", r.prototype.post = function(e) {
                            function n() {
                                r(), o.socket.setBuffer(!1)
                            }
                            function r() {
                                o.iframe && o.form.removeChild(o.iframe);
                                try {
                                    s = document.createElement('<iframe name="' + o.iframeId + '">')
                                } catch (e) {
                                    s = document.createElement("iframe"), s.name = o.iframeId
                                }
                                s.id = o.iframeId, o.form.appendChild(s), o.iframe = s
                            }
                            var o = this,
                                i = t.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                            if (!this.form) {
                                var s, a = document.createElement("form"),
                                    c = document.createElement("textarea"),
                                    u = this.iframeId = "socketio_iframe_" + this.index;
                                a.className = "socketio", a.style.position = "absolute", a.style.top = "0px", a.style.left = "0px", a.style.display = "none", a.target = u, a.method = "POST", a.setAttribute("accept-charset", "utf-8"), c.name = "d", a.appendChild(c), document.body.appendChild(a), this.form = a, this.area = c
                            }
                            this.form.action = this.prepareUrl() + i, r(), this.area.value = t.JSON.stringify(e);
                            try {
                                this.form.submit()
                            } catch (l) {}
                            this.iframe.attachEvent ? s.onreadystatechange = function() {
                                "complete" == o.iframe.readyState && n()
                            } : this.iframe.onload = n, this.socket.setBuffer(!0)
                        }, r.prototype.get = function() {
                            var e = this,
                                n = document.createElement("script"),
                                r = t.util.query(this.socket.options.query, "t=" + +new Date + "&i=" + this.index);
                            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), n.async = !0, n.src = this.prepareUrl() + r, n.onerror = function() {
                                e.onClose()
                            };
                            var i = document.getElementsByTagName("script")[0];
                            i.parentNode.insertBefore(n, i), this.script = n, o && setTimeout(function() {
                                var e = document.createElement("iframe");
                                document.body.appendChild(e), document.body.removeChild(e)
                            }, 100)
                        }, r.prototype._ = function(e) {
                            return this.onData(e), this.isOpen && this.get(), this
                        }, r.prototype.ready = function(e, n) {
                            var r = this;
                            return o ? void t.util.load(function() {
                                n.call(r)
                            }) : n.call(this)
                        }, r.check = function() {
                            return "document" in n
                        }, r.xdomainCheck = function() {
                            return !0
                        }, t.transports.push("jsonp-polling")
                    }("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, window), __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                        return io
                    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
                }()
            }).call(exports, __webpack_require__(16)(module))
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function o() {}
            var i = n(15),
                s = r(i),
                a = s["default"].clientTypeMap;
            o.reverse = function(e) {
                var t = e;
                return t.type = a[t.type], t
            }, o.reverseType = function(e) {
                return a[e] || e
            }, e.exports = o
        }, function(e, t, n) {
            "use strict";

            function r() {}
            var o = n(1);
            r.parse = function(e) {
                var t = e.split("|");
                return {
                    scene: t[0],
                    to: t[1]
                }
            }, r.genSessionByMsg = function(e) {
                var t = {
                    id: e.sessionId,
                    scene: e.scene,
                    to: e.target,
                    updateTime: e.time,
                    lastMsg: e
                };
                return t
            }, r.appendLastMsg = function(e) {
                var t = e.lastMsg,
                    n = o.capFirstLetter(t.type);
                e["last" + n + "Msg"] = t;
                var r = o.capFirstLetter(t.flow);
                e["last" + r + "Msg"] = t
            }, r.genSessionByMsgs = function(e, t) {
                var n = e.getLastNotIgnoredMsg(t);
                return n ? r.genSessionByMsg(n) : null
            }, r.trim = function(e) {
                delete e.msgReceiptSendTime, delete e.msgReceiptServerTime, delete e.ack, delete e.unreadMsgs
            }, r.isComplete = function(e) {
                return e.id && e.scene && e.to
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                i.verifyOptions(e, "type to"), i.verifyParamValid("type", e.type, r.validTypes), e.type.indexOf("custom") !== -1 && (i.verifyOptions(e, "content"), t.attach = e.content, a(e.apnsText) && (t.apnsText = "" + e.apnsText), a(e.pushPayload) && ("object" === o(e.pushPayload) ? (t.logger.warn("model::Message: pushPayload should be JsonString, auto transfer"), t.pushPayload = JSON.stringify(e.pushPayload)) : t.pushPayload = "" + e.pushPayload), a(e.sendToOnlineUsersOnly) && (t.sendToOnlineUsersOnly = e.sendToOnlineUsersOnly ? 0 : 1), a(e.cc) && (t.cc = e.cc ? 1 : 0), a(e.isPushable) && (t.isPushable = e.isPushable ? 1 : 0), a(e.isUnreadable) && (t.isUnreadable = e.isUnreadable ? 1 : 0), a(e.needPushNick) && (t.needPushNick = e.needPushNick ? 1 : 0)), t.time = e.time || +new Date, t.type = d[e.type], t.to = e.to, a(e.from) && (t.from = e.from), a(e.ps) && (t.ps = e.ps), a(e.deletedIdClient) && (t.deletedIdClient = e.deletedIdClient), a(e.deletedIdServer) && (t.deletedIdServer = e.deletedIdServer), a(e.opeAccount) && (t.opeAccount = e.opeAccount), a(e.yidunEnable) && (t.yidunEnable = e.yidunEnable ? 1 : 0), a(e.antiSpamContent) && ("object" === o(e.antiSpamContent) ? (t.logger.warn("model::Message: antiSpamContent should be JsonString, auto transfer"), t.antiSpamContent = JSON.stringify(e.antiSpamContent)) : t.antiSpamContent = "" + e.antiSpamContent), a(e.antiSpamBusinessId) && ("object" === o(e.antiSpamBusinessId) ? (t.logger.warn("model::Message: antiSpamBusinessId should be JsonString, auto transfer"), t.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId)) : t.antiSpamBusinessId = "" + e.antiSpamBusinessId), t.idClient = e.idClient || i.guid()
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i = n(1), s = i.undef, a = i.notundef, c = n(22).getInstance("IM"), u = n(32), l = n(23), d = {
                customP2p: 100,
                customTeam: 101,
                deleteMsgP2p: 7,
                deleteMsgTeam: 8
            }, f = {
                0: "applyTeam",
                1: "rejectTeamApply",
                2: "teamInvite",
                3: "rejectTeamInvite",
                5: "friendRequest",
                6: "deleteFriend",
                7: "deleteMsgP2p",
                8: "deleteMsgTeam",
                100: "customP2p",
                101: "customTeam",
                102: "customP2p"
            }, p = {
                1: "addFriend",
                2: "applyFriend",
                3: "passFriendApply",
                4: "rejectFriendApply"
            }, m = "team", y = "friend", g = "msg", h = [m, y, g], v = {
                applyTeam: m,
                rejectTeamApply: m,
                teamInvite: m,
                rejectTeamInvite: m,
                addFriend: y,
                applyFriend: y,
                passFriendApply: y,
                rejectFriendApply: y,
                deleteFriend: y,
                deleteMsg: g
            };
            r.validTypes = Object.keys(d).concat(Object.keys(v)), r.validCategories = ["team", "friend"], r.isCustom = function(e) {
                return "custom" === e.type
            }, r.reverse = function(e) {
                var t = {
                    time: +e.time,
                    to: e.to,
                    type: f[e.type]
                };
                if (a(e.from) && (t.from = e.from), a(e.idServer) && (t.idServer = "" + e.idServer), a(e.deletedIdClient) && (t.deletedIdClient = e.deletedIdClient), a(e.deletedIdServer) && (t.deletedIdServer = "" + e.deletedIdServer), a(e.deletedMsgTime) && (t.deletedMsgTime = +e.deletedMsgTime), a(e.deletedMsgFromNick) && (t.deletedMsgFromNick = "" + e.deletedMsgFromNick), a(e.opeAccount) && (t.opeAccount = e.opeAccount), a(e.ps) && (t.ps = e.ps), e.attach = e.attach ? "" + e.attach : "", "customP2p" === t.type || "customTeam" === t.type) t.content = e.attach, a(e.apnsText) && (t.apnsText = e.apnsText), a(e.pushPayload) && (t.pushPayload = e.pushPayload), i.merge(t, {
                    sendToOnlineUsersOnly: s(e.sendToOnlineUsersOnly) || 0 === +e.sendToOnlineUsersOnly,
                    cc: s(e.cc) || 1 === +e.cc,
                    isPushable: s(e.isPushable) || 1 === +e.isPushable,
                    isUnreadable: s(e.isUnreadable) || 1 === +e.isUnreadable,
                    needPushNick: a(e.needPushNick) && 1 === +e.needPushNick
                }), t.scene = t.type.slice(6).toLowerCase(), t.type = "custom";
                else if ("deleteMsgP2p" === t.type || "deleteMsgTeam" === t.type) t.scene = t.type.slice(9).toLowerCase(), t.type = "deleteMsg";
                else {
                    if (e.attach) {
                        t.attach = {};
                        var n = JSON.parse(e.attach);
                        a(n.vt) ? (t.type = p[n.vt], delete t.attach) : (a(n.tinfo) && (t.attach.team = u.reverse(c.unserialize(n.tinfo, "team"))), a(n.tlist) && (t.attach.member = l.reverse(c.unserialize(n.tlist, "teamMember"))), a(n.attach) && (t.attach.custom = n.attach))
                    }
                    t.category = v[t.type], t.read = !1, t.state = "init"
                }
                return a(e.cc) && (t.cc = 1 === +e.cc), t.status = e.status || "success", a(e.filter) && (t.filter = e.filter), t
            }, r.reverseSysMsgs = function(e, t) {
                t = t || {};
                var n = t.mapper,
                    o = i.isFunction(n);
                return e.map(function(e) {
                    return e = r.reverse(e), o && (e = n(e)), e
                })
            }, r.completeUnread = function(e) {
                e = e || {}, h.forEach(function(t) {
                    delete e[t]
                });
                var t;
                return Object.keys(v).forEach(function(n) {
                    e[n] = e[n] || 0, e[n] < 0 && (e[n] = 0), t = v[n], e[t] = e[t] || 0, e[t] = e[t] + e[n]
                }), e.total = 0, h.forEach(function(t) {
                    e.total += e[t]
                }), e
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                switch (i.verifyOptions(e, "action"), e.action) {
                    case "create":
                        i.verifyOptions(e, "teamId", !1), i.verifyOptions(e, "type name"), i.verifyParamValid("type", e.type, y);
                        break;
                    case "update":
                        i.verifyOptions(e, "teamId"), i.verifyOptions(e, "type", !1)
                }
                s(e.teamId) && (t.teamId = e.teamId), s(e.type) && (t.type = p[e.type]), s(e.avatar) && (t.avatar = "" + e.avatar), s(e.name) && (t.name = "" + e.name), s(e.intro) && (t.intro = "" + e.intro), s(e.announcement) && (t.announcement = "" + e.announcement), d.forEach(t.setMode.bind(t, e)), s(e.custom) && (t.custom = "" + e.custom)
            }
            function o(e, t) {
                t += "Mode", s(e[t]) && (e[t] = l[t][e[t]])
            }
            var i = n(1),
                s = i.notundef,
                a = i.fillPropertyWithDefault,
                c = Object.keys,
                u = {},
                l = {},
                d = [],
                f = {},
                p = {
                    normal: 0,
                    advanced: 1
                },
                m = {
                    0: "normal",
                    1: "advanced"
                },
                y = c(p),
                g = u.joinMode = {
                    noVerify: 0,
                    needVerify: 1,
                    rejectAll: 2
                };
            l.joinMode = {
                0: "noVerify",
                1: "needVerify",
                2: "rejectAll"
            }, d.push("join"), f.joinMode = c(g);
            var h = u.beInviteMode = {
                needVerify: 0,
                noVerify: 1
            };
            l.beInviteMode = {
                0: "needVerify",
                1: "noVerify"
            }, d.push("beInvite"), f.beInviteMode = c(h);
            var v = u.inviteMode = {
                manager: 0,
                all: 1
            };
            l.inviteMode = {
                0: "manager",
                1: "all"
            }, d.push("invite"), f.inviteMode = c(v);
            var b = u.updateTeamMode = {
                manager: 0,
                all: 1
            };
            l.updateTeamMode = {
                0: "manager",
                1: "all"
            }, d.push("updateTeam"), f.updateTeamMode = c(b);
            var M = u.updateCustomMode = {
                manager: 0,
                all: 1
            };
            l.updateCustomMode = {
                0: "manager",
                1: "all"
            }, d.push("updateCustom"), f.updateCustomMode = c(M);
            var T = r.prototype;
            T.setMode = function(e, t) {
                var n = this;
                t += "Mode", s(e[t]) && (i.verifyParamValid(t, e[t], f[t]), n[t] = u[t][e[t]])
            }, r.reverse = function(e, t) {
                var n = i.copy(e);
                return s(n.teamId) && (n.teamId = "" + n.teamId), s(n.type) && (n.type = m[n.type]), s(n.level) && (n.level = +n.level), s(n.valid) && (n.valid = 1 === +n.valid), s(n.memberNum) && (n.memberNum = +n.memberNum), s(n.memberUpdateTime) && (n.memberUpdateTime = +n.memberUpdateTime), s(n.createTime) && (n.createTime = +n.createTime), s(n.updateTime) && (n.updateTime = +n.updateTime), s(n.validToCurrentUser) && (n.validToCurrentUser = "1" === n.validToCurrentUser), s(n.mute) && (n.mute = "1" === n.mute), d.forEach(o.bind(null, n)), delete n.bits, t || r.fillProperties(n), n
            }, r.fillProperties = function(e) {
                var t = a(e, "beInviteMode", "needVerify"),
                    n = a(e, "inviteMode", "manager"),
                    r = a(e, "updateTeamMode", "manager"),
                    o = a(e, "updateCustomMode", "manager"),
                    i = a(e, "avatar", "");
                return t || n || r || o || i
            }, e.exports = r
        }, , , function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.mode,
                    n = p,
                    r = f.getGlobal();
                return r.FormData || (t = "iframe"), "iframe" === t && (n = e.upload ? m : y), new n(e)
            }
            function o(e) {
                var t = e.upload = "multipart/form-data" === (e.headers || f.o)["Content-Type"],
                    n = !1;
                try {
                    var o = (location.protocol + "//" + location.host).toLowerCase(),
                        i = f.url2origin(e.url);
                    n = o !== i
                } catch (s) {}
                return e.cors = n, t || n || e.mode ? r(e) : new p(e)
            }
            function i(e) {
                var t = g[e];
                t && (t.req.destroy(), delete g[e])
            }
            function s(e, t) {
                t = {
                    data: t
                };
                var n = e.result.headers;
                return n && (t.headers = e.req.header(n)), t
            }
            function a(e, t, n) {
                var r = g[e];
                if (r) {
                    "onload" === t && r.result && (n = s(r, n)), i(e);
                    var o = {
                        type: t,
                        result: n
                    };
                    h(o), o.stopped || r[t](o.result)
                }
            }
            function c(e, t) {
                a(e, "onload", t)
            }
            function u(e, t) {
                a(e, "onerror", t)
            }
            function l(e, t) {
                var n = f.genUrlSep(e);
                return t = t || "", f.isObject(t) && (t = f.object2query(t)), t && (e += n + t), e
            }
            function d(e, t) {
                t = t || {};
                var n = f.uniqueID(),
                    r = {
                        result: t.result,
                        onload: t.onload || f.f,
                        onerror: t.onerror || f.f
                    };
                g[n] = r, t.onload = c.bind(null, n), t.onerror = u.bind(null, n), t.query && (e = l(e, t.query));
                var i = t.method || "";
                return i && !/get/i.test(i) || !t.data || (e = l(e, t.data), t.data = null), t.url = e, r.req = o(t), n
            }
            var f = n(10),
                p = n(93),
                m = n(92),
                y = n(91),
                g = {},
                h = f.f;
            d.filter = function(e) {
                f.isFunction(e) && (h = e)
            }, d.abort = function(e) {
                var t = g[e];
                t && t.req.abort()
            }, e.exports = d
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                e.onload && t.once("load", e.onload), e.onerror && t.once("error", e.onerror), e.onbeforesend && t.once("beforesend", e.onbeforesend), e.onaftersend && t.once("aftersend", e.onaftersend), e = t.options = o.fetch({
                    method: "GET",
                    url: "",
                    sync: !1,
                    data: null,
                    headers: {},
                    cookie: !1,
                    timeout: 6e4,
                    type: "text",
                    form: null,
                    input: null,
                    putFileAtEnd: !1,
                    proxyUrl: ""
                }, e);
                var n = e.headers,
                    r = "Content-Type";
                o.notexist(n[r]) && (n[r] = "application/x-www-form-urlencoded"), t.send()
            }
            var o = n(10),
                i = o.f,
                s = n(107),
                a = r.prototype = Object.create(s.prototype);
            a.send = function() {
                var e = this,
                    t = e.options;
                setTimeout(function() {
                    try {
                        try {
                            e.emit("beforesend", t)
                        } catch (n) {
                            console.error("ignore error ajax beforesend,", n)
                        }
                        e.doSend()
                    } catch (n) {
                        console.error("ignore error server error,", n), e.onError("serverError", "请求失败:" + n.message)
                    }
                }, 0)
            }, a.doSend = i, a.afterSend = function() {
                var e = this;
                setTimeout(function() {
                    e.emit("aftersend", e.options)
                }, 0)
            }, a.onLoad = function(e) {
                var t = this,
                    n = t.options,
                    r = e.status,
                    o = e.result;
                if (0 !== ("" + r).indexOf("2")) return void t.onError("serverError", "服务器返回异常状态", {
                    status: r,
                    result: o
                });
                if ("json" === n.type) try {
                    o = JSON.parse(o)
                } catch (i) {
                    return console.error("ignore error parse json,", i), void t.onError("parseError", o)
                }
                t.emit("load", o)
            }, a.onError = function(e, t, n) {
                var r = o.isObject(n) ? n : {};
                r.code = e || "error", r.message = t || "发生错误", this.emit("error", r)
            }, a.onTimeout = function() {
                this.onError("timeout", "请求超时")
            }, a.abort = function() {
                this.onError("abort", "客户端中止")
            }, a.header = function(e) {
                var t = this;
                if (!o.isArray(e)) return t.getResponseHeader(e || "");
                var n = {};
                return e.forEach(function(e) {
                    n[e] = t.header(e)
                }), n
            }, a.getResponseHeader = i, a.destroy = i, e.exports = r
        }, function(e, t) {
            function n(e, t) {
                for (var n = t.split("."); n.length;) {
                    var r = n.shift(),
                        o = !1;
                    if ("?" == r[r.length - 1] && (r = r.slice(0, -1), o = !0), e = e[r], !e && o) return e
                }
                return e
            }
            e.exports = n
        }, , , function(e, t, n) {
            "use strict";

            function r(e) {
                switch (s.notundef(e.type) ? s.verifyFileType(e.type) : e.type = "file", s.verifyOptions(e, "file"), s.verifyOptions(e.file, "url ext size md5", !0, "file."), e.type) {
                    case "image":
                        c.verifyFile(e.file);
                        break;
                    case "audio":
                        u.verifyFile(e.file);
                        break;
                    case "video":
                        l.verifyFile(e.file)
                }
                i.call(this, e), this.attach = JSON.stringify(e.file)
            }
            var o = n(50),
                i = n(19),
                s = n(1),
                a = n(3);
            r.prototype = Object.create(i.prototype), r.reverse = function(e) {
                var t = i.reverse(e);
                e.attach = e.attach ? "" + e.attach : "", t.file = e.attach ? JSON.parse(e.attach) : {}, "audio" === t.type && (t.file.mp3Url = t.file.url + "?audioTrans&type=mp3");
                var n = t.file.url,
                    r = (0, o.url2object)(n),
                    s = r.hostname,
                    c = a.downloadHost;
                if (s === c) {
                    var u = r.path,
                        l = u.indexOf("/");
                    if (l !== -1) {
                        var d = u.substring(0, l),
                            f = u.substring(l + 1);
                        t.file.url = (0, o.object2url)({
                            protocol: r.protocol,
                            hostname: d + ".nosdn.127.net",
                            path: f,
                            query: r.query
                        })
                    }
                } else s.indexOf(c) !== -1 && (t.file.url = n.replace(c, "nosdn.127.net"));
                return e.enabledHttpsForMessage && (t.file.url = n.replace("http", "https")), t
            }, e.exports = r;
            var c = n(162),
                u = n(159),
                l = n(168)
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                o.merge(this, e), o.notundef(this.gender) && (o.verifyParamValid("gender", this.gender, r.validGenders), this.gender = i[this.gender]), o.notundef(this.email) && "" !== this.email && o.verifyEmail("email", this.email), o.notundef(this.birth) && "" !== this.birth && o.verifyBirth("birth", this.birth), o.notundef(this.tel) && "" !== this.tel && o.verifyTel("tel", this.tel)
            }
            var o = n(1),
                i = {
                    unknown: 0,
                    male: 1,
                    female: 2
                },
                s = {
                    0: "unknown",
                    1: "male",
                    2: "female"
                };
            r.reverse = function(e) {
                var t = o.filterObj(e, "account nick avatar sign gender email birth tel custom createTime updateTime");
                return o.notundef(t.gender) && (t.gender = s[t.gender]), o.notundef(t.createTime) && (t.createTime = +t.createTime), o.notundef(t.updateTime) && (t.updateTime = +t.updateTime), t
            }, r.reverseUsers = function(e) {
                return e.map(function(e) {
                    return r.reverse(e)
                })
            }, r.validGenders = Object.keys(i), e.exports = r
        }, , , , , , , , , function(e, t) {
            "use strict";
            t.__esModule = !0, t["default"] = {
                genUrlSep: function(e) {
                    e = "" + e;
                    var t = e.indexOf("?") === -1 ? "?imageView&" : "&";
                    return t
                },
                url2object: function(e) {
                    e = e || "";
                    var t = e.indexOf("https") >= 0 ? "https://" : "http://",
                        n = e.replace(t, "");
                    n.indexOf("?") >= 0 && (n = n.substring(0, n.indexOf("?")));
                    var r = n.split("/");
                    n = r[0];
                    var o = "";
                    if (r.length > 0 && (o = r.slice(1).join("/")), e.indexOf("?") === -1) return {
                        protocol: t,
                        hostname: n,
                        path: o,
                        query: {}
                    };
                    var i = e.substr(e.indexOf("?") + 1),
                        s = i.split("&"),
                        a = {};
                    return s.forEach(function(e) {
                        if (e.indexOf("=") > 0) {
                            var t = e.split("=");
                            a[t[0]] = decodeURIComponent(t[1])
                        } else a[e] = ""
                    }), {
                        protocol: t,
                        hostname: n,
                        path: o,
                        query: a
                    }
                },
                object2url: function(e) {
                    var t = e.protocol,
                        n = e.hostname,
                        r = e.path,
                        o = e.query;
                    t = t || "http://", n = n || "", r && (n = n + "/" + r), o = o || {};
                    var i = [];
                    for (var s in o)"imageView" !== s && i.push(s + "=" + encodeURIComponent(o[s]));
                    return i.length > 0 ? "" + t + n + "?imageView&" + i.join("&") : "" + t + n
                }
            }, e.exports = t["default"]
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                o.verifyOptions(e, "type"), o.verifyParamValid("type", e.type, r.validTypes), o.merge(this, e), this.type = i[e.type]
            }
            var o = n(1),
                i = {
                    stripmeta: 0,
                    blur: 2,
                    quality: 3,
                    crop: 4,
                    rotate: 5,
                    thumbnail: 7,
                    interlace: 9
                },
                s = {
                    0: "stripmeta",
                    1: "type",
                    2: "blur",
                    3: "quality",
                    4: "crop",
                    5: "rotate",
                    6: "pixel",
                    7: "thumbnail",
                    8: "watermark",
                    9: "interlace",
                    10: "tmp"
                };
            r.validTypes = Object.keys(i), r.reverse = function(e) {
                var t = o.copy(e);
                return t.type = s[t.type], t
            }, r.reverseImageOps = function(e) {
                return e.map(function(e) {
                    return r.reverse(e)
                })
            }, e.exports = r
        }, function(e, t) {
            "use strict";
            var n = {
                    link: {
                        id: 1,
                        heartbeat: 2
                    },
                    misc: {
                        id: 6,
                        getSimpleNosToken: 1,
                        getNosToken: 2,
                        notifyUploadLog: 3,
                        uploadSdkLogUrl: 4,
                        audioToText: 5,
                        processImage: 6
                    }
                },
                r = {
                    heartbeat: {
                        sid: n.link.id,
                        cid: n.link.heartbeat
                    },
                    getSimpleNosToken: {
                        sid: n.misc.id,
                        cid: n.misc.getSimpleNosToken,
                        params: [{
                            type: "int",
                            name: "num"
                        }]
                    },
                    getNosToken: {
                        sid: n.misc.id,
                        cid: n.misc.getNosToken,
                        params: [{
                            type: "String",
                            name: "responseBody"
                        }]
                    },
                    uploadSdkLogUrl: {
                        sid: n.misc.id,
                        cid: n.misc.uploadSdkLogUrl,
                        params: [{
                            type: "string",
                            name: "url"
                        }]
                    },
                    audioToText: {
                        sid: n.misc.id,
                        cid: n.misc.audioToText,
                        params: [{
                            type: "Property",
                            name: "audioToText"
                        }]
                    },
                    processImage: {
                        sid: n.misc.id,
                        cid: n.misc.processImage,
                        params: [{
                            type: "String",
                            name: "url"
                        }, {
                            type: "PropertyArray",
                            name: "imageOps",
                            entity: "imageOp"
                        }]
                    }
                },
                o = {
                    "1_2": {
                        service: "link",
                        cmd: "heartbeat"
                    },
                    "6_1": {
                        service: "misc",
                        cmd: "getSimpleNosToken",
                        response: [{
                            type: "PropertyArray",
                            name: "nosTokens",
                            entity: "nosToken"
                        }]
                    },
                    "6_2": {
                        service: "misc",
                        cmd: "getNosToken",
                        response: [{
                            type: "Property",
                            name: "nosToken"
                        }]
                    },
                    "6_3": {
                        service: "misc",
                        cmd: "notifyUploadLog"
                    },
                    "6_5": {
                        service: "misc",
                        cmd: "audioToText",
                        response: [{
                            type: "String",
                            name: "text"
                        }]
                    },
                    "6_6": {
                        service: "misc",
                        cmd: "processImage",
                        response: [{
                            type: "String",
                            name: "url"
                        }]
                    }
                };
            e.exports = {
                idMap: n,
                cmdConfig: r,
                packetConfig: o
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(10),
                o = r.getGlobal(),
                i = {},
                s = o.name || "_parent",
                a = [],
                c = "MSG|",
                u = [];
            i.addMsgListener = function(e) {
                a.push(e)
            };
            var l = function(e) {
                    for (var t = 0, n = a.length; t < n; t++) try {
                        a[t].call(null, e)
                    } catch (r) {}
                },
                d = function() {
                    var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
                    return function(t) {
                        return t = t || "", e.test(t) ? RegExp.$1 : "*"
                    }
                }(),
                f = function() {
                    var e = unescape(o.name || "").trim();
                    if (e && 0 === e.indexOf(c)) {
                        o.name = "";
                        var t = r.string2object(e.replace(c, ""), "|"),
                            n = (t.origin || "").toLowerCase();
                        n && "*" !== n && 0 !== location.href.toLowerCase().indexOf(n) || l({
                            data: JSON.parse(t.data || "null"),
                            source: o.frames[t.self] || t.self,
                            origin: d(t.ref || document.referrer)
                        })
                    }
                },
                p = function() {
                    var e, t = function(e, t) {
                        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
                        return !1
                    };
                    return function() {
                        if (u.length) {
                            e = [];
                            for (var n, r = u.length - 1; r >= 0; r--) n = u[r], t(e, n.w) || (e.push(n.w), u.splice(r, 1), n.w.name = n.d);
                            e = null
                        }
                    }
                }(),
                m = i.startTimer = function() {
                    var e = !1;
                    return function() {
                        e || (e = !0, o.postMessage || (setInterval(p, 100), setInterval(f, 20)))
                    }
                }();
            i.postMessage = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (r.fillUndef(t, {
                        origin: "*",
                        source: s
                    }), o.postMessage) {
                    var n = t.data;
                    o.FormData || (n = JSON.stringify(n)), e.postMessage(n, t.origin)
                } else {
                    if (m(), r.isObject(t)) {
                        var i = {};
                        i.origin = t.origin || "", i.ref = location.href, i.self = t.source, i.data = JSON.stringify(t.data), t = c + r.object2string(i, "|", !0)
                    }
                    u.unshift({
                        w: e,
                        d: escape(t)
                    })
                }
            }, e.exports = i
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                o = {};
            o.fromDataURL = r.blobFromDataURL, e.exports = o
        }, function(e, t) {
            function n(e) {
                var t = r.call(e);
                return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
            }
            e.exports = n;
            var r = Object.prototype.toString
        }, function(e, t) {
            e.exports = function n(e, t) {
                "use strict";
                var r, o, i = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
                    s = /(^[ ]*|[ ]*$)/g,
                    a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
                    c = /^0x[0-9a-f]+$/i,
                    u = /^0/,
                    l = function(e) {
                        return n.insensitive && ("" + e).toLowerCase() || "" + e
                    },
                    d = l(e).replace(s, "") || "",
                    f = l(t).replace(s, "") || "",
                    p = d.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                    m = f.replace(i, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
                    y = parseInt(d.match(c), 16) || 1 !== p.length && d.match(a) && Date.parse(d),
                    g = parseInt(f.match(c), 16) || y && f.match(a) && Date.parse(f) || null;
                if (g) {
                    if (y < g) return -1;
                    if (y > g) return 1
                }
                for (var h = 0, v = Math.max(p.length, m.length); h < v; h++) {
                    if (r = !(p[h] || "").match(u) && parseFloat(p[h]) || p[h] || 0, o = !(m[h] || "").match(u) && parseFloat(m[h]) || m[h] || 0, isNaN(r) !== isNaN(o)) return isNaN(r) ? 1 : -1;
                    if (typeof r != typeof o && (r += "", o += ""), r < o) return -1;
                    if (r > o) return 1
                }
                return 0
            }
        }, function(e, t, n) {
            var r;
            (function(o) {
                !
                    function(i, s) {
                        "use strict";

                        function a() {
                            return "undefined" != typeof i ? i : "undefined" != typeof self ? self : "undefined" != typeof o ? o : {}
                        }
                        i = a();
                        var c, u = i.IDBKeyRange || i.webkitIDBKeyRange,
                            l = {
                                readonly: "readonly",
                                readwrite: "readwrite"
                            },
                            d = Object.prototype.hasOwnProperty,
                            f = function() {
                                if (!c && (c = i.indexedDB || i.webkitIndexedDB || i.mozIndexedDB || i.oIndexedDB || i.msIndexedDB || (null === i.indexedDB && i.shimIndexedDB ? i.shimIndexedDB : s), !c)) throw "IndexedDB required";
                                return c
                            },
                            p = function(e) {
                                return e
                            },
                            m = function(e) {
                                return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
                            },
                            y = function(e) {
                                return "function" == typeof e
                            },
                            g = function(e) {
                                return "number" === m(e)
                            },
                            h = function(e) {
                                return "array" === m(e)
                            },
                            v = function(e) {
                                return e === s
                            },
                            b = function(e, t) {
                                var n = this,
                                    r = !1;
                                this.name = t, this.getIndexedDB = function() {
                                    return e
                                }, this.add = function(t) {
                                    if (r) throw "Database has been closed";
                                    for (var o = [], i = 0, s = 0; s < arguments.length - 1; s++) if (Array.isArray(arguments[s + 1])) for (var a = 0; a < arguments[s + 1].length; a++) o[i] = arguments[s + 1][a], i++;
                                    else o[i] = arguments[s + 1], i++;
                                    var c = e.transaction(t, l.readwrite),
                                        u = c.objectStore(t);
                                    return new Promise(function(e, t) {
                                        o.forEach(function(e) {
                                            var t;
                                            if (e.item && e.key) {
                                                var n = e.key;
                                                e = e.item, t = u.add(e, n)
                                            } else t = u.add(e);
                                            t.onsuccess = function(t) {
                                                var n = t.target,
                                                    r = n.source.keyPath;
                                                null === r && (r = "__id__"), Object.defineProperty(e, r, {
                                                    value: n.result,
                                                    enumerable: !0
                                                })
                                            }
                                        }), c.oncomplete = function() {
                                            e(o, n)
                                        }, c.onerror = function(e) {
                                            e.preventDefault(), t(e)
                                        }, c.onabort = function(e) {
                                            t(e)
                                        }
                                    })
                                }, this.updateAndDelete = function(t, n, o) {
                                    if (r) throw "Database has been closed";
                                    var i = e.transaction(t, l.readwrite),
                                        s = i.objectStore(t),
                                        a = s.keyPath;
                                    return new Promise(function(e, t) {
                                        n.forEach(function(e) {
                                            if (e.item && e.key) {
                                                var t = e.key;
                                                e = e.item, s.put(e, t)
                                            } else s.put(e)
                                        }), o.forEach(function(e) {
                                            s["delete"](e[a])
                                        }), i.oncomplete = function() {
                                            e([n, o])
                                        }, i.onerror = function(e) {
                                            t(e)
                                        }
                                    })
                                }, this.update = function(t) {
                                    if (r) throw "Database has been closed";
                                    for (var o, i = [], s = 1; s < arguments.length; s++) o = arguments[s], Array.isArray(o) ? i = i.concat(o) : i.push(o);
                                    var a = e.transaction(t, l.readwrite),
                                        c = a.objectStore(t);
                                    c.keyPath;
                                    return new Promise(function(e, t) {
                                        i.forEach(function(e) {
                                            var t;
                                            if (e.item && e.key) {
                                                var n = e.key;
                                                e = e.item, t = c.put(e, n)
                                            } else t = c.put(e);
                                            t.onsuccess = function(e) {}, t.onerror = function(e) {}
                                        }), a.oncomplete = function() {
                                            e(i, n)
                                        }, a.onerror = function(e) {
                                            t(e)
                                        }, a.onabort = function(e) {
                                            t(e)
                                        }
                                    })
                                }, this.remove = function(t, n) {
                                    if (r) throw "Database has been closed";
                                    var o = e.transaction(t, l.readwrite),
                                        i = o.objectStore(t);
                                    return new Promise(function(e, t) {
                                        Array.isArray(n) || (n = [n]), n.forEach(function(e) {
                                            i["delete"](e)
                                        }), o.oncomplete = function() {
                                            e(n)
                                        }, o.onerror = function(e) {
                                            t(e)
                                        }, o.onabort = function(e) {
                                            t(e)
                                        }
                                    })
                                }, this.clear = function(t) {
                                    if (r) throw "Database has been closed";
                                    var n = e.transaction(t, l.readwrite),
                                        o = n.objectStore(t);
                                    o.clear();
                                    return new Promise(function(e, t) {
                                        n.oncomplete = function() {
                                            e()
                                        }, n.onerror = function(e) {
                                            t(e)
                                        }
                                    })
                                }, this.close = function() {
                                    r || (e.close(), r = !0, delete k[t])
                                }, this.get = function(t, n) {
                                    if (r) throw "Database has been closed";
                                    var o = e.transaction(t),
                                        i = o.objectStore(t),
                                        s = i.get(n);
                                    return new Promise(function(e, t) {
                                        s.onsuccess = function(t) {
                                            e(t.target.result)
                                        }, o.onerror = function(e) {
                                            t(e)
                                        }
                                    })
                                }, this.query = function(t, n) {
                                    if (r) throw "Database has been closed";
                                    return new M(t, e, n)
                                }, this.count = function(t, n) {
                                    if (r) throw "Database has been closed";
                                    var o = e.transaction(t);
                                    o.objectStore(t)
                                };
                                for (var o = 0, i = e.objectStoreNames.length; o < i; o++)!
                                    function(e) {
                                        n[e] = {};
                                        for (var t in n) d.call(n, t) && "close" !== t && (n[e][t] = function(t) {
                                            return function() {
                                                var r = [e].concat([].slice.call(arguments, 0));
                                                return n[t].apply(n, r)
                                            }
                                        }(t))
                                    }(e.objectStoreNames[o])
                            },
                            M = function(e, t, n) {
                                var r = this,
                                    o = !1,
                                    i = !1,
                                    a = function(r, a, c, d, f, p, m) {
                                        return new Promise(function(g, h) {
                                            var v = o || i ? l.readwrite : l.readonly,
                                                b = t.transaction(e, v),
                                                M = b.objectStore(e),
                                                T = n ? M.index(n) : M,
                                                S = r ? u[r].apply(null, a) : null,
                                                k = [],
                                                w = [S],
                                                O = 0;
                                            f = f ? f : null, p = p ? p : [], "count" !== c && w.push(d || "next");
                                            var C = !! o && Object.keys(o),
                                                I = function(e) {
                                                    for (var t = 0; t < C.length; t++) {
                                                        var n = C[t],
                                                            r = o[n];
                                                        r instanceof Function && (r = r(e)), e[n] = r
                                                    }
                                                    return e
                                                };
                                            T[c].apply(T, w).onsuccess = function(e) {
                                                var t = e.target.result;
                                                if ("number" == typeof t) k = t;
                                                else if (t) if (null !== f && f[0] > O) O = f[0], t.advance(f[0]);
                                                else if (null !== f && O >= f[0] + f[1]);
                                                else {
                                                    var n = !0,
                                                        r = "value" in t ? t.value : t.key;
                                                    p.forEach(function(e) {
                                                        e && e.length && (2 === e.length ? n = n && r[e[0]] === e[1] : y(e[0]) && (n = n && e[0].apply(s, [r])))
                                                    }), n && (O++, k.push(m(r)), i ? t["delete"]() : o && (r = I(r), t.update(r))), t["continue"]()
                                                }
                                            }, b.oncomplete = function() {
                                                g(k)
                                            }, b.onerror = function(e) {
                                                h(e)
                                            }, b.onabort = function(e) {
                                                h(e)
                                            }
                                        })
                                    },
                                    c = function(e, t) {
                                        var n = "next",
                                            r = "openCursor",
                                            s = [],
                                            c = null,
                                            u = p,
                                            l = !1,
                                            d = function() {
                                                return a(e, t, r, l ? n + "unique" : n, c, s, u)
                                            },
                                            f = function() {
                                                return n = null, r = "count", {
                                                    execute: d
                                                }
                                            },
                                            m = function() {
                                                return c = h(arguments[0]) ? arguments[0] : Array.prototype.slice.call(arguments, 0, 2), 1 == c.length && c.unshift(0), g(c[1]) || (c = null), {
                                                    execute: d,
                                                    count: f,
                                                    keys: b,
                                                    filter: M,
                                                    asc: T,
                                                    desc: S,
                                                    distinct: k,
                                                    modify: w,
                                                    limit: m,
                                                    map: O,
                                                    remove: C
                                                }
                                            },
                                            b = function(e) {
                                                return e = !! v(e) || !! e, e && (r = "openKeyCursor"), {
                                                    execute: d,
                                                    keys: b,
                                                    filter: M,
                                                    asc: T,
                                                    desc: S,
                                                    distinct: k,
                                                    modify: w,
                                                    limit: m,
                                                    map: O,
                                                    remove: C
                                                }
                                            },
                                            M = function() {
                                                return s.push(Array.prototype.slice.call(arguments, 0, 2)), {
                                                    execute: d,
                                                    count: f,
                                                    keys: b,
                                                    filter: M,
                                                    asc: T,
                                                    desc: S,
                                                    distinct: k,
                                                    modify: w,
                                                    limit: m,
                                                    map: O,
                                                    remove: C
                                                }
                                            },
                                            T = function(e) {
                                                return e = !! v(e) || !! e, n = e ? "next" : "prev", {
                                                    execute: d,
                                                    count: f,
                                                    keys: b,
                                                    filter: M,
                                                    asc: T,
                                                    desc: S,
                                                    distinct: k,
                                                    modify: w,
                                                    limit: m,
                                                    map: O,
                                                    remove: C
                                                }
                                            },
                                            S = function(e) {
                                                return e = !! v(e) || !! e, n = e ? "prev" : "next", {
                                                    execute: d,
                                                    count: f,
                                                    keys: b,
                                                    filter: M,
                                                    asc: T,
                                                    desc: S,
                                                    distinct: k,
                                                    modify: w,
                                                    limit: m,
                                                    map: O,
                                                    remove: C
                                                }
                                            },
                                            k = function(e) {
                                                return e = !! v(e) || !! e, l = e, {
                                                    execute: d,
                                                    count: f,
                                                    keys: b,
                                                    filter: M,
                                                    asc: T,
                                                    desc: S,
                                                    distinct: k,
                                                    modify: w,
                                                    limit: m,
                                                    map: O,
                                                    remove: C
                                                }
                                            },
                                            w = function(e) {
                                                return o = e, {
                                                    execute: d,
                                                    count: f,
                                                    keys: b,
                                                    filter: M,
                                                    asc: T,
                                                    desc: S,
                                                    distinct: k,
                                                    modify: w,
                                                    limit: m,
                                                    map: O,
                                                    remove: C
                                                }
                                            },
                                            O = function(e) {
                                                return y(e) && (u = e), {
                                                    execute: d,
                                                    count: f,
                                                    keys: b,
                                                    filter: M,
                                                    asc: T,
                                                    desc: S,
                                                    distinct: k,
                                                    modify: w,
                                                    limit: m,
                                                    map: O,
                                                    remove: C
                                                }
                                            },
                                            C = function(e) {
                                                return e = !! v(e) || !! e, i = e, {
                                                    execute: d,
                                                    count: f,
                                                    keys: b,
                                                    filter: M,
                                                    asc: T,
                                                    desc: S,
                                                    distinct: k,
                                                    modify: w,
                                                    limit: m,
                                                    map: O,
                                                    remove: C
                                                }
                                            };
                                        return {
                                            execute: d,
                                            count: f,
                                            keys: b,
                                            filter: M,
                                            asc: T,
                                            desc: S,
                                            distinct: k,
                                            modify: w,
                                            limit: m,
                                            map: O,
                                            remove: C
                                        }
                                    };
                                "only bound upperBound lowerBound".split(" ").forEach(function(e) {
                                    r[e] = function() {
                                        return new c(e, arguments)
                                    }
                                }), this.filter = function() {
                                    var e = new c(null, null);
                                    return e.filter.apply(e, arguments)
                                }, this.all = function() {
                                    return this.filter()
                                }
                            },
                            T = function(e, t, n) {
                                "function" == typeof t && (t = t());
                                for (var r in t) {
                                    var o, i = t[r];
                                    o = !d.call(t, r) || n.objectStoreNames.contains(r) ? e.currentTarget.transaction.objectStore(r) : n.createObjectStore(r, i.key);
                                    for (var s in i.indexes) {
                                        var a = i.indexes[s];
                                        try {
                                            o.index(s)
                                        } catch (e) {
                                            o.createIndex(s, a.key || s, Object.keys(a).length ? a : {
                                                unique: !1
                                            })
                                        }
                                    }
                                }
                            },
                            S = function(e, t, n, r) {
                                var o = e.target.result,
                                    i = new b(o, t);
                                return k[t] = o, Promise.resolve(i)
                            },
                            k = {},
                            w = {
                                version: "0.10.2",
                                open: function(e) {
                                    var t;
                                    return new Promise(function(n, r) {
                                        if (k[e.server]) S({
                                            target: {
                                                result: k[e.server]
                                            }
                                        }, e.server, e.version, e.schema).then(n, r);
                                        else {
                                            try {
                                                t = f().open(e.server, e.version)
                                            } catch (o) {
                                                r(o)
                                            }
                                            t.onsuccess = function(t) {
                                                S(t, e.server, e.version, e.schema).then(n, r)
                                            }, t.onupgradeneeded = function(t) {
                                                T(t, e.schema, t.target.result)
                                            }, t.onerror = function(e) {
                                                r(e)
                                            }
                                        }
                                    })
                                },
                                remove: function(e) {
                                    return new Promise(function(t, n) {
                                        if (!e) return t();
                                        typeof e === b && (e = e.name);
                                        var r;
                                        "string" == typeof e && (r = k[e]), r && "function" == typeof r.close && r.close();
                                        var o;
                                        try {
                                            o = f().deleteDatabase(e)
                                        } catch (i) {
                                            n(i)
                                        }
                                        o.onsuccess = function(n) {
                                            delete k[e], t(e)
                                        }, o.onerror = function(e) {
                                            n(e)
                                        }, o.onblocked = function(e) {
                                            n(e)
                                        }
                                    })
                                }
                            };
                        "undefined" != typeof e && "undefined" != typeof e.exports ? e.exports = w : (r = function() {
                            return w
                        }.call(t, n, t, e), !(r !== s && (e.exports = r)))
                    }(window)
            }).call(t, function() {
                return this
            }())
        }, , function(e, t, n) {
            "use strict";
            var r = n(12),
                o = n(109),
                i = n(28),
                s = n(56),
                a = n(37),
                c = n(57),
                u = n(1),
                l = n(66),
                d = n(54),
                f = n(25),
                p = n(2).Promise;
            e.exports = function(e) {
                u.merge(e, {
                    platform: r,
                    xhr: o,
                    io: i,
                    naturalSort: s,
                    deepAccess: a,
                    db: c,
                    util: u,
                    support: l,
                    blob: d,
                    ajax: f,
                    Promise: p
                })
            }
        }, , function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                i(e.shouldPushNotificationWhenPCOnline) && (t.open = e.shouldPushNotificationWhenPCOnline ? 2 : 1)
            }
            var o = n(1),
                i = o.notundef;
            r.getDefaultConfig = function() {
                return {
                    shouldPushNotificationWhenPCOnline: !0
                }
            }, r.reverse = function(e) {
                var t = {
                    shouldPushNotificationWhenPCOnline: 1 !== +e.open
                };
                return t
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                o = n(52),
                i = r.merge({}, o.idMap, {
                    auth: {
                        id: 2,
                        login: 3,
                        kicked: 5,
                        logout: 6,
                        multiPortLogin: 7,
                        kick: 8
                    },
                    user: {
                        id: 3,
                        markInBlacklist: 3,
                        getBlacklist: 4,
                        markInMutelist: 5,
                        getMutelist: 6,
                        getRelations: 8,
                        getUsers: 7,
                        updateMyInfo: 10,
                        updateDonnop: 15,
                        syncMyInfo: 109,
                        syncUpdateMyInfo: 110
                    },
                    notify: {
                        id: 4,
                        markRead: 3,
                        syncOfflineMsgs: 4,
                        batchMarkRead: 5,
                        syncOfflineSysMsgs: 6,
                        syncRoamingMsgs: 9,
                        syncMsgReceipts: 12,
                        syncRobots: 15,
                        syncBroadcastMsgs: 16
                    },
                    sync: {
                        id: 5,
                        sync: 1,
                        syncTeamMembers: 2
                    },
                    msg: {
                        id: 7,
                        sendMsg: 1,
                        msg: 2,
                        sysMsg: 3,
                        getHistoryMsgs: 6,
                        sendCustomSysMsg: 7,
                        searchHistoryMsgs: 8,
                        deleteSessions: 9,
                        getSessions: 10,
                        syncSendMsg: 101,
                        sendMsgReceipt: 11,
                        msgReceipt: 12,
                        deleteMsg: 13,
                        msgDeleted: 14,
                        markSessionAck: 16,
                        broadcastMsg: 17
                    },
                    team: {
                        id: 8,
                        createTeam: 1,
                        sendTeamMsg: 2,
                        teamMsg: 3,
                        teamMsgs: 4,
                        addTeamMembers: 5,
                        removeTeamMembers: 6,
                        updateTeam: 7,
                        leaveTeam: 8,
                        getTeam: 9,
                        getTeams: 10,
                        getTeamMembers: 11,
                        dismissTeam: 12,
                        applyTeam: 13,
                        passTeamApply: 14,
                        rejectTeamApply: 15,
                        addTeamManagers: 16,
                        removeTeamManagers: 17,
                        transferTeam: 18,
                        updateInfoInTeam: 19,
                        updateNickInTeam: 20,
                        acceptTeamInvite: 21,
                        rejectTeamInvite: 22,
                        getTeamHistoryMsgs: 23,
                        searchTeamHistoryMsgs: 24,
                        updateMuteStateInTeam: 25,
                        getMyTeamMembers: 26,
                        getMutedTeamMembers: 27,
                        syncMyTeamMembers: 126,
                        syncTeams: 109,
                        syncTeamMembers: 111,
                        syncCreateTeam: 101,
                        syncSendTeamMsg: 102,
                        syncUpdateTeamMember: 119
                    },
                    friend: {
                        id: 12,
                        friendRequest: 1,
                        syncFriendRequest: 101,
                        deleteFriend: 2,
                        syncDeleteFriend: 102,
                        updateFriend: 3,
                        syncUpdateFriend: 103,
                        getFriends: 4
                    },
                    chatroom: {
                        id: 13,
                        getChatroomAddress: 1
                    },
                    filter: {
                        id: 101,
                        sendFilterMsg: 1,
                        filterMsg: 2,
                        filterSysMsg: 3,
                        sendFilterCustomSysMsg: 7
                    },
                    eventService: {
                        id: 14,
                        publishEvent: 1,
                        pushEvent: 2,
                        subscribeEvent: 3,
                        unSubscribeEventsByAccounts: 4,
                        unSubscribeEventsByType: 5,
                        querySubscribeEventsByAccounts: 6,
                        querySubscribeEventsByType: 7,
                        pushEvents: 9
                    }
                }),
                s = r.merge({}, o.cmdConfig, {
                    login: {
                        sid: i.auth.id,
                        cid: i.auth.login,
                        params: [{
                            type: "Property",
                            name: "login"
                        }]
                    },
                    logout: {
                        sid: i.auth.id,
                        cid: i.auth.logout
                    },
                    kick: {
                        sid: i.auth.id,
                        cid: i.auth.kick,
                        params: [{
                            type: "StrArray",
                            name: "deviceIds"
                        }]
                    },
                    markInBlacklist: {
                        sid: i.user.id,
                        cid: i.user.markInBlacklist,
                        params: [{
                            type: "String",
                            name: "account"
                        }, {
                            type: "bool",
                            name: "isAdd"
                        }]
                    },
                    getBlacklist: {
                        sid: i.user.id,
                        cid: i.user.getBlacklist,
                        params: [{
                            type: "long",
                            name: "time"
                        }]
                    },
                    markInMutelist: {
                        sid: i.user.id,
                        cid: i.user.markInMutelist,
                        params: [{
                            type: "String",
                            name: "account"
                        }, {
                            type: "bool",
                            name: "isAdd"
                        }]
                    },
                    getMutelist: {
                        sid: i.user.id,
                        cid: i.user.getMutelist,
                        params: [{
                            type: "long",
                            name: "time"
                        }]
                    },
                    getRelations: {
                        sid: i.user.id,
                        cid: i.user.getRelations,
                        params: [{
                            type: "long",
                            name: "timetag"
                        }]
                    },
                    getUsers: {
                        sid: i.user.id,
                        cid: i.user.getUsers,
                        params: [{
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    updateMyInfo: {
                        sid: i.user.id,
                        cid: i.user.updateMyInfo,
                        params: [{
                            type: "Property",
                            name: "user"
                        }]
                    },
                    updateDonnop: {
                        sid: i.user.id,
                        cid: i.user.updateDonnop,
                        params: [{
                            type: "Property",
                            name: "donnop"
                        }]
                    },
                    markRead: {
                        sid: i.notify.id,
                        cid: i.notify.markRead,
                        params: [{
                            type: "long",
                            name: "id"
                        }, {
                            type: "ph",
                            name: "ph"
                        }]
                    },
                    batchMarkRead: {
                        sid: i.notify.id,
                        cid: i.notify.batchMarkRead,
                        params: [{
                            type: "byte",
                            name: "sid"
                        }, {
                            type: "byte",
                            name: "cid"
                        }, {
                            type: "LongArray",
                            name: "ids"
                        }]
                    },
                    sync: {
                        sid: i.sync.id,
                        cid: i.sync.sync,
                        params: [{
                            type: "Property",
                            name: "sync"
                        }]
                    },
                    syncTeamMembers: {
                        sid: i.sync.id,
                        cid: i.sync.syncTeamMembers,
                        params: [{
                            type: "LongLongMap",
                            name: "sync"
                        }]
                    },
                    sendMsg: {
                        sid: i.msg.id,
                        cid: i.msg.sendMsg,
                        params: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    getHistoryMsgs: {
                        sid: i.msg.id,
                        cid: i.msg.getHistoryMsgs,
                        params: [{
                            type: "String",
                            name: "to"
                        }, {
                            type: "long",
                            name: "beginTime"
                        }, {
                            type: "long",
                            name: "endTime"
                        }, {
                            type: "long",
                            name: "lastMsgId"
                        }, {
                            type: "int",
                            name: "limit"
                        }, {
                            type: "bool",
                            name: "reverse"
                        }]
                    },
                    sendCustomSysMsg: {
                        sid: i.msg.id,
                        cid: i.msg.sendCustomSysMsg,
                        params: [{
                            type: "Property",
                            name: "sysMsg"
                        }]
                    },
                    searchHistoryMsgs: {
                        sid: i.msg.id,
                        cid: i.msg.searchHistoryMsgs,
                        params: [{
                            type: "String",
                            name: "to"
                        }, {
                            type: "long",
                            name: "beginTime"
                        }, {
                            type: "long",
                            name: "endTime"
                        }, {
                            type: "String",
                            name: "keyword"
                        }, {
                            type: "int",
                            name: "limit"
                        }, {
                            type: "bool",
                            name: "reverse"
                        }]
                    },
                    getSessions: {
                        sid: i.msg.id,
                        cid: i.msg.getSessions,
                        params: [{
                            type: "long",
                            name: "time"
                        }]
                    },
                    deleteSessions: {
                        sid: i.msg.id,
                        cid: i.msg.deleteSessions,
                        params: [{
                            type: "StrArray",
                            name: "sessions"
                        }]
                    },
                    sendMsgReceipt: {
                        sid: i.msg.id,
                        cid: i.msg.sendMsgReceipt,
                        params: [{
                            type: "Property",
                            name: "msgReceipt"
                        }]
                    },
                    deleteMsg: {
                        sid: i.msg.id,
                        cid: i.msg.deleteMsg,
                        params: [{
                            type: "Property",
                            name: "sysMsg"
                        }]
                    },
                    markSessionAck: {
                        sid: i.msg.id,
                        cid: i.msg.markSessionAck,
                        params: [{
                            type: "byte",
                            name: "scene"
                        }, {
                            type: "String",
                            name: "to"
                        }, {
                            type: "long",
                            name: "timetag"
                        }]
                    },
                    createTeam: {
                        sid: i.team.id,
                        cid: i.team.createTeam,
                        params: [{
                            type: "Property",
                            name: "team"
                        }, {
                            type: "StrArray",
                            name: "accounts"
                        }, {
                            type: "String",
                            name: "ps"
                        }]
                    },
                    sendTeamMsg: {
                        sid: i.team.id,
                        cid: i.team.sendTeamMsg,
                        params: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    addTeamMembers: {
                        sid: i.team.id,
                        cid: i.team.addTeamMembers,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "StrArray",
                            name: "accounts"
                        }, {
                            type: "String",
                            name: "ps"
                        }]
                    },
                    removeTeamMembers: {
                        sid: i.team.id,
                        cid: i.team.removeTeamMembers,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    updateTeam: {
                        sid: i.team.id,
                        cid: i.team.updateTeam,
                        params: [{
                            type: "Property",
                            name: "team"
                        }]
                    },
                    leaveTeam: {
                        sid: i.team.id,
                        cid: i.team.leaveTeam,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }]
                    },
                    getTeam: {
                        sid: i.team.id,
                        cid: i.team.getTeam,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }]
                    },
                    getTeams: {
                        sid: i.team.id,
                        cid: i.team.getTeams,
                        params: [{
                            type: "long",
                            name: "timetag"
                        }]
                    },
                    getTeamMembers: {
                        sid: i.team.id,
                        cid: i.team.getTeamMembers,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "long",
                            name: "timetag"
                        }]
                    },
                    dismissTeam: {
                        sid: i.team.id,
                        cid: i.team.dismissTeam,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }]
                    },
                    applyTeam: {
                        sid: i.team.id,
                        cid: i.team.applyTeam,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "String",
                            name: "ps"
                        }]
                    },
                    passTeamApply: {
                        sid: i.team.id,
                        cid: i.team.passTeamApply,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "String",
                            name: "from"
                        }]
                    },
                    rejectTeamApply: {
                        sid: i.team.id,
                        cid: i.team.rejectTeamApply,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "String",
                            name: "from"
                        }, {
                            type: "String",
                            name: "ps"
                        }]
                    },
                    addTeamManagers: {
                        sid: i.team.id,
                        cid: i.team.addTeamManagers,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    removeTeamManagers: {
                        sid: i.team.id,
                        cid: i.team.removeTeamManagers,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    transferTeam: {
                        sid: i.team.id,
                        cid: i.team.transferTeam,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "String",
                            name: "account"
                        }, {
                            type: "bool",
                            name: "leave"
                        }]
                    },
                    updateInfoInTeam: {
                        sid: i.team.id,
                        cid: i.team.updateInfoInTeam,
                        params: [{
                            type: "Property",
                            name: "teamMember"
                        }]
                    },
                    updateNickInTeam: {
                        sid: i.team.id,
                        cid: i.team.updateNickInTeam,
                        params: [{
                            type: "Property",
                            name: "teamMember"
                        }]
                    },
                    acceptTeamInvite: {
                        sid: i.team.id,
                        cid: i.team.acceptTeamInvite,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "String",
                            name: "from"
                        }]
                    },
                    rejectTeamInvite: {
                        sid: i.team.id,
                        cid: i.team.rejectTeamInvite,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "String",
                            name: "from"
                        }, {
                            type: "String",
                            name: "ps"
                        }]
                    },
                    getTeamHistoryMsgs: {
                        sid: i.team.id,
                        cid: i.team.getTeamHistoryMsgs,
                        params: [{
                            type: "long",
                            name: "to"
                        }, {
                            type: "long",
                            name: "beginTime"
                        }, {
                            type: "long",
                            name: "endTime"
                        }, {
                            type: "long",
                            name: "lastMsgId"
                        }, {
                            type: "int",
                            name: "limit"
                        }, {
                            type: "bool",
                            name: "reverse"
                        }]
                    },
                    searchTeamHistoryMsgs: {
                        sid: i.team.id,
                        cid: i.team.searchTeamHistoryMsgs,
                        params: [{
                            type: "long",
                            name: "to"
                        }, {
                            type: "long",
                            name: "beginTime"
                        }, {
                            type: "long",
                            name: "endTime"
                        }, {
                            type: "String",
                            name: "keyword"
                        }, {
                            type: "int",
                            name: "limit"
                        }, {
                            type: "bool",
                            name: "reverse"
                        }]
                    },
                    updateMuteStateInTeam: {
                        sid: i.team.id,
                        cid: i.team.updateMuteStateInTeam,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }, {
                            type: "String",
                            name: "account"
                        }, {
                            type: "int",
                            name: "mute"
                        }]
                    },
                    getMyTeamMembers: {
                        sid: i.team.id,
                        cid: i.team.getMyTeamMembers,
                        params: [{
                            type: "LongArray",
                            name: "teamIds"
                        }]
                    },
                    getMutedTeamMembers: {
                        sid: i.team.id,
                        cid: i.team.getMutedTeamMembers,
                        params: [{
                            type: "long",
                            name: "teamId"
                        }]
                    },
                    friendRequest: {
                        sid: i.friend.id,
                        cid: i.friend.friendRequest,
                        params: [{
                            type: "String",
                            name: "account"
                        }, {
                            type: "byte",
                            name: "type"
                        }, {
                            type: "String",
                            name: "ps"
                        }]
                    },
                    deleteFriend: {
                        sid: i.friend.id,
                        cid: i.friend.deleteFriend,
                        params: [{
                            type: "String",
                            name: "account"
                        }]
                    },
                    updateFriend: {
                        sid: i.friend.id,
                        cid: i.friend.updateFriend,
                        params: [{
                            type: "Property",
                            name: "friend"
                        }]
                    },
                    getFriends: {
                        sid: i.friend.id,
                        cid: i.friend.getFriends,
                        params: [{
                            type: "long",
                            name: "timetag"
                        }]
                    },
                    getChatroomAddress: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.getChatroomAddress,
                        params: [{
                            type: "long",
                            name: "chatroomId"
                        }]
                    },
                    sendFilterMsg: {
                        sid: i.filter.id,
                        cid: i.filter.sendFilterMsg,
                        params: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    sendFilterCustomSysMsg: {
                        sid: i.filter.id,
                        cid: i.filter.sendFilterCustomSysMsg,
                        params: [{
                            type: "Property",
                            name: "sysMsg"
                        }]
                    },
                    publishEvent: {
                        sid: i.eventService.id,
                        cid: i.eventService.publishEvent,
                        params: [{
                            type: "Property",
                            name: "msgEvent"
                        }]
                    },
                    pushEvent: {
                        sid: i.eventService.id,
                        cid: i.eventService.pushEvent
                    },
                    subscribeEvent: {
                        sid: i.eventService.id,
                        cid: i.eventService.subscribeEvent,
                        params: [{
                            type: "Property",
                            name: "msgEventSubscribe"
                        }, {
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    unSubscribeEventsByAccounts: {
                        sid: i.eventService.id,
                        cid: i.eventService.unSubscribeEventsByAccounts,
                        params: [{
                            type: "Property",
                            name: "msgEventSubscribe"
                        }, {
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    unSubscribeEventsByType: {
                        sid: i.eventService.id,
                        cid: i.eventService.unSubscribeEventsByType,
                        params: [{
                            type: "Property",
                            name: "msgEventSubscribe"
                        }]
                    },
                    querySubscribeEventsByAccounts: {
                        sid: i.eventService.id,
                        cid: i.eventService.querySubscribeEventsByAccounts,
                        params: [{
                            type: "Property",
                            name: "msgEventSubscribe"
                        }, {
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    querySubscribeEventsByType: {
                        sid: i.eventService.id,
                        cid: i.eventService.querySubscribeEventsByType,
                        params: [{
                            type: "Property",
                            name: "msgEventSubscribe"
                        }]
                    },
                    pushEvents: {
                        sid: i.eventService.id,
                        cid: i.eventService.pushEvents
                    }
                }),
                a = r.merge({}, o.packetConfig, {
                    "2_3": {
                        service: "auth",
                        cmd: "login",
                        response: [{
                            type: "Property",
                            name: "loginRes"
                        }, {
                            type: "PropertyArray",
                            name: "loginPorts",
                            entity: "loginPort"
                        }]
                    },
                    "2_5": {
                        service: "auth",
                        cmd: "kicked",
                        response: [{
                            type: "Number",
                            name: "from"
                        }, {
                            type: "Number",
                            name: "reason"
                        }]
                    },
                    "2_6": {
                        service: "auth",
                        cmd: "logout"
                    },
                    "2_7": {
                        service: "auth",
                        cmd: "multiPortLogin",
                        response: [{
                            type: "Number",
                            name: "state"
                        }, {
                            type: "PropertyArray",
                            name: "loginPorts",
                            entity: "loginPort"
                        }]
                    },
                    "2_8": {
                        service: "auth",
                        cmd: "kick",
                        response: [{
                            type: "StrArray",
                            name: "deviceIds"
                        }]
                    },
                    "3_3": {
                        service: "user",
                        cmd: "markInBlacklist"
                    },
                    "3_103": {
                        service: "user",
                        cmd: "syncMarkInBlacklist",
                        response: [{
                            type: "String",
                            name: "account"
                        }, {
                            type: "Boolean",
                            name: "isAdd"
                        }]
                    },
                    "3_4": {
                        service: "user",
                        cmd: "getBlacklist",
                        response: [{
                            type: "StrArray",
                            name: "blacklist"
                        }]
                    },
                    "3_5": {
                        service: "user",
                        cmd: "markInMutelist"
                    },
                    "3_105": {
                        service: "user",
                        cmd: "syncMarkInMutelist",
                        response: [{
                            type: "String",
                            name: "account"
                        }, {
                            type: "Boolean",
                            name: "isAdd"
                        }]
                    },
                    "3_6": {
                        service: "user",
                        cmd: "getMutelist",
                        response: [{
                            type: "StrArray",
                            name: "mutelist"
                        }]
                    },
                    "3_8": {
                        service: "user",
                        cmd: "getRelations",
                        response: [{
                            type: "PropertyArray",
                            name: "specialRelations",
                            entity: "specialRelation"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "3_7": {
                        service: "user",
                        cmd: "getUsers",
                        response: [{
                            type: "PropertyArray",
                            name: "users",
                            entity: "user"
                        }]
                    },
                    "3_10": {
                        service: "user",
                        cmd: "updateMyInfo",
                        response: [{
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "3_15": {
                        service: "user",
                        cmd: "updateDonnop",
                        response: [{
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "3_115": {
                        service: "user",
                        cmd: "syncUpdateDonnop",
                        response: [{
                            type: "Property",
                            name: "donnop"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "3_109": {
                        service: "user",
                        cmd: "syncMyInfo",
                        response: [{
                            type: "Property",
                            name: "user"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "3_110": {
                        service: "user",
                        cmd: "syncUpdateMyInfo",
                        response: [{
                            type: "Property",
                            name: "user"
                        }]
                    },
                    "4_1": {
                        service: "notify"
                    },
                    "4_2": {
                        service: "notify"
                    },
                    "4_3": {
                        service: "notify",
                        cmd: "markRead"
                    },
                    "4_4": {
                        service: "notify",
                        cmd: "syncOfflineMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "msgs",
                            entity: "msg"
                        }]
                    },
                    "4_5": {
                        service: "notify",
                        cmd: "batchMarkRead"
                    },
                    "4_6": {
                        service: "notify",
                        cmd: "syncOfflineSysMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "sysMsgs",
                            entity: "sysMsg"
                        }]
                    },
                    "4_9": {
                        service: "notify",
                        cmd: "syncRoamingMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "msgs",
                            entity: "msg"
                        }]
                    },
                    "4_12": {
                        service: "notify",
                        cmd: "syncMsgReceipts",
                        response: [{
                            type: "PropertyArray",
                            name: "msgReceipts",
                            entity: "msgReceipt"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "4_13": {
                        service: "notify",
                        cmd: "syncDonnop",
                        response: [{
                            type: "Property",
                            name: "donnop"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "4_14": {
                        service: "notify",
                        cmd: "syncSessionAck",
                        response: [{
                            type: "StrLongMap",
                            name: "p2p"
                        }, {
                            type: "LongLongMap",
                            name: "team"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "4_15": {
                        service: "notify",
                        cmd: "syncRobots",
                        response: [{
                            type: "PropertyArray",
                            name: "robots",
                            entity: "robot"
                        }]
                    },
                    "4_16": {
                        service: "notify",
                        cmd: "syncBroadcastMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "broadcastMsgs",
                            entity: "broadcastMsg"
                        }]
                    },
                    "4_100": {
                        service: "notify",
                        cmd: "syncOfflineFilterMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "msgs",
                            entity: "msg"
                        }]
                    },
                    "4_101": {
                        service: "notify",
                        cmd: "syncOfflineFilterSysMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "sysMsgs",
                            entity: "sysMsg"
                        }]
                    },
                    "5_1": {
                        service: "sync",
                        cmd: "syncDone",
                        response: [{
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "5_2": {
                        service: "sync",
                        cmd: "syncTeamMembersDone",
                        response: [{
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "7_1": {
                        service: "msg",
                        cmd: "sendMsg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }],
                        trivialErrorCodes: [7101]
                    },
                    "7_2": {
                        service: "msg",
                        cmd: "msg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    "7_3": {
                        service: "msg",
                        cmd: "sysMsg",
                        response: [{
                            type: "Property",
                            name: "sysMsg"
                        }]
                    },
                    "7_6": {
                        service: "msg",
                        cmd: "getHistoryMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "msgs",
                            entity: "msg"
                        }]
                    },
                    "7_7": {
                        service: "msg",
                        cmd: "sendCustomSysMsg",
                        trivialErrorCodes: [7101]
                    },
                    "7_8": {
                        service: "msg",
                        cmd: "searchHistoryMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "msgs",
                            entity: "msg"
                        }]
                    },
                    "7_9": {
                        service: "msg",
                        cmd: "deleteSessions"
                    },
                    "7_10": {
                        service: "msg",
                        cmd: "getSessions",
                        response: [{
                            type: "StrArray",
                            name: "sessions"
                        }]
                    },
                    "7_101": {
                        service: "msg",
                        cmd: "syncSendMsg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    "7_11": {
                        service: "msg",
                        cmd: "sendMsgReceipt",
                        response: [{
                            type: "Property",
                            name: "msgReceipt"
                        }]
                    },
                    "7_12": {
                        service: "msg",
                        cmd: "msgReceipt",
                        response: [{
                            type: "Property",
                            name: "msgReceipt"
                        }]
                    },
                    "7_13": {
                        service: "msg",
                        cmd: "onDeleteMsg"
                    },
                    "7_14": {
                        service: "msg",
                        cmd: "onMsgDeleted",
                        response: [{
                            type: "Property",
                            name: "sysMsg"
                        }]
                    },
                    "7_15": {
                        service: "msg",
                        cmd: "onDeleteMsgOfflineRoaming",
                        response: [{
                            type: "PropertyArray",
                            name: "sysMsgs",
                            entity: "sysMsg"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }, {
                            type: "Number",
                            name: "type"
                        }]
                    },
                    "7_16": {
                        service: "msg",
                        cmd: "onMarkSessionAck"
                    },
                    "7_17": {
                        service: "msg",
                        cmd: "broadcastMsg",
                        response: [{
                            type: "Property",
                            name: "broadcastMsg"
                        }]
                    },
                    "7_116": {
                        service: "msg",
                        cmd: "syncMarkSessionAck",
                        response: [{
                            type: "Number",
                            name: "scene"
                        }, {
                            type: "String",
                            name: "to"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "8_1": {
                        service: "team",
                        cmd: "createTeam",
                        response: [{
                            type: "Property",
                            name: "team"
                        }]
                    },
                    "8_2": {
                        service: "team",
                        cmd: "sendTeamMsg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    "8_3": {
                        service: "team",
                        cmd: "teamMsg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    "8_4": {
                        service: "team",
                        cmd: "teamMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "msgs",
                            entity: "msg"
                        }]
                    },
                    "8_5": {
                        service: "team",
                        cmd: "addTeamMembers"
                    },
                    "8_6": {
                        service: "team",
                        cmd: "removeTeamMembers"
                    },
                    "8_7": {
                        service: "team",
                        cmd: "updateTeam",
                        response: [{
                            type: "Number",
                            name: "id"
                        }, {
                            type: "Number",
                            name: "time"
                        }]
                    },
                    "8_8": {
                        service: "team",
                        cmd: "leaveTeam"
                    },
                    "8_9": {
                        service: "team",
                        cmd: "getTeam",
                        response: [{
                            type: "Property",
                            name: "team"
                        }]
                    },
                    "8_10": {
                        service: "team",
                        cmd: "getTeams",
                        response: [{
                            type: "PropertyArray",
                            name: "teams",
                            entity: "team"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "8_11": {
                        service: "team",
                        cmd: "getTeamMembers",
                        response: [{
                            type: "Number",
                            name: "teamId"
                        }, {
                            type: "PropertyArray",
                            name: "members",
                            entity: "teamMember"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "8_12": {
                        service: "team",
                        cmd: "dismissTeam"
                    },
                    "8_13": {
                        service: "team",
                        cmd: "applyTeam",
                        response: [{
                            type: "Property",
                            name: "team"
                        }]
                    },
                    "8_14": {
                        service: "team",
                        cmd: "passTeamApply"
                    },
                    "8_15": {
                        service: "team",
                        cmd: "rejectTeamApply"
                    },
                    "8_16": {
                        service: "team",
                        cmd: "addTeamManagers"
                    },
                    "8_17": {
                        service: "team",
                        cmd: "removeTeamManagers"
                    },
                    "8_18": {
                        service: "team",
                        cmd: "transferTeam"
                    },
                    "8_19": {
                        service: "team",
                        cmd: "updateInfoInTeam"
                    },
                    "8_20": {
                        service: "team",
                        cmd: "updateNickInTeam"
                    },
                    "8_21": {
                        service: "team",
                        cmd: "acceptTeamInvite",
                        response: [{
                            type: "Property",
                            name: "team"
                        }]
                    },
                    "8_22": {
                        service: "team",
                        cmd: "rejectTeamInvite"
                    },
                    "8_23": {
                        service: "team",
                        cmd: "getTeamHistoryMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "msgs",
                            entity: "msg"
                        }]
                    },
                    "8_24": {
                        service: "team",
                        cmd: "searchTeamHistoryMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "msgs",
                            entity: "msg"
                        }]
                    },
                    "8_25": {
                        service: "team",
                        cmd: "updateMuteStateInTeam"
                    },
                    "8_26": {
                        service: "team",
                        cmd: "getMyTeamMembers",
                        response: [{
                            type: "PropertyArray",
                            name: "teamMembers",
                            entity: "teamMember"
                        }]
                    },
                    "8_27": {
                        service: "team",
                        cmd: "getMutedTeamMembers",
                        response: [{
                            type: "Number",
                            name: "teamId"
                        }, {
                            type: "PropertyArray",
                            name: "teamMembers",
                            entity: "teamMember"
                        }]
                    },
                    "8_126": {
                        service: "team",
                        cmd: "syncMyTeamMembers",
                        response: [{
                            type: "PropertyArray",
                            name: "teamMembers",
                            entity: "teamMember"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "8_109": {
                        service: "team",
                        cmd: "syncTeams",
                        response: [{
                            type: "Number",
                            name: "timetag"
                        }, {
                            type: "PropertyArray",
                            name: "teams",
                            entity: "team"
                        }]
                    },
                    "8_111": {
                        service: "team",
                        cmd: "syncTeamMembers",
                        response: [{
                            type: "Number",
                            name: "teamId"
                        }, {
                            type: "PropertyArray",
                            name: "members",
                            entity: "teamMember"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "8_101": {
                        service: "team",
                        cmd: "syncCreateTeam",
                        response: [{
                            type: "Property",
                            name: "team"
                        }]
                    },
                    "8_102": {
                        service: "team",
                        cmd: "syncSendTeamMsg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    "8_119": {
                        service: "team",
                        cmd: "syncUpdateTeamMember",
                        response: [{
                            type: "Property",
                            name: "teamMember"
                        }]
                    },
                    "12_1": {
                        service: "friend",
                        cmd: "friendRequest"
                    },
                    "12_101": {
                        service: "friend",
                        cmd: "syncFriendRequest",
                        response: [{
                            type: "String",
                            name: "account"
                        }, {
                            type: "Number",
                            name: "type"
                        }, {
                            type: "String",
                            name: "ps"
                        }]
                    },
                    "12_2": {
                        service: "friend",
                        cmd: "deleteFriend"
                    },
                    "12_102": {
                        service: "friend",
                        cmd: "syncDeleteFriend",
                        response: [{
                            type: "String",
                            name: "account"
                        }]
                    },
                    "12_3": {
                        service: "friend",
                        cmd: "updateFriend"
                    },
                    "12_103": {
                        service: "friend",
                        cmd: "syncUpdateFriend",
                        response: [{
                            type: "Property",
                            name: "friend"
                        }]
                    },
                    "12_4": {
                        service: "friend",
                        cmd: "getFriends",
                        response: [{
                            type: "PropertyArray",
                            name: "friends",
                            entity: "friend"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "12_5": {
                        service: "friend",
                        cmd: "syncFriends",
                        response: [{
                            type: "PropertyArray",
                            name: "friends",
                            entity: "friend"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "12_6": {
                        service: "friend",
                        cmd: "syncFriendUsers",
                        response: [{
                            type: "PropertyArray",
                            name: "users",
                            entity: "user"
                        }, {
                            type: "Number",
                            name: "timetag"
                        }]
                    },
                    "13_1": {
                        service: "chatroom",
                        cmd: "getChatroomAddress",
                        response: [{
                            type: "StrArray",
                            name: "address"
                        }]
                    },
                    "14_1": {
                        service: "eventService",
                        cmd: "publishEvent",
                        response: [{
                            type: "Property",
                            name: "msgEvent"
                        }]
                    },
                    "14_2": {
                        service: "eventService",
                        cmd: "pushEvent",
                        response: [{
                            type: "Property",
                            name: "msgEvent"
                        }]
                    },
                    "14_3": {
                        service: "eventService",
                        cmd: "subscribeEvent",
                        response: [{
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    "14_4": {
                        service: "eventService",
                        cmd: "unSubscribeEventsByAccounts",
                        response: [{
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    "14_5": {
                        service: "eventService",
                        cmd: "unSubscribeEventsByType"
                    },
                    "14_6": {
                        service: "eventService",
                        cmd: "querySubscribeEventsByAccounts",
                        response: [{
                            type: "PropertyArray",
                            name: "msgEventSubscribes",
                            entity: "msgEventSubscribe"
                        }]
                    },
                    "14_7": {
                        service: "eventService",
                        cmd: "querySubscribeEventsByType",
                        response: [{
                            type: "PropertyArray",
                            name: "msgEventSubscribes",
                            entity: "msgEventSubscribe"
                        }]
                    },
                    "14_9": {
                        service: "eventService",
                        cmd: "pushEvents",
                        response: [{
                            type: "PropertyArray",
                            name: "msgEvents",
                            entity: "msgEvent"
                        }]
                    },
                    "101_1": {
                        service: "filter",
                        cmd: "sendFilterMsg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    "101_2": {
                        service: "filter",
                        cmd: "filterMsg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    "101_3": {
                        service: "filter",
                        cmd: "filterSysMsg",
                        response: [{
                            type: "Property",
                            name: "sysMsg"
                        }]
                    },
                    "101_7": {
                        service: "filter",
                        cmd: "sendFilterCustomSysMsg"
                    }
                });
            e.exports = {
                idMap: i,
                cmdConfig: s,
                packetConfig: a
            }
        }, , , , function(e, t) {
            "use strict";
            var n = {};
            n.set = function(e, t, r) {
                n[e] = t, r && (r.support = t)
            }, e.exports = n
        }, function(e, t) {
            function n(e) {
                e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
            }
            e.exports = n, n.prototype.duration = function() {
                var e = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var t = Math.random(),
                        n = Math.floor(t * this.jitter * e);
                    e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
                }
                return 0 | Math.min(e, this.max)
            }, n.prototype.reset = function() {
                this.attempts = 0
            }, n.prototype.setMin = function(e) {
                this.ms = e
            }, n.prototype.setMax = function(e) {
                this.max = e
            }, n.prototype.setJitter = function(e) {
                this.jitter = e
            }
        }, function(e, t, n) {
            "use strict";

            function r() {}
            var o = n(15);
            r.typeMap = {
                text: 0,
                image: 1,
                audio: 2,
                video: 3,
                geo: 4,
                notification: 5,
                file: 6,
                tip: 10,
                robot: 11,
                custom: 100
            };
            var i = r.typeReverseMap = {
                0: "text",
                1: "image",
                2: "audio",
                3: "video",
                4: "geo",
                5: "notification",
                6: "file",
                10: "tip",
                11: "robot",
                100: "custom"
            };
            r.validTypes = Object.keys(r.typeMap), r.setFlow = function(e, t) {
                var n = t === e.from;
                n && t === e.to && (n = o.deviceId === e.fromDeviceId), e.flow = n ? "out" : "in", "robot" === e.type && e.content && e.content.msgOut && (e.flow = "in")
            }, r.getType = function(e) {
                var t = e.type;
                return i[t] || t
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";
            n(99), n(26), n(102), n(2).polyfill()
        }, function(e, t, n) {
            "use strict";
            var r = n(14).fn;
            r.isConnected = function() {
                return this.protocol.isConnected()
            }, r.connect = function() {
                this.protocol.connect()
            }, r.disconnect = function() {
                this.protocol.disconnect()
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                o = n(14).fn;
            o.uploadSdkLogUrl = function(e) {
                return r.verifyOptions(e, "url"), this.cbAndSendCmd("uploadSdkLogUrl", e)
            }
        }, function(e, t, n) {
            (function(e) {
                "use strict";
                var t = n(14).fn,
                    r = n(1),
                    o = n(108),
                    i = n(5),
                    s = n(3),
                    a = n(97),
                    c = n(98),
                    u = n(54);
                t.sendText = function(e) {
                    var t = this;
                    return t.processCallback(e), e.msg = new t.message.TextMessage(e), t.sendMsg(e)
                }, t.previewFile = function(e) {
                    if (r.verifyOptions(e, "done"), e.type || (e.type = "file"), r.verifyParamPresentJustOne(e, "dataURL blob fileInput wxFilePath"), e.dataURL) e.blob = u.fromDataURL(e.dataURL);
                    else if (e.blob);
                    else if (e.fileInput) {
                        if (e.fileInput = r.verifyFileInput(e.fileInput), e.fileInput.files && !e.fileInput.files.length) return void e.done(i.newNoFileError("请选择" + e.type + "文件"), e);
                        e.fileInputName = r.getFileName(e.fileInput)
                    }
                    this.processCallback(e);
                    var t = a.genResponseBody(e.type) || {};
                    this.getNosToken({
                        responseBody: JSON.stringify(t).replace(/"/gi, '\\"'),
                        callback: function(t, n) {
                            return t ? void e.done(t, e.callback.options) : (e.nosToken = n, void this._doPreviewFile(e))
                        }.bind(this)
                    })
                }, t._doPreviewFile = function(t) {
                    function n(n, c) {
                        if (t.uploaddone = i, n) return n.appendMessage("api::previewFile: upload file failed"), void t.done(n, t.callback.options);
                        if (c = a.parseResponse(c, o.options.exifOrientation), c.url = s.genDownloadUrl(t.nosToken.bucket, l.Object), r.exist(t.fileInputName)) c.name = t.fileInputName;
                        else if (t.blob) {
                            var u = t.blob.name;
                            if (c.name = u || "blob-" + c.md5, !u) {
                                var d = t.blob.type;
                                c.ext = d.slice(d.lastIndexOf("/") + 1)
                            }
                        }
                        if (e.env.WEIXIN_APP && (c.name = t.wxFilePath), !c.ext) {
                            var f = c.name.lastIndexOf(".");
                            f === -1 ? c.ext = "unknown" : c.ext = c.name.slice(f + 1)
                        }
                        return void t.done(null, r.copy(c))
                    }
                    var o = this,
                        i = t.uploaddone,
                        u = s.genUploadUrl(t.nosToken.bucket),
                        l = this.assembleUploadParams(t.nosToken),
                        d = "file";
                    e.env.WEIXIN_APP ? (r.verifyOptions(t, "wxFilePath"), wx.uploadFile({
                        url: u,
                        filePath: t.wxFilePath,
                        name: d,
                        formData: l,
                        fail: function(e) {
                            console.log(e)
                        },
                        success: function(e) {
                            if (console.log(e), 200 === e.statusCode) try {
                                n(null, JSON.parse(e.data))
                            } catch (t) {
                                console.error("parse wx upload file res error", t), n({
                                    code: "PARSE_WX_UPLOAD_FILE_RES_ERROR",
                                    str: e.data,
                                    msg: e.errMsg
                                })
                            } else n({
                                code: e.statusCode,
                                msg: e.errMsg
                            })
                        }
                    })) : (t.uploaddone = n, t.url = u, t.params = l, t.fileName = d, new c(t))
                }, t.sendFile = function(e) {
                    var t = this;
                    if (e.type || (e.type = "file"), r.verifyParamPresentJustOne(e, "dataURL blob fileInput file wxFilePath"), t.processCallback(e), e.dataURL) t._previewAndSendFile(e);
                    else if (e.blob) t._previewAndSendFile(e);
                    else if (e.fileInput) {
                        if (e.fileInput = r.verifyFileInput(e.fileInput), e.fileInput.files && !e.fileInput.files.length) return void e.done(i.newNoFileError("请选择" + e.type + "文件"), e.callback.options);
                        t._previewAndSendFile(e);
                    } else if (e.wxFilePath) t._previewAndSendFile(e);
                    else if (e.file) return e.msg = new t.message.FileMessage(e), t.sendMsg(e)
                }, t._previewAndSendFile = function(e) {
                    var t = this;
                    r.verifyCallback(e, "uploaddone beforesend");
                    var n = e.done;
                    e.done = function(o, i) {
                        e.done = n, o ? e.uploaddone(o, e.callback.options) : (e.uploaddone(null, r.copy(i)), e.file = i, e.msg = new t.message.FileMessage(e), e.beforesend(t.sendMsg(e)))
                    }, t.previewFile(e)
                }, t.assembleUploadParams = function(e) {
                    return e ? {
                        Object: decodeURIComponent(e.objectName),
                        "x-nos-token": e.token,
                        "x-nos-entity-type": "json"
                    } : null
                }, t.sendGeo = function(e) {
                    var t = this;
                    return t.processCallback(e), e.msg = new t.message.GeoMessage(e), t.sendMsg(e)
                }, t.sendTipMsg = function(e) {
                    var t = this;
                    return t.processCallback(e), e.msg = new t.message.TipMessage(e), t.sendMsg(e)
                }, t.sendCustomMsg = function(e) {
                    var t = this;
                    return t.processCallback(e), e.msg = new t.message.CustomMessage(e), t.sendMsg(e)
                }, t.sendRobotMsg = function(e) {
                    var t = this;
                    return t.processCallback(e), e.msg = new t.message.RobotMessage(e), t.sendMsg(e)
                }, t.sendMsg = function(e) {
                    var t = this,
                        n = t.protocol,
                        o = e.msg,
                        i = {},
                        s = !! e.isLocal;
                    if (s && e.time && (o.time = e.time), e.resend && ("out" !== e.flow || "fail" !== e.status)) return r.onError("只能重发发送失败的消息");
                    e.callback.options.idClient = o.idClient, t.beforeSendMsg(e, i);
                    var a = e.rtnMsg = t.formatReturnMsg(o);
                    return s && (a.status = "success", a.isLocal = !0), n.storeSendMsg && (i.promise = n.storeSendMsg(a)), e.cbaop = function(e) {
                        if (e && "server" !== e.from) return a.status = "fail", n.updateSendMsgError && n.updateSendMsgError(a), a
                    }, s || (i.msg = o, t.sendCmd(e.cmd, i, e.callback)), t.afterSendMsg(e), s && setTimeout(function() {
                        a = r.simpleClone(a), e.done(null, a)
                    }, 0), r.copy(a)
                }, t.beforeSendMsg = function() {}, t.afterSendMsg = function() {}, t.formatReturnMsg = function(e) {
                    var t = this;
                    return e = r.copy(e), t.protocol.completeMsg(e), e.status = "sending", e = t.message.reverse(e)
                }, t.resendMsg = function(e) {
                    var t = this;
                    return r.verifyOptions(e, "msg"), t.trimMsgFlag(e), e.resend = !0, t._sendMsgByType(e)
                }, t.forwardMsg = function(e) {
                    var t = this;
                    return r.verifyOptions(e, "msg"), t.beforeForwardMsg(e), t.trimMsgFlag(e), e.forward = !0, e.msg.idClient = r.guid(), t._sendMsgByType(e)
                }, t.trimMsgFlag = function(e) {
                    e && e.msg && (e.msg = r.copy(e.msg), delete e.msg.resend, delete e.msg.forward)
                }, t.beforeForwardMsg = function() {}, t._sendMsgByType = function(e) {
                    var t = this;
                    switch (r.verifyOptions(e, "msg"), r.verifyParamValid("msg.type", e.msg.type, t.message.validTypes), r.merge(e, e.msg), e.type) {
                        case "text":
                            return t.sendText(e);
                        case "image":
                        case "audio":
                        case "video":
                        case "file":
                            return t.sendFile(e);
                        case "geo":
                            return t.sendGeo(e);
                        case "custom":
                            return t.sendCustomMsg(e);
                        case "tip":
                            return t.sendTipMsg(e);
                        default:
                            throw new i("不能发送类型为 " + e.type + " 的消息")
                    }
                }, t.parseRobotTemplate = function(e) {
                    function t(e) {
                        if (e.link) {
                            var t = e.link;
                            Array.isArray(t) || (t = [t]), t = t.map(function(e) {
                                return e.image && (e.image = r(e)), e.text && (e.text = n(e)), "url" === e._type ? (e.type = "url", e.style = e._style || "", e.target = e._target, delete e._target, delete e._style) : "block" === e._type && (e.type = "block", e.style = e._style || "", e.params = e._params || "", e.target = e._target, delete e._params, delete e._target, delete e._style), delete e._type, e
                            }), e.link = t
                        }
                        return e.link
                    }
                    function n(e) {
                        return Array.isArray(e.text) || (e.text = [e.text]), e.text = e.text.map(function(e) {
                            return {
                                type: "text",
                                name: e._name,
                                text: e.__text
                            }
                        }), e.text
                    }
                    function r(e) {
                        return Array.isArray(e.image) || (e.image = [e.image]), e.image = e.image.map(function(e) {
                            return {
                                type: "image",
                                name: e._name,
                                url: e._url
                            }
                        }), e.image
                    }
                    if (/<template[^>\/]+\/>/.test(e)) return {
                        raw: e,
                        json: [{
                            type: "text",
                            name: "",
                            text: ""
                        }]
                    };
                    if (!/<template[^>\/]+>/.test(e)) return {
                        raw: e,
                        json: [{
                            type: "text",
                            name: "",
                            text: e
                        }]
                    };
                    var i = new o({
                        escapeMode: !1
                    });
                    e = e.replace(/<template [^>]+>/, "<template>");
                    var s = i.xml2js(e);
                    s = s.template.LinearLayout, Array.isArray(s) || (s = [s]);
                    var a = [];
                    return s = s.forEach(function(e) {
                        e.image && (a = a.concat(r(e))), e.text && (a = a.concat(n(e))), e.link && (a = a.concat(t(e)))
                    }), {
                        raw: e,
                        json: a
                    }
                }
            }).call(t, n(9))
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                o = n(14).fn,
                i = n(51);
            o.getSimpleNosToken = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return e.num = 1, r.verifyOptions(e), this.cbAndSendCmd("getSimpleNosToken", e)
            }, o.getNosToken = function(e) {
                this.sendCmd("getNosToken", {
                    responseBody: e.responseBody
                }, e.callback)
            }, o.packFileDownloadName = function(e) {
                r.verifyOptions(e, "url name");
                var t = e.url;
                return t + r.genUrlSep(t) + "download=" + encodeURIComponent(e.name)
            }, o.audioToMp3 = function(e) {
                r.verifyOptions(e, "url");
                var t = e.url;
                return t + r.genUrlSep(t) + "audioTrans&type=mp3"
            }, o.stripImageMeta = function(e) {
                return this.beforeProcessImage(e, "stripmeta")
            }, o.qualityImage = function(e) {
                return this.beforeProcessImage(e, "quality")
            }, o.interlaceImage = function(e) {
                return this.beforeProcessImage(e, "interlace")
            }, o.rotateImage = function(e) {
                return this.beforeProcessImage(e, "rotate")
            }, o.blurImage = function(e) {
                return this.beforeProcessImage(e, "blur")
            }, o.cropImage = function(e) {
                return this.beforeProcessImage(e, "crop")
            }, o.thumbnailImage = function(e) {
                return this.beforeProcessImage(e, "thumbnail")
            }, o.beforeProcessImage = function(e, t) {
                var n = r.copy(e);
                return n.type = t, e.ops = [n], this.processImage(e)
            }, o.processImage = function(e) {
                var t = this;
                r.verifyOptions(e, "url ops"), r.verifyParamType("ops", e.ops, "array");
                var n = e.ops.map(function(e) {
                    return r.verifyOptions(e, "type"), r.verifyParamValid("type", e.type, i.validTypes), t["gen" + e.type.slice(0, 1).toUpperCase() + e.type.slice(1) + "Op"](e)
                });
                t.processCallback(e), t.sendCmd("processImage", {
                    url: e.url,
                    imageOps: n
                }, e.callback)
            }, o.genStripmetaOp = function(e) {
                return new i({
                    type: e.type,
                    stripmeta: e.strip ? 1 : 0
                })
            }, o.genQualityOp = function(e) {
                r.verifyOptions(e, "quality"), r.verifyParamType("quality", e.quality, "number"), r.verifyParamMin("quality", e.quality, 0), r.verifyParamMax("quality", e.quality, 100);
                var t = Math.round(e.quality);
                return new i({
                    type: e.type,
                    qualityQuality: t
                })
            }, o.genInterlaceOp = function(e) {
                return new i({
                    type: e.type
                })
            }, o.genRotateOp = function(e) {
                for (r.verifyOptions(e, "angle"), r.verifyParamType("angle", e.angle, "number"); e.angle < 0;) e.angle = e.angle + 360;
                e.angle = e.angle % 360;
                var t = Math.round(e.angle);
                return new i({
                    type: e.type,
                    rotateAngle: t
                })
            }, o.genBlurOp = function(e) {
                r.verifyOptions(e, "radius sigma"), r.verifyParamType("radius", e.radius, "number"), r.verifyParamMin("radius", e.radius, 1), r.verifyParamMax("radius", e.radius, 50), r.verifyParamType("sigma", e.sigma, "number"), r.verifyParamMin("sigma", e.sigma, 0);
                var t = Math.round(e.radius),
                    n = Math.round(e.sigma);
                return new i({
                    type: e.type,
                    blurRadius: t,
                    blurSigma: n
                })
            }, o.genCropOp = function(e) {
                r.verifyOptions(e, "x y width height"), r.verifyParamType("x", e.x, "number"), r.verifyParamMin("x", e.x, 0), r.verifyParamType("y", e.y, "number"), r.verifyParamMin("y", e.y, 0), r.verifyParamType("width", e.width, "number"), r.verifyParamMin("width", e.width, 0), r.verifyParamType("height", e.height, "number"), r.verifyParamMin("height", e.height, 0);
                var t = Math.round(e.x),
                    n = Math.round(e.y),
                    o = Math.round(e.width),
                    s = Math.round(e.height);
                return new i({
                    type: e.type,
                    cropX: t,
                    cropY: n,
                    cropWidth: o,
                    cropHeight: s
                })
            }, o.genThumbnailOp = function() {
                var e = {
                    cover: "z",
                    contain: "x",
                    crop: "y"
                };
                return function(t) {
                    r.verifyOptions(t, "mode"), r.verifyParamValid("mode", t.mode, Object.keys(e)), "contain" === t.mode ? r.verifyParamAtLeastPresentOne(t, "width height") : r.verifyOptions(t, "width height"), r.undef(t.width) && (t.width = 0), r.undef(t.height) && (t.height = 0), r.verifyParamType("width", t.width, "number"), r.verifyParamMin("width", t.width, 0), r.verifyParamType("height", t.height, "number"), r.verifyParamMin("height", t.height, 0);
                    var n = Math.round(t.width),
                        o = Math.round(t.height),
                        s = new i({
                            type: t.type,
                            thumbnailMode: e[t.mode],
                            thumbnailWidth: n,
                            thumbnailHeight: o
                        });
                    if ("crop" === t.mode && r.notundef(t.axis)) {
                        r.undef(t.axis.x) && (t.axis.x = 5), r.undef(t.axis.y) && (t.axis.y = 5), r.verifyParamMin("axis.x", t.axis.x, 0), r.verifyParamMax("axis.x", t.axis.x, 10), r.verifyParamMin("axis.y", t.axis.y, 0), r.verifyParamMax("axis.y", t.axis.y, 10);
                        var a = Math.round(t.axis.x),
                            c = Math.round(t.axis.y);
                        s.thumbnailAxisX = a, s.thumbnailAxisY = c
                    }
                    return r.notundef(t.enlarge) && (r.verifyParamType("enlarge", t.enlarge, "boolean"), t.enlarge && (s.thumbnailEnlarge = 1)), s
                }
            }()
        }, function(e, t, n) {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, o = n(50), i = n(1), s = n(14).fn;
            s.viewImageSync = function(e) {
                var t = this.options;
                i.verifyOptions(e, "url");
                var n = e.url,
                    s = (0, o.url2object)(n),
                    a = s.protocol,
                    c = s.hostname,
                    u = s.path,
                    l = s.query;
                if ("boolean" == typeof e.strip && (l.stripmeta = e.strip ? 1 : 0), "number" == typeof e.quality && (i.verifyParamMin("quality", e.quality, 0), i.verifyParamMax("quality", e.quality, 100), l.quality = Math.round(e.quality)), "boolean" == typeof e.interlace && (l.interlace = e.interlace ? 1 : 0), "number" == typeof e.rotate && (l.rotate = Math.round(e.rotate)), "object" === r(e.thumbnail)) {
                    var d = e.thumbnail.mode || "crop",
                        f = e.thumbnail.width,
                        p = e.thumbnail.height;
                    if (f >= 0 && p >= 0 && f < 4096 && p < 4096 && (f > 0 || p > 0)) {
                        switch (d) {
                            case "crop":
                                d = "y";
                                break;
                            case "contain":
                                d = "x";
                                break;
                            case "cover":
                                d = "z";
                                break;
                            default:
                                d = "x"
                        }
                        l.thumbnail = "" + f + d + p
                    }
                }
                if (t.downloadUrl) {
                    var m = (0, o.url2object)(e.url),
                        y = t.downloadUrl,
                        g = m.path,
                        h = g.indexOf("/");
                    if (h !== -1) {
                        var v = g.substring(0, h),
                            b = g.substring(h + 1);
                        y = y.replace("{bucket}", v).replace("{object}", b)
                    }
                    var M = (0, o.url2object)(y);
                    return (0, o.object2url)({
                        protocol: M.protocol,
                        hostname: M.hostname,
                        path: M.path,
                        query: i.merge(M.query, l)
                    })
                }
                return (0, o.object2url)({
                    protocol: a,
                    hostname: c,
                    path: u,
                    query: l
                })
            }, s.viewImageStripMeta = function(e) {
                i.verifyOptions(e, "url strip"), i.verifyParamType("strip", e.strip, "boolean");
                var t = "stripmeta=" + (e.strip ? 1 : 0),
                    n = (0, o.genUrlSep)(e.url);
                return e.url + n + t
            }, s.viewImageQuality = function(e) {
                i.verifyOptions(e, "url quality"), i.verifyParamType("quality", e.quality, "number"), i.verifyParamMin("quality", e.quality, 0), i.verifyParamMax("quality", e.quality, 100);
                var t = Math.round(e.quality),
                    n = "quality=" + t,
                    r = (0, o.genUrlSep)(e.url);
                return e.url + r + n
            }, s.viewImageInterlace = function(e) {
                i.verifyOptions(e, "url");
                var t = "interlace=1",
                    n = (0, o.genUrlSep)(e.url);
                return e.url + n + t
            }, s.viewImageRotate = function(e) {
                for (i.verifyOptions(e, "url angle"), i.verifyParamType("angle", e.angle, "number"); e.angle < 0;) e.angle = e.angle + 360;
                e.angle = e.angle % 360;
                var t = Math.round(e.angle),
                    n = "rotate=" + t,
                    r = (0, o.genUrlSep)(e.url);
                return e.url + r + n
            }, s.viewImageBlur = function(e) {
                i.verifyOptions(e, "url radius sigma"), i.verifyParamType("radius", e.radius, "number"), i.verifyParamMin("radius", e.radius, 1), i.verifyParamMax("radius", e.radius, 50), i.verifyParamType("sigma", e.sigma, "number"), i.verifyParamMin("sigma", e.sigma, 0);
                var t = Math.round(e.radius),
                    n = Math.round(e.sigma),
                    r = "blur=" + t + "x" + n,
                    s = (0, o.genUrlSep)(e.url);
                return e.url + s + r
            }, s.viewImageCrop = function(e) {
                i.verifyOptions(e, "url x y width height"), i.verifyParamType("x", e.x, "number"), i.verifyParamMin("x", e.x, 0), i.verifyParamType("y", e.y, "number"), i.verifyParamMin("y", e.y, 0), i.verifyParamType("width", e.width, "number"), i.verifyParamMin("width", e.width, 0), i.verifyParamType("height", e.height, "number"), i.verifyParamMin("height", e.height, 0);
                var t = Math.round(e.x),
                    n = Math.round(e.y),
                    r = Math.round(e.width),
                    s = Math.round(e.height),
                    a = "crop=" + t + "_" + n + "_" + r + "_" + s,
                    c = (0, o.genUrlSep)(e.url);
                return e.url + c + a
            }, s.viewImageThumbnail = function() {
                var e = {
                    cover: "z",
                    contain: "x",
                    crop: "y"
                };
                return function(t) {
                    i.verifyOptions(t, "url mode"), i.verifyParamValid("mode", t.mode, Object.keys(e)), "contain" === t.mode ? i.verifyParamAtLeastPresentOne(t, "width height") : i.verifyOptions(t, "width height"), i.undef(t.width) && (t.width = 0), i.undef(t.height) && (t.height = 0), i.verifyParamType("width", t.width, "number"), i.verifyParamMin("width", t.width, 0), i.verifyParamType("height", t.height, "number"), i.verifyParamMin("height", t.height, 0);
                    var n = Math.round(t.width),
                        r = Math.round(t.height),
                        s = "thumbnail=" + n + e[t.mode] + r;
                    if ("crop" === t.mode && i.notundef(t.axis)) {
                        i.undef(t.axis.x) && (t.axis.x = 5), i.undef(t.axis.y) && (t.axis.y = 5), i.verifyParamMin("axis.x", t.axis.x, 0), i.verifyParamMax("axis.x", t.axis.x, 10), i.verifyParamMin("axis.y", t.axis.y, 0), i.verifyParamMax("axis.y", t.axis.y, 10);
                        var a = Math.round(t.axis.x),
                            c = Math.round(t.axis.y);
                        s = s + "&axis=" + a + "_" + c
                    }
                    i.notundef(t.enlarge) && (i.verifyParamType("enlarge", t.enlarge, "boolean"), t.enlarge && (s += "&enlarge=1"));
                    var u = (0, o.genUrlSep)(t.url);
                    return t.url + u + s
                }
            }()
        }, , , function(e, t, n) {
            "use strict";

            function r(e) {
                o.verifyOptions(e, "account"), o.verifyParamAtLeastPresentOne(e, "alias custom"), this.account = e.account, i(e.alias) && (this.alias = e.alias), i(e.custom) && (this.custom = e.custom)
            }
            var o = n(1),
                i = o.notundef,
                s = {
                    addFriend: 1,
                    applyFriend: 2,
                    passFriendApply: 3,
                    rejectFriendApply: 4
                },
                a = {
                    1: "addFriend",
                    2: "applyFriend",
                    3: "passFriendApply",
                    4: "rejectFriendApply"
                };
            r.reverse = function(e) {
                var t = o.filterObj(e, "account alias custom createTime updateTime");
                return i(e.flag) && (t.valid = "1" === e.flag), i(t.createTime) && (t.createTime = +t.createTime), i(t.updateTime) && (t.updateTime = +t.updateTime), t
            }, r.validTypes = function() {
                return Object.keys(s)
            }, r.getByteFromType = function(e) {
                return s[e]
            }, r.getTypeFromByte = function(e) {
                return a[e]
            }, r.assembleFriend = function(e) {
                var t = +new Date;
                return {
                    account: e,
                    alias: "",
                    createTime: t,
                    custom: "",
                    updateTime: t,
                    valid: !0
                }
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = n(17).fn,
                o = n(5),
                i = n(12),
                s = n(29),
                a = n(15),
                c = n(3),
                u = n(1),
                l = u.notundef;
            r.login = function() {
                var e = this;
                e.sendCmd("login", e.assembleLogin(), e.onLogin.bind(e)), e.autoconnect = !1
            }, r.genSessionKey = function() {
                var e = {};
                return function() {
                    var t = this,
                        n = t.name,
                        r = e[n] = e[n] || u.guid();
                    return r
                }
            }(), r.assembleIMLogin = function() {
                var e = this,
                    t = e.options,
                    n = t.account,
                    r = e.autoconnect ? 0 : 1;
                return {
                    appLogin: r,
                    appKey: t.appKey,
                    account: n,
                    token: t.token,
                    sdkVersion: c.info.sdkVersion,
                    protocolVersion: c.info.protocolVersion,
                    os: i.os.toString(),
                    browser: i.name + " " + i.version,
                    session: e.genSessionKey(),
                    deviceId: a.deviceId
                }
            }, r.onLogin = function(e, t) {
                var n = this;
                n.loginResult = t, e ? n.onAuthError(e) : (n.startHeartbeat(), n.afterLogin(t))
            }, r.afterLogin = u.emptyFunc, r.notifyLogin = function() {
                var e = this,
                    t = e.loginResult;
                e.logger.info("link::notifyLogin: on connect", t), e.options.onconnect(t)
            }, r.logout = function() {
                var e = this;
                if (e.isConnected()) {
                    var t = new o("主动退出", "logout");
                    e.onAuthError(t)
                }
            }, r.onKicked = function(e) {
                var t = this,
                    n = e.content,
                    r = n.from,
                    i = n.reason,
                    a = n.custom,
                    c = {
                        reason: t.kickedReasons[i] || "unknown",
                        message: t.kickedMessages[i] || "未知原因"
                    };
                if (l(r) && (c.from = s.reverseType(r)), l(a) && (c.custom = a), t.shouldNotifyKicked(c)) {
                    var d = new o("被踢了", "kicked");
                    u.merge(d, c), t.onAuthError(d)
                } else t.logger.warn("link::onKicked: silentlyKick"), t.shouldReconnect = !0, t.hasNotifyDisconnected = !0, t.disconnectSocket()
            }, r.shouldNotifyKicked = function(e) {
                return "silentlyKick" !== e.reason
            }, r.onAuthError = function(e) {
                var t = this;
                t.shouldReconnect = !1, t.markAllCallbackInvalid(e || o.newConnectionError()), t.notifyDisconnect(e)
            }
        }, function(e, t, n) {
            (function(e) {
                "use strict";
                var t = n(17).fn,
                    r = n(5),
                    o = n(67),
                    i = n(28),
                    s = n(3),
                    a = n(1);
                t.initConnect = function() {
                    var e = this;
                    e.socket = null, e.retryCount = 0, e.connecting = !1, e.shouldReconnect = !0, e.hasNotifyDisconnected = !1
                }, t.resetConnect = function() {
                    var e = this,
                        t = e.options;
                    a.notundef(t.needReconnect) ? (a.verifyParamType("needReconnect", t.needReconnect, "boolean"), e.needReconnect = t.needReconnect) : e.needReconnect = !0, e.logger.log("link::resetConnect: needReconnect " + e.needReconnect), a.notundef(t.reconnectionAttempts) && a.verifyParamType("reconnectionAttempts", t.reconnectionAttempts, "number"), e.reconnectionAttempts = t.reconnectionAttempts || 1 / 0, e.backoff = new o({
                        min: s.reconnectionDelay,
                        max: s.reconnectionDelayMax,
                        jitter: s.reconnectionJitter
                    })
                }, t.connect = function() {
                    var e = this;
                    if (e.isConnected() || e.connecting) return void e.logger.warn("link::connect: already connected or connecting");
                    if (e.connecting = !0, e.hasNotifyDisconnected = !1, e.socket) e.logger.info("link::connect: try connecting..."), e.socket.socket.connect();
                    else {
                        var t = e.getNextSocketUrl();
                        t ? e.connectToUrl(t) : e.refreshSocketUrl()
                    }
                }, t.getNextSocketUrl = function() {
                    return this.socketUrls.shift()
                }, t.isConnected = function() {
                    var e = this;
                    return !!e.socket && !! e.socket.socket && e.socket.socket.connected
                }, t.connectToUrl = function(t) {
                    var n = this;
                    if (n.logger.log("link::connectToUrl: " + t), e.env.WEIXIN_APP) {
                        if (!window.location) {
                            var r = t.split(":");
                            window.location = {
                                protocol: r[0],
                                hostname: r[1].slice(2),
                                port: r[2]
                            }
                        }
                        this.options.transports = ["websocket"]
                    }
                    var o = this.options.transports || ["websocket", "xhr-polling"];
                    n.socket = i.connect(t, {
                        transports: o,
                        reconnect: !1,
                        "force new connection": !0,
                        "connect timeout": s.connectTimeout
                    }), n.logger.info("link::connectToUrl: socket url: " + t + ", transports: " + JSON.stringify(o)), n.socket.on("connect", n.onConnect.bind(n)), n.socket.on("handshake_failed", n.onHandshakeFailed.bind(n)), n.socket.on("connect_failed", n.onConnectFailed.bind(n)), n.socket.on("error", n.onError.bind(n)), n.socket.on("message", n.onMessage.bind(n)), n.socket.on("disconnect", function() {
                        n.logger.warn("link::connectToUrl: socket url: " + t + ", disconnected"), n.onDisconnect(!0)
                    })
                }, t.disconnect = function() {
                    var e = this;
                    e.isConnected() && (e.logger.log("link::disconnect: start disconnecting"), e.logout())
                }, t.onConnect = function() {
                    var e = this;
                    e.backoff && e.backoff.reset(), e.retryCount = 0, e.connecting = !1, e.shouldReconnect = !0, e.hasNotifyDisconnected = !1, e.logger.log("link::onConnect: socket onconnected, start login"), e.login()
                }, t.onHandshakeFailed = function() {
                    this.logger.warn("link::onHandshakeFailed: shandshake failed"), this.onDisconnect()
                }, t.onConnectFailed = function() {
                    this.onDisconnect()
                }, t.onError = function() {
                    var e = arguments[0];
                    e && this.onMiscError("link::onError:", new r(e))
                }, t.onDisconnect = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this;
                    t.connected = e, t.connecting = !1, t.markAllCallbackInvalid(r.newNetworkError()), t.stopHeartbeat(), t.reconnect()
                }, t.willReconnect = function() {
                    var e = this;
                    return e.shouldReconnect && e.needReconnect && e.retryCount < e.reconnectionAttempts
                }, t.reconnect = function() {
                    var e = this;
                    if (e.willReconnect()) {
                        e.socket = null, e.connected && (e.autoconnect = !0), e.retryCount++;
                        var t = e.backoff.duration();
                        e.logger.info("link::reconnect: will retry after " + t + "ms, retryCount " + e.retryCount), e.options.onwillreconnect({
                            retryCount: e.retryCount,
                            duration: t
                        }), setTimeout(function() {
                            e.connect()
                        }, t)
                    } else e.notifyDisconnect()
                }, t.notifyConnectError = function(e) {
                    var t = this,
                        n = r.newConnectError(e);
                    t.logger.error("link::notifyConnectError:", n), t.options.onerror(n)
                }, t.notifyDisconnect = function(e) {
                    var t = this;
                    t.hasNotifyDisconnected || (t.hasNotifyDisconnected = !0, t.disconnectSocket(), e = e || new r, e.retryCount = t.retryCount, e.willReconnect = t.willReconnect(), t.backoff && t.backoff.reset(), t.retryCount = 0, t.connecting = !1, t.logger.info("link::notifyDisconnect: ondisconnected ", e), t.options.ondisconnect(e))
                }, t.disconnectSocket = function() {
                    var e = this;
                    if (e.isConnected()) try {
                        e.socket.disconnect(), e.socket = null
                    } catch (t) {
                        e.logger.info("link::disconnectSocket: disconnect failed, error ", t)
                    }
                }
            }).call(t, n(9))
        }, function(e, t, n) {
            "use strict";
            var r = n(17).fn,
                o = n(3);
            r.processLink = function(e) {
                switch (e.cmd) {
                    case "heartbeat":
                }
            }, r.startHeartbeat = function() {
                var e = this;
                e.stopHeartbeat(), e.heartbeatTimer = setTimeout(function() {
                    e.sendCmd("heartbeat", null, e.onHeartbeat.bind(e))
                }, o.heartbeatInterval)
            }, r.stopHeartbeat = function() {
                var e = this;
                e.heartbeatTimer && (clearTimeout(e.heartbeatTimer), e.heartbeatTimer = null)
            }, r.onHeartbeat = function(e, t) {
                var n = this;
                e ? n.onCustomError("link::onHeartbeat: heartbeat error", "HEARTBEAT_ERROR", e) : n.startHeartbeat()
            }, r.heartbeat = function() {}
        }, function(e, t, n) {
            "use strict";
            var r = n(17).fn,
                o = n(51);
            r.processMisc = function(e) {
                switch (e.cmd) {
                    case "getSimpleNosToken":
                        e.error || (e.obj = e.content.nosTokens[0]);
                        break;
                    case "getNosToken":
                        e.error || (e.obj = e.content.nosToken);
                        break;
                    case "notifyUploadLog":
                        e.error || this.emitAPI({
                            type: "notifyUploadLog"
                        });
                        break;
                    case "audioToText":
                        e.error || (e.obj.text = e.content.text);
                        break;
                    case "processImage":
                        e.obj.imageOps = o.reverseImageOps(e.obj.imageOps), e.error || (e.obj = {
                            url: e.content.url
                        })
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                o = n(52),
                i = r.merge({}, o.idMap, {
                    chatroom: {
                        id: 13,
                        login: 2,
                        kicked: 3,
                        logout: 4,
                        sendMsg: 6,
                        msg: 7,
                        getChatroomMembers: 8,
                        getHistoryMsgs: 9,
                        markChatroomMember: 11,
                        closeChatroom: 12,
                        getChatroom: 13,
                        updateChatroom: 14,
                        updateMyChatroomMemberInfo: 15,
                        getChatroomMembersInfo: 16,
                        kickChatroomMember: 17,
                        updateChatroomMemberTempMute: 19,
                        queueOffer: 20,
                        queuePoll: 21,
                        queueList: 22,
                        peak: 23,
                        queueDrop: 24,
                        queueInit: 25
                    },
                    user: {
                        id: 3,
                        syncRobot: 16
                    }
                }),
                s = r.merge({}, o.cmdConfig, {
                    login: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.login,
                        params: [{
                            type: "byte",
                            name: "type"
                        }, {
                            type: "Property",
                            name: "login"
                        }, {
                            type: "Property",
                            name: "imLogin"
                        }]
                    },
                    logout: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.logout
                    },
                    sendMsg: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.sendMsg,
                        params: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    getChatroomMembers: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.getChatroomMembers,
                        params: [{
                            type: "byte",
                            name: "type"
                        }, {
                            type: "long",
                            name: "time"
                        }, {
                            type: "int",
                            name: "limit"
                        }]
                    },
                    getHistoryMsgs: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.getHistoryMsgs,
                        params: [{
                            type: "long",
                            name: "timetag"
                        }, {
                            type: "int",
                            name: "limit"
                        }, {
                            type: "bool",
                            name: "reverse"
                        }, {
                            type: "LongArray",
                            name: "msgTypes"
                        }]
                    },
                    markChatroomMember: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.markChatroomMember,
                        params: [{
                            type: "string",
                            name: "account"
                        }, {
                            type: "int",
                            name: "type"
                        }, {
                            type: "bool",
                            name: "isAdd"
                        }, {
                            type: "int",
                            name: "level"
                        }, {
                            type: "string",
                            name: "custom"
                        }]
                    },
                    closeChatroom: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.closeChatroom,
                        params: [{
                            type: "string",
                            name: "custom"
                        }]
                    },
                    getChatroom: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.getChatroom
                    },
                    updateChatroom: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.updateChatroom,
                        params: [{
                            type: "Property",
                            name: "chatroom"
                        }, {
                            type: "bool",
                            name: "needNotify"
                        }, {
                            type: "String",
                            name: "custom"
                        }]
                    },
                    updateMyChatroomMemberInfo: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.updateMyChatroomMemberInfo,
                        params: [{
                            type: "Property",
                            name: "chatroomMember"
                        }, {
                            type: "bool",
                            name: "needNotify"
                        }, {
                            type: "String",
                            name: "custom"
                        }, {
                            type: "bool",
                            name: "needSave"
                        }]
                    },
                    getChatroomMembersInfo: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.getChatroomMembersInfo,
                        params: [{
                            type: "StrArray",
                            name: "accounts"
                        }]
                    },
                    kickChatroomMember: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.kickChatroomMember,
                        params: [{
                            type: "string",
                            name: "account"
                        }, {
                            type: "string",
                            name: "custom"
                        }]
                    },
                    updateChatroomMemberTempMute: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.updateChatroomMemberTempMute,
                        params: [{
                            type: "String",
                            name: "account"
                        }, {
                            type: "long",
                            name: "duration"
                        }, {
                            type: "bool",
                            name: "needNotify"
                        }, {
                            type: "String",
                            name: "custom"
                        }]
                    },
                    queueOffer: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.queueOffer,
                        params: [{
                            type: "string",
                            name: "elementKey"
                        }, {
                            type: "string",
                            name: "elementValue"
                        }, {
                            type: "bool",
                            name: "transient"
                        }]
                    },
                    queuePoll: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.queuePoll,
                        params: [{
                            type: "string",
                            name: "elementKey"
                        }]
                    },
                    queueList: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.queueList
                    },
                    peak: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.peak
                    },
                    queueDrop: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.queueDrop
                    },
                    queueInit: {
                        sid: i.chatroom.id,
                        cid: i.chatroom.queueInit,
                        params: [{
                            type: "int",
                            name: "limit"
                        }]
                    },
                    syncRobot: {
                        sid: i.user.id,
                        cid: i.user.syncRobot,
                        params: [{
                            type: "long",
                            name: "timetag"
                        }]
                    }
                }),
                a = "chatroom",
                c = r.merge({}, o.packetConfig, {
                    "4_10": {
                        service: "notify"
                    },
                    "4_11": {
                        service: "notify"
                    },
                    "3_16": {
                        service: a,
                        cmd: "syncRobot",
                        response: [{
                            type: "PropertyArray",
                            name: "robots",
                            entity: "robot"
                        }]
                    },
                    "13_2": {
                        service: a,
                        cmd: "login",
                        response: [{
                            type: "Property",
                            name: "chatroom"
                        }, {
                            type: "Property",
                            name: "chatroomMember"
                        }]
                    },
                    "13_3": {
                        service: a,
                        cmd: "kicked",
                        response: [{
                            type: "Number",
                            name: "reason"
                        }, {
                            type: "String",
                            name: "custom"
                        }]
                    },
                    "13_4": {
                        service: a,
                        cmd: "logout"
                    },
                    "13_6": {
                        service: a,
                        cmd: "sendMsg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    "13_7": {
                        service: a,
                        cmd: "msg",
                        response: [{
                            type: "Property",
                            name: "msg"
                        }]
                    },
                    "13_8": {
                        service: a,
                        cmd: "getChatroomMembers",
                        response: [{
                            type: "PropertyArray",
                            name: "members",
                            entity: "chatroomMember"
                        }]
                    },
                    "13_9": {
                        service: a,
                        cmd: "getHistoryMsgs",
                        response: [{
                            type: "PropertyArray",
                            name: "msgs",
                            entity: "msg"
                        }]
                    },
                    "13_11": {
                        service: a,
                        cmd: "markChatroomMember",
                        response: [{
                            type: "Property",
                            name: "chatroomMember"
                        }]
                    },
                    "13_12": {
                        service: a,
                        cmd: "closeChatroom"
                    },
                    "13_13": {
                        service: a,
                        cmd: "getChatroom",
                        response: [{
                            type: "Property",
                            name: "chatroom"
                        }]
                    },
                    "13_14": {
                        service: a,
                        cmd: "updateChatroom"
                    },
                    "13_15": {
                        service: a,
                        cmd: "updateMyChatroomMemberInfo"
                    },
                    "13_16": {
                        service: a,
                        cmd: "getChatroomMembersInfo",
                        response: [{
                            type: "PropertyArray",
                            name: "members",
                            entity: "chatroomMember"
                        }]
                    },
                    "13_17": {
                        service: a,
                        cmd: "kickChatroomMember"
                    },
                    "13_19": {
                        service: a,
                        cmd: "updateChatroomMemberTempMute"
                    },
                    "13_20": {
                        service: a,
                        cmd: "queueOffer"
                    },
                    "13_21": {
                        service: a,
                        cmd: "queuePoll",
                        response: [{
                            type: "String",
                            name: "elementKey"
                        }, {
                            type: "String",
                            name: "elementValue"
                        }]
                    },
                    "13_22": {
                        service: a,
                        cmd: "queueList",
                        response: [{
                            type: "KVArray",
                            name: "queueList"
                        }]
                    },
                    "13_23": {
                        service: a,
                        cmd: "peak",
                        response: [{
                            type: "String",
                            name: "elementKey"
                        }, {
                            type: "String",
                            name: "elementValue"
                        }]
                    },
                    "13_24": {
                        service: a,
                        cmd: "queueDrop"
                    },
                    "13_25": {
                        service: a,
                        cmd: "queueInit"
                    }
                });
            e.exports = {
                idMap: i,
                cmdConfig: s,
                packetConfig: c
            }
        }, function(e, t) {
            "use strict";
            e.exports = {
                imLogin: {
                    os: 4,
                    sdkVersion: 6,
                    appLogin: 8,
                    protocolVersion: 9,
                    deviceId: 13,
                    appKey: 18,
                    account: 19,
                    browser: 24,
                    session: 26,
                    token: 1e3
                },
                nosToken: {
                    objectName: 1,
                    token: 2,
                    bucket: 3,
                    expireTime: 4
                },
                audioToText: {
                    url: 2
                },
                imageOp: {
                    type: 0,
                    stripmeta: 1,
                    typeType: 2,
                    blurRadius: 3,
                    blurSigma: 4,
                    qualityQuality: 5,
                    cropX: 6,
                    cropY: 7,
                    cropWidth: 8,
                    cropHeight: 9,
                    rotateAngle: 10,
                    pixelPixel: 11,
                    thumbnailMode: 12,
                    thumbnailWidth: 13,
                    thumbnailHeight: 14,
                    thumbnailAxisX: 15,
                    thumbnailAxisY: 16,
                    thumbnailCenterX: 17,
                    thumbnailCenterY: 18,
                    thumbnailEnlarge: 19,
                    thumbnailToStatic: 20,
                    watermarkType: 21,
                    watermarkGravity: 22,
                    watermarkDissolve: 23,
                    watermarkDx: 24,
                    watermarkDy: 25,
                    watermarkImage: 26,
                    watermarkText: 27,
                    watermarkFont: 28,
                    watermarkFontSize: 29,
                    watermarkFontColor: 30,
                    interlace: 31
                },
                robot: {
                    account: 4,
                    nick: 5,
                    avatar: 6,
                    intro: 7,
                    config: 8,
                    valid: 9,
                    createTime: 10,
                    updateTime: 11,
                    custid: 12,
                    botid: 13,
                    bindTime: 14
                },
                login: {
                    appKey: 1,
                    account: 2,
                    deviceId: 3,
                    chatroomId: 5,
                    chatroomNick: 20,
                    chatroomAvatar: 21,
                    chatroomCustom: 22,
                    chatroomEnterCustom: 23,
                    session: 26,
                    isAnonymous: 38
                },
                chatroom: {
                    id: 1,
                    name: 3,
                    announcement: 4,
                    broadcastUrl: 5,
                    custom: 12,
                    createTime: 14,
                    updateTime: 15,
                    queuelevel: 16,
                    creator: 100,
                    onlineMemberNum: 101,
                    mute: 102
                },
                msg: {
                    idClient: 1,
                    type: 2,
                    attach: 3,
                    custom: 4,
                    resend: 5,
                    userUpdateTime: 6,
                    fromNick: 7,
                    fromAvatar: 8,
                    fromCustom: 9,
                    yidunEnable: 10,
                    antiSpamContent: 11,
                    skipHistory: 12,
                    body: 13,
                    antiSpamBusinessId: 14,
                    time: 20,
                    from: 21,
                    chatroomId: 22,
                    fromClientType: 23
                },
                chatroomMember: {
                    chatroomId: 1,
                    account: 2,
                    type: 3,
                    level: 4,
                    nick: 5,
                    avatar: 6,
                    custom: 7,
                    online: 8,
                    guest: 9,
                    enterTime: 10,
                    blacked: 12,
                    gaged: 13,
                    valid: 14,
                    updateTime: 15,
                    tempMuted: 16,
                    tempMuteDuration: 17
                }
            }
        }, function(e, t) {
            "use strict";
            e.exports = {
                nosToken: {
                    objectName: 1,
                    token: 2,
                    bucket: 3,
                    expireTime: 4
                },
                audioToText: {
                    url: 2
                },
                imageOp: {
                    type: 0,
                    stripmeta: 1,
                    typeType: 2,
                    blurRadius: 3,
                    blurSigma: 4,
                    qualityQuality: 5,
                    cropX: 6,
                    cropY: 7,
                    cropWidth: 8,
                    cropHeight: 9,
                    rotateAngle: 10,
                    pixelPixel: 11,
                    thumbnailMode: 12,
                    thumbnailWidth: 13,
                    thumbnailHeight: 14,
                    thumbnailAxisX: 15,
                    thumbnailAxisY: 16,
                    thumbnailCenterX: 17,
                    thumbnailCenterY: 18,
                    thumbnailEnlarge: 19,
                    thumbnailToStatic: 20,
                    watermarkType: 21,
                    watermarkGravity: 22,
                    watermarkDissolve: 23,
                    watermarkDx: 24,
                    watermarkDy: 25,
                    watermarkImage: 26,
                    watermarkText: 27,
                    watermarkFont: 28,
                    watermarkFontSize: 29,
                    watermarkFontColor: 30,
                    interlace: 31
                },
                robot: {
                    account: 4,
                    nick: 5,
                    avatar: 6,
                    intro: 7,
                    config: 8,
                    valid: 9,
                    createTime: 10,
                    updateTime: 11,
                    custid: 12,
                    botid: 13,
                    bindTime: 14
                },
                login: {
                    os: 4,
                    sdkVersion: 6,
                    appLogin: 8,
                    protocolVersion: 9,
                    deviceId: 13,
                    appKey: 18,
                    account: 19,
                    browser: 24,
                    session: 26,
                    token: 1e3
                },
                loginRes: {
                    lastLoginDeviceId: 17,
                    connectionId: 102,
                    ip: 103,
                    port: 104,
                    country: 106
                },
                loginPort: {
                    type: 3,
                    os: 4,
                    mac: 5,
                    deviceId: 13,
                    account: 19,
                    connectionId: 102,
                    ip: 103,
                    time: 109
                },
                sync: {
                    myInfo: 1,
                    offlineMsgs: 2,
                    teams: 3,
                    netcallMsgs: 6,
                    roamingMsgs: 7,
                    relations: 9,
                    friends: 11,
                    sessions: 12,
                    friendUsers: 13,
                    msgReceipts: 14,
                    myTeamMembers: 15,
                    donnop: 16,
                    deleteMsg: 17,
                    sessionAck: 18,
                    robots: 19,
                    broadcastMsgs: 20,
                    filterMsgs: 100
                },
                donnop: {
                    open: 1
                },
                team: {
                    teamId: 1,
                    name: 3,
                    type: 4,
                    owner: 5,
                    level: 6,
                    selfCustom: 7,
                    valid: 8,
                    memberNum: 9,
                    memberUpdateTime: 10,
                    createTime: 11,
                    updateTime: 12,
                    validToCurrentUser: 13,
                    intro: 14,
                    announcement: 15,
                    joinMode: 16,
                    bits: 17,
                    custom: 18,
                    serverCustom: 19,
                    avatar: 20,
                    beInviteMode: 21,
                    inviteMode: 22,
                    updateTeamMode: 23,
                    updateCustomMode: 24,
                    mute: 100
                },
                teamMember: {
                    teamId: 1,
                    account: 3,
                    type: 4,
                    nickInTeam: 5,
                    bits: 7,
                    active: 8,
                    valid: 9,
                    joinTime: 10,
                    updateTime: 11,
                    custom: 12,
                    mute: 13
                },
                msg: {
                    scene: 0,
                    to: 1,
                    from: 2,
                    fromClientType: 4,
                    fromDeviceId: 5,
                    fromNick: 6,
                    time: 7,
                    type: 8,
                    body: 9,
                    attach: 10,
                    idClient: 11,
                    idServer: 12,
                    resend: 13,
                    userUpdateTime: 14,
                    custom: 15,
                    pushPayload: 16,
                    pushContent: 17,
                    apnsAccounts: 18,
                    apnsContent: 19,
                    apnsForcePush: 20,
                    yidunEnable: 21,
                    antiSpamContent: 22,
                    antiSpamBusinessId: 23,
                    isHistoryable: 100,
                    isRoamingable: 101,
                    isSyncable: 102,
                    isMuted: 104,
                    cc: 105,
                    isPushable: 107,
                    isOfflinable: 108,
                    isUnreadable: 109,
                    needPushNick: 110
                },
                msgReceipt: {
                    to: 1,
                    from: 2,
                    time: 7,
                    idClient: 11
                },
                sysMsg: {
                    time: 0,
                    type: 1,
                    to: 2,
                    from: 3,
                    ps: 4,
                    attach: 5,
                    idServer: 6,
                    sendToOnlineUsersOnly: 7,
                    apnsText: 8,
                    pushPayload: 9,
                    deletedIdClient: 10,
                    deletedIdServer: 11,
                    yidunEnable: 12,
                    antiSpamContent: 13,
                    deletedMsgTime: 14,
                    deletedMsgFromNick: 15,
                    opeAccount: 16,
                    cc: 105,
                    isPushable: 107,
                    isUnreadable: 109,
                    needPushNick: 110
                },
                broadcastMsg: {
                    broadcastId: 1,
                    fromAccid: 2,
                    fromUid: 3,
                    timestamp: 4,
                    body: 5
                },
                friend: {
                    account: 4,
                    flag: 5,
                    beflag: 6,
                    source: 7,
                    alias: 8,
                    bits: 9,
                    custom: 10,
                    createTime: 11,
                    updateTime: 12
                },
                user: {
                    account: 1,
                    nick: 3,
                    avatar: 4,
                    sign: 5,
                    gender: 6,
                    email: 7,
                    birth: 8,
                    tel: 9,
                    custom: 10,
                    createTime: 12,
                    updateTime: 13
                },
                specialRelation: {
                    account: 0,
                    isMuted: 1,
                    isBlacked: 2,
                    createTime: 3,
                    updateTime: 4
                },
                msgType: {
                    text: 0,
                    picture: 1,
                    audio: 2,
                    video: 3,
                    location: 4,
                    notification: 5,
                    file: 6,
                    netcall_audio: 7,
                    netcall_vedio: 8,
                    datatunnel_new: 9,
                    tips: 10,
                    robot: 11,
                    custom: 100
                },
                msgEvent: {
                    type: 1,
                    value: 2,
                    idClient: 3,
                    custom: 4,
                    validTime: 5,
                    broadcastType: 6,
                    sync: 7,
                    validTimeType: 8,
                    durable: 9,
                    time: 10,
                    idServer: 11,
                    clientType: 12,
                    serverConfig: 13,
                    serverCustom: 14,
                    appid: 101,
                    account: 103,
                    enableMultiClient: 104,
                    consid: 106
                },
                msgEventSubscribe: {
                    type: 1,
                    subscribeTime: 2,
                    sync: 3,
                    to: 102,
                    from: 104,
                    time: 105
                }
            }
        }, function(e, t) {
            "use strict";
            e.exports = {
                imLogin: {
                    4: "os",
                    6: "sdkVersion",
                    8: "appLogin",
                    9: "protocolVersion",
                    13: "deviceId",
                    18: "appKey",
                    19: "account",
                    24: "browser",
                    26: "session",
                    1000: "token"
                },
                nosToken: {
                    1: "objectName",
                    2: "token",
                    3: "bucket",
                    4: "expireTime"
                },
                audioToText: {
                    2: "url"
                },
                imageOp: {
                    0: "type",
                    1: "stripmeta",
                    2: "typeType",
                    3: "blurRadius",
                    4: "blurSigma",
                    5: "qualityQuality",
                    6: "cropX",
                    7: "cropY",
                    8: "cropWidth",
                    9: "cropHeight",
                    10: "rotateAngle",
                    11: "pixelPixel",
                    12: "thumbnailMode",
                    13: "thumbnailWidth",
                    14: "thumbnailHeight",
                    15: "thumbnailAxisX",
                    16: "thumbnailAxisY",
                    17: "thumbnailCenterX",
                    18: "thumbnailCenterY",
                    19: "thumbnailEnlarge",
                    20: "thumbnailToStatic",
                    21: "watermarkType",
                    22: "watermarkGravity",
                    23: "watermarkDissolve",
                    24: "watermarkDx",
                    25: "watermarkDy",
                    26: "watermarkImage",
                    27: "watermarkText",
                    28: "watermarkFont",
                    29: "watermarkFontSize",
                    30: "watermarkFontColor",
                    31: "interlace"
                },
                robot: {
                    4: "account",
                    5: "nick",
                    6: "avatar",
                    7: "intro",
                    8: "config",
                    9: "valid",
                    10: "createTime",
                    11: "updateTime",
                    12: "custid",
                    13: "botid",
                    14: "bindTime"
                },
                login: {
                    1: "appKey",
                    2: "account",
                    3: "deviceId",
                    5: "chatroomId",
                    20: "chatroomNick",
                    21: "chatroomAvatar",
                    22: "chatroomCustom",
                    23: "chatroomEnterCustom",
                    26: "session",
                    38: "isAnonymous"
                },
                chatroom: {
                    1: "id",
                    3: "name",
                    4: "announcement",
                    5: "broadcastUrl",
                    12: "custom",
                    14: "createTime",
                    15: "updateTime",
                    16: "queuelevel",
                    100: "creator",
                    101: "onlineMemberNum",
                    102: "mute"
                },
                msg: {
                    1: "idClient",
                    2: "type",
                    3: "attach",
                    4: "custom",
                    5: "resend",
                    6: "userUpdateTime",
                    7: "fromNick",
                    8: "fromAvatar",
                    9: "fromCustom",
                    10: "yidunEnable",
                    11: "antiSpamContent",
                    12: "skipHistory",
                    13: "body",
                    14: "antiSpamBusinessId",
                    20: "time",
                    21: "from",
                    22: "chatroomId",
                    23: "fromClientType"
                },
                chatroomMember: {
                    1: "chatroomId",
                    2: "account",
                    3: "type",
                    4: "level",
                    5: "nick",
                    6: "avatar",
                    7: "custom",
                    8: "online",
                    9: "guest",
                    10: "enterTime",
                    12: "blacked",
                    13: "gaged",
                    14: "valid",
                    15: "updateTime",
                    16: "tempMuted",
                    17: "tempMuteDuration"
                }
            }
        }, function(e, t) {
            "use strict";
            e.exports = {
                nosToken: {
                    1: "objectName",
                    2: "token",
                    3: "bucket",
                    4: "expireTime"
                },
                audioToText: {
                    2: "url"
                },
                imageOp: {
                    0: "type",
                    1: "stripmeta",
                    2: "typeType",
                    3: "blurRadius",
                    4: "blurSigma",
                    5: "qualityQuality",
                    6: "cropX",
                    7: "cropY",
                    8: "cropWidth",
                    9: "cropHeight",
                    10: "rotateAngle",
                    11: "pixelPixel",
                    12: "thumbnailMode",
                    13: "thumbnailWidth",
                    14: "thumbnailHeight",
                    15: "thumbnailAxisX",
                    16: "thumbnailAxisY",
                    17: "thumbnailCenterX",
                    18: "thumbnailCenterY",
                    19: "thumbnailEnlarge",
                    20: "thumbnailToStatic",
                    21: "watermarkType",
                    22: "watermarkGravity",
                    23: "watermarkDissolve",
                    24: "watermarkDx",
                    25: "watermarkDy",
                    26: "watermarkImage",
                    27: "watermarkText",
                    28: "watermarkFont",
                    29: "watermarkFontSize",
                    30: "watermarkFontColor",
                    31: "interlace"
                },
                robot: {
                    4: "account",
                    5: "nick",
                    6: "avatar",
                    7: "intro",
                    8: "config",
                    9: "valid",
                    10: "createTime",
                    11: "updateTime",
                    12: "custid",
                    13: "botid",
                    14: "bindTime"
                },
                login: {
                    4: "os",
                    6: "sdkVersion",
                    8: "appLogin",
                    9: "protocolVersion",
                    13: "deviceId",
                    18: "appKey",
                    19: "account",
                    24: "browser",
                    26: "session",
                    1000: "token"
                },
                loginRes: {
                    17: "lastLoginDeviceId",
                    102: "connectionId",
                    103: "ip",
                    104: "port",
                    106: "country"
                },
                loginPort: {
                    3: "type",
                    4: "os",
                    5: "mac",
                    13: "deviceId",
                    19: "account",
                    102: "connectionId",
                    103: "ip",
                    109: "time"
                },
                sync: {
                    1: "myInfo",
                    2: "offlineMsgs",
                    3: "teams",
                    6: "netcallMsgs",
                    7: "roamingMsgs",
                    9: "relations",
                    11: "friends",
                    12: "sessions",
                    13: "friendUsers",
                    14: "msgReceipts",
                    15: "myTeamMembers",
                    16: "donnop",
                    17: "deleteMsg",
                    18: "sessionAck",
                    19: "robots",
                    20: "broadcastMsgs",
                    100: "filterMsgs"
                },
                donnop: {
                    1: "open"
                },
                team: {
                    1: "teamId",
                    3: "name",
                    4: "type",
                    5: "owner",
                    6: "level",
                    7: "selfCustom",
                    8: "valid",
                    9: "memberNum",
                    10: "memberUpdateTime",
                    11: "createTime",
                    12: "updateTime",
                    13: "validToCurrentUser",
                    14: "intro",
                    15: "announcement",
                    16: "joinMode",
                    17: "bits",
                    18: "custom",
                    19: "serverCustom",
                    20: "avatar",
                    21: "beInviteMode",
                    22: "inviteMode",
                    23: "updateTeamMode",
                    24: "updateCustomMode",
                    100: "mute"
                },
                teamMember: {
                    1: "teamId",
                    3: "account",
                    4: "type",
                    5: "nickInTeam",
                    7: "bits",
                    8: "active",
                    9: "valid",
                    10: "joinTime",
                    11: "updateTime",
                    12: "custom",
                    13: "mute"
                },
                msg: {
                    0: "scene",
                    1: "to",
                    2: "from",
                    4: "fromClientType",
                    5: "fromDeviceId",
                    6: "fromNick",
                    7: "time",
                    8: "type",
                    9: "body",
                    10: "attach",
                    11: "idClient",
                    12: "idServer",
                    13: "resend",
                    14: "userUpdateTime",
                    15: "custom",
                    16: "pushPayload",
                    17: "pushContent",
                    18: "apnsAccounts",
                    19: "apnsContent",
                    20: "apnsForcePush",
                    21: "yidunEnable",
                    22: "antiSpamContent",
                    23: "antiSpamBusinessId",
                    100: "isHistoryable",
                    101: "isRoamingable",
                    102: "isSyncable",
                    104: "isMuted",
                    105: "cc",
                    107: "isPushable",
                    108: "isOfflinable",
                    109: "isUnreadable",
                    110: "needPushNick"
                },
                msgReceipt: {
                    1: "to",
                    2: "from",
                    7: "time",
                    11: "idClient"
                },
                sysMsg: {
                    0: "time",
                    1: "type",
                    2: "to",
                    3: "from",
                    4: "ps",
                    5: "attach",
                    6: "idServer",
                    7: "sendToOnlineUsersOnly",
                    8: "apnsText",
                    9: "pushPayload",
                    10: "deletedIdClient",
                    11: "deletedIdServer",
                    12: "yidunEnable",
                    13: "antiSpamContent",
                    14: "deletedMsgTime",
                    15: "deletedMsgFromNick",
                    16: "opeAccount",
                    105: "cc",
                    107: "isPushable",
                    109: "isUnreadable",
                    110: "needPushNick"
                },
                broadcastMsg: {
                    1: "broadcastId",
                    2: "fromAccid",
                    3: "fromUid",
                    4: "timestamp",
                    5: "body"
                },
                friend: {
                    4: "account",
                    5: "flag",
                    6: "beflag",
                    7: "source",
                    8: "alias",
                    9: "bits",
                    10: "custom",
                    11: "createTime",
                    12: "updateTime"
                },
                user: {
                    1: "account",
                    3: "nick",
                    4: "avatar",
                    5: "sign",
                    6: "gender",
                    7: "email",
                    8: "birth",
                    9: "tel",
                    10: "custom",
                    12: "createTime",
                    13: "updateTime"
                },
                specialRelation: {
                    0: "account",
                    1: "isMuted",
                    2: "isBlacked",
                    3: "createTime",
                    4: "updateTime"
                },
                msgType: {
                    0: "text",
                    1: "picture",
                    2: "audio",
                    3: "video",
                    4: "location",
                    5: "notification",
                    6: "file",
                    7: "netcall_audio",
                    8: "netcall_vedio",
                    9: "datatunnel_new",
                    10: "tips",
                    11: "robot",
                    100: "custom"
                },
                msgEvent: {
                    1: "type",
                    2: "value",
                    3: "idClient",
                    4: "custom",
                    5: "validTime",
                    6: "broadcastType",
                    7: "sync",
                    8: "validTimeType",
                    9: "durable",
                    10: "time",
                    11: "idServer",
                    12: "clientType",
                    13: "serverConfig",
                    14: "serverCustom",
                    101: "appid",
                    103: "account",
                    104: "enableMultiClient",
                    106: "consid"
                },
                msgEventSubscribe: {
                    1: "type",
                    2: "subscribeTime",
                    3: "sync",
                    102: "to",
                    104: "from",
                    105: "time"
                }
            }
        }, , , , function(e, t, n) {
            "use strict";
            var r = n(10),
                o = n(35),
                i = function() {
                    var e = /json/i,
                        t = /post/i;
                    return function(n, i) {
                        i = i || {};
                        var s = i.data = i.data || {},
                            a = i.headers = i.headers || {},
                            c = r.checkWithDefault(a, "Accept", "application/json"),
                            u = r.checkWithDefault(a, "Content-Type", "application/json");
                        return e.test(c) && (i.type = "json"), t.test(i.method) && e.test(u) && (i.data = JSON.stringify(s)), o(n, i)
                    }
                }();
            e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                t.init(), s.call(t, e)
            }
            var o = n(10),
                i = n(53),
                s = n(36),
                a = {},
                c = s.prototype,
                u = r.prototype = Object.create(c);
            u.init = function() {
                function e(e) {
                    var t = e.data;
                    if (0 === t.indexOf(n)) {
                        t = JSON.parse(t.replace(n, ""));
                        var r = t.key,
                            o = a[r];
                        o && (delete a[r], t.result = decodeURIComponent(t.result || ""), o.onLoad(t))
                    }
                }
                function t() {
                    if (!r) {
                        r = !0;
                        var t = o.getGlobal();
                        t.postMessage ? o.on(t, "message", e) : i.addMsgListener(e)
                    }
                }
                var n = "NEJ-AJAX-DATA:",
                    r = !1;
                return function() {
                    t()
                }
            }(), u.doSend = function() {
                var e = this,
                    t = e.options,
                    n = o.url2origin(t.url),
                    r = t.proxyUrl || n + "/res/nej_proxy_frame.html",
                    s = a[r];
                if (o.isArray(s)) return void s.push(e.doSend.bind(e, t));
                if (!s) return a[r] = [e.doSend.bind(e, t)], void o.createIframe({
                    src: r,
                    onload: function(e) {
                        var t = a[r];
                        a[r] = o.target(e).contentWindow, t.forEach(function(e) {
                            try {
                                e()
                            } catch (t) {
                                console.error(t)
                            }
                        })
                    }
                });
                if (!e.aborted) {
                    var c = e.key = o.uniqueID();
                    a[c] = e;
                    var u = o.fetch({
                        method: "GET",
                        url: "",
                        data: null,
                        headers: {},
                        timeout: 0
                    }, t);
                    u.key = c, i.postMessage(s, {
                        data: u
                    }), e.afterSend()
                }
            }, u.abort = function() {
                var e = this;
                e.aborted = !0, delete a[e.key], c.abort.call(e)
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                t.init(), i.call(t, e)
            }
            var o = n(10),
                i = n(36),
                s = n(53),
                a = "NEJ-UPLOAD-RESULT:",
                c = {},
                u = i.prototype,
                l = r.prototype = Object.create(u);
            l.init = function() {
                function e(e) {
                    var t = e.data;
                    if (0 === t.indexOf(a)) {
                        t = JSON.parse(t.replace(a, ""));
                        var n = t.key,
                            r = c[n];
                        r && (delete c[n], t.result = decodeURIComponent(t.result || ""), r.onLoad(t.result))
                    }
                }
                function t() {
                    if (!n) {
                        n = !0;
                        var t = o.getGlobal();
                        t.postMessage ? o.on(t, "message", e) : (s.addMsgListener(e), s.startTimer())
                    }
                }
                var n = !1;
                return function() {
                    t()
                }
            }(), l.doSend = function() {
                function e() {
                    l.forEach(function(e, t) {
                        var n = d[t];
                        n.parentNode && (e.name = n.name, o.isFunction(e.setAttribute) && e.setAttribute("form", n.getAttribute("form")), n.parentNode.replaceChild(e, n))
                    })
                }
                var t = this,
                    n = t.options,
                    r = t.key = "zoro-ajax-upload-iframe-" + o.uniqueID();
                c[r] = t;
                var i = t.form = o.html2node('<form style="display:none;"></form>');
                document.body.appendChild(i), i.target = r, i.method = "POST", i.enctype = "multipart/form-data", i.encoding = "multipart/form-data";
                var s = n.url,
                    a = o.genUrlSep(s);
                i.action = s + a + "_proxy_=form";
                var u = n.data,
                    l = [],
                    d = [];
                u && o.getKeys(u, n.putFileAtEnd).forEach(function(e) {
                    var t = u[e];
                    if (t.tagName && "INPUT" === t.tagName.toUpperCase()) {
                        if ("file" === t.type) {
                            var n = t,
                                r = n.cloneNode(!0);
                            n.parentNode.insertBefore(r, n);
                            var s = o.dataset(n, "name");
                            s && (n.name = s), i.appendChild(n), o.isFunction(n.setAttribute) && (n.setAttribute("form", ""), n.removeAttribute("form")), l.push(t), d.push(r)
                        }
                    } else {
                        var a = o.html2node('<input type="hidden"/>');
                        a.name = e, a.value = t, i.appendChild(a)
                    }
                });
                var f = t.iframe = o.createIframe({
                    name: r,
                    onload: function() {
                        return t.aborted ? void e() : (o.on(f, "load", t.checkResult.bind(t)), i.submit(), e(), void t.afterSend())
                    }
                })
            }, l.checkResult = function() {
                var e, t, n = this;
                try {
                    if (e = n.iframe.contentWindow.document.body, t = (e.innerText || e.textContent || "").trim(), t.indexOf(a) >= 0 || e.innerHTML.indexOf(a) >= 0) return
                } catch (r) {
                    return void console.error("ignore error if not same domain,", r)
                }
                n.onLoad(t)
            }, l.onLoad = function(e) {
                var t = this;
                u.onLoad.call(t, {
                    status: 200,
                    result: e
                }), o.remove(t.form), o.remove(t.iframe), u.destroy.call(t)
            }, l.destroy = function() {
                o.remove(this.iframe), o.remove(this.form)
            }, l.abort = function() {
                var e = this;
                e.aborted = !0, delete c[e.key], u.abort.call(e)
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                e.onuploading && t.on("uploading", e.onuploading), i.call(t, e)
            }
            var o = n(10),
                i = n(36),
                s = i.prototype,
                a = r.prototype = Object.create(s);
            a.doSend = function() {
                var e = this,
                    t = e.options,
                    n = t.headers,
                    r = e.xhr = new XMLHttpRequest;
                if ("multipart/form-data" === n["Content-Type"]) {
                    delete n["Content-Type"], r.upload.onprogress = e.onProgress.bind(e), r.upload.onload = e.onProgress.bind(e);
                    var i = t.data;
                    t.data = new window.FormData, i && o.getKeys(i, t.putFileAtEnd).forEach(function(e) {
                        var n = i[e];
                        n.tagName && "INPUT" === n.tagName.toUpperCase() ? "file" === n.type && [].forEach.call(n.files, function(e) {
                            t.data.append(o.dataset(n, "name") || n.name || e.name || "file-" + o.uniqueID(), e)
                        }) : t.data.append(e, n)
                    })
                }
                r.onreadystatechange = e.onStateChange.bind(e), 0 !== t.timeout && (e.timer = setTimeout(e.onTimeout.bind(e), t.timeout)), r.open(t.method, t.url, !t.sync), Object.keys(n).forEach(function(e) {
                    r.setRequestHeader(e, n[e])
                }), t.cookie && "withCredentials" in r && (r.withCredentials = !0), r.send(t.data), e.afterSend()
            }, a.onProgress = function(e) {
                e.lengthComputable && e.loaded <= e.total && this.emit("uploading", e)
            }, a.onStateChange = function() {
                var e = this,
                    t = e.xhr;
                4 === t.readyState && e.onLoad({
                    status: t.status,
                    result: t.responseText || ""
                })
            }, a.getResponseHeader = function(e) {
                var t = this.xhr;
                return t ? t.getResponseHeader(e) : ""
            }, a.destroy = function() {
                var e = this;
                clearTimeout(e.timer);
                try {
                    e.xhr.onreadystatechange = o.f, e.xhr.abort()
                } catch (t) {
                    console.error("ignore error ajax destroy,", t)
                }
                s.destroy.call(e)
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = n(35),
                o = function(e, t) {
                    return t.method = "POST", t.headers = t.headers || {}, t.headers["Content-Type"] = "multipart/form-data", t.timeout = 0, t.type = t.type || "json", r(e, t)
                };
            e.exports = o
        }, function(e, t, n) {
            (function(e) {
                "use strict";
                "undefined" != typeof window && (window.console || e.env.WEIXIN_APP || (window.console = {
                    log: function() {},
                    info: function() {},
                    warn: function() {},
                    error: function() {}
                }))
            }).call(t, n(9))
        }, function(e, t, n) {
            "use strict";

            function r() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i.merge(this, {
                    options: e,
                    debug: !1,
                    api: "log",
                    style: "color:blue;",
                    log: i.emptyFunc,
                    info: i.emptyFunc,
                    warn: i.emptyFunc,
                    error: i.emptyFunc
                }), this.prefix = e.prefix || "", this.setDebug(e.debug)
            }
            var o = n(12),
                i = n(1),
                s = r.prototype,
                a = ["Chrome", "Safari", "Firefox"];
            s.setDebug = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = this;
                if (t.debug = e, e.style && (t.style = e.style), t.debug && i.exist(console)) {
                    var n = console;
                    t.log = function() {
                        var e = t.formatArgs(arguments);
                        a.indexOf(o.name) !== -1 && i.isString(e[0]) && (e[0] = "%c" + e[0], e.splice(1, 0, t.style)), t._log("log", e)
                    }, t.info = function() {
                        var e = t.formatArgs(arguments);
                        t._log("info", e)
                    }, t.warn = function() {
                        var e = t.formatArgs(arguments);
                        t._log("warn", e)
                    }, t.error = function() {
                        var e = t.formatArgs(arguments);
                        t._log("error", e)
                    }, t._log = function(e, r) {
                        var o = t.options.logFunc;
                        if (o && (o[e] && (o = o[e]), i.isFunction(o))) return void o.apply(null, r);
                        if (n[e]) try {
                            n[e].apply ? t.chrome(e, r) : t.ie(e, r)
                        } catch (s) {}
                    }, t.chrome = function(e, r) {
                        a.indexOf(o.name) !== -1 ? n[e].apply(n, r) : t.ie(e, r)
                    }, t.ie = function(e, t) {
                        t.forEach(function(t) {
                            n[e](JSON.stringify(t, null, 4))
                        })
                    }
                }
            }, s.formatArgs = function(e) {
                var t = this;
                e = [].slice.call(e, 0);
                var n = new Date,
                    r = n.getFullYear() + "-" + c(n.getMonth() + 1) + "-" + c(n.getDate()) + " " + c(n.getHours()) + ":" + c(n.getMinutes()) + ":" + c(n.getSeconds()) + ":" + c(n.getMilliseconds(), 3),
                    o = "[NIM SDK LOG " + r + " " + +n + " " + t.prefix + "]\t";
                return i.isString(e[0]) ? e[0] = o + e[0] : e.splice(0, 0, o), e.forEach(function(t, n) {
                    (i.isArray(t) || i.isObject(t)) && (e[n] = i.simpleClone(t))
                }), e
            };
            var c = function(e, t) {
                t = t || 2;
                for (var n = "" + e; n.length < t;) n = "0" + n;
                return n
            };
            e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                o = {
                    file: {
                        md5: "$(Etag)",
                        size: "$(ObjectSize)"
                    },
                    image: {
                        md5: "$(Etag)",
                        size: "$(ObjectSize)",
                        w: "$(ImageInfo.Width)",
                        h: "$(ImageInfo.Height)",
                        orientation: "$(ImageInfo.Orientation)"
                    },
                    audio: {
                        md5: "$(Etag)",
                        size: "$(ObjectSize)",
                        dur: "$(AVinfo.Audio.Duration)"
                    },
                    video: {
                        md5: "$(Etag)",
                        size: "$(ObjectSize)",
                        dur: "$(AVinfo.Video.Duration)",
                        w: "$(AVinfo.Video.Width)",
                        h: "$(AVinfo.Video.Height)"
                    }
                },
                i = {};
            i.genResponseBody = function(e) {
                return e = e || "file", o[e]
            }, i.parseResponse = function(e, t) {
                r.notundef(e.size) && (e.size = +e.size), r.notundef(e.w) && (e.w = +e.w), r.notundef(e.h) && (e.h = +e.h), r.notundef(e.dur) && (e.dur = +e.dur);
                var n = e.orientation;
                if (r.notundef(n) && (delete e.orientation, t && ("right, top" === n || "left, bottom" === n))) {
                    var o = e.w;
                    e.w = e.h, e.h = o
                }
                return e
            }, e.exports = i
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                var t = this;
                t.options = o.copy(e), o.verifyOptions(e, "url fileName"), o.verifyParamPresentJustOne(e, "blob fileInput"), o.verifyCallback(e, "beginupload uploadprogress uploaddone"), e.fileInput && (e.fileInput = o.verifyFileInput(e.fileInput)), e.type && o.verifyFileType(e.type), e.timeout ? o.verifyParamType("timeout", e.timeout, "number") : e.timeout = 6e5, o.verifyFileUploadCallback(e), e.data = {};
                var n = e.fileName,
                    r = e.fileInput;
                if (c) if (r) {
                    var a = e.type ? o.filterFiles(r.files, e.type) : [].slice.call(r.files, 0);
                    if (!a || !a.length) return void e.uploaddone(i.newWrongFileTypeError("未读取到" + e.type + "类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了" + e.type + "类型的文件"));
                    var l = r.files[0].size;
                    if (l > u) return void e.uploaddone(i.newFileTooLargeError("文件大小超过100M"));
                    e.data[n] = a[0]
                } else e.blob && (e.data[n] = e.blob);
                else o.dataset(r, "name", n), e.data.input = r;
                e.params && o.merge(e.data, e.params);
                var d = {
                    data: e.data,
                    onaftersend: function() {
                        e.beginupload(t)
                    },
                    onuploading: function(t) {
                        var n = Math.floor(1e4 * t.loaded / t.total) / 100,
                            r = {
                                total: t.total,
                                loaded: t.loaded,
                                percentage: n,
                                percentageText: n + "%"
                            };
                        e.fileInput && (r.fileInput = e.fileInput), e.blob && (r.blob = e.blob), e.uploadprogress(r)
                    },
                    onload: function(n) {
                        n.Error ? t.onError(n) : e.uploaddone(null, n)
                    },
                    onerror: function(n) {
                        try {
                            if (n.result) var r = JSON.parse(n.result);
                            else r = n;
                            t.onError(r)
                        } catch (o) {
                            console.error("ignore error if could not parse obj.result", o), e.uploaddone(new i(n.message, n.code), t.options)
                        }
                    }
                };
                c || (d.mode = "iframe"), d.putFileAtEnd = !0, t.sn = s(e.url, d)
            }
            var o = n(1),
                i = n(5),
                s = n(25).upload,
                a = n(25).abort,
                c = o.supportFormData,
                u = 104857600;
            r.prototype.onError = function(e) {
                var t, n, r, o = this,
                    s = o.options;
                e = e || {}, t = e.Error || e || {}, n = t.Code || t.code || "unknown", r = t.Message || t.message || "未知错误", s.uploaddone(new i(n + "(" + r + ")", n))
            }, r.prototype.abort = function() {
                a(this.sn)
            }, e.exports = r
        }, function(e, t, n) {
            var r, o;
            !
                function(i, s) {
                    "use strict";
                    r = s, o = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== o && (e.exports = o))
                }(this, function() {
                    var e, t, n = Array,
                        r = n.prototype,
                        o = Object,
                        i = o.prototype,
                        s = Function,
                        a = s.prototype,
                        c = String,
                        u = c.prototype,
                        l = Number,
                        d = l.prototype,
                        f = r.slice,
                        p = r.splice,
                        m = r.push,
                        y = r.unshift,
                        g = r.concat,
                        h = r.join,
                        v = a.call,
                        b = a.apply,
                        M = Math.max,
                        T = Math.min,
                        S = i.toString,
                        k = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                        w = Function.prototype.toString,
                        O = /^\s*class /,
                        C = function(e) {
                            try {
                                var t = w.call(e),
                                    n = t.replace(/\/\/.*\n/g, ""),
                                    r = n.replace(/\/\*[.\s\S]*\*\//g, ""),
                                    o = r.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                                return O.test(o)
                            } catch (i) {
                                return !1
                            }
                        },
                        I = function(e) {
                            try {
                                return !C(e) && (w.call(e), !0)
                            } catch (t) {
                                return !1
                            }
                        },
                        x = "[object Function]",
                        _ = "[object GeneratorFunction]",
                        e = function(e) {
                            if (!e) return !1;
                            if ("function" != typeof e && "object" != typeof e) return !1;
                            if (k) return I(e);
                            if (C(e)) return !1;
                            var t = S.call(e);
                            return t === x || t === _
                        },
                        E = RegExp.prototype.exec,
                        P = function(e) {
                            try {
                                return E.call(e), !0
                            } catch (t) {
                                return !1
                            }
                        },
                        A = "[object RegExp]";
                    t = function(e) {
                        return "object" == typeof e && (k ? P(e) : S.call(e) === A)
                    };
                    var j, R = String.prototype.valueOf,
                        F = function(e) {
                            try {
                                return R.call(e), !0
                            } catch (t) {
                                return !1
                            }
                        },
                        N = "[object String]";
                    j = function(e) {
                        return "string" == typeof e || "object" == typeof e && (k ? F(e) : S.call(e) === N)
                    };
                    var U = o.defineProperty &&
                        function() {
                            try {
                                var e = {};
                                o.defineProperty(e, "x", {
                                    enumerable: !1,
                                    value: e
                                });
                                for (var t in e) return !1;
                                return e.x === e
                            } catch (n) {
                                return !1
                            }
                        }(), D = function(e) {
                        var t;
                        return t = U ?
                            function(e, t, n, r) {
                                !r && t in e || o.defineProperty(e, t, {
                                    configurable: !0,
                                    enumerable: !1,
                                    writable: !0,
                                    value: n
                                })
                            } : function(e, t, n, r) {
                                !r && t in e || (e[t] = n)
                            }, function(n, r, o) {
                            for (var i in r) e.call(r, i) && t(n, i, r[i], o)
                        }
                    }(i.hasOwnProperty), B = function(e) {
                        var t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }, L = l.isNaN ||
                        function(e) {
                            return e !== e
                        }, q = {
                        ToInteger: function(e) {
                            var t = +e;
                            return L(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
                        },
                        ToPrimitive: function(t) {
                            var n, r, o;
                            if (B(t)) return t;
                            if (r = t.valueOf, e(r) && (n = r.call(t), B(n))) return n;
                            if (o = t.toString, e(o) && (n = o.call(t), B(n))) return n;
                            throw new TypeError
                        },
                        ToObject: function(e) {
                            if (null == e) throw new TypeError("can't convert " + e + " to object");
                            return o(e)
                        },
                        ToUint32: function(e) {
                            return e >>> 0
                        }
                    }, W = function() {};
                    D(a, {
                        bind: function(t) {
                            var n = this;
                            if (!e(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
                            for (var r, i = f.call(arguments, 1), a = function() {
                                if (this instanceof r) {
                                    var e = b.call(n, this, g.call(i, f.call(arguments)));
                                    return o(e) === e ? e : this
                                }
                                return b.call(n, t, g.call(i, f.call(arguments)))
                            }, c = M(0, n.length - i.length), u = [], l = 0; l < c; l++) m.call(u, "$" + l);
                            return r = s("binder", "return function (" + h.call(u, ",") + "){ return binder.apply(this, arguments); }")(a), n.prototype && (W.prototype = n.prototype, r.prototype = new W, W.prototype = null), r
                        }
                    });
                    var H = v.bind(i.hasOwnProperty),
                        $ = v.bind(i.toString),
                        J = v.bind(f),
                        X = b.bind(f);
                    if ("object" == typeof document && document && document.documentElement) try {
                        J(document.documentElement.childNodes)
                    } catch (V) {
                        var K = J,
                            z = X;
                        J = function(e) {
                            for (var t = [], n = e.length; n-- > 0;) t[n] = e[n];
                            return z(t, K(arguments, 1))
                        }, X = function(e, t) {
                            return z(J(e), t)
                        }
                    }
                    var G = v.bind(u.slice),
                        Y = v.bind(u.split),
                        Z = v.bind(u.indexOf),
                        Q = v.bind(m),
                        ee = v.bind(i.propertyIsEnumerable),
                        te = v.bind(r.sort),
                        ne = n.isArray ||
                            function(e) {
                                return "[object Array]" === $(e)
                            }, re = 1 !== [].unshift(0);
                    D(r, {
                        unshift: function() {
                            return y.apply(this, arguments), this.length
                        }
                    }, re), D(n, {
                        isArray: ne
                    });
                    var oe = o("a"),
                        ie = "a" !== oe[0] || !(0 in oe),
                        se = function(e) {
                            var t = !0,
                                n = !0,
                                r = !1;
                            if (e) try {
                                e.call("foo", function(e, n, r) {
                                    "object" != typeof r && (t = !1)
                                }), e.call([1], function() {
                                    "use strict";
                                    n = "string" == typeof this
                                }, "x")
                            } catch (o) {
                                r = !0
                            }
                            return !!e && !r && t && n
                        };
                    D(r, {
                        forEach: function(t) {
                            var n, r = q.ToObject(this),
                                o = ie && j(this) ? Y(this, "") : r,
                                i = -1,
                                s = q.ToUint32(o.length);
                            if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.forEach callback must be a function");
                            for (; ++i < s;) i in o && ("undefined" == typeof n ? t(o[i], i, r) : t.call(n, o[i], i, r))
                        }
                    }, !se(r.forEach)), D(r, {
                        map: function(t) {
                            var r, o = q.ToObject(this),
                                i = ie && j(this) ? Y(this, "") : o,
                                s = q.ToUint32(i.length),
                                a = n(s);
                            if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.map callback must be a function");
                            for (var c = 0; c < s; c++) c in i && ("undefined" == typeof r ? a[c] = t(i[c], c, o) : a[c] = t.call(r, i[c], c, o));
                            return a
                        }
                    }, !se(r.map)), D(r, {
                        filter: function(t) {
                            var n, r, o = q.ToObject(this),
                                i = ie && j(this) ? Y(this, "") : o,
                                s = q.ToUint32(i.length),
                                a = [];
                            if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.filter callback must be a function");
                            for (var c = 0; c < s; c++) c in i && (n = i[c], ("undefined" == typeof r ? t(n, c, o) : t.call(r, n, c, o)) && Q(a, n));
                            return a
                        }
                    }, !se(r.filter)), D(r, {
                        every: function(t) {
                            var n, r = q.ToObject(this),
                                o = ie && j(this) ? Y(this, "") : r,
                                i = q.ToUint32(o.length);
                            if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.every callback must be a function");
                            for (var s = 0; s < i; s++) if (s in o && !("undefined" == typeof n ? t(o[s], s, r) : t.call(n, o[s], s, r))) return !1;
                            return !0
                        }
                    }, !se(r.every)), D(r, {
                        some: function(t) {
                            var n, r = q.ToObject(this),
                                o = ie && j(this) ? Y(this, "") : r,
                                i = q.ToUint32(o.length);
                            if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.some callback must be a function");
                            for (var s = 0; s < i; s++) if (s in o && ("undefined" == typeof n ? t(o[s], s, r) : t.call(n, o[s], s, r))) return !0;
                            return !1
                        }
                    }, !se(r.some));
                    var ae = !1;
                    r.reduce && (ae = "object" == typeof r.reduce.call("es5", function(e, t, n, r) {
                        return r
                    })), D(r, {
                        reduce: function(t) {
                            var n = q.ToObject(this),
                                r = ie && j(this) ? Y(this, "") : n,
                                o = q.ToUint32(r.length);
                            if (!e(t)) throw new TypeError("Array.prototype.reduce callback must be a function");
                            if (0 === o && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                            var i, s = 0;
                            if (arguments.length >= 2) i = arguments[1];
                            else for (;;) {
                                if (s in r) {
                                    i = r[s++];
                                    break
                                }
                                if (++s >= o) throw new TypeError("reduce of empty array with no initial value")
                            }
                            for (; s < o; s++) s in r && (i = t(i, r[s], s, n));
                            return i
                        }
                    }, !ae);
                    var ce = !1;
                    r.reduceRight && (ce = "object" == typeof r.reduceRight.call("es5", function(e, t, n, r) {
                        return r
                    })), D(r, {
                        reduceRight: function(t) {
                            var n = q.ToObject(this),
                                r = ie && j(this) ? Y(this, "") : n,
                                o = q.ToUint32(r.length);
                            if (!e(t)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                            if (0 === o && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                            var i, s = o - 1;
                            if (arguments.length >= 2) i = arguments[1];
                            else for (;;) {
                                if (s in r) {
                                    i = r[s--];
                                    break
                                }
                                if (--s < 0) throw new TypeError("reduceRight of empty array with no initial value")
                            }
                            if (s < 0) return i;
                            do s in r && (i = t(i, r[s], s, n));
                            while (s--);
                            return i
                        }
                    }, !ce);
                    var ue = r.indexOf && [0, 1].indexOf(1, 2) !== -1;
                    D(r, {
                        indexOf: function(e) {
                            var t = ie && j(this) ? Y(this, "") : q.ToObject(this),
                                n = q.ToUint32(t.length);
                            if (0 === n) return -1;
                            var r = 0;
                            for (arguments.length > 1 && (r = q.ToInteger(arguments[1])), r = r >= 0 ? r : M(0, n + r); r < n; r++) if (r in t && t[r] === e) return r;
                            return -1
                        }
                    }, ue);
                    var le = r.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
                    D(r, {
                        lastIndexOf: function(e) {
                            var t = ie && j(this) ? Y(this, "") : q.ToObject(this),
                                n = q.ToUint32(t.length);
                            if (0 === n) return -1;
                            var r = n - 1;
                            for (arguments.length > 1 && (r = T(r, q.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--) if (r in t && e === t[r]) return r;
                            return -1
                        }
                    }, le);
                    var de = function() {
                        var e = [1, 2],
                            t = e.splice();
                        return 2 === e.length && ne(t) && 0 === t.length
                    }();
                    D(r, {
                        splice: function(e, t) {
                            return 0 === arguments.length ? [] : p.apply(this, arguments)
                        }
                    }, !de);
                    var fe = function() {
                        var e = {};
                        return r.splice.call(e, 0, 0, 1), 1 === e.length
                    }();
                    D(r, {
                        splice: function(e, t) {
                            if (0 === arguments.length) return [];
                            var n = arguments;
                            return this.length = M(q.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = J(arguments), n.length < 2 ? Q(n, this.length - e) : n[1] = q.ToInteger(t)), p.apply(this, n)
                        }
                    }, !fe);
                    var pe = function() {
                            var e = new n(1e5);
                            return e[8] = "x", e.splice(1, 1), 7 === e.indexOf("x")
                        }(),
                        me = function() {
                            var e = 256,
                                t = [];
                            return t[e] = "a", t.splice(e + 1, 0, "b"), "a" === t[e]
                        }();
                    D(r, {
                        splice: function(e, t) {
                            for (var n, r = q.ToObject(this), o = [], i = q.ToUint32(r.length), s = q.ToInteger(e), a = s < 0 ? M(i + s, 0) : T(s, i), u = T(M(q.ToInteger(t), 0), i - a), l = 0; l < u;) n = c(a + l), H(r, n) && (o[l] = r[n]), l += 1;
                            var d, f = J(arguments, 2),
                                p = f.length;
                            if (p < u) {
                                l = a;
                                for (var m = i - u; l < m;) n = c(l + u), d = c(l + p), H(r, n) ? r[d] = r[n] : delete r[d], l += 1;
                                l = i;
                                for (var y = i - u + p; l > y;) delete r[l - 1], l -= 1
                            } else if (p > u) for (l = i - u; l > a;) n = c(l + u - 1), d = c(l + p - 1), H(r, n) ? r[d] = r[n] : delete r[d], l -= 1;
                            l = a;
                            for (var g = 0; g < f.length; ++g) r[l] = f[g], l += 1;
                            return r.length = i - u + p, o
                        }
                    }, !pe || !me);
                    var ye, ge = r.join;
                    try {
                        ye = "1,2,3" !== Array.prototype.join.call("123", ",")
                    } catch (V) {
                        ye = !0
                    }
                    ye && D(r, {
                        join: function(e) {
                            var t = "undefined" == typeof e ? "," : e;
                            return ge.call(j(this) ? Y(this, "") : this, t)
                        }
                    }, ye);
                    var he = "1,2" !== [1, 2].join(void 0);
                    he && D(r, {
                        join: function(e) {
                            var t = "undefined" == typeof e ? "," : e;
                            return ge.call(this, t)
                        }
                    }, he);
                    var ve = function(e) {
                            for (var t = q.ToObject(this), n = q.ToUint32(t.length), r = 0; r < arguments.length;) t[n + r] = arguments[r], r += 1;
                            return t.length = n + r, n + r
                        },
                        be = function() {
                            var e = {},
                                t = Array.prototype.push.call(e, void 0);
                            return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !H(e, 0)
                        }();
                    D(r, {
                        push: function(e) {
                            return ne(this) ? m.apply(this, arguments) : ve.apply(this, arguments)
                        }
                    }, be);
                    var Me = function() {
                        var e = [],
                            t = e.push(void 0);
                        return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !H(e, 0)
                    }();
                    D(r, {
                        push: ve
                    }, Me), D(r, {
                        slice: function(e, t) {
                            var n = j(this) ? Y(this, "") : this;
                            return X(n, arguments)
                        }
                    }, ie);
                    var Te = function() {
                            try {
                                [1, 2].sort(null)
                            } catch (e) {
                                try {
                                    [1, 2].sort({})
                                } catch (t) {
                                    return !1
                                }
                            }
                            return !0
                        }(),
                        Se = function() {
                            try {
                                return [1, 2].sort(/a/), !1
                            } catch (e) {}
                            return !0
                        }(),
                        ke = function() {
                            try {
                                return [1, 2].sort(void 0), !0
                            } catch (e) {}
                            return !1
                        }();
                    D(r, {
                        sort: function(t) {
                            if ("undefined" == typeof t) return te(this);
                            if (!e(t)) throw new TypeError("Array.prototype.sort callback must be a function");
                            return te(this, t)
                        }
                    }, Te || !ke || !Se);
                    var we = !ee({
                            toString: null
                        }, "toString"),
                        Oe = ee(function() {}, "prototype"),
                        Ce = !H("x", "0"),
                        Ie = function(e) {
                            var t = e.constructor;
                            return t && t.prototype === e
                        },
                        xe = {
                            $window: !0,
                            $console: !0,
                            $parent: !0,
                            $self: !0,
                            $frame: !0,
                            $frames: !0,
                            $frameElement: !0,
                            $webkitIndexedDB: !0,
                            $webkitStorageInfo: !0,
                            $external: !0,
                            $width: !0,
                            $height: !0,
                            $top: !0,
                            $localStorage: !0
                        },
                        _e = function() {
                            if ("undefined" == typeof window) return !1;
                            for (var e in window) try {
                                !xe["$" + e] && H(window, e) && null !== window[e] && "object" == typeof window[e] && Ie(window[e])
                            } catch (t) {
                                return !0
                            }
                            return !1
                        }(),
                        Ee = function(e) {
                            if ("undefined" == typeof window || !_e) return Ie(e);
                            try {
                                return Ie(e)
                            } catch (t) {
                                return !1
                            }
                        },
                        Pe = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        Ae = Pe.length,
                        je = function(e) {
                            return "[object Arguments]" === $(e)
                        },
                        Re = function(t) {
                            return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && !ne(t) && e(t.callee)
                        },
                        Fe = je(arguments) ? je : Re;
                    D(o, {
                        keys: function(t) {
                            var n = e(t),
                                r = Fe(t),
                                o = null !== t && "object" == typeof t,
                                i = o && j(t);
                            if (!o && !n && !r) throw new TypeError("Object.keys called on a non-object");
                            var s = [],
                                a = Oe && n;
                            if (i && Ce || r) for (var u = 0; u < t.length; ++u) Q(s, c(u));
                            if (!r) for (var l in t) a && "prototype" === l || !H(t, l) || Q(s, c(l));
                            if (we) for (var d = Ee(t), f = 0; f < Ae; f++) {
                                var p = Pe[f];
                                d && "constructor" === p || !H(t, p) || Q(s, p)
                            }
                            return s
                        }
                    });
                    var Ne = o.keys &&
                        function() {
                            return 2 === o.keys(arguments).length
                        }(1, 2), Ue = o.keys &&
                        function() {
                            var e = o.keys(arguments);
                            return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
                        }(1), De = o.keys;
                    D(o, {
                        keys: function(e) {
                            return De(Fe(e) ? J(e) : e)
                        }
                    }, !Ne || Ue);
                    var Be, Le, qe = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(),
                        We = new Date(-0x55d318d56a724),
                        He = new Date(14496624e5),
                        $e = "Mon, 01 Jan -45875 11:59:59 GMT" !== We.toUTCString(),
                        Je = We.getTimezoneOffset();
                    Je < -720 ? (Be = "Tue Jan 02 -45875" !== We.toDateString(), Le = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(He))) : (Be = "Mon Jan 01 -45875" !== We.toDateString(), Le = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(He)));
                    var Xe = v.bind(Date.prototype.getFullYear),
                        Ve = v.bind(Date.prototype.getMonth),
                        Ke = v.bind(Date.prototype.getDate),
                        ze = v.bind(Date.prototype.getUTCFullYear),
                        Ge = v.bind(Date.prototype.getUTCMonth),
                        Ye = v.bind(Date.prototype.getUTCDate),
                        Ze = v.bind(Date.prototype.getUTCDay),
                        Qe = v.bind(Date.prototype.getUTCHours),
                        et = v.bind(Date.prototype.getUTCMinutes),
                        tt = v.bind(Date.prototype.getUTCSeconds),
                        nt = v.bind(Date.prototype.getUTCMilliseconds),
                        rt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ot = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        it = function(e, t) {
                            return Ke(new Date(t, e, 0))
                        };
                    D(Date.prototype, {
                        getFullYear: function() {
                            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                            var e = Xe(this);
                            return e < 0 && Ve(this) > 11 ? e + 1 : e
                        },
                        getMonth: function() {
                            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                            var e = Xe(this),
                                t = Ve(this);
                            return e < 0 && t > 11 ? 0 : t
                        },
                        getDate: function() {
                            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                            var e = Xe(this),
                                t = Ve(this),
                                n = Ke(this);
                            if (e < 0 && t > 11) {
                                if (12 === t) return n;
                                var r = it(0, e + 1);
                                return r - n + 1
                            }
                            return n
                        },
                        getUTCFullYear: function() {
                            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                            var e = ze(this);
                            return e < 0 && Ge(this) > 11 ? e + 1 : e
                        },
                        getUTCMonth: function() {
                            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                            var e = ze(this),
                                t = Ge(this);
                            return e < 0 && t > 11 ? 0 : t
                        },
                        getUTCDate: function() {
                            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                            var e = ze(this),
                                t = Ge(this),
                                n = Ye(this);
                            if (e < 0 && t > 11) {
                                if (12 === t) return n;
                                var r = it(0, e + 1);
                                return r - n + 1
                            }
                            return n
                        }
                    }, qe), D(Date.prototype, {
                        toUTCString: function() {
                            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                            var e = Ze(this),
                                t = Ye(this),
                                n = Ge(this),
                                r = ze(this),
                                o = Qe(this),
                                i = et(this),
                                s = tt(this);
                            return rt[e] + ", " + (t < 10 ? "0" + t : t) + " " + ot[n] + " " + r + " " + (o < 10 ? "0" + o : o) + ":" + (i < 10 ? "0" + i : i) + ":" + (s < 10 ? "0" + s : s) + " GMT"
                        }
                    }, qe || $e), D(Date.prototype, {
                        toDateString: function() {
                            if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                            var e = this.getDay(),
                                t = this.getDate(),
                                n = this.getMonth(),
                                r = this.getFullYear();
                            return rt[e] + " " + ot[n] + " " + (t < 10 ? "0" + t : t) + " " + r
                        }
                    }, qe || Be), (qe || Le) && (Date.prototype.toString = function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = this.getDay(),
                            t = this.getDate(),
                            n = this.getMonth(),
                            r = this.getFullYear(),
                            o = this.getHours(),
                            i = this.getMinutes(),
                            s = this.getSeconds(),
                            a = this.getTimezoneOffset(),
                            c = Math.floor(Math.abs(a) / 60),
                            u = Math.floor(Math.abs(a) % 60);
                        return rt[e] + " " + ot[n] + " " + (t < 10 ? "0" + t : t) + " " + r + " " + (o < 10 ? "0" + o : o) + ":" + (i < 10 ? "0" + i : i) + ":" + (s < 10 ? "0" + s : s) + " GMT" + (a > 0 ? "-" : "+") + (c < 10 ? "0" + c : c) + (u < 10 ? "0" + u : u)
                    }, U && o.defineProperty(Date.prototype, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    }));
                    var st = -621987552e5,
                        at = "-000001",
                        ct = Date.prototype.toISOString && new Date(st).toISOString().indexOf(at) === -1,
                        ut = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
                        lt = v.bind(Date.prototype.getTime);
                    D(Date.prototype, {
                        toISOString: function() {
                            if (!isFinite(this) || !isFinite(lt(this))) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                            var e = ze(this),
                                t = Ge(this);
                            e += Math.floor(t / 12), t = (t % 12 + 12) % 12;
                            var n = [t + 1, Ye(this), Qe(this), et(this), tt(this)];
                            e = (e < 0 ? "-" : e > 9999 ? "+" : "") + G("00000" + Math.abs(e), 0 <= e && e <= 9999 ? -4 : -6);
                            for (var r = 0; r < n.length; ++r) n[r] = G("00" + n[r], -2);
                            return e + "-" + J(n, 0, 2).join("-") + "T" + J(n, 2).join(":") + "." + G("000" + nt(this), -3) + "Z"
                        }
                    }, ct || ut);
                    var dt = function() {
                        try {
                            return Date.prototype.toJSON && null === new Date(NaN).toJSON() && new Date(st).toJSON().indexOf(at) !== -1 && Date.prototype.toJSON.call({
                                toISOString: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            return !1
                        }
                    }();
                    dt || (Date.prototype.toJSON = function(t) {
                        var n = o(this),
                            r = q.ToPrimitive(n);
                        if ("number" == typeof r && !isFinite(r)) return null;
                        var i = n.toISOString;
                        if (!e(i)) throw new TypeError("toISOString property is not callable");
                        return i.call(n)
                    });
                    var ft = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
                        pt = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
                        mt = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
                    if (mt || pt || !ft) {
                        var yt = Math.pow(2, 31) - 1,
                            gt = L(new Date(1970, 0, 1, 0, 0, 0, yt + 1).getTime());
                        Date = function(e) {
                            var t = function(n, r, o, i, s, a, u) {
                                    var l, d = arguments.length;
                                    if (this instanceof e) {
                                        var f = a,
                                            p = u;
                                        if (gt && d >= 7 && u > yt) {
                                            var m = Math.floor(u / yt) * yt,
                                                y = Math.floor(m / 1e3);
                                            f += y, p -= 1e3 * y
                                        }
                                        l = 1 === d && c(n) === n ? new e(t.parse(n)) : d >= 7 ? new e(n, r, o, i, s, f, p) : d >= 6 ? new e(n, r, o, i, s, f) : d >= 5 ? new e(n, r, o, i, s) : d >= 4 ? new e(n, r, o, i) : d >= 3 ? new e(n, r, o) : d >= 2 ? new e(n, r) : d >= 1 ? new e(n instanceof e ? +n : n) : new e
                                    } else l = e.apply(this, arguments);
                                    return B(l) || D(l, {
                                        constructor: t
                                    }, !0), l
                                },
                                n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                                r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
                                o = function(e, t) {
                                    var n = t > 1 ? 1 : 0;
                                    return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                                },
                                i = function(t) {
                                    var n = 0,
                                        r = t;
                                    if (gt && r > yt) {
                                        var o = Math.floor(r / yt) * yt,
                                            i = Math.floor(o / 1e3);
                                        n += i, r -= 1e3 * i
                                    }
                                    return l(new e(1970, 0, 1, 0, 0, n, r))
                                };
                            for (var s in e) H(e, s) && (t[s] = e[s]);
                            D(t, {
                                now: e.now,
                                UTC: e.UTC
                            }, !0), t.prototype = e.prototype, D(t.prototype, {
                                constructor: t
                            }, !0);
                            var a = function(t) {
                                var r = n.exec(t);
                                if (r) {
                                    var s, a = l(r[1]),
                                        c = l(r[2] || 1) - 1,
                                        u = l(r[3] || 1) - 1,
                                        d = l(r[4] || 0),
                                        f = l(r[5] || 0),
                                        p = l(r[6] || 0),
                                        m = Math.floor(1e3 * l(r[7] || 0)),
                                        y = Boolean(r[4] && !r[8]),
                                        g = "-" === r[9] ? 1 : -1,
                                        h = l(r[10] || 0),
                                        v = l(r[11] || 0),
                                        b = f > 0 || p > 0 || m > 0;
                                    return d < (b ? 24 : 25) && f < 60 && p < 60 && m < 1e3 && c > -1 && c < 12 && h < 24 && v < 60 && u > -1 && u < o(a, c + 1) - o(a, c) && (s = 60 * (24 * (o(a, c) + u) + d + h * g), s = 1e3 * (60 * (s + f + v * g) + p) + m, y && (s = i(s)), -864e13 <= s && s <= 864e13) ? s : NaN
                                }
                                return e.parse.apply(this, arguments)
                            };
                            return D(t, {
                                parse: a
                            }), t
                        }(Date)
                    }
                    Date.now || (Date.now = function() {
                        return (new Date).getTime()
                    });
                    var ht = d.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
                        vt = {
                            base: 1e7,
                            size: 6,
                            data: [0, 0, 0, 0, 0, 0],
                            multiply: function(e, t) {
                                for (var n = -1, r = t; ++n < vt.size;) r += e * vt.data[n], vt.data[n] = r % vt.base, r = Math.floor(r / vt.base)
                            },
                            divide: function(e) {
                                for (var t = vt.size, n = 0; --t >= 0;) n += vt.data[t], vt.data[t] = Math.floor(n / e), n = n % e * vt.base
                            },
                            numToString: function() {
                                for (var e = vt.size, t = ""; --e >= 0;) if ("" !== t || 0 === e || 0 !== vt.data[e]) {
                                    var n = c(vt.data[e]);
                                    "" === t ? t = n : t += G("0000000", 0, 7 - n.length) + n
                                }
                                return t
                            },
                            pow: function Dt(e, t, n) {
                                return 0 === t ? n : t % 2 === 1 ? Dt(e, t - 1, n * e) : Dt(e * e, t / 2, n)
                            },
                            log: function(e) {
                                for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                                for (; n >= 2;) t += 1, n /= 2;
                                return t
                            }
                        },
                        bt = function(e) {
                            var t, n, r, o, i, s, a, u;
                            if (t = l(e), t = L(t) ? 0 : Math.floor(t), t < 0 || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                            if (n = l(this), L(n)) return "NaN";
                            if (n <= -1e21 || n >= 1e21) return c(n);
                            if (r = "", n < 0 && (r = "-", n = -n), o = "0", n > 1e-21) if (i = vt.log(n * vt.pow(2, 69, 1)) - 69, s = i < 0 ? n * vt.pow(2, -i, 1) : n / vt.pow(2, i, 1), s *= 4503599627370496, i = 52 - i, i > 0) {
                                for (vt.multiply(0, s), a = t; a >= 7;) vt.multiply(1e7, 0), a -= 7;
                                for (vt.multiply(vt.pow(10, a, 1), 0), a = i - 1; a >= 23;) vt.divide(1 << 23), a -= 23;
                                vt.divide(1 << a), vt.multiply(1, 1), vt.divide(2), o = vt.numToString()
                            } else vt.multiply(0, s), vt.multiply(1 << -i, 0), o = vt.numToString() + G("0.00000000000000000000", 2, 2 + t);
                            return t > 0 ? (u = o.length, o = u <= t ? r + G("0.0000000000000000000", 0, t - u + 2) + o : r + G(o, 0, u - t) + "." + G(o, u - t)) : o = r + o, o
                        };
                    D(d, {
                        toFixed: bt
                    }, ht);
                    var Mt = function() {
                            try {
                                return "1" === 1..toPrecision(void 0)
                            } catch (e) {
                                return !0
                            }
                        }(),
                        Tt = d.toPrecision;
                    D(d, {
                        toPrecision: function(e) {
                            return "undefined" == typeof e ? Tt.call(this) : Tt.call(this, e)
                        }
                    }, Mt), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !
                        function() {
                            var e = "undefined" == typeof / () ? ? /.exec("")[1],n=Math.pow(2,32)-1;u.split=function(r,o){var i=String(this);if("undefined"==typeof r&&0===o)return[];if(!t(r))return Y(this,r,o);var s,a,c,u,l=[],d=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(r.sticky?"y":""),f=0,p=new RegExp(r.source,d+"g");e||(s=new RegExp("^"+p.source+"$(?!\\s)",d));var y="undefined"==typeof o?n:q.ToUint32(o);for(a=p.exec(i);a&&(c=a.index+a[0].length,!(c>f&&(Q(l,G(i,f,a.index)),!e&&a.length>1&&a[0].replace(s,function(){for(var e=1;e<arguments.length-2;e++)"undefined"==typeof arguments[e]&&(a[e]=void 0)}),a.length>1&&a.index<i.length&&m.apply(l,J(a,1)),u=a[0].length,f=c,l.length>=y)));)p.lastIndex===a.index&&p.lastIndex++,a=p.exec(i);return f===i.length?!u&&p.test("")||Q(l,""):Q(l,G(i,f)),l.length>y?J(l,0,y):l}}():"0".split(void 0,0).length&&(u.split=function(e,t){return"undefined"==typeof e&&0===t?[]:Y(this,e,t)});var St=u.replace,kt=function(){var e=[];return"x".replace(/x (.) ? /g,function(t,n){Q(e,n)}),1===e.length&&"undefined"==typeof e[0]}();kt||(u.replace=function(n,r){var o=e(r),i=t(n)&&/\)[ * ? ] / .test(n.source);
                        if (o && i) {
                            var s = function(e) {
                                var t = arguments.length,
                                    o = n.lastIndex;
                                n.lastIndex = 0;
                                var i = n.exec(e) || [];
                                return n.lastIndex = o, Q(i, arguments[t - 2], arguments[t - 1]), r.apply(this, i)
                            };
                            return St.call(this, n, s)
                        }
                        return St.call(this, n, r)
                    });
                    var wt = u.substr,
                        Ot = "".substr && "b" !== "0b".substr(-1);
                    D(u, {
                        substr: function(e, t) {
                            var n = e;
                            return e < 0 && (n = M(this.length + e, 0)), wt.call(this, n, t)
                        }
                    }, Ot);
                    var Ct = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",
                        It = "​",
                        xt = "[" + Ct + "]",
                        _t = new RegExp("^" + xt + xt + "*"),
                        Et = new RegExp(xt + xt + "*$"),
                        Pt = u.trim && (Ct.trim() || !It.trim());
                    D(u, {
                        trim: function() {
                            if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                            return c(this).replace(_t, "").replace(Et, "")
                        }
                    }, Pt);
                    var At = v.bind(String.prototype.trim),
                        jt = u.lastIndexOf && "abcあい".lastIndexOf("あい", 2) !== -1;
                    D(u, {
                        lastIndexOf: function(e) {
                            if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                            for (var t = c(this), n = c(e), r = arguments.length > 1 ? l(arguments[1]) : NaN, o = L(r) ? 1 / 0 : q.ToInteger(r), i = T(M(o, 0), t.length), s = n.length, a = i + s; a > 0;) {
                                a = M(0, a - s);
                                var u = Z(G(t, a, i + s), n);
                                if (u !== -1) return a + u
                            }
                            return -1
                        }
                    }, jt);
                    var Rt = u.lastIndexOf;
                    if (D(u, {
                            lastIndexOf: function(e) {
                                return Rt.apply(this, arguments)
                            }
                        }, 1 !== u.lastIndexOf.length), 8 === parseInt(Ct + "08") && 22 === parseInt(Ct + "0x16") || (parseInt = function(e) {
                            var t = /^[-+]?0[xX]/;
                            return function(n, r) {
                                var o = At(String(n)),
                                    i = l(r) || (t.test(o) ? 16 : 10);
                                return e(o, i)
                            }
                        }(parseInt)), 1 / parseFloat("-0") !== -(1 / 0) && (parseFloat = function(e) {
                            return function(t) {
                                var n = At(String(t)),
                                    r = e(n);
                                return 0 === r && "-" === G(n, 0, 1) ? -0 : r
                            }
                        }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
                        var Ft = function() {
                            if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                            var e = this.name;
                            "undefined" == typeof e ? e = "Error" : "string" != typeof e && (e = c(e));
                            var t = this.message;
                            return "undefined" == typeof t ? t = "" : "string" != typeof t && (t = c(t)), e ? t ? e + ": " + t : e : t
                        };
                        Error.prototype.toString = Ft
                    }
                    if (U) {
                        var Nt = function(e, t) {
                            if (ee(e, t)) {
                                var n = Object.getOwnPropertyDescriptor(e, t);
                                n.configurable && (n.enumerable = !1, Object.defineProperty(e, t, n))
                            }
                        };
                        Nt(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), Nt(Error.prototype, "name")
                    }
                    if ("/a/gim" !== String(/a/gim)) {
                        var Ut = function() {
                            var e = "/" + this.source + "/";
                            return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), e
                        };
                        RegExp.prototype.toString = Ut
                    }
                })
        }, function(e, t, n) {
            function r(e, t, n) {
                if (!a(t)) throw new TypeError("iterator must be a function");
                arguments.length < 3 && (n = this), "[object Array]" === c.call(e) ? o(e, t, n) : "string" == typeof e ? i(e, t, n) : s(e, t, n)
            }
            function o(e, t, n) {
                for (var r = 0, o = e.length; r < o; r++) u.call(e, r) && t.call(n, e[r], r, e)
            }
            function i(e, t, n) {
                for (var r = 0, o = e.length; r < o; r++) t.call(n, e.charAt(r), r, e)
            }
            function s(e, t, n) {
                for (var r in e) u.call(e, r) && t.call(n, e[r], r, e)
            }
            var a = n(55);
            e.exports = r;
            var c = Object.prototype.toString,
                u = Object.prototype.hasOwnProperty
        }, function(e, t) {
            (function(t) {
                var n;
                n = "undefined" != typeof window ? window : "undefined" != typeof t ? t : "undefined" != typeof self ? self : {}, e.exports = n
            }).call(t, function() {
                return this
            }())
        }, function(e, t, n) {
            var r;
            (function(e, o) {
                (function() {
                    function i(e, t) {
                        function n(e) {
                            if (n[e] !== g) return n[e];
                            var i;
                            if ("bug-string-char-index" == e) i = "a" != "a" [0];
                            else if ("json" == e) i = n("json-stringify") && n("json-parse");
                            else {
                                var s, a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if ("json-stringify" == e) {
                                    var u = t.stringify,
                                        l = "function" == typeof u && b;
                                    if (l) {
                                        (s = function() {
                                            return 1
                                        }).toJSON = s;
                                        try {
                                            l = "0" === u(0) && "0" === u(new r) && '""' == u(new o) && u(v) === g && u(g) === g && u() === g && "1" === u(s) && "[1]" == u([s]) && "[null]" == u([g]) && "null" == u(null) && "[null,null,null]" == u([g, v, null]) && u({
                                                a: [s, !0, !1, null, "\0\b\n\f\r\t"]
                                            }) == a && "1" === u(null, s) && "[\n 1,\n 2\n]" == u([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == u(new c(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == u(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == u(new c(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == u(new c(-1))
                                        } catch (d) {
                                            l = !1
                                        }
                                    }
                                    i = l
                                }
                                if ("json-parse" == e) {
                                    var f = t.parse;
                                    if ("function" == typeof f) try {
                                        if (0 === f("0") && !f(!1)) {
                                            s = f(a);
                                            var p = 5 == s.a.length && 1 === s.a[0];
                                            if (p) {
                                                try {
                                                    p = !f('"\t"')
                                                } catch (d) {}
                                                if (p) try {
                                                    p = 1 !== f("01")
                                                } catch (d) {}
                                                if (p) try {
                                                    p = 1 !== f("1.")
                                                } catch (d) {}
                                            }
                                        }
                                    } catch (d) {
                                        p = !1
                                    }
                                    i = p
                                }
                            }
                            return n[e] = !! i
                        }
                        e || (e = u.Object()), t || (t = u.Object());
                        var r = e.Number || u.Number,
                            o = e.String || u.String,
                            s = e.Object || u.Object,
                            c = e.Date || u.Date,
                            l = e.SyntaxError || u.SyntaxError,
                            d = e.TypeError || u.TypeError,
                            f = e.Math || u.Math,
                            p = e.JSON || u.JSON;
                        "object" == typeof p && p && (t.stringify = p.stringify, t.parse = p.parse);
                        var m, y, g, h = s.prototype,
                            v = h.toString,
                            b = new c(-0xc782b5b800cec);
                        try {
                            b = b.getUTCFullYear() == -109252 && 0 === b.getUTCMonth() && 1 === b.getUTCDate() && 10 == b.getUTCHours() && 37 == b.getUTCMinutes() && 6 == b.getUTCSeconds() && 708 == b.getUTCMilliseconds()
                        } catch (M) {}
                        if (!n("json")) {
                            var T = "[object Function]",
                                S = "[object Date]",
                                k = "[object Number]",
                                w = "[object String]",
                                O = "[object Array]",
                                C = "[object Boolean]",
                                I = n("bug-string-char-index");
                            if (!b) var x = f.floor,
                                _ = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                E = function(e, t) {
                                    return _[t] + 365 * (e - 1970) + x((e - 1969 + (t = +(t > 1))) / 4) - x((e - 1901 + t) / 100) + x((e - 1601 + t) / 400)
                                };
                            if ((m = h.hasOwnProperty) || (m = function(e) {
                                    var t, n = {};
                                    return (n.__proto__ = null, n.__proto__ = {
                                        toString: 1
                                    }, n).toString != v ? m = function(e) {
                                        var t = this.__proto__,
                                            n = e in (this.__proto__ = null, this);
                                        return this.__proto__ = t, n
                                    } : (t = n.constructor, m = function(e) {
                                        var n = (this.constructor || t).prototype;
                                        return e in this && !(e in n && this[e] === n[e])
                                    }), n = null, m.call(this, e)
                                }), y = function(e, t) {
                                    var n, r, o, i = 0;
                                    (n = function() {
                                        this.valueOf = 0
                                    }).prototype.valueOf = 0, r = new n;
                                    for (o in r) m.call(r, o) && i++;
                                    return n = r = null, i ? y = 2 == i ?
                                        function(e, t) {
                                            var n, r = {},
                                                o = v.call(e) == T;
                                            for (n in e) o && "prototype" == n || m.call(r, n) || !(r[n] = 1) || !m.call(e, n) || t(n)
                                        } : function(e, t) {
                                            var n, r, o = v.call(e) == T;
                                            for (n in e) o && "prototype" == n || !m.call(e, n) || (r = "constructor" === n) || t(n);
                                            (r || m.call(e, n = "constructor")) && t(n)
                                        } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], y = function(e, t) {
                                        var n, o, i = v.call(e) == T,
                                            s = !i && "function" != typeof e.constructor && a[typeof e.hasOwnProperty] && e.hasOwnProperty || m;
                                        for (n in e) i && "prototype" == n || !s.call(e, n) || t(n);
                                        for (o = r.length; n = r[--o]; s.call(e, n) && t(n));
                                    }), y(e, t)
                                }, !n("json-stringify")) {
                                var P = {
                                        92: "\\\\",
                                        34: '\\"',
                                        8: "\\b",
                                        12: "\\f",
                                        10: "\\n",
                                        13: "\\r",
                                        9: "\\t"
                                    },
                                    A = "000000",
                                    j = function(e, t) {
                                        return (A + (t || 0)).slice(-e)
                                    },
                                    R = "\\u00",
                                    F = function(e) {
                                        for (var t = '"', n = 0, r = e.length, o = !I || r > 10, i = o && (I ? e.split("") : e); n < r; n++) {
                                            var s = e.charCodeAt(n);
                                            switch (s) {
                                                case 8:
                                                case 9:
                                                case 10:
                                                case 12:
                                                case 13:
                                                case 34:
                                                case 92:
                                                    t += P[s];
                                                    break;
                                                default:
                                                    if (s < 32) {
                                                        t += R + j(2, s.toString(16));
                                                        break
                                                    }
                                                    t += o ? i[n] : e.charAt(n)
                                            }
                                        }
                                        return t + '"'
                                    },
                                    N = function(e, t, n, r, o, i, s) {
                                        var a, c, u, l, f, p, h, b, M, T, I, _, P, A, R, U;
                                        try {
                                            a = t[e]
                                        } catch (D) {}
                                        if ("object" == typeof a && a) if (c = v.call(a), c != S || m.call(a, "toJSON"))"function" == typeof a.toJSON && (c != k && c != w && c != O || m.call(a, "toJSON")) && (a = a.toJSON(e));
                                        else if (a > -1 / 0 && a < 1 / 0) {
                                            if (E) {
                                                for (f = x(a / 864e5), u = x(f / 365.2425) + 1970 - 1; E(u + 1, 0) <= f; u++);
                                                for (l = x((f - E(u, 0)) / 30.42); E(u, l + 1) <= f; l++);
                                                f = 1 + f - E(u, l), p = (a % 864e5 + 864e5) % 864e5, h = x(p / 36e5) % 24, b = x(p / 6e4) % 60, M = x(p / 1e3) % 60, T = p % 1e3
                                            } else u = a.getUTCFullYear(), l = a.getUTCMonth(), f = a.getUTCDate(), h = a.getUTCHours(), b = a.getUTCMinutes(), M = a.getUTCSeconds(), T = a.getUTCMilliseconds();
                                            a = (u <= 0 || u >= 1e4 ? (u < 0 ? "-" : "+") + j(6, u < 0 ? -u : u) : j(4, u)) + "-" + j(2, l + 1) + "-" + j(2, f) + "T" + j(2, h) + ":" + j(2, b) + ":" + j(2, M) + "." + j(3, T) + "Z"
                                        } else a = null;
                                        if (n && (a = n.call(t, e, a)), null === a) return "null";
                                        if (c = v.call(a), c == C) return "" + a;
                                        if (c == k) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                                        if (c == w) return F("" + a);
                                        if ("object" == typeof a) {
                                            for (A = s.length; A--;) if (s[A] === a) throw d();
                                            if (s.push(a), I = [], R = i, i += o, c == O) {
                                                for (P = 0, A = a.length; P < A; P++) _ = N(P, a, n, r, o, i, s), I.push(_ === g ? "null" : _);
                                                U = I.length ? o ? "[\n" + i + I.join(",\n" + i) + "\n" + R + "]" : "[" + I.join(",") + "]" : "[]"
                                            } else y(r || a, function(e) {
                                                var t = N(e, a, n, r, o, i, s);
                                                t !== g && I.push(F(e) + ":" + (o ? " " : "") + t)
                                            }), U = I.length ? o ? "{\n" + i + I.join(",\n" + i) + "\n" + R + "}" : "{" + I.join(",") + "}" : "{}";
                                            return s.pop(), U
                                        }
                                    };
                                t.stringify = function(e, t, n) {
                                    var r, o, i, s;
                                    if (a[typeof t] && t) if ((s = v.call(t)) == T) o = t;
                                    else if (s == O) {
                                        i = {};
                                        for (var c, u = 0, l = t.length; u < l; c = t[u++], s = v.call(c), (s == w || s == k) && (i[c] = 1));
                                    }
                                    if (n) if ((s = v.call(n)) == k) {
                                        if ((n -= n % 1) > 0) for (r = "", n > 10 && (n = 10); r.length < n; r += " ");
                                    } else s == w && (r = n.length <= 10 ? n : n.slice(0, 10));
                                    return N("", (c = {}, c[""] = e, c), o, i, r, "", [])
                                }
                            }
                            if (!n("json-parse")) {
                                var U, D, B = o.fromCharCode,
                                    L = {
                                        92: "\\",
                                        34: '"',
                                        47: "/",
                                        98: "\b",
                                        116: "\t",
                                        110: "\n",
                                        102: "\f",
                                        114: "\r"
                                    },
                                    q = function() {
                                        throw U = D = null, l()
                                    },
                                    W = function() {
                                        for (var e, t, n, r, o, i = D, s = i.length; U < s;) switch (o = i.charCodeAt(U)) {
                                            case 9:
                                            case 10:
                                            case 13:
                                            case 32:
                                                U++;
                                                break;
                                            case 123:
                                            case 125:
                                            case 91:
                                            case 93:
                                            case 58:
                                            case 44:
                                                return e = I ? i.charAt(U) : i[U], U++, e;
                                            case 34:
                                                for (e = "@", U++; U < s;) if (o = i.charCodeAt(U), o < 32) q();
                                                else if (92 == o) switch (o = i.charCodeAt(++U)) {
                                                    case 92:
                                                    case 34:
                                                    case 47:
                                                    case 98:
                                                    case 116:
                                                    case 110:
                                                    case 102:
                                                    case 114:
                                                        e += L[o], U++;
                                                        break;
                                                    case 117:
                                                        for (t = ++U, n = U + 4; U < n; U++) o = i.charCodeAt(U), o >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || q();
                                                        e += B("0x" + i.slice(t, U));
                                                        break;
                                                    default:
                                                        q()
                                                } else {
                                                    if (34 == o) break;
                                                    for (o = i.charCodeAt(U), t = U; o >= 32 && 92 != o && 34 != o;) o = i.charCodeAt(++U);
                                                    e += i.slice(t, U)
                                                }
                                                if (34 == i.charCodeAt(U)) return U++, e;
                                                q();
                                            default:
                                                if (t = U, 45 == o && (r = !0, o = i.charCodeAt(++U)), o >= 48 && o <= 57) {
                                                    for (48 == o && (o = i.charCodeAt(U + 1), o >= 48 && o <= 57) && q(), r = !1; U < s && (o = i.charCodeAt(U), o >= 48 && o <= 57); U++);
                                                    if (46 == i.charCodeAt(U)) {
                                                        for (n = ++U; n < s && (o = i.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                        n == U && q(), U = n
                                                    }
                                                    if (o = i.charCodeAt(U), 101 == o || 69 == o) {
                                                        for (o = i.charCodeAt(++U), 43 != o && 45 != o || U++, n = U; n < s && (o = i.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                        n == U && q(), U = n
                                                    }
                                                    return +i.slice(t, U)
                                                }
                                                if (r && q(), "true" == i.slice(U, U + 4)) return U += 4, !0;
                                                if ("false" == i.slice(U, U + 5)) return U += 5, !1;
                                                if ("null" == i.slice(U, U + 4)) return U += 4, null;
                                                q()
                                        }
                                        return "$"
                                    },
                                    H = function(e) {
                                        var t, n;
                                        if ("$" == e && q(), "string" == typeof e) {
                                            if ("@" == (I ? e.charAt(0) : e[0])) return e.slice(1);
                                            if ("[" == e) {
                                                for (t = []; e = W(), "]" != e; n || (n = !0)) n && ("," == e ? (e = W(), "]" == e && q()) : q()), "," == e && q(), t.push(H(e));
                                                return t
                                            }
                                            if ("{" == e) {
                                                for (t = {}; e = W(), "}" != e; n || (n = !0)) n && ("," == e ? (e = W(), "}" == e && q()) : q()), "," != e && "string" == typeof e && "@" == (I ? e.charAt(0) : e[0]) && ":" == W() || q(), t[e.slice(1)] = H(W());
                                                return t
                                            }
                                            q()
                                        }
                                        return e
                                    },
                                    $ = function(e, t, n) {
                                        var r = J(e, t, n);
                                        r === g ? delete e[t] : e[t] = r
                                    },
                                    J = function(e, t, n) {
                                        var r, o = e[t];
                                        if ("object" == typeof o && o) if (v.call(o) == O) for (r = o.length; r--;) $(o, r, n);
                                        else y(o, function(e) {
                                                $(o, e, n)
                                            });
                                        return n.call(e, t, o)
                                    };
                                t.parse = function(e, t) {
                                    var n, r;
                                    return U = 0, D = "" + e, n = H(W()), "$" != W() && q(), U = D = null, t && v.call(t) == T ? J((r = {}, r[""] = n, r), "", t) : n
                                }
                            }
                        }
                        return t.runInContext = i, t
                    }
                    var s = n(111),
                        a = {
                            "function": !0,
                            object: !0
                        },
                        c = a[typeof t] && t && !t.nodeType && t,
                        u = a[typeof window] && window || this,
                        l = c && a[typeof e] && e && !e.nodeType && "object" == typeof o && o;
                    if (!l || l.global !== l && l.window !== l && l.self !== l || (u = l), c && !s) i(u, c);
                    else {
                        var d = u.JSON,
                            f = u.JSON3,
                            p = !1,
                            m = i(u, u.JSON3 = {
                                noConflict: function() {
                                    return p || (p = !0, u.JSON = d, u.JSON3 = f, d = f = null), m
                                }
                            });
                        u.JSON = {
                            parse: m.parse,
                            stringify: m.stringify
                        }
                    }
                    s && (r = function() {
                        return m
                    }.call(t, n, t, e), !(void 0 !== r && (e.exports = r)))
                }).call(this)
            }).call(t, n(16)(e), function() {
                return this
            }())
        }, function(e, t, n) {
            var r = n(106),
                o = n(100),
                i = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                };
            e.exports = function(e) {
                if (!e) return {};
                var t = {};
                return o(r(e).split("\n"), function(e) {
                    var n = e.indexOf(":"),
                        o = r(e.slice(0, n)).toLowerCase(),
                        s = r(e.slice(n + 1));
                    "undefined" == typeof t[o] ? t[o] = s : i(t[o]) ? t[o].push(s) : t[o] = [t[o], s]
                }), t
            }
        }, , , function(e, t) {
            function n(e) {
                return e.replace(/^\s*|\s*$/g, "")
            }
            t = e.exports = n, t.left = function(e) {
                return e.replace(/^\s*/, "")
            }, t.right = function(e) {
                return e.replace(/\s*$/, "")
            }
        }, function(e, t, n) {
            var r;
            !
                function(t) {
                    "use strict";

                    function o() {}
                    function i(e, t) {
                        for (var n = e.length; n--;) if (e[n].listener === t) return n;
                        return -1
                    }
                    function s(e) {
                        return function() {
                            return this[e].apply(this, arguments)
                        }
                    }
                    function a(e) {
                        return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && a(e.listener)
                    }
                    var c = o.prototype,
                        u = t.EventEmitter;
                    c.getListeners = function(e) {
                        var t, n, r = this._getEvents();
                        if (e instanceof RegExp) {
                            t = {};
                            for (n in r) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n])
                        } else t = r[e] || (r[e] = []);
                        return t
                    }, c.flattenListeners = function(e) {
                        var t, n = [];
                        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                        return n
                    }, c.getListenersAsObject = function(e) {
                        var t, n = this.getListeners(e);
                        return n instanceof Array && (t = {}, t[e] = n), t || n
                    }, c.addListener = function(e, t) {
                        if (!a(t)) throw new TypeError("listener must be a function");
                        var n, r = this.getListenersAsObject(e),
                            o = "object" == typeof t;
                        for (n in r) r.hasOwnProperty(n) && i(r[n], t) === -1 && r[n].push(o ? t : {
                            listener: t,
                            once: !1
                        });
                        return this
                    }, c.on = s("addListener"), c.addOnceListener = function(e, t) {
                        return this.addListener(e, {
                            listener: t,
                            once: !0
                        })
                    }, c.once = s("addOnceListener"), c.defineEvent = function(e) {
                        return this.getListeners(e), this
                    }, c.defineEvents = function(e) {
                        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                        return this
                    }, c.removeListener = function(e, t) {
                        var n, r, o = this.getListenersAsObject(e);
                        for (r in o) o.hasOwnProperty(r) && (n = i(o[r], t), n !== -1 && o[r].splice(n, 1));
                        return this
                    }, c.off = s("removeListener"), c.addListeners = function(e, t) {
                        return this.manipulateListeners(!1, e, t)
                    }, c.removeListeners = function(e, t) {
                        return this.manipulateListeners(!0, e, t)
                    }, c.manipulateListeners = function(e, t, n) {
                        var r, o, i = e ? this.removeListener : this.addListener,
                            s = e ? this.removeListeners : this.addListeners;
                        if ("object" != typeof t || t instanceof RegExp) for (r = n.length; r--;) i.call(this, t, n[r]);
                        else for (r in t) t.hasOwnProperty(r) && (o = t[r]) && ("function" == typeof o ? i.call(this, r, o) : s.call(this, r, o));
                        return this
                    }, c.removeEvent = function(e) {
                        var t, n = typeof e,
                            r = this._getEvents();
                        if ("string" === n) delete r[e];
                        else if (e instanceof RegExp) for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
                        else delete this._events;
                        return this
                    }, c.removeAllListeners = s("removeEvent"), c.emitEvent = function(e, t) {
                        var n, r, o, i, s, a = this.getListenersAsObject(e);
                        for (i in a) if (a.hasOwnProperty(i)) for (n = a[i].slice(0), o = 0; o < n.length; o++) r = n[o], r.once === !0 && this.removeListener(e, r.listener), s = r.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, r.listener);
                        return this
                    }, c.trigger = s("emitEvent"), c.emit = function(e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        return this.emitEvent(e, t)
                    }, c.setOnceReturnValue = function(e) {
                        return this._onceReturnValue = e, this
                    }, c._getOnceReturnValue = function() {
                        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                    }, c._getEvents = function() {
                        return this._events || (this._events = {})
                    }, o.noConflict = function() {
                        return t.EventEmitter = u, o
                    }, r = function() {
                        return o
                    }.call(t, n, t, e), !(void 0 !== r && (e.exports = r))
                }(this || {})
        }, function(e, t, n) {
            var r, o, i;
            !
                function(n, s) {
                    "use strict";
                    o = [], r = s, i = "function" == typeof r ? r.apply(t, o) : r, !(void 0 !== i && (e.exports = i))
                }(this, function(e) {
                    "use strict";
                    return function(t) {
                        function n() {
                            t.arrayAccessForm = t.arrayAccessForm || "none", t.emptyNodeForm = t.emptyNodeForm || "text", t.attributeConverters = t.attributeConverters || [], t.datetimeAccessFormPaths = t.datetimeAccessFormPaths || [], t.arrayAccessFormPaths = t.arrayAccessFormPaths || [], void 0 === t.enableToStringFunc && (t.enableToStringFunc = !0), void 0 === t.skipEmptyTextNodesForObj && (t.skipEmptyTextNodesForObj = !0), void 0 === t.stripWhitespaces && (t.stripWhitespaces = !0), void 0 === t.useDoubleQuotes && (t.useDoubleQuotes = !0), void 0 === t.ignoreRoot && (t.ignoreRoot = !1), void 0 === t.escapeMode && (t.escapeMode = !0), void 0 === t.attributePrefix && (t.attributePrefix = "_"), void 0 === t.selfClosingElements && (t.selfClosingElements = !0), void 0 === t.keepCData && (t.keepCData = !1)
                        }
                        function r() {
                            function e(e) {
                                var t = String(e);
                                return 1 === t.length && (t = "0" + t), t
                            }
                            "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
                                return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "")
                            }), "function" != typeof Date.prototype.toISOString && (Date.prototype.toISOString = function() {
                                var t = 1e3;
                                return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / t).toFixed(3)).slice(2, 5) + "Z"
                            })
                        }
                        function o(e) {
                            var t = e.localName;
                            return null == t && (t = e.baseName), null != t && "" !== t || (t = e.nodeName), t
                        }
                        function i(e) {
                            return e.prefix
                        }
                        function s(e) {
                            return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;") : e
                        }
                        function a(e) {
                            return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&amp;/g, "&")
                        }
                        function c(e, n, r) {
                            switch (t.arrayAccessForm) {
                                case "property":
                                    e[n] instanceof Array ? e[n + "_asArray"] = e[n] : e[n + "_asArray"] = [e[n]]
                            }
                            if (!(e[n] instanceof Array) && t.arrayAccessFormPaths.length > 0) {
                                for (var o = !1, i = 0; i < t.arrayAccessFormPaths.length; i++) {
                                    var s = t.arrayAccessFormPaths[i];
                                    if ("string" == typeof s) {
                                        if (s === r) {
                                            o = !0;
                                            break
                                        }
                                    } else if (s instanceof RegExp) {
                                        if (s.test(r)) {
                                            o = !0;
                                            break
                                        }
                                    } else if ("function" == typeof s && s(n, r)) {
                                        o = !0;
                                        break
                                    }
                                }
                                o && (e[n] = [e[n]])
                            }
                        }
                        function u(e) {
                            var t = 60,
                                n = e.split(/[-T:+Z]/g),
                                r = new Date(n[0], n[1] - 1, n[2]),
                                o = n[5].split(".");
                            if (r.setHours(n[3], n[4], o[0]), o.length > 1 && r.setMilliseconds(o[1]), n[6] && n[7]) {
                                var i = n[6] * t + Number(n[7]),
                                    s = /\d\d-\d\d:\d\d$/.test(e) ? "-" : "+";
                                i = 0 + ("-" === s ? -1 * i : i), r.setMinutes(r.getMinutes() - i - r.getTimezoneOffset())
                            } else e.indexOf("Z", e.length - 1) !== -1 && (r = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds())));
                            return r
                        }
                        function l(e, n, r) {
                            if (t.datetimeAccessFormPaths.length > 0) for (var o = r.split(".#")[0], i = 0; i < t.datetimeAccessFormPaths.length; i++) {
                                var s = t.datetimeAccessFormPaths[i];
                                if ("string" == typeof s) {
                                    if (s === o) return u(e)
                                } else if (s instanceof RegExp) {
                                    if (s.test(o)) return u(e)
                                } else if ("function" == typeof s && s(o)) return u(e)
                            }
                            return e
                        }
                        function d(e) {
                            for (var n = {}, r = e.childNodes, i = 0; i < r.length; i++) {
                                var s = r.item(i);
                                if (s.nodeType === I.ELEMENT_NODE) {
                                    var a = o(s);
                                    t.ignoreRoot ? n = p(s, a) : n[a] = p(s, a)
                                }
                            }
                            return n
                        }
                        function f(e, n) {
                            var r = {};
                            r.__cnt = 0;
                            for (var s = e.childNodes, u = 0; u < s.length; u++) {
                                var d = s.item(u),
                                    f = o(d);
                                d.nodeType !== I.COMMENT_NODE && (r.__cnt++, null == r[f] ? (r[f] = p(d, n + "." + f), c(r, f, n + "." + f)) : (r[f] instanceof Array || (r[f] = [r[f]], c(r, f, n + "." + f)), r[f][r[f].length] = p(d, n + "." + f)))
                            }
                            for (var m = 0; m < e.attributes.length; m++) {
                                var y = e.attributes.item(m);
                                r.__cnt++;
                                for (var g = y.value, h = 0; h < t.attributeConverters.length; h++) {
                                    var v = t.attributeConverters[h];
                                    v.test.call(null, y.name, y.value) && (g = v.convert.call(null, y.name, y.value))
                                }
                                r[t.attributePrefix + y.name] = g
                            }
                            var b = i(e);
                            return b && (r.__cnt++, r.__prefix = b), r["#text"] && (r.__text = r["#text"], r.__text instanceof Array && (r.__text = r.__text.join("\n")), t.escapeMode && (r.__text = a(r.__text)), t.stripWhitespaces && (r.__text = r.__text.trim()), delete r["#text"], "property" === t.arrayAccessForm && delete r["#text_asArray"], r.__text = l(r.__text, "#text", n + ".#text")), r.hasOwnProperty("#cdata-section") && (r.__cdata = r["#cdata-section"], delete r["#cdata-section"], "property" === t.arrayAccessForm && delete r["#cdata-section_asArray"]), 1 === r.__cnt && r.__text ? r = r.__text : 0 === r.__cnt && "text" === t.emptyNodeForm ? r = "" : r.__cnt > 1 && void 0 !== r.__text && t.skipEmptyTextNodesForObj && (t.stripWhitespaces && "" === r.__text || "" === r.__text.trim()) && delete r.__text, delete r.__cnt, t.keepCData || r.hasOwnProperty("__text") || !r.hasOwnProperty("__cdata") ? (t.enableToStringFunc && (r.__text || r.__cdata) && (r.toString = function() {
                                return (this.__text ? this.__text : "") + (this.__cdata ? this.__cdata : "")
                            }), r) : r.__cdata ? r.__cdata : ""
                        }
                        function p(e, t) {
                            return e.nodeType === I.DOCUMENT_NODE ? d(e) : e.nodeType === I.ELEMENT_NODE ? f(e, t) : e.nodeType === I.TEXT_NODE || e.nodeType === I.CDATA_SECTION_NODE ? e.nodeValue : null
                        }
                        function m(e, n, r, o) {
                            var i = "<" + (e && e.__prefix ? e.__prefix + ":" : "") + n;
                            if (r) for (var a = 0; a < r.length; a++) {
                                var c = r[a],
                                    u = e[c];
                                t.escapeMode && (u = s(u)), i += " " + c.substr(t.attributePrefix.length) + "=", i += t.useDoubleQuotes ? '"' + u + '"' : "'" + u + "'"
                            }
                            return i += o ? " />" : ">"
                        }
                        function y(e, t) {
                            return "</" + (e && e.__prefix ? e.__prefix + ":" : "") + t + ">"
                        }
                        function g(e, t) {
                            return e.indexOf(t, e.length - t.length) !== -1
                        }
                        function h(e, n) {
                            return !!("property" === t.arrayAccessForm && g(n.toString(), "_asArray") || 0 === n.toString().indexOf(t.attributePrefix) || 0 === n.toString().indexOf("__") || e[n] instanceof Function)
                        }
                        function v(e) {
                            var t = 0;
                            if (e instanceof Object) for (var n in e) h(e, n) || t++;
                            return t
                        }
                        function b(e) {
                            var n = [];
                            if (e instanceof Object) for (var r in e) r.toString().indexOf("__") === -1 && 0 === r.toString().indexOf(t.attributePrefix) && n.push(r);
                            return n
                        }
                        function M(e) {
                            var n = "";
                            return e.__cdata && (n += "<![CDATA[" + e.__cdata + "]]>"), e.__text && (n += t.escapeMode ? s(e.__text) : e.__text), n
                        }
                        function T(e) {
                            var n = "";
                            return e instanceof Object ? n += M(e) : null !== e && (n += t.escapeMode ? s(e) : e), n
                        }
                        function S(e, t, n) {
                            var r = "";
                            if (0 === e.length) r += m(e, t, n, !0);
                            else for (var o = 0; o < e.length; o++) r += k(e[o], t, b(e[o]));
                            return r
                        }
                        function k(e, n, r) {
                            var o = "";
                            if (void 0 !== e && null !== e && "" !== e || !t.selfClosingElements) if ("object" == typeof e) if ("[object Array]" === Object.prototype.toString.call(e)) o += S(e, n, r);
                            else if (e instanceof Date) o += m(e, n, r, !1), o += e.toISOString(), o += y(e, n);
                            else {
                                var i = v(e);
                                i > 0 || e.__text || e.__cdata ? (o += m(e, n, r, !1), o += w(e), o += y(e, n)) : t.selfClosingElements ? o += m(e, n, r, !0) : (o += m(e, n, r, !1), o += y(e, n))
                            } else o += m(e, n, r, !1), o += T(e), o += y(e, n);
                            else o += m(e, n, r, !0);
                            return o
                        }
                        function w(e) {
                            var t = "",
                                n = v(e);
                            if (n > 0) for (var r in e) if (!h(e, r)) {
                                var o = e[r],
                                    i = b(o);
                                t += k(o, r, i)
                            }
                            return t += T(e)
                        }
                        function O(t) {
                            if (void 0 === t) return null;
                            if ("string" != typeof t) return null;
                            var n = null,
                                r = null;
                            if (e) n = new e, r = n.parseFromString(t, "text/xml");
                            else if (window && window.DOMParser) {
                                n = new window.DOMParser;
                                var o = null,
                                    i = window.ActiveXObject || "ActiveXObject" in window;
                                if (!i) try {
                                    o = n.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI
                                } catch (s) {
                                    o = null
                                }
                                try {
                                    r = n.parseFromString(t, "text/xml"), null !== o && r.getElementsByTagNameNS(o, "parsererror").length > 0 && (r = null)
                                } catch (s) {
                                    r = null
                                }
                            } else 0 === t.indexOf("<?") && (t = t.substr(t.indexOf("?>") + 2)), r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(t);
                            return r
                        }
                        var C = "3.1.1";
                        t = t || {}, n(), r();
                        var I = {
                            ELEMENT_NODE: 1,
                            TEXT_NODE: 3,
                            CDATA_SECTION_NODE: 4,
                            COMMENT_NODE: 8,
                            DOCUMENT_NODE: 9
                        };
                        this.asArray = function(e) {
                            return void 0 === e || null === e ? [] : e instanceof Array ? e : [e]
                        }, this.toXmlDateTime = function(e) {
                            return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
                        }, this.asDateTime = function(e) {
                            return "string" == typeof e ? u(e) : e
                        }, this.xml2dom = function(e) {
                            return O(e)
                        }, this.dom2js = function(e) {
                            return p(e, null)
                        }, this.js2dom = function(e) {
                            var t = this.js2xml(e);
                            return O(t)
                        }, this.xml2js = function(e) {
                            var t = O(e);
                            return null != t ? this.dom2js(t) : null
                        }, this.js2xml = function(e) {
                            return w(e)
                        }, this.getVersion = function() {
                            return C
                        }
                    }
                })
        }, function(e, t, n) {
            "use strict";

            function r(e, t) {
                for (var n = 0; n < e.length; n++) t(e[n])
            }
            function o(e) {
                for (var t in e) if (e.hasOwnProperty(t)) return !1;
                return !0
            }
            function i(e, t, n) {
                var r = e;
                return d(t) ? (n = t, "string" == typeof e && (r = {
                    uri: e
                })) : r = p(t, {
                    uri: e
                }), r.callback = n, r
            }
            function s(e, t, n) {
                return t = i(e, t, n), a(t)
            }
            function a(e) {
                function t() {
                    4 === l.readyState && setTimeout(i, 0)
                }
                function n() {
                    var e = void 0;
                    if (e = l.response ? l.response : l.responseText || c(l), M) try {
                        e = JSON.parse(e)
                    } catch (t) {}
                    return e
                }
                function r(e) {
                    return clearTimeout(m), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, u(e, T)
                }
                function i() {
                    if (!p) {
                        var t;
                        clearTimeout(m), t = e.useXDR && void 0 === l.status ? 200 : 1223 === l.status ? 204 : l.status;
                        var r = T,
                            o = null;
                        return 0 !== t ? (r = {
                            body: n(),
                            statusCode: t,
                            method: g,
                            headers: {},
                            url: y,
                            rawRequest: l
                        }, l.getAllResponseHeaders && (r.headers = f(l.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"), u(o, r, r.body)
                    }
                }
                if ("undefined" == typeof e.callback) throw new Error("callback argument missing");
                var a = !1,
                    u = function(t, n, r) {
                        a || (a = !0, e.callback(t, n, r))
                    },
                    l = e.xhr || null;
                l || (l = e.cors || e.useXDR ? new s.XDomainRequest : new s.XMLHttpRequest);
                var d, p, m, y = l.url = e.uri || e.url,
                    g = l.method = e.method || "GET",
                    h = e.body || e.data,
                    v = l.headers = e.headers || {},
                    b = !! e.sync,
                    M = !1,
                    T = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: g,
                        url: y,
                        rawRequest: l
                    };
                if ("json" in e && e.json !== !1 && (M = !0, v.accept || v.Accept || (v.Accept = "application/json"), "GET" !== g && "HEAD" !== g && (v["content-type"] || v["Content-Type"] || (v["Content-Type"] = "application/json"), h = JSON.stringify(e.json === !0 ? h : e.json))), l.onreadystatechange = t, l.onload = i, l.onerror = r, l.onprogress = function() {}, l.onabort = function() {
                        p = !0
                    }, l.ontimeout = r, l.open(g, y, !b, e.username, e.password), b || (l.withCredentials = !! e.withCredentials), !b && e.timeout > 0 && (m = setTimeout(function() {
                        if (!p) {
                            p = !0, l.abort("timeout");
                            var e = new Error("XMLHttpRequest timeout");
                            e.code = "ETIMEDOUT", r(e)
                        }
                    }, e.timeout)), l.setRequestHeader) for (d in v) v.hasOwnProperty(d) && l.setRequestHeader(d, v[d]);
                else if (e.headers && !o(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in e && (l.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(l), l.send(h || null), l
            }
            function c(e) {
                try {
                    if ("document" === e.responseType) return e.responseXML;
                    var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                    if ("" === e.responseType && !t) return e.responseXML
                } catch (n) {}
                return null
            }
            function u() {}
            var l = n(101),
                d = n(55),
                f = n(103),
                p = n(110);
            e.exports = s, s.XMLHttpRequest = l.XMLHttpRequest || u, s.XDomainRequest = "withCredentials" in new s.XMLHttpRequest ? s.XMLHttpRequest : l.XDomainRequest, r(["get", "put", "post", "patch", "head", "delete"], function(e) {
                s["delete" === e ? "del" : e] = function(t, n, r) {
                    return n = i(t, n, r), n.method = e.toUpperCase(), a(n)
                }
            })
        }, function(e, t) {
            function n() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) r.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            e.exports = n;
            var r = Object.prototype.hasOwnProperty
        }, function(e, t) {
            (function(t) {
                e.exports = t
            }).call(t, {})
        }, , , , , function(e, t, n) {
            "use strict";
            var r = n(8),
                o = n(59);
            o(r), e.exports = r
        }, , , , function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1);
            r.audioToText = function(e) {
                o.verifyOptions(e, "url"), e.audioToText = o.filterObj(e, "url");
                var t = this;
                t.processCallback(e), t.sendCmd("audioToText", e)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1);
            r.getChatroomAddress = function(e) {
                o.verifyOptions(e, "chatroomId");
                var t = this;
                t.processCallback(e), t.sendCmd("getChatroomAddress", e)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1);
            r.kick = function(e) {
                o.verifyOptions(e, "deviceIds"), this.processCallback(e), this.sendCmd("kick", {
                    deviceIds: e.deviceIds.slice(0)
                }, e.callback)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn;
            r.clearDB = function(e) {
                var t = this,
                    n = t.db;
                t.processCallback(e);
                var r = e.done;
                n.enable ? n.clear().then(r, r) : r()
            }, r.removeDB = function(e) {
                var t = this,
                    n = t.db;
                t.processCallback(e);
                var r = e.done;
                n.enable ? n.destroy().then(r, r) : r()
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return "object" === ("undefined" == typeof e ? "undefined" : o(e)) && (e.msgEventSubscribes ? e = e.msgEventSubscribes : e.msgEventSubscribe ? e = e.msgEventSubscribe : e.accounts ? e = e.accounts : e.msgEvent && (e = e.msgEvent, e.time && (e.time = +e.time)), 1 === e.sync ? e.sync = !0 : 0 === e.sync && (e.sync = !1)), e
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, i = n(2).Promise, s = n(8).fn, a = n(1), c = n(169), u = n(170);
            s.batchSendEventsCmds = function(e, t, n) {
                var o = this,
                    s = 100,
                    c = a.dropArrayDuplicates(t.accounts);
                c = a.reshape2d(c, s);
                var u = [];
                c.forEach(function(n) {
                    u.push(new i(function(i, s) {
                        var c = a.simpleClone(t);
                        c.accounts = n, o.sendCmdWithResp(e, c, function(e, t) {
                            e ? s(e) : i(r(t))
                        })
                    }))
                }), i.all(u).then(function(e) {
                    var t = null;
                    if (e.length > 0) if (e[0].msgEventSubscribe) {
                        var o = e[0].msgEventSubscribe;
                        o = r(o);
                        var i = [];
                        e.forEach(function(e) {
                            i = i.concat(e.accounts)
                        }), t = {
                            accounts: i,
                            msgEventSubscribe: o
                        }
                    } else t = [], e.forEach(function(e) {
                        t = t.concat(e)
                    });
                    n(null, t)
                }, function(e) {
                    n(e, null)
                })
            }, s.publishEvent = function(e) {
                var t = this,
                    n = new c(e);
                n = n.assembleEvent(), t.processCallback(e), this.sendCmdWithResp("publishEvent", {
                    msgEvent: n
                }, function(t, n) {
                    t || (n = r(n)), e.callback(t, n)
                })
            }, s.subscribeEvent = function(e) {
                var t = this;
                a.verifyOptions(e, "accounts");
                var n = new u(e);
                a.verifyParamType("accounts", e.accounts, "array"), t.processCallback(e), n = n.assembleEvent(), this.batchSendEventsCmds("subscribeEvent", {
                    msgEventSubscribe: n,
                    accounts: e.accounts
                }, function(t, n) {
                    !t && n && (n = {
                        failedAccounts: n
                    }), e.callback(t, n)
                })
            }, s.unSubscribeEventsByAccounts = function(e) {
                var t = this;
                a.verifyOptions(e, "accounts"), a.verifyParamType("accounts", e.accounts, "array");
                var n = new u(e);
                n = n.assembleEvent(), t.processCallback(e), this.batchSendEventsCmds("unSubscribeEventsByAccounts", {
                    msgEventSubscribe: n,
                    accounts: e.accounts
                }, function(t, n) {
                    !t && n && (n = {
                        failedAccounts: n
                    }), e.callback(t, n)
                })
            }, s.unSubscribeEventsByType = function(e) {
                var t = this,
                    n = new u(e);
                n = n.assembleEvent(), t.processCallback(e), this.sendCmdWithResp("unSubscribeEventsByType", {
                    msgEventSubscribe: n
                }, function(t, n) {
                    e.callback(t)
                })
            }, s.querySubscribeEventsByAccounts = function(e) {
                var t = this;
                a.verifyOptions(e, "accounts"), a.verifyParamType("accounts", e.accounts, "array");
                var n = new u(e);
                n = n.assembleEvent(), t.processCallback(e), this.batchSendEventsCmds("querySubscribeEventsByAccounts", {
                    msgEventSubscribe: n,
                    accounts: e.accounts
                }, function(t, n) {
                    !t && n && (n = {
                        msgEventSubscribes: n
                    }), e.callback(t, n)
                })
            }, s.querySubscribeEventsByType = function(e) {
                var t = this,
                    n = new u(e);
                n = n.assembleEvent(), t.processCallback(e), this.sendCmdWithResp("querySubscribeEventsByType", {
                    msgEventSubscribe: n
                }, function(t, n) {
                    t || (n = {
                        msgEventSubscribes: r(n)
                    }), e.callback(t, n)
                })
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1),
                i = o.notundef,
                s = n(77);
            r.friendRequest = function(e) {
                o.verifyOptions(e, "type account"), o.verifyParamValid("type", e.type, s.validTypes()), this.processPs(e), this.processCallback(e);
                var t = {
                    account: e.account,
                    type: s.getByteFromType(e.type),
                    ps: e.ps
                };
                i(e.idServer) && (t.idServer = e.idServer), this.sendCmd("friendRequest", t, e.callback)
            }, r.addFriend = function(e) {
                e.type = "addFriend", this.friendRequest(e)
            }, r.applyFriend = function(e) {
                e.type = "applyFriend", this.friendRequest(e)
            }, r.passFriendApply = function(e) {
                o.verifyOptions(e, "idServer"), e.type = "passFriendApply", this.friendRequest(e)
            }, r.rejectFriendApply = function(e) {
                o.verifyOptions(e, "idServer"), e.type = "rejectFriendApply", this.friendRequest(e)
            }, r.deleteFriend = function(e) {
                o.verifyOptions(e, "account"), this.processCallback(e), this.sendCmd("deleteFriend", {
                    account: e.account
                }, e.callback)
            }, r.updateFriend = function(e) {
                this.processCallback(e);
                var t = new s(e);
                this.sendCmd("updateFriend", {
                    friend: t,
                    single: !0
                }, e.callback)
            }, r.getFriends = function(e) {
                function t() {
                    n.sendCmd("getFriends", {
                        timetag: i,
                        NOTSTORE: "timetag"
                    }, e.callback)
                }
                var n = this,
                    r = n.db,
                    i = 0;
                o.verifyOptions(e), n.processCallback(e), r.enable ? r.getFriendsTimetag().then(function(e) {
                    i = e, t()
                }, t) : t()
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1),
                i = o.isArray,
                s = n(23);
            r.mergeObjArray = function(e, t, n) {
                return e || (e = []), t ? (i(t) || (t = [t]), t.length ? (n = n || {}, o.mergeObjArray(e, t, n)) : e) : e
            }, r.cutObjArray = function(e, t, n) {
                return e && t ? (i(t) || (t = [t]), t.length ? (n = n || {}, o.cutObjArray(e, t, n)) : e) : e
            }, r.mergeLoginPorts = function(e, t) {
                return this.mergeObjArray(e, t, {
                    keyPath: "deviceId"
                })
            }, r.cutLoginPorts = function(e, t) {
                return this.cutObjArray(e, t, {
                    keyPath: "deviceId",
                    sortPath: "type"
                })
            }, r.mergeRelations = function(e, t) {
                return this.mergeObjArray(e, t, {
                    keyPath: "account"
                })
            }, r.cutRelations = function(e, t) {
                return this.cutObjArray(e, t, {
                    keyPath: "account"
                })
            }, r.findRelation = function(e, t) {
                return o.findObjInArray(e, {
                    keyPath: "account",
                    value: t
                })
            }, r.mergeFriends = function(e, t) {
                return this.mergeObjArray(e, t, {
                    keyPath: "account"
                })
            }, r.cutFriends = function(e, t) {
                return this.cutObjArray(e, t, {
                    keyPath: "account"
                })
            }, r.cutFriendsByAccounts = function(e, t) {
                i(t) || (t = [t]);
                var n = t.map(function(e) {
                    return {
                        account: e
                    }
                });
                return this.cutFriends(e, n)
            }, r.findFriend = function(e, t) {
                return o.findObjInArray(e, {
                    keyPath: "account",
                    value: t
                })
            }, r.mergeUsers = function(e, t) {
                return this.mergeObjArray(e, t, {
                    keyPath: "account"
                })
            }, r.findUser = function(e, t) {
                return o.findObjInArray(e, {
                    keyPath: "account",
                    value: t
                })
            }, r.mergeTeams = function(e, t) {
                return this.mergeObjArray(e, t, {
                    keyPath: "teamId"
                })
            }, r.cutTeams = function(e, t) {
                return this.cutObjArray(e, t, {
                    keyPath: "teamId"
                })
            }, r.findTeam = function(e, t) {
                return o.findObjInArray(e, {
                    keyPath: "teamId",
                    value: t
                })
            }, r.assembleTeamOwner = s.assembleOwner, r.assembleTeamMembers = s.assembleMembers, r.genTeamMemberId = s.genId, r.mergeTeamMembers = function(e, t) {
                return this.mergeObjArray(e, t)
            }, r.cutTeamMembers = function(e, t) {
                return this.cutObjArray(e, t)
            }, r.cutTeamMembersByAccounts = function(e, t, n) {
                i(n) || (n = [n]);
                var r = s.assembleMembers({
                    teamId: t
                }, n);
                return this.cutTeamMembers(e, r)
            }, r.findTeamMember = function(e, t) {
                return o.findObjInArray(e, {
                    keyPath: "id",
                    value: t
                })
            }, r.mergeSessions = function(e, t) {
                return this.mergeObjArray(e, t, {
                    sortPath: "updateTime",
                    desc: !0
                })
            }, r.cutSessions = function(e, t) {
                return this.cutObjArray(e, t)
            }, r.cutSessionsByIds = function(e, t) {
                i(t) || (t = [t]);
                var n = t.map(function(e) {
                    return {
                        id: e
                    }
                });
                return this.cutSessions(e, n)
            }, r.findSession = function(e, t) {
                return o.findObjInArray(e, {
                    keyPath: "id",
                    value: t
                })
            }, r.mergeMsgs = function(e, t) {
                return this.mergeObjArray(e, t, {
                    keyPath: "idClient",
                    sortPath: "time"
                })
            }, r.cutMsgs = function(e, t) {
                return this.cutObjArray(e, t, {
                    keyPath: "idClient"
                })
            }, r.cutMsgsByIdClients = function(e, t) {
                i(t) || (t = [t]);
                var n = t.map(function(e) {
                    return {
                        idClient: e
                    }
                });
                return this.cutMsgs(e, n)
            }, r.findMsg = function(e, t) {
                return o.findObjInArray(e, {
                    keyPath: "idClient",
                    value: t
                })
            }, r.mergeSysMsgs = function(e, t) {
                return this.mergeObjArray(e, t, {
                    keyPath: "idServer",
                    desc: !0
                })
            }, r.cutSysMsgs = function(e, t) {
                return this.cutObjArray(e, t, {
                    keyPath: "idServer"
                })
            }, r.cutSysMsgsByIdServers = function(e, t) {
                i(t) || (t = [t]);
                var n = t.map(function(e) {
                    return {
                        idServer: e
                    }
                });
                return this.cutSysMsgs(e, n)
            }, r.findSysMsg = function(e, t) {
                return o.findObjInArray(e, {
                    keyPath: "idServer",
                    value: t
                })
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1),
                i = o.undef,
                s = o.notundef,
                a = n(15),
                c = n(30),
                u = n(31),
                l = n(5);
            r.beforeSendMsg = function(e) {
                var t = this,
                    n = t.protocol,
                    r = e.msg;
                r.to === t.account && (r.fromDeviceId = a.deviceId), r.userUpdateTime = n.myInfo && n.myInfo.updateTime;
                var o;
                switch (r.getScene()) {
                    case "p2p":
                        o = "sendMsg";
                        break;
                    case "team":
                        o = "sendTeamMsg"
                }
                e.filter && (o = "sendFilterMsg", r.filter = !0), e.cmd = o
            }, r.afterSendMsg = function(e) {
                var t = e.rtnMsg,
                    n = c.genSessionByMsg(t);
                this.protocol.onUpdateSession(n)
            }, r.beforeForwardMsg = function(e) {
                o.verifyOptions(e, "msg scene to"), e.msg.scene = e.scene, e.msg.to = e.to
            }, r.markMsgRead = function(e) {
                var t = this,
                    n = t.protocol;
                return !e || t.db.enable || n.options.autoMarkRead ? void t.logger.warn("api::markMsgRead: 不需要标记消息为已收到 (没有消息, 或者启用了数据库, 或者启用了自动标记已收到)") : void n.markMsgRead(e, !0)
            }, r.sendMsgReceipt = function(e) {
                var t = this;
                if (o.verifyOptions(e), t.processCallback(e), !e.msg) return void e.done();
                var n = "target idClient time";
                o.verifyOptions(e, "msg");
                var r = e.msg;
                o.verifyOptions(r, n, !0, "msg."), t.protocol.shouldSendMsgReceipt(r) ? t.sendCmd("sendMsgReceipt", {
                    msgReceipt: {
                        to: r.target,
                        idClient: r.idClient,
                        time: r.time
                    }
                }, e.callback) : e.done()
            }, r.isMsgRemoteRead = function(e) {
                return this.protocol.isMsgRemoteRead(e)
            }, r.deleteMsg = function(e) {
                var t = this;
                o.verifyOptions(e, "msg");
                var n = e.msg;
                if ("team" !== n.scene && "out" !== n.flow || "success" !== n.status || n.from === n.to || n.isLocal) return e.done(l.newParamError("只能删除自己发送给别人的, 并且发送成功的消息"), e);
                o.verifyOptions(n, ["scene", "to", "from", "time", "idClient", "idServer"], !0, "msg."), o.verifyParamValid("msg.scene", n.scene, t.message.validScenes);
                var r = o.simpleClone(n);
                this.processPs(r), this.processCallback(e), s(e.opeAccount) ? r.opeAccount = e.opeAccount : i(r.opeAccount) && (r.opeAccount = r.from), "p2p" === r.scene ? r.type = "deleteMsgP2p" : r.type = "deleteMsgTeam", r.deletedIdClient = r.idClient, r.deletedIdServer = r.idServer, r = new u(r), t.sendCmd("deleteMsg", {
                    sysMsg: r,
                    msg: n
                }, e.callback)
            }, r.getHistoryMsgs = function(e) {
                var t = this;
                o.verifyOptions(e, "scene to"), o.verifyParamValid("scene", e.scene, t.message.validScenes), "undefined" == typeof e.beginTime && (e.beginTime = 0), o.verifyParamType("beginTime", e.beginTime, "number"), "undefined" == typeof e.endTime && (e.endTime = 0), o.verifyParamType("endTime", e.endTime, "number"), "undefined" != typeof e.lastMsgId && null !== e.lastMsgId || (e.lastMsgId = "0"), "undefined" == typeof e.limit && (e.limit = 100), o.verifyParamType("limit", e.limit, "number"), o.verifyParamMax("limit", e.limit, 100), s(e.reverse) ? o.verifyParamType("reverse", e.reverse, "boolean") : e.reverse = !1, s(e.asc) ? o.verifyParamType("asc", e.asc, "boolean") : e.asc = !1, t.processCallback(e), e.asc && (e.cbaop = function(e, t) {
                    e || (t.msgs = t.msgs.reverse())
                });
                var n;
                switch (e.scene) {
                    case "p2p":
                        n = "getHistoryMsgs";
                        break;
                    case "team":
                        n = "getTeamHistoryMsgs"
                }
                var r = {
                    scene: e.scene,
                    to: e.to,
                    beginTime: e.beginTime,
                    endTime: e.endTime,
                    lastMsgId: e.lastMsgId,
                    limit: e.limit,
                    reverse: e.reverse
                };
                t.sendCmd(n, r, e.callback)
            }, r.searchHistoryMsgs = function(e) {
                var t = this;
                o.verifyOptions(e, "scene to keyword"), o.verifyParamValid("scene", e.scene, t.message.validScenes), "undefined" == typeof e.beginTime && (e.beginTime = 0), o.verifyParamType("beginTime", e.beginTime, "number"), "undefined" == typeof e.endTime && (e.endTime = 0), o.verifyParamType("endTime", e.endTime, "number"), "undefined" == typeof e.limit && (e.limit = 100), o.verifyParamType("limit", e.limit, "number"), o.verifyParamMax("limit", e.limit, 100), s(e.reverse) ? o.verifyParamType("reverse", e.reverse, "boolean") : e.reverse = !1, s(e.asc) ? o.verifyParamType("asc", e.asc, "boolean") : e.asc = !1, t.processCallback(e), e.asc && (e.cbaop = function(e, t) {
                    e || (t.msgs = t.msgs.reverse())
                });
                var n;
                switch (e.scene) {
                    case "p2p":
                        n = "searchHistoryMsgs";
                        break;
                    case "team":
                        n = "searchTeamHistoryMsgs"
                }
                var r = o.filterObj(e, "scene to beginTime endTime keyword limit reverse");
                t.sendCmd(n, r, e.callback)
            }, r.getLocalMsgs = function(e) {
                function t() {
                    e.msgs = c, e.done(n, e)
                }
                var n, r = this,
                    a = r.db,
                    c = [];
                o.verifyOptions(e);
                var u = !1;
                s(e.start) && (u = !0, o.verifyParamType("start", e.start, "number"));
                var l = !1;
                s(e.end) && (l = !0, o.verifyParamType("end", e.end, "number")), u && l && e.end <= e.start && o.onParamError("参数 end 必须晚于 start"), i(e.limit) && (e.limit = 100), o.verifyParamType("limit", e.limit, "number"), o.verifyParamMin("limit", e.limit, 1), r.processCallback(e), a.enable ? a.getMsgs(e).then(function(e) {
                    c = e, t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, r.getLocalMsgByIdClient = function(e) {
                function t() {
                    e.msg = s, e.done(n, e)
                }
                var n, r = this,
                    i = r.db,
                    s = null;
                o.verifyOptions(e, "idClient"), r.processCallback(e), i.enable ? i.getMsgByIdClient(e.idClient).then(function(e) {
                    e && (s = e), t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, r.getLocalMsgsByIdClients = function(e) {
                function t() {
                    e.msgs = s, e.done(n, e)
                }
                var n, r = this,
                    i = r.db,
                    s = [];
                o.verifyOptions(e, "idClients"), o.verifyParamType("idClients", e.idClients, "array"), r.processCallback(e), i.enable ? i.getMsgsByIdClients(e.idClients).then(function(e) {
                    s = e.filter(function(e) {
                        return !!e
                    }), t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, r.updateLocalMsg = function(e) {
                function t() {
                    e.msg = s, e.done(n, e)
                }
                var n, r = this,
                    i = r.db,
                    s = null;
                if (o.verifyOptions(e, "idClient"), r.processCallback(e), i.enable) {
                    var a = o.filterObj(e, "idClient localCustom");
                    i.updateMsg(a).then(function(e) {
                        s = e, t()
                    }, function(e) {
                        n = e, t()
                    })
                } else t()
            }, r.deleteLocalMsg = function(e) {
                function t() {
                    e.done(n, e)
                }
                var n, r = this;
                o.verifyOptions(e, "msg");
                var i = e.msg;
                o.verifyOptions(i, "idClient sessionId", !0, "msg."), r.processCallback(e), r.protocol.deleteLocalMsg(i).then(t, function(e) {
                    n = e, t()
                })
            }, r.deleteLocalMsgsBySession = function(e) {
                function t() {
                    e.done(n, e)
                }
                var n, r = this,
                    i = r.db;
                o.verifyOptions(e, "scene to"), o.verifyParamValid("scene", e.scene, r.message.validScenes), e.sessionId = e.scene + "-" + e.to, r.processCallback(e), i.enable ? i.deleteMsgsBySessionId(e.sessionId).then(function() {
                    t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, r.deleteAllLocalMsgs = function(e) {
                function t() {
                    e.done(n, e)
                }
                var n, r = this,
                    o = r.db;
                r.processCallback(e), o.enable && o.deleteAllMsgs().then(function() {
                    t()
                }, function(e) {
                    n = e, t()
                })
            }
        }, , function(e, t) {
            "use strict"
        }, function(e, t) {
            "use strict"
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(61),
                i = n(1),
                s = i.undef;
            r.getPushNotificationMultiportConfig = function() {
                return this.protocol.getPushNotificationMultiportConfig()
            }, r.updatePushNotificationMultiportConfig = function(e) {
                i.verifyOptions(e), s(e.shouldPushNotificationWhenPCOnline) && (e.shouldPushNotificationWhenPCOnline = !0), e.donnop = new o(e), this.processCallback(e), this.sendCmd("updateDonnop", e)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1);
            r.markInBlacklist = function(e) {
                o.verifyOptions(e, "account isAdd"), o.verifyParamType("isAdd", e.isAdd, "boolean"), this.processCallback(e), this.sendCmd("markInBlacklist", {
                    account: e.account,
                    isAdd: e.isAdd
                }, e.callback)
            }, r.addToBlacklist = function(e) {
                return e.isAdd = !0, this.markInBlacklist(e)
            }, r.removeFromBlacklist = function(e) {
                return e.isAdd = !1, this.markInBlacklist(e)
            }, r.markInMutelist = function(e) {
                o.verifyOptions(e, "account"), o.verifyParamType("isAdd", e.isAdd, "boolean"), this.processCallback(e), this.sendCmd("markInMutelist", {
                    account: e.account,
                    isAdd: e.isAdd
                }, e.callback)
            }, r.addToMutelist = function(e) {
                return e.isAdd = !0, this.markInMutelist(e)
            }, r.removeFromMutelist = function(e) {
                return e.isAdd = !1, this.markInMutelist(e)
            }, r.getRelations = function(e) {
                function t() {
                    n.sendCmd("getRelations", {
                        timetag: i,
                        NOTSTORE: "timetag"
                    }, e.callback)
                }
                var n = this,
                    r = n.db,
                    i = 0;
                e = o.verifyOptions(e), n.processCallback(e), r.enable ? r.getRelationsTimetag().then(function(e) {
                    i = e, t()
                }, t) : t()
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn;
            r.getRobots = function(e) {
                e = e || {}, e.type = "getRobots", this.processCallback(e), this.sendCmd("sync", {
                    sync: {
                        robots: 0
                    }
                }, e.callback)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1),
                i = o.undef,
                s = o.notundef;
            r.setCurrSession = function(e) {
                var t = this;
                t.resetSessionUnread(e), t.protocol.setCurrSession(e)
            }, r.resetAllSessionUnread = function() {
                var e = this;
                for (var t in e.protocol.sessionSet) e.protocol.sessionSet[t].unread > 0 && e.resetSessionUnread(t)
            }, r.resetSessionUnread = function(e) {
                var t = this;
                if (t.protocol.resetSessionUnread(e), t.options.syncSessionUnread) {
                    var n = t.protocol.findSession(e);
                    if (!n) return void t.logger.warn("api::resetSessionUnread: session undefined " + e);
                    if (!n.lastMsg) return void t.logger.warn("api::resetSessionUnread: session.lastMsg undefined " + e);
                    if (!n.scene || !n.to) return void t.logger.warn("api::resetSessionUnread: session.scene|to undefined " + e);
                    var r = n.lastMsg.time;
                    if (n && n.ack && n.ack >= r) return void t.logger.warn("api::resetSessionUnread: session ack not needs " + e);
                    var o = {
                        scene: "p2p" === n.scene ? 0 : 1,
                        to: n.to,
                        timetag: r
                    };
                    t.sendCmd("markSessionAck", o)
                }
            }, r.resetCurrSession = function() {
                this.protocol.setCurrSession("")
            }, r.insertLocalSession = function(e) {
                function t() {
                    e.session = r, e.done(n, e)
                }
                var n, r, i = this;
                o.verifyOptions(e, "scene to"), o.verifyParamValid("scene", e.scene, i.message.validScenes), i.processCallback(e), i.protocol.insertLocalSession(e).then(function(e) {
                    r = e, t()
                }, function(e) {
                    n = e, t()
                })
            }, r.getLocalSessions = function(e) {
                function t() {
                    e.sessions = c, e.done(n, e)
                }
                var n, r = this,
                    a = r.db,
                    c = [];
                o.verifyOptions(e), i(e.limit) && (e.limit = 100), o.verifyParamType("limit", e.limit, "number"), o.verifyParamMax("limit", e.limit, 100), s(e.reverse) ? o.verifyParamType("reverse", e.reverse, "boolean") : e.reverse = !1, r.processCallback(e), a.enable ? a.getSessions(e).then(function(e) {
                    c = e, r.protocol.mergeSessions(c), t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, r.updateLocalSession = function(e) {
                function t() {
                    r.protocol.onUpdateSession(s), e.session = s, e.done(n, e)
                }
                var n, r = this,
                    i = r.db;
                o.verifyOptions(e, "id"), r.processCallback(e);
                var s = o.filterObj(e, "id localCustom");
                i.enable ? i.updateSession(s).then(function(e) {
                    s = e, t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, r.deleteLocalSession = function(e) {
                function t() {
                    e.done(n, e)
                }
                var n, r = this,
                    i = r.db;
                o.verifyOptions(e, "id"), r.processCallback(e), i.enable ? i.deleteSession(e.id).then(function() {
                    r.protocol.deleteLocalSession(e.id), t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, r.deleteSession = function(e) {
                o.verifyOptions(e, "scene to"), this.processCallback(e), e.sessions = [{
                    scene: e.scene,
                    to: e.to
                }], this.deleteSessions(e)
            }, r.deleteSessions = function(e) {
                o.verifyOptions(e, "sessions"), o.verifyParamType("sessions", e.sessions, "array"), e.sessions.forEach(function(e, t) {
                    o.verifyOptions(e, "scene to", !0, "sessions[" + t + "].")
                }), this.processCallback(e), this.sendCmd("deleteSessions", {
                    sessions: e.sessions.map(function(e) {
                        return e.scene + "|" + e.to
                    })
                }, e.callback)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(8).fn,
                i = n(1),
                s = i.undef,
                a = i.notundef,
                c = n(31);
            o.markSysMsgRead = function(e) {
                function t() {
                    e.done(n, e)
                }
                var n, o = this,
                    s = o.db,
                    a = r.resolve(),
                    c = o.protocol;
                i.verifyOptions(e, "sysMsgs");
                var u = e.sysMsgs;
                i.isArray(u) || (u = [u]), s.enable ? a = s.markSysMsgRead(u).then(function(e) {
                    u = e, c.onUpdateSysMsg(e)
                }) : (u = u.filter(function(e) {
                    return !e.read
                }), u.length && (c.options.autoMarkRead || c.markSysMsgRead(u, !0), u.forEach(function(e) {
                    e.read = !0
                }), c.onUpdateSysMsg(u))), a.then(function() {
                    return c.reduceSysMsgUnread(u)
                }).then(t, function(e) {
                    n = e, t()
                })
            }, o.sendCustomSysMsg = function(e) {
                var t = this;
                i.verifyOptions(e, "scene to content"), i.verifyParamValid("scene", e.scene, t.message.validScenes), t.processCallback(e), "p2p" === e.scene ? e.type = "customP2p" : e.type = "customTeam", e.sysMsg = new c(e);
                var n = "sendCustomSysMsg";
                return e.filter && (n = "sendFilterCustomSysMsg"), t.sendCmd(n, {
                    sysMsg: e.sysMsg,
                    single: !0
                }, e.callback), t.formatReturnSysMsg(e.sysMsg)
            }, o.formatReturnSysMsg = function(e) {
                var t = this;
                return e = i.copy(e), t.protocol.completeSysMsg(e), e.status = "sending", e = c.reverse(e)
            }, o.getLocalSysMsgs = function(e) {
                function t() {
                    e.sysMsgs = u, e.done(n, e)
                }
                var n, r = this,
                    o = r.db,
                    u = [];
                i.verifyOptions(e), e.category && i.verifyParamValid("category", e.category, c.validCategories), e.type && i.verifyParamValid("type", e.type, c.validTypes), s(e.limit) && (e.limit = 100), i.verifyParamType("limit", e.limit, "number"), i.verifyParamMax("limit", e.limit, 100), a(e.reverse) ? i.verifyParamType("reverse", e.reverse, "boolean") : e.reverse = !1, r.processCallback(e), o.enable ? o.getSysMsgs(e).then(function(e) {
                    u = e, t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, o.updateLocalSysMsg = function(e) {
                function t() {
                    e.sysMsg = s, e.done(n, e)
                }
                var n, r = this,
                    o = r.db,
                    s = null;
                if (i.verifyOptions(e, "idServer"), r.processCallback(e), o.enable) {
                    var a = i.filterObj(e, "idServer state localCustom");
                    o.updateSysMsg(a).then(function(e) {
                        s = e, t()
                    }, function(e) {
                        n = e, t()
                    })
                } else t()
            }, o.deleteLocalSysMsg = function(e) {
                function t() {
                    e.done(n, e)
                }
                var n, r = this,
                    o = r.db;
                i.verifyOptions(e, "idServer"), r.processCallback(e), o.enable ? o.deleteSysMsg(e.idServer).then(function() {
                    t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, o.deleteAllLocalSysMsgs = function(e) {
                function t() {
                    r.protocol.onUpdateSysMsgUnread({}), e.done(n, e)
                }
                var n, r = this,
                    o = r.db;
                r.processCallback(e), o.enable && o.deleteAllSysMsgs().then(function() {
                    t()
                }, function(e) {
                    n = e, t()
                })
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1),
                i = o.undef,
                s = n(32),
                a = n(23);
            r.createTeam = function(e) {
                o.verifyOptions(e, "type name"), i(e.accounts) ? e.accounts = [] : o.verifyParamType("accounts", e.accounts, "array"), e.action = "create", this.processPs(e), this.processCallback(e), e.team = new s(e);
                var t = {
                    team: e.team,
                    accounts: e.accounts.slice(0),
                    ps: e.ps
                };
                this.sendCmd("createTeam", t, e.callback)
            }, r.updateTeam = function(e) {
                o.verifyOptions(e, "teamId"), e.action = "update", this.processCallback(e), e.team = new s(e), this.sendCmd("updateTeam", {
                    team: e.team,
                    single: !0
                }, e.callback)
            }, r.addTeamMembers = function(e) {
                o.verifyOptions(e, "teamId accounts"), o.verifyParamType("accounts", e.accounts, "array"), this.processPs(e), this.processCallback(e);
                var t = {
                    teamId: e.teamId,
                    accounts: e.accounts.slice(0),
                    ps: e.ps
                };
                this.sendCmd("addTeamMembers", t, e.callback)
            }, r.removeTeamMembers = function(e) {
                o.verifyOptions(e, "teamId accounts"), o.verifyParamType("accounts", e.accounts, "array"), this.processCallback(e);
                var t = {
                    teamId: e.teamId,
                    accounts: e.accounts.slice(0)
                };
                this.sendCmd("removeTeamMembers", t, e.callback)
            }, r.acceptTeamInvite = function(e) {
                o.verifyOptions(e, "idServer teamId from"), this.processCallback(e);
                var t = {
                    idServer: e.idServer,
                    teamId: e.teamId,
                    from: e.from
                };
                this.sendCmd("acceptTeamInvite", t, e.callback)
            }, r.rejectTeamInvite = function(e) {
                o.verifyOptions(e, "idServer teamId from"), this.processPs(e), this.processCallback(e);
                var t = {
                    idServer: e.idServer,
                    teamId: e.teamId,
                    from: e.from,
                    ps: e.ps
                };
                this.sendCmd("rejectTeamInvite", t, e.callback)
            }, r.applyTeam = function(e) {
                o.verifyOptions(e, "teamId"), this.processPs(e), this.processCallback(e);
                var t = {
                    teamId: e.teamId,
                    ps: e.ps
                };
                this.sendCmd("applyTeam", t, e.callback)
            }, r.passTeamApply = function(e) {
                o.verifyOptions(e, "idServer teamId from"), this.processCallback(e);
                var t = {
                    idServer: e.idServer,
                    teamId: e.teamId,
                    from: e.from
                };
                this.sendCmd("passTeamApply", t, e.callback)
            }, r.rejectTeamApply = function(e) {
                o.verifyOptions(e, "idServer teamId from"), this.processPs(e), this.processCallback(e);
                var t = {
                    idServer: e.idServer,
                    teamId: e.teamId,
                    from: e.from,
                    ps: e.ps
                };
                this.sendCmd("rejectTeamApply", t, e.callback)
            }, r.addTeamManagers = function(e) {
                o.verifyOptions(e, "teamId accounts"), o.verifyParamType("accounts", e.accounts, "array"), this.processCallback(e);
                var t = {
                    teamId: e.teamId,
                    accounts: e.accounts.slice(0)
                };
                this.sendCmd("addTeamManagers", t, e.callback)
            }, r.removeTeamManagers = function(e) {
                o.verifyOptions(e, "teamId accounts"), o.verifyParamType("accounts", e.accounts, "array"), this.processCallback(e);
                var t = {
                    teamId: e.teamId,
                    accounts: e.accounts.slice(0)
                };
                this.sendCmd("removeTeamManagers", t, e.callback)
            }, r.updateInfoInTeam = function(e) {
                o.verifyOptions(e, "teamId"), this.processCallback(e), this.sendCmd("updateInfoInTeam", {
                    teamMember: new a(e),
                    single: !0
                }, e.callback)
            }, r.updateNickInTeam = function(e) {
                o.verifyOptions(e, "teamId account"), this.processCallback(e), this.sendCmd("updateNickInTeam", {
                    teamMember: new a(e),
                    single: !0
                }, e.callback)
            }, r.updateMuteStateInTeam = function(e) {
                var t = this;
                o.verifyOptions(e, "teamId account mute"), t.processCallback(e), e.mute = e.mute ? 1 : 0, t.sendCmd("updateMuteStateInTeam", e)
            }, r.getMutedTeamMembers = function(e) {
                var t = this;
                o.verifyOptions(e, "teamId"), t.processCallback(e), t.sendCmd("getMutedTeamMembers", e)
            }, r.leaveTeam = function(e) {
                o.verifyOptions(e, "teamId"), this.processCallback(e);
                var t = {
                    teamId: e.teamId
                };
                this.sendCmd("leaveTeam", t, e.callback)
            }, r.transferTeam = function(e) {
                o.verifyOptions(e, "teamId account leave"), o.verifyParamType("leave", e.leave, "boolean"), this.processCallback(e);
                var t = {
                    teamId: e.teamId,
                    account: e.account,
                    leave: e.leave
                };
                this.sendCmd("transferTeam", t, e.callback)
            }, r.dismissTeam = function(e) {
                o.verifyOptions(e, "teamId"), this.processCallback(e);
                var t = {
                    teamId: e.teamId
                };
                this.sendCmd("dismissTeam", t, e.callback)
            }, r.getTeam = function(e) {
                function t() {
                    r.sendCmd("getTeam", {
                        teamId: e.teamId
                    }, e.callback)
                }
                var n, r = this,
                    i = r.db;
                o.verifyOptions(e, "teamId"), r.processCallback(e), e.cbaop = function(e, t) {
                    e || r.logger.log("api::getTeam: cbaop " + n, t)
                }, n = e.teamId, i.enable && !e.sync ? i.getTeam(n).then(function(o) {
                    o ? (r.logger.log("api::getTeam: db.getTeam " + n, o), e.done(null, o)) : t()
                }, t) : t()
            }, r.getTeams = function(e) {
                function t() {
                    n.sendCmd("getTeams", {
                        timetag: i,
                        NOTSTORE: "timetag"
                    }, e.callback)
                }
                var n = this,
                    r = n.db,
                    i = 0;
                o.verifyOptions(e), n.processCallback(e), r.enable ? r.getTeamsTimetag().then(function(e) {
                    i = e, t()
                }, t) : t()
            }, r.getTeamMembers = function(e) {
                function t() {
                    n.sendCmd("getTeamMembers", {
                        teamId: e.teamId,
                        timetag: r,
                        NOTSTORE: "timetag"
                    }, e.callback)
                }
                var n = this,
                    r = 0;
                o.verifyOptions(e, "teamId"), n.processCallback(e), t()
            }, r.notifyForNewTeamMsg = function(e) {
                var t = this;
                o.verifyOptions(e, "teamIds");
                var n = t.protocol.notifyForNewTeamMsg(e.teamIds);
                n.then(function(t) {
                    e.done(null, t)
                }, function(t) {
                    e.done(t)
                })
            }, r.getMyTeamMembers = function(e) {
                var t = this;
                o.verifyOptions(e, "teamIds");
                var n = t.processCallbackPromise(e);
                return t.sendCmd("getMyTeamMembers", e), n
            }, r.getLocalTeams = function(e) {
                function t() {
                    e.teams = s, e.done(n, e)
                }
                var n, r = this,
                    i = r.db,
                    s = [];
                o.verifyOptions(e, "teamIds"), o.verifyParamType("teamIds", e.teamIds, "array"), r.processCallback(e), i.enable ? i.getTeamsByTeamIds(e.teamIds).then(function(e) {
                    s = e.filter(function(e) {
                        return !!e
                    }), t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, r.getLocalTeamMembers = function(e) {
                function t() {
                    e.members = s, e.done(n, e)
                }
                var n, r = this,
                    i = r.db,
                    s = [];
                o.verifyOptions(e, "teamId accounts"), o.verifyParamType("accounts", e.accounts, "array"), r.processCallback(e), i.enable ? i.getInvalidTeamMembers(e.teamId, e.accounts).then(function(e) {
                    s = e.filter(function(e) {
                        return !!e
                    }), t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }, r.deleteLocalTeam = function(e) {
                function t() {
                    e.done(n, e)
                }
                var n, r = this,
                    i = r.db;
                o.verifyOptions(e, "teamId"), r.processCallback(e), i.enable ? i.deleteTeam(e.teamId).then(function() {
                    t()
                }, function(e) {
                    n = e, t()
                }) : t()
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(8).fn,
                o = n(1),
                i = o.objs2accounts,
                s = n(41);
            r.updateMyInfo = function(e) {
                o.verifyOptions(e), this.processCallback(e), e.user = new s(e), delete e.user.account, this.sendCmd("updateMyInfo", {
                    user: e.user,
                    single: !0
                }, e.callback)
            }, r.getMyInfo = function(e) {
                var t = this;
                return e = e || {}, e.account = t.account, t.getUser(e)
            }, r.getUser = function(e) {
                function t() {
                    r.sendCmd("getUsers", {
                        accounts: [n],
                        single: !0
                    }, e.callback)
                }
                var n, r = this,
                    i = r.db;
                o.verifyOptions(e, "account"), r.processCallback(e), e.cbaop = function(e, t) {
                    if (!e) return t = t[0] || null, r.logger.log("api::getUser: cbaop " + n, t), t
                }, n = e.account, e.sync ? t() : i.enable ? i.getUser(n).then(function(o) {
                    o ? (r.logger.log("api::getUser: db.getUser " + n, o), e.done(null, o)) : t()
                }, t) : t()
            }, r.getUsers = function(e) {
                function t() {
                    r.sendCmd("getUsers", {
                        accounts: n,
                        single: !0
                    }, e.callback)
                }
                var n, r = this,
                    s = r.db,
                    a = [];
                o.verifyOptions(e, "accounts"), o.verifyParamType("accounts", e.accounts, "array"), r.processCallback(e), e.cbaop = function(e, t) {
                    if (!e) return t = t.concat(a), r.logger.log("api::getUsers: cbaop " + n, t), t
                }, n = o.deduplicate(e.accounts), o.verifyArrayMax("accounts", e.accounts, 150), e.sync ? t() : s.enable ? s.getUsers(n).then(function(o) {
                    if (o && o.length === n.length) r.logger.log("api::getUsers: db.getUsers", o), e.done(null, o);
                    else {
                        a = o;
                        var s = i(o),
                            c = [];
                        n.forEach(function(e) {
                            s.indexOf(e) === -1 && c.push(e)
                        }), n = c, t()
                    }
                }, t) : t()
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(13).fn,
                i = n(1),
                s = (i.notundef, "broadcastMsg");
            o.putBroadcastMsg = function(e) {
                var t = this;
                return new r(function(n) {
                    function r() {
                        a--, 0 === a && n(o)
                    }
                    i.isArray(e) || (e = [e]);
                    var o = [],
                        a = e.length;
                    e.forEach(function(e) {
                        e = i.copy(e), t.put(s, e).then(function(e) {
                            o.push(e[0]), r()
                        }, r)
                    })
                })
            }, o.getBroadcastMsgs = function(e) {
                var t = this;
                return e = e || {}, t.getAll(s, e)
            }
        }, function(e, t) {
            "use strict";
            var n = {
                    version: 8
                },
                r = {
                    kv: {
                        key: {
                            keyPath: "key"
                        }
                    },
                    timetag: {
                        key: {
                            keyPath: "name"
                        }
                    },
                    blacklist: {
                        key: {
                            keyPath: "account"
                        }
                    },
                    mutelist: {
                        key: {
                            keyPath: "account"
                        }
                    },
                    friend: {
                        key: {
                            keyPath: "account"
                        }
                    },
                    user: {
                        key: {
                            keyPath: "account"
                        }
                    },
                    team: {
                        key: {
                            keyPath: "teamId"
                        }
                    },
                    teamMember: {
                        key: {
                            keyPath: "id"
                        },
                        indexes: {
                            teamId: {
                                unique: !1
                            },
                            account: {
                                unique: !1
                            }
                        }
                    },
                    msg: {
                        key: {
                            autoIncrement: !0
                        },
                        indexes: {
                            idClient: {
                                unique: !0
                            },
                            sessionId: {
                                unique: !1
                            },
                            time: {
                                unique: !1
                            },
                            type: {
                                unique: !1
                            },
                            sessionType: {
                                unique: !1
                            },
                            status: {
                                unique: !1
                            },
                            sessionTime: {
                                key: ["sessionId", "time"],
                                unique: !1
                            }
                        }
                    },
                    msg1: {
                        key: {
                            keyPath: "idClient"
                        },
                        indexes: {
                            sessionId: {
                                unique: !1
                            },
                            time: {
                                unique: !1
                            },
                            status: {
                                unique: !1
                            },
                            sessionTime: {
                                key: ["sessionId", "time"],
                                unique: !1
                            }
                        }
                    },
                    broadcastMsg: {
                        key: {
                            keyPath: "broadcastId"
                        },
                        indexes: {
                            time: {
                                unique: !1
                            }
                        }
                    },
                    sysMsg: {
                        key: {
                            autoIncrement: !0
                        },
                        indexes: {
                            idServer: {
                                unique: !0
                            },
                            category: {
                                unique: !1
                            },
                            type: {
                                unique: !1
                            }
                        }
                    },
                    sysMsgUnread: {
                        key: {
                            keyPath: "type"
                        }
                    },
                    session: {
                        key: {
                            keyPath: "id"
                        },
                        indexes: {
                            updateTime: {
                                unique: !1
                            }
                        }
                    }
                };
            n.keyPath = function(e) {
                return r[e].key.keyPath
            }, n.schema = function() {
                return window._nimForceSyncIM = !0, r
            }, e.exports = n
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(13).fn,
                i = n(1),
                s = "friend";
            o.mergeFriends = function(e, t, n) {
                var r = this;
                return r.updateAndDelete(s, e, t).then(function() {
                    return r.logger.log("db::mergeFriends: updateAndDelete done", e), n && r.updateFriendTimetag(n), [e, t, n]
                })
            }, o.putFriend = function(e) {
                return this.put(s, e)
            }, o.updateFriend = function(e) {
                var t = this;
                e = i.copy(e);
                var n = e.account;
                return this.getOne(s, null, n, {
                    modifyObj: e
                }).then(function(r) {
                    return r ? t.logger.log("db::updateFriend: " + n, e) : t.logger.warn("db::updateFriend: no record " + n), r
                })
            }, o.deleteFriend = function(e) {
                var t = this,
                    n = t.remove(s, e),
                    o = t.deleteUser(e);
                return r.all([n, o])
            }, o.getFriends = function() {
                var e = function(e) {
                    return e.valid
                };
                return this.getAll(s, {
                    filter: e
                })
            }, o.getFriend = function(e) {
                return this.getOne(s, null, e)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(13).fn,
                o = "kv";
            r.setKey = function(e, t) {
                return this.put(o, {
                    key: e,
                    value: t
                })
            }, r.getKey = function(e) {
                return this.get(o, e).then(function(e) {
                    return e && e.value
                })
            }, r.setDonnop = function(e) {
                return this.setKey("donnop", e)
            }, r.getDonnop = function() {
                return this.getKey("donnop")
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(13).fn,
                i = n(1),
                s = "session",
                a = "msg1",
                c = "sessionId",
                u = "time",
                l = "status",
                d = "sessionTime";
            o.putMsg = function(e) {
                var t = this;
                return i.isArray(e) || (e = [e]), !e.length || e[0].filter ? r.resolve() : (e = e.filter(function(e) {
                    return !e.ignore
                }), t.put(a, e))
            }, o.updateMsg = function(e) {
                var t = this;
                if (!e.filter) {
                    var n = e.idClient,
                        r = i.filterObj(e, "resend status idServer time localCustom");
                    return t.getOne(a, null, n, {
                        modifyObj: r
                    }).then(function(e) {
                        return e ? t.logger.log("db::updateMsg: " + n, r) : t.logger.warn("db::updateMsg: no record " + n), e
                    })
                }
            }, o.getMsgs = function(e) {
                var t = this;
                t.checkDB(), e = e || {};
                var n = u,
                    r = !1,
                    o = !1,
                    s = e.sessionId,
                    c = e.sessionIds;
                i.exist(s) ? (r = !0, n = d) : i.exist(c) && (r = !0, i.isString(c) ? (n = d, s = c) : Array.isArray(c) && (1 === c.length ? (n = d, s = c[0]) : o = !0));
                var l = e.start || 0,
                    f = e.end || 1 / 0,
                    p = l,
                    m = f;
                r && !o && (p = [s, l], m = [s, f]);
                var y = e.desc !== !1,
                    g = e.limit || 100,
                    h = !1,
                    v = !1,
                    b = e.type,
                    M = e.types;
                i.exist(b) ? h = !0 : i.exist(M) && (h = !0, i.isString(M) ? b = M : Array.isArray(M) && (1 === M.length ? b = M[0] : v = !0));
                var T = e.keyword || "",
                    S = e.filterFunc,
                    k = void 0;
                return (o || h || T || i.isFunction(S)) && (k = function(e) {
                    if (o && c.indexOf(e.sessionId) === -1) return !1;
                    if (h) if (v) {
                        if (M.indexOf(e.type) === -1) return !1
                    } else if (b !== e.type) return !1;
                    if (T) {
                        var t = e.text || e.tip || "";
                        if (t.indexOf(T) === -1) return !1
                    }
                    return !S || S(e)
                }), t.server.query(a, n).bound(p, m, !0, !0).desc(y).limit(g).filter(k).execute()
            }, o.getMsgCountAfterAck = function(e) {
                var t = this;
                e = e || {};
                var n = e,
                    o = n.sessionId;
                return t.checkDB(), t.server.query(a, d).bound([o, e.ack], [o, 1 / 0], !0, !0).execute().then(function(t) {
                    var n = t.filter(function(t) {
                        return "out" !== t.flow && ("notification" !== t.type || !! e.shouldCountNotifyUnread(t))
                    });
                    return r.resolve(n.length)
                })
            }, o.amendMsg = function(e) {
                return e ? (i.notexist(e.text) && (e.text = ""), e) : null
            }, o.getMsgByIdClient = function(e) {
                var t = this;
                return t.getOne(a, null, e).then(function(e) {
                    return t.amendMsg(e)
                })
            }, o.getMsgsByIdClients = function(e) {
                var t, n = this,
                    o = [];
                return e.forEach(function(e) {
                    t = n.getMsgByIdClient(e), o.push(t)
                }), r.all(o)
            }, o.clearSendingMsgs = function() {
                var e = this;
                return e.getOnly(a, l, "sending", {
                    modifyObj: {
                        status: "fail"
                    }
                }).then(function(t) {
                    e.logger.log("db::clearSendingMsgs: msgs send failed", t)
                })
            }, o.deleteMsg = function(e) {
                var t, n = this,
                    o = [];
                return i.isArray(e) || (e = [e]), e.forEach(function(e) {
                    t = n.getOne(a, null, e, {
                        remove: !0
                    }).then(function(e) {
                        return n.logger.log("db::deleteMsg:", e), e
                    }), o.push(t)
                }), 1 === o.length ? o[0] : r.all(o)
            }, o.deleteMsgsBySessionId = function(e) {
                var t = this;
                return t.getOnly(a, c, e, {
                    remove: !0
                })
            }, o.deleteAllMsgs = function() {
                var e = this,
                    t = e.clearTable(a),
                    n = e.clearTable(s);
                return r.all([t, n])
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(13).fn,
                i = n(1),
                s = "blacklist",
                a = "mutelist";
            o.mergeRelations = function(e, t, n, o, i) {
                var c = this,
                    u = c.updateAndDelete(s, e, t),
                    l = c.updateAndDelete(a, n, o);
                return r.all([u, l]).then(function() {
                    return c.logger.log("db::mergeRelations: timetag " + i), c.updateRelationTimetag(i), [e, t, n, o, i]
                })
            }, o.getRelations = function() {
                var e = this,
                    t = e.getAll(s),
                    n = e.getAll(a);
                return r.all([t, n])
            }, o.markInBlacklist = function(e) {
                var t = this;
                if (e = i.copy(e), e.isAdd) {
                    var n = e.record;
                    return t.put(s, n)
                }
                var r = e.account;
                return t.remove(s, r)
            }, o.markInMutelist = function(e) {
                var t = this;
                if (e = i.copy(e), e.isAdd) {
                    var n = e.record;
                    return t.put(a, n)
                }
                var r = e.account;
                return t.remove(a, r)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(13).fn,
                o = n(1),
                i = o.notundef,
                s = "session",
                a = "updateTime";
            r.putSession = function(e) {
                return e = o.merge({}, e), delete e.unread, this.modifyOrPut({
                    table: s,
                    obj: e,
                    key: "id",
                    modifyObjWhenPut: {
                        unread: 0
                    }
                })
            }, r.getSessions = function(e) {
                e = e || {};
                var t, n = !e.reverse,
                    r = e.limit || 100,
                    o = e.lastSessionId,
                    c = e.sessionId,
                    u = !1;
                if (i(o)) t = function(e) {
                    return !!u || (e.id === o && (u = !0), !1)
                };
                else if (i(c)) return this.get(s, c);
                return this.getAll(s, {
                    index: a,
                    desc: n,
                    limit: r,
                    filter: t
                })
            }, r.getSession = function(e) {
                return this.get(s, e)
            }, r.updateSession = function(e) {
                var t = this,
                    n = e.id,
                    r = o.filterObj(e, "ack unread lastMsg localCustom msgReceiptTime msgReceiptServerTime");
                return Object.keys(e).forEach(function(t) {
                    0 === t.indexOf("last") && (r[t] = e[t])
                }), this.getOne(s, null, n, {
                    modifyObj: r
                }).then(function(e) {
                    return e ? t.logger.log("db::updateSession: " + n, r) : t.logger.warn("db::updateSession: no record " + n), e
                })
            }, r.resetSessionUnread = function(e) {
                return this.updateSession({
                    id: e,
                    unread: 0
                })
            }, r.deleteSession = function(e) {
                return this.remove(s, e)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(13).fn,
                i = n(1),
                s = i.notundef,
                a = "sysMsg",
                c = "idServer",
                u = "type",
                l = "category",
                d = "sysMsgUnread";
            o.putSysMsg = function(e) {
                var t = this;
                return new r(function(n) {
                    function r() {
                        s--, 0 === s && n(o)
                    }
                    if (i.isArray(e) || (e = [e]), !e[0].filter) {
                        var o = [],
                            s = e.length;
                        e.forEach(function(e) {
                            e = i.copy(e), t.put(a, e).then(function(e) {
                                o.push(e[0]), r()
                            }, r)
                        })
                    }
                })
            }, o.getSysMsgs = function(e) {
                var t = this;
                e = e || {};
                var n = !e.reverse,
                    r = e.limit || 100,
                    o = null,
                    i = null;
                e.category && (o = l, i = e.category), e.type && (o = u, i = e.type);
                var c, d = e.lastIdServer,
                    f = !1,
                    p = e.read;
                return (s(d) || s(p)) && (c = function(e) {
                    function t() {
                        return !s(p) || e.read === p
                    }
                    return s(d) ? (d = "" + d, f ? t() : (e.idServer === d && (f = !0), !1)) : t()
                }), e = {
                    filter: c,
                    desc: n,
                    limit: r
                }, o ? t.getOnly(a, o, i, e) : t.getAll(a, e)
            }, o.getSysMsgByIdServer = function(e) {
                return this.getOne(a, c, e)
            }, o.updateSysMsg = function(e) {
                var t = this;
                if (!e.filter) {
                    var n = "" + e.idServer,
                        r = i.filterObj(e, "read state error localCustom");
                    return this.getOne(a, c, n, {
                        modifyObj: r
                    }).then(function(e) {
                        return e ? t.logger.log("db::updateSysMsg: " + n, r) : t.logger.warn("db::updateSession: " + n), e
                    })
                }
            }, o.markSysMsgRead = function(e) {
                var t = this;
                return new r(function(n, o) {
                    i.isArray(e) || (e = [e]);
                    var s, a, c = [],
                        u = [];
                    e.forEach(function(e) {
                        s = t.getSysMsgByIdServer(e.idServer).then(function(e) {
                            e && !e.read && (a = t.updateSysMsg({
                                idServer: e.idServer,
                                read: !0
                            }), u.push(a))
                        }, o), c.push(s)
                    }), r.all(c).then(function() {
                        r.all(u).then(function(e) {
                            n(e)
                        }, o)
                    }, o)
                })
            }, o.deleteSysMsg = function(e) {
                var t, n = this,
                    o = [];
                return i.isArray(e) || (e = [e]), e.forEach(function(e) {
                    e = "" + e, t = n.getOne(a, c, e, {
                        remove: !0
                    }), o.push(t)
                }), 1 === o.length ? o[0] : r.all(o)
            }, o.deleteAllSysMsgs = function() {
                var e = this,
                    t = e.clearTable(a),
                    n = e.clearTable(d);
                return r.all([t, n])
            }, o.getSysMsgUnread = function() {
                return this.getAll(d).then(function(e) {
                    var t = {};
                    return e.forEach(function(e) {
                        t[e.type] = e.num
                    }), t
                })
            }, o.updateSysMsgUnread = function(e) {
                var t = this;
                e = i.copy(e);
                var n = [];
                return Object.keys(e).forEach(function(t) {
                    n.push({
                        type: t,
                        num: e[t]
                    })
                }), this.put(d, n).then(function() {
                    return t.logger.log("db::updateSysMsgUnread: ", e), e
                })
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return e.valid && e.validToCurrentUser
            }
            function o(e) {
                return e && e.valid
            }
            function i(e) {
                return e && c.fillUndef(e, {
                    mute: !1,
                    custom: ""
                }), e
            }
            var s = n(2).Promise,
                a = n(13).fn,
                c = n(1),
                u = n(5),
                l = n(32),
                d = n(23),
                f = "team",
                p = "teamId",
                m = "account",
                y = "teamMember";
            a.mergeTeams = function(e, t, n) {
                var r = this,
                    o = r.put(f, e),
                    i = r.leaveTeams(t, n);
                return s.all([o, i]).then(function() {
                    return r.logger.log("db::mergeTeams:"), r.updateTeamTimetag(n), [e, t, n]
                })
            }, a.putTeam = function(e) {
                if (e) return c.isArray(e) || (e = [e]), e.forEach(function(e) {
                    e.validToCurrentUser = !0
                }), this.put(f, e)
            }, a.updateTeam = function(e) {
                var t = this;
                e = c.copy(e);
                var n = e.teamId;
                return t.getOne(f, null, n, {
                    modifyObj: e
                }).then(function(r) {
                    return r ? (t.logger.log("db::updateTeam: " + n, e), r) : (t.logger.warn("db::updateTeam: no record " + n), t.putTeam(e))
                })
            }, a.transferTeam = function(e, t, n) {
                var r = this,
                    o = e.teamId,
                    i = e.memberUpdateTime,
                    s = {
                        teamId: o,
                        account: t,
                        type: "normal",
                        updateTime: i
                    },
                    a = {
                        teamId: o,
                        account: n,
                        type: "owner",
                        updateTime: i
                    };
                return r.updateTeamMembers([s, a]).then(function() {
                    return r.putTeam(e).then(function() {
                        return r.logger.log("db::transferTeam: " + e.teamId + " " + t + " -> " + n), [e, t, n]
                    })
                })
            }, a.leaveTeam = function(e) {
                var t = this;
                return t.updateTeam({
                    teamId: e,
                    validToCurrentUser: !1
                }).then(function() {
                    return t.removeAllTeamMembers(e)
                })
            }, a.dismissTeam = function(e, t) {
                var n = this,
                    r = {
                        teamId: e,
                        valid: !1,
                        validToCurrentUser: !1,
                        updateTime: t
                    };
                return n.updateTeam(r).then(function() {
                    return n.removeAllTeamMembers(e)
                })
            }, a.leaveTeams = function(e, t) {
                var n, r = this,
                    o = [];
                return e.forEach(function(e) {
                    n = r.leaveTeam(e.teamId, t), o.push(n)
                }), s.all(o)
            }, a.getTeamsByTeamIds = function(e) {
                var t, n = this,
                    r = [];
                return e.forEach(function(e) {
                    t = n.getTeam(e), r.push(t)
                }), s.all(r)
            }, a.getTeam = function(e) {
                e = "" + e;
                var t = this;
                return t.getOne(f, null, e).then(function(e) {
                    return t.updateTeamProperties([e]), e
                })
            }, a.getTeams = function() {
                var e = this;
                return e.getAll(f, {
                    filter: r
                }).then(function(t) {
                    return e.updateTeamProperties(t), t
                })
            }, a.updateTeamProperties = function(e) {
                e.forEach(function(e) {
                    l.fillProperties(e)
                })
            }, a.mergeTeamMembers = function(e, t, n, r) {
                var o = this,
                    i = o.putTeamMembers(t),
                    a = o.updateTeamMembers(n);
                return s.all([i, a]).then(function() {
                    return o.logger.log("db::mergeTeamMembers: " + e), o.updateTeamMemberTimetag(e, r)
                })
            }, a.putTeamMembers = function(e) {
                return this.put(y, e)
            }, a.getTeamMembersByAccount = function(e) {
                var t = this;
                return t.getOnly(y, m, e, {
                    filter: o,
                    mapper: i
                }).then()
            }, a.getTeamMembers = function(e) {
                var t = this;
                e = "" + e;
                var n = function(e) {
                    return e.valid
                };
                return t.getOnly(y, p, e, {
                    filter: n,
                    mapper: i
                }).then(function(e) {
                    return t.updateTeamMemberProperties(e).then(function() {
                        return e
                    })
                })
            }, a.updateTeamMemberProperties = function(e) {
                var t, n = this,
                    r = [];
                return e.forEach(function(e) {
                    d.fillProperties(e) && (t = n.updateTeamMember(e), r.push(t))
                }), s.all(r)
            }, a.getInvalidTeamMembers = function(e, t) {
                var n = this;
                e = "" + e;
                var r, o = [];
                return t.forEach(function(t) {
                    r = n.getOne(y, null, d.genId(e, t)).then(function(e) {
                        return i(e)
                    }), o.push(r)
                }), s.all(o)
            }, a.updateTeamMember = function(e) {
                var t = this,
                    n = e.teamId,
                    r = e.account,
                    o = d.genId(n, r),
                    s = c.filterObj(e, "nickInTeam muteTeam mute custom updateTime type valid");
                return this.getOne(y, null, o, {
                    modifyObj: s,
                    mapper: i
                }).then(function(e) {
                    return e ? t.logger.log("db::updateTeamMember: " + n + " " + r, s) : t.logger.warn("db::updateTeam: no record " + n + " " + r), e
                })
            }, a.updateTeamMembers = function(e) {
                var t = this;
                if (!e.length) return s.resolve();
                var n, r = [];
                return e.forEach(function(e) {
                    n = t.updateTeamMember(e), r.push(n)
                }), s.all(r)
            }, a.updateTeamManagers = function(e, t, n, r) {
                var o = t.map(function(t) {
                    return {
                        teamId: e,
                        account: t,
                        type: n ? "manager" : "normal",
                        updateTime: r
                    }
                });
                return this.updateTeamMembers(o)
            }, a.removeTeamMembersByAccounts = function(e, t) {
                var n = t.map(function(t) {
                    return {
                        teamId: e,
                        account: t,
                        valid: !1
                    }
                });
                return this.updateTeamMembers(n)
            }, a.removeAllTeamMembers = function(e) {
                var t = this,
                    n = {
                        valid: !1
                    };
                return t.getOnly(y, p, e, {
                    modifyObj: n
                }).then(function() {
                    return t.logger.warn("db::removeAllTeamMembers: " + e), t.deleteTeamMemberTimetag(e)
                })
            }, a.deleteTeamMembers = function(e) {
                var t = this;
                return t.getOnly(y, p, e, {
                    remove: !0
                }).then(function() {
                    t.logger.warn("db::deleteTeamMembers: " + e), t.deleteTeamMemberTimetag(e)
                })
            }, a.deleteTeam = function(e) {
                var t, n = this,
                    o = [];
                return c.isArray(e) || (e = [e]), e.forEach(function(e) {
                    e = "" + e, t = n.get(f, e).then(function(t) {
                        if (t && r(t)) throw u.stillInTeamError();
                        var o = n.remove(f, e),
                            i = n.deleteTeamMembers(e);
                        return s.all([o, i])
                    }), o.push(t)
                }), 1 === o.length ? o[0] : s.all(o)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(13).fn;
            r.getTimetags = function(e) {
                var t = {},
                    n = function(e) {
                        return e.name.indexOf("team-") !== -1 ? t[e.name] = 0 : t[e.name] = e.value, e
                    };
                return this.getAll("timetag", {
                    filter: e,
                    mapper: n
                }).then(function() {
                    return t
                })
            }, r.getTeamMemberTimetags = function() {
                return this.getTimetags(function(e) {
                    return e.name.indexOf("team-") !== -1
                })
            }, r.getTimetag = function(e) {
                return this.getOne("timetag", null, e).then(function(e) {
                    return e = e || {
                        value: 0
                    }, e.value
                })
            }, r.getTeamMemberTimetag = function(e) {
                return 0
            }, r.updateTimetag = function(e, t) {
                var n = {
                    name: e,
                    value: t
                };
                return this.put("timetag", n)
            }, r.updateMyInfoTimetag = function(e) {
                return this.updateTimetag("myInfo", e)
            }, r.updateRelationTimetag = function(e) {
                return this.updateTimetag("relations", e)
            }, r.getRelationsTimetag = function() {
                return this.getTimetag("relations")
            }, r.updateFriendTimetag = function(e) {
                return this.updateTimetag("friends", e)
            }, r.getFriendsTimetag = function() {
                return this.getTimetag("friends")
            }, r.updateFriendUserTimetag = function(e) {
                return this.updateTimetag("friendUsers", e)
            }, r.updateTeamTimetag = function(e) {
                return this.updateTimetag("teams", e)
            }, r.getTeamsTimetag = function() {
                return this.getTimetag("teams")
            }, r.updateTeamMemberTimetag = function(e, t) {
                return this.updateTimetag("team-" + e, t)
            }, r.getTeamMembersTimetag = function(e) {
                return this.getTimetag("team-" + e)
            }, r.updateMyTeamMembersTimetag = function(e) {
                return this.updateTimetag("myTeamMembers", e)
            }, r.getBroadcastMsgTimetag = function(e) {
                return this.getTimetag("broadcastMsg")
            }, r.updateBroadcastMsgTimetag = function(e) {
                return this.updateTimetag("broadcastMsg", parseInt(e))
            }, r.updateRoamingMsgTimetag = function(e) {
                return this.updateTimetag("roamingMsgs", e)
            }, r.updateMsgReceiptsTimetag = function(e) {
                return this.updateTimetag("msgReceipts", e)
            }, r.updateDonnopTimetag = function(e) {
                return this.updateTimetag("donnop", e)
            }, r.updateDeleteMsgTimetag = function(e) {
                return this.updateTimetag("deleteMsg", e)
            }, r.updateSessionAck = function(e) {
                return this.updateTimetag("sessionAck", e)
            }, r.deleteTimetag = function(e) {
                return this.remove("timetag", e)
            }, r.deleteTeamMemberTimetag = function(e) {
                return this.deleteTimetag("team-" + e)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(13).fn,
                i = n(1),
                s = "user";
            o.mergeMyInfo = function(e, t) {
                var n = this;
                return n.put(s, e).then(function() {
                    return t ? n.updateMyInfoTimetag(e.updateTime) : e
                })
            }, o.mergeFriendUsers = function(e, t) {
                var n = this;
                return n.putUsers(e).then(function() {
                    n.updateFriendUserTimetag(t)
                })
            }, o.putUsers = function(e) {
                return this.put(s, e)
            }, o.putUser = function(e) {
                return this.put(s, e)
            }, o.updateUser = function(e) {
                var t = this;
                e = i.copy(e);
                var n = e.account;
                return this.getOne(s, null, n, {
                    modifyObj: e
                }).then(function(r) {
                    return r ? t.logger.log("db::updateUser: " + n, e) : t.logger.warn("db::updateUser: no record " + n), r
                })
            }, o.putUsersIfIsFriend = function(e) {
                var t, n = this,
                    o = [],
                    i = [];
                return e.forEach(function(e) {
                    t = n.getFriend(e.account).then(function(r) {
                        return r && (t = n.putUser(e), i.push(t)), r
                    }), o.push(t)
                }), r.all(o).then(function() {
                    return r.all(i).then(function(e) {
                        return e
                    })
                })
            }, o.deleteUser = function(e) {
                return this.remove(s, e)
            }, o.getUser = function(e) {
                return this.getOne(s, null, e)
            }, o.getUsers = function(e) {
                function t(t) {
                    return e.indexOf(t.account) !== -1
                }
                return this.getAll(s, {
                    filter: t
                })
            }, o.getAllUsers = function() {
                return this.getAll(s)
            }
        }, , , , , , , , , , , function(e, t, n) {
            "use strict";

            function r() {}
            var o = n(40),
                i = n(1);
            r.prototype = Object.create(o.prototype), r.verifyFile = function(e) {
                i.verifyOptions(e, "dur", !0, "file.")
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                i.verifyOptions(e, "content"), e.type = "custom", o.call(this, e), this.attach = e.content
            }
            var o = n(19),
                i = n(1);
            r.prototype = Object.create(o.prototype), r.reverse = function(e) {
                var t = o.reverse(e);
                return t.content = e.attach, t
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                e.type = "geo", i.verifyOptions(e, "geo"), i.verifyOptions(e.geo, "lng lat title", !0, "geo."), i.verifyParamType("geo.lng", e.geo.lng, "number"), i.verifyParamType("geo.lat", e.geo.lat, "number"), i.verifyParamType("geo.title", e.geo.title, "string"), o.call(this, e), this.attach = JSON.stringify(e.geo)
            }
            var o = n(19),
                i = n(1);
            r.prototype = Object.create(o.prototype), r.reverse = function(e) {
                var t = o.reverse(e);
                return e.attach = e.attach ? "" + e.attach : "", t.geo = e.attach ? JSON.parse(e.attach) : {}, t
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {}
            var o = n(1),
                i = n(40);
            r.prototype = Object.create(i.prototype), r.verifyFile = function(e) {
                o.verifyOptions(e, "w h", !0, "file.")
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";
            var r = n(1),
                o = function(e) {
                    this.account = e.account, this.enabledHttpsForMessage = e.enabledHttpsForMessage || !1
                },
                i = o.prototype,
                s = i.Message = n(19),
                a = i.TextMessage = n(166),
                c = i.FileMessage = n(40),
                u = i.GeoMessage = n(161),
                l = i.NotificationMessage = n(164),
                d = i.CustomMessage = n(160),
                f = i.TipMessage = n(167),
                p = i.RobotMessage = n(165);
            i.validScenes = s.validScenes, i.validTypes = s.validTypes, i.reverse = function(e) {
                var t, n = s.getType(e);
                switch (n) {
                    case "text":
                        t = a.reverse(e);
                        break;
                    case "image":
                    case "audio":
                    case "video":
                    case "file":
                        e.enabledHttpsForMessage = this.enabledHttpsForMessage, t = c.reverse(e);
                        break;
                    case "geo":
                        t = u.reverse(e);
                        break;
                    case "notification":
                        t = l.reverse(e);
                        break;
                    case "custom":
                        t = d.reverse(e);
                        break;
                    case "tip":
                        t = f.reverse(e);
                        break;
                    case "robot":
                        t = p.reverse(e);
                        break;
                    default:
                        t = s.reverse(e)
                }
                return s.setExtra(t, this.account), t
            }, i.reverseMsgs = function(e, t) {
                var n, o, i = this;
                return e.map(function(e) {
                    return e = i.reverse(e), t && (n = t.modifyObj, n && (e = r.merge(e, n)), o = t.mapper, r.isFunction(o) && (e = o(e))), e
                })
            }, e.exports = o
        }, function(e, t, n) {
            "use strict";

            function r() {}
            var o = n(1),
                i = o.notundef,
                s = n(19),
                a = n(22).getInstance("IM"),
                c = n(32),
                u = n(41),
                l = {
                    0: "addTeamMembers",
                    1: "removeTeamMembers",
                    2: "leaveTeam",
                    3: "updateTeam",
                    4: "dismissTeam",
                    5: "passTeamApply",
                    6: "transferTeam",
                    7: "addTeamManagers",
                    8: "removeTeamManagers",
                    9: "acceptTeamInvite",
                    10: "updateTeamMute",
                    101: "netcallMiss",
                    102: "netcallBill"
                };
            r.prototype = Object.create(s.prototype), r.reverse = function(e) {
                var t = s.reverse(e);
                if (e.attach = e.attach ? "" + e.attach : "", e.attach) {
                    var n = JSON.parse(e.attach);
                    if (t.attach = {
                            type: l[n.id] || n.id
                        }, i(n.data)) {
                        var r = n.data;
                        i(r.tinfo) && (t.attach.team = c.reverse(a.unserialize(r.tinfo, "team"), !0)), i(r.ids) && (t.attach.accounts = r.ids), i(r.id) && (t.attach.account = r.id), i(r.uinfos) && (t.attach.users = r.uinfos.map(function(e) {
                            return u.reverse(a.unserialize(e, "user"))
                        })), i(r.mute) && (t.attach.mute = 1 === +r.mute), i(r.attach) && (t.attach.custom = r.attach), i(r.channel) && (t.attach.channelId = r.channel), i(r.calltype) && (t.attach.netcallType = r.calltype), i(r.duration) && (t.attach.duration = r.duration), i(r.time) && (t.attach.time = r.time), t.attach.accounts && t.attach.accounts.length <= 2 && t.from === t.to && t.attach.accounts.some(function(e) {
                            if (e !== t.to) return t.to = e, !0
                        })
                    }
                } else t.attach = {};
                return t
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                i.verifyOptions(e, "content"), i.undef(e.robotAccid) && (e.robotAccid = e.to);
                var t = e.content;
                switch (t.type) {
                    case "welcome":
                        i.undef(e.body) && (this.body = "欢迎消息");
                        break;
                    case "text":
                        i.verifyOptions(t, "content"), i.undef(e.body) && (this.body = t.content);
                        break;
                    case "link":
                        i.verifyOptions(t, "target")
                }
                t.type && (t.type = s[t.type]), t = {
                    param: t,
                    robotAccid: e.robotAccid
                }, this.attach = JSON.stringify(t), e.type = "robot", o.call(this, e)
            }
            var o = n(19),
                i = n(1),
                s = {
                    welcome: "00",
                    text: "01",
                    link: "03"
                },
                a = {
                    "01": "text",
                    "02": "image",
                    "03": "answer",
                    11: "template"
                };
            r.prototype = Object.create(o.prototype), r.reverse = function(e) {
                var t = o.reverse(e);
                if ("robot" === t.type) {
                    var n = JSON.parse(e.attach);
                    if (n.param && (n.param.type = a[n.param.type] || "unknown"), n.robotMsg) {
                        n = i.merge(n, n.robotMsg);
                        var r = n.message;
                        "bot" === n.flag ? n.message = r.map(function(e) {
                            return e.type = a[e.type] || "unknown", e
                        }) : "faq" === n.flag, delete n.robotMsg
                    }
                    t.content = n
                }
                return t
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                i.verifyOptions(e, "text"), e.type = "text", o.call(this, e)
            }
            var o = n(19),
                i = n(1);
            r.prototype = Object.create(o.prototype), r.reverse = function(e) {
                var t = o.reverse(e);
                return t
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                i.verifyOptions(e, "tip"), e.type = "tip", o.call(this, e), this.body = e.tip
            }
            var o = n(19),
                i = n(1);
            r.prototype = Object.create(o.prototype), r.reverse = function(e) {
                var t = o.reverse(e);
                return t.text = "", t.tip = e.body, e.attach && (t.attach = e.attach), t
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {}
            var o = n(40),
                i = n(1);
            r.prototype = Object.create(o.prototype), r.verifyFile = function(e) {
                i.verifyOptions(e, "dur w h", !0, "file.")
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                if (o.verifyOptions(e, "type value"), o.verifyParamType("type", e.type, "number"), o.verifyParamMin("type", e.type, 1e5), o.verifyParamType("value", e.value, "number"), this.type = e.type, this.value = e.value, this.idClient = o.guid(), i(e.custom) && (this.custom = "" + e.custom), this.validTime = e.validTime || 604800, o.verifyParamType("validTime", this.validTime, "number"), o.verifyParamMin("validTime", this.validTime, 60), o.verifyParamMax("validTime", this.validTime, 604800), i(e.broadcastType)) {
                    if (o.verifyParamType("broadcastType", e.broadcastType, "number"), [1, 2].indexOf(e.broadcastType) < 0) throw new s('参数错误"broadcastType":只能为1或2');
                    this.broadcastType = e.broadcastType
                } else this.broadcastType = 2;
                i(e.sync) ? (o.verifyParamType("sync", e.sync, "boolean"), this.sync = e.sync) : this.sync = !1
            }
            var o = n(1),
                i = o.notundef,
                s = n(5);
            r.prototype.assembleEvent = function() {
                return {
                    type: this.type,
                    value: this.value,
                    idClient: this.idClient,
                    custom: this.custom || "",
                    validTime: this.validTime,
                    broadcastType: this.broadcastType,
                    sync: this.sync === !0 ? 1 : 0
                }
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                o.verifyOptions(e, "type"), o.verifyParamType("type", e.type, "number"), o.findObjIndexInArray([1, 2, 3], e.type) < 0 && o.verifyParamMin("type", e.type, 1e5), this.type = e.type, i(e.subscribeTime) ? (o.verifyParamType("subscribeTime", e.subscribeTime, "number"), o.verifyParamMin("subscribeTime", e.subscribeTime, 60), o.verifyParamMax("subscribeTime", e.subscribeTime, 2592e3), this.subscribeTime = e.subscribeTime) : this.subscribeTime = 2592e3, i(e.sync) ? (o.verifyParamType("sync", e.sync, "boolean"), this.sync = e.sync) : this.sync = !0
            }
            var o = n(1),
                i = o.notundef;
            r.prototype.assembleEvent = function(e) {
                return {
                    type: this.type,
                    subscribeTime: this.subscribeTime,
                    sync: this.sync === !0 ? 1 : 0
                }
            }, e.exports = r
        }, function(e, t, n) {
            "use strict";

            function r() {}
            var o = n(1);
            r.parse = function(e) {
                var t = o.copy(e);
                return t.isBlacked = "1" === t.isBlacked, t.isMuted = "1" === t.isMuted, t.createTime = +t.createTime, t.updateTime = +t.updateTime, t
            }, e.exports = r
        }, , , , , function(e, t, n) {
            "use strict";
            var r = n(6).fn,
                o = n(29);
            r.assembleLogin = function() {
                return {
                    login: this.assembleIMLogin()
                }
            }, r.afterLogin = function() {
                var e = this,
                    t = e.db;
                if (t.enable) {
                    var n = e.account;
                    e.options.appendAppKeyForDBName && (n += "-" + e.options.appKey), e.db.init(n).then(function() {
                        e.syncData()
                    }, function(n) {
                        e.logger.warn("link::afterLogin: no db", n), t.reset(!1), e.syncData()
                    })
                } else e.logger.info("link::afterLogin: no db"), e.syncData()
            }, r.processAuth = function(e) {
                var t = this;
                switch (e.cmd) {
                    case "login":
                        e.error || (e.obj = e.content.loginRes, t.connectionId = e.content.loginRes.connectionId, t.onLoginPortsChange(e, 2));
                        break;
                    case "kicked":
                        return void t.onKicked(e);
                    case "multiPortLogin":
                        t.onLoginPortsChange(e, e.content.state);
                        break;
                    case "kick":
                        e.error || (e.obj.deviceIds = e.content.deviceIds)
                }
            }, r.onLoginPortsChange = function(e, t) {
                var n = this,
                    r = e.content.loginPorts;
                if (r && r.length) {
                    var i = !0;
                    switch (t) {
                        case 2:
                            i = !0;
                            break;
                        case 3:
                            i = !1
                    }
                    r.forEach(function(e) {
                        e.type = o.reverseType(e.type), e.time = +e.time, e.online = i
                    }), r = r.filter(function(e) {
                        return e.connectionId !== n.connectionId
                    }), r.length && (n.logger.info("link::onLoginPortsChange:", r), n.options.onloginportschange(r))
                }
            }, r.kickedReasons = ["", "samePlatformKick", "serverKick", "otherPlatformKick", "silentlyKick"], r.kickedMessages = ["", "不允许同一个帐号在多个地方同时登录", "被服务器踢了", "被其它端踢了", "悄悄被踢"]
        }, function(e, t, n) {
            "use strict";
            var r = n(6).fn;
            r.processChatroom = function(e) {
                var t = this;
                switch (e.cmd) {
                    case "getChatroomAddress":
                        t.onChatroomAddress(e)
                }
            }, r.onChatroomAddress = function(e) {
                e.error || (e.obj.address = e.content.address)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(6).fn,
                o = n(3),
                i = n(1),
                s = n(25);
            r.refreshSocketUrl = function() {
                function e(e) {
                    n.socketUrls = [], e = JSON.parse(e), e.common.link.forEach(function(e) {
                        n.socketUrls.push(o.formatSocketUrl({
                            url: e,
                            secure: n.options.secure
                        }))
                    }), e.common["link.default"].forEach(function(e) {
                        e = o.formatSocketUrl({
                            url: e,
                            secure: n.options.secure
                        }), n.socketUrls.indexOf(e) === -1 && n.socketUrls.push(e)
                    });
                    try {
                        o.fileServerUrl = e.nosup[0]
                    } catch (t) {}
                    n.logger.info("link::refreshSocketUrl: ajax load, got socket urls ", n.socketUrls), n.connectToUrl(n.getNextSocketUrl())
                }
                function t(e) {
                    n.logger.error("link::refreshSocketUrl: ajax lbs error", e), n.onDisconnect()
                }
                var n = this,
                    r = n.options,
                    a = o.info,
                    c = r.lbsUrl;
                c = c + i.genUrlSep(c) + "k=" + r.appKey + "&id=" + r.account + "&sv=" + a.sdkVersion + "&pv=" + a.protocolVersion, n.logger.info("link::refreshSocketUrl: ajax " + c), s(c, {
                    proxyUrl: i.url2origin(c) + "/lbs/res/cors/nej_proxy_frame.html",
                    timeout: o.xhrTimeout,
                    onload: e,
                    onerror: t
                })
            }
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }
            function o(e) {
                e = e || {};
                var t = c.copy(e);
                return t.clientType && (t.clientType = u[t.clientType] || ""), t.serverCustom && (t.custom = JSON.parse(t.serverCustom), "string" == typeof t.custom[0] && (t.custom = t.custom[0]), delete t.serverCustom), t
            }
            var i = n(15),
                s = r(i),
                a = n(6).fn,
                c = n(1),
                u = s["default"].clientTypeMap;
            a.processEventService = function(e) {
                var t = this,
                    n = e.content,
                    r = e.error,
                    i = t.options || {};
                switch (r && t.onCustomError("events::processEventService:", "EVENT_SERVICE_ERROR", r), e.cmd) {
                    case "pushEvent":
                        if (c.isFunction(i.onpushevents)) {
                            var s = {
                                msgEvents: [o(n.msgEvent)]
                            };
                            i.onpushevents(s)
                        }
                        break;
                    case "pushEvents":
                        if (c.isFunction(i.onpushevents)) {
                            var a = n.msgEvents,
                                u = a.map(function(e) {
                                    return o(e)
                                });
                            a = {
                                msgEvents: u
                            }, i.onpushevents(a)
                        }
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(6).fn;
            r.processFilter = function(e) {
                var t = this;
                switch (e.cmd) {
                    case "sendFilterMsg":
                        t.onSendMsg(e, !0);
                        break;
                    case "filterMsg":
                        t.onMsg(e, !0);
                        break;
                    case "filterSysMsg":
                        t.onSysMsg(e, !0);
                        break;
                    case "sendFilterCustomSysMsg":
                        t.onSendSysMsg(e, !0)
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(1),
                s = i.objs2accounts,
                a = n(77),
                c = n(41);
            o.processFriend = function(e) {
                var t = this,
                    n = e.obj,
                    r = e.content,
                    o = e.error;
                switch (e.cmd) {
                    case "friendRequest":
                        t.updateFriendSysMsg(e), o || t.onFriendRequest(n);
                        break;
                    case "syncFriendRequest":
                        t.onFriendRequest(r, !0);
                        break;
                    case "deleteFriend":
                        o || t.onDeleteFriend(n);
                        break;
                    case "syncDeleteFriend":
                        t.onDeleteFriend(r, !0);
                        break;
                    case "updateFriend":
                        o || t.onUpdateFriend(n);
                        break;
                    case "syncUpdateFriend":
                        t.onUpdateFriend(r.friend, !0);
                        break;
                    case "getFriends":
                        t.onFriends(e);
                        break;
                    case "syncFriends":
                        t.onFriends(e);
                        break;
                    case "syncFriendUsers":
                        t.onFriendUsers(e)
                }
            }, o.onFriends = function(e) {
                function t() {
                    p && f.forEach(function(e) {
                        e = a.reverse(e), e.valid ? m.push(e) : y.push(e)
                    }), c.logger.info("friend::onFriends: parse friends", s(m), m, "delete", s(y), y), f.length ? (p = !0, i = e.content.timetag) : p = !1
                }
                function n(t, n) {
                    e.promise = new r(function(e, r) {
                        function s() {
                            d ? (o(), e(), t()) : u.getFriends().then(function(n) {
                                m = n, o(), e(), t()
                            }).then(void 0, function(e) {
                                e._msg = "get friends error", r(e), n(e)
                            })
                        }
                        p ? u.mergeFriends(m, y, i).then(function() {
                            s()
                        }).then(void 0, function(e) {
                            e._msg = "merge friends error", r(e), n(e)
                        }) : (c.logger.info("friend::onFriends: no merge friends"), s())
                    }).then(void 0, function(e) {
                        throw e._msg = "merge friends data error", n(e), e
                    })
                }
                function o() {
                    c.timetags.friends = i, m.invalid = y, d ? (c.syncResult.friends = m, c.syncResult.invalidFriends = y) : (c.logger.info("friend::onFriends: get friends bingo", s(m), m), e.obj = m)
                }
                var i, c = this,
                    u = c.db,
                    l = e.error,
                    d = c.packetFromSync(e),
                    f = e.content.friends,
                    p = !0,
                    m = [],
                    y = [],
                    g = new r(function(e, r) {
                        l ? d && r(l) : (t(), u.enable ? n(e, r) : (o(), e()))
                    });
                d && (g.cmd = "friends", c.syncPromiseArray.push(g))
            }, o.onFriendRequest = function(e, t) {
                var n = r.resolve(),
                    o = this,
                    i = o.db,
                    s = e.type;
                s = e.type = a.getTypeFromByte(s) || s;
                var c = "addFriend" === s || "passFriendApply" === s;
                if (c) {
                    var u = e.friend = a.assembleFriend(e.account);
                    i.enable && (n = i.putFriend(u))
                }
                return t && o.onSyncFriendAction(e), n
            }, o.onSyncFriendAction = function(e) {
                var t = this;
                t.logger.info("friend::onSyncFriendActionon:", e), t.options.onsyncfriendaction(e)
            }, o.onDeleteFriend = function(e, t) {
                var n = r.resolve(),
                    o = this,
                    i = o.db;
                return i.enable && (n = i.deleteFriend(e.account)), t && (e.type = "deleteFriend", o.onSyncFriendAction(e)), n
            }, o.onUpdateFriend = function(e, t) {
                var n = this,
                    r = n.db,
                    o = a.reverse(e);
                r.enable && r.updateFriend(o), t && n.onSyncFriendAction({
                    type: "updateFriend",
                    friend: o
                })
            }, o.onFriendUsers = function(e) {
                var t = this,
                    n = t.db,
                    o = e.content,
                    i = o.users.map(function(e) {
                        return c.reverse(e)
                    });
                t.logger.warn("friend::onFriendUsers: parse users", s(i), i);
                var a = o.timetag,
                    u = r.resolve();
                n.enable && (u = n.mergeFriendUsers(i, a)), t.timetags.friendUsers = a, u.cmd = "friendUsers", t.syncPromiseArray.push(u), t.syncResult.users = i
            }, o.updateFriendSysMsg = function(e) {
                var t, n, r = e.obj,
                    o = e.error;
                if (e.obj.idServer) {
                    if (o) t = "error", o = i.filterObj(o, "code message");
                    else {
                        var s = r.type;
                        switch (s = a.getTypeFromByte(s) || s) {
                            case "passFriendApply":
                                t = "passed";
                                break;
                            case "rejectFriendApply":
                                t = "rejected"
                        }
                    }
                    n = {
                        idServer: r.idServer,
                        state: t
                    }, o && (n.error = o), this.updateSysMsg(n)
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(1),
                s = i.undef,
                a = n(15),
                c = n(23),
                u = n(30),
                l = n(62);
            o.processMsg = function(e) {
                var t = this;
                switch (e.cmd) {
                    case "sendMsg":
                        t.onSendMsg(e);
                        break;
                    case "msg":
                        t.onMsg(e);
                        break;
                    case "sysMsg":
                        t.onSysMsg(e);
                        break;
                    case "broadcastMsg":
                        t.onBroadcastMsg(e);
                        break;
                    case "sendCustomSysMsg":
                        t.onSendSysMsg(e);
                        break;
                    case "getHistoryMsgs":
                    case "searchHistoryMsgs":
                        t.onHistoryMsgs(e);
                        break;
                    case "syncSendMsg":
                        t.onMsg(e);
                        break;
                    case "deleteSessions":
                        t.onDeleteSessions(e);
                        break;
                    case "sendMsgReceipt":
                        t.onSendMsgReceipt(e);
                        break;
                    case "msgReceipt":
                        t.onMsgReceipt(e);
                        break;
                    case "onDeleteMsg":
                        t.onDeleteMsg(e);
                        break;
                    case "onMsgDeleted":
                        t.onMsgDeleted(e);
                        break;
                    case "onDeleteMsgOfflineRoaming":
                        t.onDeleteMsgOfflineRoaming(e);
                        break;
                    case "onMarkSessionAck":
                        t.onMarkSessionAck(e);
                        break;
                    case "syncMarkSessionAck":
                        t.syncMarkSessionAck(e)
                }
            }, o.checkIgnore = function(e) {
                var t = this;
                e.forEach(function(e) {
                    "notification" === e.type && !e.ignore && t.options.shouldIgnoreNotification(e) && (e.ignore = !0)
                })
            }, o.filterIgnore = function(e) {
                return e.filter(function(e) {
                    return !e.ignore
                })
            }, o.genSessionByMsgs = function(e) {
                var t = this;
                return t.checkIgnore(e), u.genSessionByMsgs(t.message.Message, e)
            }, o.onRoamingMsgs = function(e) {
                var t = this,
                    n = t.message,
                    r = n.Message,
                    o = r.getMaxTimetag,
                    i = n.reverseMsgs(e.content.msgs),
                    s = o(i);
                i = r.sortMsgs(i), i = r.deduplication(i);
                var a = i[0],
                    c = a.sessionId,
                    u = t.genSessionByMsgs(i);
                t.cacheSyncedSession(u);
                var l = t.putMsg(i, "roamingMsgs").then(function(e) {
                    i = e, i = t.filterIgnore(i), i.length && (t.logger.info("msg::onRoamingMsgs: putRoamingMsgs", c, i.length, i), t.syncResult.roamingMsgs = t.syncResult.roamingMsgs || [], t.syncResult.roamingMsgs.push({
                        sessionId: c,
                        scene: a.scene,
                        to: a.target,
                        msgs: i,
                        timetag: s
                    }))
                });
                l.cmd = "roamingMsgs-" + c, t.syncPromiseArray.push(l)
            }, o.onOfflineMsgs = function(e, t) {
                function n(e) {
                    if (l.length) {
                        var t = i.getMaxTimetag(l),
                            n = l[0].scene,
                            o = l[0].target;
                        r.markMsgRead(l), l = i.sortMsgs(l), l = i.deduplication(l);
                        var s = r.genSessionByMsgs(l);
                        r.cacheSyncedSession(s), c = r.putMsg(l, "offlineMsgs").then(function(i) {
                            l = i, l = r.filterIgnore(l), l.length && (r.logger.info("msg::onOfflineMsgs： toreLastSession", f, e, l.length, l), r.syncResult[f] = r.syncResult[f] || [], r.syncResult[f].push({
                                sessionId: e,
                                scene: n,
                                to: o,
                                msgs: l,
                                timetag: t
                            }))
                        }), c.cmd = "offlineMsgs-" + e, r.syncPromiseArray.push(c)
                    }
                }
                var r = this,
                    o = r.message,
                    i = o.Message,
                    s = null;
                t && (s = {
                    filter: !0
                });
                var a, c, u = o.reverseMsgs(e.content.msgs, {
                        modifyObj: s
                    }),
                    l = [],
                    d = "",
                    f = t ? "offlineFilterMsgs" : "offlineMsgs";
                u.forEach(function(e) {
                    a = e.sessionId, a !== d ? (n(d), l = [], l.push(e), d = a) : l.push(e)
                }), n(d)
            }, o.markUnreadByMsgsPromise = function(e) {
                var t = this,
                    n = t.db;
                n.enable && n.getSession(e).then(function(n) {
                    n.ack && t.markUnreadBySessionAck({
                        sessionId: e,
                        ack: n.ack
                    })
                })
            }, o.completeMsg = function(e) {
                var t = this;
                return e.from = t.account, e.fromNick = t.myInfo && t.myInfo.nick, e.fromClientType = "Web", e.fromDeviceId = a.deviceId, e.time || (e.time = +new Date), e
            }, o.onMsgs = function(e) {
                var t = this;
                t.message.reverseMsgs(e.content.msgs, {
                    mapper: function(e) {
                        t.handleMsg(e)
                    }
                })
            }, o.onMsg = function(e, t) {
                var n = this,
                    r = n.message.reverse(e.content.msg);
                t && (r.filter = !0), n.syncing ? n.unhandledMsgs.push({
                    type: "onMsg",
                    msg: r
                }) : n.handleMsg(r)
            }, o.onBroadcastMsgs = function(e) {
                var t = this,
                    n = e.content.broadcastMsgs;
                n = n.sort(function(e, t) {
                    return e.broadcastId - t.broadcastId
                }), t.putBroadcastMsgs(n)
            }, o.onBroadcastMsg = function(e) {
                var t = this,
                    n = e.content.broadcastMsg;
                n.time = n.timestamp, t.syncing ? t.unhandledMsgs.push({
                    type: "onBroadcastMsg",
                    msg: n
                }) : n && t.putBroadcastMsg(n)
            }, o.pushMsgTask = function(e) {
                var t = this;
                t.msgPromise = t.msgPromise.then(function() {
                    return e()
                })
            }, o.handleMsg = function(e) {
                var t = this,
                    n = e.time;
                t.markMsgRead(e), t.msgPromise = t.msgPromise.then(function() {
                    return t.putMsg(e, "onMsg")
                }).then(function(r) {
                    return e = r[0], t.updateRoamingMsgTimetag(n)
                }).then(function() {
                    if (e) return t.checkUserUpdate(e)
                }).then(function() {
                    if (e) {
                        var n = e.type;
                        switch (t.logger.log("msg::handleMsg:checkUserUpdate: " + e.scene + " " + n + " msg" + ("notification" === n ? " " + e.attach.type : ""), e), n) {
                            case "notification":
                                return t.onTeamNotificationMsg(e)
                        }
                    }
                }).then(function() {
                    e && !e.ignore && (t.logger.info("msg::handleMsg:onmsg: ", e), setTimeout(function() {
                        t.options.onmsg(i.copy(e))
                    }, 0))
                }).then(void 0, function(e) {
                    t.onCustomError("msg::handleMsg:", e)
                })
            }, o.putMsg = function(e, t) {
                function n(e) {
                    "roamingMsgs" !== t && "offlineMsgs" !== t || o.cacheSyncedSession(e)
                }
                if (i.isArray(e) || (e = [e]), e[0].filter) return r.resolve(e);
                var o = this,
                    a = o.db,
                    c = a.enable,
                    u = r.resolve(),
                    l = o.message.Message,
                    d = l.getLastMsg(e),
                    f = d.flow,
                    p = d.sessionId !== o.currSessionId,
                    m = o.genSessionByMsgs(e);
                n(m);
                var y = !1,
                    g = [];
                return o.checkIgnore(e), u = u.then(function() {
                    return c || o.options.autoMarkRead || "roamingMsgs" === t || !m || (o.sessionUnreadMsgs = o.sessionUnreadMsgs || {}, o.sessionUnreadMsgs[m.id] = o.sessionUnreadMsgs[m.id] || [], o.sessionUnreadMsgs[m.id] = o.sessionUnreadMsgs[m.id].concat(e.filter(function(e) {
                        var t = o.options.shouldCountNotifyUnread(e);
                        return t
                    }))), c && "roamingMsgs" !== t && "offlineMsgs" !== t ? (o.logger.log("msg::putMsg:db.putMsg: ", m), a.putMsg(e)) : e
                }).then(function(t) {
                    var n = [];
                    return e.forEach(function(e) {
                        o.checkMsgUnique(e) && n.push(e)
                    }), e = n, g = c ? t : e, r.resolve(e)
                }), u = u.then(function(e) {
                    return e.length && (m = o.genSessionByMsgs(e), n(m), c && m) ? new r(function(t, n) {
                        a.getSessions({
                            sessionId: m.id
                        }).then(function(n) {
                            if (n && n.lastMsg) {
                                var r = n.lastMsg;
                                m.lastMsg && m.lastMsg.time < r.time && (m.lastMsg = r)
                            }
                            o.logger.log("msg::putMsg:db.getSessions: ", m), g.length ? m ? a.putSession(m).then(function(e) {
                                t(e)
                            }) : t(n) : (y = !0, g = e, t(n))
                        })
                    }) : r.resolve(m)
                }), u = u.then(function(e) {
                    if (m && g.length) {
                        var r = "roamingMsgs" === t,
                            i = o.options.syncSessionUnread,
                            u = m.id,
                            l = o.findSession(u) || {},
                            d = l.ack || 0,
                            h = "offlineMsgs" === t || r && i || "onMsg" === t && "in" === f && p;
                        if (h) {
                            c && e ? (m = e, d = d || m.ack || 0) : (e = l, e && (m.unread = e.unread || 0)), n(m), m.unread = m.unread || 0;
                            var v = 0;
                            if (g.forEach(function(e) {
                                    var t = o.options.shouldCountNotifyUnread(e),
                                        n = ("notification" !== e.type || "notification" === e.type && t) && (s(e.isUnreadable) || e.isUnreadable);
                                    if (n && i && (n = e.time > d && "out" !== e.flow), n && (v++, i && !c)) {
                                        var r = l.unreadMsgs || [];
                                        r.push(e), m.unreadMsgs = r
                                    }
                                }), m.unread += v, o.logger.log("msg::putMsg:updateSession: ", m), n(m), c && !y) return a.updateSession({
                                id: m.id,
                                unread: m.unread
                            })
                        }
                    }
                }), "onMsg" === t ? u = u.then(function() {
                    e.length && m && (o.onUpdateSession(m), o.options.syncSessionUnread && !p && o.api.resetSessionUnread(o.currSessionId))
                }) : "sendMsg" === t && !p && m && m.lastMsg && m.lastMsg.isLocal && (o.onUpdateSession(m), o.api.resetSessionUnread(o.currSessionId)), u.then(function() {
                    return r.resolve(e)
                })
            }, o.putBroadcastMsgs = function(e) {
                var t = this,
                    n = t.db,
                    o = e.length;
                if (o > 0) {
                    if (t.doMarkBroadcastMsgsRead(e), n.enable) {
                        var s = e[o - 1].broadcastId;
                        return n.updateBroadcastMsgTimetag(s), n.putBroadcastMsg(e).then(function() {
                            return setTimeout(function() {
                                t.doMarkMsgsRead(), t.options.onbroadcastmsgs(i.copy(e))
                            }, 0), r.resolve(e)
                        })
                    }
                    setTimeout(function() {
                        t.options.onbroadcastmsgs(i.copy(e))
                    }, 0)
                }
                return e
            }, o.putBroadcastMsg = function(e) {
                var t = this,
                    n = t.db;
                return t.doMarkBroadcastMsgsRead([e]), n.enable ? (e.broadcastId && n.updateBroadcastMsgTimetag(e.broadcastId), n.putBroadcastMsg(e).then(function() {
                    return setTimeout(function() {
                        t.options.onbroadcastmsg(i.copy(e))
                    }, 0), r.resolve(e)
                })) : (setTimeout(function() {
                    t.options.onbroadcastmsg(i.copy(e))
                }, 0), e)
            }, o.doMarkBroadcastMsgsRead = function(e) {
                var t = 7,
                    n = 17;
                e = e.map(function(e) {
                    return e.broadcastId
                }), this.sendCmd("batchMarkRead", {
                    sid: t,
                    cid: n,
                    ids: e
                })
            }, o.cacheSyncedSession = function(e) {
                var t = this;
                if (e && t.syncResult) {
                    e = i.merge({}, e), t.syncResult.sessions = t.syncResult.sessions || {};
                    var n = e.id;
                    t.syncResult.sessions[n] = i.merge(t.syncResult.sessions[n], e), s(t.syncResult.sessions[n].unread) && (t.syncResult.sessions[n].unread = 0), t.mergeSession(t.syncResult.sessions[n])
                }
            }, o.checkMsgUnique = i.genCheckUniqueFunc("idClient"), o.storeSendMsg = function(e) {
                var t = this;
                if (!t.syncing) {
                    var n = t.putMsg(e, "sendMsg");
                    return t.msgPromise = t.msgPromise.then(function() {
                        return n
                    }), n
                }
                t.unhandledMsgs.push({
                    type: "sendMsg",
                    msg: e
                })
            }, o.updateSendMsgError = function(e) {
                var t = this;
                if (!t.syncing) {
                    var n = t.updateMsg(e);
                    return t.msgPromise = t.msgPromise.then(function() {
                        return n
                    }), n
                }
                t.unupdatedMsgs.push(e)
            }, o.onSendMsg = function(e, t) {
                var n = this,
                    o = e.obj && e.obj.msg || e.content.msg;
                n.completeMsg(o);
                var i = e.error && 7101 === e.error.code;
                e.error && !i || (o.idServer = e.content.msg.idServer, o.time = +e.content.msg.time), e.error ? o.status = "fail" : o.status = "success", o = n.message.reverse(o), t && (o.filter = !0), e.obj = o, n.syncing ? n.unupdatedMsgs.push(o) : n.msgPromise = r.all([n.msgPromise, e.obj.promise]).then(function(e) {
                    return e.length || (o.resend = !0), n.updateMsg(o).then(function() {
                        return n.options.syncSessionUnread && n.currSessionId === o.sessionId && n.api.resetSessionUnread(n.currSessionId), n.resolveMsgReceiptTask(o), o
                    })
                })
            }, o.updateLocalMsg = function(e) {
                var t = this,
                    n = t.updateMsg(e);
                return t.msgPromise = t.msgPromise.then(function() {
                    return n
                }), n
            }, o.updateMsg = function(e) {
                if (e.filter) return r.resolve(e);
                var t = this,
                    n = t.db,
                    o = "success" === e.status,
                    i = u.genSessionByMsg(e),
                    s = !! e.isLocal;
                return t.onUpdateSession(i), n.enable ? n.updateMsg(e).then(function(e) {
                    var t = n.updateSession(i),
                        a = r.resolve();
                    return o && e && !s && (a = n.updateRoamingMsgTimetag(e.time)), r.all([t, a])
                }) : (o && !s && (t.timetags.roamingMsgs = e.time), r.resolve(e))
            }, o.updateRoamingMsgTimetag = function(e) {
                var t = this,
                    n = t.db;
                return n.enable ? n.updateRoamingMsgTimetag(e) : (t.timetags.roamingMsgs = e, r.resolve(e))
            }, o.checkUserUpdate = function(e) {
                var t = this,
                    n = e.from;
                return n === t.account ? r.resolve() : new r(function(r) {
                    function o() {
                        t.api.getUser({
                            account: n,
                            sync: !0,
                            done: function(e, n) {
                                e || setTimeout(function() {
                                    t.logger.log("user::checkUserUpdate: onupdateuser", n.account, n), t.options.onupdateuser(n)
                                }, 0), r()
                            }
                        })
                    }
                    var s = t.userSet[n];
                    if (s) {
                        var a = +s.updateTime,
                            c = +e.userUpdateTime;
                        !isNaN(a) && !isNaN(c) && i.isNumber(a) && i.isNumber(c) && a < c ? o() : r()
                    } else o()
                })
            }, o.processUnsettledMsgs = function() {
                var e = this;
                e.unhandledMsgs.forEach(function(t) {
                    var n = t.msg;
                    switch (t.type) {
                        case "onMsg":
                            e.handleMsg(n);
                            break;
                        case "sendMsg":
                            e.msgPromise = e.msgPromise.then(function() {
                                return e.putMsg(n)
                            });
                            break;
                        case "onBroadcastMsg":
                            e.msgPromise = e.msgPromise.then(function() {
                                return e.putBroadcastMsg(n)
                            })
                    }
                }), e.unupdatedMsgs.forEach(function(t) {
                    e.msgPromise = e.msgPromise.then(function() {
                        return e.updateMsg(t)
                    })
                }), e.resetUnsettledMsgs()
            }, o.onTeamNotificationMsg = function(e) {
                var t = this,
                    n = t.db,
                    r = e.attach,
                    o = r.type,
                    i = e.from,
                    s = e.to,
                    a = e.time,
                    c = r.team,
                    u = r.account,
                    l = r.accounts;
                switch (o) {
                    case "updateTeam":
                        if (!n.enable) return;
                        return c.updateTime = a, t.onUpdateTeam(c), n.updateTeam(c);
                    case "addTeamMembers":
                        return t.onAddTeamMembers(e, c, l);
                    case "removeTeamMembers":
                        return t.onRemoveTeamMembers(c, s, l);
                    case "acceptTeamInvite":
                        return t.onAddTeamMembers(e, c, [i]);
                    case "passTeamApply":
                        return t.onAddTeamMembers(e, c, [u]);
                    case "addTeamManagers":
                        return t.updateTeamManagers(e, s, l, !0, a);
                    case "removeTeamManagers":
                        return t.updateTeamManagers(e, s, l, !1, a);
                    case "leaveTeam":
                        return t.onRemoveTeamMembers(c, s, [i]);
                    case "dismissTeam":
                        return t.onDismissTeam(s, a);
                    case "transferTeam":
                        return t.transferTeam(e, c, i, u);
                    case "updateTeamMute":
                        return t.onUpdateTeamMembersMute(e, c, [u], r.mute)
                }
            }, o.onAddTeamMembers = function(e, t, n) {
                var o = this,
                    s = o.db,
                    a = t.teamId,
                    u = c.assembleMembers(t, n);
                e.attach.members = u;
                var l = {
                    team: t,
                    accounts: n,
                    members: u
                };
                if (o.logger.info("team::onAddTeamMembers: ", l), o.options.onAddTeamMembers(i.simpleClone(l)), s.enable) {
                    var d, f = s.putTeam(t),
                        p = n.indexOf(o.account) === -1;
                    return p ? d = s.putTeamMembers(u) : (o.logger.warn("team::onAddTeamMembers: user join team", a), f = new r(function(e) {
                        o.api.getTeamMembers({
                            teamId: a,
                            sync: !0,
                            done: function() {
                                e()
                            }
                        })
                    })), r.all([d, f])
                }
            }, o.onRemoveTeamMembers = function(e, t, n) {
                var o = this,
                    s = o.db,
                    a = {
                        team: e,
                        accounts: n
                    };
                if (o.logger.info("team::onRemoveTeamMembers:", a), o.options.onRemoveTeamMembers(i.simpleClone(a)), s.enable) {
                    if (n.indexOf(o.account) === -1) {
                        var c = s.removeTeamMembersByAccounts(t, n),
                            u = r.resolve();
                        return e && (u = s.putTeam(e)), r.all([c, u])
                    }
                    return s.leaveTeam(t)
                }
            }, o.updateTeamManagers = function(e, t, n, o, s) {
                var a = this,
                    u = a.db,
                    l = e.attach.members = n.map(function(e) {
                        return {
                            id: c.genId(t, e),
                            type: o ? "manager" : "normal",
                            updateTime: s
                        }
                    }),
                    d = {
                        teamId: "" + t,
                        memberUpdateTime: s
                    };
                e.attach.team = d;
                var f = {
                    team: d,
                    accounts: n,
                    isManager: o,
                    members: l
                };
                if (a.logger.info("team::updateTeamManagers:", f), a.options.onUpdateTeamManagers(i.simpleClone(f)), u.enable) {
                    var p = u.updateTeam(d),
                        m = u.updateTeamManagers(t, n, o, s);
                    return r.all([p, m])
                }
            }, o.onDismissTeam = function(e, t) {
                var n = this,
                    r = n.db,
                    o = {
                        teamId: e
                    };
                if (n.logger.info("team::onDismissTeam:", o), n.options.onDismissTeam(o), r.enable) return r.dismissTeam(e, t)
            }, o.transferTeam = function(e, t, n, r) {
                var o = this,
                    s = o.db,
                    a = t.teamId,
                    u = t.memberUpdateTime,
                    l = {
                        id: c.genId(a, n),
                        type: "normal",
                        updateTime: u
                    },
                    d = {
                        id: c.genId(a, r),
                        type: "owner",
                        updateTime: u
                    };
                e.attach.members = [l, d];
                var f = {
                    team: t,
                    from: l,
                    to: d
                };
                if (o.logger.info("team::transferTeam:", f), o.options.onTransferTeam(i.simpleClone(f)), s.enable) return s.transferTeam(t, n, r)
            }, o.onUpdateTeamMembersMute = function(e, t, n, o) {
                var s = this,
                    a = s.db,
                    u = n.map(function(e) {
                        return {
                            id: c.genId(t.teamId, e),
                            account: e,
                            teamId: t.teamId,
                            mute: o,
                            updateTime: t.memberUpdateTime
                        }
                    });
                e.attach.members = u;
                var l = {
                    team: t,
                    accounts: n,
                    members: u,
                    mute: o
                };
                if (s.logger.info("team::onUpdateTeamMembersMute:", l), s.options.onUpdateTeamMembersMute(i.simpleClone(l)), a.enable) {
                    var d = a.updateTeamMembers(u),
                        f = a.putTeam(t);
                    return r.all([d, f])
                }
            }, o.onHistoryMsgs = function(e) {
                e.error || (e.obj.msgs = this.message.reverseMsgs(e.content.msgs))
            }, o.isFilterMsgs = function(e) {
                return !!e[0].filter
            }, o.splitMsgs = function(e, t, n, r) {
                e.forEach(function(e) {
                    if (e.filter) r.push(e);
                    else switch (e.scene) {
                        case "p2p":
                            t.push(e);
                            break;
                        case "team":
                            n.push(e)
                    }
                })
            }, o.markMsgRead = function(e, t) {
                i.isArray(e) || (e = [e]);
                var n = this,
                    r = n.db;
                if (r.enable || n.options.autoMarkRead || t) {
                    var o = [],
                        s = [],
                        a = [];
                    n.splitMsgs(e, o, s, a), n.markP2pMsgsRead(o), n.markTeamMsgsRead(s), n.markFilterMsgsRead(a)
                }
            }, o.markP2pMsgsRead = function(e) {
                if (e.length) {
                    var t = l.idMap.msg.id,
                        n = l.idMap.msg.msg;
                    this.doMarkMsgsRead(t, n, e)
                }
            }, o.markTeamMsgsRead = function(e) {
                if (e.length) {
                    var t = l.idMap.team.id,
                        n = l.idMap.team.teamMsg;
                    this.doMarkMsgsRead(t, n, e)
                }
            }, o.markFilterMsgsRead = function(e) {
                if (e.length) {
                    var t = l.idMap.filter.id,
                        n = l.idMap.filter.filterMsg;
                    this.doMarkMsgsRead(t, n, e)
                }
            }, o.markSysMsgRead = function(e, t) {
                i.isArray(e) || (e = [e]);
                var n = this,
                    r = n.db;
                if (r.enable || n.options.autoMarkRead || t) {
                    var o, s;
                    n.isFilterMsgs(e) ? (o = l.idMap.filter.id, s = l.idMap.filter.filterSysMsg) : (o = l.idMap.msg.id, s = l.idMap.msg.sysMsg), n.doMarkMsgsRead(o, s, e)
                }
            }, o.doMarkMsgsRead = function(e, t, n) {
                n && n.length && this.sendCmd("batchMarkRead", {
                    sid: e,
                    cid: t,
                    ids: n.map(function(e) {
                        return e.idServer
                    })
                })
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(31),
                s = n(30),
                a = n(1);
            o.onDeleteMsg = function(e) {
                delete e.obj.sysMsg, e.error || (e.promise = this.deleteLocalMsg(e.obj.msg))
            }, o.onMsgDeleted = function(e) {
                if (!e.error) {
                    var t = this,
                        n = t.db,
                        r = i.reverse(e.content.sysMsg);
                    r = t.processDeleteMsgSysMsg(r), t.markSysMsgRead(r), t.deleteLocalMsg(r.msg).then(function() {
                        n.enable && n.updateDeleteMsgTimetag(r.time + 1), t.handleSysMsg(r)
                    })
                }
            }, o.processDeleteMsgSysMsg = function(e) {
                var t = this;
                return e.msg = {}, ["scene", "from", "to"].forEach(function(t) {
                    e.msg[t] = e[t]
                }), e.msg.idClient = e.deletedIdClient, e.msg.idServer = e.deletedIdServer, e.msg.time = e.deletedMsgTime, e.msg.fromNick = e.deletedMsgFromNick, e.opeAccount = e.opeAccount || e.from, e.msg.opeAccount = e.opeAccount, t.message.Message.setExtra(e.msg, t.account), e
            }, o.onDeleteMsgOfflineRoaming = function(e) {
                if (!e.error) {
                    var t = this,
                        n = 1 === +e.content.type ? "offline" : "roaming",
                        r = i.reverseSysMsgs(e.content.sysMsgs, {
                            mapper: function(e) {
                                return t.processDeleteMsgSysMsg(e)
                            }
                        });
                    t.logger.info("msg::onDeleteMsgOfflineRoaming: on delete " + n, r), "offline" === n && t.markSysMsgRead(r);
                    var o = e.content.timetag;
                    t.timetags.deleteMsg = o, t.syncResult.deleteMsgTimetag = o;
                    var s = t.putSysMsg(r, "offlineSysMsgs");
                    s.cmd = "deleteMsgSysMsgs " + n, t.syncPromiseArray.push(s), t.syncResult.deleteMsgSysMsgs = t.syncResult.deleteMsgSysMsgs || [], t.syncResult.deleteMsgSysMsgs.push({
                        type: n,
                        sysMsgs: r
                    })
                }
            }, o.deleteMsgOfflineRoaming = function(e, t) {
                if (!e) return r.resolve();
                var n = this;
                n.logger.info("msg::deleteMsgOfflineRoaming: ", e, t);
                var o = n.db,
                    i = [];
                return e.forEach(function(e) {
                    e.sysMsgs.forEach(function(e) {
                        var r = n.deleteLocalMsg(e.msg, {
                            cbUpdateSession: function(e) {
                                e = n.mergeSession(e), e = a.simpleClone(e), s.trim(e);
                                var r = a.findObjIndexInArray(t, {
                                    value: e.id
                                });
                                if (r !== -1 && (t[r] = a.merge({}, t[r], e)), o.enable) return o.updateSession(e)
                            }
                        });
                        i.push(r)
                    })
                }), r.all(i).then(function() {
                    if (o.enable) return o.updateDeleteMsgTimetag(n.syncResult.deleteMsgTimetag)
                })
            }, o.deleteLocalMsg = function(e, t) {
                var n = this,
                    o = n.db;
                t = t || {};
                var i = t.cbUpdateSession || n.updateLocalSession.bind(n);
                if (o.enable && e) {
                    var s = !1,
                        a = null,
                        c = e.sessionId;
                    return o.getMsgs({
                        sessionId: c,
                        limit: 1
                    }).then(function(t) {
                        t && t[0] && t[0].idClient === e.idClient && (s = !0)
                    }).then(function() {
                        return o.deleteMsg(e.idClient)
                    }).then(function() {
                        if (s) return o.getMsgs({
                            sessionId: c,
                            limit: 1
                        })
                    }).then(function(e) {
                        if (s) return e && e[0] && (a = e[0]), i({
                            id: c,
                            lastMsg: a
                        })
                    })
                }
                return r.resolve()
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(1);
            o.onOfflineMsgReceipts = function(e) {
                var t, n = this,
                    o = n.db,
                    i = e.content.msgReceipts,
                    s = n.syncResult.msgReceipts = [],
                    a = [],
                    c = "msgReceipts",
                    u = n.syncResult.sessions || {};
                i.forEach(function(e) {
                    e.time = +e.time;
                    var i = e.sessionId = "p2p-" + e.from;
                    c += "-" + i, t = r.resolve();
                    var l = u[i];
                    o.enable ? t = o.getSession(i).then(function(t) {
                        if (t = t || l, t && n.shouldUpdateSessionFromMsgReceipt(t, e)) {
                            var r = n.genSessionFromMsgReceipt(t, e),
                                s = n.syncResult.sessions;
                            return s && s[i] && (s = s[i], s.lastMsg && r.lastMsg && s.lastMsg.time > r.lastMsg.time && (r.lastMsg = s.lastMsg)), o.putSession(r).then(function(e) {
                                e && n.cacheSyncedSession(e)
                            })
                        }
                    }) : l && s.push(e), a.push(t)
                }), t = r.all(a).then(function() {
                    if (o.enable) return o.updateMsgReceiptsTimetag(e.content.timetag)
                }), t.cmd = c, n.syncPromiseArray.push(t)
            }, o.mergeSessionAndMsgReceipts = function(e, t) {
                var n = this,
                    r = {};
                return e = e || [], t = t || [], e.forEach(function(e) {
                    r[e.id] = e
                }), t.forEach(function(t) {
                    var o = r[t.sessionId];
                    if (n.shouldUpdateSessionFromMsgReceipt(o, t)) {
                        var i = n.genSessionFromMsgReceipt(o, t);
                        e = n.api.mergeSessions(e, i)
                    }
                }), e
            }, o.shouldUpdateSessionFromMsgReceipt = function(e, t) {
                return !e || !e.msgReceiptServerTime || t.time > e.msgReceiptServerTime
            }, o.genSessionFromMsgReceipt = function(e, t) {
                var n = t.time,
                    r = {
                        id: t.sessionId,
                        msgReceiptTime: n,
                        msgReceiptServerTime: n
                    };
                return e && e.id === t.sessionId && (r = i.merge({}, e, r)), e && e.updateTime || (r.updateTime = n), r
            }, o.onMsgReceipt = function(e) {
                var t = this,
                    n = t.db,
                    o = e.content.msgReceipt;
                o.time = +o.time;
                var i = o.idClient,
                    s = r.resolve();
                n.enable && i && (s = n.getMsgByIdClient(i)), s.then(function(e) {
                    var n;
                    if (e) {
                        if (!e.idServer) return void(t.msgReceiptTasks[i] = o);
                        n = e.time
                    } else n = o.time;
                    o.msgReceiptTime = n, t.updateSessionMsgReceiptTime(o)
                })
            }, o.resolveMsgReceiptTask = function(e) {
                var t = this,
                    n = t.msgReceiptTasks[e.idClient];
                n && (n.msgReceiptTime = e.time, this.updateSessionMsgReceiptTime(n))
            }, o.updateSessionMsgReceiptTime = function(e) {
                var t = this,
                    n = t.db,
                    r = {
                        id: "p2p-" + e.from,
                        msgReceiptTime: e.msgReceiptTime,
                        msgReceiptServerTime: e.time
                    };
                n.enable && n.putSession(r), t.onUpdateSession(r)
            }, o.onSendMsgReceipt = function(e) {
                var t = this;
                if (!e.error) {
                    var n = e.obj.msgReceipt,
                        r = +n.time,
                        o = +e.content.msgReceipt.time,
                        i = t.sessionSet["p2p-" + n.to];
                    i.msgReceiptSendTime = Math.min(r, o)
                }
            }, o.shouldSendMsgReceipt = function(e) {
                if (e && "p2p" === e.scene && "success" === e.status) {
                    var t = this.sessionSet[e.sessionId];
                    if (t) {
                        var n = t.msgReceiptSendTime;
                        return !n || n < e.time
                    }
                }
                return !1
            }, o.isMsgRemoteRead = function(e) {
                var t = this;
                if (e && "p2p" === e.scene && "out" === e.flow && "success" === e.status) {
                    var n = t.sessionSet[e.sessionId];
                    if (n && n.msgReceiptTime) return e.time <= n.msgReceiptTime
                }
                return !1
            }
        }, , function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(1),
                s = n(61);
            o.processNotify = function(e) {
                var t = this;
                switch (e.cmd) {
                    case "syncOfflineMsgs":
                        t.onOfflineMsgs(e);
                        break;
                    case "batchMarkRead":
                        break;
                    case "syncOfflineSysMsgs":
                        t.onOfflineSysMsgs(e);
                        break;
                    case "syncRoamingMsgs":
                        t.onRoamingMsgs(e);
                        break;
                    case "syncOfflineFilterMsgs":
                        t.onOfflineMsgs(e, !0);
                        break;
                    case "syncOfflineFilterSysMsgs":
                        t.onOfflineSysMsgs(e, !0);
                        break;
                    case "syncMsgReceipts":
                        t.onOfflineMsgReceipts(e);
                        break;
                    case "syncDonnop":
                        t.onDonnop(e, !0);
                        break;
                    case "syncSessionAck":
                        t.syncSessionAck(e);
                        break;
                    case "syncRobots":
                        t.onRobots(e);
                        break;
                    case "syncBroadcastMsgs":
                        t.onBroadcastMsgs(e)
                }
            }, o.onDonnop = function(e, t) {
                if (!e.error) {
                    var n = this,
                        r = n.db,
                        o = s.reverse(e.content.donnop);
                    n.mergeDonnop(o);
                    var i = n.dbDonnop();
                    if (t) {
                        var a = e.content.timetag;
                        n.timetags.donnop = a, r.enable && (i = i.then(function() {
                            return n.db.updateDonnopTimetag(a)
                        })), i.cmd = "donnop", n.syncPromiseArray.push(i)
                    } else n.onPushNotificationMultiportConfigUpdate()
                }
            }, o.onUpdateDonnop = function(e) {
                var t = this;
                if (!e.error) {
                    var n = e.obj;
                    n && (t.mergeDonnop(i.filterObj(n, ["shouldPushNotificationWhenPCOnline"])), t.dbDonnop(), t.onPushNotificationMultiportConfigUpdate())
                }
            }, o.getPushNotificationMultiportConfig = function() {
                var e = this;
                return i.merge({}, e.pushNotificationMultiportConfig)
            }, o.mergeDonnop = function(e) {
                var t = this;
                t.pushNotificationMultiportConfig = i.merge({}, t.pushNotificationMultiportConfig, e)
            }, o.dbDonnop = function() {
                var e = this,
                    t = e.db;
                return t.enable ? e.db.setDonnop(e.pushNotificationMultiportConfig) : r.resolve()
            }, o.onPushNotificationMultiportConfigUpdate = function() {
                var e = this;
                setTimeout(function() {
                    var t = e.getPushNotificationMultiportConfig();
                    e.logger.info("link::onPushNotificationMultiportConfigUpdate:", t), e.options.onPushNotificationMultiportConfigUpdate(t)
                })
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(6).fn,
                o = n(1);
            r.onRobots = function(e) {
                var t = this,
                    n = e.content;
                if (o.isFunction(t.options.onrobots) && Array.isArray(n.robots)) {
                    var r = n.robots.filter(function(e) {
                        return !!e.botid
                    });
                    r.length > 0 && t.options.onrobots(r || [])
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(1),
                s = n(30),
                a = n(5);
            o.mergeSession = function(e) {
                e = i.copyWithNull(e);
                var t = this.sessionSet,
                    n = e.id,
                    r = t[n];
                if (r && r.lastMsg && e && e.lastMsg && e.lastMsg.isLocal) {
                    var o = r.lastMsg.time || 0,
                        s = e.lastMsg.time || 0;
                    if (s < o) return r
                }
                return t[n] = i.merge(r, e), e = t[n], i.undef(e.unread) && (e.unread = 0), e
            }, o.mergeSessions = function(e) {
                var t = this;
                e.forEach(function(e) {
                    t.mergeSession(e)
                })
            }, o.deleteLocalSession = function(e) {
                var t = this;
                i.isArray(e) || (e = [e]), e.forEach(function(e) {
                    delete t.sessionSet[e]
                })
            }, o.onDeleteSessions = function(e) {
                e.obj = e.obj.sessions.map(function(e) {
                    return s.parse(e)
                })
            }, o.onUpdateSession = function(e) {
                var t = this;
                return new r(function(n) {
                    e ? (e = t.mergeSession(e), e = i.simpleClone(e), s.trim(e), s.isComplete(e) && setTimeout(function() {
                        t.logger.info("session::onUpdateSession:", e.id, i.simpleClone(e)), t.options.onupdatesession(e), n(e)
                    }, 0)) : n(e)
                })
            }, o.setCurrSession = function(e) {
                var t = this;
                e = "" + e, t.currSessionId = e, t.logger.info("session::setCurrSession:", e)
            }, o.findSession = function(e) {
                return this.sessionSet[e]
            }, o.resetSessionUnread = function(e) {
                function t() {
                    n = {
                        id: e,
                        unread: 0
                    }, r.onUpdateSession(n)
                }
                e = "" + e;
                var n, r = this,
                    o = r.db;
                if (!r.findSession(e)) return void r.logger.warn("session::resetSessionUnread: no session " + e);
                if (o.enable && o.resetSessionUnread(e), !r.options.autoMarkRead && r.sessionUnreadMsgs && r.sessionUnreadMsgs[e]) {
                    var i = r.sessionUnreadMsgs[e];
                    r.markMsgRead(i, !0), r.sessionUnreadMsgs[e] = []
                }
                t()
            }, o.insertLocalSession = function(e) {
                var t = this,
                    n = t.db,
                    o = t.sessionSet;
                return new r(function(c, u) {
                    var l = e.scene,
                        d = e.to,
                        f = l + "-" + d,
                        p = t.findSession(f);
                    if (p) t.logger.warn("session::insertLocalSession: session already exist", p), u(a.sessionExist());
                    else {
                        var m;
                        if (i.isNumber(e.updateTime)) m = e.updateTime;
                        else {
                            var y, g = [];
                            for (var h in o) o.hasOwnProperty(h) && (y = o[h], i.isNumber(y.updateTime) && g.push(y.updateTime));
                            m = Math.max.apply(Math, g) + 1, m = Math.max(m, +new Date)
                        }
                        var v = r.resolve();
                        n.enable && (v = n.getMsgs({
                            sessionId: f,
                            limit: 1
                        })), v.then(function(e) {
                            if (i.isArray(e) && 1 === e.length) {
                                var r = e[0];
                                p = s.genSessionByMsg(r), p.updateTime = m
                            } else p = {
                                id: f,
                                scene: l,
                                to: d,
                                updateTime: m,
                                lastMsg: null
                            };
                            n.enable ? n.putSession(p).then(c, u) : c(p), t.onUpdateSession(p)
                        })
                    }
                })
            }, o.updateLocalSession = function(e, t) {
                var n = this;
                return new r(function(o, s) {
                    var c = n.db,
                        u = n.findSession(e.id);
                    if (u) {
                        var l = r.resolve(),
                            d = i.filterObj(e, "id lastMsg localCustom");
                        c.enable && (l = c.updateSession(d)), l.then(function(e) {
                            return n.onUpdateSession(e, t)
                        }).then(o, function(e) {
                            s(e)
                        })
                    } else n.logger.warn("session::updateLocalSession: no session ", e.id), s(a.sessionNotExist())
                })
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn;
            o.syncSessionAck = function(e) {
                var t = this,
                    n = t.db,
                    o = r.resolve();
                [
                    [e.content.p2p, "p2p"],
                    [e.content.team.m_map, "team"]
                ].forEach(function(e) {
                    var r = e[0],
                        i = e[1];
                    Object.keys(r).forEach(function(e) {
                        var s = i + "-" + e,
                            a = {
                                id: s,
                                ack: r[e]
                            };
                        n.enable && (o = o.then(function() {
                            return n.putSession(a)
                        }).then(function() {
                            t.markUnreadBySessionAck({
                                sessionId: s,
                                ack: r[e]
                            })
                        })), t.mergeSession(a)
                    })
                }), t.logger.warn("session::syncSessionAck: parse offline session ack", t.sessionSet);
                var i = e.content.timetag;
                n.enable && (o = o.then(function() {
                    return t.db.updateSessionAck(i)
                })), o.cmd = "sessionAck", t.syncPromiseArray.push(o)
            }, o.onMarkSessionAck = function(e) {
                e.error || this.storeSessionAck(e.obj)
            }, o.syncMarkSessionAck = function(e) {
                this.storeSessionAck(e.content)
            }, o.storeSessionAck = function(e) {
                var t = this,
                    n = t.options.syncSessionUnread;
                if (n) {
                    var r = t.db,
                        o = 0 === e.scene ? "p2p" : "team",
                        i = o + "-" + e.to,
                        s = e.timetag,
                        a = t.findSession(i) || {},
                        c = a.ack || 0;
                    if (s <= c) return void t.logger.warn("session::storeSessionAck: ack <= ackInMemory", s);
                    var u = {
                        id: i,
                        ack: s
                    };
                    t.mergeSession(u), r.enable && r.updateSession(u), t.logger.info("session::storeSessionAck:", u), t.markUnreadBySessionAck({
                        sessionId: i,
                        ack: u.ack
                    })
                }
            }, o.markUnreadBySessionAck = function(e) {
                var t = e.sessionId,
                    n = e.ack,
                    r = this,
                    o = r.db;
                if (o.enable) r.pushMsgTask(function() {
                    return o.getMsgCountAfterAck({
                        shouldCountNotifyUnread: r.options.shouldCountNotifyUnread,
                        sessionId: t,
                        ack: n
                    }).then(function(e) {
                        var n = {
                            id: t,
                            unread: e
                        };
                        return r.logger.log("session::markUnreadBySessionAck: db.getMsgCountAfterAck done"), r.syncing && r.cacheSyncedSession(n), r.onUpdateSession(n), o.updateSession(n)
                    })
                });
                else {
                    var i = r.findSession(t);
                    if (i) {
                        var s = i.unreadMsgs;
                        if (s && s.length) {
                            for (var a = 0, c = [], u = s.length - 1; u >= 0; u--) {
                                var l = s[u];
                                if (!(l.time > n)) break;
                                a++, c.push(l)
                            }
                            i.unreadMsgs = c, i.unread = a, r.logger.info("session::markUnreadBySessionAck: unread " + a), r.onUpdateSession(i)
                        }
                    }
                }
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(1),
                s = n(5),
                a = i.undef,
                c = i.objs2ids,
                u = i.objs2accounts,
                l = i.teams2ids,
                d = n(30);
            o.beforeSync = function() {
                var e = this,
                    t = e.db;
                return t.enable ? t.clearSendingMsgs() : r.resolve()
            }, o.syncData = function() {
                function e(e) {
                    t.syncPromiseArray = [], t.syncResult = {}, t.syncTeamMembersPromiseArray = [], t.syncTeamMembersResult = {}, i.verifyBooleanWithDefault(r, "syncRelations syncFriends syncFriendUsers syncTeams syncRoamingMsgs syncMsgReceipts syncExtraTeamInfo", !0), i.verifyBooleanWithDefault(r, "syncFilter syncTeamMembers", !1);
                    var n = {};
                    e = e || {}, window._nimForceSyncIM && (t.logger.warn("sync::syncData: nimForceSyncIM"), delete e.teams, window._nimForceSyncIM = !1), n.myInfo = e.myInfo || 0, n.offlineMsgs = 0, r.syncRelations && (n.relations = e.relations || 0), r.syncFriends && (n.friends = e.friends || 0), r.syncFriendUsers && (n.friendUsers = e.friendUsers || 0), r.syncRobots && (n.robots = e.robots || 0), r.syncTeams && (n.teams = e.teams || 0), r.syncRoamingMsgs && (n.roamingMsgs = e.roamingMsgs || 0), r.syncMsgReceipts && (n.msgReceipts = e.msgReceipts || 0), r.syncExtraTeamInfo && (n.myTeamMembers = e.myTeamMembers || 0), r.syncSessionUnread && (n.sessionAck = e.sessionAck || 0), r.syncBroadcastMsgs && (n.broadcastMsgs = e.broadcastMsg || 0), n.donnop = e.donnop || 0, n.deleteMsg = e.deleteMsg || 0, r.syncFilter && (n.filterMsgs = 0), t.sendCmd("sync", {
                        sync: n
                    }, t.onSyncData.bind(t))
                }
                var t = this,
                    n = t.db,
                    r = t.options,
                    o = n.enable;
                t.notifyLogin(), t.syncing = !0, o ? t.beforeSync().then(function() {
                    return t.db.getTimetags()
                }).then(function(t) {
                    e(t)
                }, function() {
                    e()
                }) : e(t.timetags)
            }, o.onSyncData = function(e, t) {
                e && this.syncRetryTimes > 3 && (this.syncRetryTimes = 0, this.onCustomError("sync::onSyncData: ", "SYNC_DATA_ERROR", e))
            }, o.processSync = function(e) {
                var t = this;
                switch (t.syncRetryTimes = t.syncRetryTimes || 0, t.syncRetryTimes++, e.cmd) {
                    case "syncDone":
                        e.error ? t.syncRetryTimes > 3 || t.syncData() : (t.timetags.sync = e.content.timetag, t.onSyncDone());
                        break;
                    case "syncTeamMembersDone":
                        t.onSyncTeamMembersDone()
                }
            }, o.onSyncDone = function(e) {
                function t() {
                    if (!$) return void L.logger.warn("sync::onSyncDone: after sync --no promiseArray");
                    if (L.logger.info("sync::onSyncDone: after sync", i.promises2cmds($)), $ = [], v = J.blacklist || [], b = J.invalidBlacklist || [], M = J.mutelist || [], T = J.invalidMutelist || [], S = J.friends, k = J.invalidFriends || [], w = J.myInfo, O = J.users, C = J.teams, I = J.invalidTeams || [], x = J.sessions, _ = J.msgReceipts, E = J.roamingMsgs, P = J.offlineMsgs, A = J.offlineFilterMsgs, R = J.offlineSysMsgs, F = J.offlineCustomSysMsgs, N = J.offlineFilterSysMsgs, U = J.offlineFilterCustomSysMsgs, D = J.broadcastMsgs, B = J.sysMsgUnread, x) {
                        var e = [];
                        Object.keys(x).forEach(function(t) {
                            e.push(x[t])
                        }), x = e.sort(function(e, t) {
                            return t.updateTime - e.updateTime
                        })
                    }
                    var t = r.resolve();
                    W && (t = n().then(function(e) {
                        var t = {};
                        e.forEach(function(e) {
                            var n = e.sessionId;
                            t[n] || (t[n] = !0, L.markUnreadByMsgsPromise(n))
                        })
                    })), t.then(function() {
                        W && !L.hasSynced && (L.hasSynced = !0, o());
                        var e = $.filter(function(e) {
                            return "sessionAck" === e.cmd
                        });
                        0 === e.length && e.push(r.resolve());
                        var t = $.filter(function(e) {
                            return "sessionAck" !== e.cmd
                        });
                        0 === t.length && t.push(r.resolve()), r.all(t).then(function() {
                            return r.all(e)
                        }).then(f).then(m, function(e) {
                            L.onCustomError("sync::onSyncDone:afterSync syncSessionAckPromise", "SYNC_SESSION_ACK_ERROR", e)
                        })
                    })
                }
                function n() {
                    var e, t = [],
                        n = [];
                    return E && E.forEach(function(e) {
                        n = [].concat(n, e.msgs)
                    }), P && P.forEach(function(e) {
                        n = [].concat(n, e.msgs)
                    }), e = q.putMsg(n), t.push(e), r.all(t).then(function() {
                        return n
                    })
                }
                function o() {
                    H.syncRelations && (h = q.getRelations().then(function(e) {
                        v = e[0], M = e[1], v.invalid = b, M.invalid = T
                    }, function(e) {
                        return e._msg = "on relations error", e
                    }), $.push(h)), H.syncFriends && (h = q.getFriends().then(function(e) {
                        S = e, S.invalid = k
                    }, function(e) {
                        return e._msg = "on friends error", e
                    }), $.push(h)), a(w) && (h = q.getUser(L.account).then(function(e) {
                        w = e
                    }, function(e) {
                        return e._msg = "on myInfo error", e
                    }), $.push(h)), H.syncFriendUsers && (h = q.getFriends().then(function(e) {
                        return e.map(function(e) {
                            return e.account
                        })
                    }).then(function(e) {
                        return q.getUsers(e)
                    }).then(function(e) {
                        O = e
                    }, function(e) {
                        return e._msg = "on users error", e
                    }), $.push(h)), H.syncTeams && (h = q.getTeams().then(function(e) {
                        C = e, C.invalid = I
                    }, function(e) {
                        return e._msg = "on teams error", e
                    }), $.push(h)), h = q.getTeamMembersByAccount(L.account).then(function(e) {
                        L.mergeMyTeamMembers(e)
                    }), $.push(h), h = q.getDonnop().then(function(e) {
                        L.mergeDonnop(e)
                    }), $.push(h), h = q.getSessions().then(function(e) {
                        x = e
                    }, function(e) {
                        return e._msg = "on sessions error", e
                    }), $.push(h), h = q.getSysMsgUnread().then(function(e) {
                        B = e
                    }, function(e) {
                        return e._msg = "on sysMsgUnread error", e
                    }), $.push(h)
                }
                function f() {
                    L.logger.info("sync::onSyncDone: taskAfterSync"), p();
                    var e = [];
                    return e.push(L.deleteMsgOfflineRoaming(J.deleteMsgSysMsgs, x)), r.all(e)
                }
                function p() {
                    if (J.deleteMsgSysMsgs) {
                        var e = {};
                        E && E.forEach(function(t) {
                            e[t.sessionId] = t
                        });
                        var t = {};
                        P && P.forEach(function(e) {
                            t[e.sessionId] = e
                        });
                        var n = L.api;
                        J.deleteMsgSysMsgs.forEach(function(r) {
                            r.sysMsgs.forEach(function(r) {
                                var o = r.msg,
                                    i = o.sessionId;
                                [e, t].forEach(function(e) {
                                    e[i] && (e[i].msgs = n.cutMsgs(e[i].msgs, o))
                                })
                            })
                        }), q.enable || [E, P].forEach(function(e) {
                            e && e.forEach(function(e) {
                                if (e.msgs.length) {
                                    var t = L.genSessionByMsgs(e.msgs);
                                    L.cacheSyncedSession(t), x = n.mergeSessions(x, t)
                                } else x = n.cutSessions(x, {
                                    id: e.sessionId
                                })
                            })
                        })
                    }
                }
                function m() {
                    setTimeout(y, 0)
                }
                function y() {
                    var e, t, n = [];
                    v && (L.logger.info("sync::notifyDataAsync: on blacklist", u(v), v), H.onblacklist(v)), M && (L.logger.info("sync::notifyDataAsync: on mutelist", u(M), M), H.onmutelist(M)), S && (L.logger.info("sync::notifyDataAsync: on friends", u(S), S), H.onfriends(S)), w && (L.logger.info("sync::notifyDataAsync: on myInfo", w), L.myInfo = w, H.onmyinfo(i.copy(w))), O && (O.forEach(function(e) {
                        L.mergeUser(e)
                    }), L.logger.info("sync::notifyDataAsync: on users", u(O), O), H.onusers(O)), C && (L.logger.info("sync::notifyDataAsync: on teams", l(C), C), H.onteams(C)), _ && (!L.hasSynced && x && x.length || L.hasSynced) && (x = L.mergeSessionAndMsgReceipts(x, _)), x && x.length && (x.forEach(function(e) {
                        L.syncResult.sessions && L.syncResult.sessions[e.id] && "number" == typeof L.syncResult.sessions[e.id].unread && (e.unread = L.syncResult.sessions[e.id].unread), L.mergeSession(e), d.trim(e)
                    }), L.logger.info("sync::notifyDataAsync: on sessions", c(x), x), H.onsessions(x)), E && E.forEach(function(e) {
                        n.push(e.timetag), t = e.msgs, t.length && (L.logger.info("sync::notifyDataAsync: on roaming msgs", e.sessionId, t.length, t), H.onroamingmsgs(e))
                    }), P && P.forEach(function(e) {
                        n.push(e.timetag), t = e.msgs, t.length && (L.logger.info("sync::notifyDataAsync: on offline msgs", e.sessionId, t.length, t), H.onofflinemsgs(e))
                    }), A && A.forEach(function(e) {
                        n.push(e.timetag), t = e.msgs, t.length && (L.logger.info("sync::notifyDataAsync: on offline filter msgs", e.sessionId, t.length, t), H.onofflinefiltermsgs(t))
                    });
                    var r = [],
                        o = [];
                    J.deleteMsgSysMsgs && J.deleteMsgSysMsgs.forEach(function(e) {
                        "roaming" === e.type ? r = r.concat(e.sysMsgs) : o = o.concat(e.sysMsgs)
                    }), r.length && (j = j || [], j = j.concat(r)), o.length && (R = R || [], R = R.concat(o)), j && (L.logger.info("sync::notifyDataAsync: on roaming sys msgs", j.length, j), H.onroamingsysmsgs(j)), R && (L.logger.info("sync::notifyDataAsync: on offline sys msgs", R.length, R), H.onofflinesysmsgs(R)), N && (L.logger.info("sync::notifyDataAsync: on offline filter sys msgs", N.length, N), H.onofflinefiltersysmsgs(N)), F && (L.logger.info("sync::notifyDataAsync: on offline custom sys msgs", F.length, F), H.onofflinecustomsysmsgs(F)), U && (L.logger.info("sync::notifyDataAsync: on offline filter custom sys msgs", U.length, U), H.onofflinefiltercustomsysmsgs(U)), B && (B = i.merge({}, L.sysMsgUnread, B), L.sysMsgUnread = i.merge({}, B), L.logger.info("sync::notifyDataAsync: on sysMsgUnread", B), H.onsysmsgunread(B));
                    var s = L.getPushNotificationMultiportConfig();
                    L.logger.info("sync::notifyDataAsync: on pushNotificationMultiportConfig", s), H.onPushNotificationMultiportConfig(s), n.length ? (e = Math.max.apply(Math, n), L.updateRoamingMsgTimetag(e).then(g, g)) : g(), L.syncPromiseArray = null, L.syncResult = null
                }
                function g() {
                    if (L.processUnsettledMsgs(), L.processUnsettledSysMsgs(), L.syncing = !1, H.onsyncdone(), H.syncTeamMembers && C && C.length) throw new s("sync team members api deprecated!")
                }
                var h, v, b, M, T, S, k, w, O, C, I, x, _, E, P, A, j, R, F, N, U, D, B, L = this,
                    q = L.db,
                    W = q.enable,
                    H = L.options,
                    $ = L.syncPromiseArray,
                    J = L.syncResult;
                if ($ && $.length) {
                    var X = $.filter(function(e) {
                        return "sessionAck" === e.cmd
                    });
                    0 === X.length && X.push(r.resolve());
                    var V = $.filter(function(e) {
                        return "sessionAck" !== e.cmd
                    });
                    0 === V.length && V.push(r.resolve()), r.all(V).then(function() {
                        return r.all(X)
                    }).then(t, function(e) {
                        L.onCustomError("sync::onSyncDone: syncSessionAckPromise", "SYNC_SESSION_ACK_ERROR", e)
                    })["catch"](function(e) {
                        L.syncData()
                    })
                } else t()
            }, o.syncTeamMembers = function(e) {
                function t(t) {
                    var r = {};
                    t = t || {}, e.forEach(function(e) {
                        r[e.teamId] = 0
                    }, n), n.sendCmd("syncTeamMembers", {
                        sync: r
                    }, n.onSyncTeamMembers.bind(n))
                }
                var n = this;
                t(n.timetags)
            }, o.onSyncTeamMembers = function(e, t) {
                this.onCustomError("sync::onSyncTeamMembers: ", "SYNC_TEAM_MEMBERS_ERROR", e)
            }, o.onSyncTeamMembersDone = function() {
                function e() {
                    l.logger.log("sync::onSyncTeamMembersDone: afterSync", i.promises2cmds(m)), m = [], d.enable && !l.hasSyncedTeamMembers ? (l.hasSyncedTeamMembers = !0, t()) : n()
                }
                function t() {
                    return f.syncTeams && f.syncTeamMembers ? void d.getTeams().then(function(e) {
                        e.forEach(function(e) {
                            var t = e.teamId;
                            c = new r(function(e, n) {
                                l.api.getTeamMembers({
                                    teamId: t,
                                    done: function(r, o) {
                                        r && n("sync team members error"), p[t] = o.members || [], e()
                                    }
                                })
                            }), m.push(c)
                        }), m.length ? r.all(m).then(n, function(e) {
                            l.onCustomError("sync::onSyncTeamMembersDone: pullFullData promiseArray", "SYNC_TEAM_MEMBERS_ERROR", e)
                        }) : n()
                    }, function(e) {
                        l.onCustomError("sync::onSyncTeamMembersDone: pullFullData getTeams", "SYNC_TEAM_MEMBERS_ERROR", e)
                    }) : a()
                }
                function n() {
                    setTimeout(o, 0)
                }
                function o() {
                    var e, t;
                    Object.keys(p).forEach(function(n) {
                        n.indexOf("invalid") === -1 && (e = p[n], t = p[n + "-invalid"] || [], e.invalid = t, s(n, e))
                    }), a()
                }
                function s(e, t) {
                    l.logger.info("sync::onSyncTeamMembersDone: onTeamMembers", e, u(t), t), f.onteammembers({
                        teamId: e,
                        members: t
                    })
                }
                function a() {
                    l.logger.info("sync::onSyncTeamMembersDone: bingo"), f.onsyncteammembersdone(), l.syncTeamMembersResult = null, l.syncTeamMembersPromiseArray = null
                }
                var c, l = this,
                    d = l.db,
                    f = l.options,
                    p = l.syncTeamMembersResult,
                    m = l.syncTeamMembersPromiseArray;
                m.length ? r.all(m).then(e, function(e) {
                    l.onCustomError("sync::onSyncTeamMembersDone: syncTeamMembersPromiseArray", "SYNC_TEAM_MEMBERS_ERROR", e)
                })["catch"](function(t) {
                    l.logger.log("sync::onSyncTeamMembersDone: syncTeamMembersPromiseArray promise ", t), e()
                }) : e()
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(1),
                s = n(31);
            o.splitSysMsgs = function(e, t) {
                for (var n, r = e.length - 1; r >= 0; r--) n = e[r], s.isCustom(n) && (e.splice(r, 1), t.push(n))
            }, o.onOfflineSysMsgs = function(e, t) {
                var n = this,
                    r = e.content.sysMsgs.map(function(e) {
                        return e = s.reverse(e), t && (e.filter = !0), e
                    });
                r = r.reverse(), n.markSysMsgRead(r);
                var o = [];
                n.splitSysMsgs(r, o);
                var i = t ? "offlineFilterSysMsgs" : "offlineSysMsgs",
                    a = t ? "offlineFilterCustomSysMsgs" : "offlineCustomSysMsgs";
                if (r.length) {
                    var c = n.putSysMsg(r, "offlineSysMsgs").then(function(e) {
                        r = e, r.length && (n.logger.info("sysmsg::onOfflineSysMsgs: ", i, r.length, r), n.syncResult[i] = r)
                    });
                    c.cmd = "sysMsgs", n.syncPromiseArray.push(c)
                }
                o.length && (n.logger.info("sysmsg::onOfflineSysMsgs: ", a, o), n.syncResult[a] = o)
            }, o.onSendSysMsg = function(e, t) {
                var n = this,
                    r = e.obj;
                n.completeSysMsg(r), e.error ? r.status = "fail" : r.status = "success", r = s.reverse(r), t && (e.obj.filter = !0), e.obj = r
            }, o.completeSysMsg = function(e) {
                return e.from = this.account, e
            }, o.onSysMsg = function(e, t) {
                var n = this,
                    r = s.reverse(e.content.sysMsg);
                n.markSysMsgRead(r), t && (r.filter = !0), s.isCustom(r) ? (n.logger.info("sysmsg::onSysMsg: on customSysMsg", r), n.options.oncustomsysmsg(r)) : n.syncing ? n.unhandledSysMsgs.push(r) : n.handleSysMsg(r)
            }, o.handleSysMsg = function(e) {
                var t = this,
                    n = e.type,
                    o = e.from;
                t.sysMsgPromise = t.sysMsgPromise.then(function() {
                    return t.putSysMsg(e, "onSysMsg")
                }).then(function(t) {
                    e = t[0]
                }).then(function() {
                    if (e) {
                        var i, s = r.resolve();
                        switch (n) {
                            case "addFriend":
                                i = {
                                    type: "addFriend",
                                    account: o
                                }, s = t.onFriendRequest(i);
                                break;
                            case "passFriendApply":
                                i = {
                                    type: "passFriendApply",
                                    account: o
                                }, s = t.onFriendRequest(i);
                                break;
                            case "deleteFriend":
                                s = t.onDeleteFriend({
                                    account: o
                                })
                        }
                        return i && i.friend && (e.friend = i.friend), s
                    }
                }).then(function() {
                    e && (t.logger.info("sysmsg::handleSysMsg: ", n, e), setTimeout(function() {
                        t.options.onsysmsg(e)
                    }, 0))
                })
            }, o.putSysMsg = function(e, t) {
                if (i.isArray(e) || (e = [e]), e[0].filter) return r.resolve(e);
                var n = this,
                    o = n.db,
                    s = o.enable,
                    a = r.resolve(),
                    c = [];
                return a = a.then(function() {
                    return s ? o.putSysMsg(e) : e
                }).then(function(t) {
                    var r = [];
                    e.forEach(function(e) {
                        n.checkSysMsgUnique(e) && r.push(e)
                    }), e = r, c = s ? t : e
                }), a = a.then(function() {
                    return n.getSysMsgUnread().then(function(r) {
                        return c.length || (c = e, c.backward = !0), n.updateSysMsgUnread(c, r, 1).then(function(e) {
                            "offlineSysMsgs" === t && (n.syncResult.sysMsgUnread = e), "onSysMsg" === t && n.onUpdateSysMsgUnread(e)
                        })
                    })
                }), a.then(function() {
                    return e
                })
            }, o.checkSysMsgUnique = i.genCheckUniqueFunc("idServer"), o.getSysMsgUnread = function() {
                var e = this,
                    t = e.db;
                return new r(function(n) {
                    t.enable ? t.getSysMsgUnread().then(function(e) {
                        n(e)
                    }, function() {
                        n(e.sysMsgUnread)
                    }) : n(e.sysMsgUnread)
                })
            }, o.updateSysMsgUnread = function(e, t, n) {
                if (i.isArray(e) || (e = [e]), !e.length) return r.resolve(t);
                t = t || {};
                var o, a = this,
                    c = a.db;
                return e.forEach(function(e) {
                    (n > 0 && !e.read || n < 0 && e.read) && (o = e.type, t[o] = (t[o] || 0) + n)
                }), t = s.completeUnread(t), a.sysMsgUnread = t, c.enable && !e.backward ? c.updateSysMsgUnread(t) : r.resolve(t)
            }, o.reduceSysMsgUnread = function(e) {
                var t = this;
                return t.getSysMsgUnread().then(function(n) {
                    return t.updateSysMsgUnread(e, n, -1)
                }).then(function(e) {
                    t.onUpdateSysMsgUnread(e)
                })
            }, o.onUpdateSysMsgUnread = function(e) {
                var t = this;
                setTimeout(function() {
                    t.logger.info("sysmsg::onUpdateSysMsgUnread:", e), t.options.onupdatesysmsgunread(e)
                }, 0)
            }, o.updateSysMsg = function(e) {
                var t, n = this,
                    o = n.db;
                t = o.enable ? o.updateSysMsg(e) : r.resolve(e), t.then(function(e) {
                    n.onUpdateSysMsg(e)
                })
            }, o.onUpdateSysMsg = function(e) {
                var t = this;
                setTimeout(function() {
                    i.isArray(e) || (e = [e]), e.forEach(function(e) {
                        t.logger.info("sysmsg::onUpdateSysMsg:", e), t.options.onupdatesysmsg(e)
                    })
                }, 0)
            }, o.processUnsettledSysMsgs = function() {
                var e = this;
                e.unhandledSysMsgs.forEach(function(t) {
                    e.handleSysMsg(t)
                }), e.resetUnsettledSysMsgs()
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(1),
                s = i.objs2accounts,
                a = i.teams2ids,
                c = n(32),
                u = n(23);
            o.processTeam = function(e) {
                var t = this,
                    n = e.error,
                    r = void 0,
                    o = void 0,
                    i = void 0;
                switch (e.cmd) {
                    case "createTeam":
                        if (r = e.obj.team, n || (r = e.content.team), r = c.reverse(r), e.obj.team = r, i = u.assembleOwner(r), e.obj.owner = i, !n) {
                            var s = {
                                team: r,
                                owner: i
                            };
                            t.logger.info("team::processTeam: create team", s), t.options.onCreateTeam(s), t.onCreateTeam(r, i)
                        }
                        break;
                    case "syncCreateTeam":
                        r = c.reverse(e.content.team), i = u.assembleOwner(r), t.logger.info("team::processTeam: sync createTeam", r, i), t.options.onsynccreateteam(r, i), t.onCreateTeam(r, i);
                        break;
                    case "sendTeamMsg":
                        t.onSendMsg(e);
                        break;
                    case "teamMsg":
                        t.onMsg(e);
                        break;
                    case "teamMsgs":
                        t.onMsgs(e);
                        break;
                    case "addTeamMembers":
                    case "removeTeamMembers":
                    case "leaveTeam":
                    case "dismissTeam":
                    case "addTeamManagers":
                    case "removeTeamManagers":
                    case "transferTeam":
                        break;
                    case "updateInfoInTeam":
                        n || (o = e.obj, o.account = t.account, o.id = u.genId(o.teamId, o.account), o = u.reverse(o), e.obj = o, t.mergeMyTeamMembers(o), t.onUpdateTeamMember(o));
                        break;
                    case "updateNickInTeam":
                        e.obj = u.reverse(e.obj);
                        break;
                    case "updateTeam":
                        e.obj = c.reverse(e.obj, !0);
                        break;
                    case "applyTeam":
                        e.error || (e.obj = c.reverse(e.content.team));
                        break;
                    case "passTeamApply":
                        t.updateTeamSysMsgState(e, "passed");
                        break;
                    case "rejectTeamApply":
                        t.updateTeamSysMsgState(e, "rejected");
                        break;
                    case "acceptTeamInvite":
                        t.updateTeamSysMsgState(e, "passed"), e.error || (e.obj = c.reverse(e.content.team));
                        break;
                    case "rejectTeamInvite":
                        t.updateTeamSysMsgState(e, "rejected");
                        break;
                    case "getTeam":
                        e.error || (e.obj = c.reverse(e.content.team));
                        break;
                    case "getTeams":
                        t.onTeams(e);
                        break;
                    case "getTeamMembers":
                        t.onTeamMembers(e);
                        break;
                    case "syncTeams":
                        t.onTeams(e);
                        break;
                    case "syncTeamMembers":
                        t.onTeamMembers(e);
                        break;
                    case "getTeamHistoryMsgs":
                    case "searchTeamHistoryMsgs":
                        t.onHistoryMsgs(e);
                        break;
                    case "syncSendTeamMsg":
                        t.onMsg(e);
                        break;
                    case "syncUpdateTeamMember":
                        o = u.reverse(e.content.teamMember), t.onUpdateTeamMember(o), o.account === t.account && t.mergeMyTeamMembers(o);
                        break;
                    case "updateMuteStateInTeam":
                        break;
                    case "getMyTeamMembers":
                        e.error || (e.obj = u.reverseMembers(e.content.teamMembers));
                        break;
                    case "getMutedTeamMembers":
                        e.error || (e.obj = {
                            teamId: e.obj.teamId,
                            members: u.reverseMembers(e.content.teamMembers)
                        });
                        break;
                    case "syncMyTeamMembers":
                        t.onSyncMyTeamMembers(e)
                }
            }, o.onCreateTeam = function(e, t) {
                var n = this.db;
                n.enable && (n.putTeam(e), n.putTeamMembers(t))
            }, o.onTeams = function(e) {
                function t() {
                    f && d.forEach(function(e) {
                        e = c.reverse(e), e.validToCurrentUser ? p.push(e) : m.push(e)
                    }), s.logger.info("team::onTeams: parseData", a(p), p, "invalid", a(m), m), d.length ? (f = !0, i = e.content.timetag) : f = !1
                }
                function n(t, n) {
                    e.promise = new r(function(e, r) {
                        function a() {
                            l ? (o(), e(), t()) : u.getTeams().then(function(n) {
                                p = n, o(), e(), t()
                            }).then(void 0, function(e) {
                                e._msg = "get teams error", r(e), n(e)
                            })
                        }
                        f ? u.mergeTeams(p, m, i).then(function() {
                            a()
                        }).then(void 0, function(e) {
                            s.logger.warn("team::onTeams:mergeData: db.mergeTeams error", e), r(e), n(e)
                        }) : (s.logger.warn("team::onTeams:mergeData: no teams need merge"), a())
                    }).then(void 0, function(e) {
                        throw e._msg = "merge teams data error", n(e), e
                    })
                }
                function o() {
                    s.timetags.teams = i, p.invalid = m, l ? (s.syncResult.teams = p, s.syncResult.invalidTeams = m) : (s.logger.info("team::onTeams: not in syncing, get teams", a(p), p), e.obj = p)
                }
                e.content = e.content || {};
                var i, s = this,
                    u = s.db,
                    l = s.packetFromSync(e),
                    d = e.content.teams || [],
                    f = !0,
                    p = [],
                    m = [];
                if (e.error) switch (e.error.code) {
                    case 803:
                        e.error = null, f = !1
                }
                var y = new r(function(r, i) {
                    e.error ? l && i(e.error) : (t(), u.enable ? n(r, i) : (o(), r()))
                });
                l && (y.cmd = "teams", s.syncPromiseArray.push(y))
            }, o.onTeamMembers = function(e) {
                function t() {
                    d && l.forEach(function(e) {
                        e = u.reverse(e), e.valid ? f.push(e) : p.push(e)
                    }), a.logger.warn("team::onTeamMembers: parseData", i, s(f), f, "invalid", s(p), p), l.length ? (d = !0, o = e.content.timetag) : d = !1
                }
                function n() {
                    f.invalid = p, c ? (a.syncTeamMembersResult[i] = f, a.syncTeamMembersResult[i + "-invalid"] = p, a.timetags["team-" + i] = o) : (a.logger.info("team::onTeamMembers: not syncing, get members", i, s(f), f), e.obj = {
                        teamId: i,
                        members: f
                    })
                }
                e.content = e.content || {};
                var o, i, a = this,
                    c = (a.db, a.packetFromSync(e)),
                    l = e.content.members || [],
                    d = !0,
                    f = [],
                    p = [];
                if (e.obj && (i = e.obj.teamId), i || (i = e.content.teamId), i = "" + i, e.error) switch (e.error.code) {
                    case 406:
                        e.error = null, d = !1
                }
                var m = new r(function(r, o) {
                    e.error ? c && o(e.error + " teamId: " + i) : (t(), n(), r())
                });
                c && (m.cmd = i, a.syncTeamMembersPromiseArray.push(m))
            }, o.onUpdateTeamMember = function(e) {
                var t = this;
                e.updateTime || (e.updateTime = +new Date), t.logger.info("team::onUpdateTeamMember: ", e), t.options.onupdateteammember(i.simpleClone(e));
                var n = {
                    teamId: e.teamId,
                    memberUpdateTime: e.updateTime
                };
                t.onUpdateTeam(n);
                var r = this.db;
                r.enable && r.updateTeamMember(e)
            }, o.onUpdateTeam = function(e) {
                var t = this;
                t.logger.info("team::onUpdateTeam:", e), t.options.onUpdateTeam(i.simpleClone(e));
                var n = t.db;
                n.enable && n.updateTeam(e)
            }, o.onSyncMyTeamMembers = function(e) {
                var t = this,
                    n = t.db,
                    r = u.reverseMembers(e.content.teamMembers);
                if (t.logger.info("team::onSyncMyTeamMembers:", r), n.enable) {
                    var o = n.putTeamMembers(r).then(function() {
                        return n.updateMyTeamMembersTimetag(e.content.timetag)
                    });
                    o.cmd = "myTeamMembers", t.syncTeamMembersPromiseArray.push(o)
                }
                t.mergeMyTeamMembers(r)
            }, o.mergeMyTeamMembers = function(e) {
                i.isArray(e) || (e = [e]);
                var t = this,
                    n = t.myTeamMembersMap = t.myTeamMembersMap || {};
                e.forEach(function(e) {
                    var t = e.teamId;
                    n[t] = i.merge(n[t], e)
                }), t.logger.info("team::mergeMyTeamMembers:", n)
            }, o.notifyForNewTeamMsg = function(e) {
                i.isArray(e) || (e = [e]);
                var t = this,
                    n = this.myTeamMembersMap || {},
                    o = {},
                    s = [];
                e.forEach(function(e) {
                    i.exist(n[e]) ? o[e] = !n[e].muteTeam : s.push(e)
                });
                var a = r.resolve(o);
                return s.length && (a = t.api.getMyTeamMembers({
                    teamIds: s,
                    promise: !0
                }).then(function(e) {
                    return t.mergeMyTeamMembers(e), e.forEach(function(e) {
                        o[e.teamId] = !e.muteTeam
                    }), o
                })), a
            }, o.updateTeamSysMsgState = function(e, t) {
                var n, r = e.error;
                r && (t = "error", r = i.filterObj(r, "code message")), n = {
                    idServer: e.obj.idServer,
                    state: t
                }, r && (n.error = r), this.updateSysMsg(n)
            }
        }, function(e, t, n) {
            "use strict";
            var r = n(2).Promise,
                o = n(6).fn,
                i = n(1),
                s = i.objs2accounts,
                a = n(171),
                c = n(41);
            o.processUser = function(e) {
                var t, n = this,
                    r = n.db,
                    o = e.obj,
                    i = e.error,
                    s = e.content;
                switch (e.cmd) {
                    case "markInBlacklist":
                        i || n.markInBlacklist(o);
                        break;
                    case "syncMarkInBlacklist":
                        n.markInBlacklist(s, !0);
                        break;
                    case "markInMutelist":
                        i || n.markInMutelist(o);
                        break;
                    case "syncMarkInMutelist":
                        n.markInMutelist(s, !0);
                        break;
                    case "getRelations":
                        i || n.onRelations(e);
                        break;
                    case "syncMyInfo":
                        n.onMyInfo(e, !0);
                        break;
                    case "updateMyInfo":
                        i || (o.updateTime = s.timetag, n.onUpdateMyInfo(e, o));
                        break;
                    case "syncUpdateMyInfo":
                        n.onUpdateMyInfo(e, s.user, !0);
                        break;
                    case "getUsers":
                        i || (t = s.users.map(function(e) {
                            return e = c.reverse(e), n.mergeUser(e), e
                        }), e.obj = t, r.enable && r.putUsers(t));
                        break;
                    case "updateDonnop":
                        n.onUpdateDonnop(e);
                        break;
                    case "syncUpdateDonnop":
                        n.onDonnop(e, !1)
                }
            }, o.onMyInfo = function(e) {
                function t() {
                    d = c.reverse(u.user), i.logger.info("user::onMyInfo: parseData", d)
                }
                function n(e, t) {
                    s.mergeMyInfo(d, l).then(function() {
                        o(), e()
                    }).then(void 0, function(e) {
                        e._msg = "merge myInfo error", t(e)
                    })
                }
                function o() {
                    i.timetags.myInfo = d.updateTime, l && (i.syncResult.myInfo = d)
                }
                var i = this,
                    s = i.db,
                    a = e.error,
                    u = e.content,
                    l = !0,
                    d = void 0,
                    f = new r(function(e, r) {
                        a ? l && (e(a), i.syncData()) : (t(), s.enable ? n(e, r) : (o(), e()))
                    });
                l && (f.cmd = "myInfo", i.syncPromiseArray.push(f))
            }, o.onUpdateMyInfo = function(e, t, n) {
                var r = this,
                    o = r.db,
                    s = c.reverse(t),
                    a = i.merge(r.myInfo, s);
                r.myInfo = a, n ? (r.logger.info("user::onUpdateMyInfo:", a), r.options.onupdatemyinfo(a)) : e.obj = a, o.enable && (s.account = r.account, o.updateUser(s))
            }, o.onRelations = function(e) {
                function t() {
                    d.forEach(function(e) {
                        e = a.parse(e);
                        var t = {
                            account: e.account,
                            createTime: e.createTime,
                            updateTime: e.updateTime
                        };
                        e.isBlacked ? m.push(t) : y.push(t), e.isMuted ? g.push(t) : h.push(t)
                    }), i.logger.info("user::onRelations: parse blacklist", s(m), m, "delete", s(y), y), i.logger.info("user::onRelations: parse mutelist", s(g), g, "delete", s(h), h), d.length ? (f = !0, p = e.content.timetag) : f = !1
                }
                function n(t, n) {
                    e.promise = new r(function(e, r) {
                        function s() {
                            l ? (o(), e(), t()) : c.getRelations().then(function(n) {
                                m = n[0], g = n[1], o(), e(), t()
                            }).then(void 0, function(e) {
                                e._msg = "get relations error", r(e), n(e)
                            })
                        }
                        f ? c.mergeRelations(m, y, g, h, p).then(function() {
                            s()
                        }).then(void 0, function(e) {
                            e._msg = "merge relations error", r(e), n(e)
                        }) : (i.logger.warn("user::onRelations: no relations need merge"), s())
                    }).then(void 0, function(e) {
                        throw e._msg = "merge relations data error", n(e), e
                    })
                }
                function o() {
                    i.timetags.relations = p, m.invalid = y, g.invalid = h, l ? (i.syncResult.blacklist = m, i.syncResult.mutelist = g, i.syncResult.invalidBlacklist = y, i.syncResult.invalidMutelist = h) : (i.logger.info("user::onRelations: get relations", m, g), e.obj.blacklist = m, e.obj.mutelist = g)
                }
                var i = this,
                    c = i.db,
                    u = e.error,
                    l = i.packetFromSync(e),
                    d = e.content.specialRelations,
                    f = !0,
                    p = void 0,
                    m = [],
                    y = [],
                    g = [],
                    h = [],
                    v = new r(function(e, r) {
                        u ? l && (e(u), i.syncData()) : (t(), c.enable ? n(e, r) : (o(), e()))
                    });
                l && (v.cmd = "relations", i.syncPromiseArray.push(v))
            }, o.markInBlacklist = function(e, t) {
                var n = this,
                    r = n.db;
                e.record = {
                    account: e.account,
                    updateTime: +new Date
                }, r.enable && r.markInBlacklist(e), t && (n.logger.info("user::markInBlacklist:", e), n.options.onsyncmarkinblacklist(e))
            }, o.markInMutelist = function(e, t) {
                var n = this,
                    r = n.db;
                e.record = {
                    account: e.account,
                    updateTime: +new Date
                }, r.enable && r.markInMutelist(e), t && (n.logger.info("user::markInMutelist:", e), n.options.onsyncmarkinmutelist(e))
            }, o.mergeUser = function(e) {
                this.userSet[e.account] = e
            }
        }])
    });