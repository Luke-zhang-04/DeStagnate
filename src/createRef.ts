export interface Ref<T = Element> {
    current: T | null
}

/**
 * Creates a reference for a nested component
 *
 * @returns Empty ref object
 */
export const createRef = <T = Element>(): Ref<T> => ({
    current: null,
})

/**
 * Creates a reference for a nested component
 *
 * @returns Empty ref object
 */
export default createRef
