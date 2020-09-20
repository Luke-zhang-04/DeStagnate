/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @file DeStagnate development bundle
 */

"use strict";

var DeStagnate =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDSComponent", function() { return createDSComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementNS", function() { return createElementNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _createDSComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _createElementNS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />
/* eslint-disable max-lines */



/**
 * Creates nested DeStagnate component
 * @param Component - DeStagnate component
 * @param props - props of component
 * @returns parent of component
 */
const createDSComponent = _createDSComponent__WEBPACK_IMPORTED_MODULE_2__["default"];
/**
 * Creates a child element to deStagnate
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns html element
 */
const createElement = _createElement__WEBPACK_IMPORTED_MODULE_3__["default"];
/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
const createElementNS = _createElementNS__WEBPACK_IMPORTED_MODULE_4__["default"];
/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
const createRef = _createRef__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
const Component = _component__WEBPACK_IMPORTED_MODULE_1__["default"];
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
/* harmony default export */ __webpack_exports__["default"] = (_component__WEBPACK_IMPORTED_MODULE_1__["default"]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFFakMsOEJBQThCO0FBQzlCLE9BQU8sRUFBYyxPQUFPLElBQUksVUFBVSxFQUFDLE1BQU0sYUFBYSxDQUFBO0FBQzlELE9BQU8sVUFBVSxNQUFNLGFBQWEsQ0FBQTtBQUNwQyxPQUFPLGtCQUFrQixNQUFNLHFCQUFxQixDQUFBO0FBQ3BELE9BQU8sY0FBYyxNQUFNLGlCQUFpQixDQUFBO0FBQzVDLE9BQU8sZ0JBQWdCLE1BQU0sbUJBQW1CLENBQUE7QUFFaEQ7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQTtBQUVuRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFBO0FBRTNDOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLENBQUE7QUFHL0M7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQTtBQUVuQyx5REFBeUQ7QUFFekQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQTtBQUluQzs7Ozs7O0dBTUc7QUFDSCxlQUFlLFVBQVUsQ0FBQSJ9

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
const createRef = () => ({
    current: null,
});
/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
/* harmony default export */ __webpack_exports__["default"] = (createRef);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZVJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsR0FBeUMsRUFBRSxDQUFDLENBQUM7SUFDbEUsT0FBTyxFQUFFLElBQUk7Q0FDaEIsQ0FBQyxDQUFBO0FBRUY7OztHQUdHO0FBQ0gsZUFBZSxTQUFTLENBQUEifQ==

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeStagnate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _private_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _private_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports DeStagnate main destagnate class
 * @file DeStagnate component class
 * @preserve
 */
/* eslint-disable max-lines */
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
class DeStagnate extends _private_events__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * Construct class component
     * @public
     * @constructor
     * @param parent - parent of this element
     * @param props - element properties; works like React Props
     * @param shouldSkipParentCheck - warn or throw error if parent element already has children
     */
    constructor(parent, props, shouldSkipParentCheck = false) {
        super();
        this.props = props;
        /**
         * If strict mode should be used. True by default
         * @private
         * @instance
         */
        this._strict = true;
        /**
         * State of component. Works similar React State
         * @type {undefined | Object.<string, unknown>}
         * @private
         * @instance
         */
        this._state = {};
        /**
         * If initial state was set in initializer
         * Do not throw error with direct state setting
         * @private
         * @instance
         */
        this._didSetInitialState = false;
        /**
         * If component is mounted
         * @private
         * @instance
         */
        this._didMount = false;
        /**
         * What to call before component update (state mutation)
         * @public
         * @instance
         * @param {Props} prevProps - previous props
         * @param prevState - previous state
         * @returns void
         */
        this.getSnapshotBeforeUpdate = (prevProps, prevState) => [prevProps, prevState];
        /**
         * Turn on strict mode
         * @public
         * @instance
         * @returns void
         */
        this.useStrict = () => {
            this._strict = true;
        };
        /**
         * Turn off strict mode
         * @public
         * @instance
         * @returns void
         */
        this.disableStrict = () => {
            this._strict = false;
        };
        /**
         * Forces a component to update
         * Follows the same component updating procedure as setState without modifying state
         * @public
         * @instance
         * @readonly
         * @returns returns error if error is thrown
         */
        this.forceUpdate = () => {
            try {
                this.componentDidUpdate();
                if (this._parent === undefined) {
                    throw new Error(`ERROR: code 3. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}.`);
                }
                this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));
                this._update(this._execRender());
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
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
        this.setState = (obj) => {
            try {
                this.componentWillUpdate();
                if (this._parent === undefined) {
                    throw new Error(`ERROR: code 3. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}.`);
                }
                if (this._strict) {
                    this._checkKeys(obj);
                }
                this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));
                Object.assign(this._state, obj);
                const renderedContent = this.shouldComponentUpdate()
                    ? this._execRender()
                    : undefined;
                this._update(renderedContent);
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
                return err;
            }
        };
        /* eslint-disable @typescript-eslint/member-ordering, max-len */
        /**
         * Initial mounting to be manually called
         * @public
         * @instance
         * @readonly
         * @param parent - parent element to mount with; optional
         * @returns - result of append child to parent element
         */
        this.mountComponent = (parent) => {
            try {
                if (parent !== undefined) {
                    this.parent = parent;
                }
                if (this._parent === undefined) {
                    throw new Error(`ERROR: code 3. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}.`);
                }
                const component = this.render();
                this._didSetInitialState = true;
                this.componentWillMount();
                if (component === null) {
                    throw new Error(`ERROR: code 5. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}.`);
                }
                this.bindEventListeners(this._parent);
                this._didMount = true;
                this.componentDidMount();
                if (typeof (component) === "object" && component instanceof Array) {
                    return component.map((element) => (this._parent.appendChild(element)));
                }
                return this._parent.appendChild(component);
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
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
        this.mount = this.mountComponent;
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns - void
         */
        this.unmountComponent = () => {
            try {
                if (this._parent === undefined) {
                    this.componentDidWarn(`WARN: code 4. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}.`);
                    return;
                }
                this.componentWillUnmount();
                this.unbindEventListeners(this._parent);
                this._removeChildren();
                this._didMount = false;
            }
            catch (err) /* istanbul ignore next */ {
                this.componentDidCatch(err);
            }
        };
        /**
         * Unmounting to be manually called
         * @public
         * @instance
         * @readonly
         * @returns - void
         */
        this.unmount = this.unmountComponent;
        /* eslint-enable max-len, @typescript-eslint/member-ordering */
        /**
         * Removes children from this._parent
         * @private
         * @instance
         * @return void
         */
        this._removeChildren = () => {
            if (this._parent === undefined) {
                throw new Error(`ERROR: code 3. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}.`);
            }
            while (this._parent.firstChild) {
                if (this._parent.lastChild) {
                    this._parent.removeChild(this._parent.lastChild);
                }
            }
        };
        /**
         * Executes new render
         * @private
         * @instance
         * @returns rendered content
         */
        this._execRender = () => {
            this._removeChildren();
            return this.render();
        };
        /**
         * Checks new state assignment to make sure no new keys are assigned
         * @private
         * @instance
         * @param obj - new state
         * @returns void
         */
        this._checkKeys = (obj) => {
            for (const key of Object.keys(obj)) {
                if (!Object.keys(this.state).includes(key)) {
                    // eslint-disable-next-line
                    this.componentDidWarn(`WARN: code 6. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}. Params: ${key}, ${JSON.stringify(Object.keys(this.state))}.`);
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
        this._update = (renderedContent) => {
            if (typeof (renderedContent) === "object" &&
                renderedContent instanceof Array) {
                for (const element of renderedContent) {
                    this._parent.appendChild(element);
                }
            }
            else if (renderedContent) {
                this._parent.appendChild(renderedContent);
            }
            if (renderedContent) {
                this.componentDidUpdate();
            }
        };
        if (parent &&
            parent.childElementCount > 0 &&
            !shouldSkipParentCheck &&
            this._strict) {
            this.componentDidCatch(new Error(`ERROR: code 1. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}. Params: ${parent.tagName.toLowerCase()}`));
        }
        this._parent = parent;
    }
    /**
     * Public getState getter as this.state itself is protected
     * @public
     * @returns component state
     */
    get getState() {
        return this.state;
    }
    /**
     * Get component state
     * @protected
     * @returns component state
     */
    get state() {
        return this._state;
    }
    /**
     * Sets component state
     * WARN: do not use this method to mutate the state directly
     * @protected
     * @param obj - state to set
     */
    set state(obj) {
        if (this._didSetInitialState && this._strict) {
            this.componentDidCatch(new Error(`ERROR: code 2. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}.`));
            // eslint-disable-next-line
            this.componentDidWarn(`ERROR: code 2. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}.`);
            this.setState(obj);
        }
        else {
            this._state = obj;
            this._didSetInitialState = true;
        }
    }
    /**
     * Public getProps getter as this.props itself is protected
     * @public
     * @returns component props
     */
    get getProps() {
        return this.props;
    }
    /**
     * Set the parent of this component
     * @public
     * @param element - parent element
     * @returns void
     */
    set parent(element) {
        if (element &&
            element.childElementCount > 0 &&
            this._strict) {
            this.componentDidCatch(new Error(`ERROR: code 1. See ${_private_url__WEBPACK_IMPORTED_MODULE_1__["default"]}. Params: ${element.tagName.toLowerCase()}`));
        }
        this._parent = element;
    }
    /**
     * Get the parent element of this component
     * @public
     * @returns parent
     */
    get parent() {
        return this._parent;
    }
    /**
     * Get didMount value publicly
     * @public
     * @returns if mounted
     */
    get didMount() {
        return this._didMount;
    }
}
class Component extends DeStagnate {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsOEJBQThCO0FBRTlCLE9BQU8sSUFBSSxNQUFNLG1CQUFtQixDQUFBO0FBQ3BDLE9BQU8sR0FBRyxNQUFNLGdCQUFnQixDQUFBO0FBSWhDOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBQyxPQUFPLE9BQWdCLFVBRTFCLFNBQVEsSUFBSTtJQXVDWjs7Ozs7OztPQU9HO0lBQ0gsWUFDSSxNQUFvQixFQUNWLEtBQWEsRUFDdkIscUJBQXFCLEdBQUcsS0FBSztRQUU3QixLQUFLLEVBQUUsQ0FBQTtRQUhHLFVBQUssR0FBTCxLQUFLLENBQVE7UUEvQzNCOzs7O1dBSUc7UUFDSyxZQUFPLEdBQUcsSUFBSSxDQUFBO1FBRXRCOzs7OztXQUtHO1FBQ0ssV0FBTSxHQUFVLEVBQVcsQ0FBQTtRQUVuQzs7Ozs7V0FLRztRQUNLLHdCQUFtQixHQUFHLEtBQUssQ0FBQTtRQVNuQzs7OztXQUlHO1FBQ0ssY0FBUyxHQUFHLEtBQUssQ0FBQTtRQTRCekI7Ozs7Ozs7V0FPRztRQUNJLDRCQUF1QixHQUFHLENBQzdCLFNBQWdCLEVBQ2hCLFNBQWdCLEVBQ0YsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBRTNDOzs7OztXQUtHO1FBQ0ksY0FBUyxHQUFHLEdBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUN2QixDQUFDLENBQUE7UUFFRDs7Ozs7V0FLRztRQUNJLGtCQUFhLEdBQUcsR0FBUyxFQUFFO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ3hCLENBQUMsQ0FBQTtRQXFGRDs7Ozs7OztXQU9HO1FBQ2EsZ0JBQVcsR0FBRyxHQUFpQixFQUFFO1lBQzdDLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLGtCQUFr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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var _eventsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports Events
 * @package
 */
/* istanbul ignore next */
class Events extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor() {
        super(...arguments);
        /**
         * Focus event
         * @protected
         * @instance
         * @returns
         */
        this.onFocus = undefined;
        /**
         * Blur event
         * @protected
         * @instance
         * @returns
         */
        this.onBlur = undefined;
        /**
         * Focus in event
         * @protected
         * @instance
         * @returns
         */
        this.onFocusIn = undefined;
        /**
         * Focus out event
         * @protected
         * @instance
         * @returns
         */
        this.onFocusOut = undefined;
        /**
         * Animation start event
         * @protected
         * @instance
         * @returns
         */
        this.onAnimationStart = undefined;
        /**
         * Animation cancel event
         * @protected
         * @instance
         * @returns
         */
        this.onAnimationCancel = undefined;
        /**
         * Animation end event
         * @protected
         * @instance
         * @returns
         */
        this.onAnimationEnd = undefined;
        /**
         * Animation iteration event
         * @protected
         * @instance
         * @returns
         */
        this.onAnimationIteration = undefined;
        /**
         * Transition start event
         * @protected
         * @instance
         * @returns
         */
        this.onTransitionStart = undefined;
        /**
         * Transition cancel event
         * @protected
         * @instance
         * @returns
         */
        this.onTransitionCancel = undefined;
        /**
         * Transition end event
         * @protected
         * @instance
         * @returns
         */
        this.onTransitionEnd = undefined;
        /**
         * Transition run event
         * @protected
         * @instance
         * @returns
         */
        this.onTransitionRun = undefined;
        /**
         * Auxillary click event
         * @protected
         * @instance
         * @returns
         */
        this.onAuxClick = undefined;
        /**
         * Click event
         * @protected
         * @instance
         * @returns
         */
        this.onClick = undefined;
        /**
         * Double click event
         * @protected
         * @instance
         * @returns
         */
        this.onDblClick = undefined;
        /**
         * Mousedown event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseDown = undefined;
        /**
         * Mouse enter event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseEnter = undefined;
        /**
         * Mouse leave event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseLeave = undefined;
        /**
         * Mouse move event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseMove = undefined;
        /**
         * Mouseover event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseOver = undefined;
        /**
         * Mouseout event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseOut = undefined;
        /**
         * Mouseup event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseUp = undefined;
        /**
         * Binds event listeners event
         * Do not call manually
         * @protected
         * @instance
         * @pacakge
         * @param element - element to bind listeners to
         * @returns void
         */
        this.bindEventListeners = (element) => {
            this._eventListener(element.addEventListener);
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
        this.unbindEventListeners = (element) => {
            this._eventListener(element.removeEventListener);
        };
        this._eventListener = (eventListener) => {
            for (const [event, callback] of Object(_eventsUtils__WEBPACK_IMPORTED_MODULE_0__["default"])(this._events())) {
                if (callback !== undefined) {
                    eventListener(event, callback);
                }
            }
        };
        this._events = () => ({
            focus: this.onFocus,
            blur: this.onBlur,
            focusin: this.onFocusIn,
            focusout: this.onFocusOut,
            animationstart: this.onAnimationStart,
            animationcancel: this.onAnimationCancel,
            animationend: this.onAnimationEnd,
            animationiteration: this.onAnimationIteration,
            transitionstart: this.onTransitionStart,
            transitioncancel: this.onTransitionCancel,
            transitionend: this.onTransitionEnd,
            transitionrun: this.onTransitionRun,
            auxclick: this.onAuxClick,
            click: this.onClick,
            dblclick: this.onDblClick,
            mousedown: this.onMouseDown,
            mouseenter: this.onMouseEnter,
            mouseleave: this.onMouseLeave,
            mousemove: this.onMouseMove,
            mouseover: this.onMouseOver,
            mouseout: this.onMouseOut,
            mouseup: this.onMouseUp,
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2V2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcml2YXRlL19ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBRUgsT0FBTyxhQUF1RCxNQUFNLGdCQUFnQixDQUFBO0FBQ3BGLE9BQU8sYUFBYSxNQUFNLFNBQVMsQ0FBQTtBQUduQywwQkFBMEI7QUFDMUIsTUFBTSxDQUFDLE9BQU8sT0FBZ0IsTUFBTyxTQUFRLGFBQWE7SUFBMUQ7O1FBRUk7Ozs7O1dBS0c7UUFDTyxZQUFPLEdBQWdCLFNBQVMsQ0FBQTtRQUUxQzs7Ozs7V0FLRztRQUNPLFdBQU0sR0FBZ0IsU0FBUyxDQUFBO1FBRXpDOzs7OztXQUtHO1FBQ08sY0FBUyxHQUFnQixTQUFTLENBQUE7UUFFNUM7Ozs7O1dBS0c7UUFDTyxlQUFVLEdBQWdCLFNBQVMsQ0FBQTtRQUU3Qzs7Ozs7V0FLRztRQUNPLHFCQUFnQixHQUFnQixTQUFTLENBQUE7UUFFbkQ7Ozs7O1dBS0c7UUFDTyxzQkFBaUIsR0FBZ0IsU0FBUyxDQUFBO1FBRXBEOzs7OztXQUtHO1FBQ08sbUJBQWMsR0FBZ0IsU0FBUyxDQUFBO1FBRWpEOzs7OztXQUtHO1FBQ08seUJBQW9CLEdBQWdCLFNBQVMsQ0FBQTtRQUd2RDs7Ozs7V0FLRztRQUNPLHNCQUFpQixHQUFnQixTQUFTLENBQUE7UUFFcEQ7Ozs7O1dBS0c7UUFDTyx1QkFBa0IsR0FBZ0IsU0FBUyxDQUFBO1FBRXJEOzs7OztXQUtHO1FBQ08sb0JBQWUsR0FBZ0IsU0FBUyxDQUFBO1FBRWxEOzs7OztXQUtHO1FBQ08sb0JBQWUsR0FBZ0IsU0FBUyxDQUFBO1FBR2xEOzs7OztXQUtHO1FBQ08sZUFBVSxHQUFnQixTQUFTLENBQUE7UUFFN0M7Ozs7O1dBS0c7UUFDTyxZQUFPLEdBQWdCLFNBQVMsQ0FBQTtRQUUxQzs7Ozs7V0FLRztRQUNPLGVBQVUsR0FBZ0IsU0FBUyxDQUFBO1FBRTdDOzs7OztXQUtH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

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventsList", function() { return eventsList; });
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @package
 */
/**
 * Returns array of events
 * Not a generator because Babel Regenerator Runtime causes dist files to be wayyyy to large
 * @param events - events object
 */
const eventsList = (events) => {
    const res = [];
    for (const key of Object.keys(events)) {
        res.push([key, events[key]]);
    }
    return res;
};
/* harmony default export */ __webpack_exports__["default"] = (eventsList);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2V2ZW50c1V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ByaXZhdGUvX2V2ZW50c1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBc0NIOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FDdEIsTUFBa0IsRUFDZSxFQUFFO0lBQ25DLE1BQU0sR0FBRyxHQUFzQyxFQUFFLENBQUE7SUFFakQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUF1QixFQUFFLE1BQU0sQ0FBQyxHQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3ZFO0lBRUQsT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFDLENBQUE7QUFFRCxlQUFlLFVBQVUsQ0FBQSJ9

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preset; });
/* harmony import */ var _createDSComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _createElementNS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _createRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports Preset - base for a component
 * @package
 */


/* istanbul ignore next */
/**
 * Base class for components
 */
class Preset {
    constructor() {
        /**
         * Creates nested DeStagnate component
         * @public
         * @instance
         * @readonly
         * @param Component - DeStagnate component
         * @param props - props of component
         * @returns parent of component
         */
        this.createDSComponent = _createDSComponent__WEBPACK_IMPORTED_MODULE_0__["default"];
        /**
         * Creates an HTML Element
         * @public
         * @instance
         * @readonly
         * @param tagName - name of HTML element
         * @param props - element properties, such as class, innerHTML, id, style, etc
         * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
         * @param childrenRest - rest parameter of children
         * @returns html element
         */
        this.createElement = _createElement__WEBPACK_IMPORTED_MODULE_1__["default"];
        /**
         * Creates a child element to deStagnate
         * @public
         * @instance
         * @readonly
         * @param namespaceURI - namespace uri
         * @param tagName - name of HTML element
         * @param props - element properties, such as class, innerHTML, id, style, etc
         * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
         * @param childrenRest - rest parameter of children
         * @returns html element
         */
        this.createElementNS = _createElementNS__WEBPACK_IMPORTED_MODULE_2__["default"];
        /**
         * Creates a reference for a nested component
         * @public
         * @instance
         * @readonly
         * @returns empty ref object
         */
        this.createRef = _createRef__WEBPACK_IMPORTED_MODULE_3__["default"];
        /**
         * Called when component catches error. Default behaviour is console.error
         * @param error - error object with info
         * @returns void
         */
        this.componentDidCatch = (error) => console.error(error);
        /**
         * What to call after component mounting
         * @public
         * @instance
         * @returns void
         */
        this.componentDidMount = () => undefined;
        /**
         * What to call after component update (state mutation)
         * @public
         * @instance
         * @returns void
         */
        this.componentDidUpdate = () => undefined;
        /**
         * Called when component catches a warning. Default behaviour is console.warn
         * @param msg - warning message
         * @returns void
         */
        this.componentDidWarn = (msg) => console.warn(msg);
        /**
         * What to call before component mounting
         * @public
         * @instance
         * @returns void
         */
        this.componentWillMount = () => undefined;
        /**
         * What to call before component unmounting
         * @public
         * @instance
         * @returns void
         */
        this.componentWillUnmount = () => undefined;
        /**
         * What to call before component update (state mutation)
         * @public
         * @instance
         * @returns void
         */
        this.componentWillUpdate = () => undefined;
        /**
         * Called before component is updated
         * @returns whether or not component should update/re-render
         */
        this.shouldComponentUpdate = () => true;
        /**
         * Rendering HTML, must be part of extended class
         * @public
         * @instance
         * @abstract
         * @returns if returns null error will be thrown
         */
        this.render = () => null;
    }
}
/**
 * Creates nested DeStagnate component
 * @public
 * @static
 * @readonly
 * @param Component - DeStagnate component
 * @param props - props of component
 * @returns parent of component
 */
Preset.createDSComponent = _createDSComponent__WEBPACK_IMPORTED_MODULE_0__["default"];
/**
 * Creates an HTML Element
 * @public
 * @static
 * @readonly
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
Preset.createElement = _createElement__WEBPACK_IMPORTED_MODULE_1__["default"];
/**
 * Creates a child element to deStagnate
 * @public
 * @static
 * @readonly
 * @param namespaceURI - namespace uri
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
Preset.createElementNS = _createElementNS__WEBPACK_IMPORTED_MODULE_2__["default"];
/**
 * Creates a reference for a nested component
 * @public
 * @static
 * @readonly
 * @returns empty ref object
 */
Preset.createRef = _createRef__WEBPACK_IMPORTED_MODULE_3__["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Jhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcHJpdmF0ZS9fYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0dBU0c7QUFFSCxPQUFPLEVBQUMsT0FBTyxJQUFJLGtCQUFrQixFQUFDLE1BQU0sc0JBQXNCLENBQUE7QUFDbEUsT0FBTyxFQUFDLE9BQU8sSUFBSSxjQUFjLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQTtBQUMxRCxPQUFPLEVBQUMsT0FBTyxJQUFJLGdCQUFnQixFQUFDLE1BQU0sb0JBQW9CLENBQUE7QUFDOUQsT0FBTyxFQUFDLE9BQU8sSUFBSSxVQUFVLEVBQUMsTUFBTSxjQUFjLENBQUE7QUFJbEQsMEJBQTBCO0FBQzFCOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE9BQU8sT0FBZ0IsTUFBTTtJQUFwQztRQWlESTs7Ozs7Ozs7V0FRRztRQUNhLHNCQUFpQixHQUFHLGtCQUFrQixDQUFBO1FBRXREOzs7Ozs7Ozs7O1dBVUc7UUFDYSxrQkFBYSxHQUFHLGNBQWMsQ0FBQTtRQUU5Qzs7Ozs7Ozs7Ozs7V0FXRztRQUNhLG9CQUFlLEdBQUcsZ0JBQWdCLENBQUE7UUFFbEQ7Ozs7OztXQU1HO1FBQ2EsY0FBUyxHQUFHLFVBQVUsQ0FBQTtRQUV0Qzs7OztXQUlHO1FBQ0ksc0JBQWlCLEdBQUcsQ0FBQyxLQUFZLEVBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFdkU7Ozs7O1dBS0c7UUFDSSxzQkFBaUIsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFaEQ7Ozs7O1dBS0c7UUFDSSx1QkFBa0IsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFakQ7Ozs7V0FJRztRQUNJLHFCQUFnQixHQUFHLENBQUMsR0FBVyxFQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRWxFOzs7OztXQUtHO1FBQ0ksdUJBQWtCLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRWpEOzs7OztXQUtHO1FBQ0kseUJBQW9CLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRW5EOzs7OztXQUtHO1FBQ0ksd0JBQW1CLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRWxEOzs7V0FHRztRQUNJLDBCQUFxQixHQUFHLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQTtRQUVsRDs7Ozs7O1dBTUc7UUFDYSxXQUFNLEdBQUcsR0FBZSxFQUFFLENBQUMsSUFBSSxDQUFBO0lBRW5ELENBQUM7O0FBbktHOzs7Ozs7OztHQVFHO0FBQ29CLHdCQUFpQixHQUFHLGtCQUFrQixDQUFBO0FBRTdEOzs7Ozs7Ozs7O0dBVUc7QUFDb0Isb0JBQWEsR0FBRyxjQUFjLENBQUE7QUFFckQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDb0Isc0JBQWUsR0FBRyxnQkFBZ0IsQ0FBQTtBQUV6RDs7Ozs7O0dBTUc7QUFDb0IsZ0JBQVMsR0FBRyxVQUFVLENBQUEifQ==

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports createDSComponent add nested component for DeStagnate components
 */
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Creates nested DeStagnate component
 * @deprecated do not use this function, since 1.6.1
 * This only exists to adhere to semver
 * @param Component - DeStagnate component
 * @param props - props of component
 * @param ref - ref object
 * @returns parent of component
 */
const createDSComponent = (Component, props, ref) => {
    const element = document.createElement("div");
    element.classList.add("DeStagnate-component-parent");
    const _component = new Component(element, props);
    _component.mount();
    if (ref) {
        ref.current = _component;
    }
    return element;
};
/* harmony default export */ __webpack_exports__["default"] = (createDSComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRFNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlRFNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFVSCx5REFBeUQ7QUFDekQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLGlCQUFpQixHQUFHLENBSWxCLFNBQThDLEVBQzlDLEtBQWEsRUFDYixHQUFtQyxFQUNyQixFQUFFO0lBQ3BCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFN0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtJQUVwRCxNQUFNLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFFaEQsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBRWxCLElBQUksR0FBRyxFQUFFO1FBQ0wsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUE7S0FDM0I7SUFFRCxPQUFPLE9BQU8sQ0FBQTtBQUNsQixDQUFDLENBQUE7QUFFRCxlQUFlLGlCQUFpQixDQUFBIn0=

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports createElement function for DOM manipulation
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

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
function createElement(tagNameOrComponent, props, children, ...childrenArgs) {
    let _children = children;
    if (children && childrenArgs) {
        if (children instanceof Array) {
            _children = [
                ...Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["unpackChildren"])(children),
                ...Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["unpackChildren"])(childrenArgs),
            ];
        }
        else {
            _children = [children, ...Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["unpackChildren"])(childrenArgs)];
        }
    }
    if (typeof (tagNameOrComponent) === "string") {
        const element = document.createElement(tagNameOrComponent);
        Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["bindProps"])(element, props);
        Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["bindChildren"])(element, _children);
        return element;
    }
    else if (typeof (tagNameOrComponent) === "function") {
        return tagNameOrComponent(props, _children);
    }
    return Error("tagNameOrComponent is of invalid type.");
}
/* harmony default export */ __webpack_exports__["default"] = (createElement);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztHQVFHO0FBQ0gsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUVqQyxPQUFPLEVBSUgsWUFBWSxJQUFJLGFBQWEsRUFDN0IsU0FBUyxJQUFJLFVBQVUsRUFDdkIsY0FBYyxJQUFJLGVBQWUsRUFDcEMsTUFBTSwrQkFBK0IsQ0FBQTtBQXNDdEM7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FJekIsa0JBR1ksRUFDWixLQUE2QixFQUM3QixRQUF1QixFQUN2QixHQUFHLFlBQStCO0lBRWxDLElBQUksU0FBUyxHQUE2QixRQUFRLENBQUE7SUFFbEQsSUFBSSxRQUFRLElBQUksWUFBWSxFQUFFO1FBQzFCLElBQUksUUFBUSxZQUFZLEtBQUssRUFBRTtZQUMzQixTQUFTLEdBQUc7Z0JBQ1IsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO2dCQUM1QixHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUM7YUFDbkMsQ0FBQTtTQUNKO2FBQU07WUFDSCxTQUFTLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtTQUMzRDtLQUNKO0lBRUQsSUFBSSxPQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDekMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBRTFELFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBMEIsQ0FBQyxDQUFBO1FBRS9DLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFFakMsT0FBTyxPQUFPLENBQUE7S0FDakI7U0FBTSxJQUFJLE9BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLFVBQVUsRUFBRTtRQUNsRCxPQUFPLGtCQUFrQixDQUFDLEtBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQTtLQUNuRDtJQUVELE9BQU8sS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7QUFDMUQsQ0FBQztBQUVELGVBQWUsYUFBYSxDQUFBIn0=

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindProps", function() { return bindProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackChildren", function() { return unpackChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindChildren", function() { return bindChildren; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @file share functions and types for createElement and it's variants
 */
/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param props - props to bind with
 * @param ns - if namespace element
 * @returns void
 */
const bindProps = (element, props, ns = false) => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (typeof (val) === "string" || typeof (val) === "number") {
                if (key === "innerHTML") {
                    element.innerHTML = val.toString();
                }
                else if (ns) {
                    element.setAttributeNS(null, key, val.toString());
                }
                else {
                    element.setAttribute(key, val.toString());
                }
            }
            else if (key.slice(0, 2) === "on") { // Works such as onClick, onAnimationEnd, etc.
                if (typeof (val) === "function") {
                    element.addEventListener(key.slice(2)
                        .toLowerCase(), val);
                }
            }
            else if (key === "ref" &&
                typeof (val) === "object" &&
                "current" in val) {
                val.current = element;
            }
            else if (val !== undefined) {
                console.warn(`WARN: Code 7. See ${_url__WEBPACK_IMPORTED_MODULE_1__["default"]}. Params: ${typeof (val)}, ${key}`);
            }
        }
    }
};
const unpackChildren = (children) => {
    const newChildren = [];
    for (const child of children) {
        if (typeof (child) === "object" && child instanceof Array) {
            newChildren.push(...unpackChildren(child));
        }
        else {
            newChildren.push(child);
        }
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
const bindChildren = (element, children) => {
    if (children !== null && children !== undefined) {
        if (children instanceof Array) {
            for (const child of children) {
                bindChildren(element, child);
            }
        }
        else if (typeof (children) === "string" ||
            typeof (children) === "number") {
            element.innerText = children.toString();
        }
        else if (children instanceof ___WEBPACK_IMPORTED_MODULE_0__["default"]) {
            if (!children.didMount && element instanceof window.HTMLElement) {
                children.mount(element);
                return;
            }
            else if (!(element instanceof window.HTMLElement)) {
                throw new Error(`ERROR: code 8. See ${_url__WEBPACK_IMPORTED_MODULE_1__["default"]}`);
            }
            if (children.parent !== element) {
                children.parent = element;
            }
            children.forceUpdate();
        }
        else {
            element.appendChild(children);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2NyZWF0ZUVsZW1lbnRVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCxPQUFPLFVBQVUsTUFBTSxJQUFJLENBQUE7QUFFM0IsT0FBTyxHQUFHLE1BQU0sUUFBUSxDQUFBO0FBeUV4Qjs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQ3JCLE9BQWdCLEVBQ2hCLEtBQXlCLEVBQ3pCLEVBQUUsR0FBRyxLQUFLLEVBQ04sRUFBRTtJQUNOLElBQUksS0FBSyxFQUFFO1FBQ1AsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxPQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ3RELElBQUksR0FBRyxLQUFLLFdBQVcsRUFBRTtvQkFDckIsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7aUJBQ3JDO3FCQUFNLElBQUksRUFBRSxFQUFFO29CQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtpQkFDcEQ7cUJBQU07b0JBQ0gsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7aUJBQzVDO2FBQ0o7aUJBQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRSw4Q0FBOEM7Z0JBQ2pGLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFVBQVUs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

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @file share functions and types for createElement and it's variants
 */
const url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";
/* harmony default export */ __webpack_exports__["default"] = (url);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX3VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcml2YXRlL191cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUc7QUFFSCxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsd0RBQXdELENBQUE7QUFFM0UsZUFBZSxHQUFHLENBQUEifQ==

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementNS", function() { return createElementNS; });
/* harmony import */ var _private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports createElementNS createElement for namespaced elements
 */
/**
 * Creates a child element to deStagnate
 * @param namespaceURI - namespace uri
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
const createElementNS = (namespaceURI, tagName, props, children, ...childrenRest) => {
    const element = document.createElementNS(namespaceURI, tagName);
    Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["bindProps"])(element, props, true);
    let _children = children;
    if (children && childrenRest) {
        if (typeof (children) === "object" && children instanceof Array) {
            _children = [
                ...Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["unpackChildren"])(children),
                ...Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["unpackChildren"])(childrenRest),
            ];
        }
        else {
            _children = [children, ...Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["unpackChildren"])(childrenRest)];
        }
    }
    Object(_private_createElementUtils__WEBPACK_IMPORTED_MODULE_0__["bindChildren"])(element, _children);
    return element;
};
/* harmony default export */ __webpack_exports__["default"] = (createElementNS);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudE5TLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUVsZW1lbnROUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FRRztBQUVILE9BQU8sRUFHSCxZQUFZLElBQUksYUFBYSxFQUM3QixTQUFTLElBQUksVUFBVSxFQUN2QixjQUFjLElBQUksZUFBZSxFQUNwQyxNQUFNLCtCQUErQixDQUFBO0FBRXRDOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQzNCLFlBQStHLEVBQy9HLE9BQTBDLEVBQzFDLEtBQXdDLEVBQ3hDLFFBQXVCLEVBQ3ZCLEdBQUcsWUFBK0IsRUFDM0IsRUFBRTtJQUNULE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBRS9ELFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRWhDLElBQUksU0FBUyxHQUE2QixRQUFRLENBQUE7SUFFbEQsSUFBSSxRQUFRLElBQUksWUFBWSxFQUFFO1FBQzFCLElBQUksT0FBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLFFBQVEsSUFBSSxRQUFRLFlBQVksS0FBSyxFQUFFO1lBQzVELFNBQVMsR0FBRztnQkFDUixHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQzVCLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQzthQUNuQyxDQUFBO1NBQ0o7YUFBTTtZQUNILFNBQVMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1NBQzNEO0tBQ0o7SUFFRCxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFBO0lBRWpDLE9BQU8sT0FBTyxDQUFBO0FBQ2xCLENBQUMsQ0FBQTtBQUVELGVBQWUsZUFBZSxDQUFBIn0=

/***/ })
/******/ ]);
