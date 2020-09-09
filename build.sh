#!/bin/bash
# Build shell script for DeStagnate
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )" # Get location of this script
. "${DIR}/colours.sh" # Source colours file

# Build script
build() {
    chmod +x build.mjs
    rm -rf ./lib

    # Compile typescript
    printf "${BIYellow}Compiling ${BIBlue}./src/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p tsconfig.json &
    npx tsc -p tsconfig.cli.json &

    wait

    rm -rf cli/package.json

    # Run Webpack on ./build
    printf "${BIBlue}Packing ${Yellow}./lib/index.js${Purple} files with ${ICyan}Webpack${Purple} and sending to ${Yellow}./dist/${Purple}\n"
    npx webpack

    # Minify copy of bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/deStagnate.bundle.min.js/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/deStagnate.bundle.min.js -o ./dist/deStagnate.bundle.min.js --no-comments --no-babelrc --config-file ./.babelrc.min.js &

    # Run babel on bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/deStagnate.bundle.js/${Purple}\n"
    npx babel ./dist/deStagnate.bundle.js -o ./dist/deStagnate.bundle.js -s false &

    # Minify copy of commonjs bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/deStagnate.bundle.min.cjs/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/deStagnate.bundle.min.cjs -o ./dist/deStagnate.bundle.min.cjs --no-comments --no-babelrc --config-file ./.babelrc.min.js &

    # Run babel on commonjs bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/deStagnate.bundle.cjs/${Purple}\n"
    npx babel ./dist/deStagnate.bundle.cjs -o ./dist/deStagnate.bundle.cjs -s false &

    # Run babel on testing bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./tests/deStagnate.bundle.js/${Purple}\n"
    npx babel ./tests/deStagnate.bundle.js -o ./tests/deStagnate.bundle.js -s false --no-babelrc --config-file ./.babelrc.testing.js &

    wait

    eslintConfig="{'no-var': 'off', 'prefer-arrow/prefer-arrow-functions': 'off', 'camelcase': 'off', 'id-length': 'off', 'no-use-before-define': 'off', 'max-len': 'off', 'require-jsdoc': 'off', 'vars-on-top': 'off', 'valid-jsdoc': 'off', 'semi': ['error', 'always']}"

    # Format development dist
    printf "${BIPurple}Formatting ${Red}dist ${Green}bundle\n"
    npx eslint ./dist/deStagnate.bundle.js --fix --env browser --rule "$eslintConfig" > out.log &
    npx eslint ./dist/deStagnate.bundle.cjs --fix --env browser --rule "$eslintConfig" > out.log &
    npx eslint ./tests/deStagnate.bundle.js --fix --env browser --rule "$eslintConfig" > out.log &

    wait

    ./build.mjs ./dist/deStagnate.bundle.js &

    ./build.mjs ./tests/deStagnate.bundle.js &

    wait
    
    header="/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.0
 * @file DeStagnate development bundle
 */

\"use strict\";"

    minHeader="/**
 * Destagnate v1.7.0 
 * @copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io 
 * @license MIT
 * @file DeStagnate production bundle
 */
"

    echo "$header
$(cat ./dist/deStagnate.bundle.js)" > ./dist/deStagnate.bundle.js &

    echo "$minHeader
$(cat ./dist/deStagnate.bundle.min.js)" > ./dist/deStagnate.bundle.min.js &

    echo "$header
$(cat ./dist/deStagnate.bundle.cjs)" > ./dist/deStagnate.bundle.cjs &

    echo "$minHeader
$(cat ./dist/deStagnate.bundle.min.cjs)" > ./dist/deStagnate.bundle.min.cjs &

echo "$header

$(cat ./tests/deStagnate.bundle.js)" > ./tests/deStagnate.bundle.js &

    wait

    for d in ./lib/* ; do
        if [[ ${d##*.} != "map" ]]; then
            ./build.mjs "$d" &
        fi
    done

    printf "${BIBlue}Copying ${Green}dist bundle min${Purple} to ${Blue}docs\n"
    echo "$(cat ./dist/deStagnate.bundle.min.js)" > ./docs/deStagnate.bundle.min.js &

    ./build.mjs jsxRef &

    wait

}

buildDev() {
    chmod +x build.mjs
    rm -rf ./lib

    # Compile typescript
    printf "${BIYellow}Compiling ${BIBlue}./src/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p tsconfig.json &
    npx tsc -p tsconfig.cli.json &

    wait

    rm -rf cli/package.json

    # Run Webpack on ./build
    printf "${BIBlue}Packing ${Yellow}./lib/index.js${Purple} files with ${ICyan}Webpack${Purple} and sending to ${Yellow}./dist/${Purple}\n"
    npx webpack

    # Copy bundle
    printf "${BIBlue}Copying ${Green}dist bundle min${Purple} to ${Blue}docs\n"
    echo "$(cat ./dist/deStagnate.bundle.min.js)" > ./docs/deStagnate.bundle.min.js &

    ./build.mjs jsxRef &

    wait
}

# Watches for file changes and executes build
watch() {
    fileChange1=""

    while [[ true ]]; do
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
else
    build
fi
