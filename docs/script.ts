// Const declarations since these variables are globally defined
declare type DeStagnate = typeof import("../lib")
declare const DeStagnate: DeStagnate

(() => {
    const {createElement} = DeStagnate

    /**
     * Create nav item
     * @param {string} file - file to link to
     * @param {string} content - content of item
     * @returns {HTMLElement} nav item
     */
    const createNavItem = (file: string, content: string): HTMLElement => (
            createElement("li", null,
                createElement("a", {class: "text-dark", href: file}, content)
            )
        ),
        /**
         * All pages with their location and display name
         */
        pages = [
            ["index.html", "Home"],
            ["state.html", "State example"],
            ["props.html", "Props example"],
            ["eventListener.html", "Event listener example"],
            ["ref.html", "Ref example"],
            ["calculator.html", "Calculator Example"],
            ["namespace.html", "Namespaced element (SVG) example"],
            ["ticTacToe.html", "TicTacToe example"],
            ["ticTacToe.html", "Nested component example"],
        ]

    /**
     * Append to elements to nav
     */
    document.getElementById("nav").appendChild(
        createElement("div", {class: "p-4 bg-light"},
            createElement("div", {class: "row"},
                createElement("div", {class: "col-12 col-sm-6"}, 
                    createElement(
                        "a",
                        {
                            href: "https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/deStagnate.bundle.min.js",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            class: "pl-4"
                        },
                        createElement("img", {src: "https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/deStagnate.bundle.min.js?label=deStagnate.bundle.min.js&style=for-the-badge", alt: "bundle min size", class: "mb-3"})
                    ),
                    createElement("ul", null,
                        pages.map((val) => createNavItem(val[0], val[1])),
                    ),
                ),
                createElement("div", {class: "col-12 col-sm-6 col-lg-4"},
                    createElement("a", {href: "index.html"},
                        createElement("img", {src: "./logo.svg", class: "w-100"}),
                    )
                ),
            ),
        ),
    )

    const footer = document.querySelector("footer"),
        createFooterLink = (href: string, content: string): HTMLElement => (
            createElement("li", null,
                createElement("a", {class: "text-light", href, rel: "noopener noreferrer"}, content)
            )
        )

    footer.setAttribute("class", "page-footer font-small light pt-4 bg-tomorrow")

    footer?.appendChild(
        createElement("div", {class: "container-fluid text-center text-md-left"},
            createElement("div", {class: "row"},
                createElement("div", {class: "col-md-6 mt-md-0 mt-3"},
                    createElement("h5", {class: "test-uppercase"}, "DeStagnate"),
                    createElement("img", {class: "w-100 w-md-50", src: "logo.svg"}),
                ),
                createElement("div", {class: "col-md-3 mb-md-0 mb-3"},
                    createElement("h5", {class: "text-uppercase"}, "Examples"),
                    createElement("ul", {class: "list-unstyled"},
                        createElement("ul", {class: "list-unstyled"},
                            pages.map((val) => createFooterLink(val[0], val[1])),
                        ),
                    ),
                ),
                createElement("div", {class: "col-md-3 mb-md-0 mb-3"},
                    createElement("h5", {class: "text-uppercase"}, "Links"),
                    createElement("ul", {class: "list-unstyled"},
                        createElement("ul", {class: "list-unstyled"},
                            createFooterLink("https://github.com/Luke-zhang-04/DeStagnate", "GitHub"),
                            createFooterLink("https://www.npmjs.com/package/destagnate", "NPM")
                        ),
                    ),
                ),
            ),
        ),
    )

    footer?.appendChild(
        createElement("div", {class: "footer-copyright text-center py-3"},
            "Copyright © 2020 ",
            createElement("a", {href: "luke-zhang-04.github.io/"}, "Luke Zhang"),
        )
    )
})()
