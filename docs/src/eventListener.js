/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers */
/* Already declared
const DS = DeStagnate,
    {createElement} = DS
*/

class EventListener extends DS.default {

    constructor (parent) {
        super(parent)

        this.state = {
            color: "primary",
        }
    }

    onClick = (event) => {
        const colors = [
            "primary",
            "secondary",
            "success",
            "info",
            "warning",
            "danger",
            "light",
            "dark",
        ].filter((val) => this.state.color !== val)

        this.setState({
            color: colors[Math.floor(Math.random() * colors.length)]
        })
    }

    render = () => createElement("button", {
        class: `btn btn-${this.state.color}`,
        onClick: () => alert("Clicked!")
    }, "Click Me!")

}

const eListener = new EventListener(document.querySelector("#elistener"))

eListener.mount() // Must call once
