"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) { o = it; } var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) { return { done: true }; } return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) { it["return"](); } } finally { if (didErr) { throw err; } } } }; }

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

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = void 0;
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.4
 * @exports DeStagnate
 */

var _preset_1 = __importDefault(require("./_preset"));

var createElement_1 = __importDefault(require("./createElement"));
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


var DeStagnate = /*#__PURE__*/function (_preset_1$default) {
  _inherits(DeStagnate, _preset_1$default);

  var _super = _createSuper(DeStagnate);

  /**
   * Construct class component
   * @public
   * @constructor
   * @param {HTMLElement} parent - parent of this element
   * @param {undefined | Object.<string, string | number>} props - element properties; works like React Props
   */
  function DeStagnate(parent, props) {
    var _this;

    _classCallCheck(this, DeStagnate);

    _this = _super.call(this);
    _this.props = props;
    /**
     * Creates a child element to DynamComponent
     * @public
     * @instance
     * @readonly
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */

    _this.createElement = DeStagnate.createElement;
    /**
     * State of component. Works similar React State
     * @type {undefined | Object.<string, unknown>}
     * @protected
     * @instance
     */

    _this.state = {};
    /**
     * What to call before component update (state mutation)
     * @public
     * @instance
     * @param {Props} prevProps - previous props
     * @param {State} prevState - previous state
     * @returns {void} void
     */

    _this.getSnapshotBeforeUpdate = function (prevProps, prevState) {
      return [prevProps, prevState];
    };
    /**
     * Sets state
     * @public
     * @instance
     * @readonly
     * @param {State} obj - state to set
     * @returns {void | Error} void
     */


    _this.setState = function (obj) {
      try {
        _this.componentWillUpdate();

        for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];

          if (!Object.keys(_this.state).includes(key)) {
            // eslint-disable-next-line
            throw new Error("A new key ".concat(key, " should not be set with setState, which has keys ").concat(JSON.stringify(Object.keys(_this.state)), ". Declare all state variables in constructor."));
          }
        }

        Object.assign(_this.state, obj);

        _this._removeChildren();

        var renderedContent = _this.render();

        if (renderedContent instanceof Array) {
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
        } else {
          _this._parent.appendChild(renderedContent);
        }

        _this.componentDidUpdate();
      } catch (err) {
        _this.componentDidCatch(err);

        return err;
      }
    };
    /* eslint-disable max-len, @typescript-eslint/member-ordering */

    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {HTMLElement | Array.<HTMLElement> | error} - result of append child to parent element
     */


    _this.mountComponent = function () {
      try {
        var component = _this.render();

        _this.componentWillMount();

        if (!component) {
          var msg = "Expected render method to be included in component class, no render method found, or render returned an empty array";
          throw new Error(msg);
        }

        _this.componentDidMount();

        if (component instanceof Array) {
          var _a = component;

          var _f = function _f(element) {
            return _this._parent.appendChild(element);
          };

          var _r = [];

          for (var _i2 = 0; _i2 < _a.length; _i2++) {
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
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {HTMLElement} - result of append child to parent element
     */


    _this.mount = _this.mountComponent;
    /**
     * Unmounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {void} - void
     */

    _this.unmountComponent = function () {
      try {
        _this.componentWillUnmount();

        _this._removeChildren();
      } catch (err) {
        _this.componentDidCatch(err);
      }
    };
    /**
     * Unmounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {void} - void
     */


    _this.unmount = _this.unmountComponent;
    /* eslint-enable max-len, @typescript-eslint/member-ordering */

    /**
     * Removes children from this._parent
     * @private
     * @instance
     * @return {void} void
     */

    _this._removeChildren = function () {
      while (_this._parent.firstChild) {
        if (_this._parent.lastChild) {
          _this._parent.removeChild(_this._parent.lastChild);
        } else {
          break;
        }
      }
    };

    if (["body", "html"].includes(parent.tagName.toLowerCase())) {
      throw new Error("WARNING! Avoid using ".concat(parent.tagName.toLowerCase(), " as element parent, as all elements within ").concat(parent.tagName.toLowerCase(), " will be removed on re-render"));
    }

    _this._parent = parent;
    return _this;
  }
  /**
   * Public getState getter as this.state itself is protected
   * @public
   * @instance
   * @returns {State} component state
   */


  _createClass(DeStagnate, [{
    key: "getState",
    get: function get() {
      return this.state;
    }
    /**
     * Public getProps getter as this.props itself is protected
     * @public
     * @instance
     * @returns {Props | undefined} component state
     */

  }, {
    key: "getProps",
    get: function get() {
      return this.props;
    }
  }]);

  return DeStagnate;
}(_preset_1["default"]);

exports["default"] = DeStagnate;
/**
 * Creates a child element to DynamComponent
 * @public
 * @static
 * @readonly
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
 * @returns {HTMLElement} html element
 */

DeStagnate.createElement = createElement_1["default"];
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns {HTMLElement} html element
 */

exports.createElement = createElement_1["default"];