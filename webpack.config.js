const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'va-pubmenu.js',
	},
	plugins: [
		// new UglifyJsPlugin(),
	],
};