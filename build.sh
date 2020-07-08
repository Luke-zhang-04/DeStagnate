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
    npx tsc -p . &

    wait

    sed -i -e 's/src/lib/g' index.js
    rm -rf index.js-e

    printf "${Green}Moving ${Yellow}./src/*.js ${Purple}to ${Red}./build\n"
    mkdir build
    cd src
    find . -name "*.js" -exec mv "{}" ../build \;
    cd ..

    # Convert to commonJs with Babel
    printf "${BIYellow}Compiling${Yellow} index.js${Purple} in place with ${BIYellow}Babel${BIGreen}\n"
    npx babel index.js -o index.js &

    # Run Webpack on ./build
    printf "${BIBlue}Packing ${Yellow}./lib/index.js${Purple} files with ${ICyan}Webpack${Purple} and sending to ${Yellow}./dist/${Purple}\n"
    npx webpack &

    wait

    # Copy bundle
    printf "${BIBlue}Copying ${Green}dist bundle${Purple}\n"
    cp ./dist/deStagnate.bundle.js ./dist/deStagnate.bundle.min.js

    # Minify copy of bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/deStagnate.bundle.min.js/${Purple} and ${Blue}minifying${Purple}\n"
    npx babel ./dist/deStagnate.bundle.min.js -o ./dist/deStagnate.bundle.min.js --minified --compact true --no-comments -s inline &

    # Run babel on bundle
    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Yellow}./dist/deStagnate.bundle.min.js/${Purple}\n"
    npx babel ./dist/deStagnate.bundle.js -o ./dist/deStagnate.bundle.js -s inline &

    wait

    # Remove previous lib
     printf "${BGreen}Cleaning up...${Purple}\n"
    if [ -d "lib" ]; then
        rm -r lib
    fi

    printf "${BICyan}Running ${BIYellow}Babel${Purple} on ${Green}./lib/${BIGreen}\n"
    npx babel build --out-dir lib

    printf "${BGreen}Cleaning up...${Purple}\n"
    rm -r build
}

# Watches for file changes and executes build
watch() {
    fileChange1=""

    while [[ true ]]; do
        fileChange2=`find src/ -type f -exec md5 {} \;`

        if [[ "$fileChange1" != "$fileChange2" ]] ; then           
            build
            clear
            printf "Compiled successfully!\n\n"

            fileChange1="$fileChange2"
            printf "Waiting...\n"
        fi

        sleep 15
    done
}

if [[ "$1" == "--watch" ]]; then
    watch
else
    build
fi