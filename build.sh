rm -r out-tsc-ivy
rm -r out-tsc-view-engine

./node_modules/.bin/ngc -p tsconfig.app.json
./node_modules/.bin/ngc -p tsconfig.app.view-engine.json

npm run prettier
