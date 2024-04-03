// Type definitions copied from @types/react
/**
 * @license MIT
 * @copyright (c) Microsoft Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 * BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
 */

import type {EventFunc} from "."

export type Booleanish = boolean | "true" | "false"
export type CrossOrigin = "" | "anonymous" | "use-credentials" | undefined

/**
 * All the WAI-ARIA 1.1 role attribute values from
 * https://www.w3.org/TR/wai-aria-1.1/#role_definitions
 */
export type AriaRole =
    | "alert"
    | "alertdialog"
    | "application"
    | "article"
    | "banner"
    | "button"
    | "cell"
    | "checkbox"
    | "columnheader"
    | "combobox"
    | "complementary"
    | "contentinfo"
    | "definition"
    | "dialog"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "form"
    | "grid"
    | "gridcell"
    | "group"
    | "heading"
    | "img"
    | "link"
    | "list"
    | "listbox"
    | "listitem"
    | "log"
    | "main"
    | "marquee"
    | "math"
    | "menu"
    | "menubar"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "navigation"
    | "none"
    | "note"
    | "option"
    | "presentation"
    | "progressbar"
    | "radio"
    | "radiogroup"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "scrollbar"
    | "search"
    | "searchbox"
    | "separator"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "table"
    | "tablist"
    | "tabpanel"
    | "term"
    | "textbox"
    | "timer"
    | "toolbar"
    | "tooltip"
    | "tree"
    | "treegrid"
    | "treeitem"
    | (string & {})

export interface DOMAttributes {
    // Clipboard Events
    onCopy?: EventFunc<"copy"> | undefined
    onCut?: EventFunc<"cut"> | undefined
    onPaste?: EventFunc<"paste"> | undefined

    // Composition Events
    onCompositionEnd?: EventFunc<"compositionend"> | undefined
    onCompositionStart?: EventFunc<"compositionstart"> | undefined
    onCompositionUpdate?: EventFunc<"compositionupdate"> | undefined

    // Focus Events
    onFocus?: EventFunc<"focus"> | undefined
    onBlur?: EventFunc<"blur"> | undefined

    // Form Events
    onChange?: EventFunc<"change"> | undefined
    onBeforeInput?: EventFunc<"beforeinput"> | undefined
    onInput?: EventFunc<"input"> | undefined
    onReset?: EventFunc<"reset"> | undefined
    onSubmit?: EventFunc<"submit"> | undefined
    onInvalid?: EventFunc<"invalid"> | undefined

    // Image Events
    onLoad?: EventFunc<"load"> | undefined
    onError?: EventFunc<"error"> | undefined // also a Media Event

    // Keyboard Events
    onKeyDown?: EventFunc<"keydown"> | undefined
    /** @deprecated */
    onKeyPress?: EventFunc<"keypress"> | undefined
    /** @deprecated */
    onKeyUp?: EventFunc<"keyup"> | undefined

    // Media Events
    onAbort?: EventFunc<"abort"> | undefined
    onCanPlay?: EventFunc<"canplay"> | undefined
    onCanPlayThrough?: EventFunc<"canplaythrough"> | undefined
    onDurationChange?: EventFunc<"durationchange"> | undefined
    onEmptied?: EventFunc<"emptied"> | undefined
    onEncrypted?: EventFunc<"encrypted"> | undefined
    onEnded?: EventFunc<"ended"> | undefined
    onLoadedData?: EventFunc<"loadeddata"> | undefined
    onLoadedMetadata?: EventFunc<"loadedmetadata"> | undefined
    onLoadStart?: EventFunc<"loadstart"> | undefined
    onPause?: EventFunc<"pause"> | undefined
    onPlay?: EventFunc<"play"> | undefined
    onPlaying?: EventFunc<"playing"> | undefined
    onProgress?: EventFunc<"progress"> | undefined
    onRateChange?: EventFunc<"ratechange"> | undefined
    onResize?: EventFunc<"resize"> | undefined
    onSeeked?: EventFunc<"seeked"> | undefined
    onSeeking?: EventFunc<"seeking"> | undefined
    onStalled?: EventFunc<"stalled"> | undefined
    onSuspend?: EventFunc<"suspend"> | undefined
    onTimeUpdate?: EventFunc<"timeupdate"> | undefined
    onVolumeChange?: EventFunc<"volumechange"> | undefined
    onWaiting?: EventFunc<"waiting"> | undefined

    // MouseEvents
    onAuxClick?: EventFunc<"auxclick"> | undefined
    onClick?: EventFunc<"click"> | undefined
    onContextMenu?: EventFunc<"contextmenu"> | undefined
    onDblClick?: EventFunc<"dblclick"> | undefined
    onDrag?: EventFunc<"drag"> | undefined
    onDragEnd?: EventFunc<"dragend"> | undefined
    onDragEnter?: EventFunc<"dragenter"> | undefined
    onDragLeave?: EventFunc<"dragleave"> | undefined
    onDragOver?: EventFunc<"dragover"> | undefined
    onDragStart?: EventFunc<"dragstart"> | undefined
    onDrop?: EventFunc<"drop"> | undefined
    onMouseDown?: EventFunc<"mousedown"> | undefined
    onMouseEnter?: EventFunc<"mouseenter"> | undefined
    onMouseLeave?: EventFunc<"mouseleave"> | undefined
    onMouseMove?: EventFunc<"mousemove"> | undefined
    onMouseOut?: EventFunc<"mouseout"> | undefined
    onMouseOver?: EventFunc<"mouseover"> | undefined
    onMouseUp?: EventFunc<"mouseup"> | undefined

    // Selection Events
    onSelect?: EventFunc<"select"> | undefined

    // Touch Events
    onTouchCancel?: EventFunc<"touchcancel"> | undefined
    onTouchEnd?: EventFunc<"touchend"> | undefined
    onTouchMove?: EventFunc<"touchmove"> | undefined
    onTouchStart?: EventFunc<"touchstart"> | undefined

    // Pointer Events
    onPointerDown?: EventFunc<"pointerdown"> | undefined
    onPointerMove?: EventFunc<"pointermove"> | undefined
    onPointerUp?: EventFunc<"pointerup"> | undefined
    onPointerCancel?: EventFunc<"pointercancel"> | undefined
    onPointerEnter?: EventFunc<"pointerenter"> | undefined
    onPointerLeave?: EventFunc<"pointerleave"> | undefined
    onPointerOver?: EventFunc<"pointerover"> | undefined
    onPointerOut?: EventFunc<"pointerout"> | undefined

    // UI Events
    onScroll?: EventFunc<"scroll"> | undefined

    // Wheel Events
    onWheel?: EventFunc<"wheel"> | undefined

    // Animation Events
    onAnimationStart?: EventFunc<"animationstart"> | undefined
    onAnimationEnd?: EventFunc<"animationend"> | undefined
    onAnimationIteration?: EventFunc<"animationiteration"> | undefined

    // Transition Events
    onTransitionEnd?: EventFunc<"transitionend"> | undefined
}

/** All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/ */
export interface AriaAttributes {
    /**
     * Identifies the currently active element when DOM focus is on a composite widget, textbox,
     * group, or application.
     */
    "aria-activedescendant"?: string | undefined
    /**
     * Indicates whether assistive technologies will present all, or only parts of, the changed
     * region based on the change notifications defined by the aria-relevant attribute.
     */
    "aria-atomic"?: Booleanish | undefined
    /**
     * Indicates whether inputting text could trigger display of one or more predictions of the
     * user's intended value for an input and specifies how predictions would be presented if they
     * are made.
     */
    "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined
    /**
     * Indicates an element is being modified and that assistive technologies MAY want to wait
     * until the modifications are complete before exposing them to the user.
     */
    /**
     * Defines a string value that labels the current element, which is intended to be converted
     * into Braille.
     *
     * @see aria-label.
     */
    "aria-braillelabel"?: string | undefined
    /**
     * Defines a human-readable, author-localized abbreviated description for the role of an
     * element, which is intended to be converted into Braille.
     *
     * @see aria-roledescription.
     */
    "aria-brailleroledescription"?: string | undefined
    "aria-busy"?: Booleanish | undefined
    /**
     * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
     *
     * @see aria-pressed @see aria-selected.
     */
    "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined
    /**
     * Defines the total number of columns in a table, grid, or treegrid.
     *
     * @see aria-colindex.
     */
    "aria-colcount"?: number | undefined
    /**
     * Defines an element's column index or position with respect to the total number of columns
     * within a table, grid, or treegrid.
     *
     * @see aria-colcount @see aria-colspan.
     */
    "aria-colindex"?: number | undefined
    /**
     * Defines a human readable text alternative of aria-colindex.
     *
     * @see aria-rowindextext.
     */
    "aria-colindextext"?: string | undefined
    /**
     * Defines the number of columns spanned by a cell or gridcell within a table, grid, or
     * treegrid.
     *
     * @see aria-colindex @see aria-rowspan.
     */
    "aria-colspan"?: number | undefined
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the
     * current element.
     *
     * @see aria-owns.
     */
    "aria-controls"?: string | undefined
    /**
     * Indicates the element that represents the current item within a container or set of related
     * elements.
     */
    "aria-current"?:
        | boolean
        | "false"
        | "true"
        | "page"
        | "step"
        | "location"
        | "date"
        | "time"
        | undefined
    /**
     * Identifies the element (or elements) that describes the object.
     *
     * @see aria-labelledby
     */
    "aria-describedby"?: string | undefined
    /**
     * Defines a string value that describes or annotates the current element.
     *
     * @see related aria-describedby.
     */
    "aria-description"?: string | undefined
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     *
     * @see aria-describedby.
     */
    "aria-details"?: string | undefined
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise
     * operable.
     *
     * @see aria-hidden @see aria-readonly.
     */
    "aria-disabled"?: Booleanish | undefined
    /**
     * Indicates what functions can be performed when a dragged object is released on the drop
     * target.
     *
     * @deprecated In ARIA 1.1
     */
    "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined
    /**
     * Identifies the element that provides an error message for the object.
     *
     * @see aria-invalid @see aria-describedby.
     */
    "aria-errormessage"?: string | undefined
    /**
     * Indicates whether the element, or another grouping element it controls, is currently
     * expanded or collapsed.
     */
    "aria-expanded"?: Booleanish | undefined
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at
     * the user's discretion, allows assistive technology to override the general default of
     * reading in document source order.
     */
    "aria-flowto"?: string | undefined
    /**
     * Indicates an element's "grabbed" state in a drag-and-drop operation.
     *
     * @deprecated In ARIA 1.1
     */
    "aria-grabbed"?: Booleanish | undefined
    /**
     * Indicates the availability and type of interactive popup element, such as menu or dialog,
     * that can be triggered by an element.
     */
    "aria-haspopup"?:
        | boolean
        | "false"
        | "true"
        | "menu"
        | "listbox"
        | "tree"
        | "grid"
        | "dialog"
        | undefined
    /**
     * Indicates whether the element is exposed to an accessibility API.
     *
     * @see aria-disabled.
     */
    "aria-hidden"?: Booleanish | undefined
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     *
     * @see aria-errormessage.
     */
    "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined
    /**
     * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
     * element.
     */
    "aria-keyshortcuts"?: string | undefined
    /**
     * Defines a string value that labels the current element.
     *
     * @see aria-labelledby.
     */
    "aria-label"?: string | undefined
    /**
     * Identifies the element (or elements) that labels the current element.
     *
     * @see aria-describedby.
     */
    "aria-labelledby"?: string | undefined
    /** Defines the hierarchical level of an element within a structure. */
    "aria-level"?: number | undefined
    /**
     * Indicates that an element will be updated, and describes the types of updates the user
     * agents, assistive technologies, and user can expect from the live region.
     */
    "aria-live"?: "off" | "assertive" | "polite" | undefined
    /** Indicates whether an element is modal when displayed. */
    "aria-modal"?: Booleanish | undefined
    /** Indicates whether a text box accepts multiple lines of input or only a single line. */
    "aria-multiline"?: Booleanish | undefined
    /**
     * Indicates that the user may select more than one item from the current selectable
     * descendants.
     */
    "aria-multiselectable"?: Booleanish | undefined
    /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
    "aria-orientation"?: "horizontal" | "vertical" | undefined
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual
     * parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
     * represent the relationship.
     *
     * @see aria-controls.
     */
    "aria-owns"?: string | undefined
    /**
     * Defines a short hint (a word or short phrase) intended to aid the user with data entry when
     * the control has no value. A hint could be a sample value or a brief description of the
     * expected format.
     */
    "aria-placeholder"?: string | undefined
    /**
     * Defines an element's number or position in the current set of listitems or treeitems. Not
     * required if all elements in the set are present in the DOM.
     *
     * @see aria-setsize.
     */
    "aria-posinset"?: number | undefined
    /**
     * Indicates the current "pressed" state of toggle buttons.
     *
     * @see aria-checked @see aria-selected.
     */
    "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined
    /**
     * Indicates that the element is not editable, but is otherwise operable.
     *
     * @see aria-disabled.
     */
    "aria-readonly"?: Booleanish | undefined
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within
     * a live region is modified.
     *
     * @see aria-atomic.
     */
    "aria-relevant"?:
        | "additions"
        | "additions removals"
        | "additions text"
        | "all"
        | "removals"
        | "removals additions"
        | "removals text"
        | "text"
        | "text additions"
        | "text removals"
        | undefined
    /** Indicates that user input is required on the element before a form may be submitted. */
    "aria-required"?: Booleanish | undefined
    /** Defines a human-readable, author-localized description for the role of an element. */
    "aria-roledescription"?: string | undefined
    /**
     * Defines the total number of rows in a table, grid, or treegrid.
     *
     * @see aria-rowindex.
     */
    "aria-rowcount"?: number | undefined
    /**
     * Defines an element's row index or position with respect to the total number of rows within a
     * table, grid, or treegrid.
     *
     * @see aria-rowcount @see aria-rowspan.
     */
    "aria-rowindex"?: number | undefined
    /**
     * Defines a human readable text alternative of aria-rowindex.
     *
     * @see aria-colindextext.
     */
    "aria-rowindextext"?: string | undefined
    /**
     * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
     *
     * @see aria-rowindex @see aria-colspan.
     */
    "aria-rowspan"?: number | undefined
    /**
     * Indicates the current "selected" state of various widgets.
     *
     * @see aria-checked @see aria-pressed.
     */
    "aria-selected"?: Booleanish | undefined
    /**
     * Defines the number of items in the current set of listitems or treeitems. Not required if
     * all elements in the set are present in the DOM.
     *
     * @see aria-posinset.
     */
    "aria-setsize"?: number | undefined
    /** Indicates if items in a table or grid are sorted in ascending or descending order. */
    "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined
    /** Defines the maximum allowed value for a range widget. */
    "aria-valuemax"?: number | undefined
    /** Defines the minimum allowed value for a range widget. */
    "aria-valuemin"?: number | undefined
    /**
     * Defines the current value for a range widget.
     *
     * @see aria-valuetext.
     */
    "aria-valuenow"?: number | undefined
    /** Defines the human readable text alternative of aria-valuenow for a range widget. */
    "aria-valuetext"?: string | undefined
}

export interface HTMLAttributes extends AriaAttributes, DOMAttributes {
    // Standard HTML Attributes
    accessKey?: string | undefined
    autoFocus?: boolean | undefined
    // className?: string | undefined
    class?: string | undefined
    contentEditable?: Booleanish | "inherit" | "plaintext-only" | undefined
    contextMenu?: string | undefined
    dir?: string | undefined
    draggable?: Booleanish | undefined
    hidden?: boolean | undefined
    id?: string | undefined
    lang?: string | undefined
    nonce?: string | undefined
    slot?: string | undefined
    spellCheck?: Booleanish | undefined
    style?: string | undefined
    tabIndex?: number | undefined
    title?: string | undefined
    translate?: "yes" | "no" | undefined

    // Unknown
    radioGroup?: string | undefined // <command>, <menuitem>

    // WAI-ARIA
    role?: AriaRole | undefined

    // RDFa Attributes
    about?: string | undefined
    content?: string | undefined
    datatype?: string | undefined
    inlist?: any
    prefix?: string | undefined
    property?: string | undefined
    rel?: string | undefined
    resource?: string | undefined
    rev?: string | undefined
    typeof?: string | undefined
    vocab?: string | undefined

    // Non-standard Attributes
    autoCapitalize?: string | undefined
    autoCorrect?: string | undefined
    autoSave?: string | undefined
    color?: string | undefined
    itemProp?: string | undefined
    itemScope?: boolean | undefined
    itemType?: string | undefined
    itemID?: string | undefined
    itemRef?: string | undefined
    results?: number | undefined
    security?: string | undefined
    unselectable?: "on" | "off" | undefined

    // Living Standard
    /**
     * Hints at the type of data that might be entered by the user while editing the element or its
     * contents
     *
     * @see {@link https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute}
     */
    inputMode?:
        | "none"
        | "text"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | "search"
        | undefined
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     *
     * @see {@link https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is}
     */
    is?: string | undefined
}

export interface AllHTMLAttributes extends HTMLAttributes {
    // Standard HTML Attributes
    accept?: string | undefined
    acceptCharset?: string | undefined
    action?: string | undefined
    allowFullScreen?: boolean | undefined
    allowTransparency?: boolean | undefined
    alt?: string | undefined
    as?: string | undefined
    async?: boolean | undefined
    autoComplete?: string | undefined
    autoPlay?: boolean | undefined
    cellPadding?: number | string | undefined
    cellSpacing?: number | string | undefined
    charSet?: string | undefined
    challenge?: string | undefined
    checked?: boolean | undefined
    cite?: string | undefined
    classID?: string | undefined
    cols?: number | undefined
    colSpan?: number | undefined
    controls?: boolean | undefined
    coords?: string | undefined
    crossOrigin?: CrossOrigin
    data?: string | undefined
    dateTime?: string | undefined
    default?: boolean | undefined
    defer?: boolean | undefined
    disabled?: boolean | undefined
    download?: any
    encType?: string | undefined
    form?: string | undefined
    formAction?: string | undefined

    formEncType?: string | undefined
    formMethod?: string | undefined
    formNoValidate?: boolean | undefined
    formTarget?: string | undefined
    frameBorder?: number | string | undefined
    headers?: string | undefined
    height?: number | string | undefined
    high?: number | undefined
    href?: string | undefined
    hrefLang?: string | undefined
    htmlFor?: string | undefined
    httpEquiv?: string | undefined
    integrity?: string | undefined
    keyParams?: string | undefined
    keyType?: string | undefined
    kind?: string | undefined
    label?: string | undefined
    list?: string | undefined
    loop?: boolean | undefined
    low?: number | undefined
    manifest?: string | undefined
    marginHeight?: number | undefined
    marginWidth?: number | undefined
    max?: number | string | undefined
    maxLength?: number | undefined
    media?: string | undefined
    mediaGroup?: string | undefined
    method?: string | undefined
    min?: number | string | undefined
    minLength?: number | undefined
    multiple?: boolean | undefined
    muted?: boolean | undefined
    name?: string | undefined
    noValidate?: boolean | undefined
    open?: boolean | undefined
    optimum?: number | undefined
    pattern?: string | undefined
    placeholder?: string | undefined
    playsInline?: boolean | undefined
    poster?: string | undefined
    preload?: string | undefined
    readOnly?: boolean | undefined
    required?: boolean | undefined
    reversed?: boolean | undefined
    rows?: number | undefined
    rowSpan?: number | undefined
    sandbox?: string | undefined
    scope?: string | undefined
    scoped?: boolean | undefined
    scrolling?: string | undefined
    seamless?: boolean | undefined
    selected?: boolean | undefined
    shape?: string | undefined
    size?: number | undefined
    sizes?: string | undefined
    span?: number | undefined
    src?: string | undefined
    srcDoc?: string | undefined
    srcLang?: string | undefined
    srcSet?: string | undefined
    start?: number | undefined
    step?: number | string | undefined
    summary?: string | undefined
    target?: string | undefined
    type?: string | undefined
    useMap?: string | undefined
    value?: string | number | undefined
    width?: number | string | undefined
    wmode?: string | undefined
    wrap?: string | undefined
}
