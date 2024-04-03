import * as DeStagnate from "../../../"

const colors = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"]

// State management without StateContainer: it's really the same idea, just without the extra class
// to put it in a neat box
let currentColor = colors[0]
const buttonRef = DeStagnate.createRef()

const updateColor = (index = Math.floor(Math.random() * colors.length)) => {
    currentColor = colors[index]

    if (buttonRef.current) {
        buttonRef.current.className = `btn btn-${currentColor}`
    }
}

document.querySelector("#elistener")?.appendChild(
    <button class={`btn btn-${currentColor}`} ref={buttonRef} onClick={() => updateColor()}>
        Click Me!
    </button>,
)
