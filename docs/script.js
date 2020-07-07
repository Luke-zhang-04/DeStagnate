/* eslint-disable */
const DC = DynamComponent,
    createChild = DC.createChild.default

class Counter extends DC.DynamComponent {

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

    render = () => createChild("div", {}, [
            createChild("p", {}, "Seconds:"),
            createChild("p", {}, this.state.count)
        ])

}

const counter = new Counter(document.querySelector("#counter"))

counter.mount() // Must call once
