/**
 * DeStagnate: A lightweight wrapper around vanilla DOM methods
 *
 * @license MIT
 * @version 3.0.0
 * @copyright 2020 - 2024 Luke Zhang
 */
// eslint-disable-next-line
/// <reference path="./types/jsx.ts" />

export {type Ref, createRef} from "./createRef"
export {bindProps, bindChildren, clearChildren, setRefs} from "./utils"
export {createElement, createElement as ce} from "./createElement"
export {createElementNS, createElementNS as ceNS, namespaces} from "./createElementNS"
export {Fragment} from "./fragment"
export {StateContainer} from "./stateContainer"

export type {
    ChildrenType,
    EventFunc,
    RefProp,
    GeneralProps,
    PropsWithChildren,
    PropsWithRef,
    DSElementProps,
    HTMLElementProps,
    HTMLDeprecatedElementProps,
    AllHTMLElementProps,
    SVGElementProps,
    XHTMLElementProps,
    ElementProps,
} from "./types"
