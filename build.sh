#!/bin/bash
# Build shell script for DeStagnate
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )" # Get location of this script
. "${DIR}/colours.sh" # Source colours file

# Build script
build() {
    # Compile sass for docs (not really necessary)
    printf "${BIYellow}Compiling ${Red}./docs/scss/ ${Purple}to ${BIBlue}./docs/css/ ${Purple}with ${BIRed}SASS${Purple}\n"
    printf "\t${BIYellow}Compiling ${Red}./docs/scss/style.scss ${Purple}to ${BIBlue}./docs/css/styles.css ${Purple}with ${BIRed}SASS${Purple}\n"
    sass docs/scss/style.scss docs/styles.css --style compressed &

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
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/deStagnate.bundle.min.js/${Purple}\n"
    npx babel ./dist/deStagnate.bundle.js -o ./dist/deStagnate.bundle.js -s inline &

    wait

    # Format development dist
    printf "${BIPurple}Formatting ${Red}dist ${Green}bundle\n"
    npx eslint ./dist/deStagnate.bundle.js --fix --env browser --rule "{\"no-var\": \"off\", \"prefer-arrow/prefer-arrow-functions\": \"off\", \"camelcase\": \"off\", \"id-length\": \"off\"}" > out.log &

    wait

    node build.js ./dist/deStagnate.bundle.js

    echo "/* Destagnate v1.5.1 | Copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io | MIT License */

\"use strict\";
$(cat ./dist/deStagnate.bundle.js)" > ./dist/deStagnate.bundle.js &

    echo "/* Destagnate v1.5.1 | Copyright (C) 2020 Luke Zhang https://luke-zhang-04.github.io | MIT License */

$(cat ./dist/deStagnate.bundle.min.js)" > ./dist/deStagnate.bundle.min.js &

    wait

    printf "${BIPurple}Formatting ${BIGreen}lib\n"
    for d in ./lib/* ; do
        if [[ ${d##*.} != "map" ]]; then
            npx eslint "$d" --no-ignore --fix --env browser --rule "{\"no-var\": \"off\", \"prefer-arrow/prefer-arrow-functions\": \"off\", \"camelcase\": \"off\", \"id-length\": \"off\", \"no-useless-constructor\": \"off\", \"@typescript-eslint/no-useless-constructor\": \"off\"}" >> out.log &
        fi
    done

    wait

    for d in ./lib/* ; do
        if [[ ${d##*.} != "map" ]]; then
            node build.js "$d"
        fi
    done

    # Copy bundle
    printf "${BIBlue}Copying ${Green}dist bundle min${Purple} to ${Blue}docs\n"
    echo "$(cat ./dist/deStagnate.bundle.min.js)" > ./docs/deStagnate.bundle.min.js &

    wait

}

buildDev() {
    # Compile sass for docs (not really necessary)
    printf "${BIYellow}Compiling ${Red}./docs/scss/ ${Purple}to ${BIBlue}./docs/css/ ${Purple}with ${BIRed}SASS${Purple}\n"
    printf "\t${BIYellow}Compiling ${Red}./docs/scss/style.scss ${Purple}to ${BIBlue}./docs/css/styles.css ${Purple}with ${BIRed}SASS${Purple}\n"
    sass docs/scss/style.scss docs/styles.css --style compressed &

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
