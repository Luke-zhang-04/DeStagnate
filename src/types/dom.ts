/* eslint-disable-next-line @typescript-eslint/naming-convention */
import type * as ReactTypes from "./react"

export interface HTMLAttributeTagNameMap {
    // HTML
    a: ReactTypes.AnchorHTMLAttributes
    abbr: ReactTypes.HTMLAttributes
    address: ReactTypes.HTMLAttributes
    area: ReactTypes.AreaHTMLAttributes
    article: ReactTypes.HTMLAttributes
    aside: ReactTypes.HTMLAttributes
    audio: ReactTypes.AudioHTMLAttributes
    b: ReactTypes.HTMLAttributes
    base: ReactTypes.BaseHTMLAttributes
    bdi: ReactTypes.HTMLAttributes
    bdo: ReactTypes.HTMLAttributes
    blockquote: ReactTypes.BlockquoteHTMLAttributes
    body: ReactTypes.HTMLAttributes
    br: ReactTypes.HTMLAttributes
    button: ReactTypes.ButtonHTMLAttributes
    canvas: ReactTypes.CanvasHTMLAttributes
    caption: ReactTypes.HTMLAttributes
    cite: ReactTypes.HTMLAttributes
    code: ReactTypes.HTMLAttributes
    col: ReactTypes.ColHTMLAttributes
    colgroup: ReactTypes.ColgroupHTMLAttributes
    data: ReactTypes.DataHTMLAttributes
    datalist: ReactTypes.HTMLAttributes
    dd: ReactTypes.HTMLAttributes
    del: ReactTypes.DelHTMLAttributes
    details: ReactTypes.DetailsHTMLAttributes
    dfn: ReactTypes.HTMLAttributes
    dialog: ReactTypes.DialogHTMLAttributes
    div: ReactTypes.HTMLAttributes
    dl: ReactTypes.HTMLAttributes
    dt: ReactTypes.HTMLAttributes
    em: ReactTypes.HTMLAttributes
    embed: ReactTypes.EmbedHTMLAttributes
    fieldset: ReactTypes.FieldsetHTMLAttributes
    figcaption: ReactTypes.HTMLAttributes
    figure: ReactTypes.HTMLAttributes
    footer: ReactTypes.HTMLAttributes
    form: ReactTypes.FormHTMLAttributes
    h1: ReactTypes.HTMLAttributes
    h2: ReactTypes.HTMLAttributes
    h3: ReactTypes.HTMLAttributes
    h4: ReactTypes.HTMLAttributes
    h5: ReactTypes.HTMLAttributes
    h6: ReactTypes.HTMLAttributes
    head: ReactTypes.HTMLAttributes
    header: ReactTypes.HTMLAttributes
    hgroup: ReactTypes.HTMLAttributes
    hr: ReactTypes.HTMLAttributes
    html: ReactTypes.HtmlHTMLAttributes
    i: ReactTypes.HTMLAttributes
    iframe: ReactTypes.IframeHTMLAttributes
    img: ReactTypes.ImgHTMLAttributes
    input: ReactTypes.InputHTMLAttributes
    ins: ReactTypes.InsHTMLAttributes
    kbd: ReactTypes.HTMLAttributes
    label: ReactTypes.LabelHTMLAttributes
    legend: ReactTypes.HTMLAttributes
    li: ReactTypes.LiHTMLAttributes
    link: ReactTypes.LinkHTMLAttributes
    main: ReactTypes.HTMLAttributes
    map: ReactTypes.MapHTMLAttributes
    mark: ReactTypes.HTMLAttributes
    menu: ReactTypes.MenuHTMLAttributes
    meta: ReactTypes.MetaHTMLAttributes
    meter: ReactTypes.MeterHTMLAttributes
    nav: ReactTypes.HTMLAttributes
    noscript: ReactTypes.HTMLAttributes
    object: ReactTypes.ObjectHTMLAttributes
    ol: ReactTypes.OlHTMLAttributes
    optgroup: ReactTypes.OptgroupHTMLAttributes
    option: ReactTypes.OptionHTMLAttributes
    output: ReactTypes.OutputHTMLAttributes
    p: ReactTypes.HTMLAttributes
    picture: ReactTypes.HTMLAttributes
    pre: ReactTypes.HTMLAttributes
    progress: ReactTypes.ProgressHTMLAttributes
    q: ReactTypes.QuoteHTMLAttributes
    rp: ReactTypes.HTMLAttributes
    rt: ReactTypes.HTMLAttributes
    ruby: ReactTypes.HTMLAttributes
    s: ReactTypes.HTMLAttributes
    samp: ReactTypes.HTMLAttributes
    search: ReactTypes.HTMLAttributes
    slot: ReactTypes.SlotHTMLAttributes
    script: ReactTypes.ScriptHTMLAttributes
    section: ReactTypes.HTMLAttributes
    select: ReactTypes.SelectHTMLAttributes
    small: ReactTypes.HTMLAttributes
    source: ReactTypes.SourceHTMLAttributes
    span: ReactTypes.HTMLAttributes
    strong: ReactTypes.HTMLAttributes
    style: ReactTypes.StyleHTMLAttributes
    sub: ReactTypes.HTMLAttributes
    summary: ReactTypes.HTMLAttributes
    sup: ReactTypes.HTMLAttributes
    table: ReactTypes.TableHTMLAttributes
    template: ReactTypes.HTMLAttributes
    tbody: ReactTypes.HTMLAttributes
    td: ReactTypes.TdHTMLAttributes
    textarea: ReactTypes.TextareaHTMLAttributes
    tfoot: ReactTypes.HTMLAttributes
    th: ReactTypes.ThHTMLAttributes
    thead: ReactTypes.HTMLAttributes
    time: ReactTypes.TimeHTMLAttributes
    title: ReactTypes.HTMLAttributes
    tr: ReactTypes.HTMLAttributes
    track: ReactTypes.TrackHTMLAttributes
    u: ReactTypes.HTMLAttributes
    ul: ReactTypes.HTMLAttributes
    var: ReactTypes.HTMLAttributes
    video: ReactTypes.VideoHTMLAttributes
    wbr: ReactTypes.HTMLAttributes
}

export interface HTMLAttributeDeprecatedTagNameMap {
    // Deprecated tags
    /** @deprecated */
    acronym: ReactTypes.HTMLAttributes
    /** @deprecated */
    applet: ReactTypes.HTMLAttributes
    /** @deprecated */
    basefont: ReactTypes.HTMLAttributes
    /** @deprecated */
    bgsound: ReactTypes.HTMLAttributes
    /** @deprecated */
    big: ReactTypes.HTMLAttributes
    /** @deprecated */
    blink: ReactTypes.HTMLAttributes
    /** @deprecated */
    center: ReactTypes.HTMLAttributes
    /** @deprecated */
    dir: ReactTypes.HTMLAttributes
    /** @deprecated */
    font: ReactTypes.HTMLAttributes
    /** @deprecated */
    frame: ReactTypes.HTMLAttributes
    /** @deprecated */
    frameset: ReactTypes.HTMLAttributes
    /** @deprecated */
    isindex: ReactTypes.HTMLAttributes
    /** @deprecated */
    keygen: ReactTypes.KeygenHTMLAttributes
    /** @deprecated */
    listing: ReactTypes.HTMLAttributes
    /** @deprecated */
    marquee: ReactTypes.HTMLAttributes
    /** @deprecated */
    menuitem: ReactTypes.HTMLAttributes
    /** @deprecated */
    multicol: ReactTypes.HTMLAttributes
    /** @deprecated */
    nextid: ReactTypes.HTMLAttributes
    /** @deprecated */
    nobr: ReactTypes.HTMLAttributes
    /** @deprecated */
    noembed: ReactTypes.HTMLAttributes
    /** @deprecated */
    noframes: ReactTypes.HTMLAttributes
    /** @deprecated */
    param: ReactTypes.ParamHTMLAttributes
    /** @deprecated */
    plaintext: ReactTypes.HTMLAttributes
    /** @deprecated */
    rb: ReactTypes.HTMLAttributes
    /** @deprecated */
    rtc: ReactTypes.HTMLAttributes
    /** @deprecated */
    spacer: ReactTypes.HTMLAttributes
    /** @deprecated */
    strike: ReactTypes.HTMLAttributes
    /** @deprecated */
    tt: ReactTypes.HTMLAttributes
    /** @deprecated */
    xmp: ReactTypes.HTMLAttributes
}

export interface ElementAttributes extends ReactTypes.AriaAttributes, ReactTypes.DOMAttributes {}
