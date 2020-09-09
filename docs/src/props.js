import DeStagnate, {createElement} from "destagnate"

class PropsDemo extends DeStagnate {

    render = () => this.props.colors.map((color) => (
        createElement(
            "button",
            {class: `btn btn-${color}`},
            `${color} button`
        )
    ))

}

const propsDemo = new PropsDemo(
    document.querySelector("#props"),
    {colors: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "light",
        "dark",
    ]}
)

propsDemo.mount() // Must call once
