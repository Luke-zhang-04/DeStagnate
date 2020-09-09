(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const destagnate_1 = __importStar(__webpack_require__(1));
class RefExample extends destagnate_1.default {
    constructor() {
        super(...arguments);
        this._inputGroupPrepend = () => destagnate_1.default.createElement("div", { class: "input-group-prepend" },
            destagnate_1.default.createElement("span", { class: "input-group-text" }, "Input"));
        this._formRef = destagnate_1.createRef();
        this._getInputValues = () => {
            var _a;
            const val = (_a = this._formRef.current) === null || _a === void 0 ? void 0 : _a.value;
            alert(`INPUT VALUE: "${val}"`);
        };
        this.render = () => [
            destagnate_1.default.createElement("div", { class: "input-group" },
                this._inputGroupPrepend(),
                destagnate_1.default.createElement("input", { type: "text", class: "form-control mb-3", placeholder: "Insert text here", ref: this._formRef })),
            destagnate_1.default.createElement("button", { class: "btn btn-light mb-3", onClick: this._getInputValues }, "See Input Value")
        ];
    }
}
const refParent = document.getElementById("ref");
if (refParent) {
    const refComponent = new RefExample(refParent);
    refComponent.mount();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlZi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQWdEO0FBRWhELE1BQU0sVUFBVyxTQUFRLG9CQUFVO0lBQW5DOztRQUVZLHVCQUFrQixHQUFHLEdBQWdCLEVBQUUsQ0FBQyw0Q0FBSyxLQUFLLEVBQUMscUJBQXFCO1lBQzVFLDZDQUFNLEtBQUssRUFBQyxrQkFBa0IsWUFFdkIsQ0FDTCxDQUFBO1FBRUUsYUFBUSxHQUFHLHNCQUFTLEVBQW9CLENBQUE7UUFFeEMsb0JBQWUsR0FBRyxHQUFHLEVBQUU7O1lBQzNCLE1BQU0sR0FBRyxTQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTywwQ0FBRSxLQUFLLENBQUE7WUFFeEMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQTtRQUVNLFdBQU0sR0FBRyxHQUFrQixFQUFFLENBQUM7WUFDakMsNENBQUssS0FBSyxFQUFDLGFBQWE7Z0JBQ25CLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDMUIsOENBQ0ksSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUMsbUJBQW1CLEVBQ3pCLFdBQVcsRUFBQyxrQkFBa0IsRUFDOUIsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEdBQ2IsQ0FDUDtZQUNOLCtDQUNJLEtBQUssRUFBQyxvQkFBb0IsRUFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFlLHNCQUNSO1NBQzVCLENBQUE7SUFFTCxDQUFDO0NBQUE7QUFFRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBRWhELElBQUksU0FBUyxFQUFFO0lBQ1gsTUFBTSxZQUFZLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFOUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFBO0NBQ3ZCIn0=

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
// eslint-disable-next-line
/// <reference types="../jsx" />
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = exports.createRef = exports.createElementNS = exports.createElement = exports.createDSComponent = void 0;
/* eslint-disable max-lines */
const createRef_1 = __importDefault(__webpack_require__(2));
const component_1 = __importDefault(__webpack_require__(3));
const createDSComponent_1 = __importDefault(__webpack_require__(6));
const createElement_1 = __importDefault(__webpack_require__(7));
const createElementNS_1 = __importDefault(__webpack_require__(8));
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
 * Creates an HTML Element
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
/* eslint-disable @typescript-eslint/naming-convention */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFDSCwyQkFBMkI7QUFDM0IsZ0NBQWdDOzs7Ozs7QUFFaEMsOEJBQThCO0FBQzlCLDREQUE4RDtBQUM5RCw0REFBb0M7QUFDcEMsNEVBQW9EO0FBQ3BELG9FQUE0QztBQUM1Qyx3RUFBZ0Q7QUFFaEQ7Ozs7O0dBS0c7QUFDVSxRQUFBLGlCQUFpQixHQUFHLDJCQUFrQixDQUFBO0FBRW5EOzs7Ozs7R0FNRztBQUNVLFFBQUEsYUFBYSxHQUFHLHVCQUFjLENBQUE7QUFFM0M7Ozs7Ozs7R0FPRztBQUNVLFFBQUEsZUFBZSxHQUFHLHlCQUFnQixDQUFBO0FBRy9DOzs7R0FHRztBQUNVLFFBQUEsU0FBUyxHQUFHLG1CQUFVLENBQUE7QUFFbkMseURBQXlEO0FBRXpEOzs7Ozs7R0FNRztBQUNVLFFBQUEsU0FBUyxHQUFHLG1CQUFVLENBQUE7QUFJbkM7Ozs7OztHQU1HO0FBQ0gsa0JBQWUsbUJBQVUsQ0FBQSJ9

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = createRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUmVmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZVJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWVBOzs7R0FHRztBQUNILE1BQU0sU0FBUyxHQUFHLEdBQXlDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELE9BQU8sRUFBRSxJQUFJO0NBQ2hCLENBQUMsQ0FBQTtBQUVGOzs7R0FHRztBQUNILGtCQUFlLFNBQVMsQ0FBQSJ9

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
/* eslint-disable max-lines */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _events_1 = __importDefault(__webpack_require__(4));
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
class DeStagnate extends _events_1.default {
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
                    throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
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
                    throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
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
         * @param shouldBindEvents - if event listeners shoud be bound `true` by default
         * Increases performance if turned off
         * @returns - result of append child to parent element
         */
        this.mountComponent = (parent, shouldBindEvents = true) => {
            try {
                if (parent !== undefined) {
                    this.parent = parent;
                }
                if (this._parent === undefined) {
                    throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
                }
                const component = this.render();
                this._didSetInitialState = true;
                this.componentWillMount();
                if (component === null) {
                    throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array");
                }
                if (shouldBindEvents) {
                    this.bindEventListeners(this._parent);
                }
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
                    this.componentDidWarn("No parent was set. Component unmounted from nothing.");
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
                throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.");
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
                    this.componentDidWarn(`WARN: New key (${key}) should not be set with setState, which has keys ${JSON.stringify(Object.keys(this.state))}. Declare all state variables in constructor as a best practice. Did you misspell a key?`);
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
            this.componentDidCatch(new Error(`ERR: Avoid using this ${parent.tagName.toLowerCase()} as element parent, as all elements within this ${parent.tagName.toLowerCase()} will be removed on re-render. To disable this, pass in true as a third parameter`));
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
            this.componentDidCatch(new Error("Do not mutate state directly. Use setState instead."));
            // eslint-disable-next-line
            this.componentDidWarn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly");
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
            this.componentDidWarn(`WARN: Avoid using this ${element.tagName.toLowerCase()} as element parent, as all elements within this ${element.tagName.toLowerCase()} will be removed on re-render. If this was intentional, turn strict off before setting parent.`);
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
exports.default = DeStagnate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILDhCQUE4Qjs7Ozs7QUFFOUIsd0RBQTRCO0FBSTVCOzs7Ozs7R0FNRztBQUNILE1BQThCLFVBRTFCLFNBQVEsaUJBQUk7SUF1Q1o7Ozs7Ozs7T0FPRztJQUNILFlBQ0ksTUFBb0IsRUFDVixLQUFhLEVBQ3ZCLHFCQUFxQixHQUFHLEtBQUs7UUFFN0IsS0FBSyxFQUFFLENBQUE7UUFIRyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBL0MzQjs7OztXQUlHO1FBQ0ssWUFBTyxHQUFHLElBQUksQ0FBQTtRQUV0Qjs7Ozs7V0FLRztRQUNLLFdBQU0sR0FBVSxFQUFXLENBQUE7UUFFbkM7Ozs7O1dBS0c7UUFDSyx3QkFBbUIsR0FBRyxLQUFLLENBQUE7UUFTbkM7Ozs7V0FJRztRQUNLLGNBQVMsR0FBRyxLQUFLLENBQUE7UUE0QnpCOzs7Ozs7O1dBT0c7UUFDSSw0QkFBdUIsR0FBRyxDQUM3QixTQUFnQixFQUNoQixTQUFnQixFQUNGLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUUzQzs7Ozs7V0FLRztRQUNJLGNBQVMsR0FBRyxHQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFDdkIsQ0FBQyxDQUFBO1FBRUQ7Ozs7O1dBS0c7UUFDSSxrQkFBYSxHQUFHLEdBQVMsRUFBRTtZQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUN4QixDQUFDLENBQUE7UUFxRkQ7Ozs7Ozs7V0FPRztRQUNhLGdCQUFXLEdBQUcsR0FBaUIsRUFBRTtZQUM3QyxJQUFJO2dCQUNBLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2dCQUV6QixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO29CQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHFGQUFxRixDQUFDLENBQUE7aUJBQ3pHO2dCQUVELElBQUksQ0FBQyx1QkFBdUIsQ0FDeEIsa0JBQUksSUFBSSxDQUFDLEtBQUssQ0FBVSxvQkFDcEIsSUFBSSxDQUFDLEtBQUssRUFDakIsQ0FBQTtnQkFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO2FBQ25DO1lBQUMsT0FBTyxHQUFHLEVBQUUsMEJBQTBCLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFFM0IsT0FBTyxHQUFZLENBQUE7YUFDdEI7UUFDTCxDQUFDLENBQUE7UUFFRDs7Ozs7OztXQU9HO1FBQ2EsYUFBUSxHQUFHLENBQUMsR0FBbUIsRUFBZ0IsRUFBRTtZQUM3RCxJQUFJO2dCQUNBLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO2dCQUUxQixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO29CQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHFGQUFxRixDQUFDLENBQUE7aUJBQ3pHO2dCQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUN2QjtnQkFFRCxJQUFJLENBQUMsdUJBQXVCLENBQ3hCLGtCQUFJLElBQUksQ0FBQyxLQUFLLENBQVUsb0JBQ3BCLElBQUksQ0FBQyxLQUFLLEVBQ2pCLENBQUE7Z0JBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO2dCQUUvQixNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNwQixDQUFDLENBQUMsU0FBUyxDQUFBO2dCQUVmLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUE7YUFDaEM7WUFBQyxPQUFPLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQztnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUUzQixPQUFPLEdBQVksQ0FBQTthQUN0QjtRQUNMLENBQUMsQ0FBQTtRQUVELGdFQUFnRTtRQUNoRTs7Ozs7Ozs7O1dBU0c7UUFDYSxtQkFBYyxHQUFHLENBQzdCLE1BQW9CLEVBQ3BCLGdCQUFnQixHQUFHLElBQUksRUFDa0MsRUFBRTtZQUMzRCxJQUFJO2dCQUNBLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7aUJBQ3ZCO2dCQUVELElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7b0JBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMscUZBQXFGLENBQUMsQ0FBQTtpQkFDekc7Z0JBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO2dCQUUvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFBO2dCQUUvQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtnQkFFekIsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO29CQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLHFIQUFxSCxDQUFDLENBQUE7aUJBQ3pJO2dCQUVELElBQUksZ0JBQWdCLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQ3hDO2dCQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO2dCQUNyQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtnQkFFeEIsSUFBSSxPQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssUUFBUSxJQUFJLFNBQVMsWUFBWSxLQUFLLEVBQUU7b0JBQzlELE9BQVEsU0FBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQzdDLElBQUksQ0FBQyxPQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUNyQyxDQUFDLENBQUE7aUJBQ0w7Z0JBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUM3QztZQUFDLE9BQU8sR0FBRyxFQUFFLDBCQUEwQixDQUFDO2dCQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBRTNCLE9BQU8sR0FBWSxDQUFBO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFBO1FBRUQ7Ozs7OztXQU1HO1FBQ2EsVUFBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUE7UUFFM0M7Ozs7OztXQU1HO1FBQ2EscUJBQWdCLEdBQUcsR0FBUyxFQUFFO1lBQzFDLElBQUk7Z0JBQ0EsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtvQkFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNEQUFzRCxDQUFDLENBQUE7b0JBRTdFLE9BQU07aUJBQ1Q7Z0JBRUQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7Z0JBRTNCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBRXZDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7YUFDekI7WUFBQyxPQUFPLEdBQUcsRUFBRSwwQkFBMEIsQ0FBQztnQkFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQzlCO1FBRUwsQ0FBQyxDQUFBO1FBRUQ7Ozs7OztXQU1HO1FBQ2EsWUFBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtRQUMvQywrREFBK0Q7UUFFL0Q7Ozs7O1dBS0c7UUFDSyxvQkFBZSxHQUFHLEdBQVMsRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLHFGQUFxRixDQUFDLENBQUE7YUFDekc7WUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO2dCQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO29CQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2lCQUNuRDthQUNKO1FBQ0wsQ0FBQyxDQUFBO1FBRUQ7Ozs7O1dBS0c7UUFDSyxnQkFBVyxHQUFHLEdBQWUsRUFBRTtZQUNuQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7WUFFdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDeEIsQ0FBQyxDQUFBO1FBRUQ7Ozs7OztXQU1HO1FBQ0ssZUFBVSxHQUFHLENBQUMsR0FBbUIsRUFBUSxFQUFFO1lBQy9DLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDeEMsMkJBQTJCO29CQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEdBQUcscURBQXFELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsMEZBQTBGLENBQUMsQ0FBQTtpQkFDck87YUFDSjtRQUNMLENBQUMsQ0FBQTtRQUVEOzs7Ozs7V0FNRztRQUNLLFlBQU8sR0FBRyxDQUFDLGVBQTRCLEVBQVEsRUFBRTtZQUNyRCxJQUNJLE9BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRO2dCQUNwQyxlQUFlLFlBQVksS0FBSyxFQUNsQztnQkFDRSxLQUFLLE1BQU0sT0FBTyxJQUFJLGVBQWUsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQ3JDO2FBQ0o7aUJBQU0sSUFBSSxlQUFlLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFRLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFBO2FBQzdDO1lBRUQsSUFBSSxlQUFlLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO2FBQzVCO1FBQ0wsQ0FBQyxDQUFBO1FBN1dHLElBQ0ksTUFBTTtZQUNOLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxDQUFDO1lBQzVCLENBQUMscUJBQXFCO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQ2Q7WUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxLQUFLLENBQUMseUJBQXlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLG1EQUFtRCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxtRkFBbUYsQ0FBQyxDQUFDLENBQUE7U0FDN1A7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtJQUN6QixDQUFDO0lBbUNEOzs7O09BSUc7SUFDSCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLEtBQUs7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBYyxLQUFLLENBQUUsR0FBVTtRQUMzQixJQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FDbEIsSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FDbkUsQ0FBQTtZQUNELDJCQUEyQjtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsOEZBQThGLENBQUMsQ0FBQTtZQUNySCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtZQUNqQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFBO1NBQ2xDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBVyxNQUFNLENBQUUsT0FBZ0M7UUFDL0MsSUFDSSxPQUFPO1lBQ1AsT0FBTyxDQUFDLGlCQUFpQixHQUFHLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sRUFDZDtZQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsbURBQW1ELE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLGdHQUFnRyxDQUFDLENBQUE7U0FDalE7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVcsTUFBTTtRQUNiLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVcsUUFBUTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN6QixDQUFDO0NBaVBKO0FBdGFELDZCQXNhQyJ9

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _base_1 = __importDefault(__webpack_require__(5));
/* istanbul ignore next */
class Events extends _base_1.default {
    constructor() {
        super(...arguments);
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
        /**
         * Focus event
         * @protected
         * @instance
         * @returns
         */
        this.onFocus = () => undefined;
        /**
         * Blur event
         * @protected
         * @instance
         * @returns
         */
        this.onBlur = () => undefined;
        /**
         * Focus in event
         * @protected
         * @instance
         * @returns
         */
        this.onFocusIn = () => undefined;
        /**
         * Focus out event
         * @protected
         * @instance
         * @returns
         */
        this.onFocusOut = () => undefined;
        /**
         * Animation start event
         * @protected
         * @instance
         * @returns
         */
        this.onAnimationStart = () => undefined;
        /**
         * Animation cancel event
         * @protected
         * @instance
         * @returns
         */
        this.onAnimationCancel = () => undefined;
        /**
         * Animation end event
         * @protected
         * @instance
         * @returns
         */
        this.onAnimationEnd = () => undefined;
        /**
         * Animation iteration event
         * @protected
         * @instance
         * @returns
         */
        this.onAnimationIteration = () => undefined;
        /**
         * Transition start event
         * @protected
         * @instance
         * @returns
         */
        this.onTransitionStart = () => undefined;
        /**
         * Transition cancel event
         * @protected
         * @instance
         * @returns
         */
        this.onTransitionCancel = () => undefined;
        /**
         * Transition end event
         * @protected
         * @instance
         * @returns
         */
        this.onTransitionEnd = () => undefined;
        /**
         * Transition run event
         * @protected
         * @instance
         * @returns
         */
        this.onTransitionRun = () => undefined;
        /**
         * Auxillary click event
         * @protected
         * @instance
         * @returns
         */
        this.onAuxClick = () => undefined;
        /**
         * Click event
         * @protected
         * @instance
         * @returns
         */
        this.onClick = () => undefined;
        /**
         * Double click event
         * @protected
         * @instance
         * @returns
         */
        this.onDblClick = () => undefined;
        /**
         * Mousedown event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseDown = () => undefined;
        /**
         * Mouse enter event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseEnter = () => undefined;
        /**
         * Mouse leave event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseLeave = () => undefined;
        /**
         * Mouse move event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseMove = () => undefined;
        /**
         * Mouseover event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseOver = () => undefined;
        /**
         * Mouseout event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseOut = () => undefined;
        /**
         * Mouseup event
         * @protected
         * @instance
         * @returns
         */
        this.onMouseUp = () => undefined;
        this._eventListener = (el) => {
            for (const [event, callback] of Object.entries(this._events())) {
                el(event, callback);
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
exports.default = Events;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2V2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9fZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7O0dBU0c7Ozs7O0FBRUgsb0RBQW1DO0FBb0NuQywwQkFBMEI7QUFDMUIsTUFBOEIsTUFBTyxTQUFRLGVBQWE7SUFBMUQ7O1FBRUk7Ozs7Ozs7O1dBUUc7UUFDTyx1QkFBa0IsR0FBRyxDQUFDLE9BQW9CLEVBQVEsRUFBRTtZQUMxRCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ2pELENBQUMsQ0FBQTtRQUVEOzs7Ozs7OztXQVFHO1FBQ08seUJBQW9CLEdBQUcsQ0FBQyxPQUFvQixFQUFRLEVBQUU7WUFDNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUNwRCxDQUFDLENBQUE7UUFFRDs7Ozs7V0FLRztRQUNPLFlBQU8sR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFekM7Ozs7O1dBS0c7UUFDTyxXQUFNLEdBQUcsR0FBUyxFQUFFLENBQUMsU0FBUyxDQUFBO1FBRXhDOzs7OztXQUtHO1FBQ08sY0FBUyxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUUzQzs7Ozs7V0FLRztRQUNPLGVBQVUsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFNUM7Ozs7O1dBS0c7UUFDTyxxQkFBZ0IsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFbEQ7Ozs7O1dBS0c7UUFDTyxzQkFBaUIsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFbkQ7Ozs7O1dBS0c7UUFDTyxtQkFBYyxHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVoRDs7Ozs7V0FLRztRQUNPLHlCQUFvQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUd0RDs7Ozs7V0FLRztRQUNP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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDSComponent_1 = __importDefault(__webpack_require__(6));
const createElement_1 = __importDefault(__webpack_require__(7));
const createElementNS_1 = __importDefault(__webpack_require__(8));
const createRef_1 = __importDefault(__webpack_require__(2));
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
        this.createDSComponent = createDSComponent_1.default;
        /**
         * Creates an HTML Element
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
 * Creates an HTML Element
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Jhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvX2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7R0FTRzs7Ozs7QUFFSCw0RUFBaUU7QUFDakUsb0VBQXlEO0FBQ3pELHdFQUE2RDtBQUM3RCw0REFBaUQ7QUFJakQsMEJBQTBCO0FBQzFCOztHQUVHO0FBQ0gsTUFBOEIsTUFBTTtJQUFwQztRQWlESTs7Ozs7Ozs7V0FRRztRQUNhLHNCQUFpQixHQUFHLDJCQUFrQixDQUFBO1FBRXREOzs7Ozs7Ozs7O1dBVUc7UUFDYSxrQkFBYSxHQUFHLHVCQUFjLENBQUE7UUFFOUM7Ozs7Ozs7Ozs7O1dBV0c7UUFDYSxvQkFBZSxHQUFHLHlCQUFnQixDQUFBO1FBRWxEOzs7Ozs7V0FNRztRQUNhLGNBQVMsR0FBRyxtQkFBVSxDQUFBO1FBRXRDOzs7O1dBSUc7UUFDSSxzQkFBaUIsR0FBRyxDQUFDLEtBQVksRUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUV2RTs7Ozs7V0FLRztRQUNJLHNCQUFpQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVoRDs7Ozs7V0FLRztRQUNJLHVCQUFrQixHQUFHLEdBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQTtRQUVqRDs7OztXQUlHO1FBQ0kscUJBQWdCLEdBQUcsQ0FBQyxHQUFXLEVBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFbEU7Ozs7O1dBS0c7UUFDSSx1QkFBa0IsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFakQ7Ozs7O1dBS0c7UUFDSSx5QkFBb0IsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFbkQ7Ozs7O1dBS0c7UUFDSSx3QkFBbUIsR0FBRyxHQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUE7UUFFbEQ7OztXQUdHO1FBQ0ksMEJBQXFCLEdBQUcsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFBO1FBRWxEOzs7Ozs7V0FNRztRQUNhLFdBQU0sR0FBRyxHQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUE7SUFFbkQsQ0FBQzs7QUFyS0QseUJBcUtDO0FBbktHOzs7Ozs7OztHQVFHO0FBQ29CLHdCQUFpQixHQUFHLDJCQUFrQixDQUFBO0FBRTdEOzs7Ozs7Ozs7O0dBVUc7QUFDb0Isb0JBQWEsR0FBRyx1QkFBYyxDQUFBO0FBRXJEOzs7Ozs7Ozs7OztHQVdHO0FBQ29CLHNCQUFlLEdBQUcseUJBQWdCLENBQUE7QUFFekQ7Ozs7OztHQU1HO0FBQ29CLGdCQUFTLEdBQUcsbUJBQVUsQ0FBQSJ9

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports createDSComponent add nested component for DeStagnate components
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = createDSComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRFNDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlYXRlRFNDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7OztHQVFHOztBQVVILHlEQUF5RDtBQUN6RDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0saUJBQWlCLEdBQUcsQ0FJbEIsU0FBOEMsRUFDOUMsS0FBYSxFQUNiLEdBQW1DLEVBQ3JCLEVBQUU7SUFDcEIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUU3QyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0lBRXBELE1BQU0sVUFBVSxHQUFHLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUVoRCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFbEIsSUFBSSxHQUFHLEVBQUU7UUFDTCxHQUFHLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQTtLQUMzQjtJQUVELE9BQU8sT0FBTyxDQUFBO0FBQ2xCLENBQUMsQ0FBQTtBQUVELGtCQUFlLGlCQUFpQixDQUFBIn0=

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports createElement function for DOM manipulation
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._bindChildren = exports._unpackChildren = exports._bindProps = void 0;
const _1 = __importDefault(__webpack_require__(1));
/**
 * Binds children to element
 * @package
 * @param element - element to bind
 * @param props - props to bind with
 * @param ns - if namespace element
 * @returns void
 */
exports._bindProps = (element, props, ns = false) => {
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
            else {
                console.warn(`WARN: Invalid prop type "${typeof (val)}" for key "${key}". Skipping prop.`);
            }
        }
    }
};
exports._unpackChildren = (children) => {
    const newChildren = [];
    for (const child of children) {
        if (typeof (child) === "object" && child instanceof Array) {
            newChildren.push(...exports._unpackChildren(child));
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
exports._bindChildren = (element, children) => {
    if (children !== null && children !== undefined) {
        if (children instanceof Array) {
            for (const child of children) {
                exports._bindChildren(element, child);
            }
        }
        else if (typeof (children) === "string" ||
            typeof (children) === "number") {
            element.innerText = children.toString();
        }
        else if (children instanceof _1.default) {
            if (!children.didMount && element instanceof window.HTMLElement) {
                children.mount(element);
                return;
            }
            else if (!(element instanceof window.HTMLElement)) {
                throw new Error("Cannot use non-HTMLElement as component parent");
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
/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter of children
 * @returns element
 */
const createElement = (tagName, props, children, ...childrenArgs) => {
    const element = document.createElement(tagName);
    exports._bindProps(element, props);
    let _children = children;
    if (children && childrenArgs) {
        if (children instanceof Array) {
            _children = [
                ...exports._unpackChildren(children),
                ...exports._unpackChildren(childrenArgs),
            ];
        }
        else {
            _children = [children, ...exports._unpackChildren(childrenArgs)];
        }
    }
    exports._bindChildren(element, _children);
    return element;
};
exports.default = createElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jcmVhdGVFbGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7R0FRRzs7Ozs7O0FBRUgseUNBQTBCO0FBMkIxQjs7Ozs7OztHQU9HO0FBQ1UsUUFBQSxVQUFVLEdBQUcsQ0FDdEIsT0FBZ0IsRUFDaEIsS0FBMkUsRUFDM0UsRUFBRSxHQUFHLEtBQUssRUFDTixFQUFFO0lBQ04sSUFBSSxLQUFLLEVBQUU7UUFDUCxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1QyxJQUFJLE9BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDdEQsSUFBSSxHQUFHLEtBQUssV0FBVyxFQUFFO29CQUNyQixPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtpQkFDckM7cUJBQU0sSUFBSSxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2lCQUNwRDtxQkFBTTtvQkFDSCxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtpQkFDNUM7YUFDSjtpQkFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFLDhDQUE4QztnQkFDakYsSUFBSSxPQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssVUFBVSxFQUFFO29CQUM1QixPQUFPLENBQUMsZ0JBQWdCLENBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUNQLFdBQVcs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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports createElementNS createElement for namespaced elements
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElementNS = void 0;
const createElement_1 = __webpack_require__(7);
/**
 * Creates a child element to deStagnate
 * @param namespaceURI - namespace uri
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter of children
 * @returns html element
 */
exports.createElementNS = (namespaceURI, tagName, props, children, ...childrenArgs) => {
    const element = document.createElementNS(namespaceURI, tagName);
    createElement_1._bindProps(element, props, true);
    let _children = children;
    if (children && childrenArgs) {
        if (typeof (children) === "object" && children instanceof Array) {
            _children = [
                ...createElement_1._unpackChildren(children),
                ...createElement_1._unpackChildren(childrenArgs),
            ];
        }
        else {
            _children = [children, ...createElement_1._unpackChildren(childrenArgs)];
        }
    }
    createElement_1._bindChildren(element, _children);
    return element;
};
exports.default = exports.createElementNS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlRWxlbWVudE5TLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUVsZW1lbnROUy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0dBUUc7OztBQUVILG1EQU13QjtBQUV4Qjs7Ozs7Ozs7R0FRRztBQUNVLFFBQUEsZUFBZSxHQUFHLENBQzNCLFlBQStHLEVBQy9HLE9BQTBDLEVBQzFDLEtBQXdDLEVBQ3hDLFFBQXVCLEVBQ3ZCLEdBQUcsWUFBK0IsRUFDM0IsRUFBRTtJQUNULE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBRS9ELDBCQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUVoQyxJQUFJLFNBQVMsR0FBNkIsUUFBUSxDQUFBO0lBRWxELElBQUksUUFBUSxJQUFJLFlBQVksRUFBRTtRQUMxQixJQUFJLE9BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLElBQUksUUFBUSxZQUFZLEtBQUssRUFBRTtZQUM1RCxTQUFTLEdBQUc7Z0JBQ1IsR0FBRywrQkFBZSxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsR0FBRywrQkFBZSxDQUFDLFlBQVksQ0FBQzthQUNuQyxDQUFBO1NBQ0o7YUFBTTtZQUNILFNBQVMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLCtCQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtTQUMzRDtLQUNKO0lBRUQsNkJBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUE7SUFFakMsT0FBTyxPQUFPLENBQUE7QUFDbEIsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsdUJBQWUsQ0FBQSJ9

/***/ })
/******/ ]);
});
