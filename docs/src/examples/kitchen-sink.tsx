import * as DeStagnate from "../../.."

const width = 250

// Class which contains reference to some SVG rectangle and a value that is stateful
class RectState extends DeStagnate.StateContainer<number, SVGRectElement | null> {
    constructor() {
        super(0)
    }

    // Define what an update should do
    updateDOM(rectRef: DeStagnate.Ref<SVGRectElement>) {
        // Use the bindProps helper function to update the x value of the rectangle and change its colour
        DeStagnate.bindProps(
            rectRef.current,
            {
                x: this.value.toString(),
                fill: this.value % 2 === 0 ? "#0D6EFD" : "#28A745",
            },
            true,
        )
    }
}
const paragraphContent = '"My paragraph" <i>Escaped</i> <script>alert("xss")</script>'

createElement: {
    const rectState = new RectState()
    const divRef = DeStagnate.createRef<HTMLDivElement>()

    const ReactiveRect: DeStagnate.FC<{state: RectState}> = ({state}) =>
        DeStagnate.createElement(
            "svg:svg",
            {
                width: width * 2,
                height: width,
                viewBox: `0 0 ${width * 2} ${width}`,
                fill: "none",
            },
            DeStagnate.createElement("svg:rect", {
                width,
                height: width,
                fill: state.value % 2 === 0 ? "#0D6EFD" : "#28A745",
                x: state.value,
                ref: state.ref,
            }),
        )

    document.getElementById("my-container-1")?.appendChild(
        // `createElement` can be abbreviated to `ce`
        DeStagnate.createElement(
            DeStagnate.Fragment,
            null,
            DeStagnate.createElement(
                "div",
                {
                    class: "my-class",
                    ref: divRef,
                    onMyCustomEvent: (event: Event) => {
                        console.log(event)
                        rectState.update(rectState.value + 25)
                    },
                    style: {
                        borderStyle: "solid",
                        borderColor: "black",
                        borderWidth: "1px",
                        paddingTop: "1rem",
                    },
                },
                DeStagnate.createElement(
                    "p",
                    null,
                    paragraphContent,
                    DeStagnate.createElement("i", null, " italic"),
                ),
            ),
            DeStagnate.createElement(
                "button",
                {
                    onClick: (event) =>
                        divRef.current?.dispatchEvent(
                            new CustomEvent("mycustomevent", {detail: event}),
                        ),
                    class: "btn btn-secondary mr-3",
                },
                "Click me!",
            ),
            DeStagnate.createElement(ReactiveRect, {state: rectState}),
        ),
    )
}

// Alternatively, you can use JSX. You will need a transpiler, though.
jsx: {
    const rectState = new RectState()
    const divRef = DeStagnate.createRef<HTMLDivElement>()

    const ReactiveRect: DeStagnate.FC<{state: RectState}> = ({state}) => (
        <svg:svg
            width={width * 2}
            height={width}
            viewBox={`0 0 ${width * 2} ${width}`}
            fill="none"
        >
            <svg:rect
                width={width}
                height={width}
                fill={state.value % 2 === 0 ? "#0D6EFD" : "#28A745"}
                x={state.value}
                ref={state.ref}
            />
        </svg:svg>
    )

    document.getElementById("my-container-2")?.appendChild(
        <>
            <div
                class="my-class"
                ref={divRef}
                onMyCustomEvent={(event: Event) => {
                    console.log(event)
                    rectState.update(rectState.value + 25)
                }}
                style={{
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "1px",
                    paddingTop: "1rem",
                }}
            >
                <p>
                    {paragraphContent}
                    <i> italic</i>
                </p>
            </div>
            <button
                onClick={(event) =>
                    divRef.current?.dispatchEvent(
                        new CustomEvent("mycustomevent", {detail: event}),
                    )
                }
                class="btn btn-secondary mr-3"
            >
                Click me!
            </button>
            <ReactiveRect state={rectState} />
        </>,
    )
}

// Using the HTM library on top:
import htm from "htm"

htm: {
    const html = htm.bind(DeStagnate.createElement)

    const rectState = new RectState()
    const divRef = DeStagnate.createRef<HTMLDivElement>()

    const ReactiveRect: DeStagnate.FC<{state: RectState}> = ({state}) =>
        html`<svg:svg
            width=${width * 2}
            height=${width}
            viewBox="0 0 ${width * 2} ${width}"
            fill="none"
        >
            <svg:rect
                width=${width}
                height=${width}
                fill=${state.value % 2 === 0 ? "#0D6EFD" : "#28A745"}
                x=${state.value}
                ref=${state.ref}
            />
        </svg:svg>` as Element

    document.getElementById("my-container-3")?.appendChild(
        html`<${DeStagnate.Fragment}>
            <div
                class="my-class"
                ref=${divRef}
                onMyCustomEvent=${(event: Event) => {
                    console.log(event)
                    rectState.update(rectState.value + 25)
                }}
                style=${{
                    borderStyle: "solid",
                    borderColor: "black",
                    borderWidth: "1px",
                    paddingTop: "1rem",
                }}
            >
                <p>
                    ${paragraphContent}
                    <i> italic</i>
                </p>
            </div>
            <button
                onClick=${(event: MouseEvent) =>
                    divRef.current?.dispatchEvent(
                        new CustomEvent("mycustomevent", {detail: event}),
                    )}
                class="btn btn-secondary mr-3"
            >
                Click me!
            </button>
            <${ReactiveRect} state=${rectState} />
        <//>` as Element,
    )
}

// Using vanilla DOM methods:
vanillaDOM: {
    const svgURI = "http://www.w3.org/2000/svg"
    let rectStateValue = 0

    const container = document.getElementById("my-container-4")
    const svg = document.createElementNS(svgURI, "svg")

    svg.setAttributeNS(null, "width", (width * 2).toString())
    svg.setAttributeNS(null, "height", width.toString())
    svg.setAttributeNS(null, "viewBox", `0 0 ${width * 2} ${width}`)
    svg.setAttributeNS(null, "fill", "none")

    const rect = document.createElementNS(svgURI, "rect")

    rect.setAttributeNS(null, "width", width.toString())
    rect.setAttributeNS(null, "height", width.toString())
    rect.setAttributeNS(null, "fill", rectStateValue % 2 === 0 ? "#0D6EFD" : "#28A745")
    rect.setAttributeNS(null, "x", rectStateValue.toString())
    svg.appendChild(rect)

    const div = document.createElement("div")

    div.classList.add("my-class")
    div.addEventListener("mycustomevent", (event) => {
        console.log(event)
        rectStateValue += 25
        rect.setAttributeNS(null, "fill", rectStateValue % 2 === 0 ? "#0D6EFD" : "#28A745")
        rect.setAttributeNS(null, "x", rectStateValue.toString())
    })
    div.style.borderStyle = "solid"
    div.style.borderColor = "black"
    div.style.borderWidth = "1px"
    div.style.paddingTop = "1rem"

    const paragraph = document.createElement("p")

    paragraph.appendChild(document.createTextNode(paragraphContent))

    const italic = document.createElement("i")

    italic.innerText = " italic"

    paragraph.appendChild(italic)
    div.appendChild(paragraph)
    container?.appendChild(div)

    const button = document.createElement("button")

    button.addEventListener("click", (event) =>
        div.dispatchEvent(new CustomEvent("mycustomevent", {detail: event})),
    )
    button.innerText = "Click me!"
    button.className = "btn btn-secondary mr-3"

    container?.appendChild(button)
    container?.appendChild(svg)
}
