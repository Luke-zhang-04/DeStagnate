/**
 * Remove all children of DOM node `parent`
 *
 * @param parent - parent element whose children need to be removed
 */
export const removeChildren = (parent: Node) => {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild!)
    }
}
