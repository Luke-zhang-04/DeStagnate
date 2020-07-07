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
     * State of component. Works similar React State
     * @type {Object.<string, unknown> | undefined}
     * @protected
     * @instance
     */
    protected state: State | undefined

    /**
     * Parent that this element if bound to
     * @protected
     * @instance
     */
    protected parent: HTMLElement

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
