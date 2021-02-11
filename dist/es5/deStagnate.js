/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 */
var DeStagnate = (function (exports) {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

  /**
   * Binds children to element
   * @package
   * @param element - element to bind
   * @param props - props to bind with
   * @param ns - if namespace element
   * @returns void
   */

  var bindProps = function bindProps(element, props) {
    var ns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (props) {
      for (var _i = 0, _Object$entries = Object.entries(props); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            val = _Object$entries$_i[1];

        if (typeof val === "string" || typeof val === "number") {
          if (key === "innerHTML") {
            element.innerHTML = val.toString();
          } else if (ns) {
            element.setAttributeNS(null, key, val.toString());
          } else {
            element.setAttribute(key, val.toString());
          }
        } else if (key.slice(0, 2) === "on") {
          if (typeof val === "function") {
            element.addEventListener(key.slice(2).toLowerCase(), val);
          }
        } else if (key === "ref" && _typeof(val) === "object" && "current" in val) {
          val.current = element;
        } else if (val !== undefined) {
          console.warn("".concat(_typeof(val), " is not a valid DeStagnate child"));
        }
      }
    }
  };
  /**
   * Binds children to element
   * @package
   * @param element - element to bind
   * @param children - children to bind with
   * @returns void
   */

  var bindChildren = function bindChildren(element, children) {
    if (children !== null && children !== undefined) {
      if (children instanceof Array) {
        children.forEach(function (child) {
          return bindChildren(element, child);
        });
      } else if (typeof children === "string" || typeof children === "number") {
        element.appendChild(document.createTextNode(children.toString()));
      } else if (children instanceof Component) {
        if (!children.didMount && element instanceof window.HTMLElement) {
          children.mount(element);
          return;
        } else if (!(element instanceof window.HTMLElement)) {
          throw new Error("ERROR: code 3. See ".concat(url));
        }

        if (children.parent !== element) {
          children.parent = element;
        }

        children.forceUpdate();
      } else {
        element.appendChild(children);
      }
    }
  };

  /**
   *
   * @param tagNameOrComponent - name of HTML element or function component
   * @param props - props of element or component
   * 1. If `tagNameOrComponent` is tagname, props are element properties, such as class, innerHTML, id, style, etc
   * 2. If `tagNameOrComponent` is a function, props are that functions parameters
   * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
   * @param childrenArgs - rest parameter for children
   * @returns element
   */

  function createElement(tagNameOrComponent, props) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    if (typeof tagNameOrComponent === "string") {
      var element = document.createElement(tagNameOrComponent);
      bindProps(element, props);
      bindChildren(element, children);
      return element;
    } else if (typeof tagNameOrComponent === "function") {
      return tagNameOrComponent(props, children);
    }

    return Error("tagNameOrComponent is of invalid type.");
  }

  /**
   * Creates a child element to deStagnate
   * @param namespaceURI - namespace uri
   * @param tagName - name of HTML element
   * @param props - element properties, such as class, innerHTML, id, style, etc
   * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
   * @param childrenRest - rest parameter of children
   * @returns html element
   */

  var createElementNS = function createElementNS(namespaceURI, tagName, props) {
    var element = document.createElementNS(namespaceURI, tagName);
    bindProps(element, props, true);

    for (var _len = arguments.length, children = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      children[_key - 3] = arguments[_key];
    }

    bindChildren(element, children);
    return element;
  };

  /**
   * Creates a reference for a nested component
   * @returns empty ref object
   */
  var createRef = function createRef() {
    return {
      current: null
    };
  };

  var Preset = function Preset() {
    _classCallCheck(this, Preset);

    this.createElement = createElement;
    this.createElementNS = createElementNS;
    this.createRef = createRef;
    /**
     * Called when component catches error. Default behaviour is console.error
     * @param error - error object with info
     * @returns void
     */

    this.componentDidCatch = function (error) {
      return console.error(error);
    };
    /**
     * Called before component is updated
     * @returns whether or not component should update/re-render
     */


    this.shouldComponentUpdate = function () {
      return true;
    };
    /**
     * Rendering HTML, must be part of extended class
     * @public
     * @instance
     * @abstract
     * @returns if returns null error will be thrown
     */


    this.render = function () {
      return null;
    };
  };
  Preset.createElement = createElement;
  Preset.createElementNS = createElementNS;
  Preset.createRef = createRef;

  var eventNames = ["onFocus", "onBlur", "onFocusIn", "onFocusOut", "onAnimationStart", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onTransitionStart", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onAuxClick", "onClick", "onDblClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp"];
  var Events = function (_BaseComponent) {
    _inherits(Events, _BaseComponent);

    var _super = _createSuper(Events);

    function Events() {
      var _this;

      _classCallCheck(this, Events);

      _this = _super.apply(this, arguments);
      /**
       * Binds event listeners event
       * Do not call manually
       * @pacakge
       */

      _this.bindEventListeners = function (element) {
        _this._eventListener(element.addEventListener);
      };
      /**
       * Binds event listeners event
       * Do not call manually
       * @pacakge
       */


      _this.unbindEventListeners = function (element) {
        _this._eventListener(element.removeEventListener);
      };

      _this._eventListener = function (eventListener) {
        var _iterator = _createForOfIteratorHelper(eventNames),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var eventName = _step.value;
            var htmlEventName = eventName.slice(2).toLowerCase(),
                callback = _this[eventName];

            if (callback !== undefined && callback instanceof Function) {
              eventListener(htmlEventName, callback);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      };

      return _this;
    }

    return Events;
  }(Preset);

  /**
   * Checks if val1 and val2 are equal
   * @param val1 - value to check for equality
   * @param val2 - value to compare against val1
   * @param maxDepth - max recursion depth to crawl an object. After max depth is
   * reached, the two values are simply compared with `===`
   * @param maxLength - max length of array to crawl. If max lenth is reached, two
   * arrays will simply be compared with `===`
   * @returns `val1 === val2`
   */
  var isEqual = function isEqual(val1, val2) {
    var maxDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
    var maxLength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    if (maxDepth === 0) {
      return val1 === val2;
    } else if (_typeof(val1) !== _typeof(val2)) {
      return false;
    }

    if (val1 instanceof Array && val2 instanceof Array) {
      if (val1.length !== val2.length) {
        return false;
      }

      if (val1.length > maxLength || val2.length > maxLength) {
        return val1 === val2;
      }

      for (var index = 0; index < val1.length; index++) {
        if (!isEqual(val1[index], val2[index], maxDepth - 1, maxLength)) {
          return false;
        }
      }

      return true;
    } else if (val1 instanceof Object && val2 instanceof Object) {
      if (!isEqual(Object.keys(val1), Object.keys(val2), maxDepth - 1, maxLength)) {
        return false;
      }

      for (var _i = 0, _Object$keys = Object.keys(val1); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        if (!isEqual(val1[key], val2[key], maxDepth - 1, maxLength)) {
          return false;
        }
      }

      return true;
    }

    return val1 === val2;
  };
  var utils = {
    isEqual: isEqual
  };

  /**
   * DeStagnate
   * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
   * @class
   * @namespace
   * @abstract
   */

  var Component = function (_Base) {
    _inherits(Component, _Base);

    var _super = _createSuper(Component);

    /**
     * Construct class component
     * @param parent - parent of this element
     * @param props - element properties; works like React Props
     */
    function Component(parent, props) {
      var _this;

      _classCallCheck(this, Component);

      _this = _super.call(this);
      _this.props = props;
      /**
       * State of component. Works similar React State
       * @type {undefined | Object.<string, unknown>}
       */

      _this._state = {};
      _this._didSetInitialState = false;
      _this._didMount = false;
      /**
       * What to call before component update (state mutation)
       * @param {Props} prevProps - previous props
       * @param prevState - previous state
       * @returns void
       */

      _this.getSnapshotBeforeUpdate = function (prevProps, prevState) {
        return [prevProps, prevState];
      };
      /**
       * Forces a component to update
       * Follows the same component updating procedure as setState without modifying state
       * @returns returns error if error is thrown
       */


      _this.forceUpdate = function () {
        var _a;

        try {
          (_a = _this.componentDidUpdate) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          if (_this._parent === undefined) {
            throw new Error("ERROR: code 2. See ".concat(url, "."));
          }

          _this.getSnapshotBeforeUpdate(Object.assign({}, _this.props), Object.assign({}, _this.state));

          _this._update(_this._execRender());
        } catch (err) {
          return _this._handleError(err);
        }
      };
      /**
       * Checks if the state changed from the previous state. Can me attached to
       * `shouldComponentUpdate`
       * @param keys - list of keys to crawl. If left undefined (default) then
       * use all keys. Should be `keyof State`, but there were some Typescript
       * troubles.
       * @param maxDepth - max recursion depth to crawl an object. After max depth
       * is reached, the two values are simply compared with `===`
       * @param maxLength - max length of array to crawl. If max lenth is reached,
       * two arrays will simply be compared with `===`
       * @returns `val1 === val2`
       */


      _this.stateDidChange = function (keys) {
        var maxDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
        var maxLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;

        var _a;

        if (keys === undefined) {
          return !utils.isEqual(_this._state, _this._prevState, maxDepth, maxLength);
        }

        var state = {},
            prevState = {};

        var _iterator = _createForOfIteratorHelper(keys),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var key = _step.value;
            state[key] = _this._state[key];
            prevState[key] = (_a = _this._prevState) === null || _a === void 0 ? void 0 : _a[key];
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return !utils.isEqual(state, prevState, maxDepth, maxLength);
      };
      /**
       * Sets state
       * @param obj - state to set
       * @returns void
       */


      _this.setState = function (obj) {
        var _a;

        try {
          (_a = _this.componentWillUpdate) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          if (_this._parent === undefined) {
            throw new Error("ERROR: code 2. See ".concat(url, "."));
          }

          _this._prevState = Object.assign({}, _this._state);

          _this.getSnapshotBeforeUpdate(Object.assign({}, _this.props), Object.assign({}, _this.state));

          Object.assign(_this._state, obj);
          var renderedContent = _this.shouldComponentUpdate() ? _this._execRender() : undefined;

          _this._update(renderedContent);
        } catch (err) {
          return _this._handleError(err);
        }
      };
      /**
       * Initial mounting to be manually called
       * @param parent - parent element to mount with; optional
       * @returns - result of append child to parent element
       */


      _this.mountComponent = function (parent) {
        var _a, _b;

        try {
          if (parent !== undefined) {
            _this.parent = parent;
          }

          if (_this._parent === undefined) {
            throw new Error("ERROR: code 2. See ".concat(url, "."));
          }

          var component = _this.render();

          _this._didSetInitialState = true;
          (_a = _this.componentWillMount) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          if (component === null) {
            throw new Error("ERROR: code 3. See ".concat(url, "."));
          }

          _this.bindEventListeners(_this._parent);

          _this._didMount = true;
          (_b = _this.componentDidMount) === null || _b === void 0 ? void 0 : _b.call(_assertThisInitialized(_this));

          if (component instanceof Array) {
            var fragment = document.createDocumentFragment();
            component.forEach(function (child) {
              return fragment.appendChild(child);
            });
            return _this._parent.appendChild(fragment);
          }

          return _this._parent.appendChild(component);
        } catch (err) {
          return _this._handleError(err);
        }
      };
      /**
       * Initial mounting to be manually called
       * @returns - result of append child to parent element
       */


      _this.mount = _this.mountComponent;
      /**
       * Unmounting to be manually called
       * @returns - void
       */

      _this.unmountComponent = function () {
        var _a;

        try {
          if (_this._parent === undefined) {
            return;
          }

          (_a = _this.componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          _this.unbindEventListeners(_this._parent);

          _this._removeChildren();

          _this._didMount = false;
        } catch (err) {
          _this._handleError(err);
        }
      };
      /**
       * Unmounting to be manually called
       * @returns - void
       */


      _this.unmount = _this.unmountComponent;
      /**
       * Removes children from this._parent
       * @return void
       */

      _this._removeChildren = function () {
        if (_this._parent === undefined) {
          throw new Error("ERROR: code 2. See ".concat(url, "."));
        }

        while (_this._parent.firstChild) {
          if (_this._parent.lastChild) {
            _this._parent.removeChild(_this._parent.lastChild);
          }
        }
      };
      /**
       * Executes new render
       * @returns rendered content
       */


      _this._execRender = function () {
        _this._removeChildren();

        return _this.render();
      };
      /**
       * Updates the component
       * @param renderedContent - rendered content from executing the render function
       * @returns void
       */


      _this._update = function (renderedContent) {
        var _a, _b, _c;

        if (renderedContent instanceof Array) {
          var _iterator2 = _createForOfIteratorHelper(renderedContent),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var element = _step2.value;
              (_a = _this._parent) === null || _a === void 0 ? void 0 : _a.appendChild(element);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else if (renderedContent) {
          (_b = _this._parent) === null || _b === void 0 ? void 0 : _b.appendChild(renderedContent);
        }

        if (renderedContent) {
          (_c = _this.componentDidUpdate) === null || _c === void 0 ? void 0 : _c.call(_assertThisInitialized(_this));
        }
      };

      _this._handleError = function (err) {
        if (err instanceof Error) {
          _this.componentDidCatch(err);

          return err;
        }

        var error = new Error(String(err));

        _this.componentDidCatch(error);

        return error;
      };

      if (parent === null) {
        throw new Error("Parent is null, expected HTMLElement | undefined.");
      }

      _this._parent = parent;
      return _this;
    }
    /**
     * Public getState getter as this.state itself is protected
     * @returns component state
     */


    _createClass(Component, [{
      key: "getState",
      get: function get() {
        return this.state;
      }
      /**
       * Get component state
       * @returns component state
       */

    }, {
      key: "state",
      get: function get() {
        return this._state;
      }
      /**
       * Sets component state
       * WARN: do not use this method to mutate the state directly
       * @param obj - state to set
       */
      ,
      set: function set(obj) {
        if (this._didSetInitialState) {
          this.componentDidCatch(new Error("ERROR: code 1. See ".concat(url, ".")));
          this.setState(obj);
        } else {
          this._state = obj;
          this._didSetInitialState = true;
        }
      }
      /**
       * Public getProps getter as this.props itself is protected
       * @returns component props
       */

    }, {
      key: "getProps",
      get: function get() {
        return this.props;
      }
      /**
       * Set the parent of this component
       * @param element - parent element
       * @returns void
       */

    }, {
      key: "parent",
      get:
      /**
       * Get the parent element of this component
       * @returns parent
       */
      function get() {
        return this._parent;
      }
      /**
       * Get didMount value publicly
       * @returns if mounted
       */
      ,
      set: function set(element) {
        this._parent = element;
      }
    }, {
      key: "didMount",
      get: function get() {
        return this._didMount;
      }
      /**
       * Returns the previous state. Undefined if no previous state exists
       * @returns previous state
       */

    }, {
      key: "prevState",
      get: function get() {
        return this._prevState;
      }
    }]);

    return Component;
  }(Events);

  var fragment = function fragment(_) {
    var fragment = document.createDocumentFragment();

    for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      children[_key - 1] = arguments[_key];
    }

    bindChildren(fragment, children);
    return fragment;
  };

  (function (DeStagnate) {
    DeStagnate.Component = Component;
    DeStagnate.createRef = createRef;
    DeStagnate.createElement = createElement;
    DeStagnate.createElementNS = createElementNS;
    DeStagnate.fragment = fragment;
  })(exports.DeStagnate || (exports.DeStagnate = {}));

  var DeStagnate = exports.DeStagnate;

  exports.Component = Component;
  exports.createElement = createElement;
  exports.createElementNS = createElementNS;
  exports.createRef = createRef;
  exports.default = DeStagnate;
  exports.fragment = fragment;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ByaXZhdGUvX3VybC5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudC5qcyIsIi4uLy4uL2xpYi9jcmVhdGVFbGVtZW50TlMuanMiLCIuLi8uLi9saWIvY3JlYXRlUmVmLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2Jhc2UuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fZXZlbnRzLmpzIiwiLi4vLi4vbGliL3V0aWxzLmpzIiwiLi4vLi4vbGliL2NvbXBvbmVudC5qcyIsIi4uLy4uL2xpYi9mcmFnbWVudC5qcyIsIi4uLy4uL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXJsID0gXCJodHRwczovL2x1a2UtemhhbmctMDQuZ2l0aHViLmlvL0RlU3RhZ25hdGUvZXJyb3ItY29kZXNcIjtcbmV4cG9ydCBkZWZhdWx0IHVybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOTFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExIZEVRVUYzUkN4RFFVRkJPMEZCUlRORkxHVkJRV1VzUjBGQlJ5eERRVUZCSW4wPSIsIi8qKlxuICogQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGZpbGUgc2hhcmUgZnVuY3Rpb25zIGFuZCB0eXBlcyBmb3IgY3JlYXRlRWxlbWVudCBhbmQgaXQncyB2YXJpYW50c1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL191cmxcIjtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyB0byBiaW5kIHdpdGhcbiAqIEBwYXJhbSBucyAtIGlmIG5hbWVzcGFjZSBlbGVtZW50XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIG5zID0gZmFsc2UpID0+IHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiaW5uZXJIVE1MXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5zbGljZSgwLCAyKSA9PT0gXCJvblwiKSB7IC8vIFdvcmtzIHN1Y2ggYXMgb25DbGljaywgb25BbmltYXRpb25FbmQsIGV0Yy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWwpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInJlZlwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh2YWwpID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50XCIgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFsLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dHlwZW9mIHZhbH0gaXMgbm90IGEgdmFsaWQgRGVTdGFnbmF0ZSBjaGlsZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiB0byBiaW5kIHdpdGhcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRDaGlsZHJlbiA9IChlbGVtZW50LCBjaGlsZHJlbikgPT4ge1xuICAgIGlmIChjaGlsZHJlbiAhPT0gbnVsbCAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGRyZW4udG9TdHJpbmcoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuLmRpZE1vdW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5tb3VudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4ucGFyZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucGFyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkcmVuLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMk55WldGMFpVVnNaVzFsYm5SVmRHbHNjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWpjbVZoZEdWRmJHVnRaVzUwVlhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1UwRkJVeXhGUVVGRExFMUJRVTBzWTBGQll5eERRVUZCTzBGQlJYUkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlFUdEJRWGxGZUVJN096czdPenM3UjBGUFJ6dEJRVU5JTEUxQlFVMHNRMEZCUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVOeVFpeFBRVUZuUWl4RlFVTm9RaXhMUVVGNVFpeEZRVU42UWl4RlFVRkZMRWRCUVVjc1MwRkJTeXhGUVVOT0xFVkJRVVU3U1VGRFRpeEpRVUZKTEV0QlFVc3NSVUZCUlR0UlFVTlFMRXRCUVVzc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6VkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGRGNFUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1YwRkJWeXhGUVVGRk8yOUNRVU55UWl4UFFVRlBMRU5CUVVNc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUVR0cFFrRkRja003Y1VKQlFVMHNTVUZCU1N4RlFVRkZMRVZCUVVVN2IwSkJRMWdzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkJPMmxDUVVOd1JEdHhRa0ZCVFR0dlFrRkRTQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlFUdHBRa0ZETlVNN1lVRkRTanRwUWtGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlN4RlFVRkZMRGhEUVVFNFF6dG5Ra0ZEYWtZc1NVRkJTU3hQUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMjlDUVVNMVFpeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRM0JDTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU5RTEZkQlFWY3NSVUZCYjBJc1JVRkRjRU1zUjBGQlowSXNRMEZEYmtJc1EwRkJRVHRwUWtGRFNqdGhRVU5LTzJsQ1FVRk5MRWxCUTBnc1IwRkJSeXhMUVVGTExFdEJRVXM3WjBKQlEySXNUMEZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExGRkJRVkU3WjBKQlEzaENMRk5CUVZNc1NVRkJTU3hIUVVGSExFVkJRMnhDTzJkQ1FVTkhMRWRCUVc5Q0xFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUVR0aFFVTXhRenRwUWtGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRekZDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhQUVVGUExFZEJRVWNzYTBOQlFXdERMRU5CUVVNc1EwRkJRVHRoUVVOb1JUdFRRVU5LTzB0QlEwbzdRVUZEVEN4RFFVRkRMRU5CUVVFN1FVRkZSRHM3T3pzN08wZEJUVWM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1EwRkRlRUlzVDBGQllTeEZRVU5pTEZGQlFYVkNMRVZCUTI1Q0xFVkJRVVU3U1VGRFRpeEpRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRkpMRWxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdFJRVU0zUXl4SlFVRkpMRkZCUVZFc1dVRkJXU3hMUVVGTExFVkJRVVU3V1VGRE0wSXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVzFDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUVR0VFFVTXhSVHRoUVVGTkxFbEJRMGdzVDBGQlR5eFJRVUZSTEV0QlFVc3NVVUZCVVR0WlFVTTFRaXhQUVVGUExGRkJRVkVzUzBGQlN5eFJRVUZSTEVWQlF6bENPMWxCUTBVc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVRTdVMEZEY0VVN1lVRkJUU3hKUVVGSkxGRkJRVkVzV1VGQldTeFRRVUZUTEVWQlFVVTdXVUZEZEVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlFVa3NUMEZCVHl4WlFVRlpMRTFCUVUwc1EwRkJReXhYUVVGWExFVkJRVVU3WjBKQlF6ZEVMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdaMEpCUlhaQ0xFOUJRVTA3WVVGRFZEdHBRa0ZCVFN4SlFVRkpMRU5CUVVNc1EwRkJReXhQUVVGUExGbEJRVmtzVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZPMmRDUVVOcVJDeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVWQlFVVXNRMEZCUXl4RFFVRkJPMkZCUXk5RE8xbEJSVVFzU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4TFFVRkxMRTlCUVU4c1JVRkJSVHRuUWtGRE4wSXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVUU3WVVGRE5VSTdXVUZGUkN4UlFVRlJMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVUU3VTBGRGVrSTdZVUZCVFR0WlFVTklMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVRTdVMEZEYUVNN1MwRkRTanRCUVVOTUxFTkJRVU1zUTBGQlFTSjkiLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKlxuICogQHBhcmFtIHRhZ05hbWVPckNvbXBvbmVudCAtIG5hbWUgb2YgSFRNTCBlbGVtZW50IG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgb2YgZWxlbWVudCBvciBjb21wb25lbnRcbiAqIDEuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIHRhZ25hbWUsIHByb3BzIGFyZSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIDIuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIGEgZnVuY3Rpb24sIHByb3BzIGFyZSB0aGF0IGZ1bmN0aW9ucyBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuQXJncyAtIHJlc3QgcGFyYW1ldGVyIGZvciBjaGlsZHJlblxuICogQHJldHVybnMgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50KTtcbiAgICAgICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lT3JDb21wb25lbnQocHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIEVycm9yKFwidGFnTmFtZU9yQ29tcG9uZW50IGlzIG9mIGludmFsaWQgdHlwZS5cIik7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqY21WaGRHVkZiR1Z0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenRIUVZGSE8wRkJRMGdzTWtKQlFUSkNPMEZCUXpOQ0xHbERRVUZwUXp0QlFVVnFReXhQUVVGUExFVkJSMGdzV1VGQldTeEZRVU5hTEZOQlFWTXNSMEZEV2l4TlFVRk5MQ3RDUVVFclFpeERRVUZCTzBGQmJVTjBRenM3T3pzN096czdPMGRCVTBjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzWVVGQllTeERRVWw2UWl4clFrRkhXU3hGUVVOYUxFdEJRVFpDTEVWQlF6ZENMRWRCUVVjc1VVRkJNa0k3U1VGRk9VSXNTVUZCU1N4UFFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRla01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkJPMUZCUlRGRUxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCTUVJc1EwRkJReXhEUVVGQk8xRkJSVGxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3VVVGRkwwSXNUMEZCVHl4UFFVRlBMRU5CUVVFN1MwRkRha0k3VTBGQlRTeEpRVUZKTEU5QlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0UlFVTnNSQ3hQUVVGUExHdENRVUZyUWl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdExRVU5zUkR0SlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVFN1FVRkRNVVFzUTBGQlF6dEJRVVZFTEdWQlFXVXNZVUZCWVN4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudE5TIGNyZWF0ZUVsZW1lbnQgZm9yIG5hbWVzcGFjZWQgZWxlbWVudHNcbiAqL1xuaW1wb3J0IHsgYmluZENoaWxkcmVuLCBiaW5kUHJvcHMsIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBjaGlsZCBlbGVtZW50IHRvIGRlU3RhZ25hdGVcbiAqIEBwYXJhbSBuYW1lc3BhY2VVUkkgLSBuYW1lc3BhY2UgdXJpXG4gKiBAcGFyYW0gdGFnTmFtZSAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5SZXN0IC0gcmVzdCBwYXJhbWV0ZXIgb2YgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGh0bWwgZWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudE5TID0gKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHRhZ05hbWUpO1xuICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcywgdHJ1ZSk7XG4gICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50TlM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEU1VExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpVVnNaVzFsYm5ST1V5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJTEU5QlFVOHNSVUZGU0N4WlFVRlpMRVZCUTFvc1UwRkJVeXhIUVVOYUxFMUJRVTBzSzBKQlFTdENMRU5CUVVFN1FVRkZkRU03T3pzN096czdPMGRCVVVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZETTBJc1dVRkJLMGNzUlVGREwwY3NUMEZCTUVNc1JVRkRNVU1zUzBGQmQwTXNSVUZEZUVNc1IwRkJSeXhSUVVFeVFpeEZRVU4yUWl4RlFVRkZPMGxCUTFRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3U1VGRkwwUXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVRTdTVUZGTDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0SlFVVXZRaXhQUVVGUExFOUJRVThzUTBGQlFUdEJRVU5zUWl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbExHVkJRV1VzUTBGQlFTSjkiLCIvKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmID0gKCkgPT4gKHtcbiAgICBjdXJyZW50OiBudWxsLFxufSk7XG4vKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFVtVm1MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVkpsWmk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRmxRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQmQwTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1VzVDBGQlR5eEZRVUZGTEVsQlFVazdRMEZEYUVJc1EwRkJReXhEUVVGQk8wRkJSVVk3T3p0SFFVZEhPMEZCUTBnc1pVRkJaU3hUUVVGVExFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIFByZXNldCAtIGJhc2UgZm9yIGEgY29tcG9uZW50XG4gKiBAcGFja2FnZVxuICovXG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZUVsZW1lbnROUyB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50TlNcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZVJlZiB9IGZyb20gXCIuLi9jcmVhdGVSZWZcIjtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHNcbiAqL1xuZXhwb3J0IGNsYXNzIFByZXNldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50O1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnROUyA9IF9jcmVhdGVFbGVtZW50TlM7XG4gICAgICAgIHRoaXMuY3JlYXRlUmVmID0gX2NyZWF0ZVJlZjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIGNvbXBvbmVudCBjYXRjaGVzIGVycm9yLiBEZWZhdWx0IGJlaGF2aW91ciBpcyBjb25zb2xlLmVycm9yXG4gICAgICAgICAqIEBwYXJhbSBlcnJvciAtIGVycm9yIG9iamVjdCB3aXRoIGluZm9cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaCA9IChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgYmVmb3JlIGNvbXBvbmVudCBpcyB1cGRhdGVkXG4gICAgICAgICAqIEByZXR1cm5zIHdoZXRoZXIgb3Igbm90IGNvbXBvbmVudCBzaG91bGQgdXBkYXRlL3JlLXJlbmRlclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSAoKSA9PiB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVuZGVyaW5nIEhUTUwsIG11c3QgYmUgcGFydCBvZiBleHRlbmRlZCBjbGFzc1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHJldHVybnMgaWYgcmV0dXJucyBudWxsIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IG51bGw7XG4gICAgfVxufVxuUHJlc2V0LmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcblByZXNldC5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuUHJlc2V0LmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMkpoYzJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Y0hKcGRtRjBaUzlmWW1GelpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3TzBkQlUwYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1QwRkJUeXhKUVVGSkxHTkJRV01zUlVGQlF5eE5RVUZOTEd0Q1FVRnJRaXhEUVVGQk8wRkJRekZFTEU5QlFVOHNSVUZCUXl4UFFVRlBMRWxCUVVrc1owSkJRV2RDTEVWQlFVTXNUVUZCVFN4dlFrRkJiMElzUTBGQlFUdEJRVU01UkN4UFFVRlBMRVZCUVVNc1QwRkJUeXhKUVVGSkxGVkJRVlVzUlVGQlF5eE5RVUZOTEdOQlFXTXNRMEZCUVR0QlFXbERiRVFzTUVKQlFUQkNPMEZCUXpGQ096dEhRVVZITzBGQlEwZ3NUVUZCVFN4UFFVRm5RaXhOUVVGTk8wbEJRVFZDTzFGQlVXOUNMR3RDUVVGaExFZEJRVWNzWTBGQll5eERRVUZCTzFGQlJUbENMRzlDUVVGbExFZEJRVWNzWjBKQlFXZENMRU5CUVVFN1VVRkZiRU1zWTBGQlV5eEhRVUZITEZWQlFWVXNRMEZCUVR0UlFVVjBRenM3T3p0WFFVbEhPMUZCUTBrc2MwSkJRV2xDTEVkQlFVY3NRMEZCUXl4TFFVRlpMRVZCUVZFc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVFN1VVRkZka1U3T3p0WFFVZEhPMUZCUTBrc01FSkJRWEZDTEVkQlFVY3NSMEZCV1N4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGQk8xRkJSV3hFT3pzN096czdWMEZOUnp0UlFVTmhMRmRCUVUwc1IwRkJSeXhIUVVGbExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVRTdTVUZGYmtRc1EwRkJRenM3UVVGc1F6QkNMRzlDUVVGaExFZEJRVWNzWTBGQll5eERRVUZCTzBGQlJUbENMSE5DUVVGbExFZEJRVWNzWjBKQlFXZENMRU5CUVVFN1FVRkZiRU1zWjBKQlFWTXNSMEZCUnl4VlFVRlZMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBFdmVudHNcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IFByZXNldCBhcyBCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vX2Jhc2VcIjtcbmNvbnN0IGV2ZW50TmFtZXMgPSBbXG4gICAgXCJvbkZvY3VzXCIsXG4gICAgXCJvbkJsdXJcIixcbiAgICBcIm9uRm9jdXNJblwiLFxuICAgIFwib25Gb2N1c091dFwiLFxuICAgIFwib25BbmltYXRpb25TdGFydFwiLFxuICAgIFwib25BbmltYXRpb25DYW5jZWxcIixcbiAgICBcIm9uQW5pbWF0aW9uRW5kXCIsXG4gICAgXCJvbkFuaW1hdGlvbkl0ZXJhdGlvblwiLFxuICAgIFwib25UcmFuc2l0aW9uU3RhcnRcIixcbiAgICBcIm9uVHJhbnNpdGlvbkNhbmNlbFwiLFxuICAgIFwib25UcmFuc2l0aW9uRW5kXCIsXG4gICAgXCJvblRyYW5zaXRpb25SdW5cIixcbiAgICBcIm9uQXV4Q2xpY2tcIixcbiAgICBcIm9uQ2xpY2tcIixcbiAgICBcIm9uRGJsQ2xpY2tcIixcbiAgICBcIm9uTW91c2VEb3duXCIsXG4gICAgXCJvbk1vdXNlRW50ZXJcIixcbiAgICBcIm9uTW91c2VMZWF2ZVwiLFxuICAgIFwib25Nb3VzZU1vdmVcIixcbiAgICBcIm9uTW91c2VPdmVyXCIsXG4gICAgXCJvbk1vdXNlT3V0XCIsXG4gICAgXCJvbk1vdXNlVXBcIixcbl07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzIGV2ZW50XG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMgZXZlbnRcbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sRXZlbnROYW1lID0gZXZlbnROYW1lLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksIGNhbGxiYWNrID0gdGhpc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcihodG1sRXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyVjJaVzUwY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTlsZG1WdWRITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3p0SFFWTkhPMEZCUlVnc1QwRkJUeXhGUVVGRExFMUJRVTBzU1VGQlNTeGhRVUZoTEVWQlFVTXNUVUZCVFN4VFFVRlRMRU5CUVVFN1FVRlpMME1zVFVGQlRTeFZRVUZWTEVkQlFYRkNPMGxCUTJwRExGTkJRVk03U1VGRFZDeFJRVUZSTzBsQlExSXNWMEZCVnp0SlFVTllMRmxCUVZrN1NVRkRXaXhyUWtGQmEwSTdTVUZEYkVJc2JVSkJRVzFDTzBsQlEyNUNMR2RDUVVGblFqdEpRVU5vUWl4elFrRkJjMEk3U1VGRGRFSXNiVUpCUVcxQ08wbEJRMjVDTEc5Q1FVRnZRanRKUVVOd1FpeHBRa0ZCYVVJN1NVRkRha0lzYVVKQlFXbENPMGxCUTJwQ0xGbEJRVms3U1VGRFdpeFRRVUZUTzBsQlExUXNXVUZCV1R0SlFVTmFMR0ZCUVdFN1NVRkRZaXhqUVVGak8wbEJRMlFzWTBGQll6dEpRVU5rTEdGQlFXRTdTVUZEWWl4aFFVRmhPMGxCUTJJc1dVRkJXVHRKUVVOYUxGZEJRVmM3UTBGRFpDeERRVUZCTzBGQmNVaEVMREJDUVVFd1FqdEJRVU14UWl4TlFVRk5MRTlCUVdkQ0xFMUJRVThzVTBGQlVTeGhRVUZoTzBsQlFXeEVPenRSUVVWSk96czdPMWRCU1VjN1VVRkRaMElzZFVKQlFXdENMRWRCUVVjc1EwRkJReXhQUVVGdlFpeEZRVUZSTEVWQlFVVTdXVUZEYmtVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlFUdFJRVU5xUkN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3p0WFFVbEhPMUZCUTJkQ0xIbENRVUZ2UWl4SFFVRkhMRU5CUVVNc1QwRkJiMElzUlVGQlVTeEZRVUZGTzFsQlEzSkZMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVUU3VVVGRGNFUXNRMEZCUXl4RFFVRkJPMUZCUlU4c2JVSkJRV01zUjBGQlJ5eERRVUZETEdGQlFUUkNMRVZCUVZFc1JVRkJSVHRaUVVNMVJDeExRVUZMTEUxQlFVMHNVMEZCVXl4SlFVRkpMRlZCUVZVc1JVRkJSVHRuUWtGRGFFTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkRiRVFzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRVHRuUWtGRk9VSXNTVUZCU1N4UlFVRlJMRXRCUVVzc1UwRkJVeXhKUVVGSkxGRkJRVkVzV1VGQldTeFJRVUZSTEVWQlFVVTdiMEpCUTNoRUxHRkJRV0VzUTBGQlF5eGhRVUZoTEVWQlFVVXNVVUZCT0VNc1EwRkJReXhEUVVGQk8ybENRVU12UlR0aFFVTktPMUZCUTB3c1EwRkJReXhEUVVGQk8wbEJSVXdzUTBGQlF6dERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIFV0aWxzIC0gdXRpbGl0aWVzIGZvciBEZVN0YWduYXRlXG4gKi9cbi8qKlxuICogQ2hlY2tzIGlmIHZhbDEgYW5kIHZhbDIgYXJlIGVxdWFsXG4gKiBAcGFyYW0gdmFsMSAtIHZhbHVlIHRvIGNoZWNrIGZvciBlcXVhbGl0eVxuICogQHBhcmFtIHZhbDIgLSB2YWx1ZSB0byBjb21wYXJlIGFnYWluc3QgdmFsMVxuICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aCBpc1xuICogcmVhY2hlZCwgdGhlIHR3byB2YWx1ZXMgYXJlIHNpbXBseSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIC0gbWF4IGxlbmd0aCBvZiBhcnJheSB0byBjcmF3bC4gSWYgbWF4IGxlbnRoIGlzIHJlYWNoZWQsIHR3b1xuICogYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAqIEByZXR1cm5zIGB2YWwxID09PSB2YWwyYFxuICovXG5leHBvcnQgY29uc3QgaXNFcXVhbCA9ICh2YWwxLCB2YWwyLCBtYXhEZXB0aCA9IDMsIG1heExlbmd0aCA9IDEwKSA9PiB7XG4gICAgaWYgKG1heERlcHRoID09PSAwKSB7IC8vIElmIG1heERlcHRoIHJlYWNoZWQsIGp1c3QgcnVuID09PVxuICAgICAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbDEgIT09IHR5cGVvZiB2YWwyKSB7IC8vIElmIHRoZXkgYXJlbid0IHRoZSBzYW1lIHR5cGUsIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwxIGluc3RhbmNlb2YgQXJyYXkgJiYgdmFsMiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGlmICh2YWwxLmxlbmd0aCAhPT0gdmFsMi5sZW5ndGgpIHsgLy8gSWYgYXJyYXlzIGhhdmUgZGlmZmVyZW50IGxlbmd0aHNcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsMS5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsMi5sZW5ndGggPiBtYXhMZW5ndGgpIHsgLy8gSWYgYXJyYXkgaXMgdG9vIGJpZ1xuICAgICAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbDEubGVuZ3RoOyBpbmRleCsrKSB7IC8vIEdvIHRocm91Z2ggZWFjaCBpdGVtXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtpbmRleF0sIHZhbDJbaW5kZXhdLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gVGVzdCBpZiB0d28gYXJyYXkgaXRlbXMgYXJlIGVxdWFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwxIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbDIgaW5zdGFuY2VvZiBPYmplY3QpIHsgLy8gSWYgb2JqZWN0XG4gICAgICAgIGlmICghaXNFcXVhbChPYmplY3Qua2V5cyh2YWwxKSwgT2JqZWN0LmtleXModmFsMiksIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBJZiB0aGV5IGRvbid0IGhhdmUgaGUgc2FtZSBrZXlzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsMSkpIHsgLy8gR28gdGhyb3VnaCBhbmQgdGVzdCBlYWNoIHZhbHVlXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtrZXldLCB2YWwyW2tleV0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlzRXF1YWwsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12ZFhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZGU0RzN096czdPenM3TzBkQlUwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hQUVVGUExFZEJRVWNzUTBGRGJrSXNTVUZCWVN4RlFVTmlMRWxCUVdFc1JVRkRZaXhSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVU5hTEZOQlFWTXNSMEZCUnl4RlFVRkZMRVZCUTFBc1JVRkJSVHRKUVVOVUxFbEJRVWtzVVVGQlVTeExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVRkZMRzlEUVVGdlF6dFJRVU4wUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVUU3UzBGRGRrSTdVMEZCVFN4SlFVRkpMRTlCUVU4c1NVRkJTU3hMUVVGTExFOUJRVThzU1VGQlNTeEZRVUZGTEVWQlFVVXNOa05CUVRaRE8xRkJRMjVHTEU5QlFVOHNTMEZCU3l4RFFVRkJPMHRCUTJZN1NVRkZSQ3hKUVVGSkxFbEJRVWtzV1VGQldTeExRVUZMTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1JVRkJSVHRSUVVOb1JDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEcxRFFVRnRRenRaUVVOc1JTeFBRVUZQTEV0QlFVc3NRMEZCUVR0VFFVTm1PMUZCUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExGTkJRVk1zUlVGQlJTeEZRVUZGTEhOQ1FVRnpRanRaUVVNNVJTeFBRVUZQTEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVFN1UwRkRka0k3VVVGRlJDeExRVUZMTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSU3hGUVVGRkxIVkNRVUYxUWp0WlFVTjJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNVVUZCVVN4SFFVRkhMRU5CUVVNc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJTeEZRVUZGTEc5RFFVRnZRenRuUWtGRGJrY3NUMEZCVHl4TFFVRkxMRU5CUVVFN1lVRkRaanRUUVVOS08xRkJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVRTdTMEZEWkR0VFFVRk5MRWxCUVVrc1NVRkJTU3haUVVGWkxFMUJRVTBzU1VGQlNTeEpRVUZKTEZsQlFWa3NUVUZCVFN4RlFVRkZMRVZCUVVVc1dVRkJXVHRSUVVOMlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVTlNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlEycENMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eERRVU5hTEVWQlFVVXNSVUZCUlN4clEwRkJhME03V1VGRGJrTXNUMEZCVHl4TFFVRkxMRU5CUVVFN1UwRkRaanRSUVVWRUxFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEdsRFFVRnBRenRaUVVkd1JTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVTlFMRWxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGRGFrSXNTVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVOc1FpeFJRVUZSTEVkQlFVY3NRMEZCUXl4RlFVTmFMRk5CUVZNc1EwRkRXaXhGUVVGRk8yZENRVU5ETEU5QlFVOHNTMEZCU3l4RFFVRkJPMkZCUTJZN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeERRVUZCTzB0QlEyUTdTVUZGUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVUU3UVVGRGVFSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaVHRKUVVOWUxFOUJRVTg3UTBGRFZpeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBEZVN0YWduYXRlIGNvbXBvbmVudCBjbGFzc1xuICogQHByZXNlcnZlXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1saW5lcyAqL1xuaW1wb3J0IHsgRXZlbnRzIGFzIEJhc2UgfSBmcm9tIFwiLi9wcml2YXRlL19ldmVudHNcIjtcbmltcG9ydCB1cmwgZnJvbSBcIi4vcHJpdmF0ZS9fdXJsXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQGNsYXNzZGVzYyBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjbGFzc1xuICogQG5hbWVzcGFjZVxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgY2xhc3MgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBvZiB0aGlzIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXM7IHdvcmtzIGxpa2UgUmVhY3QgUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9mIGNvbXBvbmVudC4gV29ya3Mgc2ltaWxhciBSZWFjdCBTdGF0ZVxuICAgICAgICAgKiBAdHlwZSB7dW5kZWZpbmVkIHwgT2JqZWN0LjxzdHJpbmcsIHVua25vd24+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGluaXRpYWwgc3RhdGUgd2FzIHNldCBpbiBpbml0aWFsaXplclxuICAgICAgICAgKiBEbyBub3QgdGhyb3cgZXJyb3Igd2l0aCBkaXJlY3Qgc3RhdGUgc2V0dGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoYXQgdG8gY2FsbCBiZWZvcmUgY29tcG9uZW50IHVwZGF0ZSAoc3RhdGUgbXV0YXRpb24pXG4gICAgICAgICAqIEBwYXJhbSB7UHJvcHN9IHByZXZQcm9wcyAtIHByZXZpb3VzIHByb3BzXG4gICAgICAgICAqIEBwYXJhbSBwcmV2U3RhdGUgLSBwcmV2aW91cyBzdGF0ZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID0gKHByZXZQcm9wcywgcHJldlN0YXRlKSA9PiBbcHJldlByb3BzLCBwcmV2U3RhdGVdO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2VzIGEgY29tcG9uZW50IHRvIHVwZGF0ZVxuICAgICAgICAgKiBGb2xsb3dzIHRoZSBzYW1lIGNvbXBvbmVudCB1cGRhdGluZyBwcm9jZWR1cmUgYXMgc2V0U3RhdGUgd2l0aG91dCBtb2RpZnlpbmcgc3RhdGVcbiAgICAgICAgICogQHJldHVybnMgcmV0dXJucyBlcnJvciBpZiBlcnJvciBpcyB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHRoaXMuX2V4ZWNSZW5kZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3MgaWYgdGhlIHN0YXRlIGNoYW5nZWQgZnJvbSB0aGUgcHJldmlvdXMgc3RhdGUuIENhbiBtZSBhdHRhY2hlZCB0b1xuICAgICAgICAgKiBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYFxuICAgICAgICAgKiBAcGFyYW0ga2V5cyAtIGxpc3Qgb2Yga2V5cyB0byBjcmF3bC4gSWYgbGVmdCB1bmRlZmluZWQgKGRlZmF1bHQpIHRoZW5cbiAgICAgICAgICogdXNlIGFsbCBrZXlzLiBTaG91bGQgYmUgYGtleW9mIFN0YXRlYCwgYnV0IHRoZXJlIHdlcmUgc29tZSBUeXBlc2NyaXB0XG4gICAgICAgICAqIHRyb3VibGVzLlxuICAgICAgICAgKiBAcGFyYW0gbWF4RGVwdGggLSBtYXggcmVjdXJzaW9uIGRlcHRoIHRvIGNyYXdsIGFuIG9iamVjdC4gQWZ0ZXIgbWF4IGRlcHRoXG4gICAgICAgICAqIGlzIHJlYWNoZWQsIHRoZSB0d28gdmFsdWVzIGFyZSBzaW1wbHkgY29tcGFyZWQgd2l0aCBgPT09YFxuICAgICAgICAgKiBAcGFyYW0gbWF4TGVuZ3RoIC0gbWF4IGxlbmd0aCBvZiBhcnJheSB0byBjcmF3bC4gSWYgbWF4IGxlbnRoIGlzIHJlYWNoZWQsXG4gICAgICAgICAqIHR3byBhcnJheXMgd2lsbCBzaW1wbHkgYmUgY29tcGFyZWQgd2l0aCBgPT09YFxuICAgICAgICAgKiBAcmV0dXJucyBgdmFsMSA9PT0gdmFsMmBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGVEaWRDaGFuZ2UgPSAoa2V5cywgbWF4RGVwdGggPSAzLCBtYXhMZW5ndGggPSAxNSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKGtleXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdXRpbHMuaXNFcXVhbCh0aGlzLl9zdGF0ZSwgdGhpcy5fcHJldlN0YXRlLCBtYXhEZXB0aCwgbWF4TGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge30sIHByZXZTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSB0aGlzLl9zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIHByZXZTdGF0ZVtrZXldID0gKF9hID0gdGhpcy5fcHJldlN0YXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Fba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhdXRpbHMuaXNFcXVhbChzdGF0ZSwgcHJldlN0YXRlLCBtYXhEZXB0aCwgbWF4TGVuZ3RoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgc3RhdGVcbiAgICAgICAgICogQHBhcmFtIG9iaiAtIHN0YXRlIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNldFN0YXRlID0gKG9iaikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3N0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9zdGF0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZENvbnRlbnQgPSB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZXhlY1JlbmRlcigpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZShyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nLCBtYXgtbGVuICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcGFyYW0gcGFyZW50IC0gcGFyZW50IGVsZW1lbnQgdG8gbW91bnQgd2l0aDsgb3B0aW9uYWxcbiAgICAgICAgICogQHJldHVybnMgLSByZXN1bHQgb2YgYXBwZW5kIGNoaWxkIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdW50Q29tcG9uZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsTW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmNvbXBvbmVudERpZE1vdW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5mb3JFYWNoKChjaGlsZCkgPT4gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgbW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudCA9IHRoaXMubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbm1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5tb3VudENvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnQgPSB0aGlzLnVubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiwgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZyAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBjaGlsZHJlbiBmcm9tIHRoaXMuX3BhcmVudFxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4ZWN1dGVzIG5ldyByZW5kZXJcbiAgICAgICAgICogQHJldHVybnMgcmVuZGVyZWQgY29udGVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZXhlY1JlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIGNvbXBvbmVudFxuICAgICAgICAgKiBAcGFyYW0gcmVuZGVyZWRDb250ZW50IC0gcmVuZGVyZWQgY29udGVudCBmcm9tIGV4ZWN1dGluZyB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3VwZGF0ZSA9IChyZW5kZXJlZENvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hcHBlbmRDaGlsZChyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgIChfYyA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJlbnQgaXMgbnVsbCwgZXhwZWN0ZWQgSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGdldFN0YXRlIGdldHRlciBhcyB0aGlzLnN0YXRlIGl0c2VsZiBpcyBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgY29tcG9uZW50IHN0YXRlXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgY29tcG9uZW50IHN0YXRlXG4gICAgICogV0FSTjogZG8gbm90IHVzZSB0aGlzIG1ldGhvZCB0byBtdXRhdGUgdGhlIHN0YXRlIGRpcmVjdGx5XG4gICAgICogQHBhcmFtIG9iaiAtIHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHNldCBzdGF0ZShvYmopIHtcbiAgICAgICAgaWYgKHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDEuIFNlZSAke3VybH0uYCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBvYmo7XG4gICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRQcm9wcyBnZXR0ZXIgYXMgdGhpcy5wcm9wcyBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHByb3BzXG4gICAgICovXG4gICAgZ2V0IGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBwYXJlbnQgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIHBhcmVudCBlbGVtZW50XG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldCBwYXJlbnQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHJldHVybnMgcGFyZW50XG4gICAgICovXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGRpZE1vdW50IHZhbHVlIHB1YmxpY2x5XG4gICAgICogQHJldHVybnMgaWYgbW91bnRlZFxuICAgICAqL1xuICAgIGdldCBkaWRNb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpZE1vdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcmV2aW91cyBzdGF0ZS4gVW5kZWZpbmVkIGlmIG5vIHByZXZpb3VzIHN0YXRlIGV4aXN0c1xuICAgICAqIEByZXR1cm5zIHByZXZpb3VzIHN0YXRlXG4gICAgICovXG4gICAgZ2V0IHByZXZTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXZTdGF0ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenRIUVZWSE8wRkJRMGdzT0VKQlFUaENPMEZCUlRsQ0xFOUJRVThzUlVGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZGYUVRc1QwRkJUeXhIUVVGSExFMUJRVTBzWjBKQlFXZENMRU5CUVVFN1FVRkRhRU1zVDBGQlR5eExRVUZMTEUxQlFVMHNVMEZCVXl4RFFVRkJPMEZCUlROQ096czdPenM3UjBGTlJ6dEJRVU5JTEUxQlFVMHNUMEZCWjBJc1UwRkhjRUlzVTBGQlVTeEpRVUZKTzBsQk5rSldPenM3TzA5QlNVYzdTVUZEU0N4WlFVRnZRaXhOUVVFeVFpeEZRVUZaTEV0QlFXRTdVVUZEY0VVc1MwRkJTeXhGUVVGRkxFTkJRVUU3VVVGRVowUXNWVUZCU3l4SFFVRk1MRXRCUVVzc1EwRkJVVHRSUVdoRGVFVTdPenRYUVVkSE8xRkJRMHNzVjBGQlRTeEhRVUZWTEVWQlFWY3NRMEZCUVR0UlFVVnVRenM3TzFkQlIwYzdVVUZEU3l4M1FrRkJiVUlzUjBGQlJ5eExRVUZMTEVOQlFVRTdVVUZQYmtNN08xZEJSVWM3VVVGRFN5eGpRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkJPMUZCYzBKNlFqczdPenM3VjBGTFJ6dFJRVU5KTERSQ1FVRjFRaXhIUVVGSExFTkJRemRDTEZOQlFXZENMRVZCUTJoQ0xGTkJRV2RDTEVWQlEwWXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZCTzFGQk5FVXpRenM3T3p0WFFVbEhPMUZCUTJFc1owSkJRVmNzUjBGQlJ5eEhRVUZwUWl4RlFVRkZPenRaUVVNM1F5eEpRVUZKTzJkQ1FVTkJMRTFCUVVFc1NVRkJTU3hEUVVGRExHdENRVUZyUWl3clEwRkJka0lzU1VGQlNTeEZRVUYxUWp0blFrRkZNMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHR2UWtGRE5VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRwUWtGRGFFUTdaMEpCUlVRc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVTjRRaXhyUWtGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRlZMRzlDUVVOd1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVTnFRaXhEUVVGQk8yZENRVVZFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVRTdZVUZEYmtNN1dVRkJReXhQUVVGUExFZEJRVmtzUlVGQlJTd3dRa0ZCTUVJc1EwRkJRenRuUWtGRE9VTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzJGQlEyaERPMUZCUTB3c1EwRkJReXhEUVVGQk8xRkJSVVE3T3pzN096czdPenM3TzFkQlYwYzdVVUZEWVN4dFFrRkJZeXhIUVVGSExFTkJRemRDTEVsQlFXbENMRVZCUTJwQ0xGRkJRVkVzUjBGQlJ5eERRVUZETEVWQlExb3NVMEZCVXl4SFFVRkhMRVZCUVVVc1JVRkRVQ3hGUVVGRk96dFpRVU5VTEVsQlFVa3NTVUZCU1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRuUWtGRGNFSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRMnBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUTFnc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGRFppeFJRVUZSTEVWQlExSXNVMEZCVXl4RFFVTmFMRU5CUVVFN1lVRkRTanRaUVVWRUxFMUJRVTBzUzBGQlN5eEhRVUUyUWl4RlFVRkZMRVZCUTNSRExGTkJRVk1zUjBGQk5rSXNSVUZCUlN4RFFVRkJPMWxCUlRWRExFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZPMmRDUVVOd1FpeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVrc1NVRkJTU3hEUVVGRExFMUJRVzFETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1owSkJRek5FTEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkRWQ3hKUVVGSkxFTkJRVU1zVlVGQmJVUXNNRU5CUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGRrVTdXVUZGUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRkZCUVZFc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlFUdFJRVU5vUlN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3p0WFFVbEhPMUZCUTJFc1lVRkJVU3hIUVVGSExFTkJRVU1zUjBGQmJVSXNSVUZCWjBJc1JVRkJSVHM3V1VGRE4wUXNTVUZCU1R0blFrRkRRU3hOUVVGQkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc0swTkJRWGhDTEVsQlFVa3NSVUZCZDBJN1owSkJSVFZDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlF6VkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3YVVKQlEyaEVPMmRDUVVWRUxFbEJRVWtzUTBGQlF5eFZRVUZWTEhGQ1FVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdG5Ra0ZGYkVNc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVTjRRaXhyUWtGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRlZMRzlDUVVOd1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVTnFRaXhEUVVGQk8yZENRVVZFTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUVR0blFrRkZMMElzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTzI5Q1FVTm9SQ3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0dlFrRkRjRUlzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUVR0blFrRkZaaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkJPMkZCUTJoRE8xbEJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlEzSkRMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0aFFVTm9RenRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFTEdkRlFVRm5SVHRSUVVOb1JUczdPenRYUVVsSE8xRkJRMkVzYlVKQlFXTXNSMEZCUnl4RFFVTTNRaXhOUVVGdlFpeEZRVU5TTEVWQlFVVTdPMWxCUTJRc1NVRkJTVHRuUWtGRFFTeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN2IwSkJRM1JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGQk8ybENRVU4yUWp0blFrRkZSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMmxDUVVOb1JEdG5Ra0ZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVRTdaMEpCUlM5Q0xFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1IwRkJSeXhKUVVGSkxFTkJRVUU3WjBKQlJTOUNMRTFCUVVFc1NVRkJTU3hEUVVGRExHdENRVUZyUWl3clEwRkJka0lzU1VGQlNTeEZRVUYxUWp0blFrRkZNMElzU1VGQlNTeFRRVUZUTEV0QlFVc3NTVUZCU1N4RlFVRkZPMjlDUVVOd1FpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMmxDUVVOb1JEdG5Ra0ZGUkN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGQk8yZENRVVZ5UXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlFUdG5Ra0ZEY2tJc1RVRkJRU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMQ3REUVVGMFFpeEpRVUZKTEVWQlFYTkNPMmRDUVVVeFFpeEpRVUZKTEZOQlFWTXNXVUZCV1N4TFFVRkxMRVZCUVVVN2IwSkJRelZDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4RFFVRkRPMjlDUVVWc1JDeFRRVUYxUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZCTzI5Q1FVVjRSU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGQk8ybENRVU0xUXp0blFrRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGQk8yRkJRemRETzFsQlFVTXNUMEZCVHl4SFFVRlpMRVZCUVVVc01FSkJRVEJDTEVOQlFVTTdaMEpCUXpsRExFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRoUVVOb1F6dFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3VjBGSFJ6dFJRVU5oTEZWQlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGQk8xRkJSVE5ET3pzN1YwRkhSenRSUVVOaExIRkNRVUZuUWl4SFFVRkhMRWRCUVZNc1JVRkJSVHM3V1VGRE1VTXNTVUZCU1R0blFrRkRRU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVNMVFpeFBRVUZOTzJsQ1FVTlVPMmRDUVVWRUxFMUJRVUVzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXdyUTBGQmVrSXNTVUZCU1N4RlFVRjVRanRuUWtGRk4wSXNTVUZCU1N4RFFVRkRMRzlDUVVGdlFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRuUWtGRmRrTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGQk8yZENRVU4wUWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlFUdGhRVU42UWp0WlFVRkRMRTlCUVU4c1IwRkJXU3hGUVVGRkxEQkNRVUV3UWl4RFFVRkRPMmRDUVVNNVF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8yRkJRM3BDTzFGQlJVd3NRMEZCUXl4RFFVRkJPMUZCUlVRN096dFhRVWRITzFGQlEyRXNXVUZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNRMEZCUVR0UlFVTXZReXdyUkVGQkswUTdVVUZGTDBRN096dFhRVWRITzFGQlEwc3NiMEpCUVdVc1IwRkJSeXhIUVVGVExFVkJRVVU3V1VGRGFrTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGTExGTkJRVk1zUlVGQlJUdG5Ra0ZETlVJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlFUdGhRVU5vUkR0WlFVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVTdaMEpCUXpWQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVN2IwSkJRM2hDTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVFN2FVSkJRMjVFTzJGQlEwbzdVVUZEVEN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3TzFkQlIwYzdVVUZEU3l4blFrRkJWeXhIUVVGSExFZEJRV1VzUlVGQlJUdFpRVU51UXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVUU3V1VGRmRFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVUU3VVVGRGVFSXNRMEZCUXl4RFFVRkJPMUZCUjBRN096czdWMEZKUnp0UlFVTkxMRmxCUVU4c1IwRkJSeXhEUVVGRExHVkJRVFJDTEVWQlFWRXNSVUZCUlRzN1dVRkRja1FzU1VGQlNTeGxRVUZsTEZsQlFWa3NTMEZCU3l4RlFVRkZPMmRDUVVOc1F5eExRVUZMTEUxQlFVMHNUMEZCVHl4SlFVRkpMR1ZCUVdVc1JVRkJSVHR2UWtGRGJrTXNUVUZCUVN4SlFVRkpMRU5CUVVNc1QwRkJUeXd3UTBGQlJTeFhRVUZYTEVOQlFVTXNUMEZCVHl4RlFVRkRPMmxDUVVOeVF6dGhRVU5LTzJsQ1FVRk5MRWxCUVVrc1pVRkJaU3hGUVVGRk8yZENRVU40UWl4TlFVRkJMRWxCUVVrc1EwRkJReXhQUVVGUExEQkRRVUZGTEZkQlFWY3NRMEZCUXl4bFFVRmxMRVZCUVVNN1lVRkROME03V1VGRlJDeEpRVUZKTEdWQlFXVXNSVUZCUlR0blFrRkRha0lzVFVGQlFTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xDdERRVUYyUWl4SlFVRkpMRVZCUVhWQ08yRkJRemxDTzFGQlEwd3NRMEZCUXl4RFFVRkJPMUZCUlU4c2FVSkJRVmtzUjBGQlJ5eERRVUZETEVkQlFWa3NSVUZCVXl4RlFVRkZPMWxCUXpORExFbEJRVWtzUjBGQlJ5eFpRVUZaTEV0QlFVc3NSVUZCUlR0blFrRkRkRUlzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzJkQ1FVVXpRaXhQUVVGUExFZEJRVmtzUTBGQlFUdGhRVU4wUWp0WlFVVkVMRTFCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGQk8xbEJSWEJETEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUVR0WlFVVTNRaXhQUVVGUExFdEJRVXNzUTBGQlFUdFJRVU5vUWl4RFFVRkRMRU5CUVVFN1VVRjBWVWNzU1VGQlNTeE5RVUZOTEV0QlFVc3NTVUZCU1N4RlFVRkZPMWxCUTJwQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNiVVJCUVcxRUxFTkJRVU1zUTBGQlFUdFRRVU4yUlR0UlFVVkVMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVFVGQlRTeERRVUZCTzBsQlEzcENMRU5CUVVNN1NVRmhSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRlhMRkZCUVZFN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVRTdTVUZEY2tJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVdNc1MwRkJTenRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUVR0SlFVTjBRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSUxFbEJRV01zUzBGQlN5eERRVUZGTEVkQlFWVTdVVUZETTBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVN1dVRkRNVUlzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVOc1FpeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZETVVNc1EwRkJRVHRaUVVORUxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1UwRkRja0k3WVVGQlRUdFpRVU5JTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhEUVVGQk8xbEJRMnBDTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUjBGQlJ5eEpRVUZKTEVOQlFVRTdVMEZEYkVNN1NVRkRUQ3hEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBnc1NVRkJWeXhSUVVGUk8xRkJRMllzVDBGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkJPMGxCUTNKQ0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGdzU1VGQlZ5eE5RVUZOTEVOQlFVVXNUMEZCWjBNN1VVRkRMME1zU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVFN1NVRkRNVUlzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVFVGQlRUdFJRVU5pTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJRVHRKUVVOMlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQlZ5eFJRVUZSTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGQk8wbEJRM3BDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZYTEZOQlFWTTdVVUZEYUVJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZCTzBsQlF6RkNMRU5CUVVNN1EwRTRUMG83UVVGRlJDeGxRVUZsTEZOQlFWTXNRMEZCUVNKOSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuZXhwb3J0IGNvbnN0IGZyYWdtZW50ID0gKF8sIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgYmluZENoaWxkcmVuKGZyYWdtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5KaFoyMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlpuSmhaMjFsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkRTQ3d5UWtGQk1rSTdRVUZETTBJc2FVTkJRV2xETzBGQlJXcERMRTlCUVU4c1JVRkZTQ3haUVVGWkxFZEJRMllzVFVGQlRTd3JRa0ZCSzBJc1EwRkJRVHRCUVVWMFF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkRjRUlzUTBGQlZTeEZRVU5XTEVkQlFVY3NVVUZCTWtJc1JVRkRaQ3hGUVVGRk8wbEJRMnhDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4RFFVRkJPMGxCUld4RUxGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVFN1NVRkZhRU1zVDBGQlR5eFJRVUZSTEVOQlFVRTdRVUZEYmtJc1EwRkJReXhEUVVGQk8wRkJSVVFzWlVGQlpTeFJRVUZSTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIG1haW4gZmlsZSBmb3IgZGVzdGFnbmF0ZVxuICogQHByZXNlcnZlXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCAqIGFzIF9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlUmVmIGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZUVsZW1lbnROUyBmcm9tIFwiLi9jcmVhdGVFbGVtZW50TlNcIjtcbmltcG9ydCAqIGFzIF9GcmFnbWVudCBmcm9tIFwiLi9mcmFnbWVudFwiO1xuZXhwb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XG5leHBvcnQgeyBjcmVhdGVSZWYgfSBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50TlNcIjtcbmV4cG9ydCB7IGZyYWdtZW50IH0gZnJvbSBcIi4vZnJhZ21lbnRcIjtcbmV4cG9ydCB2YXIgRGVTdGFnbmF0ZTtcbihmdW5jdGlvbiAoRGVTdGFnbmF0ZSkge1xuICAgIERlU3RhZ25hdGUuQ29tcG9uZW50ID0gX0NvbXBvbmVudC5Db21wb25lbnQ7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVSZWYgPSBfQ3JlYXRlUmVmLmNyZWF0ZVJlZjtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnQgPSBfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlRWxlbWVudE5TID0gX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlM7XG4gICAgRGVTdGFnbmF0ZS5mcmFnbWVudCA9IF9GcmFnbWVudC5mcmFnbWVudDtcbn0pKERlU3RhZ25hdGUgfHwgKERlU3RhZ25hdGUgPSB7fSkpO1xuZXhwb3J0IGRlZmF1bHQgRGVTdGFnbmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdSMEZWUnp0QlFVTklMREpDUVVFeVFqdEJRVU16UWl4cFEwRkJhVU03UVVGRmFrTXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMR05CUVdNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUVR0QlFVTnFSQ3hQUVVGUExFdEJRVXNzWjBKQlFXZENMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEY2tRc1QwRkJUeXhMUVVGTExGTkJRVk1zVFVGQlRTeFpRVUZaTEVOQlFVRTdRVUZGZGtNc1QwRkJUeXhGUVVGRExGTkJRVk1zUlVGQlF5eE5RVUZOTEdGQlFXRXNRMEZCUVR0QlFVTnlReXhQUVVGUExFVkJRVTBzVTBGQlV5eEZRVUZETEUxQlFVMHNZVUZCWVN4RFFVRkJPMEZCUXpGRExFOUJRVThzUlVGQlF5eGhRVUZoTEVWQlFVTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU0zUXl4UFFVRlBMRVZCUVVNc1pVRkJaU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkRha1FzVDBGQlR5eEZRVUZETEZGQlFWRXNSVUZCUXl4TlFVRk5MRmxCUVZrc1EwRkJRVHRCUVVWdVF5eE5RVUZOTEV0QlFWY3NWVUZCVlN4RFFVOHhRanRCUVZCRUxGZEJRV2xDTEZWQlFWVTdTVUZEVkN4dlFrRkJVeXhIUVVGSkxGVkJRVlVzVlVGQlpDeERRVUZqTzBsQlEzWkNMRzlDUVVGVExFZEJRVWtzVlVGQlZTeFZRVUZrTEVOQlFXTTdTVUZGZGtJc2QwSkJRV0VzUjBGQlNTeGpRVUZqTEdOQlFXeENMRU5CUVd0Q08wbEJReTlDTERCQ1FVRmxMRWRCUVVrc1owSkJRV2RDTEdkQ1FVRndRaXhEUVVGdlFqdEpRVU51UXl4dFFrRkJVU3hIUVVGSkxGTkJRVk1zVTBGQllpeERRVUZoTzBGQlEzWkRMRU5CUVVNc1JVRlFaMElzVlVGQlZTeExRVUZXTEZWQlFWVXNVVUZQTVVJN1FVRkZSQ3hsUVVGbExGVkJRVlVzUTBGQlFTSjkiXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnQiLCJfY3JlYXRlRWxlbWVudE5TIiwiX2NyZWF0ZVJlZiIsIkJhc2VDb21wb25lbnQiLCJCYXNlIiwiX0NvbXBvbmVudC5Db21wb25lbnQiLCJfQ3JlYXRlUmVmLmNyZWF0ZVJlZiIsIl9DcmVhdGVFbGVtZW50LmNyZWF0ZUVsZW1lbnQiLCJfQ3JlYXRlRWxlbWVudE5TLmNyZWF0ZUVsZW1lbnROUyIsIl9GcmFnbWVudC5mcmFnbWVudCIsIkRlU3RhZ25hdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBTyxJQUFNLEdBQUcsR0FBRyx3REFBWjs7RUNxRlA7Ozs7Ozs7RUFPRzs7RUFDSSxJQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVksQ0FDckIsT0FEcUIsRUFFckIsS0FGcUIsRUFJZjtFQUFBLE1BRE4sRUFDTSx1RUFERCxLQUNDOztFQUNOLE1BQUksS0FBSixFQUFXO0VBQ1AsdUNBQXlCLE1BQU0sQ0FBQyxPQUFQLENBQWUs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
