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
