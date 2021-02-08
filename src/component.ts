/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @exports DeStagnate main destagnate class
 * @file DeStagnate component class
 * @preserve
 */
/* eslint-disable max-lines */

import {Events as Base} from "./private/_events"
import type {RenderType} from "./private/_base"
import url from "./private/_url"

/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
export abstract class Component
    <Props = Record<string, unknown>, State = Record<string, unknown>>
    extends Base {

    /**
     * State of component. Works similar React State
     * @type {undefined | Object.<string, unknown>}
     */
    private _state: State = {} as State

    /**
     * If initial state was set in initializer
     * Do not throw error with direct state setting
     */
    private _didSetInitialState = false

    /**
     * Parent that this element if bound to
     */
    private _parent: HTMLElement | undefined

    /**
     * If component is mounted
     */
    private _didMount = false

    /**
     * Construct class component
     * @param parent - parent of this element
     * @param props - element properties; works like React Props
     */
    public constructor (parent?: HTMLElement, protected props?: Props) {
        super()

        this._parent = parent
    }

    /**
     * What to call before component update (state mutation)
     * @param {Props} prevProps - previous props
     * @param prevState - previous state
     * @returns void
     */
    public getSnapshotBeforeUpdate = (
        prevProps: Props,
        prevState: State,
    ): [Props, State] => [prevProps, prevState]

    /**
     * Public getState getter as this.state itself is protected
     * @returns component state
     */
    public get getState (): State {
        return this.state
    }

    /**
     * Get component state
     * @returns component state
     */
    protected get state (): State {
        return this._state
    }

    /**
     * Sets component state
     * WARN: do not use this method to mutate the state directly
     * @param obj - state to set
     */
    protected set state (obj: State) {
        if (this._didSetInitialState) {
            this.componentDidCatch(
                new Error(`ERROR: code 2. See ${url}.`)
            )
            this.setState(obj)
        } else {
            this._state = obj
            this._didSetInitialState = true
        }
    }

    /**
     * Public getProps getter as this.props itself is protected
     * @returns component props
     */
    public get getProps (): Props | undefined {
        return this.props
    }

    /**
     * Set the parent of this component
     * @param element - parent element
     * @returns void
     */
    public set parent (element: HTMLElement | undefined) {
        if (element && element.childElementCount > 0) {
            this.componentDidCatch(new Error(`ERROR: code 1. See ${url}. Params: ${element.tagName.toLowerCase()}`))
        }

        this._parent = element
    }

    /**
     * Get the parent element of this component
     * @returns parent
     */
    public get parent (): HTMLElement | undefined {
        return this._parent
    }

    /**
     * Get didMount value publicly
     * @returns if mounted
     */
    public get didMount (): boolean {
        return this._didMount
    }

    /**
     * Forces a component to update
     * Follows the same component updating procedure as setState without modifying state
     * @returns returns error if error is thrown
     */
    public readonly forceUpdate = (): void | Error => {
        try {
            this.componentDidUpdate?.()

            if (this._parent === undefined) {
                throw new Error(`ERROR: code 3. See ${url}.`)
            }

            this.getSnapshotBeforeUpdate(
                {...this.props} as Props,
                {...this.state},
            )

            this._update(this._execRender())
        } catch (err: unknown) /* istanbul ignore next */ {
            return this._handleError(err)
        }
    }

    /**
     * Sets state
     * @param obj - state to set
     * @returns void
     */
    public readonly setState = (obj: Partial<State>): void | Error => {
        try {
            this.componentWillUpdate?.()

            if (this._parent === undefined) {
                throw new Error(`ERROR: code 3. See ${url}.`)
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
            return this._handleError(err)
        }
    }

    /* eslint-disable @typescript-eslint/member-ordering, max-len */
    /**
     * Initial mounting to be manually called
     * @param parent - parent element to mount with; optional
     * @returns - result of append child to parent element
     */
    public readonly mountComponent = (
        parent?: HTMLElement
    ): Node | Error => {
        try {
            if (this._parent === undefined) {
                throw new Error(`ERROR: code 3. See ${url}.`)
            }

            this.parent = parent

            const component = this.render()

            this._didSetInitialState = true

            this.componentWillMount?.()

            if (component === null) {
                throw new Error(`ERROR: code 5. See ${url}.`)
            }

            this.bindEventListeners(this._parent)

            this._didMount = true
            this.componentDidMount?.()

            if (component instanceof Array) {
                const fragment = document.createDocumentFragment();

                (component as Element[]).forEach(fragment.appendChild)

                return this._parent.appendChild(fragment)
            }

            return this._parent.appendChild(component)
        } catch (err: unknown) /* istanbul ignore next */ {
            return this._handleError(err)
        }
    }

    /**
     * Initial mounting to be manually called
     * @returns - result of append child to parent element
     */
    public readonly mount = this.mountComponent

    /**
     * Unmounting to be manually called
     * @returns - void
     */
    public readonly unmountComponent = (): void => {
        try {
            if (this._parent === undefined) {
                return this.componentDidWarn(`WARN: code 4. See ${url}.`)
            }

            this.componentWillUnmount?.()

            this.unbindEventListeners(this._parent)

            this._removeChildren()
            this._didMount = false
        } catch (err: unknown) /* istanbul ignore next */ {
            this._handleError(err)
        }

    }

    /**
     * Unmounting to be manually called
     * @returns - void
     */
    public readonly unmount = this.unmountComponent
    /* eslint-enable max-len, @typescript-eslint/member-ordering */

    /**
     * Removes children from this._parent
     * @return void
     */
    private _removeChildren = (): void => {
        if (this._parent === undefined) {
            throw new Error(`ERROR: code 3. See ${url}.`)
        }

        while (this._parent.firstChild) {
            if (this._parent.lastChild) {
                this._parent.removeChild(this._parent.lastChild)
            }
        }
    }

    /**
     * Executes new render
     * @returns rendered content
     */
    private _execRender = (): RenderType => {
        this._removeChildren()

        return this.render()
    }


    /**
     * Updates the component
     * @param renderedContent - rendered content from executing the render function
     * @returns void
     */
    private _update = (renderedContent?: RenderType): void => {
        if (renderedContent instanceof Array) {
            for (const element of renderedContent) {
                this._parent?.appendChild(element)
            }
        } else if (renderedContent) {
            this._parent?.appendChild(renderedContent)
        }

        if (renderedContent) {
            this.componentDidUpdate?.()
        }
    }

    private _handleError = (err: unknown): Error => {
        if (err instanceof Error) {
            this.componentDidCatch(err)

            return err as Error
        }

        const error = new Error(String(err))

        this.componentDidCatch(error)

        return error
    }

}

export default Component
