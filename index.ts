/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.0.1
 */

import DeStagnate, {createElement as _createElement} from "./src"

export default DeStagnate

export const createElement = _createElement

export * from "./src"
