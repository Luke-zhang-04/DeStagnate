import {Fragment, createRef, createElement} from "../src"

createElement(Fragment)
createElement(Fragment, {ref: createRef<DocumentFragment>()})
// @ts-expect-error
createElement(Fragment, {ref: createRef<HTMLDivElement>()})
// @ts-expect-error
createElement(Fragment, {class: ""})
