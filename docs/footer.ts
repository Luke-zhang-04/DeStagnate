import createElement from "../lib/createElementOnly"
import pages from "./pages"

(() => {
    const footer = document.querySelector("footer"),
        createFooterLink = (href: string, content: string): HTMLElement => (
            createElement("li", null,
                createElement("a", {class: "text-light", href, rel: "noopener noreferrer"}, content)
            )
        )

    footer?.setAttribute("class", "page-footer font-small light pt-4 bg-tomorrow")

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
