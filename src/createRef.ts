/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.6.0
 * @exports createRef create a reference to a nested component
 */
type DeStagnate = import(".").default
 
export interface Ref<T = DeStagnate | HTMLElement> {
    current: T | null,
}

/**
 * Creates a reference for a nested component
 * @returns {Object<string, null>} empty ref object
 */
const createRef = <T = DeStagnate | HTMLElement>(): Ref<T> => ({
    current: null,
})

/**
 * Creates a reference for a nested component
 * @returns {Object<string, null>} empty ref object
 */
export default createRef
