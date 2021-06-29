import DeStagnate from "../../../" // Import library from root

const numbers = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3]

type State = {
    number: number
    count: number
}

class StateChange extends DeStagnate.Component<{}, State> {
    public constructor(parent: HTMLElement | null) {
        super(parent)

        this.state = {
            number: 0,
            count: 0,
        }
    }

    public shouldComponentUpdate = (): boolean => {
        const shouldUpdate = this.stateDidChange(["number"]) // Detect changes in the number field only

        console.table({shouldUpdate})

        return shouldUpdate
    }

    public componentDidMount = (): void => {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1,
                number: numbers[(this.state.count + 1) % numbers.length],
            })
        }, 1000)
    }

    public render = (): JSX.Element => (
        <div>
            <p>Number:</p>
            <p>{this.state.number}</p>
        </div>
    )
}

const stateChange = new StateChange(document.querySelector("#state-change"))

stateChange.mount() // Must call once
