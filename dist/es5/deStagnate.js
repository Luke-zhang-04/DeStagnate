/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
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
      _this._state = {};
      _this._didSetInitialState = false;
      _this._didMount = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ByaXZhdGUvX3VybC5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudC5qcyIsIi4uLy4uL2xpYi9jcmVhdGVFbGVtZW50TlMuanMiLCIuLi8uLi9saWIvY3JlYXRlUmVmLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2Jhc2UuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fZXZlbnRzLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvdXRpbHMuanMiLCIuLi8uLi9saWIvY29tcG9uZW50LmpzIiwiLi4vLi4vbGliL2ZyYWdtZW50LmpzIiwiLi4vLi4vbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1cmwgPSBcImh0dHBzOi8vbHVrZS16aGFuZy0wNC5naXRodWIuaW8vRGVTdGFnbmF0ZS9lcnJvci1jb2Rlc1wiO1xuZXhwb3J0IGRlZmF1bHQgdXJsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDNWeWJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5MWNtd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEhkRVFVRjNSQ3hEUVVGQk8wRkJSVE5GTEdWQlFXVXNSMEZCUnl4RFFVRkJJbjA9IiwiLyoqXG4gKiBDb21wb25lbnRcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZmlsZSBzaGFyZSBmdW5jdGlvbnMgYW5kIHR5cGVzIGZvciBjcmVhdGVFbGVtZW50IGFuZCBpdCdzIHZhcmlhbnRzXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRcIjtcbmltcG9ydCB1cmwgZnJvbSBcIi4vX3VybFwiO1xuLyoqXG4gKiBCaW5kcyBjaGlsZHJlbiB0byBlbGVtZW50XG4gKiBAcGFja2FnZVxuICogQHBhcmFtIGVsZW1lbnQgLSBlbGVtZW50IHRvIGJpbmRcbiAqIEBwYXJhbSBwcm9wcyAtIHByb3BzIHRvIGJpbmQgd2l0aFxuICogQHBhcmFtIG5zIC0gaWYgbmFtZXNwYWNlIGVsZW1lbnRcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRQcm9wcyA9IChlbGVtZW50LCBwcm9wcywgbnMgPSBmYWxzZSkgPT4ge1xuICAgIGlmIChwcm9wcykge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXMocHJvcHMpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJpbm5lckhUTUxcIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IHZhbC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChucykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZU5TKG51bGwsIGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWwudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5LnNsaWNlKDAsIDIpID09PSBcIm9uXCIpIHsgLy8gV29ya3Mgc3VjaCBhcyBvbkNsaWNrLCBvbkFuaW1hdGlvbkVuZCwgZXRjLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHZhbCkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoa2V5LnNsaWNlKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKSwgdmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IFwicmVmXCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgKHZhbCkgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgICAgICBcImN1cnJlbnRcIiBpbiB2YWwpIHtcbiAgICAgICAgICAgICAgICB2YWwuY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHt0eXBlb2YgdmFsfSBpcyBub3QgYSB2YWxpZCBEZVN0YWduYXRlIGNoaWxkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBCaW5kcyBjaGlsZHJlbiB0byBlbGVtZW50XG4gKiBAcGFja2FnZVxuICogQHBhcmFtIGVsZW1lbnQgLSBlbGVtZW50IHRvIGJpbmRcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIHRvIGJpbmQgd2l0aFxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgY29uc3QgYmluZENoaWxkcmVuID0gKGVsZW1lbnQsIGNoaWxkcmVuKSA9PiB7XG4gICAgaWYgKGNoaWxkcmVuICE9PSBudWxsICYmIGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBiaW5kQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZHJlbi50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4uZGlkTW91bnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLm1vdW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5wYXJlbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyTnlaV0YwWlVWc1pXMWxiblJWZEdsc2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5amNtVmhkR1ZGYkdWdFpXNTBWWFJwYkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVTBGQlV5eEZRVUZETEUxQlFVMHNZMEZCWXl4RFFVRkJPMEZCUlhSRExFOUJRVThzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUVR0QlFYbEZlRUk3T3pzN096czdSMEZQUnp0QlFVTklMRTFCUVUwc1EwRkJReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVU55UWl4UFFVRm5RaXhGUVVOb1FpeExRVUY1UWl4RlFVTjZRaXhGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVU5PTEVWQlFVVTdTVUZEVGl4SlFVRkpMRXRCUVVzc1JVRkJSVHRSUVVOUUxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpWRExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZEY0VRc1NVRkJTU3hIUVVGSExFdEJRVXNzVjBGQlZ5eEZRVUZGTzI5Q1FVTnlRaXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRVHRwUWtGRGNrTTdjVUpCUVUwc1NVRkJTU3hGUVVGRkxFVkJRVVU3YjBKQlExZ3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGQk8ybENRVU53UkR0eFFrRkJUVHR2UWtGRFNDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUVR0cFFrRkROVU03WVVGRFNqdHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSU3hGUVVGRkxEaERRVUU0UXp0blFrRkRha1lzU1VGQlNTeFBRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8yOUNRVU0xUWl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlEzQkNMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFMRmRCUVZjc1JVRkJiMElzUlVGRGNFTXNSMEZCWjBJc1EwRkRia0lzUTBGQlFUdHBRa0ZEU2p0aFFVTktPMmxDUVVGTkxFbEJRMGdzUjBGQlJ5eExRVUZMTEV0QlFVczdaMEpCUTJJc1QwRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEZGQlFWRTdaMEpCUTNoQ0xGTkJRVk1zU1VGQlNTeEhRVUZITEVWQlEyeENPMmRDUVVOSExFZEJRVzlDTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNeFF6dHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlF6RkNMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVkQlFVY3NhME5CUVd0RExFTkJRVU1zUTBGQlFUdGhRVU5vUlR0VFFVTktPMHRCUTBvN1FVRkRUQ3hEUVVGRExFTkJRVUU3UVVGRlJEczdPenM3TzBkQlRVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3haUVVGWkxFZEJRVWNzUTBGRGVFSXNUMEZCWVN4RlFVTmlMRkZCUVhWQ0xFVkJRMjVDTEVWQlFVVTdTVUZEVGl4SlFVRkpMRkZCUVZFc1MwRkJTeXhKUVVGSkxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTTNReXhKUVVGSkxGRkJRVkVzV1VGQldTeExRVUZMTEVWQlFVVTdXVUZETTBJc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFXMUNMRVZCUVVVc1JVRkJSU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRVHRUUVVNeFJUdGhRVUZOTEVsQlEwZ3NUMEZCVHl4UlFVRlJMRXRCUVVzc1VVRkJVVHRaUVVNMVFpeFBRVUZQTEZGQlFWRXNTMEZCU3l4UlFVRlJMRVZCUXpsQ08xbEJRMFVzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVFN1UwRkRjRVU3WVVGQlRTeEpRVUZKTEZGQlFWRXNXVUZCV1N4VFFVRlRMRVZCUVVVN1dVRkRkRU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRWxCUVVrc1QwRkJUeXhaUVVGWkxFMUJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVTdaMEpCUXpkRUxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVFN1owSkJSWFpDTEU5QlFVMDdZVUZEVkR0cFFrRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZQTEZsQlFWa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8yZENRVU5xUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGQk8yRkJReTlETzFsQlJVUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hMUVVGTExFOUJRVThzUlVGQlJUdG5Ra0ZETjBJc1VVRkJVU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVRTdZVUZETlVJN1dVRkZSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVRTdVMEZEZWtJN1lVRkJUVHRaUVVOSUxFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVFN1UwRkRhRU03UzBGRFNqdEJRVU5NTEVOQlFVTXNRMEZCUVNKOSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuLCBiaW5kUHJvcHMsIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqXG4gKiBAcGFyYW0gdGFnTmFtZU9yQ29tcG9uZW50IC0gbmFtZSBvZiBIVE1MIGVsZW1lbnQgb3IgZnVuY3Rpb24gY29tcG9uZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyBvZiBlbGVtZW50IG9yIGNvbXBvbmVudFxuICogMS4gSWYgYHRhZ05hbWVPckNvbXBvbmVudGAgaXMgdGFnbmFtZSwgcHJvcHMgYXJlIGVsZW1lbnQgcHJvcGVydGllcywgc3VjaCBhcyBjbGFzcywgaW5uZXJIVE1MLCBpZCwgc3R5bGUsIGV0Y1xuICogMi4gSWYgYHRhZ05hbWVPckNvbXBvbmVudGAgaXMgYSBmdW5jdGlvbiwgcHJvcHMgYXJlIHRoYXQgZnVuY3Rpb25zIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5BcmdzIC0gcmVzdCBwYXJhbWV0ZXIgZm9yIGNoaWxkcmVuXG4gKiBAcmV0dXJucyBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWVPckNvbXBvbmVudCwgcHJvcHMsIC4uLmNoaWxkcmVuKSB7XG4gICAgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQpO1xuICAgICAgICBiaW5kUHJvcHMoZWxlbWVudCwgcHJvcHMpO1xuICAgICAgICBiaW5kQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mICh0YWdOYW1lT3JDb21wb25lbnQpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWVPckNvbXBvbmVudChwcm9wcywgY2hpbGRyZW4pO1xuICAgIH1cbiAgICByZXR1cm4gRXJyb3IoXCJ0YWdOYW1lT3JDb21wb25lbnQgaXMgb2YgaW52YWxpZCB0eXBlLlwiKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OWpjbVZoZEdWRmJHVnRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096dEhRVkZITzBGQlEwZ3NNa0pCUVRKQ08wRkJRek5DTEdsRFFVRnBRenRCUVVWcVF5eFBRVUZQTEVWQlIwZ3NXVUZCV1N4RlFVTmFMRk5CUVZNc1IwRkRXaXhOUVVGTkxDdENRVUVyUWl4RFFVRkJPMEZCYlVOMFF6czdPenM3T3pzN08wZEJVMGM3UVVGRFNDeE5RVUZOTEZWQlFWVXNZVUZCWVN4RFFVbDZRaXhyUWtGSFdTeEZRVU5hTEV0QlFUWkNMRVZCUXpkQ0xFZEJRVWNzVVVGQk1rSTdTVUZGT1VJc1NVRkJTU3hQUVVGTkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1MwRkJTeXhSUVVGUkxFVkJRVVU3VVVGRGVrTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGQk8xRkJSVEZFTEZOQlFWTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJNRUlzUTBGQlF5eERRVUZCTzFGQlJUbERMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVRTdVVUZGTDBJc1QwRkJUeXhQUVVGUExFTkJRVUU3UzBGRGFrSTdVMEZCVFN4SlFVRkpMRTlCUVUwc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4TFFVRkxMRlZCUVZVc1JVRkJSVHRSUVVOc1JDeFBRVUZQTEd0Q1FVRnJRaXhEUVVGRExFdEJRVlVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0TFFVTnNSRHRKUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVUU3UVVGRE1VUXNRMEZCUXp0QlFVVkVMR1ZCUVdVc1lVRkJZU3hEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50TlMgY3JlYXRlRWxlbWVudCBmb3IgbmFtZXNwYWNlZCBlbGVtZW50c1xuICovXG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcywgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbi8qKlxuICogQ3JlYXRlcyBhIGNoaWxkIGVsZW1lbnQgdG8gZGVTdGFnbmF0ZVxuICogQHBhcmFtIG5hbWVzcGFjZVVSSSAtIG5hbWVzcGFjZSB1cmlcbiAqIEBwYXJhbSB0YWdOYW1lIC0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSBwcm9wcyAtIGVsZW1lbnQgcHJvcGVydGllcywgc3VjaCBhcyBjbGFzcywgaW5uZXJIVE1MLCBpZCwgc3R5bGUsIGV0Y1xuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50LiBDYW4gYmUgbm90aGluZywgbnVtYmVyIChjb252ZXJ0ZWQgdG8gc3RyaW5nKSwgc3RyaW5nICh0ZXh0KSwgb3IgYW5vdGhlciBlbGVtZW50LiBBbiBhcnJheSBvZiBhbnkgb2YgdGhlc2Ugd2lsbCBjcmVhdGUgbXVsdGlwbGUgY2hpbGRyZW5cbiAqIEBwYXJhbSBjaGlsZHJlblJlc3QgLSByZXN0IHBhcmFtZXRlciBvZiBjaGlsZHJlblxuICogQHJldHVybnMgaHRtbCBlbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50TlMgPSAobmFtZXNwYWNlVVJJLCB0YWdOYW1lLCBwcm9wcywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSk7XG4gICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzLCB0cnVlKTtcbiAgICBiaW5kQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnROUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSmxZWFJsUld4bGJXVnVkRTVUTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnlaV0YwWlVWc1pXMWxiblJPVXk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdSMEZSUnp0QlFVVklMRTlCUVU4c1JVRkZTQ3haUVVGWkxFVkJRMW9zVTBGQlV5eEhRVU5hTEUxQlFVMHNLMEpCUVN0Q0xFTkJRVUU3UVVGRmRFTTdPenM3T3pzN08wZEJVVWM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4bFFVRmxMRWRCUVVjc1EwRkRNMElzV1VGQkswY3NSVUZETDBjc1QwRkJNRU1zUlVGRE1VTXNTMEZCZDBNc1JVRkRlRU1zUjBGQlJ5eFJRVUV5UWl4RlFVTjJRaXhGUVVGRk8wbEJRMVFzVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhaUVVGWkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVRTdTVUZGTDBRc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVFN1NVRkZMMElzV1VGQldTeERRVUZETEU5QlFVOHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRVHRKUVVVdlFpeFBRVUZQTEU5QlFVOHNRMEZCUVR0QlFVTnNRaXhEUVVGRExFTkJRVUU3UVVGRlJDeGxRVUZsTEdWQlFXVXNRMEZCUVNKOSIsIi8qKlxuICogQ3JlYXRlcyBhIHJlZmVyZW5jZSBmb3IgYSBuZXN0ZWQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBlbXB0eSByZWYgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVSZWYgPSAoKSA9PiAoe1xuICAgIGN1cnJlbnQ6IG51bGwsXG59KTtcbi8qKlxuICogQ3JlYXRlcyBhIHJlZmVyZW5jZSBmb3IgYSBuZXN0ZWQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBlbXB0eSByZWYgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSmxZWFJsVW1WbUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpWSmxaaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGbFFUczdPMGRCUjBjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCZDBNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGFrVXNUMEZCVHl4RlFVRkZMRWxCUVVrN1EwRkRhRUlzUTBGQlF5eERRVUZCTzBGQlJVWTdPenRIUVVkSE8wRkJRMGdzWlVGQlpTeFRRVUZUTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgUHJlc2V0IC0gYmFzZSBmb3IgYSBjb21wb25lbnRcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudE5TIH0gZnJvbSBcIi4uL2NyZWF0ZUVsZW1lbnROU1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlUmVmIH0gZnJvbSBcIi4uL2NyZWF0ZVJlZlwiO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50c1xuICovXG5leHBvcnQgY2xhc3MgUHJlc2V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcbiAgICAgICAgdGhpcy5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gY29tcG9uZW50IGNhdGNoZXMgZXJyb3IuIERlZmF1bHQgYmVoYXZpb3VyIGlzIGNvbnNvbGUuZXJyb3JcbiAgICAgICAgICogQHBhcmFtIGVycm9yIC0gZXJyb3Igb2JqZWN0IHdpdGggaW5mb1xuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoID0gKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCBiZWZvcmUgY29tcG9uZW50IGlzIHVwZGF0ZWRcbiAgICAgICAgICogQHJldHVybnMgd2hldGhlciBvciBub3QgY29tcG9uZW50IHNob3VsZCB1cGRhdGUvcmUtcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9ICgpID0+IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXJpbmcgSFRNTCwgbXVzdCBiZSBwYXJ0IG9mIGV4dGVuZGVkIGNsYXNzXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcmV0dXJucyBpZiByZXR1cm5zIG51bGwgZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gbnVsbDtcbiAgICB9XG59XG5QcmVzZXQuY3JlYXRlRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50O1xuUHJlc2V0LmNyZWF0ZUVsZW1lbnROUyA9IF9jcmVhdGVFbGVtZW50TlM7XG5QcmVzZXQuY3JlYXRlUmVmID0gX2NyZWF0ZVJlZjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgySmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjSEpwZG1GMFpTOWZZbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPMGRCVTBjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEdOQlFXTXNSVUZCUXl4TlFVRk5MR3RDUVVGclFpeERRVUZCTzBGQlF6RkVMRTlCUVU4c1JVRkJReXhQUVVGUExFbEJRVWtzWjBKQlFXZENMRVZCUVVNc1RVRkJUU3h2UWtGQmIwSXNRMEZCUVR0QlFVTTVSQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEZWQlFWVXNSVUZCUXl4TlFVRk5MR05CUVdNc1EwRkJRVHRCUVdsRGJFUXNNRUpCUVRCQ08wRkJRekZDT3p0SFFVVkhPMEZCUTBnc1RVRkJUU3hQUVVGblFpeE5RVUZOTzBsQlFUVkNPMUZCVVc5Q0xHdENRVUZoTEVkQlFVY3NZMEZCWXl4RFFVRkJPMUZCUlRsQ0xHOUNRVUZsTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVUU3VVVGRmJFTXNZMEZCVXl4SFFVRkhMRlZCUVZVc1EwRkJRVHRSUVVWMFF6czdPenRYUVVsSE8xRkJRMGtzYzBKQlFXbENMRWRCUVVjc1EwRkJReXhMUVVGWkxFVkJRVkVzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRmRrVTdPenRYUVVkSE8xRkJRMGtzTUVKQlFYRkNMRWRCUVVjc1IwRkJXU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZCTzFGQlJXeEVPenM3T3pzN1YwRk5SenRSUVVOaExGZEJRVTBzUjBGQlJ5eEhRVUZsTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVFN1NVRkZia1FzUTBGQlF6czdRVUZzUXpCQ0xHOUNRVUZoTEVkQlFVY3NZMEZCWXl4RFFVRkJPMEZCUlRsQ0xITkNRVUZsTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVUU3UVVGRmJFTXNaMEpCUVZNc1IwRkJSeXhWUVVGVkxFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIEV2ZW50c1xuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgUHJlc2V0IGFzIEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9fYmFzZVwiO1xuY29uc3QgZXZlbnROYW1lcyA9IFtcbiAgICBcIm9uRm9jdXNcIixcbiAgICBcIm9uQmx1clwiLFxuICAgIFwib25Gb2N1c0luXCIsXG4gICAgXCJvbkZvY3VzT3V0XCIsXG4gICAgXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG4gICAgXCJvbkFuaW1hdGlvbkNhbmNlbFwiLFxuICAgIFwib25BbmltYXRpb25FbmRcIixcbiAgICBcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIsXG4gICAgXCJvblRyYW5zaXRpb25TdGFydFwiLFxuICAgIFwib25UcmFuc2l0aW9uQ2FuY2VsXCIsXG4gICAgXCJvblRyYW5zaXRpb25FbmRcIixcbiAgICBcIm9uVHJhbnNpdGlvblJ1blwiLFxuICAgIFwib25BdXhDbGlja1wiLFxuICAgIFwib25DbGlja1wiLFxuICAgIFwib25EYmxDbGlja1wiLFxuICAgIFwib25Nb3VzZURvd25cIixcbiAgICBcIm9uTW91c2VFbnRlclwiLFxuICAgIFwib25Nb3VzZUxlYXZlXCIsXG4gICAgXCJvbk1vdXNlTW92ZVwiLFxuICAgIFwib25Nb3VzZU92ZXJcIixcbiAgICBcIm9uTW91c2VPdXRcIixcbiAgICBcIm9uTW91c2VVcFwiLFxuXTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY2xhc3MgRXZlbnRzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMgZXZlbnRcbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIGV2ZW50IGxpc3RlbmVycyBldmVudFxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSAoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxFdmVudE5hbWUgPSBldmVudE5hbWUuc2xpY2UoMikudG9Mb3dlckNhc2UoKSwgY2FsbGJhY2sgPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyKGh0bWxFdmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJWMlpXNTBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWxkbVZ1ZEhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenRIUVZOSE8wRkJSVWdzVDBGQlR5eEZRVUZETEUxQlFVMHNTVUZCU1N4aFFVRmhMRVZCUVVNc1RVRkJUU3hUUVVGVExFTkJRVUU3UVVGWkwwTXNUVUZCVFN4VlFVRlZMRWRCUVhGQ08wbEJRMnBETEZOQlFWTTdTVUZEVkN4UlFVRlJPMGxCUTFJc1YwRkJWenRKUVVOWUxGbEJRVms3U1VGRFdpeHJRa0ZCYTBJN1NVRkRiRUlzYlVKQlFXMUNPMGxCUTI1Q0xHZENRVUZuUWp0SlFVTm9RaXh6UWtGQmMwSTdTVUZEZEVJc2JVSkJRVzFDTzBsQlEyNUNMRzlDUVVGdlFqdEpRVU53UWl4cFFrRkJhVUk3U1VGRGFrSXNhVUpCUVdsQ08wbEJRMnBDTEZsQlFWazdTVUZEV2l4VFFVRlRPMGxCUTFRc1dVRkJXVHRKUVVOYUxHRkJRV0U3U1VGRFlpeGpRVUZqTzBsQlEyUXNZMEZCWXp0SlFVTmtMR0ZCUVdFN1NVRkRZaXhoUVVGaE8wbEJRMklzV1VGQldUdEpRVU5hTEZkQlFWYzdRMEZEWkN4RFFVRkJPMEZCY1VoRUxEQkNRVUV3UWp0QlFVTXhRaXhOUVVGTkxFOUJRV2RDTEUxQlFVOHNVMEZCVVN4aFFVRmhPMGxCUVd4RU96dFJRVVZKT3pzN08xZEJTVWM3VVVGRFowSXNkVUpCUVd0Q0xFZEJRVWNzUTBGQlF5eFBRVUZ2UWl4RlFVRlJMRVZCUVVVN1dVRkRia1VzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUVR0UlFVTnFSQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPenRYUVVsSE8xRkJRMmRDTEhsQ1FVRnZRaXhIUVVGSExFTkJRVU1zVDBGQmIwSXNSVUZCVVN4RlFVRkZPMWxCUTNKRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCVHl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVRTdVVUZEY0VRc1EwRkJReXhEUVVGQk8xRkJSVThzYlVKQlFXTXNSMEZCUnl4RFFVRkRMR0ZCUVRSQ0xFVkJRVkVzUlVGQlJUdFpRVU0xUkN4TFFVRkxMRTFCUVUwc1UwRkJVeXhKUVVGSkxGVkJRVlVzUlVGQlJUdG5Ra0ZEYUVNc1RVRkJUU3hoUVVGaExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGRGJFUXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlFUdG5Ra0ZGT1VJc1NVRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV5eEpRVUZKTEZGQlFWRXNXVUZCV1N4UlFVRlJMRVZCUVVVN2IwSkJRM2hFTEdGQlFXRXNRMEZCUXl4aFFVRmhMRVZCUVVVc1VVRkJPRU1zUTBGQlF5eERRVUZCTzJsQ1FVTXZSVHRoUVVOS08xRkJRMHdzUTBGQlF5eERRVUZCTzBsQlJVd3NRMEZCUXp0RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgVXRpbHMgLSB1dGlsaXRpZXMgZm9yIERlU3RhZ25hdGVcbiAqL1xuLyoqXG4gKiBDaGVja3MgaWYgdmFsMSBhbmQgdmFsMiBhcmUgZXF1YWxcbiAqIEBwYXJhbSB2YWwxIC0gdmFsdWUgdG8gY2hlY2sgZm9yIGVxdWFsaXR5XG4gKiBAcGFyYW0gdmFsMiAtIHZhbHVlIHRvIGNvbXBhcmUgYWdhaW5zdCB2YWwxXG4gKiBAcGFyYW0gbWF4RGVwdGggLSBtYXggcmVjdXJzaW9uIGRlcHRoIHRvIGNyYXdsIGFuIG9iamVjdC4gQWZ0ZXIgbWF4IGRlcHRoIGlzXG4gKiByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAqIEBwYXJhbSBtYXhMZW5ndGggLSBtYXggbGVuZ3RoIG9mIGFycmF5IHRvIGNyYXdsLiBJZiBtYXggbGVudGggaXMgcmVhY2hlZCwgdHdvXG4gKiBhcnJheXMgd2lsbCBzaW1wbHkgYmUgY29tcGFyZWQgd2l0aCBgPT09YFxuICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gKi9cbmV4cG9ydCBjb25zdCBpc0VxdWFsID0gKHZhbDEsIHZhbDIsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTApID0+IHtcbiAgICBpZiAobWF4RGVwdGggPT09IDApIHsgLy8gSWYgbWF4RGVwdGggcmVhY2hlZCwganVzdCBydW4gPT09XG4gICAgICAgIHJldHVybiB2YWwxID09PSB2YWwyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsMSAhPT0gdHlwZW9mIHZhbDIpIHsgLy8gSWYgdGhleSBhcmVuJ3QgdGhlIHNhbWUgdHlwZSwgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbDEgaW5zdGFuY2VvZiBBcnJheSAmJiB2YWwyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgaWYgKHZhbDEubGVuZ3RoICE9PSB2YWwyLmxlbmd0aCkgeyAvLyBJZiBhcnJheXMgaGF2ZSBkaWZmZXJlbnQgbGVuZ3Roc1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWwxLmxlbmd0aCA+IG1heExlbmd0aCB8fCB2YWwyLmxlbmd0aCA+IG1heExlbmd0aCkgeyAvLyBJZiBhcnJheSBpcyB0b28gYmlnXG4gICAgICAgICAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsMS5sZW5ndGg7IGluZGV4KyspIHsgLy8gR28gdGhyb3VnaCBlYWNoIGl0ZW1cbiAgICAgICAgICAgIGlmICghaXNFcXVhbCh2YWwxW2luZGV4XSwgdmFsMltpbmRleF0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBUZXN0IGlmIHR3byBhcnJheSBpdGVtcyBhcmUgZXF1YWxcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbDEgaW5zdGFuY2VvZiBPYmplY3QgJiYgdmFsMiBpbnN0YW5jZW9mIE9iamVjdCkgeyAvLyBJZiBvYmplY3RcbiAgICAgICAgaWYgKCFpc0VxdWFsKE9iamVjdC5rZXlzKHZhbDEpLCBPYmplY3Qua2V5cyh2YWwyKSwgbWF4RGVwdGggLSAxLCBtYXhMZW5ndGgpKSB7IC8vIElmIHRoZXkgZG9uJ3QgaGF2ZSBoZSBzYW1lIGtleXNcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh2YWwxKSkgeyAvLyBHbyB0aHJvdWdoIGFuZCB0ZXN0IGVhY2ggdmFsdWVcbiAgICAgICAgICAgIGlmICghaXNFcXVhbCh2YWwxW2tleV0sIHZhbDJba2V5XSwgbWF4RGVwdGggLSAxLCBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaXNFcXVhbCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Y0hKcGRtRjBaUzkxZEdsc2N5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJT3pzN096czdPenM3UjBGVFJ6dEJRVU5JTEUxQlFVMHNRMEZCUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhEUVVOdVFpeEpRVUZoTEVWQlEySXNTVUZCWVN4RlFVTmlMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eEhRVUZITEVWQlFVVXNSVUZEVUN4RlFVRkZPMGxCUTFRc1NVRkJTU3hSUVVGUkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVWQlFVVXNiME5CUVc5RE8xRkJRM1JFTEU5QlFVOHNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRVHRMUVVOMlFqdFRRVUZOTEVsQlFVa3NUMEZCVHl4SlFVRkpMRXRCUVVzc1QwRkJUeXhKUVVGSkxFVkJRVVVzUlVGQlJTdzJRMEZCTmtNN1VVRkRia1lzVDBGQlR5eExRVUZMTEVOQlFVRTdTMEZEWmp0SlFVVkVMRWxCUVVrc1NVRkJTU3haUVVGWkxFdEJRVXNzU1VGQlNTeEpRVUZKTEZsQlFWa3NTMEZCU3l4RlFVRkZPMUZCUTJoRUxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzYlVOQlFXMURPMWxCUTJ4RkxFOUJRVThzUzBGQlN5eERRVUZCTzFOQlEyWTdVVUZCUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVTBGQlV5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhGUVVGRkxFVkJRVVVzYzBKQlFYTkNPMWxCUXpsRkxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0VFFVTjJRanRSUVVWRUxFdEJRVXNzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZMRVZCUVVVc2RVSkJRWFZDTzFsQlEzWkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRkxFVkJRVVVzYjBOQlFXOURPMmRDUVVOdVJ5eFBRVUZQTEV0QlFVc3NRMEZCUVR0aFFVTm1PMU5CUTBvN1VVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlFUdExRVU5rTzFOQlFVMHNTVUZCU1N4SlFVRkpMRmxCUVZrc1RVRkJUU3hKUVVGSkxFbEJRVWtzV1VGQldTeE5RVUZOTEVWQlFVVXNSVUZCUlN4WlFVRlpPMUZCUTNaRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlExSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRGFrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRGFrSXNVVUZCVVN4SFFVRkhMRU5CUVVNc1JVRkRXaXhUUVVGVExFTkJRMW9zUlVGQlJTeEZRVUZGTEd0RFFVRnJRenRaUVVOdVF5eFBRVUZQTEV0QlFVc3NRMEZCUVR0VFFVTm1PMUZCUlVRc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzYVVOQlFXbERPMWxCUjNCRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlExQXNTVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVOcVFpeEpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUTJ4Q0xGRkJRVkVzUjBGQlJ5eERRVUZETEVWQlExb3NVMEZCVXl4RFFVTmFMRVZCUVVVN1owSkJRME1zVDBGQlR5eExRVUZMTEVOQlFVRTdZVUZEWmp0VFFVTktPMUZCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVUU3UzBGRFpEdEpRVVZFTEU5QlFVOHNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRVHRCUVVONFFpeERRVUZETEVOQlFVRTdRVUZGUkN4bFFVRmxPMGxCUTFnc1QwRkJUenREUVVOV0xFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBEZVN0YWduYXRlIGNvbXBvbmVudCBjbGFzc1xuICogQHByZXNlcnZlXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1saW5lcyAqL1xuaW1wb3J0IHsgRXZlbnRzIGFzIEJhc2UgfSBmcm9tIFwiLi9wcml2YXRlL19ldmVudHNcIjtcbmltcG9ydCB1cmwgZnJvbSBcIi4vcHJpdmF0ZS9fdXJsXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vcHJpdmF0ZS91dGlsc1wiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBAY2xhc3NkZXNjIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNsYXNzXG4gKiBAbmFtZXNwYWNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBjbGFzcyBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0gcGFyZW50IC0gcGFyZW50IG9mIHRoaXMgZWxlbWVudFxuICAgICAqIEBwYXJhbSBwcm9wcyAtIGVsZW1lbnQgcHJvcGVydGllczsgd29ya3MgbGlrZSBSZWFjdCBQcm9wc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgcHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgb2YgY29tcG9uZW50LiBXb3JrcyBzaW1pbGFyIFJlYWN0IFN0YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5pdGlhbCBzdGF0ZSB3YXMgc2V0IGluIGluaXRpYWxpemVyXG4gICAgICAgICAqIERvIG5vdCB0aHJvdyBlcnJvciB3aXRoIGRpcmVjdCBzdGF0ZSBzZXR0aW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGNvbXBvbmVudCBpcyBtb3VudGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kaWRNb3VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2VzIGEgY29tcG9uZW50IHRvIHVwZGF0ZVxuICAgICAgICAgKiBGb2xsb3dzIHRoZSBzYW1lIGNvbXBvbmVudCB1cGRhdGluZyBwcm9jZWR1cmUgYXMgc2V0U3RhdGUgd2l0aG91dCBtb2RpZnlpbmcgc3RhdGVcbiAgICAgICAgICogQHJldHVybnMgcmV0dXJucyBlcnJvciBpZiBlcnJvciBpcyB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHRoaXMuX2V4ZWNSZW5kZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3MgaWYgdGhlIHN0YXRlIGNoYW5nZWQgZnJvbSB0aGUgcHJldmlvdXMgc3RhdGUuIENhbiBtZSBhdHRhY2hlZCB0b1xuICAgICAgICAgKiBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYFxuICAgICAgICAgKiBAcGFyYW0ga2V5cyAtIGxpc3Qgb2Yga2V5cyB0byBjcmF3bC4gSWYgbGVmdCB1bmRlZmluZWQgKGRlZmF1bHQpIHRoZW5cbiAgICAgICAgICogdXNlIGFsbCBrZXlzLiBTaG91bGQgYmUgYGtleW9mIFN0YXRlYCwgYnV0IHRoZXJlIHdlcmUgc29tZSBUeXBlc2NyaXB0XG4gICAgICAgICAqIHRyb3VibGVzLlxuICAgICAgICAgKiBAcGFyYW0gbWF4RGVwdGggLSBtYXggcmVjdXJzaW9uIGRlcHRoIHRvIGNyYXdsIGFuIG9iamVjdC4gQWZ0ZXIgbWF4IGRlcHRoXG4gICAgICAgICAqIGlzIHJlYWNoZWQsIHRoZSB0d28gdmFsdWVzIGFyZSBzaW1wbHkgY29tcGFyZWQgd2l0aCBgPT09YFxuICAgICAgICAgKiBAcGFyYW0gbWF4TGVuZ3RoIC0gbWF4IGxlbmd0aCBvZiBhcnJheSB0byBjcmF3bC4gSWYgbWF4IGxlbnRoIGlzIHJlYWNoZWQsXG4gICAgICAgICAqIHR3byBhcnJheXMgd2lsbCBzaW1wbHkgYmUgY29tcGFyZWQgd2l0aCBgPT09YFxuICAgICAgICAgKiBAcmV0dXJucyBgdmFsMSA9PT0gdmFsMmBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGVEaWRDaGFuZ2UgPSAoa2V5cywgbWF4RGVwdGggPSAzLCBtYXhMZW5ndGggPSAxNSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKGtleXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdXRpbHMuaXNFcXVhbCh0aGlzLl9zdGF0ZSwgdGhpcy5fcHJldlN0YXRlLCBtYXhEZXB0aCwgbWF4TGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge30sIHByZXZTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSB0aGlzLl9zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIHByZXZTdGF0ZVtrZXldID0gKF9hID0gdGhpcy5fcHJldlN0YXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Fba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhdXRpbHMuaXNFcXVhbChzdGF0ZSwgcHJldlN0YXRlLCBtYXhEZXB0aCwgbWF4TGVuZ3RoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgc3RhdGVcbiAgICAgICAgICogQHBhcmFtIG9iaiAtIHN0YXRlIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNldFN0YXRlID0gKG9iaikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3N0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9zdGF0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZENvbnRlbnQgPSB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZXhlY1JlbmRlcigpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZShyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nLCBtYXgtbGVuICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcGFyYW0gcGFyZW50IC0gcGFyZW50IGVsZW1lbnQgdG8gbW91bnQgd2l0aDsgb3B0aW9uYWxcbiAgICAgICAgICogQHJldHVybnMgLSByZXN1bHQgb2YgYXBwZW5kIGNoaWxkIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdW50Q29tcG9uZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsTW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmNvbXBvbmVudERpZE1vdW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5mb3JFYWNoKChjaGlsZCkgPT4gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgbW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudCA9IHRoaXMubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbm1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5tb3VudENvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnQgPSB0aGlzLnVubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiwgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZyAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBjaGlsZHJlbiBmcm9tIHRoaXMuX3BhcmVudFxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4ZWN1dGVzIG5ldyByZW5kZXJcbiAgICAgICAgICogQHJldHVybnMgcmVuZGVyZWQgY29udGVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZXhlY1JlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIGNvbXBvbmVudFxuICAgICAgICAgKiBAcGFyYW0gcmVuZGVyZWRDb250ZW50IC0gcmVuZGVyZWQgY29udGVudCBmcm9tIGV4ZWN1dGluZyB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3VwZGF0ZSA9IChyZW5kZXJlZENvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hcHBlbmRDaGlsZChyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgIChfYyA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJlbnQgaXMgbnVsbCwgZXhwZWN0ZWQgSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGdldFN0YXRlIGdldHRlciBhcyB0aGlzLnN0YXRlIGl0c2VsZiBpcyBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgY29tcG9uZW50IHN0YXRlXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgY29tcG9uZW50IHN0YXRlXG4gICAgICogV0FSTjogZG8gbm90IHVzZSB0aGlzIG1ldGhvZCB0byBtdXRhdGUgdGhlIHN0YXRlIGRpcmVjdGx5XG4gICAgICogQHBhcmFtIG9iaiAtIHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHNldCBzdGF0ZShvYmopIHtcbiAgICAgICAgaWYgKHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDEuIFNlZSAke3VybH0uYCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBvYmo7XG4gICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRQcm9wcyBnZXR0ZXIgYXMgdGhpcy5wcm9wcyBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHByb3BzXG4gICAgICovXG4gICAgZ2V0IGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBwYXJlbnQgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIHBhcmVudCBlbGVtZW50XG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldCBwYXJlbnQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHJldHVybnMgcGFyZW50XG4gICAgICovXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGRpZE1vdW50IHZhbHVlIHB1YmxpY2x5XG4gICAgICogQHJldHVybnMgaWYgbW91bnRlZFxuICAgICAqL1xuICAgIGdldCBkaWRNb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpZE1vdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcmV2aW91cyBzdGF0ZS4gVW5kZWZpbmVkIGlmIG5vIHByZXZpb3VzIHN0YXRlIGV4aXN0c1xuICAgICAqIEByZXR1cm5zIHByZXZpb3VzIHN0YXRlXG4gICAgICovXG4gICAgZ2V0IHByZXZTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXZTdGF0ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenRIUVZWSE8wRkJRMGdzT0VKQlFUaENPMEZCUlRsQ0xFOUJRVThzUlVGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZGYUVRc1QwRkJUeXhIUVVGSExFMUJRVTBzWjBKQlFXZENMRU5CUVVFN1FVRkRhRU1zVDBGQlR5eExRVUZMTEUxQlFVMHNhVUpCUVdsQ0xFTkJRVUU3UVVGdFFtNURPenM3T3pzN1IwRk5SenRCUVVOSUxFMUJRVTBzVDBGQlowSXNVMEZIY0VJc1UwRkJVU3hKUVVGSk8wbEJORUpXT3pzN08wOUJTVWM3U1VGRFNDeFpRVUZ2UWl4TlFVRXlRaXhGUVVGWkxFdEJRV0U3VVVGRGNFVXNTMEZCU3l4RlFVRkZMRU5CUVVFN1VVRkVaMFFzVlVGQlN5eEhRVUZNTEV0QlFVc3NRMEZCVVR0UlFTOUNlRVU3TzFkQlJVYzdVVUZEU3l4WFFVRk5MRWRCUVZVc1JVRkJWeXhEUVVGQk8xRkJSVzVET3pzN1YwRkhSenRSUVVOTExIZENRVUZ0UWl4SFFVRkhMRXRCUVVzc1EwRkJRVHRSUVU5dVF6czdWMEZGUnp0UlFVTkxMR05CUVZNc1IwRkJSeXhMUVVGTExFTkJRVUU3VVVGblIzcENPenM3TzFkQlNVYzdVVUZEWVN4blFrRkJWeXhIUVVGSExFZEJRV2xDTEVWQlFVVTdPMWxCUXpkRExFbEJRVWs3WjBKQlEwRXNUVUZCUVN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEN0RFFVRjJRaXhKUVVGSkxFVkJRWFZDTzJkQ1FVVXpRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMmxDUVVOb1JEdG5Ra0ZGUkN4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEVOQlEzaENMR3RDUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFWVXNiMEpCUTNCQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlEycENMRU5CUVVFN1owSkJSVVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlFUdGhRVU51UXp0WlFVRkRMRTlCUVU4c1IwRkJXU3hGUVVGRkxEQkNRVUV3UWl4RFFVRkRPMmRDUVVNNVF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGFFTTdVVUZEVEN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3pzN096czdPenM3VjBGWFJ6dFJRVU5oTEcxQ1FVRmpMRWRCUVVjc1EwRkROMElzU1VGQmFVSXNSVUZEYWtJc1VVRkJVU3hIUVVGSExFTkJRVU1zUlVGRFdpeFRRVUZUTEVkQlFVY3NSVUZCUlN4RlFVTlFMRVZCUVVVN08xbEJRMVFzU1VGQlNTeEpRVUZKTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVOd1FpeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkRha0lzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZEV0N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVObUxGRkJRVkVzUlVGRFVpeFRRVUZUTEVOQlExb3NRMEZCUVR0aFFVTktPMWxCUlVRc1RVRkJUU3hMUVVGTExFZEJRVFpDTEVWQlFVVXNSVUZEZEVNc1UwRkJVeXhIUVVFMlFpeEZRVUZGTEVOQlFVRTdXVUZGTlVNc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVTdaMEpCUTNCQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCU1N4SlFVRkpMRU5CUVVNc1RVRkJiVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0blFrRkRNMFFzVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4VFFVTlVMRWxCUVVrc1EwRkJReXhWUVVGdFJDd3dRMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRoUVVOMlJUdFpRVVZFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNVVUZCVVN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGQk8xRkJRMmhGTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3TzFkQlNVYzdVVUZEWVN4aFFVRlJMRWRCUVVjc1EwRkJReXhIUVVGdFFpeEZRVUZuUWl4RlFVRkZPenRaUVVNM1JDeEpRVUZKTzJkQ1FVTkJMRTFCUVVFc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl3clEwRkJlRUlzU1VGQlNTeEZRVUYzUWp0blFrRkZOVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHR2UWtGRE5VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRwUWtGRGFFUTdaMEpCUlVRc1NVRkJTU3hEUVVGRExGVkJRVlVzY1VKQlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGQk8yZENRVVZzUXl4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEVOQlEzaENMR3RDUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFWVXNiMEpCUTNCQ0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlEycENMRU5CUVVFN1owSkJSVVFzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZCTzJkQ1FVVXZRaXhOUVVGTkxHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFVkJRVVU3YjBKQlEyaEVMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzI5Q1FVTndRaXhEUVVGRExFTkJRVU1zVTBGQlV5eERRVUZCTzJkQ1FVVm1MRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVRTdZVUZEYUVNN1dVRkJReXhQUVVGUExFZEJRVWNzUlVGQlJTd3dRa0ZCTUVJc1EwRkJRenRuUWtGRGNrTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzJGQlEyaERPMUZCUTB3c1EwRkJReXhEUVVGQk8xRkJSVVFzWjBWQlFXZEZPMUZCUTJoRk96czdPMWRCU1VjN1VVRkRZU3h0UWtGQll5eEhRVUZITEVOQlF6ZENMRTFCUVc5Q0xFVkJRMUlzUlVGQlJUczdXVUZEWkN4SlFVRkpPMmRDUVVOQkxFbEJRVWtzVFVGQlRTeExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkRkRUlzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVFN2FVSkJRM1pDTzJkQ1FVVkVMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpWQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdhVUpCUTJoRU8yZENRVVZFTEUxQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlFUdG5Ra0ZGTDBJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRWxCUVVrc1EwRkJRVHRuUWtGRkwwSXNUVUZCUVN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEN0RFFVRjJRaXhKUVVGSkxFVkJRWFZDTzJkQ1FVVXpRaXhKUVVGSkxGTkJRVk1zUzBGQlN5eEpRVUZKTEVWQlFVVTdiMEpCUTNCQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdhVUpCUTJoRU8yZENRVVZFTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVFN1owSkJSWEpETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGQk8yZENRVU55UWl4TlFVRkJMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNLME5CUVhSQ0xFbEJRVWtzUlVGQmMwSTdaMEpCUlRGQ0xFbEJRVWtzVTBGQlV5eFpRVUZaTEV0QlFVc3NSVUZCUlR0dlFrRkROVUlzVFVGQlRTeFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMSE5DUVVGelFpeEZRVUZGTEVOQlFVTTdiMEpCUld4RUxGTkJRWFZDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFVkJRVVVzUTBGQlF5eFJRVUZSTEVOQlFVTXNWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVUU3YjBKQlJYaEZMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVFN2FVSkJRelZETzJkQ1FVVkVMRTlCUVU4c1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVFN1lVRkROME03V1VGQlF5eFBRVUZQTEVkQlFWa3NSVUZCUlN3d1FrRkJNRUlzUTBGQlF6dG5Ra0ZET1VNc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMkZCUTJoRE8xRkJRMHdzUTBGQlF5eERRVUZCTzFGQlJVUTdPenRYUVVkSE8xRkJRMkVzVlVGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVFN1VVRkZNME03T3p0WFFVZEhPMUZCUTJFc2NVSkJRV2RDTEVkQlFVY3NSMEZCVXl4RlFVRkZPenRaUVVNeFF5eEpRVUZKTzJkQ1FVTkJMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpWQ0xFOUJRVTA3YVVKQlExUTdaMEpCUlVRc1RVRkJRU3hKUVVGSkxFTkJRVU1zYjBKQlFXOUNMQ3REUVVGNlFpeEpRVUZKTEVWQlFYbENPMmRDUVVVM1FpeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkJPMmRDUVVWMlF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVFN1owSkJRM1JDTEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGQk8yRkJRM3BDTzFsQlFVTXNUMEZCVHl4SFFVRlpMRVZCUVVVc01FSkJRVEJDTEVOQlFVTTdaMEpCUXpsRExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRla0k3VVVGRlRDeERRVUZETEVOQlFVRTdVVUZGUkRzN08xZEJSMGM3VVVGRFlTeFpRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeERRVUZCTzFGQlF5OURMQ3RFUVVFclJEdFJRVVV2UkRzN08xZEJSMGM3VVVGRFN5eHZRa0ZCWlN4SFFVRkhMRWRCUVZNc1JVRkJSVHRaUVVOcVF5eEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU0xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGQk8yRkJRMmhFTzFsQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJUdG5Ra0ZETlVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlR0dlFrRkRlRUlzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUVR0cFFrRkRia1E3WVVGRFNqdFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3VjBGSFJ6dFJRVU5MTEdkQ1FVRlhMRWRCUVVjc1IwRkJaU3hGUVVGRk8xbEJRMjVETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRVHRaUVVWMFFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRVHRSUVVONFFpeERRVUZETEVOQlFVRTdVVUZIUkRzN096dFhRVWxITzFGQlEwc3NXVUZCVHl4SFFVRkhMRU5CUVVNc1pVRkJORUlzUlVGQlVTeEZRVUZGT3p0WlFVTnlSQ3hKUVVGSkxHVkJRV1VzV1VGQldTeExRVUZMTEVWQlFVVTdaMEpCUTJ4RExFdEJRVXNzVFVGQlRTeFBRVUZQTEVsQlFVa3NaVUZCWlN4RlFVRkZPMjlDUVVOdVF5eE5RVUZCTEVsQlFVa3NRMEZCUXl4UFFVRlBMREJEUVVGRkxGZEJRVmNzUTBGQlF5eFBRVUZQTEVWQlFVTTdhVUpCUTNKRE8yRkJRMG83YVVKQlFVMHNTVUZCU1N4bFFVRmxMRVZCUVVVN1owSkJRM2hDTEUxQlFVRXNTVUZCU1N4RFFVRkRMRTlCUVU4c01FTkJRVVVzVjBGQlZ5eERRVUZETEdWQlFXVXNSVUZCUXp0aFFVTTNRenRaUVVWRUxFbEJRVWtzWlVGQlpTeEZRVUZGTzJkQ1FVTnFRaXhOUVVGQkxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc0swTkJRWFpDTEVsQlFVa3NSVUZCZFVJN1lVRkRPVUk3VVVGRFRDeERRVUZETEVOQlFVRTdVVUZGVHl4cFFrRkJXU3hIUVVGSExFTkJRVU1zUjBGQldTeEZRVUZUTEVWQlFVVTdXVUZETTBNc1NVRkJTU3hIUVVGSExGbEJRVmtzUzBGQlN5eEZRVUZGTzJkQ1FVTjBRaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3WjBKQlJUTkNMRTlCUVU4c1IwRkJXU3hEUVVGQk8yRkJRM1JDTzFsQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVFN1dVRkZjRU1zU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZCTzFsQlJUZENMRTlCUVU4c1MwRkJTeXhEUVVGQk8xRkJRMmhDTEVOQlFVTXNRMEZCUVR0UlFUTlVSeXhKUVVGSkxFMUJRVTBzUzBGQlN5eEpRVUZKTEVWQlFVVTdXVUZEYWtJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHRSRUZCYlVRc1EwRkJReXhEUVVGQk8xTkJRM1pGTzFGQlJVUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxFTkJRVUU3U1VGRGVrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5JTEVsQlFWY3NVVUZCVVR0UlFVTm1MRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlFUdEpRVU55UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwZ3NTVUZCWXl4TFFVRkxPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZCTzBsQlEzUkNMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBnc1NVRkJZeXhMUVVGTExFTkJRVVVzUjBGQlZUdFJRVU16UWl4SlFVRkpMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSVUZCUlR0WlFVTXhRaXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUTJ4Q0xFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVU14UXl4RFFVRkJPMWxCUTBRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0VFFVTnlRanRoUVVGTk8xbEJRMGdzU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMRU5CUVVFN1dVRkRha0lzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFbEJRVWtzUTBGQlFUdFRRVU5zUXp0SlFVTk1MRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRlhMRkZCUVZFN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVRTdTVUZEY2tJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTQ3hKUVVGWExFMUJRVTBzUTBGQlJTeFBRVUZuUXp0UlFVTXZReXhKUVVGSkxFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUVR0SlFVTXhRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBnc1NVRkJWeXhOUVVGTk8xRkJRMklzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkJPMGxCUTNaQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTQ3hKUVVGWExGRkJRVkU3VVVGRFppeFBRVUZQTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVFN1NVRkRla0lzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVTBGQlV6dFJRVU5vUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVUU3U1VGRE1VSXNRMEZCUXp0RFFUaFBTanRCUVVWRUxHVkJRV1VzVTBGQlV5eERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuZXhwb3J0IGNvbnN0IGZyYWdtZW50ID0gKF8sIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgYmluZENoaWxkcmVuKGZyYWdtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5KaFoyMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlpuSmhaMjFsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkRTQ3d5UWtGQk1rSTdRVUZETTBJc2FVTkJRV2xETzBGQlJXcERMRTlCUVU4c1JVRkZTQ3haUVVGWkxFZEJRMllzVFVGQlRTd3JRa0ZCSzBJc1EwRkJRVHRCUVVWMFF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkRjRUlzUTBGQlZTeEZRVU5XTEVkQlFVY3NVVUZCTWtJc1JVRkRaQ3hGUVVGRk8wbEJRMnhDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4RFFVRkJPMGxCUld4RUxGbEJRVmtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVFN1NVRkZhRU1zVDBGQlR5eFJRVUZSTEVOQlFVRTdRVUZEYmtJc1EwRkJReXhEUVVGQk8wRkJSVVFzWlVGQlpTeFJRVUZSTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIG1haW4gZmlsZSBmb3IgZGVzdGFnbmF0ZVxuICogQHByZXNlcnZlXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCAqIGFzIF9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlUmVmIGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZUVsZW1lbnROUyBmcm9tIFwiLi9jcmVhdGVFbGVtZW50TlNcIjtcbmltcG9ydCAqIGFzIF9GcmFnbWVudCBmcm9tIFwiLi9mcmFnbWVudFwiO1xuZXhwb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XG5leHBvcnQgeyBjcmVhdGVSZWYgfSBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50TlNcIjtcbmV4cG9ydCB7IGZyYWdtZW50IH0gZnJvbSBcIi4vZnJhZ21lbnRcIjtcbmV4cG9ydCB2YXIgRGVTdGFnbmF0ZTtcbihmdW5jdGlvbiAoRGVTdGFnbmF0ZSkge1xuICAgIERlU3RhZ25hdGUuQ29tcG9uZW50ID0gX0NvbXBvbmVudC5Db21wb25lbnQ7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVSZWYgPSBfQ3JlYXRlUmVmLmNyZWF0ZVJlZjtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnQgPSBfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlRWxlbWVudE5TID0gX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlM7XG4gICAgRGVTdGFnbmF0ZS5mcmFnbWVudCA9IF9GcmFnbWVudC5mcmFnbWVudDtcbn0pKERlU3RhZ25hdGUgfHwgKERlU3RhZ25hdGUgPSB7fSkpO1xuZXhwb3J0IGRlZmF1bHQgRGVTdGFnbmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdSMEZWUnp0QlFVTklMREpDUVVFeVFqdEJRVU16UWl4cFEwRkJhVU03UVVGRmFrTXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMR05CUVdNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUVR0QlFVTnFSQ3hQUVVGUExFdEJRVXNzWjBKQlFXZENMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEY2tRc1QwRkJUeXhMUVVGTExGTkJRVk1zVFVGQlRTeFpRVUZaTEVOQlFVRTdRVUZGZGtNc1QwRkJUeXhGUVVGRExGTkJRVk1zUlVGQlF5eE5RVUZOTEdGQlFXRXNRMEZCUVR0QlFVTnlReXhQUVVGUExFVkJRVTBzVTBGQlV5eEZRVUZETEUxQlFVMHNZVUZCWVN4RFFVRkJPMEZCUXpGRExFOUJRVThzUlVGQlF5eGhRVUZoTEVWQlFVTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU0zUXl4UFFVRlBMRVZCUVVNc1pVRkJaU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkRha1FzVDBGQlR5eEZRVUZETEZGQlFWRXNSVUZCUXl4TlFVRk5MRmxCUVZrc1EwRkJRVHRCUVVWdVF5eE5RVUZOTEV0QlFWY3NWVUZCVlN4RFFVOHhRanRCUVZCRUxGZEJRV2xDTEZWQlFWVTdTVUZEVkN4dlFrRkJVeXhIUVVGSkxGVkJRVlVzVlVGQlpDeERRVUZqTzBsQlEzWkNMRzlDUVVGVExFZEJRVWtzVlVGQlZTeFZRVUZrTEVOQlFXTTdTVUZGZGtJc2QwSkJRV0VzUjBGQlNTeGpRVUZqTEdOQlFXeENMRU5CUVd0Q08wbEJReTlDTERCQ1FVRmxMRWRCUVVrc1owSkJRV2RDTEdkQ1FVRndRaXhEUVVGdlFqdEpRVU51UXl4dFFrRkJVU3hIUVVGSkxGTkJRVk1zVTBGQllpeERRVUZoTzBGQlEzWkRMRU5CUVVNc1JVRlFaMElzVlVGQlZTeExRVUZXTEZWQlFWVXNVVUZQTVVJN1FVRkZSQ3hsUVVGbExGVkJRVlVzUTBGQlFTSjkiXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnQiLCJfY3JlYXRlRWxlbWVudE5TIiwiX2NyZWF0ZVJlZiIsIkJhc2VDb21wb25lbnQiLCJCYXNlIiwiX0NvbXBvbmVudC5Db21wb25lbnQiLCJfQ3JlYXRlUmVmLmNyZWF0ZVJlZiIsIl9DcmVhdGVFbGVtZW50LmNyZWF0ZUVsZW1lbnQiLCJfQ3JlYXRlRWxlbWVudE5TLmNyZWF0ZUVsZW1lbnROUyIsIl9GcmFnbWVudC5mcmFnbWVudCIsIkRlU3RhZ25hdGUiXSwi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
