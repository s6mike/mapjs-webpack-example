# How to use MapJS 2 with WebPack

1. Run `npm install` to grab the dependencies.
2. Run `npm run pack-js -- --env.input_map=[path to map.json file]` to package MAPJS and all the dependencies into a single JS file which displays the chosen map.json file (e.g. a mindmup export) as a mindmap.
3. Open `index.html` in your browser.

## How it works

Check out [src/start.js](src/start.js) to see how the page is wired up and initialised.
