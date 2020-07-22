#!/usr/bin/env node
/**
 * DeStagnate CLI
 * CLI for compiling files that use JSX code
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.4.4
 */
import ts, {JsxEmit} from "typescript"
import {CLIConfig} from "./"

const compile = (code: string, config?: CLIConfig): ts.TranspileOutput => {
    const compilerOptions = {
        noEmitOnError: true,
        jsx: JsxEmit.Preserve,
        target: ts.ScriptTarget.ESNext,
        module: ts.ModuleKind.CommonJS,
    }

    if (config && config.typescript) {
        Object.assign(compilerOptions, config.typescript)
    }

    return ts.transpileModule(
        code,
        {compilerOptions}
    )
}

export default compile
