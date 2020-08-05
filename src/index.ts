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
/* eslint-disable max-lines */

import Preset from "./_preset"
import {default as _createDSComponent} from "./createDSComponent"
import {default as _createElement} from "./createElement"
import {default as _createElementNS} from "./createElementNS"
import {default as _createRef} from "./createRef"

type RenderType = HTMLElement | HTMLElement[] | Element | Element[] | null

/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
export default abstract class DeStagnate
    <Props = Record<string, unknown>, State = Record<string, unknown>>
    extends Preset {

    /**
     * If strict mode should be used. True by default
     * @type {boolean}
     */
    private _strict = true

    /**
     * State of component. Works similar React State
     * @type {undefined | Object.<string, unknown>}
     * @private
     * @instance
     */
    private _state: State = {} as State

    /**
     * If initial state was set in initializer
     * Do not throw error with direct state setting
     * @type {boolean}
     * @private
     */
    private _didSetInitialState = false

    /**
     * Parent that this element if bound to
     * @type {HTMLElement}
     * @private
     * @instance
     */
    private _parent: HTMLElement

    /**
     * Construct class component
     * @public
     * @constructor
     * @param {HTMLElement} parent - parent of this element
     * @param {undefined | Object.<string, string | number>} props - element properties; works like React Props
     * @param {boolean} shouldSkipParentCheck - warn or throw error if parent element already has children
     */
    public constructor (
        parent: HTMLElement,
        protected props?: Props,
        shouldSkipParentCheck = false,
    ) {
        super()
        if (
            parent.childElementCount > 0 &&
            !shouldSkipParentCheck &&
            this._strict
        ) {
            this.componentDidCatch(new Error(`ERR: Avoid using this ${parent.tagName.toLowerCase()} as element parent, as all elements within this ${parent.tagName.toLowerCase()} will be removed on re-render. To disable this, pass in true as a third parameter`))
        }

        this._parent = parent
    }

    /**
     * What to call before component update (state mutation)
     * @public
     * @instance
     * @param {Props} prevProps - previous props
     * @param {State} prevState - previous state
     * @returns {void} void
     */
    public getSnapshotBeforeUpdate = (
        prevProps: Props,
        prevState: State
    ): [Props, State] => [prevProps, prevState]

    /**
     * Turn on strict mode
     * @returns {void} void
     */
    public useStrict = (): void => {
        this._strict = true
    }

    /**
     * Turn off strict mode
     * @returns {void} void
     */
    public disableStrict = (): void => {
        this._strict = false
    }

    /**
     * Public getState getter as this.state itself is protected
     * @public
     * @instance
     * @returns {State} component state
     */
    public get getState (): State {
        return this.state
    }

    /**
     * Get component state
     * @protected
     * @instance
     * @returns {State} component state
     */
    protected get state (): State {
        return this._state
    }

    /**
     * Sets component state
     * WARN: do not use this method to mutate the state directly
     * @protected
     * @instance
     * @param {State} obj - state to set
     */
    protected set state (obj: State) {
        if (this._didSetInitialState && this._strict) {
            this.componentDidCatch(
                new Error("Do not mutate state directly. Use setState instead.")
            )
            // eslint-disable-next-line
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
    public get getProps (): Props | undefined {
        return this.props
    }

    /**
     * Sets state
     * @public
     * @instance
     * @readonly
     * @param {Partial<State>} obj - state to set
     * @returns {void | Error} void
     */
    public readonly setState = (obj: Partial<State>): void | Error => {
        try {
            this.componentWillUpdate()

            if (this._strict) {
                this._checkKeys(obj)
            }

            this.getSnapshotBeforeUpdate(
                {...this.props} as Props,
                {...this.state},
            )

            Object.assign(this._state, obj)

            const renderedContent = this.shouldComponentUpdate()
                ? this._execRender()
                : undefined

            if (
                typeof(renderedContent) === "object" &&
                renderedContent instanceof Array
            ) {
                for (const element of renderedContent) {
                    this._parent.appendChild(element)
                }
            } else if (renderedContent) {
                this._parent.appendChild(renderedContent)
            }

            if (renderedContent) {
                this.componentDidUpdate()
            }
        } catch (err) /* istanbul ignore next */ {
            this.componentDidCatch(err)

            return err as Error
        }
    }

    /* eslint-disable @typescript-eslint/member-ordering, max-len */
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {HTMLElement | Array.<HTMLElement> | error} - result of append child to parent element
     */
    public readonly mountComponent = (): HTMLElement | HTMLElement[] | Element | Element[] | Error => {
        try {
            const component = this.render()

            this._didSetInitialState = true

            this.componentWillMount()

            if (component === null) {
                const msg = "Expected render method to be included in component class, no render method found, or render returned an empty array"

                throw new Error(msg)
            }

            this.bindEventListeners(this._parent)

            this.componentDidMount()

            if (typeof(component) === "object" && component instanceof Array) {
                return (component as Element[]).map((element) => (
                    this._parent.appendChild(element)
                ))
            }

            return this._parent.appendChild(component)
        } catch (err) /* istanbul ignore next */ {
            this.componentDidCatch(err)

            return err as Error
        }
    }
    
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {HTMLElement} - result of append child to parent element
     */
    public readonly mount = this.mountComponent

    /**
     * Unmounting to be manually called 
     * @public
     * @instance
     * @readonly
     * @returns {void} - void
     */
    public readonly unmountComponent = (): void => {
        try {
            this.componentWillUnmount()

            this.unbindEventListeners(this._parent)
    
            this._removeChildren()
        } catch (err) /* istanbul ignore next */ {
            this.componentDidCatch(err)
        }

    }
    
    /**
     * Unmounting to be manually called 
     * @public
     * @instance
     * @readonly
     * @returns {void} - void
     */
    public readonly unmount = this.unmountComponent
    /* eslint-enable max-len, @typescript-eslint/member-ordering */

    /**
     * Removes children from this._parent
     * @private
     * @instance
     * @return {void} void
     */
    private _removeChildren = (): void => {
        while (this._parent.firstChild) {
            if (this._parent.lastChild) {
                this._parent.removeChild(this._parent.lastChild)
            } else {
                break
            }
        }
    }

    /**
     * Executes new render
     * @returns {HTMLElement | Array.<HTMLElement> | null} rendered content
     */
    private _execRender = (): RenderType => {
        this._removeChildren()

        return this.render()
    }

    /**
     * Checks new state assignment to make sure no new keys are assigned
     * @param {Partial<State>} obj - new state
     * @returns {void} void
     */
    private _checkKeys = (obj: Partial<State>): void => {
        for (const key of Object.keys(obj)) {
            if (!Object.keys(this.state).includes(key)) {
                // eslint-disable-next-line
                console.warn(`WARN: New key (${key}) should not be set with setState, which has keys ${JSON.stringify(Object.keys(this.state))}. Declare all state variables in constructor as a best practice. Did you misspell a key?`)
            }
        }
    }

}

/**
 * Creates nested DeStagnate component
 * @param {DeStagnateConstructor} Component - DeStagnate component
 * @param {Object<string, unknown>} props - props of component
 * @returns {HTMLDivElement} parent of component
 */
export const createDSComponent = _createDSComponent

/**
 * Creates a child element to deStagnate
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns {HTMLElement} html element
 */
export const createElement = _createElement

/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
export const createElementNS = _createElementNS


/**
 * Creates a reference for a nested component
 * @returns {Object<string, undefined>} empty ref object
 */
export const createRef = _createRef
