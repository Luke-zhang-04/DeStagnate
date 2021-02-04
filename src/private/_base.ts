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

import {default as _createElement} from "../createElement"
import {default as _createElementNS} from "../createElementNS"
import {default as _createRef} from "../createRef"

type RenderType = null | HTMLElement | HTMLElement[] | Element | Element[]

export interface Preset {

    /**
     * Function that is called after component mounting
     */
    componentDidMount?: ()=> void,

    /**
     * Function that is called after component update (state mutation)
     */
    componentDidUpdate?: ()=> void,

    /**
     * Function that is called before component mounting
     */
    componentWillMount?: ()=> void,

    /**
     * Function that is called before component unmounting
     */
    componentWillUnmount?: ()=> void,

    /**
     * Function that is called before component update (state mutation)
     */
    componentWillUpdate?: ()=> void,

    shouldComponentUpdate: ()=> boolean,

}

/* istanbul ignore next */
/**
 * Base class for components
 */
export abstract class Preset {

    public static readonly createElement = _createElement

    public static readonly createElementNS = _createElementNS

    public static readonly createRef = _createRef

    public readonly createElement = _createElement

    public readonly createElementNS = _createElementNS

    public readonly createRef = _createRef

    /**
     * Called when component catches error. Default behaviour is console.error
     * @param error - error object with info
     * @returns void
     */
    public componentDidCatch = (error: Error): void => console.error(error)

    /**
     * Called when component catches a warning. Default behaviour is console.warn
     * @param msg - warning message
     * @returns void
     */
    public componentDidWarn = (msg: string): void => console.warn(msg)

    /**
     * Called before component is updated
     * @returns whether or not component should update/re-render
     */
    public shouldComponentUpdate = (): boolean => true

    /**
     * Rendering HTML, must be part of extended class
     * @public
     * @instance
     * @abstract
     * @returns if returns null error will be thrown
     */
    public abstract render = (): RenderType => null

}
