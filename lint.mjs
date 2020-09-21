#!/usr/bin/env node

import chokidar from "chokidar"
import {exec} from "child_process"

const cmd = "./node_modules/.bin/eslint_d \"*/**/*.ts\" --fix",

    lint = () => new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                reject(error)

                return
            }

            if (stderr) {
                reject(stderr)

                return
            }

            resolve(stdout)
        })
    })

chokidar.watch("src/").on("change", async () => {
    await lint()

    console.log("Complete!")
})

lint()
