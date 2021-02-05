import DeStagnate, {createElementNS} from "../../../" // Import library from root

class SVG extends DeStagnate {

    constructor (parent, props) {
        super(parent, props)

        this.state = {
            xcord: 0,
        }
    }

    direction = 2.5

    componentDidMount = () => this.componentDidUpdate()

    componentDidUpdate = () => {
        if (this.state.xcord < 0 || this.state.xcord > this.props.width) {
            this.direction *= -1
        }

        setTimeout(
            () => this.setState({xcord: this.state.xcord + this.direction}),
            10,
        )
    }

    render = () => createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
        {
            width: this.props.width * 2,
            height: this.props.width,
            viewBox: `0 0 ${this.props.width * 2} ${this.props.width}`,
        },
        createElementNS(
            "http://www.w3.org/2000/svg",
            "rect",
            {
                width: this.props.width,
                height: this.props.width,
                fill: this.direction > 0 ? "#0D6EFD" : "#28A745", /* eslint-disable id-length */
                x: this.state.xcord, /* eslint-enable id-length */
            },
        ),
    )

}

const svg = new SVG(document.querySelector("#SVG"), {width: 250})

svg.mount() // Must call once

/* SVG Equiv
<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#0D6EFD"/>
</svg>
*/
