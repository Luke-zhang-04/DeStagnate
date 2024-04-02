export interface Ref<T = Element | null> {
    current: T
}

type CreateRef = {
    /**
     * Creates a reference for a nested component
     *
     * @param defaultValue - Default value of ref
     * @returns Ref object
     */
    <T = Element>(defaultValue: T): Ref<T>

    /**
     * Creates a reference for a nested component
     *
     * @param defaultValue - Default value of ref
     * @returns Empty ref object
     */
    <T = Element>(defaultValue?: null | undefined): Ref<T | null>
}

/**
 * Creates a reference for a nested component
 *
 * @param defaultValue - Default value of ref
 * @returns Ref object
 */
export const createRef: CreateRef = <T = Element>(
    defaultValue: T | null = null,
): Ref<T | null> => ({
    current: defaultValue,
})

/**
 * Creates a reference for a nested component
 *
 * @param defaultValue - Default value of ref
 * @returns Ref object
 */
export default createRef
