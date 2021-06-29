/**
 * DeStagnate A simple, ReactJS inspired library to create dynamic components within static sites easier
 *
 * @license MIT
 * @author Luke Zhang luke-zhang-04.github.io
 * @copyright Copyright (C) 2020 - 2021 Luke Zhang
 * @exports createElement function for DOM manipulation
 */
// eslint-disable-next-line
/// <reference path="./jsx.ts" />

import {ChildrenArrayType, bindChildren} from "./private/_createElementUtils"

/* eslint-disable @typescript-eslint/naming-convention */
export const Fragment = (_: unknown, ...children: ChildrenArrayType): DocumentFragment => {
    const documentFragment = document.createDocumentFragment()

    bindChildren(documentFragment, children)

    return documentFragment
}
/* eslint-enable @typescript-eslint/naming-convention */

export default Fragment
