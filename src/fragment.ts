import {ChildrenArrayType, bindChildren} from "./internal/_createElementUtils"
import {Ref} from "./createRef"

interface FragmentProps {
    ref?: Ref<DocumentFragment>
}

/* eslint-disable @typescript-eslint/naming-convention */
export const Fragment = (
    props?: FragmentProps | null,
    ...children: ChildrenArrayType
): DocumentFragment => {
    const documentFragment = document.createDocumentFragment()

    if (props?.ref) {
        props.ref.current = documentFragment
    }
    bindChildren(documentFragment, children)

    return documentFragment
}
/* eslint-enable @typescript-eslint/naming-convention */

export default Fragment
