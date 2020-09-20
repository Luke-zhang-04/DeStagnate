/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @license MIT
 * @version 2.0.0
 * Main test suite for destagnate
 */

/* eslint-disable one-var, no-sync */
const jsdom = require("jsdom"),
    fs = require("fs"),
    state = require("./cases/state").test,
    props = require("./cases/props").test,
    ref = require("./cases/ref").test,
    namespaced = require("./cases/NSElement").test,
    elementCreating = require("./cases/createElement").test,
    elistener = require("./cases/eventListener.js").test,
    noRender = require("./cases/noRender.js").test,
    nestedComponents = require("./cases/nestedComponents").test,
    functionComponents = require("./cases/functionComponent").test

const {JSDOM} = jsdom,
    html = fs.readFileSync(`${process.cwd()}/tests/test.html`, "utf-8"),
    dom = new JSDOM(html, {runScripts: "outside-only"}),
    {document} = dom.window

console.log("IGNORE ANY ERROR LOGGINGS IF TESTS PASS. THERE ARE INTENTIONAL.\n\n")
describe("State mgmt", () => state(document))
describe("Props testing", () => props(document))
describe("Ref testing", () => ref(document))
describe("Namespace element testing", () => namespaced(document))
describe("CreateElement", () => elementCreating(document))
describe("Event listener", () => elistener(document, dom.window))
describe("No Render", () => noRender(document))
describe("Nested components", () => nestedComponents(document, dom.window))
describe("Function components", () => functionComponents(document))
