/**
 * Dynamic Component
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.0
 * @exports createChild
 */

type ChildrenType = HTMLElement[]
    | HTMLElement
    | string 
    | string[] 
    | number 
    | number[]

/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
 * @returns {HTMLElement} html element
 */
const createChild = <T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    props?: {[key: string]: string | number},
    children?: ChildrenType,
): HTMLElement => {
    const element = document.createElement(tagName)

    if (props) {
        for (const [key, val] of Object.entries(props)) {
            if (key === "innerHTML") {
                element.innerHTML = val.toString()
            } else {
                element.setAttribute(key, val.toString())
            }
        }
    }

    if (children) {
        if (children instanceof Array) {
            for (const child of children) {
                if (typeof(child) === "string" || typeof(child) === "number") {
                    element.innerText = child.toString()
                } else {
                    element.appendChild(child)
                }
            }
        } else if (
            typeof(children) === "string" ||
            typeof(children) === "number"
        ) {
            element.innerText = children.toString()
        } else {
            element.appendChild(children)
        }
    }

    return element
}

export default createChild
