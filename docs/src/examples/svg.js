import {StateContainer, bindProps, createElementNS} from "../../.."

const svgURI = "http://www.w3.org/2000/svg"

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

const xCoordState = new XCoordState()

setInterval(() => {
    xCoordState.value += direction

    if (xCoordState.value < 0 || xCoordState.value > width) {
        direction *= -1
    }
}, 10)

document.querySelector("#SVG")?.appendChild(
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
            x: xCoordState.value,
            ref: xCoordState.ref,
        }),
    ),
)

/* SVG Equiv
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns=svgURI>
    <rect width="200" height="200" fill="#0D6EFD"/>
</svg>
*/
