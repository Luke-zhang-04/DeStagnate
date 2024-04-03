import {createRef, createElementNS} from "../../src"

const svgURI = "http://www.w3.org/2000/svg"

createElementNS(
    svgURI,
    "svg",
    {
        width: 0,
        height: 0,
        viewBox: "0 0 0 0",
    },
    createElementNS(svgURI, "rect", {
        width: 0,
        height: 0,
        fill: "#28A745",
        x: 0,
        ref: createRef<SVGRectElement>(),
    }),
)

createElementNS(svgURI, "svg", {
    width: 0,
    // @ts-expect-error
    height: true,
    viewBox: "0 0 0 0",
    ref: createRef<SVGSVGElement>(),
})

createElementNS(null, "svg", {
    width: 0,
    height: true,
    viewBox: "0 0 0 0",
    ref: createRef<Element>(),
})

createElementNS("other", "svg", {
    width: 0,
    height: true,
    viewBox: "0 0 0 0",
    // So this is very clearly undesirable behaviour, but it is what it is.
    // There's only so much you can really do after all.
    ref: createRef<HTMLDivElement>(),
})

createElementNS(
    svgURI,
    "svg",
    {
        width: 0,
        height: 0,
        viewBox: "0 0 0 0",
    },
    createElementNS(svgURI, "rect", {
        width: 0,
        height: 0,
        fill: "#28A745",
        x: 0,
        // @ts-expect-error
        ref: createRef<SVGElement>(),
    }),
)
