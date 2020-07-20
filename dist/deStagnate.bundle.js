"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) { return; } var _arr = [], _n = !0, _d = !1, _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = !0) { _arr.push(_s.value); if (i && _arr.length === i) { break; } } } catch (err) { _d = !0; _e = err; } finally { try { if (!_n && _i["return"] != null) { _i["return"](); } } finally { if (_d) { throw _e; } } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) { return arr; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) { return Array.from(iter); } }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { return _arrayLikeToArray(arr); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) { o = it; } var i = 0, F = function () {}; return { s: F, n: function n() { if (i >= o.length) { return { done: !0 }; } return { done: !1, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = !0, didErr = !1, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = !0; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) { it["return"](); } } finally { if (didErr) { throw err; } } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) { return; } if (typeof o === "string") { return _arrayLikeToArray(o, minLen); } var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) { n = o.constructor.name; } if (n === "Map" || n === "Set") { return Array.from(o); } if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return _arrayLikeToArray(o, minLen); } }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) { len = arr.length; } for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0, descriptor; i < props.length; i++) { descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || !1; descriptor.configurable = !0; if ("value" in descriptor) { descriptor.writable = !0; } Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }); if (superClass) { _setPrototypeOf(subClass, superClass); } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function (o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) { return !1; } if (Reflect.construct.sham) { return !1; } if (typeof Proxy === "function") { return !0; } try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return !0; } catch (e) { return !1; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DeStagnate = function (t) {
  var e = {};

  function n(o) {
    if (e[o]) {
      return e[o].exports;
    }

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
    if (1 & e && (t = n(t)), 8 & e) {
      return t;
    }

    if (4 & e && "object" == _typeof(t) && t && t.__esModule) {
      return t;
    }

    var o = Object.create(null);

    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) {
      for (var r in t) {
        n.d(o, r, function (e) {
          return t[e];
        }.bind(null, r));
      }
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
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.3.0
   * @exports DeStagnate main destagnate class
   * @file main file for destagnate
   */

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.createElement = void 0;
  var r = o(n(1)),
      i = o(n(2));

  var s = function (_r$default) {
    _inherits(s, _r$default);

    var _super = _createSuper(s);

    function s(t, e) {
      var _this;

      _classCallCheck(this, s);

      _this = _super.call(this), _this.props = e, _this.createElement = s.createElement, _this._state = {}, _this._didSetInitialState = !1, _this.getSnapshotBeforeUpdate = function (t, e) {
        return [t, e];
      }, _this.setState = function (t) {
        try {
          _this.componentWillUpdate();

          for (var _i = 0, _Object$keys = Object.keys(t); _i < _Object$keys.length; _i++) {
            var _e2 = _Object$keys[_i];
            Object.keys(_this.state).includes(_e2) || console.warn("WARN: New key (".concat(_e2, ") should not be set with setState, which has keys ").concat(JSON.stringify(Object.keys(_this.state)), ". Declare all state variables in constructor as a best practice."));
          }

          _this.getSnapshotBeforeUpdate(_this.props, _this.state), Object.assign(_this._state, t);

          var _e = _this._execRender();

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

          if (_this._didSetInitialState = !0, _this.componentWillMount(), !_t2) {
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
      }, _this._execRender = function () {
        return _this._removeChildren(), _this.render();
      }, ["body", "html"].includes(t.tagName.toLowerCase()) && console.warn("WARNING! Avoid using ".concat(t.tagName.toLowerCase(), " as element parent, as all elements within ").concat(t.tagName.toLowerCase(), " will be removed on re-render")), _this._parent = t;
      return _this;
    }

    _createClass(s, [{
      key: "getState",
      get: function get() {
        return this.state;
      }
    }, {
      key: "state",
      get: function get() {
        return this._state;
      },
      set: function set(t) {
        this._didSetInitialState ? (this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead")), this.setState(t)) : (this._state = t, this._didSetInitialState = !0);
      }
    }, {
      key: "getProps",
      get: function get() {
        return this.props;
      }
    }]);

    return s;
  }(r["default"]);

  e["default"] = s, s.createElement = i["default"], e.createElement = i["default"];
}, function (t, e) {
  "use strict";
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.3.0
   * @exports Preset
   * @package
   */

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  e["default"] = function () {
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
}, function (t, e) {
  "use strict";
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.3.0
   * @exports createElement
   */

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var o = function (t) {
    var e = [];

    var _iterator2 = _createForOfIteratorHelper(t),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _n = _step2.value;
        "object" == _typeof(_n) && _n instanceof Array ? e.push.apply(e, _toConsumableArray(o(_n))) : e.push(_n);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return e;
  },
      r = function (t, e) {
    if (e || 0 === e) {
      if (e instanceof Array) {
        var _iterator3 = _createForOfIteratorHelper(e),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _n2 = _step3.value;
            "string" == typeof _n2 || "number" == typeof _n2 ? t.innerText = _n2.toString() : "object" == _typeof(_n2) && _n2 instanceof Array ? o(_n2).forEach(function (e) {
              return r(t, e);
            }) : t.appendChild(_n2);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      } else "string" == typeof e || "number" == typeof e ? t.innerText = e.toString() : t.appendChild(e);
    }
  };

  e["default"] = function (t, e, n) {
    var s = document.createElement(t);

    (function (t, e) {
      if (e) {
        for (var _i2 = 0, _Object$entries = Object.entries(e); _i2 < _Object$entries.length; _i2++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
              _n3 = _Object$entries$_i[0],
              _o = _Object$entries$_i[1];

          "string" == typeof _o ? "innerHTML" === _n3 ? t.innerHTML = _o.toString() : t.setAttribute(_n3, _o.toString()) : "on" === _n3.slice(0, 2) && "function" == typeof _o && t.addEventListener(_n3.slice(2).toLowerCase(), _o);
        }
      }
    })(s, e);

    for (var a = n, _len = arguments.length, i = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      i[_key - 3] = arguments[_key];
    }

    return n && i && (a = "object" == _typeof(n) && n instanceof Array ? [].concat(_toConsumableArray(o(n)), _toConsumableArray(o(i))) : [n].concat(_toConsumableArray(o(i)))), r(s, a), s;
  };
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBcjVCLENBQWYiLCJmaWxlIjoiZGVTdGFnbmF0ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGVTdGFnbmF0ZT1mdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKG8pe2lmKGVbb10pcmV0dXJuIGVbb10uZXhwb3J0czt2YXIgcj1lW29dPXtpOm8sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtvXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxuKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLG8pe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpvfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIG89T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIobyksT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciByIGluIHQpbi5kKG8scixmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLHIpKTtyZXR1cm4gb30sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjMuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIG1haW4gZmlsZSBmb3IgZGVzdGFnbmF0ZVxuICovdmFyIG89dGhpcyYmdGhpcy5fX2ltcG9ydERlZmF1bHR8fGZ1bmN0aW9uKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX07T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksZS5jcmVhdGVFbGVtZW50PXZvaWQgMDtjb25zdCByPW8obigxKSksaT1vKG4oMikpO2NsYXNzIHMgZXh0ZW5kcyByLmRlZmF1bHR7Y29uc3RydWN0b3IodCxlKXtzdXBlcigpLHRoaXMucHJvcHM9ZSx0aGlzLmNyZWF0ZUVsZW1lbnQ9cy5jcmVhdGVFbGVtZW50LHRoaXMuX3N0YXRlPXt9LHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZT0hMSx0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlPSh0LGUpPT5bdCxlXSx0aGlzLnNldFN0YXRlPXQ9Pnt0cnl7dGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKCk7Zm9yKGNvbnN0IGUgb2YgT2JqZWN0LmtleXModCkpT2JqZWN0LmtleXModGhpcy5zdGF0ZSkuaW5jbHVkZXMoZSl8fGNvbnNvbGUud2FybihgV0FSTjogTmV3IGtleSAoJHtlfSkgc2hvdWxkIG5vdCBiZSBzZXQgd2l0aCBzZXRTdGF0ZSwgd2hpY2ggaGFzIGtleXMgJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyh0aGlzLnN0YXRlKSl9LiBEZWNsYXJlIGFsbCBzdGF0ZSB2YXJpYWJsZXMgaW4gY29uc3RydWN0b3IgYXMgYSBiZXN0IHByYWN0aWNlLmApO3RoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUodGhpcy5wcm9wcyx0aGlzLnN0YXRlKSxPYmplY3QuYXNzaWduKHRoaXMuX3N0YXRlLHQpO2NvbnN0IGU9dGhpcy5fZXhlY1JlbmRlcigpO2lmKGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgdCBvZiBlKXRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0KTtlbHNlIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChlKTt0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpfWNhdGNoKHQpe3JldHVybiB0aGlzLmNvbXBvbmVudERpZENhdGNoKHQpLHR9fSx0aGlzLm1vdW50Q29tcG9uZW50PSgpPT57dHJ5e2NvbnN0IHQ9dGhpcy5yZW5kZXIoKTtpZih0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGU9ITAsdGhpcy5jb21wb25lbnRXaWxsTW91bnQoKSwhdCl7dGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgcmVuZGVyIG1ldGhvZCB0byBiZSBpbmNsdWRlZCBpbiBjb21wb25lbnQgY2xhc3MsIG5vIHJlbmRlciBtZXRob2QgZm91bmQsIG9yIHJlbmRlciByZXR1cm5lZCBhbiBlbXB0eSBhcnJheVwiKX1yZXR1cm4gdGhpcy5jb21wb25lbnREaWRNb3VudCgpLHQgaW5zdGFuY2VvZiBBcnJheT90Lm1hcCh0PT50aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQodCkpOnRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0KX1jYXRjaCh0KXtyZXR1cm4gdGhpcy5jb21wb25lbnREaWRDYXRjaCh0KSx0fX0sdGhpcy5tb3VudD10aGlzLm1vdW50Q29tcG9uZW50LHRoaXMudW5tb3VudENvbXBvbmVudD0oKT0+e3RyeXt0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCksdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKX1jYXRjaCh0KXt0aGlzLmNvbXBvbmVudERpZENhdGNoKHQpfX0sdGhpcy51bm1vdW50PXRoaXMudW5tb3VudENvbXBvbmVudCx0aGlzLl9yZW1vdmVDaGlsZHJlbj0oKT0+e2Zvcig7dGhpcy5fcGFyZW50LmZpcnN0Q2hpbGQmJnRoaXMuX3BhcmVudC5sYXN0Q2hpbGQ7KXRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKX0sdGhpcy5fZXhlY1JlbmRlcj0oKT0+KHRoaXMuX3JlbW92ZUNoaWxkcmVuKCksdGhpcy5yZW5kZXIoKSksW1wiYm9keVwiLFwiaHRtbFwiXS5pbmNsdWRlcyh0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkmJmNvbnNvbGUud2FybihgV0FSTklORyEgQXZvaWQgdXNpbmcgJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gYXMgZWxlbWVudCBwYXJlbnQsIGFzIGFsbCBlbGVtZW50cyB3aXRoaW4gJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gd2lsbCBiZSByZW1vdmVkIG9uIHJlLXJlbmRlcmApLHRoaXMuX3BhcmVudD10fWdldCBnZXRTdGF0ZSgpe3JldHVybiB0aGlzLnN0YXRlfWdldCBzdGF0ZSgpe3JldHVybiB0aGlzLl9zdGF0ZX1zZXQgc3RhdGUodCl7dGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlPyh0aGlzLmNvbXBvbmVudERpZENhdGNoKG5ldyBFcnJvcihcIkRvIG5vdCBtdXRhdGUgc3RhdGUgZGlyZWN0bHkuIFVzZSBzZXRTdGF0ZSBpbnN0ZWFkXCIpKSx0aGlzLnNldFN0YXRlKHQpKToodGhpcy5fc3RhdGU9dCx0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGU9ITApfWdldCBnZXRQcm9wcygpe3JldHVybiB0aGlzLnByb3BzfX1lLmRlZmF1bHQ9cyxzLmNyZWF0ZUVsZW1lbnQ9aS5kZWZhdWx0LGUuY3JlYXRlRWxlbWVudD1pLmRlZmF1bHR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4zLjBcbiAqIEBleHBvcnRzIFByZXNldFxuICogQHBhY2thZ2VcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2UuZGVmYXVsdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuY29tcG9uZW50RGlkQ2F0Y2g9dD0+Y29uc29sZS5lcnJvcih0KSx0aGlzLmNvbXBvbmVudERpZE1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZT0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZT0oKT0+e30sdGhpcy5yZW5kZXI9KCk9Pm51bGx9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjMuMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudFxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgbz10PT57Y29uc3QgZT1bXTtmb3IoY29uc3QgbiBvZiB0KVwib2JqZWN0XCI9PXR5cGVvZiBuJiZuIGluc3RhbmNlb2YgQXJyYXk/ZS5wdXNoKC4uLm8obikpOmUucHVzaChuKTtyZXR1cm4gZX0scj0odCxlKT0+e2lmKGV8fDA9PT1lKWlmKGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgbiBvZiBlKVwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj90LmlubmVyVGV4dD1uLnRvU3RyaW5nKCk6XCJvYmplY3RcIj09dHlwZW9mIG4mJm4gaW5zdGFuY2VvZiBBcnJheT9vKG4pLmZvckVhY2goZT0+cih0LGUpKTp0LmFwcGVuZENoaWxkKG4pO2Vsc2VcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGU/dC5pbm5lclRleHQ9ZS50b1N0cmluZygpOnQuYXBwZW5kQ2hpbGQoZSl9O2UuZGVmYXVsdD0odCxlLG4sLi4uaSk9Pntjb25zdCBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7KCh0LGUpPT57aWYoZSlmb3IoY29uc3RbbixvXW9mIE9iamVjdC5lbnRyaWVzKGUpKVwic3RyaW5nXCI9PXR5cGVvZiBvP1wiaW5uZXJIVE1MXCI9PT1uP3QuaW5uZXJIVE1MPW8udG9TdHJpbmcoKTp0LnNldEF0dHJpYnV0ZShuLG8udG9TdHJpbmcoKSk6XCJvblwiPT09bi5zbGljZSgwLDIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBvJiZ0LmFkZEV2ZW50TGlzdGVuZXIobi5zbGljZSgyKS50b0xvd2VyQ2FzZSgpLG8pfSkocyxlKTtsZXQgYT1uO3JldHVybiBuJiZpJiYoYT1cIm9iamVjdFwiPT10eXBlb2YgbiYmbiBpbnN0YW5jZW9mIEFycmF5P1suLi5vKG4pLC4uLm8oaSldOltuLC4uLm8oaSldKSxyKHMsYSksc319XSk7Il19