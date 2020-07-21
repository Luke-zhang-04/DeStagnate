/* Destagnate v1.4.0 | Copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io | MIT License */

"use strict";

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) { return Array.from(iter); } }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { return _arrayLikeToArray(arr); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) { o = it; } var i = 0, F = function () {}; return { s: F, n: function n() { if (i >= o.length) { return { done: !0 }; } return { done: !1, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = !0, didErr = !1, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = !0; err = _e5; }, f: function f() { try { if (!normalCompletion && it["return"] != null) { it["return"](); } } finally { if (didErr) { throw err; } } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) { return; } if (typeof o === "string") { return _arrayLikeToArray(o, minLen); } var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) { n = o.constructor.name; } if (n === "Map" || n === "Set") { return Array.from(o); } if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return _arrayLikeToArray(o, minLen); } }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) { len = arr.length; } for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) { return; } var _arr = [], _n = !0, _d = !1, _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = !0) { _arr.push(_s.value); if (i && _arr.length === i) { break; } } } catch (err) { _d = !0; _e = err; } finally { try { if (!_n && _i["return"] != null) { _i["return"](); } } finally { if (_d) { throw _e; } } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) { return arr; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DeStagnate = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) {
      return t[r].exports;
    }

    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) {
      return e;
    }

    if (4 & t && "object" == _typeof(e) && e && e.__esModule) {
      return e;
    }

    var r = Object.create(null);

    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) {
      for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
    }

    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t) {
  "use strict";
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.4.0
   * @exports createElement
   */

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t._bindChildren = t._unpackChildren = t._bindProps = void 0, t._bindProps = function (e, t) {
    var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;

    if (t) {
      for (var _i = 0, _Object$entries = Object.entries(t); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            r = _Object$entries$_i[0],
            o = _Object$entries$_i[1];

        "string" == typeof o || "number" == typeof o ? "innerHTML" === r ? e.innerHTML = o.toString() : n ? e.setAttributeNS(null, r, o.toString()) : e.setAttribute(r, o.toString()) : "on" === r.slice(0, 2) ? "function" == typeof o && e.addEventListener(r.slice(2).toLowerCase(), o) : console.warn("WARN: Invalid prop type \"".concat(_typeof(o), "\" for key \"").concat(r, "\". Skipping prop."));
      }
    }
  }, t._unpackChildren = function (e) {
    var n = [];

    var _iterator = _createForOfIteratorHelper(e),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var r = _step.value;
        "object" == _typeof(r) && r instanceof Array ? n.push.apply(n, _toConsumableArray(t._unpackChildren(r))) : n.push(r);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return n;
  }, t._bindChildren = function (e, n) {
    if (n || 0 === n) {
      if (n instanceof Array) {
        var _iterator2 = _createForOfIteratorHelper(n),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var r = _step2.value;
            "string" == typeof r || "number" == typeof r ? e.innerText = r.toString() : "object" == _typeof(r) && r instanceof Array ? t._unpackChildren(r).forEach(function (n) {
              return t._bindChildren(e, n);
            }) : e.appendChild(r);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else "string" == typeof n || "number" == typeof n ? e.innerText = n.toString() : e.appendChild(n);
    }
  };

  t["default"] = function (e, n, r) {
    var i = document.createElement(e);

    t._bindProps(i, n);

    for (var s = r, _len = arguments.length, o = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      o[_key - 3] = arguments[_key];
    }

    return r && o && (s = "object" == _typeof(r) && r instanceof Array ? [].concat(_toConsumableArray(t._unpackChildren(r)), _toConsumableArray(t._unpackChildren(o))) : [r].concat(_toConsumableArray(t._unpackChildren(o)))), t._bindChildren(i, s), i;
  };
}, function (e, t, n) {
  "use strict";
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.4.0
   * @exports DeStagnate main destagnate class
   * @file main file for destagnate
   */

  var r = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.createElementNS = t.createElement = void 0;
  var o = r(n(2)),
      i = r(n(0)),
      s = r(n(3));

  var a = function (_o$default) {
    _inherits(a, _o$default);

    var _super = _createSuper(a);

    function a(e, t) {
      var _this;

      _classCallCheck(this, a);

      _this = _super.call(this), _this.props = t, _this.createElement = a.createElement, _this.createElementNS = a.createElementNS, _this._state = {}, _this._didSetInitialState = !1, _this.getSnapshotBeforeUpdate = function (e, t) {
        return [e, t];
      }, _this.setState = function (e) {
        try {
          _this.componentWillUpdate();

          for (var _i2 = 0, _Object$keys = Object.keys(e); _i2 < _Object$keys.length; _i2++) {
            var _t2 = _Object$keys[_i2];
            Object.keys(_this.state).includes(_t2) || console.warn("WARN: New key (".concat(_t2, ") should not be set with setState, which has keys ").concat(JSON.stringify(Object.keys(_this.state)), ". Declare all state variables in constructor as a best practice."));
          }

          _this.getSnapshotBeforeUpdate(_this.props, _this.state), Object.assign(_this._state, e);

          var _t = _this._execRender();

          if ("object" == _typeof(_t) && _t instanceof Array) {
            var _iterator3 = _createForOfIteratorHelper(_t),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _e2 = _step3.value;

                _this._parent.appendChild(_e2);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } else _t && _this._parent.appendChild(_t);

          _this.componentDidUpdate();
        } catch (e) {
          return _this.componentDidCatch(e), e;
        }
      }, _this.mountComponent = function () {
        try {
          var _e3 = _this.render();

          if (_this._didSetInitialState = !0, _this.componentWillMount(), !_e3) {
            throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array");
          }

          return _this.componentDidMount(), "object" == _typeof(_e3) && _e3 instanceof Array ? _e3.map(function (e) {
            return _this._parent.appendChild(e);
          }) : _this._parent.appendChild(_e3);
        } catch (e) {
          return _this.componentDidCatch(e), e;
        }
      }, _this.mount = _this.mountComponent, _this.unmountComponent = function () {
        try {
          _this.componentWillUnmount(), _this._removeChildren();
        } catch (e) {
          _this.componentDidCatch(e);
        }
      }, _this.unmount = _this.unmountComponent, _this._removeChildren = function () {
        for (; _this._parent.firstChild && _this._parent.lastChild;) {
          _this._parent.removeChild(_this._parent.lastChild);
        }
      }, _this._execRender = function () {
        return _this._removeChildren(), _this.render();
      }, ["body", "html"].includes(e.tagName.toLowerCase()) && console.warn("WARNING! Avoid using ".concat(e.tagName.toLowerCase(), " as element parent, as all elements within ").concat(e.tagName.toLowerCase(), " will be removed on re-render")), _this._parent = e;
      return _this;
    }

    _createClass(a, [{
      key: "getState",
      get: function get() {
        return this.state;
      }
    }, {
      key: "state",
      get: function get() {
        return this._state;
      },
      set: function set(e) {
        this._didSetInitialState ? (this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead.")), console.warn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly"), this.setState(e)) : (this._state = e, this._didSetInitialState = !0);
      }
    }, {
      key: "getProps",
      get: function get() {
        return this.props;
      }
    }]);

    return a;
  }(o["default"]);

  t["default"] = a, a.createElement = i["default"], a.createElementNS = s["default"], t.createElement = i["default"], t.createElementNS = s["default"];
}, function (e, t) {
  "use strict";
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.4.0
   * @exports Preset
   * @package
   */

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] = function () {
    function _class() {
      _classCallCheck(this, _class);

      this.componentDidCatch = function (e) {
        return console.error(e);
      }, this.componentDidMount = function () {}, this.componentDidUpdate = function () {}, this.componentWillMount = function () {}, this.componentWillUnmount = function () {}, this.componentWillUpdate = function () {}, this.render = function () {
        return null;
      };
    }

    return _class;
  }();
}, function (e, t, n) {
  "use strict";
  /**
   * DeStagnate
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.4.0
   * @exports createElementNS
   */

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.createElementNS = void 0;
  var r = n(0);
  t.createElementNS = function (e, t, n, o) {
    var s = document.createElementNS(e, t);

    r._bindProps(s, n, !0);

    for (var a = o, _len2 = arguments.length, i = new Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
      i[_key2 - 4] = arguments[_key2];
    }

    return o && i && (a = "object" == _typeof(o) && o instanceof Array ? [].concat(_toConsumableArray(r._unpackChildren(o)), _toConsumableArray(r._unpackChildren(i))) : [o].concat(_toConsumableArray(r._unpackChildren(i)))), r._bindChildren(s, a), s;
  }, t["default"] = t.createElementNS;
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFELENBQVQ7QUFBYSxFQUFBLENBQUMsQ0FBQyxlQUFGLEdBQWtCLFVBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFnQjtBQUFDLFFBQU0sQ0FBQyxHQUFDLFFBQVEsQ0FBQyxlQUFULENBQXlCLENBQXpCLEVBQTJCLENBQTNCLENBQVI7O0FBQXNDLElBQUEsQ0FBQyxDQUFDLFVBQUYsQ0FBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFDLENBQWxCOztBQUF2QyxhQUFnRSxDQUFDLEdBQUMsQ0FBbEUsNEJBQUosQ0FBSTtBQUFKLE1BQUEsQ0FBSTtBQUFBOztBQUFvRSxXQUFPLENBQUMsSUFBRSxDQUFILEtBQU8sQ0FBQyxHQUFDLG9CQUFpQixDQUFqQixLQUFvQixDQUFDLFlBQVksS0FBakMsZ0NBQTJDLENBQUMsQ0FBQyxlQUFGLENBQWtCLENBQWxCLENBQTNDLHNCQUFtRSxDQUFDLENBQUMsZUFBRixDQUFrQixDQUFsQixDQUFuRSxNQUEwRixDQUExRiw0QkFBK0YsQ0FBQyxDQUFDLGVBQUYsQ0FBa0IsQ0FBbEIsQ0FBL0YsRUFBVCxHQUErSCxDQUFDLENBQUMsYUFBRixDQUFnQixDQUFoQixFQUFrQixDQUFsQixDQUEvSCxFQUFvSixDQUEzSjtBQUE2SixHQUFuUSxFQUFvUSxDQUFDLFdBQUQsR0FBVSxDQUFDLENBQUMsZUFBaFI7QUFBZ1MsQ0F0QzBpQixDQUFyNUIsQ0FBZiIsImZpbGUiOiJkZVN0YWduYXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBEZVN0YWduYXRlPWZ1bmN0aW9uKGUpe3ZhciB0PXt9O2Z1bmN0aW9uIG4ocil7aWYodFtyXSlyZXR1cm4gdFtyXS5leHBvcnRzO3ZhciBvPXRbcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz10LG4uZD1mdW5jdGlvbihlLHQscil7bi5vKGUsdCl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHQpe2lmKDEmdCYmKGU9bihlKSksOCZ0KXJldHVybiBlO2lmKDQmdCYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZ0JiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSluLmQocixvLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxuLm49ZnVuY3Rpb24oZSl7dmFyIHQ9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZCh0LFwiYVwiLHQpLHR9LG4ubz1mdW5jdGlvbihlLHQpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sbi5wPVwiXCIsbihuLnM9MSl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuNC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50XG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0Ll9iaW5kQ2hpbGRyZW49dC5fdW5wYWNrQ2hpbGRyZW49dC5fYmluZFByb3BzPXZvaWQgMCx0Ll9iaW5kUHJvcHM9KGUsdCxuPSExKT0+e2lmKHQpZm9yKGNvbnN0W3Isb11vZiBPYmplY3QuZW50cmllcyh0KSlcInN0cmluZ1wiPT10eXBlb2Ygb3x8XCJudW1iZXJcIj09dHlwZW9mIG8/XCJpbm5lckhUTUxcIj09PXI/ZS5pbm5lckhUTUw9by50b1N0cmluZygpOm4/ZS5zZXRBdHRyaWJ1dGVOUyhudWxsLHIsby50b1N0cmluZygpKTplLnNldEF0dHJpYnV0ZShyLG8udG9TdHJpbmcoKSk6XCJvblwiPT09ci5zbGljZSgwLDIpP1wiZnVuY3Rpb25cIj09dHlwZW9mIG8mJmUuYWRkRXZlbnRMaXN0ZW5lcihyLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksbyk6Y29uc29sZS53YXJuKGBXQVJOOiBJbnZhbGlkIHByb3AgdHlwZSBcIiR7dHlwZW9mIG99XCIgZm9yIGtleSBcIiR7cn1cIi4gU2tpcHBpbmcgcHJvcC5gKX0sdC5fdW5wYWNrQ2hpbGRyZW49ZT0+e2NvbnN0IG49W107Zm9yKGNvbnN0IHIgb2YgZSlcIm9iamVjdFwiPT10eXBlb2YgciYmciBpbnN0YW5jZW9mIEFycmF5P24ucHVzaCguLi50Ll91bnBhY2tDaGlsZHJlbihyKSk6bi5wdXNoKHIpO3JldHVybiBufSx0Ll9iaW5kQ2hpbGRyZW49KGUsbik9PntpZihufHwwPT09bilpZihuIGluc3RhbmNlb2YgQXJyYXkpZm9yKGNvbnN0IHIgb2YgbilcInN0cmluZ1wiPT10eXBlb2Ygcnx8XCJudW1iZXJcIj09dHlwZW9mIHI/ZS5pbm5lclRleHQ9ci50b1N0cmluZygpOlwib2JqZWN0XCI9PXR5cGVvZiByJiZyIGluc3RhbmNlb2YgQXJyYXk/dC5fdW5wYWNrQ2hpbGRyZW4ocikuZm9yRWFjaChuPT50Ll9iaW5kQ2hpbGRyZW4oZSxuKSk6ZS5hcHBlbmRDaGlsZChyKTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIG58fFwibnVtYmVyXCI9PXR5cGVvZiBuP2UuaW5uZXJUZXh0PW4udG9TdHJpbmcoKTplLmFwcGVuZENoaWxkKG4pfTt0LmRlZmF1bHQ9KGUsbixyLC4uLm8pPT57Y29uc3QgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KGUpO3QuX2JpbmRQcm9wcyhpLG4pO2xldCBzPXI7cmV0dXJuIHImJm8mJihzPVwib2JqZWN0XCI9PXR5cGVvZiByJiZyIGluc3RhbmNlb2YgQXJyYXk/Wy4uLnQuX3VucGFja0NoaWxkcmVuKHIpLC4uLnQuX3VucGFja0NoaWxkcmVuKG8pXTpbciwuLi50Ll91bnBhY2tDaGlsZHJlbihvKV0pLHQuX2JpbmRDaGlsZHJlbihpLHMpLGl9fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuNC4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlIG1haW4gZGVzdGFnbmF0ZSBjbGFzc1xuICogQGZpbGUgbWFpbiBmaWxlIGZvciBkZXN0YWduYXRlXG4gKi92YXIgcj10aGlzJiZ0aGlzLl9faW1wb3J0RGVmYXVsdHx8ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmNyZWF0ZUVsZW1lbnROUz10LmNyZWF0ZUVsZW1lbnQ9dm9pZCAwO2NvbnN0IG89cihuKDIpKSxpPXIobigwKSkscz1yKG4oMykpO2NsYXNzIGEgZXh0ZW5kcyBvLmRlZmF1bHR7Y29uc3RydWN0b3IoZSx0KXtzdXBlcigpLHRoaXMucHJvcHM9dCx0aGlzLmNyZWF0ZUVsZW1lbnQ9YS5jcmVhdGVFbGVtZW50LHRoaXMuY3JlYXRlRWxlbWVudE5TPWEuY3JlYXRlRWxlbWVudE5TLHRoaXMuX3N0YXRlPXt9LHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZT0hMSx0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlPShlLHQpPT5bZSx0XSx0aGlzLnNldFN0YXRlPWU9Pnt0cnl7dGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKCk7Zm9yKGNvbnN0IHQgb2YgT2JqZWN0LmtleXMoZSkpT2JqZWN0LmtleXModGhpcy5zdGF0ZSkuaW5jbHVkZXModCl8fGNvbnNvbGUud2FybihgV0FSTjogTmV3IGtleSAoJHt0fSkgc2hvdWxkIG5vdCBiZSBzZXQgd2l0aCBzZXRTdGF0ZSwgd2hpY2ggaGFzIGtleXMgJHtKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyh0aGlzLnN0YXRlKSl9LiBEZWNsYXJlIGFsbCBzdGF0ZSB2YXJpYWJsZXMgaW4gY29uc3RydWN0b3IgYXMgYSBiZXN0IHByYWN0aWNlLmApO3RoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUodGhpcy5wcm9wcyx0aGlzLnN0YXRlKSxPYmplY3QuYXNzaWduKHRoaXMuX3N0YXRlLGUpO2NvbnN0IHQ9dGhpcy5fZXhlY1JlbmRlcigpO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0IGluc3RhbmNlb2YgQXJyYXkpZm9yKGNvbnN0IGUgb2YgdCl0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZSk7ZWxzZSB0JiZ0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQodCk7dGhpcy5jb21wb25lbnREaWRVcGRhdGUoKX1jYXRjaChlKXtyZXR1cm4gdGhpcy5jb21wb25lbnREaWRDYXRjaChlKSxlfX0sdGhpcy5tb3VudENvbXBvbmVudD0oKT0+e3RyeXtjb25zdCBlPXRoaXMucmVuZGVyKCk7aWYodGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlPSEwLHRoaXMuY29tcG9uZW50V2lsbE1vdW50KCksIWUpe3Rocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHJlbmRlciBtZXRob2QgdG8gYmUgaW5jbHVkZWQgaW4gY29tcG9uZW50IGNsYXNzLCBubyByZW5kZXIgbWV0aG9kIGZvdW5kLCBvciByZW5kZXIgcmV0dXJuZWQgYW4gZW1wdHkgYXJyYXlcIil9cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKSxcIm9iamVjdFwiPT10eXBlb2YgZSYmZSBpbnN0YW5jZW9mIEFycmF5P2UubWFwKGU9PnRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChlKSk6dGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGUpfWNhdGNoKGUpe3JldHVybiB0aGlzLmNvbXBvbmVudERpZENhdGNoKGUpLGV9fSx0aGlzLm1vdW50PXRoaXMubW91bnRDb21wb25lbnQsdGhpcy51bm1vdW50Q29tcG9uZW50PSgpPT57dHJ5e3RoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKSx0aGlzLl9yZW1vdmVDaGlsZHJlbigpfWNhdGNoKGUpe3RoaXMuY29tcG9uZW50RGlkQ2F0Y2goZSl9fSx0aGlzLnVubW91bnQ9dGhpcy51bm1vdW50Q29tcG9uZW50LHRoaXMuX3JlbW92ZUNoaWxkcmVuPSgpPT57Zm9yKDt0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCYmdGhpcy5fcGFyZW50Lmxhc3RDaGlsZDspdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpfSx0aGlzLl9leGVjUmVuZGVyPSgpPT4odGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKSx0aGlzLnJlbmRlcigpKSxbXCJib2R5XCIsXCJodG1sXCJdLmluY2x1ZGVzKGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSYmY29uc29sZS53YXJuKGBXQVJOSU5HISBBdm9pZCB1c2luZyAke2UudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSBhcyBlbGVtZW50IHBhcmVudCwgYXMgYWxsIGVsZW1lbnRzIHdpdGhpbiAke2UudGFnTmFtZS50b0xvd2VyQ2FzZSgpfSB3aWxsIGJlIHJlbW92ZWQgb24gcmUtcmVuZGVyYCksdGhpcy5fcGFyZW50PWV9Z2V0IGdldFN0YXRlKCl7cmV0dXJuIHRoaXMuc3RhdGV9Z2V0IHN0YXRlKCl7cmV0dXJuIHRoaXMuX3N0YXRlfXNldCBzdGF0ZShlKXt0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGU/KHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKFwiRG8gbm90IG11dGF0ZSBzdGF0ZSBkaXJlY3RseS4gVXNlIHNldFN0YXRlIGluc3RlYWQuXCIpKSxjb25zb2xlLndhcm4oXCJEZVN0YWduYXRlIHByb3RlY3RzIHlvdSBmcm9tIG11dGF0aW5nIHRoZSBlbnRpcmUgc3RhdGUgb2JqZWN0LiBBdm9pZCBtdXRhdGluZyBzdGF0ZSBkaXJlY3RseVwiKSx0aGlzLnNldFN0YXRlKGUpKToodGhpcy5fc3RhdGU9ZSx0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGU9ITApfWdldCBnZXRQcm9wcygpe3JldHVybiB0aGlzLnByb3BzfX10LmRlZmF1bHQ9YSxhLmNyZWF0ZUVsZW1lbnQ9aS5kZWZhdWx0LGEuY3JlYXRlRWxlbWVudE5TPXMuZGVmYXVsdCx0LmNyZWF0ZUVsZW1lbnQ9aS5kZWZhdWx0LHQuY3JlYXRlRWxlbWVudE5TPXMuZGVmYXVsdH0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjQuMFxuICogQGV4cG9ydHMgUHJlc2V0XG4gKiBAcGFja2FnZVxuICovT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dC5kZWZhdWx0PWNsYXNze2NvbnN0cnVjdG9yKCl7dGhpcy5jb21wb25lbnREaWRDYXRjaD1lPT5jb25zb2xlLmVycm9yKGUpLHRoaXMuY29tcG9uZW50RGlkTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50RGlkVXBkYXRlPSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlPSgpPT57fSx0aGlzLnJlbmRlcj0oKT0+bnVsbH19fSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuNC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50TlNcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuY3JlYXRlRWxlbWVudE5TPXZvaWQgMDtjb25zdCByPW4oMCk7dC5jcmVhdGVFbGVtZW50TlM9KGUsdCxuLG8sLi4uaSk9Pntjb25zdCBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhlLHQpO3IuX2JpbmRQcm9wcyhzLG4sITApO2xldCBhPW87cmV0dXJuIG8mJmkmJihhPVwib2JqZWN0XCI9PXR5cGVvZiBvJiZvIGluc3RhbmNlb2YgQXJyYXk/Wy4uLnIuX3VucGFja0NoaWxkcmVuKG8pLC4uLnIuX3VucGFja0NoaWxkcmVuKGkpXTpbbywuLi5yLl91bnBhY2tDaGlsZHJlbihpKV0pLHIuX2JpbmRDaGlsZHJlbihzLGEpLHN9LHQuZGVmYXVsdD10LmNyZWF0ZUVsZW1lbnROU31dKTsiXX0=
