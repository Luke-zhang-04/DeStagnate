/* eslint-disable multiline-comment-style, no-undef, no-magic-numbers */
/* Already declared
const DS = DeStagnate,
    {createElement} = DS
*/

class PropsDemo extends DS.default {

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
