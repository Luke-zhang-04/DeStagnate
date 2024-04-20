import type {ChildrenType, RefProp} from "./types"
import {bindChildren, setRefs} from "./utils"
import type {FC} from "./createElement"

interface FragmentProps {
    ref?: RefProp<DocumentFragment>
}

/* eslint-disable @typescript-eslint/naming-convention */
export const Fragment: FC<FragmentProps, ChildrenType, DocumentFragment> = (
    {ref},
    ...children
) => {
    const documentFragment = document.createDocumentFragment()

    if (ref) {
        setRefs(documentFragment, ref)
    }
    bindChildren(documentFragment, children)

    return documentFragment
}
/* eslint-enable @typescript-eslint/naming-convention */

export default Fragment
