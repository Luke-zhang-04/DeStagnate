#!/bin/bash
# Build shell script for DeStagnate
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

source "./colours.sh" # Source colours file

bin="node_modules/.bin"

build() {
    # Compile typescript
    echo -e "${BIYellow}Compiling ${BIGreen}./src/${Purple} with ${BIBlue}TypeScript"
    "$bin"/tsc -p tsconfig.json &

    if [[ "$1" != "--no-docs" ]]; then
        echo -e "${BIYellow}Compiling ${BIBlue}./docs/${BIGreen}src${Purple} with ${BIBlue}Typescript"
        "$bin"/tsc -p tsconfig.docs.json &
    fi

    wait


    # Run Rollup on ./build and es5
    echo -e "${BIBlue}Packing ${Yellow}./build/index.js${Purple} files with ${ICyan}Rollup${Purple} and sending to ${Yellow}./dist/${Purple}"
    "$bin"/rollup -c rollup.config.js

    if [[ "$1" != "--no-docs" ]]; then
        "$bin"/rollup --config rollup.config.docs.js
    fi

    if [[ "$1" != "--no-docs" ]]; then
        "$bin"/typedoc src
    fi
}

buildDev() {
    # Compile typescript
    echo -e "${BIYellow}Compiling ${BIGreen}./src/${Purple} with ${BIBlue}TypeScript"
    "$bin"/tsc -p tsconfig.json &
    echo -e "${BIYellow}Compiling ${BIBlue}./docs/${BIGreen}src${Purple} with ${BIBlue}Typescript"
    "$bin"/tsc -p tsconfig.docs.json &

    wait


    # Run Rollup on ./build and es5
    echo -e "${BIBlue}Packing ${Yellow}./build/index.js${Purple} files with ${ICyan}Rollup${Purple} and sending to ${Yellow}./dist/${Purple}"
    "$bin"/rollup -c rollup.config.js
    "$bin"/rollup --config rollup.config.docs.js
}

# Watches for file changes and executes build
watch() {
    fileChange1=""

    while true; do
        fileChange2=$(find lib/ -type f -exec md5 {} \;)

        if [[ "$fileChange1" != "$fileChange2" ]] ; then
            buildDev
            clear
            printf "Compiled successfully!\n\n"

            fileChange1="$fileChange2"
            printf "Waiting...\n"
        fi

        sleep 10
    done
}

if [[ "$1" == "--watch" ]]; then
    watch
elif [[ "$1" == "-d" ]]||[[ "$1" == "--dev" ]]; then
    buildDev
elif [[ "$1" == "--docs" ]]; then
    "$bin"/tsc -p tsconfig.docs.json
    cd docs || return
    yarn sass
    cd .. || return
    "$bin"/rollup -c rollup.config.docs &
    "$bin"/typedoc &

    wait
else
    build "$1"
fi
