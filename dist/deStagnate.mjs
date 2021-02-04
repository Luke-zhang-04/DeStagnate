/**
 * DeStagnate | https://luke-zhang-04.github.io/DeStagnate/
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
*/

/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
const createRef = () => ({
  current: null
});

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.1
 * @package
 */

/**
 * Returns array of events
 * Not a generator because Babel Regenerator Runtime causes dist files to be wayyyy to large
 * @param events - events object
 */
const eventsList = events => {
  const res = [];

  for (const key of Object.keys(events)) {
    res.push([key, events[key]]);
  }

  return res;
};

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file share functions and types for createElement and it's variants
 */
const url = "https://luke-zhang-04.github.io/DeStagnate/error-codes";

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
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
        console.warn(`WARN: Code 7. See ${url}. Params: ${typeof val}, ${key}`);
      }
    }
  }
};
const unpackChildren = children => {
  const newChildren = [];

  for (const child of children) {
    if (typeof child === "object" && child instanceof Array) {
      newChildren.push(...unpackChildren(child));
    } else {
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
    } else if (typeof children === "string" || typeof children === "number") {
      element.innerText = children.toString();
    } else if (children instanceof DeStagnate) {
      if (!children.didMount && element instanceof window.HTMLElement) {
        children.mount(element);
        return;
      } else if (!(element instanceof window.HTMLElement)) {
        throw new Error(`ERROR: code 8. See ${url}`);
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
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElement function for DOM manipulation
 */
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
      _children = [...unpackChildren(children), ...unpackChildren(childrenArgs)];
    } else {
      _children = [children, ...unpackChildren(childrenArgs)];
    }
  }

  if (typeof tagNameOrComponent === "string") {
    const element = document.createElement(tagNameOrComponent);

    bindProps(element, props);

    bindChildren(element, _children);

    return element;
  } else if (typeof tagNameOrComponent === "function") {
    return tagNameOrComponent(props, _children);
  }

  return Error("tagNameOrComponent is of invalid type.");
}

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
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

  bindProps(element, props, true);

  let _children = children;

  if (children && childrenRest) {
    if (typeof children === "object" && children instanceof Array) {
      _children = [...unpackChildren(children), ...unpackChildren(childrenRest)];
    } else {
      _children = [children, ...unpackChildren(childrenRest)];
    }
  }

  bindChildren(element, _children);

  return element;
};

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports Preset - base for a component
 * @package
 */
class Preset {
  constructor() {
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
    this.createElement = createElement;
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

    this.createElementNS = createElementNS;
    /**
     * Creates a reference for a nested component
     * @public
     * @instance
     * @readonly
     * @returns empty ref object
     */

    this.createRef = createRef;
    /**
     * Called when component catches error. Default behaviour is console.error
     * @param error - error object with info
     * @returns void
     */

    this.componentDidCatch = error => console.error(error);
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


    this.componentDidWarn = msg => console.warn(msg);
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

Preset.createElement = createElement;
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

Preset.createElementNS = createElementNS;
/**
 * Creates a reference for a nested component
 * @public
 * @static
 * @readonly
 * @returns empty ref object
 */

Preset.createRef = createRef;

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports Events
 * @package
 */
class Events extends Preset {
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

    this.bindEventListeners = element => {
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


    this.unbindEventListeners = element => {
      this._eventListener(element.removeEventListener);
    };

    this._eventListener = eventListener => {
      for (const [event, callback] of eventsList(this._events())) {
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
      mouseup: this.onMouseUp
    });
  }

}

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports DeStagnate main destagnate class
 * @file DeStagnate component class
 * @preserve
 */
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */

class DeStagnate extends Events {
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
          throw new Error(`ERROR: code 3. See ${url}.`);
        }

        this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));

        this._update(this._execRender());
      } catch (err) {
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


    this.setState = obj => {
      try {
        this.componentWillUpdate();

        if (this._parent === undefined) {
          throw new Error(`ERROR: code 3. See ${url}.`);
        }

        if (this._strict) {
          this._checkKeys(obj);
        }

        this.getSnapshotBeforeUpdate(Object.assign({}, this.props), Object.assign({}, this.state));
        Object.assign(this._state, obj);
        const renderedContent = this.shouldComponentUpdate() ? this._execRender() : undefined;

        this._update(renderedContent);
      } catch (err) {
        this.componentDidCatch(err);
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


    this.mountComponent = parent => {
      try {
        if (parent !== undefined) {
          this.parent = parent;
        }

        if (this._parent === undefined) {
          throw new Error(`ERROR: code 3. See ${url}.`);
        }

        const component = this.render();
        this._didSetInitialState = true;
        this.componentWillMount();

        if (component === null) {
          throw new Error(`ERROR: code 5. See ${url}.`);
        }

        this.bindEventListeners(this._parent);
        this._didMount = true;
        this.componentDidMount();

        if (typeof component === "object" && component instanceof Array) {
          return component.map(element => this._parent.appendChild(element));
        }

        return this._parent.appendChild(component);
      } catch (err) {
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
          this.componentDidWarn(`WARN: code 4. See ${url}.`);
          return;
        }

        this.componentWillUnmount();
        this.unbindEventListeners(this._parent);

        this._removeChildren();

        this._didMount = false;
      } catch (err) {
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
    /**
     * Removes children from this._parent
     * @private
     * @instance
     * @return void
     */

    this._removeChildren = () => {
      if (this._parent === undefined) {
        throw new Error(`ERROR: code 3. See ${url}.`);
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


    this._checkKeys = obj => {
      for (const key of Object.keys(obj)) {
        if (!Object.keys(this.state).includes(key)) {
          this.componentDidWarn(`WARN: code 6. See ${url}. Params: ${key}, ${JSON.stringify(Object.keys(this.state))}.`);
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


    this._update = renderedContent => {
      if (typeof renderedContent === "object" && renderedContent instanceof Array) {
        for (const element of renderedContent) {
          this._parent.appendChild(element);
        }
      } else if (renderedContent) {
        this._parent.appendChild(renderedContent);
      }

      if (renderedContent) {
        this.componentDidUpdate();
      }
    };

    if (parent && parent.childElementCount > 0 && !shouldSkipParentCheck && this._strict) {
      this.componentDidCatch(new Error(`ERROR: code 1. See ${url}. Params: ${parent.tagName.toLowerCase()}`));
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
      this.componentDidCatch(new Error(`ERROR: code 2. See ${url}.`));
      this.componentDidWarn(`ERROR: code 2. See ${url}.`);
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
    if (element && element.childElementCount > 0 && this._strict) {
      this.componentDidCatch(new Error(`ERROR: code 1. See ${url}. Params: ${element.tagName.toLowerCase()}`));
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

const createElement$1 = createElement;
/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */

const createElementNS$1 = createElementNS;
/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */

const createRef$1 = createRef;
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */

const Component = DeStagnate;

export default DeStagnate;
export { Component, createElement$1 as createElement, createElementNS$1 as createElementNS, createRef$1 as createRef };
