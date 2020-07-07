/* eslint-disable multiline-comment-style, no-undef */
const DS = DeStagnate,
    createElement = DS.createElement.default

class Counter extends DS.DeStagnate {

    constructor (props) {
        super(props)

        this.state = {
            count: 0,
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

    render = () => createElement("div", {}, [
        createElement("p", {}, "Seconds:"),
        createElement("p", {}, this.state.count)
    ])

}

const counter = new Counter(document.querySelector("#counter"))

counter.mount() // Must call once
