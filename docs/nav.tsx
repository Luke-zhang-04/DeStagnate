import createElement from "destagnate/lib/createElementOnly"
import pages from "./pages"

const DeStagnate = { // Need this for JSX pragma
    createElement,
};

(() => {
    /**
     * Create nav item
     * @param {string} file - file to link to
     * @param {string} content - content of item
     * @returns {HTMLElement} nav item
     */
    const createNavItem = (file: string, content: string): HTMLElement => (
            <li>
                <a class="text-dark" href={file}>{content}</a>
            </li>
        )

    /**
     * Append to elements to nav
     */
    document.getElementById("nav")?.appendChild(
        <div class="p-4 bg-light">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <a
                        href="https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/es6/deStagnate.bundle.min.js"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="pl-4"
                    >
                        <img
                            src="https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/es6/deStagnate.bundle.min.js?label=es6/deStagnate.bundle.min.js&style=for-the-badge"
                            alt="bundle min size"
                            class="mb-3"
                        />
                    </a>
                    <ul>
                        {pages.map((val) => createNavItem(val[0], val[1]))}
                    </ul>
                </div>
                <div class="col-12 col-sm-6 col-lg-4">
                    <a href="/">
                        <img src="./logo.svg" class="w-100"/>
                    </a>
                </div>
            </div>
        </div>
    )
})()
