# Mapjs Project Change Log

## mapjs-webpack-example 2.0.0 BREAKING

- BREAKING CHANGE: Prepare to integrate with argmap as part of new argmapjs prototype:
  - Move everything except .gitignore into `mapjs` sub folder for merge with argmap git repo.
  - `webpack.config.js`:
    - Read env variables in from command line calls to webpack (e.g. `npm run pack-js -- --env.input_map=../examples/example-map.json`)
    - Add DefinePlugin to pass env variable to `src/start` entry file.
  - `src/start.js`: Get map input from command line call instead of `src/example-map.json`.
    - Delete `src/example-map.json`, leaving `src/example-map.json-backup.json`.
  - `package.json`: Update to webpack 3.12.0 to support env variables in `webpack.config.js`.
- Rename this `NEWS.md` file to `mapjs/docs/CHANGELOG.md` for consistency with my other projects.
- Fix lint issues on [README.md](../README) and `docs/CHANGELOG.md` (using [markdownlint - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)).

## mapjs-webpack-example 1.1.0

- Add this NEWS.md file.
- Update [README.md](../README) install instructions.

## mapjs-webpack-example 1.0.0

- Fork of [mindmup/mapjs-webpack-example: simple example how to pack mapjs 2 with webpack](https://github.com/mindmup/mapjs-webpack-example)
- Renamed example-map.json as example-map-backup.json
- Add .gitignore and package-lock.json

Uses [Semantic Versioning 2.0.0](https://semver.org/) and [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).
