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
        if (!config.prod) {
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