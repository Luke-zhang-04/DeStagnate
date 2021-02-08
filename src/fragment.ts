/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports createElement function for DOM manipulation
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

import {
    ChildrenArrayType,
    bindChildren,
} from "./private/_createElementUtils"

export const fragment = (
    _: unknown,
    ...children: ChildrenArrayType
): DocumentFragment => {
    const fragment = document.createDocumentFragment()

    bindChildren(fragment, children)

    return fragment
}

export default fragment
