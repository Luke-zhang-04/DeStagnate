import * as DeStagnate from "../../src"
import {createElement} from "../../src"

let node: Node

interface CustomProps {
    obj: {
        prop: number
    }
    arr: number[]
    uintArr: Uint32Array
    buffer: Buffer
    opt?: string
}

{
    const Component: DeStagnate.FC<CustomProps, []> = ({obj, arr, uintArr, buffer, opt}) =>
        createElement("div", null, {obj, arr, uintArr, buffer, opt}.toString())

    // @ts-expect-error
    createElement(Component)
    // @ts-expect-error
    createElement(Component, undefined)
    // @ts-expect-error
    createElement(Component, null)
    // @ts-expect-error
    createElement(Component, {})
    // @ts-expect-error
    ;<Component />

    node = createElement(Component, {
        obj: {prop: 0},
        arr: [],
        uintArr: new Uint32Array(),
        buffer: Buffer.from([]),
    })
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()} buffer={Buffer.from([])} />
    node = createElement(Component, {
        obj: {prop: 0},
        arr: [],
        uintArr: new Uint32Array(),
        buffer: Buffer.from([]),
        opt: "",
    })
    ;<Component
        obj={{prop: 0}}
        arr={[]}
        uintArr={new Uint32Array()}
        buffer={Buffer.from([])}
        opt=""
    />

    // @ts-expect-error
    createElement(Component, {
        obj: {prop: 0},
        arr: [],
        uintArr: new Uint32Array(),
    })
    // @ts-expect-error
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()} />

    createElement(Component, {
        obj: {prop: 0},
        arr: [],
        // @ts-expect-error
        uintArr: new Uint16Array(),
        buffer: Buffer.from([]),
    })
    // @ts-expect-error
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint16Array()} buffer={Buffer.from([])} />

    node = createElement(
        // @ts-expect-error
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
        },
        createElement("div"),
    )
    // This should be an error, but we can't actually control JSX children types
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()} buffer={Buffer.from([])}>
        <div />
    </Component>
    node = createElement(
        // @ts-expect-error
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
            opt: "",
        },
        createElement("div"),
    )
    // This should be an error, but we can't actually control JSX children types
    ;<Component
        obj={{prop: 0}}
        arr={[]}
        uintArr={new Uint32Array()}
        buffer={Buffer.from([])}
        opt=""
    >
        <div />
    </Component>
}

{
    const Component: DeStagnate.FC<CustomProps> = (
        {obj, arr, uintArr, buffer, opt},
        ...children
    ) => createElement("div", null, {obj, arr, uintArr, buffer, opt}.toString(), children)

    // @ts-expect-error
    createElement(Component)
    // @ts-expect-error
    createElement(Component, undefined)
    // @ts-expect-error
    createElement(Component, null)
    // @ts-expect-error
    createElement(Component, {})
    // @ts-expect-error
    ;<Component />

    node = createElement(Component, {
        obj: {prop: 0},
        arr: [],
        uintArr: new Uint32Array(),
        buffer: Buffer.from([]),
    })
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()} buffer={Buffer.from([])} />
    node = createElement(Component, {
        obj: {prop: 0},
        arr: [],
        uintArr: new Uint32Array(),
        buffer: Buffer.from([]),
        opt: "",
    })
    ;<Component
        obj={{prop: 0}}
        arr={[]}
        uintArr={new Uint32Array()}
        buffer={Buffer.from([])}
        opt=""
    />

    // @ts-expect-error
    createElement(Component, {
        obj: {prop: 0},
        arr: [],
        uintArr: new Uint32Array(),
    })
    // @ts-expect-error
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()} />

    createElement(Component, {
        obj: {prop: 0},
        arr: [],
        // @ts-expect-error
        uintArr: new Uint16Array(),
        buffer: Buffer.from([]),
    })
    // @ts-expect-error
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint16Array()} buffer={Buffer.from([])} />

    node = createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
        },
        createElement("div"),
    )
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()} buffer={Buffer.from([])}>
        <div />
    </Component>
    node = createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
            opt: "",
        },
        createElement("div"),
    )
    ;<Component
        obj={{prop: 0}}
        arr={[]}
        uintArr={new Uint32Array()}
        buffer={Buffer.from([])}
        opt=""
    >
        <div />
    </Component>
}

{
    const Component: DeStagnate.FC<CustomProps, [string, number]> = (
        {obj, arr, uintArr, buffer, opt},
        ...children
    ) => createElement("div", null, {obj, arr, uintArr, buffer, opt}.toString(), children)

    // @ts-expect-error
    createElement(Component)
    // @ts-expect-error
    createElement(Component, undefined)
    // @ts-expect-error
    createElement(Component, null)
    // @ts-expect-error
    createElement(Component, {})
    // @ts-expect-error
    ;<Component />

    node = createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
        },
        "",
        0,
    )
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()} buffer={Buffer.from([])}>
        {""}
        {0}
    </Component>
    node = createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
            opt: "",
        },
        "",
        0,
    )
    ;<Component
        obj={{prop: 0}}
        arr={[]}
        uintArr={new Uint32Array()}
        buffer={Buffer.from([])}
        opt=""
    >
        {""}
        {0}
    </Component>

    // @ts-expect-error
    createElement(Component, {
        obj: {prop: 0},
        arr: [],
        uintArr: new Uint32Array(),
    })
    // @ts-expect-error
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()}>
        {""}
        {0}
    </Component>

    createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            // @ts-expect-error
            uintArr: new Uint16Array(),
            buffer: Buffer.from([]),
        },
        "",
        0,
    )
    // @ts-expect-error
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint16Array()} buffer={Buffer.from([])}>
        {""}
        {0}
    </Component>

    node = createElement(
        // @ts-expect-error
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
            opt: "",
        },
        createElement("div"),
    )
    // Unfortunately, Typescript does not check if the JSX children type is valid, so this passes with no problem
    ;<Component
        obj={{prop: 0}}
        arr={[]}
        uintArr={new Uint32Array()}
        buffer={Buffer.from([])}
        opt=""
    >
        <div />
    </Component>
}

{
    const Component: DeStagnate.FC<CustomProps, DeStagnate.ChildrenType, HTMLDivElement> = (
        {obj, arr, uintArr, buffer, opt},
        ...children
    ) => createElement("div", null, {obj, arr, uintArr, buffer, opt}.toString(), children)

    const Component2: DeStagnate.FC<CustomProps, DeStagnate.ChildrenType, HTMLDivElement> = (
        {obj, arr, uintArr, buffer, opt},
        ...children
        // @ts-expect-error
    ) => createElement("a", null, {obj, arr, uintArr, buffer, opt}.toString(), children)

    // @ts-expect-error
    createElement(Component)
    // @ts-expect-error
    createElement(Component, undefined)
    // @ts-expect-error
    createElement(Component, null)
    // @ts-expect-error
    createElement(Component, {})
    // @ts-expect-error
    ;<Component />

    let div: HTMLDivElement

    div = createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
        },
        "",
        0,
    )
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()} buffer={Buffer.from([])}>
        {""}
        {0}
    </Component>
    div = createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
            opt: "",
        },
        "",
        0,
    )
    ;<Component
        obj={{prop: 0}}
        arr={[]}
        uintArr={new Uint32Array()}
        buffer={Buffer.from([])}
        opt=""
    >
        {""}
        {0}
    </Component>

    // @ts-expect-error
    createElement(Component, {
        obj: {prop: 0},
        arr: [],
        uintArr: new Uint32Array(),
    })
    // @ts-expect-error
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()}>
        {""}
        {0}
    </Component>
    createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            // @ts-expect-error
            uintArr: new Uint16Array(),
            buffer: Buffer.from([]),
        },
        "",
        0,
    )
    // @ts-expect-error
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint16Array()} buffer={Buffer.from([])}>
        {""}
        {0}
    </Component>
}

{
    const Component: DeStagnate.FC<
        Partial<CustomProps>,
        DeStagnate.ChildrenType,
        HTMLDivElement
    > = ({obj, arr, uintArr, buffer, opt}, ...children) =>
        createElement("div", null, {obj, arr, uintArr, buffer, opt}.toString(), children)

    createElement(Component)
    createElement(Component, undefined)
    createElement(Component, null)
    createElement(Component, {})
    ;<Component />

    let div: HTMLDivElement

    div = createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
        },
        "",
        0,
    )
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()} buffer={Buffer.from([])}>
        {""}
        {0}
    </Component>
    div = createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            uintArr: new Uint32Array(),
            buffer: Buffer.from([]),
            opt: "",
        },
        "",
        0,
    )
    ;<Component
        obj={{prop: 0}}
        arr={[]}
        uintArr={new Uint32Array()}
        buffer={Buffer.from([])}
        opt=""
    >
        {""}
        {0}
    </Component>

    createElement(Component, {
        obj: {prop: 0},
        arr: [],
        uintArr: new Uint32Array(),
    })
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint32Array()}>
        {""}
        {0}
    </Component>
    createElement(
        Component,
        {
            obj: {prop: 0},
            arr: [],
            // @ts-expect-error
            uintArr: new Uint16Array(),
            buffer: Buffer.from([]),
        },
        "",
        0,
    )
    // @ts-expect-error
    ;<Component obj={{prop: 0}} arr={[]} uintArr={new Uint16Array()} buffer={Buffer.from([])}>
        {""}
        {0}
    </Component>
}
