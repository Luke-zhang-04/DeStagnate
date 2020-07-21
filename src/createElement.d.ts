/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.4.0
 * @exports createElement
 */
export declare type ChildrenFlatArrayType = HTMLElement[] | string[] | number[] | Element[] | ((HTMLElement | Element) | string)[] | ((HTMLElement | Element) | number)[] | (string | number)[] | ((HTMLElement | Element) | string | number)[] | (HTMLElement | Element)[];
export declare type ChildrenArrayType = ChildrenFlatArrayType | ChildrenArrayType[];
/**
 * All types the children parameter can be
 */
export declare type ChildrenType = HTMLElement | string | number | ChildrenArrayType | Element;
/**
 * Binds children to element
 * @package
 * @param {Element} element - element to bind
 * @param {undefined | Object.<string, string | number>} props - props to bind with
 * @param {boolean} ns - if namespace element
 * @returns {void} void
 */
export declare const _bindProps: (element: Element, props?: {
    [key: string]: unknown;
} | undefined, ns?: boolean) => void;
export declare const _unpackChildren: (children: ChildrenArrayType) => ChildrenFlatArrayType;
/**
 * Binds children to element
 * @package
 * @param {Element} element - element to bind
 * @param {undefined | ChildrenType} children - children to bind with
 * @returns {void} void
 */
export declare const _bindChildren: (element: Element, children?: string | number | HTMLElement | Element | HTMLElement[] | Element[] | string[] | number[] | (string | HTMLElement | Element)[] | (number | HTMLElement | Element)[] | (string | number)[] | (string | number | HTMLElement | Element)[] | (HTMLElement | Element)[] | ChildrenArrayType[] | undefined) => void;
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties, such as class, innerHTML, id, style, etc
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - children of this element. Can be nothing, number (converted to string), string (text), or another element. An array of any of these will create multiple children
 * @param {...(HTMLElement | string | number)} childrenArgs - rest parameter of children
 * @returns {HTMLElement} html element
 */
declare const createElement: <T extends "object" | "a" | "abbr" | "address" | "applet" | "area" | "article" | "aside" | "audio" | "b" | "base" | "basefont" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "dir" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "font" | "footer" | "form" | "frame" | "frameset" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "marquee" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "slot" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr">(tagName: T, props?: {
    [key: string]: string | number;
} | undefined, children?: string | number | HTMLElement | Element | HTMLElement[] | Element[] | string[] | number[] | (string | HTMLElement | Element)[] | (number | HTMLElement | Element)[] | (string | number)[] | (string | number | HTMLElement | Element)[] | (HTMLElement | Element)[] | ChildrenArrayType[] | undefined, ...childrenArgs: ChildrenArrayType) => HTMLElementTagNameMap[T];
export default createElement;
