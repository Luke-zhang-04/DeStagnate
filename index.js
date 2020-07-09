"use strict";
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.2.0
 */

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) {
    k2 = k;
  }

  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) {
    k2 = k;
  }

  o[k2] = m[k];
});

var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});

var __importStar = void 0 && (void 0).__importStar || function (mod) {
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
};

var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !exports.hasOwnProperty(p)) {
      __createBinding(exports, m, p);
    }
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = void 0;

var lib_1 = __importStar(require("./lib"));
/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.1.0
 * @classdesc A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @class
 * @namespace
 */


exports["default"] = lib_1["default"];
/**
 * Creates a child element to DynamComponent
 * @param {string} tagName - name of HTML element
 * @param {undefined | Object.<string, string | number>} props - element properties
 * @param {undefined | Array.<HTMLElement> | HTMLElement | Array.<string> | string | Array.<number> | number} children - child of element, or array of children
 * @returns {HTMLElement} html element
 */

exports.createElement = lib_1.createElement;

__exportStar(require("./lib"), exports);
