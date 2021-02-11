/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wcml2YXRlL191cmwuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzLmpzIiwiLi4vLi4vbGliL2NyZWF0ZUVsZW1lbnQuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudE5TLmpzIiwiLi4vLi4vbGliL2NyZWF0ZVJlZi5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19iYXNlLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2V2ZW50cy5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL3V0aWxzLmpzIiwiLi4vLi4vbGliL2NvbXBvbmVudC5qcyIsIi4uLy4uL2xpYi9mcmFnbWVudC5qcyIsIi4uLy4uL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXJsID0gXCJodHRwczovL2x1a2UtemhhbmctMDQuZ2l0aHViLmlvL0RlU3RhZ25hdGUvZXJyb3ItY29kZXNcIjtcbmV4cG9ydCBkZWZhdWx0IHVybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOTFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExIZEVRVUYzUkN4RFFVRkJPMEZCUlRORkxHVkJRV1VzUjBGQlJ5eERRVUZCSW4wPSIsIi8qKlxuICogQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBmaWxlIHNoYXJlIGZ1bmN0aW9ucyBhbmQgdHlwZXMgZm9yIGNyZWF0ZUVsZW1lbnQgYW5kIGl0J3MgdmFyaWFudHNcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9fdXJsXCI7XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgdG8gYmluZCB3aXRoXG4gKiBAcGFyYW0gbnMgLSBpZiBuYW1lc3BhY2UgZWxlbWVudFxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgY29uc3QgYmluZFByb3BzID0gKGVsZW1lbnQsIHByb3BzLCBucyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImlubmVySFRNTFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnVsbCwga2V5LCB2YWwudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkuc2xpY2UoMCwgMikgPT09IFwib25cIikgeyAvLyBXb3JrcyBzdWNoIGFzIG9uQ2xpY2ssIG9uQW5pbWF0aW9uRW5kLCBldGMuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodmFsKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpLCB2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJyZWZcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiAodmFsKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIFwiY3VycmVudFwiIGluIHZhbCkge1xuICAgICAgICAgICAgICAgIHZhbC5jdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3R5cGVvZiB2YWx9IGlzIG5vdCBhIHZhbGlkIERlU3RhZ25hdGUgY2hpbGRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gdG8gYmluZCB3aXRoXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kQ2hpbGRyZW4gPSAoZWxlbWVudCwgY2hpbGRyZW4pID0+IHtcbiAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwgJiYgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IChiaW5kQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGRyZW4udG9TdHJpbmcoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuLmRpZE1vdW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5tb3VudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4ucGFyZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucGFyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkcmVuLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMk55WldGMFpVVnNaVzFsYm5SVmRHbHNjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWpjbVZoZEdWRmJHVnRaVzUwVlhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1UwRkJVeXhGUVVGRExFMUJRVTBzWTBGQll5eERRVUZCTzBGQlJYUkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlFUdEJRWGxGZUVJN096czdPenM3UjBGUFJ6dEJRVU5JTEUxQlFVMHNRMEZCUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVOeVFpeFBRVUZuUWl4RlFVTm9RaXhMUVVGNVFpeEZRVU42UWl4RlFVRkZMRWRCUVVjc1MwRkJTeXhGUVVOT0xFVkJRVVU3U1VGRFRpeEpRVUZKTEV0QlFVc3NSVUZCUlR0UlFVTlFMRXRCUVVzc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6VkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGRGNFUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1YwRkJWeXhGUVVGRk8yOUNRVU55UWl4UFFVRlBMRU5CUVVNc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUVR0cFFrRkRja003Y1VKQlFVMHNTVUZCU1N4RlFVRkZMRVZCUVVVN2IwSkJRMWdzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkJPMmxDUVVOd1JEdHhRa0ZCVFR0dlFrRkRTQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlFUdHBRa0ZETlVNN1lVRkRTanRwUWtGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlN4RlFVRkZMRGhEUVVFNFF6dG5Ra0ZEYWtZc1NVRkJTU3hQUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMjlDUVVNMVFpeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRM0JDTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU5RTEZkQlFWY3NSVUZCYjBJc1JVRkRjRU1zUjBGQlowSXNRMEZEYmtJc1EwRkJRVHRwUWtGRFNqdGhRVU5LTzJsQ1FVRk5MRWxCUTBnc1IwRkJSeXhMUVVGTExFdEJRVXM3WjBKQlEySXNUMEZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExGRkJRVkU3WjBKQlEzaENMRk5CUVZNc1NVRkJTU3hIUVVGSExFVkJRMnhDTzJkQ1FVTkhMRWRCUVc5Q0xFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUVR0aFFVTXhRenRwUWtGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRekZDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhQUVVGUExFZEJRVWNzYTBOQlFXdERMRU5CUVVNc1EwRkJRVHRoUVVOb1JUdFRRVU5LTzB0QlEwbzdRVUZEVEN4RFFVRkRMRU5CUVVFN1FVRkZSRHM3T3pzN08wZEJUVWM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1EwRkRlRUlzVDBGQllTeEZRVU5pTEZGQlFYVkNMRVZCUTI1Q0xFVkJRVVU3U1VGRFRpeEpRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRkpMRWxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdFJRVU0zUXl4SlFVRkpMRkZCUVZFc1dVRkJXU3hMUVVGTExFVkJRVVU3V1VGRE0wSXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVzFDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUTNSRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUXk5Q0xFTkJRVU1zUTBGQlFUdFRRVU5NTzJGQlFVMHNTVUZEU0N4UFFVRlBMRkZCUVZFc1MwRkJTeXhSUVVGUk8xbEJRelZDTEU5QlFVOHNVVUZCVVN4TFFVRkxMRkZCUVZFc1JVRkRPVUk3V1VGRFJTeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRVHRUUVVOd1JUdGhRVUZOTEVsQlFVa3NVVUZCVVN4WlFVRlpMRk5CUVZNc1JVRkJSVHRaUVVOMFF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1NVRkJTU3hQUVVGUExGbEJRVmtzVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkROMFFzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRuUWtGRmRrSXNUMEZCVFR0aFFVTlVPMmxDUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNXVUZCV1N4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3WjBKQlEycEVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVUU3WVVGREwwTTdXVUZGUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFdEJRVXNzVDBGQlR5eEZRVUZGTzJkQ1FVTTNRaXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUVR0aFFVTTFRanRaUVVWRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUVR0VFFVTjZRanRoUVVGTk8xbEJRMGdzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRVHRUUVVOb1F6dExRVU5LTzBGQlEwd3NRMEZCUXl4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuLCBiaW5kUHJvcHMgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbi8qKlxuICpcbiAqIEBwYXJhbSB0YWdOYW1lT3JDb21wb25lbnQgLSBuYW1lIG9mIEhUTUwgZWxlbWVudCBvciBmdW5jdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSBwcm9wcyAtIHByb3BzIG9mIGVsZW1lbnQgb3IgY29tcG9uZW50XG4gKiAxLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyB0YWduYW1lLCBwcm9wcyBhcmUgZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiAyLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyBhIGZ1bmN0aW9uLCBwcm9wcyBhcmUgdGhhdCBmdW5jdGlvbnMgcGFyYW1ldGVyc1xuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50LiBDYW4gYmUgbm90aGluZywgbnVtYmVyIChjb252ZXJ0ZWQgdG8gc3RyaW5nKSwgc3RyaW5nICh0ZXh0KSwgb3IgYW5vdGhlciBlbGVtZW50LiBBbiBhcnJheSBvZiBhbnkgb2YgdGhlc2Ugd2lsbCBjcmVhdGUgbXVsdGlwbGUgY2hpbGRyZW5cbiAqIEBwYXJhbSBjaGlsZHJlbkFyZ3MgLSByZXN0IHBhcmFtZXRlciBmb3IgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50LCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgICBpZiAodHlwZW9mICh0YWdOYW1lT3JDb21wb25lbnQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWVPckNvbXBvbmVudCk7XG4gICAgICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcyk7XG4gICAgICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gdGFnTmFtZU9yQ29tcG9uZW50KHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBFcnJvcihcInRhZ05hbWVPckNvbXBvbmVudCBpcyBvZiBpbnZhbGlkIHR5cGUuXCIpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSmxZWFJsUld4bGJXVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5amNtVmhkR1ZGYkdWdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3p0SFFWRkhPMEZCUTBnc01rSkJRVEpDTzBGQlF6TkNMR2xEUVVGcFF6dEJRVVZxUXl4UFFVRlBMRVZCUjBnc1dVRkJXU3hGUVVOYUxGTkJRVk1zUlVGRFdpeE5RVUZOTEN0Q1FVRXJRaXhEUVVGQk8wRkJjME4wUXpzN096czdPenM3TzBkQlUwYzdRVUZEU0N4TlFVRk5MRlZCUVZVc1lVRkJZU3hEUVVsNlFpeHJRa0ZIV1N4RlFVTmFMRXRCUVRaQ0xFVkJRemRDTEVkQlFVY3NVVUZCTWtJN1NVRkZPVUlzU1VGQlNTeFBRVUZOTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUzBGQlN5eFJRVUZSTEVWQlFVVTdVVUZEZWtNc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZCTzFGQlJURkVMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQk1FSXNRMEZCUXl4RFFVRkJPMUZCUlRsRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVFN1VVRkZMMElzVDBGQlR5eFBRVUZQTEVOQlFVRTdTMEZEYWtJN1UwRkJUU3hKUVVGSkxFOUJRVTBzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhMUVVGTExGVkJRVlVzUlVGQlJUdFJRVU5zUkN4UFFVRlBMR3RDUVVGclFpeERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRVHRMUVVOc1JEdEpRVVZFTEU5QlFVOHNTMEZCU3l4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVRTdRVUZETVVRc1EwRkJRenRCUVVWRUxHVkJRV1VzWVVGQllTeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50TlMgY3JlYXRlRWxlbWVudCBmb3IgbmFtZXNwYWNlZCBlbGVtZW50c1xuICovXG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcyB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKiBDcmVhdGVzIGEgY2hpbGQgZWxlbWVudCB0byBkZVN0YWduYXRlXG4gKiBAcGFyYW0gbmFtZXNwYWNlVVJJIC0gbmFtZXNwYWNlIHVyaVxuICogQHBhcmFtIHRhZ05hbWUgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuUmVzdCAtIHJlc3QgcGFyYW1ldGVyIG9mIGNoaWxkcmVuXG4gKiBAcmV0dXJucyBodG1sIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnROUyA9IChuYW1lc3BhY2VVUkksIHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCB0YWdOYW1lKTtcbiAgICBiaW5kUHJvcHMoZWxlbWVudCwgcHJvcHMsIHRydWUpO1xuICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudE5TO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRFNVRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVVZzWlcxbGJuUk9VeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSUxFOUJRVThzUlVGRlNDeFpRVUZaTEVWQlExb3NVMEZCVXl4RlFVTmFMRTFCUVUwc0swSkJRU3RDTEVOQlFVRTdRVUZGZEVNN096czdPenM3TzBkQlVVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hsUVVGbExFZEJRVWNzUTBGRE0wSXNXVUZCSzBjc1JVRkRMMGNzVDBGQk1FTXNSVUZETVVNc1MwRkJkME1zUlVGRGVFTXNSMEZCUnl4UlFVRXlRaXhGUVVOMlFpeEZRVUZGTzBsQlExUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eFpRVUZaTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVFN1NVRkZMMFFzVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVUU3U1VGRkwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdEpRVVV2UWl4UFFVRlBMRTlCUVU4c1EwRkJRVHRCUVVOc1FpeERRVUZETEVOQlFVRTdRVUZGUkN4bFFVRmxMR1ZCUVdVc1EwRkJRU0o5IiwiLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZiA9ICgpID0+ICh7XG4gICAgY3VycmVudDogbnVsbCxcbn0pO1xuLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxVbVZtTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnlaV0YwWlZKbFppNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZsUVRzN08wZEJSMGM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJkME1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtVc1QwRkJUeXhGUVVGRkxFbEJRVWs3UTBGRGFFSXNRMEZCUXl4RFFVRkJPMEZCUlVZN096dEhRVWRITzBGQlEwZ3NaVUZCWlN4VFFVRlRMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgUHJlc2V0IC0gYmFzZSBmb3IgYSBjb21wb25lbnRcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudE5TIH0gZnJvbSBcIi4uL2NyZWF0ZUVsZW1lbnROU1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlUmVmIH0gZnJvbSBcIi4uL2NyZWF0ZVJlZlwiO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50c1xuICovXG5leHBvcnQgY2xhc3MgUHJlc2V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcbiAgICAgICAgdGhpcy5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gY29tcG9uZW50IGNhdGNoZXMgZXJyb3IuIERlZmF1bHQgYmVoYXZpb3VyIGlzIGNvbnNvbGUuZXJyb3JcbiAgICAgICAgICogQHBhcmFtIGVycm9yIC0gZXJyb3Igb2JqZWN0IHdpdGggaW5mb1xuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoID0gKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCBiZWZvcmUgY29tcG9uZW50IGlzIHVwZGF0ZWRcbiAgICAgICAgICogQHJldHVybnMgd2hldGhlciBvciBub3QgY29tcG9uZW50IHNob3VsZCB1cGRhdGUvcmUtcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9ICgpID0+IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXJpbmcgSFRNTCwgbXVzdCBiZSBwYXJ0IG9mIGV4dGVuZGVkIGNsYXNzXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcmV0dXJucyBpZiByZXR1cm5zIG51bGwgZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gbnVsbDtcbiAgICB9XG59XG5QcmVzZXQuY3JlYXRlRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50O1xuUHJlc2V0LmNyZWF0ZUVsZW1lbnROUyA9IF9jcmVhdGVFbGVtZW50TlM7XG5QcmVzZXQuY3JlYXRlUmVmID0gX2NyZWF0ZVJlZjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgySmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjSEpwZG1GMFpTOWZZbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPMGRCVTBjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEdOQlFXTXNSVUZCUXl4TlFVRk5MR3RDUVVGclFpeERRVUZCTzBGQlF6RkVMRTlCUVU4c1JVRkJReXhQUVVGUExFbEJRVWtzWjBKQlFXZENMRVZCUVVNc1RVRkJUU3h2UWtGQmIwSXNRMEZCUVR0QlFVTTVSQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEZWQlFWVXNSVUZCUXl4TlFVRk5MR05CUVdNc1EwRkJRVHRCUVdsRGJFUXNNRUpCUVRCQ08wRkJRekZDT3p0SFFVVkhPMEZCUTBnc1RVRkJUU3hQUVVGblFpeE5RVUZOTzBsQlFUVkNPMUZCVVc5Q0xHdENRVUZoTEVkQlFVY3NZMEZCWXl4RFFVRkJPMUZCUlRsQ0xHOUNRVUZsTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVUU3VVVGRmJFTXNZMEZCVXl4SFFVRkhMRlZCUVZVc1EwRkJRVHRSUVVWMFF6czdPenRYUVVsSE8xRkJRMGtzYzBKQlFXbENMRWRCUVVjc1EwRkJReXhMUVVGWkxFVkJRVkVzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRmRrVTdPenRYUVVkSE8xRkJRMGtzTUVKQlFYRkNMRWRCUVVjc1IwRkJXU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZCTzFGQlJXeEVPenM3T3pzN1YwRk5SenRSUVVOaExGZEJRVTBzUjBGQlJ5eEhRVUZsTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVFN1NVRkZia1FzUTBGQlF6czdRVUZzUXpCQ0xHOUNRVUZoTEVkQlFVY3NZMEZCWXl4RFFVRkJPMEZCUlRsQ0xITkNRVUZsTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVUU3UVVGRmJFTXNaMEpCUVZNc1IwRkJSeXhWUVVGVkxFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBFdmVudHNcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IFByZXNldCBhcyBCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vX2Jhc2VcIjtcbmNvbnN0IGV2ZW50TmFtZXMgPSBbXG4gICAgXCJvbkZvY3VzXCIsXG4gICAgXCJvbkJsdXJcIixcbiAgICBcIm9uRm9jdXNJblwiLFxuICAgIFwib25Gb2N1c091dFwiLFxuICAgIFwib25BbmltYXRpb25TdGFydFwiLFxuICAgIFwib25BbmltYXRpb25DYW5jZWxcIixcbiAgICBcIm9uQW5pbWF0aW9uRW5kXCIsXG4gICAgXCJvbkFuaW1hdGlvbkl0ZXJhdGlvblwiLFxuICAgIFwib25UcmFuc2l0aW9uU3RhcnRcIixcbiAgICBcIm9uVHJhbnNpdGlvbkNhbmNlbFwiLFxuICAgIFwib25UcmFuc2l0aW9uRW5kXCIsXG4gICAgXCJvblRyYW5zaXRpb25SdW5cIixcbiAgICBcIm9uQXV4Q2xpY2tcIixcbiAgICBcIm9uQ2xpY2tcIixcbiAgICBcIm9uRGJsQ2xpY2tcIixcbiAgICBcIm9uTW91c2VEb3duXCIsXG4gICAgXCJvbk1vdXNlRW50ZXJcIixcbiAgICBcIm9uTW91c2VMZWF2ZVwiLFxuICAgIFwib25Nb3VzZU1vdmVcIixcbiAgICBcIm9uTW91c2VPdmVyXCIsXG4gICAgXCJvbk1vdXNlT3V0XCIsXG4gICAgXCJvbk1vdXNlVXBcIixcbl07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50cyBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzIGV2ZW50XG4gICAgICAgICAqIERvIG5vdCBjYWxsIG1hbnVhbGx5XG4gICAgICAgICAqIEBwYWNha2dlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kcyBldmVudCBsaXN0ZW5lcnMgZXZlbnRcbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRMaXN0ZW5lcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcihlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyID0gKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnROYW1lIG9mIGV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sRXZlbnROYW1lID0gZXZlbnROYW1lLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksIGNhbGxiYWNrID0gdGhpc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcihodG1sRXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyVjJaVzUwY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTlsZG1WdWRITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3p0SFFWTkhPMEZCUlVnc1QwRkJUeXhGUVVGRExFMUJRVTBzU1VGQlNTeGhRVUZoTEVWQlFVTXNUVUZCVFN4VFFVRlRMRU5CUVVFN1FVRXJTQzlETEUxQlFVMHNWVUZCVlN4SFFVRnhRanRKUVVOcVF5eFRRVUZUTzBsQlExUXNVVUZCVVR0SlFVTlNMRmRCUVZjN1NVRkRXQ3haUVVGWk8wbEJRMW9zYTBKQlFXdENPMGxCUTJ4Q0xHMUNRVUZ0UWp0SlFVTnVRaXhuUWtGQlowSTdTVUZEYUVJc2MwSkJRWE5DTzBsQlEzUkNMRzFDUVVGdFFqdEpRVU51UWl4dlFrRkJiMEk3U1VGRGNFSXNhVUpCUVdsQ08wbEJRMnBDTEdsQ1FVRnBRanRKUVVOcVFpeFpRVUZaTzBsQlExb3NVMEZCVXp0SlFVTlVMRmxCUVZrN1NVRkRXaXhoUVVGaE8wbEJRMklzWTBGQll6dEpRVU5rTEdOQlFXTTdTVUZEWkN4aFFVRmhPMGxCUTJJc1lVRkJZVHRKUVVOaUxGbEJRVms3U1VGRFdpeFhRVUZYTzBOQlEyUXNRMEZCUVR0QlFVVkVMREJDUVVFd1FqdEJRVU14UWl4TlFVRk5MRTlCUVdkQ0xFMUJRVThzVTBGQlVTeGhRVUZoTzBsQlFXeEVPenRSUVVWSk96czdPMWRCU1VjN1VVRkRaMElzZFVKQlFXdENMRWRCUVVjc1EwRkJReXhQUVVGdlFpeEZRVUZSTEVWQlFVVTdXVUZEYmtVc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlFUdFJRVU5xUkN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3p0WFFVbEhPMUZCUTJkQ0xIbENRVUZ2UWl4SFFVRkhMRU5CUVVNc1QwRkJiMElzUlVGQlVTeEZRVUZGTzFsQlEzSkZMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVDBGQlR5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExFTkJRVUU3VVVGRGNFUXNRMEZCUXl4RFFVRkJPMUZCUlU4c2JVSkJRV01zUjBGQlJ5eERRVUZETEdGQlFUUkNMRVZCUVZFc1JVRkJSVHRaUVVNMVJDeExRVUZMTEUxQlFVMHNVMEZCVXl4SlFVRkpMRlZCUVZVc1JVRkJSVHRuUWtGRGFFTXNUVUZCVFN4aFFVRmhMRWRCUVVjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1JVRkRiRVFzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRVHRuUWtGRk9VSXNTVUZCU1N4UlFVRlJMRXRCUVVzc1UwRkJVeXhKUVVGSkxGRkJRVkVzV1VGQldTeFJRVUZSTEVWQlFVVTdiMEpCUTNoRUxHRkJRV0VzUTBGRFZDeGhRVUZoTEVWQlEySXNVVUZCT0VNc1EwRkRha1FzUTBGQlFUdHBRa0ZEU2p0aFFVTktPMUZCUTB3c1EwRkJReXhEUVVGQk8wbEJSVXdzUTBGQlF6dERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBVdGlscyAtIHV0aWxpdGllcyBmb3IgRGVTdGFnbmF0ZVxuICovXG4vKipcbiAqIENoZWNrcyBpZiB2YWwxIGFuZCB2YWwyIGFyZSBlcXVhbFxuICogQHBhcmFtIHZhbDEgLSB2YWx1ZSB0byBjaGVjayBmb3IgZXF1YWxpdHlcbiAqIEBwYXJhbSB2YWwyIC0gdmFsdWUgdG8gY29tcGFyZSBhZ2FpbnN0IHZhbDFcbiAqIEBwYXJhbSBtYXhEZXB0aCAtIG1heCByZWN1cnNpb24gZGVwdGggdG8gY3Jhd2wgYW4gb2JqZWN0LiBBZnRlciBtYXggZGVwdGggaXNcbiAqIHJlYWNoZWQsIHRoZSB0d28gdmFsdWVzIGFyZSBzaW1wbHkgY29tcGFyZWQgd2l0aCBgPT09YFxuICogQHBhcmFtIG1heExlbmd0aCAtIG1heCBsZW5ndGggb2YgYXJyYXkgdG8gY3Jhd2wuIElmIG1heCBsZW50aCBpcyByZWFjaGVkLCB0d29cbiAqIGFycmF5cyB3aWxsIHNpbXBseSBiZSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gKiBAcmV0dXJucyBgdmFsMSA9PT0gdmFsMmBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzRXF1YWwgPSAodmFsMSwgdmFsMiwgbWF4RGVwdGggPSAzLCBtYXhMZW5ndGggPSAxMCkgPT4ge1xuICAgIGlmIChtYXhEZXB0aCA9PT0gMCkgeyAvLyBJZiBtYXhEZXB0aCByZWFjaGVkLCBqdXN0IHJ1biA9PT1cbiAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwxICE9PSB0eXBlb2YgdmFsMikgeyAvLyBJZiB0aGV5IGFyZW4ndCB0aGUgc2FtZSB0eXBlLCByZXR1cm4gZmFsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsMSBpbnN0YW5jZW9mIEFycmF5ICYmIHZhbDIgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBpZiAodmFsMS5sZW5ndGggIT09IHZhbDIubGVuZ3RoKSB7IC8vIElmIGFycmF5cyBoYXZlIGRpZmZlcmVudCBsZW5ndGhzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsMS5sZW5ndGggPiBtYXhMZW5ndGggfHwgdmFsMi5sZW5ndGggPiBtYXhMZW5ndGgpIHsgLy8gSWYgYXJyYXkgaXMgdG9vIGJpZ1xuICAgICAgICAgICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZhbDEubGVuZ3RoOyBpbmRleCsrKSB7IC8vIEdvIHRocm91Z2ggZWFjaCBpdGVtXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtpbmRleF0sIHZhbDJbaW5kZXhdLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gVGVzdCBpZiB0d28gYXJyYXkgaXRlbXMgYXJlIGVxdWFsXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICh2YWwxIGluc3RhbmNlb2YgT2JqZWN0ICYmIHZhbDIgaW5zdGFuY2VvZiBPYmplY3QpIHsgLy8gSWYgb2JqZWN0XG4gICAgICAgIGlmICghaXNFcXVhbChPYmplY3Qua2V5cyh2YWwxKSwgT2JqZWN0LmtleXModmFsMiksIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkgeyAvLyBJZiB0aGV5IGRvbid0IGhhdmUgaGUgc2FtZSBrZXlzXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModmFsMSkpIHsgLy8gR28gdGhyb3VnaCBhbmQgdGVzdCBlYWNoIHZhbHVlXG4gICAgICAgICAgICBpZiAoIWlzRXF1YWwodmFsMVtrZXldLCB2YWwyW2tleV0sIG1heERlcHRoIC0gMSwgbWF4TGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDEgPT09IHZhbDI7XG59O1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlzRXF1YWwsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTl6Y21NdmNISnBkbUYwWlM5MWRHbHNjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSU96czdPenM3T3pzN1IwRlRSenRCUVVOSUxFMUJRVTBzUTBGQlF5eE5RVUZOTEU5QlFVOHNSMEZCUnl4RFFVTnVRaXhKUVVGaExFVkJRMklzU1VGQllTeEZRVU5pTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUTFvc1UwRkJVeXhIUVVGSExFVkJRVVVzUlVGRFVDeEZRVUZGTzBsQlExUXNTVUZCU1N4UlFVRlJMRXRCUVVzc1EwRkJReXhGUVVGRkxFVkJRVVVzYjBOQlFXOURPMUZCUTNSRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0TFFVTjJRanRUUVVGTkxFbEJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NUMEZCVHl4SlFVRkpMRVZCUVVVc1JVRkJSU3cyUTBGQk5rTTdVVUZEYmtZc1QwRkJUeXhMUVVGTExFTkJRVUU3UzBGRFpqdEpRVVZFTEVsQlFVa3NTVUZCU1N4WlFVRlpMRXRCUVVzc1NVRkJTU3hKUVVGSkxGbEJRVmtzUzBGQlN5eEZRVUZGTzFGQlEyaEVMRWxCUVVrc1NVRkJTU3hEUVVGRExFMUJRVTBzUzBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc2JVTkJRVzFETzFsQlEyeEZMRTlCUVU4c1MwRkJTeXhEUVVGQk8xTkJRMlk3WVVGQlRTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCVXl4RlFVRkZMRVZCUVVVc2MwSkJRWE5DTzFsQlEyNUdMRTlCUVU4c1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlFUdFRRVU4yUWp0UlFVVkVMRXRCUVVzc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFdEJRVXNzUlVGQlJTeEZRVUZGTEVWQlFVVXNkVUpCUVhWQ08xbEJRM1pGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1JVRkJSU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4RlFVRkZMRVZCUVVVc2IwTkJRVzlETzJkQ1FVTnVSeXhQUVVGUExFdEJRVXNzUTBGQlFUdGhRVU5tTzFOQlEwbzdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRVHRMUVVOa08xTkJRVTBzU1VGQlNTeEpRVUZKTEZsQlFWa3NUVUZCVFN4SlFVRkpMRWxCUVVrc1dVRkJXU3hOUVVGTkxFVkJRVVVzUlVGQlJTeFpRVUZaTzFGQlEzWkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkRha0lzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZEV2l4VFFVRlRMRU5CUTFvc1JVRkJSU3hGUVVGRkxHdERRVUZyUXp0WlFVTnVReXhQUVVGUExFdEJRVXNzUTBGQlFUdFRRVU5tTzFGQlJVUXNTMEZCU3l4TlFVRk5MRWRCUVVjc1NVRkJTU3hOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRVZCUVVVc2FVTkJRV2xETzFsQlIzQkZMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRMUFzU1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVTnFRaXhKUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlEyeENMRkZCUVZFc1IwRkJSeXhEUVVGRExFVkJRMW9zVTBGQlV5eERRVU5hTEVWQlFVVTdaMEpCUTBNc1QwRkJUeXhMUVVGTExFTkJRVUU3WVVGRFpqdFRRVU5LTzFGQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVFN1MwRkRaRHRKUVVWRUxFOUJRVThzU1VGQlNTeExRVUZMTEVsQlFVa3NRMEZCUVR0QlFVTjRRaXhEUVVGRExFTkJRVUU3UVVGRlJDeGxRVUZsTzBsQlExZ3NUMEZCVHp0RFFVTldMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIERlU3RhZ25hdGUgY29tcG9uZW50IGNsYXNzXG4gKiBAcHJlc2VydmVcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LWxpbmVzICovXG5pbXBvcnQgeyBFdmVudHMgYXMgQmFzZSB9IGZyb20gXCIuL3ByaXZhdGUvX2V2ZW50c1wiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9wcml2YXRlL191cmxcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiLi9wcml2YXRlL3V0aWxzXCI7XG4vKipcbiAqIERlU3RhZ25hdGVcbiAqIEBjbGFzc2Rlc2MgQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY2xhc3NcbiAqIEBuYW1lc3BhY2VcbiAqIEBhYnN0cmFjdFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGNsYXNzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgb2YgdGhpcyBlbGVtZW50XG4gICAgICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzOyB3b3JrcyBsaWtlIFJlYWN0IFByb3BzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocGFyZW50LCBwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGF0ZSBvZiBjb21wb25lbnQuIFdvcmtzIHNpbWlsYXIgUmVhY3QgU3RhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3N0YXRlID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBpbml0aWFsIHN0YXRlIHdhcyBzZXQgaW4gaW5pdGlhbGl6ZXJcbiAgICAgICAgICogRG8gbm90IHRocm93IGVycm9yIHdpdGggZGlyZWN0IHN0YXRlIHNldHRpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgY29tcG9uZW50IGlzIG1vdW50ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RpZE1vdW50ID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JjZXMgYSBjb21wb25lbnQgdG8gdXBkYXRlXG4gICAgICAgICAqIEZvbGxvd3MgdGhlIHNhbWUgY29tcG9uZW50IHVwZGF0aW5nIHByb2NlZHVyZSBhcyBzZXRTdGF0ZSB3aXRob3V0IG1vZGlmeWluZyBzdGF0ZVxuICAgICAgICAgKiBAcmV0dXJucyByZXR1cm5zIGVycm9yIGlmIGVycm9yIGlzIHRocm93blxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgKF9hID0gdGhpcy5jb21wb25lbnREaWRVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUodGhpcy5fZXhlY1JlbmRlcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBpZiB0aGUgc3RhdGUgY2hhbmdlZCBmcm9tIHRoZSBwcmV2aW91cyBzdGF0ZS4gQ2FuIG1lIGF0dGFjaGVkIHRvXG4gICAgICAgICAqIGBzaG91bGRDb21wb25lbnRVcGRhdGVgXG4gICAgICAgICAqIEBwYXJhbSBrZXlzIC0gbGlzdCBvZiBrZXlzIHRvIGNyYXdsLiBJZiBsZWZ0IHVuZGVmaW5lZCAoZGVmYXVsdCkgdGhlblxuICAgICAgICAgKiB1c2UgYWxsIGtleXMuIFNob3VsZCBiZSBga2V5b2YgU3RhdGVgLCBidXQgdGhlcmUgd2VyZSBzb21lIFR5cGVzY3JpcHRcbiAgICAgICAgICogdHJvdWJsZXMuXG4gICAgICAgICAqIEBwYXJhbSBtYXhEZXB0aCAtIG1heCByZWN1cnNpb24gZGVwdGggdG8gY3Jhd2wgYW4gb2JqZWN0LiBBZnRlciBtYXggZGVwdGhcbiAgICAgICAgICogaXMgcmVhY2hlZCwgdGhlIHR3byB2YWx1ZXMgYXJlIHNpbXBseSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gICAgICAgICAqIEBwYXJhbSBtYXhMZW5ndGggLSBtYXggbGVuZ3RoIG9mIGFycmF5IHRvIGNyYXdsLiBJZiBtYXggbGVudGggaXMgcmVhY2hlZCxcbiAgICAgICAgICogdHdvIGFycmF5cyB3aWxsIHNpbXBseSBiZSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gICAgICAgICAqIEByZXR1cm5zIGB2YWwxID09PSB2YWwyYFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZURpZENoYW5nZSA9IChrZXlzLCBtYXhEZXB0aCA9IDMsIG1heExlbmd0aCA9IDE1KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoa2V5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF1dGlscy5pc0VxdWFsKHRoaXMuX3N0YXRlLCB0aGlzLl9wcmV2U3RhdGUsIG1heERlcHRoLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7fSwgcHJldlN0YXRlID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHRoaXMuX3N0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgcHJldlN0YXRlW2tleV0gPSAoX2EgPSB0aGlzLl9wcmV2U3RhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICF1dGlscy5pc0VxdWFsKHN0YXRlLCBwcmV2U3RhdGUsIG1heERlcHRoLCBtYXhMZW5ndGgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBzdGF0ZVxuICAgICAgICAgKiBAcGFyYW0gb2JqIC0gc3RhdGUgdG8gc2V0XG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSAob2JqKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuY29tcG9uZW50V2lsbFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldlN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fc3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX3N0YXRlLCBvYmopO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVkQ29udGVudCA9IHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9leGVjUmVuZGVyKClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHJlbmRlcmVkQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcsIG1heC1sZW4gKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgbW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgZWxlbWVudCB0byBtb3VudCB3aXRoOyBvcHRpb25hbFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnRDb21wb25lbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxNb3VudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzKHRoaXMuX3BhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkTW91bnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuY29tcG9uZW50RGlkTW91bnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmZvckVhY2goKGNoaWxkKSA9PiBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBtb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSByZXN1bHQgb2YgYXBwZW5kIGNoaWxkIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdW50ID0gdGhpcy5tb3VudENvbXBvbmVudDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzKHRoaXMuX3BhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbm1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5tb3VudCA9IHRoaXMudW5tb3VudENvbXBvbmVudDtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuLCBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGNoaWxkcmVuIGZyb20gdGhpcy5fcGFyZW50XG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fcGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRXhlY3V0ZXMgbmV3IHJlbmRlclxuICAgICAgICAgKiBAcmV0dXJucyByZW5kZXJlZCBjb250ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9leGVjUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyB0aGUgY29tcG9uZW50XG4gICAgICAgICAqIEBwYXJhbSByZW5kZXJlZENvbnRlbnQgLSByZW5kZXJlZCBjb250ZW50IGZyb20gZXhlY3V0aW5nIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fdXBkYXRlID0gKHJlbmRlcmVkQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRDb250ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuX3BhcmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuX3BhcmVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFwcGVuZENoaWxkKHJlbmRlcmVkQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9jID0gdGhpcy5jb21wb25lbnREaWRVcGRhdGUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2goZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoU3RyaW5nKGVycikpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCBpcyBudWxsLCBleHBlY3RlZCBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0U3RhdGUgZ2V0dGVyIGFzIHRoaXMuc3RhdGUgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBjb21wb25lbnQgc3RhdGVcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBjb21wb25lbnQgc3RhdGVcbiAgICAgKiBXQVJOOiBkbyBub3QgdXNlIHRoaXMgbWV0aG9kIHRvIG11dGF0ZSB0aGUgc3RhdGUgZGlyZWN0bHlcbiAgICAgKiBAcGFyYW0gb2JqIC0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgc2V0IHN0YXRlKG9iaikge1xuICAgICAgICBpZiAodGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMS4gU2VlICR7dXJsfS5gKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG9iajtcbiAgICAgICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGdldFByb3BzIGdldHRlciBhcyB0aGlzLnByb3BzIGl0c2VsZiBpcyBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgcHJvcHNcbiAgICAgKi9cbiAgICBnZXQgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHBhcmVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gcGFyZW50IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0IHBhcmVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGFyZW50IGVsZW1lbnQgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyBwYXJlbnRcbiAgICAgKi9cbiAgICBnZXQgcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgZGlkTW91bnQgdmFsdWUgcHVibGljbHlcbiAgICAgKiBAcmV0dXJucyBpZiBtb3VudGVkXG4gICAgICovXG4gICAgZ2V0IGRpZE1vdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlkTW91bnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByZXZpb3VzIHN0YXRlLiBVbmRlZmluZWQgaWYgbm8gcHJldmlvdXMgc3RhdGUgZXhpc3RzXG4gICAgICogQHJldHVybnMgcHJldmlvdXMgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgcHJldlN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJldlN0YXRlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk52YlhCdmJtVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096dEhRVlZITzBGQlEwZ3NPRUpCUVRoQ08wRkJSVGxDTEU5QlFVOHNSVUZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkZhRVFzVDBGQlR5eEhRVUZITEUxQlFVMHNaMEpCUVdkQ0xFTkJRVUU3UVVGRGFFTXNUMEZCVHl4TFFVRkxMRTFCUVUwc2FVSkJRV2xDTEVOQlFVRTdRVUZ6UW01RE96czdPenM3UjBGTlJ6dEJRVU5JTEUxQlFVMHNUMEZCWjBJc1UwRkhjRUlzVTBGQlVTeEpRVUZKTzBsQk5FSldPenM3TzA5QlNVYzdTVUZEU0N4WlFVRnZRaXhOUVVFeVFpeEZRVUZaTEV0QlFXRTdVVUZEY0VVc1MwRkJTeXhGUVVGRkxFTkJRVUU3VVVGRVowUXNWVUZCU3l4SFFVRk1MRXRCUVVzc1EwRkJVVHRSUVM5Q2VFVTdPMWRCUlVjN1VVRkRTeXhYUVVGTkxFZEJRVlVzUlVGQlZ5eERRVUZCTzFGQlJXNURPenM3VjBGSFJ6dFJRVU5MTEhkQ1FVRnRRaXhIUVVGSExFdEJRVXNzUTBGQlFUdFJRVTl1UXpzN1YwRkZSenRSUVVOTExHTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVRTdVVUZuUjNwQ096czdPMWRCU1VjN1VVRkRZU3huUWtGQlZ5eEhRVUZITEVkQlFXbENMRVZCUVVVN08xbEJRemRETEVsQlFVazdaMEpCUTBFc1RVRkJRU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMQ3REUVVGMlFpeEpRVUZKTEVWQlFYVkNPMmRDUVVVelFpeEpRVUZKTEVsQlFVa3NRMEZCUXl4UFFVRlBMRXRCUVVzc1UwRkJVeXhGUVVGRk8yOUNRVU0xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExITkNRVUZ6UWl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGQk8ybENRVU5vUkR0blFrRkZSQ3hKUVVGSkxFTkJRVU1zZFVKQlFYVkNMRU5CUTNoQ0xHdENRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVZVc2IwSkJRM0JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUTJwQ0xFTkJRVUU3WjBKQlJVUXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTXNRMEZCUVR0aFFVTnVRenRaUVVGRExFOUJRVThzUjBGQldTeEZRVUZGTERCQ1FVRXdRaXhEUVVGRE8yZENRVU01UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEYUVNN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPenM3T3pzN096czdWMEZYUnp0UlFVTmhMRzFDUVVGakxFZEJRVWNzUTBGRE4wSXNTVUZCYVVJc1JVRkRha0lzVVVGQlVTeEhRVUZITEVOQlFVTXNSVUZEV2l4VFFVRlRMRWRCUVVjc1JVRkJSU3hGUVVOUUxFVkJRVVU3TzFsQlExUXNTVUZCU1N4SlFVRkpMRXRCUVVzc1UwRkJVeXhGUVVGRk8yZENRVU53UWl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGRGFrSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkRXQ3hKUVVGSkxFTkJRVU1zVlVGQlZTeEZRVU5tTEZGQlFWRXNSVUZEVWl4VFFVRlRMRU5CUTFvc1EwRkJRVHRoUVVOS08xbEJSVVFzVFVGQlRTeExRVUZMTEVkQlFUWkNMRVZCUVVVc1JVRkRkRU1zVTBGQlV5eEhRVUUyUWl4RlFVRkZMRU5CUVVFN1dVRkZOVU1zUzBGQlN5eE5RVUZOTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVN1owSkJRM0JDTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFXdENMRU5CUVVNc1EwRkJRVHRuUWtGRE5VTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTERCRFFVRkhMRWRCUVd0Q0xFTkJRVU1zUTBGQlFUdGhRVU42UkR0WlFVVkVMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4VFFVRlRMRVZCUVVVc1VVRkJVU3hGUVVGRkxGTkJRVk1zUTBGQlF5eERRVUZCTzFGQlEyaEZMRU5CUVVNc1EwRkJRVHRSUVVWRU96czdPMWRCU1VjN1VVRkRZU3hoUVVGUkxFZEJRVWNzUTBGQlF5eEhRVUZ0UWl4RlFVRm5RaXhGUVVGRk96dFpRVU0zUkN4SlFVRkpPMmRDUVVOQkxFMUJRVUVzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXdyUTBGQmVFSXNTVUZCU1N4RlFVRjNRanRuUWtGRk5VSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZETlVJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlFUdHBRa0ZEYUVRN1owSkJSVVFzU1VGQlNTeERRVUZETEZWQlFWVXNjVUpCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZCTzJkQ1FVVnNReXhKUVVGSkxFTkJRVU1zZFVKQlFYVkNMRU5CUTNoQ0xHdENRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVZVc2IwSkJRM0JDTEVsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUTJwQ0xFTkJRVUU3WjBKQlJVUXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkJPMmRDUVVVdlFpeE5RVUZOTEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVTdiMEpCUTJoRUxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZPMjlDUVVOd1FpeERRVUZETEVOQlFVTXNVMEZCVXl4RFFVRkJPMmRDUVVWbUxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVFN1lVRkRhRU03V1VGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlN3d1FrRkJNRUlzUTBGQlF6dG5Ra0ZEY2tNc1QwRkJUeXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJPMkZCUTJoRE8xRkJRMHdzUTBGQlF5eERRVUZCTzFGQlJVUXNaMFZCUVdkRk8xRkJRMmhGT3pzN08xZEJTVWM3VVVGRFlTeHRRa0ZCWXl4SFFVRkhMRU5CUXpkQ0xFMUJRVzlDTEVWQlExSXNSVUZCUlRzN1dVRkRaQ3hKUVVGSk8yZENRVU5CTEVsQlFVa3NUVUZCVFN4TFFVRkxMRk5CUVZNc1JVRkJSVHR2UWtGRGRFSXNTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVUU3YVVKQlEzWkNPMmRDUVVWRUxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTMEZCU3l4VFFVRlRMRVZCUVVVN2IwSkJRelZDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2MwSkJRWE5DTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVFN2FVSkJRMmhFTzJkQ1FVVkVMRTFCUVUwc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUVR0blFrRkZMMElzU1VGQlNTeERRVUZETEcxQ1FVRnRRaXhIUVVGSExFbEJRVWtzUTBGQlFUdG5Ra0ZGTDBJc1RVRkJRU3hKUVVGSkxFTkJRVU1zYTBKQlFXdENMQ3REUVVGMlFpeEpRVUZKTEVWQlFYVkNPMmRDUVVVelFpeEpRVUZKTEZOQlFWTXNTMEZCU3l4SlFVRkpMRVZCUVVVN2IwSkJRM0JDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2MwSkJRWE5DTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVFN2FVSkJRMmhFTzJkQ1FVVkVMRWxCUVVrc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVUU3WjBKQlJYSkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZCTzJkQ1FVTnlRaXhOUVVGQkxFbEJRVWtzUTBGQlF5eHBRa0ZCYVVJc0swTkJRWFJDTEVsQlFVa3NSVUZCYzBJN1owSkJSVEZDTEVsQlFVa3NVMEZCVXl4WlFVRlpMRXRCUVVzc1JVRkJSVHR2UWtGRE5VSXNUVUZCVFN4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExITkNRVUZ6UWl4RlFVRkZMRU5CUVVNN2IwSkJSV3hFTEZOQlFYVkNMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUzBGQlN5eEZRVUZGTEVWQlFVVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1YwRkJWeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVRTdiMEpCUlhoRkxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVUU3YVVKQlF6VkRPMmRDUVVWRUxFOUJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVUU3WVVGRE4wTTdXVUZCUXl4UFFVRlBMRWRCUVZrc1JVRkJSU3d3UWtGQk1FSXNRMEZCUXp0blFrRkRPVU1zVDBGQlR5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQk8yRkJRMmhETzFGQlEwd3NRMEZCUXl4RFFVRkJPMUZCUlVRN096dFhRVWRITzFGQlEyRXNWVUZCU3l4SFFVRkhMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVUU3VVVGRk0wTTdPenRYUVVkSE8xRkJRMkVzY1VKQlFXZENMRWRCUVVjc1IwRkJVeXhGUVVGRk96dFpRVU14UXl4SlFVRkpPMmRDUVVOQkxFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTMEZCU3l4VFFVRlRMRVZCUVVVN2IwSkJRelZDTEU5QlFVMDdhVUpCUTFRN1owSkJSVVFzVFVGQlFTeEpRVUZKTEVOQlFVTXNiMEpCUVc5Q0xDdERRVUY2UWl4SlFVRkpMRVZCUVhsQ08yZENRVVUzUWl4SlFVRkpMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGQk8yZENRVVYyUXl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVUU3WjBKQlEzUkNMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZCTzJGQlEzcENPMWxCUVVNc1QwRkJUeXhIUVVGWkxFVkJRVVVzTUVKQlFUQkNMRU5CUVVNN1owSkJRemxETEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGVrSTdVVUZGVEN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3TzFkQlIwYzdVVUZEWVN4WlFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExHZENRVUZuUWl4RFFVRkJPMUZCUXk5RExDdEVRVUVyUkR0UlFVVXZSRHM3TzFkQlIwYzdVVUZEU3l4dlFrRkJaU3hIUVVGSExFZEJRVk1zUlVGQlJUdFpRVU5xUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFdEJRVXNzVTBGQlV5eEZRVUZGTzJkQ1FVTTFRaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhOQ1FVRnpRaXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZCTzJGQlEyaEVPMWxCUlVRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0blFrRkROVUlzU1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSVHR2UWtGRGVFSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRVHRwUWtGRGJrUTdZVUZEU2p0UlFVTk1MRU5CUVVNc1EwRkJRVHRSUVVWRU96czdWMEZIUnp0UlFVTkxMR2RDUVVGWExFZEJRVWNzUjBGQlpTeEZRVUZGTzFsQlEyNURMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlFUdFpRVVYwUWl4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlFUdFJRVU40UWl4RFFVRkRMRU5CUVVFN1VVRkhSRHM3T3p0WFFVbEhPMUZCUTBzc1dVRkJUeXhIUVVGSExFTkJRVU1zWlVGQk5FSXNSVUZCVVN4RlFVRkZPenRaUVVOeVJDeEpRVUZKTEdWQlFXVXNXVUZCV1N4TFFVRkxMRVZCUVVVN1owSkJRMnhETEV0QlFVc3NUVUZCVFN4UFFVRlBMRWxCUVVrc1pVRkJaU3hGUVVGRk8yOUNRVU51UXl4TlFVRkJMRWxCUVVrc1EwRkJReXhQUVVGUExEQkRRVUZGTEZkQlFWY3NRMEZCUXl4UFFVRlBMRVZCUVVNN2FVSkJRM0pETzJGQlEwbzdhVUpCUVUwc1NVRkJTU3hsUVVGbExFVkJRVVU3WjBKQlEzaENMRTFCUVVFc1NVRkJTU3hEUVVGRExFOUJRVThzTUVOQlFVVXNWMEZCVnl4RFFVRkRMR1ZCUVdVc1JVRkJRenRoUVVNM1F6dFpRVVZFTEVsQlFVa3NaVUZCWlN4RlFVRkZPMmRDUVVOcVFpeE5RVUZCTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzSzBOQlFYWkNMRWxCUVVrc1JVRkJkVUk3WVVGRE9VSTdVVUZEVEN4RFFVRkRMRU5CUVVFN1VVRkZUeXhwUWtGQldTeEhRVUZITEVOQlFVTXNSMEZCV1N4RlFVRlRMRVZCUVVVN1dVRkRNME1zU1VGQlNTeEhRVUZITEZsQlFWa3NTMEZCU3l4RlFVRkZPMmRDUVVOMFFpeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdaMEpCUlROQ0xFOUJRVThzUjBGQldTeERRVUZCTzJGQlEzUkNPMWxCUlVRc1RVRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVUU3V1VGRmNFTXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkJPMWxCUlRkQ0xFOUJRVThzUzBGQlN5eERRVUZCTzFGQlEyaENMRU5CUVVNc1EwRkJRVHRSUVRGVVJ5eEpRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRkpMRVZCUVVVN1dVRkRha0lzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4dFJFRkJiVVFzUTBGQlF5eERRVUZCTzFOQlEzWkZPMUZCUlVRc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eE5RVUZOTEVOQlFVRTdTVUZEZWtJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1VVRkJVVHRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUVR0SlFVTnlRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBnc1NVRkJZeXhMUVVGTE8xRkJRMllzVDBGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkJPMGxCUTNSQ0xFTkJRVU03U1VGRlJEczdPenRQUVVsSE8wbEJRMGdzU1VGQll5eExRVUZMTEVOQlFVVXNSMEZCVlR0UlFVTXpRaXhKUVVGSkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc1JVRkJSVHRaUVVNeFFpeEpRVUZKTEVOQlFVTXNhVUpCUVdsQ0xFTkJRMnhDTEVsQlFVa3NTMEZCU3l4RFFVRkRMSE5DUVVGelFpeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVTXhReXhEUVVGQk8xbEJRMFFzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRUUVVOeVFqdGhRVUZOTzFsQlEwZ3NTVUZCU1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVUU3V1VGRGFrSXNTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEhRVUZITEVsQlFVa3NRMEZCUVR0VFFVTnNRenRKUVVOTUxFTkJRVU03U1VGRlJEczdPMDlCUjBjN1NVRkRTQ3hKUVVGWExGRkJRVkU3VVVGRFppeFBRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVFN1NVRkRja0lzUTBGQlF6dEpRVVZFT3pzN08wOUJTVWM3U1VGRFNDeEpRVUZYTEUxQlFVMHNRMEZCUlN4UFFVRm5RenRSUVVNdlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRVHRKUVVNeFFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQlZ5eE5RVUZOTzFGQlEySXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGQk8wbEJRM1pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZYTEZGQlFWRTdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVUU3U1VGRGVrSXNRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5JTEVsQlFWY3NVMEZCVXp0UlFVTm9RaXhQUVVGUExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVRTdTVUZETVVJc1EwRkJRenREUVRaUFNqdEJRVVZFTEdWQlFXVXNVMEZCVXl4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuIH0gZnJvbSBcIi4vcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzXCI7XG5leHBvcnQgY29uc3QgZnJhZ21lbnQgPSAoXywgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGJpbmRDaGlsZHJlbihkb2N1bWVudEZyYWdtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGRvY3VtZW50RnJhZ21lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2labkpoWjIxbGJuUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12Wm5KaFoyMWxiblF1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN08wZEJVVWM3UVVGRFNDd3lRa0ZCTWtJN1FVRkRNMElzYVVOQlFXbERPMEZCUldwRExFOUJRVThzUlVGRlNDeFpRVUZaTEVWQlEyWXNUVUZCVFN3clFrRkJLMElzUTBGQlFUdEJRVVYwUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hSUVVGUkxFZEJRVWNzUTBGRGNFSXNRMEZCVlN4RlFVTldMRWRCUVVjc1VVRkJNa0lzUlVGRFpDeEZRVUZGTzBsQlEyeENMRTFCUVUwc1owSkJRV2RDTEVkQlFVY3NVVUZCVVN4RFFVRkRMSE5DUVVGelFpeEZRVUZGTEVOQlFVRTdTVUZGTVVRc1dVRkJXU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGQk8wbEJSWGhETEU5QlFVOHNaMEpCUVdkQ0xFTkJRVUU3UVVGRE0wSXNRMEZCUXl4RFFVRkJPMEZCUlVRc1pVRkJaU3hSUVVGUkxFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBEZVN0YWduYXRlIG1haW4gZGVzdGFnbmF0ZSBjbGFzc1xuICogQGZpbGUgbWFpbiBmaWxlIGZvciBkZXN0YWduYXRlXG4gKiBAcHJlc2VydmVcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0ICogYXMgX0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCAqIGFzIF9DcmVhdGVFbGVtZW50TlMgZnJvbSBcIi4vY3JlYXRlRWxlbWVudE5TXCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlUmVmIGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuaW1wb3J0ICogYXMgX0ZyYWdtZW50IGZyb20gXCIuL2ZyYWdtZW50XCI7XG5leHBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcbmV4cG9ydCB7IGNyZWF0ZVJlZiB9IGZyb20gXCIuL2NyZWF0ZVJlZlwiO1xuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnROUyB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnROU1wiO1xuZXhwb3J0IHsgZnJhZ21lbnQgfSBmcm9tIFwiLi9mcmFnbWVudFwiO1xuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCB2YXIgRGVTdGFnbmF0ZTtcbihmdW5jdGlvbiAoRGVTdGFnbmF0ZSkge1xuICAgIERlU3RhZ25hdGUuQ29tcG9uZW50ID0gX0NvbXBvbmVudC5Db21wb25lbnQ7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVSZWYgPSBfQ3JlYXRlUmVmLmNyZWF0ZVJlZjtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnQgPSBfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlRWxlbWVudE5TID0gX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlM7XG4gICAgRGVTdGFnbmF0ZS5mcmFnbWVudCA9IF9GcmFnbWVudC5mcmFnbWVudDtcbn0pKERlU3RhZ25hdGUgfHwgKERlU3RhZ25hdGUgPSB7fSkpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuZXhwb3J0IGRlZmF1bHQgRGVTdGFnbmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWFXNWtaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdPenM3T3pzN096czdSMEZWUnp0QlFVTklMREpDUVVFeVFqdEJRVU16UWl4cFEwRkJhVU03UVVGRmFrTXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMR05CUVdNc1RVRkJUU3hwUWtGQmFVSXNRMEZCUVR0QlFVTnFSQ3hQUVVGUExFdEJRVXNzWjBKQlFXZENMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEY2tRc1QwRkJUeXhMUVVGTExGVkJRVlVzVFVGQlRTeGhRVUZoTEVOQlFVRTdRVUZEZWtNc1QwRkJUeXhMUVVGTExGTkJRVk1zVFVGQlRTeFpRVUZaTEVOQlFVRTdRVUZGZGtNc1QwRkJUeXhGUVVGRExGTkJRVk1zUlVGQlF5eE5RVUZOTEdGQlFXRXNRMEZCUVR0QlFVTnlReXhQUVVGUExFVkJRVTBzVTBGQlV5eEZRVUZETEUxQlFVMHNZVUZCWVN4RFFVRkJPMEZCUXpGRExFOUJRVThzUlVGQlF5eGhRVUZoTEVWQlFVTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU0zUXl4UFFVRlBMRVZCUVVNc1pVRkJaU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkRha1FzVDBGQlR5eEZRVUZETEZGQlFWRXNSVUZCUXl4TlFVRk5MRmxCUVZrc1EwRkJRVHRCUVVWdVF5eHZRa0ZCYjBJN1FVRkRjRUlzVFVGQlRTeExRVUZYTEZWQlFWVXNRMEZQTVVJN1FVRlFSQ3hYUVVGcFFpeFZRVUZWTzBsQlExUXNiMEpCUVZNc1IwRkJTU3hWUVVGVkxGVkJRV1FzUTBGQll6dEpRVU4yUWl4dlFrRkJVeXhIUVVGSkxGVkJRVlVzVlVGQlpDeERRVUZqTzBsQlJYWkNMSGRDUVVGaExFZEJRVWtzWTBGQll5eGpRVUZzUWl4RFFVRnJRanRKUVVNdlFpd3dRa0ZCWlN4SFFVRkpMR2RDUVVGblFpeG5Ra0ZCY0VJc1EwRkJiMEk3U1VGRGJrTXNiVUpCUVZFc1IwRkJTU3hUUVVGVExGTkJRV0lzUTBGQllUdEJRVU4yUXl4RFFVRkRMRVZCVUdkQ0xGVkJRVlVzUzBGQlZpeFZRVUZWTEZGQlR6RkNPMEZCUTBRc2JVSkJRVzFDTzBGQlJXNUNMR1ZCUVdVc1ZVRkJWU3hEUVVGQkluMD0iXSwibmFtZXMiOlsiX2NyZWF0ZUVsZW1lbnQiLCJfY3JlYXRlRWxlbWVudE5TIiwiX2NyZWF0ZVJlZiIsIkJhc2VDb21wb25lbnQiLCJCYXNlIiwiX0NvbXBvbmVudC5Db21wb25lbnQiLCJfQ3JlYXRlUmVmLmNyZWF0ZVJlZiIsIl9DcmVhdGVFbGVtZW50LmNyZWF0ZUVsZW1lbnQiLCJfQ3JlYXRlRWxlbWVudE5TLmNyZWF0ZUVsZW1lbnROUyIsIl9GcmFnbWVudC5mcmFnbWVudCIsIkRlU3RhZ25hdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxHQUFHLEdBQUcsd0RBQVo7O0FDcUZQOzs7Ozs7O0FBT0c7O0FBQ0ksSUFBTSxTQUFTLEdBQUcsU0FBWixTQUFZLENBQ3JCLE9BRHFCLEVBRXJCLEtBRnFCLEVBSWY7QUFBQSxNQUROLEVBQ00sdUVBREQsS0FDQzs7QUFDTixNQUFJLEtBQUosRUFBVztBQUNQLHVDQUF5QixNQUFNLENBQUMsT0FBUCxDQUFlLEtBQWYsQ0FBekIscUNBQWdEO0FBQUE7QUFBQSxVQUFwQyxHQUFvQztBQUFBLFVBQS9CLEdBQStCOztBQUM1QyxVQUFJLE9BQU8sR0FBUCxLQUFlLFFBQWYsSUFBMkIsT0FBTyxHQUFQLEtBQWUsUUFBOUMsRUFBd0Q7QUFDcEQsWUFBSSxHQUFHLEtBQUssV0FBWixFQUF5QjtBQUNyQixVQUFBLE9BQU8sQ0FBQyxTQUFSLEdBQW9CLEdBQUcsQ0FBQyxRQUFKLEVBQXBCO0FBQ0gsU0FGRCxNQUVPLElBQUksRUFBSixFQUFRO0FBQ1gsVUFBQSxPQUFPLENBQUMsY0FBUixDQUF1QixJ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
