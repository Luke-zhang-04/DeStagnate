import * as DeStagnate from "../../src"
import {createRef, createElementNS, namespaces, createElement} from "../../src"

let svgSvg: SVGSVGElement
let mathML: MathMLElement
let xhtml: HTMLElement
let elem: Element

svgSvg = createElementNS(
    namespaces.svg,
    "svg",
    {
        width: 0,
        height: 0,
        viewBox: "0 0 0 0",
    },
    createElementNS(namespaces.svg, "rect", {
        width: 0,
        height: 0,
        fill: "#28A745",
        x: 0,
        ref: createRef<SVGRectElement>(),
    }),
)

createElementNS(namespaces.svg, "svg", {
    width: 0,
    // @ts-expect-error
    height: true,
    viewBox: "0 0 0 0",
    ref: createRef<SVGSVGElement>(),
})

elem = createElementNS(null, "svg", {
    width: 0,
    height: true,
    viewBox: "0 0 0 0",
    ref: createRef<Element>(),
})

// @ts-expect-error
svgSvg = createElementNS(null, "svg", {
    width: 0,
    height: true,
    viewBox: "0 0 0 0",
    ref: createRef<Element>(),
})

elem = createElementNS("other", "svg", {
    width: 0,
    height: true,
    viewBox: "0 0 0 0",
    // So this is very clearly undesirable behaviour, but it is what it is.
    // There's only so much you can really do after all.
    ref: createRef<HTMLDivElement>(),
})

svgSvg = createElementNS(
    namespaces.svg,
    "svg",
    {
        width: 0,
        height: 0,
        viewBox: "0 0 0 0",
    },
    createElementNS(namespaces.svg, "rect", {
        width: 0,
        height: 0,
        fill: "#28A745",
        x: 0,
        // @ts-expect-error
        ref: createRef<SVGElement>(),
    }),
)

// @ts-expect-error
svgSvg = createElementNS(namespaces.svg, "circle")

mathML = createElementNS(namespaces.mathML, "math")
// @ts-expect-error
mathML = createElementNS(namespaces.xlink, "para")

xhtml = createElementNS(namespaces.xhtml, "div")
// @ts-expect-error
xhtml = createElementNS(namespaces.xml, "xml")

// @ts-expect-error
createElementNS(namespaces.svg, "div")

// With colon

svgSvg = createElement(
    "svg:svg",
    {
        width: 0,
        height: 0,
        viewBox: "0 0 0 0",
    },
    createElement("svg:rect", {
        width: 0,
        height: 0,
        fill: "#28A745",
        x: 0,
        ref: createRef<SVGRectElement>(),
    }),
)
;<svg:svg width={0} height={0} viewBox="0 0 0 0">
    <svg:rect width={0} height={0} fill="28A745" x={0} ref={createRef<SVGRectElement>()} />
</svg:svg>

// @ts-expect-error
createElement("svg:svg", {
    width: 0,
    height: true,
    viewBox: "0 0 0 0",
    ref: createRef<SVGSVGElement>(),
})
;<svg:svg
    width={0}
    // @ts-expect-error
    height
    viewBox="0 0 0 0"
    ref={createRef<SVGSVGElement>()}
/>

svgSvg = createElement(
    "svg:svg",
    {
        width: 0,
        height: 0,
        viewBox: "0 0 0 0",
    },
    // @ts-expect-error
    createElement("svg:rect", {
        width: 0,
        height: 0,
        fill: "#28A745",
        x: 0,
        ref: createRef<SVGElement>(),
    }),
)
;<svg:svg width={0} height={0} viewBox="0 0 0 0">
    <svg:rect
        width={0}
        height={0}
        fill="#28A745"
        x={0}
        // @ts-expect-error
        ref={createRef<SVGElement>()}
    />
</svg:svg>

// @ts-expect-error
svgSvg = createElement("svg:circle")

mathML = createElement("mathML:math")
// @ts-expect-error
mathML = createElement("xlink:para")

xhtml = createElement("xhtml:div")
// @ts-expect-error
xhtml = createElement("xml:xml")

// @ts-expect-error
createElementNS(namespaces.svg, "div")
// @ts-expect-error
;<svg:div />
