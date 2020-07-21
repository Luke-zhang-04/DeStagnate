#!/usr/bin/env node
import ts from "typescript";
export interface CLIConfig {
    [index: string]: string | ts.CompilerOptions | undefined;
    entry: string;
    output: string;
    mode: "development" | "production";
    typescript?: ts.CompilerOptions;
}
