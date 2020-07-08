#!/bin/bash
# Build shell script for DeStagnate
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

# Compile sass for docs (not really necessary)
printf "Compiling docs/scss/style.scss with SASS\n"
sass docs/scss/style.scss docs/styles.css --style compressed &

# Compile typescript
printf "Compiling TypeScript\n"
npx tsc -p . &

wait

sed -i -e 's/src/lib/g' index.js
rm -rf index.js-e

printf "Moving files to ./build\n"
mkdir build
cd src
find . -name "*.js" -exec mv "{}" ../build \;
cd ..

# Convert to commonJs with Babel
printf "Compiling index.js with Babel\n"
npx babel index.js -o index.js &

# Run Webpack on ./build
printf "Bundling ./build/index.js with Webpack\n"
npx webpack &

wait

# Copy bundle
printf "Copying dist bundle\n"
cp ./dist/deStagnate.bundle.js ./dist/deStagnate.bundle.min.js

# Minify copy of bundle
printf "Compiling and minifying distribution files with Babel\n"
npx babel ./dist/deStagnate.bundle.min.js -o ./dist/deStagnate.bundle.min.js --minified --compact true --no-comments -s inline &

# Run babel on bundle
printf "Compiling distribution files with Babel\n"
npx babel ./dist/deStagnate.bundle.js -o ./dist/deStagnate.bundle.js -s inline &

wait

# Remove previous lib
printf "Clearning up...\n"
if [ -d "lib" ]; then
    rm -r lib
fi

printf "Compiling build to lib with Babel\n"
npx babel build --out-dir lib

printf "Clearning up...\n"
rm -r build
