// eslint-disable-next-line
/// <reference path="./jsx.ts" />

import {ChildrenArrayType, bindChildren} from "./internal/_createElementUtils"
import type {Ref} from "destagnate"

interface FragmentProps {
    ref: Ref<DocumentFragment>
}

/* eslint-disable @typescript-eslint/naming-convention */
export const Fragment = (
    props: FragmentProps,
    ...children: ChildrenArrayType
): DocumentFragment => {
    const documentFragment = document.createDocumentFragment()

    props.ref.current = documentFragment
    bindChildren(documentFragment, children)

    return documentFragment
}
/* eslint-enable @typescript-eslint/naming-convention */

export default Fragment
