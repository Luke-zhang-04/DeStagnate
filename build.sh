# Build shell script for dynamic-component
# Copyright (C) 2020 Luke Zhang | MIT License | luke-zhang-04.github.io

verison="1.1.2"

# Compile typescript
npx tsc -p .

mkdir build
cd src
find . -name "*.js" -exec mv "{}" ../build \;
cd ..

# Convert to commonJs with Babel
npx babel index.js -o index.js

# Run Webpack on ./build
npx webpack

# Copy bundle
cp ./dist/dateplus.bundle.js ./dist/dateplus.bundle.min.js

# Minify copy of bundle
npx babel ./dist/dateplus.bundle.min.js -o ./dist/dateplus.bundle.min.js --minified --compact true --no-comments -s inline

# Run babel on bundle
npx babel ./dist/dateplus.bundle.js -o ./dist/dateplus.bundle.js -s inline

# Remove previous lib
if [ -d "lib" ]; then
    rm -r lib
fi

npx babel build --out-dir lib

rm -r build

sed -i -e 's/src/lib/g' index.js
rm -rf index.js-e
