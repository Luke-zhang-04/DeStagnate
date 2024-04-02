// eslint-disable-next-line
/// <reference path="./jsx.ts" />

import {ChildrenArrayType, bindChildren} from "./internal/_createElementUtils"

/* eslint-disable @typescript-eslint/naming-convention */
export const Fragment = (_props: unknown, ...children: ChildrenArrayType): DocumentFragment => {
    const documentFragment = document.createDocumentFragment()

    bindChildren(documentFragment, children)

    return documentFragment
}
/* eslint-enable @typescript-eslint/naming-convention */

export default Fragment
