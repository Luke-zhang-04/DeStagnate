import * as DeStagnate from "../../lib/createElementOnly"
import pages from "./pages"
;(() => {
    const footer = document.querySelector<HTMLElement>("footer"),
        createFooterLink = (href: string, content: string): JSX.Element => (
            <li>
                <a class="text-light" href={href} rel="noopener noreferrer">
                    {content}
                </a>
            </li>
        )

    footer?.setAttribute("class", "page-footer font-small light pt-4 bg-tomorrow")

    footer?.appendChild(
        <div class="container-fluid text-center text-md-left">
            <div class="row">
                <div class="col-md-6 mt-md-0 mt-3">
                    <h5 class="text-uppercase">DeStagnate</h5>
                    <img src="logo.svg" class="w-100 w-md-50" />
                </div>
                <div class="col-md-3 mb-md-0 mb-3">
                    <h5 class="text-uppercase">Examples</h5>
                    <ul class="list-unstyled">
                        <ul class="list-unstyled">
                            {pages.map((val) => createFooterLink(val[0], val[1]))}
                        </ul>
                    </ul>
                </div>
                <div class="col-md-3 mb-md-0 mb-3">
                    <h1 class="text-uppercase">Links</h1>
                    <ul class="list-unstyled">
                        <ul class="list-unstyled">
                            {createFooterLink(
                                "https://github.com/Luke-zhang-04/DeStagnate",
                                "GitHub",
                            )}
                            {createFooterLink("https://www.npmjs.com/package/destagnate", "NPM")}
                        </ul>
                    </ul>
                </div>
            </div>
        </div>,
    )

    footer?.appendChild(
        <div class="footer-copyright text-center py-3">
            Copyright © 2020, <a href="luke-zhang-04.github.io/">Luke Zhang</a>
        </div>,
    )
})()
