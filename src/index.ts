/**
 * DeStagnate: A lightweight wrapper around vanilla DOM methods
 *
 * @license MIT
 * @version 3.1.0
 * @copyright 2020 - 2024 Luke Zhang
 */
// eslint-disable-next-line
/// <reference path="./types/jsx.ts" />

export {type Ref, createRef} from "./createRef"
export {bindProps, bindChildren, clearChildren, setRefs} from "./utils"
export {
    type FC,
    type FunctionComponent,
    createElement,
    createElement as ce,
    createElement as default,
} from "./createElement"
export {createElementNS, createElementNS as ceNS, namespaces} from "./createElementNS"
export {Fragment} from "./fragment"
export {StateContainer} from "./stateContainer"

export type {
    ChildrenType,
    ChildType,
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
