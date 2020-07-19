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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGVTdGFnbmF0ZT1mdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuY3JlYXRlRWxlbWVudD12b2lkIDA7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMi40XG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlXG4gKi9cbmNvbnN0IG89cihuKDEpKSxpPXIobigyKSk7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMi4xXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlXG4gKiBAY2xhc3NkZXNjIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNsYXNzXG4gKiBAbmFtZXNwYWNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgcyBleHRlbmRzIG8uZGVmYXVsdHtjb25zdHJ1Y3Rvcih0LGUpe2lmKHN1cGVyKCksdGhpcy5wcm9wcz1lLHRoaXMuY3JlYXRlRWxlbWVudD1zLmNyZWF0ZUVsZW1lbnQsdGhpcy5fc3RhdGU9e30sdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlPSExLHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU9KHQsZSk9Plt0LGVdLHRoaXMuc2V0U3RhdGU9dD0+e3RyeXt0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUoKTtmb3IoY29uc3QgZSBvZiBPYmplY3Qua2V5cyh0KSlpZighT2JqZWN0LmtleXModGhpcy5zdGF0ZSkuaW5jbHVkZXMoZSkpdGhyb3cgbmV3IEVycm9yKGBBIG5ldyBrZXkgKCR7ZX0pIHNob3VsZCBub3QgYmUgc2V0IHdpdGggc2V0U3RhdGUsIHdoaWNoIGhhcyBrZXlzICR7SlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXModGhpcy5zdGF0ZSkpfS4gRGVjbGFyZSBhbGwgc3RhdGUgdmFyaWFibGVzIGluIGNvbnN0cnVjdG9yLmApO09iamVjdC5hc3NpZ24odGhpcy5fc3RhdGUsdCksdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKTtjb25zdCBlPXRoaXMucmVuZGVyKCk7aWYoZSBpbnN0YW5jZW9mIEFycmF5KWZvcihjb25zdCB0IG9mIGUpdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKHQpO2Vsc2UgdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGUpO3RoaXMuY29tcG9uZW50RGlkVXBkYXRlKCl9Y2F0Y2godCl7cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2godCksdH19LHRoaXMubW91bnRDb21wb25lbnQ9KCk9Pnt0cnl7Y29uc3QgdD10aGlzLnJlbmRlcigpO2lmKHRoaXMuY29tcG9uZW50V2lsbE1vdW50KCksIXQpe3Rocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHJlbmRlciBtZXRob2QgdG8gYmUgaW5jbHVkZWQgaW4gY29tcG9uZW50IGNsYXNzLCBubyByZW5kZXIgbWV0aG9kIGZvdW5kLCBvciByZW5kZXIgcmV0dXJuZWQgYW4gZW1wdHkgYXJyYXlcIil9cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKSx0IGluc3RhbmNlb2YgQXJyYXk/dC5tYXAodD0+dGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKHQpKTp0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQodCl9Y2F0Y2godCl7cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2godCksdH19LHRoaXMubW91bnQ9dGhpcy5tb3VudENvbXBvbmVudCx0aGlzLnVubW91bnRDb21wb25lbnQ9KCk9Pnt0cnl7dGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpLHRoaXMuX3JlbW92ZUNoaWxkcmVuKCl9Y2F0Y2godCl7dGhpcy5jb21wb25lbnREaWRDYXRjaCh0KX19LHRoaXMudW5tb3VudD10aGlzLnVubW91bnRDb21wb25lbnQsdGhpcy5fcmVtb3ZlQ2hpbGRyZW49KCk9Pntmb3IoO3RoaXMuX3BhcmVudC5maXJzdENoaWxkJiZ0aGlzLl9wYXJlbnQubGFzdENoaWxkOyl0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCl9LFtcImJvZHlcIixcImh0bWxcIl0uaW5jbHVkZXModC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpKXRocm93IG5ldyBFcnJvcihgV0FSTklORyEgQXZvaWQgdXNpbmcgJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gYXMgZWxlbWVudCBwYXJlbnQsIGFzIGFsbCBlbGVtZW50cyB3aXRoaW4gJHt0LnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gd2lsbCBiZSByZW1vdmVkIG9uIHJlLXJlbmRlcmApO3RoaXMuX3BhcmVudD10fWdldCBnZXRTdGF0ZSgpe3JldHVybiB0aGlzLnN0YXRlfWdldCBzdGF0ZSgpe3JldHVybiB0aGlzLl9zdGF0ZX1zZXQgc3RhdGUodCl7dGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlPyh0aGlzLmNvbXBvbmVudERpZENhdGNoKG5ldyBFcnJvcihcIkRvIG5vdCBtdXRhdGUgc3RhdGUgZGlyZWN0bHkuIFVzZSBzZXRTdGF0ZSBpbnN0ZWFkXCIpKSx0aGlzLnNldFN0YXRlKHQpKToodGhpcy5fc3RhdGU9dCx0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGU9ITApfWdldCBnZXRQcm9wcygpe3JldHVybiB0aGlzLnByb3BzfX1lLmRlZmF1bHQ9cyxzLmNyZWF0ZUVsZW1lbnQ9aS5kZWZhdWx0LGUuY3JlYXRlRWxlbWVudD1pLmRlZmF1bHR9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4yLjRcbiAqIEBleHBvcnRzIFByZXNldFxuICogQHBhY2thZ2VcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2UuZGVmYXVsdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuY29tcG9uZW50RGlkQ2F0Y2g9dD0+Y29uc29sZS5lcnJvcih0KSx0aGlzLmNvbXBvbmVudERpZE1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZT0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZT0oKT0+e30sdGhpcy5yZW5kZXI9KCk9Pm51bGx9fX0sZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjIuNFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudFxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7Y29uc3Qgcj10PT57Y29uc3QgZT1bXTtmb3IoY29uc3QgbiBvZiB0KVwib2JqZWN0XCI9PXR5cGVvZiBuJiZuIGluc3RhbmNlb2YgQXJyYXk/ZS5wdXNoKC4uLnIobikpOmUucHVzaChuKTtyZXR1cm4gZX0sbz0odCxlKT0+e2lmKGV8fDA9PT1lKWlmKGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgbiBvZiBlKVwic3RyaW5nXCI9PXR5cGVvZiBufHxcIm51bWJlclwiPT10eXBlb2Ygbj90LmlubmVyVGV4dD1uLnRvU3RyaW5nKCk6XCJvYmplY3RcIj09dHlwZW9mIG4mJm4gaW5zdGFuY2VvZiBBcnJheT9yKG4pLmZvckVhY2goZT0+byh0LGUpKTp0LmFwcGVuZENoaWxkKG4pO2Vsc2VcInN0cmluZ1wiPT10eXBlb2YgZXx8XCJudW1iZXJcIj09dHlwZW9mIGU/dC5pbm5lclRleHQ9ZS50b1N0cmluZygpOnQuYXBwZW5kQ2hpbGQoZSl9O2UuZGVmYXVsdD0odCxlLG4sLi4uaSk9Pntjb25zdCBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7KCh0LGUpPT57aWYoZSlmb3IoY29uc3RbbixyXW9mIE9iamVjdC5lbnRyaWVzKGUpKVwic3RyaW5nXCI9PXR5cGVvZiByP1wiaW5uZXJIVE1MXCI9PT1uP3QuaW5uZXJIVE1MPXIudG9TdHJpbmcoKTp0LnNldEF0dHJpYnV0ZShuLHIudG9TdHJpbmcoKSk6XCJvblwiPT09bi5zbGljZSgwLDIpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZ0LmFkZEV2ZW50TGlzdGVuZXIobi5zbGljZSgyKS50b0xvd2VyQ2FzZSgpLHIpfSkocyxlKTtsZXQgYT1uO3JldHVybiBuJiZpJiYoYT1cIm9iamVjdFwiPT10eXBlb2YgbiYmbiBpbnN0YW5jZW9mIEFycmF5P1suLi5yKG4pLC4uLnIoaSldOltuLC4uLnIoaSldKSxvKHMsYSksc319XSk7Il19