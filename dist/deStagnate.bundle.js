/* Destagnate | Copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io | MIT License */

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
   * @version 1.3.1
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
   * @version 1.3.1
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

          if (_t instanceof Array) {
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
          } else _this._parent.appendChild(_t);

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
   * @version 1.3.1
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
   * @version 1.3.1
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlU3RhZ25hdGUuYnVuZGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFVBQVUsR0FBQyxVQUFTLENBQVQsRUFBVztBQUFDLE1BQUksQ0FBQyxHQUFDLEVBQU47O0FBQVMsV0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBRyxDQUFDLENBQUMsQ0FBRCxDQUFKO0FBQVEsYUFBTyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssT0FBWjtBQUFSOztBQUE0QixRQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUs7QUFBQyxNQUFBLENBQUMsRUFBQyxDQUFIO0FBQUssTUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFSO0FBQVUsTUFBQSxPQUFPLEVBQUM7QUFBbEIsS0FBWDtBQUFpQyxXQUFPLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxJQUFMLENBQVUsQ0FBQyxDQUFDLE9BQVosRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBQyxDQUFDLE9BQXhCLEVBQWdDLENBQWhDLEdBQW1DLENBQUMsQ0FBQyxDQUFGLEdBQUksQ0FBQyxDQUF4QyxFQUEwQyxDQUFDLENBQUMsT0FBbkQ7QUFBMkQ7O0FBQUEsU0FBTyxDQUFDLENBQUMsQ0FBRixHQUFJLENBQUosRUFBTSxDQUFDLENBQUMsQ0FBRixHQUFJLENBQVYsRUFBWSxDQUFDLENBQUMsQ0FBRixHQUFJLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxJQUFBLENBQUMsQ0FBQyxDQUFGLENBQUksQ0FBSixFQUFNLENBQU4sS0FBVSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixDQUF4QixFQUEwQjtBQUFDLE1BQUEsVUFBVSxFQUFDLENBQUMsQ0FBYjtBQUFlLE1BQUEsR0FBRyxFQUFDO0FBQW5CLEtBQTFCLENBQVY7QUFBMkQsR0FBM0YsRUFBNEYsQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVztBQUFDLG1CQUFhLE9BQU8sTUFBcEIsSUFBNEIsTUFBTSxDQUFDLFdBQW5DLElBQWdELE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLE1BQU0sQ0FBQyxXQUEvQixFQUEyQztBQUFDLE1BQUEsS0FBSyxFQUFDO0FBQVAsS0FBM0MsQ0FBaEQsRUFBNkcsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQyxNQUFBLEtBQUssRUFBQyxDQUFDO0FBQVIsS0FBckMsQ0FBN0c7QUFBOEosR0FBMVEsRUFBMlEsQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxRQUFHLElBQUUsQ0FBRixLQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFULEdBQWMsSUFBRSxDQUFuQjtBQUFxQixhQUFPLENBQVA7QUFBckI7O0FBQThCLFFBQUcsSUFBRSxDQUFGLElBQUssb0JBQWlCLENBQWpCLENBQUwsSUFBeUIsQ0FBekIsSUFBNEIsQ0FBQyxDQUFDLFVBQWpDO0FBQTRDLGFBQU8sQ0FBUDtBQUE1Qzs7QUFBcUQsUUFBSSxDQUFDLEdBQUMsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLENBQU47O0FBQTBCLFFBQUcsQ0FBQyxDQUFDLENBQUYsQ0FBSSxDQUFKLEdBQU8sTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsU0FBeEIsRUFBa0M7QUFBQyxNQUFBLFVBQVUsRUFBQyxDQUFDLENBQWI7QUFBZSxNQUFBLEtBQUssRUFBQztBQUFyQixLQUFsQyxDQUFQLEVBQWtFLElBQUUsQ0FBRixJQUFLLFlBQVUsT0FBTyxDQUEzRjtBQUE2RixXQUFJLElBQUksQ0FBUixJQUFhLENBQWI7QUFBZSxRQUFBLENBQUMsQ0FBQyxDQUFGLENBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxVQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLENBQUMsQ0FBQyxDQUFELENBQVI7QUFBWSxTQUF4QixDQUF5QixJQUF6QixDQUE4QixJQUE5QixFQUFtQyxDQUFuQyxDQUFSO0FBQWY7QUFBN0Y7O0FBQTJKLFdBQU8sQ0FBUDtBQUFTLEdBQTlpQixFQUEraUIsQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVztBQUFDLFFBQUksQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsVUFBTCxHQUFnQixZQUFVO0FBQUMsYUFBTyxDQUFDLFdBQVI7QUFBaUIsS0FBNUMsR0FBNkMsWUFBVTtBQUFDLGFBQU8sQ0FBUDtBQUFTLEtBQXZFO0FBQXdFLFdBQU8sQ0FBQyxDQUFDLENBQUYsQ0FBSSxDQUFKLEVBQU0sR0FBTixFQUFVLENBQVYsR0FBYSxDQUFwQjtBQUFzQixHQUE3cEIsRUFBOHBCLENBQUMsQ0FBQyxDQUFGLEdBQUksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsV0FBTyxNQUFNLENBQUMsU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxDQUFyQyxFQUF1QyxDQUF2QyxDQUFQO0FBQWlELEdBQWp1QixFQUFrdUIsQ0FBQyxDQUFDLENBQUYsR0FBSSxFQUF0dUIsRUFBeXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRixHQUFJLENBQUwsQ0FBanZCO0FBQXl2QixDQUFwNUIsQ0FBcTVCLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFlO0FBQUM7QUFDcjdCOzs7Ozs7Ozs7O0FBUUcsRUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDLElBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixHQUFyQyxHQUFpRCxDQUFDLENBQUMsYUFBRixHQUFnQixDQUFDLENBQUMsZUFBRixHQUFrQixDQUFDLENBQUMsVUFBRixHQUFhLEtBQUssQ0FBckcsRUFBdUcsQ0FBQyxDQUFDLFVBQUYsR0FBYSxVQUFDLENBQUQsRUFBRyxDQUFILEVBQVk7QUFBQSxRQUFQLENBQU8sdUVBQUwsQ0FBQyxDQUFJOztBQUFDLFFBQUcsQ0FBSDtBQUFLLHlDQUFpQixNQUFNLENBQUMsT0FBUCxDQUFlLENBQWYsQ0FBakI7QUFBQTtBQUFBLFlBQVUsQ0FBVjtBQUFBLFlBQVksQ0FBWjs7QUFBbUMsb0JBQVUsT0FBTyxDQUFqQixJQUFvQixZQUFVLE9BQU8sQ0FBckMsR0FBdUMsZ0JBQWMsQ0FBZCxHQUFnQixDQUFDLENBQUMsU0FBRixHQUFZLENBQUMsQ0FBQyxRQUFGLEVBQTVCLEdBQXlDLENBQUMsR0FBQyxDQUFDLENBQUMsY0FBRixDQUFpQixJQUFqQixFQUFzQixDQUF0QixFQUF3QixDQUFDLENBQUMsUUFBRixFQUF4QixDQUFELEdBQXVDLENBQUMsQ0FBQyxZQUFGLENBQWUsQ0FBZixFQUFpQixDQUFDLENBQUMsUUFBRixFQUFqQixDQUF4SCxHQUF1SixTQUFPLENBQUMsQ0FBQyxLQUFGLENBQVEsQ0FBUixFQUFVLENBQVYsQ0FBUCxHQUFvQixjQUFZLE9BQU8sQ0FBbkIsSUFBc0IsQ0FBQyxDQUFDLGdCQUFGLENBQW1CLENBQUMsQ0FBQyxLQUFGLENBQVEsQ0FBUixFQUFXLFdBQVgsRUFBbkIsRUFBNEMsQ0FBNUMsQ0FBMUMsR0FBeUYsT0FBTyxDQUFDLElBQVIsNkNBQWdELENBQWhELDJCQUErRCxDQUEvRCx3QkFBaFA7QUFBbkM7QUFBTDtBQUE2VyxHQUE5ZSxFQUErZSxDQUFDLENBQUMsZUFBRixHQUFrQixVQUFBLENBQUMsRUFBRTtBQUFDLFFBQU0sQ0FBQyxHQUFDLEVBQVI7O0FBQUQsK0NBQTJCLENBQTNCO0FBQUE7O0FBQUE7QUFBWTtBQUFBLFlBQVUsQ0FBVjtBQUFpQiw0QkFBaUIsQ0FBakIsS0FBb0IsQ0FBQyxZQUFZLEtBQWpDLEdBQXVDLENBQUMsQ0FBQyxJQUFGLE9BQUEsQ0FBQyxxQkFBUyxDQUFDLENBQUMsZUFBRixDQUFrQixDQUFsQixDQUFULEVBQXhDLEdBQXVFLENBQUMsQ0FBQyxJQUFGLENBQU8sQ0FBUCxDQUF2RTtBQUFqQjtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQThHLFdBQU8sQ0FBUDtBQUFTLEdBQTNuQixFQUE0bkIsQ0FBQyxDQUFDLGFBQUYsR0FBZ0IsVUFBQyxDQUFELEVBQUcsQ0FBSCxFQUFPO0FBQUMsUUFBRyxDQUFDLElBQUUsTUFBSSxDQUFWO0FBQVksVUFBRyxDQUFDLFlBQVksS0FBaEI7QUFBQSxvREFBcUMsQ0FBckM7QUFBQTs7QUFBQTtBQUFzQjtBQUFBLGdCQUFVLENBQVY7QUFBaUIsd0JBQVUsT0FBTyxDQUFqQixJQUFvQixZQUFVLE9BQU8sQ0FBckMsR0FBdUMsQ0FBQyxDQUFDLFNBQUYsR0FBWSxDQUFDLENBQUMsUUFBRixFQUFuRCxHQUFnRSxvQkFBaUIsQ0FBakIsS0FBb0IsQ0FBQyxZQUFZLEtBQWpDLEdBQXVDLENBQUMsQ0FBQyxlQUFGLENBQWtCLENBQWxCLEVBQXFCLE9BQXJCLENBQTZCLFVBQUEsQ0FBQztBQUFBLHFCQUFFLENBQUMsQ0FBQyxhQUFGLENBQWdCLENBQWhCLEVBQWtCLENBQWxCLENBQUY7QUFBQSxhQUE5QixDQUF2QyxHQUE2RixDQUFDLENBQUMsV0FBRixDQUFjLENBQWQsQ0FBN0o7QUFBakI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXlOLFlBQVUsT0FBTyxDQUFqQixJQUFvQixZQUFVLE9BQU8sQ0FBckMsR0FBdUMsQ0FBQyxDQUFDLFNBQUYsR0FBWSxDQUFDLENBQUMsUUFBRixFQUFuRCxHQUFnRSxDQUFDLENBQUMsV0FBRixDQUFjLENBQWQsQ0FBaEU7QUFBck87QUFBc1QsR0FBMThCOztBQUEyOEIsRUFBQSxDQUFDLFdBQUQsR0FBVSxVQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFjO0FBQUMsUUFBTSxDQUFDLEdBQUMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsQ0FBdkIsQ0FBUjs7QUFBa0MsSUFBQSxDQUFDLENBQUMsVUFBRixDQUFhLENBQWIsRUFBZSxDQUFmOztBQUFuQyxhQUF5RCxDQUFDLEdBQUMsQ0FBM0QsMkJBQUosQ0FBSTtBQUFKLE1BQUEsQ0FBSTtBQUFBOztBQUE2RCxXQUFPLENBQUMsSUFBRSxDQUFILEtBQU8sQ0FBQyxHQUFDLG9CQUFpQixDQUFqQixLQUFvQixDQUFDLFlBQVksS0FBakMsZ0NBQTJDLENBQUMsQ0FBQyxlQUFGLENBQWtCLENBQWxCLENBQTNDLHNCQUFtRSxDQUFDLENBQUMsZUFBRixDQUFrQixDQUFsQixDQUFuRSxNQUEwRixDQUExRiw0QkFBK0YsQ0FBQyxDQUFDLGVBQUYsQ0FBa0IsQ0FBbEIsQ0FBL0YsRUFBVCxHQUErSCxDQUFDLENBQUMsYUFBRixDQUFnQixDQUFoQixFQUFrQixDQUFsQixDQUEvSCxFQUFvSixDQUEzSjtBQUE2SixHQUFsUDtBQUFtUCxDQVQ3UixFQVM4UixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUM7QUFDbHRDOzs7Ozs7Ozs7OztBQVNHLE1BQUksQ0FBQyxHQUFDLFFBQU0sS0FBSyxlQUFYLElBQTRCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsV0FBTyxDQUFDLElBQUUsQ0FBQyxDQUFDLFVBQUwsR0FBZ0IsQ0FBaEIsR0FBa0I7QUFBQyxpQkFBUTtBQUFULEtBQXpCO0FBQXFDLEdBQW5GOztBQUFvRixFQUFBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUMsSUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLEdBQXJDLEdBQWlELENBQUMsQ0FBQyxlQUFGLEdBQWtCLENBQUMsQ0FBQyxhQUFGLEdBQWdCLEtBQUssQ0FBeEY7QUFBMEYsTUFBTSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBVDtBQUFBLE1BQWdCLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFuQjtBQUFBLE1BQTBCLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUE3Qjs7QUFWZ2lDLE1BVXQvQixDQVZzL0I7QUFBQTs7QUFBQTs7QUFVbCtCLGVBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0I7QUFBQTs7QUFBQTs7QUFBQyxpQ0FBUSxNQUFLLEtBQUwsR0FBVyxDQUFuQixFQUFxQixNQUFLLGFBQUwsR0FBbUIsQ0FBQyxDQUFDLGFBQTFDLEVBQXdELE1BQUssZUFBTCxHQUFxQixDQUFDLENBQUMsZUFBL0UsRUFBK0YsTUFBSyxNQUFMLEdBQVksRUFBM0csRUFBOEcsTUFBSyxtQkFBTCxHQUF5QixDQUFDLENBQXhJLEVBQTBJLE1BQUssdUJBQUwsR0FBNkIsVUFBQyxDQUFELEVBQUcsQ0FBSDtBQUFBLGVBQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFQO0FBQUEsT0FBdkssRUFBb0wsTUFBSyxRQUFMLEdBQWMsVUFBQSxDQUFDLEVBQUU7QUFBQyxZQUFHO0FBQUMsZ0JBQUssbUJBQUw7O0FBQTJCLDJDQUFlLE1BQU0sQ0FBQyxJQUFQLENBQVksQ0FBWixDQUFmO0FBQUksZ0JBQU0sR0FBQyxvQkFBUDtBQUEwQixZQUFBLE1BQU0sQ0FBQyxJQUFQLENBQVksTUFBSyxLQUFqQixFQUF3QixRQUF4QixDQUFpQyxHQUFqQyxLQUFxQyxPQUFPLENBQUMsSUFBUiwwQkFBK0IsR0FBL0IsK0RBQXFGLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBTSxDQUFDLElBQVAsQ0FBWSxNQUFLLEtBQWpCLENBQWYsQ0FBckYsc0VBQXJDO0FBQTlCOztBQUFtUSxnQkFBSyx1QkFBTCxDQUE2QixNQUFLLEtBQWxDLEVBQXdDLE1BQUssS0FBN0MsR0FBb0QsTUFBTSxDQUFDLE1BQVAsQ0FBYyxNQUFLLE1BQW5CLEVBQTBCLENBQTFCLENBQXBEOztBQUFpRixjQUFNLEVBQUMsR0FBQyxNQUFLLFdBQUwsRUFBUjs7QUFBMkIsY0FBRyxFQUFDLFlBQVksS0FBaEI7QUFBQSx3REFBcUMsRUFBckM7QUFBQTs7QUFBQTtBQUFzQjtBQUFBLG9CQUFVLEdBQVY7O0FBQWlCLHNCQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLEdBQXpCO0FBQWpCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBd0UsTUFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixFQUF6Qjs7QUFBNEIsZ0JBQUssa0JBQUw7QUFBMEIsU0FBNWdCLENBQTRnQixPQUFNLENBQU4sRUFBUTtBQUFDLGlCQUFPLE1BQUssaUJBQUwsQ0FBdUIsQ0FBdkIsR0FBMEIsQ0FBakM7QUFBbUM7QUFBQyxPQUEvdkIsRUFBZ3dCLE1BQUssY0FBTCxHQUFvQixZQUFJO0FBQUMsWUFBRztBQUFDLGNBQU0sR0FBQyxHQUFDLE1BQUssTUFBTCxFQUFSOztBQUFzQixjQUFHLE1BQUssbUJBQUwsR0FBeUIsQ0FBQyxDQUExQixFQUE0QixNQUFLLGtCQUFMLEVBQTVCLEVBQXNELENBQUMsR0FBMUQsRUFBNEQ7QUFBQyxrQkFBTSxJQUFJLEtBQUosQ0FBVSxxSEFBVixDQUFOO0FBQXVJOztBQUFBLGlCQUFPLE1BQUssaUJBQUwsSUFBeUIsb0JBQWlCLEdBQWpCLEtBQW9CLEdBQUMsWUFBWSxLQUFqQyxHQUF1QyxHQUFDLENBQUMsR0FBRixDQUFNLFVBQUEsQ0FBQztBQUFBLG1CQUFFLE1BQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsQ0FBekIsQ0FBRjtBQUFBLFdBQVAsQ0FBdkMsR0FBNkUsTUFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixHQUF6QixDQUE3RztBQUF5SSxTQUF2VyxDQUF1VyxPQUFNLENBQU4sRUFBUTtBQUFDLGlCQUFPLE1BQUssaUJBQUwsQ0FBdUIsQ0FBdkIsR0FBMEIsQ0FBakM7QUFBbUM7QUFBQyxPQUE3cUMsRUFBOHFDLE1BQUssS0FBTCxHQUFXLE1BQUssY0FBOXJDLEVBQTZzQyxNQUFLLGdCQUFMLEdBQXNCLFlBQUk7QUFBQyxZQUFHO0FBQUMsZ0JBQUssb0JBQUwsSUFBNEIsTUFBSyxlQUFMLEVBQTVCO0FBQW1ELFNBQXZELENBQXVELE9BQU0sQ0FBTixFQUFRO0FBQUMsZ0JBQUssaUJBQUwsQ0FBdUIsQ0FBdkI7QUFBMEI7QUFBQyxPQUFuMEMsRUFBbzBDLE1BQUssT0FBTCxHQUFhLE1BQUssZ0JBQXQxQyxFQUF1MkMsTUFBSyxlQUFMLEdBQXFCLFlBQUk7QUFBQyxlQUFLLE1BQUssT0FBTCxDQUFhLFVBQWIsSUFBeUIsTUFBSyxPQUFMLENBQWEsU0FBM0M7QUFBc0QsZ0JBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsTUFBSyxPQUFMLENBQWEsU0FBdEM7QUFBdEQ7QUFBdUcsT0FBeCtDLEVBQXkrQyxNQUFLLFdBQUwsR0FBaUI7QUFBQSxlQUFLLE1BQUssZUFBTCxJQUF1QixNQUFLLE1BQUwsRUFBNUI7QUFBQSxPQUExL0MsRUFBcWlELENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZ0IsUUFBaEIsQ0FBeUIsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxXQUFWLEVBQXpCLEtBQW1ELE9BQU8sQ0FBQyxJQUFSLGdDQUFxQyxDQUFDLENBQUMsT0FBRixDQUFVLFdBQVYsRUFBckMsd0RBQTBHLENBQUMsQ0FBQyxPQUFGLENBQVUsV0FBVixFQUExRyxtQ0FBeGxELEVBQTB2RCxNQUFLLE9BQUwsR0FBYSxDQUF2d0Q7QUFBRDtBQUEwd0Q7O0FBVnh6QjtBQUFBO0FBQUEsMEJBVXMwQjtBQUFDLGVBQU8sS0FBSyxLQUFaO0FBQWtCO0FBVnoxQjtBQUFBO0FBQUEsMEJBVW8yQjtBQUFDLGVBQU8sS0FBSyxNQUFaO0FBQW1CLE9BVngzQjtBQUFBLHdCQVVrNEIsQ0FWbDRCLEVBVW80QjtBQUFDLGFBQUssbUJBQUwsSUFBMEIsS0FBSyxpQkFBTCxDQUF1QixJQUFJLEtBQUosQ0FBVSxxREFBVixDQUF2QixHQUF5RixPQUFPLENBQUMsSUFBUixDQUFhLDhGQUFiLENBQXpGLEVBQXNNLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBaE8sS0FBbVAsS0FBSyxNQUFMLEdBQVksQ0FBWixFQUFjLEtBQUssbUJBQUwsR0FBeUIsQ0FBQyxDQUEzUjtBQUE4UjtBQVZucUM7QUFBQTtBQUFBLDBCQVVpckM7QUFBQyxlQUFPLEtBQUssS0FBWjtBQUFrQjtBQVZwc0M7O0FBQUE7QUFBQSxJQVU1K0IsQ0FBQyxXQVYyK0I7O0FBVXFzQyxFQUFBLENBQUMsV0FBRCxHQUFVLENBQVYsRUFBWSxDQUFDLENBQUMsYUFBRixHQUFnQixDQUFDLFdBQTdCLEVBQXNDLENBQUMsQ0FBQyxlQUFGLEdBQWtCLENBQUMsV0FBekQsRUFBa0UsQ0FBQyxDQUFDLGFBQUYsR0FBZ0IsQ0FBQyxXQUFuRixFQUE0RixDQUFDLENBQUMsZUFBRixHQUFrQixDQUFDLFdBQS9HO0FBQXdILENBbkIxbUQsRUFtQjJtRCxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWU7QUFBQztBQUMvaEY7Ozs7Ozs7Ozs7O0FBU0csRUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDLElBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixHQUFyQzs7QUFBaUQsRUFBQSxDQUFDLFdBQUQ7QUFBZ0Isc0JBQWE7QUFBQTs7QUFBQyxXQUFLLGlCQUFMLEdBQXVCLFVBQUEsQ0FBQztBQUFBLGVBQUUsT0FBTyxDQUFDLEtBQVIsQ0FBYyxDQUFkLENBQUY7QUFBQSxPQUF4QixFQUEyQyxLQUFLLGlCQUFMLEdBQXVCLFlBQUksQ0FBRSxDQUF4RSxFQUF5RSxLQUFLLGtCQUFMLEdBQXdCLFlBQUksQ0FBRSxDQUF2RyxFQUF3RyxLQUFLLGtCQUFMLEdBQXdCLFlBQUksQ0FBRSxDQUF0SSxFQUF1SSxLQUFLLG9CQUFMLEdBQTBCLFlBQUksQ0FBRSxDQUF2SyxFQUF3SyxLQUFLLG1CQUFMLEdBQXlCLFlBQUksQ0FBRSxDQUF2TSxFQUF3TSxLQUFLLE1BQUwsR0FBWTtBQUFBLGVBQUksSUFBSjtBQUFBLE9BQXBOO0FBQTZOOztBQUEzUDtBQUFBO0FBQTZQLENBN0JtbkIsRUE2QmxuQixVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlO0FBQUM7QUFDbFU7Ozs7Ozs7Ozs7QUFRRyxFQUFBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUMsSUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLEdBQXJDLEdBQWlELENBQUMsQ0FBQyxlQUFGLEdBQWtCLEtBQUssQ0FBeEU7QUFBMEUsTUFBTSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBVDtBQUFhLEVBQUEsQ0FBQyxDQUFDLGVBQUYsR0FBa0IsVUFBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQWdCO0FBQUMsUUFBTSxDQUFDLEdBQUMsUUFBUSxDQUFDLGVBQVQsQ0FBeUIsQ0FBekIsRUFBMkIsQ0FBM0IsQ0FBUjs7QUFBc0MsSUFBQSxDQUFDLENBQUMsVUFBRixDQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQUMsQ0FBbEI7O0FBQXZDLGFBQWdFLENBQUMsR0FBQyxDQUFsRSw0QkFBSixDQUFJO0FBQUosTUFBQSxDQUFJO0FBQUE7O0FBQW9FLFdBQU8sQ0FBQyxJQUFFLENBQUgsS0FBTyxDQUFDLEdBQUMsb0JBQWlCLENBQWpCLEtBQW9CLENBQUMsWUFBWSxLQUFqQyxnQ0FBMkMsQ0FBQyxDQUFDLGVBQUYsQ0FBa0IsQ0FBbEIsQ0FBM0Msc0JBQW1FLENBQUMsQ0FBQyxlQUFGLENBQWtCLENBQWxCLENBQW5FLE1BQTBGLENBQTFGLDRCQUErRixDQUFDLENBQUMsZUFBRixDQUFrQixDQUFsQixDQUEvRixFQUFULEdBQStILENBQUMsQ0FBQyxhQUFGLENBQWdCLENBQWhCLEVBQWtCLENBQWxCLENBQS9ILEVBQW9KLENBQTNKO0FBQTZKLEdBQW5RLEVBQW9RLENBQUMsV0FBRCxHQUFVLENBQUMsQ0FBQyxlQUFoUjtBQUFnUyxDQXRDMGlCLENBQXI1QixDQUFmIiwiZmlsZSI6ImRlU3RhZ25hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERlU3RhZ25hdGU9ZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4zLjFcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnRcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuX2JpbmRDaGlsZHJlbj10Ll91bnBhY2tDaGlsZHJlbj10Ll9iaW5kUHJvcHM9dm9pZCAwLHQuX2JpbmRQcm9wcz0oZSx0LG49ITEpPT57aWYodClmb3IoY29uc3RbcixvXW9mIE9iamVjdC5lbnRyaWVzKHQpKVwic3RyaW5nXCI9PXR5cGVvZiBvfHxcIm51bWJlclwiPT10eXBlb2Ygbz9cImlubmVySFRNTFwiPT09cj9lLmlubmVySFRNTD1vLnRvU3RyaW5nKCk6bj9lLnNldEF0dHJpYnV0ZU5TKG51bGwscixvLnRvU3RyaW5nKCkpOmUuc2V0QXR0cmlidXRlKHIsby50b1N0cmluZygpKTpcIm9uXCI9PT1yLnNsaWNlKDAsMik/XCJmdW5jdGlvblwiPT10eXBlb2YgbyYmZS5hZGRFdmVudExpc3RlbmVyKHIuc2xpY2UoMikudG9Mb3dlckNhc2UoKSxvKTpjb25zb2xlLndhcm4oYFdBUk46IEludmFsaWQgcHJvcCB0eXBlIFwiJHt0eXBlb2Ygb31cIiBmb3Iga2V5IFwiJHtyfVwiLiBTa2lwcGluZyBwcm9wLmApfSx0Ll91bnBhY2tDaGlsZHJlbj1lPT57Y29uc3Qgbj1bXTtmb3IoY29uc3QgciBvZiBlKVwib2JqZWN0XCI9PXR5cGVvZiByJiZyIGluc3RhbmNlb2YgQXJyYXk/bi5wdXNoKC4uLnQuX3VucGFja0NoaWxkcmVuKHIpKTpuLnB1c2gocik7cmV0dXJuIG59LHQuX2JpbmRDaGlsZHJlbj0oZSxuKT0+e2lmKG58fDA9PT1uKWlmKG4gaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgciBvZiBuKVwic3RyaW5nXCI9PXR5cGVvZiByfHxcIm51bWJlclwiPT10eXBlb2Ygcj9lLmlubmVyVGV4dD1yLnRvU3RyaW5nKCk6XCJvYmplY3RcIj09dHlwZW9mIHImJnIgaW5zdGFuY2VvZiBBcnJheT90Ll91bnBhY2tDaGlsZHJlbihyKS5mb3JFYWNoKG49PnQuX2JpbmRDaGlsZHJlbihlLG4pKTplLmFwcGVuZENoaWxkKHIpO2Vsc2VcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/ZS5pbm5lclRleHQ9bi50b1N0cmluZygpOmUuYXBwZW5kQ2hpbGQobil9O3QuZGVmYXVsdD0oZSxuLHIsLi4ubyk9Pntjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZSk7dC5fYmluZFByb3BzKGksbik7bGV0IHM9cjtyZXR1cm4gciYmbyYmKHM9XCJvYmplY3RcIj09dHlwZW9mIHImJnIgaW5zdGFuY2VvZiBBcnJheT9bLi4udC5fdW5wYWNrQ2hpbGRyZW4ociksLi4udC5fdW5wYWNrQ2hpbGRyZW4obyldOltyLC4uLnQuX3VucGFja0NoaWxkcmVuKG8pXSksdC5fYmluZENoaWxkcmVuKGkscyksaX19LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4zLjFcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBtYWluIGZpbGUgZm9yIGRlc3RhZ25hdGVcbiAqL3ZhciByPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuY3JlYXRlRWxlbWVudE5TPXQuY3JlYXRlRWxlbWVudD12b2lkIDA7Y29uc3Qgbz1yKG4oMikpLGk9cihuKDApKSxzPXIobigzKSk7Y2xhc3MgYSBleHRlbmRzIG8uZGVmYXVsdHtjb25zdHJ1Y3RvcihlLHQpe3N1cGVyKCksdGhpcy5wcm9wcz10LHRoaXMuY3JlYXRlRWxlbWVudD1hLmNyZWF0ZUVsZW1lbnQsdGhpcy5jcmVhdGVFbGVtZW50TlM9YS5jcmVhdGVFbGVtZW50TlMsdGhpcy5fc3RhdGU9e30sdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlPSExLHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU9KGUsdCk9PltlLHRdLHRoaXMuc2V0U3RhdGU9ZT0+e3RyeXt0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUoKTtmb3IoY29uc3QgdCBvZiBPYmplY3Qua2V5cyhlKSlPYmplY3Qua2V5cyh0aGlzLnN0YXRlKS5pbmNsdWRlcyh0KXx8Y29uc29sZS53YXJuKGBXQVJOOiBOZXcga2V5ICgke3R9KSBzaG91bGQgbm90IGJlIHNldCB3aXRoIHNldFN0YXRlLCB3aGljaCBoYXMga2V5cyAke0pTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHRoaXMuc3RhdGUpKX0uIERlY2xhcmUgYWxsIHN0YXRlIHZhcmlhYmxlcyBpbiBjb25zdHJ1Y3RvciBhcyBhIGJlc3QgcHJhY3RpY2UuYCk7dGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSh0aGlzLnByb3BzLHRoaXMuc3RhdGUpLE9iamVjdC5hc3NpZ24odGhpcy5fc3RhdGUsZSk7Y29uc3QgdD10aGlzLl9leGVjUmVuZGVyKCk7aWYodCBpbnN0YW5jZW9mIEFycmF5KWZvcihjb25zdCBlIG9mIHQpdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGUpO2Vsc2UgdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKHQpO3RoaXMuY29tcG9uZW50RGlkVXBkYXRlKCl9Y2F0Y2goZSl7cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2goZSksZX19LHRoaXMubW91bnRDb21wb25lbnQ9KCk9Pnt0cnl7Y29uc3QgZT10aGlzLnJlbmRlcigpO2lmKHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZT0hMCx0aGlzLmNvbXBvbmVudFdpbGxNb3VudCgpLCFlKXt0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCByZW5kZXIgbWV0aG9kIHRvIGJlIGluY2x1ZGVkIGluIGNvbXBvbmVudCBjbGFzcywgbm8gcmVuZGVyIG1ldGhvZCBmb3VuZCwgb3IgcmVuZGVyIHJldHVybmVkIGFuIGVtcHR5IGFycmF5XCIpfXJldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50KCksXCJvYmplY3RcIj09dHlwZW9mIGUmJmUgaW5zdGFuY2VvZiBBcnJheT9lLm1hcChlPT50aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZSkpOnRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChlKX1jYXRjaChlKXtyZXR1cm4gdGhpcy5jb21wb25lbnREaWRDYXRjaChlKSxlfX0sdGhpcy5tb3VudD10aGlzLm1vdW50Q29tcG9uZW50LHRoaXMudW5tb3VudENvbXBvbmVudD0oKT0+e3RyeXt0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCksdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKX1jYXRjaChlKXt0aGlzLmNvbXBvbmVudERpZENhdGNoKGUpfX0sdGhpcy51bm1vdW50PXRoaXMudW5tb3VudENvbXBvbmVudCx0aGlzLl9yZW1vdmVDaGlsZHJlbj0oKT0+e2Zvcig7dGhpcy5fcGFyZW50LmZpcnN0Q2hpbGQmJnRoaXMuX3BhcmVudC5sYXN0Q2hpbGQ7KXRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKX0sdGhpcy5fZXhlY1JlbmRlcj0oKT0+KHRoaXMuX3JlbW92ZUNoaWxkcmVuKCksdGhpcy5yZW5kZXIoKSksW1wiYm9keVwiLFwiaHRtbFwiXS5pbmNsdWRlcyhlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkmJmNvbnNvbGUud2FybihgV0FSTklORyEgQXZvaWQgdXNpbmcgJHtlLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gYXMgZWxlbWVudCBwYXJlbnQsIGFzIGFsbCBlbGVtZW50cyB3aXRoaW4gJHtlLnRhZ05hbWUudG9Mb3dlckNhc2UoKX0gd2lsbCBiZSByZW1vdmVkIG9uIHJlLXJlbmRlcmApLHRoaXMuX3BhcmVudD1lfWdldCBnZXRTdGF0ZSgpe3JldHVybiB0aGlzLnN0YXRlfWdldCBzdGF0ZSgpe3JldHVybiB0aGlzLl9zdGF0ZX1zZXQgc3RhdGUoZSl7dGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlPyh0aGlzLmNvbXBvbmVudERpZENhdGNoKG5ldyBFcnJvcihcIkRvIG5vdCBtdXRhdGUgc3RhdGUgZGlyZWN0bHkuIFVzZSBzZXRTdGF0ZSBpbnN0ZWFkLlwiKSksY29uc29sZS53YXJuKFwiRGVTdGFnbmF0ZSBwcm90ZWN0cyB5b3UgZnJvbSBtdXRhdGluZyB0aGUgZW50aXJlIHN0YXRlIG9iamVjdC4gQXZvaWQgbXV0YXRpbmcgc3RhdGUgZGlyZWN0bHlcIiksdGhpcy5zZXRTdGF0ZShlKSk6KHRoaXMuX3N0YXRlPWUsdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlPSEwKX1nZXQgZ2V0UHJvcHMoKXtyZXR1cm4gdGhpcy5wcm9wc319dC5kZWZhdWx0PWEsYS5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdCxhLmNyZWF0ZUVsZW1lbnROUz1zLmRlZmF1bHQsdC5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdCx0LmNyZWF0ZUVsZW1lbnROUz1zLmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4zLjFcbiAqIEBleHBvcnRzIFByZXNldFxuICogQHBhY2thZ2VcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3QuZGVmYXVsdD1jbGFzc3tjb25zdHJ1Y3Rvcigpe3RoaXMuY29tcG9uZW50RGlkQ2F0Y2g9ZT0+Y29uc29sZS5lcnJvcihlKSx0aGlzLmNvbXBvbmVudERpZE1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudERpZFVwZGF0ZT0oKT0+e30sdGhpcy5jb21wb25lbnRXaWxsTW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQ9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZT0oKT0+e30sdGhpcy5yZW5kZXI9KCk9Pm51bGx9fX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjMuMVxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudE5TXG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmNyZWF0ZUVsZW1lbnROUz12b2lkIDA7Y29uc3Qgcj1uKDApO3QuY3JlYXRlRWxlbWVudE5TPShlLHQsbixvLC4uLmkpPT57Y29uc3Qgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZSx0KTtyLl9iaW5kUHJvcHMocyxuLCEwKTtsZXQgYT1vO3JldHVybiBvJiZpJiYoYT1cIm9iamVjdFwiPT10eXBlb2YgbyYmbyBpbnN0YW5jZW9mIEFycmF5P1suLi5yLl91bnBhY2tDaGlsZHJlbihvKSwuLi5yLl91bnBhY2tDaGlsZHJlbihpKV06W28sLi4uci5fdW5wYWNrQ2hpbGRyZW4oaSldKSxyLl9iaW5kQ2hpbGRyZW4ocyxhKSxzfSx0LmRlZmF1bHQ9dC5jcmVhdGVFbGVtZW50TlN9XSk7Il19
