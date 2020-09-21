/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 2.0.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 * @preserve
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

/* eslint-disable max-lines */
import {Ref as _Ref, createRef} from "./createRef"
import {Component} from "./component"
import {createElement} from "./createElement"
import {createElementNS} from "./createElementNS"

/**
 * CreRefates a child element to deStagnate
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns html element
 */
export {createElement} from "./createElement"


/**
 * Creates an HTML Element
 * @param tagName - name of HTML element
 * @param props - element properties, such as class, innerHTML, id, style, etc
 * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
 * @param childrenRest - rest parameter of children
 * @returns html element
 */
export {createElementNS} from "./createElementNS"


/**
 * Creates a reference for a nested component
 * @returns empty ref object
 */
export {createRef} from "./createRef"


/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
export {Component} from "./component"

export type {Ref} from "./createRef"

export default {

    /**
     * CreRefates a child element to deStagnate
     * @param tagName - name of HTML element
     * @param props - element properties, such as class, innerHTML, id, style, etc
     * @param children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
     * @returns html element
     */
    createElement,

    /**
     * Creates an HTML Element
     * @param tagName - name of HTML element
     * @param props - element properties, such as class, innerHTML, id, style, etc
     * @param children -  children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these  will create multiple children
     * @param childrenRest - rest parameter of children
     * @returns html element
     */
    createElementNS,

    /**
     * Creates a reference for a nested component
     * @returns empty ref object
     */
    createRef,

    /* eslint-disable @typescript-eslint/naming-convention */
    /**
     * DeStagnate
     * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
     * @class
     * @namespace
     * @abstract
     */
    Component,
}
