import * as DeStagnate from "../../src"
import {createRef, createElement} from "../../src"

let div: HTMLDivElement
let anchor: HTMLAnchorElement

div = createElement("div")
div = createElement("div", null)
div = createElement("div", {})
;<div></div>

// @ts-expect-error
anchor = createElement("div")

div = createElement("div", {ref: createRef<HTMLDivElement>()})
;<div ref={createRef<HTMLDivElement>()}></div>

// @ts-expect-error
createElement("div", {ref: createRef<HTMLButtonElement>()})
// @ts-expect-error
;<div ref={createRef<HTMLButtonElement>()}></div>

div = createElement("div", {class: "class"})
;<div class="class"></div>

// @ts-expect-error
createElement("div", {class: true})
// @ts-expect-error
;<div class></div>

div = createElement("div", {href: true})
;<div href></div>

createElement("a", {href: ""})
;<a href=""></a>

// @ts-expect-error
div = createElement("a")

// @ts-expect-error
createElement("a", {href: true})
// @ts-expect-error
;<a href></a>

createElement("a", null, <div></div>)
;<a>{createElement("div")}</a>

div = createElement(
    "div",
    {class: "col-3"},
    createElement("table", null, createElement("tr", null), [
        createElement("tr", null),
        [createElement("tr", null)],
        [createElement("tr", null), [[[[createElement("tr", null)]]]], createElement("tr", null)],
        createElement("tr", null),
    ]),
)
;<div class="col-3">
    <table>
        <tr />
        {[<tr />]}
        {[<tr />, [[[[<tr />]]]], <tr />]}
        <tr />
    </table>
</div>

div = createElement("div", {style: "width: 100%; height: 100%;"})
;<div style="width: 100%; height: 100%;"></div>

div = createElement("div", {style: {width: "100%", height: "100%", transition: null}})
;<div style={{width: "100%", height: "100%", transition: null}}></div>

// @ts-expect-error
div = createElement("div", {width: "100%", height: "100%", transition: null, style: {other: "e"}})
// @ts-expect-error
;<div style={{width: "100%", height: "100%", transition: null, other: "e"}}></div>
