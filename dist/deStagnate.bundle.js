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
        for (_this.componentWillUpdate(), Object.assign(_this.state, t); _this.parent.firstChild && _this.parent.lastChild;) {
          _this.parent.removeChild(_this.parent.lastChild);
        }

        _this.parent.appendChild(_this.render()), _this.componentDidUpdate();
      }, _this.mountComponent = function () {
        var t = _this.render();

        if (_this.componentWillMount(), !t) {
          var _t = "Expected render method to be included in component class, no render method found";
          return console.error(_t), Error(_t);
        }

        return _this.componentDidMount(), _this.parent.appendChild(t);
      }, _this.mount = _this.mountComponent, _this.unmountComponent = function () {
        for (_this.componentWillUnmount(); _this.parent.firstChild && _this.parent.lastChild;) {
          _this.parent.removeChild(_this.parent.lastChild);
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

      this.componentDidMount = function () {}, this.componentDidUpdate = function () {}, this.componentWillMount = function () {}, this.componentWillUnmount = function () {}, this.componentWillUpdate = function () {}, this.render = function () {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUgsRUFBTztBQUFDLFVBQUcsQ0FBQyxJQUFFLE1BQUksQ0FBVixFQUFZLElBQUcsQ0FBQyxZQUFZLEtBQWhCO0FBQUEsbURBQXFDLENBQXJDO0FBQUE7O0FBQUE7QUFBc0I7QUFBQSxnQkFBVSxHQUFWO0FBQWlCLHdCQUFVLE9BQU8sR0FBakIsSUFBb0IsWUFBVSxPQUFPLEdBQXJDLEdBQXVDLENBQUMsQ0FBQyxTQUFGLEdBQVksR0FBQyxDQUFDLFFBQUYsRUFBbkQsR0FBZ0UsQ0FBQyxDQUFDLFdBQUYsQ0FBYyxHQUFkLENBQWhFO0FBQWpCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE0SCxZQUFVLE9BQU8sQ0FBakIsSUFBb0IsWUFBVSxPQUFPLENBQXJDLEdBQXVDLENBQUMsQ0FBQyxTQUFGLEdBQVksQ0FBQyxDQUFDLFFBQUYsRUFBbkQsR0FBZ0UsQ0FBQyxDQUFDLFdBQUYsQ0FBYyxDQUFkLENBQWhFO0FBQWlGLEtBQWxPLENBQW9PLENBQXBPLEVBQXNPLENBQXRPLENBQTdPLEVBQXNkLENBQTVkO0FBQThkLEdBQXBoQjtBQUFxaEIsQ0ExQzJWLENBQXI1QixDQUFmIiwiZmlsZSI6ImRlU3RhZ25hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERlU3RhZ25hdGU9ZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihvKXtpZihlW29dKXJldHVybiBlW29dLmV4cG9ydHM7dmFyIHI9ZVtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsbiksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxvKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgciBpbiB0KW4uZChvLHIsZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxyKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgbz10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmNyZWF0ZUVsZW1lbnQ9dm9pZCAwO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZVxuICovXG5jb25zdCByPW8obigxKSksaT1vKG4oMikpO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZVxuICogQGNsYXNzZGVzYyBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjbGFzc1xuICogQG5hbWVzcGFjZVxuICovXG5jbGFzcyBzIGV4dGVuZHMgci5kZWZhdWx0e2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIoKSx0aGlzLnByb3BzPWUsdGhpcy5zdGF0ZT17fSx0aGlzLnNldFN0YXRlPXQ9Pntmb3IodGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKCksT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLHQpO3RoaXMucGFyZW50LmZpcnN0Q2hpbGQmJnRoaXMucGFyZW50Lmxhc3RDaGlsZDspdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnQubGFzdENoaWxkKTt0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcigpKSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpfSx0aGlzLm1vdW50Q29tcG9uZW50PSgpPT57Y29uc3QgdD10aGlzLnJlbmRlcigpO2lmKHRoaXMuY29tcG9uZW50V2lsbE1vdW50KCksIXQpe2NvbnN0IHQ9XCJFeHBlY3RlZCByZW5kZXIgbWV0aG9kIHRvIGJlIGluY2x1ZGVkIGluIGNvbXBvbmVudCBjbGFzcywgbm8gcmVuZGVyIG1ldGhvZCBmb3VuZFwiO3JldHVybiBjb25zb2xlLmVycm9yKHQpLEVycm9yKHQpfXJldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50KCksdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodCl9LHRoaXMubW91bnQ9dGhpcy5tb3VudENvbXBvbmVudCx0aGlzLnVubW91bnRDb21wb25lbnQ9KCk9Pntmb3IodGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO3RoaXMucGFyZW50LmZpcnN0Q2hpbGQmJnRoaXMucGFyZW50Lmxhc3RDaGlsZDspdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnQubGFzdENoaWxkKX0sdGhpcy51bm1vdW50PXRoaXMudW5tb3VudENvbXBvbmVudCxbXCJib2R5XCIsXCJodG1sXCJdLmluY2x1ZGVzKHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSYmY29uc29sZS53YXJuKGBXQVJOSU5HISBBdm9pZCB1c2luZyAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSBhcyBlbGVtZW50IHBhcmVudCwgYXMgYWxsIGVsZW1lbnRzIHdpdGhpbiAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSB3aWxsIGJlIHJlbW92ZWQgb24gcmUtcmVuZGVyYCksdGhpcy5wYXJlbnQ9dH19ZS5kZWZhdWx0PXMscy5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdCxlLmNyZWF0ZUVsZW1lbnQ9aS5kZWZhdWx0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAZXhwb3J0cyBQcmVzZXRcbiAqIEBwYWNrYWdlXG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtlLmRlZmF1bHQ9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmNvbXBvbmVudERpZE1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZT0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZT0oKT0+e30sdGhpcy5yZW5kZXI9KCk9Pm51bGx9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudFxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS5kZWZhdWx0PSh0LGUsbik9Pntjb25zdCBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7cmV0dXJuKCh0LGUpPT57aWYoZSlmb3IoY29uc3RbbixvXW9mIE9iamVjdC5lbnRyaWVzKGUpKVwic3RyaW5nXCI9PXR5cGVvZiBvP1wiaW5uZXJIVE1MXCI9PT1uP3QuaW5uZXJIVE1MPW8udG9TdHJpbmcoKTp0LnNldEF0dHJpYnV0ZShuLG8udG9TdHJpbmcoKSk6XCJvblwiPT09bi5zbGljZSgwLDIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBvJiZ0LmFkZEV2ZW50TGlzdGVuZXIobi5zbGljZSgyKS50b0xvd2VyQ2FzZSgpLG8pfSkobyxlKSwoKHQsZSk9PntpZihlfHwwPT09ZSlpZihlIGluc3RhbmNlb2YgQXJyYXkpZm9yKGNvbnN0IG4gb2YgZSlcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/dC5pbm5lclRleHQ9bi50b1N0cmluZygpOnQuYXBwZW5kQ2hpbGQobik7ZWxzZVwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZT90LmlubmVyVGV4dD1lLnRvU3RyaW5nKCk6dC5hcHBlbmRDaGlsZChlKX0pKG8sbiksb319XSk7Il19