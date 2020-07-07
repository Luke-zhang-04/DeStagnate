"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DynamComponent = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
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
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
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
}([function (e, t, n) {
  "use strict";
  /**
   * Dynamic Component
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports createChild
   */

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  t["default"] = function (e, t, n) {
    var r = document.createElement(e);
    if (t) for (var _i = 0, _Object$entries = Object.entries(t); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          _e = _Object$entries$_i[0],
          _n = _Object$entries$_i[1];

      "innerHTML" === _e ? r.innerHTML = _n.toString() : r.setAttribute(_e, _n.toString());
    }
    if (n) if (n instanceof Array) {
      var _iterator = _createForOfIteratorHelper(n),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _e2 = _step.value;
          "string" == typeof _e2 ? r.innerText = _e2 : r.appendChild(_e2);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else "string" == typeof n ? r.innerText = n : r.appendChild(n);
    return r;
  };
}, function (e, t, n) {
  "use strict";

  var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
    void 0 === r && (r = n), Object.defineProperty(e, r, {
      enumerable: !0,
      get: function get() {
        return t[n];
      }
    });
  } : function (e, t, n, r) {
    void 0 === r && (r = n), e[r] = t[n];
  }),
      o = this && this.__setModuleDefault || (Object.create ? function (e, t) {
    Object.defineProperty(e, "default", {
      enumerable: !0,
      value: t
    });
  } : function (e, t) {
    e["default"] = t;
  }),
      i = this && this.__importStar || function (e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) {
      "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
    }
    return o(t, e), t;
  },
      u = this && this.__importDefault || function (e) {
    return e && e.__esModule ? e : {
      "default": e
    };
  };

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.DynamComponent = void 0;
  /**
   * Dynamic Component
   * A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @copyright Copyright (C) 2020 Luke Zhang
   * @author Luke Zhang luke-zhang-04.github.io
   * @license MIT
   * @version 1.0.0
   * @exports DynamComponent
   * @namespace
   */

  var c = u(n(0));

  var f = function f(e, t) {
    var _this = this;

    _classCallCheck(this, f);

    this.props = t, this.componentDidMount = function () {}, this.render = function () {
      return null;
    }, this.initRender = function () {
      if (!_this.render()) throw new Error("Expected render method to be included in component class, no render method found");
      return _this.componentDidMount(), _this.parent.appendChild(_this.render());
    }, this.parent = e;
  };

  t.DynamComponent = f, f.createChild = c["default"], t.createChild = i(n(0));
}]);

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtQ29tcG9uZW50LmJ1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksY0FBYyxHQUFDLFVBQVMsQ0FBVCxFQUFXO0FBQUMsTUFBSSxDQUFDLEdBQUMsRUFBTjs7QUFBUyxXQUFTLENBQVQsQ0FBVyxDQUFYLEVBQWE7QUFBQyxRQUFHLENBQUMsQ0FBQyxDQUFELENBQUosRUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxPQUFaO0FBQW9CLFFBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBSztBQUFDLE1BQUEsQ0FBQyxFQUFDLENBQUg7QUFBSyxNQUFBLENBQUMsRUFBQyxDQUFDLENBQVI7QUFBVSxNQUFBLE9BQU8sRUFBQztBQUFsQixLQUFYO0FBQWlDLFdBQU8sQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLElBQUwsQ0FBVSxDQUFDLENBQUMsT0FBWixFQUFvQixDQUFwQixFQUFzQixDQUFDLENBQUMsT0FBeEIsRUFBZ0MsQ0FBaEMsR0FBbUMsQ0FBQyxDQUFDLENBQUYsR0FBSSxDQUFDLENBQXhDLEVBQTBDLENBQUMsQ0FBQyxPQUFuRDtBQUEyRDs7QUFBQSxTQUFPLENBQUMsQ0FBQyxDQUFGLEdBQUksQ0FBSixFQUFNLENBQUMsQ0FBQyxDQUFGLEdBQUksQ0FBVixFQUFZLENBQUMsQ0FBQyxDQUFGLEdBQUksVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZTtBQUFDLElBQUEsQ0FBQyxDQUFDLENBQUYsQ0FBSSxDQUFKLEVBQU0sQ0FBTixLQUFVLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLENBQXhCLEVBQTBCO0FBQUMsTUFBQSxVQUFVLEVBQUMsQ0FBQyxDQUFiO0FBQWUsTUFBQSxHQUFHLEVBQUM7QUFBbkIsS0FBMUIsQ0FBVjtBQUEyRCxHQUEzRixFQUE0RixDQUFDLENBQUMsQ0FBRixHQUFJLFVBQVMsQ0FBVCxFQUFXO0FBQUMsbUJBQWEsT0FBTyxNQUFwQixJQUE0QixNQUFNLENBQUMsV0FBbkMsSUFBZ0QsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsTUFBTSxDQUFDLFdBQS9CLEVBQTJDO0FBQUMsTUFBQSxLQUFLLEVBQUM7QUFBUCxLQUEzQyxDQUFoRCxFQUE2RyxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDLE1BQUEsS0FBSyxFQUFDLENBQUM7QUFBUixLQUFyQyxDQUE3RztBQUE4SixHQUExUSxFQUEyUSxDQUFDLENBQUMsQ0FBRixHQUFJLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFFBQUcsSUFBRSxDQUFGLEtBQU0sQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFELENBQVQsR0FBYyxJQUFFLENBQW5CLEVBQXFCLE9BQU8sQ0FBUDtBQUFTLFFBQUcsSUFBRSxDQUFGLElBQUssb0JBQWlCLENBQWpCLENBQUwsSUFBeUIsQ0FBekIsSUFBNEIsQ0FBQyxDQUFDLFVBQWpDLEVBQTRDLE9BQU8sQ0FBUDtBQUFTLFFBQUksQ0FBQyxHQUFDLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxDQUFOO0FBQTBCLFFBQUcsQ0FBQyxDQUFDLENBQUYsQ0FBSSxDQUFKLEdBQU8sTUFBTSxDQUFDLGNBQVAsQ0FBc0IsQ0FBdEIsRUFBd0IsU0FBeEIsRUFBa0M7QUFBQyxNQUFBLFVBQVUsRUFBQyxDQUFDLENBQWI7QUFBZSxNQUFBLEtBQUssRUFBQztBQUFyQixLQUFsQyxDQUFQLEVBQWtFLElBQUUsQ0FBRixJQUFLLFlBQVUsT0FBTyxDQUEzRixFQUE2RixLQUFJLElBQUksQ0FBUixJQUFhLENBQWI7QUFBZSxNQUFBLENBQUMsQ0FBQyxDQUFGLENBQUksQ0FBSixFQUFNLENBQU4sRUFBUSxVQUFTLENBQVQsRUFBVztBQUFDLGVBQU8sQ0FBQyxDQUFDLENBQUQsQ0FBUjtBQUFZLE9BQXhCLENBQXlCLElBQXpCLENBQThCLElBQTlCLEVBQW1DLENBQW5DLENBQVI7QUFBZjtBQUE4RCxXQUFPLENBQVA7QUFBUyxHQUE5aUIsRUFBK2lCLENBQUMsQ0FBQyxDQUFGLEdBQUksVUFBUyxDQUFULEVBQVc7QUFBQyxRQUFJLENBQUMsR0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLFVBQUwsR0FBZ0IsWUFBVTtBQUFDLGFBQU8sQ0FBQyxXQUFSO0FBQWlCLEtBQTVDLEdBQTZDLFlBQVU7QUFBQyxhQUFPLENBQVA7QUFBUyxLQUF2RTtBQUF3RSxXQUFPLENBQUMsQ0FBQyxDQUFGLENBQUksQ0FBSixFQUFNLEdBQU4sRUFBVSxDQUFWLEdBQWEsQ0FBcEI7QUFBc0IsR0FBN3BCLEVBQThwQixDQUFDLENBQUMsQ0FBRixHQUFJLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLFdBQU8sTUFBTSxDQUFDLFNBQVAsQ0FBaUIsY0FBakIsQ0FBZ0MsSUFBaEMsQ0FBcUMsQ0FBckMsRUFBdUMsQ0FBdkMsQ0FBUDtBQUFpRCxHQUFqdUIsRUFBa3VCLENBQUMsQ0FBQyxDQUFGLEdBQUksRUFBdHVCLEVBQXl1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUYsR0FBSSxDQUFMLENBQWp2QjtBQUF5dkIsQ0FBcDVCLENBQXE1QixDQUFDLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQztBQUN6N0I7Ozs7Ozs7Ozs7QUFRRyxFQUFBLE1BQU0sQ0FBQyxjQUFQLENBQXNCLENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUMsSUFBQSxLQUFLLEVBQUMsQ0FBQztBQUFSLEdBQXJDOztBQUFpRCxFQUFBLENBQUMsV0FBRCxHQUFVLFVBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQVM7QUFBQyxRQUFNLENBQUMsR0FBQyxRQUFRLENBQUMsYUFBVCxDQUF1QixDQUF2QixDQUFSO0FBQWtDLFFBQUcsQ0FBSCxFQUFLLG1DQUFpQixNQUFNLENBQUMsT0FBUCxDQUFlLENBQWYsQ0FBakI7QUFBQTtBQUFBLFVBQVUsRUFBVjtBQUFBLFVBQVksRUFBWjs7QUFBbUMsc0JBQWMsRUFBZCxHQUFnQixDQUFDLENBQUMsU0FBRixHQUFZLEVBQUMsQ0FBQyxRQUFGLEVBQTVCLEdBQXlDLENBQUMsQ0FBQyxZQUFGLENBQWUsRUFBZixFQUFpQixFQUFDLENBQUMsUUFBRixFQUFqQixDQUF6QztBQUFuQztBQUEyRyxRQUFHLENBQUgsRUFBSyxJQUFHLENBQUMsWUFBWSxLQUFoQjtBQUFBLGlEQUFxQyxDQUFyQztBQUFBOztBQUFBO0FBQXNCO0FBQUEsY0FBVSxHQUFWO0FBQWlCLHNCQUFVLE9BQU8sR0FBakIsR0FBbUIsQ0FBQyxDQUFDLFNBQUYsR0FBWSxHQUEvQixHQUFpQyxDQUFDLENBQUMsV0FBRixDQUFjLEdBQWQsQ0FBakM7QUFBakI7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQTZGLFlBQVUsT0FBTyxDQUFqQixHQUFtQixDQUFDLENBQUMsU0FBRixHQUFZLENBQS9CLEdBQWlDLENBQUMsQ0FBQyxXQUFGLENBQWMsQ0FBZCxDQUFqQztBQUFrRCxXQUFPLENBQVA7QUFBUyxHQUFuVTtBQUFvVSxDQVRnakIsRUFTL2lCLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWU7QUFBQzs7QUFBYSxNQUFJLENBQUMsR0FBQyxRQUFNLEtBQUssZUFBWCxLQUE2QixNQUFNLENBQUMsTUFBUCxHQUFjLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQjtBQUFDLFNBQUssQ0FBTCxLQUFTLENBQVQsS0FBYSxDQUFDLEdBQUMsQ0FBZixHQUFrQixNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixDQUF4QixFQUEwQjtBQUFDLE1BQUEsVUFBVSxFQUFDLENBQUMsQ0FBYjtBQUFlLE1BQUEsR0FBRyxFQUFDLGVBQVU7QUFBQyxlQUFPLENBQUMsQ0FBQyxDQUFELENBQVI7QUFBWTtBQUExQyxLQUExQixDQUFsQjtBQUF5RixHQUF6SCxHQUEwSCxVQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUI7QUFBQyxTQUFLLENBQUwsS0FBUyxDQUFULEtBQWEsQ0FBQyxHQUFDLENBQWYsR0FBa0IsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLLENBQUMsQ0FBQyxDQUFELENBQXhCO0FBQTRCLEdBQXJNLENBQU47QUFBQSxNQUE2TSxDQUFDLEdBQUMsUUFBTSxLQUFLLGtCQUFYLEtBQWdDLE1BQU0sQ0FBQyxNQUFQLEdBQWMsVUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhO0FBQUMsSUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixTQUF4QixFQUFrQztBQUFDLE1BQUEsVUFBVSxFQUFDLENBQUMsQ0FBYjtBQUFlLE1BQUEsS0FBSyxFQUFDO0FBQXJCLEtBQWxDO0FBQTJELEdBQXZGLEdBQXdGLFVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYTtBQUFDLElBQUEsQ0FBQyxXQUFELEdBQVUsQ0FBVjtBQUFZLEdBQWxKLENBQS9NO0FBQUEsTUFBbVcsQ0FBQyxHQUFDLFFBQU0sS0FBSyxZQUFYLElBQXlCLFVBQVMsQ0FBVCxFQUFXO0FBQUMsUUFBRyxDQUFDLElBQUUsQ0FBQyxDQUFDLFVBQVIsRUFBbUIsT0FBTyxDQUFQO0FBQVMsUUFBSSxDQUFDLEdBQUMsRUFBTjtBQUFTLFFBQUcsUUFBTSxDQUFULEVBQVcsS0FBSSxJQUFJLENBQVIsSUFBYSxDQUFiO0FBQWUsb0JBQVksQ0FBWixJQUFlLE1BQU0sQ0FBQyxjQUFQLENBQXNCLElBQXRCLENBQTJCLENBQTNCLEVBQTZCLENBQTdCLENBQWYsSUFBZ0QsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFqRDtBQUFmO0FBQXdFLFdBQU8sQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsRUFBTyxDQUFkO0FBQWdCLEdBQWxoQjtBQUFBLE1BQW1oQixDQUFDLEdBQUMsUUFBTSxLQUFLLGVBQVgsSUFBNEIsVUFBUyxDQUFULEVBQVc7QUFBQyxXQUFPLENBQUMsSUFBRSxDQUFDLENBQUMsVUFBTCxHQUFnQixDQUFoQixHQUFrQjtBQUFDLGlCQUFRO0FBQVQsS0FBekI7QUFBcUMsR0FBbG1COztBQUFtbUIsRUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQixDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDLElBQUEsS0FBSyxFQUFDLENBQUM7QUFBUixHQUFyQyxHQUFpRCxDQUFDLENBQUMsY0FBRixHQUFpQixLQUFLLENBQXZFO0FBQ3ovQjs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFUOztBQVh3WSxNQVdsWCxDQVhrWCxHQVdoWCxXQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCO0FBQUE7O0FBQUE7O0FBQUMsU0FBSyxLQUFMLEdBQVcsQ0FBWCxFQUFhLEtBQUssaUJBQUwsR0FBdUIsWUFBSSxDQUFFLENBQTFDLEVBQTJDLEtBQUssTUFBTCxHQUFZO0FBQUEsYUFBSSxJQUFKO0FBQUEsS0FBdkQsRUFBZ0UsS0FBSyxVQUFMLEdBQWdCLFlBQUk7QUFBQyxVQUFHLENBQUMsS0FBSSxDQUFDLE1BQUwsRUFBSixFQUFrQixNQUFNLElBQUksS0FBSixDQUFVLGtGQUFWLENBQU47QUFBb0csYUFBTyxLQUFJLENBQUMsaUJBQUwsSUFBeUIsS0FBSSxDQUFDLE1BQUwsQ0FBWSxXQUFaLENBQXdCLEtBQUksQ0FBQyxNQUFMLEVBQXhCLENBQWhDO0FBQXVFLEtBQWxSLEVBQW1SLEtBQUssTUFBTCxHQUFZLENBQS9SO0FBQWlTLEdBWDhEOztBQVc3RCxFQUFBLENBQUMsQ0FBQyxjQUFGLEdBQWlCLENBQWpCLEVBQW1CLENBQUMsQ0FBQyxXQUFGLEdBQWMsQ0FBQyxXQUFsQyxFQUEyQyxDQUFDLENBQUMsV0FBRixHQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRCxDQUFGLENBQTFEO0FBQWlFLENBcEI0aEIsQ0FBcjVCLENBQW5CIiwiZmlsZSI6ImR5bmFtQ29tcG9uZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBEeW5hbUNvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgbz10W3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LHIpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpbi5kKHIsbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTEpfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO1xuLyoqXG4gKiBEeW5hbWljIENvbXBvbmVudFxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUNoaWxkXG4gKi9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt0LmRlZmF1bHQ9KGUsdCxuKT0+e2NvbnN0IHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKTtpZih0KWZvcihjb25zdFtlLG5db2YgT2JqZWN0LmVudHJpZXModCkpXCJpbm5lckhUTUxcIj09PWU/ci5pbm5lckhUTUw9bi50b1N0cmluZygpOnIuc2V0QXR0cmlidXRlKGUsbi50b1N0cmluZygpKTtpZihuKWlmKG4gaW5zdGFuY2VvZiBBcnJheSlmb3IoY29uc3QgZSBvZiBuKVwic3RyaW5nXCI9PXR5cGVvZiBlP3IuaW5uZXJUZXh0PWU6ci5hcHBlbmRDaGlsZChlKTtlbHNlXCJzdHJpbmdcIj09dHlwZW9mIG4/ci5pbm5lclRleHQ9bjpyLmFwcGVuZENoaWxkKG4pO3JldHVybiByfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO3ZhciByPXRoaXMmJnRoaXMuX19jcmVhdGVCaW5kaW5nfHwoT2JqZWN0LmNyZWF0ZT9mdW5jdGlvbihlLHQsbixyKXt2b2lkIDA9PT1yJiYocj1uKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0W25dfX0pfTpmdW5jdGlvbihlLHQsbixyKXt2b2lkIDA9PT1yJiYocj1uKSxlW3JdPXRbbl19KSxvPXRoaXMmJnRoaXMuX19zZXRNb2R1bGVEZWZhdWx0fHwoT2JqZWN0LmNyZWF0ZT9mdW5jdGlvbihlLHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KX06ZnVuY3Rpb24oZSx0KXtlLmRlZmF1bHQ9dH0pLGk9dGhpcyYmdGhpcy5fX2ltcG9ydFN0YXJ8fGZ1bmN0aW9uKGUpe2lmKGUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgdD17fTtpZihudWxsIT1lKWZvcih2YXIgbiBpbiBlKVwiZGVmYXVsdFwiIT09biYmT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmcih0LGUsbik7cmV0dXJuIG8odCxlKSx0fSx1PXRoaXMmJnRoaXMuX19pbXBvcnREZWZhdWx0fHxmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHQuRHluYW1Db21wb25lbnQ9dm9pZCAwO1xuLyoqXG4gKiBEeW5hbWljIENvbXBvbmVudFxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4wLjBcbiAqIEBleHBvcnRzIER5bmFtQ29tcG9uZW50XG4gKiBAbmFtZXNwYWNlXG4gKi9cbmNvbnN0IGM9dShuKDApKTtjbGFzcyBme2NvbnN0cnVjdG9yKGUsdCl7dGhpcy5wcm9wcz10LHRoaXMuY29tcG9uZW50RGlkTW91bnQ9KCk9Pnt9LHRoaXMucmVuZGVyPSgpPT5udWxsLHRoaXMuaW5pdFJlbmRlcj0oKT0+e2lmKCF0aGlzLnJlbmRlcigpKXRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHJlbmRlciBtZXRob2QgdG8gYmUgaW5jbHVkZWQgaW4gY29tcG9uZW50IGNsYXNzLCBubyByZW5kZXIgbWV0aG9kIGZvdW5kXCIpO3JldHVybiB0aGlzLmNvbXBvbmVudERpZE1vdW50KCksdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoKSl9LHRoaXMucGFyZW50PWV9fXQuRHluYW1Db21wb25lbnQ9ZixmLmNyZWF0ZUNoaWxkPWMuZGVmYXVsdCx0LmNyZWF0ZUNoaWxkPWkobigwKSl9XSk7Il19