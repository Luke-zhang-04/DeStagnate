import type {ChildrenArrayType, RefProp} from "./types"
import {bindChildren, setRefs} from "./utils"

interface FragmentProps {
    ref?: RefProp<DocumentFragment>
}

/* eslint-disable @typescript-eslint/naming-convention */
export const Fragment = (
    props?: FragmentProps | null,
    ...children: ChildrenArrayType
): DocumentFragment => {
    const documentFragment = document.createDocumentFragment()

    if (props?.ref) {
        setRefs(documentFragment, props.ref)
    }
    bindChildren(documentFragment, children)

    return documentFragment
}
/* eslint-enable @typescript-eslint/naming-convention */

export default Fragment
