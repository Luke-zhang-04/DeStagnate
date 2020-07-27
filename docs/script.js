/* eslint-disable multiline-comment-style, no-undef */
/* Already declared
const DS = DeStagnate,
    {createElement} = DS
*/

class SourceCode extends DS.default {

    constructor (parent, props) {
        super(parent, props)

        this.state = {
            env: "browser"
        }
    }

    render = () => {
        const sources = this.props.source.getElementsByTagName("pre")

        if (this.state.env === "browser") {
            sources[0].classList.remove("d-none")
            sources[1].classList.remove("d-block")
            sources[0].classList.add("d-block")
            sources[1].classList.add("d-none")

            return [
                createElement("button", {
                    class: "btn btn-success",
                    onClick: () => this.setState({env: "node"})
                }, "See Node Env")
            ]
        }

        sources[1].classList.remove("d-none")
        sources[0].classList.remove("d-block")
        sources[1].classList.add("d-block")
        sources[0].classList.add("d-none")

        return [
            createElement("button", {
                class: "btn btn-primary",
                onClick: () => this.setState({env: "browser"})
            }, "See Browser Env")
        ]
    }

}

const stateSource = new SourceCode(
    document.querySelector("#state-btn"),
    {source: document.getElementById("state-source")},
)

stateSource.mount() // Must call once

const propsSource = new SourceCode(
    document.querySelector("#props-btn"),
    {source: document.getElementById("props-source")},
)

propsSource.mount() // Must call once

const elistener = new SourceCode(
    document.querySelector("#elistener-btn"),
    {source: document.getElementById("elistener-source")},
)

elistener.mount() // Must call once

const calc = new SourceCode(
    document.querySelector("#calc-btn"),
    {source: document.getElementById("calc-source")},
)

calc.mount() // Must call once

const svgSrc = new SourceCode(
    document.querySelector("#svg-btn"),
    {source: document.getElementById("svg-source")},
)

svgSrc.mount() // Must call once

const tictactoe = new SourceCode(
    document.querySelector("#nested-btn"),
    {source: document.getElementById("nested-source")},
)

tictactoe.mount() // Must call once
