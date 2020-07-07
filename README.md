<div align="center">
    <img src="assets/logo.png" alt="logo">
</div>

Make creating dynamic components within static sites easier with DeStagnate, a ReactJS inspired library.

[See some examples](https://luke-zhang-04.github.io/DeStagnate/)

## Why not just use React?
React is great for dynamic web applications, but it is not well optimised for static-like sites. With DeStagnate, you can create React-like componnets within the browser environment, or a bundler such as Webpack or Browserify. DeStagnate uses less resources, and was made with use in static sites as it's main purpose.

## Basic Use
See [https://github.com/Luke-zhang-04/DeStagnate/tree/master/docs/examples](https://github.com/Luke-zhang-04/DeStagnate/tree/master/docs/examples) for example code
```js
// browser env requires this
const DS = DeStagnate,
    createElement = DS.createElement.default

// node env requires this
import * as DS from "destagnate"

class Counter extends DS.DeStagnate {

    constructor (parent) {
        super(parent)

        this.state = {}
    }

    render = () => createElement("div", {})

}

// Warning: the parent must be dedicated to this component. Anything inside the parent will be removed on muatation
const counter = new Counter(document.querySelector("#parent"))

counter.mount() // Must call once to mount the component
```

```ts
import DeStagnate, {createElement} from "DeStagnate"

class Counter extends DeStagnate<{}, {[key: string]: string}> {

    public constructor (parent: HTMLElement) {
        super(parent)

        this.state = {}
    }

    public render = (): HTMLElement => createElement("div", {})

}

if (document.querySelector("#parent")) {
    // Warning: the parent must be dedicated to this component. Anything inside the parent will be removed on muatation
    const counter = new Counter(
        document.querySelector("#parent") as HTMLElement
    )

    counter.mount() // Must call once
}
```

## Lifecycle Methods
### State
```ts
export default abstract class DeStagnate
    <Props = Record<string, unknown>, State = Record<string, unknown>> {

    /**
     * Sets state
     * @public
     * @instance
     * @param {State} obj - state to set
     * @returns {void} void
     */
    public setState = (obj: State) => void

    /**
     * State of component. Works similar React State
     * @type {Object.<string, unknown> | undefined}
     * @protected
     * @instance
     */
    protected state: State

}
```
See [this example](https://github.com/Luke-zhang-04/DeStagnate/blob/master/docs/examples/counter.js) for help on using state

### Mounting
```ts
/**
 * Initial mounting to be manually called
 * @public
 * @instance
 * @returns {HTMLElement | error} - result of append child to parent element
 */
public mountComponent = () => HTMLElement | Error
public mount = this.mountComponent

/**
 * Unmounting to be manually called 
 * @public
 * @instance
 * @returns {void} - void
 */
public unmountComponent = () => void
public unmount = this.unmountComponent

/**
 * What to call after component mounting
 * @public
 * @instance
 * @returns {void} void
 */
public componentDidMount = () => void // Note that this function may return anything, but return void by default

/**
 * What to call before component mounting
 * @public
 * @instance
 * @returns {void} void
 */
public componentWillMount = () => void // Note that this function may return anything, but return void by default

/**
 * What to call before component unmounting
 * @public
 * @instance
 * @returns {void} void
 */
public componentWillUnmount = () => void // Note that this function may return anything, but return void by default
```

## Updating
These methods are called on state mutation
```ts
/**
 * What to call after component update (state mutation)
 * @public
 * @instance
 * @returns {void} void
 */
public componentDidUpdate = (): void => undefined

/**
 * What to call before component update (state mutation)
 * @public
 * @instance
 * @returns {void} void
 */
public componentWillUpdate = (): void => undefined
```

### Render
This method is compulsory
```ts
/**
 * Rendering HTML, must be part of extended class
 * @public
 * @instance
 * @returns {null | HTMLElement} if returns null error will be thrown via console.error
 */
public render = () => null | HTMLElement
```

Created my free logo at [LogoMakr.com](https://my.logomakr.com/)
