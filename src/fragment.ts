/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @exports createElement function for DOM manipulation
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

import {ChildrenArrayType, bindChildren} from "./private/_createElementUtils"

export const Fragment = (_: unknown, ...children: ChildrenArrayType): DocumentFragment => {
    const documentFragment = document.createDocumentFragment()

    bindChildren(documentFragment, children)

    return documentFragment
}

export default Fragment
