"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
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
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(r, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return r;
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

  var r = this && this.__importDefault || function (t) {
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

  var o = r(n(1)),
      i = r(n(2));
  /****
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

  var s = /*#__PURE__*/function (_o$default) {
    _inherits(s, _o$default);

    var _super = _createSuper(s);

    function s(t, e) {
      var _this;

      _classCallCheck(this, s);

      if (_this = _super.call(this), _this.props = e, _this.createElement = s.createElement, _this.state = {}, _this.getSnapshotBeforeUpdate = function (t, e) {
        return [t, e];
      }, _this.setState = function (t) {
        try {
          _this.componentWillUpdate(), Object.assign(_this.state, t), _this._removeChildren();

          var _e = _this.render();

          if (_e instanceof Array) {
            var _iterator = _createForOfIteratorHelper(_e),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _t = _step.value;

                _this._parent.appendChild(_t);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else _this._parent.appendChild(_e);

          _this.componentDidUpdate();
        } catch (t) {
          return _this.componentDidCatch(t), t;
        }
      }, _this.mountComponent = function () {
        try {
          var _t2 = _this.render();

          if (_this.componentWillMount(), !_t2) {
            throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array");
          }

          return _this.componentDidMount(), _t2 instanceof Array ? _t2.map(function (t) {
            return _this._parent.appendChild(t);
          }) : _this._parent.appendChild(_t2);
        } catch (t) {
          return _this.componentDidCatch(t), t;
        }
      }, _this.mount = _this.mountComponent, _this.unmountComponent = function () {
        try {
          _this.componentWillUnmount(), _this._removeChildren();
        } catch (t) {
          _this.componentDidCatch(t);
        }
      }, _this.unmount = _this.unmountComponent, _this._removeChildren = function () {
        for (; _this._parent.firstChild && _this._parent.lastChild;) {
          _this._parent.removeChild(_this._parent.lastChild);
        }
      }, ["body", "html"].includes(t.tagName.toLowerCase())) throw new Error("WARNING! Avoid using ".concat(t.tagName.toLowerCase(), " as element parent, as all elements within ").concat(t.tagName.toLowerCase(), " will be removed on re-render"));
      _this._parent = t;
      return _possibleConstructorReturn(_this);
    }

    _createClass(s, [{
      key: "getState",
      get: function get() {
        return this.state;
      }
    }, {
      key: "getProps",
      get: function get() {
        return this.props;
      }
    }]);

    return s;
  }(o["default"]);

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
    var r = document.createElement(t);
    return function (t, e) {
      if (e) for (var _i = 0, _Object$entries = Object.entries(e); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            _n = _Object$entries$_i[0],
            _r = _Object$entries$_i[1];

        "string" == typeof _r ? "innerHTML" === _n ? t.innerHTML = _r.toString() : t.setAttribute(_n, _r.toString()) : "on" === _n.slice(0, 2) && "function" == typeof _r && t.addEventListener(_n.slice(2).toLowerCase(), _r);
      }
    }(r, e), function (t, e) {
      if (e || 0 === e) if (e instanceof Array) {
        var _iterator2 = _createForOfIteratorHelper(e),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _n2 = _step2.value;
            "string" == typeof _n2 || "number" == typeof _n2 ? t.innerText = _n2.toString() : t.appendChild(_n2);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else "string" == typeof e || "number" == typeof e ? t.innerText = e.toString() : t.appendChild(e);
    }(r, n), r;
  };
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFzQjtBQUFBLGdCQUFVLEdBQVY7QUFBaUIsd0JBQVUsT0FBTyxHQUFqQixJQUFvQixZQUFVLE9BQU8sR0FBckMsR0FBdUMsQ0FBQyxDQUFDLFNBQUYsR0FBWSxHQUFDLENBQUMsUUFBRixFQUFuRCxHQUFnRSxDQUFDLENBQUMsV0FBRixDQUFjLEdBQWQsQ0FBaEU7QUFBakI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTRILFlBQVUsT0FBTyxDQUFqQixJQUFvQixZQUFVLE9BQU8sQ0FBckMsR0FBdUMsQ0FBQyxDQUFDLFNBQUYsR0FBWSxDQUFDLENBQUMsUUFBRixFQUFuRCxHQUFnRSxDQUFDLENBQUMsV0FBRixDQUFjLENBQWQsQ0FBaEU7QUFBaUYsS0FBbE8sQ0FBb08sQ0FBcE8sRUFBc08sQ0FBdE8sQ0FBN08sRUFBc2QsQ0FBNWQ7QUFBOGQsR0FBcGhCO0FBQXFoQixDQTNDMlYsQ0FBcjVCLENBQWYiLCJmaWxlIjoiZGVTdGFnbmF0ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGVTdGFnbmF0ZT1mdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuY3JlYXRlRWxlbWVudD12b2lkIDA7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlXG4gKi9cbmNvbnN0IG89cihuKDEpKSxpPXIobigyKSk7XG4vKioqKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGVcbiAqIEBjbGFzc2Rlc2MgQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY2xhc3NcbiAqIEBuYW1lc3BhY2VcbiAqIEBhYnN0cmFjdFxuICovXG5jbGFzcyBzIGV4dGVuZHMgby5kZWZhdWx0e2NvbnN0cnVjdG9yKHQsZSl7aWYoc3VwZXIoKSx0aGlzLnByb3BzPWUsdGhpcy5jcmVhdGVFbGVtZW50PXMuY3JlYXRlRWxlbWVudCx0aGlzLnN0YXRlPXt9LHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU9KHQsZSk9Plt0LGVdLHRoaXMuc2V0U3RhdGU9dD0+e3RyeXt0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUoKSxPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsdCksdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKTtjb25zdCBlPXRoaXMucmVuZGVyKCk7aWYoZSBpbnN0YW5jZW9mIEFycmF5KWZvcihjb25zdCB0IG9mIGUpdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKHQpO2Vsc2UgdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGUpO3RoaXMuY29tcG9uZW50RGlkVXBkYXRlKCl9Y2F0Y2godCl7cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2godCksdH19LHRoaXMubW91bnRDb21wb25lbnQ9KCk9Pnt0cnl7Y29uc3QgdD10aGlzLnJlbmRlcigpO2lmKHRoaXMuY29tcG9uZW50V2lsbE1vdW50KCksIXQpe3Rocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHJlbmRlciBtZXRob2QgdG8gYmUgaW5jbHVkZWQgaW4gY29tcG9uZW50IGNsYXNzLCBubyByZW5kZXIgbWV0aG9kIGZvdW5kLCBvciByZW5kZXIgcmV0dXJuZWQgYW4gZW1wdHkgYXJyYXlcIil9cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKSx0IGluc3RhbmNlb2YgQXJyYXk/dC5tYXAodD0+dGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKHQpKTp0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQodCl9Y2F0Y2godCl7cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2godCksdH19LHRoaXMubW91bnQ9dGhpcy5tb3VudENvbXBvbmVudCx0aGlzLnVubW91bnRDb21wb25lbnQ9KCk9Pnt0cnl7dGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpLHRoaXMuX3JlbW92ZUNoaWxkcmVuKCl9Y2F0Y2godCl7dGhpcy5jb21wb25lbnREaWRDYXRjaCh0KX19LHRoaXMudW5tb3VudD10aGlzLnVubW91bnRDb21wb25lbnQsdGhpcy5fcmVtb3ZlQ2hpbGRyZW49KCk9Pntmb3IoO3RoaXMuX3BhcmVudC5maXJzdENoaWxkJiZ0aGlzLl9wYXJlbnQubGFzdENoaWxkOyl0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCl9LFtcImJvZHlcIixcImh0bWxcIl0uaW5jbHVkZXModC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpKXRocm93IG5ldyBFcnJvcihgV0FSTklORyEgQXZvaWQgdXNpbmcgJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gYXMgZWxlbWVudCBwYXJlbnQsIGFzIGFsbCBlbGVtZW50cyB3aXRoaW4gJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gd2lsbCBiZSByZW1vdmVkIG9uIHJlLXJlbmRlcmApO3RoaXMuX3BhcmVudD10fWdldCBnZXRTdGF0ZSgpe3JldHVybiB0aGlzLnN0YXRlfWdldCBnZXRQcm9wcygpe3JldHVybiB0aGlzLnByb3BzfX1lLmRlZmF1bHQ9cyxzLmNyZWF0ZUVsZW1lbnQ9aS5kZWZhdWx0LGUuY3JlYXRlRWxlbWVudD1pLmRlZmF1bHR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBleHBvcnRzIFByZXNldFxuICogQHBhY2thZ2VcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2UuZGVmYXVsdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuY29tcG9uZW50RGlkQ2F0Y2g9dD0+Y29uc29sZS5lcnJvcih0KSx0aGlzLmNvbXBvbmVudERpZE1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZT0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZT0oKT0+e30sdGhpcy5yZW5kZXI9KCk9Pm51bGx9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudFxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS5kZWZhdWx0PSh0LGUsbik9Pntjb25zdCByPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7cmV0dXJuKCh0LGUpPT57aWYoZSlmb3IoY29uc3RbbixyXW9mIE9iamVjdC5lbnRyaWVzKGUpKVwic3RyaW5nXCI9PXR5cGVvZiByP1wiaW5uZXJIVE1MXCI9PT1uP3QuaW5uZXJIVE1MPXIudG9TdHJpbmcoKTp0LnNldEF0dHJpYnV0ZShuLHIudG9TdHJpbmcoKSk6XCJvblwiPT09bi5zbGljZSgwLDIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZ0LmFkZEV2ZW50TGlzdGVuZXIobi5zbGljZSgyKS50b0xvd2VyQ2FzZSgpLHIpfSkocixlKSwoKHQsZSk9PntpZihlfHwwPT09ZSlpZihlIGluc3RhbmNlb2YgQXJyYXkpZm9yKGNvbnN0IG4gb2YgZSlcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/dC5pbm5lclRleHQ9bi50b1N0cmluZygpOnQuYXBwZW5kQ2hpbGQobik7ZWxzZVwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZT90LmlubmVyVGV4dD1lLnRvU3RyaW5nKCk6dC5hcHBlbmRDaGlsZChlKX0pKHIsbikscn19XSk7Il19