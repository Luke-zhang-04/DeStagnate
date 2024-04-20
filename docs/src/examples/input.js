import {createElement, StateContainer} from "../../.."
import htm from "htm"

const html = htm.bind(createElement)

class InputState extends StateContainer {
    constructor(value = {disabled: true}) {
        super(value)
    }

    updateDOM(ref) {
        ref.current.disabled = this.value.disabled
        ref.current.placeholder = this.value.disabled ? "Disabled" : "My Input"
    }
}

const inputState = new InputState()

class DisplayState extends StateContainer {
    constructor(value = "") {
        super(value)
    }

    updateDOM(ref) {
        ref.current.innerText = this.value
    }
}

const displayState = new DisplayState()

document.getElementById("input")?.appendChild(
    html`<div>
        <div class="form-group">
            <input
                disabled
                type="text"
                ref=${inputState.ref}
                placeholder="Disabled"
                onInput=${(event) => displayState.update(event.target.value)}
                class="w-100 form-control"
            />
        </div>
        <button
            class="btn btn-primary"
            onClick=${() => inputState.update({disabled: !inputState.value.disabled})}
        >
            Toggle input
        </button>
        <div class="w-100 p-2 bg-tertiary">
            Value:
            <div ref=${displayState.ref} />
        </div>
    </div>`,
)
