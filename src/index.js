"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.3.2
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 */

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) { o = it; } var i = 0, F = function () {}; return { s: F, n: function n() { if (i >= o.length) { return { done: !0 }; } return { done: !1, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = !0, didErr = !1, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = !0; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) { it["return"](); } } finally { if (didErr) { throw err; } } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) { return; } if (typeof o === "string") { return _arrayLikeToArray(o, minLen); } var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) { n = o.constructor.name; } if (n === "Map" || n === "Set") { return Array.from(o); } if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return _arrayLikeToArray(o, minLen); } }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) { len = arr.length; } for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function (obj) { return typeof obj; }; } else { _typeof = function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.createElementNS = exports.createElement = void 0;

var _preset_1 = __importDefault(require("./_preset")),
    createElement_1 = __importDefault(require("./createElement")),
    createElementNS_1 = __importDefault(require("./createElementNS"));

var DeStagnate = function (_preset_1$default) {
  _inherits(DeStagnate, _preset_1$default);

  var _super = _createSuper(DeStagnate);

  function DeStagnate(parent, props) {
    var _this;

    _classCallCheck(this, DeStagnate);

    _this = _super.call(this);
    _this.props = props;
    _this.createElement = DeStagnate.createElement;
    _this.createElementNS = DeStagnate.createElementNS;
    _this._state = {};
    _this._didSetInitialState = !1;

    _this.getSnapshotBeforeUpdate = function (prevProps, prevState) {
      return [prevProps, prevState];
    };

    _this.setState = function (obj) {
      try {
        _this.componentWillUpdate();

        for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (!Object.keys(_this.state).includes(key)) {
            console.warn("WARN: New key (".concat(key, ") should not be set with setState, which has keys ").concat(JSON.stringify(Object.keys(_this.state)), ". Declare all state variables in constructor as a best practice."));
          }
        }

        _this.getSnapshotBeforeUpdate(_this.props, _this.state);

        Object.assign(_this._state, obj);

        var renderedContent = _this._execRender();

        if (_typeof(renderedContent) === "object" && renderedContent instanceof Array) {
          var _iterator = _createForOfIteratorHelper(renderedContent),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var element = _step.value;

              _this._parent.appendChild(element);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else if (renderedContent) {
          _this._parent.appendChild(renderedContent);
        }

        _this.componentDidUpdate();
      } catch (err) {
        _this.componentDidCatch(err);

        return err;
      }
    };

    _this.mountComponent = function () {
      try {
        var component = _this.render();

        _this._didSetInitialState = !0;

        _this.componentWillMount();

        if (!component) {
          throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array");
        }

        _this.componentDidMount();

        if (_typeof(component) === "object" && component instanceof Array) {
          for (var _a = component, _f = function (element) {
            return _this._parent.appendChild(element);
          }, _r = [], _i2 = 0; _i2 < _a.length; _i2++) {
            _r.push(_f(_a[_i2], _i2, _a));
          }

          return _r;
        }

        return _this._parent.appendChild(component);
      } catch (err) {
        _this.componentDidCatch(err);

        return err;
      }
    };

    _this.mount = _this.mountComponent;

    _this.unmountComponent = function () {
      try {
        _this.componentWillUnmount();

        _this._removeChildren();
      } catch (err) {
        _this.componentDidCatch(err);
      }
    };

    _this.unmount = _this.unmountComponent;

    _this._removeChildren = function () {
      while (_this._parent.firstChild) {
        if (_this._parent.lastChild) {
          _this._parent.removeChild(_this._parent.lastChild);
        } else {
          break;
        }
      }
    };

    _this._execRender = function () {
      _this._removeChildren();

      return _this.render();
    };

    if (["body", "html"].includes(parent.tagName.toLowerCase())) {
      console.warn("WARNING! Avoid using ".concat(parent.tagName.toLowerCase(), " as element parent, as all elements within ").concat(parent.tagName.toLowerCase(), " will be removed on re-render"));
    }

    _this._parent = parent;
    return _this;
  }

  _createClass(DeStagnate, [{
    key: "getState",
    get: function get() {
      return this.state;
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(obj) {
      if (this._didSetInitialState) {
        this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead."));
        console.warn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly");
        this.setState(obj);
      } else {
        this._state = obj;
        this._didSetInitialState = !0;
      }
    }
  }, {
    key: "getProps",
    get: function get() {
      return this.props;
    }
  }]);

  return DeStagnate;
}(_preset_1["default"]);

exports["default"] = DeStagnate;
DeStagnate.createElement = createElement_1["default"];
DeStagnate.createElementNS = createElementNS_1["default"];
exports.createElement = createElement_1["default"];
exports.createElementNS = createElementNS_1["default"];