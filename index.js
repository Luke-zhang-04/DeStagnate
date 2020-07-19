"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.2
 */

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) {
    k2 = k;
  }

  Object.defineProperty(o, k2, {
    enumerable: !0,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) {
    k2 = k;
  }

  o[k2] = m[k];
}),
    __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: !0,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
}),
    __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) {
    return mod;
  }

  var result = {};

  if (mod != null) {
    for (var k in mod) {
      if (k !== "default" && Object.hasOwnProperty.call(mod, k)) {
        __createBinding(result, mod, k);
      }
    }
  }

  __setModuleDefault(result, mod);

  return result;
},
    __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !exports.hasOwnProperty(p)) {
      __createBinding(exports, m, p);
    }
  }
};

Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.createElement = void 0;

var lib_1 = __importStar(require("./lib"));
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.2
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 */


exports["default"] = lib_1["default"];
exports.createElement = lib_1.createElement;

__exportStar(require("./lib"), exports);
