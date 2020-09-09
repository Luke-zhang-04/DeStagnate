/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @file DeStagnate development bundle
 */

"use strict";


function _toConsumableArray (arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); 
}

function _nonIterableSpread () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); 
}

function _iterableToArray (iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) {
        return Array.from(iter); 
    } 
}

function _arrayWithoutHoles (arr) {
    if (Array.isArray(arr)) {
        return _arrayLikeToArray(arr); 
    } 
}

function _slicedToArray (arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); 
}

function _nonIterableRest () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); 
}

function _iterableToArrayLimit (arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) {
        return; 
    } var _arr = [], 
        _n = true, 
        _d = false, 
        _e = undefined; 

    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value); if (i && _arr.length === i) {
                break; 
            } 
        } 
    } catch (err) {
        _d = true; _e = err; 
    } finally {
        try {
            if (!_n && _i.return != null) {
                _i.return(); 
            } 
        } finally {
            if (_d) {
                throw _e; 
            } 
        } 
    } 

    return _arr; 
}

function _arrayWithHoles (arr) {
    if (Array.isArray(arr)) {
        return arr; 
    } 
}

function _createForOfIteratorHelper (o, allowArrayLike) {
    var it; 

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) {
                o = it; 
            } var i = 0, 
                F = function F () {}; 

            return {s: F,
                n: function n () {
                    if (i >= o.length) {
                        return {done: true}; 
                    } 

                    return {done: false,
                        value: o[i++]}; 
                },
                e: function e (_e2) {
                    throw _e2; 
                },
                f: F}; 
        } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); 
    } var normalCompletion = true, 
        didErr = false, 
        err; 

    return {s: function s () {
        it = o[Symbol.iterator](); 
    },
    n: function n () {
        var step = it.next(); 

        normalCompletion = step.done; 

        return step; 
    },
    e: function e (_e3) {
        didErr = true; err = _e3; 
    },
    f: function f () {
        try {
            if (!normalCompletion && it.return != null) {
                it.return(); 
            } 
        } finally {
            if (didErr) {
                throw err; 
            } 
        } 
    }}; 
}

function _unsupportedIterableToArray (o, minLen) {
    if (!o) {
        return; 
    } if (typeof o === "string") {
        return _arrayLikeToArray(o, minLen); 
    } var n = Object.prototype.toString.call(o).slice(8, -1); 

    if (n === "Object" && o.constructor) {
        n = o.constructor.name; 
    } if (n === "Map" || n === "Set") {
        return Array.from(o); 
    } if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) {
        return _arrayLikeToArray(o, minLen); 
    } 
}

function _arrayLikeToArray (arr, len) {
    if (len == null || len > arr.length) {
        len = arr.length; 
    } for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i]; 
    } 

    return arr2; 
}

function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function"); 
    } 
}

function _defineProperties (target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]; 

        descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) {
            descriptor.writable = true; 
        } Object.defineProperty(target, descriptor.key, descriptor); 
    } 
}

function _createClass (Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps); 
    } if (staticProps) {
        _defineProperties(Constructor, staticProps); 
    } 

    return Constructor; 
}

function _inherits (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function"); 
    } subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass,
        writable: true,
        configurable: true}}); if (superClass) {
        _setPrototypeOf(subClass, superClass); 
    } 
}

function _setPrototypeOf (o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) {
        o.__proto__ = p; 

        return o; 
    }; 

    return _setPrototypeOf(o, p); 
}

function _createSuper (Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct(); 

    return function _createSuperInternal () {
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

function _possibleConstructorReturn (self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call; 
    } 

    return _assertThisInitialized(self); 
}

function _assertThisInitialized (self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); 
    } 

    return self; 
}

function _isNativeReflectConstruct () {
    if (typeof Reflect === "undefined" || !Reflect.construct) {
        return false; 
    } if (Reflect.construct.sham) {
        return false; 
    } if (typeof Proxy === "function") {
        return true; 
    } try {
        Date.prototype.toString.call(Reflect.construct(Date, [], () => {})); 

        return true; 
    } catch (e) {
        return false; 
    } 
}

function _getPrototypeOf (o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) {
        return o.__proto__ || Object.getPrototypeOf(o); 
    }; 

    return _getPrototypeOf(o); 
}

function _typeof (obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof (obj) {
            return typeof obj; 
        }; 
    } else {
        _typeof = function _typeof (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; 
        }; 
    } 

    return _typeof(obj); 
}

var DeStagnate = (function (modules) {
    var installedModules = {};

    function __webpack_require__ (moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }

        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        
        return module.exports;
    }

    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;

    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };

    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
        }

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };

    __webpack_require__.t = function (value, mode) {
        if (mode & 1) {
            value = __webpack_require__(value); 
        }
        if (mode & 8) {
            return value; 
        }
        if (mode & 4 && _typeof(value) === "object" && value && value.__esModule) {
            return value; 
        }
        var ns = Object.create(null);

        __webpack_require__.r(ns);

        Object.defineProperty(ns, "default", {
            enumerable: true,
            value
        });
        if (mode & 2 && typeof value !== "string") {
            for (var key in value) {
                __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
            } 
        }
        
        return ns;
    };

    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function getDefault () {
            return module.default;
        } : function getModuleExports () {
            return module;
        };

        __webpack_require__.d(getter, "a", getter);

        return getter;
    };

    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };

    __webpack_require__.p = "";
    
    return __webpack_require__(__webpack_require__.s = 0);
}([
    function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.7.0
         * @exports DeStagnate main destagnate class
         * @file main file for destagnate
         * @preserve
         */
        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Component = exports.createRef = exports.createElementNS = exports.createElement = exports.createDSComponent = void 0;

        var createRef_1 = __importDefault(__webpack_require__(1)),

            component_1 = __importDefault(__webpack_require__(2)),

            createDSComponent_1 = __importDefault(__webpack_require__(5)),

            createElement_1 = __importDefault(__webpack_require__(6)),

            createElementNS_1 = __importDefault(__webpack_require__(8));

        /**
         * Creates nested DeStagnate component
         * @param Component - DeStagnate component
         * @param props - props of component
         * @returns parent of component
         */
        exports.createDSComponent = createDSComponent_1.default;

        /**
         * Creates a child element to deStagnate
         * @param tagName - name of HTML element
         * @param props - element properties, such as class, innerHTML, id, style, etc
         * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @returns html element
         */
        exports.createElement = createElement_1.default;

        /**
         * Creates a child element to DynamComponent
         * @param tagName - name of HTML element
         * @param props - element properties, such as class, innerHTML, id, style, etc
         * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
         * @param childrenArgs - rest parameter of children
         * @returns html element
         */
        exports.createElementNS = createElementNS_1.default;

        /**
         * Creates a reference for a nested component
         * @returns empty ref object
         */
        exports.createRef = createRef_1.default;

        /**
         * DeStagnate
         * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @class
         * @namespace
         * @abstract
         */
        exports.Component = component_1.default;

        /**
         * DeStagnate
         * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @class
         * @namespace
         * @abstract
         */
        exports.default = component_1.default;
    }, function (module, exports, __webpack_require__) {
        

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createRef = void 0;

        /**
         * Creates a reference for a nested component
         * @returns empty ref object
         */
        exports.createRef = function () {
            return {
                current: null
            };
        };

        /**
         * Creates a reference for a nested component
         * @returns empty ref object
         */
        exports.default = exports.createRef;
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.7.0
         * @exports DeStagnate main destagnate class
         * @file DeStagnate component class
         * @preserve
         */
        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.Component = void 0;

        var _events_1 = __importDefault(__webpack_require__(3)),

            /**
             * DeStagnate
             * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
             * @class
             * @namespace
             * @abstract
             */
            DeStagnate = (function (_events_1$default) {
                _inherits(DeStagnate, _events_1$default);

                var _super = _createSuper(DeStagnate);

                /**
                 * Construct class component
                 * @public
                 * @constructor
                 * @param parent - parent of this element
                 * @param props - element properties; works like React Props
                 * @param shouldSkipParentCheck - warn or throw error if parent element already has children
                 */
                function DeStagnate (parent, props) {
                    var _this,

                        shouldSkipParentCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
                        try {
                            _this.componentDidUpdate();

                            if (_this._parent === undefined) {
                                throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                            }

                            _this.getSnapshotBeforeUpdate({..._this.props}, {..._this.state});

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
                        try {
                            _this.componentWillUpdate();

                            if (_this._parent === undefined) {
                                throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                            }

                            if (_this._strict) {
                                _this._checkKeys(obj);
                            }

                            _this.getSnapshotBeforeUpdate({..._this.props}, {..._this.state});

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
                     * @param shouldBindEvents - if event listeners shoud be bound `true` by default
                     * Increases performance if turned off
                     * @returns - result of append child to parent element
                     */
                    _this.mountComponent = function (parent) {
                        var shouldBindEvents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                        try {
                            if (parent !== undefined) {
                                _this.parent = parent;
                            }

                            if (_this._parent === undefined) {
                                throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                            }

                            var component = _this.render();

                            _this._didSetInitialState = true;

                            _this.componentWillMount();

                            if (component === null) {
                                throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array");
                            }

                            if (shouldBindEvents) {
                                _this.bindEventListeners(_this._parent);
                            }

                            _this._didMount = true;

                            _this.componentDidMount();

                            if (_typeof(component) === "object" && component instanceof Array) {
                                return component.map((element) => _this._parent.appendChild(element));
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
                        try {
                            if (_this._parent === undefined) {
                                _this.componentDidWarn("No parent was set. Component unmounted from nothing.");

                                return;
                            }

                            _this.componentWillUnmount();

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
                            throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
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
                                _this.componentDidWarn("WARN: New key (".concat(key, ") should not be set with setState, which has keys ").concat(JSON.stringify(Object.keys(_this.state)), ". Declare all state variables in constructor as a best practice. Did you misspell a key?"));
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
                            _this.componentDidUpdate();
                        }
                    };

                    if (parent && parent.childElementCount > 0 && !shouldSkipParentCheck && _this._strict) {
                        _this.componentDidCatch(new Error("ERR: Avoid using this ".concat(parent.tagName.toLowerCase(), " as element parent, as all elements within this ").concat(parent.tagName.toLowerCase(), " will be removed on re-render. To disable this, pass in true as a third parameter")));
                    }

                    _this._parent = parent;
                    
                    return _this;
                }

                /**
                 * Public getState getter as this.state itself is protected
                 * @public
                 * @returns component state
                 */
                _createClass(DeStagnate, [
                    {
                        key: "getState",
                        get: function get () {
                            return this.state;
                        }

                        /**
                         * Get component state
                         * @protected
                         * @returns component state
                         */
                    }, {
                        key: "state",
                        get: function get () {
                            return this._state;
                        }, /**
       * Sets component state
       * WARN: do not use this method to mutate the state directly
       * @protected
       * @param obj - state to set
       */
      
                        set: function set (obj) {
                            if (this._didSetInitialState && this._strict) {
                                this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead."));
                                this.componentDidWarn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly");
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
                        get: function get () {
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
                        set: function set (element) {
                            if (element && element.childElementCount > 0 && this._strict) {
                                this.componentDidWarn("WARN: Avoid using this ".concat(element.tagName.toLowerCase(), " as element parent, as all elements within this ").concat(element.tagName.toLowerCase(), " will be removed on re-render. If this was intentional, turn strict off before setting parent."));
                            }

                            this._parent = element;
                        }, /**
       * Get the parent element of this component
       * @public
       * @returns parent
       */
      
                        get: function get () {
                            return this._parent;
                        }

                        /**
                         * Get didMount value publicly
                         * @public
                         * @returns if mounted
                         */
                    }, {
                        key: "didMount",
                        get: function get () {
                            return this._didMount;
                        }
                    }
                ]);

                return DeStagnate;
            }(_events_1.default));

        exports.default = DeStagnate;

        var Component = (function (_DeStagnate) {
            _inherits(Component, _DeStagnate);

            var _super2 = _createSuper(Component);

            function Component () {
                _classCallCheck(this, Component);

                return _super2.apply(this, arguments);
            }

            return Component;
        }(DeStagnate));

        exports.Component = Component;
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.7.0
         * @exports Events
         * @package
         */
        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _base_1 = __importDefault(__webpack_require__(4)),

            Events = (function (_base_1$default) {
                _inherits(Events, _base_1$default);

                var _super3 = _createSuper(Events);

                function Events () {
                    var _this2;

                    _classCallCheck(this, Events);

                    _this2 = _super3.apply(this, arguments);

                    /**
                     * Binds event listeners event
                     * Do not call manually
                     * @protected
                     * @instance
                     * @pacakge
                     * @param element - element to bind listeners to
                     * @returns void
                     */
                    _this2.bindEventListeners = function (element) {
                        _this2._eventListener(element.addEventListener);
                    };

                    /**
                     * Binds event listeners event
                     * Do not call manually
                     * @protected
                     * @instance
                     * @pacakge
                     * @param element - element to bind listeners to
                     * @returns void
                     */
                    _this2.unbindEventListeners = function (element) {
                        _this2._eventListener(element.removeEventListener);
                    };

                    /**
                     * Focus event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onFocus = function () {
                        return undefined;
                    };

                    /**
                     * Blur event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onBlur = function () {
                        return undefined;
                    };

                    /**
                     * Focus in event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onFocusIn = function () {
                        return undefined;
                    };

                    /**
                     * Focus out event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onFocusOut = function () {
                        return undefined;
                    };

                    /**
                     * Animation start event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onAnimationStart = function () {
                        return undefined;
                    };

                    /**
                     * Animation cancel event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onAnimationCancel = function () {
                        return undefined;
                    };

                    /**
                     * Animation end event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onAnimationEnd = function () {
                        return undefined;
                    };

                    /**
                     * Animation iteration event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onAnimationIteration = function () {
                        return undefined;
                    };

                    /**
                     * Transition start event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onTransitionStart = function () {
                        return undefined;
                    };

                    /**
                     * Transition cancel event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onTransitionCancel = function () {
                        return undefined;
                    };

                    /**
                     * Transition end event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onTransitionEnd = function () {
                        return undefined;
                    };

                    /**
                     * Transition run event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onTransitionRun = function () {
                        return undefined;
                    };

                    /**
                     * Auxillary click event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onAuxClick = function () {
                        return undefined;
                    };

                    /**
                     * Click event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onClick = function () {
                        return undefined;
                    };

                    /**
                     * Double click event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onDblClick = function () {
                        return undefined;
                    };

                    /**
                     * Mousedown event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onMouseDown = function () {
                        return undefined;
                    };

                    /**
                     * Mouse enter event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onMouseEnter = function () {
                        return undefined;
                    };

                    /**
                     * Mouse leave event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onMouseLeave = function () {
                        return undefined;
                    };

                    /**
                     * Mouse move event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onMouseMove = function () {
                        return undefined;
                    };

                    /**
                     * Mouseover event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onMouseOver = function () {
                        return undefined;
                    };

                    /**
                     * Mouseout event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onMouseOut = function () {
                        return undefined;
                    };

                    /**
                     * Mouseup event
                     * @protected
                     * @instance
                     * @returns
                     */
                    _this2.onMouseUp = function () {
                        return undefined;
                    };

                    _this2._eventListener = function (el) {
                        for (var _i2 = 0, _Object$entries = Object.entries(_this2._events()); _i2 < _Object$entries.length; _i2++) {
                            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                                event = _Object$entries$_i[0],
                                callback = _Object$entries$_i[1];

                            el(event, callback);
                        }
                    };

                    _this2._events = function () {
                        return {
                            focus: _this2.onFocus,
                            blur: _this2.onBlur,
                            focusin: _this2.onFocusIn,
                            focusout: _this2.onFocusOut,
                            animationstart: _this2.onAnimationStart,
                            animationcancel: _this2.onAnimationCancel,
                            animationend: _this2.onAnimationEnd,
                            animationiteration: _this2.onAnimationIteration,
                            transitionstart: _this2.onTransitionStart,
                            transitioncancel: _this2.onTransitionCancel,
                            transitionend: _this2.onTransitionEnd,
                            transitionrun: _this2.onTransitionRun,
                            auxclick: _this2.onAuxClick,
                            click: _this2.onClick,
                            dblclick: _this2.onDblClick,
                            mousedown: _this2.onMouseDown,
                            mouseenter: _this2.onMouseEnter,
                            mouseleave: _this2.onMouseLeave,
                            mousemove: _this2.onMouseMove,
                            mouseover: _this2.onMouseOver,
                            mouseout: _this2.onMouseOut,
                            mouseup: _this2.onMouseUp
                        };
                    };

                    return _this2;
                }

                return Events;
            }(_base_1.default));

        exports.default = Events;
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.7.0
         * @exports Preset - base for a component
         * @package
         */
        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };

        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var createDSComponent_1 = __importDefault(__webpack_require__(5)),

            createElement_1 = __importDefault(__webpack_require__(6)),

            createElementNS_1 = __importDefault(__webpack_require__(8)),

            createRef_1 = __importDefault(__webpack_require__(1)),

            Preset = function Preset () {
                _classCallCheck(this, Preset);

                /**
                 * Creates nested DeStagnate component
                 * @public
                 * @instance
                 * @readonly
                 * @param Component - DeStagnate component
                 * @param props - props of component
                 * @returns parent of component
                 */
                this.createDSComponent = createDSComponent_1.default;

                /**
                 * Creates a child element to DynamComponent
                 * @public
                 * @instance
                 * @readonly
                 * @param tagName - name of HTML element
                 * @param props - element properties, such as class, innerHTML, id, style, etc
                 * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
                 * @param childrenArgs - rest parameter of children
                 * @returns html element
                 */
                this.createElement = createElement_1.default;

                /**
                 * Creates a child element to deStagnate
                 * @public
                 * @instance
                 * @readonly
                 * @param namespaceURI - namespace uri
                 * @param tagName - name of HTML element
                 * @param props - element properties, such as class, innerHTML, id, style, etc
                 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
                 * @param childrenArgs - rest parameter of children
                 * @returns html element
                 */
                this.createElementNS = createElementNS_1.default;

                /**
                 * Creates a reference for a nested component
                 * @public
                 * @instance
                 * @readonly
                 * @returns empty ref object
                 */
                this.createRef = createRef_1.default;

                /**
                 * Called when component catches error. Default behaviour is console.error
                 * @param error - error object with info
                 * @returns void
                 */
                this.componentDidCatch = function (error) {
                    return console.error(error);
                };

                /**
                 * What to call after component mounting
                 * @public
                 * @instance
                 * @returns void
                 */
                this.componentDidMount = function () {
                    return undefined;
                };

                /**
                 * What to call after component update (state mutation)
                 * @public
                 * @instance
                 * @returns void
                 */
                this.componentDidUpdate = function () {
                    return undefined;
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
                 * What to call before component mounting
                 * @public
                 * @instance
                 * @returns void
                 */
                this.componentWillMount = function () {
                    return undefined;
                };

                /**
                 * What to call before component unmounting
                 * @public
                 * @instance
                 * @returns void
                 */
                this.componentWillUnmount = function () {
                    return undefined;
                };

                /**
                 * What to call before component update (state mutation)
                 * @public
                 * @instance
                 * @returns void
                 */
                this.componentWillUpdate = function () {
                    return undefined;
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

        exports.default = Preset;

        /**
         * Creates nested DeStagnate component
         * @public
         * @static
         * @readonly
         * @param Component - DeStagnate component
         * @param props - props of component
         * @returns parent of component
         */
        Preset.createDSComponent = createDSComponent_1.default;

        /**
         * Creates a child element to DynamComponent
         * @public
         * @static
         * @readonly
         * @param tagName - name of HTML element
         * @param props - element properties, such as class, innerHTML, id, style, etc
         * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
         * @param childrenArgs - rest parameter of children
         * @returns html element
         */
        Preset.createElement = createElement_1.default;

        /**
         * Creates a child element to deStagnate
         * @public
         * @static
         * @readonly
         * @param namespaceURI - namespace uri
         * @param tagName - name of HTML element
         * @param props - element properties, such as class, innerHTML, id, style, etc
         * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param childrenArgs - rest parameter of children
         * @returns html element
         */
        Preset.createElementNS = createElementNS_1.default;

        /**
         * Creates a reference for a nested component
         * @public
         * @static
         * @readonly
         * @returns empty ref object
         */
        Preset.createRef = createRef_1.default;
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.7.0
         * @exports createDSComponent add nested component for DeStagnate components
         */
        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        /**
         * Creates nested DeStagnate component
         * @deprecated do not use this function, since 1.6.1
         * This only exists to adhere to semver
         * @param Component - DeStagnate component
         * @param props - props of component
         * @param ref - ref object
         * @returns parent of component
         */
        var createDSComponent = function createDSComponent (Component, props, ref) {
            var element = document.createElement("div");

            element.classList.add("DeStagnate-component-parent");

            var _component = new Component(element, props);

            _component.mount();

            if (ref) {
                ref.current = _component;
            }

            return element;
        };

        exports.default = createDSComponent;
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.7.0
         * @exports createElement function for DOM manipulation
         */
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createElement = void 0;

        var _createElementTools_1 = __webpack_require__(7);

        /**
         * Creates a child element to DynamComponent
         * @param tagName - name of HTML element
         * @param props - element properties, such as class, innerHTML, id, style, etc
         * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param childrenArgs - rest parameter of children
         * @returns element
         */
        exports.createElement = function (tagName, props, children) {
            var element = document.createElement(tagName);

            _createElementTools_1.bindProps(element, props);

            var _children = children;

            for (var _len = arguments.length, childrenArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                childrenArgs[_key - 3] = arguments[_key];
            }

            if (children && childrenArgs) {
                if (children instanceof Array) {
                    _children = [].concat(_toConsumableArray(_createElementTools_1.unpackChildren(children)), _toConsumableArray(_createElementTools_1.unpackChildren(childrenArgs)));
                } else {
                    _children = [children].concat(_toConsumableArray(_createElementTools_1.unpackChildren(childrenArgs)));
                }
            }

            _createElementTools_1.bindChildren(element, _children);

            return element;
        };

        exports.default = exports.createElement;
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.7.0
         * @file share functions and types for createElement and it's variants
         */
        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            };
        };

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.bindChildren = exports.unpackChildren = exports.bindProps = void 0;

        var _1 = __importDefault(__webpack_require__(0));

        /**
         * Binds children to element
         * @package
         * @param element - element to bind
         * @param props - props to bind with
         * @param ns - if namespace element
         * @returns void
         */
        exports.bindProps = function (element, props) {
            var ns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (props) {
                for (var _i3 = 0, _Object$entries2 = Object.entries(props); _i3 < _Object$entries2.length; _i3++) {
                    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                        key = _Object$entries2$_i[0],
                        val = _Object$entries2$_i[1];

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
                    } else {
                        console.warn("WARN: Invalid prop type \"".concat(_typeof(val), "\" for key \"").concat(key, "\". Skipping prop."));
                    }
                }
            }
        };

        exports.unpackChildren = function (children) {
            var newChildren = [],

                _iterator2 = _createForOfIteratorHelper(children),
                _step2;

            try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var child = _step2.value;

                    if (_typeof(child) === "object" && child instanceof Array) {
                        newChildren.push.apply(newChildren, _toConsumableArray(exports.unpackChildren(child)));
                    } else {
                        newChildren.push(child);
                    }
                }
            } catch (err) {
                _iterator2.e(err);
            } finally {
                _iterator2.f();
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
        exports.bindChildren = function (element, children) {
            if (children !== null && children !== undefined) {
                if (children instanceof Array) {
                    var _iterator3 = _createForOfIteratorHelper(children),
                        _step3;

                    try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var child = _step3.value;

                            exports.bindChildren(element, child);
                        }
                    } catch (err) {
                        _iterator3.e(err);
                    } finally {
                        _iterator3.f();
                    }
                } else if (typeof children === "string" || typeof children === "number") {
                    element.innerText = children.toString();
                } else if (children instanceof _1.default) {
                    if (!children.didMount && element instanceof window.HTMLElement) {
                        children.mount(element);
                        
                        return;
                    } else if (!(element instanceof window.HTMLElement)) {
                        throw new Error("Cannot use non-HTMLElement as component parent");
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
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.7.0
         * @exports createElementNS createElement for namespaced elements
         */
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.createElementNS = void 0;

        var _createElementTools_1 = __webpack_require__(7);

        /**
         * Creates a child element to deStagnate
         * @param namespaceURI - namespace uri
         * @param tagName - name of HTML element
         * @param props - element properties, such as class, innerHTML, id, style, etc
         * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param childrenArgs - rest parameter of children
         * @returns html element
         */
        exports.createElementNS = function (namespaceURI, tagName, props, children) {
            var element = document.createElementNS(namespaceURI, tagName);

            _createElementTools_1.bindProps(element, props, true);

            var _children = children;

            for (var _len2 = arguments.length, childrenArgs = new Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
                childrenArgs[_key2 - 4] = arguments[_key2];
            }

            if (children && childrenArgs) {
                if (_typeof(children) === "object" && children instanceof Array) {
                    _children = [].concat(_toConsumableArray(_createElementTools_1.unpackChildren(children)), _toConsumableArray(_createElementTools_1.unpackChildren(childrenArgs)));
                } else {
                    _children = [children].concat(_toConsumableArray(_createElementTools_1.unpackChildren(childrenArgs)));
                }
            }

            _createElementTools_1.bindChildren(element, _children);

            return element;
        };

        exports.default = exports.createElementNS;
    }
]));
