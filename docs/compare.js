/**
 * DeStagnate
 */

(() => {
    const {createElement} = DeStagnate

    document.getElementById("compare").children[0].appendChild(
        createElement("div", {class: "container bg-light text-dark py-1 br-1 my-1"},
            createElement("p", {class: "m-0 p-0"}, "Hello World!")
        )
    )
})();

/**
 * Vanilla DOM
 */
(() => {
    const helloWorldContainer = document.createElement("div"),
        helloWorld = document.createElement("p")

    helloWorldContainer.classList.add("container")
    helloWorldContainer.classList.add("bg-light")
    helloWorldContainer.classList.add("text-dark")
    helloWorldContainer.classList.add("py-1")
    helloWorldContainer.classList.add("my-1")
    helloWorldContainer.classList.add("br-1")
    helloWorld.classList.add("m-0")
    helloWorld.classList.add("p-0")
    helloWorld.innerText = "Hello World!"

    helloWorldContainer.appendChild(helloWorld)

    document.getElementById("compare").children[1].appendChild(helloWorldContainer)
})()
