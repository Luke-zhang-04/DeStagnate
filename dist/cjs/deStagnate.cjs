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

const url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

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
 * @package
 * @param element - element to bind
 * @param children - children to bind with
 * @returns void
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
 *
 * @param tagNameOrComponent - name of HTML element or function component
 * @param props - props of element or component
 * 1. If `tagNameOrComponent` is tagname, props are element properties, such as class, innerHTML, id, style, etc
 * 2. If `tagNameOrComponent` is a function, props are that functions parameters
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenArgs - rest parameter for children
 * @returns element
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
 * @param namespaceURI - namespace uri
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */

const createElementNS = (namespaceURI, tagName, props, ...children) => {
  const element = document.createElementNS(namespaceURI, tagName);
  bindProps(element, props, true);
  bindChildren(element, children);
  return element;
};

/**
 * Creates a reference for a nested component
 * @returns empty ref object
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
     * @param error - error object with info
     * @returns void
     */

    this.componentDidCatch = error => console.error(error);
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
Preset.createElement = createElement;
Preset.createElementNS = createElementNS;
Preset.createRef = createRef;

const eventNames = ["onFocus", "onBlur", "onFocusIn", "onFocusOut", "onAnimationStart", "onAnimationCancel", "onAnimationEnd", "onAnimationIteration", "onTransitionStart", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onAuxClick", "onClick", "onDblClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOver", "onMouseOut", "onMouseUp", "onWheel"],
      windowEventNames = ["onLoad", "onOnline", "onOffline", "onResize", "onScroll", "onKeyDown", "onKeyPress", "onKeyUp"];
class Events extends Preset {
  constructor() {
    super(...arguments);
    /**
     * Binds event listeners.
     * Do not call manually
     * @pacakge
     */

    this.bindEventListeners = element => {
      this._eventListener(element.addEventListener);

      this._eventListener(window.addEventListener, windowEventNames);
    };
    /**
     * Binds event listeners.
     * Do not call manually
     * @pacakge
     */


    this.unbindEventListeners = element => {
      this._eventListener(element.removeEventListener);

      this._eventListener(window.removeEventListener, windowEventNames);
    };

    this._eventListener = (eventListener, events = eventNames) => {
      for (const eventName of events) {
        const htmlEventName = eventName.slice(2).toLowerCase(),
              callback = this[eventName];

        if (callback !== undefined && callback instanceof Function) {
          eventListener(htmlEventName, callback);
        }
      }
    };
  }

}

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
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */

class Component extends Events {
  /**
   * Construct class component
   * @param parent - parent of this element
   * @param props - element properties; works like React Props
   */
  constructor(parent, props) {
    super();
    this.props = props;
    this._state = {};
    this._didSetInitialState = false;
    this._didMount = false;
    /**
     * Forces a component to update
     * Follows the same component updating procedure as setState without modifying state
     * @returns returns error if error is thrown
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


    this.stateDidChange = (keys, maxDepth = 3, maxLength = 15) => {
      var _a;

      if (keys === undefined) {
        return !utils.isEqual(this._state, this._prevState, maxDepth, maxLength);
      }

      const state = {},
            prevState = {};

      for (const key of keys) {
        state[key] = this._state[key];
        prevState[key] = (_a = this._prevState) === null || _a === void 0 ? void 0 : _a[key];
      }

      return !utils.isEqual(state, prevState, maxDepth, maxLength);
    };
    /**
     * Sets state
     * @param obj - state to set
     * @param shouldComponentUpdate - if component should update after state setting
     * @returns void
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
     * @param parent - parent element to mount with; optional
     * @returns - result of append child to parent element
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
     * @returns - result of append child to parent element
     */


    this.mount = this.mountComponent;
    /**
     * Unmounting to be manually called
     * @returns - void
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
     * @returns - void
     */


    this.unmount = this.unmountComponent;
    /**
     * Removes children from this._parent
     * @return void
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
     * @returns rendered content
     */


    this._execRender = () => {
      this._removeChildren();

      return this.render();
    };
    /**
     * Updates the component
     * @param renderedContent - rendered content from executing the render function
     * @returns void
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
   * @returns component state
   */


  get getState() {
    return this.state;
  }
  /**
   * Get component state
   * @returns component state
   */


  get state() {
    return this._state;
  }
  /**
   * Sets component state
   * WARN: do not use this method to mutate the state directly
   * @param obj - state to set
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
   * @returns component props
   */


  get getProps() {
    return this.props;
  }
  /**
   * Set the parent of this component
   * @param element - parent element
   * @returns void
   */


  set parent(element) {
    this._parent = element;
  }
  /**
   * Get the parent element of this component
   * @returns parent
   */


  get parent() {
    return this._parent;
  }
  /**
   * Get didMount value publicly
   * @returns if mounted
   */


  get didMount() {
    return this._didMount;
  }
  /**
   * Returns the previous state. Undefined if no previous state exists
   * @returns previous state
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVTdGFnbmF0ZS5janMiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9wcml2YXRlL191cmwuanMiLCIuLi8uLi9saWIvcHJpdmF0ZS9fY3JlYXRlRWxlbWVudFV0aWxzLmpzIiwiLi4vLi4vbGliL2NyZWF0ZUVsZW1lbnQuanMiLCIuLi8uLi9saWIvY3JlYXRlRWxlbWVudE5TLmpzIiwiLi4vLi4vbGliL2NyZWF0ZVJlZi5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL19iYXNlLmpzIiwiLi4vLi4vbGliL3ByaXZhdGUvX2V2ZW50cy5qcyIsIi4uLy4uL2xpYi9wcml2YXRlL3V0aWxzLmpzIiwiLi4vLi4vbGliL2NvbXBvbmVudC5qcyIsIi4uLy4uL2xpYi9mcmFnbWVudC5qcyIsIi4uLy4uL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXJsID0gXCJodHRwczovL2x1a2UtemhhbmctMDQuZ2l0aHViLmlvL0RlU3RhZ25hdGUvZXJyb3ItY29kZXNcIjtcbmV4cG9ydCBkZWZhdWx0IHVybDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgzVnliQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOTFjbXd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExIZEVRVUYzUkN4RFFVRkJPMEZCUlRORkxHVkJRV1VzUjBGQlJ5eERRVUZCSW4wPSIsIi8qKlxuICogQ29tcG9uZW50XG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBmaWxlIHNoYXJlIGZ1bmN0aW9ucyBhbmQgdHlwZXMgZm9yIGNyZWF0ZUVsZW1lbnQgYW5kIGl0J3MgdmFyaWFudHNcbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudFwiO1xuaW1wb3J0IHVybCBmcm9tIFwiLi9fdXJsXCI7XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIHByb3BzIC0gcHJvcHMgdG8gYmluZCB3aXRoXG4gKiBAcGFyYW0gbnMgLSBpZiBuYW1lc3BhY2UgZWxlbWVudFxuICogQHJldHVybnMgdm9pZFxuICovXG5leHBvcnQgY29uc3QgYmluZFByb3BzID0gKGVsZW1lbnQsIHByb3BzLCBucyA9IGZhbHNlKSA9PiB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyhwcm9wcykpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImlubmVySFRNTFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlTlMobnVsbCwga2V5LCB2YWwudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkuc2xpY2UoMCwgMikgPT09IFwib25cIikgeyAvLyBXb3JrcyBzdWNoIGFzIG9uQ2xpY2ssIG9uQW5pbWF0aW9uRW5kLCBldGMuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodmFsKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihrZXkuc2xpY2UoMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpLCB2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJyZWZcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiAodmFsKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgICAgIFwiY3VycmVudFwiIGluIHZhbCkge1xuICAgICAgICAgICAgICAgIHZhbC5jdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3R5cGVvZiB2YWx9IGlzIG5vdCBhIHZhbGlkIERlU3RhZ25hdGUgY2hpbGRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIEJpbmRzIGNoaWxkcmVuIHRvIGVsZW1lbnRcbiAqIEBwYWNrYWdlXG4gKiBAcGFyYW0gZWxlbWVudCAtIGVsZW1lbnQgdG8gYmluZFxuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gdG8gYmluZCB3aXRoXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kQ2hpbGRyZW4gPSAoZWxlbWVudCwgY2hpbGRyZW4pID0+IHtcbiAgICBpZiAoY2hpbGRyZW4gIT09IG51bGwgJiYgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IChiaW5kQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGQpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY2hpbGRyZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGRyZW4udG9TdHJpbmcoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkcmVuLmRpZE1vdW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbi5tb3VudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghKGVsZW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUlJPUjogY29kZSAzLiBTZWUgJHt1cmx9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4ucGFyZW50ICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ucGFyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkcmVuLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lYMk55WldGMFpVVnNaVzFsYm5SVmRHbHNjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdjbWwyWVhSbEwxOWpjbVZoZEdWRmJHVnRaVzUwVlhScGJITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3TzBkQlVVYzdRVUZGU0N4UFFVRlBMRVZCUVVNc1UwRkJVeXhGUVVGRExFMUJRVTBzWTBGQll5eERRVUZCTzBGQlJYUkRMRTlCUVU4c1IwRkJSeXhOUVVGTkxGRkJRVkVzUTBGQlFUdEJRWGxGZUVJN096czdPenM3UjBGUFJ6dEJRVU5JTEUxQlFVMHNRMEZCUXl4TlFVRk5MRk5CUVZNc1IwRkJSeXhEUVVOeVFpeFBRVUZuUWl4RlFVTm9RaXhMUVVGNVFpeEZRVU42UWl4RlFVRkZMRWRCUVVjc1MwRkJTeXhGUVVOT0xFVkJRVVU3U1VGRFRpeEpRVUZKTEV0QlFVc3NSVUZCUlR0UlFVTlFMRXRCUVVzc1RVRkJUU3hEUVVGRExFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTzFsQlF6VkRMRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzVVVGQlVTeEpRVUZKTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFc1JVRkJSVHRuUWtGRGNFUXNTVUZCU1N4SFFVRkhMRXRCUVVzc1YwRkJWeXhGUVVGRk8yOUNRVU55UWl4UFFVRlBMRU5CUVVNc1UwRkJVeXhIUVVGSExFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUVR0cFFrRkRja003Y1VKQlFVMHNTVUZCU1N4RlFVRkZMRVZCUVVVN2IwSkJRMWdzVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXl4RFFVRkJPMmxDUVVOd1JEdHhRa0ZCVFR0dlFrRkRTQ3hQUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU1zUTBGQlFUdHBRa0ZETlVNN1lVRkRTanRwUWtGQlRTeEpRVUZKTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlN4RlFVRkZMRGhEUVVFNFF6dG5Ra0ZEYWtZc1NVRkJTU3hQUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWVUZCVlN4RlFVRkZPMjlDUVVNMVFpeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRM0JDTEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRE8zbENRVU5RTEZkQlFWY3NSVUZCYjBJc1JVRkRjRU1zUjBGQlowSXNRMEZEYmtJc1EwRkJRVHRwUWtGRFNqdGhRVU5LTzJsQ1FVRk5MRWxCUTBnc1IwRkJSeXhMUVVGTExFdEJRVXM3WjBKQlEySXNUMEZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExGRkJRVkU3WjBKQlEzaENMRk5CUVZNc1NVRkJTU3hIUVVGSExFVkJRMnhDTzJkQ1FVTkhMRWRCUVc5Q0xFTkJRVU1zVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUVR0aFFVTXhRenRwUWtGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRekZDTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhQUVVGUExFZEJRVWNzYTBOQlFXdERMRU5CUVVNc1EwRkJRVHRoUVVOb1JUdFRRVU5LTzB0QlEwbzdRVUZEVEN4RFFVRkRMRU5CUVVFN1FVRkZSRHM3T3pzN08wZEJUVWM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4WlFVRlpMRWRCUVVjc1EwRkRlRUlzVDBGQllTeEZRVU5pTEZGQlFYVkNMRVZCUTI1Q0xFVkJRVVU3U1VGRFRpeEpRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRkpMRWxCUVVrc1VVRkJVU3hMUVVGTExGTkJRVk1zUlVGQlJUdFJRVU0zUXl4SlFVRkpMRkZCUVZFc1dVRkJXU3hMUVVGTExFVkJRVVU3V1VGRE0wSXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFdEJRVzFDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUTNSRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUXk5Q0xFTkJRVU1zUTBGQlFUdFRRVU5NTzJGQlFVMHNTVUZEU0N4UFFVRlBMRkZCUVZFc1MwRkJTeXhSUVVGUk8xbEJRelZDTEU5QlFVOHNVVUZCVVN4TFFVRkxMRkZCUVZFc1JVRkRPVUk3V1VGRFJTeFBRVUZQTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRVHRUUVVOd1JUdGhRVUZOTEVsQlFVa3NVVUZCVVN4WlFVRlpMRk5CUVZNc1JVRkJSVHRaUVVOMFF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1NVRkJTU3hQUVVGUExGbEJRVmtzVFVGQlRTeERRVUZETEZkQlFWY3NSVUZCUlR0blFrRkROMFFzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRVHRuUWtGRmRrSXNUMEZCVFR0aFFVTlVPMmxDUVVGTkxFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNXVUZCV1N4TlFVRk5MRU5CUVVNc1YwRkJWeXhEUVVGRExFVkJRVVU3WjBKQlEycEVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVUU3WVVGREwwTTdXVUZGUkN4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFdEJRVXNzVDBGQlR5eEZRVUZGTzJkQ1FVTTNRaXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUVR0aFFVTTFRanRaUVVWRUxGRkJRVkVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUVR0VFFVTjZRanRoUVVGTk8xbEJRMGdzVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRVHRUUVVOb1F6dExRVU5LTzBGQlEwd3NRMEZCUXl4RFFVRkJJbjA9IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIGNyZWF0ZUVsZW1lbnQgZnVuY3Rpb24gZm9yIERPTSBtYW5pcHVsYXRpb25cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9qc3gudHNcIiAvPlxuaW1wb3J0IHsgYmluZENoaWxkcmVuLCBiaW5kUHJvcHMgfSBmcm9tIFwiLi9wcml2YXRlL19jcmVhdGVFbGVtZW50VXRpbHNcIjtcbi8qKlxuICpcbiAqIEBwYXJhbSB0YWdOYW1lT3JDb21wb25lbnQgLSBuYW1lIG9mIEhUTUwgZWxlbWVudCBvciBmdW5jdGlvbiBjb21wb25lbnRcbiAqIEBwYXJhbSBwcm9wcyAtIHByb3BzIG9mIGVsZW1lbnQgb3IgY29tcG9uZW50XG4gKiAxLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyB0YWduYW1lLCBwcm9wcyBhcmUgZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiAyLiBJZiBgdGFnTmFtZU9yQ29tcG9uZW50YCBpcyBhIGZ1bmN0aW9uLCBwcm9wcyBhcmUgdGhhdCBmdW5jdGlvbnMgcGFyYW1ldGVyc1xuICogQHBhcmFtIGNoaWxkcmVuIC0gY2hpbGRyZW4gb2YgdGhpcyBlbGVtZW50LiBDYW4gYmUgbm90aGluZywgbnVtYmVyIChjb252ZXJ0ZWQgdG8gc3RyaW5nKSwgc3RyaW5nICh0ZXh0KSwgb3IgYW5vdGhlciBlbGVtZW50LiBBbiBhcnJheSBvZiBhbnkgb2YgdGhlc2Ugd2lsbCBjcmVhdGUgbXVsdGlwbGUgY2hpbGRyZW5cbiAqIEBwYXJhbSBjaGlsZHJlbkFyZ3MgLSByZXN0IHBhcmFtZXRlciBmb3IgY2hpbGRyZW5cbiAqIEByZXR1cm5zIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZU9yQ29tcG9uZW50LCBwcm9wcywgLi4uY2hpbGRyZW4pIHtcbiAgICBpZiAodHlwZW9mICh0YWdOYW1lT3JDb21wb25lbnQpID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWVPckNvbXBvbmVudCk7XG4gICAgICAgIGJpbmRQcm9wcyhlbGVtZW50LCBwcm9wcyk7XG4gICAgICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgKHRhZ05hbWVPckNvbXBvbmVudCkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gdGFnTmFtZU9yQ29tcG9uZW50KHByb3BzLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBFcnJvcihcInRhZ05hbWVPckNvbXBvbmVudCBpcyBvZiBpbnZhbGlkIHR5cGUuXCIpO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkzSmxZWFJsUld4bGJXVnVkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5amNtVmhkR1ZGYkdWdFpXNTBMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQk96czdPenM3T3p0SFFWRkhPMEZCUTBnc01rSkJRVEpDTzBGQlF6TkNMR2xEUVVGcFF6dEJRVVZxUXl4UFFVRlBMRVZCUjBnc1dVRkJXU3hGUVVOYUxGTkJRVk1zUlVGRFdpeE5RVUZOTEN0Q1FVRXJRaXhEUVVGQk8wRkJjME4wUXpzN096czdPenM3TzBkQlUwYzdRVUZEU0N4TlFVRk5MRlZCUVZVc1lVRkJZU3hEUVVsNlFpeHJRa0ZIV1N4RlFVTmFMRXRCUVRaQ0xFVkJRemRDTEVkQlFVY3NVVUZCTWtJN1NVRkZPVUlzU1VGQlNTeFBRVUZOTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUzBGQlN5eFJRVUZSTEVWQlFVVTdVVUZEZWtNc1RVRkJUU3hQUVVGUExFZEJRVWNzVVVGQlVTeERRVUZETEdGQlFXRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZCTzFGQlJURkVMRk5CUVZNc1EwRkJReXhQUVVGUExFVkJRVVVzUzBGQk1FSXNRMEZCUXl4RFFVRkJPMUZCUlRsRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVFN1VVRkZMMElzVDBGQlR5eFBRVUZQTEVOQlFVRTdTMEZEYWtJN1UwRkJUU3hKUVVGSkxFOUJRVTBzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhMUVVGTExGVkJRVlVzUlVGQlJUdFJRVU5zUkN4UFFVRlBMR3RDUVVGclFpeERRVUZETEV0QlFWVXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRVHRMUVVOc1JEdEpRVVZFTEU5QlFVOHNTMEZCU3l4RFFVRkRMSGREUVVGM1F5eERRVUZETEVOQlFVRTdRVUZETVVRc1EwRkJRenRCUVVWRUxHVkJRV1VzWVVGQllTeERRVUZCSW4wPSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50TlMgY3JlYXRlRWxlbWVudCBmb3IgbmFtZXNwYWNlZCBlbGVtZW50c1xuICovXG5pbXBvcnQgeyBiaW5kQ2hpbGRyZW4sIGJpbmRQcm9wcyB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuLyoqXG4gKiBDcmVhdGVzIGEgY2hpbGQgZWxlbWVudCB0byBkZVN0YWduYXRlXG4gKiBAcGFyYW0gbmFtZXNwYWNlVVJJIC0gbmFtZXNwYWNlIHVyaVxuICogQHBhcmFtIHRhZ05hbWUgLSBuYW1lIG9mIEhUTUwgZWxlbWVudFxuICogQHBhcmFtIHByb3BzIC0gZWxlbWVudCBwcm9wZXJ0aWVzLCBzdWNoIGFzIGNsYXNzLCBpbm5lckhUTUwsIGlkLCBzdHlsZSwgZXRjXG4gKiBAcGFyYW0gY2hpbGRyZW4gLSBjaGlsZHJlbiBvZiB0aGlzIGVsZW1lbnQuIENhbiBiZSBub3RoaW5nLCBudW1iZXIgKGNvbnZlcnRlZCB0byBzdHJpbmcpLCBzdHJpbmcgKHRleHQpLCBvciBhbm90aGVyIGVsZW1lbnQuIEFuIGFycmF5IG9mIGFueSBvZiB0aGVzZSB3aWxsIGNyZWF0ZSBtdWx0aXBsZSBjaGlsZHJlblxuICogQHBhcmFtIGNoaWxkcmVuUmVzdCAtIHJlc3QgcGFyYW1ldGVyIG9mIGNoaWxkcmVuXG4gKiBAcmV0dXJucyBodG1sIGVsZW1lbnRcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnROUyA9IChuYW1lc3BhY2VVUkksIHRhZ05hbWUsIHByb3BzLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlVVJJLCB0YWdOYW1lKTtcbiAgICBiaW5kUHJvcHMoZWxlbWVudCwgcHJvcHMsIHRydWUpO1xuICAgIGJpbmRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbik7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudE5TO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxSV3hsYldWdWRFNVRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJOeVpXRjBaVVZzWlcxbGJuUk9VeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN1IwRlJSenRCUVVWSUxFOUJRVThzUlVGRlNDeFpRVUZaTEVWQlExb3NVMEZCVXl4RlFVTmFMRTFCUVUwc0swSkJRU3RDTEVOQlFVRTdRVUZGZEVNN096czdPenM3TzBkQlVVYzdRVUZEU0N4TlFVRk5MRU5CUVVNc1RVRkJUU3hsUVVGbExFZEJRVWNzUTBGRE0wSXNXVUZCSzBjc1JVRkRMMGNzVDBGQk1FTXNSVUZETVVNc1MwRkJkME1zUlVGRGVFTXNSMEZCUnl4UlFVRXlRaXhGUVVOMlFpeEZRVUZGTzBsQlExUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eFpRVUZaTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVFN1NVRkZMMFFzVTBGQlV5eERRVUZETEU5QlFVOHNSVUZCUlN4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVUU3U1VGRkwwSXNXVUZCV1N4RFFVRkRMRTlCUVU4c1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlFUdEpRVVV2UWl4UFFVRlBMRTlCUVU4c1EwRkJRVHRCUVVOc1FpeERRVUZETEVOQlFVRTdRVUZGUkN4bFFVRmxMR1ZCUVdVc1EwRkJRU0o5IiwiLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlZiA9ICgpID0+ICh7XG4gICAgY3VycmVudDogbnVsbCxcbn0pO1xuLyoqXG4gKiBDcmVhdGVzIGEgcmVmZXJlbmNlIGZvciBhIG5lc3RlZCBjb21wb25lbnRcbiAqIEByZXR1cm5zIGVtcHR5IHJlZiBvYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVmO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTNKbFlYUmxVbVZtTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2YzNKakwyTnlaV0YwWlZKbFppNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZsUVRzN08wZEJSMGM3UVVGRFNDeE5RVUZOTEVOQlFVTXNUVUZCVFN4VFFVRlRMRWRCUVVjc1IwRkJkME1zUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtVc1QwRkJUeXhGUVVGRkxFbEJRVWs3UTBGRGFFSXNRMEZCUXl4RFFVRkJPMEZCUlVZN096dEhRVWRITzBGQlEwZ3NaVUZCWlN4VFFVRlRMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgUHJlc2V0IC0gYmFzZSBmb3IgYSBjb21wb25lbnRcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IGRlZmF1bHQgYXMgX2NyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlRWxlbWVudE5TIH0gZnJvbSBcIi4uL2NyZWF0ZUVsZW1lbnROU1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBfY3JlYXRlUmVmIH0gZnJvbSBcIi4uL2NyZWF0ZVJlZlwiO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY29tcG9uZW50c1xuICovXG5leHBvcnQgY2xhc3MgUHJlc2V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3JlYXRlRWxlbWVudE5TID0gX2NyZWF0ZUVsZW1lbnROUztcbiAgICAgICAgdGhpcy5jcmVhdGVSZWYgPSBfY3JlYXRlUmVmO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gY29tcG9uZW50IGNhdGNoZXMgZXJyb3IuIERlZmF1bHQgYmVoYXZpb3VyIGlzIGNvbnNvbGUuZXJyb3JcbiAgICAgICAgICogQHBhcmFtIGVycm9yIC0gZXJyb3Igb2JqZWN0IHdpdGggaW5mb1xuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoID0gKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCBiZWZvcmUgY29tcG9uZW50IGlzIHVwZGF0ZWRcbiAgICAgICAgICogQHJldHVybnMgd2hldGhlciBvciBub3QgY29tcG9uZW50IHNob3VsZCB1cGRhdGUvcmUtcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9ICgpID0+IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW5kZXJpbmcgSFRNTCwgbXVzdCBiZSBwYXJ0IG9mIGV4dGVuZGVkIGNsYXNzXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEBhYnN0cmFjdFxuICAgICAgICAgKiBAcmV0dXJucyBpZiByZXR1cm5zIG51bGwgZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVuZGVyID0gKCkgPT4gbnVsbDtcbiAgICB9XG59XG5QcmVzZXQuY3JlYXRlRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50O1xuUHJlc2V0LmNyZWF0ZUVsZW1lbnROUyA9IF9jcmVhdGVFbGVtZW50TlM7XG5QcmVzZXQuY3JlYXRlUmVmID0gX2NyZWF0ZVJlZjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgySmhjMlV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjSEpwZG1GMFpTOWZZbUZ6WlM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdPMGRCVTBjN1FVRkZTQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEdOQlFXTXNSVUZCUXl4TlFVRk5MR3RDUVVGclFpeERRVUZCTzBGQlF6RkVMRTlCUVU4c1JVRkJReXhQUVVGUExFbEJRVWtzWjBKQlFXZENMRVZCUVVNc1RVRkJUU3h2UWtGQmIwSXNRMEZCUVR0QlFVTTVSQ3hQUVVGUExFVkJRVU1zVDBGQlR5eEpRVUZKTEZWQlFWVXNSVUZCUXl4TlFVRk5MR05CUVdNc1EwRkJRVHRCUVdsRGJFUXNNRUpCUVRCQ08wRkJRekZDT3p0SFFVVkhPMEZCUTBnc1RVRkJUU3hQUVVGblFpeE5RVUZOTzBsQlFUVkNPMUZCVVc5Q0xHdENRVUZoTEVkQlFVY3NZMEZCWXl4RFFVRkJPMUZCUlRsQ0xHOUNRVUZsTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVUU3VVVGRmJFTXNZMEZCVXl4SFFVRkhMRlZCUVZVc1EwRkJRVHRSUVVWMFF6czdPenRYUVVsSE8xRkJRMGtzYzBKQlFXbENMRWRCUVVjc1EwRkJReXhMUVVGWkxFVkJRVkVzUlVGQlJTeERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3VVVGRmRrVTdPenRYUVVkSE8xRkJRMGtzTUVKQlFYRkNMRWRCUVVjc1IwRkJXU3hGUVVGRkxFTkJRVU1zU1VGQlNTeERRVUZCTzFGQlJXeEVPenM3T3pzN1YwRk5SenRSUVVOaExGZEJRVTBzUjBGQlJ5eEhRVUZsTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVFN1NVRkZia1FzUTBGQlF6czdRVUZzUXpCQ0xHOUNRVUZoTEVkQlFVY3NZMEZCWXl4RFFVRkJPMEZCUlRsQ0xITkNRVUZsTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVUU3UVVGRmJFTXNaMEpCUVZNc1IwRkJSeXhWUVVGVkxFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBFdmVudHNcbiAqIEBwYWNrYWdlXG4gKi9cbmltcG9ydCB7IFByZXNldCBhcyBCYXNlQ29tcG9uZW50IH0gZnJvbSBcIi4vX2Jhc2VcIjtcbmNvbnN0IGV2ZW50TmFtZXMgPSBbXG4gICAgXCJvbkZvY3VzXCIsXG4gICAgXCJvbkJsdXJcIixcbiAgICBcIm9uRm9jdXNJblwiLFxuICAgIFwib25Gb2N1c091dFwiLFxuICAgIFwib25BbmltYXRpb25TdGFydFwiLFxuICAgIFwib25BbmltYXRpb25DYW5jZWxcIixcbiAgICBcIm9uQW5pbWF0aW9uRW5kXCIsXG4gICAgXCJvbkFuaW1hdGlvbkl0ZXJhdGlvblwiLFxuICAgIFwib25UcmFuc2l0aW9uU3RhcnRcIixcbiAgICBcIm9uVHJhbnNpdGlvbkNhbmNlbFwiLFxuICAgIFwib25UcmFuc2l0aW9uRW5kXCIsXG4gICAgXCJvblRyYW5zaXRpb25SdW5cIixcbiAgICBcIm9uQXV4Q2xpY2tcIixcbiAgICBcIm9uQ2xpY2tcIixcbiAgICBcIm9uRGJsQ2xpY2tcIixcbiAgICBcIm9uTW91c2VEb3duXCIsXG4gICAgXCJvbk1vdXNlRW50ZXJcIixcbiAgICBcIm9uTW91c2VMZWF2ZVwiLFxuICAgIFwib25Nb3VzZU1vdmVcIixcbiAgICBcIm9uTW91c2VPdmVyXCIsXG4gICAgXCJvbk1vdXNlT3V0XCIsXG4gICAgXCJvbk1vdXNlVXBcIixcbiAgICBcIm9uV2hlZWxcIixcbl0sIHdpbmRvd0V2ZW50TmFtZXMgPSBbXG4gICAgXCJvbkxvYWRcIixcbiAgICBcIm9uT25saW5lXCIsXG4gICAgXCJvbk9mZmxpbmVcIixcbiAgICBcIm9uUmVzaXplXCIsXG4gICAgXCJvblNjcm9sbFwiLFxuICAgIFwib25LZXlEb3duXCIsXG4gICAgXCJvbktleVByZXNzXCIsXG4gICAgXCJvbktleVVwXCIsXG5dO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjbGFzcyBFdmVudHMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJpbmRzIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICogRG8gbm90IGNhbGwgbWFudWFsbHlcbiAgICAgICAgICogQHBhY2FrZ2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzID0gKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXIod2luZG93LmFkZEV2ZW50TGlzdGVuZXIsIHdpbmRvd0V2ZW50TmFtZXMpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQmluZHMgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgKiBEbyBub3QgY2FsbCBtYW51YWxseVxuICAgICAgICAgKiBAcGFjYWtnZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudExpc3RlbmVycyA9IChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyLCB3aW5kb3dFdmVudE5hbWVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lciA9IChldmVudExpc3RlbmVyLCBldmVudHMgPSBldmVudE5hbWVzKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50TmFtZSBvZiBldmVudHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBodG1sRXZlbnROYW1lID0gZXZlbnROYW1lLnNsaWNlKDIpLnRvTG93ZXJDYXNlKCksIGNhbGxiYWNrID0gdGhpc1tldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAhPT0gdW5kZWZpbmVkICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcihodG1sRXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVgyVjJaVzUwY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3Y21sMllYUmxMMTlsZG1WdWRITXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJa0ZCUVVFN096czdPenM3T3p0SFFWTkhPMEZCUlVnc1QwRkJUeXhGUVVGRExFMUJRVTBzU1VGQlNTeGhRVUZoTEVWQlFVTXNUVUZCVFN4VFFVRlRMRU5CUVVFN1FVRnZUQzlETEUxQlFVMHNWVUZCVlN4SFFVRnhRanRKUVVOcVF5eFRRVUZUTzBsQlExUXNVVUZCVVR0SlFVTlNMRmRCUVZjN1NVRkRXQ3haUVVGWk8wbEJRMW9zYTBKQlFXdENPMGxCUTJ4Q0xHMUNRVUZ0UWp0SlFVTnVRaXhuUWtGQlowSTdTVUZEYUVJc2MwSkJRWE5DTzBsQlEzUkNMRzFDUVVGdFFqdEpRVU51UWl4dlFrRkJiMEk3U1VGRGNFSXNhVUpCUVdsQ08wbEJRMnBDTEdsQ1FVRnBRanRKUVVOcVFpeFpRVUZaTzBsQlExb3NVMEZCVXp0SlFVTlVMRmxCUVZrN1NVRkRXaXhoUVVGaE8wbEJRMklzWTBGQll6dEpRVU5rTEdOQlFXTTdTVUZEWkN4aFFVRmhPMGxCUTJJc1lVRkJZVHRKUVVOaUxGbEJRVms3U1VGRFdpeFhRVUZYTzBsQlExZ3NVMEZCVXp0RFFVTmFMRVZCUTBjc1owSkJRV2RDTEVkQlFYRkNPMGxCUTJwRExGRkJRVkU3U1VGRFVpeFZRVUZWTzBsQlExWXNWMEZCVnp0SlFVTllMRlZCUVZVN1NVRkRWaXhWUVVGVk8wbEJRMVlzVjBGQlZ6dEpRVU5ZTEZsQlFWazdTVUZEV2l4VFFVRlRPME5CUTFvc1EwRkJRVHRCUVVkTUxEQkNRVUV3UWp0QlFVTXhRaXhOUVVGTkxFOUJRV2RDTEUxQlFVOHNVMEZCVVN4aFFVRmhPMGxCUVd4RU96dFJRVVZKT3pzN08xZEJTVWM3VVVGRFowSXNkVUpCUVd0Q0xFZEJRVWNzUTBGQlF5eFBRVUZ2UWl4RlFVRlJMRVZCUVVVN1dVRkRia1VzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUVR0WlFVTTNReXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUlVGQlJTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGQk8xRkJRMnhGTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3TzFkQlNVYzdVVUZEWjBJc2VVSkJRVzlDTEVkQlFVY3NRMEZCUXl4UFFVRnZRaXhGUVVGUkxFVkJRVVU3V1VGRGNrVXNTVUZCU1N4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRVHRaUVVOb1JDeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXh0UWtGQmJVSXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZCTzFGQlEzSkZMRU5CUVVNc1EwRkJRVHRSUVVWUExHMUNRVUZqTEVkQlFVY3NRMEZEY2tJc1lVRkJORUlzUlVGRE5VSXNUVUZCVFN4SFFVRkhMRlZCUVZVc1JVRkRaaXhGUVVGRk8xbEJRMDRzUzBGQlN5eE5RVUZOTEZOQlFWTXNTVUZCU1N4TlFVRk5MRVZCUVVVN1owSkJRelZDTEUxQlFVMHNZVUZCWVN4SFFVRkhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUTJ4RUxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVFN1owSkJSVGxDTEVsQlFVa3NVVUZCVVN4TFFVRkxMRk5CUVZNc1NVRkJTU3hSUVVGUkxGbEJRVmtzVVVGQlVTeEZRVUZGTzI5Q1FVTjRSQ3hoUVVGaExFTkJRMVFzWVVGQllTeEZRVU5pTEZGQlFUaERMRU5CUTJwRUxFTkJRVUU3YVVKQlEwbzdZVUZEU2p0UlFVTk1MRU5CUVVNc1EwRkJRVHRKUVVWTUxFTkJRVU03UTBGQlFTSjkiLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgVXRpbHMgLSB1dGlsaXRpZXMgZm9yIERlU3RhZ25hdGVcbiAqL1xuLyoqXG4gKiBDaGVja3MgaWYgdmFsMSBhbmQgdmFsMiBhcmUgZXF1YWxcbiAqIEBwYXJhbSB2YWwxIC0gdmFsdWUgdG8gY2hlY2sgZm9yIGVxdWFsaXR5XG4gKiBAcGFyYW0gdmFsMiAtIHZhbHVlIHRvIGNvbXBhcmUgYWdhaW5zdCB2YWwxXG4gKiBAcGFyYW0gbWF4RGVwdGggLSBtYXggcmVjdXJzaW9uIGRlcHRoIHRvIGNyYXdsIGFuIG9iamVjdC4gQWZ0ZXIgbWF4IGRlcHRoIGlzXG4gKiByZWFjaGVkLCB0aGUgdHdvIHZhbHVlcyBhcmUgc2ltcGx5IGNvbXBhcmVkIHdpdGggYD09PWBcbiAqIEBwYXJhbSBtYXhMZW5ndGggLSBtYXggbGVuZ3RoIG9mIGFycmF5IHRvIGNyYXdsLiBJZiBtYXggbGVudGggaXMgcmVhY2hlZCwgdHdvXG4gKiBhcnJheXMgd2lsbCBzaW1wbHkgYmUgY29tcGFyZWQgd2l0aCBgPT09YFxuICogQHJldHVybnMgYHZhbDEgPT09IHZhbDJgXG4gKi9cbmV4cG9ydCBjb25zdCBpc0VxdWFsID0gKHZhbDEsIHZhbDIsIG1heERlcHRoID0gMywgbWF4TGVuZ3RoID0gMTApID0+IHtcbiAgICBpZiAobWF4RGVwdGggPT09IDApIHsgLy8gSWYgbWF4RGVwdGggcmVhY2hlZCwganVzdCBydW4gPT09XG4gICAgICAgIHJldHVybiB2YWwxID09PSB2YWwyO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsMSAhPT0gdHlwZW9mIHZhbDIpIHsgLy8gSWYgdGhleSBhcmVuJ3QgdGhlIHNhbWUgdHlwZSwgcmV0dXJuIGZhbHNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbDEgaW5zdGFuY2VvZiBBcnJheSAmJiB2YWwyIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgaWYgKHZhbDEubGVuZ3RoICE9PSB2YWwyLmxlbmd0aCkgeyAvLyBJZiBhcnJheXMgaGF2ZSBkaWZmZXJlbnQgbGVuZ3Roc1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbDEubGVuZ3RoID4gbWF4TGVuZ3RoIHx8IHZhbDIubGVuZ3RoID4gbWF4TGVuZ3RoKSB7IC8vIElmIGFycmF5IGlzIHRvbyBiaWdcbiAgICAgICAgICAgIHJldHVybiB2YWwxID09PSB2YWwyO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2YWwxLmxlbmd0aDsgaW5kZXgrKykgeyAvLyBHbyB0aHJvdWdoIGVhY2ggaXRlbVxuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHZhbDFbaW5kZXhdLCB2YWwyW2luZGV4XSwgbWF4RGVwdGggLSAxLCBtYXhMZW5ndGgpKSB7IC8vIFRlc3QgaWYgdHdvIGFycmF5IGl0ZW1zIGFyZSBlcXVhbFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAodmFsMSBpbnN0YW5jZW9mIE9iamVjdCAmJiB2YWwyIGluc3RhbmNlb2YgT2JqZWN0KSB7IC8vIElmIG9iamVjdFxuICAgICAgICBpZiAoIWlzRXF1YWwoT2JqZWN0LmtleXModmFsMSksIE9iamVjdC5rZXlzKHZhbDIpLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHsgLy8gSWYgdGhleSBkb24ndCBoYXZlIGhlIHNhbWUga2V5c1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHZhbDEpKSB7IC8vIEdvIHRocm91Z2ggYW5kIHRlc3QgZWFjaCB2YWx1ZVxuICAgICAgICAgICAgaWYgKCFpc0VxdWFsKHZhbDFba2V5XSwgdmFsMltrZXldLCBtYXhEZXB0aCAtIDEsIG1heExlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB2YWwxID09PSB2YWwyO1xufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpc0VxdWFsLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTh1TGk5emNtTXZjSEpwZG1GMFpTOTFkR2xzY3k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3T3pzN096czdSMEZSUnp0QlFVVklPenM3T3pzN096czdSMEZUUnp0QlFVTklMRTFCUVUwc1EwRkJReXhOUVVGTkxFOUJRVThzUjBGQlJ5eERRVU51UWl4SlFVRmhMRVZCUTJJc1NVRkJZU3hGUVVOaUxGRkJRVkVzUjBGQlJ5eERRVUZETEVWQlExb3NVMEZCVXl4SFFVRkhMRVZCUVVVc1JVRkRVQ3hGUVVGRk8wbEJRMVFzU1VGQlNTeFJRVUZSTEV0QlFVc3NRMEZCUXl4RlFVRkZMRVZCUVVVc2IwTkJRVzlETzFGQlEzUkVMRTlCUVU4c1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlFUdExRVU4yUWp0VFFVRk5MRWxCUVVrc1QwRkJUeXhKUVVGSkxFdEJRVXNzVDBGQlR5eEpRVUZKTEVWQlFVVXNSVUZCUlN3MlEwRkJOa003VVVGRGJrWXNUMEZCVHl4TFFVRkxMRU5CUVVFN1MwRkRaanRKUVVWRUxFbEJRVWtzU1VGQlNTeFpRVUZaTEV0QlFVc3NTVUZCU1N4SlFVRkpMRmxCUVZrc1MwRkJTeXhGUVVGRk8xRkJRMmhFTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTFCUVUwc1MwRkJTeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNiVU5CUVcxRE8xbEJRMnhGTEU5QlFVOHNTMEZCU3l4RFFVRkJPMU5CUTJZN1lVRkJUU3hKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NVMEZCVXl4SlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVTBGQlV5eEZRVUZGTEVWQlFVVXNjMEpCUVhOQ08xbEJRMjVHTEU5QlFVOHNTVUZCU1N4TFFVRkxMRWxCUVVrc1EwRkJRVHRUUVVOMlFqdFJRVVZFTEV0QlFVc3NTVUZCU1N4TFFVRkxMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSU3hGUVVGRkxFVkJRVVVzZFVKQlFYVkNPMWxCUTNaRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSVUZCUlN4UlFVRlJMRWRCUVVjc1EwRkJReXhGUVVGRkxGTkJRVk1zUTBGQlF5eEZRVUZGTEVWQlFVVXNiME5CUVc5RE8yZENRVU51Unl4UFFVRlBMRXRCUVVzc1EwRkJRVHRoUVVObU8xTkJRMG83VVVGRlJDeFBRVUZQTEVsQlFVa3NRMEZCUVR0TFFVTmtPMU5CUVUwc1NVRkJTU3hKUVVGSkxGbEJRVmtzVFVGQlRTeEpRVUZKTEVsQlFVa3NXVUZCV1N4TlFVRk5MRVZCUVVVc1JVRkJSU3haUVVGWk8xRkJRM1pGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUTFJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZEYWtJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZEYWtJc1VVRkJVU3hIUVVGSExFTkJRVU1zUlVGRFdpeFRRVUZUTEVOQlExb3NSVUZCUlN4RlFVRkZMR3REUVVGclF6dFpRVU51UXl4UFFVRlBMRXRCUVVzc1EwRkJRVHRUUVVObU8xRkJSVVFzUzBGQlN5eE5RVUZOTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNhVU5CUVdsRE8xbEJSM0JGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUTFBc1NVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVU5xUWl4SlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRMnhDTEZGQlFWRXNSMEZCUnl4RFFVRkRMRVZCUTFvc1UwRkJVeXhEUVVOYUxFVkJRVVU3WjBKQlEwTXNUMEZCVHl4TFFVRkxMRU5CUVVFN1lVRkRaanRUUVVOS08xRkJSVVFzVDBGQlR5eEpRVUZKTEVOQlFVRTdTMEZEWkR0SlFVVkVMRTlCUVU4c1NVRkJTU3hMUVVGTExFbEJRVWtzUTBGQlFUdEJRVU40UWl4RFFVRkRMRU5CUVVFN1FVRkZSQ3hsUVVGbE8wbEJRMWdzVDBGQlR6dERRVU5XTEVOQlFVRWlmUT09IiwiLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBBIHNpbXBsZSwgUmVhY3RKUyBpbnNwaXJlZCBsaWJyYXJ5IHRvIGNyZWF0ZSBkeW5hbWljIGNvbXBvbmVudHMgd2l0aGluIHN0YXRpYyBzaXRlcyBlYXNpZXJcbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChDKSAyMDIwIC0gMjAyMSBMdWtlIFpoYW5nXG4gKiBAYXV0aG9yIEx1a2UgWmhhbmcgbHVrZS16aGFuZy0wNC5naXRodWIuaW9cbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMi4wLjBcbiAqIEBleHBvcnRzIERlU3RhZ25hdGUgbWFpbiBkZXN0YWduYXRlIGNsYXNzXG4gKiBAZmlsZSBEZVN0YWduYXRlIGNvbXBvbmVudCBjbGFzc1xuICogQHByZXNlcnZlXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG1heC1saW5lcyAqL1xuaW1wb3J0IHsgRXZlbnRzIGFzIEJhc2UgfSBmcm9tIFwiLi9wcml2YXRlL19ldmVudHNcIjtcbmltcG9ydCB1cmwgZnJvbSBcIi4vcHJpdmF0ZS9fdXJsXCI7XG5pbXBvcnQgdXRpbHMgZnJvbSBcIi4vcHJpdmF0ZS91dGlsc1wiO1xuY29uc3QgdW5tb3VudGVkTXNnID0gXCJSZWZ1c2luZyB0byB1cGRhdGUgdW5tb3VudGVkIGNvbXBvbmVudFwiO1xuLyoqXG4gKiBEZVN0YWduYXRlXG4gKiBAY2xhc3NkZXNjIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNsYXNzXG4gKiBAbmFtZXNwYWNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBjbGFzcyBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0gcGFyZW50IC0gcGFyZW50IG9mIHRoaXMgZWxlbWVudFxuICAgICAqIEBwYXJhbSBwcm9wcyAtIGVsZW1lbnQgcHJvcGVydGllczsgd29ya3MgbGlrZSBSZWFjdCBQcm9wc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudCwgcHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3RhdGUgb2YgY29tcG9uZW50LiBXb3JrcyBzaW1pbGFyIFJlYWN0IFN0YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zdGF0ZSA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgaW5pdGlhbCBzdGF0ZSB3YXMgc2V0IGluIGluaXRpYWxpemVyXG4gICAgICAgICAqIERvIG5vdCB0aHJvdyBlcnJvciB3aXRoIGRpcmVjdCBzdGF0ZSBzZXR0aW5nXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kaWRTZXRJbml0aWFsU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGNvbXBvbmVudCBpcyBtb3VudGVkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9kaWRNb3VudCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yY2VzIGEgY29tcG9uZW50IHRvIHVwZGF0ZVxuICAgICAgICAgKiBGb2xsb3dzIHRoZSBzYW1lIGNvbXBvbmVudCB1cGRhdGluZyBwcm9jZWR1cmUgYXMgc2V0U3RhdGUgd2l0aG91dCBtb2RpZnlpbmcgc3RhdGVcbiAgICAgICAgICogQHJldHVybnMgcmV0dXJucyBlcnJvciBpZiBlcnJvciBpcyB0aHJvd25cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2RpZE1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1bm1vdW50ZWRNc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudERpZFVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3BhcmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMi4gU2VlICR7dXJsfS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKF9iID0gdGhpcy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwodGhpcywgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyksIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGUodGhpcy5fZXhlY1JlbmRlcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrcyBpZiB0aGUgc3RhdGUgY2hhbmdlZCBmcm9tIHRoZSBwcmV2aW91cyBzdGF0ZS4gQ2FuIG1lIGF0dGFjaGVkIHRvXG4gICAgICAgICAqIGBzaG91bGRDb21wb25lbnRVcGRhdGVgXG4gICAgICAgICAqIEBwYXJhbSBrZXlzIC0gbGlzdCBvZiBrZXlzIHRvIGNyYXdsLiBJZiBsZWZ0IHVuZGVmaW5lZCAoZGVmYXVsdCkgdGhlblxuICAgICAgICAgKiB1c2UgYWxsIGtleXMuIFNob3VsZCBiZSBga2V5b2YgU3RhdGVgLCBidXQgdGhlcmUgd2VyZSBzb21lIFR5cGVzY3JpcHRcbiAgICAgICAgICogdHJvdWJsZXMuXG4gICAgICAgICAqIEBwYXJhbSBtYXhEZXB0aCAtIG1heCByZWN1cnNpb24gZGVwdGggdG8gY3Jhd2wgYW4gb2JqZWN0LiBBZnRlciBtYXggZGVwdGhcbiAgICAgICAgICogaXMgcmVhY2hlZCwgdGhlIHR3byB2YWx1ZXMgYXJlIHNpbXBseSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gICAgICAgICAqIEBwYXJhbSBtYXhMZW5ndGggLSBtYXggbGVuZ3RoIG9mIGFycmF5IHRvIGNyYXdsLiBJZiBtYXggbGVudGggaXMgcmVhY2hlZCxcbiAgICAgICAgICogdHdvIGFycmF5cyB3aWxsIHNpbXBseSBiZSBjb21wYXJlZCB3aXRoIGA9PT1gXG4gICAgICAgICAqIEByZXR1cm5zIGB2YWwxID09PSB2YWwyYFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGF0ZURpZENoYW5nZSA9IChrZXlzLCBtYXhEZXB0aCA9IDMsIG1heExlbmd0aCA9IDE1KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoa2V5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF1dGlscy5pc0VxdWFsKHRoaXMuX3N0YXRlLCB0aGlzLl9wcmV2U3RhdGUsIG1heERlcHRoLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB7fSwgcHJldlN0YXRlID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XSA9IHRoaXMuX3N0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgcHJldlN0YXRlW2tleV0gPSAoX2EgPSB0aGlzLl9wcmV2U3RhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICF1dGlscy5pc0VxdWFsKHN0YXRlLCBwcmV2U3RhdGUsIG1heERlcHRoLCBtYXhMZW5ndGgpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyBzdGF0ZVxuICAgICAgICAgKiBAcGFyYW0gb2JqIC0gc3RhdGUgdG8gc2V0XG4gICAgICAgICAqIEBwYXJhbSBzaG91bGRDb21wb25lbnRVcGRhdGUgLSBpZiBjb21wb25lbnQgc2hvdWxkIHVwZGF0ZSBhZnRlciBzdGF0ZSBzZXR0aW5nXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUgPSAob2JqLCBzaG91bGRDb21wb25lbnRVcGRhdGUgPSB0cnVlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2RpZE1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1bm1vdW50ZWRNc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxVcGRhdGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3N0YXRlKTtcbiAgICAgICAgICAgICAgICAoX2IgPSB0aGlzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbCh0aGlzLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc3RhdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVuZGVyZWRDb250ZW50ID0gc2hvdWxkQ29tcG9uZW50VXBkYXRlICYmIHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKClcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9leGVjUmVuZGVyKClcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlKHJlbmRlcmVkQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcsIG1heC1sZW4gKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWwgbW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEBwYXJhbSBwYXJlbnQgLSBwYXJlbnQgZWxlbWVudCB0byBtb3VudCB3aXRoOyBvcHRpb25hbFxuICAgICAgICAgKiBAcmV0dXJucyAtIHJlc3VsdCBvZiBhcHBlbmQgY2hpbGQgdG8gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW91bnRDb21wb25lbnQgPSAocGFyZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wYXJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxNb3VudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDMuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50TGlzdGVuZXJzKHRoaXMuX3BhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlkTW91bnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuY29tcG9uZW50RGlkTW91bnQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmZvckVhY2goKGNoaWxkKSA9PiBmcmFnbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbCBtb3VudGluZyB0byBiZSBtYW51YWxseSBjYWxsZWRcbiAgICAgICAgICogQHJldHVybnMgLSByZXN1bHQgb2YgYXBwZW5kIGNoaWxkIHRvIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1vdW50ID0gdGhpcy5tb3VudENvbXBvbmVudDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnRpbmcgdG8gYmUgbWFudWFsbHkgY2FsbGVkXG4gICAgICAgICAqIEByZXR1cm5zIC0gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51bm1vdW50Q29tcG9uZW50ID0gKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2EgPSB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZEV2ZW50TGlzdGVuZXJzKHRoaXMuX3BhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaWRNb3VudCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbm1vdW50aW5nIHRvIGJlIG1hbnVhbGx5IGNhbGxlZFxuICAgICAgICAgKiBAcmV0dXJucyAtIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudW5tb3VudCA9IHRoaXMudW5tb3VudENvbXBvbmVudDtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBtYXgtbGVuLCBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmVzIGNoaWxkcmVuIGZyb20gdGhpcy5fcGFyZW50XG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVSUk9SOiBjb2RlIDIuIFNlZSAke3VybH0uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5fcGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wYXJlbnQucmVtb3ZlQ2hpbGQodGhpcy5fcGFyZW50Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogRXhlY3V0ZXMgbmV3IHJlbmRlclxuICAgICAgICAgKiBAcmV0dXJucyByZW5kZXJlZCBjb250ZW50XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9leGVjUmVuZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyB0aGUgY29tcG9uZW50XG4gICAgICAgICAqIEBwYXJhbSByZW5kZXJlZENvbnRlbnQgLSByZW5kZXJlZCBjb250ZW50IGZyb20gZXhlY3V0aW5nIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fdXBkYXRlID0gKHJlbmRlcmVkQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRDb250ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IHRoaXMuX3BhcmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlbmRlcmVkQ29udGVudCkge1xuICAgICAgICAgICAgICAgIChfYiA9IHRoaXMuX3BhcmVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFwcGVuZENoaWxkKHJlbmRlcmVkQ29udGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVuZGVyZWRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgKF9jID0gdGhpcy5jb21wb25lbnREaWRVcGRhdGUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9oYW5kbGVFcnJvciA9IChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50RGlkQ2F0Y2goZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoU3RyaW5nKGVycikpO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnREaWRDYXRjaChlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcmVudCBpcyBudWxsLCBleHBlY3RlZCBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgZ2V0U3RhdGUgZ2V0dGVyIGFzIHRoaXMuc3RhdGUgaXRzZWxmIGlzIHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIGNvbXBvbmVudCBzdGF0ZVxuICAgICAqL1xuICAgIGdldCBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBjb21wb25lbnQgc3RhdGVcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2V0cyBjb21wb25lbnQgc3RhdGVcbiAgICAgKiBXQVJOOiBkbyBub3QgdXNlIHRoaXMgbWV0aG9kIHRvIG11dGF0ZSB0aGUgc3RhdGUgZGlyZWN0bHlcbiAgICAgKiBAcGFyYW0gb2JqIC0gc3RhdGUgdG8gc2V0XG4gICAgICovXG4gICAgc2V0IHN0YXRlKG9iaikge1xuICAgICAgICBpZiAodGhpcy5fZGlkU2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudERpZENhdGNoKG5ldyBFcnJvcihgRVJST1I6IGNvZGUgMS4gU2VlICR7dXJsfS5gKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG9iajtcbiAgICAgICAgICAgIHRoaXMuX2RpZFNldEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGdldFByb3BzIGdldHRlciBhcyB0aGlzLnByb3BzIGl0c2VsZiBpcyBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyBjb21wb25lbnQgcHJvcHNcbiAgICAgKi9cbiAgICBnZXQgZ2V0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHBhcmVudCBvZiB0aGlzIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSBlbGVtZW50IC0gcGFyZW50IGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgc2V0IHBhcmVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcGFyZW50IGVsZW1lbnQgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyBwYXJlbnRcbiAgICAgKi9cbiAgICBnZXQgcGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgZGlkTW91bnQgdmFsdWUgcHVibGljbHlcbiAgICAgKiBAcmV0dXJucyBpZiBtb3VudGVkXG4gICAgICovXG4gICAgZ2V0IGRpZE1vdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlkTW91bnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHByZXZpb3VzIHN0YXRlLiBVbmRlZmluZWQgaWYgbm8gcHJldmlvdXMgc3RhdGUgZXhpc3RzXG4gICAgICogQHJldHVybnMgcHJldmlvdXMgc3RhdGVcbiAgICAgKi9cbiAgICBnZXQgcHJldlN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJldlN0YXRlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXRjRzl1Wlc1MExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMk52YlhCdmJtVnVkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFUczdPenM3T3pzN096dEhRVlZITzBGQlEwZ3NPRUpCUVRoQ08wRkJSVGxDTEU5QlFVOHNSVUZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hGUVVGRExFMUJRVTBzYlVKQlFXMUNMRU5CUVVFN1FVRkZhRVFzVDBGQlR5eEhRVUZITEUxQlFVMHNaMEpCUVdkQ0xFTkJRVUU3UVVGRGFFTXNUMEZCVHl4TFFVRkxMRTFCUVUwc2FVSkJRV2xDTEVOQlFVRTdRVUZGYmtNc1RVRkJUU3haUVVGWkxFZEJRVWNzZDBOQlFYZERMRU5CUVVFN1FVRnpRamRFT3pzN096czdSMEZOUnp0QlFVTklMRTFCUVUwc1QwRkJaMElzVTBGSGNFSXNVMEZCVVN4SlFVRkpPMGxCTkVKV096czdPMDlCU1VjN1NVRkRTQ3haUVVGdlFpeE5RVUV5UWl4RlFVRlpMRXRCUVdFN1VVRkRjRVVzUzBGQlN5eEZRVUZGTEVOQlFVRTdVVUZFWjBRc1ZVRkJTeXhIUVVGTUxFdEJRVXNzUTBGQlVUdFJRUzlDZUVVN08xZEJSVWM3VVVGRFN5eFhRVUZOTEVkQlFWVXNSVUZCVnl4RFFVRkJPMUZCUlc1RE96czdWMEZIUnp0UlFVTkxMSGRDUVVGdFFpeEhRVUZITEV0QlFVc3NRMEZCUVR0UlFVOXVRenM3VjBGRlJ6dFJRVU5MTEdOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVFN1VVRm5SM3BDT3pzN08xZEJTVWM3VVVGRFlTeG5Ra0ZCVnl4SFFVRkhMRWRCUVdsQ0xFVkJRVVU3TzFsQlF6ZERMRWxCUVVrN1owSkJRMEVzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRVZCUVVVN2IwSkJRMnBDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVUU3YVVKQlEyaERPMmRDUVVWRUxFMUJRVUVzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXdyUTBGQmRrSXNTVUZCU1N4RlFVRjFRanRuUWtGRk0wSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZETlVJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlFUdHBRa0ZEYUVRN1owSkJSVVFzVFVGQlFTeEpRVUZKTEVOQlFVTXNkVUpCUVhWQ0xDdERRVUUxUWl4SlFVRkpMRVZCUTBFc2EwSkJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCVlN4dlFrRkRjRUlzU1VGQlNTeERRVUZETEV0QlFVc3NSMEZEYWtJN1owSkJSVVFzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlFUdGhRVU51UXp0WlFVRkRMRTlCUVU4c1IwRkJXU3hGUVVGRkxEQkNRVUV3UWl4RFFVRkRPMmRDUVVNNVF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGFFTTdVVUZEVEN4RFFVRkRMRU5CUVVFN1VVRkZSRHM3T3pzN096czdPenM3VjBGWFJ6dFJRVU5oTEcxQ1FVRmpMRWRCUVVjc1EwRkROMElzU1VGQmFVSXNSVUZEYWtJc1VVRkJVU3hIUVVGSExFTkJRVU1zUlVGRFdpeFRRVUZUTEVkQlFVY3NSVUZCUlN4RlFVTlFMRVZCUVVVN08xbEJRMVFzU1VGQlNTeEpRVUZKTEV0QlFVc3NVMEZCVXl4RlFVRkZPMmRDUVVOd1FpeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkRha0lzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZEV0N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hGUVVObUxGRkJRVkVzUlVGRFVpeFRRVUZUTEVOQlExb3NRMEZCUVR0aFFVTktPMWxCUlVRc1RVRkJUU3hMUVVGTExFZEJRVFpDTEVWQlFVVXNSVUZEZEVNc1UwRkJVeXhIUVVFMlFpeEZRVUZGTEVOQlFVRTdXVUZGTlVNc1MwRkJTeXhOUVVGTkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVTdaMEpCUTNCQ0xFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRV3RDTEVOQlFVTXNRMEZCUVR0blFrRkROVU1zVTBGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4VFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxEQkRRVUZITEVkQlFXdENMRU5CUVVNc1EwRkJRVHRoUVVONlJEdFpRVVZFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeFRRVUZUTEVWQlFVVXNVVUZCVVN4RlFVRkZMRk5CUVZNc1EwRkJReXhEUVVGQk8xRkJRMmhGTEVOQlFVTXNRMEZCUVR0UlFVVkVPenM3T3p0WFFVdEhPMUZCUTJFc1lVRkJVU3hIUVVGSExFTkJRM1pDTEVkQlFXMUNMRVZCUTI1Q0xIRkNRVUZ4UWl4SFFVRkhMRWxCUVVrc1JVRkRhRUlzUlVGQlJUczdXVUZEWkN4SlFVRkpPMmRDUVVOQkxFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMjlDUVVOcVFpeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGQk8ybENRVU5vUXp0blFrRkZSQ3hOUVVGQkxFbEJRVWtzUTBGQlF5eHRRa0ZCYlVJc0swTkJRWGhDTEVsQlFVa3NSVUZCZDBJN1owSkJSVFZDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1MwRkJTeXhUUVVGVExFVkJRVVU3YjBKQlF6VkNMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVUU3YVVKQlEyaEVPMmRDUVVWRUxFbEJRVWtzUTBGQlF5eFZRVUZWTEhGQ1FVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlFUdG5Ra0ZGYkVNc1RVRkJRU3hKUVVGSkxFTkJRVU1zZFVKQlFYVkNMQ3REUVVFMVFpeEpRVUZKTEVWQlEwRXNhMEpCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlZTeHZRa0ZEY0VJc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGRGFrSTdaMEpCUlVRc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGQk8yZENRVVV2UWl4TlFVRk5MR1ZCUVdVc1IwRkRha0lzY1VKQlFYRkNMRWxCUVVrc1NVRkJTU3hEUVVGRExIRkNRVUZ4UWl4RlFVRkZPMjlDUVVOcVJDeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRmRCUVZjc1JVRkJSVHR2UWtGRGNFSXNRMEZCUXl4RFFVRkRMRk5CUVZNc1EwRkJRVHRuUWtGRmJrSXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlFUdGhRVU5vUXp0WlFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRkxEQkNRVUV3UWl4RFFVRkRPMmRDUVVOeVF5eFBRVUZQTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVUU3WVVGRGFFTTdVVUZEVEN4RFFVRkRMRU5CUVVFN1VVRkZSQ3huUlVGQlowVTdVVUZEYUVVN096czdWMEZKUnp0UlFVTmhMRzFDUVVGakxFZEJRVWNzUTBGRE4wSXNUVUZCYjBJc1JVRkRVaXhGUVVGRk96dFpRVU5rTEVsQlFVazdaMEpCUTBFc1NVRkJTU3hOUVVGTkxFdEJRVXNzVTBGQlV5eEZRVUZGTzI5Q1FVTjBRaXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUVR0cFFrRkRka0k3WjBKQlJVUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZETlVJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlFUdHBRa0ZEYUVRN1owSkJSVVFzVFVGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGQk8yZENRVVV2UWl4SlFVRkpMRU5CUVVNc2JVSkJRVzFDTEVkQlFVY3NTVUZCU1N4RFFVRkJPMmRDUVVVdlFpeE5RVUZCTEVsQlFVa3NRMEZCUXl4clFrRkJhMElzSzBOQlFYWkNMRWxCUVVrc1JVRkJkVUk3WjBKQlJUTkNMRWxCUVVrc1UwRkJVeXhMUVVGTExFbEJRVWtzUlVGQlJUdHZRa0ZEY0VJc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHpRa0ZCYzBJc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlFUdHBRa0ZEYUVRN1owSkJSVVFzU1VGQlNTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUVR0blFrRkZja01zU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVFN1owSkJRM0pDTEUxQlFVRXNTVUZCU1N4RFFVRkRMR2xDUVVGcFFpd3JRMEZCZEVJc1NVRkJTU3hGUVVGelFqdG5Ra0ZGTVVJc1NVRkJTU3hUUVVGVExGbEJRVmtzUzBGQlN5eEZRVUZGTzI5Q1FVTTFRaXhOUVVGTkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVVzUTBGQlF6dHZRa0ZGYkVRc1UwRkJkVUlzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRVHR2UWtGRmVFVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUVR0cFFrRkROVU03WjBKQlJVUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUVR0aFFVTTNRenRaUVVGRExFOUJRVThzUjBGQldTeEZRVUZGTERCQ1FVRXdRaXhEUVVGRE8yZENRVU01UXl4UFFVRlBMRWxCUVVrc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVRTdZVUZEYUVNN1VVRkRUQ3hEUVVGRExFTkJRVUU3VVVGRlJEczdPMWRCUjBjN1VVRkRZU3hWUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUVR0UlFVVXpRenM3TzFkQlIwYzdVVUZEWVN4eFFrRkJaMElzUjBGQlJ5eEhRVUZUTEVWQlFVVTdPMWxCUXpGRExFbEJRVWs3WjBKQlEwRXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhMUVVGTExGTkJRVk1zUlVGQlJUdHZRa0ZETlVJc1QwRkJUVHRwUWtGRFZEdG5Ra0ZGUkN4TlFVRkJMRWxCUVVrc1EwRkJReXh2UWtGQmIwSXNLME5CUVhwQ0xFbEJRVWtzUlVGQmVVSTdaMEpCUlRkQ0xFbEJRVWtzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVRTdaMEpCUlhaRExFbEJRVWtzUTBGQlF5eGxRVUZsTEVWQlFVVXNRMEZCUVR0blFrRkRkRUlzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVFN1lVRkRla0k3V1VGQlF5eFBRVUZQTEVkQlFWa3NSVUZCUlN3d1FrRkJNRUlzUTBGQlF6dG5Ra0ZET1VNc1NVRkJTU3hEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUVR0aFFVTjZRanRSUVVWTUxFTkJRVU1zUTBGQlFUdFJRVVZFT3pzN1YwRkhSenRSUVVOaExGbEJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVUU3VVVGREwwTXNLMFJCUVN0RU8xRkJSUzlFT3pzN1YwRkhSenRSUVVOTExHOUNRVUZsTEVkQlFVY3NSMEZCVXl4RlFVRkZPMWxCUTJwRExFbEJRVWtzU1VGQlNTeERRVUZETEU5QlFVOHNTMEZCU3l4VFFVRlRMRVZCUVVVN1owSkJRelZDTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2MwSkJRWE5DTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVFN1lVRkRhRVE3V1VGRlJDeFBRVUZQTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hGUVVGRk8yZENRVU0xUWl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTzI5Q1FVTjRRaXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZCTzJsQ1FVTnVSRHRoUVVOS08xRkJRMHdzUTBGQlF5eERRVUZCTzFGQlJVUTdPenRYUVVkSE8xRkJRMHNzWjBKQlFWY3NSMEZCUnl4SFFVRmxMRVZCUVVVN1dVRkRia01zU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkJPMWxCUlhSQ0xFOUJRVThzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkJPMUZCUTNoQ0xFTkJRVU1zUTBGQlFUdFJRVWRFT3pzN08xZEJTVWM3VVVGRFN5eFpRVUZQTEVkQlFVY3NRMEZCUXl4bFFVRTBRaXhGUVVGUkxFVkJRVVU3TzFsQlEzSkVMRWxCUVVrc1pVRkJaU3haUVVGWkxFdEJRVXNzUlVGQlJUdG5Ra0ZEYkVNc1MwRkJTeXhOUVVGTkxFOUJRVThzU1VGQlNTeGxRVUZsTEVWQlFVVTdiMEpCUTI1RExFMUJRVUVzU1VGQlNTeERRVUZETEU5QlFVOHNNRU5CUVVVc1YwRkJWeXhEUVVGRExFOUJRVThzUlVGQlF6dHBRa0ZEY2tNN1lVRkRTanRwUWtGQlRTeEpRVUZKTEdWQlFXVXNSVUZCUlR0blFrRkRlRUlzVFVGQlFTeEpRVUZKTEVOQlFVTXNUMEZCVHl3d1EwRkJSU3hYUVVGWExFTkJRVU1zWlVGQlpTeEZRVUZETzJGQlF6ZERPMWxCUlVRc1NVRkJTU3hsUVVGbExFVkJRVVU3WjBKQlEycENMRTFCUVVFc1NVRkJTU3hEUVVGRExHdENRVUZyUWl3clEwRkJka0lzU1VGQlNTeEZRVUYxUWp0aFFVTTVRanRSUVVOTUxFTkJRVU1zUTBGQlFUdFJRVVZQTEdsQ1FVRlpMRWRCUVVjc1EwRkJReXhIUVVGWkxFVkJRVk1zUlVGQlJUdFpRVU16UXl4SlFVRkpMRWRCUVVjc1dVRkJXU3hMUVVGTExFVkJRVVU3WjBKQlEzUkNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRVHRuUWtGRk0wSXNUMEZCVHl4SFFVRlpMRU5CUVVFN1lVRkRkRUk3V1VGRlJDeE5RVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUVR0WlFVVndReXhKUVVGSkxFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVUU3V1VGRk4wSXNUMEZCVHl4TFFVRkxMRU5CUVVFN1VVRkRhRUlzUTBGQlF5eERRVUZCTzFGQmRsVkhMRWxCUVVrc1RVRkJUU3hMUVVGTExFbEJRVWtzUlVGQlJUdFpRVU5xUWl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHMUVRVUZ0UkN4RFFVRkRMRU5CUVVFN1UwRkRka1U3VVVGRlJDeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJRVHRKUVVONlFpeERRVUZETzBsQlJVUTdPenRQUVVkSE8wbEJRMGdzU1VGQlZ5eFJRVUZSTzFGQlEyWXNUMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGQk8wbEJRM0pDTEVOQlFVTTdTVUZGUkRzN08wOUJSMGM3U1VGRFNDeEpRVUZqTEV0QlFVczdVVUZEWml4UFFVRlBMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVUU3U1VGRGRFSXNRMEZCUXp0SlFVVkVPenM3TzA5QlNVYzdTVUZEU0N4SlFVRmpMRXRCUVVzc1EwRkJSU3hIUVVGVk8xRkJRek5DTEVsQlFVa3NTVUZCU1N4RFFVRkRMRzFDUVVGdFFpeEZRVUZGTzFsQlF6RkNMRWxCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZEYkVJc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRekZETEVOQlFVRTdXVUZEUkN4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTzFOQlEzSkNPMkZCUVUwN1dVRkRTQ3hKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUVR0WlFVTnFRaXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRWRCUVVjc1NVRkJTU3hEUVVGQk8xTkJRMnhETzBsQlEwd3NRMEZCUXp0SlFVVkVPenM3VDBGSFJ6dEpRVU5JTEVsQlFWY3NVVUZCVVR0UlFVTm1MRTlCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlFUdEpRVU55UWl4RFFVRkRPMGxCUlVRN096czdUMEZKUnp0SlFVTklMRWxCUVZjc1RVRkJUU3hEUVVGRkxFOUJRV2RETzFGQlF5OURMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZCTzBsQlF6RkNMRU5CUVVNN1NVRkZSRHM3TzA5QlIwYzdTVUZEU0N4SlFVRlhMRTFCUVUwN1VVRkRZaXhQUVVGUExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVRTdTVUZEZGtJc1EwRkJRenRKUVVWRU96czdUMEZIUnp0SlFVTklMRWxCUVZjc1VVRkJVVHRSUVVObUxFOUJRVThzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUVR0SlFVTjZRaXhEUVVGRE8wbEJSVVE3T3p0UFFVZEhPMGxCUTBnc1NVRkJWeXhUUVVGVE8xRkJRMmhDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJRVHRKUVVNeFFpeERRVUZETzBOQk1GQktPMEZCUlVRc1pVRkJaU3hUUVVGVExFTkJRVUVpZlE9PSIsIi8qKlxuICogRGVTdGFnbmF0ZVxuICogQSBzaW1wbGUsIFJlYWN0SlMgaW5zcGlyZWQgbGlicmFyeSB0byBjcmVhdGUgZHluYW1pYyBjb21wb25lbnRzIHdpdGhpbiBzdGF0aWMgc2l0ZXMgZWFzaWVyXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoQykgMjAyMCAtIDIwMjEgTHVrZSBaaGFuZ1xuICogQGF1dGhvciBMdWtlIFpoYW5nIGx1a2UtemhhbmctMDQuZ2l0aHViLmlvXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDIuMC4wXG4gKiBAZXhwb3J0cyBjcmVhdGVFbGVtZW50IGZ1bmN0aW9uIGZvciBET00gbWFuaXB1bGF0aW9uXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCB7IGJpbmRDaGlsZHJlbiB9IGZyb20gXCIuL3ByaXZhdGUvX2NyZWF0ZUVsZW1lbnRVdGlsc1wiO1xuZXhwb3J0IGNvbnN0IEZyYWdtZW50ID0gKF8sIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZG9jdW1lbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBiaW5kQ2hpbGRyZW4oZG9jdW1lbnRGcmFnbWVudCwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBkb2N1bWVudEZyYWdtZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IEZyYWdtZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWm5KaFoyMWxiblF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SXVMaTl6Y21NdlpuSmhaMjFsYm5RdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPMGRCVVVjN1FVRkRTQ3d5UWtGQk1rSTdRVUZETTBJc2FVTkJRV2xETzBGQlJXcERMRTlCUVU4c1JVRkZTQ3haUVVGWkxFVkJRMllzVFVGQlRTd3JRa0ZCSzBJc1EwRkJRVHRCUVVWMFF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1EwRkRjRUlzUTBGQlZTeEZRVU5XTEVkQlFVY3NVVUZCTWtJc1JVRkRaQ3hGUVVGRk8wbEJRMnhDTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVWNzVVVGQlVTeERRVUZETEhOQ1FVRnpRaXhGUVVGRkxFTkJRVUU3U1VGRk1VUXNXVUZCV1N4RFFVRkRMR2RDUVVGblFpeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkJPMGxCUlhoRExFOUJRVThzWjBKQlFXZENMRU5CUVVFN1FVRkRNMElzUTBGQlF5eERRVUZCTzBGQlJVUXNaVUZCWlN4UlFVRlJMRU5CUVVFaWZRPT0iLCIvKipcbiAqIERlU3RhZ25hdGVcbiAqIEEgc2ltcGxlLCBSZWFjdEpTIGluc3BpcmVkIGxpYnJhcnkgdG8gY3JlYXRlIGR5bmFtaWMgY29tcG9uZW50cyB3aXRoaW4gc3RhdGljIHNpdGVzIGVhc2llclxuICogQGNvcHlyaWdodCBDb3B5cmlnaHQgKEMpIDIwMjAgLSAyMDIxIEx1a2UgWmhhbmdcbiAqIEBhdXRob3IgTHVrZSBaaGFuZyBsdWtlLXpoYW5nLTA0LmdpdGh1Yi5pb1xuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAyLjAuMFxuICogQGV4cG9ydHMgRGVTdGFnbmF0ZSBtYWluIGRlc3RhZ25hdGUgY2xhc3NcbiAqIEBmaWxlIG1haW4gZmlsZSBmb3IgZGVzdGFnbmF0ZVxuICogQHByZXNlcnZlXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vanN4LnRzXCIgLz5cbmltcG9ydCAqIGFzIF9Db21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgKiBhcyBfQ3JlYXRlRWxlbWVudE5TIGZyb20gXCIuL2NyZWF0ZUVsZW1lbnROU1wiO1xuaW1wb3J0ICogYXMgX0NyZWF0ZVJlZiBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmltcG9ydCAqIGFzIF9GcmFnbWVudCBmcm9tIFwiLi9mcmFnbWVudFwiO1xuZXhwb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50XCI7XG5leHBvcnQgeyBjcmVhdGVSZWYgfSBmcm9tIFwiLi9jcmVhdGVSZWZcIjtcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50TlMgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50TlNcIjtcbmV4cG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcIi4vZnJhZ21lbnRcIjtcbi8qIGVzbGludC1kaXNhYmxlICovXG5leHBvcnQgdmFyIERlU3RhZ25hdGU7XG4oZnVuY3Rpb24gKERlU3RhZ25hdGUpIHtcbiAgICBEZVN0YWduYXRlLkNvbXBvbmVudCA9IF9Db21wb25lbnQuQ29tcG9uZW50O1xuICAgIERlU3RhZ25hdGUuY3JlYXRlUmVmID0gX0NyZWF0ZVJlZi5jcmVhdGVSZWY7XG4gICAgRGVTdGFnbmF0ZS5jcmVhdGVFbGVtZW50ID0gX0NyZWF0ZUVsZW1lbnQuY3JlYXRlRWxlbWVudDtcbiAgICBEZVN0YWduYXRlLmNyZWF0ZUVsZW1lbnROUyA9IF9DcmVhdGVFbGVtZW50TlMuY3JlYXRlRWxlbWVudE5TO1xuICAgIERlU3RhZ25hdGUuRnJhZ21lbnQgPSBfRnJhZ21lbnQuRnJhZ21lbnQ7XG59KShEZVN0YWduYXRlIHx8IChEZVN0YWduYXRlID0ge30pKTtcbi8qIGVzbGludC1lbmFibGUgKi9cbmV4cG9ydCBkZWZhdWx0IERlU3RhZ25hdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUU3T3pzN096czdPenM3UjBGVlJ6dEJRVU5JTERKQ1FVRXlRanRCUVVNelFpeHBRMEZCYVVNN1FVRkZha01zVDBGQlR5eExRVUZMTEZWQlFWVXNUVUZCVFN4aFFVRmhMRU5CUVVFN1FVRkRla01zVDBGQlR5eExRVUZMTEdOQlFXTXNUVUZCVFN4cFFrRkJhVUlzUTBGQlFUdEJRVU5xUkN4UFFVRlBMRXRCUVVzc1owSkJRV2RDTEUxQlFVMHNiVUpCUVcxQ0xFTkJRVUU3UVVGRGNrUXNUMEZCVHl4TFFVRkxMRlZCUVZVc1RVRkJUU3hoUVVGaExFTkJRVUU3UVVGRGVrTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1RVRkJUU3haUVVGWkxFTkJRVUU3UVVGRmRrTXNUMEZCVHl4RlFVRkRMRk5CUVZNc1JVRkJReXhOUVVGTkxHRkJRV0VzUTBGQlFUdEJRVU55UXl4UFFVRlBMRVZCUVUwc1UwRkJVeXhGUVVGRExFMUJRVTBzWVVGQllTeERRVUZCTzBGQlF6RkRMRTlCUVU4c1JVRkJReXhoUVVGaExFVkJRVU1zVFVGQlRTeHBRa0ZCYVVJc1EwRkJRVHRCUVVNM1F5eFBRVUZQTEVWQlFVTXNaVUZCWlN4RlFVRkRMRTFCUVUwc2JVSkJRVzFDTEVOQlFVRTdRVUZEYWtRc1QwRkJUeXhGUVVGRExGRkJRVkVzUlVGQlF5eE5RVUZOTEZsQlFWa3NRMEZCUVR0QlFVVnVReXh2UWtGQmIwSTdRVUZEY0VJc1RVRkJUU3hMUVVGWExGVkJRVlVzUTBGUE1VSTdRVUZRUkN4WFFVRnBRaXhWUVVGVk8wbEJRMVFzYjBKQlFWTXNSMEZCU1N4VlFVRlZMRlZCUVdRc1EwRkJZenRKUVVOMlFpeHZRa0ZCVXl4SFFVRkpMRlZCUVZVc1ZVRkJaQ3hEUVVGak8wbEJSWFpDTEhkQ1FVRmhMRWRCUVVrc1kwRkJZeXhqUVVGc1FpeERRVUZyUWp0SlFVTXZRaXd3UWtGQlpTeEhRVUZKTEdkQ1FVRm5RaXhuUWtGQmNFSXNRMEZCYjBJN1NVRkRia01zYlVKQlFWRXNSMEZCU1N4VFFVRlRMRk5CUVdJc1EwRkJZVHRCUVVOMlF5eERRVUZETEVWQlVHZENMRlZCUVZVc1MwRkJWaXhWUVVGVkxGRkJUekZDTzBGQlEwUXNiVUpCUVcxQ08wRkJSVzVDTEdWQlFXVXNWVUZCVlN4RFFVRkJJbjA9Il0sIm5hbWVzIjpbIl9jcmVhdGVFbGVtZW50IiwiX2NyZWF0ZUVsZW1lbnROUyIsIl9jcmVhdGVSZWYiLCJCYXNlQ29tcG9uZW50IiwiQmFzZSIsIl9Db21wb25lbnQuQ29tcG9uZW50IiwiX0NyZWF0ZVJlZi5jcmVhdGVSZWYiLCJfQ3JlYXRlRWxlbWVudC5jcmVhdGVFbGVtZW50IiwiX0NyZWF0ZUVsZW1lbnROUy5jcmVhdGVFbGVtZW50TlMiLCJfRnJhZ21lbnQuRnJhZ21lbnQi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
