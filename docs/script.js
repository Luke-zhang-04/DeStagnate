/* eslint-disable */
const DC = DynamComponent,
    createChild = DC.createChild.default

class MyComponent extends DC.DynamComponent {

    constructor (props) {
        super(props)

        this.setState({
            count: 0
        })
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({count: this.getState().count + 1})
        }, 1000)
    }

    render = () => {
        const elem = createChild("div", {}, [
            createChild("p", {}, "Hello World!"),
            createChild("p", {}, this.getState().count)
        ])

        return elem
    }

}

const myComponent = new MyComponent(document.querySelector("#counter"))

myComponent.mount() // Must call once
