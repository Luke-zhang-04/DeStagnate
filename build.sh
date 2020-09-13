#!/bin/bash
# Build shell script for DeStagnate
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

source "./colours.sh" # Source colours file

build() {
    chmod +x format.mjs

    # Compile typescript
    printf "${BIYellow}Compiling ${BIGreen}./src/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p tsconfig.json &
    printf "${BIYellow}Compiling ${BIGreen}./src/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p tsconfig.dist.json &

    if [[ "$1" != "--no-docs" ]]; then
        printf "${BIYellow}Compiling ${BIBlue}./docs/${BIGreen}src${Purple} with ${BIBlue}Typescript\n"
        npx tsc -p tsconfig.docs.json &
    fi

    wait


    # Run Webpack on ./build and es5
    printf "${BIBlue}Packing ${Yellow}./build/index.js${Purple} files with ${ICyan}Webpack${Purple} and sending to ${Yellow}./dist/${Purple}\n"
    npx webpack &

    if [[ "$1" != "--no-docs" ]]; then
        npx webpack --config webpack.docs.config.js &
    fi

    wait


    # Minify copy of var bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/deStagnate.bundle.min.js/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/deStagnate.bundle.min.js -o ./dist/deStagnate.bundle.min.js &

    # Minify copy of commonjs bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/deStagnate.bundle.min.cjs/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/deStagnate.bundle.min.cjs -o ./dist/deStagnate.bundle.min.cjs &

    # Minify copy of es6/var bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/es6/deStagnate.bundle.min.js/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/es6/deStagnate.bundle.min.js -o ./dist/es6/deStagnate.bundle.min.js &

    # Minify copy of es6/commonjs bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/es6/deStagnate.bundle.min.cjs/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/es6/deStagnate.bundle.min.cjs -o ./dist/es6/deStagnate.bundle.min.cjs &

    eslintConfig="{'no-var': 'off', 'prefer-arrow/prefer-arrow-functions': 'off', 'camelcase': 'off', 'id-length': 'off', 'no-use-before-define': 'off', 'max-len': 'off', 'require-jsdoc': 'off', 'vars-on-top': 'off', 'valid-jsdoc': 'off', 'semi': ['error', 'always']}"

    distFiles=(./dist/deStagnate.bundle.js ./dist/deStagnate.bundle.cjs ./dist/es6/deStagnate.bundle.js ./dist/es6/deStagnate.bundle.cjs ./tests/deStagnate.bundle.js)
    distFilesMin=(./dist/deStagnate.bundle.min.js ./dist/deStagnate.bundle.min.cjs ./dist/es6/deStagnate.bundle.min.js ./dist/es6/deStagnate.bundle.min.cjs)

    header="/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.8.0
 * @file DeStagnate development bundle
 */

\"use strict\";
"

    minHeader="/**
 * Destagnate v1.8.0
 * @copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io
 * @license MIT
 * @file DeStagnate production bundle
 */

\"use strict\";
"

    # Format development dist
    printf "${BIPurple}Formatting ${Red}dist ${Green}bundles\n"
    for file in "${distFiles[@]}"; do
        printf "    ${BIPurple}Formatting ${Green}$file\n"
        npx eslint "$file" --fix --env browser --rule "$eslintConfig" > out.log &
    done

    wait


    printf "${BICyan}Running ${Yellow}format.mjs${BICyan} on ${Red}dist ${Green}bundles\n"
    for file in "${distFiles[@]}"; do
        printf "    ${BICyan}Running ${Yellow}format.mjs${BICyan} on ${Green}$file\n"
        ./format.mjs "$file" &
    done

    wait

    printf "${BICyan}Adding ${White}license headers${BICyan} to ${Red}dist ${Green}bundles\n"
    for file in "${distFiles[@]}"; do
        printf "    ${BICyan}Adding ${White}license header${BICyan} to ${Green}$file\n"

        echo "$header
$(cat "$file")" > "$file" &
    done

        for file in "${distFilesMin[@]}"; do
        printf "    ${BICyan}Adding ${White}license header${BICyan} to ${Green}$file\n"

        echo "$minHeader
$(cat "$file")" > "$file" &
    done

    wait


    printf "${BICyan}Running ${Yellow}format.mjs${BICyan} on ${Red}lib\n"
    for d in ./lib/* ; do
        if [[ -d ${d} ]]; then
            for f in "$d/"* ; do
                printf "    ${BICyan}Running ${Yellow}format.mjs${BICyan} on ${Green}$f\n"
                ./format.mjs "$f" &
            done
        else
            printf "    ${BICyan}Running ${Yellow}format.mjs${BICyan} on ${Green}$d\n"
            ./format.mjs "$d" &
        fi
    done


    if [[ "$1" != "--no-docs" ]]; then
        npx typedoc &
    fi

    wait
}

buildDev() {
    chmod +x format.mjs

    # Compile typescript
    printf "${BIYellow}Compiling ${BIGreen}./src/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p tsconfig.json &
    printf "${BIYellow}Compiling ${BIGreen}./src/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p tsconfig.dist.json &
    printf "${BIYellow}Compiling ${BIBlue}./docs/${BIGreen}src${Purple} with ${BIBlue}Typescript\n"
    npx tsc -p tsconfig.docs.json &

    wait


    # Run Webpack on ./build and es5
    printf "${BIBlue}Packing ${Yellow}./build/index.js${Purple} files with ${ICyan}Webpack${Purple} and sending to ${Yellow}./dist/${Purple}\n"
    npx webpack &
    npx webpack --config webpack.docs.config.js &

    wait
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
    npx tsc -p tsconfig.docs.json
    cd docs || return
    yarn sass
    cd .. || return
    npx webpack --config webpack.docs.config.js --mode none &
    npx typedoc &

    wait
else
    build "$1"
fi
