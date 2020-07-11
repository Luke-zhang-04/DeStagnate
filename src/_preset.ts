/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.2
 * @exports Preset
 * @package
 */

/**
 * Lifecycle member functions
 */
export default abstract class Preset {

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
     * @returns {null | HTMLElement | Array.<HTMLElement> | JSX.Element} if returns null error will be thrown
     */
    public abstract render = (): null | HTMLElement | HTMLElement[] => null

}
