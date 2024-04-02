import createRef, {Ref} from "./createRef"

export type Args<Value, RefVal extends Node | null> =
    Extract<RefVal, null> extends never // If the union does not include null:
        ? [value: Value, ref: Ref<RefVal>] // Ref param is mandatory
        : [value: Value, ref?: Ref<RefVal> | null] // Otherwise, it's optional

/**
 * Convenient container class to hold a reference object and value to allow for easy (but manual)
 * state management. Just implement the update function by taking advantage of the ref object. NB:
 * this pattern will get very messy if things are too complicated.
 */
export abstract class StateContainer<Value, RefVal extends Node | null = Node | null> {
    /** Ref object */
    public readonly ref: Ref<RefVal>
    /** State value, not actually reactive */
    #value: Value

    public get value(): Value {
        return this.#value
    }

    /**
     * Setter updates the value and triggers a DOM update. Equivalent to the `update` method, but
     * may be more confusing.
     */
    public set value(value: Value) {
        this.update(value)
    }

    /**
     * Really funny constructor here, but it's just to allow omission of the reference parameter in
     * the case that it's marked as null (normally this would be a function overload).
     *
     * In other words, if the ref can be null, you can omit the second argument and a ref will be
     * created for you with null as the default value.
     *
     * @param param0 - Value and ref object
     */
    public constructor(...[value, ref]: Args<Value, RefVal>)

    public constructor(value: Value, ref: RefVal) {
        this.#value = value
        this.ref = (ref ?? createRef<RefVal>()) as Ref<RefVal>
    }

    /** Update the value and trigger `updateDOM`. */
    public update(value: Value): void {
        this.#value = value

        this.updateDOM()
    }

    /** Update the DOM accordingly */
    protected abstract updateDOM(): void
}
