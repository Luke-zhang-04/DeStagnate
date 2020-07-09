/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.1
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
 * @version 1.2.1
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
     * @readonly
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */
    public static readonly createElement = _createElement

    /**
     * Creates a child element to DynamComponent
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
     * State of component. Works similar React State
     * @type {undefined | Object.<string, unknown>}
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
     * @param {undefined | Object.<string, string | number>} props - element properties; works like React Props
     */
    public constructor (
        parent: HTMLElement,
        protected props?: Props | undefined,
    ) {
        super()
        if (["body", "html"].includes(parent.tagName.toLowerCase())) {
            throw new Error(`WARNING! Avoid using ${parent.tagName.toLowerCase()} as element parent, as all elements within ${parent.tagName.toLowerCase()} will be removed on re-render`)
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
     * @param {State} obj - state to set
     * @returns {void | Error} void
     */
    public readonly setState = (obj: State): void | Error => {
        try {
            this.componentWillUpdate()
            Object.assign(this.state, obj)

            this._removeChildren()

            const renderedContent = this.render()

            if (renderedContent instanceof Array) {
                for (const element of (renderedContent as HTMLElement[])) {
                    this._parent.appendChild(element)
                }
            } else {
                this._parent.appendChild(renderedContent as HTMLElement)
            }

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
     * @returns {HTMLElement | Array.<HTMLElement> | error} - result of append child to parent element
     */
    public readonly mountComponent = (): HTMLElement | HTMLElement[] | Error => {
        try {
            const component = this.render()

            this.componentWillMount()
            if (!component) {
                const msg = "Expected render method to be included in component class, no render method found, or render returned an empty array"

                throw new Error(msg)
            }
            
            this.componentDidMount()

            if (component instanceof Array) {
                return component.map((element) => (
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

}

/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns {HTMLElement} html element
 */
export const createElement = _createElement
