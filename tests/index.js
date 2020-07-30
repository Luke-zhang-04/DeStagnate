/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @license MIT
 * @version 1.5.2
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
    noRender = require("./cases/noRender.js").test

const {JSDOM} = jsdom,
    html = fs.readFileSync(`${process.cwd()}/docs/index.html`, "utf-8"),
    dom = new JSDOM(html, {runScripts: "outside-only"}),
    {document} = dom.window

describe("State mgmt", () => state(document))
describe("Props testing", () => props(document))
describe("Ref testing", () => ref(document))
describe("Namespace element testing", () => namespaced(document))
describe("CreateElement", () => elementCreating(document))
describe("Event listener", () => elistener(document, dom.window))
describe("No Render", () => noRender(document))
