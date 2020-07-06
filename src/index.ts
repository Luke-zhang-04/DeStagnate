/**
 * Dynamic Component
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.0
 * @exports DynamicComponent
 * @namespace
 */

/**
 * Applies attributes from props
 * @param {HTMLElement} element - HTML element
 * @param {Object.<string, string | number>} props - element properties
 * @returns {void} void
 * @package
 */
const applyAttributes = (
    element: HTMLElement,
    props: {[key: string]: string | number},
): void => {
    for (const [key, value] of Object.entries(props)) {
        switch (key) {
        case ("accept"):
            if (!(element instanceof HTMLInputElement)) {
                throw new Error(`Prop ${key} is not valid in HTML element ${value}`)
            }
            (element as HTMLInputElement).accept = value.toString()
            break
        default:
            throw Error("Unknow error")
        }
    }
}

/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties
 * @param {undefined | Array.<HTMLElement> | HTMLElement} children - child of element, or array of children
 * @returns {HTMLElement} html element
 */
export const createChild = <T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    props?: {[key: string]: string | number},
    children?: HTMLElement[] | HTMLElement,
): HTMLElement => {
    const element = document.createElement(tagName)

    if (props) {
        applyAttributes(element, props)
    }

    if (children) {
        if (children instanceof Array) {
            for (const child of children) {
                element.appendChild(child)
            }
        } else {
            element.appendChild(children)
        }
    }

    return element
}

/**
 * Dynamic Component
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 */
export default class DynamComponent {

    /**
     * Creates a child element to DynamComponent
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */
    public static createChild = createChild

    public constructor (element: HTMLElement) {

    }

}
