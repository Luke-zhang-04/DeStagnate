/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @file DeStagnate development bundle
 */

"use strict";


function _toConsumableArray (arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() 
}

function _nonIterableSpread () {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") 
}

function _iterableToArray (iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) {
        return Array.from(iter) 
    } 
}

function _arrayWithoutHoles (arr) {
    if (Array.isArray(arr)) {
        return _arrayLikeToArray(arr) 
    } 
}

function _slicedToArray (arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest() 
}

function _nonIterableRest () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") 
}

function _iterableToArrayLimit (arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) {
        return 
    } var _arr = [], 
        _n = true, 
        _d = false, 
        _e = undefined 

    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value); if (i && _arr.length === i) {
                break 
            } 
        } 
    } catch (err) {
        _d = true; _e = err 
    } finally {
        try {
            if (!_n && _i.return != null) {
                _i.return() 
            } 
        } finally {
            if (_d) {
                throw _e 
            } 
        } 
    } 

    return _arr 
}

function _arrayWithHoles (arr) {
    if (Array.isArray(arr)) {
        return arr 
    } 
}

function _createForOfIteratorHelper (o, allowArrayLike) {
    var it 

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) {
                o = it 
            } var i = 0, 
                F = function F () {} 

            return {s: F,
                n: function n () {
                    if (i >= o.length) {
                        return {done: true} 
                    } 

                    return {done: false,
                        value: o[i++]} 
                },
                e: function e (_e2) {
                    throw _e2 
                },
                f: F} 
        } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") 
    } var normalCompletion = true, 
        didErr = false, 
        err 

    return {s: function s () {
        it = o[Symbol.iterator]() 
    },
    n: function n () {
        var step = it.next() 

        normalCompletion = step.done 

        return step 
    },
    e: function e (_e3) {
        didErr = true; err = _e3 
    },
    f: function f () {
        try {
            if (!normalCompletion && it.return != null) {
                it.return() 
            } 
        } finally {
            if (didErr) {
                throw err 
            } 
        } 
    }} 
}

function _unsupportedIterableToArray (o, minLen) {
    if (!o) {
        return 
    } if (typeof o === "string") {
        return _arrayLikeToArray(o, minLen) 
    } var n = Object.prototype.toString.call(o).slice(8, -1) 

    if (n === "Object" && o.constructor) {
        n = o.constructor.name 
    } if (n === "Map" || n === "Set") {
        return Array.from(o) 
    } if (n === "Arguments" || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) {
        return _arrayLikeToArray(o, minLen) 
    } 
}

function _arrayLikeToArray (arr, len) {
    if (len == null || len > arr.length) {
        len = arr.length 
    } for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i] 
    } 

    return arr2 
}

function _classCallCheck (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function") 
    } 
}

function _defineProperties (target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i] 

        descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) {
            descriptor.writable = true 
        } Object.defineProperty(target, descriptor.key, descriptor) 
    } 
}

function _createClass (Constructor, protoProps, staticProps) {
    if (protoProps) {
        _defineProperties(Constructor.prototype, protoProps) 
    } if (staticProps) {
        _defineProperties(Constructor, staticProps) 
    } 

    return Constructor 
}

function _inherits (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function") 
    } subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass,
        writable: true,
        configurable: true}}); if (superClass) {
        _setPrototypeOf(subClass, superClass) 
    } 
}

function _setPrototypeOf (o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) {
        o.__proto__ = p 

        return o 
    } 

    return _setPrototypeOf(o, p) 
}

function _createSuper (Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct() 

    return function _createSuperInternal () {
        var Super = _getPrototypeOf(Derived), 
            result 

        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor 

            result = Reflect.construct(Super, arguments, NewTarget) 
        } else {
            result = Super.apply(this, arguments) 
        } 

        return _possibleConstructorReturn(this, result) 
    } 
}

function _possibleConstructorReturn (self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call 
    } 

    return _assertThisInitialized(self) 
}

function _assertThisInitialized (self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called") 
    } 

    return self 
}

function _isNativeReflectConstruct () {
    if (typeof Reflect === "undefined" || !Reflect.construct) {
        return false 
    } if (Reflect.construct.sham) {
        return false 
    } if (typeof Proxy === "function") {
        return true 
    } try {
        Date.prototype.toString.call(Reflect.construct(Date, [], () => {})) 

        return true 
    } catch (e) {
        return false 
    } 
}

function _getPrototypeOf (o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) {
        return o.__proto__ || Object.getPrototypeOf(o) 
    } 

    return _getPrototypeOf(o) 
}

function _typeof (obj) {
    "@babel/helpers - typeof"

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof (obj) {
            return typeof obj 
        } 
    } else {
        _typeof = function _typeof (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj 
        } 
    } 

    return _typeof(obj) 
}

module.exports = (function (modules) {
    var installedModules = {}

    function __webpack_require__ (moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports
        }

        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        }

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        module.l = true
        
        return module.exports
    }

    __webpack_require__.m = modules
    __webpack_require__.c = installedModules

    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            })
        }
    }

    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            })
        }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
    }

    __webpack_require__.t = function (value, mode) {
        if (mode & 1) {
            value = __webpack_require__(value) 
        }
        if (mode & 8) {
            return value 
        }
        if (mode & 4 && _typeof(value) === "object" && value && value.__esModule) {
            return value 
        }
        var ns = Object.create(null)

        __webpack_require__.r(ns)

        Object.defineProperty(ns, "default", {
            enumerable: true,
            value
        })
        if (mode & 2 && typeof value !== "string") {
            for (var key in value) {
                __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key))
            } 
        }
        
        return ns
    }

    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ? function getDefault () {
            return module.default
        } : function getModuleExports () {
            return module
        }

        __webpack_require__.d(getter, "a", getter)

        return getter
    }

    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }

    __webpack_require__.p = ""
    
    return __webpack_require__(__webpack_require__.s = 0)
}([
    function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.6.0
         * @exports DeStagnate main destagnate class
         * @file main file for destagnate
         * @preserve
         */

        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            }
        }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
        exports.createRef = exports.createElementNS = exports.createElement = exports.createDSComponent = void 0

        var _preset_1 = __importDefault(__webpack_require__(1)),

            createDSComponent_1 = __importDefault(__webpack_require__(3)),

            createElement_1 = __importDefault(__webpack_require__(4)),

            createElementNS_1 = __importDefault(__webpack_require__(5)),

            createRef_1 = __importDefault(__webpack_require__(6)),

            /**
             * DeStagnate
             * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
             * @class
             * @namespace
             * @abstract
             */


            DeStagnate = (function (_preset_1$default) {
                _inherits(DeStagnate, _preset_1$default)

                var _super = _createSuper(DeStagnate)

                /**
                 * Construct class component
                 * @public
                 * @constructor
                 * @param {HTMLElement} parent - parent of this element
                 * @param {undefined | Object.<string, string | number>} props - element properties; works like React Props
                 * @param {boolean} shouldSkipParentCheck - warn or throw error if parent element already has children
                 */
                function DeStagnate (parent, props) {
                    var _this,

                        shouldSkipParentCheck = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false

                    _classCallCheck(this, DeStagnate)

                    _this = _super.call(this)
                    _this.props = props

                    /**
                     * If strict mode should be used. True by default
                     * @type {boolean}
                     */

                    _this._strict = true

                    /**
                     * State of component. Works similar React State
                     * @type {undefined | Object.<string, unknown>}
                     * @private
                     * @instance
                     */

                    _this._state = {}

                    /**
                     * If initial state was set in initializer
                     * Do not throw error with direct state setting
                     * @type {boolean}
                     * @private
                     */

                    _this._didSetInitialState = false

                    /**
                     * What to call before component update (state mutation)
                     * @public
                     * @instance
                     * @param {Props} prevProps - previous props
                     * @param {State} prevState - previous state
                     * @returns {void} void
                     */

                    _this.getSnapshotBeforeUpdate = function (prevProps, prevState) {
                        return [prevProps, prevState]
                    }

                    /**
                     * Turn on strict mode
                     * @returns {void} void
                     */


                    _this.useStrict = function () {
                        _this._strict = true
                    }

                    /**
                     * Turn off strict mode
                     * @returns {void} void
                     */


                    _this.disableStrict = function () {
                        _this._strict = false
                    }

                    /**
                     * Sets state
                     * @public
                     * @instance
                     * @readonly
                     * @param {Partial<State>} obj - state to set
                     * @returns {void | Error} void
                     */


                    _this.setState = function (obj) {
                        try {
                            _this.componentWillUpdate()

                            if (_this._strict) {
                                _this._checkKeys(obj)
                            }

                            _this.getSnapshotBeforeUpdate({..._this.props}, {..._this.state})

                            Object.assign(_this._state, obj)
                            var renderedContent = _this.shouldComponentUpdate() ? _this._execRender() : undefined

                            if (_typeof(renderedContent) === "object" && renderedContent instanceof Array) {
                                var _iterator = _createForOfIteratorHelper(renderedContent),
                                    _step

                                try {
                                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                                        var element = _step.value

                                        _this._parent.appendChild(element)
                                    }
                                } catch (err) {
                                    _iterator.e(err)
                                } finally {
                                    _iterator.f()
                                }
                            } else if (renderedContent) {
                                _this._parent.appendChild(renderedContent)
                            }

                            if (renderedContent) {
                                _this.componentDidUpdate()
                            }
                        } catch (err) {
                            _this.componentDidCatch(err)

                            return err
                        }
                    }

                    /**
                     * Initial mounting to be manually called
                     * @public
                     * @instance
                     * @readonly
                     * @returns {HTMLElement | Array.<HTMLElement> | error} - result of append child to parent element
                     */


                    _this.mountComponent = function () {
                        try {
                            var component = _this.render()

                            _this._didSetInitialState = true

                            _this.componentWillMount()

                            if (component === null) {
                                var msg = "Expected render method to be included in component class, no render method found, or render returned an empty array"

                                throw new Error(msg)
                            }

                            _this.bindEventListeners(_this._parent)

                            _this.componentDidMount()

                            if (_typeof(component) === "object" && component instanceof Array) {
                                return component.map((element) => _this._parent.appendChild(element))
                            }

                            return _this._parent.appendChild(component)
                        } catch (err) {
                            _this.componentDidCatch(err)

                            return err
                        }
                    }

                    /**
                     * Initial mounting to be manually called
                     * @public
                     * @instance
                     * @readonly
                     * @returns {HTMLElement} - result of append child to parent element
                     */


                    _this.mount = _this.mountComponent

                    /**
                     * Unmounting to be manually called
                     * @public
                     * @instance
                     * @readonly
                     * @returns {void} - void
                     */

                    _this.unmountComponent = function () {
                        try {
                            _this.componentWillUnmount()

                            _this.unbindEventListeners(_this._parent)

                            _this._removeChildren()
                        } catch (err) {
                            _this.componentDidCatch(err)
                        }
                    }

                    /**
                     * Unmounting to be manually called
                     * @public
                     * @instance
                     * @readonly
                     * @returns {void} - void
                     */


                    _this.unmount = _this.unmountComponent

                    /**
                     * Removes children from this._parent
                     * @private
                     * @instance
                     * @return {void} void
                     */

                    _this._removeChildren = function () {
                        while (_this._parent.firstChild) {
                            if (_this._parent.lastChild) {
                                _this._parent.removeChild(_this._parent.lastChild)
                            } else {
                                break
                            }
                        }
                    }

                    /**
                     * Executes new render
                     * @returns {HTMLElement | Array.<HTMLElement> | null} rendered content
                     */


                    _this._execRender = function () {
                        _this._removeChildren()

                        return _this.render()
                    }

                    /**
                     * Checks new state assignment to make sure no new keys are assigned
                     * @param {Partial<State>} obj - new state
                     * @returns {void} void
                     */


                    _this._checkKeys = function (obj) {
                        for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
                            var key = _Object$keys[_i]

                            if (!Object.keys(_this.state).includes(key)) {
                                console.warn("WARN: New key (".concat(key, ") should not be set with setState, which has keys ").concat(JSON.stringify(Object.keys(_this.state)), ". Declare all state variables in constructor as a best practice. Did you misspell a key?"))
                            }
                        }
                    }

                    if (parent.childElementCount > 0 && !shouldSkipParentCheck && _this._strict) {
                        _this.componentDidCatch(new Error("ERR: Avoid using this ".concat(parent.tagName.toLowerCase(), " as element parent, as all elements within this ").concat(parent.tagName.toLowerCase(), " will be removed on re-render. To disable this, pass in true as a third parameter")))
                    }

                    _this._parent = parent
                    
                    return _this
                }

                /**
                 * Public getState getter as this.state itself is protected
                 * @public
                 * @instance
                 * @returns {State} component state
                 */


                _createClass(DeStagnate, [
                    {
                        key: "getState",
                        get: function get () {
                            return this.state
                        }

                        /**
                         * Get component state
                         * @protected
                         * @instance
                         * @returns {State} component state
                         */

                    }, {
                        key: "state",
                        get: function get () {
                            return this._state
                        },

                        /**
                         * Sets component state
                         * WARN: do not use this method to mutate the state directly
                         * @protected
                         * @instance
                         * @param {State} obj - state to set
                         */
                
                        set: function set (obj) {
                            if (this._didSetInitialState && this._strict) {
                                this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead."))
                                console.warn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly")
                                this.setState(obj)
                            } else {
                                this._state = obj
                                this._didSetInitialState = true
                            }
                        }

                        /**
                         * Public getProps getter as this.props itself is protected
                         * @public
                         * @instance
                         * @returns {Props | undefined} component state
                         */

                    }, {
                        key: "getProps",
                        get: function get () {
                            return this.props
                        }
                    }
                ])

                return DeStagnate
            }(_preset_1.default))

        exports.default = DeStagnate

        /**
         * Creates nested DeStagnate component
         * @param {DeStagnateConstructor} Component - DeStagnate component
         * @param {Object<string, unknown>} props - props of component
         * @returns {HTMLDivElement} parent of component
         */

        exports.createDSComponent = createDSComponent_1.default

        /**
         * Creates a child element to deStagnate
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @returns {HTMLElement} html element
         */

        exports.createElement = createElement_1.default

        /**
         * Creates a child element to DynamComponent
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
         * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */

        exports.createElementNS = createElementNS_1.default

        /**
         * Creates a reference for a nested component
         * @returns {Object<string, undefined>} empty ref object
         */

        exports.createRef = createRef_1.default
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.6.0
         * @exports Preset
         * @package
         */

        var __importDefault = this && this.__importDefault || function (mod) {
            return mod && mod.__esModule ? mod : {
                default: mod
            }
        }

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        var _events_1 = __importDefault(__webpack_require__(2)),

            createDSComponent_1 = __importDefault(__webpack_require__(3)),

            createElement_1 = __importDefault(__webpack_require__(4)),

            createElementNS_1 = __importDefault(__webpack_require__(5)),

            createRef_1 = __importDefault(__webpack_require__(6)),

            Preset = (function (_events_1$default) {
                _inherits(Preset, _events_1$default)

                var _super2 = _createSuper(Preset)

                function Preset () {
                    var _this2

                    _classCallCheck(this, Preset)

                    _this2 = _super2.apply(this, arguments)

                    /**
                     * Creates nested DeStagnate component
                     * @public
                     * @instance
                     * @readonly
                     * @param {DeStagnateConstructor} Component - DeStagnate component
                     * @param {Object<string, unknown>} props - props of component
                     * @returns {HTMLDivElement} parent of component
                     */

                    _this2.createDSComponent = createDSComponent_1.default

                    /**
                     * Creates a child element to DynamComponent
                     * @public
                     * @instance
                     * @readonly
                     * @param {string} tagName - name of HTML element
                     * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
                     * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
                     * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
                     * @returns {HTMLElement} html element
                     */

                    _this2.createElement = createElement_1.default

                    /**
                     * Creates a child element to deStagnate
                     * @public
                     * @instance
                     * @readonly
                     * @param {string | null} namespaceURI - namespace uri
                     * @param {string} tagName - name of HTML element
                     * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
                     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
                     * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
                     * @returns {HTMLElement} html element
                     */

                    _this2.createElementNS = createElementNS_1.default

                    /**
                     * Creates a reference for a nested component
                     * @public
                     * @instance
                     * @readonly
                     * @returns {Object<string, null>} empty ref object
                     */

                    _this2.createRef = createRef_1.default

                    /**
                     * Called when component catches error. Default behaviour is console.error
                     * @param {Error} error - error object with info
                     * @returns {void} void
                     */

                    _this2.componentDidCatch = function (error) {
                        return console.error(error)
                    }

                    /**
                     * What to call after component mounting
                     * @public
                     * @instance
                     * @returns {void} void
                     */


                    _this2.componentDidMount = function () {
                        return undefined
                    }

                    /**
                     * What to call after component update (state mutation)
                     * @public
                     * @instance
                     * @returns {void} void
                     */


                    _this2.componentDidUpdate = function () {
                        return undefined
                    }

                    /**
                     * What to call before component mounting
                     * @public
                     * @instance
                     * @returns {void} void
                     */


                    _this2.componentWillMount = function () {
                        return undefined
                    }

                    /**
                     * What to call before component unmounting
                     * @public
                     * @instance
                     * @returns {void} void
                     */


                    _this2.componentWillUnmount = function () {
                        return undefined
                    }

                    /**
                     * What to call before component update (state mutation)
                     * @public
                     * @instance
                     * @returns {void} void
                     */


                    _this2.componentWillUpdate = function () {
                        return undefined
                    }

                    /**
                     * Called before component is updated
                     * @returns {boolean} whether or not component should update/re-render
                     */


                    _this2.shouldComponentUpdate = function () {
                        return true
                    }

                    /**
                     * Rendering HTML, must be part of extended class
                     * @public
                     * @instance
                     * @abstract
                     * @returns {null | HTMLElement | Array.<HTMLElement> | Element | Array.<Element>} if returns null error will be thrown
                     */


                    _this2.render = function () {
                        return null
                    }

                    return _this2
                }

                return Preset
            }(_events_1.default))

        exports.default = Preset

        /**
         * Creates nested DeStagnate component
         * @public
         * @static
         * @readonly
         * @param {DeStagnateConstructor} Component - DeStagnate component
         * @param {Object<string, unknown>} props - props of component
         * @returns {HTMLDivElement} parent of component
         */

        Preset.createDSComponent = createDSComponent_1.default

        /**
         * Creates a child element to DynamComponent
         * @public
         * @static
         * @readonly
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
         * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */

        Preset.createElement = createElement_1.default

        /**
         * Creates a child element to deStagnate
         * @public
         * @static
         * @readonly
         * @param {string | null} namespaceURI - namespace uri
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */

        Preset.createElementNS = createElementNS_1.default

        /**
         * Creates a reference for a nested component
         * @public
         * @static
         * @readonly
         * @returns {Object<string, null>} empty ref object
         */

        Preset.createRef = createRef_1.default
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.6.0
         * @exports Events
         * @package
         */

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        var Events = function Events () {
            var _this3 = this

            _classCallCheck(this, Events)

            /**
             * Binds event listeners event
             * Do not call manually
             * @protected
             * @instance
             * @pacakge
             * @param {HTMLElement} element - element to bind listeners to
             * @returns {void} void;
             */
            this.bindEventListeners = function (element) {
                _this3._eventListener(element.addEventListener)
            }

            /**
             * Binds event listeners event
             * Do not call manually
             * @protected
             * @instance
             * @pacakge
             * @param {HTMLElement} element - element to bind listeners to
             * @returns {void} void;
             */


            this.unbindEventListeners = function (element) {
                _this3._eventListener(element.removeEventListener)
            }

            /**
             * Focus event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onFocus = function () {
                return undefined
            }

            /**
             * Blur event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onBlur = function () {
                return undefined
            }

            /**
             * Focus in event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onFocusIn = function () {
                return undefined
            }

            /**
             * Focus out event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onFocusOut = function () {
                return undefined
            }

            /**
             * Animation start event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onAnimationStart = function () {
                return undefined
            }

            /**
             * Animation cancel event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onAnimationCancel = function () {
                return undefined
            }

            /**
             * Animation end event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onAnimationEnd = function () {
                return undefined
            }

            /**
             * Animation iteration event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onAnimationIteration = function () {
                return undefined
            }

            /**
             * Transition start event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onTransitionStart = function () {
                return undefined
            }

            /**
             * Transition cancel event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onTransitionCancel = function () {
                return undefined
            }

            /**
             * Transition end event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onTransitionEnd = function () {
                return undefined
            }

            /**
             * Transition run event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onTransitionRun = function () {
                return undefined
            }

            /**
             * Auxillary click event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onAuxClick = function () {
                return undefined
            }

            /**
             * Click event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onClick = function () {
                return undefined
            }

            /**
             * Double click event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onDblClick = function () {
                return undefined
            }

            /**
             * Mousedown event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onMouseDown = function () {
                return undefined
            }

            /**
             * Mouse enter event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onMouseEnter = function () {
                return undefined
            }

            /**
             * Mouse leave event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onMouseLeave = function () {
                return undefined
            }

            /**
             * Mouse move event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onMouseMove = function () {
                return undefined
            }

            /**
             * Mouseover event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onMouseOver = function () {
                return undefined
            }

            /**
             * Mouseout event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onMouseOut = function () {
                return undefined
            }

            /**
             * Mouseup event
             * @protected
             * @instance
             * @returns {void}
             */


            this.onMouseUp = function () {
                return undefined
            }

            this._eventListener = function (el) {
                for (var _i2 = 0, _Object$entries = Object.entries(_this3._events()); _i2 < _Object$entries.length; _i2++) {
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                        event = _Object$entries$_i[0],
                        callback = _Object$entries$_i[1]

                    el(event, callback)
                }
            }

            this._events = function () {
                return {
                    focus: _this3.onFocus,
                    blur: _this3.onBlur,
                    focusin: _this3.onFocusIn,
                    focusout: _this3.onFocusOut,
                    animationstart: _this3.onAnimationStart,
                    animationcancel: _this3.onAnimationCancel,
                    animationend: _this3.onAnimationEnd,
                    animationiteration: _this3.onAnimationIteration,
                    transitionstart: _this3.onTransitionStart,
                    transitioncancel: _this3.onTransitionCancel,
                    transitionend: _this3.onTransitionEnd,
                    transitionrun: _this3.onTransitionRun,
                    auxclick: _this3.onAuxClick,
                    click: _this3.onClick,
                    dblclick: _this3.onDblClick,
                    mousedown: _this3.onMouseDown,
                    mouseenter: _this3.onMouseEnter,
                    mouseleave: _this3.onMouseLeave,
                    mousemove: _this3.onMouseMove,
                    mouseover: _this3.onMouseOver,
                    mouseout: _this3.onMouseOut,
                    mouseup: _this3.onMouseUp
                }
            }
        }

        exports.default = Events
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.6.0
         * @exports createDSComponent add nested component for DeStagnate components
         */

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        /**
         * Creates nested DeStagnate component
         * @param {DeStagnateConstructor} Component - DeStagnate component
         * @param {Object<string, unknown>} props - props of component
         * @param {Object<string, undefined | DeStagnate>} ref - ref object
         * @returns {HTMLDivElement} parent of component
         */

        var createDSComponent = function createDSComponent (Component, props, ref) {
            var element = document.createElement("div")

            element.classList.add("DeStagnate-component-parent")

            var _component = new Component(element, props)

            _component.mount()

            if (ref) {
                ref.current = _component
            }

            return element
        }

        exports.default = createDSComponent
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.6.0
         * @exports createElement function for DOM manipulation
         */

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
        exports._bindChildren = exports._unpackChildren = exports._bindProps = void 0

        /**
         * Binds children to element
         * @package
         * @param {Element} element - element to bind
         * @param {undefined | Object.<string, string | number>} props - props to bind with
         * @param {boolean} ns - if namespace element
         * @returns {void} void
         */

        exports._bindProps = function (element, props) {
            var ns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false

            if (props) {
                for (var _i3 = 0, _Object$entries2 = Object.entries(props); _i3 < _Object$entries2.length; _i3++) {
                    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                        key = _Object$entries2$_i[0],
                        val = _Object$entries2$_i[1]

                    if (typeof val === "string" || typeof val === "number") {
                        if (key === "innerHTML") {
                            element.innerHTML = val.toString()
                        } else if (ns) {
                            element.setAttributeNS(null, key, val.toString())
                        } else {
                            element.setAttribute(key, val.toString())
                        }
                    } else if (key.slice(0, 2) === "on") {
                        if (typeof val === "function") {
                            element.addEventListener(key.slice(2).toLowerCase(), val)
                        }
                    } else if (key === "ref" && _typeof(val) === "object" && "current" in val) {
                        val.current = element
                    } else {
                        console.warn("WARN: Invalid prop type \"".concat(_typeof(val), "\" for key \"").concat(key, "\". Skipping prop."))
                    }
                }
            }
        }

        exports._unpackChildren = function (children) {
            var newChildren = [],

                _iterator2 = _createForOfIteratorHelper(children),
                _step2

            try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var child = _step2.value

                    if (_typeof(child) === "object" && child instanceof Array) {
                        newChildren.push.apply(newChildren, _toConsumableArray(exports._unpackChildren(child)))
                    } else {
                        newChildren.push(child)
                    }
                }
            } catch (err) {
                _iterator2.e(err)
            } finally {
                _iterator2.f()
            }

            return newChildren
        }

        /**
         * Binds children to element
         * @package
         * @param {Element} element - element to bind
         * @param {undefined | ChildrenType} children - children to bind with
         * @returns {void} void
         */


        exports._bindChildren = function (element, children) {
            if (children || children === 0) {
                if (children instanceof Array) {
                    var _iterator3 = _createForOfIteratorHelper(children),
                        _step3

                    try {
                        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var child = _step3.value

                            if (typeof child === "string" || typeof child === "number") {
                                element.innerText = child.toString()
                            } else if (_typeof(child) === "object" && child instanceof Array) {
                                exports._unpackChildren(child).forEach((_child) => exports._bindChildren(element, _child))
                            } else {
                                element.appendChild(child)
                            }
                        }
                    } catch (err) {
                        _iterator3.e(err)
                    } finally {
                        _iterator3.f()
                    }
                } else if (typeof children === "string" || typeof children === "number") {
                    element.innerText = children.toString()
                } else {
                    element.appendChild(children)
                }
            }
        }

        /**
         * Creates a child element to DynamComponent
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */


        var createElement = function createElement (tagName, props, children) {
            var element = document.createElement(tagName)

            exports._bindProps(element, props)

            var _children = children

            for (var _len = arguments.length, childrenArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                childrenArgs[_key - 3] = arguments[_key]
            }

            if (children && childrenArgs) {
                if (_typeof(children) === "object" && children instanceof Array) {
                    _children = [].concat(_toConsumableArray(exports._unpackChildren(children)), _toConsumableArray(exports._unpackChildren(childrenArgs)))
                } else {
                    _children = [children].concat(_toConsumableArray(exports._unpackChildren(childrenArgs)))
                }
            }

            exports._bindChildren(element, _children)

            return element
        }

        exports.default = createElement
    }, function (module, exports, __webpack_require__) {


        /**
         * DeStagnate
         * A simple, ReactJS inspired library to create dynamic components within static sites easier
         * @copyright Copyright (C) 2020 Luke Zhang
         * @author Luke Zhang luke-zhang-04.github.io
         * @license MIT
         * @version 1.6.0
         * @exports createElementNS createElement for namespaced elements
         */

        Object.defineProperty(exports, "__esModule", {
            value: true
        })
        exports.createElementNS = void 0

        var createElement_1 = __webpack_require__(4)

        /**
         * Creates a child element to deStagnate
         * @param {string | null} namespaceURI - namespace uri
         * @param {string} tagName - name of HTML element
         * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
         * @param {undefined | Element | string | number | Array.<Element> | Array.<string> | Array.<number>} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
         * @returns {HTMLElement} html element
         */


        exports.createElementNS = function (namespaceURI, tagName, props, children) {
            var element = document.createElementNS(namespaceURI, tagName)

            createElement_1._bindProps(element, props, true)

            var _children = children

            for (var _len2 = arguments.length, childrenArgs = new Array(_len2 > 4 ? _len2 - 4 : 0), _key2 = 4; _key2 < _len2; _key2++) {
                childrenArgs[_key2 - 4] = arguments[_key2]
            }

            if (children && childrenArgs) {
                if (_typeof(children) === "object" && children instanceof Array) {
                    _children = [].concat(_toConsumableArray(createElement_1._unpackChildren(children)), _toConsumableArray(createElement_1._unpackChildren(childrenArgs)))
                } else {
                    _children = [children].concat(_toConsumableArray(createElement_1._unpackChildren(childrenArgs)))
                }
            }

            createElement_1._bindChildren(element, _children)

            return element
        }

        exports.default = exports.createElementNS
    }, function (module, exports, __webpack_require__) {
        

        Object.defineProperty(exports, "__esModule", {
            value: true
        })

        /**
         * Creates a reference for a nested component
         * @returns {Object<string, null>} empty ref object
         */

        var createRef = function createRef () {
            return {
                current: null
            }
        }

        /**
         * Creates a reference for a nested component
         * @returns {Object<string, null>} empty ref object
         */


        exports.default = createRef
    }
]))
