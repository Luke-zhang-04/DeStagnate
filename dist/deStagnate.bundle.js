"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DeStagnate = function (t) {
  var e = {};

  function n(o) {
    if (e[o]) return e[o].exports;
    var r = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  return n.m = t, n.c = e, n.d = function (t, e, o) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) {
      n.d(o, r, function (e) {
        return t[e];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 0);
}([function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.createElement = void 0;
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.1.0
   * @exports DeStagnate
   */

  var r = o(n(1)),
      i = o(n(2));
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.1.0
   * @exports DeStagnate
   * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @class
   * @namespace
   */

  var s = /*#__PURE__*/function (_r$default) {
    _inherits(s, _r$default);

    var _super = _createSuper(s);

    function s(t, e) {
      var _this;

      _classCallCheck(this, s);

      _this = _super.call(this), _this.props = e, _this.state = {}, _this.setState = function (t) {
        try {
          for (_this.componentWillUpdate(), Object.assign(_this.state, t); _this.parent.firstChild && _this.parent.lastChild;) {
            _this.parent.removeChild(_this.parent.lastChild);
          }

          _this.parent.appendChild(_this.render()), _this.componentDidUpdate();
        } catch (t) {
          return _this.componentDidCatch(t), t;
        }
      }, _this.mountComponent = function () {
        try {
          var _t = _this.render();

          if (_this.componentWillMount(), !_t) {
            var _t2 = "Expected render method to be included in component class, no render method found";
            return console.error(_t2), Error(_t2);
          }

          return _this.componentDidMount(), _this.parent.appendChild(_t);
        } catch (t) {
          return _this.componentDidCatch(t), t;
        }
      }, _this.mount = _this.mountComponent, _this.unmountComponent = function () {
        try {
          for (_this.componentWillUnmount(); _this.parent.firstChild && _this.parent.lastChild;) {
            _this.parent.removeChild(_this.parent.lastChild);
          }
        } catch (t) {
          _this.componentDidCatch(t);
        }
      }, _this.unmount = _this.unmountComponent, ["body", "html"].includes(t.tagName.toLowerCase()) && console.warn("WARNING! Avoid using ".concat(t.tagName.toLowerCase(), " as element parent, as all elements within ").concat(t.tagName.toLowerCase(), " will be removed on re-render")), _this.parent = t;
      return _this;
    }

    return s;
  }(r["default"]);

  e["default"] = s, s.createElement = i["default"], e.createElement = i["default"];
}, function (t, e, n) {
  "use strict";
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.1.0
   * @exports Preset
   * @package
   */

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  e["default"] = /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);

      this.componentDidCatch = function (t) {
        return console.error(t);
      }, this.componentDidMount = function () {}, this.componentDidUpdate = function () {}, this.componentWillMount = function () {}, this.componentWillUnmount = function () {}, this.componentWillUpdate = function () {}, this.render = function () {
        return null;
      };
    }

    return _class;
  }();
}, function (t, e, n) {
  "use strict";
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.1.0
   * @exports createElement
   */

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  e["default"] = function (t, e, n) {
    var o = document.createElement(t);
    return function (t, e) {
      if (e) for (var _i = 0, _Object$entries = Object.entries(e); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            _n = _Object$entries$_i[0],
            _o = _Object$entries$_i[1];

        "string" == typeof _o ? "innerHTML" === _n ? t.innerHTML = _o.toString() : t.setAttribute(_n, _o.toString()) : "on" === _n.slice(0, 2) && "function" == typeof _o && t.addEventListener(_n.slice(2).toLowerCase(), _o);
      }
    }(o, e), function (t, e) {
      if (e || 0 === e) if (e instanceof Array) {
        var _iterator = _createForOfIteratorHelper(e),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _n2 = _step.value;
            "string" == typeof _n2 || "number" == typeof _n2 ? t.innerText = _n2.toString() : t.appendChild(_n2);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else "string" == typeof e || "number" == typeof e ? t.innerText = e.toString() : t.appendChild(e);
    }(o, n), o;
  };
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbInZhciBEZVN0YWduYXRlPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4obyl7aWYoZVtvXSlyZXR1cm4gZVtvXS5leHBvcnRzO3ZhciByPWVbb109e2k6byxsOiExLGV4cG9ydHM6e319O3JldHVybiB0W29dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLG4pLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUsbyl7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0Om99KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgbz1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihvKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIHIgaW4gdCluLmQobyxyLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwscikpO3JldHVybiBvfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9MCl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5jcmVhdGVFbGVtZW50PXZvaWQgMDtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGVcbiAqL1xuY29uc3Qgcj1vKG4oMSkpLGk9byhuKDIpKTtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGVcbiAqIEBjbGFzc2Rlc2MgQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY2xhc3NcbiAqIEBuYW1lc3BhY2VcbiAqL1xuY2xhc3MgcyBleHRlbmRzIHIuZGVmYXVsdHtjb25zdHJ1Y3Rvcih0LGUpe3N1cGVyKCksdGhpcy5wcm9wcz1lLHRoaXMuc3RhdGU9e30sdGhpcy5zZXRTdGF0ZT10PT57dHJ5e2Zvcih0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUoKSxPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsdCk7dGhpcy5wYXJlbnQuZmlyc3RDaGlsZCYmdGhpcy5wYXJlbnQubGFzdENoaWxkOyl0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLnBhcmVudC5sYXN0Q2hpbGQpO3RoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKCkpLHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCl9Y2F0Y2godCl7cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2godCksdH19LHRoaXMubW91bnRDb21wb25lbnQ9KCk9Pnt0cnl7Y29uc3QgdD10aGlzLnJlbmRlcigpO2lmKHRoaXMuY29tcG9uZW50V2lsbE1vdW50KCksIXQpe2NvbnN0IHQ9XCJFeHBlY3RlZCByZW5kZXIgbWV0aG9kIHRvIGJlIGluY2x1ZGVkIGluIGNvbXBvbmVudCBjbGFzcywgbm8gcmVuZGVyIG1ldGhvZCBmb3VuZFwiO3JldHVybiBjb25zb2xlLmVycm9yKHQpLEVycm9yKHQpfXJldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50KCksdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodCl9Y2F0Y2godCl7cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2godCksdH19LHRoaXMubW91bnQ9dGhpcy5tb3VudENvbXBvbmVudCx0aGlzLnVubW91bnRDb21wb25lbnQ9KCk9Pnt0cnl7Zm9yKHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTt0aGlzLnBhcmVudC5maXJzdENoaWxkJiZ0aGlzLnBhcmVudC5sYXN0Q2hpbGQ7KXRoaXMucGFyZW50LnJlbW92ZUNoaWxkKHRoaXMucGFyZW50Lmxhc3RDaGlsZCl9Y2F0Y2godCl7dGhpcy5jb21wb25lbnREaWRDYXRjaCh0KX19LHRoaXMudW5tb3VudD10aGlzLnVubW91bnRDb21wb25lbnQsW1wiYm9keVwiLFwiaHRtbFwiXS5pbmNsdWRlcyh0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkmJmNvbnNvbGUud2FybihgV0FSTklORyEgQXZvaWQgdXNpbmcgJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gYXMgZWxlbWVudCBwYXJlbnQsIGFzIGFsbCBlbGVtZW50cyB3aXRoaW4gJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gd2lsbCBiZSByZW1vdmVkIG9uIHJlLXJlbmRlcmApLHRoaXMucGFyZW50PXR9fWUuZGVmYXVsdD1zLHMuY3JlYXRlRWxlbWVudD1pLmRlZmF1bHQsZS5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgUHJlc2V0XG4gKiBAcGFja2FnZVxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS5kZWZhdWx0PWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5jb21wb25lbnREaWRDYXRjaD10PT5jb25zb2xlLmVycm9yKHQpLHRoaXMuY29tcG9uZW50RGlkTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50RGlkVXBkYXRlPSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlPSgpPT57fSx0aGlzLnJlbmRlcj0oKT0+bnVsbH19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50XG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtlLmRlZmF1bHQ9KHQsZSxuKT0+e2NvbnN0IG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtyZXR1cm4oKHQsZSk9PntpZihlKWZvcihjb25zdFtuLG9db2YgT2JqZWN0LmVudHJpZXMoZSkpXCJzdHJpbmdcIj09dHlwZW9mIG8/XCJpbm5lckhUTUxcIj09PW4/dC5pbm5lckhUTUw9by50b1N0cmluZygpOnQuc2V0QXR0cmlidXRlKG4sby50b1N0cmluZygpKTpcIm9uXCI9PT1uLnNsaWNlKDAsMikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJnQuYWRkRXZlbnRMaXN0ZW5lcihuLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksbyl9KShvLGUpLCgodCxlKT0+e2lmKGV8fDA9PT1lKWlmKGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgbiBvZiBlKVwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj90LmlubmVyVGV4dD1uLnRvU3RyaW5nKCk6dC5hcHBlbmRDaGlsZChuKTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlP3QuaW5uZXJUZXh0PWUudG9TdHJpbmcoKTp0LmFwcGVuZENoaWxkKGUpfSkobyxuKSxvfX1dKTsiXX0=