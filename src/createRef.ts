/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * 
 * Copyright (C) 2020 Luke Zhang luke-zhang-04.github.io 
 * MIT License
 * 
 * @version 1.5.2
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
