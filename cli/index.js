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
    .option("-p --prod", "production mode");
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
        if (!commander_1.program.prod) {
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
                mode: commander_1.program.prod ? "production" : "development",
            });
        }
        else {
            compile(data, {
                entry: process.argv[2],
                output: commander_1.program.out,
                mode: commander_1.program.prod ? "production" : "development",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7R0FPRztBQUNILCtMQUErTDtBQUMvTCxtREFBb0M7QUFDcEMsdUNBQXdCO0FBQ3hCLDREQUFnRDtBQUNoRCx5Q0FBaUM7QUFXakMsbUJBQU87S0FDRixNQUFNLENBQUMsa0JBQWtCLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxDQUFDO0tBQ3RFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTtBQUUzQyxtQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFFM0IsMkJBQTJCO0FBQzNCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBRXpCLE9BQU8sR0FBRyxDQUFDLFFBQWdCLEVBQUUsTUFBaUIsRUFBUSxFQUFFO0lBQ3BELE1BQU0sT0FBTyxHQUFHO1FBQ1osbUNBQW1DO1FBQ25DLHlDQUF5QztLQUM1QyxDQUFBO0lBRUQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtRQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7S0FDOUM7SUFFRCxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUN2QixRQUFRLEVBQ1I7UUFDSSxPQUFPO1FBQ1AsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDOUIsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUM7UUFDeEMsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUM7UUFDdkMsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQztRQUN6QyxVQUFVLEVBQUUsUUFBUTtLQUN2QixDQUNKLENBQUE7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