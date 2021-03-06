/**
 * Component A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @exports createRef create a reference to a nested component
 */
type Component = typeof import(".").Component

export interface Ref<T = Component | HTMLElement> {
    current: T | null
}

/**
 * Creates a reference for a nested component
 *
 * @returns Empty ref object
 */
export const createRef = <T = Component | HTMLElement>(): Ref<T> => ({
    current: null,
})

/**
 * Creates a reference for a nested component
 *
 * @returns Empty ref object
 */
export default createRef
