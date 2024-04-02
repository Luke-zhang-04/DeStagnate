import DeStagnate, {StateContainer, createElementNS, createRef} from "../../../"

const width = 250
let direction = 2.5

class XCoordState extends StateContainer {
    constructor() {
        super(0)
    }

    updateDOM(rectRef) {
        rectRef.current.setAttribute("x", this.value.toString())
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
        "http://www.w3.org/2000/svg",
        "svg",
        {
            width: width * 2,
            height: width,
            viewBox: `0 0 ${width * 2} ${width}`,
        },
        createElementNS("http://www.w3.org/2000/svg", "rect", {
            width: width,
            height: width,
            fill: direction > 0 ? "#0D6EFD" : "#28A745",
            x: xCoordState.value,
            ref: xCoordState.ref,
        }),
    ),
)

/* SVG Equiv
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#0D6EFD"/>
</svg>
*/
