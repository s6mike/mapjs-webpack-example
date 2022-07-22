/*global require, module, __dirname, process */
const path = require('path');
var webpack = require('webpack');
var default_map_value = 'webpack.config.js invalid map variable' // '/home/s6mike/git_projects/argmap/examples/example.yml'

module.exports = (env) => {
	return {
		entry: './src/start',
		devtool: 'source-map',
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, 'site/'),
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.input_map': JSON.stringify(env.input_map || default_map_value),
			}),
		],
	}
};

