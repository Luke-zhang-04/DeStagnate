/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * 
 * Copyright (C) 2020 Luke Zhang luke-zhang-04.github.io 
 * MIT License
 * 
 * @version 1.5.2
 * @exports Preset
 * @package
 */

type RenderType = null | HTMLElement | HTMLElement[] | Element | Element[]

import Events from "./_events"

/* istanbul ignore next */
/**
 * Lifecycle member functions
 */
export default abstract class Preset extends Events {

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
     * Rendering HTML, must be part of extended class
     * @public
     * @instance
     * @abstract
     * @returns {null | HTMLElement | Array.<HTMLElement> | Element | Array.<Element>} if returns null error will be thrown
     */
    public abstract render = (): RenderType => null

}
