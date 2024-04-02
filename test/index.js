/**
 * DeStagnate: A lightweight wrapper around vanilla DOM methods
 *
 * @license MIT
 * @version 3.0.0
 * @copyright 2020 - 2024 Luke Zhang
 */

import "global-jsdom/register"

/* eslint-disable no-sync */
import fs from "fs"

import {test as ref} from "./cases/ref.js"
import {test as namespaced} from "./cases/NSElement.js"
import {test as elementCreating} from "./cases/createElement.js"
import {test as elistener} from "./cases/eventListener.js"
import {test as functionComponents} from "./cases/functionComponent.js"
import {test as fragments} from "./cases/fragment.js"
import {test as stateContainer} from "./cases/stateContainer.js"

document.body.innerHTML = fs.readFileSync(`${process.cwd()}/test/test.html`, "utf-8")

console.log("IGNORE ANY ERROR LOGGINGS IF TESTS PASS. THERE ARE INTENTIONAL.\n\n")
describe("Ref testing", ref)
describe("Namespace element testing", namespaced)
describe("CreateElement", elementCreating)
describe("Event listener", elistener)
describe("Function components", functionComponents)
describe("Fragments", fragments)
describe("State container", stateContainer)
