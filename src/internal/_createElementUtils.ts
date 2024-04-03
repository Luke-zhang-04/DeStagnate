import type {AllProps, ChildrenType, EventFunc, RefProp} from "../types"

const isStringable = (val: unknown): val is boolean | number | bigint | string =>
    typeof val === "boolean" ||
    typeof val === "number" ||
    typeof val === "bigint" ||
    typeof val === "string"

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
 * Binds children to element
 *
 * @param element - Element to bind
 * @param props - Props to bind with
 * @param ns - If namespace element
 * @returns Void
 * @package
 */
export const bindProps = (element: Element, props?: AllProps | null, ns = false): void => {
    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (isStringable(val)) {
                if (ns) {
                    element.setAttributeNS(null, key, val.toString())
                } else {
                    element.setAttribute(key, val.toString())
                }
            } else if (key.slice(0, 2) === "on") {
                // Works such as onClick, onAnimationEnd, etc.
                if (typeof val === "function") {
                    element.addEventListener(key.slice(2).toLowerCase(), val as EventFunc)
                }
            } else if (
                key === "ref" &&
                typeof val === "object" &&
                ("current" in val || Array.isArray(val))
            ) {
                setRefs(element, val)
            } else if (val !== undefined && val !== null) {
                console.warn(`Invalid prop type ${typeof val} at ${key}: ${val}`)
            }
        }
    }
}

/**
 * Binds children to element
 *
 * @param element - Element to bind
 * @param children - Children to bind with
 * @returns Void
 * @package
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
