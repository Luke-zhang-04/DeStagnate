import DeStagnate, {Fragment, createRef, createElement} from "../../src"

// Also a test for function components

createElement(Fragment)
;<></>
;<DeStagnate.Fragment></DeStagnate.Fragment>

createElement(Fragment, null, <DeStagnate.Fragment></DeStagnate.Fragment>, createElement("div"))
;<>
    {createElement(Fragment)}
    <div></div>
</>
;<DeStagnate.Fragment>
    <></>
    <div></div>
</DeStagnate.Fragment>

createElement(Fragment, {ref: createRef<DocumentFragment>()})
;<DeStagnate.Fragment ref={createRef<DocumentFragment>()}></DeStagnate.Fragment>

// @ts-expect-error
createElement(Fragment, {ref: createRef<HTMLDivElement>()})
// @ts-expect-error
;<DeStagnate.Fragment ref={createRef<HTMLElement>()}></DeStagnate.Fragment>

// @ts-expect-error
createElement(Fragment, {class: ""})
// @ts-expect-error
;<DeStagnate.Fragment class=""></DeStagnate.Fragment>
