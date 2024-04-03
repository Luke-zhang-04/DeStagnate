import {type Ref, StateContainer, createRef} from "../../src"

class Container1 extends StateContainer<number, HTMLButtonElement | null> {
    public updateDOM(ref: Ref<HTMLButtonElement>): void {
        console.log(ref)
    }
}

new Container1(0)

new Container1(0, createRef(document.createElement("button")))

new Container1(
    0,
    // @ts-expect-error
    createRef(document.createElement("h1")),
)

new Container1(
    0,
    // @ts-expect-error
    createRef<HTMLHeadingElement>(document.createElement("h1")),
)

new Container1(0, createRef())

class Container2 extends StateContainer<number, HTMLButtonElement> {
    public updateDOM(ref: Ref<HTMLButtonElement>): void {
        console.log(ref)
    }
}

// @ts-expect-error
new Container2(0)

new Container2(0, createRef(document.createElement("button")))

new Container2(
    0,
    // @ts-expect-error
    createRef(document.createElement("p")),
)

new Container2(
    0,
    // @ts-expect-error
    createRef<HTMLParagraphElement>(document.createElement("p")),
)

new Container2(
    0,
    // @ts-expect-error
    createRef(),
)

class _Container3 extends StateContainer<number, Element> {
    public updateDOM(
        // This is undesirable behaviour: the ref type should be exactly Element, since it won't be
        // a button element (as described by the above generic). I have no idea how to fix it.
        ref: Ref<HTMLButtonElement>,
    ): void {
        console.log(ref)
    }
}

class _Container4 extends StateContainer<number, HTMLButtonElement> {
    public updateDOM(
        // This is good behaviour.
        ref: Ref<Element>,
    ): void {
        console.log(ref)
    }
}

class _Container5 extends StateContainer<number, Element | null> {
    public updateDOM(ref: Ref<Element>): void {
        console.log(ref)
    }
}

class _Container6 extends StateContainer<number, HTMLButtonElement | HTMLAnchorElement> {
    // @ts-expect-error
    public updateDOM(ref: Ref<SVGElement>): void {
        console.log(ref)
    }
}
