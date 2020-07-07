#!/bin/bash
# Build shell script for DeStagnate
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

verison="1.1.2"

# Compile sass for docs (not really necessary)
sass docs/scss/style.scss docs/styles.css --style compressed

# Compile typescript
npx tsc -p .

sed -i -e 's/src/lib/g' index.js
rm -rf index.js-e

mkdir build
cd src
find . -name "*.js" -exec mv "{}" ../build \;
cd ..

# Convert to commonJs with Babel
npx babel index.js -o index.js

# Run Webpack on ./build
npx webpack

# Copy bundle
cp ./dist/deStagnate.bundle.js ./dist/deStagnate.bundle.min.js

# Minify copy of bundle
npx babel ./dist/deStagnate.bundle.min.js -o ./dist/deStagnate.bundle.min.js --minified --compact true --no-comments -s inline

# Run babel on bundle
npx babel ./dist/deStagnate.bundle.js -o ./dist/deStagnate.bundle.js -s inline

# Remove previous lib
if [ -d "lib" ]; then
    rm -r lib
fi

npx babel build --out-dir lib

rm -r build
