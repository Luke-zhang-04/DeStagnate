/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @exports DeStagnate main destagnate class
 * @file DeStagnate component class
 * @preserve
 */
/* eslint-disable max-lines */

import Base from "./_events"

type RenderType = HTMLElement | HTMLElement[] | Element | Element[] | null

/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
export default abstract class DeStagnate
    <Props = Record<string, unknown>, State = Record<string, unknown>>
    extends Base {

    /**
     * If strict mode should be used. True by default
     * @private
     * @instance
     */
    private _strict = true

    /**
     * State of component. Works similar React State
     * @type {undefined | Object.<string, unknown>}
     * @private
     * @instance
     */
    private _state: State = {} as State

    /**
     * If initial state was set in initializer
     * Do not throw error with direct state setting
     * @private
     * @instance
     */
    private _didSetInitialState = false

    /**
     * Parent that this element if bound to
     * @private
     * @instance
     */
    private _parent: HTMLElement | undefined

    /**
     * If component is mounted
     * @private
     * @instance
     */
    private _didMount = false

    /**
     * Construct class component
     * @public
     * @constructor
     * @param parent - parent of this element
     * @param props - element properties; works like React Props
     * @param shouldSkipParentCheck - warn or throw error if parent element already has children
     */
    public constructor (
        parent?: HTMLElement,
        protected props?: Props,
        shouldSkipParentCheck = false,
    ) {
        super()
        if (
            parent &&
            parent.childElementCount > 0 &&
            !shouldSkipParentCheck &&
            this._strict
        ) {
            this.componentDidCatch(new Error(`ERR: Avoid using this ${parent.tagName.toLowerCase()} as element parent, as all elements within this ${parent.tagName.toLowerCase()} will be removed on re-render. To disable this, pass in true as a third parameter`))
        }

        this._parent = parent
    }

    /**
     * What to call before component update (state mutation)
     * @public
     * @instance
     * @param {Props} prevProps - previous props
     * @param prevState - previous state
     * @returns void
     */
    public getSnapshotBeforeUpdate = (
        prevProps: Props,
        prevState: State,
    ): [Props, State] => [prevProps, prevState]

    /**
     * Turn on strict mode
     * @public
     * @instance
     * @returns void
     */
    public useStrict = (): void => {
        this._strict = true
    }

    /**
     * Turn off strict mode
     * @public
     * @instance
     * @returns void
     */
    public disableStrict = (): void => {
        this._strict = false
    }

    /**
     * Public getState getter as this.state itself is protected
     * @public
     * @returns component state
     */
    public get getState (): State {
        return this.state
    }

    /**
     * Get component state
     * @protected
     * @returns component state
     */
    protected get state (): State {
        return this._state
    }

    /**
     * Sets component state
     * WARN: do not use this method to mutate the state directly
     * @protected
     * @param obj - state to set
     */
    protected set state (obj: State) {
        if (this._didSetInitialState && this._strict) {
            this.componentDidCatch(
                new Error("Do not mutate state directly. Use setState instead.")
            )
            // eslint-disable-next-line
            this.componentDidWarn("DeStagnate protects you from mutating the entire state object. Avoid mutating state directly")
            this.setState(obj)
        } else {
            this._state = obj
            this._didSetInitialState = true
        }
    }

    /**
     * Public getProps getter as this.props itself is protected
     * @public
     * @returns component props
     */
    public get getProps (): Props | undefined {
        return this.props
    }

    /**
     * Set the parent of this component
     * @public
     * @param element - parent element
     * @returns void
     */
    public set parent (element: HTMLElement | undefined) {
        if (
            element &&
            element.childElementCount > 0 &&
            this._strict
        ) {
            this.componentDidWarn(`WARN: Avoid using this ${element.tagName.toLowerCase()} as element parent, as all elements within this ${element.tagName.toLowerCase()} will be removed on re-render. If this was intentional, turn strict off before setting parent.`)
        }

        this._parent = element
    }

    /**
     * Get the parent element of this component
     * @public
     * @returns parent
     */
    public get parent (): HTMLElement | undefined {
        return this._parent
    }

    /**
     * Get didMount value publicly
     * @public
     * @returns if mounted
     */
    public get didMount (): boolean {
        return this._didMount
    }

    /**
     * Forces a component to update
     * Follows the same component updating procedure as setState without modifying state
     * @public
     * @instance
     * @readonly
     * @returns returns error if error is thrown
     */
    public readonly forceUpdate = (): void | Error => {
        try {
            this.componentDidUpdate()

            if (this._parent === undefined) {
                throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.")
            }

            this.getSnapshotBeforeUpdate(
                {...this.props} as Props,
                {...this.state},
            )

            this._update(this._execRender())
        } catch (err) /* istanbul ignore next */ {
            this.componentDidCatch(err)

            return err as Error
        }
    }

    /**
     * Sets state
     * @public
     * @instance
     * @readonly
     * @param obj - state to set
     * @returns void
     */
    public readonly setState = (obj: Partial<State>): void | Error => {
        try {
            this.componentWillUpdate()

            if (this._parent === undefined) {
                throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.")
            }

            if (this._strict) {
                this._checkKeys(obj)
            }

            this.getSnapshotBeforeUpdate(
                {...this.props} as Props,
                {...this.state},
            )

            Object.assign(this._state, obj)

            const renderedContent = this.shouldComponentUpdate()
                ? this._execRender()
                : undefined

            this._update(renderedContent)
        } catch (err) /* istanbul ignore next */ {
            this.componentDidCatch(err)

            return err as Error
        }
    }

    /* eslint-disable @typescript-eslint/member-ordering, max-len */
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @param parent - parent element to mount with; optional
     * @returns - result of append child to parent element
     */
    public readonly mountComponent = (
        parent?: HTMLElement
    ): HTMLElement | HTMLElement[] | Element | Element[] | Error => {
        try {
            if (parent !== undefined) {
                this.parent = parent
            }

            if (this._parent === undefined) {
                throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.")
            }

            const component = this.render()

            this._didSetInitialState = true

            this.componentWillMount()

            if (component === null) {
                throw new Error("Expected render method to be included in component class, no render method found, or render returned an empty array")
            }

            this.bindEventListeners(this._parent)

            this._didMount = true
            this.componentDidMount()

            if (typeof(component) === "object" && component instanceof Array) {
                return (component as Element[]).map((element) => (
                    this._parent!.appendChild(element)
                ))
            }

            return this._parent.appendChild(component)
        } catch (err) /* istanbul ignore next */ {
            this.componentDidCatch(err)

            return err as Error
        }
    }
    
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns - result of append child to parent element
     */
    public readonly mount = this.mountComponent

    /**
     * Unmounting to be manually called 
     * @public
     * @instance
     * @readonly
     * @returns - void
     */
    public readonly unmountComponent = (): void => {
        try {
            if (this._parent === undefined) {
                this.componentDidWarn("No parent was set. Component unmounted from nothing.")

                return
            }

            this.componentWillUnmount()

            this.unbindEventListeners(this._parent)
    
            this._removeChildren()
            this._didMount = false
        } catch (err) /* istanbul ignore next */ {
            this.componentDidCatch(err)
        }

    }
    
    /**
     * Unmounting to be manually called 
     * @public
     * @instance
     * @readonly
     * @returns - void
     */
    public readonly unmount = this.unmountComponent
    /* eslint-enable max-len, @typescript-eslint/member-ordering */

    /**
     * Removes children from this._parent
     * @private
     * @instance
     * @return void
     */
    private _removeChildren = (): void => {
        if (this._parent === undefined) {
            throw new Error("Parent is not defined. Set parent with the parent setter or set it during mounting.")
        }

        while (this._parent.firstChild) {
            if (this._parent.lastChild) {
                this._parent.removeChild(this._parent.lastChild)
            }
        }
    }

    /**
     * Executes new render
     * @private
     * @instance
     * @returns rendered content
     */
    private _execRender = (): RenderType => {
        this._removeChildren()

        return this.render()
    }

    /**
     * Checks new state assignment to make sure no new keys are assigned
     * @private
     * @instance
     * @param obj - new state
     * @returns void
     */
    private _checkKeys = (obj: Partial<State>): void => {
        for (const key of Object.keys(obj)) {
            if (!Object.keys(this.state).includes(key)) {
                // eslint-disable-next-line
                this.componentDidWarn(`WARN: New key (${key}) should not be set with setState, which has keys ${JSON.stringify(Object.keys(this.state))}. Declare all state variables in constructor as a best practice. Did you misspell a key?`)
            }
        }
    }

    /**
     * Updates the component
     * @private
     * @instance
     * @param renderedContent - rendered content from executing the render function
     * @returns void
     */
    private _update = (renderedContent?: RenderType): void => {
        if (
            typeof(renderedContent) === "object" &&
            renderedContent instanceof Array
        ) {
            for (const element of renderedContent) {
                this._parent!.appendChild(element)
            }
        } else if (renderedContent) {
            this._parent!.appendChild(renderedContent)
        }

        if (renderedContent) {
            this.componentDidUpdate()
        }
    }

}
