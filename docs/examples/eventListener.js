/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers */
/* Already declared
const DS = DeStagnate,
    createElement = DS.createElement.default
*/

class EventListener extends DS.DeStagnate {

    render = () => createElement("button", {
        class: "btn btn-primary",
        onClick: () => alert("Clicked!")
    }, "Click Me!")

}

const eListener = new EventListener(document.querySelector("#elistener"))

eListener.mount() // Must call once
