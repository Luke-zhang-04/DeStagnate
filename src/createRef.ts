export interface Ref<T = HTMLElement> {
    current: T | null
}

/**
 * Creates a reference for a nested component
 *
 * @returns Empty ref object
 */
export const createRef = <T = HTMLElement>(): Ref<T> => ({
    current: null,
})

/**
 * Creates a reference for a nested component
 *
 * @returns Empty ref object
 */
export default createRef
