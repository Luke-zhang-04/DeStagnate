/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.1.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

import * as _Component from "./component"
import * as _CreateElement from "./createElement"
import * as _CreateElementNS from "./createElementNS"
import * as _CreateRef from "./createRef"
import * as _Fragment from "./fragment"

export {Component} from "./component"
export {Ref, createRef} from "./createRef"
export {createElement} from "./createElement"
export {createElementNS} from "./createElementNS"
export {Fragment} from "./fragment"

/* eslint-disable */
export namespace DeStagnate {
    export const {Component} = _Component
    export const {createRef} = _CreateRef
    export type Ref = _CreateRef.Ref
    export const {createElement} = _CreateElement
    export const {createElementNS} = _CreateElementNS
    export const {Fragment} = _Fragment
}
/* eslint-enable */

export default DeStagnate
