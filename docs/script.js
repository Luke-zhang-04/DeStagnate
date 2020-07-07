/* eslint-disable */
const DC = DynamComponent,
    createChild = DC.createChild.default

class MyComponent extends DC.DynamComponent {

    render = () => {
        const elem = createChild("div", {}, [
            createChild("div", {}, [
                createChild("p", {}, "Hello World!"),
                createChild("button", {href: "/", class: "btn btn-blue"}, "Click Me!")
            ]),
        ])

        return elem
    }

}

const myComponent = new MyComponent(document.querySelector("body"))

myComponent.initRender() // Must call once
