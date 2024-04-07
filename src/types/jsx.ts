import type {ElementProps, HTMLDeprecatedElementProps, HTMLElementProps, PropsWithChildren, SVGElementProps, XHTMLElementProps} from "."
import {NamespaceURIMap} from "../createElementNS"

/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/naming-convention */

declare global {
    /** JSX typings */
    namespace JSX {
        // https://github.com/microsoft/TypeScript/issues/21699
        // eslint-disable-next-line
        interface Element extends Node {}

        interface IntrinsicElements {
            [key: `${Exclude<keyof NamespaceURIMap, "svg" | "xhtml" | "mathML">}:${string}`]: PropsWithChildren<ElementProps>

            // HTML
            a: PropsWithChildren<HTMLElementProps<"a">>
            abbr: PropsWithChildren<HTMLElementProps<"abbr">>
            address: PropsWithChildren<HTMLElementProps<"address">>
            area: PropsWithChildren<HTMLElementProps<"area">>
            article: PropsWithChildren<HTMLElementProps<"article">>
            aside: PropsWithChildren<HTMLElementProps<"aside">>
            audio: PropsWithChildren<HTMLElementProps<"audio">>
            b: PropsWithChildren<HTMLElementProps<"b">>
            base: PropsWithChildren<HTMLElementProps<"base">>
            bdi: PropsWithChildren<HTMLElementProps<"bdi">>
            bdo: PropsWithChildren<HTMLElementProps<"bdo">>
            blockquote: PropsWithChildren<HTMLElementProps<"blockquote">>
            body: PropsWithChildren<HTMLElementProps<"body">>
            br: PropsWithChildren<HTMLElementProps<"br">>
            button: PropsWithChildren<HTMLElementProps<"button">>
            canvas: PropsWithChildren<HTMLElementProps<"canvas">>
            caption: PropsWithChildren<HTMLElementProps<"caption">>
            cite: PropsWithChildren<HTMLElementProps<"cite">>
            code: PropsWithChildren<HTMLElementProps<"code">>
            col: PropsWithChildren<HTMLElementProps<"col">>
            colgroup: PropsWithChildren<HTMLElementProps<"colgroup">>
            data: PropsWithChildren<HTMLElementProps<"data">>
            datalist: PropsWithChildren<HTMLElementProps<"datalist">>
            dd: PropsWithChildren<HTMLElementProps<"dd">>
            del: PropsWithChildren<HTMLElementProps<"del">>
            details: PropsWithChildren<HTMLElementProps<"details">>
            dfn: PropsWithChildren<HTMLElementProps<"dfn">>
            dialog: PropsWithChildren<HTMLElementProps<"dialog">>
            div: PropsWithChildren<HTMLElementProps<"div">>
            dl: PropsWithChildren<HTMLElementProps<"dl">>
            dt: PropsWithChildren<HTMLElementProps<"dt">>
            em: PropsWithChildren<HTMLElementProps<"em">>
            embed: PropsWithChildren<HTMLElementProps<"embed">>
            fieldset: PropsWithChildren<HTMLElementProps<"fieldset">>
            figcaption: PropsWithChildren<HTMLElementProps<"figcaption">>
            figure: PropsWithChildren<HTMLElementProps<"figure">>
            footer: PropsWithChildren<HTMLElementProps<"footer">>
            form: PropsWithChildren<HTMLElementProps<"form">>
            h1: PropsWithChildren<HTMLElementProps<"h1">>
            h2: PropsWithChildren<HTMLElementProps<"h2">>
            h3: PropsWithChildren<HTMLElementProps<"h3">>
            h4: PropsWithChildren<HTMLElementProps<"h4">>
            h5: PropsWithChildren<HTMLElementProps<"h5">>
            h6: PropsWithChildren<HTMLElementProps<"h6">>
            head: PropsWithChildren<HTMLElementProps<"head">>
            header: PropsWithChildren<HTMLElementProps<"header">>
            hgroup: PropsWithChildren<HTMLElementProps<"hgroup">>
            hr: PropsWithChildren<HTMLElementProps<"hr">>
            html: PropsWithChildren<HTMLElementProps<"html">>
            i: PropsWithChildren<HTMLElementProps<"i">>
            iframe: PropsWithChildren<HTMLElementProps<"iframe">>
            img: PropsWithChildren<HTMLElementProps<"img">>
            input: PropsWithChildren<HTMLElementProps<"input">>
            ins: PropsWithChildren<HTMLElementProps<"ins">>
            kbd: PropsWithChildren<HTMLElementProps<"kbd">>
            label: PropsWithChildren<HTMLElementProps<"label">>
            legend: PropsWithChildren<HTMLElementProps<"legend">>
            li: PropsWithChildren<HTMLElementProps<"li">>
            link: PropsWithChildren<HTMLElementProps<"link">>
            main: PropsWithChildren<HTMLElementProps<"main">>
            map: PropsWithChildren<HTMLElementProps<"map">>
            mark: PropsWithChildren<HTMLElementProps<"mark">>
            menu: PropsWithChildren<HTMLElementProps<"menu">>
            meta: PropsWithChildren<HTMLElementProps<"meta">>
            meter: PropsWithChildren<HTMLElementProps<"meter">>
            nav: PropsWithChildren<HTMLElementProps<"nav">>
            noscript: PropsWithChildren<HTMLElementProps<"noscript">>
            object: PropsWithChildren<HTMLElementProps<"object">>
            ol: PropsWithChildren<HTMLElementProps<"ol">>
            optgroup: PropsWithChildren<HTMLElementProps<"optgroup">>
            option: PropsWithChildren<HTMLElementProps<"option">>
            output: PropsWithChildren<HTMLElementProps<"output">>
            p: PropsWithChildren<HTMLElementProps<"p">>
            picture: PropsWithChildren<HTMLElementProps<"picture">>
            pre: PropsWithChildren<HTMLElementProps<"pre">>
            progress: PropsWithChildren<HTMLElementProps<"progress">>
            q: PropsWithChildren<HTMLElementProps<"q">>
            rp: PropsWithChildren<HTMLElementProps<"rp">>
            rt: PropsWithChildren<HTMLElementProps<"rt">>
            ruby: PropsWithChildren<HTMLElementProps<"ruby">>
            s: PropsWithChildren<HTMLElementProps<"s">>
            samp: PropsWithChildren<HTMLElementProps<"samp">>
            search: PropsWithChildren<HTMLElementProps<"search">>
            slot: PropsWithChildren<HTMLElementProps<"slot">>
            script: PropsWithChildren<HTMLElementProps<"script">>
            section: PropsWithChildren<HTMLElementProps<"section">>
            select: PropsWithChildren<HTMLElementProps<"select">>
            small: PropsWithChildren<HTMLElementProps<"small">>
            source: PropsWithChildren<HTMLElementProps<"source">>
            span: PropsWithChildren<HTMLElementProps<"span">>
            strong: PropsWithChildren<HTMLElementProps<"strong">>
            style: PropsWithChildren<HTMLElementProps<"style">>
            sub: PropsWithChildren<HTMLElementProps<"sub">>
            summary: PropsWithChildren<HTMLElementProps<"summary">>
            sup: PropsWithChildren<HTMLElementProps<"sup">>
            table: PropsWithChildren<HTMLElementProps<"table">>
            template: PropsWithChildren<HTMLElementProps<"template">>
            tbody: PropsWithChildren<HTMLElementProps<"tbody">>
            td: PropsWithChildren<HTMLElementProps<"td">>
            textarea: PropsWithChildren<HTMLElementProps<"textarea">>
            tfoot: PropsWithChildren<HTMLElementProps<"tfoot">>
            th: PropsWithChildren<HTMLElementProps<"th">>
            thead: PropsWithChildren<HTMLElementProps<"thead">>
            time: PropsWithChildren<HTMLElementProps<"time">>
            title: PropsWithChildren<HTMLElementProps<"title">>
            tr: PropsWithChildren<HTMLElementProps<"tr">>
            track: PropsWithChildren<HTMLElementProps<"track">>
            u: PropsWithChildren<HTMLElementProps<"u">>
            ul: PropsWithChildren<HTMLElementProps<"ul">>
            var: PropsWithChildren<HTMLElementProps<"var">>
            video: PropsWithChildren<HTMLElementProps<"video">>
            wbr: PropsWithChildren<HTMLElementProps<"wbr">>

            // Deprecated tags
            /** @deprecated */
            acronym: PropsWithChildren<HTMLDeprecatedElementProps<"acronym">>
            /** @deprecated */
            applet: PropsWithChildren<HTMLDeprecatedElementProps<"applet">>
            /** @deprecated */
            basefont: PropsWithChildren<HTMLDeprecatedElementProps<"basefont">>
            /** @deprecated */
            bgsound: PropsWithChildren<HTMLDeprecatedElementProps<"bgsound">>
            /** @deprecated */
            big: PropsWithChildren<HTMLDeprecatedElementProps<"big">>
            /** @deprecated */
            blink: PropsWithChildren<HTMLDeprecatedElementProps<"blink">>
            /** @deprecated */
            center: PropsWithChildren<HTMLDeprecatedElementProps<"center">>
            /** @deprecated */
            dir: PropsWithChildren<HTMLDeprecatedElementProps<"dir">>
            /** @deprecated */
            font: PropsWithChildren<HTMLDeprecatedElementProps<"font">>
            /** @deprecated */
            frame: PropsWithChildren<HTMLDeprecatedElementProps<"frame">>
            /** @deprecated */
            frameset: PropsWithChildren<HTMLDeprecatedElementProps<"frameset">>
            /** @deprecated */
            isindex: PropsWithChildren<HTMLDeprecatedElementProps<"isindex">>
            /** @deprecated */
            keygen: PropsWithChildren<HTMLDeprecatedElementProps<"keygen">>
            /** @deprecated */
            listing: PropsWithChildren<HTMLDeprecatedElementProps<"listing">>
            /** @deprecated */
            marquee: PropsWithChildren<HTMLDeprecatedElementProps<"marquee">>
            /** @deprecated */
            menuitem: PropsWithChildren<HTMLDeprecatedElementProps<"menuitem">>
            /** @deprecated */
            multicol: PropsWithChildren<HTMLDeprecatedElementProps<"multicol">>
            /** @deprecated */
            nextid: PropsWithChildren<HTMLDeprecatedElementProps<"nextid">>
            /** @deprecated */
            nobr: PropsWithChildren<HTMLDeprecatedElementProps<"nobr">>
            /** @deprecated */
            noembed: PropsWithChildren<HTMLDeprecatedElementProps<"noembed">>
            /** @deprecated */
            noframes: PropsWithChildren<HTMLDeprecatedElementProps<"noframes">>
            /** @deprecated */
            param: PropsWithChildren<HTMLDeprecatedElementProps<"param">>
            /** @deprecated */
            plaintext: PropsWithChildren<HTMLDeprecatedElementProps<"plaintext">>
            /** @deprecated */
            rb: PropsWithChildren<HTMLDeprecatedElementProps<"rb">>
            /** @deprecated */
            rtc: PropsWithChildren<HTMLDeprecatedElementProps<"rtc">>
            /** @deprecated */
            spacer: PropsWithChildren<HTMLDeprecatedElementProps<"spacer">>
            /** @deprecated */
            strike: PropsWithChildren<HTMLDeprecatedElementProps<"strike">>
            /** @deprecated */
            tt: PropsWithChildren<HTMLDeprecatedElementProps<"tt">>
            /** @deprecated */
            xmp: PropsWithChildren<HTMLDeprecatedElementProps<"xmp">>

            "svg:a": PropsWithChildren<SVGElementProps<"a">>
            "svg:animate": PropsWithChildren<SVGElementProps<"animate">>
            "svg:animateMotion": PropsWithChildren<SVGElementProps<"animateMotion">>
            "svg:animateTransform": PropsWithChildren<SVGElementProps<"animateTransform">>
            "svg:circle": PropsWithChildren<SVGElementProps<"circle">>
            "svg:clipPath": PropsWithChildren<SVGElementProps<"clipPath">>
            "svg:defs": PropsWithChildren<SVGElementProps<"defs">>
            "svg:desc": PropsWithChildren<SVGElementProps<"desc">>
            "svg:ellipse": PropsWithChildren<SVGElementProps<"ellipse">>
            "svg:feBlend": PropsWithChildren<SVGElementProps<"feBlend">>
            "svg:feColorMatrix": PropsWithChildren<SVGElementProps<"feColorMatrix">>
            "svg:feComponentTransfer": PropsWithChildren<SVGElementProps<"feComponentTransfer">>
            "svg:feComposite": PropsWithChildren<SVGElementProps<"feComposite">>
            "svg:feConvolveMatrix": PropsWithChildren<SVGElementProps<"feConvolveMatrix">>
            "svg:feDiffuseLighting": PropsWithChildren<SVGElementProps<"feDiffuseLighting">>
            "svg:feDisplacementMap": PropsWithChildren<SVGElementProps<"feDisplacementMap">>
            "svg:feDistantLight": PropsWithChildren<SVGElementProps<"feDistantLight">>
            "svg:feDropShadow": PropsWithChildren<SVGElementProps<"feDropShadow">>
            "svg:feFlood": PropsWithChildren<SVGElementProps<"feFlood">>
            "svg:feFuncA": PropsWithChildren<SVGElementProps<"feFuncA">>
            "svg:feFuncB": PropsWithChildren<SVGElementProps<"feFuncB">>
            "svg:feFuncG": PropsWithChildren<SVGElementProps<"feFuncG">>
            "svg:feFuncR": PropsWithChildren<SVGElementProps<"feFuncR">>
            "svg:feGaussianBlur": PropsWithChildren<SVGElementProps<"feGaussianBlur">>
            "svg:feImage": PropsWithChildren<SVGElementProps<"feImage">>
            "svg:feMerge": PropsWithChildren<SVGElementProps<"feMerge">>
            "svg:feMergeNode": PropsWithChildren<SVGElementProps<"feMergeNode">>
            "svg:feMorphology": PropsWithChildren<SVGElementProps<"feMorphology">>
            "svg:feOffset": PropsWithChildren<SVGElementProps<"feOffset">>
            "svg:fePointLight": PropsWithChildren<SVGElementProps<"fePointLight">>
            "svg:feSpecularLighting": PropsWithChildren<SVGElementProps<"feSpecularLighting">>
            "svg:feSpotLight": PropsWithChildren<SVGElementProps<"feSpotLight">>
            "svg:feTile": PropsWithChildren<SVGElementProps<"feTile">>
            "svg:feTurbulence": PropsWithChildren<SVGElementProps<"feTurbulence">>
            "svg:filter": PropsWithChildren<SVGElementProps<"filter">>
            "svg:foreignObject": PropsWithChildren<SVGElementProps<"foreignObject">>
            "svg:g": PropsWithChildren<SVGElementProps<"g">>
            "svg:image": PropsWithChildren<SVGElementProps<"image">>
            "svg:line": PropsWithChildren<SVGElementProps<"line">>
            "svg:linearGradient": PropsWithChildren<SVGElementProps<"linearGradient">>
            "svg:marker": PropsWithChildren<SVGElementProps<"marker">>
            "svg:mask": PropsWithChildren<SVGElementProps<"mask">>
            "svg:metadata": PropsWithChildren<SVGElementProps<"metadata">>
            "svg:mpath": PropsWithChildren<SVGElementProps<"mpath">>
            "svg:path": PropsWithChildren<SVGElementProps<"path">>
            "svg:pattern": PropsWithChildren<SVGElementProps<"pattern">>
            "svg:polygon": PropsWithChildren<SVGElementProps<"polygon">>
            "svg:polyline": PropsWithChildren<SVGElementProps<"polyline">>
            "svg:radialGradient": PropsWithChildren<SVGElementProps<"radialGradient">>
            "svg:rect": PropsWithChildren<SVGElementProps<"rect">>
            "svg:script": PropsWithChildren<SVGElementProps<"script">>
            "svg:set": PropsWithChildren<SVGElementProps<"set">>
            "svg:stop": PropsWithChildren<SVGElementProps<"stop">>
            "svg:style": PropsWithChildren<SVGElementProps<"style">>
            "svg:svg": PropsWithChildren<SVGElementProps<"svg">>
            "svg:switch": PropsWithChildren<SVGElementProps<"switch">>
            "svg:symbol": PropsWithChildren<SVGElementProps<"symbol">>
            "svg:text": PropsWithChildren<SVGElementProps<"text">>
            "svg:textPath": PropsWithChildren<SVGElementProps<"textPath">>
            "svg:title": PropsWithChildren<SVGElementProps<"title">>
            "svg:tspan": PropsWithChildren<SVGElementProps<"tspan">>
            "svg:use": PropsWithChildren<SVGElementProps<"use">>
            "svg:view": PropsWithChildren<SVGElementProps<"view">>

            // HTML
            "xhtml:a": PropsWithChildren<XHTMLElementProps<"a">>
            "xhtml:abbr": PropsWithChildren<XHTMLElementProps<"abbr">>
            "xhtml:address": PropsWithChildren<XHTMLElementProps<"address">>
            "xhtml:area": PropsWithChildren<XHTMLElementProps<"area">>
            "xhtml:article": PropsWithChildren<XHTMLElementProps<"article">>
            "xhtml:aside": PropsWithChildren<XHTMLElementProps<"aside">>
            "xhtml:audio": PropsWithChildren<XHTMLElementProps<"audio">>
            "xhtml:b": PropsWithChildren<XHTMLElementProps<"b">>
            "xhtml:base": PropsWithChildren<XHTMLElementProps<"base">>
            "xhtml:bdi": PropsWithChildren<XHTMLElementProps<"bdi">>
            "xhtml:bdo": PropsWithChildren<XHTMLElementProps<"bdo">>
            "xhtml:blockquote": PropsWithChildren<XHTMLElementProps<"blockquote">>
            "xhtml:body": PropsWithChildren<XHTMLElementProps<"body">>
            "xhtml:br": PropsWithChildren<XHTMLElementProps<"br">>
            "xhtml:button": PropsWithChildren<XHTMLElementProps<"button">>
            "xhtml:canvas": PropsWithChildren<XHTMLElementProps<"canvas">>
            "xhtml:caption": PropsWithChildren<XHTMLElementProps<"caption">>
            "xhtml:cite": PropsWithChildren<XHTMLElementProps<"cite">>
            "xhtml:code": PropsWithChildren<XHTMLElementProps<"code">>
            "xhtml:col": PropsWithChildren<XHTMLElementProps<"col">>
            "xhtml:colgroup": PropsWithChildren<XHTMLElementProps<"colgroup">>
            "xhtml:data": PropsWithChildren<XHTMLElementProps<"data">>
            "xhtml:datalist": PropsWithChildren<XHTMLElementProps<"datalist">>
            "xhtml:dd": PropsWithChildren<XHTMLElementProps<"dd">>
            "xhtml:del": PropsWithChildren<XHTMLElementProps<"del">>
            "xhtml:details": PropsWithChildren<XHTMLElementProps<"details">>
            "xhtml:dfn": PropsWithChildren<XHTMLElementProps<"dfn">>
            "xhtml:dialog": PropsWithChildren<XHTMLElementProps<"dialog">>
            "xhtml:div": PropsWithChildren<XHTMLElementProps<"div">>
            "xhtml:dl": PropsWithChildren<XHTMLElementProps<"dl">>
            "xhtml:dt": PropsWithChildren<XHTMLElementProps<"dt">>
            "xhtml:em": PropsWithChildren<XHTMLElementProps<"em">>
            "xhtml:embed": PropsWithChildren<XHTMLElementProps<"embed">>
            "xhtml:fieldset": PropsWithChildren<XHTMLElementProps<"fieldset">>
            "xhtml:figcaption": PropsWithChildren<XHTMLElementProps<"figcaption">>
            "xhtml:figure": PropsWithChildren<XHTMLElementProps<"figure">>
            "xhtml:footer": PropsWithChildren<XHTMLElementProps<"footer">>
            "xhtml:form": PropsWithChildren<XHTMLElementProps<"form">>
            "xhtml:h1": PropsWithChildren<XHTMLElementProps<"h1">>
            "xhtml:h2": PropsWithChildren<XHTMLElementProps<"h2">>
            "xhtml:h3": PropsWithChildren<XHTMLElementProps<"h3">>
            "xhtml:h4": PropsWithChildren<XHTMLElementProps<"h4">>
            "xhtml:h5": PropsWithChildren<XHTMLElementProps<"h5">>
            "xhtml:h6": PropsWithChildren<XHTMLElementProps<"h6">>
            "xhtml:head": PropsWithChildren<XHTMLElementProps<"head">>
            "xhtml:header": PropsWithChildren<XHTMLElementProps<"header">>
            "xhtml:hgroup": PropsWithChildren<XHTMLElementProps<"hgroup">>
            "xhtml:hr": PropsWithChildren<XHTMLElementProps<"hr">>
            "xhtml:html": PropsWithChildren<XHTMLElementProps<"html">>
            "xhtml:i": PropsWithChildren<XHTMLElementProps<"i">>
            "xhtml:iframe": PropsWithChildren<XHTMLElementProps<"iframe">>
            "xhtml:img": PropsWithChildren<XHTMLElementProps<"img">>
            "xhtml:input": PropsWithChildren<XHTMLElementProps<"input">>
            "xhtml:ins": PropsWithChildren<XHTMLElementProps<"ins">>
            "xhtml:kbd": PropsWithChildren<XHTMLElementProps<"kbd">>
            "xhtml:label": PropsWithChildren<XHTMLElementProps<"label">>
            "xhtml:legend": PropsWithChildren<XHTMLElementProps<"legend">>
            "xhtml:li": PropsWithChildren<XHTMLElementProps<"li">>
            "xhtml:link": PropsWithChildren<XHTMLElementProps<"link">>
            "xhtml:main": PropsWithChildren<XHTMLElementProps<"main">>
            "xhtml:map": PropsWithChildren<XHTMLElementProps<"map">>
            "xhtml:mark": PropsWithChildren<XHTMLElementProps<"mark">>
            "xhtml:menu": PropsWithChildren<XHTMLElementProps<"menu">>
            "xhtml:meta": PropsWithChildren<XHTMLElementProps<"meta">>
            "xhtml:meter": PropsWithChildren<XHTMLElementProps<"meter">>
            "xhtml:nav": PropsWithChildren<XHTMLElementProps<"nav">>
            "xhtml:noscript": PropsWithChildren<XHTMLElementProps<"noscript">>
            "xhtml:object": PropsWithChildren<XHTMLElementProps<"object">>
            "xhtml:ol": PropsWithChildren<XHTMLElementProps<"ol">>
            "xhtml:optgroup": PropsWithChildren<XHTMLElementProps<"optgroup">>
            "xhtml:option": PropsWithChildren<XHTMLElementProps<"option">>
            "xhtml:output": PropsWithChildren<XHTMLElementProps<"output">>
            "xhtml:p": PropsWithChildren<XHTMLElementProps<"p">>
            "xhtml:picture": PropsWithChildren<XHTMLElementProps<"picture">>
            "xhtml:pre": PropsWithChildren<XHTMLElementProps<"pre">>
            "xhtml:progress": PropsWithChildren<XHTMLElementProps<"progress">>
            "xhtml:q": PropsWithChildren<XHTMLElementProps<"q">>
            "xhtml:rp": PropsWithChildren<XHTMLElementProps<"rp">>
            "xhtml:rt": PropsWithChildren<XHTMLElementProps<"rt">>
            "xhtml:ruby": PropsWithChildren<XHTMLElementProps<"ruby">>
            "xhtml:s": PropsWithChildren<XHTMLElementProps<"s">>
            "xhtml:samp": PropsWithChildren<XHTMLElementProps<"samp">>
            "xhtml:search": PropsWithChildren<XHTMLElementProps<"search">>
            "xhtml:slot": PropsWithChildren<XHTMLElementProps<"slot">>
            "xhtml:script": PropsWithChildren<XHTMLElementProps<"script">>
            "xhtml:section": PropsWithChildren<XHTMLElementProps<"section">>
            "xhtml:select": PropsWithChildren<XHTMLElementProps<"select">>
            "xhtml:small": PropsWithChildren<XHTMLElementProps<"small">>
            "xhtml:source": PropsWithChildren<XHTMLElementProps<"source">>
            "xhtml:span": PropsWithChildren<XHTMLElementProps<"span">>
            "xhtml:strong": PropsWithChildren<XHTMLElementProps<"strong">>
            "xhtml:style": PropsWithChildren<XHTMLElementProps<"style">>
            "xhtml:sub": PropsWithChildren<XHTMLElementProps<"sub">>
            "xhtml:summary": PropsWithChildren<XHTMLElementProps<"summary">>
            "xhtml:sup": PropsWithChildren<XHTMLElementProps<"sup">>
            "xhtml:table": PropsWithChildren<XHTMLElementProps<"table">>
            "xhtml:template": PropsWithChildren<XHTMLElementProps<"template">>
            "xhtml:tbody": PropsWithChildren<XHTMLElementProps<"tbody">>
            "xhtml:td": PropsWithChildren<XHTMLElementProps<"td">>
            "xhtml:textarea": PropsWithChildren<XHTMLElementProps<"textarea">>
            "xhtml:tfoot": PropsWithChildren<XHTMLElementProps<"tfoot">>
            "xhtml:th": PropsWithChildren<XHTMLElementProps<"th">>
            "xhtml:thead": PropsWithChildren<XHTMLElementProps<"thead">>
            "xhtml:time": PropsWithChildren<XHTMLElementProps<"time">>
            "xhtml:title": PropsWithChildren<XHTMLElementProps<"title">>
            "xhtml:tr": PropsWithChildren<XHTMLElementProps<"tr">>
            "xhtml:track": PropsWithChildren<XHTMLElementProps<"track">>
            "xhtml:u": PropsWithChildren<XHTMLElementProps<"u">>
            "xhtml:ul": PropsWithChildren<XHTMLElementProps<"ul">>
            "xhtml:var": PropsWithChildren<XHTMLElementProps<"var">>
            "xhtml:video": PropsWithChildren<XHTMLElementProps<"video">>
            "xhtml:wbr": PropsWithChildren<XHTMLElementProps<"wbr">>

            // Deprecated tags
            /** @deprecated */
            "xhtml:acronym": PropsWithChildren<XHTMLElementProps<"acronym">>
            /** @deprecated */
            "xhtml:applet": PropsWithChildren<XHTMLElementProps<"applet">>
            /** @deprecated */
            "xhtml:basefont": PropsWithChildren<XHTMLElementProps<"basefont">>
            /** @deprecated */
            "xhtml:bgsound": PropsWithChildren<XHTMLElementProps<"bgsound">>
            /** @deprecated */
            "xhtml:big": PropsWithChildren<XHTMLElementProps<"big">>
            /** @deprecated */
            "xhtml:blink": PropsWithChildren<XHTMLElementProps<"blink">>
            /** @deprecated */
            "xhtml:center": PropsWithChildren<XHTMLElementProps<"center">>
            /** @deprecated */
            "xhtml:dir": PropsWithChildren<XHTMLElementProps<"dir">>
            /** @deprecated */
            "xhtml:font": PropsWithChildren<XHTMLElementProps<"font">>
            /** @deprecated */
            "xhtml:frame": PropsWithChildren<XHTMLElementProps<"frame">>
            /** @deprecated */
            "xhtml:frameset": PropsWithChildren<XHTMLElementProps<"frameset">>
            /** @deprecated */
            "xhtml:isindex": PropsWithChildren<XHTMLElementProps<"isindex">>
            /** @deprecated */
            "xhtml:keygen": PropsWithChildren<XHTMLElementProps<"keygen">>
            /** @deprecated */
            "xhtml:listing": PropsWithChildren<XHTMLElementProps<"listing">>
            /** @deprecated */
            "xhtml:marquee": PropsWithChildren<XHTMLElementProps<"marquee">>
            /** @deprecated */
            "xhtml:menuitem": PropsWithChildren<XHTMLElementProps<"menuitem">>
            /** @deprecated */
            "xhtml:multicol": PropsWithChildren<XHTMLElementProps<"multicol">>
            /** @deprecated */
            "xhtml:nextid": PropsWithChildren<XHTMLElementProps<"nextid">>
            /** @deprecated */
            "xhtml:nobr": PropsWithChildren<XHTMLElementProps<"nobr">>
            /** @deprecated */
            "xhtml:noembed": PropsWithChildren<XHTMLElementProps<"noembed">>
            /** @deprecated */
            "xhtml:noframes": PropsWithChildren<XHTMLElementProps<"noframes">>
            /** @deprecated */
            "xhtml:param": PropsWithChildren<XHTMLElementProps<"param">>
            /** @deprecated */
            "xhtml:plaintext": PropsWithChildren<XHTMLElementProps<"plaintext">>
            /** @deprecated */
            "xhtml:rb": PropsWithChildren<XHTMLElementProps<"rb">>
            /** @deprecated */
            "xhtml:rtc": PropsWithChildren<XHTMLElementProps<"rtc">>
            /** @deprecated */
            "xhtml:spacer": PropsWithChildren<XHTMLElementProps<"spacer">>
            /** @deprecated */
            "xhtml:strike": PropsWithChildren<XHTMLElementProps<"strike">>
            /** @deprecated */
            "xhtml:tt": PropsWithChildren<XHTMLElementProps<"tt">>
            /** @deprecated */
            "xhtml:xmp": PropsWithChildren<XHTMLElementProps<"xmp">>

            "mathML:annotation": PropsWithChildren<ElementProps>
            "mathML:annotation-xml": PropsWithChildren<ElementProps>
            "mathML:maction": PropsWithChildren<ElementProps>
            "mathML:math": PropsWithChildren<ElementProps>
            "mathML:merror": PropsWithChildren<ElementProps>
            "mathML:mfrac": PropsWithChildren<ElementProps>
            "mathML:mi": PropsWithChildren<ElementProps>
            "mathML:mmultiscripts": PropsWithChildren<ElementProps>
            "mathML:mn": PropsWithChildren<ElementProps>
            "mathML:mo": PropsWithChildren<ElementProps>
            "mathML:mover": PropsWithChildren<ElementProps>
            "mathML:mpadded": PropsWithChildren<ElementProps>
            "mathML:mphantom": PropsWithChildren<ElementProps>
            "mathML:mprescripts": PropsWithChildren<ElementProps>
            "mathML:mroot": PropsWithChildren<ElementProps>
            "mathML:mrow": PropsWithChildren<ElementProps>
            "mathML:ms": PropsWithChildren<ElementProps>
            "mathML:mspace": PropsWithChildren<ElementProps>
            "mathML:msqrt": PropsWithChildren<ElementProps>
            "mathML:mstyle": PropsWithChildren<ElementProps>
            "mathML:msub": PropsWithChildren<ElementProps>
            "mathML:msubsup": PropsWithChildren<ElementProps>
            "mathML:msup": PropsWithChildren<ElementProps>
            "mathML:mtable": PropsWithChildren<ElementProps>
            "mathML:mtd": PropsWithChildren<ElementProps>
            "mathML:mtext": PropsWithChildren<ElementProps>
            "mathML:mtr": PropsWithChildren<ElementProps>
            "mathML:munder": PropsWithChildren<ElementProps>
            "mathML:munderover": PropsWithChildren<ElementProps>
            "mathML:semantics": PropsWithChildren<ElementProps>
        }
    }
}

export default JSX
