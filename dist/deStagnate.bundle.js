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

      if (_this = _super.call(this), _this.props = e, _this.createElement = s.createElement, _this.state = {}, _this.getSnapshotBeforeUpdate = function (t, e) {
        return [t, e];
      }, _this.setState = function (t) {
        try {
          _this.componentWillUpdate();

          for (var _i = 0, _Object$keys = Object.keys(t); _i < _Object$keys.length; _i++) {
            var _e2 = _Object$keys[_i];

            if (!Object.keys(_this.state).includes(_e2)) {
              throw new Error("A new key ".concat(_e2, " should not be set with setState, which has keys ").concat(JSON.stringify(Object.keys(_this.state)), ". Declare all state variables in constructor."));
            }
          }

          Object.assign(_this.state, t), _this._removeChildren();

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLFlBQUYsQ0FBZSxHQUFmLEVBQWlCLEVBQUMsQ0FBQyxRQUFGLEVBQWpCLENBQTVELEdBQTJGLFNBQU8sR0FBQyxDQUFDLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFQLElBQXFCLGNBQVksT0FBTyxFQUF4QyxJQUEyQyxDQUFDLENBQUMsZ0JBQUYsQ0FBbUIsR0FBQyxDQUFDLEtBQUYsQ0FBUSxDQUFSLEVBQVcsV0FBWCxFQUFuQixFQUE0QyxFQUE1QyxDQUF0STtBQUFuQztBQUFMO0FBQTZOLEtBQXRPLEVBQXdPLENBQXhPLEVBQTBPLENBQTFPOztBQUE2TyxRQUFJLENBQUMsR0FBQyxDQUFOOztBQUFoUixzQ0FBSixDQUFJO0FBQUosTUFBQSxDQUFJO0FBQUE7O0FBQXdSLFdBQU8sQ0FBQyxJQUFFLENBQUgsS0FBTyxDQUFDLEdBQUMsb0JBQWlCLENBQWpCLEtBQW9CLENBQUMsWUFBWSxLQUFqQyxnQ0FBMkMsQ0FBQyxDQUFDLENBQUQsQ0FBNUMsc0JBQW1ELENBQUMsQ0FBQyxDQUFELENBQXBELE1BQTBELENBQTFELDRCQUErRCxDQUFDLENBQUMsQ0FBRCxDQUFoRSxFQUFULEdBQStFLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFoRixFQUFzRixDQUE3RjtBQUErRixHQUEvWTtBQUFnWixDQTNDMEUsQ0FBcjVCLENBQWYiLCJmaWxlIjoiZGVTdGFnbmF0ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRGVTdGFnbmF0ZT1mdW5jdGlvbih0KXt2YXIgZT17fTtmdW5jdGlvbiBuKHIpe2lmKGVbcl0pcmV0dXJuIGVbcl0uZXhwb3J0czt2YXIgbz1lW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09dCxuLmM9ZSxuLmQ9ZnVuY3Rpb24odCxlLHIpe24ubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24odCxlKXtpZigxJmUmJih0PW4odCkpLDgmZSlyZXR1cm4gdDtpZig0JmUmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImZSYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpbi5kKHIsbyxmdW5jdGlvbihlKXtyZXR1cm4gdFtlXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBuLmQoZSxcImFcIixlKSxlfSxuLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LG4ucD1cIlwiLG4obi5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuY3JlYXRlRWxlbWVudD12b2lkIDA7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMi40XG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlXG4gKi9cbmNvbnN0IG89cihuKDEpKSxpPXIobigyKSk7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMi4xXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlXG4gKiBAY2xhc3NkZXNjIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNsYXNzXG4gKiBAbmFtZXNwYWNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgcyBleHRlbmRzIG8uZGVmYXVsdHtjb25zdHJ1Y3Rvcih0LGUpe2lmKHN1cGVyKCksdGhpcy5wcm9wcz1lLHRoaXMuY3JlYXRlRWxlbWVudD1zLmNyZWF0ZUVsZW1lbnQsdGhpcy5zdGF0ZT17fSx0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlPSh0LGUpPT5bdCxlXSx0aGlzLnNldFN0YXRlPXQ9Pnt0cnl7dGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKCk7Zm9yKGNvbnN0IGUgb2YgT2JqZWN0LmtleXModCkpaWYoIU9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLmluY2x1ZGVzKGUpKXRocm93IG5ldyBFcnJvcihgQSBuZXcga2V5ICR7ZX0gc2hvdWxkIG5vdCBiZSBzZXQgd2l0aCBzZXRTdGF0ZSwgd2hpY2ggaGFzIGtleXMgJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyh0aGlzLnN0YXRlKSl9LiBEZWNsYXJlIGFsbCBzdGF0ZSB2YXJpYWJsZXMgaW4gY29uc3RydWN0b3IuYCk7T2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLHQpLHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7Y29uc3QgZT10aGlzLnJlbmRlcigpO2lmKGUgaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgdCBvZiBlKXRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0KTtlbHNlIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChlKTt0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSgpfWNhdGNoKHQpe3JldHVybiB0aGlzLmNvbXBvbmVudERpZENhdGNoKHQpLHR9fSx0aGlzLm1vdW50Q29tcG9uZW50PSgpPT57dHJ5e2NvbnN0IHQ9dGhpcy5yZW5kZXIoKTtpZih0aGlzLmNvbXBvbmVudFdpbGxNb3VudCgpLCF0KXt0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCByZW5kZXIgbWV0aG9kIHRvIGJlIGluY2x1ZGVkIGluIGNvbXBvbmVudCBjbGFzcywgbm8gcmVuZGVyIG1ldGhvZCBmb3VuZCwgb3IgcmVuZGVyIHJldHVybmVkIGFuIGVtcHR5IGFycmF5XCIpfXJldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50KCksdCBpbnN0YW5jZW9mIEFycmF5P3QubWFwKHQ9PnRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZCh0KSk6dGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKHQpfWNhdGNoKHQpe3JldHVybiB0aGlzLmNvbXBvbmVudERpZENhdGNoKHQpLHR9fSx0aGlzLm1vdW50PXRoaXMubW91bnRDb21wb25lbnQsdGhpcy51bm1vdW50Q29tcG9uZW50PSgpPT57dHJ5e3RoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKSx0aGlzLl9yZW1vdmVDaGlsZHJlbigpfWNhdGNoKHQpe3RoaXMuY29tcG9uZW50RGlkQ2F0Y2godCl9fSx0aGlzLnVubW91bnQ9dGhpcy51bm1vdW50Q29tcG9uZW50LHRoaXMuX3JlbW92ZUNoaWxkcmVuPSgpPT57Zm9yKDt0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCYmdGhpcy5fcGFyZW50Lmxhc3RDaGlsZDspdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpfSxbXCJib2R5XCIsXCJodG1sXCJdLmluY2x1ZGVzKHQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSl0aHJvdyBuZXcgRXJyb3IoYFdBUk5JTkchIEF2b2lkIHVzaW5nICR7dC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9IGFzIGVsZW1lbnQgcGFyZW50LCBhcyBhbGwgZWxlbWVudHMgd2l0aGluICR7dC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9IHdpbGwgYmUgcmVtb3ZlZCBvbiByZS1yZW5kZXJgKTt0aGlzLl9wYXJlbnQ9dH1nZXQgZ2V0U3RhdGUoKXtyZXR1cm4gdGhpcy5zdGF0ZX1nZXQgZ2V0UHJvcHMoKXtyZXR1cm4gdGhpcy5wcm9wc319ZS5kZWZhdWx0PXMscy5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdCxlLmNyZWF0ZUVsZW1lbnQ9aS5kZWZhdWx0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMi40XG4gKiBAZXhwb3J0cyBQcmVzZXRcbiAqIEBwYWNrYWdlXG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtlLmRlZmF1bHQ9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmNvbXBvbmVudERpZENhdGNoPXQ9PmNvbnNvbGUuZXJyb3IodCksdGhpcy5jb21wb25lbnREaWRNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnREaWRVcGRhdGU9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbE1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGU9KCk9Pnt9LHRoaXMucmVuZGVyPSgpPT5udWxsfX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4yLjRcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnRcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IHI9dD0+e2NvbnN0IGU9W107Zm9yKGNvbnN0IG4gb2YgdClcIm9iamVjdFwiPT10eXBlb2YgbiYmbiBpbnN0YW5jZW9mIEFycmF5P2UucHVzaCguLi5yKG4pKTplLnB1c2gobik7cmV0dXJuIGV9LG89KHQsZSk9PntpZihlfHwwPT09ZSlpZihlIGluc3RhbmNlb2YgQXJyYXkpZm9yKGNvbnN0IG4gb2YgZSlcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/dC5pbm5lclRleHQ9bi50b1N0cmluZygpOlwib2JqZWN0XCI9PXR5cGVvZiBuJiZuIGluc3RhbmNlb2YgQXJyYXk/cihuKS5mb3JFYWNoKGU9Pm8odCxlKSk6dC5hcHBlbmRDaGlsZChuKTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlP3QuaW5uZXJUZXh0PWUudG9TdHJpbmcoKTp0LmFwcGVuZENoaWxkKGUpfTtlLmRlZmF1bHQ9KHQsZSxuLC4uLmkpPT57Y29uc3Qgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpOygodCxlKT0+e2lmKGUpZm9yKGNvbnN0W24scl1vZiBPYmplY3QuZW50cmllcyhlKSlcInN0cmluZ1wiPT10eXBlb2Ygcj9cImlubmVySFRNTFwiPT09bj90LmlubmVySFRNTD1yLnRvU3RyaW5nKCk6dC5zZXRBdHRyaWJ1dGUobixyLnRvU3RyaW5nKCkpOlwib25cIj09PW4uc2xpY2UoMCwyKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgciYmdC5hZGRFdmVudExpc3RlbmVyKG4uc2xpY2UoMikudG9Mb3dlckNhc2UoKSxyKX0pKHMsZSk7bGV0IGE9bjtyZXR1cm4gbiYmaSYmKGE9XCJvYmplY3RcIj09dHlwZW9mIG4mJm4gaW5zdGFuY2VvZiBBcnJheT9bLi4ucihuKSwuLi5yKGkpXTpbbiwuLi5yKGkpXSksbyhzLGEpLHN9fV0pOyJdfQ==