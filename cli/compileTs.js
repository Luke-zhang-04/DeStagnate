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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * DeStagnate CLI
 * CLI for compiling files that use JSX code
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.0
 */
const typescript_1 = __importStar(require("typescript"));
const compile = (code, config) => {
    const compilerOptions = {
        noEmitOnError: true,
        jsx: typescript_1.JsxEmit.Preserve,
        target: typescript_1.default.ScriptTarget.ESNext,
        module: typescript_1.default.ModuleKind.CommonJS,
    };
    if (config && config.typescript) {
        Object.assign(compilerOptions, config.typescript);
    }
    return typescript_1.default.transpileModule(code, { compilerOptions });
};
exports.default = compile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZVRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tcGlsZVRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7OztHQU9HO0FBQ0gseURBQXNDO0FBR3RDLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBWSxFQUFFLE1BQWtCLEVBQXNCLEVBQUU7SUFDckUsTUFBTSxlQUFlLEdBQUc7UUFDcEIsYUFBYSxFQUFFLElBQUk7UUFDbkIsR0FBRyxFQUFFLG9CQUFPLENBQUMsUUFBUTtRQUNyQixNQUFNLEVBQUUsb0JBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTTtRQUM5QixNQUFNLEVBQUUsb0JBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUTtLQUNqQyxDQUFBO0lBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7S0FDcEQ7SUFFRCxPQUFPLG9CQUFFLENBQUMsZUFBZSxDQUNyQixJQUFJLEVBQ0osRUFBQyxlQUFlLEVBQUMsQ0FDcEIsQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQUVELGtCQUFlLE9BQU8sQ0FBQSJ9