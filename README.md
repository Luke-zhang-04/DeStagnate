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
curl -L https://unpkg.com/destagnate@3.1.0/dist/iife/deStagnate.min.js > deStagnate.min.js
wget https://unpkg.com/destagnate@3.1.0/dist/iife/deStagnate.min.js
```

With a CDN

```html
<!-- Production -->
<script src="https://unpkg.com/destagnate@version/dist/iife/deStagnate.min.js"></script>

<!-- Development -->
<script src="https://unpkg.com/destagnate@version/dist/iife/deStagnate.js"></script>

<!-- Latest -->
<script src="https://unpkg.com/destagnate@3.1.0/dist/iife/deStagnate.min.js"></script>
```

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

// Alternatively, you can use JSX. You will need a tranpiler, though.
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

I ran these on my M1 Air. Your mileage may vary depending on machine, processes running, and browser version. These are just good ballpark estimates. Higher ops/sec = better.

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
