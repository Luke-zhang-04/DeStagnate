/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports Preset
 * @package
 */

import Events from "./_events"
import {default as _createDSComponent} from "./createDSComponent"
import {default as _createElement} from "./createElement"
import {default as _createElementNS} from "./createElementNS"
import {default as _createRef} from "./createRef"

type RenderType = null | HTMLElement | HTMLElement[] | Element | Element[]

/* istanbul ignore next */
/**
 * Lifecycle member functions
 */
export default abstract class Preset extends Events {

    /**
     * Creates nested DeStagnate component
     * @public
     * @static
     * @readonly
     * @param {DeStagnateConstructor} Component - DeStagnate component
     * @param {Object<string, unknown>} props - props of component
     * @returns {HTMLDivElement} parent of component
     */
    public static readonly createDSComponent = _createDSComponent

    /**
     * Creates a child element to DynamComponent
     * @public
     * @static
     * @readonly
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
     * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
     * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
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
     * Creates a reference for a nested component
     * @public
     * @static
     * @readonly
     * @returns {Object<string, null>} empty ref object
     */
    public static readonly createRef = _createRef

    /**
     * Creates nested DeStagnate component
     * @public
     * @instance
     * @readonly
     * @param {DeStagnateConstructor} Component - DeStagnate component
     * @param {Object<string, unknown>} props - props of component
     * @returns {HTMLDivElement} parent of component
     */
    public readonly createDSComponent = _createDSComponent

    /**
     * Creates a child element to DynamComponent
     * @public
     * @instance
     * @readonly
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number | Element | Ref | Function>} props - element properties, such as class, innerHTML, id, style, etc
     * @param {undefined | number | string | HTMLElement | Element | Array.<number | string | HTMLElement | Element>} children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
     * @param {...(number | string | HTMLElement | Element)} childrenArgs - rest parameter of children
     * @returns {HTMLElement} html element
     */
    public readonly createElement = _createElement

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
    public readonly createElementNS = _createElementNS

    /**
     * Creates a reference for a nested component
     * @public
     * @instance
     * @readonly
     * @returns {Object<string, null>} empty ref object
     */
    public readonly createRef = _createRef

    /**
     * Called when component catches error. Default behaviour is console.error
     * @param {Error} error - error object with info
     * @returns {void} void
     */
    public componentDidCatch = (error: Error): void => console.error(error)

    /**
     * What to call after component mounting
     * @public
     * @instance
     * @returns {void} void
     */
    public componentDidMount = (): void => undefined

    /**
     * What to call after component update (state mutation)
     * @public
     * @instance
     * @returns {void} void
     */
    public componentDidUpdate = (): void => undefined

    /**
     * Called when component catches a warning. Default behaviour is console.warn
     * @param {string} msg - warning message
     * @returns {void} void
     */
    public componentDidWarn = (msg: string): void => console.warn(msg)

    /**
     * What to call before component mounting
     * @public
     * @instance
     * @returns {void} void
     */
    public componentWillMount = (): void => undefined

    /**
     * What to call before component unmounting
     * @public
     * @instance
     * @returns {void} void
     */
    public componentWillUnmount = (): void => undefined

    /**
     * What to call before component update (state mutation)
     * @public
     * @instance
     * @returns {void} void
     */
    public componentWillUpdate = (): void => undefined

    /**
     * Called before component is updated
     * @returns {boolean} whether or not component should update/re-render
     */
    public shouldComponentUpdate = (): boolean => true

    /**
     * Rendering HTML, must be part of extended class
     * @public
     * @instance
     * @abstract
     * @returns {null | HTMLElement | Array.<HTMLElement> | Element | Array.<Element>} if returns null error will be thrown
     */
    public abstract render = (): RenderType => null

}
