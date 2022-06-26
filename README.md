# How to use MapJS 2 with WebPack

1a. run `npm install` to grab the dependencies
1b. run `ln ~/git_projects/argmap/Output/mapjs-source.mup ~/git_projects/mapjs-webpack-example/src/example-map.json` to link the mindmup file used by index.html to the argmap mup output file.
2. run `npm run pack-js` to package MAPJS and all the dependencies into a single JS file
3. open `index.html` in your browser

## How it works

Check out [src/start.js](src/start.js) to see how the page is wired up and initialised.

