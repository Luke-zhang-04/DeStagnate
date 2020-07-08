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
   * @abstract
   */

  var s = /*#__PURE__*/function (_r$default) {
    _inherits(s, _r$default);

    var _super = _createSuper(s);

    function s(t, e) {
      var _this;

      _classCallCheck(this, s);

      if (_this = _super.call(this), _this.props = e, _this.createElement = s.createElement, _this.state = {}, _this.getSnapshotBeforeUpdate = function (t, e) {
        return [t, e];
      }, _this.setState = function (t) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBaEU7QUFBaUYsS0FBbE8sQ0FBb08sQ0FBcE8sRUFBc08sQ0FBdE8sQ0FBN08sRUFBc2QsQ0FBNWQ7QUFBOGQsR0FBcGhCO0FBQXFoQixDQTNDMlYsQ0FBcjVCLENBQWYiLCJmaWxlIjoiZGVTdGFnbmF0ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGVTdGFnbmF0ZT1mdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKG8pe2lmKGVbb10pcmV0dXJuIGVbb10uZXhwb3J0czt2YXIgcj1lW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxuKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLG8pe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciByIGluIHQpbi5kKG8scixmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHIpKTtyZXR1cm4gb30sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciBvPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuY3JlYXRlRWxlbWVudD12b2lkIDA7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlXG4gKi9cbmNvbnN0IHI9byhuKDEpKSxpPW8obigyKSk7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlXG4gKiBAY2xhc3NkZXNjIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNsYXNzXG4gKiBAbmFtZXNwYWNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgcyBleHRlbmRzIHIuZGVmYXVsdHtjb25zdHJ1Y3Rvcih0LGUpe2lmKHN1cGVyKCksdGhpcy5wcm9wcz1lLHRoaXMuY3JlYXRlRWxlbWVudD1zLmNyZWF0ZUVsZW1lbnQsdGhpcy5zdGF0ZT17fSx0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlPSh0LGUpPT5bdCxlXSx0aGlzLnNldFN0YXRlPXQ9Pnt0cnl7Zm9yKHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSgpLE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSx0KTt0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCYmdGhpcy5fcGFyZW50Lmxhc3RDaGlsZDspdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpO3RoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcigpKSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpfWNhdGNoKHQpe3JldHVybiB0aGlzLmNvbXBvbmVudERpZENhdGNoKHQpLHR9fSx0aGlzLm1vdW50Q29tcG9uZW50PSgpPT57dHJ5e2NvbnN0IHQ9dGhpcy5yZW5kZXIoKTtpZih0aGlzLmNvbXBvbmVudFdpbGxNb3VudCgpLCF0KXt0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCByZW5kZXIgbWV0aG9kIHRvIGJlIGluY2x1ZGVkIGluIGNvbXBvbmVudCBjbGFzcywgbm8gcmVuZGVyIG1ldGhvZCBmb3VuZFwiKX1yZXR1cm4gdGhpcy5jb21wb25lbnREaWRNb3VudCgpLHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0KX1jYXRjaCh0KXtyZXR1cm4gdGhpcy5jb21wb25lbnREaWRDYXRjaCh0KSx0fX0sdGhpcy5tb3VudD10aGlzLm1vdW50Q29tcG9uZW50LHRoaXMudW5tb3VudENvbXBvbmVudD0oKT0+e3RyeXtmb3IodGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO3RoaXMuX3BhcmVudC5maXJzdENoaWxkJiZ0aGlzLl9wYXJlbnQubGFzdENoaWxkOyl0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCl9Y2F0Y2godCl7dGhpcy5jb21wb25lbnREaWRDYXRjaCh0KX19LHRoaXMudW5tb3VudD10aGlzLnVubW91bnRDb21wb25lbnQsW1wiYm9keVwiLFwiaHRtbFwiXS5pbmNsdWRlcyh0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkpdGhyb3cgbmV3IEVycm9yKGBXQVJOSU5HISBBdm9pZCB1c2luZyAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSBhcyBlbGVtZW50IHBhcmVudCwgYXMgYWxsIGVsZW1lbnRzIHdpdGhpbiAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSB3aWxsIGJlIHJlbW92ZWQgb24gcmUtcmVuZGVyYCk7dGhpcy5fcGFyZW50PXR9Z2V0IGdldFN0YXRlKCl7cmV0dXJuIHRoaXMuc3RhdGV9fWUuZGVmYXVsdD1zLHMuY3JlYXRlRWxlbWVudD1pLmRlZmF1bHQsZS5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgUHJlc2V0XG4gKiBAcGFja2FnZVxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS5kZWZhdWx0PWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5jb21wb25lbnREaWRDYXRjaD10PT5jb25zb2xlLmVycm9yKHQpLHRoaXMuY29tcG9uZW50RGlkTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50RGlkVXBkYXRlPSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlPSgpPT57fSx0aGlzLnJlbmRlcj0oKT0+bnVsbH19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50XG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtlLmRlZmF1bHQ9KHQsZSxuKT0+e2NvbnN0IG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTtyZXR1cm4oKHQsZSk9PntpZihlKWZvcihjb25zdFtuLG9db2YgT2JqZWN0LmVudHJpZXMoZSkpXCJzdHJpbmdcIj09dHlwZW9mIG8/XCJpbm5lckhUTUxcIj09PW4/dC5pbm5lckhUTUw9by50b1N0cmluZygpOnQuc2V0QXR0cmlidXRlKG4sby50b1N0cmluZygpKTpcIm9uXCI9PT1uLnNsaWNlKDAsMikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG8mJnQuYWRkRXZlbnRMaXN0ZW5lcihuLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksbyl9KShvLGUpLCgodCxlKT0+e2lmKGV8fDA9PT1lKWlmKGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgbiBvZiBlKVwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj90LmlubmVyVGV4dD1uLnRvU3RyaW5nKCk6dC5hcHBlbmRDaGlsZChuKTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlP3QuaW5uZXJUZXh0PWUudG9TdHJpbmcoKTp0LmFwcGVuZENoaWxkKGUpfSkobyxuKSxvfX1dKTsiXX0=