#!/usr/bin/env node
/**
 * DeStagnate CLI
 * CLI for compiling files that use JSX code
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.4.4
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires, global-require */
import * as Babel from "@babel/core"
import * as fs from "fs"
import * as pkg from "../package.json"
import {default as compileTs} from "./compileTs"
import {program} from "commander"
import ts from "typescript"

export interface CLIConfig {
    [index: string]: string | ts.CompilerOptions | undefined,
    entry: string,
    output: string,
    mode: "development" | "production",
    typescript?: ts.CompilerOptions,
}

program
    .option("-o, --out <file>", "output file stdout by default", "stdout")
    .option("-p --production", "production mode")
    .on("--help", () => {
        // eslint-disable-next-line
        console.log("\nNote that an input of config file is always required. Your command structure therefore should look like\n\n\tnpx destagnate [input file or config file][options]]\n")
    })
    .version(pkg.version)
 
program.parse(process.argv)

// eslint-disable-next-line
const input = process.argv[2],

    compile = (fileData: string, config: CLIConfig): void => {
        const plugins = [
                "@babel/plugin-transform-react-jsx",
                "@babel/plugin-proposal-class-properties",
            ],
            res = Babel.transform(
                fileData,
                {
                    plugins,
                    presets: ["@babel/preset-env"],
                    minified: (config.mode === "production"),
                    compact: (config.mode === "production"),
                    comments: !(config.mode === "production"),
                    sourceMaps: "inline",
                }
            )
        
        if (res && res.code) {
            let code = res.code
                .replace(/React.createElement/gu, "DeStagnate.createElement")
                .replace(/className: "/gu, "class: \"")
            
            if (config.mode !== "production") {
                // eslint-disable-next-line
                code = `// WARNING: THIS CODE WAS COMPILED FOR DEVELOPMENT, AND IS NOT OPTIMISED FOR PRODUCTION. FOR PRODUCTION, USE THE --prod FLAG, OR ADD mode: production TO YOU CONFIG FILE\n\n${code}`
            }

            if (config.output === "stdout") {
                console.log(code)
            } else {
                fs.writeFile(config.output, code, "utf8", () => {
                    console.log("😃 Success")
                })
            }
        }    
    },

    compileWithConfig = (): void => {
        /* eslint-disable no-sync */
        let config: CLIConfig | CLIConfig[]

        try {
            config = require(`${process.cwd()}/${input.replace("./", "")}`) as CLIConfig | CLIConfig[]
        } catch (_) {
            throw new Error("😰 No input file or config file given")
        }

        if (config instanceof Array) {
            for (const file of config) {
                fs.readFile(file.entry, "utf8", (_, data) => {
                    let code = data

                    if (
                        file.entry.includes(".ts") ||
                        file.entry.includes(".tsx")
                    ) {
                        code = compileTs(code).outputText
                    }

                    compile(code, file)
                })
            }
        } else {
            fs.readFile(config.entry, "utf8", (_, data) => {
                compile(data, config as CLIConfig)
            })
        }
    }

if (input && !input.includes(".config.js")) {
    fs.readFile(input, "utf8", (_, data) => {
        if (input.includes(".ts") || input.includes(".tsx")) {
            const code = compileTs(data)

            compile(code.outputText, {
                entry: process.argv[2],
                output: program.out,
                mode: program.production ? "production" : "development",
            })
        } else {
            compile(data, {
                entry: process.argv[2],
                output: program.out,
                mode: program.production ? "production" : "development",
            })
        }
    })
} else if (
    input &&
    (input.includes(".config.js") || input.includes(".config.json"))
) {
    compileWithConfig()
} else {
    throw new Error("😰 No input file or config file given")
}
