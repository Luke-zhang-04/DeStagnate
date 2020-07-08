/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.3
 * @exports createElement
 */

type ChildrenType = HTMLElement[]
    | HTMLElement
    | string 
    | string[] 
    | number 
    | number[]
    | (HTMLElement | string)[]
    | (HTMLElement | number)[]
    | (string | number)[]
    | (HTMLElement | string | number)[]

/**
 * Binds children to element
 * @package
 * @param {HTMLElement} element - element to bind
 * @param {undefined | Object.<string, string | number>} props - props to bind with
 * @returns {void} void
 */
const bindProps = (
        element: HTMLElement,
        props?: {[key: string]: unknown},
    ): void => {
        if (props) {
            for (const [key, val] of Object.entries(props)) {
                if (typeof(val) === "string") {
                    if (key === "innerHTML") {
                        element.innerHTML = val.toString()
                    } else {
                        element.setAttribute(key, val.toString())
                    }
                } else if (key.slice(0, 2) === "on") { // Works such as onClick, onAnimationEnd, etc.
                    if (typeof(val) === "function") {
                        element.addEventListener(
                            key.slice(2)
                                .toLowerCase() as keyof HTMLElementEventMap,
                            val as ()=> void
                        )
                    }
                } 
            }
        }
    },

    /**
     * Binds children to element
     * @package
     * @param {HTMLElement} element - element to bind
     * @param {undefined | ChildrenType} children - children to bind with
     * @returns {void} void
     */
    bindChildren = (element: HTMLElement, children?: ChildrenType): void => {
        if (children || children === 0) {
            if (children instanceof Array) {
                for (const child of children) {
                    if (
                        typeof(child) === "string" || 
                        typeof(child) === "number"
                    ) {
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
    },

    /**
     * Creates a child element to DynamComponent
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */
    createElement = <T extends keyof HTMLElementTagNameMap>(
        tagName: T,
        props?: {[key: string]: unknown},
        children?: ChildrenType,
    ): HTMLElement => {
        const element = document.createElement(tagName)

        bindProps(element, props)

        bindChildren(element, children)

        return element
    }

export default createElement
