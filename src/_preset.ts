/**
 * Dynamic Component
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.0
 * @exports Preset
 * @package
 */
export default class Preset {

    /**
     * What to call on component mounting
     * @returns {void} void
     */
    public componentDidMount = (): void => undefined

    /**
     * What to call on component update (state mutation)
     * @returns {void} void
     */
    public componentDidUpdate = (): void => undefined

    /**
     * What to call before component mounting
     * @returns {void} void
     */
    public componentWillMount = (): void => undefined

    /**
     * What to call before component unmounting
     * @returns {void} void
     */
    public componentWillUnmount = (): void => undefined

    /**
     * What to call before component update (state mutation)
     * @returns {void} void
     */
    public componentWillUpdate = (): void => undefined

    /**
     * Rendering HTML, must be part of extended class
     * @returns {null | HTMLElement} if returns null error will be thrown
     */
    public render = (): null | HTMLElement => null

}
