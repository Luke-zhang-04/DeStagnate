/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.3.2
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 */

import Preset from "./_preset"
import {default as _createElement} from "./createElement"
import {default as _createElementNS} from "./createElementNS"

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
     * Creates a child element to deStagnate
     * @public
     * @static
     * @readonly
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */
    public static readonly createElement = _createElement

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
    public static readonly createElementNS = _createElementNS

    /**
     * Creates a child element to deStagnate
     * @public
     * @instance
     * @readonly
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */
    public readonly createElement = DeStagnate.createElement

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
    public readonly createElementNS = DeStagnate.createElementNS

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
     */
    public constructor (
        parent: HTMLElement,
        protected props?: Props,
    ) {
        super()
        if (["body", "html"].includes(parent.tagName.toLowerCase())) {
            console.warn(`WARNING! Avoid using ${parent.tagName.toLowerCase()} as element parent, as all elements within ${parent.tagName.toLowerCase()} will be removed on re-render`)
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
        if (this._didSetInitialState) {
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

            for (const key of Object.keys(obj)) {
                if (!Object.keys(this.state).includes(key)) {
                    // eslint-disable-next-line
                    console.warn(`WARN: New key (${key}) should not be set with setState, which has keys ${JSON.stringify(Object.keys(this.state))}. Declare all state variables in constructor as a best practice.`)
                }
            }

            this.getSnapshotBeforeUpdate(this.props as Props, this.state)

            Object.assign(this._state, obj)

            const renderedContent = this._execRender()

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

            this.componentDidUpdate()
        } catch (err) {
            this.componentDidCatch(err)

            return err as Error
        }
    }

    /* eslint-disable max-len, @typescript-eslint/member-ordering, max-lines */
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

            if (!component) {
                const msg = "Expected render method to be included in component class, no render method found, or render returned an empty array"

                throw new Error(msg)
            }
            
            this.componentDidMount()

            if (typeof(component) === "object" && component instanceof Array) {
                return (component as Element[]).map((element) => (
                    this._parent.appendChild(element)
                ))
            }

            return this._parent.appendChild(component)
        } catch (err) {
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
    
            this._removeChildren()
        } catch (err) {
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

}

/**
 * Creates a child element to deStagnate
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns {HTMLElement} html element
 */
export const createElement = _createElement

/**
 * Creates a child element to deStagnate
 * @param {string | null} namespaceURI - namespace uri
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
export const createElementNS = _createElementNS
