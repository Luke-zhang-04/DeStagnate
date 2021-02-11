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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wcml2YXRlL191cmwuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzLmpzIiwiLi4vLi4vbGliL2NyZWF0ZUVsZW1lbnQuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudE5TLmpzIiwiLi4vLi4vbGliL2NyZWF0ZVJlZi5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19iYXNlLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2V2ZW50cy5qcyIsIi4uLy4uL2xpYi91dGlscy5qcyIsIi4uLy4uL2xpYi9jb21wb25lbnQuanMiLCIuLi8uLi9saWIvZnJhZ21lbnQuanMiLCIuLi8uLi9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9sdWtlLXpoYW5nLTA0LmdpdGh1Yi5pby9EZVN0YWduYXRlL2Vycm9yLWNvZGVzXCI7XG5leHBvcnQgZGVmYXVsdCB1cmw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYM1Z5YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTkxY213dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4SFFVRkhMSGRFUVVGM1JDeERRVUZCTzBGQlJUTkZMR1ZCUVdVc1IwRkJSeXhEUVVGQkluMD0iLCIvKipcbiAqIENvbXBvbmVudFxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBmaWxlIHNoYXJlIGZ1bmN0aW9ucyBhbmQgdHlwZXMgZm9yIGNyZWF0ZUVsZW1lbnQgYW5kIGl0J3MgdmFyaWFudHNcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9fdXJsXCI7XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgdG8gYmluZCB3aXRoXG4gKiBAcGFyYW0gbnMgLSBpZiBuYW1lc3BhY2UgZWxlbWVudFxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgY29uc3QgYmluZFByb3BzID0gKGVsZW1lbnQsIHByb3BzLCBucyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImlubmVySFRNTFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnVsbCwga2V5LCB2YWwudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkuc2xpY2UoMCwgMikgPT09IFwib25cIikgeyAvLyBXb3JrcyBzdWNoIGFzIG9uQ2xpY2ssIG9uQW5pbWF0aW9uRW5kLCBldGMuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodmFsKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpLCB2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJyZWZcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiAodmFsKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIFwiY3VycmVudFwiIGluIHZhbCkge1xuICAgICAgICAgICAgICAgIHZhbC5jdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3R5cGVvZiB2YWx9IGlzIG5vdCBhIHZhbGlkIERlU3RhZ25hdGUgY2hpbGRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gdG8gYmluZCB3aXRoXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kQ2hpbGRyZW4gPSAoZWxlbWVudCwgY2hpbGRyZW4pID0+IHtcbiAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwgJiYgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNoaWxkcmVuID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkcmVuLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZHJlbiBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgICAgaWYgKCFjaGlsZHJlbi5kaWRNb3VudCAmJiBlbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ubW91bnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIShlbGVtZW50IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMy4gU2VlICR7dXJsfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuLnBhcmVudCAhPT0gZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuLnBhcmVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJOeVpXRjBaVVZzWlcxbGJuUlZkR2xzY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTlqY21WaGRHVkZiR1Z0Wlc1MFZYUnBiSE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wZEJVVWM3UVVGRlNDeFBRVUZQTEVWQlFVTXNVMEZCVXl4RlFVRkRMRTFCUVUwc1kwRkJZeXhEUVVGQk8wRkJSWFJETEU5QlFVOHNSMEZCUnl4TlFVRk5MRkZCUVZFc1EwRkJRVHRCUVhsRmVFSTdPenM3T3pzN1IwRlBSenRCUVVOSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEZOQlFWTXNSMEZCUnl4RFFVTnlRaXhQUVVGblFpeEZRVU5vUWl4TFFVRjVRaXhGUVVONlFpeEZRVUZGTEVkQlFVY3NTMEZCU3l4RlFVTk9MRVZCUVVVN1NVRkRUaXhKUVVGSkxFdEJRVXNzUlVGQlJUdFJRVU5RTEV0QlFVc3NUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8xbEJRelZETEVsQlFVa3NUMEZCVHl4SFFVRkhMRXRCUVVzc1VVRkJVU3hKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRXNSVUZCUlR0blFrRkRjRVFzU1VGQlNTeEhRVUZITEV0QlFVc3NWMEZCVnl4RlFVRkZPMjlDUVVOeVFpeFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlFUdHBRa0ZEY2tNN2NVSkJRVTBzU1VGQlNTeEZRVUZGTEVWQlFVVTdiMEpCUTFnc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZCTzJsQ1FVTndSRHR4UWtGQlRUdHZRa0ZEU0N4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNc1EwRkJRVHRwUWtGRE5VTTdZVUZEU2p0cFFrRkJUU3hKUVVGSkxFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTExFbEJRVWtzUlVGQlJTeEZRVUZGTERoRFFVRTRRenRuUWtGRGFrWXNTVUZCU1N4UFFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVlVGQlZTeEZRVUZGTzI5Q1FVTTFRaXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUTNCQ0xFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRPM2xDUVVOUUxGZEJRVmNzUlVGQmIwSXNSVUZEY0VNc1IwRkJaMElzUTBGRGJrSXNRMEZCUVR0cFFrRkRTanRoUVVOS08ybENRVUZOTEVsQlEwZ3NSMEZCUnl4TFFVRkxMRXRCUVVzN1owSkJRMklzVDBGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRkZCUVZFN1owSkJRM2hDTEZOQlFWTXNTVUZCU1N4SFFVRkhMRVZCUTJ4Q08yZENRVU5ITEVkQlFXOUNMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlFUdGhRVU14UXp0cFFrRkJUU3hKUVVGSkxFZEJRVWNzUzBGQlN5eFRRVUZUTEVWQlFVVTdaMEpCUXpGQ0xFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4UFFVRlBMRWRCUVVjc2EwTkJRV3RETEVOQlFVTXNRMEZCUVR0aFFVTm9SVHRUUVVOS08wdEJRMG83UVVGRFRDeERRVUZETEVOQlFVRTdRVUZGUkRzN096czdPMGRCVFVjN1FVRkRTQ3hOUVVGTkxFTkJRVU1zVFVGQlRTeFpRVUZaTEVkQlFVY3NRMEZEZUVJc1QwRkJZU3hGUVVOaUxGRkJRWFZDTEVWQlEyNUNMRVZCUVVVN1NVRkRUaXhKUVVGSkxGRkJRVkVzUzBGQlN5eEpRVUZKTEVsQlFVa3NVVUZCVVN4TFFVRkxMRk5CUVZNc1JVRkJSVHRSUVVNM1F5eEpRVUZKTEZGQlFWRXNXVUZCV1N4TFFVRkxMRVZCUVVVN1dVRkRNMElzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVcxQ0xFVkJRVVVzUlVGQlJTeERRVUZETEZsQlFWa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlFUdFRRVU14UlR0aFFVRk5MRWxCUTBnc1QwRkJUeXhSUVVGUkxFdEJRVXNzVVVGQlVUdFpRVU0xUWl4UFFVRlBMRkZCUVZFc1MwRkJTeXhSUVVGUkxFVkJRemxDTzFsQlEwVXNUMEZCVHl4RFFVRkRMRmRCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVUU3VTBGRGNFVTdZVUZCVFN4SlFVRkpMRkZCUVZFc1dVRkJXU3hUUVVGVExFVkJRVVU3V1VGRGRFTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFbEJRVWtzVDBGQlR5eFpRVUZaTEUxQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVN1owSkJRemRFTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVUU3WjBKQlJYWkNMRTlCUVUwN1lVRkRWRHRwUWtGQlRTeEpRVUZKTEVOQlFVTXNRMEZCUXl4UFFVRlBMRmxCUVZrc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTzJkQ1FVTnFSQ3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZCTzJGQlF5OURPMWxCUlVRc1NVRkJTU3hSUVVGUkxFTkJRVU1zVFVGQlRTeExRVUZMTEU5QlFVOHNSVUZCUlR0blFrRkROMElzVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVFN1lVRkROVUk3V1VGRlJDeFJRVUZSTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVFN1UwRkRla0k3WVVGQlRUdFpRVU5JTEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVUU3VTBGRGFFTTdTMEZEU2p0QlFVTk1MRU5CUVVNc1EwRkJRU0o5IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcywgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbi8qKlxuICpcbiAqIEBwYXJhbSB0YWdOYW1lT3JDb21wb25lbnQgLSBuYW1lIG9mIEhUTUwgZWxlbWVudCBvciBmdW5jdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSBwcm9wcyAtIHByb3BzIG9mIGVsZW1lbnQgb3IgY29tcG9uZW50XG4gKiAxLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyB0YWduYW1lLCBwcm9wcyBhcmUgZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiAyLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyBhIGZ1bmN0aW9uLCBwcm9wcyBhcmUgdGhhdCBmdW5jdGlvbnMgcGFyYW1ldGVyc1xuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50LiBDYW4gYmUgbm90aGluZywgbnVtYmVyIChjb252ZXJ0ZWQgdG8gc3RyaW5nKSwgc3RyaW5nICh0ZXh0KSwgb3IgYW5vdGhlciBlbGVtZW50LiBBbiBhcnJheSBvZiBhbnkgb2YgdGhlc2Ugd2lsbCBjcmVhdGUgbXVsdGlwbGUgY2hpbGRyZW5cbiAqIEBwYXJhbSBjaGlsZHJlbkFyZ3MgLSByZXN0IHBhcmFtZXRlciBmb3IgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50LCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgICBpZiAodHlwZW9mICh0YWdOYW1lT3JDb21wb25lbnQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWVPckNvbXBvbmVudCk7XG4gICAgICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcyk7XG4gICAgICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gdGFnTmFtZU9yQ29tcG9uZW50KHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBFcnJvcihcInRhZ05hbWVPckNvbXBvbmVudCBpcyBvZiBpbnZhbGlkIHR5cGUuXCIpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSmxZWFJsUld4bGJXVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5amNtVmhkR1ZGYkdWdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3p0SFFWRkhPMEZCUTBnc01rSkJRVEpDTzBGQlF6TkNMR2xEUVVGcFF6dEJRVVZxUXl4UFFVRlBMRVZCUjBnc1dVRkJXU3hGUVVOYUxGTkJRVk1zUjBGRFdpeE5RVUZOTEN0Q1FVRXJRaXhEUVVGQk8wRkJiVU4wUXpzN096czdPenM3TzBkQlUwYzdRVUZEU0N4TlFVRk5MRlZCUVZVc1lVRkJZU3hEUVVsNlFpeHJRa0ZIV1N4RlFVTmFMRXRCUVRaQ0xFVkJRemRDTEVkQlFVY3NVVUZCTWtJN1NVRkZPVUlzU1VGQlNTeFBRVUZOTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUzBGQlN5eFJRVUZSTEVWQlFVVTdVVUZEZWtNc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZCTzFGQlJURkVMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQk1FSXNRMEZCUXl4RFFVRkJPMUZCUlRsRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVFN1VVRkZMMElzVDBGQlR5eFBRVUZQTEVOQlFVRTdTMEZEYWtJN1UwRkJUU3hKUVVGSkxFOUJRVTBzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhMUVVGTExGVkJRVlVzUlVGQlJUdFJRVU5zUkN4UFFVRlBMR3RDUVVGclFpeERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRVHRMUVVOc1JEdEpRVVZFTEU5QlFVOHNTMEZCU3l4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVRTdRVUZETVVRc1EwRkJRenRCUVVWRUxHVkJRV1VzWVVGQllTeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnROUyBjcmVhdGVFbGVtZW50IGZvciBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gKi9cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgYmluZFByb3BzLCB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKiBDcmVhdGVzIGEgY2hpbGQgZWxlbWVudCB0byBkZVN0YWduYXRlXG4gKiBAcGFyYW0gbmFtZXNwYWNlVVJJIC0gbmFtZXNwYWNlIHVyaVxuICogQHBhcmFtIHRhZ05hbWUgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuUmVzdCAtIHJlc3QgcGFyYW1ldGVyIG9mIGNoaWxkcmVuXG4gKiBAcmV0dXJucyBodG1sIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnROUyA9IChuYW1lc3BhY2VVUkksIHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCB0YWdOYW1lKTtcbiAgICBiaW5kUHJvcHMoZWxlbWVudCwgcHJvcHMsIHRydWUpO1xuICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudE5TO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRFNVRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVVZzWlcxbGJuUk9VeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSUxFOUJRVThzUlVGRlNDeFpRVUZaTEVWQlExb3NVMEZCVXl4SFFVTmFMRTFCUVUwc0swSkJRU3RDTEVOQlFVRTdRVUZGZEVNN096czdPenM3TzBkQlVVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hsUVVGbExFZEJRVWNzUTBGRE0wSXNXVUZCSzBjc1JVRkRMMGNzVDBGQk1FTXNSVUZETVVNc1MwRkJkME1zUlVGRGVFTXNSMEZCUnl4UlFVRXlRaXhGUVVOMlFpeEZRVUZGTzBsQlExUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eFpRVUZaTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVFN1NVRkZMMFFzVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVUU3U1VGRkwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdEpRVVV2UWl4UFFVRlBMRTlCUVU4c1EwRkJRVHRCUVVOc1FpeERRVUZETEVOQlFVRTdRVUZGUkN4bFFVRmxMR1ZCUVdVc1EwRkJRU0o5IiwiLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZiA9ICgpID0+ICh7XG4gICAgY3VycmVudDogbnVsbCxcbn0pO1xuLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxVbVZtTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnlaV0YwWlZKbFppNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZsUVRzN08wZEJSMGM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJkME1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtVc1QwRkJUeXhGUVVGRkxFbEJRVWs3UTBGRGFFSXNRMEZCUXl4RFFVRkJPMEZCUlVZN096dEhRVWRITzBGQlEwZ3NaVUZCWlN4VFFVRlRMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBQcmVzZXQgLSBiYXNlIGZvciBhIGNvbXBvbmVudFxuICogQHBhY2thZ2VcbiAqL1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIF9jcmVhdGVSZWYgfSBmcm9tIFwiLi4vY3JlYXRlUmVmXCI7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzXG4gKi9cbmV4cG9ydCBjbGFzcyBQcmVzZXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50TlMgPSBfY3JlYXRlRWxlbWVudE5TO1xuICAgICAgICB0aGlzLmNyZWF0ZVJlZiA9IF9jcmVhdGVSZWY7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiBjb21wb25lbnQgY2F0Y2hlcyBlcnJvci4gRGVmYXVsdCBiZWhhdmlvdXIgaXMgY29uc29sZS5lcnJvclxuICAgICAgICAgKiBAcGFyYW0gZXJyb3IgLSBlcnJvciBvYmplY3Qgd2l0aCBpbmZvXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2ggPSAoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIGJlZm9yZSBjb21wb25lbnQgaXMgdXBkYXRlZFxuICAgICAgICAgKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZS9yZS1yZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbmRlcmluZyBIVE1MLCBtdXN0IGJlIHBhcnQgb2YgZXh0ZW5kZWQgY2xhc3NcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQGFic3RyYWN0XG4gICAgICAgICAqIEByZXR1cm5zIGlmIHJldHVybnMgbnVsbCBlcnJvciB3aWxsIGJlIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXIgPSAoKSA9PiBudWxsO1xuICAgIH1cbn1cblByZXNldC5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG5QcmVzZXQuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcblByZXNldC5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWDJKaGMyVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5ZlltRnpaUzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN08wZEJVMGM3UVVGRlNDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMR05CUVdNc1JVRkJReXhOUVVGTkxHdENRVUZyUWl4RFFVRkJPMEZCUXpGRUxFOUJRVThzUlVGQlF5eFBRVUZQTEVsQlFVa3NaMEpCUVdkQ0xFVkJRVU1zVFVGQlRTeHZRa0ZCYjBJc1EwRkJRVHRCUVVNNVJDeFBRVUZQTEVWQlFVTXNUMEZCVHl4SlFVRkpMRlZCUVZVc1JVRkJReXhOUVVGTkxHTkJRV01zUTBGQlFUdEJRV2xEYkVRc01FSkJRVEJDTzBGQlF6RkNPenRIUVVWSE8wRkJRMGdzVFVGQlRTeFBRVUZuUWl4TlFVRk5PMGxCUVRWQ08xRkJVVzlDTEd0Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8xRkJSVGxDTEc5Q1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdVVUZGYkVNc1kwRkJVeXhIUVVGSExGVkJRVlVzUTBGQlFUdFJRVVYwUXpzN096dFhRVWxITzFGQlEwa3NjMEpCUVdsQ0xFZEJRVWNzUTBGQlF5eExRVUZaTEVWQlFWRXNSVUZCUlN4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVRTdVVUZGZGtVN096dFhRVWRITzFGQlEwa3NNRUpCUVhGQ0xFZEJRVWNzUjBGQldTeEZRVUZGTEVOQlFVTXNTVUZCU1N4RFFVRkJPMUZCUld4RU96czdPenM3VjBGTlJ6dFJRVU5oTEZkQlFVMHNSMEZCUnl4SFFVRmxMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVUU3U1VGRmJrUXNRMEZCUXpzN1FVRnNRekJDTEc5Q1FVRmhMRWRCUVVjc1kwRkJZeXhEUVVGQk8wRkJSVGxDTEhOQ1FVRmxMRWRCUVVjc1owSkJRV2RDTEVOQlFVRTdRVUZGYkVNc1owSkJRVk1zUjBGQlJ5eFZRVUZWTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjguMFxuICogQGV4cG9ydHMgRXZlbnRzXG4gKiBAcGFja2FnZVxuICovXG5pbXBvcnQgeyBQcmVzZXQgYXMgQmFzZUNvbXBvbmVudCB9IGZyb20gXCIuL19iYXNlXCI7XG5jb25zdCBldmVudE5hbWVzID0gW1xuICAgIFwib25Gb2N1c1wiLFxuICAgIFwib25CbHVyXCIsXG4gICAgXCJvbkZvY3VzSW5cIixcbiAgICBcIm9uRm9jdXNPdXRcIixcbiAgICBcIm9uQW5pbWF0aW9uU3RhcnRcIixcbiAgICBcIm9uQW5pbWF0aW9uQ2FuY2VsXCIsXG4gICAgXCJvbkFuaW1hdGlvbkVuZFwiLFxuICAgIFwib25BbmltYXRpb25JdGVyYXRpb25cIixcbiAgICBcIm9uVHJhbnNpdGlvblN0YXJ0XCIsXG4gICAgXCJvblRyYW5zaXRpb25DYW5jZWxcIixcbiAgICBcIm9uVHJhbnNpdGlvbkVuZFwiLFxuICAgIFwib25UcmFuc2l0aW9uUnVuXCIsXG4gICAgXCJvbkF1eENsaWNrXCIsXG4gICAgXCJvbkNsaWNrXCIsXG4gICAgXCJvbkRibENsaWNrXCIsXG4gICAgXCJvbk1vdXNlRG93blwiLFxuICAgIFwib25Nb3VzZUVudGVyXCIsXG4gICAgXCJvbk1vdXNlTGVhdmVcIixcbiAgICBcIm9uTW91c2VNb3ZlXCIsXG4gICAgXCJvbk1vdXNlT3ZlclwiLFxuICAgIFwib25Nb3VzZU91dFwiLFxuICAgIFwib25Nb3VzZVVwXCIsXG5dO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjbGFzcyBFdmVudHMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIGV2ZW50IGxpc3RlbmVycyBldmVudFxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzIGV2ZW50XG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lciA9IChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbEV2ZW50TmFtZSA9IGV2ZW50TmFtZS5zbGljZSgyKS50b0xvd2VyQ2FzZSgpLCBjYWxsYmFjayA9IHRoaXNbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCAmJiBjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TGlzdGVuZXIoaHRtbEV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMlYyWlc1MGN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d2NtbDJZWFJsTDE5bGRtVnVkSE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096dEhRVk5ITzBGQlJVZ3NUMEZCVHl4RlFVRkRMRTFCUVUwc1NVRkJTU3hoUVVGaExFVkJRVU1zVFVGQlRTeFRRVUZUTEVOQlFVRTdRVUZaTDBNc1RVRkJUU3hWUVVGVkxFZEJRWEZDTzBsQlEycERMRk5CUVZNN1NVRkRWQ3hSUVVGUk8wbEJRMUlzVjBGQlZ6dEpRVU5ZTEZsQlFWazdTVUZEV2l4clFrRkJhMEk3U1VGRGJFSXNiVUpCUVcxQ08wbEJRMjVDTEdkQ1FVRm5RanRKUVVOb1FpeHpRa0ZCYzBJN1NVRkRkRUlzYlVKQlFXMUNPMGxCUTI1Q0xHOUNRVUZ2UWp0SlFVTndRaXhwUWtGQmFVSTdTVUZEYWtJc2FVSkJRV2xDTzBsQlEycENMRmxCUVZrN1NVRkRXaXhUUVVGVE8wbEJRMVFzV1VGQldUdEpRVU5hTEdGQlFXRTdTVUZEWWl4alFVRmpPMGxCUTJRc1kwRkJZenRKUVVOa0xHRkJRV0U3U1VGRFlpeGhRVUZoTzBsQlEySXNXVUZCV1R0SlFVTmFMRmRCUVZjN1EwRkRaQ3hEUVVGQk8wRkJjVWhFTERCQ1FVRXdRanRCUVVNeFFpeE5RVUZOTEU5QlFXZENMRTFCUVU4c1UwRkJVU3hoUVVGaE8wbEJRV3hFT3p0UlFVVkpPenM3TzFkQlNVYzdVVUZEWjBJc2RVSkJRV3RDTEVkQlFVY3NRMEZCUXl4UFFVRnZRaXhGUVVGUkxFVkJRVVU3V1VGRGJrVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1EwRkJRVHRSUVVOcVJDeERRVUZETEVOQlFVRTdVVUZGUkRzN096dFhRVWxITzFGQlEyZENMSGxDUVVGdlFpeEhRVUZITEVOQlFVTXNUMEZCYjBJc1JVRkJVU3hGUVVGRk8xbEJRM0pGTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJUeXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVFN1VVRkRjRVFzUTBGQlF5eERRVUZCTzFGQlJVOHNiVUpCUVdNc1IwRkJSeXhEUVVGRExHRkJRVFJDTEVWQlFWRXNSVUZCUlR0WlFVTTFSQ3hMUVVGTExFMUJRVTBzVTBGQlV5eEpRVUZKTEZWQlFWVXNSVUZCUlR0blFrRkRhRU1zVFVGQlRTeGhRVUZoTEVkQlFVY3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVXNSVUZEYkVRc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUVR0blFrRkZPVUlzU1VGQlNTeFJRVUZSTEV0QlFVc3NVMEZCVXl4SlFVRkpMRkZCUVZFc1dVRkJXU3hSUVVGUkxFVkJRVVU3YjBKQlEzaEVMR0ZCUVdFc1EwRkJReXhoUVVGaExFVkJRVVVzVVVGQk9FTXNRMEZCUXl4RFFVRkJPMmxDUVVNdlJUdGhRVU5LTzFGQlEwd3NRMEZCUXl4RFFVRkJPMGxCUlV3c1EwRkJRenREUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBVdGlscyAtIHV0aWxpdGllcyBmb3IgRGVTdGFnbmF0ZVxuICovXG4vKipcbiAqIENoZWNrcyBpZiB2YWwxIGFuZCB2YWwyIGFyZSBlcXVhbFxuICogQHBhcmFtIHZhbDEgLSB2YWx1ZSB0byBjaGVjayBmb3IgZXF1YWxpdHlcbiAqIEBwYXJhbSB2YWwyIC0gdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0IHZhbDFcbiAqIEBwYXJhbSBtYXhEZXB0aCAtIG1heCByZWN1cnNpb24gZGVwdGggdG8gY3Jhd2wgYW4gb2JqZWN0LiBBZnRlciBtYXggZGVwdGggaXNcbiAqIHJlYWNoZWQsIHRoZSB0d28gdmFsdWVzIGFyZSBzaW1wbHkgY29tcGFyZWQgd2l0aCBgPT09YFxuICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLCB0d29cbiAqIGFycmF5cyB3aWxsIHNpbXBseSBiZSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcmV0dXJucyBgdmFsMSA9PT0gdmFsMmBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRXF1YWwgPSAodmFsMSwgdmFsMiwgbWF4RGVwdGggPSAzLCBtYXhMZW5ndGggPSAxMCkgPT4ge1xuICAgIGlmIChtYXhEZXB0aCA9PT0gMCkgeyAvLyBJZiBtYXhEZXB0aCByZWFjaGVkLCBqdXN0IHJ1biA9PT1cbiAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwxICE9PSB0eXBlb2YgdmFsMikgeyAvLyBJZiB0aGV5IGFyZW4ndCB0aGUgc2FtZSB0eXBlLCByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsMSBpbnN0YW5jZW9mIEFycmF5ICYmIHZhbDIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBpZiAodmFsMS5sZW5ndGggIT09IHZhbDIubGVuZ3RoKSB7IC8vIElmIGFycmF5cyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbDEubGVuZ3RoID4gbWF4TGVuZ3RoIHx8IHZhbDIubGVuZ3RoID4gbWF4TGVuZ3RoKSB7IC8vIElmIGFycmF5IGlzIHRvbyBiaWdcbiAgICAgICAgICAgIHJldHVybiB2YWwxID09PSB2YWwyO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWwxLmxlbmd0aDsgaW5kZXgrKykgeyAvLyBHbyB0aHJvdWdoIGVhY2ggaXRlbVxuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHZhbDFbaW5kZXhdLCB2YWwyW2luZGV4XSwgbWF4RGVwdGggLSAxLCBtYXhMZW5ndGgpKSB7IC8vIFRlc3QgaWYgdHdvIGFycmF5IGl0ZW1zIGFyZSBlcXVhbFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsMSBpbnN0YW5jZW9mIE9iamVjdCAmJiB2YWwyIGluc3RhbmNlb2YgT2JqZWN0KSB7IC8vIElmIG9iamVjdFxuICAgICAgICBpZiAoIWlzRXF1YWwoT2JqZWN0LmtleXModmFsMSksIE9iamVjdC5rZXlzKHZhbDIpLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gSWYgdGhleSBkb24ndCBoYXZlIGhlIHNhbWUga2V5c1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbDEpKSB7IC8vIEdvIHRocm91Z2ggYW5kIHRlc3QgZWFjaCB2YWx1ZVxuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHZhbDFba2V5XSwgdmFsMltrZXldLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB2YWwxID09PSB2YWwyO1xufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpc0VxdWFsLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmRYUnBiSE11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wZEJVVWM3UVVGRlNEczdPenM3T3pzN08wZEJVMGM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4UFFVRlBMRWRCUVVjc1EwRkRia0lzU1VGQllTeEZRVU5pTEVsQlFXRXNSVUZEWWl4UlFVRlJMRWRCUVVjc1EwRkJReXhGUVVOYUxGTkJRVk1zUjBGQlJ5eEZRVUZGTEVWQlExQXNSVUZCUlR0SlFVTlVMRWxCUVVrc1VVRkJVU3hMUVVGTExFTkJRVU1zUlVGQlJTeEZRVUZGTEc5RFFVRnZRenRSUVVOMFJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVFN1MwRkRka0k3VTBGQlRTeEpRVUZKTEU5QlFVOHNTVUZCU1N4TFFVRkxMRTlCUVU4c1NVRkJTU3hGUVVGRkxFVkJRVVVzTmtOQlFUWkRPMUZCUTI1R0xFOUJRVThzUzBGQlN5eERRVUZCTzB0QlEyWTdTVUZGUkN4SlFVRkpMRWxCUVVrc1dVRkJXU3hMUVVGTExFbEJRVWtzU1VGQlNTeFpRVUZaTEV0QlFVc3NSVUZCUlR0UlFVTm9SQ3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEV0QlFVc3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxHMURRVUZ0UXp0WlFVTnNSU3hQUVVGUExFdEJRVXNzUTBGQlFUdFRRVU5tTzFGQlFVTXNTVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExGTkJRVk1zU1VGQlNTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRk5CUVZNc1JVRkJSU3hGUVVGRkxITkNRVUZ6UWp0WlFVTTVSU3hQUVVGUExFbEJRVWtzUzBGQlN5eEpRVUZKTEVOQlFVRTdVMEZEZGtJN1VVRkZSQ3hMUVVGTExFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNSVUZCUlN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNSVUZCUlN4RlFVRkZMSFZDUVVGMVFqdFpRVU4yUlN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVVzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZCUlN4VFFVRlRMRU5CUVVNc1JVRkJSU3hGUVVGRkxHOURRVUZ2UXp0blFrRkRia2NzVDBGQlR5eExRVUZMTEVOQlFVRTdZVUZEWmp0VFFVTktPMUZCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVUU3UzBGRFpEdFRRVUZOTEVsQlFVa3NTVUZCU1N4WlFVRlpMRTFCUVUwc1NVRkJTU3hKUVVGSkxGbEJRVmtzVFVGQlRTeEZRVUZGTEVWQlFVVXNXVUZCV1R0UlFVTjJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVU5TTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRMnBDTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRMnBDTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUTFvc1UwRkJVeXhEUVVOYUxFVkJRVVVzUlVGQlJTeHJRMEZCYTBNN1dVRkRia01zVDBGQlR5eExRVUZMTEVOQlFVRTdVMEZEWmp0UlFVVkVMRXRCUVVzc1RVRkJUU3hIUVVGSExFbEJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxHbERRVUZwUXp0WlFVZHdSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVU5RTEVsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkRha0lzU1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTnNRaXhSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVU5hTEZOQlFWTXNRMEZEV2l4RlFVRkZPMmRDUVVORExFOUJRVThzUzBGQlN5eERRVUZCTzJGQlEyWTdVMEZEU2p0UlFVVkVMRTlCUVU4c1NVRkJTU3hEUVVGQk8wdEJRMlE3U1VGRlJDeFBRVUZQTEVsQlFVa3NTMEZCU3l4SlFVRkpMRU5CUVVFN1FVRkRlRUlzUTBGQlF5eERRVUZCTzBGQlJVUXNaVUZCWlR0SlFVTllMRTlCUVU4N1EwRkRWaXhEUVVGQkluMD0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlIG1haW4gZGVzdGFnbmF0ZSBjbGFzc1xuICogQGZpbGUgRGVTdGFnbmF0ZSBjb21wb25lbnQgY2xhc3NcbiAqIEBwcmVzZXJ2ZVxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGluZXMgKi9cbmltcG9ydCB7IEV2ZW50cyBhcyBCYXNlIH0gZnJvbSBcIi4vcHJpdmF0ZS9fZXZlbnRzXCI7XG5pbXBvcnQgdXJsIGZyb20gXCIuL3ByaXZhdGUvX3VybFwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEBjbGFzc2Rlc2MgQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY2xhc3NcbiAqIEBuYW1lc3BhY2VcbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGNsYXNzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgb2YgdGhpcyBlbGVtZW50XG4gICAgICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzOyB3b3JrcyBsaWtlIFJlYWN0IFByb3BzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGF0ZSBvZiBjb21wb25lbnQuIFdvcmtzIHNpbWlsYXIgUmVhY3QgU3RhdGVcbiAgICAgICAgICogQHR5cGUge3VuZGVmaW5lZCB8IE9iamVjdC48c3RyaW5nLCB1bmtub3duPn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBpbml0aWFsIHN0YXRlIHdhcyBzZXQgaW4gaW5pdGlhbGl6ZXJcbiAgICAgICAgICogRG8gbm90IHRocm93IGVycm9yIHdpdGggZGlyZWN0IHN0YXRlIHNldHRpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgY29tcG9uZW50IGlzIG1vdW50ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGF0IHRvIGNhbGwgYmVmb3JlIGNvbXBvbmVudCB1cGRhdGUgKHN0YXRlIG11dGF0aW9uKVxuICAgICAgICAgKiBAcGFyYW0ge1Byb3BzfSBwcmV2UHJvcHMgLSBwcmV2aW91cyBwcm9wc1xuICAgICAgICAgKiBAcGFyYW0gcHJldlN0YXRlIC0gcHJldmlvdXMgc3RhdGVcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9IChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4gW3ByZXZQcm9wcywgcHJldlN0YXRlXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlcyBhIGNvbXBvbmVudCB0byB1cGRhdGVcbiAgICAgICAgICogRm9sbG93cyB0aGUgc2FtZSBjb21wb25lbnQgdXBkYXRpbmcgcHJvY2VkdXJlIGFzIHNldFN0YXRlIHdpdGhvdXQgbW9kaWZ5aW5nIHN0YXRlXG4gICAgICAgICAqIEByZXR1cm5zIHJldHVybnMgZXJyb3IgaWYgZXJyb3IgaXMgdGhyb3duXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZSh0aGlzLl9leGVjUmVuZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2tzIGlmIHRoZSBzdGF0ZSBjaGFuZ2VkIGZyb20gdGhlIHByZXZpb3VzIHN0YXRlLiBDYW4gbWUgYXR0YWNoZWQgdG9cbiAgICAgICAgICogYHNob3VsZENvbXBvbmVudFVwZGF0ZWBcbiAgICAgICAgICogQHBhcmFtIGtleXMgLSBsaXN0IG9mIGtleXMgdG8gY3Jhd2wuIElmIGxlZnQgdW5kZWZpbmVkIChkZWZhdWx0KSB0aGVuXG4gICAgICAgICAqIHVzZSBhbGwga2V5cy4gU2hvdWxkIGJlIGBrZXlvZiBTdGF0ZWAsIGJ1dCB0aGVyZSB3ZXJlIHNvbWUgVHlwZXNjcmlwdFxuICAgICAgICAgKiB0cm91Ymxlcy5cbiAgICAgICAgICogQHBhcmFtIG1heERlcHRoIC0gbWF4IHJlY3Vyc2lvbiBkZXB0aCB0byBjcmF3bCBhbiBvYmplY3QuIEFmdGVyIG1heCBkZXB0aFxuICAgICAgICAgKiBpcyByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLFxuICAgICAgICAgKiB0d28gYXJyYXlzIHdpbGwgc2ltcGx5IGJlIGNvbXBhcmVkIHdpdGggYD09PWBcbiAgICAgICAgICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXRlRGlkQ2hhbmdlID0gKGtleXMsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTUpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChrZXlzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwodGhpcy5fc3RhdGUsIHRoaXMuX3ByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHt9LCBwcmV2U3RhdGUgPSB7fTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gdGhpcy5fc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGVba2V5XSA9IChfYSA9IHRoaXMuX3ByZXZTdGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gIXV0aWxzLmlzRXF1YWwoc3RhdGUsIHByZXZTdGF0ZSwgbWF4RGVwdGgsIG1heExlbmd0aCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHN0YXRlXG4gICAgICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSA9IChvYmopID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAyLiBTZWUgJHt1cmx9LmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc3RhdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRDb250ZW50ID0gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUoKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2V4ZWNSZW5kZXIoKVxuICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZywgbWF4LWxlbiAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBtb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHBhcmFtIHBhcmVudCAtIHBhcmVudCBlbGVtZW50IHRvIG1vdW50IHdpdGg7IG9wdGlvbmFsXG4gICAgICAgICAqIEByZXR1cm5zIC0gcmVzdWx0IG9mIGFwcGVuZCBjaGlsZCB0byBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tb3VudENvbXBvbmVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbE1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMy4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5jb21wb25lbnREaWRNb3VudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuZm9yRWFjaCgoY2hpbGQpID0+IGZyYWdtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsIG1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnQgPSB0aGlzLm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogVW5tb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnVubW91bnRDb21wb25lbnQgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnModGhpcy5fcGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50ID0gdGhpcy51bm1vdW50Q29tcG9uZW50O1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4sIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgY2hpbGRyZW4gZnJvbSB0aGlzLl9wYXJlbnRcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9wYXJlbnQubGFzdENoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFeGVjdXRlcyBuZXcgcmVuZGVyXG4gICAgICAgICAqIEByZXR1cm5zIHJlbmRlcmVkIGNvbnRlbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2V4ZWNSZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGVzIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQHBhcmFtIHJlbmRlcmVkQ29udGVudCAtIHJlbmRlcmVkIGNvbnRlbnQgZnJvbSBleGVjdXRpbmcgdGhlIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl91cGRhdGUgPSAocmVuZGVyZWRDb250ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiByZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5fcGFyZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYXBwZW5kQ2hpbGQocmVuZGVyZWRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXJlZENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAoX2MgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hhbmRsZUVycm9yID0gKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihTdHJpbmcoZXJyKSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKGVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFyZW50IGlzIG51bGwsIGV4cGVjdGVkIEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBnZXRTdGF0ZSBnZXR0ZXIgYXMgdGhpcy5zdGF0ZSBpdHNlbGYgaXMgcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMgY29tcG9uZW50IHN0YXRlXG4gICAgICovXG4gICAgZ2V0IGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXRzIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqIFdBUk46IGRvIG5vdCB1c2UgdGhpcyBtZXRob2QgdG8gbXV0YXRlIHRoZSBzdGF0ZSBkaXJlY3RseVxuICAgICAqIEBwYXJhbSBvYmogLSBzdGF0ZSB0byBzZXRcbiAgICAgKi9cbiAgICBzZXQgc3RhdGUob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2gobmV3IEVycm9yKGBFUlJPUjogY29kZSAxLiBTZWUgJHt1cmx9LmApKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gb2JqO1xuICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0UHJvcHMgZ2V0dGVyIGFzIHRoaXMucHJvcHMgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBwcm9wc1xuICAgICAqL1xuICAgIGdldCBnZXRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgcGFyZW50IG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQHBhcmFtIGVsZW1lbnQgLSBwYXJlbnQgZWxlbWVudFxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBzZXQgcGFyZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBwYXJlbnQgZWxlbWVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHBhcmVudFxuICAgICAqL1xuICAgIGdldCBwYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBkaWRNb3VudCB2YWx1ZSBwdWJsaWNseVxuICAgICAqIEByZXR1cm5zIGlmIG1vdW50ZWRcbiAgICAgKi9cbiAgICBnZXQgZGlkTW91bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaWRNb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcHJldmlvdXMgc3RhdGUuIFVuZGVmaW5lZCBpZiBubyBwcmV2aW91cyBzdGF0ZSBleGlzdHNcbiAgICAgKiBAcmV0dXJucyBwcmV2aW91cyBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBwcmV2U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmV2U3RhdGU7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dGNHOXVaVzUwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnZiWEJ2Ym1WdWRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3p0SFFWVkhPMEZCUTBnc09FSkJRVGhDTzBGQlJUbENMRTlCUVU4c1JVRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZETEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRmFFUXNUMEZCVHl4SFFVRkhMRTFCUVUwc1owSkJRV2RDTEVOQlFVRTdRVUZEYUVNc1QwRkJUeXhMUVVGTExFMUJRVTBzVTBGQlV5eERRVUZCTzBGQlJUTkNPenM3T3pzN1IwRk5SenRCUVVOSUxFMUJRVTBzVDBGQlowSXNVMEZIY0VJc1UwRkJVU3hKUVVGSk8wbEJOa0pXT3pzN08wOUJTVWM3U1VGRFNDeFpRVUZ2UWl4TlFVRXlRaXhGUVVGWkxFdEJRV0U3VVVGRGNFVXNTMEZCU3l4RlFVRkZMRU5CUVVFN1VVRkVaMFFzVlVGQlN5eEhRVUZNTEV0QlFVc3NRMEZCVVR0UlFXaERlRVU3T3p0WFFVZEhPMUZCUTBzc1YwRkJUU3hIUVVGVkxFVkJRVmNzUTBGQlFUdFJRVVZ1UXpzN08xZEJSMGM3VVVGRFN5eDNRa0ZCYlVJc1IwRkJSeXhMUVVGTExFTkJRVUU3VVVGUGJrTTdPMWRCUlVjN1VVRkRTeXhqUVVGVExFZEJRVWNzUzBGQlN5eERRVUZCTzFGQmMwSjZRanM3T3pzN1YwRkxSenRSUVVOSkxEUkNRVUYxUWl4SFFVRkhMRU5CUXpkQ0xGTkJRV2RDTEVWQlEyaENMRk5CUVdkQ0xFVkJRMFlzUlVGQlJTeERRVUZETEVOQlFVTXNVMEZCVXl4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGQk8xRkJORVV6UXpzN096dFhRVWxITzFGQlEyRXNaMEpCUVZjc1IwRkJSeXhIUVVGcFFpeEZRVUZGT3p0WlFVTTNReXhKUVVGSk8yZENRVU5CTEUxQlFVRXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpd3JRMEZCZGtJc1NVRkJTU3hGUVVGMVFqdG5Ra0ZGTTBJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eExRVUZMTEZOQlFWTXNSVUZCUlR0dlFrRkROVUlzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4elFrRkJjMElzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUVR0cFFrRkRhRVE3WjBKQlJVUXNTVUZCU1N4RFFVRkRMSFZDUVVGMVFpeERRVU40UWl4clFrRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZWTEc5Q1FVTndRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVU5xUWl4RFFVRkJPMmRDUVVWRUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVUU3WVVGRGJrTTdXVUZCUXl4UFFVRlBMRWRCUVZrc1JVRkJSU3d3UWtGQk1FSXNRMEZCUXp0blFrRkRPVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8yRkJRMmhETzFGQlEwd3NRMEZCUXl4RFFVRkJPMUZCUlVRN096czdPenM3T3pzN08xZEJWMGM3VVVGRFlTeHRRa0ZCWXl4SFFVRkhMRU5CUXpkQ0xFbEJRV2xDTEVWQlEycENMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eEhRVUZITEVWQlFVVXNSVUZEVUN4RlFVRkZPenRaUVVOVUxFbEJRVWtzU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0blFrRkRjRUlzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUTJwQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlExZ3NTVUZCU1N4RFFVRkRMRlZCUVZVc1JVRkRaaXhSUVVGUkxFVkJRMUlzVTBGQlV5eERRVU5hTEVOQlFVRTdZVUZEU2p0WlFVVkVMRTFCUVUwc1MwRkJTeXhIUVVFMlFpeEZRVUZGTEVWQlEzUkRMRk5CUVZNc1IwRkJOa0lzUlVGQlJTeERRVUZCTzFsQlJUVkRMRXRCUVVzc1RVRkJUU3hIUVVGSExFbEJRVWtzU1VGQlNTeEZRVUZGTzJkQ1FVTndRaXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVcxRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdaMEpCUXpORUxGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNVMEZEVkN4SlFVRkpMRU5CUVVNc1ZVRkJiVVFzTUVOQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRka1U3V1VGRlJDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzVTBGQlV5eEZRVUZGTEZGQlFWRXNSVUZCUlN4VFFVRlRMRU5CUVVNc1EwRkJRVHRSUVVOb1JTeERRVUZETEVOQlFVRTdVVUZGUkRzN096dFhRVWxITzFGQlEyRXNZVUZCVVN4SFFVRkhMRU5CUVVNc1IwRkJiVUlzUlVGQlowSXNSVUZCUlRzN1dVRkROMFFzU1VGQlNUdG5Ra0ZEUVN4TlFVRkJMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNLME5CUVhoQ0xFbEJRVWtzUlVGQmQwSTdaMEpCUlRWQ0xFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTMEZCU3l4VFFVRlRMRVZCUVVVN2IwSkJRelZDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2MwSkJRWE5DTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVFN2FVSkJRMmhFTzJkQ1FVVkVMRWxCUVVrc1EwRkJReXhWUVVGVkxIRkNRVUZQTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRVHRuUWtGRmJFTXNTVUZCU1N4RFFVRkRMSFZDUVVGMVFpeERRVU40UWl4clFrRkJTU3hKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZWTEc5Q1FVTndRaXhKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVU5xUWl4RFFVRkJPMmRDUVVWRUxFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlFUdG5Ra0ZGTDBJc1RVRkJUU3hsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETEhGQ1FVRnhRaXhGUVVGRk8yOUNRVU5vUkN4RFFVRkRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUlVGQlJUdHZRa0ZEY0VJc1EwRkJReXhEUVVGRExGTkJRVk1zUTBGQlFUdG5Ra0ZGWml4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZCTzJGQlEyaERPMWxCUVVNc1QwRkJUeXhIUVVGSExFVkJRVVVzTUVKQlFUQkNMRU5CUVVNN1owSkJRM0pETEU5QlFVOHNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFUdGhRVU5vUXp0UlFVTk1MRU5CUVVNc1EwRkJRVHRSUVVWRUxHZEZRVUZuUlR0UlFVTm9SVHM3T3p0WFFVbEhPMUZCUTJFc2JVSkJRV01zUjBGQlJ5eERRVU0zUWl4TlFVRnZRaXhGUVVOU0xFVkJRVVU3TzFsQlEyUXNTVUZCU1R0blFrRkRRU3hKUVVGSkxFMUJRVTBzUzBGQlN5eFRRVUZUTEVWQlFVVTdiMEpCUTNSQ0xFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NUVUZCVFN4RFFVRkJPMmxDUVVOMlFqdG5Ra0ZGUkN4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTTFRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZCTzJsQ1FVTm9SRHRuUWtGRlJDeE5RVUZOTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVUU3WjBKQlJTOUNMRWxCUVVrc1EwRkJReXh0UWtGQmJVSXNSMEZCUnl4SlFVRkpMRU5CUVVFN1owSkJSUzlDTEUxQlFVRXNTVUZCU1N4RFFVRkRMR3RDUVVGclFpd3JRMEZCZGtJc1NVRkJTU3hGUVVGMVFqdG5Ra0ZGTTBJc1NVRkJTU3hUUVVGVExFdEJRVXNzU1VGQlNTeEZRVUZGTzI5Q1FVTndRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZCTzJsQ1FVTm9SRHRuUWtGRlJDeEpRVUZKTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkJPMmRDUVVWeVF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJRVHRuUWtGRGNrSXNUVUZCUVN4SlFVRkpMRU5CUVVNc2FVSkJRV2xDTEN0RFFVRjBRaXhKUVVGSkxFVkJRWE5DTzJkQ1FVVXhRaXhKUVVGSkxGTkJRVk1zV1VGQldTeExRVUZMTEVWQlFVVTdiMEpCUXpWQ0xFMUJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4elFrRkJjMElzUlVGQlJTeERRVUZETzI5Q1FVVnNSQ3hUUVVGMVFpeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGQk8yOUNRVVY0UlN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkJPMmxDUVVNMVF6dG5Ra0ZGUkN4UFFVRlBMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkJPMkZCUXpkRE8xbEJRVU1zVDBGQlR5eEhRVUZaTEVWQlFVVXNNRUpCUVRCQ0xFTkJRVU03WjBKQlF6bERMRTlCUVU4c1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0aFFVTm9RenRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN1YwRkhSenRSUVVOaExGVkJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkJPMUZCUlRORE96czdWMEZIUnp0UlFVTmhMSEZDUVVGblFpeEhRVUZITEVkQlFWTXNSVUZCUlRzN1dVRkRNVU1zU1VGQlNUdG5Ra0ZEUVN4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTTFRaXhQUVVGTk8ybENRVU5VTzJkQ1FVVkVMRTFCUVVFc1NVRkJTU3hEUVVGRExHOUNRVUZ2UWl3clEwRkJla0lzU1VGQlNTeEZRVUY1UWp0blFrRkZOMElzU1VGQlNTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUVR0blFrRkZka01zU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkJPMmRDUVVOMFFpeEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRVHRoUVVONlFqdFpRVUZETEU5QlFVOHNSMEZCV1N4RlFVRkZMREJDUVVFd1FpeERRVUZETzJkQ1FVTTVReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMkZCUTNwQ08xRkJSVXdzUTBGQlF5eERRVUZCTzFGQlJVUTdPenRYUVVkSE8xRkJRMkVzV1VGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4blFrRkJaMElzUTBGQlFUdFJRVU12UXl3clJFRkJLMFE3VVVGRkwwUTdPenRYUVVkSE8xRkJRMHNzYjBKQlFXVXNSMEZCUnl4SFFVRlRMRVZCUVVVN1dVRkRha01zU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1JVRkJSVHRuUWtGRE5VSXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXh6UWtGQmMwSXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRVHRoUVVOb1JEdFpRVVZFTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVU3WjBKQlF6VkNMRWxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVTdiMEpCUTNoQ0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVRTdhVUpCUTI1RU8yRkJRMG83VVVGRFRDeERRVUZETEVOQlFVRTdVVUZGUkRzN08xZEJSMGM3VVVGRFN5eG5Ra0ZCVnl4SFFVRkhMRWRCUVdVc1JVRkJSVHRaUVVOdVF5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVFN1dVRkZkRUlzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVFN1VVRkRlRUlzUTBGQlF5eERRVUZCTzFGQlIwUTdPenM3VjBGSlJ6dFJRVU5MTEZsQlFVOHNSMEZCUnl4RFFVRkRMR1ZCUVRSQ0xFVkJRVkVzUlVGQlJUczdXVUZEY2tRc1NVRkJTU3hsUVVGbExGbEJRVmtzUzBGQlN5eEZRVUZGTzJkQ1FVTnNReXhMUVVGTExFMUJRVTBzVDBGQlR5eEpRVUZKTEdWQlFXVXNSVUZCUlR0dlFrRkRia01zVFVGQlFTeEpRVUZKTEVOQlFVTXNUMEZCVHl3d1EwRkJSU3hYUVVGWExFTkJRVU1zVDBGQlR5eEZRVUZETzJsQ1FVTnlRenRoUVVOS08ybENRVUZOTEVsQlFVa3NaVUZCWlN4RlFVRkZPMmRDUVVONFFpeE5RVUZCTEVsQlFVa3NRMEZCUXl4UFFVRlBMREJEUVVGRkxGZEJRVmNzUTBGQlF5eGxRVUZsTEVWQlFVTTdZVUZETjBNN1dVRkZSQ3hKUVVGSkxHVkJRV1VzUlVGQlJUdG5Ra0ZEYWtJc1RVRkJRU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMQ3REUVVGMlFpeEpRVUZKTEVWQlFYVkNPMkZCUXpsQ08xRkJRMHdzUTBGQlF5eERRVUZCTzFGQlJVOHNhVUpCUVZrc1IwRkJSeXhEUVVGRExFZEJRVmtzUlVGQlV5eEZRVUZGTzFsQlF6TkRMRWxCUVVrc1IwRkJSeXhaUVVGWkxFdEJRVXNzUlVGQlJUdG5Ra0ZEZEVJc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8yZENRVVV6UWl4UFFVRlBMRWRCUVZrc1EwRkJRVHRoUVVOMFFqdFpRVVZFTEUxQlFVMHNTMEZCU3l4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkJPMWxCUlhCRExFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlFUdFpRVVUzUWl4UFFVRlBMRXRCUVVzc1EwRkJRVHRSUVVOb1FpeERRVUZETEVOQlFVRTdVVUYwVlVjc1NVRkJTU3hOUVVGTkxFdEJRVXNzU1VGQlNTeEZRVUZGTzFsQlEycENMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYlVSQlFXMUVMRU5CUVVNc1EwRkJRVHRUUVVOMlJUdFJRVVZFTEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGQk8wbEJRM3BDTEVOQlFVTTdTVUZoUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZYTEZGQlFWRTdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVUU3U1VGRGNrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5JTEVsQlFXTXNTMEZCU3p0UlFVTm1MRTlCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlFUdEpRVU4wUWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTklMRWxCUVdNc1MwRkJTeXhEUVVGRkxFZEJRVlU3VVVGRE0wSXNTVUZCU1N4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVTdXVUZETVVJc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RFFVTnNRaXhKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGRE1VTXNRMEZCUVR0WlFVTkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdVMEZEY2tJN1lVRkJUVHRaUVVOSUxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4RFFVRkJPMWxCUTJwQ0xFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1IwRkJSeXhKUVVGSkxFTkJRVUU3VTBGRGJFTTdTVUZEVEN4RFFVRkRPMGxCUlVRN096dFBRVWRITzBsQlEwZ3NTVUZCVnl4UlFVRlJPMUZCUTJZc1QwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZCTzBsQlEzSkNMRU5CUVVNN1NVRkZSRHM3T3p0UFFVbEhPMGxCUTBnc1NVRkJWeXhOUVVGTkxFTkJRVVVzVDBGQlowTTdVVUZETDBNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVRTdTVUZETVVJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1RVRkJUVHRSUVVOaUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUVR0SlFVTjJRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBnc1NVRkJWeXhSUVVGUk8xRkJRMllzVDBGQlR5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkJPMGxCUTNwQ0xFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTQ3hKUVVGWExGTkJRVk03VVVGRGFFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGQk8wbEJRekZDTEVOQlFVTTdRMEU0VDBvN1FVRkZSQ3hsUVVGbExGTkJRVk1zUTBGQlFTSjkiLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuOC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiwgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbmV4cG9ydCBjb25zdCBmcmFnbWVudCA9IChfLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGJpbmRDaGlsZHJlbihmcmFnbWVudCwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBmcmFnbWVudDtcbn07XG5leHBvcnQgZGVmYXVsdCBmcmFnbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVpuSmhaMjFsYm5RdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZabkpoWjIxbGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZEU0N3eVFrRkJNa0k3UVVGRE0wSXNhVU5CUVdsRE8wRkJSV3BETEU5QlFVOHNSVUZGU0N4WlFVRlpMRWRCUTJZc1RVRkJUU3dyUWtGQkswSXNRMEZCUVR0QlFVVjBReXhOUVVGTkxFTkJRVU1zVFVGQlRTeFJRVUZSTEVkQlFVY3NRMEZEY0VJc1EwRkJWU3hGUVVOV0xFZEJRVWNzVVVGQk1rSXNSVUZEWkN4RlFVRkZPMGxCUTJ4Q0xFMUJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4elFrRkJjMElzUlVGQlJTeERRVUZCTzBsQlJXeEVMRmxCUVZrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVRTdTVUZGYUVNc1QwRkJUeXhSUVVGUkxFTkJRVUU3UVVGRGJrSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaU3hSUVVGUkxFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS44LjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBtYWluIGZpbGUgZm9yIGRlc3RhZ25hdGVcbiAqIEBwcmVzZXJ2ZVxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2pzeC50c1wiIC8+XG5pbXBvcnQgKiBhcyBfQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZVJlZiBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50TlMgZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgKiBhcyBfRnJhZ21lbnQgZnJvbSBcIi4vZnJhZ21lbnRcIjtcbmV4cG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuZXhwb3J0IHsgY3JlYXRlUmVmIH0gZnJvbSBcIi4vY3JlYXRlUmVmXCI7XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudE5TIH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5leHBvcnQgeyBmcmFnbWVudCB9IGZyb20gXCIuL2ZyYWdtZW50XCI7XG5leHBvcnQgdmFyIERlU3RhZ25hdGU7XG4oZnVuY3Rpb24gKERlU3RhZ25hdGUpIHtcbiAgICBEZVN0YWduYXRlLkNvbXBvbmVudCA9IF9Db21wb25lbnQuQ29tcG9uZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlUmVmID0gX0NyZWF0ZVJlZi5jcmVhdGVSZWY7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVFbGVtZW50ID0gX0NyZWF0ZUVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnROUyA9IF9DcmVhdGVFbGVtZW50TlMuY3JlYXRlRWxlbWVudE5TO1xuICAgIERlU3RhZ25hdGUuZnJhZ21lbnQgPSBfRnJhZ21lbnQuZnJhZ21lbnQ7XG59KShEZVN0YWduYXRlIHx8IChEZVN0YWduYXRlID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IERlU3RhZ25hdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3UjBGVlJ6dEJRVU5JTERKQ1FVRXlRanRCUVVNelFpeHBRMEZCYVVNN1FVRkZha01zVDBGQlR5eExRVUZMTEZWQlFWVXNUVUZCVFN4aFFVRmhMRU5CUVVFN1FVRkRla01zVDBGQlR5eExRVUZMTEZWQlFWVXNUVUZCVFN4aFFVRmhMRU5CUVVFN1FVRkRla01zVDBGQlR5eExRVUZMTEdOQlFXTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU5xUkN4UFFVRlBMRXRCUVVzc1owSkJRV2RDTEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRGNrUXNUMEZCVHl4TFFVRkxMRk5CUVZNc1RVRkJUU3haUVVGWkxFTkJRVUU3UVVGRmRrTXNUMEZCVHl4RlFVRkRMRk5CUVZNc1JVRkJReXhOUVVGTkxHRkJRV0VzUTBGQlFUdEJRVU55UXl4UFFVRlBMRVZCUVUwc1UwRkJVeXhGUVVGRExFMUJRVTBzWVVGQllTeERRVUZCTzBGQlF6RkRMRTlCUVU4c1JVRkJReXhoUVVGaExFVkJRVU1zVFVGQlRTeHBRa0ZCYVVJc1EwRkJRVHRCUVVNM1F5eFBRVUZQTEVWQlFVTXNaVUZCWlN4RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEYWtRc1QwRkJUeXhGUVVGRExGRkJRVkVzUlVGQlF5eE5RVUZOTEZsQlFWa3NRMEZCUVR0QlFVVnVReXhOUVVGTkxFdEJRVmNzVlVGQlZTeERRVTh4UWp0QlFWQkVMRmRCUVdsQ0xGVkJRVlU3U1VGRFZDeHZRa0ZCVXl4SFFVRkpMRlZCUVZVc1ZVRkJaQ3hEUVVGak8wbEJRM1pDTEc5Q1FVRlRMRWRCUVVrc1ZVRkJWU3hWUVVGa0xFTkJRV003U1VGRmRrSXNkMEpCUVdFc1IwRkJTU3hqUVVGakxHTkJRV3hDTEVOQlFXdENPMGxCUXk5Q0xEQkNRVUZsTEVkQlFVa3NaMEpCUVdkQ0xHZENRVUZ3UWl4RFFVRnZRanRKUVVOdVF5eHRRa0ZCVVN4SFFVRkpMRk5CUVZNc1UwRkJZaXhEUVVGaE8wRkJRM1pETEVOQlFVTXNSVUZRWjBJc1ZVRkJWU3hMUVVGV0xGVkJRVlVzVVVGUE1VSTdRVUZGUkN4bFFVRmxMRlZCUVZVc1EwRkJRU0o5Il0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnROUyIsIl9jcmVhdGVSZWYiLCJCYXNlQ29tcG9uZW50IiwiQmFzZSIsIl9Db21wb25lbnQuQ29tcG9uZW50IiwiX0NyZWF0ZVJlZi5jcmVhdGVSZWYiLCJfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50IiwiX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlMiLCJfRnJhZ21lbnQuZnJhZ21lbnQiLCJEZVN0YWduYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU0sR0FBRyxHQUFHLHdEQUFaOztBQ3FGUDs7Ozs7OztBQU9HOztBQUNJLElBQU0sU0FBUyxHQUFHLFNBQVosU0FBWSxDQUNyQixPQURxQixFQUVyQixLQUZxQixFQUlmO0FBQUEsTUFETixFQUNNLHVFQURELEtBQ0M7O0FBQ04sTUFBSSxLQUFKLEVBQVc7QUFDUCx1Q0FBeUIsTUFBTSxDQUFDLE9BQVAsQ0FB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
