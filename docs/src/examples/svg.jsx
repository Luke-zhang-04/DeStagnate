import * as DeStagnate from "../../.."
import {StateContainer, bindProps, createElementNS} from "../../.."

const width = 250
let direction = 2.5

class XCoordState extends StateContainer {
    constructor() {
        super(0)
    }

    updateDOM(rectRef) {
        bindProps(
            rectRef.current,
            {
                x: this.value.toString(),
                fill: direction > 0 ? "#0D6EFD" : "#28A745",
            },
            true,
        )
    }
}

const xCoordState1 = new XCoordState()

setInterval(() => {
    xCoordState1.value += direction

    if (xCoordState1.value < 0 || xCoordState1.value > width) {
        direction *= -1
    }
}, 10)

document.querySelector("#svg-1")?.appendChild(
    <svg:svg width={width * 2} height={width} viewBox={`0 0 ${width * 2} ${width}`} fill="none">
        <svg:rect
            width={width}
            height={width}
            fill={direction > 0 ? "#0D6EFD" : "#28A745"}
            x={xCoordState1.value}
            ref={xCoordState1.ref}
        />
    </svg:svg>,
)

const svgURI = "http://www.w3.org/2000/svg"

const xCoordState2 = new XCoordState()

setInterval(() => {
    xCoordState2.value += direction

    if (xCoordState2.value < 0 || xCoordState2.value > width) {
        direction *= -1
    }
}, 10)

document.querySelector("#svg-2")?.appendChild(
    createElementNS(
        svgURI,
        "svg",
        {
            width: width * 2,
            height: width,
            viewBox: `0 0 ${width * 2} ${width}`,
        },
        createElementNS(svgURI, "rect", {
            width: width,
            height: width,
            fill: direction > 0 ? "#0D6EFD" : "#28A745",
            x: xCoordState2.value,
            ref: xCoordState2.ref,
        }),
    ),
)
