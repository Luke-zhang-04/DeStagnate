import type {ChildrenType, EventFunc, GeneralProps, RefProp} from "./types"

const isStringable = (val: unknown): val is boolean | number | bigint | string =>
    typeof val === "boolean" ||
    typeof val === "number" ||
    typeof val === "bigint" ||
    typeof val === "string"

/**
 * Sets the current value of the ref(s) in `refs` to `element`.
 *
 * - If `refs` is a single `Ref`, the current value of `refs` will be set to `element`
 * - If `refs` is an array of `Ref`, then current value of every ref in `refs` will be set to
 *   `element`
 *
 * @param element - Element to assign to ref(s)
 * @param refs - Ref(s) to assign element to.
 */
export const setRefs = (element: Node, refs: RefProp<Node>): void => {
    if (Array.isArray(refs)) {
        for (const ref of refs) {
            ref.current = element
        }
    } else {
        refs.current = element
    }
}

/**
 * Binds children to element.
 *
 * - Props of type `string`, `number`, `bigint`, `boolean` will be cast to a string before being
 *   added as an attribute to `element`
 * - Props that begin with "on" and have a function value will be added as event listeners, where the
 *   name of the event is the key name without the "on" prefix, all set to lower case, and the
 *   function is the handler.
 * - The `ref` prop can be a `Ref` or array of `Ref`, and the current value of the ref(s) will be set
 *   to the current element
 * - Props that have the value `null` will be removed from `element`
 * - Props that have the value `undefined` will be ignored
 * - Props that do not fit the above criteria will generate a warning (and be ignored)
 *
 * @param element - Element to bind props to
 * @param props - Props to bind with
 * @param ns - If namespace element
 */
export const bindProps = (element: Element, props?: GeneralProps | null, ns = false): void => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (isStringable(val)) {
                if (ns) {
                    element.setAttributeNS(null, key, val.toString())
                } else {
                    element.setAttribute(key, val.toString())
                }
            } else if (key.startsWith("on") && typeof val === "function") {
                // Works such as onClick, onAnimationEnd, etc.
                element.addEventListener(key.slice(2).toLowerCase(), val as EventFunc)
            } else if (
                key === "ref" &&
                typeof val === "object" &&
                ("current" in val || Array.isArray(val))
            ) {
                setRefs(element, val)
            } else if (val === null) {
                if (ns) {
                    element.removeAttributeNS(null, key)
                } else {
                    element.removeAttribute(key)
                }
            } else if (val !== undefined) {
                console.warn(`Invalid prop type ${typeof val} at ${key}: ${val}`)
            }
        }
    }
}

/**
 * Adds children to element. A nested array of children will be recursively appended to `element`
 * in the order that they appear. `null`, `undefined`, and `false` will be ignored.
 *
 * @param element - Element to add children to
 * @param children - Children to append to `element`
 * @remark This funcion will **append** `children` to `element` in the order that they appear. To remove children, see `clearChildren`.
 */
export const bindChildren = (element: Node, children?: ChildrenType): void => {
    if (children !== null && children !== undefined && children !== false) {
        if (Array.isArray(children)) {
            for (const child of children) {
                bindChildren(element, child)
            }
        } else if (isStringable(children)) {
            element.appendChild(document.createTextNode(children.toString()))
        } else if (children instanceof Node) {
            element.appendChild(children)
        } else {
            console.warn(`Invalid child type ${typeof children}: ${children}`)
        }
    }
}

/**
 * Remove all children of DOM node `parent`
 *
 * @param parent - Parent element whose children need to be removed
 */
export const clearChildren = (parent: Node): void => {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild!)
    }
}
