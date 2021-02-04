import * as DeStagnate from "../../lib" // Import library from root

class Counter extends DeStagnate.Component {

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
