import DeStagnate, {createElement} from "../../../" // Import library from root

class EventListener extends DeStagnate.Component {
    constructor(parent) {
        super(parent)

        this.state = {
            color: "primary",
        }
    }

    onClick = () => {
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
            color: colors[Math.floor(Math.random() * colors.length)],
        })
    }

    render = () =>
        createElement(
            "button",
            {
                class: `btn btn-${this.state.color}`,
                onClick: () => alert("Clicked!"),
            },
            "Click Me!",
        )
}

const eListener = new EventListener(document.querySelector("#elistener"))

eListener.mount() // Must call once

class ScrollListener extends DeStagnate.Component {
    constructor(parent) {
        super(parent)

        this.state = {
            scrollPosition: window.scrollY,
        }
    }

    onScroll = () => this.setState({scrollPosition: window.scrollY})

    render = () => createElement("p", null, "Scroll position: ", this.state.scrollPosition)
}

const scrollListener = new ScrollListener(document.querySelector("#elistener2"))

scrollListener.mount()
