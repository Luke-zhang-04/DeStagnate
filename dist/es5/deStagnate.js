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

    /**
     * Creates a reference for a nested component
     * @returns empty ref object
     */
    var createRef = function createRef() {
      return {
        current: null
      };
    };

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

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
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

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

    /**
     * DeStagnate
     * A simple, ReactJS inspired library to create dynamic components within static sites easier
     * @copyright Copyright (C) 2020 Luke Zhang
     * @author Luke Zhang luke-zhang-04.github.io
     * @license MIT
     * @version 1.8.0
     * @file share functions and types for createElement and it's variants
     */
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
    var unpackChildren = function unpackChildren(children) {
      var newChildren = [];

      var _iterator = _createForOfIteratorHelper(children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          if (_typeof(child) === "object" && child instanceof Array) {
            newChildren.push.apply(newChildren, _toConsumableArray(unpackChildren(child)));
          } else {
            newChildren.push(child);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return newChildren;
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
          var _iterator2 = _createForOfIteratorHelper(children),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;
              bindChildren(element, child);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else if (typeof children === "string" || typeof children === "number") {
          element.innerText = children.toString();
        } else if (children instanceof DeStagnate) {
          if (!children.didMount && element instanceof window.HTMLElement) {
            children.mount(element);
            return;
          } else if (!(element instanceof window.HTMLElement)) {
            throw new Error("ERROR: code 8. See ".concat(url));
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

    function createElement(tagNameOrComponent, props, children) {
      var _children = children;

      for (var _len = arguments.length, childrenArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        childrenArgs[_key - 3] = arguments[_key];
      }

      if (children && childrenArgs) {
        if (children instanceof Array) {
          _children = [].concat(_toConsumableArray(unpackChildren(children)), _toConsumableArray(unpackChildren(childrenArgs)));
        } else {
          _children = [children].concat(_toConsumableArray(unpackChildren(childrenArgs)));
        }
      }

      if (typeof tagNameOrComponent === "string") {
        var element = document.createElement(tagNameOrComponent);

        bindProps(element, props);

        bindChildren(element, _children);

        return element;
      } else if (typeof tagNameOrComponent === "function") {
        return tagNameOrComponent(props, _children);
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

    var createElementNS = function createElementNS(namespaceURI, tagName, props, children) {
      var element = document.createElementNS(namespaceURI, tagName);

      bindProps(element, props, true);

      var _children = children;

      for (var _len = arguments.length, childrenRest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        childrenRest[_key - 4] = arguments[_key];
      }

      if (children && childrenRest) {
        if (_typeof(children) === "object" && children instanceof Array) {
          _children = [].concat(_toConsumableArray(unpackChildren(children)), _toConsumableArray(unpackChildren(childrenRest)));
        } else {
          _children = [children].concat(_toConsumableArray(unpackChildren(childrenRest)));
        }
      }

      bindChildren(element, _children);

      return element;
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
          for (var _i = 0, _Object$entries = Object.entries(_this._events()); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                event = _Object$entries$_i[0],
                callback = _Object$entries$_i[1];

            if (callback !== undefined) {
              eventListener(event, callback);
            }
          }
        };

        _this._events = function () {
          return {
            focus: _this.onFocus,
            blur: _this.onBlur,
            focusin: _this.onFocusIn,
            focusout: _this.onFocusOut,
            animationstart: _this.onAnimationStart,
            animationcancel: _this.onAnimationCancel,
            animationend: _this.onAnimationEnd,
            animationiteration: _this.onAnimationIteration,
            transitionstart: _this.onTransitionStart,
            transitioncancel: _this.onTransitionCancel,
            transitionend: _this.onTransitionEnd,
            transitionrun: _this.onTransitionRun,
            auxclick: _this.onAuxClick,
            click: _this.onClick,
            dblclick: _this.onDblClick,
            mousedown: _this.onMouseDown,
            mouseenter: _this.onMouseEnter,
            mouseleave: _this.onMouseLeave,
            mousemove: _this.onMouseMove,
            mouseover: _this.onMouseOver,
            mouseout: _this.onMouseOut,
            mouseup: _this.onMouseUp
          };
        };

        return _this;
      }

      return Events;
    }(Preset);

    /**
     * DeStagnate
     * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
     * @class
     * @namespace
     * @abstract
     */

    var DeStagnate = function (_Base) {
      _inherits(DeStagnate, _Base);

      var _super = _createSuper(DeStagnate);

      /**
       * Construct class component
       * @public
       * @constructor
       * @param parent - parent of this element
       * @param props - element properties; works like React Props
       * @param shouldSkipParentCheck - warn or throw error if parent element already has children
       */
      function DeStagnate(parent, props) {
        var _this;

        var shouldSkipParentCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, DeStagnate);

        _this = _super.call(this);
        _this.props = props;
        /**
         * If strict mode should be used. True by default
         * @private
         * @instance
         */

        _this._strict = true;
        /**
         * State of component. Works similar React State
         * @type {undefined | Object.<string, unknown>}
         * @private
         * @instance
         */

        _this._state = {};
        /**
         * If initial state was set in initializer
         * Do not throw error with direct state setting
         * @private
         * @instance
         */

        _this._didSetInitialState = false;
        /**
         * If component is mounted
         * @private
         * @instance
         */

        _this._didMount = false;
        /**
         * What to call before component update (state mutation)
         * @public
         * @instance
         * @param {Props} prevProps - previous props
         * @param prevState - previous state
         * @returns void
         */

        _this.getSnapshotBeforeUpdate = function (prevProps, prevState) {
          return [prevProps, prevState];
        };
        /**
         * Turn on strict mode
         * @public
         * @instance
         * @returns void
         */


        _this.useStrict = function () {
          _this._strict = true;
        };
        /**
         * Turn off strict mode
         * @public
         * @instance
         * @returns void
         */


        _this.disableStrict = function () {
          _this._strict = false;
        };
        /**
         * Forces a component to update
         * Follows the same component updating procedure as setState without modifying state
         * @public
         * @instance
         * @readonly
         * @returns returns error if error is thrown
         */


        _this.forceUpdate = function () {
          var _a;

          try {
            (_a = _this.componentDidUpdate) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

            if (_this._parent === undefined) {
              throw new Error("ERROR: code 3. See ".concat(url, "."));
            }

            _this.getSnapshotBeforeUpdate(Object.assign({}, _this.props), Object.assign({}, _this.state));

            _this._update(_this._execRender());
          } catch (err) {
            _this.componentDidCatch(err);

            return err;
          }
        };
        /**
         * Sets state
         * @public
         * @instance
         * @readonly
         * @param obj - state to set
         * @returns void
         */


        _this.setState = function (obj) {
          var _a;

          try {
            (_a = _this.componentWillUpdate) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

            if (_this._parent === undefined) {
              throw new Error("ERROR: code 3. See ".concat(url, "."));
            }

            if (_this._strict) {
              _this._checkKeys(obj);
            }

            _this.getSnapshotBeforeUpdate(Object.assign({}, _this.props), Object.assign({}, _this.state));

            Object.assign(_this._state, obj);
            var renderedContent = _this.shouldComponentUpdate() ? _this._execRender() : undefined;

            _this._update(renderedContent);
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
              throw new Error("ERROR: code 3. See ".concat(url, "."));
            }

            var component = _this.render();

            _this._didSetInitialState = true;
            (_a = _this.componentWillMount) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

            if (component === null) {
              throw new Error("ERROR: code 5. See ".concat(url, "."));
            }

            _this.bindEventListeners(_this._parent);

            _this._didMount = true;
            (_b = _this.componentDidMount) === null || _b === void 0 ? void 0 : _b.call(_assertThisInitialized(_this));

            if (_typeof(component) === "object" && component instanceof Array) {
              return component.map(function (element) {
                return _this._parent.appendChild(element);
              });
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
         * @returns - result of append child to parent element
         */


        _this.mount = _this.mountComponent;
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns - void
         */

        _this.unmountComponent = function () {
          var _a;

          try {
            if (_this._parent === undefined) {
              _this.componentDidWarn("WARN: code 4. See ".concat(url, "."));

              return;
            }

            (_a = _this.componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));

            _this.unbindEventListeners(_this._parent);

            _this._removeChildren();

            _this._didMount = false;
          } catch (err) {
            _this.componentDidCatch(err);
          }
        };
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns - void
         */


        _this.unmount = _this.unmountComponent;
        /**
         * Removes children from this._parent
         * @private
         * @instance
         * @return void
         */

        _this._removeChildren = function () {
          if (_this._parent === undefined) {
            throw new Error("ERROR: code 3. See ".concat(url, "."));
          }

          while (_this._parent.firstChild) {
            if (_this._parent.lastChild) {
              _this._parent.removeChild(_this._parent.lastChild);
            }
          }
        };
        /**
         * Executes new render
         * @private
         * @instance
         * @returns rendered content
         */


        _this._execRender = function () {
          _this._removeChildren();

          return _this.render();
        };
        /**
         * Checks new state assignment to make sure no new keys are assigned
         * @private
         * @instance
         * @param obj - new state
         * @returns void
         */


        _this._checkKeys = function (obj) {
          for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];

            if (!Object.keys(_this.state).includes(key)) {
              _this.componentDidWarn("WARN: code 6. See ".concat(url, ". Params: ").concat(key, ", ").concat(JSON.stringify(Object.keys(_this.state)), "."));
            }
          }
        };
        /**
         * Updates the component
         * @private
         * @instance
         * @param renderedContent - rendered content from executing the render function
         * @returns void
         */


        _this._update = function (renderedContent) {
          var _a;

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

          if (renderedContent) {
            (_a = _this.componentDidUpdate) === null || _a === void 0 ? void 0 : _a.call(_assertThisInitialized(_this));
          }
        };

        if (parent && parent.childElementCount > 0 && !shouldSkipParentCheck && _this._strict) {
          _this.componentDidCatch(new Error("ERROR: code 1. See ".concat(url, ". Params: ").concat(parent.tagName.toLowerCase())));
        }

        _this._parent = parent;
        return _this;
      }
      /**
       * Public getState getter as this.state itself is protected
       * @public
       * @returns component state
       */


      _createClass(DeStagnate, [{
        key: "getState",
        get: function get() {
          return this.state;
        }
        /**
         * Get component state
         * @protected
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
         * @protected
         * @param obj - state to set
         */
        ,
        set: function set(obj) {
          if (this._didSetInitialState && this._strict) {
            this.componentDidCatch(new Error("ERROR: code 2. See ".concat(url, ".")));
            this.componentDidWarn("ERROR: code 2. See ".concat(url, "."));
            this.setState(obj);
          } else {
            this._state = obj;
            this._didSetInitialState = true;
          }
        }
        /**
         * Public getProps getter as this.props itself is protected
         * @public
         * @returns component props
         */

      }, {
        key: "getProps",
        get: function get() {
          return this.props;
        }
        /**
         * Set the parent of this component
         * @public
         * @param element - parent element
         * @returns void
         */

      }, {
        key: "parent",
        get:
        /**
         * Get the parent element of this component
         * @public
         * @returns parent
         */
        function get() {
          return this._parent;
        }
        /**
         * Get didMount value publicly
         * @public
         * @returns if mounted
         */
        ,
        set: function set(element) {
          if (element && element.childElementCount > 0 && this._strict) {
            this.componentDidCatch(new Error("ERROR: code 1. See ".concat(url, ". Params: ").concat(element.tagName.toLowerCase())));
          }

          this._parent = element;
        }
      }, {
        key: "didMount",
        get: function get() {
          return this._didMount;
        }
      }]);

      return DeStagnate;
    }(Events);
    (function (_DeStagnate) {
      _inherits(Component, _DeStagnate);

      var _super2 = _createSuper(Component);

      function Component() {
        _classCallCheck(this, Component);

        return _super2.apply(this, arguments);
      }

      return Component;
    }(DeStagnate));

    /**
     * DeStagnate
     * A simple, ReactJS inspired library to create dynamic components within static sites easier
     * @copyright Copyright (C) 2020 Luke Zhang
     * @author Luke Zhang luke-zhang-04.github.io
     * @license MIT
     * @version 1.8.0
     * @exports DeStagnate main destagnate class
     * @file main file for destagnate
     * @preserve
     */
    /**
     * Creates a child element to deStagnate
     * @param tagName - name of HTML element
     * @param props - element properties, such as class, innerHTML, id, style, etc
     * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
     * @returns html element
     */

    var createElement$1 = createElement;
    /**
     * Creates an HTML Element
     * @param tagName - name of HTML element
     * @param props - element properties, such as class, innerHTML, id, style, etc
     * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
     * @param childrenRest - rest parameter of children
     * @returns html element
     */

    var createElementNS$1 = createElementNS;
    /**
     * Creates a reference for a nested component
     * @returns empty ref object
     */

    var createRef$1 = createRef;
    /**
     * DeStagnate
     * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
     * @class
     * @namespace
     * @abstract
     */

    var Component = DeStagnate;

    exports.Component = Component;
    exports.createElement = createElement$1;
    exports.createElementNS = createElementNS$1;
    exports.createRef = createRef$1;
    exports.default = DeStagnate;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
