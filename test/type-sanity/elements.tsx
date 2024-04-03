import DeStagnate, {createRef, createElement} from "../../src"

let div: HTMLDivElement
let anchor: HTMLAnchorElement

div = createElement("div")
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
