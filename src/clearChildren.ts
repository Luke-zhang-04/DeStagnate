/**
 * Remove all children of DOM node `parent`
 *
 * @param parent - Parent element whose children need to be removed
 */
export const clearChildren = (parent: Node): void => {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild!)
    }
}
