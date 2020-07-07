"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DynamComponent = function (t) {
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
  }, n.p = "", n(n.s = 1);
}([function (t, e, n) {
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

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  e["default"] = function (t, e, n) {
    var o = document.createElement(t);
    if (e) for (var _i = 0, _Object$entries = Object.entries(e); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          _t = _Object$entries$_i[0],
          _n = _Object$entries$_i[1];

      "innerHTML" === _t ? o.innerHTML = _n.toString() : o.setAttribute(_t, _n.toString());
    }
    if (n || 0 === n) if (n instanceof Array) {
      var _iterator = _createForOfIteratorHelper(n),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t2 = _step.value;
          "string" == typeof _t2 || "number" == typeof _t2 ? o.innerText = _t2.toString() : o.appendChild(_t2);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else "string" == typeof n || "number" == typeof n ? o.innerText = n.toString() : o.appendChild(n);
    return o;
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__createBinding || (Object.create ? function (t, e, n, o) {
    void 0 === o && (o = n), Object.defineProperty(t, o, {
      enumerable: !0,
      get: function get() {
        return e[n];
      }
    });
  } : function (t, e, n, o) {
    void 0 === o && (o = n), t[o] = e[n];
  }),
      r = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    });
  } : function (t, e) {
    t["default"] = e;
  }),
      i = this && this.__importStar || function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) {
      "default" !== n && Object.hasOwnProperty.call(t, n) && o(e, t, n);
    }
    return r(e, t), e;
  },
      s = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.DynamComponent = void 0;
  /**
   * Dynamic Component
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports DynamComponent
   */

  var u = s(n(2)),
      a = s(n(0));

  var l = /*#__PURE__*/function (_u$default) {
    _inherits(l, _u$default);

    var _super = _createSuper(l);

    function l(t, e) {
      var _this;

      _classCallCheck(this, l);

      _this = _super.call(this), _this.props = e, _this.state = {}, _this.setState = function (t) {
        for (_this.componentWillUpdate(), Object.assign(_this.state, t); _this.parent.firstChild && _this.parent.lastChild;) {
          _this.parent.removeChild(_this.parent.lastChild);
        }

        _this.parent.appendChild(_this.render()), _this.componentDidUpdate();
      }, _this.mountComponent = function () {
        console.log(_this.state);

        var t = _this.render();

        if (_this.componentWillMount(), !t) throw new Error("Expected render method to be included in component class, no render method found");
        return _this.componentDidMount(), _this.parent.appendChild(t);
      }, _this.mount = _this.mountComponent, _this.unmountComponent = function () {
        _this.componentWillUnmount(), _this.parent.remove();
      }, _this.unmount = _this.unmountComponent, ["body", "html"].includes(t.tagName.toLowerCase()) && console.warn("WARNING! Avoid using ".concat(t.tagName.toLowerCase(), " as element parent, as all elements within ").concat(t.tagName.toLowerCase(), " will be removed on re-render")), _this.parent = t;
      return _this;
    }

    return l;
  }(u["default"]);

  e.DynamComponent = l, l.createChild = a["default"], e.createChild = i(n(0));
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  e["default"] =
  /*#__PURE__*/

  /**
   * Dynamic Component
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports Preset
   * @package
   */
  function () {
    function _class() {
      _classCallCheck(this, _class);

      this.componentDidMount = function () {}, this.componentDidUpdate = function () {}, this.componentWillMount = function () {}, this.componentWillUnmount = function () {}, this.componentWillUpdate = function () {}, this.render = function () {
        return null;
      };
    }

    return _class;
  }();
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtQ29tcG9uZW50LmJ1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxjQUFjLEdBQUMsVUFBUyxDQUFULEVBQVc7QUFBQyxNQUFJLENBQUMsR0FBQyxFQUFOOztBQUFTLFdBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLFFBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBSixFQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLE9BQVo7QUFBb0IsUUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLO0FBQUMsTUFBQSxDQUFDLEVBQUMsQ0FBSDtBQUFLLE1BQUEsQ0FBQyxFQUFDLENBQUMsQ0FBUjtBQUFVLE1BQUEsT0FBTyxFQUFDO0FBQWxCLEtBQVg7QUFBaUMsV0FBTyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssSUFBTCxDQUFVLENBQUMsQ0FBQyxPQUFaLEVBQW9CLENBQXBCLEVBQXNCLENBQUMsQ0FBQyxPQUF4QixFQUFnQyxDQUFoQyxHQUFtQyxDQUFDLENBQUMsQ0FBRixHQUFJLENBQUMsQ0FBeEMsRUFBMEMsQ0FBQyxDQUFDLE9BQW5EO0FBQTJEOztBQUFBLFNBQU8sQ0FBQyxDQUFDLENBQUYsR0FBSSxDQUFKLEVBQU0sQ0FBQyxDQUFDLENBQUYsR0FBSSxDQUFWLEVBQVksQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsSUFBQSxDQUFDLENBQUMsQ0FBRixDQUFJLENBQUosRUFBTSxDQUFOLEtBQVUsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsRUFBMEI7QUFBQyxNQUFBLFVBQVUsRUFBQyxDQUFDLENBQWI7QUFBZSxNQUFBLEdBQUcsRUFBQztBQUFuQixLQUExQixDQUFWO0FBQTJELEdBQTNGLEVBQTRGLENBQUMsQ0FBQyxDQUFGLEdBQUks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QUFBLENBQUMsV0FBRDtBQUFBOztBQUMvbEM7Ozs7Ozs7Ozs7QUFEK2xDO0FBV3psQyxzQkFBYTtBQUFBOztBQUFDLFdBQUssaUJBQUwsR0FBdUIsWUFBSSxDQUFFLENBQTdCLEVBQThCLEtBQUssa0JBQUwsR0FBd0IsWUFBSSxDQUFFLENBQTVELEVBQTZELEtBQUssa0JBQUwsR0FBd0IsWUFBSSxDQUFFLENBQTNGLEVBQTRGLEtBQUssb0JBQUwsR0FBMEIsWUFBSSxDQUFFLENBQTVILEVBQTZILEtBQUssbUJBQUwsR0FBeUIsWUFBSSxDQUFFLENBQTVKLEVBQTZKLEtBQUssTUFBTCxHQUFZO0FBQUEsZUFBSSxJQUFKO0FBQUEsT0FBeks7QUFBa0w7O0FBWHk1QjtBQUFBO0FBV3Y1QixDQTlCZ3VCLENBQXI1QixDQUFuQiIsImZpbGUiOiJkeW5hbUNvbXBvbmVudC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRHluYW1Db21wb25lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihvKXtpZihlW29dKXJldHVybiBlW29dLmV4cG9ydHM7dmFyIHI9ZVtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsbiksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxvKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgciBpbiB0KW4uZChvLHIsZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxyKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRHluYW1pYyBDb21wb25lbnRcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVDaGlsZFxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS5kZWZhdWx0PSh0LGUsbik9Pntjb25zdCBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7aWYoZSlmb3IoY29uc3RbdCxuXW9mIE9iamVjdC5lbnRyaWVzKGUpKVwiaW5uZXJIVE1MXCI9PT10P28uaW5uZXJIVE1MPW4udG9TdHJpbmcoKTpvLnNldEF0dHJpYnV0ZSh0LG4udG9TdHJpbmcoKSk7aWYobnx8MD09PW4paWYobiBpbnN0YW5jZW9mIEFycmF5KWZvcihjb25zdCB0IG9mIG4pXCJzdHJpbmdcIj09dHlwZW9mIHR8fFwibnVtYmVyXCI9PXR5cGVvZiB0P28uaW5uZXJUZXh0PXQudG9TdHJpbmcoKTpvLmFwcGVuZENoaWxkKHQpO2Vsc2VcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/by5pbm5lclRleHQ9bi50b1N0cmluZygpOm8uYXBwZW5kQ2hpbGQobik7cmV0dXJuIG99fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHQsZSxuLG8pe3ZvaWQgMD09PW8mJihvPW4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8se2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbbl19fSl9OmZ1bmN0aW9uKHQsZSxuLG8pe3ZvaWQgMD09PW8mJihvPW4pLHRbb109ZVtuXX0pLHI9dGhpcyYmdGhpcy5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pfTpmdW5jdGlvbih0LGUpe3QuZGVmYXVsdD1lfSksaT10aGlzJiZ0aGlzLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24odCl7aWYodCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBlPXt9O2lmKG51bGwhPXQpZm9yKHZhciBuIGluIHQpXCJkZWZhdWx0XCIhPT1uJiZPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiZvKGUsdCxuKTtyZXR1cm4gcihlLHQpLGV9LHM9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5EeW5hbUNvbXBvbmVudD12b2lkIDA7XG4vKipcbiAqIER5bmFtaWMgQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMFxuICogQGV4cG9ydHMgRHluYW1Db21wb25lbnRcbiAqL1xuY29uc3QgdT1zKG4oMikpLGE9cyhuKDApKTtjbGFzcyBsIGV4dGVuZHMgdS5kZWZhdWx0e2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIoKSx0aGlzLnByb3BzPWUsdGhpcy5zdGF0ZT17fSx0aGlzLnNldFN0YXRlPXQ9Pntmb3IodGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKCksT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLHQpO3RoaXMucGFyZW50LmZpcnN0Q2hpbGQmJnRoaXMucGFyZW50Lmxhc3RDaGlsZDspdGhpcy5wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5wYXJlbnQubGFzdENoaWxkKTt0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcigpKSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpfSx0aGlzLm1vdW50Q29tcG9uZW50PSgpPT57Y29uc29sZS5sb2codGhpcy5zdGF0ZSk7Y29uc3QgdD10aGlzLnJlbmRlcigpO2lmKHRoaXMuY29tcG9uZW50V2lsbE1vdW50KCksIXQpdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgcmVuZGVyIG1ldGhvZCB0byBiZSBpbmNsdWRlZCBpbiBjb21wb25lbnQgY2xhc3MsIG5vIHJlbmRlciBtZXRob2QgZm91bmRcIik7cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKSx0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0KX0sdGhpcy5tb3VudD10aGlzLm1vdW50Q29tcG9uZW50LHRoaXMudW5tb3VudENvbXBvbmVudD0oKT0+e3RoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKSx0aGlzLnBhcmVudC5yZW1vdmUoKX0sdGhpcy51bm1vdW50PXRoaXMudW5tb3VudENvbXBvbmVudCxbXCJib2R5XCIsXCJodG1sXCJdLmluY2x1ZGVzKHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSYmY29uc29sZS53YXJuKGBXQVJOSU5HISBBdm9pZCB1c2luZyAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSBhcyBlbGVtZW50IHBhcmVudCwgYXMgYWxsIGVsZW1lbnRzIHdpdGhpbiAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSB3aWxsIGJlIHJlbW92ZWQgb24gcmUtcmVuZGVyYCksdGhpcy5wYXJlbnQ9dH19ZS5EeW5hbUNvbXBvbmVudD1sLGwuY3JlYXRlQ2hpbGQ9YS5kZWZhdWx0LGUuY3JlYXRlQ2hpbGQ9aShuKDApKX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2UuZGVmYXVsdD1cbi8qKlxuICogRHluYW1pYyBDb21wb25lbnRcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKiBAZXhwb3J0cyBQcmVzZXRcbiAqIEBwYWNrYWdlXG4gKi9cbmNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5jb21wb25lbnREaWRNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnREaWRVcGRhdGU9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbE1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGU9KCk9Pnt9LHRoaXMucmVuZGVyPSgpPT5udWxsfX19XSk7Il19