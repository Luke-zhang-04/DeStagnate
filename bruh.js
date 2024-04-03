const dom = [
    "abort",
    "animationcancel",
    "animationend",
    "animationiteration",
    "animationstart",
    "auxclick",
    "beforeinput",
    "blur",
    "cancel",
    "canplay",
    "canplaythrough",
    "change",
    "click",
    "close",
    "compositionend",
    "compositionstart",
    "compositionupdate",
    "contextmenu",
    "copy",
    "cuechange",
    "cut",
    "dblclick",
    "drag",
    "dragend",
    "dragenter",
    "dragleave",
    "dragover",
    "dragstart",
    "drop",
    "durationchange",
    "emptied",
    "ended",
    "error",
    "focus",
    "focusin",
    "focusout",
    "formdata",
    "gotpointercapture",
    "input",
    "invalid",
    "keydown",
    "keypress",
    "keyup",
    "load",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "lostpointercapture",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "paste",
    "pause",
    "play",
    "playing",
    "pointercancel",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "progress",
    "ratechange",
    "reset",
    "resize",
    "scroll",
    "scrollend",
    "securitypolicyviolation",
    "seeked",
    "seeking",
    "select",
    "selectionchange",
    "selectstart",
    "slotchange",
    "stalled",
    "submit",
    "suspend",
    "timeupdate",
    "toggle",
    "touchcancel",
    "touchend",
    "touchmove",
    "touchstart",
    "transitioncancel",
    "transitionend",
    "transitionrun",
    "transitionstart",
    "volumechange",
    "waiting",
    "webkitanimationend",
    "webkitanimationiteration",
    "webkitanimationstart",
    "webkittransitionend",
    "wheel",
]

const react = [
    // Clipboard Events
    "onCopy",
    "onCut",
    "onPaste",

    // Composition Events
    "onCompositionEnd",
    "onCompositionStart",
    "onCompositionUpdate",

    // Focus Events
    "onFocus",
    "onBlur",

    // Form Events
    "onChange",
    "onBeforeInput",
    "onInput",
    "onReset",
    "onSubmit",
    "onInvalid",

    // Image Events
    "onLoad",
    "onError",

    // Keyboard Events
    "onKeyDown",
    /** @deprecated */
    "onKeyPress",
    /** @deprecated */
    "onKeyUp",

    // Media Events
    "onAbort",
    "onCanPlay",
    "onCanPlayThrough",
    "onDurationChange",
    "onEmptied",
    "onEncrypted",
    "onEnded",
    "onLoadedData",
    "onLoadedMetadata",
    "onLoadStart",
    "onPause",
    "onPlay",
    "onPlaying",
    "onProgress",
    "onRateChange",
    "onResize",
    "onSeeked",
    "onSeeking",
    "onStalled",
    "onSuspend",
    "onTimeUpdate",
    "onVolumeChange",
    "onWaiting",

    // MouseEvents
    "onAuxClick",
    "onClick",
    "onContextMenu",
    "onDblClick",
    "onDrag",
    "onDragEnd",
    "onDragEnter",
    "onDragLeave",
    "onDragOver",
    "onDragStart",
    "onDrop",
    "onMouseDown",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseMove",
    "onMouseOut",
    "onMouseOver",
    "onMouseUp",

    // Selection Events
    "onSelect",

    // Touch Events
    "onTouchCancel",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",

    // Pointer Events
    "onPointerDown",
    "onPointerMove",
    "onPointerUp",
    "onPointerCancel",
    "onPointerEnter",
    "onPointerLeave",
    "onPointerOver",
    "onPointerOut",

    // UI Events
    "onScroll",

    // Wheel Events
    "onWheel",

    // Animation Events
    "onAnimationStart",
    "onAnimationEnd",
    "onAnimationIteration",

    // Transition Events
    "onTransitionEnd",
].map((e) => e.slice(2).toLowerCase())

console.log(react.filter((e) => !dom.includes(e)))
console.log(dom.filter((e) => !react.includes(e)))
