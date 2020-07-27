/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.5.0
 * @exports createRef create a reference to a nested component
 */
type DeStagnate = import(".").default
 
export interface Ref<T = DeStagnate> {
    current?: T,
}

/**
 * Creates a reference for a nested component
 * @returns {Object<string, undefined>} empty ref object
 */
const createRef = <T = DeStagnate>(): Ref<T> => ({
    current: undefined
})

/**
 * Creates a reference for a nested component
 * @returns {Object<string, undefined>} empty ref object
 */
export default createRef
