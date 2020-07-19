"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) { break; } } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) { _i["return"](); } } finally { if (_d) { throw _e; } } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) { return arr; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) { return Array.from(iter); } }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { return _arrayLikeToArray(arr); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) { o = it; } var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) { return { done: true }; } return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) { it["return"](); } } finally { if (didErr) { throw err; } } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) { return; } if (typeof o === "string") { return _arrayLikeToArray(o, minLen); } var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) { n = o.constructor.name; } if (n === "Map" || n === "Set") { return Array.from(o); } if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return _arrayLikeToArray(o, minLen); } }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) { len = arr.length; } for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) { _defineProperties(Constructor.prototype, protoProps); } if (staticProps) { _defineProperties(Constructor, staticProps); } return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) { _setPrototypeOf(subClass, superClass); } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) { return false; } if (Reflect.construct.sham) { return false; } if (typeof Proxy === "function") { return true; } try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DeStagnate = function (t) {
  var e = {};

  function n(r) {
    if (e[r]) {
      return e[r].exports;
    }

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
    if (1 & e && (t = n(t)), 8 & e) {
      return t;
    }

    if (4 & e && "object" == _typeof(t) && t && t.__esModule) {
      return t;
    }

    var r = Object.create(null);

    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) {
      for (var o in t) {
        n.d(r, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
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
   * @version 1.2.4
   * @exports DeStagnate
   */

  var o = r(n(1)),
      i = r(n(2));
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.2.1
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

      if (_this = _super.call(this), _this.props = e, _this.createElement = s.createElement, _this._state = {}, _this._didSetInitialState = !1, _this.getSnapshotBeforeUpdate = function (t, e) {
        return [t, e];
      }, _this.setState = function (t) {
        try {
          _this.componentWillUpdate();

          for (var _i = 0, _Object$keys = Object.keys(t); _i < _Object$keys.length; _i++) {
            var _e2 = _Object$keys[_i];

            if (!Object.keys(_this.state).includes(_e2)) {
              throw new Error("A new key (".concat(_e2, ") should not be set with setState, which has keys ").concat(JSON.stringify(Object.keys(_this.state)), ". Declare all state variables in constructor."));
            }
          }

          Object.assign(_this._state, t), _this._removeChildren();

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
      }, ["body", "html"].includes(t.tagName.toLowerCase())) {
        throw new Error("WARNING! Avoid using ".concat(t.tagName.toLowerCase(), " as element parent, as all elements within ").concat(t.tagName.toLowerCase(), " will be removed on re-render"));
      }

      _this._parent = t;
      return _possibleConstructorReturn(_this);
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
   * @version 1.2.4
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
   * @version 1.2.4
   * @exports createElement
   */

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var r = function r(t) {
    var e = [];

    var _iterator2 = _createForOfIteratorHelper(t),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _n = _step2.value;
        "object" == _typeof(_n) && _n instanceof Array ? e.push.apply(e, _toConsumableArray(r(_n))) : e.push(_n);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return e;
  },
      o = function o(t, e) {
    if (e || 0 === e) {
      if (e instanceof Array) {
        var _iterator3 = _createForOfIteratorHelper(e),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _n2 = _step3.value;
            "string" == typeof _n2 || "number" == typeof _n2 ? t.innerText = _n2.toString() : "object" == _typeof(_n2) && _n2 instanceof Array ? r(_n2).forEach(function (e) {
              return o(t, e);
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
              _r = _Object$entries$_i[1];

          "string" == typeof _r ? "innerHTML" === _n3 ? t.innerHTML = _r.toString() : t.setAttribute(_n3, _r.toString()) : "on" === _n3.slice(0, 2) && "function" == typeof _r && t.addEventListener(_n3.slice(2).toLowerCase(), _r);
        }
      }
    })(s, e);

    var a = n;

    for (var _len = arguments.length, i = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      i[_key - 3] = arguments[_key];
    }

    return n && i && (a = "object" == _typeof(n) && n instanceof Array ? [].concat(_toConsumableArray(r(n)), _toConsumableArray(r(i))) : [n].concat(_toConsumableArray(r(i)))), o(s, a), s;
  };
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EzQzBFLENBQXI1QixDQUFmIiwiZmlsZSI6ImRlU3RhZ25hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERlU3RhZ25hdGU9ZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihyKXtpZihlW3JdKXJldHVybiBlW3JdLmV4cG9ydHM7dmFyIG89ZVtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxyKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KW4uZChyLG8sZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgcj10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24odCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlLmNyZWF0ZUVsZW1lbnQ9dm9pZCAwO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjIuNFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZVxuICovXG5jb25zdCBvPXIobigxKSksaT1yKG4oMikpO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjIuMVxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZVxuICogQGNsYXNzZGVzYyBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjbGFzc1xuICogQG5hbWVzcGFjZVxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIHMgZXh0ZW5kcyBvLmRlZmF1bHR7Y29uc3RydWN0b3IodCxlKXtpZihzdXBlcigpLHRoaXMucHJvcHM9ZSx0aGlzLmNyZWF0ZUVsZW1lbnQ9cy5jcmVhdGVFbGVtZW50LHRoaXMuX3N0YXRlPXt9LHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZT0hMSx0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlPSh0LGUpPT5bdCxlXSx0aGlzLnNldFN0YXRlPXQ9Pnt0cnl7dGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKCk7Zm9yKGNvbnN0IGUgb2YgT2JqZWN0LmtleXModCkpaWYoIU9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLmluY2x1ZGVzKGUpKXRocm93IG5ldyBFcnJvcihgQSBuZXcga2V5ICgke2V9KSBzaG91bGQgbm90IGJlIHNldCB3aXRoIHNldFN0YXRlLCB3aGljaCBoYXMga2V5cyAke0pTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpKX0uIERlY2xhcmUgYWxsIHN0YXRlIHZhcmlhYmxlcyBpbiBjb25zdHJ1Y3Rvci5gKTtPYmplY3QuYXNzaWduKHRoaXMuX3N0YXRlLHQpLHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7Y29uc3QgZT10aGlzLnJlbmRlcigpO2lmKGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgdCBvZiBlKXRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0KTtlbHNlIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChlKTt0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpfWNhdGNoKHQpe3JldHVybiB0aGlzLmNvbXBvbmVudERpZENhdGNoKHQpLHR9fSx0aGlzLm1vdW50Q29tcG9uZW50PSgpPT57dHJ5e2NvbnN0IHQ9dGhpcy5yZW5kZXIoKTtpZih0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGU9ITAsdGhpcy5jb21wb25lbnRXaWxsTW91bnQoKSwhdCl7dGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgcmVuZGVyIG1ldGhvZCB0byBiZSBpbmNsdWRlZCBpbiBjb21wb25lbnQgY2xhc3MsIG5vIHJlbmRlciBtZXRob2QgZm91bmQsIG9yIHJlbmRlciByZXR1cm5lZCBhbiBlbXB0eSBhcnJheVwiKX1yZXR1cm4gdGhpcy5jb21wb25lbnREaWRNb3VudCgpLHQgaW5zdGFuY2VvZiBBcnJheT90Lm1hcCh0PT50aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQodCkpOnRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0KX1jYXRjaCh0KXtyZXR1cm4gdGhpcy5jb21wb25lbnREaWRDYXRjaCh0KSx0fX0sdGhpcy5tb3VudD10aGlzLm1vdW50Q29tcG9uZW50LHRoaXMudW5tb3VudENvbXBvbmVudD0oKT0+e3RyeXt0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCksdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKX1jYXRjaCh0KXt0aGlzLmNvbXBvbmVudERpZENhdGNoKHQpfX0sdGhpcy51bm1vdW50PXRoaXMudW5tb3VudENvbXBvbmVudCx0aGlzLl9yZW1vdmVDaGlsZHJlbj0oKT0+e2Zvcig7dGhpcy5fcGFyZW50LmZpcnN0Q2hpbGQmJnRoaXMuX3BhcmVudC5sYXN0Q2hpbGQ7KXRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKX0sW1wiYm9keVwiLFwiaHRtbFwiXS5pbmNsdWRlcyh0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSkpdGhyb3cgbmV3IEVycm9yKGBXQVJOSU5HISBBdm9pZCB1c2luZyAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSBhcyBlbGVtZW50IHBhcmVudCwgYXMgYWxsIGVsZW1lbnRzIHdpdGhpbiAke3QudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSB3aWxsIGJlIHJlbW92ZWQgb24gcmUtcmVuZGVyYCk7dGhpcy5fcGFyZW50PXR9Z2V0IGdldFN0YXRlKCl7cmV0dXJuIHRoaXMuc3RhdGV9Z2V0IHN0YXRlKCl7cmV0dXJuIHRoaXMuX3N0YXRlfXNldCBzdGF0ZSh0KXt0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGU/KHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKFwiRG8gbm90IG11dGF0ZSBzdGF0ZSBkaXJlY3RseS4gVXNlIHNldFN0YXRlIGluc3RlYWRcIikpLHRoaXMuc2V0U3RhdGUodCkpOih0aGlzLl9zdGF0ZT10LHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZT0hMCl9Z2V0IGdldFByb3BzKCl7cmV0dXJuIHRoaXMucHJvcHN9fWUuZGVmYXVsdD1zLHMuY3JlYXRlRWxlbWVudD1pLmRlZmF1bHQsZS5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdH0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjIuNFxuICogQGV4cG9ydHMgUHJlc2V0XG4gKiBAcGFja2FnZVxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZS5kZWZhdWx0PWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5jb21wb25lbnREaWRDYXRjaD10PT5jb25zb2xlLmVycm9yKHQpLHRoaXMuY29tcG9uZW50RGlkTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50RGlkVXBkYXRlPSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlPSgpPT57fSx0aGlzLnJlbmRlcj0oKT0+bnVsbH19fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMi40XG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50XG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtjb25zdCByPXQ9Pntjb25zdCBlPVtdO2Zvcihjb25zdCBuIG9mIHQpXCJvYmplY3RcIj09dHlwZW9mIG4mJm4gaW5zdGFuY2VvZiBBcnJheT9lLnB1c2goLi4ucihuKSk6ZS5wdXNoKG4pO3JldHVybiBlfSxvPSh0LGUpPT57aWYoZXx8MD09PWUpaWYoZSBpbnN0YW5jZW9mIEFycmF5KWZvcihjb25zdCBuIG9mIGUpXCJzdHJpbmdcIj09dHlwZW9mIG58fFwibnVtYmVyXCI9PXR5cGVvZiBuP3QuaW5uZXJUZXh0PW4udG9TdHJpbmcoKTpcIm9iamVjdFwiPT10eXBlb2YgbiYmbiBpbnN0YW5jZW9mIEFycmF5P3IobikuZm9yRWFjaChlPT5vKHQsZSkpOnQuYXBwZW5kQ2hpbGQobik7ZWxzZVwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZT90LmlubmVyVGV4dD1lLnRvU3RyaW5nKCk6dC5hcHBlbmRDaGlsZChlKX07ZS5kZWZhdWx0PSh0LGUsbiwuLi5pKT0+e2NvbnN0IHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KTsoKHQsZSk9PntpZihlKWZvcihjb25zdFtuLHJdb2YgT2JqZWN0LmVudHJpZXMoZSkpXCJzdHJpbmdcIj09dHlwZW9mIHI/XCJpbm5lckhUTUxcIj09PW4/dC5pbm5lckhUTUw9ci50b1N0cmluZygpOnQuc2V0QXR0cmlidXRlKG4sci50b1N0cmluZygpKTpcIm9uXCI9PT1uLnNsaWNlKDAsMikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHImJnQuYWRkRXZlbnRMaXN0ZW5lcihuLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCkscil9KShzLGUpO2xldCBhPW47cmV0dXJuIG4mJmkmJihhPVwib2JqZWN0XCI9PXR5cGVvZiBuJiZuIGluc3RhbmNlb2YgQXJyYXk/Wy4uLnIobiksLi4ucihpKV06W24sLi4ucihpKV0pLG8ocyxhKSxzfX1dKTsiXX0=