/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

/* eslint-disable max-lines */
import {Ref as _Ref, default as _createRef} from "./createRef"
import DeStagnate from "./component"
import _createDSComponent from "./createDSComponent"
import _createElement from "./createElement"
import _createElementNS from "./createElementNS"

/**
 * Creates nested DeStagnate component
 * @param Component - DeStagnate component
 * @param props - props of component
 * @returns parent of component
 */
export const createDSComponent = _createDSComponent

/**
 * Creates a child element to deStagnate
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns html element
 */
export const createElement = _createElement

/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
export const createElementNS = _createElementNS


/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
export const createRef = _createRef

/* eslint-disable @typescript-eslint/naming-convention */

/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
export const Component = DeStagnate

export type Ref = _Ref

/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
export default DeStagnate
