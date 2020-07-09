#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DeStagnate CLI
 * CLI for compiling files that use JSX code
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.0
 */
/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires, global-require */
const Babel = __importStar(require("@babel/core"));
const fs = __importStar(require("fs"));
const compileTs_1 = __importDefault(require("./compileTs"));
const commander_1 = require("commander");
commander_1.program
    .option("-o, --out <file>", "output file; stdout by default", "stdout")
    .option("-p --production", "production mode");
commander_1.program.parse(process.argv);
// eslint-disable-next-line
const input = process.argv[2], compile = (fileData, config) => {
    const plugins = [
        "@babel/plugin-transform-react-jsx",
        "@babel/plugin-proposal-class-properties",
    ];
    if (config.mode === "production") {
        plugins.push("babel-plugin-loop-optimizer");
    }
    const res = Babel.transform(fileData, {
        plugins,
        presets: ["@babel/preset-env"],
        minified: (config.mode === "production"),
        compact: (config.mode === "production"),
        comments: !(config.mode === "production"),
        sourceMaps: "inline",
    });
    if (res && res.code) {
        let code = res.code
            .replace(/React.createElement/gu, "DeStagnate.createElement")
            .replace(/className: "/gu, "class: \"");
        if (config.mode !== "production") {
            // eslint-disable-next-line
            code = `// WARNING: THIS CODE WAS COMPILED FOR DEVELOPMENT, AND IS NOT OPTIMISED FOR PRODUCTION. FOR PRODUCTION, USE THE --prod FLAG, OR ADD mode: production TO YOU CONFIG FILE\n\n${code}`;
        }
        if (config.output === "stdout") {
            console.log(code);
        }
        else {
            fs.writeFile(config.output, code, "utf8", () => {
                console.log("😃 Success");
            });
        }
    }
}, compileWithConfig = () => {
    /* eslint-disable no-sync */
    let config;
    try {
        config = require(`${process.cwd()}/${input.replace("./", "")}`);
    }
    catch (_) {
        throw new Error("😰 No input file or config file given");
    }
    if (config instanceof Array) {
        for (const file of config) {
            fs.readFile(file.entry, "utf8", (_, data) => {
                let code = data;
                if (file.entry.includes(".ts") || file.entry.includes(".tsx")) {
                    code = compileTs_1.default(code).outputText;
                }
                compile(code, file);
            });
        }
    }
    else {
        fs.readFile(config.entry, "utf8", (_, data) => {
            compile(data, config);
        });
    }
};
if (input && !input.includes(".config.js")) {
    fs.readFile(input, "utf8", (_, data) => {
        if (input.includes(".ts") || input.includes(".tsx")) {
            const code = compileTs_1.default(data);
            compile(code.outputText, {
                entry: process.argv[2],
                output: commander_1.program.out,
                mode: commander_1.program.production ? "production" : "development",
            });
        }
        else {
            compile(data, {
                entry: process.argv[2],
                output: commander_1.program.out,
                mode: commander_1.program.production ? "production" : "development",
            });
        }
    });
}
else if (input &&
    (input.includes(".config.js") || input.includes(".config.json"))) {
    compileWithConfig();
}
else {
    throw new Error("😰 No input file or config file given");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7R0FPRztBQUNILCtMQUErTDtBQUMvTCxtREFBb0M7QUFDcEMsdUNBQXdCO0FBQ3hCLDREQUFnRDtBQUNoRCx5Q0FBaUM7QUFXakMsbUJBQU87S0FDRixNQUFNLENBQUMsa0JBQWtCLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxDQUFDO0tBQ3RFLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO0FBRWpELG1CQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUUzQiwyQkFBMkI7QUFDM0IsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFFekIsT0FBTyxHQUFHLENBQUMsUUFBZ0IsRUFBRSxNQUFpQixFQUFRLEVBQUU7SUFDcEQsTUFBTSxPQUFPLEdBQUc7UUFDWixtQ0FBbUM7UUFDbkMseUNBQXlDO0tBQzVDLENBQUE7SUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1FBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtLQUM5QztJQUVELE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQ3ZCLFFBQVEsRUFDUjtRQUNJLE9BQU87UUFDUCxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztRQUM5QixRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQztRQUN4QyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQztRQUN2QyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDO1FBQ3pDLFVBQVUsRUFBRSxRQUFRO0tBQ3ZCLENBQ0osQ0FB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