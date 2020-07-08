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
   * Dynamic Component
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.2
   * @exports DeStagnate
   */

  var r = o(n(1)),
      i = o(n(2));

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
   * @version 1.0.2
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
   * @version 1.0.2
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsTUFBSSxDQUFWLEVBQVksSUFBRyxDQUFDLFlBQVksS0FBaEI7QUFBQSxtREFBcUMsQ0FBckM7QUFBQTs7QUFBQTtBQUFzQjtBQUFBLGdCQUFVLEdBQVY7QUFBaUIsd0JBQVUsT0FBTyxHQUFqQixJQUFvQixZQUFVLE9BQU8sR0FBckMsR0FBdUMsQ0FBQyxDQUFDLFNBQUYsR0FBWSxHQUFDLENBQUMsUUFBRixFQUFuRCxHQUFnRSxDQUFDLENBQUMsV0FBRixDQUFjLEdBQWQsQ0FBaEU7QUFBakI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTRILFlBQVUsT0FBTyxDQUFqQixJQUFvQixZQUFVLE9BQU8sQ0FBckMsR0FBdUMsQ0FBQyxDQUFDLFNBQUYsR0FBWSxDQUFDLENBQUMsUUFBRixFQUFuRCxHQUFnRSxDQUFDLENBQUMsV0FBRixDQUFjLENBQWQsQ0FBaEU7QUFBaUYsS0FBbE8sQ0FBb08sQ0FBcE8sRUFBc08sQ0FBdE8sQ0FBN08sRUFBc2QsQ0FBNWQ7QUFBOGQsR0FBcGhCO0FBQXFoQixDQTdCMlYsQ0FBcjVCLENBQWYiLCJmaWxlIjoiZGVTdGFnbmF0ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGVTdGFnbmF0ZT1mdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKG8pe2lmKGVbb10pcmV0dXJuIGVbb10uZXhwb3J0czt2YXIgcj1lW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxuKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLG8pe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciByIGluIHQpbi5kKG8scixmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHIpKTtyZXR1cm4gb30sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciBvPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuY3JlYXRlRWxlbWVudD12b2lkIDA7XG4vKipcbiAqIER5bmFtaWMgQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjAuMlxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZVxuICovXG5jb25zdCByPW8obigxKSksaT1vKG4oMikpO2NsYXNzIHMgZXh0ZW5kcyByLmRlZmF1bHR7Y29uc3RydWN0b3IodCxlKXtzdXBlcigpLHRoaXMucHJvcHM9ZSx0aGlzLnN0YXRlPXt9LHRoaXMuc2V0U3RhdGU9dD0+e2Zvcih0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUoKSxPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsdCk7dGhpcy5wYXJlbnQuZmlyc3RDaGlsZCYmdGhpcy5wYXJlbnQubGFzdENoaWxkOyl0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLnBhcmVudC5sYXN0Q2hpbGQpO3RoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKCkpLHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCl9LHRoaXMubW91bnRDb21wb25lbnQ9KCk9Pntjb25zdCB0PXRoaXMucmVuZGVyKCk7aWYodGhpcy5jb21wb25lbnRXaWxsTW91bnQoKSwhdCl7Y29uc3QgdD1cIkV4cGVjdGVkIHJlbmRlciBtZXRob2QgdG8gYmUgaW5jbHVkZWQgaW4gY29tcG9uZW50IGNsYXNzLCBubyByZW5kZXIgbWV0aG9kIGZvdW5kXCI7cmV0dXJuIGNvbnNvbGUuZXJyb3IodCksRXJyb3IodCl9cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKSx0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0KX0sdGhpcy5tb3VudD10aGlzLm1vdW50Q29tcG9uZW50LHRoaXMudW5tb3VudENvbXBvbmVudD0oKT0+e2Zvcih0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7dGhpcy5wYXJlbnQuZmlyc3RDaGlsZCYmdGhpcy5wYXJlbnQubGFzdENoaWxkOyl0aGlzLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLnBhcmVudC5sYXN0Q2hpbGQpfSx0aGlzLnVubW91bnQ9dGhpcy51bm1vdW50Q29tcG9uZW50LFtcImJvZHlcIixcImh0bWxcIl0uaW5jbHVkZXModC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpJiZjb25zb2xlLndhcm4oYFdBUk5JTkchIEF2b2lkIHVzaW5nICR7dC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9IGFzIGVsZW1lbnQgcGFyZW50LCBhcyBhbGwgZWxlbWVudHMgd2l0aGluICR7dC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9IHdpbGwgYmUgcmVtb3ZlZCBvbiByZS1yZW5kZXJgKSx0aGlzLnBhcmVudD10fX1lLmRlZmF1bHQ9cyxzLmNyZWF0ZUVsZW1lbnQ9aS5kZWZhdWx0LGUuY3JlYXRlRWxlbWVudD1pLmRlZmF1bHR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4wLjJcbiAqIEBleHBvcnRzIFByZXNldFxuICogQHBhY2thZ2VcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2UuZGVmYXVsdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuY29tcG9uZW50RGlkTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50RGlkVXBkYXRlPSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlPSgpPT57fSx0aGlzLnJlbmRlcj0oKT0+bnVsbH19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMC4yXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50XG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtlLmRlZmF1bHQ9KHQsZSxuKT0+e2NvbnN0IG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtyZXR1cm4oKHQsZSk9PntpZihlKWZvcihjb25zdFtuLG9db2YgT2JqZWN0LmVudHJpZXMoZSkpXCJzdHJpbmdcIj09dHlwZW9mIG8/XCJpbm5lckhUTUxcIj09PW4/dC5pbm5lckhUTUw9by50b1N0cmluZygpOnQuc2V0QXR0cmlidXRlKG4sby50b1N0cmluZygpKTpcIm9uXCI9PT1uLnNsaWNlKDAsMikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJnQuYWRkRXZlbnRMaXN0ZW5lcihuLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksbyl9KShvLGUpLCgodCxlKT0+e2lmKGV8fDA9PT1lKWlmKGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgbiBvZiBlKVwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj90LmlubmVyVGV4dD1uLnRvU3RyaW5nKCk6dC5hcHBlbmRDaGlsZChuKTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlP3QuaW5uZXJUZXh0PWUudG9TdHJpbmcoKTp0LmFwcGVuZENoaWxkKGUpfSkobyxuKSxvfX1dKTsiXX0=