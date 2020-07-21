#!/usr/bin/env node
/**
 * DeStagnate CLI
 * CLI for compiling files that use JSX code
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.4.0
 */
import ts from "typescript";
import { CLIConfig } from "./";
declare const compile: (code: string, config?: CLIConfig | undefined) => ts.TranspileOutput;
export default compile;
