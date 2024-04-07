import type {ChildrenArrayType, RefProp} from "./types"
import {bindChildren, setRefs} from "./utils"
import type {FC} from "./createElement"

interface FragmentProps {
    ref?: RefProp<DocumentFragment>
}

/* eslint-disable @typescript-eslint/naming-convention */
export const Fragment: FC<
    FragmentProps | null | undefined,
    ChildrenArrayType,
    DocumentFragment
> = (props?, ...children) => {
    const documentFragment = document.createDocumentFragment()

    if (props?.ref) {
        setRefs(documentFragment, props.ref)
    }
    bindChildren(documentFragment, children)

    return documentFragment
}
/* eslint-enable @typescript-eslint/naming-convention */

export default Fragment
