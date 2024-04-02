import DeStagnate, {createElementNS, createRef} from "../../../" // Import library from root

const width = 250
let direction = 2.5
let xCoord = 0

const rectRef = createRef()

const updateXCoord = (newCoord) => {
    xCoord = newCoord

    if (rectRef.current) {
        rectRef.current.setAttribute("x", xCoord.toString())
    }
}

setInterval(() => {
    updateXCoord(xCoord + direction)

    if (xCoord < 0 || xCoord > width) {
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
            x: xCoord,
            ref: rectRef,
        }),
    ),
)

/* SVG Equiv
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#0D6EFD"/>
</svg>
*/
