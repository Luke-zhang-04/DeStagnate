/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.1.0
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

/**
 * Binds children to element
 *
 * @param element - Element to bind
 * @param props - Props to bind with
 * @param ns - If namespace element
 * @returns Void
 * @package
 */

const bindProps = (element, props, ns = false) => {
  if (props) {
    for (const [key, val] of Object.entries(props)) {
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
      } else if (key === "ref" && typeof val === "object" && "current" in val) {
        val.current = element;
      } else if (val !== undefined) {
        console.warn(`${typeof val} is not a valid DeStagnate child`);
      }
    }
  }
};
/**
 * Binds children to element
 *
 * @param element - Element to bind
 * @param children - Children to bind with
 * @returns Void
 * @package
 */

const bindChildren = (element, children) => {
  if (children !== null && children !== undefined) {
    if (children instanceof Array) {
      children.forEach(child => bindChildren(element, child));
    } else if (typeof children === "string" || typeof children === "number") {
      element.appendChild(document.createTextNode(children.toString()));
    } else if (children instanceof Component) {
      if (!children.didMount && element instanceof window.HTMLElement) {
        children.mount(element);
        return;
      } else if (!(element instanceof window.HTMLElement)) {
        throw new Error(`ERROR: code 3. See ${url}`);
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
 * @param tagNameOrComponent - Name of HTML element or function component
 * @param props - Props of element or component
 *
 *   1. If `tagNameOrComponent` is tagname, props are element properties, such as class, innerHTML, id, style, etc
 *   2. If `tagNameOrComponent` is a function, props are that functions parameters
 *
 * @param children - Children of this element. Can be nothing, number (converted to string), string
 *   (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - Rest parameter for children
 * @returns Element
 */

function createElement(tagNameOrComponent, props, ...children) {
  if (typeof tagNameOrComponent === "string") {
    const element = document.createElement(tagNameOrComponent);
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
 *
 * @param namespaceURI - Namespace uri
 * @param tagName - Name of HTML element
 * @param props - Element properties, such as class, innerHTML, id, style, etc
 * @param children - Children of this element. Can be nothing, number (converted to string), string
 *   (text), or another element. An array of any of these will create multiple children
 * @param childrenRest - Rest parameter of children
 * @returns Html element
 */

const createElementNS = (namespaceURI, tagName, props, ...children) => {
  const element = document.createElementNS(namespaceURI, tagName);
  bindProps(element, props, true);
  bindChildren(element, children);
  return element;
};

/**
 * Creates a reference for a nested component
 *
 * @returns Empty ref object
 */
const createRef = () => ({
  current: null
});

class Preset {
  constructor() {
    this.createElement = createElement;
    this.createElementNS = createElementNS;
    this.createRef = createRef;
    /**
     * Called when component catches error. Default behaviour is console.error
     *
     * @param error - Error object with info
     * @returns Void
     */

    this.componentDidCatch = error => console.error(error);
    /**
     * Called before component is updated
     *
     * @returns Whether or not component should update/re-render
     */


    this.shouldComponentUpdate = () => true;
    /**
     * Rendering HTML, must be part of extended class
     *
     * @abstract
     * @returns If returns null error will be thrown
     * @public
     * @instance
     */


    this.render = () => null;
  }

}
Preset.createElement = createElement;
Preset.createElementNS = createElementNS;
Preset.createRef = createRef;

const eventNames = ["onFocus", "onBlur", "onFocusIn", "onFocusOut", "onAnimationStart", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onTransitionStart", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onAuxClick", "onClick", "onDblClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp", "onWheel"];
const windowEventNames = ["onLoad", "onOnline", "onOffline", "onResize", "onScroll", "onKeyDown", "onKeyPress", "onKeyUp"];
class Events extends Preset {
  constructor() {
    super(...arguments);
    /**
     * Binds event listeners. Do not call manually
     *
     * @pacakge
     */

    this.bindEventListeners = element => {
      this._eventListener(element.addEventListener);

      this._eventListener(window.addEventListener, windowEventNames);
    };
    /**
     * Binds event listeners. Do not call manually
     *
     * @pacakge
     */


    this.unbindEventListeners = element => {
      this._eventListener(element.removeEventListener);

      this._eventListener(window.removeEventListener, windowEventNames);
    };

    this._eventListener = (eventListener, events = eventNames) => {
      for (const eventName of events) {
        const htmlEventName = eventName.slice(2).toLowerCase();
        const callback = this[eventName];

        if (callback !== undefined && callback instanceof Function) {
          eventListener(htmlEventName, callback);
        }
      }
    };
  }

}

/**
 * Checks if val1 and val2 are equal
 *
 * @param val1 - Value to check for equality
 * @param val2 - Value to compare against val1
 * @param maxDepth - Max recursion depth to crawl an object. After max depth is reached, the two
 *   values are simply compared with `===`
 * @param maxLength - Max length of array to crawl. If max lenth is reached, two arrays will simply
 *   be compared with `===`
 * @returns `val1 === val2`
 */
const isEqual = (val1, val2, maxDepth = 3, maxLength = 10) => {
  if (maxDepth === 0) {
    return val1 === val2;
  } else if (typeof val1 !== typeof val2) {
    return false;
  }

  if (val1 instanceof Array && val2 instanceof Array) {
    if (val1.length !== val2.length) {
      return false;
    } else if (val1.length > maxLength || val2.length > maxLength) {
      return val1 === val2;
    }

    for (let index = 0; index < val1.length; index++) {
      if (!isEqual(val1[index], val2[index], maxDepth - 1, maxLength)) {
        return false;
      }
    }

    return true;
  } else if (val1 instanceof Object && val2 instanceof Object) {
    if (!isEqual(Object.keys(val1), Object.keys(val2), maxDepth - 1, maxLength)) {
      return false;
    }

    for (const key of Object.keys(val1)) {
      if (!isEqual(val1[key], val2[key], maxDepth - 1, maxLength)) {
        return false;
      }
    }

    return true;
  }

  return val1 === val2;
};
var utils = {
  isEqual
};

const unmountedMsg = "Refusing to update unmounted component";
/**
 * DeStagnate
 *
 * @abstract
 * @namespace
 * @class
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 */

class Component extends Events {
  /**
   * Construct class component
   *
   * @param parent - Parent of this element
   * @param props - Element properties; works like React Props
   */
  constructor(parent, props) {
    super();
    this.props = props;
    this._state = {};
    this._didSetInitialState = false;
    this._didMount = false;
    /**
     * Forces a component to update Follows the same component updating procedure as setState
     * without modifying state
     *
     * @returns Returns error if error is thrown
     */

    this.forceUpdate = () => {
      var _a, _b;

      try {
        if (!this._didMount) {
          throw new Error(unmountedMsg);
        }

        (_a = this.componentDidUpdate) === null || _a === void 0 ? void 0 : _a.call(this);

        if (this._parent === undefined) {
          throw new Error(`ERROR: code 2. See ${url}.`);
        }

        (_b = this.getSnapshotBeforeUpdate) === null || _b === void 0 ? void 0 : _b.call(this, Object.assign({}, this.props), Object.assign({}, this.state));

        this._update(this._execRender());
      } catch (err) {
        return this._handleError(err);
      }
    };
    /**
     * Checks if the state changed from the previous state. Can me attached to `shouldComponentUpdate`
     *
     * @param keys - List of keys to crawl. If left undefined (default) then use all keys. Should
     *   be `keyof State`, but there were some Typescript troubles.
     * @param maxDepth - Max recursion depth to crawl an object. After max depth is reached, the
     *   two values are simply compared with `===`
     * @param maxLength - Max length of array to crawl. If max lenth is reached, two arrays will
     *   simply be compared with `===`
     * @returns `val1 === val2`
     */


    this.stateDidChange = (keys, maxDepth = 3, maxLength = 15) => {
      var _a;

      if (keys === undefined) {
        return !utils.isEqual(this._state, this._prevState, maxDepth, maxLength);
      }

      const state = {};
      const prevState = {};

      for (const key of keys) {
        state[key] = this._state[key];
        prevState[key] = (_a = this._prevState) === null || _a === void 0 ? void 0 : _a[key];
      }

      return !utils.isEqual(state, prevState, maxDepth, maxLength);
    };
    /**
     * Sets state
     *
     * @param obj - State to set
     * @param shouldComponentUpdate - If component should update after state setting
     * @returns Void
     */


    this.setState = (obj, shouldComponentUpdate = true) => {
      var _a, _b;

      try {
        if (!this._didMount) {
          throw new Error(unmountedMsg);
        }

        (_a = this.componentWillUpdate) === null || _a === void 0 ? void 0 : _a.call(this);

        if (this._parent === undefined) {
          throw new Error(`ERROR: code 2. See ${url}.`);
        }

        this._prevState = Object.assign({}, this._state);
        (_b = this.getSnapshotBeforeUpdate) === null || _b === void 0 ? void 0 : _b.call(this, Object.assign({}, this.props), Object.assign({}, this.state));
        Object.assign(this._state, obj);
        const renderedContent = shouldComponentUpdate && this.shouldComponentUpdate() ? this._execRender() : undefined;

        this._update(renderedContent);
      } catch (err) {
        return this._handleError(err);
      }
    };
    /**
     * Initial mounting to be manually called
     *
     * @param parent - Parent element to mount with; optional
     * @returns - Result of append child to parent element
     */


    this.mountComponent = parent => {
      var _a, _b;

      try {
        if (parent !== undefined) {
          this.parent = parent;
        }

        if (this._parent === undefined) {
          throw new Error(`ERROR: code 2. See ${url}.`);
        }

        const component = this.render();
        this._didSetInitialState = true;
        (_a = this.componentWillMount) === null || _a === void 0 ? void 0 : _a.call(this);

        if (component === null) {
          throw new Error(`ERROR: code 3. See ${url}.`);
        }

        this.bindEventListeners(this._parent);
        this._didMount = true;
        (_b = this.componentDidMount) === null || _b === void 0 ? void 0 : _b.call(this);

        if (component instanceof Array) {
          const fragment = document.createDocumentFragment();
          component.forEach(child => fragment.appendChild(child));
          return this._parent.appendChild(fragment);
        }

        return this._parent.appendChild(component);
      } catch (err) {
        return this._handleError(err);
      }
    };
    /**
     * Initial mounting to be manually called
     *
     * @returns - Result of append child to parent element
     */


    this.mount = this.mountComponent;
    /**
     * Unmounting to be manually called
     *
     * @returns - Void
     */

    this.unmountComponent = () => {
      var _a;

      try {
        if (this._parent === undefined) {
          return;
        }

        (_a = this.componentWillUnmount) === null || _a === void 0 ? void 0 : _a.call(this);
        this.unbindEventListeners(this._parent);

        this._removeChildren();

        this._didMount = false;
      } catch (err) {
        this._handleError(err);
      }
    };
    /**
     * Unmounting to be manually called
     *
     * @returns - Void
     */


    this.unmount = this.unmountComponent;
    /**
     * Removes children from this._parent
     *
     * @returns Void
     */

    this._removeChildren = () => {
      if (this._parent === undefined) {
        throw new Error(`ERROR: code 2. See ${url}.`);
      }

      while (this._parent.firstChild) {
        if (this._parent.lastChild) {
          this._parent.removeChild(this._parent.lastChild);
        }
      }
    };
    /**
     * Executes new render
     *
     * @returns Rendered content
     */


    this._execRender = () => {
      this._removeChildren();

      return this.render();
    };
    /**
     * Updates the component
     *
     * @param renderedContent - Rendered content from executing the render function
     * @returns Void
     */


    this._update = renderedContent => {
      var _a, _b, _c;

      if (renderedContent instanceof Array) {
        for (const element of renderedContent) {
          (_a = this._parent) === null || _a === void 0 ? void 0 : _a.appendChild(element);
        }
      } else if (renderedContent) {
        (_b = this._parent) === null || _b === void 0 ? void 0 : _b.appendChild(renderedContent);
      }

      if (renderedContent) {
        (_c = this.componentDidUpdate) === null || _c === void 0 ? void 0 : _c.call(this);
      }
    };

    this._handleError = err => {
      if (err instanceof Error) {
        this.componentDidCatch(err);
        return err;
      }

      const error = new Error(String(err));
      this.componentDidCatch(error);
      return error;
    };

    if (parent === null) {
      throw new Error("Parent is null, expected HTMLElement | undefined.");
    }

    this._parent = parent;
  }
  /**
   * Public getState getter as this.state itself is protected
   *
   * @returns Component state
   */


  get getState() {
    return this.state;
  }
  /**
   * Get component state
   *
   * @returns Component state
   */


  get state() {
    return this._state;
  }
  /**
   * Sets component state WARN: do not use this method to mutate the state directly
   *
   * @param obj - State to set
   */


  set state(obj) {
    if (this._didSetInitialState) {
      this.componentDidCatch(new Error(`ERROR: code 1. See ${url}.`));
      this.setState(obj);
    } else {
      this._state = obj;
      this._didSetInitialState = true;
    }
  }
  /**
   * Public getProps getter as this.props itself is protected
   *
   * @returns Component props
   */


  get getProps() {
    return this.props;
  }
  /**
   * Set the parent of this component
   *
   * @param element - Parent element
   * @returns Void
   */


  set parent(element) {
    this._parent = element;
  }
  /**
   * Get the parent element of this component
   *
   * @returns Parent
   */


  get parent() {
    return this._parent;
  }
  /**
   * Get didMount value publicly
   *
   * @returns If mounted
   */


  get didMount() {
    return this._didMount;
  }
  /**
   * Returns the previous state. Undefined if no previous state exists
   *
   * @returns Previous state
   */


  get prevState() {
    return this._prevState;
  }

}

const Fragment = (_, ...children) => {
  const documentFragment = document.createDocumentFragment();
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
//# sourceMappingURL=deStagnate.cjs.map
