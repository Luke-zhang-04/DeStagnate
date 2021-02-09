/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
        console.warn("WARN: Code 7. See ".concat(url, ". Params: ").concat(_typeof(val), ", ").concat(key));
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
        throw new Error("ERROR: code 4. See ".concat(url));
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
   * Called when component catches a warning. Default behaviour is console.warn
   * @param msg - warning message
   * @returns void
   */


  this.componentDidWarn = function (msg) {
    return console.warn(msg);
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
          return _this.componentDidWarn("WARN: code 4. See ".concat(url, "."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wcml2YXRlL191cmwuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzLmpzIiwiLi4vLi4vbGliL2NyZWF0ZUVsZW1lbnQuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudE5TLmpzIiwiLi4vLi4vbGliL2NyZWF0ZVJlZi5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19iYXNlLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2V2ZW50cy5qcyIsIi4uLy4uL2xpYi91dGlscy5qcyIsIi4uLy4uL2xpYi9jb21wb25lbnQuanMiLCIuLi8uLi9saWIvZnJhZ21lbnQuanMiLCIuLi8uLi9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9sdWtlLXpoYW5nLTA0LmdpdGh1Yi5pby9EZVN0YWduYXRlL2Vycm9yLWNvZGVzXCI7XG5leHBvcnQgZGVmYXVsdCB1cmw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYM1Z5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTkxY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMSGRFUVVGM1JDeERRVUZCTzBGQlJUTkZMR1ZCUVdVc1IwRkJSeXhEUVVGQkluMD0iLCIvKipcbiAqIENvbXBvbmVudFxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBmaWxlIHNoYXJlIGZ1bmN0aW9ucyBhbmQgdHlwZXMgZm9yIGNyZWF0ZUVsZW1lbnQgYW5kIGl0J3MgdmFyaWFudHNcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9fdXJsXCI7XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgdG8gYmluZCB3aXRoXG4gKiBAcGFyYW0gbnMgLSBpZiBuYW1lc3BhY2UgZWxlbWVudFxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgY29uc3QgYmluZFByb3BzID0gKGVsZW1lbnQsIHByb3BzLCBucyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImlubmVySFRNTFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnVsbCwga2V5LCB2YWwudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkuc2xpY2UoMCwgMikgPT09IFwib25cIikgeyAvLyBXb3JrcyBzdWNoIGFzIG9uQ2xpY2ssIG9uQW5pbWF0aW9uRW5kLCBldGMuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodmFsKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpLCB2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJyZWZcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiAodmFsKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIFwiY3VycmVudFwiIGluIHZhbCkge1xuICAgICAgICAgICAgICAgIHZhbC5jdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBXQVJOOiBDb2RlIDcuIFNlZSAke3VybH0uIFBhcmFtczogJHt0eXBlb2YgKHZhbCl9LCAke2tleX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gdG8gYmluZCB3aXRoXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kQ2hpbGRyZW4gPSAoZWxlbWVudCwgY2hpbGRyZW4pID0+IHtcbiAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwgJiYgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkcmVuLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgICAgaWYgKCFjaGlsZHJlbi5kaWRNb3VudCAmJiBlbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ubW91bnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIShlbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgNC4gU2VlICR7dXJsfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnBhcmVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnBhcmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJOeVpXRjBaVVZzWlcxbGJuUlZkR2xzY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTlqY21WaGRHVkZiR1Z0Wlc1MFZYUnBiSE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wZEJVVWM3UVVGRlNDeFBRVUZQTEVWQlFVTXNVMEZCVXl4RlFVRkRMRTFCUVUwc1kwRkJZeXhEUVVGQk8wRkJSWFJETEU5QlFVOHNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJRVHRCUVhsRmVFSTdPenM3T3pzN1IwRlBSenRCUVVOSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4RFFVTnlRaXhQUVVGblFpeEZRVU5vUWl4TFFVRjVRaXhGUVVONlFpeEZRVUZGTEVkQlFVY3NTMEZCU3l4RlFVTk9MRVZCUVVVN1NVRkRUaXhKUVVGSkxFdEJRVXNzUlVGQlJUdFJRVU5RTEV0QlFVc3NUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRelZETEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNSVUZCUlR0blFrRkRjRVFzU1VGQlNTeEhRVUZITEV0QlFVc3NWMEZCVnl4RlFVRkZPMjlDUVVOeVFpeFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlFUdHBRa0ZEY2tNN2NVSkJRVTBzU1VGQlNTeEZRVUZGTEVWQlFVVTdiMEpCUTFnc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZCTzJsQ1FVTndSRHR4UWtGQlRUdHZRa0ZEU0N4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRVHRwUWtGRE5VTTdZVUZEU2p0cFFrRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUlVGQlJTeEZRVUZGTERoRFFVRTRRenRuUWtGRGFrWXNTVUZCU1N4UFFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVlVGQlZTeEZRVUZGTzI5Q1FVTTFRaXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUTNCQ0xFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVOUUxGZEJRVmNzUlVGQmIwSXNSVUZEY0VNc1IwRkJaMElzUTBGRGJrSXNRMEZCUVR0cFFrRkRTanRoUVVOS08ybENRVUZOTEVsQlEwZ3NSMEZCUnl4TFFVRkxMRXRCUVVzN1owSkJRMklzVDBGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRkZCUVZFN1owSkJRM2hDTEZOQlFWTXNTVUZCU1N4SFFVRkhMRVZCUTJ4Q08yZENRVU5ITEVkQlFXOUNMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlFUdGhRVU14UXp0cFFrRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eFRRVUZUTEVWQlFVVTdaMEpCUXpGQ0xFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFZEJRVWNzWVVGQllTeFBRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1IwRkJSeXhGUVVGRkxFTkJRVU1zUTBGQlFUdGhRVU16UlR0VFFVTktPMHRCUTBvN1FVRkRUQ3hEUVVGRExFTkJRVUU3UVVGRlJEczdPenM3TzBkQlRVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3haUVVGWkxFZEJRVWNzUTBGRGVFSXNUMEZCWVN4RlFVTmlMRkZCUVhWQ0xFVkJRMjVDTEVWQlFVVTdTVUZEVGl4SlFVRkpMRkZCUVZFc1MwRkJTeXhKUVVGSkxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0UlFVTTNReXhKUVVGSkxGRkJRVkVzV1VGQldTeExRVUZMTEVWQlFVVTdXVUZETTBJc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEV0QlFXMUNMRVZCUVVVc1JVRkJSU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRVHRUUVVNeFJUdGhRVUZOTEVsQlEwZ3NUMEZCVHl4UlFVRlJMRXRCUVVzc1VVRkJVVHRaUVVNMVFpeFBRVUZQTEZGQlFWRXNTMEZCU3l4UlFVRlJMRVZCUXpsQ08xbEJRMFVzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExGRkJRVkVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVFN1UwRkRjRVU3WVVGQlRTeEpRVUZKTEZGQlFWRXNXVUZCV1N4VFFVRlRMRVZCUVVVN1dVRkRkRU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRWxCUVVrc1QwRkJUeXhaUVVGWkxFMUJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVTdaMEpCUXpkRUxGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVFN1owSkJSWFpDTEU5QlFVMDdZVUZEVkR0cFFrRkJUU3hKUVVGSkxFTkJRVU1zUTBGQlF5eFBRVUZQTEZsQlFWa3NUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRk8yZENRVU5xUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGQk8yRkJReTlETzFsQlJVUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hMUVVGTExFOUJRVThzUlVGQlJUdG5Ra0ZETjBJc1VVRkJVU3hEUVVGRExFMUJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVRTdZVUZETlVJN1dVRkZSQ3hSUVVGUkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVRTdVMEZEZWtJN1lVRkJUVHRaUVVOSUxFOUJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVFN1UwRkRhRU03UzBGRFNqdEJRVU5NTEVOQlFVTXNRMEZCUVNKOSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuLCBiaW5kUHJvcHMsIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG4vKipcbiAqXG4gKiBAcGFyYW0gdGFnTmFtZU9yQ29tcG9uZW50IC0gbmFtZSBvZiBIVE1MIGVsZW1lbnQgb3IgZnVuY3Rpb24gY29tcG9uZW50XG4gKiBAcGFyYW0gcHJvcHMgLSBwcm9wcyBvZiBlbGVtZW50IG9yIGNvbXBvbmVudFxuICogMS4gSWYgYHRhZ05hbWVPckNvbXBvbmVudGAgaXMgdGFnbmFtZSwgcHJvcHMgYXJlIGVsZW1lbnQgcHJvcGVydGllcywgc3VjaCBhcyBjbGFzcywgaW5uZXJIVE1MLCBpZCwgc3R5bGUsIGV0Y1xuICogMi4gSWYgYHRhZ05hbWVPckNvbXBvbmVudGAgaXMgYSBmdW5jdGlvbiwgcHJvcHMgYXJlIHRoYXQgZnVuY3Rpb25zIHBhcmFtZXRlcnNcbiAqIEBwYXJhbSBjaGlsZHJlbiAtIGNoaWxkcmVuIG9mIHRoaXMgZWxlbWVudC4gQ2FuIGJlIG5vdGhpbmcsIG51bWJlciAoY29udmVydGVkIHRvIHN0cmluZyksIHN0cmluZyAodGV4dCksIG9yIGFub3RoZXIgZWxlbWVudC4gQW4gYXJyYXkgb2YgYW55IG9mIHRoZXNlIHdpbGwgY3JlYXRlIG11bHRpcGxlIGNoaWxkcmVuXG4gKiBAcGFyYW0gY2hpbGRyZW5BcmdzIC0gcmVzdCBwYXJhbWV0ZXIgZm9yIGNoaWxkcmVuXG4gKiBAcmV0dXJucyBlbGVtZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWVPckNvbXBvbmVudCwgcHJvcHMsIC4uLmNoaWxkcmVuKSB7XG4gICAgaWYgKHR5cGVvZiAodGFnTmFtZU9yQ29tcG9uZW50KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lT3JDb21wb25lbnQpO1xuICAgICAgICBiaW5kUHJvcHMoZWxlbWVudCwgcHJvcHMpO1xuICAgICAgICBiaW5kQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mICh0YWdOYW1lT3JDb21wb25lbnQpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIHRhZ05hbWVPckNvbXBvbmVudChwcm9wcywgY2hpbGRyZW4pO1xuICAgIH1cbiAgICByZXR1cm4gRXJyb3IoXCJ0YWdOYW1lT3JDb21wb25lbnQgaXMgb2YgaW52YWxpZCB0eXBlLlwiKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZM0psWVhSbFJXeGxiV1Z1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OWpjbVZoZEdWRmJHVnRaVzUwTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096dEhRVkZITzBGQlEwZ3NNa0pCUVRKQ08wRkJRek5DTEdsRFFVRnBRenRCUVVWcVF5eFBRVUZQTEVWQlIwZ3NXVUZCV1N4RlFVTmFMRk5CUVZNc1IwRkRXaXhOUVVGTkxDdENRVUVyUWl4RFFVRkJPMEZCYlVOMFF6czdPenM3T3pzN08wZEJVMGM3UVVGRFNDeE5RVUZOTEZWQlFWVXNZVUZCWVN4RFFVbDZRaXhyUWtGSFdTeEZRVU5hTEV0QlFUWkNMRVZCUXpkQ0xFZEJRVWNzVVVGQk1rSTdTVUZGT1VJc1NVRkJTU3hQUVVGTkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1MwRkJTeXhSUVVGUkxFVkJRVVU3VVVGRGVrTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHRkJRV0VzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGQk8xRkJSVEZFTEZOQlFWTXNRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJNRUlzUTBGQlF5eERRVUZCTzFGQlJUbERMRmxCUVZrc1EwRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVRTdVVUZGTDBJc1QwRkJUeXhQUVVGUExFTkJRVUU3UzBGRGFrSTdVMEZCVFN4SlFVRkpMRTlCUVUwc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4TFFVRkxMRlZCUVZVc1JVRkJSVHRSUVVOc1JDeFBRVUZQTEd0Q1FVRnJRaXhEUVVGRExFdEJRVlVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVR0TFFVTnNSRHRKUVVWRUxFOUJRVThzUzBGQlN5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVUU3UVVGRE1VUXNRMEZCUXp0QlFVVkVMR1ZCUVdVc1lVRkJZU3hEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50TlMgY3JlYXRlRWxlbWVudCBmb3IgbmFtZXNwYWNlZCBlbGVtZW50c1xuICovXG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcywgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbi8qKlxuICogQ3JlYXRlcyBhIGNoaWxkIGVsZW1lbnQgdG8gZGVTdGFnbmF0ZVxuICogQHBhcmFtIG5hbWVzcGFjZVVSSSAtIG5hbWVzcGFjZSB1cmlcbiAqIEBwYXJhbSB0YWdOYW1lIC0gbmFtZSBvZiBIVE1MIGVsZW1lbnRcbiAqIEBwYXJhbSBwcm9wcyAtIGVsZW1lbnQgcHJvcGVydGllcywgc3VjaCBhcyBjbGFzcywgaW5uZXJIVE1MLCBpZCwgc3R5bGUsIGV0Y1xuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50LiBDYW4gYmUgbm90aGluZywgbnVtYmVyIChjb252ZXJ0ZWQgdG8gc3RyaW5nKSwgc3RyaW5nICh0ZXh0KSwgb3IgYW5vdGhlciBlbGVtZW50LiBBbiBhcnJheSBvZiBhbnkgb2YgdGhlc2Ugd2lsbCBjcmVhdGUgbXVsdGlwbGUgY2hpbGRyZW5cbiAqIEBwYXJhbSBjaGlsZHJlblJlc3QgLSByZXN0IHBhcmFtZXRlciBvZiBjaGlsZHJlblxuICogQHJldHVybnMgaHRtbCBlbGVtZW50XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50TlMgPSAobmFtZXNwYWNlVVJJLCB0YWdOYW1lLCBwcm9wcywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZVVSSSwgdGFnTmFtZSk7XG4gICAgYmluZFByb3BzKGVsZW1lbnQsIHByb3BzLCB0cnVlKTtcbiAgICBiaW5kQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBlbGVtZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnROUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSmxZWFJsUld4bGJXVnVkRTVUTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnlaV0YwWlVWc1pXMWxiblJPVXk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdSMEZSUnp0QlFVVklMRTlCUVU4c1JVRkZTQ3haUVVGWkxFVkJRMW9zVTBGQlV5eEhRVU5hTEUxQlFVMHNLMEpCUVN0Q0xFTkJRVUU3UVVGRmRFTTdPenM3T3pzN08wZEJVVWM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4bFFVRmxMRWRCUVVjc1EwRkRNMElzV1VGQkswY3NSVUZETDBjc1QwRkJNRU1zUlVGRE1VTXNTMEZCZDBNc1JVRkRlRU1zUjBGQlJ5eFJRVUV5UWl4RlFVTjJRaXhGUVVGRk8wbEJRMVFzVFVGQlRTeFBRVUZQTEVkQlFVY3NVVUZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhaUVVGWkxFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVRTdTVUZGTDBRc1UwRkJVeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVFN1NVRkZMMElzV1VGQldTeERRVUZETEU5QlFVOHNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRVHRKUVVVdlFpeFBRVUZQTEU5QlFVOHNRMEZCUVR0QlFVTnNRaXhEUVVGRExFTkJRVUU3UVVGRlJDeGxRVUZsTEdWQlFXVXNRMEZCUVNKOSIsIi8qKlxuICogQ3JlYXRlcyBhIHJlZmVyZW5jZSBmb3IgYSBuZXN0ZWQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBlbXB0eSByZWYgb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVSZWYgPSAoKSA9PiAoe1xuICAgIGN1cnJlbnQ6IG51bGwsXG59KTtcbi8qKlxuICogQ3JlYXRlcyBhIHJlZmVyZW5jZSBmb3IgYSBuZXN0ZWQgY29tcG9uZW50XG4gKiBAcmV0dXJucyBlbXB0eSByZWYgb2JqZWN0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSmxZWFJsVW1WbUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk55WldGMFpWSmxaaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGbFFUczdPMGRCUjBjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeFRRVUZUTEVkQlFVY3NSMEZCZDBNc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGFrVXNUMEZCVHl4RlFVRkZMRWxCUVVrN1EwRkRhRUlzUTBGQlF5eERRVUZCTzBGQlJVWTdPenRIUVVkSE8wRkJRMGdzWlVGQlpTeFRRVUZUTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgUHJlc2V0IC0gYmFzZSBmb3IgYSBjb21wb25lbnRcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudE5TIH0gZnJvbSBcIi4uL2NyZWF0ZUVsZW1lbnROU1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlUmVmIH0gZnJvbSBcIi4uL2NyZWF0ZVJlZlwiO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50c1xuICovXG5leHBvcnQgY2xhc3MgUHJlc2V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcbiAgICAgICAgdGhpcy5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gY29tcG9uZW50IGNhdGNoZXMgZXJyb3IuIERlZmF1bHQgYmVoYXZpb3VyIGlzIGNvbnNvbGUuZXJyb3JcbiAgICAgICAgICogQHBhcmFtIGVycm9yIC0gZXJyb3Igb2JqZWN0IHdpdGggaW5mb1xuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoID0gKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIGNvbXBvbmVudCBjYXRjaGVzIGEgd2FybmluZy4gRGVmYXVsdCBiZWhhdmlvdXIgaXMgY29uc29sZS53YXJuXG4gICAgICAgICAqIEBwYXJhbSBtc2cgLSB3YXJuaW5nIG1lc3NhZ2VcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRXYXJuID0gKG1zZykgPT4gY29uc29sZS53YXJuKG1zZyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgYmVmb3JlIGNvbXBvbmVudCBpcyB1cGRhdGVkXG4gICAgICAgICAqIEByZXR1cm5zIHdoZXRoZXIgb3Igbm90IGNvbXBvbmVudCBzaG91bGQgdXBkYXRlL3JlLXJlbmRlclxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUgPSAoKSA9PiB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVuZGVyaW5nIEhUTUwsIG11c3QgYmUgcGFydCBvZiBleHRlbmRlZCBjbGFzc1xuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAYWJzdHJhY3RcbiAgICAgICAgICogQHJldHVybnMgaWYgcmV0dXJucyBudWxsIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbmRlciA9ICgpID0+IG51bGw7XG4gICAgfVxufVxuUHJlc2V0LmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcblByZXNldC5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuUHJlc2V0LmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMkpoYzJVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk4dUxpOXpjbU12Y0hKcGRtRjBaUzlmWW1GelpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3TzBkQlUwYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1QwRkJUeXhKUVVGSkxHTkJRV01zUlVGQlF5eE5RVUZOTEd0Q1FVRnJRaXhEUVVGQk8wRkJRekZFTEU5QlFVOHNSVUZCUXl4UFFVRlBMRWxCUVVrc1owSkJRV2RDTEVWQlFVTXNUVUZCVFN4dlFrRkJiMElzUTBGQlFUdEJRVU01UkN4UFFVRlBMRVZCUVVNc1QwRkJUeXhKUVVGSkxGVkJRVlVzUlVGQlF5eE5RVUZOTEdOQlFXTXNRMEZCUVR0QlFXbERiRVFzTUVKQlFUQkNPMEZCUXpGQ096dEhRVVZITzBGQlEwZ3NUVUZCVFN4UFFVRm5RaXhOUVVGTk8wbEJRVFZDTzFGQlVXOUNMR3RDUVVGaExFZEJRVWNzWTBGQll5eERRVUZCTzFGQlJUbENMRzlDUVVGbExFZEJRVWNzWjBKQlFXZENMRU5CUVVFN1VVRkZiRU1zWTBGQlV5eEhRVUZITEZWQlFWVXNRMEZCUVR0UlFVVjBRenM3T3p0WFFVbEhPMUZCUTBrc2MwSkJRV2xDTEVkQlFVY3NRMEZCUXl4TFFVRlpMRVZCUVZFc1JVRkJSU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVFN1VVRkZka1U3T3pzN1YwRkpSenRSUVVOSkxIRkNRVUZuUWl4SFFVRkhMRU5CUVVNc1IwRkJWeXhGUVVGUkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8xRkJSV3hGT3pzN1YwRkhSenRSUVVOSkxEQkNRVUZ4UWl4SFFVRkhMRWRCUVZrc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlFUdFJRVVZzUkRzN096czdPMWRCVFVjN1VVRkRZU3hYUVVGTkxFZEJRVWNzUjBGQlpTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkJPMGxCUlc1RUxFTkJRVU03TzBGQmVrTXdRaXh2UWtGQllTeEhRVUZITEdOQlFXTXNRMEZCUVR0QlFVVTVRaXh6UWtGQlpTeEhRVUZITEdkQ1FVRm5RaXhEUVVGQk8wRkJSV3hETEdkQ1FVRlRMRWRCUVVjc1ZVRkJWU3hEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBFdmVudHNcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IFByZXNldCBhcyBCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vX2Jhc2VcIjtcbmNvbnN0IGV2ZW50TmFtZXMgPSBbXG4gICAgXCJvbkZvY3VzXCIsXG4gICAgXCJvbkJsdXJcIixcbiAgICBcIm9uRm9jdXNJblwiLFxuICAgIFwib25Gb2N1c091dFwiLFxuICAgIFwib25BbmltYXRpb25TdGFydFwiLFxuICAgIFwib25BbmltYXRpb25DYW5jZWxcIixcbiAgICBcIm9uQW5pbWF0aW9uRW5kXCIsXG4gICAgXCJvbkFuaW1hdGlvbkl0ZXJhdGlvblwiLFxuICAgIFwib25UcmFuc2l0aW9uU3RhcnRcIixcbiAgICBcIm9uVHJhbnNpdGlvbkNhbmNlbFwiLFxuICAgIFwib25UcmFuc2l0aW9uRW5kXCIsXG4gICAgXCJvblRyYW5zaXRpb25SdW5cIixcbiAgICBcIm9uQXV4Q2xpY2tcIixcbiAgICBcIm9uQ2xpY2tcIixcbiAgICBcIm9uRGJsQ2xpY2tcIixcbiAgICBcIm9uTW91c2VEb3duXCIsXG4gICAgXCJvbk1vdXNlRW50ZXJcIixcbiAgICBcIm9uTW91c2VMZWF2ZVwiLFxuICAgIFwib25Nb3VzZU1vdmVcIixcbiAgICBcIm9uTW91c2VPdmVyXCIsXG4gICAgXCJvbk1vdXNlT3V0XCIsXG4gICAgXCJvbk1vdXNlVXBcIixcbl07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzIGV2ZW50XG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMgZXZlbnRcbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sRXZlbnROYW1lID0gZXZlbnROYW1lLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksIGNhbGxiYWNrID0gdGhpc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcihodG1sRXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyVjJaVzUwY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTlsZG1WdWRITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3p0SFFWTkhPMEZCUlVnc1QwRkJUeXhGUVVGRExFMUJRVTBzU1VGQlNTeGhRVUZoTEVWQlFVTXNUVUZCVFN4VFFVRlRMRU5CUVVFN1FVRlpMME1zVFVGQlRTeFZRVUZWTEVkQlFYRkNPMGxCUTJwRExGTkJRVk03U1VGRFZDeFJRVUZSTzBsQlExSXNWMEZCVnp0SlFVTllMRmxCUVZrN1NVRkRXaXhyUWtGQmEwSTdTVUZEYkVJc2JVSkJRVzFDTzBsQlEyNUNMR2RDUVVGblFqdEpRVU5vUWl4elFrRkJjMEk3U1VGRGRFSXNiVUpCUVcxQ08wbEJRMjVDTEc5Q1FVRnZRanRKUVVOd1FpeHBRa0ZCYVVJN1NVRkRha0lzYVVKQlFXbENPMGxCUTJwQ0xGbEJRVms3U1VGRFdpeFRRVUZUTzBsQlExUXNXVUZCV1R0SlFVTmFMR0ZCUVdFN1NVRkRZaXhqUVVGak8wbEJRMlFzWTBGQll6dEpRVU5rTEdGQlFXRTdTVUZEWWl4aFFVRmhPMGxCUTJJc1dVRkJXVHRKUVVOYUxGZEJRVmM3UTBGRFpDeERRVUZCTzBGQmNVaEVMREJDUVVFd1FqdEJRVU14UWl4TlFVRk5MRTlCUVdkQ0xFMUJRVThzVTBGQlVTeGhRVUZoTzBsQlFXeEVPenRSUVVWSk96czdPMWRCU1VjN1VVRkRaMElzZFVKQlFXdENMRWRCUVVjc1EwRkJReXhQUVVGdlFpeEZRVUZSTEVWQlFVVTdXVUZEYmtVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlFUdFJRVU5xUkN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3p0WFFVbEhPMUZCUTJkQ0xIbENRVUZ2UWl4SFFVRkhMRU5CUVVNc1QwRkJiMElzUlVGQlVTeEZRVUZGTzFsQlEzSkZMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVUU3VVVGRGNFUXNRMEZCUXl4RFFVRkJPMUZCUlU4c2JVSkJRV01zUjBGQlJ5eERRVUZETEdGQlFUUkNMRVZCUVZFc1JVRkJSVHRaUVVNMVJDeExRVUZMTEUxQlFVMHNVMEZCVXl4SlFVRkpMRlZCUVZVc1JVRkJSVHRuUWtGRGFFTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkRiRVFzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRVHRuUWtGRk9VSXNTVUZCU1N4UlFVRlJMRXRCUVVzc1UwRkJVeXhKUVVGSkxGRkJRVkVzV1VGQldTeFJRVUZSTEVWQlFVVTdiMEpCUTNoRUxHRkJRV0VzUTBGQlF5eGhRVUZoTEVWQlFVVXNVVUZCT0VNc1EwRkJReXhEUVVGQk8ybENRVU12UlR0aFFVTktPMUZCUTB3c1EwRkJReXhEUVVGQk8wbEJSVXdzUTBGQlF6dERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIFV0aWxzIC0gdXRpbGl0aWVzIGZvciBEZVN0YWduYXRlXG4gKi9cbi8qKlxuICogQ2hlY2tzIGlmIHZhbDEgYW5kIHZhbDIgYXJlIGVxdWFsXG4gKiBAcGFyYW0gdmFsMSAtIHZhbHVlIHRvIGNoZWNrIGZvciBlcXVhbGl0eVxuICogQHBhcmFtIHZhbDIgLSB2YWx1ZSB0byBjb21wYXJlIGFnYWluc3QgdmFsMVxuICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aCBpc1xuICogcmVhY2hlZCwgdGhlIHR3byB2YWx1ZXMgYXJlIHNpbXBseSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcGFyYW0gbWF4TGVuZ3RoIC0gbWF4IGxlbmd0aCBvZiBhcnJheSB0byBjcmF3bC4gSWYgbWF4IGxlbnRoIGlzIHJlYWNoZWQsIHR3b1xuICogYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAqIEByZXR1cm5zIGB2YWwxID09PSB2YWwyYFxuICovXG5leHBvcnQgY29uc3QgaXNFcXVhbCA9ICh2YWwxLCB2YWwyLCBtYXhEZXB0aCA9IDMsIG1heExlbmd0aCA9IDEwKSA9PiB7XG4gICAgaWYgKG1heERlcHRoID09PSAwKSB7IC8vIElmIG1heERlcHRoIHJlYWNoZWQsIGp1c3QgcnVuID09PVxuICAgICAgICByZXR1cm4gdmFsMSA9PT0gdmFsMjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbDEgIT09IHR5cGVvZiB2YWwyKSB7IC8vIElmIHRoZXkgYXJlbid0IHRoZSBzYW1lIHR5cGUsIHJldHVybiBmYWxzZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwxIGluc3RhbmNlb2YgQXJyYXkgJiYgdmFsMiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGlmICh2YWwxLmxlbmd0aCAhPT0gdmFsMi5sZW5ndGgpIHsgLy8gSWYgYXJyYXlzIGhhdmUgZGlmZmVyZW50IGxlbmd0aHNcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsMS5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsMi5sZW5ndGggPiBtYXhMZW5ndGgpIHsgLy8gSWYgYXJyYXkgaXMgdG9vIGJpZ1xuICAgICAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbDEubGVuZ3RoOyBpbmRleCsrKSB7IC8vIEdvIHRocm91Z2ggZWFjaCBpdGVtXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtpbmRleF0sIHZhbDJbaW5kZXhdLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gVGVzdCBpZiB0d28gYXJyYXkgaXRlbXMgYXJlIGVxdWFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwxIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbDIgaW5zdGFuY2VvZiBPYmplY3QpIHsgLy8gSWYgb2JqZWN0XG4gICAgICAgIGlmICghaXNFcXVhbChPYmplY3Qua2V5cyh2YWwxKSwgT2JqZWN0LmtleXModmFsMiksIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBJZiB0aGV5IGRvbid0IGhhdmUgaGUgc2FtZSBrZXlzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsMSkpIHsgLy8gR28gdGhyb3VnaCBhbmQgdGVzdCBlYWNoIHZhbHVlXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtrZXldLCB2YWwyW2tleV0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlzRXF1YWwsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12ZFhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZGU0RzN096czdPenM3TzBkQlUwYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hQUVVGUExFZEJRVWNzUTBGRGJrSXNTVUZCWVN4RlFVTmlMRWxCUVdFc1JVRkRZaXhSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVU5hTEZOQlFWTXNSMEZCUnl4RlFVRkZMRVZCUTFBc1JVRkJSVHRKUVVOVUxFbEJRVWtzVVVGQlVTeExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVRkZMRzlEUVVGdlF6dFJRVU4wUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVUU3UzBGRGRrSTdVMEZCVFN4SlFVRkpMRTlCUVU4c1NVRkJTU3hMUVVGTExFOUJRVThzU1VGQlNTeEZRVUZGTEVWQlFVVXNOa05CUVRaRE8xRkJRMjVHTEU5QlFVOHNTMEZCU3l4RFFVRkJPMHRCUTJZN1NVRkZSQ3hKUVVGSkxFbEJRVWtzV1VGQldTeExRVUZMTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1JVRkJSVHRSUVVOb1JDeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRXRCUVVzc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEcxRFFVRnRRenRaUVVOc1JTeFBRVUZQTEV0QlFVc3NRMEZCUVR0VFFVTm1PMUZCUVVNc1NVRkJTU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEZOQlFWTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExGTkJRVk1zUlVGQlJTeEZRVUZGTEhOQ1FVRnpRanRaUVVNNVJTeFBRVUZQTEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVFN1UwRkRka0k3VVVGRlJDeExRVUZMTEVsQlFVa3NTMEZCU3l4SFFVRkhMRU5CUVVNc1JVRkJSU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1JVRkJSU3hGUVVGRkxIVkNRVUYxUWp0WlFVTjJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVXNVVUZCVVN4SFFVRkhMRU5CUVVNc1JVRkJSU3hUUVVGVExFTkJRVU1zUlVGQlJTeEZRVUZGTEc5RFFVRnZRenRuUWtGRGJrY3NUMEZCVHl4TFFVRkxMRU5CUVVFN1lVRkRaanRUUVVOS08xRkJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVRTdTMEZEWkR0VFFVRk5MRWxCUVVrc1NVRkJTU3haUVVGWkxFMUJRVTBzU1VGQlNTeEpRVUZKTEZsQlFWa3NUVUZCVFN4RlFVRkZMRVZCUVVVc1dVRkJXVHRSUVVOMlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVTlNMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlEycENMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlEycENMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eERRVU5hTEVWQlFVVXNSVUZCUlN4clEwRkJhME03V1VGRGJrTXNUMEZCVHl4TFFVRkxMRU5CUVVFN1UwRkRaanRSUVVWRUxFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTEdsRFFVRnBRenRaUVVkd1JTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVTlFMRWxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGRGFrSXNTVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVOc1FpeFJRVUZSTEVkQlFVY3NRMEZCUXl4RlFVTmFMRk5CUVZNc1EwRkRXaXhGUVVGRk8yZENRVU5ETEU5QlFVOHNTMEZCU3l4RFFVRkJPMkZCUTJZN1UwRkRTanRSUVVWRUxFOUJRVThzU1VGQlNTeERRVUZCTzB0QlEyUTdTVUZGUkN4UFFVRlBMRWxCUVVrc1MwRkJTeXhKUVVGSkxFTkJRVUU3UVVGRGVFSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaVHRKUVVOWUxFOUJRVTg3UTBGRFZpeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBEZVN0YWduYXRlIGNvbXBvbmVudCBjbGFzc1xuICogQHByZXNlcnZlXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1saW5lcyAqL1xuaW1wb3J0IHsgRXZlbnRzIGFzIEJhc2UgfSBmcm9tIFwiLi9wcml2YXRlL19ldmVudHNcIjtcbmltcG9ydCB1cmwgZnJvbSBcIi4vcHJpdmF0ZS9fdXJsXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcbi8qKlxuICogRGVTdGFnbmF0ZVxuICogQGNsYXNzZGVzYyBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjbGFzc1xuICogQG5hbWVzcGFjZVxuICogQGFic3RyYWN0XG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3QgY2xhc3MgY29tcG9uZW50XG4gICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBvZiB0aGlzIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSBlbGVtZW50IHByb3BlcnRpZXM7IHdvcmtzIGxpa2UgUmVhY3QgUHJvcHNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXJlbnQsIHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0YXRlIG9mIGNvbXBvbmVudC4gV29ya3Mgc2ltaWxhciBSZWFjdCBTdGF0ZVxuICAgICAgICAgKiBAdHlwZSB7dW5kZWZpbmVkIHwgT2JqZWN0LjxzdHJpbmcsIHVua25vd24+fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB7fTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGluaXRpYWwgc3RhdGUgd2FzIHNldCBpbiBpbml0aWFsaXplclxuICAgICAgICAgKiBEbyBub3QgdGhyb3cgZXJyb3Igd2l0aCBkaXJlY3Qgc3RhdGUgc2V0dGluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBjb21wb25lbnQgaXMgbW91bnRlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoYXQgdG8gY2FsbCBiZWZvcmUgY29tcG9uZW50IHVwZGF0ZSAoc3RhdGUgbXV0YXRpb24pXG4gICAgICAgICAqIEBwYXJhbSB7UHJvcHN9IHByZXZQcm9wcyAtIHByZXZpb3VzIHByb3BzXG4gICAgICAgICAqIEBwYXJhbSBwcmV2U3RhdGUgLSBwcmV2aW91cyBzdGF0ZVxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID0gKHByZXZQcm9wcywgcHJldlN0YXRlKSA9PiBbcHJldlByb3BzLCBwcmV2U3RhdGVdO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2VzIGEgY29tcG9uZW50IHRvIHVwZGF0ZVxuICAgICAgICAgKiBGb2xsb3dzIHRoZSBzYW1lIGNvbXBvbmVudCB1cGRhdGluZyBwcm9jZWR1cmUgYXMgc2V0U3RhdGUgd2l0aG91dCBtb2RpZnlpbmcgc3RhdGVcbiAgICAgICAgICogQHJldHVybnMgcmV0dXJucyBlcnJvciBpZiBlcnJvciBpcyB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHRoaXMuX2V4ZWNSZW5kZXIoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVja3MgaWYgdGhlIHN0YXRlIGNoYW5nZWQgZnJvbSB0aGUgcHJldmlvdXMgc3RhdGUuIENhbiBtZSBhdHRhY2hlZCB0b1xuICAgICAgICAgKiBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYFxuICAgICAgICAgKiBAcGFyYW0ga2V5cyAtIGxpc3Qgb2Yga2V5cyB0byBjcmF3bC4gSWYgbGVmdCB1bmRlZmluZWQgKGRlZmF1bHQpIHRoZW5cbiAgICAgICAgICogdXNlIGFsbCBrZXlzLiBTaG91bGQgYmUgYGtleW9mIFN0YXRlYCwgYnV0IHRoZXJlIHdlcmUgc29tZSBUeXBlc2NyaXB0XG4gICAgICAgICAqIHRyb3VibGVzLlxuICAgICAgICAgKiBAcGFyYW0gbWF4RGVwdGggLSBtYXggcmVjdXJzaW9uIGRlcHRoIHRvIGNyYXdsIGFuIG9iamVjdC4gQWZ0ZXIgbWF4IGRlcHRoXG4gICAgICAgICAqIGlzIHJlYWNoZWQsIHRoZSB0d28gdmFsdWVzIGFyZSBzaW1wbHkgY29tcGFyZWQgd2l0aCBgPT09YFxuICAgICAgICAgKiBAcGFyYW0gbWF4TGVuZ3RoIC0gbWF4IGxlbmd0aCBvZiBhcnJheSB0byBjcmF3bC4gSWYgbWF4IGxlbnRoIGlzIHJlYWNoZWQsXG4gICAgICAgICAqIHR3byBhcnJheXMgd2lsbCBzaW1wbHkgYmUgY29tcGFyZWQgd2l0aCBgPT09YFxuICAgICAgICAgKiBAcmV0dXJucyBgdmFsMSA9PT0gdmFsMmBcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhdGVEaWRDaGFuZ2UgPSAoa2V5cywgbWF4RGVwdGggPSAzLCBtYXhMZW5ndGggPSAxNSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKGtleXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdXRpbHMuaXNFcXVhbCh0aGlzLl9zdGF0ZSwgdGhpcy5fcHJldlN0YXRlLCBtYXhEZXB0aCwgbWF4TGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0ge30sIHByZXZTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIHN0YXRlW2tleV0gPSB0aGlzLl9zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIHByZXZTdGF0ZVtrZXldID0gKF9hID0gdGhpcy5fcHJldlN0YXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Fba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhdXRpbHMuaXNFcXVhbChzdGF0ZSwgcHJldlN0YXRlLCBtYXhEZXB0aCwgbWF4TGVuZ3RoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgc3RhdGVcbiAgICAgICAgICogQHBhcmFtIG9iaiAtIHN0YXRlIHRvIHNldFxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNldFN0YXRlID0gKG9iaikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3N0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9zdGF0ZSwgb2JqKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXJlZENvbnRlbnQgPSB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSgpXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5fZXhlY1JlbmRlcigpXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZShyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nLCBtYXgtbGVuICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcGFyYW0gcGFyZW50IC0gcGFyZW50IGVsZW1lbnQgdG8gbW91bnQgd2l0aDsgb3B0aW9uYWxcbiAgICAgICAgICogQHJldHVybnMgLSByZXN1bHQgb2YgYXBwZW5kIGNoaWxkIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdW50Q29tcG9uZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsTW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmNvbXBvbmVudERpZE1vdW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5mb3JFYWNoKChjaGlsZCkgPT4gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgbW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudCA9IHRoaXMubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbm1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5tb3VudENvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudERpZFdhcm4oYFdBUk46IGNvZGUgNC4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyh0aGlzLl9wYXJlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkTW91bnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnQgPSB0aGlzLnVubW91bnRDb21wb25lbnQ7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbWF4LWxlbiwgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZyAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBjaGlsZHJlbiBmcm9tIHRoaXMuX3BhcmVudFxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMuX3BhcmVudC5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4ZWN1dGVzIG5ldyByZW5kZXJcbiAgICAgICAgICogQHJldHVybnMgcmVuZGVyZWQgY29udGVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fZXhlY1JlbmRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZXMgdGhlIGNvbXBvbmVudFxuICAgICAgICAgKiBAcGFyYW0gcmVuZGVyZWRDb250ZW50IC0gcmVuZGVyZWQgY29udGVudCBmcm9tIGV4ZWN1dGluZyB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3VwZGF0ZSA9IChyZW5kZXJlZENvbnRlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLl9wYXJlbnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hcHBlbmRDaGlsZChyZW5kZXJlZENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgIChfYyA9IHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IgPSAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFN0cmluZyhlcnIpKTtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYXJlbnQgaXMgbnVsbCwgZXhwZWN0ZWQgSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGdldFN0YXRlIGdldHRlciBhcyB0aGlzLnN0YXRlIGl0c2VsZiBpcyBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgY29tcG9uZW50IHN0YXRlXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldHMgY29tcG9uZW50IHN0YXRlXG4gICAgICogV0FSTjogZG8gbm90IHVzZSB0aGlzIG1ldGhvZCB0byBtdXRhdGUgdGhlIHN0YXRlIGRpcmVjdGx5XG4gICAgICogQHBhcmFtIG9iaiAtIHN0YXRlIHRvIHNldFxuICAgICAqL1xuICAgIHNldCBzdGF0ZShvYmopIHtcbiAgICAgICAgaWYgKHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDEuIFNlZSAke3VybH0uYCkpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShvYmopO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBvYmo7XG4gICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRQcm9wcyBnZXR0ZXIgYXMgdGhpcy5wcm9wcyBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHByb3BzXG4gICAgICovXG4gICAgZ2V0IGdldFByb3BzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBwYXJlbnQgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0gZWxlbWVudCAtIHBhcmVudCBlbGVtZW50XG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIHNldCBwYXJlbnQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHBhcmVudCBlbGVtZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHJldHVybnMgcGFyZW50XG4gICAgICovXG4gICAgZ2V0IHBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGRpZE1vdW50IHZhbHVlIHB1YmxpY2x5XG4gICAgICogQHJldHVybnMgaWYgbW91bnRlZFxuICAgICAqL1xuICAgIGdldCBkaWRNb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpZE1vdW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwcmV2aW91cyBzdGF0ZS4gVW5kZWZpbmVkIGlmIG5vIHByZXZpb3VzIHN0YXRlIGV4aXN0c1xuICAgICAqIEByZXR1cm5zIHByZXZpb3VzIHN0YXRlXG4gICAgICovXG4gICAgZ2V0IHByZXZTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXZTdGF0ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl0Y0c5dVpXNTBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOdmJYQnZibVZ1ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPenRIUVZWSE8wRkJRMGdzT0VKQlFUaENPMEZCUlRsQ0xFOUJRVThzUlVGQlF5eE5RVUZOTEVsQlFVa3NTVUZCU1N4RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZGYUVRc1QwRkJUeXhIUVVGSExFMUJRVTBzWjBKQlFXZENMRU5CUVVFN1FVRkRhRU1zVDBGQlR5eExRVUZMTEUxQlFVMHNVMEZCVXl4RFFVRkJPMEZCUlROQ096czdPenM3UjBGTlJ6dEJRVU5JTEUxQlFVMHNUMEZCWjBJc1UwRkhjRUlzVTBGQlVTeEpRVUZKTzBsQk5rSldPenM3TzA5QlNVYzdTVUZEU0N4WlFVRnZRaXhOUVVFeVFpeEZRVUZaTEV0QlFXRTdVVUZEY0VVc1MwRkJTeXhGUVVGRkxFTkJRVUU3VVVGRVowUXNWVUZCU3l4SFFVRk1MRXRCUVVzc1EwRkJVVHRSUVdoRGVFVTdPenRYUVVkSE8xRkJRMHNzVjBGQlRTeEhRVUZWTEVWQlFWY3NRMEZCUVR0UlFVVnVRenM3TzFkQlIwYzdVVUZEU3l4M1FrRkJiVUlzUjBGQlJ5eExRVUZMTEVOQlFVRTdVVUZQYmtNN08xZEJSVWM3VVVGRFN5eGpRVUZUTEVkQlFVY3NTMEZCU3l4RFFVRkJPMUZCYzBKNlFqczdPenM3VjBGTFJ6dFJRVU5KTERSQ1FVRjFRaXhIUVVGSExFTkJRemRDTEZOQlFXZENMRVZCUTJoQ0xGTkJRV2RDTEVWQlEwWXNSVUZCUlN4RFFVRkRMRU5CUVVNc1UwRkJVeXhGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZCTzFGQk5FVXpRenM3T3p0WFFVbEhPMUZCUTJFc1owSkJRVmNzUjBGQlJ5eEhRVUZwUWl4RlFVRkZPenRaUVVNM1F5eEpRVUZKTzJkQ1FVTkJMRTFCUVVFc1NVRkJTU3hEUVVGRExHdENRVUZyUWl3clEwRkJka0lzU1VGQlNTeEZRVUYxUWp0blFrRkZNMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHR2UWtGRE5VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRwUWtGRGFFUTdaMEpCUlVRc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVTjRRaXhyUWtGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRlZMRzlDUVVOd1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVTnFRaXhEUVVGQk8yZENRVVZFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVOQlFVRTdZVUZEYmtNN1dVRkJReXhQUVVGUExFZEJRVmtzUlVGQlJTd3dRa0ZCTUVJc1EwRkJRenRuUWtGRE9VTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzJGQlEyaERPMUZCUTB3c1EwRkJReXhEUVVGQk8xRkJSVVE3T3pzN096czdPenM3TzFkQlYwYzdVVUZEWVN4dFFrRkJZeXhIUVVGSExFTkJRemRDTEVsQlFXbENMRVZCUTJwQ0xGRkJRVkVzUjBGQlJ5eERRVUZETEVWQlExb3NVMEZCVXl4SFFVRkhMRVZCUVVVc1JVRkRVQ3hGUVVGRk96dFpRVU5VTEVsQlFVa3NTVUZCU1N4TFFVRkxMRk5CUVZNc1JVRkJSVHRuUWtGRGNFSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRMnBDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRVZCUTFnc1NVRkJTU3hEUVVGRExGVkJRVlVzUlVGRFppeFJRVUZSTEVWQlExSXNVMEZCVXl4RFFVTmFMRU5CUVVFN1lVRkRTanRaUVVWRUxFMUJRVTBzUzBGQlN5eEhRVUUyUWl4RlFVRkZMRVZCUTNSRExGTkJRVk1zUjBGQk5rSXNSVUZCUlN4RFFVRkJPMWxCUlRWRExFdEJRVXNzVFVGQlRTeEhRVUZITEVsQlFVa3NTVUZCU1N4RlFVRkZPMmRDUVVOd1FpeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVrc1NVRkJTU3hEUVVGRExFMUJRVzFETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVFN1owSkJRek5FTEZOQlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkRWQ3hKUVVGSkxFTkJRVU1zVlVGQmJVUXNNRU5CUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGRrVTdXVUZGUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRkZCUVZFc1JVRkJSU3hUUVVGVExFTkJRVU1zUTBGQlFUdFJRVU5vUlN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3p0WFFVbEhPMUZCUTJFc1lVRkJVU3hIUVVGSExFTkJRVU1zUjBGQmJVSXNSVUZCWjBJc1JVRkJSVHM3V1VGRE4wUXNTVUZCU1R0blFrRkRRU3hOUVVGQkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc0swTkJRWGhDTEVsQlFVa3NSVUZCZDBJN1owSkJSVFZDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlF6VkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3YVVKQlEyaEVPMmRDUVVWRUxFbEJRVWtzUTBGQlF5eFZRVUZWTEhGQ1FVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdG5Ra0ZGYkVNc1NVRkJTU3hEUVVGRExIVkNRVUYxUWl4RFFVTjRRaXhyUWtGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRlZMRzlDUVVOd1FpeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVTnFRaXhEUVVGQk8yZENRVVZFTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUVR0blFrRkZMMElzVFVGQlRTeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTzI5Q1FVTm9SQ3hEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEZkQlFWY3NSVUZCUlR0dlFrRkRjRUlzUTBGQlF5eERRVUZETEZOQlFWTXNRMEZCUVR0blFrRkZaaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkJPMkZCUTJoRE8xbEJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlEzSkRMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0aFFVTm9RenRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFTEdkRlFVRm5SVHRSUVVOb1JUczdPenRYUVVsSE8xRkJRMkVzYlVKQlFXTXNSMEZCUnl4RFFVTTNRaXhOUVVGdlFpeEZRVU5TTEVWQlFVVTdPMWxCUTJRc1NVRkJTVHRuUWtGRFFTeEpRVUZKTEUxQlFVMHNTMEZCU3l4VFFVRlRMRVZCUVVVN2IwSkJRM1JDTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGQk8ybENRVU4yUWp0blFrRkZSQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVNMVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMmxDUVVOb1JEdG5Ra0ZGUkN4TlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVOQlFVRTdaMEpCUlM5Q0xFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1IwRkJSeXhKUVVGSkxFTkJRVUU3WjBKQlJTOUNMRTFCUVVFc1NVRkJTU3hEUVVGRExHdENRVUZyUWl3clEwRkJka0lzU1VGQlNTeEZRVUYxUWp0blFrRkZNMElzU1VGQlNTeFRRVUZUTEV0QlFVc3NTVUZCU1N4RlFVRkZPMjlDUVVOd1FpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkJPMmxDUVVOb1JEdG5Ra0ZGUkN4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGQk8yZENRVVZ5UXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlFUdG5Ra0ZEY2tJc1RVRkJRU3hKUVVGSkxFTkJRVU1zYVVKQlFXbENMQ3REUVVGMFFpeEpRVUZKTEVWQlFYTkNPMmRDUVVVeFFpeEpRVUZKTEZOQlFWTXNXVUZCV1N4TFFVRkxMRVZCUVVVN2IwSkJRelZDTEUxQlFVMHNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4RFFVRkRPMjlDUVVWc1JDeFRRVUYxUWl4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZCTzI5Q1FVVjRSU3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGQk8ybENRVU0xUXp0blFrRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGQk8yRkJRemRETzFsQlFVTXNUMEZCVHl4SFFVRlpMRVZCUVVVc01FSkJRVEJDTEVOQlFVTTdaMEpCUXpsRExFOUJRVThzU1VGQlNTeERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRoUVVOb1F6dFJRVU5NTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3VjBGSFJ6dFJRVU5oTEZWQlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGQk8xRkJSVE5ET3pzN1YwRkhSenRSUVVOaExIRkNRVUZuUWl4SFFVRkhMRWRCUVZNc1JVRkJSVHM3V1VGRE1VTXNTVUZCU1R0blFrRkRRU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPMjlDUVVNMVFpeFBRVUZQTEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eHhRa0ZCY1VJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlFUdHBRa0ZETlVRN1owSkJSVVFzVFVGQlFTeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xDdERRVUY2UWl4SlFVRkpMRVZCUVhsQ08yZENRVVUzUWl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGQk8yZENRVVYyUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVUU3WjBKQlEzUkNMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZCTzJGQlEzcENPMWxCUVVNc1QwRkJUeXhIUVVGWkxFVkJRVVVzTUVKQlFUQkNMRU5CUVVNN1owSkJRemxETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGVrSTdVVUZGVEN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3TzFkQlIwYzdVVUZEWVN4WlFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkJPMUZCUXk5RExDdEVRVUVyUkR0UlFVVXZSRHM3TzFkQlIwYzdVVUZEU3l4dlFrRkJaU3hIUVVGSExFZEJRVk1zUlVGQlJUdFpRVU5xUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTTFRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZCTzJGQlEyaEVPMWxCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0blFrRkROVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSVHR2UWtGRGVFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRVHRwUWtGRGJrUTdZVUZEU2p0UlFVTk1MRU5CUVVNc1EwRkJRVHRSUVVWRU96czdWMEZIUnp0UlFVTkxMR2RDUVVGWExFZEJRVWNzUjBGQlpTeEZRVUZGTzFsQlEyNURMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlFUdFpRVVYwUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlFUdFJRVU40UWl4RFFVRkRMRU5CUVVFN1VVRkhSRHM3T3p0WFFVbEhPMUZCUTBzc1dVRkJUeXhIUVVGSExFTkJRVU1zWlVGQk5FSXNSVUZCVVN4RlFVRkZPenRaUVVOeVJDeEpRVUZKTEdWQlFXVXNXVUZCV1N4TFFVRkxMRVZCUVVVN1owSkJRMnhETEV0QlFVc3NUVUZCVFN4UFFVRlBMRWxCUVVrc1pVRkJaU3hGUVVGRk8yOUNRVU51UXl4TlFVRkJMRWxCUVVrc1EwRkJReXhQUVVGUExEQkRRVUZGTEZkQlFWY3NRMEZCUXl4UFFVRlBMRVZCUVVNN2FVSkJRM0pETzJGQlEwbzdhVUpCUVUwc1NVRkJTU3hsUVVGbExFVkJRVVU3WjBKQlEzaENMRTFCUVVFc1NVRkJTU3hEUVVGRExFOUJRVThzTUVOQlFVVXNWMEZCVnl4RFFVRkRMR1ZCUVdVc1JVRkJRenRoUVVNM1F6dFpRVVZFTEVsQlFVa3NaVUZCWlN4RlFVRkZPMmRDUVVOcVFpeE5RVUZCTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzSzBOQlFYWkNMRWxCUVVrc1JVRkJkVUk3WVVGRE9VSTdVVUZEVEN4RFFVRkRMRU5CUVVFN1VVRkZUeXhwUWtGQldTeEhRVUZITEVOQlFVTXNSMEZCV1N4RlFVRlRMRVZCUVVVN1dVRkRNME1zU1VGQlNTeEhRVUZITEZsQlFWa3NTMEZCU3l4RlFVRkZPMmRDUVVOMFFpeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdaMEpCUlROQ0xFOUJRVThzUjBGQldTeERRVUZCTzJGQlEzUkNPMWxCUlVRc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVUU3V1VGRmNFTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkJPMWxCUlRkQ0xFOUJRVThzUzBGQlN5eERRVUZCTzFGQlEyaENMRU5CUVVNc1EwRkJRVHRSUVhSVlJ5eEpRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRkpMRVZCUVVVN1dVRkRha0lzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4dFJFRkJiVVFzUTBGQlF5eERRVUZCTzFOQlEzWkZPMUZCUlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVRTdTVUZEZWtJc1EwRkJRenRKUVdGRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1VVRkJVVHRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUVR0SlFVTnlRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBnc1NVRkJZeXhMUVVGTE8xRkJRMllzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkJPMGxCUTNSQ0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGdzU1VGQll5eExRVUZMTEVOQlFVVXNSMEZCVlR0UlFVTXpRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSVHRaUVVNeFFpeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRMnhDTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVTXhReXhEUVVGQk8xbEJRMFFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRUUVVOeVFqdGhRVUZOTzFsQlEwZ3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVUU3V1VGRGFrSXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NRMEZCUVR0VFFVTnNRenRKUVVOTUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTQ3hKUVVGWExGRkJRVkU3VVVGRFppeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVFN1NVRkRja0lzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNDeEpRVUZYTEUxQlFVMHNRMEZCUlN4UFFVRm5RenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRVHRKUVVNeFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQlZ5eE5RVUZOTzFGQlEySXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGQk8wbEJRM1pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZYTEZGQlFWRTdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVUU3U1VGRGVrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5JTEVsQlFWY3NVMEZCVXp0UlFVTm9RaXhQUVVGUExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVRTdTVUZETVVJc1EwRkJRenREUVRoUFNqdEJRVVZFTEdWQlFXVXNVMEZCVXl4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG5leHBvcnQgY29uc3QgZnJhZ21lbnQgPSAoXywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBiaW5kQ2hpbGRyZW4oZnJhZ21lbnQsIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZnJhZ21lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labkpoWjIxbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12Wm5KaFoyMWxiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wZEJVVWM3UVVGRFNDd3lRa0ZCTWtJN1FVRkRNMElzYVVOQlFXbERPMEZCUldwRExFOUJRVThzUlVGRlNDeFpRVUZaTEVkQlEyWXNUVUZCVFN3clFrRkJLMElzUTBGQlFUdEJRVVYwUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGRGNFSXNRMEZCVlN4RlFVTldMRWRCUVVjc1VVRkJNa0lzUlVGRFpDeEZRVUZGTzBsQlEyeENMRTFCUVUwc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hEUVVGQk8wbEJSV3hFTEZsQlFWa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUU3U1VGRmFFTXNUMEZCVHl4UlFVRlJMRU5CUVVFN1FVRkRia0lzUTBGQlF5eERRVUZCTzBGQlJVUXNaVUZCWlN4UlFVRlJMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlIG1haW4gZGVzdGFnbmF0ZSBjbGFzc1xuICogQGZpbGUgbWFpbiBmaWxlIGZvciBkZXN0YWduYXRlXG4gKiBAcHJlc2VydmVcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0ICogYXMgX0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVSZWYgZnJvbSBcIi4vY3JlYXRlUmVmXCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlRWxlbWVudE5TIGZyb20gXCIuL2NyZWF0ZUVsZW1lbnROU1wiO1xuaW1wb3J0ICogYXMgX0ZyYWdtZW50IGZyb20gXCIuL2ZyYWdtZW50XCI7XG5leHBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmV4cG9ydCB7IGNyZWF0ZVJlZiB9IGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnROUyB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnROU1wiO1xuZXhwb3J0IHsgZnJhZ21lbnQgfSBmcm9tIFwiLi9mcmFnbWVudFwiO1xuZXhwb3J0IHZhciBEZVN0YWduYXRlO1xuKGZ1bmN0aW9uIChEZVN0YWduYXRlKSB7XG4gICAgRGVTdGFnbmF0ZS5Db21wb25lbnQgPSBfQ29tcG9uZW50LkNvbXBvbmVudDtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZVJlZiA9IF9DcmVhdGVSZWYuY3JlYXRlUmVmO1xuICAgIERlU3RhZ25hdGUuY3JlYXRlRWxlbWVudCA9IF9DcmVhdGVFbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVFbGVtZW50TlMgPSBfQ3JlYXRlRWxlbWVudE5TLmNyZWF0ZUVsZW1lbnROUztcbiAgICBEZVN0YWduYXRlLmZyYWdtZW50ID0gX0ZyYWdtZW50LmZyYWdtZW50O1xufSkoRGVTdGFnbmF0ZSB8fCAoRGVTdGFnbmF0ZSA9IHt9KSk7XG5leHBvcnQgZGVmYXVsdCBEZVN0YWduYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3pzN1IwRlZSenRCUVVOSUxESkNRVUV5UWp0QlFVTXpRaXhwUTBGQmFVTTdRVUZGYWtNc1QwRkJUeXhMUVVGTExGVkJRVlVzVFVGQlRTeGhRVUZoTEVOQlFVRTdRVUZEZWtNc1QwRkJUeXhMUVVGTExGVkJRVlVzVFVGQlRTeGhRVUZoTEVOQlFVRTdRVUZEZWtNc1QwRkJUeXhMUVVGTExHTkJRV01zVFVGQlRTeHBRa0ZCYVVJc1EwRkJRVHRCUVVOcVJDeFBRVUZQTEV0QlFVc3NaMEpCUVdkQ0xFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkRja1FzVDBGQlR5eExRVUZMTEZOQlFWTXNUVUZCVFN4WlFVRlpMRU5CUVVFN1FVRkZka01zVDBGQlR5eEZRVUZETEZOQlFWTXNSVUZCUXl4TlFVRk5MR0ZCUVdFc1EwRkJRVHRCUVVOeVF5eFBRVUZQTEVWQlFVMHNVMEZCVXl4RlFVRkRMRTFCUVUwc1lVRkJZU3hEUVVGQk8wRkJRekZETEU5QlFVOHNSVUZCUXl4aFFVRmhMRVZCUVVNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUVR0QlFVTTNReXhQUVVGUExFVkJRVU1zWlVGQlpTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRGFrUXNUMEZCVHl4RlFVRkRMRkZCUVZFc1JVRkJReXhOUVVGTkxGbEJRVmtzUTBGQlFUdEJRVVZ1UXl4TlFVRk5MRXRCUVZjc1ZVRkJWU3hEUVU4eFFqdEJRVkJFTEZkQlFXbENMRlZCUVZVN1NVRkRWQ3h2UWtGQlV5eEhRVUZKTEZWQlFWVXNWVUZCWkN4RFFVRmpPMGxCUTNaQ0xHOUNRVUZUTEVkQlFVa3NWVUZCVlN4VlFVRmtMRU5CUVdNN1NVRkZka0lzZDBKQlFXRXNSMEZCU1N4alFVRmpMR05CUVd4Q0xFTkJRV3RDTzBsQlF5OUNMREJDUVVGbExFZEJRVWtzWjBKQlFXZENMR2RDUVVGd1FpeERRVUZ2UWp0SlFVTnVReXh0UWtGQlVTeEhRVUZKTEZOQlFWTXNVMEZCWWl4RFFVRmhPMEZCUTNaRExFTkJRVU1zUlVGUVowSXNWVUZCVlN4TFFVRldMRlZCUVZVc1VVRlBNVUk3UVVGRlJDeGxRVUZsTEZWQlFWVXNRMEZCUVNKOSJdLCJuYW1lcyI6WyJfY3JlYXRlRWxlbWVudCIsIl9jcmVhdGVFbGVtZW50TlMiLCJfY3JlYXRlUmVmIiwiQmFzZUNvbXBvbmVudCIsIkJhc2UiLCJfQ29tcG9uZW50LkNvbXBvbmVudCIsIl9DcmVhdGVSZWYuY3JlYXRlUmVmIiwiX0NyZWF0ZUVsZW1lbnQuY3JlYXRlRWxlbWVudCIsIl9DcmVhdGVFbGVtZW50TlMuY3JlYXRlRWxlbWVudE5TIiwiX0ZyYWdtZW50LmZyYWdtZW50IiwiRGVTdGFnbmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNLEdBQUcsR0FBRyx3REFBWjs7QUNxRlA7Ozs7Ozs7QUFPRzs7QUFDSSxJQUFNLFNBQVMsR0FBRyxTQUFaLFNBQVksQ0FDckIsT0FEcUIsRUFFckIsS0FGcUIsRUFJZjtBQUFBLE1BRE4sRUFDTSx1RUFERCxLQUNDOztBQUNOLE1BQUksS0FBSixFQUFXO0FBQ1AsdUNBQXlCLE1BQU0sQ0FBQyxPQUFQLENBQWUsS0FBZixDQUF6QixxQ0FBZ0Q7QUFBQTtBQUFBLFVBQXBDLEdBQW9DO0FBQUEsVUFBL0IsR0FBK0I7O0FBQzVDLFVBQUksT0FBTyxHQUFQLEtBQWUsUUFBZixJQUEyQixPQUFPLEdBQVAsS0FBZSxRQUE5QyxFQUF3RDtBQUNwRCxZQUFJLEdBQUcsS0FBSyxXQUFaLEVBQXlCO0FBQ3JCLFVBQUEsT0FBTyxDQUFDLFNBQVIsR0FBb0IsR0FBRyxDQUFDLFFBQUosRUFBcEI7QUFDSCxTQUZELE1BRU8sSUFBSSxFQUFKLEVBQVE7QUFDWCxVQUFBLE9BQU8sQ0FBQyxjQUFSLENBQXVCLElBQXZCLEVBQTZCLEdBQTdCLEVBQWtDLEdBQUcsQ0FBQyxRQUFKLEVBQWxDO0FBQ0gsU0FGTSxNQUVBO0FBQ0gsVUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixHQUFyQixF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
