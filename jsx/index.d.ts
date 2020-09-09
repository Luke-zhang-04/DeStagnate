import {ChildrenType, EventFunc} from "../lib/createElement"

type DeStagnateElementType = undefined
    | string
    | number
    | Element
    | EventFunc
    | ChildrenType
    | JSX.Element

interface DeStagnateElement {
    [key: string]: DeStagnateElementType,
    children?: ChildrenType | JSX.Element,
}

/* eslint-disable @typescript-eslint/no-namespace */

declare global {

    /**
     * JSX typings for
     */
    namespace JSX {

        interface IntrinsicElements {
            // HTML
            a: DeStagnateElement,
            abbr: DeStagnateElement,
            address: DeStagnateElement,
            area: DeStagnateElement,
            article: DeStagnateElement,
            aside: DeStagnateElement,
            audio: DeStagnateElement,
            b: DeStagnateElement,
            base: DeStagnateElement,
            bdi: DeStagnateElement,
            bdo: DeStagnateElement,
            big: DeStagnateElement,
            blockquote: DeStagnateElement,
            body: DeStagnateElement,
            br: DeStagnateElement,
            button: DeStagnateElement,
            canvas: DeStagnateElement,
            caption: DeStagnateElement,
            cite: DeStagnateElement,
            code: DeStagnateElement,
            col: DeStagnateElement,
            colgroup: DeStagnateElement,
            data: DeStagnateElement,
            datalist: DeStagnateElement,
            dd: DeStagnateElement,
            del: DeStagnateElement,
            details: DeStagnateElement,
            dfn: DeStagnateElement,
            dialog: DeStagnateElement,
            div: DeStagnateElement,
            dl: DeStagnateElement,
            dt: DeStagnateElement,
            em: DeStagnateElement,
            embed: DeStagnateElement,
            fieldset: DeStagnateElement,
            figcaption: DeStagnateElement,
            figure: DeStagnateElement,
            footer: DeStagnateElement,
            form: DeStagnateElement,
            h1: DeStagnateElement,
            h2: DeStagnateElement,
            h3: DeStagnateElement,
            h4: DeStagnateElement,
            h5: DeStagnateElement,
            h6: DeStagnateElement,
            head: DeStagnateElement,
            header: DeStagnateElement,
            hgroup: DeStagnateElement,
            hr: DeStagnateElement,
            html: DeStagnateElement,
            i: DeStagnateElement,
            iframe: DeStagnateElement,
            img: DeStagnateElement,
            input: DeStagnateElement,
            ins: DeStagnateElement,
            kbd: DeStagnateElement,
            keygen: DeStagnateElement,
            label: DeStagnateElement,
            legend: DeStagnateElement,
            li: DeStagnateElement,
            link: DeStagnateElement,
            main: DeStagnateElement,
            map: DeStagnateElement,
            mark: DeStagnateElement,
            marquee: DeStagnateElement,
            menu: DeStagnateElement,
            menuitem: DeStagnateElement,
            meta: DeStagnateElement,
            meter: DeStagnateElement,
            nav: DeStagnateElement,
            noscript: DeStagnateElement,
            object: DeStagnateElement,
            ol: DeStagnateElement,
            optgroup: DeStagnateElement,
            option: DeStagnateElement,
            output: DeStagnateElement,
            p: DeStagnateElement,
            param: DeStagnateElement,
            picture: DeStagnateElement,
            pre: DeStagnateElement,
            progress: DeStagnateElement,
            q: DeStagnateElement,
            rp: DeStagnateElement,
            rt: DeStagnateElement,
            ruby: DeStagnateElement,
            s: DeStagnateElement,
            samp: DeStagnateElement,
            script: DeStagnateElement,
            section: DeStagnateElement,
            select: DeStagnateElement,
            slot: DeStagnateElement,
            small: DeStagnateElement,
            source: DeStagnateElement,
            span: DeStagnateElement,
            strong: DeStagnateElement,
            style: DeStagnateElement,
            sub: DeStagnateElement,
            summary: DeStagnateElement,
            sup: DeStagnateElement,
            table: DeStagnateElement,
            tbody: DeStagnateElement,
            td: DeStagnateElement,
            textarea: DeStagnateElement,
            tfoot: DeStagnateElement,
            th: DeStagnateElement,
            thead: DeStagnateElement,
            time: DeStagnateElement,
            title: DeStagnateElement,
            tr: DeStagnateElement,
            track: DeStagnateElement,
            u: DeStagnateElement,
            ul: DeStagnateElement,
            var: DeStagnateElement,
            video: DeStagnateElement,
            wbr: DeStagnateElement,
        }

        interface Element extends HTMLElement {}
    }

}
