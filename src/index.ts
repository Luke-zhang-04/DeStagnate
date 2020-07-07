/**
 * Dynamic Component
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.0
 * @exports DynamComponent
 * @namespace
 */
import createChild from "./createChild"

/**
 * Dynamic Component
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 */
export abstract class DynamComponent
    <Props = Record<string, unknown>, State = Record<string, unknown>> {

    /**
     * Creates a child element to DynamComponent
     * @public
     * @static
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */
    public static createChild = createChild

    /**
     * Parent that this element if bound to
     * @protected
     * @instance
     */
    protected parent: HTMLElement

    /**
     * State of component. Works similar React State
     * @type {Object.<string, unknown> | undefined}
     * @private
     * @instance
     */
    private _state: State = {} as State

    /**
     * Construct class component
     * @public
     * @constructor
     * @param {HTMLElement} parent - parent of this element
     * @param {undefined | Object.<string, string | number>} props - element properties
     */
    public constructor (
        parent: HTMLElement,
        public props?: Props,
    ) {
        if (["body", "html"].includes(parent.tagName.toLowerCase())) {
            console.warn(`WARNING! Avoid using ${parent.tagName.toLowerCase()} as element parent, as all elements within ${parent.tagName.toLowerCase()} will be removed on re-render`)
        }

        this.parent = parent
    }

    /**
     * What to call on component mounting
     * @returns {void} void
     */
    public componentDidMount = (): void => undefined

    /**
     * Rendering HTML, must be part of extended class
     * @returns {null | HTMLElement} if returns null error will be thrown
     */
    public render = (): null | HTMLElement => null

    /**
     * Gets state
     * @public
     * @instance
     * @returns {State} state
     */
    public getState = (): State => this._state

    /**
     * Sets state
     * @public
     * @instance
     * @param {State} obj - state to set
     * @returns {void} void
     */
    public setState = (obj: State): void => {
        Object.assign(this._state, obj)

        while (this.parent.firstChild) {
            if (this.parent.lastChild) {
                this.parent.removeChild(this.parent.lastChild)
            } else {
                break
            }
        }

        this.parent.appendChild(this.render() as HTMLElement)
    }

    /* eslint-disable max-len */
    /**
     * Initial render to be called by user
     * @protected
     * @instance
     * @returns {HTMLElement} - result of append child to parent element
     * @throws {Error} error if no render method found
     */
    protected initRender = (): HTMLElement => {
        if (!this.render()) {
            throw new Error("Expected render method to be included in component class, no render method found")
        }
        
        this.componentDidMount()

        return this.parent.appendChild(this.render() as HTMLElement) as HTMLElement
    }
    /* eslint-enable max-len */

}

export * as createChild from "./createChild"
