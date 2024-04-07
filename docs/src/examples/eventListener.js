import {createElement, createRef} from "../../.."

const colors = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"]

// State management without StateContainer: it's really the same idea, just without the extra class
// to put it in a neat box
let currentColor = colors[0]
const buttonRef = createRef()

const updateColor = (index = Math.floor(Math.random() * colors.length)) => {
    currentColor = colors[index]

    if (buttonRef.current) {
        buttonRef.current.className = `btn btn-${currentColor}`
    }
}

document.querySelector("#elistener")?.appendChild(
    createElement(
        "button",
        {
            class: `btn btn-${currentColor}`,
            ref: buttonRef,
            onClick: () => updateColor(),
        },
        "Click me!",
    ),
)
