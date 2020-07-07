"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
  }, n.p = "", n(n.s = 0);
}([function (e, t, n) {
  "use strict";

  var o = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.createElement = void 0;
  /**
   * Dynamic Component
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports DeStagnate
   */

  var r = o(n(1)),
      i = o(n(2));

  var s = /*#__PURE__*/function (_r$default) {
    _inherits(s, _r$default);

    var _super = _createSuper(s);

    function s(e, t) {
      var _this;

      _classCallCheck(this, s);

      _this = _super.call(this), _this.props = t, _this.state = {}, _this.setState = function (e) {
        for (_this.componentWillUpdate(), Object.assign(_this.state, e); _this.parent.firstChild && _this.parent.lastChild;) {
          _this.parent.removeChild(_this.parent.lastChild);
        }

        _this.parent.appendChild(_this.render()), _this.componentDidUpdate();
      }, _this.mountComponent = function () {
        var e = _this.render();

        if (_this.componentWillMount(), !e) {
          var _e = "Expected render method to be included in component class, no render method found";
          return console.error(_e), Error(_e);
        }

        return _this.componentDidMount(), _this.parent.appendChild(e);
      }, _this.mount = _this.mountComponent, _this.unmountComponent = function () {
        _this.componentWillUnmount(), _this.parent.remove();
      }, _this.unmount = _this.unmountComponent, ["body", "html"].includes(e.tagName.toLowerCase()) && console.warn("WARNING! Avoid using ".concat(e.tagName.toLowerCase(), " as element parent, as all elements within ").concat(e.tagName.toLowerCase(), " will be removed on re-render")), _this.parent = e;
      return _this;
    }

    return s;
  }(r["default"]);

  t["default"] = s, s.createElement = i["default"], t.createElement = i["default"];
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
}, function (e, t, n) {
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
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEdBQXJDLEdBQXVDLENBQUMsQ0FBQyxTQUFGLEdBQVksR0FBQyxDQUFDLFFBQUYsRUFBbkQsR0FBZ0UsQ0FBQyxDQUFDLFdBQUYsQ0FBYyxHQUFkLENBQWhFO0FBQWpCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE0SCxZQUFVLE9BQU8sQ0FBakIsSUFBb0IsWUFBVSxPQUFPLENBQXJDLEdBQXVDLENBQUMsQ0FBQyxTQUFGLEdBQVksQ0FBQyxDQUFDLFFBQUYsRUFBbkQsR0FBZ0UsQ0FBQyxDQUFDLFdBQUYsQ0FBYyxDQUFkLENBQWhFO0FBQWlGLFdBQU8sQ0FBUDtBQUFTLEdBQXJnQjtBQUFzZ0IsQ0E3QjBXLENBQXI1QixDQUFmIiwiZmlsZSI6ImRlU3RhZ25hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERlU3RhZ25hdGU9ZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihvKXtpZih0W29dKXJldHVybiB0W29dLmV4cG9ydHM7dmFyIHI9dFtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsbiksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxvKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgciBpbiBlKW4uZChvLHIsZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxyKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjt2YXIgbz10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmNyZWF0ZUVsZW1lbnQ9dm9pZCAwO1xuLyoqXG4gKiBEeW5hbWljIENvbXBvbmVudFxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4wLjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGVcbiAqL1xuY29uc3Qgcj1vKG4oMSkpLGk9byhuKDIpKTtjbGFzcyBzIGV4dGVuZHMgci5kZWZhdWx0e2NvbnN0cnVjdG9yKGUsdCl7c3VwZXIoKSx0aGlzLnByb3BzPXQsdGhpcy5zdGF0ZT17fSx0aGlzLnNldFN0YXRlPWU9Pntmb3IodGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKCksT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLGUpO3RoaXMucGFyZW50LmZpcnN0Q2hpbGQmJnRoaXMucGFyZW50Lmxhc3RDaGlsZDspdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnQubGFzdENoaWxkKTt0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcigpKSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpfSx0aGlzLm1vdW50Q29tcG9uZW50PSgpPT57Y29uc3QgZT10aGlzLnJlbmRlcigpO2lmKHRoaXMuY29tcG9uZW50V2lsbE1vdW50KCksIWUpe2NvbnN0IGU9XCJFeHBlY3RlZCByZW5kZXIgbWV0aG9kIHRvIGJlIGluY2x1ZGVkIGluIGNvbXBvbmVudCBjbGFzcywgbm8gcmVuZGVyIG1ldGhvZCBmb3VuZFwiO3JldHVybiBjb25zb2xlLmVycm9yKGUpLEVycm9yKGUpfXJldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50KCksdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQoZSl9LHRoaXMubW91bnQ9dGhpcy5tb3VudENvbXBvbmVudCx0aGlzLnVubW91bnRDb21wb25lbnQ9KCk9Pnt0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCksdGhpcy5wYXJlbnQucmVtb3ZlKCl9LHRoaXMudW5tb3VudD10aGlzLnVubW91bnRDb21wb25lbnQsW1wiYm9keVwiLFwiaHRtbFwiXS5pbmNsdWRlcyhlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkmJmNvbnNvbGUud2FybihgV0FSTklORyEgQXZvaWQgdXNpbmcgJHtlLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gYXMgZWxlbWVudCBwYXJlbnQsIGFzIGFsbCBlbGVtZW50cyB3aXRoaW4gJHtlLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gd2lsbCBiZSByZW1vdmVkIG9uIHJlLXJlbmRlcmApLHRoaXMucGFyZW50PWV9fXQuZGVmYXVsdD1zLHMuY3JlYXRlRWxlbWVudD1pLmRlZmF1bHQsdC5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdH0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMFxuICogQGV4cG9ydHMgUHJlc2V0XG4gKiBAcGFja2FnZVxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dC5kZWZhdWx0PWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5jb21wb25lbnREaWRNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnREaWRVcGRhdGU9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbE1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGU9KCk9Pnt9LHRoaXMucmVuZGVyPSgpPT5udWxsfX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnRcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3QuZGVmYXVsdD0oZSx0LG4pPT57Y29uc3Qgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO2lmKCgoZSx0KT0+e2lmKHQpZm9yKGNvbnN0W24sb11vZiBPYmplY3QuZW50cmllcyh0KSlcInN0cmluZ1wiPT10eXBlb2Ygbz9cImlubmVySFRNTFwiPT09bj9lLmlubmVySFRNTD1vLnRvU3RyaW5nKCk6ZS5zZXRBdHRyaWJ1dGUobixvLnRvU3RyaW5nKCkpOlwib25cIj09PW4uc2xpY2UoMCwyKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgbyYmZS5hZGRFdmVudExpc3RlbmVyKG4uc2xpY2UoMikudG9Mb3dlckNhc2UoKSxvKX0pKG8sdCksbnx8MD09PW4paWYobiBpbnN0YW5jZW9mIEFycmF5KWZvcihjb25zdCBlIG9mIG4pXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlP28uaW5uZXJUZXh0PWUudG9TdHJpbmcoKTpvLmFwcGVuZENoaWxkKGUpO2Vsc2VcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/by5pbm5lclRleHQ9bi50b1N0cmluZygpOm8uYXBwZW5kQ2hpbGQobik7cmV0dXJuIG99fV0pOyJdfQ==