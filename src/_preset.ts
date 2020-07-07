/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.1
 * @exports Preset
 * @package
 */

/**
 * Lifecycle member functions
 */
export default class Preset {

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
     * @returns {null | HTMLElement} if returns null error will be thrown
     */
    public render = (): null | HTMLElement => null

}
