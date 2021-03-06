import createElement from "../../lib/createElementOnly"

/** DeStagnate (Without JSX) */
;((): void => {
    document.getElementById("compare")?.children[0]?.appendChild(
        // Structured like your component/element
        createElement(
            "div",
            {class: "container bg-light text-dark py-1 br-1 my-1"},
            createElement("p", {class: "m-0 p-0"}, "Hello World!"),
        ),
    )
})()

/** Vanilla DOM */
;((): void => {
    // Lack of structure

    const helloWorldContainer = document.createElement("div"),
        helloWorld = document.createElement("p")

    helloWorldContainer.setAttribute("class", "container bg-light text-dark py-1 br-1 my-1")
    helloWorld.setAttribute("class", "m-0 p-0")
    helloWorld.appendChild(document.createTextNode("Hello World!"))

    helloWorldContainer.appendChild(helloWorld)

    document.getElementById("compare")?.children[1]?.appendChild(helloWorldContainer)
})()
