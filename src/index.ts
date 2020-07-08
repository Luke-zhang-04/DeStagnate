/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @exports DeStagnate
 */
import Preset from "./_preset"
import {default as _createElement} from "./createElement"

/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @exports DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
export default abstract class DeStagnate
    <Props = Record<string, unknown>, State = Record<string, unknown>>
    extends Preset {

    /**
     * Creates a child element to DynamComponent
     * @public
     * @static
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */
    public static createElement = _createElement

    /**
     * State of component. Works similar React State
     * @type {Object.<string, unknown> | undefined}
     * @protected
     * @instance
     */
    protected state: State = {} as State

    /**
     * Parent that this element if bound to
     * @private
     * @instance
     */
    private _parent: HTMLElement

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
        super()
        if (["body", "html"].includes(parent.tagName.toLowerCase())) {
            throw new Error(`WARNING! Avoid using ${parent.tagName.toLowerCase()} as element parent, as all elements within ${parent.tagName.toLowerCase()} will be removed on re-render`)
        }

        this._parent = parent
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
     * Sets state
     * @public
     * @instance
     * @readonly
     * @param {State} obj - state to set
     * @returns {void | Error} void
     */
    public readonly setState = (obj: State): void | Error => {
        try {
            this.componentWillUpdate()
            Object.assign(this.state, obj)

            while (this._parent.firstChild) {
                if (this._parent.lastChild) {
                    this._parent.removeChild(this._parent.lastChild)
                } else {
                    break
                }
            }

            this._parent.appendChild(this.render() as HTMLElement)
            this.componentDidUpdate()
        } catch (err) {
            this.componentDidCatch(err)

            return err as Error
        }
    }

    /* eslint-disable max-len, @typescript-eslint/member-ordering */
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {HTMLElement | error} - result of append child to parent element
     */
    public readonly mountComponent = (): HTMLElement | Error => {
        try {
            const component = this.render()

            this.componentWillMount()
            if (!component) {
                const msg = "Expected render method to be included in component class, no render method found"

                throw new Error(msg)
            }
            
            this.componentDidMount()

            return this._parent.appendChild(component as HTMLElement) as HTMLElement
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
    
            while (this._parent.firstChild) {
                if (this._parent.lastChild) {
                    this._parent.removeChild(this._parent.lastChild)
                } else {
                    break
                }
            }
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

}

export const createElement = _createElement
