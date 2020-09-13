/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createDSComponent add nested component for DeStagnate components
 */

import DeStagnate from "."
import {Ref} from "./createRef"

type DeStagnateConstructor<Props, State> = new (
    parent: HTMLElement,
    props?: Props,
)=> DeStagnate<Props, State>

/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Creates nested DeStagnate component
 * @deprecated do not use this function, since 1.6.1
 * This only exists to adhere to semver
 * @param Component - DeStagnate component
 * @param props - props of component
 * @param ref - ref object
 * @returns parent of component
 */
const createDSComponent = <
    Props = Record<string, unknown>,
    State = Record<string, unknown>,
    >(
        Component: DeStagnateConstructor<Props, State>,
        props?: Props,
        ref?: Ref<DeStagnate<Props, State>>,
    ): HTMLDivElement => {
    const element = document.createElement("div")

    element.classList.add("DeStagnate-component-parent")

    const _component = new Component(element, props)

    _component.mount()

    if (ref) {
        ref.current = _component
    }

    return element
}

export default createDSComponent
