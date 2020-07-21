/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.4.0
 * @exports DeStagnate main destagnate class
 * @file main file for destagnate
 */
import Preset from "./_preset";
/**
 * DeStagnate
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 * @abstract
 */
export default abstract class DeStagnate<Props = Record<string, unknown>, State = Record<string, unknown>> extends Preset {
    protected props?: Props | undefined;
    /**
     * Creates a child element to deStagnate
     * @public
     * @static
     * @readonly
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */
    static readonly createElement: <T extends "object" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr">(tagName: T, props?: {
        [key: string]: string | number;
    } | undefined, children?: string | number | HTMLElement | Element | HTMLElement[] | Element[] | string[] | number[] | (string | HTMLElement | Element)[] | (number | HTMLElement | Element)[] | (string | number)[] | (string | number | HTMLElement | Element)[] | (HTMLElement | Element)[] | import("./createElement").ChildrenArrayType[] | undefined, ...childrenArgs: import("./createElement").ChildrenArrayType) => HTMLElementTagNameMap[T];
    /**
     * Creates a child element to deStagnate
     * @public
     * @static
     * @readonly
     * @param {string | null} namespaceURI - namespace uri
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
     * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
     * @returns {HTMLElement} html element
     */
    static readonly createElementNS: (namespaceURI: "symbol" | "a" | "script" | "style" | "title" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "svg" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg" | null, tagName: string, props?: {
        [key: string]: string | number;
    } | undefined, children?: string | number | HTMLElement | Element | HTMLElement[] | Element[] | string[] | number[] | (string | HTMLElement | Element)[] | (number | HTMLElement | Element)[] | (string | number)[] | (string | number | HTMLElement | Element)[] | (HTMLElement | Element)[] | import("./createElement").ChildrenArrayType[] | undefined, ...childrenArgs: import("./createElement").ChildrenArrayType) => Element;
    /**
     * Creates a child element to deStagnate
     * @public
     * @instance
     * @readonly
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
     * @returns {HTMLElement} html element
     */
    readonly createElement: <T extends "object" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr">(tagName: T, props?: {
        [key: string]: string | number;
    } | undefined, children?: string | number | HTMLElement | Element | HTMLElement[] | Element[] | string[] | number[] | (string | HTMLElement | Element)[] | (number | HTMLElement | Element)[] | (string | number)[] | (string | number | HTMLElement | Element)[] | (HTMLElement | Element)[] | import("./createElement").ChildrenArrayType[] | undefined, ...childrenArgs: import("./createElement").ChildrenArrayType) => HTMLElementTagNameMap[T];
    /**
     * Creates a child element to deStagnate
     * @public
     * @instance
     * @readonly
     * @param {string | null} namespaceURI - namespace uri
     * @param {string} tagName - name of HTML element
     * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
     * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
     * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
     * @returns {HTMLElement} html element
     */
    readonly createElementNS: (namespaceURI: "symbol" | "a" | "script" | "style" | "title" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "svg" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg" | null, tagName: string, props?: {
        [key: string]: string | number;
    } | undefined, children?: string | number | HTMLElement | Element | HTMLElement[] | Element[] | string[] | number[] | (string | HTMLElement | Element)[] | (number | HTMLElement | Element)[] | (string | number)[] | (string | number | HTMLElement | Element)[] | (HTMLElement | Element)[] | import("./createElement").ChildrenArrayType[] | undefined, ...childrenArgs: import("./createElement").ChildrenArrayType) => Element;
    /**
     * State of component. Works similar React State
     * @type {undefined | Object.<string, unknown>}
     * @private
     * @instance
     */
    private _state;
    /**
     * If initial state was set in initializer
     * Do not throw error with direct state setting
     * @type {boolean}
     * @private
     */
    private _didSetInitialState;
    /**
     * Parent that this element if bound to
     * @type {HTMLElement}
     * @private
     * @instance
     */
    private _parent;
    /**
     * Construct class component
     * @public
     * @constructor
     * @param {HTMLElement} parent - parent of this element
     * @param {undefined | Object.<string, string | number>} props - element properties; works like React Props
     */
    constructor(parent: HTMLElement, props?: Props | undefined);
    /**
     * What to call before component update (state mutation)
     * @public
     * @instance
     * @param {Props} prevProps - previous props
     * @param {State} prevState - previous state
     * @returns {void} void
     */
    getSnapshotBeforeUpdate: (prevProps: Props, prevState: State) => [Props, State];
    /**
     * Public getState getter as this.state itself is protected
     * @public
     * @instance
     * @returns {State} component state
     */
    get getState(): State;
    /**
     * Get component state
     * @protected
     * @instance
     * @returns {State} component state
     */
    protected get state(): State;
    /**
     * Sets component state
     * WARN: do not use this method to mutate the state directly
     * @protected
     * @instance
     * @param {State} obj - state to set
     */
    protected set state(obj: State);
    /**
     * Public getProps getter as this.props itself is protected
     * @public
     * @instance
     * @returns {Props | undefined} component state
     */
    get getProps(): Props | undefined;
    /**
     * Sets state
     * @public
     * @instance
     * @readonly
     * @param {Partial<State>} obj - state to set
     * @returns {void | Error} void
     */
    readonly setState: (obj: Partial<State>) => void | Error;
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {HTMLElement | Array.<HTMLElement> | error} - result of append child to parent element
     */
    readonly mountComponent: () => HTMLElement | HTMLElement[] | Element | Element[] | Error;
    /**
     * Initial mounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {HTMLElement} - result of append child to parent element
     */
    readonly mount: () => HTMLElement | HTMLElement[] | Element | Element[] | Error;
    /**
     * Unmounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {void} - void
     */
    readonly unmountComponent: () => void;
    /**
     * Unmounting to be manually called
     * @public
     * @instance
     * @readonly
     * @returns {void} - void
     */
    readonly unmount: () => void;
    /**
     * Removes children from this._parent
     * @private
     * @instance
     * @return {void} void
     */
    private _removeChildren;
    /**
     * Executes new render
     * @returns {HTMLElement | Array.<HTMLElement> | null} rendered content
     */
    private _execRender;
}
/**
 * Creates a child element to deStagnate
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @returns {HTMLElement} html element
 */
export declare const createElement: <T extends "object" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr">(tagName: T, props?: {
    [key: string]: string | number;
} | undefined, children?: string | number | HTMLElement | Element | HTMLElement[] | Element[] | string[] | number[] | (string | HTMLElement | Element)[] | (number | HTMLElement | Element)[] | (string | number)[] | (string | number | HTMLElement | Element)[] | (HTMLElement | Element)[] | import("./createElement").ChildrenArrayType[] | undefined, ...childrenArgs: import("./createElement").ChildrenArrayType) => HTMLElementTagNameMap[T];
/**
 * Creates a child element to deStagnate
 * @param {string | null} namespaceURI - namespace uri
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
export declare const createElementNS: (namespaceURI: "symbol" | "a" | "script" | "style" | "title" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "svg" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | "http://www.w3.org/1999/xhtml" | "http://www.w3.org/2000/svg" | null, tagName: string, props?: {
    [key: string]: string | number;
} | undefined, children?: string | number | HTMLElement | Element | HTMLElement[] | Element[] | string[] | number[] | (string | HTMLElement | Element)[] | (number | HTMLElement | Element)[] | (string | number)[] | (string | number | HTMLElement | Element)[] | (HTMLElement | Element)[] | import("./createElement").ChildrenArrayType[] | undefined, ...childrenArgs: import("./createElement").ChildrenArrayType) => Element;
