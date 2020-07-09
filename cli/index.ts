/**
 * DeStagnate CLI
 * CLI for compiling files that use JSX code
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.0
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
import * as Babel from "@babel/core"
import * as fs from "fs"
import {program} from "commander"

program
    .option("-o, --out <file>", "output file; stdout by default", "stdout")
    .option("-p --prod", "production mode")
 
program.parse(process.argv)

const [input, output] = [process.argv[2], program.out as string],

    compile = (fileData: string): void => {
        const plugins = [
            "@babel/plugin-transform-react-jsx",
            "@babel/plugin-proposal-class-properties",
        ]

        if (program.prod) {
            plugins.push("babel-plugin-loop-optimizer")
        }

        const res = Babel.transform(
            fileData,
            {
                plugins,
                presets: ["@babel/preset-env"],
                minified: program.prod as boolean,
                compact: program.prod as boolean,
                comments: !program.prod as boolean,
                sourceMaps: "inline",
            }
        )
        
        if (res && res.code) {
            let code = res.code
                .replace(/React.createElement/gu, "DeStagnate.createElement")
                .replace(/className: "/gu, "class: \"")
            
            if (!program.prod) {
                // eslint-disable-next-line
                code = `// WARNING: THIS CODE WAS COMPILED FOR DEVELOPMENT, AND IS NOT OPTIMISED FOR PRODUCTION. FOR PRODUCTION, USE THE --prod FLAG, OR ADD mode: production TO YOU CONFIG FILE\n\n${code}`
            }

            if (output === "stdout") {
                console.log(code)
            } else {
                fs.writeFile(output, code, "utf8", () => {
                    console.log("😃 Success")
                })
            }
        }    
    }

if (input) {
    fs.readFile(input, "utf8", (_, data) => {
        compile(data)
    })
} else {
    throw new Error("😰 No input file specified, exiting...")
}
