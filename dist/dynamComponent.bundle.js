"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DynamComponent = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      n.d(r, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  "use strict";
  /**
   * Dynamic Component
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports createChild
   */

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] = function (e, t, n) {
    var r = document.createElement(e);
    if (t) for (var _i = 0, _Object$entries = Object.entries(t); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          _e = _Object$entries$_i[0],
          _n = _Object$entries$_i[1];

      "innerHTML" === _e ? r.innerHTML = _n.toString() : r.setAttribute(_e, _n.toString());
    }
    if (n) if (n instanceof Array) {
      var _iterator = _createForOfIteratorHelper(n),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e2 = _step.value;
          "string" == typeof _e2 || "number" == typeof _e2 ? r.innerText = _e2.toString() : r.appendChild(_e2);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else "string" == typeof n || "number" == typeof n ? r.innerText = n.toString() : r.appendChild(n);
    return r;
  };
}, function (e, t, n) {
  "use strict";

  var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
    void 0 === r && (r = n), Object.defineProperty(e, r, {
      enumerable: !0,
      get: function get() {
        return t[n];
      }
    });
  } : function (e, t, n, r) {
    void 0 === r && (r = n), e[r] = t[n];
  }),
      i = this && this.__setModuleDefault || (Object.create ? function (e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function (e, t) {
    e["default"] = t;
  }),
      o = this && this.__importStar || function (e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) {
      "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
    }
    return i(t, e), t;
  },
      a = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.DynamComponent = void 0;
  /**
   * Dynamic Component
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports DynamComponent
   * @namespace
   */

  var s = a(n(0));

  var u = function u(e, t) {
    var _this = this;

    _classCallCheck(this, u);

    this.props = t, this._state = {}, this.componentDidMount = function () {}, this.render = function () {
      return null;
    }, this.getState = function () {
      return _this._state;
    }, this.setState = function (e) {
      for (Object.assign(_this._state, e); _this.parent.firstChild && _this.parent.lastChild;) {
        _this.parent.removeChild(_this.parent.lastChild);
      }

      _this.parent.appendChild(_this.render());
    }, this.initRender = function () {
      if (!_this.render()) throw new Error("Expected render method to be included in component class, no render method found");
      return _this.componentDidMount(), _this.parent.appendChild(_this.render());
    }, ["body", "html"].includes(e.tagName.toLowerCase()) && console.warn("WARNING! Avoid using ".concat(e.tagName.toLowerCase(), " as element parent, as all elements within ").concat(e.tagName.toLowerCase(), " will be removed on re-render")), this.parent = e;
  };

  t.DynamComponent = u, u.createChild = s["default"], t.createChild = o(n(0));
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtQ29tcG9uZW50LmJ1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksY0FBYyxHQUFDLFVBQVMsQ0FBVCxFQUFXO0FBQUMsTUFBSSxDQUFDLEdBQUMsRUFBTjs7QUFBUyxXQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWE7QUFBQyxRQUFHLENBQUMsQ0FBQyxDQUFELENBQUosRUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxPQUFaO0FBQW9CLFFBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSztBQUFDLE1BQUEsQ0FBQyxFQUFDLENBQUg7QUFBSyxNQUFBLENBQUMsRUFBQyxDQUFDLENBQVI7QUFBVSxNQUFBLE9BQU8sRUFBQztBQUFsQixLQUFYO0FBQWlDLFdBQU8sQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLElBQUwsQ0FBVSxDQUFDLENBQUMsT0FBWixFQUFvQixDQUFwQixFQUFzQixDQUFDLENBQUMsT0FBeEIsRUFBZ0MsQ0FBaEMsR0FBbUMsQ0FBQyxDQUFDLENBQUYsR0FBSSxDQUFDLENBQXhDLEVBQTBDLENBQUMsQ0FBQyxPQUFuRDtBQUEyRDs7QUFBQSxTQUFPLENBQUMsQ0FBQyxDQUFGLEdBQUksQ0FBSixFQUFNLENBQUMsQ0FBQyxDQUFGLEdBQUksQ0FBVixFQUFZLENBQUMsQ0FBQyxDQUFGLEdBQUksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLElBQUEsQ0FBQyxDQUFDLENBQUYsQ0FBSSxDQUFKLEVBQU0sQ0FBTixLQUFVLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLENBQXhCLEVBQTBCO0FBQUMsTUFBQSxVQUFVLEVBQUMsQ0FBQyxDQUFiO0FBQWUsTUFBQSxHQUFHLEVBQUM7QUFBbkIsS0FBMUIsQ0FBVjtBQUEyRCxHQUEzRixFQUE0RixDQUFDLENBQUMsQ0FBRixHQUFJLFVBQVMsQ0FBVCxFQUFX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QyxVQUFHLENBQUMsS0FBSSxDQUFDLE1BQUwsRUFBSixFQUFrQixNQUFNLElBQUksS0FBSixDQUFVLGtGQUFWLENBQU47QUFBb0csYUFBTyxLQUFJLENBQUMsaUJBQUwsSUFBeUIsS0FBSSxDQUFDLE1BQUwsQ0FBWSxXQUFaLENBQXdCLEtBQUksQ0FBQyxNQUFMLEVBQXhCLENBQWhDO0FBQXVFLEtBQXhmLEVBQXlmLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZ0IsUUFBaEIsQ0FBeUIsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxXQUFWLEVBQXpCLEtBQW1ELE9BQU8sQ0FBQyxJQUFSLGdDQUFxQyxDQUFDLENBQUMsT0FBRixDQUFVLFdBQVYsRUFBckMsd0RBQTBHLENBQUMsQ0FBQyxPQUFGLENBQVUsV0FBVixFQUExRyxtQ0FBNWlCLEVBQThzQixLQUFLLE1BQUwsR0FBWSxDQUExdEI7QUFBNHRCLEdBWC9UOztBQVdnVSxFQUFBLENBQUMsQ0FBQyxjQUFGLEdBQWlCLENBQWpCLEVBQW1CLENBQUMsQ0FBQyxXQUFGLEdBQWMsQ0FBQyxXQUFsQyxFQUEyQyxDQUFDLENBQUMsV0FBRixHQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQTFEO0FBQWlFLENBcEJpRyxDQUFyNUIsQ0FBbkIiLCJmaWxlIjoiZHluYW1Db21wb25lbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIER5bmFtQ29tcG9uZW50PWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4ocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBpPXRbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLG4pLGkubD0hMCxpLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQscil7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIGkgaW4gZSluLmQocixpLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsaSkpO3JldHVybiByfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MSl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIER5bmFtaWMgQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMFxuICogQGV4cG9ydHMgY3JlYXRlQ2hpbGRcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3QuZGVmYXVsdD0oZSx0LG4pPT57Y29uc3Qgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO2lmKHQpZm9yKGNvbnN0W2Usbl1vZiBPYmplY3QuZW50cmllcyh0KSlcImlubmVySFRNTFwiPT09ZT9yLmlubmVySFRNTD1uLnRvU3RyaW5nKCk6ci5zZXRBdHRyaWJ1dGUoZSxuLnRvU3RyaW5nKCkpO2lmKG4paWYobiBpbnN0YW5jZW9mIEFycmF5KWZvcihjb25zdCBlIG9mIG4pXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlP3IuaW5uZXJUZXh0PWUudG9TdHJpbmcoKTpyLmFwcGVuZENoaWxkKGUpO2Vsc2VcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/ci5pbm5lclRleHQ9bi50b1N0cmluZygpOnIuYXBwZW5kQ2hpbGQobik7cmV0dXJuIHJ9fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCxuLHIpe3ZvaWQgMD09PXImJihyPW4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRbbl19fSl9OmZ1bmN0aW9uKGUsdCxuLHIpe3ZvaWQgMD09PXImJihyPW4pLGVbcl09dFtuXX0pLGk9dGhpcyYmdGhpcy5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKGUsdCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pfTpmdW5jdGlvbihlLHQpe2UuZGVmYXVsdD10fSksbz10aGlzJiZ0aGlzLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24oZSl7aWYoZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PXt9O2lmKG51bGwhPWUpZm9yKHZhciBuIGluIGUpXCJkZWZhdWx0XCIhPT1uJiZPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZyKHQsZSxuKTtyZXR1cm4gaSh0LGUpLHR9LGE9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5EeW5hbUNvbXBvbmVudD12b2lkIDA7XG4vKipcbiAqIER5bmFtaWMgQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMFxuICogQGV4cG9ydHMgRHluYW1Db21wb25lbnRcbiAqIEBuYW1lc3BhY2VcbiAqL1xuY29uc3Qgcz1hKG4oMCkpO2NsYXNzIHV7Y29uc3RydWN0b3IoZSx0KXt0aGlzLnByb3BzPXQsdGhpcy5fc3RhdGU9e30sdGhpcy5jb21wb25lbnREaWRNb3VudD0oKT0+e30sdGhpcy5yZW5kZXI9KCk9Pm51bGwsdGhpcy5nZXRTdGF0ZT0oKT0+dGhpcy5fc3RhdGUsdGhpcy5zZXRTdGF0ZT1lPT57Zm9yKE9iamVjdC5hc3NpZ24odGhpcy5fc3RhdGUsZSk7dGhpcy5wYXJlbnQuZmlyc3RDaGlsZCYmdGhpcy5wYXJlbnQubGFzdENoaWxkOyl0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLnBhcmVudC5sYXN0Q2hpbGQpO3RoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKCkpfSx0aGlzLmluaXRSZW5kZXI9KCk9PntpZighdGhpcy5yZW5kZXIoKSl0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCByZW5kZXIgbWV0aG9kIHRvIGJlIGluY2x1ZGVkIGluIGNvbXBvbmVudCBjbGFzcywgbm8gcmVuZGVyIG1ldGhvZCBmb3VuZFwiKTtyZXR1cm4gdGhpcy5jb21wb25lbnREaWRNb3VudCgpLHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKCkpfSxbXCJib2R5XCIsXCJodG1sXCJdLmluY2x1ZGVzKGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSYmY29uc29sZS53YXJuKGBXQVJOSU5HISBBdm9pZCB1c2luZyAke2UudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSBhcyBlbGVtZW50IHBhcmVudCwgYXMgYWxsIGVsZW1lbnRzIHdpdGhpbiAke2UudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSB3aWxsIGJlIHJlbW92ZWQgb24gcmUtcmVuZGVyYCksdGhpcy5wYXJlbnQ9ZX19dC5EeW5hbUNvbXBvbmVudD11LHUuY3JlYXRlQ2hpbGQ9cy5kZWZhdWx0LHQuY3JlYXRlQ2hpbGQ9byhuKDApKX1dKTsiXX0=