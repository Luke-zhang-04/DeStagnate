#!/bin/bash
# Build shell script for DeStagnate
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )" # Get location of this script
. "${DIR}/colours.sh" # Source colours file

# Build script
build() {
    chmod +x build.mjs

    # Compile typescript
    printf "${BIYellow}Compiling ${BIBlue}./src/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p tsconfig.json &
    npx tsc -p tsconfig.docs.json &

    wait

    # Run Webpack on ./build
    printf "${BIBlue}Packing ${Yellow}./lib/index.js${Purple} files with ${ICyan}Webpack${Purple} and sending to ${Yellow}./dist/${Purple}\n"
    npx webpack &
    npx webpack --config webpack.docs.config.js &

    wait

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

    # Minify copy of bundle from es6
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/es6/deStagnate.bundle.min.js/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/es6/deStagnate.bundle.min.js -o ./dist/es6/deStagnate.bundle.min.js --no-comments --no-babelrc --config-file ./.babelrc.min.es6.js &

    # Run babel on bundle from es6
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/es6/deStagnate.bundle.js/${Purple}\n"
    npx babel ./dist/es6/deStagnate.bundle.js -o ./dist/es6/deStagnate.bundle.js -s false --no-babelrc --config-file ./.babelrc.es6.js &

    # Minify copy of commonjs bundle from es6
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/es6/deStagnate.bundle.min.cjs/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/es6/deStagnate.bundle.min.cjs -o ./dist/es6/deStagnate.bundle.min.cjs --no-comments --no-babelrc --config-file ./.babelrc.min.es6.js &

    # Run babel on commonjs bundle from es6
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/es6/deStagnate.bundle.cjs/${Purple}\n"
    npx babel ./dist/es6/deStagnate.bundle.cjs -o ./dist/es6/deStagnate.bundle.cjs -s false --no-babelrc --config-file ./.babelrc.es6.js &

    # Run babel on testing bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./tests/deStagnate.bundle.js/${Purple}\n"
    npx babel ./tests/deStagnate.bundle.js -o ./tests/deStagnate.bundle.js -s false --no-babelrc --config-file ./.babelrc.testing.js &

    wait

    eslintConfig="{'no-var': 'off', 'prefer-arrow/prefer-arrow-functions': 'off', 'camelcase': 'off', 'id-length': 'off', 'no-use-before-define': 'off', 'max-len': 'off', 'require-jsdoc': 'off', 'vars-on-top': 'off', 'valid-jsdoc': 'off', 'semi': ['error', 'always']}"

    # Format development dist
    printf "${BIPurple}Formatting ${Red}dist ${Green}bundle\n"
    npx eslint ./dist/deStagnate.bundle.js --fix --env browser --rule "$eslintConfig" > out.log &
    npx eslint ./dist/deStagnate.bundle.cjs --fix --env browser --rule "$eslintConfig" > out.log &
    npx eslint ./dist/es6/deStagnate.bundle.js --fix --env browser --rule "$eslintConfig" > out.log &
    npx eslint ./dist/es6/deStagnate.bundle.cjs --fix --env browser --rule "$eslintConfig" > out.log &
    npx eslint ./tests/deStagnate.bundle.js --fix --env browser --rule "$eslintConfig" > out.log &

    wait

    printf "${BICyan}Running ${Yellow}build.mjs${BICyan} on ${Red}dist ${Green}bundles\n"
    ./build.mjs ./dist/deStagnate.bundle.js &
    ./build.mjs ./dist/deStagnate.bundle.cjs &
    ./build.mjs ./dist/es6/deStagnate.bundle.js &
    ./build.mjs ./dist/es6/deStagnate.bundle.cjs &
    ./build.mjs ./tests/deStagnate.bundle.js &

    wait

    printf "${BICyan}Adding ${White}license headers${BICyan} to ${Red}dist ${Green}bundles\n"
    header="/**
 * DeStagnate
 * A simple, ReactJS inspired library to create dynamic components within static sites easier
 * @copyright Copyright (C) 2020 Luke Zhang
 * @author Luke Zhang luke-zhang-04.github.io
 * @license MIT
 * @version 1.7.1
 * @file DeStagnate development bundle
 */
"

    minHeader="/**
 * Destagnate v1.7.1
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
$(cat ./dist/es6/deStagnate.bundle.js)" > ./dist/es6/deStagnate.bundle.js &

    echo "$minHeader
$(cat ./dist/es6/deStagnate.bundle.min.js)" > ./dist/es6/deStagnate.bundle.min.js &

    echo "$header
$(cat ./dist/es6/deStagnate.bundle.cjs)" > ./dist/es6/deStagnate.bundle.cjs &

    echo "$minHeader
$(cat ./dist/es6/deStagnate.bundle.min.cjs)" > ./dist/es6/deStagnate.bundle.min.cjs &

echo "$header

$(cat ./tests/deStagnate.bundle.js)" > ./tests/deStagnate.bundle.js &

    wait

    printf "${BICyan}Running ${Yellow}build.mjs${BICyan} on ${Red}lib\n"
    for d in ./lib/* ; do
        if [[ -d ${d} ]]; then
            for f in "$d/"* ; do
                ./build.mjs "$f"
            done
        else
            ./build.mjs "$d"
        fi
    done

    wait

}

buildDev() {
    chmod +x build.mjs

    # Compile typescript
    printf "${BIYellow}Compiling ${BIBlue}./src/${Purple} with ${BIBlue}TypeScript\n"
    npx tsc -p tsconfig.json &
    npx tsc -p tsconfig.docs.json &

    wait

    # Run Webpack on ./build
    printf "${BIBlue}Packing ${Yellow}./lib/index.js${Purple} files with ${ICyan}Webpack${Purple} and sending to ${Yellow}./dist/${Purple}\n"
    npx webpack &
    npx webpack --config webpack.docs.config.js --mode none &

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
    build
fi
