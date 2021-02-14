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

  var eventNames = ["onFocus", "onBlur", "onFocusIn", "onFocusOut", "onAnimationStart", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onTransitionStart", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onAuxClick", "onClick", "onDblClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp", "onWheel"],
      windowEventNames = ["onLoad", "onOnline", "onOffline", "onResize", "onScroll", "onKeyDown", "onKeyPress", "onKeyUp"];
  var Events = function (_BaseComponent) {
    _inherits(Events, _BaseComponent);

    var _super = _createSuper(Events);

    function Events() {
      var _this;

      _classCallCheck(this, Events);

      _this = _super.apply(this, arguments);
      /**
       * Binds event listeners.
       * Do not call manually
       * @pacakge
       */

      _this.bindEventListeners = function (element) {
        _this._eventListener(element.addEventListener);

        _this._eventListener(window.addEventListener, windowEventNames);
      };
      /**
       * Binds event listeners.
       * Do not call manually
       * @pacakge
       */


      _this.unbindEventListeners = function (element) {
        _this._eventListener(element.removeEventListener);

        _this._eventListener(window.removeEventListener, windowEventNames);
      };

      _this._eventListener = function (eventListener) {
        var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : eventNames;

        var _iterator = _createForOfIteratorHelper(events),
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
      } else if (val1.length > maxLength || val2.length > maxLength) {
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

  var unmountedMsg = "Refusing to update unmounted component";
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
        var _a, _b;

        try {
          if (!_this._didMount) {
            throw new Error(unmountedMsg);
          }

          (_a = _this.componentDidUpdate) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          if (_this._parent === undefined) {
            throw new Error("ERROR: code 2. See ".concat(url, "."));
          }

          (_b = _this.getSnapshotBeforeUpdate) === null || _b === void 0 ? void 0 : _b.call(_assertThisInitialized(_this), Object.assign({}, _this.props), Object.assign({}, _this.state));

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
       * @param shouldComponentUpdate - if component should update after state setting
       * @returns void
       */


      _this.setState = function (obj) {
        var shouldComponentUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        var _a, _b;

        try {
          if (!_this._didMount) {
            throw new Error(unmountedMsg);
          }

          (_a = _this.componentWillUpdate) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

          if (_this._parent === undefined) {
            throw new Error("ERROR: code 2. See ".concat(url, "."));
          }

          _this._prevState = Object.assign({}, _this._state);
          (_b = _this.getSnapshotBeforeUpdate) === null || _b === void 0 ? void 0 : _b.call(_assertThisInitialized(_this), Object.assign({}, _this.props), Object.assign({}, _this.state));
          Object.assign(_this._state, obj);
          var renderedContent = shouldComponentUpdate && _this.shouldComponentUpdate() ? _this._execRender() : undefined;

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

  var Fragment = function Fragment(_) {
    var documentFragment = document.createDocumentFragment();

    for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      children[_key - 1] = arguments[_key];
    }

    bindChildren(documentFragment, children);
    return documentFragment;
  };

  (function (DeStagnate) {
    DeStagnate.Component = Component;
    DeStagnate.createRef = createRef;
    DeStagnate.createElement = createElement;
    DeStagnate.createElementNS = createElementNS;
    DeStagnate.Fragment = Fragment;
  })(exports.DeStagnate || (exports.DeStagnate = {}));

  var DeStagnate = exports.DeStagnate;

  exports.Component = Component;
  exports.Fragment = Fragment;
  exports.createElement = createElement;
  exports.createElementNS = createElementNS;
  exports.createRef = createRef;
  exports.default = DeStagnate;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ByaXZhdGUvX3VybC5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudC5qcyIsIi4uLy4uL2xpYi9jcmVhdGVFbGVtZW50TlMuanMiLCIuLi8uLi9saWIvY3JlYXRlUmVmLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2Jhc2UuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fZXZlbnRzLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvdXRpbHMuanMiLCIuLi8uLi9saWIvY29tcG9uZW50LmpzIiwiLi4vLi4vbGliL2ZyYWdtZW50LmpzIiwiLi4vLi4vbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1cmwgPSBcImh0dHBzOi8vbHVrZS16aGFuZy0wNC5naXRodWIuaW8vRGVTdGFnbmF0ZS9lcnJvci1jb2Rlc1wiO1xuZXhwb3J0IGRlZmF1bHQgdXJsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDNWeWJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5MWNtd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEhkRVFVRjNSQ3hEUVVGQk8wRkJSVE5GTEdWQlFXVXNSMEZCUnl4RFFVRkJJbjA9IiwiLyoqXG4gKiBDb21wb25lbnRcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGZpbGUgc2hhcmUgZnVuY3Rpb25zIGFuZCB0eXBlcyBmb3IgY3JlYXRlRWxlbWVudCBhbmQgaXQncyB2YXJpYW50c1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL191cmxcIjtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyB0byBiaW5kIHdpdGhcbiAqIEBwYXJhbSBucyAtIGlmIG5hbWVzcGFjZSBlbGVtZW50XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIG5zID0gZmFsc2UpID0+IHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiaW5uZXJIVE1MXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5zbGljZSgwLCAyKSA9PT0gXCJvblwiKSB7IC8vIFdvcmtzIHN1Y2ggYXMgb25DbGljaywgb25BbmltYXRpb25FbmQsIGV0Yy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWwpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInJlZlwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh2YWwpID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50XCIgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFsLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dHlwZW9mIHZhbH0gaXMgbm90IGEgdmFsaWQgRGVTdGFnbmF0ZSBjaGlsZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiB0byBiaW5kIHdpdGhcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRDaGlsZHJlbiA9IChlbGVtZW50LCBjaGlsZHJlbikgPT4ge1xuICAgIGlmIChjaGlsZHJlbiAhPT0gbnVsbCAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gKGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZHJlbi50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4uZGlkTW91bnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLm1vdW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5wYXJlbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyTnlaV0YwWlVWc1pXMWxiblJWZEdsc2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5amNtVmhkR1ZGYkdWdFpXNTBWWFJwYkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVTBGQlV5eEZRVUZETEUxQlFVMHNZMEZCWXl4RFFVRkJPMEZCUlhSRExFOUJRVThzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUVR0QlFYbEZlRUk3T3pzN096czdSMEZQUnp0QlFVTklMRTFCUVUwc1EwRkJReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVU55UWl4UFFVRm5RaXhGUVVOb1FpeExRVUY1UWl4RlFVTjZRaXhGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVU5PTEVWQlFVVTdTVUZEVGl4SlFVRkpMRXRCUVVzc1JVRkJSVHRSUVVOUUxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpWRExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZEY0VRc1NVRkJTU3hIUVVGSExFdEJRVXNzVjBGQlZ5eEZRVUZGTzI5Q1FVTnlRaXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRVHRwUWtGRGNrTTdjVUpCUVUwc1NVRkJTU3hGUVVGRkxFVkJRVVU3YjBKQlExZ3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGQk8ybENRVU53UkR0eFFrRkJUVHR2UWtGRFNDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUVR0cFFrRkROVU03WVVGRFNqdHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSU3hGUVVGRkxEaERRVUU0UXp0blFrRkRha1lzU1VGQlNTeFBRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8yOUNRVU0xUWl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlEzQkNMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFMRmRCUVZjc1JVRkJiMElzUlVGRGNFTXNSMEZCWjBJc1EwRkRia0lzUTBGQlFUdHBRa0ZEU2p0aFFVTktPMmxDUVVGTkxFbEJRMGdzUjBGQlJ5eExRVUZMTEV0QlFVczdaMEpCUTJJc1QwRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEZGQlFWRTdaMEpCUTNoQ0xGTkJRVk1zU1VGQlNTeEhRVUZITEVWQlEyeENPMmRDUVVOSExFZEJRVzlDTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNeFF6dHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlF6RkNMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVkQlFVY3NhME5CUVd0RExFTkJRVU1zUTBGQlFUdGhRVU5vUlR0VFFVTktPMHRCUTBvN1FVRkRUQ3hEUVVGRExFTkJRVUU3UVVGRlJEczdPenM3TzBkQlRVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3haUVVGWkxFZEJRVWNzUTBGRGVFSXNUMEZCWVN4RlFVTmlMRkZCUVhWQ0xFVkJRMjVDTEVWQlFVVTdTVUZEVGl4SlFVRkpMRkZCUVZFc1MwRkJTeXhKUVVGSkxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTTNReXhKUVVGSkxGRkJRVkVzV1VGQldTeExRVUZMTEVWQlFVVTdXVUZETTBJc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFXMUNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJReTlDTEVOQlFVTXNRMEZCUVR0VFFVTk1PMkZCUVUwc1NVRkRTQ3hQUVVGUExGRkJRVkVzUzBGQlN5eFJRVUZSTzFsQlF6VkNMRTlCUVU4c1VVRkJVU3hMUVVGTExGRkJRVkVzUlVGRE9VSTdXVUZEUlN4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlFUdFRRVU53UlR0aFFVRk5MRWxCUVVrc1VVRkJVU3haUVVGWkxGTkJRVk1zUlVGQlJUdFpRVU4wUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzU1VGQlNTeFBRVUZQTEZsQlFWa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRE4wUXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdG5Ra0ZGZGtJc1QwRkJUVHRoUVVOVU8ybENRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1dVRkJXU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdaMEpCUTJwRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVRTdZVUZETDBNN1dVRkZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEV0QlFVc3NUMEZCVHl4RlFVRkZPMmRDUVVNM1FpeFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNMVFqdFpRVVZFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRVHRUUVVONlFqdGhRVUZOTzFsQlEwZ3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlFUdFRRVU5vUXp0TFFVTktPMEZCUTB3c1EwRkJReXhEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcyB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKlxuICogQHBhcmFtIHRhZ05hbWVPckNvbXBvbmVudCAtIG5hbWUgb2YgSFRNTCBlbGVtZW50IG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgb2YgZWxlbWVudCBvciBjb21wb25lbnRcbiAqIDEuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIHRhZ25hbWUsIHByb3BzIGFyZSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIDIuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIGEgZnVuY3Rpb24sIHByb3BzIGFyZSB0aGF0IGZ1bmN0aW9ucyBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuQXJncyAtIHJlc3QgcGFyYW1ldGVyIGZvciBjaGlsZHJlblxuICogQHJldHVybnMgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50KTtcbiAgICAgICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lT3JDb21wb25lbnQocHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIEVycm9yKFwidGFnTmFtZU9yQ29tcG9uZW50IGlzIG9mIGludmFsaWQgdHlwZS5cIik7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqY21WaGRHVkZiR1Z0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenRIUVZGSE8wRkJRMGdzTWtKQlFUSkNPMEZCUXpOQ0xHbERRVUZwUXp0QlFVVnFReXhQUVVGUExFVkJSMGdzV1VGQldTeEZRVU5hTEZOQlFWTXNSVUZEV2l4TlFVRk5MQ3RDUVVFclFpeERRVUZCTzBGQmMwTjBRenM3T3pzN096czdPMGRCVTBjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzWVVGQllTeERRVWw2UWl4clFrRkhXU3hGUVVOYUxFdEJRVFpDTEVWQlF6ZENMRWRCUVVjc1VVRkJNa0k3U1VGRk9VSXNTVUZCU1N4UFFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRla01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkJPMUZCUlRGRUxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCTUVJc1EwRkJReXhEUVVGQk8xRkJSVGxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3VVVGRkwwSXNUMEZCVHl4UFFVRlBMRU5CUVVFN1MwRkRha0k3VTBGQlRTeEpRVUZKTEU5QlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0UlFVTnNSQ3hQUVVGUExHdENRVUZyUWl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdExRVU5zUkR0SlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVFN1FVRkRNVVFzUTBGQlF6dEJRVVZFTEdWQlFXVXNZVUZCWVN4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnROUyBjcmVhdGVFbGVtZW50IGZvciBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gKi9cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBjaGlsZCBlbGVtZW50IHRvIGRlU3RhZ25hdGVcbiAqIEBwYXJhbSBuYW1lc3BhY2VVUkkgLSBuYW1lc3BhY2UgdXJpXG4gKiBAcGFyYW0gdGFnTmFtZSAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5SZXN0IC0gcmVzdCBwYXJhbWV0ZXIgb2YgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGh0bWwgZWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudE5TID0gKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHRhZ05hbWUpO1xuICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcywgdHJ1ZSk7XG4gICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50TlM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEU1VExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpVVnNaVzFsYm5ST1V5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJTEU5QlFVOHNSVUZGU0N4WlFVRlpMRVZCUTFvc1UwRkJVeXhGUVVOYUxFMUJRVTBzSzBKQlFTdENMRU5CUVVFN1FVRkZkRU03T3pzN096czdPMGRCVVVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZETTBJc1dVRkJLMGNzUlVGREwwY3NUMEZCTUVNc1JVRkRNVU1zUzBGQmQwTXNSVUZEZUVNc1IwRkJSeXhSUVVFeVFpeEZRVU4yUWl4RlFVRkZPMGxCUTFRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3U1VGRkwwUXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVRTdTVUZGTDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0SlFVVXZRaXhQUVVGUExFOUJRVThzUTBGQlFUdEJRVU5zUWl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbExHVkJRV1VzUTBGQlFTSjkiLCIvKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmID0gKCkgPT4gKHtcbiAgICBjdXJyZW50OiBudWxsLFxufSk7XG4vKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFVtVm1MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVkpsWmk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRmxRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQmQwTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1VzVDBGQlR5eEZRVUZGTEVsQlFVazdRMEZEYUVJc1EwRkJReXhEUVVGQk8wRkJSVVk3T3p0SFFVZEhPMEZCUTBnc1pVRkJaU3hUUVVGVExFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBQcmVzZXQgLSBiYXNlIGZvciBhIGNvbXBvbmVudFxuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVSZWYgfSBmcm9tIFwiLi4vY3JlYXRlUmVmXCI7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVzZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuICAgICAgICB0aGlzLmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiBjb21wb25lbnQgY2F0Y2hlcyBlcnJvci4gRGVmYXVsdCBiZWhhdmlvdXIgaXMgY29uc29sZS5lcnJvclxuICAgICAgICAgKiBAcGFyYW0gZXJyb3IgLSBlcnJvciBvYmplY3Qgd2l0aCBpbmZvXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIGJlZm9yZSBjb21wb25lbnQgaXMgdXBkYXRlZFxuICAgICAgICAgKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZS9yZS1yZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcmluZyBIVE1MLCBtdXN0IGJlIHBhcnQgb2YgZXh0ZW5kZWQgY2xhc3NcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEByZXR1cm5zIGlmIHJldHVybnMgbnVsbCBlcnJvciB3aWxsIGJlIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBudWxsO1xuICAgIH1cbn1cblByZXNldC5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG5QcmVzZXQuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcblByZXNldC5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5ZlltRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN08wZEJVMGM3UVVGRlNDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMR05CUVdNc1JVRkJReXhOUVVGTkxHdENRVUZyUWl4RFFVRkJPMEZCUXpGRUxFOUJRVThzUlVGQlF5eFBRVUZQTEVsQlFVa3NaMEpCUVdkQ0xFVkJRVU1zVFVGQlRTeHZRa0ZCYjBJc1EwRkJRVHRCUVVNNVJDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMRlZCUVZVc1JVRkJReXhOUVVGTkxHTkJRV01zUTBGQlFUdEJRV2xEYkVRc01FSkJRVEJDTzBGQlF6RkNPenRIUVVWSE8wRkJRMGdzVFVGQlRTeFBRVUZuUWl4TlFVRk5PMGxCUVRWQ08xRkJVVzlDTEd0Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8xRkJSVGxDTEc5Q1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdVVUZGYkVNc1kwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlFUdFJRVVYwUXpzN096dFhRVWxITzFGQlEwa3NjMEpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZaTEVWQlFWRXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdVVUZGZGtVN096dFhRVWRITzFGQlEwa3NNRUpCUVhGQ0xFZEJRVWNzUjBGQldTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkJPMUZCUld4RU96czdPenM3VjBGTlJ6dFJRVU5oTEZkQlFVMHNSMEZCUnl4SFFVRmxMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVUU3U1VGRmJrUXNRMEZCUXpzN1FVRnNRekJDTEc5Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8wRkJSVGxDTEhOQ1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdRVUZGYkVNc1owSkJRVk1zUjBGQlJ5eFZRVUZWTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIEV2ZW50c1xuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgUHJlc2V0IGFzIEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9fYmFzZVwiO1xuY29uc3QgZXZlbnROYW1lcyA9IFtcbiAgICBcIm9uRm9jdXNcIixcbiAgICBcIm9uQmx1clwiLFxuICAgIFwib25Gb2N1c0luXCIsXG4gICAgXCJvbkZvY3VzT3V0XCIsXG4gICAgXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG4gICAgXCJvbkFuaW1hdGlvbkNhbmNlbFwiLFxuICAgIFwib25BbmltYXRpb25FbmRcIixcbiAgICBcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIsXG4gICAgXCJvblRyYW5zaXRpb25TdGFydFwiLFxuICAgIFwib25UcmFuc2l0aW9uQ2FuY2VsXCIsXG4gICAgXCJvblRyYW5zaXRpb25FbmRcIixcbiAgICBcIm9uVHJhbnNpdGlvblJ1blwiLFxuICAgIFwib25BdXhDbGlja1wiLFxuICAgIFwib25DbGlja1wiLFxuICAgIFwib25EYmxDbGlja1wiLFxuICAgIFwib25Nb3VzZURvd25cIixcbiAgICBcIm9uTW91c2VFbnRlclwiLFxuICAgIFwib25Nb3VzZUxlYXZlXCIsXG4gICAgXCJvbk1vdXNlTW92ZVwiLFxuICAgIFwib25Nb3VzZU92ZXJcIixcbiAgICBcIm9uTW91c2VPdXRcIixcbiAgICBcIm9uTW91c2VVcFwiLFxuICAgIFwib25XaGVlbFwiLFxuXSwgd2luZG93RXZlbnROYW1lcyA9IFtcbiAgICBcIm9uTG9hZFwiLFxuICAgIFwib25PbmxpbmVcIixcbiAgICBcIm9uT2ZmbGluZVwiLFxuICAgIFwib25SZXNpemVcIixcbiAgICBcIm9uU2Nyb2xsXCIsXG4gICAgXCJvbktleURvd25cIixcbiAgICBcIm9uS2V5UHJlc3NcIixcbiAgICBcIm9uS2V5VXBcIixcbl07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcih3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciwgd2luZG93RXZlbnROYW1lcyk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIsIHdpbmRvd0V2ZW50TmFtZXMpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gKGV2ZW50TGlzdGVuZXIsIGV2ZW50cyA9IGV2ZW50TmFtZXMpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxFdmVudE5hbWUgPSBldmVudE5hbWUuc2xpY2UoMikudG9Mb3dlckNhc2UoKSwgY2FsbGJhY2sgPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyKGh0bWxFdmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJWMlpXNTBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWxkbVZ1ZEhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenRIUVZOSE8wRkJSVWdzVDBGQlR5eEZRVUZETEUxQlFVMHNTVUZCU1N4aFFVRmhMRVZCUVVNc1RVRkJUU3hUUVVGVExFTkJRVUU3UVVGdlRDOURMRTFCUVUwc1ZVRkJWU3hIUVVGeFFqdEpRVU5xUXl4VFFVRlRPMGxCUTFRc1VVRkJVVHRKUVVOU0xGZEJRVmM3U1VGRFdDeFpRVUZaTzBsQlExb3NhMEpCUVd0Q08wbEJRMnhDTEcxQ1FVRnRRanRKUVVOdVFpeG5Ra0ZCWjBJN1NVRkRhRUlzYzBKQlFYTkNPMGxCUTNSQ0xHMUNRVUZ0UWp0SlFVTnVRaXh2UWtGQmIwSTdTVUZEY0VJc2FVSkJRV2xDTzBsQlEycENMR2xDUVVGcFFqdEpRVU5xUWl4WlFVRlpPMGxCUTFvc1UwRkJVenRKUVVOVUxGbEJRVms3U1VGRFdpeGhRVUZoTzBsQlEySXNZMEZCWXp0SlFVTmtMR05CUVdNN1NVRkRaQ3hoUVVGaE8wbEJRMklzWVVGQllUdEpRVU5pTEZsQlFWazdTVUZEV2l4WFFVRlhPMGxCUTFnc1UwRkJVenREUVVOYUxFVkJRMGNzWjBKQlFXZENMRWRCUVhGQ08wbEJRMnBETEZGQlFWRTdTVUZEVWl4VlFVRlZPMGxCUTFZc1YwRkJWenRKUVVOWUxGVkJRVlU3U1VGRFZpeFZRVUZWTzBsQlExWXNWMEZCVnp0SlFVTllMRmxCUVZrN1NVRkRXaXhUUVVGVE8wTkJRMW9zUTBGQlFUdEJRVWRNTERCQ1FVRXdRanRCUVVNeFFpeE5RVUZOTEU5QlFXZENMRTFCUVU4c1UwRkJVU3hoUVVGaE8wbEJRV3hFT3p0UlFVVkpPenM3TzFkQlNVYzdVVUZEWjBJc2RVSkJRV3RDTEVkQlFVY3NRMEZCUXl4UFFVRnZRaXhGUVVGUkxFVkJRVVU3V1VGRGJrVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRVHRaUVVNM1F5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZCTzFGQlEyeEZMRU5CUVVNc1EwRkJRVHRSUVVWRU96czdPMWRCU1VjN1VVRkRaMElzZVVKQlFXOUNMRWRCUVVjc1EwRkJReXhQUVVGdlFpeEZRVUZSTEVWQlFVVTdXVUZEY2tVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlFUdFpRVU5vUkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSU3huUWtGQlowSXNRMEZCUXl4RFFVRkJPMUZCUTNKRkxFTkJRVU1zUTBGQlFUdFJRVVZQTEcxQ1FVRmpMRWRCUVVjc1EwRkRja0lzWVVGQk5FSXNSVUZETlVJc1RVRkJUU3hIUVVGSExGVkJRVlVzUlVGRFppeEZRVUZGTzFsQlEwNHNTMEZCU3l4TlFVRk5MRk5CUVZNc1NVRkJTU3hOUVVGTkxFVkJRVVU3WjBKQlF6VkNMRTFCUVUwc1lVRkJZU3hIUVVGSExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFVkJRMnhFTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVUU3WjBKQlJUbENMRWxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zU1VGQlNTeFJRVUZSTEZsQlFWa3NVVUZCVVN4RlFVRkZPMjlDUVVONFJDeGhRVUZoTEVOQlExUXNZVUZCWVN4RlFVTmlMRkZCUVRoRExFTkJRMnBFTEVOQlFVRTdhVUpCUTBvN1lVRkRTanRSUVVOTUxFTkJRVU1zUTBGQlFUdEpRVVZNTEVOQlFVTTdRMEZCUVNKOSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBVdGlscyAtIHV0aWxpdGllcyBmb3IgRGVTdGFnbmF0ZVxuICovXG4vKipcbiAqIENoZWNrcyBpZiB2YWwxIGFuZCB2YWwyIGFyZSBlcXVhbFxuICogQHBhcmFtIHZhbDEgLSB2YWx1ZSB0byBjaGVjayBmb3IgZXF1YWxpdHlcbiAqIEBwYXJhbSB2YWwyIC0gdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0IHZhbDFcbiAqIEBwYXJhbSBtYXhEZXB0aCAtIG1heCByZWN1cnNpb24gZGVwdGggdG8gY3Jhd2wgYW4gb2JqZWN0LiBBZnRlciBtYXggZGVwdGggaXNcbiAqIHJlYWNoZWQsIHRoZSB0d28gdmFsdWVzIGFyZSBzaW1wbHkgY29tcGFyZWQgd2l0aCBgPT09YFxuICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLCB0d29cbiAqIGFycmF5cyB3aWxsIHNpbXBseSBiZSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcmV0dXJucyBgdmFsMSA9PT0gdmFsMmBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRXF1YWwgPSAodmFsMSwgdmFsMiwgbWF4RGVwdGggPSAzLCBtYXhMZW5ndGggPSAxMCkgPT4ge1xuICAgIGlmIChtYXhEZXB0aCA9PT0gMCkgeyAvLyBJZiBtYXhEZXB0aCByZWFjaGVkLCBqdXN0IHJ1biA9PT1cbiAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwxICE9PSB0eXBlb2YgdmFsMikgeyAvLyBJZiB0aGV5IGFyZW4ndCB0aGUgc2FtZSB0eXBlLCByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsMSBpbnN0YW5jZW9mIEFycmF5ICYmIHZhbDIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBpZiAodmFsMS5sZW5ndGggIT09IHZhbDIubGVuZ3RoKSB7IC8vIElmIGFycmF5cyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsMS5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsMi5sZW5ndGggPiBtYXhMZW5ndGgpIHsgLy8gSWYgYXJyYXkgaXMgdG9vIGJpZ1xuICAgICAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbDEubGVuZ3RoOyBpbmRleCsrKSB7IC8vIEdvIHRocm91Z2ggZWFjaCBpdGVtXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtpbmRleF0sIHZhbDJbaW5kZXhdLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gVGVzdCBpZiB0d28gYXJyYXkgaXRlbXMgYXJlIGVxdWFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwxIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbDIgaW5zdGFuY2VvZiBPYmplY3QpIHsgLy8gSWYgb2JqZWN0XG4gICAgICAgIGlmICghaXNFcXVhbChPYmplY3Qua2V5cyh2YWwxKSwgT2JqZWN0LmtleXModmFsMiksIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBJZiB0aGV5IGRvbid0IGhhdmUgaGUgc2FtZSBrZXlzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsMSkpIHsgLy8gR28gdGhyb3VnaCBhbmQgdGVzdCBlYWNoIHZhbHVlXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtrZXldLCB2YWwyW2tleV0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlzRXF1YWwsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5MWRHbHNjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSU96czdPenM3T3pzN1IwRlRSenRCUVVOSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVTnVRaXhKUVVGaExFVkJRMklzU1VGQllTeEZRVU5pTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUTFvc1UwRkJVeXhIUVVGSExFVkJRVVVzUlVGRFVDeEZRVUZGTzBsQlExUXNTVUZCU1N4UlFVRlJMRXRCUVVzc1EwRkJReXhGUVVGRkxFVkJRVVVzYjBOQlFXOURPMUZCUTNSRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0TFFVTjJRanRUUVVGTkxFbEJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NUMEZCVHl4SlFVRkpMRVZCUVVVc1JVRkJSU3cyUTBGQk5rTTdVVUZEYmtZc1QwRkJUeXhMUVVGTExFTkJRVUU3UzBGRFpqdEpRVVZFTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1NVRkJTU3hKUVVGSkxGbEJRVmtzUzBGQlN5eEZRVUZGTzFGQlEyaEVMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc2JVTkJRVzFETzFsQlEyeEZMRTlCUVU4c1MwRkJTeXhEUVVGQk8xTkJRMlk3WVVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RlFVRkZMRVZCUVVVc2MwSkJRWE5DTzFsQlEyNUdMRTlCUVU4c1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlFUdFRRVU4yUWp0UlFVVkVMRXRCUVVzc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTEVWQlFVVXNkVUpCUVhWQ08xbEJRM1pGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkZMRVZCUVVVc2IwTkJRVzlETzJkQ1FVTnVSeXhQUVVGUExFdEJRVXNzUTBGQlFUdGhRVU5tTzFOQlEwbzdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRVHRMUVVOa08xTkJRVTBzU1VGQlNTeEpRVUZKTEZsQlFWa3NUVUZCVFN4SlFVRkpMRWxCUVVrc1dVRkJXU3hOUVVGTkxFVkJRVVVzUlVGQlJTeFpRVUZaTzFGQlEzWkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZEV2l4VFFVRlRMRU5CUTFvc1JVRkJSU3hGUVVGRkxHdERRVUZyUXp0WlFVTnVReXhQUVVGUExFdEJRVXNzUTBGQlFUdFRRVU5tTzFGQlJVUXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc2FVTkJRV2xETzFsQlIzQkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUFzU1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTnFRaXhKUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlEyeENMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eERRVU5hTEVWQlFVVTdaMEpCUTBNc1QwRkJUeXhMUVVGTExFTkJRVUU3WVVGRFpqdFRRVU5LTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVFN1MwRkRaRHRKUVVWRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0QlFVTjRRaXhEUVVGRExFTkJRVUU3UVVGRlJDeGxRVUZsTzBsQlExZ3NUMEZCVHp0RFFVTldMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIERlU3RhZ25hdGUgY29tcG9uZW50IGNsYXNzXG4gKiBAcHJlc2VydmVcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxpbmVzICovXG5pbXBvcnQgeyBFdmVudHMgYXMgQmFzZSB9IGZyb20gXCIuL3ByaXZhdGUvX2V2ZW50c1wiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9wcml2YXRlL191cmxcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9wcml2YXRlL3V0aWxzXCI7XG5jb25zdCB1bm1vdW50ZWRNc2cgPSBcIlJlZnVzaW5nIHRvIHVwZGF0ZSB1bm1vdW50ZWQgY29tcG9uZW50XCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEBjbGFzc2Rlc2MgQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY2xhc3NcbiAqIEBuYW1lc3BhY2VcbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGNsYXNzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgb2YgdGhpcyBlbGVtZW50XG4gICAgICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzOyB3b3JrcyBsaWtlIFJlYWN0IFByb3BzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGF0ZSBvZiBjb21wb25lbnQuIFdvcmtzIHNpbWlsYXIgUmVhY3QgU3RhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBpbml0aWFsIHN0YXRlIHdhcyBzZXQgaW4gaW5pdGlhbGl6ZXJcbiAgICAgICAgICogRG8gbm90IHRocm93IGVycm9yIHdpdGggZGlyZWN0IHN0YXRlIHNldHRpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgY29tcG9uZW50IGlzIG1vdW50ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZXMgYSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgICAgICAqIEZvbGxvd3MgdGhlIHNhbWUgY29tcG9uZW50IHVwZGF0aW5nIHByb2NlZHVyZSBhcyBzZXRTdGF0ZSB3aXRob3V0IG1vZGlmeWluZyBzdGF0ZVxuICAgICAgICAgKiBAcmV0dXJucyByZXR1cm5zIGVycm9yIGlmIGVycm9yIGlzIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVubW91bnRlZE1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl9leGVjUmVuZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGlmIHRoZSBzdGF0ZSBjaGFuZ2VkIGZyb20gdGhlIHByZXZpb3VzIHN0YXRlLiBDYW4gbWUgYXR0YWNoZWQgdG9cbiAgICAgICAgICogYHNob3VsZENvbXBvbmVudFVwZGF0ZWBcbiAgICAgICAgICogQHBhcmFtIGtleXMgLSBsaXN0IG9mIGtleXMgdG8gY3Jhd2wuIElmIGxlZnQgdW5kZWZpbmVkIChkZWZhdWx0KSB0aGVuXG4gICAgICAgICAqIHVzZSBhbGwga2V5cy4gU2hvdWxkIGJlIGBrZXlvZiBTdGF0ZWAsIGJ1dCB0aGVyZSB3ZXJlIHNvbWUgVHlwZXNjcmlwdFxuICAgICAgICAgKiB0cm91Ymxlcy5cbiAgICAgICAgICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aFxuICAgICAgICAgKiBpcyByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLFxuICAgICAgICAgKiB0d28gYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlRGlkQ2hhbmdlID0gKGtleXMsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwodGhpcy5fc3RhdGUsIHRoaXMuX3ByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHt9LCBwcmV2U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdGhpcy5fc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGVba2V5XSA9IChfYSA9IHRoaXMuX3ByZXZTdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwoc3RhdGUsIHByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHN0YXRlXG4gICAgICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgICAgICogQHBhcmFtIHNob3VsZENvbXBvbmVudFVwZGF0ZSAtIGlmIGNvbXBvbmVudCBzaG91bGQgdXBkYXRlIGFmdGVyIHN0YXRlIHNldHRpbmdcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IChvYmosIHNob3VsZENvbXBvbmVudFVwZGF0ZSA9IHRydWUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fZGlkTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHVubW91bnRlZE1zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldlN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKHRoaXMsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9zdGF0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZENvbnRlbnQgPSBzaG91bGRDb21wb25lbnRVcGRhdGUgJiYgdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2V4ZWNSZW5kZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZywgbWF4LWxlbiAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBtb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBlbGVtZW50IHRvIG1vdW50IHdpdGg7IG9wdGlvbmFsXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudENvbXBvbmVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbE1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMy4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5jb21wb25lbnREaWRNb3VudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZm9yRWFjaCgoY2hpbGQpID0+IGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnQgPSB0aGlzLm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50ID0gdGhpcy51bm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4sIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgY2hpbGRyZW4gZnJvbSB0aGlzLl9wYXJlbnRcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeGVjdXRlcyBuZXcgcmVuZGVyXG4gICAgICAgICAqIEByZXR1cm5zIHJlbmRlcmVkIGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2V4ZWNSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHJlbmRlcmVkQ29udGVudCAtIHJlbmRlcmVkIGNvbnRlbnQgZnJvbSBleGVjdXRpbmcgdGhlIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl91cGRhdGUgPSAocmVuZGVyZWRDb250ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiByZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kQ2hpbGQocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2MgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yID0gKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGlzIG51bGwsIGV4cGVjdGVkIEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRTdGF0ZSBnZXR0ZXIgYXMgdGhpcy5zdGF0ZSBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIFdBUk46IGRvIG5vdCB1c2UgdGhpcyBtZXRob2QgdG8gbXV0YXRlIHRoZSBzdGF0ZSBkaXJlY3RseVxuICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBzZXQgc3RhdGUob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKGBFUlJPUjogY29kZSAxLiBTZWUgJHt1cmx9LmApKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gb2JqO1xuICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0UHJvcHMgZ2V0dGVyIGFzIHRoaXMucHJvcHMgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBwcm9wc1xuICAgICAqL1xuICAgIGdldCBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBwYXJlbnQgZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXQgcGFyZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHBhcmVudFxuICAgICAqL1xuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBkaWRNb3VudCB2YWx1ZSBwdWJsaWNseVxuICAgICAqIEByZXR1cm5zIGlmIG1vdW50ZWRcbiAgICAgKi9cbiAgICBnZXQgZGlkTW91bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaWRNb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJldmlvdXMgc3RhdGUuIFVuZGVmaW5lZCBpZiBubyBwcmV2aW91cyBzdGF0ZSBleGlzdHNcbiAgICAgKiBAcmV0dXJucyBwcmV2aW91cyBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBwcmV2U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2U3RhdGU7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnZiWEJ2Ym1WdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3p0SFFWVkhPMEZCUTBnc09FSkJRVGhDTzBGQlJUbENMRTlCUVU4c1JVRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRmFFUXNUMEZCVHl4SFFVRkhMRTFCUVUwc1owSkJRV2RDTEVOQlFVRTdRVUZEYUVNc1QwRkJUeXhMUVVGTExFMUJRVTBzYVVKQlFXbENMRU5CUVVFN1FVRkZia01zVFVGQlRTeFpRVUZaTEVkQlFVY3NkME5CUVhkRExFTkJRVUU3UVVGelFqZEVPenM3T3pzN1IwRk5SenRCUVVOSUxFMUJRVTBzVDBGQlowSXNVMEZIY0VJc1UwRkJVU3hKUVVGSk8wbEJORUpXT3pzN08wOUJTVWM3U1VGRFNDeFpRVUZ2UWl4TlFVRXlRaXhGUVVGWkxFdEJRV0U3VVVGRGNFVXNTMEZCU3l4RlFVRkZMRU5CUVVFN1VVRkVaMFFzVlVGQlN5eEhRVUZNTEV0QlFVc3NRMEZCVVR0UlFTOUNlRVU3TzFkQlJVYzdVVUZEU3l4WFFVRk5MRWRCUVZVc1JVRkJWeXhEUVVGQk8xRkJSVzVET3pzN1YwRkhSenRSUVVOTExIZENRVUZ0UWl4SFFVRkhMRXRCUVVzc1EwRkJRVHRSUVU5dVF6czdWMEZGUnp0UlFVTkxMR05CUVZNc1IwRkJSeXhMUVVGTExFTkJRVUU3VVVGblIzcENPenM3TzFkQlNVYzdVVUZEWVN4blFrRkJWeXhIUVVGSExFZEJRV2xDTEVWQlFVVTdPMWxCUXpkRExFbEJRVWs3WjBKQlEwRXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFVkJRVVU3YjBKQlEycENMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVRTdhVUpCUTJoRE8yZENRVVZFTEUxQlFVRXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpd3JRMEZCZGtJc1NVRkJTU3hGUVVGMVFqdG5Ra0ZGTTBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNUVUZCUVN4SlFVRkpMRU5CUVVNc2RVSkJRWFZDTEN0RFFVRTFRaXhKUVVGSkxFVkJRMEVzYTBKQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJWU3h2UWtGRGNFSXNTVUZCU1N4RFFVRkRMRXRCUVVzc1IwRkRha0k3WjBKQlJVUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUVR0aFFVTnVRenRaUVVGRExFOUJRVThzUjBGQldTeEZRVUZGTERCQ1FVRXdRaXhEUVVGRE8yZENRVU01UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEYUVNN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPenM3T3pzN096czdWMEZYUnp0UlFVTmhMRzFDUVVGakxFZEJRVWNzUTBGRE4wSXNTVUZCYVVJc1JVRkRha0lzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZEV2l4VFFVRlRMRWRCUVVjc1JVRkJSU3hGUVVOUUxFVkJRVVU3TzFsQlExUXNTVUZCU1N4SlFVRkpMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU53UWl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGRGFrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkRXQ3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVU5tTEZGQlFWRXNSVUZEVWl4VFFVRlRMRU5CUTFvc1EwRkJRVHRoUVVOS08xbEJSVVFzVFVGQlRTeExRVUZMTEVkQlFUWkNMRVZCUVVVc1JVRkRkRU1zVTBGQlV5eEhRVUUyUWl4RlFVRkZMRU5CUVVFN1dVRkZOVU1zUzBGQlN5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVN1owSkJRM0JDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFXdENMRU5CUVVNc1EwRkJRVHRuUWtGRE5VTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTERCRFFVRkhMRWRCUVd0Q0xFTkJRVU1zUTBGQlFUdGhRVU42UkR0WlFVVkVMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRVZCUVVVc1VVRkJVU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZCTzFGQlEyaEZMRU5CUVVNc1EwRkJRVHRSUVVWRU96czdPenRYUVV0SE8xRkJRMkVzWVVGQlVTeEhRVUZITEVOQlEzWkNMRWRCUVcxQ0xFVkJRMjVDTEhGQ1FVRnhRaXhIUVVGSExFbEJRVWtzUlVGRGFFSXNSVUZCUlRzN1dVRkRaQ3hKUVVGSk8yZENRVU5CTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8yOUNRVU5xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZCTzJsQ1FVTm9RenRuUWtGRlJDeE5RVUZCTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzSzBOQlFYaENMRWxCUVVrc1JVRkJkMEk3WjBKQlJUVkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUXpWQ0xFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVRTdhVUpCUTJoRU8yZENRVVZFTEVsQlFVa3NRMEZCUXl4VlFVRlZMSEZDUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUVR0blFrRkZiRU1zVFVGQlFTeEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xDdERRVUUxUWl4SlFVRkpMRVZCUTBFc2EwSkJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCVlN4dlFrRkRjRUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZEYWtJN1owSkJSVVFzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZCTzJkQ1FVVXZRaXhOUVVGTkxHVkJRV1VzUjBGRGFrSXNjVUpCUVhGQ0xFbEJRVWtzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRk8yOUNRVU5xUkN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdHZRa0ZEY0VJc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlFUdG5Ra0ZGYmtJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUVR0aFFVTm9RenRaUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTERCQ1FVRXdRaXhEUVVGRE8yZENRVU55UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEYUVNN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlJDeG5SVUZCWjBVN1VVRkRhRVU3T3pzN1YwRkpSenRSUVVOaExHMUNRVUZqTEVkQlFVY3NRMEZETjBJc1RVRkJiMElzUlVGRFVpeEZRVUZGT3p0WlFVTmtMRWxCUVVrN1owSkJRMEVzU1VGQlNTeE5RVUZOTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVOMFFpeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1EwRkJRVHRwUWtGRGRrSTdaMEpCUlVRc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNUVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZCTzJkQ1FVVXZRaXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc1NVRkJTU3hEUVVGQk8yZENRVVV2UWl4TlFVRkJMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNLME5CUVhaQ0xFbEJRVWtzUlVGQmRVSTdaMEpCUlROQ0xFbEJRVWtzVTBGQlV5eExRVUZMTEVsQlFVa3NSVUZCUlR0dlFrRkRjRUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRuUWtGRmNrTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVUU3WjBKQlEzSkNMRTFCUVVFc1NVRkJTU3hEUVVGRExHbENRVUZwUWl3clEwRkJkRUlzU1VGQlNTeEZRVUZ6UWp0blFrRkZNVUlzU1VGQlNTeFRRVUZUTEZsQlFWa3NTMEZCU3l4RlFVRkZPMjlDUVVNMVFpeE5RVUZOTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNRMEZCUXp0dlFrRkZiRVFzVTBGQmRVSXNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhMUVVGTExFVkJRVVVzUlVGQlJTeERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlFUdHZRa0ZGZUVVc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRVHRwUWtGRE5VTTdaMEpCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRVHRoUVVNM1F6dFpRVUZETEU5QlFVOHNSMEZCV1N4RlFVRkZMREJDUVVFd1FpeERRVUZETzJkQ1FVTTVReXhQUVVGUExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRhRU03VVVGRFRDeERRVUZETEVOQlFVRTdVVUZGUkRzN08xZEJSMGM3VVVGRFlTeFZRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJRVHRSUVVVelF6czdPMWRCUjBjN1VVRkRZU3h4UWtGQlowSXNSMEZCUnl4SFFVRlRMRVZCUVVVN08xbEJRekZETEVsQlFVazdaMEpCUTBFc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVDBGQlRUdHBRa0ZEVkR0blFrRkZSQ3hOUVVGQkxFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc0swTkJRWHBDTEVsQlFVa3NSVUZCZVVJN1owSkJSVGRDTEVsQlFVa3NRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVFN1owSkJSWFpETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJRVHRuUWtGRGRFSXNTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVUU3WVVGRGVrSTdXVUZCUXl4UFFVRlBMRWRCUVZrc1JVRkJSU3d3UWtGQk1FSXNRMEZCUXp0blFrRkRPVU1zU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRoUVVONlFqdFJRVVZNTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3VjBGSFJ6dFJRVU5oTEZsQlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVOQlFVRTdVVUZETDBNc0swUkJRU3RFTzFGQlJTOUVPenM3VjBGSFJ6dFJRVU5MTEc5Q1FVRmxMRWRCUVVjc1IwRkJVeXhGUVVGRk8xbEJRMnBETEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlF6VkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGFFUTdXVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTzJkQ1FVTTFRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RlFVRkZPMjlDUVVONFFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkJPMmxDUVVOdVJEdGhRVU5LTzFGQlEwd3NRMEZCUXl4RFFVRkJPMUZCUlVRN096dFhRVWRITzFGQlEwc3NaMEpCUVZjc1IwRkJSeXhIUVVGbExFVkJRVVU3V1VGRGJrTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGQk8xbEJSWFJDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGQk8xRkJRM2hDTEVOQlFVTXNRMEZCUVR0UlFVZEVPenM3TzFkQlNVYzdVVUZEU3l4WlFVRlBMRWRCUVVjc1EwRkJReXhsUVVFMFFpeEZRVUZSTEVWQlFVVTdPMWxCUTNKRUxFbEJRVWtzWlVGQlpTeFpRVUZaTEV0QlFVc3NSVUZCUlR0blFrRkRiRU1zUzBGQlN5eE5RVUZOTEU5QlFVOHNTVUZCU1N4bFFVRmxMRVZCUVVVN2IwSkJRMjVETEUxQlFVRXNTVUZCU1N4RFFVRkRMRTlCUVU4c01FTkJRVVVzVjBGQlZ5eERRVUZETEU5QlFVOHNSVUZCUXp0cFFrRkRja003WVVGRFNqdHBRa0ZCVFN4SlFVRkpMR1ZCUVdVc1JVRkJSVHRuUWtGRGVFSXNUVUZCUVN4SlFVRkpMRU5CUVVNc1QwRkJUeXd3UTBGQlJTeFhRVUZYTEVOQlFVTXNaVUZCWlN4RlFVRkRPMkZCUXpkRE8xbEJSVVFzU1VGQlNTeGxRVUZsTEVWQlFVVTdaMEpCUTJwQ0xFMUJRVUVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXdyUTBGQmRrSXNTVUZCU1N4RlFVRjFRanRoUVVNNVFqdFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVlBMR2xDUVVGWkxFZEJRVWNzUTBGQlF5eEhRVUZaTEVWQlFWTXNSVUZCUlR0WlFVTXpReXhKUVVGSkxFZEJRVWNzV1VGQldTeExRVUZMTEVWQlFVVTdaMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdG5Ra0ZGTTBJc1QwRkJUeXhIUVVGWkxFTkJRVUU3WVVGRGRFSTdXVUZGUkN4TlFVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJRVHRaUVVWd1F5eEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdXVUZGTjBJc1QwRkJUeXhMUVVGTExFTkJRVUU3VVVGRGFFSXNRMEZCUXl4RFFVRkJPMUZCZGxWSExFbEJRVWtzVFVGQlRTeExRVUZMTEVsQlFVa3NSVUZCUlR0WlFVTnFRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEcxRVFVRnRSQ3hEUVVGRExFTkJRVUU3VTBGRGRrVTdVVUZGUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlFUdEpRVU42UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwZ3NTVUZCVnl4UlFVRlJPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZCTzBsQlEzSkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRmpMRXRCUVVzN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVRTdTVUZEZEVJc1EwRkJRenRKUVVWRU96czdPMDlCU1VjN1NVRkRTQ3hKUVVGakxFdEJRVXNzUTBGQlJTeEhRVUZWTzFGQlF6TkNMRWxCUVVrc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZPMWxCUXpGQ0xFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkRiRUlzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlF6RkRMRU5CUVVFN1dVRkRSQ3hKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMU5CUTNKQ08yRkJRVTA3V1VGRFNDeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJRVHRaUVVOcVFpeEpRVUZKTEVOQlFVTXNiVUpCUVcxQ0xFZEJRVWNzU1VGQlNTeERRVUZCTzFOQlEyeERPMGxCUTB3c1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1VVRkJVVHRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUVR0SlFVTnlRaXhEUVVGRE8wbEJSVVE3T3pzN1QwRkpSenRKUVVOSUxFbEJRVmNzVFVGQlRTeERRVUZGTEU5QlFXZERPMUZCUXk5RExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkJPMGxCUXpGQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTQ3hKUVVGWExFMUJRVTA3VVVGRFlpeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVFN1NVRkRka0lzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVVVGQlVUdFJRVU5tTEU5QlFVOHNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJRVHRKUVVONlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQlZ5eFRRVUZUTzFGQlEyaENMRTlCUVU4c1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlFUdEpRVU14UWl4RFFVRkRPME5CTUZCS08wRkJSVVFzWlVGQlpTeFRRVUZUTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG5leHBvcnQgY29uc3QgRnJhZ21lbnQgPSAoXywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGJpbmRDaGlsZHJlbihkb2N1bWVudEZyYWdtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGRvY3VtZW50RnJhZ21lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgRnJhZ21lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labkpoWjIxbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12Wm5KaFoyMWxiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wZEJVVWM3UVVGRFNDd3lRa0ZCTWtJN1FVRkRNMElzYVVOQlFXbERPMEZCUldwRExFOUJRVThzUlVGRlNDeFpRVUZaTEVWQlEyWXNUVUZCVFN3clFrRkJLMElzUTBGQlFUdEJRVVYwUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGRGNFSXNRMEZCVlN4RlFVTldMRWRCUVVjc1VVRkJNa0lzUlVGRFpDeEZRVUZGTzBsQlEyeENMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NVVUZCVVN4RFFVRkRMSE5DUVVGelFpeEZRVUZGTEVOQlFVRTdTVUZGTVVRc1dVRkJXU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGQk8wbEJSWGhETEU5QlFVOHNaMEpCUVdkQ0xFTkJRVUU3UVVGRE0wSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaU3hSUVVGUkxFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlIG1haW4gZGVzdGFnbmF0ZSBjbGFzc1xuICogQGZpbGUgbWFpbiBmaWxlIGZvciBkZXN0YWduYXRlXG4gKiBAcHJlc2VydmVcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0ICogYXMgX0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50TlMgZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlUmVmIGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuaW1wb3J0ICogYXMgX0ZyYWdtZW50IGZyb20gXCIuL2ZyYWdtZW50XCI7XG5leHBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmV4cG9ydCB7IGNyZWF0ZVJlZiB9IGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnROUyB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnROU1wiO1xuZXhwb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwiLi9mcmFnbWVudFwiO1xuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCB2YXIgRGVTdGFnbmF0ZTtcbihmdW5jdGlvbiAoRGVTdGFnbmF0ZSkge1xuICAgIERlU3RhZ25hdGUuQ29tcG9uZW50ID0gX0NvbXBvbmVudC5Db21wb25lbnQ7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVSZWYgPSBfQ3JlYXRlUmVmLmNyZWF0ZVJlZjtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnQgPSBfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlRWxlbWVudE5TID0gX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlM7XG4gICAgRGVTdGFnbmF0ZS5GcmFnbWVudCA9IF9GcmFnbWVudC5GcmFnbWVudDtcbn0pKERlU3RhZ25hdGUgfHwgKERlU3RhZ25hdGUgPSB7fSkpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuZXhwb3J0IGRlZmF1bHQgRGVTdGFnbmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdSMEZWUnp0QlFVTklMREpDUVVFeVFqdEJRVU16UWl4cFEwRkJhVU03UVVGRmFrTXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMR05CUVdNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUVR0QlFVTnFSQ3hQUVVGUExFdEJRVXNzWjBKQlFXZENMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEY2tRc1QwRkJUeXhMUVVGTExGVkJRVlVzVFVGQlRTeGhRVUZoTEVOQlFVRTdRVUZEZWtNc1QwRkJUeXhMUVVGTExGTkJRVk1zVFVGQlRTeFpRVUZaTEVOQlFVRTdRVUZGZGtNc1QwRkJUeXhGUVVGRExGTkJRVk1zUlVGQlF5eE5RVUZOTEdGQlFXRXNRMEZCUVR0QlFVTnlReXhQUVVGUExFVkJRVTBzVTBGQlV5eEZRVUZETEUxQlFVMHNZVUZCWVN4RFFVRkJPMEZCUXpGRExFOUJRVThzUlVGQlF5eGhRVUZoTEVWQlFVTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU0zUXl4UFFVRlBMRVZCUVVNc1pVRkJaU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkRha1FzVDBGQlR5eEZRVUZETEZGQlFWRXNSVUZCUXl4TlFVRk5MRmxCUVZrc1EwRkJRVHRCUVVWdVF5eHZRa0ZCYjBJN1FVRkRjRUlzVFVGQlRTeExRVUZYTEZWQlFWVXNRMEZQTVVJN1FVRlFSQ3hYUVVGcFFpeFZRVUZWTzBsQlExUXNiMEpCUVZNc1IwRkJTU3hWUVVGVkxGVkJRV1FzUTBGQll6dEpRVU4yUWl4dlFrRkJVeXhIUVVGSkxGVkJRVlVzVlVGQlpDeERRVUZqTzBsQlJYWkNMSGRDUVVGaExFZEJRVWtzWTBGQll5eGpRVUZzUWl4RFFVRnJRanRKUVVNdlFpd3dRa0ZCWlN4SFFVRkpMR2RDUVVGblFpeG5Ra0ZCY0VJc1EwRkJiMEk3U1VGRGJrTXNiVUpCUVZFc1IwRkJTU3hUUVVGVExGTkJRV0lzUTBGQllUdEJRVU4yUXl4RFFVRkRMRVZCVUdkQ0xGVkJRVlVzUzBGQlZpeFZRVUZWTEZGQlR6RkNPMEZCUTBRc2JVSkJRVzFDTzBGQlJXNUNMR1ZCUVdVc1ZVRkJWU3hEUVVGQkluMD0iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnQiLCJfY3JlYXRlRWxlbWVudE5TIiwiX2NyZWF0ZVJlZiIsIkJhc2VDb21wb25lbnQiLCJCYXNlIiwiX0NvbXBvbmVudC5Db21wb25lbnQiLCJfQ3JlYXRlUmVmLmNyZWF0ZVJlZiIsIl9DcmVhdGVFbGVtZW50LmNyZWF0ZUVsZW1lbnQiLCJfQ3JlYXRlRWxlbWVudE5TLmNyZWF0ZUVsZW1lbnROUyIsIl9GcmFnbWVudC5GcmFnbWVudCIs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
