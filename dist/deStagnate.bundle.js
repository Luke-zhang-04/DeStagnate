"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

      if (_this = _super.call(this), _this.props = e, _this.state = {}, _this.setState = function (t) {
        try {
          for (_this.componentWillUpdate(), Object.assign(_this.state, t); _this._parent.firstChild && _this._parent.lastChild;) {
            _this._parent.removeChild(_this._parent.lastChild);
          }

          _this._parent.appendChild(_this.render()), _this.componentDidUpdate();
        } catch (t) {
          return _this.componentDidCatch(t), t;
        }
      }, _this.mountComponent = function () {
        try {
          var _t = _this.render();

          if (_this.componentWillMount(), !_t) {
            throw new Error("Expected render method to be included in component class, no render method found");
          }

          return _this.componentDidMount(), _this._parent.appendChild(_t);
        } catch (t) {
          return _this.componentDidCatch(t), t;
        }
      }, _this.mount = _this.mountComponent, _this.unmountComponent = function () {
        try {
          for (_this.componentWillUnmount(); _this._parent.firstChild && _this._parent.lastChild;) {
            _this._parent.removeChild(_this._parent.lastChild);
          }
        } catch (t) {
          _this.componentDidCatch(t);
        }
      }, _this.unmount = _this.unmountComponent, ["body", "html"].includes(t.tagName.toLowerCase())) throw new Error("WARNING! Avoid using ".concat(t.tagName.toLowerCase(), " as element parent, as all elements within ").concat(t.tagName.toLowerCase(), " will be removed on re-render"));
      _this._parent = t;
      return _possibleConstructorReturn(_this);
    }

    _createClass(s, [{
      key: "getState",
      get: function get() {
        return this.state;
      }
    }]);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlc0NvbnRlbnQiOlsidmFyIERlU3RhZ25hdGU9ZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihvKXtpZihlW29dKXJldHVybiBlW29dLmV4cG9ydHM7dmFyIHI9ZVtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsbiksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxvKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgciBpbiB0KW4uZChvLHIsZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxyKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgbz10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmNyZWF0ZUVsZW1lbnQ9dm9pZCAwO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZVxuICovXG5jb25zdCByPW8obigxKSksaT1vKG4oMikpO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZVxuICogQGNsYXNzZGVzYyBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjbGFzc1xuICogQG5hbWVzcGFjZVxuICovXG5jbGFzcyBzIGV4dGVuZHMgci5kZWZhdWx0e2NvbnN0cnVjdG9yKHQsZSl7aWYoc3VwZXIoKSx0aGlzLnByb3BzPWUsdGhpcy5zdGF0ZT17fSx0aGlzLnNldFN0YXRlPXQ9Pnt0cnl7Zm9yKHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSgpLE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSx0KTt0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCYmdGhpcy5fcGFyZW50Lmxhc3RDaGlsZDspdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpO3RoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcigpKSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpfWNhdGNoKHQpe3JldHVybiB0aGlzLmNvbXBvbmVudERpZENhdGNoKHQpLHR9fSx0aGlzLm1vdW50Q29tcG9uZW50PSgpPT57dHJ5e2NvbnN0IHQ9dGhpcy5yZW5kZXIoKTtpZih0aGlzLmNvbXBvbmVudFdpbGxNb3VudCgpLCF0KXt0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCByZW5kZXIgbWV0aG9kIHRvIGJlIGluY2x1ZGVkIGluIGNvbXBvbmVudCBjbGFzcywgbm8gcmVuZGVyIG1ldGhvZCBmb3VuZFwiKX1yZXR1cm4gdGhpcy5jb21wb25lbnREaWRNb3VudCgpLHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0KX1jYXRjaCh0KXtyZXR1cm4gdGhpcy5jb21wb25lbnREaWRDYXRjaCh0KSx0fX0sdGhpcy5tb3VudD10aGlzLm1vdW50Q29tcG9uZW50LHRoaXMudW5tb3VudENvbXBvbmVudD0oKT0+e3RyeXtmb3IodGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO3RoaXMuX3BhcmVudC5maXJzdENoaWxkJiZ0aGlzLl9wYXJlbnQubGFzdENoaWxkOyl0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCl9Y2F0Y2godCl7dGhpcy5jb21wb25lbnREaWRDYXRjaCh0KX19LHRoaXMudW5tb3VudD10aGlzLnVubW91bnRDb21wb25lbnQsW1wiYm9keVwiLFwiaHRtbFwiXS5pbmNsdWRlcyh0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkpdGhyb3cgbmV3IEVycm9yKGBXQVJOSU5HISBBdm9pZCB1c2luZyAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSBhcyBlbGVtZW50IHBhcmVudCwgYXMgYWxsIGVsZW1lbnRzIHdpdGhpbiAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSB3aWxsIGJlIHJlbW92ZWQgb24gcmUtcmVuZGVyYCk7dGhpcy5fcGFyZW50PXR9Z2V0IGdldFN0YXRlKCl7cmV0dXJuIHRoaXMuc3RhdGV9fWUuZGVmYXVsdD1zLHMuY3JlYXRlRWxlbWVudD1pLmRlZmF1bHQsZS5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgUHJlc2V0XG4gKiBAcGFja2FnZVxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS5kZWZhdWx0PWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5jb21wb25lbnREaWRDYXRjaD10PT5jb25zb2xlLmVycm9yKHQpLHRoaXMuY29tcG9uZW50RGlkTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50RGlkVXBkYXRlPSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlPSgpPT57fSx0aGlzLnJlbmRlcj0oKT0+bnVsbH19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50XG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtlLmRlZmF1bHQ9KHQsZSxuKT0+e2NvbnN0IG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtyZXR1cm4oKHQsZSk9PntpZihlKWZvcihjb25zdFtuLG9db2YgT2JqZWN0LmVudHJpZXMoZSkpXCJzdHJpbmdcIj09dHlwZW9mIG8/XCJpbm5lckhUTUxcIj09PW4/dC5pbm5lckhUTUw9by50b1N0cmluZygpOnQuc2V0QXR0cmlidXRlKG4sby50b1N0cmluZygpKTpcIm9uXCI9PT1uLnNsaWNlKDAsMikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJnQuYWRkRXZlbnRMaXN0ZW5lcihuLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksbyl9KShvLGUpLCgodCxlKT0+e2lmKGV8fDA9PT1lKWlmKGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgbiBvZiBlKVwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj90LmlubmVyVGV4dD1uLnRvU3RyaW5nKCk6dC5hcHBlbmRDaGlsZChuKTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlP3QuaW5uZXJUZXh0PWUudG9TdHJpbmcoKTp0LmFwcGVuZENoaWxkKGUpfSkobyxuKSxvfX1dKTsiXX0=