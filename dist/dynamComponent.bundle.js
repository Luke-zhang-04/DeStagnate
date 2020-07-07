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
    if (n) if (n instanceof Array) {
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

      _this = _super.call(this), _this.props = e, _this._state = {}, _this.getState = function () {
        return _this._state;
      }, _this.setState = function (t) {
        for (_this.componentWillUpdate(), Object.assign(_this._state, t); _this.parent.firstChild && _this.parent.lastChild;) {
          _this.parent.removeChild(_this.parent.lastChild);
        }

        _this.parent.appendChild(_this.render()), _this.componentDidUpdate();
      }, _this.mountComponent = function () {
        if (_this.componentWillMount(), !_this.render()) throw new Error("Expected render method to be included in component class, no render method found");
        return _this.componentDidMount(), _this.parent.appendChild(_this.render());
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtQ29tcG9uZW50LmJ1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxjQUFjLEdBQUMsVUFBUyxDQUFULEVBQVc7QUFBQyxNQUFJLENBQUMsR0FBQyxFQUFOOztBQUFTLFdBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLFFBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBSixFQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLE9BQVo7QUFBb0IsUUFBSSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLO0FBQUMsTUFBQSxDQUFDLEVBQUMsQ0FBSDtBQUFLLE1BQUEsQ0FBQyxFQUFDLENBQUMsQ0FBUjtBQUFVLE1BQUEsT0FBTyxFQUFDO0FBQWxCLEtBQVg7QUFBaUMsV0FBTyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssSUFBTCxDQUFVLENBQUMsQ0FBQyxPQUFaLEVBQW9CLENBQXBCLEVBQXNCLENBQUMsQ0FBQyxPQUF4QixFQUFnQyxDQUFoQyxHQUFtQyxDQUFDLENBQUMsQ0FBRixHQUFJLENBQUMsQ0FBeEMsRUFBMEMsQ0FBQyxDQUFDLE9BQW5EO0FBQTJEOztBQUFBLFNBQU8sQ0FBQyxDQUFDLENBQUYsR0FBSSxDQUFKLEVBQU0sQ0FBQyxDQUFDLENBQUYsR0FBSSxDQUFWLEVBQVksQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUMsSUFBQSxDQUFDLENBQUMsQ0FBRixDQUFJLENBQUosRUFBTSxDQUFOLEtBQVUsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsRUFBMEI7QUFBQyxNQUFBLFVBQVUsRUFBQyxDQUFDLENBQWI7QUFBZSxNQUFBLEdBQUcsRUFBQztBQUFuQixLQUExQixDQUFWO0FBQTJELEdBQTNGLEVBQTRGLENBQUMsQ0FBQyxDQUFGLEdBQUks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em1DOzs7Ozs7Ozs7O0FBRHltQztBQVdubUMsc0JBQWE7QUFBQTs7QUFBQyxXQUFLLGlCQUFMLEdBQXVCLFlBQUksQ0FBRSxDQUE3QixFQUE4QixLQUFLLGtCQUFMLEdBQXdCLFlBQUksQ0FBRSxDQUE1RCxFQUE2RCxLQUFLLGtCQUFMLEdBQXdCLFlBQUksQ0FBRSxDQUEzRixFQUE0RixLQUFLLG9CQUFMLEdBQTBCLFlBQUksQ0FBRSxDQUE1SCxFQUE2SCxLQUFLLG1CQUFMLEdBQXlCLFlBQUksQ0FBRSxDQUE1SixFQUE2SixLQUFLLE1BQUwsR0FBWTtBQUFBLGVBQUksSUFBSjtBQUFBLE9BQXpLO0FBQWtMOztBQVhtNkI7QUFBQTtBQVdqNkIsQ0E5Qmd1QixDQUFyNUIsQ0FBbkIiLCJmaWxlIjoiZHluYW1Db21wb25lbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIER5bmFtQ29tcG9uZW50PWZ1bmN0aW9uKHQpe3ZhciBlPXt9O2Z1bmN0aW9uIG4obyl7aWYoZVtvXSlyZXR1cm4gZVtvXS5leHBvcnRzO3ZhciByPWVbb109e2k6byxsOiExLGV4cG9ydHM6e319O3JldHVybiB0W29dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLG4pLHIubD0hMCxyLmV4cG9ydHN9cmV0dXJuIG4ubT10LG4uYz1lLG4uZD1mdW5jdGlvbih0LGUsbyl7bi5vKHQsZSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsZ2V0Om99KX0sbi5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbih0LGUpe2lmKDEmZSYmKHQ9bih0KSksOCZlKXJldHVybiB0O2lmKDQmZSYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgbz1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihvKSxPYmplY3QuZGVmaW5lUHJvcGVydHkobyxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZlJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIHIgaW4gdCluLmQobyxyLGZ1bmN0aW9uKGUpe3JldHVybiB0W2VdfS5iaW5kKG51bGwscikpO3JldHVybiBvfSxuLm49ZnVuY3Rpb24odCl7dmFyIGU9dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIG4uZChlLFwiYVwiLGUpLGV9LG4ubz1mdW5jdGlvbih0LGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxlKX0sbi5wPVwiXCIsbihuLnM9MSl9KFtmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIER5bmFtaWMgQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMFxuICogQGV4cG9ydHMgY3JlYXRlQ2hpbGRcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2UuZGVmYXVsdD0odCxlLG4pPT57Y29uc3Qgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpO2lmKGUpZm9yKGNvbnN0W3Qsbl1vZiBPYmplY3QuZW50cmllcyhlKSlcImlubmVySFRNTFwiPT09dD9vLmlubmVySFRNTD1uLnRvU3RyaW5nKCk6by5zZXRBdHRyaWJ1dGUodCxuLnRvU3RyaW5nKCkpO2lmKG4paWYobiBpbnN0YW5jZW9mIEFycmF5KWZvcihjb25zdCB0IG9mIG4pXCJzdHJpbmdcIj09dHlwZW9mIHR8fFwibnVtYmVyXCI9PXR5cGVvZiB0P28uaW5uZXJUZXh0PXQudG9TdHJpbmcoKTpvLmFwcGVuZENoaWxkKHQpO2Vsc2VcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/by5pbm5lclRleHQ9bi50b1N0cmluZygpOm8uYXBwZW5kQ2hpbGQobik7cmV0dXJuIG99fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89dGhpcyYmdGhpcy5fX2NyZWF0ZUJpbmRpbmd8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHQsZSxuLG8pe3ZvaWQgMD09PW8mJihvPW4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8se2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbbl19fSl9OmZ1bmN0aW9uKHQsZSxuLG8pe3ZvaWQgMD09PW8mJihvPW4pLHRbb109ZVtuXX0pLHI9dGhpcyYmdGhpcy5fX3NldE1vZHVsZURlZmF1bHR8fChPYmplY3QuY3JlYXRlP2Z1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pfTpmdW5jdGlvbih0LGUpe3QuZGVmYXVsdD1lfSksaT10aGlzJiZ0aGlzLl9faW1wb3J0U3Rhcnx8ZnVuY3Rpb24odCl7aWYodCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBlPXt9O2lmKG51bGwhPXQpZm9yKHZhciBuIGluIHQpXCJkZWZhdWx0XCIhPT1uJiZPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pJiZvKGUsdCxuKTtyZXR1cm4gcihlLHQpLGV9LHM9dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5EeW5hbUNvbXBvbmVudD12b2lkIDA7XG4vKipcbiAqIER5bmFtaWMgQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMFxuICogQGV4cG9ydHMgRHluYW1Db21wb25lbnRcbiAqL1xuY29uc3QgdT1zKG4oMikpLGE9cyhuKDApKTtjbGFzcyBsIGV4dGVuZHMgdS5kZWZhdWx0e2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIoKSx0aGlzLnByb3BzPWUsdGhpcy5fc3RhdGU9e30sdGhpcy5nZXRTdGF0ZT0oKT0+dGhpcy5fc3RhdGUsdGhpcy5zZXRTdGF0ZT10PT57Zm9yKHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSgpLE9iamVjdC5hc3NpZ24odGhpcy5fc3RhdGUsdCk7dGhpcy5wYXJlbnQuZmlyc3RDaGlsZCYmdGhpcy5wYXJlbnQubGFzdENoaWxkOyl0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLnBhcmVudC5sYXN0Q2hpbGQpO3RoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKCkpLHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCl9LHRoaXMubW91bnRDb21wb25lbnQ9KCk9PntpZih0aGlzLmNvbXBvbmVudFdpbGxNb3VudCgpLCF0aGlzLnJlbmRlcigpKXRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHJlbmRlciBtZXRob2QgdG8gYmUgaW5jbHVkZWQgaW4gY29tcG9uZW50IGNsYXNzLCBubyByZW5kZXIgbWV0aG9kIGZvdW5kXCIpO3JldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50KCksdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoKSl9LHRoaXMubW91bnQ9dGhpcy5tb3VudENvbXBvbmVudCx0aGlzLnVubW91bnRDb21wb25lbnQ9KCk9Pnt0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCksdGhpcy5wYXJlbnQucmVtb3ZlKCl9LHRoaXMudW5tb3VudD10aGlzLnVubW91bnRDb21wb25lbnQsW1wiYm9keVwiLFwiaHRtbFwiXS5pbmNsdWRlcyh0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkmJmNvbnNvbGUud2FybihgV0FSTklORyEgQXZvaWQgdXNpbmcgJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gYXMgZWxlbWVudCBwYXJlbnQsIGFzIGFsbCBlbGVtZW50cyB3aXRoaW4gJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gd2lsbCBiZSByZW1vdmVkIG9uIHJlLXJlbmRlcmApLHRoaXMucGFyZW50PXR9fWUuRHluYW1Db21wb25lbnQ9bCxsLmNyZWF0ZUNoaWxkPWEuZGVmYXVsdCxlLmNyZWF0ZUNoaWxkPWkobigwKSl9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtlLmRlZmF1bHQ9XG4vKipcbiAqIER5bmFtaWMgQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMFxuICogQGV4cG9ydHMgUHJlc2V0XG4gKiBAcGFja2FnZVxuICovXG5jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuY29tcG9uZW50RGlkTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50RGlkVXBkYXRlPSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlPSgpPT57fSx0aGlzLnJlbmRlcj0oKT0+bnVsbH19fV0pOyJdfQ==