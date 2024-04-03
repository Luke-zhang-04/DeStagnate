import type {BasicProps, ChildrenType} from "."

type DeStagnateElement<T extends Node = Node> = BasicProps<T> & {
    children?: ChildrenType | JSX.Element
}

/* eslint-disable @typescript-eslint/no-namespace */

declare global {
    /** JSX typings for */
    namespace JSX {
        interface IntrinsicElements {
            // HTML
            a: DeStagnateElement<HTMLAnchorElement>
            abbr: DeStagnateElement<HTMLElement>
            address: DeStagnateElement<HTMLElement>
            area: DeStagnateElement<HTMLAreaElement>
            article: DeStagnateElement<HTMLElement>
            aside: DeStagnateElement<HTMLElement>
            audio: DeStagnateElement<HTMLAudioElement>
            b: DeStagnateElement<HTMLElement>
            base: DeStagnateElement<HTMLBaseElement>
            bdi: DeStagnateElement<HTMLElement>
            bdo: DeStagnateElement<HTMLElement>
            blockquote: DeStagnateElement<HTMLQuoteElement>
            body: DeStagnateElement<HTMLBodyElement>
            br: DeStagnateElement<HTMLBRElement>
            button: DeStagnateElement<HTMLButtonElement>
            canvas: DeStagnateElement<HTMLCanvasElement>
            caption: DeStagnateElement<HTMLTableCaptionElement>
            cite: DeStagnateElement<HTMLElement>
            code: DeStagnateElement<HTMLElement>
            col: DeStagnateElement<HTMLTableColElement>
            colgroup: DeStagnateElement<HTMLTableColElement>
            data: DeStagnateElement<HTMLDataElement>
            datalist: DeStagnateElement<HTMLDataListElement>
            dd: DeStagnateElement<HTMLElement>
            del: DeStagnateElement<HTMLModElement>
            details: DeStagnateElement<HTMLDetailsElement>
            dfn: DeStagnateElement<HTMLElement>
            dialog: DeStagnateElement<HTMLDialogElement>
            div: DeStagnateElement<HTMLDivElement>
            dl: DeStagnateElement<HTMLDListElement>
            dt: DeStagnateElement<HTMLElement>
            em: DeStagnateElement<HTMLElement>
            embed: DeStagnateElement<HTMLEmbedElement>
            fieldset: DeStagnateElement<HTMLFieldSetElement>
            figcaption: DeStagnateElement<HTMLElement>
            figure: DeStagnateElement<HTMLElement>
            footer: DeStagnateElement<HTMLElement>
            form: DeStagnateElement<HTMLFormElement>
            h1: DeStagnateElement<HTMLHeadingElement>
            h2: DeStagnateElement<HTMLHeadingElement>
            h3: DeStagnateElement<HTMLHeadingElement>
            h4: DeStagnateElement<HTMLHeadingElement>
            h5: DeStagnateElement<HTMLHeadingElement>
            h6: DeStagnateElement<HTMLHeadingElement>
            head: DeStagnateElement<HTMLHeadElement>
            header: DeStagnateElement<HTMLElement>
            hgroup: DeStagnateElement<HTMLElement>
            hr: DeStagnateElement<HTMLHRElement>
            html: DeStagnateElement<HTMLHtmlElement>
            i: DeStagnateElement<HTMLElement>
            iframe: DeStagnateElement<HTMLIFrameElement>
            img: DeStagnateElement<HTMLImageElement>
            input: DeStagnateElement<HTMLInputElement>
            ins: DeStagnateElement<HTMLModElement>
            kbd: DeStagnateElement<HTMLElement>
            label: DeStagnateElement<HTMLLabelElement>
            legend: DeStagnateElement<HTMLLegendElement>
            li: DeStagnateElement<HTMLLIElement>
            link: DeStagnateElement<HTMLLinkElement>
            main: DeStagnateElement<HTMLElement>
            map: DeStagnateElement<HTMLMapElement>
            mark: DeStagnateElement<HTMLElement>
            menu: DeStagnateElement<HTMLMenuElement>
            meta: DeStagnateElement<HTMLMetaElement>
            meter: DeStagnateElement<HTMLMeterElement>
            nav: DeStagnateElement<HTMLElement>
            noscript: DeStagnateElement<HTMLElement>
            object: DeStagnateElement<HTMLObjectElement>
            ol: DeStagnateElement<HTMLOListElement>
            optgroup: DeStagnateElement<HTMLOptGroupElement>
            option: DeStagnateElement<HTMLOptionElement>
            output: DeStagnateElement<HTMLOutputElement>
            p: DeStagnateElement<HTMLParagraphElement>
            picture: DeStagnateElement<HTMLPictureElement>
            pre: DeStagnateElement<HTMLPreElement>
            progress: DeStagnateElement<HTMLProgressElement>
            q: DeStagnateElement<HTMLQuoteElement>
            rp: DeStagnateElement<HTMLElement>
            rt: DeStagnateElement<HTMLElement>
            ruby: DeStagnateElement<HTMLElement>
            s: DeStagnateElement<HTMLElement>
            samp: DeStagnateElement<HTMLElement>
            script: DeStagnateElement<HTMLScriptElement>
            search: DeStagnateElement<HTMLElement>
            section: DeStagnateElement<HTMLElement>
            select: DeStagnateElement<HTMLSelectElement>
            slot: DeStagnateElement<HTMLSlotElement>
            small: DeStagnateElement<HTMLElement>
            source: DeStagnateElement<HTMLSourceElement>
            span: DeStagnateElement<HTMLSpanElement>
            strong: DeStagnateElement<HTMLElement>
            style: DeStagnateElement<HTMLStyleElement>
            sub: DeStagnateElement<HTMLElement>
            summary: DeStagnateElement<HTMLElement>
            sup: DeStagnateElement<HTMLElement>
            table: DeStagnateElement<HTMLTableElement>
            tbody: DeStagnateElement<HTMLTableSectionElement>
            td: DeStagnateElement<HTMLTableCellElement>
            template: DeStagnateElement<HTMLTemplateElement>
            textarea: DeStagnateElement<HTMLTextAreaElement>
            tfoot: DeStagnateElement<HTMLTableSectionElement>
            th: DeStagnateElement<HTMLTableCellElement>
            thead: DeStagnateElement<HTMLTableSectionElement>
            time: DeStagnateElement<HTMLTimeElement>
            title: DeStagnateElement<HTMLTitleElement>
            tr: DeStagnateElement<HTMLTableRowElement>
            track: DeStagnateElement<HTMLTrackElement>
            u: DeStagnateElement<HTMLElement>
            ul: DeStagnateElement<HTMLUListElement>
            var: DeStagnateElement<HTMLElement>
            video: DeStagnateElement<HTMLVideoElement>
            wbr: DeStagnateElement<HTMLElement>

            // Deprecated tags
            /** @deprecated */
            acronym: DeStagnateElement<HTMLElement>
            /** @deprecated */
            applet: DeStagnateElement<HTMLUnknownElement>
            /** @deprecated */
            basefont: DeStagnateElement<HTMLElement>
            /** @deprecated */
            bgsound: DeStagnateElement<HTMLUnknownElement>
            /** @deprecated */
            big: DeStagnateElement<HTMLElement>
            /** @deprecated */
            blink: DeStagnateElement<HTMLUnknownElement>
            /** @deprecated */
            center: DeStagnateElement<HTMLElement>
            /** @deprecated */
            dir: DeStagnateElement<HTMLDirectoryElement>
            /** @deprecated */
            font: DeStagnateElement<HTMLFontElement>
            /** @deprecated */
            frame: DeStagnateElement<HTMLFrameElement>
            /** @deprecated */
            frameset: DeStagnateElement<HTMLFrameSetElement>
            /** @deprecated */
            isindex: DeStagnateElement<HTMLUnknownElement>
            /** @deprecated */
            keygen: DeStagnateElement<HTMLUnknownElement>
            /** @deprecated */
            listing: DeStagnateElement<HTMLPreElement>
            /** @deprecated */
            marquee: DeStagnateElement<HTMLMarqueeElement>
            /** @deprecated */
            menuitem: DeStagnateElement<HTMLElement>
            /** @deprecated */
            multicol: DeStagnateElement<HTMLUnknownElement>
            /** @deprecated */
            nextid: DeStagnateElement<HTMLUnknownElement>
            /** @deprecated */
            nobr: DeStagnateElement<HTMLElement>
            /** @deprecated */
            noembed: DeStagnateElement<HTMLElement>
            /** @deprecated */
            noframes: DeStagnateElement<HTMLElement>
            /** @deprecated */
            param: DeStagnateElement<HTMLParamElement>
            /** @deprecated */
            plaintext: DeStagnateElement<HTMLElement>
            /** @deprecated */
            rb: DeStagnateElement<HTMLElement>
            /** @deprecated */
            rtc: DeStagnateElement<HTMLElement>
            /** @deprecated */
            spacer: DeStagnateElement<HTMLUnknownElement>
            /** @deprecated */
            strike: DeStagnateElement<HTMLElement>
            /** @deprecated */
            tt: DeStagnateElement<HTMLElement>
            /** @deprecated */
            xmp: DeStagnateElement<HTMLPreElement>
        }

        // eslint-disable-next-line
        interface Element extends Node {}
    }
}

export default JSX
