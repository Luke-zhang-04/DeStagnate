import * as DeStagnate from "../../lib"
import pages from "./pages"
;(() => {
    /**
     * Create nav item
     *
     * @param {string} file - File to link to
     * @param {string} content - Content of item
     * @returns {HTMLElement} Nav item
     */
    const createNavItem = (file: string, content: string): JSX.Element => (
        <li>
            <a class="text-dark" href={file}>
                {content}
            </a>
        </li>
    )

    /** Append to elements to nav */
    document.getElementById("nav")?.appendChild(
        <div class="p-4 bg-light">
            <div class="row">
                <ul>{pages.map((val) => createNavItem(val[0], val[1]))}</ul>
            </div>
        </div>,
    )
})()
