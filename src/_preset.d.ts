/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.4.0
 * @exports Preset
 * @package
 */
declare type RenderType = null | HTMLElement | HTMLElement[] | Element | Element[];
/**
 * Lifecycle member functions
 */
export default abstract class Preset {
    /**
     * Called when component catches error. Default behaviour is console.error
     * @param {Error} error - error object with info
     * @returns {void} void
     */
    componentDidCatch: (error: Error) => void;
    /**
     * What to call after component mounting
     * @public
     * @instance
     * @returns {void} void
     */
    componentDidMount: () => void;
    /**
     * What to call after component update (state mutation)
     * @public
     * @instance
     * @returns {void} void
     */
    componentDidUpdate: () => void;
    /**
     * What to call before component mounting
     * @public
     * @instance
     * @returns {void} void
     */
    componentWillMount: () => void;
    /**
     * What to call before component unmounting
     * @public
     * @instance
     * @returns {void} void
     */
    componentWillUnmount: () => void;
    /**
     * What to call before component update (state mutation)
     * @public
     * @instance
     * @returns {void} void
     */
    componentWillUpdate: () => void;
    /**
     * Rendering HTML, must be part of extended class
     * @public
     * @instance
     * @abstract
     * @returns {null | HTMLElement | Array.<HTMLElement> | Element | Array.<Element>} if returns null error will be thrown
     */
    abstract render: () => RenderType;
}
export {};
