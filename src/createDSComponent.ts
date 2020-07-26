/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.5.0
 * @exports createDSComponent add nested component for DeStagnate components
 */

import DeStagnate from "."

type DeStagnateConstructor<Props, State> = new (
    parent: HTMLElement,
    props?: Props,
)=> DeStagnate<Props, State>

/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Creates nested DeStagnate component
 * @param {DeStagnateConstructor} Component - DeStagnate component
 * @param {Object<string, unknown>} props - props of component
 * @returns {HTMLDivElement} parent of component
 */
const createDSComponent = <
    Props = Record<string, unknown>,
    State = Record<string, unknown>
    >(
        Component: DeStagnateConstructor<Props, State>,
        props?: Props,
    ): HTMLDivElement => {
    const element = document.createElement("div")

    element.classList.add("DeStagnate-component-parent")

    const _component = new Component(element, props)

    _component.mount()

    return element
}

export default createDSComponent
