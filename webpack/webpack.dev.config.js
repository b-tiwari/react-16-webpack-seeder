var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [path.join(__dirname, '../src/index.js')],
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: ['@babel/plugin-proposal-class-properties', 'transform-object-rest-spread']
				}
			},
			{
				test: /\.less$/,
				loaders: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	},
	devServer: {
		inline: true, // autorefresh
		port: 8450 // development port server
	}
};
