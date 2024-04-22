# DeStagnate

<p align="center">
    <a href="https://github.com/Luke-zhang-04/DeStagnate/blob/master/LICENSE"><img src="https://img.shields.io/github/license/luke-zhang-04/destagnate?style=flat-square" alt="License"/></a>
    <a href="https://www.npmjs.com/package/destagnate"><img src="https://img.shields.io/npm/v/destagnate?logo=npm&style=flat-square" alt="npm version"/></a>
    <a href="https://github.com/Luke-zhang-04/DeStagnate/actions?query=workflow%3A%22Node.js+CI%22"><img src="https://img.shields.io/github/actions/workflow/status/Luke-zhang-04/DeStagnate/CI.yml?branch=master&label=Tests&logo=github&style=flat-square" alt="tests"/></a>
    <a href="https://bundlephobia.com/package/destagnate"><img src="https://img.shields.io/bundlephobia/minzip/destagnate?logo=files&style=flat-square&color=38bdf1&logoColor=4ccafb" alt="bundle size"/></a>
</p>

A lightweight (~ 1 KB gzipped) wrapper around vanilla DOM methods for declarative DOM creation.

## Why not just use React?

This isn't meant to be React. React has virtual DOM, hooks, and a huge ecosystem surrounding it. React 19 is supposed to have a compiler too. This is just a wrapper for when you need to create some DOM declaratively, and don't need all of React. I suppose you could use Preact, but even that involves some VDOM stuff.

## Why did you name it that?

I was in like 10th grade, I don't know what I was thinking. It's supposed to mean taking a static page (stagnant) and adding an interactive/dynamic piece to it (de-stagnate), but it's a stupid name.

> Had I actually considered this to be a career, I probably would have called it something else, because it's the stupidest f\*\*\*ing band name in the world.
>
> \- Dave Grohl

## Documentation

Documentation can be found at [https://luke-zhang-04.github.io/DeStagnate/](https://luke-zhang-04.github.io/DeStagnate/) for the latest version

## Installation

Through NPM

```bash
# NPM
npm i destagnate --save

# Yarn
yarn add destagnate

# PNPM
pnpm i destagnate
```

Through `curl` or `wget` to download a bundle for browser usage<br/>

```bash
# Production
curl -L https://unpkg.com/destagnate@<VERSION_NAME>/dist/<FORMAT>/deStagnate.min.js > deStagnate.js
wget https://unpkg.com/destagnate@<VERSION_NAME>/dist/<FORMAT>/deStagnate.min.js

# Development
curl -L https://unpkg.com/destagnate@<VERSION_NAME>/dist/<FORMAT>/deStagnate.js > deStagnate.min.js
wget https://unpkg.com/destagnate@<VERSION_NAME>/dist/<FORMAT>/deStagnate.js

# Latest IIFE bundle
curl -L https://unpkg.com/destagnate@3.2.0/dist/iife/deStagnate.min.js > deStagnate.min.js
wget https://unpkg.com/destagnate@3.2.0/dist/iife/deStagnate.min.js
```

With a CDN

```html
<!-- Production -->
<script src="https://unpkg.com/destagnate@version/dist/iife/deStagnate.min.js"></script>

<!-- Development -->
<script src="https://unpkg.com/destagnate@version/dist/iife/deStagnate.js"></script>

<!-- Latest -->
<script src="https://unpkg.com/destagnate@3.2.0/dist/iife/deStagnate.min.js"></script>
```

## Features

You can create DOM elements, their properties, and their children declaratively using JSX, the `createElement` API, or HTM.

```tsx
;<p>Hello world!</p> // Creates a paragraph element

createElement("p", null, "Hello world!") // Same

html`<p>Hello world!</p>` // Also works
```

DeStagnate can handle multiple children, and nested children are recursively handled "depth-first".

```tsx
;<div>
    <p>This is a </p>
    <i>paragraph</i>
    {[
        <ul>
            {[1, 2, 3].map((num) => (
                <li>{num}</li>
            ))}
        </ul>,
    ]}
</div>

createElement(
    "div",
    null,
    createElement("p", null, "This is a "),
    createElement("i", null, "paragraph"),
    [
        createElement(
            "ul",
            null,
            [1, 2, 3].map((num) => createElement("li", null, num)),
        ),
    ],
)

html`<div>
    <p>This is a</p>
    <i>paragraph</i>
    ${[
        html`<ul>
            ${[1, 2, 3].map((num) => html`<li>${num}</li>`)}
        </ul>`,
    ]}
</div>`
```

### Fragments

You can place multiple children in a document fragment, which can be useful for treating multiple elements as one.

```tsx
myElement.appendChild(
    <>
        <div>Hello</div>
        <div>World</div>
    </>,
)

myElement.appendChild(
    createElement(
        DeStagnate.Fragment,
        null,
        createElement("div", null, "Hello"),
        createElement("div", null, "World"),
    ),
)

myElement.appendChild(
    html`<${DeStagnate.Fragment}>
        <div>Hello</div>
        <div>World</div>
    <//>`,
)
```

### Automatic Escaping

The biggest risk of using `innerHTML` is XSS attacks and script injections. But it's also just bad when you try to display data with special characters in it.

```tsx
const myData = '<script>alert("xss")</script> <a>Malicious link</a>'

;<div>{myData}</div> // Will display as `<script>alert("xss")</script> <a>Malicious link</a>`

createElement("div", null, myData) // Same

html`<div>${myData}</div>` // Also same
```

### Props

Define element attributes like you would with React. Note that `class` is used instead of `className`.

```tsx
;<input class="my-class" disabled data-custom-prop="value" />

createElement("input", {class: "my-class", disabled: true, "data-custom-prop": "value"})

html`<input class="my-class" disabled data-custom-prop="value" />`
```

#### Styles

DeStagnate supports string and object styles. For objects, it uses the native `style` property under the hood, except that `null` is changed to an empty string and `undefined` is ignored. This also means styles are safely escaped.

```tsx
const myBadColor: "red; display: none"
;<div
    style={{
        padding: "1rem",
        color: myBadColor, // Will not apply
        margin: "1px;", // Will also not apply (extra semicolon)
        background: "blue",
    }}
/>

createElement("div", {
    style: {
        padding: "1rem",
        color: myBadColor, // Will not apply
        margin: "1px;", // Will also not apply (extra semicolon)
        background: "blue",
    },
})

html`<div
    style=${{
        padding: "1rem",
        color: myBadColor, // Will not apply
        margin: "1px;", // Will also not apply (extra semicolon)
        background: "blue",
    }}
/>`

// Will also work, but display will be none, and margin applied.
;<div style={`padding: 1rem; color: ${myBadColor}; margin: 1px;; background: blue;`} />
```

#### Event Listeners

Any prop whose value is a function and name starts with "on" will be added as an event listener. The name of the event will be forced to lowercase, even for custom events. Adding event listeners this way is more obvious and follows locality-of-behaviour.

```tsx
;<input onInput={console.log} onCustomEvent={console.log} /> // Adds event listeners for "input" and "customevent"
createElement("input", {onInput: console.log, onCustomEvent: console.log})
html`<input onInput=${console.log} onCustomEvent=${console.log} />`
```

#### References

Like React, DeStagnate supports refs. Refs allow you to edit an element after it has been created.

```tsx
const ref = DeStagnate.createRef()

;<input ref={ref} />

createElement("input", {ref})

html`<input ref=${ref} />`

// Update the value of the referenced DOM element
ref.current.value = "Form value"
```

### Function "Components"

Since DeStagnate doesn't have hooks or anything, function components end up being equivalent to just calling the function directly. Nevertheless supporting them was necessary for fragments, so their support was generalized.

```tsx
interface MyProps {
    title: string
}

const MyComponent: DeStagnate.FC<MyProps> = ({title}, ...children) => (
    <p title={title}>{children}</p>
)

;<MyComponent title="My Title">Hello world!</MyComponent>

createElement(MyComponent, {class: "My Title"}, "Hello world!")

html`<${MyComponent} title="My Title">Hello world!<//>`

// The return type and children of the function can also be specified
const MyComponent2: DeStagnate.FC<MyProps, [string, number], HTMLParagraphElement> = (
    {title},
    [str, num],
) =>
    (
        <p title={title}>
            {str} {num}
        </p>
    ) as HTMLParagraphElement // JSX return type cannot be specified, so it's just `Node`

;<MyComponent2 title="My Title">Hello world!{100}</MyComponent2>

// Typescript does not check if the JSX children type is valid, so these next two don't have to follow the rules
createElement(MyComponent2, {class: "My Title"}, "Hello world!", 100)

html`<${MyComponent2} title="My Title">Hello world! ${100}<//>`
```

### Namespaced Elements

DeStagnate can create namespaced elements. If a namespace one of the [default namespaces](https://www.w3.org/TR/2011/WD-html5-20110405/namespaces.html), you can create elements from those namespaces with the `namespace:tagName` syntax. Otherwise, use `createElementNS`.

```js
/**
 * Default HTML namespaces
 *
 * @see {@link https://www.w3.org/TR/2011/WD-html5-20110405/namespaces.html}
 */
export const namespaces = Object.freeze({
    xml: "http://www.w3.org/XML/1998/namespace",
    mathML: "http://www.w3.org/1998/Math/MathML",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    svg: "http://www.w3.org/2000/svg",
    xmlns: "http://www.w3.org/2000/xmlns/",
})
```

```tsx
;<svg:svg width={100} height={100} viewBox="0 0 100 100" fill="none">
    <svg:rect width={100} height={100} fill="#0D6EFD" x={0} />
</svg:svg>

createElement(
    "svg:svg",
    {width: 100, height: 100, viewBox: "0 0 100 100", fill: "none"},
    createElement("svg:rect", {width: 100, height: 100, fill: "#0D6EFD", x: 0}),
)

createElementNS(
    "http://www.w3.org/2000/svg",
    "svg",
    {width: 100, height: 100, viewBox: "0 0 100 100", fill: "none"},
    createElementNS("http://www.w3.org/2000/svg", "rect", {
        width: 100,
        height: 100,
        fill: "#0D6EFD",
        x: 0,
    }),
)

html`<svg:svg width=${100} height=${100} viewBox="0 0 100 100" fill="none">
    <svg:rect width=${100} height=${100} fill="#0D6EFD" x=${0} />
</svg:svg>`
```

### Utilities

DeStagnate comes with a few utilities to make DOM manipulation easier. Most of these are also used under the hood by `createElement`. More precise documentation can be found at [https://luke-zhang-04.github.io/DeStagnate/docs](https://luke-zhang-04.github.io/DeStagnate/docs)

-   `setRefs` takes a ref or array of refs, and sets the current value of each ref to the given element.
-   `bindProps` takes an object of props and sets element attributes accordingly. Specific details about what happens to what are in the [docs](https://luke-zhang-04.github.io/DeStagnate/docs/functions/bindProps.html).
-   `bindChildren` takes some child (which could be either a singular, array, or nested array of DOM nodes), and appends them to an element "depth first", in the order they appear. This is useful for iterating over data, and you don't have to worry about spreading or flattening.
-   `clearChildren` removes all children from a DOM node.

## Kitchen Sink Example

See [luke-zhang-04.github.io/DeStagnate/kitchen-sink.html](https://luke-zhang-04.github.io/DeStagnate/kitchen-sink.html) for working demo.

```tsx
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

createElement: {
    const rectState = new RectState()
    const divRef = DeStagnate.createRef<HTMLDivElement>()

    const ReactiveRect: DeStagnate.FC<{state: RectState}> = () =>
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
                fill: rectState.value % 2 === 0 ? "#0D6EFD" : "#28A745",
                x: rectState.value,
                ref: rectState.ref,
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
                    "My paragraph",
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

    const ReactiveRect: DeStagnate.FC<{state: RectState}> = () => (
        <svg:svg
            width={width * 2}
            height={width}
            viewBox={`0 0 ${width * 2} ${width}`}
            fill="none"
        >
            <svg:rect
                width={width}
                height={width}
                fill={rectState.value % 2 === 0 ? "#0D6EFD" : "#28A745"}
                x={rectState.value}
                ref={rectState.ref}
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
                    My paragraph
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

    const ReactiveRect: DeStagnate.FC<{state: RectState}> = () =>
        html`<svg:svg
            width=${width * 2}
            height=${width}
            viewBox="0 0 ${width * 2} ${width}"
            fill="none"
        >
            <svg:rect
                width=${width}
                height=${width}
                fill=${rectState.value % 2 === 0 ? "#0D6EFD" : "#28A745"}
                x=${rectState.value}
                ref=${rectState.ref}
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
                    My paragraph
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

    paragraph.innerText = "My paragraph"

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
```

## Alternatives

-   Why not just `innerHTML`?
    -   You're missing dev tool support, it's a big security risk, and you'll have to deal with character escaping. Not fun. Mike Bostock goes over why `innerHTML` is bad in the [HTL README](https://github.com/observablehq/htl?tab=readme-ov-file#why-not-concatenate).
-   What about [HTL](https://www.npmjs.com/package/htl)?
    -   HTL is cool, but it involves an HTML parser at runtime, which makes it quite slow. You also lose devtool support when working with strings.
    -   Upside: you don't need to transpile to create DOM using XML-like syntax. However you can use HTM (see [#using-htm](#using-htm)) with DeStagnate and it will be faster.
-   What about [VHTML](https://github.com/developit/vhtml)?
    -   VHTML generates strings which you can safely add to the DOM with `innerHTML`. Unfortunately this has the drawback of not supporting refs or event listeners, which is extremely limiting.

## Using HTM

Since [HTM](https://www.npmjs.com/package/htm) is meant to be a drop-in replacement wherever JSX is used, DeStagnate is compatible with `HTM`. See [using-jsx](https://luke-zhang-04.github.io/DeStagnate/using-jsx.html#using-htm).

## Using JSX

If you're using JSX, you'll need a transpiler. Either TypeScript, or a Babel with a Plugin will work.

### Typescript

You can compile with this `tsconfig.json`

```json
{
    "compilerOptions": {
        "jsx": "react",
        "jsxFactory": "DeStagnate.createElement",
        "jsxFragmentFactory": "DeStagnate.Fragment"
    }
}
```

You can also compile with this `.babelrc.json`

```json
{
    "plugins": [
        [
            "@babel/plugin-transform-react-jsx",
            {
                "pragma": "DeStagnate.createElement",
                "pragmaFrag": "DeStagnate.Fragment"
            }
        ]
    ]
}
```

## Benchmarks

I ran these on my M1 Air. Your mileage may vary depending on machine, processes running, browser version, and just how your computer feels on that day. These are just good ballpark estimates. Higher ops/sec = better.

You can run the same benchmarks at [luke-zhang-04.github.io/DeStagnate/bench.html](https://luke-zhang-04.github.io/DeStagnate/bench.html). The benchmark is to create a 50-row table.

Firefox:

```
innerHTML x 13,569 ops/sec ±0.83% (68 runs sampled)
Vanilla DOM x 10,731 ops/sec ±4.12% (57 runs sampled)
DeStagnate x 6,678 ops/sec ±4.46% (38 runs sampled)
DeStagnate + HTM x 5,368 ops/sec ±3.19% (32 runs sampled)
HTL x 2,306 ops/sec ±4.50% (55 runs sampled)
```

Chrome:

```
innerHTML x 5,362 ops/sec ±3.80% (59 runs sampled)
Vanilla DOM x 8,422 ops/sec ±3.82% (46 runs sampled)
DeStagnate x 6,465 ops/sec ±1.82% (37 runs sampled)
DeStagnate + HTM x 5,885 ops/sec ±0.63% (34 runs sampled)
HTL x 1,658 ops/sec ±2.25% (61 runs sampled)
```

Safari:

```
innerHTML x 8,242 ops/sec ±0.99% (46 runs sampled)
Vanilla DOM x 13,244 ops/sec ±1.97% (57 runs sampled)
DeStagnate x 5,140 ops/sec ±1.34% (60 runs sampled)
DeStagnate + HTM x 3,634 ops/sec ±1.90% (60 runs sampled)
HTL x 1,315 ops/sec ±1.56% (61 runs sampled)
```
