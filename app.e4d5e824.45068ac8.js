// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"app.e4d5e824.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, t, n) {
  var i,
      o = "function" == typeof parcelRequire && parcelRequire,
      u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[t][1][r] || r;
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this);
    }

    return r[t].exports;

    function p(e) {
      return f(p.resolve(e));
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {};
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t;
    }, {}];
  };

  for (var c = 0; c < t.length; c++) {
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  }

  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l;
    }) : n && (this[n] = l);
  }

  if (parcelRequire = f, i) throw i;
  return f;
}({
  "oxwV": [function (require, module, exports) {
    "function" == typeof Object.create ? module.exports = function (t, e) {
      e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }));
    } : module.exports = function (t, e) {
      if (e) {
        t.super_ = e;

        var o = function o() {};

        o.prototype = e.prototype, t.prototype = new o(), t.prototype.constructor = t;
      }
    };
  }, {}],
  "ESoW": [function (require, module, exports) {
    var t = Object.prototype.hasOwnProperty,
        r = Object.prototype.toString;

    module.exports = function (o, e, a) {
      if ("[object Function]" !== r.call(e)) throw new TypeError("iterator must be a function");
      var l = o.length;
      if (l === +l) for (var n = 0; n < l; n++) {
        e.call(a, o[n], n, o);
      } else for (var c in o) {
        t.call(o, c) && e.call(a, o[c], c, o);
      }
    };
  }, {}],
  "S5Jj": [function (require, module, exports) {
    "use strict";

    var r = require("inherits");

    function e(r, e) {
      var t = require("foreach"),
          o = this;

      "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : o.stack = new Error().stack || "Cannot get a stacktrace, browser is too old", this.name = "AlgoliaSearchError", this.message = r || "Unknown error", e && t(e, function (r, e) {
        o[e] = r;
      });
    }

    function t(t, o) {
      function n() {
        var r = Array.prototype.slice.call(arguments, 0);
        "string" != typeof r[0] && r.unshift(o), e.apply(this, r), this.name = "AlgoliaSearch" + t + "Error";
      }

      return r(n, e), n;
    }

    r(e, Error), module.exports = {
      AlgoliaSearchError: e,
      UnparsableJSON: t("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
      RequestTimeout: t("RequestTimeout", "Request timed out before getting a response"),
      Network: t("Network", "Network issue, see err.more for details"),
      JSONPScriptFail: t("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
      ValidUntilNotFound: t("ValidUntilNotFound", "The SecuredAPIKey does not have a validUntil parameter."),
      JSONPScriptError: t("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
      ObjectNotFound: t("ObjectNotFound", "Object not found"),
      Unknown: t("Unknown", "Unknown error occured")
    };
  }, {
    "inherits": "oxwV",
    "foreach": "ESoW"
  }],
  "CAzH": [function (require, module, exports) {
    module.exports = o;

    var e = require("./errors.js");

    function o(o, t) {
      return function (n, r, i) {
        if ("function" == typeof n && "object" == _typeof(r) || "object" == _typeof(i)) throw new e.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
        0 === arguments.length || "function" == typeof n ? (i = n, n = "") : 1 !== arguments.length && "function" != typeof r || (i = r, r = void 0), "object" == _typeof(n) && null !== n ? (r = n, n = void 0) : null == n && (n = "");
        var a,
            c = "";
        return void 0 !== n && (c += o + "=" + encodeURIComponent(n)), void 0 !== r && (r.additionalUA && (a = r.additionalUA, delete r.additionalUA), c = this.as._getSearchParams(r, c)), this._search(c, t, i, a);
      };
    }
  }, {
    "./errors.js": "S5Jj"
  }],
  "n5Ih": [function (require, module, exports) {
    module.exports = function (n, r) {
      var o = !1;
      return function () {
        return o || (console.warn(r), o = !0), n.apply(this, arguments);
      };
    };
  }, {}],
  "HeEx": [function (require, module, exports) {
    module.exports = function (e, a) {
      var l = e.toLowerCase().replace(/[\.\(\)]/g, "");
      return "algoliasearch: `" + e + "` was replaced by `" + a + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + l;
    };
  }, {}],
  "kgD2": [function (require, module, exports) {
    var r = require("foreach");

    module.exports = function o(e) {
      var t = Array.prototype.slice.call(arguments);
      return r(t, function (r) {
        for (var t in r) {
          r.hasOwnProperty(t) && ("object" == _typeof(e[t]) && "object" == _typeof(r[t]) ? e[t] = o({}, e[t], r[t]) : void 0 !== r[t] && (e[t] = r[t]));
        }
      }), e;
    };
  }, {
    "foreach": "ESoW"
  }],
  "hMKC": [function (require, module, exports) {
    module.exports = function (r) {
      return JSON.parse(JSON.stringify(r));
    };
  }, {}],
  "wBSM": [function (require, module, exports) {
    "use strict";

    var t = Object.prototype.toString;

    module.exports = function (e) {
      var o = t.call(e),
          r = "[object Arguments]" === o;
      return r || (r = "[object Array]" !== o && null !== e && "object" == _typeof(e) && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), r;
    };
  }, {}],
  "DprT": [function (require, module, exports) {
    "use strict";

    var t;

    if (!Object.keys) {
      var r = Object.prototype.hasOwnProperty,
          e = Object.prototype.toString,
          o = require("./isArguments"),
          n = Object.prototype.propertyIsEnumerable,
          l = !n.call({
        toString: null
      }, "toString"),
          c = n.call(function () {}, "prototype"),
          i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
          a = function a(t) {
        var r = t.constructor;
        return r && r.prototype === t;
      },
          f = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0
      },
          u = function () {
        if ("undefined" == typeof window) return !1;

        for (var t in window) {
          try {
            if (!f["$" + t] && r.call(window, t) && null !== window[t] && "object" == _typeof(window[t])) try {
              a(window[t]);
            } catch (e) {
              return !0;
            }
          } catch (e) {
            return !0;
          }
        }

        return !1;
      }(),
          p = function p(t) {
        if ("undefined" == typeof window || !u) return a(t);

        try {
          return a(t);
        } catch (r) {
          return !1;
        }
      };

      t = function t(_t) {
        var n = null !== _t && "object" == _typeof(_t),
            a = "[object Function]" === e.call(_t),
            f = o(_t),
            u = n && "[object String]" === e.call(_t),
            s = [];

        if (!n && !a && !f) throw new TypeError("Object.keys called on a non-object");
        var $ = c && a;
        if (u && _t.length > 0 && !r.call(_t, 0)) for (var w = 0; w < _t.length; ++w) {
          s.push(String(w));
        }
        if (f && _t.length > 0) for (var g = 0; g < _t.length; ++g) {
          s.push(String(g));
        } else for (var h in _t) {
          $ && "prototype" === h || !r.call(_t, h) || s.push(String(h));
        }
        if (l) for (var y = p(_t), d = 0; d < i.length; ++d) {
          y && "constructor" === i[d] || !r.call(_t, i[d]) || s.push(i[d]);
        }
        return s;
      };
    }

    module.exports = t;
  }, {
    "./isArguments": "wBSM"
  }],
  "XCKW": [function (require, module, exports) {
    "use strict";

    var e = Array.prototype.slice,
        t = require("./isArguments"),
        r = Object.keys,
        n = r ? function (e) {
      return r(e);
    } : require("./implementation"),
        c = Object.keys;

    n.shim = function () {
      Object.keys ? function () {
        var e = Object.keys(arguments);
        return e && e.length === arguments.length;
      }(1, 2) || (Object.keys = function (r) {
        return t(r) ? c(e.call(r)) : c(r);
      }) : Object.keys = n;
      return Object.keys || n;
    }, module.exports = n;
  }, {
    "./isArguments": "wBSM",
    "./implementation": "DprT"
  }],
  "Ybre": [function (require, module, exports) {
    module.exports = function (e, r) {
      var o = require("object-keys"),
          u = require("foreach"),
          n = {};

      return u(o(e), function (o) {
        !0 !== r(o) && (n[o] = e[o]);
      }), n;
    };
  }, {
    "object-keys": "XCKW",
    "foreach": "ESoW"
  }],
  "aqZJ": [function (require, module, exports) {
    var r = {}.toString;

    module.exports = Array.isArray || function (t) {
      return "[object Array]" == r.call(t);
    };
  }, {}],
  "Q24X": [function (require, module, exports) {
    var r = require("foreach");

    module.exports = function (e, u) {
      var n = [];
      return r(e, function (r, o) {
        n.push(u(r, o, e));
      }), n;
    };
  }, {
    "foreach": "ESoW"
  }],
  "FvxN": [function (require, module, exports) {
    var e = require("./buildSearchMethod.js"),
        t = require("./deprecate.js"),
        a = require("./deprecatedMessage.js");

    function r(e, t) {
      this.indexName = t, this.as = e, this.typeAheadArgs = null, this.typeAheadValueOption = null, this.cache = {};
    }

    module.exports = r, r.prototype.clearCache = function () {
      this.cache = {};
    }, r.prototype.search = e("query"), r.prototype.similarSearch = t(e("similarQuery"), a("index.similarSearch(query[, callback])", "index.search({ similarQuery: query }[, callback])")), r.prototype.browse = function (e, t, a) {
      var r,
          o,
          n = require("./merge.js");

      0 === arguments.length || 1 === arguments.length && "function" == typeof arguments[0] ? (r = 0, a = arguments[0], e = void 0) : "number" == typeof arguments[0] ? (r = arguments[0], "number" == typeof arguments[1] ? o = arguments[1] : "function" == typeof arguments[1] && (a = arguments[1], o = void 0), e = void 0, t = void 0) : "object" == _typeof(arguments[0]) ? ("function" == typeof arguments[1] && (a = arguments[1]), t = arguments[0], e = void 0) : "string" == typeof arguments[0] && "function" == typeof arguments[1] && (a = arguments[1], t = void 0), t = n({}, t || {}, {
        page: r,
        hitsPerPage: o,
        query: e
      });

      var s = this.as._getSearchParams(t, "");

      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
        body: {
          params: s
        },
        hostType: "read",
        callback: a
      });
    }, r.prototype.browseFrom = function (e, t) {
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
        body: {
          cursor: e
        },
        hostType: "read",
        callback: t
      });
    }, r.prototype.searchForFacetValues = function (e, t) {
      var a = require("./clone.js"),
          r = require("./omit.js");

      if (void 0 === e.facetName || void 0 === e.facetQuery) throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");

      var o = e.facetName,
          n = r(a(e), function (e) {
        return "facetName" === e;
      }),
          s = this.as._getSearchParams(n, "");

      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(o) + "/query",
        hostType: "read",
        body: {
          params: s
        },
        callback: t
      });
    }, r.prototype.searchFacet = t(function (e, t) {
      return this.searchForFacetValues(e, t);
    }, a("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])")), r.prototype._search = function (e, t, a, r) {
      return this.as._jsonRequest({
        cache: this.cache,
        method: "POST",
        url: t || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
        body: {
          params: e
        },
        hostType: "read",
        fallback: {
          method: "GET",
          url: "/1/indexes/" + encodeURIComponent(this.indexName),
          body: {
            params: e
          }
        },
        callback: a,
        additionalUA: r
      });
    }, r.prototype.getObject = function (e, t, a) {
      1 !== arguments.length && "function" != typeof t || (a = t, t = void 0);
      var r = "";

      if (void 0 !== t) {
        r = "?attributes=";

        for (var o = 0; o < t.length; ++o) {
          0 !== o && (r += ","), r += t[o];
        }
      }

      return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(e) + r,
        hostType: "read",
        callback: a
      });
    }, r.prototype.getObjects = function (e, t, a) {
      var r = require("isarray"),
          o = require("./map.js");

      if (!r(e)) throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");
      var n = this;
      1 !== arguments.length && "function" != typeof t || (a = t, t = void 0);
      var s = {
        requests: o(e, function (e) {
          var a = {
            indexName: n.indexName,
            objectID: e
          };
          return t && (a.attributesToRetrieve = t.join(",")), a;
        })
      };
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/*/objects",
        hostType: "read",
        body: s,
        callback: a
      });
    }, r.prototype.as = null, r.prototype.indexName = null, r.prototype.typeAheadArgs = null, r.prototype.typeAheadValueOption = null;
  }, {
    "./buildSearchMethod.js": "CAzH",
    "./deprecate.js": "n5Ih",
    "./deprecatedMessage.js": "HeEx",
    "./merge.js": "kgD2",
    "./clone.js": "hMKC",
    "./omit.js": "Ybre",
    "isarray": "aqZJ",
    "./map.js": "Q24X"
  }],
  "czFl": [function (require, module, exports) {
    module.exports = function (o, e) {
      e(o, 0);
    };
  }, {}],
  "K1mi": [function (require, module, exports) {
    "use strict";

    var e,
        t = "object" == (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) ? Reflect : null,
        n = t && "function" == typeof t.apply ? t.apply : function (e, t, n) {
      return Function.prototype.apply.call(e, t, n);
    };

    function r(e) {
      console && console.warn && console.warn(e);
    }

    e = t && "function" == typeof t.ownKeys ? t.ownKeys : Object.getOwnPropertySymbols ? function (e) {
      return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : function (e) {
      return Object.getOwnPropertyNames(e);
    };

    var i = Number.isNaN || function (e) {
      return e != e;
    };

    function o() {
      o.init.call(this);
    }

    module.exports = o, module.exports.once = m, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, o.prototype._maxListeners = void 0;
    var s = 10;

    function u(e) {
      if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + _typeof(e));
    }

    function f(e) {
      return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners;
    }

    function v(e, t, n, i) {
      var o, s, v;
      if (u(n), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), v = s[t]), void 0 === v) v = s[t] = n, ++e._eventsCount;else if ("function" == typeof v ? v = s[t] = i ? [n, v] : [v, n] : i ? v.unshift(n) : v.push(n), (o = f(e)) > 0 && v.length > o && !v.warned) {
        v.warned = !0;
        var l = new Error("Possible EventEmitter memory leak detected. " + v.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = v.length, r(l);
      }
      return e;
    }

    function l() {
      if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
    }

    function c(e, t, n) {
      var r = {
        fired: !1,
        wrapFn: void 0,
        target: e,
        type: t,
        listener: n
      },
          i = l.bind(r);
      return i.listener = n, r.wrapFn = i, i;
    }

    function a(e, t, n) {
      var r = e._events;
      if (void 0 === r) return [];
      var i = r[t];
      return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? d(i) : p(i, i.length);
    }

    function h(e) {
      var t = this._events;

      if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
      }

      return 0;
    }

    function p(e, t) {
      for (var n = new Array(t), r = 0; r < t; ++r) {
        n[r] = e[r];
      }

      return n;
    }

    function y(e, t) {
      for (; t + 1 < e.length; t++) {
        e[t] = e[t + 1];
      }

      e.pop();
    }

    function d(e) {
      for (var t = new Array(e.length), n = 0; n < t.length; ++n) {
        t[n] = e[n].listener || e[n];
      }

      return t;
    }

    function m(e, t) {
      return new Promise(function (n, r) {
        function i() {
          void 0 !== o && e.removeListener("error", o), n([].slice.call(arguments));
        }

        var o;
        "error" !== t && (o = function o(n) {
          e.removeListener(t, i), r(n);
        }, e.once("error", o)), e.once(t, i);
      });
    }

    Object.defineProperty(o, "defaultMaxListeners", {
      enumerable: !0,
      get: function get() {
        return s;
      },
      set: function set(e) {
        if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
        s = e;
      }
    }), o.init = function () {
      void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
    }, o.prototype.setMaxListeners = function (e) {
      if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
      return this._maxListeners = e, this;
    }, o.prototype.getMaxListeners = function () {
      return f(this);
    }, o.prototype.emit = function (e) {
      for (var t = [], r = 1; r < arguments.length; r++) {
        t.push(arguments[r]);
      }

      var i = "error" === e,
          o = this._events;
      if (void 0 !== o) i = i && void 0 === o.error;else if (!i) return !1;

      if (i) {
        var s;
        if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
        var u = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
        throw u.context = s, u;
      }

      var f = o[e];
      if (void 0 === f) return !1;
      if ("function" == typeof f) n(f, this, t);else {
        var v = f.length,
            l = p(f, v);

        for (r = 0; r < v; ++r) {
          n(l[r], this, t);
        }
      }
      return !0;
    }, o.prototype.addListener = function (e, t) {
      return v(this, e, t, !1);
    }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function (e, t) {
      return v(this, e, t, !0);
    }, o.prototype.once = function (e, t) {
      return u(t), this.on(e, c(this, e, t)), this;
    }, o.prototype.prependOnceListener = function (e, t) {
      return u(t), this.prependListener(e, c(this, e, t)), this;
    }, o.prototype.removeListener = function (e, t) {
      var n, r, i, o, s;
      if (u(t), void 0 === (r = this._events)) return this;
      if (void 0 === (n = r[e])) return this;
      if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));else if ("function" != typeof n) {
        for (i = -1, o = n.length - 1; o >= 0; o--) {
          if (n[o] === t || n[o].listener === t) {
            s = n[o].listener, i = o;
            break;
          }
        }

        if (i < 0) return this;
        0 === i ? n.shift() : y(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t);
      }
      return this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function (e) {
      var t, n, r;
      if (void 0 === (n = this._events)) return this;
      if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;

      if (0 === arguments.length) {
        var i,
            o = Object.keys(n);

        for (r = 0; r < o.length; ++r) {
          "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
        }

        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
      }

      if ("function" == typeof (t = n[e])) this.removeListener(e, t);else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) {
        this.removeListener(e, t[r]);
      }
      return this;
    }, o.prototype.listeners = function (e) {
      return a(this, e, !0);
    }, o.prototype.rawListeners = function (e) {
      return a(this, e, !1);
    }, o.listenerCount = function (e, t) {
      return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t);
    }, o.prototype.listenerCount = h, o.prototype.eventNames = function () {
      return this._eventsCount > 0 ? e(this._events) : [];
    };
  }, {}],
  "Br6Z": [function (require, module, exports) {
    "use strict";

    module.exports = r;

    var e = require("inherits"),
        t = require("events").EventEmitter;

    function r() {}

    e(r, t), r.prototype.stop = function () {
      this._stopped = !0, this._clean();
    }, r.prototype._end = function () {
      this.emit("end"), this._clean();
    }, r.prototype._error = function (e) {
      this.emit("error", e), this._clean();
    }, r.prototype._result = function (e) {
      this.emit("result", e);
    }, r.prototype._clean = function () {
      this.removeAllListeners("stop"), this.removeAllListeners("end"), this.removeAllListeners("error"), this.removeAllListeners("result");
    };
  }, {
    "inherits": "oxwV",
    "events": "K1mi"
  }],
  "YsJN": [function (require, module, exports) {
    var e = require("inherits"),
        t = require("./IndexCore.js"),
        o = require("./deprecate.js"),
        n = require("./deprecatedMessage.js"),
        r = require("./exitPromise.js"),
        i = require("./errors"),
        s = o(function () {}, n("forwardToSlaves", "forwardToReplicas"));

    function a() {
      t.apply(this, arguments);
    }

    function c(e, t, o) {
      return function o(n, r) {
        var i = {
          page: n || 0,
          hitsPerPage: t || 100
        },
            s = r || [];
        return e(i).then(function (e) {
          var t = e.hits,
              n = e.nbHits,
              r = t.map(function (e) {
            return delete e._highlightResult, e;
          }),
              a = s.concat(r);
          return a.length < n ? o(i.page + 1, a) : a;
        });
      }().then(function (e) {
        if ("function" != typeof o) return e;
        o(e);
      });
    }

    module.exports = a, e(a, t), a.prototype.addObject = function (e, t, o) {
      return 1 !== arguments.length && "function" != typeof t || (o = t, t = void 0), this.as._jsonRequest({
        method: void 0 !== t ? "PUT" : "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + (void 0 !== t ? "/" + encodeURIComponent(t) : ""),
        body: e,
        hostType: "write",
        callback: o
      });
    }, a.prototype.addObjects = function (e, t) {
      if (!require("isarray")(e)) throw new Error("Usage: index.addObjects(arrayOfObjects[, callback])");

      for (var o = {
        requests: []
      }, n = 0; n < e.length; ++n) {
        var r = {
          action: "addObject",
          body: e[n]
        };
        o.requests.push(r);
      }

      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
        body: o,
        hostType: "write",
        callback: t
      });
    }, a.prototype.partialUpdateObject = function (e, t, o) {
      1 !== arguments.length && "function" != typeof t || (o = t, t = void 0);
      var n = "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(e.objectID) + "/partial";
      return !1 === t && (n += "?createIfNotExists=false"), this.as._jsonRequest({
        method: "POST",
        url: n,
        body: e,
        hostType: "write",
        callback: o
      });
    }, a.prototype.partialUpdateObjects = function (e, t, o) {
      1 !== arguments.length && "function" != typeof t || (o = t, t = !0);
      if (!require("isarray")(e)) throw new Error("Usage: index.partialUpdateObjects(arrayOfObjects[, callback])");

      for (var n = {
        requests: []
      }, r = 0; r < e.length; ++r) {
        var i = {
          action: !0 === t ? "partialUpdateObject" : "partialUpdateObjectNoCreate",
          objectID: e[r].objectID,
          body: e[r]
        };
        n.requests.push(i);
      }

      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
        body: n,
        hostType: "write",
        callback: o
      });
    }, a.prototype.saveObject = function (e, t) {
      return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(e.objectID),
        body: e,
        hostType: "write",
        callback: t
      });
    }, a.prototype.saveObjects = function (e, t) {
      if (!require("isarray")(e)) throw new Error("Usage: index.saveObjects(arrayOfObjects[, callback])");

      for (var o = {
        requests: []
      }, n = 0; n < e.length; ++n) {
        var r = {
          action: "updateObject",
          objectID: e[n].objectID,
          body: e[n]
        };
        o.requests.push(r);
      }

      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
        body: o,
        hostType: "write",
        callback: t
      });
    }, a.prototype.deleteObject = function (e, t) {
      if ("function" == typeof e || "string" != typeof e && "number" != typeof e) {
        var o = new i.AlgoliaSearchError(e && "function" != typeof e ? "ObjectID must be a string" : "Cannot delete an object without an objectID");
        return "function" == typeof (t = e) ? t(o) : this.as._promise.reject(o);
      }

      return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/" + encodeURIComponent(e),
        hostType: "write",
        callback: t
      });
    }, a.prototype.deleteObjects = function (e, t) {
      var o = require("isarray"),
          n = require("./map.js");

      if (!o(e)) throw new Error("Usage: index.deleteObjects(arrayOfObjectIDs[, callback])");
      var r = {
        requests: n(e, function (e) {
          return {
            action: "deleteObject",
            objectID: e,
            body: {
              objectID: e
            }
          };
        })
      };
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/batch",
        body: r,
        hostType: "write",
        callback: t
      });
    }, a.prototype.deleteByQuery = o(function (e, t, o) {
      var n = require("./clone.js"),
          i = require("./map.js"),
          s = this,
          a = s.as;

      1 === arguments.length || "function" == typeof t ? (o = t, t = {}) : t = n(t), t.attributesToRetrieve = "objectID", t.hitsPerPage = 1e3, t.distinct = !1, this.clearCache();
      var c = this.search(e, t).then(function (e) {
        if (0 === e.nbHits) return e;
        var t = i(e.hits, function (e) {
          return e.objectID;
        });
        return s.deleteObjects(t).then(u).then(d);
      });

      function u(e) {
        return s.waitTask(e.taskID);
      }

      function d() {
        return s.deleteByQuery(e, t);
      }

      if (!o) return c;
      c.then(function () {
        r(function () {
          o(null);
        }, a._setTimeout || setTimeout);
      }, function (e) {
        r(function () {
          o(e);
        }, a._setTimeout || setTimeout);
      });
    }, n("index.deleteByQuery()", "index.deleteBy()")), a.prototype.deleteBy = function (e, t) {
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/deleteByQuery",
        body: {
          params: this.as._getSearchParams(e, "")
        },
        hostType: "write",
        callback: t
      });
    }, a.prototype.browseAll = function (e, t) {
      "object" == _typeof(e) && (t = e, e = void 0);

      var o = require("./merge.js"),
          n = new (require("./IndexBrowser"))(),
          r = this.as,
          i = this,
          s = r._getSearchParams(o({}, t || {}, {
        query: e
      }), "");

      function a(e) {
        var t;
        n._stopped || (t = void 0 !== e ? {
          cursor: e
        } : {
          params: s
        }, r._jsonRequest({
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(i.indexName) + "/browse",
          hostType: "read",
          body: t,
          callback: c
        }));
      }

      function c(e, t) {
        n._stopped || (e ? n._error(e) : (n._result(t), void 0 !== t.cursor ? a(t.cursor) : n._end()));
      }

      return a(), n;
    }, a.prototype.ttAdapter = o(function (e) {
      var t = this;
      return function (o, n, r) {
        var i;
        i = "function" == typeof r ? r : n, t.search(o, e, function (e, t) {
          i(e || t.hits);
        });
      };
    }, "ttAdapter is not necessary anymore and will be removed in the next version,\nhave a look at autocomplete.js (https://github.com/algolia/autocomplete.js)"), a.prototype.waitTask = function (e, t) {
      var o = 100,
          n = 5e3,
          i = 0,
          s = this,
          a = s.as,
          c = function t() {
        return a._jsonRequest({
          method: "GET",
          hostType: "read",
          url: "/1/indexes/" + encodeURIComponent(s.indexName) + "/task/" + e
        }).then(function (e) {
          var r = o * ++i * i;
          return r > n && (r = n), "published" !== e.status ? a._promise.delay(r).then(t) : e;
        });
      }();

      if (!t) return c;
      c.then(function (e) {
        r(function () {
          t(null, e);
        }, a._setTimeout || setTimeout);
      }, function (e) {
        r(function () {
          t(e);
        }, a._setTimeout || setTimeout);
      });
    }, a.prototype.clearIndex = function (e) {
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/clear",
        hostType: "write",
        callback: e
      });
    }, a.prototype.getSettings = function (e, t) {
      1 === arguments.length && "function" == typeof e && (t = e, e = {}), e = e || {};
      var o = encodeURIComponent(this.indexName);
      return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + o + "/settings?getVersion=2" + (e.advanced ? "&advanced=" + e.advanced : ""),
        hostType: "read",
        callback: t
      });
    }, a.prototype.searchSynonyms = function (e, t) {
      return "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/search",
        body: e,
        hostType: "read",
        callback: t
      });
    }, a.prototype.exportSynonyms = function (e, t) {
      return c(this.searchSynonyms.bind(this), e, t);
    }, a.prototype.saveSynonym = function (e, t, o) {
      "function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {}), void 0 !== t.forwardToSlaves && s();
      var n = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
      return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e.objectID) + "?forwardToReplicas=" + n,
        body: e,
        hostType: "write",
        callback: o
      });
    }, a.prototype.getSynonym = function (e, t) {
      return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e),
        hostType: "read",
        callback: t
      });
    }, a.prototype.deleteSynonym = function (e, t, o) {
      "function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {}), void 0 !== t.forwardToSlaves && s();
      var n = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
      return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(e) + "?forwardToReplicas=" + n,
        hostType: "write",
        callback: o
      });
    }, a.prototype.clearSynonyms = function (e, t) {
      "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), void 0 !== e.forwardToSlaves && s();
      var o = e.forwardToSlaves || e.forwardToReplicas ? "true" : "false";
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/clear?forwardToReplicas=" + o,
        hostType: "write",
        callback: t
      });
    }, a.prototype.batchSynonyms = function (e, t, o) {
      "function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {}), void 0 !== t.forwardToSlaves && s();
      var n = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/batch?forwardToReplicas=" + n + "&replaceExistingSynonyms=" + (t.replaceExistingSynonyms ? "true" : "false"),
        hostType: "write",
        body: e,
        callback: o
      });
    }, a.prototype.searchRules = function (e, t) {
      return "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {}), this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/search",
        body: e,
        hostType: "read",
        callback: t
      });
    }, a.prototype.exportRules = function (e, t) {
      return c(this.searchRules.bind(this), e, t);
    }, a.prototype.saveRule = function (e, t, o) {
      if ("function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {}), !e.objectID) throw new i.AlgoliaSearchError("Missing or empty objectID field for rule");
      var n = !0 === t.forwardToReplicas ? "true" : "false";
      return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(e.objectID) + "?forwardToReplicas=" + n,
        body: e,
        hostType: "write",
        callback: o
      });
    }, a.prototype.getRule = function (e, t) {
      return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(e),
        hostType: "read",
        callback: t
      });
    }, a.prototype.deleteRule = function (e, t, o) {
      "function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {});
      var n = !0 === t.forwardToReplicas ? "true" : "false";
      return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(e) + "?forwardToReplicas=" + n,
        hostType: "write",
        callback: o
      });
    }, a.prototype.clearRules = function (e, t) {
      "function" == typeof e ? (t = e, e = {}) : void 0 === e && (e = {});
      var o = !0 === e.forwardToReplicas ? "true" : "false";
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/clear?forwardToReplicas=" + o,
        hostType: "write",
        callback: t
      });
    }, a.prototype.batchRules = function (e, t, o) {
      "function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {});
      var n = !0 === t.forwardToReplicas ? "true" : "false";
      return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/batch?forwardToReplicas=" + n + "&clearExistingRules=" + (!0 === t.clearExistingRules ? "true" : "false"),
        hostType: "write",
        body: e,
        callback: o
      });
    }, a.prototype.exists = function (e) {
      var t = this.getSettings().then(function () {
        return !0;
      }).catch(function (e) {
        if (e instanceof i.AlgoliaSearchError && 404 === e.statusCode) return !1;
        throw e;
      });
      if ("function" != typeof e) return t;
      t.then(function (t) {
        e(null, t);
      }).catch(function (t) {
        e(t);
      });
    }, a.prototype.findObject = function (e, t, o) {
      var n = void 0 === (t = void 0 === t ? {} : t).paginate || t.paginate,
          r = void 0 !== t.query ? t.query : "",
          s = this,
          a = 0,
          c = function c() {
        return t.page = a, s.search(r, t).then(function (t) {
          for (var o = t.hits, r = 0; r < o.length; r++) {
            var s = o[r];
            if (e(s)) return {
              object: s,
              position: r,
              page: a
            };
          }

          if (a += 1, !n || a >= t.nbPages) throw new i.ObjectNotFound("Object not found");
          return c();
        });
      },
          u = c(a);

      if (void 0 === o) return u;
      u.then(function (e) {
        o(null, e);
      }).catch(function (e) {
        o(e);
      });
    }, a.prototype.getObjectPosition = function (e, t) {
      for (var o = e.hits, n = 0; n < o.length; n++) {
        if (o[n].objectID === t) return n;
      }

      return -1;
    }, a.prototype.setSettings = function (e, t, o) {
      1 !== arguments.length && "function" != typeof t || (o = t, t = {}), void 0 !== t.forwardToSlaves && s();
      var n = t.forwardToSlaves || t.forwardToReplicas ? "true" : "false";
      return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/settings?forwardToReplicas=" + n,
        hostType: "write",
        body: e,
        callback: o
      });
    }, a.prototype.listUserKeys = o(function (e) {
      return this.listApiKeys(e);
    }, n("index.listUserKeys()", "client.listApiKeys()")), a.prototype.listApiKeys = o(function (e) {
      return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
        hostType: "read",
        callback: e
      });
    }, n("index.listApiKeys()", "client.listApiKeys()")), a.prototype.getUserKeyACL = o(function (e, t) {
      return this.getApiKey(e, t);
    }, n("index.getUserKeyACL()", "client.getApiKey()")), a.prototype.getApiKey = o(function (e, t) {
      return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + e,
        hostType: "read",
        callback: t
      });
    }, n("index.getApiKey()", "client.getApiKey()")), a.prototype.deleteUserKey = o(function (e, t) {
      return this.deleteApiKey(e, t);
    }, n("index.deleteUserKey()", "client.deleteApiKey()")), a.prototype.deleteApiKey = o(function (e, t) {
      return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + e,
        hostType: "write",
        callback: t
      });
    }, n("index.deleteApiKey()", "client.deleteApiKey()")), a.prototype.addUserKey = o(function (e, t, o) {
      return this.addApiKey(e, t, o);
    }, n("index.addUserKey()", "client.addApiKey()")), a.prototype.addApiKey = o(function (e, t, o) {
      if (!require("isarray")(e)) throw new Error("Usage: index.addApiKey(arrayOfAcls[, params, callback])");
      1 !== arguments.length && "function" != typeof t || (o = t, t = null);
      var n = {
        acl: e
      };
      return t && (n.validity = t.validity, n.maxQueriesPerIPPerHour = t.maxQueriesPerIPPerHour, n.maxHitsPerQuery = t.maxHitsPerQuery, n.description = t.description, t.queryParameters && (n.queryParameters = this.as._getSearchParams(t.queryParameters, "")), n.referers = t.referers), this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
        body: n,
        hostType: "write",
        callback: o
      });
    }, n("index.addApiKey()", "client.addApiKey()")), a.prototype.addUserKeyWithValidity = o(function (e, t, o) {
      return this.addApiKey(e, t, o);
    }, n("index.addUserKeyWithValidity()", "client.addApiKey()")), a.prototype.updateUserKey = o(function (e, t, o, n) {
      return this.updateApiKey(e, t, o, n);
    }, n("index.updateUserKey()", "client.updateApiKey()")), a.prototype.updateApiKey = o(function (e, t, o, n) {
      if (!require("isarray")(t)) throw new Error("Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])");
      2 !== arguments.length && "function" != typeof o || (n = o, o = null);
      var r = {
        acl: t
      };
      return o && (r.validity = o.validity, r.maxQueriesPerIPPerHour = o.maxQueriesPerIPPerHour, r.maxHitsPerQuery = o.maxHitsPerQuery, r.description = o.description, o.queryParameters && (r.queryParameters = this.as._getSearchParams(o.queryParameters, "")), r.referers = o.referers), this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + e,
        body: r,
        hostType: "write",
        callback: n
      });
    }, n("index.updateApiKey()", "client.updateApiKey()"));
  }, {
    "inherits": "oxwV",
    "./IndexCore.js": "FvxN",
    "./deprecate.js": "n5Ih",
    "./deprecatedMessage.js": "HeEx",
    "./exitPromise.js": "czFl",
    "./errors": "S5Jj",
    "isarray": "aqZJ",
    "./map.js": "Q24X",
    "./clone.js": "hMKC",
    "./merge.js": "kgD2",
    "./IndexBrowser": "Br6Z"
  }],
  "LVkZ": [function (require, module, exports) {
    var s = 1e3,
        e = 60 * s,
        r = 60 * e,
        a = 24 * r,
        n = 365.25 * a;

    function c(c) {
      if (!((c = String(c)).length > 100)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(c);

        if (t) {
          var i = parseFloat(t[1]);

          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return i * n;

            case "days":
            case "day":
            case "d":
              return i * a;

            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return i * r;

            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return i * e;

            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return i * s;

            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return i;

            default:
              return;
          }
        }
      }
    }

    function t(n) {
      return n >= a ? Math.round(n / a) + "d" : n >= r ? Math.round(n / r) + "h" : n >= e ? Math.round(n / e) + "m" : n >= s ? Math.round(n / s) + "s" : n + "ms";
    }

    function i(n) {
      return o(n, a, "day") || o(n, r, "hour") || o(n, e, "minute") || o(n, s, "second") || n + " ms";
    }

    function o(s, e, r) {
      if (!(s < e)) return s < 1.5 * e ? Math.floor(s / e) + " " + r : Math.ceil(s / e) + " " + r + "s";
    }

    module.exports = function (s, e) {
      e = e || {};

      var r = _typeof(s);

      if ("string" === r && s.length > 0) return c(s);
      if ("number" === r && !1 === isNaN(s)) return e.long ? i(s) : t(s);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(s));
    };
  }, {}],
  "btPN": [function (require, module, exports) {
    var e;

    function r(e) {
      var r,
          t = 0;

      for (r in e) {
        t = (t << 5) - t + e.charCodeAt(r), t |= 0;
      }

      return exports.colors[Math.abs(t) % exports.colors.length];
    }

    function t(t) {
      function s() {
        if (s.enabled) {
          var r = s,
              t = +new Date(),
              o = t - (e || t);
          r.diff = o, r.prev = e, r.curr = t, e = t;

          for (var n = new Array(arguments.length), p = 0; p < n.length; p++) {
            n[p] = arguments[p];
          }

          n[0] = exports.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
          var a = 0;
          n[0] = n[0].replace(/%([a-zA-Z%])/g, function (e, t) {
            if ("%%" === e) return e;
            a++;
            var s = exports.formatters[t];

            if ("function" == typeof s) {
              var o = n[a];
              e = s.call(r, o), n.splice(a, 1), a--;
            }

            return e;
          }), exports.formatArgs.call(r, n), (s.log || exports.log || console.log.bind(console)).apply(r, n);
        }
      }

      return s.namespace = t, s.enabled = exports.enabled(t), s.useColors = exports.useColors(), s.color = r(t), "function" == typeof exports.init && exports.init(s), s;
    }

    function s(e) {
      exports.save(e), exports.names = [], exports.skips = [];

      for (var r = ("string" == typeof e ? e : "").split(/[\s,]+/), t = r.length, s = 0; s < t; s++) {
        r[s] && ("-" === (e = r[s].replace(/\*/g, ".*?"))[0] ? exports.skips.push(new RegExp("^" + e.substr(1) + "$")) : exports.names.push(new RegExp("^" + e + "$")));
      }
    }

    function o() {
      exports.enable("");
    }

    function n(e) {
      var r, t;

      for (r = 0, t = exports.skips.length; r < t; r++) {
        if (exports.skips[r].test(e)) return !1;
      }

      for (r = 0, t = exports.names.length; r < t; r++) {
        if (exports.names[r].test(e)) return !0;
      }

      return !1;
    }

    function p(e) {
      return e instanceof Error ? e.stack || e.message : e;
    }

    exports = module.exports = t.debug = t.default = t, exports.coerce = p, exports.disable = o, exports.enable = s, exports.enabled = n, exports.humanize = require("ms"), exports.names = [], exports.skips = [], exports.formatters = {};
  }, {
    "ms": "LVkZ"
  }],
  "g5IB": [function (require, module, exports) {
    var t,
        e,
        n = module.exports = {};

    function r() {
      throw new Error("setTimeout has not been defined");
    }

    function o() {
      throw new Error("clearTimeout has not been defined");
    }

    function i(e) {
      if (t === setTimeout) return setTimeout(e, 0);
      if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);

      try {
        return t(e, 0);
      } catch (n) {
        try {
          return t.call(null, e, 0);
        } catch (n) {
          return t.call(this, e, 0);
        }
      }
    }

    function u(t) {
      if (e === clearTimeout) return clearTimeout(t);
      if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);

      try {
        return e(t);
      } catch (n) {
        try {
          return e.call(null, t);
        } catch (n) {
          return e.call(this, t);
        }
      }
    }

    !function () {
      try {
        t = "function" == typeof setTimeout ? setTimeout : r;
      } catch (n) {
        t = r;
      }

      try {
        e = "function" == typeof clearTimeout ? clearTimeout : o;
      } catch (n) {
        e = o;
      }
    }();
    var c,
        s = [],
        l = !1,
        a = -1;

    function f() {
      l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h());
    }

    function h() {
      if (!l) {
        var t = i(f);
        l = !0;

        for (var e = s.length; e;) {
          for (c = s, s = []; ++a < e;) {
            c && c[a].run();
          }

          a = -1, e = s.length;
        }

        c = null, l = !1, u(t);
      }
    }

    function m(t, e) {
      this.fun = t, this.array = e;
    }

    function p() {}

    n.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      s.push(new m(t, e)), 1 !== s.length || l || i(h);
    }, m.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function (t) {
      return [];
    }, n.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, n.cwd = function () {
      return "/";
    }, n.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, n.umask = function () {
      return 0;
    };
  }, {}],
  "jD9Y": [function (require, module, exports) {
    var process = require("process");

    var e = require("process");

    function o() {
      return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }

    function t(e) {
      var o = this.useColors;

      if (e[0] = (o ? "%c" : "") + this.namespace + (o ? " %c" : " ") + e[0] + (o ? "%c " : " ") + "+" + exports.humanize(this.diff), o) {
        var t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        var r = 0,
            n = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && (r++, "%c" === e && (n = r));
        }), e.splice(n, 0, t);
      }
    }

    function r() {
      return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }

    function n(e) {
      try {
        null == e ? exports.storage.removeItem("debug") : exports.storage.debug = e;
      } catch (o) {}
    }

    function s() {
      var o;

      try {
        o = exports.storage.debug;
      } catch (t) {}

      return !o && void 0 !== e && "env" in e && (o = void 0), o;
    }

    function c() {
      try {
        return window.localStorage;
      } catch (e) {}
    }

    exports = module.exports = require("./debug"), exports.log = r, exports.formatArgs = t, exports.save = n, exports.load = s, exports.useColors = o, exports.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : c(), exports.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], exports.formatters.j = function (e) {
      try {
        return JSON.stringify(e);
      } catch (o) {
        return "[UnexpectedJSONParseError]: " + o.message;
      }
    }, exports.enable(s());
  }, {
    "./debug": "btPN",
    "process": "g5IB"
  }],
  "cMaP": [function (require, module, exports) {
    var global = arguments[3];

    var t,
        e = arguments[3],
        r = require("debug")("algoliasearch:src/hostIndexState.js"),
        a = "algoliasearch-client-js",
        n = {
      state: {},
      set: function set(t, e) {
        return this.state[t] = e, this.state[t];
      },
      get: function get(t) {
        return this.state[t] || null;
      }
    },
        o = {
      set: function set(t, r) {
        n.set(t, r);

        try {
          var o = JSON.parse(e.localStorage[a]);
          return o[t] = r, e.localStorage[a] = JSON.stringify(o), o[t];
        } catch (c) {
          return l(t, c);
        }
      },
      get: function get(t) {
        try {
          return JSON.parse(e.localStorage[a])[t] || null;
        } catch (r) {
          return l(t, r);
        }
      }
    };

    function l(e, a) {
      return r("localStorage failed with", a), u(), (t = n).get(e);
    }

    function c(e, r) {
      return 1 === arguments.length ? t.get(e) : t.set(e, r);
    }

    function s() {
      try {
        return "localStorage" in e && null !== e.localStorage && (e.localStorage[a] || e.localStorage.setItem(a, JSON.stringify({})), !0);
      } catch (t) {
        return !1;
      }
    }

    function u() {
      try {
        e.localStorage.removeItem(a);
      } catch (t) {}
    }

    t = s() ? o : n, module.exports = {
      get: c,
      set: c,
      supportsLocalStorage: s
    };
  }, {
    "debug": "jD9Y"
  }],
  "JuYC": [function (require, module, exports) {
    module.exports = i;

    var e = require("./errors"),
        t = require("./exitPromise.js"),
        o = require("./IndexCore.js"),
        r = require("./store.js"),
        s = 500,
        a = 12e4;

    function i(t, o, r) {
      var s = require("debug")("algoliasearch"),
          a = require("./clone.js"),
          i = require("isarray"),
          u = require("./map.js"),
          h = "Usage: algoliasearch(applicationID, apiKey, opts)";

      if (!0 !== r._allowEmptyCredentials && !t) throw new e.AlgoliaSearchError("Please provide an application ID. " + h);
      if (!0 !== r._allowEmptyCredentials && !o) throw new e.AlgoliaSearchError("Please provide an API key. " + h);
      this.applicationID = t, this.apiKey = o, this.hosts = {
        read: [],
        write: []
      }, r = r || {}, this._timeouts = r.timeouts || {
        connect: 1e3,
        read: 2e3,
        write: 3e4
      }, r.timeout && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = r.timeout);
      var c = r.protocol || "https:";
      if (/:$/.test(c) || (c += ":"), "http:" !== c && "https:" !== c) throw new e.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + r.protocol + "`)");
      if (this._checkAppIdData(), r.hosts) i(r.hosts) ? (this.hosts.read = a(r.hosts), this.hosts.write = a(r.hosts)) : (this.hosts.read = a(r.hosts.read), this.hosts.write = a(r.hosts.write));else {
        var p = u(this._shuffleResult, function (e) {
          return t + "-" + e + ".algolianet.com";
        }),
            l = (!1 === r.dsn ? "" : "-dsn") + ".algolia.net";
        this.hosts.read = [this.applicationID + l].concat(p), this.hosts.write = [this.applicationID + ".algolia.net"].concat(p);
      }
      this.hosts.read = u(this.hosts.read, n(c)), this.hosts.write = u(this.hosts.write, n(c)), this.extraHeaders = {}, this.cache = r._cache || {}, this._ua = r._ua, this._useCache = !(void 0 !== r._useCache && !r._cache) || r._useCache, this._useRequestCache = this._useCache && r._useRequestCache, this._useFallback = void 0 === r.useFallback || r.useFallback, this._setTimeout = r._setTimeout, s("init done, %j", this);
    }

    function n(e) {
      return function (t) {
        return e + "//" + t.toLowerCase();
      };
    }

    function u(e) {
      if (void 0 === Array.prototype.toJSON) return JSON.stringify(e);
      var t = Array.prototype.toJSON;
      delete Array.prototype.toJSON;
      var o = JSON.stringify(e);
      return Array.prototype.toJSON = t, o;
    }

    function h(e) {
      for (var t, o, r = e.length; 0 !== r;) {
        o = Math.floor(Math.random() * r), t = e[r -= 1], e[r] = e[o], e[o] = t;
      }

      return e;
    }

    function c(e) {
      var t = {};

      for (var o in e) {
        var r;
        if (Object.prototype.hasOwnProperty.call(e, o)) r = "x-algolia-api-key" === o || "x-algolia-application-id" === o ? "**hidden for security purposes**" : e[o], t[o] = r;
      }

      return t;
    }

    i.prototype.initIndex = function (e) {
      return new o(this, e);
    }, i.prototype.setExtraHeader = function (e, t) {
      this.extraHeaders[e.toLowerCase()] = t;
    }, i.prototype.getExtraHeader = function (e) {
      return this.extraHeaders[e.toLowerCase()];
    }, i.prototype.unsetExtraHeader = function (e) {
      delete this.extraHeaders[e.toLowerCase()];
    }, i.prototype.addAlgoliaAgent = function (e) {
      var t = "; " + e;
      -1 === this._ua.indexOf(t) && (this._ua += t);
    }, i.prototype._jsonRequest = function (o) {
      this._checkAppIdData();

      var r,
          a,
          i,
          n = require("debug")("algoliasearch:" + o.url),
          h = o.additionalUA || "",
          p = o.cache,
          l = this,
          d = 0,
          y = !1,
          m = l._useFallback && l._request.fallback && o.fallback;

      this.apiKey.length > s && void 0 !== o.body && (void 0 !== o.body.params || void 0 !== o.body.requests) ? (o.body.apiKey = this.apiKey, i = this._computeRequestHeaders({
        additionalUA: h,
        withApiKey: !1,
        headers: o.headers
      })) : i = this._computeRequestHeaders({
        additionalUA: h,
        headers: o.headers
      }), void 0 !== o.body && (r = u(o.body)), n("request start");
      var f = [];

      function _(e, t, o) {
        return l._useCache && e && t && void 0 !== t[o];
      }

      function g(e, r) {
        if (_(l._useRequestCache, p, a) && e.catch(function () {
          delete p[a];
        }), "function" != typeof o.callback) return e.then(r);
        e.then(function (e) {
          t(function () {
            o.callback(null, r(e));
          }, l._setTimeout || setTimeout);
        }, function (e) {
          t(function () {
            o.callback(e);
          }, l._setTimeout || setTimeout);
        });
      }

      if (l._useCache && l._useRequestCache && (a = o.url), l._useCache && l._useRequestCache && r && (a += "_body_" + r), _(l._useRequestCache, p, a)) {
        n("serving request from cache");
        var v = p[a];
        return g("function" != typeof v.then ? l._promise.resolve({
          responseText: v
        }) : v, function (e) {
          return JSON.parse(e.responseText);
        });
      }

      var b = function t(s, g) {
        l._checkAppIdData();

        var v = new Date();

        if (l._useCache && !l._useRequestCache && (a = o.url), l._useCache && !l._useRequestCache && r && (a += "_body_" + g.body), _(!l._useRequestCache, p, a)) {
          n("serving response from cache");
          var b = p[a];
          return l._promise.resolve({
            body: JSON.parse(b),
            responseText: b
          });
        }

        if (d >= l.hosts[o.hostType].length) return !m || y ? (n("could not get any response"), l._promise.reject(new e.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + l.applicationID, {
          debugData: f
        }))) : (n("switching to fallback"), d = 0, g.method = o.fallback.method, g.url = o.fallback.url, g.jsonBody = o.fallback.body, g.jsonBody && (g.body = u(g.jsonBody)), i = l._computeRequestHeaders({
          additionalUA: h,
          headers: o.headers
        }), g.timeouts = l._getTimeoutsForRequest(o.hostType), l._setHostIndexByType(0, o.hostType), y = !0, t(l._request.fallback, g));

        var q = l._getHostByType(o.hostType),
            T = q + g.url,
            I = {
          body: g.body,
          jsonBody: g.jsonBody,
          method: g.method,
          headers: i,
          timeouts: g.timeouts,
          debug: n,
          forceAuthHeaders: g.forceAuthHeaders
        };

        return n("method: %s, url: %s, headers: %j, timeouts: %d", I.method, T, I.headers, I.timeouts), s === l._request.fallback && n("using fallback"), s.call(l, T, I).then(function (t) {
          var o = t && t.body && t.body.message && t.body.status || t.statusCode || t && t.body && 200;
          n("received response: statusCode: %s, computed statusCode: %d, headers: %j", t.statusCode, o, t.headers);
          var s = 2 === Math.floor(o / 100),
              u = new Date();
          if (f.push({
            currentHost: q,
            headers: c(i),
            content: r || null,
            contentLength: void 0 !== r ? r.length : null,
            method: g.method,
            timeouts: g.timeouts,
            url: g.url,
            startTime: v,
            endTime: u,
            duration: u - v,
            statusCode: o
          }), s) return l._useCache && !l._useRequestCache && p && (p[a] = t.responseText), {
            responseText: t.responseText,
            body: t.body
          };
          if (4 !== Math.floor(o / 100)) return d += 1, x();
          n("unrecoverable error");
          var h = new e.AlgoliaSearchError(t.body && t.body.message, {
            debugData: f,
            statusCode: o
          });
          return l._promise.reject(h);
        }, function (a) {
          n("error: %s, stack: %s", a.message, a.stack);
          var u = new Date();
          return f.push({
            currentHost: q,
            headers: c(i),
            content: r || null,
            contentLength: void 0 !== r ? r.length : null,
            method: g.method,
            timeouts: g.timeouts,
            url: g.url,
            startTime: v,
            endTime: u,
            duration: u - v
          }), a instanceof e.AlgoliaSearchError || (a = new e.Unknown(a && a.message, a)), d += 1, a instanceof e.Unknown || a instanceof e.UnparsableJSON || d >= l.hosts[o.hostType].length && (y || !m) ? (a.debugData = f, l._promise.reject(a)) : a instanceof e.RequestTimeout ? (n("retrying request with higher timeout"), l._incrementHostIndex(o.hostType), l._incrementTimeoutMultipler(), g.timeouts = l._getTimeoutsForRequest(o.hostType), t(s, g)) : x();
        });

        function x() {
          return n("retrying request"), l._incrementHostIndex(o.hostType), t(s, g);
        }
      }(l._request, {
        url: o.url,
        method: o.method,
        body: r,
        jsonBody: o.body,
        timeouts: l._getTimeoutsForRequest(o.hostType),
        forceAuthHeaders: o.forceAuthHeaders
      });

      return l._useCache && l._useRequestCache && p && (p[a] = b), g(b, function (e) {
        return e.body;
      });
    }, i.prototype._getSearchParams = function (e, t) {
      if (null == e) return t;

      for (var o in e) {
        null !== o && void 0 !== e[o] && e.hasOwnProperty(o) && (t += "" === t ? "" : "&", t += o + "=" + encodeURIComponent("[object Array]" === Object.prototype.toString.call(e[o]) ? u(e[o]) : e[o]));
      }

      return t;
    }, i.prototype._computeRequestHeaders = function (e) {
      var t = require("foreach"),
          o = {
        "x-algolia-agent": e.additionalUA ? this._ua + "; " + e.additionalUA : this._ua,
        "x-algolia-application-id": this.applicationID
      };

      return !1 !== e.withApiKey && (o["x-algolia-api-key"] = this.apiKey), this.userToken && (o["x-algolia-usertoken"] = this.userToken), this.securityTags && (o["x-algolia-tagfilters"] = this.securityTags), t(this.extraHeaders, function (e, t) {
        o[t] = e;
      }), e.headers && t(e.headers, function (e, t) {
        o[t] = e;
      }), o;
    }, i.prototype.search = function (e, t, o) {
      var r = require("isarray"),
          s = require("./map.js");

      if (!r(e)) throw new Error("Usage: client.search(arrayOfQueries[, callback])");
      "function" == typeof t ? (o = t, t = {}) : void 0 === t && (t = {});
      var a = this,
          i = {
        requests: s(e, function (e) {
          var t = "";
          return void 0 !== e.query && (t += "query=" + encodeURIComponent(e.query)), {
            indexName: e.indexName,
            params: a._getSearchParams(e.params, t)
          };
        })
      },
          n = s(i.requests, function (e, t) {
        return t + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(e.indexName) + "?" + e.params);
      }).join("&");
      return void 0 !== t.strategy && (i.strategy = t.strategy), this._jsonRequest({
        cache: this.cache,
        method: "POST",
        url: "/1/indexes/*/queries",
        body: i,
        hostType: "read",
        fallback: {
          method: "GET",
          url: "/1/indexes/*",
          body: {
            params: n
          }
        },
        callback: o
      });
    }, i.prototype.searchForFacetValues = function (e) {
      var t = require("isarray"),
          o = require("./map.js"),
          r = "Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])";

      if (!t(e)) throw new Error(r);
      var s = this;
      return s._promise.all(o(e, function (e) {
        if (!e || void 0 === e.indexName || void 0 === e.params.facetName || void 0 === e.params.facetQuery) throw new Error(r);

        var t = require("./clone.js"),
            o = require("./omit.js"),
            a = e.indexName,
            i = e.params,
            n = i.facetName,
            u = o(t(i), function (e) {
          return "facetName" === e;
        }),
            h = s._getSearchParams(u, "");

        return s._jsonRequest({
          cache: s.cache,
          method: "POST",
          url: "/1/indexes/" + encodeURIComponent(a) + "/facets/" + encodeURIComponent(n) + "/query",
          hostType: "read",
          body: {
            params: h
          }
        });
      }));
    }, i.prototype.setSecurityTags = function (e) {
      if ("[object Array]" === Object.prototype.toString.call(e)) {
        for (var t = [], o = 0; o < e.length; ++o) {
          if ("[object Array]" === Object.prototype.toString.call(e[o])) {
            for (var r = [], s = 0; s < e[o].length; ++s) {
              r.push(e[o][s]);
            }

            t.push("(" + r.join(",") + ")");
          } else t.push(e[o]);
        }

        e = t.join(",");
      }

      this.securityTags = e;
    }, i.prototype.setUserToken = function (e) {
      this.userToken = e;
    }, i.prototype.clearCache = function () {
      this.cache = {};
    }, i.prototype.setRequestTimeout = function (e) {
      e && (this._timeouts.connect = this._timeouts.read = this._timeouts.write = e);
    }, i.prototype.setTimeouts = function (e) {
      this._timeouts = e;
    }, i.prototype.getTimeouts = function () {
      return this._timeouts;
    }, i.prototype._getAppIdData = function () {
      var e = r.get(this.applicationID);
      return null !== e && this._cacheAppIdData(e), e;
    }, i.prototype._setAppIdData = function (e) {
      return e.lastChange = new Date().getTime(), this._cacheAppIdData(e), r.set(this.applicationID, e);
    }, i.prototype._checkAppIdData = function () {
      var e = this._getAppIdData(),
          t = new Date().getTime();

      return null === e || t - e.lastChange > a ? this._resetInitialAppIdData(e) : e;
    }, i.prototype._resetInitialAppIdData = function (e) {
      var t = e || {};
      return t.hostIndexes = {
        read: 0,
        write: 0
      }, t.timeoutMultiplier = 1, t.shuffleResult = t.shuffleResult || h([1, 2, 3]), this._setAppIdData(t);
    }, i.prototype._cacheAppIdData = function (e) {
      this._hostIndexes = e.hostIndexes, this._timeoutMultiplier = e.timeoutMultiplier, this._shuffleResult = e.shuffleResult;
    }, i.prototype._partialAppIdDataUpdate = function (e) {
      var t = require("foreach"),
          o = this._getAppIdData();

      return t(e, function (e, t) {
        o[t] = e;
      }), this._setAppIdData(o);
    }, i.prototype._getHostByType = function (e) {
      return this.hosts[e][this._getHostIndexByType(e)];
    }, i.prototype._getTimeoutMultiplier = function () {
      return this._timeoutMultiplier;
    }, i.prototype._getHostIndexByType = function (e) {
      return this._hostIndexes[e];
    }, i.prototype._setHostIndexByType = function (e, t) {
      var o = require("./clone")(this._hostIndexes);

      return o[t] = e, this._partialAppIdDataUpdate({
        hostIndexes: o
      }), e;
    }, i.prototype._incrementHostIndex = function (e) {
      return this._setHostIndexByType((this._getHostIndexByType(e) + 1) % this.hosts[e].length, e);
    }, i.prototype._incrementTimeoutMultipler = function () {
      var e = Math.max(this._timeoutMultiplier + 1, 4);
      return this._partialAppIdDataUpdate({
        timeoutMultiplier: e
      });
    }, i.prototype._getTimeoutsForRequest = function (e) {
      return {
        connect: this._timeouts.connect * this._timeoutMultiplier,
        complete: this._timeouts[e] * this._timeoutMultiplier
      };
    };
  }, {
    "./errors": "S5Jj",
    "./exitPromise.js": "czFl",
    "./IndexCore.js": "FvxN",
    "./store.js": "cMaP",
    "debug": "jD9Y",
    "./clone.js": "hMKC",
    "isarray": "aqZJ",
    "./map.js": "Q24X",
    "foreach": "ESoW",
    "./omit.js": "Ybre",
    "./clone": "hMKC"
  }],
  "yNSo": [function (require, module, exports) {
    module.exports = t;

    var e = require("../index.js");

    function t(t, s, o) {
      var a = {};
      return (o = o || {}).hosts = o.hosts || ["analytics.algolia.com", "analytics.algolia.com", "analytics.algolia.com", "analytics.algolia.com"], o.protocol = o.protocol || "https:", a.as = e(t, s, o), a.getABTests = function (e, t) {
        var s = s || {},
            o = s.offset || 0,
            a = s.limit || 10;
        return this.as._jsonRequest({
          method: "GET",
          url: "/2/abtests?offset=" + encodeURIComponent(o) + "&limit=" + encodeURIComponent(a),
          hostType: "read",
          forceAuthHeaders: !0,
          callback: t
        });
      }, a.getABTest = function (e, t) {
        return this.as._jsonRequest({
          method: "GET",
          url: "/2/abtests/" + encodeURIComponent(e),
          hostType: "read",
          forceAuthHeaders: !0,
          callback: t
        });
      }, a.addABTest = function (e, t) {
        return this.as._jsonRequest({
          method: "POST",
          url: "/2/abtests",
          body: e,
          hostType: "read",
          forceAuthHeaders: !0,
          callback: t
        });
      }, a.stopABTest = function (e, t) {
        return this.as._jsonRequest({
          method: "POST",
          url: "/2/abtests/" + encodeURIComponent(e) + "/stop",
          hostType: "read",
          forceAuthHeaders: !0,
          callback: t
        });
      }, a.deleteABTest = function (e, t) {
        return this.as._jsonRequest({
          method: "DELETE",
          url: "/2/abtests/" + encodeURIComponent(e),
          hostType: "write",
          forceAuthHeaders: !0,
          callback: t
        });
      }, a.waitTask = function (e, t, s) {
        return this.as.initIndex(e).waitTask(t, s);
      }, a;
    }
  }, {
    "../index.js": "kpCD"
  }],
  "eNnX": [function (require, module, exports) {
    module.exports = n;

    var e = require("./Index.js"),
        t = require("./deprecate.js"),
        r = require("./deprecatedMessage.js"),
        o = require("./AlgoliaSearchCore.js"),
        s = require("inherits"),
        i = require("./errors");

    function n() {
      o.apply(this, arguments);
    }

    function a() {
      throw new i.AlgoliaSearchError("Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com");
    }

    s(n, o), n.prototype.deleteIndex = function (e, t) {
      return this._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(e),
        hostType: "write",
        callback: t
      });
    }, n.prototype.moveIndex = function (e, t, r) {
      var o = {
        operation: "move",
        destination: t
      };
      return this._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(e) + "/operation",
        body: o,
        hostType: "write",
        callback: r
      });
    }, n.prototype.copyIndex = function (e, t, r, o) {
      var s = {
        operation: "copy",
        destination: t
      },
          i = o;
      if ("function" == typeof r) i = r;else if (Array.isArray(r) && r.length > 0) s.scope = r;else if (void 0 !== r) throw new Error("the scope given to `copyIndex` was not an array with settings, synonyms or rules");
      return this._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(e) + "/operation",
        body: s,
        hostType: "write",
        callback: i
      });
    }, n.prototype.getLogs = function (e, t, r) {
      var o = require("./clone.js"),
          s = {};

      return "object" == _typeof(e) ? (s = o(e), r = t) : 0 === arguments.length || "function" == typeof e ? r = e : 1 === arguments.length || "function" == typeof t ? (r = t, s.offset = e) : (s.offset = e, s.length = t), void 0 === s.offset && (s.offset = 0), void 0 === s.length && (s.length = 10), this._jsonRequest({
        method: "GET",
        url: "/1/logs?" + this._getSearchParams(s, ""),
        hostType: "read",
        callback: r
      });
    }, n.prototype.listIndexes = function (e, t) {
      var r = "";
      return void 0 === e || "function" == typeof e ? t = e : r = "?page=" + e, this._jsonRequest({
        method: "GET",
        url: "/1/indexes" + r,
        hostType: "read",
        callback: t
      });
    }, n.prototype.initIndex = function (t) {
      return new e(this, t);
    }, n.prototype.initAnalytics = function (e) {
      return require("./createAnalyticsClient.js")(this.applicationID, this.apiKey, e);
    }, n.prototype.listUserKeys = t(function (e) {
      return this.listApiKeys(e);
    }, r("client.listUserKeys()", "client.listApiKeys()")), n.prototype.listApiKeys = function (e) {
      return this._jsonRequest({
        method: "GET",
        url: "/1/keys",
        hostType: "read",
        callback: e
      });
    }, n.prototype.getUserKeyACL = t(function (e, t) {
      return this.getApiKey(e, t);
    }, r("client.getUserKeyACL()", "client.getApiKey()")), n.prototype.getApiKey = function (e, t) {
      return this._jsonRequest({
        method: "GET",
        url: "/1/keys/" + e,
        hostType: "read",
        callback: t
      });
    }, n.prototype.deleteUserKey = t(function (e, t) {
      return this.deleteApiKey(e, t);
    }, r("client.deleteUserKey()", "client.deleteApiKey()")), n.prototype.deleteApiKey = function (e, t) {
      return this._jsonRequest({
        method: "DELETE",
        url: "/1/keys/" + e,
        hostType: "write",
        callback: t
      });
    }, n.prototype.restoreApiKey = function (e, t) {
      return this._jsonRequest({
        method: "POST",
        url: "/1/keys/" + e + "/restore",
        hostType: "write",
        callback: t
      });
    }, n.prototype.addUserKey = t(function (e, t, r) {
      return this.addApiKey(e, t, r);
    }, r("client.addUserKey()", "client.addApiKey()")), n.prototype.addApiKey = function (e, t, r) {
      if (!require("isarray")(e)) throw new Error("Usage: client.addApiKey(arrayOfAcls[, params, callback])");
      1 !== arguments.length && "function" != typeof t || (r = t, t = null);
      var o = {
        acl: e
      };
      return t && (o.validity = t.validity, o.maxQueriesPerIPPerHour = t.maxQueriesPerIPPerHour, o.maxHitsPerQuery = t.maxHitsPerQuery, o.indexes = t.indexes, o.description = t.description, t.queryParameters && (o.queryParameters = this._getSearchParams(t.queryParameters, "")), o.referers = t.referers), this._jsonRequest({
        method: "POST",
        url: "/1/keys",
        body: o,
        hostType: "write",
        callback: r
      });
    }, n.prototype.addUserKeyWithValidity = t(function (e, t, r) {
      return this.addApiKey(e, t, r);
    }, r("client.addUserKeyWithValidity()", "client.addApiKey()")), n.prototype.updateUserKey = t(function (e, t, r, o) {
      return this.updateApiKey(e, t, r, o);
    }, r("client.updateUserKey()", "client.updateApiKey()")), n.prototype.updateApiKey = function (e, t, r, o) {
      if (!require("isarray")(t)) throw new Error("Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])");
      2 !== arguments.length && "function" != typeof r || (o = r, r = null);
      var s = {
        acl: t
      };
      return r && (s.validity = r.validity, s.maxQueriesPerIPPerHour = r.maxQueriesPerIPPerHour, s.maxHitsPerQuery = r.maxHitsPerQuery, s.indexes = r.indexes, s.description = r.description, r.queryParameters && (s.queryParameters = this._getSearchParams(r.queryParameters, "")), s.referers = r.referers), this._jsonRequest({
        method: "PUT",
        url: "/1/keys/" + e,
        body: s,
        hostType: "write",
        callback: o
      });
    }, n.prototype.startQueriesBatch = t(function () {
      this._batch = [];
    }, r("client.startQueriesBatch()", "client.search()")), n.prototype.addQueryInBatch = t(function (e, t, r) {
      this._batch.push({
        indexName: e,
        query: t,
        params: r
      });
    }, r("client.addQueryInBatch()", "client.search()")), n.prototype.sendQueriesBatch = t(function (e) {
      return this.search(this._batch, e);
    }, r("client.sendQueriesBatch()", "client.search()")), n.prototype.batch = function (e, t) {
      if (!require("isarray")(e)) throw new Error("Usage: client.batch(operations[, callback])");
      return this._jsonRequest({
        method: "POST",
        url: "/1/indexes/*/batch",
        body: {
          requests: e
        },
        hostType: "write",
        callback: t
      });
    }, n.prototype.assignUserID = function (e, t) {
      if (!e.userID || !e.cluster) throw new i.AlgoliaSearchError("You have to provide both a userID and cluster", e);
      return this._jsonRequest({
        method: "POST",
        url: "/1/clusters/mapping",
        hostType: "write",
        body: {
          cluster: e.cluster
        },
        callback: t,
        headers: {
          "x-algolia-user-id": e.userID
        }
      });
    }, n.prototype.assignUserIDs = function (e, t) {
      if (!e.userIDs || !e.cluster) throw new i.AlgoliaSearchError("You have to provide both an array of userIDs and cluster", e);
      return this._jsonRequest({
        method: "POST",
        url: "/1/clusters/mapping/batch",
        hostType: "write",
        body: {
          cluster: e.cluster,
          users: e.userIDs
        },
        callback: t
      });
    }, n.prototype.getTopUserID = function (e) {
      return this._jsonRequest({
        method: "GET",
        url: "/1/clusters/mapping/top",
        hostType: "read",
        callback: e
      });
    }, n.prototype.getUserID = function (e, t) {
      if (!e.userID) throw new i.AlgoliaSearchError("You have to provide a userID", {
        debugData: e
      });
      return this._jsonRequest({
        method: "GET",
        url: "/1/clusters/mapping/" + e.userID,
        hostType: "read",
        callback: t
      });
    }, n.prototype.listClusters = function (e) {
      return this._jsonRequest({
        method: "GET",
        url: "/1/clusters",
        hostType: "read",
        callback: e
      });
    }, n.prototype.listUserIDs = function (e, t) {
      return this._jsonRequest({
        method: "GET",
        url: "/1/clusters/mapping",
        body: e,
        hostType: "read",
        callback: t
      });
    }, n.prototype.removeUserID = function (e, t) {
      if (!e.userID) throw new i.AlgoliaSearchError("You have to provide a userID", {
        debugData: e
      });
      return this._jsonRequest({
        method: "DELETE",
        url: "/1/clusters/mapping",
        hostType: "write",
        callback: t,
        headers: {
          "x-algolia-user-id": e.userID
        }
      });
    }, n.prototype.searchUserIDs = function (e, t) {
      return this._jsonRequest({
        method: "POST",
        url: "/1/clusters/mapping/search",
        body: e,
        hostType: "read",
        callback: t
      });
    }, n.prototype.setPersonalizationStrategy = function (e, t) {
      return this._jsonRequest({
        method: "POST",
        url: "/1/recommendation/personalization/strategy",
        body: e,
        hostType: "write",
        callback: t
      });
    }, n.prototype.getPersonalizationStrategy = function (e) {
      return this._jsonRequest({
        method: "GET",
        url: "/1/recommendation/personalization/strategy",
        hostType: "read",
        callback: e
      });
    }, n.prototype.destroy = a, n.prototype.enableRateLimitForward = a, n.prototype.disableRateLimitForward = a, n.prototype.useSecuredAPIKey = a, n.prototype.disableSecuredAPIKey = a, n.prototype.generateSecuredApiKey = a, n.prototype.getSecuredApiKeyRemainingValidity = a;
  }, {
    "./Index.js": "YsJN",
    "./deprecate.js": "n5Ih",
    "./deprecatedMessage.js": "HeEx",
    "./AlgoliaSearchCore.js": "JuYC",
    "inherits": "oxwV",
    "./errors": "S5Jj",
    "./clone.js": "hMKC",
    "./createAnalyticsClient.js": "yNSo",
    "isarray": "aqZJ"
  }],
  "J3Xk": [function (require, module, exports) {
    var global = arguments[3];
    var e,
        d = arguments[3];
    e = "undefined" != typeof window ? window : void 0 !== d ? d : "undefined" != typeof self ? self : {}, module.exports = e;
  }, {}],
  "GTq6": [function (require, module, exports) {
    var define;
    var global = arguments[3];

    var process = require("process");

    var t,
        e = arguments[3],
        n = require("process");

    !function (e, n) {
      "object" == _typeof(exports) && "undefined" != typeof module ? module.exports = n() : "function" == typeof t && t.amd ? t(n) : e.ES6Promise = n();
    }(this, function () {
      "use strict";

      function t(t) {
        return "function" == typeof t;
      }

      var r = Array.isArray ? Array.isArray : function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      },
          o = 0,
          i = void 0,
          s = void 0,
          u = function u(t, e) {
        p[o] = t, p[o + 1] = e, 2 === (o += 2) && (s ? s(_) : w());
      };

      var c = "undefined" != typeof window ? window : void 0,
          a = c || {},
          f = a.MutationObserver || a.WebKitMutationObserver,
          l = "undefined" == typeof self && void 0 !== n && "[object process]" === {}.toString.call(n),
          h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

      function v() {
        var t = setTimeout;
        return function () {
          return t(_, 1);
        };
      }

      var p = new Array(1e3);

      function _() {
        for (var t = 0; t < o; t += 2) {
          (0, p[t])(p[t + 1]), p[t] = void 0, p[t + 1] = void 0;
        }

        o = 0;
      }

      var d,
          y,
          m,
          b,
          w = void 0;

      function g(t, e) {
        var n = this,
            r = new this.constructor(S);
        void 0 === r[j] && K(r);
        var o = n._state;

        if (o) {
          var i = arguments[o - 1];
          u(function () {
            return k(o, r, i, n._result);
          });
        } else F(n, r, t, e);

        return r;
      }

      function A(t) {
        if (t && "object" == _typeof(t) && t.constructor === this) return t;
        var e = new this(S);
        return x(e, t), e;
      }

      l ? w = function w() {
        return n.nextTick(_);
      } : f ? (y = 0, m = new f(_), b = document.createTextNode(""), m.observe(b, {
        characterData: !0
      }), w = function w() {
        b.data = y = ++y % 2;
      }) : h ? ((d = new MessageChannel()).port1.onmessage = _, w = function w() {
        return d.port2.postMessage(0);
      }) : w = void 0 === c && "function" == typeof require ? function () {
        try {
          var t = Function("return this")().require("vertx");

          return void 0 !== (i = t.runOnLoop || t.runOnContext) ? function () {
            i(_);
          } : v();
        } catch (e) {
          return v();
        }
      }() : v();
      var j = Math.random().toString(36).substring(2);

      function S() {}

      var E = void 0,
          T = 1,
          M = 2;

      function P(e, n, r) {
        n.constructor === e.constructor && r === g && n.constructor.resolve === A ? function (t, e) {
          e._state === T ? O(t, e._result) : e._state === M ? q(t, e._result) : F(e, void 0, function (e) {
            return x(t, e);
          }, function (e) {
            return q(t, e);
          });
        }(e, n) : void 0 === r ? O(e, n) : t(r) ? function (t, e, n) {
          u(function (t) {
            var r = !1,
                o = function (t, e, n, r) {
              try {
                t.call(e, n, r);
              } catch (o) {
                return o;
              }
            }(n, e, function (n) {
              r || (r = !0, e !== n ? x(t, n) : O(t, n));
            }, function (e) {
              r || (r = !0, q(t, e));
            }, t._label);

            !r && o && (r = !0, q(t, o));
          }, t);
        }(e, n, r) : O(e, n);
      }

      function x(t, e) {
        if (t === e) q(t, new TypeError("You cannot resolve a promise with itself"));else if (o = _typeof(r = e), null === r || "object" !== o && "function" !== o) O(t, e);else {
          var n = void 0;

          try {
            n = e.then;
          } catch (i) {
            return void q(t, i);
          }

          P(t, e, n);
        }
        var r, o;
      }

      function C(t) {
        t._onerror && t._onerror(t._result), Y(t);
      }

      function O(t, e) {
        t._state === E && (t._result = e, t._state = T, 0 !== t._subscribers.length && u(Y, t));
      }

      function q(t, e) {
        t._state === E && (t._state = M, t._result = e, u(C, t));
      }

      function F(t, e, n, r) {
        var o = t._subscribers,
            i = o.length;
        t._onerror = null, o[i] = e, o[i + T] = n, o[i + M] = r, 0 === i && t._state && u(Y, t);
      }

      function Y(t) {
        var e = t._subscribers,
            n = t._state;

        if (0 !== e.length) {
          for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) {
            r = e[s], o = e[s + n], r ? k(n, r, o, i) : o(i);
          }

          t._subscribers.length = 0;
        }
      }

      function k(e, n, r, o) {
        var i = t(r),
            s = void 0,
            u = void 0,
            c = !0;

        if (i) {
          try {
            s = r(o);
          } catch (a) {
            c = !1, u = a;
          }

          if (n === s) return void q(n, new TypeError("A promises callback cannot return that same promise."));
        } else s = o;

        n._state !== E || (i && c ? x(n, s) : !1 === c ? q(n, u) : e === T ? O(n, s) : e === M && q(n, s));
      }

      var D = 0;

      function K(t) {
        t[j] = D++, t._state = void 0, t._result = void 0, t._subscribers = [];
      }

      var L = function () {
        function t(t, e) {
          this._instanceConstructor = t, this.promise = new t(S), this.promise[j] || K(this.promise), r(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && O(this.promise, this._result))) : q(this.promise, new Error("Array Methods must be provided an Array"));
        }

        return t.prototype._enumerate = function (t) {
          for (var e = 0; this._state === E && e < t.length; e++) {
            this._eachEntry(t[e], e);
          }
        }, t.prototype._eachEntry = function (t, e) {
          var n = this._instanceConstructor,
              r = n.resolve;

          if (r === A) {
            var o = void 0,
                i = void 0,
                s = !1;

            try {
              o = t.then;
            } catch (c) {
              s = !0, i = c;
            }

            if (o === g && t._state !== E) this._settledAt(t._state, e, t._result);else if ("function" != typeof o) this._remaining--, this._result[e] = t;else if (n === N) {
              var u = new n(S);
              s ? q(u, i) : P(u, t, o), this._willSettleAt(u, e);
            } else this._willSettleAt(new n(function (e) {
              return e(t);
            }), e);
          } else this._willSettleAt(r(t), e);
        }, t.prototype._settledAt = function (t, e, n) {
          var r = this.promise;
          r._state === E && (this._remaining--, t === M ? q(r, n) : this._result[e] = n), 0 === this._remaining && O(r, this._result);
        }, t.prototype._willSettleAt = function (t, e) {
          var n = this;
          F(t, void 0, function (t) {
            return n._settledAt(T, e, t);
          }, function (t) {
            return n._settledAt(M, e, t);
          });
        }, t;
      }();

      var N = function () {
        function e(t) {
          this[j] = D++, this._result = this._state = void 0, this._subscribers = [], S !== t && ("function" != typeof t && function () {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
          }(), this instanceof e ? function (t, e) {
            try {
              e(function (e) {
                x(t, e);
              }, function (e) {
                q(t, e);
              });
            } catch (n) {
              q(t, n);
            }
          }(this, t) : function () {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
          }());
        }

        return e.prototype.catch = function (t) {
          return this.then(null, t);
        }, e.prototype.finally = function (e) {
          var n = this.constructor;
          return t(e) ? this.then(function (t) {
            return n.resolve(e()).then(function () {
              return t;
            });
          }, function (t) {
            return n.resolve(e()).then(function () {
              throw t;
            });
          }) : this.then(e, e);
        }, e;
      }();

      return N.prototype.then = g, N.all = function (t) {
        return new L(this, t).promise;
      }, N.race = function (t) {
        var e = this;
        return r(t) ? new e(function (n, r) {
          for (var o = t.length, i = 0; i < o; i++) {
            e.resolve(t[i]).then(n, r);
          }
        }) : new e(function (t, e) {
          return e(new TypeError("You must pass an array to race."));
        });
      }, N.resolve = A, N.reject = function (t) {
        var e = new this(S);
        return q(e, t), e;
      }, N._setScheduler = function (t) {
        s = t;
      }, N._setAsap = function (t) {
        u = t;
      }, N._asap = u, N.polyfill = function () {
        var t = void 0;
        if (void 0 !== e) t = e;else if ("undefined" != typeof self) t = self;else try {
          t = Function("return this")();
        } catch (o) {
          throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var n = t.Promise;

        if (n) {
          var r = null;

          try {
            r = Object.prototype.toString.call(n.resolve());
          } catch (o) {}

          if ("[object Promise]" === r && !n.cast) return;
        }

        t.Promise = N;
      }, N.Promise = N, N;
    });
  }, {
    "process": "g5IB"
  }],
  "XK8a": [function (require, module, exports) {
    "use strict";

    var n = function n(_n) {
      switch (_typeof(_n)) {
        case "string":
          return _n;

        case "boolean":
          return _n ? "true" : "false";

        case "number":
          return isFinite(_n) ? _n : "";

        default:
          return "";
      }
    };

    module.exports = function (o, u, c, a) {
      return u = u || "&", c = c || "=", null === o && (o = void 0), "object" == _typeof(o) ? r(t(o), function (t) {
        var a = encodeURIComponent(n(t)) + c;
        return e(o[t]) ? r(o[t], function (e) {
          return a + encodeURIComponent(n(e));
        }).join(u) : a + encodeURIComponent(n(o[t]));
      }).join(u) : a ? encodeURIComponent(n(a)) + c + encodeURIComponent(n(o)) : "";
    };

    var e = Array.isArray || function (n) {
      return "[object Array]" === Object.prototype.toString.call(n);
    };

    function r(n, e) {
      if (n.map) return n.map(e);

      for (var r = [], t = 0; t < n.length; t++) {
        r.push(e(n[t], t));
      }

      return r;
    }

    var t = Object.keys || function (n) {
      var e = [];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && e.push(r);
      }

      return e;
    };
  }, {}],
  "drRF": [function (require, module, exports) {
    "use strict";

    module.exports = r;

    var e = require("querystring-es3/encode");

    function r(r, t) {
      return /\?/.test(r) ? r += "&" : r += "?", r + e(t);
    }
  }, {
    "querystring-es3/encode": "XK8a"
  }],
  "RRro": [function (require, module, exports) {
    "use strict";

    module.exports = o;

    var e = require("../errors"),
        t = 0;

    function o(o, n, r) {
      if ("GET" === n.method) {
        n.debug("JSONP: start");
        var d = !1,
            a = !1;
        t += 1;
        var i = document.getElementsByTagName("head")[0],
            l = document.createElement("script"),
            c = "algoliaJSONP_" + t,
            u = !1;
        window[c] = function (e) {
          !function () {
            try {
              delete window[c], delete window[c + "_loaded"];
            } catch (e) {
              window[c] = window[c + "_loaded"] = void 0;
            }
          }(), a ? n.debug("JSONP: Late answer, ignoring") : (d = !0, S(), r(null, {
            body: e,
            responseText: JSON.stringify(e)
          }));
        }, o += "&callback=" + c, n.jsonBody && n.jsonBody.params && (o += "&" + n.jsonBody.params);
        var s = setTimeout(function () {
          n.debug("JSONP: Script timeout"), a = !0, S(), r(new e.RequestTimeout());
        }, n.timeouts.complete);
        l.onreadystatechange = function () {
          "loaded" !== this.readyState && "complete" !== this.readyState || m();
        }, l.onload = m, l.onerror = function () {
          if (n.debug("JSONP: Script error"), u || a) return;
          S(), r(new e.JSONPScriptError());
        }, l.async = !0, l.defer = !0, l.src = o, i.appendChild(l);
      } else r(new Error("Method " + n.method + " " + o + " is not supported by JSONP."));

      function m() {
        n.debug("JSONP: success"), u || a || (u = !0, d || (n.debug("JSONP: Fail. Script loaded but did not call the callback"), S(), r(new e.JSONPScriptFail())));
      }

      function S() {
        clearTimeout(s), l.onload = null, l.onreadystatechange = null, l.onerror = null, i.removeChild(l);
      }
    }
  }, {
    "../errors": "S5Jj"
  }],
  "ObZ4": [function (require, module, exports) {
    "use strict";

    function r(r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }

    module.exports = function (t, n, o, a) {
      n = n || "&", o = o || "=";
      var s = {};
      if ("string" != typeof t || 0 === t.length) return s;
      var p = /\+/g;
      t = t.split(n);
      var u = 1e3;
      a && "number" == typeof a.maxKeys && (u = a.maxKeys);
      var c = t.length;
      u > 0 && c > u && (c = u);

      for (var i = 0; i < c; ++i) {
        var y,
            l,
            f,
            v,
            b = t[i].replace(p, "%20"),
            d = b.indexOf(o);
        d >= 0 ? (y = b.substr(0, d), l = b.substr(d + 1)) : (y = b, l = ""), f = decodeURIComponent(y), v = decodeURIComponent(l), r(s, f) ? e(s[f]) ? s[f].push(v) : s[f] = [s[f], v] : s[f] = v;
      }

      return s;
    };

    var e = Array.isArray || function (r) {
      return "[object Array]" === Object.prototype.toString.call(r);
    };
  }, {}],
  "SF0R": [function (require, module, exports) {
    "use strict";

    exports.decode = exports.parse = require("./decode"), exports.encode = exports.stringify = require("./encode");
  }, {
    "./decode": "ObZ4",
    "./encode": "XK8a"
  }],
  "ofOT": [function (require, module, exports) {
    module.exports = t;

    var e = require("querystring-es3"),
        r = require("./buildSearchMethod.js");

    function t(t) {
      return function (a, s, o) {
        var l = require("./clone.js");

        (o = o && l(o) || {}).hosts = o.hosts || ["places-dsn.algolia.net", "places-1.algolianet.com", "places-2.algolianet.com", "places-3.algolianet.com"], 0 !== arguments.length && "object" != _typeof(a) && void 0 !== a || (a = "", s = "", o._allowEmptyCredentials = !0);
        var n = t(a, s, o).initIndex("places");
        return n.search = r("query", "/1/places/query"), n.reverse = function (r, t) {
          var a = e.encode(r);
          return this.as._jsonRequest({
            method: "GET",
            url: "/1/places/reverse?" + a,
            hostType: "read",
            callback: t
          });
        }, n.getObject = function (e, r) {
          return this.as._jsonRequest({
            method: "GET",
            url: "/1/places/" + encodeURIComponent(e),
            hostType: "read",
            callback: r
          });
        }, n;
      };
    }
  }, {
    "querystring-es3": "SF0R",
    "./buildSearchMethod.js": "CAzH",
    "./clone.js": "hMKC"
  }],
  "vfvM": [function (require, module, exports) {
    "use strict";

    module.exports = "3.35.1";
  }, {}],
  "mkZf": [function (require, module, exports) {
    "use strict";

    var e = require("global"),
        t = e.Promise || require("es6-promise").Promise;

    module.exports = function (r, n) {
      var o = require("inherits"),
          s = require("../errors"),
          a = require("./inline-headers"),
          i = require("./jsonp-request"),
          u = require("../places.js");

      function c(e, t, r) {
        return (r = require("../clone.js")(r || {}))._ua = r._ua || c.ua, new p(e, t, r);
      }

      n = n || "", c.version = require("../version.js"), c.ua = "Algolia for JavaScript (" + c.version + "); " + n, c.initPlaces = u(c), e.__algolia = {
        debug: require("debug"),
        algoliasearch: c
      };
      var l = {
        hasXMLHttpRequest: "XMLHttpRequest" in e,
        hasXDomainRequest: "XDomainRequest" in e
      };

      function p() {
        r.apply(this, arguments);
      }

      return l.hasXMLHttpRequest && (l.cors = "withCredentials" in new XMLHttpRequest()), o(p, r), p.prototype._request = function (e, r) {
        return new t(function (t, n) {
          if (l.cors || l.hasXDomainRequest) {
            e = a(e, r.headers);
            var o,
                i,
                u = r.body,
                c = l.cors ? new XMLHttpRequest() : new XDomainRequest(),
                p = !1;
            o = setTimeout(d, r.timeouts.connect), c.onprogress = function () {
              p || q();
            }, "onreadystatechange" in c && (c.onreadystatechange = function () {
              !p && c.readyState > 1 && q();
            }), c.onload = function () {
              if (i) return;
              var e;
              clearTimeout(o);

              try {
                e = {
                  body: JSON.parse(c.responseText),
                  responseText: c.responseText,
                  statusCode: c.status,
                  headers: c.getAllResponseHeaders && c.getAllResponseHeaders() || {}
                };
              } catch (r) {
                e = new s.UnparsableJSON({
                  more: c.responseText
                });
              }

              e instanceof s.UnparsableJSON ? n(e) : t(e);
            }, c.onerror = function (e) {
              if (i) return;
              clearTimeout(o), n(new s.Network({
                more: e
              }));
            }, c instanceof XMLHttpRequest ? (c.open(r.method, e, !0), r.forceAuthHeaders && (c.setRequestHeader("x-algolia-application-id", r.headers["x-algolia-application-id"]), c.setRequestHeader("x-algolia-api-key", r.headers["x-algolia-api-key"]))) : c.open(r.method, e), l.cors && (u && ("POST" === r.method ? c.setRequestHeader("content-type", "application/x-www-form-urlencoded") : c.setRequestHeader("content-type", "application/json")), c.setRequestHeader("accept", "application/json")), u ? c.send(u) : c.send();
          } else n(new s.Network("CORS not supported"));

          function d() {
            i = !0, c.abort(), n(new s.RequestTimeout());
          }

          function q() {
            p = !0, clearTimeout(o), o = setTimeout(d, r.timeouts.complete);
          }
        });
      }, p.prototype._request.fallback = function (e, r) {
        return e = a(e, r.headers), new t(function (t, n) {
          i(e, r, function (e, r) {
            e ? n(e) : t(r);
          });
        });
      }, p.prototype._promise = {
        reject: function reject(e) {
          return t.reject(e);
        },
        resolve: function resolve(e) {
          return t.resolve(e);
        },
        delay: function delay(e) {
          return new t(function (t) {
            setTimeout(t, e);
          });
        },
        all: function all(e) {
          return t.all(e);
        }
      }, c;
    };
  }, {
    "global": "J3Xk",
    "es6-promise": "GTq6",
    "inherits": "oxwV",
    "../errors": "S5Jj",
    "./inline-headers": "drRF",
    "./jsonp-request": "RRro",
    "../places.js": "ofOT",
    "../clone.js": "hMKC",
    "../version.js": "vfvM",
    "debug": "jD9Y"
  }],
  "kpCD": [function (require, module, exports) {
    "use strict";

    var e = require("../../AlgoliaSearch.js"),
        r = require("../createAlgoliasearch.js");

    module.exports = r(e, "Browser");
  }, {
    "../../AlgoliaSearch.js": "eNnX",
    "../createAlgoliasearch.js": "mkZf"
  }],
  "MOds": [function (require, module, exports) {
    "use strict";

    function r(r) {
      return "object" == _typeof(r) && null !== r ? o(Array.isArray(r) ? [] : {}, r) : r;
    }

    function t(r) {
      return "function" == typeof r || Array.isArray(r) || "[object Object]" === Object.prototype.toString.call(r);
    }

    function o(n, e) {
      if (n === e) return n;

      for (var i in e) {
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          var c = e[i],
              u = n[i];
          void 0 !== u && void 0 === c || (t(u) && t(c) ? n[i] = o(u, c) : n[i] = r(c));
        }
      }

      return n;
    }

    function n(r) {
      t(r) || (r = {});

      for (var n = 1, e = arguments.length; n < e; n++) {
        var i = arguments[n];
        t(i) && o(r, i);
      }

      return r;
    }

    module.exports = n;
  }, {}],
  "ydwZ": [function (require, module, exports) {
    "use strict";

    module.exports = function () {
      return Array.prototype.slice.call(arguments).reduceRight(function (e, t) {
        return Object.keys(Object(t)).forEach(function (r) {
          void 0 !== t[r] && (void 0 !== e[r] && delete e[r], e[r] = t[r]);
        }), e;
      }, {});
    };
  }, {}],
  "JE9b": [function (require, module, exports) {
    "use strict";

    function e(e, n) {
      return e.filter(function (t, r) {
        return n.indexOf(t) > -1 && e.indexOf(t) === r;
      });
    }

    module.exports = e;
  }, {}],
  "wODo": [function (require, module, exports) {
    "use strict";

    module.exports = function (r, t) {
      if (Array.isArray(r)) for (var e = 0; e < r.length; e++) {
        if (t(r[e])) return r[e];
      }
    };
  }, {}],
  "N90N": [function (require, module, exports) {
    "use strict";

    function r(e) {
      if ("number" == typeof e) return e;
      if ("string" == typeof e) return parseFloat(e);
      if (Array.isArray(e)) return e.map(r);
      throw new Error("The value should be a number, a parsable string or an array of those.");
    }

    module.exports = r;
  }, {}],
  "okeF": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      if (null === e) return {};
      var t,
          n,
          u = {},
          f = Object.keys(e);

      for (n = 0; n < f.length; n++) {
        t = f[n], r.indexOf(t) >= 0 || (u[t] = e[t]);
      }

      return u;
    }

    module.exports = e;
  }, {}],
  "Qyh6": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e && Object.keys(e).length > 0;
    }

    module.exports = e;
  }, {}],
  "c98b": [function (require, module, exports) {
    "use strict";

    var e = require("../functions/defaultsPure"),
        n = require("../functions/omit"),
        r = require("../functions/objectHasKeys"),
        t = {
      addRefinement: function addRefinement(n, r, i) {
        if (t.isRefined(n, r, i)) return n;
        var u = "" + i,
            f = n[r] ? n[r].concat(u) : [u],
            o = {};
        return o[r] = f, e({}, o, n);
      },
      removeRefinement: function removeRefinement(e, n, r) {
        if (void 0 === r) return t.clearRefinement(e, function (e, r) {
          return n === r;
        });
        var i = "" + r;
        return t.clearRefinement(e, function (e, r) {
          return n === r && i === e;
        });
      },
      toggleRefinement: function toggleRefinement(e, n, r) {
        if (void 0 === r) throw new Error("toggleRefinement should be used with a value");
        return t.isRefined(e, n, r) ? t.removeRefinement(e, n, r) : t.addRefinement(e, n, r);
      },
      clearRefinement: function clearRefinement(e, t, i) {
        if (void 0 === t) return r(e) ? {} : e;
        if ("string" == typeof t) return n(e, [t]);

        if ("function" == typeof t) {
          var u = !1,
              f = Object.keys(e).reduce(function (n, r) {
            var f = e[r] || [],
                o = f.filter(function (e) {
              return !t(e, r, i);
            });
            return o.length !== f.length && (u = !0), n[r] = o, n;
          }, {});
          return u ? f : e;
        }
      },
      isRefined: function isRefined(e, n, r) {
        var t = !!e[n] && e[n].length > 0;
        if (void 0 === r || !t) return t;
        var i = "" + r;
        return -1 !== e[n].indexOf(i);
      }
    };

    module.exports = t;
  }, {
    "../functions/defaultsPure": "ydwZ",
    "../functions/omit": "okeF",
    "../functions/objectHasKeys": "Qyh6"
  }],
  "e3rE": [function (require, module, exports) {
    "use strict";

    var e = require("../functions/merge"),
        t = require("../functions/defaultsPure"),
        i = require("../functions/intersection"),
        n = require("../functions/find"),
        r = require("../functions/valToNumber"),
        s = require("../functions/omit"),
        a = require("../functions/objectHasKeys"),
        c = require("./RefinementList");

    function f(e, t) {
      return Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every(function (e, i) {
        return f(t[i], e);
      }) : e === t;
    }

    function u(e, t) {
      return n(e, function (e) {
        return f(e, t);
      });
    }

    function h(e) {
      var t = e ? h._parseNumbers(e) : {};
      this.facets = t.facets || [], this.disjunctiveFacets = t.disjunctiveFacets || [], this.hierarchicalFacets = t.hierarchicalFacets || [], this.facetsRefinements = t.facetsRefinements || {}, this.facetsExcludes = t.facetsExcludes || {}, this.disjunctiveFacetsRefinements = t.disjunctiveFacetsRefinements || {}, this.numericRefinements = t.numericRefinements || {}, this.tagRefinements = t.tagRefinements || [], this.hierarchicalFacetsRefinements = t.hierarchicalFacetsRefinements || {};
      var i = this;
      Object.keys(t).forEach(function (e) {
        var n = -1 !== h.PARAMETERS.indexOf(e),
            r = void 0 !== t[e];
        !n && r && (i[e] = t[e]);
      });
    }

    h.PARAMETERS = Object.keys(new h()), h._parseNumbers = function (t) {
      if (t instanceof h) return t;
      var i = {};

      if (["aroundPrecision", "aroundRadius", "getRankingInfo", "minWordSizefor2Typos", "minWordSizefor1Typo", "page", "maxValuesPerFacet", "distinct", "minimumAroundRadius", "hitsPerPage", "minProximity"].forEach(function (e) {
        var n = t[e];

        if ("string" == typeof n) {
          var r = parseFloat(n);
          i[e] = isNaN(r) ? n : r;
        }
      }), Array.isArray(t.insideBoundingBox) && (i.insideBoundingBox = t.insideBoundingBox.map(function (e) {
        return Array.isArray(e) ? e.map(function (e) {
          return parseFloat(e);
        }) : e;
      })), t.numericRefinements) {
        var n = {};
        Object.keys(t.numericRefinements).forEach(function (e) {
          var i = t.numericRefinements[e] || {};
          n[e] = {}, Object.keys(i).forEach(function (t) {
            var r = i[t].map(function (e) {
              return Array.isArray(e) ? e.map(function (e) {
                return "string" == typeof e ? parseFloat(e) : e;
              }) : "string" == typeof e ? parseFloat(e) : e;
            });
            n[e][t] = r;
          });
        }), i.numericRefinements = n;
      }

      return e({}, t, i);
    }, h.make = function (e) {
      var t = new h(e);
      return (e.hierarchicalFacets || []).forEach(function (e) {
        if (e.rootPath) {
          var i = t.getHierarchicalRefinement(e.name);
          i.length > 0 && 0 !== i[0].indexOf(e.rootPath) && (t = t.clearRefinements(e.name)), 0 === (i = t.getHierarchicalRefinement(e.name)).length && (t = t.toggleHierarchicalFacetRefinement(e.name, e.rootPath));
        }
      }), t;
    }, h.validate = function (e, t) {
      var i = t || {};
      return e.tagFilters && i.tagRefinements && i.tagRefinements.length > 0 ? new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.") : e.tagRefinements.length > 0 && i.tagFilters ? new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.") : e.numericFilters && i.numericRefinements && a(i.numericRefinements) ? new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : a(e.numericRefinements) && i.numericFilters ? new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.") : null;
    }, h.prototype = {
      constructor: h,
      clearRefinements: function clearRefinements(e) {
        var t = {
          numericRefinements: this._clearNumericRefinements(e),
          facetsRefinements: c.clearRefinement(this.facetsRefinements, e, "conjunctiveFacet"),
          facetsExcludes: c.clearRefinement(this.facetsExcludes, e, "exclude"),
          disjunctiveFacetsRefinements: c.clearRefinement(this.disjunctiveFacetsRefinements, e, "disjunctiveFacet"),
          hierarchicalFacetsRefinements: c.clearRefinement(this.hierarchicalFacetsRefinements, e, "hierarchicalFacet")
        };
        return t.numericRefinements === this.numericRefinements && t.facetsRefinements === this.facetsRefinements && t.facetsExcludes === this.facetsExcludes && t.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && t.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements ? this : this.setQueryParameters(t);
      },
      clearTags: function clearTags() {
        return void 0 === this.tagFilters && 0 === this.tagRefinements.length ? this : this.setQueryParameters({
          tagFilters: void 0,
          tagRefinements: []
        });
      },
      setIndex: function setIndex(e) {
        return e === this.index ? this : this.setQueryParameters({
          index: e
        });
      },
      setQuery: function setQuery(e) {
        return e === this.query ? this : this.setQueryParameters({
          query: e
        });
      },
      setPage: function setPage(e) {
        return e === this.page ? this : this.setQueryParameters({
          page: e
        });
      },
      setFacets: function setFacets(e) {
        return this.setQueryParameters({
          facets: e
        });
      },
      setDisjunctiveFacets: function setDisjunctiveFacets(e) {
        return this.setQueryParameters({
          disjunctiveFacets: e
        });
      },
      setHitsPerPage: function setHitsPerPage(e) {
        return this.hitsPerPage === e ? this : this.setQueryParameters({
          hitsPerPage: e
        });
      },
      setTypoTolerance: function setTypoTolerance(e) {
        return this.typoTolerance === e ? this : this.setQueryParameters({
          typoTolerance: e
        });
      },
      addNumericRefinement: function addNumericRefinement(t, i, n) {
        var s = r(n);
        if (this.isNumericRefined(t, i, s)) return this;
        var a = e({}, this.numericRefinements);
        return a[t] = e({}, a[t]), a[t][i] ? (a[t][i] = a[t][i].slice(), a[t][i].push(s)) : a[t][i] = [s], this.setQueryParameters({
          numericRefinements: a
        });
      },
      getConjunctiveRefinements: function getConjunctiveRefinements(e) {
        return this.isConjunctiveFacet(e) && this.facetsRefinements[e] || [];
      },
      getDisjunctiveRefinements: function getDisjunctiveRefinements(e) {
        return this.isDisjunctiveFacet(e) && this.disjunctiveFacetsRefinements[e] || [];
      },
      getHierarchicalRefinement: function getHierarchicalRefinement(e) {
        return this.hierarchicalFacetsRefinements[e] || [];
      },
      getExcludeRefinements: function getExcludeRefinements(e) {
        return this.isConjunctiveFacet(e) && this.facetsExcludes[e] || [];
      },
      removeNumericRefinement: function removeNumericRefinement(e, t, i) {
        return void 0 !== i ? this.isNumericRefined(e, t, i) ? this.setQueryParameters({
          numericRefinements: this._clearNumericRefinements(function (n, s) {
            return s === e && n.op === t && f(n.val, r(i));
          })
        }) : this : void 0 !== t ? this.isNumericRefined(e, t) ? this.setQueryParameters({
          numericRefinements: this._clearNumericRefinements(function (i, n) {
            return n === e && i.op === t;
          })
        }) : this : this.isNumericRefined(e) ? this.setQueryParameters({
          numericRefinements: this._clearNumericRefinements(function (t, i) {
            return i === e;
          })
        }) : this;
      },
      getNumericRefinements: function getNumericRefinements(e) {
        return this.numericRefinements[e] || {};
      },
      getNumericRefinement: function getNumericRefinement(e, t) {
        return this.numericRefinements[e] && this.numericRefinements[e][t];
      },
      _clearNumericRefinements: function _clearNumericRefinements(e) {
        if (void 0 === e) return a(this.numericRefinements) ? {} : this.numericRefinements;
        if ("string" == typeof e) return s(this.numericRefinements, [e]);

        if ("function" == typeof e) {
          var t = !1,
              i = this.numericRefinements,
              n = Object.keys(i).reduce(function (n, r) {
            var s = i[r],
                a = {};
            return s = s || {}, Object.keys(s).forEach(function (i) {
              var n = s[i] || [],
                  c = [];
              n.forEach(function (t) {
                e({
                  val: t,
                  op: i
                }, r, "numeric") || c.push(t);
              }), c.length !== n.length && (t = !0), a[i] = c;
            }), n[r] = a, n;
          }, {});
          return t ? n : this.numericRefinements;
        }
      },
      addFacet: function addFacet(e) {
        return this.isConjunctiveFacet(e) ? this : this.setQueryParameters({
          facets: this.facets.concat([e])
        });
      },
      addDisjunctiveFacet: function addDisjunctiveFacet(e) {
        return this.isDisjunctiveFacet(e) ? this : this.setQueryParameters({
          disjunctiveFacets: this.disjunctiveFacets.concat([e])
        });
      },
      addHierarchicalFacet: function addHierarchicalFacet(e) {
        if (this.isHierarchicalFacet(e.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + e.name + "`");
        return this.setQueryParameters({
          hierarchicalFacets: this.hierarchicalFacets.concat([e])
        });
      },
      addFacetRefinement: function addFacetRefinement(e, t) {
        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
        return c.isRefined(this.facetsRefinements, e, t) ? this : this.setQueryParameters({
          facetsRefinements: c.addRefinement(this.facetsRefinements, e, t)
        });
      },
      addExcludeRefinement: function addExcludeRefinement(e, t) {
        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
        return c.isRefined(this.facetsExcludes, e, t) ? this : this.setQueryParameters({
          facetsExcludes: c.addRefinement(this.facetsExcludes, e, t)
        });
      },
      addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(e, t) {
        if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
        return c.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this : this.setQueryParameters({
          disjunctiveFacetsRefinements: c.addRefinement(this.disjunctiveFacetsRefinements, e, t)
        });
      },
      addTagRefinement: function addTagRefinement(e) {
        if (this.isTagRefined(e)) return this;
        var t = {
          tagRefinements: this.tagRefinements.concat(e)
        };
        return this.setQueryParameters(t);
      },
      removeFacet: function removeFacet(e) {
        return this.isConjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
          facets: this.facets.filter(function (t) {
            return t !== e;
          })
        }) : this;
      },
      removeDisjunctiveFacet: function removeDisjunctiveFacet(e) {
        return this.isDisjunctiveFacet(e) ? this.clearRefinements(e).setQueryParameters({
          disjunctiveFacets: this.disjunctiveFacets.filter(function (t) {
            return t !== e;
          })
        }) : this;
      },
      removeHierarchicalFacet: function removeHierarchicalFacet(e) {
        return this.isHierarchicalFacet(e) ? this.clearRefinements(e).setQueryParameters({
          hierarchicalFacets: this.hierarchicalFacets.filter(function (t) {
            return t.name !== e;
          })
        }) : this;
      },
      removeFacetRefinement: function removeFacetRefinement(e, t) {
        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
        return c.isRefined(this.facetsRefinements, e, t) ? this.setQueryParameters({
          facetsRefinements: c.removeRefinement(this.facetsRefinements, e, t)
        }) : this;
      },
      removeExcludeRefinement: function removeExcludeRefinement(e, t) {
        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
        return c.isRefined(this.facetsExcludes, e, t) ? this.setQueryParameters({
          facetsExcludes: c.removeRefinement(this.facetsExcludes, e, t)
        }) : this;
      },
      removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(e, t) {
        if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
        return c.isRefined(this.disjunctiveFacetsRefinements, e, t) ? this.setQueryParameters({
          disjunctiveFacetsRefinements: c.removeRefinement(this.disjunctiveFacetsRefinements, e, t)
        }) : this;
      },
      removeTagRefinement: function removeTagRefinement(e) {
        if (!this.isTagRefined(e)) return this;
        var t = {
          tagRefinements: this.tagRefinements.filter(function (t) {
            return t !== e;
          })
        };
        return this.setQueryParameters(t);
      },
      toggleRefinement: function toggleRefinement(e, t) {
        return this.toggleFacetRefinement(e, t);
      },
      toggleFacetRefinement: function toggleFacetRefinement(e, t) {
        if (this.isHierarchicalFacet(e)) return this.toggleHierarchicalFacetRefinement(e, t);
        if (this.isConjunctiveFacet(e)) return this.toggleConjunctiveFacetRefinement(e, t);
        if (this.isDisjunctiveFacet(e)) return this.toggleDisjunctiveFacetRefinement(e, t);
        throw new Error("Cannot refine the undeclared facet " + e + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets");
      },
      toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(e, t) {
        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
        return this.setQueryParameters({
          facetsRefinements: c.toggleRefinement(this.facetsRefinements, e, t)
        });
      },
      toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(e, t) {
        if (!this.isConjunctiveFacet(e)) throw new Error(e + " is not defined in the facets attribute of the helper configuration");
        return this.setQueryParameters({
          facetsExcludes: c.toggleRefinement(this.facetsExcludes, e, t)
        });
      },
      toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(e, t) {
        if (!this.isDisjunctiveFacet(e)) throw new Error(e + " is not defined in the disjunctiveFacets attribute of the helper configuration");
        return this.setQueryParameters({
          disjunctiveFacetsRefinements: c.toggleRefinement(this.disjunctiveFacetsRefinements, e, t)
        });
      },
      toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(e, i) {
        if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration");

        var n = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e)),
            r = {};

        return void 0 !== this.hierarchicalFacetsRefinements[e] && this.hierarchicalFacetsRefinements[e].length > 0 && (this.hierarchicalFacetsRefinements[e][0] === i || 0 === this.hierarchicalFacetsRefinements[e][0].indexOf(i + n)) ? -1 === i.indexOf(n) ? r[e] = [] : r[e] = [i.slice(0, i.lastIndexOf(n))] : r[e] = [i], this.setQueryParameters({
          hierarchicalFacetsRefinements: t({}, r, this.hierarchicalFacetsRefinements)
        });
      },
      addHierarchicalFacetRefinement: function addHierarchicalFacetRefinement(e, i) {
        if (this.isHierarchicalFacetRefined(e)) throw new Error(e + " is already refined.");
        if (!this.isHierarchicalFacet(e)) throw new Error(e + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
        var n = {};
        return n[e] = [i], this.setQueryParameters({
          hierarchicalFacetsRefinements: t({}, n, this.hierarchicalFacetsRefinements)
        });
      },
      removeHierarchicalFacetRefinement: function removeHierarchicalFacetRefinement(e) {
        if (!this.isHierarchicalFacetRefined(e)) return this;
        var i = {};
        return i[e] = [], this.setQueryParameters({
          hierarchicalFacetsRefinements: t({}, i, this.hierarchicalFacetsRefinements)
        });
      },
      toggleTagRefinement: function toggleTagRefinement(e) {
        return this.isTagRefined(e) ? this.removeTagRefinement(e) : this.addTagRefinement(e);
      },
      isDisjunctiveFacet: function isDisjunctiveFacet(e) {
        return this.disjunctiveFacets.indexOf(e) > -1;
      },
      isHierarchicalFacet: function isHierarchicalFacet(e) {
        return void 0 !== this.getHierarchicalFacetByName(e);
      },
      isConjunctiveFacet: function isConjunctiveFacet(e) {
        return this.facets.indexOf(e) > -1;
      },
      isFacetRefined: function isFacetRefined(e, t) {
        return !!this.isConjunctiveFacet(e) && c.isRefined(this.facetsRefinements, e, t);
      },
      isExcludeRefined: function isExcludeRefined(e, t) {
        return !!this.isConjunctiveFacet(e) && c.isRefined(this.facetsExcludes, e, t);
      },
      isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(e, t) {
        return !!this.isDisjunctiveFacet(e) && c.isRefined(this.disjunctiveFacetsRefinements, e, t);
      },
      isHierarchicalFacetRefined: function isHierarchicalFacetRefined(e, t) {
        if (!this.isHierarchicalFacet(e)) return !1;
        var i = this.getHierarchicalRefinement(e);
        return t ? -1 !== i.indexOf(t) : i.length > 0;
      },
      isNumericRefined: function isNumericRefined(e, t, i) {
        if (void 0 === i && void 0 === t) return !!this.numericRefinements[e];
        var n = this.numericRefinements[e] && void 0 !== this.numericRefinements[e][t];
        if (void 0 === i || !n) return n;
        var s = r(i),
            a = void 0 !== u(this.numericRefinements[e][t], s);
        return n && a;
      },
      isTagRefined: function isTagRefined(e) {
        return -1 !== this.tagRefinements.indexOf(e);
      },
      getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
        var e = this,
            t = i(Object.keys(this.numericRefinements).filter(function (t) {
          return Object.keys(e.numericRefinements[t]).length > 0;
        }), this.disjunctiveFacets);
        return Object.keys(this.disjunctiveFacetsRefinements).filter(function (t) {
          return e.disjunctiveFacetsRefinements[t].length > 0;
        }).concat(t).concat(this.getRefinedHierarchicalFacets());
      },
      getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
        var e = this;
        return i(this.hierarchicalFacets.map(function (e) {
          return e.name;
        }), Object.keys(this.hierarchicalFacetsRefinements).filter(function (t) {
          return e.hierarchicalFacetsRefinements[t].length > 0;
        }));
      },
      getUnrefinedDisjunctiveFacets: function getUnrefinedDisjunctiveFacets() {
        var e = this.getRefinedDisjunctiveFacets();
        return this.disjunctiveFacets.filter(function (t) {
          return -1 === e.indexOf(t);
        });
      },
      managedParameters: ["index", "facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements"],
      getQueryParams: function getQueryParams() {
        var e = this.managedParameters,
            t = {},
            i = this;
        return Object.keys(this).forEach(function (n) {
          var r = i[n];
          -1 === e.indexOf(n) && void 0 !== r && (t[n] = r);
        }), t;
      },
      setQueryParameter: function setQueryParameter(e, t) {
        if (this[e] === t) return this;
        var i = {};
        return i[e] = t, this.setQueryParameters(i);
      },
      setQueryParameters: function setQueryParameters(e) {
        if (!e) return this;
        var t = h.validate(this, e);
        if (t) throw t;

        var i = this,
            n = h._parseNumbers(e),
            r = Object.keys(this).reduce(function (e, t) {
          return e[t] = i[t], e;
        }, {}),
            a = Object.keys(n).reduce(function (e, t) {
          var i = void 0 !== e[t],
              r = void 0 !== n[t];
          return i && !r ? s(e, [t]) : (r && (e[t] = n[t]), e);
        }, r);

        return new this.constructor(a);
      },
      resetPage: function resetPage() {
        return void 0 === this.page ? this : this.setPage(0);
      },
      _getHierarchicalFacetSortBy: function _getHierarchicalFacetSortBy(e) {
        return e.sortBy || ["isRefined:desc", "name:asc"];
      },
      _getHierarchicalFacetSeparator: function _getHierarchicalFacetSeparator(e) {
        return e.separator || " > ";
      },
      _getHierarchicalRootPath: function _getHierarchicalRootPath(e) {
        return e.rootPath || null;
      },
      _getHierarchicalShowParentLevel: function _getHierarchicalShowParentLevel(e) {
        return "boolean" != typeof e.showParentLevel || e.showParentLevel;
      },
      getHierarchicalFacetByName: function getHierarchicalFacetByName(e) {
        return n(this.hierarchicalFacets, function (t) {
          return t.name === e;
        });
      },
      getHierarchicalFacetBreadcrumb: function getHierarchicalFacetBreadcrumb(e) {
        if (!this.isHierarchicalFacet(e)) return [];
        var t = this.getHierarchicalRefinement(e)[0];
        if (!t) return [];

        var i = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(e));

        return t.split(i).map(function (e) {
          return e.trim();
        });
      },
      toString: function toString() {
        return JSON.stringify(this, null, 2);
      }
    }, module.exports = h;
  }, {
    "../functions/merge": "MOds",
    "../functions/defaultsPure": "ydwZ",
    "../functions/intersection": "JE9b",
    "../functions/find": "wODo",
    "../functions/valToNumber": "N90N",
    "../functions/omit": "okeF",
    "../functions/objectHasKeys": "Qyh6",
    "./RefinementList": "c98b"
  }],
  "gbYz": [function (require, module, exports) {
    "use strict";

    function r(r, n) {
      if (r !== n) {
        var i = void 0 !== r,
            t = null === r,
            e = void 0 !== n,
            u = null === n;
        if (!u && r > n || t && e || !i) return 1;
        if (!t && r < n || u && i || !e) return -1;
      }

      return 0;
    }

    function n(n, i, t) {
      if (!Array.isArray(n)) return [];
      Array.isArray(t) || (t = []);
      var e = n.map(function (r, n) {
        return {
          criteria: i.map(function (n) {
            return r[n];
          }),
          index: n,
          value: r
        };
      });
      return e.sort(function (n, i) {
        for (var e = -1; ++e < n.criteria.length;) {
          var u = r(n.criteria[e], i.criteria[e]);
          if (u) return e >= t.length ? u : "desc" === t[e] ? -u : u;
        }

        return n.index - i.index;
      }), e.map(function (r) {
        return r.value;
      });
    }

    module.exports = n;
  }, {}],
  "R0Lj": [function (require, module, exports) {
    "use strict";

    module.exports = function (r) {
      return Array.isArray(r) ? r.filter(Boolean) : [];
    };
  }, {}],
  "YeLT": [function (require, module, exports) {
    "use strict";

    module.exports = function (r, t) {
      if (!Array.isArray(r)) return -1;

      for (var e = 0; e < r.length; e++) {
        if (t(r[e])) return e;
      }

      return -1;
    };
  }, {}],
  "ckZk": [function (require, module, exports) {
    "use strict";

    var r = require("./find");

    module.exports = function (u, n) {
      var t = (n || []).map(function (r) {
        return r.split(":");
      });
      return u.reduce(function (u, n) {
        var e = n.split(":"),
            i = r(t, function (r) {
          return r[0] === e[0];
        });
        return e.length > 1 || !i ? (u[0].push(e[0]), u[1].push(e[1]), u) : (u[0].push(i[0]), u[1].push(i[1]), u);
      }, [[], []]);
    };
  }, {
    "./find": "wODo"
  }],
  "Z8Gc": [function (require, module, exports) {
    "use strict";

    module.exports = r;

    var e = require("../functions/orderBy"),
        t = require("../functions/find"),
        n = require("../functions/formatSort");

    function r(e) {
      return function (t, r) {
        var i = e.hierarchicalFacets[r],
            c = e.hierarchicalFacetsRefinements[i.name] && e.hierarchicalFacetsRefinements[i.name][0] || "",
            u = e._getHierarchicalFacetSeparator(i),
            f = e._getHierarchicalRootPath(i),
            l = e._getHierarchicalShowParentLevel(i),
            o = n(e._getHierarchicalFacetSortBy(i)),
            s = t.every(function (e) {
          return e.exhaustive;
        }),
            h = a(o, u, f, l, c),
            d = t;

        return f && (d = t.slice(f.split(u).length)), d.reduce(h, {
          name: e.hierarchicalFacets[r].name,
          count: null,
          isRefined: !0,
          path: null,
          exhaustive: s,
          data: null
        });
      };
    }

    function a(n, r, a, u, f) {
      return function (l, o, s) {
        var h = l;

        if (s > 0) {
          var d = 0;

          for (h = l; d < s;) {
            var v = h && Array.isArray(h.data) ? h.data : [];
            h = t(v, function (e) {
              return e.isRefined;
            }), d++;
          }
        }

        if (h) {
          var x = Object.keys(o.data).map(function (e) {
            return [e, o.data[e]];
          }).filter(function (e) {
            return i(e[0], h.path || a, f, r, a, u);
          });
          h.data = e(x.map(function (e) {
            var t = e[0];
            return c(e[1], t, r, f, o.exhaustive);
          }), n[0], n[1]);
        }

        return l;
      };
    }

    function i(e, t, n, r, a, i) {
      return (!a || 0 === e.indexOf(a) && a !== e) && (!a && -1 === e.indexOf(r) || a && e.split(r).length - a.split(r).length == 1 || -1 === e.indexOf(r) && -1 === n.indexOf(r) || 0 === n.indexOf(e) || 0 === e.indexOf(t + r) && (i || 0 === e.indexOf(n)));
    }

    function c(e, t, n, r, a) {
      var i = t.split(n);
      return {
        name: i[i.length - 1].trim(),
        path: t,
        count: e,
        isRefined: r === t || 0 === r.indexOf(t + n),
        exhaustive: a,
        data: null
      };
    }
  }, {
    "../functions/orderBy": "gbYz",
    "../functions/find": "wODo",
    "../functions/formatSort": "ckZk"
  }],
  "KDjX": [function (require, module, exports) {
    "use strict";

    var e = require("../functions/merge"),
        t = require("../functions/defaultsPure"),
        a = require("../functions/orderBy"),
        c = require("../functions/compact"),
        i = require("../functions/find"),
        n = require("../functions/findIndex"),
        r = require("../functions/formatSort"),
        s = require("./generate-hierarchical-tree");

    function u(e) {
      var t = {};
      return e.forEach(function (e, a) {
        t[e] = a;
      }), t;
    }

    function f(e, t, a) {
      t && t[a] && (e.stats = t[a]);
    }

    function o(e, t) {
      return i(e, function (e) {
        return (e.attributes || []).indexOf(t) > -1;
      });
    }

    function h(a, i) {
      var r = i[0];
      this._rawResults = i;
      var h = this;
      Object.keys(r).forEach(function (e) {
        h[e] = r[e];
      }), this.processingTimeMS = i.reduce(function (e, t) {
        return void 0 === t.processingTimeMS ? e : e + t.processingTimeMS;
      }, 0), this.disjunctiveFacets = [], this.hierarchicalFacets = a.hierarchicalFacets.map(function () {
        return [];
      }), this.facets = [];
      var d = a.getRefinedDisjunctiveFacets(),
          v = u(a.facets),
          F = u(a.disjunctiveFacets),
          m = 1,
          l = r.facets || {};
      Object.keys(l).forEach(function (e) {
        var t = l[e],
            c = o(a.hierarchicalFacets, e);

        if (c) {
          var i = c.attributes.indexOf(e),
              s = n(a.hierarchicalFacets, function (e) {
            return e.name === c.name;
          });
          h.hierarchicalFacets[s][i] = {
            attribute: e,
            data: t,
            exhaustive: r.exhaustiveFacetsCount
          };
        } else {
          var u,
              d = -1 !== a.disjunctiveFacets.indexOf(e),
              m = -1 !== a.facets.indexOf(e);
          d && (u = F[e], h.disjunctiveFacets[u] = {
            name: e,
            data: t,
            exhaustive: r.exhaustiveFacetsCount
          }, f(h.disjunctiveFacets[u], r.facets_stats, e)), m && (u = v[e], h.facets[u] = {
            name: e,
            data: t,
            exhaustive: r.exhaustiveFacetsCount
          }, f(h.facets[u], r.facets_stats, e));
        }
      }), this.hierarchicalFacets = c(this.hierarchicalFacets), d.forEach(function (c) {
        var s = i[m],
            u = s && s.facets ? s.facets : {},
            o = a.getHierarchicalFacetByName(c);
        Object.keys(u).forEach(function (c) {
          var i,
              d = u[c];

          if (o) {
            i = n(a.hierarchicalFacets, function (e) {
              return e.name === o.name;
            });
            var v = n(h.hierarchicalFacets[i], function (e) {
              return e.attribute === c;
            });
            if (-1 === v) return;
            h.hierarchicalFacets[i][v].data = e({}, h.hierarchicalFacets[i][v].data, d);
          } else {
            i = F[c];
            var m = r.facets && r.facets[c] || {};
            h.disjunctiveFacets[i] = {
              name: c,
              data: t({}, d, m),
              exhaustive: s.exhaustiveFacetsCount
            }, f(h.disjunctiveFacets[i], s.facets_stats, c), a.disjunctiveFacetsRefinements[c] && a.disjunctiveFacetsRefinements[c].forEach(function (e) {
              !h.disjunctiveFacets[i].data[e] && a.disjunctiveFacetsRefinements[c].indexOf(e) > -1 && (h.disjunctiveFacets[i].data[e] = 0);
            });
          }
        }), m++;
      }), a.getRefinedHierarchicalFacets().forEach(function (e) {
        var c = a.getHierarchicalFacetByName(e),
            r = a._getHierarchicalFacetSeparator(c),
            s = a.getHierarchicalRefinement(e);

        if (!(0 === s.length || s[0].split(r).length < 2)) {
          var u = i[m],
              f = u && u.facets ? u.facets : {};
          Object.keys(f).forEach(function (e) {
            var i = f[e],
                u = n(a.hierarchicalFacets, function (e) {
              return e.name === c.name;
            }),
                o = n(h.hierarchicalFacets[u], function (t) {
              return t.attribute === e;
            });

            if (-1 !== o) {
              var d = {};

              if (s.length > 0) {
                var v = s[0].split(r)[0];
                d[v] = h.hierarchicalFacets[u][o].data[v];
              }

              h.hierarchicalFacets[u][o].data = t(d, i, h.hierarchicalFacets[u][o].data);
            }
          }), m++;
        }
      }), Object.keys(a.facetsExcludes).forEach(function (e) {
        var t = a.facetsExcludes[e],
            c = v[e];
        h.facets[c] = {
          name: e,
          data: r.facets[e],
          exhaustive: r.exhaustiveFacetsCount
        }, t.forEach(function (t) {
          h.facets[c] = h.facets[c] || {
            name: e
          }, h.facets[c].data = h.facets[c].data || {}, h.facets[c].data[t] = 0;
        });
      }), this.hierarchicalFacets = this.hierarchicalFacets.map(s(a)), this.facets = c(this.facets), this.disjunctiveFacets = c(this.disjunctiveFacets), this._state = a;
    }

    function d(e, t) {
      function a(e) {
        return e.name === t;
      }

      if (e._state.isConjunctiveFacet(t)) {
        var c = i(e.facets, a);
        return c ? Object.keys(c.data).map(function (a) {
          return {
            name: a,
            count: c.data[a],
            isRefined: e._state.isFacetRefined(t, a),
            isExcluded: e._state.isExcludeRefined(t, a)
          };
        }) : [];
      }

      if (e._state.isDisjunctiveFacet(t)) {
        var n = i(e.disjunctiveFacets, a);
        return n ? Object.keys(n.data).map(function (a) {
          return {
            name: a,
            count: n.data[a],
            isRefined: e._state.isDisjunctiveFacetRefined(t, a)
          };
        }) : [];
      }

      if (e._state.isHierarchicalFacet(t)) return i(e.hierarchicalFacets, a);
    }

    function v(t, a) {
      if (!a.data || 0 === a.data.length) return a;
      var c = a.data.map(function (e) {
        return v(t, e);
      }),
          i = t(c);
      return e({}, a, {
        data: i
      });
    }

    function F(e, t) {
      return t.sort(e);
    }

    function m(e, t) {
      var a = i(e, function (e) {
        return e.name === t;
      });
      return a && a.stats;
    }

    function l(e, t, a, c, n) {
      var r = i(n, function (e) {
        return e.name === a;
      }),
          s = r && r.data && r.data[c] ? r.data[c] : 0,
          u = r && r.exhaustive || !1;
      return {
        type: t,
        attributeName: a,
        name: c,
        count: s,
        exhaustive: u
      };
    }

    function y(e, t, a, c) {
      var n = e.getHierarchicalFacetByName(t),
          r = e._getHierarchicalFacetSeparator(n),
          s = a.split(r),
          u = i(c, function (e) {
        return e.name === t;
      }),
          f = s.reduce(function (e, t) {
        var a = e && i(e.data, function (e) {
          return e.name === t;
        });
        return void 0 !== a ? a : e;
      }, u),
          o = f && f.count || 0,
          h = f && f.exhaustive || !1,
          d = f && f.path || "";

      return {
        type: "hierarchical",
        attributeName: t,
        name: d,
        count: o,
        exhaustive: h
      };
    }

    h.prototype.getFacetByName = function (e) {
      function t(t) {
        return t.name === e;
      }

      return i(this.facets, t) || i(this.disjunctiveFacets, t) || i(this.hierarchicalFacets, t);
    }, h.DEFAULT_SORT = ["isRefined:desc", "count:desc", "name:asc"], h.prototype.getFacetValues = function (e, c) {
      var i = d(this, e);

      if (i) {
        var n = t({}, c, {
          sortBy: h.DEFAULT_SORT
        });

        if (Array.isArray(n.sortBy)) {
          var s = r(n.sortBy, h.DEFAULT_SORT);
          return Array.isArray(i) ? a(i, s[0], s[1]) : v(function (e) {
            return a(e, s[0], s[1]);
          }, i);
        }

        if ("function" == typeof n.sortBy) return Array.isArray(i) ? i.sort(n.sortBy) : v(function (e) {
          return F(n.sortBy, e);
        }, i);
        throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function");
      }
    }, h.prototype.getFacetStats = function (e) {
      return this._state.isConjunctiveFacet(e) ? m(this.facets, e) : this._state.isDisjunctiveFacet(e) ? m(this.disjunctiveFacets, e) : void 0;
    }, h.prototype.getRefinements = function () {
      var e = this._state,
          t = this,
          a = [];
      return Object.keys(e.facetsRefinements).forEach(function (c) {
        e.facetsRefinements[c].forEach(function (i) {
          a.push(l(e, "facet", c, i, t.facets));
        });
      }), Object.keys(e.facetsExcludes).forEach(function (c) {
        e.facetsExcludes[c].forEach(function (i) {
          a.push(l(e, "exclude", c, i, t.facets));
        });
      }), Object.keys(e.disjunctiveFacetsRefinements).forEach(function (c) {
        e.disjunctiveFacetsRefinements[c].forEach(function (i) {
          a.push(l(e, "disjunctive", c, i, t.disjunctiveFacets));
        });
      }), Object.keys(e.hierarchicalFacetsRefinements).forEach(function (c) {
        e.hierarchicalFacetsRefinements[c].forEach(function (i) {
          a.push(y(e, c, i, t.hierarchicalFacets));
        });
      }), Object.keys(e.numericRefinements).forEach(function (t) {
        var c = e.numericRefinements[t];
        Object.keys(c).forEach(function (e) {
          c[e].forEach(function (c) {
            a.push({
              type: "numeric",
              attributeName: t,
              name: c,
              numericValue: c,
              operator: e
            });
          });
        });
      }), e.tagRefinements.forEach(function (e) {
        a.push({
          type: "tag",
          attributeName: "_tags",
          name: e
        });
      }), a;
    }, module.exports = h;
  }, {
    "../functions/merge": "MOds",
    "../functions/defaultsPure": "ydwZ",
    "../functions/orderBy": "gbYz",
    "../functions/compact": "R0Lj",
    "../functions/find": "wODo",
    "../functions/findIndex": "YeLT",
    "../functions/formatSort": "ckZk",
    "./generate-hierarchical-tree": "Z8Gc"
  }],
  "kUY2": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      e.prototype = Object.create(t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      });
    }

    module.exports = e;
  }, {}],
  "wJQX": [function (require, module, exports) {
    "use strict";

    var t = require("events"),
        e = require("../functions/inherits");

    function i(t, e) {
      this.main = t, this.fn = e, this.lastResults = null;
    }

    e(i, t.EventEmitter), i.prototype.detach = function () {
      this.removeAllListeners(), this.main.detachDerivedHelper(this);
    }, i.prototype.getModifiedState = function (t) {
      return this.fn(t);
    }, module.exports = i;
  }, {
    "events": "K1mi",
    "../functions/inherits": "kUY2"
  }],
  "zWZ5": [function (require, module, exports) {
    "use strict";

    var e = require("./functions/merge"),
        t = {
      _getQueries: function _getQueries(e, r) {
        var a = [];
        return a.push({
          indexName: e,
          params: t._getHitsSearchParams(r)
        }), r.getRefinedDisjunctiveFacets().forEach(function (i) {
          a.push({
            indexName: e,
            params: t._getDisjunctiveFacetSearchParams(r, i)
          });
        }), r.getRefinedHierarchicalFacets().forEach(function (i) {
          var c = r.getHierarchicalFacetByName(i),
              n = r.getHierarchicalRefinement(i),
              s = r._getHierarchicalFacetSeparator(c);

          n.length > 0 && n[0].split(s).length > 1 && a.push({
            indexName: e,
            params: t._getDisjunctiveFacetSearchParams(r, i, !0)
          });
        }), a;
      },
      _getHitsSearchParams: function _getHitsSearchParams(r) {
        var a = r.facets.concat(r.disjunctiveFacets).concat(t._getHitsHierarchicalFacetsAttributes(r)),
            i = t._getFacetFilters(r),
            c = t._getNumericFilters(r),
            n = {
          facets: a,
          tagFilters: t._getTagFilters(r)
        };

        return i.length > 0 && (n.facetFilters = i), c.length > 0 && (n.numericFilters = c), e({}, r.getQueryParams(), n);
      },
      _getDisjunctiveFacetSearchParams: function _getDisjunctiveFacetSearchParams(r, a, i) {
        var c = t._getFacetFilters(r, a, i),
            n = t._getNumericFilters(r, a),
            s = {
          hitsPerPage: 1,
          page: 0,
          attributesToRetrieve: [],
          attributesToHighlight: [],
          attributesToSnippet: [],
          tagFilters: t._getTagFilters(r),
          analytics: !1,
          clickAnalytics: !1
        },
            u = r.getHierarchicalFacetByName(a);

        return s.facets = u ? t._getDisjunctiveHierarchicalFacetAttribute(r, u, i) : a, n.length > 0 && (s.numericFilters = n), c.length > 0 && (s.facetFilters = c), e({}, r.getQueryParams(), s);
      },
      _getNumericFilters: function _getNumericFilters(e, t) {
        if (e.numericFilters) return e.numericFilters;
        var r = [];
        return Object.keys(e.numericRefinements).forEach(function (a) {
          var i = e.numericRefinements[a] || {};
          Object.keys(i).forEach(function (e) {
            var c = i[e] || [];
            t !== a && c.forEach(function (t) {
              if (Array.isArray(t)) {
                var i = t.map(function (t) {
                  return a + e + t;
                });
                r.push(i);
              } else r.push(a + e + t);
            });
          });
        }), r;
      },
      _getTagFilters: function _getTagFilters(e) {
        return e.tagFilters ? e.tagFilters : e.tagRefinements.join(",");
      },
      _getFacetFilters: function _getFacetFilters(e, t, r) {
        var a = [],
            i = e.facetsRefinements || {};
        Object.keys(i).forEach(function (e) {
          (i[e] || []).forEach(function (t) {
            a.push(e + ":" + t);
          });
        });
        var c = e.facetsExcludes || {};
        Object.keys(c).forEach(function (e) {
          (c[e] || []).forEach(function (t) {
            a.push(e + ":-" + t);
          });
        });
        var n = e.disjunctiveFacetsRefinements || {};
        Object.keys(n).forEach(function (e) {
          var r = n[e] || [];

          if (e !== t && r && 0 !== r.length) {
            var i = [];
            r.forEach(function (t) {
              i.push(e + ":" + t);
            }), a.push(i);
          }
        });
        var s = e.hierarchicalFacetsRefinements || {};
        return Object.keys(s).forEach(function (i) {
          var c = (s[i] || [])[0];

          if (void 0 !== c) {
            var n,
                u,
                l = e.getHierarchicalFacetByName(i),
                h = e._getHierarchicalFacetSeparator(l),
                f = e._getHierarchicalRootPath(l);

            if (t === i) {
              if (-1 === c.indexOf(h) || !f && !0 === r || f && f.split(h).length === c.split(h).length) return;
              f ? (u = f.split(h).length - 1, c = f) : (u = c.split(h).length - 2, c = c.slice(0, c.lastIndexOf(h))), n = l.attributes[u];
            } else u = c.split(h).length - 1, n = l.attributes[u];

            n && a.push([n + ":" + c]);
          }
        }), a;
      },
      _getHitsHierarchicalFacetsAttributes: function _getHitsHierarchicalFacetsAttributes(e) {
        return e.hierarchicalFacets.reduce(function (t, r) {
          var a = e.getHierarchicalRefinement(r.name)[0];
          if (!a) return t.push(r.attributes[0]), t;

          var i = e._getHierarchicalFacetSeparator(r),
              c = a.split(i).length,
              n = r.attributes.slice(0, c + 1);

          return t.concat(n);
        }, []);
      },
      _getDisjunctiveHierarchicalFacetAttribute: function _getDisjunctiveHierarchicalFacetAttribute(e, t, r) {
        var a = e._getHierarchicalFacetSeparator(t);

        if (!0 === r) {
          var i = e._getHierarchicalRootPath(t),
              c = 0;

          return i && (c = i.split(a).length), [t.attributes[c]];
        }

        var n = (e.getHierarchicalRefinement(t.name)[0] || "").split(a).length - 1;
        return t.attributes.slice(0, n + 1);
      },
      getSearchForFacetQuery: function getSearchForFacetQuery(r, a, i, c) {
        var n = c.isDisjunctiveFacet(r) ? c.clearRefinements(r) : c,
            s = {
          facetQuery: a,
          facetName: r
        };
        return "number" == typeof i && (s.maxFacetHits = i), e({}, t._getHitsSearchParams(n), s);
      }
    };

    module.exports = t;
  }, {
    "./functions/merge": "MOds"
  }],
  "l7RC": [function (require, module, exports) {
    "use strict";

    module.exports = "3.3.3";
  }, {}],
  "Vml6": [function (require, module, exports) {
    "use strict";

    var e = require("./SearchParameters"),
        t = require("./SearchResults"),
        i = require("./DerivedHelper"),
        s = require("./requestBuilder"),
        r = require("events"),
        n = require("./functions/inherits"),
        a = require("./functions/objectHasKeys"),
        c = require("./version");

    function u(t, i, s) {
      "function" == typeof t.addAlgoliaAgent && t.addAlgoliaAgent("JS Helper (" + c + ")"), this.setClient(t);
      var r = s || {};
      r.index = i, this.state = e.make(r), this.lastResults = null, this._queryId = 0, this._lastQueryIdReceived = -1, this.derivedHelpers = [], this._currentNbQueries = 0;
    }

    function o(e) {
      if (e < 0) throw new Error("Page requested below 0.");
      return this._change({
        state: this.state.setPage(e),
        isPageReset: !1
      }), this;
    }

    function h() {
      return this.state.page;
    }

    n(u, r.EventEmitter), u.prototype.search = function () {
      return this._search({
        onlyWithDerivedHelpers: !1
      }), this;
    }, u.prototype.searchOnlyWithDerivedHelpers = function () {
      return this._search({
        onlyWithDerivedHelpers: !0
      }), this;
    }, u.prototype.getQuery = function () {
      var e = this.state;
      return s._getHitsSearchParams(e);
    }, u.prototype.searchOnce = function (e, i) {
      var r = e ? this.state.setQueryParameters(e) : this.state,
          n = s._getQueries(r.index, r),
          a = this;

      if (this._currentNbQueries++, this.emit("searchOnce", {
        state: r
      }), !i) return this.client.search(n).then(function (e) {
        return a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), {
          content: new t(r, e.results),
          state: r,
          _originalResponse: e
        };
      }, function (e) {
        throw a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), e;
      });
      this.client.search(n).then(function (e) {
        a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), i(null, new t(r, e.results), r);
      }).catch(function (e) {
        a._currentNbQueries--, 0 === a._currentNbQueries && a.emit("searchQueueEmpty"), i(e, null, r);
      });
    }, u.prototype.searchForFacetValues = function (e, t, i, r) {
      var n = "function" == typeof this.client.searchForFacetValues;
      if (!n && "function" != typeof this.client.initIndex) throw new Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
      var a = this.state.setQueryParameters(r || {}),
          c = a.isDisjunctiveFacet(e),
          u = s.getSearchForFacetQuery(e, t, i, a);
      this._currentNbQueries++;
      var o = this;
      return this.emit("searchForFacetValues", {
        state: a,
        facet: e,
        query: t
      }), (n ? this.client.searchForFacetValues([{
        indexName: a.index,
        params: u
      }]) : this.client.initIndex(a.index).searchForFacetValues(u)).then(function (t) {
        return o._currentNbQueries--, 0 === o._currentNbQueries && o.emit("searchQueueEmpty"), (t = Array.isArray(t) ? t[0] : t).facetHits.forEach(function (t) {
          t.isRefined = c ? a.isDisjunctiveFacetRefined(e, t.value) : a.isFacetRefined(e, t.value);
        }), t;
      }, function (e) {
        throw o._currentNbQueries--, 0 === o._currentNbQueries && o.emit("searchQueueEmpty"), e;
      });
    }, u.prototype.setQuery = function (e) {
      return this._change({
        state: this.state.resetPage().setQuery(e),
        isPageReset: !0
      }), this;
    }, u.prototype.clearRefinements = function (e) {
      return this._change({
        state: this.state.resetPage().clearRefinements(e),
        isPageReset: !0
      }), this;
    }, u.prototype.clearTags = function () {
      return this._change({
        state: this.state.resetPage().clearTags(),
        isPageReset: !0
      }), this;
    }, u.prototype.addDisjunctiveFacetRefinement = function (e, t) {
      return this._change({
        state: this.state.resetPage().addDisjunctiveFacetRefinement(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.addDisjunctiveRefine = function () {
      return this.addDisjunctiveFacetRefinement.apply(this, arguments);
    }, u.prototype.addHierarchicalFacetRefinement = function (e, t) {
      return this._change({
        state: this.state.resetPage().addHierarchicalFacetRefinement(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.addNumericRefinement = function (e, t, i) {
      return this._change({
        state: this.state.resetPage().addNumericRefinement(e, t, i),
        isPageReset: !0
      }), this;
    }, u.prototype.addFacetRefinement = function (e, t) {
      return this._change({
        state: this.state.resetPage().addFacetRefinement(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.addRefine = function () {
      return this.addFacetRefinement.apply(this, arguments);
    }, u.prototype.addFacetExclusion = function (e, t) {
      return this._change({
        state: this.state.resetPage().addExcludeRefinement(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.addExclude = function () {
      return this.addFacetExclusion.apply(this, arguments);
    }, u.prototype.addTag = function (e) {
      return this._change({
        state: this.state.resetPage().addTagRefinement(e),
        isPageReset: !0
      }), this;
    }, u.prototype.removeNumericRefinement = function (e, t, i) {
      return this._change({
        state: this.state.resetPage().removeNumericRefinement(e, t, i),
        isPageReset: !0
      }), this;
    }, u.prototype.removeDisjunctiveFacetRefinement = function (e, t) {
      return this._change({
        state: this.state.resetPage().removeDisjunctiveFacetRefinement(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.removeDisjunctiveRefine = function () {
      return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
    }, u.prototype.removeHierarchicalFacetRefinement = function (e) {
      return this._change({
        state: this.state.resetPage().removeHierarchicalFacetRefinement(e),
        isPageReset: !0
      }), this;
    }, u.prototype.removeFacetRefinement = function (e, t) {
      return this._change({
        state: this.state.resetPage().removeFacetRefinement(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.removeRefine = function () {
      return this.removeFacetRefinement.apply(this, arguments);
    }, u.prototype.removeFacetExclusion = function (e, t) {
      return this._change({
        state: this.state.resetPage().removeExcludeRefinement(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.removeExclude = function () {
      return this.removeFacetExclusion.apply(this, arguments);
    }, u.prototype.removeTag = function (e) {
      return this._change({
        state: this.state.resetPage().removeTagRefinement(e),
        isPageReset: !0
      }), this;
    }, u.prototype.toggleFacetExclusion = function (e, t) {
      return this._change({
        state: this.state.resetPage().toggleExcludeFacetRefinement(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.toggleExclude = function () {
      return this.toggleFacetExclusion.apply(this, arguments);
    }, u.prototype.toggleRefinement = function (e, t) {
      return this.toggleFacetRefinement(e, t);
    }, u.prototype.toggleFacetRefinement = function (e, t) {
      return this._change({
        state: this.state.resetPage().toggleFacetRefinement(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.toggleRefine = function () {
      return this.toggleFacetRefinement.apply(this, arguments);
    }, u.prototype.toggleTag = function (e) {
      return this._change({
        state: this.state.resetPage().toggleTagRefinement(e),
        isPageReset: !0
      }), this;
    }, u.prototype.nextPage = function () {
      var e = this.state.page || 0;
      return this.setPage(e + 1);
    }, u.prototype.previousPage = function () {
      var e = this.state.page || 0;
      return this.setPage(e - 1);
    }, u.prototype.setCurrentPage = o, u.prototype.setPage = o, u.prototype.setIndex = function (e) {
      return this._change({
        state: this.state.resetPage().setIndex(e),
        isPageReset: !0
      }), this;
    }, u.prototype.setQueryParameter = function (e, t) {
      return this._change({
        state: this.state.resetPage().setQueryParameter(e, t),
        isPageReset: !0
      }), this;
    }, u.prototype.setState = function (t) {
      return this._change({
        state: e.make(t),
        isPageReset: !1
      }), this;
    }, u.prototype.overrideStateWithoutTriggeringChangeEvent = function (t) {
      return this.state = new e(t), this;
    }, u.prototype.hasRefinements = function (e) {
      return !!a(this.state.getNumericRefinements(e)) || (this.state.isConjunctiveFacet(e) ? this.state.isFacetRefined(e) : this.state.isDisjunctiveFacet(e) ? this.state.isDisjunctiveFacetRefined(e) : !!this.state.isHierarchicalFacet(e) && this.state.isHierarchicalFacetRefined(e));
    }, u.prototype.isExcluded = function (e, t) {
      return this.state.isExcludeRefined(e, t);
    }, u.prototype.isDisjunctiveRefined = function (e, t) {
      return this.state.isDisjunctiveFacetRefined(e, t);
    }, u.prototype.hasTag = function (e) {
      return this.state.isTagRefined(e);
    }, u.prototype.isTagRefined = function () {
      return this.hasTagRefinements.apply(this, arguments);
    }, u.prototype.getIndex = function () {
      return this.state.index;
    }, u.prototype.getCurrentPage = h, u.prototype.getPage = h, u.prototype.getTags = function () {
      return this.state.tagRefinements;
    }, u.prototype.getRefinements = function (e) {
      var t = [];
      if (this.state.isConjunctiveFacet(e)) this.state.getConjunctiveRefinements(e).forEach(function (e) {
        t.push({
          value: e,
          type: "conjunctive"
        });
      }), this.state.getExcludeRefinements(e).forEach(function (e) {
        t.push({
          value: e,
          type: "exclude"
        });
      });else if (this.state.isDisjunctiveFacet(e)) {
        this.state.getDisjunctiveRefinements(e).forEach(function (e) {
          t.push({
            value: e,
            type: "disjunctive"
          });
        });
      }
      var i = this.state.getNumericRefinements(e);
      return Object.keys(i).forEach(function (e) {
        var s = i[e];
        t.push({
          value: s,
          operator: e,
          type: "numeric"
        });
      }), t;
    }, u.prototype.getNumericRefinement = function (e, t) {
      return this.state.getNumericRefinement(e, t);
    }, u.prototype.getHierarchicalFacetBreadcrumb = function (e) {
      return this.state.getHierarchicalFacetBreadcrumb(e);
    }, u.prototype._search = function (e) {
      var t = this.state,
          i = [],
          r = [];
      e.onlyWithDerivedHelpers || (r = s._getQueries(t.index, t), i.push({
        state: t,
        queriesCount: r.length,
        helper: this
      }), this.emit("search", {
        state: t,
        results: this.lastResults
      }));
      var n = this.derivedHelpers.map(function (e) {
        var r = e.getModifiedState(t),
            n = s._getQueries(r.index, r);

        return i.push({
          state: r,
          queriesCount: n.length,
          helper: e
        }), e.emit("search", {
          state: r,
          results: e.lastResults
        }), n;
      }),
          a = Array.prototype.concat.apply(r, n),
          c = this._queryId++;
      this._currentNbQueries++;

      try {
        this.client.search(a).then(this._dispatchAlgoliaResponse.bind(this, i, c)).catch(this._dispatchAlgoliaError.bind(this, c));
      } catch (u) {
        this.emit("error", {
          error: u
        });
      }
    }, u.prototype._dispatchAlgoliaResponse = function (e, i, s) {
      if (!(i < this._lastQueryIdReceived)) {
        this._currentNbQueries -= i - this._lastQueryIdReceived, this._lastQueryIdReceived = i, 0 === this._currentNbQueries && this.emit("searchQueueEmpty");
        var r = s.results.slice();
        e.forEach(function (e) {
          var i = e.state,
              s = e.queriesCount,
              n = e.helper,
              a = r.splice(0, s),
              c = n.lastResults = new t(i, a);
          n.emit("result", {
            results: c,
            state: i
          });
        });
      }
    }, u.prototype._dispatchAlgoliaError = function (e, t) {
      e < this._lastQueryIdReceived || (this._currentNbQueries -= e - this._lastQueryIdReceived, this._lastQueryIdReceived = e, this.emit("error", {
        error: t
      }), 0 === this._currentNbQueries && this.emit("searchQueueEmpty"));
    }, u.prototype.containsRefinement = function (e, t, i, s) {
      return e || 0 !== t.length || 0 !== i.length || 0 !== s.length;
    }, u.prototype._hasDisjunctiveRefinements = function (e) {
      return this.state.disjunctiveRefinements[e] && this.state.disjunctiveRefinements[e].length > 0;
    }, u.prototype._change = function (e) {
      var t = e.state,
          i = e.isPageReset;
      t !== this.state && (this.state = t, this.emit("change", {
        state: this.state,
        results: this.lastResults,
        isPageReset: i
      }));
    }, u.prototype.clearCache = function () {
      return this.client.clearCache && this.client.clearCache(), this;
    }, u.prototype.setClient = function (e) {
      return this.client === e ? this : ("function" == typeof e.addAlgoliaAgent && e.addAlgoliaAgent("JS Helper (" + c + ")"), this.client = e, this);
    }, u.prototype.getClient = function () {
      return this.client;
    }, u.prototype.derive = function (e) {
      var t = new i(this, e);
      return this.derivedHelpers.push(t), t;
    }, u.prototype.detachDerivedHelper = function (e) {
      var t = this.derivedHelpers.indexOf(e);
      if (-1 === t) throw new Error("Derived helper already detached");
      this.derivedHelpers.splice(t, 1);
    }, u.prototype.hasPendingRequests = function () {
      return this._currentNbQueries > 0;
    }, module.exports = u;
  }, {
    "./SearchParameters": "e3rE",
    "./SearchResults": "KDjX",
    "./DerivedHelper": "wJQX",
    "./requestBuilder": "zWZ5",
    "events": "K1mi",
    "./functions/inherits": "kUY2",
    "./functions/objectHasKeys": "Qyh6",
    "./version": "l7RC"
  }],
  "W0rk": [function (require, module, exports) {
    "use strict";

    var e = require("./src/algoliasearch.helper"),
        r = require("./src/SearchParameters"),
        s = require("./src/SearchResults");

    function a(r, s, a) {
      return new e(r, s, a);
    }

    a.version = require("./src/version.js"), a.AlgoliaSearchHelper = e, a.SearchParameters = r, a.SearchResults = s, module.exports = a;
  }, {
    "./src/algoliasearch.helper": "Vml6",
    "./src/SearchParameters": "e3rE",
    "./src/SearchResults": "KDjX",
    "./src/version.js": "l7RC"
  }],
  "dyXC": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e.toString().charAt(0).toUpperCase() + e.toString().slice(1);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "GgfU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = Promise.resolve(),
        n = function n(_n2) {
      var r = null,
          l = !1,
          t = function t() {
        for (var t = arguments.length, o = new Array(t), u = 0; u < t; u++) {
          o[u] = arguments[u];
        }

        null === r && (r = e.then(function () {
          r = null, l ? l = !1 : _n2.apply(void 0, o);
        }));
      };

      return t.wait = function () {
        if (null === r) throw new Error("The deferred function should be called before calling `wait()`");
        return r;
      }, t.cancel = function () {
        null !== r && (l = !0);
      }, t;
    },
        r = n;

    exports.default = r;
  }, {}],
  "PN79": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e instanceof HTMLElement || Boolean(e) && e.nodeType > 0;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "Qn4V": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./isDomElement"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t) {
      var r = "string" == typeof t,
          o = r ? document.querySelector(t) : t;

      if (!(0, e.default)(o)) {
        var n = "Container must be `string` or `HTMLElement`.";
        throw r && (n += " Unable to find ".concat(t)), new Error(n);
      }

      return o;
    }

    var o = r;
    exports.default = o;
  }, {
    "./isDomElement": "PN79"
  }],
  "Ehcd": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return 1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "slZX": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e.filter(function (e, t, r) {
        return r.indexOf(e) === t;
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "TzTQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./uniq"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function n(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? r(Object(n), !0).forEach(function (t) {
          o(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function o(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function i(e) {
      return a(e) || c(e) || u();
    }

    function u() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function c(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function a(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }

        return r;
      }
    }

    function l() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return (0, e.default)([].concat(i(Object.keys(t)), i(Object.keys(r)))).reduce(function (e, n) {
        var o = t[n],
            i = r[n],
            u = void 0 !== i && i !== o;
        return e.templates[n] = u ? i : o, e.useCustomCompileOptions[n] = u, e;
      }, {
        templates: {},
        useCustomCompileOptions: {}
      });
    }

    function s(e) {
      var t = e.defaultTemplates,
          r = e.templates;
      return n({
        templatesConfig: e.templatesConfig
      }, l(t, r));
    }

    var f = s;
    exports.default = f;
  }, {
    "./uniq": "slZX"
  }],
  "PYCQ": [function (require, module, exports) {
    !function (t) {
      var n = /\S/,
          r = /\"/g,
          e = /\n/g,
          a = /\r/g,
          i = /\\/g,
          s = /\u2028/,
          c = /\u2029/;

      function o(t) {
        "}" === t.n.substr(t.n.length - 1) && (t.n = t.n.substring(0, t.n.length - 1));
      }

      function u(t) {
        return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "");
      }

      function l(t, n, r) {
        if (n.charAt(r) != t.charAt(0)) return !1;

        for (var e = 1, a = t.length; e < a; e++) {
          if (n.charAt(r + e) != t.charAt(e)) return !1;
        }

        return !0;
      }

      t.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        $: 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        _v: 9,
        "{": 10,
        "&": 11,
        _t: 12
      }, t.scan = function (r, e) {
        var a = r.length,
            i = 0,
            s = null,
            c = null,
            f = "",
            g = [],
            p = !1,
            h = 0,
            d = 0,
            v = "{{",
            m = "}}";

        function b() {
          f.length > 0 && (g.push({
            tag: "_t",
            text: new String(f)
          }), f = "");
        }

        function w(r, e) {
          if (b(), r && function () {
            for (var r = !0, e = d; e < g.length; e++) {
              if (!(r = t.tags[g[e].tag] < t.tags._v || "_t" == g[e].tag && null === g[e].text.match(n))) return !1;
            }

            return r;
          }()) for (var a, i = d; i < g.length; i++) {
            g[i].text && ((a = g[i + 1]) && ">" == a.tag && (a.indent = g[i].text.toString()), g.splice(i, 1));
          } else e || g.push({
            tag: "\n"
          });
          p = !1, d = g.length;
        }

        function x(t, n) {
          var r = "=" + m,
              e = t.indexOf(r, n),
              a = u(t.substring(t.indexOf("=", n) + 1, e)).split(" ");
          return v = a[0], m = a[a.length - 1], e + r.length - 1;
        }

        for (e && (e = e.split(" "), v = e[0], m = e[1]), h = 0; h < a; h++) {
          0 == i ? l(v, r, h) ? (--h, b(), i = 1) : "\n" == r.charAt(h) ? w(p) : f += r.charAt(h) : 1 == i ? (h += v.length - 1, "=" == (s = (c = t.tags[r.charAt(h + 1)]) ? r.charAt(h + 1) : "_v") ? (h = x(r, h), i = 0) : (c && h++, i = 2), p = h) : l(m, r, h) ? (g.push({
            tag: s,
            n: u(f),
            otag: v,
            ctag: m,
            i: "/" == s ? p - v.length : h + m.length
          }), f = "", h += m.length - 1, i = 0, "{" == s && ("}}" == m ? h++ : o(g[g.length - 1]))) : f += r.charAt(h);
        }

        return w(p, !0), g;
      };
      var f = {
        _t: !0,
        "\n": !0,
        $: !0,
        "/": !0
      };

      function g(t, n) {
        for (var r = 0, e = n.length; r < e; r++) {
          if (n[r].o == t.n) return t.tag = "#", !0;
        }
      }

      function p(t, n, r) {
        for (var e = 0, a = r.length; e < a; e++) {
          if (r[e].c == t && r[e].o == n) return !0;
        }
      }

      function h(t) {
        var n = [];

        for (var r in t.partials) {
          n.push('"' + v(r) + '":{name:"' + v(t.partials[r].name) + '", ' + h(t.partials[r]) + "}");
        }

        return "partials: {" + n.join(",") + "}, subs: " + function (t) {
          var n = [];

          for (var r in t) {
            n.push('"' + v(r) + '": function(c,p,t,i) {' + t[r] + "}");
          }

          return "{ " + n.join(",") + " }";
        }(t.subs);
      }

      t.stringify = function (n, r, e) {
        return "{code: function (c,p,i) { " + t.wrapMain(n.code) + " }," + h(n) + "}";
      };

      var d = 0;

      function v(t) {
        return t.replace(i, "\\\\").replace(r, '\\"').replace(e, "\\n").replace(a, "\\r").replace(s, "\\u2028").replace(c, "\\u2029");
      }

      function m(t) {
        return ~t.indexOf(".") ? "d" : "f";
      }

      function b(t, n) {
        var r = "<" + (n.prefix || "") + t.n + d++;
        return n.partials[r] = {
          name: t.n,
          partials: {}
        }, n.code += 't.b(t.rp("' + v(r) + '",c,p,"' + (t.indent || "") + '"));', r;
      }

      function w(t, n) {
        n.code += "t.b(t.t(t." + m(t.n) + '("' + v(t.n) + '",c,p,0)));';
      }

      function x(t) {
        return "t.b(" + t + ");";
      }

      t.generate = function (n, r, e) {
        d = 0;
        var a = {
          code: "",
          subs: {},
          partials: {}
        };
        return t.walk(n, a), e.asString ? this.stringify(a, r, e) : this.makeTemplate(a, r, e);
      }, t.wrapMain = function (t) {
        return 'var t=this;t.b(i=i||"");' + t + "return t.fl();";
      }, t.template = t.Template, t.makeTemplate = function (t, n, r) {
        var e = this.makePartials(t);
        return e.code = new Function("c", "p", "i", this.wrapMain(t.code)), new this.template(e, n, this, r);
      }, t.makePartials = function (t) {
        var n,
            r = {
          subs: {},
          partials: t.partials,
          name: t.name
        };

        for (n in r.partials) {
          r.partials[n] = this.makePartials(r.partials[n]);
        }

        for (n in t.subs) {
          r.subs[n] = new Function("c", "p", "t", "i", t.subs[n]);
        }

        return r;
      }, t.codegen = {
        "#": function _(n, r) {
          r.code += "if(t.s(t." + m(n.n) + '("' + v(n.n) + '",c,p,1),c,p,0,' + n.i + "," + n.end + ',"' + n.otag + " " + n.ctag + '")){t.rs(c,p,function(c,p,t){', t.walk(n.nodes, r), r.code += "});c.pop();}";
        },
        "^": function _(n, r) {
          r.code += "if(!t.s(t." + m(n.n) + '("' + v(n.n) + '",c,p,1),c,p,1,0,0,"")){', t.walk(n.nodes, r), r.code += "};";
        },
        ">": b,
        "<": function _(n, r) {
          var e = {
            partials: {},
            code: "",
            subs: {},
            inPartial: !0
          };
          t.walk(n.nodes, e);
          var a = r.partials[b(n, r)];
          a.subs = e.subs, a.partials = e.partials;
        },
        $: function $(n, r) {
          var e = {
            subs: {},
            code: "",
            partials: r.partials,
            prefix: n.n
          };
          t.walk(n.nodes, e), r.subs[n.n] = e.code, r.inPartial || (r.code += 't.sub("' + v(n.n) + '",c,p,i);');
        },
        "\n": function _(t, n) {
          n.code += x('"\\n"' + (t.last ? "" : " + i"));
        },
        _v: function _v(t, n) {
          n.code += "t.b(t.v(t." + m(t.n) + '("' + v(t.n) + '",c,p,0)));';
        },
        _t: function _t(t, n) {
          n.code += x('"' + v(t.text) + '"');
        },
        "{": w,
        "&": w
      }, t.walk = function (n, r) {
        for (var e, a = 0, i = n.length; a < i; a++) {
          (e = t.codegen[n[a].tag]) && e(n[a], r);
        }

        return r;
      }, t.parse = function (n, r, e) {
        return function n(r, e, a, i) {
          var s,
              c = [],
              o = null,
              u = null;

          for (s = a[a.length - 1]; r.length > 0;) {
            if (u = r.shift(), s && "<" == s.tag && !(u.tag in f)) throw new Error("Illegal content in < super tag.");
            if (t.tags[u.tag] <= t.tags.$ || g(u, i)) a.push(u), u.nodes = n(r, u.tag, a, i);else {
              if ("/" == u.tag) {
                if (0 === a.length) throw new Error("Closing tag without opener: /" + u.n);
                if (o = a.pop(), u.n != o.n && !p(u.n, o.n, i)) throw new Error("Nesting error: " + o.n + " vs. " + u.n);
                return o.end = u.i, c;
              }

              "\n" == u.tag && (u.last = 0 == r.length || "\n" == r[0].tag);
            }
            c.push(u);
          }

          if (a.length > 0) throw new Error("missing closing tag: " + a.pop().n);
          return c;
        }(n, 0, [], (e = e || {}).sectionTags || []);
      }, t.cache = {}, t.cacheKey = function (t, n) {
        return [t, !!n.asString, !!n.disableLambda, n.delimiters, !!n.modelGet].join("||");
      }, t.compile = function (n, r) {
        r = r || {};
        var e = t.cacheKey(n, r),
            a = this.cache[e];

        if (a) {
          var i = a.partials;

          for (var s in i) {
            delete i[s].instance;
          }

          return a;
        }

        return a = this.generate(this.parse(this.scan(n, r.delimiters), n, r), n, r), this.cache[e] = a;
      };
    }("undefined" != typeof exports ? exports : Hogan);
  }, {}],
  "yZ2H": [function (require, module, exports) {
    var t = {};
    !function (t) {
      function i(t, i, s) {
        var e;
        return i && "object" == _typeof(i) && (void 0 !== i[t] ? e = i[t] : s && i.get && "function" == typeof i.get && (e = i.get(t))), e;
      }

      t.Template = function (t, i, s, e) {
        t = t || {}, this.r = t.code || this.r, this.c = s, this.options = e || {}, this.text = i || "", this.partials = t.partials || {}, this.subs = t.subs || {}, this.buf = "";
      }, t.Template.prototype = {
        r: function r(t, i, s) {
          return "";
        },
        v: function v(t) {
          return t = a(t), u.test(t) ? t.replace(s, "&amp;").replace(e, "&lt;").replace(n, "&gt;").replace(r, "&#39;").replace(o, "&quot;") : t;
        },
        t: a,
        render: function render(t, i, s) {
          return this.ri([t], i || {}, s);
        },
        ri: function ri(t, i, s) {
          return this.r(t, i, s);
        },
        ep: function ep(t, i) {
          var s = this.partials[t],
              e = i[s.name];
          if (s.instance && s.base == e) return s.instance;

          if ("string" == typeof e) {
            if (!this.c) throw new Error("No compiler available.");
            e = this.c.compile(e, this.options);
          }

          if (!e) return null;

          if (this.partials[t].base = e, s.subs) {
            for (key in i.stackText || (i.stackText = {}), s.subs) {
              i.stackText[key] || (i.stackText[key] = void 0 !== this.activeSub && i.stackText[this.activeSub] ? i.stackText[this.activeSub] : this.text);
            }

            e = function (t, i, s, e, n, r) {
              function o() {}

              function u() {}

              var a;
              o.prototype = t, u.prototype = t.subs;
              var c = new o();

              for (a in c.subs = new u(), c.subsText = {}, c.buf = "", e = e || {}, c.stackSubs = e, c.subsText = r, i) {
                e[a] || (e[a] = i[a]);
              }

              for (a in e) {
                c.subs[a] = e[a];
              }

              for (a in n = n || {}, c.stackPartials = n, s) {
                n[a] || (n[a] = s[a]);
              }

              for (a in n) {
                c.partials[a] = n[a];
              }

              return c;
            }(e, s.subs, s.partials, this.stackSubs, this.stackPartials, i.stackText);
          }

          return this.partials[t].instance = e, e;
        },
        rp: function rp(t, i, s, e) {
          var n = this.ep(t, s);
          return n ? n.ri(i, s, e) : "";
        },
        rs: function rs(t, i, s) {
          var e = t[t.length - 1];
          if (c(e)) for (var n = 0; n < e.length; n++) {
            t.push(e[n]), s(t, i, this), t.pop();
          } else s(t, i, this);
        },
        s: function s(t, i, _s, e, n, r, o) {
          var u;
          return (!c(t) || 0 !== t.length) && ("function" == typeof t && (t = this.ms(t, i, _s, e, n, r, o)), u = !!t, !e && u && i && i.push("object" == _typeof(t) ? t : i[i.length - 1]), u);
        },
        d: function d(t, s, e, n) {
          var r,
              o = t.split("."),
              u = this.f(o[0], s, e, n),
              a = this.options.modelGet,
              h = null;
          if ("." === t && c(s[s.length - 2])) u = s[s.length - 1];else for (var f = 1; f < o.length; f++) {
            void 0 !== (r = i(o[f], u, a)) ? (h = u, u = r) : u = "";
          }
          return !(n && !u) && (n || "function" != typeof u || (s.push(h), u = this.mv(u, s, e), s.pop()), u);
        },
        f: function f(t, s, e, n) {
          for (var r = !1, o = !1, u = this.options.modelGet, a = s.length - 1; a >= 0; a--) {
            if (void 0 !== (r = i(t, s[a], u))) {
              o = !0;
              break;
            }
          }

          return o ? (n || "function" != typeof r || (r = this.mv(r, s, e)), r) : !n && "";
        },
        ls: function ls(t, i, s, e, n) {
          var r = this.options.delimiters;
          return this.options.delimiters = n, this.b(this.ct(a(t.call(i, e)), i, s)), this.options.delimiters = r, !1;
        },
        ct: function ct(t, i, s) {
          if (this.options.disableLambda) throw new Error("Lambda features disabled.");
          return this.c.compile(t, this.options).render(i, s);
        },
        b: function b(t) {
          this.buf += t;
        },
        fl: function fl() {
          var t = this.buf;
          return this.buf = "", t;
        },
        ms: function ms(t, i, s, e, n, r, o) {
          var u,
              a = i[i.length - 1],
              c = t.call(a);
          return "function" == typeof c ? !!e || (u = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text, this.ls(c, a, s, u.substring(n, r), o)) : c;
        },
        mv: function mv(t, i, s) {
          var e = i[i.length - 1],
              n = t.call(e);
          return "function" == typeof n ? this.ct(a(n.call(e)), e, s) : n;
        },
        sub: function sub(t, i, s, e) {
          var n = this.subs[t];
          n && (this.activeSub = t, n(i, s, this, e), this.activeSub = !1);
        }
      };
      var s = /&/g,
          e = /</g,
          n = />/g,
          r = /\'/g,
          o = /\"/g,
          u = /[&<>\"\']/;

      function a(t) {
        return String(null == t ? "" : t);
      }

      var c = Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };
    }("undefined" != typeof exports ? exports : t);
  }, {}],
  "TehX": [function (require, module, exports) {
    var e = require("./compiler");

    e.Template = require("./template").Template, e.template = e.Template, module.exports = e;
  }, {
    "./compiler": "PYCQ",
    "./template": "yZ2H"
  }],
  "NULW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("hogan.js"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function n(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? n(Object(r), !0).forEach(function (t) {
          c(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function c(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function u() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = arguments.length > 1 ? arguments[1] : void 0,
          n = arguments.length > 2 ? arguments[2] : void 0;
      return Object.keys(t).reduce(function (u, i) {
        return o({}, u, c({}, i, function () {
          var o = this;
          return function (c) {
            return t[i].call(n, c, function (t) {
              return e.default.compile(t, r).render(o);
            });
          };
        }));
      }, {});
    }

    function i(t) {
      var n = t.templates,
          c = t.templateKey,
          i = t.compileOptions,
          f = t.helpers,
          l = t.data,
          p = t.bindEvent,
          a = n[c],
          s = r(a),
          b = "function" === s;
      if (!("string" === s) && !b) throw new Error("Template must be 'string' or 'function', was '".concat(s, "' (key: ").concat(c, ")"));
      if (b) return a(l, p);
      var y = u(f, i, l);
      return e.default.compile(a, i).render(o({}, l, {
        helpers: y
      })).replace(/[ \n\r\t\f\xA0]+/g, function (e) {
        return e.replace(/(^|\xA0+)[^\xA0]+/g, "$1 ");
      }).trim();
    }

    var f = i;
    exports.default = f;
  }, {
    "hogan.js": "TehX"
  }],
  "hpgY": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      for (var r, o = 0; o < e.length; o++) {
        if (t(r = e[o], o, e)) return r;
      }
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "OpW4": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return String(e).replace(/^\\-/, "-");
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "CCoh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = a(require("./find")),
        t = a(require("./unescapeRefinement"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(t, a, n, r) {
      var c,
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
          u = {
        type: a,
        attribute: n,
        name: r
      },
          o = (0, e.default)(i, function (e) {
        return e.name === n;
      });
      "hierarchical" === a ? function () {
        for (var a = t.getHierarchicalFacetByName(n), i = r.split(a.separator), u = function u(t) {
          var a;
          o = o && o.data && (0, e.default)(Object.keys(o.data).map((a = o.data, function (e) {
            return a[e];
          })), function (e) {
            return e.name === i[t];
          });
        }, f = 0; void 0 !== o && f < i.length; ++f) {
          u(f);
        }

        c = o && o.count;
      }() : c = o && o.data && o.data[u.name];
      var f = o && o.exhaustive;
      return void 0 !== c && (u.count = c), void 0 !== f && (u.exhaustive = f), u;
    }

    function r(e, a) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          c = [],
          i = a.facetsRefinements,
          u = void 0 === i ? {} : i,
          o = a.facetsExcludes,
          f = void 0 === o ? {} : o,
          s = a.disjunctiveFacetsRefinements,
          d = void 0 === s ? {} : s,
          h = a.hierarchicalFacetsRefinements,
          v = void 0 === h ? {} : h,
          y = a.numericRefinements,
          l = void 0 === y ? {} : y,
          p = a.tagRefinements,
          m = void 0 === p ? [] : p;
      return Object.keys(u).forEach(function (t) {
        u[t].forEach(function (r) {
          c.push(n(a, "facet", t, r, e.facets));
        });
      }), Object.keys(f).forEach(function (e) {
        f[e].forEach(function (t) {
          c.push({
            type: "exclude",
            attribute: e,
            name: t,
            exclude: !0
          });
        });
      }), Object.keys(d).forEach(function (r) {
        d[r].forEach(function (i) {
          c.push(n(a, "disjunctive", r, (0, t.default)(i), e.disjunctiveFacets));
        });
      }), Object.keys(v).forEach(function (t) {
        v[t].forEach(function (r) {
          c.push(n(a, "hierarchical", t, r, e.hierarchicalFacets));
        });
      }), Object.keys(l).forEach(function (e) {
        var t = l[e];
        Object.keys(t).forEach(function (a) {
          var n = a,
              r = t[n];
          (Array.isArray(r) ? r : [r]).forEach(function (t) {
            c.push({
              type: "numeric",
              attribute: e,
              name: "".concat(t),
              numericValue: t,
              operator: n
            });
          });
        });
      }), m.forEach(function (e) {
        c.push({
          type: "tag",
          attribute: "_tags",
          name: e
        });
      }), r && a.query && a.query.trim() && c.push({
        attribute: "query",
        type: "query",
        name: a.query,
        query: a.query
      }), c;
    }

    var c = r;
    exports.default = c;
  }, {
    "./find": "hpgY",
    "./unescapeRefinement": "OpW4"
  }],
  "soRO": [function (require, module, exports) {
    "use strict";

    function e(e) {
      var t = e.helper,
          i = e.attributesToClear,
          r = void 0 === i ? [] : i,
          n = t.state.setPage(0);
      return n = r.reduce(function (e, t) {
        return n.isNumericRefined(t) ? e.removeNumericRefinement(t) : n.isHierarchicalFacet(t) ? e.removeHierarchicalFacetRefinement(t) : n.isDisjunctiveFacet(t) ? e.removeDisjunctiveFacetRefinement(t) : n.isConjunctiveFacet(t) ? e.removeFacetRefinement(t) : e;
      }, n), -1 !== r.indexOf("query") && (n = n.setQuery("")), n;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "Pows": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return "number" == typeof e && e < 0 && (e = String(e).replace(/^-/, "\\-")), e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "LOkA": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "ABPc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = t(require("./getObjectType"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(t, r) {
      if (void 0 === t || "function" != typeof t) throw new Error("The render function is not valid (received type ".concat((0, e.default)(t), ").\n\n").concat(r));
    }

    var o = r;
    exports.default = o;
  }, {
    "./getObjectType": "LOkA"
  }],
  "H3DA": [function (require, module, exports) {
    "use strict";

    function e() {}

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "eYTm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.warning = exports.deprecate = exports.warn = void 0;
    var e = r(require("./noop"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var t = function t(e) {
      return e;
    };

    exports.deprecate = t;
    var o = e.default;
    exports.warn = o;
    var a = e.default;
    exports.warning = a;
  }, {
    "./noop": "H3DA"
  }],
  "rAho": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.checkIndexUiState = d;

    var e = t(require("./capitalize")),
        n = require("./logger");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r(e) {
      return o(e) || c(e) || i();
    }

    function i() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function c(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function o(e) {
      if (Array.isArray(e)) {
        for (var n = 0, t = new Array(e.length); n < e.length; n++) {
          t[n] = e[n];
        }

        return t;
      }
    }

    function a(e, n) {
      return g(e) || u(e, n) || s();
    }

    function s() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function u(e, n) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var t = [],
            r = !0,
            i = !1,
            c = void 0;

        try {
          for (var o, a = e[Symbol.iterator](); !(r = (o = a.next()).done) && (t.push(o.value), !n || t.length !== n); r = !0) {
            ;
          }
        } catch (s) {
          i = !0, c = s;
        } finally {
          try {
            r || null == a.return || a.return();
          } finally {
            if (i) throw c;
          }
        }

        return t;
      }
    }

    function g(e) {
      if (Array.isArray(e)) return e;
    }

    function l(e) {
      switch (e) {
        case "range":
          return [];

        case "menu":
          return ["menu", "menuSelect"];

        default:
          return [e];
      }
    }

    var f = {
      query: {
        connectors: ["connectSearchBox"],
        widgets: ["ais.searchBox", "ais.autocomplete", "ais.voiceSearch"]
      },
      refinementList: {
        connectors: ["connectRefinementList"],
        widgets: ["ais.refinementList"]
      },
      menu: {
        connectors: ["connectMenu"],
        widgets: ["ais.menu"]
      },
      hierarchicalMenu: {
        connectors: ["connectHierarchicalMenu"],
        widgets: ["ais.hierarchicalMenu"]
      },
      numericMenu: {
        connectors: ["connectNumericMenu"],
        widgets: ["ais.numericMenu"]
      },
      ratingMenu: {
        connectors: ["connectRatingMenu"],
        widgets: ["ais.ratingMenu"]
      },
      range: {
        connectors: ["connectRange"],
        widgets: ["ais.rangeInput", "ais.rangeSlider", "ais.range"]
      },
      toggle: {
        connectors: ["connectToggleRefinement"],
        widgets: ["ais.toggleRefinement"]
      },
      geoSearch: {
        connectors: ["connectGeoSearch"],
        widgets: ["ais.geoSearch"]
      },
      sortBy: {
        connectors: ["connectSortBy"],
        widgets: ["ais.sortBy"]
      },
      page: {
        connectors: ["connectPagination"],
        widgets: ["ais.pagination", "ais.infiniteHits"]
      },
      hitsPerPage: {
        connectors: ["connectHitsPerPage"],
        widgets: ["ais.hitsPerPage"]
      },
      configure: {
        connectors: ["connectConfigure"],
        widgets: ["ais.configure"]
      },
      places: {
        connectors: [],
        widgets: ["ais.places"]
      }
    };

    function d(e) {
      var n = e.index,
          t = e.indexUiState,
          r = n.getWidgets().map(function (e) {
        return e.$$type;
      }).filter(Boolean);
      Object.keys(t).reduce(function (e, n) {
        var t = f[n] && f[n].widgets;
        return t && !t.some(function (e) {
          return r.includes(e);
        }) && e.push([n, {
          connectors: f[n].connectors,
          widgets: f[n].widgets.map(function (e) {
            return e.split("ais.")[1];
          })
        }]), e;
      }, []);
    }
  }, {
    "./capitalize": "dyXC",
    "./logger": "eYTm"
  }],
  "x2eU": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      return (Array.isArray(r) ? r : r.split(".")).reduce(function (e, r) {
        return e && e[r];
      }, e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var r = e;
    exports.default = r;
  }, {}],
  "F5eQ": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return "number" == typeof e && isFinite(e);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = e;
    exports.default = t;
  }, {}],
  "KB1v": [function (require, module, exports) {
    "use strict";

    function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(e);
    }

    function e(t) {
      return null === t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
    }

    function o(e) {
      return "object" === t(e) && null !== e;
    }

    function r(t) {
      if (!o(t) || "[object Object]" !== e(t)) return !1;
      if (null === Object.getPrototypeOf(t)) return !0;

      for (var r = t; null !== Object.getPrototypeOf(r);) {
        r = Object.getPrototypeOf(r);
      }

      return Object.getPrototypeOf(t) === r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var n = r;
    exports.default = n;
  }, {}],
  "cOH8": [function (require, module, exports) {
    "use strict";

    function r(r) {
      return n(r) || e(r) || t();
    }

    function t() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function e(r) {
      if (Symbol.iterator in Object(r) || "[object Arguments]" === Object.prototype.toString.call(r)) return Array.from(r);
    }

    function n(r) {
      if (Array.isArray(r)) {
        for (var t = 0, e = new Array(r.length); t < r.length; t++) {
          e[t] = r[t];
        }

        return e;
      }
    }

    function o(t) {
      var e = t.start,
          n = void 0 === e ? 0 : e,
          o = t.end,
          a = t.step,
          i = void 0 === a ? 1 : a,
          u = 0 === i ? 1 : i,
          c = Math.round((o - n) / u);
      return r(Array(c)).map(function (r, t) {
        return n + t * u;
      });
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var a = o;
    exports.default = a;
  }, {}],
  "NeG8": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return e !== Object(e);
    }

    function t(r, n) {
      if (r === n) return !0;
      if (e(r) || e(n) || "function" == typeof r || "function" == typeof n) return r === n;
      if (Object.keys(r).length !== Object.keys(n).length) return !1;

      for (var u = 0, f = Object.keys(r); u < f.length; u++) {
        var i = f[u];
        if (!(i in n)) return !1;
        if (!t(r[i], n[i])) return !1;
      }

      return !0;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var r = t;
    exports.default = r;
  }, {}],
  "zzoW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    },
        t = /[&<>"']/g,
        r = RegExp(t.source);

    function u(u) {
      return u && r.test(u) ? u.replace(t, function (t) {
        return e[t];
      }) : u;
    }

    var o = u;
    exports.default = o;
  }, {}],
  "I9N8": [function (require, module, exports) {
    "use strict";

    function r(r, e) {
      if (!Array.isArray(r)) return -1;

      for (var t = 0; t < r.length; t++) {
        if (e(r[t])) return t;
      }

      return -1;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r;
    exports.default = e;
  }, {}],
  "UZG8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = r(require("./findIndex")),
        t = r(require("./uniq"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? n(Object(r), !0).forEach(function (t) {
          i(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function i(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function a(e, t) {
      if (null == e) return {};
      var r,
          n,
          c = s(e, t);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);

        for (n = 0; n < i.length; n++) {
          r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (c[r] = e[r]);
        }
      }

      return c;
    }

    function s(e, t) {
      if (null == e) return {};
      var r,
          n,
          c = {},
          i = Object.keys(e);

      for (n = 0; n < i.length; n++) {
        r = i[n], t.indexOf(r) >= 0 || (c[r] = e[r]);
      }

      return c;
    }

    var u = function u(e, t) {
      t.facets, t.disjunctiveFacets, t.facetsRefinements, t.facetsExcludes, t.disjunctiveFacetsRefinements, t.numericRefinements, t.tagRefinements, t.hierarchicalFacets, t.hierarchicalFacetsRefinements, t.ruleContexts;
      var r = a(t, ["facets", "disjunctiveFacets", "facetsRefinements", "facetsExcludes", "disjunctiveFacetsRefinements", "numericRefinements", "tagRefinements", "hierarchicalFacets", "hierarchicalFacetsRefinements", "ruleContexts"]);
      return e.setQueryParameters(r);
    },
        f = function f(e, t) {
      return t.facets.reduce(function (e, t) {
        return e.addFacet(t);
      }, e);
    },
        o = function o(e, t) {
      return t.disjunctiveFacets.reduce(function (e, t) {
        return e.addDisjunctiveFacet(t);
      }, e);
    },
        l = function l(t, r) {
      return t.setQueryParameters({
        hierarchicalFacets: r.hierarchicalFacets.reduce(function (t, r) {
          var n = (0, e.default)(t, function (e) {
            return e.name === r.name;
          });
          if (-1 === n) return t.concat(r);
          var c = t.slice();
          return c.splice(n, 1, r), c;
        }, t.hierarchicalFacets)
      });
    },
        m = function m(e, t) {
      return t.tagRefinements.reduce(function (e, t) {
        return e.addTagRefinement(t);
      }, e);
    },
        d = function d(e, t) {
      return e.setQueryParameters({
        facetsRefinements: c({}, e.facetsRefinements, {}, t.facetsRefinements)
      });
    },
        y = function y(e, t) {
      return e.setQueryParameters({
        facetsExcludes: c({}, e.facetsExcludes, {}, t.facetsExcludes)
      });
    },
        h = function h(e, t) {
      return e.setQueryParameters({
        disjunctiveFacetsRefinements: c({}, e.disjunctiveFacetsRefinements, {}, t.disjunctiveFacetsRefinements)
      });
    },
        p = function p(e, t) {
      return e.setQueryParameters({
        numericRefinements: c({}, e.numericRefinements, {}, t.numericRefinements)
      });
    },
        v = function v(e, t) {
      return e.setQueryParameters({
        hierarchicalFacetsRefinements: c({}, e.hierarchicalFacetsRefinements, {}, t.hierarchicalFacetsRefinements)
      });
    },
        O = function O(e, r) {
      var n = (0, t.default)([].concat(e.ruleContexts).concat(r.ruleContexts).filter(Boolean));
      return n.length > 0 ? e.setQueryParameters({
        ruleContexts: n
      }) : e;
    },
        b = function b() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
      }

      return t.reduce(function (e, t) {
        var r = v(e, t),
            n = l(r, t),
            c = m(n, t),
            i = p(c, t),
            a = h(i, t),
            s = y(a, t),
            b = d(s, t),
            j = o(b, t),
            R = O(j, t),
            F = f(R, t);
        return u(F, t);
      });
    },
        j = b;

    exports.default = j;
  }, {
    "./findIndex": "I9N8",
    "./uniq": "slZX"
  }],
  "wrSk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = function e(_e) {
      for (var t = _e.getParent(), r = [_e.getHelper().state]; null !== t;) {
        r = [t.getHelper().state].concat(r), t = t.getParent();
      }

      return r;
    },
        t = e;

    exports.default = t;
  }, {}],
  "SZxY": [function (require, module, exports) {
    "use strict";

    function e(e) {
      return Array.isArray(e) ? e : [e];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var r = e;
    exports.default = r;
  }, {}],
  "WSY6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.createDocumentationMessageGenerator = exports.createDocumentationLink = void 0;

    var e = function e(_e2) {
      var n = _e2.name,
          t = _e2.connector;
      return ["https://www.algolia.com/doc/api-reference/widgets/", n, "/js/", void 0 !== t && t ? "#connector" : ""].join("");
    };

    exports.createDocumentationLink = e;

    var n = function n() {
      for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++) {
        t[o] = arguments[o];
      }

      var r = t.map(function (n) {
        return e(n);
      }).join(", ");
      return function (e) {
        return [e, "See documentation: ".concat(r)].filter(Boolean).join("\n\n");
      };
    };

    exports.createDocumentationMessageGenerator = n;
  }, {}],
  "daJR": [function (require, module, exports) {
    "use strict";

    function r(r, e) {
      return o(r) || t(r, e) || n();
    }

    function n() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function t(r, n) {
      if (Symbol.iterator in Object(r) || "[object Arguments]" === Object.prototype.toString.call(r)) {
        var t = [],
            o = !0,
            e = !1,
            i = void 0;

        try {
          for (var a, u = r[Symbol.iterator](); !(o = (a = u.next()).done) && (t.push(a.value), !n || t.length !== n); o = !0) {
            ;
          }
        } catch (l) {
          e = !0, i = l;
        } finally {
          try {
            o || null == u.return || u.return();
          } finally {
            if (e) throw i;
          }
        }

        return t;
      }
    }

    function o(r) {
      if (Array.isArray(r)) return r;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.aroundLatLngToPosition = i, exports.insideBoundingBoxArrayToBoundingBox = a, exports.insideBoundingBoxStringToBoundingBox = u, exports.insideBoundingBoxToBoundingBox = l;
    var e = /^(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)$/;

    function i(r) {
      var n = r.match(e);
      if (!n) throw new Error('Invalid value for "aroundLatLng" parameter: "'.concat(r, '"'));
      return {
        lat: parseFloat(n[1]),
        lng: parseFloat(n[2])
      };
    }

    function a(n) {
      var t = r(n, 1)[0],
          o = r(t = void 0 === t ? [void 0, void 0, void 0, void 0] : t, 4),
          e = o[0],
          i = o[1],
          a = o[2],
          u = o[3];
      if (!(e && i && a && u)) throw new Error('Invalid value for "insideBoundingBox" parameter: ['.concat(n, "]"));
      return {
        northEast: {
          lat: e,
          lng: i
        },
        southWest: {
          lat: a,
          lng: u
        }
      };
    }

    function u(n) {
      var t = r(n.split(",").map(parseFloat), 4),
          o = t[0],
          e = t[1],
          i = t[2],
          a = t[3];
      if (!(o && e && i && a)) throw new Error('Invalid value for "insideBoundingBox" parameter: "'.concat(n, '"'));
      return {
        northEast: {
          lat: o,
          lng: e
        },
        southWest: {
          lat: i,
          lng: a
        }
      };
    }

    function l(r) {
      return Array.isArray(r) ? a(r) : u(r);
    }
  }, {}],
  "bQlR": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function t(t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(o), !0).forEach(function (e) {
          r(t, e, o[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
        });
      }

      return t;
    }

    function r(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.addAbsolutePosition = void 0;

    var n = function n(e, r, _n3) {
      return e.map(function (e, o) {
        return t({}, e, {
          __position: _n3 * r + o + 1
        });
      });
    };

    exports.addAbsolutePosition = n;
  }, {}],
  "kMsO": [function (require, module, exports) {
    "use strict";

    function e(e, r) {
      var t = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
      }

      return t;
    }

    function r(r) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(o), !0).forEach(function (e) {
          t(r, e, o[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(function (e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
        });
      }

      return r;
    }

    function t(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.addQueryID = void 0;

    var n = function n(e, t) {
      return t ? e.map(function (e) {
        return r({}, e, {
          __queryID: t
        });
      }) : e;
    };

    exports.addQueryID = n;
  }, {}],
  "cq7G": [function (require, module, exports) {
    "use strict";

    function e(e, t, i) {
      return e.state.isHierarchicalFacet(t) ? e.state.isHierarchicalFacetRefined(t, i) : e.state.isConjunctiveFacet(t) ? e.state.isFacetRefined(t, i) : e.state.isDisjunctiveFacetRefined(t, i);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = e;
  }, {}],
  "VPCC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.createSendEventForFacet = o;
    var e = t(require("./isFacetRefined"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function o(t) {
      var o = t.instantSearchInstance,
          r = t.helper,
          i = t.attribute,
          c = t.widgetType;
      return function () {
        for (var t = arguments.length, l = new Array(t), s = 0; s < t; s++) {
          l[s] = arguments[s];
        }

        var u = l[0],
            a = l[1],
            f = l[2],
            y = void 0 === f ? "Filter Applied" : f;
        1 === l.length && "object" === n(l[0]) ? o.sendEventToInsights(l[0]) : "click" !== u || 2 !== l.length && 3 !== l.length || (0, e.default)(r, i, a) || o.sendEventToInsights({
          insightsMethod: "clickedFilters",
          widgetType: c,
          eventType: u,
          payload: {
            eventName: y,
            index: r.getIndex(),
            filters: ["".concat(i, ":").concat(JSON.stringify(a))]
          }
        });
      };
    }
  }, {
    "./isFacetRefined": "cq7G"
  }],
  "mQ7O": [function (require, module, exports) {
    "use strict";

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(t);
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.createSendEventForHits = n, exports.createBindEventForHits = r;

    var t = function t(_t2) {
      var n = _t2.index,
          r = _t2.widgetType,
          i = (_t2.methodName, _t2.args);
      if (1 === i.length && "object" === e(i[0])) return i[0];
      var o = i[0],
          a = i[1],
          s = i[2];
      if (!a) return null;
      if (("click" === o || "conversion" === o) && !s) return null;
      var c = Array.isArray(a) ? a : [a];
      if (0 === c.length) return null;
      var d = c[0].__queryID,
          u = c.map(function (e) {
        return e.objectID;
      }),
          y = c.map(function (e) {
        return e.__position;
      });
      return "view" === o ? {
        insightsMethod: "viewedObjectIDs",
        widgetType: r,
        eventType: o,
        payload: {
          eventName: s || "Hits Viewed",
          index: n,
          objectIDs: u
        }
      } : "click" === o ? {
        insightsMethod: "clickedObjectIDsAfterSearch",
        widgetType: r,
        eventType: o,
        payload: {
          eventName: s,
          index: n,
          queryID: d,
          objectIDs: u,
          positions: y
        }
      } : "conversion" === o ? {
        insightsMethod: "convertedObjectIDsAfterSearch",
        widgetType: r,
        eventType: o,
        payload: {
          eventName: s,
          index: n,
          queryID: d,
          objectIDs: u
        }
      } : null;
    };

    function n(e) {
      var n = e.instantSearchInstance,
          r = e.index,
          i = e.widgetType;
      return function () {
        for (var e = arguments.length, o = new Array(e), a = 0; a < e; a++) {
          o[a] = arguments[a];
        }

        var s = t({
          widgetType: i,
          index: r,
          methodName: "sendEvent",
          args: o
        });
        s && n.sendEventToInsights(s);
      };
    }

    function r(e) {
      var n = e.index,
          r = e.widgetType;
      return function () {
        for (var e = arguments.length, i = new Array(e), o = 0; o < e; o++) {
          i[o] = arguments[o];
        }

        var a = t({
          widgetType: r,
          index: n,
          methodName: "bindEvent",
          args: i
        });
        return a ? "data-insights-event=".concat(btoa(JSON.stringify(a))) : "";
      };
    }
  }, {}],
  "RQRZ": [function (require, module, exports) {
    "use strict";

    function e(e) {
      if (e.transporter) {
        var a = e.transporter,
            r = a.headers,
            t = a.queryParameters,
            i = "x-algolia-application-id";
        return [r[i] || t[i], r["x-algolia-api-key"] || t["x-algolia-api-key"]];
      }

      return [e.applicationID, e.apiKey];
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getAppIdAndApiKey = e;
  }, {}],
  "VvOC": [function (require, module, exports) {
    "use strict";

    function e(e, n) {
      if (!e) return null;
      var r = e.numericRefinements[n],
          t = [];
      return Object.keys(r).filter(function (e) {
        return Array.isArray(r[e]) && r[e].length > 0;
      }).forEach(function (e) {
        r[e].forEach(function (r) {
          t.push("".concat(n).concat(e).concat(r));
        });
      }), t;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.convertNumericRefinementsToFilters = e;
  }, {}],
  "Xobp": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var e = {
      capitalize: !0,
      defer: !0,
      isDomElement: !0,
      getContainerNode: !0,
      isSpecialClick: !0,
      prepareTemplateProps: !0,
      renderTemplate: !0,
      getRefinements: !0,
      clearRefinements: !0,
      escapeRefinement: !0,
      unescapeRefinement: !0,
      checkRendering: !0,
      checkIndexUiState: !0,
      getPropertyByPath: !0,
      getObjectType: !0,
      noop: !0,
      isFiniteNumber: !0,
      isPlainObject: !0,
      uniq: !0,
      range: !0,
      isEqual: !0,
      escape: !0,
      find: !0,
      findIndex: !0,
      mergeSearchParameters: !0,
      resolveSearchParameters: !0,
      toArray: !0,
      warning: !0,
      deprecate: !0,
      createDocumentationLink: !0,
      createDocumentationMessageGenerator: !0,
      aroundLatLngToPosition: !0,
      insideBoundingBoxToBoundingBox: !0,
      addAbsolutePosition: !0,
      addQueryID: !0,
      isFacetRefined: !0,
      getAppIdAndApiKey: !0,
      convertNumericRefinementsToFilters: !0
    };
    Object.defineProperty(exports, "capitalize", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "defer", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "isDomElement", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "getContainerNode", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "isSpecialClick", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "prepareTemplateProps", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "renderTemplate", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "getRefinements", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "clearRefinements", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "escapeRefinement", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "unescapeRefinement", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "checkRendering", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "checkIndexUiState", {
      enumerable: !0,
      get: function get() {
        return l.checkIndexUiState;
      }
    }), Object.defineProperty(exports, "getPropertyByPath", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "getObjectType", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "noop", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "isFiniteNumber", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "isPlainObject", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "uniq", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "range", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "isEqual", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "escape", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "find", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "findIndex", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "mergeSearchParameters", {
      enumerable: !0,
      get: function get() {
        return T.default;
      }
    }), Object.defineProperty(exports, "resolveSearchParameters", {
      enumerable: !0,
      get: function get() {
        return A.default;
      }
    }), Object.defineProperty(exports, "toArray", {
      enumerable: !0,
      get: function get() {
        return k.default;
      }
    }), Object.defineProperty(exports, "warning", {
      enumerable: !0,
      get: function get() {
        return B.warning;
      }
    }), Object.defineProperty(exports, "deprecate", {
      enumerable: !0,
      get: function get() {
        return B.deprecate;
      }
    }), Object.defineProperty(exports, "createDocumentationLink", {
      enumerable: !0,
      get: function get() {
        return S.createDocumentationLink;
      }
    }), Object.defineProperty(exports, "createDocumentationMessageGenerator", {
      enumerable: !0,
      get: function get() {
        return S.createDocumentationMessageGenerator;
      }
    }), Object.defineProperty(exports, "aroundLatLngToPosition", {
      enumerable: !0,
      get: function get() {
        return v.aroundLatLngToPosition;
      }
    }), Object.defineProperty(exports, "insideBoundingBoxToBoundingBox", {
      enumerable: !0,
      get: function get() {
        return v.insideBoundingBoxToBoundingBox;
      }
    }), Object.defineProperty(exports, "addAbsolutePosition", {
      enumerable: !0,
      get: function get() {
        return I.addAbsolutePosition;
      }
    }), Object.defineProperty(exports, "addQueryID", {
      enumerable: !0,
      get: function get() {
        return F.addQueryID;
      }
    }), Object.defineProperty(exports, "isFacetRefined", {
      enumerable: !0,
      get: function get() {
        return D.default;
      }
    }), Object.defineProperty(exports, "getAppIdAndApiKey", {
      enumerable: !0,
      get: function get() {
        return L.getAppIdAndApiKey;
      }
    }), Object.defineProperty(exports, "convertNumericRefinementsToFilters", {
      enumerable: !0,
      get: function get() {
        return _.convertNumericRefinementsToFilters;
      }
    });

    var r = M(require("./capitalize")),
        t = M(require("./defer")),
        n = M(require("./isDomElement")),
        i = M(require("./getContainerNode")),
        u = M(require("./isSpecialClick")),
        o = M(require("./prepareTemplateProps")),
        a = M(require("./renderTemplate")),
        c = M(require("./getRefinements")),
        p = M(require("./clearRefinements")),
        f = M(require("./escapeRefinement")),
        d = M(require("./unescapeRefinement")),
        s = M(require("./checkRendering")),
        l = require("./checkIndexUiState"),
        b = M(require("./getPropertyByPath")),
        m = M(require("./getObjectType")),
        g = M(require("./noop")),
        y = M(require("./isFiniteNumber")),
        P = M(require("./isPlainObject")),
        x = M(require("./uniq")),
        O = M(require("./range")),
        j = M(require("./isEqual")),
        q = M(require("./escape")),
        h = M(require("./find")),
        R = M(require("./findIndex")),
        T = M(require("./mergeSearchParameters")),
        A = M(require("./resolveSearchParameters")),
        k = M(require("./toArray")),
        B = require("./logger"),
        S = require("./documentation"),
        v = require("./geo-search"),
        I = require("./hits-absolute-position"),
        F = require("./hits-query-id"),
        D = M(require("./isFacetRefined")),
        E = require("./createSendEventForFacet");

    Object.keys(E).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === E[r] || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return E[r];
        }
      }));
    });

    var N = require("./createSendEventForHits");

    Object.keys(N).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === N[r] || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return N[r];
        }
      }));
    });

    var L = require("./getAppIdAndApiKey"),
        _ = require("./convertNumericRefinementsToFilters");

    function M(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./capitalize": "dyXC",
    "./defer": "GgfU",
    "./isDomElement": "PN79",
    "./getContainerNode": "Qn4V",
    "./isSpecialClick": "Ehcd",
    "./prepareTemplateProps": "TzTQ",
    "./renderTemplate": "NULW",
    "./getRefinements": "CCoh",
    "./clearRefinements": "soRO",
    "./escapeRefinement": "Pows",
    "./unescapeRefinement": "OpW4",
    "./checkRendering": "ABPc",
    "./checkIndexUiState": "rAho",
    "./getPropertyByPath": "x2eU",
    "./getObjectType": "LOkA",
    "./noop": "H3DA",
    "./isFiniteNumber": "F5eQ",
    "./isPlainObject": "KB1v",
    "./uniq": "slZX",
    "./range": "cOH8",
    "./isEqual": "NeG8",
    "./escape": "zzoW",
    "./find": "hpgY",
    "./findIndex": "I9N8",
    "./mergeSearchParameters": "UZG8",
    "./resolveSearchParameters": "wrSk",
    "./toArray": "SZxY",
    "./logger": "eYTm",
    "./documentation": "WSY6",
    "./geo-search": "daJR",
    "./hits-absolute-position": "bQlR",
    "./hits-query-id": "kMsO",
    "./isFacetRefined": "cq7G",
    "./createSendEventForFacet": "VPCC",
    "./createSendEventForHits": "mQ7O",
    "./getAppIdAndApiKey": "RQRZ",
    "./convertNumericRefinementsToFilters": "VvOC"
  }],
  "DXmI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.isIndexWidget = h, exports.default = void 0;

    var e = r(require("algoliasearch-helper")),
        t = require("../../lib/utils");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? n(Object(r), !0).forEach(function (t) {
          i(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function i(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function s(e) {
      return u(e) || o(e) || c();
    }

    function c() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function o(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function u(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }

        return r;
      }
    }

    function l(e, t) {
      if (null == e) return {};
      var r,
          n,
          a = d(e, t);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);

        for (n = 0; n < i.length; n++) {
          r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        }
      }

      return a;
    }

    function d(e, t) {
      if (null == e) return {};
      var r,
          n,
          a = {},
          i = Object.keys(e);

      for (n = 0; n < i.length; n++) {
        r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      }

      return a;
    }

    var f = (0, t.createDocumentationMessageGenerator)({
      name: "index-widget"
    });

    function h(e) {
      return "ais.index" === e.$$type;
    }

    function g(e, t) {
      var r = t.state,
          n = t.isPageReset,
          a = t._uiState;
      r !== e.state && (e.state = r, e.emit("change", {
        state: e.state,
        results: e.lastResults,
        isPageReset: n,
        _uiState: a
      }));
    }

    function S(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      return e.filter(function (e) {
        return !h(e);
      }).reduce(function (e, r) {
        return r.getWidgetUiState || r.getWidgetState ? r.getWidgetUiState ? r.getWidgetUiState(e, t) : r.getWidgetState(e, t) : e;
      }, r);
    }

    function p(e, t) {
      var r = t.initialSearchParameters,
          n = l(t, ["initialSearchParameters"]);
      return e.filter(function (e) {
        return !h(e);
      }).reduce(function (e, t) {
        return t.getWidgetSearchParameters ? t.getWidgetSearchParameters(e, n) : e;
      }, r);
    }

    function m(e) {
      var t = e.filter(h);
      0 !== t.length && t.forEach(function (e) {
        var t = e.getHelper();
        g(t, {
          state: t.state.resetPage(),
          isPageReset: !0
        }), m(e.getWidgets());
      });
    }

    function v(e) {
      return e.filter(h).reduce(function (e, t) {
        return e.concat.apply(e, [{
          indexId: t.getIndexId(),
          results: t.getResults(),
          helper: t.getHelper()
        }].concat(s(v(t.getWidgets()))));
      }, []);
    }

    function y(e) {
      var t = e.getParent();
      return v(t ? t.getWidgets() : [e]);
    }

    var I = function I(r) {
      if (void 0 === r || void 0 === r.indexName) throw new Error(f("The `indexName` option is required."));

      var n = r.indexName,
          c = r.indexId,
          o = void 0 === c ? n : c,
          u = [],
          l = {},
          d = null,
          v = null,
          I = null,
          P = null,
          b = function b(e) {
        return d._createURL(i({}, o, S(u, {
          searchParameters: e,
          helper: I
        })));
      };

      return {
        $$type: "ais.index",
        getIndexName: function getIndexName() {
          return n;
        },
        getIndexId: function getIndexId() {
          return o;
        },
        getHelper: function getHelper() {
          return I;
        },
        getResults: function getResults() {
          return P && P.lastResults;
        },
        getParent: function getParent() {
          return v;
        },
        getWidgets: function getWidgets() {
          return u;
        },
        addWidgets: function addWidgets(e) {
          var t = this;
          if (!Array.isArray(e)) throw new Error(f("The `addWidgets` method expects an array of widgets."));
          if (e.some(function (e) {
            return "function" != typeof e.init && "function" != typeof e.render;
          })) throw new Error(f("The widget definition expects a `render` and/or an `init` method."));
          return u = u.concat(e), d && Boolean(e.length) && (g(I, {
            state: p(u, {
              uiState: l,
              initialSearchParameters: I.state
            }),
            _uiState: l
          }), e.forEach(function (e) {
            e.getRenderState && R({
              renderState: e.getRenderState(d.renderState[t.getIndexId()] || {}, {
                uiState: d._initialUiState,
                helper: t.getHelper(),
                parent: t,
                instantSearchInstance: d,
                state: I.state,
                renderState: d.renderState,
                templatesConfig: d.templatesConfig,
                createURL: b,
                scopedResults: [],
                searchMetadata: {
                  isSearchStalled: d._isSearchStalled
                }
              }),
              instantSearchInstance: d,
              parent: t
            });
          }), e.forEach(function (e) {
            e.init && e.init({
              helper: I,
              parent: t,
              uiState: d._initialUiState,
              instantSearchInstance: d,
              state: I.state,
              renderState: d.renderState,
              templatesConfig: d.templatesConfig,
              createURL: b,
              scopedResults: [],
              searchMetadata: {
                isSearchStalled: d._isSearchStalled
              }
            });
          }), d.scheduleSearch()), this;
        },
        removeWidgets: function removeWidgets(e) {
          if (!Array.isArray(e)) throw new Error(f("The `removeWidgets` method expects an array of widgets."));
          if (e.some(function (e) {
            return "function" != typeof e.dispose;
          })) throw new Error(f("The widget definition expects a `dispose` method."));

          if (u = u.filter(function (t) {
            return -1 === e.indexOf(t);
          }), d && Boolean(e.length)) {
            var t = e.reduce(function (e, t) {
              return t.dispose({
                helper: I,
                state: e
              }) || e;
            }, I.state);
            l = S(u, {
              searchParameters: t,
              helper: I
            }), I.setState(p(u, {
              uiState: l,
              initialSearchParameters: t
            })), u.length && d.scheduleSearch();
          }

          return this;
        },
        init: function init(r) {
          var a = this,
              i = r.instantSearchInstance,
              c = r.parent,
              f = r.uiState;
          d = i, v = c, l = f[o] || {};
          var h = i.mainHelper,
              g = p(u, {
            uiState: l,
            initialSearchParameters: new e.default.SearchParameters({
              index: n
            })
          });
          (I = (0, e.default)({}, g.index, g)).search = function () {
            return i.onStateChange ? (i.onStateChange({
              uiState: i.mainIndex.getWidgetUiState({}),
              setUiState: i.setUiState.bind(i)
            }), h) : h.search();
          }, I.searchWithoutTriggeringOnStateChange = function () {
            return h.search();
          }, I.searchForFacetValues = function (e, t, r, n) {
            var a = I.state.setQueryParameters(n);
            return h.searchForFacetValues(e, t, r, a);
          }, P = h.derive(function () {
            return t.mergeSearchParameters.apply(void 0, s((0, t.resolveSearchParameters)(a)));
          }), I.on("change", function (e) {
            e.isPageReset && m(u);
          }), P.on("search", function () {
            i.scheduleStalledRender();
          }), P.on("result", function (e) {
            var t = e.results;
            i.scheduleRender(), I.lastResults = t;
          }), u.forEach(function (e) {
            e.getRenderState && R({
              renderState: e.getRenderState(i.renderState[a.getIndexId()] || {}, {
                uiState: f,
                helper: I,
                parent: a,
                instantSearchInstance: i,
                state: I.state,
                renderState: i.renderState,
                templatesConfig: i.templatesConfig,
                createURL: b,
                scopedResults: [],
                searchMetadata: {
                  isSearchStalled: i._isSearchStalled
                }
              }),
              instantSearchInstance: i,
              parent: a
            });
          }), u.forEach(function (e) {
            e.init && e.init({
              uiState: f,
              helper: I,
              parent: a,
              instantSearchInstance: i,
              state: I.state,
              renderState: i.renderState,
              templatesConfig: i.templatesConfig,
              createURL: b,
              scopedResults: [],
              searchMetadata: {
                isSearchStalled: i._isSearchStalled
              }
            });
          }), I.on("change", function (e) {
            var t = e.state,
                r = e._uiState;
            l = S(u, {
              searchParameters: t,
              helper: I
            }, r || {}), i.onStateChange || i.onInternalStateChange();
          });
        },
        render: function render(e) {
          var t = this,
              r = e.instantSearchInstance;
          this.getResults() && (u.forEach(function (e) {
            e.getRenderState && R({
              renderState: e.getRenderState(r.renderState[t.getIndexId()] || {}, {
                helper: t.getHelper(),
                parent: t,
                instantSearchInstance: r,
                results: t.getResults(),
                scopedResults: y(t),
                state: t.getResults()._state,
                renderState: r.renderState,
                templatesConfig: r.templatesConfig,
                createURL: b,
                searchMetadata: {
                  isSearchStalled: r._isSearchStalled
                }
              }),
              instantSearchInstance: r,
              parent: t
            });
          }), u.forEach(function (e) {
            e.render && e.render({
              helper: I,
              parent: t,
              instantSearchInstance: r,
              results: t.getResults(),
              scopedResults: y(t),
              state: t.getResults()._state,
              renderState: r.renderState,
              templatesConfig: r.templatesConfig,
              createURL: b,
              searchMetadata: {
                isSearchStalled: r._isSearchStalled
              }
            });
          }));
        },
        dispose: function dispose() {
          u.forEach(function (e) {
            e.dispose && e.dispose({
              helper: I,
              state: I.state
            });
          }), d = null, v = null, I.removeAllListeners(), I = null, P.detach(), P = null;
        },
        getWidgetUiState: function getWidgetUiState(e) {
          return u.filter(h).reduce(function (e, t) {
            return t.getWidgetUiState(e);
          }, a({}, e, i({}, this.getIndexId(), l)));
        },
        getWidgetState: function getWidgetState(e) {
          return this.getWidgetUiState(e);
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
          var r = t.uiState;
          return p(u, {
            uiState: r,
            initialSearchParameters: e
          });
        },
        refreshUiState: function refreshUiState() {
          l = S(u, {
            searchParameters: this.getHelper().state,
            helper: this.getHelper()
          });
        }
      };
    },
        P = I;

    function R(e) {
      var t = e.renderState,
          r = e.instantSearchInstance,
          n = e.parent,
          s = n ? n.getIndexId() : r.mainIndex.getIndexId();
      r.renderState = a({}, r.renderState, i({}, s, a({}, r.renderState[s], {}, t)));
    }

    exports.default = P;
  }, {
    "algoliasearch-helper": "W0rk",
    "../../lib/utils": "Xobp"
  }],
  "ww6W": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = "4.9.0";
    exports.default = e;
  }, {}],
  "venA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s, exports.escapeFacets = u, exports.TAG_REPLACEMENT = exports.TAG_PLACEHOLDER = void 0;

    var e = require("../lib/utils");

    function t() {
      return (t = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];

          for (var i in r) {
            Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function r(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, i);
      }

      return r;
    }

    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2 ? r(Object(i), !0).forEach(function (t) {
          n(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }

      return e;
    }

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var o = {
      highlightPreTag: "__ais-highlight__",
      highlightPostTag: "__/ais-highlight__"
    };
    exports.TAG_PLACEHOLDER = o;
    var a = {
      highlightPreTag: "<mark>",
      highlightPostTag: "</mark>"
    };

    function g(t) {
      return (0, e.escape)(t).replace(new RegExp(o.highlightPreTag, "g"), a.highlightPreTag).replace(new RegExp(o.highlightPostTag, "g"), a.highlightPostTag);
    }

    function h(t) {
      return (0, e.isPlainObject)(t) && "string" != typeof t.value ? Object.keys(t).reduce(function (e, r) {
        return i({}, e, n({}, r, h(t[r])));
      }, {}) : Array.isArray(t) ? t.map(h) : i({}, t, {
        value: g(t.value)
      });
    }

    function s(e) {
      return void 0 === e.__escaped && ((e = e.map(function (e) {
        var r = t({}, e);
        return r._highlightResult && (r._highlightResult = h(r._highlightResult)), r._snippetResult && (r._snippetResult = h(r._snippetResult)), r;
      })).__escaped = !0), e;
    }

    function u(e) {
      return e.map(function (e) {
        return i({}, e, {
          highlighted: g(e.highlighted)
        });
      });
    }

    exports.TAG_REPLACEMENT = a;
  }, {
    "../lib/utils": "Xobp"
  }],
  "uzDB": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.component = void 0;

    var e = "ais",
        t = function t(_t3) {
      return function () {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = n.descendantName,
            c = n.modifierName,
            a = o ? "-".concat(o) : "",
            r = c ? "--".concat(c) : "";
        return "".concat(e, "-").concat(_t3).concat(a).concat(r);
      };
    };

    exports.component = t;
  }, {}],
  "WZjZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = g;

    var e = require("../lib/utils"),
        t = require("../lib/escape-highlight"),
        i = require("../lib/suit"),
        h = (0, i.component)("Highlight");

    function g(i) {
      var g = i.attribute,
          a = i.highlightedTagName,
          l = void 0 === a ? "mark" : a,
          r = i.hit,
          c = i.cssClasses,
          s = void 0 === c ? {} : c,
          o = ((0, e.getPropertyByPath)(r._highlightResult, g) || {}).value,
          n = void 0 === o ? "" : o,
          u = h({
        descendantName: "highlighted"
      }) + (s.highlighted ? " ".concat(s.highlighted) : "");
      return n.replace(new RegExp(t.TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(l, ' class="').concat(u, '">')).replace(new RegExp(t.TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(l, ">"));
    }
  }, {
    "../lib/utils": "Xobp",
    "../lib/escape-highlight": "venA",
    "../lib/suit": "uzDB"
  }],
  "XGTA": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = h;

    var e = require("../lib/utils"),
        t = require("../lib/escape-highlight"),
        i = require("../lib/suit"),
        a = (0, i.component)("Snippet");

    function h(i) {
      var h = i.attribute,
          g = i.highlightedTagName,
          r = void 0 === g ? "mark" : g,
          l = i.hit,
          s = i.cssClasses,
          c = void 0 === s ? {} : s,
          n = ((0, e.getPropertyByPath)(l._snippetResult, h) || {}).value,
          o = void 0 === n ? "" : n,
          p = a({
        descendantName: "highlighted"
      }) + (c.highlighted ? " ".concat(c.highlighted) : "");
      return o.replace(new RegExp(t.TAG_REPLACEMENT.highlightPreTag, "g"), "<".concat(r, ' class="').concat(p, '">')).replace(new RegExp(t.TAG_REPLACEMENT.highlightPostTag, "g"), "</".concat(r, ">"));
    }
  }, {
    "../lib/utils": "Xobp",
    "../lib/escape-highlight": "venA",
    "../lib/suit": "uzDB"
  }],
  "Un0M": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.readDataAttributes = o, exports.hasDataAttributes = r, exports.writeDataAttributes = a, exports.default = i;

    var t = require("../lib/utils");

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function o(t) {
      var e = t.getAttribute("data-insights-method"),
          o = t.getAttribute("data-insights-payload");
      if ("string" != typeof o) throw new Error("The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.");

      try {
        return {
          method: e,
          payload: JSON.parse(atob(o))
        };
      } catch (r) {
        throw new Error("The insights helper was unable to parse `data-insights-payload`.");
      }
    }

    function r(t) {
      return t.hasAttribute("data-insights-method");
    }

    function a(t) {
      var o,
          r = t.method,
          a = t.payload;
      if ("object" !== e(a)) throw new Error("The insights helper expects the payload to be an object.");

      try {
        o = btoa(JSON.stringify(a));
      } catch (i) {
        throw new Error("Could not JSON serialize the payload object.");
      }

      return 'data-insights-method="'.concat(r, '" data-insights-payload="').concat(o, '"');
    }

    function i(t, e) {
      return a({
        method: t,
        payload: e
      });
    }
  }, {
    "../lib/utils": "Xobp"
  }],
  "Ou5Y": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.getInsightsAnonymousUserTokenInternal = n, exports.default = o, exports.ANONYMOUS_TOKEN_COOKIE_KEY = void 0;

    var e = require("../lib/utils"),
        t = "_ALGOLIA";

    function r(e) {
      for (var t = "".concat(e, "="), r = document.cookie.split(";"), n = 0; n < r.length; n++) {
        for (var o = r[n]; " " === o.charAt(0);) {
          o = o.substring(1);
        }

        if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
      }
    }

    function n() {
      return r(t);
    }

    function o() {
      return n();
    }

    exports.ANONYMOUS_TOKEN_COOKIE_KEY = t;
  }, {
    "../lib/utils": "Xobp"
  }],
  "H3Uy": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var e = {
      highlight: !0,
      snippet: !0,
      insights: !0,
      getInsightsAnonymousUserToken: !0,
      getInsightsAnonymousUserTokenInternal: !0
    };
    Object.defineProperty(exports, "highlight", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "snippet", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "insights", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "getInsightsAnonymousUserToken", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "getInsightsAnonymousUserTokenInternal", {
      enumerable: !0,
      get: function get() {
        return o.getInsightsAnonymousUserTokenInternal;
      }
    });
    var t = s(require("./highlight"));
    Object.keys(t).forEach(function (r) {
      "default" !== r && "__esModule" !== r && (Object.prototype.hasOwnProperty.call(e, r) || r in exports && exports[r] === t[r] || Object.defineProperty(exports, r, {
        enumerable: !0,
        get: function get() {
          return t[r];
        }
      }));
    });
    var r = s(require("./snippet"));
    Object.keys(r).forEach(function (t) {
      "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(e, t) || t in exports && exports[t] === r[t] || Object.defineProperty(exports, t, {
        enumerable: !0,
        get: function get() {
          return r[t];
        }
      }));
    });
    var n = u(require("./insights")),
        o = s(require("./get-insights-anonymous-user-token"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return i = function i() {
        return e;
      }, e;
    }

    function s(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = i();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var o in e) {
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          var u = n ? Object.getOwnPropertyDescriptor(e, o) : null;
          u && (u.get || u.set) ? Object.defineProperty(r, o, u) : r[o] = e[o];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }
  }, {
    "./highlight": "WZjZ",
    "./snippet": "XGTA",
    "./insights": "Un0M",
    "./get-insights-anonymous-user-token": "Ou5Y"
  }],
  "qzqC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = require("../helpers");

    function t(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function r(e) {
      for (var r = 1; r < arguments.length; r++) {
        var o = null != arguments[r] ? arguments[r] : {};
        r % 2 ? t(Object(o), !0).forEach(function (t) {
          n(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }

      return e;
    }

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function o(t) {
      var n = t.numberLocale;
      return {
        formatNumber: function formatNumber(e, t) {
          return Number(t(e)).toLocaleString(n);
        },
        highlight: function highlight(t, n) {
          try {
            var o = JSON.parse(t);
            return n((0, e.highlight)(r({}, o, {
              hit: this
            })));
          } catch (i) {
            throw new Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
          }
        },
        snippet: function snippet(t, n) {
          try {
            var o = JSON.parse(t);
            return n((0, e.snippet)(r({}, o, {
              hit: this
            })));
          } catch (i) {
            throw new Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
          }
        },
        insights: function insights(t, n) {
          try {
            var o = JSON.parse(t),
                i = o.method,
                a = o.payload;
            return n((0, e.insights)(i, r({
              objectIDs: [this.objectID]
            }, a)));
          } catch (c) {
            throw new Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }');
          }
        }
      };
    }
  }, {
    "../helpers": "H3Uy"
  }],
  "Yee5": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function t(t) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(o), !0).forEach(function (e) {
          r(t, e, o[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
        });
      }

      return t;
    }

    function r(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function n(e, t) {
      if (null == e) return {};
      var r,
          n,
          u = o(e, t);

      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);

        for (n = 0; n < c.length; n++) {
          r = c[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (u[r] = e[r]);
        }
      }

      return u;
    }

    function o(e, t) {
      if (null == e) return {};
      var r,
          n,
          o = {},
          u = Object.keys(e);

      for (n = 0; n < u.length; n++) {
        r = u[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      }

      return o;
    }

    function u(e) {
      e.configure;
      return n(e, ["configure"]);
    }

    function c() {
      return {
        stateToRoute: function stateToRoute(e) {
          return Object.keys(e).reduce(function (n, o) {
            return t({}, n, r({}, o, u(e[o])));
          }, {});
        },
        routeToState: function routeToState() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Object.keys(e).reduce(function (n, o) {
            return t({}, n, r({}, o, u(e[o])));
          }, {});
        }
      };
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;
  }, {}],
  "Qri1": [function (require, module, exports) {
    "use strict";

    var r = Object.prototype.hasOwnProperty,
        t = Array.isArray,
        e = function () {
      for (var r = [], t = 0; t < 256; ++t) {
        r.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
      }

      return r;
    }(),
        o = function o(r) {
      for (; r.length > 1;) {
        var e = r.pop(),
            o = e.obj[e.prop];

        if (t(o)) {
          for (var n = [], c = 0; c < o.length; ++c) {
            void 0 !== o[c] && n.push(o[c]);
          }

          e.obj[e.prop] = n;
        }
      }
    },
        n = function n(r, t) {
      for (var e = t && t.plainObjects ? Object.create(null) : {}, o = 0; o < r.length; ++o) {
        void 0 !== r[o] && (e[o] = r[o]);
      }

      return e;
    },
        c = function e(o, c, u) {
      if (!c) return o;

      if ("object" != _typeof(c)) {
        if (t(o)) o.push(c);else {
          if (!o || "object" != _typeof(o)) return [o, c];
          (u && (u.plainObjects || u.allowPrototypes) || !r.call(Object.prototype, c)) && (o[c] = !0);
        }
        return o;
      }

      if (!o || "object" != _typeof(o)) return [o].concat(c);
      var f = o;
      return t(o) && !t(c) && (f = n(o, u)), t(o) && t(c) ? (c.forEach(function (t, n) {
        if (r.call(o, n)) {
          var c = o[n];
          c && "object" == _typeof(c) && t && "object" == _typeof(t) ? o[n] = e(c, t, u) : o.push(t);
        } else o[n] = t;
      }), o) : Object.keys(c).reduce(function (t, o) {
        var n = c[o];
        return r.call(t, o) ? t[o] = e(t[o], n, u) : t[o] = n, t;
      }, f);
    },
        u = function u(r, t) {
      return Object.keys(t).reduce(function (r, e) {
        return r[e] = t[e], r;
      }, r);
    },
        f = function f(r, t, e) {
      var o = r.replace(/\+/g, " ");
      if ("iso-8859-1" === e) return o.replace(/%[0-9a-f]{2}/gi, unescape);

      try {
        return decodeURIComponent(o);
      } catch (n) {
        return o;
      }
    },
        p = function p(r, t, o) {
      if (0 === r.length) return r;
      var n = r;
      if ("symbol" == _typeof(r) ? n = Symbol.prototype.toString.call(r) : "string" != typeof r && (n = String(r)), "iso-8859-1" === o) return escape(n).replace(/%u[0-9a-f]{4}/gi, function (r) {
        return "%26%23" + parseInt(r.slice(2), 16) + "%3B";
      });

      for (var c = "", u = 0; u < n.length; ++u) {
        var f = n.charCodeAt(u);
        45 === f || 46 === f || 95 === f || 126 === f || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 ? c += n.charAt(u) : f < 128 ? c += e[f] : f < 2048 ? c += e[192 | f >> 6] + e[128 | 63 & f] : f < 55296 || f >= 57344 ? c += e[224 | f >> 12] + e[128 | f >> 6 & 63] + e[128 | 63 & f] : (u += 1, f = 65536 + ((1023 & f) << 10 | 1023 & n.charCodeAt(u)), c += e[240 | f >> 18] + e[128 | f >> 12 & 63] + e[128 | f >> 6 & 63] + e[128 | 63 & f]);
      }

      return c;
    },
        a = function a(r) {
      for (var t = [{
        obj: {
          o: r
        },
        prop: "o"
      }], e = [], n = 0; n < t.length; ++n) {
        for (var c = t[n], u = c.obj[c.prop], f = Object.keys(u), p = 0; p < f.length; ++p) {
          var a = f[p],
              i = u[a];
          "object" == _typeof(i) && null !== i && -1 === e.indexOf(i) && (t.push({
            obj: u,
            prop: a
          }), e.push(i));
        }
      }

      return o(t), r;
    },
        i = function i(r) {
      return "[object RegExp]" === Object.prototype.toString.call(r);
    },
        s = function s(r) {
      return !(!r || "object" != _typeof(r)) && !!(r.constructor && r.constructor.isBuffer && r.constructor.isBuffer(r));
    },
        l = function l(r, t) {
      return [].concat(r, t);
    },
        b = function b(r, e) {
      if (t(r)) {
        for (var o = [], n = 0; n < r.length; n += 1) {
          o.push(e(r[n]));
        }

        return o;
      }

      return e(r);
    };

    module.exports = {
      arrayToObject: n,
      assign: u,
      combine: l,
      compact: a,
      decode: f,
      encode: p,
      isBuffer: s,
      isRegExp: i,
      maybeMap: b,
      merge: c
    };
  }, {}],
  "XaX2": [function (require, module, exports) {
    "use strict";

    var r = String.prototype.replace,
        t = /%20/g,
        e = require("./utils"),
        n = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };

    module.exports = e.assign({
      default: n.RFC3986,
      formatters: {
        RFC1738: function RFC1738(e) {
          return r.call(e, t, "+");
        },
        RFC3986: function RFC3986(r) {
          return String(r);
        }
      }
    }, n);
  }, {
    "./utils": "Qri1"
  }],
  "mwZo": [function (require, module, exports) {
    "use strict";

    var e = require("./utils"),
        t = require("./formats"),
        r = Object.prototype.hasOwnProperty,
        o = {
      brackets: function brackets(e) {
        return e + "[]";
      },
      comma: "comma",
      indices: function indices(e, t) {
        return e + "[" + t + "]";
      },
      repeat: function repeat(e) {
        return e;
      }
    },
        n = Array.isArray,
        i = Array.prototype.push,
        l = function l(e, t) {
      i.apply(e, n(t) ? t : [t]);
    },
        a = Date.prototype.toISOString,
        f = t.default,
        s = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encoder: e.encode,
      encodeValuesOnly: !1,
      format: f,
      formatter: t.formatters[f],
      indices: !1,
      serializeDate: function serializeDate(e) {
        return a.call(e);
      },
      skipNulls: !1,
      strictNullHandling: !1
    },
        c = function c(e) {
      return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "symbol" == _typeof(e) || "bigint" == typeof e;
    },
        u = function t(r, o, i, a, f, u, d, y, p, m, h, v, b) {
      var D = r;

      if ("function" == typeof d ? D = d(o, D) : D instanceof Date ? D = m(D) : "comma" === i && n(D) && (D = e.maybeMap(D, function (e) {
        return e instanceof Date ? m(e) : e;
      }).join(",")), null === D) {
        if (a) return u && !v ? u(o, s.encoder, b, "key") : o;
        D = "";
      }

      if (c(D) || e.isBuffer(D)) return u ? [h(v ? o : u(o, s.encoder, b, "key")) + "=" + h(u(D, s.encoder, b, "value"))] : [h(o) + "=" + h(String(D))];
      var w,
          g = [];
      if (void 0 === D) return g;
      if (n(d)) w = d;else {
        var k = Object.keys(D);
        w = y ? k.sort(y) : k;
      }

      for (var N = 0; N < w.length; ++N) {
        var O = w[N],
            S = D[O];

        if (!f || null !== S) {
          var x = n(D) ? "function" == typeof i ? i(o, O) : o : o + (p ? "." + O : "[" + O + "]");
          l(g, t(S, x, i, a, f, u, d, y, p, m, h, v, b));
        }
      }

      return g;
    },
        d = function d(e) {
      if (!e) return s;
      if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
      var o = e.charset || s.charset;
      if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      var i = t.default;

      if (void 0 !== e.format) {
        if (!r.call(t.formatters, e.format)) throw new TypeError("Unknown format option provided.");
        i = e.format;
      }

      var l = t.formatters[i],
          a = s.filter;
      return ("function" == typeof e.filter || n(e.filter)) && (a = e.filter), {
        addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : s.addQueryPrefix,
        allowDots: void 0 === e.allowDots ? s.allowDots : !!e.allowDots,
        charset: o,
        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
        delimiter: void 0 === e.delimiter ? s.delimiter : e.delimiter,
        encode: "boolean" == typeof e.encode ? e.encode : s.encode,
        encoder: "function" == typeof e.encoder ? e.encoder : s.encoder,
        encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : s.encodeValuesOnly,
        filter: a,
        formatter: l,
        serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : s.serializeDate,
        skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : s.skipNulls,
        sort: "function" == typeof e.sort ? e.sort : null,
        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling
      };
    };

    module.exports = function (e, t) {
      var r,
          i = e,
          a = d(t);
      "function" == typeof a.filter ? i = (0, a.filter)("", i) : n(a.filter) && (r = a.filter);
      var f,
          s = [];
      if ("object" != _typeof(i) || null === i) return "";
      f = t && t.arrayFormat in o ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
      var c = o[f];
      r || (r = Object.keys(i)), a.sort && r.sort(a.sort);

      for (var y = 0; y < r.length; ++y) {
        var p = r[y];
        a.skipNulls && null === i[p] || l(s, u(i[p], p, c, a.strictNullHandling, a.skipNulls, a.encode ? a.encoder : null, a.filter, a.sort, a.allowDots, a.serializeDate, a.formatter, a.encodeValuesOnly, a.charset));
      }

      var m = s.join(a.delimiter),
          h = !0 === a.addQueryPrefix ? "?" : "";
      return a.charsetSentinel && ("iso-8859-1" === a.charset ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), m.length > 0 ? h + m : "";
    };
  }, {
    "./utils": "Qri1",
    "./formats": "XaX2"
  }],
  "snX5": [function (require, module, exports) {
    "use strict";

    var e = require("./utils"),
        t = Object.prototype.hasOwnProperty,
        r = Array.isArray,
        i = {
      allowDots: !1,
      allowPrototypes: !1,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: !1,
      comma: !1,
      decoder: e.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1
    },
        o = function o(e) {
      return e.replace(/&#(\d+);/g, function (e, t) {
        return String.fromCharCode(parseInt(t, 10));
      });
    },
        a = function a(e, t) {
      return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e;
    },
        n = "utf8=%26%2310003%3B",
        l = "utf8=%E2%9C%93",
        c = function c(_c, s) {
      var p,
          d = {},
          u = s.ignoreQueryPrefix ? _c.replace(/^\?/, "") : _c,
          f = s.parameterLimit === 1 / 0 ? void 0 : s.parameterLimit,
          m = u.split(s.delimiter, f),
          y = -1,
          h = s.charset;
      if (s.charsetSentinel) for (p = 0; p < m.length; ++p) {
        0 === m[p].indexOf("utf8=") && (m[p] === l ? h = "utf-8" : m[p] === n && (h = "iso-8859-1"), y = p, p = m.length);
      }

      for (p = 0; p < m.length; ++p) {
        if (p !== y) {
          var b,
              g,
              O = m[p],
              v = O.indexOf("]="),
              w = -1 === v ? O.indexOf("=") : v + 1;
          -1 === w ? (b = s.decoder(O, i.decoder, h, "key"), g = s.strictNullHandling ? null : "") : (b = s.decoder(O.slice(0, w), i.decoder, h, "key"), g = e.maybeMap(a(O.slice(w + 1), s), function (e) {
            return s.decoder(e, i.decoder, h, "value");
          })), g && s.interpretNumericEntities && "iso-8859-1" === h && (g = o(g)), O.indexOf("[]=") > -1 && (g = r(g) ? [g] : g), t.call(d, b) ? d[b] = e.combine(d[b], g) : d[b] = g;
        }
      }

      return d;
    },
        s = function s(e, t, r, i) {
      for (var o = i ? t : a(t, r), n = e.length - 1; n >= 0; --n) {
        var l,
            c = e[n];
        if ("[]" === c && r.parseArrays) l = [].concat(o);else {
          l = r.plainObjects ? Object.create(null) : {};
          var s = "[" === c.charAt(0) && "]" === c.charAt(c.length - 1) ? c.slice(1, -1) : c,
              p = parseInt(s, 10);
          r.parseArrays || "" !== s ? !isNaN(p) && c !== s && String(p) === s && p >= 0 && r.parseArrays && p <= r.arrayLimit ? (l = [])[p] = o : l[s] = o : l = {
            0: o
          };
        }
        o = l;
      }

      return o;
    },
        p = function p(e, r, i, o) {
      if (e) {
        var a = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
            n = /(\[[^[\]]*])/g,
            l = i.depth > 0 && /(\[[^[\]]*])/.exec(a),
            c = l ? a.slice(0, l.index) : a,
            p = [];

        if (c) {
          if (!i.plainObjects && t.call(Object.prototype, c) && !i.allowPrototypes) return;
          p.push(c);
        }

        for (var d = 0; i.depth > 0 && null !== (l = n.exec(a)) && d < i.depth;) {
          if (d += 1, !i.plainObjects && t.call(Object.prototype, l[1].slice(1, -1)) && !i.allowPrototypes) return;
          p.push(l[1]);
        }

        return l && p.push("[" + a.slice(l.index) + "]"), s(p, r, i, o);
      }
    },
        d = function d(t) {
      if (!t) return i;
      if (null !== t.decoder && void 0 !== t.decoder && "function" != typeof t.decoder) throw new TypeError("Decoder has to be a function.");
      if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      var r = void 0 === t.charset ? i.charset : t.charset;
      return {
        allowDots: void 0 === t.allowDots ? i.allowDots : !!t.allowDots,
        allowPrototypes: "boolean" == typeof t.allowPrototypes ? t.allowPrototypes : i.allowPrototypes,
        arrayLimit: "number" == typeof t.arrayLimit ? t.arrayLimit : i.arrayLimit,
        charset: r,
        charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : i.charsetSentinel,
        comma: "boolean" == typeof t.comma ? t.comma : i.comma,
        decoder: "function" == typeof t.decoder ? t.decoder : i.decoder,
        delimiter: "string" == typeof t.delimiter || e.isRegExp(t.delimiter) ? t.delimiter : i.delimiter,
        depth: "number" == typeof t.depth || !1 === t.depth ? +t.depth : i.depth,
        ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
        interpretNumericEntities: "boolean" == typeof t.interpretNumericEntities ? t.interpretNumericEntities : i.interpretNumericEntities,
        parameterLimit: "number" == typeof t.parameterLimit ? t.parameterLimit : i.parameterLimit,
        parseArrays: !1 !== t.parseArrays,
        plainObjects: "boolean" == typeof t.plainObjects ? t.plainObjects : i.plainObjects,
        strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : i.strictNullHandling
      };
    };

    module.exports = function (t, r) {
      var i = d(r);
      if ("" === t || null == t) return i.plainObjects ? Object.create(null) : {};

      for (var o = "string" == typeof t ? c(t, i) : t, a = i.plainObjects ? Object.create(null) : {}, n = Object.keys(o), l = 0; l < n.length; ++l) {
        var s = n[l],
            u = p(s, o[s], i, "string" == typeof t);
        a = e.merge(a, u, i);
      }

      return e.compact(a);
    };
  }, {
    "./utils": "Qri1"
  }],
  "hIRQ": [function (require, module, exports) {
    "use strict";

    var r = require("./stringify"),
        e = require("./parse"),
        s = require("./formats");

    module.exports = {
      formats: s,
      parse: e,
      stringify: r
    };
  }, {
    "./stringify": "mwZo",
    "./parse": "snX5",
    "./formats": "XaX2"
  }],
  "Q9yC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = w;
    var t = e(require("qs"));

    function e(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function o(t, e) {
      for (var i = 0; i < e.length; i++) {
        var o = e[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function n(t, e, i) {
      return e && o(t.prototype, e), i && o(t, i), t;
    }

    function r(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t;
    }

    var a = function a(t) {
      var e = t.qsModule,
          i = t.routeState,
          o = t.location,
          n = o.protocol,
          r = o.hostname,
          a = o.port,
          c = void 0 === a ? "" : a,
          s = o.pathname,
          u = o.hash,
          w = e.stringify(i),
          l = "" === c ? "" : ":".concat(c);
      return w ? "".concat(n, "//").concat(r).concat(l).concat(s, "?").concat(w).concat(u) : "".concat(n, "//").concat(r).concat(l).concat(s).concat(u);
    },
        c = function c(t) {
      var e = t.qsModule,
          i = t.location;
      return e.parse(i.search.slice(1), {
        arrayLimit: 99
      });
    },
        s = function s(t) {
      t && (window.document.title = t);
    },
        u = function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = t.windowTitle,
            n = t.writeDelay,
            u = void 0 === n ? 400 : n,
            w = t.createURL,
            l = void 0 === w ? a : w,
            d = t.parseURL,
            h = void 0 === d ? c : d;
        i(this, e), r(this, "windowTitle", void 0), r(this, "writeDelay", void 0), r(this, "_createURL", void 0), r(this, "parseURL", void 0), r(this, "writeTimer", void 0), this.windowTitle = o, this.writeTimer = void 0, this.writeDelay = u, this._createURL = l, this.parseURL = h;
        var v = this.windowTitle && this.windowTitle(this.read());
        s(v);
      }

      return n(e, [{
        key: "read",
        value: function value() {
          return this.parseURL({
            qsModule: t.default,
            location: window.location
          });
        }
      }, {
        key: "write",
        value: function value(t) {
          var e = this,
              i = this.createURL(t),
              o = this.windowTitle && this.windowTitle(t);
          this.writeTimer && window.clearTimeout(this.writeTimer), this.writeTimer = window.setTimeout(function () {
            s(o), window.history.pushState(t, o || "", i), e.writeTimer = void 0;
          }, this.writeDelay);
        }
      }, {
        key: "onUpdate",
        value: function value(t) {
          var e = this;
          this._onPopState = function (i) {
            e.writeTimer && (window.clearTimeout(e.writeTimer), e.writeTimer = void 0);
            var o = i.state;
            t(o || e.read());
          }, window.addEventListener("popstate", this._onPopState);
        }
      }, {
        key: "createURL",
        value: function value(e) {
          return this._createURL({
            qsModule: t.default,
            routeState: e,
            location: window.location
          });
        }
      }, {
        key: "dispose",
        value: function value() {
          this._onPopState && window.removeEventListener("popstate", this._onPopState), this.writeTimer && window.clearTimeout(this.writeTimer), this.write({});
        }
      }]), e;
    }();

    function w(t) {
      return new u(t);
    }
  }, {
    "qs": "hIRQ"
  }],
  "noeX": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.createRouterMiddleware = void 0;

    var e = n(require("../lib/stateMappings/simple")),
        t = n(require("../lib/routers/history")),
        r = require("../lib/utils");

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(r), !0).forEach(function (t) {
          a(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function a(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var u = function e(t, r) {
      r(t), t.getWidgets().filter(function (e) {
        return "ais.index" === e.$$type;
      }).forEach(function (t) {
        e(t, r);
      });
    },
        c = function c() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = n.router,
          c = void 0 === i ? (0, t.default)() : i,
          s = n.stateMapping,
          d = void 0 === s ? (0, e.default)() : s;
      return function (e) {
        var t = e.instantSearchInstance;
        t._createURL = function (e) {
          var r = Object.keys(e).reduce(function (t, r) {
            return o({}, t, a({}, r, e[r]));
          }, t.mainIndex.getWidgetUiState({})),
              n = d.stateToRoute(r);
          return c.createURL(n);
        }, t._initialUiState = o({}, t._initialUiState, {}, d.routeToState(c.read()));
        var n = void 0;
        return {
          onStateChange: function onStateChange(e) {
            var t = e.uiState,
                i = d.stateToRoute(t);
            void 0 !== n && (0, r.isEqual)(n, i) || (c.write(i), n = i);
          },
          subscribe: function subscribe() {
            c.onUpdate(function (e) {
              var r = d.routeToState(e);
              u(t.mainIndex, function (e) {
                var n = e.getWidgets(),
                    i = r[e.getIndexId()] || {},
                    o = n.reduce(function (e, t) {
                  return t.getWidgetSearchParameters ? t.getWidgetSearchParameters(e, {
                    uiState: i
                  }) : e;
                }, e.getHelper().state);
                e.getHelper().overrideStateWithoutTriggeringChangeEvent(o), t.scheduleSearch();
              });
            });
          },
          unsubscribe: function unsubscribe() {
            c.dispose();
          }
        };
      };
    };

    exports.createRouterMiddleware = c;
  }, {
    "../lib/stateMappings/simple": "Yee5",
    "../lib/routers/history": "Q9yC",
    "../lib/utils": "Xobp"
  }],
  "zZzJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = u(require("algoliasearch-helper")),
        t = u(require("events")),
        r = l(require("../widgets/index/index")),
        n = u(require("./version")),
        i = u(require("./createHelpers")),
        a = require("./utils"),
        o = require("../middlewares/createRouterMiddleware");

    function s() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return s = function s() {
        return e;
      }, e;
    }

    function l(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = s();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          n = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var i in e) {
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          var a = n ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set) ? Object.defineProperty(r, i, a) : r[i] = e[i];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c(e) {
      return (c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function d(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function h(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    function f(e, t, r) {
      return t && h(e.prototype, t), r && h(e, r), e;
    }

    function p(e, t) {
      return !t || "object" !== c(t) && "function" != typeof t ? v(e) : t;
    }

    function m(e) {
      return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function v(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function g(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && y(e, t);
    }

    function y(e, t) {
      return (y = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function S(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var b = (0, a.createDocumentationMessageGenerator)({
      name: "instantsearch"
    });

    function w() {
      return "#";
    }

    var _ = function (s) {
      function l(e) {
        var t;
        d(this, l), S(v(t = p(this, m(l).call(this))), "client", void 0), S(v(t), "indexName", void 0), S(v(t), "insightsClient", void 0), S(v(t), "onStateChange", null), S(v(t), "helper", void 0), S(v(t), "mainHelper", void 0), S(v(t), "mainIndex", void 0), S(v(t), "started", void 0), S(v(t), "templatesConfig", void 0), S(v(t), "renderState", {}), S(v(t), "_stalledSearchDelay", void 0), S(v(t), "_searchStalledTimer", void 0), S(v(t), "_isSearchStalled", void 0), S(v(t), "_initialUiState", void 0), S(v(t), "_createURL", void 0), S(v(t), "_searchFunction", void 0), S(v(t), "_mainHelperSearch", void 0), S(v(t), "middleware", []), S(v(t), "sendEventToInsights", void 0), S(v(t), "scheduleSearch", (0, a.defer)(function () {
          t.started && t.mainHelper.search();
        })), S(v(t), "scheduleRender", (0, a.defer)(function () {
          t.mainHelper.hasPendingRequests() || (clearTimeout(t._searchStalledTimer), t._searchStalledTimer = null, t._isSearchStalled = !1), t.mainIndex.render({
            instantSearchInstance: v(t)
          }), t.emit("render");
        })), S(v(t), "setUiState", function (e) {
          if (!t.mainHelper) throw new Error(b("The `start` method needs to be called before `setUiState`."));
          t.mainIndex.refreshUiState();
          var n = "function" == typeof e ? e(t.mainIndex.getWidgetUiState({})) : e;
          !function e(t) {
            t.getHelper().overrideStateWithoutTriggeringChangeEvent(t.getWidgetSearchParameters(t.getHelper().state, {
              uiState: n[t.getIndexId()]
            })), t.getWidgets().filter(r.isIndexWidget).forEach(e);
          }(t.mainIndex), t.scheduleSearch(), t.onInternalStateChange();
        }), S(v(t), "onInternalStateChange", function () {
          var e = t.mainIndex.getWidgetUiState({});
          t.middleware.forEach(function (t) {
            t.onStateChange({
              uiState: e
            });
          });
        });
        var s = e.indexName,
            u = void 0 === s ? null : s,
            c = e.numberLocale,
            h = e.initialUiState,
            f = void 0 === h ? {} : h,
            g = e.routing,
            y = void 0 === g ? null : g,
            _ = e.searchFunction,
            x = e.stalledSearchDelay,
            T = void 0 === x ? 200 : x,
            E = e.searchClient,
            I = void 0 === E ? null : E,
            W = e.insightsClient,
            O = void 0 === W ? null : W,
            C = e.onStateChange,
            H = void 0 === C ? null : C;
        if (null === u) throw new Error(b("The `indexName` option is required."));
        if (null === I) throw new Error(b("The `searchClient` option is required."));
        if ("function" != typeof I.search) throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
        if ("function" == typeof I.addAlgoliaAgent && I.addAlgoliaAgent("instantsearch.js (".concat(n.default, ")")), O && "function" != typeof O) throw new Error(b("The `insightsClient` option should be a function."));

        if (t.client = I, t.insightsClient = O, t.indexName = u, t.helper = null, t.mainHelper = null, t.mainIndex = (0, r.default)({
          indexName: u
        }), t.onStateChange = H, t.started = !1, t.templatesConfig = {
          helpers: (0, i.default)({
            numberLocale: c
          }),
          compileOptions: {}
        }, t._stalledSearchDelay = T, t._searchStalledTimer = null, t._isSearchStalled = !1, t._createURL = w, t._initialUiState = f, _ && (t._searchFunction = _), t.sendEventToInsights = a.noop, y) {
          var P = "boolean" == typeof y ? void 0 : y;
          t.use((0, o.createRouterMiddleware)(P));
        }

        return t;
      }

      return g(l, t.default), f(l, [{
        key: "use",
        value: function value() {
          for (var e = this, t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
            r[n] = arguments[n];
          }

          var i = r.map(function (t) {
            var r = t({
              instantSearchInstance: e
            });
            return e.middleware.push(r), r;
          });
          return this.started && i.forEach(function (e) {
            e.subscribe();
          }), this;
        }
      }, {
        key: "EXPERIMENTAL_use",
        value: function value() {
          return this.use.apply(this, arguments);
        }
      }, {
        key: "addWidget",
        value: function value(e) {
          return this.addWidgets([e]);
        }
      }, {
        key: "addWidgets",
        value: function value(e) {
          if (!Array.isArray(e)) throw new Error(b("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
          if (e.some(function (e) {
            return "function" != typeof e.init && "function" != typeof e.render;
          })) throw new Error(b("The widget definition expects a `render` and/or an `init` method."));
          return this.mainIndex.addWidgets(e), this;
        }
      }, {
        key: "removeWidget",
        value: function value(e) {
          return this.removeWidgets([e]);
        }
      }, {
        key: "removeWidgets",
        value: function value(e) {
          if (!Array.isArray(e)) throw new Error(b("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
          if (e.some(function (e) {
            return "function" != typeof e.dispose;
          })) throw new Error(b("The widget definition expects a `dispose` method."));
          return this.mainIndex.removeWidgets(e), this;
        }
      }, {
        key: "start",
        value: function value() {
          var t = this;
          if (this.started) throw new Error(b("The `start` method has already been called once."));
          var r = (0, e.default)(this.client, this.indexName);

          if (r.search = function () {
            return r.searchOnlyWithDerivedHelpers();
          }, this._searchFunction) {
            var n = {
              search: function search() {
                return new Promise(a.noop);
              }
            };
            this._mainHelperSearch = r.search.bind(r), r.search = function () {
              var i = t.mainIndex.getHelper(),
                  a = (0, e.default)(n, i.state.index, i.state);
              return a.once("search", function (e) {
                var r = e.state;
                i.overrideStateWithoutTriggeringChangeEvent(r), t._mainHelperSearch();
              }), a.on("change", function (e) {
                var t = e.state;
                i.setState(t);
              }), t._searchFunction(a), r;
            };
          }

          r.on("error", function (e) {
            var r = e.error;
            t.emit("error", {
              error: r
            });
          }), this.mainHelper = r, this.mainIndex.init({
            instantSearchInstance: this,
            parent: null,
            uiState: this._initialUiState
          }), this.middleware.forEach(function (e) {
            e.subscribe();
          }), r.search(), this.helper = this.mainIndex.getHelper(), this.started = !0;
        }
      }, {
        key: "dispose",
        value: function value() {
          this.scheduleSearch.cancel(), this.scheduleRender.cancel(), clearTimeout(this._searchStalledTimer), this.removeWidgets(this.mainIndex.getWidgets()), this.mainIndex.dispose(), this.started = !1, this.removeAllListeners(), this.mainHelper.removeAllListeners(), this.mainHelper = null, this.helper = null, this.middleware.forEach(function (e) {
            e.unsubscribe();
          });
        }
      }, {
        key: "scheduleStalledRender",
        value: function value() {
          var e = this;
          this._searchStalledTimer || (this._searchStalledTimer = setTimeout(function () {
            e._isSearchStalled = !0, e.scheduleRender();
          }, this._stalledSearchDelay));
        }
      }, {
        key: "createURL",
        value: function value() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (!this.started) throw new Error(b("The `start` method needs to be called before `createURL`."));
          return this._createURL(e);
        }
      }, {
        key: "refresh",
        value: function value() {
          if (!this.mainHelper) throw new Error(b("The `start` method needs to be called before `refresh`."));
          this.mainHelper.clearCache().search();
        }
      }]), l;
    }(),
        x = _;

    exports.default = x;
  }, {
    "algoliasearch-helper": "W0rk",
    "events": "K1mi",
    "../widgets/index/index": "DXmI",
    "./version": "ww6W",
    "./createHelpers": "qzqC",
    "./utils": "Xobp",
    "../middlewares/createRouterMiddleware": "noeX"
  }],
  "NhZK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = s;

    var t = require("../utils");

    function e(t, e) {
      if (null == t) return {};
      var n,
          i,
          o = r(t, e);

      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);

        for (i = 0; i < s.length; i++) {
          n = s[i], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
        }
      }

      return o;
    }

    function r(t, e) {
      if (null == t) return {};
      var r,
          n,
          i = {},
          o = Object.keys(t);

      for (n = 0; n < o.length; n++) {
        r = o[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
      }

      return i;
    }

    function n(t) {
      var r = t || {};
      r.page;
      return e(r, ["page"]);
    }

    var i = "ais.infiniteHits";

    function o() {
      return "undefined" != typeof window && void 0 !== window.sessionStorage;
    }

    function s() {
      return {
        read: function read(e) {
          var r = e.state;
          if (!o()) return null;

          try {
            var s = JSON.parse(window.sessionStorage.getItem(i));
            return s && (0, t.isEqual)(s.state, n(r)) ? s.hits : null;
          } catch (a) {
            if (a instanceof SyntaxError) try {
              window.sessionStorage.removeItem(i);
            } catch (u) {}
            return null;
          }
        },
        write: function write(t) {
          var e = t.state,
              r = t.hits;
          if (o()) try {
            window.sessionStorage.setItem(i, JSON.stringify({
              state: n(e),
              hits: r
            }));
          } catch (s) {}
        }
      };
    }
  }, {
    "../utils": "Xobp"
  }],
  "bMWD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "createInfiniteHitsSessionStorageCache", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    });
    var e = t(require("./sessionStorage"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./sessionStorage": "NhZK"
  }],
  "SiVx": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = i(require("./lib/InstantSearch")),
        t = i(require("./lib/version")),
        n = require("./helpers"),
        r = require("./lib/infiniteHitsCache");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var s = function s(t) {
      return new e.default(t);
    };

    s.version = t.default, s.snippet = n.snippet, s.highlight = n.highlight, s.insights = n.insights, s.getInsightsAnonymousUserToken = n.getInsightsAnonymousUserToken, s.createInfiniteHitsSessionStorageCache = r.createInfiniteHitsSessionStorageCache, Object.defineProperty(s, "widgets", {
      get: function get() {
        throw new ReferenceError("\"instantsearch.widgets\" are not available from the ES build.\n\nTo import the widgets:\n\nimport { searchBox } from 'instantsearch.js/es/widgets'");
      }
    }), Object.defineProperty(s, "connectors", {
      get: function get() {
        throw new ReferenceError("\"instantsearch.connectors\" are not available from the ES build.\n\nTo import the connectors:\n\nimport { connectSearchBox } from 'instantsearch.js/es/connectors'");
      }
    });
    var o = s;
    exports.default = o;
  }, {
    "./lib/InstantSearch": "zZzJ",
    "./lib/version": "ww6W",
    "./helpers": "H3Uy",
    "./lib/infiniteHitsCache": "bMWD"
  }],
  "DOKG": [function (require, module, exports) {
    "use strict";

    function i(i) {
      return '\n    <div class="hit">\n      <div class="hit-image">\n        <img src="'.concat(i.image, '" />\n      </div>\n      <div class="hit-content">\n        <div>\n          <div class="hit-name">').concat(i._highlightResult.name.value, '</div>\n          <div class="hit-description">').concat(i._snippetResult.description.value, '</div>\n        </div>\n        <div class="hit-price">').concat(i.price, "</div>\n      </div>\n    </div>\n  ");
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.hitTemplate = i;
  }, {}],
  "u8ui": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.render = F, exports.hydrate = H, exports.h = exports.createElement = f, exports.Fragment = h, exports.createRef = d, exports.Component = v, exports.cloneElement = O, exports.createContext = R, exports.toChildArray = b, exports.__u = M, exports.options = exports.isValidElement = void 0;

    var e,
        t,
        n,
        _,
        l,
        o,
        r,
        u = {},
        i = [],
        s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function p(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }

      return e;
    }

    function c(e) {
      var t = e.parentNode;
      t && t.removeChild(e);
    }

    function f(e, t, n) {
      var _,
          l,
          o,
          r = arguments,
          u = {};

      for (o in t) {
        "key" == o ? _ = t[o] : "ref" == o ? l = t[o] : u[o] = t[o];
      }

      if (arguments.length > 3) for (n = [n], o = 3; o < arguments.length; o++) {
        n.push(r[o]);
      }
      if (null != n && (u.children = n), "function" == typeof e && null != e.defaultProps) for (o in e.defaultProps) {
        void 0 === u[o] && (u[o] = e.defaultProps[o]);
      }
      return a(e, u, _, l, null);
    }

    function a(t, n, _, l, o) {
      var r = {
        type: t,
        props: n,
        key: _,
        ref: l,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o ? ++e.__v : o
      };
      return null != e.vnode && e.vnode(r), r;
    }

    function d() {
      return {
        current: null
      };
    }

    function h(e) {
      return e.children;
    }

    function v(e, t) {
      this.props = e, this.context = t;
    }

    function y(e, t) {
      if (null == t) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;

      for (var n; t < e.__k.length; t++) {
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      }

      return "function" == typeof e.type ? y(e) : null;
    }

    function m(e) {
      var t, n;

      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) {
          if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e;
            break;
          }
        }

        return m(e);
      }
    }

    function g(t) {
      (!t.__d && (t.__d = !0) && n.push(t) && !k.__r++ || l !== e.debounceRendering) && ((l = e.debounceRendering) || _)(k);
    }

    function k() {
      for (var e; k.__r = n.length;) {
        e = n.sort(function (e, t) {
          return e.__v.__b - t.__v.__b;
        }), n = [], e.some(function (e) {
          var t, n, _, l, o, r, u;

          e.__d && (r = (o = (t = e).__v).__e, (u = t.__P) && (n = [], (_ = p({}, o)).__v = o.__v + 1, l = A(u, o, _, t.__n, void 0 !== u.ownerSVGElement, null != o.__h ? [r] : null, n, null == r ? y(o) : r, o.__h), D(n, o), l != r && m(o)));
        });
      }
    }

    function x(e, t, n, _, l, o, r, s, p, f) {
      var d,
          v,
          m,
          g,
          k,
          x,
          b,
          w = _ && _.__k || i,
          S = w.length;

      for (p == u && (p = null != r ? r[0] : S ? y(_, 0) : null), n.__k = [], d = 0; d < t.length; d++) {
        if (null != (g = n.__k[d] = null == (g = t[d]) || "boolean" == typeof g ? null : "string" == typeof g || "number" == typeof g ? a(null, g, null, null, g) : Array.isArray(g) ? a(h, {
          children: g
        }, null, null, null) : null != g.__e || null != g.__c ? a(g.type, g.props, g.key, null, g.__v) : g)) {
          if (g.__ = n, g.__b = n.__b + 1, null === (m = w[d]) || m && g.key == m.key && g.type === m.type) w[d] = void 0;else for (v = 0; v < S; v++) {
            if ((m = w[v]) && g.key == m.key && g.type === m.type) {
              w[v] = void 0;
              break;
            }

            m = null;
          }
          k = A(e, g, m = m || u, l, o, r, s, p, f), (v = g.ref) && m.ref != v && (b || (b = []), m.ref && b.push(m.ref, null, g), b.push(v, g.__c || k, g)), null != k ? (null == x && (x = k), p = C(e, g, m, w, r, k, p), f || "option" != n.type ? "function" == typeof n.type && (n.__d = p) : e.value = "") : p && m.__e == p && p.parentNode != e && (p = y(m));
        }
      }

      if (n.__e = x, null != r && "function" != typeof n.type) for (d = r.length; d--;) {
        null != r[d] && c(r[d]);
      }

      for (d = S; d--;) {
        null != w[d] && M(w[d], w[d]);
      }

      if (b) for (d = 0; d < b.length; d++) {
        L(b[d], b[++d], b[++d]);
      }
    }

    function b(e, t) {
      return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some(function (e) {
        b(e, t);
      }) : t.push(e)), t;
    }

    function C(e, t, n, _, l, o, r) {
      var u, i, s;
      if (void 0 !== t.__d) u = t.__d, t.__d = void 0;else if (l == n || o != r || null == o.parentNode) e: if (null == r || r.parentNode !== e) e.appendChild(o), u = null;else {
        for (i = r, s = 0; (i = i.nextSibling) && s < _.length; s += 2) {
          if (i == o) break e;
        }

        e.insertBefore(o, r), u = r;
      }
      return void 0 !== u ? u : o.nextSibling;
    }

    function w(e, t, n, _, l) {
      var o;

      for (o in n) {
        "children" === o || "key" === o || o in t || P(e, o, null, n[o], _);
      }

      for (o in t) {
        l && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === t[o] || P(e, o, t[o], n[o], _);
      }
    }

    function S(e, t, n) {
      "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || s.test(t) ? n : n + "px";
    }

    function P(e, t, n, _, l) {
      var o, r, u;
      if (l && "className" == t && (t = "class"), "style" === t) {
        if ("string" == typeof n) e.style.cssText = n;else {
          if ("string" == typeof _ && (e.style.cssText = _ = ""), _) for (t in _) {
            n && t in n || S(e.style, t, "");
          }
          if (n) for (t in n) {
            _ && n[t] === _[t] || S(e.style, t, n[t]);
          }
        }
      } else "o" === t[0] && "n" === t[1] ? (o = t !== (t = t.replace(/Capture$/, "")), (r = t.toLowerCase()) in e && (t = r), t = t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, u = o ? N : E, n ? _ || e.addEventListener(t, u, o) : e.removeEventListener(t, u, o)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && !l && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n));
    }

    function E(t) {
      this.l[t.type + !1](e.event ? e.event(t) : t);
    }

    function N(t) {
      this.l[t.type + !0](e.event ? e.event(t) : t);
    }

    function U(e, t, n) {
      var _, l;

      for (_ = 0; _ < e.__k.length; _++) {
        (l = e.__k[_]) && (l.__ = e, l.__e && ("function" == typeof l.type && l.__k.length > 1 && U(l, t, n), t = C(n, l, l, e.__k, null, l.__e, t), "function" == typeof e.type && (e.__d = t)));
      }
    }

    function A(t, n, _, l, o, r, u, i, s) {
      var c,
          f,
          a,
          d,
          y,
          m,
          g,
          k,
          b,
          C,
          w,
          S = n.type;
      if (void 0 !== n.constructor) return null;
      null != _.__h && (s = _.__h, i = n.__e = _.__e, n.__h = null, r = [i]), (c = e.__b) && c(n);

      try {
        e: if ("function" == typeof S) {
          if (k = n.props, b = (c = S.contextType) && l[c.__c], C = c ? b ? b.props.value : c.__ : l, _.__c ? g = (f = n.__c = _.__c).__ = f.__E : ("prototype" in S && S.prototype.render ? n.__c = f = new S(k, C) : (n.__c = f = new v(k, C), f.constructor = S, f.render = W), b && b.sub(f), f.props = k, f.state || (f.state = {}), f.context = C, f.__n = l, a = f.__d = !0, f.__h = []), null == f.__s && (f.__s = f.state), null != S.getDerivedStateFromProps && (f.__s == f.state && (f.__s = p({}, f.__s)), p(f.__s, S.getDerivedStateFromProps(k, f.__s))), d = f.props, y = f.state, a) null == S.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount);else {
            if (null == S.getDerivedStateFromProps && k !== d && null != f.componentWillReceiveProps && f.componentWillReceiveProps(k, C), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(k, f.__s, C) || n.__v === _.__v) {
              f.props = k, f.state = f.__s, n.__v !== _.__v && (f.__d = !1), f.__v = n, n.__e = _.__e, n.__k = _.__k, f.__h.length && u.push(f), U(n, i, t);
              break e;
            }

            null != f.componentWillUpdate && f.componentWillUpdate(k, f.__s, C), null != f.componentDidUpdate && f.__h.push(function () {
              f.componentDidUpdate(d, y, m);
            });
          }
          f.context = C, f.props = k, f.state = f.__s, (c = e.__r) && c(n), f.__d = !1, f.__v = n, f.__P = t, c = f.render(f.props, f.state, f.context), f.state = f.__s, null != f.getChildContext && (l = p(p({}, l), f.getChildContext())), a || null == f.getSnapshotBeforeUpdate || (m = f.getSnapshotBeforeUpdate(d, y)), w = null != c && c.type == h && null == c.key ? c.props.children : c, x(t, Array.isArray(w) ? w : [w], n, _, l, o, r, u, i, s), f.base = n.__e, n.__h = null, f.__h.length && u.push(f), g && (f.__E = f.__ = null), f.__e = !1;
        } else null == r && n.__v === _.__v ? (n.__k = _.__k, n.__e = _.__e) : n.__e = T(_.__e, n, _, l, o, r, u, s);

        (c = e.diffed) && c(n);
      } catch (t) {
        n.__v = null, (s || null != r) && (n.__e = i, n.__h = !!s, r[r.indexOf(i)] = null), e.__e(t, n, _);
      }

      return n.__e;
    }

    function D(t, n) {
      e.__c && e.__c(n, t), t.some(function (n) {
        try {
          t = n.__h, n.__h = [], t.some(function (e) {
            e.call(n);
          });
        } catch (t) {
          e.__e(t, n.__v);
        }
      });
    }

    function T(e, t, n, _, l, o, r, s) {
      var p,
          c,
          f,
          a,
          d,
          h = n.props,
          v = t.props;
      if (l = "svg" === t.type || l, null != o) for (p = 0; p < o.length; p++) {
        if (null != (c = o[p]) && ((null === t.type ? 3 === c.nodeType : c.localName === t.type) || e == c)) {
          e = c, o[p] = null;
          break;
        }
      }

      if (null == e) {
        if (null === t.type) return document.createTextNode(v);
        e = l ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, v.is && {
          is: v.is
        }), o = null, s = !1;
      }

      if (null === t.type) h === v || s && e.data === v || (e.data = v);else {
        if (null != o && (o = i.slice.call(e.childNodes)), f = (h = n.props || u).dangerouslySetInnerHTML, a = v.dangerouslySetInnerHTML, !s) {
          if (null != o) for (h = {}, d = 0; d < e.attributes.length; d++) {
            h[e.attributes[d].name] = e.attributes[d].value;
          }
          (a || f) && (a && (f && a.__html == f.__html || a.__html === e.innerHTML) || (e.innerHTML = a && a.__html || ""));
        }

        w(e, v, h, l, s), a ? t.__k = [] : (p = t.props.children, x(e, Array.isArray(p) ? p : [p], t, n, _, "foreignObject" !== t.type && l, o, r, u, s)), s || ("value" in v && void 0 !== (p = v.value) && (p !== e.value || "progress" === t.type && !p) && P(e, "value", p, h.value, !1), "checked" in v && void 0 !== (p = v.checked) && p !== e.checked && P(e, "checked", p, h.checked, !1));
      }
      return e;
    }

    function L(t, n, _) {
      try {
        "function" == typeof t ? t(n) : t.current = n;
      } catch (t) {
        e.__e(t, _);
      }
    }

    function M(t, n, _) {
      var l, o, r;

      if (e.unmount && e.unmount(t), (l = t.ref) && (l.current && l.current !== t.__e || L(l, null, n)), _ || "function" == typeof t.type || (_ = null != (o = t.__e)), t.__e = t.__d = void 0, null != (l = t.__c)) {
        if (l.componentWillUnmount) try {
          l.componentWillUnmount();
        } catch (t) {
          e.__e(t, n);
        }
        l.base = l.__P = null;
      }

      if (l = t.__k) for (r = 0; r < l.length; r++) {
        l[r] && M(l[r], n, _);
      }
      null != o && c(o);
    }

    function W(e, t, n) {
      return this.constructor(e, n);
    }

    function F(t, n, _) {
      var l, r, s;
      e.__ && e.__(t, n), r = (l = _ === o) ? null : _ && _.__k || n.__k, t = f(h, null, [t]), s = [], A(n, (l ? n : _ || n).__k = t, r || u, u, void 0 !== n.ownerSVGElement, _ && !l ? [_] : r ? null : n.childNodes.length ? i.slice.call(n.childNodes) : null, s, _ || u, l), D(s, t);
    }

    function H(e, t) {
      F(e, t, o);
    }

    function O(e, t, n) {
      var _,
          l,
          o,
          r = arguments,
          u = p({}, e.props);

      for (o in t) {
        "key" == o ? _ = t[o] : "ref" == o ? l = t[o] : u[o] = t[o];
      }

      if (arguments.length > 3) for (n = [n], o = 3; o < arguments.length; o++) {
        n.push(r[o]);
      }
      return null != n && (u.children = n), a(e.type, u, _ || e.key, l || e.ref, null);
    }

    function R(e, t) {
      var n = {
        __c: t = "__cC" + r++,
        __: e,
        Consumer: function Consumer(e, t) {
          return e.children(t);
        },
        Provider: function Provider(e, n, _) {
          return this.getChildContext || (n = [], (_ = {})[t] = this, this.getChildContext = function () {
            return _;
          }, this.shouldComponentUpdate = function (e) {
            this.props.value !== e.value && n.some(g);
          }, this.sub = function (e) {
            n.push(e);
            var t = e.componentWillUnmount;

            e.componentWillUnmount = function () {
              n.splice(n.indexOf(e), 1), t && t.call(e);
            };
          }), e.children;
        }
      };
      return n.Provider.__ = n.Consumer.contextType = n;
    }

    exports.isValidElement = t, exports.options = e, exports.options = e = {
      __e: function __e(e, t) {
        for (var n, _, l, o = t.__h; t = t.__;) {
          if ((n = t.__c) && !n.__) try {
            if ((_ = n.constructor) && null != _.getDerivedStateFromError && (n.setState(_.getDerivedStateFromError(e)), l = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), l = n.__d), l) return t.__h = o, n.__E = n;
          } catch (t) {
            e = t;
          }
        }

        throw e;
      },
      __v: 0
    }, exports.isValidElement = t = function t(e) {
      return null != e && void 0 === e.constructor;
    }, v.prototype.setState = function (e, t) {
      var n;
      n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e && (e = e(p({}, n), this.props)), e && p(n, e), null != e && this.__v && (t && this.__h.push(t), g(this));
    }, v.prototype.forceUpdate = function (e) {
      this.__v && (this.__e = !0, e && this.__h.push(e), g(this));
    }, v.prototype.render = h, n = [], _ = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, k.__r = 0, o = u, r = 0;
  }, {}],
  "G1XI": [function (require, module, exports) {
    var define;
    var e;
    !function () {
      "use strict";

      var r = {}.hasOwnProperty;

      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var o = arguments[t];

          if (o) {
            var a = _typeof(o);

            if ("string" === a || "number" === a) e.push(o);else if (Array.isArray(o) && o.length) {
              var s = n.apply(null, o);
              s && e.push(s);
            } else if ("object" === a) for (var u in o) {
              r.call(o, u) && o[u] && e.push(u);
            }
          }
        }

        return e.join(" ");
      }

      "undefined" != typeof module && module.exports ? (n.default = n, module.exports = n) : "function" == typeof e && "object" == _typeof(e.amd) && e.amd ? e("classnames", [], function () {
        return n;
      }) : window.classNames = n;
    }();
  }, {}],
  "wp6U": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("preact"),
        e = require("../../lib/utils");

    function o(t) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function r() {
      return (r = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var o = arguments[e];

          for (var r in o) {
            Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function p(t, e) {
      for (var o = 0; o < e.length; o++) {
        var r = e[o];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    function i(t, e, o) {
      return e && p(t.prototype, e), o && p(t, o), t;
    }

    function s(t, e) {
      return !e || "object" !== o(e) && "function" != typeof e ? u(t) : e;
    }

    function u(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function a(t) {
      return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function l(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && f(t, e);
    }

    function f(t, e) {
      return (f = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    var c = function (o) {
      function p() {
        return n(this, p), s(this, a(p).apply(this, arguments));
      }

      return l(p, t.Component), i(p, [{
        key: "shouldComponentUpdate",
        value: function value(t) {
          return !(0, e.isEqual)(this.props.data, t.data) || this.props.templateKey !== t.templateKey || !(0, e.isEqual)(this.props.rootProps, t.rootProps);
        }
      }, {
        key: "render",
        value: function value() {
          var o = this.props.rootTagName,
              n = this.props.useCustomCompileOptions[this.props.templateKey] ? this.props.templatesConfig.compileOptions : {},
              p = (0, e.renderTemplate)({
            templates: this.props.templates,
            templateKey: this.props.templateKey,
            compileOptions: n,
            helpers: this.props.templatesConfig.helpers,
            data: this.props.data,
            bindEvent: this.props.bindEvent
          });
          return null === p ? null : (0, t.h)(o, r({}, this.props.rootProps, {
            dangerouslySetInnerHTML: {
              __html: p
            }
          }));
        }
      }]), p;
    }();

    c.defaultProps = {
      data: {},
      rootTagName: "div",
      useCustomCompileOptions: {},
      templates: {},
      templatesConfig: {}
    };
    var y = c;
    exports.default = y;
  }, {
    "preact": "u8ui",
    "../../lib/utils": "Xobp"
  }],
  "CjCv": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = a(require("classnames")),
        r = a(require("../Template/Template"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      return (n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];

          for (var a in r) {
            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function s(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var o = function o(a) {
      var o = a.hasRefinements,
          l = a.refine,
          u = a.cssClasses,
          i = a.templateProps;
      return (0, e.h)("div", {
        className: u.root
      }, (0, e.h)(r.default, n({}, i, {
        templateKey: "resetLabel",
        rootTagName: "button",
        rootProps: {
          className: (0, t.default)(u.button, s({}, u.disabledButton, !o)),
          onClick: l,
          disabled: !o
        },
        data: {
          hasRefinements: o
        }
      })));
    },
        l = o;

    exports.default = l;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../Template/Template": "wp6U"
  }],
  "MEIg": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function t(e) {
      return i(e) || n(e) || r();
    }

    function r() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function n(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function i(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }

        return r;
      }
    }

    function u(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(r), !0).forEach(function (t) {
          o(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function o(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var c = (0, e.createDocumentationMessageGenerator)({
      name: "clear-refinements",
      connector: !0
    }),
        s = function s(r) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(r, c()), function (i) {
        var u = i || {},
            o = u.includedAttributes,
            s = void 0 === o ? [] : o,
            l = u.excludedAttributes,
            d = void 0 === l ? ["query"] : l,
            b = u.transformItems,
            p = void 0 === b ? function (e) {
          return e;
        } : b;
        if (i.includedAttributes && i.excludedAttributes) throw new Error(c("The options `includedAttributes` and `excludedAttributes` cannot be used together."));

        var m = {
          refine: e.noop,
          createURL: function createURL() {
            return "";
          },
          attributesToClear: []
        },
            h = function h() {
          return m.refine();
        },
            g = function g() {
          return m.createURL();
        };

        return {
          $$type: "ais.clearRefinements",
          init: function init(e) {
            var t = e.instantSearchInstance;
            r(a({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !0);
          },
          render: function render(e) {
            var t = e.instantSearchInstance;
            r(a({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !1);
          },
          dispose: function dispose() {
            n();
          },
          getRenderState: function getRenderState(e, t) {
            return a({}, e, {
              clearRefinements: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(r) {
            var n = r.createURL,
                u = r.scopedResults;
            return m.attributesToClear = u.reduce(function (e, t) {
              return e.concat(f({
                scopedResult: t,
                includedAttributes: s,
                excludedAttributes: d,
                transformItems: p
              }));
            }, []), m.refine = function () {
              m.attributesToClear.forEach(function (t) {
                var r = t.helper,
                    n = t.items;
                r.setState((0, e.clearRefinements)({
                  helper: r,
                  attributesToClear: n
                })).search();
              });
            }, m.createURL = function () {
              return n(e.mergeSearchParameters.apply(void 0, t(m.attributesToClear.map(function (t) {
                var r = t.helper,
                    n = t.items;
                return (0, e.clearRefinements)({
                  helper: r,
                  attributesToClear: n
                });
              }))));
            }, {
              hasRefinements: m.attributesToClear.some(function (e) {
                return e.items.length > 0;
              }),
              refine: h,
              createURL: g,
              widgetParams: i
            };
          }
        };
      };
    };

    function f(t) {
      var r = t.scopedResult,
          n = t.includedAttributes,
          i = t.excludedAttributes,
          u = t.transformItems,
          a = -1 !== n.indexOf("query") || -1 === i.indexOf("query");
      return {
        helper: r.helper,
        items: u((0, e.uniq)((0, e.getRefinements)(r.results, r.helper.state, a).map(function (e) {
          return e.attribute;
        }).filter(function (e) {
          return 0 === n.length || -1 !== n.indexOf(e);
        }).filter(function (e) {
          return "query" === e && a || -1 === i.indexOf(e);
        })))
      };
    }

    var l = s;
    exports.default = l;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "oFwE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      resetLabel: "Clear refinements"
    };
    exports.default = e;
  }, {}],
  "UDIH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = o(require("../../components/ClearRefinements/ClearRefinements")),
        r = o(require("classnames")),
        n = o(require("../../connectors/clear-refinements/connectClearRefinements")),
        s = o(require("./defaultTemplates")),
        a = require("../../lib/utils"),
        i = require("../../lib/suit");

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, a.createDocumentationMessageGenerator)({
      name: "clear-refinements"
    }),
        l = (0, i.component)("ClearRefinements"),
        d = function d(r) {
      var n = r.containerNode,
          i = r.cssClasses,
          o = r.renderState,
          u = r.templates;
      return function (r, l) {
        var d = r.refine,
            c = r.hasRefinements,
            f = r.instantSearchInstance;
        l ? o.templateProps = (0, a.prepareTemplateProps)({
          defaultTemplates: s.default,
          templatesConfig: f.templatesConfig,
          templates: u
        }) : (0, e.render)((0, e.h)(t.default, {
          refine: d,
          cssClasses: i,
          hasRefinements: c,
          templateProps: o.templateProps
        }), n);
      };
    },
        c = function c(t) {
      var i = t || {},
          o = i.container,
          c = i.templates,
          f = void 0 === c ? s.default : c,
          m = i.includedAttributes,
          p = i.excludedAttributes,
          b = i.transformItems,
          C = i.cssClasses,
          v = void 0 === C ? {} : C;
      if (!o) throw new Error(u("The `container` option is required."));
      var q = (0, a.getContainerNode)(o),
          h = {
        root: (0, r.default)(l(), v.root),
        button: (0, r.default)(l({
          descendantName: "button"
        }), v.button),
        disabledButton: (0, r.default)(l({
          descendantName: "button",
          modifierName: "disabled"
        }), v.disabledButton)
      },
          N = d({
        containerNode: q,
        cssClasses: h,
        renderState: {},
        templates: f
      });
      return (0, n.default)(N, function () {
        return (0, e.render)(null, q);
      })({
        includedAttributes: m,
        excludedAttributes: p,
        transformItems: b
      });
    },
        f = c;

    exports.default = f;
  }, {
    "preact": "u8ui",
    "../../components/ClearRefinements/ClearRefinements": "CjCv",
    "classnames": "G1XI",
    "../../connectors/clear-refinements/connectClearRefinements": "MEIg",
    "./defaultTemplates": "oFwE",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "iOjR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = t(require("algoliasearch-helper")),
        r = require("../../lib/utils");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(e, r) {
      var t = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        r && (a = a.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, a);
      }

      return t;
    }

    function n(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? a(Object(t), !0).forEach(function (r) {
          i(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }

      return e;
    }

    function i(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }

    var c = (0, r.createDocumentationMessageGenerator)({
      name: "configure",
      connector: !0
    });

    function s(e, r) {
      return e.setQueryParameters(Object.keys(r.searchParameters).reduce(function (e, r) {
        return n({}, e, i({}, r, void 0));
      }, {}));
    }

    var o = function o() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.noop,
          a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.noop;
      return function (i) {
        if (!i || !(0, r.isPlainObject)(i.searchParameters)) throw new Error(c("The `searchParameters` option expects an object."));
        var o = {};
        return {
          $$type: "ais.configure",
          init: function init(e) {
            var r = e.instantSearchInstance;
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !0);
          },
          render: function render(e) {
            var r = e.instantSearchInstance;
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !1);
          },
          dispose: function dispose(e) {
            var r = e.state;
            return a(), s(r, i);
          },
          getRenderState: function getRenderState(t, a) {
            var i,
                c = this.getWidgetRenderState(a);
            return n({}, t, {
              configure: n({}, c, {
                widgetParams: n({}, c.widgetParams, {
                  searchParameters: (0, r.mergeSearchParameters)(new e.default.SearchParameters(null === (i = t.configure) || void 0 === i ? void 0 : i.widgetParams.searchParameters), new e.default.SearchParameters(c.widgetParams.searchParameters)).getQueryParams()
                })
              })
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var a = t.helper;
            return o.refine || (o.refine = function (t) {
              return function (a) {
                var n = s(t.state, i),
                    c = (0, r.mergeSearchParameters)(n, new e.default.SearchParameters(a));
                i.searchParameters = a, t.setState(c).search();
              };
            }(a)), {
              refine: o.refine,
              widgetParams: i
            };
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(t, a) {
            var c = a.uiState;
            return (0, r.mergeSearchParameters)(t, new e.default.SearchParameters(n({}, c.configure, {}, i.searchParameters)));
          },
          getWidgetUiState: function getWidgetUiState(e) {
            return n({}, e, {
              configure: n({}, e.configure, {}, i.searchParameters)
            });
          }
        };
      };
    },
        u = o;

    exports.default = u;
  }, {
    "algoliasearch-helper": "W0rk",
    "../../lib/utils": "Xobp"
  }],
  "MA4S": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = t(require("../../connectors/configure/connectConfigure")),
        r = require("../../lib/utils");

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = function u(t) {
      return (0, e.default)(r.noop)({
        searchParameters: t
      });
    },
        o = u;

    exports.default = o;
  }, {
    "../../connectors/configure/connectConfigure": "iOjR",
    "../../lib/utils": "Xobp"
  }],
  "jAYr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = n(require("algoliasearch-helper")),
        r = require("../../lib/utils"),
        t = n(require("../configure/connectConfigure"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(e, r) {
      var t = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
      }

      return t;
    }

    function a(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? o(Object(t), !0).forEach(function (r) {
          i(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }

      return e;
    }

    function i(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }

    function c(e) {
      return f(e) || s(e) || u();
    }

    function u() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function s(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function f(e) {
      if (Array.isArray(e)) {
        for (var r = 0, t = new Array(e.length); r < e.length; r++) {
          t[r] = e[r];
        }

        return t;
      }
    }

    var l = (0, r.createDocumentationMessageGenerator)({
      name: "configure-related-items",
      connector: !0
    });

    function b(e) {
      var r = e.attributeName,
          t = e.attributeValue,
          n = e.attributeScore;
      return "".concat(r, ":").concat(t, "<score=").concat(n || 1, ">");
    }

    var p = function p(n, o) {
      return function (i) {
        var u = i || {},
            s = u.hit,
            f = u.matchingPatterns,
            p = u.transformSearchParameters,
            y = void 0 === p ? function (e) {
          return e;
        } : p;
        if (!s) throw new Error(l("The `hit` option is required."));
        if (!f) throw new Error(l("The `matchingPatterns` option is required."));
        var m = Object.keys(f).reduce(function (e, t) {
          var n = f[t],
              o = (0, r.getPropertyByPath)(s, t),
              a = n.score;
          return Array.isArray(o) ? [].concat(c(e), [o.map(function (e) {
            return b({
              attributeName: t,
              attributeValue: e,
              attributeScore: a
            });
          })]) : "string" == typeof o ? [].concat(c(e), [b({
            attributeName: t,
            attributeValue: o,
            attributeScore: a
          })]) : e;
        }, []),
            O = a({}, y(new e.default.SearchParameters({
          sumOrFiltersScores: !0,
          facetFilters: ["objectID:-".concat(s.objectID)],
          optionalFilters: m
        })));
        return a({}, (0, t.default)(n, o)({
          searchParameters: O
        }), {
          $$type: "ais.configureRelatedItems"
        });
      };
    },
        y = p;

    exports.default = y;
  }, {
    "algoliasearch-helper": "W0rk",
    "../../lib/utils": "Xobp",
    "../configure/connectConfigure": "iOjR"
  }],
  "dchU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils"),
        t = r(require("../../connectors/configure-related-items/connectConfigureRelatedItems"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = function u(r) {
      return (0, t.default)(e.noop)(r);
    },
        o = u;

    exports.default = o;
  }, {
    "../../lib/utils": "Xobp",
    "../../connectors/configure-related-items/connectConfigureRelatedItems": "jAYr"
  }],
  "SKar": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = require("../../lib/utils"),
        a = function a(e) {
      var t = e.attribute,
          a = e.value;
      return [t, e.type, a, e.operator].map(function (e) {
        return e;
      }).filter(Boolean).join(":");
    },
        l = function l(e) {
      return function (a) {
        (0, t.isSpecialClick)(a) || (a.preventDefault(), e());
      };
    },
        n = function n(_n4) {
      var r = _n4.items,
          i = _n4.cssClasses;
      return (0, e.h)("div", {
        className: i.root
      }, (0, e.h)("ul", {
        className: i.list
      }, r.map(function (n, r) {
        return (0, e.h)("li", {
          key: "".concat(n.indexName, "-").concat(n.attribute, "-").concat(r),
          className: i.item
        }, (0, e.h)("span", {
          className: i.label
        }, (0, t.capitalize)(n.label), ":"), n.refinements.map(function (t) {
          return (0, e.h)("span", {
            key: a(t),
            className: i.category
          }, (0, e.h)("span", {
            className: i.categoryLabel
          }, "query" === t.attribute ? (0, e.h)("q", null, t.label) : t.label), (0, e.h)("button", {
            className: i.delete,
            onClick: l(n.refine.bind(null, t))
          }, "✕"));
        }));
      })));
    },
        r = n;

    exports.default = r;
  }, {
    "preact": "u8ui",
    "../../lib/utils": "Xobp"
  }],
  "m3gK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function t(e) {
      return i(e) || n(e) || r();
    }

    function r() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function n(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function i(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }

        return r;
      }
    }

    function u(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(r), !0).forEach(function (t) {
          c(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function c(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var o = (0, e.createDocumentationMessageGenerator)({
      name: "current-refinements",
      connector: !0
    }),
        s = function s(t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(t, o()), function (e) {
        if ((e || {}).includedAttributes && (e || {}).excludedAttributes) throw new Error(o("The options `includedAttributes` and `excludedAttributes` cannot be used together."));
        var n = e || {},
            i = n.includedAttributes,
            u = n.excludedAttributes,
            c = void 0 === u ? ["query"] : u,
            s = n.transformItems,
            b = void 0 === s ? function (e) {
          return e;
        } : s;
        return {
          $$type: "ais.currentRefinements",
          init: function init(e) {
            var r = e.instantSearchInstance;
            t(a({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !0);
          },
          render: function render(e) {
            var r = e.instantSearchInstance;
            t(a({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !1);
          },
          dispose: function dispose() {
            r();
          },
          getRenderState: function getRenderState(e, t) {
            return a({}, e, {
              currentRefinements: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var r = t.results,
                n = t.scopedResults,
                u = t.createURL,
                a = t.helper;
            return {
              items: r ? n.reduce(function (e, t) {
                return e.concat(b(f({
                  results: t.results,
                  helper: t.helper,
                  includedAttributes: i,
                  excludedAttributes: c
                })));
              }, []) : b(f({
                results: {},
                helper: a,
                includedAttributes: i,
                excludedAttributes: c
              })),
              refine: function refine(e) {
                return d(a, e);
              },
              createURL: function createURL(e) {
                return u(l(a.state, e));
              },
              widgetParams: e
            };
          }
        };
      };
    };

    function f(r) {
      var n = r.results,
          i = r.helper,
          u = r.includedAttributes,
          a = r.excludedAttributes,
          c = -1 !== (u || []).indexOf("query") || -1 === (a || []).indexOf("query"),
          o = u ? function (e) {
        return -1 !== u.indexOf(e.attribute);
      } : function (e) {
        return -1 === a.indexOf(e.attribute);
      },
          s = (0, e.getRefinements)(n, i.state, c).map(p).filter(o);
      return s.reduce(function (e, r) {
        return [].concat(t(e.filter(function (e) {
          return e.attribute !== r.attribute;
        })), [{
          indexName: i.state.index,
          attribute: r.attribute,
          label: r.attribute,
          refinements: s.filter(function (e) {
            return e.attribute === r.attribute;
          }).sort(function (e, t) {
            return "numeric" === e.type ? e.value - t.value : 0;
          }),
          refine: function refine(e) {
            return d(i, e);
          }
        }]);
      }, []);
    }

    function l(e, t) {
      switch (t.type) {
        case "facet":
          return e.removeFacetRefinement(t.attribute, String(t.value));

        case "disjunctive":
          return e.removeDisjunctiveFacetRefinement(t.attribute, String(t.value));

        case "hierarchical":
          return e.removeHierarchicalFacetRefinement(t.attribute);

        case "exclude":
          return e.removeExcludeRefinement(t.attribute, String(t.value));

        case "numeric":
          return e.removeNumericRefinement(t.attribute, t.operator, String(t.value));

        case "tag":
          return e.removeTagRefinement(String(t.value));

        case "query":
          return e.setQueryParameter("query", "");

        default:
          return e;
      }
    }

    function d(e, t) {
      e.setState(l(e.state, t)).search();
    }

    function b(e) {
      switch (e) {
        case ">=":
          return "≥";

        case "<=":
          return "≤";

        default:
          return e;
      }
    }

    function p(e) {
      var t = "numeric" === e.type ? Number(e.name) : e.name,
          r = e.operator ? "".concat(b(e.operator), " ").concat(e.name) : e.name,
          n = {
        attribute: e.attribute,
        type: e.type,
        value: t,
        label: r
      };
      return void 0 !== e.operator && (n.operator = e.operator), void 0 !== e.count && (n.count = e.count), void 0 !== e.exhaustive && (n.exhaustive = e.exhaustive), n;
    }

    var v = s;
    exports.default = v;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "Bopc": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = i(require("classnames")),
        r = i(require("../../components/CurrentRefinements/CurrentRefinements")),
        n = i(require("../../connectors/current-refinements/connectCurrentRefinements")),
        a = require("../../lib/utils"),
        s = require("../../lib/suit");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, a.createDocumentationMessageGenerator)({
      name: "current-refinements"
    }),
        d = (0, s.component)("CurrentRefinements"),
        l = function l(t, n) {
      var a = t.items,
          s = t.widgetParams;

      if (!n) {
        var i = s.container,
            u = s.cssClasses;
        (0, e.render)((0, e.h)(r.default, {
          cssClasses: u,
          items: a
        }), i);
      }
    },
        o = function o(r) {
      var s = r || {},
          i = s.container,
          o = s.includedAttributes,
          c = s.excludedAttributes,
          f = s.cssClasses,
          m = void 0 === f ? {} : f,
          b = s.transformItems;
      if (!i) throw new Error(u("The `container` option is required."));
      var g = (0, a.getContainerNode)(i),
          v = {
        root: (0, t.default)(d(), m.root),
        list: (0, t.default)(d({
          descendantName: "list"
        }), m.list),
        item: (0, t.default)(d({
          descendantName: "item"
        }), m.item),
        label: (0, t.default)(d({
          descendantName: "label"
        }), m.label),
        category: (0, t.default)(d({
          descendantName: "category"
        }), m.category),
        categoryLabel: (0, t.default)(d({
          descendantName: "categoryLabel"
        }), m.categoryLabel),
        delete: (0, t.default)(d({
          descendantName: "delete"
        }), m.delete)
      };
      return (0, n.default)(l, function () {
        return (0, e.render)(null, g);
      })({
        container: g,
        cssClasses: v,
        includedAttributes: o,
        excludedAttributes: c,
        transformItems: b
      });
    },
        c = o;

    exports.default = c;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/CurrentRefinements/CurrentRefinements": "SKar",
    "../../connectors/current-refinements/connectCurrentRefinements": "m3gK",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "UVNx": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function n(e, n) {
      var t = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n && (i = i.filter(function (n) {
          return Object.getOwnPropertyDescriptor(e, n).enumerable;
        })), t.push.apply(t, i);
      }

      return t;
    }

    function t(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? n(Object(o), !0).forEach(function (n) {
          i(e, n, o[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(o, n));
        });
      }

      return e;
    }

    function i(e, n, t) {
      return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = t, e;
    }

    var o = (0, e.createDocumentationMessageGenerator)({
      name: "geo-search",
      connector: !0
    }),
        r = "ais.geoSearch",
        a = function a(n) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(n, o()), function () {
        var o,
            a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = a.enableRefineOnMapMove,
            u = void 0 === s || s,
            c = a.transformItems,
            f = void 0 === c ? function (e) {
          return e;
        } : c,
            d = {
          isRefineOnMapMove: u,
          hasMapMoveSinceLastRefine: !1,
          lastRefinePosition: "",
          lastRefineBoundingBox: "",
          internalToggleRefineOnMapMove: e.noop,
          internalSetMapMoveSinceLastRefine: e.noop
        },
            g = function g(n) {
          return n.aroundLatLng && (0, e.aroundLatLngToPosition)(n.aroundLatLng);
        },
            l = function l(n) {
          return n.insideBoundingBox && (0, e.insideBoundingBoxToBoundingBox)(n.insideBoundingBox);
        },
            p = function p(e) {
          return function (n) {
            var t = n.northEast,
                i = n.southWest,
                o = [t.lat, t.lng, i.lat, i.lng].join();
            e.setQueryParameter("insideBoundingBox", o).search(), d.hasMapMoveSinceLastRefine = !1, d.lastRefineBoundingBox = o;
          };
        },
            v = function v(e) {
          return function () {
            e.setQueryParameter("insideBoundingBox", void 0).search();
          };
        },
            M = function M(e) {
          return function () {
            return Boolean(e.insideBoundingBox);
          };
        },
            h = function h() {
          return d.internalToggleRefineOnMapMove();
        },
            B = function B(e, n) {
          return function () {
            d.isRefineOnMapMove = !d.isRefineOnMapMove, e(n);
          };
        },
            R = function R() {
          return d.isRefineOnMapMove;
        },
            S = function S() {
          return d.internalSetMapMoveSinceLastRefine();
        },
            O = function O(e, n) {
          return function () {
            var t = !0 !== d.hasMapMoveSinceLastRefine;
            d.hasMapMoveSinceLastRefine = !0, t && e(n);
          };
        },
            x = function x() {
          return d.hasMapMoveSinceLastRefine;
        };

        return {
          $$type: r,
          init: function init(i) {
            var o = i.instantSearchInstance;
            d.internalToggleRefineOnMapMove = B(e.noop, i), d.internalSetMapMoveSinceLastRefine = O(e.noop, i), n(t({}, this.getWidgetRenderState(i), {
              instantSearchInstance: o
            }), !0);
          },
          render: function render(e) {
            var i = e.helper,
                r = e.instantSearchInstance,
                a = i.state,
                s = Boolean(a.aroundLatLng) && Boolean(d.lastRefinePosition) && a.aroundLatLng !== d.lastRefinePosition,
                u = !a.insideBoundingBox && Boolean(d.lastRefineBoundingBox) && a.insideBoundingBox !== d.lastRefineBoundingBox;
            (s || u) && (d.hasMapMoveSinceLastRefine = !1), d.lastRefinePosition = a.aroundLatLng || "", d.lastRefineBoundingBox = a.insideBoundingBox || "", d.internalToggleRefineOnMapMove = B(this.render.bind(this), e), d.internalSetMapMoveSinceLastRefine = O(this.render.bind(this), e);
            var c = this.getWidgetRenderState(e);
            o("view", c.items), n(t({}, c, {
              instantSearchInstance: r
            }), !1);
          },
          getWidgetRenderState: function getWidgetRenderState(n) {
            var t = n.helper,
                i = n.results,
                s = n.instantSearchInstance,
                u = t.state,
                c = i ? f(i.hits.filter(function (e) {
              return e._geoloc;
            })) : [];
            return o || (o = (0, e.createSendEventForHits)({
              instantSearchInstance: s,
              index: t.getIndex(),
              widgetType: r
            })), {
              items: c,
              position: g(u),
              currentRefinement: l(u),
              refine: p(t),
              sendEvent: o,
              clearMapRefinement: v(t),
              isRefinedWithMap: M(u),
              toggleRefineOnMapMove: h,
              isRefineOnMapMove: R,
              setMapMoveSinceLastRefine: S,
              hasMapMoveSinceLastRefine: x,
              widgetParams: a
            };
          },
          getRenderState: function getRenderState(e, n) {
            return t({}, e, {
              geoSearch: this.getWidgetRenderState(n)
            });
          },
          dispose: function dispose(e) {
            var n = e.state;
            return i(), n.setQueryParameter("insideBoundingBox", void 0);
          },
          getWidgetUiState: function getWidgetUiState(e, n) {
            var i = n.searchParameters.insideBoundingBox;
            return !i || e && e.geoSearch && e.geoSearch.boundingBox === i ? e : t({}, e, {
              geoSearch: {
                boundingBox: i
              }
            });
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, n) {
            var t = n.uiState;
            return t && t.geoSearch ? e.setQueryParameter("insideBoundingBox", t.geoSearch.boundingBox) : e.setQueryParameter("insideBoundingBox", void 0);
          }
        };
      };
    },
        s = a;

    exports.default = s;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "y0HG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        r = function r(_r) {
      var a = _r.className,
          t = _r.disabled,
          s = _r.onClick,
          d = _r.children;
      return (0, e.h)("button", {
        className: a,
        onClick: s,
        disabled: t
      }, d);
    };

    r.defaultProps = {
      disabled: !1
    };
    var a = r;
    exports.default = a;
  }, {
    "preact": "u8ui"
  }],
  "H6Mo": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        a = function a(_a) {
      var c = _a.classNameLabel,
          t = _a.classNameInput,
          r = _a.checked,
          s = _a.onToggle,
          l = _a.children;
      return (0, e.h)("label", {
        className: c
      }, (0, e.h)("input", {
        className: t,
        type: "checkbox",
        checked: r,
        onChange: s
      }), l);
    },
        c = a;

    exports.default = c;
  }, {
    "preact": "u8ui"
  }],
  "wrOF": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        a = n(require("classnames")),
        t = n(require("../Template/Template")),
        l = n(require("./GeoSearchButton")),
        r = n(require("./GeoSearchToggle"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o() {
      return (o = Object.assign || function (e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = arguments[a];

          for (var l in t) {
            Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function s(e, a, t) {
      return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[a] = t, e;
    }

    var i = function i(n) {
      var i = n.cssClasses,
          u = n.enableRefine,
          c = n.enableRefineControl,
          d = n.enableClearMapRefinement,
          f = n.isRefineOnMapMove,
          p = n.isRefinedWithMap,
          m = n.hasMapMoveSinceLastRefine,
          h = n.onRefineToggle,
          b = n.onRefineClick,
          g = n.onClearClick,
          v = n.templateProps;
      return u && (0, e.h)("div", null, c && (0, e.h)("div", {
        className: i.control
      }, f || !m ? (0, e.h)(r.default, {
        classNameLabel: (0, a.default)(i.label, s({}, i.selectedLabel, f)),
        classNameInput: i.input,
        checked: f,
        onToggle: h
      }, (0, e.h)(t.default, o({}, v, {
        templateKey: "toggle",
        rootTagName: "span"
      }))) : (0, e.h)(l.default, {
        className: i.redo,
        disabled: !m,
        onClick: b
      }, (0, e.h)(t.default, o({}, v, {
        templateKey: "redo",
        rootTagName: "span"
      })))), !c && !f && (0, e.h)("div", {
        className: i.control
      }, (0, e.h)(l.default, {
        className: (0, a.default)(i.redo, s({}, i.disabledRedo, !m)),
        disabled: !m,
        onClick: b
      }, (0, e.h)(t.default, o({}, v, {
        templateKey: "redo",
        rootTagName: "span"
      })))), d && p && (0, e.h)(l.default, {
        className: i.reset,
        onClick: g
      }, (0, e.h)(t.default, o({}, v, {
        templateKey: "reset",
        rootTagName: "span"
      }))));
    },
        u = i;

    exports.default = u;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../Template/Template": "wp6U",
    "./GeoSearchButton": "y0HG",
    "./GeoSearchToggle": "H6Mo"
  }],
  "OfKf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        n = require("../../lib/utils"),
        t = r(require("../../components/GeoSearchControls/GeoSearchControls"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(e, n) {
      var t = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n && (r = r.filter(function (n) {
          return Object.getOwnPropertyDescriptor(e, n).enumerable;
        })), t.push.apply(t, r);
      }

      return t;
    }

    function o(e) {
      for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {};
        n % 2 ? a(Object(t), !0).forEach(function (n) {
          i(e, n, t[n]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
      }

      return e;
    }

    function i(e, n, t) {
      return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[n] = t, e;
    }

    function s(e, n) {
      return l(e) || u(e, n) || c();
    }

    function c() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function u(e, n) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var t = [],
            r = !0,
            a = !1,
            o = void 0;

        try {
          for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (t.push(i.value), !n || t.length !== n); r = !0) {
            ;
          }
        } catch (c) {
          a = !0, o = c;
        } finally {
          try {
            r || null == s.return || s.return();
          } finally {
            if (a) throw o;
          }
        }

        return t;
      }
    }

    function l(e) {
      if (Array.isArray(e)) return e;
    }

    var p = function p(e) {
      var n = e.refine,
          t = e.mapInstance;
      return n({
        northEast: t.getBounds().getNorthEast().toJSON(),
        southWest: t.getBounds().getSouthWest().toJSON()
      });
    },
        f = function f(e, n) {
      return e.reduce(function (e, t) {
        var r = s(e, 2),
            a = r[0],
            o = r[1];
        return n.includes(t.__id) ? [a.concat(t), o] : [a, o.concat(t)];
      }, [[], []]);
    },
        m = function m(e, n) {
      var t = n.reduce(function (e, n) {
        return e.extend(n.getPosition());
      }, new e.maps.LatLngBounds());
      return {
        northEast: t.getNorthEast().toJSON(),
        southWest: t.getSouthWest().toJSON()
      };
    },
        d = function d(e, n) {
      e.isUserInteraction = !1, n(), e.isUserInteraction = !0;
    },
        v = function v(r, a) {
      var i = r.items,
          c = r.position,
          u = r.currentRefinement,
          l = r.refine,
          v = r.clearMapRefinement,
          g = r.toggleRefineOnMapMove,
          b = r.isRefineOnMapMove,
          h = r.setMapMoveSinceLastRefine,
          O = r.hasMapMoveSinceLastRefine,
          y = r.isRefinedWithMap,
          I = r.widgetParams,
          P = r.instantSearchInstance,
          R = I.container,
          C = I.googleReference,
          M = I.cssClasses,
          j = I.templates,
          S = I.initialZoom,
          w = I.initialPosition,
          E = I.enableRefine,
          L = I.enableClearMapRefinement,
          k = I.enableRefineControl,
          _ = I.mapOptions,
          N = I.createMarker,
          W = I.markerOptions,
          B = I.renderState;

      if (a) {
        B.isUserInteraction = !0, B.isPendingRefine = !1, B.markers = [];
        var D = document.createElement("div");
        D.className = M.root, R.appendChild(D);
        var T = document.createElement("div");
        T.className = M.map, D.appendChild(T);
        var x = document.createElement("div");
        x.className = M.tree, D.appendChild(x), B.mapInstance = new C.maps.Map(T, o({
          mapTypeControl: !1,
          fullscreenControl: !1,
          streetViewControl: !1,
          clickableIcons: !1,
          zoomControlOptions: {
            position: C.maps.ControlPosition.LEFT_TOP
          }
        }, _));
        return C.maps.event.addListenerOnce(B.mapInstance, "idle", function () {
          var e = function e() {
            B.isUserInteraction && E && (h(), b() && (B.isPendingRefine = !0));
          };

          B.mapInstance.addListener("center_changed", e), B.mapInstance.addListener("zoom_changed", e), B.mapInstance.addListener("dragstart", e), B.mapInstance.addListener("idle", function () {
            B.isUserInteraction && B.isPendingRefine && (B.isPendingRefine = !1, p({
              mapInstance: B.mapInstance,
              refine: l
            }));
          });
        }), void (B.templateProps = (0, n.prepareTemplateProps)({
          templatesConfig: P.templatesConfig,
          templates: j
        }));
      }

      var U = i.map(function (e) {
        return e.objectID;
      }),
          q = s(f(B.markers, U), 2),
          J = q[0],
          A = q[1],
          z = J.map(function (e) {
        return e.__id;
      }),
          G = i.filter(function (e) {
        return !z.includes(e.objectID);
      });
      A.forEach(function (e) {
        return e.setMap(null);
      }), B.markers = J.concat(G.map(function (e) {
        var n = N({
          map: B.mapInstance,
          item: e
        });
        return Object.keys(W.events).forEach(function (t) {
          n.addListener(t, function (r) {
            W.events[t]({
              map: B.mapInstance,
              event: r,
              item: e,
              marker: n
            });
          });
        }), n;
      }));
      var Z = !O(),
          F = u ? 0 : null,
          V = !u && Boolean(B.markers.length) ? m(C, B.markers) : u;
      V && Z ? d(B, function () {
        B.mapInstance.fitBounds(new C.maps.LatLngBounds(V.southWest, V.northEast), F);
      }) : Z && d(B, function () {
        B.mapInstance.setCenter(c || w), B.mapInstance.setZoom(S);
      }), (0, e.render)((0, e.h)(t.default, {
        cssClasses: M,
        enableRefine: E,
        enableRefineControl: k,
        enableClearMapRefinement: L,
        isRefineOnMapMove: b(),
        isRefinedWithMap: y(),
        hasMapMoveSinceLastRefine: O(),
        onRefineToggle: g,
        onRefineClick: function onRefineClick() {
          return p({
            mapInstance: B.mapInstance,
            refine: l
          });
        },
        onClearClick: v,
        templateProps: B.templateProps
      }), R.querySelector(".".concat(M.tree)));
    },
        g = v;

    exports.default = g;
  }, {
    "preact": "u8ui",
    "../../lib/utils": "Xobp",
    "../../components/GeoSearchControls/GeoSearchControls": "wrOF"
  }],
  "t8Im": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      HTMLMarker: "<p>Your custom HTML Marker</p>",
      reset: "Clear the map refinement",
      toggle: "Search as I move the map",
      redo: "Redo search here"
    };
    exports.default = e;
  }, {}],
  "shC9": [function (require, module, exports) {
    "use strict";

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(t);
    }

    function t(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    function o(e, t, o) {
      return t && n(e.prototype, t), o && n(e, o), e;
    }

    function r(t, n) {
      return !n || "object" !== e(n) && "function" != typeof n ? s(t) : n;
    }

    function i(e) {
      return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function s(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function l(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && a(e, t);
    }

    function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function u(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var c = function c(e) {
      return function (n) {
        function a(n) {
          var o,
              l = n.__id,
              c = n.position,
              f = n.map,
              h = n.template,
              p = n.className,
              y = n.anchor,
              m = void 0 === y ? {
            x: 0,
            y: 0
          } : y;
          return t(this, a), u(s(o = r(this, i(a).call(this))), "__id", void 0), u(s(o), "anchor", void 0), u(s(o), "offset", void 0), u(s(o), "listeners", void 0), u(s(o), "latLng", void 0), u(s(o), "element", void 0), o.__id = l, o.anchor = m, o.listeners = {}, o.latLng = new e.maps.LatLng(c), o.element = document.createElement("div"), o.element.className = p, o.element.style.position = "absolute", o.element.innerHTML = h, o.setMap(f), o;
        }

        return l(a, e.maps.OverlayView), o(a, [{
          key: "onAdd",
          value: function value() {
            this.getPanes().overlayMouseTarget.appendChild(this.element);
            var e = this.element.getBoundingClientRect();
            this.offset = {
              x: this.anchor.x + e.width / 2,
              y: this.anchor.y + e.height
            }, this.element.style.width = "".concat(e.width, "px");
          }
        }, {
          key: "draw",
          value: function value() {
            var e = this.getProjection().fromLatLngToDivPixel(this.latLng);
            this.element.style.left = "".concat(Math.round(e.x - this.offset.x), "px"), this.element.style.top = "".concat(Math.round(e.y - this.offset.y), "px"), this.element.style.zIndex = String(parseInt(this.element.style.top, 10));
          }
        }, {
          key: "onRemove",
          value: function value() {
            var e = this;
            this.element && (this.element.parentNode.removeChild(this.element), Object.keys(this.listeners).forEach(function (t) {
              e.element.removeEventListener(t, e.listeners[t]);
            }), delete this.element, delete this.listeners);
          }
        }, {
          key: "addListener",
          value: function value(e, t) {
            this.listeners[e] = t;
            var n = this.element;
            return n.addEventListener(e, t), {
              remove: function remove() {
                return n.removeEventListener(e, t);
              }
            };
          }
        }, {
          key: "getPosition",
          value: function value() {
            return this.latLng;
          }
        }]), a;
      }();
    },
        f = c;

    exports.default = f;
  }, {}],
  "MMlH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = c(require("classnames")),
        t = require("preact"),
        r = require("../../lib/utils"),
        n = require("../../lib/suit"),
        o = c(require("../../connectors/geo-search/connectGeoSearch")),
        a = c(require("./GeoSearchRenderer")),
        i = c(require("./defaultTemplates")),
        l = c(require("./createHTMLMarker"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(r), !0).forEach(function (t) {
          u(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function u(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function f(e, t) {
      if (null == e) return {};
      var r,
          n,
          o = p(e, t);

      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);

        for (n = 0; n < a.length; n++) {
          r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        }
      }

      return o;
    }

    function p(e, t) {
      if (null == e) return {};
      var r,
          n,
          o = {},
          a = Object.keys(e);

      for (n = 0; n < a.length; n++) {
        r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
      }

      return o;
    }

    var m = (0, r.createDocumentationMessageGenerator)({
      name: "geo-search"
    }),
        b = (0, n.component)("GeoSearch"),
        O = function O() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          c = n.initialZoom,
          s = void 0 === c ? 1 : c,
          u = n.initialPosition,
          p = void 0 === u ? {
        lat: 0,
        lng: 0
      } : u,
          O = n.templates,
          g = void 0 === O ? {} : O,
          v = n.cssClasses,
          y = void 0 === v ? {} : v,
          M = n.builtInMarker,
          j = void 0 === M ? {} : M,
          h = n.customHTMLMarker,
          R = n.enableRefine,
          w = void 0 === R || R,
          P = n.enableClearMapRefinement,
          N = void 0 === P || P,
          k = n.enableRefineControl,
          q = void 0 === k || k,
          C = n.container,
          _ = n.googleReference,
          T = f(n, ["initialZoom", "initialPosition", "templates", "cssClasses", "builtInMarker", "customHTMLMarker", "enableRefine", "enableClearMapRefinement", "enableRefineControl", "container", "googleReference"]),
          S = {
        createOptions: r.noop,
        events: {}
      },
          D = {
        createOptions: r.noop,
        events: {}
      };
      if (!C) throw new Error(m("The `container` option is required."));
      if (!_) throw new Error(m("The `googleReference` option is required."));
      var L = (0, r.getContainerNode)(C),
          x = {
        root: (0, e.default)(b(), y.root),
        tree: b({
          descendantName: "tree"
        }),
        map: (0, e.default)(b({
          descendantName: "map"
        }), y.map),
        control: (0, e.default)(b({
          descendantName: "control"
        }), y.control),
        label: (0, e.default)(b({
          descendantName: "label"
        }), y.label),
        selectedLabel: (0, e.default)(b({
          descendantName: "label",
          modifierName: "selected"
        }), y.selectedLabel),
        input: (0, e.default)(b({
          descendantName: "input"
        }), y.input),
        redo: (0, e.default)(b({
          descendantName: "redo"
        }), y.redo),
        disabledRedo: (0, e.default)(b({
          descendantName: "redo",
          modifierName: "disabled"
        }), y.disabledRedo),
        reset: (0, e.default)(b({
          descendantName: "reset"
        }), y.reset)
      },
          E = d({}, i.default, {}, g),
          H = d({}, S, {}, j),
          I = (Boolean(h) || Boolean(g.HTMLMarker)) && d({}, D, {}, h),
          G = (0, l.default)(_),
          Z = I ? function (t) {
        var n = t.item,
            o = f(t, ["item"]);
        return new G(d({}, I.createOptions(n), {}, o, {
          __id: n.objectID,
          position: n._geoloc,
          className: (0, e.default)(b({
            descendantName: "marker"
          })),
          template: (0, r.renderTemplate)({
            templateKey: "HTMLMarker",
            templates: E,
            data: n
          })
        }));
      } : function (e) {
        var t = e.item,
            r = f(e, ["item"]);
        return new _.maps.Marker(d({}, H.createOptions(t), {}, r, {
          __id: t.objectID,
          position: t._geoloc
        }));
      },
          B = I || H;
      return (0, o.default)(a.default, function () {
        return (0, t.render)(null, L);
      })(d({}, T, {
        renderState: {},
        container: L,
        googleReference: _,
        initialZoom: s,
        initialPosition: p,
        templates: E,
        cssClasses: x,
        createMarker: Z,
        markerOptions: B,
        enableRefine: w,
        enableClearMapRefinement: N,
        enableRefineControl: q
      }));
    },
        g = O;

    exports.default = g;
  }, {
    "classnames": "G1XI",
    "preact": "u8ui",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB",
    "../../connectors/geo-search/connectGeoSearch": "UVNx",
    "./GeoSearchRenderer": "OfKf",
    "./defaultTemplates": "t8Im",
    "./createHTMLMarker": "shC9"
  }],
  "ejzV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = a(require("../Template/Template"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function r() {
      return (r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];

          for (var r in a) {
            Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function n(a) {
      var n = a.className,
          l = a.handleClick,
          i = a.facetValueToRefine,
          o = a.isRefined,
          u = a.templateProps,
          s = a.templateKey,
          f = a.templateData,
          c = a.subItems;
      return (0, e.h)("li", {
        className: n,
        onClick: function onClick(e) {
          l({
            facetValueToRefine: i,
            isRefined: o,
            originalEvent: e
          });
        }
      }, (0, e.h)(t.default, r({}, u, {
        templateKey: s,
        data: f
      })), c);
    }

    var l = n;
    exports.default = l;
  }, {
    "preact": "u8ui",
    "../Template/Template": "wp6U"
  }],
  "qymH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = require("../../lib/utils"),
        o = r(require("../Template/Template"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function s(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function a(e, t) {
      for (var o = 0; o < t.length; o++) {
        var r = t[o];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function u(e, t, o) {
      return t && a(e.prototype, t), o && a(e, o), e;
    }

    function i(e, t) {
      return !t || "object" !== n(t) && "function" != typeof t ? l(e) : t;
    }

    function c(e) {
      return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function l(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function p(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && f(e, t);
    }

    function f(e, t) {
      return (f = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function h(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }

    var y = function (t) {
      function r() {
        var e, t;
        s(this, r);

        for (var o = arguments.length, n = new Array(o), a = 0; a < o; a++) {
          n[a] = arguments[a];
        }

        return h(l(t = i(this, (e = c(r)).call.apply(e, [this].concat(n)))), "state", {
          query: t.props.query,
          focused: !1
        }), h(l(t), "onInput", function (e) {
          var o = t.props,
              r = o.searchAsYouType,
              n = o.refine,
              s = o.onChange,
              a = e.target.value;
          r && n(a), t.setState({
            query: a
          }), s(e);
        }), h(l(t), "onSubmit", function (e) {
          var o = t.props,
              r = o.searchAsYouType,
              n = o.refine,
              s = o.onSubmit;
          return e.preventDefault(), e.stopPropagation(), t.input.blur(), r || n(t.state.query), s(e), !1;
        }), h(l(t), "onReset", function (e) {
          var o = t.props,
              r = o.refine,
              n = o.onReset;
          t.input.focus(), r(""), t.setState({
            query: ""
          }), n(e);
        }), h(l(t), "onBlur", function () {
          t.setState({
            focused: !1
          });
        }), h(l(t), "onFocus", function () {
          t.setState({
            focused: !0
          });
        }), t;
      }

      return p(r, e.Component), u(r, [{
        key: "resetInput",
        value: function value() {
          this.setState({
            query: ""
          });
        }
      }, {
        key: "componentWillReceiveProps",
        value: function value(e) {
          this.state.focused || e.query === this.state.query || this.setState({
            query: e.query
          });
        }
      }, {
        key: "render",
        value: function value() {
          var t = this,
              r = this.props,
              n = r.cssClasses,
              s = r.placeholder,
              a = r.autofocus,
              u = r.showSubmit,
              i = r.showReset,
              c = r.showLoadingIndicator,
              l = r.templates,
              p = r.isSearchStalled;
          return (0, e.h)("div", {
            className: n.root
          }, (0, e.h)("form", {
            action: "",
            role: "search",
            className: n.form,
            noValidate: !0,
            onSubmit: this.onSubmit,
            onReset: this.onReset
          }, (0, e.h)("input", {
            ref: function ref(e) {
              return t.input = e;
            },
            value: this.state.query,
            disabled: this.props.disabled,
            className: n.input,
            type: "search",
            placeholder: s,
            autoFocus: a,
            autoComplete: "off",
            autoCorrect: "off",
            autoCapitalize: "off",
            spellCheck: "false",
            maxLength: 512,
            onInput: this.onInput,
            onBlur: this.onBlur,
            onFocus: this.onFocus
          }), (0, e.h)(o.default, {
            templateKey: "submit",
            rootTagName: "button",
            rootProps: {
              className: n.submit,
              type: "submit",
              title: "Submit the search query.",
              hidden: !u
            },
            templates: l,
            data: {
              cssClasses: n
            }
          }), (0, e.h)(o.default, {
            templateKey: "reset",
            rootTagName: "button",
            rootProps: {
              className: n.reset,
              type: "reset",
              title: "Clear the search query.",
              hidden: !(i && this.state.query.trim() && !p)
            },
            templates: l,
            data: {
              cssClasses: n
            }
          }), c && (0, e.h)(o.default, {
            templateKey: "loadingIndicator",
            rootTagName: "span",
            rootProps: {
              className: n.loadingIndicator,
              hidden: !p
            },
            templates: l,
            data: {
              cssClasses: n
            }
          })));
        }
      }]), r;
    }();

    h(y, "defaultProps", {
      query: "",
      showSubmit: !0,
      showReset: !0,
      showLoadingIndicator: !0,
      autofocus: !1,
      searchAsYouType: !0,
      isSearchStalled: !1,
      disabled: !1,
      onChange: t.noop,
      onSubmit: t.noop,
      onReset: t.noop,
      refine: t.noop
    });
    var d = y;
    exports.default = d;
  }, {
    "preact": "u8ui",
    "../../lib/utils": "Xobp",
    "../Template/Template": "wp6U"
  }],
  "Em1r": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = n(require("classnames")),
        s = require("../../lib/utils"),
        r = n(require("../Template/Template")),
        o = n(require("./RefinementListItem")),
        a = n(require("../SearchBox/SearchBox"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function p(e, t) {
      var s = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), s.push.apply(s, r);
      }

      return s;
    }

    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {};
        t % 2 ? p(Object(s), !0).forEach(function (t) {
          l(e, t, s[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : p(Object(s)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
        });
      }

      return e;
    }

    function l(e, t, s) {
      return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = s, e;
    }

    function u() {
      return (u = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = arguments[t];

          for (var r in s) {
            Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function h(e, t) {
      if (null == e) return {};
      var s,
          r,
          o = f(e, t);

      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);

        for (r = 0; r < a.length; r++) {
          s = a[r], t.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (o[s] = e[s]);
        }
      }

      return o;
    }

    function f(e, t) {
      if (null == e) return {};
      var s,
          r,
          o = {},
          a = Object.keys(e);

      for (r = 0; r < a.length; r++) {
        s = a[r], t.indexOf(s) >= 0 || (o[s] = e[s]);
      }

      return o;
    }

    function d(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function m(e, t) {
      for (var s = 0; s < t.length; s++) {
        var r = t[s];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function y(e, t, s) {
      return t && m(e.prototype, t), s && m(e, s), e;
    }

    function b(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? g(e) : t;
    }

    function v(e) {
      return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function g(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function O(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && C(e, t);
    }

    function C(e, t) {
      return (C = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    var w = function (n) {
      function i(e) {
        var t;
        return d(this, i), (t = b(this, v(i).call(this, e))).handleItemClick = t.handleItemClick.bind(g(t)), t;
      }

      return O(i, e.Component), y(i, [{
        key: "shouldComponentUpdate",
        value: function value(e, t) {
          var r = this.state !== t,
              o = !(0, s.isEqual)(this.props.facetValues, e.facetValues);
          return r || o;
        }
      }, {
        key: "refine",
        value: function value(e, t) {
          this.props.toggleRefinement(e, t);
        }
      }, {
        key: "_generateFacetItem",
        value: function value(s) {
          var r,
              a,
              n = s.data && s.data.length > 0;

          if (n) {
            var p = this.props.cssClasses,
                f = (p.root, h(p, ["root"]));
            a = (0, e.h)(i, u({}, this.props, {
              cssClasses: f,
              depth: this.props.depth + 1,
              facetValues: s.data,
              showMore: !1,
              className: this.props.cssClasses.childList
            }));
          }

          var d = c({}, s, {
            url: this.props.createURL(s.value),
            attribute: this.props.attribute,
            cssClasses: this.props.cssClasses,
            isFromSearch: this.props.isFromSearch
          }),
              m = s.value;
          return void 0 !== s.isRefined && (m += "/".concat(s.isRefined)), void 0 !== s.count && (m += "/".concat(s.count)), (0, e.h)(o.default, {
            templateKey: "item",
            key: m,
            facetValueToRefine: s.value,
            handleClick: this.handleItemClick,
            isRefined: s.isRefined,
            className: (0, t.default)(this.props.cssClasses.item, (r = {}, l(r, this.props.cssClasses.selectedItem, s.isRefined), l(r, this.props.cssClasses.disabledItem, !s.count), l(r, this.props.cssClasses.parentItem, n), r)),
            subItems: a,
            templateData: d,
            templateProps: this.props.templateProps
          });
        }
      }, {
        key: "handleItemClick",
        value: function value(e) {
          var t = e.facetValueToRefine,
              r = e.originalEvent,
              o = e.isRefined;
          if (!((0, s.isSpecialClick)(r) || o && r.target.parentNode.querySelector('input[type="radio"]:checked'))) if ("INPUT" !== r.target.tagName) {
            for (var a = r.target; a !== r.currentTarget;) {
              if ("LABEL" === a.tagName && (a.querySelector('input[type="checkbox"]') || a.querySelector('input[type="radio"]'))) return;
              "A" === a.tagName && a.href && r.preventDefault(), a = a.parentNode;
            }

            r.stopPropagation(), this.refine(t, o);
          } else this.refine(t, o);
        }
      }, {
        key: "componentWillReceiveProps",
        value: function value(e) {
          this.searchBox && !e.isFromSearch && this.searchBox.resetInput();
        }
      }, {
        key: "refineFirstValue",
        value: function value() {
          var e = this.props.facetValues[0];

          if (e) {
            var t = e.value;
            this.props.toggleRefinement(t);
          }
        }
      }, {
        key: "render",
        value: function value() {
          var s = this,
              o = (0, t.default)(this.props.cssClasses.list, l({}, "".concat(this.props.cssClasses.depth).concat(this.props.depth), this.props.cssClasses.depth)),
              n = (0, t.default)(this.props.cssClasses.showMore, l({}, this.props.cssClasses.disabledShowMore, !(!0 === this.props.showMore && this.props.canToggleShowMore))),
              i = !0 === this.props.showMore && (0, e.h)(r.default, u({}, this.props.templateProps, {
            templateKey: "showMoreText",
            rootTagName: "button",
            rootProps: {
              className: n,
              disabled: !this.props.canToggleShowMore,
              onClick: this.props.toggleShowMore
            },
            data: {
              isShowingMore: this.props.isShowingMore
            }
          })),
              p = !0 !== this.props.searchIsAlwaysActive && !(this.props.isFromSearch || !this.props.hasExhaustiveItems),
              c = this.props.searchFacetValues && (0, e.h)("div", {
            className: this.props.cssClasses.searchBox
          }, (0, e.h)(a.default, {
            ref: function ref(e) {
              return s.searchBox = e;
            },
            placeholder: this.props.searchPlaceholder,
            disabled: p,
            cssClasses: this.props.cssClasses.searchable,
            templates: this.props.templateProps.templates,
            onChange: function onChange(e) {
              return s.props.searchFacetValues(e.target.value);
            },
            onReset: function onReset() {
              return s.props.searchFacetValues("");
            },
            onSubmit: function onSubmit() {
              return s.refineFirstValue();
            },
            searchAsYouType: !1
          })),
              h = this.props.facetValues && this.props.facetValues.length > 0 && (0, e.h)("ul", {
            className: o
          }, this.props.facetValues.map(this._generateFacetItem, this)),
              f = this.props.searchFacetValues && this.props.isFromSearch && 0 === this.props.facetValues.length && (0, e.h)(r.default, u({}, this.props.templateProps, {
            templateKey: "searchableNoResults",
            rootProps: {
              className: this.props.cssClasses.noResults
            }
          }));
          return (0, e.h)("div", {
            className: (0, t.default)(this.props.cssClasses.root, l({}, this.props.cssClasses.noRefinementRoot, !this.props.facetValues || 0 === this.props.facetValues.length), this.props.className)
          }, this.props.children, c, h, f, i);
        }
      }]), i;
    }();

    w.defaultProps = {
      cssClasses: {},
      depth: 0
    };
    var P = w;
    exports.default = P;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../lib/utils": "Xobp",
    "../Template/Template": "wp6U",
    "./RefinementListItem": "ejzV",
    "../SearchBox/SearchBox": "qymH"
  }],
  "sGQz": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("../../lib/utils");

    function t(e, t) {
      if (null == e) return {};
      var n,
          a,
          i = r(e, t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);

        for (a = 0; a < o.length; a++) {
          n = o[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
      }

      return i;
    }

    function r(e, t) {
      if (null == e) return {};
      var r,
          n,
          a = {},
          i = Object.keys(e);

      for (n = 0; n < i.length; n++) {
        r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      }

      return a;
    }

    function n(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? n(Object(r), !0).forEach(function (t) {
          i(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function i(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function o(e, t) {
      return u(e) || s(e, t) || c();
    }

    function c() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function s(e, t) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var r = [],
            n = !0,
            a = !1,
            i = void 0;

        try {
          for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0) {
            ;
          }
        } catch (s) {
          a = !0, i = s;
        } finally {
          try {
            n || null == c.return || c.return();
          } finally {
            if (a) throw i;
          }
        }

        return r;
      }
    }

    function u(e) {
      if (Array.isArray(e)) return e;
    }

    var h = (0, e.createDocumentationMessageGenerator)({
      name: "hierarchical-menu",
      connector: !0
    });

    function l(r) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(r, h()), function () {
        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = c.attributes,
            u = c.separator,
            l = void 0 === u ? " > " : u,
            f = c.rootPath,
            g = void 0 === f ? null : f,
            d = c.showParentLevel,
            p = void 0 === d || d,
            m = c.limit,
            v = void 0 === m ? 10 : m,
            y = c.showMore,
            b = void 0 !== y && y,
            w = c.showMoreLimit,
            S = void 0 === w ? 20 : w,
            O = c.sortBy,
            P = void 0 === O ? ["name:asc"] : O,
            M = c.transformItems,
            j = void 0 === M ? function (e) {
          return e;
        } : M;
        if (!s || !Array.isArray(s) || 0 === s.length) throw new Error(h("The `attributes` option expects an array of strings."));
        if (!0 === b && S <= v) throw new Error(h("The `showMoreLimit` option must be greater than `limit`."));

        var F,
            R = o(s, 1)[0],
            x = function x() {};

        function I() {
          x();
        }

        return {
          $$type: "ais.hierarchicalMenu",
          isShowingMore: !1,
          createToggleShowMore: function createToggleShowMore(e) {
            var t = this;
            return function () {
              t.isShowingMore = !t.isShowingMore, t.render(e);
            };
          },
          getLimit: function getLimit() {
            return this.isShowingMore ? S : v;
          },
          init: function init(e) {
            var t = e.instantSearchInstance;
            r(a({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !0);
          },
          _prepareFacetValues: function _prepareFacetValues(e) {
            var r = this;
            return e.slice(0, this.getLimit()).map(function (e) {
              var n = e.name,
                  i = e.path,
                  o = t(e, ["name", "path"]);
              return Array.isArray(o.data) && (o.data = r._prepareFacetValues(o.data)), a({}, o, {
                label: n,
                value: i
              });
            });
          },
          render: function render(e) {
            var t = e.instantSearchInstance;
            x = this.createToggleShowMore(e), r(a({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !1);
          },
          dispose: function dispose(e) {
            var t = e.state;
            return n(), t.removeHierarchicalFacet(R).setQueryParameter("maxValuesPerFacet", void 0);
          },
          getRenderState: function getRenderState(e, t) {
            return a({}, e, {
              hierarchicalMenu: a({}, e.hierarchicalMenu, i({}, R, this.getWidgetRenderState(t)))
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var r = this,
                n = t.results,
                a = t.state,
                i = t.createURL,
                o = t.instantSearchInstance,
                s = t.helper;
            F || (F = (0, e.createSendEventForFacet)({
              instantSearchInstance: o,
              helper: s,
              attribute: R,
              widgetType: this.$$type
            })), this._refine || (this._refine = function (e) {
              F("click", e), s.toggleRefinement(R, e).search();
            });
            var u = n && n.getFacetValues(R, {
              sortBy: P
            }).data || [];
            return {
              items: j(n ? this._prepareFacetValues(u) : []),
              refine: this._refine,
              createURL: function createURL(e) {
                return i(a.toggleRefinement(R, e));
              },
              sendEvent: F,
              widgetParams: c,
              isShowingMore: this.isShowingMore,
              toggleShowMore: I,
              canToggleShowMore: b && (this.isShowingMore || !function () {
                if (!n) return !1;
                var e = r.getLimit();
                return a.maxValuesPerFacet > e ? u.length <= e : u.length < e;
              }())
            };
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var r = t.searchParameters.getHierarchicalFacetBreadcrumb(R);
            return r.length ? a({}, e, {
              hierarchicalMenu: a({}, e.hierarchicalMenu, i({}, R, r))
            }) : e;
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
            var r = t.uiState,
                n = r.hierarchicalMenu && r.hierarchicalMenu[R];
            if (e.isHierarchicalFacet(R)) e.getHierarchicalFacetByName(R);
            var o = e.removeHierarchicalFacet(R).addHierarchicalFacet({
              name: R,
              attributes: s,
              separator: l,
              rootPath: g,
              showParentLevel: p
            }),
                c = o.maxValuesPerFacet || 0,
                u = Math.max(c, b ? S : v),
                h = o.setQueryParameter("maxValuesPerFacet", u);
            return n ? h.addHierarchicalFacetRefinement(R, n.join(l)) : h.setQueryParameters({
              hierarchicalFacetsRefinements: a({}, h.hierarchicalFacetsRefinements, i({}, R, []))
            });
          }
        };
      };
    }
  }, {
    "../../lib/utils": "Xobp"
  }],
  "ewE5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var s = {
      item: '<a class="{{cssClasses.link}}" href="{{url}}"><span class="{{cssClasses.label}}">{{label}}</span><span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span></a>',
      showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n  "
    };
    exports.default = s;
  }, {}],
  "OZm9": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var e = require("preact"),
        t = i(require("classnames")),
        a = i(require("../../components/RefinementList/RefinementList")),
        r = i(require("../../connectors/hierarchical-menu/connectHierarchicalMenu")),
        o = i(require("./defaultTemplates")),
        n = require("../../lib/utils"),
        s = require("../../lib/suit");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var l = (0, n.createDocumentationMessageGenerator)({
      name: "hierarchical-menu"
    }),
        d = (0, s.component)("HierarchicalMenu"),
        m = function m(t) {
      var r = t.cssClasses,
          s = t.containerNode,
          i = t.showMore,
          l = t.templates,
          d = t.renderState;
      return function (t, m) {
        var c = t.createURL,
            u = t.items,
            f = t.refine,
            h = t.instantSearchInstance,
            p = t.isShowingMore,
            M = t.toggleShowMore,
            w = t.canToggleShowMore;
        m ? d.templateProps = (0, n.prepareTemplateProps)({
          defaultTemplates: o.default,
          templatesConfig: h.templatesConfig,
          templates: l
        }) : (0, e.render)((0, e.h)(a.default, {
          createURL: c,
          cssClasses: r,
          facetValues: u,
          templateProps: d.templateProps,
          toggleRefinement: f,
          showMore: i,
          toggleShowMore: M,
          isShowingMore: p,
          canToggleShowMore: w
        }), s);
      };
    };

    function c() {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          s = a.container,
          i = a.attributes,
          c = a.separator,
          u = a.rootPath,
          f = a.showParentLevel,
          h = a.limit,
          p = a.showMore,
          M = void 0 !== p && p,
          w = a.showMoreLimit,
          N = a.sortBy,
          g = a.transformItems,
          v = a.templates,
          b = void 0 === v ? o.default : v,
          S = a.cssClasses,
          L = void 0 === S ? {} : S;
      if (!s) throw new Error(l("The `container` option is required."));
      var R = (0, n.getContainerNode)(s),
          P = {
        root: (0, t.default)(d(), L.root),
        noRefinementRoot: (0, t.default)(d({
          modifierName: "noRefinement"
        }), L.noRefinementRoot),
        list: (0, t.default)(d({
          descendantName: "list"
        }), L.list),
        childList: (0, t.default)(d({
          descendantName: "list",
          modifierName: "child"
        }), L.childList),
        item: (0, t.default)(d({
          descendantName: "item"
        }), L.item),
        selectedItem: (0, t.default)(d({
          descendantName: "item",
          modifierName: "selected"
        }), L.selectedItem),
        parentItem: (0, t.default)(d({
          descendantName: "item",
          modifierName: "parent"
        }), L.parentItem),
        link: (0, t.default)(d({
          descendantName: "link"
        }), L.link),
        label: (0, t.default)(d({
          descendantName: "label"
        }), L.label),
        count: (0, t.default)(d({
          descendantName: "count"
        }), L.count),
        showMore: (0, t.default)(d({
          descendantName: "showMore"
        }), L.showMore),
        disabledShowMore: (0, t.default)(d({
          descendantName: "showMore",
          modifierName: "disabled"
        }), L.disabledShowMore)
      },
          q = m({
        cssClasses: P,
        containerNode: R,
        templates: b,
        showMore: M,
        renderState: {}
      });
      return (0, r.default)(q, function () {
        return (0, e.render)(null, R);
      })({
        attributes: i,
        separator: c,
        rootPath: u,
        showParentLevel: f,
        limit: h,
        showMore: M,
        showMoreLimit: w,
        sortBy: N,
        transformItems: g
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/RefinementList/RefinementList": "Em1r",
    "../../connectors/hierarchical-menu/connectHierarchicalMenu": "sGQz",
    "./defaultTemplates": "ewE5",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "lizu": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = n(require("../../lib/escape-highlight")),
        t = require("../../lib/utils");

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var s in e) {
        if (Object.prototype.hasOwnProperty.call(e, s)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, s) : null;
          a && (a.get || a.set) ? Object.defineProperty(n, s, a) : n[s] = e[s];
        }
      }

      return n.default = e, t && t.set(e, n), n;
    }

    function i(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(r), !0).forEach(function (t) {
          a(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function a(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var o = (0, t.createDocumentationMessageGenerator)({
      name: "hits",
      connector: !0
    }),
        c = function c(r) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.noop;
      return (0, t.checkRendering)(r, o()), function (i) {
        var o,
            c,
            u = i || {},
            d = u.escapeHTML,
            f = void 0 === d || d,
            p = u.transformItems,
            h = void 0 === p ? function (e) {
          return e;
        } : p;
        return {
          $$type: "ais.hits",
          init: function init(e) {
            r(s({}, this.getWidgetRenderState(e), {
              instantSearchInstance: e.instantSearchInstance
            }), !0);
          },
          render: function render(e) {
            var t = this.getWidgetRenderState(e);
            t.sendEvent("view", t.hits), r(s({}, t, {
              instantSearchInstance: e.instantSearchInstance
            }), !1);
          },
          getRenderState: function getRenderState(e, t) {
            return s({}, e, {
              hits: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(r) {
            var n = r.results,
                s = r.helper,
                a = r.instantSearchInstance;
            if (o || (o = (0, t.createSendEventForHits)({
              instantSearchInstance: a,
              index: s.getIndex(),
              widgetType: this.$$type
            })), c || (c = (0, t.createBindEventForHits)({
              index: s.getIndex(),
              widgetType: this.$$type
            })), !n) return {
              hits: [],
              results: void 0,
              sendEvent: o,
              bindEvent: c,
              widgetParams: i
            };
            f && n.hits.length > 0 && (n.hits = (0, e.default)(n.hits));
            var u = n.hits.__escaped;
            return n.hits = (0, t.addAbsolutePosition)(n.hits, n.page, n.hitsPerPage), n.hits = (0, t.addQueryID)(n.hits, n.queryID), n.hits = h(n.hits), n.hits.__escaped = u, {
              hits: n.hits,
              results: n,
              sendEvent: o,
              bindEvent: c,
              widgetParams: i
            };
          },
          dispose: function dispose(t) {
            var r = t.state;
            return n(), f ? r.setQueryParameters(Object.keys(e.TAG_PLACEHOLDER).reduce(function (e, t) {
              return s({}, e, a({}, t, void 0));
            }, {})) : r;
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(t) {
            return f ? t.setQueryParameters(e.TAG_PLACEHOLDER) : t;
          }
        };
      };
    },
        u = c;

    exports.default = u;
  }, {
    "../../lib/escape-highlight": "venA",
    "../../lib/utils": "Xobp"
  }],
  "SPa5": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = o(require("classnames")),
        r = o(require("../Template/Template"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, o);
      }

      return r;
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? n(Object(r), !0).forEach(function (t) {
          s(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function s(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function i() {
      return (i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];

          for (var o in r) {
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    var c = function c(o) {
      var n = o.results,
          s = o.hits,
          c = o.bindEvent,
          l = o.cssClasses,
          u = o.templateProps;
      return 0 === n.hits.length ? (0, e.h)(r.default, i({}, u, {
        templateKey: "empty",
        rootProps: {
          className: (0, t.default)(l.root, l.emptyRoot)
        },
        data: n
      })) : (0, e.h)("div", {
        className: l.root
      }, (0, e.h)("ol", {
        className: l.list
      }, s.map(function (t, o) {
        return (0, e.h)(r.default, i({}, u, {
          templateKey: "item",
          rootTagName: "li",
          rootProps: {
            className: l.item
          },
          key: t.objectID,
          data: a({}, t, {
            __hitIndex: o
          }),
          bindEvent: c
        }));
      })));
    };

    c.defaultProps = {
      results: {
        hits: []
      },
      hits: []
    };
    var l = c;
    exports.default = l;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../Template/Template": "wp6U"
  }],
  "Fnfb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      empty: "No results",
      item: function item(e) {
        return JSON.stringify(e, null, 2);
      }
    };
    exports.default = e;
  }, {}],
  "gP42": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a, exports.inferPayload = void 0;

    var e = require("../utils");

    function t(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function r(e) {
      for (var r = 1; r < arguments.length; r++) {
        var o = null != arguments[r] ? arguments[r] : {};
        r % 2 ? t(Object(o), !0).forEach(function (t) {
          n(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }

      return e;
    }

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var o = function o(t, r) {
      return r.map(function (r) {
        var n = (0, e.find)(t, function (e) {
          return e.objectID === r;
        });
        if (void 0 === n) throw new Error('Could not find objectID "'.concat(r, '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'));
        return n;
      });
    },
        i = function i(t) {
      var r = (0, e.uniq)(t.map(function (e) {
        return e.__queryID;
      }));
      if (r.length > 1) throw new Error("Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.");
      var n = r[0];
      if ("string" != typeof n) throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
      return n;
    },
        s = function s(e) {
      return e.map(function (e) {
        return e.__position;
      });
    },
        c = function c(e) {
      var t = e.method,
          r = e.results,
          n = e.hits,
          c = e.objectIDs,
          u = r.index,
          a = o(n, c),
          f = i(a);

      switch (t) {
        case "clickedObjectIDsAfterSearch":
          return {
            index: u,
            queryID: f,
            objectIDs: c,
            positions: s(a)
          };

        case "convertedObjectIDsAfterSearch":
          return {
            index: u,
            queryID: f,
            objectIDs: c
          };

        default:
          throw new Error('Unsupported method passed to insights: "'.concat(t, '".'));
      }
    };

    exports.inferPayload = c;

    var u = function u(t, n, o) {
      return function (i, s) {
        if (!t) {
          var u = (0, e.createDocumentationMessageGenerator)({
            name: "instantsearch"
          });
          throw new Error(u("The `insightsClient` option has not been provided to `instantsearch`."));
        }

        if (!Array.isArray(s.objectIDs)) throw new TypeError("Expected `objectIDs` to be an array.");
        var a = c({
          method: i,
          results: n,
          hits: o,
          objectIDs: s.objectIDs
        });
        t(i, r({}, a, {}, s));
      };
    };

    function a(e) {
      return function (t, n) {
        return e(function (e) {
          return function (t, n) {
            var o = t.results,
                i = t.hits,
                s = t.instantSearchInstance;

            if (o && i && s) {
              var c = u(s.insightsClient, o, i);
              return e(r({}, t, {
                insights: c
              }), n);
            }

            return e(t, n);
          };
        }(t), n);
      };
    }
  }, {
    "../utils": "Xobp"
  }],
  "L4EH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("preact"),
        e = require("../../helpers/insights"),
        r = function r(t, e, _r2) {
      for (var n = t; n && !_r2(n);) {
        if (n === e) return null;
        n = n.parentElement;
      }

      return n;
    },
        n = function n(t) {
      var e = t.getAttribute("data-insights-event");
      if ("string" != typeof e) throw new Error("The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.");

      try {
        return JSON.parse(atob(e));
      } catch (r) {
        throw new Error("The insights middleware was unable to parse `data-insights-event`.");
      }
    },
        a = function a(_a2) {
      return function (i) {
        return (0, t.h)("div", {
          onClick: function onClick(t) {
            if (i.sendEvent) {
              var a = r(t.target, t.currentTarget, function (t) {
                return t.hasAttribute("data-insights-event");
              });

              if (a) {
                var s = n(a);
                i.sendEvent(s);
              }
            }

            var u = r(t.target, t.currentTarget, function (t) {
              return (0, e.hasDataAttributes)(t);
            });

            if (u) {
              var o = (0, e.readDataAttributes)(u),
                  d = o.method,
                  h = o.payload;
              i.insights(d, h);
            }
          }
        }, (0, t.h)(_a2, i));
      };
    },
        i = a;

    exports.default = i;
  }, {
    "preact": "u8ui",
    "../../helpers/insights": "Un0M"
  }],
  "dDBi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "withInsights", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "inferInsightsPayload", {
      enumerable: !0,
      get: function get() {
        return e.inferPayload;
      }
    }), Object.defineProperty(exports, "withInsightsListener", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    });
    var e = u(require("./client")),
        t = r(require("./listener"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return n = function n() {
        return e;
      }, e;
    }

    function u(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = n();
      if (t && t.has(e)) return t.get(e);
      var r = {},
          u = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var i in e) {
        if (Object.prototype.hasOwnProperty.call(e, i)) {
          var o = u ? Object.getOwnPropertyDescriptor(e, i) : null;
          o && (o.get || o.set) ? Object.defineProperty(r, i, o) : r[i] = e[i];
        }
      }

      return r.default = e, t && t.set(e, r), r;
    }
  }, {
    "./client": "gP42",
    "./listener": "L4EH"
  }],
  "cVgR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = l(require("classnames")),
        s = l(require("../../connectors/hits/connectHits")),
        r = l(require("../../components/Hits/Hits")),
        n = l(require("./defaultTemplates")),
        i = require("../../lib/utils"),
        a = require("../../lib/suit"),
        o = require("../../lib/insights");

    function l(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, i.createDocumentationMessageGenerator)({
      name: "hits"
    }),
        d = (0, a.component)("Hits"),
        c = (0, o.withInsightsListener)(r.default),
        m = function m(t) {
      var s = t.renderState,
          r = t.cssClasses,
          a = t.containerNode,
          o = t.templates;
      return function (t, l) {
        var u = t.hits,
            d = t.results,
            m = t.instantSearchInstance,
            p = t.insights,
            f = t.bindEvent;
        l ? s.templateProps = (0, i.prepareTemplateProps)({
          defaultTemplates: n.default,
          templatesConfig: m.templatesConfig,
          templates: o
        }) : (0, e.render)((0, e.h)(c, {
          cssClasses: r,
          hits: u,
          results: d,
          templateProps: s.templateProps,
          insights: p,
          sendEvent: function sendEvent(e) {
            m.sendEventToInsights(e);
          },
          bindEvent: f
        }), a);
      };
    },
        p = function p(r) {
      var a = r || {},
          l = a.container,
          c = a.escapeHTML,
          p = a.transformItems,
          f = a.templates,
          h = void 0 === f ? n.default : f,
          v = a.cssClasses,
          g = void 0 === v ? {} : v;
      if (!l) throw new Error(u("The `container` option is required."));
      var q = (0, i.getContainerNode)(l),
          C = {
        root: (0, t.default)(d(), g.root),
        emptyRoot: (0, t.default)(d({
          modifierName: "empty"
        }), g.emptyRoot),
        list: (0, t.default)(d({
          descendantName: "list"
        }), g.list),
        item: (0, t.default)(d({
          descendantName: "item"
        }), g.item)
      },
          T = m({
        containerNode: q,
        cssClasses: C,
        renderState: {},
        templates: h
      });
      return (0, o.withInsights)(s.default)(T, function () {
        return (0, e.render)(null, q);
      })({
        escapeHTML: c,
        transformItems: p
      });
    },
        f = p;

    exports.default = f;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../connectors/hits/connectHits": "lizu",
    "../../components/Hits/Hits": "SPa5",
    "./defaultTemplates": "Fnfb",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB",
    "../../lib/insights": "dDBi"
  }],
  "PowV": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = a(require("classnames"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(a) {
      var u = a.currentValue,
          l = a.options,
          r = a.cssClasses,
          s = a.setValue;
      return (0, e.h)("select", {
        className: (0, t.default)(r.select),
        onChange: function onChange(e) {
          return s(e.target.value);
        },
        value: "".concat(u)
      }, l.map(function (a) {
        return (0, e.h)("option", {
          className: (0, t.default)(r.option),
          key: a.label + a.value,
          value: "".concat(a.value)
        }, a.label);
      }));
    }

    var l = u;
    exports.default = l;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI"
  }],
  "dFAh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function t(e) {
      return a(e) || n(e) || r();
    }

    function r() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function n(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function a(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }

        return r;
      }
    }

    function i(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(r), !0).forEach(function (t) {
          s(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function s(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var u = (0, e.createDocumentationMessageGenerator)({
      name: "hits-per-page",
      connector: !0
    }),
        c = function c(r) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(r, u()), function (e) {
        var a = e || {},
            i = a.items,
            s = a.transformItems,
            c = void 0 === s ? function (e) {
          return e;
        } : s,
            f = i;
        if (!Array.isArray(f)) throw new Error(u("The `items` option expects an array of objects."));
        var g = f.filter(function (e) {
          return !0 === e.default;
        });
        if (0 === g.length) throw new Error(u("A default value must be specified in `items`."));
        if (g.length > 1) throw new Error(u("More than one default value is specified in `items`."));

        var l = g[0],
            h = function h(e) {
          return function (t) {
            return t || 0 === t ? e.setQueryParameter("hitsPerPage", t).search() : e.setQueryParameter("hitsPerPage", void 0).search();
          };
        },
            P = function P(e) {
          var t = e.state,
              r = e.createURL;
          return function (e) {
            return r(t.setQueryParameter("hitsPerPage", e || 0 === e ? e : void 0));
          };
        };

        return {
          $$type: "ais.hitsPerPage",
          init: function init(e) {
            var n = e.state,
                a = e.instantSearchInstance;
            f.some(function (e) {
              return Number(n.hitsPerPage) === Number(e.value);
            }) || (f = [{
              value: "",
              label: ""
            }].concat(t(f))), r(o({}, this.getWidgetRenderState(e), {
              instantSearchInstance: a
            }), !0);
          },
          render: function render(e) {
            var t = e.instantSearchInstance;
            r(o({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !1);
          },
          dispose: function dispose(e) {
            var t = e.state;
            return n(), t.setQueryParameter("hitsPerPage", void 0);
          },
          getRenderState: function getRenderState(e, t) {
            return o({}, e, {
              hitsPerPage: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var r,
                n,
                a = t.state,
                i = t.results,
                s = t.createURL,
                u = t.helper;
            return {
              items: c((r = a, n = r.hitsPerPage, f.map(function (e) {
                return o({}, e, {
                  isRefined: Number(e.value) === Number(n)
                });
              }))),
              refine: h(u),
              createURL: P({
                state: a,
                createURL: s
              }),
              hasNoResults: !i || 0 === i.nbHits,
              widgetParams: e
            };
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var r = t.searchParameters.hitsPerPage;
            return void 0 === r || r === l.value ? e : o({}, e, {
              hitsPerPage: r
            });
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
            var r = t.uiState;
            return e.setQueryParameters({
              hitsPerPage: r.hitsPerPage || l.value
            });
          }
        };
      };
    },
        f = c;

    exports.default = f;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "QARU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = a(require("classnames")),
        r = a(require("../../components/Selector/Selector")),
        n = a(require("../../connectors/hits-per-page/connectHitsPerPage")),
        s = require("../../lib/utils"),
        o = require("../../lib/suit");

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = (0, s.createDocumentationMessageGenerator)({
      name: "hits-per-page"
    }),
        u = (0, o.component)("HitsPerPage"),
        c = function c(t) {
      var n = t.containerNode,
          o = t.cssClasses;
      return function (t, a) {
        var i = t.items,
            u = t.refine;

        if (!a) {
          var c = ((0, s.find)(i, function (e) {
            return e.isRefined;
          }) || {}).value;
          (0, e.render)((0, e.h)("div", {
            className: o.root
          }, (0, e.h)(r.default, {
            cssClasses: o,
            currentValue: c,
            options: i,
            setValue: u
          })), n);
        }
      };
    },
        l = function l(r) {
      var o = r || {},
          a = o.container,
          l = o.items,
          d = o.cssClasses,
          f = void 0 === d ? {} : d,
          p = o.transformItems;
      if (!a) throw new Error(i("The `container` option is required."));
      var m = (0, s.getContainerNode)(a),
          v = {
        root: (0, t.default)(u(), f.root),
        select: (0, t.default)(u({
          descendantName: "select"
        }), f.select),
        option: (0, t.default)(u({
          descendantName: "option"
        }), f.option)
      },
          q = c({
        containerNode: m,
        cssClasses: v
      });
      return (0, n.default)(q, function () {
        return (0, e.render)(null, m);
      })({
        items: l,
        transformItems: p
      });
    },
        d = l;

    exports.default = d;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/Selector/Selector": "PowV",
    "../../connectors/hits-per-page/connectHitsPerPage": "dFAh",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "n6hk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = o(require("classnames")),
        r = o(require("../Template/Template"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, o);
      }

      return r;
    }

    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(r), !0).forEach(function (t) {
          n(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function i() {
      return (i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];

          for (var o in r) {
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    var l = function l(o) {
      var a = o.results,
          l = o.hits,
          u = o.bindEvent,
          c = o.hasShowPrevious,
          p = o.showPrevious,
          d = o.showMore,
          f = o.isFirstPage,
          b = o.isLastPage,
          m = o.cssClasses,
          h = o.templateProps;
      return 0 === a.hits.length ? (0, e.h)(r.default, i({}, h, {
        templateKey: "empty",
        rootProps: {
          className: (0, t.default)(m.root, m.emptyRoot)
        },
        data: a
      })) : (0, e.h)("div", {
        className: m.root
      }, c && (0, e.h)(r.default, i({}, h, {
        templateKey: "showPreviousText",
        rootTagName: "button",
        rootProps: {
          className: (0, t.default)(m.loadPrevious, n({}, m.disabledLoadPrevious, f)),
          disabled: f,
          onClick: p
        }
      })), (0, e.h)("ol", {
        className: m.list
      }, l.map(function (t, o) {
        return (0, e.h)(r.default, i({}, h, {
          templateKey: "item",
          rootTagName: "li",
          rootProps: {
            className: m.item
          },
          key: t.objectID,
          data: s({}, t, {
            __hitIndex: o
          }),
          bindEvent: u
        }));
      })), (0, e.h)(r.default, i({}, h, {
        templateKey: "showMoreText",
        rootTagName: "button",
        rootProps: {
          className: (0, t.default)(m.loadMore, n({}, m.disabledLoadMore, b)),
          disabled: b,
          onClick: d
        }
      })));
    },
        u = l;

    exports.default = u;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../Template/Template": "wp6U"
  }],
  "n4PE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = n(require("../../lib/escape-highlight")),
        t = require("../../lib/utils");

    function r() {
      if ("function" != typeof WeakMap) return null;
      var e = new WeakMap();
      return r = function r() {
        return e;
      }, e;
    }

    function n(e) {
      if (e && e.__esModule) return e;
      if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
        default: e
      };
      var t = r();
      if (t && t.has(e)) return t.get(e);
      var n = {},
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var a in e) {
        if (Object.prototype.hasOwnProperty.call(e, a)) {
          var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a];
        }
      }

      return n.default = e, t && t.set(e, n), n;
    }

    function i(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(r), !0).forEach(function (t) {
          o(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function o(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function s(e) {
      return f(e) || c(e) || u();
    }

    function u() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function c(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function f(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }

        return r;
      }
    }

    function p(e, t) {
      if (null == e) return {};
      var r,
          n,
          i = g(e, t);

      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);

        for (n = 0; n < a.length; n++) {
          r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        }
      }

      return i;
    }

    function g(e, t) {
      if (null == e) return {};
      var r,
          n,
          i = {},
          a = Object.keys(e);

      for (n = 0; n < a.length; n++) {
        r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      }

      return i;
    }

    var d = (0, t.createDocumentationMessageGenerator)({
      name: "infinite-hits",
      connector: !0
    });

    function l(e) {
      var t = e || {};
      t.page;
      return p(t, ["page"]);
    }

    function h() {
      var e = null,
          r = void 0;
      return {
        read: function read(n) {
          var i = n.state;
          return (0, t.isEqual)(r, l(i)) ? e : null;
        },
        write: function write(t) {
          var n = t.state,
              i = t.hits;
          r = l(n), e = i;
        }
      };
    }

    function v(e) {
      return Object.keys(e).map(Number).sort(function (e, t) {
        return e - t;
      }).reduce(function (t, r) {
        return t.concat(e[r]);
      }, []);
    }

    var y = function y(r) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.noop;
      return (0, t.checkRendering)(r, d()), function (i) {
        var u,
            c,
            f,
            p,
            g = i || {},
            d = g.escapeHTML,
            l = void 0 === d || d,
            y = g.transformItems,
            b = void 0 === y ? function (e) {
          return e;
        } : y,
            O = g.cache,
            P = void 0 === O ? h() : O,
            j = function j(e, t) {
          var r = e.page,
              n = void 0 === r ? 0 : r,
              i = Object.keys(t).map(Number);
          return 0 === i.length ? n : Math.min.apply(Math, [n].concat(s(i)));
        },
            m = function m(e, t) {
          var r = e.page,
              n = void 0 === r ? 0 : r,
              i = Object.keys(t).map(Number);
          return 0 === i.length ? n : Math.max.apply(Math, [n].concat(s(i)));
        };

        return {
          $$type: "ais.infiniteHits",
          init: function init(e) {
            r(a({}, this.getWidgetRenderState(e), {
              instantSearchInstance: e.instantSearchInstance
            }), !0);
          },
          render: function render(e) {
            var t = e.instantSearchInstance,
                n = this.getWidgetRenderState(e);
            f("view", n.currentPageHits), r(a({}, n, {
              instantSearchInstance: t
            }), !1);
          },
          getRenderState: function getRenderState(e, t) {
            return a({}, e, {
              infiniteHits: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(r) {
            var n,
                o = r.results,
                s = r.helper,
                g = r.state,
                d = r.instantSearchInstance,
                h = [],
                y = P.read({
              state: g
            }) || {};

            if (o) {
              var O = g.page,
                  w = void 0 === O ? 0 : O;
              l && o.hits.length > 0 && (o.hits = (0, e.default)(o.hits));
              var S = o.hits.__escaped;
              o.hits = (0, t.addAbsolutePosition)(o.hits, o.page, o.hitsPerPage), o.hits = (0, t.addQueryID)(o.hits, o.queryID), o.hits = b(o.hits), o.hits.__escaped = S, void 0 === y[w] && (y[w] = o.hits, P.write({
                state: g,
                hits: y
              })), h = o.hits, n = 0 === j(g, y);
            } else u = function (e, t) {
              return function () {
                e.overrideStateWithoutTriggeringChangeEvent(a({}, e.state, {
                  page: j(e.state, t) - 1
                })).searchWithoutTriggeringOnStateChange();
              };
            }(s, y), c = function (e, t) {
              return function () {
                e.setPage(m(e.state, t) + 1).search();
              };
            }(s, y), f = (0, t.createSendEventForHits)({
              instantSearchInstance: d,
              index: s.getIndex(),
              widgetType: this.$$type
            }), p = (0, t.createBindEventForHits)({
              index: s.getIndex(),
              widgetType: this.$$type
            }), n = void 0 === s.state.page || 0 === j(s.state, y);

            var E = v(y),
                I = !o || o.nbPages <= m(g, y) + 1;
            return {
              hits: E,
              currentPageHits: h,
              sendEvent: f,
              bindEvent: p,
              results: o,
              showPrevious: u,
              showMore: c,
              isFirstPage: n,
              isLastPage: I,
              widgetParams: i
            };
          },
          dispose: function dispose(t) {
            var r = t.state;
            n();
            var i = r.setQueryParameter("page", void 0);
            return l ? i.setQueryParameters(Object.keys(e.TAG_PLACEHOLDER).reduce(function (e, t) {
              return a({}, e, o({}, t, void 0));
            }, {})) : i;
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var r = t.searchParameters.page || 0;
            return r ? a({}, e, {
              page: r + 1
            }) : e;
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(t, r) {
            var n = r.uiState,
                i = t;
            l && (i = t.setQueryParameters(e.TAG_PLACEHOLDER));
            var a = n.page ? n.page - 1 : 0;
            return i.setQueryParameter("page", a);
          }
        };
      };
    },
        b = y;

    exports.default = b;
  }, {
    "../../lib/escape-highlight": "venA",
    "../../lib/utils": "Xobp"
  }],
  "W8hM": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      empty: "No results",
      showPreviousText: "Show previous results",
      showMoreText: "Show more results",
      item: function item(e) {
        return JSON.stringify(e, null, 2);
      }
    };
    exports.default = e;
  }, {}],
  "LblD": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = d(require("classnames")),
        s = d(require("../../components/InfiniteHits/InfiniteHits")),
        i = d(require("../../connectors/infinite-hits/connectInfiniteHits")),
        a = require("../../lib/utils"),
        r = require("../../lib/suit"),
        o = require("../../lib/insights"),
        n = d(require("./defaultTemplates"));

    function d(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var l = (0, a.createDocumentationMessageGenerator)({
      name: "infinite-hits"
    }),
        u = (0, r.component)("InfiniteHits"),
        c = (0, o.withInsightsListener)(s.default),
        m = function m(t) {
      var s = t.cssClasses,
          i = t.containerNode,
          r = t.renderState,
          o = t.templates,
          d = t.showPrevious;
      return function (t, l) {
        var u = t.hits,
            m = t.results,
            f = t.showMore,
            p = t.showPrevious,
            h = t.isFirstPage,
            v = t.isLastPage,
            P = t.instantSearchInstance,
            g = t.insights,
            w = t.bindEvent;
        l ? r.templateProps = (0, a.prepareTemplateProps)({
          defaultTemplates: n.default,
          templatesConfig: P.templatesConfig,
          templates: o
        }) : (0, e.render)((0, e.h)(c, {
          cssClasses: s,
          hits: u,
          results: m,
          hasShowPrevious: d,
          showPrevious: p,
          showMore: f,
          templateProps: r.templateProps,
          isFirstPage: h,
          isLastPage: v,
          insights: g,
          sendEvent: function sendEvent(e) {
            P.sendEventToInsights(e);
          },
          bindEvent: w
        }), i);
      };
    },
        f = function f() {
      var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = s.container,
          d = s.escapeHTML,
          c = s.transformItems,
          f = s.templates,
          p = void 0 === f ? n.default : f,
          h = s.cssClasses,
          v = void 0 === h ? {} : h,
          P = s.showPrevious,
          g = s.cache;
      if (!r) throw new Error(l("The `container` option is required."));
      var w = (0, a.getContainerNode)(r),
          M = {
        root: (0, t.default)(u(), v.root),
        emptyRoot: (0, t.default)(u({
          modifierName: "empty"
        }), v.emptyRoot),
        item: (0, t.default)(u({
          descendantName: "item"
        }), v.item),
        list: (0, t.default)(u({
          descendantName: "list"
        }), v.list),
        loadPrevious: (0, t.default)(u({
          descendantName: "loadPrevious"
        }), v.loadPrevious),
        disabledLoadPrevious: (0, t.default)(u({
          descendantName: "loadPrevious",
          modifierName: "disabled"
        }), v.disabledLoadPrevious),
        loadMore: (0, t.default)(u({
          descendantName: "loadMore"
        }), v.loadMore),
        disabledLoadMore: (0, t.default)(u({
          descendantName: "loadMore",
          modifierName: "disabled"
        }), v.disabledLoadMore)
      },
          b = m({
        containerNode: w,
        cssClasses: M,
        templates: p,
        showPrevious: P,
        renderState: {}
      });
      return (0, o.withInsights)(i.default)(b, function () {
        return (0, e.render)(null, w);
      })({
        escapeHTML: d,
        transformItems: c,
        showPrevious: P,
        cache: g
      });
    },
        p = f;

    exports.default = p;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/InfiniteHits/InfiniteHits": "n6hk",
    "../../connectors/infinite-hits/connectInfiniteHits": "n4PE",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB",
    "../../lib/insights": "dDBi",
    "./defaultTemplates": "W8hM"
  }],
  "lOmP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("../../lib/utils");

    function t(e, t) {
      if (null == e) return {};
      var n,
          i,
          a = r(e, t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);

        for (i = 0; i < o.length; i++) {
          n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        }
      }

      return a;
    }

    function r(e, t) {
      if (null == e) return {};
      var r,
          n,
          i = {},
          a = Object.keys(e);

      for (n = 0; n < a.length; n++) {
        r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      }

      return i;
    }

    function n(e, t) {
      return o(e) || a(e, t) || i();
    }

    function i() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function a(e, t) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var r = [],
            n = !0,
            i = !1,
            a = void 0;

        try {
          for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0) {
            ;
          }
        } catch (s) {
          i = !0, a = s;
        } finally {
          try {
            n || null == c.return || c.return();
          } finally {
            if (i) throw a;
          }
        }

        return r;
      }
    }

    function o(e) {
      if (Array.isArray(e)) return e;
    }

    function c(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(Object(r), !0).forEach(function (t) {
          u(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function u(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var h = (0, e.createDocumentationMessageGenerator)({
      name: "menu",
      connector: !0
    });

    function l(r) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(r, h()), function () {
        var a,
            o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            c = o.attribute,
            l = o.limit,
            f = void 0 === l ? 10 : l,
            g = o.showMore,
            m = void 0 !== g && g,
            d = o.showMoreLimit,
            p = void 0 === d ? 20 : d,
            v = o.sortBy,
            b = void 0 === v ? ["isRefined", "name:asc"] : v,
            y = o.transformItems,
            S = void 0 === y ? function (e) {
          return e;
        } : y;
        if (!c) throw new Error(h("The `attribute` option is required."));
        if (!0 === m && p <= f) throw new Error(h("The `showMoreLimit` option must be greater than `limit`."));

        var w = function w() {};

        function O() {
          w();
        }

        return {
          $$type: "ais.menu",
          isShowingMore: !1,
          createToggleShowMore: function createToggleShowMore(e) {
            var t = this,
                r = e.results,
                n = e.instantSearchInstance;
            return function () {
              t.isShowingMore = !t.isShowingMore, t.render({
                results: r,
                instantSearchInstance: n
              });
            };
          },
          getLimit: function getLimit() {
            return this.isShowingMore ? p : f;
          },
          init: function init(e) {
            var t = e.instantSearchInstance;
            r(s({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !0);
          },
          render: function render(e) {
            var t = e.instantSearchInstance;
            r(s({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !1);
          },
          dispose: function dispose(e) {
            var t = e.state;
            return i(), t.removeHierarchicalFacet(c).setQueryParameter("maxValuesPerFacet", void 0);
          },
          getRenderState: function getRenderState(e, t) {
            return s({}, e, {
              menu: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(r) {
            var i = r.results,
                u = r.createURL,
                h = r.instantSearchInstance,
                l = r.helper,
                f = [],
                g = !1;

            if (a || (a = (0, e.createSendEventForFacet)({
              instantSearchInstance: h,
              helper: l,
              attribute: c,
              widgetType: this.$$type
            })), this._createURL || (this._createURL = function (e) {
              return u(l.state.toggleRefinement(c, e));
            }), this._refine || (this._refine = function (e) {
              var t = n(l.getHierarchicalFacetBreadcrumb(c), 1)[0];
              a("click", e || t), l.toggleRefinement(c, e || t).search();
            }), w = this.createToggleShowMore({
              results: i,
              instantSearchInstance: h
            }), i) {
              var d = i.getFacetValues(c, {
                sortBy: b
              }),
                  p = d && d.data ? d.data : [];
              g = m && (this.isShowingMore || p.length > this.getLimit()), f = S(p.slice(0, this.getLimit()).map(function (e) {
                var r = e.name,
                    n = e.path;
                return s({}, t(e, ["name", "path"]), {
                  label: r,
                  value: n
                });
              }));
            }

            return {
              items: f,
              createURL: this._createURL,
              refine: this._refine,
              sendEvent: a,
              canRefine: f.length > 0,
              widgetParams: o,
              isShowingMore: this.isShowingMore,
              toggleShowMore: O,
              canToggleShowMore: g
            };
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var r = n(t.searchParameters.getHierarchicalFacetBreadcrumb(c), 1)[0];
            return r ? s({}, e, {
              menu: s({}, e.menu, u({}, c, r))
            }) : e;
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
            var r = t.uiState,
                n = r.menu && r.menu[c],
                i = e.removeHierarchicalFacet(c).addHierarchicalFacet({
              name: c,
              attributes: [c]
            }),
                a = i.maxValuesPerFacet || 0,
                o = Math.max(a, m ? p : f),
                h = i.setQueryParameter("maxValuesPerFacet", o);
            return n ? h.addHierarchicalFacetRefinement(c, n) : h.setQueryParameters({
              hierarchicalFacetsRefinements: s({}, h.hierarchicalFacetsRefinements, u({}, c, []))
            });
          }
        };
      };
    }
  }, {
    "../../lib/utils": "Xobp"
  }],
  "hON1": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p;

    var e = require("preact"),
        t = i(require("classnames")),
        r = i(require("../../components/RefinementList/RefinementList")),
        n = i(require("../../connectors/menu/connectMenu")),
        o = i(require("./defaultTemplates")),
        a = require("../../lib/utils"),
        s = require("../../lib/suit");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? l(Object(r), !0).forEach(function (t) {
          u(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function u(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var d = (0, a.createDocumentationMessageGenerator)({
      name: "menu"
    }),
        m = (0, s.component)("Menu"),
        f = function f(t) {
      var n = t.containerNode,
          s = t.cssClasses,
          i = t.renderState,
          l = t.templates,
          u = t.showMore;
      return function (t, d) {
        var m = t.refine,
            f = t.items,
            p = t.createURL,
            b = t.instantSearchInstance,
            w = t.isShowingMore,
            h = t.toggleShowMore,
            g = t.canToggleShowMore;
        if (d) i.templateProps = (0, a.prepareTemplateProps)({
          defaultTemplates: o.default,
          templatesConfig: b.templatesConfig,
          templates: l
        });else {
          var M = f.map(function (e) {
            return c({}, e, {
              url: p(e.name)
            });
          });
          (0, e.render)((0, e.h)(r.default, {
            createURL: p,
            cssClasses: s,
            facetValues: M,
            showMore: u,
            templateProps: i.templateProps,
            toggleRefinement: m,
            toggleShowMore: h,
            isShowingMore: w,
            canToggleShowMore: g
          }), n);
        }
      };
    };

    function p(r) {
      var s = r.container,
          i = r.attribute,
          l = r.sortBy,
          c = r.limit,
          u = r.showMore,
          p = r.showMoreLimit,
          b = r.cssClasses,
          w = void 0 === b ? {} : b,
          h = r.templates,
          g = void 0 === h ? o.default : h,
          M = r.transformItems;
      if (!s) throw new Error(d("The `container` option is required."));
      var O = (0, a.getContainerNode)(s),
          v = {
        root: (0, t.default)(m(), w.root),
        noRefinementRoot: (0, t.default)(m({
          modifierName: "noRefinement"
        }), w.noRefinementRoot),
        list: (0, t.default)(m({
          descendantName: "list"
        }), w.list),
        item: (0, t.default)(m({
          descendantName: "item"
        }), w.item),
        selectedItem: (0, t.default)(m({
          descendantName: "item",
          modifierName: "selected"
        }), w.selectedItem),
        link: (0, t.default)(m({
          descendantName: "link"
        }), w.link),
        label: (0, t.default)(m({
          descendantName: "label"
        }), w.label),
        count: (0, t.default)(m({
          descendantName: "count"
        }), w.count),
        showMore: (0, t.default)(m({
          descendantName: "showMore"
        }), w.showMore),
        disabledShowMore: (0, t.default)(m({
          descendantName: "showMore",
          modifierName: "disabled"
        }), w.disabledShowMore)
      },
          y = f({
        containerNode: O,
        cssClasses: v,
        renderState: {},
        templates: g,
        showMore: u
      });
      return (0, n.default)(y, function () {
        return (0, e.render)(null, O);
      })({
        attribute: i,
        limit: c,
        showMore: u,
        showMoreLimit: p,
        sortBy: l,
        transformItems: M
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/RefinementList/RefinementList": "Em1r",
    "../../connectors/menu/connectMenu": "lOmP",
    "./defaultTemplates": "ewE5",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "yOh8": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = c;

    var e = require("../../lib/utils"),
        t = require("../../lib/escape-highlight");

    function r(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function n(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? r(Object(n), !0).forEach(function (t) {
          i(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function i(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function a(e, t) {
      if (null == e) return {};
      var r,
          n,
          i = o(e, t);

      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);

        for (n = 0; n < a.length; n++) {
          r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        }
      }

      return i;
    }

    function o(e, t) {
      if (null == e) return {};
      var r,
          n,
          i = {},
          a = Object.keys(e);

      for (n = 0; n < a.length; n++) {
        r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
      }

      return i;
    }

    var s = (0, e.createDocumentationMessageGenerator)({
      name: "refinement-list",
      connector: !0
    });

    function c(r) {
      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(r, s()), function () {
        var c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            u = c.attribute,
            h = c.operator,
            g = void 0 === h ? "or" : h,
            l = c.limit,
            f = void 0 === l ? 10 : l,
            m = c.showMore,
            d = void 0 !== m && m,
            v = c.showMoreLimit,
            S = void 0 === v ? 20 : v,
            p = c.sortBy,
            w = void 0 === p ? ["isRefined", "count:desc", "name:asc"] : p,
            b = c.escapeFacetValues,
            P = void 0 === b || b,
            O = c.transformItems,
            y = void 0 === O ? function (e) {
          return e;
        } : O;
        if (!u) throw new Error(s("The `attribute` option is required."));
        if (!/^(and|or)$/.test(g)) throw new Error(s('The `operator` must one of: `"and"`, `"or"` (got "'.concat(g, '").')));
        if (!0 === d && S <= f) throw new Error(s("`showMoreLimit` should be greater than `limit`."));

        var M,
            R,
            j,
            F,
            T,
            L = function L(e) {
          var t = e.name;
          return n({}, a(e, ["name"]), {
            label: t,
            value: t,
            highlighted: t
          });
        },
            E = function E(e) {
          return e ? S : f;
        },
            I = [],
            D = !0;

        return {
          $$type: "ais.refinementList",
          isShowingMore: !1,
          toggleShowMore: function toggleShowMore() {},
          cachedToggleShowMore: function cachedToggleShowMore() {
            T();
          },
          createToggleShowMore: function createToggleShowMore(e) {
            var t = this;
            return function () {
              t.isShowingMore = !t.isShowingMore, t.render(e);
            };
          },
          getLimit: function getLimit() {
            return E(this.isShowingMore);
          },
          init: function init(e) {
            r(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: e.instantSearchInstance
            }), !0);
          },
          render: function render(e) {
            r(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: e.instantSearchInstance
            }), !1);
          },
          getRenderState: function getRenderState(e, t) {
            return n({}, e, {
              refinementList: n({}, e.refinementList, i({}, u, this.getWidgetRenderState(t)))
            });
          },
          getWidgetRenderState: function getWidgetRenderState(i) {
            var o,
                s = i.results,
                h = i.state,
                g = i.createURL,
                l = i.instantSearchInstance,
                m = i.isFromSearch,
                v = void 0 !== m && m,
                S = i.helper,
                p = [];

            if (F && j && R || (F = (0, e.createSendEventForFacet)({
              instantSearchInstance: l,
              helper: S,
              attribute: u,
              widgetType: this.$$type
            }), j = function j(e) {
              F("click", e), S.toggleRefinement(u, e).search();
            }, R = function (e) {
              var i = this;
              return function (o) {
                return function (s) {
                  var c = o.instantSearchInstance;
                  if ("" === s && I) r(n({}, i.getWidgetRenderState(n({}, o, {
                    results: M
                  })), {
                    instantSearchInstance: c
                  }));else {
                    var h = {
                      highlightPreTag: P ? t.TAG_PLACEHOLDER.highlightPreTag : t.TAG_REPLACEMENT.highlightPreTag,
                      highlightPostTag: P ? t.TAG_PLACEHOLDER.highlightPostTag : t.TAG_REPLACEMENT.highlightPostTag
                    };
                    e.searchForFacetValues(u, s, Math.min(E(i.isShowingMore), 100), h).then(function (e) {
                      var s = P ? (0, t.escapeFacets)(e.facetHits) : e.facetHits,
                          u = y(s.map(function (e) {
                        var t = e.value;
                        return n({}, a(e, ["value"]), {
                          value: t,
                          label: t
                        });
                      })),
                          h = i.isShowingMore && I.length > f;
                      r(n({}, i.getWidgetRenderState(n({}, o, {
                        results: M
                      })), {
                        items: u,
                        canToggleShowMore: h,
                        canRefine: !0,
                        instantSearchInstance: c,
                        isFromSearch: !0
                      }));
                    });
                  }
                };
              };
            }.call(this, S)), s) {
              v ? (o = P ? (0, t.escapeFacets)(s.facetHits) : s.facetHits, p = y(o.map(function (e) {
                var t = e.value;
                return n({}, a(e, ["value"]), {
                  value: t,
                  label: t
                });
              }))) : (o = s.getFacetValues(u, {
                sortBy: w
              }) || [], p = y(o.slice(0, this.getLimit()).map(L)));
              var b = h.maxValuesPerFacet,
                  O = this.getLimit();
              D = b > O ? o.length <= O : o.length < O, M = s, I = p, T = this.createToggleShowMore(i);
            }

            var x = R && R(i),
                A = this.isShowingMore && I.length > f || d && !v && !D;
            return {
              createURL: function createURL(e) {
                return g(h.toggleRefinement(u, e));
              },
              items: p,
              refine: j,
              searchForItems: x,
              isFromSearch: v,
              canRefine: v || p.length > 0,
              widgetParams: c,
              isShowingMore: this.isShowingMore,
              canToggleShowMore: A,
              toggleShowMore: this.cachedToggleShowMore,
              sendEvent: F,
              hasExhaustiveItems: D
            };
          },
          dispose: function dispose(e) {
            var t = e.state;
            o();
            var r = t.setQueryParameter("maxValuesPerFacet", void 0);
            return "and" === g ? r.removeFacet(u) : r.removeDisjunctiveFacet(u);
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var r = t.searchParameters,
                a = "or" === g ? r.getDisjunctiveRefinements(u) : r.getConjunctiveRefinements(u);
            return a.length ? n({}, e, {
              refinementList: n({}, e.refinementList, i({}, u, a))
            }) : e;
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
            var r = t.uiState,
                a = "or" === g,
                o = r.refinementList && r.refinementList[u],
                s = e.clearRefinements(u),
                c = a ? s.addDisjunctiveFacet(u) : s.addFacet(u),
                h = c.maxValuesPerFacet || 0,
                l = Math.max(h, d ? S : f),
                m = c.setQueryParameter("maxValuesPerFacet", l);

            if (!o) {
              var v = a ? "disjunctiveFacetsRefinements" : "facetsRefinements";
              return m.setQueryParameters(i({}, v, n({}, m[v], i({}, u, []))));
            }

            return o.reduce(function (e, t) {
              return a ? e.addDisjunctiveFacetRefinement(u, t) : e.addFacetRefinement(u, t);
            }, m);
          }
        };
      };
    }
  }, {
    "../../lib/utils": "Xobp",
    "../../lib/escape-highlight": "venA"
  }],
  "f5Yh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var t = {
      reset: '\n<svg class="{{cssClasses.resetIcon}}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">\n  <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>\n</svg>\n  ',
      submit: '\n<svg class="{{cssClasses.submitIcon}}" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">\n  <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>\n</svg>\n  ',
      loadingIndicator: '\n<svg class="{{cssClasses.loadingIcon}}" width="16" height="16" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#444">\n  <g fill="none" fillRule="evenodd">\n    <g transform="translate(1 1)" strokeWidth="2">\n      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />\n      <path d="M36 18c0-9.94-8.06-18-18-18">\n        <animateTransform\n          attributeName="transform"\n          type="rotate"\n          from="0 18 18"\n          to="360 18 18"\n          dur="1s"\n          repeatCount="indefinite"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n  '
    };
    exports.default = t;
  }, {}],
  "AJN3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = s(require("../search-box/defaultTemplates"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = {
      item: '<label class="{{cssClasses.label}}">\n  <input type="checkbox"\n         class="{{cssClasses.checkbox}}"\n         value="{{value}}"\n         {{#isRefined}}checked{{/isRefined}} />\n  <span class="{{cssClasses.labelText}}">{{#isFromSearch}}{{{highlighted}}}{{/isFromSearch}}{{^isFromSearch}}{{highlighted}}{{/isFromSearch}}</span>\n  <span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>\n</label>',
      showMoreText: "\n    {{#isShowingMore}}\n      Show less\n    {{/isShowingMore}}\n    {{^isShowingMore}}\n      Show more\n    {{/isShowingMore}}\n    ",
      searchableNoResults: "No results",
      searchableReset: e.default.reset,
      searchableSubmit: e.default.submit,
      searchableLoadingIndicator: e.default.loadingIndicator
    };
    exports.default = a;
  }, {
    "../search-box/defaultTemplates": "f5Yh"
  }],
  "J5yn": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = w;

    var e = require("preact"),
        t = c(require("classnames")),
        a = c(require("../../components/RefinementList/RefinementList")),
        r = c(require("../../connectors/refinement-list/connectRefinementList")),
        n = c(require("./defaultTemplates")),
        o = require("../../lib/utils"),
        s = require("../../lib/suit");

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e, t) {
      if (null == e) return {};
      var a,
          r,
          n = i(e, t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);

        for (r = 0; r < o.length; r++) {
          a = o[r], t.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
        }
      }

      return n;
    }

    function i(e, t) {
      if (null == e) return {};
      var a,
          r,
          n = {},
          o = Object.keys(e);

      for (r = 0; r < o.length; r++) {
        a = o[r], t.indexOf(a) >= 0 || (n[a] = e[a]);
      }

      return n;
    }

    function d(e, t) {
      var a = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, r);
      }

      return a;
    }

    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? d(Object(a), !0).forEach(function (t) {
          m(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }

      return e;
    }

    function m(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }

    var f = (0, o.createDocumentationMessageGenerator)({
      name: "refinement-list"
    }),
        h = (0, s.component)("RefinementList"),
        b = (0, s.component)("SearchBox");

    function p(e) {
      var t = u({}, e, {
        submit: e.searchableSubmit,
        reset: e.searchableReset,
        loadingIndicator: e.searchableLoadingIndicator
      });
      t.searchableReset, t.searchableSubmit, t.searchableLoadingIndicator;
      return l(t, ["searchableReset", "searchableSubmit", "searchableLoadingIndicator"]);
    }

    var g = function g(t) {
      var r = t.containerNode,
          n = t.cssClasses,
          s = t.templates,
          c = t.renderState,
          l = t.showMore,
          i = t.searchable,
          d = t.searchablePlaceholder,
          u = t.searchableIsAlwaysActive;
      return function (t, m) {
        var f = t.refine,
            h = t.items,
            b = t.createURL,
            p = t.searchForItems,
            g = t.isFromSearch,
            w = t.instantSearchInstance,
            v = t.toggleShowMore,
            I = t.isShowingMore,
            O = t.hasExhaustiveItems,
            y = t.canToggleShowMore;
        m ? c.templateProps = (0, o.prepareTemplateProps)({
          templatesConfig: w.templatesConfig,
          templates: s
        }) : (0, e.render)((0, e.h)(a.default, {
          createURL: b,
          cssClasses: n,
          facetValues: h,
          templateProps: c.templateProps,
          toggleRefinement: f,
          searchFacetValues: i ? p : void 0,
          searchPlaceholder: d,
          searchIsAlwaysActive: u,
          isFromSearch: g,
          showMore: l && !g && h.length > 0,
          toggleShowMore: v,
          isShowingMore: I,
          hasExhaustiveItems: O,
          canToggleShowMore: y
        }), r);
      };
    };

    function w() {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          s = a.container,
          c = a.attribute,
          l = a.operator,
          i = a.sortBy,
          d = a.limit,
          m = a.showMore,
          w = a.showMoreLimit,
          v = a.searchable,
          I = void 0 !== v && v,
          O = a.searchablePlaceholder,
          y = void 0 === O ? "Search..." : O,
          N = a.searchableEscapeFacetValues,
          S = void 0 === N || N,
          M = a.searchableIsAlwaysActive,
          R = void 0 === M || M,
          P = a.cssClasses,
          j = void 0 === P ? {} : P,
          x = a.templates,
          L = void 0 === x ? n.default : x,
          q = a.transformItems;
      if (!s) throw new Error(f("The `container` option is required."));
      var A = !!I && Boolean(S),
          T = (0, o.getContainerNode)(s),
          B = p(u({}, n.default, {}, L)),
          C = {
        root: (0, t.default)(h(), j.root),
        noRefinementRoot: (0, t.default)(h({
          modifierName: "noRefinement"
        }), j.noRefinementRoot),
        list: (0, t.default)(h({
          descendantName: "list"
        }), j.list),
        item: (0, t.default)(h({
          descendantName: "item"
        }), j.item),
        selectedItem: (0, t.default)(h({
          descendantName: "item",
          modifierName: "selected"
        }), j.selectedItem),
        searchBox: (0, t.default)(h({
          descendantName: "searchBox"
        }), j.searchBox),
        label: (0, t.default)(h({
          descendantName: "label"
        }), j.label),
        checkbox: (0, t.default)(h({
          descendantName: "checkbox"
        }), j.checkbox),
        labelText: (0, t.default)(h({
          descendantName: "labelText"
        }), j.labelText),
        count: (0, t.default)(h({
          descendantName: "count"
        }), j.count),
        noResults: (0, t.default)(h({
          descendantName: "noResults"
        }), j.noResults),
        showMore: (0, t.default)(h({
          descendantName: "showMore"
        }), j.showMore),
        disabledShowMore: (0, t.default)(h({
          descendantName: "showMore",
          modifierName: "disabled"
        }), j.disabledShowMore),
        searchable: {
          root: (0, t.default)(b(), j.searchableRoot),
          form: (0, t.default)(b({
            descendantName: "form"
          }), j.searchableForm),
          input: (0, t.default)(b({
            descendantName: "input"
          }), j.searchableInput),
          submit: (0, t.default)(b({
            descendantName: "submit"
          }), j.searchableSubmit),
          submitIcon: (0, t.default)(b({
            descendantName: "submitIcon"
          }), j.searchableSubmitIcon),
          reset: (0, t.default)(b({
            descendantName: "reset"
          }), j.searchableReset),
          resetIcon: (0, t.default)(b({
            descendantName: "resetIcon"
          }), j.searchableResetIcon),
          loadingIndicator: (0, t.default)(b({
            descendantName: "loadingIndicator"
          }), j.searchableLoadingIndicator),
          loadingIcon: (0, t.default)(b({
            descendantName: "loadingIcon"
          }), j.searchableLoadingIcon)
        }
      },
          E = g({
        containerNode: T,
        cssClasses: C,
        templates: B,
        renderState: {},
        searchable: I,
        searchablePlaceholder: y,
        searchableIsAlwaysActive: R,
        showMore: m
      });
      return (0, r.default)(E, function () {
        return (0, e.render)(null, T);
      })({
        attribute: c,
        operator: l,
        limit: d,
        showMore: m,
        showMoreLimit: w,
        sortBy: i,
        escapeFacetValues: A,
        transformItems: q
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/RefinementList/RefinementList": "Em1r",
    "../../connectors/refinement-list/connectRefinementList": "yOh8",
    "./defaultTemplates": "AJN3",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "GCgr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function t(e, t) {
      return i(e) || r(e, t) || n();
    }

    function n() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function r(e, t) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var n = [],
            r = !0,
            i = !1,
            a = void 0;

        try {
          for (var o, c = e[Symbol.iterator](); !(r = (o = c.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0) {
            ;
          }
        } catch (u) {
          i = !0, a = u;
        } finally {
          try {
            r || null == c.return || c.return();
          } finally {
            if (i) throw a;
          }
        }

        return n;
      }
    }

    function i(e) {
      if (Array.isArray(e)) return e;
    }

    function a(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(n), !0).forEach(function (t) {
          c(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function c(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var u = (0, e.createDocumentationMessageGenerator)({
      name: "numeric-menu",
      connector: !0
    }),
        s = "ais.numericMenu",
        d = function d(t) {
      var n = t.instantSearchInstance,
          r = t.helper,
          i = t.attribute;
      return function () {
        for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++) {
          a[o] = arguments[o];
        }

        if (1 !== a.length) {
          var c = a[0],
              u = a[1],
              d = a[2],
              f = void 0 === d ? "Filter Applied" : d;

          if ("click" === c) {
            var m = (0, e.convertNumericRefinementsToFilters)(v(r.state, i, u), i);
            m && m.length > 0 && n.sendEventToInsights({
              insightsMethod: "clickedFilters",
              widgetType: s,
              eventType: c,
              payload: {
                eventName: f,
                index: r.getIndex(),
                filters: m
              }
            });
          }
        } else n.sendEventToInsights(a[0]);
      };
    },
        f = function f(n) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(n, u()), function (i) {
        var a = i || {},
            f = a.attribute,
            l = void 0 === f ? "" : f,
            p = a.items,
            g = void 0 === p ? [] : p,
            h = a.transformItems,
            b = void 0 === h ? function (e) {
          return e;
        } : h;
        if ("" === l) throw new Error(u("The `attribute` option is required."));
        if (!g || 0 === g.length) throw new Error(u("The `items` option expects an array of objects."));

        var y = function y(e) {
          return g.map(function (t) {
            var n = t.start,
                r = t.end,
                i = t.label;
            return {
              label: i,
              value: window.encodeURI(JSON.stringify({
                start: n,
                end: r
              })),
              isRefined: m(e, l, {
                start: n,
                end: r,
                label: i
              })
            };
          });
        },
            R = {};

        return {
          $$type: s,
          init: function init(e) {
            var t = e.instantSearchInstance;
            n(o({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !0);
          },
          render: function render(e) {
            var t = e.instantSearchInstance;
            n(o({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !1);
          },
          dispose: function dispose(e) {
            var t = e.state;
            return r(), t.clearRefinements(l);
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var n = t.searchParameters.getNumericRefinements(l),
                r = n["="] && n["="][0];
            if (r || 0 === r) return o({}, e, {
              numericMenu: o({}, e.numericMenu, c({}, l, "".concat(n["="])))
            });
            var i = n[">="] && n[">="][0] || "",
                a = n["<="] && n["<="][0] || "";
            return "" === i && "" === a ? e : o({}, e, {
              numericMenu: o({}, e.numericMenu, c({}, l, "".concat(i, ":").concat(a)))
            });
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(n, r) {
            var i = r.uiState,
                a = i.numericMenu && i.numericMenu[l],
                u = n.clearRefinements(l);
            if (!a) return u.setQueryParameters({
              numericRefinements: o({}, u.numericRefinements, c({}, l, {}))
            });
            if (-1 === a.indexOf(":")) return u.addNumericRefinement(l, "=", Number(a));
            var s = t(a.split(":").map(parseFloat), 2),
                d = s[0],
                f = s[1],
                m = (0, e.isFiniteNumber)(d) ? u.addNumericRefinement(l, ">=", d) : u;
            return (0, e.isFiniteNumber)(f) ? m.addNumericRefinement(l, "<=", f) : m;
          },
          getRenderState: function getRenderState(e, t) {
            return o({}, e, {
              numericMenu: o({}, e.numericMenu, c({}, l, this.getWidgetRenderState(t)))
            });
          },
          getWidgetRenderState: function getWidgetRenderState(e) {
            var t = e.results,
                n = e.state,
                r = e.instantSearchInstance,
                a = e.helper,
                o = e.createURL;
            return R.refine || (R.refine = function (e) {
              var t = v(a.state, l, e);
              R.sendEvent("click", e), a.setState(t).search();
            }), R.createURL || (R.createURL = function (e) {
              return function (t) {
                return o(v(e, l, t));
              };
            }), R.sendEvent || (R.sendEvent = d({
              instantSearchInstance: r,
              helper: a,
              attribute: l
            })), {
              createURL: R.createURL(n),
              items: b(y(n)),
              hasNoResults: !t || 0 === t.nbHits,
              refine: R.refine,
              sendEvent: R.sendEvent,
              widgetParams: i
            };
          }
        };
      };
    };

    function m(e, t, n) {
      var r = e.getNumericRefinements(t);
      return void 0 !== n.start && void 0 !== n.end && n.start === n.end ? l(r, "=", n.start) : void 0 !== n.start ? l(r, ">=", n.start) : void 0 !== n.end ? l(r, "<=", n.end) : void 0 === n.start && void 0 === n.end && Object.keys(r).every(function (e) {
        return 0 === (r[e] || []).length;
      });
    }

    function v(e, t, n) {
      var r = e,
          i = JSON.parse(window.decodeURI(n)),
          a = r.getNumericRefinements(t);
      if (void 0 === i.start && void 0 === i.end) return r.removeNumericRefinement(t);

      if (m(r, t, i) || (r = r.removeNumericRefinement(t)), void 0 !== i.start && void 0 !== i.end) {
        if (i.start > i.end) throw new Error("option.start should be > to option.end");
        if (i.start === i.end) return r = l(a, "=", i.start) ? r.removeNumericRefinement(t, "=", i.start) : r.addNumericRefinement(t, "=", i.start);
      }

      return void 0 !== i.start && (r = l(a, ">=", i.start) ? r.removeNumericRefinement(t, ">=", i.start) : r.addNumericRefinement(t, ">=", i.start)), void 0 !== i.end && (r = l(a, "<=", i.end) ? r.removeNumericRefinement(t, "<=", i.end) : r.addNumericRefinement(t, "<=", i.end)), "number" == typeof r.page && (r.page = 0), r;
    }

    function l(e, t, n) {
      return void 0 !== e[t] && e[t].includes(n);
    }

    var p = f;
    exports.default = p;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "SEAr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      item: '<label class="{{cssClasses.label}}">\n  <input type="radio" class="{{cssClasses.radio}}" name="{{attribute}}"{{#isRefined}} checked{{/isRefined}} />\n  <span class="{{cssClasses.labelText}}">{{label}}</span>\n</label>'
    };
    exports.default = e;
  }, {}],
  "ykP3": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = l(require("classnames")),
        a = l(require("../../components/RefinementList/RefinementList")),
        r = l(require("../../connectors/numeric-menu/connectNumericMenu")),
        n = l(require("./defaultTemplates")),
        s = require("../../lib/utils"),
        i = require("../../lib/suit");

    function l(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var o = (0, s.createDocumentationMessageGenerator)({
      name: "numeric-menu"
    }),
        u = (0, i.component)("NumericMenu"),
        m = function m(t) {
      var r = t.containerNode,
          i = t.attribute,
          l = t.cssClasses,
          o = t.renderState,
          u = t.templates;
      return function (t, m) {
        var d = t.createURL,
            c = t.instantSearchInstance,
            f = t.refine,
            p = t.items;
        m ? o.templateProps = (0, s.prepareTemplateProps)({
          defaultTemplates: n.default,
          templatesConfig: c.templatesConfig,
          templates: u
        }) : (0, e.render)((0, e.h)(a.default, {
          createURL: d,
          cssClasses: l,
          facetValues: p,
          templateProps: o.templateProps,
          toggleRefinement: f,
          attribute: i
        }), r);
      };
    },
        d = function d(a) {
      var i = a || {},
          l = i.container,
          d = i.attribute,
          c = i.items,
          f = i.cssClasses,
          p = void 0 === f ? {} : f,
          b = i.templates,
          N = void 0 === b ? n.default : b,
          v = i.transformItems;
      if (!l) throw new Error(o("The `container` option is required."));
      var R = (0, s.getContainerNode)(l),
          q = {
        root: (0, t.default)(u(), p.root),
        noRefinementRoot: (0, t.default)(u({
          modifierName: "noRefinement"
        }), p.noRefinementRoot),
        list: (0, t.default)(u({
          descendantName: "list"
        }), p.list),
        item: (0, t.default)(u({
          descendantName: "item"
        }), p.item),
        selectedItem: (0, t.default)(u({
          descendantName: "item",
          modifierName: "selected"
        }), p.selectedItem),
        label: (0, t.default)(u({
          descendantName: "label"
        }), p.label),
        radio: (0, t.default)(u({
          descendantName: "radio"
        }), p.radio),
        labelText: (0, t.default)(u({
          descendantName: "labelText"
        }), p.labelText)
      },
          C = m({
        containerNode: R,
        attribute: d,
        cssClasses: q,
        renderState: {},
        templates: N
      });
      return (0, r.default)(C, function () {
        return (0, e.render)(null, R);
      })({
        attribute: d,
        items: c,
        transformItems: v
      });
    },
        c = d;

    exports.default = c;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/RefinementList/RefinementList": "Em1r",
    "../../connectors/numeric-menu/connectNumericMenu": "GCgr",
    "./defaultTemplates": "SEAr",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "vVHG": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact");

    function a(a) {
      var l = a.cssClasses,
          r = a.label,
          s = a.ariaLabel,
          t = a.url,
          i = a.isDisabled,
          n = a.handleClick,
          u = a.pageNumber;
      return i ? (0, e.h)("li", {
        className: l.item
      }, (0, e.h)("span", {
        className: l.link,
        dangerouslySetInnerHTML: {
          __html: r
        }
      })) : (0, e.h)("li", {
        className: l.item
      }, (0, e.h)("a", {
        className: l.link,
        "aria-label": s,
        href: t,
        onClick: function onClick(e) {
          return n(u, e);
        },
        dangerouslySetInnerHTML: {
          __html: r
        }
      }));
    }

    var l = a;
    exports.default = l;
  }, {
    "preact": "u8ui"
  }],
  "yq9X": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = r(require("classnames")),
        s = r(require("./PaginationLink")),
        a = require("../../lib/utils");

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i(e) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function o(e, t) {
      for (var s = 0; s < t.length; s++) {
        var a = t[s];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }

    function l(e, t, s) {
      return t && o(e.prototype, t), s && o(e, s), e;
    }

    function p(e, t) {
      return !t || "object" !== i(t) && "function" != typeof t ? c(e) : t;
    }

    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function c(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function f(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && b(e, t);
    }

    function b(e, t) {
      return (b = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function h(e, t, s) {
      return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = s, e;
    }

    var d = function (r) {
      function i() {
        var e, t;
        n(this, i);

        for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++) {
          r[o] = arguments[o];
        }

        return h(c(t = p(this, (e = u(i)).call.apply(e, [this].concat(r)))), "handleClick", function (e, s) {
          (0, a.isSpecialClick)(s) || (s.preventDefault(), t.props.setCurrentPage(e));
        }), t;
      }

      return f(i, e.Component), l(i, [{
        key: "pageLink",
        value: function value(a) {
          var r = a.label,
              i = a.ariaLabel,
              n = a.pageNumber,
              o = a.additionalClassName,
              l = void 0 === o ? null : o,
              p = a.isDisabled,
              u = void 0 !== p && p,
              c = a.isSelected,
              f = void 0 !== c && c,
              b = a.createURL,
              h = {
            item: (0, t.default)(this.props.cssClasses.item, l),
            link: this.props.cssClasses.link
          };
          u ? h.item = (0, t.default)(h.item, this.props.cssClasses.disabledItem) : f && (h.item = (0, t.default)(h.item, this.props.cssClasses.selectedItem));
          var d = b && !u ? b(n) : "#";
          return (0, e.h)(s.default, {
            ariaLabel: i,
            cssClasses: h,
            handleClick: this.handleClick,
            isDisabled: u,
            key: r + n + i,
            label: r,
            pageNumber: n,
            url: d
          });
        }
      }, {
        key: "previousPageLink",
        value: function value(e) {
          var t = e.isFirstPage,
              s = e.currentPage,
              a = e.createURL;
          return this.pageLink({
            ariaLabel: "Previous",
            additionalClassName: this.props.cssClasses.previousPageItem,
            isDisabled: t,
            label: this.props.templates.previous,
            pageNumber: s - 1,
            createURL: a
          });
        }
      }, {
        key: "nextPageLink",
        value: function value(e) {
          var t = e.isLastPage,
              s = e.currentPage,
              a = e.createURL;
          return this.pageLink({
            ariaLabel: "Next",
            additionalClassName: this.props.cssClasses.nextPageItem,
            isDisabled: t,
            label: this.props.templates.next,
            pageNumber: s + 1,
            createURL: a
          });
        }
      }, {
        key: "firstPageLink",
        value: function value(e) {
          var t = e.isFirstPage,
              s = e.createURL;
          return this.pageLink({
            ariaLabel: "First",
            additionalClassName: this.props.cssClasses.firstPageItem,
            isDisabled: t,
            label: this.props.templates.first,
            pageNumber: 0,
            createURL: s
          });
        }
      }, {
        key: "lastPageLink",
        value: function value(e) {
          var t = e.isLastPage,
              s = e.nbPages,
              a = e.createURL;
          return this.pageLink({
            ariaLabel: "Last",
            additionalClassName: this.props.cssClasses.lastPageItem,
            isDisabled: t,
            label: this.props.templates.last,
            pageNumber: s - 1,
            createURL: a
          });
        }
      }, {
        key: "pages",
        value: function value(e) {
          var t = this,
              s = e.currentPage,
              a = e.pages,
              r = e.createURL;
          return a.map(function (e) {
            return t.pageLink({
              ariaLabel: e + 1,
              additionalClassName: t.props.cssClasses.pageItem,
              isSelected: e === s,
              label: e + 1,
              pageNumber: e,
              createURL: r
            });
          });
        }
      }, {
        key: "render",
        value: function value() {
          return (0, e.h)("div", {
            className: (0, t.default)(this.props.cssClasses.root, h({}, this.props.cssClasses.noRefinementRoot, this.props.nbPages <= 1))
          }, (0, e.h)("ul", {
            className: this.props.cssClasses.list
          }, this.props.showFirst && this.firstPageLink(this.props), this.props.showPrevious && this.previousPageLink(this.props), this.pages(this.props), this.props.showNext && this.nextPageLink(this.props), this.props.showLast && this.lastPageLink(this.props)));
        }
      }]), i;
    }();

    d.defaultProps = {
      nbHits: 0,
      currentPage: 0,
      nbPages: 0
    };
    var g = d;
    exports.default = g;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "./PaginationLink": "vVHG",
    "../../lib/utils": "Xobp"
  }],
  "sgIW": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function t(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function r(e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e;
    }

    function a(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var i = function () {
      function n(e) {
        t(this, n), a(this, "currentPage", void 0), a(this, "total", void 0), a(this, "padding", void 0), this.currentPage = e.currentPage, this.total = e.total, this.padding = e.padding;
      }

      return r(n, [{
        key: "pages",
        value: function value() {
          var t = this.total,
              n = this.currentPage,
              r = this.padding;
          if (0 === t) return [0];
          var a = this.nbPagesDisplayed(r, t);
          if (a === t) return (0, e.range)({
            end: t
          });
          var i = this.calculatePaddingLeft(n, r, t, a),
              u = n - i,
              o = n + (a - i);
          return (0, e.range)({
            start: u,
            end: o
          });
        }
      }, {
        key: "nbPagesDisplayed",
        value: function value(e, t) {
          return Math.min(2 * e + 1, t);
        }
      }, {
        key: "calculatePaddingLeft",
        value: function value(e, t, n, r) {
          return e <= t ? e : e >= n - t ? r - (n - e) : t;
        }
      }, {
        key: "isLastPage",
        value: function value() {
          return this.currentPage === this.total - 1 || 0 === this.total;
        }
      }, {
        key: "isFirstPage",
        value: function value() {
          return 0 === this.currentPage;
        }
      }]), n;
    }(),
        u = i;

    exports.default = u;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "VDmj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils"),
        t = r(require("./Paginator"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? n(Object(r), !0).forEach(function (t) {
          i(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function i(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var c = (0, e.createDocumentationMessageGenerator)({
      name: "pagination",
      connector: !0
    }),
        o = function o(r) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(r, c()), function (e) {
        var i = e || {},
            c = i.totalPages,
            o = i.padding,
            s = void 0 === o ? 3 : o,
            u = new t.default({
          currentPage: 0,
          total: 0,
          padding: s
        }),
            g = {};
        return {
          $$type: "ais.pagination",
          init: function init(e) {
            var t = e.instantSearchInstance;
            r(a({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !0);
          },
          render: function render(e) {
            var t = e.instantSearchInstance;
            r(a({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !1);
          },
          dispose: function dispose(e) {
            var t = e.state;
            return n(), t.setQueryParameter("page", void 0);
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var r = t.searchParameters.page || 0;
            return r ? a({}, e, {
              page: r + 1
            }) : e;
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
            var r = t.uiState,
                n = r.page ? r.page - 1 : 0;
            return e.setQueryParameter("page", n);
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var r = t.results,
                n = t.helper,
                a = t.createURL;
            g.refine || (g.refine = function (e) {
              n.setPage(e), n.search();
            }), g.createURL || (g.createURL = function (e) {
              return function (t) {
                return a(e.setPage(t));
              };
            });

            var i = n.state,
                o = i.page || 0,
                s = function (e) {
              var t = e.nbPages;
              return void 0 !== c ? Math.min(c, t) : t;
            }(r || {
              nbPages: 0
            });

            return u.currentPage = o, u.total = s, {
              createURL: g.createURL(i),
              refine: g.refine,
              currentRefinement: o,
              nbHits: (null == r ? void 0 : r.nbHits) || 0,
              nbPages: s,
              pages: r ? u.pages() : [],
              isFirstPage: u.isFirstPage(),
              isLastPage: u.isLastPage(),
              widgetParams: e
            };
          },
          getRenderState: function getRenderState(e, t) {
            return a({}, e, {
              pagination: this.getWidgetRenderState(t)
            });
          }
        };
      };
    },
        s = o;

    exports.default = s;
  }, {
    "../../lib/utils": "Xobp",
    "./Paginator": "sgIW"
  }],
  "v92J": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = g;

    var e = require("preact"),
        t = o(require("classnames")),
        a = o(require("../../components/Pagination/Pagination")),
        n = o(require("../../connectors/pagination/connectPagination")),
        r = require("../../lib/utils"),
        i = require("../../lib/suit");

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(e, t) {
      var a = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, n);
      }

      return a;
    }

    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(a), !0).forEach(function (t) {
          l(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }

      return e;
    }

    function l(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }

    var c = (0, r.createDocumentationMessageGenerator)({
      name: "pagination"
    }),
        u = (0, i.component)("Pagination"),
        m = {
      previous: "‹",
      next: "›",
      first: "«",
      last: "»"
    },
        f = function f(t) {
      var n = t.containerNode,
          r = t.cssClasses,
          i = t.templates,
          o = t.totalPages,
          s = t.showFirst,
          d = t.showLast,
          l = t.showPrevious,
          c = t.showNext,
          u = t.scrollToNode;
      return function (t, m) {
        var f = t.createURL,
            g = t.currentRefinement,
            P = t.nbHits,
            p = t.nbPages,
            b = t.pages,
            v = t.isFirstPage,
            N = t.isLastPage,
            w = t.refine;

        if (!m) {
          (0, e.render)((0, e.h)(a.default, {
            createURL: f,
            cssClasses: r,
            currentPage: g,
            templates: i,
            nbHits: P,
            nbPages: p,
            pages: b,
            totalPages: o,
            isFirstPage: v,
            isLastPage: N,
            setCurrentPage: function setCurrentPage(e) {
              w(e), !1 !== u && u.scrollIntoView();
            },
            showFirst: s,
            showLast: d,
            showPrevious: l,
            showNext: c
          }), n);
        }
      };
    };

    function g() {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = a.container,
          o = a.templates,
          s = void 0 === o ? {} : o,
          l = a.cssClasses,
          g = void 0 === l ? {} : l,
          P = a.totalPages,
          p = a.padding,
          b = a.showFirst,
          v = void 0 === b || b,
          N = a.showLast,
          w = void 0 === N || N,
          h = a.showPrevious,
          O = void 0 === h || h,
          y = a.showNext,
          I = void 0 === y || y,
          j = a.scrollTo,
          x = void 0 === j ? "body" : j;
      if (!i) throw new Error(c("The `container` option is required."));
      var L = (0, r.getContainerNode)(i),
          R = !0 === x ? "body" : x,
          q = !1 !== R && (0, r.getContainerNode)(R),
          C = {
        root: (0, t.default)(u(), g.root),
        noRefinementRoot: (0, t.default)(u({
          modifierName: "noRefinement"
        }), g.noRefinementRoot),
        list: (0, t.default)(u({
          descendantName: "list"
        }), g.list),
        item: (0, t.default)(u({
          descendantName: "item"
        }), g.item),
        firstPageItem: (0, t.default)(u({
          descendantName: "item",
          modifierName: "firstPage"
        }), g.firstPageItem),
        lastPageItem: (0, t.default)(u({
          descendantName: "item",
          modifierName: "lastPage"
        }), g.lastPageItem),
        previousPageItem: (0, t.default)(u({
          descendantName: "item",
          modifierName: "previousPage"
        }), g.previousPageItem),
        nextPageItem: (0, t.default)(u({
          descendantName: "item",
          modifierName: "nextPage"
        }), g.nextPageItem),
        pageItem: (0, t.default)(u({
          descendantName: "item",
          modifierName: "page"
        }), g.pageItem),
        selectedItem: (0, t.default)(u({
          descendantName: "item",
          modifierName: "selected"
        }), g.selectedItem),
        disabledItem: (0, t.default)(u({
          descendantName: "item",
          modifierName: "disabled"
        }), g.disabledItem),
        link: (0, t.default)(u({
          descendantName: "link"
        }), g.link)
      },
          F = d({}, m, {}, s),
          D = f({
        containerNode: L,
        cssClasses: C,
        templates: F,
        showFirst: v,
        showLast: w,
        showPrevious: O,
        showNext: I,
        padding: p,
        scrollToNode: q
      });
      return (0, n.default)(D, function () {
        return (0, e.render)(null, L);
      })({
        totalPages: P,
        padding: p
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/Pagination/Pagination": "yq9X",
    "../../connectors/pagination/connectPagination": "VDmj",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "dTNi": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = r(require("classnames")),
        n = r(require("../Template/Template"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function a() {
      return (a = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function u(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function i(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    function l(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }

    function s(e, t) {
      return !t || "object" !== o(t) && "function" != typeof t ? c(e) : t;
    }

    function p(e) {
      return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function c(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function f(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && m(e, t);
    }

    function m(e, t) {
      return (m = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function b(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var y = function (r) {
      function o(e) {
        var t;
        return u(this, o), b(c(t = s(this, p(o).call(this, e))), "onInput", function (e) {
          return function (n) {
            t.setState(b({}, e, n.currentTarget.value));
          };
        }), b(c(t), "onSubmit", function (e) {
          e.preventDefault(), t.props.refine([t.state.min && Number(t.state.min), t.state.max && Number(t.state.max)]);
        }), t.state = {
          min: e.values.min,
          max: e.values.max
        }, t;
      }

      return f(o, e.Component), l(o, [{
        key: "componentWillReceiveProps",
        value: function value(e) {
          this.setState({
            min: e.values.min,
            max: e.values.max
          });
        }
      }, {
        key: "render",
        value: function value() {
          var r = this.state,
              o = r.min,
              u = r.max,
              i = this.props,
              l = i.min,
              s = i.max,
              p = i.step,
              c = i.cssClasses,
              f = i.templateProps,
              m = l >= s,
              y = Boolean(o || u),
              h = (0, t.default)(c.root, b({}, c.noRefinement, !y));
          return (0, e.h)("div", {
            className: h
          }, (0, e.h)("form", {
            className: c.form,
            onSubmit: this.onSubmit
          }, (0, e.h)("label", {
            className: c.label
          }, (0, e.h)("input", {
            className: (0, t.default)(c.input, c.inputMin),
            type: "number",
            min: l,
            max: s,
            step: p,
            value: null != o ? o : "",
            onInput: this.onInput("min"),
            placeholder: l,
            disabled: m
          })), (0, e.h)(n.default, a({}, f, {
            templateKey: "separatorText",
            rootTagName: "span",
            rootProps: {
              className: c.separator
            }
          })), (0, e.h)("label", {
            className: c.label
          }, (0, e.h)("input", {
            className: (0, t.default)(c.input, c.inputMax),
            type: "number",
            min: l,
            max: s,
            step: p,
            value: null != u ? u : "",
            onInput: this.onInput("max"),
            placeholder: s,
            disabled: m
          })), (0, e.h)(n.default, a({}, f, {
            templateKey: "submitText",
            rootTagName: "button",
            rootProps: {
              type: "submit",
              className: c.submit,
              disabled: m
            }
          }))));
        }
      }]), o;
    }(),
        h = y;

    exports.default = h;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../Template/Template": "wp6U"
  }],
  "S4JR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = m;

    var e = require("../../lib/utils");

    function t(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function n(e) {
      for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? t(Object(i), !0).forEach(function (t) {
          r(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }

      return e;
    }

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function i(e, t) {
      return u(e) || o(e, t) || a();
    }

    function a() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function o(e, t) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var n = [],
            r = !0,
            i = !1,
            a = void 0;

        try {
          for (var o, u = e[Symbol.iterator](); !(r = (o = u.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0) {
            ;
          }
        } catch (c) {
          i = !0, a = c;
        } finally {
          try {
            r || null == u.return || u.return();
          } finally {
            if (i) throw a;
          }
        }

        return n;
      }
    }

    function u(e) {
      if (Array.isArray(e)) return e;
    }

    var c = (0, e.createDocumentationMessageGenerator)({
      name: "range-input",
      connector: !0
    }, {
      name: "range-slider",
      connector: !0
    }),
        s = "ais.range";

    function m(t) {
      var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(t, c()), function () {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            u = o.attribute,
            m = o.min,
            f = o.max,
            d = o.precision,
            g = void 0 === d ? 0 : d,
            l = (0, e.isFiniteNumber)(m),
            v = (0, e.isFiniteNumber)(f);
        if (!u) throw new Error(c("The `attribute` option is required."));
        if (l && v && m > f) throw new Error(c("The `max` option can't be lower than `min`."));

        var h = function h(e) {
          return Number(Number(e).toFixed(g));
        },
            p = {
          from: function from(e) {
            return e;
          },
          to: function to(e) {
            return h(e).toLocaleString();
          }
        },
            b = function b(t, n, r, a) {
          var o,
              c,
              s = t.state,
              d = n.min,
              g = n.max,
              p = i(s.getNumericRefinement(u, ">=") || [], 1)[0],
              b = i(s.getNumericRefinement(u, "<=") || [], 1)[0],
              y = void 0 === r || "" === r,
              N = void 0 === a || "" === a,
              R = y ? void 0 : parseFloat(r),
              F = N ? void 0 : parseFloat(a);
          c = v || g !== F ? v && N ? f : F : void 0;
          var O = void 0 === (o = l || d !== R ? l && y ? m : R : void 0),
              S = (0, e.isFiniteNumber)(o),
              j = (0, e.isFiniteNumber)(d),
              w = O || S && (!j || j && d <= o),
              P = void 0 === c,
              x = (0, e.isFiniteNumber)(c),
              I = (0, e.isFiniteNumber)(g);
          return (p !== o || b !== c) && w && (P || x && (!I || I && g >= c)) ? (s = s.removeNumericRefinement(u), S && (s = s.addNumericRefinement(u, ">=", h(o))), x && (s = s.addNumericRefinement(u, "<=", h(c))), s) : null;
        },
            y = function y(t, n, r) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Filter Applied",
              a = (0, e.convertNumericRefinementsToFilters)(t, u);
          a && a.length > 0 && n.sendEventToInsights({
            insightsMethod: "clickedFilters",
            widgetType: s,
            eventType: "click",
            payload: {
              eventName: i,
              index: r.getIndex(),
              filters: a
            }
          });
        },
            N = function N(e, t, n) {
          return function () {
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) {
              a[o] = arguments[o];
            }

            if (1 !== a.length) {
              var u = a[0],
                  c = a[1],
                  s = a[2];

              if ("click" === u) {
                var m = i(c, 2),
                    f = m[0],
                    d = m[1],
                    g = b(t, n, f, d);
                y(g, e, t, s);
              }
            } else e.sendEventToInsights(a[0]);
          };
        };

        return {
          $$type: s,
          _getCurrentRange: function _getCurrentRange(t) {
            var n,
                r,
                i = Math.pow(10, g);
            return n = l ? m : (0, e.isFiniteNumber)(t.min) ? t.min : 0, r = v ? f : (0, e.isFiniteNumber)(t.max) ? t.max : 0, {
              min: Math.floor(n * i) / i,
              max: Math.ceil(r * i) / i
            };
          },
          _getCurrentRefinement: function _getCurrentRefinement(t) {
            var n = i(t.getNumericRefinement(u, ">=") || [], 1)[0],
                r = i(t.getNumericRefinement(u, "<=") || [], 1)[0];
            return [(0, e.isFiniteNumber)(n) ? n : -1 / 0, (0, e.isFiniteNumber)(r) ? r : 1 / 0];
          },
          _refine: function _refine(e, t, n) {
            return function () {
              var r = i(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], 2),
                  a = r[0],
                  o = r[1],
                  u = b(t, n, a, o);
              u && (y(u, e, t), t.setState(u).search());
            };
          },
          init: function init(e) {
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: e.instantSearchInstance
            }), !0);
          },
          render: function render(e) {
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: e.instantSearchInstance
            }), !1);
          },
          getRenderState: function getRenderState(e, t) {
            return n({}, e, {
              range: n({}, e.range, r({}, u, this.getWidgetRenderState(t)))
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var r = t.results,
                i = t.helper,
                a = t.instantSearchInstance,
                c = r && r.disjunctiveFacets || [],
                s = (0, e.find)(c, function (e) {
              return e.name === u;
            }),
                m = s && s.stats || {},
                f = this._getCurrentRange(m),
                d = this._getCurrentRefinement(i);

            return {
              refine: r ? this._refine(a, i, f) : this._refine(a, i, {}),
              format: p,
              range: f,
              sendEvent: N(a, i, f),
              widgetParams: n({}, o, {
                precision: g
              }),
              start: d
            };
          },
          dispose: function dispose(e) {
            var t = e.state;
            a();
            var i = t.removeDisjunctiveFacet(u);
            return i.numericRefinements = n({}, t.numericRefinements, r({}, u, void 0)), i;
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var i = t.searchParameters.getNumericRefinements(u),
                a = i[">="],
                o = void 0 === a ? [] : a,
                c = i["<="],
                s = void 0 === c ? [] : c;
            return 0 === o.length && 0 === s.length ? e : n({}, e, {
              range: n({}, e.range, r({}, u, "".concat(o, ":").concat(s)))
            });
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(t, a) {
            var o = a.uiState,
                c = t.addDisjunctiveFacet(u).setQueryParameters({
              numericRefinements: n({}, t.numericRefinements, r({}, u, {}))
            });
            l && (c = c.addNumericRefinement(u, ">=", m)), v && (c = c.addNumericRefinement(u, "<=", f));
            var s = o.range && o.range[u];
            if (!s || -1 === s.indexOf(":")) return c;
            var d = i(s.split(":").map(parseFloat), 2),
                g = d[0],
                h = d[1];
            return (0, e.isFiniteNumber)(g) && (c = c.addNumericRefinement(u, ">=", g)), (0, e.isFiniteNumber)(h) && (c = c.addNumericRefinement(u, "<=", h)), c;
          }
        };
      };
    }
  }, {
    "../../lib/utils": "Xobp"
  }],
  "q2aQ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = v;

    var e = require("preact"),
        t = o(require("classnames")),
        r = o(require("../../components/RangeInput/RangeInput")),
        n = o(require("../../connectors/range/connectRange")),
        a = require("../../lib/utils"),
        i = require("../../lib/suit");

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function u(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(r), !0).forEach(function (t) {
          c(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function c(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function l(e, t) {
      return m(e) || f(e, t) || p();
    }

    function p() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function f(e, t) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var r = [],
            n = !0,
            a = !1,
            i = void 0;

        try {
          for (var o, u = e[Symbol.iterator](); !(n = (o = u.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0) {
            ;
          }
        } catch (s) {
          a = !0, i = s;
        } finally {
          try {
            n || null == u.return || u.return();
          } finally {
            if (a) throw i;
          }
        }

        return r;
      }
    }

    function m(e) {
      if (Array.isArray(e)) return e;
    }

    var d = (0, a.createDocumentationMessageGenerator)({
      name: "range-input"
    }),
        b = (0, i.component)("RangeInput"),
        g = function g(t) {
      var n = t.containerNode,
          i = t.cssClasses,
          o = t.renderState,
          u = t.templates;
      return function (t, s) {
        var c = t.refine,
            p = t.range,
            f = t.start,
            m = t.widgetParams,
            d = t.instantSearchInstance;
        if (s) o.templateProps = (0, a.prepareTemplateProps)({
          templatesConfig: d.templatesConfig,
          templates: u
        });else {
          var b = p.min,
              g = p.max,
              v = l(f, 2),
              y = v[0],
              O = v[1],
              j = 1 / Math.pow(10, m.precision),
              h = {
            min: y !== -1 / 0 && y !== b ? y : void 0,
            max: O !== 1 / 0 && O !== g ? O : void 0
          };
          (0, e.render)((0, e.h)(r.default, {
            min: b,
            max: g,
            step: j,
            values: h,
            cssClasses: i,
            refine: c,
            templateProps: o.templateProps
          }), n);
        }
      };
    };

    function v() {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = r.container,
          o = r.attribute,
          u = r.min,
          c = r.max,
          l = r.precision,
          p = void 0 === l ? 0 : l,
          f = r.cssClasses,
          m = void 0 === f ? {} : f,
          v = r.templates,
          y = void 0 === v ? {} : v;
      if (!i) throw new Error(d("The `container` option is required."));
      var O = (0, a.getContainerNode)(i),
          j = s({
        separatorText: "to",
        submitText: "Go"
      }, y),
          h = {
        root: (0, t.default)(b(), m.root),
        noRefinement: (0, t.default)(b({
          modifierName: "noRefinement"
        })),
        form: (0, t.default)(b({
          descendantName: "form"
        }), m.form),
        label: (0, t.default)(b({
          descendantName: "label"
        }), m.label),
        input: (0, t.default)(b({
          descendantName: "input"
        }), m.input),
        inputMin: (0, t.default)(b({
          descendantName: "input",
          modifierName: "min"
        }), m.inputMin),
        inputMax: (0, t.default)(b({
          descendantName: "input",
          modifierName: "max"
        }), m.inputMax),
        separator: (0, t.default)(b({
          descendantName: "separator"
        }), m.separator),
        submit: (0, t.default)(b({
          descendantName: "submit"
        }), m.submit)
      },
          P = g({
        containerNode: O,
        cssClasses: h,
        templates: j,
        renderState: {}
      });
      return s({}, (0, n.default)(P, function () {
        return (0, e.render)(null, O);
      })({
        attribute: o,
        min: u,
        max: c,
        precision: p
      }), {
        $$type: "ais.rangeInput"
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/RangeInput/RangeInput": "dTNi",
    "../../connectors/range/connectRange": "S4JR",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "SYjE": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("../../lib/utils");

    function t(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function r(e) {
      for (var r = 1; r < arguments.length; r++) {
        var a = null != arguments[r] ? arguments[r] : {};
        r % 2 ? t(Object(a), !0).forEach(function (t) {
          n(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }

      return e;
    }

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var a = (0, e.createDocumentationMessageGenerator)({
      name: "search-box",
      connector: !0
    });

    function i(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(t, a()), function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = e.queryHook;

        var i = function i() {};

        function c() {
          i();
        }

        return {
          $$type: "ais.searchBox",
          init: function init(e) {
            var n = e.instantSearchInstance;
            t(r({}, this.getWidgetRenderState(e), {
              instantSearchInstance: n
            }), !0);
          },
          render: function render(e) {
            var n = e.instantSearchInstance;
            t(r({}, this.getWidgetRenderState(e), {
              instantSearchInstance: n
            }), !1);
          },
          dispose: function dispose(e) {
            var t = e.state;
            return n(), t.setQueryParameter("query", void 0);
          },
          getRenderState: function getRenderState(e, t) {
            return r({}, e, {
              searchBox: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var r = t.helper,
                n = t.searchMetadata;

            if (!this._refine) {
              var u = function u(e) {
                e !== r.state.query && r.setQuery(e).search();
              };

              this._refine = function (e) {
                a ? a(e, u) : u(e);
              };
            }

            return i = function (e) {
              return function () {
                e.setQuery("").search();
              };
            }(r), {
              query: r.state.query || "",
              refine: this._refine,
              clear: c,
              widgetParams: e,
              isSearchStalled: n.isSearchStalled
            };
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var n = t.searchParameters.query || "";
            return "" === n || e && e.query === n ? e : r({}, e, {
              query: n
            });
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
            var r = t.uiState;
            return e.setQueryParameter("query", r.query || "");
          }
        };
      };
    }
  }, {
    "../../lib/utils": "Xobp"
  }],
  "WF81": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = h;

    var e = require("preact"),
        t = c(require("classnames")),
        r = require("../../lib/utils"),
        o = require("../../lib/suit"),
        n = c(require("../../connectors/search-box/connectSearchBox")),
        a = c(require("../../components/SearchBox/SearchBox")),
        s = c(require("./defaultTemplates"));

    function c(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function i(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, o);
      }

      return r;
    }

    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? i(Object(r), !0).forEach(function (t) {
          d(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function d(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var l = (0, r.createDocumentationMessageGenerator)({
      name: "search-box"
    }),
        f = (0, o.component)("SearchBox"),
        p = function p(t) {
      var r = t.containerNode,
          o = t.cssClasses,
          n = t.placeholder,
          s = t.templates,
          c = t.autofocus,
          i = t.searchAsYouType,
          u = t.showReset,
          d = t.showSubmit,
          l = t.showLoadingIndicator;
      return function (t) {
        var f = t.refine,
            p = t.query,
            h = t.isSearchStalled;
        (0, e.render)((0, e.h)(a.default, {
          query: p,
          placeholder: n,
          autofocus: c,
          refine: f,
          searchAsYouType: i,
          templates: s,
          showSubmit: d,
          showReset: u,
          showLoadingIndicator: l,
          isSearchStalled: h,
          cssClasses: o
        }), r);
      };
    };

    function h() {
      var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = o.container,
          c = o.placeholder,
          i = void 0 === c ? "" : c,
          d = o.cssClasses,
          h = void 0 === d ? {} : d,
          m = o.autofocus,
          b = void 0 !== m && m,
          g = o.searchAsYouType,
          w = void 0 === g || g,
          y = o.showReset,
          v = void 0 === y || y,
          O = o.showSubmit,
          I = void 0 === O || O,
          S = o.showLoadingIndicator,
          j = void 0 === S || S,
          q = o.queryHook,
          N = o.templates;
      if (!a) throw new Error(l("The `container` option is required."));
      var P = (0, r.getContainerNode)(a),
          x = {
        root: (0, t.default)(f(), h.root),
        form: (0, t.default)(f({
          descendantName: "form"
        }), h.form),
        input: (0, t.default)(f({
          descendantName: "input"
        }), h.input),
        submit: (0, t.default)(f({
          descendantName: "submit"
        }), h.submit),
        submitIcon: (0, t.default)(f({
          descendantName: "submitIcon"
        }), h.submitIcon),
        reset: (0, t.default)(f({
          descendantName: "reset"
        }), h.reset),
        resetIcon: (0, t.default)(f({
          descendantName: "resetIcon"
        }), h.resetIcon),
        loadingIndicator: (0, t.default)(f({
          descendantName: "loadingIndicator"
        }), h.loadingIndicator),
        loadingIcon: (0, t.default)(f({
          descendantName: "loadingIcon"
        }), h.loadingIcon)
      },
          T = p({
        containerNode: P,
        cssClasses: x,
        placeholder: i,
        templates: u({}, s.default, {}, N),
        autofocus: b,
        searchAsYouType: w,
        showReset: v,
        showSubmit: I,
        showLoadingIndicator: j
      });
      return (0, n.default)(T, function () {
        return (0, e.render)(null, P);
      })({
        queryHook: q
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB",
    "../../connectors/search-box/connectSearchBox": "SYjE",
    "../../components/SearchBox/SearchBox": "qymH",
    "./defaultTemplates": "f5Yh"
  }],
  "VQsb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact");

    function t(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function n(e) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      })(e);
    }

    function i() {
      return (i = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var i in n) {
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function s(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    }

    function r(e, t) {
      return !t || "object" !== n(t) && "function" != typeof t ? l(e) : t;
    }

    function l(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }

    function u(e) {
      return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function d(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && h(e, t);
    }

    function h(e, t) {
      return (h = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    var c = {
      DOWN: 40,
      END: 35,
      ESC: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      RIGHT: 39,
      UP: 38
    },
        p = 0,
        v = 100;

    function f(e, t, n) {
      return (e - t) / (n - t) * 100;
    }

    function g(e, t, n) {
      var i = e / 100;
      return 0 === e ? t : 100 === e ? n : Math.round((n - t) * i + t);
    }

    function m(e) {
      return ["rheostat", "vertical" === e.orientation ? "rheostat-vertical" : "rheostat-horizontal"].concat(e.className.split(" ")).join(" ");
    }

    function S(e) {
      return Number(e.currentTarget.getAttribute("data-handle-key"));
    }

    function y(e) {
      e.stopPropagation(), e.preventDefault();
    }

    var b = function (t) {
      function n() {
        return o(this, n), r(this, u(n).apply(this, arguments));
      }

      return d(n, e.Component), s(n, [{
        key: "render",
        value: function value() {
          return (0, e.h)("button", i({}, this.props, {
            type: "button"
          }));
        }
      }]), n;
    }(),
        P = (0, e.h)("div", {
      className: "rheostat-background"
    }),
        x = function (n) {
      function i(e) {
        var n;
        return o(this, i), t(l(n = r(this, u(i).call(this, e))), "state", {
          className: m(n.props),
          handlePos: n.props.values.map(function (e) {
            return f(e, n.props.min, n.props.max);
          }),
          handleDimensions: 0,
          mousePos: null,
          sliderBox: {},
          slidingIndex: null,
          values: n.props.values
        }), n.getPublicState = n.getPublicState.bind(l(n)), n.getSliderBoundingBox = n.getSliderBoundingBox.bind(l(n)), n.getProgressStyle = n.getProgressStyle.bind(l(n)), n.getMinValue = n.getMinValue.bind(l(n)), n.getMaxValue = n.getMaxValue.bind(l(n)), n.getHandleDimensions = n.getHandleDimensions.bind(l(n)), n.getClosestSnapPoint = n.getClosestSnapPoint.bind(l(n)), n.getSnapPosition = n.getSnapPosition.bind(l(n)), n.getNextPositionForKey = n.getNextPositionForKey.bind(l(n)), n.getNextState = n.getNextState.bind(l(n)), n.handleClick = n.handleClick.bind(l(n)), n.getClosestHandle = n.getClosestHandle.bind(l(n)), n.setStartSlide = n.setStartSlide.bind(l(n)), n.startMouseSlide = n.startMouseSlide.bind(l(n)), n.startTouchSlide = n.startTouchSlide.bind(l(n)), n.handleMouseSlide = n.handleMouseSlide.bind(l(n)), n.handleTouchSlide = n.handleTouchSlide.bind(l(n)), n.handleSlide = n.handleSlide.bind(l(n)), n.endSlide = n.endSlide.bind(l(n)), n.handleKeydown = n.handleKeydown.bind(l(n)), n.validatePosition = n.validatePosition.bind(l(n)), n.validateValues = n.validateValues.bind(l(n)), n.canMove = n.canMove.bind(l(n)), n.fireChangeEvent = n.fireChangeEvent.bind(l(n)), n.slideTo = n.slideTo.bind(l(n)), n.updateNewValues = n.updateNewValues.bind(l(n)), n;
      }

      return d(i, e.Component), s(i, [{
        key: "componentWillReceiveProps",
        value: function value(e) {
          var t = this.props,
              n = t.className,
              i = t.disabled,
              o = t.min,
              a = t.max,
              s = t.orientation,
              r = this.state,
              l = r.values,
              u = r.slidingIndex,
              d = e.min !== o || e.max !== a,
              h = l.length !== e.values.length || l.some(function (t, n) {
            return e.values[n] !== t;
          }),
              c = e.className !== n || e.orientation !== s,
              p = e.disabled && !i;
          c && this.setState({
            className: m(e)
          }), (d || h) && this.updateNewValues(e), p && null !== u && this.endSlide();
        }
      }, {
        key: "getPublicState",
        value: function value() {
          var e = this.props,
              t = e.min;
          return {
            max: e.max,
            min: t,
            values: this.state.values
          };
        }
      }, {
        key: "getSliderBoundingBox",
        value: function value() {
          var e = this.rheostat.getDOMNode ? this.rheostat.getDOMNode() : this.rheostat,
              t = e.getBoundingClientRect();
          return {
            height: t.height || e.clientHeight,
            left: t.left,
            top: t.top,
            width: t.width || e.clientWidth
          };
        }
      }, {
        key: "getProgressStyle",
        value: function value(e) {
          var t = this.state.handlePos,
              n = t[e];
          if (0 === e) return "vertical" === this.props.orientation ? {
            height: "".concat(n, "%"),
            top: 0
          } : {
            left: 0,
            width: "".concat(n, "%")
          };
          var i = t[e - 1],
              o = n - i;
          return "vertical" === this.props.orientation ? {
            height: "".concat(o, "%"),
            top: "".concat(i, "%")
          } : {
            left: "".concat(i, "%"),
            width: "".concat(o, "%")
          };
        }
      }, {
        key: "getMinValue",
        value: function value(e) {
          return this.state.values[e - 1] ? Math.max(this.props.min, this.state.values[e - 1]) : this.props.min;
        }
      }, {
        key: "getMaxValue",
        value: function value(e) {
          return this.state.values[e + 1] ? Math.min(this.props.max, this.state.values[e + 1]) : this.props.max;
        }
      }, {
        key: "getHandleDimensions",
        value: function value(e, t) {
          var n = e.currentTarget || null;
          return n ? "vertical" === this.props.orientation ? n.clientHeight / t.height * v / 2 : n.clientWidth / t.width * v / 2 : 0;
        }
      }, {
        key: "getClosestSnapPoint",
        value: function value(e) {
          return this.props.snapPoints.length ? this.props.snapPoints.reduce(function (t, n) {
            return Math.abs(t - e) < Math.abs(n - e) ? t : n;
          }) : e;
        }
      }, {
        key: "getSnapPosition",
        value: function value(e) {
          if (!this.props.snap) return e;
          var t = this.props,
              n = t.max,
              i = t.min,
              o = g(e, i, n);
          return f(this.getClosestSnapPoint(o), i, n);
        }
      }, {
        key: "getNextPositionForKey",
        value: function value(e, n) {
          var i,
              o = this.state,
              a = o.handlePos,
              s = o.values,
              r = this.props,
              l = r.max,
              u = r.min,
              d = r.snapPoints,
              h = this.props.snap,
              g = s[e],
              m = a[e],
              S = m,
              y = 1;
          l >= 100 ? m = Math.round(m) : y = 100 / (l - u);
          var b = null;
          h && (b = d.indexOf(this.getClosestSnapPoint(s[e])));
          var P = (t(i = {}, c.LEFT, function (e) {
            return -1 * e;
          }), t(i, c.RIGHT, function (e) {
            return e;
          }), t(i, c.UP, function (e) {
            return e;
          }), t(i, c.DOWN, function (e) {
            return -1 * e;
          }), t(i, c.PAGE_DOWN, function (e) {
            return e > 1 ? -e : -10 * e;
          }), t(i, c.PAGE_UP, function (e) {
            return e > 1 ? e : 10 * e;
          }), i);
          if (Object.prototype.hasOwnProperty.call(P, n)) m += P[n](y), h && (m > S ? b < d.length - 1 && (g = d[b + 1]) : b > 0 && (g = d[b - 1]));else if (n === c.HOME) m = p, h && (g = d[0]);else {
            if (n !== c.END) return null;
            m = v, h && (g = d[d.length - 1]);
          }
          return h ? f(g, u, l) : m;
        }
      }, {
        key: "getNextState",
        value: function value(e, t) {
          var n = this.state.handlePos,
              i = this.props,
              o = i.max,
              a = i.min,
              s = this.validatePosition(e, t),
              r = n.map(function (t, n) {
            return n === e ? s : t;
          });
          return {
            handlePos: r,
            values: r.map(function (e) {
              return g(e, a, o);
            })
          };
        }
      }, {
        key: "getClosestHandle",
        value: function value(e) {
          var t = this.state.handlePos;
          return t.reduce(function (n, i, o) {
            return Math.abs(t[o] - e) < Math.abs(t[n] - e) ? o : n;
          }, 0);
        }
      }, {
        key: "setStartSlide",
        value: function value(e, t, n) {
          var i = this.getSliderBoundingBox();
          this.setState({
            handleDimensions: this.getHandleDimensions(e, i),
            mousePos: {
              x: t,
              y: n
            },
            sliderBox: i,
            slidingIndex: S(e)
          });
        }
      }, {
        key: "startMouseSlide",
        value: function value(e) {
          this.setStartSlide(e, e.clientX, e.clientY), "function" == typeof document.addEventListener ? (document.addEventListener("mousemove", this.handleMouseSlide, !1), document.addEventListener("mouseup", this.endSlide, !1)) : (document.attachEvent("onmousemove", this.handleMouseSlide), document.attachEvent("onmouseup", this.endSlide)), y(e);
        }
      }, {
        key: "startTouchSlide",
        value: function value(e) {
          if (!(e.changedTouches.length > 1)) {
            var t = e.changedTouches[0];
            this.setStartSlide(e, t.clientX, t.clientY), document.addEventListener("touchmove", this.handleTouchSlide, !1), document.addEventListener("touchend", this.endSlide, !1), this.props.onSliderDragStart && this.props.onSliderDragStart(), y(e);
          }
        }
      }, {
        key: "handleMouseSlide",
        value: function value(e) {
          null !== this.state.slidingIndex && (this.handleSlide(e.clientX, e.clientY), y(e));
        }
      }, {
        key: "handleTouchSlide",
        value: function value(e) {
          if (null !== this.state.slidingIndex) if (e.changedTouches.length > 1) this.endSlide();else {
            var t = e.changedTouches[0];
            this.handleSlide(t.clientX, t.clientY), y(e);
          }
        }
      }, {
        key: "handleSlide",
        value: function value(e, t) {
          var n = this.state,
              i = n.slidingIndex,
              o = n.sliderBox,
              a = "vertical" === this.props.orientation ? (t - o.top) / o.height * v : (e - o.left) / o.width * v;
          this.slideTo(i, a), this.canMove(i, a) && (this.setState({
            x: e,
            y: t
          }), this.props.onSliderDragMove && this.props.onSliderDragMove());
        }
      }, {
        key: "endSlide",
        value: function value() {
          var e = this,
              t = this.state.slidingIndex;

          if (this.setState({
            slidingIndex: null
          }), "function" == typeof document.removeEventListener ? (document.removeEventListener("mouseup", this.endSlide, !1), document.removeEventListener("touchend", this.endSlide, !1), document.removeEventListener("touchmove", this.handleTouchSlide, !1), document.removeEventListener("mousemove", this.handleMouseSlide, !1)) : (document.detachEvent("onmousemove", this.handleMouseSlide), document.detachEvent("onmouseup", this.endSlide)), this.props.onSliderDragEnd && this.props.onSliderDragEnd(), this.props.snap) {
            var n = this.getSnapPosition(this.state.handlePos[t]);
            this.slideTo(t, n, function () {
              return e.fireChangeEvent();
            });
          } else this.fireChangeEvent();
        }
      }, {
        key: "handleClick",
        value: function value(e) {
          var t = this;

          if (!e.target.getAttribute("data-handle-key")) {
            var n = this.getSliderBoundingBox(),
                i = ("vertical" === this.props.orientation ? (e.clientY - n.top) / n.height : (e.clientX - n.left) / n.width) * v,
                o = this.getClosestHandle(i),
                a = this.getSnapPosition(i);
            this.slideTo(o, a, function () {
              return t.fireChangeEvent();
            }), this.props.onClick && this.props.onClick();
          }
        }
      }, {
        key: "handleKeydown",
        value: function value(e) {
          var t = this,
              n = S(e);

          if (e.keyCode !== c.ESC) {
            var i = this.getNextPositionForKey(n, e.keyCode);
            null !== i && (this.canMove(n, i) && (this.slideTo(n, i, function () {
              return t.fireChangeEvent();
            }), this.props.onKeyPress && this.props.onKeyPress()), y(e));
          } else e.currentTarget.blur();
        }
      }, {
        key: "validatePosition",
        value: function value(e, t) {
          var n = this.state,
              i = n.handlePos,
              o = n.handleDimensions;
          return Math.max(Math.min(t, void 0 !== i[e + 1] ? i[e + 1] - o : v), void 0 !== i[e - 1] ? i[e - 1] + o : p);
        }
      }, {
        key: "validateValues",
        value: function value(e, t) {
          var n = t || this.props,
              i = n.max,
              o = n.min;
          return e.map(function (e, t, n) {
            var a = Math.max(Math.min(e, i), o);
            return n.length && a < n[t - 1] ? n[t - 1] : a;
          });
        }
      }, {
        key: "canMove",
        value: function value(e, t) {
          var n = this.state,
              i = n.handlePos,
              o = n.handleDimensions;
          return !(t < p) && !(t > v) && !(t > (void 0 !== i[e + 1] ? i[e + 1] - o : 1 / 0)) && !(t < (void 0 !== i[e - 1] ? i[e - 1] + o : -1 / 0));
        }
      }, {
        key: "fireChangeEvent",
        value: function value() {
          var e = this.props.onChange;
          e && e(this.getPublicState());
        }
      }, {
        key: "slideTo",
        value: function value(e, t, n) {
          var i = this,
              o = this.getNextState(e, t);
          this.setState(o, function () {
            var e = i.props.onValuesUpdated;
            e && e(i.getPublicState()), n && n();
          });
        }
      }, {
        key: "updateNewValues",
        value: function value(e) {
          var t = this;

          if (null === this.state.slidingIndex) {
            var n = e.max,
                i = e.min,
                o = e.values,
                a = this.validateValues(o, e);
            this.setState({
              handlePos: a.map(function (e) {
                return f(e, i, n);
              }),
              values: a
            }, function () {
              return t.fireChangeEvent();
            });
          }
        }
      }, {
        key: "render",
        value: function value() {
          var t = this,
              n = this.props,
              i = n.children,
              o = n.disabled,
              a = n.handle,
              s = n.max,
              r = n.min,
              l = n.orientation,
              u = n.pitComponent,
              d = n.pitPoints,
              h = n.progressBar,
              c = this.state,
              p = c.className,
              v = c.handlePos,
              g = c.values;
          return (0, e.h)("div", {
            className: p,
            ref: function ref(e) {
              t.rheostat = e;
            },
            onClick: !o && this.handleClick,
            style: {
              position: "relative"
            }
          }, P, v.map(function (n, i) {
            var s = "vertical" === l ? {
              top: "".concat(n, "%"),
              position: "absolute"
            } : {
              left: "".concat(n, "%"),
              position: "absolute"
            };
            return (0, e.h)(a, {
              "aria-valuemax": t.getMaxValue(i),
              "aria-valuemin": t.getMinValue(i),
              "aria-valuenow": g[i],
              "aria-disabled": o,
              "data-handle-key": i,
              className: "rheostat-handle",
              key: "handle-".concat(i),
              onClick: t.killEvent,
              onKeyDown: !o && t.handleKeydown,
              onMouseDown: !o && t.startMouseSlide,
              onTouchStart: !o && t.startTouchSlide,
              role: "slider",
              style: s,
              tabIndex: 0
            });
          }), v.map(function (n, i, o) {
            return 0 === i && o.length > 1 ? null : (0, e.h)(h, {
              className: "rheostat-progress",
              key: "progress-bar-".concat(i),
              style: t.getProgressStyle(i)
            });
          }), u && d.map(function (t) {
            var n = f(t, r, s),
                i = "vertical" === l ? {
              top: "".concat(n, "%"),
              position: "absolute"
            } : {
              left: "".concat(n, "%"),
              position: "absolute"
            };
            return (0, e.h)(u, {
              key: "pit-".concat(t),
              style: i
            }, t);
          }), i);
        }
      }]), i;
    }();

    t(x, "defaultProps", {
      className: "",
      children: null,
      disabled: !1,
      handle: b,
      max: v,
      min: p,
      onClick: null,
      onChange: null,
      onKeyPress: null,
      onSliderDragEnd: null,
      onSliderDragMove: null,
      onSliderDragStart: null,
      onValuesUpdated: null,
      orientation: "horizontal",
      pitComponent: null,
      pitPoints: [],
      progressBar: "div",
      snap: !1,
      snapPoints: [],
      values: [p]
    });
    var k = x;
    exports.default = k;
  }, {
    "preact": "u8ui"
  }],
  "rt8W": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        r = t(require("classnames"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e, r) {
      var t = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
      }

      return t;
    }

    function a(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? n(Object(t), !0).forEach(function (r) {
          o(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }

      return e;
    }

    function o(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }

    var c = function c(t) {
      var n = t.style,
          o = t.children,
          c = Math.round(parseFloat(n.left)),
          s = [0, 50, 100].includes(c),
          u = Array.isArray(o) ? o[0] : o,
          i = Math.round(100 * parseInt(u, 10)) / 100;
      return (0, e.h)("div", {
        style: a({}, n, {
          marginLeft: 100 === c ? "-2px" : 0
        }),
        className: (0, r.default)("rheostat-marker", "rheostat-marker-horizontal", {
          "rheostat-marker-large": s
        })
      }, s && (0, e.h)("div", {
        className: "rheostat-value"
      }, i));
    },
        s = c;

    exports.default = s;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI"
  }],
  "RYVe": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var t = require("preact"),
        e = a(require("./Rheostat")),
        n = a(require("classnames")),
        r = require("../../lib/utils"),
        o = a(require("./Pit"));

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function u(t) {
      return c(t) || l(t) || s();
    }

    function s() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function l(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    }

    function c(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }

        return n;
      }
    }

    function p() {
      return (p = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    function f(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function h(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    function m(t, e, n) {
      return e && h(t.prototype, e), n && h(t, n), t;
    }

    function d(t, e) {
      return !e || "object" !== i(e) && "function" != typeof e ? b(t) : e;
    }

    function y(t) {
      return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function b(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function v(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && g(t, e);
    }

    function g(t, e) {
      return (g = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function O(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    var P = function (a) {
      function i() {
        var e, r;
        f(this, i);

        for (var o = arguments.length, a = new Array(o), u = 0; u < o; u++) {
          a[u] = arguments[u];
        }

        return O(b(r = d(this, (e = y(i)).call.apply(e, [this].concat(a)))), "handleChange", function (t) {
          var e = t.values;
          r.isDisabled || r.props.refine(e);
        }), O(b(r), "createHandleComponent", function (e) {
          return function (r) {
            var o = Math.round(100 * parseFloat(r["aria-valuenow"])) / 100,
                a = e && e.format ? e.format(o) : o,
                i = (0, n.default)(r.className, {
              "rheostat-handle-lower": 0 === r["data-handle-key"],
              "rheostat-handle-upper": 1 === r["data-handle-key"]
            });
            return (0, t.h)("div", p({}, r, {
              className: i
            }), e && (0, t.h)("div", {
              className: "rheostat-tooltip"
            }, a));
          };
        }), r;
      }

      return v(i, t.Component), m(i, [{
        key: "computeDefaultPitPoints",
        value: function value(t) {
          var e = t.min,
              n = t.max,
              o = (n - e) / 34;
          return [e].concat(u((0, r.range)({
            end: 33
          }).map(function (t) {
            return e + o * (t + 1);
          })), [n]);
        }
      }, {
        key: "computeSnapPoints",
        value: function value(t) {
          var e = t.min,
              n = t.max,
              o = t.step;
          if (o) return [].concat(u((0, r.range)({
            start: e,
            end: n,
            step: o
          })), [n]);
        }
      }, {
        key: "render",
        value: function value() {
          var r = this.props,
              a = r.tooltips,
              i = r.step,
              u = r.pips,
              s = r.values,
              l = r.cssClasses,
              c = this.isDisabled ? {
            min: this.props.min,
            max: this.props.max + .001
          } : this.props,
              p = c.min,
              f = c.max,
              h = this.computeSnapPoints({
            min: p,
            max: f,
            step: i
          }),
              m = !1 === u ? [] : this.computeDefaultPitPoints({
            min: p,
            max: f
          });
          return (0, t.h)("div", {
            className: (0, n.default)(l.root, O({}, l.disabledRoot, this.isDisabled))
          }, (0, t.h)(e.default, {
            handle: this.createHandleComponent(a),
            onChange: this.handleChange,
            min: p,
            max: f,
            pitComponent: o.default,
            pitPoints: m,
            snap: !0,
            snapPoints: h,
            values: this.isDisabled ? [p, f] : s,
            disabled: this.isDisabled
          }));
        }
      }, {
        key: "isDisabled",
        get: function get() {
          return this.props.min >= this.props.max;
        }
      }]), i;
    }(),
        w = P;

    exports.default = w;
  }, {
    "preact": "u8ui",
    "./Rheostat": "VQsb",
    "classnames": "G1XI",
    "../../lib/utils": "Xobp",
    "./Pit": "rt8W"
  }],
  "fD7z": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = m;

    var e = require("preact"),
        r = a(require("classnames")),
        t = a(require("../../components/Slider/Slider")),
        n = a(require("../../connectors/range/connectRange")),
        i = require("../../lib/utils"),
        o = require("../../lib/suit");

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function s(e, r) {
      var t = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
      }

      return t;
    }

    function c(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? s(Object(t), !0).forEach(function (r) {
          u(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }

      return e;
    }

    function u(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }

    function l(e, r) {
      return d(e) || f(e, r) || p();
    }

    function p() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function f(e, r) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var t = [],
            n = !0,
            i = !1,
            o = void 0;

        try {
          for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); n = !0) {
            ;
          }
        } catch (c) {
          i = !0, o = c;
        } finally {
          try {
            n || null == s.return || s.return();
          } finally {
            if (i) throw o;
          }
        }

        return t;
      }
    }

    function d(e) {
      if (Array.isArray(e)) return e;
    }

    var b = (0, i.createDocumentationMessageGenerator)({
      name: "range-slider"
    }),
        v = (0, o.component)("RangeSlider"),
        y = function y(r) {
      var n = r.containerNode,
          i = r.cssClasses,
          o = r.pips,
          a = r.step,
          s = r.tooltips;
      return function (r, c) {
        var u = r.refine,
            p = r.range,
            f = r.start;

        if (!c) {
          var d = p.min,
              b = p.max,
              v = l(f, 2),
              y = v[0],
              m = v[1],
              O = y === -1 / 0 ? d : y,
              g = m === 1 / 0 ? b : m,
              j = [O > b ? b : O, g < d ? d : g];
          (0, e.render)((0, e.h)(t.default, {
            cssClasses: i,
            refine: u,
            min: d,
            max: b,
            values: j,
            tooltips: s,
            step: a,
            pips: o
          }), n);
        }
      };
    };

    function m() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          o = t.container,
          a = t.attribute,
          s = t.min,
          u = t.max,
          l = t.cssClasses,
          p = void 0 === l ? {} : l,
          f = t.step,
          d = t.pips,
          m = void 0 === d || d,
          O = t.precision,
          g = void 0 === O ? 0 : O,
          j = t.tooltips,
          h = void 0 === j || j;
      if (!o) throw new Error(b("The `container` option is required."));
      var w = (0, i.getContainerNode)(o),
          P = {
        root: (0, r.default)(v(), p.root),
        disabledRoot: (0, r.default)(v({
          modifierName: "disabled"
        }), p.disabledRoot)
      },
          S = y({
        containerNode: w,
        step: f,
        pips: m,
        tooltips: h,
        renderState: {},
        cssClasses: P
      });
      return c({}, (0, n.default)(S, function () {
        return (0, e.render)(null, w);
      })({
        attribute: a,
        min: s,
        max: u,
        precision: g
      }), {
        $$type: "ais.rangeSlider"
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/Slider/Slider": "RYVe",
    "../../connectors/range/connectRange": "S4JR",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "YwJ0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = a;

    var e = require("../../lib/utils");

    function t(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function n(e) {
      for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? t(Object(i), !0).forEach(function (t) {
          r(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }

      return e;
    }

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var i = (0, e.createDocumentationMessageGenerator)({
      name: "sort-by",
      connector: !0
    });

    function a(t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(t, i()), function () {
        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            s = a.items,
            o = a.transformItems,
            c = void 0 === o ? function (e) {
          return e;
        } : o;
        if (!Array.isArray(s)) throw new Error(i("The `items` option expects an array of objects."));
        return {
          $$type: "ais.sortBy",
          init: function init(r) {
            var i = r.instantSearchInstance,
                a = this.getWidgetRenderState(r),
                o = a.currentRefinement;
            (0, e.find)(s, function (e) {
              return e.value === o;
            });
            t(n({}, a, {
              instantSearchInstance: i
            }), !0);
          },
          render: function render(e) {
            var r = e.instantSearchInstance;
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !1);
          },
          dispose: function dispose(e) {
            var t = e.state;
            return r(), t.setIndex(this.initialIndex);
          },
          getRenderState: function getRenderState(e, t) {
            return n({}, e, {
              sortBy: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(e) {
            var t = e.results,
                n = e.helper,
                r = e.parent;
            return this.initialIndex || (this.initialIndex = r.getIndexName()), this.setIndex || (this.setIndex = function (e) {
              n.setIndex(e).search();
            }), {
              currentRefinement: n.state.index,
              options: c(s),
              refine: this.setIndex,
              hasNoResults: !t || 0 === t.nbHits,
              widgetParams: a
            };
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var r = t.searchParameters.index;
            return r === this.initialIndex ? e : n({}, e, {
              sortBy: r
            });
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
            var n = t.uiState;
            return e.setQueryParameter("index", n.sortBy || this.initialIndex || e.index);
          }
        };
      };
    }
  }, {
    "../../lib/utils": "Xobp"
  }],
  "k1WJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("preact"),
        t = a(require("classnames")),
        r = a(require("../../components/Selector/Selector")),
        n = a(require("../../connectors/sort-by/connectSortBy")),
        o = require("../../lib/utils"),
        s = require("../../lib/suit");

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = (0, o.createDocumentationMessageGenerator)({
      name: "sort-by"
    }),
        c = (0, s.component)("SortBy"),
        u = function u(t) {
      var n = t.containerNode,
          o = t.cssClasses;
      return function (t, s) {
        var a = t.currentRefinement,
            i = t.options,
            c = t.refine;
        s || (0, e.render)((0, e.h)("div", {
          className: o.root
        }, (0, e.h)(r.default, {
          cssClasses: o,
          currentValue: a,
          options: i,
          setValue: c
        })), n);
      };
    };

    function l() {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          s = r.container,
          a = r.items,
          l = r.cssClasses,
          d = void 0 === l ? {} : l,
          f = r.transformItems;
      if (!s) throw new Error(i("The `container` option is required."));
      var m = (0, o.getContainerNode)(s),
          p = {
        root: (0, t.default)(c(), d.root),
        select: (0, t.default)(c({
          descendantName: "select"
        }), d.select),
        option: (0, t.default)(c({
          descendantName: "option"
        }), d.option)
      },
          v = u({
        containerNode: m,
        cssClasses: p
      });
      return (0, n.default)(v, function () {
        return (0, e.render)(null, m);
      })({
        items: a,
        transformItems: f
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/Selector/Selector": "PowV",
    "../../connectors/sort-by/connectSortBy": "YwJ0",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "WCBU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = g;

    var e = require("../../lib/utils");

    function t(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function n(e) {
      for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? t(Object(i), !0).forEach(function (t) {
          r(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }

      return e;
    }

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function i(e) {
      return u(e) || c(e) || a();
    }

    function a() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function c(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function u(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }

        return n;
      }
    }

    var o = (0, e.createDocumentationMessageGenerator)({
      name: "rating-menu",
      connector: !0
    }),
        s = "ais.ratingMenu",
        f = function f(e) {
      var t = e.instantSearchInstance,
          n = e.helper,
          r = e.getRefinedStar,
          i = e.attribute;
      return function () {
        for (var e = arguments.length, a = new Array(e), c = 0; c < e; c++) {
          a[c] = arguments[c];
        }

        if (1 !== a.length) {
          var u = a[0],
              o = a[1],
              f = a[2],
              g = void 0 === f ? "Filter Applied" : f;
          if ("click" === u) r() === Number(o) || t.sendEventToInsights({
            insightsMethod: "clickedFilters",
            widgetType: s,
            eventType: u,
            payload: {
              eventName: g,
              index: n.getIndex(),
              filters: ["".concat(i, ">=").concat(o)]
            }
          });
        } else t.sendEventToInsights(a[0]);
      };
    };

    function g(t) {
      var a = this,
          c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(t, o()), function () {
        var u,
            g = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            d = g.attribute,
            v = g.max,
            l = void 0 === v ? 5 : v;
        if (!d) throw new Error(o("The `attribute` option is required."));

        var h = function h(e) {
          var t = e.getDisjunctiveRefinements(d);
          if (t.length) return Math.min.apply(Math, i(t.map(Number)));
        },
            p = function p(e) {
          return function (e, t) {
            u("click", t);
            var n = h(e.state) === Number(t);
            if (e.removeDisjunctiveFacetRefinement(d), !n) for (var r = Number(t); r <= l; ++r) {
              e.addDisjunctiveFacetRefinement(d, r);
            }
            e.search();
          }.bind(a, e);
        },
            m = function m(e) {
          var t = e.state,
              n = e.createURL;
          return function (e) {
            return n(t.toggleRefinement(d, e));
          };
        };

        return {
          $$type: s,
          init: function init(e) {
            var r = e.instantSearchInstance;
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !0);
          },
          render: function render(e) {
            var r = e.instantSearchInstance;
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !1);
          },
          getRenderState: function getRenderState(e, t) {
            return n({}, e, {
              ratingMenu: n({}, e.ratingMenu, r({}, d, this.getWidgetRenderState(t)))
            });
          },
          getWidgetRenderState: function getWidgetRenderState(e) {
            var t = e.helper,
                n = e.results,
                r = e.state,
                i = e.instantSearchInstance,
                a = e.createURL,
                c = [];

            if (u || (u = f({
              instantSearchInstance: i,
              helper: t,
              getRefinedStar: function getRefinedStar() {
                return h(t.state);
              },
              attribute: d
            })), n) {
              for (var o = {}, s = l; s >= 0; --s) {
                o[s] = 0;
              }

              (n.getFacetValues(d) || []).forEach(function (e) {
                var t = Math.round(e.name);
                if (t && !(t > l)) for (var n = t; n >= 1; --n) {
                  o[n] += e.count;
                }
              });

              for (var v = h(r), b = l - 1; b >= 1; --b) {
                var y = o[b];

                if (!v || b === v || 0 !== y) {
                  for (var j = [], S = 1; S <= l; ++S) {
                    j.push(S <= b);
                  }

                  c.push({
                    stars: j,
                    name: String(b),
                    value: String(b),
                    count: y,
                    isRefined: v === b
                  });
                }
              }
            }

            return {
              items: c,
              hasNoResults: !n || 0 === n.nbHits,
              refine: p(t),
              sendEvent: u,
              createURL: m({
                state: r,
                createURL: a
              }),
              widgetParams: g
            };
          },
          dispose: function dispose(e) {
            var t = e.state;
            return c(), t.removeDisjunctiveFacet(d);
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var i = t.searchParameters,
                a = h(i);
            return "number" != typeof a ? e : n({}, e, {
              ratingMenu: n({}, e.ratingMenu, r({}, d, a))
            });
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(t, i) {
            var a = i.uiState,
                c = a.ratingMenu && a.ratingMenu[d],
                u = t.clearRefinements(d).addDisjunctiveFacet(d);
            return c ? (0, e.range)({
              start: Number(c),
              end: l + 1
            }).reduce(function (e, t) {
              return e.addDisjunctiveFacetRefinement(d, t);
            }, u) : u.setQueryParameters({
              disjunctiveFacetsRefinements: n({}, u.disjunctiveFacetsRefinements, r({}, d, []))
            });
          }
        };
      };
    }
  }, {
    "../../lib/utils": "Xobp"
  }],
  "znAI": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var s = {
      item: '{{#count}}<a class="{{cssClasses.link}}" aria-label="{{value}} & up" href="{{href}}">{{/count}}{{^count}}<div class="{{cssClasses.link}}" aria-label="{{value}} & up" disabled>{{/count}}\n  {{#stars}}<svg class="{{cssClasses.starIcon}} {{#.}}{{cssClasses.fullStarIcon}}{{/.}}{{^.}}{{cssClasses.emptyStarIcon}}{{/.}}" aria-hidden="true" width="24" height="24">\n    {{#.}}<use xlink:href="#ais-RatingMenu-starSymbol"></use>{{/.}}{{^.}}<use xlink:href="#ais-RatingMenu-starEmptySymbol"></use>{{/.}}\n  </svg>{{/stars}}\n  <span class="{{cssClasses.label}}">& Up</span>\n  {{#count}}<span class="{{cssClasses.count}}">{{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}}</span>{{/count}}\n{{#count}}</a>{{/count}}{{^count}}</div>{{/count}}'
    };
    exports.default = s;
  }, {}],
  "ZoNk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var e = require("preact"),
        t = i(require("classnames")),
        a = i(require("../../components/RefinementList/RefinementList")),
        n = i(require("../../connectors/rating-menu/connectRatingMenu")),
        r = i(require("./defaultTemplates")),
        s = require("../../lib/utils"),
        l = require("../../lib/suit");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var o = (0, s.createDocumentationMessageGenerator)({
      name: "rating-menu"
    }),
        d = (0, l.component)("RatingMenu"),
        m = (0, e.h)("path", {
      d: "M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"
    }),
        u = (0, e.h)("path", {
      d: "M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"
    }),
        c = function c(t) {
      var n = t.containerNode,
          l = t.cssClasses,
          i = t.templates,
          o = t.renderState;
      return function (t, c) {
        var f = t.refine,
            p = t.items,
            N = t.createURL,
            h = t.instantSearchInstance;
        c ? o.templateProps = (0, s.prepareTemplateProps)({
          defaultTemplates: r.default,
          templatesConfig: h.templatesConfig,
          templates: i
        }) : (0, e.render)((0, e.h)(a.default, {
          createURL: N,
          cssClasses: l,
          facetValues: p,
          templateProps: o.templateProps,
          toggleRefinement: f
        }, (0, e.h)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: "display:none;"
        }, (0, e.h)("symbol", {
          id: d({
            descendantName: "starSymbol"
          }),
          viewBox: "0 0 24 24"
        }, m), (0, e.h)("symbol", {
          id: d({
            descendantName: "starEmptySymbol"
          }),
          viewBox: "0 0 24 24"
        }, u))), n);
      };
    };

    function f() {
      var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          l = a.container,
          i = a.attribute,
          m = a.max,
          u = void 0 === m ? 5 : m,
          f = a.cssClasses,
          p = void 0 === f ? {} : f,
          N = a.templates,
          h = void 0 === N ? r.default : N;
      if (!l) throw new Error(o("The `container` option is required."));
      var b = (0, s.getContainerNode)(l),
          v = {
        root: (0, t.default)(d(), p.root),
        noRefinementRoot: (0, t.default)(d({
          modifierName: "noRefinement"
        }), p.noRefinementRoot),
        list: (0, t.default)(d({
          descendantName: "list"
        }), p.list),
        item: (0, t.default)(d({
          descendantName: "item"
        }), p.item),
        selectedItem: (0, t.default)(d({
          descendantName: "item",
          modifierName: "selected"
        }), p.selectedItem),
        disabledItem: (0, t.default)(d({
          descendantName: "item",
          modifierName: "disabled"
        }), p.disabledItem),
        link: (0, t.default)(d({
          descendantName: "link"
        }), p.link),
        starIcon: (0, t.default)(d({
          descendantName: "starIcon"
        }), p.starIcon),
        fullStarIcon: (0, t.default)(d({
          descendantName: "starIcon",
          modifierName: "full"
        }), p.fullStarIcon),
        emptyStarIcon: (0, t.default)(d({
          descendantName: "starIcon",
          modifierName: "empty"
        }), p.emptyStarIcon),
        label: (0, t.default)(d({
          descendantName: "label"
        }), p.label),
        count: (0, t.default)(d({
          descendantName: "count"
        }), p.count)
      },
          g = c({
        containerNode: b,
        cssClasses: v,
        renderState: {},
        templates: h
      });
      return (0, n.default)(g, function () {
        return (0, e.render)(null, b);
      })({
        attribute: i,
        max: u
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/RefinementList/RefinementList": "Em1r",
    "../../connectors/rating-menu/connectRatingMenu": "WCBU",
    "./defaultTemplates": "znAI",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "OR6y": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = s(require("../Template/Template"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a() {
      return (a = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = arguments[t];

          for (var a in s) {
            Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    var r = function r(s) {
      var r = s.nbHits,
          o = s.hitsPerPage,
          n = s.nbPages,
          u = s.page,
          l = s.processingTimeMS,
          i = s.query,
          p = s.templateProps,
          c = s.cssClasses;
      return (0, e.h)("div", {
        className: c.root
      }, (0, e.h)(t.default, a({}, p, {
        templateKey: "text",
        rootTagName: "span",
        rootProps: {
          className: c.text
        },
        data: {
          hasManyResults: r > 1,
          hasNoResults: 0 === r,
          hasOneResult: 1 === r,
          hitsPerPage: o,
          nbHits: r,
          nbPages: n,
          page: u,
          processingTimeMS: l,
          query: i,
          cssClasses: c
        }
      })));
    },
        o = r;

    exports.default = o;
  }, {
    "preact": "u8ui",
    "../Template/Template": "wp6U"
  }],
  "n4Nb": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = i;

    var e = require("../../lib/utils");

    function t(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function r(e) {
      for (var r = 1; r < arguments.length; r++) {
        var a = null != arguments[r] ? arguments[r] : {};
        r % 2 ? t(Object(a), !0).forEach(function (t) {
          n(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }

      return e;
    }

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var a = (0, e.createDocumentationMessageGenerator)({
      name: "stats",
      connector: !0
    });

    function i(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(t, a()), function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
          $$type: "ais.stats",
          init: function init(e) {
            var n = e.instantSearchInstance;
            t(r({}, this.getWidgetRenderState(e), {
              instantSearchInstance: n
            }), !0);
          },
          render: function render(e) {
            var n = e.instantSearchInstance;
            t(r({}, this.getWidgetRenderState(e), {
              instantSearchInstance: n
            }), !1);
          },
          dispose: function dispose() {
            n();
          },
          getRenderState: function getRenderState(e, t) {
            return r({}, e, {
              stats: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var r = t.results,
                n = t.helper;
            return r ? {
              hitsPerPage: r.hitsPerPage,
              nbHits: r.nbHits,
              nbPages: r.nbPages,
              page: r.page,
              processingTimeMS: r.processingTimeMS,
              query: r.query,
              widgetParams: e
            } : {
              hitsPerPage: n.state.hitsPerPage,
              nbHits: 0,
              nbPages: 0,
              page: n.state.page || 0,
              processingTimeMS: -1,
              query: n.state.query || "",
              widgetParams: e
            };
          }
        };
      };
    }
  }, {
    "../../lib/utils": "Xobp"
  }],
  "HB7h": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      text: "{{#hasNoResults}}No results{{/hasNoResults}}\n    {{#hasOneResult}}1 result{{/hasOneResult}}\n    {{#hasManyResults}}{{#helpers.formatNumber}}{{nbHits}}{{/helpers.formatNumber}} results{{/hasManyResults}} found in {{processingTimeMS}}ms"
    };
    exports.default = e;
  }, {}],
  "pdcm": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = p;

    var e = require("preact"),
        t = i(require("classnames")),
        r = i(require("../../components/Stats/Stats")),
        s = i(require("../../connectors/stats/connectStats")),
        a = i(require("./defaultTemplates")),
        n = require("../../lib/utils"),
        o = require("../../lib/suit");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var u = (0, n.createDocumentationMessageGenerator)({
      name: "stats"
    }),
        l = (0, o.component)("Stats"),
        c = function c(t) {
      var s = t.containerNode,
          o = t.cssClasses,
          i = t.renderState,
          u = t.templates;
      return function (t, l) {
        var c = t.hitsPerPage,
            p = t.nbHits,
            d = t.nbPages,
            m = t.page,
            f = t.processingTimeMS,
            g = t.query,
            P = t.instantSearchInstance;
        l ? i.templateProps = (0, n.prepareTemplateProps)({
          defaultTemplates: a.default,
          templatesConfig: P.templatesConfig,
          templates: u
        }) : (0, e.render)((0, e.h)(r.default, {
          cssClasses: o,
          hitsPerPage: c,
          nbHits: p,
          nbPages: d,
          page: m,
          processingTimeMS: f,
          query: g,
          templateProps: i.templateProps
        }), s);
      };
    };

    function p() {
      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          o = r.container,
          i = r.cssClasses,
          p = void 0 === i ? {} : i,
          d = r.templates,
          m = void 0 === d ? a.default : d;
      if (!o) throw new Error(u("The `container` option is required."));
      var f = (0, n.getContainerNode)(o),
          g = {
        root: (0, t.default)(l(), p.root),
        text: (0, t.default)(l({
          descendantName: "text"
        }), p.text)
      },
          P = c({
        containerNode: f,
        cssClasses: g,
        renderState: {},
        templates: m
      });
      return (0, s.default)(P, function () {
        return (0, e.render)(null, f);
      })();
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/Stats/Stats": "OR6y",
    "../../connectors/stats/connectStats": "n4Nb",
    "./defaultTemplates": "HB7h",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "Lmnf": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = r(require("../Template/Template"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a() {
      return (a = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];

          for (var a in r) {
            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    var n = function n(r) {
      var n = r.currentRefinement,
          l = r.refine,
          o = r.cssClasses,
          s = r.templateProps;
      return (0, e.h)("div", {
        className: o.root
      }, (0, e.h)("label", {
        className: o.label
      }, (0, e.h)("input", {
        className: o.checkbox,
        type: "checkbox",
        checked: n.isRefined,
        onChange: function onChange(e) {
          return l(!e.target.checked);
        }
      }), (0, e.h)(t.default, a({}, s, {
        rootTagName: "span",
        rootProps: {
          className: o.labelText
        },
        templateKey: "labelText",
        data: n
      }))));
    },
        l = n;

    exports.default = l;
  }, {
    "preact": "u8ui",
    "../Template/Template": "wp6U"
  }],
  "eIhw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = o;

    var e = require("../../lib/utils");

    function t(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function n(e) {
      for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? t(Object(i), !0).forEach(function (t) {
          r(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }

      return e;
    }

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var i = (0, e.createDocumentationMessageGenerator)({
      name: "toggle-refinement",
      connector: !0
    }),
        c = "ais.toggleRefinement",
        a = function a(e) {
      var t = e.instantSearchInstance,
          n = e.attribute,
          r = e.on,
          i = e.helper;
      return function () {
        for (var e = arguments.length, a = new Array(e), o = 0; o < e; o++) {
          a[o] = arguments[o];
        }

        if (1 !== a.length) {
          var u = a[0],
              f = a[1],
              s = a[2],
              d = void 0 === s ? "Filter Applied" : s;
          "click" === u && void 0 !== r && (f || t.sendEventToInsights({
            insightsMethod: "clickedFilters",
            widgetType: c,
            eventType: u,
            payload: {
              eventName: d,
              index: i.getIndex(),
              filters: r.map(function (e) {
                return "".concat(n, ":").concat(JSON.stringify(e));
              })
            }
          }));
        } else t.sendEventToInsights(a[0]);
      };
    };

    function o(t) {
      var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(t, i()), function () {
        var u = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            f = u.attribute,
            s = u.on,
            d = void 0 === s || s,
            v = u.off;
        if (!f) throw new Error(i("The `attribute` option is required."));

        var l,
            g = void 0 !== v,
            h = void 0 !== d ? (0, e.toArray)(d).map(e.escapeRefinement) : void 0,
            m = g ? (0, e.toArray)(v).map(e.escapeRefinement) : void 0,
            p = function p(e) {
          return function () {
            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).isRefined;
            t ? (h.forEach(function (t) {
              return e.removeDisjunctiveFacetRefinement(f, t);
            }), g && m.forEach(function (t) {
              return e.addDisjunctiveFacetRefinement(f, t);
            })) : (l("click", t), g && m.forEach(function (t) {
              return e.removeDisjunctiveFacetRefinement(f, t);
            }), h.forEach(function (t) {
              return e.addDisjunctiveFacetRefinement(f, t);
            })), e.search();
          };
        },
            R = function R(e, t) {
          var n = t.state,
              r = t.createURL;
          return function () {
            var t = e ? h : m;
            t && t.forEach(function (e) {
              n.removeDisjunctiveFacetRefinement(f, e);
            });
            var i = e ? m : h;
            return i && i.forEach(function (e) {
              n.addDisjunctiveFacetRefinement(f, e);
            }), r(n);
          };
        };

        return {
          $$type: c,
          init: function init(e) {
            var r = e.instantSearchInstance;
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !0);
          },
          render: function render(e) {
            var r = e.instantSearchInstance;
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !1);
          },
          dispose: function dispose(e) {
            var t = e.state;
            return o(), t.removeDisjunctiveFacet(f);
          },
          getRenderState: function getRenderState(e, t) {
            return n({}, e, {
              toggleRefinement: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var n = t.state,
                r = t.helper,
                i = t.results,
                c = t.createURL,
                o = t.instantSearchInstance,
                s = i ? null == h ? void 0 : h.every(function (e) {
              return r.state.isDisjunctiveFacetRefined(f, e);
            }) : null == h ? void 0 : h.every(function (e) {
              return n.isDisjunctiveFacetRefined(f, e);
            }),
                d = {
              isRefined: s,
              count: 0
            },
                v = {
              isRefined: g && !s,
              count: 0
            };

            if (i) {
              var j = (0, e.toArray)(m || !1),
                  y = i.getFacetValues(f) || [],
                  b = null == h ? void 0 : h.map(function (t) {
                return (0, e.find)(y, function (n) {
                  return n.name === (0, e.unescapeRefinement)(t);
                });
              }).filter(function (e) {
                return void 0 !== e;
              }),
                  F = g ? j.map(function (t) {
                return (0, e.find)(y, function (n) {
                  return n.name === (0, e.unescapeRefinement)(t);
                });
              }).filter(function (e) {
                return void 0 !== e;
              }) : [];
              d = {
                isRefined: !!b.length && b.every(function (e) {
                  return e.isRefined;
                }),
                count: b.reduce(function (e, t) {
                  return e + t.count;
                }, 0) || null
              }, v = {
                isRefined: !!F.length && F.every(function (e) {
                  return e.isRefined;
                }),
                count: F.reduce(function (e, t) {
                  return e + t.count;
                }, 0) || y.reduce(function (e, t) {
                  return e + t.count;
                }, 0)
              };
            } else g && !s && (m && m.forEach(function (e) {
              return r.addDisjunctiveFacetRefinement(f, e);
            }), r.setPage(r.state.page));

            return l || (l = a({
              instantSearchInstance: o,
              attribute: f,
              on: h,
              helper: r
            })), {
              value: {
                name: f,
                isRefined: s,
                count: i ? (s ? v : d).count : null,
                onFacetValue: d,
                offFacetValue: v
              },
              state: n,
              createURL: R(s, {
                state: n,
                createURL: c
              }),
              sendEvent: l,
              refine: p(r),
              widgetParams: u
            };
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var i = t.searchParameters,
                c = h && h.every(function (e) {
              return i.isDisjunctiveFacetRefined(f, e);
            });
            return c ? n({}, e, {
              toggle: n({}, e.toggle, r({}, f, c))
            }) : e;
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
            var i = t.uiState,
                c = e.clearRefinements(f).addDisjunctiveFacet(f);
            return Boolean(i.toggle && i.toggle[f]) ? (h && h.forEach(function (e) {
              c = c.addDisjunctiveFacetRefinement(f, e);
            }), c) : g ? (m && m.forEach(function (e) {
              c = c.addDisjunctiveFacetRefinement(f, e);
            }), c) : c.setQueryParameters({
              disjunctiveFacetsRefinements: n({}, e.disjunctiveFacetsRefinements, r({}, f, []))
            });
          }
        };
      };
    }
  }, {
    "../../lib/utils": "Xobp"
  }],
  "xE0T": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      labelText: "{{name}}"
    };
    exports.default = e;
  }, {}],
  "gTar": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = f;

    var e = require("preact"),
        t = s(require("classnames")),
        n = s(require("../../components/ToggleRefinement/ToggleRefinement")),
        r = s(require("../../connectors/toggle-refinement/connectToggleRefinement")),
        a = s(require("./defaultTemplates")),
        o = require("../../lib/utils"),
        l = require("../../lib/suit");

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = (0, o.createDocumentationMessageGenerator)({
      name: "toggle-refinement"
    }),
        u = (0, l.component)("ToggleRefinement"),
        c = function c(t) {
      var r = t.containerNode,
          l = t.cssClasses,
          s = t.renderState,
          i = t.templates;
      return function (t, u) {
        var c = t.value,
            f = t.createURL,
            d = t.refine,
            m = t.instantSearchInstance;
        u ? s.templateProps = (0, o.prepareTemplateProps)({
          defaultTemplates: a.default,
          templatesConfig: m.templatesConfig,
          templates: i
        }) : (0, e.render)((0, e.h)(n.default, {
          createURL: f,
          cssClasses: l,
          currentRefinement: c,
          templateProps: s.templateProps,
          refine: function refine(e) {
            return d({
              isRefined: e
            });
          }
        }), r);
      };
    };

    function f() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          l = n.container,
          s = n.attribute,
          f = n.cssClasses,
          d = void 0 === f ? {} : f,
          m = n.templates,
          p = void 0 === m ? a.default : m,
          g = n.on,
          b = void 0 === g || g,
          v = n.off;
      if (!l) throw new Error(i("The `container` option is required."));
      var T = (0, o.getContainerNode)(l),
          h = {
        root: (0, t.default)(u(), d.root),
        label: (0, t.default)(u({
          descendantName: "label"
        }), d.label),
        checkbox: (0, t.default)(u({
          descendantName: "checkbox"
        }), d.checkbox),
        labelText: (0, t.default)(u({
          descendantName: "labelText"
        }), d.labelText)
      },
          q = c({
        containerNode: T,
        cssClasses: h,
        renderState: {},
        templates: p
      });
      return (0, r.default)(q, function () {
        return (0, e.render)(null, T);
      })({
        attribute: s,
        on: b,
        off: v
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/ToggleRefinement/ToggleRefinement": "Lmnf",
    "../../connectors/toggle-refinement/connectToggleRefinement": "eIhw",
    "./defaultTemplates": "xE0T",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "YcWU": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function t(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function n(e) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        n % 2 ? t(Object(o), !0).forEach(function (t) {
          r(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }

      return e;
    }

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var o = (0, e.createDocumentationMessageGenerator)({
      name: "analytics"
    }),
        c = function c(e) {
      var t = e || {},
          r = t.pushFunction,
          c = t.delay,
          a = void 0 === c ? 3e3 : c,
          i = t.triggerOnUIInteraction,
          s = void 0 !== i && i,
          u = t.pushInitialSearch,
          f = void 0 === u || u,
          p = t.pushPagination,
          l = void 0 !== p && p;
      if (!r) throw new Error(o("The `pushFunction` option is required."));

      var d,
          v = null,
          h = "",
          O = function O(e) {
        if (null !== e) {
          var t = [],
              o = function (e) {
            var t = [];

            for (var n in e) {
              if (e.hasOwnProperty(n)) {
                var r = e[n].join("+");
                t.push("".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(n), "_").concat(encodeURIComponent(r)));
              }
            }

            return t.join("&");
          }(n({}, e.state.disjunctiveFacetsRefinements, {}, e.state.facetsRefinements, {}, e.state.hierarchicalFacetsRefinements)),
              c = function (e) {
            var t = [];

            for (var n in e) {
              if (e.hasOwnProperty(n)) {
                var r = e[n];
                if (r.hasOwnProperty(">=") && r.hasOwnProperty("<=")) r[">="] && r[">="][0] === r["<="] && r["<="][0] ? t.push("".concat(n, "=").concat(n, "_").concat(r[">="])) : t.push("".concat(n, "=").concat(n, "_").concat(r[">="], "to").concat(r["<="]));else if (r.hasOwnProperty(">=")) t.push("".concat(n, "=").concat(n, "_from").concat(r[">="]));else if (r.hasOwnProperty("<=")) t.push("".concat(n, "=").concat(n, "_to").concat(r["<="]));else if (r.hasOwnProperty("=")) {
                  var o = [];

                  for (var c in r["="]) {
                    r["="].hasOwnProperty(c) && o.push(r["="][c]);
                  }

                  t.push("".concat(n, "=").concat(n, "_").concat(o.join("-")));
                }
              }
            }

            return t.join("&");
          }(e.state.numericRefinements);

          "" !== o && t.push(o), "" !== c && t.push(c);
          var a = t.join("&"),
              i = "Query: ".concat(e.state.query || "", ", ").concat(a);
          !0 === l && (i += ", Page: ".concat(e.state.page || 0)), h !== i && (r(a, e.state, e.results), h = i);
        }
      },
          y = !0;

      !0 === f && (y = !1);

      var w = function w() {
        O(v);
      },
          b = function b() {
        O(v);
      };

      return {
        init: function init() {
          !0 === s && (document.addEventListener("click", w), window.addEventListener("beforeunload", b));
        },
        render: function render(e) {
          var t = e.results,
              n = e.state;
          !0 !== y ? (v = {
            results: t,
            state: n
          }, d && clearTimeout(d), d = window.setTimeout(function () {
            return O(v);
          }, a)) : y = !1;
        },
        dispose: function dispose() {
          !0 === s && (document.removeEventListener("click", w), window.removeEventListener("beforeunload", b));
        },
        getRenderState: function getRenderState(e, t) {
          return n({}, e, {
            analytics: this.getWidgetRenderState(t)
          });
        },
        getWidgetRenderState: function getWidgetRenderState() {
          return {
            widgetParams: e
          };
        }
      };
    },
        a = c;

    exports.default = a;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "gcAO": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = r(require("classnames")),
        a = r(require("../Template/Template"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l() {
      return (l = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];

          for (var r in a) {
            Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function n(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }

    var o = function o(r) {
      var o = r.items,
          s = r.cssClasses,
          i = r.templateProps,
          u = r.createURL,
          c = r.refine;
      return (0, e.h)("div", {
        className: (0, t.default)(s.root, n({}, s.noRefinementRoot, 0 === o.length))
      }, (0, e.h)("ul", {
        className: s.list
      }, (0, e.h)("li", {
        className: (0, t.default)(s.item, n({}, s.selectedItem, 0 === o.length))
      }, (0, e.h)(a.default, l({}, i, {
        templateKey: "home",
        rootTagName: "a",
        rootProps: {
          className: s.link,
          href: u(void 0),
          onClick: function onClick(e) {
            e.preventDefault(), c(void 0);
          }
        }
      }))), o.map(function (r, f) {
        var p = f === o.length - 1;
        return (0, e.h)("li", {
          key: r.label + f,
          className: (0, t.default)(s.item, n({}, s.selectedItem, p))
        }, (0, e.h)(a.default, l({}, i, {
          templateKey: "separator",
          rootTagName: "span",
          rootProps: {
            className: s.separator,
            "aria-hidden": !0
          }
        })), p ? r.label : (0, e.h)("a", {
          className: s.link,
          href: u(r.value),
          onClick: function onClick(e) {
            e.preventDefault(), c(r.value);
          }
        }, r.label));
      })));
    },
        s = o;

    exports.default = s;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../Template/Template": "wp6U"
  }],
  "Wma6": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function t(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function r(e) {
      for (var r = 1; r < arguments.length; r++) {
        var a = null != arguments[r] ? arguments[r] : {};
        r % 2 ? t(Object(a), !0).forEach(function (t) {
          n(e, t, a[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
      }

      return e;
    }

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function a(e, t) {
      return o(e) || c(e, t) || i();
    }

    function i() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function c(e, t) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var r = [],
            n = !0,
            a = !1,
            i = void 0;

        try {
          for (var c, o = e[Symbol.iterator](); !(n = (c = o.next()).done) && (r.push(c.value), !t || r.length !== t); n = !0) {
            ;
          }
        } catch (u) {
          a = !0, i = u;
        } finally {
          try {
            n || null == o.return || o.return();
          } finally {
            if (a) throw i;
          }
        }

        return r;
      }
    }

    function o(e) {
      if (Array.isArray(e)) return e;
    }

    var u = (0, e.createDocumentationMessageGenerator)({
      name: "breadcrumb",
      connector: !0
    }),
        s = function s(t) {
      var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      (0, e.checkRendering)(t, u());
      var c = {};
      return function (e) {
        var o = e || {},
            s = o.attributes,
            d = o.separator,
            g = void 0 === d ? " > " : d,
            b = o.rootPath,
            h = void 0 === b ? null : b,
            p = o.transformItems,
            y = void 0 === p ? function (e) {
          return e;
        } : p;
        if (!s || !Array.isArray(s) || 0 === s.length) throw new Error(u("The `attributes` option expects an array of strings."));
        var v = a(s, 1)[0];
        return {
          $$type: "ais.breadcrumb",
          init: function init(e) {
            t(r({}, this.getWidgetRenderState(e), {
              instantSearchInstance: e.instantSearchInstance
            }), !0);
          },
          render: function render(e) {
            t(r({}, this.getWidgetRenderState(e), {
              instantSearchInstance: e.instantSearchInstance
            }), !1);
          },
          dispose: function dispose() {
            i();
          },
          getRenderState: function getRenderState(e, t) {
            return r({}, e, {
              breadcrumb: r({}, e.breadcrumb, n({}, v, this.getWidgetRenderState(t)))
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var r = t.helper,
                n = t.createURL,
                i = t.results,
                o = t.state;

            var u = function () {
              if (!i) return [];
              var e = a(o.hierarchicalFacets, 1)[0].name,
                  t = i.getFacetValues(e, {}),
                  r = Array.isArray(t.data) ? t.data : [];
              return y(f(l(r)));
            }();

            return c.createURL || (c.createURL = function (e) {
              if (!e) {
                var t = r.getHierarchicalFacetBreadcrumb(v);
                if (t.length > 0) return n(r.state.toggleFacetRefinement(v, t[0]));
              }

              return n(r.state.toggleFacetRefinement(v, e));
            }), c.refine || (c.refine = function (e) {
              if (e) r.toggleRefinement(v, e).search();else {
                var t = r.getHierarchicalFacetBreadcrumb(v);
                t.length > 0 && r.toggleRefinement(v, t[0]).search();
              }
            }), {
              canRefine: u.length > 0,
              createURL: c.createURL,
              items: u,
              refine: c.refine,
              widgetParams: e
            };
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e) {
            if (e.isHierarchicalFacet(v)) {
              e.getHierarchicalFacetByName(v);
              return e;
            }

            return e.addHierarchicalFacet({
              name: v,
              attributes: s,
              separator: g,
              rootPath: h
            });
          }
        };
      };
    };

    function l(e) {
      return e.reduce(function (e, t) {
        return t.isRefined && (e.push({
          label: t.name,
          value: t.path
        }), Array.isArray(t.data) && (e = e.concat(l(t.data)))), e;
      }, []);
    }

    function f(e) {
      return e.map(function (t, r) {
        return {
          label: t.label,
          value: r + 1 === e.length ? null : e[r + 1].value
        };
      });
    }

    var d = s;
    exports.default = d;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "BFSK": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      home: "Home",
      separator: ">"
    };
    exports.default = e;
  }, {}],
  "JBMw": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = i(require("classnames")),
        r = i(require("../../components/Breadcrumb/Breadcrumb")),
        a = i(require("../../connectors/breadcrumb/connectBreadcrumb")),
        n = i(require("./defaultTemplates")),
        s = require("../../lib/utils"),
        o = require("../../lib/suit");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var d = (0, s.createDocumentationMessageGenerator)({
      name: "breadcrumb"
    }),
        l = (0, o.component)("Breadcrumb"),
        u = function u(t) {
      var a = t.containerNode,
          o = t.cssClasses,
          i = t.renderState,
          d = t.templates;
      return function (t, l) {
        var u = t.canRefine,
            m = t.createURL,
            c = t.instantSearchInstance,
            f = t.items,
            p = t.refine;
        l ? i.templateProps = (0, s.prepareTemplateProps)({
          defaultTemplates: n.default,
          templatesConfig: c.templatesConfig,
          templates: d
        }) : (0, e.render)((0, e.h)(r.default, {
          canRefine: u,
          cssClasses: o,
          createURL: m,
          items: f,
          refine: p,
          templateProps: i.templateProps
        }), a);
      };
    },
        m = function m(r) {
      var o = r || {},
          i = o.container,
          m = o.attributes,
          c = o.separator,
          f = o.rootPath,
          p = o.transformItems,
          b = o.templates,
          v = void 0 === b ? n.default : b,
          N = o.cssClasses,
          R = void 0 === N ? {} : N;
      if (!i) throw new Error(d("The `container` option is required."));
      var q = (0, s.getContainerNode)(i),
          C = {
        root: (0, t.default)(l(), R.root),
        noRefinementRoot: (0, t.default)(l({
          modifierName: "noRefinement"
        }), R.noRefinementRoot),
        list: (0, t.default)(l({
          descendantName: "list"
        }), R.list),
        item: (0, t.default)(l({
          descendantName: "item"
        }), R.item),
        selectedItem: (0, t.default)(l({
          descendantName: "item",
          modifierName: "selected"
        }), R.selectedItem),
        separator: (0, t.default)(l({
          descendantName: "separator"
        }), R.separator),
        link: (0, t.default)(l({
          descendantName: "link"
        }), R.link)
      },
          P = u({
        containerNode: q,
        cssClasses: C,
        renderState: {},
        templates: v
      });
      return (0, a.default)(P, function () {
        return (0, e.render)(null, q);
      })({
        attributes: m,
        separator: c,
        rootPath: f,
        transformItems: p
      });
    },
        c = m;

    exports.default = c;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/Breadcrumb/Breadcrumb": "gcAO",
    "../../connectors/breadcrumb/connectBreadcrumb": "Wma6",
    "./defaultTemplates": "BFSK",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "vjZC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = o(require("classnames")),
        a = require("../../lib/utils"),
        r = o(require("../Template/Template"));

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n() {
      return (n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];

          for (var r in a) {
            Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function l(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }

    function u(o) {
      var u = o.cssClasses,
          i = o.templateProps,
          s = o.items,
          p = o.refine,
          c = ((0, a.find)(s, function (e) {
        return e.isRefined;
      }) || {
        value: ""
      }).value;
      return (0, e.h)("div", {
        className: (0, t.default)(u.root, l({}, u.noRefinementRoot, 0 === s.length))
      }, (0, e.h)("select", {
        className: u.select,
        value: c,
        onChange: function onChange(e) {
          p(e.target.value);
        }
      }, (0, e.h)(r.default, n({}, i, {
        templateKey: "defaultOption",
        rootTagName: "option",
        rootProps: {
          value: "",
          className: u.option
        }
      })), s.map(function (t) {
        return (0, e.h)(r.default, n({}, i, {
          templateKey: "item",
          rootTagName: "option",
          rootProps: {
            value: t.value,
            className: u.option
          },
          key: t.value,
          data: t
        }));
      })));
    }

    var i = u;
    exports.default = i;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../lib/utils": "Xobp",
    "../Template/Template": "wp6U"
  }],
  "QAjq": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;
    var e = {
      item: "{{label}} ({{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}})",
      defaultOption: "See all"
    };
    exports.default = e;
  }, {}],
  "SxMP": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = m;

    var e = require("preact"),
        t = i(require("classnames")),
        n = i(require("../../connectors/menu/connectMenu")),
        r = i(require("../../components/MenuSelect/MenuSelect")),
        a = i(require("./defaultTemplates")),
        s = require("../../lib/utils"),
        o = require("../../lib/suit");

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var l = (0, s.createDocumentationMessageGenerator)({
      name: "menu-select"
    }),
        u = (0, o.component)("MenuSelect"),
        c = function c(t) {
      var n = t.containerNode,
          o = t.cssClasses,
          i = t.renderState,
          l = t.templates;
      return function (t, u) {
        var c = t.refine,
            m = t.items,
            d = t.canRefine,
            f = t.instantSearchInstance;
        u ? i.templateProps = (0, s.prepareTemplateProps)({
          defaultTemplates: a.default,
          templatesConfig: f.templatesConfig,
          templates: l
        }) : (0, e.render)((0, e.h)(r.default, {
          cssClasses: o,
          items: m,
          refine: c,
          templateProps: i.templateProps,
          canRefine: d
        }), n);
      };
    };

    function m(r) {
      var o = r.container,
          i = r.attribute,
          m = r.sortBy,
          d = void 0 === m ? ["name:asc"] : m,
          f = r.limit,
          p = void 0 === f ? 10 : f,
          v = r.cssClasses,
          q = void 0 === v ? {} : v,
          C = r.templates,
          M = void 0 === C ? a.default : C,
          R = r.transformItems;
      if (!o) throw new Error(l("The `container` option is required."));
      var N = (0, s.getContainerNode)(o),
          S = {
        root: (0, t.default)(u(), q.root),
        noRefinementRoot: (0, t.default)(u({
          modifierName: "noRefinement"
        }), q.noRefinementRoot),
        select: (0, t.default)(u({
          descendantName: "select"
        }), q.select),
        option: (0, t.default)(u({
          descendantName: "option"
        }), q.option)
      },
          b = c({
        containerNode: N,
        cssClasses: S,
        renderState: {},
        templates: M
      });
      return (0, n.default)(b, function () {
        return (0, e.render)(null, N);
      })({
        attribute: i,
        limit: p,
        sortBy: d,
        transformItems: R
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../connectors/menu/connectMenu": "lOmP",
    "../../components/MenuSelect/MenuSelect": "vjZC",
    "./defaultTemplates": "QAjq",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "z1al": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var a = require("preact"),
        c = (0, a.h)("path", {
      fill: "#5468FF",
      d: "M78.99.94h16.6a2.97 2.97 0 0 1 2.96 2.96v16.6a2.97 2.97 0 0 1-2.97 2.96h-16.6a2.97 2.97 0 0 1-2.96-2.96V3.9A2.96 2.96 0 0 1 79 .94"
    }),
        l = (0, a.h)("path", {
      fill: "#FFF",
      d: "M89.63 5.97v-.78a.98.98 0 0 0-.98-.97h-2.28a.98.98 0 0 0-.97.97V6c0 .09.08.15.17.13a7.13 7.13 0 0 1 3.9-.02c.08.02.16-.04.16-.13m-6.25 1L83 6.6a.98.98 0 0 0-1.38 0l-.46.46a.97.97 0 0 0 0 1.38l.38.39c.06.06.15.04.2-.02a7.49 7.49 0 0 1 1.63-1.62c.07-.04.08-.14.02-.2m4.16 2.45v3.34c0 .1.1.17.2.12l2.97-1.54c.06-.03.08-.12.05-.18a3.7 3.7 0 0 0-3.08-1.87c-.07 0-.14.06-.14.13m0 8.05a4.49 4.49 0 1 1 0-8.98 4.49 4.49 0 0 1 0 8.98m0-10.85a6.37 6.37 0 1 0 0 12.74 6.37 6.37 0 0 0 0-12.74"
    }),
        e = function e(_e3) {
      var v = _e3.url,
          h = _e3.theme,
          m = _e3.cssClasses;
      return (0, a.h)("div", {
        className: m.root
      }, (0, a.h)("a", {
        href: v,
        target: "_blank",
        className: m.link,
        "aria-label": "Search by Algolia",
        rel: "noopener noreferrer"
      }, (0, a.h)("svg", {
        height: "1.2em",
        className: m.logo,
        viewBox: "0 0 168 24",
        style: {
          width: "auto"
        }
      }, (0, a.h)("path", {
        fill: "dark" === h ? "#FFF" : "#5D6494",
        d: "M6.97 6.68V8.3a4.47 4.47 0 0 0-2.42-.67 2.2 2.2 0 0 0-1.38.4c-.34.26-.5.6-.5 1.02 0 .43.16.77.49 1.03.33.25.83.53 1.51.83a7.04 7.04 0 0 1 1.9 1.08c.34.24.58.54.73.89.15.34.23.74.23 1.18 0 .95-.33 1.7-1 2.24a4 4 0 0 1-2.6.81 5.71 5.71 0 0 1-2.94-.68v-1.71c.84.63 1.81.94 2.92.94.58 0 1.05-.14 1.39-.4.34-.28.5-.65.5-1.13 0-.29-.1-.55-.3-.8a2.2 2.2 0 0 0-.65-.53 23.03 23.03 0 0 0-1.64-.78 13.67 13.67 0 0 1-1.11-.64c-.12-.1-.28-.22-.46-.4a1.72 1.72 0 0 1-.39-.5 4.46 4.46 0 0 1-.22-.6c-.07-.23-.1-.48-.1-.75 0-.91.33-1.63 1-2.17a4 4 0 0 1 2.57-.8c.97 0 1.8.18 2.47.52zm7.47 5.7v-.3a2.26 2.26 0 0 0-.5-1.44c-.3-.35-.74-.53-1.32-.53-.53 0-.99.2-1.37.58-.38.39-.62.95-.72 1.68h3.91zm1 2.79v1.4c-.6.34-1.38.51-2.36.51a4.02 4.02 0 0 1-3-1.13 4.04 4.04 0 0 1-1.11-2.97c0-1.3.34-2.32 1.02-3.06a3.38 3.38 0 0 1 2.6-1.1c1.03 0 1.85.32 2.46.96.6.64.9 1.57.9 2.78 0 .33-.03.68-.09 1.04h-5.31c.1.7.4 1.24.89 1.61.49.38 1.1.56 1.85.56.86 0 1.58-.2 2.15-.6zm6.61-1.78h-1.21c-.6 0-1.05.12-1.35.36-.3.23-.46.53-.46.89 0 .37.12.66.36.88.23.2.57.32 1.02.32.5 0 .9-.15 1.2-.43.3-.28.44-.65.44-1.1v-.92zm-4.07-2.55V9.33a4.96 4.96 0 0 1 2.5-.55c2.1 0 3.17 1.03 3.17 3.08V17H22.1v-.96c-.42.68-1.15 1.02-2.19 1.02-.76 0-1.38-.22-1.84-.66-.46-.44-.7-1-.7-1.68 0-.78.3-1.38.88-1.81.59-.43 1.4-.65 2.46-.65h1.34v-.46c0-.55-.13-.97-.4-1.25-.26-.29-.7-.43-1.32-.43-.86 0-1.65.24-2.35.72zm9.34-1.93v1.42c.39-1 1.1-1.5 2.12-1.5.15 0 .31.02.5.05v1.53c-.23-.1-.48-.14-.76-.14-.54 0-.99.24-1.34.71a2.8 2.8 0 0 0-.52 1.71V17h-1.57V8.91h1.57zm5 4.09a3 3 0 0 0 .76 2.01c.47.53 1.14.8 2 .8.64 0 1.24-.18 1.8-.53v1.4c-.53.32-1.2.48-2 .48a3.98 3.98 0 0 1-4.17-4.18c0-1.16.38-2.15 1.14-2.98a4 4 0 0 1 3.1-1.23c.7 0 1.34.15 1.92.44v1.44a3.24 3.24 0 0 0-1.77-.5A2.65 2.65 0 0 0 32.33 13zm7.92-7.28v4.58c.46-1 1.3-1.5 2.5-1.5.8 0 1.42.24 1.9.73.48.5.72 1.17.72 2.05V17H43.8v-5.1c0-.56-.14-.99-.43-1.29-.28-.3-.65-.45-1.1-.45-.54 0-1 .2-1.42.6-.4.4-.61 1.02-.61 1.85V17h-1.56V5.72h1.56zM55.2 15.74c.6 0 1.1-.25 1.5-.76.4-.5.6-1.16.6-1.95 0-.92-.2-1.62-.6-2.12-.4-.5-.92-.74-1.55-.74-.56 0-1.05.22-1.5.67-.44.45-.66 1.13-.66 2.06 0 .96.22 1.67.64 2.14.43.47.95.7 1.57.7zM53 5.72v4.42a2.74 2.74 0 0 1 2.43-1.34c1.03 0 1.86.38 2.51 1.15.65.76.97 1.78.97 3.05 0 1.13-.3 2.1-.92 2.9-.62.81-1.47 1.21-2.54 1.21s-1.9-.45-2.46-1.34V17h-1.58V5.72H53zm9.9 11.1l-3.22-7.9h1.74l1 2.62 1.26 3.42c.1-.32.48-1.46 1.15-3.42l.91-2.63h1.66l-2.92 7.87c-.78 2.07-1.96 3.1-3.56 3.1-.28 0-.53-.02-.73-.07v-1.34c.17.04.35.06.54.06 1.03 0 1.76-.57 2.17-1.7z"
      }), c, l, (0, a.h)("path", {
        fill: "dark" === h ? "#FFF" : "#5468FF",
        d: "M120.92 18.8c-4.38.02-4.38-3.54-4.38-4.1V1.36l2.67-.42v13.25c0 .32 0 2.36 1.71 2.37v2.24zm-10.84-2.18c.82 0 1.43-.04 1.85-.12v-2.72a5.48 5.48 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.11-.44.28-.58.49a.93.93 0 0 0-.22.65c0 .63.22 1 .61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.62.11 2.23.33.6.22 1.09.53 1.44.92.36.4.61.92.76 1.48.16.56.23 1.17.23 1.85v6.87c-.4.1-1.03.2-1.86.32-.84.12-1.78.18-2.82.18-.69 0-1.32-.07-1.9-.2a4 4 0 0 1-1.46-.63c-.4-.3-.72-.67-.96-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.39-1.53.26-.45.6-.82 1.04-1.1.45-.3.95-.5 1.54-.62a8.8 8.8 0 0 1 3.79.05v-.44c0-.3-.04-.6-.11-.87a1.78 1.78 0 0 0-1.1-1.22c-.31-.12-.7-.2-1.15-.2a9.75 9.75 0 0 0-2.95.46l-.33-2.19c.34-.12.84-.23 1.48-.35.65-.12 1.34-.18 2.08-.18zm52.84 9.63c.82 0 1.43-.05 1.85-.13V13.7a5.42 5.42 0 0 0-1.57-.2c-.3 0-.6.02-.9.07-.3.04-.57.12-.81.24-.24.12-.44.28-.58.5a.93.93 0 0 0-.22.65c0 .63.22.99.61 1.23.4.24.94.36 1.62.36zm-.23-9.7c.88 0 1.63.11 2.23.33.6.22 1.1.53 1.45.92.35.39.6.92.76 1.48.15.56.23 1.18.23 1.85v6.88c-.41.08-1.03.19-1.87.31-.83.12-1.77.18-2.81.18-.7 0-1.33-.06-1.9-.2a4 4 0 0 1-1.47-.63c-.4-.3-.72-.67-.95-1.13a4.3 4.3 0 0 1-.34-1.8c0-.66.13-1.08.38-1.53.26-.45.61-.82 1.05-1.1.44-.3.95-.5 1.53-.62a8.8 8.8 0 0 1 3.8.05v-.43c0-.31-.04-.6-.12-.88-.07-.28-.2-.52-.38-.73a1.78 1.78 0 0 0-.73-.5c-.3-.1-.68-.2-1.14-.2a9.85 9.85 0 0 0-2.95.47l-.32-2.19a11.63 11.63 0 0 1 3.55-.53zm-8.03-1.27a1.62 1.62 0 0 0 0-3.24 1.62 1.62 0 1 0 0 3.24zm1.35 13.22h-2.7V7.27l2.7-.42V18.8zm-4.72 0c-4.38.02-4.38-3.54-4.38-4.1l-.01-13.34 2.67-.42v13.25c0 .32 0 2.36 1.72 2.37v2.24zm-8.7-5.9a4.7 4.7 0 0 0-.74-2.79 2.4 2.4 0 0 0-2.07-1 2.4 2.4 0 0 0-2.06 1 4.7 4.7 0 0 0-.74 2.8c0 1.16.25 1.94.74 2.62a2.4 2.4 0 0 0 2.07 1.02c.88 0 1.57-.34 2.07-1.02.49-.68.73-1.46.73-2.63zm2.74 0a6.46 6.46 0 0 1-1.52 4.23c-.49.53-1.07.94-1.76 1.22-.68.29-1.73.45-2.26.45-.53 0-1.58-.15-2.25-.45a5.1 5.1 0 0 1-2.88-3.13 7.3 7.3 0 0 1-.01-4.84 5.13 5.13 0 0 1 2.9-3.1 5.67 5.67 0 0 1 2.22-.42c.81 0 1.56.14 2.24.42.69.29 1.28.69 1.75 1.22.49.52.87 1.15 1.14 1.89a7 7 0 0 1 .43 2.5zm-20.14 0c0 1.11.25 2.36.74 2.88.5.52 1.13.78 1.91.78a4.07 4.07 0 0 0 2.12-.6V9.33c-.19-.04-.99-.2-1.76-.23a2.67 2.67 0 0 0-2.23 1 4.73 4.73 0 0 0-.78 2.8zm7.44 5.27c0 1.82-.46 3.16-1.4 4-.94.85-2.37 1.27-4.3 1.27-.7 0-2.17-.13-3.34-.4l.43-2.11c.98.2 2.27.26 2.95.26 1.08 0 1.84-.22 2.3-.66.46-.43.68-1.08.68-1.94v-.44a5.2 5.2 0 0 1-2.54.6 5.6 5.6 0 0 1-2.01-.36 4.2 4.2 0 0 1-2.58-2.71 9.88 9.88 0 0 1 .02-5.35 4.92 4.92 0 0 1 2.93-2.96 6.6 6.6 0 0 1 2.43-.46 19.64 19.64 0 0 1 4.43.66v10.6z"
      }))));
    },
        v = e;

    exports.default = v;
  }, {
    "preact": "u8ui"
  }],
  "Wr8t": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function t(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function n(e) {
      for (var n = 1; n < arguments.length; n++) {
        var o = null != arguments[n] ? arguments[n] : {};
        n % 2 ? t(Object(o), !0).forEach(function (t) {
          r(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }

      return e;
    }

    function r(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    var o = (0, e.createDocumentationMessageGenerator)({
      name: "powered-by",
      connector: !0
    }),
        i = function i(t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      (0, e.checkRendering)(t, o());
      var i = "https://www.algolia.com/?utm_source=instantsearch.js&utm_medium=website&" + "utm_content=".concat("undefined" != typeof window && window.location ? window.location.hostname : "", "&") + "utm_campaign=poweredby";
      return function (e) {
        var o = (e || {}).url,
            a = void 0 === o ? i : o;
        return {
          $$type: "ais.poweredBy",
          init: function init(e) {
            var r = e.instantSearchInstance;
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !0);
          },
          render: function render(e) {
            var r = e.instantSearchInstance;
            t(n({}, this.getWidgetRenderState(e), {
              instantSearchInstance: r
            }), !1);
          },
          getRenderState: function getRenderState(e, t) {
            return n({}, e, {
              poweredBy: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState() {
            return {
              url: a,
              widgetParams: e
            };
          },
          dispose: function dispose() {
            r();
          }
        };
      };
    },
        a = i;

    exports.default = a;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "nCZh": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = l;

    var e = require("preact"),
        r = s(require("classnames")),
        t = s(require("../../components/PoweredBy/PoweredBy")),
        o = s(require("../../connectors/powered-by/connectPoweredBy")),
        n = require("../../lib/utils"),
        a = require("../../lib/suit");

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = (0, a.component)("PoweredBy"),
        d = (0, n.createDocumentationMessageGenerator)({
      name: "powered-by"
    }),
        u = function u(r) {
      var o = r.containerNode,
          n = r.cssClasses;
      return function (r, a) {
        var s = r.url,
            i = r.widgetParams;

        if (a) {
          var d = i.theme;
          (0, e.render)((0, e.h)(t.default, {
            cssClasses: n,
            url: s,
            theme: d
          }), o);
        } else ;
      };
    };

    function l() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = t.container,
          s = t.cssClasses,
          l = void 0 === s ? {} : s,
          c = t.theme,
          f = void 0 === c ? "light" : c;
      if (!a) throw new Error(d("The `container` option is required."));
      var m = (0, n.getContainerNode)(a),
          v = {
        root: (0, r.default)(i(), i({
          modifierName: "dark" === f ? "dark" : "light"
        }), l.root),
        link: (0, r.default)(i({
          descendantName: "link"
        }), l.link),
        logo: (0, r.default)(i({
          descendantName: "logo"
        }), l.logo)
      },
          h = u({
        containerNode: m,
        cssClasses: v
      });
      return (0, o.default)(h, function () {
        return (0, e.render)(null, m);
      })({
        theme: f
      });
    }
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../components/PoweredBy/PoweredBy": "z1al",
    "../../connectors/powered-by/connectPoweredBy": "Wr8t",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB"
  }],
  "qsmZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.useState = p, exports.useReducer = h, exports.useEffect = v, exports.useLayoutEffect = l, exports.useRef = m, exports.useImperativeHandle = H, exports.useMemo = d, exports.useCallback = x, exports.useContext = y, exports.useDebugValue = E, exports.useErrorBoundary = b;

    var _,
        n,
        t,
        o = require("preact"),
        e = 0,
        u = [],
        r = o.options.__b,
        i = o.options.__r,
        c = o.options.diffed,
        s = o.options.__c,
        f = o.options.unmount;

    function a(_, t) {
      o.options.__h && o.options.__h(n, _, e || t), e = 0;
      var u = n.__H || (n.__H = {
        __: [],
        __h: []
      });
      return _ >= u.__.length && u.__.push({}), u.__[_];
    }

    function p(_) {
      return e = 1, h(C, _);
    }

    function h(t, o, e) {
      var u = a(_++, 2);
      return u.t = t, u.__c || (u.__ = [e ? e(o) : C(void 0, o), function (_) {
        var n = u.t(u.__[0], _);
        u.__[0] !== n && (u.__ = [n, u.__[1]], u.__c.setState({}));
      }], u.__c = n), u.__;
    }

    function v(t, e) {
      var u = a(_++, 3);
      !o.options.__s && F(u.__H, e) && (u.__ = t, u.__H = e, n.__H.__h.push(u));
    }

    function l(t, e) {
      var u = a(_++, 4);
      !o.options.__s && F(u.__H, e) && (u.__ = t, u.__H = e, n.__h.push(u));
    }

    function m(_) {
      return e = 5, d(function () {
        return {
          current: _
        };
      }, []);
    }

    function H(_, n, t) {
      e = 6, l(function () {
        "function" == typeof _ ? _(n()) : _ && (_.current = n());
      }, null == t ? t : t.concat(_));
    }

    function d(n, t) {
      var o = a(_++, 7);
      return F(o.__H, t) && (o.__ = n(), o.__H = t, o.__h = n), o.__;
    }

    function x(_, n) {
      return e = 8, d(function () {
        return _;
      }, n);
    }

    function y(t) {
      var o = n.context[t.__c],
          e = a(_++, 9);
      return e.__c = t, o ? (null == e.__ && (e.__ = !0, o.sub(n)), o.props.value) : t.__;
    }

    function E(_, n) {
      o.options.useDebugValue && o.options.useDebugValue(n ? n(_) : _);
    }

    function b(t) {
      var o = a(_++, 10),
          e = p();
      return o.__ = t, n.componentDidCatch || (n.componentDidCatch = function (_) {
        o.__ && o.__(_), e[1](_);
      }), [e[0], function () {
        e[1](void 0);
      }];
    }

    function g() {
      u.forEach(function (_) {
        if (_.__P) try {
          _.__H.__h.forEach(A), _.__H.__h.forEach(D), _.__H.__h = [];
        } catch (n) {
          _.__H.__h = [], o.options.__e(n, _.__v);
        }
      }), u = [];
    }

    o.options.__b = function (_) {
      n = null, r && r(_);
    }, o.options.__r = function (t) {
      i && i(t), _ = 0;
      var o = (n = t.__c).__H;
      o && (o.__h.forEach(A), o.__h.forEach(D), o.__h = []);
    }, o.options.diffed = function (_) {
      c && c(_);
      var e = _.__c;
      e && e.__H && e.__H.__h.length && (1 !== u.push(e) && t === o.options.requestAnimationFrame || ((t = o.options.requestAnimationFrame) || function (_) {
        var n,
            t = function t() {
          clearTimeout(o), q && cancelAnimationFrame(n), setTimeout(_);
        },
            o = setTimeout(t, 100);

        q && (n = requestAnimationFrame(t));
      })(g)), n = void 0;
    }, o.options.__c = function (_, n) {
      n.some(function (_) {
        try {
          _.__h.forEach(A), _.__h = _.__h.filter(function (_) {
            return !_.__ || D(_);
          });
        } catch (t) {
          n.some(function (_) {
            _.__h && (_.__h = []);
          }), n = [], o.options.__e(t, _.__v);
        }
      }), s && s(_, n);
    }, o.options.unmount = function (_) {
      f && f(_);
      var n = _.__c;
      if (n && n.__H) try {
        n.__H.__.forEach(A);
      } catch (_) {
        o.options.__e(_, n.__v);
      }
    };
    var q = "function" == typeof requestAnimationFrame;

    function A(_) {
      var t = n;
      "function" == typeof _.__c && _.__c(), n = t;
    }

    function D(_) {
      var t = n;
      _.__c = _.__(), n = t;
    }

    function F(_, n) {
      return !_ || _.length !== n.length || n.some(function (n, t) {
        return n !== _[t];
      });
    }

    function C(_, n) {
      return "function" == typeof n ? n(_) : n;
    }
  }, {
    "preact": "u8ui"
  }],
  "p7LC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = require("preact/hooks"),
        a = r(require("classnames")),
        s = r(require("../Template/Template"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e, t, a) {
      return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a, e;
    }

    function o(e, t) {
      return i(e) || u(e, t) || n();
    }

    function n() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    function u(e, t) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var a = [],
            s = !0,
            r = !1,
            l = void 0;

        try {
          for (var o, n = e[Symbol.iterator](); !(s = (o = n.next()).done) && (a.push(o.value), !t || a.length !== t); s = !0) {
            ;
          }
        } catch (u) {
          r = !0, l = u;
        } finally {
          try {
            s || null == n.return || n.return();
          } finally {
            if (r) throw l;
          }
        }

        return a;
      }
    }

    function i(e) {
      if (Array.isArray(e)) return e;
    }

    function c(r) {
      var n,
          u = o((0, t.useState)(r.isCollapsed), 2),
          i = u[0],
          c = u[1],
          d = o((0, t.useState)(!1), 2),
          p = d[0],
          f = d[1],
          m = (0, t.useRef)(null);
      return (0, t.useEffect)(function () {
        if (m.current) return m.current.appendChild(r.bodyElement), function () {
          m.current.removeChild(r.bodyElement);
        };
      }, [m, r.bodyElement]), p || r.isCollapsed === i || c(r.isCollapsed), (0, e.h)("div", {
        className: (0, a.default)(r.cssClasses.root, (n = {}, l(n, r.cssClasses.noRefinementRoot, r.hidden), l(n, r.cssClasses.collapsibleRoot, r.collapsible), l(n, r.cssClasses.collapsedRoot, i), n)),
        hidden: r.hidden
      }, r.templates.header && (0, e.h)("div", {
        className: r.cssClasses.header
      }, (0, e.h)(s.default, {
        templates: r.templates,
        templateKey: "header",
        rootTagName: "span",
        data: r.data
      }), r.collapsible && (0, e.h)("button", {
        className: r.cssClasses.collapseButton,
        "aria-expanded": !i,
        onClick: function onClick(e) {
          e.preventDefault(), f(!0), c(function (e) {
            return !e;
          });
        }
      }, (0, e.h)(s.default, {
        templates: r.templates,
        templateKey: "collapseButtonText",
        rootTagName: "span",
        data: {
          collapsed: i
        }
      }))), (0, e.h)("div", {
        className: r.cssClasses.body,
        ref: m
      }), r.templates.footer && (0, e.h)(s.default, {
        templates: r.templates,
        templateKey: "footer",
        rootProps: {
          className: r.cssClasses.footer
        },
        data: r.data
      }));
    }

    var d = c;
    exports.default = d;
  }, {
    "preact": "u8ui",
    "preact/hooks": "qsmZ",
    "classnames": "G1XI",
    "../Template/Template": "wp6U"
  }],
  "MBzk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = a(require("classnames")),
        o = require("../../lib/utils"),
        n = require("../../lib/suit"),
        r = a(require("../../components/Panel/Panel"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function l(e, t) {
      var o = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), o.push.apply(o, n);
      }

      return o;
    }

    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {};
        t % 2 ? l(Object(o), !0).forEach(function (t) {
          c(e, t, o[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
      }

      return e;
    }

    function c(e, t, o) {
      return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = o, e;
    }

    var s = (0, o.createDocumentationMessageGenerator)({
      name: "panel"
    }),
        d = (0, n.component)("Panel"),
        u = function u(t) {
      var o = t.containerNode,
          n = t.bodyContainerNode,
          a = t.cssClasses,
          l = t.templates;
      return function (t) {
        var i = t.options,
            c = t.hidden,
            s = t.collapsible,
            d = t.collapsed;
        (0, e.render)((0, e.h)(r.default, {
          cssClasses: a,
          hidden: c,
          collapsible: s,
          isCollapsed: d,
          templates: l,
          data: i,
          bodyElement: n
        }), o);
      };
    },
        p = function p(n) {
      var r = n || {},
          a = r.templates,
          l = void 0 === a ? {} : a,
          c = r.hidden,
          p = void 0 === c ? function () {
        return !1;
      } : c,
          f = r.collapsed,
          b = r.cssClasses,
          m = void 0 === b ? {} : b,
          h = document.createElement("div"),
          v = Boolean(f),
          y = "function" == typeof f ? f : function () {
        return !1;
      },
          g = {
        root: (0, t.default)(d(), m.root),
        noRefinementRoot: (0, t.default)(d({
          modifierName: "noRefinement"
        }), m.noRefinementRoot),
        collapsibleRoot: (0, t.default)(d({
          modifierName: "collapsible"
        }), m.collapsibleRoot),
        collapsedRoot: (0, t.default)(d({
          modifierName: "collapsed"
        }), m.collapsedRoot),
        collapseButton: (0, t.default)(d({
          descendantName: "collapseButton"
        }), m.collapseButton),
        collapseIcon: (0, t.default)(d({
          descendantName: "collapseIcon"
        }), m.collapseIcon),
        body: (0, t.default)(d({
          descendantName: "body"
        }), m.body),
        header: (0, t.default)(d({
          descendantName: "header"
        }), m.header),
        footer: (0, t.default)(d({
          descendantName: "footer"
        }), m.footer)
      };
      return function (t) {
        return function (n) {
          var r = (n || {}).container;
          if (!r) throw new Error(s("The `container` option is required in the widget within the panel."));
          var a = {
            header: "",
            footer: "",
            collapseButtonText: function collapseButtonText(e) {
              var t = e.collapsed;
              return '<svg\n          class="'.concat(g.collapseIcon, '"\n          width="1em"\n          height="1em"\n          viewBox="0 0 500 500"\n        >\n        <path d="').concat(t ? "M100 250l300-150v300z" : "M250 400l150-300H100z", '" fill="currentColor" />\n        </svg>');
            }
          },
              c = u({
            containerNode: (0, o.getContainerNode)(r),
            bodyContainerNode: h,
            cssClasses: g,
            templates: i({}, a, {}, l)
          });
          c({
            options: {},
            hidden: !0,
            collapsible: v,
            collapsed: !1
          });
          var d = t(i({}, n, {
            container: h
          }));
          return i({}, d, {
            dispose: function dispose() {
              if ((0, e.render)(null, (0, o.getContainerNode)(r)), "function" == typeof d.dispose) {
                for (var t, n = arguments.length, a = new Array(n), l = 0; l < n; l++) {
                  a[l] = arguments[l];
                }

                return (t = d.dispose).call.apply(t, [this].concat(a));
              }
            },
            render: function render() {
              for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) {
                t[o] = arguments[o];
              }

              var n,
                  r = t[0],
                  a = i({}, d.getWidgetRenderState ? d.getWidgetRenderState(r) : {}, {}, r);
              (c({
                options: a,
                hidden: Boolean(p(a)),
                collapsible: v,
                collapsed: Boolean(y(a))
              }), "function" == typeof d.render) && (n = d.render).call.apply(n, [this].concat(t));
            }
          });
        };
      };
    },
        f = p;

    exports.default = f;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB",
    "../../components/Panel/Panel": "p7LC"
  }],
  "W4nc": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function t(t) {
      for (var n = 1; n < arguments.length; n++) {
        var i = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(i), !0).forEach(function (e) {
          r(t, e, i[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
        });
      }

      return t;
    }

    function r(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var n = function n(e) {
      var r,
          n = e.searchAsYouSpeak,
          i = e.language,
          s = e.onQueryChange,
          o = e.onStateChange,
          a = window.webkitSpeechRecognition || window.SpeechRecognition,
          u = function u(e) {
        return {
          status: e,
          transcript: "",
          isSpeechFinal: !1,
          errorCode: void 0
        };
      },
          c = u("initial"),
          p = function p() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        c = t({}, c, {}, e), o();
      },
          f = function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "initial";
        p(u(e));
      },
          l = function l() {
        p({
          status: "waiting"
        });
      },
          d = function d(e) {
        p({
          status: "error",
          errorCode: e.error
        });
      },
          g = function g(e) {
        p({
          status: "recognizing",
          transcript: e.results[0] && e.results[0][0] && e.results[0][0].transcript || "",
          isSpeechFinal: e.results[0] && e.results[0].isFinal
        }), n && c.transcript && s(c.transcript);
      },
          v = function v() {
        c.errorCode || !c.transcript || n || s(c.transcript), "error" !== c.status && p({
          status: "finished"
        });
      },
          b = function b() {
        r && (r.stop(), r.removeEventListener("start", l), r.removeEventListener("error", d), r.removeEventListener("result", g), r.removeEventListener("end", v), r = void 0);
      };

      return {
        getState: function getState() {
          return c;
        },
        isBrowserSupported: function isBrowserSupported() {
          return Boolean(a);
        },
        isListening: function isListening() {
          return "askingPermission" === c.status || "waiting" === c.status || "recognizing" === c.status;
        },
        startListening: function startListening() {
          (r = new a()) && (f("askingPermission"), r.interimResults = !0, i && (r.lang = i), r.addEventListener("start", l), r.addEventListener("error", d), r.addEventListener("result", g), r.addEventListener("end", v), r.start());
        },
        stopListening: function stopListening() {
          b(), f("finished");
        },
        dispose: b
      };
    },
        i = n;

    exports.default = i;
  }, {}],
  "bgBj": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils"),
        t = r(require("../../lib/voiceSearchHelper"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? n(Object(r), !0).forEach(function (t) {
          a(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function a(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var o = (0, e.createDocumentationMessageGenerator)({
      name: "voice-search",
      connector: !0
    }),
        s = function s(r) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(r, o()), function (e) {
        var a = e.searchAsYouSpeak,
            o = void 0 !== a && a,
            s = e.language,
            c = e.additionalQueryParameters,
            u = e.createVoiceSearchHelper,
            d = void 0 === u ? t.default : u;
        return {
          $$type: "ais.voiceSearch",
          init: function init(e) {
            var t = e.instantSearchInstance;
            r(i({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !0);
          },
          render: function render(e) {
            var t = e.instantSearchInstance;
            r(i({}, this.getWidgetRenderState(e), {
              instantSearchInstance: t
            }), !1);
          },
          getRenderState: function getRenderState(e, t) {
            return i({}, e, {
              voiceSearch: this.getWidgetRenderState(t)
            });
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var n = this,
                a = t.helper,
                u = t.instantSearchInstance;
            this._refine || (this._refine = function (e) {
              if (e !== a.state.query) {
                var t = s ? [s.split("-")[0]] : void 0;
                a.setQueryParameter("queryLanguages", t), "function" == typeof c && a.setState(a.state.setQueryParameters(i({
                  ignorePlurals: !0,
                  removeStopWords: !0,
                  optionalWords: e
                }, c({
                  query: e
                })))), a.setQuery(e).search();
              }
            }), this._voiceSearchHelper || (this._voiceSearchHelper = d({
              searchAsYouSpeak: o,
              language: s,
              onQueryChange: function onQueryChange(e) {
                return n._refine(e);
              },
              onStateChange: function onStateChange() {
                r(i({}, n.getWidgetRenderState(t), {
                  instantSearchInstance: u
                }), !1);
              }
            }));
            var g = this._voiceSearchHelper,
                p = g.isBrowserSupported,
                f = g.isListening,
                v = g.startListening,
                l = g.stopListening,
                h = g.getState;
            return {
              isBrowserSupported: p(),
              isListening: f(),
              toggleListening: function toggleListening() {
                p() && (f() ? l() : v());
              },
              voiceListeningState: h(),
              widgetParams: e
            };
          },
          dispose: function dispose(e) {
            var t = e.state;
            this._voiceSearchHelper.dispose(), n();
            var r = t;

            if ("function" == typeof c) {
              var a = c({
                query: ""
              }),
                  o = a ? Object.keys(a).reduce(function (e, t) {
                return e[t] = void 0, e;
              }, {}) : {};
              r = t.setQueryParameters(i({
                queryLanguages: void 0,
                ignorePlurals: void 0,
                removeStopWords: void 0,
                optionalWords: void 0
              }, o));
            }

            return r.setQueryParameter("query", void 0);
          },
          getWidgetUiState: function getWidgetUiState(e, t) {
            var r = t.searchParameters.query || "";
            return r ? i({}, e, {
              query: r
            }) : e;
          },
          getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
            var r = t.uiState;
            return e.setQueryParameter("query", r.query || "");
          }
        };
      };
    },
        c = s;

    exports.default = c;
  }, {
    "../../lib/utils": "Xobp",
    "../../lib/voiceSearchHelper": "W4nc"
  }],
  "QgcJ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = s(require("../Template/Template"));

    function s(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var r = function r(s) {
      var r = s.cssClasses,
          a = s.isBrowserSupported,
          o = s.isListening,
          i = s.toggleListening,
          n = s.voiceListeningState,
          u = s.templates,
          p = n.status,
          l = n.transcript,
          c = n.isSpeechFinal,
          d = n.errorCode;
      return (0, e.h)("div", {
        className: r.root
      }, (0, e.h)(t.default, {
        templateKey: "buttonText",
        rootTagName: "button",
        rootProps: {
          className: r.button,
          type: "button",
          title: "Search by voice".concat(a ? "" : " (not supported on this browser)"),
          onClick: function onClick(e) {
            e.currentTarget.blur(), i();
          },
          disabled: !a
        },
        data: {
          status: p,
          errorCode: d,
          isListening: o,
          transcript: l,
          isSpeechFinal: c,
          isBrowserSupported: a
        },
        templates: u
      }), (0, e.h)(t.default, {
        templateKey: "status",
        rootProps: {
          className: r.status
        },
        data: {
          status: p,
          errorCode: d,
          isListening: o,
          transcript: l,
          isSpeechFinal: c,
          isBrowserSupported: a
        },
        templates: u
      }));
    },
        a = r;

    exports.default = a;
  }, {
    "preact": "u8ui",
    "../Template/Template": "wp6U"
  }],
  "wXCk": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var n = function n(_n5, t, e) {
      return "error" === _n5 && "not-allowed" === t ? '<line x1="1" y1="1" x2="23" y2="23"></line>\n            <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path>\n            <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path>\n            <line x1="12" y1="19" x2="12" y2="23"></line>\n            <line x1="8" y1="23" x2="16" y2="23"></line>' : '<path\n            d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"\n            fill="'.concat(e ? "currentColor" : "none", '">\n          </path>\n          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>\n          <line x1="12" y1="19" x2="12" y2="23"></line>\n          <line x1="8" y1="23" x2="16" y2="23"></line>');
    },
        t = {
      buttonText: function buttonText(t) {
        var e = t.status,
            r = t.errorCode,
            o = t.isListening;
        return '<svg\n       xmlns="http://www.w3.org/2000/svg"\n       width="16"\n       height="16"\n       viewBox="0 0 24 24"\n       fill="none"\n       stroke="currentColor"\n       stroke-width="2"\n       stroke-linecap="round"\n       stroke-linejoin="round"\n     >\n       '.concat(n(e, r, o), "\n     </svg>");
      },
      status: "<p>{{transcript}}</p>"
    };

    exports.default = t;
  }, {}],
  "yO3j": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = i(require("classnames")),
        r = require("../../lib/utils"),
        n = require("../../lib/suit"),
        a = i(require("../../connectors/voice-search/connectVoiceSearch")),
        o = i(require("../../components/VoiceSearch/VoiceSearch")),
        s = i(require("./defaultTemplates"));

    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function c(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(Object(r), !0).forEach(function (t) {
          l(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function l(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var p = (0, r.createDocumentationMessageGenerator)({
      name: "voice-search"
    }),
        d = (0, n.component)("VoiceSearch"),
        f = function f(t) {
      var r = t.isBrowserSupported,
          n = t.isListening,
          a = t.toggleListening,
          s = t.voiceListeningState,
          i = t.widgetParams,
          c = i.container,
          u = i.cssClasses,
          l = i.templates;
      (0, e.render)((0, e.h)(o.default, {
        cssClasses: u,
        templates: l,
        isBrowserSupported: r,
        isListening: n,
        toggleListening: a,
        voiceListeningState: s
      }), c);
    },
        g = function g() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          o = n.container,
          i = n.cssClasses,
          c = void 0 === i ? {} : i,
          l = n.templates,
          g = n.searchAsYouSpeak,
          b = void 0 !== g && g,
          m = n.language,
          v = n.additionalQueryParameters,
          O = n.createVoiceSearchHelper;
      if (!o) throw new Error(p("The `container` option is required."));
      var h = (0, r.getContainerNode)(o),
          y = {
        root: (0, t.default)(d(), c.root),
        button: (0, t.default)(d({
          descendantName: "button"
        }), c.button),
        status: (0, t.default)(d({
          descendantName: "status"
        }), c.status)
      };
      return (0, a.default)(f, function () {
        return (0, e.render)(null, h);
      })({
        container: h,
        cssClasses: y,
        templates: u({}, s.default, {}, l),
        searchAsYouSpeak: b,
        language: m,
        additionalQueryParameters: v,
        createVoiceSearchHelper: O
      });
    },
        b = g;

    exports.default = b;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB",
    "../../connectors/voice-search/connectVoiceSearch": "bgBj",
    "../../components/VoiceSearch/VoiceSearch": "QgcJ",
    "./defaultTemplates": "wXCk"
  }],
  "REbR": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils");

    function t(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function r(e) {
      for (var r = 1; r < arguments.length; r++) {
        var i = null != arguments[r] ? arguments[r] : {};
        r % 2 ? t(Object(i), !0).forEach(function (t) {
          n(e, t, i[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : t(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
      }

      return e;
    }

    function n(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function i(e) {
      return c(e) || o(e) || a();
    }

    function a() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function o(e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }

    function c(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }

        return r;
      }
    }

    var s = (0, e.createDocumentationMessageGenerator)({
      name: "query-rules",
      connector: !0
    });

    function u(e) {
      return [e.disjunctiveFacetsRefinements, e.facetsRefinements, e.hierarchicalFacetsRefinements, e.numericRefinements].some(function (e) {
        return Boolean(e && Object.keys(e).length > 0);
      });
    }

    function l(e) {
      return e.replace(/[^a-z0-9-_]+/gi, "_");
    }

    function f(t) {
      var r = t.helper,
          n = t.sharedHelperState,
          a = t.trackedFilters;
      return Object.keys(a).reduce(function (t, o) {
        var c = (0, e.getRefinements)(r.lastResults || {}, n).filter(function (e) {
          return e.attribute === o;
        }).map(function (e) {
          return e.numericValue || e.name;
        }),
            s = (0, a[o])(c);
        return [].concat(i(t), i(c.filter(function (e) {
          return s.includes(e);
        }).map(function (e) {
          return l("ais-".concat(o, "-").concat(e));
        })));
      }, []);
    }

    function p(t) {
      var n = this.helper,
          a = this.initialRuleContexts,
          o = this.trackedFilters,
          c = this.transformRuleContexts,
          s = t.state,
          u = s.ruleContexts || [],
          l = f({
        helper: n,
        sharedHelperState: s,
        trackedFilters: o
      }),
          p = [].concat(i(a), i(l)),
          d = c(p).slice(0, 10);
      (0, e.isEqual)(u, d) || n.overrideStateWithoutTriggeringChangeEvent(r({}, s, {
        ruleContexts: d
      }));
    }

    var d = function d(t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.noop;
      return (0, e.checkRendering)(t, s()), function (e) {
        var i = e || {},
            a = i.trackedFilters,
            o = void 0 === a ? {} : a,
            c = i.transformRuleContexts,
            l = void 0 === c ? function (e) {
          return e;
        } : c,
            f = i.transformItems,
            d = void 0 === f ? function (e) {
          return e;
        } : f;
        Object.keys(o).forEach(function (e) {
          if ("function" != typeof o[e]) throw new Error(s("'The \"".concat(e, '" filter value in the `trackedFilters` option expects a function.')));
        });
        var h,
            g = Object.keys(o).length > 0,
            v = [];
        return {
          $$type: "ais.queryRules",
          init: function init(n) {
            var i = n.helper,
                a = n.state,
                c = n.instantSearchInstance;
            v = a.ruleContexts || [], h = p.bind({
              helper: i,
              initialRuleContexts: v,
              trackedFilters: o,
              transformRuleContexts: l
            }), g && ((u(a) || Boolean(e.transformRuleContexts)) && h({
              state: a
            }), i.on("change", h)), t(r({}, this.getWidgetRenderState(n), {
              instantSearchInstance: c
            }), !0);
          },
          render: function render(e) {
            var n = e.instantSearchInstance;
            t(r({}, this.getWidgetRenderState(e), {
              instantSearchInstance: n
            }), !1);
          },
          getWidgetRenderState: function getWidgetRenderState(t) {
            var r = (t.results || {}).userData;
            return {
              items: d(void 0 === r ? [] : r),
              widgetParams: e
            };
          },
          getRenderState: function getRenderState(e, t) {
            return r({}, e, {
              queryRules: this.getWidgetRenderState(t)
            });
          },
          dispose: function dispose(e) {
            var t = e.helper,
                r = e.state;
            return n(), g ? (t.removeListener("change", h), r.setQueryParameter("ruleContexts", v)) : r;
          }
        };
      };
    },
        h = d;

    exports.default = h;
  }, {
    "../../lib/utils": "Xobp"
  }],
  "tlAH": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = r(require("../Template/Template"));

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var a = function a(r) {
      var a = r.cssClasses,
          s = r.templates,
          l = r.items;
      return (0, e.h)(t.default, {
        templateKey: "default",
        templates: s,
        rootProps: {
          className: a.root
        },
        data: {
          items: l
        }
      });
    },
        s = a;

    exports.default = s;
  }, {
    "preact": "u8ui",
    "../Template/Template": "wp6U"
  }],
  "Ksh0": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("preact"),
        t = u(require("classnames")),
        r = require("../../lib/utils"),
        n = require("../../lib/suit"),
        o = u(require("../../connectors/query-rules/connectQueryRules")),
        s = u(require("../../components/QueryRuleCustomData/QueryRuleCustomData"));

    function u(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function a(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? a(Object(r), !0).forEach(function (t) {
          c(e, t, r[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }

      return e;
    }

    function c(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    var l = (0, r.createDocumentationMessageGenerator)({
      name: "query-rule-custom-data"
    }),
        f = (0, n.component)("QueryRuleCustomData"),
        p = function p(t) {
      var r = t.items,
          n = t.widgetParams,
          o = n.container,
          u = n.cssClasses,
          a = n.templates;
      (0, e.render)((0, e.h)(s.default, {
        cssClasses: u,
        templates: a,
        items: r
      }), o);
    },
        m = function m() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          s = n.container,
          u = n.cssClasses,
          a = void 0 === u ? {} : u,
          c = n.templates,
          m = void 0 === c ? {} : c,
          d = n.transformItems,
          y = void 0 === d ? function (e) {
        return e;
      } : d;
      if (!s) throw new Error(l("The `container` option is required."));
      var b = {
        root: (0, t.default)(f(), a.root)
      },
          O = i({}, {
        default: function _default(e) {
          var t = e.items;
          return JSON.stringify(t, null, 2);
        }
      }, {}, m),
          v = (0, r.getContainerNode)(s);
      return i({}, (0, o.default)(p, function () {
        (0, e.render)(null, v);
      })({
        container: v,
        cssClasses: b,
        templates: O,
        transformItems: y
      }), {
        $$type: "ais.queryRuleCustomData"
      });
    },
        d = m;

    exports.default = d;
  }, {
    "preact": "u8ui",
    "classnames": "G1XI",
    "../../lib/utils": "Xobp",
    "../../lib/suit": "uzDB",
    "../../connectors/query-rules/connectQueryRules": "REbR",
    "../../components/QueryRuleCustomData/QueryRuleCustomData": "tlAH"
  }],
  "bNZr": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = require("../../lib/utils"),
        r = t(require("../../connectors/query-rules/connectQueryRules"));

    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e, r) {
      var t = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r && (n = n.filter(function (r) {
          return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, n);
      }

      return t;
    }

    function o(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? n(Object(t), !0).forEach(function (r) {
          u(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
      }

      return e;
    }

    function u(e, r, t) {
      return r in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[r] = t, e;
    }

    var c = (0, e.createDocumentationMessageGenerator)({
      name: "query-rule-context"
    }),
        i = function i() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if (!t.trackedFilters) throw new Error(c("The `trackedFilters` option is required."));
      return o({}, (0, r.default)(e.noop)(t), {
        $$type: "ais.queryRuleContext"
      });
    },
        a = i;

    exports.default = a;
  }, {
    "../../lib/utils": "Xobp",
    "../../connectors/query-rules/connectQueryRules": "REbR"
  }],
  "YiFl": [function (require, module, exports) {
    "use strict";

    function e(e, t) {
      var r = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), r.push.apply(r, n);
      }

      return r;
    }

    function t(t) {
      for (var n = 1; n < arguments.length; n++) {
        var a = null != arguments[n] ? arguments[n] : {};
        n % 2 ? e(Object(a), !0).forEach(function (e) {
          r(t, e, a[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
        });
      }

      return t;
    }

    function r(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function n(e, t) {
      if (null == e) return {};
      var r,
          n,
          i = a(e, t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);

        for (n = 0; n < o.length; n++) {
          r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        }
      }

      return i;
    }

    function a(e, t) {
      if (null == e) return {};
      var r,
          n,
          a = {},
          i = Object.keys(e);

      for (n = 0; n < i.length; n++) {
        r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      }

      return a;
    }

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var i = function i(e) {
      var r = e || {},
          a = r.placesReference,
          i = r.defaultPosition,
          o = void 0 === i ? [] : i,
          u = n(r, ["placesReference", "defaultPosition"]);
      if ("function" != typeof a) throw new Error("The `placesReference` option requires a valid Places.js reference.");
      var c = a(u),
          s = {
        query: "",
        initialLatLngViaIP: void 0,
        isInitialLatLngViaIPSet: !1
      };
      return {
        $$type: "ais.places",
        init: function init(e) {
          var t = e.helper;
          c.on("change", function (e) {
            var r = e.suggestion,
                n = r.value,
                a = r.latlng,
                i = a.lat,
                o = a.lng;
            s.query = n, t.setQueryParameter("insideBoundingBox", void 0).setQueryParameter("aroundLatLngViaIP", !1).setQueryParameter("aroundLatLng", "".concat(i, ",").concat(o)).search();
          }), c.on("clear", function () {
            s.query = "", t.setQueryParameter("insideBoundingBox", void 0), o.length > 1 ? t.setQueryParameter("aroundLatLngViaIP", !1).setQueryParameter("aroundLatLng", o.join(",")) : t.setQueryParameter("aroundLatLngViaIP", s.initialLatLngViaIP).setQueryParameter("aroundLatLng", void 0), t.search();
          });
        },
        getWidgetUiState: function getWidgetUiState(e, r) {
          var a = r.searchParameters.aroundLatLng || o.join(",");

          if (!(a !== o.join(",")) && !s.query) {
            e.places;
            return n(e, ["places"]);
          }

          return t({}, e, {
            places: {
              query: s.query,
              position: a
            }
          });
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(e, t) {
          var r = t.uiState.places || {},
              n = r.query,
              a = void 0 === n ? "" : n,
              i = r.position,
              u = void 0 === i ? o.join(",") : i;
          return s.query = a, s.isInitialLatLngViaIPSet || (s.isInitialLatLngViaIPSet = !0, s.initialLatLngViaIP = e.aroundLatLngViaIP), c.setVal(a), c.close(), e.setQueryParameter("insideBoundingBox", void 0).setQueryParameter("aroundLatLngViaIP", !1).setQueryParameter("aroundLatLng", u || void 0);
        },
        getRenderState: function getRenderState(e, r) {
          return t({}, e, {
            places: this.getWidgetRenderState(r)
          });
        },
        getWidgetRenderState: function getWidgetRenderState() {
          return {
            widgetParams: e
          };
        }
      };
    },
        o = i;

    exports.default = o;
  }, {}],
  "VTbC": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), Object.defineProperty(exports, "clearRefinements", {
      enumerable: !0,
      get: function get() {
        return e.default;
      }
    }), Object.defineProperty(exports, "configure", {
      enumerable: !0,
      get: function get() {
        return r.default;
      }
    }), Object.defineProperty(exports, "EXPERIMENTAL_configureRelatedItems", {
      enumerable: !0,
      get: function get() {
        return t.default;
      }
    }), Object.defineProperty(exports, "currentRefinements", {
      enumerable: !0,
      get: function get() {
        return n.default;
      }
    }), Object.defineProperty(exports, "geoSearch", {
      enumerable: !0,
      get: function get() {
        return u.default;
      }
    }), Object.defineProperty(exports, "hierarchicalMenu", {
      enumerable: !0,
      get: function get() {
        return i.default;
      }
    }), Object.defineProperty(exports, "hits", {
      enumerable: !0,
      get: function get() {
        return o.default;
      }
    }), Object.defineProperty(exports, "hitsPerPage", {
      enumerable: !0,
      get: function get() {
        return a.default;
      }
    }), Object.defineProperty(exports, "infiniteHits", {
      enumerable: !0,
      get: function get() {
        return f.default;
      }
    }), Object.defineProperty(exports, "menu", {
      enumerable: !0,
      get: function get() {
        return c.default;
      }
    }), Object.defineProperty(exports, "refinementList", {
      enumerable: !0,
      get: function get() {
        return l.default;
      }
    }), Object.defineProperty(exports, "numericMenu", {
      enumerable: !0,
      get: function get() {
        return s.default;
      }
    }), Object.defineProperty(exports, "pagination", {
      enumerable: !0,
      get: function get() {
        return d.default;
      }
    }), Object.defineProperty(exports, "rangeInput", {
      enumerable: !0,
      get: function get() {
        return p.default;
      }
    }), Object.defineProperty(exports, "searchBox", {
      enumerable: !0,
      get: function get() {
        return b.default;
      }
    }), Object.defineProperty(exports, "rangeSlider", {
      enumerable: !0,
      get: function get() {
        return m.default;
      }
    }), Object.defineProperty(exports, "sortBy", {
      enumerable: !0,
      get: function get() {
        return g.default;
      }
    }), Object.defineProperty(exports, "ratingMenu", {
      enumerable: !0,
      get: function get() {
        return y.default;
      }
    }), Object.defineProperty(exports, "stats", {
      enumerable: !0,
      get: function get() {
        return x.default;
      }
    }), Object.defineProperty(exports, "toggleRefinement", {
      enumerable: !0,
      get: function get() {
        return q.default;
      }
    }), Object.defineProperty(exports, "analytics", {
      enumerable: !0,
      get: function get() {
        return P.default;
      }
    }), Object.defineProperty(exports, "breadcrumb", {
      enumerable: !0,
      get: function get() {
        return j.default;
      }
    }), Object.defineProperty(exports, "menuSelect", {
      enumerable: !0,
      get: function get() {
        return O.default;
      }
    }), Object.defineProperty(exports, "poweredBy", {
      enumerable: !0,
      get: function get() {
        return h.default;
      }
    }), Object.defineProperty(exports, "panel", {
      enumerable: !0,
      get: function get() {
        return R.default;
      }
    }), Object.defineProperty(exports, "voiceSearch", {
      enumerable: !0,
      get: function get() {
        return M.default;
      }
    }), Object.defineProperty(exports, "queryRuleCustomData", {
      enumerable: !0,
      get: function get() {
        return v.default;
      }
    }), Object.defineProperty(exports, "queryRuleContext", {
      enumerable: !0,
      get: function get() {
        return _.default;
      }
    }), Object.defineProperty(exports, "index", {
      enumerable: !0,
      get: function get() {
        return S.default;
      }
    }), Object.defineProperty(exports, "places", {
      enumerable: !0,
      get: function get() {
        return w.default;
      }
    });

    var e = B(require("./clear-refinements/clear-refinements")),
        r = B(require("./configure/configure")),
        t = B(require("./configure-related-items/configure-related-items")),
        n = B(require("./current-refinements/current-refinements")),
        u = B(require("./geo-search/geo-search")),
        i = B(require("./hierarchical-menu/hierarchical-menu")),
        o = B(require("./hits/hits")),
        a = B(require("./hits-per-page/hits-per-page")),
        f = B(require("./infinite-hits/infinite-hits")),
        c = B(require("./menu/menu")),
        l = B(require("./refinement-list/refinement-list")),
        s = B(require("./numeric-menu/numeric-menu")),
        d = B(require("./pagination/pagination")),
        p = B(require("./range-input/range-input")),
        b = B(require("./search-box/search-box")),
        m = B(require("./range-slider/range-slider")),
        g = B(require("./sort-by/sort-by")),
        y = B(require("./rating-menu/rating-menu")),
        x = B(require("./stats/stats")),
        q = B(require("./toggle-refinement/toggle-refinement")),
        P = B(require("./analytics/analytics")),
        j = B(require("./breadcrumb/breadcrumb")),
        O = B(require("./menu-select/menu-select")),
        h = B(require("./powered-by/powered-by")),
        R = B(require("./panel/panel")),
        M = B(require("./voice-search/voice-search")),
        v = B(require("./query-rule-custom-data/query-rule-custom-data")),
        _ = B(require("./query-rule-context/query-rule-context")),
        S = B(require("./index/index")),
        w = B(require("./places/places"));

    function B(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
  }, {
    "./clear-refinements/clear-refinements": "UDIH",
    "./configure/configure": "MA4S",
    "./configure-related-items/configure-related-items": "dchU",
    "./current-refinements/current-refinements": "Bopc",
    "./geo-search/geo-search": "MMlH",
    "./hierarchical-menu/hierarchical-menu": "OZm9",
    "./hits/hits": "cVgR",
    "./hits-per-page/hits-per-page": "QARU",
    "./infinite-hits/infinite-hits": "LblD",
    "./menu/menu": "hON1",
    "./refinement-list/refinement-list": "J5yn",
    "./numeric-menu/numeric-menu": "ykP3",
    "./pagination/pagination": "v92J",
    "./range-input/range-input": "q2aQ",
    "./search-box/search-box": "WF81",
    "./range-slider/range-slider": "fD7z",
    "./sort-by/sort-by": "k1WJ",
    "./rating-menu/rating-menu": "ZoNk",
    "./stats/stats": "pdcm",
    "./toggle-refinement/toggle-refinement": "gTar",
    "./analytics/analytics": "YcWU",
    "./breadcrumb/breadcrumb": "JBMw",
    "./menu-select/menu-select": "SxMP",
    "./powered-by/powered-by": "nCZh",
    "./panel/panel": "MBzk",
    "./voice-search/voice-search": "yO3j",
    "./query-rule-custom-data/query-rule-custom-data": "Ksh0",
    "./query-rule-context/query-rule-context": "bNZr",
    "./index/index": "DXmI",
    "./places/places": "YiFl"
  }],
  "RofZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = function e(_e4) {
      return '<div class="autocomplete-product">\n        <div class="autocomplete-product__image-container">\n          <img class="autocomplete-product__image" src="'.concat(_e4.image, '" />\n        </div>\n        <div class="autocomplete-product__details">\n          <h3 class="autocomplete-product__name">').concat(_e4._highlightResult.name.value, '</h3>\n          <p class="autocomplete-product__price">$').concat(_e4.price, "</p>\n        </div>\n      </div>");
    },
        t = e;

    exports.default = t;
  }, {}],
  "PCE7": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = function e(_e5) {
      return '<div class="autocomplete-product">\n      <div class="autocomplete-product__details">\n        <h3 class="autocomplete-product__name">'.concat(_e5.query, "</h3>\n      </div>\n    </div>");
    },
        t = e;

    exports.default = t;
  }, {}],
  "OuXZ": [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: !0
    }), exports.default = void 0;

    var e = a(require("instantsearch.js")),
        t = require("./helpers"),
        r = require("instantsearch.js/es/widgets"),
        s = a(require("../templates/autocomplete-product")),
        i = a(require("../templates/suggestion-template"));

    function a(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function o(e, t) {
      for (var r = 0; r < t.length; r++) {
        var s = t[r];
        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
      }
    }

    function u(e, t, r) {
      return t && o(e.prototype, t), r && o(e, r), e;
    }

    var c = require("algoliasearch"),
        l = function () {
      function t() {
        n(this, t), this._registerClient(), this._registerWidgets(), this._startSearch();
      }

      return u(t, [{
        key: "_registerClient",
        value: function value() {
          this._searchClient = c("0MKVCO6YDU", "4539771665517b84023e9077034bf98a"), this._searchInstance = (0, e.default)({
            indexName: "test_INDEX",
            searchClient: this._searchClient
          });
        }
      }, {
        key: "_registerWidgets",
        value: function value() {
          this._searchInstance.addWidgets([(0, r.configure)({
            hitsPerPage: 6
          }), (0, r.searchBox)({
            container: "#searchbox",
            placeholder: "Search for products"
          }), (0, r.hits)({
            container: "#autocomplete-hits",
            templates: {
              empty: "No results.",
              item: s.default
            }
          }), (0, r.index)({
            indexName: "demo_ecommerce_query_suggestions2"
          }).addWidgets([(0, r.hits)({
            container: "#autocomplete-suggestion-hits",
            templates: {
              empty: "No results.",
              item: i.default
            }
          }), (0, r.configure)({
            hitsPerPage: 4
          })])]);
        }
      }, {
        key: "_startSearch",
        value: function value() {
          this._searchInstance.start();
        }
      }]), t;
    }(),
        h = l;

    exports.default = h;
  }, {
    "algoliasearch": "kpCD",
    "instantsearch.js": "SiVx",
    "./helpers": "DOKG",
    "instantsearch.js/es/widgets": "VTbC",
    "../templates/autocomplete-product": "RofZ",
    "../templates/suggestion-template": "PCE7"
  }],
  "vZyd": [function (require, module, exports) {
    "use strict";

    var e = n(require("./components/autocomplete.js"));

    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function t(e, n) {
      if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
    }

    function o(e, n) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    function r(e, n, t) {
      return n && o(e.prototype, n), t && o(e, t), e;
    }

    var i = function () {
      function n() {
        t(this, n), this._initSearch(), this._registerEvents();
      }

      return r(n, [{
        key: "_initSearch",
        value: function value() {
          this.autocompleteDropdown = new e.default();
        }
      }, {
        key: "_registerEvents",
        value: function value() {
          var e = document.querySelector(".autocomplete"),
              n = document.querySelector("#searchbox input");
          n.addEventListener("click", function () {
            e.style.display = "block", console.log("click");
          }), n.addEventListener("blur", function () {
            e.style.display = "none", console.log("blur");
          });
        }
      }]), n;
    }(),
        c = new i();
  }, {
    "./components/autocomplete.js": "OuXZ"
  }]
}, {}, ["vZyd"], null);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53688" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.e4d5e824.js"], null)
//# sourceMappingURL=/app.e4d5e824.45068ac8.js.map