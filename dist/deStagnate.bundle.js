"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DeStagnate = function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
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
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return o;
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
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports createElement
   */

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] = function (e, t, n) {
    var o = document.createElement(e);
    if (function (e, t) {
      if (t) for (var _i = 0, _Object$entries = Object.entries(t); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            _n = _Object$entries$_i[0],
            _o = _Object$entries$_i[1];

        "string" == typeof _o ? "innerHTML" === _n ? e.innerHTML = _o.toString() : e.setAttribute(_n, _o.toString()) : "on" === _n.slice(0, 2) && "function" == typeof _o && e.addEventListener(_n.slice(2).toLowerCase(), _o);
      }
    }(o, t), n || 0 === n) if (n instanceof Array) {
      var _iterator = _createForOfIteratorHelper(n),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e2 = _step.value;
          "string" == typeof _e2 || "number" == typeof _e2 ? o.innerText = _e2.toString() : o.appendChild(_e2);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else "string" == typeof n || "number" == typeof n ? o.innerText = n.toString() : o.appendChild(n);
    return o;
  };
}, function (e, t, n) {
  "use strict";

  var o = this && this.__createBinding || (Object.create ? function (e, t, n, o) {
    void 0 === o && (o = n), Object.defineProperty(e, o, {
      enumerable: !0,
      get: function get() {
        return t[n];
      }
    });
  } : function (e, t, n, o) {
    void 0 === o && (o = n), e[o] = t[n];
  }),
      r = this && this.__setModuleDefault || (Object.create ? function (e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function (e, t) {
    e["default"] = t;
  }),
      i = this && this.__importStar || function (e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) {
      "default" !== n && Object.hasOwnProperty.call(e, n) && o(t, e, n);
    }
    return r(t, e), t;
  },
      s = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.DeStagnate = void 0;
  /**
   * Dynamic Component
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports DeStagnate
   */

  var u = s(n(2)),
      a = s(n(0));

  var l = /*#__PURE__*/function (_u$default) {
    _inherits(l, _u$default);

    var _super = _createSuper(l);

    function l(e, t) {
      var _this;

      _classCallCheck(this, l);

      _this = _super.call(this), _this.props = t, _this.state = {}, _this.setState = function (e) {
        for (_this.componentWillUpdate(), Object.assign(_this.state, e); _this.parent.firstChild && _this.parent.lastChild;) {
          _this.parent.removeChild(_this.parent.lastChild);
        }

        _this.parent.appendChild(_this.render()), _this.componentDidUpdate();
      }, _this.mountComponent = function () {
        var e = _this.render();

        if (_this.componentWillMount(), !e) {
          var _e3 = "Expected render method to be included in component class, no render method found";
          return console.error(_e3), Error(_e3);
        }

        return _this.componentDidMount(), _this.parent.appendChild(e);
      }, _this.mount = _this.mountComponent, _this.unmountComponent = function () {
        _this.componentWillUnmount(), _this.parent.remove();
      }, _this.unmount = _this.unmountComponent, ["body", "html"].includes(e.tagName.toLowerCase()) && console.warn("WARNING! Avoid using ".concat(e.tagName.toLowerCase(), " as element parent, as all elements within ").concat(e.tagName.toLowerCase(), " will be removed on re-render")), _this.parent = e;
      return _this;
    }

    return l;
  }(u["default"]);

  t.DeStagnate = l, l.createElement = a["default"], t.createElement = i(n(0));
}, function (e, t, n) {
  "use strict";
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports Preset
   * @package
   */

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] = /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);

      this.componentDidMount = function () {}, this.componentDidUpdate = function () {}, this.componentWillMount = function () {}, this.componentWillUnmount = function () {}, this.componentWillUpdate = function () {}, this.render = function () {
        return null;
      };
    }

    return _class;
  }();
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUYsR0FBYSxDQUFiLEVBQWUsQ0FBQyxDQUFDLGFBQUYsR0FBZ0IsQ0FBQyxXQUFoQyxFQUF5QyxDQUFDLENBQUMsYUFBRixHQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUExRDtBQUFpRSxDQW5CN0csRUFtQjhHLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQztBQUNsaUM7Ozs7Ozs7Ozs7O0FBU0csRUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDLElBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixHQUFyQzs7QUFBaUQsRUFBQSxDQUFDLFdBQUQ7QUFBZ0Isc0JBQWE7QUFBQTs7QUFBQyxXQUFLLGlCQUFMLEdBQXVCLFlBQUksQ0FBRSxDQUE3QixFQUE4QixLQUFLLGtCQUFMLEdBQXdCLFlBQUksQ0FBRSxDQUE1RCxFQUE2RCxLQUFLLGtCQUFMLEdBQXdCLFlBQUksQ0FBRSxDQUEzRixFQUE0RixLQUFLLG9CQUFMLEdBQTBCLFlBQUksQ0FBRSxDQUE1SCxFQUE2SCxLQUFLLG1CQUFMLEdBQXlCLFlBQUksQ0FBRSxDQUE1SixFQUE2SixLQUFLLE1BQUwsR0FBWTtBQUFBLGVBQUksSUFBSjtBQUFBLE9BQXpLO0FBQWtMOztBQUFoTjtBQUFBO0FBQWtOLENBN0I4cEIsQ0FBcjVCLENBQWYiLCJmaWxlIjoiZGVTdGFnbmF0ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGVTdGFnbmF0ZT1mdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKG8pe2lmKHRbb10pcmV0dXJuIHRbb10uZXhwb3J0czt2YXIgcj10W29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxuKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LG8pe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciByIGluIGUpbi5kKG8scixmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLHIpKTtyZXR1cm4gb30sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTEpfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudFxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dC5kZWZhdWx0PShlLHQsbik9Pntjb25zdCBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7aWYoKChlLHQpPT57aWYodClmb3IoY29uc3RbbixvXW9mIE9iamVjdC5lbnRyaWVzKHQpKVwic3RyaW5nXCI9PXR5cGVvZiBvP1wiaW5uZXJIVE1MXCI9PT1uP2UuaW5uZXJIVE1MPW8udG9TdHJpbmcoKTplLnNldEF0dHJpYnV0ZShuLG8udG9TdHJpbmcoKSk6XCJvblwiPT09bi5zbGljZSgwLDIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBvJiZlLmFkZEV2ZW50TGlzdGVuZXIobi5zbGljZSgyKS50b0xvd2VyQ2FzZSgpLG8pfSkobyx0KSxufHwwPT09bilpZihuIGluc3RhbmNlb2YgQXJyYXkpZm9yKGNvbnN0IGUgb2YgbilcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGU/by5pbm5lclRleHQ9ZS50b1N0cmluZygpOm8uYXBwZW5kQ2hpbGQoZSk7ZWxzZVwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj9vLmlubmVyVGV4dD1uLnRvU3RyaW5nKCk6by5hcHBlbmRDaGlsZChuKTtyZXR1cm4gb319LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgbz10aGlzJiZ0aGlzLl9fY3JlYXRlQmluZGluZ3x8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0LG4sbyl7dm9pZCAwPT09byYmKG89biksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbyx7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdFtuXX19KX06ZnVuY3Rpb24oZSx0LG4sbyl7dm9pZCAwPT09byYmKG89biksZVtvXT10W25dfSkscj10aGlzJiZ0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdHx8KE9iamVjdC5jcmVhdGU/ZnVuY3Rpb24oZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSl9OmZ1bmN0aW9uKGUsdCl7ZS5kZWZhdWx0PXR9KSxpPXRoaXMmJnRoaXMuX19pbXBvcnRTdGFyfHxmdW5jdGlvbihlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9e307aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSlcImRlZmF1bHRcIiE9PW4mJk9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbikmJm8odCxlLG4pO3JldHVybiByKHQsZSksdH0scz10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LkRlU3RhZ25hdGU9dm9pZCAwO1xuLyoqXG4gKiBEeW5hbWljIENvbXBvbmVudFxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4wLjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGVcbiAqL1xuY29uc3QgdT1zKG4oMikpLGE9cyhuKDApKTtjbGFzcyBsIGV4dGVuZHMgdS5kZWZhdWx0e2NvbnN0cnVjdG9yKGUsdCl7c3VwZXIoKSx0aGlzLnByb3BzPXQsdGhpcy5zdGF0ZT17fSx0aGlzLnNldFN0YXRlPWU9Pntmb3IodGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKCksT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLGUpO3RoaXMucGFyZW50LmZpcnN0Q2hpbGQmJnRoaXMucGFyZW50Lmxhc3RDaGlsZDspdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnQubGFzdENoaWxkKTt0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcigpKSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpfSx0aGlzLm1vdW50Q29tcG9uZW50PSgpPT57Y29uc3QgZT10aGlzLnJlbmRlcigpO2lmKHRoaXMuY29tcG9uZW50V2lsbE1vdW50KCksIWUpe2NvbnN0IGU9XCJFeHBlY3RlZCByZW5kZXIgbWV0aG9kIHRvIGJlIGluY2x1ZGVkIGluIGNvbXBvbmVudCBjbGFzcywgbm8gcmVuZGVyIG1ldGhvZCBmb3VuZFwiO3JldHVybiBjb25zb2xlLmVycm9yKGUpLEVycm9yKGUpfXJldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50KCksdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoZSl9LHRoaXMubW91bnQ9dGhpcy5tb3VudENvbXBvbmVudCx0aGlzLnVubW91bnRDb21wb25lbnQ9KCk9Pnt0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCksdGhpcy5wYXJlbnQucmVtb3ZlKCl9LHRoaXMudW5tb3VudD10aGlzLnVubW91bnRDb21wb25lbnQsW1wiYm9keVwiLFwiaHRtbFwiXS5pbmNsdWRlcyhlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkmJmNvbnNvbGUud2FybihgV0FSTklORyEgQXZvaWQgdXNpbmcgJHtlLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gYXMgZWxlbWVudCBwYXJlbnQsIGFzIGFsbCBlbGVtZW50cyB3aXRoaW4gJHtlLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gd2lsbCBiZSByZW1vdmVkIG9uIHJlLXJlbmRlcmApLHRoaXMucGFyZW50PWV9fXQuRGVTdGFnbmF0ZT1sLGwuY3JlYXRlRWxlbWVudD1hLmRlZmF1bHQsdC5jcmVhdGVFbGVtZW50PWkobigwKSl9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4wLjBcbiAqIEBleHBvcnRzIFByZXNldFxuICogQHBhY2thZ2VcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3QuZGVmYXVsdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuY29tcG9uZW50RGlkTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50RGlkVXBkYXRlPSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlPSgpPT57fSx0aGlzLnJlbmRlcj0oKT0+bnVsbH19fV0pOyJdfQ==