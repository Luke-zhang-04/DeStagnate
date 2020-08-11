<div align="center">
    <img width="50%" src="assets/logo.svg" alt="logo">
</div>

<p align="center">
    <a href="https://github.com/Luke-zhang-04/DeStagnate/blob/master/LICENSE"><img src="https://img.shields.io/github/license/luke-zhang-04/destagnate" alt="License"/></a>
    <a href="https://www.npmjs.com/package/destagnate"><img src="https://img.shields.io/npm/v/destagnate?logo=npm" alt="npm version"/></a>
    <a href="https://github.com/Luke-zhang-04/DeStagnate/blob/master/dist/deStagnate.bundle.min.js"><img src="https://img.shields.io/github/size/luke-zhang-04/DeStagnate/dist/deStagnate.bundle.min.js?label=deStagnate.bundle.min.js" alt="bundle min size"></a>
    <a href="https://www.npmjs.com/package/destagnate"><img src="https://img.shields.io/npm/dt/destagnate"/></a>
    <a href="https://github.com/Luke-zhang-04/DeStagnate/actions?query=workflow%3A%22Node.js+CI%22"><img src="https://img.shields.io/github/workflow/status/Luke-zhang-04/DeStagnate/Node.js%20CI/master?label=Tests&logo=github" alt="tests"/></a>
    <br/>
    <a href="http://app.codacy.com/manual/luke.zhang2004/DeStagnate/dashboard"><img src="https://img.shields.io/codacy/grade/a59860e39a224bc3970e7e050a1be617?logo=codacy" alt="codacy grade"></a>
    <a href="https://codeclimate.com/github/Luke-zhang-04/DeStagnate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a4e072a738b46c76393b/maintainability" alt="maintainability grade"/></a>
    <a href="https://codeclimate.com/github/Luke-zhang-04/DeStagnate/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a4e072a738b46c76393b/test_coverage" alt="coverage"/></a>
</p>

Make creating dynamic components within static sites easier with DeStagnate, a ReactJS inspired library.

[See some examples](https://luke-zhang-04.github.io/DeStagnate/)

## Why not just use React?
React is great for dynamic web applications, but it is not well optimised for static-like sites. With DeStagnate, you can create React-like componnets within the browser environment, or a bundler such as Webpack or Browserify. DeStagnate uses less resources, and was made with use in static sites as it's main purpose.

## Documentation
Documentation can be found at [https://github.com/Luke-zhang-04/DeStagnate/wiki](https://github.com/Luke-zhang-04/DeStagnate/wiki) for the latest version

## Installation
Through NPM
```bash
# NPM
npm i destagnate --save

# Yarn
yarn add destagnate
```

Through curl to download a bundle for browser usage<br/>
<small>Not all versions available through this method. See [https://github.com/luke-zhang-04/destagnate/releases](https://github.com/luke-zhang-04/destagnate/releases) for available releases</small>

```bash
# Prodution
curl -L https://github.com/Luke-zhang-04/destagnate/releases/download/v<VERSION_NAME>/destagnate.bundle.min.js -O destagnate.bundle.min.js

# Development
curl -L https://github.com/Luke-zhang-04/destagnate/releases/download/v<VERSION_NAME>/destagnate.bundle.js -O destagnate.bundle.js

# Latest
curl -L https://github.com/Luke-zhang-04/destagnate/releases/download/v1.6.0/destagnate.bundle.js -O destagnate.bundle.js
```

With a CDN
```html
<!-- Production -->
<script src="https://unpkg.com/destagnate@version/dist/deStagnate.bundle.min.js"></script>

<!-- Development -->
<script src="https://unpkg.com/destagnate@version/dist/deStagnate.bundle.js"></script>

<!-- Latest -->
<script src="https://unpkg.com/destagnate@1.6.0/dist/deStagnate.bundle.min.js"></script>
```

## Basic Use
See [https://github.com/Luke-zhang-04/DeStagnate/tree/master/docs/src](https://github.com/Luke-zhang-04/DeStagnate/tree/master/docs/src) for example code
```js
// Browser env requires this
const DS = DeStagnate

// Node env requires this
import * as DS from "destagnate"
const DS = require("destagnate")

class Counter extends DS.defualt {

    constructor (parent) {
        super(parent)

        this.state = {}
    }

    // Using DS.createElement() - all options available below
    render = () => DS.createElement("div")
    render = () => Counter.createElement("div")
    render = () => this.createElement("div")

    // Alternatively, you can use JSX (this requires the CLI, which comes with this package)
    render = () => <div></div>

}

// Warning: the parent must be dedicated to this component. Anything inside the parent will be removed on muatation
const counter = new Counter(document.querySelector("#parent"))

counter.mount() // Must call once to mount the component
```
