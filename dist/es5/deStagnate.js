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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3ByaXZhdGUvX3VybC5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudC5qcyIsIi4uLy4uL2xpYi9jcmVhdGVFbGVtZW50TlMuanMiLCIuLi8uLi9saWIvY3JlYXRlUmVmLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2Jhc2UuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fZXZlbnRzLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvdXRpbHMuanMiLCIuLi8uLi9saWIvY29tcG9uZW50LmpzIiwiLi4vLi4vbGliL2ZyYWdtZW50LmpzIiwiLi4vLi4vbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCB1cmwgPSBcImh0dHBzOi8vbHVrZS16aGFuZy0wNC5naXRodWIuaW8vRGVTdGFnbmF0ZS9lcnJvci1jb2Rlc1wiO1xuZXhwb3J0IGRlZmF1bHQgdXJsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDNWeWJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5MWNtd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEhkRVFVRjNSQ3hEUVVGQk8wRkJSVE5GTEdWQlFXVXNSMEZCUnl4RFFVRkJJbjA9IiwiLyoqXG4gKiBDb21wb25lbnRcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGZpbGUgc2hhcmUgZnVuY3Rpb25zIGFuZCB0eXBlcyBmb3IgY3JlYXRlRWxlbWVudCBhbmQgaXQncyB2YXJpYW50c1xuICovXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL191cmxcIjtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyB0byBiaW5kIHdpdGhcbiAqIEBwYXJhbSBucyAtIGlmIG5hbWVzcGFjZSBlbGVtZW50XG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kUHJvcHMgPSAoZWxlbWVudCwgcHJvcHMsIG5zID0gZmFsc2UpID0+IHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHByb3BzKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiaW5uZXJIVE1MXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSB2YWwudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGVOUyhudWxsLCBrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleS5zbGljZSgwLCAyKSA9PT0gXCJvblwiKSB7IC8vIFdvcmtzIHN1Y2ggYXMgb25DbGljaywgb25BbmltYXRpb25FbmQsIGV0Yy5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh2YWwpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGtleS5zbGljZSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksIHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoa2V5ID09PSBcInJlZlwiICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mICh2YWwpID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICAgICAgXCJjdXJyZW50XCIgaW4gdmFsKSB7XG4gICAgICAgICAgICAgICAgdmFsLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7dHlwZW9mIHZhbH0gaXMgbm90IGEgdmFsaWQgRGVTdGFnbmF0ZSBjaGlsZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogQmluZHMgY2hpbGRyZW4gdG8gZWxlbWVudFxuICogQHBhY2thZ2VcbiAqIEBwYXJhbSBlbGVtZW50IC0gZWxlbWVudCB0byBiaW5kXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiB0byBiaW5kIHdpdGhcbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRDaGlsZHJlbiA9IChlbGVtZW50LCBjaGlsZHJlbikgPT4ge1xuICAgIGlmIChjaGlsZHJlbiAhPT0gbnVsbCAmJiBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gKGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZHJlbi50b1N0cmluZygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4uZGlkTW91bnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLm1vdW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5wYXJlbnQgIT09IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5wYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hpbGRyZW4uZm9yY2VVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyTnlaV0YwWlVWc1pXMWxiblJWZEdsc2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5amNtVmhkR1ZGYkdWdFpXNTBWWFJwYkhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVTBGQlV5eEZRVUZETEUxQlFVMHNZMEZCWXl4RFFVRkJPMEZCUlhSRExFOUJRVThzUjBGQlJ5eE5RVUZOTEZGQlFWRXNRMEZCUVR0QlFYbEZlRUk3T3pzN096czdSMEZQUnp0QlFVTklMRTFCUVUwc1EwRkJReXhOUVVGTkxGTkJRVk1zUjBGQlJ5eERRVU55UWl4UFFVRm5RaXhGUVVOb1FpeExRVUY1UWl4RlFVTjZRaXhGUVVGRkxFZEJRVWNzUzBGQlN5eEZRVU5PTEVWQlFVVTdTVUZEVGl4SlFVRkpMRXRCUVVzc1JVRkJSVHRSUVVOUUxFdEJRVXNzVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZPMWxCUXpWRExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4SlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExGRkJRVkVzUlVGQlJUdG5Ra0ZEY0VRc1NVRkJTU3hIUVVGSExFdEJRVXNzVjBGQlZ5eEZRVUZGTzI5Q1FVTnlRaXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRVHRwUWtGRGNrTTdjVUpCUVUwc1NVRkJTU3hGUVVGRkxFVkJRVVU3YjBKQlExZ3NUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGQk8ybENRVU53UkR0eFFrRkJUVHR2UWtGRFNDeFBRVUZQTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTXNRMEZCUVR0cFFrRkROVU03WVVGRFNqdHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxMRWxCUVVrc1JVRkJSU3hGUVVGRkxEaERRVUU0UXp0blFrRkRha1lzU1VGQlNTeFBRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1ZVRkJWU3hGUVVGRk8yOUNRVU0xUWl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlEzQkNMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETzNsQ1FVTlFMRmRCUVZjc1JVRkJiMElzUlVGRGNFTXNSMEZCWjBJc1EwRkRia0lzUTBGQlFUdHBRa0ZEU2p0aFFVTktPMmxDUVVGTkxFbEJRMGdzUjBGQlJ5eExRVUZMTEV0QlFVczdaMEpCUTJJc1QwRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEZGQlFWRTdaMEpCUTNoQ0xGTkJRVk1zU1VGQlNTeEhRVUZITEVWQlEyeENPMmRDUVVOSExFZEJRVzlDTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNeFF6dHBRa0ZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVVU3WjBKQlF6RkNMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eFBRVUZQTEVkQlFVY3NhME5CUVd0RExFTkJRVU1zUTBGQlFUdGhRVU5vUlR0VFFVTktPMHRCUTBvN1FVRkRUQ3hEUVVGRExFTkJRVUU3UVVGRlJEczdPenM3TzBkQlRVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3haUVVGWkxFZEJRVWNzUTBGRGVFSXNUMEZCWVN4RlFVTmlMRkZCUVhWQ0xFVkJRMjVDTEVWQlFVVTdTVUZEVGl4SlFVRkpMRkZCUVZFc1MwRkJTeXhKUVVGSkxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTTNReXhKUVVGSkxGRkJRVkVzV1VGQldTeExRVUZMTEVWQlFVVTdXVUZETTBJc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFXMUNMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRM1JETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJReTlDTEVOQlFVTXNRMEZCUVR0VFFVTk1PMkZCUVUwc1NVRkRTQ3hQUVVGUExGRkJRVkVzUzBGQlN5eFJRVUZSTzFsQlF6VkNMRTlCUVU4c1VVRkJVU3hMUVVGTExGRkJRVkVzUlVGRE9VSTdXVUZEUlN4UFFVRlBMRU5CUVVNc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlFUdFRRVU53UlR0aFFVRk5MRWxCUVVrc1VVRkJVU3haUVVGWkxGTkJRVk1zUlVGQlJUdFpRVU4wUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExGRkJRVkVzU1VGQlNTeFBRVUZQTEZsQlFWa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSVHRuUWtGRE4wUXNVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlFUdG5Ra0ZGZGtJc1QwRkJUVHRoUVVOVU8ybENRVUZOTEVsQlFVa3NRMEZCUXl4RFFVRkRMRTlCUVU4c1dVRkJXU3hOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVTdaMEpCUTJwRUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjMEpCUVhOQ0xFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVRTdZVUZETDBNN1dVRkZSQ3hKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEV0QlFVc3NUMEZCVHl4RlFVRkZPMmRDUVVNM1FpeFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJRVHRoUVVNMVFqdFpRVVZFTEZGQlFWRXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRVHRUUVVONlFqdGhRVUZOTzFsQlEwZ3NUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlFUdFRRVU5vUXp0TFFVTktPMEZCUTB3c1EwRkJReXhEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcyB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKlxuICogQHBhcmFtIHRhZ05hbWVPckNvbXBvbmVudCAtIG5hbWUgb2YgSFRNTCBlbGVtZW50IG9yIGZ1bmN0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgb2YgZWxlbWVudCBvciBjb21wb25lbnRcbiAqIDEuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIHRhZ25hbWUsIHByb3BzIGFyZSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIDIuIElmIGB0YWdOYW1lT3JDb21wb25lbnRgIGlzIGEgZnVuY3Rpb24sIHByb3BzIGFyZSB0aGF0IGZ1bmN0aW9ucyBwYXJhbWV0ZXJzXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuQXJncyAtIHJlc3QgcGFyYW1ldGVyIGZvciBjaGlsZHJlblxuICogQHJldHVybnMgZWxlbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQsIHByb3BzLCAuLi5jaGlsZHJlbikge1xuICAgIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50KTtcbiAgICAgICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB0YWdOYW1lT3JDb21wb25lbnQocHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgcmV0dXJuIEVycm9yKFwidGFnTmFtZU9yQ29tcG9uZW50IGlzIG9mIGludmFsaWQgdHlwZS5cIik7XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlqY21WaGRHVkZiR1Z0Wlc1MExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenRIUVZGSE8wRkJRMGdzTWtKQlFUSkNPMEZCUXpOQ0xHbERRVUZwUXp0QlFVVnFReXhQUVVGUExFVkJSMGdzV1VGQldTeEZRVU5hTEZOQlFWTXNSVUZEV2l4TlFVRk5MQ3RDUVVFclFpeERRVUZCTzBGQmMwTjBRenM3T3pzN096czdPMGRCVTBjN1FVRkRTQ3hOUVVGTkxGVkJRVlVzWVVGQllTeERRVWw2UWl4clFrRkhXU3hGUVVOYUxFdEJRVFpDTEVWQlF6ZENMRWRCUVVjc1VVRkJNa0k3U1VGRk9VSXNTVUZCU1N4UFFVRk5MRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTMEZCU3l4UlFVRlJMRVZCUVVVN1VVRkRla01zVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkJPMUZCUlRGRUxGTkJRVk1zUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCTUVJc1EwRkJReXhEUVVGQk8xRkJSVGxETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3VVVGRkwwSXNUMEZCVHl4UFFVRlBMRU5CUVVFN1MwRkRha0k3VTBGQlRTeEpRVUZKTEU5QlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eExRVUZMTEZWQlFWVXNSVUZCUlR0UlFVTnNSQ3hQUVVGUExHdENRVUZyUWl4RFFVRkRMRXRCUVZVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdExRVU5zUkR0SlFVVkVMRTlCUVU4c1MwRkJTeXhEUVVGRExIZERRVUYzUXl4RFFVRkRMRU5CUVVFN1FVRkRNVVFzUTBGQlF6dEJRVVZFTEdWQlFXVXNZVUZCWVN4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnROUyBjcmVhdGVFbGVtZW50IGZvciBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gKi9cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqIENyZWF0ZXMgYSBjaGlsZCBlbGVtZW50IHRvIGRlU3RhZ25hdGVcbiAqIEBwYXJhbSBuYW1lc3BhY2VVUkkgLSBuYW1lc3BhY2UgdXJpXG4gKiBAcGFyYW0gdGFnTmFtZSAtIG5hbWUgb2YgSFRNTCBlbGVtZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXMsIHN1Y2ggYXMgY2xhc3MsIGlubmVySFRNTCwgaWQsIHN0eWxlLCBldGNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5SZXN0IC0gcmVzdCBwYXJhbWV0ZXIgb2YgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGh0bWwgZWxlbWVudFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudE5TID0gKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSwgcHJvcHMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2VVUkksIHRhZ05hbWUpO1xuICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcywgdHJ1ZSk7XG4gICAgYmluZENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50TlM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEU1VExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpVVnNaVzFsYm5ST1V5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJTEU5QlFVOHNSVUZGU0N4WlFVRlpMRVZCUTFvc1UwRkJVeXhGUVVOYUxFMUJRVTBzSzBKQlFTdENMRU5CUVVFN1FVRkZkRU03T3pzN096czdPMGRCVVVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeGxRVUZsTEVkQlFVY3NRMEZETTBJc1dVRkJLMGNzUlVGREwwY3NUMEZCTUVNc1JVRkRNVU1zUzBGQmQwTXNSVUZEZUVNc1IwRkJSeXhSUVVFeVFpeEZRVU4yUWl4RlFVRkZPMGxCUTFRc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVUU3U1VGRkwwUXNVMEZCVXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVRTdTVUZGTDBJc1dVRkJXU3hEUVVGRExFOUJRVThzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0SlFVVXZRaXhQUVVGUExFOUJRVThzUTBGQlFUdEJRVU5zUWl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbExHVkJRV1VzUTBGQlFTSjkiLCIvKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlUmVmID0gKCkgPT4gKHtcbiAgICBjdXJyZW50OiBudWxsLFxufSk7XG4vKipcbiAqIENyZWF0ZXMgYSByZWZlcmVuY2UgZm9yIGEgbmVzdGVkIGNvbXBvbmVudFxuICogQHJldHVybnMgZW1wdHkgcmVmIG9iamVjdFxuICovXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFVtVm1MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVkpsWmk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRmxRVHM3TzBkQlIwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hUUVVGVExFZEJRVWNzUjBGQmQwTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1VzVDBGQlR5eEZRVUZGTEVsQlFVazdRMEZEYUVJc1EwRkJReXhEUVVGQk8wRkJSVVk3T3p0SFFVZEhPMEZCUTBnc1pVRkJaU3hUUVVGVExFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBQcmVzZXQgLSBiYXNlIGZvciBhIGNvbXBvbmVudFxuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVSZWYgfSBmcm9tIFwiLi4vY3JlYXRlUmVmXCI7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVzZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuICAgICAgICB0aGlzLmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiBjb21wb25lbnQgY2F0Y2hlcyBlcnJvci4gRGVmYXVsdCBiZWhhdmlvdXIgaXMgY29uc29sZS5lcnJvclxuICAgICAgICAgKiBAcGFyYW0gZXJyb3IgLSBlcnJvciBvYmplY3Qgd2l0aCBpbmZvXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIGJlZm9yZSBjb21wb25lbnQgaXMgdXBkYXRlZFxuICAgICAgICAgKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZS9yZS1yZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcmluZyBIVE1MLCBtdXN0IGJlIHBhcnQgb2YgZXh0ZW5kZWQgY2xhc3NcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEByZXR1cm5zIGlmIHJldHVybnMgbnVsbCBlcnJvciB3aWxsIGJlIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBudWxsO1xuICAgIH1cbn1cblByZXNldC5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG5QcmVzZXQuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcblByZXNldC5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5ZlltRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN08wZEJVMGM3UVVGRlNDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMR05CUVdNc1JVRkJReXhOUVVGTkxHdENRVUZyUWl4RFFVRkJPMEZCUXpGRUxFOUJRVThzUlVGQlF5eFBRVUZQTEVsQlFVa3NaMEpCUVdkQ0xFVkJRVU1zVFVGQlRTeHZRa0ZCYjBJc1EwRkJRVHRCUVVNNVJDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMRlZCUVZVc1JVRkJReXhOUVVGTkxHTkJRV01zUTBGQlFUdEJRV2xEYkVRc01FSkJRVEJDTzBGQlF6RkNPenRIUVVWSE8wRkJRMGdzVFVGQlRTeFBRVUZuUWl4TlFVRk5PMGxCUVRWQ08xRkJVVzlDTEd0Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8xRkJSVGxDTEc5Q1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdVVUZGYkVNc1kwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlFUdFJRVVYwUXpzN096dFhRVWxITzFGQlEwa3NjMEpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZaTEVWQlFWRXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdVVUZGZGtVN096dFhRVWRITzFGQlEwa3NNRUpCUVhGQ0xFZEJRVWNzUjBGQldTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkJPMUZCUld4RU96czdPenM3VjBGTlJ6dFJRVU5oTEZkQlFVMHNSMEZCUnl4SFFVRmxMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVUU3U1VGRmJrUXNRMEZCUXpzN1FVRnNRekJDTEc5Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8wRkJSVGxDTEhOQ1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdRVUZGYkVNc1owSkJRVk1zUjBGQlJ5eFZRVUZWTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIEV2ZW50c1xuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgUHJlc2V0IGFzIEJhc2VDb21wb25lbnQgfSBmcm9tIFwiLi9fYmFzZVwiO1xuY29uc3QgZXZlbnROYW1lcyA9IFtcbiAgICBcIm9uRm9jdXNcIixcbiAgICBcIm9uQmx1clwiLFxuICAgIFwib25Gb2N1c0luXCIsXG4gICAgXCJvbkZvY3VzT3V0XCIsXG4gICAgXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG4gICAgXCJvbkFuaW1hdGlvbkNhbmNlbFwiLFxuICAgIFwib25BbmltYXRpb25FbmRcIixcbiAgICBcIm9uQW5pbWF0aW9uSXRlcmF0aW9uXCIsXG4gICAgXCJvblRyYW5zaXRpb25TdGFydFwiLFxuICAgIFwib25UcmFuc2l0aW9uQ2FuY2VsXCIsXG4gICAgXCJvblRyYW5zaXRpb25FbmRcIixcbiAgICBcIm9uVHJhbnNpdGlvblJ1blwiLFxuICAgIFwib25BdXhDbGlja1wiLFxuICAgIFwib25DbGlja1wiLFxuICAgIFwib25EYmxDbGlja1wiLFxuICAgIFwib25Nb3VzZURvd25cIixcbiAgICBcIm9uTW91c2VFbnRlclwiLFxuICAgIFwib25Nb3VzZUxlYXZlXCIsXG4gICAgXCJvbk1vdXNlTW92ZVwiLFxuICAgIFwib25Nb3VzZU92ZXJcIixcbiAgICBcIm9uTW91c2VPdXRcIixcbiAgICBcIm9uTW91c2VVcFwiLFxuXTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgY2xhc3MgRXZlbnRzIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMgZXZlbnRcbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIGV2ZW50IGxpc3RlbmVycyBldmVudFxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIgPSAoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudE5hbWUgb2YgZXZlbnROYW1lcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWxFdmVudE5hbWUgPSBldmVudE5hbWUuc2xpY2UoMikudG9Mb3dlckNhc2UoKSwgY2FsbGJhY2sgPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICE9PSB1bmRlZmluZWQgJiYgY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyKGh0bWxFdmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJWMlpXNTBjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWxkbVZ1ZEhNdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenRIUVZOSE8wRkJSVWdzVDBGQlR5eEZRVUZETEUxQlFVMHNTVUZCU1N4aFFVRmhMRVZCUVVNc1RVRkJUU3hUUVVGVExFTkJRVUU3UVVFclNDOURMRTFCUVUwc1ZVRkJWU3hIUVVGeFFqdEpRVU5xUXl4VFFVRlRPMGxCUTFRc1VVRkJVVHRKUVVOU0xGZEJRVmM3U1VGRFdDeFpRVUZaTzBsQlExb3NhMEpCUVd0Q08wbEJRMnhDTEcxQ1FVRnRRanRKUVVOdVFpeG5Ra0ZCWjBJN1NVRkRhRUlzYzBKQlFYTkNPMGxCUTNSQ0xHMUNRVUZ0UWp0SlFVTnVRaXh2UWtGQmIwSTdTVUZEY0VJc2FVSkJRV2xDTzBsQlEycENMR2xDUVVGcFFqdEpRVU5xUWl4WlFVRlpPMGxCUTFvc1UwRkJVenRKUVVOVUxGbEJRVms3U1VGRFdpeGhRVUZoTzBsQlEySXNZMEZCWXp0SlFVTmtMR05CUVdNN1NVRkRaQ3hoUVVGaE8wbEJRMklzWVVGQllUdEpRVU5pTEZsQlFWazdTVUZEV2l4WFFVRlhPME5CUTJRc1EwRkJRVHRCUVVWRUxEQkNRVUV3UWp0QlFVTXhRaXhOUVVGTkxFOUJRV2RDTEUxQlFVOHNVMEZCVVN4aFFVRmhPMGxCUVd4RU96dFJRVVZKT3pzN08xZEJTVWM3VVVGRFowSXNkVUpCUVd0Q0xFZEJRVWNzUTBGQlF5eFBRVUZ2UWl4RlFVRlJMRVZCUVVVN1dVRkRia1VzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUVR0UlFVTnFSQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPenRYUVVsSE8xRkJRMmRDTEhsQ1FVRnZRaXhIUVVGSExFTkJRVU1zVDBGQmIwSXNSVUZCVVN4RlFVRkZPMWxCUTNKRkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVTXNUMEZCVHl4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVOQlFVRTdVVUZEY0VRc1EwRkJReXhEUVVGQk8xRkJSVThzYlVKQlFXTXNSMEZCUnl4RFFVRkRMR0ZCUVRSQ0xFVkJRVkVzUlVGQlJUdFpRVU0xUkN4TFFVRkxMRTFCUVUwc1UwRkJVeXhKUVVGSkxGVkJRVlVzUlVGQlJUdG5Ra0ZEYUVNc1RVRkJUU3hoUVVGaExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVVzUlVGRGJFUXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlFUdG5Ra0ZGT1VJc1NVRkJTU3hSUVVGUkxFdEJRVXNzVTBGQlV5eEpRVUZKTEZGQlFWRXNXVUZCV1N4UlFVRlJMRVZCUVVVN2IwSkJRM2hFTEdGQlFXRXNRMEZEVkN4aFFVRmhMRVZCUTJJc1VVRkJPRU1zUTBGRGFrUXNRMEZCUVR0cFFrRkRTanRoUVVOS08xRkJRMHdzUTBGQlF5eERRVUZCTzBsQlJVd3NRMEZCUXp0RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIFV0aWxzIC0gdXRpbGl0aWVzIGZvciBEZVN0YWduYXRlXG4gKi9cbi8qKlxuICogQ2hlY2tzIGlmIHZhbDEgYW5kIHZhbDIgYXJlIGVxdWFsXG4gKiBAcGFyYW0gdmFsMSAtIHZhbHVlIHRvIGNoZWNrIGZvciBlcXVhbGl0eVxuICogQHBhcmFtIHZhbDIgLSB2YWx1ZSB0byBjb21wYXJlIGFnYWluc3QgdmFsMVxuICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aCBpc1xuICogcmVhY2hlZCwgdGhlIHR3byB2YWx1ZXMgYXJlIHNpbXBseSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIC0gbWF4IGxlbmd0aCBvZiBhcnJheSB0byBjcmF3bC4gSWYgbWF4IGxlbnRoIGlzIHJlYWNoZWQsIHR3b1xuICogYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAqIEByZXR1cm5zIGB2YWwxID09PSB2YWwyYFxuICovXG5leHBvcnQgY29uc3QgaXNFcXVhbCA9ICh2YWwxLCB2YWwyLCBtYXhEZXB0aCA9IDMsIG1heExlbmd0aCA9IDEwKSA9PiB7XG4gICAgaWYgKG1heERlcHRoID09PSAwKSB7IC8vIElmIG1heERlcHRoIHJlYWNoZWQsIGp1c3QgcnVuID09PVxuICAgICAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbDEgIT09IHR5cGVvZiB2YWwyKSB7IC8vIElmIHRoZXkgYXJlbid0IHRoZSBzYW1lIHR5cGUsIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwxIGluc3RhbmNlb2YgQXJyYXkgJiYgdmFsMiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGlmICh2YWwxLmxlbmd0aCAhPT0gdmFsMi5sZW5ndGgpIHsgLy8gSWYgYXJyYXlzIGhhdmUgZGlmZmVyZW50IGxlbmd0aHNcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWwxLmxlbmd0aCA+IG1heExlbmd0aCB8fCB2YWwyLmxlbmd0aCA+IG1heExlbmd0aCkgeyAvLyBJZiBhcnJheSBpcyB0b28gYmlnXG4gICAgICAgICAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmFsMS5sZW5ndGg7IGluZGV4KyspIHsgLy8gR28gdGhyb3VnaCBlYWNoIGl0ZW1cbiAgICAgICAgICAgIGlmICghaXNFcXVhbCh2YWwxW2luZGV4XSwgdmFsMltpbmRleF0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBUZXN0IGlmIHR3byBhcnJheSBpdGVtcyBhcmUgZXF1YWxcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbDEgaW5zdGFuY2VvZiBPYmplY3QgJiYgdmFsMiBpbnN0YW5jZW9mIE9iamVjdCkgeyAvLyBJZiBvYmplY3RcbiAgICAgICAgaWYgKCFpc0VxdWFsKE9iamVjdC5rZXlzKHZhbDEpLCBPYmplY3Qua2V5cyh2YWwyKSwgbWF4RGVwdGggLSAxLCBtYXhMZW5ndGgpKSB7IC8vIElmIHRoZXkgZG9uJ3QgaGF2ZSBoZSBzYW1lIGtleXNcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh2YWwxKSkgeyAvLyBHbyB0aHJvdWdoIGFuZCB0ZXN0IGVhY2ggdmFsdWVcbiAgICAgICAgICAgIGlmICghaXNFcXVhbCh2YWwxW2tleV0sIHZhbDJba2V5XSwgbWF4RGVwdGggLSAxLCBtYXhMZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbn07XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaXNFcXVhbCxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkhNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Y0hKcGRtRjBaUzkxZEdsc2N5NTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3UjBGUlJ6dEJRVVZJT3pzN096czdPenM3UjBGVFJ6dEJRVU5JTEUxQlFVMHNRMEZCUXl4TlFVRk5MRTlCUVU4c1IwRkJSeXhEUVVOdVFpeEpRVUZoTEVWQlEySXNTVUZCWVN4RlFVTmlMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eEhRVUZITEVWQlFVVXNSVUZEVUN4RlFVRkZPMGxCUTFRc1NVRkJTU3hSUVVGUkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVWQlFVVXNiME5CUVc5RE8xRkJRM1JFTEU5QlFVOHNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRVHRMUVVOMlFqdFRRVUZOTEVsQlFVa3NUMEZCVHl4SlFVRkpMRXRCUVVzc1QwRkJUeXhKUVVGSkxFVkJRVVVzUlVGQlJTdzJRMEZCTmtNN1VVRkRia1lzVDBGQlR5eExRVUZMTEVOQlFVRTdTMEZEWmp0SlFVVkVMRWxCUVVrc1NVRkJTU3haUVVGWkxFdEJRVXNzU1VGQlNTeEpRVUZKTEZsQlFWa3NTMEZCU3l4RlFVRkZPMUZCUTJoRUxFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzYlVOQlFXMURPMWxCUTJ4RkxFOUJRVThzUzBGQlN5eERRVUZCTzFOQlEyWTdZVUZCVFN4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVTBGQlV5eEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhGUVVGRkxFVkJRVVVzYzBKQlFYTkNPMWxCUTI1R0xFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0VFFVTjJRanRSUVVWRUxFdEJRVXNzU1VGQlNTeExRVUZMTEVkQlFVY3NRMEZCUXl4RlFVRkZMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4RlFVRkZMRVZCUVVVc2RVSkJRWFZDTzFsQlEzWkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUlVGQlJTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RlFVRkZMRk5CUVZNc1EwRkJReXhGUVVGRkxFVkJRVVVzYjBOQlFXOURPMmRDUVVOdVJ5eFBRVUZQTEV0QlFVc3NRMEZCUVR0aFFVTm1PMU5CUTBvN1VVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlFUdExRVU5rTzFOQlFVMHNTVUZCU1N4SlFVRkpMRmxCUVZrc1RVRkJUU3hKUVVGSkxFbEJRVWtzV1VGQldTeE5RVUZOTEVWQlFVVXNSVUZCUlN4WlFVRlpPMUZCUTNaRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlExSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRGFrSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGRGFrSXNVVUZCVVN4SFFVRkhMRU5CUVVNc1JVRkRXaXhUUVVGVExFTkJRMW9zUlVGQlJTeEZRVUZGTEd0RFFVRnJRenRaUVVOdVF5eFBRVUZQTEV0QlFVc3NRMEZCUVR0VFFVTm1PMUZCUlVRc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFVkJRVVVzYVVOQlFXbERPMWxCUjNCRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlExQXNTVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVOcVFpeEpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUTJ4Q0xGRkJRVkVzUjBGQlJ5eERRVUZETEVWQlExb3NVMEZCVXl4RFFVTmFMRVZCUVVVN1owSkJRME1zVDBGQlR5eExRVUZMTEVOQlFVRTdZVUZEWmp0VFFVTktPMUZCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVUU3UzBGRFpEdEpRVVZFTEU5QlFVOHNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRVHRCUVVONFFpeERRVUZETEVOQlFVRTdRVUZGUkN4bFFVRmxPMGxCUTFnc1QwRkJUenREUVVOV0xFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlIG1haW4gZGVzdGFnbmF0ZSBjbGFzc1xuICogQGZpbGUgRGVTdGFnbmF0ZSBjb21wb25lbnQgY2xhc3NcbiAqIEBwcmVzZXJ2ZVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGluZXMgKi9cbmltcG9ydCB7IEV2ZW50cyBhcyBCYXNlIH0gZnJvbSBcIi4vcHJpdmF0ZS9fZXZlbnRzXCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL3ByaXZhdGUvX3VybFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3ByaXZhdGUvdXRpbHNcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQGNsYXNzZGVzYyBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjbGFzc1xuICogQG5hbWVzcGFjZVxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgY2xhc3MgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBvZiB0aGlzIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXM7IHdvcmtzIGxpa2UgUmVhY3QgUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9mIGNvbXBvbmVudC4gV29ya3Mgc2ltaWxhciBSZWFjdCBTdGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGluaXRpYWwgc3RhdGUgd2FzIHNldCBpbiBpbml0aWFsaXplclxuICAgICAgICAgKiBEbyBub3QgdGhyb3cgZXJyb3Igd2l0aCBkaXJlY3Qgc3RhdGUgc2V0dGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlcyBhIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICAgICAgICogRm9sbG93cyB0aGUgc2FtZSBjb21wb25lbnQgdXBkYXRpbmcgcHJvY2VkdXJlIGFzIHNldFN0YXRlIHdpdGhvdXQgbW9kaWZ5aW5nIHN0YXRlXG4gICAgICAgICAqIEByZXR1cm5zIHJldHVybnMgZXJyb3IgaWYgZXJyb3IgaXMgdGhyb3duXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl9leGVjUmVuZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGlmIHRoZSBzdGF0ZSBjaGFuZ2VkIGZyb20gdGhlIHByZXZpb3VzIHN0YXRlLiBDYW4gbWUgYXR0YWNoZWQgdG9cbiAgICAgICAgICogYHNob3VsZENvbXBvbmVudFVwZGF0ZWBcbiAgICAgICAgICogQHBhcmFtIGtleXMgLSBsaXN0IG9mIGtleXMgdG8gY3Jhd2wuIElmIGxlZnQgdW5kZWZpbmVkIChkZWZhdWx0KSB0aGVuXG4gICAgICAgICAqIHVzZSBhbGwga2V5cy4gU2hvdWxkIGJlIGBrZXlvZiBTdGF0ZWAsIGJ1dCB0aGVyZSB3ZXJlIHNvbWUgVHlwZXNjcmlwdFxuICAgICAgICAgKiB0cm91Ymxlcy5cbiAgICAgICAgICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aFxuICAgICAgICAgKiBpcyByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLFxuICAgICAgICAgKiB0d28gYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlRGlkQ2hhbmdlID0gKGtleXMsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwodGhpcy5fc3RhdGUsIHRoaXMuX3ByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHt9LCBwcmV2U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdGhpcy5fc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGVba2V5XSA9IChfYSA9IHRoaXMuX3ByZXZTdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwoc3RhdGUsIHByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHN0YXRlXG4gICAgICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IChvYmopID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc3RhdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRDb250ZW50ID0gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2V4ZWNSZW5kZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZywgbWF4LWxlbiAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBtb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBlbGVtZW50IHRvIG1vdW50IHdpdGg7IG9wdGlvbmFsXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudENvbXBvbmVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbE1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMy4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5jb21wb25lbnREaWRNb3VudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZm9yRWFjaCgoY2hpbGQpID0+IGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnQgPSB0aGlzLm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50ID0gdGhpcy51bm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4sIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgY2hpbGRyZW4gZnJvbSB0aGlzLl9wYXJlbnRcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeGVjdXRlcyBuZXcgcmVuZGVyXG4gICAgICAgICAqIEByZXR1cm5zIHJlbmRlcmVkIGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2V4ZWNSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHJlbmRlcmVkQ29udGVudCAtIHJlbmRlcmVkIGNvbnRlbnQgZnJvbSBleGVjdXRpbmcgdGhlIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl91cGRhdGUgPSAocmVuZGVyZWRDb250ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiByZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kQ2hpbGQocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2MgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yID0gKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGlzIG51bGwsIGV4cGVjdGVkIEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRTdGF0ZSBnZXR0ZXIgYXMgdGhpcy5zdGF0ZSBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIFdBUk46IGRvIG5vdCB1c2UgdGhpcyBtZXRob2QgdG8gbXV0YXRlIHRoZSBzdGF0ZSBkaXJlY3RseVxuICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBzZXQgc3RhdGUob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKGBFUlJPUjogY29kZSAxLiBTZWUgJHt1cmx9LmApKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gb2JqO1xuICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0UHJvcHMgZ2V0dGVyIGFzIHRoaXMucHJvcHMgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBwcm9wc1xuICAgICAqL1xuICAgIGdldCBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBwYXJlbnQgZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXQgcGFyZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHBhcmVudFxuICAgICAqL1xuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBkaWRNb3VudCB2YWx1ZSBwdWJsaWNseVxuICAgICAqIEByZXR1cm5zIGlmIG1vdW50ZWRcbiAgICAgKi9cbiAgICBnZXQgZGlkTW91bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaWRNb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJldmlvdXMgc3RhdGUuIFVuZGVmaW5lZCBpZiBubyBwcmV2aW91cyBzdGF0ZSBleGlzdHNcbiAgICAgKiBAcmV0dXJucyBwcmV2aW91cyBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBwcmV2U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2U3RhdGU7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnZiWEJ2Ym1WdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3p0SFFWVkhPMEZCUTBnc09FSkJRVGhDTzBGQlJUbENMRTlCUVU4c1JVRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRmFFUXNUMEZCVHl4SFFVRkhMRTFCUVUwc1owSkJRV2RDTEVOQlFVRTdRVUZEYUVNc1QwRkJUeXhMUVVGTExFMUJRVTBzYVVKQlFXbENMRU5CUVVFN1FVRnpRbTVET3pzN096czdSMEZOUnp0QlFVTklMRTFCUVUwc1QwRkJaMElzVTBGSGNFSXNVMEZCVVN4SlFVRkpPMGxCTkVKV096czdPMDlCU1VjN1NVRkRTQ3haUVVGdlFpeE5RVUV5UWl4RlFVRlpMRXRCUVdFN1VVRkRjRVVzUzBGQlN5eEZRVUZGTEVOQlFVRTdVVUZFWjBRc1ZVRkJTeXhIUVVGTUxFdEJRVXNzUTBGQlVUdFJRUzlDZUVVN08xZEJSVWM3VVVGRFN5eFhRVUZOTEVkQlFWVXNSVUZCVnl4RFFVRkJPMUZCUlc1RE96czdWMEZIUnp0UlFVTkxMSGRDUVVGdFFpeEhRVUZITEV0QlFVc3NRMEZCUVR0UlFVOXVRenM3VjBGRlJ6dFJRVU5MTEdOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVFN1VVRm5SM3BDT3pzN08xZEJTVWM3VVVGRFlTeG5Ra0ZCVnl4SFFVRkhMRWRCUVdsQ0xFVkJRVVU3TzFsQlF6ZERMRWxCUVVrN1owSkJRMEVzVFVGQlFTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xDdERRVUYyUWl4SlFVRkpMRVZCUVhWQ08yZENRVVV6UWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTTFRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZCTzJsQ1FVTm9SRHRuUWtGRlJDeEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xFTkJRM2hDTEd0Q1FVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVlVzYjBKQlEzQkNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRMnBDTEVOQlFVRTdaMEpCUlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJRVHRoUVVOdVF6dFpRVUZETEU5QlFVOHNSMEZCV1N4RlFVRkZMREJDUVVFd1FpeERRVUZETzJkQ1FVTTVReXhQUVVGUExFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRhRU03VVVGRFRDeERRVUZETEVOQlFVRTdVVUZGUkRzN096czdPenM3T3pzN1YwRlhSenRSUVVOaExHMUNRVUZqTEVkQlFVY3NRMEZETjBJc1NVRkJhVUlzUlVGRGFrSXNVVUZCVVN4SFFVRkhMRU5CUVVNc1JVRkRXaXhUUVVGVExFZEJRVWNzUlVGQlJTeEZRVU5RTEVWQlFVVTdPMWxCUTFRc1NVRkJTU3hKUVVGSkxFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTndRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEU5QlFVOHNRMEZEYWtJc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGRFdDeEpRVUZKTEVOQlFVTXNWVUZCVlN4RlFVTm1MRkZCUVZFc1JVRkRVaXhUUVVGVExFTkJRMW9zUTBGQlFUdGhRVU5LTzFsQlJVUXNUVUZCVFN4TFFVRkxMRWRCUVRaQ0xFVkJRVVVzUlVGRGRFTXNVMEZCVXl4SFFVRTJRaXhGUVVGRkxFTkJRVUU3V1VGRk5VTXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hKUVVGSkxFVkJRVVU3WjBKQlEzQkNMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVd0Q0xFTkJRVU1zUTBGQlFUdG5Ra0ZETlVNc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eFRRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMREJEUVVGSExFZEJRV3RDTEVOQlFVTXNRMEZCUVR0aFFVTjZSRHRaUVVWRUxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hUUVVGVExFVkJRVVVzVVVGQlVTeEZRVUZGTEZOQlFWTXNRMEZCUXl4RFFVRkJPMUZCUTJoRkxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN08xZEJTVWM3VVVGRFlTeGhRVUZSTEVkQlFVY3NRMEZCUXl4SFFVRnRRaXhGUVVGblFpeEZRVUZGT3p0WlFVTTNSQ3hKUVVGSk8yZENRVU5CTEUxQlFVRXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpd3JRMEZCZUVJc1NVRkJTU3hGUVVGM1FqdG5Ra0ZGTlVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNTVUZCU1N4RFFVRkRMRlZCUVZVc2NVSkJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkJPMmRDUVVWc1F5eEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xFTkJRM2hDTEd0Q1FVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVlVzYjBKQlEzQkNMRWxCUVVrc1EwRkJReXhMUVVGTExFVkJRMnBDTEVOQlFVRTdaMEpCUlVRc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGQk8yZENRVVV2UWl4TlFVRk5MR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRVZCUVVVN2IwSkJRMmhFTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRk8yOUNRVU53UWl4RFFVRkRMRU5CUVVNc1UwRkJVeXhEUVVGQk8yZENRVVZtTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVUU3WVVGRGFFTTdXVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSU3d3UWtGQk1FSXNRMEZCUXp0blFrRkRja01zVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8yRkJRMmhETzFGQlEwd3NRMEZCUXl4RFFVRkJPMUZCUlVRc1owVkJRV2RGTzFGQlEyaEZPenM3TzFkQlNVYzdVVUZEWVN4dFFrRkJZeXhIUVVGSExFTkJRemRDTEUxQlFXOUNMRVZCUTFJc1JVRkJSVHM3V1VGRFpDeEpRVUZKTzJkQ1FVTkJMRWxCUVVrc1RVRkJUU3hMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZEZEVJc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eE5RVUZOTEVOQlFVRTdhVUpCUTNaQ08yZENRVVZFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlF6VkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3YVVKQlEyaEVPMmRDUVVWRUxFMUJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJRVHRuUWtGRkwwSXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NRMEZCUVR0blFrRkZMMElzVFVGQlFTeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xDdERRVUYyUWl4SlFVRkpMRVZCUVhWQ08yZENRVVV6UWl4SlFVRkpMRk5CUVZNc1MwRkJTeXhKUVVGSkxFVkJRVVU3YjBKQlEzQkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3YVVKQlEyaEVPMmRDUVVWRUxFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdaMEpCUlhKRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkJPMmRDUVVOeVFpeE5RVUZCTEVsQlFVa3NRMEZCUXl4cFFrRkJhVUlzSzBOQlFYUkNMRWxCUVVrc1JVRkJjMEk3WjBKQlJURkNMRWxCUVVrc1UwRkJVeXhaUVVGWkxFdEJRVXNzUlVGQlJUdHZRa0ZETlVJc1RVRkJUU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEhOQ1FVRnpRaXhGUVVGRkxFTkJRVU03YjBKQlJXeEVMRk5CUVhWQ0xFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVFN2IwSkJSWGhGTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVRTdhVUpCUXpWRE8yZENRVVZFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVRTdZVUZETjBNN1dVRkJReXhQUVVGUExFZEJRVmtzUlVGQlJTd3dRa0ZCTUVJc1EwRkJRenRuUWtGRE9VTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzJGQlEyaERPMUZCUTB3c1EwRkJReXhEUVVGQk8xRkJSVVE3T3p0WFFVZEhPMUZCUTJFc1ZVRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eGpRVUZqTEVOQlFVRTdVVUZGTTBNN096dFhRVWRITzFGQlEyRXNjVUpCUVdkQ0xFZEJRVWNzUjBGQlV5eEZRVUZGT3p0WlFVTXhReXhKUVVGSk8yZENRVU5CTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlF6VkNMRTlCUVUwN2FVSkJRMVE3WjBKQlJVUXNUVUZCUVN4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEN0RFFVRjZRaXhKUVVGSkxFVkJRWGxDTzJkQ1FVVTNRaXhKUVVGSkxFTkJRVU1zYjBKQlFXOUNMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZCTzJkQ1FVVjJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVRTdaMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkJPMkZCUTNwQ08xbEJRVU1zVDBGQlR5eEhRVUZaTEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlF6bERMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEZWtJN1VVRkZUQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPMWRCUjBjN1VVRkRZU3haUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhEUVVGQk8xRkJReTlETEN0RVFVRXJSRHRSUVVVdlJEczdPMWRCUjBjN1VVRkRTeXh2UWtGQlpTeEhRVUZITEVkQlFWTXNSVUZCUlR0WlFVTnFReXhKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMkZCUTJoRU8xbEJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRuUWtGRE5VSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJUdHZRa0ZEZUVJc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlFUdHBRa0ZEYmtRN1lVRkRTanRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN1YwRkhSenRSUVVOTExHZENRVUZYTEVkQlFVY3NSMEZCWlN4RlFVRkZPMWxCUTI1RExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUVR0WlFVVjBRaXhQUVVGUExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUVR0UlFVTjRRaXhEUVVGRExFTkJRVUU3VVVGSFJEczdPenRYUVVsSE8xRkJRMHNzV1VGQlR5eEhRVUZITEVOQlFVTXNaVUZCTkVJc1JVRkJVU3hGUVVGRk96dFpRVU55UkN4SlFVRkpMR1ZCUVdVc1dVRkJXU3hMUVVGTExFVkJRVVU3WjBKQlEyeERMRXRCUVVzc1RVRkJUU3hQUVVGUExFbEJRVWtzWlVGQlpTeEZRVUZGTzI5Q1FVTnVReXhOUVVGQkxFbEJRVWtzUTBGQlF5eFBRVUZQTERCRFFVRkZMRmRCUVZjc1EwRkJReXhQUVVGUExFVkJRVU03YVVKQlEzSkRPMkZCUTBvN2FVSkJRVTBzU1VGQlNTeGxRVUZsTEVWQlFVVTdaMEpCUTNoQ0xFMUJRVUVzU1VGQlNTeERRVUZETEU5QlFVOHNNRU5CUVVVc1YwRkJWeXhEUVVGRExHVkJRV1VzUlVGQlF6dGhRVU0zUXp0WlFVVkVMRWxCUVVrc1pVRkJaU3hGUVVGRk8yZENRVU5xUWl4TlFVRkJMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNLME5CUVhaQ0xFbEJRVWtzUlVGQmRVSTdZVUZET1VJN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlR5eHBRa0ZCV1N4SFFVRkhMRU5CUVVNc1IwRkJXU3hGUVVGVExFVkJRVVU3V1VGRE0wTXNTVUZCU1N4SFFVRkhMRmxCUVZrc1MwRkJTeXhGUVVGRk8yZENRVU4wUWl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1owSkJSVE5DTEU5QlFVOHNSMEZCV1N4RFFVRkJPMkZCUTNSQ08xbEJSVVFzVFVGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVRTdXVUZGY0VNc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGQk8xbEJSVGRDTEU5QlFVOHNTMEZCU3l4RFFVRkJPMUZCUTJoQ0xFTkJRVU1zUTBGQlFUdFJRVEZVUnl4SlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGSkxFVkJRVVU3V1VGRGFrSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh0UkVGQmJVUXNRMEZCUXl4RFFVRkJPMU5CUTNaRk8xRkJSVVFzU1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4TlFVRk5MRU5CUVVFN1NVRkRla0lzUTBGQlF6dEpRVVZFT3pzN1QwRkhSenRKUVVOSUxFbEJRVmNzVVVGQlVUdFJRVU5tTEU5QlFVOHNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRVHRKUVVOeVFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQll5eExRVUZMTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGQk8wbEJRM1JDTEVOQlFVTTdTVUZGUkRzN096dFBRVWxITzBsQlEwZ3NTVUZCWXl4TFFVRkxMRU5CUVVVc1IwRkJWVHRSUVVNelFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUlVGQlJUdFpRVU14UWl4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEVOQlEyeENMRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVNeFF5eERRVUZCTzFsQlEwUXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdFRRVU55UWp0aFFVRk5PMWxCUTBnc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVRTdXVUZEYWtJc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4SFFVRkhMRWxCUVVrc1EwRkJRVHRUUVVOc1F6dEpRVU5NTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZYTEZGQlFWRTdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVUU3U1VGRGNrSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU0N4SlFVRlhMRTFCUVUwc1EwRkJSU3hQUVVGblF6dFJRVU12UXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlFUdEpRVU14UWl4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwZ3NTVUZCVnl4TlFVRk5PMUZCUTJJc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZCTzBsQlEzWkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRlhMRkZCUVZFN1VVRkRaaXhQUVVGUExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVRTdTVUZEZWtJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1UwRkJVenRSUVVOb1FpeFBRVUZQTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVFN1NVRkRNVUlzUTBGQlF6dERRVFpQU2p0QlFVVkVMR1ZCUVdVc1UwRkJVeXhEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4gfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IChfLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGRvY3VtZW50RnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgYmluZENoaWxkcmVuKGRvY3VtZW50RnJhZ21lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZG9jdW1lbnRGcmFnbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBmcmFnbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuSmhaMjFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZabkpoWjIxbGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZEU0N3eVFrRkJNa0k3UVVGRE0wSXNhVU5CUVdsRE8wRkJSV3BETEU5QlFVOHNSVUZGU0N4WlFVRlpMRVZCUTJZc1RVRkJUU3dyUWtGQkswSXNRMEZCUVR0QlFVVjBReXhOUVVGTkxFTkJRVU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZEY0VJc1EwRkJWU3hGUVVOV0xFZEJRVWNzVVVGQk1rSXNSVUZEWkN4RlFVRkZPMGxCUTJ4Q0xFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1VVRkJVU3hEUVVGRExITkNRVUZ6UWl4RlFVRkZMRU5CUVVFN1NVRkZNVVFzV1VGQldTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZCTzBsQlJYaERMRTlCUVU4c1owSkJRV2RDTEVOQlFVRTdRVUZETTBJc1EwRkJReXhEUVVGQk8wRkJSVVFzWlVGQlpTeFJRVUZSTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBtYWluIGZpbGUgZm9yIGRlc3RhZ25hdGVcbiAqIEBwcmVzZXJ2ZVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgKiBhcyBfQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZUVsZW1lbnROUyBmcm9tIFwiLi9jcmVhdGVFbGVtZW50TlNcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVSZWYgZnJvbSBcIi4vY3JlYXRlUmVmXCI7XG5pbXBvcnQgKiBhcyBfRnJhZ21lbnQgZnJvbSBcIi4vZnJhZ21lbnRcIjtcbmV4cG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuZXhwb3J0IHsgY3JlYXRlUmVmIH0gZnJvbSBcIi4vY3JlYXRlUmVmXCI7XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudE5TIH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5leHBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCIuL2ZyYWdtZW50XCI7XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IHZhciBEZVN0YWduYXRlO1xuKGZ1bmN0aW9uIChEZVN0YWduYXRlKSB7XG4gICAgRGVTdGFnbmF0ZS5Db21wb25lbnQgPSBfQ29tcG9uZW50LkNvbXBvbmVudDtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZVJlZiA9IF9DcmVhdGVSZWYuY3JlYXRlUmVmO1xuICAgIERlU3RhZ25hdGUuY3JlYXRlRWxlbWVudCA9IF9DcmVhdGVFbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVFbGVtZW50TlMgPSBfQ3JlYXRlRWxlbWVudE5TLmNyZWF0ZUVsZW1lbnROUztcbiAgICBEZVN0YWduYXRlLmZyYWdtZW50ID0gX0ZyYWdtZW50LmZyYWdtZW50O1xufSkoRGVTdGFnbmF0ZSB8fCAoRGVTdGFnbmF0ZSA9IHt9KSk7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5leHBvcnQgZGVmYXVsdCBEZVN0YWduYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN1IwRlZSenRCUVVOSUxESkNRVUV5UWp0QlFVTXpRaXhwUTBGQmFVTTdRVUZGYWtNc1QwRkJUeXhMUVVGTExGVkJRVlVzVFVGQlRTeGhRVUZoTEVOQlFVRTdRVUZEZWtNc1QwRkJUeXhMUVVGTExHTkJRV01zVFVGQlRTeHBRa0ZCYVVJc1EwRkJRVHRCUVVOcVJDeFBRVUZQTEV0QlFVc3NaMEpCUVdkQ0xFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkRja1FzVDBGQlR5eExRVUZMTEZWQlFWVXNUVUZCVFN4aFFVRmhMRU5CUVVFN1FVRkRla01zVDBGQlR5eExRVUZMTEZOQlFWTXNUVUZCVFN4WlFVRlpMRU5CUVVFN1FVRkZka01zVDBGQlR5eEZRVUZETEZOQlFWTXNSVUZCUXl4TlFVRk5MR0ZCUVdFc1EwRkJRVHRCUVVOeVF5eFBRVUZQTEVWQlFVMHNVMEZCVXl4RlFVRkRMRTFCUVUwc1lVRkJZU3hEUVVGQk8wRkJRekZETEU5QlFVOHNSVUZCUXl4aFFVRmhMRVZCUVVNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUVR0QlFVTTNReXhQUVVGUExFVkJRVU1zWlVGQlpTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRGFrUXNUMEZCVHl4RlFVRkRMRkZCUVZFc1JVRkJReXhOUVVGTkxGbEJRVmtzUTBGQlFUdEJRVVZ1UXl4dlFrRkJiMEk3UVVGRGNFSXNUVUZCVFN4TFFVRlhMRlZCUVZVc1EwRlBNVUk3UVVGUVJDeFhRVUZwUWl4VlFVRlZPMGxCUTFRc2IwSkJRVk1zUjBGQlNTeFZRVUZWTEZWQlFXUXNRMEZCWXp0SlFVTjJRaXh2UWtGQlV5eEhRVUZKTEZWQlFWVXNWVUZCWkN4RFFVRmpPMGxCUlhaQ0xIZENRVUZoTEVkQlFVa3NZMEZCWXl4alFVRnNRaXhEUVVGclFqdEpRVU12UWl3d1FrRkJaU3hIUVVGSkxHZENRVUZuUWl4blFrRkJjRUlzUTBGQmIwSTdTVUZEYmtNc2JVSkJRVkVzUjBGQlNTeFRRVUZUTEZOQlFXSXNRMEZCWVR0QlFVTjJReXhEUVVGRExFVkJVR2RDTEZWQlFWVXNTMEZCVml4VlFVRlZMRkZCVHpGQ08wRkJRMFFzYlVKQlFXMUNPMEZCUlc1Q0xHVkJRV1VzVlVGQlZTeERRVUZCSW4wPSJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudCIsIl9jcmVhdGVFbGVtZW50TlMiLCJfY3JlYXRlUmVmIiwiQmFzZUNvbXBvbmVudCIsIkJhc2UiLCJfQ29tcG9uZW50LkNvbXBvbmVudCIsIl9DcmVhdGVSZWYuY3JlYXRlUmVmIiwiX0NyZWF0ZUVsZW1lbnQuY3JlYXRlRWxlbWVudCIsIl9DcmVhdGVFbGVtZW50TlMuY3JlYXRlRWxlbWVudE5TIiwiX0ZyYWdtZW50LmZyYWdtZW50IiwiRGVTdGFnbmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFPLElBQU0sR0FBRyxHQUFHLHdEQUFaOztFQ3FGUDs7Ozs7OztFQU9HOztFQUNJLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxDQUNyQixPQURxQixFQUVyQixLQUZxQixFQUlmO0VBQUEsTUFETixFQUNNLHVFQURELEtBQ0M7O0VBQ04sTUFBSSxLQUFKLEVBQVc7RUFDUCx1Q0FBeUIsTUFBTSxDQUFDLE9BQVAsQ0FBZSxLQUFmLENBQXpCLHFDQUFnRDtFQUFBO0VBQUEsVUFBcEMsR0FBb0M7RUFBQSxVQUEvQixHQUErQjs7RUFDNUMsVUFBSSxPQUFPLEdBQVAsS0FBZSxRQUFmLElBQTJCLE9BQU8sR0FBUCxLQUFlLFFBQTlDLEVBQXdEO0VBQ3BELFlBQUksR0FBRyxLQUFLLFdBQVosRUFBeUI7RUFDckIsVUFBQSxPQUFPLENBQUMsU0FBUixHQUFvQixHQUFHLENBQUMsUUFBSixFQUFwQjtFQUNILFNBRkQsTUFFTyxJQUFJLEVBQUosRUFBUTtFQUNYLFVBQUEsT0FBTyxDQUFDLGNBQVIsQ0FBdUIsSUFBdkIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBRyxDQUFDLFFBQUosRUFBbEM7RUFDSCxTQUZNLE1BRUE7RUFDSCxVQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLEdBQUcsQ0FBQyxRQUFKLEVBQTFCO0VBQ0g7RUFDSixPQVJELE1BUU8sSUFBSSxHQUFHLENBQUMsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLE1BQW9CLElBQXhCLEVBQThCO0VBQ2pDLFlBQUksT0FBTyxHQUFQLEtBQWdCLFVBQXBCLEVBQWdDO0VBQzVCLFVBQUEsT0FBTyxDQUFDLGdCQUFSLENBQ0ksR0FBRyxDQUFDLEtBQUosQ0FBVSxDQUFWLEVBQ0ssV0FETCxFQURKLEVBR0ksR0FISjtFQUtIO0VBQ0osT0FSTSxNQVFBLElBQ0gsR0FBRyxLQUFLLEtBQVIsSUFDQSxRQUFPLEdBQVAsTUFBZ0IsUUFEaEIsSUFFQSxhQUFhLEdBSFYsRUFJTDtFQUNHLFFBQUEsR0FBb0IsQ0FBQyxPQUFyQixHQUErQixPQUEvQjtFQUNKLE9BTk0sTUFNQSxJQUFJLEdBQUcsS0FBSyxTQUFaLEVBQXVCO0VBQzFCLFFBQUEsT0FBTyxDQUFDLElBQVIsbUJBQXVCLEdBQXZCO0VBQ0g7RUFDSjtFQUNKO0VBQ0osQ0FsQ007RUFvQ1A7Ozs7OztFQU1HOztFQUNJLElBQU0sWUFBWSxHQUFHLFNBQWYsWUFBZSxDQUN4QixPQUR3QixFQUV4QixRQUZ3QixFQUdsQjtFQUNOLE1BQUksUUFBUSxLQUFLLElBQWIsSUFBcUIsUUFBUSxLQUFLLFNBQXRDLEVBQWlEO0VBQzdDLFFBQUksUUFBUSxZQUFZLEtBQXhCLEVBQStCO0VBQzNCLE1BQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsVUFBQyxLQUFEO0VBQUEsZUFDYixZQUFZLENBQUMsT0FBRCxFQUFVLEtBQVYsQ0FEQztFQUFBLE9BQWpCO0VBR0gsS0FKRCxNQUlPLElBQ0gsT0FBTyxRQUFQLEtBQW9CLFFBQXBCLElBQ0EsT0FBTyxRQUFQLEtBQW9CLFFBRmpCLEVBR0w7RUFDRSxNQUFBLE9BQU8sQ0FBQyxXQUFSLENBQW9CLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQVEsQ0FBQyxRQUFULEVBQXhCLENBQXBCO0VBQ0gsS0FMTSxNQUtBLElBQUksUUFBUSxZQUFZLFNBQXhCLEVBQW1DO0VBQ3RDLFVBQUksQ0FBQyxRQUFRLENBQUMsUUFBVixJQUFzQixPQUFPLFlBQVksTUFBTSxDQUFDLFdBQXBELEVBQWlFO0VBQzdELFFBQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxPQUFmO0VBRUE7RUFDSCxPQUpELE1BSU8sSUFBSSxFQUFFLE9BQU8sWUFBWSxNQUFNLENBQUMsV0FBNUIsQ0FBSixFQUE4QztFQUNqRCxjQUFNLElBQUksS0FBSiw4QkFBZ0MsR0FBaEMsRUFBTjtFQUNIOztFQUVELFVBQUksUUFBUSxDQUFDLE1BQVQsS0FBb0IsT0FBeEIsRUFBaUM7RUFDN0IsUUFBQSxRQUFRLENBQUMsTUFBVCxHQUFrQixPQUFsQjtFQUNIOztFQUVELE1BQUEsUUFBUSxDQUFDLFdBQVQ7RUFDSCxLQWRNLE1BY0E7RUFDSCxNQUFBLE9BQU8sQ0FBQyxXQUFSLENBQW9CLFFBQXBCO0VBQ0g7RUFDSjtFQUNKLENBaENNOztFQ2pGUDs7Ozs7Ozs7O0VBU0c7O0VBQ0csU0FBVSxhQUFWLENBSUYsa0JBSkUsRUFRRixLQVJFLEVBUzRCO0VBQUEsb0NBQTNCLFFBQTJCO0VBQTNCLElBQUEsUUFBMkI7RUFBQTs7RUFFOUIsTUFBSSxPQUFPLGtCQUFQLEtBQStCLFFBQW5DLEVBQTZDO0VBQ3pDLFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGtCQUF2QixDQUFoQjtFQUVBLElBQUEsU0FBUyxDQUFDLE9BQUQsRUFBVSxLQUFWLENBQVQ7RUFFQSxJQUFBLFlBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUFaO0VBRUEsV0FBTyxPQUFQO0VBQ0gsR0FSRCxNQVFPLElBQUksT0FBTyxrQkFBUCxLQUErQixVQUFuQyxFQUErQztFQUNsRCxXQUFPLGtCQUFrQixDQUFDLEtBQUQsRUFBYSxRQUFiLENBQXpCO0VBQ0g7O0VBRUQsU0FBTyxLQUFLLENBQUMsd0NBQUQsQ0FBWjtFQUNIOztFQ3pFRDs7Ozs7Ozs7RUFRRzs7TUFDVSxlQUFlLEdBQUcsU0FBbEIsZUFBa0IsQ0FDM0IsWUFEMkIsRUFFM0IsT0FGMkIsRUFHM0IsS0FIMkIsRUFLbEI7RUFDVCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsZUFBVCxDQUF5QixZQUF6QixFQUF1QyxPQUF2QyxDQUFoQjtFQUVBLEVBQUEsU0FBUyxDQUFDLE9BQUQsRUFBVSxLQUFWLEVBQWlCLElBQWpCLENBQVQ7O0VBSFMsb0NBRE4sUUFDTTtFQUROLElBQUEsUUFDTTtFQUFBOztFQUtULEVBQUEsWUFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBQVo7RUFFQSxTQUFPLE9BQVA7RUFDSDs7RUN2QkQ7OztFQUdHO01BQ1UsU0FBUyxHQUFHLFNBQVosU0FBWTtFQUFBLFNBQTRDO0VBQ2pFLElBQUEsT0FBTyxFQUFFO0VBRHdELEdBQTVDO0VBQUE7O01DK0JILE1BQXRCLEdBQUEsa0JBQUE7RUFBQTs7RUFRb0IsT0FBQSxhQUFBLEdBQWdCQSxhQUFoQjtFQUVBLE9BQUEsZUFBQSxHQUFrQkMsZUFBbEI7RUFFQSxPQUFBLFNBQUEsR0FBWUMsU0FBWjtFQUVoQjs7OztFQUlHOztFQUNJLE9BQUEsaUJBQUEsR0FBb0IsVUFBQyxLQUFEO0VBQUEsV0FBd0IsT0FBTyxDQUFDLEtBQVIsQ0FBYyxLQUFkLENBQXhCO0VBQUEsR0FBcEI7RUFFUDs7O0VBR0c7OztFQUNJLE9BQUEscUJBQUEsR0FBd0I7RUFBQSxXQUFlLElBQWY7RUFBQSxHQUF4QjtFQUVQOzs7Ozs7RUFNRzs7O0VBQ2EsT0FBQSxNQUFBLEdBQVM7RUFBQSxXQUFrQixJQUFsQjtFQUFBLEdBQVQ7RUFFbkIsQ0FwQ0Q7RUFFMkIsTUFBQSxDQUFBLGFBQUEsR0FBZ0JGLGFBQWhCO0VBRUEsTUFBQSxDQUFBLGVBQUEsR0FBa0JDLGVBQWxCO0VBRUEsTUFBQSxDQUFBLFNBQUEsR0FBWUMsU0FBWjs7RUNrRjNCLElBQU0sVUFBVSxHQUFxQixDQUNqQyxTQURpQyxFQUVqQyxRQUZpQyxFQUdqQyxXQUhpQyxFQUlqQyxZQUppQyxFQUtqQyxrQkFMaUMsRUFNakMsbUJBTmlDLEVBT2pDLGdCQVBpQyxFQVFqQyxzQkFSaUMsRUFTakMsbUJBVGlDLEVBVWpDLG9CQVZpQyxFQVdqQyxpQkFYaUMsRUFZakMsaUJBWmlDLEVBYWpDLFlBYmlDLEVBY2pDLFNBZGlDLEVBZWpDLFlBZmlDLEVBZ0JqQyxhQWhCaUMsRUFpQmpDLGNBakJpQyxFQWtCakMsY0FsQmlDLEVBbUJqQyxhQW5CaUMsRUFvQmpDLGFBcEJpQyxFQXFCakMsWUFyQmlDLEVBc0JqQyxXQXRCaUMsQ0FBckM7TUEwQnNCLE1BQXRCO0VBQUE7O0VBQUE7O0VBQUEsb0JBQUE7RUFBQTs7RUFBQTs7O0VBRUk7Ozs7RUFJRzs7RUFDZ0IsVUFBQSxrQkFBQSxHQUFxQixVQUFDLE9BQUQsRUFBK0I7RUFDbkUsWUFBSyxjQUFMLENBQW9CLE9BQU8sQ0FBQyxnQkFBNUI7RUFDSCxLQUZrQjtFQUluQjs7OztFQUlHOzs7RUFDZ0IsVUFBQSxvQkFBQSxHQUF1QixVQUFDLE9BQUQsRUFBK0I7RUFDckUsWUFBSyxjQUFMLENBQW9CLE9BQU8sQ0FBQyxtQkFBNUI7RUFDSCxLQUZrQjs7RUFJWCxVQUFBLGNBQUEsR0FBaUIsVUFBQyxhQUFELEVBQXVDO0VBQUEsaURBQ3BDLFVBRG9DO0VBQUE7O0VBQUE7RUFDNUQsNERBQW9DO0VBQUEsY0FBekIsU0FBeUI7RUFDaEMsY0FBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsV0FBbkIsRUFBdEI7RUFBQSxjQUNJLFFBQVEsR0FBRyxNQUFLLFNBQUwsQ0FEZjs7RUFHQSxjQUFJLFFBQVEsS0FBSyxTQUFiLElBQTBCLFFBQVEsWUFBWSxRQUFsRCxFQUE0RDtFQUN4RCxZQUFBLGFBQWEsQ0FDVCxhQURTLEVBRVQsUUFGUyxDQUFiO0VBSUg7RUFDSjtFQVgyRDtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBWS9ELEtBWk87O0VBcEJaO0VBa0NDOztFQWxDRDtFQUFBLEVBQXFDQyxNQUFyQzs7RUMxSkE7Ozs7Ozs7OztFQVNHO0VBQ0ksSUFBTSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQ25CLElBRG1CLEVBRW5CLElBRm1CLEVBS1Y7RUFBQSxNQUZULFFBRVMsdUVBRkUsQ0FFRjtFQUFBLE1BRFQsU0FDUyx1RUFERyxFQUNIOztFQUNULE1BQUksUUFBUSxLQUFLLENBQWpCLEVBQW9CO0VBQ2hCLFdBQU8sSUFBSSxLQUFLLElBQWhCO0VBQ0gsR0FGRCxNQUVPLElBQUksUUFBTyxJQUFQLGNBQXVCLElBQXZCLENBQUosRUFBaUM7RUFDcEMsV0FBTyxLQUFQO0VBQ0g7O0VBRUQsTUFBSSxJQUFJLFlBQVksS0FBaEIsSUFBeUIsSUFBSSxZQUFZLEtBQTdDLEVBQW9EO0VBQ2hELFFBQUksSUFBSSxDQUFDLE1BQUwsS0FBZ0IsSUFBSSxDQUFDLE1BQXpCLEVBQWlDO0VBQzdCLGFBQU8sS0FBUDtFQUNILEtBRkQsTUFFTyxJQUFJLElBQUksQ0FBQyxNQUFMLEdBQWMsU0FBZCxJQUEyQixJQUFJLENBQUMsTUFBTCxHQUFjLFNBQTdDLEVBQXdEO0VBQzNELGFBQU8sSUFBSSxLQUFLLElBQWhCO0VBQ0g7O0VBRUQsU0FBSyxJQUFJLEtBQUssR0FBRyxDQUFqQixFQUFvQixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQWpDLEVBQXlDLEtBQUssRUFBOUMsRUFBa0Q7RUFDOUMsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBRCxDQUFMLEVBQWMsSUFBSSxDQUFDLEtBQUQsQ0FBbEIsRUFBMkIsUUFBUSxHQUFHLENBQXRDLEVBQXlDLFNBQXpDLENBQVosRUFBaUU7RUFDN0QsZUFBTyxLQUFQO0VBQ0g7RUFDSjs7RUFFRCxXQUFPLElBQVA7RUFDSCxHQWRELE1BY08sSUFBSSxJQUFJLFlBQVksTUFBaEIsSUFBMEIsSUFBSSxZQUFZLE1BQTlDLEVBQXNEO0VBQ3pELFFBQUksQ0FBQyxPQUFPLENBQ1IsTUFBTSxDQUFDLElBQVAsQ0FBWSxJQUFaLENBRFEsRUFFUixNQUFNLENBQUMsSUFBUCxDQUFZLElBQVosQ0FGUSxFQUdSLFFBQVEsR0FBRyxDQUhILEVBSVIsU0FKUSxDQUFaLEVBS0c7RUFDQyxhQUFPLEtBQVA7RUFDSDs7RUFFRCxvQ0FBa0IsTUFBTSxDQUFDLElBQVAsQ0FBWSxJQUFaLENBQWxCLGtDQUFxQztFQUFoQyxVQUFNLEdBQUcsbUJBQVQ7O0VBR0QsVUFBSSxDQUFDLE9BQU8sQ0FDUCxJQUFZLENBQUMsR0FBRCxDQURMLEVBRVAsSUFBWSxDQUFDLEdBQUQsQ0FGTCxFQUdSLFFBQVEsR0FBRyxDQUhILEVBSVIsU0FKUSxDQUFaLEVBS0c7RUFDQyxlQUFPLEtBQVA7RUFDSDtFQUNKOztFQUVELFdBQU8sSUFBUDtFQUNIOztFQUVELFNBQU8sSUFBSSxLQUFLLElBQWhCO0VBQ0gsQ0FyRE07QUF1RFAsY0FBZTtFQUNYLEVBQUEsT0FBTyxFQUFQO0VBRFcsQ0FBZjs7RUNyQ0E7Ozs7OztFQU1HOztNQUNtQixTQUF0QjtFQUFBOztFQUFBOztFQStCSTs7OztFQUlHO0VBQ0gscUJBQW9CLE1BQXBCLEVBQTJELEtBQTNELEVBQXdFO0VBQUE7O0VBQUE7O0VBQ3BFO0VBRHVELFVBQUEsS0FBQSxHQUFBLEtBQUE7RUE1Qm5ELFVBQUEsTUFBQSxHQUFnQixFQUFoQjtFQU1BLFVBQUEsbUJBQUEsR0FBc0IsS0FBdEI7RUFVQSxVQUFBLFNBQUEsR0FBWSxLQUFaO0VBZ0dSOzs7O0VBSUc7O0VBQ2EsVUFBQSxXQUFBLEdBQWMsWUFBbUI7OztFQUM3QyxVQUFJO0VBQ0EsU0FBQSxFQUFBLEdBQUEsTUFBSyxrQkFBTCxNQUF1QixJQUF2QixJQUF1QixFQUFBLEtBQUEsS0FBQSxDQUF2QixHQUF1QixLQUFBLENBQXZCLEdBQXVCLEVBQUEsQ0FBdkIsSUFBdUIsK0JBQXZCOztFQUVBLFlBQUksTUFBSyxPQUFMLEtBQWlCLFNBQXJCLEVBQWdDO0VBQzVCLGdCQUFNLElBQUksS0FBSiw4QkFBZ0MsR0FBaEMsT0FBTjtFQUNIOztFQUVELGNBQUssdUJBQUwsQ0FDSSxNQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsRUFBSSxNQUFLLEtBQVQsQ0FESixFQUM0QixNQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsRUFDcEIsTUFBSyxLQURlLENBRDVCOztFQUtBLGNBQUssT0FBTCxDQUFhLE1BQUssV0FBTCxFQUFiO0VBQ0gsT0FiRCxDQWFFLE9BQU8sR0FBUCxFQUFnRDtFQUM5QyxlQUFPLE1BQUssWUFBTCxDQUFrQixHQUFsQixDQUFQO0VBQ0g7RUFDSixLQWpCZTtFQW1CaEI7Ozs7Ozs7Ozs7O0VBV0c7OztFQUNhLFVBQUEsY0FBQSxHQUFpQixVQUM3QixJQUQ2QixFQUlwQjtFQUFBLFVBRlQsUUFFUyx1RUFGRSxDQUVGO0VBQUEsVUFEVCxTQUNTLHVFQURHLEVBQ0g7Ozs7RUFDVCxVQUFJLElBQUksS0FBSyxTQUFiLEVBQXdCO0VBQ3BCLGVBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTixDQUNKLE1BQUssTUFERCxFQUVKLE1BQUssVUFGRCxFQUdKLFFBSEksRUFJSixTQUpJLENBQVI7RUFNSDs7RUFFRCxVQUFNLEtBQUssR0FBNkIsRUFBeEM7RUFBQSxVQUNJLFNBQVMsR0FBNkIsRUFEMUM7O0VBVlMsaURBYVMsSUFiVDtFQUFBOztFQUFBO0VBYVQsNERBQXdCO0VBQUEsY0FBYixHQUFhO0VBQ3BCLFVBQUEsS0FBSyxDQUFDLEdBQUQsQ0FBTCxHQUFhLE1BQUssTUFBTCxDQUFZLEdBQVosQ0FBYjtFQUNBLFVBQUEsU0FBUyxDQUFDLEdBQUQsQ0FBVCxHQUFjLENBQUEsRUFBQSxHQUFHLE1BQUssVUFBUixNQUFrQixJQUFsQixJQUFrQixFQUFBLEtBQUEsS0FBQSxDQUFsQixHQUFrQixLQUFBLENBQWxCLEdBQWtCLEVBQUEsQ0FBRyxHQUFILENBQWhDO0VBQ0g7RUFoQlE7RUFBQTtFQUFBO0VBQUE7RUFBQTs7RUFrQlQsYUFBTyxDQUFDLEtBQUssQ0FBQyxPQUFOLENBQWMsS0FBZCxFQUFxQixTQUFyQixFQUFnQyxRQUFoQyxFQUEwQyxTQUExQyxDQUFSO0VBQ0gsS0F2QmU7RUF5QmhCOzs7O0VBSUc7OztFQUNhLFVBQUEsUUFBQSxHQUFXLFVBQUMsR0FBRCxFQUFzQzs7O0VBQzdELFVBQUk7RUFDQSxTQUFBLEVBQUEsR0FBQSxNQUFLLG1CQUFMLE1BQXdCLElBQXhCLElBQXdCLEVBQUEsS0FBQSxLQUFBLENBQXhCLEdBQXdCLEtBQUEsQ0FBeEIsR0FBd0IsRUFBQSxDQUF4QixJQUF3QiwrQkFBeEI7O0VBRUEsWUFBSSxNQUFLLE9BQUwsS0FBaUIsU0FBckIsRUFBZ0M7RUFDNUIsZ0JBQU0sSUFBSSxLQUFKLDhCQUFnQyxHQUFoQyxPQUFOO0VBQ0g7O0VBRUQsY0FBSyxVQUFMLEdBQWUsTUFBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLEVBQU8sTUFBSyxNQUFaLENBQWY7O0VBRUEsY0FBSyx1QkFBTCxDQUNJLE1BQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxFQUFJLE1BQUssS0FBVCxDQURKLEVBQzRCLE1BQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxFQUNwQixNQUFLLEtBRGUsQ0FENUI7O0VBS0EsUUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLE1BQUssTUFBbkIsRUFBMkIsR0FBM0I7RUFFQSxZQUFNLGVBQWUsR0FBRyxNQUFLLHFCQUFMLEtBQ2xCLE1BQUssV0FBTCxFQURrQixHQUVsQixTQUZOOztFQUlBLGNBQUssT0FBTCxDQUFhLGVBQWI7RUFDSCxPQXJCRCxDQXFCRSxPQUFPLEdBQVAsRUFBdUM7RUFDckMsZUFBTyxNQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FBUDtFQUNIO0VBQ0osS0F6QmU7RUE0QmhCOzs7O0VBSUc7OztFQUNhLFVBQUEsY0FBQSxHQUFpQixVQUM3QixNQUQ2QixFQUVmOzs7RUFDZCxVQUFJO0VBQ0EsWUFBSSxNQUFNLEtBQUssU0FBZixFQUEwQjtFQUN0QixnQkFBSyxNQUFMLEdBQWMsTUFBZDtFQUNIOztFQUVELFlBQUksTUFBSyxPQUFMLEtBQWlCLFNBQXJCLEVBQWdDO0VBQzVCLGdCQUFNLElBQUksS0FBSiw4QkFBZ0MsR0FBaEMsT0FBTjtFQUNIOztFQUVELFlBQU0sU0FBUyxHQUFHLE1BQUssTUFBTCxFQUFsQjs7RUFFQSxjQUFLLG1CQUFMLEdBQTJCLElBQTNCO0VBRUEsU0FBQSxFQUFBLEdBQUEsTUFBSyxrQkFBTCxNQUF1QixJQUF2QixJQUF1QixFQUFBLEtBQUEsS0FBQSxDQUF2QixHQUF1QixLQUFBLENBQXZCLEdBQXVCLEVBQUEsQ0FBdkIsSUFBdUIsK0JBQXZCOztFQUVBLFlBQUksU0FBUyxLQUFLLElBQWxCLEVBQXdCO0VBQ3BCLGdCQUFNLElBQUksS0FBSiw4QkFBZ0MsR0FBaEMsT0FBTjtFQUNIOztFQUVELGNBQUssa0JBQUwsQ0FBd0IsTUFBSyxPQUE3Qjs7RUFFQSxjQUFLLFNBQUwsR0FBaUIsSUFBakI7RUFDQSxTQUFBLEVBQUEsR0FBQSxNQUFLLGlCQUFMLE1BQXNCLElBQXRCLElBQXNCLEVBQUEsS0FBQSxLQUFBLENBQXRCLEdBQXNCLEtBQUEsQ0FBdEIsR0FBc0IsRUFBQSxDQUF0QixJQUFzQiwrQkFBdEI7O0VBRUEsWUFBSSxTQUFTLFlBQVksS0FBekIsRUFBZ0M7RUFDNUIsY0FBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQWpCO0VBRUMsVUFBQSxTQUF1QixDQUFDLE9BQXhCLENBQWdDLFVBQUMsS0FBRDtFQUFBLG1CQUFXLFFBQVEsQ0FBQyxXQUFULENBQXFCLEtBQXJCLENBQVg7RUFBQSxXQUFoQztFQUVELGlCQUFPLE1BQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsUUFBekIsQ0FBUDtFQUNIOztFQUVELGVBQU8sTUFBSyxPQUFMLENBQWEsV0FBYixDQUF5QixTQUF6QixDQUFQO0VBQ0gsT0FqQ0QsQ0FpQ0UsT0FBTyxHQUFQLEVBQWdEO0VBQzlDLGVBQU8sTUFBSyxZQUFMLENBQWtCLEdBQWxCLENBQVA7RUFDSDtFQUNKLEtBdkNlO0VBeUNoQjs7O0VBR0c7OztFQUNhLFVBQUEsS0FBQSxHQUFRLE1BQUssY0FBYjtFQUVoQjs7O0VBR0c7O0VBQ2EsVUFBQSxnQkFBQSxHQUFtQixZQUFXOzs7RUFDMUMsVUFBSTtFQUNBLFlBQUksTUFBSyxPQUFMLEtBQWlCLFNBQXJCLEVBQWdDO0VBQzVCO0VBQ0g7O0VBRUQsU0FBQSxFQUFBLEdBQUEsTUFBSyxvQkFBTCxNQUF5QixJQUF6QixJQUF5QixFQUFBLEtBQUEsS0FBQSxDQUF6QixHQUF5QixLQUFBLENBQXpCLEdBQXlCLEVBQUEsQ0FBekIsSUFBeUIsK0JBQXpCOztFQUVBLGNBQUssb0JBQUwsQ0FBMEIsTUFBSyxPQUEvQjs7RUFFQSxjQUFLLGVBQUw7O0VBQ0EsY0FBSyxTQUFMLEdBQWlCLEtBQWpCO0VBQ0gsT0FYRCxDQVdFLE9BQU8sR0FBUCxFQUFnRDtFQUM5QyxjQUFLLFlBQUwsQ0FBa0IsR0FBbEI7RUFDSDtFQUVKLEtBaEJlO0VBa0JoQjs7O0VBR0c7OztFQUNhLFVBQUEsT0FBQSxHQUFVLE1BQUssZ0JBQWY7RUFHaEI7OztFQUdHOztFQUNLLFVBQUEsZUFBQSxHQUFrQixZQUFXO0VBQ2pDLFVBQUksTUFBSyxPQUFMLEtBQWlCLFNBQXJCLEVBQWdDO0VBQzVCLGNBQU0sSUFBSSxLQUFKLDhCQUFnQyxHQUFoQyxPQUFOO0VBQ0g7O0VBRUQsYUFBTyxNQUFLLE9BQUwsQ0FBYSxVQUFwQixFQUFnQztFQUM1QixZQUFJLE1BQUssT0FBTCxDQUFhLFNBQWpCLEVBQTRCO0VBQ3hCLGdCQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLE1BQUssT0FBTCxDQUFhLFNBQXRDO0VBQ0g7RUFDSjtFQUNKLEtBVk87RUFZUjs7O0VBR0c7OztFQUNLLFVBQUEsV0FBQSxHQUFjLFlBQWlCO0VBQ25DLFlBQUssZUFBTDs7RUFFQSxhQUFPLE1BQUssTUFBTCxFQUFQO0VBQ0gsS0FKTztFQU9SOzs7O0VBSUc7OztFQUNLLFVBQUEsT0FBQSxHQUFVLFVBQUMsZUFBRCxFQUF1Qzs7O0VBQ3JELFVBQUksZUFBZSxZQUFZLEtBQS9CLEVBQXNDO0VBQUEsb0RBQ1osZUFEWTtFQUFBOztFQUFBO0VBQ2xDLGlFQUF1QztFQUFBLGdCQUE1QixPQUE0QjtFQUNuQyxhQUFBLEVBQUEsR0FBQSxNQUFLLE9BQUwsTUFBWSxJQUFaLElBQVksRUFBQSxLQUFBLEtBQUEsQ0FBWixHQUFZLEtBQUEsQ0FBWixHQUFZLEVBQUEsQ0FBRSxXQUFGLENBQWMsT0FBZCxDQUFaO0VBQ0g7RUFIaUM7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUlyQyxPQUpELE1BSU8sSUFBSSxlQUFKLEVBQXFCO0VBQ3hCLFNBQUEsRUFBQSxHQUFBLE1BQUssT0FBTCxNQUFZLElBQVosSUFBWSxFQUFBLEtBQUEsS0FBQSxDQUFaLEdBQVksS0FBQSxDQUFaLEdBQVksRUFBQSxDQUFFLFdBQUYsQ0FBYyxlQUFkLENBQVo7RUFDSDs7RUFFRCxVQUFJLGVBQUosRUFBcUI7RUFDakIsU0FBQSxFQUFBLEdBQUEsTUFBSyxrQkFBTCxNQUF1QixJQUF2QixJQUF1QixFQUFBLEtBQUEsS0FBQSxDQUF2QixHQUF1QixLQUFBLENBQXZCLEdBQXVCLEVBQUEsQ0FBdkIsSUFBdUIsK0JBQXZCO0VBQ0g7RUFDSixLQVpPOztFQWNBLFVBQUEsWUFBQSxHQUFlLFVBQUMsR0FBRCxFQUF3QjtFQUMzQyxVQUFJLEdBQUcsWUFBWSxLQUFuQixFQUEwQjtFQUN0QixjQUFLLGlCQUFMLENBQXVCLEdBQXZCOztFQUVBLGVBQU8sR0FBUDtFQUNIOztFQUVELFVBQU0sS0FBSyxHQUFHLElBQUksS0FBSixDQUFVLE1BQU0sQ0FBQyxHQUFELENBQWhCLENBQWQ7O0VBRUEsWUFBSyxpQkFBTCxDQUF1QixLQUF2Qjs7RUFFQSxhQUFPLEtBQVA7RUFDSCxLQVpPOztFQTlTSixRQUFJLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0VBQ2pCLFlBQU0sSUFBSSxLQUFKLENBQVUsbURBQVYsQ0FBTjtFQUNIOztFQUVELFVBQUssT0FBTCxHQUFlLE1BQWY7RUFQb0U7RUFRdkU7RUFFRDs7O0VBR0c7OztFQWpEUDtFQUFBO0VBQUEsU0FrREksZUFBbUI7RUFDZixhQUFPLEtBQUssS0FBWjtFQUNIO0VBRUQ7OztFQUdHOztFQXpEUDtFQUFBO0VBQUEsU0EwREksZUFBbUI7RUFDZixhQUFPLEtBQUssTUFBWjtFQUNIO0VBRUQ7Ozs7RUFJRztFQWxFUDtFQUFBLFNBbUVJLGFBQXFCLEdBQXJCLEVBQStCO0VBQzNCLFVBQUksS0FBSyxtQkFBVCxFQUE4QjtFQUMxQixhQUFLLGlCQUFMLENBQ0ksSUFBSSxLQUFKLDhCQUFnQyxHQUFoQyxPQURKO0VBR0EsYUFBSyxRQUFMLENBQWMsR0FBZDtFQUNILE9BTEQsTUFLTztFQUNILGFBQUssTUFBTCxHQUFjLEdBQWQ7RUFDQSxhQUFLLG1CQUFMLEdBQTJCLElBQTNCO0VBQ0g7RUFDSjtFQUVEOzs7RUFHRzs7RUFsRlA7RUFBQTtFQUFBLFNBbUZJLGVBQW1CO0VBQ2YsYUFBTyxLQUFLLEtBQVo7RUFDSDtFQUVEOzs7O0VBSUc7O0VBM0ZQO0VBQUE7RUFBQTtFQWdHSTs7O0VBR0c7RUFDSCxtQkFBaUI7RUFDYixhQUFPLEtBQUssT0FBWjtFQUNIO0VBRUQ7OztFQUdHO0VBM0dQO0VBQUEsU0E0RkksYUFBbUIsT0FBbkIsRUFBbUQ7RUFDL0MsV0FBSyxPQUFMLEdBQWUsT0FBZjtFQUNIO0VBOUZMO0VBQUE7RUFBQSxTQTRHSSxlQUFtQjtFQUNmLGFBQU8sS0FBSyxTQUFaO0VBQ0g7RUFFRDs7O0VBR0c7O0VBbkhQO0VBQUE7RUFBQSxTQW9ISSxlQUFvQjtFQUNoQixhQUFPLEtBQUssVUFBWjtFQUNIO0VBdEhMOztFQUFBO0VBQUEsRUFHVUMsTUFIVjs7TUM1QmEsUUFBUSxHQUFHLFNBQVgsUUFBVyxDQUNwQixDQURvQixFQUdGO0VBQ2xCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXpCOztFQURrQixvQ0FEZixRQUNlO0VBRGYsSUFBQSxRQUNlO0VBQUE7O0VBR2xCLEVBQUEsWUFBWSxDQUFDLGdCQUFELEVBQW1CLFFBQW5CLENBQVo7RUFFQSxTQUFPLGdCQUFQO0VBQ0g7O0VDQ0QsQ0FBQSxVQUFpQixVQUFqQixFQUEyQjtFQUNULEVBQUEsVUFBQSxDQUFBLFNBQUEsR0FBYUMsU0FBYjtFQUNBLEVBQUEsVUFBQSxDQUFBLFNBQUEsR0FBYUMsU0FBYjtFQUVBLEVBQUEsVUFBQSxDQUFBLGFBQUEsR0FBaUJDLGFBQWpCO0VBQ0EsRUFBQSxVQUFBLENBQUEsZUFBQSxHQUFtQkMsZUFBbkI7RUFDQSxFQUFBLFVBQUEsQ0FBQSxRQUFBLEdBQVlDLFFBQVo7RUFDakIsQ0FQRCxFQUFpQkMsa0JBQVUsS0FBVkEsa0JBQVUsR0FBQSxFQUFBLENBQTNCOztBQVVBLG1CQUFlQSxrQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
