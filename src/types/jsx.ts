import type {HTMLDeprecatedElementProps, HTMLElementProps, PropsWithChildren} from "."

/* eslint-disable @typescript-eslint/no-namespace */

declare global {
    /** JSX typings */
    namespace JSX {
        interface IntrinsicElements {
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
        }

        // eslint-disable-next-line
        interface Element extends Node {}
    }
}

export default JSX
