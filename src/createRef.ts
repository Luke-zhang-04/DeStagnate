/**
 * Component
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createRef create a reference to a nested component
 */
type Component = typeof import(".").Component

export interface Ref<T = Component | HTMLElement> {
    current: T | null,
}

/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
export const createRef = <T = Component | HTMLElement>(): Ref<T> => ({
    current: null,
})

/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
export default createRef
