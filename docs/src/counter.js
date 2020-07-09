/* eslint-disable multiline-comment-style, no-undef */
const DS = DeStagnate,
    {createElement} = DS

class Counter extends DS.default {

    constructor (parent) {
        super(parent)

        this.state = {
            count: 0,
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 1000)
    }

    render = () => <div>
        <p>Seconds:</p>
        <p>{this.state.count}</p>
    </div>

}

const counter = new Counter(document.querySelector("#counter"))

counter.mount() // Must call once
