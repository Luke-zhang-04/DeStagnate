# DeStagnate

<p align="center">
    <a href="https://github.com/Luke-zhang-04/DeStagnate/blob/master/LICENSE"><img src="https://img.shields.io/github/license/luke-zhang-04/destagnate" alt="License"/></a>
    <a href="https://www.npmjs.com/package/destagnate"><img src="https://img.shields.io/npm/v/destagnate?logo=npm" alt="npm version"/></a>
    <a href="https://www.npmjs.com/package/destagnate"><img src="https://img.shields.io/npm/dt/destagnate"/></a>
    <a href="https://github.com/Luke-zhang-04/DeStagnate/actions?query=workflow%3A%22Node.js+CI%22"><img src="https://img.shields.io/github/actions/workflow/status/Luke-zhang-04/DeStagnate/CI.yml?branch=master&label=Tests&logo=github" alt="tests"/></a>
</p>

A lightweight (800 gziped bytes) wrapper around vanilla DOM methods for declarative DOM creation.

## Why not just use React?

This isn't meant to be React. React has virtual DOM, hooks, and a huge ecosystem surrounding it. React 19 is supposed to have a compiler too. This is just a wrapper for when you need to create some DOM declaratively, and don't need all of React. I suppose you could use Preact, but even that involves some VDOM stuff.

## Documentation

Documentation can be found at [https://luke-zhang-04.github.io/DeStagnate/docs/](https://luke-zhang-04.github.io/DeStagnate/docs/) for the latest version

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
# Prodution
curl -L https://unpkg.com/destagnate@<VERSION_NAME>/dist/<FORMAT>/deStagnate.min.js > deStagnate.js
wget https://unpkg.com/destagnate@<VERSION_NAME>/dist/<FORMAT>/deStagnate.min.js

# Development
curl -L https://unpkg.com/destagnate@<VERSION_NAME>/dist/<FORMAT>/deStagnate.js > deStagnate.min.js
wget https://unpkg.com/destagnate@<VERSION_NAME>/dist/<FORMAT>/deStagnate.js

# Latest IIFE bundle
curl -L https://unpkg.com/destagnate@3.0.0/dist/iife/deStagnate.min.js > deStagnate.min.js
wget https://unpkg.com/destagnate@3.0.0/dist/iife/deStagnate.min.js
```

With a CDN

```html
<!-- Production -->
<script src="https://unpkg.com/destagnate@version/dist/iife/deStagnate.min.js"></script>

<!-- Development -->
<script src="https://unpkg.com/destagnate@version/dist/iife/deStagnate.js"></script>

<!-- Latest -->
<script src="https://unpkg.com/destagnate@3.0.0/dist/iife/deStagnate.min.js"></script>
```

## Kitchen Sink Example

See [https://luke-zhang-04.github.io/DeStagnate/docs](https://luke-zhang-04.github.io/DeStagnate/docs) for example code and documentation.

```tsx
const divRef = DeStagnate.createRef<HTMLDivElement>()

document.getElementById("my-container")?.appendChild(
    // `createElement` can be abbreviated to `ce`
    DeStagnate.createElement(
        DeStagnate.Fragment,
        null,
        DeStagnate.createElement(
            "div",
            {
                class: "my-class",
                ref: divRef,
                onMyCustomEvent: (event: Event) => console.log(event),
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
            },
            "Click me!",
        ),
    ),
)

// Alternatively, you can use JSX. You will need a tranpiler, though.
document.getElementById("my-container")?.appendChild(
    <>
        <div class="my-class" ref={divRef} onMyCustomEvent={(event: Event) => console.log(event)}>
            <p>
                My paragraph
                <i> italic</i>
            </p>
        </div>
        <button
            onClick={(event) =>
                divRef.current?.dispatchEvent(new CustomEvent("mycustomevent", {detail: event}))
            }
        >
            Click me!
        </button>
    </>,
)

// Using vanilla DOM methods:
const container = document.getElementById("my-container")
const div = document.createElement("div")

div.classList.add("my-class")
div.addEventListener("mycustomevent", (event) => console.log(event))

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

container?.appendChild(button)
```

## Alternatives

-   What about [HTL](https://www.npmjs.com/package/htl)?
    -   HTL is cool, but it involves an HTML parser, which comes with its drawbacks. One upside though, you don't need to transpile to create DOM using XML-like syntax.
-   What about [HTM](https://www.npmjs.com/package/htm)?
    -   HTM generates virtual DOM and doesn't directly create DOM nodes.
-   Why not just `innerHTML`?
    -   You're missing dev tool support, it's a big security risk, and you'll have to deal with character escaping. Not fun. Mike Bostock goes over why `innerHTML` is bad in the [HTL README](https://www.npmjs.com/package/htl).

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
