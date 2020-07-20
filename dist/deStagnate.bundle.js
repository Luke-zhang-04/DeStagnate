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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlU3RhZ25hdGUuYnVuZGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFVBQVUsR0FBQyxVQUFTLENBQVQsRUFBVztBQUFDLE1BQUksQ0FBQyxHQUFDLEVBQU47O0FBQVMsV0FBUyxDQUFULENBQVcsQ0FBWCxFQUFhO0FBQUMsUUFBRyxDQUFDLENBQUMsQ0FBRCxDQUFKO0FBQVEsYUFBTyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssT0FBWjtBQUFSOztBQUE0QixRQUFJLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUs7QUFBQyxNQUFBLENBQUMsRUFBQyxDQUFIO0FBQUssTUFBQSxDQUFDLEVBQUMsQ0FBQyxDQUFSO0FBQVUsTUFBQSxPQUFPLEVBQUM7QUFBbEIsS0FBWDtBQUFpQyxXQUFPLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxJQUFMLENBQVUsQ0FBQyxDQUFDLE9BQVosRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBQyxDQUFDLE9BQXhCLEVBQWdDLENBQWhDLEdBQW1DLENBQUMsQ0FBQyxDQUFGLEdBQUksQ0FBQyxDQUF4QyxFQUEwQyxDQUFDLENBQUMsT0FBbkQ7QUFBMkQ7O0FBQUEsU0FBTyxDQUFDLENBQUMsQ0FBRixHQUFJLENBQUosRUFBTSxDQUFDLENBQUMsQ0FBRixHQUFJLENBQVYsRUFBWSxDQUFDLENBQUMsQ0FBRixHQUFJLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQyxJQUFBLENBQUMsQ0FBQyxDQUFGLENBQUksQ0FBSixFQUFNLENBQU4sS0FBVSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixDQUF4QixFQUEwQjtBQUFDLE1BQUEsVUFBVSxFQUFDLENBQUMsQ0FBYjtBQUFlLE1BQUEsR0FBRyxFQUFDO0FBQW5CLEtBQTFCLENBQVY7QUFBMkQsR0FBM0YsRUFBNEYsQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVztBQUFDLG1CQUFhLE9BQU8sTUFBcEIsSUFBNEIsTUFBTSxDQUFDLFdBQW5DLElBQWdELE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLE1BQU0sQ0FBQyxXQUEvQixFQUEyQztBQUFDLE1BQUEsS0FBSyxFQUFDO0FBQVAsS0FBM0MsQ0FBaEQsRUFBNkcsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQyxNQUFBLEtBQUssRUFBQyxDQUFDO0FBQVIsS0FBckMsQ0FBN0c7QUFBOEosR0FBMVEsRUFBMlEsQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWE7QUFBQyxRQUFHLElBQUUsQ0FBRixLQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFULEdBQWMsSUFBRSxDQUFuQjtBQUFxQixhQUFPLENBQVA7QUFBckI7O0FBQThCLFFBQUcsSUFBRSxDQUFGLElBQUssb0JBQWlCLENBQWpCLENBQUwsSUFBeUIsQ0FBekIsSUFBNEIsQ0FBQyxDQUFDLFVBQWpDO0FBQTRDLGFBQU8sQ0FBUDtBQUE1Qzs7QUFBcUQsUUFBSSxDQUFDLEdBQUMsTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLENBQU47O0FBQTBCLFFBQUcsQ0FBQyxDQUFDLENBQUYsQ0FBSSxDQUFKLEdBQU8sTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsU0FBeEIsRUFBa0M7QUFBQyxNQUFBLFVBQVUsRUFBQyxDQUFDLENBQWI7QUFBZSxNQUFBLEtBQUssRUFBQztBQUFyQixLQUFsQyxDQUFQLEVBQWtFLElBQUUsQ0FBRixJQUFLLFlBQVUsT0FBTyxDQUEzRjtBQUE2RixXQUFJLElBQUksQ0FBUixJQUFhLENBQWI7QUFBZSxRQUFBLENBQUMsQ0FBQyxDQUFGLENBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxVQUFTLENBQVQsRUFBVztBQUFDLGlCQUFPLENBQUMsQ0FBQyxDQUFELENBQVI7QUFBWSxTQUF4QixDQUF5QixJQUF6QixDQUE4QixJQUE5QixFQUFtQyxDQUFuQyxDQUFSO0FBQWY7QUFBN0Y7O0FBQTJKLFdBQU8sQ0FBUDtBQUFTLEdBQTlpQixFQUEraUIsQ0FBQyxDQUFDLENBQUYsR0FBSSxVQUFTLENBQVQsRUFBVztBQUFDLFFBQUksQ0FBQyxHQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsVUFBTCxHQUFnQixZQUFVO0FBQUMsYUFBTyxDQUFDLFdBQVI7QUFBaUIsS0FBNUMsR0FBNkMsWUFBVTtBQUFDLGFBQU8sQ0FBUDtBQUFTLEtBQXZFO0FBQXdFLFdBQU8sQ0FBQyxDQUFDLENBQUYsQ0FBSSxDQUFKLEVBQU0sR0FBTixFQUFVLENBQVYsR0FBYSxDQUFwQjtBQUFzQixHQUE3cEIsRUFBOHBCLENBQUMsQ0FBQyxDQUFGLEdBQUksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsV0FBTyxNQUFNLENBQUMsU0FBUCxDQUFpQixjQUFqQixDQUFnQyxJQUFoQyxDQUFxQyxDQUFyQyxFQUF1QyxDQUF2QyxDQUFQO0FBQWlELEdBQWp1QixFQUFrdUIsQ0FBQyxDQUFDLENBQUYsR0FBSSxFQUF0dUIsRUFBeXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRixHQUFJLENBQUwsQ0FBanZCO0FBQXl2QixDQUFwNUIsQ0FBcTVCLENBQUMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDO0FBQ3I3Qjs7Ozs7Ozs7Ozs7QUFTRyxNQUFJLENBQUMsR0FBQyxRQUFNLEtBQUssZUFBWCxJQUE0QixVQUFTLENBQVQsRUFBVztBQUFDLFdBQU8sQ0FBQyxJQUFFLENBQUMsQ0FBQyxVQUFMLEdBQWdCLENBQWhCLEdBQWtCO0FBQUMsaUJBQVE7QUFBVCxLQUF6QjtBQUFxQyxHQUFuRjs7QUFBb0YsRUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDLElBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixHQUFyQyxHQUFpRCxDQUFDLENBQUMsYUFBRixHQUFnQixLQUFLLENBQXRFO0FBQXdFLE1BQU0sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQVQ7QUFBQSxNQUFnQixDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBbkI7QUFDL0o7Ozs7Ozs7Ozs7Ozs7O0FBWG83QixNQXdCOTZCLENBeEI4NkI7QUFBQTs7QUFBQTs7QUF3QjE1QixlQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUE7O0FBQUE7O0FBQUMsaUNBQVEsTUFBSyxLQUFMLEdBQVcsQ0FBbkIsRUFBcUIsTUFBSyxhQUFMLEdBQW1CLENBQUMsQ0FBQyxhQUExQyxFQUF3RCxNQUFLLE1BQUwsR0FBWSxFQUFwRSxFQUF1RSxNQUFLLG1CQUFMLEdBQXlCLENBQUMsQ0FBakcsRUFBbUcsTUFBSyx1QkFBTCxHQUE2QixVQUFDLENBQUQsRUFBRyxDQUFIO0FBQUEsZUFBTyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVA7QUFBQSxPQUFoSSxFQUE2SSxNQUFLLFFBQUwsR0FBYyxVQUFBLENBQUMsRUFBRTtBQUFDLFlBQUc7QUFBQyxnQkFBSyxtQkFBTDs7QUFBMkIsMENBQWUsTUFBTSxDQUFDLElBQVAsQ0FBWSxDQUFaLENBQWY7QUFBSSxnQkFBTSxHQUFDLG1CQUFQO0FBQTBCLFlBQUEsTUFBTSxDQUFDLElBQVAsQ0FBWSxNQUFLLEtBQWpCLEVBQXdCLFFBQXhCLENBQWlDLEdBQWpDLEtBQXFDLE9BQU8sQ0FBQyxJQUFSLDBCQUErQixHQUEvQiwrREFBcUYsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFNLENBQUMsSUFBUCxDQUFZLE1BQUssS0FBakIsQ0FBZixDQUFyRixzRUFBckM7QUFBOUI7O0FBQW1RLGdCQUFLLHVCQUFMLENBQTZCLE1BQUssS0FBbEMsRUFBd0MsTUFBSyxLQUE3QyxHQUFvRCxNQUFNLENBQUMsTUFBUCxDQUFjLE1BQUssTUFBbkIsRUFBMEIsQ0FBMUIsQ0FBcEQ7O0FBQWlGLGNBQU0sRUFBQyxHQUFDLE1BQUssV0FBTCxFQUFSOztBQUEyQixjQUFHLEVBQUMsWUFBWSxLQUFoQjtBQUFBLHVEQUFxQyxFQUFyQztBQUFBOztBQUFBO0FBQXNCO0FBQUEsb0JBQVUsRUFBVjs7QUFBaUIsc0JBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsRUFBekI7QUFBakI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF3RSxNQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLEVBQXpCOztBQUE0QixnQkFBSyxrQkFBTDtBQUEwQixTQUE1Z0IsQ0FBNGdCLE9BQU0sQ0FBTixFQUFRO0FBQUMsaUJBQU8sTUFBSyxpQkFBTCxDQUF1QixDQUF2QixHQUEwQixDQUFqQztBQUFtQztBQUFDLE9BQXh0QixFQUF5dEIsTUFBSyxjQUFMLEdBQW9CLFlBQUk7QUFBQyxZQUFHO0FBQUMsY0FBTSxHQUFDLEdBQUMsTUFBSyxNQUFMLEVBQVI7O0FBQXNCLGNBQUcsTUFBSyxtQkFBTCxHQUF5QixDQUFDLENBQTFCLEVBQTRCLE1BQUssa0JBQUwsRUFBNUIsRUFBc0QsQ0FBQyxHQUExRCxFQUE0RDtBQUFDLGtCQUFNLElBQUksS0FBSixDQUFVLHFIQUFWLENBQU47QUFBdUk7O0FBQUEsaUJBQU8sTUFBSyxpQkFBTCxJQUF5QixHQUFDLFlBQVksS0FBYixHQUFtQixHQUFDLENBQUMsR0FBRixDQUFNLFVBQUEsQ0FBQztBQUFBLG1CQUFFLE1BQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsQ0FBekIsQ0FBRjtBQUFBLFdBQVAsQ0FBbkIsR0FBeUQsTUFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixHQUF6QixDQUF6RjtBQUFxSCxTQUFuVixDQUFtVixPQUFNLENBQU4sRUFBUTtBQUFDLGlCQUFPLE1BQUssaUJBQUwsQ0FBdUIsQ0FBdkIsR0FBMEIsQ0FBakM7QUFBbUM7QUFBQyxPQUFsbkMsRUFBbW5DLE1BQUssS0FBTCxHQUFXLE1BQUssY0FBbm9DLEVBQWtwQyxNQUFLLGdCQUFMLEdBQXNCLFlBQUk7QUFBQyxZQUFHO0FBQUMsZ0JBQUssb0JBQUwsSUFBNEIsTUFBSyxlQUFMLEVBQTVCO0FBQW1ELFNBQXZELENBQXVELE9BQU0sQ0FBTixFQUFRO0FBQUMsZ0JBQUssaUJBQUwsQ0FBdUIsQ0FBdkI7QUFBMEI7QUFBQyxPQUF4d0MsRUFBeXdDLE1BQUssT0FBTCxHQUFhLE1BQUssZ0JBQTN4QyxFQUE0eUMsTUFBSyxlQUFMLEdBQXFCLFlBQUk7QUFBQyxlQUFLLE1BQUssT0FBTCxDQUFhLFVBQWIsSUFBeUIsTUFBSyxPQUFMLENBQWEsU0FBM0M7QUFBc0QsZ0JBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsTUFBSyxPQUFMLENBQWEsU0FBdEM7QUFBdEQ7QUFBdUcsT0FBNzZDLEVBQTg2QyxNQUFLLFdBQUwsR0FBaUI7QUFBQSxlQUFLLE1BQUssZUFBTCxJQUF1QixNQUFLLE1BQUwsRUFBNUI7QUFBQSxPQUEvN0MsRUFBMCtDLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZ0IsUUFBaEIsQ0FBeUIsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxXQUFWLEVBQXpCLEtBQW1ELE9BQU8sQ0FBQyxJQUFSLGdDQUFxQyxDQUFDLENBQUMsT0FBRixDQUFVLFdBQVYsRUFBckMsd0RBQTBHLENBQUMsQ0FBQyxPQUFGLENBQVUsV0FBVixFQUExRyxtQ0FBN2hELEVBQStyRCxNQUFLLE9BQUwsR0FBYSxDQUE1c0Q7QUFBRDtBQUErc0Q7O0FBeEJyMEI7QUFBQTtBQUFBLDBCQXdCbTFCO0FBQUMsZUFBTyxLQUFLLEtBQVo7QUFBa0I7QUF4QnQyQjtBQUFBO0FBQUEsMEJBd0JpM0I7QUFBQyxlQUFPLEtBQUssTUFBWjtBQUFtQixPQXhCcjRCO0FBQUEsd0JBd0IrNEIsQ0F4Qi80QixFQXdCaTVCO0FBQUMsYUFBSyxtQkFBTCxJQUEwQixLQUFLLGlCQUFMLENBQXVCLElBQUksS0FBSixDQUFVLG9EQUFWLENBQXZCLEdBQXdGLEtBQUssUUFBTCxDQUFjLENBQWQsQ0FBbEgsS0FBcUksS0FBSyxNQUFMLEdBQVksQ0FBWixFQUFjLEtBQUssbUJBQUwsR0FBeUIsQ0FBQyxDQUE3SztBQUFnTDtBQXhCbGtDO0FBQUE7QUFBQSwwQkF3QmdsQztBQUFDLGVBQU8sS0FBSyxLQUFaO0FBQWtCO0FBeEJubUM7O0FBQUE7QUFBQSxJQXdCcDZCLENBQUMsV0F4Qm02Qjs7QUF3Qm9tQyxFQUFBLENBQUMsV0FBRCxHQUFVLENBQVYsRUFBWSxDQUFDLENBQUMsYUFBRixHQUFnQixDQUFDLFdBQTdCLEVBQXNDLENBQUMsQ0FBQyxhQUFGLEdBQWdCLENBQUMsV0FBdkQ7QUFBZ0UsQ0F4QnByQyxFQXdCcXJDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBZTtBQUFDO0FBQ3ptRTs7Ozs7Ozs7Ozs7QUFTRyxFQUFBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUMsSUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLEdBQXJDOztBQUFpRCxFQUFBLENBQUMsV0FBRDtBQUFnQixzQkFBYTtBQUFBOztBQUFDLFdBQUssaUJBQUwsR0FBdUIsVUFBQSxDQUFDO0FBQUEsZUFBRSxPQUFPLENBQUMsS0FBUixDQUFjLENBQWQsQ0FBRjtBQUFBLE9BQXhCLEVBQTJDLEtBQUssaUJBQUwsR0FBdUIsWUFBSSxDQUFFLENBQXhFLEVBQXlFLEtBQUssa0JBQUwsR0FBd0IsWUFBSSxDQUFFLENBQXZHLEVBQXdHLEtBQUssa0JBQUwsR0FBd0IsWUFBSSxDQUFFLENBQXRJLEVBQXVJLEtBQUssb0JBQUwsR0FBMEIsWUFBSSxDQUFFLENBQXZLLEVBQXdLLEtBQUssbUJBQUwsR0FBeUIsWUFBSSxDQUFFLENBQXZNLEVBQXdNLEtBQUssTUFBTCxHQUFZO0FBQUEsZUFBSSxJQUFKO0FBQUEsT0FBcE47QUFBNk47O0FBQTNQO0FBQUE7QUFBNlAsQ0FsQ21uQixFQWtDbG5CLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBZTtBQUFDO0FBQ2xVOzs7Ozs7Ozs7O0FBUUcsRUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDLElBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixHQUFyQzs7QUFBaUQsTUFBTSxDQUFDLEdBQUMsVUFBQSxDQUFDLEVBQUU7QUFBQyxRQUFNLENBQUMsR0FBQyxFQUFSOztBQUFELGdEQUEyQixDQUEzQjtBQUFBOztBQUFBO0FBQVk7QUFBQSxZQUFVLEVBQVY7QUFBaUIsNEJBQWlCLEVBQWpCLEtBQW9CLEVBQUMsWUFBWSxLQUFqQyxHQUF1QyxDQUFDLENBQUMsSUFBRixPQUFBLENBQUMscUJBQVMsQ0FBQyxDQUFDLEVBQUQsQ0FBVixFQUF4QyxHQUF1RCxDQUFDLENBQUMsSUFBRixDQUFPLEVBQVAsQ0FBdkQ7QUFBakI7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUE4RixXQUFPLENBQVA7QUFBUyxHQUFsSDtBQUFBLE1BQW1ILENBQUMsR0FBQyxVQUFDLENBQUQsRUFBRyxDQUFILEVBQU87QUFBQyxRQUFHLENBQUMsSUFBRSxNQUFJLENBQVY7QUFBWSxVQUFHLENBQUMsWUFBWSxLQUFoQjtBQUFBLG9EQUFxQyxDQUFyQztBQUFBOztBQUFBO0FBQXNCO0FBQUEsZ0JBQVUsR0FBVjtBQUFpQix3QkFBVSxPQUFPLEdBQWpCLElBQW9CLFlBQVUsT0FBTyxHQUFyQyxHQUF1QyxDQUFDLENBQUMsU0FBRixHQUFZLEdBQUMsQ0FBQyxRQUFGLEVBQW5ELEdBQWdFLG9CQUFpQixHQUFqQixLQUFvQixHQUFDLFlBQVksS0FBakMsR0FBdUMsQ0FBQyxDQUFDLEdBQUQsQ0FBRCxDQUFLLE9BQUwsQ0FBYSxVQUFBLENBQUM7QUFBQSxxQkFBRSxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBSDtBQUFBLGFBQWQsQ0FBdkMsR0FBK0QsQ0FBQyxDQUFDLFdBQUYsQ0FBYyxHQUFkLENBQS9IO0FBQWpCO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUEyTCxZQUFVLE9BQU8sQ0FBakIsSUFBb0IsWUFBVSxPQUFPLENBQXJDLEdBQXVDLENBQUMsQ0FBQyxTQUFGLEdBQVksQ0FBQyxDQUFDLFFBQUYsRUFBbkQsR0FBZ0UsQ0FBQyxDQUFDLFdBQUYsQ0FBYyxDQUFkLENBQWhFO0FBQXZNO0FBQXdSLEdBQXJaOztBQUFzWixFQUFBLENBQUMsV0FBRCxHQUFVLFVBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQWM7QUFBQyxRQUFNLENBQUMsR0FBQyxRQUFRLENBQUMsYUFBVCxDQUF1QixDQUF2QixDQUFSOztBQUFrQyxLQUFDLFVBQUMsQ0FBRCxFQUFHLENBQUgsRUFBTztBQUFDLFVBQUcsQ0FBSDtBQUFLLDRDQUFpQixNQUFNLENBQUMsT0FBUCxDQUFlLENBQWYsQ0FBakI7QUFBQTtBQUFBLGNBQVUsR0FBVjtBQUFBLGNBQVksRUFBWjs7QUFBbUMsc0JBQVUsT0FBTyxFQUFqQixHQUFtQixnQkFBYyxHQUFkLEdBQWdCLENBQUMsQ0FBQyxTQUFGLEdBQVksRUFBQyxDQUFDLFFBQUYsRUFBNUIsR0FBeUMsQ0FBQyxDQUFDLFlBQUYsQ0FBZSxHQUFmLEVBQWlCLEVBQUMsQ0FBQyxRQUFGLEVBQWpCLENBQTVELEdBQTJGLFNBQU8sR0FBQyxDQUFDLEtBQUYsQ0FBUSxDQUFSLEVBQVUsQ0FBVixDQUFQLElBQXFCLGNBQVksT0FBTyxFQUF4QyxJQUEyQyxDQUFDLENBQUMsZ0JBQUYsQ0FBbUIsR0FBQyxDQUFDLEtBQUYsQ0FBUSxDQUFSLEVBQVcsV0FBWCxFQUFuQixFQUE0QyxFQUE1QyxDQUF0STtBQUFuQztBQUFMO0FBQTZOLEtBQXRPLEVBQXdPLENBQXhPLEVBQTBPLENBQTFPOztBQUFuQyxhQUFvUixDQUFDLEdBQUMsQ0FBdFIsMkJBQUosQ0FBSTtBQUFKLE1BQUEsQ0FBSTtBQUFBOztBQUF3UixXQUFPLENBQUMsSUFBRSxDQUFILEtBQU8sQ0FBQyxHQUFDLG9CQUFpQixDQUFqQixLQUFvQixDQUFDLFlBQVksS0FBakMsZ0NBQTJDLENBQUMsQ0FBQyxDQUFELENBQTVDLHNCQUFtRCxDQUFDLENBQUMsQ0FBRCxDQUFwRCxNQUEwRCxDQUExRCw0QkFBK0QsQ0FBQyxDQUFDLENBQUQsQ0FBaEUsRUFBVCxHQUErRSxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBaEYsRUFBc0YsQ0FBN0Y7QUFBK0YsR0FBL1k7QUFBZ1osQ0EzQzBFLENBQXI1QixDQUFmIiwiZmlsZSI6ImRlU3RhZ25hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERlU3RhZ25hdGU9ZnVuY3Rpb24odCl7dmFyIGU9e307ZnVuY3Rpb24gbihvKXtpZihlW29dKXJldHVybiBlW29dLmV4cG9ydHM7dmFyIHI9ZVtvXT17aTpvLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbb10uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsbiksci5sPSEwLHIuZXhwb3J0c31yZXR1cm4gbi5tPXQsbi5jPWUsbi5kPWZ1bmN0aW9uKHQsZSxvKXtuLm8odCxlKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7ZW51bWVyYWJsZTohMCxnZXQ6b30pfSxuLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKHQsZSl7aWYoMSZlJiYodD1uKHQpKSw4JmUpcmV0dXJuIHQ7aWYoNCZlJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciBvPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKG8pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJmUmJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgciBpbiB0KW4uZChvLHIsZnVuY3Rpb24oZSl7cmV0dXJuIHRbZV19LmJpbmQobnVsbCxyKSk7cmV0dXJuIG99LG4ubj1mdW5jdGlvbih0KXt2YXIgZT10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gbi5kKGUsXCJhXCIsZSksZX0sbi5vPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGUpfSxuLnA9XCJcIixuKG4ucz0wKX0oW2Z1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4zLjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBtYWluIGZpbGUgZm9yIGRlc3RhZ25hdGVcbiAqL3ZhciBvPXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbih0KXtyZXR1cm4gdCYmdC5fX2VzTW9kdWxlP3Q6e2RlZmF1bHQ6dH19O09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLGUuY3JlYXRlRWxlbWVudD12b2lkIDA7Y29uc3Qgcj1vKG4oMSkpLGk9byhuKDIpKTtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4yLjFcbiAqIEBleHBvcnRzIERlU3RhZ25hdGVcbiAqIEBjbGFzc2Rlc2MgQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY2xhc3NcbiAqIEBuYW1lc3BhY2VcbiAqIEBhYnN0cmFjdFxuICovXG5jbGFzcyBzIGV4dGVuZHMgci5kZWZhdWx0e2NvbnN0cnVjdG9yKHQsZSl7c3VwZXIoKSx0aGlzLnByb3BzPWUsdGhpcy5jcmVhdGVFbGVtZW50PXMuY3JlYXRlRWxlbWVudCx0aGlzLl9zdGF0ZT17fSx0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGU9ITEsdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZT0odCxlKT0+W3QsZV0sdGhpcy5zZXRTdGF0ZT10PT57dHJ5e3RoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSgpO2Zvcihjb25zdCBlIG9mIE9iamVjdC5rZXlzKHQpKU9iamVjdC5rZXlzKHRoaXMuc3RhdGUpLmluY2x1ZGVzKGUpfHxjb25zb2xlLndhcm4oYFdBUk46IE5ldyBrZXkgKCR7ZX0pIHNob3VsZCBub3QgYmUgc2V0IHdpdGggc2V0U3RhdGUsIHdoaWNoIGhhcyBrZXlzICR7SlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXModGhpcy5zdGF0ZSkpfS4gRGVjbGFyZSBhbGwgc3RhdGUgdmFyaWFibGVzIGluIGNvbnN0cnVjdG9yIGFzIGEgYmVzdCBwcmFjdGljZS5gKTt0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHRoaXMucHJvcHMsdGhpcy5zdGF0ZSksT2JqZWN0LmFzc2lnbih0aGlzLl9zdGF0ZSx0KTtjb25zdCBlPXRoaXMuX2V4ZWNSZW5kZXIoKTtpZihlIGluc3RhbmNlb2YgQXJyYXkpZm9yKGNvbnN0IHQgb2YgZSl0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQodCk7ZWxzZSB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZSk7dGhpcy5jb21wb25lbnREaWRVcGRhdGUoKX1jYXRjaCh0KXtyZXR1cm4gdGhpcy5jb21wb25lbnREaWRDYXRjaCh0KSx0fX0sdGhpcy5tb3VudENvbXBvbmVudD0oKT0+e3RyeXtjb25zdCB0PXRoaXMucmVuZGVyKCk7aWYodGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlPSEwLHRoaXMuY29tcG9uZW50V2lsbE1vdW50KCksIXQpe3Rocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHJlbmRlciBtZXRob2QgdG8gYmUgaW5jbHVkZWQgaW4gY29tcG9uZW50IGNsYXNzLCBubyByZW5kZXIgbWV0aG9kIGZvdW5kLCBvciByZW5kZXIgcmV0dXJuZWQgYW4gZW1wdHkgYXJyYXlcIil9cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKSx0IGluc3RhbmNlb2YgQXJyYXk/dC5tYXAodD0+dGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKHQpKTp0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQodCl9Y2F0Y2godCl7cmV0dXJuIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2godCksdH19LHRoaXMubW91bnQ9dGhpcy5tb3VudENvbXBvbmVudCx0aGlzLnVubW91bnRDb21wb25lbnQ9KCk9Pnt0cnl7dGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpLHRoaXMuX3JlbW92ZUNoaWxkcmVuKCl9Y2F0Y2godCl7dGhpcy5jb21wb25lbnREaWRDYXRjaCh0KX19LHRoaXMudW5tb3VudD10aGlzLnVubW91bnRDb21wb25lbnQsdGhpcy5fcmVtb3ZlQ2hpbGRyZW49KCk9Pntmb3IoO3RoaXMuX3BhcmVudC5maXJzdENoaWxkJiZ0aGlzLl9wYXJlbnQubGFzdENoaWxkOyl0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCl9LHRoaXMuX2V4ZWNSZW5kZXI9KCk9Pih0aGlzLl9yZW1vdmVDaGlsZHJlbigpLHRoaXMucmVuZGVyKCkpLFtcImJvZHlcIixcImh0bWxcIl0uaW5jbHVkZXModC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpJiZjb25zb2xlLndhcm4oYFdBUk5JTkchIEF2b2lkIHVzaW5nICR7dC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9IGFzIGVsZW1lbnQgcGFyZW50LCBhcyBhbGwgZWxlbWVudHMgd2l0aGluICR7dC50YWdOYW1lLnRvTG93ZXJDYXNlKCl9IHdpbGwgYmUgcmVtb3ZlZCBvbiByZS1yZW5kZXJgKSx0aGlzLl9wYXJlbnQ9dH1nZXQgZ2V0U3RhdGUoKXtyZXR1cm4gdGhpcy5zdGF0ZX1nZXQgc3RhdGUoKXtyZXR1cm4gdGhpcy5fc3RhdGV9c2V0IHN0YXRlKHQpe3RoaXMuX2RpZFNldEluaXRpYWxTdGF0ZT8odGhpcy5jb21wb25lbnREaWRDYXRjaChuZXcgRXJyb3IoXCJEbyBub3QgbXV0YXRlIHN0YXRlIGRpcmVjdGx5LiBVc2Ugc2V0U3RhdGUgaW5zdGVhZFwiKSksdGhpcy5zZXRTdGF0ZSh0KSk6KHRoaXMuX3N0YXRlPXQsdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlPSEwKX1nZXQgZ2V0UHJvcHMoKXtyZXR1cm4gdGhpcy5wcm9wc319ZS5kZWZhdWx0PXMscy5jcmVhdGVFbGVtZW50PWkuZGVmYXVsdCxlLmNyZWF0ZUVsZW1lbnQ9aS5kZWZhdWx0fSxmdW5jdGlvbih0LGUsbil7XCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMy4wXG4gKiBAZXhwb3J0cyBQcmVzZXRcbiAqIEBwYWNrYWdlXG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtlLmRlZmF1bHQ9Y2xhc3N7Y29uc3RydWN0b3IoKXt0aGlzLmNvbXBvbmVudERpZENhdGNoPXQ9PmNvbnNvbGUuZXJyb3IodCksdGhpcy5jb21wb25lbnREaWRNb3VudD0oKT0+e30sdGhpcy5jb21wb25lbnREaWRVcGRhdGU9KCk9Pnt9LHRoaXMuY29tcG9uZW50V2lsbE1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50PSgpPT57fSx0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGU9KCk9Pnt9LHRoaXMucmVuZGVyPSgpPT5udWxsfX19LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4zLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnRcbiAqL09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2NvbnN0IG89dD0+e2NvbnN0IGU9W107Zm9yKGNvbnN0IG4gb2YgdClcIm9iamVjdFwiPT10eXBlb2YgbiYmbiBpbnN0YW5jZW9mIEFycmF5P2UucHVzaCguLi5vKG4pKTplLnB1c2gobik7cmV0dXJuIGV9LHI9KHQsZSk9PntpZihlfHwwPT09ZSlpZihlIGluc3RhbmNlb2YgQXJyYXkpZm9yKGNvbnN0IG4gb2YgZSlcInN0cmluZ1wiPT10eXBlb2Ygbnx8XCJudW1iZXJcIj09dHlwZW9mIG4/dC5pbm5lclRleHQ9bi50b1N0cmluZygpOlwib2JqZWN0XCI9PXR5cGVvZiBuJiZuIGluc3RhbmNlb2YgQXJyYXk/byhuKS5mb3JFYWNoKGU9PnIodCxlKSk6dC5hcHBlbmRDaGlsZChuKTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIGV8fFwibnVtYmVyXCI9PXR5cGVvZiBlP3QuaW5uZXJUZXh0PWUudG9TdHJpbmcoKTp0LmFwcGVuZENoaWxkKGUpfTtlLmRlZmF1bHQ9KHQsZSxuLC4uLmkpPT57Y29uc3Qgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpOygodCxlKT0+e2lmKGUpZm9yKGNvbnN0W24sb11vZiBPYmplY3QuZW50cmllcyhlKSlcInN0cmluZ1wiPT10eXBlb2Ygbz9cImlubmVySFRNTFwiPT09bj90LmlubmVySFRNTD1vLnRvU3RyaW5nKCk6dC5zZXRBdHRyaWJ1dGUobixvLnRvU3RyaW5nKCkpOlwib25cIj09PW4uc2xpY2UoMCwyKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgbyYmdC5hZGRFdmVudExpc3RlbmVyKG4uc2xpY2UoMikudG9Mb3dlckNhc2UoKSxvKX0pKHMsZSk7bGV0IGE9bjtyZXR1cm4gbiYmaSYmKGE9XCJvYmplY3RcIj09dHlwZW9mIG4mJm4gaW5zdGFuY2VvZiBBcnJheT9bLi4ubyhuKSwuLi5vKGkpXTpbbiwuLi5vKGkpXSkscihzLGEpLHN9fV0pOyJdfQ==