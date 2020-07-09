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
const typescript_1 = __importStar(require("typescript"));
const compile = (code) => typescript_1.default.transpileModule(code, {
    compilerOptions: {
        noEmitOnError: true,
        jsx: typescript_1.JsxEmit.Preserve,
        target: typescript_1.default.ScriptTarget.ESNext,
        module: typescript_1.default.ModuleKind.CommonJS,
    },
});
exports.default = compile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbXBpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXNDO0FBRXRDLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBWSxFQUFzQixFQUFFLENBQUMsb0JBQUUsQ0FBQyxlQUFlLENBQ3BFLElBQUksRUFDSjtJQUNJLGVBQWUsRUFBRTtRQUNiLGFBQWEsRUFBRSxJQUFJO1FBQ25CLEdBQUcsRUFBRSxvQkFBTyxDQUFDLFFBQVE7UUFDckIsTUFBTSxFQUFFLG9CQUFFLENBQUMsWUFBWSxDQUFDLE1BQU07UUFDOUIsTUFBTSxFQUFFLG9CQUFFLENBQUMsVUFBVSxDQUFDLFFBQVE7S0FDakM7Q0FDSixDQUNKLENBQUE7QUFFRCxrQkFBZSxPQUFPLENBQUEifQ==